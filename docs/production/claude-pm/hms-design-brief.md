# Health and Movement Science 11-12 (2023 syllabus): design-wave brief

Written by Claude (designer of record), 23 November 2026. Read this before writing any `hms-*` design. This is a new course for the video programme: nothing existed for it in this repo before today. Owner priority (13 November): finish the Year 12 Physics upgrade, then Year 11 Maths, then HMS. Route: `docs/production/hms-video-route.md` and `.json` (84 videos). Status and open questions: `hms-status.md`.

## The course

- NESA Health and Movement Science 11-12 Syllabus (2023). It replaces Stage 6 PDHPE (2012). Year 11 teaching began Term 1 2025, Year 12 Term 4 2025, and the first HSC is 2026 (syllabus p5, via the site spine). So the course is current for both years now: the 2027 HSC cohort is in Year 12 today.
- Four teachable focus areas, which the site calls modules: Year 11 "Health for individuals and communities" (site module 1, 18 lessons) and "The body and mind in motion" (module 2, 22); Year 12 "Health in an Australian and global context" (module 3, 22) and "Training for improved performance" (module 4, 22). The Year 11 Collaborative Investigation and the depth studies are school projects with no site lessons and no videos.
- The HSC paper (syllabus p39): 20 objective marks, 56 short-answer marks (9 to 12 items, at least three worth 6 to 8 marks), and two 12-mark extended responses, one per Year 12 focus area. HMS is answered in prose. The site teaches every lesson through directive verbs (compare, explain, analyse, assess, evaluate, discuss) and two worked responses. Our practice items follow that: real exam wording with a directive verb and marks, and brief feedback that names the answer's shape.

## Inputs for each video

- **Route entry** (`hms-video-route.json`, by `id`): main learner question, verbatim syllabus dotpoint and sub-points owned, site lesson path and hash, entry knowledge, opening, start, stop, next handoff, later homes, recurring models, visual plan and cross-year overlap. The route is research input. Improve the learner question if a causal form is clearer, and record the change.
- **Pre-design pack:** `pre-design/hms/<id>.md` (exact syllabus text, the site's card order and worked responses, figures to check, the page's traps, visual plan, coherence fields).
- **Syllabus ledger:** the site spine `C:/Users/kygs/teaching-app-fix/docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified; ids such as `hms-y11-fa2-g2-d1` are local, not NESA codes). Quote dotpoints verbatim, including NESA's own typos ("anerobic interval", "digital heath"), and flag them rather than silently correcting them.
- **Site lesson, read in full before scripting:** `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year11|year12/moduleN/lessonNN.sa.html` (read-only clone; never edit, commit or run anything there). The site is the source of truth: reuse its order, cases, worked responses and misconception framings. Where it is wrong, follow the correct science or syllabus and log the disagreement in `site-corrections-hms.md`.
- **Repo rules:** `AGENTS.md` (all of it), `docs/production/student-learning-review.md`, `docs/production/motion-design-standard.md`, `docs/visual-design-handbook.md`, `maths-visual-standard.md` (the grade A bar), `build-agent-brief.md`.

## Audience

- Students starting Year 11 HMS, or starting Year 12 HMS. Many do not study a science. Teach from the route's entry knowledge, give each term a plain meaning when it first appears, and explain each cause before relying on it.
- HMS mixes two kinds of content. Half the course is social and system health (meanings of health, determinants, inequity, health promotion, the healthcare system, the SDGs). Half is the body and training (anatomy, biomechanics, energy systems, training, skill learning, psychology, nutrition, injury). The visual system must serve both without becoming a slideshow of text boxes.
- Year 12 videos recall Year 11 ideas in one sentence each. Do not assume our Year 11 videos were watched.

## Visual system (one system for the whole course)

The house explainer system (`src/explainer`, light paper ground, painted plates, coded diagrams, live simulations, shared `tokens.ts` sizes and tones, `QuestionScene`, `FeedbackScene`, `WorkedExample`, `KeyNotesScene` with `MemoryCard`). No new style. What changes for HMS is what carries the picture.

1. **Models are the main visual for social and system content.** Each idea the site teaches as a model becomes a coded, moving diagram that is introduced once and reused across the course (the route's "Recurring models" table): the narrow-to-wide meanings ladder, the dimension interaction loop, the health continuum with direction arrows, the bathtub (incidence, prevalence, outflow), equality against equity, the access gates, the determinants chain, the Ottawa five-row grid with its empty-row test, the SDG ring, the participation ladder, the evidence ladder, the research cycle with the validity, reliability and credibility trio. A model moves when the narration says something changes: a marker travels, a tap opens, a gate closes, a row stays empty. A text card in a diagram slot does not count.
2. **Places and objects stand in for people.** No people, hands, faces or body outlines appear anywhere. A case about a person is shown through what surrounds them: the object they use (an asthma reliever puffer beside running shoes), the place (a small-town street whose only clinic has a "closed" sign, an outdoor gym nobody uses), or the document (a pre-exercise questionnaire). Quotes appear as quote cards attributed by role and age ("17, plays club netball"), never with a figure. Painted plates, `hms-` prefix, house watercolour style, transparent PNG with true alpha, never stretched, no real brands, logos, organisations' marks or recognisable real places.
3. **Anatomy is regional, never a whole figure.** Joints, limb segments (cut above the wrist and above the ankle where the hand or foot would read as a person), organs and tissues are painted plates; Biology plates are reused where they fit (the route lists them: `m8-heart-v1.png`, `m8-lungs-healthy-v1.png`, `y11-alveolus-v1.png`, the artery, vein and capillary sections, `m8-skeletal-muscle-v1.png`, `y11-neuron-v1.png`, `b3a2-brain-v1.png`, `m8-pancreas-v1.png`, `y11-digestive-tract-v2.png`, `y11-hypothalamus-pituitary-section-v2.png`, `m8-leg-bones-normal-v1.png`, `m8-artery-plaque-v1.png`, `b6a-mitochondrion-v1.png`, `m5x-red-blood-cells-v1.png`, `m8-hearing-aid-v1.png`, `m8-insulin-pen-v1.png`). Inspect each one's actual appearance before use. Movement (a squat, a jump, a throw) is shown as a **coded segment linkage**: thigh, shank and foot (or upper arm and forearm) as lines with joint circles and live joint-angle readouts. That is an abstract mechanism diagram, not a figure. Whole-body maps of bones and muscles wait for the owner's answer (open question in `hms-status.md`).
4. **Data graphics are coded, from the maths graph kit** (`src/explainer/math/graphs.tsx`). Trend lines, bars, ranked dot plots, stacked areas, population pyramids. HMS teaches trends and forbids memorising current statistics, so a chart is labelled "illustrative pattern" unless every value comes from a named, dated report and is checked in the science check. Never request an AI image of a graph.
5. **Simulations from `src/explainer/sims` wherever motion is physical:** `beam.ts` for body levers and safe lifting, `field-motion.ts` for projectile release speed, angle and height, `particle-box.ts` with a `membrane` for gas exchange. Physiological traces (heart rate, ventilation, stroke volume, cardiac output, lactate, oxygen deficit and EPOC, energy-system contribution) are coded curves read from one small model per scene, so every on-screen number comes from the same run. Read `src/explainer/sims/README.md` before hand-building anything.
6. **Worked calculations** (cardiac output, heart-rate zones, per-kilogram fuel needs, sweat rate, gap fees) use the g01 `WorkedExample` layout: task strip, equation strip, grouped givens with units, one stage at a time, a framed answer and a crossed slip. Every number is recalculated and listed in "Numbers used".
7. **Colour roles (from `TONES`, fixed per lesson in its Colour key):** one tone per competing idea being compared (for example biomedical and holistic), amber for shared ground and the givens a feedback line uses, green for answers and ticks, red only for a crossed mistake. Dimmed earlier labels use the full-ink grey tone, never lowered opacity.
8. **Opening equals the previous final frame.** The route generates each `nextHandoff` from the next video's `opening`, so each design's final frame must show exactly the next video's opening picture.

## What is reused from Biology and Physics

- **Plates:** the anatomy plates above (Biology Year 11, Module 5 to 8), and from Physics only generic objects where they fit (stopwatch-like timers, data logger, force sensor). Reuse only where the plate shows the HMS idea at HMS depth; do not import Biology content with it.
- **Coded parts:** B6a chips, crosses and grey tags (`WrongChip` in `src/explainer/lessons/bio-m5-b02c/shared.tsx`); Module 6 b01 shared parts (`CardBox`, `PlateAt`, `Lbl`, `GTag`, `CurveArrow`, `AnsTable` in `bio-m6-b01/parts.tsx`). The Year 11 Biology designs specify a `CompareLedger` (a comparison table that grows one row per cue); it is not in `src/explainer` yet (checked 23 Nov), so HMS builds it once in `hms-shared` unless Year 11 Biology builds it first. Every HMS compare question uses it.
- **Sims:** beam, field-motion and particle-box engines as above; the maths graph kit for data.
- **New coded components for an `hms-shared` folder** (proposed `src/explainer/lessons/hms-shared/`): `Continuum` (vertical line with markers that move with direction and rate), `Bathtub` (stock-and-flow tank with tap, level and drain readouts), `ModelLadder` (rungs that write on and can rescale), `InteractionLoop` (boxes with mechanism-labelled arrows that draw in sequence), `SegmentLinkage` (limb segments with joint-angle readouts), `TraceStack` (several physiological traces against one time axis from one model), `QuoteCard` (role and age attribution, no figure), `CompareLedger` (see above). Each is reused by later videos; the route's model table says where.

## Memory-aid approach

- The site has no HMS memory-hook file. Its own organising sentences are the aids, and each lesson ends its key notes with one framed memory card built from them, after the idea is explained. Examples: "Every widening buys relevance and costs precision" (meanings of health); "Position is not the whole story: describe direction and rate" (continuum); "Incidence is the tap, prevalence is the water level" (bathtub); "The faster a system supplies ATP, the less it can supply in total" (energy systems); "Raise one FITT dial and say which other one must fall" (FITT).
- Use the syllabus's own acronyms where they exist (FITT, TOTAPS, PCr) and do not invent new ones as quotas.
- Check each aid's assumptions in "Memory aid check" (for example, the bathtub assumes outflow is recovery plus death and that the population is stable).
- Exam-trap insights the site flags (the "switch" model of energy systems, "lactic acid causes fatigue", "arteries carry oxygenated blood", "access means cost", "a list of determinants is not a discussion") are high-value for this owner: use one as the crossed mistake in feedback or a short mistake beat where it genuinely helps.

## Standards (owner rules)

Identical to `chem-y11-design-brief.md` "Standards", with HMS in place of chemistry: one main learner question; plain definitions; causes before reliance; natural conversational TTS narration (commas for small pauses, no stacks of one-word sentences); 5,500 to 6,800 narration characters and at most about 570 s (count only lines starting "> ", `**` removed; characters / 13.3 plus holds); every narrated change shown, cue words quoted verbatim in spoken order; meaningful transitions; one visual system; practice with "Pause here to answer." and a 10 s countdown, and brief feedback (answer, one or two reasons, one crossed classic mistake, about 15 to 30 s); an optional "Key notes: what to write in your book" hold of about five short bullets with the memory card; no double teaching (recall earlier videos in a sentence); opening equals the previous final frame; no em dashes, no U+2061, Australian spelling; text above the bottom 12% of the frame; no course labels or module numbers on screen (say "earlier" or "in Year 11", never "Module 3"). Every new video must reach grade A on the 16-frame sheet before render.

HMS additions:
- **People:** never drawn, never implied by a body outline. Cases use objects, places, documents and quote cards.
- **Statistics:** trends and patterns, not memorised current figures (the syllabus's own instruction). Any number on screen needs a named, dated source in "Numbers or facts to verify".
- **Cultural content:** Aboriginal and Torres Strait Islander health stays general (principles such as community control, cultural safety and self-determination, no named communities or people), per the owner's 18 November rule. Do not invent cultural cases.
- **Sensitive topics** (mental health, self-harm-adjacent coping, drugs, eating): no graphic detail, help-seeking framed positively, and no diet or weight-loss advice beyond the syllabus.
- **Voice:** the Google voice (approved 3 November for all Year 11). Year 12 HMS voice is an open question; the default is the same Google voice so the course sounds like one course.

## Root rulings (23 November 2026)

- **Anatomy:** regional plates and coded limb-segment linkages only; no whole-body figure, even for major bones and muscles (the owner's no-people rule).
- **Voice:** the Google voice for all HMS, Year 11 and Year 12.
- **Cultural content:** general, no names of communities, people or places.
- **Statistics:** a small set of dated official figures (AIHW, ABS) is allowed, each shown with its source and year on screen ("AIHW, Australia's health 2024" style) and listed in the design's "Numbers or facts to verify" with a **release re-check flag**. Otherwise trends labelled "illustrative pattern".
- **Subject accent:** olive `#5d6b2a` for HMS (header label, bullets, question-card edge).
- **Site corrections** 1 to 4 accepted for the record. Production order (Year 11 or Year 12 first) stays the owner's call; it does not change the designs.
- **Scripts:** the route, pre-designs and coherence checks are built by `scripts/hms/build_route.py` from `scripts/hms/route_data.py`; edit the route there and re-run, then fix every finding.

## Output

- `lessons/<id>.md`, title line `# HMS Year 11 V<nn> (<focus area>): <topic>. <learner question> (design)` (Year 12 likewise).
- Status line: `Status: Revision 1 (<date>): first design. Needs independent learning review and science check before voicing.`
- Follow the section order of `lessons/bio-y11-fa1-v01.md` (Decisions, Script and shots, Practice question and feedback, Numbers or facts to verify, Memory aid check, Narration length estimate, Assets, Codex briefs, YouTube metadata, Open decisions, Build ids, Review notes). Quote the syllabus dotpoint verbatim in the YouTube description.
- Record open decisions for root at the end of Decisions. Do not commit.
