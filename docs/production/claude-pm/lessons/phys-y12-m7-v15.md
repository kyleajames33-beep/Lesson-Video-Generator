# Year 12 Physics M7 V15: Relativistic momentum and the speed limit. Why does ever more momentum fail to push mass to light speed? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,017 characters, 18 scenes, about 523 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson14.sa.txt`, hash checked against the live file): orient and predict (electron energy near c, Sun's mass loss, warm-up, "Beyond the syllabus" box, intentions, vocabulary: rest energy, relativistic kinetic energy, mass-energy equivalence, relativistic momentum, energy-momentum relation), "relativistic-energy-and-momentum" (CERN protons 3 m/s short of c, E = γmc², E_k, p = γmv, Figure 1, Stop and Check 1 MV electron, MC γ = 3), "mass-energy-equivalence" (fission, fusion, annihilation, pair creation, Figure 2, Stop and Check 5.0 GeV proton, MC missing mass), "compare-combustion-and-fusion" (44 MJ petrol worked comparison, Figure 3, Stop and Check methane, MC 0.49 μg), "solve-accelerator-problem" (500 MV proton: 500 MeV, γ = 1.533, 0.758c, 5.82 × 10⁻¹⁹ kg m s⁻¹, 1090 MeV/c, classical 269 MeV), misconceptions (E = mc² is not kinetic; classical KE fails; relativistic mass deprecated; Figure 3; strategy; Stop and Check 1.022 MeV electron), apply and consolidate (Activities 1 and 2, "Describe 6 marks" relativistic momentum, "Analyse 7 marks" nuclear versus chemical), practice Q1 to Q3, reflect (Trinity, 0.98 g): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v15`, sections `relativistic-energy-and-momentum`, `solve-accelerator-problem`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use p=gamma mv and its high-speed behaviour, distinguishing invariant mass from historical relativistic mass. Stop before energy conversions." Next: "phys-y12-m7-v16: How does mass-energy accounting explain fusion, annihilation and combustion?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; graphs, arrows, the accelerator ring and calculation strips are coded, HSC style; the probe (spacecraft) and Sun are painted plates (shared from v11 and reused), scaled uniformly, never stretched; every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹, m_p = 1.673 × 10⁻²⁷ kg, m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C; data-sheet symbols p_v = m₀v/√(1 − v²/c²); a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v13 and v14 (γ, its growth near c, inertial frames), v12 (postulate 1), Module 6 (radius of a charged particle in a magnetic field, r = mv/qB), Year 11 (momentum p = mv, F = Δp/Δt, conservation of momentum).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-03`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-03`: "describe the consequences and applications of relativistic momentum with reference to:" "p_(v)=(m_(0)v)/(sqrt((1-(v^(2))/(c^(2)))))", "the limitation on the maximum velocity of a particle imposed by special relativity (ACSPH133)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v14's final frame (the probe with its engine on, a growing momentum arrow, the γ graph). Teaches: the classical prediction (constant force, constant acceleration, c passed in under a year); force as rate of change of momentum (a steady force adds momentum at a steady rate, at any speed); p_v = m₀v/√(1 − v²/c²) = γm₀v, with m₀ the rest mass, reducing to mv at low speed; the p against v graph (asymptote at c); why the speed limit follows (momentum grows without limit while v approaches c; reaching c needs infinite momentum); the probe table (p = 1, 2, 3, 10 m₀c: 0.71c, 0.89c, 0.95c, 0.995c); massless photons always at c; invariant mass versus historical relativistic mass; worked proton at 0.758c (site values; relativistic 5.83 × 10⁻¹⁹ against classical 3.80 × 10⁻¹⁹ kg m s⁻¹); electron at 0.99c and 0.999c; accelerator evidence (bending magnets sized for γm₀v). Mentions only that "energy grows too" (v16). Stops before E = mc², E = γmc², kinetic energy formulas and energy conversions (route "stop before energy conversions"; site "Beyond the syllabus").

## Decisions

- **Learner question (route wording kept).** "Why does ever more momentum fail to push mass to light speed?" The answer, built in order: a steady force always adds momentum at a steady rate (2); relativistic momentum is γm₀v, which grows without limit as v approaches c (3, 4); so steady pushing raises momentum forever while the speed only creeps towards c, and reaching c would need infinite momentum (5, 6).
- **Hook (new; owner "real context", route "start from the physical case").** An idealised probe: 1000 kg, thrust 1.0 × 10⁴ N, fuel use ignored (tag "idealised: constant mass"). Classically a = 10 m s⁻², c reached in 3.0 × 10⁷ s (347 days). 3 s prediction for "after two years": chips "2.1c", "exactly c", "about 0.9c"; answer 0.90c (p = 2.10 m₀c). The idealisation is stated once on screen (author note a). Revision 2 (brief 191 should fix): every time on the probe is Earth-frame (starting-frame) time: the narration says "two years of thrust, timed on Earth's clocks" and "just under a year of Earth time", and the graph axis, table and tags read "t (Earth frame)". The ship's own clock would read less, and would give a different speed for "two years".
- **Force and momentum (Year 11 recall).** F = Δp/Δt holds in relativity (author note b); a steady force adds a fixed momentum each second.
- **Relativistic momentum (data-sheet form p_v = m₀v/√(1 − v²/c²)).** The reason it must change is given in one sentence: momentum conservation must hold in every inertial frame (postulate 1, v12), and with relativistic time and length mv would not be conserved in all frames; γm₀v is (author note c). No derivation. m₀ defined as rest mass.
- **Graph (site Figure 1 adapted from kinetic energy to momentum; kit `m7-energy` "curve stops below c; infinity is not a plotted data point").** p/(m₀c) against v/c: classical straight line to 1 at v = c; relativistic curve with a vertical asymptote at v = c.
- **The limit (site "Describe 6 marks" step 4, argued from infinite momentum, not "mass becomes infinite").** Kept as the causal core (5). Revision 2 (brief 191 should fix): momentum is not split into a γ part and a velocity part (p = γm₀v is a product). The site's "share goes into the γ factor" wording is not used; the scene shows equal momentum steps mapping to shrinking speed steps on the curve, and the narration says "because near c the curve climbs almost straight up". The "γ part ↑, v part ↓" block labels are withdrawn. Energy is mentioned once ("and the energy") without formulas.
- **Probe table (computed).** v = p/√(m₀² + p²/c²): p = m₀c: 0.707c (after 3.0 × 10⁷ s); 2m₀c: 0.894c; 3m₀c: 0.949c; 10m₀c: 0.995c. A momentum bar grows in equal steps; a speed gauge creeps to c.
- **Photons (site "Describe 6 marks" step 6).** One short scene: zero rest mass, always exactly c, still carry momentum (p = h/λ is not given; author note d).
- **Invariant mass (route "distinguishing invariant mass from historical relativistic mass"; site misconception 3).** "Relativistic mass" named as an older idea; m₀ does not change; what grows is momentum (and energy). Exam phrasing given. The site's "inertia ... increases" is not used (site note 3).
- **Worked example 1 (site "solve-accelerator-problem" steps 3 and 4, momentum part only).** Proton at 0.758c (site value), m_p = 1.673 × 10⁻²⁷ kg (data sheet; the site uses 1.67): γ = 1.53; p = 5.83 × 10⁻¹⁹ kg m s⁻¹ (site 5.82 with 1.67); classical m₀v = 3.80 × 10⁻¹⁹; classical is about 35% too small. The site's energy steps (500 MV → γ) are not used (route stop; site's own "Beyond the syllabus" box marks them extension). Two stages: γ, then p with the classical comparison kept beside.
- **Worked example 2 (site "Describe 6 marks" step 3 values).** Electron at 0.99c (γ 7.09, p 1.92 × 10⁻²¹) and 0.999c (γ 22.4, p 6.11 × 10⁻²¹): speed up 0.9%, momentum × 3.18.
- **Accelerator evidence (site "Describe 6 marks" step 5 bending-magnet detail; syllabus "applications"; Module 6 recall).** r = p/(qB) with p = γm₀v. LHC protons: γ ≈ 6.9 × 10³ (labelled on screen "6.5 TeV operating example", Revision 2, brief 191 optional; not every LHC run; site "3 m/s short of c"), dipole field about 7.7 T, bending radius about 2.8 km; with p = m₀v the same field would give a radius of about 0.40 m. Said as "about forty centimetres, not nearly three kilometres"; tagged for the science check (author note e).
- **Memory aid (scene 12): "Momentum has no ceiling. Speed does."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): electron at 0.95c: relativistic p = 8.31 × 10⁻²² kg m s⁻¹; classical 2.60 × 10⁻²²; ratio γ = 3.20. Crossed: the classical value. A2 (3 marks, describe): why a particle with mass cannot reach c. Crossed: "its mass becomes infinite".
- **Significant figures.** Site's 0.758c kept; γ and p to three figures.
- **Handoff (route next).** Scene 17: the probe at rest with "p = 0" and a tag "energy at rest? E = mc²"; the Sun plate with "loses about 4 million tonnes per second" (site hook); chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". See "Final frame".
- **Colour key (relativity, root decision 1, as v12 to v14):** momentum amber; speed teal; classical predictions grey dashed; γ violet; c asymptote red dashed.
- **Colour key (Revision 2, fixed for every scene).** As above; Earth-frame time ink; force orange; magnetic field slate; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 9, 10 and the feedback rows 52 px; framed answers 56 px); live readouts (scenes 5 and 6: Earth time, p/(m₀c), γ, v/c; the speed gauge) about 52 px; table rows 40 px; axis labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v14's final frame is the anchor: the painted probe (`y12p-spacecraft-v1.png` with `y12p-spacecraft-exhaust-v1.png`, brief 191, inspected 7 Nov) thrusting, about 900 px wide; it carries 1, 2, 5, 6, 7 and 17. The painted accelerator tunnel `y12p-linac-tunnel-v1.png` (inspected 7 Nov: a long tunnel with a copper beam line on stands) gives the worked proton (9) and the accelerator scene (11) a real place, beside the coded ring.
- **Simulation (Revision 2).** The core live control is the thrust clock in scenes 5 and 6: Earth-frame thrust time runs while the momentum bar grows in equal blocks and live readouts update (t = 3.0 × 10⁷, 6.0 × 10⁷, 9.0 × 10⁷, 3.0 × 10⁸ s; p = 1, 2, 3, 10 m₀c; γ = 1.41, 2.24, 3.16, 10.0; v = 0.71, 0.89, 0.95, 0.995c), a marker climbs the p-v curve in equal p steps, the speed steps shrink and the gauge needle creeps to the red c stop.
- **Board stages (Revision 2, high-risk redesign).** Revision 1 held one plot from scene 4 through scene 8 (about 128 s). Revision 2: the plot alone (4, about 22 s); camera change to the live thrust stage, probe, bar, gauge and plot together (5 and 6, about 60 s); camera change to the photon stage, a photon packet racing the probe along the c line (7); clear change to the invariant-mass stage (8); working with the tunnel plate (9, 10); the ring (11). No set-up runs past about 72 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded electron beam leaving an electron gun outline in the tunnel plate's colours, tag "0.95c"; A2: the momentum bar and speed gauge with no values). On the answer side the card shrinks to the top, a givens strip lists the data, the p-v plot carries the answer (both momenta marked; the asymptote), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 14: "relativistic-energy-and-momentum" (CERN 3 m/s, p = γmv, "massive objects cannot reach the speed of light", photons) (1, 4, 5, 7, 11); "solve-accelerator-problem" steps 3 and 4 (9); misconception 3 (relativistic mass deprecated) (8); "Describe 6 marks" (classical limit, γ progression 2.3, 7.1, 22.4, limit argued from momentum, bending magnets, photon scope) (3 to 7, 10, 11, 16); practice Q2(b) (A2 framing). Not used: all energy formulas and conversions (v16 or extension), the energy-momentum relation (extension).
- **Site notes (quoted from site lesson 14, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Inconsistency (new): misconception 2: "When γ > 1.1 (roughly v > 0.4c), the classical formula is already off by more than 5%." At γ = 1.1 the classical kinetic energy is 13% low; a 5% underestimate occurs at γ ≈ 1.035 (v ≈ 0.26c), and the lesson's own Q2(a) gives 10% at γ ≈ 1.073 (v ≈ 0.36c). Correction: "Above about 0.26c (γ ≈ 1.035) the classical formula is more than 5% low; above about 0.36c, more than 10% low."
  2. Inconsistency (new): the "Beyond the syllabus" box says the energy formalism (E = γmc², K = (γ − 1)mc²) is extension, but the core worked example "solve-accelerator-problem" depends on K = (γ − 1)mc² to find γ from 500 MV. Suggest labelling that worked example "extension", or giving γ (or v) directly so the momentum steps stand alone (as this video does).
  3. Precision (new): misconception 3 summary: "rest mass m₀ is constant; it is inertia and energy that increase". "Inertia increases" restates relativistic mass. Suggest "it is momentum and energy that increase".
  4. Precision (new): step 2 "mc² = (1.67 × 10⁻²⁷)(3.00 × 10⁸)² = 1.50 × 10⁻¹⁰ J = 938 MeV". With these values 1.503 × 10⁻¹⁰ J / 1.60 × 10⁻¹⁹ = 939 MeV (data-sheet m_p gives 940 MeV); 938 MeV is the accepted value from more precise constants. Suggest "≈ 938 MeV (accepted value)".
  5. Checked and correct: CERN 0.9999999896c (3.1 m s⁻¹ short); γ = 1.533, v = 0.758c; p = 5.82 × 10⁻¹⁹ (with 1.67 × 10⁻²⁷); pc = 1090 MeV; classical 269 MeV (46% low); "Describe 6 marks" γ values and "momentum roughly triples" (3.18).
- **Cause chain taught, in order:** (1) a steady force adds momentum at a steady rate (2); (2) relativistic momentum is γm₀v (3); (3) γ grows without limit as v approaches c, so momentum does too (4); (4) so added momentum mostly raises γ, not v (5); (5) reaching c would need infinite momentum, which no finite force for a finite time can give (5); (6) the numbers show the speed creeping towards c (6); (7) only massless photons travel at c (7).
- **Entry knowledge (route `entryKnowledge`):** v13 and v14 (γ and its growth near c); v12 (postulate 1, inertial frames); Module 6 (r = mv/qB); Year 11 (p = mv, F = Δp/Δt, momentum conservation).
- **Learner-visible vocabulary (plain meaning at first use):** rest mass m₀ (mass measured when the object is at rest, 3); relativistic momentum (3); asymptote (a line the curve approaches but never reaches, 4); invariant mass (mass that is the same in every frame, 8); relativistic mass (an older idea, 8).
- **Legacy logic ported:** none. Coded family `m7-energy` (kinetic energy against v/c) is adapted to momentum: same axes logic, curve stops below c.
- **New explainer motion:** **p against v plot** (classical line, relativistic curve, asymptote, a marker driven by elapsed thrust time); **momentum bar and speed gauge** (equal momentum steps per thrust interval; a gauge whose needle approaches a red "c" stop); **probe table** (rows appearing with the gauge); **storage ring** (coded ring with B arrows and two radius overlays, relativistic and classical); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the probe at the left; the plot or gauge at the right; algebra lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Idealised probe: constant rest mass and constant thrust measured in the starting inertial frame (the force acting on the probe in the Earth frame). All times quoted (347 days, two years, the table) are Earth-frame coordinate times (Revision 2: labelled on screen and in the narration). A real rocket loses mass and its proper acceleration would be constant instead; the conclusion (v < c) is unchanged.
  (b) F = dp/dt with p = γm₀v holds in special relativity for the force measured in a given inertial frame; F = ma does not.
  (c) Why γm₀v: for a symmetric collision viewed from two frames, mv is not conserved in both, while γm₀v is. Not derived.
  (d) Photon momentum p = h/λ = E/c (Compton, de Broglie) is outside this route; v16 uses only E = hf for photons.
  (e) LHC (6.5 TeV per proton, 2015 to 2018): γ = 6.5 × 10¹²/938.3 × 10⁶ = 6.93 × 10³; p = 3.47 × 10⁻¹⁵ kg m s⁻¹; dipole field 7.7 T; r = p/(eB) = 2.80 km (the LHC's dipole bending radius is 2804 m). Classical m₀v with v ≈ c: 5.02 × 10⁻¹⁹ kg m s⁻¹; r = 0.40 m. To be confirmed by the science check.
  (f) Pronunciations: "m zero"; "p v" said "p"; "gamma"; "Large Hadron Collider".
- **Open decisions for root:**
  - **1. The LHC bending-radius comparison.** Kept: the brief 191 science check confirms the 6.5 TeV operating point and the arithmetic; labelled "6.5 TeV operating example".
  - **2. Idealised probe (learning review).** Check that "ignore the fuel" does not distract; the alternative is a proton in a long linear accelerator with a constant electric force (less concrete).

Main question: *If a steady push keeps adding momentum forever, why doesn't the speed keep rising past c?*
Entry knowledge: γ (v13, v14); postulate 1 (v12); r = mv/qB (Module 6); p = mv and F = Δp/Δt (Year 11).
Stops after: the classical prediction, F = Δp/Δt, p = γm₀v, the p-v graph, the speed limit, the probe table, photons, invariant mass, two worked examples, accelerator evidence. No energy formulas.
Handoff: v16, how mass-energy accounting explains fusion, annihilation and combustion.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *p*, *m₀*, *v*, *c*, *γ*, *F*.

### 1. hook (two years of thrust)
> Here's the probe with its engines on. Let's make it simple. A thousand kilogram probe, a steady thrust of ten thousand newtons, and we'll ignore the fuel it burns. Newton's second law says it speeds up by ten metres per second, every second. At that rate it would reach the speed of light in under a year. So after two years of thrust, timed on Earth's clocks, how fast is it going? Make your **prediction**. Not two c. It's at about zero point nine c, and it never reaches c, however long you push. So why does ever more momentum fail to push mass to light **speed**?

Visual: opens on v14's final frame (see "Opening frame"); the chip becomes the heading: "Why does ever more momentum fail to push mass to light speed?". On "A thousand kilogram probe" givens chip "m₀ = 1000 kg" (36 px), grey hand tag "idealised: ignore fuel use". On "a steady thrust of ten thousand newtons" an orange force arrow "F = 1.0 × 10⁴ N" at the probe's rear. On "ten metres per second, every second" "a = F/m = 10 m s⁻²". On "under a year" a dashed grey classical speed line on a v against t graph (about 700 px wide; axis "t (Earth frame)") reaches "c" at "3.0 × 10⁷ s ≈ 347 days" and keeps rising. On "timed on Earth's clocks" an ink clock badge "Earth frame" pins to the time axis. On "prediction" a 3 s `Countdown` beside chips "2.1c", "exactly c", "about 0.9c". On "about zero point nine c" a solid teal curve on the same graph bends below c and reads "0.90c at 2 years (Earth frame)" (44 px); "about 0.9c" ticks and "2.1c" is crossed in red. On "however long you push" the teal curve runs along under a red dashed line "c" without touching it; red pen arrow along the gap, hand tag "never touches". On "speed" the heading's "light speed" underlines.

### 2. force adds momentum
> Start with momentum. In Year 11, momentum is mass times velocity, and force is the rate of change of momentum, F equals delta p over delta t. So a steady force adds the same momentum every second. Ten thousand newtons adds ten thousand kilogram metres per second of momentum, each **second**. That rule still holds near the speed of **light**.

Visual: board change: the probe at the left with its force arrow; a vertical amber momentum bar at the right. On "momentum is mass times velocity" chip "p = mv (Year 11)". On "F equals delta p over delta t" the equation strip "F = Δp/Δt". On "second" the momentum bar grows by one equal block "+1.0 × 10⁴ kg m s⁻¹" per beat, three beats; amber pen bracket on one block, hand tag "same Δp each second". On "light" orange hand tag "Δp = FΔt: true at any speed".

### 3. relativistic momentum
> What changes is how momentum depends on speed. To keep momentum conserved in every inertial frame, Einstein showed that it has to be p equals m zero v, over the square root of one minus v squared over c **squared**. That's gamma, times m zero v. Here m zero is the rest mass, the mass measured when the object is at rest. At everyday speeds gamma is one, so this is just m v. Near the speed of light, gamma gets **huge**.

Visual: on "conserved in every inertial frame" a small coded collision of two balls viewed in two frame badges, tag "momentum conservation in every frame (postulate 1)". On "squared" the equation strip writes "p_v = m₀v / √(1 − v²/c²)" (data sheet, 52 px) in a dark-ink frame. On "That's gamma, times m zero v" "= γm₀v" (violet γ); violet hand tag "a product, not a split". On "the rest mass" a chip "m₀: rest mass (measured at rest)". On "this is just m v" a tag "low speed: γ ≈ 1 → p ≈ m₀v". On "huge" an inset of v13's γ graph (about 400 px) with its marker sliding up the asymptote, violet pen arrow.

### 4. momentum against speed
> Plot momentum against speed. The classical line, m v, is straight, and reaches m zero c at the speed of light, nothing special. The relativistic curve starts on that line at low speed, then bends upwards, and climbs without limit as v approaches c. It never touches the line where v equals **c**.

Visual: board change (a new set-up): plot "p / (m₀c)" up (0 to 10) against "v/c" along (0 to 1), about 1100 px wide. On "The classical line" a grey dashed straight line from the origin to "1 at v = c". On "The relativistic curve starts on that line" an amber curve draws along it at low v. On "bends upwards" it peels away above. On "climbs without limit" it rises steeply near the right edge. On "c" a red dashed vertical line "v = c", red hand tag "approached, never reached"; the curve stops just short of it (no point plotted at c); amber pen ring where the curve turns upward.

### 5. why there's a speed limit
> Now put the two ideas together. The thrust keeps adding momentum at a steady rate, forever. But on this curve, each extra bit of momentum buys less and less speed, because near c the curve climbs almost straight up. To actually reach c, gamma would have to be infinite, so the momentum would have to be infinite. No finite force, acting for a finite time, can supply that. So anything with mass can get closer and closer to c, but never reach **it**.

Visual: camera change to the live thrust stage (a new set-up): the thrusting probe plate (about 600 px) at the top left, the momentum bar under it, the speed gauge (teal needle, red stop at "c") beside it, the plot at the right (about 800 px); live readouts (52 px) "t (Earth frame)", "p", "γ", "v". On "adding momentum at a steady rate" the thrust clock runs: the bar grows in equal blocks and a horizontal marker on the plot climbs in equal steps up the p axis ("p = 0.5, 1, 2 m₀c"; "v = 0.45, 0.71, 0.89c"). On "each extra bit of momentum buys less and less speed" each equal p step maps across to the curve and down to the v axis: the teal v brackets get shorter; teal hand tag "same push, less speed". On "near c the curve climbs almost straight up" a red pen arrow up the steep end of the curve. On "infinite" the curve's top arrow "p → ∞ as v → c". On "No finite force, acting for a finite time" chip "finite FΔt → finite p → v < c" in a dark-ink frame. On "it" amber hand tag "speed limit for anything with mass".

### 6. the probe's numbers
> Here are the numbers for our probe. After just under a year of Earth time, its momentum reaches m zero c, and its speed is zero point seven one c. Double that momentum, and it's at zero point eight nine c. Triple it, zero point nine five c. Ten times, zero point nine nine five c. The momentum keeps climbing steadily, but the speed just creeps towards c, and never gets **there**.

Visual: camera continue (scenes 5 and 6 together about 60 s): the plot shrinks and a four-row table (40 px) writes at the right, headed "t (Earth frame), p, γ, v"; the thrust clock keeps running. On "its momentum reaches m zero c" row 1 "t = 3.0 × 10⁷ s: p = m₀c, γ = 1.41, v = 0.71c"; the needle jumps to 0.71. On "Double that momentum" row 2 "6.0 × 10⁷ s: 2m₀c, γ = 2.24, 0.89c". On "Triple it" row 3 "9.0 × 10⁷ s: 3m₀c, γ = 3.16, 0.95c". On "Ten times" row 4 "3.0 × 10⁸ s: 10m₀c, γ = 10.0, 0.995c"; the bar is now ten blocks tall while the needle sits just below the stop; amber pen bracket on the bar, teal pen ring on the needle. On "there" the needle trembles at the stop without touching it; hand tag "momentum: no ceiling; speed: limit c".

### 7. light itself
> What about light? Photons have no rest mass, so this limit works differently for them. They always travel at exactly c, never slower, and they still carry momentum. The speed limit applies to anything with **mass**.

Visual: camera change (a new set-up): a racing strip across the frame: the probe plate (about 500 px) thrusting along the bottom lane, an amber photon packet in the top lane pulling away at a fixed rate, readouts "probe: v < c" (teal) and "photon: c" (amber); amber hand tag "photon: m₀ = 0, always at c". On "they still carry momentum" a small momentum arrow on the packet, tag "photons carry momentum". On "mass" chip "m₀ > 0: v < c always" in a dark-ink frame, teal pen ring round the probe's readout.

### 8. invariant mass, not relativistic mass
> A warning about older books. Some say mass increases with speed, and call gamma m zero the relativistic mass. Physicists now avoid that idea. The mass, m zero, is the same at every speed. In its own frame, a fast muon is just an ordinary muon, with ordinary mass. What grows is the momentum, and the energy. So in an exam, say the momentum increases without limit, not that the mass becomes **infinite**.

Visual: clear change (a new set-up): two columns, "older books" (grey) and "today" (ink). On "call gamma m zero the relativistic mass" a grey chip "relativistic mass m = γm₀ (older idea)". On "Physicists now avoid that idea" the chip greys further with a caution mark. On "the same at every speed" chip "invariant mass m₀: same in every frame". On "In its own frame, a fast muon" a slate muon dot with a teal badge "own frame: m₀ unchanged". On "What grows is the momentum, and the energy" two bars grow, "p" (amber) and "energy" (grey, label only, no formula; tag "next video"). On "infinite" a chip "mass becomes infinite" fades in and is crossed in red (red hand tag "say: momentum (and energy) increase without limit").

### 9. worked example: a proton in an accelerator
> Let's calculate. A proton in an accelerator moves at zero point seven five eight c, and its rest mass is one point six seven three times ten to the minus twenty seven kilograms. First, gamma. One over the square root of one minus zero point seven five eight squared is one point five **three**. Then p equals gamma m zero v. One point five three, times one point six seven three times ten to the minus twenty seven, times zero point seven five eight times three times ten to the eight, is five point eight three times ten to the minus nineteen kilogram metres per **second**. The classical m v gives only three point eight zero times ten to the minus nineteen, about thirty five per cent too **small**.

Visual: board change to the working layout (a new set-up): the painted accelerator tunnel `y12p-linac-tunnel-v1.png` (about 520 px wide) at the top left with an amber proton dot moving along the beam line, tag "0.758c"; the p-v plot small beside it. Task strip: "Find the proton's momentum, and compare with the classical value." Equation strip: "p_v = m₀v / √(1 − v²/c²) = γm₀v". Givens grouped: "v = 0.758c" (proton, site worked example), "m₀ = 1.673 × 10⁻²⁷ kg, c = 3.00 × 10⁸ m s⁻¹" (data sheet). On "three" (stage 1) "γ = 1/√(1 − 0.758²) = 1/√0.4254 = 1.533" (52 px); violet hand tag "γ first". On "second" (stage 2) "p = 1.533 × 1.673 × 10⁻²⁷ × 0.758 × 3.00 × 10⁸ = 5.83 × 10⁻¹⁹ kg m s⁻¹" in a dark-ink frame (56 px). On "small" a grey chip beside it "classical: m₀v = 3.80 × 10⁻¹⁹ kg m s⁻¹" is crossed in red (red hand tag "35% too small at 0.758c"); the plot marks both values at v = 0.758c with an amber pen bracket between them.

### 10. worked example: a small step in speed
> Now compare an electron at zero point nine nine c with one at zero point nine nine nine c. The speed goes up by less than one per cent. But gamma goes from seven point zero nine to twenty two point four, so the momentum more than **triples**. That's the speed limit at work.

Visual: "p = 5.83 × 10⁻¹⁹ kg m s⁻¹" stays small at the top; the stage 1 and 2 lines fade. Two columns: "0.99c" and "0.999c". On "less than one per cent" a teal bracket between the speeds "+0.9%". On "seven point zero nine to twenty two point four" "γ = 7.09" and "γ = 22.4". On "triples" "p = 7.09 × 9.109 × 10⁻³¹ × 0.99 × 3.00 × 10⁸ = 1.92 × 10⁻²¹" and "p = 22.4 × 9.109 × 10⁻³¹ × 0.999 × 3.00 × 10⁸ = 6.11 × 10⁻²¹ kg m s⁻¹" (44 px), each framed; an amber pen bracket "× 3.2" beside the teal "+0.9%". Data chip "m_e = 9.109 × 10⁻³¹ kg".

### 11. accelerators are built for it
> Particle accelerators depend on this every day. From Module six, a charged particle in a magnetic field moves in a circle of radius p over q B, and the momentum in that formula has to be gamma m zero v. At CERN's Large Hadron Collider, protons travel within about three metres per second of the speed of light, with gamma near seven thousand. Its bending magnets curve them on a radius of nearly three kilometres. If momentum were just m v, the same magnets would bend them in a circle of radius about forty **centimetres**.

Visual: board change (a new set-up): the painted tunnel plate (about 420 px) at the left as "inside the ring"; at the right a coded storage ring seen from above (about 700 px), slate B dots and crosses in its dipole sections, an amber proton dot circling; tag "LHC: 6.5 TeV operating example". On "a circle of radius p over q B" chip "Module 6: r = mv/qB → relativistic: r = p/qB, p = γm₀v". On "within about three metres per second of the speed of light" tag "v = 0.9999999896c (3 m s⁻¹ short of c)"; on "gamma near seven thousand" "γ ≈ 6.9 × 10³". On "nearly three kilometres" a radius arrow "r ≈ 2.8 km (B ≈ 7.7 T)". On "centimetres" a tiny grey dashed circle at the centre, "classical p = m₀v: r ≈ 0.40 m", crossed in red; amber hand tag "magnets designed for γm₀v" with an amber pen arrow along the real radius.

### 12. a way to remember
> Here's a way to remember it. Momentum has no ceiling. Speed **does**.

Visual: board clears to the thrusting probe plate (at least 300 px) with the momentum bar and the speed gauge side by side. On "Momentum has no ceiling" the bar keeps growing off the top of the frame. On "does" the gauge needle presses against the red "c" stop. A framed memory card writes above in hand lettering (52 px, amber and teal; the same card is reused on the notes screen): "Momentum has no ceiling. Speed does." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electron travels at zero point nine five c. Calculate its relativistic momentum, and compare it with the value given by the classical expression, m v. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "An electron travels at 0.95c. (a) Calculate its relativistic momentum. (b) Compare this with the value predicted by the classical expression p = mv. (3 marks)" Picture: the painted tunnel plate (about 360 px) with a navy electron dot on the beam line, tag "0.95c". Data chips "m_e = 9.109 × 10⁻³¹ kg", "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> Gamma at zero point nine five c is three point two zero. So p, which is gamma m zero v, comes to eight point three times ten to the minus twenty two kilogram metres per **second**. The classical m v is two point six times ten to the minus twenty two, so the true momentum is three point two times **bigger**. The slip is stopping at m **v**.

Visual: card shrinks to the top; "0.95c", "relativistic momentum" and "classical expression" underline. A givens strip (36 px): "v = 0.95c", "m₀ = 9.109 × 10⁻³¹ kg", "c = 3.00 × 10⁸ m s⁻¹". The p-v plot (about 500 px) at the right. On "second" "(a) γ = 1/√(1 − 0.95²) = 3.20; p = γm₀v = 3.20 × 9.109 × 10⁻³¹ × 0.95 × 3.00 × 10⁸ = 8.3 × 10⁻²² kg m s⁻¹" (52 px), framed; the plot marks it. On "bigger" "(b) classical m₀v = 2.6 × 10⁻²²; relativistic = γ × classical = 3.2 × larger", framed; the classical point sits on the dashed line below. On "v" a chip "p = 2.6 × 10⁻²² kg m s⁻¹" fades in and is crossed in red (red hand tag "classical value: too small at 0.95c"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Use relativistic momentum to explain why a particle with mass can't be accelerated to the speed of light. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "Use the relationship p_v = m₀v / √(1 − v²/c²) to explain why a particle with mass cannot be accelerated to the speed of light. (3 marks)" Picture: the momentum bar and speed gauge (about 360 px), no values. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> As v approaches c, the square root approaches zero, so the momentum grows without limit. A force adds momentum at a finite rate, so any finite push gives finite momentum, and a speed still below **c**. Reaching c would need infinite momentum. The slip is saying the mass becomes infinite. The rest mass doesn't change. The momentum **does**.

Visual: card shrinks to the top; "particle with mass" and "cannot be accelerated" underline. A givens strip (36 px): "m₀ > 0", "p_v = m₀v / √(1 − v²/c²)". The p-v plot with its asymptote at the right (about 500 px). On "c" "v → c: √(1 − v²/c²) → 0 → p → ∞; F = Δp/Δt: finite F, finite Δt → finite p → v < c" (44 px), framed; red pen arrow up the asymptote. On "does" a chip "its mass becomes infinite" fades in and is crossed in red (red hand tag "m₀ is constant; p grows without limit"). Hold about 1 second.

### 17. handoff
> So pushing harder always adds momentum, and energy too, but never quite enough speed. And here's the surprise. Even at rest, with no momentum at all, an object holds an enormous store of energy, just because it has mass. The Sun gives some of it away, losing about four million tonnes every second. So how does mass-energy accounting explain fusion, annihilation and **combustion**?

Visual: board clears (camera change). On "pushing harder always adds momentum" the momentum bar and gauge shrink to the top left. On "Even at rest, with no momentum at all" the probe returns at the centre left with the exhaust off, tag "p = 0"; a grey energy bar beside it with a large "?" and a tag "energy at rest? E = mc²". On "The Sun gives some of it away" the painted Sun `phys-y11-sun-v1.png` appears at the right with a tag "loses ≈ 4 million tonnes per second". On "combustion" the chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. F = Δp/Δt at any speed.
2. p_v = m₀v / √(1 − v²/c²) = γm₀v.
3. v → c: p → ∞, so mass can't reach c.
4. Rest mass m₀ never changes.
5. Accelerator magnets need r = γm₀v/qB.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Momentum has no ceiling. Speed does.* Notes in the role colours, 34 px; about 190 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the classical prediction fails: momentum is γm₀v, not m₀v (3, 4). Why steady pushing cannot reach c: steady momentum gain against a curve with an asymptote (5, 6). Why accelerator magnets are so strong: they must bend γm₀v (11).
- **Misconceptions addressed:** constant force means constant acceleration forever (1); mass becomes infinite (8, 16 crossed); the classical momentum is close enough (9, 14 crossed); nothing can travel at c (7, photons).
- **One idea at a time:** the force rule (2), the new momentum (3), the graph (4), the limit (5), numbers (6), photons (7), mass (8), two calculations (9, 10), evidence (11).
- **Video makes it easier:** the equal momentum blocks against shrinking speed steps (5); the gauge needle pressing on the stop while the bar grows (6, 12); the two radius overlays on the ring (11).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 25 s.
- **Avoided double teaching:** γ (v13, v14), postulate 1 (v12), r = mv/qB (Module 6) and F = Δp/Δt (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ4-03`: consequences and applications of p_v = m₀v/√(1 − v²/c²) (3, 4, 9 to 11, 13), and the limitation on the maximum velocity of a particle (1, 5, 6, 15, 16).
- **Out of scope by design:** E = mc², E = γmc², kinetic energy formulas, the energy-momentum relation (v16 or extension); photon momentum p = h/λ.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An electron travels at 0.95c. (a) Calculate its relativistic momentum. (b) Compare this with the value predicted by the classical expression p = mv."
Model answer: (a) γ = 1/√(1 − 0.95²) = 3.20; p = γm₀v = 3.20 × 9.109 × 10⁻³¹ × 0.95 × 3.00 × 10⁸ = 8.3 × 10⁻²² kg m s⁻¹. (b) Classical: m₀v = 9.109 × 10⁻³¹ × 0.95 × 3.00 × 10⁸ = 2.6 × 10⁻²² kg m s⁻¹; the relativistic momentum is γ = 3.2 times larger, so the classical expression greatly underestimates momentum at this speed. Classic mistake (crossed): p = 2.6 × 10⁻²² kg m s⁻¹ as the answer to (a).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Use the relationship p_v = m₀v / √(1 − v²/c²) to explain why a particle with mass cannot be accelerated to the speed of light."
Model answer: As v approaches c, √(1 − v²/c²) approaches zero, so the momentum of a particle with non-zero rest mass increases without limit. A force changes momentum at a finite rate (F = Δp/Δt), so a finite force acting for a finite time gives a finite momentum, which corresponds to a speed below c; reaching c would require infinite momentum (and energy). The rest mass m₀ does not change; it is the momentum that grows. Classic mistake (crossed): "its mass becomes infinite".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | c = 3.00 × 10⁸ m s⁻¹; m_p = 1.673 × 10⁻²⁷ kg; m_e = 9.109 × 10⁻³¹ kg; e = 1.602 × 10⁻¹⁹ C | 9 to 11, 13, 14 |
| Probe (idealised) | m₀ = 1000 kg; F = 1.0 × 10⁴ N; a = 10 m s⁻²; t to c classically 3.0 × 10⁷ s = 347 days; 2 years (6.31 × 10⁷ s): p = 2.10 m₀c, v = 0.90c; classical 2.1c | 1, 2 |
| Probe table | p = m₀c: 0.707c; 2m₀c: 0.894c; 3m₀c: 0.949c; 10m₀c: 0.995c | 6 |
| Proton (site value v) | γ(0.758) = 1.533; p = 5.83 × 10⁻¹⁹ kg m s⁻¹ (site 5.82 with 1.67 × 10⁻²⁷); classical 3.80 × 10⁻¹⁹; ratio 0.652 (35% too small) | 9 |
| Electron | γ(0.99) = 7.09, p = 1.92 × 10⁻²¹; γ(0.999) = 22.4, p = 6.11 × 10⁻²¹; ratio 3.18; speed +0.91% | 10 |
| LHC | v = 0.9999999896c (3.1 m s⁻¹ short); γ = 6.93 × 10³; p = 3.47 × 10⁻¹⁵ kg m s⁻¹; B = 7.7 T: r = 2.80 km; classical m₀c: r = 0.40 m | 11 |
| A1 | γ(0.95) = 3.203; p = 8.31 × 10⁻²² kg m s⁻¹; classical 2.60 × 10⁻²² | 13, 14 |
| Thrust clock (Revision 2; Earth-frame time) | t = 1.5 × 10⁷, 3.0 × 10⁷, 6.0 × 10⁷, 9.0 × 10⁷, 3.0 × 10⁸ s: p = 0.5, 1, 2, 3, 10 m₀c; γ = √(1 + (p/m₀c)²) = 1.12, 1.41, 2.24, 3.16, 10.05; v = 0.447, 0.707, 0.894, 0.949, 0.995c | 5, 6 |
| Site checks | KE underestimate 5% at γ = 1.035 (0.26c), 10% at γ = 1.073 (0.36c), 13% at γ = 1.1; m_p c² = 1.506 × 10⁻¹⁰ J = 940 MeV (data sheet) | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 1.0e4/1000 = 10; 1000 × 3.00e8 / 1.0e4 = 3.0e7 s = 347.2 days.
- 2 × 3.156e7 × 1.0e4 = 6.312e11 = 2.104 m₀c; v/c = 2.104/√(1 + 2.104²) = 0.903; classical 10 × 6.312e7 / 3.00e8 = 2.10.
- k/√(1 + k²) for k = 1, 2, 3, 10: 0.7071, 0.8944, 0.9487, 0.9950.
- Revision 2 (7 Nov, Python): k = 0.5: 0.4472; √(1 + k²) for k = 0.5, 1, 2, 3, 10: 1.118, 1.414, 2.236, 3.162, 10.05; t = k × 3.0e7 s (Earth frame).
- 1/√(1 − 0.758²) = 1.5331; 1.5331 × 1.673e-27 × 0.758 × 3.00e8 = 5.833e-19; 1.673e-27 × 0.758 × 3.00e8 = 3.804e-19; 3.804/5.833 = 0.652.
- γ(0.99) = 7.0888, × 9.109e-31 × 0.99 × 3.00e8 = 1.918e-21; γ(0.999) = 22.366, × 9.109e-31 × 0.999 × 3.00e8 = 6.106e-21; ratio 3.184.
- γ(0.95) = 3.2026; × 9.109e-31 × 0.95 × 3.00e8 = 8.314e-22; 9.109e-31 × 0.95 × 3.00e8 = 2.596e-22.
- 6.5e12 / 938.272e6 = 6928; 6.5e12 × 1.602e-19 / 3.00e8 = 3.471e-15; /(1.602e-19 × 7.74) = 2799 m; 1.673e-27 × 3.00e8 / (1.602e-19 × 7.74) = 0.405 m. (1 − 0.9999999896) × 3.00e8 = 3.12 m s⁻¹.

## Memory aid check

- **"Momentum has no ceiling. Speed does."** Meaning, as said in scene 12: for a particle with rest mass, momentum (γm₀v) can increase without limit, but its speed is limited to below c. Assumptions checked: non-zero rest mass (photons travel at c and the "ceiling" is reached, not approached; scene 7); speeds measured in an inertial frame; "ceiling" for speed means a limit that is approached, never reached. It helps a new case: A2 (finite push, finite momentum, v < c) and the hook (no 2.1c). Introduced after the explanation (3 to 6).
- **Considered, not used:** "Push harder, get heavier" (teaches relativistic mass, the misconception the route asks to avoid).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,017 characters**, 18 scenes. Characters per scene (1 to 18): 560, 335, 413, 292, 446, 377, 211, 400, 690, 270, 520, 65, 186, 329, 137, 333, 378, 75. At 13.3 characters per second the speech is about 452 s; add about 3 s for the prediction countdown, 2 s for the thrust clock (5, 6), 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 71 s of holds and countdowns): **about 523 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 5,962 characters, about 532 s. Reserve trims if the voiced take runs long: scene 11 (open decision 1); scene 10; scene 7's last sentence.

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m7-v14.md`): paper background; heading "Why can a moving distance be shorter without an object being crushed?"; at the left the painted spacecraft `y12p-spacecraft-v1.png` facing right with the exhaust layer `y12p-spacecraft-exhaust-v1.png` on; an amber momentum arrow "p" from its nose and a speed tag "v = ?"; at the right a small coded γ against v/c graph with a dashed asymptote "c" and a marker close to it; chip "Next: why does ever more momentum fail to push mass to light speed?". Scene 1 turns the chip into the heading; the γ graph becomes the small v against time graph's neighbour.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why does ever more momentum fail to push mass to light speed?"; at the top left a small momentum bar and speed gauge (needle at the "c" stop); at the centre left the painted spacecraft `y12p-spacecraft-v1.png` (exhaust off) with tag "p = 0" and a grey energy bar beside it marked "?" with tag "energy at rest? E = mc²"; at the right the painted Sun `phys-y11-sun-v1.png` with tag "loses ≈ 4 million tonnes per second"; chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v15` (route phys-y12-m7-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v15` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, force-adds-momentum, relativistic-momentum, p-v-graph, speed-limit, probe-numbers, photons, invariant-mass, worked-proton, worked-electron, accelerators, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: p-v plot with asymptote, momentum bar and speed gauge, probe table, storage ring with radius overlays, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2, high-risk redesign): 1 to 2 clear change; 2 to 3 camera continue (about 56 s); 3 to 4 clear change to the plot; 4 to 5 camera change (the live thrust stage); 5 to 6 camera continue (about 60 s); 6 to 7 camera change (photon race); 7 to 8 clear change (older books and today); 8 to 9 clear change to working with the tunnel plate; no set-up runs past about 72 s; 9 to 10 camera continue; 10 to 11 clear change; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), thrust clock (2 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v15-learning-review.md`, `science_check` = `checks/p-y12-m7-v15-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/y12p-spacecraft-v1.png` and `y12p-spacecraft-exhaust-v1.png` (2048 × 768 each, same canvas; brief 191, inspected 7 Nov): the probe (1, 2, 5, 6, 7, 12, 17).
- `public/assets/physics/y12p-linac-tunnel-v1.png` (inspected 7 Nov: a long concrete tunnel with a copper beam line on stands and lights, soft vignette edge; no people or text): the accelerator place (9, 11, A1 card).
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 17.
- **Checked, not used:** `phys-y11-rocket-v1.png` (missile-like); `phys-y11-retort-stand-electromagnet-v1.png` (the accelerator magnets are coded field regions; a bench electromagnet would mislead about scale).

Need (new plates): none (Revision 2).

Coded: force and momentum arrows, momentum bar, speed gauge, plots, table, collision inset, photon packet, muon dot, storage ring, B symbols, radius overlays, energy bar, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v15 build brief):
1. **p-v plot.** Adapt `m7-energy` to p/(m₀c) against v/c with the classical line, an asymptote and a marker driven by p.
2. **Momentum bar and speed gauge.** Equal momentum blocks per beat; gauge needle from v = p/√(m₀² + p²/c²).

## Codex asset brief

No new plates for v15 (the spacecraft pair is briefed in `phys-y12-m7-v11.md`).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: F = Δp/Δt in relativity (author note b); p_v = γm₀v and why (author note c, one sentence); the p-v graph; the limit argued from infinite momentum, not infinite mass; the probe table and its idealisation (author note a); photons always at c; invariant mass versus relativistic mass; the proton and electron values; the LHC values and r = p/qB (author note e).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 4 under Decisions to root.
11. Revision 2: confirm every probe time is labelled Earth frame (1, 6 and the table); scene 5 no longer splits momentum into γ and v parts; the thrust-clock readouts (Numbers used); the "6.5 TeV operating example" label (11).

## YouTube metadata (draft)

Title: Relativistic Momentum: Why Nothing With Mass Reaches the Speed of Light | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson14.sa.html

Push a probe with a steady force for two years and Newton says it passes 2c. In fact it only reaches about 0.9c. See why a steady force keeps adding momentum forever, why relativistic momentum p = γm₀v climbs without limit as speed approaches c, why that sets a speed limit for anything with mass, why "mass increases with speed" is the wrong way to say it, and how particle accelerators are built around relativistic momentum. Worked examples and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"describe the consequences and applications of relativistic momentum with reference to: p_v = m0v/√(1 − v²/c²); the limitation on the maximum velocity of a particle imposed by special relativity (ACSPH133)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: length contraction. Next: E = mc² and mass-energy equivalence.

#HSCPhysics #Physics #SpecialRelativity #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v14; check that F = Δp/Δt is recalled clearly enough to carry scene 5; that the equal momentum blocks and shrinking speed steps read at speed; that the invariant-mass warning does not confuse; that the LHC scene earns its time), then the physics check (authors notes a, b, e) and the Codex error check.
- The equal momentum blocks with shrinking speed steps and the gauge needle pressing on c carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v15-learning-review.md`, `checks/p-y12-m7-v15-science-check.md`): 0 blockers, 2 should fix, 1 optional.
- **Should fix, probe frame (hook and scene 6).** Resolved: the hook says "So after two years of thrust, timed on Earth's clocks, how fast is it going?" and scene 6 says "After just under a year of Earth time"; the graph axis reads "t (Earth frame)", an ink "Earth frame" badge pins to it, the tag reads "0.90c at 2 years (Earth frame)" and the table is headed "t (Earth frame)". The constant-mass idealisation stays spoken. Author note (a).
- **Should fix, momentum partition (scene 5).** Resolved: "because more of it goes into gamma" becomes "because near c the curve climbs almost straight up"; the "γ part ↑, v part ↓" block labels are withdrawn and the scene shows equal momentum steps mapping to shrinking teal speed brackets; scene 3 adds the tag "a product, not a split". The Decisions line no longer quotes the site's "share into γ" wording.
- **Optional, LHC label.** Resolved: scene 11 carries "LHC: 6.5 TeV operating example"; Decisions and open decision 1 updated.

High-risk redesign (audit list; scene level):
- Revision 1 held one p-v plot from scene 4 through scene 8 (about 128 s). Revision 2: the plot alone (4); a camera change to the live thrust stage with the painted probe, momentum bar, gauge and plot (5, 6, about 60 s); a photon-versus-probe race strip (7); a clear change to the "older books / today" columns (8); working with the painted tunnel (9, 10); the ring with the tunnel inset (11). No set-up runs past about 72 s.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the probe (brief 191) is on screen from the first frame and carries 1, 2, 5 to 7, 12 and 17; the painted accelerator tunnel (existing, inspected) anchors 9, 11 and the A1 card.
- Live control: the Earth-frame thrust clock in 5 and 6 (Python: p = 0.5, 1, 2, 3, 10 m₀c give γ = 1.12, 1.41, 2.24, 3.16, 10.05 and v = 0.447, 0.707, 0.894, 0.949, 0.995c) with equal momentum blocks, shrinking speed steps and the gauge.
- Hand tags and a pen mark in role colours in every teaching scene ("never touches", "same Δp each second", "Δp = FΔt: true at any speed", "a product, not a split", "approached, never reached", "same push, less speed", "speed limit for anything with mass", "photon: m₀ = 0, always at c", "γ first", "35% too small at 0.758c", "magnets designed for γm₀v"; pen rings, brackets and arrows on the gap to c, the blocks, the γ inset, the curve's bend, the needle, the probe readout, the two proton momenta and the radius).
- Framed answers: p_v (3), the limit chip (5), 5.83 × 10⁻¹⁹ kg m s⁻¹ (9), both electron momenta (10), both A1 rows (14), the A2 row (16). New crossed slip: the classical 3.80 × 10⁻¹⁹ as the proton's momentum (9).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip and the p-v plot.
- Key notes cut from five long items (about 690 characters) to five short bullets (about 190 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v14's final frame (unchanged). The final frame (scene 17) is unchanged, so the v16 join holds.

Counts: 5,962 to 6,017 characters (scene sum); about 532 s to about 523 s.
