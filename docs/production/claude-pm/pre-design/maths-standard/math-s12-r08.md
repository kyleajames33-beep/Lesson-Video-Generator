# math-s12-r08: How much water falls on a roof or a block of land in a storm?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Ratios):

- `ci5d0f766d`: Calculate the volume of rainfall over an area using V = Ah, where V is the volume, A is the area of land and h is the depth of rain, from a site plan, an aerial photograph, a radial survey or a map that includes a scale [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered (crosswalk); areas never come from a scaled plan, photo or map, and the site writes V = A × d (MS-37). MathML in `sourceHtml` for V = Ah.

Standard 1: no matching point. This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only.

**Entry knowledge (outline dependency list):** math-s11-a03: `ci880a544f` (1 m³ = 1000 L = 1 kL). Also math-s11-a01: `ci29461234` (1 mm = 0.001 m) and math-s12-r07: `cie48a6b84` (an area from a scaled plan or the trapezoidal rule).

**Prior video:** math-s12-r07.

**Start:** r07's last frame: the farm dam's estimated area. The weather report says "25 mm overnight". What does a depth of rain actually mean as water you can store?

**Stop:** Rainfall is reported as a depth: if none drained away, it would stand that deep everywhere, so the water is a very flat box, V = Ah (A the area in m², h the depth of rain in metres); convert mm to m first (÷ 1000); m³ to litres (× 1000); areas from a rectangle, a scaled plan or a trapezoidal estimate (then the volume is an estimate too); tank questions (space left, overflow); h here is the rain's depth, not r07's strip width. Final frame hands to r09 for both courses.

**Next:** math-s12-r09.

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `52b3005678070d3df04c785b201b8d82c956eb7d48e62e4c00c9ca577d807328`. Sections used: `orient-and-prepare` (hook), `preview-vocabulary` (volume of rainfall), `connect-rainfall-volume` (card 06, worked examples 4 and 5, fill-the-gaps), `independent-practice` (drills 3 and 5, SA 2 (b), SA 3), `retrieve-and-finish`.

### Source lesson04, hook and key term

"A roof measures $12\text{ m}$ by $8\text{ m}$ and $25\text{ mm}$ of rain falls on it. Is that enough water to fill a bathtub, a rainwater tank, or a swimming pool?" "Volume of rainfall: ... $10\text{ mm}$ of rain on $100\text{ m}^2$ is $100 \times 0.01 = 1\text{ m}^3$, which is $1000$ litres."

### Source lesson04, card 06 "Volume of rainfall"

"Rainfall is reported as a depth. Saying $25\text{ mm}$ fell means that if none of it drained away, it would sit $25\text{ mm}$ deep everywhere. So the water is just a very flat box: area multiplied by depth." "Convert the depth to metres first, using $1\text{ mm} = 0.001\text{ m}$." "$V = A \times d \qquad 1\text{ m}^3 = 1000\text{ L}$" (the syllabus writes V = Ah). Worked example 4: "$A = 12 \times 8 = 96\text{ m}^2$ ... $d = 25\text{ mm} = 0.025\text{ m}$ ... $V = 96 \times 0.025 = 2.4\text{ m}^3 = 2400\text{ L}$". Worked example 5: "The paddock from worked example 3, area $1170\text{ m}^2$ ... Rainfall $18\text{ mm} = 0.018\text{ m}$ ... $V \approx 21\,060\text{ L}$ ... Still approximate, because the area was." Tips: "Writing $25\text{ mm}$ as $0.25\text{ m}$ is the single most common error in this topic." "One cubic metre of water is $1000$ litres, and it has a mass of one tonne." Fill the gaps: roof 10 m by 6 m, 20 mm (1200 L).

### Source lesson04, drills and SA

Drill 3: "A roof measures $15\text{ m}$ by $10\text{ m}$ and $20\text{ mm}$ of rain falls" (3000 L). Drill 5: "$25\text{ mm}$ ... in metres" (0.025 m; explanation wording MS-38). SA 2 (b): "$30\text{ mm}$ of rain falls on the paddock" (564 m², 16 920 L). SA 3: "A roof measures $18\text{ m}$ by $9\text{ m}$ and drains into an empty $5000\text{ L}$ tank. A storm drops $40\text{ mm}$ of rain" (6480 L; overflows by 1480 L). Revisit: "2400 litres. That is well past a bathtub and nowhere near a swimming pool, and it is why one storm can fill a rainwater tank."

## 3. Recalculation

- Worked example 4: 96 × 0.025 = 2.4 m³ = 2400 L. Worked example 5: 1170 × 0.018 = 21.06 m³ = 21 060 L. Fill the gaps: 60 × 0.02 = 1.2 m³ = 1200 L. Drill 3: 150 × 0.02 = 3000 L. SA 2 (b): 564 × 0.03 = 16 920 L. SA 3: 162 × 0.04 = 6480 L; 6480 − 5000 = 1480 L.
- Drill 5: 0.25 m is ten times 0.025 m, so the slip gives ten times too much water.
- Question 1: 126 × 0.03 = 3.78 m³ = 3780 L; space in a 22 000 L tank at three-quarters full is 5500 L; 1720 L spare. Question 2: plan roof 6.5 cm by 4.8 cm at 1 : 200 is 13 m by 9.6 m = 124.8 m²; × 0.045 = 5.616 m³ = 5616 L; a 5000 L tank half full overflows by 3116 L.
- Anchors: pool 8 m × 4 m × 0.025 m = 800 L; r07's dam 1710 m² × 0.012 m = 20 520 L.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- 25 mm written as 0.25 m (÷ 100 instead of ÷ 1000), giving ten times too much water.
- Multiplying m² by mm and calling the result litres.
- Forgetting to convert m³ to litres, or converting the wrong way.
- Using the plan's dimensions without scaling.
- Comparing the volume with the tank's full capacity when the tank is already part full.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The flat box: a roof (or the dam) seen at an angle; a translucent water layer 25 mm thick rises on it with a depth tag; the box is then tipped into cubes of 1 m³, each turning into "1000 L" and pouring into a tank.
- A depth ladder: "25 mm → 0.025 m" with a crossed "0.25 m" card and a × 10 too-much tank overflowing.
- A tank with a capacity mark, a current level and the incoming water; the overflow spills (SA 3, Question 2).
- The scaled-plan step from r07/r06 shown small (the area found from a plan).

Advanced reuse (visual parts only): `ContainerFill` (rig.tsx) for a tank filling with drops, driven by the same function as the readout; `PlateLevelFill` (integration-parts.tsx) for a level against a plate's scale; `StudioUnitProduct` for "m² × m = m³"; `StudioRateChainStrips` for mm → m and m³ → L. Plates: `maths/ma11-water-tank-v1.png` and `biology/m7-village-water-tank-v1.png` exist (appearance not checked here; the Biology tank is reused in Advanced).

## 6. Two original candidate practice questions

### Question 1

A farm shed has a flat roof 14 m long and 9 m wide. All the rain on the roof runs into a 22 000 L tank that is three-quarters full. A storm drops 30 mm of rain. (a) How many litres of water fall on the roof? (b) Will the tank overflow? Justify your answer.

**Worked answer:** (a) A = 126 m²; h = 30 mm = 0.03 m; V = 126 × 0.03 = 3.78 m³ = 3780 L. (b) The tank has 22 000 × 1/4 = 5500 L of space. 3780 L is less than 5500 L, so it does not overflow (1720 L of space is left).

### Question 2

A house plan is drawn at 1 : 200. The roof, seen from above, is a rectangle 6.5 cm by 4.8 cm on the plan. (a) Find the real area of the roof. (b) Find the volume of water, in litres, from 45 mm of rain. (c) The roof drains into a 5000 L tank that is half full. By how much does it overflow?

**Worked answer:** (a) 6.5 × 2 = 13 m and 4.8 × 2 = 9.6 m; A = 124.8 m². (b) V = 124.8 × 0.045 = 5.616 m³ = 5616 L. (c) Space = 2500 L; overflow 5616 − 2500 = 3116 L.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "126 × 30 = 3780 m³", crossed, "30 mm = 0.03 m"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A house roof and its rainwater tank:** 25 mm on a 12 m by 8 m roof is 2400 L (the site's hook) (home; the syllabus's own context).
- **A backyard pool in a storm:** 25 mm on an 8 m by 4 m pool adds 800 L and raises it 25 mm (home and summer; shows depth stays the same while volume grows with area).
- **A farm dam after a storm:** r07's estimated 1710 m² surface with 12 mm of rain gains about 20 520 L directly (farming; the area estimate carries into the volume estimate).

Varied everyday contexts (home, summer, farming). Overlap noted (grepped 18 November 2026): a rainwater tank is used in Advanced w12, the Year 12 integration designs (g01 to g03, i11, i13, t03) and Standard a08 as a rate or graph context, so the house tank here is the syllabus's own context and should be drawn differently from those (a roof catchment, not a tap-flow graph); the pool and dam framings are new to this strand. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 7: MS-37 (V = A × d instead of V = Ah; no area from a scaled plan, photo or map) and MS-38 (drill 5's explanation says the slip "turns a full tank into an empty one"; it does the opposite).

Decisions for Claude:

- **Syllabus letters:** V = Ah on screen; say once "here h is the depth of rain, not the strip width from last video".
- **From a plan:** include at least one area read from a scaled plan or photo (Question 2 or the dam) so the point's "from a site plan ... or a map that includes a scale" is met. Radial-survey areas wait for t10 (see r07).
- **Final frame:** hands to r09 for both courses; a neutral rate picture (two pay slips, "who is paid more?") so Standard 1, arriving from r06, sees the same opening.
- Pace: not at risk; fits 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
