# Year 11 Chemistry WS V02: Planning investigations. How does a chemistry plan produce valid, useful data? (design)

Status: Revision 3 (7 Nov 2026): brief 186 error check clean (root confirmed); headline count restated as the sum of scene strings. Ready to voice. Previously Revision 2 (6 Nov 2026): brief 178 review repairs applied. Needs a Codex error check before voicing. Summary: scene 2 controls staged one at a time; recap after the causes; count corrected. Narration 6,360 characters (joined parser count), about 569.1 s. Previously Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,345 characters (sum of scene strings; 6,360 with joining spaces; Revision 1 was 6,360 by the joined parser count), 16 scenes, about 569.1 s (9.5 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: second Year 11 Chemistry (2017 syllabus) Working Scientifically skills video, playlist entry 12, between `chem-y11-ws-v01` and `chem-y11-ws-v03`. Templates as `chem-y11-ws-v01.md` (structure from `phys-y11-fa1-v01.md`; plates from `bio-y11-fa1-v05.md`); skills-video format precedent `phys-y11-fa0-v02.md` (format only: its shared kit components `PlanBoard` and `RiskMatrix` are reused; no physics content). Running case: ws-v01's modified question on copper sulfate pentahydrate (v07). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-ws-v02` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply planning investigations to that case and a new question; do not re-teach the subject mechanism"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches). Used: the key terms (independent, dependent and controlled variable, with the site's wording), the equipment table's principle (choose equipment by the precision the measurement needs; "Top-pan balance ±0.01 g") and the "Incomplete drying ... dry to constant mass" framing. Not used: the validity and reliability definitions (site note 1 in `chem-y11-ws-v01.md`), titration and gravimetric error scenarios (ws-v05).

Owner rules applied: as ws-v01 (one learner question; no people, hands, faces or body outlines: apparatus alone, tongs shown lying on the mat, never held; plates for real apparatus; plan board, risk matrix, tables and graphs coded; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Planning Investigations", outcome CH11/12-2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS2-01`: "assess risks, consider ethical issues and select appropriate materials and technologies when designing and planning an investigation (ACSCH031, ACSCH097)"
- `C11-WS2-02`: "justify and evaluate the use of variables and experimental controls to ensure that a valid procedure is developed that allows for the reliable collection of data (ACSCH002)"
- `C11-WS2-03`: "evaluate and modify an investigation in response to new evidence"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 33)

**Boundary:** opens on ws-v01's final frame (the heating-time question, the modified hypothesis, "plan: ?"). Teaches: why a rushed test can't answer the question (several differences at once); valid (the method measures what it claims to measure); independent, dependent and controlled variables, each control justified; an experimental control (the empty crucible heated to constant mass); reliable (repeating the whole experiment gives consistent results) and enough time points to show the levelling off; choosing materials and technologies by what the measurement needs (a 0.01 g balance; porcelain crucible; lid; tongs); a risk assessment with likelihood and consequence and controls that lower one or both (`C11-WS2-01`); ethical issues: harm to waterways, using small quantities, honest records; modifying the plan when a trial run gives new evidence (the white powder takes water back from the air; cool in a desiccator) (`C11-WS2-03`); two attempts on the sand and salt investigation and a flawed copper sulfate plan. Not taught: carrying out the plan, accuracy and calibration checks, secondary-source reliability and referencing (ws-v03); data tables and graphs (ws-v04); error types and uncertainty (ws-v05).

## Decisions

- **Learner question (route wording kept).** "How does a chemistry plan produce valid, useful data?" The answer, in order: a test with several differences at once can't answer anything (1); validity: only the independent variable may change the measured result, and the result must be what it claims (water lost) (2); an experimental control checks the apparatus (3); reliability: repeat the whole experiment, and spread the time points (4); equipment fine enough for the change (5, 6); risks lowered by controls (7); ethics: waterways, waste and honest records (8); new evidence from a trial changes the plan (9).
- **Opening frame (equals ws-v01's final frame, `chem-y11-ws-v01.md` "Opening frame and final frame").** Unlit blue crystal crucible and the dashed prediction sketch at the left; the question box ("How does the time of gentle heating affect the percentage of mass lost by blue copper sulfate crystals?") and the modified hypothesis at the right; the clipboard "plan: ?"; the "Next" chip, which fades as scene 1 starts.
- **Hook (illustrative, tagged).** A rushed test: three samples heated by three people on three burners for 2, 4 and 6 minutes, weighed while hot: 19%, 15% and 31% lost. The 4-minute sample lost less than the 2-minute one, so the data can't be read. The point is the cause: with several differences at once, no one can tell which caused the result.
- **Definitions (series set, stated plainly; consistent with ws-v01 Decisions and ws-v03).** **Valid:** the method measures what it claims to measure (scene 2). **Reliable:** repeating the whole experiment gives consistent results (scene 4). Accurate and precise are ws-v03's. The site's "Valid result = free from systematic error" is not used (`chem-y11-ws-v01.md` site note 1).
- **Variables (scene 2; site key terms).** Independent: heating time (the one we change). Dependent: percentage of mass lost (the one we measure). Controlled, each justified by one shared reason ("if it changed too, we couldn't tell which change caused the result"): starting mass 2.50 g; the same crucible; the same small blue flame at the same height; the same cooling before each weighing. The gentle flame also protects validity directly: ws-v01's group C showed strong heat breaks down the copper sulfate, so the mass lost would no longer be just water.
- **Experimental control (scene 3; plain meaning "a run without the thing being tested, for comparison").** The empty crucible (with its lid) is heated and weighed until its mass stops changing before any crystals go in. A steady empty crucible shows every later change comes from the contents. This is standard gravimetric practice and a genuine control, not a controlled variable.
- **Reliability and range (scene 4).** One sample is heated in 2-minute steps and weighed after each (0, 2, 4, 6, 8, 10, 12 minutes; cumulative heating, cooled and weighed each time). The whole experiment is repeated with three fresh samples; the pattern must agree. Seven time points show where the curve levels off; two points could not.
- **Technology choice (3 s prediction, scenes 5, 6).** About 0.90 g is lost in total. A 0.1 g balance gives 9 steps across the whole change, so one step is more than a tenth of the answer; a 0.01 g balance gives 90 steps, so one step is about 1%. The step-counting argument needs no uncertainty formula (ws-v05). Other materials, each with its reason: porcelain crucible (survives a direct flame), lid slightly ajar (stops crystals spitting while steam escapes), pipeclay triangle, tongs (the crucible is far too hot to touch).
- **Risk assessment (scene 7; `C11-WS2-01`).** Plain meanings: hazard (something that could cause harm); risk (how likely the harm is, combined with how bad it would be); control (a step that lowers the risk). The example 3 by 3 matrix from the shared `RiskMatrix` (tagged "example matrix: use your school's"). Spoken rows: (1) hot crucible and triangle, burn: likely and moderate, high; tongs, a heatproof mat and a cooling time make a burn unlikely, low. (2) Overheating releases irritating gases: the plan's gentle flame removes most of the hazard, low. (3) Copper sulfate in the eyes: safety glasses on before the burner is lit. On-screen row only: copper sulfate is harmful if swallowed (no food or drink; wash hands). Hazard facts are those of a typical copper(II) sulfate pentahydrate safety data sheet (author note c); ws-v03 shows where they come from.
- **Ethical issues (scene 8).** Environmental: copper sulfate is very toxic to aquatic life, so the residue goes into a labelled waste container, never the sink. Using small quantities (2.50 g per sample) keeps waste low while still giving 90 balance steps. Honest records: every reading goes into the record, including odd ones; leaving out results that don't fit makes data look better than it is (this links back to ws-v01's crossed mistake).
- **Evaluating and modifying in response to new evidence (scene 9; `C11-WS2-03`).** Trial run (illustrative): the white powder cools on the open bench; on the balance its mass creeps from 1.60 g to 1.64 g and a faint blue tinge appears. Cause: anhydrous copper sulfate takes water back from the air. Effect: every percentage would come out too small (34.4% instead of 36.0%). Modification: cool with the lid on inside a desiccator ("a sealed jar that keeps the air dry"), and weigh as soon as it is cool. ws-v03 returns to this: class 2's results (34.3 to 34.5%) come from skipping it.
- **Memory aid:** "Change one, measure one, control the rest, and repeat the whole thing." (see "Memory aid check"), scene 10.
- **Attempts (original, HSC style).** A1 (variables; the sand and salt investigation from ws-v01's attempts): identify the independent and dependent variables and two controlled variables, and justify one. Model: IV volume of water; DV percentage of the mixture recovered as salt; controls: mass of mixture, water temperature, stirring time, drying to constant mass; justification for temperature: warmer water dissolves a little more salt, so a temperature change would also change the result. Crossed: "Controlled variable: the salt" (doesn't say what is kept the same). A2 (evaluate and modify a flawed plan): "Heat strongly with a roaring flame so the water leaves quickly, then tip the leftover powder into the sink." Model: invalid, because strong heat breaks down the copper sulfate, so the mass lost isn't only water (and it can release irritating gases); environmental and ethical problem, toxic to aquatic life; modified: small gentle flame, heat to constant mass, residue into a labelled waste container. Crossed: "Add 'be careful' to the plan" (not a control).
- **Mistake scene:** none separate. "A quick test is good enough" (1); "a controlled variable is just 'the chemicals'" (crossed in 12); "more decimal places on a display is always better" (not claimed: the reason is step size relative to the change, 6); "be careful is a control" (crossed in 14); "leave out odd results" (8).
- **Site sources used:** `l18-intentions-title` key terms (variables); `l18-errortype-title` equipment table (top-pan balance ±0.01 g; choose by the precision needed); `l18-errors-title` "Incomplete drying ... dry to constant mass". Site notes: see `chem-y11-ws-v01.md` (notes 1 to 6); no new site errors in the parts used here.
- **Cause chain taught, in order:** (1) several differences at once hide the cause (1); (2) validity needs one independent variable, a measured dependent variable and every other variable controlled, and the measured mass must be water only (2); (3) a control run checks the apparatus (3); (4) whole-experiment repeats and spread time points make the data reliable and useful (4); (5) equipment must resolve the change (5, 6); (6) controls lower likelihood or consequence (7); (7) ethics: waterways, waste, honesty (8); (8) trial evidence changes the plan (9).
- **Entry knowledge:** ws-v01 (the question, the hypothesis, groups A to C); v06 (constant mass); v07 (copper sulfate pentahydrate, 36.1% water); Stage 5 fair tests and safe practical work.
- **Learner-visible vocabulary (plain meaning at first use):** valid (2); independent, dependent and controlled variable (2); experimental control (3); reliable (4); hazard, risk, control (7); desiccator (9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **`PlanBoard`** (shared kit: four sections "valid", "reliable", "equipment", "safe and ethical" that fill as decisions are made; edits strike and rewrite); **variable tags** (navy IV, ink DV, grey controls, each control with a small "if it changed?" tooltip that opens on cue); **crucible stages** (the crucible plates with coded steam, cumulative timer chip "2, 4, 6 ... min", balance readouts that tick); **step ruler** (scene 6: a coded bar for the 0.90 g loss divided into 9 coarse steps, then 90 fine steps); **`RiskMatrix`** (shared) and a one-row risk table; **trial readout** (scene 9: a readout creeping 1.60, 1.62, 1.64 g with a faint blue tint growing on the powder); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** as ws-v01, plus risk levels low, medium, high from the `RiskMatrix` palette.
- **Board layout (constant):** heading top left; apparatus stage in the left half; `PlanBoard` in the right half, filling section by section.

Author notes (not learner copy):
(a) Hook data (illustrative): three samples, different burners, weighed hot: 19%, 15%, 31%. Weighing hot also reads low (convection), which the hook doesn't explain; ws-v03 uses it.
(b) Step counting: 0.90 ÷ 0.1 = 9 steps (one step 11% of the loss); 0.90 ÷ 0.01 = 90 steps (one step 1.1%). Said "more than a tenth" and "about one percent".
(c) Copper(II) sulfate pentahydrate hazards as on typical supplier SDSs (GHS): harmful if swallowed (H302), causes skin irritation (H315), causes serious eye irritation (H319), very toxic to aquatic life with long-lasting effects (H410). Codex to confirm against a current Australian supplier SDS or the Safe Work Australia HCIS entry. Irritating gases on strong heating: sulfur oxides (`chem-y11-ws-v01.md` author note c).
(d) Trial run (illustrative): anhydrous CuSO₄ is hygroscopic; 1.60 g → 1.64 g on the open bench is a plausible small gain in humid air. Percentages: (2.50 − 1.60) ÷ 2.50 = 36.0%; (2.50 − 1.64) ÷ 2.50 = 34.4%.
(e) Risk matrix (example, tagged; the shared `RiskMatrix` levels): likely with moderate is high; unlikely with moderate is low; possible with moderate is medium. Schools use their own matrices.
(f) Salt solubility rises slightly with temperature (about 35.7 g per 100 g water at 0 °C, 36.0 at 20 °C, 39 at 100 °C): "a little more".
(g) Pronunciations: "desiccator" (DESS-i-kay-tor); "crucible"; "pipeclay triangle".

Main question: *How does a chemistry plan produce valid, useful data?*
Entry knowledge: ws-v01; v06; v07; Stage 5 fair tests and lab safety.
Stops after: variables and controls justified, an experimental control, reliability, equipment choice, risk assessment, ethics, a plan modified by trial evidence. No calibration, accuracy, sources or referencing (ws-v03).
Handoff: chem-y11-ws-v03, carrying out the plan safely and accurately.

## Opening frame and final frame

- **Opening frame:** ws-v01's final frame exactly (Decisions).
- **Final frame (ws-v03 opens on it):** at the left, three plates in a row: the crucible with its lid slightly ajar (`y11c-cuso4-crucible-lid-v1.png`, new), the desiccator (`m8-desiccator-v1.png`) and the balance (`y11c-top-pan-balance-v1.png`) with a blank readout "– . – – g"; at the right, the completed `PlanBoard`: "valid: IV heating time; DV % mass lost; controls: 2.50 g, same crucible, small blue flame, same cooling; empty crucible to constant mass"; "reliable: 3 full runs; 0 to 12 min in 2 min steps"; "equipment: 0.01 g balance; porcelain crucible, lid ajar; tongs; desiccator"; "safe and ethical: glasses; tongs and mat; gentle flame; waste container; record every reading"; the chip "Next: How do we collect and source chemistry data safely and accurately?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: a rushed test
> Our question: how does the time of gentle heating affect the percentage of mass lost by the crystals? Now imagine a rushed test. Three people heat some crystals on three different burners, for two, four and six minutes, and weigh them while they're still hot. They lose nineteen, fifteen and thirty-one percent. The four minute sample lost less than the two minute **one**. Is the hypothesis wrong, or the **test**? With so many differences at once, we can't tell. The plan decides whether data can answer the question at **all**.

Visual: opens on ws-v01's final frame; the "Next" chip fades and the question box glows. On "rushed test" the board shifts left: three crucible plates (`y11c-cuso4-crucible-blue-lit-v1.png`, three copies at one uniform scale) on three differently sized coded flames (one roaring, one small, one medium), each with a timer chip "2 min", "4 min", "6 min"; coded steam; on "still hot" each crucible slides onto a balance readout with a red heat shimmer; readouts write "19%", "15%", "31%" (grey tag "illustrative data"). On "one" a small coded plot of the three points zigzags; the "4 min" point is ringed. On "test" two chips "hypothesis wrong?" and "test wrong?" appear. On "many differences" three grey tags write between the crucibles: "different burners", "different flames", "weighed hot". On "all" the clipboard "plan: ?" from the opening frame grows into `PlanBoard` with four empty sections; the heading writes on: "Planning: data you can use".

### 2. variables and validity
> A valid investigation measures what it claims to measure. Here, that means the mass lost must be water, and only the heating time can change it. Heating time is the independent variable, the one we change. The percentage of mass lost is the dependent variable, the one we **measure**. Everything else that could change the result is a controlled variable, kept the same. The same two point five zero grams of crystals, the same crucible, the same small blue flame at the same height, and the same cooling before each **weighing**. If any of these changed too, we couldn't tell which change caused the **result**. And the flame stays gentle, because strong heat would break down the copper sulfate, so the mass lost wouldn't be just **water**.

Visual: board clears to one crucible at the left. Gloss "valid: measures what it claims to measure" writes at the top of `PlanBoard`'s "valid" section. A navy tag "independent: heating time" attaches to a timer chip under the burner; on "measure" an ink tag "dependent: % mass lost" attaches to a balance readout. Controls staged one at a time beside the apparatus (Revision 2): on "controlled variable" a grey gloss "controlled: kept the same" writes; the crucible and the "2.50 g" mass chip stay visible throughout as the current case. Each control tag writes beside the part it controls as it is named, and the previous tag dims to grey as the next one writes: on "two point five zero grams" "mass: 2.50 g" by the crystals; on "the same crucible" "same crucible" by the crucible; on "the same small blue flame" "small blue flame, same height" by the burner (the flame plate dims to a small steady cone); on "weighing" "same cooling before weighing" by the balance readout. On "result" a gold bracket gathers the four dimmed tags with the label "if it changed too, which change caused the result?". On "water" ws-v01's black-crust crucible (`y11c-cuso4-crucible-black-v1.png`) flashes small with the tag "strong heat: not just water" and is crossed. Only after that cause does the short `PlanBoard` recap assemble in the "valid" section: "IV: heating time; DV: % mass lost; controls: 2.50 g, crucible, flame, cooling".

### 3. an experimental control
> There's one more check, an experimental control. That's a run without the thing being tested, for comparison. Before adding any crystals, we heat the empty crucible and its lid, and weigh them, until their mass stops changing. If the empty crucible lost or gained mass when heated, we'd wrongly blame that on the **crystals**. A steady empty crucible shows that every later change comes from what's inside **it**.

Visual: the crystals fade from the crucible (an empty crucible: the lid plate's crucible with no contents, coded fade of the crystal layer, or `y11c-crucible-empty-lid-v1.png` if root accepts the optional plate). Gloss "experimental control: a run without the thing being tested". The flame lights; a readout ticks "24.33 g → 24.31 g → 24.31 g" with a tick on the repeat (tag "steady: constant mass"). On "crystals" a ghost "−0.02 g?" floats from the crucible toward an imagined crystal layer and is crossed (tag "would be blamed on the crystals"). On "it" the crystals fade back in and the "valid" section gains "control: empty crucible to constant mass".

### 4. reliable data, and enough points
> Next, reliable data. Reliable means that if you repeat the whole experiment, you get consistent results. So the plan uses three separate samples. Each one is heated in two minute steps, and weighed after every step, from zero to twelve **minutes**. If all three runs show the same pattern, we can trust it. And seven time points can show where the curve levels **off**. With only two points, we'd never see it.

Visual: gloss "reliable: repeating the whole experiment gives consistent results". Three crucibles in a row (labelled "run 1", "run 2", "run 3"); a shared timer strip "0, 2, 4, 6, 8, 10, 12 min" writes under them. On "minutes" ghost dots of three runs plot on the prediction sketch from ws-v01, overlapping on the dashed curve (tag "same pattern", grey "illustrative"). On "levels off" the seven points glow along the curve's flat end at 36.1%. On "never see it" a dimmed alternative with only two points (0 and 12 min) joined by a straight line is crossed small (tag "two points: no levelling off"). The "reliable" section gains "3 full runs; 0 to 12 min in 2 min steps".

### 5. which balance? (countdown, 3 seconds)
> Now the equipment. In total, the crystals will lose about nought point nine grams of water. One balance reads to nought point one of a gram. The other reads to nought point zero one. Which one should we **use**?

Visual: board change. Two copies of `y11c-top-pan-balance-v1.png` side by side with the same crucible on each; coded readouts "26.8 g" (tag "reads to 0.1 g") and "26.81 g" (tag "reads to 0.01 g"). A chip "total loss ≈ 0.90 g". On "use" the 3 s `Countdown` ring runs. No answer shown.

### 6. choosing equipment by what the measurement needs
> The nought point zero one gram balance. Count the steps. On the coarse balance, the whole loss is only nine steps, so one step is more than a tenth of the answer. On the finer balance, it's ninety steps, and one step is only about one **percent**. We choose the other materials the same way. A porcelain crucible, because it survives a direct **flame**. A lid, set slightly ajar, to stop crystals spitting out while steam still **escapes**. And tongs, because the crucible gets far too hot to **touch**.

Visual: under each balance a coded step ruler spans the 0.90 g loss: on "nine steps" the coarse ruler shows 9 wide steps with one step shaded and tagged "1 step > 10% of the answer"; on "percent" the fine ruler shows 90 thin steps with one shaded, tag "1 step ≈ 1%". The fine balance gets a teal tick. On "flame" the crucible (`y11c-cuso4-crucible-lid-v1.png`, new) is ringed, tag "porcelain: survives a direct flame". On "escapes" the lid is ringed with a small coded steam wisp leaving the gap, tag "lid ajar: no spitting, steam escapes". On "touch" the tongs plate (`y11c-crucible-tongs-v1.png`, new) slides in lying on the heatproof mat plate (`y11c-heatproof-mat-v1.png`, new), tag "too hot to touch". The "equipment" section gains "0.01 g balance; porcelain crucible, lid ajar; pipeclay triangle; tongs".

### 7. assessing risks
> Then, the risks. A hazard is something that could cause harm. Risk combines how likely the harm is with how bad it would be, and a control is a step that lowers the **risk**. A hot crucible could burn someone. That's likely, and moderate, so the risk is high. Tongs, a heatproof mat and a cooling time make a burn unlikely, so the risk falls to **low**. Overheating could release irritating gases, but the plan's gentle flame removes most of that **hazard**. And copper sulfate irritates the eyes, so safety glasses go on before the burner is **lit**.

Visual: board change. `RiskMatrix` at the right (rows "likely, possible, unlikely"; columns "minor, moderate, major"; tag "example matrix: use your school's"). Glosses as spoken: "hazard: could cause harm"; "risk: how likely, and how bad"; on "risk" "control: a step that lowers the risk". One-row risk table (Hazard / Harm / Likelihood / Consequence / Risk / Control): row 1 writes "hot crucible and triangle" / "burn" / "likely" / "moderate" and the marker lands on "high"; on "low" the tongs and mat plates appear in the control cell and the marker slides to "unlikely / moderate", tinting low. Row 1 collapses to a grey chip "burns"; row 2 writes "overheating" / "irritating gases"; on "hazard" its control cell reads "gentle flame (the plan removes most of the hazard)" and the marker lands on low. On "lit" the safety glasses plate (`m5x-safety-glasses-v1.png`) slides into a third row "copper sulfate in eyes" / control "glasses on before lighting". A fourth row writes on screen only: "copper sulfate swallowed" / "no food or drink; wash hands". Footer: "your teacher approves the plan; follow your school's risk assessment". The "safe and ethical" section gains "tongs and mat; gentle flame; glasses".

### 8. ethical issues
> Planning also means thinking about ethical issues. Copper sulfate is very toxic to life in rivers and the sea, so the white powder goes into a labelled waste container, never down the **sink**. Using just two point five zero grams per sample keeps the waste **small**. And every reading goes into the record, including the odd ones. Leaving out results that don't fit would make the data look better than it **is**.

Visual: a coded sink outline with a crossed drain; on "sink" the waste bottle plate (`m5x-waste-bottle-v1.png`) slides in with a coded label "copper waste" and a teal tick. On "small" a chip "2.50 g per sample: small waste, 90 steps". On "every reading" a coded logbook strip writes three rows of readings, one of them odd ("run 2, 6 min: 1.84 g?"), kept with a small note "check: kept". On "is" a chip "delete the odd result" fades in and is crossed. The "safe and ethical" section gains "waste container, not the sink; small quantities; record every reading".

### 9. new evidence from a trial run
> A good plan also changes when new evidence arrives. In a trial run, the white powder was left to cool on the open bench. On the balance, its mass crept up, from one point six zero to one point six four grams, and a faint blue tinge **appeared**. The powder was taking water back from the air. That would make every percentage too small. So we modify the plan. The crucible cools with its lid on, inside a desiccator, a sealed jar that keeps the air dry, and it's weighed as soon as it's **cool**.

Visual: the white powder crucible (`m5-g02b-open-crucible-v1.png`) on the balance; tag "trial run". On "crept up" the readout ticks 1.60, 1.62, 1.64 g (tag "illustrative data"); on "appeared" a faint blue tint grows over the powder's surface (coded overlay) and is ringed. On "taking water back" small coded water molecules drift from the air onto the powder. On "too small" a row writes "(2.50 − 1.64) ÷ 2.50 = 34.4%, not 36.0%". On "modify the plan" `PlanBoard`'s "valid" section strikes "same cooling" and rewrites "cool with lid on in a desiccator; weigh when cool"; on "cool" the desiccator plate (`m8-desiccator-v1.png`) slides in with the lidded crucible inside (gloss "desiccator: a sealed jar that keeps the air dry").

### 10. the plan in one line
> So here's the plan in one line. Change one, measure one, control the rest, and repeat the whole thing. Then choose equipment fine enough for the change, lower every risk, and record honestly. That's what turns a question into data you can **use**.

Visual: `PlanBoard` slides to the centre, all four sections filled; each section glows as its clause is spoken. On "use" the memory line writes large across the top: "Change one, measure one, control the rest, and repeat the whole thing." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Back to sand and salt. A student will dissolve twenty gram samples of the mixture in twenty, forty, sixty and eighty millilitres of water, then filter, and evaporate the filtrate to recover the salt. Identify the independent and dependent variables, and two controlled variables, and justify one of them. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student investigates how the volume of water used affects the salt recovered from a sand and salt mixture. Samples of 20.00 g of the mixture are each stirred with 20, 40, 60 or 80 mL of water, filtered, and the filtrate is evaporated to recover the salt. (a) Identify the independent and dependent variables. (b) Identify TWO controlled variables, and justify why ONE of them must be controlled. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The independent variable is the volume of water. The dependent variable is the percentage of the mixture recovered as salt. Controlled variables include the mass of mixture, the water temperature, the stirring time and the drying. Temperature must stay the same, because warmer water dissolves a little more salt, so it would change the result **too**. Writing "the salt" as a controlled variable is the classic slip. It doesn't say what's kept the **same**.

Visual: card shrinks to the top. Rows: "(a) IV: volume of water; DV: % of mixture recovered as salt" (navy, ink). "(b) controls: mass of mixture (20.00 g), water temperature, stirring time, drying to constant mass". On "too" the "water temperature" control glows with a small row "warmer water dissolves a little more salt → would change the result too". On "same" a chip "Controlled variable: the salt" fades in and is crossed (caption "what is kept the same?"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Another student's plan says: heat the copper sulfate crystals strongly, with a roaring flame, so the water leaves quickly. Then tip the leftover powder into the sink. Identify one problem with the validity of this plan, and one safety or ethical problem, and modify the plan to fix both. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with the plan quoted in a box: "Plan: 'Heat 2.50 g of blue copper sulfate crystals strongly, using a roaring flame, so that the water leaves quickly. Weigh the powder. Then tip the leftover powder into the sink.' The plan aims to measure the percentage of water in the crystals. (a) Identify ONE problem with the validity of this plan. (b) Identify ONE safety or ethical problem. (c) Modify the plan to fix both problems. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Strong heat breaks down the copper sulfate itself, so the mass lost isn't just water, and the result isn't valid. It can also release irritating gases. So use a small, gentle flame and heat to constant mass. And copper sulfate is toxic to aquatic life, so the powder goes into a waste container, not the sink. Adding "be careful" is the classic slip. It doesn't change the likelihood or the harm, so it isn't a **control**.

Visual: card shrinks to the top. Rows: "(a) strong heat breaks down CuSO₄: mass lost ≠ water only" (black-crust crucible small beside it); "(b) irritating gases; toxic to aquatic life: not the sink"; "(c) small gentle flame, heat to constant mass; residue into a labelled waste container" (waste bottle small). On "control" a chip "Be careful." fades in and is crossed (caption "changes neither likelihood nor harm"). Hold about 1 second.

### 15. conclusion and handoff
> So a valid plan changes one variable, measures one, controls the rest, and checks the apparatus with a control. Repeating the whole experiment makes the data reliable. Equipment, risks and ethics are all planned before anything is lit. Next, we carry out the plan. How do we collect and source chemistry data safely and **accurately**?

Visual: the memory line returns small at the top. `PlanBoard` slides to the right as the final-frame elements assemble at the left: the lidded crucible, the desiccator and the balance with a blank readout. On "accurately" the chip "Next: How do we collect and source chemistry data safely and accurately?" writes. Hold about 2 seconds. This is the final frame (ws-v03 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Valid: the method measures what it claims to measure. Reliable: repeating the whole experiment gives consistent results.
2. Independent variable: the one you change. Dependent variable: the one you measure. Controlled variables: kept the same, because if they changed you couldn't tell which change caused the result.
3. Experimental control: a run without the thing being tested, for comparison (heat the empty crucible to constant mass).
4. Choose equipment fine enough for the change (0.01 g balance for a 0.90 g loss). Risk = how likely and how bad; a control lowers one or both. "Be careful" is not a control.
5. Ethics: no toxic waste down the sink; use small quantities; record every reading. Change the plan when trial evidence shows a problem.

Memory aid (large, on the notes screen): *Change one, measure one, control the rest, and repeat the whole thing.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why the rushed test fails: several differences at once (1). Why each control: otherwise a second change could cause the result (2). Why the flame must be gentle: strong heat makes the mass lost more than water (2). Why heat the empty crucible: so its own change isn't blamed on the crystals (3). Why repeat the whole experiment: consistency is what reliable means (4). Why seven points: to see the levelling off (4). Why the 0.01 g balance: one coarse step is more than a tenth of the answer (6). Why each material: survives the flame, stops spitting, too hot to touch (6). Why each risk control works: it lowers the likelihood or removes the hazard (7). Why the sink is ruled out: aquatic toxicity (8). Why the plan changed: the powder takes water back from the air (9).
- **Misconceptions addressed:** a quick test is enough (1); controls listed without reasons (2, crossed in 12); more repeats of one reading equals reliability (4: the whole experiment); "be careful" as a control (crossed in 14); leaving out odd results (8, crossed).
- **One idea at a time:** problem (1), validity and variables (2), control (3), reliability (4), equipment (5, 6), risk (7), ethics (8), modification (9), summary (10).
- **Video makes it easier:** the rushed test's zigzag shows the problem (1); each control tag opens a "what if it changed?" tooltip (2); the step rulers make resolution countable (6); the risk marker slides as each control is added (7); the blue tinge creeps in as the readout climbs (9); `PlanBoard` fills in front of the student.
- **Response opportunity:** one 3 s prediction (5); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 30 s and 31 s.
- **Avoided double teaching:** the question and hypothesis (ws-v01), constant mass (v06), the hydrate (v07) are recalled; carrying out, accuracy and sources are left to ws-v03.
- **Syllabus coverage:** `C11-WS2-01` (6 to 8, A2: materials and technologies, risks, ethics); `C11-WS2-02` (1 to 4, A1: variables, experimental control, valid procedure, reliable collection); `C11-WS2-03` (9, A2: evaluate and modify).
- **Out of scope by design:** calibration checks, accuracy and sources (ws-v03); data tables and graphs (ws-v04); uncertainty and error types (ws-v05).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A student investigates how the volume of water used affects the salt recovered from a sand and salt mixture. Samples of 20.00 g of the mixture are each stirred with 20, 40, 60 or 80 mL of water, filtered, and the filtrate is evaporated to recover the salt. (a) Identify the independent and dependent variables. (b) Identify TWO controlled variables, and justify why ONE of them must be controlled."
Model answer: (a) IV: volume of water; DV: percentage (or mass) of the mixture recovered as salt (1 mark). (b) Any two of: mass of mixture (20.00 g); water temperature; stirring time; filter paper type; drying to constant mass (1 mark). Justification, for example: water temperature, because warmer water dissolves slightly more salt, so a change in temperature would also change the salt recovered and we couldn't tell which change caused the result (1 mark). Classic mistake (crossed): "Controlled variable: the salt" (doesn't name a quantity kept the same).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "Plan: 'Heat 2.50 g of blue copper sulfate crystals strongly, using a roaring flame, so that the water leaves quickly. Weigh the powder. Then tip the leftover powder into the sink.' The plan aims to measure the percentage of water in the crystals. (a) Identify ONE problem with the validity of this plan. (b) Identify ONE safety or ethical problem. (c) Modify the plan to fix both problems."
Model answer: (a) Strong heating breaks down the copper sulfate itself (black solid, extra mass lost), so the mass lost is not only water: the method doesn't measure what it claims (1 mark). (Also accepted: heating once without checking for constant mass.) (b) Strong heating can release irritating gases; copper sulfate is very toxic to aquatic life, so it must not go down the sink (1 mark). (c) Heat gently with a small blue flame, reheating and weighing until the mass is constant; put the residue in a labelled waste container (1 mark). Classic mistake (crossed): adding "be careful" (not a control).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (illustrative) | 2, 4, 6 min: 19%, 15%, 31% | 1 |
| Starting mass | 2.50 g crystals | 2, 8, 13 |
| Empty crucible (control) | 24.33 → 24.31 → 24.31 g | 3 |
| Time points | 0, 2, 4, 6, 8, 10, 12 min (7 points); 3 runs | 4 |
| Total loss | ≈ 0.90 g; 9 steps of 0.1 g; 90 steps of 0.01 g | 5, 6, 8 |
| Trial run | 1.60 → 1.62 → 1.64 g; 34.4% instead of 36.0% | 9 |
| CuSO₄·5H₂O | 36.1% water (v07) | 4 (curve), final frame |
| A1 | 20.00 g samples; 20, 40, 60, 80 mL | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 2.50 × 90.0 ÷ 249.6 = 0.901 g.
- 0.90 ÷ 0.1 = 9; 0.1 ÷ 0.90 = 11.1%; 0.90 ÷ 0.01 = 90; 0.01 ÷ 0.90 = 1.1%.
- (2.50 − 1.60) ÷ 2.50 × 100 = 36.0; (2.50 − 1.64) ÷ 2.50 × 100 = 34.4.
- 7 time points from 0 to 12 min in 2 min steps.

## Safety facts check (self-check, 5 November; Codex to confirm)

- **Hot crucible, triangle and tripod:** burns; controls tongs, heatproof mat, cooling time. Standard school practice.
- **Strong heating of copper sulfate:** decomposition releases sulfur oxides (irritating); control: small gentle flame. Matches ws-v01 author note c.
- **Copper(II) sulfate pentahydrate:** harmful if swallowed; skin and serious eye irritation; very toxic to aquatic life with long-lasting effects (author note c). Controls: safety glasses before lighting; no food or drink; wash hands; residue to a labelled waste container.
- **Spitting crystals:** lid slightly ajar.
- Footer "your teacher approves the plan; follow your school's risk assessment" on every risk screen. No new safety rule is invented.

## Memory aid check

- **"Change one, measure one, control the rest, and repeat the whole thing."** Written for this video. Meaning, as said in scene 10: one independent variable, one dependent variable, every other variable controlled, and reliability from repeating the whole experiment. Assumptions checked: "control the rest" means variables that could change the result, not every conceivable condition; "repeat the whole thing" is the series' definition of reliable (not repeated readings of one sample, which is precision, ws-v03). It does not cover risk or ethics, so the scene 10 narration adds them after it. It helps a new case: A1 (the sand and salt plan) applies it directly.
- **Considered, not used:** "Fair test" alone (Stage 5 term; it says nothing about reliability or equipment).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,345 characters**, 16 scenes. At 13.3 characters per second the speech is about 477 s; add about 10 s of holds and settling (the rushed test in 1, the control readout in 3, the step rulers in 6, the trial readout in 9), 2 s for the memory hold, 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 568 s (9.5 minutes)**.

## Scene list and build ids

Lesson key `c-y11-ws-v02` (route chem-y11-ws-v02; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v02`.

In order (16 scene headings, all `### N.`): hook, variables-validity, experimental-control, reliable-data, which-balance, equipment, risks, ethics, trial-evidence, plan-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except which-balance (3 s countdown inside an explain scene), attempt-1, attempt-2 and key-notes (`hold`). Transitions: ws-v01's final frame into scene 1 by camera continue (the clipboard grows into `PlanBoard`); 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 clear change; 5 to 6 camera continue; 6 to 7 clear change (risk board); 7 to 8 camera continue; 8 to 9 clear change (the balance); 9 to 10 camera pull back to `PlanBoard`; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: which-balance (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-ws-v02-learning-review.md`, `checks/c-y11-ws-v02-science-check.md`.

## Assets

Have (inspected 5 November on a paper contact sheet; uniform scaling only):
- `public/assets/chemistry/m8-desiccator-v1.png` (2000 × 2000; glass desiccator with blue desiccant and a dish on the plate): scene 9, final frame.
- `public/assets/chemistry/m5x-safety-glasses-v1.png` (2000 × 2000): scene 7.
- `public/assets/chemistry/m5x-waste-bottle-v1.png` (2000 × 2000; amber bottle with a blank label): scenes 8, 14 (coded label text over the blank label).
- `public/assets/chemistry/m5-g02b-open-crucible-v1.png`: scene 9.
- `public/assets/biology/m5x-clipboard-sheet-v1.png`: scene 1 (grows into `PlanBoard`).
- From v07 (requested): `y11c-cuso4-crucible-blue-lit-v1.png` (scene 1). From v06 (requested): `y11c-top-pan-balance-v1.png` (scenes 1, 5, 6, 9, final frame). From ws-v01 (requested): `y11c-cuso4-crucible-black-v1.png` (scenes 2, 14).
- **Inspected, not used:** `phys-y11-top-pan-balance-v1.png` (a flat kitchen-style scale; the chemistry balance plate from v06 is the series' balance); `m5x-gloves-v1.png` (reads as hands; not needed); `m7-fume-cupboard-v1.png` (the plan's gentle flame removes the gas hazard, so no fume cupboard is required; a school may still choose one).

Need (new plates, Codex):
1. `y11c-cuso4-crucible-lid-v1.png`: scenes 6, 9, final frame, and ws-v03. Essential (the lid is a planned control and an accuracy step).
2. `y11c-crucible-tongs-v1.png`: scenes 6, 7, and ws-v03. Essential (the main burn control).
3. `y11c-heatproof-mat-v1.png`: scenes 6, 7, and ws-v03. Wanted; fallback: a coded grey square tagged "heatproof mat" (weak; the plate is preferred).
4. Optional, `y11c-crucible-empty-lid-v1.png`: scene 3. Fallback: a coded fade of the crystal layer.

Coded: `PlanBoard`, variable tags and tooltips, timers and readouts, zigzag plot, prediction sketch and run dots, step rulers, `RiskMatrix` and risk rows, sink outline, logbook strip, water molecules, blue tint overlay, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry WS v02; shared with ws-v03)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-ws-v02.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and clean edges with no coloured fringe or halo (check on a black and a white background), ink and watercolour in the house style matched to `m5-g02b-open-crucible-v1.png` and `m8-desiccator-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-cuso4-crucible-lid-v1.png` (1280 × 1920 px, the canvas of `m5-g02b-open-crucible-v1.png`): edit of v07's unlit blue-crystal plate (`y11c-cuso4-crucible-blue-v1.png`; if not yet painted, of `m5-g02b-open-crucible-v1.png` with the burner unlit and blue crystals), identical in every line, with a matching white porcelain crucible lid resting slightly ajar on the rim (a small visible gap on one side). It must also read correctly when the crystal layer is replaced by white powder (supply a second file `y11c-cuso4-crucible-lid-white-v1.png` with white powder and the same lid).
2. `y11c-crucible-tongs-v1.png` (1800 × 800 px, landscape): a pair of steel crucible tongs lying closed on their side, seen from a low three-quarter view, with curved gripping tips; no hand.
3. `y11c-heatproof-mat-v1.png` (1800 × 1200 px): a square grey heatproof (ceramic-fibre or mineral-board) mat seen from a low three-quarter view, slightly worn, flat enough that the crucible and tongs can sit on it at the same scale.
4. Optional, `y11c-crucible-empty-lid-v1.png`: plate 1 with the crucible empty.

Report inspection on the paper and dark board backgrounds at about 300 px wide and the overlay check of plate 1 against v07's crucible plates. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-ws-v02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry and safety claims: strong heating decomposes copper sulfate and releases irritating gases; anhydrous copper sulfate takes up water from the air; a desiccator keeps the air dry; copper(II) sulfate pentahydrate's hazards (author note c); warmer water dissolves slightly more salt.
3. Confirm the definitions of valid and reliable match `chem-y11-ws-v01.md` Decisions and `chem-y11-ws-v03.md`.
4. Confirm every data item carries the "illustrative data" tag.
5. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
6. Confirm the three syllabus quotes match `chem-2017-y11.json` exactly.
7. Confirm no person, hand or face is drawn or requested (tongs lie on the mat; never held).
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Confirm the opening frame equals ws-v01's final frame and the final frame matches ws-v03's opening.

## YouTube metadata (draft)

Title: Planning a Chemistry Investigation: Valid, Reliable and Safe | Year 11 Chemistry

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

A rushed test says copper sulfate crystals lost less water after four minutes than after two. Is the hypothesis wrong, or the test? See how a plan decides whether data can be used: independent, dependent and controlled variables, each with a reason; an experimental control; what valid and reliable really mean; choosing a balance fine enough for the change; a risk assessment with likelihood and consequence; ethical issues such as toxic waste and honest records; and how a trial run changes the plan. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Planning Investigations.
Syllabus content (NSW Chemistry Stage 6):
"assess risks, consider ethical issues and select appropriate materials and technologies when designing and planning an investigation (ACSCH031, ACSCH097)"
"justify and evaluate the use of variables and experimental controls to ensure that a valid procedure is developed that allows for the reliable collection of data (ACSCH002)"
"evaluate and modify an investigation in response to new evidence"

Previous: How new evidence improves a testable chemistry question. Next: Collecting and sourcing chemistry data safely and accurately.

#Year11Chemistry #Chemistry #WorkingScientifically #HSCScience

## Open decisions

- **1. Definitions (root).** Valid and reliable as stated (series set; `chem-y11-ws-v01.md` open decision 2).
- **2. Plates (root).** Three new plates (lidded crucible pair, tongs, heatproof mat) plus one optional (empty lidded crucible). The tongs and mat are shared with ws-v03.
- **3. Heat source (root).** A small blue Bunsen flame is planned, matching v07's crucible plates. A hotplate or oven would control temperature better but is less common for crucible work; ws-v03 does not depend on the choice.
- **4. Hook data (root).** Three illustrative "rushed" readings (19, 15, 31%). They are invented to show a confounded test and are tagged.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is "valid" clear before the variables; does the experimental control read as different from a controlled variable; does the step-counting argument land without uncertainty language; is the risk scene brief enough; is the trial-run modification felt as necessary), then the science check (author notes c, d) and Codex error check.
- Checker output (5 November): narration 6,345 characters; per scene (1 to 16): 518, 726, 405, 402, 207, 487, 535, 403, 488, 243, 337, 450, 319, 419, 331, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (6 November 2026, brief 178 repairs)

Findings from `../checks/c-y11-ws-v02-learning-review.md` and `../checks/c-y11-ws-v02-science-check.md` (status.md, "Codex hand-in: brief 178").

1. Scene 2 (should fix): each control tag writes beside the part it controls as named and the previous one dims; the crucible and "2.50 g" stay visible; the short PlanBoard recap assembles only after the "water" cause. No speech or duration added.
2. Count (should fix): headline corrected to the joined parser count: 6,360 (was stated as 6,345), about 569.1 s.

Narration: 6,360 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; 0 against Revision 1's 6,360), about 569.1 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-ws-v02-rev2-error-check.md`): 0 blockers, 0 should fix. Nothing to resolve.
- Headline count restated as the sum of scene strings: 6,345 characters over 16 scenes (the earlier 6,360 included the 15 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).
