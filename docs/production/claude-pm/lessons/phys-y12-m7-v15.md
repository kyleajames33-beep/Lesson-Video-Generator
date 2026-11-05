# Year 12 Physics M7 V15: Relativistic momentum and the speed limit. Why does ever more momentum fail to push mass to light speed? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,962 characters, 18 scenes, about 532 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson14.sa.txt`, hash checked against the live file): orient and predict (electron energy near c, Sun's mass loss, warm-up, "Beyond the syllabus" box, intentions, vocabulary: rest energy, relativistic kinetic energy, mass-energy equivalence, relativistic momentum, energy-momentum relation), "relativistic-energy-and-momentum" (CERN protons 3 m/s short of c, E = γmc², E_k, p = γmv, Figure 1, Stop and Check 1 MV electron, MC γ = 3), "mass-energy-equivalence" (fission, fusion, annihilation, pair creation, Figure 2, Stop and Check 5.0 GeV proton, MC missing mass), "compare-combustion-and-fusion" (44 MJ petrol worked comparison, Figure 3, Stop and Check methane, MC 0.49 μg), "solve-accelerator-problem" (500 MV proton: 500 MeV, γ = 1.533, 0.758c, 5.82 × 10⁻¹⁹ kg m s⁻¹, 1090 MeV/c, classical 269 MeV), misconceptions (E = mc² is not kinetic; classical KE fails; relativistic mass deprecated; Figure 3; strategy; Stop and Check 1.022 MeV electron), apply and consolidate (Activities 1 and 2, "Describe 6 marks" relativistic momentum, "Analyse 7 marks" nuclear versus chemical), practice Q1 to Q3, reflect (Trinity, 0.98 g): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson14.sa.html`, SHA256 `0b60787d7bcc23e752898aff5f024528e7864bb362c9d36183ff3f402652ef80` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v15`, sections `relativistic-energy-and-momentum`, `solve-accelerator-problem`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use p=gamma mv and its high-speed behaviour, distinguishing invariant mass from historical relativistic mass. Stop before energy conversions." Next: "phys-y12-m7-v16: How does mass-energy accounting explain fusion, annihilation and combustion?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; graphs, arrows, the accelerator ring and calculation strips are coded, HSC style; the probe (spacecraft) and Sun are painted plates (shared from v11 and reused), scaled uniformly, never stretched; every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹, m_p = 1.673 × 10⁻²⁷ kg, m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C; data-sheet symbols p_v = m₀v/√(1 − v²/c²); a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v13 and v14 (γ, its growth near c, inertial frames), v12 (postulate 1), Module 6 (radius of a charged particle in a magnetic field, r = mv/qB), Year 11 (momentum p = mv, F = Δp/Δt, conservation of momentum).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-03`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-03`: "describe the consequences and applications of relativistic momentum with reference to:" "p_(v)=(m_(0)v)/(sqrt((1-(v^(2))/(c^(2)))))", "the limitation on the maximum velocity of a particle imposed by special relativity (ACSPH133)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v14's final frame (the probe with its engine on, a growing momentum arrow, the γ graph). Teaches: the classical prediction (constant force, constant acceleration, c passed in under a year); force as rate of change of momentum (a steady force adds momentum at a steady rate, at any speed); p_v = m₀v/√(1 − v²/c²) = γm₀v, with m₀ the rest mass, reducing to mv at low speed; the p against v graph (asymptote at c); why the speed limit follows (momentum grows without limit while v approaches c; reaching c needs infinite momentum); the probe table (p = 1, 2, 3, 10 m₀c: 0.71c, 0.89c, 0.95c, 0.995c); massless photons always at c; invariant mass versus historical relativistic mass; worked proton at 0.758c (site values; relativistic 5.83 × 10⁻¹⁹ against classical 3.80 × 10⁻¹⁹ kg m s⁻¹); electron at 0.99c and 0.999c; accelerator evidence (bending magnets sized for γm₀v). Mentions only that "energy grows too" (v16). Stops before E = mc², E = γmc², kinetic energy formulas and energy conversions (route "stop before energy conversions"; site "Beyond the syllabus").

## Decisions

- **Learner question (route wording kept).** "Why does ever more momentum fail to push mass to light speed?" The answer, built in order: a steady force always adds momentum at a steady rate (2); relativistic momentum is γm₀v, which grows without limit as v approaches c (3, 4); so steady pushing raises momentum forever while the speed only creeps towards c, and reaching c would need infinite momentum (5, 6).
- **Hook (new; owner "real context", route "start from the physical case").** An idealised probe: 1000 kg, thrust 1.0 × 10⁴ N, fuel use ignored (tag "idealised: constant mass"). Classically a = 10 m s⁻², c reached in 3.0 × 10⁷ s (347 days). 3 s prediction for "after two years": chips "2.1c", "exactly c", "about 0.9c"; answer 0.90c (p = 2.10 m₀c). The idealisation is stated once on screen (author note a).
- **Force and momentum (Year 11 recall).** F = Δp/Δt holds in relativity (author note b); a steady force adds a fixed momentum each second.
- **Relativistic momentum (data-sheet form p_v = m₀v/√(1 − v²/c²)).** The reason it must change is given in one sentence: momentum conservation must hold in every inertial frame (postulate 1, v12), and with relativistic time and length mv would not be conserved in all frames; γm₀v is (author note c). No derivation. m₀ defined as rest mass.
- **Graph (site Figure 1 adapted from kinetic energy to momentum; kit `m7-energy` "curve stops below c; infinity is not a plotted data point").** p/(m₀c) against v/c: classical straight line to 1 at v = c; relativistic curve with a vertical asymptote at v = c.
- **The limit (site "Describe 6 marks" step 4: "an ever-increasing share of that momentum goes into the γ factor rather than into velocity ... argue the limit from infinite momentum and energy, not from 'mass becomes infinite'").** Kept as the causal core (5). Energy is mentioned once ("and the energy") without formulas.
- **Probe table (computed).** v = p/√(m₀² + p²/c²): p = m₀c: 0.707c (after 3.0 × 10⁷ s); 2m₀c: 0.894c; 3m₀c: 0.949c; 10m₀c: 0.995c. A momentum bar grows in equal steps; a speed gauge creeps to c.
- **Photons (site "Describe 6 marks" step 6).** One short scene: zero rest mass, always exactly c, still carry momentum (p = h/λ is not given; author note d).
- **Invariant mass (route "distinguishing invariant mass from historical relativistic mass"; site misconception 3).** "Relativistic mass" named as an older idea; m₀ does not change; what grows is momentum (and energy). Exam phrasing given. The site's "inertia ... increases" is not used (site note 3).
- **Worked example 1 (site "solve-accelerator-problem" steps 3 and 4, momentum part only).** Proton at 0.758c (site value), m_p = 1.673 × 10⁻²⁷ kg (data sheet; the site uses 1.67): γ = 1.53; p = 5.83 × 10⁻¹⁹ kg m s⁻¹ (site 5.82 with 1.67); classical m₀v = 3.80 × 10⁻¹⁹; classical is about 35% too small. The site's energy steps (500 MV → γ) are not used (route stop; site's own "Beyond the syllabus" box marks them extension). Two stages: γ, then p with the classical comparison kept beside.
- **Worked example 2 (site "Describe 6 marks" step 3 values).** Electron at 0.99c (γ 7.09, p 1.92 × 10⁻²¹) and 0.999c (γ 22.4, p 6.11 × 10⁻²¹): speed up 0.9%, momentum × 3.18.
- **Accelerator evidence (site "Describe 6 marks" step 5 bending-magnet detail; syllabus "applications"; Module 6 recall).** r = p/(qB) with p = γm₀v. LHC protons: γ ≈ 6.9 × 10³ (6.5 TeV run; site "3 m/s short of c"), dipole field about 7.7 T, bending radius about 2.8 km; with p = m₀v the same field would give a radius of about 0.40 m. Said as "about forty centimetres, not nearly three kilometres"; tagged for the science check (author note e).
- **Memory aid (scene 12): "Momentum has no ceiling. Speed does."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): electron at 0.95c: relativistic p = 8.31 × 10⁻²² kg m s⁻¹; classical 2.60 × 10⁻²²; ratio γ = 3.20. Crossed: the classical value. A2 (3 marks, describe): why a particle with mass cannot reach c. Crossed: "its mass becomes infinite".
- **Significant figures.** Site's 0.758c kept; γ and p to three figures.
- **Handoff (route next).** Scene 17: the probe at rest with "p = 0" and a tag "energy at rest? E = mc²"; the Sun plate with "loses about 4 million tonnes per second" (site hook); chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". See "Final frame".
- **Colour key (relativity, as v12 to v14):** momentum amber; speed teal; classical predictions grey dashed; γ violet; c asymptote red dashed.
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
  (a) Idealised probe: constant rest mass and constant thrust measured in the starting inertial frame (the force acting on the probe in the Earth frame). A real rocket loses mass and its proper acceleration would be constant instead; the conclusion (v < c) is unchanged.
  (b) F = dp/dt with p = γm₀v holds in special relativity for the force measured in a given inertial frame; F = ma does not.
  (c) Why γm₀v: for a symmetric collision viewed from two frames, mv is not conserved in both, while γm₀v is. Not derived.
  (d) Photon momentum p = h/λ = E/c (Compton, de Broglie) is outside this route; v16 uses only E = hf for photons.
  (e) LHC (6.5 TeV per proton, 2015 to 2018): γ = 6.5 × 10¹²/938.3 × 10⁶ = 6.93 × 10³; p = 3.47 × 10⁻¹⁵ kg m s⁻¹; dipole field 7.7 T; r = p/(eB) = 2.80 km (the LHC's dipole bending radius is 2804 m). Classical m₀v with v ≈ c: 5.02 × 10⁻¹⁹ kg m s⁻¹; r = 0.40 m. To be confirmed by the science check.
  (f) Pronunciations: "m zero"; "p v" said "p"; "gamma"; "Large Hadron Collider".
- **Open decisions for root:**
  - **1. The LHC bending-radius comparison (science check).** Keep (it ties relativistic momentum to Module 6 and to a real machine) or cut to the site's qualitative statement ("magnets far stronger than classical physics predicts").
  - **2. Idealised probe (learning review).** Check that "ignore the fuel" does not distract; the alternative is a proton in a long linear accelerator with a constant electric force (less concrete).

Main question: *If a steady push keeps adding momentum forever, why doesn't the speed keep rising past c?*
Entry knowledge: γ (v13, v14); postulate 1 (v12); r = mv/qB (Module 6); p = mv and F = Δp/Δt (Year 11).
Stops after: the classical prediction, F = Δp/Δt, p = γm₀v, the p-v graph, the speed limit, the probe table, photons, invariant mass, two worked examples, accelerator evidence. No energy formulas.
Handoff: v16, how mass-energy accounting explains fusion, annihilation and combustion.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *p*, *m₀*, *v*, *c*, *γ*, *F*.

### 1. hook (two years of thrust)
> Here's the probe with its engines on. Let's make it simple. A thousand kilogram probe, a steady thrust of ten thousand newtons, and we'll ignore the fuel it burns. Newton's second law says it speeds up by ten metres per second, every second. At that rate it would reach the speed of light in under a year. So after two years of thrust, how fast is it going? Make your **prediction**. Not two c. It's at about zero point nine c, and it never reaches c, however long you push. So why does ever more momentum fail to push mass to light **speed**?

Visual: opens on v14's final frame (see "Opening frame"); the chip becomes the heading: "Why does ever more momentum fail to push mass to light speed?". On "A thousand kilogram probe" givens chip "m₀ = 1000 kg", tag "idealised: ignore fuel use". On "a steady thrust of ten thousand newtons" an orange force arrow "F = 1.0 × 10⁴ N" at the probe's rear. On "ten metres per second, every second" "a = F/m = 10 m s⁻²". On "under a year" a dashed grey classical speed line on a small v against time graph reaches "c" at "3.0 × 10⁷ s ≈ 347 days" and keeps rising. On "prediction" a 3 s `Countdown` beside chips "2.1c", "exactly c", "about 0.9c". On "about zero point nine c" a solid teal curve on the same graph bends below c and reads "0.90c at 2 years"; "about 0.9c" ticks. On "however long you push" the teal curve runs along under a red dashed line "c" without touching it.

### 2. force adds momentum
> Start with momentum. In Year 11, momentum is mass times velocity, and force is the rate of change of momentum, F equals delta p over delta t. So a steady force adds the same momentum every second. Ten thousand newtons adds ten thousand kilogram metres per second of momentum, each **second**. That rule still holds near the speed of **light**.

Visual: board change: the probe at the left with its force arrow; a vertical amber momentum bar at the right. On "momentum is mass times velocity" chip "p = mv (Year 11)". On "F equals delta p over delta t" the equation strip "F = Δp/Δt". On "second" the momentum bar grows by one equal block "+1.0 × 10⁴ kg m s⁻¹" per beat, three beats. On "light" tag "Δp = FΔt: true at any speed".

### 3. relativistic momentum
> What changes is how momentum depends on speed. To keep momentum conserved in every inertial frame, Einstein showed that it has to be p equals m zero v, over the square root of one minus v squared over c **squared**. That's gamma, times m zero v. Here m zero is the rest mass, the mass measured when the object is at rest. At everyday speeds gamma is one, so this is just m v. Near the speed of light, gamma gets **huge**.

Visual: on "conserved in every inertial frame" a small coded collision of two balls viewed in two frame badges, tag "momentum conservation in every frame (postulate 1)". On "squared" the equation strip writes "p_v = m₀v / √(1 − v²/c²)" (data sheet). On "That's gamma, times m zero v" "= γm₀v" (violet γ). On "the rest mass" a chip "m₀: rest mass (measured at rest)". On "this is just m v" a tag "low speed: γ ≈ 1 → p ≈ m₀v". On "huge" a small inset of v13's γ graph with its marker sliding up the asymptote.

### 4. momentum against speed
> Plot momentum against speed. The classical line, m v, is straight, and reaches m zero c at the speed of light, nothing special. The relativistic curve starts on that line at low speed, then bends upwards, and climbs without limit as v approaches c. It never touches the line where v equals **c**.

Visual: board change: plot "p / (m₀c)" up (0 to 10) against "v/c" along (0 to 1). On "The classical line" a grey dashed straight line from the origin to "1 at v = c". On "The relativistic curve starts on that line" an amber curve draws along it at low v. On "bends upwards" it peels away above. On "climbs without limit" it rises steeply near the right edge. On "c" a red dashed vertical line "v = c", tag "asymptote: approached, never reached"; the curve stops just short of it (no point plotted at c).

### 5. why there's a speed limit
> Now put the two ideas together. The thrust keeps adding momentum at a steady rate, forever. But on this curve, each extra bit of momentum buys less and less speed, because more of it goes into gamma. To actually reach c, gamma would have to be infinite, so the momentum would have to be infinite. No finite force, acting for a finite time, can supply that. So anything with mass can get closer and closer to c, but never reach **it**.

Visual: the plot stays at the right; the momentum bar returns at the left. On "adding momentum at a steady rate" the bar grows in equal blocks and a horizontal marker on the plot climbs in equal steps up the p axis. On "each extra bit of momentum buys less and less speed" each equal p step maps across to the curve and down to the v axis: the v steps shrink (teal brackets getting shorter). On "more of it goes into gamma" a split label on each new block "γ part ↑, v part ↓". On "infinite" the curve's top arrow "p → ∞ as v → c". On "No finite force, acting for a finite time" chip "finite FΔt → finite p → v < c". On "it" tag "speed limit for anything with mass".

### 6. the probe's numbers
> Here are the numbers for our probe. After just under a year, its momentum reaches m zero c, and its speed is zero point seven one c. Double that momentum, and it's at zero point eight nine c. Triple it, zero point nine five c. Ten times, zero point nine nine five c. The momentum keeps climbing steadily, but the speed just creeps towards c, and never gets **there**.

Visual: a speed gauge (teal needle, red stop at "c") beside the momentum bar; a four-row table writes at the right. On "its momentum reaches m zero c" row 1 "p = m₀c (t = 3.0 × 10⁷ s): v = 0.71c"; the needle jumps to 0.71. On "Double that momentum" row 2 "2m₀c: 0.89c". On "Triple it" row 3 "3m₀c: 0.95c". On "Ten times" row 4 "10m₀c: 0.995c"; the bar is now ten blocks tall while the needle sits just below the stop. On "there" the needle trembles at the stop without touching it; tag "momentum: no ceiling; speed: limit c".

### 7. light itself
> What about light? Photons have no rest mass, so this limit works differently for them. They always travel at exactly c, never slower, and they still carry momentum. The speed limit applies to anything with **mass**.

Visual: an amber photon packet crosses the plot along the red line "v = c", tag "photon: m₀ = 0, always at c". On "they still carry momentum" a small momentum arrow on the packet, tag "photons carry momentum". On "mass" chip "m₀ > 0: v < c always".

### 8. invariant mass, not relativistic mass
> A warning about older books. Some say mass increases with speed, and call gamma m zero the relativistic mass. Physicists now avoid that idea. The mass, m zero, is the same at every speed. In its own frame, a fast muon is just an ordinary muon, with ordinary mass. What grows is the momentum, and the energy. So in an exam, say the momentum increases without limit, not that the mass becomes **infinite**.

Visual: on "call gamma m zero the relativistic mass" a grey chip "relativistic mass m = γm₀ (older idea)". On "Physicists now avoid that idea" the chip greys further with a caution mark. On "the same at every speed" chip "invariant mass m₀: same in every frame". On "In its own frame, a fast muon" a slate muon dot with a teal badge "own frame: m₀ unchanged". On "What grows is the momentum, and the energy" two bars grow, "p" (amber) and "energy" (grey, label only, no formula; tag "next video"). On "infinite" a chip "mass becomes infinite" fades in and is crossed (caption "say: momentum (and energy) increase without limit").

### 9. worked example: a proton in an accelerator
> Let's calculate. A proton in an accelerator moves at zero point seven five eight c, and its rest mass is one point six seven three times ten to the minus twenty seven kilograms. First, gamma. One over the square root of one minus zero point seven five eight squared is one point five **three**. Then p equals gamma m zero v. One point five three, times one point six seven three times ten to the minus twenty seven, times zero point seven five eight times three times ten to the eight, is five point eight three times ten to the minus nineteen kilogram metres per **second**. The classical m v gives only three point eight zero times ten to the minus nineteen, about thirty five per cent too **small**.

Visual: board change to the working layout, the p-v plot small at the top left. Task strip: "Find the proton's momentum, and compare with the classical value." Equation strip: "p_v = m₀v / √(1 − v²/c²) = γm₀v". Givens grouped: "v = 0.758c" (proton, site worked example), "m₀ = 1.673 × 10⁻²⁷ kg, c = 3.00 × 10⁸ m s⁻¹" (data sheet). On "three" (stage 1) "γ = 1/√(1 − 0.758²) = 1/√0.4254 = 1.53". On "second" (stage 2) "p = 1.53 × 1.673 × 10⁻²⁷ × 0.758 × 3.00 × 10⁸ = 5.83 × 10⁻¹⁹ kg m s⁻¹" (boxed). On "small" a grey line beside it "classical: m₀v = 3.80 × 10⁻¹⁹ kg m s⁻¹ (35% too small)"; the plot marks both values at v = 0.758c.

### 10. worked example: a small step in speed
> Now compare an electron at zero point nine nine c with one at zero point nine nine nine c. The speed goes up by less than one per cent. But gamma goes from seven point zero nine to twenty two point four, so the momentum more than **triples**. That's the speed limit at work.

Visual: "p = 5.83 × 10⁻¹⁹ kg m s⁻¹" stays small at the top; the stage 1 and 2 lines fade. Two columns: "0.99c" and "0.999c". On "less than one per cent" a teal bracket between the speeds "+0.9%". On "seven point zero nine to twenty two point four" "γ = 7.09" and "γ = 22.4". On "triples" "p = 7.09 × 9.109 × 10⁻³¹ × 0.99 × 3.00 × 10⁸ = 1.92 × 10⁻²¹" and "p = 22.4 × 9.109 × 10⁻³¹ × 0.999 × 3.00 × 10⁸ = 6.11 × 10⁻²¹ kg m s⁻¹"; an amber bracket "× 3.2". Data chip "m_e = 9.109 × 10⁻³¹ kg".

### 11. accelerators are built for it
> Particle accelerators depend on this every day. From Module six, a charged particle in a magnetic field moves in a circle of radius p over q B, and the momentum in that formula has to be gamma m zero v. At CERN's Large Hadron Collider, protons travel within about three metres per second of the speed of light, with gamma near seven thousand. Its bending magnets curve them on a radius of nearly three kilometres. If momentum were just m v, the same magnets would bend them in a circle of radius about forty **centimetres**.

Visual: board change: a coded storage ring seen from above, slate B dots and crosses in its dipole sections, an amber proton dot circling. On "a circle of radius p over q B" chip "Module 6: r = mv/qB → relativistic: r = p/qB, p = γm₀v". On "within about three metres per second of the speed of light" tag "v = 0.9999999896c (3 m s⁻¹ short of c)"; on "gamma near seven thousand" "γ ≈ 6.9 × 10³". On "nearly three kilometres" a radius arrow "r ≈ 2.8 km (B ≈ 7.7 T)". On "centimetres" a tiny grey dashed circle at the centre, "classical p = m₀v: r ≈ 0.40 m", crossed in red; tag "magnets designed for γm₀v".

### 12. a way to remember
> Here's a way to remember it. Momentum has no ceiling. Speed **does**.

Visual: board clears to the momentum bar and the speed gauge side by side. On "Momentum has no ceiling" the bar keeps growing off the top of the frame. On "does" the gauge needle presses against the red "c" stop; the handwritten line writes large: "Momentum has no ceiling. Speed does." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electron travels at zero point nine five c. Calculate its relativistic momentum, and compare it with the value given by the classical expression, m v. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An electron travels at 0.95c. (a) Calculate its relativistic momentum. (b) Compare this with the value predicted by the classical expression p = mv. (3 marks)" Data chips "m_e = 9.109 × 10⁻³¹ kg", "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Gamma at zero point nine five c is three point two zero. So p, which is gamma m zero v, comes to eight point three times ten to the minus twenty two kilogram metres per **second**. The classical m v is two point six times ten to the minus twenty two, so the true momentum is three point two times **bigger**. The slip is stopping at m **v**.

Visual: card shrinks to the top; "0.95c", "relativistic momentum" and "classical expression" underline. On "second" "(a) γ = 3.20; p = γm₀v = 3.20 × 9.109 × 10⁻³¹ × 0.95 × 3.00 × 10⁸ = 8.3 × 10⁻²² kg m s⁻¹". On "bigger" "(b) classical m₀v = 2.6 × 10⁻²²; relativistic = γ × classical = 3.2 × larger". On "v" a chip "p = 2.6 × 10⁻²² kg m s⁻¹" fades in and is crossed (caption "classical value: too small at 0.95c"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Use relativistic momentum to explain why a particle with mass can't be accelerated to the speed of light. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Use the relationship p_v = m₀v / √(1 − v²/c²) to explain why a particle with mass cannot be accelerated to the speed of light. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> As v approaches c, the square root approaches zero, so the momentum grows without limit. A force adds momentum at a finite rate, so any finite push gives finite momentum, and a speed still below **c**. Reaching c would need infinite momentum. The slip is saying the mass becomes infinite. The rest mass doesn't change. The momentum **does**.

Visual: card shrinks to the top; "particle with mass" and "cannot be accelerated" underline. On "c" "v → c: √(1 − v²/c²) → 0 → p → ∞; F = Δp/Δt: finite F, finite Δt → finite p → v < c". On "does" a chip "its mass becomes infinite" fades in and is crossed (caption "m₀ is constant; p grows without limit"). Hold about 1 second.

### 17. handoff
> So pushing harder always adds momentum, and energy too, but never quite enough speed. And here's the surprise. Even at rest, with no momentum at all, an object holds an enormous store of energy, just because it has mass. The Sun gives some of it away, losing about four million tonnes every second. So how does mass-energy accounting explain fusion, annihilation and **combustion**?

Visual: board clears (camera change). On "pushing harder always adds momentum" the momentum bar and gauge shrink to the top left. On "Even at rest, with no momentum at all" the probe returns at the centre left with the exhaust off, tag "p = 0"; a grey energy bar beside it with a large "?" and a tag "energy at rest? E = mc²". On "The Sun gives some of it away" the painted Sun `phys-y11-sun-v1.png` appears at the right with a tag "loses ≈ 4 million tonnes per second". On "combustion" the chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Force adds momentum at a steady rate: F = Δp/Δt (true at any speed).
2. Relativistic momentum: p_v = m₀v / √(1 − v²/c²) = γm₀v. m₀ = rest mass (invariant). Low speed: p ≈ m₀v.
3. As v → c, γ → ∞ and p → ∞. A finite force for a finite time gives finite p, so v < c: no particle with mass reaches c. Photons (no rest mass) always travel at c.
4. Say "momentum and energy increase without limit", not "mass becomes infinite" (relativistic mass is an older idea).
5. Proton at 0.758c: γ = 1.53, p = 5.83 × 10⁻¹⁹ kg m s⁻¹ (classical 3.80 × 10⁻¹⁹). Accelerator magnets are built for p = γm₀v (r = p/qB).

Memory aid (large, on the notes screen): *Momentum has no ceiling. Speed does.*

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
| Site checks | KE underestimate 5% at γ = 1.035 (0.26c), 10% at γ = 1.073 (0.36c), 13% at γ = 1.1; m_p c² = 1.506 × 10⁻¹⁰ J = 940 MeV (data sheet) | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 1.0e4/1000 = 10; 1000 × 3.00e8 / 1.0e4 = 3.0e7 s = 347.2 days.
- 2 × 3.156e7 × 1.0e4 = 6.312e11 = 2.104 m₀c; v/c = 2.104/√(1 + 2.104²) = 0.903; classical 10 × 6.312e7 / 3.00e8 = 2.10.
- k/√(1 + k²) for k = 1, 2, 3, 10: 0.7071, 0.8944, 0.9487, 0.9950.
- 1/√(1 − 0.758²) = 1.5331; 1.5331 × 1.673e-27 × 0.758 × 3.00e8 = 5.833e-19; 1.673e-27 × 0.758 × 3.00e8 = 3.804e-19; 3.804/5.833 = 0.652.
- γ(0.99) = 7.0888, × 9.109e-31 × 0.99 × 3.00e8 = 1.918e-21; γ(0.999) = 22.366, × 9.109e-31 × 0.999 × 3.00e8 = 6.106e-21; ratio 3.184.
- γ(0.95) = 3.2026; × 9.109e-31 × 0.95 × 3.00e8 = 8.314e-22; 9.109e-31 × 0.95 × 3.00e8 = 2.596e-22.
- 6.5e12 / 938.272e6 = 6928; 6.5e12 × 1.602e-19 / 3.00e8 = 3.471e-15; /(1.602e-19 × 7.74) = 2799 m; 1.673e-27 × 3.00e8 / (1.602e-19 × 7.74) = 0.405 m. (1 − 0.9999999896) × 3.00e8 = 3.12 m s⁻¹.

## Memory aid check

- **"Momentum has no ceiling. Speed does."** Meaning, as said in scene 12: for a particle with rest mass, momentum (γm₀v) can increase without limit, but its speed is limited to below c. Assumptions checked: non-zero rest mass (photons travel at c and the "ceiling" is reached, not approached; scene 7); speeds measured in an inertial frame; "ceiling" for speed means a limit that is approached, never reached. It helps a new case: A2 (finite push, finite momentum, v < c) and the hook (no 2.1c). Introduced after the explanation (3 to 6).
- **Considered, not used:** "Push harder, get heavier" (teaches relativistic mass, the misconception the route asks to avoid).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,962 characters**, 18 scenes. Characters per scene (1 to 18): 535, 335, 413, 292, 430, 363, 211, 400, 690, 270, 520, 65, 186, 329, 137, 333, 378, 75. At 13.3 characters per second the speech is about 448 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 532 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 11 (open decision 1); scene 10; scene 7's last sentence.

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m7-v14.md`): paper background; heading "Why can a moving distance be shorter without an object being crushed?"; at the left the painted spacecraft `y12p-spacecraft-v1.png` facing right with the exhaust layer `y12p-spacecraft-exhaust-v1.png` on; an amber momentum arrow "p" from its nose and a speed tag "v = ?"; at the right a small coded γ against v/c graph with a dashed asymptote "c" and a marker close to it; chip "Next: why does ever more momentum fail to push mass to light speed?". Scene 1 turns the chip into the heading; the γ graph becomes the small v against time graph's neighbour.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why does ever more momentum fail to push mass to light speed?"; at the top left a small momentum bar and speed gauge (needle at the "c" stop); at the centre left the painted spacecraft `y12p-spacecraft-v1.png` (exhaust off) with tag "p = 0" and a grey energy bar beside it marked "?" with tag "energy at rest? E = mc²"; at the right the painted Sun `phys-y11-sun-v1.png` with tag "loses ≈ 4 million tonnes per second"; chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v15` (route phys-y12-m7-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v15` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, force-adds-momentum, relativistic-momentum, p-v-graph, speed-limit, probe-numbers, photons, invariant-mass, worked-proton, worked-electron, accelerators, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: p-v plot with asymptote, momentum bar and speed gauge, probe table, storage ring with radius overlays, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change to the plot; 4 to 5 to 6 camera continue; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 clear change to working; 9 to 10 camera continue; 10 to 11 clear change; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v15-learning-review.md`, `science_check` = `checks/p-y12-m7-v15-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `y12p-spacecraft-v1.png` and `y12p-spacecraft-exhaust-v1.png` (requested by v11): the probe (1, 2, 17).
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 17.
- **Checked, not used:** `phys-y11-rocket-v1.png` (missile-like); `phys-y11-retort-stand-electromagnet-v1.png` (the accelerator magnets are coded field regions; a bench electromagnet would mislead about scale).

Need (new plates): none.

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
