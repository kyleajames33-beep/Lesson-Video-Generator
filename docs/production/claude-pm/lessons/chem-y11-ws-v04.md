# Year 11 Chemistry WS V04: Processing data and information. How do raw chemistry readings become a usable table or graph? (design)

Status: Revision 2 (6 Nov 2026): brief 180 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,847 characters, 17 scenes, about 524 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourth Year 11 Chemistry (2017 syllabus) Working Scientifically skills video, playlist entry 35, between `chem-y11-m2-v04` and `chem-y11-ws-v05`. Templates as `chem-y11-ws-v01.md` to `ws-v03.md` (structure from `phys-y11-fa1-v01.md`; plates from `bio-y11-fa1-v05.md`); skills-video format precedent `phys-y11-fa0-v04.md` (format only: its drawing parts `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx` and `DataTable` from `src/explainer/lessons/bio-m5-b13/shared.tsx` are reused so the series keeps one visual system; no physics content). Running case: the magnesium molar-mass method from `chem-y11-m2-v04.md` (its final frame's five raw runs); practice uses the copper sulfate heating investigation from `chem-y11-ws-v02.md` and `ws-v03.md`. No pre-design pack exists: the pack work is done here. Route entry: `chem-y11-ws-v04` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply processing data and information to that case and a new question; do not re-teach the subject mechanism"; next handoff: "How do we judge uncertainty and the limits of a chemistry result?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches the route). The route marks it "partial context; add the missing explicit skill teaching from official WS content": it is an error-analysis lesson. Used: the equipment table's resolutions ("Burette (50 mL) ±0.05 mL", "Analytical balance ±0.0001 g", "Top-pan balance ±0.01 g") as the reason for recording decimal places; short answer Q1's principle that a result is left out of an average only for a stated reason (18.2 mL excluded as not concordant). Not used: random and systematic error, uncertainty and the four targets (ws-v05), the site's validity and reliability definitions (`chem-y11-ws-v01.md` site note 1).

Owner rules applied: as ws-v01 to ws-v03 (one learner question; no people, hands, faces or body outlines: the notebook and spreadsheet fill by code; apparatus as reused plates; tables, spreadsheet, graphs and readouts coded; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question and data on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Chemistry is recalled, never re-taught: m2-v04 (n = V ÷ 24.79, n(Mg) = n(H₂), MM = m ÷ n) in a clause each. All data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Processing Data and Information", outcome CH11/12-4; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS4-01`: "select qualitative and quantitative data and information and represent them using a range of formats, digital technologies and appropriate media (ACSCH004, ACSCH007, ACSCH064, ACSCH101)"
- `C11-WS4-02`: "apply quantitative processes where appropriate"
- `C11-WS4-03`: "evaluate and improve the quality of data"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 34)

**Boundary:** opens on m2-v04's final frame (the notebook card with five raw magnesium runs). Teaches: raw data against processed data; selecting quantitative and qualitative data that bear on the question (`C11-WS4-01`); table conventions: independent variable first, "quantity (unit)" headings, plain numbers in cells, units converted (mg to g), decimal places set by the instrument's resolution (burette two places, 0.001 g balance three); a processed column from a calculation (gas volume = start − end, because an upturned burette's readings fall) and a spreadsheet filling it, checked by hand on one row (`C11-WS4-02`; digital technologies); a per-run molar mass; an anomalous result found by processing and explained by a qualitative note, kept in the table but left out of the average and the line, with the reason recorded; the improvement (repeat the run) (`C11-WS4-03`); choosing a format: a table keeps values, a scatter graph with a line of best fit shows the pattern (not a column graph, not dot-to-dot); graph conventions; the gradient as a quantitative process giving MM = 24 790 ÷ 1009 = 24.6 g mol⁻¹; two attempts on the copper sulfate heating data. Not taught: random and systematic error, uncertainty, percentage error and whether 24.6 against 24.31 is a real difference (ws-v05, the handoff); trends and relationships beyond reading this line (ws-v05 owns `C11-WS5-01`); communicating a conclusion (ws-v07).

## Decisions

- **Learner question (route wording kept).** "How do raw chemistry readings become a usable table or graph?" The answer, in order: raw readings are what the instruments showed, in whatever form they were written (1); select what bears on the question, numbers and notes (2); a table with headed units and consistent decimal places makes them comparable (3); processing turns readings into what the question needs (4 to 6); processing exposes a result that doesn't fit, and a recorded note explains it (7); leave it out with a reason, and repeat it (8); a graph shows the pattern and uses every good run at once (9 to 11).
- **Opening frame (equals m2-v04's final frame, `chem-y11-m2-v04.md` "Opening frame and final frame").** The ruled notebook card headed "Mg + HCl, gas in upturned burette (25 °C, 100 kPa)" with the five run lines exactly as written there; the burette end plate small at the right with "one run: 24.7 g mol⁻¹"; "MM = m ÷ n" at the top centre; the "Next" chip, which fades.
- **Definitions (series set, root decision 12).** Valid, reliable, accurate and precise keep ws-v01 to ws-v03's meanings. Only "precise" (repeated values agree closely) and "reliable" (repeating the whole experiment gives consistent results) are used, once each (scenes 8 and 11). New terms with plain meanings: raw data (exactly what the instrument showed, 1); processed data (calculated from raw data, 4); quantitative data (numbers with units, 2); qualitative data (descriptions without numbers, 2); anomalous result (a result that doesn't fit the pattern of the others, 7); line of best fit (a line that follows the trend, with points scattered evenly about it, 10); gradient (how steeply the line rises: rise ÷ run, 11).
- **The surprise (prediction, 3 s).** "Run 1's burette went from 48.50 to 36.40. Is the gas volume 36.40 mL?" No: the gas volume is the change, 12.10 mL; and in an upturned burette the readings fall as gas collects, so it is start minus end (m2-v04 author note b). This makes "processed column" necessary, not decorative.
- **Decimal places from the instrument (site's equipment table).** A burette reads to 0.05 mL, so readings are recorded to two decimal places: run 2's "49.2" was written "49.20" (the student dropped a zero that shows the burette's precision; said on screen, with a grey tag "assume 49.2 meant 49.20; record the zero next time"). The 0.001 g balance gives three decimal places. Significant-figure rules belong to ws-v05; here the rule is only "record and tabulate to the instrument's resolution, consistently down a column".
- **Spreadsheet (digital technologies; column map locked in Revision 2, brief 180).** Column A = m (g), B = start (mL), C = end (mL), D = V (mL) = start − end, E = n(H₂) (mol) = V ÷ 24 790, F = MM (g mol⁻¹) = m ÷ n; row 1 holds the headings, runs are rows 2 to 6. The grid shows the column letters A to F above the headings. Formula bars for row 2: "=B2-C2" (D), "=D2/24790" (E), "=A2/E2" (F), with the tag "most spreadsheets"; each fills down to row 6. One hand check on run 5 (m2-v04's own run, 24.7) protects every row (phys-y11-fa0-v04's principle, restated in chemistry).
- **The anomaly (`C11-WS4-03`).** Run 3 gives 31.0 g mol⁻¹ while the others give 24.1 to 24.7. The run 3 note ("ribbon floated, some bubbles escaped") is qualitative data that explains it: lost hydrogen means fewer moles counted, so MM too high (m2-v04 scene 7, recalled in a clause). It stays in the table, marked, and is left out of the mean and the line, with the reason written under the table. The mean of four is 24.5; with run 3 it would be 25.8. Improvement: repeat run 3 (and the reason a repeat helps: reliable means repeating the whole experiment gives consistent results). Not called random or systematic (ws-v05).
- **Format choice (`C11-WS4-01`, "range of formats").** Table (keeps every value and the notes), scatter graph with a line of best fit (both variables are measured numbers that can take any value), column graph (for categories, such as which metal; wrong here, shown and crossed), and the notebook itself (a record, not a presentation). "Appropriate media" is covered by the spreadsheet (scene 6) and the drawn graph (scenes 10, 11); the same conventions apply on graph paper (key note 4).
- **Graph conventions.** Independent variable (mass of magnesium) across, dependent variable (volume of hydrogen) up; axis titles "quantity (unit)"; scales evenly spaced, starting at zero here, using most of the grid; points as small crosses; a straight line of best fit through the origin (no magnesium, no hydrogen: Revision 2, brief 180, the origin is the model-predicted point, not a measured one; no zero-mass blank was run, so the line is constrained through (0, 0) on that physical assumption and the screen says so); the anomaly ringed and ignored by the line; not dot-to-dot.
- **The gradient (`C11-WS4-02`).** Gradient = rise ÷ run = 1009 mL g⁻¹ (spreadsheet trendline through zero from the four good runs: 1009.1). Revision 2 (brief 180): the triangle reads the fitted line with a guard digit, 40.36 mL at 0.040 g, so 40.36 ÷ 0.040 = 1009; a rounded reading of 40.4 would give 1010 and is not shown. Meaning: millilitres of hydrogen per gram of magnesium. MM = 24 790 mL mol⁻¹ ÷ 1009 mL g⁻¹ = 24.6 g mol⁻¹, with the units cancelling on screen. The graph's 24.6 and the mean's 24.5 are both shown and called close; why the graph is preferred: it uses every good run at once and shows whether the straight-line pattern holds.
- **Memory aid (new; see "Memory aid check"):** "Units in the headings, the pattern in the graph, and a reason for every point you leave out."
- **Attempts (original wording, HSC style; ws-v02's copper sulfate case).** Data: empty crucible 24.33 g; 2.50 g of crystals; "mass of crucible and contents" at 0, 2, 4, 6, 8 and 10 min: 26.83, 26.31, 26.02, 25.94, 25.93, 25.93 g. A1: draw up a table with suitable headings including one processed column for the mass of water lost. Model: time (min) | mass of crucible and contents (g) | mass of water lost (g): 0.00, 0.52, 0.81, 0.89, 0.90, 0.90. Crossed: headings "Time | Mass" with "26.83 g" in the cells. A2: what type of graph, and how should the points be joined? Model: a line (scatter) graph, time across and mass of water lost up, with a smooth curve of best fit that levels off at 0.90 g; not a column graph (time is continuous); not a straight line (the loss slows as the water runs out); not dot-to-dot. Crossed: "a column graph, one column for each reading".
- **Mistake scene:** none separate. "The final reading is the volume" (5, 6; prediction); "delete the odd result" (8); "join the dots" and "column graph for continuous data" (10; A2 crossed); "units in every cell" (A1 crossed); "a spreadsheet can't be wrong" (6, one hand check).
- **Handoff (route next, ws-v05).** Scene 15: 24.6 against the accepted 24.31; is that gap a real difference, or within the limits of the measurements? Final frame: see "Opening frame and final frame".
- **Site notes:** none new for these sections (the site's validity definitions are already noted in `chem-y11-ws-v01.md` site note 1). Checked: Q1 (18.0 and 17.9 concordant, mean 17.95 mL; 18.2 excluded as not within 0.1 mL).
- **Cause chain taught, in order:** (1) raw readings are not yet the quantity the question needs (1, 5); (2) consistent headings, units and decimal places make values comparable (3, 4); (3) a calculation applied to every row turns readings into results, and one hand check guards the formula (6); (4) processing reveals a misfit, and a note explains it (7); (5) a reasoned exclusion improves the result; a repeat improves it more (8); (6) a graph shows the pattern of all the good runs, and its gradient is the result (9 to 11).
- **Entry knowledge (route):** Stage 5 tables and graphs; m2-v04 (the magnesium method and MM = m ÷ n); ws-v02, ws-v03 (copper sulfate case, definitions).
- **Learner-visible vocabulary:** see Definitions.
- **Legacy logic ported:** none. Drawing parts only: `DataGraph`, `graphScale` (`src/explainer/physics/course-kit.tsx`), `DataTable` (`src/explainer/lessons/bio-m5-b13/shared.tsx`), as phys-y11-fa0-v04.
- **Explainer motion (coded unless a plate is named):** **notebook card** (handwriting-style lines; items highlight when selected; a highlighter sweep for quantitative data in navy and qualitative notes in teal); **`DataTable` with row-at-a-time fill** and a header that writes "quantity (unit)" in two parts; **unit converter chip** (mg → ÷ 1000 → g); **spreadsheet grid** with a formula bar and a fill-down (cells compute in turn); **hand-check stamp** (a small tick card beside run 5); **anomaly ring** (rose ring on a cell and later on a graph point; a reason line writes under the table); **format carousel** (table, scatter graph, column graph, notebook as four tiles; the spoken tile grows; the column graph is crossed); `DataGraph` with crosses, a best-fit line that rotates into place, and a **gradient triangle**; **units cancel strike**; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; the notebook card or table at the left; spreadsheet or graph at the right; a small result box at the top right that fills as the result improves (24.7 one run; 24.5 mean; 24.6 graph). Revision 2 stages (scene-level redesign, high-risk list): Revision 1 held scenes 1 to 8 (about 220 s) on one continued notebook-and-table board. Now: A, notebook with the burette and balance plates (1, 2); B, full-width table build with the analytical balance and the burette meniscus close-up (3, 4); C, the upturned-burette simulation (5, first half of 6); D, the full-width spreadsheet (rest of 6); E, the anomaly stage with the include/exclude toggle (7, 8); F, the format carousel (9); G, the graph (10, first half of 11); H, full-width gradient working (rest of 11). No stage runs past about 60 s.
- **Colour roles (Revision 2, fixed):** raw readings navy; processed values ink in a teal box; qualitative notes teal; the anomaly rose; accepted value gold; formulas violet; framed results in a dark-ink box with a green tick; mistakes red (strike plus red hand tag). Hand tags take the role colour of what they mark.
- **Type sizes (Revision 2, at 1080p):** the current table row or spreadsheet row 44 px (cells 40 px when the full five-row table is shown, never below 30 px for reference rows); formula bar 40 px; live readouts (burette reading, gas volume, mean, gradient) 52 px; axis titles 30 px; hand tags 34 to 40 px; nothing a student must read below 26 px.
- **Anchor and simulation (Revision 2).** Painted plates from the first frame: the upturned burette end plate (m2-v04's final frame), joined by `y11c-burette-upturned-start-v1.png` in scene 1 and `m6-analytical-balance-v1.png` and `m6-burette-meniscus-closeup-v1.png` in scenes 3 and 4. Two genuine simulations: scene 5 and 6's upturned burette, where the gas column grows while the live "burette reading" falls from 48.50 to 36.40 mL and the live "gas volume" rises from 0.00 to 12.10 mL (the surprise shown, not told); and scene 8's include/exclude toggle on run 3, which switches the live mean between 24.5 and 25.8 and, in scene 10, swings the best-fit line between gradients 1009 and 971 mL g⁻¹.
- **Colour key:** raw readings navy; processed values ink in a teal box; qualitative notes teal; the anomaly rose; accepted value gold; formulas violet; crossed chips red strike; "illustrative data" tag grey on every value.

Author notes (not learner copy):
(a) Processed values: V = 12.10, 20.60, 22.40, 35.30, 42.20 mL; n(H₂) = V ÷ 24 790 = 4.88, 8.31, 9.04, 14.24, 17.02 × 10⁻⁴ mol; MM = 24.59, 24.07, 30.99, 24.58, 24.67 g mol⁻¹ (shown to one decimal place: 24.6, 24.1, 31.0, 24.6, 24.7). Mean of runs 1, 2, 4, 5 = 24.48 (24.5); mean of all five = 25.78 (25.8).
(b) Gradient through the origin, runs 1, 2, 4, 5: Σ(mV) ÷ Σ(m²) = 1009.1 mL g⁻¹; 24 790 ÷ 1009.1 = 24.57 (24.6). With run 3 included: 971.1 mL g⁻¹ (shown in Revision 2 only as the toggle's swung line, labelled "with run 3: 971"; its 25.5 g mol⁻¹ is not shown). Least squares with a free intercept gives 998.9 mL g⁻¹ and intercept 0.33 mL (not shown). Revision 2 (brief 180): no zero-mass blank was measured, so the origin is the model-predicted point (no magnesium, no hydrogen) and the line is constrained through it on that assumption, not because it is an observed point. Reading off the fitted line at 0.040 g: 40.36 mL (40.364), gradient 1009; a rounded 40.4 would give 1010.
(c) Ideal volumes (24.31 g mol⁻¹): 12.24, 20.39, 28.55, 35.69, 42.83 mL; run 3's 22.40 mL is 6.15 mL short.
(d) Copper sulfate attempts: 24.33 + 2.50 = 26.83 g; losses 0.00, 0.52, 0.81, 0.89, 0.90, 0.90 g; as percentages 0, 20.8, 32.4, 35.6, 36.0, 36.0 (not required; 36.0% against v07's 36.1%, consistent with ws-v02 and ws-v03).
(e) Upturned burette: the 50 mL mark is near the top (tap end), so readings fall as gas collects; volume = start − end.

Main question: *How do raw chemistry readings become a usable table or graph?*
Entry knowledge: Stage 5 tables and graphs; m2-v04; ws-v02, ws-v03.
Stops after: selecting, tabulating, processing, a reasoned exclusion, format choice, graph conventions and the gradient. No error types or uncertainty.
Handoff: ws-v05, uncertainty and the limits of a result.

## Script and shots

Cue words in **bold** trigger the visual change.

### 1. hook: five runs, one mess
> Last time, one run of the magnesium method gave a molar mass of twenty-four point seven. Then the class did five runs, with five different masses of ribbon, and this is what they wrote down. These are raw readings, exactly what the instruments showed, in whatever form someone **scribbled** them. Milligrams in one line, grams in another, a missing unit, and no gas volumes at all. So how do we turn this into a result we can **trust**?

Visual: opens on m2-v04's final frame (Decisions); the "Next" chip fades. On the second sentence the notebook card moves to the centre and enlarges (lines 40 px), with the painted burette start and end plates (`y11c-burette-upturned-start-v1.png`, `y11c-burette-upturned-end-v1.png`) small at its right as the source of the readings. On "scribbled" a gloss writes: "raw data: exactly what the instrument showed", navy hand tag "as written". On the fourth sentence rose rings mark "12 mg", "0.035," (no unit) and the arrows "→" (rose hand tag "volume?"). On "trust" the heading writes on: "From raw readings to a table and graph", and the result box at the top right reads "one run: 24.7 g mol⁻¹".

### 2. select the data that matter
> First, select what bears on the question. The question needs numbers, the mass of each ribbon and the burette readings. That's quantitative data, numbers with **units**. But one line also has a description, ribbon floated, some bubbles escaped. That's qualitative data, a description without numbers, and it matters too, because it tells us something went wrong in that **run**. Keep both.

Visual: a navy highlighter sweeps each mass and each pair of readings on the card; on "units" a navy gloss "quantitative: numbers with units". On "run" a teal highlighter sweeps "Ribbon floated, some bubbles escaped!", gloss "qualitative: a description, no numbers"; a small teal pin attaches it to run 3. The conditions line "25 °C, 100 kPa" gets a navy tick and a navy hand tag "needed later".

### 3. a table with headed units
> Now build a table. The independent variable, the mass of magnesium, goes in the first column. Each heading names the quantity and its unit, so the cells hold plain **numbers**. Twelve milligrams becomes zero point zero one two **grams**, so every mass is in the same unit. And every value in a column gets the same number of decimal places, set by the instrument. The balance reads to a thousandth of a gram, so masses get three **places**.

Visual: clear change to the table stage (full width; the notebook shrinks to a thumbnail at the top left). `DataTable` draws large (headings 40 px): headers write in two parts, "mass of Mg, m" then "(g)"; "start reading (mL)"; "end reading (mL)", navy hand tag "quantity (unit)" with a pen ring round the first heading. On "numbers" a chip "0.042 g" in a cell fades in and is crossed in red, red hand tag "unit in the heading, not the cell". On "grams" the unit converter chip shows "12 mg ÷ 1000 = 0.012 g" and the value drops into row 1. The other masses fill row by row. On "places" the painted analytical balance (`m6-analytical-balance-v1.png`, about 420 px wide, uniform scale) slides in at the right with its coded display "0.012 g" (52 px), and the mass column glows with "3 decimal places (balance reads 0.001 g)", navy hand tag "3 places" with a pen arrow from the display to the column.

### 4. the burette's decimal places
> A burette reads to about five hundredths of a millilitre, so its readings get two decimal places. Run two's forty-nine point two should be written forty-nine point two **zero**. That final zero isn't decoration. It tells a reader the burette was read that **finely**.

Visual: the start and end columns fill: "48.50, 49.20, 47.80, 48.90, 48.50" and "36.40, 28.60, 25.40, 13.60, 6.30". On "zero" the "49.2" from the notebook flies in, gains a violet "0" and becomes "49.20" (the same for "28.6" → "28.60"); grey tag "assume 49.2 meant 49.20; record the zero next time". On "finely" the balance swaps for the painted burette close-up (`m6-burette-meniscus-closeup-v1.png`, about 460 px tall, uniform scale) with coded 0.1 mL division labels beside its ticks and the meniscus sitting between two marks, navy hand tag "read to about 0.05 mL" with a pen arrow to the meniscus.

### 5. prediction (countdown, 3 seconds)
> Quick prediction. In run one, the burette went from forty-eight point five zero to thirty-six point four zero. Is the volume of hydrogen thirty-six point four zero **millilitres**?

Visual: stage change to the burette stage (stage C): the table shrinks to a strip at the top with row 1 glowing; the upturned burette start plate (`y11c-burette-upturned-start-v1.png`) large at the left with tags "start 48.50", "end 36.40". Chips "yes", "no". On "millilitres" the 3 s `Countdown` ring runs. Nothing answer-bearing (the readouts of the simulation are not yet shown).

### 6. a processed column, and a spreadsheet
> No. The burette is upside down, so its readings fall as gas collects. The gas volume is the change, start minus end, twelve point one zero **millilitres**. That's processed data, calculated from the raw readings. A spreadsheet can do it for every row, then turn each volume into moles of hydrogen, and each mass and amount into a molar **mass**. But a spreadsheet repeats a formula exactly, mistakes included, so check one row by hand. Run five gives twenty-four point seven, just like last **time**.

Visual: "no" ticks. The burette simulation runs (52 px readouts at the right): coded bubbles rise, the gas space grows down from the tap end, and two live readouts move together, "burette reading: 48.50 → 36.40 mL" (navy, falling) and "gas volume: 0.00 → 12.10 mL" (teal, rising); the plate cross-fades towards the end state; navy hand tag "reading falls" and teal hand tag "gas grows". On "millilitres" a processed column "volume of H₂, V (mL)" appears in the table strip with a teal header band and "48.50 − 36.40 = 12.10", framed with a green tick; teal hand tag "start − end". On "That's processed data" (the third sentence) clear change to the spreadsheet stage (stage D, full width): the table becomes a spreadsheet grid with column letters A to F above the headings "m (g)", "start (mL)", "end (mL)", "V (mL)", "n(H₂) (mol)", "MM (g mol⁻¹)" (40 px); gloss "processed data: calculated from raw data". On "mass" the formula bar (violet, 40 px) shows "=B2-C2" and fills down column D, then "=D2/24790" for column E (grey tag "24 790 mL per mole at 25 °C, 100 kPa: from last time"), then "=A2/E2" for column F (brief 180: one locked column map, no self-reference); cells compute in turn: 24.6, 24.1, 31.0, 24.6, 24.7; violet hand tag "one formula, every row". On "time" a hand-check stamp writes beside run 5: "0.042 ÷ (42.20 ÷ 24 790) = 24.7 ✓", ink hand tag "check one by hand" with a pen ring.

### 7. one result doesn't fit
> Now the processing shows something the raw readings hid. Four runs give molar masses between twenty-four point one and twenty-four point seven. Run three gives thirty-one. That's an anomalous result, one that doesn't fit the pattern of the **others**. And the qualitative note explains it. Some bubbles escaped, so less hydrogen was counted, which pushes the molar mass **up**.

Visual: stage change to the anomaly stage (stage E): the MM column (F) and run labels enlarge at the centre (48 px); four cells get a soft teal bracket "24.1 to 24.7". On "others" a rose ring circles the "31.0" cell, gloss "anomalous result: doesn't fit the pattern", rose hand tag "odd one out". On "up" the teal pin from scene 2 slides to the ringed cell, and m2-v04's chain writes beside it (36 px): "gas escaped → V ↓ → n ↓ → MM ↑", teal hand tag "the note explains it".

### 8. leave it out, with a reason, then repeat it
> So leave run three out of the average, but don't delete it. Keep it in the table, marked, with the reason written **underneath**. The mean of the other four is twenty-four point five. With run three in, it would be twenty-five point eight, dragged away by one faulty **run**. The best fix is to repeat run three. The other four already agree closely, so they're precise, and a consistent repeat would make the whole set more **reliable**.

Visual: run 3's row stays, greyed with a rose ring; on "underneath" a reason line writes under the table: "Run 3 not used: ribbon floated and some H₂ escaped (see note)". On "run" the include/exclude toggle appears beside run 3 (the simulation): a live readout "mean = 24.5 g mol⁻¹" (52 px, teal) with the toggle at "run 3 out"; the toggle flips to "run 3 in" and the readout jumps to "25.8" (rose) as the run 3 cell lights, then flips back to "24.5"; the "24.5 g mol⁻¹" row (runs 1, 2, 4, 5) is framed with a green tick and a ghost "mean of all five = 25.8" is crossed in red, red hand tag "dragged by one faulty run". The result box updates: "mean: 24.5". Earlier, on "underneath", a teal hand tag "keep it, mark it, say why". On "reliable" a teal chip writes "improve: repeat run 3", with grey glosses from ws-v02 and ws-v03: "precise: repeated values agree closely" and "reliable: repeating the whole experiment gives consistent results".

### 9. choosing a format
> A table keeps every value. But to see the pattern, draw a graph. Which kind? Both the mass and the volume are measured numbers that can take any value in between, so plot them as points on a scatter graph. A column graph is for separate categories, like comparing different **metals**, so it's the wrong choice **here**.

Visual: the format carousel: four tiles, "table", "scatter graph", "column graph", "notebook". The table tile grows on the first sentence (tag "keeps every value and note"); the scatter tile grows on the third. On "metals" the column graph tile shows three bars labelled "Mg", "Zn", "Ca" (tag "categories"). On "here" a column graph of the five volumes appears in that tile and is crossed in red, red hand tag "mass is continuous". The notebook tile shows the tag "a record, not a presentation".

### 10. graph rules and the line of best fit
> Mass, the independent variable, goes across. Volume goes up. Each axis title names the quantity and its unit, and each scale goes up in even steps. Plot each run as a small **cross**. Then draw a line of best fit, a line that follows the trend, with the points scattered evenly about it. Don't join the **dots**. This line goes through zero, because no magnesium makes no hydrogen, and it ignores the ringed **point**.

Visual: `DataGraph` builds at the right: x axis "mass of magnesium, m (g)" 0 to 0.045 in steps of 0.005; y axis "volume of hydrogen, V (mL)" 0 to 45 in steps of 5. On "cross" five crosses plot one by one; run 3's cross lands well below the others. On "dots" a zig-zag line joining every cross draws and is crossed in red, red hand tag "not dot-to-dot". On "point" a straight best-fit line rotates into place from the origin through the four good crosses; run 3's cross gets the rose ring and the tag "anomalous: not used"; a small grey gloss (30 px) writes "line constrained through (0, 0): no magnesium, no hydrogen (predicted; no blank measured)" (brief 180), teal hand tag "through zero". The scene 8 toggle returns small beside the ringed cross: flipping it to "run 3 in" swings the line down to a dashed rose line labelled "with run 3: 971" and back, so the student sees what including the bad run would do to the result.

### 11. the gradient is the result
> Now the graph does the processing. The gradient, how steeply the line rises, is the rise divided by the run, about one thousand and nine millilitres for every gram of **magnesium**. One mole of hydrogen takes twenty-four thousand seven hundred and ninety millilitres. So divide that by the gradient, and the units cancel to grams per mole. The molar mass is twenty-four point six grams per **mole**. That's close to the mean, but it uses every good run at once, and shows the pattern really is a straight **line**. Here's a line to remember. Units in the headings, the pattern in the graph, and a reason for every point you leave **out**.

Visual: a gradient triangle draws under the line from (0, 0) to (0.040, 40.36): "rise 40.36 mL (read from the line)", "run 0.040 g"; on "magnesium" "gradient = 40.36 ÷ 0.040 = 1009 mL g⁻¹" (48 px) with a grey tag "spreadsheet fit, four good runs, through zero: 1009.1" (brief 180: the triangle keeps a guard digit; 40.4 ÷ 0.040 would give 1010), violet hand tag "rise ÷ run". On "One mole of hydrogen" (the second sentence) clear change to the full-width working (stage H; the graph shrinks to the left third): "MM = 24 790 mL mol⁻¹ ÷ 1009 mL g⁻¹" (48 px), with "mL" striking out, ink hand tag "units cancel". On "mole" "= 24.6 g mol⁻¹" framed in a dark-ink box with a green tick; the result box updates: "graph: 24.6 g mol⁻¹". On "line" the graph returns to half width and the four good crosses glow along the line, teal hand tag "uses all four good runs". On "out" a framed memory card draws across the top and the line writes in it as `HandText` (44 px): "Units in the headings, the pattern in the graph, and a reason for every point you leave out." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn, with the copper sulfate crystals from earlier. A student heats two point five zero grams of crystals in a crucible, and weighs the crucible and contents every two minutes. Draw up a table with suitable headings, including one processed column for the mass of water lost. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "A student heats 2.50 g of hydrated copper(II) sulfate crystals in a crucible (empty crucible 24.33 g) and records the mass of the crucible and contents every 2 minutes: 0 min 26.83 g; 2 min 26.31 g; 4 min 26.02 g; 6 min 25.94 g; 8 min 25.93 g; 10 min 25.93 g. Construct a table with suitable headings for these results, including one processed column showing the mass of water lost." The full question stays on screen with the crucible plate `y11c-cuso4-crucible-blue-v1.png` small beside it. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Time goes first, because it's the independent variable. Then the mass of the crucible and contents, in grams. The processed column is the mass of water lost, the first reading minus each reading, so zero, zero point five two, up to zero point nine **zero**. Units belong in the headings. Writing grams in every cell, with no quantity in the heading, is the classic **slip**.

Visual: card shrinks to the top. A `DataTable` writes: headings "time (min)", "mass of crucible and contents (g)", "mass of water lost (g)" (teal processed band); rows fill: 0, 26.83, 0.00; 2, 26.31, 0.52; 4, 26.02, 0.81; 6, 25.94, 0.89; 8, 25.93, 0.90; 10, 25.93, 0.90. On "zero" (the last word of the third sentence) the processed column glows with "26.83 − reading". The finished table is framed with a green tick. On "slip" a chip table "Time | Mass" with "26.83 g" in a cell fades in and is crossed in red, red hand tag "quantity (unit) in the heading". Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. What type of graph should the student draw for these results, and how should the points be joined? Justify your answer. Pause here to answer.

Visual: `QuestionCard`: "For the copper sulfate results above, state the type of graph the student should draw, which variable goes on each axis, and how the points should be joined. Justify your choices." The table from scene 13 stays small beside the card. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> A line graph, with time across and mass of water lost up, because both are continuous measurements. Draw a smooth curve of best fit that levels off at zero point nine zero grams, because the loss slows as the water runs **out**. It isn't a straight line, and it isn't dot to dot. A column for each reading is the classic **slip**.

Visual: card shrinks to the top. A small `DataGraph`: "time (min)" across, "mass of water lost (g)" up; six crosses; on "out" a smooth curve of best fit rises and levels at 0.90 g, framed answer chip "line graph, smooth curve" with a green tick, teal hand tag "levels off: water all gone". On "slip" a column graph of the six readings fades in and is crossed in red, red hand tag "time is continuous". Hold about 1 second.

### 16. handoff: is the gap real?
> So the class's raw readings became one result, twenty-four point six grams per mole, from a graph that uses every good run. The accepted value is twenty-four point three one. Is that gap a real difference, or is it within the limits of the measurements we **made**? Next time, we'll judge uncertainty, and the limits of a chemistry **result**.

Visual: board clears to the finished magnesium graph (final frame, see "Opening frame and final frame"), the processed table small at the left. On the second sentence a gold chip "accepted: 24.31 g mol⁻¹" writes beside the result box. On "made" a violet "± ?" tag writes beside "24.6" and a small bracket spans 24.31 to 24.6. On "result" the chip writes: "Next: How do we judge uncertainty and the limits of a chemistry result?". Hold about 2 seconds. This is the final frame (ws-v05 opens on it).

### 17. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Raw data: what the instrument showed. Processed data: calculated from it (V = start − end).
2. Tables: independent variable first; "quantity (unit)" headings; decimal places set by the instrument.
3. Anomaly: keep it, mark it, give the reason, leave it out of the mean and line; repeat the run.
4. Continuous data: scatter graph, line or smooth curve of best fit, never dot-to-dot.
5. Gradient as a result: MM = 24 790 ÷ 1009 = 24.6 g mol⁻¹.

Memory aid (framed card under the notes, hand lettering as in scene 11): *Units in the headings, the pattern in the graph, and a reason for every point you leave out.* Notes 32 px in the role colours; no paragraphs.

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why convert mg to g (one unit per column, so values compare, 3); why two decimal places for a burette (the reading's fineness, 4); why the volume is start minus end (upturned burette, readings fall, 6); why check a spreadsheet row by hand (a formula repeats mistakes exactly, 6); why run 3 is high (gas escaped, fewer moles, 7); why keep it in the table (the record must be complete and checkable, 8); why a scatter graph, not columns (continuous data, 9); why through zero (no magnesium, no hydrogen, 10); why the graph result is preferred (all good runs at once; tests the pattern, 11).
- **Misconceptions addressed:** the final reading is the volume (5, 6); delete odd results, or average everything (8); units in every cell (13, crossed); dot-to-dot and column graphs for continuous data (10; 15, crossed); spreadsheets can't be wrong (6).
- **One idea at a time:** raw (1), selection (2), table (3, 4), processing (5, 6), anomaly (7, 8), format (9), graph (10), gradient (11).
- **Video makes it easier:** highlighters separate quantitative from qualitative (2); the spreadsheet fill-down shows one formula working on every row (6); the anomaly is ringed in the table and again on the graph (7, 10); the gradient triangle and unit cancel (11).
- **Response opportunity:** prediction (3 s) and two unseen tasks on a familiar case with every reading on the card; 10 s each; nothing answer-bearing. Feedback about 27 s and 23 s.
- **Avoided double teaching:** the magnesium method and its chemistry (m2-v04) and the copper sulfate investigation (ws-v02, ws-v03) recalled in a clause each; error types and uncertainty left for ws-v05.
- **Syllabus coverage:** `C11-WS4-01` (2, 3, 9, 10: selecting quantitative and qualitative data; table, spreadsheet, graphs, notebook as formats and media; digital technologies); `C11-WS4-02` (6, 8, 11: processed columns, mean, gradient); `C11-WS4-03` (7, 8: evaluating data quality, a reasoned exclusion and the improvement by repeating).
- **Out of scope by design:** random and systematic error, uncertainty, percentage error and significant figures (ws-v05); trends beyond this line (ws-v05); writing a conclusion (ws-v07).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style).** "A student heats 2.50 g of hydrated copper(II) sulfate crystals in a crucible (empty crucible 24.33 g) and records the mass of the crucible and contents every 2 minutes: 0 min 26.83 g; 2 min 26.31 g; 4 min 26.02 g; 6 min 25.94 g; 8 min 25.93 g; 10 min 25.93 g. Construct a table with suitable headings for these results, including one processed column showing the mass of water lost."
Model answer: columns "time (min)", "mass of crucible and contents (g)", "mass of water lost (g)"; rows 0, 26.83, 0.00; 2, 26.31, 0.52; 4, 26.02, 0.81; 6, 25.94, 0.89; 8, 25.93, 0.90; 10, 25.93, 0.90 (water lost = 26.83 − reading; two decimal places throughout). Classic mistake (crossed): headings without quantities or units ("Time | Mass") and "g" written in every cell.

**Attempt 2 (scene 14; original wording, HSC style).** "For the copper sulfate results above, state the type of graph the student should draw, which variable goes on each axis, and how the points should be joined. Justify your choices."
Model answer: a line (scatter) graph, because both time and mass lost are continuous measured quantities; time (independent) across, mass of water lost (dependent) up; a smooth curve of best fit that rises and levels off at 0.90 g, because the rate of loss falls as the water is used up; not dot-to-dot and not a straight line. Classic mistake (crossed): a column graph with one column per reading.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (m2-v04) | one run 24.7 g mol⁻¹; five notebook lines | 1 |
| Masses (g) | 0.012, 0.020, 0.028, 0.035, 0.042 (12 mg → 0.012 g) | 3 onward |
| Burette start (mL) | 48.50, 49.20, 47.80, 48.90, 48.50 | 4 |
| Burette end (mL) | 36.40, 28.60, 25.40, 13.60, 6.30 | 4 |
| Volumes (mL) | 12.10, 20.60, 22.40, 35.30, 42.20 | 6, 10 |
| n(H₂) (mol) | 4.88, 8.31, 9.04, 14.24, 17.02 × 10⁻⁴ | 6 |
| MM per run (g mol⁻¹) | 24.6, 24.1, 31.0, 24.6, 24.7 | 6, 7 |
| Means | 24.5 (runs 1, 2, 4, 5); 25.8 (all five, crossed) | 8 |
| Gradient | 1009 mL g⁻¹ (fit 1009.1; triangle 40.36 mL at 0.040 g); with run 3 (toggle, scene 10 only) 971 | 10, 11, key note 5 |
| Result | 24 790 ÷ 1009 = 24.6 g mol⁻¹; accepted 24.31 | 11, 16, key note 5 |
| Burette simulation (Revision 2) | reading 48.50 → 36.40 mL; gas 0.00 → 12.10 mL | 6 |
| Toggle (Revision 2) | mean 24.5 (run 3 out), 25.8 (run 3 in) | 8 |
| Copper sulfate (attempts) | 24.33 + 2.50 = 26.83; readings 26.83, 26.31, 26.02, 25.94, 25.93, 25.93; lost 0.00, 0.52, 0.81, 0.89, 0.90, 0.90 | 12 to 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- V = start − end: 48.50 − 36.40 = 12.10; 49.20 − 28.60 = 20.60; 47.80 − 25.40 = 22.40; 48.90 − 13.60 = 35.30; 48.50 − 6.30 = 42.20.
- n = V ÷ 24 790: 4.881, 8.310, 9.036, 14.240, 17.023 (× 10⁻⁴ mol).
- MM = m ÷ n: 24.59, 24.07, 30.99, 24.58, 24.67; mean (1, 2, 4, 5) 24.48; mean (all) 25.78.
- Gradient through origin (1, 2, 4, 5): Σ(mV) = 0.1452 + 0.412 + 1.2355 + 1.7724 = 3.5651; Σ(m²) = 0.000144 + 0.0004 + 0.001225 + 0.001764 = 0.003533; 3.5651 ÷ 0.003533 = 1009.1; 24 790 ÷ 1009.1 = 24.57; 0.040 × 1009.1 = 40.364 (shown 40.36). Revision 2 (brief 180): 40.36 ÷ 0.040 = 1009.0; 40.4 ÷ 0.040 = 1010 (not shown); 24 790 ÷ 1009 = 24.57 (24.6).
- With run 3 (all five through the origin): Σ(mV) = 3.5651 + 0.6272 = 4.1923; Σ(m²) = 0.003533 + 0.000784 = 0.004317; 971.1.
- Copper sulfate: 26.83 − (26.31, 26.02, 25.94, 25.93) = 0.52, 0.81, 0.89, 0.90.

## Memory aid check

- **"Units in the headings, the pattern in the graph, and a reason for every point you leave out."** Written for this video. Meaning, as listed in key notes 2 to 4: tables carry units in "quantity (unit)" headings; graphs are for showing patterns (with a line or curve of best fit); an excluded result needs a stated, evidence-based reason. Assumptions checked: "leave out" means leave out of the mean and the line, not delete from the table (scene 8 says so); "the pattern in the graph" does not claim every pattern is straight (A2's curve). It helps both attempts. Said at the end of scene 11, after all three parts have been taught (scenes 3, 8 and 10), and repeated on the notes screen.
- **Considered, not used:** "Select, tabulate, process, graph" (a list of steps without the two rules students most often break).

## Narration length estimate

Revision 2 count (6 November; build parser rules: only lines starting "> ", `**` removed, total = sum of scene strings): **5,847 characters**, 17 scenes, speech unchanged (Revision 1's headline 5,863 included 16 joining spaces). At 13.3 characters per second the speech is about 440 s; add about 2 s for the burette simulation (6), 2 s for the toggle flips (8, 10), 1 s for the stage cuts, about 3 s for the spreadsheet fill-down (6), 2 s for the graph build (10), 2 s for the memory-line hold (11), 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 84 s): **about 524 s**. Reserve trims if the voiced take runs long: scene 4's last two sentences (the tag stays), scene 9's column-graph sentence (the crossed tile stays), scene 1's fourth sentence.

## Opening frame and final frame

- **Opening frame:** m2-v04's final frame exactly (Decisions).
- **Final frame (ws-v05 opens on it):** at the right two thirds, the finished `DataGraph`: x axis "mass of magnesium, m (g)" from 0 to 0.045 in steps of 0.005; y axis "volume of hydrogen, V (mL)" from 0 to 45 in steps of 5; four ink crosses at (0.012, 12.10), (0.020, 20.60), (0.035, 35.30), (0.042, 42.20); a fifth cross at (0.028, 22.40) in a rose ring tagged "anomalous: not used (run 3, H₂ escaped)"; a straight teal best-fit line from the origin through the four crosses; the gradient triangle from (0, 0) to (0.040, 40.36) labelled "gradient ≈ 1009 mL g⁻¹"; the small grey gloss "line constrained through (0, 0): predicted, no blank measured". At the top right, the result box: "MM(Mg) = 24 790 ÷ 1009 = 24.6 g mol⁻¹", with a violet "± ?" tag beside "24.6" and a gold chip "accepted: 24.31 g mol⁻¹" below it, a small bracket spanning 24.31 to 24.6. At the left, small, the processed table (columns "m (g)", "V (mL)", "n(H₂) (mol)", "MM (g mol⁻¹)"; run 3's row greyed with its reason line "Run 3 not used: ribbon floated and some H₂ escaped"). The chip "Next: How do we judge uncertainty and the limits of a chemistry result?" at the bottom of the safe area (above the bottom 12%). All values carry the grey "illustrative data" tag. ws-v05's designer: the five runs, the accepted value, the 0.001 g balance and the burette's 0.05 mL resolution are all available for an uncertainty treatment; m2-v04 author note c (water vapour pushes MM low; escaping gas pushes it high) is also available.

## Scene list and build ids

Lesson key `c-y11-ws-v04` (route chem-y11-ws-v04; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v04`.

In order (17 scene headings, all `### N.`): hook, select, table, decimal-places, prediction, processed-column, anomaly, exclude-repeat, format, graph-rules, gradient, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m2-v04's final frame into scene 1 by camera continue (the notebook enlarges); 1 to 2 camera continue; 2 to 3 clear change to the full-width table stage (Revision 2); 3 to 4 camera continue (balance swaps for the burette close-up); 4 to 5 stage change to the burette stage; 5 to 6 camera continue into the simulation, then a clear change inside scene 6 to the spreadsheet stage; 6 to 7 stage change to the anomaly stage; 7 to 8 camera continue; 8 to 9 clear change (format carousel); 9 to 10 camera push into the scatter tile, which becomes the full graph; 10 to 11 camera continue, then a clear change inside scene 11 to the full-width gradient working; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/c-y11-ws-v04-learning-review.md`, `checks/c-y11-ws-v04-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; scaled uniformly only, never stretched):
- `public/assets/chemistry/y11c-burette-upturned-end-v1.png` and `y11c-burette-upturned-start-v1.png` (now on disk; start plate inspected 6 November: upturned burette clamped on a stand, open end in a beaker of water, ribbon coil at the mouth): scenes 1, 5, 6.
- `public/assets/chemistry/m6-analytical-balance-v1.png` (existing; used by m2-v11 and v12): scene 3, display "0.012 g" (Revision 2).
- `public/assets/chemistry/m6-burette-meniscus-closeup-v1.png` (inspected 6 November: a close-up of a burette tube with tick marks and a curved meniscus, transparent background): scene 4 (Revision 2).
- `public/assets/chemistry/y11c-cuso4-crucible-blue-v1.png` (requested by m1-v07): scene 12, small.

Need: none new (Revision 2 adds three existing plates). Coded: burette simulation readouts, include/exclude toggle, notebook card, highlighters, `DataTable`, spreadsheet grid and formula bar, hand-check stamp, anomaly rings, format carousel, `DataGraph`, gradient triangle, result box, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry WS v04)

No new plates. Depends on m2-v04's `y11c-burette-upturned-end-v1.png` and m1-v07's `y11c-cuso4-crucible-blue-v1.png`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the opening notebook lines match `chem-y11-m2-v04.md`'s final frame character for character.
3. Confirm the table and graph conventions as taught (Decisions) and the burette and balance resolutions against the site's equipment table.
4. Confirm the course definitions of precise and reliable match `chem-y11-ws-v02.md` and `ws-v03.md`, and that random and systematic error, uncertainty and percentage error appear nowhere in learner copy except the handoff's "uncertainty".
5. Confirm the memory aid's assumptions (Memory aid check).
6. Confirm both attempt cards are original, carry every reading, and show nothing answer-bearing.
7. Confirm the syllabus quotes match the ledger.
8. Confirm no person, hand or face is drawn or requested.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script, and that the final frame is described exactly for ws-v05's opening.

## YouTube metadata (draft)

Title: From Raw Readings to Tables and Graphs: Processing Chemistry Data | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module2/lesson18.sa.html

Five runs of a magnesium molar-mass practical, written down in a hurry: milligrams and grams mixed, missing units, no gas volumes and one run where bubbles escaped. See how to select quantitative and qualitative data, build a table with proper headings and decimal places, process readings in a spreadsheet (and check it by hand), deal with an anomalous result honestly, choose the right graph, draw a line of best fit, and turn its gradient into a molar mass. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Processing Data and Information.
Syllabus content (NSW Chemistry Stage 6):
"select qualitative and quantitative data and information and represent them using a range of formats, digital technologies and appropriate media (ACSCH004, ACSCH007, ACSCH064, ACSCH101)"
"apply quantitative processes where appropriate"
"evaluate and improve the quality of data"

Previous: Measuring molar mass in a practical. Next: Uncertainty and the limits of a chemistry result.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Final frame for ws-v05 (root).** Described exactly above; ws-v05's designer works in parallel and must open on it, or root reconciles the join.
- **2. Memory aid placement (root).** Spoken at the end of scene 11 rather than in its own scene, to keep the gradient result and the aid together; the learning review may move it.
- **3. Plate dependencies (root).** Uses m2-v04's burette end plate and m1-v07's blue crucible plate; neither is painted yet.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the start-minus-end surprise clear; is the exclusion reasoning felt as honest rather than convenient; does the gradient-to-molar-mass step land with the units cancel; is scene 6 one stage or two), then the science check and the Codex error check.
- Checker output (5 November): narration 5,863 characters; per scene (1 to 17): 428, 381, 428, 259, 176, 488, 369, 426, 312, 406, 622, 303, 366, 151, 322, 335, 75; no em dash; every quoted cue found in its scene's narration in spoken order. Scene 11 (622, with the memory line) is the longest stage.
- Revision 2 count (6 November): 5,847 characters (sum of scene strings; speech unchanged); per scene as Revision 1. Every bold cue checked in its Visual in spoken order; no em dash.

## Revision 2 (6 Nov 2026)

Brief 180 findings (`checks/c-y11-ws-v04-learning-review.md`, `checks/c-y11-ws-v04-science-check.md`):
- **Should fix, spreadsheet column map (scene 6):** one map is locked and shown as column letters: A = m, B = start, C = end, D = V, E = n(H₂), F = MM. Formula bars now read "=B2-C2", "=D2/24790" and "=A2/E2" (no self-reference). Decisions updated. No speech change.
- **Should fix, origin (scene 10, author note b):** the origin is now called the model-predicted point; the screen says "line constrained through (0, 0): no magnesium, no hydrogen (predicted; no blank measured)", and the same gloss sits in the final frame. No observed blank is invented; the narration's "because no magnesium makes no hydrogen" is the stated assumption. No speech change.
- **Should fix, gradient display (scene 11):** the triangle reads the fitted line with a guard digit (40.36 mL at 0.040 g, so 1009), and a grey tag gives the spreadsheet fit from the four good runs (1009.1); the rounded 40.4 (which gives 1010) is no longer shown. Final frame triangle updated to (0.040, 40.36), still labelled "gradient ≈ 1009 mL g⁻¹", so ws-v05's reconciled opening still matches. No speech change.
- **Count method:** headline restated as the sum of scene strings (5,847; Revision 1's 5,863 included joining spaces). Estimate about 524 s.

Visual upgrade and scene-level redesign (high-risk list; narration, numbers and teaching logic unchanged):
- Revision 1 held scenes 1 to 8 (about 220 s of speech) on one continued notebook-and-table board. Now eight stages (A to H in Decisions): notebook with the burette plates; a full-width table with the analytical balance and the burette meniscus close-up; the burette simulation; the full-width spreadsheet; the anomaly stage; the format carousel; the graph; full-width gradient working.
- Simulations: scene 5 and 6's upturned burette, with a live falling reading and a live rising gas volume (the start-minus-end surprise shown); scene 8's include/exclude toggle on run 3 (mean 24.5 against 25.8), reused in scene 10 to swing the best-fit line to 971 and back.
- Plates added (existing, inspected): `y11c-burette-upturned-start-v1.png`, `m6-analytical-balance-v1.png`, `m6-burette-meniscus-closeup-v1.png`.
- Hand tags and pen marks in role colours in every teaching scene; framed results on 12.10 mL (6), 24.5 (8), 24.6 (11), the finished A1 table (13) and the A2 answer (15); crossed slips with red hand tags (3, 8, 9, 10, 13, 15).
- Memory line in a framed card (11); key notes cut to five short bullets (425 characters) with the framed card.
- No new plate requests.
