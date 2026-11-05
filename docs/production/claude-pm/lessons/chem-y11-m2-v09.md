# Year 11 Chemistry M2 V09: A mass-balance investigation. How can we measure mass changes while keeping track of escaping gas? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,174 characters, 15 scenes, about 555 s (9.2 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: ninth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 42, between `chem-y11-m2-v08` and `chem-y11-ws-v07`. A practical video: the investigation is planned, carried out (illustrative data, tagged) and judged against conservation of mass. Templates: `chem-y11-m2-v08.md` (same series), `chem-m8-p02.md` (practical conventions), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v09` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Plan a reaction mass-balance investigation, define the system, record masses and gas losses, and compare evidence with conservation"; practical: "Quantitative masses of solids/liquids in reactions"; next handoff: "How do we communicate a chemistry conclusion that evidence supports?"). Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches the route), sections `l18-errortype-title`, `l18-errors-title`; `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson11.sa.html` (SHA256 `1c1afd11799fc27c88f06f6c643be9e8cc0f475b4a4f3a4a9c62c620a3ba8d83`, recomputed, matches), section `l11-jobs-title`. Neither page contains a mass-balance practical. Used: lesson 18's answer structure for an error (name the source, its direction, its effect, a fix), "systematic: always shifts results in the same direction" and the gravimetric "dry to constant mass" idea (here: record until constant mass); lesson 11's practical card order (aim, method steps, reading the result). Not used: titration scenarios (Module 2 lesson 10 and Year 12), the continuous variation method itself (m2-v06 owns it). The practical method is the standard school marble chips and hydrochloric acid mass-loss experiment (author note b).

Owner rules applied: as `chem-y11-m2-v08.md` (one learner question; no people, hands or faces: apparatus alone, moved by code; real objects as painted plates; formulae, tables, graphs and amounts coded; 3 s predictions; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C2-IQ1-01`: "conduct practical investigations to observe and measure the quantitative relationships of chemical reactions, including but not limited to:"
  - "masses of solids and/or liquids in chemical reactions"
- `C2-IQ1-02`: "relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:"
  - "solving problems regarding mass changes in chemical reactions (ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 39)

**Boundary:** opens on m2-v08's final frame (the plugged flask of marble chips in excess acid on the balance, 150.62 g, "the gas escapes: how much?"). Teaches: a falling reading is gas leaving, not mass destroyed (m2-v01 recalled in one sentence); defining the system for this investigation (flask, acid, chips, cotton wool plug) and why the plug is there; a prediction from stoichiometry (chips limiting, 0.88 g CO₂) as the hypothesis; the method (separate weighings summed for the starting total, because gas leaves before a first reading; mass recorded every 30 s until constant); a mass-time table and graph; constant mass with no chips left as the evidence that the limiting reagent is used up; three runs and their mean; the shortfall and its causes (CO₂ dissolved in the solution and filling the flask's air space), named as systematic with a direction; the opposite error (spray and water vapour) and matched improvements; the closed-bottle check (m2-v01); the judgement against conservation. Not taught: the written conclusion's structure and language (ws-v07, the handoff); uncertainty arithmetic (ws-v05, recalled only as "the runs agree"); gas volumes (m2-v04 owns them).

## Decisions

- **Learner question (route wording kept).** "How can we measure mass changes while keeping track of escaping gas?" The answer, in order: weigh the whole system and let the balance measure the gas that leaves (1, 2); predict the gas from the limiting reagent (3); measure the starting total and the constant final mass (4, 5); compare and explain any gap by asking how gas or liquid crossed the boundary (6 to 8); judge against conservation (9).
- **Opening frame (equals `chem-y11-m2-v08.md`'s final frame, same designer).** Balance with `y11c-flask-chips-acid-plug-fizz-v1.png` on its pan, readout "150.62 g", grey wisp "CO₂(g)"; equation strip "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)"; teal "2.00 g CaCO₃: limiting" and amber "HCl: excess"; amber "the gas escapes: how much?"; bridge icon small at the top right; "Next" chip, which fades as scene 1 starts.
- **The investigation (illustrative data, tagged "illustrative data" on every reading).** 2.00 g of marble chips (taken as calcium carbonate) in 50 mL of dilute hydrochloric acid (in excess; the amount is not quantified because concentration comes in m2-v10), 250 mL conical flask, loose cotton wool plug, 0.01 g balance (the course balance). Flask + acid + plug 148.62 g; chips 2.00 g; starting total 150.62 g. Run 1 constant at 149.80 g (loss 0.82 g); runs 2 and 3 lose 0.83 g and 0.81 g; mean 0.82 g. Prediction 0.879 → 0.88 g. Shortfall 0.06 g, about 7% (6.8%) of the prediction.
- **Why the shortfall is plausible (author note c).** Carbon dioxide is fairly soluble in water and the final air space is filled with carbon dioxide, which is denser than air; both keep carbon dioxide mass inside the system. Estimates for a 250 mL flask: the air space alone can hold back about 0.1 g net; dissolved carbon dioxide up to about 0.07 g. A 0.06 g shortfall is therefore realistic, and it falls slowly as the gas diffuses out. Science check to confirm the wording "denser than air, so that space now weighs a little more".
- **Starting total by separate weighings (scene 4).** Gas leaves as soon as the chips land, so reading the balance after adding them would understate the start. Summing the two separate weighings avoids that. This is the practical's key design point and a cause students can state.
- **Constant mass (scene 4, 5).** Three equal readings in a row; with no chips left, it also confirms the chips were the limiting reagent (m2-v08's idea in a practical). If chips remained, the acid would have limited and the prediction from 2.00 g would be wrong (attempt 2 tests this).
- **Error language (scenes 7, 8; ws-v05 recalled).** Both effects named as systematic with direction: gas staying inside makes the loss too small; spray and water vapour escaping make it too big. "Human error" is not used. Repeats are not offered as a fix for a systematic error.
- **Closed check (scene 8).** m2-v01's capped bottle is recalled in one sentence with its plate, not re-taught (root decision 3 of Module 2: the science check confirms the small-quantity capped method; if it fails, this sentence is cut and the plug improvements stand alone).
- **Judgement (scene 9).** "Evidence supporting the law"; "supports", not "proves", which ws-v07 explains. The judgement is spoken plainly here; ws-v07 teaches how to write it.
- **Memory aid:** "Draw the boundary, then follow the gas." (see "Memory aid check").
- **Safety (author note e).** Eye protection; dilute acid only; small quantities; the plug stops spray; teacher-approved method. Shown as a small chip in scene 4, not narrated in detail; the science check confirms against current NSW school guidance.
- **Attempts (original, HSC style).** A1: 2.10 g sodium hydrogen carbonate with excess vinegar in an open beaker, no plug, fizzing strongly; mass falls 1.18 g. (a) Expected CO₂: 0.0250 mol → 1.10 g. (b) The loss is bigger: spray and water vapour carried out with the bubbles; improvement: a conical flask with a cotton wool plug. Crossed: "the extra mass was destroyed". A2: 5.00 g chips with acid in a plugged flask; total falls 156.40 → 155.52 g (constant); chips remain. (a) CO₂ lost 0.88 g. (b) Chips remain, so the acid was limiting. (c) Predicting from 5.00 g gives 2.20 g, too much, because only about 2.00 g of chips reacted. Crossed: "2.20 g".
- **Mistake scene:** none separate. "The falling reading means mass is destroyed" (1); "read the start after adding the chips" (4); "repeat to fix the shortfall" (7, implied by "same way in every run"); "spray doesn't matter" (8, A1); "predict from the chips' mass when they didn't all react" (A2).
- **Handoff (route next: `chem-y11-ws-v07`, "How do we communicate a chemistry conclusion that evidence supports?").** Scene 14 asks how to write the conclusion so a reader trusts it. Final frame: the results table and graph with a blank conclusion card.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted; check against the lesson 18 notes already logged from ws-v01 and ws-v05 to avoid duplicates):**
  1. Lesson 18 drill 1: "Recorded mass too high → n(standard) too high → c(standard) too high → titre too small → c(analyte) calculated too low." If the balance reads high, the real standard is weaker than believed; whether the standard is in the burette (titre larger) or the flask, the calculated c(analyte) comes out too high, not too low. Suggest: "Recorded mass too high → the believed n(standard) is too high → c(analyte) calculated too high."
  2. Lesson 18 Q4 model answer: "far smaller than the error caused by an undiluted titrant". The error comes from a diluted titrant (a burette not rinsed). Suggest "a diluted titrant".
  3. Lesson 18 equipment table: "Volumetric flask ±0.05 mL". Tolerance depends on size; a 250 mL class A flask is about ±0.15 mL (±0.05 mL fits a small flask). Suggest "about ±0.1 to 0.2 mL for a 250 mL flask" or "depends on size".
  - Checked and correct for this video's use: the random and systematic definitions; "incomplete drying: mass too high"; lesson 11's practical card order.
- **Cause chain taught, in order:** (1) gas crossing the boundary changes the reading (1, 2); (2) the plug lets gas out and keeps liquid in, so the loss is the gas (2); (3) the limiting reagent fixes the gas made (3); (4) gas leaves at once, so the start must come from separate weighings (4); (5) constant mass means the limiting reagent is used up (5); (6) gas kept inside makes the loss smaller, liquid carried out makes it bigger (7, 8); (7) a loss that matches the predicted gas supports conservation (9).
- **Entry knowledge:** m2-v01 (system, boundary, open and closed systems, conservation); m2-v07 and m2-v08 (mass-to-mass, limiting reagent, excess); ws-v02 to ws-v05 (planning, constant mass, tables and graphs, systematic error with direction).
- **Learner-visible vocabulary (plain meaning at first use):** system (recalled: everything we weigh, 2); constant mass (three readings in a row the same, 4); mean (the average of the runs, 6). No new terms beyond these.
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **balance readout** (coded display over the plate; ticks down in steps on the real timeline, compressed); **system boundary** (dashed teal outline round flask, acid, chips and plug on the pan; grey CO₂ wisps cross it outward; small blue droplets bounce off the plug); **plan board** (four rows: question, prediction, method, record; filled in turn); **results table** (columns "time (s)", "mass (g)", "mass lost (g)"; rows write as readings tick); **mass-time graph** (`LineGraph`: points plot from the table, a smooth curve falling and levelling; a dashed horizontal line at 149.80 g, "constant mass"); **comparison bars** (predicted 0.88 g in gold dashed outline, measured mean 0.82 g in teal, the gap in amber); **inside-the-flask view** (scene 7: the flask enlarges as a coded cross-section: dissolved CO₂ molecules in the liquid, CO₂ molecules filling the air space above, a few escaping); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** masses amber; predicted values gold dashed; measured values teal; the system boundary dashed teal; CO₂ grey; liquid droplets pale blue; givens navy; earlier rows dimmed; crossed items red strike; every measured reading carries the grey "illustrative data" tag.
- **Board layout (constant):** heading top left; balance and flask at the left; plan board, table, graph or comparison bars at the right.

Author notes (not learner copy):
(a) Prediction: CaCO₃ = 40.08 + 12.01 + 3(16.00) = 100.09; 2.00 ÷ 100.09 = 0.019982 mol (said "zero point zero two zero zero"); CO₂ = 12.01 + 2(16.00) = 44.01; 0.019982 × 44.01 = 0.8794 g → 0.88 g. HCl needed 0.039964 mol, so any acid above about 0.04 mol is in excess (50 mL of 2 mol L⁻¹ acid is 0.10 mol; not stated, because concentration is m2-v10's).
(b) Method sources: the standard school mass-loss practical (marble chips in hydrochloric acid in a conical flask with a cotton wool plug on a top-pan balance, mass recorded at intervals), as in common Year 10 and 11 rate and mass-change practicals; the RSC "Rate of reaction of marble chips and acid" practical uses the same setup. Codex to confirm a stable reference.
(c) Shortfall estimates: air space about 200 mL in a 250 mL flask; at 25 °C and 100 kPa, CO₂ 44.01 ÷ 24.79 = 1.775 g L⁻¹, air about 28.96 ÷ 24.79 = 1.168 g L⁻¹; replacing all the air gives 0.2 × 0.607 = 0.12 g held back. CO₂ solubility about 1.45 g L⁻¹ at 25 °C under 1 atm CO₂: up to about 0.07 g in 50 mL. The illustrative 0.06 g shortfall lies inside these bounds.
(d) Runs: 150.62 − 149.80 = 0.82; 150.62 − 149.79 = 0.83; 150.62 − 149.81 = 0.81; mean 0.82. (0.88 − 0.82) ÷ 0.88 × 100 = 6.8% ("about seven percent"); using the unrounded prediction 0.8794, 6.8%. Readings every 30 s for run 1 (graph): 0 s 150.62 (calculated start); 30 s 150.31; 60 s 150.10; 90 s 149.96; 120 s 149.88; 150 s 149.83; 180 s 149.81; 210 s 149.80; 240 s 149.80; 270 s 149.80.
(e) Safety: dilute hydrochloric acid (irritant at school concentrations), eye protection, small chip mass, plug against spray, waste neutralised and disposed of as the school directs. Science check against current NSW school chemical-safety guidance.
(f) A1: NaHCO₃ = 22.99 + 1.008 + 12.01 + 48.00 = 84.008; 2.10 ÷ 84.008 = 0.024998 mol; CO₂ 0.024998 × 44.01 = 1.1001 g → 1.10 g. Measured 1.18 g (illustrative), 0.08 g more. Equation NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (balanced). Plate `m6-clip-baking-soda-vinegar-fizz-v1.png` (open beaker fizzing over a white powder) fits the card.
(g) A2: 156.40 − 155.52 = 0.88 g CO₂; CaCO₃ reacted 0.88 ÷ 44.01 × 100.09 = 2.0013 g ≈ 2.00 g; chips left about 3.00 g. Prediction from 5.00 g: 5.00 ÷ 100.09 × 44.01 = 2.1985 → 2.20 g.
(h) Pronunciations: "C a C O three plus two H C l makes C a C l two, plus H two O, plus C O two"; "N a H C O three".

Main question: *How can we measure mass changes while keeping track of escaping gas?*
Entry knowledge: m2-v01, m2-v07, m2-v08; ws-v02 to ws-v05.
Stops after: system and plug; prediction from the limiting reagent; separate weighings and constant mass; table and graph; three runs; systematic shortfall and excess explained by gas or liquid crossing the boundary; matched improvements; judgement against conservation. No conclusion-writing (ws-v07).
Handoff: chem-y11-ws-v07, communicating a conclusion that evidence supports.

## Opening frame and final frame

- **Opening frame:** m2-v08's final frame exactly (Decisions).
- **Final frame (ws-v07 opens on it):** at the left, the balance with `y11c-flask-acid-plug-spent-v1.png` (no chips, no bubbles) on its pan and the readout "149.80 g"; at the right, the results summary table "run | mass lost (g)": "1 | 0.82", "2 | 0.83", "3 | 0.81", "mean | 0.82"; beside it a gold dashed chip "predicted CO₂: 0.88 g"; under them the small mass-time graph (levelling at 149.80 g); below, an empty card headed "Conclusion:" with a blinking amber cursor; the chip "Next: How do we communicate a chemistry conclusion that evidence supports?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. the reading falls
> Here's the flask from last time. Two point zero zero grams of marble chips fizz in fifty millilitres of dilute hydrochloric acid, which is in excess. The balance read one hundred and fifty point six two grams, but watch the **reading**. It falls, a little every few seconds. Mass isn't being destroyed. Carbon dioxide is leaving the flask, just like the gas from the copper carbonate early in this module. So can the balance tell us how much gas **left**? Let's plan an investigation that keeps track of it.

Visual: opens on m2-v08's final frame; the "Next" chip fades. On "fifty millilitres" a small grey tag "50 mL dilute HCl (excess)" joins the amber chip. On "reading" the readout begins to tick down "150.62 → 150.31 → 150.10 g" (grey tag "illustrative data"). On "Mass isn't being destroyed" a chip "mass destroyed?" writes and is crossed. On "copper carbonate" m2-v01's crucible thumbnail with "gas out: mass falls" appears small at the top left. On "left" the CO₂ wisp gains a "?" and the heading writes: "Keeping track of escaping gas".

### 2. defining the system
> First, define the system, the part we're weighing. Here it's everything on the balance pan: the flask, the acid, the chips, and a loose plug of cotton **wool** in the neck. The plug matters. Carbon dioxide passes through it and leaves, but tiny droplets of acid sprayed up by the bubbles get caught, so they stay in the **system**. The system is open only to the gas. So any mass the balance loses should be carbon dioxide, and nothing **else**.

Visual: on "everything on the balance pan" the dashed teal boundary draws round flask, acid, chips and plug; labels write one at a time: "flask", "acid", "chips". On "wool" the plug glows and gains its label "cotton wool plug". On "droplets" a coded close-up of the neck: grey CO₂ wisps pass through the plug and cross the boundary outward, while small pale-blue droplets rise, hit the plug and fall back; on "system" a teal tick on the droplets "kept in". On "else" a chip writes on the boundary: "mass lost = mass of CO₂ (if nothing else leaves)".

### 3. a prediction from the equation
> Next, a prediction from stoichiometry. C a C O three plus two H C l makes C a C l two, plus H two O, plus C O two. The acid is in excess, so the chips are the limiting reagent. Two point zero zero grams over one hundred point zero nine is zero point zero two zero zero moles of calcium carbonate. The ratio is one to one, so we get zero point zero two zero zero moles of carbon dioxide. Times forty-four point zero one, that's zero point eight eight **grams**. So our hypothesis is this. If all the lost mass is carbon dioxide, the reading will fall by zero point eight eight **grams**.

Visual: plan board at the right, row 1 "question: does the mass lost match the CO₂ predicted?". Calculation rows below: on "limiting reagent" the teal "limiting" chip from the opening slides beside "CaCO₃"; on "zero point zero two zero zero moles of calcium" row "n(CaCO₃) = 2.00 ÷ 100.09 = 0.0200 mol"; on "one to one" row "CaCO₃ : CO₂ = 1 : 1 → n(CO₂) = 0.0200 mol"; on "grams" (first) row "m(CO₂) = 0.0200 × 44.01 = 0.88 g" (gold). On "hypothesis" plan row 2 writes; on "grams" (second) it completes: "prediction: mass falls by 0.88 g" (gold dashed chip).

### 4. the method
> Here's the method. Weigh the flask with its acid and plug, weigh the chips separately, and add the two readings to get the starting **total**. Why not just read the balance after adding the chips? Because gas starts escaping the moment they land, so that first reading would already be too low. Then tip in the chips, replace the plug, and record the mass every thirty seconds, in a table with time and mass, and units in the **headings**. Keep going until three readings in a row are the same. That's constant mass, and it means the reaction has **stopped**.

Visual: plan row 3 "method". On "Weigh the flask" the readout shows "148.62 g" with the flask alone (`y11c-flask-acid-plug-v1.png`: acid and plug, no chips); on "weigh the chips separately" a coded watch-glass outline of chips on the pan, readout "2.00 g"; on "total" a sum row "148.62 + 2.00 = 150.62 g" (amber). On "first reading would already be too low" a ghost readout "150.58 g?" appears and is crossed, tag "gas already gone". On "tip in the chips" a coded chip cluster slides by code from the watch glass into the flask (no hands) and the plate changes to the fizzing version. On "headings" plan row 4 and the results table write with headers "time (s)", "mass (g)", "mass lost (g)"; the first rows fill: "0 | 150.62 | 0.00", "30 | 150.31 | 0.31". On "stopped" a small chip "constant mass: 3 equal readings in a row". A grey safety chip sits at the plan board's foot throughout: "eye protection; dilute acid; small amounts; plug stops spray".

### 5. the graph levels off
> Plot mass against time, and the evidence tells a story. The mass falls fast at first, while the chips fizz hard, then more slowly, then it levels off at one hundred and forty-nine point eight zero **grams**. No chips are left in the flask, which confirms they really were the limiting **reagent**. So the mass lost is one hundred and fifty point six two minus one hundred and forty-nine point eight zero, which is zero point eight two **grams**.

Visual: the table completes row by row (author note d) while the `LineGraph` plots the same points: axes "time (s)" and "mass (g)"; a smooth curve through them. On "levels off" the dashed line at 149.80 g draws with the tag "constant mass". On "No chips are left" the plate cross-fades to `y11c-flask-acid-plug-spent-v1.png` (clear liquid, no chips, no bubbles), and a teal tick "limiting reagent used up". On "grams" (last) row "mass lost = 150.62 − 149.80 = 0.82 g" (teal).

### 6. three runs, and a prediction (countdown, 3 seconds at the end)
> We predicted zero point eight eight grams, and measured zero point eight two. Two more runs lose zero point eight three and zero point eight one, so the mean is zero point eight two grams, about seven percent below the prediction. The runs agree closely, so this isn't random scatter. So where's the difference? Did some mass vanish, did gas stay inside the system, or did something extra get **in**?

Visual: board change; the graph shrinks to the top right. Comparison bars: a gold dashed bar "predicted 0.88 g". On "zero point eight three" three teal run bars draw "0.82", "0.83", "0.81" (grey "illustrative data"); on "mean" a teal bar "mean 0.82 g" lines up under the gold one; on "seven percent" the amber gap "0.06 g, about 7% low" lights. On "agree closely" a bracket over the three run bars, tag "close together". On "vanish" three chips write: "mass vanished", "gas stayed inside", "something got in"; on "in" the 3 s `Countdown` ring runs.

### 7. gas stayed inside
> Gas stayed inside. Carbon dioxide dissolves a little in water, so some of it stays in the solution. And at the end, the space above the liquid is full of carbon dioxide instead of air. Carbon dioxide is denser than air, so that space now weighs a little **more**. Both of these keep some carbon dioxide inside the boundary, so the balance never counts it as lost. And because this happens the same way in every run, it's a systematic error. It makes the measured loss too **small**.

Visual: "gas stayed inside" ticks; the other two chips are crossed. The flask enlarges into the inside-the-flask view: on "dissolves" small grey CO₂ molecules drift within the liquid, tag "dissolved CO₂"; on "full of carbon dioxide" the air space fills with CO₂ molecules replacing a few air molecules, tag "CO₂ in the air space"; on "more" a mini-balance icon over the air space tips slightly down, tag "denser than air". On "inside the boundary" the dashed teal boundary glows round both. On "systematic error" a rose chip "systematic: same direction every run" (ws-v05 tag). On "small" an arrow on the comparison bars pushes the teal bar left of the gold, labelled "loss too small".

### 8. the opposite error, and matched fixes
> The opposite problem happens without the plug. Spray and water vapour carry liquid out with the bubbles, so the balance loses extra mass, and the result comes out too **big**. So each improvement targets one way that mass crosses the boundary. The cotton wool plug keeps liquid in. Gently swirling at the end helps dissolved gas escape. And to check that nothing is truly lost, seal the reaction in a capped bottle, as in the first video of this module, and the reading stays the **same**.

Visual: on "without the plug" a ghost flask with no plug: pale-blue droplets and a faint vapour wisp cross the boundary outward; on "big" an arrow pushes a ghost bar right of the gold, "loss too big". On "each improvement" a two-column card writes: "problem" and "fix"; on "plug keeps liquid in" row "spray, vapour out → cotton wool plug"; on "swirling" row "CO₂ dissolved → swirl gently at the end". On "capped bottle" m2-v01's plates (`y11c-capped-bottle-chips-v1.png`, then `y11c-capped-bottle-fizz-v1.png`) slide in small with the boundary round the bottle; on "same" its readout holds "152.36 g" with a teal tick, tag "closed: nothing crosses".

### 9. what the evidence says
> So what does the evidence say about conservation of mass? The balance lost nearly all the mass we predicted, and the small shortfall has a cause we can name: carbon dioxide still inside the system. Nothing suggests mass was destroyed. The open flask lost mass because gas crossed its boundary, and the amount closely matches the equation. That's evidence that supports the law, and it shows our stoichiometry predicts real **masses**.

Visual: comparison bars return full size. On "nearly all" the gap shrinks visually into a labelled amber slice "0.06 g: CO₂ still inside (dissolved, air space)". On "Nothing suggests mass was destroyed" the scene 1 crossed chip returns briefly. On "gas crossed its boundary" the boundary and outward CO₂ wisps flash once on the spent flask. On "masses" a teal chip "evidence supports conservation of mass" writes under the bars.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A student adds two point one zero grams of sodium hydrogen carbonate to an excess of vinegar in an open beaker, with no plug. It fizzes strongly, and the mass falls by one point one eight grams. Calculate the expected mass of carbon dioxide, and explain the difference. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience") beside `m6-clip-baking-soda-vinegar-fizz-v1.png`: "A student adds 2.10 g of sodium hydrogen carbonate to excess vinegar in an open beaker on a balance. NaHCO₃(s) + CH₃COOH(aq) → CH₃COONa(aq) + H₂O(l) + CO₂(g). The reaction fizzes strongly and the total mass decreases by 1.18 g. (a) Calculate the expected mass of carbon dioxide released. (b) Explain why the measured decrease differs from your answer to (a), and suggest ONE improvement to the method. (H = 1.008, C = 12.01, O = 16.00, Na = 22.99) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Two point one zero over eighty-four point zero one is zero point zero two five zero moles. One to one, that's one point one zero grams of carbon dioxide. The beaker lost more than that, so something besides carbon dioxide left: spray and water vapour, carried out by the bubbles. Use a conical flask with a cotton wool plug. Saying the extra mass was destroyed is the classic **mistake**.

Visual: card shrinks to the top. Rows: "n(NaHCO₃) = 2.10 ÷ 84.01 = 0.0250 mol"; "n(CO₂) = 0.0250 mol"; "m(CO₂) = 0.0250 × 44.01 = 1.10 g" (gold); "measured 1.18 g > 1.10 g → liquid also left (spray, vapour)"; "fix: conical flask + cotton wool plug". On "mistake" a chip "the extra 0.08 g was destroyed" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Five point zero zero grams of marble chips react with hydrochloric acid in a flask with a cotton wool plug. The total mass falls from one hundred and fifty-six point four zero grams to a constant one hundred and fifty-five point five two grams, and some chips are still left at the end. Find the mass of carbon dioxide lost, identify the limiting reagent, and explain why five point zero zero grams can't be used to predict the gas. Pause here to answer.

Visual: `QuestionCard`: "5.00 g of marble chips (calcium carbonate) is added to hydrochloric acid in a conical flask with a cotton wool plug on a balance. CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). The total mass decreases from 156.40 g to a constant 155.52 g. Some marble chips remain in the flask at the end. (a) Calculate the mass of carbon dioxide released. (b) Identify the limiting reagent, with a reason. (c) Explain why the mass of carbon dioxide cannot be predicted from 5.00 g of calcium carbonate. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The carbon dioxide lost is zero point eight eight grams. Chips are left over, so the acid ran out first: the acid was the limiting reagent. That means only about two grams of chips reacted. Predicting from all five grams would give two point two zero grams of carbon dioxide, far too **much**.

Visual: card shrinks to the top. Rows: "m(CO₂) = 156.40 − 155.52 = 0.88 g"; "chips left → acid limiting"; "CaCO₃ reacted = 0.88 ÷ 44.01 × 100.09 ≈ 2.00 g". On "much" a chip "predicted from 5.00 g: 2.20 g" fades in and is crossed. Hold about 1 second.

### 14. conclusion and handoff
> So, to keep track of escaping gas, draw the boundary and follow the gas. Predict it from the limiting reagent, weigh the whole system until the mass is constant, and explain any gap by how mass crossed the boundary. Our results support conservation of mass. But how would you write that conclusion so a reader trusts it? How do we communicate a chemistry conclusion that evidence **supports**?

Visual: the memory line writes at the top: "Draw the boundary, then follow the gas." On "Predict it" the gold chip "predicted CO₂: 0.88 g" lights; on "until the mass is constant" the balance with the spent flask and readout "149.80 g" returns at the left; on "explain any gap" the summary table writes at the right ("run | mass lost (g)": 1 | 0.82; 2 | 0.83; 3 | 0.81; mean | 0.82) with the small mass-time graph under it. On "write that conclusion" an empty card "Conclusion:" with a blinking amber cursor slides in below. On "supports" the chip "Next: How do we communicate a chemistry conclusion that evidence supports?" writes. Hold about 2 seconds. This is the final frame (ws-v07 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. System: everything on the balance. Gas leaving through the boundary lowers the reading; a cotton wool plug lets gas out but keeps liquid in.
2. Predict the gas from the limiting reagent: 2.00 g CaCO₃ → 0.0200 mol → 0.88 g CO₂.
3. Starting total = sum of separate weighings. Record mass until constant. Mass lost = start − final. No limiting reagent left confirms the reaction finished.
4. Loss smaller than predicted: CO₂ dissolved or filling the flask. Loss bigger: spray or water vapour escaping. Both are systematic.
5. A mass loss that matches the predicted gas supports conservation of mass.

Memory aid (large, on the notes screen): *Draw the boundary, then follow the gas.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the reading falls (1); why the plug (2); why the start must be calculated (4); why constant mass means finished (4, 5); why the loss is small (7) or big (8); why the evidence supports conservation (9).
- **Misconceptions addressed:** mass is destroyed (1, A1); a first reading after adding is the start (4); repeats fix a shortfall (7, implied); predicting from a reactant that didn't all react (A2).
- **One idea at a time:** the question (1), system (2), prediction (3), method (4), result (5), comparison (6), cause (7), opposite error and fixes (8), judgement (9).
- **Video makes it easier:** the boundary with gas crossing and droplets held (2); a live readout and table building into a levelling graph (4, 5); bars that show the gap (6); a cross-section showing where the missing gas sits (7).
- **Response opportunity:** 3 s prediction (6); two unseen HSC-style tasks, all facts on the card, 10 s each. Feedback about 29 s and 22 s.
- **Avoided double teaching:** system and closed bottle (m2-v01), limiting reagent (m2-v08), mass-to-mass (m2-v07), error types (ws-v05) and tables and graphs (ws-v04) are recalled, not re-taught.
- **Syllabus coverage:** `C2-IQ1-01` "masses of solids and/or liquids in chemical reactions" (1 to 9, A1, A2); `C2-IQ1-02` "solving problems regarding mass changes in chemical reactions" (3, 5, 9, A1, A2).
- **Out of scope by design:** writing the conclusion (ws-v07), uncertainty arithmetic, gas volumes, concentration.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) n(NaHCO₃) = 2.10 ÷ 84.01 = 0.0250 mol; ratio 1 : 1, so n(CO₂) = 0.0250 mol; m = 0.0250 × 44.01 = 1.10 g (2 marks). (b) The decrease (1.18 g) is larger than the CO₂ expected, so liquid also left the open beaker: spray and water vapour carried out by the vigorous bubbling (1 mark). Use a conical flask with a loose cotton wool plug, which lets gas out but keeps liquid in (1 mark). Classic mistake (crossed): "the extra mass was destroyed".

**Attempt 2 (scene 12; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) m(CO₂) = 156.40 − 155.52 = 0.88 g (1 mark). (b) Chips remain, so the acid was used up first: hydrochloric acid is the limiting reagent (1 mark). (c) Only part of the calcium carbonate reacted (about 0.88 ÷ 44.01 × 100.09 = 2.00 g); predicting from all 5.00 g assumes it all reacted and gives 2.20 g, too much (2 marks). Classic mistake (crossed): 2.20 g.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Setup | 2.00 g chips; 50 mL dilute HCl (excess); 150.62 g | 1, 4 |
| Prediction | 100.09; 0.0200 mol; 1 : 1; 44.01; 0.88 g | 3 |
| Weighings | 148.62 + 2.00 = 150.62 g; ghost 150.58 g | 4 |
| Run 1 | 150.62, 150.31, 150.10, 149.96, 149.88, 149.83, 149.81, 149.80 ×3 g; loss 0.82 g | 4, 5 |
| Runs | 0.82, 0.83, 0.81 g; mean 0.82 g; gap 0.06 g, about 7% | 6, 9 |
| Closed check | 152.36 g (m2-v01) | 8 |
| A1 | 2.10 g; 84.01; 0.0250 mol; 1.10 g; measured 1.18 g | 10, 11 |
| A2 | 5.00 g; 156.40 → 155.52 g; 0.88 g; about 2.00 g reacted; slip 2.20 g | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 40.08 + 12.01 + 48.00 = 100.09; 2.00 ÷ 100.09 = 0.019982; 12.01 + 32.00 = 44.01; 0.019982 × 44.01 = 0.8794.
- 148.62 + 2.00 = 150.62; 150.62 − 149.80 = 0.82; − 149.79 = 0.83; − 149.81 = 0.81; mean 0.82; (0.88 − 0.82) ÷ 0.88 = 6.8%.
- 22.99 + 1.008 + 12.01 + 48.00 = 84.008; 2.10 ÷ 84.008 = 0.024998; × 44.01 = 1.1001.
- 156.40 − 155.52 = 0.88; 0.88 ÷ 44.01 × 100.09 = 2.0013; 5.00 ÷ 100.09 × 44.01 = 2.1985.

## Memory aid check

- **"Draw the boundary, then follow the gas."** Written for this video. Meaning: first define what is weighed (the system), then account for every way a gas (or liquid carried by it) crosses that boundary; the balance measures only what leaves or enters. Assumptions checked: it covers mass gains too (oxygen joining magnesium, m2-v01) and the closed check (nothing crosses); it does not replace the prediction step, which scene 3 shows separately. It helps a new case (A1's open beaker; any heating or gas-forming reaction).
- **Considered, not used:** "What crosses the line, the balance can't weigh" (true, but students then forget gases entering).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,174 characters**, 15 scenes. At 13.3 characters per second the speech is about 464 s; add about 12 s of holds and settling (the table and graph building in 5, the cross-section in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 555 s (9.2 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v09` (route chem-y11-m2-v09; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v09`.

In order (15 scene headings, all `### N.`): reading-falls, system, prediction, method, graph, runs-prediction, gas-inside, opposite-error, evidence, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 6 is `explain` with a 3 s countdown at its end. Transitions: m2-v08's final frame into scene 1 by camera continue; 1 to 2 camera push to the flask; 2 to 3 camera continue (plan board opens); 3 to 4 to 5 camera continue; 5 to 6 clear change (bars); 6 to 7 camera push into the flask; 7 to 8 camera continue; 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: prediction countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v09-learning-review.md`, `checks/c-y11-m2-v09-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png`: throughout.
- `public/assets/chemistry/m6-clip-baking-soda-vinegar-fizz-v1.png` (open beaker, white powder fizzing in clear liquid): attempt 1 card.
- `y11c-capped-bottle-chips-v1.png` and `y11c-capped-bottle-fizz-v1.png` (requested in `chem-y11-m2-v01.md`): scene 8, small. If not yet made, show the m2-v01 thumbnail as a coded outline with "closed: 152.36 g".
- Thumbnail of m2-v01's copper carbonate crucible (`y11c-cuco3-crucible-green-v1.png`, requested in m2-v01) in scene 1; fallback `m5-g02b-open-crucible-v1.png`.
- **Inspected, not used:** `m6-marble-chips-acid-v1.png` (open beaker, no plug); `c4a-syringe-barrel-v1.png` (opaque white background, and gas volumes are m2-v04's); `m6-conical-flask-v1.png` (empty).

Need (new plates, Codex):
1. `y11c-flask-chips-acid-plug-v1.png` and 2. `y11c-flask-chips-acid-plug-fizz-v1.png`: requested in `chem-y11-m2-v08.md` (same set).
3. `y11c-flask-acid-plug-spent-v1.png`: essential (scenes 4 (as the flask before the chips), 5, 9, final frame; ws-v07 and m2-v10 open on it).

Coded: readouts, boundary, droplets and wisps, plan board, results table, `LineGraph`, comparison bars, inside-the-flask cross-section, watch-glass outline of chips, chips, cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v09)

Style, canvas and camera exactly as the two flask plates in `chem-y11-m2-v08.md` (they must overlay exactly; transparent PNG with alpha channel; no text, no people, hands or faces).

3. `y11c-flask-acid-plug-spent-v1.png`: the same 250 mL conical flask with the same cotton wool plug, about one fifth full of clear colourless liquid, with no chips and no bubbles; the liquid surface still. This one plate serves both "acid before the chips" (scene 4) and "after the reaction" (scene 5 onward); the liquid level is the same.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three site notes against `lesson18.sa.html` and against lesson 18 notes already logged (avoid duplicates).
3. Confirm the equations are balanced: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (the chips move by code); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v08's final frame, and that ws-v07 opens on this final frame.
9. Find a stable reference for the marble chips mass-loss practical (author note b) and check the safety chip against current NSW school guidance.

## YouTube metadata (draft)

Title: Mass Changes and Escaping Gas: A Conservation of Mass Practical | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Marble chips fizz in acid on a balance and the reading falls. Is mass being destroyed? Plan and run a mass-balance investigation: define the system, use a cotton wool plug, predict the carbon dioxide from the limiting reagent, weigh to constant mass, graph the results, and explain why the measured loss is a little smaller than predicted. Then judge the evidence against the law of conservation of mass. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to observe and measure the quantitative relationships of chemical reactions, including but not limited to:"
"masses of solids and/or liquids in chemical reactions"
"relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:"
"solving problems regarding mass changes in chemical reactions (ACSCH046)"

Previous: Which reactant limits how much product can form? Next: How do we communicate a chemistry conclusion that evidence supports?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Shortfall cause (science check).** The 0.06 g shortfall is explained by dissolved CO₂ and CO₂ filling the air space (author note c). Confirm the wording and the direction.
- **2. Capped-bottle sentence (root).** Depends on m2-v01's closed-system method passing the science check (root decision 3 of Module 2). If it fails, cut scene 8's last sentence (about 110 characters) and its visual.
- **3. Acid amount (root).** "50 mL of dilute hydrochloric acid, in excess" without a concentration, because c = n ÷ V is m2-v10's. Accept, or add a grey tag "2 mol L⁻¹" with no narration.
- **4. Safety (science check).** The safety chip (author note e).
- **5. New plate (root).** `y11c-flask-acid-plug-spent-v1.png`, plus the two flask plates from m2-v08.
- **6. Site notes 1 to 3 (root).** Log if accepted and not already logged.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the separate-weighings reason clear at playback speed; does the cross-section make "gas stayed inside" believable; is the judgement in scene 9 clear without ws-v07's structure), then the science check and Codex error check.
- Checker output (5 November): narration 6,174 characters; per scene (1 to 15): 499, 433, 578, 547, 433, 396, 474, 481, 430, 302, 384, 464, 289, 389, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
