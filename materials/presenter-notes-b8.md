# Presenter notes - b8 B2B SaaS deep dive

45 min · Builder track · live tree simulator + DuckDB SQL

## Preflight
- Open b8-b2b-saas-deep-dive.html; press Run on one SQL box once so DuckDB-WASM caches (first run is slow, rest are instant).
- The tree simulator needs no network - it runs the moment the page loads.
- Test the ARR bridge: confirm ending ARR reads about $1.11M at baseline. If it reads $1.43M, a sign:-1 got dropped - reload.
- Have the NRR arithmetic on a sticky: (1.00M + 90K - 40K - 120K) / 1.00M = 93%.

## Run of show
- 0-3 · Recap: patterns from b2, five domains done, today the bridge gets its flagship (recurring revenue).
- 3-11 · Part 1: ARR as a bridge. Draw the five flows; land "you manage the flows, not the net move." Show NRR = four of the five flows.
- 11-16 · Part 2: New ARR = Leads x Win-rate x ACV. A product tree inside one flow. Pipeline coverage as the leading indicator.
- 16-20 · Part 3: three classic drops (churn spike, expansion stall, new falls) mapped to leaves.
- 20-32 · Demo 1: simulate a drop on the bridge, classify new-business shortfall vs retention leak; run the active-vs-cancelled SQL.
- 32-42 · Demo 2: Q1 halve expansion (watch NRR fall to 88.5%), Q2 churn by plan (all churn is Basic), Q3 prose (low churn compounds).
- 42-45 · Quiz + Q&A.

## The one thing they must leave with
Net new ARR can look healthy while gross churn doubles. Read the gross flows, not the net.

## Never cut
- The bridge sign discipline: contraction and churn carry sign:-1. Say why the simulator's "drop" on churn makes ARR rise.
- Q2 result: every cancellation is on the Basic plan. That is the segment lead - the whole point of tree-then-segment.

## Cut if long
- Part 2's self-study card (leading vs lagging) can be assigned as reading.
- The New = Leads x Win-rate x ACV tree can be described verbally if the room is tight; the bridge is the priority.

## Likely questions
- "Why does NRR ignore New?" NRR asks whether the base grows on its own; New is bolted on top, so it is excluded on purpose.
- "Is 93% NRR bad?" It means the base leaks - New has to run to stand still. Best-in-class runs above 120%.
- "Contraction vs churn?" Contraction is a downgrade (still a customer); churn is a full departure. Both drain, churn usually costs more.
- "The simulator made churn smaller when I hit Simulate a drop - is that a bug?" No - to model a churn spike, edit Churn up by hand.
