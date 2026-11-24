# Maths S11 M06: What does a car cost to run each year, and how does a spreadsheet track it? Fuel from litres per 100 km, the yearly costs, cost per kilometre and per week, a spreadsheet model with what-ifs, and two cars over five years (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2: learning review resolved (24 Nov 2026)"). Revision 1 (23 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Standard designs (`math-s11-e06.md`, `e12.md`, `f08.md`, each at Revision 2), `math-s11-m01.md` to `m05.md` (Revision 1, this batch), the coherence audit (`../checks/maths-standard-coherence-audit-2026-11-23.md`) and root's Standard rulings 1 to 99 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32, 47 and 90 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,325 characters by script at Revision 2 (Revision 1: 6,242; see "Narration length estimate"), 13 scene headings, about 568 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 11 Managing money, outline playlist order 33. One video for Standard 1 and Standard 2. Viewers arrive from m05's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-m06.md`. Route entry: `math-s11-m06` in `../../programme/maths-standard-route-inputs-10.json`. Site lesson: `year11/managing-money/lesson05.sa.html` (site L13), cards 3 and 4, WE3, WE4 and SAQ 2 used; repriced at $2.25 a litre (ruling 47) with the green slip renewal added (MSY-06). Visual system: maths studio kit; the red hatchback (existing) and the new electricity meter plate (`ms11-electricity-meter-v1.png`, briefed in m07, painted one video early, ruling 17) for the final frame; the fuel tank, cost stack, `SpreadsheetGrid` (ruling 90), slider and bars coded.

Owner rules applied: as m01 (2024 syllabus; plates for real objects, code for documents and diagrams; no people; header strip "MANAGING MONEY" only; one question; one stage at a time; words before symbols; plain meanings (running costs, maintenance, litres per 100 km, cost per kilometre, model); the spreadsheet coded and unbranded ("any spreadsheet program works"); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the strand's car, a commute, two cars); money spoken naturally; Australian spelling; no em dashes; prices said once to change).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Managing money, "Budgeting", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-10.json`:

- `ci9d6326d6`: "Examine the ongoing costs of a vehicle"
- `ci61920f78`: "Use a spreadsheet to model the costs of purchasing, running and maintaining a vehicle"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

**Boundary:** starts from m05's final frame exactly (board clear; the hatchback, about 1,000 px wide, with the teal stamp "drive-away $16 647"; grey chips "fuel", "rego", "insurance", "service"; chips "every year after?", "Next: running costs" and "?"). Recalls m05 (registration, the green slip, comprehensive insurance) and e06 and e12 (inputs in cells, formulas, SUM, "rates in their own cells") in grey chips. Teaches: the yearly running costs (fuel, registration and green slip renewal, insurance) and maintenance (servicing, tyres); fuel cost from L/100 km and the petrol price; cost per kilometre and per week; a spreadsheet model with inputs in their own cells and every total a formula; what-ifs (distance up: total up, cost per km down); purchase plus five years; two cars over five years. Depreciation is named only. Stops at the model and its what-ifs. Not taught: depreciation (Year 12).

## Decisions

- **Anchor: the same hatchback, a year later (m05's final frame).** The checklist chips from m05 become the rows of the yearly cost stack, then the rows of the sheet. One car carries buying (m05) and running (m06).
- **Prices (rulings 5, 32 and 47).** Petrol about $2.25 a litre (ruling 47, NRMA weekly report, 9 Nov 2026); registration $385 and green slip $780 a year (m05's examples, renewed yearly; MSY-06); comprehensive $1,640 (m05's example); servicing $548 and tyres $300 a year (examples; a set of tyres averaged over its life). The total $5,408 is exactly $104 a week, which m08's budget reuses. Said once (scene 1): "Prices change, but the method doesn't."
- **Depreciation named, not taught.** One sentence in scene 2: the car also loses value each year, which is a real cost too, but this model counts only the money you pay out (Year 12 i10 teaches depreciation).
- **The model, not the arithmetic (pack).** Scene 4 builds the sheet from scene 3's stack; scene 5 is the what-if (slider on B1); scene 6 adds the purchase. The two site rules are the memory aid's second half: inputs in their own cells, every total a formula.
- **Simulations (standard item 3).**
  1. **Fuel tank** (scene 2): a coded tank fills in 65 L steps for every 1,000 km driven (a distance counter beside it), reaching 780 L at 12,000 km; litres convert to dollars as a teal readout ($2.25 a litre).
  2. **Distance slider** (scene 5; `SpreadsheetGrid` with a slider bound to B1): B1 slides from 8,000 to 20,000 km; B4 (fuel), B10 (yearly cost) and B11 (cost per km) update live; a small `StudioPlot` beside the grid traces cost per km against distance, a curve that falls and flattens (fixed costs spread over more kilometres).
  3. **Five-year bars** (scene 7): two cars' bars build year by year from a purchase block plus five fuel blocks; the cheaper-to-buy car's bar overtakes the other's in year 5.
- **Colour roles (fixed m01 to m06).** Inputs (distance, fuel use, prices you type) **blue**; rates (L/100 km, $ a litre) **amber**; formula results and totals **teal**; costs on top of the purchase **violet**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Grid cells 36 to 40 px (active cell 44 px); formula bar 44 px; readouts 52 px; nothing below 26 px; all text above y = 950. Hand tags: "÷ 100 first", "every year", "maintenance", "cost ÷ distance", "inputs in their own cells", "every total a formula", "only fuel grows", "spread thinner", "fuel catches up". At most two live at once.
- **Stage changes (standard item 2).** The hatchback and chips (1); the fuel tank (2); the yearly stack (3); the sheet (4); the slider and plot (5); purchase plus five years (6); two cars (7); framed card (8); question cards (9 to 12); the meter (13); key notes in 13.
- **Worked examples (g01 order).** Scene 2: task strip "12 000 km a year at 6.5 L/100 km; petrol $2.25 a litre. Find the fuel cost."; givens (distance blue, 6.5 L/100 km and $2.25 amber); rows "12 000 × 6.5 ÷ 100 = 780 L", "780 × 2.25 = $1755" (framed green); crossed "12 000 × 6.5 = 78 000 L" (caption "÷ 100 first"). Scene 3: "5408 ÷ 12 000 ≈ $0.45 = 45.1c a km", "5408 ÷ 52 = $104 a week" (framed green); crossed "12 000 ÷ 5408 = 2.2" (caption "cost ÷ distance").
- **Memory aid.** Framed card: "Inputs in cells; cost per km = yearly cost ÷ km." Key line: "Fuel = km × L/100 km ÷ 100 × $ a litre. Every total is a formula."
- **Visual surprise.** As the distance slider rises, the yearly total climbs but the cost per kilometre falls (scene 5); and in scene 7 the dearer car's bar ends lower.
- **Plain meanings at first use.** Running costs ("what a car costs every year you own it"); maintenance ("keeping it working: servicing and tyres"); litres per 100 km ("how many litres it uses to drive 100 kilometres"); cost per kilometre ("the yearly cost shared over every kilometre driven"); model ("a sheet where you change an input and every answer updates").
- **Attempts.** A1 (pack question 1): Mia, 20,000 km at 7.5 L/100 km, $2.25: 1,500 L, $3,375; total $6,025; 30.1c a km; crossed "20 000 ÷ 6025 = 3.3" (caption "cost ÷ distance"). A2 (pack question 2, Revision 2 distance): the same two cars at 10,000 km a year: A $28,125, B $28,750; A by $625; crossed "B, because it was cheaper in the video" (caption "the distance changed"). Scene 7 uses 15,000 km, where B wins; A2's lower distance reverses it, so the countdown picture cannot give the answer and A2 tests scene 5's point that per-km comparisons depend on distance.
- **Mistake scene:** none separate. ÷ 100 forgotten (2, crossed); distance ÷ cost (3, crossed; A1 crossed); a typed total (4, said and shown going stale); a grand total whose =SUM range includes the B10 subtotal (4, crossed; Revision 3); price alone (7; A2 crossed).
- **Cause chain taught, in order:** (1) fuel use is per 100 km, so litres = km × rate ÷ 100, then dollars = litres × price (2); (2) most other costs are paid every year whatever the distance, so they add as fixed amounts (3); (3) cost per km shares the yearly cost over every km (3); (4) a model keeps inputs separate and totals as formulas, so changing an input updates every answer (4); (5) driving further adds only fuel, so the fixed costs are spread thinner and the cost per km falls (5); (6) a car's real cost is its purchase plus years of running, so a cheaper car can cost more over time (6, 7).
- **Entry knowledge (route):** math-s11-m05; e06, e12 (spreadsheets); f08. Recalled in grey chips.
- **Site notes.** lesson05 values recalculated: no arithmetic error. MSY-06 (green slip renewal missing; petrol at $2.00).
- **Handoff (to math-s11-m07, household bills).** Scene 13: board clear; the hatchback slides out left with its "$104 a week" tag; the electricity meter `ms11-electricity-meter-v1.png` (about 700 px tall) slides in at the centre, its blank display showing a coded "19264 kWh" (40 px, teal); chips "the house costs money too", "Next: household bills" and "?". m07 opens here.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 12 000 × 6.5 ÷ 100 = 780 L; 780 × 2.25 = 1755; slip 12 000 × 6.5 = 78 000.
  (b) 1755 + 385 + 780 + 1640 + 548 + 300 = 5408; 5408 ÷ 12 000 = 0.45067 → 45.1c; 5408 ÷ 52 = 104; slip 12 000 ÷ 5408 = 2.22.
  (c) 18 000 km: 1170 L; 2632.50; 6285.50; 0.3492 → 34.9c. 8000 km: 520 L, 1170; 4823; 60.3c. 20 000 km: 1300 L, 2925; 6578; 32.9c.
  (d) Revision 3: B10 holds =SUM(B4:B9) = 5408 (valid). The slip is a later cell, B13 =SUM(B4:B10), which adds B10's 5408 to B4:B9's 5408: 10 816. Fix: =SUM(B4:B9) or =B10, both 5408. No circular reference: B13 is outside its own range.
  (e) 16 647 + 5 × 5408 = 43 687; 43 687 ÷ 60 000 = 0.7281 → 72.8c.
  (f) Cars at 15 000 km (scene 7 only): A 15 000 × 9 ÷ 100 = 1350 L, 3037.50 a year, 5 years 15 187.50, total 33 187.50; B 900 L, 2025, 10 125, 32 125; B ahead by 1062.50; fuel saving 1012.50 a year. A2 at 10 000 km: A 900 L, 2025 a year, 10 125, total 28 125; B 600 L, 1350, 6750, 28 750; A ahead by 625; fuel saving 675 a year, 3375 over 5 years, short of the 4000 price gap. Break-even about 11 852 km a year.
  (g) A1: 1500 L; 3375; 820 + 500 + 380 + 950 = 2650; 6025; 0.30125 → 30.1c.
  (h) Pronunciations: "six point five litres per hundred kilometres"; "equals B one times B two divided by a hundred times B three".

Main question: *Every year after you buy it, the car keeps costing. What does a car cost to run each year, and how does a spreadsheet track it?*
Entry knowledge (math-s11-m05; e06, e12; f08): the hatchback's costs; inputs, formulas, SUM.
Stops after: yearly costs, per km and per week, the model and its what-ifs, five years, two cars. No depreciation calculation.
Handoff: math-s11-m07: "the house costs money too".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inputs blue; rates amber; formula results and totals teal; costs on top of the purchase violet; answer green; mistake red. Header strip "MANAGING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. The grid is coded and unbranded; formulas are shown exactly as typed.

### 1. hook: every year after
> Sixteen thousand six hundred and forty-seven dollars, and the hatchback is yours. But a car keeps costing money every year you own it. Fuel every week. Registration and the green slip every year. Insurance. Servicing, and new tyres now and then. These are its running costs. So is this car cheap to own, or not? You can't tell from the price. Prices change, but the method doesn't. What does a car cost to run each year, and how can a spreadsheet keep track of **it**?

Visual: opens on m05's final frame exactly. On "every year you own it" the grey chips turn into small violet cards one at a time as named: "fuel", "rego + green slip", "insurance", "servicing", "tyres". On "running costs" grey chip "running costs: what it costs every year you own it". On "You can't tell from the price" the drive-away stamp dims. On "it" heading "Running a car: the yearly cost" writes on.

### 2. fuel from litres per hundred kilometres
> Start with fuel, the one that depends on how far you drive. Car makers give fuel use in litres per hundred kilometres. This hatchback uses six point five litres to drive a hundred kilometres. Say you drive twelve thousand kilometres a year. That's a hundred and twenty lots of a hundred kilometres, so twelve thousand times six point five, divided by a **hundred**, is seven hundred and eighty litres. At about two dollars twenty-five a litre, that's seventeen hundred and fifty-five dollars of fuel a **year**. The common slip is forgetting to divide by a hundred, which gives seventy-eight thousand litres, enough to fill a **swimming pool**. The car also loses value each year, which is a real cost too, but this video counts only the money you pay **out**.

Visual: stage change (simulation 1): the hatchback (480 px) at the top left with a grey chip "6.5 L/100 km" (amber). Centre: a coded fuel tank (360 × 520 px) and a distance counter "0 km". The g01 board at the right: task strip "12 000 km a year at 6.5 L/100 km; petrol $2.25 a litre. Find the fuel cost."; givens "12 000 km" (blue), "6.5 L/100 km" and "$2.25 a litre" (amber, with a small grey "example price" chip). On "a hundred and twenty lots" the counter runs to 12 000 while the tank fills in 65 L steps; on "hundred" row "12 000 × 6.5 ÷ 100 = 780 L" (52 px), hand tag "÷ 100 first". On "year" row "780 × 2.25 = $1755" (teal), framed green. On "swimming pool" a red slip "12 000 × 6.5 = 78 000 L" writes and is crossed (caption "÷ 100 first"). On "out" a grey chip "the car also loses value (not counted here)".

### 3. the year's costs, per kilometre and per week
> Now add the costs that come every year, whatever the distance. Registration, three eighty-five, and the green slip, seven eighty, from last time. Comprehensive insurance, sixteen forty. Then maintenance, keeping the car working. Servicing, five forty-eight, and tyres, about three hundred a year, averaged over a set. With the fuel, that's five thousand four hundred and eight dollars a **year**. That's hard to picture, so share it out. Divided by twelve thousand kilometres, it's about forty-five cents a **kilometre**. Divided by fifty-two, it's a hundred and four dollars a **week**. Cost per kilometre is cost divided by distance. Twelve thousand divided by fifty-four oh eight is kilometres per dollar, which isn't what was **asked**.

Visual: stage change: a stacked bar at the centre builds layer by layer (labels 40 px): "fuel $1755" (teal); "rego $385", "green slip $780" (violet, grey chip "m05, every year"); "insurance $1640"; "servicing $548", "tyres $300" (bracket "maintenance", hand tag "maintenance"). Small grey "example" labels on each fixed layer. On "year" the total "$5408 a year" (52 px), framed green. On "kilometre" row "5408 ÷ 12 000 ≈ $0.45 = 45.1c a km" (amber), framed green, hand tag "cost ÷ distance". On "week" row "5408 ÷ 52 = $104 a week" (framed green). On "asked" a red slip "12 000 ÷ 5408 ≈ 2.2" writes and is crossed (caption "that's km per dollar").

### 4. the model in a spreadsheet
> Now build it as a model, a sheet where you change an input and every answer updates. Put each input in its own cell: distance in B one, fuel use in B two, the petrol price in B three. The fuel cost in B four is a formula. Equals B one times B two, divided by a hundred, times B **three**. The yearly costs go in B five to B nine. Then B ten is equals sum of B four to B nine, five thousand four hundred and **eight**. B eleven is equals B ten divided by B one, the cost per kilometre, and B twelve is equals B ten divided by fifty-two, the cost per **week**. Don't type five four oh eight into B ten. A typed number never updates, so the moment the petrol price changes, it's quietly **wrong**. And watch the range. A grand total that's equals sum of B four to B ten counts B ten's total again, so it doubles to ten thousand eight hundred and **sixteen**. Use B four to B nine, or just equals B **ten**.

Visual: stage change: the `SpreadsheetGrid` (1,400 × 640 px), unbranded, grey chip "e06: inputs in cells; e12: rates in their own cells". Column A labels (36 px): "Distance (km)", "Fuel use (L/100 km)", "Petrol ($/L)", "Fuel cost", "Registration", "Green slip", "Insurance", "Servicing", "Tyres", "Yearly cost", "Cost per km", "Cost per week". On "its own cell" B1 "12000", B2 "6.5", B3 "2.25" (blue), hand tag "inputs in their own cells". On "three" B4 active, bar "=B1*B2/100*B3", outlines on B1, B2, B3; B4 "1755" (teal). On "B five to B nine" B5 to B9 fill "385", "780", "1640", "548", "300" (blue, grey "example" chip). On "eight" B10 active, bar "=SUM(B4:B9)", the range outlined; B10 "5408" (teal). On "week" B11 "=B10/B1" → "0.4507", B12 "=B10/52" → "104" (teal), hand tag "every total a formula". On "wrong" a ghost B10 "5408" typed in grey stays put while B3 flickers to "2.50" and B4 changes; the ghost gets a red outline, caption "a typed total goes stale". On "A grand total that's equals sum of B four to B ten" a new row writes under B12 (Revision 3): A13 "Grand total", B13 active, bar "=SUM(B4:B10)", the range B4:B10 outlined with B10 shaded red (hand tag "B10 is already the total"). On "sixteen" B13 shows "10 816" in red and the row is crossed (caption "every cost counted twice"). On "or just equals B ten" two green fixes write beside the row, "=SUM(B4:B9)" and "=B10", and B13 changes to "5408" (teal). The row B13 then clears, so B13 is empty in scene 6.

### 5. what if you drive more?
> Here's what a model is for. What if you drive more? Slide the distance up to eighteen thousand kilometres. The fuel goes up, so the yearly cost goes up, to sixty-two hundred and eighty-five dollars **fifty**. But the cost per kilometre goes down, to about thirty-five **cents**. Only the fuel grows with distance. Registration, insurance and the rest stay the same, so they're spread over more kilometres. Drive less, and each kilometre costs **more**. So a cost per kilometre only means something next to the distance it **assumes**.

Visual: stage change (simulation 2): the grid shrinks to the left (1,000 px); a slider appears under B1. Beside the grid, a `StudioPlot` (720 × 520 px): distance 8,000 to 20,000 km across, cost per km 30c to 65c up. On "eighteen thousand" the slider moves to 18 000; B4 "2632.50", B10 "6285.50" (teal) update live; on "fifty" B10 rings. On "cents" B11 "0.3492", the plot's point slides down to (18 000, 34.9c), hand tag "only fuel grows". On "spread over" the slider sweeps 8 000 → 20 000 and the point traces a falling, flattening curve (readouts "60.3c" at 8 000, "32.9c" at 20 000), hand tag "spread thinner". On "more" the slider returns to 12 000 (45.1c). On "assumes" a grey chip "cost per km: say the distance".

### 6. buying plus running
> To see the whole cost of owning the car, buying, running and maintaining it, add the purchase too. Put the drive-away cost, sixteen thousand six hundred and forty-seven, in B fourteen. Then the cost of owning the car for five years is B fourteen plus five times B ten. That's forty-three thousand six hundred and eighty-seven **dollars**. Over sixty thousand kilometres, about seventy-three cents a **kilometre**, far more than the windscreen price suggests.

Visual: the grid returns full size; B14 "16647" (blue, label "Drive-away cost"), grey chip "m05". On "five times B ten" B15 active, bar "=B14+5*B10", label "5-year cost"; on "dollars" B15 "43687" (teal), framed green. A small bar beside the grid: the purchase block (blue) plus five yearly blocks (teal), total "$43 687". On "kilometre" B16 "=B15/(5*B1)" → "0.7281", hand tag "the real cost", and a small grey chip "windscreen: $14 990".

### 7. two cars over five years
> That's how to compare two cars fairly. A cheaper car that uses more fuel can end up costing more. Say car A costs eighteen thousand and uses nine litres per hundred kilometres, and car B costs twenty-two thousand but uses only six. Both are driven fifteen thousand kilometres a year. Watch the **bars**. Car A starts four thousand dollars ahead. But car B saves fuel every single year, and by year five it has caught **up**. So never compare cars on price **alone**.

Visual: stage change (simulation 3): two bars at the same scale, labelled "car A: $18 000, 9 L/100 km" and "car B: $22 000, 6 L/100 km" (blue purchase blocks). On "fifteen thousand kilometres" a grey chip "15 000 km a year" sits above both bars and stays to the end of the scene. On "bars" fuel blocks (teal, unlabelled values) add year by year with a year counter "1 … 5"; car A's blocks are taller. On "up" car B's bar finishes below car A's, a violet bracket marks the gap (no value shown), hand tag "fuel catches up". On "alone" grey chip "price + years of running".

### 8. memory aid
> Here's the summary. Put every input in its own cell, and make every total a formula. Fuel is kilometres times litres per hundred, divided by a hundred, times the price. And cost per kilometre is the yearly cost divided by the kilometres **driven**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the twelve-row sheet small, B4 and B10 outlined. Main line, hand font 56 px: "Inputs in cells; cost per km = yearly cost ÷ km." On "driven" the key line, 40 px: "Fuel = km × L/100 km ÷ 100 × $ a litre. Every total is a formula." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Mia drives twenty thousand kilometres a year, in a car that uses seven point five litres per hundred kilometres. Petrol is two dollars twenty-five a litre. Her other yearly costs are servicing eight twenty, tyres five hundred, registration three eighty, and insurance nine fifty. Find her yearly fuel cost. Then find her total yearly running cost, and the cost per kilometre, in cents, to one decimal place. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Mia drives 20 000 km a year in a car that uses 7.5 L/100 km. Petrol costs $2.25 a litre. Her other yearly costs are servicing $820, tyres $500, registration $380 and insurance $950. (a) Find her yearly fuel cost. (b) Find her total yearly running cost and the cost per kilometre, in cents, correct to one decimal place." Picture slot: a coded fuel gauge. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Twenty thousand times seven point five, divided by a hundred, is fifteen hundred **litres**, so the fuel costs thirty-three seventy-**five**. Her other costs add to twenty-six fifty, so the total is six thousand and twenty-five **dollars**. Divided by twenty thousand, that's thirty point one cents a **kilometre**. Dividing twenty thousand by the cost is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "litres" "20 000 × 7.5 ÷ 100 = 1500 L"; on "five" "1500 × 2.25 = $3375" on its own row (Revision 2 split); on "dollars" "3375 + 2650 = $6025" (framed green); on "kilometre" "6025 ÷ 20 000 ≈ $0.301 = 30.1c" (framed green). On "slip" a red slip "20 000 ÷ 6025 ≈ 3.3" writes and is crossed (caption "cost ÷ distance"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Car A costs eighteen thousand dollars and uses nine litres per hundred kilometres. Car B costs twenty-two thousand and uses six. Each is driven ten thousand kilometres a year, with petrol at two dollars twenty-five a litre. Find the cost of buying and fuelling each car for five years. Which is cheaper over five years, and by how much? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Car A costs $18 000 and uses 9 L/100 km. Car B costs $22 000 and uses 6 L/100 km. Each is driven 10 000 km a year, with petrol at $2.25 a litre. (a) Find the cost of buying and fuelling each car for 5 years. (b) Which is cheaper over 5 years, and by how much?" Picture slot: two blank blue purchase blocks at the same scale, "A $18 000" and "B $22 000", with no fuel blocks, no bars from scene 7 and no totals (Revision 2; nothing answer-bearing). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Car A's fuel is two thousand and twenty-five a **year**, so with the purchase, five years cost twenty-eight thousand one hundred and twenty-**five**. Car B's fuel is thirteen fifty a **year**, so twenty-eight thousand seven hundred and **fifty**. Car A is cheaper by six hundred and twenty-five **dollars**. At this **distance**, B saves only six seventy-five a year. Picking car B from the video is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px, one result per cue (Revision 2): on "year" (first) "A: 900 L × 2.25 = $2025 a year"; on "five" "A: 18 000 + 5 × 2025 = $28 125"; on "year" (second) "B: 600 L × 2.25 = $1350 a year"; on "fifty" "B: 22 000 + 5 × 1350 = $28 750"; on "dollars" "A is cheaper by $625" (framed green); on "distance" hand tag "10 000 km: B saves $675 a year; 5 × 675 = $3375 < $4000". On "slip" a red slip "B, because it was cheaper in the video" writes and is crossed (caption "the distance changed"). Hold about 1 s.

### 13. handoff and key notes (quiet, 45 seconds)
> So the hatchback costs about a hundred and four dollars a week to run. But it's not the only thing that sends you bills. The house does too, for electricity, water and gas. How do you read those bills, and check them? That's **next**. Here are the key notes. Pause the video if you need more time to copy them.

Visual (handoff frame first, about 12 s, as under Decisions, "Handoff"): board clear; the hatchback slides out left with a small tag "$104 a week"; on "The house does too" the electricity meter `ms11-electricity-meter-v1.png` (about 700 px tall) slides in at the centre, its display showing "19264 kWh" (teal); on "next" chips "the house costs money too", "Next: household bills" and "?". Then the key notes (fade):

Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.

- Fuel = km × (L/100 km) ÷ 100 × $ a litre.
- Yearly cost = fuel + rego + green slip + insurance + servicing + tyres.
- Cost per km = yearly cost ÷ km; per week = ÷ 52.
- Model: inputs in their own cells; totals are formulas (=SUM(B4:B9)).
- Compare cars on price + years of running, not price alone.

Memory aid (framed card, right side, as in scene 8): *Inputs in cells; cost per km = yearly cost ÷ km.* Key: *Fuel = km × L/100 km ÷ 100 × $ a litre. Every total is a formula.* The handoff and notes scene is 1,710 frames (57 s: about 12 s of handoff, 45 s of notes).

Visual (end of the hold, silent): cross-fade (1 s) back to the handoff frame exactly. This is the final frame and m07's opening frame.

## Teaching checks

- **Does it explain causes?** Why ÷ 100: the rate is per 100 km (2). Why per km and per week: to picture and compare the yearly cost (3). Why a model: changing an input updates every answer, while a typed total goes stale (4). Why cost per km falls with distance: only fuel grows, so the fixed costs are spread thinner (5). Why a cheaper car can cost more: fuel savings add up every year (7).
- **Misconceptions addressed:** ÷ 100 forgotten (2, crossed); distance ÷ cost (3, crossed; A1 crossed); typed totals (4); a grand total whose SUM range includes the subtotal (4, crossed; Revision 3); price alone (7; A2 crossed).
- **Visual standard, item by item:** 1 the hatchback from the first frame; 2 a new stage every 40 to 60 s; 3 the filling fuel tank, the distance slider driving the sheet and a falling curve, two cars' bars crossing; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 cost per km falling while the total rises.
- **One idea at a time:** fuel (2), the year's costs (3), the model (4), what-if (5), buying plus running (6), two cars (7).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 26 s and 28 s.
- **Avoided double teaching:** spreadsheet basics (e06, e12, f08) and the car's buying costs (m05) recalled in chips; depreciation named only.
- **Syllabus coverage:** `ci9d6326d6` (1 to 3, 5, 7, A1, A2; key notes 1 to 3, 5), `ci61920f78` (4 to 6; key note 4).
- **Out of scope by design:** depreciation; loans.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 20 000 × 7.5 ÷ 100 = 1500 L; 1500 × 2.25 = $3375. (b) 3375 + 820 + 500 + 380 + 950 = $6025; 6025 ÷ 20 000 = $0.30125 ≈ 30.1c a km. Classic mistake (crossed): "20 000 ÷ 6025 ≈ 3.3".

**Attempt 2 (scene 11; pack question 2, 3 marks suggested).** As on the card.
Model answer (Revision 2, 10 000 km a year): (a) A: 10 000 × 9 ÷ 100 = 900 L; 900 × 2.25 = $2025 a year; 18 000 + 5 × 2025 = $28 125. B: 10 000 × 6 ÷ 100 = 600 L; 600 × 2.25 = $1350 a year; 22 000 + 5 × 1350 = $28 750. (b) Car A, by 28 750 − 28 125 = $625 (B's fuel saving, $675 a year, adds to only $3375 over 5 years, less than the $4000 price gap). Classic mistake (crossed): "B, because it was cheaper in the video".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Fuel | 780 L; 1755; slip 78 000 L | 2 |
| Year | 5408; 45.1c; 104; slip 2.2 | 3 |
| Sheet | B4 1755; B10 5408; B11 0.4507; B12 104; slip B13 =SUM(B4:B10) 10 816, fixed to 5408 | 4 |
| What-if | 18 000 km: 2632.50, 6285.50, 34.9c; 8000 km 60.3c; 20 000 km 32.9c | 5 |
| Five years | 43 687; 72.8c | 6 |
| Two cars (15 000 km) | no values shown; B ends lower (33 187.50 against 32 125, author check only) | 7 |
| A1 | 1500 L; 3375; 2650; 6025; 30.1c | 9, 10 |
| A2 (10 000 km) | 900 L, 2025, 28 125; 600 L, 1350, 28 750; A by 625; saving 675 a year, 3375 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (23 Nov 2026, scratchpad `s11m/verify.py`, `python -I`; 0 failures); Codex to re-check, and to type the sheet into a spreadsheet program and confirm every cell.

- 12 000 × 6.5 ÷ 100 = 780; 780 × 2.25 = 1755; 12 000 × 6.5 = 78 000.
- 1755 + 385 + 780 + 1640 + 548 + 300 = 5408; 5408 ÷ 12 000 = 0.45067; 5408 ÷ 52 = 104; 12 000 ÷ 5408 = 2.219; B13 =SUM(B4:B10) = 5408 + 5408 = 10 816 (Revision 3: B13 is outside its range, so no circular reference).
- 18 000 × 6.5 ÷ 100 = 1170; 1170 × 2.25 = 2632.50; 2632.50 + 3653 = 6285.50; 6285.50 ÷ 18 000 = 0.34919. 8000: 520 L, 1170, 4823, 0.6029. 20 000: 1300 L, 2925, 6578, 0.3289.
- 16 647 + 5 × 5408 = 43 687; 43 687 ÷ 60 000 = 0.72812.
- Scene 7 (15 000 km, not shown as values): A: 1350 L, 3037.50, 15 187.50, 33 187.50; B: 900 L, 2025, 10 125, 32 125; 33 187.50 − 32 125 = 1062.50.
- A2 (10 000 km, Revision 2; rechecked 24 Nov 2026 with scratchpad `s11ma/verify.py`, `python -I`): A: 10 000 × 9 ÷ 100 = 900 L; 900 × 2.25 = 2025; 5 × 2025 = 10 125; 18 000 + 10 125 = 28 125. B: 10 000 × 6 ÷ 100 = 600 L; 600 × 2.25 = 1350; 5 × 1350 = 6750; 22 000 + 6750 = 28 750. 28 750 − 28 125 = 625. 2025 − 1350 = 675; 5 × 675 = 3375 < 4000. Break-even 4000 ÷ 5 ÷ (0.03 × 2.25) ≈ 11 852 km a year.
- Mia: 1500 L; 3375; 2650; 6025; 0.30125.

## Memory aid check

- **"Inputs in cells; cost per km = yearly cost ÷ km."** with key line **"Fuel = km × L/100 km ÷ 100 × $ a litre. Every total is a formula."** Original (the site's two model rules and its cost-per-km formula, joined). Meaning, as said in scene 8. Assumptions checked: the fuel rate is in L/100 km (said); the yearly costs are fixed for the year (5 shows only fuel changes with distance); "cost" means money paid out, not the fall in value (2). It helps a new case: an electric car's model swaps B2 and B3 for kWh per 100 km and the price per kWh, and nothing else changes.
- **Considered, not used:** "Per 100 means ÷ 100" (true, but only half the idea).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **6,242 characters**, 13 scene headings. Scene 13 joins the handoff and the notes line (as m05). Feedback speech about 26.2 s and 28.7 s.

At 13.3 characters per second the speech is about 469 s. Holds and settling: two 10 s countdowns (20 s); short holds 5 s; settling for the tank (2), the sheet (4), the slider (5) and the bars (7), about 30 s; the notes hold adds about 39 s beyond its line. Total **about 562 s**, 8 s under the 570 s cap: tight, with the reserve trims below named.

Revision 2 (24 Nov 2026, same script): **6,228 characters** (scene 3: 724; scene 7: 454; scene 12: 385), speech about 468 s, total **about 561 s**, 9 s under the cap. Feedback about 26.2 s and 28.9 s.

Reserve trims if the voiced take runs long (Revision 2: scene 7's old trim is now used): scene 4's last three sentences, from "And watch the range" (Revision 3 wording; the crossed B13 row shows the slip).

## Scene list and build ids

Lesson key `m-s11m06` (route math-s11-m06). Explainer folder `src/explainer/lessons/math-s11-m06`; build inputs in `docs/production/claude-pm/lessons/math-s11-m06/` (at voicing).

In order (13 scene headings): hook-every-year, fuel, yearly-costs, spreadsheet-model, what-if-distance, buying-plus-running, two-cars, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The hatchback and cost cards |
| 35 to 90 s | 2 | The fuel tank |
| 90 to 145 s | 3 | The yearly stack |
| 145 to 215 s | 4 | The sheet |
| 215 to 260 s | 5 | The distance slider and plot |
| 260 to 290 s | 6 | Buying plus running |
| 290 to 320 s | 7 | Two cars' bars |
| 320 to 340 s | 8 | Framed memory card |
| 340 to 460 s | 9 to 12 | Question cards and countdowns, then feedback |
| 460 to 520 s | 13 | Handoff frame, key notes, then a silent return to the handoff frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and handoff-key-notes (`hold` after its handoff beat). Transitions: m05's last frame continues into 1; 1 to 2 camera continue; 2 to 3 stage change; 3 to 4 continue (the stack's layers become rows); 4 to 5 continue (the grid shrinks, the plot joins); 5 to 6 continue; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; notes fade in after the handoff beat, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key notes 45 s inside scene 13. Review evidence paths: `learning_review` = `checks/m-s11-m06-learning-review.md`, `science_check` = `checks/m-s11-m06-maths-check.md`.

## Assets

Inspected before choosing (23 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-used-hatchback-v1.png`. The electricity meter plate is new (briefed in `math-s11-m07.md`; painted one video early, ruling 17).

Need: `ms11-electricity-meter-v1.png` (from m07's brief). Reused: the hatchback.

Coded: the cost cards, fuel tank, stacked bar, `SpreadsheetGrid` with slider, the plot, five-year bars, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `SpreadsheetGrid` (ruling 90, with e06 and e12 props), `StudioPlot`, stacked total bar (m04), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row m06):
1. **`SpreadsheetGrid` input slider**: a slider bound to an input cell; dependent cells recompute live and can drive a `StudioPlot` point. Check: B1 = 18 000 gives B10 = 6285.50 and B11 = 0.3492.
2. **Stale-cell demo**: a typed value shown as a grey ghost that does not update while its neighbours change, then outlined red. Check: B10 ghost "5408" stays while B3 = 2.50 changes B4.
3. **Fuel tank**: a tank that fills in steps tied to a counter. Check: 12 steps of 65 L to 780 L.

## Codex asset brief

No plate briefed here; the meter is briefed in `math-s11-m07.md` and must be painted before this video's build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and type the sheet into a spreadsheet program to confirm every cell.
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm the petrol price against ruling 47's source; confirm the green slip is renewed with registration each year in NSW; confirm every other price is labelled an example. Confirm the "prices change" sentence is said once.
4. Confirm every formula on screen is valid as typed and the spoken forms match the screen.
5. Confirm both attempts carry every demand and show no answer (scene 7 shows no five-year values; A2's picture slot shows only the two purchase blocks; A2's 10 000 km reverses scene 7's 15 000 km result).
6. Confirm scene 1 opens on m05's final frame and scene 13's handoff frame matches m07's boundary.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Running a Car: Yearly Costs in a Spreadsheet | Year 11 Maths Standard

(Title length: 69 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/managing-money/lesson05.sa.html

Buying the car is only the start. Work out a year of fuel from litres per 100 km, add registration, the green slip, insurance, servicing and tyres, and turn the total into a cost per kilometre and per week. Then build it as a spreadsheet model, see why driving further lowers the cost per kilometre, add the purchase for a five-year cost, and compare two cars fairly. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Managing money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Examine the ongoing costs of a vehicle"
"Use a spreadsheet to model the costs of purchasing, running and maintaining a vehicle"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

Builds on: Buying a Car: Stamp Duty, Rego and Insurance. Next: Household Bills: Electricity, Water and Gas.

#Year11Maths #MathsStandard #Spreadsheets #HSCScience

## Open decisions

- **1. Servicing $548.** Chosen so the total is $104 a week for m08; a rounder $550 would make $104.04. Confirm.

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-m06-learning-review.md` (1 blocker, 1 should fix, 3 notes). Resolution record: `../checks/m-s11-m-a-learning-review-resolution.md`.

- **B1 (A2 answered before it is asked): resolved by root's ruling 1.** A2 now drives each car 10 000 km a year. Car A: 900 L, $2025 a year, 18 000 + 5 × 2025 = $28 125. Car B: 600 L, $1350 a year, 22 000 + 5 × 1350 = $28 750. Car A is cheaper by $625 (B saves only $675 a year, $3375 over five years, less than the $4000 price gap). Scene 7 now states its distance ("Both are driven fifteen thousand kilometres a year", grey chip "15 000 km a year"), so its result (B ends lower) is tied to that distance, and A2's lower distance reverses it; this tests scene 5's point that the comparison depends on the distance. Scene 7's sentence "You'll find the five-year totals in the second question" is removed. A2's picture slot is two blank purchase blocks ("A $18 000", "B $22 000") with no fuel blocks or totals, so the countdown picture does not show the answer. Feedback 2 is rewritten with one result per cue, the reason ("At this distance, B saves only six seventy-five a year") and a new crossed slip "B, because it was cheaper in the video" (caption "the distance changed"). Model answer, Decisions, author note (f), Numbers used and Numbers to verify updated; values rechecked with scratchpad `s11ma/verify.py` (`python -I`, 0 failures).
- **SF1 (spoken "fifty-four hundred"): applied.** Scene 3 now says "fifty-four oh eight", matching "12 000 ÷ 5408 ≈ 2.2".
- **N1 (12-row sheet reading load): preview check.** Active cell and formula bar at 44 px dominate; other rows dim. Confirm in voiced preview.
- **N2 (petrol "example price" chip): applied** in scene 2's givens.
- **N3 (Mia's list):** the card keeps "Her other yearly costs are" exactly; no change.
- **Feedback rows (root ruling 7):** feedback 1's fuel row is split ("1500 L" on the new cue "litres", "$3375" on "five"); feedback 2 is one result per cue.
- Narration 6,228 characters (was 6,242), about 561 s with holds. Scene 7's old reserve trim is used; scene 4's remains.

## Review notes

- Revision 1. Next: student learning review (trace from m05; check that "÷ 100" is shown before it is said, that the stack's layers become the sheet's rows, that the stale-total demonstration makes "every total a formula" felt, that the slider shows the falling cost per km before the reason, and that scene 7 leaves the A2 numbers to the student), then the Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-m06-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 6,228 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 6,216 (Codex's value). After this revision's narration changes the sum is **6,325 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief271/source-inventory.json`). At 13.3 characters per second the speech is about 476 s; total about 568 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Blocker (circular reference in scene 4): fixed.** Root ruling: B10 keeps the valid subtotal =SUM(B4:B9) = 5408. The double-counting mistake moves to a later cell: a grand total in B13 typed as =SUM(B4:B10) adds B10's 5408 to the six costs again, giving 10 816. The fix is =SUM(B4:B9) or =B10. B13 lies outside its own range, so there is no circular reference. Scene 4 narration: "And don't sum B four to B ten. That counts the total inside itself, and doubles it." becomes "And watch the range. A grand total that's equals sum of B four to B ten counts B ten's total again, so it doubles to ten thousand eight hundred and sixteen. Use B four to B nine, or just equals B ten." To stay under the 570 s cap, scene 4's opening "Now build it as a model. A model is a sheet where you change an input and every answer updates." becomes "Now build it as a model, a sheet where you change an input and every answer updates." Scene 4 visual: on "A grand total that's equals sum of B four to B ten" row B13 "Grand total" writes with bar "=SUM(B4:B10)" and B10 shaded red (hand tag "B10 is already the total"); on "sixteen" B13 shows "10 816" in red and is crossed (caption "every cost counted twice"); on "or just equals B ten" green fixes "=SUM(B4:B9)" and "=B10" write and B13 shows "5408"; the row then clears, so B13 is empty in scene 6. Author note (d), Decisions (Mistake scene), Teaching checks, Numbers used, Numbers to verify and the reserve-trim note updated. The key note "Model: inputs in their own cells; totals are formulas (=SUM(B4:B9))." stays (68 characters). Checked in Python: 1755 + 385 + 780 + 1640 + 548 + 300 = 5408; 5408 + 5408 = 10 816. Official facts carried from m05: the drive-away cost is now $16 647 (transfer $42). Scene 1 says "Sixteen thousand six hundred and forty-seven dollars"; scene 6 says "sixteen thousand six hundred and forty-seven" for B14 and "forty-three thousand six hundred and eighty-seven dollars" for B15; B14 "16647", B15 "43687", the bar total "$43 687", the opening stamp "drive-away $16 647", the Boundary line, author note (e), Numbers used and Numbers to verify updated. Recomputed: 16 647 + 5 × 5408 = 43 687; 43 687 ÷ 60 000 = 0.72812, still "0.7281" and "about seventy-three cents".
- **Narration changed: yes.** Scene characters (Revision 2 to Revision 3): scene 1: 463 to 464; scene 4: 773 to 879; scene 6: 448 to 450. Every changed sentence is plain and conversational, with numbers spoken as shown on screen.
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
