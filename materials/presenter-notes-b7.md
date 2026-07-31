# Presenter notes - Builder session 7: Internet and traffic deep dive

Runtime target: 45 minutes. Two live tree simulators (two-level ad-revenue product + DAU bridge), two SQL boxes on the events table.

## Preflight (2 min before you start)
- Open `courses/b7-internet-traffic-deep-dive.html` in the browser.
- Press **Run** on one SQL box once to cache the DuckDB-WASM engine before the room is watching - the first run warms it, later runs are instant. The tree simulators need no network.
- Simulate a drop on the Demo 1 ad-revenue tree once, then Reset, so you have seen it hit both an engagement leaf and a price leaf.
- Rehearse the eCPM footnote: $10 eCPM = $0.01 per single impression. This is the one number people trip on.

## Run of show
- 0-3 · Recap. Internet is different: the top-line is attention sold, not a purchase. Two connected trees - ad revenue (monetization) over the DAU loop (engagement). Read the win callout.
- 3-13 · Part 1, ad revenue two levels deep. Zoom the SVG. Say the identity, then the sub-tree. Hit the /1000 trap hard - store $0.01, not $10.
- 13-20 · Part 2, the DAU bridge. Show that inflows exactly offset churn at baseline (nets to 2.0M). Land: watch the flows, not the level.
- 20-24 · Part 3, symptom to branch. Every drop is engagement side (impressions) or price side (fill/eCPM). Read the four rows.
- 24-36 · Demo 1. Simulate a drop on the two-level tree, say engagement side or price side, then the specific leaf. Do it twice. Then the events-table engagement query.
- 36-42 · Demo 2. Q1 (double churn on the bridge - explain why EDIT not simulate for a loss), Q2 (active users by event type), Q3 take-home.
- 42-45 · Quiz + Q&A.

## Never cut
- The eCPM /1000 footnote in Part 1. It is the trap the whole session is built to inoculate against.
- Demo 2 Q1's "edit, do not simulate" note - simulate cuts a loss leaf and DAU rises, which confuses everyone if unexplained.

## Cut if long
- Part 3 can compress to just "engagement side vs price side" without the four sub-causes.
- Either events SQL box can move to homework; the trees are the core hands-on.
- Both self-study cards are read-after-class.

## Likely questions
- "Why store $0.01 instead of the $10 eCPM?" - Because the tree multiplies by a raw impression count. eCPM is per thousand; divide by 1,000 to get per-impression, or you are off 1,000x. Match units.
- "Why does Simulate a drop make DAU go up sometimes?" - It cut the Churned leaf. Less churn is good, so DAU rises. For a churn increase, edit the leaf up by hand.
- "Which is the real top-line, DAU or ad revenue?" - Both. Engagement is leading, revenue is lagging. They meet at impressions. Product owns the left branch, monetization owns the right.
- "Revenue held but DAU fell - good or bad?" - Fill or eCPM rose to offset lost impressions. Durable if the ad market strengthened; fragile if you crammed ad slots and are taxing the experience.
- "Our metric is MAU not DAU" - Same bridge, longer window. Start + new + resurrected - churned works for any active-user cadence.
