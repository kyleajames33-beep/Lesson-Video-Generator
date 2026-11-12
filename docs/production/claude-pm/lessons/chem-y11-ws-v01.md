# Year 11 Chemistry WS V01: Questioning and predicting. How can new evidence improve a testable chemistry question? (design)

Status: Revision 4 (12 Nov 2026): visual upgrade to maths-visual-standard.md, visuals only. Narration unchanged, so the brief 236 voicing is not affected. Needs a Codex error check of the visual plan before plates and build. Previously Revision 3 (7 Nov 2026): brief 186 error-check finding resolved by root, headline restated as the sum of scene strings, ready to voice.

Narration 6,314 characters (sum of scene strings; 6,328 with joining spaces; Revision 1 was 6,333 by the joined parser count), 15 scenes, about 567.7 s (9.4 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: first of the Year 11 Chemistry (2017 syllabus) Working Scientifically skills videos, playlist entry 11, between `chem-y11-m1-v10` and `chem-y11-ws-v02`. Templates: `phys-y11-fa1-v01.md` (structure, Decisions, Numbers used, length estimate), `bio-y11-fa1-v05.md` (plates and asset brief); skills-video format precedent `phys-y11-fa0-v01.md` to `v05.md` (format only: no physics content is reused; the shared kit components `HypothesisSlots`, `CheckList` and `EvidenceCard` are reused so the series keeps one visual system). Chemistry contexts are taken from the Module 1 videos the student has just seen: `chem-y11-m1-v06.md` (sand and salt mass accounting, constant mass) and `chem-y11-m1-v07.md` (copper sulfate pentahydrate, 36.1% water, heating to a white powder). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-ws-v01` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply questioning and predicting to that case and a new question; do not re-teach the subject mechanism"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches the route). The route marks it "partial context; add the missing explicit skill teaching from official WS content": it is an error-analysis lesson (titration and gravimetric errors), so only its key-terms card (hypothesis "testable ... specific about expected relationship"; independent, dependent and controlled variable) is used here; its error content belongs to `chem-y11-ws-v05`.

Owner rules applied: one main learner question; no people, hands, faces or body outlines ("groups" and "a student" exist only in words and on question cards; apparatus is shown alone); real apparatus as painted plates; question boxes, hypothesis slots, check lists, evidence cards and graphs coded; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame. Chemistry is recalled, never re-taught: v06 (constant mass; extra mass means something extra was weighed) and v07 (CuSO₄·5H₂O is 36.1% water; heating drives the water off) in a clause each.

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Questioning and Predicting", outcome CH11/12-1; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS1-01`: "develop and evaluate inquiry questions and hypotheses to identify a concept that can be investigated scientifically, involving primary and secondary data (ACSCH001, ACSCH061, ACSCH096)"
- `C11-WS1-02`: "modify questions and hypotheses to reflect new evidence"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 33)

**Boundary:** opens on v10's final frame (the model timeline, "new evidence → better model", v06's sand and salt bar). Teaches: an observation turned into an inquiry question that data can answer, naming what is measured and the condition (`C11-WS1-01`); a hypothesis as a testable prediction with a chemistry reason, in the if, then, because form; primary and secondary data, including a question only secondary data should answer (copper sulfate's breakdown temperature); four checks for a hypothesis (testable, specific, reasoned, could be shown wrong); sorting evidence that doesn't fit by what it challenges (the method, the prediction or the reason); modifying the hypothesis and the question to reflect it (`C11-WS1-02`); two attempts on the sand and salt separation. Not taught: variables, controls, equipment choice, risk and ethics (ws-v02); carrying out, accuracy and sources (ws-v03); error types (ws-v05); the dehydration steps of copper sulfate (author note b).

## Decisions

- **Learner question (route wording kept).** "How can new evidence improve a testable chemistry question?" is already the skill this video teaches, and its answer is concrete once the case is on screen. The answer, in order: evidence that didn't fit improved the atom (1); an observation becomes an inquiry question when it names what data will measure (2); a hypothesis adds a prediction and a reason (3); primary and secondary data test it (4); four checks judge it (5, 6); evidence that doesn't fit is sorted by what it challenges (7, 8); the hypothesis and question change to match (9).
- **Opening frame (equals v10's final frame, `chem-y11-m1-v10.md` scene 16).** Model timeline of three small coded atoms ("nuclear model", "Bohr model", "Schrödinger model") joined by arrows labelled "line spectra" and "atoms with more electrons", the tag "new evidence → better model", v06's sand and salt accounting bar small at the right with its teal overhang (tag "our investigation"), and the chip "Next: how can new evidence improve a testable chemistry question?". Scene 1's first two sentences play over it unchanged; the bar's teal overhang is v06's attempt 2 total (103.7%), so its meaning is exact.
- **Main case: the copper sulfate hydrate (v07), not a new reaction.** Brief rule: prefer contexts from the Module 1 videos just seen. v07 ended its hydrate scene with "heat the blue crystals gently ... if all the water leaves, the mass falls by 36.1%". That sentence is already a hypothesis, which makes it the cleanest case for building one, testing it and improving it. The sand and salt case from v03 and v06 is used for the hook and both attempts, so the student meets the skill on two familiar investigations and nothing new competes with it.
- **Inquiry question (plain meaning, scene 2).** "An inquiry question: one that data can answer." "What happens when you heat crystals?" is crossed (nothing specific to measure). The improved question names the measurement and the condition: "What percentage of the mass of blue copper sulfate crystals is lost when they are heated until their mass stops changing?" The "concept that can be investigated scientifically" (syllabus) is water of crystallisation, named on screen as a grey tag.
- **Hypothesis (scene 3).** "Hypothesis: a testable prediction with a reason" (the same plain meaning as the physics and biology skills videos, so a student taking more than one science meets one definition). Form: if, then, because, in coloured slots (navy, ink, gold). The site's key term ("A testable prediction based on prior knowledge; should be falsifiable and specific") is consistent; "falsifiable" is carried by "could some result show it's wrong?" and not used as a learner word.
- **Primary and secondary data (scene 4; syllabus "involving primary and secondary data").** Primary: masses read from a balance (crucible, crucible and crystals, after heating). Secondary: the relative atomic masses behind 36.1% (a published data sheet), and the breakdown temperature of copper sulfate, a question that should be answered from secondary data because testing it means very strong heating that gives off harmful gases (sulfur oxides; author note c). This is a chemistry reason for secondary data, not a convenience.
- **Four checks (scenes 5, 6).** Testable (something we can change or measure); specific (enough to answer the inquiry question, which here asks for a percentage; Revision 2, replacing "which way, or by how much", because "lose some mass" already gives a direction); reasoned (the because is sound chemistry); could be shown wrong (some result would contradict it). The weak candidate "The crystals will lose some mass when they're heated" is judged in the 3 s prediction: testable and falsifiable in principle, but not specific enough to answer the percentage question, and with no reason (two separate findings). ("Copper sulfate contains water", true but not a prediction about a measurement, was cut from Revision 1 narration for length; the learning review may restore it.) The hypothesis passes all four; "a result of 25% would show it's wrong" makes the fourth check concrete.
- **New evidence (scene 7; illustrative class data, tagged).** Three groups, each 2.50 g of crystals in a crucible of 24.31 g. A: gentle heating to constant mass, 0.90 g lost, 36.0% (fits). B: stopped after 4 minutes with pale blue patches, 0.69 g lost, 27.6%. C: a roaring flame, black solid at the bottom, 1.18 g lost, 47.2% (author note a: consistent with about 35% of the copper sulfate breaking down to black copper(II) oxide).
- **Sorting the evidence (scene 8; the video's key move; 3 s prediction at the end of scene 7).** "When evidence doesn't fit, ask what it challenges: the method, the prediction, or the reason." B is a method problem: the blue patches show water remained, so B never met the hypothesis's own condition; it doesn't change the hypothesis, but it shows that heating time matters. C met the condition (steady mass) and still lost far more: black solid shows the copper sulfate itself broke down, so the because ("heating drives off only water") was incomplete. This prevents the two classic errors: changing a hypothesis for every odd result, and ignoring a result that really does challenge it.
- **Modification (scene 9; `C11-WS1-02`).** Secondary check first, in one sentence: published data agree that copper sulfate breaks down only when it is much hotter than it needs to be to lose its water. Hypothesis modified in place (strike and rewrite): "If the crystals are heated **gently** until their mass stops changing, then they'll lose 36.1% of their mass, because gentle heat drives off the water, **while strong heat also breaks down the copper sulfate**." Question modified from B's evidence: "How does the time of gentle heating affect the percentage of mass lost by blue copper sulfate crystals?", with its prediction (rises, then levels off at 36.1% once all the water has gone) drawn as a dashed curve tagged "prediction". This is the question ws-v02 plans.
- **Memory aid:** "If, then, because: the because is the chemistry." (see "Memory aid check"), said in scene 3. The evidence-sorting rule in scene 8 is the second anchor and returns in the key notes.
- **Attempts (original, HSC style, on the sand and salt separation).** A1 (develop): a 20.00 g sand and salt mixture dissolved in 20 mL of water gives much less salt than expected; the card gives salt's solubility (about 36 g in 100 mL at room temperature). Write an inquiry question about the volume of water, and a hypothesis. Model: "How does the volume of water used affect the percentage of salt recovered from the mixture?"; "If more water is used, then more salt is recovered, because more water can dissolve more salt, leaving less in the sand." Crossed: "More water is better" (nothing to measure, no reason). A2 (modify): results for 20, 40, 60 and 80 mL are 35.5, 69.4, 69.6 and 69.5% (illustrative); explain and modify. Model: recovery rises to 40 mL, then stays near 70%: 40 mL can dissolve about 14 g, so all the salt has dissolved; modified hypothesis "... increases until all the salt dissolves, then stays the same, because extra water has no more salt to dissolve". Crossed: "Ignore the 60 and 80 mL results because they don't fit" (evidence that doesn't fit is what improves the hypothesis). Both cards carry every needed fact.
- **Mistake scene:** none separate. "An observation is an answer" (2); "a hypothesis is a guess" (3, the because slot); "every odd result means the hypothesis is wrong" (8, B); "ignore results that don't fit" (8, C; crossed in feedback 2); "more water is better" (crossed in feedback 1).
- **Definitions used across ws-v01 to ws-v03 (one consistent set, stated plainly where first needed):** valid: the method measures what it claims to measure (ws-v02); reliable: repeating the whole experiment gives consistent results (ws-v02); accurate: close to the accepted (true) value (ws-v03); precise: repeated readings agree closely, with a small spread (ws-v03). These match the physics FA0 set (`phys-y11-fa0-v05.md`). None is needed in this video, so none is introduced here. The site's conflation ("Valid result = free from systematic error"; "Validity = ... (accuracy). Reliability = ... (precision)") is not used (site note 1).
- **Site sources used:** `l18-intentions-title` key terms (hypothesis; independent, dependent and controlled variable, named for ws-v02). Nothing else: the site has no worked questioning-and-predicting example.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l18-intentions-title` and `l18-errortype-title` ("Validity and reliability"; "Key distinction for HSC answers"; trap 3): "Valid result = free from systematic error; reliable = consistent/reproducible", "Systematic errors reduce validity (accuracy). Random errors reduce reliability (precision/reproducibility)" and "Validity = free from systematic error (accuracy). Reliability = consistent on repeats (precision)." This merges four separate ideas into two. Suggested: valid, the method measures what it claims to measure; reliable, repeating the whole experiment gives consistent results; accurate, close to the accepted value; precise, repeated readings agree closely. A systematic error reduces accuracy; a method that measures the wrong thing is invalid even with no error.
  2. `l18-drill-title` drill 1: "Recorded mass too high → n(standard) too high → c(standard) too high → titre too small → c(analyte) calculated too low." A balance that reads 0.20 g high does not change the titre the student actually measures (the real solution is what it is); the calculated c(standard), and so c(analyte), is too high, not too low (author note e).
  3. `l18-errors-title`: the scenario cards list "Overshooting the endpoint" as systematic and "Parallax error when reading burette meniscus" as random, but the text-description figure below lists "a slight endpoint overshoot" as random and "misreading the meniscus angle" as systematic. The page contradicts itself; ws-v05 should choose one framing (consistent overshooting is systematic; variable eye level is random).
  4. `l18-errortype-title` equipment table: "Volumetric flask ±0.05 mL". Typical class A tolerances are about ±0.08 mL (100 mL) and ±0.15 mL (250 mL); suggest "about ±0.1 to 0.2 mL, depending on size" (Codex to confirm against a supplier table).
  5. `l18-practice-title` Q4 model answer: "far smaller than the error caused by an undiluted titrant" should read "a diluted titrant" (or "an unrinsed burette").
  6. `l18-intentions-title`: "Uncertainty ... expressed as ± half the smallest scale division" is the analogue-scale convention; digital readouts are usually quoted as ± one in the last digit. ws-v05's business; noted only.
- **Cause chain taught, in order:** (1) evidence that doesn't fit improves ideas (1); (2) an inquiry question names what data will measure (2); (3) a hypothesis predicts and gives a chemistry reason (3); (4) primary and secondary data test it, and some questions need secondary data (4); (5) four checks judge a hypothesis (5, 6); (6) evidence that doesn't fit is sorted by what it challenges (7, 8); (7) the hypothesis and question are modified to match (9).
- **Entry knowledge (route, refined):** Stage 5 fair tests and safe practical work; v06 (percentage by mass, constant mass, extra mass from incomplete drying), v07 (copper sulfate pentahydrate is 36.1% water; heating drives the water off to leave white anhydrous powder), v10 (models change with evidence).
- **Learner-visible vocabulary (plain meaning at first use):** observation (something noticed with senses or instruments, 2); inquiry question (one that data can answer, 2); hypothesis (a testable prediction with a reason, 3); primary data (collected by you, 4); secondary data (collected by someone else, 4); modify (change to fit the evidence, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **model timeline** carried in from v10 (shrinks to a corner chip in scene 1); **accounting bar** (v06's, small; its teal overhang glows); **question box** (a question writes, is crossed or underlined in parts as spoken: navy for what is measured, grey for the condition); **`HypothesisSlots`** (shared kit: "If" navy, "then" ink, "because" gold; strike and rewrite edits); **`CheckList`** (shared: four checks that tick, cross or dash against a candidate card); **`EvidenceCard`** (shared: three group cards that slide onto the hypothesis and glow "fits", or sort into three bins "method", "prediction", "reason"); **crucible row** (the copper sulfate crucible plates side by side with coded balance readouts); **prediction sketch** (scene 9: small coded axes "heating time" against "% mass lost" with a dashed curve rising to a grey 36.1% line); `Countdown` (3 s, 10 s), `QuestionCard` (subject "Chemistry"), `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (shared across ws-v01 to ws-v03):** "If" and independent-variable labels navy; "then" and measured quantities ink; "because" gold; evidence "fits" teal, "challenges" rose; "illustrative data" tag grey; crossed items red strike with a scribble cross.
- **Board layout (constant):** heading top left; plates and readouts in the left half; the question box, hypothesis slots and check list in the right half; evidence cards slide in from the lower right (above the caption-safe band).

Author notes (not learner copy):
(a) Copper sulfate numbers from v07 (site values, Cu 63.5, S 32.1, O 16.0, H 1.0): Mr 249.6; water 90.0; 36.058% (36.1%). 2.50 g loses 0.901 g (0.90 g), leaving 1.599 g (1.60 g). Group C: complete conversion to CuO (79.5) would lose 68.1%; a 47.2% loss is 36.06% + f × 32.09%, so f ≈ 0.35 of the CuSO₄ decomposed. Illustrative, tagged.
(b) Dehydration of CuSO₄·5H₂O is stepwise (roughly two waters lost below about 100 °C, two more near 110 to 150 °C, the last near 200 to 250 °C; sources vary). Not taught: the hypothesis needs only "gentle heating to constant mass removes all the water". The prediction curve (rise, then level) is smooth on screen; the steps would not show at 2-minute Bunsen intervals.
(c) Anhydrous CuSO₄ decomposes on strong heating (above roughly 600 °C; sources quote about 560 to 650 °C) to CuO and sulfur oxides (SO₃, or SO₂ and O₂). Learner copy says "harmful gases" and "much hotter than it needs to be to lose its water"; no temperature is stated. Science check to confirm. A Bunsen flame playing directly on a crucible base can exceed this locally, which is why the black solid appears at the bottom.
(d) Salt solubility: about 36.0 g NaCl per 100 g water at 20 °C (about 36 g per 100 mL, said "about"). 20 mL dissolves at most 7.2 g (36.0% of 20.00 g); 40 mL dissolves up to 14.4 g, more than the 14.00 g present (v06's 70.0% mixture). A2's data (35.5, 69.4, 69.6, 69.5%) are illustrative and consistent with that.
(e) Site note 2 logic: with the balance reading 0.20 g high, the student weighs out less standard than recorded, so the true c(standard) is lower than calculated. If the standard is the titrant, more is needed (titre larger) and c(analyte) = c(standard, as calculated) × V × ratio ÷ V(analyte) is too high. If the standard is pipetted into the flask, the titre is smaller but the believed n(standard) is too high, so c(analyte) is again too high. Either way, too high.
(f) Pronunciations: "two point five zero grams"; "thirty-six point one percent"; "copper sulfate"; "crucible" (KROO-si-bul).

Main question: *How can new evidence improve a testable chemistry question?*
Entry knowledge: Stage 5 fair tests; v06 (constant mass); v07 (copper sulfate pentahydrate, 36.1% water); v10 (models change with evidence).
Stops after: observation to inquiry question; hypothesis with a reason; primary and secondary data; four checks; sorting and using new evidence; modified hypothesis and question. No variables, controls, risk or accuracy (ws-v02, ws-v03).
Handoff: chem-y11-ws-v02, planning the modified question.

## Opening frame and final frame

- **Opening frame:** v10's final frame exactly (Decisions).
- **Final frame (ws-v02 opens on it):** at the left, the unlit blue crystal crucible (`y11c-cuso4-crucible-blue-v1.png`, from v07) with the small prediction sketch above it (axes "heating time (min)" and "% mass lost", dashed curve rising to a grey line "36.1%", tag "prediction"); at the right, the question box "How does the time of gentle heating affect the percentage of mass lost by blue copper sulfate crystals?" over the modified `HypothesisSlots` card ("If the crystals are heated gently until their mass stops changing, then they'll lose 36.1% of their mass, because gentle heat drives off the water, while strong heat also breaks down the copper sulfate."); beside it the clipboard plate (`m5x-clipboard-sheet-v1.png`) with a coded grey "plan: ?" on its sheet; the chip "Next: How does a chemistry plan produce valid, useful data?".

## Visual upgrade (Revision 4)

Each scene below keeps its Visual line and gains an "Upgrade (Revision 4)" paragraph. The Upgrade paragraph adds to the Visual and wins wherever the two differ. No narration line changed.

- **Anchor.** The video opens on v10's final frame (the coded model timeline). At about 9 s the real investigation arrives as painted plates: the top-pan balance (`y11c-top-pan-balance-v1.png`, about 420 px) with the watch glass of sand (`y11c-watch-glass-sand-v1.png`) beside v06's accounting bar. From scene 2 the crucible of copper sulfate crystals (blue, then white) is the running real object, and the three groups' crucibles carry the evidence in scenes 7 and 8.
- **Simulation: the heating run (scene 9).** A coded model of mass lost against gentle heating time, on one clock: a time readout runs 0 to 10 min, the "% mass lost" readout (52 px) rises and levels at 36.1%, the curve draws as the readout moves and the crucible plate cross-fades blue, patchy, white in step. Group B's point (4 min, 27.6%) sits on the curve and group A's (steady mass, 36.0%) on the level part. It is labelled "prediction (model)": only those two points are data, and they are the design's illustrative class data. The number line in scene 6 is the second live picture: the shaded band narrows from "almost any loss" to a thin band at 36.1%.
- **Colour key (fixed across ws-v01 to ws-v03).** "If" and the independent variable navy; "then" and measured quantities dark ink; "because" gold; evidence that fits teal; evidence that challenges rose; a framed answer green with a green tick; a crossed mistake red with a red hand tag; givens strips navy. Hand tags take the colour of the idea they mark. Every tag the Visual lines call "grey" is dark ink at full strength, and on-screen tags never show a video number ("v06" and "v07" tags are dropped or reworded).
- **Type sizes (1080p).** Heading 60 px; the question box, the current hypothesis slot, readouts and framed answers 44 to 52 px; question-card sentences 38 px (the attempt 2 card may drop to 34 px to hold its table and printed hypothesis); check-list lines, evidence cards and supporting lines 30 px or more; hand tags 42 px; key notes 34 px; nothing a student must read under 26 px.
- **Board stages and cuts.** (A) timeline, then the balance and the bar, scene 1 (about 37 s); (B) crucible and question box, scenes 2 and 3 (about 86 s; at scene 3 the board is re-laid with the hypothesis card full width); (C) primary against secondary, scene 4 (about 39 s); (D) the check list, scenes 5 and 6 (about 48 s); (E) the three crucibles and the bins, scenes 7 and 8 (about 84 s); (F) modify board, scene 9 (about 51 s): the hypothesis card, the question box and the live heating run; question and feedback cards; the final frame; the notes board. Revision 3 kept the three crucibles through scenes 7 to 9 (about 135 s); stage F is the new cut.
- **Question cards.** Each attempt card arrives whole with a picture from its first frame and nothing answer-bearing. Each feedback scene keeps a navy givens strip, frames the answer in green and crosses one classic mistake in red.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook: evidence that didn't fit
> Last time, the model of the atom changed three times, each time because of evidence that didn't fit. Your own investigations work the same way. Remember the sand and salt mixture, where the recovered masses added up to more than a hundred **percent**? That extra wasn't a maths mistake. It was new evidence, and it changed the question, from how much salt is there, to was the sand really **dry**? Today, we'll build a chemistry question and a hypothesis, then let new evidence improve **them**.

Visual: opens on v10's final frame (Decisions). On the first sentence the timeline's arrows glow in turn. On the second sentence the timeline shrinks to a corner chip "new evidence → better model" and v06's accounting bar slides to the centre and enlarges: sand and salt segments with the teal overhang past the "100%" end line. On "percent" the overhang is ringed with a scribble circle and its label writes "103.7%: extra mass". On "dry" a question box writes "How much salt is there?", then strikes and rewrites "Was the sand really dry?" (grey tag "v06"). On "them" the bar slides away left and the heading writes on: "From evidence to a better question".

Upgrade (Revision 4): The timeline is solid from the first frame. On "Your own investigations work the same way" the painted balance (about 420 px) with the watch glass of sand arrives solid at the left, and the accounting bar enlarges beside it. On "more than a hundred percent" the pen ring round the overhang takes a teal hand tag "103.7%: extra mass". On "It was new evidence" a teal hand tag "evidence, not a mistake" writes above the bar. On "was the sand really dry" the first question is struck with a slate line and the rewritten question (44 px) takes a navy pen underline; the tag "v06" is not shown.

### 2. from observation to inquiry question
> In the percentage video, heating drove the water out of blue copper sulfate crystals, leaving a white powder. That's an observation, something we notice with our senses or instruments. To investigate it, we turn it into an inquiry question, one that data can answer. What happens when you heat crystals? That's too broad, because there's nothing specific to **measure**. A better question is: what percentage of the mass of blue copper sulfate crystals is lost when they're heated until their mass stops **changing**? It names what we measure, the mass before and after, and the condition, heating to a steady **mass**.

Visual: the unlit blue crucible plate (`y11c-cuso4-crucible-blue-v1.png`) at the left cross-fades through the lit plate to the white powder (`m5-g02b-open-crucible-v1.png`) as the first sentence plays (coded steam wisps; grey tag "v07: water driven off"). A chip "observation: blue crystals → white powder" writes under it (gloss "observation: noticed with senses or instruments"). At the right a question box writes "What happens when you heat crystals?"; on "measure" it gains a grey tag "nothing specific to measure" and is crossed. On "changing" the new question writes beneath it (gloss "inquiry question: one that data can answer"). On "mass" the words "percentage of the mass ... lost" underline navy (tag "measured: mass before and after") and "until their mass stops changing" underlines grey (tag "condition: steady mass, v06"); a small grey tag "concept: water of crystallisation" sits under the box.

Upgrade (Revision 4): The crucible plates are about 460 px tall and solid; the tag reads "water driven off" with no video number. On "That's an observation" a teal hand tag "what we saw" writes beside the observation chip (38 px). On "one that data can answer" the gloss is navy hand lettering at 34 px. On "nothing specific to measure" the broad question is struck in red with a red hand tag "measure what?". On "A better question is" the new question writes at 44 px. On "It names what we measure" a navy pen underline marks "percentage of the mass ... lost" with a navy hand tag "measured"; on "heating to a steady mass" a second pen underline marks the condition with an ink hand tag "condition". The tags under the box are dark ink at 30 px with no video number.

### 3. a hypothesis, with a reason
> Next comes a hypothesis, a testable prediction with a reason from what we already know. A useful pattern is if, then, because. If blue copper sulfate crystals are heated until their mass stops changing, then they'll lose thirty-six point one percent of their mass, because the formula shows that water is thirty-six point one percent of the mass, and heating drives the water **off**. The reason is the part that makes it more than a guess. If, then, because: the because is the **chemistry**.

Visual: `HypothesisSlots` builds under the question as spoken: "If" (navy) "blue copper sulfate crystals are heated until their mass stops changing," "then" (ink) "they'll lose 36.1% of their mass," "because" (gold) "the formula CuSO₄·5H₂O shows water is 36.1% of the mass, and heating drives the water off." On "off" a small inset beside the because slot: v07's mass bar with the pale blue water group labelled "36.1%" lifting away (grey tag "recall: v07"). On "more than a guess" a chip "a hypothesis is a guess" fades in and is crossed. On "chemistry" the gold slot pulses and the memory line writes large: "If, then, because: the because is the chemistry." Hold about 2 seconds.

Upgrade (Revision 4): The board is re-laid: the hypothesis card takes the full width of the right two thirds and the crucible steps back to about 300 px. Each slot is 44 px with its lead word in its role colour. On "a testable prediction with a reason" a gold hand tag "prediction + reason" writes above the card. On "heating drives the water off" the mass-bar inset is solid, about 360 px wide, tagged "the percentage video" in dark ink (no video number). On "more than a guess" the chip "a hypothesis is a guess" is struck in red with a red hand tag "needs a because". On "chemistry" the memory line sits in a framed memory card (hand lettering, 52 px): navy "If," ink "then," gold "because: the because is the chemistry."

### 4. primary and secondary data
> Primary data are measurements you collect yourself, like masses read from a balance. Secondary data were collected by someone else, like the relative atomic masses behind our thirty-six point one percent, from a published data **sheet**. And some questions should only be answered with secondary data. At what temperature does copper sulfate itself start to break down? Testing that would mean very strong heating, which gives off harmful gases, so we'd look it up in published data from a reliable **source**.

Visual: the board splits. Left, tag "primary data: collected by you": the balance plate (`y11c-top-pan-balance-v1.png`, from v06) with the white crucible on its pan; a coded readout ticks "24.31 g" (tag "crucible"), then "26.81 g" (tag "crucible + crystals"), grey tag "illustrative data". Right, tag "secondary data: collected by someone else": on "sheet" a coded data-sheet card writes "Cu 63.5, S 32.1, O 16.0, H 1.0" with a thin arrow to the "36.1%" in the because slot. On "break down" a second question box writes "At what temperature does copper sulfate break down?" with a grey tag "very strong heat: harmful gases". On "source" a coded card "published data" stacks under it with a teal tick and the tag "answer this one with secondary data".

Upgrade (Revision 4): Both halves are on the board from the first frame: the balance (about 460 px) with the crucible at the left, the data-sheet card frame at the right. The readouts are live at 52 px and the tag "illustrative data" is dark ink at 30 px. On "measurements you collect yourself" a navy hand tag "yours" writes over the balance; on "collected by someone else" an ink hand tag "theirs" writes over the data sheet with a pen arrow to "36.1%". On "which gives off harmful gases" the tag is terracotta at 34 px with a pen underline. On "published data from a reliable source" the stacked card takes a teal tick with a teal hand tag "look it up".

### 5. judging a hypothesis (countdown, 3 seconds)
> So how do we judge a hypothesis? Is it testable, with something we can change or measure? Is it specific enough to answer the inquiry question, which asks for a percentage? Is the reason sound chemistry? And could some result show it's wrong? Here's a weaker one. The crystals will lose some mass when they're heated. Which check does it **fail**?

Visual: board clears to the right half. `CheckList` writes at the left as spoken: "testable: something to change or measure"; "specific: enough to answer the question (here, a percentage)"; "reasoned: the because is sound chemistry"; "could be shown wrong: some result would contradict it". A candidate card writes at the right: "The crystals will lose some mass when they're heated." On "fail" the 3 s `Countdown` ring runs beside it. No ticks yet.

Upgrade (Revision 4): The four check lines (38 px, numbered by hand in navy) and the candidate card (44 px) are on the board from the first frame of the scene. No hand tags during the countdown (thinking time).

### 6. reading the checks
> It's testable, and it could even be shown wrong, if the mass didn't change. But it gives no amount, so it isn't specific enough for our question. It also gives no reason. Our hypothesis passes all four checks, because a result of twenty-five percent would clearly show it's **wrong**.

Visual: the check list runs against the weak card: ticks on "testable" and "could be shown wrong" (tag "only if the mass didn't change"). On "gives no amount" a small coded number line 0 to 100% shades from just above 0 all the way along (tag "no percentage: almost any loss fits"); on "isn't specific enough" the "specific" check is crossed; on "no reason" the "reasoned" check is crossed. On the last sentence the hypothesis card from scene 3 slides in and ticks all four; on "wrong" a small line writes under it: "a result that would show it wrong: 25% lost", and the number line now shades only a narrow band at 36.1%.

Upgrade (Revision 4): The ticks are green pen ticks and the two failed checks take red pen crosses. On "It's testable" a green hand tag "passes 2" writes beside the two ticks. On "it gives no amount" the number line (labels 30 px) shades almost its whole length with a red hand tag "almost anything fits". On "Our hypothesis passes all four checks" the hypothesis card is framed in green with a tick, and on "would clearly show it's wrong" the shaded band narrows to 36.1% with a gold hand tag "one clear target".

### 7. new evidence from three groups (countdown, 3 seconds)
> Now the new evidence. Three groups each heated two point five zero grams of crystals. Group A heated gently until the mass stopped changing, and lost thirty-six point zero percent. That fits. Group B stopped after four minutes, with blue patches still showing, and lost only twenty-seven point six **percent**. Group C used a roaring flame. Their powder turned black at the bottom, and they lost forty-seven point two **percent**. Which one should change our hypothesis, and which one just points to a problem with the **method**?

Visual: board change. Three crucible plates in a row under "A", "B", "C": A the white powder (`m5-g02b-open-crucible-v1.png`, burner shown unlit by the plate set's unlit variant if painted, otherwise as is), B white with pale blue patches (`y11c-cuso4-crucible-patchy-v1.png`, new), C white with black solid at the bottom (`y11c-cuso4-crucible-black-v1.png`, new). Under each, a coded `EvidenceCard` writes "2.50 g → lost 0.90 g: 36.0%" (A), "lost 0.69 g: 27.6%" (B, with "4 min; blue patches"), "lost 1.18 g: 47.2%" (C, with "roaring flame; heated to steady mass; black solid", the steady-mass condition visible before the countdown, Revision 2); grey tag "illustrative data". A's card slides onto the hypothesis and glows teal "fits". On the first "percent" B's blue patches are ringed; on the second "percent" C's black base is ringed. On "method" three bins write under the cards, "method?", "prediction?", "reason?", and the 3 s `Countdown` ring runs. B and C wait above the bins.

Upgrade (Revision 4): The three crucible plates are about 380 px tall, solid from the first frame, with their letters at 52 px and each evidence card at 34 px; the tag "illustrative data" is dark ink. On "That fits" a teal hand tag "fits" writes on A's card with a teal pen tick. On "with blue patches still showing" the pen ring round B's patches takes a navy hand tag "still blue". On "turned black at the bottom" the pen ring round C's base takes a rose hand tag "black?". The three bins are labelled at 38 px. No further tags during the countdown.

### 8. what each result challenges
> Group B is a method problem. The blue patches show water was still there, so they didn't heat until the mass stopped changing, which our hypothesis already requires. It doesn't challenge the hypothesis, but it tells us that time matters. Group C is different. They did heat until the mass was steady, and they still lost far more than the water. Black solid means the copper sulfate itself broke down. So the because was incomplete, heating doesn't always drive off only water. When evidence doesn't fit, ask what it challenges: the method, the prediction, or the **reason**.

Visual: B's card drops into the "method?" bin, which fills teal-grey (tag "didn't meet the condition: water left"); a small chip "time matters" peels off B and parks at the top right. On "Group C is different" C's card lifts; on "steady" a tick "steady mass: condition met" writes on it; on "broke down" a small coded particle inset at C's black base shows a CuSO₄ unit splitting into a black CuO unit and a grey gas puff (grey tag "breaks down: more mass lost"). C's card drops into both "prediction?" and "reason?" bins (rose, "challenges"); the because slot in `HypothesisSlots` glows rose. On "reason" the rule writes large under the bins: "Evidence that doesn't fit: does it challenge the method, the prediction or the reason?"

Upgrade (Revision 4): On "Group B is a method problem" the answer tag "B: method" is framed in green (44 px) as its card drops. On "water was still there" a navy hand tag "not heated long enough" writes with a pen arrow to the patches. On "time matters" the chip is 38 px. On "Black solid means the copper sulfate itself broke down" a rose hand tag "more than water left" writes with a pen arrow to the black base; the particle inset is at least 300 px wide with labels at 30 px. On "the because was incomplete" the because slot takes a rose pen underline. The rule line is 44 px in a framed card.

### 9. modifying the hypothesis and the question
> Published data agree. Copper sulfate breaks down only when it's much hotter than it needs to be to lose its water. So we modify the hypothesis, with a condition and a better reason. If the crystals are heated gently until their mass stops changing, then they'll lose thirty-six point one percent of their mass, because gentle heat drives off the water, while strong heat also breaks down the copper **sulfate**. And Group B's evidence gives us a sharper question. How does the time of gentle heating affect the percentage of mass **lost**? Our prediction: the percentage rises, then levels off at thirty-six point one, once all the water has **gone**.

Visual: the "published data" card from scene 4 slides in beside C's bin with a teal tick (tag "secondary data agrees"). On "modify the hypothesis" `HypothesisSlots` edits in place: "gently" inserts after "heated" (strike and rewrite, gold underline), and the because slot gains "while strong heat also breaks down the copper sulfate" (gloss "modify: change it to fit the evidence"); on "sulfate" the C card's rose glow fades to teal "now explained". On "sharper question" the "time matters" chip slides into the question box, which strikes its old wording and rewrites: "How does the time of gentle heating affect the percentage of mass lost by blue copper sulfate crystals?"; on "lost" "time of gentle heating" underlines navy and "percentage of mass lost" ink. On "gone" small coded axes draw beside the box ("heating time (min)", "% mass lost") and a dashed curve rises and flattens onto a grey line "36.1%", tag "prediction".

Upgrade (Revision 4): Board change to the modify board, solid from the first frame: the hypothesis card at the upper right, the question box under it, and at the left the crucible (about 380 px) over the empty axes of the heating run. On "we modify the hypothesis" the inserted word "gently" and the added clause are gold with a gold pen underline and a gold hand tag "condition added, reason fixed". On "a sharper question" the old question is struck with a slate line and the new one writes at 44 px. On "the percentage rises, then levels off" the heating run plays live (see "Simulation"), with the readouts at 52 px, group B's point marked "B: 4 min, 27.6%" and a teal hand tag "levels at 36.1%" with a pen bracket on the flat part. The label "prediction (model)" is dark ink at 30 px.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A student dissolves a sand and salt mixture in twenty millilitres of water, filters it, and recovers much less salt than expected. Salt dissolves only up to a limit, about thirty-six grams in a hundred millilitres of water. Write an inquiry question about the volume of water used, then a hypothesis using if, then, because. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student separates a 20.00 g mixture of sand and salt by dissolving it in 20 mL of water, filtering, and evaporating the filtrate. Much less salt is recovered than expected. At room temperature, about 36 g of salt dissolves in 100 mL of water. (a) Write an inquiry question about the volume of water used. (b) Write a hypothesis in the form 'If ..., then ..., because ...'. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

Upgrade (Revision 4): The card text is 38 px. From the first frame the card's right side carries the painted beaker of sand settled in clear liquid (`y11c-sand-saltwater-beaker-v1.png`, about 280 px), untagged. Nothing answer-bearing.

### 11. feedback 1 (brief)
> One good question: how does the volume of water used affect the percentage of salt recovered from the **mixture**? A hypothesis: if more water is used, then more salt is recovered, because more water can dissolve more salt, leaving less behind in the sand. More water is better, is the classic slip. It names nothing to measure, and gives no **reason**.

Visual: card shrinks to the top. Row "(a) How does the volume of water used affect the percentage of salt recovered from the mixture?" with "volume of water" navy and "percentage of salt recovered" ink; boxed on "mixture". `HypothesisSlots`: "If more water is used, then more salt is recovered, because more water can dissolve more salt, leaving less in the sand." boxed "(b)". On "reason" a chip "More water is better." fades in and is crossed (caption "nothing measured, no because"). Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "20.00 g mixture | 20 mL of water | about 36 g of salt per 100 mL". The question row "(a)" is framed in green with a tick (38 px), with "volume of water" in navy. The hypothesis "(b)" is framed in green with its three lead words in navy, ink and gold. On "reason" the crossed chip is struck in red with a red hand tag "nothing measured, no because".

### 12. attempt 2 (countdown, 10 seconds)
> Last one. The student tests twenty, forty, sixty and eighty millilitres of water. The salt recovered is thirty-five point five, sixty-nine point four, sixty-nine point six and sixty-nine point five percent of the mixture. Explain what this evidence shows, and modify the hypothesis to reflect it. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small coded table: "Volume of water (mL): 20, 40, 60, 80. Salt recovered (% of mixture): 35.5, 69.4, 69.6, 69.5." and the hypothesis printed: "If more water is used, then more salt is recovered, because more water can dissolve more salt." Card text: "Each test used a 20.00 g sample of the same mixture. At room temperature, about 36 g of salt dissolves in 100 mL of water. (a) Explain what the new evidence shows. (b) Modify the hypothesis to reflect the evidence. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

Upgrade (Revision 4): The card text is 34 to 38 px with the table cells at 34 px; the printed hypothesis sits in its own tinted box. From the first frame the card's right side carries the same beaker plate (about 220 px), untagged. Nothing answer-bearing (no graph).

### 13. feedback 2 (brief)
> Recovery rises from twenty to forty millilitres, then stays at about seventy percent. Forty millilitres can dissolve about fourteen grams, so by then, all the salt has dissolved. So modify it. If more water is used, the salt recovered increases until all the salt dissolves, then stays the same, because extra water has no more salt to dissolve. Ignoring the last two results because they don't fit is the classic **mistake**. Evidence that doesn't fit is what improves the **hypothesis**.

Visual: card shrinks to the top. The four values plot as dots on small coded axes (volume against % recovered), rising then flat; a short row "40 mL × 36 g ÷ 100 mL ≈ 14 g: all the salt dissolves" and boxed "(a) rises, then levels near 70%". `HypothesisSlots` edits in place: "increases until all the salt dissolves, then stays the same, because extra water has no more salt to dissolve", boxed "(b)". On "mistake" a chip "Ignore the 60 and 80 mL results." fades in and is crossed. On "hypothesis" the scene 8 rule glows small at the top. Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "20, 40, 60, 80 mL | 35.5, 69.4, 69.6, 69.5% | about 36 g per 100 mL". The four points plot one at a time with a live readout of each value (44 px). On "then stays at about seventy percent" a teal hand tag "levels off" writes with a pen bracket over the last three points, and "(a)" is framed in green. On "all the salt has dissolved" the row "40 mL × 36 g ÷ 100 mL ≈ 14 g" is 44 px. On "then stays the same" the edited hypothesis "(b)" is framed in green with a tick. On "mistake" the crossed chip is struck in red with a red hand tag "never drop results that don't fit".

### 14. conclusion and handoff
> So an observation becomes an inquiry question that data can answer, then a hypothesis with a chemistry reason. And when evidence doesn't fit, we ask whether it challenges the method, the prediction or the reason. Our copper sulfate question is ready. Next, how does a chemistry plan produce valid, useful **data**?

Visual: the memory line returns small at the top. A strip writes across the upper half as spoken: "observation → inquiry question → hypothesis (if, then, because) → data (primary, secondary) → sort the evidence → modify". On "copper sulfate question" the strip fades and the final-frame elements assemble (see "Opening frame and final frame"): crucible and prediction sketch at the left, question box and modified hypothesis at the right, the clipboard "plan: ?". On "data" the chip "Next: How does a chemistry plan produce valid, useful data?" writes. Hold about 2 seconds. This is the final frame of the video (ws-v02 opens on it).

Upgrade (Revision 4): The strip of six steps is 34 px with a navy pen arrow between each pair. Nothing else is added: the final-frame elements assemble exactly as described under "Opening frame and final frame", drawn in full ink (its "grey line" is a solid dark-ink dashed line).

### 15. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Inquiry question: data can answer it; it names what is measured and the conditions.
2. Hypothesis: if (the change), then (the result), because (the chemistry).
3. Primary data: you collect it. Secondary data: collected by someone else.
4. Judge it: testable, specific, sound reason, and some result could show it wrong.
5. Evidence that doesn't fit: does it challenge the method, prediction or reason?

Memory aid (framed card beside the notes, hand lettering, navy, ink and gold as in scene 3): *If, then, because: the because is the chemistry.* Notes 34 px in the role colours; no paragraphs. The whole notes scene runs 45 s. At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the sand total changed the question: extra mass is evidence about drying (1). Why a broad question fails: nothing to measure (2). Why a hypothesis needs a because: the reason is what the test supports or challenges (3). Why some questions need secondary data: very strong heating gives off harmful gases (4). Why the weak hypothesis teaches little: almost any result fits it (6). Why B doesn't change the hypothesis: it never met the hypothesis's condition (8). Why C does: it met the condition and lost more, because the copper sulfate itself broke down (8). Why the question changes: B shows time matters (9).
- **Misconceptions addressed:** an observation is an answer (2); a hypothesis is a guess (3, crossed); every odd result disproves a hypothesis (8); results that don't fit should be ignored (crossed in 13); a vague "more is better" hypothesis (crossed in 11).
- **One idea at a time:** evidence improves ideas (1), question (2), hypothesis (3), data (4), checks (5, 6), evidence (7), sorting (8), modifying (9).
- **Video makes it easier:** the question box crosses and rewrites as it improves (1, 2, 9); the hypothesis builds in coloured slots and is edited in place (3, 9); the check list ticks and crosses each candidate, and the number line shows how much each one rules out (6); evidence cards drop into labelled bins (8); the prediction curve appears beside the improved question (9).
- **Response opportunity:** two 3 s predictions (5, 7); two unseen HSC-style tasks on the sand and salt separation, every fact on the card, 10 s each, nothing answer-bearing. Feedback about 22 s and 31 s.
- **Avoided double teaching:** constant mass (v06), copper sulfate's water percentage (v07) and model change (v10) are recalled in a clause each; variables, controls, risks and ethics are left to ws-v02; accuracy and sources to ws-v03.
- **Syllabus coverage:** `C11-WS1-01` (2 to 6, A1: develop and evaluate questions and hypotheses; concept named; primary and secondary data); `C11-WS1-02` (7 to 9, A2).
- **Out of scope by design:** variables and controls (ws-v02); accuracy, risk management in practice and referencing (ws-v03); error types (ws-v05); dehydration steps and decomposition temperatures (author notes b, c).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A student separates a 20.00 g mixture of sand and salt by dissolving it in 20 mL of water, filtering, and evaporating the filtrate. Much less salt is recovered than expected. At room temperature, about 36 g of salt dissolves in 100 mL of water. (a) Write an inquiry question about the volume of water used. (b) Write a hypothesis in the form 'If ..., then ..., because ...'."
Model answer: (a) "How does the volume of water used affect the percentage of salt recovered from the mixture?" (1 mark: names what is changed and what is measured). (b) "If the volume of water used increases, then the percentage of salt recovered increases, because a larger volume of water can dissolve more salt, so less salt is left in the sand." (2 marks: a specific, testable prediction; a reason from solubility). Classic mistake (crossed): "More water is better" (nothing measured, no reason).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "The student tests 20, 40, 60 and 80 mL of water. Each test used a 20.00 g sample of the same mixture. Salt recovered (% of mixture): 35.5, 69.4, 69.6, 69.5. The student's hypothesis was: 'If more water is used, then more salt is recovered, because more water can dissolve more salt.' At room temperature, about 36 g of salt dissolves in 100 mL of water. (a) Explain what the new evidence shows. (b) Modify the hypothesis to reflect the evidence."
Model answer: (a) Recovery increases from 20 mL to 40 mL, then stays at about 70%. 40 mL can dissolve about 14 g, so by 40 mL all the salt has dissolved; extra water cannot recover more (2 marks). (b) "If more water is used, then the percentage of salt recovered increases until all the salt has dissolved, then stays the same, because once all the salt has dissolved, extra water has no more salt to dissolve." (1 mark). Classic mistake (crossed): ignoring the 60 and 80 mL results because they don't fit.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sand and salt total (v06 A2) | 4.12 + 6.25 = 10.37 g of 10.00 g: 103.7% | 1 |
| CuSO₄·5H₂O (v07, site values) | Mr 249.6; water 90.0; 36.1% | 3, 4, 6, 9, final frame |
| Data-sheet values shown | Cu 63.5, S 32.1, O 16.0, H 1.0 | 4 |
| Crystals | 2.50 g; crucible 24.31 g; crucible + crystals 26.81 g | 4, 7 |
| Group A | 25.91 g after; lost 0.90 g; 36.0% | 7 |
| Group B | 26.12 g after; lost 0.69 g; 27.6% | 7 |
| Group C | 25.63 g after; lost 1.18 g; 47.2% | 7 |
| Falsifying example | 25% | 6 |
| A1, A2 | 20.00 g mixture; 36 g per 100 mL; 20, 40, 60, 80 mL; 35.5, 69.4, 69.6, 69.5%; 40 mL dissolves about 14 g | 10 to 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 63.5 + 32.1 + 4 × 16.0 + 5 × (2 × 1.0 + 16.0) = 249.6; 90.0 ÷ 249.6 × 100 = 36.06 (36.1). With data-sheet values (63.55, 32.07, 16.00, 1.008): 36.08% (36.1).
- 2.50 × 0.3606 = 0.901 g lost; 1.599 g left.
- 26.81 − 24.31 = 2.50. A: 26.81 − 25.91 = 0.90; 0.90 ÷ 2.50 = 36.0%. B: 26.81 − 26.12 = 0.69; 27.6%. C: 26.81 − 25.63 = 1.18; 47.2%.
- Full decomposition to CuO (79.5): (249.6 − 79.5) ÷ 249.6 = 68.1%; f = (47.2 − 36.06) ÷ 32.09 = 0.347.
- v06 A2: (4.12 + 6.25) ÷ 10.00 = 103.7%.
- Solubility 0.36 g mL⁻¹: 20 mL → 7.2 g (36.0% of 20.00 g); 40 mL → 14.4 g ≥ 14.00 g; 14.00 ÷ 0.36 = 38.9 mL needed.

## Memory aid check

- **"If, then, because: the because is the chemistry."** Written for this series (the physics FA0 videos use "the because is the physics", so a student who takes both meets one idea). Meaning, as said in scene 3: a hypothesis has three parts, the change or condition, the predicted result and the reason, and the reason must come from chemistry knowledge. Assumptions checked: the form is a useful pattern, not a rule (the narration says "a useful pattern", and a well-reasoned hypothesis written another way is fine); "the chemistry" includes a well-reasoned model such as a formula. It helps a new case: A1 asks for exactly this on an unseen investigation, and scene 8 shows why the because is the part new evidence can challenge. Introduced after the hypothesis is built.
- **Evidence-sorting rule** ("does it challenge the method, the prediction or the reason?"). A thinking step, not a slogan. Assumption: a result can challenge more than one part (C challenges both the prediction and the reason); the visual drops C into two bins so the rule is not read as one-bin-only.
- **Considered, not used:** "Ask, predict, test, revise" (a process list that doesn't help judge a hypothesis).

## Narration length estimate

Revision 1 count (5 November; build parser rules: `### N.` headings, only lines starting "> " counted, `**` removed): **6,319 characters**, 15 scenes (per-scene counts in Review notes). At 13.3 characters per second the speech is about 475 s; add about 10 s of holds and settling (the crucible cross-fade in 2, the memory hold in 3, the evidence cards in 7 and 8, the curve in 9), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 567 s (9.4 minutes)**, inside the band.

Revision 4 (12 Nov 2026): narration unchanged (6,314 characters, 15 scenes). The notes scene is now 45 s in all (it was about 58 s), so the estimate falls from about 568 s to about 555 s.

## Scene list and build ids

Lesson key `c-y11-ws-v01` (route chem-y11-ws-v01; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v01`.

In order (15 scene headings, all `### N.`): hook, inquiry-question, hypothesis, primary-secondary, judging, reading-the-checks, new-evidence, sorting-evidence, modifying, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); judging and new-evidence carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v10's final frame into scene 1 by camera continue (the timeline shrinks to a chip); 1 to 2 camera continue (the bar slides away as the crucible arrives); 2 to 3 camera continue; 3 to 4 split board; 4 to 5 clear change; 5 to 6 camera continue; 6 to 7 clear change (the crucible row); 7 to 8 camera continue; 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: judging and new-evidence (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-ws-v01-learning-review.md`, `checks/c-y11-ws-v01-science-check.md`.

Revision 4: key-notes hold is 45 s in all. Transition 8 to 9 is a board change to the modify board.

## Assets

Have (inspected 5 November on a paper contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m5-g02b-open-crucible-v1.png` (1280 × 1920; porcelain crucible of white powder on a pipeclay triangle and tripod over a lit Bunsen burner): scenes 2, 7 (group A).
- `public/assets/biology/m5x-clipboard-sheet-v1.png` (2000 × 2000; clipboard with a grid sheet): final frame, "plan: ?".
- From v07's request (not yet painted): `y11c-cuso4-crucible-blue-v1.png` and `y11c-cuso4-crucible-blue-lit-v1.png` (scenes 2, final frame). From v06's request (not yet painted): `y11c-top-pan-balance-v1.png` (scene 4). If either set is not painted, this video waits for it; nothing here duplicates them.
- **Inspected, not used:** `m6-analytical-balance-v1.png` (four-decimal balance with a draft shield; the readings here are 0.01 g); `m8-balance-watch-glass-v1.png` (same reason).

Need (new plates, Codex):
1. `y11c-cuso4-crucible-black-v1.png`: scene 7 (group C). Essential (the evidence that challenges the reason).
2. `y11c-cuso4-crucible-patchy-v1.png`: scene 7 (group B). Wanted; fallback: a 40% cross-fade of the blue crystal plate over the white powder plate (reads as pale blue, but less clearly patchy).

Coded: model timeline (from v10), accounting bar (from v06), question boxes, `HypothesisSlots`, `CheckList`, `EvidenceCard`s and bins, balance readouts, data-sheet card, number line, particle inset (CuSO₄ to CuO), prediction sketch, attempt cards, countdowns, key notes board.

Revision 4 (12 Nov 2026). Now delivered and used (confirmed by file listing, not re-inspected): `y11c-cuso4-crucible-blue-v1.png`, `y11c-cuso4-crucible-blue-lit-v1.png`, `y11c-cuso4-crucible-patchy-v1.png`, `y11c-cuso4-crucible-black-v1.png`, `y11c-top-pan-balance-v1.png`. Existing plates newly used: `y11c-watch-glass-sand-v1.png` (scene 1 anchor, with the balance), `y11c-sand-saltwater-beaker-v1.png` (both attempt cards). New plate requests: none.

## Codex asset brief (Year 11 Chemistry WS v01; adds to v07's crucible set)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-ws-v01.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and clean edges with no coloured fringe or halo (check on a black and a white background), ink and watercolour in the house style, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-cuso4-crucible-black-v1.png` (1280 × 1920 px, the canvas of `m5-g02b-open-crucible-v1.png`): **edit of that plate**, identical in every line (crucible, pipeclay triangle, tripod, burner position), except: the burner is unlit (match v07's unlit edit `y11c-cuso4-crucible-blue-v1.png` if it exists), and the white powder in the crucible has a clearly visible black, slightly fused crust at the bottom and lower sides, with off-white powder above; no smoke.
2. `y11c-cuso4-crucible-patchy-v1.png` (same canvas): identical to plate 1's unlit edit, except the powder is mostly white with several irregular pale blue patches (unchanged crystals) through it; no black.

Both must overlay `m5-g02b-open-crucible-v1.png` and v07's two edits exactly so they cross-fade. Report the overlay check on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-ws-v01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry of every learner-visible claim: gentle heating to constant mass removes the water of crystallisation; strong heating decomposes copper sulfate to a black solid with a larger mass loss and gives off harmful gases; copper sulfate breaks down only well above the temperature needed to remove its water (author note c); salt's solubility is about 36 g per 100 mL at room temperature; 40 mL can dissolve about 14 g.
3. Confirm every data item carries the "illustrative data" tag and is never reported as a real class result.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the two syllabus quotes match `chem-2017-y11.json` exactly.
6. Confirm no person, hand or face is drawn or requested ("groups" and "student" appear in words only).
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Confirm the opening frame equals v10's final frame and the final frame matches ws-v02's opening.
10. Check site notes 1 to 6 and confirm or reject each.

Revision 4 (visuals only), also check: the narration lines are identical to Revision 3; every phrase quoted after "On" in an "Upgrade (Revision 4)" paragraph is in that scene's narration, in spoken order within the paragraph; the heating run is labelled "prediction (model)", passes through 27.6% at 4 min and levels at 36.1%, and shows no other value as data; the attempt card pictures give nothing away; every plate named exists.

## YouTube metadata (draft)

Title: How to Write a Testable Chemistry Hypothesis (and Improve It) | Year 11 Chemistry

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Blue copper sulfate crystals should lose 36.1% of their mass when heated. One group lost 27.6%, another lost 47.2%. Which result should change the hypothesis? Learn how an observation becomes an inquiry question that data can answer, how to write a hypothesis with "if, then, because" so the reason comes from chemistry, how primary and secondary data test it, four checks for judging a hypothesis, and how to sort new evidence by what it challenges: the method, the prediction or the reason. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Questioning and Predicting.
Syllabus content (NSW Chemistry Stage 6):
"develop and evaluate inquiry questions and hypotheses to identify a concept that can be investigated scientifically, involving primary and secondary data (ACSCH001, ACSCH061, ACSCH096)"
"modify questions and hypotheses to reflect new evidence"

Previous: Line spectra and energy levels. Next: Planning a chemistry investigation that gives valid data.

#Year11Chemistry #Chemistry #WorkingScientifically #HSCScience

## Open decisions

- **1. Main case (root).** The copper sulfate hydrate (v07) carries ws-v01 to ws-v03 as one running investigation; the sand and salt separation (v03, v06) carries the hook and all six attempts. If root prefers the route's "current separation" as the only case, the hydrate scenes would need a new hook; the attempts already use the separation.
- **2. Shared definitions (root).** Valid, reliable, accurate and precise as in Decisions, matching the physics FA0 set and differing from the site's lesson 18. Root to confirm before ws-v05 is designed, since ws-v05 owns error types.
- **3. New plates (root).** Two crucible edits (black crust; pale blue patches). The patchy plate has a coded fallback; the black plate does not.
- **4. Plate prefix (root).** v07 requested `y11c-cuso4-crucible-blue-v1.png` and `-blue-lit-v1.png` before decision 2 set the `y11c-` prefix; this design uses v07's names as written. Rename all four together if root wants one prefix.
- **5. Site notes 1 to 6 (root).** For `site-corrections-chem-y11.md` if accepted.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the inquiry question's "names what we measure and the condition" land; does the evidence-sorting step feel like a reason, not a rule; is the jump from B's evidence to a time question clear; are the attempts answerable from the card alone), then the science check (author notes b, c) and Codex error check.
- Checker output (5 November): narration 6,319 characters; per scene (1 to 15): 483, 607, 485, 502, 328, 300, 518, 571, 639, 357, 345, 318, 481, 310, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (6 November 2026, brief 178 repairs)

Findings from `../checks/c-y11-ws-v01-learning-review.md` and `../checks/c-y11-ws-v01-science-check.md` (status.md, "Codex hand-in: brief 178").

1. Scenes 5 and 6 (should fix): the specific check is now "specific enough to answer the inquiry question, which asks for a percentage" (CheckList "specific: enough to answer the question (here, a percentage)"); the weak hypothesis is judged against it ("But it gives no amount, so it isn't specific enough for our question.") with the no-reason finding kept separate ("It also gives no reason."). Funded by cutting "With four checks" and "So almost any result would fit it"; the number-line visual retied to "gives no amount".
2. Scene 7 (should fix): Group C's EvidenceCard now shows "heated to steady mass" before the countdown. No speech change.
3. Count (should fix): headline corrected to the brief 177 parser convention (joins included): Revision 1 was 6,333, not 6,319.

Narration: 6,328 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; -5 against Revision 1's 6,333), about 567.7 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Root fix after brief 186 (6 Nov 2026)

- Scene 6: actions now follow the speech order: number line on "gives no amount", "specific" crossed on "isn't specific enough", "reasoned" crossed on "no reason". Ticks and the final hypothesis test unchanged. No speech or time change.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-ws-v01-rev2-error-check.md`), one should-fix cue finding, resolved: Scene 6: actions follow the speech order: number line on "gives no amount", "specific" crossed on "isn't specific enough", "reasoned" crossed on "no reason" (root fix after brief 186, already in the Visual; confirmed in this pass).
- Headline count restated as the sum of scene strings: 6,314 characters over 15 scenes (the earlier 6,328 included the 14 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).

## Revision 4 (12 Nov 2026)

Visual upgrade to `../maths-visual-standard.md` and the build gate. Visuals only: no narration line changed (checked by hash against Revision 3), so the brief 236 voicing stands.

Findings: brief 186's one finding was fixed by root at Revision 3; nothing open.

Changes:
- New section "Visual upgrade (Revision 4)"; each scene gains an "Upgrade (Revision 4)" paragraph.
- Anchor: the painted balance and watch glass of sand arrive at about 9 s beside the accounting bar; the crucibles carry scenes 2, 3 and 7 to 9.
- Simulation: scene 9's prediction is a live heating run (time and "% mass lost" readouts, the curve drawing, the crucible changing in step), labelled as a model; scene 6's number line narrows live.
- Cut: scene 9 is a new modify board. Before, the three crucibles ran about 135 s. Scene 3 re-lays the board with the hypothesis card full width.
- Hand tags (two or three) and a pen mark in scenes 1 to 4 and 6 to 9; the memory line is a framed card in scene 3.
- Answers framed in green (scenes 6, 8, 11, 13); crossed slips struck in red with red hand tags; rewritten questions use a slate line, not red.
- Tags with video numbers ("v06", "v07") are dropped or reworded; grey tags are dark ink.
- Question cards: both attempts gain the beaker of sand in liquid; feedback scenes gain navy givens strips.
- Key notes: five long items cut to five one-line bullets with the framed memory card; the notes scene is 45 s.

New plate requests: none.

Joins: the opening is v10's final frame, unchanged. The final frame is unchanged, so ws-v02's opening holds.

Counts: 6,314 characters, unchanged; about 568 s to about 555 s.

Calls for root: (1) the heating run shows a modelled curve between the two illustrative class points; (2) the attempt 2 card may need 34 px text to hold its table and printed hypothesis.
