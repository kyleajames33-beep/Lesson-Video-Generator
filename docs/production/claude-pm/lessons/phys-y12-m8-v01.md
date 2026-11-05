# Year 12 Physics M8 V01: From radiation to matter. How did cooling radiation allow matter to form in the early Universe? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,434 characters, 18 scenes, about 568 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on m7-v16's final frame. First video of Module 8.

Scope: first video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "What evidence is there for the origins of the elements?". Templates as `phys-y12-m7-v16.md` (itself following `phys-y11-fa1-v01.md`); `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson01.sa.txt`, hash checked against the live file): orient and predict (reverse-time prediction, warm-up, intentions, vocabulary), trace the model's timeline (balloon analogy, key-event list, Stop and Check), read the CMB prediction (recombination, Figure 2, 1100 expansion), separate redshift types, sequence the cosmic timeline (Activity 1), apply the expansion calculation (Activity 2, "Account 6 marks", "Analyse 6 marks"), independent practice, retrieve and reflect. `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson01.sa.html`, SHA256 `4116c60419718224ee7790f327a30fcaf15b512be0e7682528b4170a7e3994d2` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v01`, sections `trace-the-model-timeline`, `sequence-the-cosmic-timeline`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Trace expansion/cooling, particle formation, nucleosynthesis and recombination in order; distinguish nuclei from neutral atoms. Stop before evaluating cosmological evidence." Next: "phys-y12-m8-v02: What evidence supports an expanding hot early Universe?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists are not named or drawn in this video); the early Universe, particles, photons, the temperature bar, the expanding grid, the timeline and calculation strips are coded, HSC style; no painted plate is needed (the galaxy plate appears once, reused); every number recalculated in Python with HSC data-sheet constants (h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, b = 2.898 × 10⁻³ m K, m_e = 9.109 × 10⁻³¹ kg, m_p = 1.673 × 10⁻²⁷ kg, 1 eV = 1.602 × 10⁻¹⁹ J); data-sheet symbols λ_max = b/T, E = hf, c = fλ, E = mc²; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: m7-v16 (E = mc², annihilation, pair production, 0.51 MeV), m7-v09 (Wien's law), m7-v10 and v11 (photons, E = hf, the electron volt), m7-v03 (energy levels in plain language), Year 11 (atoms and nuclei, nuclear notation, half-life).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ1-01`), quoted from the route JSON `syllabusActions` and the ledger `phys-2017-y12.json`:

- `P8-IQ1-01`: "investigate the processes that led to the transformation of radiation into matter that followed the ‘Big Bang’"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on m7-v16's final frame (pair production in a cooling hot early Universe). Teaches: the hot Big Bang model as expansion of space with no centre; expansion stretches wavelengths, so photon energy and temperature fall (Wien's law, size doubles, temperature halves); the threshold rule for pair production (each photon needs at least mc²); a Wien estimate of the temperature scale for electron pairs (about 10⁹ K); heavier particles first (protons at about 2 × 10¹² K); quarks to protons and neutrons at about a millionth of a second; the tiny matter excess (more than a billion photons per proton or neutron); why neutrons became scarce (heavier, and free neutrons decay, half-life about 10 minutes; about 1 neutron per 7 protons); the deuterium wait until about 10⁹ K and 3 minutes; the 25% helium count; nuclei but not atoms (free electrons, opaque plasma); recombination at about 380 000 years and 3000 K; transparency; first stars after a few hundred million years. Stops before the evidence (redshift, Hubble's law, the CMB as an observation, abundances as a test: v02), Planck time and inflation (site "beyond the syllabus"), and quantitative T ∝ 1/a calculations.

## Decisions

- **Learner question (route wording kept).** "How did cooling radiation allow matter to form in the early Universe?" The answer is one rule used twice: cooling first stops photons making particle pairs, leaving a small excess of matter (3 to 6); then cooling stops photons breaking the structures matter forms, first nuclei (8, 9), much later atoms (10, 11).
- **Hook (from m7-v16's final frame; site predict "What would happen to the temperature of the universe as it shrinks?" reversed).** 3 s prediction chips: "more pairs", "fewer pairs", "no change". Answer: fewer pairs, because fewer photons reach the threshold.
- **Expansion, not explosion (site `trace-the-model-timeline`: "expansion of space itself ... not an explosion into pre-existing space").** A coded square grid of dots stretches uniformly; every dot sees the others recede; a dashed "centre?" ring is crossed. The site's balloon analogy is replaced by a flat grid (the balloon's surface invites "the centre is inside the balloon"; author note a).
- **Cooling mechanism (site "Understand: Universe cooled as it expanded: T ∝ 1/a").** Taught causally with Module 7 tools: stretched wavelength, E = hc/λ, λ_max = b/T. Stated in words ("double the size, the temperature halves"); T ∝ 1/a is not written (site marks quantitative scale-factor work as extension).
- **Threshold rule (recalled from m7-v16's handoff).** Pair production needs each of the two photons to bring at least mc² of the particle; annihilation needs no threshold. Hot: making and annihilating in balance. Cool: making stops.
- **Worked estimate (new, original).** The temperature at which a photon at the Wien peak carries m_ec²: E = 8.2 × 10⁻¹⁴ J, λ = hc/E = 2.4 × 10⁻¹² m, T = b/λ = 1.2 × 10⁹ K. Narrated and tagged as an estimate of the scale (author note b explains why the real pair era spans several billion kelvin down to about 10⁹ K, seconds to minutes). Three stages, one at a time, givens grouped with units.
- **Heavier particles first.** Proton rest energy about 1836 times the electron's (data-sheet masses: 940 MeV), so its Wien scale is about 2 × 10¹² K; quarks bind into protons and neutrons at about a millionth of a second (site timeline "t ≈ 10⁻⁶ s: Quarks combine to form protons and neutrons").
- **Matter excess (site "Formation of fundamental particles").** One sentence on the unexplained asymmetry; "about one extra particle for every billion pairs"; photons outnumber protons and neutrons "more than a billion to one" (Planck 2018 baryon-to-photon ratio η = 6.1 × 10⁻¹⁰, about 1.6 × 10⁹ photons per baryon; author note c). Neutrinos are not mentioned (author note d).
- **Neutron scarcity (new causal step, needed for the helium count).** The neutron is slightly heavier (1.29 MeV; data-sheet masses give 1.1 MeV, not shown), and free neutrons decay with a half-life of about 10 minutes. Result stated: about 1 neutron per 7 protons when fusion began (author note e).
- **Deuterium wait (site Activity 1 Q2 asks the parallel question for the CMB).** Deuterium binding 2.2 MeV; more than a billion photons per nucleon means the energetic tail of the photon spectrum breaks deuterium until about 10⁹ K, about 3 minutes (site "t ≈ 3 min: Nucleosynthesis").
- **25% helium (new, original count).** 2 neutrons + 14 protons → one ⁴He + 12 ¹H: helium is 4 of 16 mass units, 25%; hydrogen 75%; traces of deuterium, helium-3, lithium (site lesson 2 figure; lesson 7 "~75% by mass", "~25%"). Fusion ends after about 20 minutes (site lesson 2 Figure 2 "~20 min nucleosynthesis ends"; site note 1 on lesson 7's "3 minutes"). The observed abundance is not stated here; v02 tests it.
- **Nuclei against atoms (route stop "distinguish nuclei from neutral atoms"; site "Account 6 marks").** Hydrogen's 13.6 eV against deuterium's 2.2 MeV (about 1.6 × 10⁵ times larger); free electrons scatter photons, so the plasma is opaque ("glowing fog"). Recombination at about 380 000 years and about 3000 K (site), Universe transparent. The CMB is named only in the handoff as "that light" (v02 owns it).
- **Timeline (site Activity 1 events; inflation omitted as extension).** Log-time axis with a falling temperature bar; first stars "a few hundred million years later" (site "~200 million years"; author note f).
- **Memory aid (scene 12, new): "Too cool to make pairs, then too cool to break nuclei, then too cool to break atoms."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): the Wien estimate for muon pairs (muon mass given; students met muons in m7-v13): E = 1.69 × 10⁻¹¹ J; λ = 1.18 × 10⁻¹⁴ m; T = 2.5 × 10¹¹ K. Crossed: T = bλ. A2 (3 marks, explain): why nuclei formed minutes after the Big Bang but atoms only after about 380 000 years. Crossed: "nuclei and atoms formed at the same time".
- **Significant figures.** Two figures for the estimates (they are order-of-scale results); data-sheet values to four.
- **Handoff (route next).** The light released at recombination is still travelling and being stretched; if the story is right, it should still fill the sky and galaxies should still recede. Chip "Next: what evidence supports an expanding hot early Universe?". See "Final frame".
- **Colour key (Module 8, Universe videos v01 and v02):** photons amber packets (reddening and lengthening as they cool); protons rose discs "p"; neutrons grey discs "n"; electrons small navy dots "e⁻"; antiparticles drawn as hollow outlines of their particle's colour with a bar or "+" label ("p̄", "e⁺"; continuity with m7-v16's rose positron, now hollow); quarks small teal dots "u", "d"; temperature bar ink outline with a red fill falling; expanding grid ink dots on paper.
- **Site sources used:** lesson 1: predict (reverse time, temperature) (1); vocabulary (Big Bang, recombination) (2, 11); `trace-the-model-timeline` (13.8 billion years; expansion of space, no centre; 10⁻⁶ s quarks; 3 min nucleosynthesis; 380 000 years; first stars ~200 million years) (2, 5, 8, 11, 12); `read-the-cmb-prediction` (opaque plasma, scattering off free electrons, ~3000 K, transparency) (10, 11, 17); Activity 1 (sequence; "why the CMB waited") (12, 15); "Account 6 marks" (state, opacity, cooling, threshold, release) (10, 11, 16); lesson 2 Figure 2 (~20 min end, 75% and 25%) (9). Not used: Planck time and inflation (site extension), the 1100 expansion factor and redshift formula (v02), the balloon (author note a), lookback-time activities (v02).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Inconsistent end of nucleosynthesis (lessons 1, 2, 7): lesson 1 "t ≈ 3 min: Nucleosynthesis", lesson 2 Figure 2 "~3 min He-4 + D form, ~20 min nucleosynthesis ends", but lesson 7 "By the time the universe cooled to ~10⁹ K (about 3 minutes), the density had dropped too low for further fusion" and its vocabulary "first ~3 minutes". About 10⁹ K at about 3 minutes is when deuterium survives and fusion begins; it ends at about 20 minutes. Suggest lesson 7 follow lesson 2.
  2. Precision (lesson 7 `map-the-first-elements`): the listed "key BBN reactions" include "³He + ³He → ⁴He + 2p", which is the final step of the Sun's proton-proton chain; in Big Bang nucleosynthesis helium-4 forms mainly through ³H + ²H → ⁴He + n and ³He + ²H → ⁴He + p. Suggest replacing that line.
  3. Wording (lesson 2 synthesis): "trace back and the universe was once a single hot, dense point". The model describes a hot, dense state everywhere, not a point in space (lesson 1 itself warns against "explosion into pre-existing space"). Suggest "a hot, dense state".
  4. Checked and correct: 13.8 billion years; 380 000 years; ~3000 K; 2.725 K; 3000/2.725 ≈ 1100; 500 nm × 1100 = 550 μm.
- **Cause chain taught, in order:** (1) expansion stretches light, so photon energy and temperature fall (2); (2) a photon pair can make a particle pair only above mc² each, so cooling switches off pair making while annihilation continues (3); (3) for electrons the scale is about 10⁹ K (4), for protons about 2 × 10¹² K, after quarks bind (5); (4) a tiny matter excess survives annihilation (6); (5) neutrons become scarce, 1 per 7 protons (7); (6) photons break deuterium until about 10⁹ K, then helium forms fast (8); (7) the neutron count fixes 25% helium (9); (8) photons keep electrons off nuclei, so matter is an opaque plasma of nuclei and free electrons (10); (9) at about 3000 K atoms form and light travels freely (11).
- **Entry knowledge (route `entryKnowledge`):** Year 11 atoms, nuclei, energy conservation and graph interpretation; Module 7 photons, spectra, Wien's law and mass-energy equivalence. Cosmic chronology is reintroduced explicitly (2, 12), as the route asks.
- **Learner-visible vocabulary (plain meaning at first use):** Big Bang model (the Universe was extremely hot and dense and has been expanding since, 2); antiparticle (recalled: same mass, opposite charge, 3); threshold (the least energy that can do the job, 3); quark (a smaller particle that protons and neutrons are made of, 5); deuterium (one proton stuck to one neutron, 8); nucleosynthesis (making nuclei, 9 on screen); plasma (a hot gas of charged particles: nuclei and free electrons, 10 on screen); recombination (electrons joining nuclei to make neutral atoms, 11); transparent (light can travel straight through, 11).
- **Legacy logic ported:** none. The explainer's `m8-expansion` coded family (src/explainer/physics/module8, "Expand comoving separations and stretch a light wave") supplies the expanding grid and stretched wave in scene 2, within its limits (no CMB scattering mechanism; scenes 10 and 11 add the scattering model).
- **New explainer motion:** **photon field with cooling** (amber packets whose drawn wavelength lengthens and colour reddens as the temperature bar falls); **pair event, both directions** (from m7-v16's kit gap 2: two photons converge into a particle pair; a pair meets and leaves two photons); **threshold gauge** (a photon energy bar against a dashed "mc²" line); **particle tally** (counters for photons, protons, neutrons, electrons, with a "1 : 7" neutron-to-proton readout); **nucleus builder** (n and p discs snapping into ²H and ⁴He; a photon knocking ²H apart); **sixteen-particle count** (2 n and 14 p regrouping into one ⁴He and twelve ¹H, with a mass pie 25/75); **scattering fog** (photon paths zig-zagging between free electrons; straightening when electrons bind); **cosmic timeline** (log time axis, falling temperature bar, event markers); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the coded Universe field (photons and particles) in the left two-thirds; the temperature bar at the right edge throughout (scenes 1 to 12), so every stage is tied to a temperature; calculation strips at the right in scenes 4, 13 and 14; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The balloon surface is a two-dimensional analogy; students often place the centre inside the balloon. The flat grid has no inside. Its limit (a finite grid has an edge) is handled by letting the grid extend beyond the frame.
  (b) The photon at the Wien wavelength peak has energy about 4.97kT, above the mean of about 2.7kT, and the photon spectrum has a long high-energy tail. Electron-positron pairs were abundant above about 6 × 10⁹ K (kT ≈ m_ec²) and most had annihilated by about 10⁹ K (first seconds to a few minutes). The 1.2 × 10⁹ K estimate gives the right scale, which is all that is claimed ("about a billion kelvin", "first few minutes").
  (c) Planck 2018 (TT,TE,EE+lowE+lensing): Ω_bh² = 0.0224, η = n_b/n_γ ≈ 6.1 × 10⁻¹⁰, so about 1.6 × 10⁹ photons per baryon. The narration's "about one extra particle for every billion pairs" is an order-of-magnitude statement of the same asymmetry. The cause (baryogenesis) is unknown; the narration says "for reasons physicists are still investigating".
  (d) Neutrinos decoupled at about 1 s; they are omitted for load. The "particle tally" shows no neutrino counter.
  (e) The neutron-to-proton ratio froze at about 1:6 near 1 s; neutron decay before deuterium survived brought it to about 1:7. Free neutron mean life 878 s, half-life 609 s (10.2 min). The 1:7 value gives Y ≈ 0.25; the precise prediction for Planck's baryon density is Y_p ≈ 0.247.
  (f) Recombination: Planck 2018 gives z* ≈ 1090 at about 3.8 × 10⁵ years; T = 2.7255 × 1091 ≈ 2970 K. First stars: models and JWST observations point to roughly 100 to 400 million years; the site's ~200 million is kept as "a few hundred million years".
  (g) Pronunciations: "helium four", "helium three", "lambda", "Wien" as "veen", "deuterium" as "dew-teer-ee-um", "muon" as "mew-on".
- **Open decisions for root:**
  - **1. Wien-estimate framing (science check).** The worked example uses the Wien peak as a scale estimate for when pairs stopped forming (author note b). Keep with the "estimate" tag, or replace with a qualitative statement only.
  - **2. Matter excess sentence (learning review).** "About one extra particle for every billion pairs" is order of magnitude (author note c). Keep, or say only "a tiny excess".
  - **3. Neutron scarcity scene (learning review).** Scene 7 is needed for the 25% count in scene 9. If a cut is needed, scene 9 can state "about one neutron for every seven protons" as a given.
  - **4. Site notes 1 to 3** for the site log.

Main question: *The young Universe was mostly light. Everything you touch is matter. How did cooling turn one into the other?*
Entry knowledge: E = mc², annihilation and pair production (m7-v16); Wien's law (m7-v09); photons and the eV (m7-v10, v11); atoms and nuclei (Year 11).
Stops after: the sequence from quarks to atoms, the 25% helium count and recombination. No evidence evaluation.
Handoff: v02, the evidence for an expanding hot early Universe.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *E*, *m*, *c*, *λ*, *T*, *b*.

### 1. hook (more pairs or fewer?)
> Last time, we ran annihilation backwards: two energetic photons made an electron and a positron. The early Universe was full of photons like that, and then it cooled. You're made of matter, but the young Universe was mostly light. As it cooled, would photons make more of these pairs, or fewer? Make your **prediction**. Fewer, and that's the key. So how did cooling radiation allow matter to form in the early **Universe**?

Visual: opens on m7-v16's final frame (see "Opening frame"); the three small system boxes fade; the pair-production event stays at the centre and the photon field and temperature bar stay. On "two energetic photons made an electron and a positron" the event replays once. On "You're made of matter" three small tags on the edge of the field: "p", "n", "e⁻". On "prediction" a 3 s `Countdown` beside chips "more pairs", "fewer pairs", "no change". On "Fewer" the "fewer pairs" chip ticks; the temperature bar drops a step and two converging photons, now redder and longer, fail to make a pair (they pass through each other, tag "not enough energy"). On "Universe" the chip becomes the heading: "How did cooling radiation allow matter to form in the early Universe?".

### 2. hot, dense and stretching
> About thirteen point eight billion years ago, the Universe was extremely hot and dense, and it's been expanding ever since. That's the Big Bang model. It isn't an explosion into empty space. Space itself is stretching, everywhere at once, so there's no **centre**. As space stretches, so does every light wave travelling through it. A longer wavelength means less energy per photon, because E equals h c over **lambda**. And by Wien's law, the peak wavelength is b over T. So double the size of the Universe, and the temperature **halves**.

Visual: board change: the photon field becomes a coded square grid of ink dots (the `m8-expansion` family) with amber wave packets between them; tag "13.8 billion years ago: extremely hot and dense". On "expanding ever since" the grid spacing grows uniformly, all dots moving apart. On "isn't an explosion into empty space" a small inset of an explosion (dots flying from one point into a blank box) appears and is crossed. On "centre" three dots in turn highlight, each with arrows to its neighbours showing the same pattern, and a dashed "centre?" ring fades in and is crossed. On "so does every light wave travelling through it" one wave packet stretches with the grid, its wavelength doubling as the spacing doubles. On "lambda" chip "E = hf = hc/λ: longer λ, less energy". On "Wien's law" chip "λ_max = b/T (m7-v09)". On "halves" a two-column readout: "size × 2 → λ × 2 → T ÷ 2"; the temperature bar at the right halves.

### 3. the threshold rule
> Here's the rule that turns light into matter. Two photons can make a particle and its antiparticle, but only if each photon brings at least the particle's rest energy, m c **squared**. When the Universe was very hot, most photons had far more than that, so pairs formed and annihilated all the time, in **balance**. As it cooled, typical photons fell below the threshold. Pairs stopped forming, while annihilation carried on. Cooling switches off the **making**.

Visual: board change: the pair event at the left with a threshold gauge beside each incoming photon: an amber energy bar against a dashed line "mc² (rest energy)". On "squared" chip "each photon: E ≥ mc²"; tag "antiparticle: same mass, opposite charge". On "far more than that" the bars sit well above the line. On "balance" a loop plays: pairs form and annihilate at equal rates, a small two-way arrow "making ⇄ annihilating", counters steady. On "typical photons fell below the threshold" the temperature bar drops and the bars sink below the dashed line. On "Pairs stopped forming, while annihilation carried on" the "making" arrow fades; pairs that meet still vanish into photons. On "making" tag "cooling stops pair making; annihilation needs no threshold".

### 4. how hot for electron pairs?
> So how hot for electrons? The electron's rest energy, m c squared, is eight point two times ten to the minus fourteen **joules**. A photon with that energy has a wavelength of h c over E, two point four times ten to the minus twelve **metres**. Now use Wien's law backwards. T equals b over lambda, which gives about one point two times ten to the nine **kelvin**. It's an estimate, but it gives the scale, about a billion kelvin, which the Universe cooled through in its first few **minutes**.

Visual: board change to the working layout. Task strip: "Estimate the temperature at which peak photons can just make electron pairs." Equation strip: "E = mc²; E = hc/λ; λ_max = b/T". Givens grouped: "m_e = 9.109 × 10⁻³¹ kg"; "h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, b = 2.898 × 10⁻³ m K" (data sheet). On "joules" `AlignedAlgebra` stage 1 "E = (9.109 × 10⁻³¹)(3.00 × 10⁸)² = 8.2 × 10⁻¹⁴ J (0.51 MeV)". On "metres" stage 2 "λ = hc/E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / 8.2 × 10⁻¹⁴ = 2.4 × 10⁻¹² m" (stage 1 result kept small above). On "kelvin" stage 3 "T = 2.898 × 10⁻³ / 2.4 × 10⁻¹² ≈ 1.2 × 10⁹ K" (boxed), tag "estimate of the scale". On "minutes" the temperature bar gains a tick "~10⁹ K: electron pairs stop" and a small clock tag "first few minutes".

### 5. heavier particles first
> Heavier particles need hotter photons. A proton's rest energy is about eighteen hundred times an electron's, so the same estimate gives about two times ten to the twelve kelvin. Before that, the Universe was a soup of **quarks**, the smaller particles inside protons and neutrons. By about a millionth of a second, quarks could stay bound in threes, as protons and **neutrons**.

Visual: the working layout clears to one line kept small: "electrons: ~10⁹ K". On "about eighteen hundred times an electron's" two threshold lines on one gauge, "m_ec²" low and "m_pc² (× 1836)" far higher, tag "940 MeV (data-sheet masses)". On "two times ten to the twelve kelvin" the temperature bar gains a higher tick "~2 × 10¹² K: proton pairs stop". On "quarks" the field shows a dense scatter of teal dots "u", "d" with amber packets. On "a millionth of a second" a clock tag "~10⁻⁶ s". On "neutrons" teal dots group in threes inside rose discs "p (uud)" and grey discs "n (udd)".

### 6. matter wins by a whisker
> If matter and antimatter came in equal pairs, why didn't they annihilate completely? They almost did. For reasons physicists are still investigating, there was a tiny excess of matter, about one extra particle per billion pairs. That excess survived, outnumbered by photons more than a billion to **one**. Electrons and positrons did the same a few seconds later, leaving the electrons we're made **of**.

Visual: the field shows many proton and hollow antiproton discs. On "why didn't they annihilate completely" pairs meet and vanish into amber packets, the discs thinning out fast. On "a tiny excess of matter" a tally "matter : antimatter = 1 000 000 001 : 1 000 000 000" (illustrative, tag "about 1 extra per billion"). On "one" the last antiproton vanishes; a few rose and grey discs remain among a crowd of packets, tally "photons per proton or neutron: more than 10⁹". On "of" navy electron dots and hollow positron rings meet and vanish, leaving a few navy dots; tag "electrons left over".

### 7. why so few neutrons
> So now there were protons, neutrons, electrons and a sea of photons, but not equal numbers of protons and neutrons. A neutron has slightly more mass, so as things cooled, conversions between the two favoured protons. And a free neutron decays into a proton, with a half-life of about ten **minutes**. By the time anything could fuse, there was roughly one neutron for every seven **protons**.

Visual: the particle tally at the right (photons, protons, neutrons, electrons). On "slightly more mass" two mass bars, "n" a whisker taller than "p", tag "neutron: about 0.14% more mass". On "conversions between the two favoured protons" two-way arrows "n ⇄ p" with the "→ p" arrow thickening. On "minutes" one grey disc turns rose with a small navy dot leaving, tag "free neutron → proton + electron (+ antineutrino); half-life ≈ 10 min". On "protons" the tally reads "n : p ≈ 1 : 7".

### 8. the wait for nuclei
> Fusion starts with deuterium, one proton stuck to one neutron. But deuterium is fragile, and there were more than a billion photons for every proton or **neutron**. The rare, extra energetic ones smashed each deuterium nucleus as soon as it formed. Only at about a billion kelvin, about three minutes in, could deuterium **survive**. Then it fused quickly into **helium**.

Visual: board change to the nucleus builder. On "one proton stuck to one neutron" a rose and a grey disc snap together, label "²H (deuterium)". On "neutron" the field fills with amber packets around it, tally "> 10⁹ photons per p or n". On "smashed each deuterium nucleus" an energetic packet strikes and the pair splits, tag "binding: 2.2 MeV". On "survive" the temperature bar reaches the "~10⁹ K" tick and a clock tag "~3 min"; the next ²H holds. On "helium" ²H nuclei combine through a short arrow into "⁴He" (two rose, two grey), tag "nucleosynthesis: making nuclei".

### 9. a quarter helium
> Take sixteen particles, two neutrons and fourteen **protons**. The two neutrons pair up with two protons to make one helium four nucleus, leaving twelve protons as hydrogen **nuclei**. So helium has four of the sixteen units of mass. That's twenty-five per cent helium by mass, seventy-five per cent hydrogen, and tiny traces of a few others. After about twenty minutes, it was too cool and too spread out for more fusion, and that mix was **locked in**.

Visual: board change: sixteen discs in a row, 2 grey and 14 rose, tag "n : p = 1 : 7 → 2 : 14". On "nuclei" two grey and two rose discs slide together into one "⁴He"; the other twelve rose discs are labelled "¹H" each. On "four of the sixteen units of mass" a mass pie fills "⁴He: 4/16" and "¹H: 12/16". On "twenty-five per cent helium by mass" the pie labels change to "25% helium" and "75% hydrogen" (boxed). On "tiny traces" small chips "²H, ³He, ⁷Li (traces)". On "locked in" a clock tag "~20 min: fusion ends (too cool, too thin)"; tag "v02 tests this number".

### 10. nuclei, not atoms
> Nuclei, but not atoms. Any electron that settled onto a nucleus was knocked straight off by a **photon**. Hydrogen holds its electron with only thirteen point six electron volts, about a hundred thousand times less than what holds even deuterium **together**. And free electrons scatter light, so photons bounced from electron to electron. The Universe was a glowing fog, for hundreds of thousands of **years**.

Visual: board change: a field of rose ¹H and ⁴He nuclei with navy free electrons between them and amber packets. On "Nuclei, but not atoms" chips "nuclei ✓", "atoms ✗". On "photon" an electron settles near a ¹H nucleus and a packet knocks it free. On "thirteen point six electron volts" two energy bars, "hold an electron: 13.6 eV" tiny beside "hold ²H together: 2.2 MeV", tag "× about 160 000". On "together" chip "plasma: hot gas of nuclei and free electrons". On "free electrons scatter light" one packet's path zig-zags from electron to electron. On "years" the field softens to a warm haze, tag "opaque: light can't travel far".

### 11. atoms, and the fog clears
> By about three hundred and eighty thousand years, the temperature had dropped to about three thousand kelvin, and photons were too weak to keep breaking atoms apart. Electrons joined nuclei and stayed, forming neutral hydrogen and helium **atoms**. This is called recombination. With the free electrons gone, light stopped scattering and travelled straight across space. The Universe became **transparent**.

Visual: the temperature bar reaches a low tick "~3000 K", clock tag "~380 000 years". On "too weak to keep breaking atoms apart" a packet strikes a bound electron and bounces off without freeing it. On "atoms" each navy electron settles onto a nucleus, labels "H atom", "He atom". On "recombination" chip "recombination: electrons join nuclei → neutral atoms". On "light stopped scattering" the zig-zag path straightens into a long straight line. On "transparent" the haze clears; the packets travel in straight lines to the frame edge, tag "transparent: light travels freely".

### 12. the sequence, and a way to remember
> So here's the sequence. Quarks become protons and neutrons, pairs annihilate, then come nuclei at a few minutes, and atoms at three hundred and eighty thousand **years**. Here's a way to remember it. As the light cools, first it's too cool to make pairs, then too cool to break nuclei, then too cool to break **atoms**.

Visual: board change to the cosmic timeline: a log time axis from 10⁻⁶ s to 10⁹ years with the temperature bar falling alongside. On "Quarks become protons and neutrons" marker "~10⁻⁶ s, ~10¹² K: p and n". On "pairs annihilate" marker "seconds, ~10¹⁰ to 10⁹ K: e⁺e⁻ annihilate". On "nuclei at a few minutes" marker "3 to 20 min, ~10⁹ K: H and He nuclei". On "years" marker "~380 000 yr, ~3000 K: neutral atoms", then a last marker without narration "~200 million yr: first stars", with the painted galaxy `phys-y11-galaxy-v1.png` small above it (scaled uniformly). On "too cool to make pairs" the first two markers dim; on "too cool to break nuclei" a ⁴He holds; on "atoms" an H atom holds and the handwritten line writes large: "Too cool to make pairs, then too cool to break nuclei, then too cool to break atoms." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A muon has a mass of one point eight eight times ten to the minus twenty-eight kilograms. Using Wien's law, estimate the temperature of the early Universe when photons at the peak wavelength each had one muon's rest energy. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A muon has a mass of 1.88 × 10⁻²⁸ kg. Muon-antimuon pairs can be produced by two photons, each with energy equal to the rest energy of one muon. Using Wien's law, estimate the temperature of the early Universe when photons at the peak wavelength had this energy. (3 marks)" Data chip "h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, b = 2.898 × 10⁻³ m K". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The rest energy is m c squared, one point six nine times ten to the minus eleven **joules**. The wavelength is h c over E, one point one eight times ten to the minus fourteen metres. Then T is b over lambda, about two point five times ten to the eleven **kelvin**. The slip is multiplying b by lambda instead of **dividing**.

Visual: card shrinks to the top; "1.88 × 10⁻²⁸ kg" and "Wien's law" underline. On "joules" "E = mc² = (1.88 × 10⁻²⁸)(3.00 × 10⁸)² = 1.69 × 10⁻¹¹ J". On "The wavelength is h c over E" "λ = hc/E = 1.18 × 10⁻¹⁴ m". On "kelvin" "T = b/λ = 2.898 × 10⁻³ / 1.18 × 10⁻¹⁴ ≈ 2.5 × 10¹¹ K" (boxed). On "dividing" a chip "T = bλ = 3.4 × 10⁻¹⁷ K" fades in and is crossed (caption "λ_max = b/T, so T = b/λ"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Helium nuclei formed a few minutes after the Big Bang, but neutral atoms didn't form until about three hundred and eighty thousand years later. Explain why. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Helium nuclei formed within a few minutes of the Big Bang, but neutral atoms did not form until about 380 000 years later. Explain the difference in these times. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Each forms once photons are too weak to break it apart. Nuclei are held together by millions of electron volts, so they survived from about a billion **kelvin**. Atoms hold electrons by only a few electron volts, so they waited until about three thousand **kelvin**. The slip is thinking nuclei and atoms formed at the same **time**.

Visual: card shrinks to the top; "a few minutes" and "380 000 years" underline. On "kelvin" (first) "nuclei: binding ~MeV → survive below ~10⁹ K (minutes)". On "kelvin" (second) "atoms: binding ~eV (13.6 eV for H) → survive below ~3000 K (380 000 years)"; tag "cooling takes time: expansion". On "time" a chip "nuclei and atoms formed together" fades in and is crossed (caption "MeV bonds survive much hotter than eV bonds"). Hold about 1 second.

### 17. handoff
> Light made matter, then stopped breaking it apart. And the light released at recombination never stopped travelling, stretched by expanding space ever since. If this story is right, that light should still fill the sky today, and the galaxies should still be moving apart. So what evidence supports an expanding hot early **Universe**?

Visual: board clears (camera change) to the expanding grid from scene 2, now with neutral atoms (small ink circles) between the dots. On "Light made matter, then stopped breaking it apart" the timeline's five markers flash in order along the top, small. On "never stopped travelling" one amber packet crosses the frame in a straight line. On "stretched by expanding space ever since" its wavelength lengthens as the grid expands, the packet turning from amber to a long, faint red-brown wave, tag "light from recombination, stretched". On "still fill the sky today" the stretched waves arrive from every edge at a small central dot labelled "us", tag "still here?". On "moving apart" two grid dots, each carrying the small painted galaxy `phys-y11-galaxy-v1.png`, drift apart with arrows, tag "still receding?". On "Universe" the chip "Next: what evidence supports an expanding hot early Universe?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Big Bang model: about 13.8 billion years ago the Universe was extremely hot and dense; space has expanded ever since (no centre). Expansion stretches wavelengths, so photon energy and temperature fall.
2. Two photons can make a particle-antiparticle pair only if each has E ≥ mc². Cooling stops pair making; annihilation continues. A tiny excess of matter survived (more than 10⁹ photons per proton or neutron).
3. ~10⁻⁶ s: quarks → protons and neutrons. Seconds: e⁺e⁻ annihilate. Neutrons scarce (heavier; decay, half-life ≈ 10 min): about 1 n per 7 p.
4. 3 to 20 min (~10⁹ K): deuterium survives, then helium forms: 2 n + 14 p → 1 ⁴He + 12 ¹H, so 25% He, 75% H by mass (traces of ²H, ³He, ⁷Li).
5. Nuclei first (MeV bonds), atoms much later (eV bonds). ~380 000 years, ~3000 K: recombination, electrons join nuclei, the Universe becomes transparent.

Memory aid (large, on the notes screen): *Too cool to make pairs, then too cool to break nuclei, then too cool to break atoms.*

## Teaching checks

- **Does it explain causes?** Why the Universe cooled: stretched wavelengths carry less energy (2). Why matter appeared and stayed: pairs need E ≥ mc², cooling stops making, a small excess survives annihilation (3 to 6). Why only a quarter helium: neutrons were scarce (7, 9). Why nuclei waited three minutes: photons broke deuterium (8). Why atoms waited 380 000 years: eV bonds are about 10⁵ times weaker than MeV bonds (10, 11).
- **Misconceptions addressed:** the Big Bang as an explosion from a centre (2); matter appeared from nothing (3); nuclei and atoms formed together (10, 16 crossed); T = bλ (14 crossed); the Universe was transparent from the start (10).
- **One idea at a time:** expansion and cooling (2), threshold (3), estimate (4), heavier particles (5), excess (6), neutrons (7), deuterium (8), helium count (9), plasma (10), recombination (11), sequence and memory aid (12).
- **Video makes it easier:** the stretching wave on the expanding grid (2); the threshold bars sinking below the dashed line (3); annihilation thinning the field (6); the sixteen-disc regrouping and mass pie (9); the zig-zag path straightening (10, 11); the timeline with the temperature bar (12).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s each.
- **Avoided double teaching:** E = mc², annihilation and pair production (m7-v16), Wien's law (m7-v09), E = hf and eV (m7-v10, v11), half-life (Year 11) recalled in a clause.
- **Syllabus coverage:** `P8-IQ1-01`: the processes from radiation to matter: pair production and annihilation as cooling crossed thresholds, quarks to nucleons, the matter excess, Big Bang nucleosynthesis, recombination (2 to 12, 13 to 16).
- **Out of scope by design:** the evidence (v02); Planck time, inflation and the separation of forces (site extension); T ∝ 1/a calculations; neutrinos (author note d); the cause of the matter excess.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A muon has a mass of 1.88 × 10⁻²⁸ kg. Muon-antimuon pairs can be produced by two photons, each with energy equal to the rest energy of one muon. Using Wien's law, estimate the temperature of the early Universe when photons at the peak wavelength had this energy."
Model answer: E = mc² = 1.88 × 10⁻²⁸ × (3.00 × 10⁸)² = 1.69 × 10⁻¹¹ J. λ = hc/E = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) / 1.69 × 10⁻¹¹ = 1.18 × 10⁻¹⁴ m. T = b/λ = 2.898 × 10⁻³ / 1.18 × 10⁻¹⁴ = 2.5 × 10¹¹ K. Classic mistake (crossed): T = bλ = 3.4 × 10⁻¹⁷ K.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Helium nuclei formed within a few minutes of the Big Bang, but neutral atoms did not form until about 380 000 years later. Explain the difference in these times."
Model answer: A nucleus or an atom can only survive once photons are no longer energetic enough to break it apart, and the Universe's temperature fell steadily as it expanded. Nuclei are bound by energies of the order of MeV (deuterium 2.2 MeV), so they survived once the temperature fell to about 10⁹ K, a few minutes after the Big Bang. An electron is bound to a nucleus by only a few eV (13.6 eV for hydrogen), so photons kept ionising atoms until the Universe had cooled to about 3000 K, which took about 380 000 years. Classic mistake (crossed): "nuclei and atoms formed at the same time".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; b = 2.898 × 10⁻³ m K; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; 1 eV = 1.602 × 10⁻¹⁹ J | 2 to 5, 13, 14 |
| Age (site) | 13.8 billion years | 2 |
| Electron estimate | m_ec² = 8.198 × 10⁻¹⁴ J (0.512 MeV); λ = 2.425 × 10⁻¹² m; T = 1.195 × 10⁹ K | 4 |
| Proton | m_pc² = 1.506 × 10⁻¹⁰ J = 940 MeV (data-sheet values; 938.3 MeV exact); m_p/m_e = 1837; λ = 1.320 × 10⁻¹⁵ m; T = 2.2 × 10¹² K | 5 |
| Quarks to nucleons (site) | ~10⁻⁶ s | 5, 12 |
| Matter excess | η = 6.1 × 10⁻¹⁰ (Planck 2018) → 1.6 × 10⁹ photons per baryon | 6, 8 |
| Neutrons | m_n − m_p = 1.293 MeV (CODATA; 0.14% of m_p); free-neutron half-life 609 s ≈ 10 min; n : p ≈ 1 : 7 | 7 |
| Deuterium | binding 2.224 MeV; Wien-peak photon at 10⁹ K: 6.86 × 10⁻¹⁴ J = 0.43 MeV; ~3 min | 8 |
| Helium count | 2n + 14p → ⁴He + 12 ¹H; 4/16 = 25%; Y = 2(1/7)/(1 + 1/7) = 0.25; ends ~20 min | 9 |
| Binding comparison | 13.6 eV against 2.224 MeV: ratio 1.6 × 10⁵ | 10 |
| Recombination (site; Planck) | ~380 000 years; ~3000 K (2.7255 × 1091 = 2970 K); Wien-peak photon at 3000 K: 1.28 eV | 11, 12 |
| First stars (site) | ~200 million years | 12 |
| A1 (muon) | E = 1.692 × 10⁻¹¹ J; λ = 1.175 × 10⁻¹⁴ m; T = 2.47 × 10¹¹ K; slip bλ = 3.4 × 10⁻¹⁷ K | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 9.109e-31 × (3.00e8)² = 8.198e-14 J; / 1.602e-13 = 0.512 MeV; 6.626e-34 × 3.00e8 / 8.198e-14 = 2.425e-12 m; 2.898e-3 / 2.425e-12 = 1.195e9 K.
- 1.673e-27 × 9.0e16 = 1.506e-10 J = 940 MeV; 1.673e-27 / 9.109e-31 = 1837; 1.988e-25 / 1.506e-10 = 1.320e-15 m; 2.898e-3 / 1.320e-15 = 2.20e12 K.
- 1 / 6.1e-10 = 1.64e9.
- Wien-peak photon energy hcT/b: at 1e9 K, 6.86e-14 J = 0.428 MeV; at 3000 K, 2.06e-19 J = 1.28 eV.
- 2 × (1/7) / (8/7) = 0.250; 2.224e6 / 13.6 = 1.64e5.
- 1.88e-28 × 9.0e16 = 1.692e-11 J; 1.9878e-25 / 1.692e-11 = 1.175e-14 m; 2.898e-3 / 1.175e-14 = 2.47e11 K; 2.898e-3 × 1.175e-14 = 3.4e-17.

## Memory aid check

- **"Too cool to make pairs, then too cool to break nuclei, then too cool to break atoms."** Meaning, as said in scene 12: as the photon temperature falls, three thresholds are crossed in order: the pair-making threshold (mc², MeV and above), then the nuclear binding threshold (MeV, about 10⁹ K, because photons vastly outnumber nucleons), then the atomic binding threshold (eV, about 3000 K). Assumptions checked: "too cool" refers to the photons' typical energies including the effect of the photon-to-baryon ratio (thresholds are crossed at temperatures below the naive binding energy; scenes 8 and 11 say "even the rare, extra energetic photons"); the order matches the timeline (pairs at seconds, nuclei at minutes, atoms at 380 000 years); quarks binding into nucleons is a fourth, earlier step not covered by the aid (it happens before the electron pairs end, so the aid's order still holds for what it names). It helps a new case: A2 (nuclei before atoms) and A1 (heavier pairs stop at hotter temperatures). Introduced after the explanation (3 to 11).
- **Considered, not used:** the balloon analogy (author note a); "the Universe as a cooling oven" (suggests an outside and walls).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,434 characters**, 18 scenes. Characters per scene (1 to 18): 416, 528, 450, 478, 370, 396, 384, 360, 442, 399, 399, 311, 256, 313, 188, 321, 331, 75. At 13.3 characters per second the speech is about 484 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 568 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 6's second sentence pair (the cause clause); scene 5's quark definition (keep the timing); scene 2's Big Bang model sentence.

## Opening frame

m7-v16's final frame (`phys-y12-m7-v16.md`, "Final frame"): paper background; heading "How does mass-energy accounting explain fusion, annihilation and combustion?"; across the top three small dashed system boxes (the Sun, an electron-positron pair, the fuel can), each with "Δm = E/c²"; at the centre a pair-production event: two amber "γ" packets tagged "≥ 0.51 MeV each" converging, with a navy "e⁻" and a rose "e⁺" emerging, tag "pair production"; behind it a coded field of amber photon packets tagged "hot early Universe"; at the right a vertical temperature bar, falling; chip "Next: how did cooling radiation allow matter to form in the early Universe?". Scene 1 fades the three system boxes, keeps the event, field and temperature bar, redraws the positron as a hollow rose ring (this module's antiparticle convention) and turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How did cooling radiation allow matter to form in the early Universe?"; a coded expanding square grid of ink dots filling the frame, with small ink circles (neutral atoms) between the dots; along the top a small row of five timeline markers ("10⁻⁶ s", "seconds", "3 to 20 min", "380 000 yr", "first stars"); long, faint red-brown stretched waves arriving from every frame edge at a small central dot labelled "us", tag "light from recombination, stretched" and "still here?"; at the lower left two grid dots each carrying the small painted galaxy `phys-y11-galaxy-v1.png` (scaled uniformly), drifting apart with arrows, tag "still receding?"; chip "Next: what evidence supports an expanding hot early Universe?". v02 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v01` (route phys-y12-m8-v01). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v01` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v01` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, expansion-cooling, threshold-rule, worked-electron-scale, heavier-particles, matter-excess, neutron-scarcity, deuterium-wait, helium-count, plasma, recombination, timeline-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v02, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: photon field with cooling, pair event (both directions), threshold gauge, particle tally, nucleus builder, sixteen-particle count, scattering fog, cosmic timeline, `m8-expansion`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change to working; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 clear change; 10 to 11 camera continue; 11 to 12 clear change to the timeline; 12 to 13 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v01-learning-review.md`, `science_check` = `checks/p-y12-m8-v01-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-galaxy-v1.png`: first stars and galaxies (12), the receding galaxies (18). Inspect its alpha and appearance on a contact sheet before build (not inspected in this session).
- **Checked, not used:** `phys-y11-sun-v1.png` (stars are not taught here); `y12p-fuel-can-v1.png` (m7-v16's system box fades in scene 1).

Need: no new plates.

Coded: the photon field, grid, particles (p, n, e⁻, antiparticles, quarks), threshold gauges, tallies, nuclei, mass pie, haze and scattering paths, temperature bar, timeline, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v01 build brief):
1. **Photon field with cooling.** Packets whose drawn wavelength and colour follow the temperature bar (a single parameter drives both).
2. **Threshold gauge.** Energy bars against a dashed rest-energy line, reusable for electrons and protons.
3. **Nucleus builder and sixteen-particle count.** Discs that snap into ²H and ⁴He, and a regroup animation with a mass pie.
4. **Scattering fog.** A photon path that zig-zags between free electrons and straightens when they bind.
5. **Cosmic timeline.** Log time axis with event markers and a linked temperature bar (reused in v02).

## Codex asset brief

No new plates. Before build, place `phys-y11-galaxy-v1.png` on a contact sheet at the two sizes used (scenes 12 and 18) and confirm a clean alpha edge.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: expansion of space with no centre; stretched wavelengths lower photon energy and temperature; the pair threshold (each photon ≥ mc²); the Wien estimate framed as a scale (author note b); quarks to nucleons at about 10⁻⁶ s; the matter excess wording (author note c); neutron mass excess, decay and half-life; n : p ≈ 1 : 7 (author note e); deuterium binding and survival at about 10⁹ K and 3 minutes; 25% helium by mass; nucleosynthesis ending at about 20 minutes; plasma opacity from free electrons; recombination at about 380 000 years and 3000 K; first stars (author note f).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: From Light to Matter: How the Early Universe Made Particles, Nuclei and Atoms | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson01.sa.html

The young Universe was mostly light. Follow how it cooled as space expanded: photons stopped making particle pairs, a tiny excess of matter survived, quarks bound into protons and neutrons, helium nuclei formed in the first twenty minutes, and atoms only formed 380 000 years later when the Universe became transparent. See why the early Universe ended up about 25% helium, and estimate the temperatures with Wien's law. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the processes that led to the transformation of radiation into matter that followed the ‘Big Bang’"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: mass-energy equivalence (Module 7). Next: the evidence for an expanding hot early Universe.

#HSCPhysics #Physics #BigBang #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from m7-v16; check that the threshold rule is clear without a formal temperature-energy relation; that the Wien estimate reads as a scale, not a precise date (open decision 1); that the sixteen-particle count is followable at speech pace; that nuclei and atoms stay distinct), then the physics check and the Codex error check.
- The stretching wave, the sinking threshold bars, the sixteen-disc regrouping and the straightening photon path carry the explanation; judge them at playback speed in the voiced preview.
