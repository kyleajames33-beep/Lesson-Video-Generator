# Year 12 Physics M8 V19: Fusion and the Coulomb barrier. Why can fusion release energy despite repulsion between nuclei? (design)

Status: Revision 2 (7 Nov 2026): brief 193 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,786 characters, 18 scenes (17 narrated scenes and the notes hold), about 504 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v18's final frame.

Scope: nineteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v05.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants and AME2020 atomic masses, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson14.sa.txt`, hash checked against the live file):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson14.sa.html`, SHA256 `18219e8c4f9f1d5b769f64d59db028c88c38ce4652bd933f5ca55990058af245` (matches the route): sections used `account-for-fusion-energy` (D-T reaction, 17.6 MeV, binding per nucleon ~1.1, ~2.8 and ~7.1 MeV, Coulomb barrier, very high temperature and pressure, gravity in the Sun at about 15 million K, tokamaks and inertial confinement, Figure 4, Stop and check, MC distractor "The strong force only switches on above a million kelvin"); `apply-binding-energy-and-stability` ("Analyse 7 marks": mass defect and binding energy account for fusion energy, conservation of mass-energy; Activity 1); `map-the-strong-force` (range 1 to 3 fm, charge-independent; recalled).

Route entry: `phys-y12-m8-v19`, sections `account-for-fusion-energy`, `apply-binding-energy-and-stability`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare reactant/product binding and mass, Coulomb barrier and strong interaction at short range; calculate a fusion Q. Relate to earlier stellar cycles." Next: "phys-y12-m8-v20: What evidence shows that protons and neutrons have smaller constituents?" Entry knowledge asks that each newly introduced equation is derived before use: Coulomb's law is Year 11 (formula sheet), used directly; the Q calculation is v17's method; no new equation is introduced.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; nuclei, the force-against-distance and energy-against-distance graphs, the energy ledger and calculation strips are coded, HSC style; the Sun (reused) and a tokamak (new) are painted plates, scaled uniformly, never stretched; every number recalculated in Python with k = 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻², e = 1.602 × 10⁻¹⁹ C, 1 u = 931.5 MeV/c² (data sheet) and AME2020 atomic masses (given on the cards); "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v05 (fusion in stars, why fusion is hard in outline, the pp chain, the Sun's 26.7 MeV), v16 (binding energy, the curve), v17 (Q from atomic masses), v18 (fission, 200 MeV, final frame), m6-v05 (charged particles circle in a magnetic field), Year 11 (Coulomb's law, momentum conservation, kinetic energy and temperature).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger ids `P8-IQ4-05`, `P8-IQ4-06`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P8-IQ4-05`: "account for the release of energy in the process of nuclear fusion (ACSPH035, ACSPH036)"
- `P8-IQ4-06`: "predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036)" "the law of conservation of energy", "mass defect", "binding energy", "Einstein’s mass–energy equivalence relationship E=mc^(2)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v18's final frame (the binding curve with fission done and a dashed "fusion?" arrow, two repelling light nuclei). Teaches: two forces at two ranges (electric repulsion reaching far, growing as nuclei approach; the strong attraction acting only within about 3 fm, and much stronger there); the energy-against-separation picture, a hill (the Coulomb barrier) then a deep valley; the size of the push at 3 fm (about 26 N on a deuteron, Coulomb's law) and the barrier height (about 0.5 MeV); why extreme temperature, density and confinement are needed, and why even at 150 million K only the fastest few nuclei fuse; why energy is released (helium-4 far more tightly bound; binding energies of ²H, ³H, ⁴He; 17.6 MeV); the D-T Q from atomic masses; conservation of mass-energy and the energy ledger (the kinetic energy brought in is kept, whether the nuclei go over the barrier or tunnel through it); where the energy goes (neutron 14.1 MeV, alpha 3.5 MeV, by momentum); fusion against fission per nucleon (3.5 against about 0.85 MeV); stars recalled (gravity confines; the Sun at 15 million K using a slow reaction for billions of years); fusion on Earth (D-T, 150 million K, magnetic confinement in a tokamak, ITER; Australia's ITER cooperation). Stops before the pp chain and CNO details (v05), plasma physics, reactor engineering, inertial confinement detail, and particle structure (v20).

## Decisions

- **Learner question (route wording kept).** "Why can fusion release energy despite repulsion between nuclei?" The answer: the repulsion is a hill the nuclei must get past (mostly by tunnelling through it), but once they are within about 3 fm the strong attraction pulls them into a much deeper valley (2); getting over the hill needs huge speeds, so fusion needs extreme temperatures, density and confinement (3, 4); the product is far more tightly bound, so it has less mass, and that mass difference is released (6, 7); the kinetic energy brought in is kept, so the net release is the full Q (8).
- **Hook (v18's handoff).** 3 s prediction chips for "Joining them releases energy, even though they repel. True?": "no, it costs energy", "yes, it pays back more", "they can never join". Answer: yes, if they get close enough.
- **Two forces, two ranges (site `map-the-strong-force` recalled; v05 scene 3 extended).** Repulsion grows as 1/r² and reaches far; the strong force is attractive, charge-independent, about 1 to 3 fm in range and much stronger there (site). Drawn as two coded force-against-separation curves, then as one energy-against-separation curve (a hill and a well). The energy curve is named "energy against separation" and its axes are labelled; the potential-energy formula is not used (author note a).
- **How big the push is (new calculation, data-sheet Coulomb's law).** F = kq₁q₂/r² with q = e for each, r = 3.0 fm: 25.6 N; said "about twenty-six newtons, about the weight of a two and a half kilogram mass, acting on a nucleus". The barrier height at that separation, about 0.48 MeV, is given as a value (U = kq₁q₂/r is not on the formula sheet; author note a); said "about half an MeV".
- **Temperature, density, confinement (site conditions).** Very high temperature so nuclei move fast, very high density so collisions are frequent, and holding the hot fuel long enough. At 150 million K a typical nucleus has about 20 keV, about 4% of the barrier. Revision 2 (brief 193): tunnelling is the route, not a footnote. Some of the faster nuclei pass through the hill at energies well below its top (the animation shows a marker at about an eighth of the barrier height tunnelling through); classically almost none could climb over, and the full climb is shown only as a classical comparison. Tunnelling is named in one clause, unlike v05 (author note b), because the numbers on screen would otherwise contradict fusion happening at all (open decision 2, closed by root decision 10).
- **Why energy comes out (site D-T explanation, values recalculated).** Binding energies from atomic masses: ²H 2.22 MeV (1.11 per nucleon), ³H 8.48 MeV (2.83), ⁴He 28.30 MeV (7.07); 28.30 − 2.22 − 8.48 = 17.59 MeV. Site "~1.1", "~2.8", "~7.1" kept.
- **Fusion Q (route "calculate a fusion Q"; site 17.6 MeV).** Atomic masses: (2.014102 + 3.016049) − (4.002603 + 1.008665) = 0.018883 u; × 931.5 = 17.6 MeV. Electrons balance (2 each side). Same result as the binding-energy route, shown as a check line.
- **Energy ledger (site "Analyse 7 marks" step 6; analogy).** "Conservation of mass-energy": total mass-energy is the same before and after (site wording "two forms of one conserved quantity"). The ledger: the kinetic energy the nuclei bring in is kept, whether they go over the hill or tunnel through it, so the products carry the original kinetic energy plus Q. Analogy (one sentence): a ball getting past a small hump into a deep valley. Revision 2 (brief 193): the ledger no longer says the nuclei must first climb the full hill. Limits in author note c.
- **Where it goes (Year 11 momentum; new).** Momentum conservation from rest-like collision shares 17.6 MeV in inverse proportion to mass: neutron 14.1 MeV, alpha 3.5 MeV. Screen numbers; narration "about four fifths to the neutron, because it's lighter". Kept short.
- **Per nucleon (site "Per nucleon, fusion of the lightest elements releases even more energy than fission").** 17.6 / 5 = 3.5 MeV per nucleon against 200 / 236 = 0.85 MeV for fission (v18).
- **Stars recalled (route "Relate to earlier stellar cycles").** v05: the pp chain in the Sun's core (15 million K, site), gravity providing temperature and density; the surprise: fusion reactors need about ten times the Sun's core temperature, because the Sun is huge and patient (its first step is very slow, v05), while a reactor must react fast in a small volume, so it uses D-T, the easiest reaction.
- **Fusion on Earth (site "magnetic confinement (tokamaks)").** A tokamak: a doughnut-shaped vessel; the fuel is a plasma (nuclei and electrons separated, defined in plain words), and charged particles circle around magnetic field lines (m6-v05 recalled) instead of touching the walls. Revision 2 (brief 193): the coded field lines are helical (twisted round the doughnut), not plain rings, because a purely ring-shaped field does not confine the plasma; the narration is unchanged. ITER, in southern France, aims for 150 million °C; Australia (ANSTO) signed the first ITER cooperation agreement with a non-member country in 2016 (screen tag). Sources: https://www.iter.org/node/11341 (ITER press release, September 2016), https://www.ansto.gov.au/news/fusion-research-australia ; ITER temperature: https://www.iter.org/ (Codex to confirm the exact page). Inertial confinement (lasers) named in one screen tag only.
- **Memory aid (scene 12; Revision 2, brief 193): "Get past the hill, win the valley."** It replaces "Pay to climb the hill, win the valley", which implied every fusion climbs the full barrier; "get past" covers over and through. See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): energy released in ²H + ²H → ³He + n with atomic masses: 0.003510 u, 3.27 MeV. Crossed: leaving out the neutron (1.012 u, "943 MeV"). A2 (3 marks, explain): why fusion needs very high temperatures although it releases energy. Crossed: "the strong force only switches on at high temperature" (site MC distractor).
- **Significant figures.** Masses to six decimal places in u; energies to three figures; force to two figures.
- **Handoff (route next).** All of this treats protons and neutrons as solid balls held by the strong force. Are they fundamental, or made of something smaller? v08's alpha scattering found the nucleus by firing particles at atoms; the same idea, at higher energy, can probe a proton. "Next: what evidence shows that protons and neutrons have smaller constituents?". See "Final frame".
- **Colour key (as v05 and v18):** protons rose discs, neutrons grey discs, deuterium and tritium as small clusters of rose and grey discs with labels "²H", "³H", helium-4 cluster "⁴He"; repulsion arrows red; strong attraction arrows navy; the energy curve ink with the barrier shaded pale red and the well pale navy; kinetic energy amber; plasma glow violet in the tokamak scene.
- **Colour key (Revision 2, fixed for every scene).** As above; the separation readout and slider ink; force readouts red; barrier energy pale red, well depth navy; Q and kinetic energy amber; temperature slate; ticks green; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (repulsion tags red, strong-force tags navy, energy tags amber, field tags navy).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 3, 6, 7 and the feedback rows 52 px; six-decimal masses 52 px; framed answers 56 px); live readouts (scene 2 separation, force and barrier; scene 4 temperature and typical energy) about 52 px; graph labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 brings in the painted Sun `phys-y11-sun-v1.png` (reused) on "Yes, it can" as the proof that fusion releases energy; it returns full size in scene 10. The delivered painted tokamak `y12p-tokamak-v1.png` (inspected 7 Nov: a cutaway torus with copper D-shaped coils, a central column and a violet plasma ring clear of the walls; no text or people) carries scene 11 and the A2 card. The opening frame is v18's coded final frame.
- **Simulation (Revision 2).** The core live control is the separation slider in scene 2: as it brings the nuclei together, live readouts (52 px) show r, the repulsive force and the barrier energy at that separation (Python: r = 10, 5, 3 fm gives F = 2.3, 9.2, 25.6 N and 0.14, 0.29, 0.48 MeV), and inside 3 fm the navy attraction readout takes over. Scene 4 adds a temperature readout with the typical energy as a percentage of the barrier (1.5 × 10⁷ K: 1.9 keV, 0.4%; 1.5 × 10⁸ K: 19.4 keV, 4.0%).
- **Board stages (Revision 2).** No continued set-up runs past about 60 s (the speed spread into the two curves, 4 to 5); every stage opens with its main picture solid.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: two coded ²H clusters approaching with red repulsion arrows; A2: the painted tokamak with its violet plasma ring). On the answer side the card shrinks to the top, a givens strip lists the masses or the command, the picture stays, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 14 `account-for-fusion-energy` (definition; pp chain 26.7 MeV recalled; D-T equation and A/Z check; binding per nucleon; up the curve; mass defect; per nucleon more than fission; Coulomb barrier; temperature and pressure; gravity and 15 million K; tokamaks, lasers; Figure 4; Stop and check "Why does fusion need such extreme temperatures while fission can be started by a slow neutron?"; MC distractor) (2 to 12, A2); `apply-binding-energy-and-stability` "Analyse 7 marks" (defect, binding energy, per nucleon, fusion, where the energy goes, conservation) (6 to 9); `map-the-strong-force` (range, charge independence) (2). Not used: Activity 1's Be-8 comparison; stability cards (v16); fission card (v18).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Fusion conditions (lesson 14 `account-for-fusion-energy`): "Very high temperature (millions of kelvin) so that nuclei have enough kinetic energy to overcome the Coulomb repulsion". At fusion temperatures the mean kinetic energy is a few per cent of the barrier (about 20 keV at 1.5 × 10⁸ K against about 0.5 MeV for D-T); fusion proceeds through the high-energy tail and quantum tunnelling. Suggest "so that enough nuclei move fast enough to get close despite the Coulomb repulsion".
  2. "No material can contain plasma at such temperatures" (same card). The issue is that contact would cool the plasma and damage the wall, not that a container cannot exist; magnetic confinement keeps the plasma off the wall. Suggest "no material wall can touch plasma at such temperatures without cooling it and being damaged".
  3. Checked and correct: D-T 17.6 MeV; A and Z balance; binding per nucleon ~1.1, ~2.8, ~7.1 MeV; Sun's core about 15 million K; per nucleon fusion of the lightest nuclei releases more than fission; the MC distractor about the strong force "switching on" is correctly marked wrong.
- **Cause chain taught, in order:** (1) like charges repel, and the repulsion grows as nuclei approach (2); (2) the strong attraction only acts within about 3 fm, but there it is much stronger, so the energy curve is a hill then a deep valley (2); (3) at 3 fm the push is about 26 N, a barrier of about half an MeV (3); (4) nuclei must move very fast to get past it (classically over it, in practice mostly by tunnelling through it), so fusion needs extreme temperature, density and confinement, and only the fastest few fuse (4); (4b) a neutron has no charge, so fission faces no barrier (5); (5) helium-4 is far more tightly bound than deuterium and tritium, so it has less mass, and 17.6 MeV is released (6, 7); (6) the kinetic energy brought in is kept, so mass-energy is conserved and the net release is Q (8); (7) the lighter neutron carries most of the energy (9); (8) stars use gravity to confine hot dense fuel; on Earth, magnetic fields hold the plasma off the walls (10, 11).
- **Entry knowledge (route `entryKnowledge`):** v18 (fission, 200 MeV, the curve's two sides); v05 (pp chain, Sun's core); v16 (binding energy); v17 (Q); m6-v05 (circles in a magnetic field); Year 11 (Coulomb's law; momentum; temperature as particle kinetic energy).
- **Learner-visible vocabulary (plain meaning at first use):** fusion (light nuclei joining into a heavier one, recalled, 1); Coulomb barrier (the energy hill from electric repulsion that nuclei must get past, over or through, to get close enough to fuse, 2); femtometre (10⁻¹⁵ m, about the size of a proton, 2); strong nuclear force (recalled, 2); deuterium and tritium (hydrogen-2 and hydrogen-3, 5); plasma (gas so hot that the electrons are stripped off the nuclei, 11); tokamak (a doughnut-shaped magnetic container, 11); tunnelling (named only, 4).
- **Legacy logic ported:** none. `m8-nucleosynthesis` supplies the binding curve (1, 6).
- **New explainer motion:** **two-range forces** (two force curves against separation, red repulsion and navy attraction, with a slider bringing two nuclei together; arrows on the nuclei change length as the slider moves); **barrier and well** (the energy curve drawn from the force curves; a coded marker for the approaching nucleus, shown tunnelling through well below the top, with the classical over-the-top path drawn faint for comparison; Revision 2); **speed spread** (a cloud of nuclei with speed bars, most short, a few long, the long ones reaching the hill's top); **energy ledger** (bars "kinetic energy in", "kept", "+ Q"; Revision 2); **momentum share** (neutron and alpha leaving in opposite directions with arrows of equal length labelled p, energy bars 14.1 and 3.5); **field-line spiral** (a charged dot spiralling round a twisted, helical field line inside the tokamak; Revision 2); **separation slider** (live r, F and barrier readouts, 2); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the nuclear view or graph in the centre; equations and the ledger at the right; a small separation readout "r = … fm" at the top right in scenes 2 to 4; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Barrier: Coulomb potential energy U = kq₁q₂/r = 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)²/(3.0 × 10⁻¹⁵) = 7.69 × 10⁻¹⁴ J = 0.48 MeV at r = 3.0 fm; with nuclear radii R = 1.2A^(1/3) fm the touching distance for D and T is 3.24 fm (0.44 MeV). The formula is not on the HSC formula sheet; the value is stated, not derived. The force at 3.0 fm, 25.6 N, uses Coulomb's law from the sheet.
  (b) Mean kinetic energy (3/2)kT at 1.5 × 10⁸ K = 19.4 keV, 4% of 0.48 MeV; the classical temperature equivalent of the barrier is about 3.4 × 10⁹ K. D-T fusion reactivity peaks near 60 to 70 keV temperature; reactors aim at 10 to 20 keV (about 1.2 to 2.3 × 10⁸ K), relying on the Maxwell-Boltzmann tail and tunnelling. v05 left tunnelling out (its author note b); here it is named in a clause so that the 4% figure does not contradict fusion occurring (open decision 2).
  (c) The ball-past-a-hump analogy: the well's depth relative to the separated nuclei is Q (17.6 MeV), the hump's height is the barrier (about 0.5 MeV). Limits: the products are different particles from the reactants (helium and a neutron), and the energy leaves as their kinetic energy, not as "falling"; a ball cannot tunnel, so the narration says "getting past", and the animation shows tunnelling separately. Revision 2 (brief 193): at 19.4 keV against 480 keV, tunnelling is the main route; LLNL describes barrier tunnelling as the fusion mechanism in stars and inertial fusion.
  (h) Tokamak geometry (Revision 2, brief 193): a tokamak's confining field is helical, the sum of the toroidal field from the D-shaped coils and the poloidal field from the plasma current. A purely toroidal (ring) field lets particles drift out, so the coded field lines twist.
  (d) Momentum share: for products from a near-rest reaction, kinetic energies are inversely proportional to masses: neutron 4.0026/(4.0026 + 1.0087) × 17.59 = 14.05 MeV; alpha 3.54 MeV. Using mass numbers: 4/5 × 17.59 = 14.07 and 3.52. Screen shows "≈ 14.1 MeV" and "≈ 3.5 MeV".
  (e) ITER: Saint-Paul-lez-Durance, France; plasma target 150 million °C ("ten times hotter than the core of the Sun", ITER); 150 million °C ≈ 1.5 × 10⁸ K. ANSTO and ITER signed a cooperation agreement on 30 September 2016, ITER's first with a non-member state.
  (f) The Sun's core (1.5 × 10⁷ K) has density about 150 g cm⁻³ and the pp chain's first step is a weak interaction (v05); its fusion rate per unit volume is tiny (about 280 W m⁻³ at the centre) but its volume is enormous.
  (g) Pronunciations: "deuterium" as "dew-teer-ee-um", "tritium" as "trit-ee-um", "femtometre", "tokamak" as "toe-ka-mak", "ITER" as "eye-ter", "Coulomb" as "koo-lom".
- **Open decisions for root:**
  - **1. Barrier value without its formula (science check).** The barrier "about half an MeV" is stated, not derived (author note a); the force calculation carries the scene. Confirm this is acceptable, or cut the energy value and keep only the force.
  - **2. Tunnelling named (learning review and root).** Closed by root decision 10; Revision 2 makes tunnelling the shown route (brief 193).
  - **3. New plate `y12p-tokamak-v1` (Codex).** Closed: delivered in brief 193 and inspected 7 Nov.
  - **4. ITER temperature source page (Codex).**
  - **5. Site notes 1 to 3** for the site log.

Main question: *Two light nuclei push each other away harder and harder as they get closer. So how can joining them give out energy?*
Entry knowledge: fission and the curve's two sides (v18); fusion in stars (v05); binding energy (v16); Q (v17); Coulomb's law (Year 11).
Stops after: the barrier and the well, the conditions for fusion, why energy is released, the D-T Q, the energy ledger, stars and tokamaks. No particle structure.
Handoff: v20, the evidence that protons and neutrons have smaller constituents.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *F*, *k*, *q*, *r*, *Q*, *Δm*.

### 1. hook (repelling, yet releasing energy)
> Here are two hydrogen nuclei, deuterium and tritium, hydrogen two and hydrogen three. They're both positive, so they push each other away, harder and harder as they get closer. Yet if they join, they release energy. Can that be true? Make your **prediction**. Yes, it can, if they get close enough. So why can fusion release energy despite repulsion between **nuclei**?

Visual: opens on v18's final frame (see "Opening frame"); the curve shrinks to a corner thumbnail and the inset of the two repelling nuclei grows to the centre. On "deuterium and tritium" labels "²H (deuterium): 1p + 1n" and "³H (tritium): 1p + 2n". On "harder and harder as they get closer" the nuclei edge together and the red arrows lengthen. On "prediction" a 3 s `Countdown` beside chips "no, it costs energy", "yes, it pays back more", "they can never join". On "Yes, it can" the second chip ticks, and the painted Sun `phys-y11-sun-v1.png` fades in at the right (solid, about 380 px), amber hand tag "the Sun runs on fusion (v05)" with an amber pen arrow from the chip to the Sun. On "nuclei" the chip becomes the heading: "Why can fusion release energy despite repulsion between nuclei?".

### 2. two forces, two ranges
> Two forces act between them. The electric repulsion reaches a long way, and it grows as they get closer. The strong nuclear force pulls nucleons together, but only within about three femtometres, about the width of a couple of protons. Inside that range, it's far stronger than the **repulsion**. So plot energy against separation. Coming in, there's a hill to climb, called the Coulomb barrier. Inside it, there's a deep **valley**.

Visual: board change to the two-range graph (a new set-up, solid from the first frame, about 1400 px wide): x "separation r (fm)" 0 to 10, the live separation slider (Revision 2) moving the two nuclei together along the top, with readouts (52 px) "r = 10 fm", "repulsion F = 2.3 N", "barrier so far = 0.14 MeV". On "The electric repulsion reaches a long way" a red curve (repulsion) rising gently from the right, red arrows on the nuclei growing as the slider moves in; the readouts step "5 fm: 9.2 N, 0.29 MeV" and "3 fm: 25.6 N, 0.48 MeV"; red hand tag "closer → harder push". On "only within about three femtometres" a navy curve (attraction) that is zero beyond 3 fm and plunges inside it, tag "1 fm = 10⁻¹⁵ m". On "repulsion" at r < 3 fm the navy arrows outgrow the red ones, navy hand tag "short range, much stronger" with a navy pen ring round the 3 fm mark. On "So plot energy against separation" camera change to a single energy-against-separation curve below. On "Coulomb barrier" the hill shades pale red, chip "Coulomb barrier: the energy hill from repulsion". On "valley" the well inside 3 fm shades pale navy, tag "strong force: deep valley".

### 3. how big is the hill?
> How hard is that push? Use Coulomb's law. At three femtometres, two single charges repel with a force of about twenty-six **newtons**. That's about the weight of a two and a half kilogram mass, acting on a nucleus. At the width of an atom, the same two charges would feel about a billion times less. To climb the hill, a nucleus needs about half an MeV of kinetic **energy**.

Visual: board change to the working layout (solid from the first frame, the two nuclei small at the upper left). Task strip: "Force between ²H and ³H nuclei 3.0 fm apart." Equation strip: "F = kq₁q₂/r²". Givens grouped: "q₁ = q₂ = 1.602 × 10⁻¹⁹ C (one proton each)"; "r = 3.0 fm = 3.0 × 10⁻¹⁵ m"; "k = 8.99 × 10⁹ N m² C⁻² (data sheet)". On "newtons" `AlignedAlgebra` "F = 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)² / (3.0 × 10⁻¹⁵)² ≈ 26 N" in a dark-ink frame (56 px); beside it a chip "r = 3.0 → F = 2.6 × 10⁻²⁹ N" fades in and is crossed in red, red hand tag "fm → m: × 10⁻¹⁵". On "a two and a half kilogram mass" tag "≈ weight of 2.6 kg (on a particle of 3.3 × 10⁻²⁷ kg)". On "about a billion times less" a grey line "at 10⁻¹⁰ m: 2.3 × 10⁻⁸ N (about 10⁹ times smaller)". On "energy" the energy curve returns small at the right with the hilltop labelled "≈ 0.5 MeV".

### 4. getting over the hill
> So the nuclei need enormous speeds, which means enormous temperatures. Fusion reactors aim for about a hundred and fifty million kelvin. Even then, a typical nucleus has only about four per cent of the energy it needs to get over. A quantum effect called tunnelling lets some of the faster nuclei pass right **through** the hill, well below its top. So fusion also needs a dense fuel, for lots of collisions, held hot for long enough. In a hot gas, the fast ones are always **rare**.

Visual: board change to the speed spread (a new set-up, solid from the first frame): a cloud of ²H and ³H clusters, each with a speed bar; beside it the energy curve (about 800 px). On "enormous temperatures" a live temperature readout (52 px) steps "T = 1.5 × 10⁷ K: typical 1.9 keV (0.4% of the barrier)" to "T ≈ 1.5 × 10⁸ K: typical 19.4 keV (4%)". On "about four per cent" a typical nucleus marker climbs a small way up the hill and rolls back, tag "typical: ≈ 20 keV ≈ 4% of the barrier". On "tunnelling" a grey dashed path over the top is labelled "classically: climb over (almost none can)". On "through" a faster nucleus, at about an eighth of the barrier height, passes through the hill along a dashed navy path well below the top, navy hand tag "tunnelling: through, well below the top" with a navy pen ring round the crossing point. On "a dense fuel" the cloud packs closer, chip "needs: very hot + very dense + held long enough". On "rare" most bars stay short; a counter "fusions: a few in a very large number of collisions".

### 5. why fission is easier to start
> Compare that with fission. A neutron has no charge, so there's no hill in its way. Even a slow neutron can drift right up to a uranium nucleus and be **captured**. That's why fission can start at ordinary temperatures, while fusion needs millions of kelvin. Fusion's problem was never the energy it releases. It's getting the nuclei close **enough**.

Visual: board change: two energy-against-separation curves side by side. Left "²H + ³H": the hill and the valley. Right "n + ²³⁵U": no hill, only the valley. On "A neutron has no charge, so there's no hill in its way" the right curve's flat approach highlights, tag "no charge → no Coulomb barrier". On "captured" a slow grey neutron marker drifts in along the flat curve and drops into the well (v18's capture). On "fusion needs millions of kelvin" the left marker needs a long amber speed bar to get close, amber hand tag "fusion: must get past the hill (over or through)". On "enough" chip "fusion's difficulty: getting close, not the energy released" in a dark-ink frame; grey hand tag "no charge, no hill" with a grey pen arrow along the flat approach.

### 6. why energy comes out
> Now, why is energy released? Think binding energy. Deuterium's binding energy is about two point two MeV. Tritium's is about eight point five. But helium four's is twenty-eight point three MeV, much more tightly bound, at about seven MeV per **nucleon**. Joining them releases the difference, about seventeen point six MeV. Helium sits far higher up the binding energy **curve**.

Visual: board change (a new set-up, solid from the first frame): three bars (about 700 px tall at full) "²H 2.22 MeV", "³H 8.48 MeV", "⁴He 28.30 MeV", with per-nucleon chips "1.1", "2.8", "7.1". On "much more tightly bound" the ⁴He bar outgrows the other two combined. On "nucleon" chip "7.07 MeV per nucleon". On "releases the difference" `AlignedAlgebra` "28.30 − (2.22 + 8.48) = 17.6 MeV" in a dark-ink frame (56 px), amber pen bracket on the bar difference, amber hand tag "tighter → energy out". On "curve" the curve thumbnail enlarges: an amber arrow from ²H and ³H up to ⁴He (the v18 dashed arrow becomes solid), tag "fusion: up the curve from the light side".

### 7. the same answer from masses
> Check it with masses. Deuterium and tritium atoms have a total mass of five point zero three zero two u. Helium four and a neutron have five point zero one one three. The difference is zero point zero one eight nine **u**. Times nine hundred and thirty-one point five gives seventeen point six MeV, the same **answer**. The products have less mass, because they're more tightly **bound**.

Visual: board change to the working layout (solid from the first frame, the reaction clusters small at the upper left). Task strip: "Energy released in ²₁H + ³₁H → ⁴₂He + ¹₀n." Equation strip: "Δm = m(reactants) − m(products); E = Δm × 931.5 MeV". Givens grouped: "m(²H) = 2.014102 u; m(³H) = 3.016049 u"; "m(⁴He) = 4.002603 u; m(n) = 1.008665 u"; "1 u = 931.5 MeV/c² (data sheet)". Tallies at the top: "A: 2 + 3 = 4 + 1", "Z: 1 + 1 = 2 + 0" tick green. On "five point zero three zero two u" "reactants: 2.014102 + 3.016049 = 5.030151 u". On "five point zero one one three" "products: 4.002603 + 1.008665 = 5.011268 u". On "u" "Δm = 0.018883 u". On "answer" "E = 0.018883 × 931.5 ≈ 17.6 MeV" in a dark-ink frame (56 px), green tick beside scene 6's line, green hand tag "two routes, one Q". On "bound" chip "more tightly bound → less mass → energy out".

### 8. paying back the climb
> So what about the kinetic energy the nuclei brought in? It isn't lost. Whether they go over the hill or tunnel through it, the products get that energy back, plus the seventeen point six MeV. It's like a ball getting past a small hump into a deep **valley**. Total mass and energy together stay the same. Some rest mass becomes kinetic energy of the **products**.

Visual: board change to the energy ledger beside the energy curve (a new set-up, solid from the first frame). On "the kinetic energy the nuclei brought in" ledger bar "kinetic energy in" (amber) sits beside the marker below the hilltop. On "over the hill or tunnel through it" two paths show: a grey dashed one over the top ("classical") and a navy dashed one through the hill ("tunnelling"). On "get that energy back" the marker arrives in the well; the "kinetic energy in" bar carries over to the products, labelled "kept". On "plus the seventeen point six MeV" an extra amber bar "+ Q = 17.6 MeV". On "valley" a small inset of a ball getting past a hump into a deep valley; amber hand tag "K in + Q out". On "Total mass and energy together stay the same" a balance chip "mass-energy before = mass-energy after". On "products" the reactant mass bar shrinks by "Δm" as the amber kinetic bar grows by "Δmc²", framed "K_out = K_in + 17.6 MeV".

### 9. who gets the energy
> The products fly apart in opposite directions, with equal and opposite momentum. The neutron is about a quarter of helium's mass, so it moves much faster, and carries about four fifths of the energy, about fourteen **MeV**. It has no charge, so magnetic fields can't hold it. It flies out to the walls, where its energy becomes **heat**. Per nucleon, the whole reaction gives about three and a half MeV, four times what fission **gives**.

Visual: board change (a new set-up, solid from the first frame): the ⁴He cluster and a grey neutron leaving in opposite directions with equal-length arrows "p" (Year 11 momentum). On "it moves much faster" the neutron's speed bar is four times the alpha's. On "MeV" energy bars "n: ≈ 14.1 MeV", "⁴He: ≈ 3.5 MeV" framed together, grey hand tag "lighter → faster → more KE". On "magnetic fields can't hold it" tag "neutral: not confined". On "heat" the neutron reaches a coded wall block that glows amber, tag "reactor heat comes mostly from the neutrons". On "gives" (second) two chips: "fusion (D-T): 17.6 ÷ 5 ≈ 3.5 MeV per nucleon" and "fission (U-235, v18): 200 ÷ 236 ≈ 0.85 MeV per nucleon".

### 10. back to the stars
> Stars solve all three problems with gravity. In the Sun's core, gravity squeezes the hydrogen to high density at about fifteen million kelvin, and holds it there. Here's a surprise. Fusion reactors need about ten times the Sun's core temperature. The Sun can be slow, because it's enormous and it has billions of years. A reactor has to react quickly in a small volume, so it uses deuterium and tritium, the easiest pair to **fuse**.

Visual: board change (a new set-up, solid from the first frame): the painted Sun `phys-y11-sun-v1.png` (about 640 px, below its 1254 px native size) with the core inset from v05; navy gravity arrows inwards, navy hand tag "gravity confines". On "gravity squeezes the hydrogen" the core inset packs with rose discs, readout "≈ 1.5 × 10⁷ K". On "about ten times the Sun's core temperature" a second readout "fusion reactor: ≈ 1.5 × 10⁸ K" beside it, a bar ten times longer. On "billions of years" tag "Sun: pp chain, slow (v05)". On "fuse" tag "reactor: D-T, fastest reaction at reachable temperatures"; slate pen bracket on the ten-times bar.

### 11. holding a star on Earth
> On Earth, no wall can touch fuel that hot. It would cool the fuel and damage the wall. So the fuel is kept as a plasma, a gas so hot that the electrons are stripped off the nuclei, and charged particles can be held by magnetic **fields**. Remember from Module six, a charged particle circles around a magnetic field. In a doughnut-shaped machine called a tokamak, the particles spiral round and round, away from the **walls**. A huge tokamak called ITER is being built in **France**.

Visual: board change (a new set-up, solid from the first frame): the painted tokamak `y12p-tokamak-v1.png` (about 1000 px wide, 687 px tall, below native size), cutaway, violet plasma ring inside. On "no wall can touch fuel that hot" a small chip "fuel touching a wall" crossed in red. On "plasma" chip "plasma: nuclei and electrons separated". On "fields" coded navy helical field lines drawn twisting round the doughnut (Revision 2, brief 193: not plain rings), navy hand tag "twisted field lines". On "a charged particle circles around a magnetic field" a small inset of m6-v05's circle in a cross grid. On "walls" a rose dot spirals round a twisted (helical) field line, staying clear of the vessel wall; navy pen ring round the clear gap to the wall. On "France" tags "ITER (France): aiming for 150 million °C" and "Australia (ANSTO): first ITER cooperation agreement with a non-member, 2016"; small grey tag "other approach: lasers squeeze fuel pellets".

### 12. a way to remember
> Here's a way to remember why fusion works. Get past the hill, win the **valley**.

Visual: the energy curve full width (solid from the first frame). On "Get past the hill" the marker tunnels through below the top (navy dashed path), with the grey over-the-top path faint beside it, tag "hill ≈ 0.5 MeV"; on "valley" it drops into the well, a long amber bar "+ 17.6 MeV"; the line writes large as the framed memory card (hand lettering, 52 px; reused on the notes screen): "Get past the hill, win the valley." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Two deuterium nuclei fuse to form helium three and a neutron. Using the atomic masses given, calculate the energy released, in MeV. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Two deuterium nuclei fuse: ²₁H + ²₁H → ³₂He + ¹₀n. Atomic masses: ²H 2.014102 u, ³He 3.016029 u, n 1.008665 u. Calculate the energy released in this reaction, in MeV. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 260 px): two coded ²H clusters approaching with red repulsion arrows. Data chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> Reactants, two deuteriums, four point zero two eight two u. Products, helium three and a neutron, four point zero two four seven **u**. The difference is zero point zero zero three five one u, about three point two seven **MeV**. The slip is leaving out the neutron, which gives an impossible **answer**.

Visual: card shrinks to the top; "n" and the three masses underline; givens strip with the three masses and "931.5 MeV/c²"; the picture stays at the right. On "u" (second) "reactants: 2 × 2.014102 = 4.028204 u; products: 3.016029 + 1.008665 = 4.024694 u" (52 px). On "MeV" "Δm = 0.003510 u; E = 0.003510 × 931.5 ≈ 3.27 MeV" in a dark-ink frame (56 px). On "answer" a chip "Δm = 4.028204 − 3.016029 = 1.012 u → 943 MeV" fades in and is crossed in red (red hand tag "count every product"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Fusion releases energy, yet it needs extremely high temperatures to start. Explain why. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Nuclear fusion releases energy, yet it only occurs at extremely high temperatures. Explain why. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 300 px): the painted tokamak with its violet plasma ring. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> Nuclei are positive, so they repel, and they must get within a few femtometres before the strong force can bind **them**. Only very fast nuclei can get through or over that Coulomb barrier, and high temperature means high speeds. Once they fuse, the product is more tightly bound, so energy is **released**. The slip is saying the strong force only switches on when it's **hot**.

Visual: card shrinks to the top; "releases" and "high temperatures" underline; the tokamak picture stays at the right; rows write in turn (44 px). On "them" row "repulsion (long range) vs strong force (≈ 3 fm)" with the hill-and-valley curve small. On "get through or over that Coulomb barrier" row "high T → high speed → enough tunnel through (or get over)". On "released" row "product more tightly bound → less mass → Q > 0" in a dark-ink frame. On "hot" a chip "the strong force only works at high temperature" fades in and is crossed in red (red hand tag "temperature is for getting close"). Hold about 1 second.

### 17. handoff
> All of this treats protons and neutrons as tiny solid balls, held together by the strong force. But are they? Earlier, firing alpha particles at atoms revealed the nucleus inside. What if we fire something at a proton? So what evidence shows that protons and neutrons have smaller **constituents**?

Visual: board clears (camera change): a ⁴He cluster at the centre; one rose proton disc lifts out and enlarges to fill half the frame, plain, with a "?" inside. On "held together by the strong force" navy springs between the four discs. On "firing alpha particles at atoms revealed the nucleus inside" a small thumbnail at the left: v08's gold-foil scattering view (`m8-rutherford`), with a rare large-angle path highlighted, tag "v08: probing an atom found the nucleus". On "What if we fire something at a proton?" a dashed arrow from a small navy dot (an electron) aimed at the enlarged proton, tag "probe a proton?". On "constituents" chip "Next: what evidence shows that protons and neutrons have smaller constituents?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. D-T: Δm = 0.018883 u → 17.6 MeV released.
2. Product more tightly bound → less mass.
3. Coulomb barrier ≈ 0.5 MeV; strong force within ≈ 3 fm.
4. Needs high T, density, confinement; tunnelling helps.
5. Sun: gravity confines. Tokamak: magnetic fields.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Get past the hill, win the valley.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why repulsion does not forbid fusion: the strong force's short-range, deeper well (2). Why extreme temperatures: speed to get past the barrier, mostly by tunnelling (3, 4). Why fission starts easily and fusion does not: the neutron has no charge, so no barrier (5). Why energy is released: tighter binding, less mass (6, 7). Why mass-energy balances despite the barrier: the kinetic energy brought in is kept (8). Why the neutron carries most of the energy: momentum (9). Why reactors are hotter than the Sun: speed and small volume against size and time (10). Why magnetic fields: charged plasma circles round field lines (11).
- **Misconceptions addressed:** repulsion means fusion must cost energy overall (1, 8); the strong force "switches on" when hot (16 crossed); every nucleus at fusion temperature has enough energy (4); the Sun's core is hotter than any reactor (10); leaving out a product (14 crossed); "mass is destroyed" (7: mass-energy conserved).
- **One idea at a time:** forces (2), push size (3), conditions (4), contrast with fission (5), binding (6), masses (7), ledger (8), sharing (9), stars (10), Earth (11).
- **Video makes it easier:** arrows changing length on the slider (2); the marker rolling up the hill and back, or through (4); the bars where helium outgrows the two reactants (6); the ledger bar returning (8); equal momentum arrows with unequal speeds (9); the spiral around a field line (11).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 22 s and 24 s.
- **Avoided double teaching:** the pp chain and why stars fuse (v05), binding energy (v16), Q (v17), fission's 200 MeV (v18), circular motion in B (m6-v05), Coulomb's law and momentum (Year 11) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ4-05`: account for the release of energy in fusion (2, 6 to 9, A2). `P8-IQ4-06`: conservation of energy (8), mass defect (7), binding energy (6), E = mc² (7, A1).
- **Out of scope by design:** pp chain and CNO details (v05); plasma physics and reactor engineering; inertial confinement detail; Lawson criterion; the barrier energy formula (author note a).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Two deuterium nuclei fuse: ²₁H + ²₁H → ³₂He + ¹₀n. Atomic masses: ²H 2.014102 u, ³He 3.016029 u, n 1.008665 u. Calculate the energy released in this reaction, in MeV. (1 u = 931.5 MeV/c²)"
Model answer: Reactants 2 × 2.014102 = 4.028204 u. Products 3.016029 + 1.008665 = 4.024694 u. Δm = 0.003510 u. E = 0.003510 × 931.5 = 3.27 MeV. Classic mistake (crossed): leaving out the neutron (Δm = 1.012 u, "943 MeV").

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Nuclear fusion releases energy, yet it only occurs at extremely high temperatures. Explain why."
Model answer: Nuclei are positively charged, so they repel; the strong nuclear force that can bind them acts only over a few femtometres. To get that close, nuclei must approach at very high speeds to overcome the Coulomb barrier, and a very high temperature gives the nuclei high kinetic energies, so enough of them tunnel through the barrier (well below its top) or, more rarely, get over it. Once fused, the product has a higher binding energy per nucleon, so its mass is less than the reactants' and the mass difference is released as kinetic energy (E = Δmc²), more than the energy needed to bring the nuclei together. Classic mistake (crossed): "the strong force only works at high temperature".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | k = 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²; e = 1.602 × 10⁻¹⁹ C; 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c² | 3, 7, 13, 14 |
| Atomic masses (AME2020) | ¹H 1.007825; n 1.008665; ²H 2.014102; ³H 3.016049; ³He 3.016029; ⁴He 4.002603 u | 6, 7, 13, 14 |
| Coulomb force at 3.0 fm | 25.6 N ("about 26 N"); 25.6 / 9.8 = 2.6 kg; deuteron mass 3.35 × 10⁻²⁷ kg | 3 |
| Atom-scale force | 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)² / (10⁻¹⁰)² = 2.3 × 10⁻⁸ N; ratio 1.1 × 10⁹ | 3 |
| Barrier (author note a) | 0.48 MeV at 3.0 fm; 0.44 MeV at 3.24 fm ("about half an MeV") | 3, 12, notes |
| Temperatures | reactors ≈ 1.5 × 10⁸ K; mean (3/2)kT = 19.4 keV, 4.0% of 0.48 MeV; Sun's core ≈ 1.5 × 10⁷ K (site) | 4, 10 |
| Binding energies | ²H 2.224 MeV (1.112); ³H 8.482 (2.827); ⁴He 28.296 (7.074); 28.296 − 2.224 − 8.482 = 17.590 | 6 |
| D-T | 5.030151 − 5.011268 = 0.018883 u; 17.59 MeV = 2.818 × 10⁻¹² J | 7 |
| Shares | n 14.1 MeV, ⁴He 3.5 MeV (author note d) | 9 |
| Per nucleon | 17.59 / 5 = 3.52; 200 / 236 = 0.85 | 9 |
| ITER, ANSTO | 150 million °C; 30 Sep 2016 agreement | 11 |
| Separation slider (Revision 2) | F = 8.99e9 × (1.602e-19)² / r²: r = 10, 5, 3 fm gives 2.31, 9.23, 25.6 N; U = 0.144, 0.288, 0.480 MeV | 2 |
| Temperature readout (Revision 2) | (3/2)kT: 1.5 × 10⁷ K gives 1.94 keV (0.40% of 0.48 MeV); 1.5 × 10⁸ K gives 19.4 keV (4.0%) | 4 |
| Crossed slip (Revision 2) | r = 3.0 (m, not fm): 8.99e9 × (1.602e-19)² / 9 = 2.56 × 10⁻²⁹ N | 3 |
| A1 | 4.028204 − 4.024694 = 0.003510 u; 3.270 MeV; slip 4.028204 − 3.016029 = 1.012175 u → 942.8 MeV | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad folder `m8v18-22`); Codex to re-check.

- F = 8.99e9 × (1.602e-19)² / (3.0e-15)² = 25.64 N; at 1e-10 m, 2.307e-8 N; ratio (1e-10 / 3e-15)² = 1.11e9; 25.64 / 9.8 = 2.62 kg; U = 8.99e9 × (1.602e-19)² / 3.0e-15 = 7.69e-14 J = 0.480 MeV; r = 1.2(2^(1/3) + 3^(1/3)) fm = 3.243 fm, U = 0.444 MeV.
- (3/2) × 1.381e-23 × 1.5e8 / 1.602e-19 = 19,396 eV; 19.4 / 480 = 4.0%.
- BE(²H) = (1.007825 + 1.008665 − 2.014102) × 931.5 = 2.224; BE(³H) = (1.007825 + 2 × 1.008665 − 3.016049) × 931.5 = 8.482; BE(⁴He) = (2 × 1.007825 + 2 × 1.008665 − 4.002603) × 931.5 = 28.296.
- 2.014102 + 3.016049 = 5.030151; 4.002603 + 1.008665 = 5.011268; 0.018883 × 931.5 = 17.590 MeV.
- 17.59 × 4/5 = 14.07; 17.59 / 5 = 3.52; 200 / 236 = 0.847.
- Revision 2 (Python, 7 Nov): slider F at 10, 5, 3 fm = 2.307, 9.229, 25.64 N; U = 0.1440, 0.2880, 0.4801 MeV; (3/2)kT at 1.5e7 K = 1940 eV (0.40%); at 1.5e8 K = 19,396 eV (4.04%); slip 2.564e-29 N.
- A1: 2 × 2.014102 = 4.028204; 3.016029 + 1.008665 = 4.024694; 0.003510 × 931.5 = 3.270; 4.028204 − 3.016029 = 1.012175; × 931.5 = 942.8.

## Memory aid check

- **Revision 2: "Get past the hill, win the valley."** Meaning, as said in scenes 8 and 12: the nuclei must get past the Coulomb barrier (mostly by tunnelling through it, well below the top, or rarely over it), and the strong-force well beyond is much deeper (the "win"), so fusion releases energy overall. Assumptions checked: "get past" does not claim a full classical climb (brief 193); the kinetic energy brought in is kept, not spent (scene 8's ledger); "valley" stands for the higher binding of the product, with the net release Q = 17.6 MeV for D-T against a barrier of about 0.5 MeV. Replaced: "Pay to climb the hill, win the valley" (implied every fusing pair climbs the full hill). It helps a new case: A2 and any "why does fusion need high temperature" question; it also explains why fission needs no climb (the neutron has no charge, v18). Introduced after the explanation (2 to 8).
- **Considered, not used:** "Fusion: close is hard, closer is easy" (true, but vaguer about energy).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,786 characters**, 18 scene headings (17 narrated scenes and the notes hold). Characters per scene (1 to 18): 361, 425, 367, 475, 342, 371, 376, 355, 426, 429, 471, 77, 164, 292, 119, 367, 294, 75. At 13.3 characters per second the speech is about 435 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the separation slider runs under its narration): **about 504 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 5,729 characters, about 515 s. Reserve trims if the voiced take runs long: scene 10's surprise sentence pair; scene 11's ITER sentence (keep the tag); scene 9's last sentence (keep the chips).

## Opening frame

v18's final frame (`phys-y12-m8-v18.md`, "Final frame"): paper background; heading "Why can one fission event trigger a controlled or uncontrolled chain?"; the coded binding-energy-per-nucleon curve across the frame (labels ²H, ³H, ⁴He, "peak near iron (⁵⁶Fe: 8.8 MeV)", ⁹²Kr, ¹⁴¹Ba, ²³⁵U); a solid amber arrow rising up and to the left from ²³⁵U to the fragments tagged "fission (this video)" (v18 Revision 2, brief 193); a dashed amber arrow from ²H and ³H up to ⁴He with a "?", tagged "fusion?"; an inset of a rose ²H disc and a rose ³H disc with red repulsion arrows pointing apart; chip "Next: why can fusion release energy despite repulsion between nuclei?". Scene 1 shrinks the curve to a corner thumbnail, enlarges the repelling inset and turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why can fusion release energy despite repulsion between nuclei?"; at the centre-left a ⁴He cluster (two rose, two grey discs) with navy springs between them; one rose proton disc lifted out and enlarged to the right half of the frame, plain, with a "?" inside; at the far left a small thumbnail of v08's gold-foil scattering view with one large-angle path highlighted, tag "v08: probing an atom found the nucleus"; a dashed arrow from a small navy electron dot aimed at the enlarged proton, tag "probe a proton?"; chip "Next: what evidence shows that protons and neutrons have smaller constituents?". v20 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v19` (route phys-y12-m8-v19). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v19` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v19` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, two-ranges, coulomb-push, over-the-hill, neutron-contrast, binding-gain, worked-q, energy-ledger, energy-share, stars, tokamak, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v20, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: two-range forces, barrier and well, speed spread, energy ledger, momentum share, field-line spiral, `m8-nucleosynthesis`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the graph; 2 to 3 clear change to working; 3 to 4 clear change; 4 to 5 camera continue (one curve becomes two); 5 to 6 clear change to the bars; 6 to 7 clear change to working; 7 to 8 clear change to the ledger; 8 to 9 clear change; 9 to 10 clear change to the Sun; 10 to 11 clear change to the tokamak; 11 to 12 clear change to the curve; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v19-learning-review.md`, `science_check` = `checks/p-y12-m8-v19-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 1 (fades in on "Yes, it can"), 10.
- `public/assets/physics/y12p-tokamak-v1.png` (1513 × 1040, RGBA; delivered in brief 193, inspected 7 Nov: a cutaway torus with copper D-shaped coils, a central column and a violet plasma ring clear of the walls; no text, people or field lines): 11, 15, 16 (field lines coded, helical).
- **Checked, not used:** `y12p-star-hot-blue-v1.png` (the CNO comparison belongs to v05).

Need (new plate): none. (Revision 1's tokamak request was delivered in brief 193.)

Coded: nuclei and clusters, force and energy curves, slider, speed spread, temperature readouts, binding bars, calculation strips, ledger bars, ball-over-hump inset, momentum arrows, field-line rings and spiral, m6 circle inset, gold-foil thumbnail (`m8-rutherford`), crossed chips, countdowns, key notes board.

Kit gaps (for the v19 build brief):
1. **Two-range forces and barrier-well curve.** Linked force-against-separation and energy-against-separation curves with a slider-driven pair of nuclei (reusable for v21's force-range comparison).
2. **Speed spread.** A particle cloud with a skewed speed distribution, a few long bars reaching a threshold line.
3. **Energy ledger.** Bars that lend and return, then add Q.

## Codex asset brief

Revision 2: no new plates. The request below is kept for the record; it was delivered in brief 193.

1. **`y12p-tokamak-v1.png`** (new). A painted three-quarter cutaway of a tokamak fusion device: a doughnut-shaped (toroidal) steel vacuum vessel with a quarter cut away to show the hollow interior, ringed by D-shaped field coils, with a soft violet-pink glowing plasma ring floating in the middle of the vessel, not touching the walls. Reference general published tokamak cutaways (ITER-style proportions) without copying any logo or branding. No people, figures, hands, text, labels, numbers or arrows (field lines and particle paths are coded overlays). Transparent PNG with alpha channel, about 1600 × 1100, centred with even margins. Style: match `y12p-alpha-scattering-chamber-v1.png` and the Year 11 apparatus plates (painted editorial, restrained shading, on transparent ground).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table and AME2020 masses.
2. Confirm the physics of every learner-visible claim: repulsion's range; the strong force's range and strength; the hill-and-valley curve; 26 N at 3 fm; the barrier "about half an MeV" (author note a); 150 million K and "about four per cent" (author note b); tunnelling named correctly; binding energies; D-T Q; the energy ledger and conservation wording; momentum sharing (author note d); per-nucleon comparison; the Sun's core; plasma and tokamak description; ITER and ANSTO facts (author note e).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quotes match the ledger exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: Why Fusion Releases Energy: Coulomb Barrier and Binding Energy | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html

Two positive nuclei push each other away, so how can joining them release energy? See the two forces at two ranges, the Coulomb barrier and the deep strong-force valley, how big the push really is, why fusion needs extreme temperatures, and how tunnelling lets nuclei through the barrier. Account for the 17.6 MeV of deuterium-tritium fusion with binding energies and atomic masses, check conservation of mass-energy, and compare stars with tokamaks like ITER. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"account for the release of energy in the process of nuclear fusion (ACSPH035, ACSPH036)"
"predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036) the law of conservation of energy; mass defect; binding energy; Einstein’s mass–energy equivalence relationship E=mc²"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: fission chain reactions. Next: the evidence that protons and neutrons have smaller constituents.

#HSCPhysics #Physics #NuclearFusion #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 193's science findings are resolved below; needs the Codex error check before plates and voicing.
- Revision 1 had no independent review. Next: student learning review (trace from v18 and v05; check that the energy-against-separation curve is introduced slowly enough from the two force curves; that "half an MeV" without its formula does not confuse (open decision 1); that the tunnelling clause helps rather than distracts (open decision 2); that the ledger makes conservation explicit), then the physics check and the Codex error check.
- The slider-driven arrows, the marker on the hill, the outgrowing helium bar, the returning ledger bar and the spiral round a field line carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 193 findings (`checks/p-y12-m8-v19-learning-review.md`, `checks/p-y12-m8-v19-science-check.md`): 0 blockers, 3 should fix (learning review: none; it defers the barrier and tokamak points to the science check).
- **Should fix, tunnelling as the route (scenes 4, 5, 8, 12, 16 and the memory aid).** Resolved: scene 4 now says "a typical nucleus has only about four per cent of the energy it needs to get over. A quantum effect called tunnelling lets some of the faster nuclei pass right through the hill, well below its top", and the animation shows a marker at about an eighth of the barrier tunnelling through, with the over-the-top path labelled "classically: climb over (almost none can)". Scene 5's tag reads "must get past the hill (over or through)". Scene 8 now accounts for "the kinetic energy the nuclei brought in", "whether they go over the hill or tunnel through it", with ledger bars "kinetic energy in", "kept", "+ Q". Scene 12's aid becomes "Get past the hill, win the valley." Scene 16 says "get through or over that Coulomb barrier". The A2 model answer, notes, author note c and "Memory aid check" match.
- **Should fix, helical field lines (scene 11).** Resolved: the coded field lines twist helically round the doughnut, the dot spirals round a twisted field line, tag "twisted field lines"; author note h. Narration unchanged.
- **Should fix, title length.** Resolved: 103 to 85 characters ("Why Fusion Releases Energy: Coulomb Barrier and Binding Energy | HSC Physics Module 8").
- Join repair carried from v18: the opening frame's fission arrow rises up and to the left.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plate in scene 1: the reused painted Sun fades in on "Yes, it can" as the proof; the opening frame (v18's final frame) is unchanged otherwise. The delivered tokamak carries scene 11 at about 1000 px wide and the A2 card.
- Live control: the separation slider in scene 2 with live r, force and barrier readouts (10, 5, 3 fm: 2.3, 9.2, 25.6 N; 0.14, 0.29, 0.48 MeV); a temperature readout with the typical energy as a share of the barrier in scene 4.
- Hand tags and a pen mark in role colours in every teaching scene ("the Sun runs on fusion", "closer → harder push", "short range, much stronger", "fm → m: × 10⁻¹⁵", "tunnelling: through, well below the top", "no charge, no hill", "tighter → energy out", "two routes, one Q", "K in + Q out", "lighter → faster → more KE", "gravity confines", "twisted field lines").
- Framed answers: 26 N (3), 17.6 MeV twice (6, 7), "K_out = K_in + 17.6 MeV" (8), the energy shares (9), 3.27 MeV (14), the A2 row (16). New crossed slip: "r = 3.0 → F = 2.6 × 10⁻²⁹ N" (3); A1 and A2 keep theirs.
- Key notes cut from five long items (about 830 characters) to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Question cards arrive with full text and a picture; answer sides add a givens strip.
- Type sizes stated; colour roles fixed. No set-up runs past about 60 s.

New plate requests: none.

Joins: the opening frame is v18's final frame as revised (fission arrow direction only). The final frame (scene 17) is unchanged, so v20's opening holds.

Counts: 5,729 to 5,786 characters (scene sum); about 515 s to about 504 s.
