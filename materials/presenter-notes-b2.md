# Presenter notes - b2 · The three decomposition patterns

**Session:** Builder track, session 2 of 10 · 45 minutes · live tree simulator + SQL
**Audience:** analysts, PMs, founders, ops - anyone who reads a metric review
**One-line goal:** leave able to classify any metric on sight as product, sum, or bridge, and know how each drop reads.

## Preflight (do this before anyone arrives)
- Open `courses/b2-three-patterns.html` in the browser you will present from.
- This page has no SQL boxes, but b3 and b4 do - if you are presenting the whole block back to back, open one SQL box on b3/b4 and press **Run** once now to cache the ~8 MB DuckDB engine. The tree simulator needs no network at all.
- Press **Simulate a drop** then **Reset** on each of the three intro trees (multiplicative, additive, bridge) to confirm they wire up and the coral trail lights.
- Set projector zoom on via the toolbar button. Collapse all cards so you open them on cue.

## Run of show
- **0-3 · Recap.** Callback to b1: one tree, GMV, broken live. Frame today: not every metric multiplies. Read the "what you walk out with" callout.
- **3-9 · Pattern 1, multiplicative.** Show the three-shape SVG. Open the pass-through card. Edit Users down 10% on the live tree; revenue falls 10%. Say "clean pass-through" out loud.
- **9-14 · Pattern 2, additive.** Simulate a drop on the region tree. Hammer the weight idea: a 20% fall in a 15% segment moves the total ~3%. Contribution = share.
- **14-20 · Pattern 3, bridge.** The active-users bridge. Ask the room "adds or losses?" before "how much?". Point at the churn leaf carrying the minus.
- **20-32 · Demo 1.** Three live trees, one per pattern. For each: simulate, follow coral, name the pattern AND the driver. This is the core rep.
- **32-42 · Demo 2.** Learners edit the two trees to their own metrics; write the stock-vs-flow answer (Q3).
- **42-45 · Quiz + Q&A.** Three questions, then close on "shape first, culprit second."

## Never cut
- The pass-through demo (edit one leaf, watch same-% move). It is the whole intuition for products.
- The "adds or losses?" bridge question. It is the single most transferable idea in the session.
- At least one full Demo 1 rep where someone names both pattern and driver.

## Cut if running long
- Drop Demo 2 Q2 (additive edit) - Q1 and Q3 carry the point.
- Shorten the additive real-world "just one region" story to one sentence.
- Skip the SVG zoom and narrate the three shapes from the live trees instead.

## Likely questions
- *"What if a metric is a mix of shapes?"* It usually is - b4 shows a multiplicative root with an additive Traffic branch nested inside. Name each node's local rule.
- *"Is ARR ever a product?"* New ARR in a period can be modelled multiplicatively, but the ARR balance itself is always a bridge because it carries forward.
- *"How deep should I nest?"* Deep enough that leaves are owned and leading. b1's rule: push until the leaves give early signal. Diminishing returns past 3 levels.
- *"Percentages do not pass through my sum - bug?"* Not a bug. Only products pass % through. Sums move by weighted absolute change - that is the lesson.
