# Year 12 Physics M8 V22: Particle accelerators. How do accelerators create and test evidence about particles? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,384 characters, 21 scenes (18 teaching scenes, the notes hold, the course-end scene and a silent end hold), about 568 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v21's final frame. This is the last video of Year 12 Physics; it ends on a course-end frame.

Scope: twenty-second and final video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that human understanding of matter is still incomplete?". Templates as `phys-y12-m8-v05.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson19.sa.txt`, hash checked against the live file):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson19.sa.html`, SHA256 `8449bbae72ba25f4d301851cfd6740cb1fdbd52e7e539686844ba7ebe0332f7a` (matches the route): orient and predict (13.6 TeV; why rings; how short-lived particles are seen), compare linacs and synchrotrons (SLAC 1967; why high energy; linacs; synchrotrons with RF cavities, dipoles, quadrupoles, ramped field; LHC 27 km, 6.8 TeV per beam; colliders against fixed targets; luminosity; Figure 1), read the detector layers (tracking, EM and hadronic calorimeters, muon detectors, neutrinos as missing momentum; Figure 2; marked extension), clear the misconceptions (beam energy against centre-of-mass energy; photons leave no track; no neutrino layer), calculate collision energies, read detector signatures ("Analyse 7 marks": electric and magnetic fields in a synchrotron; "Assess 6 marks": the role of accelerators in testing the Standard Model), independent practice, retrieve and reflect.

Route entry: `phys-y12-m8-v22`, sections `compare-linacs-and-synchrotrons`, `read-the-detector-layers`, `read-detector-signatures`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain electric acceleration, magnetic steering/focusing and detector evidence, linking collision energy to accessible processes. Stop before full RF or detector engineering." Next: none ("Consolidate experimental evidence and selected exam applications; no new compulsory content."). Entry knowledge asks that each newly introduced equation is derived before use: B = p/(qr) is rearranged on screen from m6-v05's r = mv/(qB), with p = mv named; W = qV is recalled from m6-v03.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (detector and tunnel plates contain no figures for scale); the linac tunnel (reused from v20), an accelerator dipole magnet and the CMS detector cutaway (new) are painted plates, scaled uniformly, never stretched; accelerator paths, collision products and detector signatures are coded and every event display is labelled "schematic, not real data" (kit teaching reason for lesson 19: "no generated collision image is evidence"); every number recalculated in Python with e = 1.602 × 10⁻¹⁹ C, c = 3.00 × 10⁸ m s⁻¹ (data sheet); "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: m6-v03 (W = qV sets a particle's kinetic energy), m6-v05 (r = mv/(qB); magnetic force does no work), v20 (scattering needs short wavelength; SLAC), v21 (the Standard Model table, the Higgs), m7-v16 (E = mc²), Year 11 (momentum conservation), v19 (tokamak circles), v18 (OPAL, for the course-end montage).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ5-03`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P8-IQ5-03`: "investigate the operation and role of particle accelerators in obtaining evidence that tests and/or validates aspects of theories, including the Standard Model of matter (ACSPH120, ACSPH121, ACSPH122, ACSPH146)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 64)

**Boundary:** starts on v21's final frame (the full Standard Model table with most cells tagged "made in collisions", a ring with two counter-circulating dots behind it). Teaches: why accelerators need high energy (E = mc² to create heavy particles; short wavelength to see small structure); electric fields accelerate (W = qV) and why one huge voltage is impossible, so many small pushes; the linear accelerator (gaps whose field flips in step) and its length limit; why bend into a ring (reuse the same pushes each lap), with magnetic fields to steer (no work, m6-v05) and to focus; the synchrotron condition (fixed radius, so B rises with momentum: B = p/(qr)); the Australian Synchrotron booster worked example (3.0 GeV electrons, r = 8.0 m, B = 1.25 T; at injection 0.042 T); electrons radiate when bent (synchrotron light: the Australian Synchrotron's purpose; why protons for the highest energies); the LHC (27 km, 6.8 TeV per beam, head-on collisions, 13.6 TeV available); detector layers and particle signatures, including the neutrino by missing momentum; the Higgs test (predicted, found at 125 GeV in 2012, a test that could have failed), W and Z in 1983; the limits of accelerator evidence; a short Year 12 course close. Stops before RF cavity design, magnet engineering, luminosity, invariant-mass formalism and centre-of-mass formulae (grey tags only).

## Decisions

- **Learner question (route wording kept).** "How do accelerators create and test evidence about particles?" The answer: they give particles enormous kinetic energy using electric fields, many times over (3, 4, 6), and steer and focus them with magnetic fields so they can be reused and collided (5 to 9); in a collision that energy becomes new, heavy particles (E = mc²) or probes tiny structure (2); layered detectors read what comes out (10, 11); the theory predicts what should appear, at what energy, so a result could have failed it (12), within limits (13).
- **Hook (v21's handoff).** 3 s prediction chips for "How do you make a Higgs boson?": "heat something", "smash particles together very fast", "find one in rocks". Answer: smash particles together with enough energy.
- **Why high energy (site card 1; m7-v16 and v20 recalled).** Two reasons, both from the site: creating a heavy particle needs at least its mc² in the collision (Higgs 125 GeV, top 173 GeV); seeing small structure needs short wavelength (v20). "Collision energy decides which particles and processes are possible" (route).
- **Electric acceleration (m6-v03; site "Analyse 7 marks" step 2).** W = qV: a proton across 1 MV gains 1 MeV; 6.8 TeV in one step would need 6.8 × 10¹² V, impossible, so accelerators give many small pushes. Said "almost seven million million volts".
- **Linac (site).** A row of gaps; the field in each gap flips in step with the particle's arrival, so it is always pushed forwards and shielded when the field is backwards (drift tubes, named on screen). Limited by length: SLAC 3 km, 50 GeV electrons (site). The v20 linac plate reused. The Australian Synchrotron's own linac (100 MeV) is named in scene 7's chain (sourced).
- **Ring (site "Analyse 7 marks" steps 1, 4).** Magnetic force is perpendicular to the velocity, so it does no work and only steers (m6-v05 recalled); a ring brings the particle back to the same accelerating gap each lap. "Electric fields push, magnetic fields steer" is the organising contrast. Focusing: other magnets squeeze the beam so it stays narrow (quadrupoles named on screen; route "focusing"; no engineering).
- **Synchrotron condition (site steps 3, 5; m6-v05 rearranged).** r = mv/(qB) = p/(qB), so for a fixed radius B = p/(qr): as the momentum grows, the field must grow in step, and the accelerating field's timing too; "that's where the name comes from" (site step 3). Momentum p = mv named; for particles near the speed of light the momentum is given in the question (the relativistic p is beyond this video; author note a).
- **Worked example (Australian; sourced).** Australian Synchrotron, Clayton, Melbourne (ANSTO, operating since 2007): a 100 MeV linac feeds a 130 m booster synchrotron that takes electrons to 3.0 GeV, then a 216 m storage ring. Booster at 3.0 GeV: p = 1.60 × 10⁻¹⁸ kg m s⁻¹, r = 8.0 m, B = p/(qr) = 1.25 T (matches the published booster dipole field 1.25 T); at injection (0.1 GeV), B = 0.042 T, so the field ramps about 30 times during each cycle. Sources: World Nuclear Association, https://world-nuclear.org/information-library/appendices/australian-research-reactors (3 GeV, 216 m, 130 m, since 2007); ANSTO, https://www.ansto.gov.au/accelerator-systems-overview (100 MeV linac, booster); booster dipole 1.25 T and 8.25° bends of 1.15 m (bending radius 8.0 m): EPAC/PAC booster comparison, https://epaper.kek.jp/p07/PAPERS/TUPMN001.PDF . Codex to confirm the 1.25 T and 8.0 m against an ANSTO source (open decision 2).
- **Synchrotron light (site step 6).** A charge forced round a curve radiates; electrons, being light, radiate strongly; the Australian Synchrotron keeps electrons circling in its storage ring precisely to make that light (intense X-rays for studying materials and proteins); the same loss is why the highest-energy collider uses protons. Named and explained in one scene; the E⁴/m⁴ scaling is author note b.
- **LHC and colliders (site).** 27 km ring at CERN; protons at 6.8 TeV per beam; about 8 T superconducting dipoles (author note c); two beams head-on, so 13.6 TeV is available (site misconception: beam energy against collision energy). Fixed target: much of the energy is wasted carrying products forwards (site); the formula and 113 GeV appear as a grey "extension" tag only.
- **Detectors (site `read-the-detector-layers`, marked extension by the site but in the route's sections).** One detector chosen (CMS, as the image-bank brief requires: "Choose one, not a hybrid"): from the beam outwards: tracker inside a strong magnetic field (curved tracks: radius gives momentum, direction of bending gives the sign of charge; neutral particles leave no track), electromagnetic calorimeter (stops electrons and photons), hadron calorimeter (stops protons, neutrons, pions), muon chambers (muons pass through everything). Neutrinos escape; they are found by missing momentum (Year 11 momentum conservation: the visible momenta across the beam do not add to zero).
- **Testing the Standard Model (site "Assess 6 marks").** The Higgs: predicted in 1964 (v21), sought for decades, found in 2012 by two separate detectors as an excess of two-photon events at 125 GeV (site: H → γγ, H → ZZ* → 4ℓ). The W and Z found at CERN in 1983 at the predicted masses (site lesson 18). Falsifiability: "if it hadn't turned up at all, the theory would have been in trouble". Limits (site step 5): energy reach; indirect evidence from decay products; gravity untestable. Bounded verdict (site step 6).
- **Memory aid (scene 14, new): "Electric fields push. Magnetic fields steer. Detectors read the debris."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): LHC dipole field for p = 3.63 × 10⁻¹⁵ kg m s⁻¹ protons on r = 2.80 km: 8.09 T. Crossed: leaving r in kilometres (8090 T). A2 (3 marks, explain): the roles of electric and magnetic fields in a synchrotron, and why the magnetic field increases. Crossed: "the magnetic field speeds the particles up".
- **Course end (brief's instruction).** After the key notes, a short course-end scene (about 25 s of narration and a 3 s hold) closes Year 12 Physics: one thumbnail per module (M5 projectile and orbit, M6 a charge circling in a field, M7 a light wave and spectrum, M8 the atom and the Standard Model table), the line "Year 12 Physics: complete", and "Next: practise with past HSC papers". No new content (route `nextHandoff`). See "Final frame".
- **Colour key (as v20 and v21):** protons rose dots, electrons navy dots, photons amber wavy arrows, muons navy dots with a long tail, neutrinos grey dashed (invisible to the detector), hadrons rose clusters; electric field arrows amber, magnetic field cross grids navy; detector layers: tracker pale grey, EM calorimeter green, hadron calorimeter orange, muon chambers blue-grey (CMS public colour convention, simplified); event displays on a pale grey card with "schematic, not real data".
- **Site sources used:** lesson 19 card 1 (why high energy; linacs; synchrotrons; dipoles and quadrupoles; ramped field; LHC 27 km, 6.8 TeV, 13.6 TeV; colliders against fixed targets; Figure 1) (2 to 9); card 2 (detector layers; signatures; neutrinos; Figure 2) (10, 11); misconceptions (13.6 not 6.8 TeV; photons leave no track; no neutrino layer) (9, 11); HSC tip (Higgs via γγ and 4ℓ) (12); "Analyse 7 marks" (division of labour; F = qE does work; alternating field in step; magnetic force as centripetal; ramped field; synchrotron radiation; purpose) (3 to 8, A2); "Assess 6 marks" (what testing requires; two kinds of evidence; falsifiability; three limits; bounded verdict) (12, 13); Q1(c) method (B from p = qBr) (A1). Not used: luminosity, √s formulae and invariant mass (grey tags only); the 1 GeV/c = 5.34 × 10⁻¹⁹ kg m s⁻¹ conversion (momenta are given in SI).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. SLAC length (lesson 19): card 1 says "SLAC reached 50 GeV electrons over a 3 km track"; retrieve and reflect says "SLAC's 3.2 km linear accelerator". The linac is 3.2 km (2 miles); 50 GeV was reached in its later SLC upgrade (1989), while the 1967 experiments ran at up to about 20 GeV. Suggest "3.2 km" in both places and "later reached 50 GeV".
  2. Detector field ordering (lesson 19 card 2): "A strong magnetic field bends their trajectories" in the tracker; in CMS the solenoid encloses the tracker and both calorimeters, while in ATLAS the solenoid is inside the calorimeters; the generic statement is fine, but Figure 2 should not be read as one specific detector. Note only.
  3. Higgs channel wording (lesson 19 independent practice): "two photon showers in the EM calorimeter with no inner tracks" is correct for unconverted photons; about a third of photons convert to electron pairs in the tracker. Note only.
  4. Checked and correct: LHC 27 km (26.7), 6.8 TeV per beam, 13.6 TeV; Higgs 125 GeV, 2012; W 1983; fixed-target 400 GeV example √(2 × 0.938 × 400) = 27.4 GeV; 6.8 TeV fixed target 113 GeV; Q1(c) r = 16.7 m; dipoles steer, RF cavities accelerate; synchrotron radiation limits electrons.
- **Cause chain taught, in order:** (1) heavy particles need at least mc² of collision energy, and small structure needs short wavelength (2); (2) an electric field does work qV, but one huge voltage is impossible, so many pushes (3); (3) a linac adds pushes in a line, timed so each one is forwards, and is limited by length (4); (4) a magnetic force is perpendicular to the motion, so it steers without doing work, and a ring reuses the pushes (5); (5) with a fixed radius, the field must rise as momentum rises, B = p/(qr) (6, 7); (6) bending makes electrons radiate light, useful at the Australian Synchrotron and a limit for colliders (8); (7) colliding two beams head-on makes all their energy available (9); (8) layered detectors identify particles by where they stop and how they bend; missing momentum reveals neutrinos (10, 11); (9) the theory predicted what should appear and where, so finding it at 125 GeV was a test it could have failed (12); (10) the evidence has limits (13).
- **Entry knowledge (route `entryKnowledge`):** v21 (the table, the Higgs); v20 (SLAC, wavelength); m6-v03 (W = qV); m6-v05 (r = mv/(qB), zero work); m7-v16 (E = mc²); Year 11 (momentum conservation).
- **Learner-visible vocabulary (plain meaning at first use):** particle accelerator (a machine that gives charged particles huge kinetic energy, 1); linear accelerator (linac) (4); drift tube (screen only, 4); synchrotron (a ring accelerator whose magnetic field rises in step with the particles' momentum, 6); dipole and quadrupole magnets (bending and focusing, 5); synchrotron light (8); collider (9); tracker, calorimeter, muon chamber (10); missing momentum (11).
- **Legacy logic ported:** none. `m8-accelerator` supplies the ring and the layered detector schematic (5 to 11) within its limits ("Ring not an LHC engineering layout; no timing or magnet ramp model"; "Detector trajectories are schematic; no quantitative momentum reconstruction or missing-momentum inference"): this design adds the ramp readout and the missing-momentum arrow as new coded parts.
- **New explainer motion:** **voltage ladder** (a single huge voltage bar crossed, then a staircase of small steps); **linac gaps** (a row of drift tubes with field arrows that flip as a particle dot passes, its speed bar rising step by step); **ring push and steer** (a ring with one accelerating gap glowing amber and magnet segments navy; force arrows: amber along the motion in the gap, navy towards the centre in the magnets); **field ramp** (a momentum readout rising with a B readout tracking it, the orbit radius readout fixed); **synchrotron light** (amber light cones leaving tangentially from an electron's curved path); **head-on collision** (two dots meeting with an energy bar summing); **detector layers** (`m8-accelerator`, upgraded: concentric layers with schematic tracks, deposits and a missing-momentum arrow); **two-photon bump** (a schematic histogram with a smooth background and a small bump at 125 GeV, labelled "schematic, not real data"); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 15 and 17); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the machine or detector view in the centre; equations and readouts at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Momenta: for a 3.0 GeV electron, γ ≈ 5,900, so p = E/c to better than one part in 10⁷: 3.0 × 10⁹ × 1.602 × 10⁻¹⁹ / 3.00 × 10⁸ = 1.602 × 10⁻¹⁸ kg m s⁻¹. For a 6.8 TeV proton, p = 3.63 × 10⁻¹⁵ kg m s⁻¹. B = p/(qr) holds relativistically with relativistic momentum (the formula sheet's p = m₀v/√(1 − v²/c²)); the cards give p directly.
  (b) Synchrotron radiation energy loss per turn ∝ E⁴/(m⁴r): at equal energy and radius an electron loses (1836)⁴ ≈ 1.1 × 10¹³ times more than a proton.
  (c) LHC: circumference 26.7 km; 1232 superconducting dipoles, 8.33 T design at 7 TeV; at 6.8 TeV about 8.1 T; bending radius 2804 m (the ring includes straight sections, so 27 km / 2π overstates it). Run 3 at 13.6 TeV began in 2022.
  (d) CMS: superconducting solenoid 3.8 T enclosing tracker, ECAL (lead tungstate crystals) and HCAL; muon chambers interleaved with the iron return yoke. ATLAS differs (inner solenoid, outer toroids); the design shows CMS only.
  (e) Higgs: predicted 1964 (Brout and Englert; Higgs; Guralnik, Hagen and Kibble); announced 4 July 2012 by ATLAS and CMS. W and Z: UA1 and UA2 at CERN, 1983.
  (f) Australian Synchrotron facts: Clayton, Victoria; operated by ANSTO; first light 2006, user operations 2007; 100 MeV linac, 130 m booster (0.1 to 3.0 GeV, dipole 1.25 T at 3 GeV), 216 m storage ring at 3.0 GeV; beamlines include macromolecular crystallography and medical imaging.
  (g) Pronunciations: "linac" as "lin-ack", "synchrotron" as "sink-row-tron", "calorimeter" as "kal-or-im-it-er", "CERN" as "sern", "CMS" as "C M S", "TeV" as "tera-electron-volts" (narration says "trillion electron volts").
- **Open decisions for root:**
  - **1. Detector depth (root).** The site marks detector layers as extension; the route lists them. Kept to two scenes (10, 11) with no calculation. Confirm.
  - **2. Booster numbers (Codex source check).** B = 1.25 T and r = 8.0 m for the Australian Synchrotron booster come from a design-comparison paper and the bend geometry (8.25°, 1.15 m). Confirm with an ANSTO source, or present the example as "a booster like the Australian Synchrotron's".
  - **3. New plates `y12p-dipole-magnet-v1` and `y12p-cms-detector-v1` (Codex).** If not made, coded outlines.
  - **4. Course-end frame (root).** The thumbnails reuse each module's key coded views; root to confirm the set and whether the playlist end card links to an exam-practice series.
  - **5. Site notes 1 to 3** for the site log.

Main question: *To make a Higgs boson, you need a collision with at least 125 GeV of energy, then a way to see something that lasts far less than a billionth of a second. How do accelerators do both, and how does that test the theory?*
Entry knowledge: the Standard Model table (v21); scattering and wavelength (v20); W = qV (m6-v03); r = mv/(qB) (m6-v05); E = mc² (m7-v16); momentum conservation (Year 11).
Stops after: electric acceleration, magnetic steering and focusing, linac, synchrotron, collider, detectors, testing and its limits; then the course close. No RF or detector engineering.
Handoff: none (end of Year 12 Physics). Next for learners: exam practice.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *W*, *q*, *V*, *r*, *p*, *B*, *E*.

### 1. hook (how do you make a Higgs?)
> Most of the Standard Model never turns up in ordinary matter. So how do you make a Higgs boson, or a top quark, to study it? Make your **prediction**. You smash particles together, with enormous energy. So how do accelerators create and test evidence about **particles**?

Visual: opens on v21's final frame (see "Opening frame"). On "Most of the Standard Model never turns up in ordinary matter" the gold "made in collisions" tags pulse. On "a Higgs boson, or a top quark" the H and t cells enlarge. On "prediction" a 3 s `Countdown` beside chips "heat something", "smash particles together very fast", "find one in rocks". On "You smash particles together" the second chip ticks; the ring behind the table brightens, its two dots meeting in a flash. On "particles" the chip becomes the heading: "How do accelerators create and test evidence about particles?".

### 2. why so much energy?
> There are two reasons. First, to make a heavy particle, the collision must supply at least its mass as energy, E equals m c squared. A Higgs boson needs at least a hundred and twenty-five GeV. Second, seeing tiny structure needs a tiny wavelength, so huge momentum. So the collision energy decides which particles and processes are **possible**.

Visual: board change: two panels. Left "make it": an energy bar filling to a dashed line "Higgs: mc² = 125 GeV", chip "E = mc² (m7)". On "at least a hundred and twenty-five GeV" a second line "top quark: 173 GeV". Right "see it": v20's wavelength comparison thumbnail (a short wave across a proton), chip "λ = h/p: more momentum, finer detail (v20)". On "possible" a slider "collision energy" sweeping up, with cells of the Standard Model thumbnail lighting as their mc² is passed (W, Z, H, t), tag "energy sets what is possible".

### 3. pushing with electric fields
> You speed particles up with electric fields. A charge crossing a potential difference gains energy, W equals q V. A proton crossing one million volts gains one MeV. Reaching the biggest collider's energy in one go would take almost seven million million volts. So accelerators give many smaller pushes, one after **another**.

Visual: board change to the voltage ladder. On "W equals q V" chip "W = qV (m6)". On "A proton crossing one million volts gains one MeV" a rose dot crosses a 1 MV gap, energy readout "1 MeV". On "almost seven million million volts" a single giant voltage bar "6.8 × 10¹² V" rises off the frame, then is crossed. On "another" the bar becomes a staircase of many small steps, the energy readout climbing step by step.

### 4. a straight line of pushes
> The simplest way is a straight line, a linear accelerator. Particles pass through a row of gaps. The fields in the gaps flip in step, so every time a particle reaches a gap, it's pushed **forwards**. Each gap adds a little more energy. But a straight machine can only be so long. The one in California was three kilometres long, and that limits the energy it can **reach**.

Visual: board change: the painted linac tunnel `y12p-linac-tunnel-v1.png` (reused from v20, scaled uniformly) small at the top; below it the coded linac gaps: a row of drift tubes (tag "drift tubes") with amber field arrows in the gaps. On "a row of gaps" the gaps highlight. On "forwards" a rose dot passes; as it reaches each gap the arrows there point forwards, then flip once it is inside the next tube; its speed bar steps up. On "Each gap adds a little more energy" an energy readout ticks up per gap. On "reach" a length bar "3 km → energy limit", tag "linac: one pass, limited by length".

### 5. bending it into a ring
> Now bend the path into a ring, and the same gaps push the particles again on every lap. To bend them, use magnetic fields. A magnetic force is at right angles to the motion, so it does no work. It can't speed particles up, but it can steer them round a **curve**. Other magnets squeeze the beam, to keep it narrow. So electric fields push, and magnetic fields **steer**.

Visual: board change to the ring (`m8-accelerator`): one gap glowing amber at the bottom, navy magnet segments round the rest. On "the same gaps push the particles again on every lap" a rose dot circles, gaining a small energy step each time it passes the gap, lap counter ticking. On "A magnetic force is at right angles to the motion" in a magnet segment a navy force arrow towards the centre, perpendicular to the velocity arrow, chip "F ⊥ v: no work (m6)". On "curve" the painted dipole magnet `y12p-dipole-magnet-v1.png` (scaled uniformly) appears small beside the ring, tag "bending (dipole) magnet". On "Other magnets squeeze the beam" a short segment narrows the beam's width, tag "focusing (quadrupole) magnets". On "steer" chip "electric fields push; magnetic fields steer".

### 6. a field that keeps up
> But there's a catch. The radius of a charge's circle is r equals m v over q B, and m v is the momentum, p. As the particles speed up, their momentum grows. To keep them on the same ring, the magnetic field has to grow in step. Rearranged, B equals p over q **r**. A ring that ramps its field like this is called a synchrotron, because the field and the pushes stay in step, **synchronised**.

Visual: board change: the ring on the left, the field ramp on the right. On "r equals m v over q B" chip "r = mv/(qB) (m6)". On "m v is the momentum, p" the "mv" brackets "p". On "their momentum grows" a momentum readout climbs; the orbit (ghost) starts to widen. On "the magnetic field has to grow in step" a B readout climbs with it and the orbit stays on the ring; radius readout fixed "r: fixed". On "r" `AlignedAlgebra` "r = p/(qB) → B = p/(qr)" boxed. On "synchrotron" chip "synchrotron: B rises in step with p (fixed r)". On "synchronised" the gap's flip timer and the B readout pulse together, tag "in step: synchro-".

### 7. worked example: the Australian Synchrotron
> Try it on the Australian Synchrotron in Melbourne. Its booster ring takes electrons up to three GeV. Each electron's momentum is then one point six zero times ten to the minus eighteen kilogram metres per second, and the bending radius is eight point zero metres. B equals p over q r, which gives one point two five **tesla**. The electrons arrive with a thirtieth of that momentum, so the field starts at a thirtieth too, and ramps up as they **accelerate**.

Visual: board change to the working layout. Task strip: "Magnetic field needed in the booster at 3.0 GeV." Equation strip: "B = p/(qr)". Givens grouped: "p = 1.60 × 10⁻¹⁸ kg m s⁻¹ (3.0 GeV electrons)"; "r = 8.0 m"; "q = 1.602 × 10⁻¹⁹ C (data sheet)". Small context strip: "Australian Synchrotron, Clayton (Vic): linac 100 MeV → booster (130 m) → 3.0 GeV → storage ring (216 m)". On "tesla" `AlignedAlgebra` "B = 1.60 × 10⁻¹⁸ / (1.602 × 10⁻¹⁹ × 8.0) ≈ 1.25 T" boxed. On "a thirtieth of that momentum" a second line "at 0.1 GeV: p ÷ 30 → B ≈ 0.042 T". On "accelerate" a ramp graph "B (T)" against "time in each cycle" rising from 0.042 to 1.25.

### 8. light from bent electrons
> There's a cost. Any charge forced round a curve gives off light, called synchrotron light, and light particles like electrons lose energy this way fast. At the Australian Synchrotron, that's the point. Its electrons circle a two hundred and sixteen metre ring, giving off intense X-rays for research. But for the highest-energy collisions it's a problem, so the biggest collider uses protons **instead**.

Visual: board change: a coded storage ring with a navy electron dot circling; at each bend amber light cones leave tangentially. On "called synchrotron light" chip "synchrotron light: from charges forced round a curve". On "lose energy this way fast" an energy bar for the electron dropping each lap and being topped up at the gap. On "a two hundred and sixteen metre ring" tag "storage ring: 216 m, 3.0 GeV". On "intense X-rays for research" the cones lead to short beamline stubs, tags "materials", "proteins". On "instead" a comparison chip "same energy and ring: electrons radiate about 10¹³ times more than protons" (grey) and the label "highest energies: protons".

### 9. head-on collisions
> That's the Large Hadron Collider at CERN, a twenty-seven kilometre ring. Two beams of protons travel in opposite directions, each at six point eight trillion electron volts, steered by magnets of about eight tesla. Then the beams cross, head on. Because they meet head on, all of their energy is available, thirteen point six trillion electron volts, not six point **eight**.

Visual: board change: a large coded ring "LHC, CERN: 27 km". On "Two beams of protons travel in opposite directions" two rose dots circling opposite ways, tags "6.8 TeV each". On "magnets of about eight tesla" the dipole plate small, tag "≈ 8 T (superconducting)". On "the beams cross, head on" the dots meet in a flash at a crossing point. On "eight" an energy bar "6.8 + 6.8 = 13.6 TeV available" with a crossed chip "6.8 TeV"; then a small silent inset: one dot hitting a still target, the products streaming forwards, tag "fixed target: much less available (extension: about 0.11 TeV for a 6.8 TeV beam)".

### 10. a detector like an onion
> Then you have to see what comes out. Around each collision sits a detector built in layers. In the middle, a tracker records the paths of charged particles, in a strong magnetic field. The amount of bending gives their momentum, and its direction gives their charge. Next, a layer stops electrons and photons. Then a thicker layer stops protons, neutrons and pions. Only muons get through everything, to the outer **chambers**.

Visual: board change: the painted CMS cutaway `y12p-cms-detector-v1.png` (scaled uniformly) at the left; at the right the coded layer cross-section (`m8-accelerator`), beam pipe at the centre. On "a tracker records the paths of charged particles" the inner pale grey layer labels "tracker (in a strong B field)", a curved schematic track. On "its direction gives their charge" two tracks bending opposite ways, tags "+" and "−", chip "tighter curve → less momentum (r = p/qB)". On "stops electrons and photons" the green layer labels "electromagnetic calorimeter". On "stops protons, neutrons and pions" the orange layer labels "hadron calorimeter". On "chambers" the blue-grey outer layer labels "muon chambers", a long navy track crossing every layer; card label "schematic, not real data".

### 11. reading the signatures
> So each particle leaves a signature. A photon has no charge, so it leaves no track, just a burst of energy in the first calorimeter. An electron leaves a curved track, then stops in the same layer. A muon leaves a track all the way out. A neutrino leaves nothing at all. But momentum is conserved. Across the beam, the momenta of everything you can see should add to zero. If they don't, something unseen carried the rest, a **neutrino**.

Visual: the coded cross-section enlarges. On "A photon has no charge, so it leaves no track" an amber wavy arrow crosses the tracker with no track and ends in a green deposit, tag "γ". On "An electron leaves a curved track, then stops in the same layer" a navy curved track ending in a green deposit, tag "e⁻". On "A muon leaves a track all the way out" a navy track through all layers, tag "μ". On "A neutrino leaves nothing at all" a grey dashed line exits, tag "ν (not detected)". On "the momenta of everything you can see should add to zero" momentum arrows of the visible particles add head to tail; the chain does not close. On "neutrino" (second) a dashed grey arrow closes the gap, tag "missing momentum → neutrino"; card label "schematic, not real data".

### 12. a test the theory could fail
> So how does this test a theory? The Standard Model predicted the Higgs boson back in nineteen sixty-four. In twenty twelve, two separate detectors at the Large Hadron Collider both saw an excess of events with two photons at a hundred and twenty-five GeV. That was the Higgs. If it had never turned up, the theory would have been in **trouble**. The W and Z were found at their predicted masses in nineteen eighty-**three**.

Visual: board change to the two-photon bump: a schematic histogram "number of two-photon events" against "combined energy of the two photons (GeV)" from 100 to 160, a smooth falling background; card label "schematic, not real data". On "predicted the Higgs boson back in nineteen sixty-four" the v21 table thumbnail with the H ring, tag "predicted 1964". On "an excess of events with two photons at a hundred and twenty-five GeV" a small bump rises at 125, tag "2012: Higgs (two detectors)". On "trouble" chip "a real test: the prediction could have failed". On "three" the W and Z cells tick, tag "W, Z found 1983 at predicted masses".

### 13. what accelerators can't tell us
> Accelerator evidence has limits. It only tests the theory up to the energy the machines reach. Most new particles decay almost instantly, so we see only what they turn into, and work backwards. And no accelerator can test gravity, which the Standard Model leaves out. So the theory is well tested where we can reach, but that's not the same as **complete**.

Visual: board change: three limit chips appear one at a time beside a coded energy scale with a shaded "reached so far" band. On "up to the energy the machines reach" the band edge "≈ 13.6 TeV" with "?" beyond. On "we see only what they turn into" a Higgs ring dissolving into two amber arrows, tag "inferred from decay products". On "no accelerator can test gravity" the grey "gravity: not in the Standard Model" box from v21. On "complete" chip "well tested in its range; not complete".

### 14. a way to remember
> Here's a way to remember how they work. Electric fields push. Magnetic fields steer. Detectors read the **debris**.

Visual: the ring and the detector small side by side. On "Electric fields push" the gap glows amber; on "Magnetic fields steer" the magnet segments glow navy; on "debris" the detector's layers light in order; the line writes large: "Electric fields push. Magnetic fields steer. Detectors read the debris." Hold about 2 seconds.

### 15. attempt 1 (countdown, 10 seconds)
> Your turn. In the Large Hadron Collider, protons with the momentum given travel round a bend of radius two point eight zero kilometres. Calculate the magnetic field the bending magnets need. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In the Large Hadron Collider, each proton has a momentum of 3.63 × 10⁻¹⁵ kg m s⁻¹ and follows a curved path of radius 2.80 km in the bending magnets. Calculate the magnetic field strength required. (q = 1.602 × 10⁻¹⁹ C) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 1 (brief)
> Convert the radius first, two point eight zero kilometres is two thousand eight hundred **metres**. Then B equals p over q r, which gives about eight point zero nine **tesla**. The slip is leaving the radius in kilometres, which gives over eight thousand **tesla**.

Visual: card shrinks to the top; "2.80 km" and "3.63 × 10⁻¹⁵" underline. On "metres" "r = 2.80 km = 2.80 × 10³ m". On "tesla" (first) "B = p/(qr) = 3.63 × 10⁻¹⁵ / (1.602 × 10⁻¹⁹ × 2.80 × 10³) ≈ 8.09 T" boxed. On "tesla" (second) a chip "B = 3.63 × 10⁻¹⁵ / (1.602 × 10⁻¹⁹ × 2.80) ≈ 8090 T" fades in and is crossed (caption "metres, not kilometres"). Hold about 1 second.

### 17. attempt 2 (countdown, 10 seconds)
> Last one. Explain the roles of the electric and magnetic fields in a synchrotron, and why the magnetic field must increase as the particles speed up. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain the roles of the electric and magnetic fields in a synchrotron, and why the magnetic field strength must increase as the particles gain energy. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 18. feedback 2 (brief)
> The electric field pushes along the motion, so it does work and increases the particles' kinetic **energy**. The magnetic field is at right angles to the motion, so it does no work. It provides the force that keeps them on the **ring**. Since r equals p over q B, and the radius is fixed, B must rise as the momentum **rises**. The slip is saying the magnetic field speeds them **up**.

Visual: card shrinks to the top; "roles" and "must increase" underline. On "energy" row "electric field: F along v → does work → KE ↑ (each pass)". On "ring" row "magnetic field: F ⊥ v → no work → steers (centripetal force)". On "rises" row "r = p/(qB), r fixed → B ∝ p". On "up" a chip "the magnetic field speeds the particles up" fades in and is crossed (caption "B steers; E pushes"). Hold about 1 second.

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. High energy is needed to create heavy particles (E = mc²: at least mc² in the collision) and to see small structure (short wavelength).
2. Electric fields accelerate (W = qV; many small pushes, timed in step). Magnetic fields steer and focus (force ⊥ velocity, no work).
3. Linac: straight, one pass, limited by length. Synchrotron: ring with fixed radius, so B = p/(qr) rises with momentum. Bent electrons give off synchrotron light (Australian Synchrotron).
4. Colliders: two beams head on make all their energy available (LHC: 6.8 + 6.8 = 13.6 TeV).
5. Detector layers: tracker (curvature → momentum, sign of charge), EM calorimeter (e⁻, γ), hadron calorimeter (p, n, π), muon chambers (μ); neutrinos from missing momentum. Evidence tests predictions (Higgs 2012 at 125 GeV) within limits (energy reach, indirect, no gravity).

Memory aid (large, on the notes screen): *Electric fields push. Magnetic fields steer. Detectors read the debris.*

### 20. course end
> And that's the end of Year 12 Physics. You started with projectiles and orbits, then charges pushed and bent by fields, then the nature of light, and finally the universe and the atom. One idea ran through all of it. Every model was tested against **evidence**. Now, put it to work with past HSC papers. Good **luck**.

Visual: board change to the course-end frame (see "Final frame"). On "projectiles and orbits" the Module 5 thumbnail lights (a coded projectile parabola and a satellite orbit). On "charges pushed and bent by fields" the Module 6 thumbnail (a charge circling in a cross grid). On "the nature of light" the Module 7 thumbnail (a wave and a spectrum strip). On "the universe and the atom" the Module 8 thumbnail (the Standard Model table, small). On "evidence" a thin line joins the four thumbnails, tag "models tested against evidence". On "luck" the line "Year 12 Physics: complete" and the chip "Next: practise with past HSC papers". Hold about 3 seconds. This is the final frame.

### 21. end hold (silent)
Visual: the course-end frame holds silently for the end card (about 3 seconds; no narration). No new text appears.

## Teaching checks

- **Does it explain causes?** Why high energy: mass creation and resolution (2). Why many pushes: one huge voltage is impossible (3). Why the linac's field flips: so each push is forwards (4). Why a ring: reuse the pushes (5). Why magnets cannot speed particles up: perpendicular force, no work (5). Why B must rise: fixed radius and rising momentum (6, 7). Why protons for the highest energies: electrons radiate (8). Why head-on: all the energy is available (9). Why neutrinos show up as missing momentum: momentum conservation (11). Why the Higgs result is a test: it could have failed (12).
- **Misconceptions addressed:** magnetic fields speed particles up (5, 18 crossed); beam energy equals collision energy (9); photons leave tracks (11); there is a neutrino layer (11); a detector "sees" the Higgs directly (13); leaving units in km (16 crossed); a well-tested theory is complete (13).
- **One idea at a time:** why energy (2), push (3), linac (4), steer (5), ramp (6), example (7), radiation (8), collisions (9), layers (10), signatures (11), testing (12), limits (13).
- **Video makes it easier:** the giant voltage bar crossed and turned into a staircase (3); arrows flipping in the gaps as the dot passes (4); perpendicular force arrows in the magnets (5); the B readout tracking the momentum while the radius stays fixed (6); light cones from the bends (8); visible momentum arrows failing to close (11); the bump rising at 125 GeV (12).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 25 s.
- **Avoided double teaching:** W = qV (m6-v03), r = mv/(qB) and zero work (m6-v05), wavelength and scattering (v20), the table and the Higgs (v21), E = mc² (m7-v16), momentum conservation (Year 11) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ5-03`: operation of particle accelerators (3 to 9, A1, A2) and their role in obtaining evidence that tests and validates the Standard Model (2, 10 to 13).
- **Out of scope by design:** RF cavity design, magnet engineering, luminosity, centre-of-mass and invariant-mass formulae (grey tags only), detector electronics, the 1 GeV/c conversion.

## Practice questions and model answers

**Attempt 1 (scene 15; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In the Large Hadron Collider, each proton has a momentum of 3.63 × 10⁻¹⁵ kg m s⁻¹ and follows a curved path of radius 2.80 km in the bending magnets. Calculate the magnetic field strength required. (q = 1.602 × 10⁻¹⁹ C)"
Model answer: r = 2.80 × 10³ m. From r = mv/(qB) = p/(qB), B = p/(qr) = 3.63 × 10⁻¹⁵ / (1.602 × 10⁻¹⁹ × 2.80 × 10³) = 8.09 T. Classic mistake (crossed): leaving r in kilometres, B ≈ 8090 T.

**Attempt 2 (scene 17; original wording, HSC style, 3 marks).** "Explain the roles of the electric and magnetic fields in a synchrotron, and why the magnetic field strength must increase as the particles gain energy."
Model answer: The electric field in the accelerating sections exerts a force along the particles' motion, so it does work on them and increases their kinetic energy each time they pass (the field alternates in step so it always pushes forwards). The magnetic field exerts a force perpendicular to the velocity, so it does no work; it supplies the centripetal force that keeps the particles on the ring (and other magnets focus the beam). Since r = p/(qB) and the ring's radius is fixed, B must increase in proportion to the particles' momentum as they gain energy. Classic mistake (crossed): "the magnetic field speeds the particles up".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | e = 1.602 × 10⁻¹⁹ C; c = 3.00 × 10⁸ m s⁻¹ | 7, 15, 16 |
| Masses to create | Higgs 125 GeV; top 173 GeV; W 80.4; Z 91.2 GeV | 2, 12 |
| W = qV | 1 MV → 1 MeV (1.602 × 10⁻¹³ J); 6.8 TeV → 6.8 × 10¹² V | 3 |
| SLAC | 3 km (3.2 km; site note 1); 50 GeV later | 4 |
| Booster example | p = 3.0 × 10⁹ × 1.602 × 10⁻¹⁹ / 3.00 × 10⁸ = 1.602 × 10⁻¹⁸ kg m s⁻¹; r = 8.0 m; B = 1.25 T; at 0.1 GeV p = 5.34 × 10⁻²⁰, B = 0.0417 T; ratio 30 | 7 |
| Australian Synchrotron | linac 100 MeV; booster 130 m; storage ring 216 m; 3.0 GeV; since 2007 | 7, 8 |
| Radiation ratio | (1836)⁴ = 1.1 × 10¹³ (author note b) | 8 |
| LHC | 27 km; 6.8 TeV per beam; 13.6 TeV; ≈ 8 T dipoles; fixed target √(2 × 0.938 × 6800) = 113 GeV | 9 |
| Higgs, W, Z | 1964 prediction; 2012 discovery; 1983 W and Z | 12 |
| A1 | B = 3.63e-15 / (1.602e-19 × 2800) = 8.093 T ("8.09 T"); slip with r = 2.80: 8093 T ("over eight thousand", "8090") | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad folder `m8v18-22`); Codex to re-check.

- p(3.0 GeV) = 3.0e9 × 1.602e-19 / 3.00e8 = 1.602e-18; B = 1.602e-18 / (1.602e-19 × 8.0) = 1.250 T; p(0.1 GeV) = 5.34e-20; B = 0.0417 T; 3.0 / 0.1 = 30.
- p(6.8 TeV) = 6.8e12 × 1.602e-19 / 3.00e8 = 3.631e-15; B = 3.631e-15 / (1.602e-19 × 2800) = 8.095 T (8.084 T with r = 2804 m); with the card's 3.63e-15: 8.093 T.
- 2 × 6.8 = 13.6; √(2 × 0.938 × 6800) = 112.9 GeV; 1836⁴ = 1.14e13.

## Memory aid check

- **"Electric fields push. Magnetic fields steer. Detectors read the debris."** Meaning, as said in scenes 3 to 5, 10, 11 and 14: electric fields do work on charged particles and raise their kinetic energy; magnetic fields, perpendicular to the motion, change direction only (bending and focusing); detectors identify the collision products by their tracks and where they stop. Assumptions checked: "push" means along the motion in the accelerating gaps (the alternating field is timed so the push is forwards); "steer" includes focusing, and remains true at relativistic speeds (a magnetic force still does no work); "debris" means the collision products and their decay products, from which short-lived particles are inferred (scene 13). It helps a new case: A2, and any "role of the fields" or "how is a particle identified" question. Introduced after the explanation (3 to 11).
- **Considered, not used:** "E for energy, B for bending" (neat, but "E" is also the energy symbol, which invites confusion with E = mc²).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,384 characters**, 21 scene headings (18 teaching scenes, the notes hold, the course-end scene and a silent end hold; the silent hold has no narration). Characters per scene (1 to 21): 263, 341, 321, 365, 362, 383, 451, 400, 371, 423, 434, 416, 353, 111, 212, 253, 171, 369, 75, 310, 0. At 13.3 characters per second the speech is about 480 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, about 55 s more of the quiet notes hold, 3 s of course-end hold and 3 s of silent end hold (about 88 s of holds and countdowns): **about 568 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's protein sentence; scene 11's momentum sentence pair (keep the arrows); scene 12's W and Z sentence (keep the tag).

## Opening frame

v21's final frame (`phys-y12-m8-v21.md`, "Final frame"): paper background; heading "How does the Standard Model organise particles and interactions?"; the full coded Standard Model table (quarks and leptons in three generation columns, carriers block, gold Higgs ring, grey gravity box outside); generation 1 and the photon bright, every other cell lit with a small gold tag "made in collisions"; behind the table a thin coded ring outline with two dots circling in opposite directions and a small flash where they meet, tag "?"; chip "Next: how do accelerators create and test evidence about particles?". Scene 1 pulses the gold tags, enlarges the H and t cells, brightens the ring and turns the chip into the heading.

## Final frame

The course-end frame (end of scene 20, held through the silent scene 21): paper background; at the top the line "Year 12 Physics: complete" in the heading style; across the middle four equal thumbnails in a row, each a small coded view already used in its module and labelled underneath: "Module 5: Advanced Mechanics" (a projectile parabola beside a satellite orbit), "Module 6: Electromagnetism" (a positive charge circling in a cross grid), "Module 7: The Nature of Light" (a wave and a spectrum strip), "Module 8: From the Universe to the Atom" (the Standard Model table, small); a thin line joining the four thumbnails with the tag "models tested against evidence"; chip "Next: practise with past HSC papers". No people, no new content. This frame closes the Year 12 Physics course.

## Scene list and build ids

Lesson key `p-y12-m8-v22` (route phys-y12-m8-v22). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v22` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v22` (root to confirm).

In order (kebab-case; 21 scene headings, all `### N.`): hook, why-energy, electric-push, linac, ring-steer, field-ramp, worked-booster, synchrotron-light, collider, detector-layers, signatures, testing, limits, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, key-notes, course-end, end-hold.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`), key-notes (`hold`) and end-hold (`hold`). Scene 1 is `explain` with a 3 s prediction countdown; course-end is `explain` (thumbnails light on cue). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: voltage ladder, linac gaps, ring push and steer, field ramp, synchrotron light, head-on collision, detector layers (`m8-accelerator`), two-photon bump, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change to the linac; 4 to 5 clear change to the ring; 5 to 6 camera continue; 6 to 7 clear change to working; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 clear change to the detector; 10 to 11 camera continue; 11 to 12 clear change; 12 to 13 clear change; 13 to 14 camera continue; attempts and feedback card shrink to the top; 18 to 19 fade to the notes board; 19 to 20 fade to the course-end frame; 20 to 21 hold.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s), course end (3 s) and end hold (about 3 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v22-learning-review.md`, `science_check` = `checks/p-y12-m8-v22-physics-check.md`.

Note for the build: the course-end scene comes after the key notes, unlike the other designs, because the brief asks v22's final frame to close the course.

## Assets

Have (scaled uniformly only, never stretched):
- `y12p-linac-tunnel-v1.png` (requested by v20): 4.
- **Checked, not used:** `y12p-opal-reactor-pool-v1.png` (v18; the course-end frame uses one coded view per module instead of plates), `phys-y11-galaxy-v1.png` (the Module 8 thumbnail uses the table, the module's end point).

Need (new plates):
1. `y12p-dipole-magnet-v1.png`: 5, 9.
2. `y12p-cms-detector-v1.png`: 10 (follows `ph-particle-detectors / collider-detector-cutaway` in `docs/production/claude-pm/assets/physics-maths-image-bank/generation-prompts.md`, with CMS selected).

Coded: energy bars, wavelength thumbnail, voltage ladder, linac gaps, rings, magnet segments, force arrows, readouts, ramp graph, light cones, collision flash, fixed-target inset, detector cross-section, tracks and deposits, momentum arrows, two-photon histogram, limit chips, calculation strips, crossed chips, countdowns, key notes board, four module thumbnails.

Kit gaps (for the v22 build brief):
1. **Field ramp.** Linked momentum and B readouts with a fixed-radius orbit and a ramp graph.
2. **Detector layers with missing momentum.** `m8-accelerator` extended with schematic signatures per particle type and a head-to-tail momentum sum that fails to close.
3. **Two-photon bump.** A schematic histogram with background and a cue-driven bump, permanently labelled "schematic, not real data".
4. **Course-end frame.** Four module thumbnails reusing existing coded views (M5 projectile and orbit, M6 circle in B, M7 wave and spectrum, M8 table).

## Codex asset brief

1. **`y12p-dipole-magnet-v1.png`** (new). A painted three-quarter view of one section of a superconducting accelerator dipole magnet: a long blue-painted cylindrical cryostat on support stands, one end cut away to show two beam pipes side by side surrounded by coil windings and a steel yoke. Reference published LHC dipole cutaways for proportions; no logos, text, people, figures, hands, labels or arrows. Transparent PNG with alpha channel, about 1800 × 900, centred with even margins. Style: match `y12p-linac-tunnel-v1.png` and the Year 11 apparatus plates (painted editorial).
2. **`y12p-cms-detector-v1.png`** (new). Follow `ph-particle-detectors / collider-detector-cutaway`, with CMS selected: a three-quarter longitudinal cutaway of the CMS detector following its official construction diagram (tracker at the centre, electromagnetic and hadron calorimeters, superconducting solenoid, iron return yoke interleaved with muon chambers, beam pipe opening), distinct materials, no tracks, deposits, event display, labels or people for scale. Transparent PNG with alpha channel, about 1800 × 1200.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: mass creation and resolution; W = qV and the voltage figure; linac timing and length limit; perpendicular magnetic force and no work; focusing; B = p/(qr) and the synchrotron name; the booster example (open decision 2); synchrotron light and the electron-proton contrast (author note b); LHC facts (author note c); head-on availability and the fixed-target tag; CMS layer order (author note d); signatures; missing momentum; Higgs, W and Z history (author note e); the limits.
3. Confirm the Australian Synchrotron facts against ANSTO (author note f).
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested; every event display is labelled "schematic, not real data".
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: Particle Accelerators: How Linacs, Synchrotrons and Detectors Test the Standard Model | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson19.sa.html

How do you make a Higgs boson, and how do you know you made one? See why accelerators need huge energies, how electric fields push particles and magnetic fields steer them, why a synchrotron's field must rise with the particles' momentum (with a worked example from the Australian Synchrotron in Melbourne), why the Large Hadron Collider collides beams head on, and how layered detectors identify photons, electrons, muons and even invisible neutrinos. Then see how the 2012 Higgs discovery tested the Standard Model, and where accelerator evidence stops. This is the final lesson of Year 12 Physics. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the operation and role of particle accelerators in obtaining evidence that tests and/or validates aspects of theories, including the Standard Model of matter (ACSPH120, ACSPH121, ACSPH122, ACSPH146)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the Standard Model. Next: practise with past HSC papers.

#HSCPhysics #Physics #ParticleAccelerators #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v21, m6-v03 and m6-v05; check that "push and steer" is earned before the synchrotron condition; that the booster example's given momentum does not confuse; that the detector scenes stay light (open decision 1); that the course-end scene feels like a close, not new content), then the physics check and the Codex error check (including the Australian Synchrotron source check).
- The voltage staircase, the flipping gap fields, the B readout tracking momentum, the light cones, the momentum arrows failing to close and the rising bump carry the explanation; judge them at playback speed in the voiced preview.
