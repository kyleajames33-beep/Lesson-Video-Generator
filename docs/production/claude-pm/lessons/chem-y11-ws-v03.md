# Year 11 Chemistry WS V03: Conducting investigations. How do we collect and source chemistry data safely and accurately? (design)

Status: Revision 4 (12 Nov 2026): visual upgrade to maths-visual-standard.md, visuals only. Narration unchanged, so the brief 236 voicing is not affected. Needs a Codex error check of the visual plan before plates and build. Previously Revision 3 (7 Nov 2026): brief 186 error check clean, headline restated as the sum of scene strings, ready to voice.

Narration 6,344 characters (sum of scene strings; 6,359 with joining spaces; Revision 1 was 6,331 by the joined parser count), 16 scenes, about 567.2 s (9.4 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: third Year 11 Chemistry (2017 syllabus) Working Scientifically skills video, playlist entry 13, between `chem-y11-ws-v02` and `chem-y11-m1-v11`. Templates as `chem-y11-ws-v01.md`; skills-video format precedent `phys-y11-fa0-v03.md` and `v04.md` (format only; no physics content). Running case: the copper sulfate heating investigation planned in ws-v02. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-ws-v03` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply conducting investigations to that case and a new question; do not re-teach the subject mechanism"; next handoff: "How does spdf notation locate the electrons in an atom?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches). Used: the equipment-accuracy table's principle and its four-target picture of precision against accuracy ("A tight cluster away from the centre shows a systematic error"), redrawn as a number line; the predict card's point ("More precise, not necessarily more accurate ... repeating won't reduce that bias"). Not used: the site's validity and reliability definitions (`chem-y11-ws-v01.md` site note 1); titration and gravimetric error scenarios (ws-v05).

Owner rules applied: as ws-v01 (one learner question; no people, hands, faces or body outlines: apparatus alone, tongs shown lying on the mat; the "online comment" is a coded text card with no avatar; plates for real apparatus; number lines, source cards and reference layouts coded; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Conducting Investigations", outcome CH11/12-3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS3-01`: "employ and evaluate safe work practices and manage risks (ACSCH031)"
- `C11-WS3-02`: "use appropriate technologies to ensure and evaluate accuracy"
- `C11-WS3-03`: "select and extract information from a wide range of reliable secondary sources and acknowledge them using an accepted referencing style"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 34)

**Boundary:** opens on ws-v02's final frame (the finished plan, the lidded crucible, desiccator and balance). Teaches: employing the planned safe work practices (`C11-WS3-01`); evaluating them during the work and adjusting (a lid knocked open, a hot crucible nearly weighed); ensuring accuracy with technology: zeroing, a check mass, one balance per sample, readings recorded at once (`C11-WS3-02`); accurate and precise defined, with valid and reliable recalled; evaluating accuracy against the accepted value (36.1% from the formula); a precise but inaccurate set explained by its method (cooling uncovered); selecting reliable secondary sources (who, why, when, does it agree), extracting only the needed facts from a safety data sheet, and acknowledging sources in an accepted referencing style (`C11-WS3-03`). Not taught: data tables and graphs (ws-v04); random and systematic error by name, uncertainty and percentage error (ws-v05, named once as later).

## Decisions

- **Learner question (route wording kept).** "How do we collect and source chemistry data safely and accurately?" The answer, in order: follow the planned controls (2); check them as you go (3); set up the balance so its readings are true (4); judge accuracy against an accepted value, keeping accurate and precise apart (5 to 7); trust a secondary source only if it passes four questions (8); take just what you need (9); acknowledge it so a reader can find it (10).
- **Opening frame (equals ws-v02's final frame, `chem-y11-ws-v02.md` "Opening frame and final frame").** The lidded crucible, the desiccator and the balance (blank readout) at the left; the completed `PlanBoard` at the right; the "Next" chip, which fades as scene 1 starts.
- **Hook (illustrative, tagged).** Two classes follow the plan. Class 1: 36.0, 35.8, 36.2% (mean 36.0). Class 2: 34.3, 34.5, 34.4% (mean 34.4). Both tight; one is close to 36.1%. The question "which is accurate, and how would we know?" carries scenes 4 to 7.
- **Definitions (series set; stated plainly in scene 5).** **Accurate:** close to the accepted (true) value. **Precise:** repeated readings agree closely, with a small spread. Recalled from ws-v02: **valid** (the method measures what it claims to measure) and **reliable** (repeating the whole experiment gives consistent results). Identical wording to ws-v01 Decisions and ws-v02. The site's merging of validity with accuracy is not used.
- **Safe work practices (scenes 2, 3; `C11-WS3-01`).** Employed: glasses on before lighting; long hair tied back; crucible on the pipeclay triangle with the lid slightly ajar; small blue flame; hot apparatus moved only with tongs onto a heatproof mat; balance away from the burner. Evaluated, from two illustrative incidents: a crystal spat out when the lid was knocked fully open (the control works only if it stays in place); a crucible nearly went onto the balance while hot (burn risk, and a hot object reads low because warm air rising around it lifts it slightly, author note b), so a rule is added: cool in the desiccator, then weigh. ws-v02 assessed risks; this video manages them during the work ("You check it, and fix it, as you go"). One more managing step is spoken (Revision 2): if the powder darkens, decomposition has already started (ws-v01's black crust), so heating stops, that run is not used to measure water content, and the work restarts with gentle heating after teacher review.
- **Technologies to ensure accuracy (scene 4; `C11-WS3-02`).** Zero the balance (reads 0.00 g empty); check it with a check mass of known value (10.00 g reads 10.00 g); weigh each sample on the same balance every time (differences between balances cannot enter the subtraction); record every reading straight away. A check mass is the school-level calibration check; adjusting a balance's calibration is a technician's job (author note c).
- **Evaluating accuracy (scenes 5 to 7; 3 s prediction).** Number line from 33 to 37%, the accepted value 36.1% as a gold mark (from the formula and data-sheet values, so it is secondary data). Class 1 sits on it with a small spread: accurate and precise. Class 2 sits together at 34.4%: precise but not accurate. Cause: class 2 cooled their crucibles on the open bench (the ws-v02 trial-run problem), so the powder took water back from the air and every result was shifted the same way. Repeats can't fix a shift that every repeat shares; changing the method can. "We'll look more closely at these kinds of error in a later video" points to ws-v05 without naming random and systematic here (the site's predict card makes the same point; author note d).
- **Secondary sources (scenes 8 to 10; `C11-WS3-03`).** Two real kinds of source the plan used: a published data sheet (relative atomic masses behind 36.1%) and the supplier's safety data sheet (hazards in ws-v02's risk table). Reliability questions, spoken as four plain questions: who wrote it (experts or an accountable organisation)? why (to inform, or to sell)? when (current)? does it agree with other reliable sources? A coded online comment ("copper sulfate is harmless, I've touched it heaps") fails all four and contradicts the SDS. "A wide range" is honoured by naming three kinds on screen (data sheet, SDS, textbook or chemistry data handbook) and by A2's three sources. Extraction: just the three hazard facts the plan needs (harmful if swallowed; causes serious eye irritation; very toxic to aquatic life), each linked to its control. Acknowledgement: an in-text citation (author or organisation, year) and a reference-list entry (author, year, title, publisher or site, where to find it), in the style the school uses; APA is named as one common style. The example entry uses placeholder text in square brackets and is tagged "example layout", so no real document is imitated (author note e).
- **Memory aid:** "Who, why, when, and does it agree?" for judging a source (see "Memory aid check"), scene 8, returning in the key notes.
- **Attempts (original, HSC style).** A1 (evaluate accuracy and ensure it; sand and salt): a mixture made to be exactly 70.0% salt; Student P 69.6, 69.8, 69.5%; Student Q 74.1, 73.9, 74.2%. Compare accuracy and precision; one way to make sure the balance gave accurate readings. Model: both precise (each spread 0.3); P accurate (about 69.6, close to 70.0); Q not (about 4 percentage points high in every run, something added mass each time, such as salt that wasn't fully dry); zero the balance and weigh a check mass of known value. Crossed: "Q is more accurate because its readings agree closely." A2 (select and acknowledge sources): a chemistry data handbook from a university publisher (2022), an anonymous comment under a video (no date), and a salt supplier's safety data sheet (2023), for salt's solubility. Choose the two most reliable with reasons; what a reference-list entry must include. Model: the handbook and the SDS (named, accountable authors; written to inform and, for an SDS, legally required; dated; can be checked against each other); the comment has no author, no date and no way to check; entry: author or organisation, year, title, publisher, and the URL or where to find it. Crossed: "the comment, because lots of people liked it".
- **Mistake scene:** none separate. "Safety is a checklist done before you start" (3); "the display's last digit guarantees accuracy" (4: the check mass); "agreeing readings are accurate" (6, 7; crossed in A1); "more repeats fix a shifted method" (7); "popular means reliable" (crossed in A2); "copy the whole safety data sheet" (9).
- **Handoff (route next: `chem-y11-m1-v11`, "How does spdf notation locate the electrons in an atom?").** The data sheet in scene 8 is a periodic table with relative atomic masses; scene 15 enlarges it, returns to atoms, and highlights phosphorus, iron and chlorine (the route's v11 checks) beside v10's s, p, d, f chips. This bridges a skills video back to the core sequence with an object the student has just used.
- **Site sources used:** `l18-errortype-title` (four-target precision and accuracy picture, redrawn; equipment table principle); `l18-predict-title` (repeats improve precision, not a biased result). Site notes: see `chem-y11-ws-v01.md` (notes 1 to 6). No new site errors in the parts used.
- **Cause chain taught, in order:** (1) controls protect people only if followed (2); (2) checking controls during the work finds what the plan missed (3); (3) a zeroed, checked balance used consistently gives true readings (4); (4) accuracy means closeness to the accepted value; precision means agreement (5); (5) agreeing results can all be shifted by the method, and repeats can't remove a shared shift (6, 7); (6) a source is trustworthy for reasons (8); (7) extract only what the plan needs (9); (8) acknowledging lets a reader find and check it (10).
- **Entry knowledge:** ws-v01 and ws-v02 (the question, the plan, the trial run); v07 (36.1%); v06 (sand and salt percentages, constant mass); Stage 5 safe practical work and source acknowledgement.
- **Learner-visible vocabulary (plain meaning at first use):** check mass (a metal block of known mass, 4); accurate (5); precise (5); accepted value (the value from the formula and data sheet, 5); secondary source (6, recalled from ws-v01); safety data sheet (a document from the supplier listing a chemical's hazards and how to handle it, 8); citation (8, 10); reference list (10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **run strip** (the plan's stages play across the stage: lit crucible, tongs, mat, desiccator, balance; each control glows as named); **incident flags** (scene 3: a coded crystal arc out of the lid gap; a hot-shimmer crucible stopping short of the balance; each gains a "worked?" tick or an added rule); **balance readouts** (zero, check mass, sample readings); **`DotLine`** (a number line with dot sets for each class, a gold accepted-value mark, spread brackets and gap brackets; reuse the dot-plot pattern from `phys-y11-fa0-v05.md` if built, otherwise new and shared); **source cards** (data sheet, SDS, textbook, online comment) with a four-question `CheckList` (shared); **highlighter extraction** (scene 9: three lines on the SDS card highlight and slide into the risk table's control cells); **reference layout** (in-text citation and reference-list entry with labelled parts); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** as ws-v01; accepted value gold; class 1 teal dots, class 2 navy dots; source checks tick teal, cross rose.
- **Board layout (constant):** heading top left; apparatus or source cards in the left half; readouts, number line or reference layout in the right half.

Author notes (not learner copy):
(a) Class data (illustrative): class 1 36.0, 35.8, 36.2 (mean 36.0, spread 0.4); class 2 34.3, 34.5, 34.4 (mean 34.4, spread 0.2). Class 2 corresponds to a final mass of about 1.64 g from 2.50 g, the ws-v02 trial-run reading (2.50 × (1 − 0.344) = 1.64).
(b) A hot object on a balance reads low: air warmed by the object rises around it, giving a small upward drag (convection) and buoyancy changes. Standard gravimetric practice: cool to room temperature (in a desiccator for hygroscopic solids) before weighing.
(c) Check mass: a stainless-steel calibration weight of stated mass. School balances are checked with one; adjusting calibration follows the manufacturer's procedure, usually by a technician. Learner copy says "check".
(d) The shift in class 2 is a systematic error in ws-v05's language; this video says "every result was shifted the same way" and "repeats can't fix it". ws-v05 owns the names, uncertainty and percentage error.
(e) Referencing: APA (7th edition) reference-list pattern for a document from an organisation: Organisation. (Year). *Title* [Description]. Publisher (omit if the same as the author). URL. In-text: (Organisation, Year). The on-screen example (Revision 2): the in-text citation and the main reference entry both name the relative-atomic-mass data sheet, "[Data sheet publisher]. ([year]). *[Data sheet title]: Relative atomic masses*. [Publisher]. [URL]", and a separate smaller SDS entry "[Supplier name]. ([year]). *Copper(II) sulfate pentahydrate: Safety data sheet*. [URL]" follows, both tagged "example layout"; no real supplier or URL is shown. Schools may use Harvard or another style; the narration says "the style your school uses".
(f) Hazard facts from typical supplier SDSs (`chem-y11-ws-v02.md` author note c); Codex to confirm against a current Australian SDS or Safe Work Australia's HCIS.
(g) A1: P mean 69.63 (spread 0.3); Q mean 74.07 (spread 0.3); Q is 4.07 percentage points above 70.0, said "about four percentage points high" in narration (Revision 2) and "≈ 4 percentage points high" on screen.
(h) Pronunciations: "A P A" spelled out; "desiccator"; "ten point zero zero grams".

Main question: *How do we collect and source chemistry data safely and accurately?*
Entry knowledge: ws-v01, ws-v02; v06, v07; Stage 5 safe practical work.
Stops after: employing and evaluating safe practices; zero, check mass and consistent balance use; accurate and precise against an accepted value; selecting, extracting from and acknowledging secondary sources. No tables, graphs, uncertainty or error names (ws-v04, ws-v05).
Handoff: chem-y11-m1-v11, spdf notation.

## Opening frame and final frame

- **Opening frame:** ws-v02's final frame exactly (Decisions).
- **Final frame (v11 opens on it):** a coded periodic table outline at the centre (the "data sheet" from scene 8, grown to full size: main-group and transition blocks as empty cells, f block rows below; light grey grid on the dark board; element symbols shown only for H, He and the first three periods plus Fe in period 4), with three cells highlighted: P (15) and Cl (17) in period 3, Fe (26) in period 4, each with its atomic number and a small "?" for its electrons; at the right, v10's four small grey chips "s", "p", "d", "f" in a column; the chip "Next: How does spdf notation locate the electrons in an atom?". The ws-v03 apparatus is gone.

## Visual upgrade (Revision 4)

Each scene below keeps its Visual line and gains an "Upgrade (Revision 4)" paragraph. The Upgrade paragraph adds to the Visual and wins wherever the two differ. No narration line changed.

- **Anchor.** The painted lidded crucible, desiccator and balance are on screen from the first frame (ws-v02's final frame). The whole method is then carried out on those real objects: safety glasses, tongs, mat, the check mass (`y11c-check-mass-v1.png`, now delivered) and the desiccator are all painted plates.
- **Simulation: more repeats (scene 7).** A run of the chance engine (`src/explainer/sims/chance.ts`, `{kind: 'weighted'}` with outcomes 34.3, 34.4 and 34.5 for class 2). Repeats drop onto the number line one at a time, slowly then quickly, and three live readouts at 52 px read the run: "repeats", "mean" and "gap to the accepted value". The mean stays at about 34.4% and the gap at about 1.7 however many repeats land, so the student watches precision improve nothing. On the cue the method changes (desiccator) and a second run with outcomes 36.0, 36.1 and 36.2 lands on the gold mark. The values are illustrative and tagged so. The balance readouts in scene 4 are live on the same principle (zero, then 10.00 g).
- **Colour key (fixed across ws-v01 to ws-v03).** The accepted value gold; class 1 teal; class 2 navy; accurate teal words, precise violet words; source checks teal tick and rose cross; risk and hazard text terracotta; a framed answer green with a green tick; a crossed mistake red with a red hand tag; givens strips navy. Hand tags take the colour of the idea they mark. Tags the Visual lines call "grey", "dimmed" or "faint", and every "ghost", are drawn solid in dark ink, and on-screen tags never show a video code.
- **Type sizes (1080p).** Heading 60 px; readouts, the current gloss and framed answers 44 to 52 px; question-card sentences 38 px (34 px for the data rows and source cards on a card); check-list lines, source cards, reference parts and tags 30 px or more; hand tags 42 px; key notes 34 px; nothing a student must read under 26 px.
- **Board stages.** (A) two classes, scene 1 (about 31 s); (B) the run strip, scenes 2 and 3 (about 81 s; three incidents change it during scene 3); (C) the balance close up, scene 4 (about 37 s); (D) the number line, scenes 5 to 7 (about 84 s; the live repeats run in scene 7); (E) the source cards, scene 8 (about 53 s); (F) the safety data sheet close up, scene 9 (about 25 s); (G) the report extract and reference entry, scene 10 (about 33 s); question and feedback cards; the final frame; the notes board. No set-up runs past about 84 s, so no new cut was needed.
- **Question cards.** Each attempt card arrives whole with a picture from its first frame and nothing answer-bearing. Each feedback scene keeps a navy givens strip, frames the answer in green and crosses one classic mistake in red.
- **No coded pictures of real things.** Crucible "icons", the coded lid and the bench outline in scenes 3 and 7 are small copies of the painted crucible plates.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: two careful classes
> Now we carry out the plan. Two classes follow it with the same crystals. Class one's three runs end at thirty-six point zero, thirty-five point eight and thirty-six point two **percent**. Class two's end at thirty-four point three, thirty-four point five and thirty-four point **four**. Both sets agree closely. But the formula says thirty-six point one percent. So which class collected accurate data, and how would we **know**?

Visual: opens on ws-v02's final frame; the "Next" chip fades and `PlanBoard` slides to a thumbnail at the top right. On the second sentence two copies of the lidded crucible (`y11c-cuso4-crucible-lid-white-v1.png`) sit under "class 1" and "class 2". On "percent" three teal result chips stack under class 1 (grey tag "illustrative data"); on "four" three navy chips under class 2. On "agree closely" both stacks get a small bracket. On "thirty-six point one" a gold chip "formula: 36.1%" writes between them. On "know" the heading writes on: "Collecting data safely and accurately" and a "?" sits over each stack.

Upgrade (Revision 4): The opening frame is solid from the first frame. The two lidded crucibles are about 380 px tall with their class labels at 44 px; the result chips are 44 px in teal and navy and the tag "illustrative data" is dark ink. On "Both sets agree closely" a violet hand tag "tight" writes beside each stack on its pen bracket. On "the formula says thirty-six point one percent" the gold chip is 52 px with a gold hand tag "the target". On "know" the two "?" marks are 52 px.

### 2. employing safe work practices
> First, safety, because a plan only protects people if it's actually followed. Safety glasses go on before the burner is lit, and long hair is tied back. The crucible sits on its pipeclay triangle, with the lid slightly ajar, over a small blue flame. Hot apparatus is moved only with tongs, onto a heatproof mat. And the balance stays well away from the **burner**.

Visual: board clears to the run strip at the left: the safety glasses plate (`m5x-safety-glasses-v1.png`) sets down beside the burner first, tag "on before lighting"; then the lit lidded crucible (`y11c-cuso4-crucible-lid-v1.png` with v07's lit flame edit, or the coded flame) with tags "lid ajar" and "small blue flame"; the tongs (`y11c-crucible-tongs-v1.png`) and heatproof mat (`y11c-heatproof-mat-v1.png`) slide in, tag "hot apparatus: tongs, onto the mat". A grey tag "hair tied back" writes in the plan's safe list. On "burner" the balance plate slides to the far right with a dashed separation line, tag "away from the flame". Each item gets a small tick on the `PlanBoard` thumbnail.

Upgrade (Revision 4): The run strip plates are about 320 px each and each lands solid; each item's tag is dark ink at 34 px. On "only protects people if it's actually followed" a terracotta hand tag "a plan on paper protects no one" writes above the strip. On "Safety glasses go on before the burner is lit" a pen arrow orders the glasses before the burner with a hand-numbered "1". On "moved only with tongs" a pen ring marks the tongs. On "well away from the burner" the dashed separation line is a pen line with an ink hand tag "away from the heat".

### 3. evaluating safe work, as you go
> Then we evaluate those practices while we work. Did each control do its job? In one run, a crystal spat out when the lid was knocked fully **open**. So the lid works, but only if it stays in place. In another, a crucible nearly went onto the balance while still **hot**. That's a burn risk. A hot crucible also reads low on a balance, because warm air rising around it lifts it slightly. So we add a rule: cool in the desiccator first, then weigh. And if the powder starts to darken, stop heating, because it's breaking **down**. That run can't measure the water, so restart gently after your teacher checks it. You check it, and fix it, as you **go**.

Visual: on "open" a coded lid slides fully off the crucible and a small blue crystal arcs out (incident flag 1, tag "lid knocked open"); the lid slides back to ajar with a tick "works if it stays in place". On "hot" a crucible with a red heat shimmer moves toward the balance and stops short (incident flag 2); on "reads low" a small coded readout dips "25.91 → 25.88 g" with rising air wisps (tag "warm air lifts it"); on "add a rule" the desiccator plate (`m8-desiccator-v1.png`) slides between the mat and the balance with an arrow "cool, then weigh". On "down" a faint grey darkening at the crucible's base and the flame icon goes out (tag "darkening: stop heating"); on "can't measure the water" a small grey chip "this run: not used for water content" writes and a dashed "restart gently, after teacher review" arrow loops back to a fresh crucible icon. On "go" the `PlanBoard` thumbnail's safe section gains "lid stays ajar; desiccator before weighing; darkening: stop, restart gently after teacher review" with a small loop arrow "check and fix".

Upgrade (Revision 4): The lid, crucible and "fresh crucible" are the painted lidded crucible plate (small copies where the Visual says icon). On "a crystal spat out" the incident flag is terracotta at 38 px with a pen ring; on "only if it stays in place" a teal hand tag "works, if it stays put" writes on the lid. On "still hot" the second flag is terracotta with a red hand tag "burn risk". On "reads low" the readout "25.91 → 25.88 g" is live at 52 px with an ink hand tag "hot reads low". On "cool in the desiccator first, then weigh" the desiccator (about 360 px) lands solid with the arrow as a pen arrow. On "starts to darken" the darkening is a solid slate patch with a terracotta hand tag "darkening: stop". The chip "this run: not used for water content" and the restart arrow are dark ink at 30 px.

### 4. ensuring accurate readings
> Next, accuracy, which starts with equipment that gives true readings. Before weighing, the empty balance should read zero point zero **zero**. Then we check it with a check mass, a metal block of known mass, ten point zero zero **grams**. If it reads ten point zero zero, we can trust its readings. Each sample is weighed on the same balance every time, so small differences between balances can't sneak into the subtraction. And every reading is recorded straight **away**.

Visual: board change; the balance plate enlarges at the left. On "zero" the coded readout settles to "0.00 g" with a tick (tag "zeroed"). On "grams" a check mass plate (`y11c-check-mass-v1.png`, new) lowers onto the pan and the readout ticks to "10.00 g" (tag "check mass: known value"); a tick writes "reads true". On "same balance" a second, dimmed balance outline appears with a small "+0.02 g?" tag and is crossed (tag "one balance per sample"). On "away" a coded logbook row writes "crucible + crystals: 26.81 g" as the readout shows it.

Upgrade (Revision 4): The balance (about 620 px wide) is solid from the first frame and its readout is live at 52 px. On "should read zero point zero zero" a teal hand tag "zero first" writes with a pen tick. On "a metal block of known mass" the check mass plate (about 200 px) lowers onto the pan, and on "If it reads ten point zero zero" the readout takes a pen ring with a teal hand tag "reads true". On "the same balance every time" the second balance is solid inside an inset card with a dashed border and "+0.02 g?", struck in red with a red hand tag "one balance per sample". On "recorded straight away" the logbook row is 38 px with an ink hand tag "write it now".

### 5. accurate and precise
> Now let's keep two words apart. Accurate means close to the accepted value. Precise means repeated readings agree closely with each other, with a small spread. From planning, valid means the method measures what it claims to, and reliable means repeating the whole experiment gives consistent **results**. Our accepted value is thirty-six point one percent, from the formula. Let's put both classes on the same **line**.

Visual: four gloss chips write in a 2 × 2 block at the top right as spoken: "accurate: close to the accepted value"; "precise: readings agree closely (small spread)"; on "results" "valid: measures what it claims to" and "reliable: whole experiment repeats consistently" (these two grey, tag "recall: planning"). On "line" a `DotLine` draws across the lower board from 33% to 37% with a gold mark at 36.1 labelled "accepted value (formula)"; class 1's three teal dots drop onto it at 35.8, 36.0, 36.2.

Upgrade (Revision 4): The four gloss chips are 38 px: "accurate" in teal, "precise" in violet, and the two recalled words in dark ink (not grey), tagged "from planning". On "close to the accepted value" a teal pen arrow points to where the gold mark will sit; on "with a small spread" a violet pen bracket shows a narrow spread. The number line has tick labels at 34 px and the gold mark labelled at 38 px. On "both classes on the same line" class 1's dots drop.

### 6. prediction (countdown, 3 seconds)
> Class two's results are thirty-four point three, thirty-four point five and thirty-four point four percent. Are they precise, accurate, both, or **neither**?

Visual: class 2's three navy dots wait above the line at 34.3, 34.4, 34.5 (not yet dropped). Chips "precise?", "accurate?", "both?", "neither?". On "neither" the 3 s `Countdown` ring runs.

Upgrade (Revision 4): Class 2's dots wait above the line; the four option chips are 44 px. No hand tags (thinking time).

### 7. precise, but not accurate
> Precise, but not accurate. They agree closely, but they all sit well below thirty-six point one. Class one is both precise and accurate. When every result is shifted the same way, something in the method is pushing them all. Class two cooled their crucibles on the open bench, so the powder took back water from the air, just like the trial run. More repeats won't fix that, because every repeat has the same problem. Only changing the method **will**. We'll look at these errors more closely in a later **video**.

Visual: class 2's dots drop onto the line at 34.3 to 34.5. A spread bracket over each class (class 2 slightly narrower, tag "precise"); a gap bracket from class 2's centre to the gold mark, "≈ 1.7 below" (tag "not accurate"); class 1's gap bracket is nearly zero (tag "accurate and precise"). On "shifted the same way" an arrow pushes all three navy dots left together. On "open bench" a small crucible uncovered on a bench outline with coded water molecules drifting in (grey tag "ws-v02 trial run"). On "More repeats" ghost navy dots pile up at 34.4 and don't move toward the gold mark. On "will" the desiccator plate glows small, and the ghost dots slide to 36.1 (tag "change the method"). On "video" a grey chip "error types: later video (ws-v05)".

Upgrade (Revision 4): On "Precise, but not accurate" the answer "precise, not accurate" is framed in green with a tick (52 px). On "they all sit well below" the gap bracket is a pen bracket labelled "≈ 1.7 below" at 38 px. On "something in the method is pushing them all" a navy hand tag "all pushed the same way" writes with the pen arrow. On "took back water from the air" a small copy of the open white-powder crucible plate (`m5-g02b-open-crucible-v1.png`, about 220 px) stands with coded water molecules drifting in; its tag reads "the trial run" with no video code. On "More repeats won't fix that" the chance run plays (see "Simulation"): solid navy dots pile up near 34.4 while the "mean" and "gap" readouts hold. On "Only changing the method will" the desiccator (about 240 px) lands and the second run's dots land on the gold mark with a teal hand tag "method changed". The last chip reads "error types: a later video" in dark ink.

### 8. choosing reliable secondary sources
> The accepted value rests on secondary sources too. The relative atomic masses came from a published data sheet, and the hazards in our plan came from a safety data sheet, written by the chemical's supplier. How do we know a source is reliable? Ask four things. Who wrote it, and are they experts? Why was it written, to inform, or to sell? When was it written, and is it up to date? And does it agree with other reliable sources? Who, why, when, and does it agree? A comment online saying copper sulfate is harmless fails every one, and it disagrees with the safety data **sheet**.

Visual: board change. Source cards fan out at the left: "data sheet: relative atomic masses" (a small coded periodic-table grid on it), "safety data sheet (SDS): supplier", "chemistry data handbook", with a grey tag "a range of sources". A `CheckList` writes at the right as spoken: "who: experts, accountable?", "why: inform or sell?", "when: dated, current?", "agrees with other reliable sources?". On "Who, why, when, and does it agree?" the memory line writes in hand lettering above the list. A coded comment card slides in ("copper sulfate is harmless, I've touched it heaps", no name, no date, no avatar); the check list runs against it: four rose crosses. On "sheet" a rose line links the comment to the SDS card's hazard line, tag "disagrees".

Upgrade (Revision 4): The three source cards are about 420 px wide each, solid from the first frame, with titles at 34 px; the tag "a range of sources" is dark ink. The four check questions are 38 px with their lead words "who", "why", "when", "agree" in navy hand lettering. The memory line sits in a framed memory card (hand lettering, 52 px): "Who, why, when, and does it agree?" On "fails every one" the four crosses are rose pen crosses with a rose hand tag "0 out of 4". On "it disagrees with the safety data sheet" the link is a rose pen line.

### 9. extracting what the plan needs
> Then we extract only what we need. From the safety data sheet, that's three facts. Copper sulfate is harmful if swallowed, it causes serious eye irritation, and it's very toxic to aquatic **life**. Those three facts are exactly why the plan has no food or drink, safety glasses, and a waste **container**.

Visual: the SDS card enlarges: several coded grey lines of small text (unreadable filler shapes, not real wording), three of which highlight in turn as spoken: "harmful if swallowed", "causes serious eye irritation", and on "life" "very toxic to aquatic life". On "container" each highlighted line slides into a control cell of ws-v02's risk table: "no food or drink", "safety glasses" (glasses plate small), "waste container" (waste bottle plate small).

Upgrade (Revision 4): The safety data sheet card fills the left half; its filler lines are plain bars, and the three highlighted lines are real words at 38 px in terracotta. On "three facts" an ink hand tag "take only what you need" writes above the card. Each line's slide into its control cell is a pen arrow, and the glasses and waste bottle plates in the cells are about 200 px each. On "a waste container" a teal pen bracket joins the three pairs with a teal hand tag "fact → control".

### 10. acknowledging sources
> Finally, we acknowledge every source, in an accepted referencing style. In the text, a short citation names the author and the year. At the end, a reference list gives the full entry: the author, the year, the title, the publisher, and where to find it. Many schools use a style called A P A. Use the style your school uses, and be consistent, so a reader can find and check the same source **again**.

Visual: a coded report extract writes at the right: "... the crystals should lose 36.1% of their mass ([Data sheet publisher], [year])." with the bracket part underlined, tag "in-text citation: author, year". Below a "References" heading, an entry for that same document writes with its parts labelled by leader lines as spoken: "[Data sheet publisher]. ([year]). *[Data sheet title]: Relative atomic masses*. [Publisher]. [URL]" (labels "author", "year", "title", "publisher", "where to find it"; tag "example layout, APA style"). On "again" a thin arrow runs from the citation to its matching entry and on to the data-sheet card (Revision 2: the in-text claim and the reference entry now name the same document). A second, smaller entry writes beneath it as a separate example with its own tag "another entry: a safety data sheet": "[Supplier name]. ([year]). *Copper(II) sulfate pentahydrate: Safety data sheet*. [URL]".

Upgrade (Revision 4): The report extract and the reference entry are 38 px, with the labelled parts in navy and leader lines as pen lines. On "a short citation names the author and the year" a navy pen underline marks the bracketed citation with a navy hand tag "author, year". On "the full entry" a pen bracket spans the entry. On "be consistent" an ink hand tag "one style, all the way through" writes beside the entries. On "find and check the same source again" the arrow from citation to entry to card is a pen arrow. The second example entry is 30 px in dark ink.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Students made a sand and salt mixture that was exactly seventy point zero percent salt, then separated it. Student P recovered sixty-nine point six, sixty-nine point eight and sixty-nine point five percent salt. Student Q recovered seventy-four point one, seventy-three point nine and seventy-four point two. Compare the accuracy and precision of their results, and give one way to make sure the balance gave accurate readings. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A sand and salt mixture was made to contain exactly 70.0% salt by mass. Two students separated samples of it three times each. Salt recovered (% of mixture): Student P: 69.6, 69.8, 69.5. Student Q: 74.1, 73.9, 74.2. (a) Compare the accuracy and the precision of the two students' results. (b) Describe ONE step that ensures the balance gives accurate readings. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no number line).

Upgrade (Revision 4): The card text is 38 px with its data rows at 34 px. From the first frame the card's right side carries a watch glass of recovered salt (`y11c-watch-glass-salt-v1.png`, about 260 px wide), untagged. Nothing answer-bearing (no number line, no balance check shown).

### 12. feedback 1 (brief)
> Both sets are precise, because each student's readings agree closely. P's are accurate, close to seventy point zero. Q's are all about four percentage points high, so something added mass, such as salt that wasn't fully dry. To check the balance, zero it, then weigh a check mass of known value. Saying Q is accurate because the readings agree is the classic slip. That's precision, not **accuracy**.

Visual: card shrinks to the top. A `DotLine` from 68 to 76% with a gold mark at 70.0: P's dots cluster on it, Q's cluster near 74; spread brackets on both "0.3" (tag "both precise"); a gap bracket "≈ 4 percentage points high" on Q. Rows: "(a) both precise; P accurate; Q not (shifted high every time, e.g. damp salt)"; "(b) zero, then check with a known check mass". On "accuracy" a chip "Q is accurate: the readings agree." fades in and is crossed. Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "made to be 70.0% salt | P: 69.6, 69.8, 69.5 | Q: 74.1, 73.9, 74.2". The dots drop live onto the line with the gold mark at 70.0. The answer rows are framed in green with a tick as they land (38 px), with "precise" in violet and "accurate" in teal. On "about four percentage points high" the gap bracket is a pen bracket with a rose hand tag "shifted". On "accuracy" the crossed chip is struck in red with a red hand tag "that's precision".

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A student needs the solubility of salt in water, and finds three sources. A chemistry data handbook from a university publisher, from twenty twenty-two. An anonymous comment under a video, with no date. And a salt supplier's safety data sheet, from twenty twenty-three. Choose the two most reliable sources and justify your choice. Then state what a reference list entry must include. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with three small coded source cards: "A: Chemistry data handbook, university press, 2022"; "B: anonymous comment under an online video, no date"; "C: salt supplier's safety data sheet, 2023". Card text: "A student needs a value for the solubility of sodium chloride in water. (a) Choose the TWO most reliable sources and justify your choice. (b) State FOUR pieces of information a reference list entry should include. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

Upgrade (Revision 4): The card text is 38 px and the three source cards (34 px) sit on the card's right side from the first frame as its picture. Nothing answer-bearing (no ticks).

### 14. feedback 2 (brief)
> A and C. Both have named, accountable authors, both are dated, and they're written to inform, so they can be checked against each other. The comment has no author, no date, and no way to check it. A reference list entry needs the author, the year, the title, and the publisher or where to find it. Choosing the comment because lots of people liked it is the classic slip. Popular isn't the same as **reliable**.

Visual: card shrinks to the top. The four-question `CheckList` runs against the three cards: A and C tick all four (teal), B crosses all four (rose). Row "(a) A and C: accountable authors, dated, to inform, can be cross-checked"; row "(b) author, year, title, publisher or URL". On "reliable" a chip "B: lots of people liked it" fades in and is crossed. Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "A handbook, 2022 | B anonymous comment, no date | C supplier's safety data sheet, 2023". On "A and C" the answer "(a) A and C" is framed in green with a tick (52 px) as the check list runs. On "the author, the year, the title" the answer "(b) author, year, title, publisher or where to find it" is framed in green (38 px). On "reliable" the crossed chip is struck in red with a red hand tag "popular ≠ reliable".

### 15. conclusion and handoff
> So we follow the plan safely, and check our safety as we go. We set up the balance to read truly, and judge accuracy against an accepted value. And we choose reliable sources, take what we need, and acknowledge them. One of those sources, the data sheet, is really a periodic table. Let's go back inside its atoms. How does s p d f notation locate the electrons in an **atom**?

Visual: the memory line returns small at the top; a strip writes as spoken: "safe: follow and check → accurate: zero, check mass, accepted value → sourced: who, why, when, agree → acknowledged". On "data sheet" the data-sheet card from scene 8 slides to the centre and grows into the full periodic table outline (final frame, see "Opening frame and final frame"); P, Cl and Fe highlight with "?" for their electrons; v10's "s", "p", "d", "f" chips slide in at the right. On "atom" the chip "Next: How does spdf notation locate the electrons in an atom?" writes. Hold about 2 seconds. This is the final frame (v11 opens on it).

Upgrade (Revision 4): The four-step strip is 34 px with pen arrows between steps. Nothing else is added: the periodic table and its three highlighted cells assemble exactly as described under "Opening frame and final frame". Builders draw its grid in dark ink on the paper stage (the final-frame text says "light grey grid on the dark board", kept only so the join text matches v11).

### 16. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Follow the planned safety controls, and check them as you work.
2. Accurate: close to the accepted value. Precise: repeated readings agree closely.
3. For accuracy: zero the balance, test it with a check mass, cool before weighing.
4. Results that agree can all be shifted. More repeats won't fix that; a new method will.
5. Sources: who, why, when, and does it agree? Cite the author, year, title, publisher.

Memory aid (framed card beside the notes, hand lettering): *Who, why, when, and does it agree?* Notes 34 px in the role colours (accurate teal, precise violet); no paragraphs. The whole notes scene runs 45 s. At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why follow the controls: the plan only protects people if followed (2). Why evaluate during the work: incidents show where a control fails (3). Why cool before weighing: burns and low readings (3). Why zero and use a check mass: so readings are true (4). Why one balance per sample: balance-to-balance differences would enter the subtraction (4). Why class 2 is precise but not accurate: the method shifted every result (7). Why repeats don't help: every repeat shares the shift (7). Why the comment is unreliable: it fails all four questions and contradicts the SDS (8). Why extract three facts: they set the controls (9). Why acknowledge: so a reader can find and check the source (10).
- **Misconceptions addressed:** safety as a one-off form (3); a display digit guarantees accuracy (4); agreement means accuracy (7, crossed in 12); more repeats fix everything (7); popular means reliable (crossed in 14).
- **One idea at a time:** problem (1), safe practice (2, 3), accuracy set-up (4), definitions (5), judging accuracy (6, 7), sources (8), extraction (9), acknowledgement (10).
- **Video makes it easier:** incidents play out and the plan updates (3); the readout settles to 0.00 and 10.00 (4); dots drop onto one number line beside the gold accepted value, with spread and gap brackets (5 to 7); ghost repeats pile up without moving (7); the check list crosses the comment card (8); highlighted SDS lines slide into the risk table (9); leader lines label a reference entry (10).
- **Response opportunity:** one 3 s prediction (6); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 27 s and 30 s.
- **Avoided double teaching:** the plan, risks and the desiccator step (ws-v02) are recalled; error names and uncertainty are left to ws-v05; tables and graphs to ws-v04.
- **Syllabus coverage:** `C11-WS3-01` (2, 3); `C11-WS3-02` (4 to 7, A1); `C11-WS3-03` (8 to 10, A2).
- **Out of scope by design:** random and systematic error by name, uncertainty, percentage error (ws-v05); recording tables and graphs (ws-v04).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A sand and salt mixture was made to contain exactly 70.0% salt by mass. Two students separated samples of it three times each. Salt recovered (% of mixture): Student P: 69.6, 69.8, 69.5. Student Q: 74.1, 73.9, 74.2. (a) Compare the accuracy and the precision of the two students' results. (b) Describe ONE step that ensures the balance gives accurate readings."
Model answer: (a) Both sets are precise: each student's three results agree within 0.3 (1 mark). P's results (mean about 69.6%) are close to the accepted 70.0%, so they are accurate; Q's (mean about 74.1%) are about 4 percentage points too high in every run, so they are not accurate, suggesting something added mass each time, such as salt that was not fully dried (1 mark). (b) Zero the balance with nothing on the pan, then weigh a check mass of known value and confirm the reading matches (also accepted: weigh every sample on the same balance; cool samples before weighing) (1 mark). Classic mistake (crossed): "Q is accurate because the readings agree closely" (that is precision).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "A student needs a value for the solubility of sodium chloride in water. They find three sources. A: Chemistry data handbook, university press, 2022. B: An anonymous comment under an online video, no date. C: A salt supplier's safety data sheet, 2023. (a) Choose the TWO most reliable sources and justify your choice. (b) State FOUR pieces of information a reference list entry should include."
Model answer: (a) A and C. Both have identifiable, accountable authors (a university publisher; a supplier legally required to provide accurate safety information), both are dated, both are written to inform, and their values can be checked against each other. B has no author, no date and no evidence, so it can't be checked (2 marks). (b) Author (or organisation), year, title, and publisher or URL (where to find it) (1 mark). Classic mistake (crossed): choosing B because many people liked it (popularity isn't reliability).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Class 1 (illustrative) | 36.0, 35.8, 36.2%; mean 36.0; spread 0.4 | 1, 5, 7 |
| Class 2 (illustrative) | 34.3, 34.5, 34.4%; mean 34.4; spread 0.2; about 1.7 below 36.1 | 1, 6, 7 |
| Accepted value | 36.1% (v07, from the formula) | 1, 5, 7, 10 |
| Balance | 0.00 g zero; check mass 10.00 g; hot reading 25.91 → 25.88 g (illustrative) | 3, 4 |
| Reading logged | crucible + crystals 26.81 g (ws-v01) | 4 |
| A1 | 70.0%; P 69.6, 69.8, 69.5 (mean 69.6, spread 0.3); Q 74.1, 73.9, 74.2 (mean 74.1, spread 0.3); Q ≈ 4 points high | 11, 12 |
| A2 | 2022; 2023 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- Class 1 mean (36.0 + 35.8 + 36.2) ÷ 3 = 36.0; range 0.4. Class 2 mean 34.4; range 0.2; 36.1 − 34.4 = 1.7.
- 2.50 × (1 − 0.344) = 1.64 g (class 2 matches the ws-v02 trial reading).
- P mean 69.63, range 0.3; Q mean 74.07, range 0.3; 74.07 − 70.0 = 4.07.

## Safety facts check (self-check, 5 November; Codex to confirm)

- Glasses before lighting; hair tied back; lid ajar; small blue flame; tongs and heatproof mat; balance away from the flame; cool in a desiccator before weighing; darkening powder means decomposition has started: stop heating, do not use that run for water content, restart gently after teacher review (Revision 2). All consistent with ws-v02's risk table and standard school practice. No new safety rule is invented.
- Copper(II) sulfate pentahydrate hazards as `chem-y11-ws-v02.md` author note c.

## Memory aid check

- **"Who, why, when, and does it agree?"** Written for this video. Meaning, as said in scene 8: four questions that decide whether a secondary source is reliable: the author's expertise and accountability, the purpose, the date, and corroboration. Assumptions checked: "when" matters most for changing information (safety and data revisions) and less for settled constants, so the aid asks "is it up to date?" rather than "is it new?"; a source can pass all four and still be wrong, which is why "does it agree?" is kept. It helps a new case: A2 applies it directly, and every later secondary-source task (ws-v04 to ws-v07; depth studies) can use it.
- **Considered, not used:** the CRAAP test (five criteria with an acronym that is hard to say aloud and overlaps "who" and "why"); "precise is close together, accurate is close to the target" as a slogan (the number line shows it better and the four-target picture is a site figure already).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,316 characters**, 16 scenes. At 13.3 characters per second the speech is about 475 s; add about 10 s of holds and settling (the incidents in 3, the readouts in 4, the dot drops in 5 and 7, the source checks in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 564 s (9.4 minutes)**.

Revision 4 (12 Nov 2026): narration unchanged (6,344 characters, 16 scenes). The notes scene is now 45 s in all (it was about 58 s), so the estimate falls from about 567 s to about 554 s.

## Scene list and build ids

Lesson key `c-y11-ws-v03` (route chem-y11-ws-v03; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v03`.

In order (16 scene headings, all `### N.`): hook, safe-practice, evaluate-safety, ensure-accuracy, accurate-precise, prediction, judge-accuracy, reliable-sources, extract, acknowledge, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: ws-v02's final frame into scene 1 by camera continue (`PlanBoard` shrinks to a thumbnail); 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 camera push to the balance; 4 to 5 camera continue; 5 to 6 to 7 camera continue (the number line stays); 7 to 8 clear change (source cards); 8 to 9 camera push to the SDS card; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-ws-v03-learning-review.md`, `checks/c-y11-ws-v03-science-check.md`.

Revision 4: key-notes hold is 45 s in all. No transition changed.

## Assets

Have (inspected 5 November on a paper contact sheet; uniform scaling only):
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scenes 2, 9.
- `public/assets/chemistry/m8-desiccator-v1.png`: scenes 3, 7.
- `public/assets/chemistry/m5x-waste-bottle-v1.png`: scene 9.
- From ws-v02 (requested): `y11c-cuso4-crucible-lid-v1.png`, `y11c-cuso4-crucible-lid-white-v1.png`, `y11c-crucible-tongs-v1.png`, `y11c-heatproof-mat-v1.png`. From v06 (requested): `y11c-top-pan-balance-v1.png`. From v07 (requested): the lit crucible flame (scene 2).
- **Inspected, not used:** `m6-analytical-balance-v1.png` (four-decimal instrument; the series uses the 0.01 g balance); `carbon-12-molar-mass-balance.png` (a molar-mass teaching image, not a check mass).

Need (new plates, Codex):
1. `y11c-check-mass-v1.png`: scene 4. Wanted; fallback: the readout alone with a coded chip "check mass 10.00 g" (weaker: the object being weighed should be visible).

Coded: run strip, incident flags, readouts and logbook rows, `DotLine`, gloss chips, source cards, the online comment card (text only, no avatar), `CheckList`, SDS filler lines and highlights, risk-table cells, report extract and reference layout, periodic table outline (final frame; becomes v11's opening), s p d f chips, attempt cards, countdowns, key notes board.

Revision 4 (12 Nov 2026). Now delivered and used (confirmed by file listing, not re-inspected): `y11c-check-mass-v1.png`, `y11c-cuso4-crucible-lid-v1.png`, `y11c-cuso4-crucible-lid-white-v1.png`, `y11c-crucible-tongs-v1.png`, `y11c-heatproof-mat-v1.png`, `y11c-top-pan-balance-v1.png`. The check-mass fallback is withdrawn. Existing plates newly used: `m5-g02b-open-crucible-v1.png` (scene 7, the uncovered crucible), `y11c-watch-glass-salt-v1.png` (attempt 1 card). No lit variant of the lidded crucible exists, so scene 2 keeps a coded flame under the lidded crucible plate. New plate requests: none. Simulation: the chance engine for scene 7.

## Codex asset brief (Year 11 Chemistry WS v03)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-ws-v03.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to the ws-v02 tongs and mat plates, at least 8 per cent clear margin, no text, engraved numbers, labels, people, hands, faces, backdrop, glow or ground shadow. Never stretch.

1. `y11c-check-mass-v1.png` (1000 × 1000 px): one polished stainless-steel cylindrical calibration weight with a knob top (the classic laboratory check-weight shape), three-quarter view, no engraved value (the value is coded beside it). It must sit on the pan of `y11c-top-pan-balance-v1.png` at a believable scale (about one quarter of the pan's width).

Report inspection on the paper and dark board backgrounds at about 300 px wide, and the placement on the balance pan. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-ws-v03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the claims: a hot object reads low on a balance; anhydrous copper sulfate takes up water from the air; a check mass checks a balance's readings; the copper(II) sulfate pentahydrate hazards (ws-v02 author note c); repeats cannot remove a shift shared by every run.
3. Confirm the definitions of accurate, precise, valid and reliable match ws-v01 and ws-v02 word for word in meaning.
4. Confirm the reference example uses placeholders only and is tagged "example layout"; confirm the APA pattern in author note e.
5. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
6. Confirm the three syllabus quotes match `chem-2017-y11.json` exactly.
7. Confirm no person, hand, face or avatar is drawn or requested.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Confirm the opening frame equals ws-v02's final frame and the final frame matches v11's opening.

Revision 4 (visuals only), also check: the narration lines are identical to Revision 3; every phrase quoted after "On" in an "Upgrade (Revision 4)" paragraph is in that scene's narration, in spoken order within the paragraph; the chance run's readouts (mean about 34.4%, gap about 1.7; then 36.0 to 36.2 on the gold mark) are tagged illustrative and contradict nothing spoken; the attempt card pictures give nothing away; every plate named exists.

## YouTube metadata (draft)

Title: Accurate vs Precise, Lab Safety and Reliable Sources | Year 11 Chemistry Skills

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Two classes heat copper sulfate crystals and both get tightly grouped results, but only one is close to the formula's 36.1%. Which is accurate, and how would you know? Learn how to follow and check safe work practices as you go, how to set up a balance for true readings (zero it, use a check mass), the difference between accurate and precise, why more repeats can't fix a shifted method, how to judge a secondary source (who, why, when, and does it agree?), what to take from a safety data sheet, and how to acknowledge sources in an accepted referencing style. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Conducting Investigations.
Syllabus content (NSW Chemistry Stage 6):
"employ and evaluate safe work practices and manage risks (ACSCH031)"
"use appropriate technologies to ensure and evaluate accuracy"
"select and extract information from a wide range of reliable secondary sources and acknowledge them using an accepted referencing style"

Previous: Planning a chemistry investigation that gives valid data. Next: How spdf notation locates the electrons in an atom.

#Year11Chemistry #Chemistry #WorkingScientifically #HSCScience

## Open decisions

- **1. Referencing style (root).** APA is named as one common style; the narration says "the style your school uses". Confirm, or name Harvard if the owner prefers.
- **2. Check mass plate (root).** One small new plate; coded fallback is weak but usable.
- **3. Error names (root).** "Systematic" is not said here, by design, to leave ws-v05 its full job. If root wants the word introduced now, one clause in scene 7 can add it.
- **4. Handoff bridge (root).** The data sheet grows into a periodic table for v11's opening. Confirm with the v11 design (`chem-y11-m1-v11.md`, same designer), which opens on it.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does "evaluate safe work" read as different from ws-v02's risk assessment; are accurate and precise kept apart on the number line at playback speed; is the cause of class 2's shift followable from the trial run; is the reference example clear without a real document), then the science check and Codex error check.
- Checker output (5 November): narration 6,316 characters; per scene (1 to 16): 417, 360, 598, 462, 412, 153, 506, 577, 297, 397, 460, 406, 416, 407, 373, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (6 November 2026, brief 178 repairs)

Findings from `../checks/c-y11-ws-v03-learning-review.md` and `../checks/c-y11-ws-v03-science-check.md` (status.md, "Codex hand-in: brief 178").

1. Scene 3 (should fix): darkening powder now means stop heating ("it's breaking down"), that run is not used to measure the water, and the work restarts gently after the teacher checks it; funded by cutting "Managing risk isn't a form you fill in once." (the check-and-fix sentence stays). Visual, PlanBoard line, Decisions and verification list match. Net +38 characters in this scene.
2. Scene 10 (should fix): the in-text citation and the main reference entry now name the same document (the relative-atomic-mass data sheet); the SDS entry is shown separately beneath it as another example. No speech change.
3. Feedback 1 (should fix): "about four percent too high" now "about four percentage points high"; "Only" and "every time" removed. Data unchanged; author note (g) matches.
4. Count (should fix): Revision 1 headline 6,316 corrected to the joined count 6,331.

Narration: 6,359 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; +28 against Revision 1's 6,331), about 567.2 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-ws-v03-rev2-error-check.md`): 0 blockers, 0 should fix. Nothing to resolve.
- Headline count restated as the sum of scene strings: 6,344 characters over 16 scenes (the earlier 6,359 included the 15 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).

## Revision 4 (12 Nov 2026)

Visual upgrade to `../maths-visual-standard.md` and the build gate. Visuals only: no narration line changed (checked by hash against Revision 3), so the brief 236 voicing stands.

Findings: the latest error check (`checks/c-y11-ws-v03-rev2-error-check.md`) was clean; nothing to resolve.

Changes:
- New section "Visual upgrade (Revision 4)"; each scene gains an "Upgrade (Revision 4)" paragraph.
- Anchor: the lidded crucible, desiccator and balance from ws-v02's final frame; the check mass is now the delivered plate.
- Simulation: scene 7's "more repeats won't fix that" is a chance-engine run with live "repeats", "mean" and "gap" readouts; a second run lands on the accepted value once the method changes.
- Hand tags (two or three) and a pen mark in scenes 1 to 5 and 7 to 10; the memory line is a framed card in scene 8.
- Answers framed in green (scenes 7, 12, 14); crossed slips struck in red with red hand tags; ghost dots and dimmed outlines drawn solid.
- Crucible icons, the coded lid and the bench outline are small copies of the painted crucible plates.
- Tags with a video code are reworded ("the trial run", "a later video").
- Question cards: attempt 1 gains a watch glass of salt; attempt 2 keeps its three source cards; feedback scenes gain navy givens strips.
- Key notes: five long items cut to five one-line bullets with the framed memory card; the notes scene is 45 s.
- Stage list recorded; no set-up ran past about 84 s, so no cut was added.

New plate requests: none.

Joins: the opening is ws-v02's final frame, unchanged. The final frame is unchanged word for word, so v11's opening holds; its "dark board" wording is a leftover and builders draw it on the paper stage.

Counts: 6,344 characters, unchanged; about 567 s to about 554 s.

Calls for root: (1) the chance run's second set (36.0, 36.1, 36.2) is illustrative and new on screen; (2) the final frame's "light grey grid on the dark board" wording should be corrected in both ws-v03 and v11 together, after voicing; (3) scene 2 still uses a coded flame under the lidded crucible.
