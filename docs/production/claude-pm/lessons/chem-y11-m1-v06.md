# Year 11 Chemistry M1 V06: Percentage composition of a separated mixture. After a separation, what fraction of the mixture's mass came from each component, and what does missing mass mean? (design)

Status: Revision 3 (12 Nov 2026): visual upgrade to maths-visual-standard.md, visuals only. Narration unchanged, so the brief 236 voicing is not affected. Needs a Codex error check of the visual plan before plates and build. Previously Revision 2 (7 Nov 2026): brief 177 reviews clean at Revision 1, headline restated as the sum of scene strings, ready to voice.

Narration 6,041 characters (sum of scene strings; 6,056 with joining spaces), 16 scenes, about 542 s (9.0 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: sixth video of Year 11 Chemistry (2017 syllabus), Module 1 (Properties and Structure of Matter). Templates: `phys-y11-fa1-v01.md` (structure, voice, Decisions, Numbers used, length estimate, opening and final frames), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief). Chemistry conventions: `chem-m8-p02.md`, `chem-m5-g02.md`. Pre-design pack: `../pre-design/chem-y11/chem-y11-m1-v06.md` (every number recalculated below). Route entry: `chem-y11-m1-v06` in `../../programme/chem-y11-route-inputs.json`. Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson03.sa.html` (SHA256 `b9de2bcc1ecf2856b4635cbad03877b4dd6218dd51d5b0b5d7bb38a1e55e423f`, recomputed, matches the route) and `.../module1/lesson05.sa.html` (SHA256 `c8b8b3adf2bc76e424505bb6e88bafecc0cd7fa9784e57dd9400175521a4222d`, recomputed, matches). Site corrections applied: `../site-corrections-chem-y11.md` items 6 and 8 (neither sentence is repeated here; see Decisions).

Owner rules applied: one main learner question; no people, hands, faces or body outlines (the site's "student" exists only in question text; apparatus is shown alone); real apparatus as painted plates, readouts, bars and working rows coded; plates never stretched; one reasoning stage at a time with a short task strip, an equation strip and grouped givens; the in-teaching prediction uses a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; v03 (filter and crystallise) recalled in fast forward, not re-taught; captions are YouTube CC only, so nothing sits in the bottom 12% of the frame.

Syllabus content (Chemistry Stage 6, 2017, Module 1; `C1-IQ1-01` is this project's local ledger ID, not an official code), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "explore homogeneous mixtures and heterogeneous mixtures through practical investigations:"
  - "using separation techniques based on physical properties (ACSCH026)"
  - "calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** starts from v05's handoff (chromatography says which components, not how much). Uses the v03 separation (filter, wash and dry the sand; evaporate the filtrate to recover the salt) only as recalled context. Teaches weighing by difference, percentage by mass of each recovered component using the original mixture mass, the conservation check, percentage recovery and loss, and the "extra mass" signal from incomplete drying, with drying to constant mass. Stops at mass accounting. Not taught: percentage composition from a formula (v07, named in the handoff); gravimetric analysis and inferring an ion's mass from a precipitate (needs the mole, Module 2); purity checks on recovered salt from a multi-salt solution (site correction 8; the mixture here contains only sand and sodium chloride).

## Decisions

- **Learner question (route wording extended; open decision 1).** Route: "What fraction of a separated mixture came from each component?" Proposed: "After a separation, what fraction of the mixture's mass came from each component, and what does missing mass mean?" The route stop explicitly asks to "account for recovery/loss", so the second clause names it. The answer, in order: weigh each separated component by difference (3); divide by the original mixture mass (4, 5); physical separation conserves matter, so complete recovery adds to 100% (5); a total below 100% means mass was lost, and the loss has ordinary causes, not a third substance (6, 7); a total above 100% means something extra was weighed, usually water, fixed by drying to constant mass (8, 9).
- **Opening frame (reconciled by root, 5 November).** v06 opens on v05's actual final frame (`chem-y11-m1-v05.md` "Final frame"): dimmed black-ink chromatogram at left, blank balance centre, sand and salt watch glasses at right, "Next" chip above. v05 used a black ink, so the first sentence stands. Scene 1's visual clears the balance and watch glasses on "together".
- **Worked case (new data; the site gives none).** The site's separation worked examples (`we-chem-y11-m1-l03-1`, muddy water; `we-chem-y11-m1-l05-2`, ocean water) choose techniques but give no masses, so no site numbers exist to reuse. The pack confirms this and warns against inventing data labelled as a site example. The worked case is therefore labelled on screen "example data" and uses the pack's first candidate (20.00 g mixture; 6.00 g sand; 14.00 g salt; written to two decimal places, as a school electronic balance reads), and the pack's second candidate for the loss case (25.00 g; 8.00 g; 16.00 g). The two attempts are new.
- **Sand and table salt, not ocean water.** The site's ocean-water case contains dissolved MgCl2 as well as NaCl, and correction 8 notes that evaporation cannot then give pure NaCl. A dry sand and salt mixture has one soluble component, so the evaporated solid is the salt and nothing else. This keeps the calculation honest without a purity detour.
- **Evaporation, not crystallisation, for the mass.** v03 teaches crystallisation for purity; the site (`l03-crystallisation-title`) notes evaporation to dryness recovers more solid, and crystallisation leaves some salt in the cooled solution. For a mass balance, recovering all the salt matters, so scene 2 heats the filtrate gently until most water has gone, then finishes drying somewhere warm (the site's safe-heating card: heat gently, stop before the basin goes dry, so the solution cannot spit). Scene 7 uses spitting as a named loss.
- **Weighing by difference (practical skill, scene 3).** The salt cannot be tipped onto the pan without loss, so it is weighed in its basin: the container is weighed empty and with the solid. Basin 45.12 g, basin and salt 59.12 g, salt 14.00 g. The sand was dried on a watch glass in v03 (its final products), so it is weighed there: watch glass 21.35 g, watch glass and dry sand 27.35 g, sand 6.00 g. This makes the measured quantities, not just the answer, visible.
- **Why the original mass is the denominator (pack misconception).** Said as a cause: the question asks what fraction of the original mixture each component was, so the whole is what was weighed first. The classic alternative (dividing by the recovered total) is crossed in feedback 1 because it hides the loss.
- **Conservation as the check (scene 5).** Filtering, washing and evaporating are physical changes that move matter between containers; they neither create nor destroy it. So the recovered masses add to the starting mass only if nothing is lost or added. The water used to dissolve and rinse is removed again before weighing, which is why drying matters (scene 9).
- **Loss is not a new component (pack misconception).** Scene 7 names three ordinary losses (solution left wetting glassware and filter paper, spitting from an overheated basin, crystals left on the rod or basin). The site's gravimetric error list (`l05-gravimetric-analysis-title`, "precipitate loss during transfer", "incomplete drying") is the source of the loss and extra-mass framing; the gravimetric method itself is not taught.
- **In-teaching prediction (3 s countdown, scenes 8 and 9).** Damp sand: is its percentage too high or too low, and what does the total become? The answer generalises: below 100% means lost, above 100% means extra was weighed, usually water. Drying to constant mass (site: "weigh, dry more, reweigh, repeat until mass is stable") is the fix. Cooling before weighing is included because a hot container gives an unstable reading (author note b).
- **Memory aid (new; see "Memory aid check"):** "Divide by what you started with, then account for the rest." Introduced after the method has been used twice.
- **Attempts (original, HSC style).** A1: chalk and salt, 15.00 g, 4.20 g and 10.50 g; percentages and the unrecovered percentage (chalk is insoluble calcium carbonate, from the site's activity 1 chalk mixture). Crossed: dividing by the recovered total (28.6% and 71.4%). A2: a damp-sand case that totals 103.7%, asking for the cause and the method change. Crossed: "the extra 3.7% is a third substance".
- **Mistake scene:** none separate. "Divide by the recovered total" (crossed in feedback 1); "missing mass is a third substance" (7, crossed in feedback 2 in its extra-mass form); "the balance only weighs the solid" (3: weighing by difference); "percentages that don't add to 100 mean the calculation is wrong" (6, 9: they are evidence about the method).
- **Significant figures.** Masses are given to two decimal places, as read from a 0.01 g balance; every percentage is given to three significant figures (for example 30.0%, 2.0% for the small loss, which is 0.30 g over 15.00 g; author note c). Narration says "point zero zero" where the screen shows it, so the voice and the screen agree.
- **Handoff (route next).** Scene 15 returns to the salt: the mixture was 70.0% salt, but salt is a compound (sodium and chlorine bonded in a fixed ratio, v01's idea, recalled in one clause), so filtering can't split it. The final frame poses v07's question: how does a formula alone give the percentage of each element?
- **Site sources used:** `l03-filtration-title` (residue, filtrate, rinse the residue); `l03-crystallisation-title` (evaporation versus crystallisation recovery; safe heating); `l03-comparing-separation-techniques-physical-met-title` (filter first, then recover the dissolved solid); `l05-choosing-the-right-separation-technique-title` (sequence of techniques; evaluate by completeness); `l05-percentage-composition-by-mass-title` (the part-over-whole formula; the "% by weight" syllabus wording); `l05-gravimetric-analysis-title` error list (loss and incomplete drying), as framing only. Not used: the BaSO4 and AgCl calculations (mole ratios, deferred by the route); the ocean-water MgCl2 case (correction 8).
- **Site notes (quoted from the site, read 5 November; already logged in `../site-corrections-chem-y11.md`, so nothing new to log):** item 8 (`we-chem-y11-m1-l05-2`, "NaCl's solubility decreases on cooling, so ... cool slowly to crystallise NaCl") and item 6 (`we-chem-y11-m1-l03-2`, "CuSO₄ molecules (or ions) fit neatly into the crystal lattice"). Neither claim is repeated. One new precision note for root: `l05-percentage-composition-by-mass-title` writes formula masses in "g mol⁻¹" in a Module 1 lesson whose own gravimetric card says the mole is not introduced until Module 2. v07 uses unitless relative formula mass (see v07 Decisions).
- **Cause chain taught, in order:** (1) chromatography says which, weighing says how much (1); (2) the separation puts each component in its own container (2); (3) weighing by difference gives the component's own mass (3); (4) percentage by mass is part over the original whole (4, 5); (5) physical separation conserves matter, so the parts add back to the whole (5); (6) a shortfall is loss with ordinary causes (6, 7); (7) an excess is extra mass weighed, usually water, fixed by drying to constant mass (8, 9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work; earlier videos v01 (element, compound, mixture), v03 (filtration and crystallisation) and v05 (chromatography), each named, not re-taught.
- **Learner-visible vocabulary (plain meaning at first use):** residue (the solid left on the filter paper, 2); filtrate (the liquid that passes through, 2); weighing by difference (weigh the container with the solid, then empty, and subtract, 3); percentage by mass (component mass divided by the whole mixture's mass, times 100; the syllabus says "by weight", 4); physical change (matter moves or changes state without new substances forming, 5, recalled from Stage 5); percentage recovery (how much of the starting mass you got back, 6); constant mass (two readings in a row that match after reheating, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **process strip** (scene 2: plates slide through the four separation stages, each with a short label); **balance readout overlay** (scenes 3, 9: coded digits in the blank display window of the new balance plate, ticking from 0.00 to the reading, with a "tare" chip never used: weighing by difference is shown instead); **subtraction rows** (scene 3); **mass accounting bar** (scenes 4 to 9, 12, 14: one horizontal bar the width of the starting mass, filled left to right by coloured segments for each recovered component, with a rose hatched "missing" gap or a teal "extra" overhang beyond the end line); **calculation layout** (task strip, equation strip, grouped givens and working rows as in `math-a12-d10.md`); **loss markers** (scene 7: small rose arrows pointing at named spots on the plates); `Countdown` (3 s in scene 8; 10 s in scenes 11 and 13), `QuestionCard` (subject "Chemistry"), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; apparatus stage on the left two thirds; readouts, working rows and the accounting bar in the right column; the accounting bar sits under the stage once introduced. Colour key below.

Author notes (not learner copy):
(a) Percentage by mass here uses the original mixture mass as the denominator, the usual school convention and the pack's rule. Some lab reports also normalise to the recovered total to estimate composition; that is not taught, because it hides loss.
(b) Cooling before weighing: a warm container sets up air currents and can read low or drift; "heat, cool, weigh" is standard drying-to-constant-mass practice. No specific tolerance is stated; "two readings match" means to the balance's last digit, or within a tolerance the teacher sets.
(c) Two-decimal masses: 20.00, 6.00, 14.00, 25.00, 8.00, 16.00, 15.00, 4.20, 10.50, 10.00, 4.12, 6.25 g. The differences 1.00 g and 0.30 g are known to 0.01 g, so 4.0% and 2.0% are the honest precision (shown as 4.0% and 2.0%, not 4.00%).
(d) Unwashed sand would carry dried salt, raising the sand's percentage and lowering the salt's while the total stays near 100%. Not taught (it is v03's reason to rinse); scene 2 mentions the rinse so this error is prevented, not analysed.
(e) Damp sand in A2: the total over 100% shows extra mass but not which sample carried it; the question's "dried for only ten minutes" is the given that points to the sand. The model answer says "most likely".
(f) Pronunciations: "twenty point zero zero grams"; "percentage by mass"; "evaporating basin".

Main question: *After a separation, what fraction of the mixture's mass came from each component, and what does missing mass mean?*
Entry knowledge: Stage 5 particle model and physical change; proportions; v01 (mixture, compound), v03 (filtration and evaporation), v05 (chromatography).
Stops after: weighing by difference, percentage by mass of each component from the original mass, the conservation check, recovery and loss, extra mass and drying to constant mass. No formula-based percentages, moles or gravimetric calculations.
Handoff: v07, percentage composition from a chemical formula.

## Visual upgrade (Revision 3)

Each scene below keeps its Visual line and gains an "Upgrade (Revision 3)" paragraph. The Upgrade paragraph adds to the Visual and wins wherever the two differ. No narration line changed.

- **Anchor.** The video opens on v05's final frame, so the painted balance and the watch glasses of sand and salt are on screen from the first frame; the painted beaker of dry sand and salt (`y11c-sand-salt-dry-beaker-v1.png`, about 420 px) replaces them at about 14 s with its mass beside it. The real mixture, the real balance (`y11c-top-pan-balance-v1.png`) and the real products carry every number.
- **Simulation: the live accounting bar.** One mass model drives the balance display, the working rows, the accounting bar and a "total" readout (52 px), so they cannot disagree. The display ticks to each reading before it is spoken (scene 3); the bar fills as each percentage lands (scenes 4 and 6); in scene 9 the damp sand dries on one clock: display 6.40 g → 6.12 g → 6.00 g → 6.00 g, sand 32.0% → 30.6% → 30.0%, total 102.0% → 100.6% → 100.0%, with the teal overhang shrinking to nothing.
- **Colour key (fixed for the whole video).** Measured masses and givens navy; percentages amber; sand sand-brown; salt pale grey-white with an ink outline; missing mass rose hatching; extra mass (water) teal; a framed answer green with a green tick; a crossed mistake red with a red hand tag. Hand tags take the colour of the idea they mark. Earlier rows stay solid at a smaller size instead of dimming, and every tag the Visual lines call "grey" is dark ink.
- **Type sizes (1080p).** Heading 60 px; the balance display, the current working row, the total readout and framed answers 52 px, never under 44; question-card sentences 38 px; givens, bar labels and process labels 34 px; supporting lines 30 px or more; hand tags 42 px; key notes 34 px; nothing a student must read under 26 px.
- **Board stages and cuts.** (A) v05's bench, then the mixture beaker, scene 1 (about 34 s); (B) the process strip, scene 2 (about 38 s); (C) the balance close up, scene 3 (about 40 s); (D) calculation board with the 20.00 g bar, scene 4 (about 35 s); (E) conservation board, scene 5 (about 32 s): three painted containers across the board; (F) calculation board with the 25.00 g bar, scene 6 (about 34 s); (G) loss board, scene 7 (about 33 s): the process plates large, with loss markers; (H) balance and bar, scenes 8 and 9 (about 48 s); (I) the memory card, scene 10 (about 17 s); question and feedback cards; the handoff; the notes board. Revision 2 kept the calculation layout through scenes 4 to 7 (about 134 s); stages E and G are the new cuts.
- **Question cards.** Each attempt card arrives whole (38 px) with a picture from its first frame and nothing answer-bearing. Each feedback scene keeps a navy givens strip, frames the answer in green and crosses one classic mistake in red.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (new for the Year 11 Chemistry Module 1 calculation videos; keep across v06 and v07): measured masses navy (`C.blue`); percentages amber (`AMBER`); missing mass rose hatching (`C.rose`); extra mass (water) teal; givens navy in a grouped box; earlier results dimmed; crossed chips red strike. Sand segment of the accounting bar sand-brown, salt segment pale grey-white with an ink outline, so both read on paper. Screen units: g and %. Paper background and handwritten heading face, as the explainer house style.

### 1. hook: which, but how much?
> Last time, chromatography showed which dyes were in an ink, but not how much of each one was there. Today we'll answer the how much question, with a mixture we can actually weigh. Here's twenty point zero zero grams of dry sand and table salt, stirred **together**. After we separate it, what fraction of this mixture was sand, and what fraction was **salt**? The answer comes from two kinds of measurement: the mass you start with, and the masses you get **back**.

Visual: opens on v05's final frame exactly (`chem-y11-m1-v05.md` "Final frame": dimmed black-ink chromatogram at left tagged "which components?", the balance plate centre with a blank "– – – . – – g" readout, the sand and salt watch glasses at right with the amber chip "how much of each?", and the "Next" chip above). On the first sentence the "Next" chip fades and the chromatogram's tag becomes "which: yes" with a "how much: ?" tag beside it. On "together" the chromatogram shrinks away to a small corner thumbnail, the balance and watch glasses slide off to the right (both return in scenes 2 and 3), and the new plate `y11c-sand-salt-dry-beaker-v1.png` (a small beaker of dry sand and salt) slides in at the left; a navy readout writes beside it "mixture: 20.00 g" with a small grey label "example data". On "salt" two empty dashed boxes write in the right column, "sand: ? %" and "salt: ? %", and the heading writes on: "Percentage by mass: how much of each?". On "back" two navy labels write above the boxes: "mass at the start" (pointing at 20.00 g) and "masses you get back" (pointing at the empty boxes).

Upgrade (Revision 3): The balance and watch glasses are solid from the first frame (v05's final frame, drawn in full ink). The mixture beaker is about 420 px, solid when it arrives, and its readout "mixture: 20.00 g" is 52 px; the label "example data" is dark ink at 30 px. On "how much of each one was there" an amber hand tag "how much?" writes beside the chromatogram tag. On "the mass you start with" a navy hand tag "start" writes with a pen arrow to 20.00 g; on "the masses you get back" a navy hand tag "back" writes with a pen bracket over the two empty boxes.

### 2. the separation, in fast forward
> You've seen this separation before, so here it is in fast forward. Add water, and the salt dissolves while the sand **doesn't**. Pour it through filter paper, and the sand stays behind as the **residue**, while the salty liquid, the filtrate, runs through. Rinse the sand with a little water to wash off any salt, then dry it. The filtrate goes into an evaporating basin, and we heat it gently until most of the water has gone, then leave it somewhere warm to finish drying. Now each component sits in its own **container**.

Visual: a process strip runs left to right along the stage, each step a plate with a short label written as it is spoken (v03's plates, reused). On "doesn't" `y11c-sand-saltwater-beaker-v1.png` takes the first slot (sand settled, salt dissolved), label "1 dissolve". On "residue" `y11c-filter-funnel-flask-sand-v1.png` takes the next slot; a `PenArrow` labels "residue: sand" on the paper and "filtrate: salt solution" on the flask, label "2 filter". The rinse sentence draws three coded water drops onto the sand, then the sand moves to `y11c-watch-glass-sand-v1.png`, label "3 rinse and dry". On "evaporating basin" `y11c-evaporating-basin-hotplate-v1.png` takes the last slot (painted steam wisps, coded wisps thinning out), with a grey chip "heat gently, stop before it spits" and label "4 evaporate"; it cross-fades to `y11c-evaporating-basin-crystals-v1.png` as the sentence ends. On "container" the strip collapses to two plates side by side, the sand watch glass and the basin of dry salt, each with an empty navy readout "? g".

Upgrade (Revision 3): The four slots of the process strip are on the board from the first frame as numbered frames, and each plate (about 380 px tall) lands solid on its cue; step labels are dark ink at 34 px. On "the sand stays behind as the residue" a sand-brown hand tag "sand stays" writes with a pen arrow to the paper. On "runs through" an ink hand tag "salt goes through, dissolved" writes with a pen arrow down to the flask. The chip "heat gently, stop before it spits" is dark ink. On "its own container" the two readouts "? g" are 52 px with a pen ring round each.

### 3. weighing by difference
> Here's a practical detail that matters. You can't tip the salt onto the balance, so you weigh its container **too**. The empty basin was forty-five point one two grams. With the dry salt in it, it reads fifty-nine point one two **grams**. Subtract, and the salt alone is fourteen point zero zero **grams**. That's called weighing by difference. The dried sand gets the same treatment on its watch glass: twenty-seven point three five grams, minus twenty-one point three five grams for the empty glass, gives six point zero zero grams of **sand**.

Visual: camera pushes into the new balance plate `y11c-top-pan-balance-v1.png` at the centre of the stage. On "too" the empty basin plate (`y11c-evaporating-basin-empty-v1.png`, new, aligned with v03's basin pair) settles on the pan and the coded display ticks to "45.12 g"; a navy row writes in the right column "empty basin 45.12 g". On "grams" (first) the basin cross-fades to `y11c-evaporating-basin-crystals-v1.png` and the display ticks to "59.12 g"; row "basin + salt 59.12 g". On "grams" (second) a subtraction line draws and "salt = 59.12 − 45.12 = 14.00 g" writes, bright; the earlier two rows dim. The phrase "weighing by difference" writes as a grey tag beside the rows. On "sand" the basin lifts off; the empty watch glass (`y11c-watch-glass-v1.png`) weighs "21.35 g", then the sand watch glass (`y11c-watch-glass-sand-v1.png`) weighs "27.35 g"; the row "sand = 27.35 − 21.35 = 6.00 g" writes. The boxes from scene 1 now read "sand: 6.00 g" and "salt: 14.00 g".

Upgrade (Revision 3): The balance (about 640 px wide) is solid from the first frame and its display is a live readout at 52 px. On "so you weigh its container too" a navy hand tag "container first" writes beside the empty basin. The first two rows stay solid at 38 px when the subtraction lands (not dimmed). On "the salt alone is fourteen point zero zero grams" the result "14.00 g" is framed in green with a tick and a navy pen bracket joins the two readings it came from. On "weighing by difference" the tag is navy hand lettering at 42 px. On "gives six point zero zero grams of sand" the result "6.00 g" is framed in green.

### 4. percentage by mass
> Now the fraction. Percentage by mass, which the syllabus calls percentage by weight, is the mass of one component, divided by the mass of the whole mixture, times one **hundred**. For the sand, that's six point zero zero over twenty point zero zero, times a hundred, which is thirty point zero **percent**. For the salt, fourteen point zero zero over twenty point zero zero gives seventy point zero **percent**. And together they make one hundred percent, which is a useful **check**.

Visual: board resets to the calculation layout. Task strip: "Find the percentage by mass of each component". On "hundred" the equation strip writes "% by mass = (mass of component ÷ mass of original mixture) × 100", with "original mixture" underlined navy. Givens group (navy): "mixture 20.00 g; sand 6.00 g; salt 14.00 g". The mass accounting bar draws under the givens: an outline the length of 20.00 g with an end line. On "percent" (first) row "sand: 6.00 ÷ 20.00 × 100 = 30.0%" writes and a sand-brown segment fills 30% of the bar, labelled "30.0%". On "percent" (second) row "salt: 14.00 ÷ 20.00 × 100 = 70.0%" writes; the salt segment fills the rest of the bar, labelled "70.0%". On "check" a chip "30.0% + 70.0% = 100.0%" writes and the bar's end line ticks green.

Upgrade (Revision 3): The task strip, the navy givens card and the empty bar outline are on the board from the first frame, with the mixture beaker as a small picture (about 220 px) beside the givens. On "divided by the mass of the whole mixture" a navy hand tag "the whole goes underneath" writes with a pen arrow to the denominator. The two working rows are 52 px; "30.0%" and "70.0%" are framed in green as they land. On "which is a useful check" the sum chip is 44 px and takes a green pen tick with a green hand tag "adds to 100".

### 5. why the starting mass, and why it adds up
> Why divide by the twenty grams you started with? Because the question is about the original mixture, so the whole is what you weighed first. And here's why the check works. Filtering and evaporating are physical changes. They move the sand and the salt into different containers, but they don't create or destroy any **matter**. So if nothing is lost along the way, the masses you get back must add up to the mass you started **with**.

Visual: the equation strip's "mass of original mixture" glows; a scribble circle rings "20.00 g" in the givens, tagged "the whole: weighed first". The bar splits into its two segments, which slide back into the small beaker thumbnail at the left. On "matter" a small coded diagram shows grains (brown) and salt particles (grey) moving between three outlined containers (beaker, funnel, basin), the count of each staying the same, with a grey tag "physical change: nothing made, nothing destroyed". On "with" the two segments slide back out and rejoin end to end, exactly filling the 20.00 g outline, and a chip "6.00 g + 14.00 g = 20.00 g" writes.

Upgrade (Revision 3): Board change to the conservation board, solid from the first frame: three painted containers across the board (`y11c-sand-salt-dry-beaker-v1.png`, `y11c-filter-funnel-flask-sand-v1.png` and `y11c-evaporating-basin-crystals-v1.png`, about 360 px each) replace the coded outlined containers, with the 20.00 g bar under them. A live readout holds "sand 6.00 g + salt 14.00 g = 20.00 g" (52 px) while coded sand and salt tokens move from container to container. On "the whole is what you weighed first" the pen ring round "20.00 g" takes a navy hand tag "the whole". On "they don't create or destroy any matter" an ink hand tag "moved, not made" writes with a pen arrow following one token. On "must add up to the mass you started with" the rejoined bar takes a green pen tick.

### 6. a real run: some mass goes missing
> Real practicals are rarely that tidy. Another group starts with twenty-five point zero zero grams of the same kind of mixture. They get back eight point zero zero grams of sand, and sixteen point zero zero grams of **salt**. The sand is thirty-two point zero percent, and the salt is sixty-four point zero **percent**. Add those, and you've only accounted for ninety-six point zero percent. One gram, which is four point zero percent of the mixture, is **missing**.

Visual: earlier rows clear; the task strip stays. Givens group rewrites (navy): "mixture 25.00 g; sand 8.00 g; salt 16.00 g" (written on "salt"), with a grey "example data" tag. A new accounting bar outline the length of 25.00 g draws. On "percent" rows "sand: 8.00 ÷ 25.00 × 100 = 32.0%" and "salt: 16.00 ÷ 25.00 × 100 = 64.0%" write one after the other, each filling its segment; the bar stops short of the end line. On "missing" the gap fills with rose hatching, labelled "missing 1.00 g = 4.0%"; a chip writes "recovered: 96.0%".

Upgrade (Revision 3): Board change back to the calculation board with the new givens card ("mixture 25.00 g | sand 8.00 g | salt 16.00 g") and the empty 25.00 g bar from the first frame. The two working rows are 52 px with "32.0%" and "64.0%" framed in amber as partial results. On "you've only accounted for ninety-six point zero percent" the total readout reads "96.0%" and a chip "÷ 24.00 g (what came back): 33.3% + 66.7% = 100%" fades in and is struck in red, with a red hand tag "that hides the loss". On "missing" the rose gap takes a rose hand tag "1.00 g short" with a pen bracket.

### 7. where the missing mass went
> So where did it go? It didn't vanish, and it isn't a mystery third substance. It's mass that never made it into the final containers. Some salty solution stays behind, wetting the beaker, the funnel and the filter **paper**. A little solution can spit out of the basin if it's heated too **hard**. And some crystals stay stuck to the glass rod or the **basin**. So report the missing percentage honestly, and name where the losses most likely **happened**.

Visual: the process strip from scene 2 returns small above the bar. A chip "a third substance?" fades in on the first sentence and is crossed (red strike, caption "missing mass is lost, not new"). On "paper" rose loss markers point at the beaker wall and the filter paper, with a few coded wet droplets. On "hard" coded droplets jump from the basin plate, tagged "spitting". On "basin" a rose marker points at a few coded crystals on the basin rim and a coded glass rod. On "happened" the three markers become three short rows under the bar: "solution left on glassware and paper", "spitting during heating", "crystals left on rod and basin", and the hatched gap glows once.

Upgrade (Revision 3): Board change to the loss board, solid from the first frame: the scene 2 process plates large across the board (about 360 px each), with the 25.00 g bar and its rose gap under them. On "it isn't a mystery third substance" the chip is struck in red with a red hand tag "lost, not new". Each loss marker is a rose pen arrow with a rose hand tag: "left wetting the glass and paper" on "paper", "spat out" on "hard", "stuck crystals" on "basin". On "name where the losses most likely happened" the three rows under the bar are 34 px in dark ink.

### 8. prediction (countdown, 3 seconds)
> Quick prediction. Suppose a group weighs its sand while it's still a little damp. Will the percentage of sand come out too high, or too low? And what will the two percentages add up to? Have a **think**.

Visual: the 20.00 g example returns as givens with its bar (30.0% and 70.0%). The sand watch glass sits on the balance with a coded dark damp patch on the sand and a few water droplets; the display shows "? g". The two questions write as chips: "sand %: too high or too low?" and "total: ? %". On "think" the 3 s `Countdown` ring runs beside them. Nothing else changes.

Upgrade (Revision 3): The balance (about 520 px), the sand watch glass and the 20.00 g bar are on the board from the first frame; the two question chips are 44 px. No hand tags (thinking time).

### 9. extra mass, and drying to constant mass
> Too high. The balance can't tell sand from water, so the water gets counted as **sand**. And that pushes the total above one hundred **percent**. So the total is a clue in both directions. Below one hundred means something was lost. Above one hundred means something extra was weighed, and it's usually **water**. The fix is drying to constant mass. Heat it, let it cool, and weigh it. Then heat and weigh again, until two readings in a row **match**.

Visual: on "sand" the damp sand reading ticks higher than 6.00 g ("6.40 g", illustrative, author note in Numbers used) and the sand segment grows; a teal sliver inside it is labelled "water". On "percent" the bar now overhangs the end line; the overhang is teal, labelled "extra: total above 100%". On "both directions" the scene 6 bar with its rose gap slides in above for comparison; on "water" two tags write: "below 100%: something lost" (rose) and "above 100%: something extra, usually water" (teal). On "match" a small loop diagram draws: "heat → cool → weigh → heat → cool → weigh" with the coded readout going "6.40 g", "6.12 g", "6.00 g", "6.00 g", the last two ringed and tagged "constant mass".

Upgrade (Revision 3): On "Too high" the answer "too high" is framed in green with a tick (52 px). The drying runs as the live accounting bar (see "Simulation"): on "the water gets counted as sand" the display reads 6.40 g, sand reads 32.0% and a teal hand tag "water weighed as sand" writes with a pen ring round the teal sliver; on "above one hundred percent" the total readout reads "102.0%" with a teal pen bracket on the overhang. The two direction tags are 38 px in rose and teal. On "until two readings in a row match" the display steps 6.12 g, 6.00 g, 6.00 g while the total falls to 100.6% and then 100.0%, and the last two readings take a pen ring with a navy hand tag "constant mass".

### 10. one line to remember
> Here's the whole method in one line. Divide by what you started with, then account for the **rest**. Each component's percentage uses the original mass on the bottom, and whatever is left over tells you about loss, or about extra **mass**.

Visual: the board clears to the equation strip and the 25.00 g bar with its rose gap. On "rest" the handwritten line writes large: "Divide by what you started with, then account for the rest." On "mass" a `PenArrow` points from "started with" to the "original mixture" denominator, and a second from "the rest" to the rose gap, which gets a small teal ghost beside it (the extra case). Hold about 2 seconds.

Upgrade (Revision 3): The line sits in a framed memory card (hand lettering, 52 px): navy "Divide by what you started with," rose "then account for the rest." The two pen arrows are navy and rose. The extra-mass case is a solid teal marker beside the gap, not a ghost.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A fifteen point zero zero gram mixture of chalk and table salt is separated. The student recovers four point two zero grams of dry chalk and ten point five zero grams of dry salt. Calculate the percentage by mass of each component in the original mixture, and the percentage that was not recovered. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"), worded as printed: "A 15.00 g mixture of chalk (insoluble) and table salt is separated by filtration and evaporation. The student recovers 4.20 g of dry chalk and 10.50 g of dry salt. (a) Calculate the percentage by mass of each component in the original mixture. (b) Calculate the percentage of the original mass that was not recovered." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no bar, no rows).

Upgrade (Revision 3): The card text is 38 px. From the first frame the card's right side carries the painted top-pan balance (`y11c-top-pan-balance-v1.png`, about 300 px) with a blank display. Nothing answer-bearing.

### 12. feedback 1 (brief)
> Chalk is four point two zero over fifteen point zero zero, times a hundred, which is twenty-eight point zero **percent**. Salt is ten point five zero over fifteen point zero zero, which is seventy point zero **percent**. Together that's ninety-eight point zero percent, so two point zero percent was not **recovered**. The slip to avoid is dividing by fourteen point seven zero, the total you got back. That hides the loss **completely**.

Visual: card shrinks to the top; "15.00 g" in the card is underlined navy on the first sentence. On "percent" (first) row "(a) chalk: 4.20 ÷ 15.00 × 100 = 28.0%" writes and fills its bar segment. On "percent" (second) "salt: 10.50 ÷ 15.00 × 100 = 70.0%". On "recovered" row "(b) 100% − 98.0% = 2.0% not recovered (0.30 g)" with the rose hatched gap. On "completely" a chip "÷ 14.70 g: chalk 28.6%, salt 71.4%" fades in and is crossed (caption "divide by the original 15.00 g"). Hold about 1 second.

Upgrade (Revision 3): A navy givens strip sits under the shrunken card: "mixture 15.00 g | chalk 4.20 g | salt 10.50 g". The working rows are 52 px with "28.0%", "70.0%" and "2.0% not recovered" framed in green as they land. On "completely" the crossed chip is struck in red with a red hand tag "divide by the original 15.00 g".

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A ten point zero zero gram mixture of sand and salt is separated. The sand is dried in an oven for only ten minutes, then weighed at four point one two grams. The dry salt weighs six point two five grams. Calculate the percentage of each component, then explain why the total isn't one hundred percent, and how the method should change. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A 10.00 g mixture of sand and salt is separated. The sand is dried in an oven for 10 minutes and then weighs 4.12 g. The recovered dry salt weighs 6.25 g. (a) Calculate the percentage by mass of each component. (b) Explain why the percentages do not add to 100%, and state how the method should be changed." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

Upgrade (Revision 3): The card text is 38 px. From the first frame the card's right side carries the watch glass of sand (`y11c-watch-glass-sand-v1.png`, about 260 px wide) beside the drying oven (`m8-drying-oven-v1.png`, about 260 px), untagged. Nothing answer-bearing: the sand is painted dry and no reading is shown.

### 14. feedback 2 (brief)
> Sand comes out at forty-one point two percent, and salt at sixty-two point five **percent**. That adds to one hundred and three point seven percent, so something extra was **weighed**. The most likely cause is water left in the sand, because it was dried for only ten minutes. Dry it to constant mass before **weighing**. Calling the extra mass a third substance is the classic **mistake**.

Visual: card shrinks to the top. On "percent" rows "(a) sand: 4.12 ÷ 10.00 × 100 = 41.2%" and "salt: 6.25 ÷ 10.00 × 100 = 62.5%" write, filling a bar that overhangs its end line. On "weighed" the overhang turns teal: "total 103.7%: 0.37 g extra". On the third sentence "only 10 minutes" in the card is underlined; on "weighing" row "(b) water still in the sand; dry to constant mass (heat, cool, weigh until two readings match)". On "mistake" a chip "extra 3.7% = a third substance" fades in and is crossed (caption "extra mass is usually water"). Hold about 1 second.

Upgrade (Revision 3): A navy givens strip sits under the shrunken card: "mixture 10.00 g | sand 4.12 g after 10 minutes | salt 6.25 g". The rows are 52 px with "41.2%" and "62.5%" framed in amber as partial results. On "so something extra was weighed" the total readout reads "103.7%" with a teal hand tag "0.37 g extra". On "Dry it to constant mass before weighing" the answer "(b) water in the sand: dry to constant mass" is framed in green with a tick (44 px). On "mistake" the crossed chip is struck in red with a red hand tag "usually water".

### 15. handoff: inside the salt
> So by separating a mixture and weighing the parts, we found how much of it was salt. But salt itself is a compound. Its sodium and chlorine are bonded together in a fixed ratio, so no filter can pull them apart. Next time, we'll see how the formula alone tells us what fraction of a compound's mass comes from each **element**.

Visual: board clears. The 20.00 g bar returns small at the top with "salt 70.0%" glowing. The salt segment lifts out and becomes `c1-salt-jar-crystals-v1.png` at the centre. On the second sentence the formula "NaCl" writes beside the jar with a grey tag "compound: fixed ratio"; a small coded filter funnel icon draws next to it and is crossed ("can't filter a compound apart"). On "element" a chip writes: "Na: ? %   Cl: ? %   from the formula alone?". Hold about 2 seconds. This is the final frame (v07 opens on it).

Upgrade (Revision 3): The salt jar (about 420 px) is solid when it arrives. On "bonded together in a fixed ratio" a navy hand tag "bonded" writes beside "NaCl" and clears before the last chip writes, so the final frame is as described. On "no filter can pull them apart" the funnel beside the formula is a small copy of the painted filter plate (`y11c-filter-funnel-flask-empty-v1.png`, about 160 px), struck with a slate cross, in place of the coded funnel icon; v07's opening draws the same small plate. Tags are dark ink.

### 16. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. % by mass = (mass of component ÷ mass of original mixture) × 100.
2. Weigh by difference: container with solid − empty container.
3. A physical separation conserves matter: with no loss, the parts total 100%.
4. Total below 100%: mass was lost. Total above 100%: extra mass, usually water.
5. Dry to constant mass: heat, cool, weigh, until two readings match.

Memory aid (framed card beside the notes, hand lettering, navy and rose as in scene 10): *Divide by what you started with, then account for the rest.* Notes 34 px in the role colours; no paragraphs. The whole notes scene runs 45 s.

## Teaching checks

- **Does it explain causes?** Why weigh by difference: the solid can't leave its container (3). Why the original mass is the denominator: the question asks for a fraction of the original mixture (5). Why complete recovery gives 100%: physical changes neither create nor destroy matter (5). Why totals fall short: ordinary losses during transfer and heating (7). Why damp samples give totals above 100%: the balance weighs water as if it were the solid (9). Why drying to constant mass works: when two readings match, no more water is leaving (9).
- **Misconceptions addressed:** divide by the recovered total (crossed in 12); missing mass is a new substance (7, crossed); extra mass is a new substance (crossed in 14); percentages that miss 100% mean a calculation error (6, 9); the balance reading is the solid's mass (3).
- **One idea at a time:** separation recall (2), weighing (3), one percentage stage at a time (4), the conservation reason (5), loss (6, 7), extra mass (8, 9).
- **Video makes it easier:** the accounting bar fills segment by segment, stops short with a hatched gap or overhangs its end line, so the student sees loss and extra as shapes before reading numbers (4, 6, 9); the balance display ticks for each weighing (3); the loss markers point at the exact places solution is left behind (7).
- **Response opportunity:** one in-teaching prediction (3 s) and two unseen HSC-style tasks with every condition visible ("original mixture", masses with units, "dried in an oven for 10 minutes"), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 32 s and 28 s.
- **Avoided double teaching:** filtration and evaporation are recalled as a fast-forward strip (v03); chromatography only in the opening sentence (v05); compound named, not re-taught (v01).
- **Syllabus coverage:** `C1-IQ1-01` first example (separation techniques, as context) and second example (percentage composition by weight of component compounds, from a practical separation). Elements from a formula: v07.
- **Out of scope by design:** formula percentages (v07); gravimetric analysis and mole ratios (Module 2); purity tests on recovered solids.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style; marks not shown to learners).** "A 15.00 g mixture of chalk (insoluble) and table salt is separated by filtration and evaporation. The student recovers 4.20 g of dry chalk and 10.50 g of dry salt. (a) Calculate the percentage by mass of each component in the original mixture. (b) Calculate the percentage of the original mass that was not recovered."
Model answer: (a) chalk = 4.20 ÷ 15.00 × 100 = 28.0%; salt = 10.50 ÷ 15.00 × 100 = 70.0%. (b) recovered 98.0%, so 2.0% (0.30 g) was not recovered. Classic mistake (crossed): dividing by the recovered total 14.70 g (chalk 28.6%, salt 71.4%), which hides the loss.

**Attempt 2 (scene 13; original wording, HSC style).** "A 10.00 g mixture of sand and salt is separated. The sand is dried in an oven for 10 minutes and then weighs 4.12 g. The recovered dry salt weighs 6.25 g. (a) Calculate the percentage by mass of each component. (b) Explain why the percentages do not add to 100%, and state how the method should be changed."
Model answer: (a) sand = 41.2%; salt = 62.5%. (b) The total, 103.7%, is above 100%, so 0.37 g of extra mass was weighed. The most likely cause is water still in the sand (dried for only 10 minutes); the balance counts the water as sand. Dry the sand to constant mass (heat, cool, weigh, repeat until two readings match) before weighing. Classic mistake (crossed): "the extra 3.7% is a third substance".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked case 1 (example data, pack candidate 1) | mixture 20.00 g; sand 6.00 g; salt 14.00 g; 30.0%, 70.0%; total 100.0% | 1, 3, 4, 5, 8, 9, 15 |
| Weighing by difference | basin 45.12 g; basin + salt 59.12 g; salt 14.00 g; watch glass 21.35 g; watch glass + sand 27.35 g; sand 6.00 g | 3 |
| Worked case 2 (example data, pack candidate 2) | mixture 25.00 g; sand 8.00 g (32.0%); salt 16.00 g (64.0%); recovered 96.0%; missing 1.00 g (4.0%) | 6, 7, 10 |
| Damp sand (illustrative, screen only) | readings 6.40, 6.12, 6.00, 6.00 g | 9 |
| A1 | 15.00 g; chalk 4.20 g (28.0%); salt 10.50 g (70.0%); recovered 98.0%; not recovered 0.30 g (2.0%); crossed 14.70 g total gives 28.6%, 71.4% | 11, 12 |
| A2 | 10.00 g; sand 4.12 g (41.2%); salt 6.25 g (62.5%); total 103.7%; extra 0.37 g | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 6.00 ÷ 20.00 × 100 = 30.0; 14.00 ÷ 20.00 × 100 = 70.0; 6.00 + 14.00 = 20.00.
- 59.12 − 45.12 = 14.00; 27.35 − 21.35 = 6.00.
- 8.00 ÷ 25.00 × 100 = 32.0; 16.00 ÷ 25.00 × 100 = 64.0; 32.0 + 64.0 = 96.0; 25.00 − 24.00 = 1.00; 1.00 ÷ 25.00 × 100 = 4.0.
- A1: 4.20 ÷ 15.00 × 100 = 28.0; 10.50 ÷ 15.00 × 100 = 70.0; 4.20 + 10.50 = 14.70; 15.00 − 14.70 = 0.30; 0.30 ÷ 15.00 × 100 = 2.0. Crossed: 4.20 ÷ 14.70 × 100 = 28.57 (28.6); 10.50 ÷ 14.70 × 100 = 71.43 (71.4).
- A2: 4.12 ÷ 10.00 × 100 = 41.2; 6.25 ÷ 10.00 × 100 = 62.5; 41.2 + 62.5 = 103.7; 4.12 + 6.25 − 10.00 = 0.37.
- Bar lengths: drawn from the same values (no hand-typed widths); 20.00 g bar 600 px, so 6.00 g = 180 px; 25.00 g bar 600 px, so 8.00 g = 192 px, 16.00 g = 384 px, gap 24 px (draw the gap at least 24 px wide so it reads).

## Memory aid check

- **"Divide by what you started with, then account for the rest."** Written for this lesson. Meaning, as said in scene 10: the denominator for every component is the original mixture mass; the difference between 100% and the total is evidence about loss (below) or extra mass (above). Assumptions checked: the original mass was measured on the same balance after the sample was dry (stated in scene 1, "dry sand and table salt"); the components were separated physically, so matter is conserved; the recovered solids are the components alone (washed and dried). It helps a new case: a student meeting any recovered-mass question knows which number goes on the bottom and what a total that misses 100% means. Introduced after both worked cases.
- **Considered, not used:** "part over whole" alone (true, but doesn't say which whole, which is the exact error); an acronym for the drying loop (adds decoding).

## Narration length estimate

Revision 1 count (5 November; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted, bold markers removed): **6,056 characters** (scenes joined with a space), 16 scenes. Characters per scene (1 to 16): 453, 512, 530, 468, 427, 453, 440, 199, 435, 231, 331, 422, 368, 374, 323, 75. At 13.3 characters per second the speech is about 455 s; add about 3 s of settling for the separation strip (scene 2) and the drying loop (scene 9), 2 s for the scene 10 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold, and about 55 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 542 s** (9.0 minutes), within the 5,500 to 6,800 character band and under the 570 s cap. Watch scene 3: each display reading must tick before its number is spoken. Reserve trims if the voiced take runs long: scene 5's second sentence ("And here's why the check works."), scene 7's final sentence (keep the three rows silent), scene 10 entirely (the aid stays on the notes screen).

Revision 3 (12 Nov 2026): narration unchanged (6,041 characters, 16 scenes). The notes scene is now 45 s in all (it was about 60 s), so the estimate falls from about 542 s to about 527 s.

## Scene list and build ids

Lesson key `c-y11-m1-v06` (route chem-y11-m1-v06; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v06`.

In order (kebab-case; 16 scene headings, all `### N.`): hook, separation-recall, weigh-by-difference, percentage, conservation, loss-run, loss-causes, prediction, extra-mass, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except prediction, attempt-1, attempt-2 (`hold`, countdown) and key-notes (`hold`, copying). Transitions (`pickTransition`): 1 to 2 camera continue (the mixture beaker becomes step 1 of the strip); 2 to 3 camera push into the balance; 3 to 4 board reset to the calculation layout (the two masses carry into the givens); 4 to 5 camera continue; 5 to 6 clear change (new givens, same layout); 6 to 7 camera continue (the bar stays); 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 board clear; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: prediction (3 s countdown), attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/c-y11-m1-v06-learning-review.md`, `science_check` = `checks/c-y11-m1-v06-science-check.md`.

Revision 3: key-notes hold is 45 s in all. Transitions 4 to 5, 5 to 6 and 6 to 7 are now board changes (conservation board, calculation board, loss board).

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 300 px; scaled uniformly only, never stretched):
- `public/assets/chemistry/m6-beaker-v1.png` (2048 × 2048; empty glass beaker): fallback only, for scene 1 if the dry-mixture beaker is not painted.
- `public/assets/chemistry/c1-salt-jar-crystals-v1.png` (1600 × 1718; jar with white salt): scene 15 and the final frame.
- **Inspected, not used:** `m6-analytical-balance-v1.png` and `m8-balance-watch-glass-v1.png` (analytical balances with draft shields read to 0.0001 g; an evaporating basin can't sit inside the shield, and a four-decimal instrument contradicts the 0.01 g readings); `p01-filter-funnel-flask-v1.png` (purple residue and filtrate, wrong colours for sand and salt water); `m8-filter-funnel-white-ppt-v1.png` (white precipitate reads as a precipitate, not sand); `p01-mgo-ash-dish-v1.png` (an evaporating dish with grey-speckled ash; usable as a fallback for the salt basin, but the ash reads as burnt solid, not salt crystals); `c1-evaporating-beaker-v1.png` (beaker on a wooden board, not a basin).

Reuse from v03's requested set (`chem-y11-m1-v03.md`, Codex asset brief; painted once, shared): `y11c-sand-saltwater-beaker-v1.png` (scene 2), `y11c-filter-funnel-flask-sand-v1.png` (scenes 2, 7), `y11c-watch-glass-v1.png` and `y11c-watch-glass-sand-v1.png` (scenes 2, 3, 8, 9), `y11c-evaporating-basin-hotplate-v1.png` and `y11c-evaporating-basin-crystals-v1.png` (scenes 2, 3, 7), `y11c-glass-rod-v1.png` (scene 7, the rod with crystals; fallback coded). If v03's set is not yet painted, v06 waits for it; nothing here duplicates it.

Need (new plates, Codex), in priority order:
1. `y11c-top-pan-balance-v1.png`: scenes 3, 9. Essential (every mass is read from it; no Year 11 design has requested a balance).
2. `y11c-evaporating-basin-empty-v1.png`: scene 3. Essential (weighing by difference needs the empty basin); painted as a third member of v03's aligned basin pair.
3. `y11c-sand-salt-dry-beaker-v1.png`: scenes 1, 5. Wanted; fallback: `m6-beaker-v1.png` with coded sand and salt grains.

Coded: chromatogram thumbnail (from v05), readouts and balance digits, process strip labels, steam wisps, water drops, sand grains and salt specks in the beaker, the particle-conservation diagram, mass accounting bars with hatched gaps and teal overhangs, loss markers, droplets, glass rod, the drying loop, calculation layout rows, crossed chips, filter-funnel icon, attempt cards, countdowns, key notes board.

Revision 3 (12 Nov 2026). Now delivered and used (confirmed by file listing, not re-inspected): `y11c-top-pan-balance-v1.png`, `y11c-evaporating-basin-empty-v1.png`, `y11c-sand-salt-dry-beaker-v1.png`, and v03's shared set. Newly placed: the three containers of scene 5 are painted plates, not coded outlines; the balance is the attempt 1 picture; the sand watch glass and `m8-drying-oven-v1.png` are the attempt 2 picture; the funnel in scene 15 is a small copy of `y11c-filter-funnel-flask-empty-v1.png`. New plate requests: none.

## Codex asset brief (Year 11 Chemistry M1 v06; adds to v03's shared `y11c-` set)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m1-v06.md`, route entry chem-y11-m1-v06. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `public/assets/chemistry/m6-beaker-v1.png` and `m7-separating-funnel-clear-v1.png` in line weight, palette, glass treatment and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y11c-top-pan-balance-v1.png` (2000 × 1600 px): a school electronic top-pan balance (0.01 g type, no draft shield), three-quarter front view matching the viewpoint of `m6-analytical-balance-v1.png`: a flat round stainless pan on a pale grey body, a plain dark rectangular display window on the front (**blank, no digits**, flat enough for coded digits), two small plain buttons with no symbols. The pan must be empty and large enough for v03's evaporating basin (`y11c-evaporating-basin-crystals-v1.png`) and watch glass at the same scale. Codex reports, in plate pixels: the display window rectangle and the pan's top surface centre and width.
2. `y11c-evaporating-basin-empty-v1.png` (the canvas of v03's basin pair, 2000 × 1600 px): the same white porcelain evaporating basin as `y11c-evaporating-basin-crystals-v1.png`, identical in every line and position, empty and dry. If v03's crystals plate shows the basin on the hotplate, paint this one with the basin in the same position and the hotplate removed, and confirm the basin outlines overlay.
3. `y11c-sand-salt-dry-beaker-v1.png` (the canvas of `y11c-sand-saltwater-beaker-v1.png`): the same beaker, about one-third full of a dry mixture of pale golden-brown sand grains and white salt crystals, visibly two kinds of grain, no water.

Report inspection on the paper background and the dark board background at about 300 px wide, confirm plate 2 overlays v03's basin plates, and report the balance pan placement for the basin and the watch glass. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m1-v06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the chemistry of every learner-visible claim: filtration and evaporation are physical changes that conserve mass; percentage by mass uses the original mixture mass; damp solids read high; drying to constant mass; the three named losses.
3. Confirm the memory aid's assumptions (Memory aid check).
4. Confirm the narration speaks the same values as the screen ("twenty point zero zero grams" with "20.00 g").
5. Confirm both attempt cards are original, carry every condition the answer needs ("original mixture", masses with units, "dried in an oven for 10 minutes"), and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger exactly.
7. Confirm no person, hand or face is drawn or requested anywhere ("student" appears in question text only).
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("vaporise" not used; "colour", "centre").
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening-frame assumption is flagged for root (Decisions) and the final frame matches v07's opening.

Revision 3 (visuals only), also check: the narration lines are identical to Revision 2; every phrase quoted after "On" in an "Upgrade (Revision 3)" paragraph is in that scene's narration, in spoken order within the paragraph; the new on-screen numbers: 6.40 ÷ 20.00 = 32.0% and total 102.0%; 6.12 ÷ 20.00 = 30.6% and total 100.6%; the crossed chip 8.00 ÷ 24.00 = 33.3% and 16.00 ÷ 24.00 = 66.7%; "1.00 g short"; "0.37 g extra"; the attempt card pictures give nothing away; every plate named exists.

## YouTube metadata (draft)

Title: Percentage Composition of a Mixture: Weighing What You Separate | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson05.sa.html

You separate 20.00 g of sand and salt and get back 6.00 g of sand and 14.00 g of salt. What percentage of the mixture was each? Learn weighing by difference, why every percentage uses the mass you started with, why a physical separation should add back to 100%, what a total below 100% (loss) or above 100% (usually water) tells you, and how drying to constant mass fixes it. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
- using separation techniques based on physical properties (ACSCH026)
- calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

Next: Percentage composition from a chemical formula.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Learner question wording (root).** Route: "What fraction of a separated mixture came from each component?" Proposed: "After a separation, what fraction of the mixture's mass came from each component, and what does missing mass mean?"
- **2. Opening frame (root, reconcile with v05).** Assumed v05 final frame: developed chromatogram plus the handoff chip. If v05 used a mixture other than ink, change "dyes were in an ink" in scene 1. Note: `chem-y11-m1-v03.md` says v03's sand and salt watch glasses are "also used in v05's final frame"; if v05 ends on those watch glasses, scene 1 can open on them directly (the 20.00 g beaker then slides in beside them), which strengthens the link.
- **3. Plate set (root).** v06 reuses v03's `y11c-` sand and salt set (beaker, filter pair, basin pair, watch glasses, glass rod) and adds three plates: a top-pan balance, an empty basin aligned with v03's pair, and a dry-mixture beaker. Root to confirm with v03's brief.
- **4. Site link.** The description links lesson05 (the percentage-composition card); lesson03 holds the separation method. Confirm which page the owner wants.
- **5. Site precision note (root, optional log).** Lesson 05 writes formula masses in "g mol⁻¹" in Module 1 (see Decisions); log in `../site-corrections-chem-y11.md` if accepted.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Stage 5 entry knowledge and v03: does the fast-forward strip recall enough for a student who skipped v03; is weighing by difference followable at speaking pace; does the bar make loss and extra visible before the numbers; are the attempt cards free of answer-bearing visuals), then the science check and Codex error check.
- Every bar segment, gap and overhang must be computed from the same values as the rows (no hand-typed widths).
- Checker output (5 November): narration 6,056 characters; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (7 Nov 2026)

- Brief 177 reviews (`checks/c-y11-m1-v06-learning-review.md`, `checks/c-y11-m1-v06-science-check.md`): 0 blockers, 0 should fix, 0 optional. No repair was made, so there is no Revision 2 and no repair error check; the reviewed Revision 1 narration and visuals are unchanged.
- Headline count restated as the sum of scene strings: 6,041 characters over 16 scenes (the earlier 6,056 included the 15 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).

## Revision 3 (12 Nov 2026)

Visual upgrade to `../maths-visual-standard.md` and the build gate. Visuals only: no narration line changed (checked by hash against Revision 2), so the brief 236 voicing stands.

Findings: brief 177's learning review and science check were clean at Revision 1 and no later check is open; nothing to resolve.

Changes:
- New section "Visual upgrade (Revision 3)"; each scene gains an "Upgrade (Revision 3)" paragraph.
- Anchor: v05's balance and watch glasses, then the painted beaker of dry sand and salt at about 14 s.
- Simulation: one mass model drives the balance display, the rows, the accounting bar and a total readout; in scene 9 the damp sand dries live (6.40 g to 6.00 g, total 102.0% to 100.0%).
- Cuts: scene 5 (conservation board with three painted containers) and scene 7 (loss board) are new stages. Before, the calculation layout ran about 134 s through scenes 4 to 7.
- Hand tags (two or three) and a pen mark in scenes 1 to 7 and 9; the memory line is a framed card in scene 10.
- Worked examples: givens cards, results framed in green; scene 6 gains a crossed slip "÷ 24.00 g (what came back): 33.3% + 66.7% = 100%".
- Coded outlines of real containers (scene 5) and the coded funnel icon (scene 15) are replaced by painted plates.
- Question cards: attempt 1 gains the balance; attempt 2 gains the sand watch glass and the oven; feedback scenes gain navy givens strips and green frames.
- Key notes: four items (one long) cut to five one-line bullets with the framed memory card; the notes scene is 45 s. Left the board: the list of where losses happen (kept in scene 7).

New plate requests: none.

Joins: the opening is v05's final frame, unchanged. The final frame (scene 15) keeps the same objects, words and chip; its funnel is drawn as a small painted plate in place of a coded icon, and v07's opening does the same.

Counts: 6,041 characters, unchanged; about 542 s to about 527 s.

Calls for root: (1) the scene 6 crossed slip and the scene 9 readouts (32.0%, 30.6%, 102.0%, 100.6%) are new on-screen numbers derived from the design's own data; (2) the funnel in the final frame is now a painted thumbnail, which v07's builder must match.
