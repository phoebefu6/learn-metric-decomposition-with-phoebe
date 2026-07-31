# Presenter notes - b3 · Leading indicators & the diagnosis playbook

**Session:** Builder track, session 3 of 10 · 45 minutes · live tree simulator + SQL
**Audience:** analysts, PMs, founders, ops - anyone on the hook when a number goes red
**One-line goal:** leave able to test a leading indicator (predictive, early, controllable) and run the four-step playbook live from a coral tree trail into a GROUP BY.

## Preflight (do this before anyone arrives)
- Open `courses/b3-leading-indicators-playbook.html` in your presenting browser.
- Press **Run** on any one SQL box now to cache the ~8 MB DuckDB engine, so the first live query in front of the room is instant. The tree simulator needs no network.
- Sanity-run the Part 3 baseline query (the LAG window function) and the Demo 1 channel query - confirm rows come back.
- Simulate a drop then Reset on both trees. Set projector zoom on. Collapse cards.

## Run of show
- **0-3 · Recap.** b1 built a tree, b2 named its shape. Today: turn a static tree into a diagnostic reflex.
- **3-9 · Leading indicators.** Walk the timeline SVG: leading dips at week 3, lagging follows at week 4 - that gap is reaction time. Open the three-tests card.
- **9-16 · The three tests.** Predictive, early, controllable. Use the "7 friends in 10 days" story. Stress the controllable test - most quoted indicators fail it.
- **16-23 · The playbook.** Walk the four-step funnel SVG. Emphasise ORDER. Open step-2 card, simulate a drop; open step-3 card, run the channel query.
- **23-30 · Baselines.** Open the baseline card, run the LAG query. Monday-vs-Saturday trap. Match baseline to rhythm.
- **30-42 · Demo 1.** Full loop: tree drop (Q1 real? Q2 branch?), then the combined channel+AOV query (Q3 segment?), then name a cause (Q4). Then Demo 2 Q1/Q2 if time.
- **42-45 · Quiz + Q&A.** Close on "same four questions, same order, every time."

## Never cut
- The four-step order. If they remember one thing, it is the sequence.
- One live run of the baseline (LAG) query - "is it real?" is the step people skip.
- One full Demo 1 loop from coral trail to a named cause.

## Cut if running long
- Drop Demo 2 Q2 (month-vs-baseline) - the Part 3 baseline query already made the point.
- Compress the validating-a-leading-indicator self-study card to a pointer ("read it after").
- Skip the refund-rate query (Demo 2 Q1); the channel-revenue query covers segmentation.

## Likely questions
- *"Our data has few refunds - is the refund query pointless?"* The seed store has just a couple, so rates look small. Point out the technique (FILTER + rate) transfers to real volume.
- *"WoW or YoY - which is right?"* Match the metric's rhythm. Daily metric with weekly seasonality: same-day-of-week or YoY. Slow monthly metric: MoM is fine.
- *"Can a leading indicator be predictive but not controllable?"* Yes - weather predicts ice-cream sales but nobody owns weather. That is a forecast input, not a lever.
- *"strftime vs substr for month?"* The page uses `substr(order_date,1,7)` because order_date is TEXT - safest. `CAST ... AS DATE` then strftime also works if you prefer.
