# Presenter notes - Builder session 5: Marketing deep dive

Runtime target: 45 minutes. One live tree simulator, two SQL boxes.

## Preflight (2 min before you start)
- Open `courses/b5-marketing-deep-dive.html` in the browser.
- Press **Run** on any one SQL box once to cache the DuckDB-WASM engine before the room is watching - the first run downloads and warms the engine, later runs are instant. The tree simulator needs no network and works offline.
- Press **Simulate a drop** on the Demo 1 funnel tree once, then **Reset**, so you know which stage it hit.
- Set projector zoom on if the back row cannot read the tree inputs.

## Run of show
- 0-3 · Recap. One line: b2 gave the patterns, b3 the diagnosis playbook, b4 was ecommerce. Marketing is the cleanest multiplicative funnel. Read the "What you walk out with" callout aloud.
- 3-12 · Part 1, the funnel. Zoom the funnel SVG. Land the one idea: a funnel is a driver tree stood on its end, every stage a rate someone owns.
- 12-20 · Part 2, two top-lines. The whole point is separating revenue (volume) from ROAS (efficiency). Do the "revenue up, ROAS down" example out loud - it lands every time.
- 20-24 · Part 3, symptom to stage. Read the four rows. Flag attribution as a separate question, point to learn-marketing-attribution-with-phoebe.
- 24-36 · Demo 1. Everyone builds. Simulate a drop, trace the coral path, name the stage AND the cause. Do it twice.
- 36-42 · Demo 2. Q1 (halve CTR live), Q2 (channel SQL), Q3 is take-home - read the prompt, do not solve it.
- 42-45 · Quiz + Q&A.

## Never cut
- The pass-through demo in Demo 2 Q1 (halve CTR, revenue halves). It is the single most important intuition of the session.
- The revenue-vs-ROAS distinction in Part 2. Without it people celebrate the wrong number.

## Cut if long
- Part 3 can drop to naming just CTR-fatigue and win-rate; skip ACV and lead-rate rows.
- Demo 2 Q2 (channel SQL) can be assigned as homework instead of run live.
- The self-study cards in Part 1 and Part 2 are read-after-class by design.

## Likely questions
- "Isn't attribution the real problem?" - Yes, and it is a different tree. The funnel finds where conversion leaked; attribution finds which channel gets credit. Keep them separate. Point to the attribution course.
- "Why percentages not absolute numbers?" - Because only percentages pass through a product cleanly. A 400-lead loss means nothing until you know the rate.
- "Our funnel has more stages" - Fine, the shape is identical. More rates, same multiplication. Add stages to the tree JSON.
- "What if a stage went up while revenue fell?" - Then another stage fell more. Sum the percentage moves down the path; the negatives win.
