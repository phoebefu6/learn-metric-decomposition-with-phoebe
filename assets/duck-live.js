/* learn-data-engineering-with-phoebe - live data-engineering playground engine
   Every .sqlbox on a page is a REAL, editable SQL script run against a fresh
   copy of the Daybreak source system (assets/dw-seed.js) on DuckDB - an
   actual columnar OLAP engine compiled to WebAssembly, running entirely in
   your browser via a worker.

   The engine (~8 MB compressed) loads ONCE from the jsDelivr CDN on your
   first Run, then stays cached. That is the one network dependency of the
   playgrounds - the honest price of running a real warehouse engine instead
   of a toy.

   Markup a page uses (same shape as the learn-sql course):
     <div class="sqlbox" data-caption="optional line under the box"
          data-setup="staging|star|scd|big" data-seed="none">
       <pre class="sql-src">SELECT * FROM customers;</pre>
     </div>
   data-seed="none"  -> start from an EMPTY database (CREATE-from-scratch demos)
   data-setup="star" -> pre-build a named warehouse state (see dw-seed.js)
   Scripts can hold MULTIPLE statements separated by ';' - the last result
   set is rendered, so end with the SELECT you want to see. */

(function () {
  var MAX_ROWS = 50;
  var CDN = "https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.32.0";
  var EngineReady = null; // shared promise: { db, conn }
  var RunQueue = Promise.resolve(); // one connection - runs must not interleave

  function enqueue(job) {
    var next = RunQueue.then(job, job);
    RunQueue = next.then(function () {}, function () {});
    return next;
  }

  function loadEngine(onStatus) {
    if (EngineReady) return EngineReady;
    if (onStatus) onStatus("Loading DuckDB engine (~8 MB, one time)...");
    EngineReady = import(CDN + "/+esm").then(function (duckdb) {
      var bundles = {
        mvp: { mainModule: CDN + "/dist/duckdb-mvp.wasm",
               mainWorker: CDN + "/dist/duckdb-browser-mvp.worker.js" },
        eh:  { mainModule: CDN + "/dist/duckdb-eh.wasm",
               mainWorker: CDN + "/dist/duckdb-browser-eh.worker.js" }
      };
      return duckdb.selectBundle(bundles).then(function (bundle) {
        var workerUrl = URL.createObjectURL(new Blob(
          ['importScripts("' + bundle.mainWorker + '");'],
          { type: "text/javascript" }));
        var worker = new Worker(workerUrl);
        var db = new duckdb.AsyncDuckDB(new duckdb.VoidLogger(), worker);
        return db.instantiate(bundle.mainModule, bundle.pthreadWorker)
          .then(function () { return db.connect(); })
          .then(function (conn) { return { db: db, conn: conn }; });
      });
    });
    EngineReady.catch(function () { EngineReady = null; }); // allow retry
    return EngineReady;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function fmtVal(v, kind) {
    if (v === null || v === undefined) return null;
    if (kind === "date") return new Date(Number(v)).toISOString().slice(0, 10);
    if (kind === "ts") return new Date(Number(v)).toISOString().slice(0, 19).replace("T", " ");
    if (typeof v === "bigint") return v.toString();
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    if (typeof v === "number") {
      if (Number.isInteger(v)) return String(v);
      return String(Math.round(v * 100) / 100);
    }
    return String(v);
  }

  /* fields: [{name, kind}] where kind marks Arrow Date/Timestamp columns so
     epoch-millis values render as readable dates */
  function renderTable(fields, rows) {
    var shown = rows.slice(0, MAX_ROWS);
    var html = '<div class="sql-tablewrap"><table class="clean sql-table"><thead><tr>';
    fields.forEach(function (f) { html += "<th>" + esc(f.name) + "</th>"; });
    html += "</tr></thead><tbody>";
    shown.forEach(function (row) {
      html += "<tr>";
      fields.forEach(function (f) {
        var cell = fmtVal(row[f.name], f.kind);
        html += "<td>" + (cell === null ? '<span class="sql-null">NULL</span>' : esc(cell)) + "</td>";
      });
      html += "</tr>";
    });
    html += "</tbody></table></div>";
    var note = rows.length + " row" + (rows.length === 1 ? "" : "s");
    if (rows.length > MAX_ROWS) note += " - showing first " + MAX_ROWS;
    html += '<p class="sql-note">' + note + "</p>";
    return html;
  }

  /* split a script into statements on ';'. Strip -- line comments first so a
     semicolon inside a comment does not fracture the statement. (Course content
     never embeds semicolons inside string literals - keep examples that way.) */
  function splitSql(script) {
    var noComments = script.replace(/--[^\n]*/g, "");
    return noComments.split(";").map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 0; });
  }

  /* wipe main schema so every run starts from a clean, freshly seeded copy */
  function resetSql(conn) {
    return conn.query(
      "SELECT table_name, table_type FROM information_schema.tables WHERE table_schema = 'main'"
    ).then(function (res) {
      var drops = res.toArray().map(function (r) {
        var o = r.toJSON();
        var kind = String(o.table_type).indexOf("VIEW") >= 0 ? "VIEW" : "TABLE";
        return "DROP " + kind + ' IF EXISTS "' + o.table_name + '" CASCADE';
      });
      var chain = Promise.resolve();
      drops.forEach(function (d) {
        chain = chain.then(function () { return conn.query(d); });
      });
      return chain;
    });
  }

  function runScript(conn, sqlText) {
    var stmts = splitSql(sqlText);
    var last = null;
    var chain = Promise.resolve();
    stmts.forEach(function (s) {
      chain = chain.then(function () {
        return conn.query(s).then(function (res) { last = res; });
      });
    });
    return chain.then(function () {
      if (!last || !last.schema || last.schema.fields.length === 0) {
        return '<p class="sql-note">Script ran (' + stmts.length +
               " statement" + (stmts.length === 1 ? "" : "s") + "). No rows returned.</p>";
      }
      var fields = last.schema.fields.map(function (f) {
        var t = String(f.type);
        var kind = /Date/.test(t) ? "date" : (/Timestamp/.test(t) ? "ts" : "");
        return { name: f.name, kind: kind };
      });
      var rows = last.toArray().map(function (r) { return r.toJSON(); });
      return renderTable(fields, rows);
    });
  }

  function wire(block) {
    var srcEl = block.querySelector(".sql-src");
    if (!srcEl) return;
    var original = srcEl.textContent.replace(/^\n+/, "").replace(/\s+$/, "");
    var caption = block.getAttribute("data-caption") || "";
    var seeded = block.getAttribute("data-seed") !== "none";
    var setupName = block.getAttribute("data-setup") || "";

    block.innerHTML = "";
    block.classList.add("sqlbox-ready");

    var bar = document.createElement("div");
    bar.className = "sql-bar";
    var dot = document.createElement("span"); dot.className = "sql-dot";
    var title = document.createElement("span"); title.className = "sql-title";
    title.textContent = seeded
      ? (setupName ? "live warehouse - " + setupName + " layer ready" : "live warehouse - edit and run")
      : "live warehouse - empty database";
    var spacer = document.createElement("span"); spacer.className = "sql-spacer";
    var runBtn = document.createElement("button");
    runBtn.type = "button"; runBtn.className = "sql-btn sql-run"; runBtn.textContent = "▶ Run";
    var resetBtn = document.createElement("button");
    resetBtn.type = "button"; resetBtn.className = "sql-btn"; resetBtn.textContent = "Reset";
    var copyBtn = document.createElement("button");
    copyBtn.type = "button"; copyBtn.className = "sql-btn"; copyBtn.textContent = "Copy";
    bar.appendChild(dot); bar.appendChild(title); bar.appendChild(spacer);
    bar.appendChild(runBtn); bar.appendChild(resetBtn); bar.appendChild(copyBtn);

    var codeWrap = document.createElement("div"); codeWrap.className = "sql-code-wrap";
    var codeLabel = document.createElement("span"); codeLabel.className = "sql-label";
    codeLabel.textContent = "You write";
    var ta = document.createElement("textarea");
    ta.className = "sql-code"; ta.spellcheck = false;
    ta.setAttribute("aria-label", "Editable SQL script");
    ta.value = original;
    ta.rows = Math.min(Math.max(original.split("\n").length + 1, 3), 18);
    codeWrap.appendChild(codeLabel); codeWrap.appendChild(ta);

    var outWrap = document.createElement("div"); outWrap.className = "sql-out-wrap";
    var outLabel = document.createElement("span"); outLabel.className = "sql-label";
    outLabel.textContent = "Warehouse returns";
    var out = document.createElement("div"); out.className = "sql-out";
    out.innerHTML = '<p class="sql-note sql-hint">Press ▶ Run to execute. First run loads the engine (~8 MB, one time).</p>';
    outWrap.appendChild(outLabel); outWrap.appendChild(out);

    block.appendChild(bar);
    block.appendChild(codeWrap);
    block.appendChild(outWrap);
    if (caption) {
      var cap = document.createElement("div"); cap.className = "sql-cap";
      cap.textContent = caption; block.appendChild(cap);
    }

    var busy = false;
    function run() {
      if (busy) return;
      busy = true;
      var t0 = performance.now();
      out.innerHTML = '<p class="sql-note sql-hint">Running...</p>';
      loadEngine(function (msg) {
        out.innerHTML = '<p class="sql-note sql-hint">' + esc(msg) + "</p>";
      }).then(function (eng) {
        return enqueue(function () {
          return resetSql(eng.conn).then(function () {
            var pre = "";
            if (seeded) pre += (window.DW_SEED || "");
            if (seeded && setupName && window.DW_SETUPS && window.DW_SETUPS[setupName]) {
              pre += "\n" + window.DW_SETUPS[setupName];
            }
            var prep = pre ? runScript(eng.conn, pre) : Promise.resolve();
            return prep.then(function () { return runScript(eng.conn, ta.value); });
          });
        });
      }).then(function (html) {
        var ms = Math.round(performance.now() - t0);
        out.innerHTML = html + '<p class="sql-note sql-ms">' + ms + " ms in your browser</p>";
        block.classList.remove("sql-had-err");
        busy = false;
      }, function (err) {
        out.innerHTML = '<p class="sql-err">' + esc(err && err.message ? err.message : err) + "</p>";
        block.classList.add("sql-had-err");
        busy = false;
      });
    }

    runBtn.addEventListener("click", run);
    ta.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") { e.preventDefault(); run(); }
    });
    resetBtn.addEventListener("click", function () {
      ta.value = original;
      out.innerHTML = '<p class="sql-note sql-hint">Press ▶ Run to execute.</p>';
      block.classList.remove("sql-had-err");
    });
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(ta.value).then(function () {
        copyBtn.textContent = "Copied ✓";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
      });
    });
  }

  function init() {
    Array.prototype.slice.call(document.querySelectorAll(".sqlbox")).forEach(wire);
    /* no background warm-up: the engine is 8 MB, so it loads on first Run */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
