# Year 12 Physics M8 V16: Mass defect and binding energy. How does missing mass measure nuclear binding energy? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,753 characters, 19 scenes, about 514 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v15's final frame.

Scope: sixteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v11.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site masses kept for the worked example and attempt, every number recalculated in Python with the data-sheet conversion 1 u = 931.5 MeV/c² and AME2020 atomic masses, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson14.sa.txt`): lesson 14, especially "calculate-binding-energy" (Δm = Zm_p + Nm_n − m_nucleus; E_b = Δmc²; "the energy required to completely separate the nucleus"; E_b/A peaks near Fe-56 at about 8.8 MeV; Ni-62 strictly highest; 1 u = 931.5 MeV/c²; Figure 2; Stop and check He-4 with m_p = 1.007276 u, m_n = 1.008665 u, m_He = 4.001506 u; C-12 nuclear mass 11.996709 u fill-in), "explain-nuclear-stability" (short-range saturated strong force against long-range cumulative Coulomb repulsion; N ≈ Z for light nuclei; N/Z rises, Pb-208 about 1.54; beyond A ≈ 200 unstable; HSC tip: atomic against nuclear masses, "the electron masses cancel if you use atomic masses for both sides"; "always divide by A"), "clear-the-misconceptions" (energy released when products have higher E_b/A), "Analyse 7 marks" (mass defect as a measured discrepancy; both readings of binding energy; per nucleon; fusion; where the energy goes; conservation of mass-energy; the atomic-mass caution), Activity 1 (He-4, Fe-56 8.79 MeV total, U-238 7.57), independent practice Q1 (Li-7, nuclear mass 7.014357 u) and Q2(c) to (e): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson14.sa.html`, SHA256 `18219e8c4f9f1d5b769f64d59db028c88c38ce4652bd933f5ca55990058af245` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v16`, sections `calculate-binding-energy`, `explain-nuclear-stability`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Keep atomic/nuclear mass conventions consistent, calculate mass defect and binding per nucleon; relate curve to energy changes without calling bound mass lost matter." Prerequisites: v15 and m7-v16. Next: "phys-y12-m8-v17: What determines the energy released in an artificial transmutation?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); no real objects are needed, so no plates; the balance, nuclei, the binding-energy curve, the surface-neighbour diagram and calculation strips are coded, HSC style (nuclear notation with mass number and atomic number); every number recalculated in Python; data-sheet symbols E = mc² and 1 u = 931.5 MeV/c²; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v05 (binding energy defined, helium-4's 28.3 MeV and 7.1 MeV per nucleon, the binding-energy curve rising to a peak near iron, "climbing the curve releases energy"), m7-v16 ("energy out, mass down", E = mc²), v14 (alpha decay of heavy nuclei; mass-energy in decay), v15 (decays release MeV).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ4-06`), quoted from the route JSON `syllabusActions`:

- `P8-IQ4-06`: "predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036)"
  - "the law of conservation of energy"
  - "mass defect"
  - "binding energy"
  - "Einstein’s mass–energy equivalence relationship E=mc^(2)" (displayed as E = mc²)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v15's final frame (the balance: a C-12 nucleus against six protons and six neutrons, separate nucleons heavier, "missing mass?"). Teaches: no nucleon is missing (count them); binding energy recalled from v05 (pulling a nucleus apart takes energy) and the link to mass (m7-v16: adding energy adds mass); the mass defect is not lost matter (energy left when the nucleus formed, and its mass went with it); the method Δm = Zm_p + Nm_n − m_nucleus, E_b = Δmc², 931.5 MeV per u; C-12 worked in two stages with the site's nuclear masses (0.098937 u, 92.2 MeV, 7.68 MeV per nucleon); the atomic against nuclear mass trap and its fix (hydrogen atom masses: the electrons cancel); why per nucleon (U-235's total 1784 MeV); the curve (He-4 7.07, C-12 7.68, Fe-56 8.79, U-235 7.59 MeV per nucleon); why it rises (surface nucleons have fewer neighbours; short-range strong force) and why it falls (long-range repulsion between all protons; extra neutrons; nothing stable beyond lead); moving towards the peak from either side releases energy (fusion, fission named); a memory aid. Stops before Q-values of particular reactions (v17), fission chain reactions and the fission energy estimate (v18), the strong force's quark-level detail (site extension).

## Decisions

- **Learner question (route wording kept).** "How does missing mass measure nuclear binding energy?" The answer, built in order: binding energy is the energy needed to pull a nucleus apart (2); energy has mass, so the separated nucleons have more mass than the nucleus by exactly E_b/c² (2, 3); so the measured mass defect, times c², is the binding energy (4 to 6); dividing by A compares nuclei fairly (8, 9).
- **Hook (v15's handoff).** "Nothing has gone missing" with a count of twelve before and after; the route's "without calling bound mass lost matter" starts here.
- **Recall, not re-teach (v05 and m7-v16).** Scene 2 recalls in three sentences: the strong force attracts nucleons, pulling them apart takes energy (binding energy), and adding energy adds mass (E = mc²). v05's helium-4 example (28.3 MeV) is a screen tag only.
- **Not lost matter (route stop; site "Analyse 7 marks" step 2).** "When the nucleus formed, energy left, as gamma rays and kinetic energy, and the mass that went with that energy left too." Binding energy read both ways: energy released on forming and energy needed to separate.
- **Method (site formula box; data sheet).** Δm = Zm_p + Nm_n − m_nucleus; E_b = Δmc²; 1 u = 931.5 MeV/c² read from the data sheet (the joule route is in author note b). The narration says "mega electron volts" in full.
- **Worked example C-12 (site fill-in masses; new full working).** Helium-4 is v05's example, so carbon-12 is worked here with the site's nuclear masses (m_p = 1.007276 u, m_n = 1.008665 u, m_C = 11.996709 u). Stage 1: Δm = 12.095646 − 11.996709 = 0.098937 u. Stage 2: E_b = 92.2 MeV; per nucleon 7.68 MeV.
- **Atomic against nuclear masses (route stop; site HSC tip).** The trap made concrete: C-12's atomic mass is exactly 12 u (definition of u); with bare proton masses it gives 0.095646 u = 89.1 MeV (wrong: six electrons' mass is counted on one side only); with hydrogen atom masses (1.007825 u) the electrons cancel: 0.098940 u = 92.2 MeV. One rule on screen: "same kind of mass on both sides". Electron binding energies are ignored (author note c).
- **Per nucleon (site "Analyse 7 marks" step 3; "always divide by A").** U-235's total, about 1780 MeV, against carbon's 92 MeV; per nucleon compares how tightly each nucleon is held.
- **Curve (v05's curve reused; site Figure 2).** Points from AME2020: ⁴He 7.07, ¹²C 7.68, ⁵⁶Fe 8.79, ²³⁵U 7.59 MeV per nucleon; peak "near iron" (Ni-62 in author note d; kit limit "Iron-group maximum, not an exact Fe-56 maximum").
- **Why the shape (site "explain-nuclear-stability").** Rise: the strong force reaches only nearest neighbours, and small nuclei have a larger share of surface nucleons with fewer neighbours. Fall: the electric repulsion acts between every pair of protons, so it grows faster than the strong-force binding. Extra neutrons add attraction without repulsion (N/Z: O-16 1.00, Pb-208 1.54). "Beyond lead, no arrangement is stable at all" (author note e on bismuth-209). Site properties of the strong force (charge independence, repulsive core, saturation by name) are not listed (extension).
- **Energy changes (route stop "relate curve to energy changes"; site "clear-the-misconceptions").** Moving towards the peak from either side releases energy: fusion of light nuclei (v05) and fission of heavy nuclei (v18, named only). The 200 MeV fission estimate is left to v18.
- **Memory aid (scene 13): "Higher on the curve, lighter per nucleon."** See "Memory aid check".
- **Attempts (site Q1 masses, recalculated; new A2).** A1 (3 marks): Li-7 nuclear mass 7.014357 u: Δm = 0.042131 u, E_b = 39.2 MeV, 5.61 MeV per nucleon. Crossed: dividing by Z (13.1 MeV). A2 (2 marks): explain why "the mass defect is the mass of particles lost when the nucleus forms" is wrong and what it represents. Crossed: the claim.
- **Handoff (route next).** Rutherford's 1919 transmutation of nitrogen as the next case: does it release or cost energy? See "Final frame".
- **Colour key (v05 and v14 keys):** protons red "p" discs; neutrons grey "n" discs; electrons navy dots (trap scene); energy orange (bars and arrows); the binding curve ink with points as small navy dots, the climbing (fusion) arrow amber and the falling-side (fission) arrow teal; the strong-force neighbour links short teal lines; repulsion arrows rose; the balance ink.
- **Site sources used:** lesson 14: mass defect and binding energy definitions (2 to 4); 931.5 MeV/u (4); C-12 nuclear mass 11.996709 u and particle masses (5, 6); HSC tip on atomic masses and dividing by A (7, 8); Figure 2, peak near Fe-56, Ni-62 (9); stability section (10, 11); misconception "Both fusion and fission release energy, so larger nuclei are always more stable" (12); "Analyse 7 marks" (2, 3, 12); Q1 Li-7 (A1); Q2(c) (A2). Not used: the four strong-force properties list, Yukawa and pions (site extension); fission and chain reactions (v18); the fusion card (v05).
- **Site notes (quoted from site lesson 14, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Order of magnitude ("map-the-strong-force"): "The Coulomb repulsion on a surface proton from the other 78 protons is roughly 10² N (about 1 N between just two protons 14 fm apart)". Two protons 14 fm apart repel with 1.2 N (correct); the force on a surface proton from 78 protons spread through the sphere is about 78 × 1.2 / (about 1 to 4, by geometry) N, of order 10² N; consistent. Checked; no change needed.
  2. Precision ("calculate-binding-energy"): "Iron-56 sits at the peak of the stability curve and is where fusion in massive stars stops." Fusion in massive stars ends with silicon burning producing nickel-56, which decays to iron-56; the statement is a fair simplification. No change needed; noted for v06 consistency.
  3. Precision ("explain-nuclear-stability"): "Beyond about A ≈ 200, no combination of protons and neutrons can stabilise the nucleus." Lead-208 (A = 208) is stable; the limit is Z > 82 (bismuth-209 is effectively stable, half-life about 2 × 10¹⁹ years). Suggest "Beyond lead (Z = 82), no nucleus is stable".
  4. Checked and correct: He-4 Δm = 0.030376 u, 28.30 MeV, 7.07 MeV per nucleon; C-12 Δm = 0.098937 u; Li-7 Q1 0.042131 u, 39.25 MeV, 5.61 MeV per nucleon; Fe-56 8.79 MeV per nucleon (492 MeV total); U-235 about 7.6, U-238 7.57 MeV per nucleon; Pb-208 N/Z = 1.54; the HSC tip on atomic masses.
- **Cause chain taught, in order:** (1) nucleons attract, so separating them takes energy, the binding energy (2); (2) energy has mass, so the separated nucleons are heavier by E_b/c², and nothing material is lost (2, 3); (3) so measuring the mass defect gives the binding energy, E_b = Δmc² (4 to 6); (4) mixing atomic and nuclear masses miscounts electrons (7); (5) per nucleon compares tightness fairly (8, 9); (6) short-range attraction and surface nucleons explain the rise; long-range repulsion between all protons explains the fall (10, 11); (7) products nearer the peak are more tightly bound, so lighter, so energy is released (12).
- **Entry knowledge (route `entryKnowledge`):** v05 (binding energy and the curve, introduced), m7-v16 (E = mc²), v14 (alpha decay, heavy nuclei), Year 11 nuclear notation and electric repulsion.
- **Learner-visible vocabulary (plain meaning at first use):** nucleon (a proton or a neutron, recalled, 1); binding energy (the energy needed to pull a nucleus completely apart, recalled, 2); mass defect (how much less mass the nucleus has than its separate nucleons, 3, 4); atomic mass unit u (recalled; one twelfth of a carbon-12 atom, 4, 7); atomic mass against nuclear mass (with and without the electrons, 7); binding energy per nucleon (8).
- **Legacy logic ported:** none. Coded family `m8-nucleosynthesis` supplies the curve, within its limits ("Iron-group maximum, not an exact Fe-56 maximum"; "No reaction energetics"); this design adds the calculation.
- **New explainer motion:** **balance** (two pans that tip as masses load, with a gap readout, 1, 3); **pull apart** (a nucleus separating into nucleons as an orange energy bar flows in and the mass readout rises, 2, 3); **electron cancel** (navy electron dots on both sides of the trap working, pairing off and fading, 7); **neighbour links** (a small and a large nucleus with teal links to nearest neighbours only, surface nucleons highlighted, 10); **repulsion web** (rose lines between every pair of protons, multiplying as Z grows, 11); **curve moves** (amber arrow up the left side, teal arrow down the right side towards the peak, 12); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 14 and 16); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the balance, nucleus or curve at the left or centre; working strips at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Mass defect as mass of energy: m(nucleons) − m(nucleus) = E_b/c² exactly. When a nucleus forms from free nucleons, the binding energy leaves (gamma rays, kinetic energy), and the system's mass falls by E_b/c². "Lost matter" is wrong because baryon number (the nucleon count) is unchanged.
  (b) Joule route: Δm = 0.098937 u × 1.661 × 10⁻²⁷ kg = 1.643 × 10⁻²⁸ kg; × (3.00 × 10⁸)² = 1.479 × 10⁻¹¹ J = 92.3 MeV (the data sheet's rounded u and c give 933.1 MeV per u, so 92.3 rather than 92.2). Not narrated; key notes give the 931.5 shortcut.
  (c) Atomic masses include Z electrons and their (eV-scale) binding; the electron binding energies (keV for carbon) are negligible here. Using ¹H atomic masses for protons balances the electron count exactly.
  (d) Binding energy per nucleon (AME2020): ⁶²Ni 8.795 MeV (highest), ⁵⁸Fe 8.792, ⁵⁶Fe 8.790; ⁴He 7.074; ¹²C 7.680; ²³⁵U 7.591; ²³⁸U 7.570; ¹⁶O 7.976; ²⁰⁸Pb 7.867.
  (e) Bismuth-209 alpha-decays with a half-life of about 2 × 10¹⁹ years; "beyond lead, no arrangement is stable" is accurate.
  (f) The surface argument: in the semi-empirical mass formula, binding is reduced by a surface term proportional to A^(2/3), so its share per nucleon falls as A^(−1/3); the Coulomb term grows as Z²/A^(1/3). The narration states both effects in words.
  (g) Pronunciations: "mega electron volts" in full; "u" said "u" after "atomic mass units" once.
- **Open decisions for root:**
  - **1. Worked nucleus (learning review).** Carbon-12 rather than the site's helium-4 Stop and check, because v05 already worked helium-4. Keep, or rework helium-4 if the review wants the site example.
  - **2. Trap scene length (learning review).** Scene 7 shows both the wrong and the fixed working (about 440 characters). If crowded, keep only the fix and the rule.
  - **3. Handoff picture (root, with v17's designer).** The final frame shows the curve with ⁴He, ¹⁴N and ¹⁷O marked and Rutherford's reaction with "Q = ?"; v17 opens on it.

Main question: *A carbon-12 nucleus has less mass than its own parts, yet no part is missing. What does the difference measure?*
Entry knowledge: binding energy and the curve (v05); E = mc² (m7-v16); alpha decay and mass-energy in decay (v14); MeV energies of decays (v15).
Stops after: the mass defect as the mass of the binding energy, the method, C-12 in two stages, the atomic-mass trap, per nucleon, the curve's values and shape, energy release towards the peak. No reaction Q-values or fission estimate.
Handoff: v17, what determines the energy released in an artificial transmutation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *Δm*, *Z*, *N*, *A*, *m_p*, *m_n*, *E_b*, *c*, *u*.

### 1. hook (a nucleus lighter than its parts)
> Here's the puzzle. A carbon twelve nucleus has less mass than the six protons and six neutrons it's made from. Yet nothing has gone missing. Count them, and all twelve nucleons are still there. The difference is less than one per cent, but it's real, and it's measured very precisely. So how does missing mass measure nuclear binding **energy**?

Visual: opens on v15's final frame (see "Opening frame"); the chip becomes the heading: "How does missing mass measure nuclear binding energy?". On "less mass than the six protons and six neutrons" the balance gap readout writes "difference = ?". On "nothing has gone missing" a crossed chip "lost particles". On "Count them" the nucleons in both pans number in turn "1 to 12" and "1 to 12", tag "12 = 12". On "less than one per cent" the gap readout writes "0.82% lighter". On "energy" the heading underlines "missing mass" and "binding energy".

### 2. pulling a nucleus apart
> You met the idea in the video on stars. Nucleons attract each other through the strong force, so pulling a nucleus apart takes energy. That energy is the binding energy. And adding energy to anything adds to its mass, by E equals m c squared. So the separated nucleons, with that energy added, have more mass than the **nucleus**.

Visual: board change: the coded C-12 nucleus at the left. On "You met the idea" a small chip "v05: binding energy (helium-4: 28.3 MeV)". On "attract each other through the strong force" short teal links between touching nucleons. On "pulling a nucleus apart takes energy" the pull-apart motion: the nucleons separate as an orange energy bar flows in, tag "energy in = binding energy, E_b". On "E equals m c squared" chip "E = mc² (Module 7)". On "nucleus" a mass readout beside the separated nucleons ticks up, tag "more energy → more mass".

### 3. not lost matter
> So the mass defect isn't matter that's been lost. When the nucleus formed, energy left, as gamma rays and kinetic energy, and the mass of that energy left with it. The mass defect is the mass of the energy you'd have to put back, to pull the nucleus **apart**. It's the same rule you saw for the Sun, energy out, mass **down**.

Visual: the pull-apart motion runs in reverse: the nucleons come together and an orange energy bar and two amber "γ" packets leave; the mass readout ticks down. On "isn't matter that's been lost" a crossed chip "mass defect = lost matter". On "the mass of that energy left with it" tag "energy out → mass down (Module 7)". On "apart" the balance returns small with a bracket on the gap, label "mass defect Δm = E_b / c²". On "down" chip "the Sun: energy out, mass down (Module 7)".

### 4. the method
> Here's the method. The mass defect is the mass of Z protons and N neutrons, minus the mass of the nucleus. Then the binding energy is the mass defect, times c squared. With masses in atomic mass units, there's a shortcut. One u is worth nine hundred and thirty one point five mega electron volts, from your data **sheet**.

Visual: board change: the method strip. On "the mass of Z protons and N neutrons" `AlignedAlgebra` "Δm = Zm_p + Nm_n − m_nucleus" with labels "Z: protons", "N: neutrons (A − Z)". On "times c squared" "E_b = Δm c²". On "a shortcut" chip "Δm in u". On "sheet" "1 u = 931.5 MeV/c² → E_b (MeV) = Δm (u) × 931.5" (boxed), with a chip "HSC data sheet".

### 5. stage 1: carbon-12's mass defect
> Let's do carbon twelve. Six protons at one point zero zero seven two seven six u, and six neutrons at one point zero zero eight six six five u, add to twelve point zero nine five six four six u. The nucleus itself is eleven point nine nine six seven zero nine u. So the mass defect is zero point zero nine eight nine three seven **u**.

Visual: working layout. Task strip: "Find the binding energy per nucleon of carbon-12". Equation strip: "Δm = Zm_p + Nm_n − m_nucleus, E_b = Δm × 931.5 MeV". Givens grouped: "Z = 6, N = 6, m_nucleus = 11.996709 u" (carbon-12 nucleus); "m_p = 1.007276 u, m_n = 1.008665 u" (particles). On "add to twelve point zero nine five six four six" `AlignedAlgebra` "6(1.007276) + 6(1.008665) = 12.095646 u". On "u" "Δm = 12.095646 − 11.996709 = 0.098937 u" (boxed); the balance icon's gap fills with this value.

### 6. stage 2: binding energy and per nucleon
> Times nine hundred and thirty one point five, the binding energy is ninety two point two mega electron volts. That's the energy needed to pull carbon twelve completely apart. Divide by its twelve nucleons, and it's seven point six eight mega electron volts per **nucleon**. Compare that with pulling the electron off a hydrogen atom, which takes only thirteen point six electron **volts**.

Visual: stage 1 shrinks to one kept line "Δm = 0.098937 u". On "ninety two point two mega electron volts" "E_b = 0.098937 × 931.5 = 92.2 MeV" (boxed) with a `NumberTicker`. On "completely apart" the pull-apart icon with tag "92.2 MeV to separate". On "nucleon" "E_b/A = 92.2 / 12 = 7.68 MeV per nucleon" (boxed). On "volts" a comparison chip "hydrogen atom: 13.6 eV; nucleon in ¹²C: 7.68 MeV, over half a million times more".

### 7. the atomic mass trap
> Watch out for one trap. Data tables often give atomic masses, which include the electrons. Carbon twelve's atomic mass is exactly twelve u, with six electrons included. Use that with bare proton masses, and you get eighty nine point one mega electron volts, which is wrong. The fix is to keep both sides the same. Use hydrogen atom masses instead of proton masses, so the six electrons cancel, and you get ninety two point two **again**.

Visual: board change: two working columns. On "include the electrons" a carbon atom icon (nucleus plus six navy electron dots), tag "atomic mass = nucleus + electrons". On "exactly twelve u" chip "m(¹²C atom) = 12.000000 u". On "Use that with bare proton masses" left column: "6(1.007276) + 6(1.008665) − 12.000000 = 0.095646 u → 89.1 MeV", six navy dots on the right side only, crossed. On "keep both sides the same" chip "same kind of mass on both sides". On "Use hydrogen atom masses" right column: "6(1.007825) + 6(1.008665) − 12.000000 = 0.098940 u", six navy dots on each side pairing off and fading (electron cancel). On "again" "→ 92.2 MeV ✓".

### 8. why per nucleon
> Why divide by the number of nucleons? A big nucleus has a big total binding energy, simply because it has more nucleons. Uranium two three five's total is about seventeen hundred and eighty mega electron volts. Per nucleon tells you how tightly each nucleon is held, on average, so you can compare nuclei **fairly**.

Visual: board change: two bars, "¹²C: 92 MeV" (short) and "²³⁵U: 1784 MeV" (tall). On "simply because it has more nucleons" small nucleon counts under each bar "12", "235". On "seventeen hundred and eighty" the tall bar's label pulses. On "fairly" both bars divide into per-nucleon bars: "7.68" and "7.59 MeV per nucleon", nearly equal, tag "per nucleon: a fair comparison".

### 9. the curve
> Plot binding energy per nucleon against mass number, and you get the curve from the stars video. Helium four is seven point one, carbon twelve seven point seven, iron fifty six is near the top at eight point eight, and uranium two three five drops back to seven point **six**.

Visual: board change: v05's coded binding-energy-per-nucleon curve (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9). Points write in turn as navy dots with labels: on "Helium four" "⁴He 7.07"; on "carbon twelve" "¹²C 7.68" (from the worked example, with a small tick); on "iron fifty six" "⁵⁶Fe 8.79, peak near iron"; on "six" "²³⁵U 7.59".

### 10. why the curve rises
> Why that shape? The strong force only reaches a nucleon's nearest neighbours. In a small nucleus, a large share of the nucleons sit on the surface, with fewer neighbours holding them, so each is less tightly bound. As nuclei grow, more nucleons are surrounded on all sides, so the binding per nucleon **rises**.

Visual: the curve shrinks to the upper right. Neighbour links: a small coded nucleus (about 12 discs) and a larger one (about 60 discs), each with short teal links to touching neighbours only. On "only reaches a nucleon's nearest neighbours" one disc's links light up (touching discs only), tag "short range: neighbours only". On "on the surface" the surface discs of the small nucleus outline in teal, tag "most on the surface". On "surrounded on all sides" the larger nucleus's inner discs glow with full sets of links, tag "more fully surrounded". On "rises" the curve's left side highlights.

### 11. why the curve falls
> But the electric repulsion between protons reaches right across the nucleus, so every proton pushes on every other one. Past iron, that growing repulsion eats into the binding, so the curve slowly falls. Heavy nuclei need extra neutrons, which add attraction without adding repulsion. And beyond lead, no arrangement is stable at **all**.

Visual: repulsion web: in the larger nucleus, rose lines join every pair of red "p" discs; a bigger nucleus beside it has far more lines, tag "every pair of protons repels". On "Past iron" the curve's right side highlights as it slopes down. On "extra neutrons" a small N/Z chip "¹⁶O: N/Z = 1.0", "²⁰⁸Pb: N/Z = 1.54", grey discs adding to the big nucleus without rose lines. On "all" a chip "beyond lead (Z > 82): all unstable → alpha decay (v14)".

### 12. which changes release energy
> This curve tells you which changes release energy. Moving towards the peak, from either side, makes the products more tightly bound, so they have less mass, and the difference is released. Fusing light nuclei climbs the left side, as in stars. Splitting a heavy nucleus moves down the right side, towards the peak. That's fission, coming **soon**.

Visual: the full curve returns. On "Moving towards the peak, from either side" two arrows: amber on the left rising towards the peak, teal on the right descending towards it. On "less mass, and the difference is released" an orange energy burst at each arrowhead, tag "more tightly bound → less mass → energy out". On "Fusing light nuclei" the amber arrow labelled "fusion (v05)". On "Splitting a heavy nucleus" the teal arrow labelled "fission". On "soon" a small chip "fission: coming up".

### 13. a way to remember
> Here's a way to remember the link. Higher on the curve, lighter per nucleon. More binding means less mass, so moving up the curve releases **energy**.

Visual: the curve stays; a second, inverted ghost curve fades in below it, labelled "mass per nucleon", lowest where the binding curve is highest. On "Higher on the curve, lighter per nucleon" the line writes large: "Higher on the curve, lighter per nucleon." On "energy" both arrows from scene 12 pulse. Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A lithium seven nucleus has a mass of seven point zero one four three five seven u. Calculate its mass defect, its binding energy, and its binding energy per nucleon. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The nucleus of lithium-7 (⁷₃Li) has a mass of 7.014357 u. Using m_p = 1.007276 u and m_n = 1.008665 u, calculate: (a) the mass defect of the nucleus (b) its binding energy in MeV (c) its binding energy per nucleon. (3 marks)" Data-sheet chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Lithium seven has three protons and four neutrons, totalling seven point zero five six four eight eight u. Subtract the nucleus, and the mass defect is zero point zero four two one three one **u**. Times nine three one point five gives thirty nine point two mega electron volts, and over seven nucleons, that's five point six one per **nucleon**. The slip is dividing by the three protons instead of all seven **nucleons**.

Visual: card shrinks to the top; "⁷₃Li", "7.014357 u" and "per nucleon" underline. On "u" "(a) 3(1.007276) + 4(1.008665) = 7.056488 u; Δm = 7.056488 − 7.014357 = 0.042131 u". On the first "nucleon" "(b) E_b = 0.042131 × 931.5 = 39.2 MeV; (c) E_b/A = 39.2 / 7 = 5.61 MeV per nucleon". On the second "nucleons" a chip "39.2 / 3 = 13.1 MeV" fades in and is crossed. Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A student says the mass defect is the mass of the particles lost when a nucleus forms. Explain why that's wrong, and what the mass defect represents. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student states: 'The mass defect is the mass of the particles that are lost when a nucleus forms.' Explain why this statement is incorrect, and state what the mass defect represents. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> No particles are lost. The nucleus has exactly the same protons and neutrons as before. When it forms, binding energy is released, and energy has mass, so the system's mass falls by that energy over c squared. So the mass defect is the mass equivalent of the binding **energy**. The slip is the student's claim itself, that bits of matter go **missing**.

Visual: card shrinks to the top; "particles that are lost" underlines. Lines write in turn: "same Z protons and N neutrons before and after"; "binding energy released when the nucleus forms; E = mc²: mass falls by E_b/c²"; on "energy" "Δm = mass equivalent of E_b". On "missing" a chip "mass defect = lost particles" fades in and is crossed. Hold about 1 second.

### 18. handoff
> So the curve shows where nuclear energy can come from. But in nineteen nineteen, Ernest Rutherford did something new. He fired alpha particles into nitrogen gas, and turned some of the nitrogen into oxygen, the first artificial transmutation. Did that reaction release energy, or cost energy? What determines the energy released in an artificial **transmutation**?

Visual: board clears (camera change). On "where nuclear energy can come from" the curve returns at the left with its two arrows. On "Ernest Rutherford" name tag in words only "Rutherford, 1919". On "fired alpha particles into nitrogen gas" an amber "α" arrow strikes a coded ¹⁴N nucleus (7 red, 7 grey discs) at the right. On "turned some of the nitrogen into oxygen" the equation builds: "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H", with the curve gaining labelled points "⁴He", "¹⁴N", "¹⁷O". On "release energy, or cost energy" an orange bar with "+?" and "−?" ends. On "transmutation" the chip "Q = ?" beside the equation and the chip "Next: what determines the energy released in an artificial transmutation?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Binding energy E_b: the energy needed to separate a nucleus completely into its nucleons (equal to the energy released when it forms).
2. Mass defect Δm = Zm_p + Nm_n − m_nucleus. No particles are lost: Δm is the mass equivalent of E_b (E = mc²). E_b = Δmc², or E_b (MeV) = Δm (u) × 931.5.
3. Example: ¹²C: Δm = 12.095646 − 11.996709 = 0.098937 u; E_b = 92.2 MeV; E_b/A = 7.68 MeV per nucleon.
4. Same kind of mass on both sides: with atomic masses, use ¹H (1.007825 u) for each proton so the electrons cancel. Divide by A, not Z.
5. E_b/A rises (fewer surface nucleons, short-range strong force), peaks near iron (8.8 MeV), falls (long-range repulsion between all protons). Moving towards the peak (fusion of light, fission of heavy nuclei) releases energy.

Memory aid (large, on the notes screen): *Higher on the curve, lighter per nucleon.*

## Teaching checks

- **Does it explain causes?** Why the nucleus has less mass (energy left, and energy has mass) (2, 3); why atomic masses mislead (7); why per nucleon (8); why the curve rises and falls (10, 11); why moving towards the peak releases energy (12).
- **Misconceptions addressed:** the mass defect as lost matter (1, 3, 17 crossed); binding energy "stored inside" the nucleus (2, 3: it is energy that left); dividing by Z (15 crossed); mixing atomic and nuclear masses (7); "bigger nuclei are always more stable" (8, 11).
- **One idea at a time:** recall (2), meaning (3), method (4), Δm (5), E_b and per nucleon (6), the trap (7), per nucleon (8), the curve (9), rise (10), fall (11), energy release (12).
- **Video makes it easier:** the balance with counted nucleons (1); energy flowing in as nucleons separate, out as they join (2, 3); electrons pairing off and cancelling (7); neighbour links and the repulsion web (10, 11); arrows towards the peak from both sides (12).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 27 s.
- **Avoided double teaching:** binding energy and the curve (v05), E = mc² and "energy out, mass down" (m7-v16), alpha decay of heavy nuclei (v14) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ4-06`: mass defect, binding energy and E = mc² applied quantitatively (4 to 8, A1), with conservation of energy in the formation of a nucleus (3); predicting energy released in decays, transmutations, fission and fusion continues in v17 and v18 (12 sets the direction).
- **Out of scope by design:** Q-values of particular reactions (v17); fission and the 200 MeV estimate (v18); strong-force properties, pions and quarks (site extension).

## Practice questions and model answers

**Attempt 1 (scene 14; site masses, original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The nucleus of lithium-7 (⁷₃Li) has a mass of 7.014357 u. Using m_p = 1.007276 u and m_n = 1.008665 u, calculate: (a) the mass defect of the nucleus (b) its binding energy in MeV (c) its binding energy per nucleon."
Model answer: (a) Z = 3, N = 4: 3(1.007276) + 4(1.008665) = 3.021828 + 4.034660 = 7.056488 u; Δm = 7.056488 − 7.014357 = 0.042131 u. (b) E_b = 0.042131 × 931.5 = 39.2 MeV. (c) E_b/A = 39.2/7 = 5.61 MeV per nucleon. Classic mistake (crossed): dividing by Z (39.2/3 = 13.1 MeV).

**Attempt 2 (scene 16; original wording, HSC style, 2 marks).** "A student states: 'The mass defect is the mass of the particles that are lost when a nucleus forms.' Explain why this statement is incorrect, and state what the mass defect represents."
Model answer: No particles are lost: the nucleus contains the same Z protons and N neutrons as the separated nucleons. When the nucleus forms, the binding energy is released (as gamma radiation and kinetic energy), and since energy has mass (E = mc²), the system's mass decreases by E_b/c². The mass defect is the mass equivalent of the binding energy. Classic mistake (crossed): the student's claim (particles or matter go missing).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c²; c = 3.00 × 10⁸ m s⁻¹ | 4 to 15 |
| Site particle and nuclear masses | m_p = 1.007276 u; m_n = 1.008665 u; m(¹²C nucleus) = 11.996709 u; m(⁷Li nucleus) = 7.014357 u | 5, 7, 14, 15 |
| C-12 stage 1 | 6(1.007276) = 6.043656; 6(1.008665) = 6.051990; sum 12.095646 u; Δm = 0.098937 u | 5 |
| C-12 stage 2 | E_b = 0.098937 × 931.5 = 92.160 → 92.2 MeV; E_b/A = 7.680 → 7.68 MeV | 6 |
| Trap (atomic C-12 = 12.000000 u) | with m_p: 12.095646 − 12 = 0.095646 u → 89.09 → 89.1 MeV; with ¹H 1.007825 u: 6.046950 + 6.051990 − 12 = 0.098940 u → 92.16 → 92.2 MeV | 7 |
| Gap fraction and comparison | 0.098937 / 12.095646 = 0.82%; 7.68 MeV / 13.6 eV = 5.65 × 10⁵ ("over half a million times", screen only) | 1, 6 |
| U-235 total | 1783.9 MeV ("about seventeen hundred and eighty"; screen 1784) | 8 |
| Curve points (AME2020) | ⁴He 7.074 → 7.07 ("seven point one"); ¹²C 7.680; ⁵⁶Fe 8.790 ("eight point eight"); ²³⁵U 7.591 → 7.59 ("seven point six") | 9 |
| N/Z | ¹⁶O 8/8 = 1.00; ²⁰⁸Pb 126/82 = 1.54 | 11 |
| v05 recall | ⁴He 28.3 MeV | 2 |
| A1 | 3(1.007276) = 3.021828; 4(1.008665) = 4.034660; 7.056488 u; Δm = 0.042131 u; E_b = 39.245 → 39.2 MeV; E_b/A = 5.606 → 5.61 MeV; wrong 39.2/3 = 13.1 MeV | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `nuclear.py` in the session scratchpad folder `m8v12-17-designer`) with AME2020 atomic masses; Codex to re-check.

- 6 × 1.007276 + 6 × 1.008665 − 11.996709 = 0.098937; × 931.5 = 92.160; / 12 = 7.680.
- 6 × 1.007276 + 6 × 1.008665 − 12.000000 = 0.095646; × 931.5 = 89.094.
- 6 × 1.007825 + 6 × 1.008665 − 12.000000 = 0.098940; × 931.5 = 92.163.
- 12.000000 − 6 × 0.000548580 = 11.996709 (the site's nuclear mass of C-12).
- 3 × 1.007276 + 4 × 1.008665 − 7.014357 = 0.042131; × 931.5 = 39.245; / 7 = 5.606; / 3 = 13.08.
- AME2020 binding energies per nucleon: ⁴He 7.074, ¹²C 7.680, ⁵⁶Fe 8.790, ²³⁵U 7.591 (total 1783.9), ⁶²Ni 8.795.
- Joule route: 0.098937 × 1.661e-27 × (3.00e8)² / 1.602e-13 = 92.3 MeV.

## Memory aid check

- **"Higher on the curve, lighter per nucleon."** Meaning, as said in scene 13: a larger binding energy per nucleon means a smaller mass per nucleon, so any change that moves products up the curve releases energy. Assumptions checked: mass per nucleon of a nucleus is (Zm_p + Nm_n)/A − (E_b/A)/c²; the first term varies slightly with N/Z (m_n > m_p), so the statement is exact for comparisons at fixed composition and a close guide otherwise (the site notes Fe-56 has the lowest mass per nucleon while Ni-62 has the highest binding per nucleon, which is exactly this small composition effect; author note d). Introduced after the explanation (12).
- **Considered, not used:** "binding energy is the glue" (suggests energy stored inside the nucleus, the misconception scene 3 removes).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,753 characters**, 19 scenes. Characters per scene (1 to 19): 341, 326, 319, 318, 331, 381, 433, 312, 272, 307, 334, 343, 146, 199, 411, 181, 346, 360, 75. At 13.3 characters per second the speech is about 433 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 81 s of holds and countdowns): **about 514 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's wrong working (open decision 2); scene 8's U-235 sentence (keep the bars); scene 12's last sentence.

## Opening frame

v15's final frame (designed in this wave, `phys-y12-m8-v15.md`): paper background; heading "Why does half-life predict a population but not one atom?"; at the upper left, small, the navy N against t curve with teal halving guides; at the left a small decaying nucleus sending out an amber α with an orange energy bar, tag "MeV each"; at the centre a coded two-pan balance: on the left pan a packed C-12 nucleus (6 red "p" and 6 grey "n" discs), on the right pan six red and six grey discs spaced apart; the beam tipped down on the right (separate nucleons heavier), tag "missing mass?"; chip "Next: how does missing mass measure nuclear binding energy?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 18, before the key-notes board): paper background; heading "How does missing mass measure nuclear binding energy?"; at the left the coded binding-energy-per-nucleon curve (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9) with an amber arrow rising on the left side and a teal arrow descending on the right side towards the peak near iron, and labelled points "⁴He", "¹⁴N", "¹⁷O"; name tag "Rutherford, 1919"; at the right an amber "α" arrow striking a coded ¹⁴N nucleus (7 red, 7 grey discs); under it the equation "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H" with a chip "Q = ?" and an orange energy bar with "+?" and "−?" ends; chip "Next: what determines the energy released in an artificial transmutation?". v17 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v16` (route phys-y12-m8-v16). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v16` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v16` (root to confirm).

In order (kebab-case; 19 scene headings, all `### N.`): hook, pull-apart, not-lost-matter, method, c12-mass-defect, c12-binding, atomic-mass-trap, per-nucleon, curve-values, curve-rises, curve-falls, energy-release, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: balance, pull apart, electron cancel, neighbour links, repulsion web, curve moves (`m8-nucleosynthesis` curve), `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 camera continue (reverse motion); 3 to 4 clear change; 4 to 5 camera continue (working layout); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change to the curve; 9 to 10 camera continue (curve shrinks); 10 to 11 camera continue; 11 to 12 camera continue (curve returns); 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 clear change; 18 to 19 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v16-learning-review.md`, `science_check` = `checks/p-y12-m8-v16-physics-check.md`.

## Assets

Have: none used as plates (the content is nuclei, curves and working).
- **Checked, not used:** `phys-y11-top-pan-balance-v1.png` and `phys-y11-platform-scales-v1.png` (real balances measure by gravity at everyday scale; a painted balance would suggest nuclei can be weighed on scales; the coded two-pan balance is labelled as a comparison diagram).

Need: no new plates.

Coded: the balance, nuclei and nucleons, energy bars, gamma packets, the method and working strips, the carbon atom with electrons, bars, the binding curve and its ghost, neighbour links, the repulsion web, the equation, chips, countdowns, key notes board.

Kit gaps (for the v16 build brief):
1. **Comparison balance.** A coded two-pan beam that tips by a set amount from a numeric difference, with a gap bracket and readout (used in v15's final frame and here).
2. **Neighbour links and repulsion web.** Packed disc clusters with links drawn only between touching discs, and rose lines between every pair of proton discs, with counts.

## Codex asset brief

No new plates. Codex confirms the coded two-pan balance is labelled "comparison of masses (diagram)" wherever it appears, so it is not read as a weighing method.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: binding energy as separation energy; the mass defect as the mass equivalent of the binding energy (author note a); no particles lost; the method and 931.5 MeV per u; the atomic-mass trap and the ¹H fix; per nucleon; the curve values; the surface and repulsion explanations (author note f); extra neutrons; "beyond lead" (author note e); moving towards the peak releases energy.
3. Confirm the conversion is displayed as on the HSC data sheet: 1 u = 931.5 MeV/c².
4. Confirm the history: Rutherford 1919, nitrogen to oxygen.
5. Confirm the memory aid's assumptions (see "Memory aid check").
6. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
7. Confirm both attempt cards are original in wording (A1 uses the site's masses), carry every condition and show nothing answer-bearing.
8. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
9. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
10. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
11. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Report site note 3 under Decisions to root.

## YouTube metadata (draft)

Title: Mass Defect and Binding Energy: Why a Nucleus Weighs Less Than Its Parts | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html

A carbon-12 nucleus has less mass than its own protons and neutrons, yet nothing is missing. See why the mass defect is the mass of the binding energy, calculate carbon-12's binding energy per nucleon step by step, avoid the atomic-mass trap, and explain why the binding-energy curve rises, peaks near iron and falls. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036)
- the law of conservation of energy
- mass defect
- binding energy
- Einstein’s mass–energy equivalence relationship E = mc²"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why half-life predicts a population but not one atom. Next: what determines the energy released in an artificial transmutation.

#HSCPhysics #Physics #BindingEnergy #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v15, v05 and m7-v16; check that the recall in scene 2 is enough for a student who skipped v05; that "not lost matter" lands before the method; that the six-decimal masses are readable at speed in scene 5; that the trap scene is not crowded; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The balance, the energy flowing in and out, the cancelling electrons and the two arrows towards the peak carry the explanation; judge them at playback speed in the voiced preview.
