# Maths kit needs: Year 12 Standard, the normal distribution, critical path analysis and network flow (math-s12-z01 to z06, c01 to c06, f01 to f04)

Maths Standard start, 19 November 2026, methods of brief 243 section 5. One author. Existing parts are named from `src/explainer/math/studio/` (names checked against the exports on 19 November 2026: `normal-parts.tsx`, `dist-parts.tsx`, `spread-parts.tsx`, `a11-data-parts.tsx`, `rig.tsx`, `finance-parts.tsx`, `board.tsx`, `cards.tsx`, `primitives.tsx`). A search of `src/explainer` for network, Gantt and flow parts found none (the only hits are biology and chemistry lessons using the word "network"). These are requirements for later build work, not implemented capability or a pilot pass. No source file was changed.

Root ruling 7 applies: visual parts, sims and plates may be reused from Advanced; scripts are new and gentler, and Advanced anchors are not reused (chips bags s09, apples s10, fish s11, the bottle filler s12). The Standard 2 normal distribution uses the bell, z-scores and the empirical rule only: no density formula, no Φ tables, no integrals.

Every video uses the shared frame: `WorkingBoard` (TaskStrip, EquationStrip, GivensCard, `WorkingRows`, AnswerFrame, MistakeCard) from `board.tsx`, `QuestionCard` with `GivensStrip` and its countdown, `KeyNotesScreen` and `MemoryAidCard` from `cards.tsx`, role colours from `roles.tsx`, and `HandTag`, `DrawnMark` and `PlateImg` from `primitives.tsx`. Values come from exact arithmetic (`work/brief-standard-zcf/recalc.py` holds every pack value).

## The normal distribution (z01 to z06)

| Video | Existing parts it can use | New part it needs |
| --- | --- | --- |
| z01 the bell; mean, median, mode | `ClassHistogram` with `drop` (dist-parts.tsx) for loaves landing in classes; `NormalCurve` with `marks` and `ghost` (two widths); `StudioBalanceBeam` and `balancePoint` (spread-parts.tsx) for the mean; `MedianReader` (a11-data-parts.tsx); `BagFill` as the pattern for items on a scale; `PegBoard` (optional) | None. |
| z02 the z-score | `SigmaRuler` (live σ-step count); `NormalCurve` with `morph` and `standardiseAt` (onto N(0, 1)); `SpreadBrackets` | None. |
| z03 comparing tests | `ScoreCompare` (raw lines sliding onto one z-axis) | Small: a **lower-is-better flag** on ScoreCompare (race times: the most negative z lit as best). |
| z04 the empirical rule | `BandSlider` (±kσ band with live readout), `NormalCurve` `shade`, `TailLadder`; `ClassHistogram` for the skewed contrast | Small: a **rule readout mode** on BandSlider, ZSlider and TailLadder (68, 95, 99.7 and the pieces 34, 13.5, 2.35, 0.15 from the rule, not Φ to four places), and an **empirical-rule label set** written on the bell's eight regions. |
| z05 probability by shading | `NormalCurve` `shade` (from, to), `TailLadder`, `ZSlider`, `BandSlider`; `FillDial`'s conveyor as the motion pattern for a loaf line (not its anchor) | Small: a **piece-sum label** (0.5 + 0.34 = 0.84 assembling on the shaded area), using the rule readout mode above. |
| z06 unusual results | `ZSlider` (tails), `NormalCurve` two-tail `shade`, `TailLadder`; `FillDial`'s flagging as the set-aside pattern | Small: a **ZGauge**: a dial from −3 to 3 with green (|z| ≤ 2), amber (2 to 3) and red (beyond 3) zones and a needle per tested value; course-neutral. |

## Critical path analysis (c01 to c06): new kit

No existing part draws an activity network. One project state should drive every view, so a change to a duration rescans the network, the Gantt chart and the sheet together.

1. **ProjectModel** (logic, no drawing): activities with durations and immediate predecessors; builds events and dummies from the predecessor sets (an event for each distinct predecessor set, dummies where an activity's finish feeds a set that also needs other activities); forward and backward scans (node earliest and latest times; activity EST, EFT, LST, LFT, float); all paths with lengths; the critical path(s). Must match `recalc.py` on every pack network, including the site's seven-activity example (two dummies) and the café (one dummy).
2. **PrecedenceTable**: rows Activity, Duration, Immediate predecessors (with "–"), row highlight on cue, predecessor cells glowing when their arrows are checked; a chalkboard skin for the café.
3. **ActivityNetwork**: events as numbered circles laid out left to right; activities as arrows labelled "letter duration"; dummies dashed with 0; build order on cue (row by row); split node boxes (earliest left, latest right) that fill; critical arrows in red; optional amber float tags; supports two arrows between the same events (curved) for the parallel-activity case.
4. **ScanSweep**: a front moving left to right (forward) or right to left (backward) across ActivityNetwork; at a merge, the candidate times appear and the larger locks in ("wait for the slowest"); at a split, the smaller locks in ("who needs me first?").
5. **PathStack**: one bar per path from start to finish, lengths stacking live; the tallest is the finish time and the critical path; reorders when a duration changes (c03, c05).
6. **FloatTable**: activity rows EST, LST, float, critical tick, filling row by row (c03).
7. **GanttChart**: activities down the side, time across the bottom; bars at EST with length = duration; critical bars red and joined end to end; dashed float windows to the latest finish; a vertical time cursor that counts running activities; a `durationHandle` that edits ProjectModel (c04, c05); shared-float behaviour (moving one bar shrinks the next window).
8. **ProjectSheet**: a coded spreadsheet for c06 (columns Activity, Predecessors, Duration, EST, EFT, LST, LFT, Float, Critical?) with a formula bar and outlined referenced cells; column-by-column fill on cue; editable duration cell; three check stamps. If the money strand's spreadsheet board (finance-parts.tsx) already supports a formula bar and cell outlines, extend it instead of adding a new part.

## Network flow (f01 to f04): new kit

1. **FlowModel** (logic): directed edges with capacities; the saturated edges method along a given list of paths (flow/capacity per edge, saturated flags, the blocked state), the maximum flow by augmenting paths (for checking only; Standard 2 does not teach backward flow), and every source-to-sink cut with its capacity (forward edges only). Must match `recalc.py` on every pack network (stadium 190, festival 17, traffic 34, the order-trap network 12 against 13).
2. **FlowNetwork**: source on the left, sink on the right; edges as tubes or roads that fill with flow; "flow/capacity" labels; a saturated state (solid, ticked); moving dots along edges at a rate proportional to flow (people, cars or water; dots, never drawn figures); node counters for inflow and outflow; a path highlighter with its bottleneck pulsing; a `capacityHandle` that edits FlowModel (f04).
3. **CutLine**: a freehand-looking line splitting the nodes, the two sides tinted; crossing edges lit green (counted) or grey with a small back arrow (not counted); a live sum; a `cycleCuts` mode stepping through every cut with a "smallest so far" badge (f03); after a capacity change, the sums update and the smallest is re-badged (f04).
4. **DemandGauge**: demand against maximum flow in the same units, with the gap shown as spare (green) or shortfall (red), and a units converter chip (per minute to per hour) (f04).
5. **TableToNetwork**: a From, To, Capacity table whose rows light and draw their arrows (f01; can share PrecedenceTable's row styling).

## New parts in one list

1. **ProjectModel**, **ActivityNetwork**, **ScanSweep**, **GanttChart** (with PathStack and FloatTable as small companions): the critical path kit; course-neutral (usable for a GAMSAT or A-level decision maths video later).
2. **FlowModel**, **FlowNetwork**, **CutLine**, **DemandGauge**: the network flow kit; course-neutral.
3. **ProjectSheet** (or an extension of the money strand's spreadsheet board).
4. Small options on the normal kit: the rule readout mode and label set, a piece-sum label, a lower-is-better flag on ScoreCompare, and the ZGauge.

The two network kits should share one graph layout and arrow style (and the Year 11 networks videos n01 to n06, not yet designed, could reuse it).

## Plates

Existing plates that may fit after an appearance check: none found for bakeries, cafés, sheds, stadiums or festivals in the maths set (not all viewed for this list). New `ms12-` plates the packs suggest (painted, true alpha, objects only, no people; ruling 17: paint each one video early because final frames show the next anchor): a bakery loaf and bench scale (z01 to z06; paint for p08's final frame if the p08 author accepts the proposed join), a café counter at dawn with a chalkboard (c01; paint for z06's final frame), a backyard shed kit and a finished shed (c02 to c05; paint for c01's or c02's final frame), a school hall set for a formal (c04, optional), a stadium and station plaza from above (f01, f04; paint for c06's final frame), a festival water tank and taps (f02; paint for f01's final frame), a street corner with a shopping centre car park entrance (f03, optional). Claude chooses; most videos need one at most.
