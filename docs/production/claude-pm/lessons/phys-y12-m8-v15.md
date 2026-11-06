# Year 12 Physics M8 V15: Half-life and radioactive decay. Why does half-life predict a population but not one atom? (design)

Status: Revision 2 (7 Nov 2026): brief 193 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,636 characters, 18 scenes, about 490 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v11.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site worked numbers kept, every number recalculated in Python, original attempts and data, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson15.sa.txt`; also read for v14): lesson 15, especially "use-the-exponential-decay-law" (random at the individual level, statistical for a large sample; N = N₀e^(−λt); t½ = ln2/λ = 0.693/λ; A = λN = A₀e^(−λt), becquerel; (1/2)ⁿ; Figure 2; carbon-14 dating; Stop and check 800 Bq, 6 h, 24 h), "clear-the-misconceptions" (activity against number of nuclei; "After two half-lives, all atoms have decayed"; same units for t and t½), "drive-the-decay-simulator" ("Half-life Is Not a Countdown"; small samples of 20 wander from the law; 1/32 after five half-lives), "apply-decay-calculations" (Activity 1: P-32 14.3 days, 8.0 × 10¹⁰ atoms, 42.9 days; 3,200 Bq to 200 Bq in 4 hours; Activity 2: wood 6.25 Bq/g against 50 Bq/g; "Examine 7 marks" on the model: fixed probability per unit time, independent of age; exponential; activity proportional to N but distinct; the small-sample limit), independent practice Q1 (I-131, 8 days, 640 Bq, 24 days: 80 Bq) and Q2(c), (d): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson15.sa.html`, SHA256 `f17baa97b8d2ee36d7e71dcaa1f9c940d0e225914277466a5f43f7c48563fd63` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v15`, sections `use-the-exponential-decay-law`, `apply-decay-calculations`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Connect random individual decay to Nt=N0 exp(-lambda t), lambda=ln2/t half, activity and graph interpretation. State background subtraction for data." Route practical: "Primary safe analogue or secondary radioactive-decay data investigation". Next: "phys-y12-m8-v16: How does missing mass measure nuclear binding energy?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists not named); the counters, tray, Geiger counter and sealed source are painted plates (two reused from v14, three new), scaled uniformly, never stretched; the nuclei grid, graphs, tables and calculation strips are coded, HSC style; every number recalculated in Python; the syllabus relationships exactly as printed, N_t = N₀e^(−λt) and λ = ln2/t½; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v14 (decay is spontaneous; each click is one detected emission; Geiger counter; sealed-source safety); Year 11 Mathematics or Year 12 Mathematics (e and the natural logarithm, said as a tool: "take the natural log of both sides").

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P8-IQ4-02`: "examine the model of half-life in radioactive decay and make quantitative predictions about the activity or amount of a radioactive sample using the following relationships:"
  - "N_(t)=N_(o)e^(-λt)" (displayed as N_t = N₀e^(−λt))
  - "λ=(ln2)/(t_(1/2))" (displayed as λ = ln2/t½)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v14's final frame (the nuclei grid with a few decayed, the irregular click trace, "which next? when?", an empty N against t graph with a dashed halving sketch). Teaches: one nucleus has no memory, a constant chance per second, the decay constant λ; the counters analogue (a safe primary model: 200 counters, remove red-up, about half each throw); half-life defined, and the trap (each half-life halves what is left; never zero); why the halving time is constant (decays per second = λN, so the same fraction goes in equal times), giving N_t = N₀e^(−λt); λ = ln2/t½ derived from it; activity A = λN in becquerels, same half-life, distinct from N; background subtraction and reading half-life from a corrected count-rate graph (secondary data); worked examples (I-131: whole half-lives, 80 Bq; then 10 days with the formula, 269 Bq; same units); why the law predicts a population but not one nucleus (fluctuations shrink with sample size; for one nucleus, a 50% chance per half-life). Stops before mass defect (v16); carbon dating (open decision 2); medical choice of isotopes.

## Decisions

- **Learner question (route wording kept).** "Why does half-life predict a population but not one atom?" The answer, built in order: each nucleus has the same chance per second, with no memory, so its moment of decay is unpredictable (2); in a large group the same fraction decays in equal times, so the number halves in equal times (3 to 5); the halving time and λ are linked (6); in small groups chance fluctuations are large, in large groups they become negligible (11).
- **Hook (v14's handoff).** "Whether you start with a gram or a tonne" (the half-life does not depend on amount).
- **No memory (site "Examine 7 marks" step 1; site simulator "Half-life Is Not a Countdown").** "It doesn't age, or wear out, or count down." Revision 2 (brief 193): λ is defined as the fixed decay rate per nucleus, per second, not the exact chance of decay in a whole second; for a short time Δt the chance is about λΔt, and λ can exceed 1 s⁻¹ for short half-lives (author note a). The counters' ½ per throw is a chance per throw, kept distinct from λ.
- **Counters analogue (route practical "Primary safe analogue").** Two-coloured classroom counters (red one side, yellow the other): each throw removes red-up counters; chance 1/2 per throw, so the half-life is one throw. Painted counters and tray, coded counts. The narration presents it as a model to try ("Here's a safe way to model it"), and a chip says "model: one throw = one half-life". Dice are not used (their per-throw survival gives a half-life of 3.8 throws, not ln2 × 6 = 4.2, a needless confusion; author note b).
- **Half-life and the trap (site "clear-the-misconceptions").** Defined on a large sample; "each half-life halves what's left"; ½, ¼, ⅛; never zero for a large sample (the asymptote is a smooth-model statement; the last few nuclei do decay, author note c).
- **The law from the cause (route "derive each newly introduced equation").** Decays per second = λN (because each of N nuclei has chance λ per second), so equal fractions vanish in equal times, which is what exponential decay means: N_t = N₀e^(−λt). The calculus (dN/dt = −λN) is not shown; the narration says "That's exponential decay" after the cause (author note d).
- **λ = ln2/t½ derived on screen (site formula box; syllabus).** Set N_t = N₀/2 at t = t½: e^(−λt½) = ½, so λt½ = ln2, so λ = ln2/t½. "A short half-life means a big lambda."
- **Activity (site "use-the-exponential-decay-law"; site trap).** A = λN (from the definition of λ), becquerel = one decay per second; A falls with the same half-life (A = A₀e^(−λt)); "One is a count of nuclei, the other is a rate of decays." Revision 2 (brief 193, with v14 scene 1): a detector's count rate is not the activity. A counter catches only a fixed fraction of the decays (and background), so with a fixed set-up the corrected count rate halves in the same time as the activity. Scene 7 says so, and scene 8's data stay labelled counts per second, never Bq.
- **Background and graph reading (route stop "State background subtraction for data"; route practical "secondary data").** Background from rocks, building materials and space; measure it with no source and subtract it from every reading; plot the corrected count rate; read the halving time from several starting points and average. Secondary data on screen (a short-lived isotope with t½ about 70 s; background 0.5 counts per second; author note e). The Geiger counter and sealed source are v14's plates.
- **Worked examples (site Q1 numbers; new 10-day step).** I-131, 8.0 days, 640 Bq: 24 days is three half-lives, 80 Bq. Then 10 days: λ = 0.0866 per day, λt = 0.866, A = 640e^(−0.866) = 269 Bq. One stage at a time; "Keep lambda and t in the same time units."
- **Population against one atom (site "Examine 7 marks" step 6; simulator).** 20 nuclei after one half-life: "you might have seven left, or thirteen" (about 88% of trials land between 7 and 13); 10¹² nuclei: within about one part in a million of half. For one nucleus, the half-life only gives a 50% chance of having decayed after one half-life.
- **Memory aid (scene 12): "Each half-life halves what's left, not what you started with."** See "Memory aid check".
- **Attempts (original, HSC style; site Activity 1 nuclide and N₀, new time).** A1 (3 marks): P-32, t½ = 14.3 days, N₀ = 8.0 × 10¹⁰: λ (0.0485 per day) and N after 30.0 days (1.87 × 10¹⁰). Crossed: λ in per second with t in days (λ = 5.61 × 10⁻⁷ s⁻¹ × 30 gives almost no decay). A2 (2 marks): a nucleus with t½ = 10 min has already lasted 30 min; the chance it decays in the next 10 min is 50%, because it has no memory. Crossed: "it's overdue, so it's more likely to decay".
- **Practical note (route "viewing does not complete required practical hours").** Not narrated; the counters scene invites students to try it, and the key notes list it as a model to do in class.
- **Handoff (route next).** Every decay gives out energy (millions of electron volts); weigh a carbon-12 nucleus against its separate nucleons and they don't balance. See "Final frame".
- **Colour key (v14 key):** undecayed nuclei red-grey discs; decayed grey rings; counters painted red and yellow; the N against t curve navy, its halving guides dashed teal; activity curve amber; background a grey band; calculation strips as v11.
- **Colour key (Revision 2, fixed for every scene).** As above; λ and its readouts teal; time and t½ ink; count rate and the counter display slate; ticks green; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (N tags navy, A tags amber, λ tags teal, background tags grey).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 6, 9, 10 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 3 tray, scene 10 time slider, scene 11 runs) about 52 px; axis labels and table entries 30 to 36 px (the scene 8 table rows 36 px); hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 brings in v14's painted sealed source and Geiger counter (`y12p-sealed-source-v1.png`, `y12p-geiger-counter-v1.png`, delivered and inspected 7 Nov) under the click trace as the source of the random clicks. The delivered counter tray and red and yellow counters (`y12p-counter-tray-v1.png`, `y12p-counter-red-v1.png`, `y12p-counter-yellow-v1.png`; inspected 7 Nov) carry scene 3; the Geiger counter carries scene 8.
- **Simulation (Revision 2).** The core live control is the counter tray in scene 3: each throw tips the counters, red-up ones lift away, and live readouts (52 px) show "throw: 0, 1, 2, 3" and "remaining: 200, 103, 49, 27" (one seeded run) beside the expected 200, 100, 50, 25. Scene 10 adds a time slider on the iodine activity curve with a live readout (t = 0, 8, 10, 16, 24 days: A = 640, 320, 269, 160, 80 Bq), and scene 11's seeded runs carry live "left" readouts.
- **Board stages (Revision 2).** Scene 6 now opens a clear change to the working layout, so the halving staircase and curve (4, 5) run about 61 s and no set-up runs past about 61 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded grid of nuclei labelled "P-32 sample, t = 0" beside an empty N against t axis marked "14.3 days"; A2: one coded nucleus beside a clock face marked "30 min so far" and "t½ = 10 min"). On the answer side the card shrinks to the top, a givens strip lists the data, the picture stays, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 15: random individual, statistical sample (2, 11); N = N₀e^(−λt), t½ = ln2/λ, A = λN, becquerel (5 to 7); (1/2)ⁿ and Figure 2 (4); traps: activity against N, two half-lives, same units (4, 7, 10); simulator (small samples wander; 1/32) (11); "Examine 7 marks" (no memory, exponential, A ∝ N, small samples) (2, 5, 7, 11); Activity 1 P-32 (A1); Q1 I-131 (9). Not used: carbon dating (open decision 2); 3,200 to 200 Bq (key notes method instead); radium history (v14 site note 1).
- **Site notes (quoted from site lesson 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing after v14's notes 1 to 4):**
  5. Data realism (Activity 2): "A wooden artefact has ¹⁴C activity of 6.25 Bq/g. Fresh wood has activity 50 Bq/g." Living carbon has about 0.23 Bq per gram of carbon. The arithmetic (one eighth, 17,190 years) is correct; suggest realistic values (for example 0.25 and 0.031 Bq/g) or a note that the values are scaled.
  6. Definition (vocabulary): "Decay constant (λ) Probability of decay per unit time". Exact for the instantaneous rate; for a finite interval Δt the probability is 1 − e^(−λΔt), close to λΔt only when λΔt is small. Suggest "probability per unit time (for short times)". Minor.
  7. Checked and correct: Q1 80 Bq; Q2(c) 150 Bq; Stop and check 50 Bq after 24 h; P-32 1.0 × 10¹⁰ after 42.9 days; 3,200 to 200 Bq in 4 h gives t½ = 1 h; 1/32 = 0.0313; carbon arithmetic 17,190 years; ln2 = 0.693.
- **Cause chain taught, in order:** (1) a nucleus has no memory: the same chance per second at every age, so its decay time is unpredictable (2); (2) in a large group, the number decaying per second is λN, so the same fraction goes in equal times (3, 5); (3) so the number halves in equal times, the half-life, and never quite reaches zero (4); (4) setting N = N₀/2 links λ and t½ (6); (5) activity is λN, so it falls with the same half-life (7); (6) background adds a constant count, so it must be subtracted before reading half-life (8); (7) random fluctuations are large for small samples and negligible for large ones, so the law predicts populations, not one nucleus (11).
- **Entry knowledge (route `entryKnowledge`):** v14 (spontaneous decay, Geiger counter); Year 11 graph interpretation; e^x and ln from Mathematics (used, not taught; author note f).
- **Learner-visible vocabulary (plain meaning at first use):** decay constant λ (the fixed decay rate per nucleus, per second, 2); half-life t½ (the time for half the nuclei in a sample to decay, 4); exponential decay (the same fraction lost in every equal time, 5); activity A (decays per second, 7); becquerel (one decay per second, 7); background radiation (radiation counted with no source present, 8); corrected count rate (count rate minus background, 8).
- **Legacy logic ported:** none. Coded family `m8-decay-population` (random decays and the expected half-life curve) is used within its limits ("Deterministic stratified illustrative sample, not a prediction for individual nuclei"; the curve is the expectation) in scenes 1, 5 and 11; the small-sample runs in scene 11 need seeded random samples (kit gap 1).
- **New explainer motion:** **counter throws** (counters tipped onto a tray, red-up ones lifting away, a tally beside, 3); **halving staircase** (bars halving in equal time steps under the smooth curve, 4, 5); **ln step** (`AlignedAlgebra` with the e and ln steps highlighted, 6); **two curves** (N and A on twin axes with the same halving guides, 7); **background band** (a grey constant strip under the raw data, lifted off to leave the corrected curve, 8); **sample-size runs** (three seeded runs with 20 nuclei wandering, three with 10⁴ almost on the curve, 11); `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the grid, tray or graph at the left or centre; working strips at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) λ is the probability per unit time in the limit of short intervals; the probability of decay within a time t is 1 − e^(−λt), close to λt only when λt is small. For I-131 (λ = 0.0866 per day), the chance of decay in one day is 8.3%, close to λ × 1 day. λ can exceed 1 s⁻¹ (Po-214: λ = 4.2 × 10³ s⁻¹), so it is not a probability. Revision 2 (brief 193): narration and labels call λ the decay rate per nucleus; the counters' ½ is a chance per throw.
  (i) Count rate and activity (Revision 2, brief 193): a detector records a fraction of the emissions that depends on geometry and efficiency, plus background. With fixed geometry the corrected count rate is proportional to activity, so it has the same half-life; it is never relabelled Bq.
  (b) Dice: survival per throw 5/6, so the half-life is ln2/ln(6/5) = 3.80 throws, not ln2 × 6 = 4.16; counters avoid this.
  (c) "Never quite reaches zero" applies to the smooth expected curve; a finite sample does reach zero after many half-lives (the last nucleus decays at a random time). Revision 2 (brief 193): the narration now says "The expected number never quite reaches zero", matching the screen tag.
  (d) dN/dt = −λN gives N = N₀e^(−λt). Year 12 Mathematics Advanced covers e^x and its derivative; the derivation is not needed for the syllabus.
  (e) Secondary data (invented, modelled on protactinium-234m, t½ = 1.16 min ≈ 70 s): model count rate 40.0, 22.1, 12.2, 6.7, 3.7 counts per second at 0, 60, 120, 180, 240 s, given small scatter as 40.0, 22.4, 11.9, 6.9, 3.5 (corrected); background 0.5 counts per second, so measured 40.5, 22.9, 12.4, 7.4, 4.0. Halving times read from the curve: 40 → 20 at 70 s, 20 → 10 at 140 s; average 70 s. The isotope is not named in narration.
  (f) "Take the natural log of both sides" assumes students have met ln (Year 12 Mathematics Advanced, or given as a calculator key). The screen shows "ln(e^x) = x".
  (g) Fluctuations: after one half-life a sample of N has standard deviation √(N/4) in the number left: N = 20 gives 2.2 (about 88% of runs between 7 and 13 left); N = 10¹² gives 5 × 10⁵ on 5 × 10¹¹, one part in a million.
  (h) Pronunciations: "becquerel" (BEK-uh-rel); "lambda"; "t half" for t½; "N nought" for N₀; "N t" for N_t.
- **Open decisions for root:**
  - **1. Practical (coverage check).** The counters model and the secondary-data scene cover the route's practical option in a video; the class practical remains for the teacher. A separate practical video (dice or counters with a plotted class result) is a possible later addition.
  - **2. Carbon dating (learning review).** Left out to keep one question; the site includes it. If wanted, add as attempt 3 or a one-scene application (about 350 characters) with the constant-ratio assumption.
  - **3. Handoff picture (root, with v16's designer).** The final frame shows a coded balance with a carbon-12 nucleus on one pan and six protons and six neutrons on the other, the separate nucleons heavier, "missing mass?"; v16 opens on it.

Main question: *Nobody can say when one nucleus will decay. So how can a sample halve on schedule, every time?*
Entry knowledge: spontaneous decay and the Geiger counter (v14); graphs (Year 11); e and ln (Mathematics).
Stops after: no memory and λ, the counters model, half-life and its trap, the law from the cause, λ = ln2/t½, activity, background and graph reading, two worked calculations, population against one nucleus. No mass defect or carbon dating.
Handoff: v16, how missing mass measures nuclear binding energy.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *N_t*, *N₀*, *λ*, *t*, *t½*, *A*.

### 1. hook (random, yet on schedule)
> Each nucleus in a sample decays at a moment nobody can predict. Yet a large sample of a radioactive isotope always halves in the same time, whether you start with a gram or a tonne. Random single events, and a pattern as steady as a clock. So why does half-life predict a population but not one **atom**?

Visual: opens on v14's final frame (see "Opening frame"); the chip becomes the heading: "Why does half-life predict a population but not one atom?". On "decays at a moment nobody can predict" the hovering marker flicks between nuclei and one flips; v14's painted sealed source and Geiger counter slide in under the click trace (solid, about 760 px wide in all), the counter's display ticking up irregularly with each click, slate hand tag "random clicks" and a slate pen ring round the display. On "always halves in the same time" the dashed sketch on the N against t graph solidifies into a navy curve with teal halving guides at equal steps, tag "equal halving times". On "a gram or a tonne" the plates slide away and two small curves with different starting heights halve at the same times, teal hand tag "same t½" with a teal pen bracket on one halving step. On "atom" the heading underlines "population" and "one atom".

### 2. one nucleus has no memory
> Start with one nucleus. It doesn't age, or wear out, or count down. In every moment, it has the same small chance of decaying, whether it was made a minute ago or a billion years ago. Heating it, squeezing it, or locking it in a chemical compound makes no difference. So you can never say when it will go. Its fixed rate of decay, per second, is called the decay constant, **lambda**.

Visual: board change (a new set-up, solid from the first frame): one red-grey nucleus at the centre (about 360 px) with a coded "age" readout (52 px) ticking up. On "doesn't age" a chip "wears out with age" is crossed in red, red hand tag "no countdown". On "the same small chance" a small rate dial beside it stays fixed while the age readout races from "1 minute" to "10⁹ years"; teal pen ring round the unmoving dial. On "Heating it, squeezing it" three small crossed chips "temperature", "pressure", "chemistry" with tag "λ unchanged". On "you can never say when" a dashed navy "?" circles the nucleus. On "lambda" chip "λ: decay constant, the fixed decay rate per nucleus (s⁻¹)" in a dark-ink frame, with a small teal hand tag "short time Δt: chance ≈ λΔt".

### 3. a safe model: counters
> Here's a safe way to model it. Take two hundred counters, red on one side and yellow on the other. Tip them onto a tray, and remove every one that lands red side up. Each counter has a one in two chance every throw. You can't predict which ones will go, but about half go each time. Two hundred, then about a hundred, about fifty, about **twenty five**.

Visual: board change (a new set-up, solid from the first frame): the painted tray `y12p-counter-tray-v1.png` (about 1000 px wide, 667 px tall, below native size) with 200 painted counters scattered on it (`y12p-counter-red-v1.png` and `y12p-counter-yellow-v1.png` instanced at about 40 px, seeded positions); live readouts at the right (52 px) "throw: 0" and "remaining: 200"; a chip "model: try it in class". On "remove every one that lands red side up" the red-up counters lift off and leave. On "a one in two chance" chip "chance per throw = ½, so one throw = one half-life", with a small grey tag "a chance per throw, not λ itself". On "You can't predict which ones" a navy marker hovers over individual counters before a throw. On "about half go each time" the live control runs: each throw tips the counters, red-up ones lift away, and the readouts step "throw 1: remaining 103", "throw 2: 49", "throw 3: 27" (one seeded run) while a tally column keeps each value; red pen ring round the counters leaving, red hand tag "red up: removed". On "twenty five" a small bar chart of the tally with a dashed halving curve over it, tag "model: one throw = one half-life"; navy hand tag "about half, never exactly" with a navy pen arrow from "103" to the dashed "100".

### 4. what half-life halves
> That's a half-life, the time for half the nuclei in a sample to decay. And notice what each half-life halves. It's what's left, not what you started with. After one half-life, half remains. After two, a quarter. After three, an eighth. The expected number never quite reaches **zero**. Half-lives range from fractions of a second to billions of years. Uranium two three eight's is four and a half billion **years**.

Visual: board change (a new set-up, solid from the first frame): the halving staircase (about 1300 px wide): bars at equal time steps "1", "½", "¼", "⅛", "1/16" under a smooth navy curve; x "number of half-lives", y "N/N₀". On "the time for half the nuclei in a sample to decay" chip "t½: half-life". On "It's what's left" each bar's halving bracket points to the bar before it, not to the first bar; navy hand tag "half of what's left" with navy pen brackets. On "After two, a quarter" a chip "two half-lives = all gone" is crossed in red, red hand tag "¼ left, not 0". On "zero" the curve runs on towards the axis without touching, tag "expected number: never reaches 0". On "fractions of a second to billions of years" a log time ruler with marks "polonium-214: 1.6 × 10⁻⁴ s", "iodine-131: 8.0 days", "carbon-14: 5730 years"; on "years" "uranium-238: 4.5 × 10⁹ years".

### 5. why equal halving times
> Why does it halve in equal times? Every nucleus has the same decay rate, so the number decaying each second is lambda times the number left. Twice as many nuclei, twice as many decays. So the same fraction disappears in every equal stretch of time. That's why the curve is steep at first, when there are lots of nuclei, and flattens out later. That's exponential decay. N t equals N nought, e to the minus lambda **t**.

Visual: the grid of nuclei returns small at the left. On "lambda times the number left" `AlignedAlgebra` "decays per second = λN" (52 px), teal hand tag "rate × how many". On "Twice as many nuclei" the grid doubles with twice as many flips per second, tag "2N → 2 × decays". On "the same fraction disappears" the staircase from scene 4 returns with each step labelled "−½ of what's left". On "steep at first" the curve's early slope gets a steep tangent and its late slope a shallow one, tags "many N: many decays", "few N: few decays". On "exponential decay" chip "same fraction per equal time = exponential". On "t" the syllabus relationship writes large: "N_t = N₀e^(−λt)" in a dark-ink frame (56 px), navy pen arrow from the steep start to "e^(−λt)", labels "N₀: number at the start", "N_t: number left at time t", and a chip "HSC formula sheet".

### 6. linking lambda to half-life
> Now connect lambda to the half-life. After one half-life, N t is half of N nought. So e to the minus lambda t half equals one half. Take the natural log of both sides, and lambda t half equals the natural log of two. So lambda equals the natural log of two, over the half **life**. A short half-life means a big lambda, so each nucleus is more likely to decay each **second**.

Visual: clear change to the working layout (Revision 2 cut; solid from the first frame, the N against t curve small at the upper left with its first halving guide). Task strip: "Link λ and t½". On "N t is half of N nought" `AlignedAlgebra` "at t = t½: N_t = ½N₀". On "e to the minus lambda t half equals one half" "e^(−λt½) = ½". On "Take the natural log of both sides" "−λt½ = ln(½) = −ln2" with a small grey chip "ln(e^x) = x". On "lambda t half equals the natural log of two" "λt½ = ln2 = 0.693". On "life" "λ = ln2 / t½" in a dark-ink frame (56 px), formula-sheet chip; teal pen arrow from "ln2 = 0.693" to the frame. On "second" two small nuclei grids: "short t½ → big λ" flipping fast, "long t½ → small λ" flipping slowly; teal hand tag "t½ ↓, λ ↑".

### 7. activity: what we measure
> Activity is the number of decays per second, in becquerels. A counter only catches a fixed fraction of them. Since each nucleus decays at a rate lambda, activity equals lambda times N. So activity falls with exactly the same half-life as N. But they're different things. One is a count of nuclei, the other is a rate of **decays**.

Visual: board change (a new set-up, solid from the first frame): twin graphs on one time axis (about 1200 px wide): "N (nuclei)" navy, "A (Bq)" amber, both with the same teal halving guides. On "in becquerels" chip "1 Bq = 1 decay per second". On "a fixed fraction of them" a small Geiger tube icon catches one of several amber arrows, slate hand tag "count rate ≠ activity" and a small tag "same set-up: same half-life". On "activity equals lambda times N" `AlignedAlgebra` "A = λN" and "A_t = A₀e^(−λt)". On "the same half-life" the halving guides flash on both curves together. On "decays" two unit tags "N: nuclei (a number)" and "A: decays per second (a rate)" framed side by side, with a chip "activity = number of nuclei" crossed in red; amber pen ring round the two halving guides lining up.

### 8. real data: subtract the background
> In an experiment, a Geiger counter also picks up background radiation, from rocks, building materials and space. So first, measure the count rate with no source, and subtract it from every reading. Then plot the corrected count rate against time. The points scatter a little, because decay is random, so draw a smooth curve of best fit. Read off the time it takes to halve, from a few different starting points, and **average** them.

Visual: board change (a new set-up, solid from the first frame): the painted Geiger counter `y12p-geiger-counter-v1.png` (v14; about 760 px wide) with no source, the coded display reading "0.5 counts per second" (52 px), grey hand tag "background: no source" with a grey pen ring round the display. On "subtract it from every reading" a data table writes (secondary data, a short-lived isotope): "t (s): 0, 60, 120, 180, 240", "measured (counts per second): 40.5, 22.9, 12.4, 7.4, 4.0", then "corrected: 40.0, 22.4, 11.9, 6.9, 3.5", the background lifting off as a grey band. On "plot the corrected count rate" the points plot. On "a smooth curve of best fit" a smooth navy curve draws through the scatter. On "from a few different starting points" dashed teal guides: "40 → 20: 70 s", "20 → 10: 70 s". On "average" "t½ ≈ 70 s" in a dark-ink frame (56 px); slate hand tag "counts per second, not Bq".

### 9. stage 1: whole half-lives
> Let's predict an activity. Iodine one three one, used in medicine, has a half-life of eight days. A sample has an activity of six hundred and forty becquerels. After twenty four days, that's three half-lives, so the activity is six hundred and forty over eight, which is eighty **becquerels**.

Visual: board change (a new set-up, solid from the first frame: the task strip, the givens and an empty amber activity curve, about 700 px, with half-life marks). Task strip: "Predict the activity of iodine-131". Equation strip: "A_t = A₀e^(−λt), λ = ln2/t½". Givens grouped: "t½ = 8.0 days, A₀ = 640 Bq" (sample); "t = 24 days" (first case). On "three half-lives" "n = t/t½ = 24/8.0 = 3". On "becquerels" "A = 640 × (½)³ = 640/8 = 80 Bq" in a dark-ink frame (56 px), and a small staircase 640, 320, 160, 80 on the curve; beside it a chip "640 / 3 = 213 Bq" fades in and is crossed in red, red hand tag "halve 3 times, not ÷ 3".

### 10. stage 2: not a whole number
> But what about ten days, which isn't a whole number of half-lives? Use the formula. Lambda is the natural log of two over eight, which is zero point zero eight six six per day. So lambda t is zero point eight six six, and the activity is six hundred and forty, times e to the minus zero point eight six six, two hundred and sixty nine **becquerels**. Keep lambda and t in the same time **units**.

Visual: stage 1 shrinks to one kept line "24 days: 80 Bq". Givens add "t = 10 days" (second case). On "zero point zero eight six six per day" `AlignedAlgebra` "λ = ln2 / 8.0 = 0.0866 day⁻¹". On "lambda t is zero point eight six six" "λt = 0.0866 × 10 = 0.866". On "becquerels" "A = 640 × e^(−0.866) = 640 × 0.421 = 269 Bq" in a dark-ink frame (56 px) with a `NumberTicker`; the time slider on the activity curve runs with a live readout (52 px) "t = 0 days: 640 Bq", "8: 320", "10: 269", "16: 160", "24: 80", stopping at 10 days between the 1 and 2 half-life marks, green hand tag "between 320 and 160 ✓". On "units" chip "λ per day ↔ t in days"; beside it a chip "λ = ln2 × 8.0 → A ≈ 0 Bq" fades in and is crossed in red, red hand tag "ln2 ÷ t½".

### 11. the crowd, not the individual
> So why does this work for a population, but not one atom? With twenty nuclei, chance matters a lot. After one half-life, you might have seven left, or thirteen. With a million million nuclei, the random differences even out, and the number left is within about one part in a million of half. The half-life describes the crowd. For one nucleus, it only tells you there's a fifty per cent chance it's gone after one half-**life**.

Visual: board change (a new set-up, solid from the first frame): sample-size runs on one N/N₀ against t½ axis (about 1300 px) with the smooth expected curve and live "left" readouts (52 px) beside each run. On "With twenty nuclei" three seeded runs of 20 wander as steps around the curve; at one half-life their readouts stop at "7/20", "10/20", "13/20", red pen bracket spanning the spread, red hand tag "chance matters". On "a million million nuclei" three runs of a large sample sit on the curve, indistinguishable, tag "10¹² nuclei: within 1 part in 10⁶". On "describes the crowd" the large-sample curve glows, framed tag "half-life: a property of the population", navy hand tag "the crowd". On "life" a single nucleus beside a coin-style 50/50 dial, tag "one nucleus: 50% after one t½".

### 12. a way to remember
> Here's a way to remember the trap. Each half-life halves what's left, not what you started **with**.

Visual: the staircase from scene 4 returns; brackets from each bar to the one before it. On "with" the line writes large as the framed memory card (hand lettering, 52 px; reused on the notes screen): "Each half-life halves what's left, not what you started with." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Phosphorus thirty two has a half-life of fourteen point three days. A sample starts with eight point zero times ten to the ten atoms. Calculate the decay constant, and the number of atoms left after thirty point zero days. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Phosphorus-32 has a half-life of 14.3 days. A sample initially contains 8.0 × 10¹⁰ phosphorus-32 atoms. (a) Calculate the decay constant of phosphorus-32. (b) Calculate the number of phosphorus-32 atoms remaining after 30.0 days. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 300 px): a coded grid of nuclei labelled "P-32 sample, t = 0" beside an empty N against t axis with a mark "14.3 days". Formula chips "N_t = N₀e^(−λt)", "λ = ln2/t½". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> Lambda is the natural log of two over fourteen point three, zero point zero four eight five per **day**. Then lambda t is one point four five five, so N is eight point zero times ten to the ten, times e to the minus one point four five five. That's one point eight seven times ten to the ten **atoms**. The slip is using lambda per second with t in days, which makes almost nothing **decay**.

Visual: card shrinks to the top; "14.3 days", "8.0 × 10¹⁰" and "30.0 days" underline; givens strip "t½ = 14.3 days; N₀ = 8.0 × 10¹⁰; t = 30.0 days"; the picture stays at the right, its axis gaining the curve as the answer arrives. On "day" "(a) λ = ln2 / 14.3 = 0.0485 day⁻¹" in a dark-ink frame (52 px). On "atoms" the λ line dims; "(b) λt = 0.0485 × 30.0 = 1.455; N = 8.0 × 10¹⁰ × e^(−1.455) = 1.87 × 10¹⁰ atoms" in a dark-ink frame (56 px) with a green check tag "about 2 half-lives → a bit under ¼ ✓". On "decay" a chip "λ = 5.61 × 10⁻⁷ s⁻¹, t = 30 → N ≈ 8.0 × 10¹⁰" fades in and is crossed in red, red hand tag "same time units". Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A nucleus has a half-life of ten minutes. It has already lasted thirty minutes without decaying. What's the chance it decays in the next ten minutes? Explain. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A particular radioactive nucleus has a half-life of 10 minutes. It has existed for 30 minutes without decaying. State the probability that it decays in the next 10 minutes, and explain your answer. (2 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 280 px): one coded nucleus beside a clock face marked "30 min so far" and a tag "t½ = 10 min". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> It's fifty per cent, the same as for a brand new nucleus. A nucleus has no memory, so it has the same chance per second at any age. The half-life is ten minutes, so in any ten minutes, the chance is one **half**. The slip is thinking it's overdue, so it's more likely to **go**.

Visual: card shrinks to the top; "half-life of 10 minutes" and "30 minutes" underline; the clock picture stays at the right. Lines write in turn (44 px): "probability = ½ (50%)" in a dark-ink frame; "no memory: same λ at every age"; on "half" "chance in one t½ = ½". On "go" a chip "it's overdue, so it's more likely" fades in and is crossed in red, red hand tag "no memory". Hold about 1 second.

### 17. handoff
> So half-life predicts the crowd, never one nucleus. But every one of these decays gives out energy. Where does that energy come from? Weigh a carbon twelve nucleus. Then weigh six protons and six neutrons, separately. They don't balance. So how does missing mass measure nuclear binding **energy**?

Visual: board clears (camera change). On "predicts the crowd" the large-sample curve returns small at the upper left with its halving guides. On "gives out energy" a decaying nucleus at the left sends out an α with an orange energy bar, tag "energy out". On "Weigh a carbon twelve nucleus" a coded two-pan balance at the centre, labelled "mass comparison (diagram)"; a coded C-12 nucleus (6 red "p", 6 grey "n" discs packed together) lands on the left pan. On "six protons and six neutrons, separately" six red and six grey discs, spaced apart, land on the right pan. On "They don't balance" the beam tips down on the right (separate nucleons heavier), tag "missing mass?". On "energy" the chip "Next: how does missing mass measure nuclear binding energy?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. λ: fixed decay rate per nucleus; no memory.
2. N_t = N₀e^(−λt); λ = ln2/t½ (same time units).
3. Activity A = λN (Bq), same half-life.
4. Subtract background; counts/s is not Bq.
5. Half-life predicts the crowd, not one nucleus.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Each half-life halves what's left, not what you started with.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why one nucleus can't be predicted (2); why equal halving times (5); why λ and t½ are linked (6); why activity has the same half-life (7); why background must be subtracted (8); why populations are predictable (11).
- **Misconceptions addressed:** "two half-lives means all gone" (4, 12); activity = number of nuclei (7); mixed time units (10, 14 crossed); "an old nucleus is overdue" (2, 16 crossed); "half-life is a countdown for each nucleus" (2, 11).
- **One idea at a time:** one nucleus (2), the model (3), half-life (4), the law (5), λ and t½ (6), activity (7), data (8), whole half-lives (9), the formula (10), sample size (11).
- **Video makes it easier:** counters leaving the tray (3); the staircase under the curve (4, 5); twin curves halving together (7); the background band lifting off (8); small runs wandering against large runs on the curve (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 22 s.
- **Avoided double teaching:** spontaneous decay and the Geiger counter (v14) recalled in a clause; e and ln (Mathematics) used as tools.
- **Syllabus coverage:** `P8-IQ4-02`: the half-life model examined (2 to 5, 11) and quantitative predictions of activity and amount using N_t = N₀e^(−λt) and λ = ln2/t½ (6, 9, 10, A1); route practical: safe analogue (3) and secondary data with background subtraction (8).
- **Out of scope by design:** mass defect and binding energy (v16); carbon dating (open decision 2); the calculus derivation (author note d).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Phosphorus-32 has a half-life of 14.3 days. A sample initially contains 8.0 × 10¹⁰ phosphorus-32 atoms. (a) Calculate the decay constant of phosphorus-32. (b) Calculate the number of phosphorus-32 atoms remaining after 30.0 days."
Model answer: (a) λ = ln2/t½ = 0.693/14.3 = 0.0485 day⁻¹ (5.61 × 10⁻⁷ s⁻¹). (b) λt = 0.0485 × 30.0 = 1.455; N_t = N₀e^(−λt) = 8.0 × 10¹⁰ × e^(−1.455) = 8.0 × 10¹⁰ × 0.233 = 1.87 × 10¹⁰ atoms (check: just over two half-lives, so a bit under a quarter remains). Classic mistake (crossed): λ in s⁻¹ with t in days, giving N ≈ 8.0 × 10¹⁰ (almost no decay).

**Attempt 2 (scene 15; original wording, HSC style, 2 marks).** "A particular radioactive nucleus has a half-life of 10 minutes. It has existed for 30 minutes without decaying. State the probability that it decays in the next 10 minutes, and explain your answer."
Model answer: The probability is ½ (50%). Radioactive decay is random and a nucleus has no memory: its decay constant λ (decay rate per nucleus) is the same at every age, so over any interval of one half-life the probability of decay is ½, regardless of how long it has already existed. Classic mistake (crossed): "it's overdue, so it's more likely to decay".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| ln 2 | 0.6931 ("zero point six nine three" on screen only) | 6, 14 |
| Counters run (seeded, illustrative) | 200, 103, 49, 27; expected 200, 100, 50, 25 | 3 |
| Fractions | ½, ¼, ⅛, 1/16 | 4 |
| Secondary data (author note e) | t = 0, 60, 120, 180, 240 s; measured 40.5, 22.9, 12.4, 7.4, 4.0; background 0.5; corrected 40.0, 22.4, 11.9, 6.9, 3.5 counts per second (model 40.0, 22.1, 12.2, 6.7, 3.7 with small scatter); t½ ≈ 70 s from the best-fit curve | 8 |
| Half-life ruler | Po-214 1.64 × 10⁻⁴ s; I-131 8.02 days (8.0); C-14 5730 years (5700 in NUBASE2020; 5730 is the conventional value); U-238 4.47 × 10⁹ years ("four and a half billion") | 4 |
| I-131, whole half-lives | t½ = 8.0 days, A₀ = 640 Bq, t = 24 days: n = 3, A = 80 Bq | 9 |
| I-131, 10 days | λ = 0.08664 → 0.0866 day⁻¹; λt = 0.866; e^(−0.866) = 0.4206 → 0.421; A = 269.2 → 269 Bq (unrounded λ: 269.1) | 10 |
| Fluctuations | N = 20: s.d. 2.2, P(7 to 13 left) = 0.885; N = 10¹²: s.d. 5 × 10⁵, 1 part in 10⁶ | 11 |
| A1 | λ = 0.04847 → 0.0485 day⁻¹ (5.61 × 10⁻⁷ s⁻¹); λt = 1.455; N = 1.867 × 10¹⁰ → 1.87 × 10¹⁰ (unrounded λ: 1.869 × 10¹⁰); wrong: 8.0 × 10¹⁰ × e^(−1.68 × 10⁻⁵) ≈ 8.0 × 10¹⁰ | 13, 14 |
| A2 | probability ½ | 15, 16 |
| Scene 10 slider (Revision 2) | A = 640e^(−0.08664t): t = 0, 8, 10, 16, 24 days gives 640, 320, 269.1, 160, 80 Bq | 10 |
| Crossed slips (Revision 2) | 640/3 = 213 Bq (9); λ = ln2 × 8.0 = 5.55 day⁻¹ gives 640e^(−55.5) ≈ 5 × 10⁻²² Bq, "≈ 0" (10) | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `v15.py` in the session scratchpad folder `m8v12-17-designer`); Codex to re-check.

- 40 × 2^(−t/70) at t = 60, 120, 180, 240: 22.08, 12.19, 6.73, 3.71 (the table adds scatter of +0.3, −0.3, +0.2, −0.2); measured = corrected + 0.5.
- ln2/8 = 0.08664; 0.0866 × 10 = 0.866; 640 × e^(−0.866) = 269.2.
- 640/8 = 80.
- ln2/14.3 = 0.04847 day⁻¹; ln2/(14.3 × 86400) = 5.610e-7 s⁻¹; 0.0485 × 30 = 1.455; 8.0e10 × e^(−1.455) = 1.867e10; 8.0e10 × e^(−5.61e-7 × 30) = 7.99987e10.
- Binomial(20, ½): P(7 ≤ k ≤ 13) = 0.885. √(10¹²/4) / (10¹²/2) = 1.0e-6.
- Revision 2 (Python, 7 Nov): 640 × exp(−ln2/8 × t) for t = 0, 8, 10, 16, 24: 640.0, 320.0, 269.1, 160.0, 80.0; 640/3 = 213.3; 640 × exp(−ln2 × 8 × 10) = 5.3e-22; 1 − exp(−0.08664) = 0.0830; Po-214 λ = ln2 / 1.64e-4 = 4.23e3 s⁻¹.
- Site checks: 800 × (½)⁴ = 50; 8.0e10 × (½)³ = 1.0e10; 3200/200 = 16 = 2⁴ → t½ = 1 h; 1/32 = 0.03125.

## Memory aid check

- **"Each half-life halves what's left, not what you started with."** Meaning, as said in scene 12: the second half-life acts on the half that remained, so a quarter remains, not zero. Assumptions checked: true for any exponential decay, for N and for A; it aims at the site's named trap ("After two half-lives, all atoms have decayed"). Introduced after the explanation (4, 5). Short enough to say in one breath.
- **Considered, not used:** "half-life is not a countdown" (the site simulator's title; kept as the idea in scene 2's "doesn't count down" instead of a slogan).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,636 characters**, 18 scenes. Characters per scene (1 to 18): 300, 380, 349, 407, 415, 368, 327, 429, 289, 388, 424, 96, 255, 380, 190, 270, 294, 75. At 13.3 characters per second the speech is about 424 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 3 tray and scene 10 slider run under their narration): **about 490 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 5,651 characters by the inter-scene convention (5,634 scene sum), about 506 s. Reserve trims if the voiced take runs long: scene 3's last sentence (keep the tally); scene 7's "But they're different things" sentence (keep the unit tags); scene 11's last sentence (keep the dial).

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m8-v14.md`): paper background; heading "What changes in a nucleus during alpha, beta and gamma decay?"; at the left a coded 10 by 10 grid of identical nuclei (red-grey discs), about a dozen flipped to grey "decayed" rings at scattered places; along the top an irregular click trace (vertical ticks at uneven spacing); a dashed navy marker hovering over the grid, tag "which next? when?"; at the right an empty graph with axes "N" and "t" and a dashed curve sketch halving at equal steps, tag "half every t½?"; chip "Next: why does half-life predict a population but not one atom?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why does half-life predict a population but not one atom?"; at the upper left, small, the navy N against t curve with teal halving guides; at the left a small decaying nucleus sending out an amber α with an orange energy bar, tag "energy out" (Revision 2; was "MeV each"); at the centre a coded two-pan balance labelled "mass comparison (diagram)": on the left pan a packed C-12 nucleus (6 red "p" and 6 grey "n" discs), on the right pan six red and six grey discs spaced apart; the beam tipped down on the right (separate nucleons heavier), tag "missing mass?"; chip "Next: how does missing mass measure nuclear binding energy?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v15` (route phys-y12-m8-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v15` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, no-memory, counters-model, half-life-trap, exponential-law, lambda-half-life, activity, background-data, whole-half-lives, formula-case, crowd-not-individual, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: counter throws, halving staircase, ln step, two curves, background band, sample-size runs (`m8-decay-population` with seeded samples), `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the tray; 3 to 4 clear change; 4 to 5 camera continue; 5 to 6 clear change to the working layout (Revision 2); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 camera continue; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v15-learning-review.md`, `science_check` = `checks/p-y12-m8-v15-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched; all inspected 7 Nov, native sizes accepted by root decision 17):
- `public/assets/physics/y12p-geiger-counter-v1.png` (1774 × 887, RGBA; GM tube on a stand, cable to a counter box with a blank dark display): 1, 8.
- `public/assets/physics/y12p-sealed-source-v1.png` (1536 × 1024, RGBA): 1 only (scene 8 measures background with no source present, so the source is deliberately absent there).
- `public/assets/physics/y12p-counter-tray-v1.png` (1536 × 1024, RGBA; an empty shallow light grey tray seen from above at an angle): 3.
- `public/assets/physics/y12p-counter-red-v1.png` and `y12p-counter-yellow-v1.png` (1254 × 1254 each, RGBA; a plain round counter, red face up with a yellow edge, and yellow face up with a red edge; share one canvas, silhouette IoU 0.99): 3 (instanced at about 40 px, far below native size).

Need (new plates): none. (Revision 1's three requests were delivered.)

Coded: the nuclei grid, click trace, graphs, staircase, halving guides, probability dial, tally and bar chart, data table, background band, sample runs, the balance and nucleons, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v15 build brief):
1. **Seeded sample runs.** The `m8-decay-population` family is deterministic and stratified; scene 11 needs several seeded random runs for small and large samples plotted against the expected curve (seeded so every render is identical).
2. **Counter throws.** Instanced counter plates scattered on the tray at seeded positions, with red-up counters lifting away each throw and a tally.

## Codex asset brief

Revision 2: no new plates. The requests below are kept for the record; all three were delivered (root decision 17 and brief 193).

All new plates painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges, no text, no labels, no glow), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side for the tray and at least 600 px for each counter, object centred with even margins, soft shadow inside the alpha only. No people, no hands, no faces.

1. **`y12p-counter-tray-v1.png`** (new). A shallow rectangular plastic classroom tray, light grey, seen from above at a slight angle (about 20° from vertical) so its rim is visible; empty. Sidecar anchors: the inner floor's four corners.
2. **`y12p-counter-red-v1.png`** (new). One round two-coloured plastic classroom counter (about 2 cm), red face up, plain (no markings), seen from the same angle as the tray, a thin yellow edge visible. Sidecar anchors: centre.
3. **`y12p-counter-yellow-v1.png`** (new). The same counter, yellow face up, a thin red edge visible, same angle and scale. Sidecar anchors: centre.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: no memory and a constant chance per second; the counters model (half-life one throw); half-life and "never quite reaches zero" (author note c); decays per second = λN giving exponential decay; the derivation of λ = ln2/t½; A = λN and the same half-life; background subtraction and graph reading; the fluctuation statements (author note g); the 50% answer.
3. Confirm the two relationships are displayed exactly as in the syllabus and on the HSC formula sheet: N_t = N₀e^(−λt) and λ = ln2/t½.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 5 and 6 under Decisions to root.

## YouTube metadata (draft)

Title: Half-Life Explained: Why Random Decays Give a Predictable Curve | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html

Nobody can say when one nucleus will decay, yet a sample halves on schedule. See why a nucleus has no memory, model decay with classroom counters, derive λ = ln2/t½ from N = N₀e^(−λt), subtract background from real data, and predict activities for whole and part half-lives. Find out why half-life describes the crowd, never one atom. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"examine the model of half-life in radioactive decay and make quantitative predictions about the activity or amount of a radioactive sample using the following relationships:
- N_t = N₀e^(−λt)
- λ = ln2/t½"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: what changes in a nucleus during alpha, beta and gamma decay. Next: how missing mass measures nuclear binding energy.

#HSCPhysics #Physics #HalfLife #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 193's findings are resolved below; needs the Codex error check before plates and voicing. v16 Revision 2 opens on the revised final frame ("energy out" tag, "mass comparison (diagram)" label).
- Revision 1 had no independent review. Next: student learning review (trace from v14; check that the "no memory" idea lands before the law; that the ln step in scene 6 is followable for students who have not yet met ln in Mathematics; that the background scene's table is readable at speed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The counters leaving the tray, the staircase under the curve and the wandering small samples carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 193 findings (`checks/p-y12-m8-v15-learning-review.md`, `checks/p-y12-m8-v15-science-check.md`): 0 blockers, 4 should fix.
- **Should fix, "never quite reaches zero" (scene 4, learning).** Resolved: "It never quite reaches zero." becomes "The expected number never quite reaches zero.", matching the on-screen "expected number" tag (author note c).
- **Should fix, meaning of λ (scenes 2, 3, 5, 7 and labels, science).** Resolved: "In every second, it has the same small chance" becomes "In every moment, it has the same small chance"; "That chance per second is called the decay constant" becomes "Its fixed rate of decay, per second, is called the decay constant"; scene 5 says "the same decay rate"; scene 7 says "decays at a rate lambda". The λ chip reads "the fixed decay rate per nucleus (s⁻¹)" with a small tag "short time Δt: chance ≈ λΔt"; the counters' chip reads "chance per throw = ½, so one throw = one half-life" with "a chance per throw, not λ itself". Vocabulary, the A2 model answer and author note a (λ can exceed 1 s⁻¹) match.
- **Should fix, count rate is not activity (scene 7, with v14 scene 1, science).** Resolved: "What we actually measure is activity, the number of decays per second, in becquerels." becomes "Activity is the number of decays per second, in becquerels. A counter only catches a fixed fraction of them."; tags "count rate ≠ activity" and "same set-up: same half-life" (7) and "counts per second, not Bq" (8). Data stay in counts per second. Key note 4 states it. Author note i added.
- **Should fix, universal MeV claim (scene 17, science).** Resolved: ", millions of electron volts each time" removed; the tag "MeV each" becomes "energy out" in scene 17 and the final frame. The missing-mass question is kept. v16's opening frame is updated to match.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the sealed source and Geiger counter enter scene 1 under the click trace (the opening frame, v14's final frame, is unchanged); the delivered tray and red and yellow counters carry scene 3; the Geiger counter carries scene 8.
- Live control: the counter tray in scene 3 with live throw and remaining readouts (200, 103, 49, 27); a time slider on the iodine curve in scene 10 (640, 320, 269, 160, 80 Bq); live readouts on scene 11's runs.
- Hand tags and a pen mark in role colours in every teaching scene ("random clicks", "same t½", "no countdown", "short time Δt: chance ≈ λΔt", "red up: removed", "about half, never exactly", "half of what's left", "¼ left, not 0", "rate × how many", "t½ ↓, λ ↑", "count rate ≠ activity", "background: no source", "counts per second, not Bq", "between 320 and 160 ✓", "chance matters", "the crowd").
- Framed answers: λ chip (2), N_t = N₀e^(−λt) (5), λ = ln2/t½ (6), the unit tags (7), t½ ≈ 70 s (8), 80 Bq (9), 269 Bq (10), both A1 lines (14), ½ (16). New crossed slips: "640 / 3 = 213 Bq" (9) and "λ = ln2 × 8.0 → A ≈ 0 Bq" (10).
- Key notes cut from six long items (about 900 characters) to five short bullets (about 230 characters) with the framed memory card (scene 12 now writes the line as that card); quiet notes hold 60 s to 45 s.
- Board cut: scene 6 is a clear change to the working layout, so no set-up runs past about 61 s.
- Question cards arrive with full text and a picture; answer sides add a givens strip.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening frame (v14's final frame) is unchanged; the source and counter enter on a scene 1 cue. The final frame changes only its tag ("MeV each" to "energy out", brief 193) and adds the balance label "mass comparison (diagram)" (v16 learning review: keep that label at every use, including the joins); v16 Revision 2's "Opening frame" matches.

Counts: 5,634 to 5,636 characters (scene sum; Revision 1's headline 5,651 used the inter-scene convention); about 506 s to about 490 s.
