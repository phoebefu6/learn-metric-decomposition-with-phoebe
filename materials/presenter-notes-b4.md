# Presenter notes - b4 · Ecommerce deep dive

**Session:** Builder track, session 4 of 10 · 45 minutes · live tree simulator + SQL
**Audience:** analysts, PMs, founders, ops working on or near an online store
**One-line goal:** leave able to read a two-level GMV tree cold and route any of the three classic ecommerce drops to one owning team.

## Preflight (do this before anyone arrives)
- Open `courses/b4-ecommerce-deep-dive.html` in your presenting browser.
- Press **Run** on any SQL box now to cache the ~8 MB DuckDB engine so the first live query is instant. The tree simulator needs no network.
- The deep GMV tree is the star and it is bigger than earlier ones - confirm it renders all seven leaves wide and that Simulate a drop lights a full coral path (leaf up through Traffic or AOV to GMV). Then Reset.
- Dry-run the three Demo queries (revenue by channel, completion rate, AOV by channel) - confirm rows return.
- Projector zoom on. Collapse cards.

## Run of show
- **0-3 · Recap.** First of six domain deep-dives. GMV is the cleanest tree; master it and b5-b9 feel familiar.
- **3-10 · The full tree.** Walk the two-level SVG. Open "why two levels beats one." Show that patterns NEST: multiplicative root, additive Traffic, multiplicative AOV.
- **10-15 · Read the live deep tree.** Baseline ~$208K. Edit Paid traffic down; watch Traffic sum and GMV both fall. One channel, not "traffic."
- **15-18 · Leading vs lagging.** Add-to-cart and sessions lead; refunds lag. Steer by leaves, report the root.
- **18-23 · The three drops.** Walk the symptom-to-branch table. Channel dies (additive), checkout breaks (conversion leaf), discount erodes (price leaf).
- **23-35 · Demo 1.** Simulate a drop on the deep tree, name branch + pattern, confirm with the channel query.
- **35-42 · Demo 2.** Learners run completion-rate-by-channel (Q1) and AOV-by-channel (Q2); reason out Q3 (traffic flat, AOV flat -> conversion).
- **42-45 · Quiz + Q&A.** Close on "the shape of the fall names the cause."

## Never cut
- The two-level tree read - it is the entire upgrade over b1.
- The "patterns nest" point (multiplicative root, additive Traffic, multiplicative AOV).
- Demo 2 Q3 reasoning: traffic flat + AOV flat implies conversion. The no-data deduction is the payoff skill.

## Cut if running long
- Drop Demo 2 Q2 (AOV by channel) - Q1 plus the tree already show segmentation.
- Shorten the "traffic was really one channel" story to one line.
- Skip the leading-vs-lagging card and fold its point into the drops table.

## Likely questions
- *"We have no sessions table - how do I get conversion?"* Use completion rate as a proxy (completed / all orders by channel), as in Demo 2 Q1. Note it is a proxy, not true funnel conversion.
- *"Why is the seed store's AOV not exactly $62?"* The tree's AOV (2 x $31 = $62) is illustrative; the live SQL computes real AOV from order_items, which will differ. That gap is a good teaching moment - the tree is the model, SQL is the measurement.
- *"How deep should a real GMV tree go?"* Deep enough that each leaf is owned and leading. Two levels routes most drops to one team; a third (device, geo) helps for large stores.
- *"Additive vs multiplicative - why does Traffic sum but AOV multiply?"* Channels add up to total traffic (parts of a whole). AOV is units times price (a rate on a base). Same tree, different local rules - the b2 lesson made concrete.
