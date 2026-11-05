# Year 12 Physics M8 V15: Half-life and radioactive decay. Why does half-life predict a population but not one atom? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,651 characters, 18 scenes, about 506 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v11.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site worked numbers kept, every number recalculated in Python, original attempts and data, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson15.sa.txt`; also read for v14): lesson 15, especially "use-the-exponential-decay-law" (random at the individual level, statistical for a large sample; N = N₀e^(−λt); t½ = ln2/λ = 0.693/λ; A = λN = A₀e^(−λt), becquerel; (1/2)ⁿ; Figure 2; carbon-14 dating; Stop and check 800 Bq, 6 h, 24 h), "clear-the-misconceptions" (activity against number of nuclei; "After two half-lives, all atoms have decayed"; same units for t and t½), "drive-the-decay-simulator" ("Half-life Is Not a Countdown"; small samples of 20 wander from the law; 1/32 after five half-lives), "apply-decay-calculations" (Activity 1: P-32 14.3 days, 8.0 × 10¹⁰ atoms, 42.9 days; 3,200 Bq to 200 Bq in 4 hours; Activity 2: wood 6.25 Bq/g against 50 Bq/g; "Examine 7 marks" on the model: fixed probability per unit time, independent of age; exponential; activity proportional to N but distinct; the small-sample limit), independent practice Q1 (I-131, 8 days, 640 Bq, 24 days: 80 Bq) and Q2(c), (d): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson15.sa.html`, SHA256 `f17baa97b8d2ee36d7e71dcaa1f9c940d0e225914277466a5f43f7c48563fd63` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v15`, sections `use-the-exponential-decay-law`, `apply-decay-calculations`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Connect random individual decay to Nt=N0 exp(-lambda t), lambda=ln2/t half, activity and graph interpretation. State background subtraction for data." Route practical: "Primary safe analogue or secondary radioactive-decay data investigation". Next: "phys-y12-m8-v16: How does missing mass measure nuclear binding energy?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists not named); the counters, tray, Geiger counter and sealed source are painted plates (two reused from v14, three new), scaled uniformly, never stretched; the nuclei grid, graphs, tables and calculation strips are coded, HSC style; every number recalculated in Python; the syllabus relationships exactly as printed, N_t = N₀e^(−λt) and λ = ln2/t½; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v14 (decay is spontaneous; each click is one nucleus; Geiger counter; sealed-source safety); Year 11 Mathematics or Year 12 Mathematics (e and the natural logarithm, said as a tool: "take the natural log of both sides").

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P8-IQ4-02`: "examine the model of half-life in radioactive decay and make quantitative predictions about the activity or amount of a radioactive sample using the following relationships:"
  - "N_(t)=N_(o)e^(-λt)" (displayed as N_t = N₀e^(−λt))
  - "λ=(ln2)/(t_(1/2))" (displayed as λ = ln2/t½)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v14's final frame (the nuclei grid with a few decayed, the irregular click trace, "which next? when?", an empty N against t graph with a dashed halving sketch). Teaches: one nucleus has no memory, a constant chance per second, the decay constant λ; the counters analogue (a safe primary model: 200 counters, remove red-up, about half each throw); half-life defined, and the trap (each half-life halves what is left; never zero); why the halving time is constant (decays per second = λN, so the same fraction goes in equal times), giving N_t = N₀e^(−λt); λ = ln2/t½ derived from it; activity A = λN in becquerels, same half-life, distinct from N; background subtraction and reading half-life from a corrected count-rate graph (secondary data); worked examples (I-131: whole half-lives, 80 Bq; then 10 days with the formula, 269 Bq; same units); why the law predicts a population but not one nucleus (fluctuations shrink with sample size; for one nucleus, a 50% chance per half-life). Stops before mass defect (v16); carbon dating (open decision 2); medical choice of isotopes.

## Decisions

- **Learner question (route wording kept).** "Why does half-life predict a population but not one atom?" The answer, built in order: each nucleus has the same chance per second, with no memory, so its moment of decay is unpredictable (2); in a large group the same fraction decays in equal times, so the number halves in equal times (3 to 5); the halving time and λ are linked (6); in small groups chance fluctuations are large, in large groups they become negligible (11).
- **Hook (v14's handoff).** "Whether you start with a gram or a tonne" (the half-life does not depend on amount).
- **No memory (site "Examine 7 marks" step 1; site simulator "Half-life Is Not a Countdown").** "It doesn't age, or wear out, or count down." λ defined as the chance per second (the site's "probability of decay per unit time"; author note a on the small-λ approximation).
- **Counters analogue (route practical "Primary safe analogue").** Two-coloured classroom counters (red one side, yellow the other): each throw removes red-up counters; chance 1/2 per throw, so the half-life is one throw. Painted counters and tray, coded counts. The narration presents it as a model to try ("Here's a safe way to model it"), and a chip says "model: one throw = one half-life". Dice are not used (their per-throw survival gives a half-life of 3.8 throws, not ln2 × 6 = 4.2, a needless confusion; author note b).
- **Half-life and the trap (site "clear-the-misconceptions").** Defined on a large sample; "each half-life halves what's left"; ½, ¼, ⅛; never zero for a large sample (the asymptote is a smooth-model statement; the last few nuclei do decay, author note c).
- **The law from the cause (route "derive each newly introduced equation").** Decays per second = λN (because each of N nuclei has chance λ per second), so equal fractions vanish in equal times, which is what exponential decay means: N_t = N₀e^(−λt). The calculus (dN/dt = −λN) is not shown; the narration says "That's exponential decay" after the cause (author note d).
- **λ = ln2/t½ derived on screen (site formula box; syllabus).** Set N_t = N₀/2 at t = t½: e^(−λt½) = ½, so λt½ = ln2, so λ = ln2/t½. "A short half-life means a big lambda."
- **Activity (site "use-the-exponential-decay-law"; site trap).** A = λN (from the definition of λ), becquerel = one decay per second; A falls with the same half-life (A = A₀e^(−λt)); "One is a count of nuclei, the other is a rate of decays."
- **Background and graph reading (route stop "State background subtraction for data"; route practical "secondary data").** Background from rocks, building materials and space; measure it with no source and subtract it from every reading; plot the corrected count rate; read the halving time from several starting points and average. Secondary data on screen (a short-lived isotope with t½ about 70 s; background 0.5 counts per second; author note e). The Geiger counter and sealed source are v14's plates.
- **Worked examples (site Q1 numbers; new 10-day step).** I-131, 8.0 days, 640 Bq: 24 days is three half-lives, 80 Bq. Then 10 days: λ = 0.0866 per day, λt = 0.866, A = 640e^(−0.866) = 269 Bq. One stage at a time; "Keep lambda and t in the same time units."
- **Population against one atom (site "Examine 7 marks" step 6; simulator).** 20 nuclei after one half-life: "you might have seven left, or thirteen" (about 88% of trials land between 7 and 13); 10¹² nuclei: within about one part in a million of half. For one nucleus, the half-life only gives a 50% chance of having decayed after one half-life.
- **Memory aid (scene 12): "Each half-life halves what's left, not what you started with."** See "Memory aid check".
- **Attempts (original, HSC style; site Activity 1 nuclide and N₀, new time).** A1 (3 marks): P-32, t½ = 14.3 days, N₀ = 8.0 × 10¹⁰: λ (0.0485 per day) and N after 30.0 days (1.87 × 10¹⁰). Crossed: λ in per second with t in days (λ = 5.61 × 10⁻⁷ s⁻¹ × 30 gives almost no decay). A2 (2 marks): a nucleus with t½ = 10 min has already lasted 30 min; the chance it decays in the next 10 min is 50%, because it has no memory. Crossed: "it's overdue, so it's more likely to decay".
- **Practical note (route "viewing does not complete required practical hours").** Not narrated; the counters scene invites students to try it, and the key notes list it as a model to do in class.
- **Handoff (route next).** Every decay gives out energy (millions of electron volts); weigh a carbon-12 nucleus against its separate nucleons and they don't balance. See "Final frame".
- **Colour key (v14 key):** undecayed nuclei red-grey discs; decayed grey rings; counters painted red and yellow; the N against t curve navy, its halving guides dashed teal; activity curve amber; background a grey band; calculation strips as v11.
- **Site sources used:** lesson 15: random individual, statistical sample (2, 11); N = N₀e^(−λt), t½ = ln2/λ, A = λN, becquerel (5 to 7); (1/2)ⁿ and Figure 2 (4); traps: activity against N, two half-lives, same units (4, 7, 10); simulator (small samples wander; 1/32) (11); "Examine 7 marks" (no memory, exponential, A ∝ N, small samples) (2, 5, 7, 11); Activity 1 P-32 (A1); Q1 I-131 (9). Not used: carbon dating (open decision 2); 3,200 to 200 Bq (key notes method instead); radium history (v14 site note 1).
- **Site notes (quoted from site lesson 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing after v14's notes 1 to 4):**
  5. Data realism (Activity 2): "A wooden artefact has ¹⁴C activity of 6.25 Bq/g. Fresh wood has activity 50 Bq/g." Living carbon has about 0.23 Bq per gram of carbon. The arithmetic (one eighth, 17,190 years) is correct; suggest realistic values (for example 0.25 and 0.031 Bq/g) or a note that the values are scaled.
  6. Definition (vocabulary): "Decay constant (λ) Probability of decay per unit time". Exact for the instantaneous rate; for a finite interval Δt the probability is 1 − e^(−λΔt), close to λΔt only when λΔt is small. Suggest "probability per unit time (for short times)". Minor.
  7. Checked and correct: Q1 80 Bq; Q2(c) 150 Bq; Stop and check 50 Bq after 24 h; P-32 1.0 × 10¹⁰ after 42.9 days; 3,200 to 200 Bq in 4 h gives t½ = 1 h; 1/32 = 0.0313; carbon arithmetic 17,190 years; ln2 = 0.693.
- **Cause chain taught, in order:** (1) a nucleus has no memory: the same chance per second at every age, so its decay time is unpredictable (2); (2) in a large group, the number decaying per second is λN, so the same fraction goes in equal times (3, 5); (3) so the number halves in equal times, the half-life, and never quite reaches zero (4); (4) setting N = N₀/2 links λ and t½ (6); (5) activity is λN, so it falls with the same half-life (7); (6) background adds a constant count, so it must be subtracted before reading half-life (8); (7) random fluctuations are large for small samples and negligible for large ones, so the law predicts populations, not one nucleus (11).
- **Entry knowledge (route `entryKnowledge`):** v14 (spontaneous decay, Geiger counter); Year 11 graph interpretation; e^x and ln from Mathematics (used, not taught; author note f).
- **Learner-visible vocabulary (plain meaning at first use):** decay constant λ (the chance per second that one nucleus decays, 2); half-life t½ (the time for half the nuclei in a sample to decay, 4); exponential decay (the same fraction lost in every equal time, 5); activity A (decays per second, 7); becquerel (one decay per second, 7); background radiation (radiation counted with no source present, 8); corrected count rate (count rate minus background, 8).
- **Legacy logic ported:** none. Coded family `m8-decay-population` (random decays and the expected half-life curve) is used within its limits ("Deterministic stratified illustrative sample, not a prediction for individual nuclei"; the curve is the expectation) in scenes 1, 5 and 11; the small-sample runs in scene 11 need seeded random samples (kit gap 1).
- **New explainer motion:** **counter throws** (counters tipped onto a tray, red-up ones lifting away, a tally beside, 3); **halving staircase** (bars halving in equal time steps under the smooth curve, 4, 5); **ln step** (`AlignedAlgebra` with the e and ln steps highlighted, 6); **two curves** (N and A on twin axes with the same halving guides, 7); **background band** (a grey constant strip under the raw data, lifted off to leave the corrected curve, 8); **sample-size runs** (three seeded runs with 20 nuclei wandering, three with 10⁴ almost on the curve, 11); `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the grid, tray or graph at the left or centre; working strips at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) λ is the probability per unit time in the limit of short intervals; the probability of decay within a time t is 1 − e^(−λt). For I-131 (λ = 0.0866 per day), the chance of decay in one day is 8.3%, close to λ × 1 day.
  (b) Dice: survival per throw 5/6, so the half-life is ln2/ln(6/5) = 3.80 throws, not ln2 × 6 = 4.16; counters avoid this.
  (c) "Never quite reaches zero" applies to the smooth expected curve; a finite sample does reach zero after many half-lives (the last nucleus decays at a random time). The narration says "It never quite reaches zero" right after the fractions, describing the curve; the key notes say "the expected number never reaches zero".
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

Visual: opens on v14's final frame (see "Opening frame"); the chip becomes the heading: "Why does half-life predict a population but not one atom?". On "decays at a moment nobody can predict" the hovering marker flicks between nuclei and one flips. On "always halves in the same time" the dashed sketch on the N against t graph solidifies into a navy curve with teal halving guides at equal steps, tag "equal halving times". On "a gram or a tonne" two small curves with different starting heights halve at the same times. On "atom" the heading underlines "population" and "one atom".

### 2. one nucleus has no memory
> Start with one nucleus. It doesn't age, or wear out, or count down. In every second, it has the same small chance of decaying, whether it was made a minute ago or a billion years ago. Heating it, squeezing it, or locking it in a chemical compound makes no difference. So you can never say when it will go. That chance per second is called the decay constant, **lambda**.

Visual: board change: one red-grey nucleus at the centre with a coded "age" readout ticking up. On "doesn't age" a crossed chip "wears out with age". On "the same small chance" a small probability dial beside it stays fixed while the age readout races from "1 minute" to "10⁹ years". On "Heating it, squeezing it" three small crossed chips "temperature", "pressure", "chemistry" with tag "λ unchanged". On "you can never say when" a dashed navy "?" circles the nucleus. On "lambda" chip "λ: the chance per second that one nucleus decays (decay constant)".

### 3. a safe model: counters
> Here's a safe way to model it. Take two hundred counters, red on one side and yellow on the other. Tip them onto a tray, and remove every one that lands red side up. Each counter has a one in two chance every throw. You can't predict which ones will go, but about half go each time. Two hundred, then about a hundred, about fifty, about **twenty five**.

Visual: board change: the new tray plate `y12p-counter-tray-v1.png` with 200 painted counters scattered on it (`y12p-counter-red-v1.png` and `y12p-counter-yellow-v1.png` instanced, seeded positions); a chip "model: try it in class". On "remove every one that lands red side up" the red-up counters lift off and leave. On "a one in two chance" chip "chance per throw = ½ (like λ)". On "You can't predict which ones" a navy marker hovers over individual counters before a throw. On "about half go each time" a tally column writes "throw 0: 200", "throw 1: 103", "throw 2: 49", "throw 3: 27" (one seeded run). On "twenty five" a small bar chart of the tally with a dashed halving curve over it, tag "model: one throw = one half-life".

### 4. what half-life halves
> That's a half-life, the time for half the nuclei in a sample to decay. And notice what each half-life halves. It's what's left, not what you started with. After one half-life, half remains. After two, a quarter. After three, an eighth. It never quite reaches **zero**. Half-lives range from fractions of a second to billions of years. Uranium two three eight's is four and a half billion **years**.

Visual: board change: the halving staircase: bars at equal time steps "1", "½", "¼", "⅛", "1/16" under a smooth navy curve; x "number of half-lives", y "N/N₀". On "the time for half the nuclei in a sample to decay" chip "t½: half-life". On "It's what's left" each bar's halving bracket points to the bar before it, not to the first bar. On "After two, a quarter" a crossed chip "two half-lives = all gone". On "zero" the curve runs on towards the axis without touching, tag "expected number: never reaches 0". On "fractions of a second to billions of years" a log time ruler with marks "polonium-214: 1.6 × 10⁻⁴ s", "iodine-131: 8.0 days", "carbon-14: 5730 years"; on "years" "uranium-238: 4.5 × 10⁹ years".

### 5. why equal halving times
> Why does it halve in equal times? Every nucleus has the same chance per second, so the number decaying each second is lambda times the number left. Twice as many nuclei, twice as many decays. So the same fraction disappears in every equal stretch of time. That's why the curve is steep at first, when there are lots of nuclei, and flattens out later. That's exponential decay. N t equals N nought, e to the minus lambda **t**.

Visual: the grid of nuclei returns small at the left. On "lambda times the number left" `AlignedAlgebra` "decays per second = λN". On "Twice as many nuclei" the grid doubles with twice as many flips per second, tag "2N → 2 × decays". On "the same fraction disappears" the staircase from scene 4 returns with each step labelled "−½ of what's left". On "steep at first" the curve's early slope gets a steep tangent and its late slope a shallow one, tags "many N: many decays", "few N: few decays". On "exponential decay" chip "same fraction per equal time = exponential". On "t" the syllabus relationship writes large: "N_t = N₀e^(−λt)" (boxed), labels "N₀: number at the start", "N_t: number left at time t", and a chip "HSC formula sheet".

### 6. linking lambda to half-life
> Now connect lambda to the half-life. After one half-life, N t is half of N nought. So e to the minus lambda t half equals one half. Take the natural log of both sides, and lambda t half equals the natural log of two. So lambda equals the natural log of two, over the half **life**. A short half-life means a big lambda, so each nucleus is more likely to decay each **second**.

Visual: working layout. Task strip: "Link λ and t½". On "N t is half of N nought" `AlignedAlgebra` "at t = t½: N_t = ½N₀". On "e to the minus lambda t half equals one half" "e^(−λt½) = ½". On "Take the natural log of both sides" "−λt½ = ln(½) = −ln2" with a small grey chip "ln(e^x) = x". On "lambda t half equals the natural log of two" "λt½ = ln2 = 0.693". On "life" "λ = ln2 / t½" (boxed, formula-sheet chip). On "second" two small nuclei grids: "short t½ → big λ" flipping fast, "long t½ → small λ" flipping slowly.

### 7. activity: what we measure
> What we actually measure is activity, the number of decays per second, in becquerels. Since each nucleus has a chance lambda per second, activity equals lambda times N. So activity falls with exactly the same half-life as N. But they're different things. One is a count of nuclei, the other is a rate of **decays**.

Visual: board change: twin graphs on one time axis: "N (nuclei)" navy, "A (Bq)" amber, both with the same teal halving guides. On "in becquerels" chip "1 Bq = 1 decay per second". On "activity equals lambda times N" `AlignedAlgebra` "A = λN" and "A_t = A₀e^(−λt)". On "the same half-life" the halving guides flash on both curves together. On "decays" two unit tags "N: nuclei (a number)" and "A: decays per second (a rate)", with a crossed chip "activity = number of nuclei".

### 8. real data: subtract the background
> In an experiment, a Geiger counter also picks up background radiation, from rocks, building materials and space. So first, measure the count rate with no source, and subtract it from every reading. Then plot the corrected count rate against time. The points scatter a little, because decay is random, so draw a smooth curve of best fit. Read off the time it takes to halve, from a few different starting points, and **average** them.

Visual: board change: the reused `y12p-geiger-counter-v1.png` (v14) with no source, the coded display reading "0.5 counts per second", tag "background". On "subtract it from every reading" a data table writes (secondary data, a short-lived isotope): "t (s): 0, 60, 120, 180, 240", "measured (counts per second): 40.5, 22.9, 12.4, 7.4, 4.0", then "corrected: 40.0, 22.4, 11.9, 6.9, 3.5", the background lifting off as a grey band. On "plot the corrected count rate" the points plot. On "a smooth curve of best fit" a smooth navy curve draws through the scatter. On "from a few different starting points" dashed teal guides: "40 → 20: 70 s", "20 → 10: 70 s". On "average" "t½ ≈ 70 s" (boxed).

### 9. stage 1: whole half-lives
> Let's predict an activity. Iodine one three one, used in medicine, has a half-life of eight days. A sample has an activity of six hundred and forty becquerels. After twenty four days, that's three half-lives, so the activity is six hundred and forty over eight, which is eighty **becquerels**.

Visual: board change. Task strip: "Predict the activity of iodine-131". Equation strip: "A_t = A₀e^(−λt), λ = ln2/t½". Givens grouped: "t½ = 8.0 days, A₀ = 640 Bq" (sample); "t = 24 days" (first case). On "three half-lives" "n = t/t½ = 24/8.0 = 3". On "becquerels" "A = 640 × (½)³ = 640/8 = 80 Bq" (boxed), and a small staircase 640, 320, 160, 80.

### 10. stage 2: not a whole number
> But what about ten days, which isn't a whole number of half-lives? Use the formula. Lambda is the natural log of two over eight, which is zero point zero eight six six per day. So lambda t is zero point eight six six, and the activity is six hundred and forty, times e to the minus zero point eight six six, two hundred and sixty nine **becquerels**. Keep lambda and t in the same time **units**.

Visual: stage 1 shrinks to one kept line "24 days: 80 Bq". Givens add "t = 10 days" (second case). On "zero point zero eight six six per day" `AlignedAlgebra` "λ = ln2 / 8.0 = 0.0866 day⁻¹". On "lambda t is zero point eight six six" "λt = 0.0866 × 10 = 0.866". On "becquerels" "A = 640 × e^(−0.866) = 640 × 0.421 = 269 Bq" (boxed) with a `NumberTicker`; a point lands on the activity curve between the 1 and 2 half-life marks, tag "between 320 and 160 ✓". On "units" chip "λ per day ↔ t in days".

### 11. the crowd, not the individual
> So why does this work for a population, but not one atom? With twenty nuclei, chance matters a lot. After one half-life, you might have seven left, or thirteen. With a million million nuclei, the random differences even out, and the number left is within about one part in a million of half. The half-life describes the crowd. For one nucleus, it only tells you there's a fifty per cent chance it's gone after one half-**life**.

Visual: board change: sample-size runs on one N/N₀ against t½ axis with the smooth expected curve. On "With twenty nuclei" three seeded runs of 20 wander as steps around the curve; at one half-life their values "7/20", "10/20", "13/20" are tagged. On "a million million nuclei" three runs of a large sample sit on the curve, indistinguishable, tag "10¹² nuclei: within 1 part in 10⁶". On "describes the crowd" the large-sample curve glows, tag "half-life: a property of the population". On "life" a single nucleus beside a coin-style 50/50 dial, tag "one nucleus: 50% after one t½".

### 12. a way to remember
> Here's a way to remember the trap. Each half-life halves what's left, not what you started **with**.

Visual: the staircase from scene 4 returns; brackets from each bar to the one before it. On "with" the line writes large: "Each half-life halves what's left, not what you started with." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Phosphorus thirty two has a half-life of fourteen point three days. A sample starts with eight point zero times ten to the ten atoms. Calculate the decay constant, and the number of atoms left after thirty point zero days. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Phosphorus-32 has a half-life of 14.3 days. A sample initially contains 8.0 × 10¹⁰ phosphorus-32 atoms. (a) Calculate the decay constant of phosphorus-32. (b) Calculate the number of phosphorus-32 atoms remaining after 30.0 days. (3 marks)" Formula chips "N_t = N₀e^(−λt)", "λ = ln2/t½". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Lambda is the natural log of two over fourteen point three, zero point zero four eight five per **day**. Then lambda t is one point four five five, so N is eight point zero times ten to the ten, times e to the minus one point four five five. That's one point eight seven times ten to the ten **atoms**. The slip is using lambda per second with t in days, which makes almost nothing **decay**.

Visual: card shrinks to the top; "14.3 days", "8.0 × 10¹⁰" and "30.0 days" underline. On "day" "(a) λ = ln2 / 14.3 = 0.0485 day⁻¹". On "atoms" "(b) λt = 0.0485 × 30.0 = 1.455; N = 8.0 × 10¹⁰ × e^(−1.455) = 1.87 × 10¹⁰ atoms" with a check tag "about 2 half-lives → a bit under ¼ ✓". On "decay" a chip "λ = 5.61 × 10⁻⁷ s⁻¹, t = 30 → N ≈ 8.0 × 10¹⁰" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A nucleus has a half-life of ten minutes. It has already lasted thirty minutes without decaying. What's the chance it decays in the next ten minutes? Explain. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A particular radioactive nucleus has a half-life of 10 minutes. It has existed for 30 minutes without decaying. State the probability that it decays in the next 10 minutes, and explain your answer. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> It's fifty per cent, the same as for a brand new nucleus. A nucleus has no memory, so it has the same chance per second at any age. The half-life is ten minutes, so in any ten minutes, the chance is one **half**. The slip is thinking it's overdue, so it's more likely to **go**.

Visual: card shrinks to the top; "half-life of 10 minutes" and "30 minutes" underline. Lines write in turn: "probability = ½ (50%)"; "no memory: same λ at every age"; on "half" "chance in one t½ = ½". On "go" a chip "it's overdue, so it's more likely" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So half-life predicts the crowd, never one nucleus. But every one of these decays gives out energy, millions of electron volts each time. Where does that energy come from? Weigh a carbon twelve nucleus. Then weigh six protons and six neutrons, separately. They don't balance. So how does missing mass measure nuclear binding **energy**?

Visual: board clears (camera change). On "predicts the crowd" the large-sample curve returns small at the upper left with its halving guides. On "gives out energy" a decaying nucleus at the left sends out an α with an orange energy bar, tag "MeV each". On "Weigh a carbon twelve nucleus" a coded two-pan balance at the centre; a coded C-12 nucleus (6 red "p", 6 grey "n" discs packed together) lands on the left pan. On "six protons and six neutrons, separately" six red and six grey discs, spaced apart, land on the right pan. On "They don't balance" the beam tips down on the right (separate nucleons heavier), tag "missing mass?". On "energy" the chip "Next: how does missing mass measure nuclear binding energy?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Each nucleus has the same chance per second of decaying (decay constant λ) at any age: no memory, so one nucleus's decay time can't be predicted.
2. Half-life t½: time for half the nuclei in a large sample to decay. Each half-life halves what's left: ½, ¼, ⅛ (the expected number never reaches 0).
3. Decays per second = λN, so N_t = N₀e^(−λt). At t = t½: λ = ln2/t½ (formula sheet). Keep λ and t in the same units.
4. Activity A = λN (Bq = decays per second); A_t = A₀e^(−λt), same half-life. A and N are different quantities. Example: I-131 (8.0 days), 640 Bq: 80 Bq after 24 days; 269 Bq after 10 days.
5. Data: measure background first and subtract it; read t½ from the corrected curve at several points and average. Model in class: counters, remove red-up each throw (t½ = one throw).
6. The law predicts large populations; small samples fluctuate. For one nucleus: a 50% chance of decay in each half-life.

Memory aid (large, on the notes screen): *Each half-life halves what's left, not what you started with.*

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
Model answer: The probability is ½ (50%). Radioactive decay is random and a nucleus has no memory: its chance of decaying per unit time (λ) is the same at every age, so over any interval of one half-life the probability of decay is ½, regardless of how long it has already existed. Classic mistake (crossed): "it's overdue, so it's more likely to decay".

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

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `v15.py` in the session scratchpad folder `m8v12-17-designer`); Codex to re-check.

- 40 × 2^(−t/70) at t = 60, 120, 180, 240: 22.08, 12.19, 6.73, 3.71 (the table adds scatter of +0.3, −0.3, +0.2, −0.2); measured = corrected + 0.5.
- ln2/8 = 0.08664; 0.0866 × 10 = 0.866; 640 × e^(−0.866) = 269.2.
- 640/8 = 80.
- ln2/14.3 = 0.04847 day⁻¹; ln2/(14.3 × 86400) = 5.610e-7 s⁻¹; 0.0485 × 30 = 1.455; 8.0e10 × e^(−1.455) = 1.867e10; 8.0e10 × e^(−5.61e-7 × 30) = 7.99987e10.
- Binomial(20, ½): P(7 ≤ k ≤ 13) = 0.885. √(10¹²/4) / (10¹²/2) = 1.0e-6.
- Site checks: 800 × (½)⁴ = 50; 8.0e10 × (½)³ = 1.0e10; 3200/200 = 16 = 2⁴ → t½ = 1 h; 1/32 = 0.03125.

## Memory aid check

- **"Each half-life halves what's left, not what you started with."** Meaning, as said in scene 12: the second half-life acts on the half that remained, so a quarter remains, not zero. Assumptions checked: true for any exponential decay, for N and for A; it aims at the site's named trap ("After two half-lives, all atoms have decayed"). Introduced after the explanation (4, 5). Short enough to say in one breath.
- **Considered, not used:** "half-life is not a countdown" (the site simulator's title; kept as the idea in scene 2's "doesn't count down" instead of a slogan).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,651 characters**, 18 scenes. Characters per scene (1 to 18): 300, 366, 349, 390, 422, 368, 311, 429, 289, 388, 424, 96, 255, 380, 190, 270, 332, 75. At 13.3 characters per second the speech is about 425 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 81 s of holds and countdowns): **about 506 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's last sentence (keep the tally); scene 7's "But they're different things" sentence (keep the unit tags); scene 11's last sentence (keep the dial).

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m8-v14.md`): paper background; heading "What changes in a nucleus during alpha, beta and gamma decay?"; at the left a coded 10 by 10 grid of identical nuclei (red-grey discs), about a dozen flipped to grey "decayed" rings at scattered places; along the top an irregular click trace (vertical ticks at uneven spacing); a dashed navy marker hovering over the grid, tag "which next? when?"; at the right an empty graph with axes "N" and "t" and a dashed curve sketch halving at equal steps, tag "half every t½?"; chip "Next: why does half-life predict a population but not one atom?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why does half-life predict a population but not one atom?"; at the upper left, small, the navy N against t curve with teal halving guides; at the left a small decaying nucleus sending out an amber α with an orange energy bar, tag "MeV each"; at the centre a coded two-pan balance: on the left pan a packed C-12 nucleus (6 red "p" and 6 grey "n" discs), on the right pan six red and six grey discs spaced apart; the beam tipped down on the right (separate nucleons heavier), tag "missing mass?"; chip "Next: how does missing mass measure nuclear binding energy?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v15` (route phys-y12-m8-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v15` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, no-memory, counters-model, half-life-trap, exponential-law, lambda-half-life, activity, background-data, whole-half-lives, formula-case, crowd-not-individual, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: counter throws, halving staircase, ln step, two curves, background band, sample-size runs (`m8-decay-population` with seeded samples), `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the tray; 3 to 4 clear change; 4 to 5 camera continue; 5 to 6 camera continue (working layout); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 camera continue; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v15-learning-review.md`, `science_check` = `checks/p-y12-m8-v15-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `y12p-geiger-counter-v1.png` (requested by v14): 8.
- **Checked, not used:** `y12p-sealed-source-v1.png` (v14; scene 8 measures background with no source present, so the source is deliberately absent).

Need (new plates):
1. `y12p-counter-tray-v1.png`: 3.
2. `y12p-counter-red-v1.png`: 3 (instanced).
3. `y12p-counter-yellow-v1.png`: 3 (instanced).

Coded: the nuclei grid, click trace, graphs, staircase, halving guides, probability dial, tally and bar chart, data table, background band, sample runs, the balance and nucleons, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v15 build brief):
1. **Seeded sample runs.** The `m8-decay-population` family is deterministic and stratified; scene 11 needs several seeded random runs for small and large samples plotted against the expected curve (seeded so every render is identical).
2. **Counter throws.** Instanced counter plates scattered on the tray at seeded positions, with red-up counters lifting away each throw and a tally.

## Codex asset brief

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

- Revision 1 has had no independent review. Next: student learning review (trace from v14; check that the "no memory" idea lands before the law; that the ln step in scene 6 is followable for students who have not yet met ln in Mathematics; that the background scene's table is readable at speed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The counters leaving the tray, the staircase under the curve and the wandering small samples carry the explanation; judge them at playback speed in the voiced preview.
