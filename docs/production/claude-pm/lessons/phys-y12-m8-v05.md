# Year 12 Physics M8 V05: Fusion in main-sequence stars. Why do main-sequence stars release energy by combining light nuclei? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,280 characters, 17 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v04's final frame.

Scope: fifth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "What evidence is there for the origins of the elements?". Templates as `phys-y12-m8-v01.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants and AME2020 atomic masses, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts `work/brief168/module8-lesson06.sa.txt` and `module8-lesson07.sa.txt`, hashes checked against the live files):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson06.sa.html`, SHA256 `cf2a1403e34de2b647bcee7a61bcf57585eba0940b559d61d1e700ab707f9653` (matches the route): orient and predict, ignite a star and hold it in balance (600 million tonnes, 10 million K, pp net equation, 26.7 MeV, hydrostatic equilibrium, mass bands, Figure 1), follow the two mass tracks, trace where the elements came from, predict fate from mass, argue the origin of heavy elements ("Analyse 7 marks", "Compare 6 marks" pp against CNO), independent practice, retrieve and reflect.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson07.sa.html`, SHA256 `dcc81fe381fc57ca14e7eb9fe34d8d11842f0ebbcc4cfcc71ac9e84f059a107d` (matches the route): orient and predict, map the first elements (BBN), read the binding-energy curve (Figure 1, mass defect, 931.5 MeV, 4p → ⁴He check), compare the s- and r-processes, apply mass-defect calculations (HSC tip: Ni-62 note), weigh the evidence ("Analyse 7 marks" binding curve, "Account 6 marks"), independent practice, retrieve and reflect.

Route entry: `phys-y12-m8-v05`, sections `ignite-a-star-and-balance-it` (lesson 6), `map-the-first-elements`, `read-the-binding-energy-curve` (lesson 7). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Trace proton-proton chain and CNO catalyst cycle, conservation and mass-energy release. Stop before post-main-sequence burning details." Next: "phys-y12-m8-v06: How does stellar mass change the elements a star can make?" Entry knowledge asks that each newly introduced equation is derived before use: binding energy and the mass defect are built from E = mc² (m7-v16) in scene 4 before the u-to-MeV conversion is used in scene 8.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists are not named; the underground detector is a coded outline only); nuclei, the binding-energy curve, reaction steps, the CNO ring, force balance and calculation strips are coded, HSC style (nuclear notation with mass number and atomic number); the gas cloud, the Sun and a massive star are painted plates (two reused, one new), scaled uniformly, never stretched; the kit's caution "Iron-group maximum, not an exact Fe-56 maximum" is followed ("peaks near iron"); every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹, 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c², 1 eV = 1.602 × 10⁻¹⁹ J (data sheet) and AME2020 atomic masses (¹H 1.007825 u, ³He 3.016029 u, ⁴He 4.002603 u, given on the question cards); data-sheet symbols E = mc²; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: m7-v16 (E = mc², "energy out, mass down", the Sun's 4.2 × 10⁹ kg s⁻¹ and 0.7%, positron annihilation), v01 (deuterium, Big Bang helium), v04 (the main sequence; mass along the band), Year 11 (nuclear notation, gravitational potential energy, Coulomb repulsion between like charges, pressure).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger ids `P8-IQ1-03`, `P8-IQ1-07`), quoted from the route JSON `syllabusActions` and the ledger:

- `P8-IQ1-03`: "analyse and apply Einstein’s description of the equivalence of energy and mass and relate this to the nuclear reactions that occur in stars (ACSPH031)"
- `P8-IQ1-07`: "investigate the types of nucleosynthesis reactions involved in Main Sequence and Post-Main Sequence stars, including but not limited to:" "proton–proton chain", "CNO (carbon-nitrogen-oxygen) cycle"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v04's final frame (the HR diagram with the main sequence glowing and the Sun's core inset "4 ¹H → ⁴He ?"). Teaches: a star's ignition (gas cloud collapse, gravitational potential energy to thermal energy, about 10⁷ K) and hydrostatic equilibrium as the main-sequence state, with its self-correction; why fusion is hard (Coulomb repulsion; the strong force's short range; hot, dense cores; slow burning); binding energy and the mass defect from E = mc²; the binding-energy-per-nucleon curve (rises steeply, peaks near iron, falls slowly) and why combining light nuclei releases energy; the proton-proton chain, step by step, with conservation of nucleon number and charge; the net reaction; the energy from atomic masses (0.028697 u, 26.7 MeV, 0.7%); the CNO cycle as a catalyst cycle with the same net result; why it needs a hotter core (charge 6) and dominates in more massive stars; the Sun's 1% CNO share, confirmed by solar CNO neutrinos (2020). Stops before helium burning, later stages, the iron limit as an end point and neutron capture (v06), fission (later Module 8 lessons), lepton number (named only), quantum tunnelling (author note b).

## Decisions

- **Learner question (route wording kept).** "Why do main-sequence stars release energy by combining light nuclei?" The answer: nucleons attract through the strong force, so a nucleus has less mass than its parts (binding energy, 4); light nuclei are loosely bound per nucleon, so joining them climbs the binding-energy curve and the lost mass leaves as energy, E = Δmc² (5, 8); a hot, dense core makes the joining possible against repulsion, and gravity keeps the core there (2, 3); stars do it by two routes, the pp chain and the CNO cycle (6 to 11).
- **Hook (v04's handoff; m7-v16 recalled).** 3 s prediction chips: "more mass", "less mass", "the same". Answer: less, by about 0.7%.
- **Ignition and balance (site lesson 6 `ignite-a-star-and-balance-it`).** Collapse converts gravitational potential energy to thermal energy (Year 11 energy); fusion begins near 10⁷ K (site "~10 million K"); hydrostatic equilibrium (outward pressure of hot gas and radiation against gravity; site "Analyse 7 marks" step 1 wording: "Gravity versus fusion is loose: fusion supplies the energy, pressure resists the collapse") as the definition of a main-sequence star; the self-correcting "thermostat".
- **Why fusion is hard (new causal step).** Like charges repel (Year 11); the strong force reaches only about a proton's width, so protons must almost touch; most collisions fail; so fusion needs a hot, dense core and proceeds slowly. Quantum tunnelling is in author note b only.
- **Binding energy (site lesson 7 `read-the-binding-energy-curve`, vocabulary "Mass defect").** Defined from E = mc² (m7-v16): a nucleus has less mass than its separate nucleons; the binding energy is the energy needed to separate them. Helium-4: 28.3 MeV, 7.1 MeV per nucleon. The "ball dropping into a hole" analogy is used once (author note c).
- **Binding-energy curve (site Figure 1; kit limit).** Coded curve, peak "near iron" (Fe-56 8.79 MeV labelled; Ni-62 noted in author note d, as the site's own HSC tip says); hydrogen-1 at zero; "climbing the curve releases energy". The curve's falling side (fission) is drawn but not narrated beyond one tag (fission is later in Module 8).
- **pp chain (syllabus example; site lesson 6 net equation).** Three steps shown as nuclear equations with mass and atomic numbers: ¹H + ¹H → ²H + e⁺ + ν (slow, a proton becomes a neutron); ²H + ¹H → ³He + γ; ³He + ³He → ⁴He + 2 ¹H; steps 1 and 2 twice. Net: 4 ¹H → ⁴He + 2e⁺ + 2ν. The positrons annihilate with electrons (m7-v16 recalled). This is the main (pp I) branch; other branches in author note e.
- **Conservation (route "conservation").** Nucleon number and charge checked on step 1 in narration and on every step on screen; "the neutrino keeps a third quantity balanced, which you'll meet later in this module" (lepton number; Module 8 particle lessons).
- **Energy (route "mass-energy release"; site Stop and Check uses nuclear masses).** Atomic masses: 4 × 1.007825 − 4.002603 = 0.028697 u; × 931.5 = 26.7 MeV (site 26.7 MeV); 0.71% of the mass. Why atomic masses: they include the electrons, so the positron annihilation energy is included (one sentence; author note f compares with the site's 25.7 MeV from nuclear masses, site note 16). The Sun's rate (8.9 × 10³⁷ reactions s⁻¹) is a screen tag only.
- **CNO cycle (syllabus example; site "Compare 6 marks").** Six steps on a coded ring: ¹²C + ¹H → ¹³N + γ; ¹³N → ¹³C + e⁺ + ν; ¹³C + ¹H → ¹⁴N + γ; ¹⁴N + ¹H → ¹⁵O + γ; ¹⁵O → ¹⁵N + e⁺ + ν; ¹⁵N + ¹H → ¹²C + ⁴He. Net the same as the pp chain; carbon is a catalyst (site "regenerated rather than consumed"). The narration walks the ring in one sentence; the screen shows each equation.
- **Why hotter (site "Compare 6 marks" step 3).** The proton-carbon repulsion is about 6 times the proton-proton repulsion (charge 6); the CNO cycle dominates above about 1.3 solar masses (site "p-p chain dominant in stars < 1.3 M☉"), core above about 17 million K (author note g). The Sun's core about 15 million K; CNO about 1% of the Sun's energy, confirmed in 2020 by an underground neutrino detector in Italy (Borexino; named on screen; author note g).
- **Memory aid (scene 12, new): "Four protons in, one helium out, 0.7% lighter. The CNO cycle just borrows carbon."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): the energy released in ³He + ³He → ⁴He + 2 ¹H with atomic masses given: 0.013805 u, 12.9 MeV. Crossed: forgetting the two product protons (Δm = 2 × 3.016029 − 4.002603 = 2.029 u, "1890 MeV"). A2 (3 marks, compare): pp chain against CNO cycle. Crossed: "the CNO cycle uses up carbon".
- **Significant figures.** Masses to six decimal places in u (as given); energies to three figures.
- **Handoff (route next).** Core hydrogen runs out; the core is now helium; more massive stars can climb further up the curve towards iron. "Next: how does stellar mass change the elements a star can make?". See "Final frame".
- **Colour key (as v01 and m7-v16):** protons rose discs, neutrons grey discs, positrons hollow rose rings "e⁺", electrons navy dots, neutrinos small grey "ν" dots, gamma photons amber packets; carbon, nitrogen and oxygen nuclei as larger labelled discs (ink outline, letter inside); gravity arrows navy inwards, pressure arrows amber outwards; the binding curve ink with the climbing arrow amber.
- **Site sources used:** lesson 6: `ignite-a-star-and-balance-it` (600 million tonnes s⁻¹; collapse to ~10 million K; pp net equation; 26.7 MeV; hydrostatic equilibrium; pp below 1.3 M☉, CNO above) (2, 6 to 8, 11); "Analyse 7 marks" step 1 and 2 (gravity against pressure; equilibrium) (2); "Compare 6 marks" (same net reaction; catalyst; higher Coulomb barrier; both in the Sun) (10, 11, 15, 16). Lesson 7: `map-the-first-elements` (Big Bang helium recalled in scene 5's tag); `read-the-binding-energy-curve` (definition; peak; fusion and fission move towards the peak; Δm and 931.5 MeV; 4p → ⁴He) (4, 5, 8); HSC tip (Ni-62 strictly highest) (author note d); "Analyse 7 marks" (define the ratio, shape, one rule) (4, 5). Not used: mass bands and lifetimes beyond 1.3 M☉, post-main-sequence tracks and element origins (v06), s- and r-process (v06), BBN reaction list (v01; site note 2).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing after v04's note 15):**
  16. Mass defect without positrons (lesson 7 Stop and Check, Activity 1 and Q1): "Calculate the energy released when 4 protons fuse to form helium-4. (m_p = 1.007276 u, m_α = 4.001506 u)" with answer "Δm = 0.02760 u, E ≈ 25.7 MeV". With nuclear masses the reaction must include the two positrons (charge conservation: 4 p → α + 2e⁺ + 2ν), so the directly released energy is 25.7 − 1.02 = 24.7 MeV, and 26.7 MeV once the positrons annihilate. Lesson 6 states 26.7 MeV for the same reaction. Suggest using atomic masses (¹H 1.007825 u, ⁴He 4.002603 u, giving 26.7 MeV) or writing the full equation with positrons.
  17. Order of fusion stages (lesson 6 `follow-the-two-mass-tracks`): "Carbon may fuse to oxygen, but low-mass cores never reach carbon ignition temperatures". In helium burning, oxygen forms by carbon capturing a helium nucleus (¹²C + ⁴He → ¹⁶O), not by carbon fusing. Suggest "carbon can capture helium to make oxygen". (Also relevant to v06.)
  18. History (lesson 6 retrieve and reflect): "Hans Bethe's 1939 calculation ... showed that the Sun fuses 600 million tonnes of hydrogen to helium every second via the pp chain". Bethe's 1939 paper described both the pp chain and the CNO cycle and concluded the CNO cycle powers the Sun (later revised); the 600 million tonnes figure follows from the Sun's luminosity, not from his paper. Suggest "showed how fusion could power stars".
  19. Extend task (lesson 7 retrieve and reflect): "in 5 billion years the Sun will have converted roughly 0.07% of its total mass into energy". At 3.83 × 10²⁶ W for 5 × 10⁹ years the mass converted is 6.7 × 10²⁶ kg, 0.034% of 2.0 × 10³⁰ kg. Suggest "about 0.03%" or "over 10 billion years, about 0.07%".
  20. Checked and correct: 26.7 MeV (lesson 6); 600 million tonnes per second; ~10⁷ K ignition; pp dominant below about 1.3 M☉; binding peak ~8.8 MeV; He-4 ~7.1 MeV per nucleon; 931.5 MeV per u.
- **Cause chain taught, in order:** (1) gravity compresses and heats a gas cloud until its core can fuse; pressure then balances gravity, a stable main-sequence star (2); (2) protons repel, and the strong force acts only at touching range, so fusion needs a hot, dense core and is slow (3); (3) nucleons attract, so a nucleus has less mass than its parts: binding energy (4); (4) light nuclei are loosely bound per nucleon, so combining them climbs the curve and releases the mass difference as energy (5); (5) the pp chain does this in steps, conserving nucleon number and charge, and releases 26.7 MeV per helium (6 to 8); (6) the CNO cycle reaches the same result with carbon as a catalyst but needs higher temperatures, so massive stars use it (10, 11).
- **Entry knowledge (route `entryKnowledge`):** v04 (the main sequence); m7-v16 (E = mc², 0.7%, annihilation); v01 (deuterium); Year 11 (nuclear notation, Coulomb repulsion, gravitational potential energy).
- **Learner-visible vocabulary (plain meaning at first use):** hydrostatic equilibrium (pressure pushing out balances gravity pulling in, 2, said as "that balance"); nucleon (a proton or a neutron, 4); strong nuclear force (the attraction between nucleons, acting only over about a proton's width, 3, 4); binding energy (the energy needed to pull a nucleus apart into its nucleons, 4); mass defect (on screen: the mass a nucleus lacks compared with its parts, 4); binding energy per nucleon (5); proton-proton chain (6); neutrino (recalled from m7-v16, 6); catalyst (helps a reaction but is not used up, 10); CNO cycle (10).
- **Legacy logic ported:** none. Explainer family `m8-nucleosynthesis` (src/explainer/physics/module8: "Relate binding energy to broad fusion and fission energy directions") supplies the curve, within its limits ("Iron-group maximum, not an exact Fe-56 maximum"; "No reaction energetics"): this design adds the reaction steps and the energy calculation.
- **New explainer motion:** **collapse and balance** (a gas cloud plate shrinking, a core temperature readout rising to 10⁷ K, then navy gravity arrows and amber pressure arrows reaching equal length; a perturbation loop showing the thermostat); **near miss** (two rose protons approaching, repelling and turning back; one pair touching and joining); **mass defect bars** (separate nucleons against the bound nucleus, with the gap labelled); **binding curve climb** (the curve with an amber arrow from ¹H to ⁴He); **reaction steps** (nuclear equations building from discs, with A and Z tallies under each side ticking to equality); **CNO ring** (six steps round a circle, the carbon disc returning to the start); **Coulomb comparison** (two repulsion arrows, p-p and p-C, the second six times longer); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the particle or curve view in the centre; equations and A/Z tallies at the right; the core temperature readout small at the top right in scenes 2, 3 and 11; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The Sun's core temperature is about 1.57 × 10⁷ K; fusion of hydrogen becomes significant from about 10⁷ K; the "thermostat" is the negative feedback of core expansion on reaction rate.
  (b) At 1.5 × 10⁷ K the mean proton kinetic energy (about 2 keV) is far below the Coulomb barrier (about 0.5 to 1 MeV); fusion happens through quantum tunnelling for the fastest protons. The pp chain's first step is also slow because it needs a weak interaction (a proton becoming a neutron), with a mean proton waiting time of billions of years. The narration says "most bounce off" and "this step is very slow", both true; tunnelling is not named (not in the syllabus).
  (c) The "ball dropping into a hole" analogy: its limit is that the hole's depth is the binding energy and the energy leaves as photons and kinetic energy of products; the narration says only that the energy leaves.
  (d) Binding energy per nucleon: ⁵⁶Fe 8.790 MeV; ⁶²Ni 8.795 MeV (highest); ⁵⁸Fe 8.792 MeV. The site's HSC tip says the same; the screen labels "peak near iron (iron-56: 8.8 MeV)".
  (e) The pp chain has three main branches: pp I (about 83% in the Sun, shown), pp II (through ⁷Be and ⁷Li) and pp III (through ⁸B). The net reaction and total energy are the same; neutrino energies differ.
  (f) Atomic masses: 4 ¹H atoms = 4p + 4e; ⁴He atom = α + 2e; the reaction gives α + 2e⁺ + 2ν, and the two positrons annihilate with two of the electrons; so 4 ¹H atoms → ⁴He atom + 2ν + energy, and Δm(atomic) × 931.5 = 26.73 MeV is the total energy including annihilation and the neutrinos' share (about 0.5 MeV for pp I). With nuclear masses, 4m_p − m_α = 0.027598 u = 25.71 MeV, which omits the positrons' 1.02 MeV of rest energy (site note 16).
  (g) Borexino (Laboratori Nazionali del Gran Sasso), Nature 2020: first detection of solar CNO neutrinos, CNO about 1% of solar energy. The CNO cycle dominates in main-sequence stars above about 1.3 M☉ (core above about 1.7 × 10⁷ K). The Coulomb barrier scales with Z₁Z₂ (6 for p on ¹²C against 1 for p on p); the "six times as strongly" wording refers to the force at a given separation.
  (h) Step energies (atomic masses, MeV): pp: 1.442 (step 1 including annihilation), 5.494, 12.859; CNO: 1.943, 2.221, 7.551, 7.296, 2.754, 4.966; each set sums to 26.731 MeV with the pp steps 1 and 2 counted twice.
  (i) Pronunciations: "helium three", "helium four"; "nucleon" as "new-clee-on"; "CNO" as "C N O".
- **Open decisions for root:**
  - **1. Atomic or nuclear masses (science check).** The design uses atomic masses throughout (author note f), unlike the site's nuclear-mass Stop and Check (site note 16). Confirm the one-sentence justification in scene 8 is enough for learners.
  - **2. Ignition scene placement (learning review).** Scene 2 (ignition and balance) comes before the fusion mechanism; it could follow scene 8 instead. Kept first because v04 ends on the main sequence.
  - **3. New plate `y12p-molecular-cloud-v1` (Codex).** If not made, scene 2 uses a coded gas cloud.
  - **4. Site notes 16 to 19** for the site log.

Main question: *Four hydrogen nuclei go in, one helium nucleus comes out, and the Sun shines. Why does joining light nuclei give out energy?*
Entry knowledge: the main sequence (v04); E = mc² and 0.7% (m7-v16); nuclear notation and Coulomb repulsion (Year 11).
Stops after: ignition and balance, binding energy and the curve, the pp chain with conservation and energy, the CNO cycle and why massive stars use it. No helium burning or later stages.
Handoff: v06, how stellar mass changes the elements a star can make.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *E*, *Δm*, *c*, *u*, *A*, *Z*.

### 1. hook (heavier, lighter or the same?)
> Most stars sit on the main sequence, turning hydrogen into helium in their cores. Four hydrogen nuclei go in, and one helium nucleus comes out. Does the helium have more mass than the four hydrogens, less, or the same? Make your **prediction**. Less, by about zero point seven per cent, the figure we used for the Sun. So why do main-sequence stars release energy by combining light **nuclei**?

Visual: opens on v04's final frame (see "Opening frame"); the five tags round the diagram fade and the core inset grows to fill the centre while the HR diagram shrinks to a corner thumbnail. On "Four hydrogen nuclei go in" the four "¹H" discs pulse. On "one helium nucleus comes out" the "⁴He" pulses. On "prediction" a 3 s `Countdown` beside chips "more mass", "less mass", "the same". On "Less, by about zero point seven per cent" the "less mass" chip ticks; two mass bars "4 × ¹H" and "⁴He" with a sliver gap "0.7%" (m7-v16's bars). On "nuclei" the chip becomes the heading: "Why do main-sequence stars release energy by combining light nuclei?".

### 2. how a star switches on
> First, how a star switches on. A cloud of gas, mostly hydrogen, collapses under its own gravity. As it falls inwards, gravitational potential energy becomes thermal energy, and the core heats **up**. At about ten million kelvin, the core starts fusing hydrogen, and the star **ignites**. Now the hot core pushes outwards with pressure, balancing gravity pulling inwards. That balance makes a main-sequence **star**. And it corrects itself. If fusion runs too fast, the core expands and cools, and fusion slows **down**.

Visual: board change: the painted gas cloud `y12p-molecular-cloud-v1.png` at the centre (scaled uniformly). On "collapses under its own gravity" navy arrows point inwards and the cloud shrinks into a coded glowing ball. On "up" a core temperature readout at the top right counts up "10⁴ K → 10⁶ K". On "ignites" the readout reaches "≈ 10⁷ K: fusion starts", the core flashes amber. On "pushes outwards with pressure" amber pressure arrows grow outwards until equal in length to the navy gravity arrows, tag "balance: pressure out = gravity in". On "star" the ball becomes the painted Sun `phys-y11-sun-v1.png`, tag "main-sequence star: core hydrogen fusion, balanced". On "down" a loop: the core swells slightly, the readout dips, the amber arrows shorten and the core settles back, tag "self-correcting".

### 3. why fusion is hard
> Fusing protons is hard. They're both positive, so they repel each other. Only at millions of kelvin do they move fast enough to get close, and even then, most bounce off. The force that holds a nucleus together only reaches about the width of a proton, so protons must almost **touch**. That's why fusion needs such a hot, dense core, and why the Sun burns slowly enough to last about ten billion **years**.

Visual: board change: two rose "p" discs approach on a dark field. On "they repel each other" repulsion arrows grow as they near; they turn back. On "most bounce off" several pairs replay, nearly all turning back. On "touch" one pair gets within one proton width, a tiny bracket "≈ 10⁻¹⁵ m", and they join (amber flash). On "hot, dense core" the core temperature readout returns "≈ 1.5 × 10⁷ K (Sun)". On "years" a small bar "Sun's main-sequence life ≈ 10 billion years".

### 4. less than its parts
> So why does energy come out? Protons and neutrons, called nucleons, attract each other through the strong nuclear force. When they come together, they drop into a lower energy state, like a ball dropping into a hole, and that energy leaves. So a nucleus has less mass than its separate parts. The energy you'd need to pull it apart again is its binding **energy**. For helium four, that's twenty-eight point three MeV, about seven MeV for every **nucleon**.

Visual: board change: two rose and two grey discs apart at the left, one ⁴He nucleus at the right. On "attract each other through the strong nuclear force" short attraction springs between neighbouring discs. On "like a ball dropping into a hole" a small inset: a ball rolling into a dip, amber energy leaving. On "less mass than its separate parts" mass bars "2p + 2n (separate)" and "⁴He" with a gap labelled "mass defect Δm". On "energy" (first) chip "binding energy = Δm c²: the energy to pull it apart". On "twenty-eight point three MeV" `AlignedAlgebra` "⁴He: binding energy = 28.3 MeV" (from atomic masses; see "Numbers used"). On "nucleon" "28.3 / 4 ≈ 7.1 MeV per nucleon".

### 5. climbing the curve
> Now plot binding energy per nucleon against mass number. It climbs steeply for light nuclei, peaks near iron, then slowly falls. Climbing the curve means the nucleons end up more tightly bound, so the products have less mass, and energy is **released**. Hydrogen one is a single proton, with no binding energy at all, and helium four is up at seven MeV per nucleon. So joining hydrogen into helium is a big climb, and a big release of **energy**. That's why combining light nuclei gives out energy.

Visual: board change: the `m8-nucleosynthesis` binding curve: x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9. On "climbs steeply for light nuclei" the curve draws from the left; small labels ²H (1.1), ⁴He (7.1, a bump above its neighbours), ¹²C (7.7), ¹⁶O (8.0). On "peaks near iron" the label "peak near iron (⁵⁶Fe: 8.8 MeV)". On "slowly falls" the curve continues to ²³⁸U (7.6), a small grey tag "falling side: fission (later)". On "released" an amber arrow up the curve with the chip "climb the curve: more tightly bound → less mass → energy out (E = Δmc²)". On "with no binding energy at all" a dot at A = 1, value 0. On "energy" (second) a big amber arrow from ¹H (0) to ⁴He (7.1), tag "H → He: a big climb". On "That's why combining light nuclei gives out energy" the heading pulses.

### 6. the proton-proton chain
> In the Sun, the main route is the proton-proton chain. Step one, two protons fuse into deuterium. One proton turns into a neutron, giving out a positron and a neutrino. This step is very slow, and it's the main reason the Sun lasts so **long**. Step two, deuterium fuses with another proton to make helium three, giving out a gamma ray **photon**. Steps one and two happen twice. Step three, two helium three nuclei fuse into helium four, and two protons are set **free**.

Visual: board change to the reaction steps. On "Step one, two protons fuse into deuterium" two rose discs join; one turns grey; equation "¹₁H + ¹₁H → ²₁H + ⁰₊₁e + ν". On "giving out a positron and a neutrino" a hollow rose ring "e⁺" and a grey "ν" leave. On "long" tag "slow step: a proton must turn into a neutron". On "photon" "²₁H + ¹₁H → ³₂He + γ", an amber packet leaving. On "Steps one and two happen twice" the first two steps duplicate in a second column. On "free" "³₂He + ³₂He → ⁴₂He + 2 ¹₁H", two rose discs leaving.

### 7. checking the balance
> Every step balances. Take step one. On the left, two nucleons, and a charge of plus two. On the right, deuterium has two nucleons and a charge of plus one, and the positron carries the other plus **one**. The neutrino keeps a third quantity balanced, which you'll meet later in this module. Add up the whole chain, and four hydrogen nuclei become one helium four, two positrons and two **neutrinos**. The positrons soon annihilate with electrons, adding more gamma **rays**.

Visual: the three equations stay; A and Z tallies appear under each side of step 1. On "two nucleons, and a charge of plus two" the left tallies "A: 1 + 1 = 2", "Z: 1 + 1 = 2". On "one" the right tallies "A: 2 + 0 + 0 = 2", "Z: 1 + 1 + 0 = 2", both ticking green; the tallies then tick silently under steps 2 and 3. On "a third quantity balanced" small tag "lepton number (later in Module 8)". On "neutrinos" the net equation boxed: "4 ¹₁H → ⁴₂He + 2 ⁰₊₁e + 2ν + energy". On "rays" the e⁺ rings meet navy electrons and become amber γ packets (m7-v16 recall).

### 8. how much energy?
> Now the energy. Use atomic masses, which include the electrons, so the annihilation energy is counted too. Four hydrogen atoms have a mass of four point zero three one three u. A helium four atom has four point zero zero two six. The difference is zero point zero two eight seven **u**. One u is worth nine hundred and thirty-one point five MeV, so the energy released is about twenty-six point seven **MeV**. That's zero point seven per cent of the mass, the same figure we used for the **Sun**.

Visual: board change to the working layout. Task strip: "Energy released per helium-4 formed in the pp chain." Equation strip: "Δm = m(reactants) − m(products); E = Δm × 931.5 MeV". Givens grouped: "m(¹H atom) = 1.007825 u; m(⁴He atom) = 4.002603 u"; "1 u = 931.5 MeV/c² (data sheet)". On "include the electrons" tag "atomic masses: 4 H atoms carry 4 electrons; He keeps 2; the other 2 annihilate the positrons". On "u" (first stage) `AlignedAlgebra` "Δm = 4(1.007825) − 4.002603 = 4.031300 − 4.002603 = 0.028697 u". On "MeV" (second stage) "E = 0.028697 × 931.5 ≈ 26.7 MeV" (boxed), tag "= 4.28 × 10⁻¹² J". On "Sun" "0.028697 / 4.0313 = 0.71%", tag "Sun: about 9 × 10³⁷ of these every second".

### 9. a second route
> Stars more massive than the Sun mostly use a second route, the CNO cycle. A carbon twelve nucleus captures a proton, then another, then another, and another, turning into nitrogen and oxygen along the way, with two steps giving out a positron and a **neutrino**. At the last step, the nucleus splits into helium four and carbon twelve, the same carbon it started **with**. Carbon is a catalyst. It helps, but it isn't used up. The net result is the same, four protons into one helium four, and the same twenty-six point seven **MeV**.

Visual: board change to the CNO ring: six stations round a circle, each with its equation. On "A carbon twelve nucleus captures a proton" "¹²₆C + ¹₁H → ¹³₇N + γ". On "then another" "¹³₇N → ¹³₆C + ⁰₊₁e + ν" then "¹³₆C + ¹₁H → ¹⁴₇N + γ"; on "then another, and another" "¹⁴₇N + ¹₁H → ¹⁵₈O + γ", "¹⁵₈O → ¹⁵₇N + ⁰₊₁e + ν". On "neutrino" the two e⁺ and ν steps pulse. On "with" "¹⁵₇N + ¹₁H → ¹²₆C + ⁴₂He", the carbon disc rolling back to the start of the ring and a ⁴He disc leaving. On "Carbon is a catalyst" chip "catalyst: helps, not used up". On "MeV" the net equation from scene 7 appears beside the ring, boxed, with "26.7 MeV (same Δm)".

### 10. why the bigger stars use it
> Why do massive stars use it? Carbon has six protons, so a proton approaching it is repelled about six times as strongly. That needs a hotter core, above about seventeen million kelvin. The Sun's core is about fifteen million kelvin, so the proton-proton chain supplies about ninety-nine per cent of its energy. In twenty twenty, a detector deep under a mountain in Italy caught neutrinos from the Sun's CNO cycle, confirming the last one per **cent**. Massive stars have hotter cores, so for them, the CNO cycle **dominates**.

Visual: the ring shrinks to the left. On "repelled about six times as strongly" the Coulomb comparison: "p → p" repulsion arrow length 1, "p → ¹²C" arrow length 6. On "above about seventeen million kelvin" the core temperature readout "CNO dominant: core > 1.7 × 10⁷ K". On "about fifteen million kelvin" readout "Sun's core ≈ 1.5 × 10⁷ K" and a share bar "pp ≈ 99%, CNO ≈ 1%". On "cent" a coded detector outline (a sphere inside a tank, no people) with grey "ν" dots arriving, tag "Borexino (2020): CNO neutrinos detected". On "dominates" the painted hot-blue star `y12p-star-hot-blue-v1.png` small beside the Sun, share bar "massive star (> 1.3 M☉): CNO dominant"; the HR thumbnail highlights the upper main sequence.

### 11. a way to remember
> Here's a way to remember it. Four protons in, one helium out, zero point seven per cent lighter. And the CNO cycle just borrows **carbon**.

Visual: the pp equations and the ring sit side by side, small. On "Four protons in, one helium out" four rose discs merge to one ⁴He; on "zero point seven per cent lighter" the sliver gap bar; on "carbon" the ring's carbon disc rolls round and back; the handwritten line writes large: "Four protons in, one helium out, 0.7% lighter. The CNO cycle just borrows carbon." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. In the last step of the proton-proton chain, two helium three nuclei fuse to form helium four and two protons. Using the atomic masses given, calculate the energy released, in MeV. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The final step of the proton-proton chain is ³₂He + ³₂He → ⁴₂He + 2 ¹₁H. Atomic masses: ³He 3.016029 u, ⁴He 4.002603 u, ¹H 1.007825 u. Calculate the energy released in this step, in MeV. (3 marks)" Data chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Reactants, two helium threes, six point zero three two zero five eight u. Products, a helium four and two hydrogens, six point zero one eight two five three **u**. The difference is zero point zero one three eight zero five u, about twelve point nine **MeV**. The slip is forgetting the two protons on the right, which gives an impossible **answer**.

Visual: card shrinks to the top; "2 ¹₁H" and the three masses underline. On "u" (second) "reactants: 2 × 3.016029 = 6.032058 u; products: 4.002603 + 2 × 1.007825 = 6.018253 u". On "MeV" "Δm = 0.013805 u; E = 0.013805 × 931.5 ≈ 12.9 MeV" (boxed). On "answer" a chip "Δm = 6.032058 − 4.002603 = 2.029 u → 1890 MeV" fades in and is crossed (caption "count every product"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Compare the proton-proton chain and the CNO cycle as ways of releasing energy in main-sequence stars. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Compare the proton-proton chain and the CNO cycle as processes that release energy in main-sequence stars. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Both turn four protons into one helium four, with the same loss of mass and the same **energy**. The proton-proton chain builds helium directly from protons, while the CNO cycle uses carbon as a catalyst, returned at the **end**. Carbon's bigger charge means the CNO cycle needs hotter cores, so it dominates in massive stars, not the **Sun**. The slip is saying the CNO cycle uses up **carbon**.

Visual: card shrinks to the top; "Compare" underlines. On "energy" a two-column table "pp chain | CNO cycle", row "same: 4 ¹H → ⁴He, 26.7 MeV, Δm = 0.0287 u". On "end" row "pp: directly from protons | CNO: carbon catalyst, returned". On "Sun" row "pp: cooler cores (Sun, ~99%) | CNO: hotter cores (> 1.3 M☉)". On "carbon" (last) a chip "the CNO cycle uses up carbon" fades in and is crossed (caption "catalyst: regenerated"). Hold about 1 second.

### 16. handoff
> So stars shine by climbing the binding energy curve, from hydrogen to helium. But the core's hydrogen doesn't last forever. When it runs out, the core is mostly helium. Can a star keep climbing, towards carbon, oxygen, even iron? That depends on its mass. So how does stellar mass change the elements a star can **make**?

Visual: board clears (camera change) to the binding curve, full width. On "from hydrogen to helium" the amber arrow from ¹H to ⁴He, solid, tag "main sequence". On "the core is mostly helium" a small round core inset beside the curve fills with ⁴He discs, tag "core hydrogen used up". On "towards carbon, oxygen, even iron" dashed grey arrows step up the curve from ⁴He to ¹²C, ¹⁶O and on to the peak "⁵⁶Fe", each with a "?". On "That depends on its mass" the painted Sun `phys-y11-sun-v1.png` (small, lower left) and the painted hot-blue star `y12p-star-hot-blue-v1.png` (larger, lower right) appear, each tagged "how far up?". On "make" the chip "Next: how does stellar mass change the elements a star can make?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A star forms when gravity collapses a gas cloud and heats its core to about 10⁷ K. On the main sequence, outward pressure balances gravity (hydrostatic equilibrium), powered by core hydrogen fusion.
2. Nucleons attract (strong force), so a nucleus has less mass than its parts: binding energy = Δm c². Binding energy per nucleon rises steeply for light nuclei and peaks near iron, so combining light nuclei releases energy.
3. pp chain: ¹H + ¹H → ²H + e⁺ + ν; ²H + ¹H → ³He + γ; ³He + ³He → ⁴He + 2 ¹H. Net: 4 ¹H → ⁴He + 2e⁺ + 2ν. Nucleon number and charge conserved.
4. Δm = 4(1.007825) − 4.002603 = 0.028697 u → 26.7 MeV (0.7% of the mass).
5. CNO cycle: carbon-12 catalyst, same net reaction and energy; needs hotter cores (higher charge), dominant in stars above about 1.3 M☉. The Sun: about 99% pp.

Memory aid (large, on the notes screen): *Four protons in, one helium out, 0.7% lighter. The CNO cycle just borrows carbon.*

## Teaching checks

- **Does it explain causes?** Why a star ignites: gravitational potential energy heats the core (2). Why it stays stable: pressure balances gravity, self-correcting (2). Why fusion needs extreme conditions: repulsion and the short-range strong force (3). Why energy is released: binding makes the product lighter (4, 5). Why the CNO cycle needs hotter cores: carbon's larger charge (10).
- **Misconceptions addressed:** mass is destroyed (4, 8; "energy out, mass down"); "gravity against fusion" as forces (2: pressure against gravity); the CNO cycle consumes carbon (9, 15 crossed); counting only part of the products (13 crossed); the Sun uses only one route (10).
- **One idea at a time:** ignition (2), difficulty (3), binding energy (4), curve (5), pp steps (6), conservation (7), energy (8), CNO (9), why hotter (10).
- **Video makes it easier:** the equal-length gravity and pressure arrows and the self-correcting loop (2); the bouncing protons (3); the mass defect bars (4); the arrow up the curve (5); the A and Z tallies ticking (7); the carbon disc rolling round the ring (9); the 1 to 6 repulsion arrows (10).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 29 s.
- **Avoided double teaching:** E = mc², 0.7% and annihilation (m7-v16), deuterium (v01), the main sequence (v04), nuclear notation and Coulomb repulsion (Year 11) recalled in a clause.
- **Syllabus coverage:** `P8-IQ1-03`: mass-energy equivalence applied to stellar nuclear reactions (4, 5, 8, 12, 13). `P8-IQ1-07` (main-sequence part): the proton-proton chain (6 to 8) and the CNO cycle (9, 10, 14, 15). Post-main-sequence reactions are v06.
- **Out of scope by design:** helium burning and later stages, the iron end point and neutron capture (v06); fission (later Module 8 lessons); pp II and pp III branches (author note e); quantum tunnelling (author note b); lepton number (named only).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The final step of the proton-proton chain is ³₂He + ³₂He → ⁴₂He + 2 ¹₁H. Atomic masses: ³He 3.016029 u, ⁴He 4.002603 u, ¹H 1.007825 u. Calculate the energy released in this step, in MeV. (1 u = 931.5 MeV/c²)"
Model answer: Mass of reactants = 2 × 3.016029 = 6.032058 u. Mass of products = 4.002603 + 2 × 1.007825 = 6.018253 u. Δm = 6.032058 − 6.018253 = 0.013805 u. E = 0.013805 × 931.5 = 12.9 MeV. Classic mistake (crossed): omitting the two protons, Δm = 2.029 u, "1890 MeV".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "Compare the proton-proton chain and the CNO cycle as processes that release energy in main-sequence stars."
Model answer: Similarity: both convert four protons (hydrogen-1 nuclei) into one helium-4 nucleus, two positrons and two neutrinos, and both release about 26.7 MeV per helium nucleus because the products have less mass than the reactants (E = Δmc²). Differences: the pp chain builds helium directly from protons through a series of steps, while the CNO cycle uses carbon-12 as a catalyst that is regenerated at the end of the cycle. Because carbon has a charge of +6, protons must overcome a larger repulsion, so the CNO cycle requires a higher core temperature; it dominates in main-sequence stars more massive than about 1.3 solar masses, while the pp chain supplies about 99% of the Sun's energy. Classic mistake (crossed): "the CNO cycle uses up carbon".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c²; 1 eV = 1.602 × 10⁻¹⁹ J; c = 3.00 × 10⁸ m s⁻¹ | 4, 8, 12, 13 |
| Atomic masses (AME2020) | ¹H 1.007825; ²H 2.014102; ³He 3.016029; ⁴He 4.002603; n 1.008665; ¹²C 12.000000; ¹³N 13.005739; ¹³C 13.003355; ¹⁴N 14.003074; ¹⁵O 15.003066; ¹⁵N 15.000109; ⁵⁶Fe 55.934936 u | 4 to 9, 12, 13 |
| Ignition and cores (site; author notes a, g) | ~10⁷ K ignition; Sun's core 1.5 × 10⁷ K; CNO dominant above ~1.7 × 10⁷ K and ~1.3 M☉; Sun ~10 billion years | 2, 3, 10 |
| Strong-force range | ~10⁻¹⁵ m (about a proton width) | 3 |
| Binding energies | ⁴He: 28.30 MeV, 7.07 MeV per nucleon; ²H 2.224 MeV (1.11 per nucleon); ¹²C 7.68; ¹⁶O 7.98; ⁵⁶Fe 8.790; ²³⁸U 7.57 MeV per nucleon | 4, 5 |
| Net pp | 4 × 1.007825 = 4.031300 u; Δm = 0.028697 u; 26.73 MeV = 4.282 × 10⁻¹² J; 0.712% | 8, 11 |
| Sun rate | 3.83 × 10²⁶ W / 4.282 × 10⁻¹² J = 8.9 × 10³⁷ s⁻¹ | 8 |
| Step energies (author note h) | pp 1.442, 5.494, 12.859 MeV; CNO 1.943, 2.221, 7.551, 7.296, 2.754, 4.966 MeV; sums 26.731 MeV | 6, 9 (screen tags optional) |
| CNO share | ~1% (Borexino 2020); pp ~99% | 10 |
| Coulomb ratio | Z = 6 against Z = 1 | 10 |
| A1 | 6.032058 − 6.018253 = 0.013805 u; 12.86 MeV; slip 2.029455 u → 1890 MeV | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 4 × 1.007825 = 4.031300; − 4.002603 = 0.028697 u; × 931.5 = 26.731 MeV; × 1.602e-13 = 4.282e-12 J; 0.028697 / 4.0313 = 0.712%.
- 3.83e26 / 4.282e-12 = 8.94e37.
- 2 × 1.007825 + 2 × 1.008665 − 4.002603 = 0.030377 u = 28.296 MeV; / 4 = 7.074.
- 1.007825 + 1.008665 − 2.014102 = 0.002388 u = 2.224 MeV.
- 26 × 1.007825 + 30 × 1.008665 − 55.934936 = 0.528464 u; × 931.5 / 56 = 8.790 MeV per nucleon.
- 2 × 3.016029 = 6.032058; 4.002603 + 2.015650 = 6.018253; difference 0.013805 u; × 931.5 = 12.859 MeV; 6.032058 − 4.002603 = 2.029455 u; × 931.5 = 1890 MeV.
- CNO steps: 12.000000 + 1.007825 − 13.005739 = 0.002086 u (1.943 MeV); 13.005739 − 13.003355 = 0.002384 u (2.221); 13.003355 + 1.007825 − 14.003074 = 0.008106 (7.551); 14.003074 + 1.007825 − 15.003066 = 0.007833 (7.296); 15.003066 − 15.000109 = 0.002957 (2.754); 15.000109 + 1.007825 − 12.000000 − 4.002603 = 0.005331 (4.966); sum 0.028697 u.

## Memory aid check

- **"Four protons in, one helium out, 0.7% lighter. The CNO cycle just borrows carbon."** Meaning, as said in scene 11: the net reaction of both routes is 4 ¹H → ⁴He (with 2e⁺ and 2ν), the products have about 0.7% less mass, and that mass leaves as energy; in the CNO cycle carbon-12 takes part but is returned. Assumptions checked: "0.7% lighter" uses atomic masses and counts the energy carried away (including annihilation and neutrinos), 0.71%; "four protons in" refers to the net reaction, not a four-body collision (scene 6 shows the steps); "borrows" means a catalyst that is regenerated, not created or destroyed overall (nitrogen-14 builds up as a temporary reservoir in real stars; author note not needed for learners). It helps a new case: A2 (compare: same net, catalyst) and any "energy per helium" question. Introduced after the explanation (6 to 10).
- **Considered, not used:** "Fusion: little nuclei climb the hill to iron" (the curve is a climb in binding energy but a fall in energy, which invites confusion).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,280 characters**, 17 scenes. Characters per scene (1 to 17): 386, 503, 399, 449, 490, 460, 462, 484, 522, 518, 135, 213, 338, 133, 380, 317, 75. At 13.3 characters per second the speech is about 472 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 556 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 10's detector sentence (keep the share bar); scene 4's analogy clause; scene 3's last clause.

## Opening frame

v04's final frame (`phys-y12-m8-v04.md`, "Final frame"): paper background; heading "How does the HR diagram distinguish brightness, temperature and stellar stage?"; the full coded HR diagram with the main-sequence band glowing pale amber and the other regions dimmed; five small tags round the diagram ("temperature", "colour", "luminosity", "size", "stage"); from the Sun's point a small round core inset: four rose "¹H" discs and one "⁴He" nucleus with a dashed arrow and a "?", tag "energy?"; chip "Next: why do main-sequence stars release energy by combining light nuclei?". Scene 1 fades the tags, enlarges the core inset to the centre, shrinks the HR diagram to a corner thumbnail and turns the chip into the heading.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; heading "Why do main-sequence stars release energy by combining light nuclei?"; the coded binding-energy-per-nucleon curve across the frame (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9; labels ¹H, ⁴He, ¹²C, ¹⁶O, "peak near iron (⁵⁶Fe: 8.8 MeV)", ²³⁸U); a solid amber arrow from ¹H to ⁴He tagged "main sequence"; dashed grey arrows stepping from ⁴He to ¹²C, ¹⁶O and on to ⁵⁶Fe, each with a "?"; beside the curve a small round core inset filled with ⁴He discs, tag "core hydrogen used up"; at the lower left the painted Sun `phys-y11-sun-v1.png` (small) and at the lower right the painted hot-blue star `y12p-star-hot-blue-v1.png` (larger), both scaled uniformly, each tagged "how far up?"; chip "Next: how does stellar mass change the elements a star can make?". v06 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v05` (route phys-y12-m8-v05). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v05` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v05` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, ignition-balance, fusion-hard, binding-energy, binding-curve, pp-chain, conservation, worked-energy, cno-cycle, cno-temperature, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v06, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: collapse and balance, near miss, mass defect bars, binding curve climb, reaction steps with A/Z tallies, CNO ring, Coulomb comparison, `m8-nucleosynthesis`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change; 4 to 5 clear change to the curve; 5 to 6 clear change to the steps; 6 to 7 camera continue; 7 to 8 clear change to working; 8 to 9 clear change to the ring; 9 to 10 camera continue; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v05-learning-review.md`, `science_check` = `checks/p-y12-m8-v05-physics-check.md`.

## Assets

Have or requested earlier (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 2, 10, 16.
- `y12p-star-hot-blue-v1.png` (requested by m7-v04): 10, 16.

Need (new plate):
1. `y12p-molecular-cloud-v1.png`: 2.

Coded: nuclei, particles, photons, gravity and pressure arrows, core temperature readout, mass bars, binding curve, equations with A/Z tallies, CNO ring, Coulomb arrows, detector outline, share bars, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v05 build brief):
1. **Reaction steps with tallies.** Nuclear equations built from discs, with mass-number and atomic-number tallies that tick when balanced (reused in v06).
2. **CNO ring.** Six stations on a circle, a carbon disc travelling round and returning.
3. **Collapse and balance.** Arrow pairs that reach equal length, with a perturbation loop.
4. **Binding curve with labelled nuclides.** The `m8-nucleosynthesis` curve with tick labels and a climbing arrow (reused in v06).

## Codex asset brief

1. **`y12p-molecular-cloud-v1.png`** (new). A painted cold interstellar gas and dust cloud (a dark molecular cloud): billowing dark brown and deep red-grey dust lanes with a few faint embedded glowing knots where stars are forming, edges fading softly into transparency. No stars drawn as spikes, no text, no people or recognisable shapes. Transparent PNG with alpha channel, about 1600 × 1200, centred with even margins. Style: match `phys-y11-galaxy-v1.png` and `phys-y11-sun-v1.png` (painted astronomical objects on transparent ground).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table and AME2020 masses.
2. Confirm the physics of every learner-visible claim: collapse heating and ignition near 10⁷ K; hydrostatic equilibrium and self-correction; repulsion and the strong force's range; binding energy and mass defect; the curve's shape and peak near iron (author note d); pp chain steps and conservation; the net reaction; the atomic-mass method (author note f; site note 16); 26.7 MeV and 0.7%; CNO steps, catalyst and net result; the temperature and mass at which CNO dominates; the Sun's 1% CNO and the 2020 detection (author note g).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the detector outline has no people).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 16 to 19 under Decisions to root.

## YouTube metadata (draft)

Title: Fusion in Stars: Binding Energy, the Proton-Proton Chain and the CNO Cycle | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa.html and https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa.html

Why does joining light nuclei release energy? See how a star switches on and stays balanced, why fusion needs a hot, dense core, what binding energy is and why the binding-energy curve makes hydrogen-to-helium fusion release energy. Follow the proton-proton chain step by step, check conservation, calculate the 26.7 MeV released from atomic masses, and see how the CNO cycle uses carbon as a catalyst in more massive stars. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse and apply Einstein’s description of the equivalence of energy and mass and relate this to the nuclear reactions that occur in stars (ACSPH031)"
"investigate the types of nucleosynthesis reactions involved in Main Sequence and Post-Main Sequence stars, including but not limited to: proton–proton chain; CNO (carbon-nitrogen-oxygen) cycle"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the Hertzsprung-Russell diagram. Next: how stellar mass changes the elements a star can make.

#HSCPhysics #Physics #NuclearFusion #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v04 and m7-v16; check that binding energy is earned from E = mc² before the curve is used; that the atomic-mass sentence in scene 8 does not confuse (open decision 1); that the CNO ring is followable at speech pace with the equations on screen; that "six times as strongly" is not over-read), then the physics check and the Codex error check.
- The balanced arrows and self-correcting loop, the bouncing protons, the climb up the curve, the ticking A/Z tallies and the carbon disc rolling round the ring carry the explanation; judge them at playback speed in the voiced preview.
