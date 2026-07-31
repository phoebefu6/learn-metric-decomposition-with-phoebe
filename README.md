<!-- learn-with-phoebe hub banner -->
> ### 📚 Part of [**Learn with Phoebe**](https://phoebefu6.github.io/learn-with-phoebe/)
> The shelf of 39 free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**
<!-- /learn-with-phoebe hub banner -->

# learn-metric-decomposition-with-phoebe

Take any top-line business metric, decompose it into a driver tree - leading drivers up to a lagging outcome - and diagnose a drop in minutes instead of a week of meetings. Every builder session runs a live driver-tree simulator in your browser: edit a driver and the top line recomputes, press "Simulate a drop" and the guilty driver's path lights coral so you practise tracing a fall back to its cause, then segment that driver with live SQL to find the culprit slice.

**Live site:** https://phoebefu6.github.io/learn-metric-decomposition-with-phoebe/

Two tracks, one skill. The leader track (a1-a6, no code, 45 min each) teaches executives to read a tree and run the review rituals. The builder track (b1-b10, live simulator + SQL, 45 min each; b10 is 60) builds and diagnoses trees across six real domains.

## The leader track - read &amp; run reviews

For C-level, managers, and curious minds. No code to write.

| Session | Title | Difficulty |
|---------|-------|------------|
| a1 | Why a number needs a tree | 🟢 easy |
| a2 | Leading vs lagging | 🟢 easy |
| a3 | Decompose and read a drop | 🟢 easy |
| a4 | The six domains side by side | 🟡 medium |
| a5 | The weekly business performance review | 🟡 medium |
| a6 | The monthly leadership summit review | 🟡 medium |

## The builder track - build &amp; diagnose

For practitioners. Live driver-tree simulator + DuckDB SQL on every page.

| Session | Title | Difficulty |
|---------|-------|------------|
| b1 | Your first driver tree | 🟢 easy |
| b2 | The three decomposition patterns | 🟢 easy |
| b3 | Leading indicators and the diagnosis playbook | 🟢 easy |
| b4 | Ecommerce deep dive | 🟡 medium |
| b5 | Marketing deep dive | 🟡 medium |
| b6 | Branding deep dive | 🟡 medium |
| b7 | Internet and traffic deep dive | 🟡 medium |
| b8 | B2B SaaS deep dive | 🟡 medium |
| b9 | B2G deep dive | 🟡 medium |
| b10 | Capstone: diagnose the drop | 🟠 hands-on · 60 min |

## The live simulator

The builder track is not slides about decomposition - you run it.

- **Live driver-tree simulator (`tree-live.js`).** Every builder page renders an editable driver tree. Change any leaf - drop conversion from 2.8% to 2.5% - and every parent up to the top line recomputes instantly, with a delta chip showing the move. Press **Simulate a drop** and one driver is knocked down at random; the whole path from that leaf up to the root lights coral, so you practise naming the guilty driver from the trail every time.
- **Live DuckDB SQL segmentation (`duck-live.js`).** The tree tells you *which* driver fell; segmentation tells you *where*. Editable SQL runs against a small store's orders via real DuckDB-WASM - `GROUP BY` the guilty driver by channel, plan, or status to isolate the slice that moved. Tree first, SQL second: never SQL before the tree tells you where to look.

The engine loads once from a CDN (about 8 MB, cached); everything after that runs offline. No install, no cluster, no bill.

## Six industries + two review cadences

One decomposition skill, applied across the way businesses actually make money:

1. **Ecommerce** - GMV = Traffic x Conversion x AOV
2. **Marketing** - the funnel from spend to leads to CAC
3. **Branding** - the brand funnel and share of search
4. **Internet and traffic** - ad revenue and the DAU bridge
5. **B2B SaaS** - the ARR bridge and pipeline coverage
6. **B2G** - government bookings, mission versus money

Plus the two rituals where trees get read out loud: the **weekly business performance review** (a5) and the **monthly leadership summit review** (a6).

## Sources - a craft, not a certificate

Metric decomposition has no single certificate. It is a craft distilled from a handful of durable frameworks, taught here applied live in the simulator rather than described. This course is built from *Lean Analytics* (Croll &amp; Yoskovitz), DuPont driver-tree analysis (the century-old original), the Amplitude North Star Playbook, and the Amazon Weekly Business Review. The frameworks stay with their authors; this course is one hands-on way to practise them.

## Sibling courses

- [learn-business-intelligence-with-phoebe](https://phoebefu6.github.io/learn-business-intelligence-with-phoebe/) - the dashboards these trees live in
- [learn-data-warehouse-with-phoebe](https://phoebefu6.github.io/learn-data-warehouse-with-phoebe/) - where the numbers come from
- [learn-marketing-attribution-with-phoebe](https://phoebefu6.github.io/learn-marketing-attribution-with-phoebe/) - the marketing domain in depth

---

learn-metric-decomposition-with-phoebe · by Phoebe Fu · 📚 [Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)
