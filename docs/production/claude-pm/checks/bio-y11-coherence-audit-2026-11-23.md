# Year 11 Biology (2025 syllabus): coherence audit, 23 November 2026

Independent review of the 94 Year 11 Biology designs before voicing or building, at three levels (course, focus area, lesson), against the site and the 2025 syllabus, plus the hand-over into Year 12. Companion table: `bio-y11-coverage-map-2026-11-23.md`. No existing file was edited.

**Inputs read.** `AGENTS.md`; `docs/visual-design-handbook.md` (for scope only); routes `docs/production/y11-bio-fa1-video-route.json`, `y11-bio-fa1-video-route.md`, `y11-bio-fa2-fa3-video-route.json`; pre-design index `docs/production/claude-pm/pre-design/y11-bio/y11-bio-index.md`; root decisions `docs/production/claude-pm/checks/root-decisions-bio-y11-*.md`; `docs/production/claude-pm/site-corrections-bio-y11.md`; ledgers `docs/production/programme/syllabus/bio-new-y11.json`, `bio-new-y12.json`, `timeline.md`; `docs/production/programme/syllabus-reuse-audit-2026-11-21.md/.json`; the Decisions, entry knowledge, opening frame, scene 1, handoff scene, final frame and site-error sections of all 94 designs (extracted by script), with targeted full reads; Year 12 designs `bio-m5-b06b`, `b07`, `b08`, `bio-m6-b07`; the read-only site clone `C:/Users/kygs/teaching-app-fix/subjects/biology/year11/` (main 5d74a62).

**Method notes.** Handoffs were checked mechanically for all 93 consecutive pairs: outgoing "Next" chip text, the next design's "Opening frame" restatement, its scene 1 bridge and its on-screen heading. Entry knowledge was traced for 13 designs with cross-video or cross-focus-area dependencies, plus the Year 12 designs that Year 11 now feeds. Site claims were checked live by text search of the current site files. Science was spot-checked on about 25 high-risk numerical and mechanism claims.

## Counts

| Severity | Count |
| --- | ---: |
| Blocker | 2 |
| Should fix | 9 |
| Note | 12 |

## Overall verdict

The plan is strong at lesson and focus-area level. Every FA1 to FA3 content point is routed, every practical has its own video, every one of the 75 site lessons is mapped, and the 93 handoffs form one unbroken chain of final frame to opening frame with a spoken bridge. Recurring devices are introduced once and reused (the 2n = 4 chromosome model from fa1-v26 to v31; the "Change / Measure / Keep the same" plan frame from fa1-v21 to fa2-v03, v07, v14 and fa3-v12; the cell plates `m5x-cell-protein-synthesis-v1` and `b6a-plant-cell-v1`; the systems hub from fa2-v16 to v22). Double-teaching inside Year 11 is controlled: later videos recall earlier ones in a clause (for example fa2-v22 recalls fa2-v02's surface-area rule; fa3-v15 recalls fa1-v09 and v11 for osmosis; fa3-v26 picks up fa3-v23's quadrat).

The gaps are at course level: two undesigned syllabus points that no longer need to be held, no Working scientifically strand, a site corrections log that stops at FA2 L09 while many live site errors contradict what the videos will teach on the same pages, and a Year 12 hand-over that has not been planned against the course students will actually take next.

## Blockers

### B1. Two FA3 syllabus points have no design, and their hold no longer applies

- **Where.** Route entries `bio-y11-fa3-v05` (B25-FA3-G1-05, Aboriginal palaeontological evidence for megafauna, site FA3 L05) and `bio-y11-fa3-v16` (B25-FA3-G2-06, how Aboriginal and Torres Strait Islander Peoples use adaptations of local plants and animals, site FA3 L13). `root-decisions-bio-y11-fa3.md` items 7, 14 and U2 keep both on "cultural hold". These are also the only coverage for FA0-G4-05 (Cultural Knowledges).
- **Why it blocks.** The owner decided on 18 November that no cultural reviewer will be sought and that such content is taught in general, safe terms rather than held. With the hold gone, two mandatory content points and one FA0 point are simply missing from the course.
- **Fix.** Design both now under the general-content rule: no named communities, people, sacred sites or specific traditional-knowledge cases; teach the scientific idea and general principles (for v05: the kinds of evidence, such as dated occupation layers containing megafauna remains, and rock art that depicts extinct animals described in general terms, and what each kind can and cannot show; for v16: general categories of use of adaptations, with acknowledgement, consent and benefit-sharing as principles). Then realign the frames that root decisions FA3 7 and 14 already anticipate: `bio-y11-fa3-v04.md` final frame and chip, `bio-y11-fa3-v06.md` opening and bridge ("Last time, isolation stopped gene flow"), `bio-y11-fa3-v15.md` final frame and chip, `bio-y11-fa3-v17.md` opening and bridge ("Last time, river fish and sea fish..."). Record the decision in `root-decisions-bio-y11-fa3.md`. The dingo holds (decisions 9 and 35; v06, v29, v31) can be reviewed at the same time (note N5).

### B2. Live site errors that contradict the videos are not in the corrections log

- **Where.** `docs/production/claude-pm/site-corrections-bio-y11.md` stops at "FA2 L09" (3 November). The designs `bio-y11-fa2-v10.md` to `bio-y11-fa2-v33.md` and all 30 FA3 designs each list "Site errors found" for root to forward, about 170 numbered items in all (some repeated across neighbouring designs); none is in the log. I re-searched 39 of the FA2 and FA3 passages in the current site files: 37 are still live and 2 no longer appear (the FA2 L19 hot-day reversal and FA3 L14 "Branch slope tells you the rate"). The already-logged FA1 L01 cytoskeleton claim is also gone.
- **Why it blocks.** Each video will sit on the page it contradicts. Students will see the site state one rule and the video the opposite, and copy the site's model answers. The worst cases reverse or break the idea the video teaches:
  - FA2 L18 SA3 model answer: diffusion rate "falls in proportion to area" (reversed; fa2-v22).
  - FA2 L20: "Excess water and salts also diffuse out into the dialysate" (two places; water is removed by ultrafiltration; fa2-v25).
  - FA2 L15: blood goes from leg muscle to gut to kidney "seconds later", and "exchange always follows a concentration gradient" (fa2-v21 teaches the circuit through heart and lungs, and active transport).
  - FA2 L12 SA3 model: phloem as "energy-requiring transport ... rather than passive flow" (contradicts fa2-v11's pressure flow).
  - FA2 L24: a lag "shows cause"; a regulating hormone "rising whenever the variable strays" (fails for glucagon); type 1 diabetes failure placed in the effector (fa2-v29, v31, v32).
  - FA2 L25: hard failure lines at about 42 and 28 degrees and "permanently destroyed" enzymes (fa2-v33).
  - FA3 L01, L03, L15: "finish the course" antibiotic advice (fa3-v01, v03, v18).
  - FA3 L12: marine bony fish "produce small volumes of concentrated urine" (14 occurrences; fa3-v15).
  - FA3 L15 SA Q2 calls illustrative figures "A published dataset" (fa3-v18).
  - FA3 L17 Activity 1 asks for a full tree from distances to humans only (fa3-v21).
  - FA3 L20 bar chart "Daily temperature range" uses yearly spans (fa3-v24 teaches this exact trap).
  - FA3 L24 "the predator's peak always coming after", "always lags" (fa3-v30).
  - FA3 L25 contradicts itself on whether predators set K, and its SA Q1 model says "treated with caution" where the card says reject (fa3-v31, v32).
- **Fix.** Root forwards the appendix below to Codex for the log (each item re-verified against the current file first, since some quotes came from the retired `C:/Users/kygs/hscscience` clone), and the owner applies the priority items before the matching videos are embedded. Where the owner prefers not to change the site, the video's on-screen wording stays as designed (the designs are right in every case listed above).

## Should fix

### S1. Biology has no Working scientifically strand

- **Where.** No `bio-y11-ws-*` or `bio-y11-fa0-*` designs. Physics (`phys-y11-fa0-v01` to `v07`) and Chemistry (`chem-y11-ws-v01` to `v07`) each have seven. Across the 94 Biology narrations: percentage error 0, outlier 0, referencing 0, "testable" 1, ethics 1, standard deviation 2 (fa2-v31, fa3-v32). FA0-G5-03 names percentage error, range, mean and standard deviation explicitly.
- **Fix.** Add a short Biology FA0 set (five to seven videos) adapted from the Chemistry or Physics WS designs, using data threads students already know (catalase fa1-v21, potometer fa2-v14, quadrats fa3-v26 to v28), placed as Physics root decision FA0 1 does (beside the first matching practical in each focus area). At minimum, one analysis video covering percentage error, range, mean, standard deviation and outliers, and one communicating video covering referencing, peer review and "contestable and testable".

### S2. 45 of 93 "Next" chips do not match the next video's heading

- **Where.** FA1 v01 to v02 and v10 to v15; FA2 v16 to v33; every FA3 pair. Root decision FA2 9 shortened on-screen headings but the chips still show the full route question, and many next openings "lift the Next chip into the heading", so the words change during the morph. Examples: fa3-v27 chip "Why can the proportion of recaptured marks estimate a population, and when does it fail?" becomes fa3-v28's heading "How can marked animals reveal the whole population?"; fa3-v28's chip becomes "Who gains, who loses?". fa2-v33's chip is only "Next: natural selection".
- **Fix.** Set each outgoing chip to the next design's on-screen heading (shorter chips also meet the 42 px hand-tag and three-bright-items rules better), keeping the full route question in metadata. Edit only the handoff scene and "Final frame" text of the outgoing design; the next design's opening restatement must quote the same text. The 45 mismatched outgoing designs: FA1 v01, v10, v11, v12, v13, v14; FA2 v16, v23, v25, v26, v27, v28, v29, v30, v32, v33; FA3 v01, v02, v03, v04, v06 to v15, v17 to v31.

### S3. Video order departs from site order on two pages, which breaks "last time" on embedded videos

- **Where.** FA1: fa1-v20 (site L18) plays before fa1-v21 (site L17). FA2: fa2-v19 (L16) and fa2-v20 (L17) play before fa2-v21 (L15). Route `orderingDecisions` records both, but not their effect on embedding: a student on site FA2 L15 meets fa2-v21, whose first line is "Here are two samples from last time", relying on plasma contents (v20, site L17) and vessels (v19, site L16) that the site has not shown yet. fa1-v21 (site L17) says it will not re-explain curve shapes and cites v20 (site L18).
- **Which is right.** For FA2 the design order is better teaching: you need what blood carries and where exchange happens before you can account for how each organ changes it. For FA1 both orders work; the route's reason (predict before you test) is sound.
- **Fix.** Add to the site corrections log, as an order suggestion: move FA2 L15 "Blood Through the Organs" after L17, and optionally swap FA1 L17 and L18. If the owner keeps site order, add a one-clause screen tag on fa2-v21 and fa1-v21 naming the video they build on ("builds on: What's in blood?").

### S4. Site paths and hashes in the routes are stale

- **Where.** Every design and route `sourceLesson.path` points to `C:/Users/kygs/hscscience/...`, which no longer exists; the read-only clone is `C:/Users/kygs/teaching-app-fix`. None of the 75 route `sha256` values matches the current files or their committed blobs, although main has not changed Year 11 Biology since 28 October, so the designs were read from a different checkout. Some quoted site text is already corrected on main (B2).
- **Fix.** Before each voicing batch, re-hash `sourceLesson` against `teaching-app-fix` main, update the path in both route files, and re-check each design's "Site alignment" quotes for the lessons whose text differs. Owner or root records which clone is canonical in `REPO-GUIDE.md` or `HANDOFF.md`.

### S5. Hand-over gap: 5' and 3' end names

- **Where.** `bio-m5-b06b.md` (likely to carry into Year 12 2025 as the first Heredity video) labels the template 3' to 5' and mRNA 5' to 3' everywhere and lists "the strands are antiparallel with a 5' (start) and a 3' (finish) end" as entry knowledge "from B4". B4 moves to Year 11, replaced by `bio-y11-fa1-v22.md` and `v23.md`, which show strand direction with arrows and say "opposite directions" but never name 5' and 3' in narration.
- **Fix.** Add one sentence and one screen tag to fa1-v22 scene where "Each strand has a direction" is drawn: "The start end is called the 5' end, said five prime, and the finish is the 3' end." Add it to fa1-v22 key notes. This costs about 8 seconds and also supports fa1-v23's lagging-strand explanation. Record in the Year 12 2025 transition plan that b06b's entry knowledge now comes from fa1-v22, v23 and v25, and that its spoken "as you saw last time" needs a re-voiced bridge.

### S6. Hand-over double-teaching: meiosis and variation

- **Where.** `bio-y11-fa1-v29.md` and `v30.md` teach crossing over, independent assortment, random segregation, 2 to the n (with 2 to the 23 over 8 million) and fertilisation. The reuse audit marks both `bio-m5-b08` and `bio-m6-b07` "likely carry" for B25Y12-FA1-G2-02, and also proposes `bio-m6-b07` as a Year 11 stand-in for fa1-v30. b08's and b07's entry knowledge lists the same items "from B5b". m6-b07 opens on the Daphne Major drought finches, the case fa3-v02 already uses ("drought, deeper beaks", plate `m6-finch-deep-beak-v1`).
- **Fix.** For Year 12 2025 carry only `bio-m6-b07` for G2-02 (it already treats the mechanisms as entry knowledge and adds implications and fertilisation), re-voice its bridge as a recall of fa1-v30 and of fa3-v02's finches, and retire `bio-m5-b08` from the 2025 Year 12 playlist or keep it as an optional review. Do not also use m6-b07 as the Year 11 v30 stand-in; voice fa1-v30 as designed.

### S7. Stand-in proposals conflict with the designed handoff chain

- **Where.** `syllabus-reuse-audit-2026-11-21.md` proposes published Year 12 videos as Year 11 stand-ins or re-cuts: `bio-m5-b06a` for fa1-v25, `bio-m8-b01` for both fa2-v26 and v27, `bio-m8-b03` for fa2-v29, `bio-m8-p02` for fa2-v14, `bio-m6-b07` or `bio-m5-b08` for fa1-v30, re-cuts for fa1-v24, v29, fa2-v13, fa3-v13. The Year 11 designs depend on each other's final frames, bridges, colour key and 2n = 4 model; for example fa2-v25's final frame opens fa2-v26, whose final frame opens v27 and then v28. The stand-ins carry Year 12 labels, a different voice, and bridges that cite B-numbers.
- **Fix.** Root decides per video before the Google voicing batch: voice the Year 11 design (keeps the chain) or use a stand-in and accept re-cut bridges on both neighbours. Do not let a stand-in silently replace a designed link. For dialysis, follow the audit: one script satisfying both B8-IQ5-02 and B25-FA2-G3-09, with `bio-y11-fa2-v25.md` as the base because it sits in the chain.

### S8. Science: a bacterium is not "more than a hundred times wider" than a pump

- **Where.** `bio-y11-fa1-v13.md` scene 1 narration and YouTube metadata ("more than a hundred times wider than any membrane protein"). Its own number check assumes a rod bacterium 1 to 2 µm wide; *E. coli* is about 0.5 to 1 µm wide (about 2 µm long), so the width ratio to a 10 nm pump is about 50 to 100. "Any membrane protein" also overstates (large complexes are bigger than 10 nm).
- **Fix.** Narration: "A typical bacterium is about a hundred times longer than that whole pump protein." Metadata: "about a hundred times bigger than a membrane pump". Re-count characters (no voice manifest exists for v13).

### S9. The Year 12 hand-over is planned against the wrong successor course

- **Where.** `docs/production/programme/syllabus/timeline.md`: the 2025 Year 11 cohort (from Term 1 2027) continues into Year 12 Biology 2025 (from Term 4 2027). The published 2017 Modules 5 to 8 serve the 2026 and 2027 HSC only. No 2025 Year 12 Biology route exists. `bio-y11-fa3-v32.md` therefore ends on "Focus Area 3 complete" with no forward handoff (its decision says "No Year 12 route is inferred").
- **Fix.** Create the Year 12 2025 Biology route from the reuse audit's Q4 rows before Term 3 2027, with entry knowledge written as Year 11 video ids (fa1-v22 to v31 for Heredity; fa3-v01 to v09 for Biodiversity; fa2-v26 to v33 are no longer Year 12 content). Then give fa3-v32 a course-end frame that names the Year 12 opener, and apply S5 and S6.

## Notes

- **N1. Timing wording (science).** `bio-y11-fa2-v30.md` scene 1: "Within seconds, your heart is pounding, and your blood glucose climbs." Adrenaline raises heart rate in seconds; the glucose rise takes minutes. Suggest "and within minutes your blood glucose climbs" (scene 6 already says the medulla releases adrenaline within seconds and it reaches organs within about a minute).
- **N2. Entry attribution.** `bio-y11-fa3-v13.md` entry knowledge cites "FA2 v13: evaporation cools". fa2-v13 does not teach evaporative cooling (it crosses out "a fan cools the plant"). The real sources are fa2-v27 (sweating) and fa3-v10 (kangaroo forearm licking). Correct the citation; no script change.
- **N3. Heavy site page.** FA2 L24 hosts four videos (fa2-v29 to v32, about 35 minutes). Suggest the site splits L24 or lists the four videos in order with their questions.
- **N4. Memory aids.** There is no Year 11 Biology memory-aid bank in `docs/production` (the banks are Year 12 M5 to M8). FA1 uses the site's `bio2025-y11-fa1-memory-hooks.json`; FA2's site file is still `kyle-tips-fa2.pending.json`; FA3's is `FA3-MEMORY-HOOKS.staging.json`. Each design chooses and checks its aid, and reuse is deliberate (for example "Change one thing. Two suspects means no conviction." from fa1-v21 recalled in v22). Suggest compiling the designs' memory lines into one ledger so a later video does not coin a clashing line.
- **N5. Dingo holds.** Root decisions FA3 9 and 35 keep the dingo out of fa3-v06 and v29 and words-only in v31 because of the cultural hold. Under the 18 November rule (general, not community-specific) the ecological dingo content (predation, the dingo fence) can be reconsidered; the contested arrival history stays out.
- **N6. Course-wide investigation requirements.** The ledger README notes that NESA sets separate course-wide investigation and depth-study requirements; this plan maps content points only. Confirm the Year 11 requirement and, if useful, cover "planning and reporting an investigation" in S1's set or the exam-skills series.
- **N7. Status lines.** All 94 design status lines still say a Codex error check is needed. Several have later upgrade checks in `docs/production/claude-pm/checks/` (for example `bio-y11-fa2-v10-upgrade-error-check.md`). Refresh the readiness table before the voicing order is set.
- **N8. Title and heading drift.** `bio-y11-fa1-v22.md` title "How can four bases spell out instructions?" against its on-screen heading and the chips "How does DNA structure store and copy information?". Pick one for metadata.
- **N9. Scene numbering gaps.** `bio-y11-fa3-v09.md` (10 to 12), `v10.md` (9 to 12a) and `v29.md` (11 to 13) skip numbers after cuts. Confirm build scene ids and voice file names before the builder maps them.
- **N10. Mild repetition, acceptable.** fa3-v23 attempt 2 (quadrats placed where plants look thickest) and fa3-v26 (chosen spots over-count) make the same point. Keep v26's version as a recall of v23.
- **N11. Ledger ID clash.** As the reuse audit says, `bio-new-y11.json` and `bio-new-y12.json` both use the `B25-` prefix. Fix before the Year 12 route (S9) is built.
- **N12. Science spot-check passes.** Checked and correct: fa1-v01 ten times wider, about a thousand times the volume; fa1-v12 potassium about thirty times higher inside; fa1-v22 about two metres of DNA per nucleus; fa1-v23 about six billion base pairs in about eight hours; fa1-v24 one rung per centimetre gives about 64,000 km, and *E. coli* two forks at 1,000 bases per second take about 38 minutes; fa1-v23 primase, leading and lagging strand mechanism; fa2-v12 cohesion-tension narration; fa2-v20 plasma about 90 per cent water; fa2-v22 one large balloon shared into 1,000 small ones gives ten times the surface; fa2-v23 180 L filtrate to about 1.5 L urine; fa2-v24 secretion of hydrogen ions, potassium and penicillin; fa2-v28 TRH, TSH, thyroxine feedback; fa2-v29 glycogen roles of liver and muscle; fa3-v28 N = M × C ÷ R. No further real errors found in the sample.

## Lesson-level handoff and entry checks (summary)

- **Handoff chain.** All 93 pairs: the outgoing design's final frame is quoted in the next design's "Opening frame", and the next scene 1 opens on it with a "Last time" or equivalent bridge. The two cultural holds are bridged (fa3-v04 to v06, v15 to v17) as root decisions FA3 7 and 14 direct. FA1 v31 to FA2 v01 and FA2 v33 to FA3 v01 cross focus areas cleanly. Only fault: chip and heading text (S2).
- **Entry knowledge traced** for fa1-v20, v21, v26; fa2-v01, v05, v19, v21, v22; fa3-v01, v13, v15, v18, v21. All claimed prior items are taught where cited, except N2. fa1-v26 names mitosis and meiosis before fa1-v27 to v29 teach them; it lists both as "not assumed" and introduces them as names only, which follows the site and syllabus order. Fine.
- **Within-course double-teaching.** None found that re-teaches rather than recalls. Respiration and photosynthesis (fa1-v16, v17) are recalled, not repeated, in fa2-v05 to v08; osmosis (fa1-v09, v11) in fa3-v15; surface area (fa2-v02) in fa2-v18 and v22; resistance is one clause in fa3-v01 and v03 and owned by fa3-v18.

## Site fit

- Where the designs depart from the site, the designs are right in every case I checked (B2 list and appendix). Departures in order are covered in S3.
- The site is right, and the designs follow it, on lesson order elsewhere, the worked-example numbers, and the misconception framings (each design's "Site alignment" bullet quotes them).
- Already-logged items not repeated here: FA1 L01 to L25 and FA2 L01 to L09 in `site-corrections-bio-y11.md`.

## Appendix: site errors for `site-corrections-bio-y11.md` (not yet logged)

Source design in brackets; full wording and sources are in each design's "Site errors found" bullet. "Live" means the quoted text was found in the current `teaching-app-fix` file today; unmarked items were not re-searched. Priority: **H** contradicts what the video teaches or a model answer students copy; **M** misleading; **L** minor wording or style.

**FA2**
- L07 (fa2-v10): L phloem is the inner bark, not "just inside the bark"; L "sap moves in either direction" in one tube; L phloem vocabulary (sap is the solution; companion cells).
- L08 (fa2-v11): **H** "high concentration source to low concentration sink" invites diffusion; use high-pressure source to low-pressure sink. L "sap squirts" in the hook.
- L09 (fa2-v12): L "more than ten times higher" should be "about ten times"; L root uptake continues "with nowhere for it to go".
- L10 (fa2-v13): M "warm air can also hold more vapour" (live); the leaf's air spaces hold more. L add stress closure of stomata.
- L11 (fa2-v14): L "Gas volume is read" in a potometer item; M two-shoot fan set-up against the page's own one-shoot method; L hooks file "weighs the drink".
- L12 (fa2-v15): M iodine does not stain cell walls (live); **H** SA3 model phloem "energy-requiring ... rather than passive flow" (live); L roots do take in oxygen; safety: teacher cuts sections or prepared slides.
- L13 (fa2-v16): M water absorbed "principally in the large intestine" (live); most is in the small intestine. L SA3 model mismatches problems to solutions.
- L14 (fa2-v17, v18): **H** mechanical and physical digestion merged; emulsification is the syllabus's "physical" digestion. M "only small soluble molecules cross the gut wall into the blood" (live); most fat enters lymph via lacteals. L protease to amino acids; elimination "never entered cells".
- L15 (fa2-v21): **H** blood from leg to gut to kidney "seconds later" (live); **H** "exchange always follows a concentration gradient" (live); M urea "not reabsorbed"; L large intestine missing from the diagram.
- L16 (fa2-v19): L alveolus cited before L18 teaches it; L "slower than a snail"; L narrow lumen "maintains pressure"; L "valves along its length" (many veins).
- L17 (fa2-v20): M iron-deficiency anaemia stated with a normal red-cell count; L platelet plug and fibrinogen missing.
- L18 (fa2-v22): **H** SA3 model "falls in proportion to area" (live, reversed); L "millions" of alveoli (hundreds of millions); L "half a tennis court" (check against about 70 m²).
- L19 (fa2-v23, v24): the hot-day reversal now reads correctly on main (no action); M urea "not reabsorbed" (40 to 50 per cent is); L optional charge-repulsion note.
- L20 (fa2-v25): **H** "Excess water and salts also diffuse out" (live, two places; water by ultrafiltration); M "die within days" (live; usually weeks); L "only the wastes leave"; L dialysate "matched to healthy blood" (potassium set lower).
- L21 (fa2-v26): M "Always 5 parts in the same order" (live); L "skin" as effector; L insulin pumps "automating the exact feedback loop".
- L22 (fa2-v27): M "returning the variable to the set point"; L set point can shift (fever); L humid air stops sweat evaporating.
- L23 (fa2-v28): L "growth and others" listed as a gland (live); L hypothalamus releases hormones "onto" the pituitary; L SA Q1 verb and mark labels disagree.
- L24 (fa2-v29 to v32): M "double within minutes" (live; about plus 50 per cent at 30 to 60 minutes); **H** lag "shows cause" (live); **H** "rising whenever the variable strays" (live); L insulin "falls again as glucose returns"; M adrenaline and cortisol both "increasing heart rate"; M "glucose cannot be taken up" in both diabetes types; **H** type 1 failure placed in the effector (live); L treatment "restores" control.
- L25 (fa2-v33): **H** hard limits at about 42 and 28 °C drawn as failure lines (live); M enzymes "permanently destroyed" (live); M fever placed in the tolerance range as coping.

**FA3**
- L01 (fa3-v01): **H** beetle case contradicts itself (pale against dark bark survivors); **H** "finish a full course of antibiotics" (live); M "within days the population is dominated" (live).
- L02 (fa3-v02): M "not enough grass to eat" sorted as abiotic (live); L deeper-beaked finches "survived" (more likely to survive).
- L03 (fa3-v03): M cod "sea full of small ones" (live); **H** "finish the course" (live); M cane toad legs: spatial sorting, science check to judge.
- L04 (fa3-v04): L 30 against 35 million years; M "on each island" and "reproductively isolated" finches; L em dashes in learner copy (live, 4); L mule "is sterile".
- L06 (fa3-v06): **H** SA Q1 model and MC key "placental mammals out-competed marsupials" contradict the page's own caution (live); M "would have been overwhelmed"; L marsupial "in a pouch"; L no exceptions for bats and rodents.
- L07 (fa3-v07, v08): L 15 s against 10 s hunting time; L no spare dots for offspring; L choking-hazard line; M "ratio = a change in allele frequency"; **H** "Natural selection is defined as a change in allele frequency" (live; that is evolution); L heterozygote bead wording.
- L08 (fa3-v09): L rose "thorn" is a prickle; L "the ocean demanded"; L gliding named as the pressure.
- L09 (fa3-v10): L "learned-or-instinctive actions" against the page's own definition; M kangaroo ears as a main heat-loss adaptation; L plant "behaviour".
- L10 (fa3-v11, v12): M every feature restricts carbon dioxide; L em dashes (live, 3); M "five times less" (live; one fifth as much); L stomata "usually on the underside"; L cutting leaves to size; L plotted lines lack points.
- L11 (fa3-v13, v14): **H** endotherm "keeps a stable body temperature regardless of the surroundings" (live) against the page's own torpor content; L torpor as behaviour; M 36 to 38 °C as a universal endotherm range (birds warmer, echidna cooler); L Activity 1 placed before its table; L "returns in ... FA2" order wording.
- L12 (fa3-v15): L perch and snapper "same family" (live); **H** marine bony fish "concentrated urine" (live, 14); M marine animals as a group hypotonic; L salmon not native; L "denature".
- L14 (fa3-v17): M rapid adaptation called punctuated equilibrium; "Branch slope tells you the rate" now absent on main (recheck the remaining tree-axis wording); L branch length "or nothing"; L "introduces the phylogenetic tree".
- L15 (fa3-v18): **H** illustrative figures called "A published dataset" (live); **H** "finishing prescribed courses" (live); L "every 20 minutes" as general; L add a real Australian surveillance figure.
- L16 (fa3-v19, v20): M relative dating without cross-cutting relationships; M Ediacaran boundary defined by fossil position; L "support gradual change"; L wishbone as bird-only; L Tiktaalik "amphibians".
- L17 (fa3-v21): **H** Activity 1 asks for a full tree from distances to humans only (live); L alignment omits gaps; L molecular clock as "mutations accumulate".
- L18 (fa3-v22): M four lines judged as evidence for natural selection without separating common descent; L Nothofagus dispersal; L Wallace's Line transition zone.
- L19 (fa3-v23): M correlation stated as cause in SA Q2 model; L percentage cover cannot give a count; L 200 lux shade value needs its condition.
- L20 (fa3-v24): **H** "Daily temperature range" bar chart uses yearly spans (live, 2); M desert 45 to 0 °C "by day and at night" as one day; M b2 and SA "within a single day"; L rock pool as a buffered site.
- L21 (fa3-v25): M Connell barnacle stem cannot observe the removed species' limit; L "often more = healthier"; optional species names.
- L22 (fa3-v26, v27): L "per m²" against "per quadrat"; L feral cat study attribution; L random points against "keep to tracks"; L line transect records presence only; L transects cannot be scaled to totals; L line transect "along the direction of change".
- L23 (fa3-v28): L "the only practical way"; L direction table add the near-release case.
- L24 (fa3-v29, v30): L dingo example (owner to consider an alternative); L allelopathy has no score; L allelopathy missing from matching; **H** predator peak "always" lags (live) and the lag as "the fingerprint of that control"; L competition signature is correlational; hooks file "always arrives late".
- L25 (fa3-v31, v32): **H** predators both "setting" K and holding the population "below that ceiling" (live); L dingo fence differences; L rabbit haemorrhagic disease 1995 and 1996; **H** SA Q1 model "treated with caution" for biased data where the card says reject (live).
