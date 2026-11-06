# Year 12 Physics M7 V16: Mass-energy equivalence. How does mass-energy accounting explain fusion, annihilation and combustion? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,750 characters, 17 scenes, about 503 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v15's final frame. Last video of Module 7.

Scope: sixteenth and last video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson14.sa.txt`, hash checked against the live file; contents listed in `phys-y12-m7-v15.md`): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v16`, sections `mass-energy-equivalence`, `compare-combustion-and-fusion`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare mass changes and E=mc squared in all three named cases with consistent systems and units. Stop before detailed nuclear binding calculations." Next: "phys-y12-m8-v01: How did cooling radiation allow matter to form in the early Universe?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (no PET-scan patients; annihilation is shown as particles); particles, photons, energy and mass bars, the log-scale comparison and calculation strips are coded, HSC style; the Sun, the power station, the balance and the fuel can are painted plates (one new, three reused), scaled uniformly, never stretched; every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹, m_e = 9.109 × 10⁻³¹ kg, 1 eV = 1.602 × 10⁻¹⁹ J; data-sheet symbol E = mc²; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v15 (momentum and energy grow near c; rest mass m₀ is invariant), v10 and v11 (photons, E = hf, the electron volt), Year 11 (conservation of energy and momentum, power as energy per second, atoms and nuclei).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-04`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-04`: "Use Einstein’s mass–energy equivalence relationship E=mc^(2) to calculate the energy released by processes in which mass is converted to energy, for example: (ACSPH134)" "production of energy by the sun", "particle–antiparticle interactions, eg positron–electron annihilation", "combustion of conventional fuel"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v15's final frame (the probe at rest with "energy at rest? E = mc²", the Sun losing about 4 million tonnes per second). Teaches: E = mc² and rest energy; the size of c² (9.0 × 10¹⁶ J kg⁻¹; 1 kg would run a 1 GW station for about 2.9 years); the accounting rule (a system that gives out energy E loses mass Δm = E/c²; total energy is conserved; "mass converted to energy" means mass carried away with the energy); the Sun (3.8 × 10²⁶ W → 4.2 × 10⁹ kg s⁻¹; fusion of hydrogen to helium, 0.7% of the mass, about 6.0 × 10¹¹ kg of hydrogen a second); electron-positron annihilation at rest (1.64 × 10⁻¹³ J; two photons of 8.20 × 10⁻¹⁴ J = 0.51 MeV each, opposite directions for momentum); combustion (44 MJ per kg of petrol; Δm = 4.9 × 10⁻¹⁰ kg; the system is petrol plus oxygen, 4.5 kg; about 1 part in 10¹⁰); the three fractions compared on a log scale; why (electron rearrangement, eV, against nuclear rearrangement, MeV); why chemists saw mass as conserved. Stops before binding energy per nucleon, mass defects from atomic masses and fission calculations (route "stop before detailed nuclear binding calculations"; Module 8).

## Decisions

- **Learner question (route wording kept).** "How does mass-energy accounting explain fusion, annihilation and combustion?" The answer is one rule applied three times: when a system gives out energy E, its mass falls by E/c² (3); the size of the fraction depends on the process, from all of it (annihilation) to 0.7% (fusion) to about 10⁻¹⁰ (combustion) (4 to 9), because nuclear rearrangements involve about a million times more energy per particle than chemical ones (9).
- **Hook (site lesson 14 predict, "The Sun loses about 4 million tonnes of mass every second. Where does this mass go?").** 3 s prediction chips: "blown away as gas", "energy leaves as light", "destroyed". Answer: the 4 million tonnes is the mass equivalent of the energy radiated by light (and neutrinos). Revision 2 (brief 191 should fix): the narration no longer says the mass is "carried off by the light itself"; photons carry energy and momentum, and the Sun's (system's) rest mass falls because that energy leaves. The solar wind is a separate, smaller loss and is not mentioned (author note a).
- **E = mc² (data sheet).** Rest energy defined; "mass and energy are equivalent". c² = 9.0 × 10¹⁶ J kg⁻¹; 1 kg against a 1 GW station: 9.0 × 10⁷ s = 2.9 years (site "large power station running for several years", made exact).
- **Accounting rule (route "consistent systems"; site "Analyse 7 marks" step 7: "In neither case is mass destroyed... what falls is the rest mass of the products relative to the reactants").** A coded system boundary (dashed box) is drawn around each case; energy crossing it outwards lowers the mass inside by E/c². The syllabus phrase "mass is converted to energy" is linked to this in one sentence. Revision 2 (brief 191 should fix): Revision 1's "the mass is carried away with the energy" and the "mass sliver riding on photon packets" mixed v15's invariant rest mass with the older energy-equivalent mass. Now: total energy is conserved; the system's rest mass falls by E/c² because energy leaves; the photons carry energy and momentum and are tagged so; no photon is shown carrying a slice of rest mass (author note g).
- **Sun (site "mass-energy-equivalence"; "Analyse 7 marks" step 6).** P = 3.8 × 10²⁶ W (site value); Δm per second = 3.8 × 10²⁶ / 9.0 × 10¹⁶ = 4.2 × 10⁹ kg ("about four million tonnes"). Fusion: four hydrogen nuclei become one helium nucleus through several steps (net); the products have about 0.7% less mass (site); hydrogen fused per second = 4.2 × 10⁹ / 0.007 = 6.0 × 10¹¹ kg. Two calculation stages, the first result kept for the second. Neutrinos named once (site "carried away as photons and neutrinos"). No atomic-mass calculation (route stop).
- **Annihilation (syllabus example; site "Particle-antiparticle annihilation").** Antiparticle defined (same mass, opposite charge); positron named. At rest: total rest energy 2m_ec² = 1.64 × 10⁻¹³ J; two photons, opposite directions (momentum conservation, Year 11); each 8.20 × 10⁻¹⁴ J = 5.12 × 10⁵ eV, said "about zero point five one MeV" (author note b: 0.511 MeV with exact constants). MeV defined in a clause ("a million electron volts"). The two-photon reason uses momentum, not a formula. One application sentence: PET scanners detect the photon pairs (a coded detector ring only; no patient or bed drawn; owner rule).
- **Combustion (site "compare-combustion-and-fusion" worked comparison, 44 MJ kg⁻¹ petrol, kept).** Δm = 44 × 10⁶ / 9.0 × 10¹⁶ = 4.9 × 10⁻¹⁰ kg. Consistent system (route): the reacting system is the petrol plus the oxygen it uses (octane needs 3.5 kg of oxygen per kg; 4.5 kg in total), so the fraction is 4.9 × 10⁻¹⁰ / 4.5 = 1.1 × 10⁻¹⁰ ("about one part in ten billion"). This differs from the site's per-kilogram-of-fuel fraction (site note 1).
- **Comparison (site Figure 3, log scale).** Three bars (the site's fission bar is shown greyed with "not in this video" to keep the comparison to the syllabus's three named cases; author note c): combustion about 10⁻¹⁰; fusion 7 × 10⁻³; annihilation 1. Cause: chemical changes rearrange electrons (a few eV per bond; Revision 2, brief 191 optional: "per bond", since the running octane example releases about 52 eV per molecule, author note h), nuclear changes rearrange nucleons (millions of eV) (site "Analyse 7 marks" step 5). No binding-energy numbers (route stop).
- **Why mass looked conserved (site "Analyse 7 marks" step 3: "why chemists could treat mass as conserved for two centuries").** Painted top-pan balance plate with the reading unchanged to its last digit. Revision 2 (brief 191 should fix): the claim is scoped to an ordinary school or laboratory balance ("far too small for an ordinary laboratory balance to detect"; feedback 2 "far too small for an ordinary balance"), not a universal measurement limit.
- **Memory aid (scene 11): "Energy out, mass down: Δm = E/c²."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a star radiating 1.5 × 10²⁷ W: Δm = 1.7 × 10¹⁰ kg each second; hydrogen fused 2.4 × 10¹² kg s⁻¹ at 0.7%. Crossed: Δm = E/c = 5.0 × 10¹⁸ kg (dividing by c, not c²). A2 (3 marks, evaluate): methane 55 MJ kg⁻¹ (site Stop and Check value); "the products of burning have exactly the same mass as the reactants". Δm = 6.1 × 10⁻¹⁰ kg per kg of methane; not exactly the same, but undetectable. Crossed: "true: chemical reactions do not change mass".
- **Significant figures.** Two figures throughout (site values have two).
- **Handoff (route next; Module 8 v01 "How did cooling radiation allow matter to form in the early Universe?").** Scene 16 runs annihilation backwards: two energetic photons meeting head-on create an electron-positron pair (pair production), needing at least 0.51 MeV each in this symmetric, head-on, equal-energy case (Revision 2, brief 191 optional; the general two-photon threshold depends on the collision angle and the product of the energies, author note i); a coded hot early-Universe field of photons with a falling temperature bar; chip "Next: how did cooling radiation allow matter to form in the early Universe?". See "Final frame".
- **Colour key (relativity, root decision 1, as v12 to v15; energy amber):** mass grey-blue bars; energy amber; photons amber packets; electrons navy, positrons rose; the system boundary a dashed ink box; crossed predictions red.
- **Colour key (Revision 2, fixed for every scene).** As above; momentum arrows amber outline; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (energy amber, mass grey-blue).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4, 5, 7, 8 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 3 energy-out slider: E and Δm; the balance display) about 52 px; chart and ledger labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The painted Sun `phys-y11-sun-v1.png` (inspected) fills the centre left from the first beat of scene 1 (about 500 px) and carries 4, 5 and 16; the painted fuel can `y12p-fuel-can-v1.png` (brief 191, inspected 7 Nov: red plastic jerry can, black cap, no text) carries 8 and 16; the power station and top-pan balance plates carry 2 and 10.
- **Simulation (Revision 2).** The core live control is scene 3's energy-out slider on the system box: E steps 9.0 × 10⁷, 9.0 × 10¹⁰, 9.0 × 10¹³ and 9.0 × 10¹⁶ J while amber packets leave in proportion and the live readout Δm = E/c² updates (1.0 × 10⁻⁹ kg, 1.0 × 10⁻⁶ kg, 1.0 × 10⁻³ kg, 1.0 kg) against a log-scaled mass bar; the ledger "inside + outside = constant" stays fixed. The annihilation event (6, 7) and the log chart (9) are the other live elements.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the painted Sun plate tinted as "a star" with outgoing packets; A2: a coded gas burner flame under a dashed system box "methane + oxygen"). On the answer side the card shrinks to the top, a givens strip lists the data, the system box carries the answer (packets out, mass bar down), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 14: predict (Sun's 4 million tonnes) (1); vocabulary (rest energy, mass-energy equivalence) (2, 3); "mass-energy-equivalence" (1 kg = 9 × 10¹⁶ J, fusion 0.7%, 4 million tonnes, annihilation 511 keV, pair creation) (2, 4 to 7, 16); "compare-combustion-and-fusion" (44 MJ, 4.9 × 10⁻¹⁰ kg, eV against MeV) (8, 9); Figure 3 (log comparison) (9); "Analyse 7 marks" (without exception, chemists' conservation, binding-energy ratio, Sun from 3.8 × 10²⁶ W, conservation statement) (3, 4, 9, 10); Stop and Check methane 55 MJ (A2); MC 0.49 μg (8). Not used: fission and Trinity numbers (route stop on nuclear detail; a fission bar is greyed only), the energy-momentum relation and kinetic-energy formulas (extension), the accelerator worked example (v15).
- **Site notes (quoted from site lesson 14, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; v15 lists notes 1 to 4 on the same lesson):**
  5. Inconsistent systems (new): "compare-combustion-and-fusion" step 2 compares combustion's 4.9 × 10⁻¹⁰ (per kilogram of petrol only) with fusion's 0.7% (of all the reacting hydrogen) and concludes fusion converts "roughly 14 million times the fraction". Combustion's reactants also include about 3.5 kg of oxygen per kg of octane, so the fraction of the reacting mass is about 1.1 × 10⁻¹⁰ and the ratio about 6 × 10⁷. Suggest stating the system ("per kilogram of fuel, not counting oxygen") or comparing per kilogram of reactants.
  6. Precision (new): "Particle-antiparticle annihilation: ... converting their entire rest mass into two gamma-ray photons ... Each photon carries energy mc² = 511 keV." Each photon carries m_ec² only when the pair annihilates at (or near) rest; at higher energies the photons share the extra kinetic energy. Suggest "for an electron and positron at rest, each photon carries 511 keV".
  7. Check (new): Activity 2 "the annual electricity output of Australia (~200 TWh)". Recent annual generation is about 265 to 275 TWh. Suggest "about 270 TWh" with a source year, or "a few hundred TWh".
  8. Checked and correct: 9 × 10¹⁶ J per kg; 0.7%; 3.8 × 10²⁶ W → 4.2 × 10⁹ kg s⁻¹; 44 MJ → 4.9 × 10⁻¹⁰ kg; 0.09% for fission; Trinity 0.98 g; methane 6.1 × 10⁻¹⁰ kg.
- **Cause chain taught, in order:** (1) mass has rest energy mc² (2); (2) so a system that gives out energy E loses mass E/c², and total energy is conserved (3); (3) the Sun radiates 3.8 × 10²⁶ J each second, so it loses 4.2 × 10⁹ kg each second (4); (4) fusion makes helium with 0.7% less mass than the hydrogen, and that mass leaves as radiation (5); (5) in annihilation all the rest mass leaves as two photons, in opposite directions to conserve momentum (6, 7); (6) combustion releases energy too, so the products are lighter, by only about 10⁻¹⁰ (8); (7) the scale differs because nuclear rearrangements involve about a million times more energy per particle than chemical ones (9); (8) so chemistry never noticed the mass change (10).
- **Entry knowledge (route `entryKnowledge`):** v15 (rest mass invariant; energy grows with speed); v10 and v11 (photons, eV); Year 11 (energy and momentum conservation, power, nuclei and electrons).
- **Learner-visible vocabulary (plain meaning at first use):** rest energy (the energy an object has because of its mass, even at rest, 2); system (the things inside a boundary you choose, 3); fusion (light nuclei joining into a heavier one, 5); neutrino (a tiny, almost massless particle that rarely interacts, 5); antiparticle (same mass, opposite charge, 6); positron (6); annihilation (6); MeV (a million electron volts, 7); pair production (16).
- **Legacy logic ported:** none. No coded family covers mass budgets (`m7-energy` limits say "no nuclear reaction mechanism, mass budget"); new coded mass-energy bars are needed.
- **New explainer motion:** **system boundary and mass-energy ledger** (a dashed box; a grey-blue mass bar inside and amber energy packets crossing out; the mass bar drops by the matching amount with a "Δm = E/c²" readout); **fusion step** (four hydrogen nuclei (single rose protons) merging through a schematic multi-step arrow into one helium nucleus (two protons, two neutrons), with a mass bar comparison "4 H" against "He" showing a 0.7% sliver); **annihilation event** (navy electron and rose positron meeting, two amber gamma packets leaving in opposite directions, momentum arrows cancelling); **log-scale bars** (three bars from 10⁻¹⁰ to 1); **pair production** (handoff, reversed annihilation); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the case (Sun, particles, fuel can) at the left inside its system box; the ledger and algebra at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The Sun's luminosity is 3.83 × 10²⁶ W; mass loss by radiation (photons and neutrinos) is about 4.3 × 10⁹ kg s⁻¹; the solar wind removes a further 1 to 2 × 10⁹ kg s⁻¹ of actual matter. The hook's "carried off as light" answers where the 4 million tonnes goes; it does not claim the Sun loses no gas.
  (b) m_ec² = 9.109 × 10⁻³¹ × (3.00 × 10⁸)² = 8.198 × 10⁻¹⁴ J = 0.512 MeV with data-sheet values; 0.511 MeV with exact c and e. The video says "about zero point five one MeV".
  (c) Fission (0.09%) is not one of the syllabus's three named examples; it appears in Module 8's nuclear content. Its greyed bar on the log chart is optional (open decision 2).
  (d) Fusion 0.7%: 4 × m(¹H atom) − m(⁴He atom) = 0.0287 u out of 4.031 u (0.71%); about 2% of the released energy leaves as neutrinos. Not on screen (route stop).
  (e) Octane: C₈H₁₈ + 12.5 O₂ → 8 CO₂ + 9 H₂O; 12.5 × 32.0 / 114.2 = 3.50 kg O₂ per kg. Petrol's 44 MJ kg⁻¹ is a lower heating value; the higher value (about 47 MJ kg⁻¹) changes nothing at two figures.
  (f) Pronunciations: "E equals m c squared"; "delta m"; "MeV" as "M E V" or "mega electron volts" (narration says "MeV" once after defining it); "positron".
  (g) Invariant mass (Revision 2): a single photon has zero rest mass; it carries energy E and momentum E/c. A system's rest (invariant) mass falls by E/c² when energy E leaves it. A two-photon system can have non-zero invariant mass, but no individual photon carries "a mass E/c²". The learner copy says only that the system's mass falls because energy leaves.
  (h) Octane: 44 MJ kg⁻¹ × 0.11423 kg mol⁻¹ / 6.022 × 10²³ = 8.35 × 10⁻¹⁸ J per molecule = 52 eV; that molecule breaks and makes about 25 bonds, a few eV each. Hence "a few electron volts per bond".
  (i) Pair production (Revision 2): for two photons the threshold is E₁E₂(1 − cos θ) ≥ 2(m_ec²)²; for a head-on collision (θ = 180°) with equal energies, each needs at least m_ec² ≈ 0.51 MeV. The scene shows that symmetric case and says "meeting head-on"; the tag "head-on, equal energies" sits under the "≥ 0.51 MeV each" tag.
- **Open decisions for root:**
  - **1. Consistent-system fraction for combustion (root, science check).** This design divides by the 4.5 kg of reacting petrol plus oxygen (route "consistent systems"), giving about 10⁻¹⁰ and a fusion/combustion ratio of about 6 × 10⁷, against the site's 4.9 × 10⁻¹⁰ and 1.4 × 10⁷ (site note 5). Keep, or follow the site's per-kilogram-of-fuel comparison with an explicit "not counting oxygen" tag.
  - **2. Greyed fission bar (root).** Keep as context (it is on the site's chart) or remove so the chart shows only the syllabus's three cases.
  - **3. Plate `y12p-fuel-can-v1`.** Closed: delivered in brief 191 and inspected (7 Nov).
  - **4. Module 8 join (root).** m8-v01's "Opening frame" matches this final frame (brief 191 joins). Revision 2 adds one small grey tag "head-on, equal energies" under "≥ 0.51 MeV each"; m8-v01's opening description should add it (or its scene 1 fades it with the system boxes). Nothing else in the join changes.

Main question: *The Sun loses four million tonnes a second, and burning petrol makes its products lighter. How can one equation explain both?*
Entry knowledge: rest mass invariant (v15); photons and the eV (v10, v11); conservation of energy and momentum (Year 11).
Stops after: E = mc², the accounting rule, the Sun's mass loss and fusion, annihilation, combustion, the comparison and its cause. No binding-energy calculations.
Handoff: Module 8 v01, how cooling radiation allowed matter to form in the early Universe.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *E*, *m*, *c*, *Δm*.

### 1. hook (four million tonnes a second)
> Here's the Sun. It shines with a power of about three point eight times ten to the twenty six watts, and to do that, it loses about four million tonnes of mass every second. Where does that mass go? Make your **prediction**. That four million tonnes isn't gas blowing away. It's the mass equivalent of the energy that light carries away. So how does mass-energy accounting explain fusion, annihilation and **combustion**?

Visual: opens on v15's final frame (see "Opening frame"); the probe and gauges fade; the Sun plate `phys-y11-sun-v1.png` moves to the centre left and grows to about 500 px; the chip becomes the heading: "How does mass-energy accounting explain fusion, annihilation and combustion?". On "three point eight times ten to the twenty six watts" amber light packets stream outwards, tag "P ≈ 3.8 × 10²⁶ W". On "four million tonnes of mass every second" tag "loses ≈ 4 million tonnes per second". On "prediction" a 3 s `Countdown` beside chips "blown away as gas", "energy leaves as light", "destroyed". On "the mass equivalent of the energy that light carries away" the "energy leaves as light" chip ticks and "destroyed" is crossed in red; a dashed system box draws round the Sun and its grey-blue mass bar dips; amber hand tag "energy out, Sun's mass down" with an amber pen arrow along the packets. On "combustion" the heading's three process names underline in turn.

### 2. E = mc²
> Einstein's other famous result from relativity is E equals m c squared. Mass and energy are equivalent. Any mass m has a rest energy, m c squared, even sitting still. And c squared is enormous, nine times ten to the sixteen joules for every kilogram. One kilogram's rest energy could run a one gigawatt power station for almost three **years**.

Visual: board change. On "E equals m c squared" the equation strip "E = mc²" (data sheet). On "rest energy" the probe from v15 at rest with its grey energy bar filling, tag "rest energy = mc² (p = 0)". On "nine times ten to the sixteen joules for every kilogram" chip "c² = (3.00 × 10⁸)² = 9.0 × 10¹⁶ J kg⁻¹". On "years" the painted power station `phys-y11-power-station-v2.png` (about 600 px wide) with a working line (44 px) "1 GW: (9.0 × 10¹⁶ J) / (1.0 × 10⁹ W) = 9.0 × 10⁷ s ≈ 2.9 years", framed; amber hand tag "one kilogram!".

### 3. the accounting rule
> Here's the accounting rule. Draw a boundary around a system. If the system gives out energy E, as light, heat or fast-moving particles, its mass goes down by delta m equals E over c **squared**. If it takes in energy, its mass goes up. Total energy, counting rest energy, is always conserved. So when we say mass is converted to energy, nothing is destroyed. The system's mass falls because energy **leaves**.

Visual: camera continue: the system boundary fills the left half: a dashed ink box (about 600 px) with a grey-blue mass bar inside, and under it the live energy-out slider with readouts (52 px) "E out = ... J" and "Δm = ... kg". On "gives out energy E" amber packets cross the boundary outwards. On "squared" `AlignedAlgebra` "Δm = E / c²" in a dark-ink frame (56 px), and the slider steps 9.0 × 10⁷, 9.0 × 10¹⁰, 9.0 × 10¹³, 9.0 × 10¹⁶ J: the packet stream thickens and the readout shows Δm = 1.0 × 10⁻⁹, 1.0 × 10⁻⁶, 1.0 × 10⁻³, 1.0 kg as the log-scaled mass bar drops; grey-blue hand tag "÷ 9.0 × 10¹⁶". On "If it takes in energy" packets enter and the bar rises the same step. On "always conserved" a ledger at the right "inside: mc²" + "outside: E" = "total (constant)", ink pen bracket. On "leaves" amber tags on the outgoing packets "energy + momentum" and a grey-blue tag on the box "system's mass falls"; a chip "mass is destroyed" is crossed in red.

### 4. the Sun: mass lost each second
> First, the Sun. The system is the Sun, and the energy leaving each second is three point eight times ten to the twenty six joules. So delta m equals E over c squared. Three point eight times ten to the twenty six, over nine times ten to the sixteen, is four point two times ten to the nine kilograms, every **second**. That's about four million **tonnes**.

Visual: board change to the working layout, the Sun inside a dashed system box at the top left. Task strip: "Find the Sun's mass loss each second." Equation strip: "E = mc² → Δm = E/c²". Givens grouped: "P = 3.8 × 10²⁶ W → E = 3.8 × 10²⁶ J each second" (Sun, site value), "c = 3.00 × 10⁸ m s⁻¹" (data sheet). On "So delta m equals E over c squared" `AlignedAlgebra` "Δm = (3.8 × 10²⁶) / (9.0 × 10¹⁶)" (52 px). On "second" "= 4.2 × 10⁹ kg each second" in a dark-ink frame (56 px); beside it a chip "Δm = (3.8 × 10²⁶) / (3.00 × 10⁸) = 1.3 × 10¹⁸ kg" fades in and is crossed in red, red hand tag "c², not c". On "tonnes" grey-blue hand tag "≈ 4.2 million tonnes (1 t = 1000 kg)".

### 5. where the Sun's energy comes from
> Where does that energy come from? Fusion in the Sun's core. Through several steps, four hydrogen nuclei become one helium nucleus. The helium has about zero point seven per cent less mass than the four hydrogens, and the energy matching that missing mass leaves as light, and as tiny particles called neutrinos. So to lose four point two times ten to the nine kilograms a second, the Sun must fuse about six times ten to the eleven kilograms of hydrogen every **second**.

Visual: "Δm = 4.2 × 10⁹ kg s⁻¹" stays at the top; stage 1 fades. On "Fusion in the Sun's core" the fusion step draws: four rose "¹H" nuclei at the left. On "four hydrogen nuclei become one helium nucleus" a schematic multi-step arrow (labelled "several steps") leads to one "⁴He" nucleus (two rose protons, two grey neutrons). On "about zero point seven per cent less mass" two mass bars, "4 × ¹H" and "⁴He", with a thin sliver gap labelled "0.7%". On "light, and as tiny particles called neutrinos" amber packets and small grey "ν" dots leave the helium, tag "neutrinos: tiny, almost massless"; amber pen arrow from the 0.7% sliver to the outgoing packets, hand tag "energy out". On "second" `AlignedAlgebra` "hydrogen fused = (4.2 × 10⁹) / 0.007 ≈ 6.0 × 10¹¹ kg each second" (52 px) in a dark-ink frame, tag "≈ 600 million tonnes".

### 6. annihilation
> Now annihilation. Every particle has an antiparticle, with the same mass and the opposite charge. The electron's antiparticle is the positron. When an electron and a positron meet at rest, they annihilate. All of their mass becomes two gamma ray photons, flying apart in opposite directions, so the total momentum is still **zero**. Hospitals use this every day. A PET scanner finds where in the body these photon pairs come **from**.

Visual: board change. On "antiparticle, with the same mass and the opposite charge" a navy "e⁻" and a rose "e⁺" side by side with tags "same mass", "−1 and +1 charge". On "The electron's antiparticle is the positron" tag "positron: antielectron". On "they annihilate" the two dots drift together, meet and vanish inside a dashed system box. On "two gamma ray photons" two amber packets "γ" leave in opposite directions. On "zero" momentum arrows on the two photons, equal and opposite, sum "p_total = 0 (before and after)"; amber pen bracket, hand tag "opposite, so p stays 0". On "from" a coded ring of detector blocks (no patient, no bed) around the event, with the two photons striking opposite blocks, tag "PET scanner: detects photon pairs in opposite directions".

### 7. annihilation: the numbers
> The total mass is two times nine point one zero nine times ten to the minus thirty one kilograms. Times c squared, that's one point six four times ten to the minus thirteen **joules**. Each photon carries half, eight point two times ten to the minus fourteen joules, which is about zero point five one MeV, a million electron volts being one **MeV**. Here, one hundred per cent of the mass is **converted**.

Visual: working layout beside the event. Givens grouped: "m_e = 9.109 × 10⁻³¹ kg (each), c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J" (data sheet); "at rest". On "joules" `AlignedAlgebra` "E = (2 × 9.109 × 10⁻³¹)(3.00 × 10⁸)² = 1.64 × 10⁻¹³ J" (52 px). On "MeV" "each photon: 8.20 × 10⁻¹⁴ J = (8.20 × 10⁻¹⁴) / (1.602 × 10⁻¹⁹) = 5.1 × 10⁵ eV ≈ 0.51 MeV" in a dark-ink frame (56 px), chip "1 MeV = 10⁶ eV"; beside it a chip "each photon 1.64 × 10⁻¹³ J" is crossed in red, red hand tag "two photons share it". On "converted" the pair's rest mass bar inside the box drops to zero, grey-blue hand tag "all the rest energy leaves: 100%".

### 8. combustion
> Finally, burning fuel. Burning one kilogram of petrol releases about forty four megajoules. That's a chemical reaction, but the same accounting applies. The system is the petrol and the oxygen it burns with, about four and a half kilograms in total. Delta m equals forty four times ten to the six, over nine times ten to the sixteen, which is four point nine times ten to the minus ten **kilograms**, half a microgram. The products really are lighter, by about one part in ten **billion**.

Visual: board change to the working layout: the painted fuel can `y12p-fuel-can-v1.png` (about 380 px tall) and a coded oxygen cloud "O₂" inside one dashed system box, tag "system: 1.0 kg petrol + 3.5 kg oxygen = 4.5 kg". Givens: "E = 44 MJ = 4.4 × 10⁷ J (per kg of petrol, site value)". On "the same accounting applies" chip "Δm = E/c² (every process)". On "kilograms" `AlignedAlgebra` "Δm = (4.4 × 10⁷) / (9.0 × 10¹⁶) = 4.9 × 10⁻¹⁰ kg ≈ 0.49 μg" (52 px) in a dark-ink frame. On "billion" "fraction = (4.9 × 10⁻¹⁰) / 4.5 ≈ 1 × 10⁻¹⁰ (1 part in 10¹⁰)", framed; a chip "fraction = 4.9 × 10⁻¹⁰ / 1.0 (petrol only)" is crossed in red, red hand tag "count the oxygen too".

### 9. one rule, three scales
> Put the three side by side, as fractions of the mass that reacts. Combustion, about one ten billionth. Fusion, about zero point seven per cent. Annihilation, all of it. Why such a huge gap? Chemical reactions only rearrange electrons, a few electron volts per bond. Nuclear reactions rearrange the particles in the nucleus, millions of electron volts each. Same rule, very different **scale**.

Visual: board change: a horizontal log-scale chart (about 1300 px wide) "fraction of reacting mass converted", ticks 10⁻¹⁰, 10⁻⁵, 1, with the three small plates (fuel can, Sun, and the annihilation box) at the bar ends. On "Combustion, about one ten billionth" a short bar "combustion ≈ 10⁻¹⁰". On "Fusion, about zero point seven per cent" "fusion (Sun) ≈ 7 × 10⁻³". On "Annihilation, all of it" "annihilation = 1". (Optional greyed bar "fission ≈ 9 × 10⁻⁴, not in this video": open decision 2.) On "rearrange electrons" a small coded molecule (about 300 px) with outer electrons shifting, navy hand tag "chemical: a few eV per bond". On "rearrange the particles in the nucleus" a small nucleus (about 300 px) with nucleons regrouping, rose hand tag "nuclear: millions of eV". On "scale" an ink pen bracket "× about 10⁶ per particle".

### 10. why chemistry never noticed
> That's why chemists could treat mass as perfectly conserved for centuries. Half a microgram out of four and a half kilograms is far too small for an ordinary laboratory balance to **detect**. In nuclear reactions, the mass change is big enough to **measure**.

Visual: the painted top-pan balance `phys-y11-top-pan-balance-v1.png` with a coded display "4.500 000 kg" before and after a small coded flame (no change in any digit). On "detect" grey-blue hand tag "change: 0.000 000 49 g, below an ordinary lab balance's resolution" with a pen ring round the unchanged last digit. On "measure" the fusion mass bars return small with the 0.7% sliver, tag "nuclear: measurable (mass spectrometry)".

### 11. a way to remember
> Here's the accounting in four words. Energy out, mass **down**. And the exchange rate is c squared.

Visual: clear change: the system box returns (about 500 px) with packets leaving and the mass bar dropping, the Sun and fuel can plates small beside it. On "down" a framed memory card writes above in hand lettering (52 px, amber and grey-blue; the same card is reused on the notes screen): "Energy out, mass down: Δm = E/c²." On "the exchange rate is c squared" chip "c² = 9.0 × 10¹⁶ J kg⁻¹". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A star radiates energy at a rate of one point five times ten to the twenty seven watts. Calculate the mass it loses each second. If fusion converts zero point seven per cent of the hydrogen's mass into energy, calculate the mass of hydrogen it fuses each second. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "A star radiates energy at a rate of 1.5 × 10²⁷ W. (a) Calculate the mass the star loses each second. (b) Fusion in the star converts 0.7% of the mass of the hydrogen fused into energy. Calculate the mass of hydrogen fused each second. (3 marks)" Picture: the painted Sun plate (about 300 px), tag "a star", with amber packets leaving. Data chip "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 13. feedback 1 (brief)
> Each second it gives out one point five times ten to the twenty seven joules. Delta m is that over nine times ten to the sixteen, one point seven times ten to the ten **kilograms**. That's zero point seven per cent of the hydrogen fused, so divide by zero point zero zero seven, two point four times ten to the twelve kilograms each **second**. The slip is dividing by c instead of c **squared**.

Visual: card shrinks to the top; "1.5 × 10²⁷ W" and "0.7%" underline. A givens strip (36 px): "E = 1.5 × 10²⁷ J each second", "0.7%", "c² = 9.0 × 10¹⁶". The star in its system box at the right, mass bar dipping. On "kilograms" "(a) Δm = E/c² = (1.5 × 10²⁷) / (9.0 × 10¹⁶) = 1.7 × 10¹⁰ kg each second" (52 px), framed. On "second" "(b) hydrogen = (1.7 × 10¹⁰) / 0.007 = 2.4 × 10¹² kg each second", framed. On "squared" a chip "Δm = (1.5 × 10²⁷) / (3.00 × 10⁸) = 5.0 × 10¹⁸ kg" fades in and is crossed in red (red hand tag "E = mc²: divide by c², not c"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Burning one kilogram of methane releases fifty five megajoules. A student claims the products of burning have exactly the same mass as the reactants. Evaluate this claim, using a calculation. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "Burning 1.0 kg of methane in oxygen releases 55 MJ of energy. A student claims: 'The products of a combustion reaction have exactly the same mass as the reactants.' Evaluate this claim. Support your answer with a calculation. (3 marks)" Picture: a coded gas-burner flame (about 300 px) inside a dashed system box labelled "methane + oxygen". Data chip "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 15. feedback 2 (brief)
> Delta m equals fifty five times ten to the six, over nine times ten to the sixteen, about six times ten to the minus ten kilograms. So the products are lighter, and the claim isn't exactly **true**. But the change is under a microgram, far too small for an ordinary balance, so the claim works for all practical **purposes**. The slip is saying chemical reactions don't change mass **at all**.

Visual: card shrinks to the top; "55 MJ" and "exactly the same mass" underline. A givens strip (36 px): "E = 55 MJ = 5.5 × 10⁷ J", "c² = 9.0 × 10¹⁶". The flame's system box at the right, with the top-pan balance plate (300 px) beside it. On "true" "Δm = (5.5 × 10⁷) / (9.0 × 10¹⁶) = 6.1 × 10⁻¹⁰ kg → products lighter" (52 px), framed. On "purposes" "≈ 0.6 μg: below an ordinary balance's resolution; an excellent approximation, not exact", framed. On "at all" a chip "chemical reactions don't change mass" fades in and is crossed in red (red hand tag "Δm = E/c² for every process"). Hold about 1 second.

### 16. handoff to Module 8
> One rule explains all three. Energy out, mass down. And the accounting runs both ways. Run annihilation backwards, and two energetic photons meeting head-on can make an electron and a positron, if each brings at least zero point five one MeV. The early Universe was full of photons that energetic. Then it cooled. So how did cooling radiation allow matter to form in the early **Universe**?

Visual: board clears (camera change). On "One rule explains all three" the three system boxes (Sun, annihilation, fuel can) appear small across the top, each with "Δm = E/c²". On "Run annihilation backwards" the annihilation event plays in reverse at the centre: two amber "γ" packets converge and an "e⁻" and "e⁺" emerge, tag "pair production". On "at least zero point five one MeV" tags on the packets "≥ 0.51 MeV each", with a small grey tag under them "head-on, equal energies". On "full of photons that energetic" a coded field of amber packets fills the background, tag "hot early Universe". On "Then it cooled" a vertical temperature bar at the right falls and the packets redden and lengthen slightly. On "Universe" the chip "Next: how did cooling radiation allow matter to form in the early Universe?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. E = mc²; c² = 9.0 × 10¹⁶ J kg⁻¹.
2. Energy leaves: system mass falls by E/c².
3. Sun: loses 4.2 × 10⁹ kg each second.
4. e⁻ + e⁺ at rest → two 0.51 MeV photons.
5. Combustion ~10⁻¹⁰, fusion 0.7%, annihilation 100%.

Memory aid (framed card under the notes, hand lettering as in scene 11): *Energy out, mass down: Δm = E/c².* Notes in the role colours, 34 px; about 210 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the Sun loses mass: it gives out energy, and Δm = E/c² (3, 4). Where the energy comes from: helium has less mass than the hydrogen that made it (5). Why two photons: momentum conservation (6). Why combustion's change is tiny: chemical energies per particle are about a million times smaller (9). Why chemists saw conservation: the change is far below any balance's resolution (10).
- **Misconceptions addressed:** mass is destroyed (3); chemical reactions involve no mass change (8, 15 crossed); dividing by c (13 crossed); E = mc² is only for nuclear processes (8, 9); annihilation makes one photon (6).
- **One idea at a time:** E = mc² (2), the rule (3), the Sun in two stages (4, 5), annihilation in two stages (6, 7), combustion (8), comparison (9), conservation in chemistry (10).
- **Video makes it easier:** the mass bar dropping as packets cross the boundary (3); the 0.7% sliver between the bars (5); the cancelling momentum arrows (6); the log chart (9); the unchanged balance digits (10).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 28 s.
- **Avoided double teaching:** invariant mass (v15), photons and the eV (v10, v11), momentum and energy conservation (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ4-04`: E = mc² used to calculate the energy released (or the mass converted) for the production of energy by the Sun (4, 5, 12, 13), positron-electron annihilation (6, 7) and combustion of conventional fuel (8, 14, 15).
- **Out of scope by design:** binding energy, mass defects from atomic masses, fission calculations (Module 8); E = γmc² and kinetic energy formulas (extension); the solar wind (author note a).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A star radiates energy at a rate of 1.5 × 10²⁷ W. (a) Calculate the mass the star loses each second. (b) Fusion in the star converts 0.7% of the mass of the hydrogen fused into energy. Calculate the mass of hydrogen fused each second."
Model answer: (a) Each second E = 1.5 × 10²⁷ J; Δm = E/c² = (1.5 × 10²⁷) / (3.00 × 10⁸)² = 1.7 × 10¹⁰ kg. (b) 0.007 × m_H = 1.7 × 10¹⁰ kg, so m_H = 2.4 × 10¹² kg each second. Classic mistake (crossed): Δm = E/c = (1.5 × 10²⁷) / (3.00 × 10⁸) = 5.0 × 10¹⁸ kg.

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "Burning 1.0 kg of methane in oxygen releases 55 MJ of energy. A student claims: 'The products of a combustion reaction have exactly the same mass as the reactants.' Evaluate this claim. Support your answer with a calculation."
Model answer: Energy leaves the system, so its mass decreases by Δm = E/c² = (5.5 × 10⁷) / (9.0 × 10¹⁶) = 6.1 × 10⁻¹⁰ kg. The products are therefore lighter than the reactants, so the claim is not exactly correct. However, the change is about 0.6 μg out of about 5 kg of methane and oxygen (about 1 part in 10¹⁰), far below the resolution of an ordinary school or laboratory balance, so treating mass as conserved in ordinary chemistry weighing is an excellent approximation. Classic mistake (crossed): "chemical reactions don't change mass at all".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | c = 3.00 × 10⁸ m s⁻¹; c² = 9.0 × 10¹⁶; m_e = 9.109 × 10⁻³¹ kg; 1 eV = 1.602 × 10⁻¹⁹ J | 2 to 8, 12 to 16 |
| Rest energy of 1 kg | 9.0 × 10¹⁶ J; ÷ 1 × 10⁹ W = 9.0 × 10⁷ s = 2.85 years | 2 |
| Sun (site) | P = 3.8 × 10²⁶ W; Δm = 4.22 × 10⁹ kg s⁻¹; ÷ 0.007 = 6.03 × 10¹¹ kg s⁻¹ hydrogen | 1, 4, 5 |
| Annihilation | 2m_ec² = 1.640 × 10⁻¹³ J; each 8.198 × 10⁻¹⁴ J = 5.12 × 10⁵ eV ≈ 0.51 MeV | 7, 16 |
| Combustion (site) | 44 MJ kg⁻¹; Δm = 4.89 × 10⁻¹⁰ kg; O₂ 3.50 kg per kg octane; total 4.50 kg; fraction 1.09 × 10⁻¹⁰ | 8, 9, 10 |
| Fractions | combustion 1.1 × 10⁻¹⁰; fusion 7 × 10⁻³; annihilation 1; ratio fusion/combustion 6.4 × 10⁷ (site per kg fuel: 1.4 × 10⁷) | 9, site note 5 |
| A1 | Δm = (1.5 × 10²⁷) / (9.0 × 10¹⁶) = 1.67 × 10¹⁰ kg; ÷ 0.007 = 2.38 × 10¹² kg; slip (1.5 × 10²⁷) / (3.00 × 10⁸) = 5.0 × 10¹⁸ kg | 12, 13 |
| Energy-out slider (Revision 2) | E = 9.0 × 10⁷, 9.0 × 10¹⁰, 9.0 × 10¹³, 9.0 × 10¹⁶ J: Δm = 1.0 × 10⁻⁹, 1.0 × 10⁻⁶, 1.0 × 10⁻³, 1.0 kg | 3 |
| Crossed slips (Revision 2) | Sun with c: (3.8 × 10²⁶) / (3.00 × 10⁸) = 1.27 × 10¹⁸ kg (4); each photon 1.64 × 10⁻¹³ J (7); petrol-only fraction 4.9 × 10⁻¹⁰ (8) | 4, 7, 8 |
| Octane per molecule (author note h) | 44 × 10⁶ × 0.11423 / 6.022 × 10²³ = 8.35 × 10⁻¹⁸ J = 52 eV | 9 (author only) |
| A2 (site methane value) | 55 MJ: Δm = 6.11 × 10⁻¹⁰ kg; O₂ 3.99 kg per kg methane; fraction 1.2 × 10⁻¹⁰ | 14, 15 |
| Site checks | Trinity 8.8 × 10¹³ J → 0.98 g; fission 200/(235 × 931.5) = 0.091% | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- (3.00e8)² = 9.0e16; 9.0e16 / 1e9 = 9.0e7 s; / 3.156e7 = 2.85 years.
- 3.8e26 / 9.0e16 = 4.22e9; / 0.007 = 6.03e11.
- 2 × 9.109e-31 × 9.0e16 = 1.640e-13; /2 = 8.198e-14; / 1.602e-19 = 5.117e5 eV.
- 44e6 / 9.0e16 = 4.89e-10; 12.5 × 31.998 / 114.23 = 3.50; 4.89e-10 / 4.50 = 1.09e-10; 0.007 / 1.09e-10 = 6.4e7; 0.007 / 4.89e-10 = 1.43e7.
- 1.5e27 / 9.0e16 = 1.667e10; / 0.007 = 2.38e12; 1.5e27 / 3.00e8 = 5.0e18.
- 55e6 / 9.0e16 = 6.11e-10; 2 × 31.998 / 16.043 = 3.99; 6.11e-10 / 4.99 = 1.22e-10.
- Revision 2 (7 Nov, Python): 9.0e7/9.0e16 = 1.0e-9; 9.0e10/9.0e16 = 1.0e-6; 9.0e13/9.0e16 = 1.0e-3; 3.8e26/3.00e8 = 1.27e18; 44e6 × 0.11423 / 6.022e23 = 8.35e-18 J; /1.602e-19 = 52.1 eV.

## Memory aid check

- **"Energy out, mass down: Δm = E/c²."** Meaning, as said in scene 11: when a system gives out energy E (radiation, heat, kinetic energy of products leaving), its rest mass decreases by E/c²; energy in raises it. Assumptions checked: the system boundary must be stated (the Sun alone; the electron and positron; petrol plus oxygen); the energy counted is what crosses the boundary; total energy (including rest energy) is conserved, so nothing is destroyed. It helps a new case: A1 (a star's mass loss) and A2 (combustion products are lighter) and runs backwards in the handoff (energy in, mass up: pair production). Introduced after the explanation (2, 3).
- **Considered, not used:** "Mass is frozen energy" (vivid, but suggests mass is a separate substance that melts away).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,750 characters**, 17 scenes. Characters per scene (1 to 17): 413, 340, 401, 348, 467, 426, 395, 481, 389, 251, 95, 295, 384, 223, 381, 386, 75. At 13.3 characters per second the speech is about 432 s; add about 3 s for the prediction countdown, 2 s for the scene 3 slider, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 71 s of holds and countdowns): **about 503 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 5,678 characters, about 511 s. Reserve trims if the voiced take runs long: scene 2's power-station sentence; scene 10; scene 5's neutrino clause.

## Opening frame

v15's final frame (designed in this wave, `phys-y12-m7-v15.md`): paper background; heading "Why does ever more momentum fail to push mass to light speed?"; at the top left a small momentum bar and speed gauge (needle at the "c" stop); at the centre left the painted spacecraft `y12p-spacecraft-v1.png` (exhaust off) with tag "p = 0" and a grey energy bar marked "?" with tag "energy at rest? E = mc²"; at the right the painted Sun `phys-y11-sun-v1.png` with tag "loses ≈ 4 million tonnes per second"; chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". Scene 1 turns the chip into the heading, fades the gauges and probe (the probe returns in scene 2) and moves the Sun to the centre left.

## Final frame

The last explained frame of Module 7 (end of scene 16, before the key-notes board): paper background; heading "How does mass-energy accounting explain fusion, annihilation and combustion?"; across the top three small dashed system boxes (the Sun, an electron-positron pair, the fuel can), each with "Δm = E/c²"; at the centre a pair-production event: two amber "γ" packets tagged "≥ 0.51 MeV each" (with a small grey tag "head-on, equal energies", Revision 2) converging, with a navy "e⁻" and a rose "e⁺" emerging, tag "pair production"; behind it a coded field of amber photon packets tagged "hot early Universe"; at the right a vertical temperature bar, falling; chip "Next: how did cooling radiation allow matter to form in the early Universe?". Module 8 v01 opens on this frame (open decision 4; root to add the new grey tag to m8-v01's opening description).

## Scene list and build ids

Lesson key `p-y12-m7-v16` (route phys-y12-m7-v16). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v16` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v16` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, e-mc2, accounting-rule, worked-sun, fusion, annihilation, worked-annihilation, worked-combustion, three-scales, chemistry-conservation, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-m8, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: system boundary and mass-energy ledger, fusion step, annihilation event, log-scale bars, pair production, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change to working; 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change to working; 8 to 9 clear change to the chart; 9 to 10 camera continue; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), scene 3 slider (2 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Longest set-up (Revision 2): about 62 s (scenes 6 and 7, the annihilation event with its working). Review evidence paths: `learning_review` = `checks/p-y12-m7-v16-learning-review.md`, `science_check` = `checks/p-y12-m7-v16-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): the Sun (1, 4, 5, 16).
- `public/assets/physics/phys-y11-power-station-v2.png` (1774 × 887, RGBA): the 1 GW comparison (2).
- `public/assets/physics/phys-y11-top-pan-balance-v1.png` (1400 × 900, RGBA): digital top-pan balance with a blank display panel for a coded readout (10).
- `public/assets/physics/y12p-spacecraft-v1.png` (brief 191, inspected 7 Nov): the probe at rest (2).
- `public/assets/physics/y12p-fuel-can-v1.png` (1113 × 1413, RGBA; delivered in brief 191, inspected 7 Nov: red plastic jerry can, black closed cap, moulded handle, no text): 8, 9, 11, 16.
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a sealed radioactive source container; annihilation photons are coded); `phys-y11-galaxy-v1.png` (the early Universe is a coded photon field; Module 8 may use the galaxy plate).

Need (new plates): none (Revision 2).

Coded: system boxes, mass and energy bars, ledger, nuclei, neutrinos, electron, positron, photons, momentum arrows, log chart, molecule and nucleus sketches, balance display, flame, photon field, temperature bar, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v16 build brief):
1. **Mass-energy ledger.** A dashed system boundary with a mass bar that drops by E/c² as amber packets leave (scaled display, with the numeric Δm shown).
2. **Annihilation and pair production.** Particle pair meeting and vanishing into two opposite packets with momentum arrows; reversible for the handoff.
3. **Log-scale bars.** Three (or four) bars on a 10⁻¹⁰ to 1 axis.

## Codex asset brief

Revision 2: no open request; the fuel can was delivered in brief 191 and is kept here for the record.

1. **`y12p-fuel-can-v1.png`** (delivered). A painted red plastic portable fuel container (jerry can) for petrol, about 5 L size, three-quarter view, closed spout cap, moulded handle. No text, no brand names, no warning labels with words, no people or hands. Transparent PNG with alpha channel, about 1200 × 1300, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-car-battery-v1.png` and `phys-y11-box-v1.png` (painted everyday objects, neutral lighting, clean edges).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: rest energy; the accounting rule and the conservation statement; the Sun's mass loss and that the 4 million tonnes is carried off by radiation (author note a); fusion 4 H → He with 0.7% of the mass released, light and neutrinos; antiparticle definition; two photons for momentum; 0.51 MeV each at rest (author note b); combustion's system (petrol plus oxygen) and fraction (open decision 1); eV against MeV as the cause; pair production threshold of 0.51 MeV per photon (two-photon case).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 5 to 7 under Decisions to root.
11. Revision 2: confirm no learner copy says mass rides on or is carried by photons (1, 3, 5; author note g); the balance claim is scoped to an ordinary balance (10, 15, A2 model answer); grouped denominators (4, 7, 8, 13, 15, model answers); "per bond" (9; author note h); the head-on, equal-energy pair-production tag (16; author note i); the slider and crossed-slip values (Numbers used).

## YouTube metadata (draft)

Title: E = mc²: Mass-Energy in the Sun, Annihilation and Burning Fuel | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson14.sa.html

The Sun loses about four million tonnes every second. Where does it go? Use one accounting rule, Δm = E/c², to calculate the Sun's mass loss and the hydrogen it fuses, the energy of the two photons from electron-positron annihilation, and the tiny mass change when petrol burns. See why nuclear processes release millions of times more energy per kilogram than chemical ones, and why chemists never noticed mass changing. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"Use Einstein’s mass–energy equivalence relationship E = mc² to calculate the energy released by processes in which mass is converted to energy, for example: production of energy by the sun; particle–antiparticle interactions, eg positron–electron annihilation; combustion of conventional fuel (ACSPH134)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: relativistic momentum. Next: Module 8, from Big Bang radiation to matter.

#HSCPhysics #Physics #EmcSquared #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v15; check that the system boundary makes "mass converted to energy" clear without contradiction; that the three cases stay separate; that the combustion system including oxygen is understood (open decision 1); that the Module 8 handoff makes sense to a student who has not yet met the early Universe), then the physics check and the Codex error check.
- The mass bar dropping as energy leaves the boundary, the 0.7% sliver and the unchanged balance digits carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v16-learning-review.md`, `checks/p-y12-m7-v16-science-check.md`): 0 blockers, 3 should fix, 2 optional.
- **Should fix, mass accounting (scene 3 and repeated tags).** Resolved: scene 1 now says "It's the mass equivalent of the energy that light carries away"; scene 3 says "So when we say mass is converted to energy, nothing is destroyed. The system's mass falls because energy leaves"; scene 5 says "the energy matching that missing mass leaves as light, and as tiny particles called neutrinos". The "mass flecks riding on packets" and "mass carried off with the energy" visuals are withdrawn; outgoing packets are tagged "energy + momentum" and the box "system's mass falls"; a "mass is destroyed" chip is crossed. Author note (g) keeps photon rest mass zero.
- **Should fix, balance claim (scene 10 and feedback 2).** Resolved: "far too small for an ordinary laboratory balance to detect" (10), "far too small for an ordinary balance" (15), and the A2 model answer scoped to ordinary school or laboratory weighing.
- **Should fix, grouped denominators (scenes 4, 7, 8 and feedback).** Resolved: "(3.8 × 10²⁶) / (9.0 × 10¹⁶)", "(8.20 × 10⁻¹⁴) / (1.602 × 10⁻¹⁹)", "(4.4 × 10⁷) / (9.0 × 10¹⁶)", "(1.5 × 10²⁷) / (9.0 × 10¹⁶)", "(5.5 × 10⁷) / (9.0 × 10¹⁶)" and the slips and model answers. Values unchanged.
- **Optional, chemical scale (scene 9).** Resolved: "a few electron volts per bond" (narration and tag); author note (h) records the octane example's 52 eV per molecule (Python).
- **Optional, pair-production handoff.** Resolved: scene 16 says "two energetic photons meeting head-on"; a small grey tag "head-on, equal energies" sits under the unchanged "≥ 0.51 MeV each" tag; author note (i) gives the general threshold.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation" and "Question cards".
- Plates: the Sun fills the hook at about 500 px; the fuel can (brief 191) is inspected and carries 8, 9, 11 and 16; the power station and balance plates stay; the Sun plate makes the A1 card's picture.
- Live control: scene 3's energy-out slider on the system box (Python: E = 9.0 × 10⁷ to 9.0 × 10¹⁶ J gives Δm = 1.0 × 10⁻⁹ to 1.0 kg) with live E and Δm readouts and a log-scaled mass bar.
- Stage lengths: no set-up runs past about 62 s (no cut needed).
- Hand tags and a pen mark in role colours in every teaching scene ("energy out, Sun's mass down", "one kilogram!", "÷ 9.0 × 10¹⁶", "c², not c", "energy out", "opposite, so p stays 0", "two photons share it", "all the rest energy leaves: 100%", "count the oxygen too", "chemical: a few eV per bond", "nuclear: millions of eV"; pen rings, brackets and arrows on the packets, ledger, sliver, momenta, chart and balance digit).
- Framed answers: 2.9 years (2), Δm = E/c² (3), 4.2 × 10⁹ kg (4), 6.0 × 10¹¹ kg (5), 0.51 MeV (7), 4.9 × 10⁻¹⁰ kg and the fraction (8), both A1 rows (13), both A2 rows (15). New crossed slips: dividing by c for the Sun (4), each photon taking the whole 1.64 × 10⁻¹³ J (7), the petrol-only fraction (8).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip and a system box.
- Key notes cut from five long items (about 760 characters) to five short bullets (about 210 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v15's final frame (unchanged). The final frame is unchanged except for one small grey tag "head-on, equal energies" under "≥ 0.51 MeV each"; root to add it to m8-v01's "Opening frame" (or let m8-v01 scene 1 fade it).

Counts: 5,678 to 5,750 characters (scene sum); about 511 s to about 503 s.
