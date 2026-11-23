# Maths Standard Year 11: kit parts and plates needed (Managing money and Applications of measurement)

Written by Claude (designer of record), 24 November 2026, for root and the builders. It collects the "Studio kit use and additions" and "Codex asset brief" sections of `lessons/math-s11-m01.md` to `m09.md` and `lessons/math-s11-a01.md` to `a11.md` (a05 as a05a and a05b), in the style of `checks/maths-standard-kit-needs-s11-e.md`. These are requirements for build work, not implemented capability; no source file was changed. Existing part names follow the e-strand file (`WorkingBoard`, `QuestionCard`, `KeyNotesScreen`, `MemoryAidCard`, `HandTag`, `PlateImg`, `PlateFields`, `StudioPlot`, `SpreadsheetGrid`, `PeriodTimeline`, `StackedTotalBar`, `LiveReadoutBoard`); builders confirm each against `src/explainer/math/studio/` before use. Ruling 7 applies: parts are course-neutral and reusable.

Later strands (Time and location, Networks, Data analysis, x01, x02) add their rows here when designed.

## 1. New plates (Codex; transparent PNG with a true alpha channel; no people, brands or logos)

| Plate | First needed | Brief in | Note |
| --- | --- | --- | --- |
| `ms11-electricity-meter-v1.png` | m06's final frame (then m07) | `lessons/math-s11-m07.md` | Paint first (ruling 17: one video early). A digital household meter with a blank display for a coded kWh reading. |
| `ms11-water-meter-v1.png` | m07 | `lessons/math-s11-m07.md` | A household water meter with a blank dial area. |
| `ms11-fridge-v1.png` | m04 (attempt and decision path) | `lessons/math-s11-m04.md` | A plain fridge, front view. |

**Applications of measurement needs no new plate.** All 37 plates it uses exist and were viewed on contact sheets (24 Nov 2026): coin jar, ribbon, produce scale, mandarin bag, muesli bar, ute, water jug, water tank, farm dam aerial, floor tile (30), tile box, netball court, block cube, cereal box, pool cutaway, phone, paper sheet, calculator, garden bed, pizza, round cake, garden pond, softball diamond, flying-fox platform, entrance ramp, holiday house, chocolate block, food tin, golf ball, polytunnel, cone with two scoops, watermelon, garden barrow, sand barrow, drainage channel, wall clock, stopwatch.

Plates flagged, not used: `ma12-air-conditioner-v1.png` (a yellow fringe on its wall wash; optional in m07); `ma12-kitchen-tap-v1.png` (appears to have a white background); `ma11-yacht-side-v1.png` (its mainsail is right-angled, so a05a uses a coded shade sail).

## 2. Kit parts by video

### Managing money (m01 to m09; from each design's additions list)

| Video | New part (check value) |
| --- | --- |
| m01 | **`PercentBar`** with slider r (−30% to +30%), readouts multiplier and new value (r = +3%: × 1.03, $123.60); **price ladder** mode ($120, $132, $118.80 under a dashed line); **gap bars** (cost and selling bars; the gap flips to a "loss" dip). |
| m02 | **`PartsBar`** (100 + r parts; GST 1 part in 11; VAT 20% as 1 in 6); **reverse arrow** on `PercentBar` (÷ 1.1). |
| m03 | `PeriodTimeline` **month blocks and payment stamps** (pay-in-4: today, then every two weeks); fee and late-fee gap bars (m01's). |
| m04 | **Stacked and ranked total bars** (every dollar of each method, ranked); **`DecisionPath`** (gates such as "cash now?", "every repayment affordable?"). |
| m05 | **`BlockCounter`** (stamp duty per $100 or part; a threshold bar at $45,000); **who-pays table** (CTP, third party property, comprehensive). |
| m06 | `SpreadsheetGrid` **input slider** and **stale-cell demo** (inputs in cells, a total that updates or goes stale); **fuel tank** level; rolling counters on plates. |
| m07 | **Power-time area** (kW by hours as an area in kWh); **bill builder** (days × supply + units × rate); **block container** (gas price blocks); rolling counters on the meter plates. |
| m08 | **Period converter** (amount × times a year ÷ 52); **row splitter** (shared household rows); **budget overflow bar** (surplus or deficit). |
| m09 | **Fund gauge** (a level in the coin jar rising in fixed steps to a target line; 28 steps of $233 stop $2 short, 29 cross); **signed variance bars** (+32, −9, 0, +16 → +39); **account transfer strip** ($860 in, $233 moved on payday). |

### Applications of measurement (a01 to a11)

| Video | New part (check value) | Reused later in |
| --- | --- | --- |
| a01 | **`UnitLadder`** (rungs with factor arrows lit in the direction travelled; "×" down, "÷" up; combined arrows: m to mm lights × 1000); **unit zoom tape** (mm ticks to a 1 m stick to a 1 km strip; "1 m = 100 cm = 1000 mm = 0.001 km"); **multi-unit fill counter** (a level in a plate with mL, L and kL counters; one may overflow its box: 5 000 000 mL = 5 kL) | a02, a03, a04 (ladder); a03, a09, a11 (counter) |
| a02 | **`GridFill`** (a square splitting n × n, a row then copies; n = 100 drawn as bands; cube mode in layers: 10 → 1000); **`ScaleSlider`** (k, k², k³ readouts beside a growing cube: k = 2 gives 2, 4, 8); **tile layout** (8 across, 6 down = 48) | a03 (cube fill); Year 12 r06a (tiles) |
| a03 | **`BridgeLadder`** (`UnitLadder` with volume and capacity columns joined by "=" bridges: cm³ = mL, m³ = kL, 1000 kL = 1 ML); **cube-of-cubes fill** (a filled cube shrinks to be the next fill's unit: 1000 mL → 1 L; 1000 L → 1 kL) | a09 |
| a04 | **`DecimalHop`** (digits in place-value boxes, the point hopping with a "× 10ⁿ" counter: 256 × 10⁹ → 2.56 × 10¹¹); **`PrefixLadder`** (a `UnitLadder` mode with powers and a zoom per rung, n to T); **`SigFigSlider`** (12 192 768 at 3 s.f. → 1.22 × 10⁷) | |
| a05a | **`ShapeRearranger`** (slide-end-triangle and double-and-rotate modes: parallelogram to rectangle; trapezium 6, 10, 4 to a parallelogram of base 16); **`EdgeTracer`** (outside-boundary runner with a length counter, skipping dashed internal edges: 12, 20, 29, 33, 38); **lean slider** (a parallelogram leaning with a fixed area readout 13.2 m²) | a05b, a07 (tracer) |
| a05b | **`RollingCircle`** (one turn, a trail, diameter rods: just over 3); **`SectorRearranger`** (n slices 4 to 32 alternating into a near-rectangle πr by r); **`FractionWheel`** (θ slider; r = 15, 45° gives 1/8, 11.78, 88.36) | |
| a06 | **`PythagorasSquares`** (squares on the sides, tiles moving 9 + 16 = 25; sliders a, b; an angle slider that splits the readouts away from 90°); **`TurningTriangle`** (labels stay attached through rotations and flips); **plate triangle overlay** (a right triangle snapped to points on a plate) | a07, a08, a10; Year 12 t01a |
| a07 | **`DissectionPlan`** (survey-style plan taking cut lines; pieces separate, show areas, rejoin with a total; a second dissection overlays: 600 + 100 = 700 and ½ × 70 × 20 = 700); **piece lift-out** (one piece enlarges for a Pythagoras side and returns: 22.36 m) | |
| a08 | **`NetUnfold`** (box and triangular prism nets with pair tints; strip mode for perimeter × length: 36 by 20); **`LabelUnroll`** (a band peels off a cylinder plate into a rectangle whose width grows to 2πr: 25.13 cm); **`FaceList`** (exposed tick, hidden violet cross; drives which faces light) | a10 (part list) |
| a09 | **`SliceStack`** (an end shape copied along a length with a live volume counter; rectangle, triangle, circle, trapezium and ring ends; a shrinking mode for cones: 160 × 30 = 4800; 0.18π); **level-out** (a sloping water surface tilting to its average level with a fixed volume: 1.2 to 2.4 levels at 1.8, 450 m³) | a10, a11 |
| a10 | **`PourFill`** (contents tip into a second container, raising it by a set fraction per pour: three cones fill the cylinder); **sphere-in-cylinder** (a plate drops into a snug cylinder; the gap water drains to a scale reading ⅓; the sphere's share ⅔) | |
| a11 | **`StripBuilder`** (width lines at even gaps, chords, strips filling as trapeziums with their own readouts and tinted slivers; a 1, 2, 4 application slider: pond 0, 16.4, 21.8 m²; channel 0.249 m²) | Year 12 r07 |

## 3. Order of build (suggested)

1. Plates: `ms11-electricity-meter-v1.png` first (m06's final frame), then the water meter and the fridge.
2. Shared studio parts used by several videos: `UnitLadder` (a01 to a04), `SliceStack` (a09 to a11), `EdgeTracer` (a05a, a05b, a07), `FaceList` (a08, a10), `PercentBar` (m01, m02), `DecisionPath` (m04, m09), gap bars (m01, m03, m04).
3. Single-video parts in playlist order.

All values shown on parts come from data props with exact arithmetic, rounded only for display; prices and rates carry their "example" labels and dates as the designs state.
