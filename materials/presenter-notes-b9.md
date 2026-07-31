# Presenter notes - b9 B2G deep dive

45 min · Builder track · live tree simulator (SQL-free session)

## Preflight
- Open b9-b2g-deep-dive.html. This session is tree-only - no SQL boxes - so no DuckDB warm-up is needed.
- The tree simulator needs no network; it runs on page load.
- Test the bookings tree: 40 opps x 25% x $250K should read $2.5M at baseline.
- Test the coverage tree in Demo 2: three stages sum to $7.5M. Against a $2.5M target that is 3x - have that on a sticky.

## Run of show
- 0-3 · Recap: sixth and final domain; reuse the multiplicative tree, add a second non-revenue top line.
- 3-11 · Part 1: two top lines - bookings (money) and outcomes (mission). Build the bookings tree. Stress they can disagree.
- 11-16 · Part 2: pipeline coverage = pipeline / target. Why a long cycle makes bookings useless for steering. Coverage is a ratio, so model the numerator.
- 16-20 · Part 3: three B2G drops (re-compete lost, budget delay, scope cut) plus the mission-vs-money Goodhart tension.
- 20-32 · Demo 1: simulate a bookings drop, name pipeline vs win-rate vs ACV, argue coverage would have warned earlier.
- 32-42 · Demo 2: Q1 win rate 25 to 20 (bookings fall 20%), Q2 build the coverage tree (edit Prospect down, coverage drops to 2x), Q3 prose (mission vs money).
- 42-45 · Quiz + Q&A.

## The one thing they must leave with
In a long-cycle business you steer by pipeline coverage, not bookings. And you hold two top lines at once.

## Never cut
- The coverage-is-a-ratio point: trees multiply and sum, never divide. Model the numerator, read against target by eye.
- The Goodhart tension: a program can bank bookings and fail the mission. Report both scoreboards.

## Cut if long
- Part 2's self-study card (leading vs lagging list) can be assigned as reading.
- The mission-top-line decomposition detail (additive vs ratio vs attainment) can be a one-line mention.

## Likely questions
- "Why not just divide in the tree for coverage?" The simulator only does x, +, and bridge. Coverage is pipeline / target - model the top, compare to target.
- "Isn't 25% win rate low?" For competitive government bids it is normal, which is why 3x coverage is the comfort line, not 1x.
- "Which top line wins when they disagree?" Depends who is asking - finance vs the citizen. The mature move is to report both, not to pick.
- "Budget delay vs lost deal?" A delay slips the opportunity right (it returns later); a lost re-compete is gone (win-rate leaf).
