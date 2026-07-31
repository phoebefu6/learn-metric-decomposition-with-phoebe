# Presenter notes - Builder session 6: Branding deep dive

Runtime target: 45 minutes. Two live tree simulators (brand funnel + share-of-search), no SQL in the core demos.

## Preflight (2 min before you start)
- Open `courses/b6-branding-deep-dive.html` in the browser.
- This session leans on the tree simulator, which needs no network - both trees render offline. There is no SQL box in b6, so no DuckDB warm-up is strictly required; if you plan to show a SQL box from another tab, press **Run** on it once first to cache the DuckDB-WASM engine.
- Simulate a drop on the Demo 1 brand funnel once, then Reset.
- Confirm the share-of-search additive tree in Demo 2 Q2 renders and the numbers sum to 400,000.

## Run of show
- 0-3 · Recap. Branding is the funnel that feeds the top of the marketing funnel from b5. Hardest deep-dive: soft metric, long lag, most gamed. Read the win callout.
- 3-13 · Part 1, the brand funnel. Zoom the funnel SVG. Land it: brand is soft but still multiplicative - conditional rates multiply, weakest stage caps the funnel. Stress that each stage maps to a real, measurable signal.
- 13-20 · Part 2, Share of Search. Zoom the lead-vs-lag SVG. The one line to say: watch your SHARE of category search, never raw volume.
- 20-24 · Part 3, why brand gets gamed. Three traps: vanity reach, awareness without consideration, long-lag Goodhart. The defence is watching stage-to-stage rates.
- 24-36 · Demo 1. Simulate a drop on the brand funnel, name the stage AND the real-world signal you would check. Do it twice.
- 36-42 · Demo 2. Q1 (awareness up, consideration down - funnel still shrinks), Q2 (build/read the share-of-search additive tree), Q3 take-home.
- 42-45 · Quiz + Q&A.

## Never cut
- Part 1's "each stage maps to a real signal" list. Without it, brand stays hand-waving and the whole session collapses.
- Demo 2 Q1 (awareness up, consideration down). It is the money demo - it shows why vanity reach cannot save a broken middle.

## Cut if long
- Part 3 can compress to just the vanity-reach trap.
- The share-of-search SVG can be described verbally if the funnel SVG already ran long.
- Both self-study cards are read-after-class.

## Likely questions
- "How do I actually measure awareness?" - Search interest and aided/unaided surveys. The point of the tree is to force a named signal per stage, not to pretend one number captures brand.
- "Why can't I divide in the tree to get share of search?" - The simulator only does product, sum, and bridge. Model the category as an additive tree (sum of every brand's searches); read your share as your leaf over the total.
- "Isn't Share of Search just correlation?" - It is the best-validated leading proxy, not a law. Triangulate it against sales; if search share leads and sales follow repeatedly, trust it.
- "Our brand awareness is huge, why worry?" - Awareness is sticky and cheap to inflate. Check the Aware-to-Consider rate; that is where established brands quietly bleed.
