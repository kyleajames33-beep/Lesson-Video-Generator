# math-s12-r07: How does the trapezoidal rule find an area of land from a plan, photo or survey?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Ratios):

- `cie48a6b84`: Calculate the perimeter, or area of a section of land using the Trapezoidal rule where appropriate, from a site plan, an aerial photograph, a radial survey or a map that includes a scale [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered (crosswalk); the plan, photo, map, perimeter and radial-survey parts are not taught (MS-37).

Standard 1: no matching point. This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Standard 1 viewers go from r06 to r09.

**Entry knowledge (outline dependency list):** math-s11-a11: `ci3786e651` (the trapezoidal rule A ≈ (h/2)(d_f + d_l), "for up to four applications"). Also math-s11-a07: `ci05a36ac3` (perimeters and areas of irregular blocks by dissection) and math-s12-r04: `ci58f841f3` (plan or map length × n = real length).

**Prior video:** math-s12-r06 (two-route frame, Standard 2 panel: a creek-side block, "what area?").

**Start:** A house block for sale. Three sides are straight fences; the back boundary is a creek. The agent's site plan has a scale. No area formula fits a creek.

**Stop:** Recall the Year 11 rule in one step (one application: the site's 112 m²) and repeated applications ("ends once, middles twice": 150 m², 1170 m²), with h as the equal spacing between offsets and the total length ÷ number of strips; new here: measure the offsets and spacing on a site plan, an aerial photograph or a map, scale them to real lengths first (r04), then apply the rule; the perimeter of the straight boundaries from the same plan (fencing); why the result is an estimate (a curve replaced by straight lines; more offsets improve it). Radial surveys are named and deferred: they need triangle areas and the cosine rule (math-s12-t06 to t10). Rainfall volume is r08.

**Next:** math-s12-r08.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `52b3005678070d3df04c785b201b8d82c956eb7d48e62e4c00c9ca577d807328`. Title: The Trapezoidal Rule and Volume of Rainfall (r07 and r08). Sections used: `orient-and-prepare`, `preview-vocabulary`, `build-foundation` (card 04, worked example 1), `apply-offsets` (card 05, worked examples 2 and 3), `independent-practice` (drills 1, 2, 4, SA 1, SA 2 (a)).

### Source lesson04, key terms and card 04

"Offset: A measured width across the shape, taken at right angles to a straight baseline. Like this: standing on a fence line and measuring $12\text{ m}$ across to the creek gives an offset of $12\text{ m}$." "Strip width, h: The distance along the baseline between two neighbouring offsets, always equal." "Real paddocks and blocks of land are bounded by creeks and roads that curve. There is no area formula for those. So we pretend the curve is a straight line between two measurements". "$A \approx \dfrac{h}{2}\left(d_f + d_l\right)$ ... The formula is on the HSC reference sheet". Worked example 1: "$h = 8\text{ m}$, $\;d_f = 12\text{ m}$, $\;d_l = 16\text{ m}$ ... $A \approx 112\text{ m}^2$". Box: "If the real boundary bulges outwards the rule under-counts, and if it curves inwards the rule over-counts. Write "approximately" in your answer." Quick check: offsets 10 m and 14 m, 5 m apart (C, 60 m²).

### Source lesson04, card 05 "Two applications, three offsets"

"$A \approx \dfrac{h}{2}\left(d_0 + 2d_1 + d_2\right)$". Worked example 2: "Offsets $10\text{ m}$, $14\text{ m}$, $12\text{ m}$, with $h = 6\text{ m}$ ... $A \approx 150\text{ m}^2$. Check as two separate strips: $3(10+14) = 72$ and $3(14+12) = 78$". Box: "Questions often give the total length instead of the strip width. If a block is $40\text{ m}$ long with three offsets, the strips are $h = 40 \div 2 = 20\text{ m}$". Worked example 3: "A paddock $40\text{ m}$ long, offsets $25\text{ m}$, $32\text{ m}$, $28\text{ m}$ ... $A \approx 1170\text{ m}^2$". In your book: "ends once, middle twice".

### Source lesson04, drills and SA

Drill 1 (110 m²; "Option B forgets to halve the strip width"), drill 2 (62 m²; "Option A comes from adding the three offsets without doubling the middle one"), drill 4 (the formula). SA 1: "offsets ... $9\text{ m}$ and $15\text{ m}$ ... $12\text{ m}$ apart ... explain why your answer is an estimate" (144 m²). SA 2 (a): "A paddock is $24\text{ m}$ long ... $20\text{ m}$, $26\text{ m}$ and $22\text{ m}$" (564 m²).

No example on the page reads its offsets from a plan, photo or map with a scale, finds a perimeter, or uses a radial survey (MS-37).

## 3. Recalculation

- Worked examples: 4 × 28 = 112; 3 × 50 = 150; 10 × 117 = 1170 m². Quick check 60; drill 1: 110; drill 2: 62; SA 1: 144; SA 2 (a): 6 × 94 = 564 m².
- Question 1 (aerial photo, 1 : 1000; spacing 3 cm = 30 m; offsets 21, 34, 25 m): 15 × 114 = 1710 m². Question 2 (site plan 1 : 200; spacing 4 cm = 8 m; offsets 10, 12.4, 11.6, 8.8 m): 4 × 66.8 = 267.2 m²; fencing 24 + 10 + 8.8 = 42.8 m; at $95 a metre $4066.
- Lawn anchor (1 : 250; spacing 2.4 cm = 6 m; offsets 8, 10, 9, 7 m): 159 m²; turf at $14 per m² $2226.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using the total length as h (h = 40 instead of 20).
- Doubling the end offsets, or not doubling the middle ones.
- Applying the rule to plan lengths and scaling the area by n once (instead of n²); scaling offsets first avoids this.
- Measuring offsets that are not at right angles to the baseline, or not equally spaced.
- Calling the answer exact.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- An aerial-style painted plate of a creek-side block or a farm dam with a coded scale bar; a coded baseline and equally spaced offset lines drop onto it; a ruler measures each offset on the plate (ScalePlan); each plan measurement converts to a real length in a small table.
- The trapezium strips: each pair of neighbouring offsets becomes a shaded trapezium; the curved edge is replaced by straight chords; gaps and overlaps between the chord and the creek shade in two colours ("under-counted", "over-counted").
- "Ends once, middles twice": the offset values drop into the bracket, the middle ones doubling with a × 2 tag.
- Perimeter: the three straight fences light up, scaled, and add; the creek is not fenced.
- A grey chip "radial survey: after Trigonometry (t10)".

Advanced reuse (visual parts only): `StudioRiemannStrips` and `RiemannLayer` (integration-parts.tsx) already have a `trapezium` strip rule; they take a function, so the offsets need a piecewise-linear function through the measured points (small kit need); `AreaFillLayer` for the region; `RefinementTable` for "more offsets, closer estimate". Kit needs: an OffsetSurvey mode of ScalePlan (baseline, offsets at equal spacing, measured on a plate).

## 6. Two original candidate practice questions

### Question 1

An aerial photograph of a farm dam has a scale of 1 : 1000. A straight baseline 6 cm long is drawn across the dam on the photo, and offsets are measured at right angles at 0 cm, 3 cm and 6 cm along it: 2.1 cm, 3.4 cm and 2.5 cm. (a) Find the real strip width and offsets in metres. (b) Use the trapezoidal rule to estimate the dam's surface area.

**Worked answer:** (a) At 1 : 1000, 1 cm is 10 m: h = 30 m; offsets 21 m, 34 m and 25 m. (b) A ≈ 30/2 × (21 + 2 × 34 + 25) = 15 × 114 = 1710 m² (approximately).

### Question 2

A site plan of a house block is drawn at 1 : 200. The front fence is a straight line 12 cm long on the plan; the two side fences are at right angles to it; the back boundary is a creek. Offsets from the front fence to the creek are measured every 4 cm along it: 5.0 cm, 6.2 cm, 5.8 cm and 4.4 cm (the first and last are the side fences). (a) Estimate the area of the block. (b) The front and side fences are to be replaced at $95 a metre. Find the cost.

**Worked answer:** (a) At 1 : 200, 1 cm is 2 m: h = 8 m; offsets 10, 12.4, 11.6, 8.8 m. A ≈ 8/2 × (10 + 2 × 12.4 + 2 × 11.6 + 8.8) = 4 × 66.8 = 267.2 m². (b) Front 24 m, sides 10 m and 8.8 m: 42.8 m × $95 = $4066.

Only the question goes on the card (with the photo or plan sketch). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2 (a): "h = 24", crossed, "h is the spacing: 8 m"). Answers were checked with SymPy. Fencing price is a labelled example.

## 7. Everyday anchors

- **A creek-side house block on a real estate site plan:** three straight fences and a creek boundary; area for the listing and the cost of new fencing (housing; carries area and perimeter from one plan).
- **A farm dam from an aerial photo:** offsets measured on a map-app style photo with a scale bar (farming; hands to r08, where rain falls on the dam).
- **Returfing a curved backyard lawn:** a 1 : 250 landscape plan, offsets 8, 10, 9 and 7 m every 6 m, 159 m² at $14 per m² (home and garden; turf is sold by the square metre).

Varied everyday contexts (housing, farming, gardening). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "farm dam" no hits; "creek" appears in Advanced d09 and i12 as a valley floor and a profile, not a land block; "aerial" hits are an aerial view of town blocks (a11-c01), a lighthouse islet (a12-d11) and a toy car's aerial). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 7: MS-37 (no plan, photo, map, perimeter or radial survey in lesson04).

Decisions for Claude:

- **Outline problem: radial surveys.** The point names "a radial survey", but radial surveys (`cibe642c8e`, math-s12-t10) and the triangle area and cosine rules they need (t06 to t09) come after this strand under ruling 28. Proposal: name it here with a grey chip, and add one radial-survey area (and a rainfall volume on it, for r08's point) to t10 as a callback. Root to rule.
- **Do not re-teach Year 11:** recall the rule with one worked example; the new learning is reading offsets from a scaled picture and the perimeter.
- **Spoken letters:** "d f, the first offset" and "d l, the last offset" (ruling 36 pattern). The reference sheet uses h for the spacing; r08 uses h for rain depth, so name h's meaning each time.
- **Pace: watch.** Fits about 8 to 9 minutes if Year 11 is recalled, not re-taught.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
