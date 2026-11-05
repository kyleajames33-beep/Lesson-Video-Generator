# Year 12 Physics M8 V14: Alpha, beta and gamma decay. What changes in a nucleus during alpha, beta and gamma decay? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,606 characters, 18 scenes, about 504 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v13's final frame.

Scope: fourteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v11.md`. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site equations kept where used, nuclide data checked against AME2020 and NNDC decay data, original attempts and data, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson15.sa.txt`): lesson 15, especially "compare-the-decay-modes" (Ra-226 and a Geiger counter; α: A − 4, Z − 2, stopped by paper; β⁻: n → p + e⁻ + ν̄_e, stopped by a few mm of aluminium; β⁺: p → n + e⁺ + ν_e; γ: X* → X + γ, several cm of lead; Figure 1 penetration; Stop and check U-238 → Th-234 + ?), "clear-the-misconceptions" (antineutrino in complete equations; γ changes neither A nor Z), "conserve-mass-energy" (spontaneous against artificial transmutation; Po-210 and C-14 examples; Rutherford 1919; A and Z conserved, mass-energy conserved), "Analyse 6 marks" (charge and mass, ionisation by electrostatic interaction, penetration as the inverse, field deflection, the hazard reversal), Activity 1 (Ra-226 alpha, C-14 beta), Activity 2 (alpha hazard inside and outside the body), independent practice Q2(a), (b): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson15.sa.html`, SHA256 `f17baa97b8d2ee36d7e71dcaa1f9c940d0e225914277466a5f43f7c48563fd63` (recomputed 6 Nov; matches the route). Lesson 14's "explain-nuclear-stability" (alpha for A > 200, β⁻ and β⁺ by N/Z) read for the decay causes (also used in v16). Route entry: `phys-y12-m8-v14`, sections `compare-the-decay-modes`, `conserve-mass-energy`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Conserve charge/nucleon number, identify emitted particles including beta neutrinos at suitable level, and distinguish spontaneous from induced changes. Stop before decay-rate calculation." Next: "phys-y12-m8-v15: Why does half-life predict a population but not one atom?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only; the hazard point is made with a coded tissue block, never a body); the Geiger counter, the sealed source and the absorbers are painted plates (one reused, four new), scaled uniformly, never stretched; nuclei, nuclear equations, the N against Z chart, ionisation tracks, field deflection and the summary table are coded, HSC style (nuclear notation with mass number above atomic number; β⁻ written ⁰₋₁e, as on HSC papers); every nuclide and energy checked in Python against AME2020 masses and NNDC data; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts and data; Australian spelling; no em dashes. Recalled, not re-taught: v05 (strong force, positrons and neutrinos named), v09 (the neutron; Geiger counter style detection), v11 (energy levels and photons), m7-v16 (E = mc²), Module 6 (force on a moving charge in a magnetic field), Year 11 nuclear notation.

Syllabus content (Physics Stage 6 (2017), Module 8; ledger ids `P8-IQ4-01`, `P8-IQ4-04`), quoted from the route JSON `syllabusActions`:

- `P8-IQ4-01`: "analyse the spontaneous decay of unstable nuclei, and the properties of the alpha, beta and gamma radiation emitted (ACSPH028, ACSPH030)"
- `P8-IQ4-04`: "analyse relationships that represent conservation of mass-energy in spontaneous and artificial nuclear transmutations, including alpha decay, beta decay, nuclear fission and nuclear fusion (ACSPH032)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v13's final frame (the zoomed nucleus with dashed arrows "α?", "β?", "γ?"). Teaches: a source by a Geiger counter clicks at random, with no trigger; a nucleus is unstable when a lower-energy arrangement exists (too big, too many neutrons, too many protons, or excited), shown on an N against Z chart; alpha decay (U-238 → Th-234 + α; A − 4, Z − 2; very heavy nuclei); beta-minus (n → p + e⁻ + ν̄; C-14 → N-14; the electron is created, not stored; Z + 1); the antineutrino (the spread of beta energies; Pauli 1930; detected 1956); beta-plus (p → n + e⁺ + ν; F-18 → O-18 in PET; Z − 1); gamma (an excited nucleus drops a nuclear level; Co-60's beta leaves Ni-60 excited, two gamma rays; A and Z unchanged); charge, mass and ionisation; penetration as the reverse of ionisation (paper, aluminium, lead; absorber test with a Geiger counter, safety); deflection in a magnetic field; spontaneous against artificial transmutation; in every spontaneous decay the products have less mass, and the difference leaves as kinetic energy (and gamma energy), by E = mc² (qualitative). Stops before decay rates and half-life (v15), mass defect calculations (v16) and Q-value calculations (v17), electron capture (author note c), the weak interaction and quarks (later Module 8 lessons).

## Decisions

- **Learner question (route wording kept).** "What changes in a nucleus during alpha, beta and gamma decay?" The answer, built in order: an unstable nucleus has a lower-energy arrangement available and reaches it on its own (2); alpha removes two protons and two neutrons (3); beta-minus turns a neutron into a proton, creating an electron and an antineutrino (4, 5); beta-plus turns a proton into a neutron (6); gamma removes energy only (7); the emitted radiations differ in charge and mass, so in ionisation, penetration and deflection (8 to 10); the products have less mass, and the difference becomes kinetic energy (11).
- **Hook (v13's handoff; site "compare-the-decay-modes" opening).** A sealed school source near a Geiger counter: clicks at random, no trigger. The site's history of Ra-226's half-life is not used (site note 1).
- **Why nuclei decay (lesson 14 "explain-nuclear-stability", kept short; full stability argument in v16).** "A nucleus is unstable when its protons and neutrons could be arranged with less energy." Coded N against Z chart with the band of stable nuclei and four markers ("too big", "too many neutrons", "too many protons", "excited"); arrows for α (down-left two each), β⁻ (one up in Z, one down in N) and β⁺ (the reverse) appear in scenes 3, 4 and 6. The heavy-nucleus reason for alpha is one clause (many protons repelling).
- **Equations (site Stop and check, Activity 1).** α: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (site); β⁻: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄ (site); β⁺: ¹⁸₉F → ¹⁸₈O + ⁰₊₁e + ν (new; PET recalled from everyday medicine); γ: ⁶⁰₂₈Ni* → ⁶⁰₂₈Ni + γ after ⁶⁰₂₇Co → ⁶⁰₂₈Ni* + ⁰₋₁e + ν̄ (new). Each has an A tally and a Z tally that tick to equality. HSC papers write β⁻ as ⁰₋₁e (or ⁰₋₁β) and the antineutrino as ν̄ (sometimes with the subscript e); the design shows ⁰₋₁e with a "β⁻" tag and ν̄.
- **"The electron is created" (site HSC tip; common misconception).** One sentence: "It wasn't sitting in the nucleus beforehand."
- **Neutrinos "at suitable level" (route stop).** The reason for the antineutrino: beta electrons have a spread of energies (coded energy spectrum, continuous up to a maximum), so something else carries the rest; Pauli 1930, detected 1956. "No charge, and almost no mass", so no change to A or Z. Lepton number is not named (the conservation laws for particles come later in Module 8).
- **Gamma and energy levels (v11 link).** "Like an electron in a high energy level": nuclear levels are MeV apart, so gamma photons carry hundreds of thousands of times the energy of visible light photons (Co-60: 1.17 and 1.33 MeV against about 2 eV).
- **Properties (site Figure 1 and "Analyse 6 marks").** Charge and mass first (α +2, 4 u; β⁻ −1, about 1/1823 u; γ 0, no mass); ionisation from electrostatic interaction and slow speed; penetration as the reverse "because every ionisation costs energy"; typical stoppers paper (or a few centimetres of air), a few millimetres of aluminium, several centimetres of lead (reduces, never stops completely). Deflection in a magnetic field (Module 6): opposite directions for α and β⁻, β⁻ much more, γ none. The hazard reversal (gamma most hazardous outside, alpha inside) is one sentence with a coded tissue block (open decision 2).
- **Absorber test (`P8-IQ4-01` "properties"; safety).** The new plates: sealed source in a holder, Geiger counter, paper and aluminium absorbers; reused lead bricks. Safety: sealed sources handled with tongs (the tongs not drawn), kept at a distance, stored in a lead-lined box, short exposure; teacher-run.
- **Spontaneous against artificial (route stop; site "conserve-mass-energy").** Spontaneous: on its own, no trigger. Artificial (induced): hitting a nucleus with a particle such as an alpha or a neutron (Rutherford's 1919 nitrogen reaction named, calculated in v17).
- **Mass-energy (`P8-IQ4-04`, qualitative here).** In every spontaneous decay the products have slightly less total mass than the parent; the difference becomes the kinetic energy of the products and any gamma photon's energy, E = mc² (m7-v16). Numbers deferred to v16 and v17 (a screen tag gives Po-210's 5.41 MeV as a preview, site value).
- **Summary table (scene 12, a hold; site "Write the table of decay types").** Not a mnemonic: the table is what students need. Memory aid considered and not used (see "Memory aid check").
- **Attempts (original, HSC style).** A1 (2 marks): complete ²²⁶₈₈Ra alpha decay (²²²₈₆Rn) and ⁹⁰₃₈Sr beta-minus decay (⁹⁰₃₉Y + ⁰₋₁e + ν̄). Crossed: Sr-90 → ⁸⁶₃₆Kr (treating beta like alpha). A2 (3 marks, data): count rates through no absorber, paper, 5 mm aluminium and 5 cm lead (612, 610, 98, 31 counts per minute, corrected for background); identify the radiation. Answer: beta and gamma, no alpha. Crossed: "lead stops gamma, so the 31 can't be gamma". The background correction is stated on the card; how to subtract it is taught in v15.
- **Handoff (route next).** Scene 17: each decay is one nucleus at an unpredictable moment, yet a large sample halves reliably. See "Final frame".
- **Colour key (v05 and v09 keys):** protons red "p" discs; neutrons grey "n" discs; alpha particles amber circles "α" (2p + 2n inside); beta-minus electrons navy dots "e⁻"; positrons hollow rose rings "e⁺"; neutrinos and antineutrinos small grey "ν", "ν̄"; gamma photons amber wave packets "γ"; ionised atoms small grey circles with a "+" and an escaping navy dot; magnetic field ink crosses (into the page).
- **Site sources used:** lesson 15: the Geiger counter scene (1); α, β⁻, β⁺, γ equations and rules (3 to 7); Figure 1 penetration (9); "Analyse 6 marks" (8 to 10, A2); spontaneous and artificial transmutation (11); HSC tip (antineutrino; γ no change) (5, 7); Activity 1 (Ra-226, C-14; A1 uses Ra-226); Q2(b) U-238 (3). Lesson 14: decay mode by N/Z and size (2). Not used: Ra-226 half-life history (site note 1); carbon dating and medical applications (v15 or not needed); electron capture (author note c).
- **Site notes (quoted from site lesson 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. History ("compare-the-decay-modes" and "retrieve-reflect-and-finish"): "the factor predicted by t₁/₂ = 1,600 years, the value Marie Curie first determined in Paris in 1898" and "processing 10 tonnes of pitchblende to isolate 0.1 g of Ra-226, then measuring its half-life as 1,600 years using an electroscope". Curie announced radium in 1898 and isolated about 0.1 g of radium chloride in 1902; she did not determine a 1,600-year half-life in 1898. Radium-226's half-life was estimated later (about 1,700 to 2,000 years by Rutherford and Boltwood around 1911) and is now 1,600 years. Suggest removing the attribution: "Radium-226's half-life is 1,600 years."
  2. Precision ("compare-the-decay-modes"): "the average rate will decrease by exactly the factor predicted". For a finite sample the count fluctuates; suggest "by the factor predicted, within random fluctuations".
  3. Overstatement ("compare-the-decay-modes"): "They occur in very heavy nuclei (Z > 82)". Most alpha emitters are heavier than lead, but some lighter nuclides decay by alpha (for example samarium-147 and neodymium-144). Suggest "mostly in very heavy nuclei (Z > 82)".
  4. Spontaneity ("read-the-q-value" vocabulary, used again in v17): "A positive Q-value is exothermic (can occur spontaneously)". A positive Q-value is needed for a spontaneous decay, but a reaction with positive Q between two nuclei still needs them to meet (fusion needs very high temperatures). Suggest "a decay with positive Q can occur spontaneously; a reaction between particles with positive Q releases energy once it occurs".
  5. Checked and correct: U-238 → Th-234 + α; C-14 → N-14 + e⁻ + ν̄; β⁻ stopped by a few mm of aluminium; alpha about 7000 times the electron's mass (7294); the hazard reversal.
- **Cause chain taught, in order:** (1) a nucleus with a lower-energy arrangement available changes on its own (2); (2) heavy nuclei have many repelling protons, and losing an alpha particle makes them smaller (3); (3) a neutron-rich nucleus turns a neutron into a proton, creating an electron and an antineutrino (4, 5); (4) a proton-rich nucleus does the reverse (6); (5) an excited nucleus drops a level and emits a gamma photon (7); (6) larger charge and slower speed mean more ionisation, and every ionisation costs energy, so strong ionisers stop soonest (8, 9); (7) charge sign and mass set deflection in a magnetic field (10); (8) the products of a spontaneous decay have less mass, and the difference becomes kinetic energy (11).
- **Entry knowledge (route `entryKnowledge`):** Year 11 nuclear notation; v13 (the nucleus is tiny and contains protons and neutrons); v05 (positron, neutrino named); v11 (energy levels, photons); m7-v16 (E = mc²); Module 6 (charges curve in magnetic fields).
- **Learner-visible vocabulary (plain meaning at first use):** unstable nucleus (one that could be rearranged with less energy, 2); spontaneous (happens on its own, with no trigger, 2); alpha particle (two protons and two neutrons, a helium-4 nucleus, 3); beta particle (an electron or positron created and thrown out of a nucleus, 4, 6); antineutrino and neutrino (tiny neutral particles that carry off some of the energy, 5, 6); positron (the electron's antiparticle, recalled, 6); excited nucleus (one with extra energy, 7); gamma ray (a high-energy photon from a nucleus, 7); ionisation (knocking electrons off atoms, 8); penetration (how far the radiation gets through material, 9); artificial transmutation (changing a nucleus by hitting it with a particle, 11).
- **Legacy logic ported:** none. Coded family `m8-decay-population` is used only in the final frame (its limits: "No alpha/beta/gamma transformation or Q-value working"; this design adds the transformations).
- **New explainer motion:** **N against Z chart** (a band of stable nuclei with decay arrows that move a marker, 2 to 6); **nuclear equation builder** (nucleon discs regrouping into products with A and Z tallies ticking to equality, 3 to 7); **beta energy spectrum** (a continuous curve with one dashed "expected single value" line, 5); **ionisation tracks** (an alpha, a beta and a gamma crossing rows of atoms, ionised atoms marked, track length to scale for the comparison, 8, 9); **absorber line-up** (plates in a row with radiation markers stopping at each, 9); **field deflection** (three tracks curving in a magnetic field, 10); `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the nucleus or apparatus at the left or centre; equations and tallies at the right; the N against Z chart small at the upper right in scenes 3 to 7; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Stability: "could be arranged with less energy" means a nuclide with a lower total mass-energy is reachable by an allowed decay. Very long-lived alpha emitters (U-238, t½ 4.5 × 10⁹ years) are unstable but decay slowly; rates are v15.
  (b) Beta spectrum: continuous up to the Q-value (C-14: 156 keV; Sr-90: 546 keV); Pauli's letter of December 1930; Fermi's theory 1934 named the neutrino; Cowan and Reines detected reactor antineutrinos in 1956.
  (c) Electron capture (a proton-rich nucleus captures an inner electron) competes with β⁺; not taught. F-18 decays about 97% by β⁺ and 3% by electron capture.
  (d) Co-60: β⁻ to the 2.506 MeV level of Ni-60, then gamma rays of 1.173 and 1.332 MeV. Visible photons about 1.7 to 3.3 eV, so "hundreds of thousands of times" (1.33 MeV / 2 eV ≈ 6.7 × 10⁵).
  (e) Deflection: r = mv/(qB). Typical alpha (5 MeV): m = 6.64 × 10⁻²⁷ kg, v = 1.55 × 10⁷ m s⁻¹, q = 2e, so mv/q = 3.2 × 10⁻¹⁹ / 3.2 × 10⁻¹⁹ ≈ 0.32 kg m s⁻¹ C⁻¹ (in units of T m); a 1 MeV beta electron has momentum 7.6 × 10⁻²² kg m s⁻¹, so mv/q ≈ 0.0047 T m: about 70 times smaller radius. "Thousands of times lighter" is the reason given in narration; the speed difference partly offsets it (author note only).
  (f) Ranges: 5 MeV alpha about 3.5 to 4 cm in air; beta (1 to 2 MeV) a few mm of aluminium; gamma half-value thickness about 1 cm of lead at 1 MeV, so "several centimetres of lead only reduces it".
  (g) Alpha mass: m_α / m_e = 7294 ("about seven thousand" in the site; screen uses "4 u").
  (h) A2 data (invented, plausible): no absorber 612; paper 610 (no alpha); 5 mm aluminium 98 (beta stopped, gamma remains); 5 cm lead 31 (gamma reduced to about a third). Counts per minute, corrected for background.
  (i) Pronunciations: "thorium" (THOR-ee-um); "antineutrino" (anti-new-TREE-no); "Pauli" (POW-lee).
- **Open decisions for root:**
  - **1. Beta-plus depth (learning review).** One scene (F-18, PET). The HSC asks for β⁻ more often; β⁺ could shrink to one sentence if the review finds the video crowded.
  - **2. Hazard sentence (learning review).** One sentence in scene 9 ("outside the body, gamma is the danger; inside, alpha is") with a coded tissue block. Keep, or move to the notes only.
  - **3. Handoff picture (root, with v15's designer).** The final frame shows a grid of identical nuclei with a few decayed, an irregular click trace, "which next? when?" and an empty N against t axis with a dashed halving guess; v15 opens on it.

Main question: *A source clicks a Geiger counter at random, with nothing pushing it. What is actually changing inside each nucleus?*
Entry knowledge: nuclear notation (Year 11); protons, neutrons and the tiny nucleus (v13); positrons and neutrinos named (v05); energy levels (v11); E = mc² (m7-v16); charges in magnetic fields (Module 6).
Stops after: why nuclei decay, α, β⁻ with the antineutrino, β⁺, γ, the properties with the absorber test and deflection, spontaneous against artificial, mass-energy qualitatively. No rates, half-life or Q calculations.
Handoff: v15, why half-life predicts a population but not one atom.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *A*, *Z*, *N*, *α*, *β*, *γ*, *ν̄*.

### 1. hook (clicks with nothing pushing)
> At the centre of every atom is a tiny nucleus, and some nuclei don't stay the same. Put a school radioactive source near a Geiger counter, and it clicks at random moments, with nothing pushing it. Each click is one nucleus changing, and throwing something out. So what changes in a nucleus during alpha, beta and gamma **decay**?

Visual: opens on v13's final frame (see "Opening frame"); the chip becomes the heading: "What changes in a nucleus during alpha, beta and gamma decay?". On "some nuclei don't stay the same" the trembling nucleon cluster pulses. On "a school radioactive source" board change: the new sealed source plate `y12p-sealed-source-v1.png` at the left and the new `y12p-geiger-counter-v1.png` at the right, a coded count display reading "0". On "clicks at random moments" the display counts up in irregular jumps with a coded click trace (vertical ticks at uneven spacing) and small sound-wave marks. On "one nucleus changing" an inset nucleus at the source emits a marker towards the tube, timed with one click. On "decay" the heading underlines "alpha, beta and gamma".

### 2. why some nuclei change
> A nucleus is unstable when its protons and neutrons could be arranged with less energy. It might be too big, have too many neutrons, have too many protons, or simply have too much energy. It reaches a lower energy state by itself, with no trigger. That's spontaneous decay, and each type of decay fixes a different **problem**.

Visual: board change: the coded N against Z chart (x "protons, Z", y "neutrons, N"), a grey band of stable nuclei curving up from N = Z, a dashed N = Z guide. On "too big" a marker far up the band's top end, tag "too big (Z > 82)". On "too many neutrons" a marker above the band, tag "too many n". On "too many protons" a marker below the band, tag "too many p". On "too much energy" a marker on the band with a small upward energy arrow, tag "excited". On "with no trigger" chip "spontaneous: on its own". On "problem" the four tags each gain an empty slot: "α?", "β⁻?", "β⁺?", "γ?".

### 3. alpha decay
> In alpha decay, the nucleus throws out an alpha particle, two protons and two neutrons stuck together, a helium four nucleus. Uranium two three eight becomes thorium two three four. Check the top numbers: two three eight equals two three four plus four. And the bottom numbers: ninety two equals ninety plus two. It happens in very heavy nuclei, where many protons repel each other, and it lowers the mass number by four, and the atomic number by **two**.

Visual: board change: a large coded U-238 nucleus (labelled, not every nucleon drawn) at the left; the N against Z chart small at the upper right. On "an alpha particle" an amber "α" group of 2 red and 2 grey discs leaves, tag "⁴₂He". On "Uranium two three eight becomes thorium two three four" the equation builds: "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He". On "two three eight equals two three four plus four" the A tally ticks "238 = 234 + 4 ✓". On "ninety two equals ninety plus two" the Z tally ticks "92 = 90 + 2 ✓". On "many protons repel each other" small rose repulsion arrows across the big nucleus. On "two" the chart's "too big" marker steps down-left by two in each direction, tag "α: A − 4, Z − 2".

### 4. beta-minus decay
> Beta minus decay happens when a nucleus has too many neutrons. A neutron turns into a proton, and an electron is created and thrown out. That's the beta particle. It wasn't sitting in the nucleus beforehand. Carbon fourteen becomes nitrogen fourteen. The mass number stays the same, and the atomic number goes up by **one**.

Visual: board change: a coded C-14 nucleus (6 p, 8 n). On "A neutron turns into a proton" one grey "n" disc flashes and turns red "p". On "an electron is created and thrown out" a navy "e⁻" dot appears at the disc and flies out, tag "β⁻ = ⁰₋₁e". On "It wasn't sitting in the nucleus" a crossed chip "electrons stored inside the nucleus". On "Carbon fourteen becomes nitrogen fourteen" the equation builds: "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ?" (the "?" for scene 5). On "The mass number stays the same" the A tally "14 = 14 + 0 ✓"; on "one" the Z tally "6 = 7 + (−1) ✓"; the chart's "too many n" marker steps one right and one down, tag "β⁻: Z + 1, A same".

### 5. the missing particle
> There's one more particle. If only the electron came out, every beta electron would have the same energy. Instead, they come out with a whole range of energies. In nineteen thirty, Wolfgang Pauli suggested that a tiny neutral particle carries off the rest. It's now called an antineutrino, and it was finally detected in nineteen fifty six. It has no charge, and almost no mass, so it doesn't change A or **Z**.

Visual: on "the same energy" a coded energy axis with a dashed vertical line at one value, tag "expected: one value". On "a whole range of energies" a smooth hump-shaped curve rises from zero to an end point under the dashed line, tag "measured: a spread". On "Wolfgang Pauli" name tag in words only "Pauli, 1930". On "carries off the rest" a grey "ν̄" leaves the C-14 nucleus with the electron; on the spectrum a bracket between one electron's energy and the end point, tag "the rest: carried by ν̄". On "detected in nineteen fifty six" tag "detected 1956". On "Z" the equation's "?" becomes "ν̄": "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄", tags "ν̄: charge 0, almost no mass".

### 6. beta-plus decay
> Beta plus decay is the mirror image, for nuclei with too many protons. A proton turns into a neutron, giving out a positron, the electron's antiparticle, and a neutrino. Fluorine eighteen, used in hospital PET scans, becomes oxygen eighteen. The mass number stays the same, and the atomic number goes down by **one**.

Visual: a coded F-18 nucleus (9 p, 9 n). On "A proton turns into a neutron" one red "p" disc turns grey "n". On "a positron" a hollow rose "e⁺" ring leaves, tag "⁰₊₁e"; on "a neutrino" a grey "ν" leaves. On "Fluorine eighteen" the equation builds: "¹⁸₉F → ¹⁸₈O + ⁰₊₁e + ν", with a small chip "PET scans". On "one" the tallies tick "18 = 18 + 0 ✓", "9 = 8 + 1 ✓"; the chart's "too many p" marker steps one left and one up, tag "β⁺: Z − 1, A same".

### 7. gamma decay
> Gamma decay changes nothing in the count. After an alpha or beta decay, the new nucleus is often left excited, with extra energy. Like an electron dropping between atomic energy levels, it drops to a lower nuclear level, and gives out a photon. Nuclear levels are much further apart, so this gamma photon carries hundreds of thousands of times more energy than visible light. Cobalt sixty's beta decay leaves nickel sixty excited, and it gives out two gamma rays. A and Z stay the **same**.

Visual: board change: a coded nucleus with a small nuclear energy ladder beside it (MeV scale), and v11's atomic ladder small and faded at the far left (eV scale), tag "atom: eV gaps". On "left excited" the nucleus glows, a marker on the upper nuclear level. On "drops to a lower nuclear level" the marker drops and an amber "γ" packet leaves. On "hundreds of thousands of times more energy" tags "visible photon ≈ 2 eV" and "γ ≈ 1.3 MeV". On "Cobalt sixty's beta decay" the equations write: "⁶⁰₂₇Co → ⁶⁰₂₈Ni* + ⁰₋₁e + ν̄" then "⁶⁰₂₈Ni* → ⁶⁰₂₈Ni + γ (1.17 MeV, 1.33 MeV)", tag "* = excited". On "same" the tallies tick "60 = 60", "28 = 28"; the chart's "excited" marker stays put and loses its energy arrow, tag "γ: A and Z unchanged".

### 8. charge, mass and ionisation
> The three radiations behave very differently. An alpha particle has a charge of plus two, it's heavy, and fairly slow. It pulls electrons off almost every atom it passes, so it's strongly ionising. A beta particle has a charge of minus one, it's far lighter and faster, and it ionises less. Gamma rays have no charge, and ionise least of **all**.

Visual: board change: three rows of grey atom circles, one per radiation. On "plus two" an amber "α (+2, 4 u)" crosses the top row slowly; nearly every atom it passes gains a "+" and loses a navy dot. On "far lighter and faster" a navy "β⁻ (−1, ≈ 0 u)" crosses the middle row quickly, ionising about one atom in ten. On "no charge" an amber "γ (0, no mass)" crosses the bottom row, ionising one atom along the whole row. On "all" a tag down the left: "ionising: α > β > γ".

### 9. penetration: the reverse
> Every ionisation costs the radiation a bit of its energy, so the strongest ionisers stop soonest. Test it with absorbers between a source and a Geiger counter. Alpha is stopped by a sheet of paper, or a few centimetres of air. Beta gets through paper, but a few millimetres of aluminium stops it. Gamma gets through both, and several centimetres of lead only reduces it. So outside the body, gamma is the danger, but swallowed or breathed in, alpha does the most **damage**.

Visual: on "Every ionisation costs" the alpha row's track ends after a short distance, the beta's after longer, the gamma's runs off the edge, tag "more ionisation → shorter range". On "Test it with absorbers" board change to the absorber line-up: the sealed source at the left, the new paper `y12p-absorber-paper-v1.png` and aluminium `y12p-absorber-aluminium-v1.png` sheets in holders, the reused `y12p-lead-bricks-v1.png`, the Geiger counter at the right; a safety chip "sealed source, tongs, keep your distance, short exposure: teacher-run". On "a sheet of paper" amber "α" markers stop at the paper. On "a few millimetres of aluminium" navy "β" markers pass the paper and stop at the aluminium. On "several centimetres of lead only reduces it" amber "γ" markers pass both; fewer leave the lead, tag "reduced, not stopped". On "damage" a small coded tissue block: outside it, γ markers pass through it, tag "outside: γ reaches tissue"; inside it, an α marker deposits a dense cluster of "+" marks in a tiny region, tag "inside: α ionises a tiny region intensely".

### 10. deflection in a field
> A magnetic field sorts them too. Alpha and beta curve in opposite directions, because their charges have opposite signs. Beta curves far more, because it's thousands of times lighter. Gamma goes straight through, because it has no **charge**.

Visual: board change: a region of ink crosses (field into the page), a source at the left firing three tracks. On "curve in opposite directions" the amber α track curves gently up and the navy β track curves down. On "Beta curves far more" the β track tightens, tag "much lighter → tighter curve". On "charge" the amber γ track runs straight, tag "no charge: no force (Module 6)".

### 11. spontaneous or artificial, and where the energy comes from
> All of these happen spontaneously. A nucleus can also be changed on purpose, by hitting it with a particle, like an alpha particle or a neutron. That's an artificial transmutation, and we'll calculate one later. In every spontaneous decay, the products have slightly less total mass than the nucleus they came from. That missing mass becomes the products' kinetic energy, and any gamma energy, by E equals m c **squared**.

Visual: board change: two columns. Left "spontaneous" (the U-238 alpha decay icon, chip "no trigger"). On "hitting it with a particle" right "artificial (induced)": an amber α arrow hits a coded N-14 nucleus, tag "Rutherford, 1919: ⁴₂He + ¹⁴₇N → ?" (calculated in v17). On "slightly less total mass" a coded balance: the parent on one pan heavier than the products on the other, tag "products: less mass". On "kinetic energy" the alpha and the recoiling daughter move apart with teal speed arrows and orange energy bars. On "squared" chip "E = mc² (Module 7)" and a preview tag "Po-210 → Pb-206 + α: 5.41 MeV (calculated later)".

### 12. the summary table (hold about 3 seconds)
> Here's the whole picture in one table, worth copying into your book. Alpha takes four from A and two from Z. Beta minus adds one to Z. Beta plus takes one from Z. Gamma changes neither, it just carries off **energy**.

Visual: board change: the summary table, one row per decay, columns "emitted", "change in A", "change in Z", "charge", "stopped by". Rows write in turn. On "Alpha takes four from A" "α | ⁴₂He | −4 | −2 | +2 | paper". On "Beta minus adds one to Z" "β⁻ | ⁰₋₁e + ν̄ | 0 | +1 | −1 | few mm Al". On "Beta plus takes one from Z" "β⁺ | ⁰₊₁e + ν | 0 | −1 | +1 | (annihilates)". On "energy" "γ | photon | 0 | 0 | 0 | reduced by cm of lead". Hold about 3 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Complete two decay equations. Radium two two six undergoes alpha decay, and strontium ninety undergoes beta minus decay. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Complete the following nuclear equations. (a) ²²⁶₈₈Ra → ? + ⁴₂He (alpha decay) (b) ⁹⁰₃₈Sr → ? + ⁰₋₁e + ? (beta-minus decay) (2 marks)" A small periodic-table strip chip shows "86 Rn, 87 Fr, 88 Ra, 38 Sr, 39 Y, 40 Zr, 36 Kr". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Radium two two six loses four from A and two from Z, giving radon two two **two**. Strontium ninety keeps A, and Z goes up by one, to thirty nine, which is yttrium ninety, plus an **antineutrino**. The slip is treating beta like alpha, and taking four from the mass **number**.

Visual: card shrinks to the top; "alpha decay" and "beta-minus decay" underline. On "two" "(a) ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (226 = 222 + 4; 88 = 86 + 2)". On "antineutrino" "(b) ⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e + ν̄ (90 = 90 + 0; 38 = 39 − 1)". On "number" a chip "⁹⁰₃₈Sr → ⁸⁶₃₆Kr + …" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A source is tested with different absorbers in front of a Geiger counter. Use the count rates to identify the radiation it emits. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A radioactive source is placed in front of a Geiger counter, and different absorbers are placed between them. The count rates, corrected for background radiation, are shown. Identify the type or types of radiation emitted by the source. Justify your answer. (3 marks)" Table on the card: "no absorber: 612 counts per minute; paper: 610; 5 mm aluminium: 98; 5 cm lead: 31". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Paper makes almost no difference, so there's no alpha. Aluminium removes most of the count, so there's beta. Some radiation gets through the aluminium, and lead reduces it but doesn't stop it, so there's gamma **too**. The slip is thinking lead stops gamma completely, so the last count can't be **gamma**.

Visual: card shrinks to the top; the table stays; "corrected for background" underlines. On "no alpha" the paper row gets "612 → 610: no change → no α". On "there's beta" the aluminium row gets "610 → 98: most removed → β". On "too" the lead row gets "98 passes Al; lead reduces to 31, not 0 → γ". On "gamma" a chip "lead stops gamma, so 31 isn't gamma" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So each decay changes one nucleus, at a moment nobody can predict. That's why the Geiger counter clicks at random. Yet a large sample of radioactive nuclei always halves in the same time, as reliably as a clock. How can random single events add up to such a steady pattern? Why does half-life predict a population but not one **atom**?

Visual: board clears (camera change). On "one nucleus" a coded grid of identical nuclei (10 by 10, red-grey discs); one flips to a grey "decayed" ring with a small amber flash. On "clicks at random" the click trace runs along the top with uneven spacing; more nuclei flip at scattered places, each with a click. On "always halves in the same time" an empty graph at the right, axes "N" and "t", with a dashed curve sketch halving at equal steps, tag "half every t½?". On "random single events" a dashed navy marker hovers over the grid, flicking between nuclei, tag "which next? when?". On "atom" the chip "Next: why does half-life predict a population but not one atom?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Unstable nuclei decay spontaneously (no trigger) towards a lower-energy arrangement. A and Z are conserved in every equation.
2. α: ⁴₂He emitted; A − 4, Z − 2 (heavy nuclei). Example ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.
3. β⁻: n → p + e⁻ + ν̄ (too many neutrons); A same, Z + 1. Example ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄. The antineutrino explains the spread of beta energies. β⁺: p → n + e⁺ + ν; Z − 1.
4. γ: excited nucleus → lower nuclear level + photon; A and Z unchanged.
5. Ionising α > β > γ; penetrating γ > β > α (paper, a few mm Al, cm of lead reduces). Magnetic field: α and β curve opposite ways, β more; γ straight.
6. Spontaneous decay: products have less mass; the difference becomes kinetic energy (E = mc²). Artificial transmutation: a nucleus hit by a particle.

## Teaching checks

- **Does it explain causes?** Why nuclei decay (2); why heavy nuclei emit alphas (3); why there must be an antineutrino (5); why gamma follows other decays (7); why strong ionisers penetrate least (9); why the tracks curve differently (10); where the energy comes from (11).
- **Misconceptions addressed:** electrons stored in the nucleus (4); beta treated like alpha (14 crossed); lead stops gamma completely (9, 16 crossed); gamma changes the nucleus's identity (7); "most penetrating = most dangerous in every case" (9).
- **One idea at a time:** cause (2), α (3), β⁻ (4), ν̄ (5), β⁺ (6), γ (7), ionisation (8), penetration (9), deflection (10), spontaneous and artificial with energy (11).
- **Video makes it easier:** a neutron turning into a proton and an electron leaving (4); the continuous spectrum against one expected line (5); markers stepping on an N against Z chart (3 to 7); tracks ionising rows of atoms (8); markers stopping at each absorber (9).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing (the card's periodic-table strip includes distractors). One crossed mistake each; feedback about 22 s and 23 s.
- **Avoided double teaching:** positrons and neutrinos (v05), energy levels (v11), E = mc² (m7-v16), magnetic force on charges (Module 6) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ4-01`: spontaneous decay of unstable nuclei (1, 2) and the properties of α, β and γ (3 to 10). `P8-IQ4-04`: conservation in spontaneous transmutations, alpha and beta decay (A and Z tallies 3 to 7; mass-energy qualitatively 11); artificial transmutation introduced (11; calculated in v17; fission and fusion in v05, v17 and v18).
- **Out of scope by design:** half-life and activity (v15); mass defect and binding energy (v16); Q-value calculations (v17); electron capture, the weak interaction, lepton number (later Module 8 lessons).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Complete the following nuclear equations. (a) ²²⁶₈₈Ra → ? + ⁴₂He (alpha decay) (b) ⁹⁰₃₈Sr → ? + ⁰₋₁e + ? (beta-minus decay)"
Model answer: (a) ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (A: 226 = 222 + 4; Z: 88 = 86 + 2). (b) ⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e + ν̄ (A: 90 = 90 + 0; Z: 38 = 39 − 1; the antineutrino has no charge and no nucleon number). Classic mistake (crossed): ⁹⁰₃₈Sr → ⁸⁶₃₆Kr (removing a helium nucleus in a beta decay).

**Attempt 2 (scene 15; original wording and data, HSC style, 3 marks).** "A radioactive source is placed in front of a Geiger counter, and different absorbers are placed between them. The count rates, corrected for background radiation, are shown (no absorber 612 counts per minute; paper 610; 5 mm aluminium 98; 5 cm lead 31). Identify the type or types of radiation emitted by the source. Justify your answer."
Model answer: Paper causes no significant drop (612 to 610), so no alpha is emitted. Aluminium removes most of the count (to 98), so beta is emitted. Radiation still passes 5 mm of aluminium and is reduced but not stopped by 5 cm of lead (31), which only gamma can do, so gamma is also emitted. The source emits beta and gamma. Classic mistake (crossed): "lead stops gamma, so the 31 can't be gamma".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Alpha | ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He: 238 = 234 + 4; 92 = 90 + 2 (Q = 4.27 MeV, AME2020; not shown) | 3 |
| Beta-minus | ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄: 14 = 14 + 0; 6 = 7 − 1 (Q = 0.156 MeV) | 4, 5 |
| Beta-plus | ¹⁸₉F → ¹⁸₈O + ⁰₊₁e + ν: 18 = 18 + 0; 9 = 8 + 1 (Q = 0.634 MeV) | 6 |
| Gamma | ⁶⁰₂₇Co → ⁶⁰₂₈Ni* + ⁰₋₁e + ν̄; ⁶⁰₂₈Ni* → ⁶⁰₂₈Ni + γ: 1.17 and 1.33 MeV; visible photon about 2 eV; ratio about 6.7 × 10⁵ | 7 |
| Dates | Pauli 1930; antineutrino detected 1956; Rutherford 1919 | 5, 11 |
| Charges and masses | α +2, 4 u (m_α/m_e = 7294); β⁻ −1, 1/1823 u; γ 0 | 8, 12 |
| Po-210 preview | 5.41 MeV (site; AME2020 5.408 MeV) | 11 |
| A1 | ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He; ⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e + ν̄; wrong ⁸⁶₃₆Kr | 13, 14 |
| A2 data | 612, 610, 98, 31 counts per minute (corrected) | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `nuclear.py` in the session scratchpad folder `m8v12-17-designer`) with AME2020 atomic masses; Codex to re-check.

- Q(U-238 α) = (238.050788 − 234.043601 − 4.002603) × 931.5 = 4.27 MeV.
- Q(C-14 β⁻) = (14.003242 − 14.003074) × 931.5 = 0.156 MeV (atomic masses; the electron is included in the daughter atom's count).
- Q(F-18 β⁺) = (18.000937 − 17.999160 − 2 × 0.000549) × 931.5 = 0.634 MeV.
- Q(Ra-226 α) = 4.87 MeV; Q(Sr-90 β⁻) = 0.544 MeV.
- Q(Po-210 α) = (209.982874 − 205.974465 − 4.002603) × 931.5 = 5.408 MeV.
- 1.332e6 / 2 = 6.66e5.

## Memory aid check

- **No memory aid used.** The summary table (12) is the tool students need; the site asks them to "write the table of decay types". **Considered, not used:** "paper, aluminium, lead" as a chant (it is already a list, and a chant hides that gamma is only reduced by lead); "alpha is a bowling ball, beta a bullet, gamma a ghost" (the ghost image suggests gamma does nothing).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,606 characters**, 18 scenes. Characters per scene (1 to 18): 325, 323, 451, 320, 407, 313, 486, 342, 470, 238, 418, 213, 153, 265, 161, 298, 331, 75. At 13.3 characters per second the speech is about 422 s; add about 3 s for the table hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 82 s of holds and countdowns): **about 504 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's "hundreds of thousands" sentence (keep the tags); scene 6 to one sentence (open decision 1); scene 9's hazard sentence (open decision 2).

## Opening frame

v13's final frame (designed in this wave, `phys-y12-m8-v13.md`): paper background; heading "Why do orbital probabilities replace literal electron paths?"; at the left a large soft teal 1s cloud with a small red nucleus dot at its centre; a zoom inset at the right, joined to the nucleus by two thin guide lines, showing a cluster of red "p" and grey "n" discs (tag "not to scale"), trembling slightly; scale tag "atom ≈ 10⁻¹⁰ m, nucleus ≈ 10⁻¹⁵ m"; three dashed arrows leaving the cluster, labelled "α?", "β?" and "γ?"; chip "Next: what changes in a nucleus during alpha, beta and gamma decay?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "What changes in a nucleus during alpha, beta and gamma decay?"; at the left a coded 10 by 10 grid of identical nuclei (red-grey discs), about a dozen flipped to grey "decayed" rings at scattered places; along the top an irregular click trace (vertical ticks at uneven spacing); a dashed navy marker hovering over the grid, tag "which next? when?"; at the right an empty graph with axes "N" and "t" and a dashed curve sketch halving at equal steps, tag "half every t½?"; chip "Next: why does half-life predict a population but not one atom?". v15 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v14` (route phys-y12-m8-v14). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v14` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v14` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, why-unstable, alpha, beta-minus, antineutrino, beta-plus, gamma, ionisation, penetration, deflection, spontaneous-artificial, summary-table, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except summary-table (`hold` after its rows write), attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: N against Z chart, nuclear equation builder, beta energy spectrum, ionisation tracks, absorber line-up, field deflection, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change (chart shrinks to the corner); 3 to 4 to 5 to 6 camera continue with the nucleus swapped; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue, then clear change to the bench; 9 to 10 clear change; 10 to 11 clear change; 11 to 12 clear change to the table; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: summary table (3 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v14-learning-review.md`, `science_check` = `checks/p-y12-m8-v14-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `y12p-lead-bricks-v1.png` (requested by v09): 9.
- **Checked, not used:** `public/assets/physics/phys-y11-gamma-source-v1.png` (1312 × 1199, RGBA; inspected 6 Nov: a large bolted industrial shielding pot with a window, which would misrepresent a school sealed source); `public/assets/physics/phys-y11-paper-sheet-flat-v1.png` (2172 × 724, RGBA; inspected 6 Nov: a sheet lying flat in perspective, which cannot stand in a beam line); `public/assets/physics/phys-y11-metal-plate-v1.png` (an electroscope plate with an insulating handle, not an absorber); `y12p-ionisation-chamber-v1.png` (v09; a different detector).

Need (new plates):
1. `y12p-sealed-source-v1.png`: 1, 9, 10 (small).
2. `y12p-geiger-counter-v1.png`: 1, 9.
3. `y12p-absorber-paper-v1.png`: 9.
4. `y12p-absorber-aluminium-v1.png`: 9.

Coded: nuclei and nucleons, decay markers, the N against Z chart, equations and tallies, the energy spectrum, energy ladders, atom rows and ionisation marks, tracks, the field region, the tissue block, the balance, the summary table, the nuclei grid and click trace, the count display, chips, countdowns, key notes board.

Kit gaps (for the v14 build brief):
1. **N against Z chart.** A schematic band of stable nuclei with markers that step by decay vectors (α: −2, −2; β⁻: +1 in Z, −1 in N; β⁺: the reverse; γ: none). Schematic, not a plotted nuclide chart (label "schematic").
2. **Nuclear equation builder.** Nuclide symbols with A and Z that assemble from disc groups, with A and Z tallies that tick to equality.
3. **Absorber line-up.** Plates placed on one beam line with radiation markers that stop at, pass or thin out at each plate.

## Codex asset brief

All new plates painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges, no text, no labels, no glow, no radiation trefoil symbols, no warning stickers with writing), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, object centred with even margins, soft shadow inside the alpha only. No people, no hands, no faces.

1. **`y12p-sealed-source-v1.png`** (new). A school sealed radioactive source: a short metal rod (about 5 cm) with a small recessed disc-shaped window at one end, held horizontally in a simple grey metal source holder on a small stand, the window facing right. Side view. Sidecar anchors: window centre.
2. **`y12p-geiger-counter-v1.png`** (new). A Geiger-Müller tube (a slim metal cylinder with a thin end window facing left, in a small clamp on a stand) connected by a grey cable to a small bench counter box with a blank dark rectangular display (no digits; the count is coded on top) and two plain knobs. Side view. Sidecar anchors: tube window centre; display rectangle corners.
3. **`y12p-absorber-paper-v1.png`** (new). A single sheet of plain white paper held upright in a small slotted wooden block, edge-on to the viewer at a slight angle so its face is visible. Sidecar anchors: sheet centre.
4. **`y12p-absorber-aluminium-v1.png`** (new). A thin (about 5 mm) square sheet of brushed aluminium held upright in a matching slotted wooden block, same angle and scale as the paper plate. Sidecar anchors: sheet centre.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the stability statement (author note a); every equation balanced; the electron created in β⁻; the continuous beta spectrum and the antineutrino; β⁺ for proton-rich nuclei; gamma from nuclear levels, Co-60 energies; charge, mass and ionisation order; penetration and the stoppers (author note f); deflection directions and "beta curves far more" (author note e); the hazard sentence; products of spontaneous decay having less mass.
3. Confirm HSC notation: ⁰₋₁e for β⁻, ⁰₊₁e for β⁺, ν̄ and ν, ⁴₂He for α.
4. Confirm the history: Pauli 1930; antineutrino detection 1956; Rutherford 1919; site note 1 on radium.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording and data, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the hazard point uses a coded tissue block); scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Alpha, Beta and Gamma Decay: What Changes in the Nucleus? | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html

A radioactive source clicks a Geiger counter at random. See what changes inside each nucleus in alpha, beta-minus, beta-plus and gamma decay, how to balance every decay equation, why beta decay needs an antineutrino, and why alpha ionises most but penetrates least. Then see where the energy of each decay comes from. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the spontaneous decay of unstable nuclei, and the properties of the alpha, beta and gamma radiation emitted (ACSPH028, ACSPH030)"
"analyse relationships that represent conservation of mass-energy in spontaneous and artificial nuclear transmutations, including alpha decay, beta decay, nuclear fission and nuclear fusion (ACSPH032)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why orbital probabilities replace literal electron paths. Next: why half-life predicts a population but not one atom.

#HSCPhysics #Physics #RadioactiveDecay #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13 and Year 11 notation; check that the N against Z chart helps rather than crowds; that the antineutrino reason is followable; that the absorber test and the hazard sentence fit one scene; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The neutron turning into a proton, the continuous spectrum and the markers stopping at each absorber carry the explanation; judge them at playback speed in the voiced preview.
