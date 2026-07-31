# Presenter notes - b10 Capstone: diagnose the drop

60 min · Builder track · capstone · live tree simulator + DuckDB SQL

## Preflight
- Open b10-capstone.html; press Run on one SQL box once so DuckDB-WASM caches before Demo 2.
- The tree simulator needs no network; it runs on page load.
- Budget the full 60 minutes. Demo 3 is writing, not code - do not let Demos 1 and 2 eat its time.
- Test the two-level revenue tree: Web $144K + App $64K = about $208K at baseline.
- Have the worked narrative ready to read aloud (App conversion, refund spike, product owns, fix by Friday).

## Run of show
- 0-5 · Part 0: the brief. "Revenue is down 12%." No cause. This is the whole track in one moment.
- 5-10 · Part 1: the diagnosis loop and its four questions (which branch, which slice, why, does data confirm).
- 10-25 · Demo 1: build and read the two-level revenue tree; simulate a drop; answer Q1 (which branch) and set up Q2.
- 25-40 · Demo 2: revenue by channel (find the slice), then refund rate by channel (confirm the mechanism). Questions 3 and 4.
- 40-55 · Demo 3: the WBR template; read the worked example; learners fill their own blank. Protect this block - it is the payoff.
- 55-60 · Part 3 wrap (weekly a5 / monthly a6, sibling courses, honest gap list) + quiz.

## The one thing they must leave with
A drop is not a mystery - it is a four-question loop that ends in one owned paragraph.

## Never cut
- Demo 3. If time is tight, shorten Demo 1 or 2, never the narrative - the paragraph is the deliverable.
- The honest gap list in Part 3: this track reads and decomposes metrics; it does not build the platform or run the stats.

## Cut if long
- Part 1's four-questions card can be talked through against the SVG instead of expanded.
- The "sibling courses" card can be a one-line pointer to the hub.

## Likely questions
- "What if the tree points at Web, not App?" Same loop - segment whatever channel the coral trail names. The worked example is just one path.
- "The refund numbers are small." The seed is a teaching toy; the mechanism (refund rate by channel) is what transfers, not the magnitude.
- "Where does significance testing go?" Not here - "down 12%" is read at face value. That is the statistics and experimentation course.
- "Two-paragraph narrative okay?" No - if it needs two, cut to the single driver that owns the fall. One paragraph is the discipline.
