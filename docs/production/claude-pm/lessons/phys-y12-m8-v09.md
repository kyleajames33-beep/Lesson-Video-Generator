# Year 12 Physics M8 V09: Chadwick's discovery of the neutron. What evidence established an uncharged massive particle in the nucleus? (design)

Status: Revision 2 (7 Nov 2026): brief 192 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,159 characters, 18 scenes, about 529 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v08's final frame.

Scope: ninth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that atoms are made up of protons, neutrons and electrons?". Templates as `phys-y12-m7-v10.md`; `math-a12-d10.md` for the calculation layout; `bio-y11-fa1-v05.md` for plates. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through `work/brief168/module8-lesson11.sa.txt`; also read for v07 and v08): lesson 11, especially vocabulary (neutron, A = Z + N), Learning Intentions ("Why beryllium radiation had to be a neutral particle, not a gamma ray", "Use recoil-speed data to find the neutron's mass"), "find-the-neutron" (the mass puzzle, proton-electron pairs, Bothe and Becker 1930, Curie and Joliot 1932, Chadwick's reinterpretation and reaction equation, the recoil formula, the two-target formula, 3.3 × 10⁷ and 4.7 × 10⁶ m/s, 1.16 m_p, Figure 6, formula box, Stop and check, fill-in), and the "beyond the syllabus" note that recoil calculations are extension unless the exam supplies the relationship: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson11.sa.html`, SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v09`, section `find-the-neutron`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain Chadwick radiation and recoil evidence, distinguish neutron from gamma hypotheses using momentum/energy. Stop before quark structure." Next: "phys-y12-m8-v10: Why could Rutherford model not explain stable atoms and line spectra?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the source vessel, the lead bricks, the paraffin wax and the ionisation chamber with its needle layer are painted plates (delivered by root decision 17, inspected 7 Nov), with the gold ring (v06) as the opening anchor, scaled uniformly, never stretched; nuclei, particles, photons, energy bars, collision balls and calculation strips are coded, HSC style; every number recalculated in Python with m_p = 1.673 × 10⁻²⁷ kg, m_n = 1.675 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C and c = 3.00 × 10⁸ m s⁻¹; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v08 (the nucleus, the proton, the gold mass puzzle), Module 7 v10 (photons, the electron volt), Year 11 (nuclear notation and balancing; momentum and elastic collisions; a charged particle ionises matter along its path).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ2-02`), quoted from the route JSON `syllabusActions`:

- `P8-IQ2-02`: "investigate, assess and model the experimental evidence supporting the nuclear model of the atom, including:"
  - "the Geiger-Marsden experiment" (v08)
  - "Rutherford’s atomic model" (v08)
  - "Chadwick’s discovery of the neutron (ACSPH026)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v08's final frame (gold nucleus: charge of 79 protons, mass of about 197, gap "≈ 118 m_p missing", "charge 0?"). Teaches: the mass puzzle (gold, helium) and the rejected proton-electron idea (one clause); Bothe and Becker's beryllium radiation (penetrating, undeflected, so uncharged; assumed gamma); Curie and Joliot's paraffin protons, and Chadwick's refined measurement of the fastest (3.3 × 10⁷ m s⁻¹, 5.7 MeV); the gamma problem (a massless photon hands a heavy proton only a small share: about 55 MeV needed, more than the reaction's roughly 16 MeV; Chadwick's own estimate for the fastest nitrogen recoils was about 90 MeV, a contradiction for one beam); Chadwick's neutron (uncharged, proton-like mass; an equal-mass head-on collision hands over all the energy); why a neutral particle penetrates lead; the reaction ⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n; the recoil relation (supplied, checked by limiting cases); the two-target ratio using the maximum (head-on) recoil speeds and m_n ≈ 1.16 m_p (rough: the nitrogen speed was uncertain by about 10%); the data-sheet value; the completed nucleus (gold: 79 protons, 118 neutrons, A = 197). Stops before quark structure (later in Module 8) and before the atom's electron problem (v10).

## Decisions

- **Learner question (route wording kept).** "What evidence established an uncharged massive particle in the nucleus?" The answer, built in order: the radiation was uncharged (no deflection) (2); it hit protons very hard (3); photons could not do that within the energy available, and the photon energies from two targets disagreed (4, 5); a neutral particle with a proton's mass does it easily (6) and explains the penetration (7); two recoil speeds fix its mass at about a proton's (8 to 10).
- **Hook (site "find-the-neutron" opening, re-staged from v08's final frame).** The gold gap plus helium (charge 2, mass 4); the proton-electron pairing idea in one clause with "clashed with other measurements" (author note a); then the detection problem: a neutral particle does not bend and barely leaves a trail.
- **Gamma versus neutron (route stop: "using momentum/energy").** Energy transfer is the core argument. For a photon scattering straight back off a proton at rest, the largest kinetic energy it can give is T = 2E²/(mc² + 2E) (author note b); for T = 5.69 MeV, E = 54.6 MeV ("about fifty five million electron volts"). Said as "a massless photon can only hand a heavy proton a small share of its energy" with the ping-pong-on-bowling-ball comparison. For nitrogen, Revision 2 follows root decision 4 and brief 192: the narration uses Chadwick's own published estimate, "about ninety million" (from his measured recoil of about 1.2 MeV); the 104 MeV reconstruction from the later 4.7 × 10⁶ m s⁻¹ speed stays in author note b. The reaction's energy limit: Q for ⁹Be(α,γ)¹³C is 10.6 MeV, plus at most 5.3 MeV from the polonium alpha: about 16 MeV ("at most about sixteen million"; Chadwick's own estimate was about 14 MeV) (author note c). The neutron side uses Year 11 elastic collisions: equal masses, head-on, full transfer.
- **Penetration (site "penetrated several centimetres of lead").** The site attributes the gamma assumption to penetration; scene 7 explains why a neutral massive particle also penetrates (no electric force on atomic electrons, so no ionisation losses). This is causal, not new content.
- **Recoil relation (site formula box, "extension unless the exam supplies").** Shown as supplied (tag "from momentum and kinetic-energy conservation; exams supply this"), then checked with the two limiting cases (equal masses: v_recoil = v; very heavy target: v_recoil ≈ 0). The full derivation is in author note d, not learner copy, following the site's scope note. Open decision 2.
- **Maximum recoil speeds (Revision 2, brief 192 finding 2).** Both target speeds are the fastest recoils, from head-on hits by the fastest neutrons in the same beam, so both refer to the same incident speed; the narration says "fastest" in scenes 3, 5 and 9, and the givens carry "max (head-on)".
- **Two-target method (site formula and numbers).** The site's rearranged formula m_n = (v_N m_N − v_p m_p)/(v_p − v_N) is reached through the ratio form, which shows the cancelling of the unknown speed: v_p/v_N = (m_n + m_N)/(m_n + m_p) = 7.02, then 7.02(m_n + m_p) = m_n + 14m_p, so m_n = 6.98/6.02 m_p = 1.16 m_p. Site numbers unchanged (3.3 × 10⁷ and 4.7 × 10⁶ m s⁻¹, m_N = 14 m_p). The site's direct formula appears as a small "same thing" chip.
- **Uncertainty (Revision 2, brief 192 finding 4).** Chadwick gave about 10% uncertainty in the nitrogen recoil speed, not in the mass. Propagated through the ratio, 4.7 × 10⁶ ± 10% m s⁻¹ gives m_n between about 0.91 and 1.42 m_p (Python), so the tag reads "nitrogen speed ± about 10%: m_n about 0.9 to 1.4 m_p"; the conclusion (close to a proton's mass) stands.
- **Modern value (site and data sheet).** m_n = 1.675 × 10⁻²⁷ kg = 1.0012 m_p ("about a tenth of a percent heavier than a proton").
- **Completed nucleus (site "A = Z + N").** Gold-197: Z = 79, N = 118, A = 197. Atomic number and mass number defined in one sentence (Year 11 notation recalled).
- **Memory aid (scene 12): "A photon on a proton is a ping-pong ball on a bowling ball. A neutron on a proton is billiard ball on billiard ball."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks, explain): why neutral particles of proton-like mass rather than gamma rays. Crossed: "gamma rays are charged" (they are not; both hypotheses were uncharged). A2 (2 marks, explain): why two targets. Crossed: "one target is enough".
- **Handoff (route next).** Scene 17: the completed atom with an electron on a circular orbit, its velocity arrow turning and a rose "accelerating" tag, the Module 7 chip "accelerating charges radiate", and "?" See "Final frame".
- **Colour key (Module 7 and 8 keys):** photons amber wave packets "γ"; neutrons grey discs "n" (no charge sign); protons red discs "p"; nitrogen nuclei larger red discs "N"; alpha particles amber circles "α"; electrons navy dots; energy bars orange (kinetic energy); recoil speeds teal arrows.
- **Colour key (Revision 2, fixed for every scene).** As above. Target mass purple (the slider and mass labels); field lines blue and slate crosses (no deflection); the energy-available line slate; framed answers in a dark-ink box; crossed chips and their hand tags red. Gamma packets are amber as the photon role colour (gamma rays are not visible light). Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 3, 9 and 10 stages and feedback rows 52 px; framed answers 56 px); live readouts (the target-mass slider's mass, recoil-speed fraction and energy fraction; the ionisation meter) about 52 px; apparatus labels, bars and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v08's final frame (the gold nucleus with its missing mass) is the anchor, with the painted gold ring `y12p-gold-ring-v1.png` (v06) beside it in scene 1 as "gold". The beam line of painted plates carries 2, 3 and 5: the Po-Be source `y12p-po-be-source-v1.png` (1920 × 819, inspected: a cutaway brass vessel, small polonium disc at the left, larger grey beryllium disc, window at the right, pump stub), the lead bricks `y12p-lead-bricks-v1.png` (2172 × 724: three stacked grey bricks), the paraffin wax `y12p-paraffin-wax-v1.png` (1536 × 1024: a white slab in a clamp on a stand) and the ionisation chamber `y12p-ionisation-chamber-v1.png` with its needle layer (1920 × 819: cylinder with a window at the left, cable, amplifier box, arched meter). All delivered by root decision 17; register the needle by its actual pivot (root decision 18).
- **Simulation (Revision 2).** The core live control is the target-mass slider in scene 8: a neutron strikes a target head-on while a purple slider sets the target's mass, and live readouts show "target mass", "recoil speed ÷ neutron speed" = 2m_n/(m_n + m) and "share of energy handed over" = 4m_n m/(m_n + m)² (Python, m_n = 1: m = 1 → 1.00 and 1.00; 4 → 0.40 and 0.64; 14 → 0.13 and 0.25; 197 → 0.010 and 0.020). The ionisation meter (3, 5) flicks live, and scene 4's share bars are the other live element.
- **Board stages (Revision 2).** Every scene has its own stage: the gold nucleus and ring (1), the beam line (2, 3, about 64 s), the energy-transfer inset (4), the beam line with nitrogen (5), the neutron stage (6, with 7 about 56 s), the live target-mass slider (8), the two-target ratio (9), full-width solve (10), the completed nucleus (11). No set-up runs past about 65 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the painted beam line, Po-Be source, lead bricks and paraffin, with a grey dashed "radiation?" stream and protons leaving the wax; A2: the paraffin slab and a coded nitrogen gas cell side by side, each with recoil arrows). On the answer side the card shrinks to the top, a givens strip lists the data (A1: "not deflected; penetrating; fast protons from paraffin"; A2: "two targets; unknowns m_n and v"), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 11: vocabulary (neutron, A = Z + N) (6, 11); "find-the-neutron" (mass puzzle, proton-electron pairs, Bothe and Becker, Curie and Joliot, Chadwick's proposal, reaction, recoil formula, two-target method, speeds, 1.16 m_p, 1.675 × 10⁻²⁷ kg, Figure 6) (1 to 11); Stop and check questions (A1, A2); "Learn ... why two different recoil speeds were needed" (A2). Not used: Nobel Prize date (not needed); nuclear spin details (author note a).
- **Site notes (quoted from site lesson 11, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Precision ("find-the-neutron"): "Using Chadwick's measured recoil speeds ... ≈ 1.16 m_p ... this confirmed the existence of the neutron." The two-target recoil estimate was rough (Chadwick quoted 1.15 with an error of up to about 10%); his better mass came from nuclear reaction energies (about 1.005 to 1.008 u). Suggest adding "Chadwick's recoil estimate was rough; a reaction-energy method gave a value much closer to the proton's." (Science check to confirm the figures.)
  2. Precision ("find-the-neutron"): "If the radiation really were gamma-ray photons, each photon would need an implausibly large energy". Correct, but no number is given, so students cannot judge "implausible". Suggest adding "about 50 MeV for the protons (Chadwick's figure was about 55 MeV), and a different, larger value for nitrogen recoils".
  3. Checked and correct: Bothe and Becker 1930; Curie and Joliot 1932; the reaction equation (A: 4 + 9 = 12 + 1; Z: 2 + 4 = 6 + 0); the recoil formula and the rearranged mass formula (algebra checked); 1.16 m_p from the site's speeds (1.159); m_n = 1.675 × 10⁻²⁷ kg ≈ 1.001 m_p.
- **Cause chain taught, in order:** (1) nuclei are heavier than their protons account for (1); (2) no deflection in fields means no charge (2); (3) the radiation gave the fastest protons about 5.7 MeV (3); (4) a massless photon can transfer only a small share of its energy to a heavy proton, so it would need about 55 MeV, more than the reaction can give (4); (5) the fastest nitrogen recoils demand a different photon energy (about 90 MeV) for the same beam, so the photon idea is inconsistent (5); (6) a neutral particle with a proton's mass can hand a proton all its energy, head-on, so no extra energy is needed (6); (7) with no charge it does not ionise, so it penetrates lead (7); (8) two maximum recoil speeds give two equations, the unknown speed cancels, and the mass comes out near a proton's (8 to 10).
- **Entry knowledge (route `entryKnowledge`):** v08 (nucleus, proton, gold mass gap); Module 7 v10 (photons, electron volt); Year 11 (nuclear notation, conservation of momentum and kinetic energy in elastic collisions, ionisation by charged particles).
- **Learner-visible vocabulary (plain meaning at first use):** gamma rays (high-energy photons, 2); paraffin wax (a solid rich in hydrogen, so in protons, 3); recoil (the target's motion after being struck, 5); neutron (6); elastic collision (kinetic energy is kept, 8); atomic number Z and mass number A (11).
- **Legacy logic ported:** none.
- **New explainer motion:** **beam line** (coded alpha dots from the source vessel striking beryllium, a grey dashed "radiation" stream through the lead bricks to the paraffin, red protons leaving, the ionisation chamber's coded meter flicking); **energy-transfer insets** (photon bouncing off a proton with an amber share bar; equal-mass collision with a full transfer); **contradiction board** (two photon energies that should match); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the beam line across the centre; insets and chips on the right; algebra lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The proton-electron model of the nucleus failed for several reasons, including the measured spin of nitrogen-14 and the energy needed to confine an electron in a nucleus; one clause only ("clashed with other measurements").
  (b) Largest kinetic energy given by a photon of energy E to a free particle of rest energy mc² (180° Compton scattering): T = 2E²/(mc² + 2E). Proton: mc² = 940 MeV (data-sheet m_p), T = 5.69 MeV gives E = 54.6 MeV (Chadwick 1932 quotes about 55 MeV). Nitrogen-14: Chadwick's published estimate was about 90 MeV (from a recoil energy of about 1.2 MeV measured by range; Chadwick 1932, p. 697); the narration uses it (Revision 2, root decision 4). With mc² ≈ 13 160 MeV (14 m_p) and the later 4.7 × 10⁶ m s⁻¹ speed (1.61 MeV), the same rule gives 104 MeV; that reconstruction is not in learner copy.
  (g) Sources of the speeds (Revision 2, brief 192 finding 1). Curie and Joliot reported protons of roughly 3 × 10⁹ cm s⁻¹; Chadwick's refined maximum was 3.3 × 10⁹ cm s⁻¹ (3.3 × 10⁷ m s⁻¹), and his nitrogen maximum for the mass calculation was 4.7 × 10⁸ cm s⁻¹ (4.7 × 10⁶ m s⁻¹), uncertain by about 10% (Chadwick 1932, pp. 693, 695, 699).
  (h) Ionisation (Revision 2, brief 192 finding 3). Neutrons cause no direct ionisation, but ionise matter indirectly through the charged nuclei they knock on, which is how the ionisation chamber detects them.
  (c) Energy available: ⁹Be + α → ¹³C + γ has Q = 10.65 MeV; polonium-210 alphas carry 5.30 MeV; maximum about 15.9 MeV, said "at most about sixteen million". The neutron reaction ⁹Be(α,n)¹²C has Q = 5.70 MeV, so neutrons up to about 11 MeV are available, enough for 5.7 MeV protons.
  (d) Derivation of the recoil relation (elastic, head-on, target at rest): momentum m_n v = m_n v₁ + m V; kinetic energy ½m_n v² = ½m_n v₁² + ½mV²; solving gives V = 2m_n v/(m_n + m). Taking the ratio for two targets gives v_p/v_N = (m_n + m_N)/(m_n + m_p), which rearranges to the site's m_n = (v_N m_N − v_p m_p)/(v_p − v_N).
  (e) "Billiard ball on billiard ball" assumes a head-on elastic collision; glancing collisions transfer less, which is why the maximum recoil speeds are used.
  (f) Pronunciations: "Bothe" (BOH-tuh); "Irène Curie" (ee-REN kew-REE); "Frédéric Joliot" (fray-day-REEK zho-LYOH); "Chadwick"; "paraffin"; "beryllium" (buh-RIL-ee-um); "polonium".
- **Open decisions for root:**
  - **1. Four new plates (Codex).** `y12p-po-be-source-v1`, `y12p-lead-bricks-v1`, `y12p-paraffin-wax-v1`, `y12p-ionisation-chamber-v1` with `-needle-v1`: delivered by root decision 17 and inspected (Revision 2). No fallback needed.
  - **2. Recoil relation as supplied (science check and learning review).** Keep it supplied with limiting-case checks (site: extension unless scaffolded), or add a one-line derivation strip if the review wants it derived.
  - **3. Nitrogen photon figure.** Resolved in Revision 2: "about ninety million", Chadwick's own estimate (root decision 4; author note b).

Main question: *How do you find a particle that has no charge, so it can't be bent, steered or easily seen?*
Entry knowledge: the nucleus and proton (v08); photons and the electron volt (Module 7); elastic collisions and nuclear notation (Year 11).
Stops after: beryllium radiation, paraffin protons, the gamma contradiction, Chadwick's neutron, the two-target mass, the completed nucleus. No quarks; no electron-orbit problem.
Handoff: v10, why Rutherford's model could not explain stable atoms and line spectra.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *m_n*, *m_p*, *v_p*, *v_N*, *E*.

### 1. hook (the missing mass)
> Here's the puzzle from last time. A gold nucleus has the charge of seventy nine protons, but the mass of about a hundred and ninety seven. Helium has the charge of two protons, and the mass of four. An early guess was extra protons paired with electrons, but that clashed with other measurements. So something heavy with no charge seemed to be in there. But a neutral particle doesn't bend in fields, so how would you ever catch one? What evidence established an uncharged massive particle in the **nucleus**?

Visual: opens on v08's final frame (see "Opening frame"); the chip becomes the heading: "What evidence established an uncharged massive particle in the nucleus?"; the painted gold ring `y12p-gold-ring-v1.png` (about 260 px) sits beside the nucleus with an amber hand tag "gold". On "seventy nine protons" the charge bar pulses; on "a hundred and ninety seven" the grey gap pulses. On "Helium has the charge of two protons" a small helium nucleus beside it: charge bar "+2e", mass bar "2 m_p" red plus a grey gap to "4 m_p". On "paired with electrons" the gap fills briefly with "p + e" pairs, then they fade with a crossed tag "p + e pairs: clashed with other measurements". On "something heavy with no charge" grey discs "n?" fill both gaps. On "doesn't bend in fields" an inset: a grey disc crossing blue field lines and slate crosses in a straight line, tag "no charge: no bend". On "nucleus" the heading underlines "uncharged massive", grey pen ring round the "n?" discs.

### 2. the beryllium radiation
> The first clue came in nineteen thirty. Walther Bothe and Herbert Becker fired alpha particles from polonium at the light metal beryllium. Out came a radiation that passed through several centimetres of lead. Electric and magnetic fields didn't bend it, so it had no **charge**. The only uncharged, penetrating radiation anyone knew was gamma rays, high-energy photons, so that's what they assumed it **was**.

Visual: board change to the beam line. On "alpha particles from polonium at the light metal beryllium" the painted source vessel `y12p-po-be-source-v1.png` (about 520 px wide, solid from the scene's first frame with the bricks) at the left, cutaway labels "polonium (α source)" on the small disc and "beryllium" on the larger disc; amber α dots cross from one disc to the other. Name tags in words only "Bothe and Becker, 1930". On "passed through several centimetres of lead" the painted lead bricks `y12p-lead-bricks-v1.png` (about 420 px wide) in the path; a grey dashed stream "radiation?" passes through them, tag "several cm of lead". On "didn't bend it" blue field lines and slate crosses appear across the stream, which stays straight. On "charge" tag "no deflection → no charge". On "was" the stream relabels "γ? (gamma photons)", amber wave-packet icons. Marks (Revision 2): grey hand tag "straight through lead"; blue hand tag "no bend: no charge" with a blue pen bracket over the field region; amber hand tag "gamma? (a guess)".

### 3. the paraffin protons
> In nineteen thirty two, Irène Curie and Frédéric Joliot put paraffin wax in its path. Paraffin is full of hydrogen, and the radiation knocked protons out of it. When James Chadwick, at Cambridge, measured them more carefully, the fastest moved at about three point three times ten to the seven metres per second, a kinetic energy of about five point seven million electron **volts**. Protons are charged, so they're easy to detect. The question was what could hit them that **hard**.

Visual: camera continue on the beam line (2 and 3 about 64 s): the painted paraffin wax `y12p-paraffin-wax-v1.png` (about 360 px tall) after the lead; name tags in words only "Curie and Joliot, 1932". On "full of hydrogen" a zoom inset of the wax: coded chain molecules with many "H" atoms, tag "hydrogen nuclei = protons". On "knocked protons out of it" red "p" discs leave the wax with teal speed arrows; the painted ionisation chamber `y12p-ionisation-chamber-v1.png` (about 640 px wide) beyond the wax, its needle layer flicking live on the meter. On "When James Chadwick, at Cambridge, measured them more carefully" name tag in words only "Chadwick, Cambridge, 1932"; tag "v_p (max, Chadwick) = 3.3 × 10⁷ m s⁻¹", teal pen ring round the fastest proton. On "volts" `AlignedAlgebra` "K = ½mv² = ½(1.673 × 10⁻²⁷)(3.3 × 10⁷)² = 9.1 × 10⁻¹³ J = 5.7 MeV" (framed) with an orange energy bar "5.7 MeV" on a proton; beside it a small chip "K = mv² = 11 MeV" crossed in red, red hand tag "don't drop the ½". On "hard" a "?" over the grey stream.

### 4. the trouble with photons
> If the radiation were gamma photons, here's the trouble. A photon has no mass, and when something massless bounces off something heavy, it hands over only a small share of its energy, like a ping-pong ball bouncing off a bowling ball. To give a proton five point seven million electron volts, a photon would need about fifty five **million**. An alpha hitting beryllium could release at most about **sixteen**.

Visual: board change to the energy-transfer inset. On "A photon has no mass" an amber packet "γ, no mass" approaches a large red "p" disc. On "only a small share of its energy" the packet bounces back carrying most of its amber energy bar; the proton moves off with a thin orange slice, tag "massless on heavy: small share". On "like a ping-pong ball bouncing off a bowling ball" a small white ball rebounds off a large dark ball that barely moves (coded spheres only). On "million" a bar comparison: a tall amber bar "photon needed ≈ 55 MeV" beside the proton's orange "5.7 MeV", tag "photon bouncing straight back". On "sixteen" a slate line across the amber bar at "≈ 16 MeV: most the α + Be reaction can release"; the part of the amber bar above it turns hatched red, red hand tag "not available". Marks (Revision 2): the inset fills the frame from its first frame (packet, proton and empty bar frames solid); amber hand tag "massless on heavy: small share" with an amber pen bracket on the thin orange slice; the painted Po-Be source (about 260 px) at the upper left.

### 5. nitrogen makes it worse
> It got worse. Chadwick also aimed the radiation at nitrogen gas, and measured the fastest nitrogen recoils. To explain those, the photons would need about ninety million electron volts, by his own estimate. One beam can't be fifty five million for protons and ninety million for nitrogen. The photon idea didn't fit the **energy**, and it didn't fit **itself**.

Visual: camera change back to the beam line with the paraffin swapped for a coded gas cell "nitrogen gas" (the painted source, bricks and ionisation chamber stay, solid). On "measured the fastest nitrogen recoils" larger red "N" discs leave with short teal arrows, tag "fastest nitrogen recoils (head-on)". On "about ninety million electron volts, by his own estimate" the contradiction board: two amber bars for the same beam, "from protons: ≈ 55 MeV" and "from nitrogen: ≈ 90 MeV (Chadwick's estimate)", with a red "≠", red pen ring round the "≠". On "energy" the 16 MeV line from scene 4 crosses both bars, tag "too big for the reaction". On "itself" the "≠" pulses, red hand tag "one beam, two answers"; the "γ?" label on the stream is crossed.

### 6. Chadwick's neutron
> Chadwick proposed a different answer. The radiation is a stream of uncharged particles, each with about the mass of a proton. He called them neutrons. Now picture a head-on elastic collision between equal masses, from Year 11. The moving one stops, and the target moves off with all the speed, like one billiard ball hitting another. So a neutron with five point seven million electron volts can hand all of it to a **proton**.

Visual: board change: the stream relabels "n (neutrons): no charge, mass ≈ m_p". On "uncharged particles" grey discs "n" replace the dashed stream. On "about the mass of a proton" a balance-bar inset: "n" and "p" level. On "a head-on elastic collision between equal masses" the equal-mass inset: a grey "n" strikes a red "p" at rest. On "The moving one stops" the "n" stops dead; on "all the speed" the "p" leaves with the full teal arrow, tag "equal masses, head-on: full hand-over"; on "like one billiard ball hitting another" two coded billiard balls repeat the motion (no cue, no table edge figures). On "proton" an orange bar "n: 5.7 MeV" transfers wholly to "p: 5.7 MeV" (framed); the 16 MeV line sits well above it, tag "possible". Marks (Revision 2): grey hand tag "neutron: no charge, mass ≈ m_p"; teal pen arrow along the proton's full-speed path; ink hand tag "billiard on billiard".

### 7. why it got through lead
> Being uncharged also explains the lead. A charged particle tugs on electrons all along its path, knocking them off atoms and losing energy fast. A neutron feels no electric force, so it slips through until it strikes a **nucleus**. And the reaction balances. Helium four plus beryllium nine gives carbon twelve plus one **neutron**.

Visual: two tracks through a coded slab of lead atoms. On "A charged particle tugs on electrons" a red "p" track leaves a trail of ionised atoms ("+" and freed navy dots) and stops early, tag "charged: ionises, stops quickly". On "nucleus" a grey "n" track passes straight through the slab, ending at a direct hit on one small nucleus, tag "neutral: no direct ionisation, penetrates"; the struck nucleus recoils and leaves a short ionised trail, grey hand tag "seen only through what it hits". On "the reaction balances" the reaction writes: "⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n". On "neutron" checks write under it: "A: 4 + 9 = 12 + 1 ✓", "Z: 2 + 4 = 6 + 0 ✓", the equation framed. Marks (Revision 2): red hand tag "charged: stops fast" on the proton track; the painted lead bricks (about 300 px) behind the coded slab as its outside view.

### 8. weighing the neutron: the recoil rule
> To weigh the neutron, Chadwick used both targets. For a head-on elastic collision, conservation of momentum and kinetic energy give the target's recoil speed. It's two times the neutron's mass, over the neutron's mass plus the target's mass, times the neutron's **speed**. Check it. If the target's mass equals the neutron's, the recoil speed is the neutron's own speed. If the target is very heavy, it hardly **moves**.

Visual: board change to the live target-mass slider (the lesson's simulation) beside the working, solid from the first frame: a grey "n" and a purple-labelled target disc on a track at the left, a purple slider "target mass (× m_n)", and two live readouts (52 px) "recoil speed ÷ neutron speed" and "share of energy handed over"; the working panel at the right. Task strip: "Find the neutron's mass m_n". On "conservation of momentum and kinetic energy" chips "momentum conserved" and "kinetic energy conserved (elastic)" (Year 11). On "speed" the equation strip writes "v_recoil = 2m_n v / (m_n + m)" (framed), tag "from both conservation laws; exams supply this"; labels "v: neutron's speed (unknown)", "m: target's mass". On "the recoil speed is the neutron's own speed" the slider sits at 1: readouts "1.00", "1.00", the neutron stops and the target leaves at full speed; check 1: "m = m_n → v_recoil = 2m_n v / (2m_n) = v ✓", purple hand tag "equal masses: all of it". On "moves" the slider runs 4, 14, 197: readouts "0.40, 0.64", "0.13, 0.25", "0.010, 0.020", the neutron bouncing back harder each time; check 2: "m ≫ m_n → v_recoil ≈ 0 ✓", purple pen ring round "14" (nitrogen) with a purple hand tag "nitrogen: 14".

### 9. two targets cancel the unknown speed
> But the neutron's speed is unknown too. So write the rule once for protons, and once for nitrogen nuclei, about fourteen times heavier, using the fastest recoil of each, from head-on hits by the fastest neutrons. Then divide. The unknown speed cancels. The fastest protons recoiled at three point three times ten to the seven metres per second, and the fastest nitrogen nuclei at four point seven times ten to the **six**. So seven point zero two equals m n plus fourteen m p, over m n plus m **p**.

Visual: camera change (a new stage): the recoil rule framed at the top, the painted paraffin slab (about 240 px) and a coded nitrogen cell at the left as the two targets. Givens grouped: "v_p (max, head-on) = 3.3 × 10⁷ m s⁻¹ (paraffin)", "v_N (max, head-on) = 4.7 × 10⁶ m s⁻¹ (nitrogen)", "m_N ≈ 14 m_p"; teal hand tag "same fastest neutrons for both". On "write the rule once for protons" "v_p = 2m_n v / (m_n + m_p)"; on "once for nitrogen nuclei" "v_N = 2m_n v / (m_n + 14m_p)". On "Then divide" a fraction bar joins them; on "The unknown speed cancels" "2m_n v" strikes out top and bottom, red pen strokes. On "six" "v_p / v_N = (m_n + 14m_p) / (m_n + m_p)"; beside it a small chip "v_p / v_N = (m_n + m_p) / (m_n + 14m_p)" crossed in red, red hand tag "heavier target, slower recoil". On "p" "(3.3 × 10⁷) / (4.7 × 10⁶) = 7.02 = (m_n + 14m_p) / (m_n + m_p)".

### 10. solve for the mass
> Cross-multiply and solve, and the neutron's mass is about one point one six proton **masses**. Chadwick's own estimate was close, within his measurement errors. Today's data-sheet value is one point six seven five times ten to the minus twenty seven kilograms, just a tenth of a percent heavier than a **proton**.

Visual: camera change to full-width working; stage 9's last line stays at the top. On "masses" `AlignedAlgebra` "7.02 m_n + 7.02 m_p = m_n + 14 m_p" then "6.02 m_n = 6.98 m_p" then "m_n = 1.16 m_p" (framed); small chip "same as m_n = (v_N m_N − v_p m_p) / (v_p − v_N)". On "Chadwick's own estimate was close" grey hand tag "nitrogen speed ± about 10%: m_n about 0.9 to 1.4 m_p", grey pen bracket under the range. On "proton" "data sheet: m_n = 1.675 × 10⁻²⁷ kg, m_p = 1.673 × 10⁻²⁷ kg → m_n = 1.001 m_p" (framed), ink hand tag "a tenth of a percent heavier".

### 11. the nucleus adds up
> Now the nucleus adds up. Gold has seventy nine protons and a hundred and eighteen neutrons, so its mass number is one hundred and ninety **seven**. The atomic number counts protons, and the mass number counts protons plus **neutrons**.

Visual: board change back to the gold nucleus from scene 1. On "a hundred and eighteen neutrons" grey "n" discs fill the dashed gap; the mass bar completes "79 m_p + 118 m_n ≈ 197 m_p", tag "≈ (masses equal to about 0.1%)". On "seven" the symbol "¹⁹⁷₇₉Au" writes. On "neutrons" labels "Z = 79: protons", "A = Z + N = 197", "N = 118: neutrons", "A = Z + N" framed. Marks (Revision 2): the gold ring (about 200 px) returns beside the completed nucleus; grey hand tag "gap filled" with a grey pen ring round the neutrons.

### 12. a way to remember
> Here's a way to remember the key argument. A photon hitting a proton is a ping-pong ball hitting a bowling ball. A neutron hitting a proton is one billiard ball hitting **another**.

Visual: the two insets side by side (each about 700 px, solid), replaying: ping-pong on bowling ball (tag "photon: small share") and billiard on billiard (tag "neutron: full hand-over"). On "another" the line writes large: "Photon on proton: ping-pong on bowling ball. Neutron on proton: billiard on billiard." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Bombarding beryllium with alpha particles produces a penetrating radiation that is not deflected by electric or magnetic fields, and that ejects high-speed protons from paraffin wax. Explain why Chadwick concluded that this radiation was made of neutral particles with a mass similar to a proton's, rather than gamma rays. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "When beryllium is bombarded with alpha particles, it emits a penetrating radiation that is not deflected by electric or magnetic fields and that ejects high-speed protons from paraffin wax. Explain why Chadwick concluded that this radiation consisted of neutral particles with a mass similar to that of a proton, rather than gamma rays. (3 marks)" The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> No deflection means no charge. Gamma photons would need about fifty five million electron volts to give the protons their energy, more than the reaction can release, and nitrogen recoils needed a different value. A neutral particle with a proton's mass can hand a proton all its energy head-on, so modest energies **work**. The slip is saying gamma rays are charged. Both ideas were **uncharged**.

Visual: card shrinks to the top with its picture; givens strip "not deflected; penetrating; fast protons from paraffin"; "not deflected", "high-speed protons" and "rather than gamma rays" underline. Framed lines write in turn: "no deflection → uncharged (both hypotheses)"; "γ: massless → small share of energy → ≈ 55 MeV needed > ≈ 16 MeV available; nitrogen gives a different value"; on "work" "neutral, mass ≈ m_p → equal-mass head-on collision → full transfer (momentum and energy conserved)". On "uncharged" a chip "it can't be gamma, because gamma rays are charged" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why Chadwick needed recoil measurements from two different targets to determine the neutron's mass. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why Chadwick needed recoil speeds from two different targets to determine the mass of the neutron. (2 marks)" The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Each recoil speed depends on two unknowns, the neutron's mass and its speed. One target gives one equation, which can't fix both. A second target gives a second equation, and dividing them cancels the speed, leaving the **mass**. The slip is thinking one target is enough. One equation can't fix two **unknowns**.

Visual: card shrinks to the top with its picture; givens strip "two targets; unknowns m_n and v"; "two different targets" underlines. On "mass" framed "unknowns: m_n and v → two equations (proton, nitrogen; fastest recoils) → divide: v cancels → m_n". On "unknowns" a chip "one target is enough" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So the atom is complete, a tiny nucleus of protons and neutrons, with electrons outside it. But how do those electrons stay there? In Rutherford's picture, they orbit the nucleus, like planets around the Sun. An orbiting electron keeps changing direction, so it's always accelerating, and you know what accelerating charges do. So why couldn't Rutherford's model explain stable atoms and line **spectra**?

Visual: board clears (camera change). On "a tiny nucleus of protons and neutrons" a small nucleus of red "p" and grey "n" discs (enlarged, tag "not to scale"). On "electrons outside it" one navy electron appears at a distance. On "they orbit the nucleus" a dashed circular orbit draws and the electron moves round it (held in motion). On "always accelerating" a teal velocity arrow turns with it and a rose arrow "a" points to the centre, tag "changing direction = accelerating". On "you know what accelerating charges do" a Module 7 chip "accelerating charges radiate EM waves" appears with a faint rose wavelet leaving the electron and a "?". On "spectra" chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". Hold about 2 seconds. This is the final frame (see "Final frame"). Marks (Revision 2): rose hand tag "radiates?" beside the wavelet; the final frame is otherwise unchanged.

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Be + α radiation: not deflected, so uncharged.
2. Photon on proton: small share, about 55 MeV needed.
3. Neutron: neutral, mass ≈ m_p; head-on, full transfer.
4. ⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n.
5. Two targets cancel v: m_n ≈ 1.16 m_p (rough); A = Z + N.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Photon on proton: ping-pong on bowling ball. Neutron on proton: billiard on billiard.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why "uncharged" (no deflection) (2); why gamma fails on energy (massless on heavy, small share) and on consistency (two targets, two answers) (4, 5); why the neutron works (equal masses) (6); why it penetrates lead (no ionisation) (7); why two targets are needed (two unknowns) (9, 16).
- **Misconceptions addressed:** gamma rays are charged (14 crossed); one target is enough (16 crossed); a neutral particle passes through everything (7: it stops when it hits a nucleus); neutrons cause no ionisation at all (7: indirect, through what they hit); neutron mass exactly equals the proton's (10: 0.1% heavier); dropping the ½ (3 crossed); an inverted ratio (9 crossed); ±10% read as the mass uncertainty (10).
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
| Paraffin protons (Chadwick's refined maximum; site) | v_p = 3.3 × 10⁷ m s⁻¹; K = 9.11 × 10⁻¹³ J = 5.69 MeV ≈ 5.7 MeV; slip mv² = 11.4 MeV | 3, 4, 6 |
| Photon needed (protons) | m_p c² = 940 MeV; T = 2E²/(mc² + 2E) = 5.69 MeV → E = 54.6 MeV ≈ 55 MeV | 4, 5, 14 |
| Nitrogen recoils (Chadwick; site) | v_N = 4.7 × 10⁶ m s⁻¹, m_N = 14 m_p: K = 2.59 × 10⁻¹³ J = 1.61 MeV (reconstruction: photon ≈ 104 MeV, author note only); narrated: Chadwick's own estimate ≈ 90 MeV (1.2 MeV recoil) | 5 |
| Target-mass slider (Revision 2) | 2/(1 + M) and 4M/(1 + M)²: M = 1 → 1.00, 1.00; 4 → 0.40, 0.64; 14 → 0.133, 0.249; 197 → 0.0101, 0.0201 | 8 |
| Uncertainty (Revision 2) | v_N = 4.7 × 10⁶ ± 10%: m_n = 0.911 to 1.415 m_p | 10 |
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
- Revision 2 (7 Nov): 1.673e-27 × (3.3e7)² / 1.602e-13 = 11.37 MeV (slip); (14 × 4.23e6 − 3.3e7)/(3.3e7 − 4.23e6) = 0.911; (14 × 5.17e6 − 3.3e7)/(3.3e7 − 5.17e6) = 1.415; slider ratios as the table.

## Memory aid check

- **"A photon on a proton is a ping-pong ball on a bowling ball. A neutron on a proton is billiard ball on billiard ball."** Meaning, as said in scene 12: a massless photon bouncing off a heavy proton gives it only a small share of its energy; a neutron of almost equal mass hitting a proton head-on can give it all its energy. Assumptions checked: the photon comparison holds while the photon's energy is much less than the proton's rest energy (55 MeV against 940 MeV; ratio of transfer 5.7/54.6 ≈ 10%); "billiard on billiard" assumes a head-on elastic collision (author note e) and near-equal masses (1.0012); glancing collisions give less, which is why maximum speeds are used. It helps a new case: A1 directly. Introduced after the explanation (4 to 6). Revision 2: scene 8's slider shows the billiard case at mass ratio 1 and the bowling-ball direction as the target grows heavier.
- **Considered, not used:** "neutron: neutral nucleon" (a definition, not an aid to the argument).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,159 characters**, 18 scenes. Characters per scene (1 to 18): 505, 401, 475, 402, 353, 423, 324, 412, 491, 305, 227, 177, 355, 389, 139, 305, 401, 75. At 13.3 characters per second the speech is about 463 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 8 slider runs under its narration): **about 529 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,020 characters (scene sum; 6,037 with inter-scene spaces), about 535 s. Reserve trims if the voiced take runs long: scene 1's proton-electron sentence (keep the crossed tag); scene 7's lead explanation to one sentence; scene 10's "Chadwick's own estimate" sentence.

## Opening frame

v08's final frame (`phys-y12-m8-v08.md`, Revision 2): paper background; heading "Why did scattering require a tiny dense nucleus?"; at the centre a large coded gold nucleus (red disc, tag "enlarged") labelled "+79e", partly filled with small red "p" discs; tag "proton: charge +e, mass m_p (Rutherford, 1920)"; a charge bar "79 protons → +79e ✓" and a mass bar "79 protons → 79 m_p" filled red, the rest to "197 m_p" a grey dashed gap with a grey hand tag "≈ 118 m_p missing" and a grey pen bracket, and the tag "charge 0?"; chip "Next: what evidence established an uncharged massive particle in the nucleus?". Scene 1 turns the chip into the heading and adds the gold ring beside the nucleus.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "What evidence established an uncharged massive particle in the nucleus?"; at the centre a small nucleus of red "p" and grey "n" discs (tag "not to scale"); one navy electron moving on a dashed circular orbit around it (held in motion), with a teal velocity arrow turning with it and a rose arrow "a" pointing to the centre, tag "changing direction = accelerating"; a Module 7 chip "accelerating charges radiate EM waves" with a faint rose wavelet leaving the electron and a "?", and a rose hand tag "radiates?" (Revision 2); chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". v10 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v09` (route phys-y12-m8-v09). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v09` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v09` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, beryllium-radiation, paraffin-protons, photon-trouble, nitrogen-contradiction, neutron-proposal, through-lead, recoil-rule, two-targets, solve-mass, nucleus-adds-up, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: beam line, energy-transfer insets, contradiction board, ionisation tracks, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2; no set-up runs past about 65 s): 1 to 2 clear change to the beam line; 2 to 3 camera continue (about 64 s); 3 to 4 clear change to the inset; 4 to 5 camera change back to the beam line; 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change to the live slider and working; 8 to 9 camera change (two targets); 9 to 10 camera change (full-width solve); 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v09-learning-review.md`, `science_check` = `checks/p-y12-m8-v09-physics-check.md`.

## Assets

Have (Revision 2; all inspected 7 Nov; scaled uniformly, never stretched, never above native size):
- `public/assets/physics/y12p-gold-ring-v1.png` (1402 × 1122, RGBA; v06): 1, 11.
- `public/assets/physics/y12p-po-be-source-v1.png` (1920 × 819), `y12p-lead-bricks-v1.png` (2172 × 724), `y12p-paraffin-wax-v1.png` (1536 × 1024), `y12p-ionisation-chamber-v1.png` and `y12p-ionisation-chamber-needle-v1.png` (1920 × 819 each; needle pivot at its brass hub), all RGBA, delivered by root decision 17: 2 to 5, 7, 9, A1 and A2 cards.
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a sealed container with a glass window; Chadwick's polonium-beryllium source sat inside a small evacuated vessel, and reusing a "gamma source" plate would suggest the gamma answer the video rejects); `y12p-alpha-scattering-chamber-v1.png` (v08; a different apparatus).

Need: no new plates (Revision 2).

Coded: alpha dots, the radiation stream, photons, neutrons, protons, nitrogen nuclei, field lines and crosses, wax molecules, energy bars, collision balls, lead atoms and tracks, the gas cell, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v09 build brief):
1. **Beam line.** Plates placed left to right with a coded stream whose label and icon change (radiation?, γ?, n) and particles leaving targets with teal speed arrows.
2. **Energy-transfer inset.** Collision of two coded discs with set mass ratio showing the share of kinetic energy passed on (orange bars).

## Codex asset brief

Revision 2: no open request. The four plates (and the needle layer) were delivered by root decision 17 (native size) and are kept here for the record; register the needle by its actual pivot (root decision 18); the beryllium disc is larger than the polonium disc, which is fine for a schematic source (root decision 18).

1. **`y12p-po-be-source-v1.png`** (delivered). A small evacuated brass vessel, side view, cut away: a polonium disc at the left facing a larger beryllium disc, a thin window at the right end, a pump stub on top.
2. **`y12p-lead-bricks-v1.png`** (delivered). A short stack of three dull grey lead bricks, side view.
3. **`y12p-paraffin-wax-v1.png`** (delivered). A slab of translucent white paraffin wax in a metal clamp on a small stand, side view.
4. **`y12p-ionisation-chamber-v1.png`** with **`y12p-ionisation-chamber-needle-v1.png`** (delivered). A small cylindrical ionisation chamber with a window facing left, a cable to an amplifier box and an analogue meter with a blank face; the needle as a separate layer.

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
12. Revision 2: confirm the speed attributions (3; author note g); "about ninety million" as Chadwick's own estimate (5; author note b); "fastest" and "head-on" for both targets (3, 5, 9, givens); "no direct ionisation" (7; author note h); the ± 10% tag on the nitrogen speed with the 0.9 to 1.4 m_p range (10); grouped denominators (8, 9, 10 chip); the slider values; the two new crossed slips.

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
- Revision 2 (7 Nov): brief 192 findings resolved and visual upgrade; see "Revision 2" below.

## Revision 2 (7 Nov 2026)

Brief 192 findings (`checks/p-y12-m8-v09-learning-review.md`, `checks/p-y12-m8-v09-science-check.md`): 0 blockers, 5 should fix, 0 optional.
- **Should fix, speed attribution and Chadwick's nitrogen estimate (3, 5; root decision 4).** Resolved: scene 3 says "When James Chadwick, at Cambridge, measured them more carefully, the fastest moved at about three point three times ten to the seven metres per second"; scene 5 says "the photons would need about ninety million electron volts, by his own estimate" and "fifty five million for protons and ninety million for nitrogen"; the 104 MeV reconstruction stays in author note b; author note (g) gives the sources.
- **Should fix, maximum recoil speeds (5, 9).** Resolved: "measured the fastest nitrogen recoils"; scene 9 says "using the fastest recoil of each, from head-on hits by the fastest neutrons" and "The fastest protons ... the fastest nitrogen nuclei"; the givens read "max, head-on" with the tag "same fastest neutrons for both"; Decisions "Maximum recoil speeds".
- **Should fix, "no ionisation" (7).** Resolved: the tag reads "neutral: no direct ionisation, penetrates", the struck nucleus leaves a short ionised trail ("seen only through what it hits"); author note (h).
- **Should fix, ± 10% label (10).** Resolved: "nitrogen speed ± about 10%: m_n about 0.9 to 1.4 m_p" (Python: 0.911 to 1.415); Decisions "Uncertainty". The conclusion (close to a proton's mass) stands.
- **Should fix, grouped denominators (9, 10).** Resolved: "(3.3 × 10⁷) / (4.7 × 10⁶) = 7.02", "2m_n v / (2m_n)" and "(v_N m_N − v_p m_p) / (v_p − v_N)". Values unchanged (7.0213; 1.1590).

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the gold ring anchors scenes 1 and 11; the four brief 192 apparatus plates (Po-Be source, lead bricks, paraffin wax, ionisation chamber with needle) form the beam line in 2 to 5 and return in 4, 7, 9 and both cards.
- Live control: the target-mass slider in scene 8 with live recoil-speed and energy-share readouts (Python: 1.00/1.00, 0.40/0.64, 0.13/0.25, 0.010/0.020 for target masses 1, 4, 14, 197); the ionisation meter's needle flicks live.
- Hand tags and a pen mark in role colours in every teaching scene ("gold", "straight through lead", "no bend: no charge", "gamma? (a guess)", "don't drop the ½", "not available", "massless on heavy: small share", "one beam, two answers", "neutron: no charge, mass ≈ m_p", "billiard on billiard", "seen only through what it hits", "charged: stops fast", "equal masses: all of it", "nitrogen: 14", "same fastest neutrons for both", "heavier target, slower recoil", "a tenth of a percent heavier", "gap filled", "radiates?"; pen rings, brackets, arrows and strokes on the n? discs, the field region, the fastest proton, the slice, the "≠", the proton path, the slider value, the cancelled speed, the range and the neutrons).
- Framed answers: 5.7 MeV (3), the full transfer (6), the reaction (7), the recoil rule (8), 1.16 m_p and 1.001 m_p (10), A = Z + N (11), the feedback lines (14, 16). New crossed slips: "K = mv² = 11 MeV" (3) and the inverted ratio (9).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip.
- Key notes cut from five long items (about 900 characters) to five short bullets (about 230 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed. Scenes 8, 9 and 10 are separate stages (Revision 1 ran them as one camera-continue board, about 84 s).

New plate requests: none.

Joins: the opening is v08's Revision 2 final frame (its "missing" tag is now a hand tag with a pen bracket); scene 1 adds the gold ring. The final frame (scene 17) is unchanged apart from one rose hand tag "radiates?", recorded in v10's opening.

Counts: 6,020 to 6,159 characters (scene sum); about 535 s to about 529 s.
