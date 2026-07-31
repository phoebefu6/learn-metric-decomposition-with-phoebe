# learn-metric-decomposition-with-phoebe - course map

Built 2026-07-24. Build-first mode (course-taking loop paused). Topic has no single
certificate - it is a craft distilled from durable frameworks.

## Scope

Teach one skill: take any top-line business metric, decompose it into a driver tree
(leading drivers -> lagging outcome), and use the tree to diagnose a drop fast. Then
apply it to six domains + two operating-review cadences.

- **Owns:** driver trees / metric decomposition, leading vs lagging indicators, the three
  decomposition patterns (multiplicative rate x volume, additive segments, bridge flow),
  the drop-diagnosis playbook (tree -> segment -> isolate -> hypothesize -> confirm),
  metrics governance + Goodhart, and running the weekly + monthly metric reviews.
- **Not here:** how to BUILD the pipelines/warehouse behind the metrics (-> deng bucket:
  learn-data-engineering / learn-data-warehouse), SQL syntax depth (-> learn-sql), BI
  dashboard tooling (-> learn-business-intelligence), stats/experiment design (-> ds bucket).
- **Bucket:** `data`, diff 2. **Audience:** both (leader a1-a6 + builder b1-b10).

## Framework sources (build from these; no official cert)

| # | Source | Role |
|---|--------|------|
| F1 | **Lean Analytics** (Croll & Yoskovitz) | one-metric-that-matters per business model; the metric-per-stage idea |
| F2 | **DuPont analysis** | the original driver-tree decomposition (ROE = margin x turnover x leverage) |
| F3 | **Amplitude North Star Playbook** | North Star output + input metrics; leading inputs move the lagging output |
| F4 | **Amazon Weekly Business Review (WBR)** | reading metric trees on a cadence; the operating-review ritual (leader a5) |
| F5 | **Goodhart's Law / Measure What Matters (OKRs)** | gaming, guardrail metrics, governance (leader a6) |
| F6 | Domain metric canon | ecommerce GMV tree, SaaS ARR bridge, ad-revenue = impr x fill x CPM, marketing funnel, brand funnel, B2G pipeline |

## The 6 domains + their top-line trees (verified metric definitions)

1. **Ecommerce (b4):** GMV = Traffic x Conversion rate x AOV. Deeper: Traffic = sessions from
   channels (SEO+paid+direct+email); AOV = units/order x price/unit. Leading = traffic,
   add-to-cart; lagging = GMV.
2. **Marketing (b5):** Marketing-sourced revenue via the funnel = Spend -> Impressions ->
   Clicks (CTR) -> Leads (LP conv) -> MQLs -> SQLs -> Won (win rate) x ACV. Or ROAS = revenue
   / spend. Multiplicative funnel; leading = top-of-funnel volume, lagging = won revenue.
3. **Branding (b6):** Brand-driven sales via the brand funnel = Reach -> Awareness ->
   Consideration -> Preference -> Intent -> brand-driven purchase; plus Share of Search /
   Share of Voice as leading proxies for future market share. The "soft metric" case: leading
   = awareness/SOV/search interest, lagging = market share / price premium / brand-driven revenue.
4. **Internet/traffic (b7):** Ad revenue = Impressions x Fill rate x CPM (or eCPM). Impressions
   = DAU x sessions/user x ad slots/session. Alt top line: DAU via the engagement loop
   (new + resurrected + retained - churned). Leading = DAU/engagement, lagging = ad revenue.
5. **B2B SaaS (b8):** ARR bridge (additive/flow) = starting ARR + new + expansion - contraction
   - churn = ending ARR. New = leads x win rate x ACV. Leading = pipeline coverage, trials;
   lagging = ending ARR / NRR. Use the "bridge" tree op.
6. **B2G (b9):** Contract bookings = qualified pipeline x win rate x avg contract value; pipeline
   coverage = pipeline / target. Program outcomes (service delivery KPIs) as the mission-side
   top line. Leading = pipeline coverage, proposal volume; lagging = bookings / obligations.

## Live layer

- **tree-live.js** (NEW, reusable) - vanilla-JS interactive driver-tree simulator. A `.treebox`
  holds a `<pre class="tree-src">` with tree JSON. Edit a leaf -> parents recompute; "Simulate
  a drop" knocks one driver down and lights the leaf->root path coral with delta chips; "Reset"
  restores baseline. Ops: `"x"` (product), `"+"` (sum), `"bridge"` (sum of sign*child; child
  `"sign": -1` for churn/losses). Leaves: `{label, value, unit}` or `{label, value, pct:true}`.
  Reusable for any future metric/driver-tree course.
- **duck-live.js + metric-seed.js** - the DuckDB-WASM engine (renamed from the DE course) for
  the "segment to find the culprit" diagnosis SQL. Seed = Daybreak-style store orders
  (orders / order_items / customers / channel / status), fine as a generic ecommerce dataset.

## Session coverage

### Leader a1-a6 (exec, 45 min, no code)
| Session | Covers |
|---------|--------|
| a1 Why a number needs a tree | F1, F2 - top-line is an outcome; the driver-tree mindset |
| a2 Leading vs lagging | F3 - steer by leading, report by lagging |
| a3 Decompose & read a drop | 3 patterns + the diagnosis walk (is it real / which branch / which segment / vs baseline) |
| a4 The 6 domains side by side | each top-line + its tree in one exec view |
| a5 Weekly business performance review | F4 - the WBR ritual: what to look at, what to ask, how trees drive it |
| a6 Monthly leadership summit review | F5 - the monthly roll-up: narrative, governance, Goodhart, decisions |

### Builder b1-b10 (tree simulator + SQL, diff 2)
| Session | Covers |
|---------|--------|
| b1 First driver tree | ecommerce GMV in the live simulator (DONE, template) |
| b2 Three patterns | multiplicative / additive / bridge - build each live |
| b3 Leading indicators + diagnosis playbook | find/validate leading metrics (lead-time, correlation); segment->isolate->confirm |
| b4 Ecommerce deep dive | full GMV tree + simulate a drop + segment SQL |
| b5 Marketing deep dive | funnel to marketing-sourced revenue + drop |
| b6 Branding deep dive | brand funnel + share-of-search leading + drop |
| b7 Internet/traffic deep dive | ad revenue = impr x fill x CPM (or DAU) + drop |
| b8 B2B SaaS deep dive | ARR bridge (new+expansion-churn-contraction) + drop |
| b9 B2G deep dive | contract bookings / pipeline coverage + program outcomes + drop |
| b10 Capstone | a mystery drop, diagnose end to end across a tree + WBR narrative |

## Iron rules honored
Hyphens only (no em/en dash); "by Phoebe Fu"; editorial-bold template; airy line height;
every concept gets a diagram or a live tree; ledger-green #2F7D5B + alert-coral #E4572E.
