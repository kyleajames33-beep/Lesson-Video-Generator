# Year 12 Physics M8 V09: Chadwick's discovery of the neutron. What evidence established an uncharged massive particle in the nucleus? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,037 characters, 18 scenes, about 535 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v08's final frame.

Scope: ninth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that atoms are made up of protons, neutrons and electrons?". Templates as `phys-y12-m7-v10.md`; `math-a12-d10.md` for the calculation layout; `bio-y11-fa1-v05.md` for plates. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through `work/brief168/module8-lesson11.sa.txt`; also read for v07 and v08): lesson 11, especially vocabulary (neutron, A = Z + N), Learning Intentions ("Why beryllium radiation had to be a neutral particle, not a gamma ray", "Use recoil-speed data to find the neutron's mass"), "find-the-neutron" (the mass puzzle, proton-electron pairs, Bothe and Becker 1930, Curie and Joliot 1932, Chadwick's reinterpretation and reaction equation, the recoil formula, the two-target formula, 3.3 × 10⁷ and 4.7 × 10⁶ m/s, 1.16 m_p, Figure 6, formula box, Stop and check, fill-in), and the "beyond the syllabus" note that recoil calculations are extension unless the exam supplies the relationship: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson11.sa.html`, SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v09`, section `find-the-neutron`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain Chadwick radiation and recoil evidence, distinguish neutron from gamma hypotheses using momentum/energy. Stop before quark structure." Next: "phys-y12-m8-v10: Why could Rutherford model not explain stable atoms and line spectra?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the source vessel, the lead bricks, the paraffin wax and the ionisation chamber are painted plates (four new), scaled uniformly, never stretched; nuclei, particles, photons, energy bars, collision balls and calculation strips are coded, HSC style; every number recalculated in Python with m_p = 1.673 × 10⁻²⁷ kg, m_n = 1.675 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C and c = 3.00 × 10⁸ m s⁻¹; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v08 (the nucleus, the proton, the gold mass puzzle), Module 7 v10 (photons, the electron volt), Year 11 (nuclear notation and balancing; momentum and elastic collisions; a charged particle ionises matter along its path).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ2-02`), quoted from the route JSON `syllabusActions`:

- `P8-IQ2-02`: "investigate, assess and model the experimental evidence supporting the nuclear model of the atom, including:"
  - "the Geiger-Marsden experiment" (v08)
  - "Rutherford’s atomic model" (v08)
  - "Chadwick’s discovery of the neutron (ACSPH026)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v08's final frame (gold nucleus: charge of 79 protons, mass of about 197, gap "≈ 118 m_p missing", "charge 0?"). Teaches: the mass puzzle (gold, helium) and the rejected proton-electron idea (one clause); Bothe and Becker's beryllium radiation (penetrating, undeflected, so uncharged; assumed gamma); Curie and Joliot's paraffin protons (up to 3.3 × 10⁷ m s⁻¹, 5.7 MeV); the gamma problem (a massless photon hands a heavy proton only a small share: about 55 MeV needed, more than the reaction's roughly 16 MeV; the nitrogen recoils need about 100 MeV, a contradiction); Chadwick's neutron (uncharged, proton-like mass; an equal-mass head-on collision hands over all the energy); why a neutral particle penetrates lead; the reaction ⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n; the recoil relation (supplied, checked by limiting cases); the two-target ratio and m_n ≈ 1.16 m_p; the data-sheet value; the completed nucleus (gold: 79 protons, 118 neutrons, A = 197). Stops before quark structure (later in Module 8) and before the atom's electron problem (v10).

## Decisions

- **Learner question (route wording kept).** "What evidence established an uncharged massive particle in the nucleus?" The answer, built in order: the radiation was uncharged (no deflection) (2); it hit protons very hard (3); photons could not do that within the energy available, and the photon energies from two targets disagreed (4, 5); a neutral particle with a proton's mass does it easily (6) and explains the penetration (7); two recoil speeds fix its mass at about a proton's (8 to 10).
- **Hook (site "find-the-neutron" opening, re-staged from v08's final frame).** The gold gap plus helium (charge 2, mass 4); the proton-electron pairing idea in one clause with "clashed with other measurements" (author note a); then the detection problem: a neutral particle does not bend and barely leaves a trail.
- **Gamma versus neutron (route stop: "using momentum/energy").** Energy transfer is the core argument. For a photon scattering straight back off a proton at rest, the largest kinetic energy it can give is T = 2E²/(mc² + 2E) (author note b); for T = 5.69 MeV, E = 54.6 MeV ("about fifty five million electron volts"). Said as "a massless photon can only hand a heavy proton a small share of its energy" with the ping-pong-on-bowling-ball comparison. For nitrogen (site speeds, 1.61 MeV recoil) the same rule needs about 104 MeV ("roughly a hundred million"). The reaction's energy limit: Q for ⁹Be(α,γ)¹³C is 10.6 MeV, plus at most 5.3 MeV from the polonium alpha: about 16 MeV ("at most about sixteen million"; Chadwick's own estimate was about 14 MeV) (author note c). The neutron side uses Year 11 elastic collisions: equal masses, head-on, full transfer.
- **Penetration (site "penetrated several centimetres of lead").** The site attributes the gamma assumption to penetration; scene 7 explains why a neutral massive particle also penetrates (no electric force on atomic electrons, so no ionisation losses). This is causal, not new content.
- **Recoil relation (site formula box, "extension unless the exam supplies").** Shown as supplied (tag "from momentum and kinetic-energy conservation; exams supply this"), then checked with the two limiting cases (equal masses: v_recoil = v; very heavy target: v_recoil ≈ 0). The full derivation is in author note d, not learner copy, following the site's scope note. Open decision 2.
- **Two-target method (site formula and numbers).** The site's rearranged formula m_n = (v_N m_N − v_p m_p)/(v_p − v_N) is reached through the ratio form, which shows the cancelling of the unknown speed: v_p/v_N = (m_n + m_N)/(m_n + m_p) = 7.02, then 7.02(m_n + m_p) = m_n + 14m_p, so m_n = 6.98/6.02 m_p = 1.16 m_p. Site numbers unchanged (3.3 × 10⁷ and 4.7 × 10⁶ m s⁻¹, m_N = 14 m_p). The site's direct formula appears as a small "same thing" chip.
- **Modern value (site and data sheet).** m_n = 1.675 × 10⁻²⁷ kg = 1.0012 m_p ("about a tenth of a percent heavier than a proton").
- **Completed nucleus (site "A = Z + N").** Gold-197: Z = 79, N = 118, A = 197. Atomic number and mass number defined in one sentence (Year 11 notation recalled).
- **Memory aid (scene 12): "A photon on a proton is a ping-pong ball on a bowling ball. A neutron on a proton is billiard ball on billiard ball."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks, explain): why neutral particles of proton-like mass rather than gamma rays. Crossed: "gamma rays are charged" (they are not; both hypotheses were uncharged). A2 (2 marks, explain): why two targets. Crossed: "one target is enough".
- **Handoff (route next).** Scene 17: the completed atom with an electron on a circular orbit, its velocity arrow turning and a rose "accelerating" tag, the Module 7 chip "accelerating charges radiate", and "?" See "Final frame".
- **Colour key (Module 7 and 8 keys):** photons amber wave packets "γ"; neutrons grey discs "n" (no charge sign); protons red discs "p"; nitrogen nuclei larger red discs "N"; alpha particles amber circles "α"; electrons navy dots; energy bars orange (kinetic energy); recoil speeds teal arrows.
- **Site sources used:** lesson 11: vocabulary (neutron, A = Z + N) (6, 11); "find-the-neutron" (mass puzzle, proton-electron pairs, Bothe and Becker, Curie and Joliot, Chadwick's proposal, reaction, recoil formula, two-target method, speeds, 1.16 m_p, 1.675 × 10⁻²⁷ kg, Figure 6) (1 to 11); Stop and check questions (A1, A2); "Learn ... why two different recoil speeds were needed" (A2). Not used: Nobel Prize date (not needed); nuclear spin details (author note a).
- **Site notes (quoted from site lesson 11, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Precision ("find-the-neutron"): "Using Chadwick's measured recoil speeds ... ≈ 1.16 m_p ... this confirmed the existence of the neutron." The two-target recoil estimate was rough (Chadwick quoted 1.15 with an error of up to about 10%); his better mass came from nuclear reaction energies (about 1.005 to 1.008 u). Suggest adding "Chadwick's recoil estimate was rough; a reaction-energy method gave a value much closer to the proton's." (Science check to confirm the figures.)
  2. Precision ("find-the-neutron"): "If the radiation really were gamma-ray photons, each photon would need an implausibly large energy". Correct, but no number is given, so students cannot judge "implausible". Suggest adding "about 50 MeV for the protons (Chadwick's figure was about 55 MeV), and a different, larger value for nitrogen recoils".
  3. Checked and correct: Bothe and Becker 1930; Curie and Joliot 1932; the reaction equation (A: 4 + 9 = 12 + 1; Z: 2 + 4 = 6 + 0); the recoil formula and the rearranged mass formula (algebra checked); 1.16 m_p from the site's speeds (1.159); m_n = 1.675 × 10⁻²⁷ kg ≈ 1.001 m_p.
- **Cause chain taught, in order:** (1) nuclei are heavier than their protons account for (1); (2) no deflection in fields means no charge (2); (3) the radiation gave protons about 5.7 MeV (3); (4) a massless photon can transfer only a small share of its energy to a heavy proton, so it would need about 55 MeV, more than the reaction can give (4); (5) the nitrogen recoils demand a different photon energy for the same beam, so the photon idea is inconsistent (5); (6) a neutral particle with a proton's mass can hand a proton all its energy, head-on, so no extra energy is needed (6); (7) with no charge it does not ionise, so it penetrates lead (7); (8) two recoil speeds give two equations, the unknown speed cancels, and the mass comes out near a proton's (8 to 10).
- **Entry knowledge (route `entryKnowledge`):** v08 (nucleus, proton, gold mass gap); Module 7 v10 (photons, electron volt); Year 11 (nuclear notation, conservation of momentum and kinetic energy in elastic collisions, ionisation by charged particles).
- **Learner-visible vocabulary (plain meaning at first use):** gamma rays (high-energy photons, 2); paraffin wax (a solid rich in hydrogen, so in protons, 3); recoil (the target's motion after being struck, 5); neutron (6); elastic collision (kinetic energy is kept, 8); atomic number Z and mass number A (11).
- **Legacy logic ported:** none.
- **New explainer motion:** **beam line** (coded alpha dots from the source vessel striking beryllium, a grey dashed "radiation" stream through the lead bricks to the paraffin, red protons leaving, the ionisation chamber's coded meter flicking); **energy-transfer insets** (photon bouncing off a proton with an amber share bar; equal-mass collision with a full transfer); **contradiction board** (two photon energies that should match); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the beam line across the centre; insets and chips on the right; algebra lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The proton-electron model of the nucleus failed for several reasons, including the measured spin of nitrogen-14 and the energy needed to confine an electron in a nucleus; one clause only ("clashed with other measurements").
  (b) Largest kinetic energy given by a photon of energy E to a free particle of rest energy mc² (180° Compton scattering): T = 2E²/(mc² + 2E). Proton: mc² = 940 MeV (data-sheet m_p), T = 5.69 MeV gives E = 54.6 MeV. Nitrogen-14: mc² ≈ 13 160 MeV (14 m_p), T = 1.61 MeV (site speed) gives E = 104 MeV; Chadwick's published nitrogen figure was about 90 MeV (from a recoil energy of about 1.2 MeV measured by range). The narration says "roughly a hundred million"; science check to accept or change to "about ninety million" with Chadwick's own figures.
  (c) Energy available: ⁹Be + α → ¹³C + γ has Q = 10.65 MeV; polonium-210 alphas carry 5.30 MeV; maximum about 15.9 MeV, said "at most about sixteen million". The neutron reaction ⁹Be(α,n)¹²C has Q = 5.70 MeV, so neutrons up to about 11 MeV are available, enough for 5.7 MeV protons.
  (d) Derivation of the recoil relation (elastic, head-on, target at rest): momentum m_n v = m_n v₁ + m V; kinetic energy ½m_n v² = ½m_n v₁² + ½mV²; solving gives V = 2m_n v/(m_n + m). Taking the ratio for two targets gives v_p/v_N = (m_n + m_N)/(m_n + m_p), which rearranges to the site's m_n = (v_N m_N − v_p m_p)/(v_p − v_N).
  (e) "Billiard ball on billiard ball" assumes a head-on elastic collision; glancing collisions transfer less, which is why the maximum recoil speeds are used.
  (f) Pronunciations: "Bothe" (BOH-tuh); "Irène Curie" (ee-REN kew-REE); "Frédéric Joliot" (fray-day-REEK zho-LYOH); "Chadwick"; "paraffin"; "beryllium" (buh-RIL-ee-um); "polonium".
- **Open decisions for root:**
  - **1. Four new plates (Codex).** `y12p-po-be-source-v1`, `y12p-lead-bricks-v1`, `y12p-paraffin-wax-v1`, `y12p-ionisation-chamber-v1`. Fallback: coded HSC block diagram (site Figure 6 style).
  - **2. Recoil relation as supplied (science check and learning review).** Keep it supplied with limiting-case checks (site: extension unless scaffolded), or add a one-line derivation strip if the review wants it derived.
  - **3. Nitrogen photon figure (science check).** "Roughly a hundred million" (from the site's speeds) or "about ninety million" (Chadwick's own figure); see author note b.

Main question: *How do you find a particle that has no charge, so it can't be bent, steered or easily seen?*
Entry knowledge: the nucleus and proton (v08); photons and the electron volt (Module 7); elastic collisions and nuclear notation (Year 11).
Stops after: beryllium radiation, paraffin protons, the gamma contradiction, Chadwick's neutron, the two-target mass, the completed nucleus. No quarks; no electron-orbit problem.
Handoff: v10, why Rutherford's model could not explain stable atoms and line spectra.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *m_n*, *m_p*, *v_p*, *v_N*, *E*.

### 1. hook (the missing mass)
> Here's the puzzle from last time. A gold nucleus has the charge of seventy nine protons, but the mass of about a hundred and ninety seven. Helium has the charge of two protons, and the mass of four. An early guess was extra protons paired with electrons, but that clashed with other measurements. So something heavy with no charge seemed to be in there. But a neutral particle doesn't bend in fields, so how would you ever catch one? What evidence established an uncharged massive particle in the **nucleus**?

Visual: opens on v08's final frame (see "Opening frame"); the chip becomes the heading: "What evidence established an uncharged massive particle in the nucleus?". On "seventy nine protons" the charge bar pulses; on "a hundred and ninety seven" the grey gap pulses. On "Helium has the charge of two protons" a small helium nucleus beside it: charge bar "+2e", mass bar "2 m_p" red plus a grey gap to "4 m_p". On "paired with electrons" the gap fills briefly with "p + e" pairs, then they fade with a crossed tag "p + e pairs: clashed with other measurements". On "something heavy with no charge" grey discs "n?" fill both gaps. On "doesn't bend in fields" an inset: a grey disc crossing blue field lines and slate crosses in a straight line, tag "no charge: no bend". On "nucleus" the heading underlines "uncharged massive".

### 2. the beryllium radiation
> The first clue came in nineteen thirty. Walther Bothe and Herbert Becker fired alpha particles from polonium at the light metal beryllium. Out came a radiation that passed through several centimetres of lead. Electric and magnetic fields didn't bend it, so it had no **charge**. The only uncharged, penetrating radiation anyone knew was gamma rays, high-energy photons, so that's what they assumed it **was**.

Visual: board change to the beam line. On "alpha particles from polonium at the light metal beryllium" the painted source vessel `y12p-po-be-source-v1.png` (new) at the left, cutaway labels "polonium (α source)" and "beryllium"; amber α dots cross from one disc to the other. Name tags in words only "Bothe and Becker, 1930". On "passed through several centimetres of lead" the painted lead bricks `y12p-lead-bricks-v1.png` (new) in the path; a grey dashed stream "radiation?" passes through them, tag "several cm of lead". On "didn't bend it" blue field lines and slate crosses appear across the stream, which stays straight. On "charge" tag "no deflection → no charge". On "was" the stream relabels "γ? (gamma photons)", amber wave-packet icons.

### 3. the paraffin protons
> In nineteen thirty two, Irène Curie and Frédéric Joliot put paraffin wax in its path. Paraffin is full of hydrogen, and the radiation knocked protons out of it. The fastest moved at about three point three times ten to the seven metres per second, a kinetic energy of about five point seven million electron **volts**. Protons are charged, so they're easy to detect. The question was what could hit them that **hard**.

Visual: the painted paraffin wax `y12p-paraffin-wax-v1.png` (new) after the lead; name tags in words only "Curie and Joliot, 1932". On "full of hydrogen" a zoom inset of the wax: coded chain molecules with many "H" atoms, tag "hydrogen nuclei = protons". On "knocked protons out of it" red "p" discs leave the wax with teal speed arrows; the painted ionisation chamber `y12p-ionisation-chamber-v1.png` (new) beyond the wax, its coded meter flicking. On "three point three times ten to the seven metres per second" tag "v_p(max) = 3.3 × 10⁷ m s⁻¹". On "volts" `AlignedAlgebra` "K = ½mv² = ½(1.673 × 10⁻²⁷)(3.3 × 10⁷)² = 9.1 × 10⁻¹³ J = 5.7 MeV" with an orange energy bar "5.7 MeV" on a proton. On "hard" a "?" over the grey stream.

### 4. the trouble with photons
> If the radiation were gamma photons, here's the trouble. A photon has no mass, and when something massless bounces off something heavy, it hands over only a small share of its energy, like a ping-pong ball bouncing off a bowling ball. To give a proton five point seven million electron volts, a photon would need about fifty five **million**. An alpha hitting beryllium could release at most about **sixteen**.

Visual: board change to the energy-transfer inset. On "A photon has no mass" an amber packet "γ, no mass" approaches a large red "p" disc. On "only a small share of its energy" the packet bounces back carrying most of its amber energy bar; the proton moves off with a thin orange slice, tag "massless on heavy: small share". On "like a ping-pong ball bouncing off a bowling ball" a small white ball rebounds off a large dark ball that barely moves (coded spheres only). On "million" a bar comparison: a tall amber bar "photon needed ≈ 55 MeV" beside the proton's orange "5.7 MeV", tag "photon bouncing straight back". On "sixteen" a slate line across the amber bar at "≈ 16 MeV: most the α + Be reaction can release"; the part of the amber bar above it turns hatched red, tag "not available".

### 5. nitrogen makes it worse
> It got worse. James Chadwick, at Cambridge, aimed the radiation at nitrogen gas, and measured how fast the nitrogen nuclei recoiled. To explain those recoils, the photons would need roughly a hundred million electron volts. One beam can't be fifty five million for protons and a hundred million for nitrogen. The photon idea didn't fit the **energy**, and it didn't fit **itself**.

Visual: the beam line returns with the paraffin swapped for a coded gas cell "nitrogen gas"; name tag in words only "Chadwick, Cambridge, 1932". On "how fast the nitrogen nuclei recoiled" larger red "N" discs leave with short teal arrows, tag "v_N(max) = 4.7 × 10⁶ m s⁻¹". On "roughly a hundred million electron volts" the contradiction board: two amber bars for the same beam, "from protons: ≈ 55 MeV" and "from nitrogen: ≈ 100 MeV", with a red "≠". On "energy" the 16 MeV line from scene 4 crosses both bars, tag "too big for the reaction". On "itself" the "≠" pulses, tag "one beam, two answers"; the "γ?" label on the stream is crossed.

### 6. Chadwick's neutron
> Chadwick proposed a different answer. The radiation is a stream of uncharged particles, each with about the mass of a proton. He called them neutrons. Now picture a head-on elastic collision between equal masses, from Year 11. The moving one stops, and the target moves off with all the speed, like one billiard ball hitting another. So a neutron with five point seven million electron volts can hand all of it to a **proton**.

Visual: board change: the stream relabels "n (neutrons): no charge, mass ≈ m_p". On "uncharged particles" grey discs "n" replace the dashed stream. On "about the mass of a proton" a balance-bar inset: "n" and "p" level. On "a head-on elastic collision between equal masses" the equal-mass inset: a grey "n" strikes a red "p" at rest. On "The moving one stops" the "n" stops dead; on "all the speed" the "p" leaves with the full teal arrow, tag "equal masses, head-on: full hand-over"; on "like one billiard ball hitting another" two coded billiard balls repeat the motion (no cue, no table edge figures). On "proton" an orange bar "n: 5.7 MeV" transfers wholly to "p: 5.7 MeV"; the 16 MeV line sits well above it, tag "possible".

### 7. why it got through lead
> Being uncharged also explains the lead. A charged particle tugs on electrons all along its path, knocking them off atoms and losing energy fast. A neutron feels no electric force, so it slips through until it strikes a **nucleus**. And the reaction balances. Helium four plus beryllium nine gives carbon twelve plus one **neutron**.

Visual: two tracks through a coded slab of lead atoms. On "A charged particle tugs on electrons" a red "p" track leaves a trail of ionised atoms ("+" and freed navy dots) and stops early, tag "charged: ionises, stops quickly". On "nucleus" a grey "n" track passes straight through the slab, ending at a direct hit on one small nucleus, tag "neutral: no ionisation, penetrates". On "the reaction balances" the reaction writes: "⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n". On "neutron" checks write under it: "A: 4 + 9 = 12 + 1 ✓", "Z: 2 + 4 = 6 + 0 ✓".

### 8. weighing the neutron: the recoil rule
> To weigh the neutron, Chadwick used both targets. For a head-on elastic collision, conservation of momentum and kinetic energy give the target's recoil speed. It's two times the neutron's mass, over the neutron's mass plus the target's mass, times the neutron's **speed**. Check it. If the target's mass equals the neutron's, the recoil speed is the neutron's own speed. If the target is very heavy, it hardly **moves**.

Visual: board change to the working layout. Task strip: "Find the neutron's mass m_n". On "conservation of momentum and kinetic energy" chips "momentum conserved" and "kinetic energy conserved (elastic)" (Year 11). On "speed" the equation strip writes "v_recoil = 2m_n v / (m_n + m)", tag "from both conservation laws; exams supply this"; labels "v: neutron's speed (unknown)", "m: target's mass". On "the recoil speed is the neutron's own speed" check 1: "m = m_n → v_recoil = 2m_n v / 2m_n = v ✓" with the billiard inset small. On "moves" check 2: "m ≫ m_n → v_recoil ≈ 0 ✓" with a grey "n" bouncing off a large disc.

### 9. two targets cancel the unknown speed
> But the neutron's speed is unknown too. So write the rule once for protons, and once for nitrogen nuclei, about fourteen times heavier, and divide. The unknown speed cancels. The protons recoiled at three point three times ten to the seven metres per second, and the nitrogen nuclei at four point seven times ten to the **six**. So seven point zero two equals m n plus fourteen m p, over m n plus m **p**.

Visual: the recoil rule stays at the top. Givens grouped: "v_p = 3.3 × 10⁷ m s⁻¹ (paraffin)", "v_N = 4.7 × 10⁶ m s⁻¹ (nitrogen)", "m_N ≈ 14 m_p". On "write the rule once for protons" "v_p = 2m_n v / (m_n + m_p)"; on "once for nitrogen nuclei" "v_N = 2m_n v / (m_n + 14m_p)". On "divide" a fraction bar joins them; on "The unknown speed cancels" "2m_n v" strikes out top and bottom. On "six" "v_p / v_N = (m_n + 14m_p) / (m_n + m_p)". On "p" "3.3 × 10⁷ / 4.7 × 10⁶ = 7.02 = (m_n + 14m_p) / (m_n + m_p)".

### 10. solve for the mass
> Cross-multiply and solve, and the neutron's mass is about one point one six proton **masses**. Chadwick's own estimate was close, within his measurement errors. Today's data-sheet value is one point six seven five times ten to the minus twenty seven kilograms, just a tenth of a percent heavier than a **proton**.

Visual: stage 9's last line stays. On "masses" `AlignedAlgebra` "7.02 m_n + 7.02 m_p = m_n + 14 m_p" then "6.02 m_n = 6.98 m_p" then "m_n = 1.16 m_p" (boxed); small chip "same as m_n = (v_N m_N − v_p m_p)/(v_p − v_N)". On "Chadwick's own estimate was close" tag "rough method: ± about 10%". On "proton" "data sheet: m_n = 1.675 × 10⁻²⁷ kg, m_p = 1.673 × 10⁻²⁷ kg → m_n = 1.001 m_p".

### 11. the nucleus adds up
> Now the nucleus adds up. Gold has seventy nine protons and a hundred and eighteen neutrons, so its mass number is one hundred and ninety **seven**. The atomic number counts protons, and the mass number counts protons plus **neutrons**.

Visual: board change back to the gold nucleus from scene 1. On "a hundred and eighteen neutrons" grey "n" discs fill the dashed gap; the mass bar completes "79 m_p + 118 m_n ≈ 197 m_p", tag "≈ (masses equal to about 0.1%)". On "seven" the symbol "¹⁹⁷₇₉Au" writes. On "neutrons" labels "Z = 79: protons", "A = Z + N = 197", "N = 118: neutrons".

### 12. a way to remember
> Here's a way to remember the key argument. A photon hitting a proton is a ping-pong ball hitting a bowling ball. A neutron hitting a proton is one billiard ball hitting **another**.

Visual: the two insets side by side, replaying: ping-pong on bowling ball (tag "photon: small share") and billiard on billiard (tag "neutron: full hand-over"). On "another" the line writes large: "Photon on proton: ping-pong on bowling ball. Neutron on proton: billiard on billiard." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Bombarding beryllium with alpha particles produces a penetrating radiation that is not deflected by electric or magnetic fields, and that ejects high-speed protons from paraffin wax. Explain why Chadwick concluded that this radiation was made of neutral particles with a mass similar to a proton's, rather than gamma rays. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "When beryllium is bombarded with alpha particles, it emits a penetrating radiation that is not deflected by electric or magnetic fields and that ejects high-speed protons from paraffin wax. Explain why Chadwick concluded that this radiation consisted of neutral particles with a mass similar to that of a proton, rather than gamma rays. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> No deflection means no charge. Gamma photons would need about fifty five million electron volts to give the protons their energy, more than the reaction can release, and nitrogen recoils needed a different value. A neutral particle with a proton's mass can hand a proton all its energy head-on, so modest energies **work**. The slip is saying gamma rays are charged. Both ideas were **uncharged**.

Visual: card shrinks to the top; "not deflected", "high-speed protons" and "rather than gamma rays" underline. Lines write in turn: "no deflection → uncharged (both hypotheses)"; "γ: massless → small share of energy → ≈ 55 MeV needed > ≈ 16 MeV available; nitrogen gives a different value"; on "work" "neutral, mass ≈ m_p → equal-mass head-on collision → full transfer (momentum and energy conserved)". On "uncharged" a chip "it can't be gamma, because gamma rays are charged" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why Chadwick needed recoil measurements from two different targets to determine the neutron's mass. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why Chadwick needed recoil speeds from two different targets to determine the mass of the neutron. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Each recoil speed depends on two unknowns, the neutron's mass and its speed. One target gives one equation, which can't fix both. A second target gives a second equation, and dividing them cancels the speed, leaving the **mass**. The slip is thinking one target is enough. One equation can't fix two **unknowns**.

Visual: card shrinks to the top; "two different targets" underlines. On "mass" "unknowns: m_n and v → two equations (proton, nitrogen) → divide: v cancels → m_n". On "unknowns" a chip "one target is enough" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So the atom is complete, a tiny nucleus of protons and neutrons, with electrons outside it. But how do those electrons stay there? In Rutherford's picture, they orbit the nucleus, like planets around the Sun. An orbiting electron keeps changing direction, so it's always accelerating, and you know what accelerating charges do. So why couldn't Rutherford's model explain stable atoms and line **spectra**?

Visual: board clears (camera change). On "a tiny nucleus of protons and neutrons" a small nucleus of red "p" and grey "n" discs (enlarged, tag "not to scale"). On "electrons outside it" one navy electron appears at a distance. On "they orbit the nucleus" a dashed circular orbit draws and the electron moves round it (held in motion). On "always accelerating" a teal velocity arrow turns with it and a rose arrow "a" points to the centre, tag "changing direction = accelerating". On "you know what accelerating charges do" a Module 7 chip "accelerating charges radiate EM waves" appears with a faint rose wavelet leaving the electron and a "?". On "spectra" chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Puzzle: nuclei are heavier than their protons (gold: charge of 79 protons, mass of about 197).
2. Beryllium bombarded by alpha particles emits a penetrating radiation not deflected by fields: uncharged (Bothe and Becker, 1930). It ejects protons from paraffin at up to 3.3 × 10⁷ m s⁻¹, about 5.7 MeV (Curie and Joliot, 1932).
3. Gamma rays fail: a massless photon gives a heavy proton only a small share of its energy, so about 55 MeV would be needed (more than the reaction releases), and nitrogen recoils need a different value.
4. Chadwick (1932): neutral particles with mass close to the proton's, neutrons. Equal masses, head-on: full energy transfer. ⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n.
5. Two targets (paraffin and nitrogen) give two recoil speeds; dividing cancels the unknown neutron speed: m_n ≈ 1.16 m_p (data sheet 1.675 × 10⁻²⁷ kg). A = Z + N.

Memory aid (large, on the notes screen): *Photon on proton: ping-pong on bowling ball. Neutron on proton: billiard on billiard.*

## Teaching checks

- **Does it explain causes?** Why "uncharged" (no deflection) (2); why gamma fails on energy (massless on heavy, small share) and on consistency (two targets, two answers) (4, 5); why the neutron works (equal masses) (6); why it penetrates lead (no ionisation) (7); why two targets are needed (two unknowns) (9, 16).
- **Misconceptions addressed:** gamma rays are charged (14 crossed); one target is enough (16 crossed); a neutral particle passes through everything (7: it stops when it hits a nucleus); neutron mass exactly equals the proton's (10: 0.1% heavier).
- **One idea at a time:** the radiation (2), the protons (3), the photon problem (4), the contradiction (5), the neutron (6), penetration (7), the recoil rule (8), the ratio (9), the solve (10), the nucleus (11).
- **Video makes it easier:** the thin orange slice from a photon versus the full bar from a neutron (4, 6); the two photon bars that should match (5); the "2m_n v" striking out (9); the gold gap filling (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 22 s.
- **Avoided double teaching:** photons and eV (Module 7), elastic collisions and nuclear notation (Year 11), proton and nucleus (v08) recalled in a clause.
- **Syllabus coverage:** `P8-IQ2-02` third example: Chadwick's discovery of the neutron (2 to 11), with "assess" through the gamma-versus-neutron comparison and "model" through the coded collisions and the recoil model.
- **Out of scope by design:** quarks (later in Module 8); the full recoil derivation (author note d; site extension); Chadwick's reaction-energy mass method (site note 1).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "When beryllium is bombarded with alpha particles, it emits a penetrating radiation that is not deflected by electric or magnetic fields and that ejects high-speed protons from paraffin wax. Explain why Chadwick concluded that this radiation consisted of neutral particles with a mass similar to that of a proton, rather than gamma rays."
Model answer: The radiation is not deflected by electric or magnetic fields, so it is uncharged (true of both gamma rays and neutrons). A massless gamma photon can transfer only a small fraction of its energy to a much heavier proton, so the observed proton energies (about 5.7 MeV) would require photons of about 55 MeV, more energy than the alpha-beryllium reaction can supply, and recoils from a nitrogen target required a different photon energy, so the gamma hypothesis was inconsistent. A neutral particle with a mass close to the proton's can transfer all its kinetic energy to a proton in a head-on elastic collision (conservation of momentum and kinetic energy), explaining the proton speeds with reasonable energies. Classic mistake (crossed): "gamma rays are charged, so it could not be gamma".

**Attempt 2 (scene 15; original wording, HSC style, 2 marks).** "Explain why Chadwick needed recoil speeds from two different targets to determine the mass of the neutron."
Model answer: The recoil speed of a target depends on two unknowns, the neutron's mass and the neutron's speed, so a single target gives one equation that cannot determine both. Measuring the recoil speeds of a second target (nitrogen as well as hydrogen) gives a second equation; dividing the two eliminates the neutron's speed and allows the neutron's mass to be calculated (about 1.16 m_p from his data). Classic mistake (crossed): "one target is enough".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | m_p = 1.673 × 10⁻²⁷ kg; m_n = 1.675 × 10⁻²⁷ kg; e = 1.602 × 10⁻¹⁹ C; c = 3.00 × 10⁸ m s⁻¹ | 3, 10 |
| Mass puzzle | gold: Z = 79, ≈ 197 m_p, gap ≈ 118; helium: Z = 2, ≈ 4 m_p | 1, 11 |
| Paraffin protons (site) | v_p = 3.3 × 10⁷ m s⁻¹; K = 9.11 × 10⁻¹³ J = 5.69 MeV ≈ 5.7 MeV | 3, 4, 6 |
| Photon needed (protons) | m_p c² = 940 MeV; T = 2E²/(mc² + 2E) = 5.69 MeV → E = 54.6 MeV ≈ 55 MeV | 4, 5, 14 |
| Nitrogen recoils (site) | v_N = 4.7 × 10⁶ m s⁻¹, m_N = 14 m_p: K = 2.59 × 10⁻¹³ J = 1.61 MeV; photon needed ≈ 104 MeV ("roughly a hundred million"); Chadwick's figure ≈ 90 MeV (1.2 MeV recoil) | 5 |
| Energy available | ⁹Be(α,γ)¹³C: Q = 10.65 MeV; + 5.30 MeV alpha: ≈ 15.9 MeV ("at most about sixteen"); ⁹Be(α,n)¹²C: Q = 5.70 MeV | 4, 5 |
| Reaction balance | A: 4 + 9 = 12 + 1; Z: 2 + 4 = 6 + 0 | 7 |
| Two-target solve | v_p/v_N = 7.02; 7.02 m_n + 7.02 m_p = m_n + 14 m_p; 6.02 m_n = 6.98 m_p; m_n = 1.159 ≈ 1.16 m_p | 9, 10 |
| Modern value | m_n/m_p = 1.675/1.673 = 1.0012 ("a tenth of a percent heavier") | 10 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 0.5 × 1.673e-27 × (3.3e7)² = 9.109e-13 J; / 1.602e-13 = 5.686 MeV.
- m_p c² = 1.673e-27 × 9e16 / 1.602e-13 = 939.9 MeV; solve 2E² − 2(5.686)E − 5.686 × 939.9 = 0: E = 54.6 MeV.
- 0.5 × 14 × 1.673e-27 × (4.7e6)² = 2.587e-13 J = 1.615 MeV; with 14 × 939.9 MeV: E = 103.9 MeV; with T = 1.2 MeV: E = 89.5 MeV.
- Atomic masses (u): ⁹Be 9.012182, ⁴He 4.002603, ¹³C 13.003355, ¹²C 12.000000, n 1.008665; Q(α,γ) = 0.011430 u × 931.5 = 10.65 MeV; Q(α,n) = 0.006120 u × 931.5 = 5.70 MeV.
- 3.3e7 / 4.7e6 = 7.0213; (4.7e6 × 14 − 3.3e7) / (3.3e7 − 4.7e6) = 1.1590.
- 1.675 / 1.673 = 1.0012.

## Memory aid check

- **"A photon on a proton is a ping-pong ball on a bowling ball. A neutron on a proton is billiard ball on billiard ball."** Meaning, as said in scene 12: a massless photon bouncing off a heavy proton gives it only a small share of its energy; a neutron of almost equal mass hitting a proton head-on can give it all its energy. Assumptions checked: the photon comparison holds while the photon's energy is much less than the proton's rest energy (55 MeV against 940 MeV; ratio of transfer 5.7/54.6 ≈ 10%); "billiard on billiard" assumes a head-on elastic collision (author note e) and near-equal masses (1.0012); glancing collisions give less, which is why maximum speeds are used. It helps a new case: A1 directly. Introduced after the explanation (4 to 6).
- **Considered, not used:** "neutron: neutral nucleon" (a definition, not an aid to the argument).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,037 characters**, 18 scenes. Characters per scene (1 to 18): 505, 401, 410, 402, 373, 423, 324, 412, 397, 305, 227, 177, 355, 389, 139, 305, 401, 75. At 13.3 characters per second the speech is about 454 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 81 s of holds and countdowns): **about 535 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 1's proton-electron sentence (keep the crossed tag); scene 7's lead explanation to one sentence; scene 10's "Chadwick's own estimate" sentence.

## Opening frame

v08's final frame (designed in this wave, `phys-y12-m8-v08.md`): paper background; heading "Why did scattering require a tiny dense nucleus?"; at the centre a large coded gold nucleus (red disc, tag "enlarged") labelled "+79e", partly filled with small red "p" discs; tag "proton: charge +e, mass m_p (Rutherford, 1920)"; a charge bar "79 protons → +79e ✓" and a mass bar "79 protons → 79 m_p" filled red, the rest to "197 m_p" a grey dashed gap tagged "≈ 118 m_p missing" and "charge 0?"; chip "Next: what evidence established an uncharged massive particle in the nucleus?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "What evidence established an uncharged massive particle in the nucleus?"; at the centre a small nucleus of red "p" and grey "n" discs (tag "not to scale"); one navy electron moving on a dashed circular orbit around it (held in motion), with a teal velocity arrow turning with it and a rose arrow "a" pointing to the centre, tag "changing direction = accelerating"; a Module 7 chip "accelerating charges radiate EM waves" with a faint rose wavelet leaving the electron and a "?"; chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". v10 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v09` (route phys-y12-m8-v09). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v09` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v09` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, beryllium-radiation, paraffin-protons, photon-trouble, nitrogen-contradiction, neutron-proposal, through-lead, recoil-rule, two-targets, solve-mass, nucleus-adds-up, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: beam line, energy-transfer insets, contradiction board, ionisation tracks, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the beam line; 2 to 3 camera continue; 3 to 4 clear change to the inset; 4 to 5 camera change back to the beam line; 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change to working; 8 to 9 to 10 camera continue; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v09-learning-review.md`, `science_check` = `checks/p-y12-m8-v09-physics-check.md`.

## Assets

Have: none reused as plates.
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a sealed container with a glass window; Chadwick's polonium-beryllium source sat inside a small evacuated vessel, and reusing a "gamma source" plate would suggest the gamma answer the video rejects); `y12p-alpha-scattering-chamber-v1.png` (v08; a different apparatus).

Need (new plates):
1. `y12p-po-be-source-v1.png`: 2, 5.
2. `y12p-lead-bricks-v1.png`: 2.
3. `y12p-paraffin-wax-v1.png`: 3.
4. `y12p-ionisation-chamber-v1.png`: 3, 5.

Coded: alpha dots, the radiation stream, photons, neutrons, protons, nitrogen nuclei, field lines and crosses, wax molecules, energy bars, collision balls, lead atoms and tracks, the gas cell, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v09 build brief):
1. **Beam line.** Plates placed left to right with a coded stream whose label and icon change (radiation?, γ?, n) and particles leaving targets with teal speed arrows.
2. **Energy-transfer inset.** Collision of two coded discs with set mass ratio showing the share of kinetic energy passed on (orange bars).

## Codex asset brief

All new plates painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges, no text, no labels, no glow, no radiation symbols), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, object centred with even margins, soft shadow inside the alpha only. No people, no hands, no faces.

1. **`y12p-po-be-source-v1.png`** (new). A small evacuated brass vessel, side view and cut away along its length: a short horizontal brass cylinder with a pump stub on top; inside, at the left, a small silver disc (the polonium source) facing right, and a few centimetres to its right a slightly larger dull grey disc (beryllium) facing it; a thin flat window at the right end. Sidecar anchors: centres of both discs; right window centre.
2. **`y12p-lead-bricks-v1.png`** (new). A short stack of three dull grey lead bricks, side view, so a horizontal beam could pass through their middle brick; no labels. Sidecar anchors: the middle brick's left and right face centres.
3. **`y12p-paraffin-wax-v1.png`** (new). A rectangular slab of translucent white paraffin wax about 2 cm thick, in a simple metal clamp on a small stand, side view, slab face perpendicular to a horizontal beam. Sidecar anchors: centres of the slab's left and right faces.
4. **`y12p-ionisation-chamber-v1.png`** (new). A small cylindrical ionisation chamber on a stand, side view: a short metal cylinder with a thin circular window facing left, an insulated central electrode terminal on the right, and a cable running to a small grey amplifier box with one analogue meter (blank face, no numbers). Deliver the meter needle as a separate layer `y12p-ionisation-chamber-needle-v1.png` with its pivot marked. Sidecar anchors: window centre; needle pivot.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: no deflection implies no charge; the proton kinetic energy; the photon energy-transfer rule and the 55 MeV figure (author note b); the energy available (author note c); the nitrogen figure (open decision 3); full transfer between equal masses; why neutral particles penetrate; the reaction balance; the recoil rule and its limiting cases; the two-target algebra; m_n/m_p.
3. Confirm the history: Bothe and Becker 1930; Curie and Joliot 1932; Chadwick 1932 at Cambridge; Rutherford naming the proton by 1920 (from v08); site note 1.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (billiard and ping-pong insets are balls only); scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 and 2 under Decisions to root.

## YouTube metadata (draft)

Title: Chadwick and the Neutron: Why the Beryllium Radiation Wasn't Gamma Rays | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa.html

Nuclei were far heavier than their protons. Follow the beryllium radiation from Bothe and Becker to Curie and Joliot's paraffin protons, see why gamma photons could not explain the proton energies, and how Chadwick's neutron, a neutral particle with the proton's mass, explained everything. Then use two recoil speeds to find the neutron's mass. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate, assess and model the experimental evidence supporting the nuclear model of the atom, including:
- the Geiger-Marsden experiment
- Rutherford’s atomic model
- Chadwick’s discovery of the neutron (ACSPH026)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: Rutherford scattering and the nucleus. Next: why Rutherford's model could not explain stable atoms and line spectra.

#HSCPhysics #Physics #Neutron #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v08; check that the photon energy-transfer idea is understood without a formula; that the contradiction between the two photon energies lands; that the ratio algebra is followable at speed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The thin orange slice versus the full bar, the two mismatched photon bars and the cancelling speed carry the explanation; judge them at playback speed in the voiced preview.
