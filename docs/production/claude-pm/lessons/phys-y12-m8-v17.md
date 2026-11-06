# Year 12 Physics M8 V17: Q-values of artificial transmutations. What determines the energy released in an artificial transmutation? (design)

Status: Revision 2 (7 Nov 2026): brief 193 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,908 characters, 19 scenes, about 510 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v16's final frame.

Scope: seventeenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v11.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site reaction and masses kept for the worked example, every number recalculated in Python with the data-sheet conversion 1 u = 931.5 MeV/c² and AME2020 atomic masses rounded to six decimal places, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson15.sa.txt`; also read for v14 and v15): lesson 15, especially "conserve-mass-energy" ("Weigh the reactants ... then weigh the products. They do not match"; spontaneous against artificial transmutation; Rutherford 1919 ⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H; A and Z conserved and mass-energy conserved; Δm = m_reactants − m_products; E = Δm × 931.5 MeV/u; worked example Po-210 alpha decay with atomic masses, 0.005807 u, 5.41 MeV; Figure 3; the four-step method), "read-the-q-value" (Q = (m_reactants − m_products)c²; positive Q exothermic, negative endothermic; Rutherford's reaction with atomic masses He-4 4.002602 u, N-14 14.003074 u, O-17 16.999132 u, H-1 1.007825 u: Δm = −0.001281 u, Q = −1.19 MeV; "The alpha particle must arrive with at least this much kinetic energy (more, once recoil is accounted for)"; Figure 4; Stop and check Q = −2.4 MeV), and the vocabulary entry "Q-value". Lesson 14's "model-nuclear-fission" read for the handoff equation (n + U-235 → Ba-141 + Kr-92 + 3n): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson15.sa.html`, SHA256 `f17baa97b8d2ee36d7e71dcaa1f9c940d0e225914277466a5f43f7c48563fd63`, and `.../lesson14.sa.html`, SHA256 `18219e8c4f9f1d5b769f64d59db028c88c38ce4652bd933f5ca55990058af245` (both recomputed 6 Nov; match the route). Route entry: `phys-y12-m8-v17`, sections `conserve-mass-energy`, `read-the-q-value`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Balance one induced nuclear equation and calculate signed Q from consistent masses, explaining positive/negative Q. Stop before reactor chains." Next: "phys-y12-m8-v18: Why can one fission event trigger a controlled or uncontrolled chain?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the polonium-beryllium source is a reused painted plate (v09), scaled uniformly, never stretched; Rutherford's chamber is a coded schematic (as HSC papers draw it); nuclei, equations, energy bars, the binding-energy curve and calculation strips are coded, HSC style; every number recalculated in Python; data-sheet symbols E = mc² and 1 u = 931.5 MeV/c²; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v16 (mass defect, binding energy, the curve, the atomic-mass trap), v14 (spontaneous against artificial transmutation; Po-210's 5.41 MeV preview; A and Z conservation), v09 (Chadwick's beryllium reaction and the polonium-beryllium source), v08 (Rutherford's alpha particles and zinc sulfide scintillations), m7-v16 (E = mc²; rest energy).

Atomic-mass bookkeeping (root decision 3 for Module 8): atomic masses are used throughout; in every reaction here the total atomic number is the same on both sides, so the electron masses cancel exactly (electron binding energies, a few keV at most, are negligible; author note a). This contrasts with v16, where nuclear and atomic masses had to be kept apart. Beta-plus decay is the exception (two electron masses do not cancel); it is not used here (author note b).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger ids `P8-IQ4-04`, `P8-IQ4-06`), quoted from the route JSON `syllabusActions`:

- `P8-IQ4-04`: "analyse relationships that represent conservation of mass-energy in spontaneous and artificial nuclear transmutations, including alpha decay, beta decay, nuclear fission and nuclear fusion (ACSPH032)"
- `P8-IQ4-06`: "predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036)"
  - "the law of conservation of energy"
  - "mass defect"
  - "binding energy"
  - "Einstein’s mass–energy equivalence relationship E=mc^(2)" (displayed as E = mc²)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v16's final frame (the binding-energy curve with ⁴He, ¹⁴N and ¹⁷O marked; an alpha striking ¹⁴N; "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H", "Q = ?"). Teaches: Rutherford's 1919 observation (scintillations beyond the alphas' range: protons knocked out); the equation balanced (A and Z); the energy bookkeeping from conservation of energy with rest energy included, giving Q = (m_reactants − m_products)c² = kinetic energy out − kinetic energy in; the sign of Q (positive: energy out; negative: energy in, the projectile must supply it); every spontaneous decay has positive Q (Po-210, 5.41 MeV, site); why atomic masses work here (electrons cancel); Rutherford's reaction in two stages (18.005677 u against 18.006957 u; Q = −1.19 MeV); what that means for the alpha (at least 1.19 MeV, in practice more; Rutherford's alphas about 7.7 MeV, products about 6.5 MeV); Q is fixed by masses, not by the projectile's speed; the same Q from binding energies (v16); a positive induced reaction, ⁹Be(α, n)¹²C (Q = +5.70 MeV, v09); a memory aid; induced fission of U-235 as the handoff (Q ≈ 173 MeV prompt, three neutrons). Stops before chain reactions, moderators and control rods (v18), fusion conditions (v19), threshold kinematics beyond one sentence (author note c).

## Decisions

- **Learner question (route wording kept).** "What determines the energy released in an artificial transmutation?" The answer, built in order: total energy, rest energy included, is conserved (4); so the energy released is the drop in rest mass times c², the Q-value (4); its sign says whether energy comes out or must be supplied (5); it depends only on the masses of reactants and products, not on the projectile's speed (10); equivalently, on the change in total binding energy (11).
- **Hook (v16's handoff).** Two questions: release or cost? Would faster alphas release more? The second is answered in scene 10 and tested in A2.
- **Rutherford's observation (site "conserve-mass-energy"; v08 recalled).** Coded schematic chamber (source, gas, zinc sulfide screen beyond the alpha range, a microscope eyepiece drawn as a tube only). "Something lighter and more penetrating was being knocked out": protons. The identification of oxygen-17 (Blackett's cloud-chamber photographs, 1925) is in author note d.
- **Equation (route "Balance one induced nuclear equation").** ⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H with A and Z tallies.
- **Q from conservation of energy (route "derive each newly introduced equation"; syllabus "the law of conservation of energy").** Energy before = energy after, with rest energy mc² counted: K_in + m_reactants c² = K_out + m_products c², so K_out − K_in = (m_reactants − m_products)c² = Q. Two lines of `AlignedAlgebra`; the narration says it in words.
- **Sign (site "read-the-q-value").** Positive Q: products lighter, energy out as extra kinetic energy (and gamma). Negative Q: products heavier, kinetic energy is converted into rest mass, so the projectile must bring at least |Q|. Every spontaneous decay has positive Q (Po-210, 5.41 MeV, the site's worked example, as one sentence; v14's preview). The site's "can occur spontaneously" for any positive Q is not repeated (v14 site note 4).
- **Which masses (route "consistent masses"; root decision 3).** Atomic masses, because Z is conserved, so the electron count is equal on both sides: nine electrons each side for Rutherford's reaction. A screen chip contrasts v16 ("nucleus alone: nuclear masses, or ¹H for protons").
- **Worked example (site reaction; AME2020 masses).** He-4 4.002603 u (AME2020; the site's 4.002602 is an older value, site note 1), N-14 14.003074, O-17 16.999132, H-1 1.007825. Stage 1: totals 18.005677 u and 18.006957 u. Stage 2: Δm = −0.001280 u, Q = −1.19 MeV (site −1.19 MeV).
- **What it means for the alpha (site "more, once recoil is accounted for").** At least 1.19 MeV, in practice much more: momentum must be conserved, so the products keep some kinetic energy (threshold about 1.53 MeV), and the alpha must get close against the electric repulsion (about 4 MeV). Rutherford's alphas: about 7.7 MeV (radium C′, now polonium-214); products share about 6.5 MeV (K_out = K_in + Q). One sentence on screen per point (author note c).
- **Q fixed by masses (the hook's second question).** "A faster alpha gives the products more kinetic energy, but it doesn't change Q."
- **Binding-energy route (syllabus "binding energy"; v16 link).** BE(⁴He) + BE(¹⁴N) = 28.296 + 104.659 = 132.955 MeV; BE(¹⁷O) = 131.763 MeV (BE(¹H) = 0); Q = 131.763 − 132.955 = −1.19 MeV. Revision 2 (brief 193): the screen shows three decimals, because the one-decimal values give 131.8 − 133.0 = −1.2, not −1.19; the narration's rounded "about one hundred and thirty three" and "one hundred and thirty one point eight" stay. "The products are less tightly bound in total."
- **Positive induced reaction (v09).** ⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n: 13.014786 u against 13.008665 u, Δm = +0.006121 u, Q = +5.70 MeV. Shown at results level (the method is the same); with the source's 5.30 MeV alphas the products share about 11.0 MeV (screen tag).
- **Memory aid (scene 13): "Q is mass before minus mass after. Positive Q gives energy out; negative Q takes energy in."** See "Memory aid check".
- **Attempts (original wording, HSC style; Curie and Joliot's 1934 reaction; new A2).** A1 (3 marks): ⁴₂He + ²⁷₁₃Al → ³⁰₁₅P + X: identify X (a neutron), calculate Q (−2.64 MeV) and state whether energy is released or absorbed (absorbed). Crossed: subtracting the wrong way (+2.64 MeV, "released"). A2 (2 marks): explain why Q does not depend on the incoming particle's kinetic energy. Crossed: "a faster alpha releases more energy, so Q increases".
- **Handoff (route next).** Induced fission of U-235 as an artificial transmutation: ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n, balanced; Q = +173 MeV from atomic masses (prompt energy); a screen tag "about 200 MeV in total, once the fragments decay" (author note e; matches the site's "~200 MeV" so v18 can use either); three neutrons out for one in. See "Final frame".
- **Colour key (v14 and v16 keys):** protons red "p" discs; neutrons grey "n" discs; alpha particles amber circles "α"; ejected protons red discs with teal speed arrows; energy orange (bars; positive Q bars point out of the reaction, negative Q bars point in); the binding curve ink with navy points; masses in u in ink, MeV in orange.
- **Colour key (Revision 2, fixed for every scene).** As above; kinetic energy and the K_in slider teal; rest energy ink; Q orange; ticks green; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (mass tags ink, Q and energy tags orange, kinetic tags teal, electron tags navy, repulsion tags rose).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4, 7, 8, 11, 12 and the feedback rows 52 px; six-decimal masses 52 px; framed answers 56 px); live readouts (scene 10 ledger: K_in, Q, K_out) about 52 px; ledger and chamber labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** No painted plate fits scene 1: the opening frame is v16's coded curve and reaction, and root decision 11 keeps Rutherford's 1919 chamber a coded HSC-style schematic (the painted alpha-scattering chamber is a different experiment and stays unused). The painted polonium-beryllium source `y12p-po-be-source-v1.png` (delivered, root decision 17; inspected 7 Nov) carries scene 12 at a readable size.
- **Simulation (Revision 2).** The core live control is the energy ledger's K_in slider in scene 10: the before kinetic bar steps 5.0, 7.7 and 9.0 MeV while live readouts (52 px) show "K_in", "Q = −1.19 MeV" (unchanged) and "K_out = K_in + Q" (3.81, 6.51, 7.81 MeV). Scene 9 uses the same ledger with a dashed minimum line. The range test (2) is the other live element.
- **Board stages (Revision 2).** No continued set-up runs past about 77 s (the equation and working, 6 to 8); every stage opens with its main picture solid.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded α arrow striking a coded ²⁷Al nucleus, with an unlabelled particle "X?" leaving and a ³⁰P cluster; A2: two coded α arrows of different lengths, slow and fast, approaching a ¹⁴N nucleus). On the answer side the card shrinks to the top, a givens strip lists the masses, the picture stays, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 15: "conserve-mass-energy" (the imaginary balance; spontaneous against artificial; Rutherford's equation; A, Z and mass-energy conservation; Δm and 931.5; Po-210) (1 to 5); "read-the-q-value" (Q definition, sign, exothermic and endothermic, Rutherford's −1.19 MeV, "more, once recoil is accounted for") (5, 7 to 9); Figures 3 and 4 (5, 8); Stop and check (Q = −2.4 MeV: "minimum kinetic energy ... ignoring recoil") (A2 framing). Lesson 14: fission equation (18). Not used: the joule check of Po-210 (key notes give the MeV route); fission's 200 MeV estimate from the curve (v18).
- **Site notes (quoted from site lessons 15 and 14, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing after v15's notes 5 and 6):**
  8. Constant ("read-the-q-value" and the Po-210 example): "⁴₂He = 4.002602 u". AME2020 gives 4.002603254 u (4.002603 u to six decimal places); the site's value is an older table entry. Results are unchanged at three significant figures (−1.19 MeV; 5.41 MeV). Suggest 4.002603 u for consistency with lesson 7 and v05.
  9. Wording ("conserve-mass-energy"): "A tiny amount of mass, the mass defect Δm, has vanished". "Vanished" invites the lost-matter reading v16 removes. Suggest "the products have slightly less mass; that mass has left as kinetic energy and radiation".
  10. Energy figure (lesson 14 "model-nuclear-fission"): "releasing ~200 MeV" for n + U-235 → Ba-141 + Kr-92 + 3n. From atomic masses this particular reaction releases 173 MeV promptly; about 200 MeV is the average total per fission including the fragments' later beta decays (and the neutrinos' share). Suggest "about 170 MeV for this split, about 200 MeV per fission on average once the fragments decay".
  11. Checked and correct: Rutherford Δm = −0.001281 u with the site's masses (−0.001280 u with AME2020), Q = −1.19 MeV; Po-210 0.005807 u (0.005806 u with AME2020), 5.41 MeV; the Stop and check reasoning (−2.4 MeV cannot occur spontaneously; at least 2.4 MeV ignoring recoil).
- **Cause chain taught, in order:** (1) firing alphas at nitrogen knocks out protons, making oxygen-17 (2, 3); (2) total energy including rest energy is conserved, so any drop in rest mass appears as extra kinetic energy, Q (4); (3) heavier products mean Q is negative, so kinetic energy must be converted to mass (5, 8); (4) electrons cancel because charge is conserved, so atomic masses are consistent here (6); (5) the projectile must supply at least |Q|, and more because momentum and repulsion take their share (9); (6) Q depends only on the masses, so a faster projectile cannot raise it (10); (7) heavier products are less tightly bound in total (11).
- **Entry knowledge (route `entryKnowledge`):** v16 (mass defect, binding energy, 931.5 MeV per u, the atomic-mass trap); v14 (spontaneous and artificial transmutation; A and Z); v09 (beryllium reaction); m7-v16 (E = mc²); Year 11 conservation of energy and momentum.
- **Learner-visible vocabulary (plain meaning at first use):** artificial (induced) transmutation (changing a nucleus by hitting it with a particle, recalled, 1); scintillation (a tiny flash on a screen when a particle hits it, 2); rest energy (the energy a mass has just by existing, mc², 4); Q-value (the energy released by a reaction: the drop in rest mass times c², 4); reactants and products (what goes in, what comes out, 4); exothermic and endothermic are shown as screen tags only (5).
- **Legacy logic ported:** none. Coded family `m8-nucleosynthesis` supplies the curve in scenes 1 and 11 within its limits ("No reaction energetics"; this design adds them).
- **New explainer motion:** **range test** (alphas fading out at a set distance while flashes still appear on a screen beyond, 2); **energy ledger** (two columns "before" and "after" with rest-energy and kinetic-energy bars that must total the same height, 4, 5, 9, 10); **reaction balance** (a two-pan comparison balance, as v16, with reactant and product masses, 7, 8); **binding bars** (stacked binding-energy bars for reactants and products, 11); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 14 and 16); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the reaction or ledger at the left or centre; working strips at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Atomic masses: reactants He (2 electrons) + N (7) = 9; products O (8) + H (1) = 9. Electron masses cancel exactly; the differences in electron binding energy (eV to keV) are negligible against MeV.
  (b) For β⁺ decay with atomic masses, Q = [M(parent) − M(daughter) − 2m_e]c²; not used in this video.
  (c) Threshold: for a reaction with Q < 0 and a target at rest, the minimum projectile kinetic energy is −Q(1 + m_projectile/m_target) ≈ 1.19 × (1 + 4/14) = 1.53 MeV (non-relativistic). The Coulomb barrier for α on ¹⁴N is about 4 MeV (r = 1.2(4^(1/3) + 14^(1/3)) fm = 4.8 fm; 1.44 × 2 × 7 / 4.8 = 4.2 MeV), though tunnelling allows reactions somewhat below it. Rutherford's alphas from radium C′ (polonium-214) had 7.69 MeV; K_out = 7.69 − 1.19 = 6.50 MeV (shared by O-17 and the proton).
  (d) Rutherford's 1919 papers reported long-range "H particles" from nitrogen; the product nucleus was identified as oxygen-17 by Blackett's cloud-chamber photographs (1925). The narration says "some nitrogen nuclei became oxygen" in the hook, as the site does.
  (e) Fission: with AME2020 atomic masses (n 1.008665, U-235 235.043930, Ba-141 140.914403, Kr-92 91.926173 u): reactants 236.052595 u, products 235.866571 u, Δm = 0.186024 u, Q = 173.3 MeV. The fragments then beta-decay (Ba-141 → … → Pr-141; Kr-92 → … → Zr-92), adding about 20 to 30 MeV (part carried by antineutrinos), so about 200 MeV per fission on average is the usual figure.
  (f) Chadwick's reaction with the polonium source's 5.30 MeV alphas: K_out = 5.30 + 5.70 = 11.0 MeV, consistent with v09 author note c.
  (g) Curie and Joliot (Irène Joliot-Curie and Frédéric Joliot, 1934) produced phosphorus-30, the first artificially made radioactive isotope. A1's card and feedback do not name them (no history is needed for the answer).
  (h) Pronunciations: "Q value" (cue); "beryllium nine"; "phosphorus thirty"; "krypton ninety two"; "mega electron volts" in full.
- **Open decisions for root:**
  - **1. Schematic or plate for Rutherford's chamber (root).** Coded schematic chosen (consistent with v12's Davisson and Germer schematic). A painted plate (`y12p-transmutation-chamber-v1`) could be requested if root prefers apparatus realism.
  - **2. Binding-energy route depth (learning review).** Scene 11 repeats Q by binding energies (about 330 characters). Keep for the syllabus's "binding energy" item, or move to the notes if the video feels long.
  - **3. Handoff numbers (root, with v18's designer).** The final frame shows Q = +173 MeV for this split with a tag "about 200 MeV in total, once the fragments decay" (author note e). v18 should open on this frame and may use either figure with that distinction; v18's designer to confirm.

Main question: *Rutherford turned nitrogen into oxygen by firing alpha particles at it. Did the reaction give out energy or take it in, and would faster alphas change the answer?*
Entry knowledge: mass defect, binding energy and 931.5 MeV per u (v16); spontaneous and artificial transmutation (v14); the beryllium reaction (v09); E = mc² (m7-v16); conservation of energy and momentum (Year 11).
Stops after: Rutherford's observation, the balanced equation, Q from conservation of energy, the sign, why atomic masses work, Q = −1.19 MeV and its meaning, Q fixed by masses, the binding-energy route, a positive reaction, induced fission's Q. No chain reactions.
Handoff: v18, why one fission event can trigger a controlled or uncontrolled chain.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *Q*, *m*, *c*, *K*, *u*.

### 1. hook (release or cost?)
> In nineteen nineteen, Rutherford fired alpha particles into nitrogen, and some of the nitrogen nuclei became oxygen. A new nucleus, made on purpose. But did that reaction give out energy, or take energy in? And would faster alphas make it release more? So what determines the energy released in an artificial **transmutation**?

Visual: opens on v16's final frame (see "Opening frame"); the chip becomes the heading: "What determines the energy released in an artificial transmutation?". On "fired alpha particles into nitrogen" the amber α strikes the ¹⁴N nucleus again. On "became oxygen" the nucleus regroups into an ¹⁷O cluster with a red "p" leaving. On "give out energy, or take energy in" the orange bar's "+?" and "−?" ends pulse in turn. On "faster alphas" a second α with a longer teal speed arrow, teal hand tag "more KE in → more out?" with a teal pen ring round the longer arrow. On "transmutation" the heading underlines "determines" and "energy released".

### 2. what Rutherford saw
> Rutherford's alphas came from a radioactive source, and only travelled a few centimetres through the gas. But a zinc sulfide screen, further away than any alpha could reach, still showed tiny flashes. Something lighter and more penetrating was being knocked out of the nitrogen nuclei. Those particles were protons, hydrogen **nuclei**.

Visual: board change (a new set-up, solid from the first frame): coded schematic chamber (side view, HSC style, about 1300 px wide): a source at the left inside a box of "nitrogen gas", a zinc sulfide screen at the right end, an eyepiece tube outside it (no viewer drawn). Name tag in words only "Rutherford, 1919". On "only travelled a few centimetres" amber α tracks fade out at a dashed line "alpha range", tag "≈ 7 cm in air". On "still showed tiny flashes" bright points flicker on the screen beyond the dashed line (range test), amber hand tag "beyond the alpha range!" with an amber pen ring round the flashes, small tag "scintillations". On "knocked out of the nitrogen nuclei" an inset: an α striking a ¹⁴N nucleus and a red "p" leaving fast with a long teal arrow. On "nuclei" a framed tag "¹₁H: protons", red pen arrow along the proton's long track.

### 3. balance the equation
> Write it as a nuclear equation. Helium four plus nitrogen fourteen gives oxygen seventeen plus hydrogen one. Check the top numbers: four plus fourteen is eighteen, and seventeen plus one is eighteen. Check the bottom numbers: two plus seven is nine, and eight plus one is nine. Nucleon number and charge are both **conserved**.

Visual: board change (a new set-up, solid from the first frame: the disc groups in place): the equation builds from disc groups: "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H". On "four plus fourteen is eighteen" the A tally "4 + 14 = 18"; on "seventeen plus one is eighteen" "17 + 1 = 18 ✓". On "two plus seven is nine" the Z tally "2 + 7 = 9"; on "eight plus one is nine" "8 + 1 = 9 ✓". On "conserved" the equation sits in a dark-ink frame (52 px) with chip "A and Z conserved (v14)"; ink hand tag "top 18 = 18" and red hand tag "bottom 9 = 9", with pen brackets over each tally.

### 4. where Q comes from
> Now the energy. Total energy is conserved, and since E equals m c squared, rest mass counts as energy too. So the kinetic energy coming out equals the kinetic energy going in, plus any drop in rest mass, times c squared. That drop in rest mass, times c squared, is the Q value. Q equals the mass of the reactants, minus the mass of the products, times c **squared**.

Visual: board change (a new set-up, solid from the first frame): the energy ledger (about 900 px tall), two columns "before" and "after", each a stacked bar of "rest energy (mc²)" (ink) and "kinetic energy" (teal). On "Total energy is conserved" the two columns snap to equal total height, tag "total before = total after". On "rest mass counts as energy too" chip "rest energy = mc² (Module 7)". On "any drop in rest mass" the after column's rest bar shortens slightly and its kinetic bar grows by the same amount, teal pen bracket "extra KE", teal hand tag "mass drop → KE". On "is the Q value" `AlignedAlgebra` "K_in + m_reactants c² = K_out + m_products c²" then "K_out − K_in = (m_reactants − m_products)c² = Q". On "squared" "Q = (m_reactants − m_products)c²" in a dark-ink frame (56 px); "Q (MeV) = Δm (u) × 931.5"; orange hand tag "before − after".

### 5. the sign of Q
> If the products are lighter, Q is positive, and the reaction gives out energy as extra kinetic energy. Every spontaneous decay is like this. Polonium two ten's alpha decay has a Q of five point four one mega electron volts. If the products are heavier, Q is negative. Then some kinetic energy is turned into extra mass, so the reaction only happens if the projectile brings enough **energy**.

Visual: two small ledgers side by side. On "Q is positive" the left ledger: after's rest bar shorter, kinetic bar taller, orange arrow out, tag "Q > 0: energy out (exothermic)". On "Every spontaneous decay" a chip "spontaneous decay: always Q > 0"; on "five point four one" "²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He: Q = +5.41 MeV (v14)". On "Q is negative" the right ledger: after's rest bar taller, kinetic bar shorter, orange arrow in, tag "Q < 0: energy in (endothermic)". On "energy" an incoming teal arrow on the projectile, teal hand tag "projectile must supply it" with a teal pen ring round the inward arrow.

### 6. which masses
> Which masses should we use? Tables give atomic masses, which include the electrons. Here, that's fine. Charge is conserved, so the total atomic number is the same on both sides, and so is the number of electrons. For Rutherford's reaction, that's nine electrons on each side, so they **cancel**.

Visual: the equation from scene 3 returns. On "include the electrons" navy electron dots appear around each nuclide symbol: 2 and 7 on the left, 8 and 1 on the right. On "the total atomic number is the same" the Z tally "9 = 9" glows. On "nine electrons on each side" counts "9 e⁻" and "9 e⁻". On "cancel" the dots pair off across the arrow and fade; framed chip "Z conserved → electrons cancel → atomic masses OK", navy hand tag "9 = 9"; a small grey chip beside it "v16: a nucleus alone → use ¹H for protons".

### 7. stage 1: the masses
> Here are the atomic masses. Helium four is four point zero zero two six zero three u, and nitrogen fourteen is fourteen point zero zero three zero seven four u, a total of eighteen point zero zero five six seven seven. Oxygen seventeen is sixteen point nine nine nine one three two u, and hydrogen one is one point zero zero seven eight two five u, a total of eighteen point zero zero six nine five **seven**.

Visual: working layout. Task strip: "Find Q for Rutherford's reaction". Equation strip: "Q = (m_reactants − m_products)c², 1 u = 931.5 MeV/c²". Givens grouped: "⁴He 4.002603 u, ¹⁴N 14.003074 u" (reactants); "¹⁷O 16.999132 u, ¹H 1.007825 u" (products); "atomic masses" tag. On "eighteen point zero zero five six seven seven" `AlignedAlgebra` "m_reactants = 4.002603 + 14.003074 = 18.005677 u". On "seven" "m_products = 16.999132 + 1.007825 = 18.006957 u"; the reaction balance tips down on the products' side.

### 8. stage 2: Q is negative
> So the reactants minus the products is minus zero point zero zero one two eight zero u. The products are heavier. Times nine hundred and thirty one point five, Q is minus one point one nine mega electron volts. This reaction doesn't release energy. It takes in about one point two mega electron volts from the alpha's kinetic **energy**.

Visual: stage 1 shrinks to two kept lines "18.005677 u", "18.006957 u". On "minus zero point zero zero one two eight zero u" "Δm = 18.005677 − 18.006957 = −0.001280 u". On "The products are heavier" the balance's product pan glows, ink hand tag "products heavier" with an ink pen arrow to the low pan. On "minus one point one nine" "Q = −0.001280 × 931.5 = −1.19 MeV" in a dark-ink frame (56 px) with a `NumberTicker`; beside it a chip "Q = −0.00128 MeV" fades in and is crossed in red, red hand tag "× 931.5 for MeV". On "energy" the orange bar from scene 1 resolves to "−1.19 MeV: energy taken in", the "+?" end greying out.

### 9. what that means for the alpha
> So the alpha must arrive with at least one point one nine mega electron volts, and in practice much more. The products must keep moving, to conserve momentum, and the alpha has to get close to the nitrogen nucleus against its electric repulsion. Rutherford's alphas had about seven point seven mega electron volts, so the products shared about six point **five**.

Visual: board change (a new set-up, solid from the first frame): the energy ledger with numbers (about 900 px tall). On "at least one point one nine" a dashed minimum line on the "before" kinetic bar, tag "K_in ≥ 1.19 MeV (ignoring momentum)". On "to conserve momentum" small teal arrows on the outgoing ¹⁷O and proton, tag "products must move: threshold ≈ 1.5 MeV". On "against its electric repulsion" rose repulsion arrows between the approaching α and the ¹⁴N nucleus, tag "repulsion: about 4 MeV to get close". On "five" the ledger fills: "K_in ≈ 7.7 MeV", "Q = −1.19 MeV", "K_out = 7.7 − 1.19 ≈ 6.5 MeV" in a dark-ink frame (56 px); teal hand tag "K_out = K_in + Q".

### 10. Q doesn't care how fast
> Here's the key idea. Q depends only on the masses of the reactants and the products. A faster alpha gives the products more kinetic energy, but it doesn't change Q. The energy a reaction releases, or takes in, is fixed by how much rest mass disappears, or **appears**.

Visual: the ledger from scene 9 continues with the live K_in slider (Revision 2) under its "before" kinetic bar and live readouts (52 px) "K_in", "Q", "K_out". On "depends only on the masses" the rest bars glow, ink pen ring round them. On "more kinetic energy" the slider steps K_in 5.0, 7.7, 9.0 MeV and the readouts follow: "K_out = 3.81, 6.51, 7.81 MeV" while "Q = −1.19 MeV" never changes; teal hand tag "K_out bigger". On "doesn't change Q" the Q readout pulses, orange hand tag "same Q" with an orange pen underline. On "appears" chip "Q: set by masses only" in a dark-ink frame.

### 11. the same answer from binding energies
> You can check this with binding energies from the last video. Helium four and nitrogen fourteen together have about one hundred and thirty three mega electron volts of binding energy. Oxygen seventeen has one hundred and thirty one point eight, and a lone proton has none. The products are less tightly bound in total, by one point one nine, so the reaction costs that **energy**.

Visual: board change (a new set-up, solid from the first frame): binding bars (about 800 px tall): left stack "⁴He 28.296 + ¹⁴N 104.659 = 132.955 MeV"; right stack "¹⁷O 131.763 + ¹H 0 = 131.763 MeV" (Revision 2: three decimals, brief 193). On "one hundred and thirty three" the left stack completes. On "one hundred and thirty one point eight" the right stack completes, shorter. On "a lone proton has none" a dashed empty slot "¹H: 0". On "energy" a bracket on the difference "131.763 − 132.955 = −1.19 MeV = Q ✓" in a dark-ink frame (52 px), with a small grey tag "one decimal gives ≈ −1.2"; orange hand tag "less total binding → heavier → Q < 0".

### 12. a reaction that releases energy
> Now one that releases energy. Chadwick's neutrons came from alphas hitting beryllium nine, making carbon twelve and a neutron. The reactants total thirteen point zero one four seven eight six u, and the products thirteen point zero zero eight six six five u. The mass drops by zero point zero zero six one two one u, so Q is plus five point seven zero mega electron **volts**.

Visual: board change (a new set-up, solid from the first frame): the painted polonium-beryllium source `y12p-po-be-source-v1.png` (v09; about 640 px wide, 273 px tall, below native size) at the upper left, tag "v09". The equation builds: "⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n" with tallies "13 = 13 ✓", "6 = 6 ✓". On "thirteen point zero one four seven eight six" "m_reactants = 4.002603 + 9.012183 = 13.014786 u". On "thirteen point zero zero eight six six five" "m_products = 12.000000 + 1.008665 = 13.008665 u". On "volts" "Δm = +0.006121 u; Q = 0.006121 × 931.5 = +5.70 MeV" in a dark-ink frame (56 px), orange arrow out, orange hand tag "products lighter: energy out"; a small tag "with 5.3 MeV alphas: K_out ≈ 11.0 MeV".

### 13. a way to remember
> Here's a way to keep the sign straight. Q is mass before, minus mass after. Positive Q gives energy out. Negative Q takes energy **in**.

Visual: the two results side by side, "Rutherford: Q = −1.19 MeV" and "Chadwick's source: Q = +5.70 MeV". On "Q is mass before, minus mass after" the line writes large as the framed memory card (hand lettering, 52 px; reused on the notes screen): "Q = mass before − mass after (× c²)". On "Positive Q gives energy out" an orange arrow out under +5.70. On "in" an orange arrow in under −1.19. Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Alpha particles hit aluminium twenty seven, making phosphorus thirty and one other particle. Identify the particle, calculate the Q value from the masses given, and state whether energy is released or absorbed. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Alpha particles are fired at aluminium-27: ⁴₂He + ²⁷₁₃Al → ³⁰₁₅P + X. Atomic masses: ⁴₂He 4.002603 u; ²⁷₁₃Al 26.981538 u; ³⁰₁₅P 29.978313 u; ¹₀n 1.008665 u; ¹₁H 1.007825 u. (a) Identify particle X. (b) Calculate the Q-value of the reaction in MeV. (c) State whether energy is released or absorbed. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 280 px): a coded α arrow striking a coded ²⁷Al nucleus, a ³⁰P cluster and an unlabelled particle "X?" leaving. Data-sheet chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing (both a neutron and a proton mass are listed).

### 15. feedback 1 (brief)
> The top numbers need one more, and the bottom numbers need zero more, so X is a **neutron**. Reactants total thirty point nine eight four one four one u, and products thirty point nine eight six nine seven eight u. So Q is minus zero point zero zero two eight three seven u, times nine three one point five, minus two point six four mega electron volts. Energy is **absorbed**. The slip is subtracting the wrong way round, and calling it **released**.

Visual: card shrinks to the top; "X", "Q-value" and "released or absorbed" underline; givens strip with the five masses and "931.5 MeV/c²"; the card's picture stays at the right. Revision 2 (brief 193 learning should-fix): each line arrives with its own spoken number. On "neutron" "(a) A: 4 + 27 = 30 + 1; Z: 2 + 13 = 15 + 0 → X = ¹₀n" (52 px), and the picture's "X?" becomes "n". On "thirty point nine eight four one four one u" "(b) m_reactants = 4.002603 + 26.981538 = 30.984141 u". On "thirty point nine eight six nine seven eight u" "m_products = 29.978313 + 1.008665 = 30.986978 u". On "minus zero point zero zero two eight three seven u" "Δm = 30.984141 − 30.986978 = −0.002837 u". On "minus two point six four mega electron volts" "Q = −0.002837 × 931.5 = −2.64 MeV" in a dark-ink frame (56 px); earlier lines dim. On "absorbed" "(c) Q < 0: energy absorbed (supplied by the alpha)" in a dark-ink frame. On "released" a chip "Q = +2.64 MeV, energy released" fades in and is crossed in red, red hand tag "before − after". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Explain why the Q value of a nuclear reaction doesn't depend on the kinetic energy of the incoming particle. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why the Q-value of a nuclear reaction does not depend on the kinetic energy of the incoming particle. (2 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 260 px): two coded α arrows of different lengths, slow and fast, approaching a ¹⁴N nucleus. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 17. feedback 2 (brief)
> Q is the difference in rest mass between the reactants and the products, times c squared. Those masses are fixed by which nuclei go in and come out. A faster projectile adds kinetic energy before, and the same extra kinetic energy appears after, so Q stays the **same**. The slip is thinking a faster alpha makes Q **bigger**.

Visual: card shrinks to the top; "does not depend" underlines; the two-alpha picture stays at the right. Lines write in turn (44 px): "Q = (m_reactants − m_products)c²: rest masses only"; "masses fixed by the nuclei involved"; on "same" "extra K_in → equal extra K_out (energy conservation); Q unchanged" in a dark-ink frame. On "bigger" a chip "faster alpha → bigger Q" fades in and is crossed in red, red hand tag "Q set by masses". Hold about 1 second.

### 18. handoff
> One artificial transmutation changed the world. A slow neutron hits uranium two three five, and it splits into barium one four one, krypton ninety two, and three neutrons. The products are lighter by zero point one eight six u, so Q is about one hundred and seventy three mega electron volts, from a single nucleus. And one neutron in gives three neutrons out. So why can one fission event trigger a controlled or uncontrolled **chain**?

Visual: board clears (camera change). On "A slow neutron hits uranium two three five" a grey "n" with a short teal arrow drifts into a large coded ²³⁵U nucleus at the centre. On "it splits" the nucleus stretches and splits into two mid-sized clusters labelled "¹⁴¹Ba" and "⁹²Kr" flying apart with teal arrows, and three grey "n" discs leaving. On "barium one four one, krypton ninety two, and three neutrons" the equation writes under it: "¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n" with tallies "236 = 236 ✓", "92 = 92 ✓". On "zero point one eight six u" a chip "Δm = 236.052595 − 235.866571 = 0.186024 u". On "one hundred and seventy three" a chip "Q = +173 MeV" with an orange arrow out, and a small grey tag "about 200 MeV in total, once the fragments decay". On "three neutrons out" the three neutrons' paths extend as dashed arrows towards three faint ²³⁵U nuclei at the right edge, each marked "?". On "chain" the chip "Next: why can one fission event trigger a controlled or uncontrolled chain?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 19. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Balance A and Z: ⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H.
2. Q = (m_reactants − m_products)c² = K_out − K_in.
3. Q > 0: energy out. Q < 0: projectile pays |Q| or more.
4. Atomic masses work when Z is conserved.
5. Q depends on masses only, not projectile speed.

Memory aid (framed card under the notes, hand lettering as in scene 13): *Q = mass before − mass after. Positive gives energy out; negative takes energy in.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why there is a Q (energy conservation with rest energy) (4); why negative Q means the projectile must pay (5, 9); why atomic masses work here (6); why the alpha needs more than |Q| (9); why speed doesn't change Q (10); why the products are heavier (less total binding) (11).
- **Misconceptions addressed:** subtracting the wrong way (15 crossed); a faster projectile raises Q (10, 17 crossed); every transmutation releases energy (8); mass simply "vanishes" (4: it becomes kinetic energy); atomic masses always wrong (6, contrasted with v16).
- **One idea at a time:** observation (2), equation (3), Q (4), sign (5), masses (6), totals (7), Q value (8), the alpha (9), speed (10), binding route (11), a positive case (12).
- **Video makes it easier:** flashes beyond the alpha range (2); the energy ledger with bars that must match (4, 5, 9, 10); electrons pairing off across the arrow (6); the balance tipping to the products (7, 8); stacked binding bars (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing (A1 lists both a neutron and a proton mass). One crossed mistake each; feedback about 34 s and 24 s.
- **Avoided double teaching:** mass defect, binding energy and 931.5 (v16), A and Z rules and spontaneous decay (v14), the beryllium reaction (v09), E = mc² (m7-v16) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ4-04`: conservation of mass-energy in artificial transmutation (4 to 12) and spontaneous alpha decay (5); fission introduced as an induced transmutation (18; v18 continues); fusion (v05, v19). `P8-IQ4-06`: energy released predicted by conservation of energy (4, 9, 10), mass defect (7, 8, 12, A1), binding energy (11) and E = mc² (4).
- **Out of scope by design:** chain reactions, moderators and control rods (v18); fusion conditions (v19); threshold kinematics beyond one tag (author note c).

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Alpha particles are fired at aluminium-27: ⁴₂He + ²⁷₁₃Al → ³⁰₁₅P + X. Atomic masses: ⁴₂He 4.002603 u; ²⁷₁₃Al 26.981538 u; ³⁰₁₅P 29.978313 u; ¹₀n 1.008665 u; ¹₁H 1.007825 u. (a) Identify particle X. (b) Calculate the Q-value of the reaction in MeV. (c) State whether energy is released or absorbed."
Model answer: (a) A: 4 + 27 = 30 + A_X, so A_X = 1; Z: 2 + 13 = 15 + Z_X, so Z_X = 0; X is a neutron, ¹₀n. (b) m_reactants = 4.002603 + 26.981538 = 30.984141 u; m_products = 29.978313 + 1.008665 = 30.986978 u; Δm = 30.984141 − 30.986978 = −0.002837 u; Q = −0.002837 × 931.5 = −2.64 MeV. (c) Q is negative: the products are heavier, so energy is absorbed (it must be supplied by the alpha's kinetic energy). Classic mistake (crossed): subtracting reactants from products, giving +2.64 MeV and "released".

**Attempt 2 (scene 16; original wording, HSC style, 2 marks).** "Explain why the Q-value of a nuclear reaction does not depend on the kinetic energy of the incoming particle."
Model answer: The Q-value is the difference between the rest masses of the reactants and the products, multiplied by c² (Q = (m_reactants − m_products)c²). These masses are fixed by the nuclei and particles involved. By conservation of energy, any extra kinetic energy brought in by a faster projectile reappears as extra kinetic energy of the products, so K_out − K_in, which equals Q, is unchanged. Classic mistake (crossed): "a faster alpha releases more energy, so Q increases".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | 1 u = 931.5 MeV/c²; c = 3.00 × 10⁸ m s⁻¹ | 4 to 18 |
| Atomic masses (AME2020, 6 d.p.) | ⁴He 4.002603; ¹⁴N 14.003074; ¹⁷O 16.999132; ¹H 1.007825; ⁹Be 9.012183; ¹²C 12.000000; n 1.008665; ²⁷Al 26.981538; ³⁰P 29.978313; ²³⁵U 235.043930; ¹⁴¹Ba 140.914403; ⁹²Kr 91.926173; ²¹⁰Po 209.982874; ²⁰⁶Pb 205.974465 u | 5 to 18 |
| Rutherford | 18.005677; 18.006957; Δm = −0.001280 u; Q = −1.1923 → −1.19 MeV (AME2020 unrounded −1.1919); site −0.001281 u, −1.193 MeV | 7, 8, 11 |
| Rutherford energies | threshold −Q(1 + 4/14) = 1.53 MeV; Coulomb barrier ≈ 4.2 MeV; K_in 7.69 MeV ("about seven point seven"); K_out = 6.50 ("about six point five") | 9 |
| Binding energies (AME2020) | ⁴He 28.296; ¹⁴N 104.659; sum 132.955 ("about one hundred and thirty three"); ¹⁷O 131.763 ("one hundred and thirty one point eight"); difference −1.192 → −1.19 (Revision 2: screen shows three decimals; 131.8 − 133.0 would be −1.2) | 11 |
| Scene 10 slider (Revision 2) | K_out = K_in + Q with Q = −1.1923: K_in 5.0, 7.7, 9.0 MeV gives 3.81, 6.51, 7.81 MeV (scene 9's 7.69 gives 6.50) | 10 |
| Po-210 | Δm = 0.005806 u; Q = 5.408 → 5.41 MeV (site 0.005807, 5.41) | 5 |
| Chadwick's source reaction | 13.014786; 13.008665; Δm = 0.006121 u; Q = 5.7017 → 5.70 MeV; with 5.30 MeV alphas K_out = 11.0 MeV | 12 |
| A1 (Curie and Joliot, 1934) | 30.984141; 30.986978; Δm = −0.002837 u; Q = −2.6427 → −2.64 MeV; wrong sign +2.64 | 14, 15 |
| Fission | 236.052595; 235.866571; Δm = 0.186024 u ("zero point one eight six"); Q = 173.28 → 173 MeV; about 200 MeV total including fragment decays | 18 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `nuclear.py` and an inline check in the session scratchpad folder `m8v12-17-designer`) with AME2020 atomic masses; Codex to re-check.

- 4.002603 + 14.003074 = 18.005677; 16.999132 + 1.007825 = 18.006957; difference −0.001280; × 931.5 = −1.1923.
- −1.1923 × (1 + 4.0026/14.0031) = 1.533 MeV (threshold); 1.44 × 14 / (1.2 × (4^(1/3) + 14^(1/3))) = 4.20 MeV (barrier); 7.69 − 1.19 = 6.50.
- BE(⁴He) = 28.296, BE(¹⁴N) = 104.659, BE(¹⁷O) = 131.763 MeV; 131.763 − 132.955 = −1.192 (unrounded −1.191882, brief 193).
- Revision 2 (Python, 7 Nov): 5.0 − 1.1923 = 3.81; 7.7 − 1.1923 = 6.51; 9.0 − 1.1923 = 7.81; 131.8 − 133.0 = −1.2.
- 209.982874 − 205.974465 − 4.002603 = 0.005806; × 931.5 = 5.408.
- 4.002603 + 9.012183 = 13.014786; 12.000000 + 1.008665 = 13.008665; 0.006121 × 931.5 = 5.7017; 5.30 + 5.70 = 11.00.
- 4.002603 + 26.981538 = 30.984141; 29.978313 + 1.008665 = 30.986978; −0.002837 × 931.5 = −2.6427.
- 1.008665 + 235.043930 = 236.052595; 140.914403 + 91.926173 + 3 × 1.008665 = 235.866571; 0.186024 × 931.5 = 173.28.

## Memory aid check

- **"Q is mass before minus mass after. Positive Q gives energy out; negative Q takes energy in."** Meaning, as said in scene 13: the order of subtraction fixes the sign, and the sign says the direction of energy flow. Assumptions checked: masses must be consistent (atomic with Z conserved, or nuclear throughout; scene 6); "before" means all reactants including the projectile; "energy in" means the projectile's kinetic energy must at least cover |Q| (scene 9 adds "more in practice"). It targets A1's crossed mistake. Introduced after both worked cases (8, 12).
- **Considered, not used:** "lighter products, light up" (rhymes poorly in TTS and hides the subtraction order).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,908 characters**, 19 scenes. Characters per scene (1 to 19): 323, 332, 323, 362, 388, 291, 405, 333, 359, 264, 376, 372, 132, 243, 439, 140, 318, 433, 75. At 13.3 characters per second the speech is about 444 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 10 slider runs under its narration): **about 510 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 5,926 characters by the inter-scene convention (5,908 scene sum), about 527 s. Reserve trims if the voiced take runs long: scene 11 (open decision 2); scene 5's Po-210 sentence (keep the chip); scene 7's spoken six-decimal masses (say the totals only, keep the givens on screen).

## Opening frame

v16's final frame (designed in this wave, `phys-y12-m8-v16.md`): paper background; heading "How does missing mass measure nuclear binding energy?"; at the left the coded binding-energy-per-nucleon curve (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9) with an amber arrow rising on the left side and a teal arrow rising up and to the left from the heavy end, both towards the peak near iron (v16 Revision 2, brief 193), and labelled points "⁴He", "¹⁴N", "¹⁷O"; name tag "Rutherford, 1919"; at the right an amber "α" arrow striking a coded ¹⁴N nucleus (7 red, 7 grey discs); under it the equation "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H" with a chip "Q = ?" and an orange energy bar with "+?" and "−?" ends; chip "Next: what determines the energy released in an artificial transmutation?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 18, before the key-notes board), for v18 to open on: paper background; heading "What determines the energy released in an artificial transmutation?"; at the left a grey neutron disc "n" with a short teal arrow, drawn at the point where it entered; at the centre the two fission fragments as mid-sized red-and-grey disc clusters labelled "¹⁴¹Ba" (upper) and "⁹²Kr" (lower), moving apart with teal speed arrows, and three grey neutron discs "n" leaving the split point with dashed arrows that run to three faint, larger red-and-grey disc clusters labelled "²³⁵U" at the right edge, each marked "?"; under the centre the equation "¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n" with tallies "236 = 236 ✓" and "92 = 92 ✓"; beside it a chip "Δm = 236.052595 − 235.866571 = 0.186024 u", a chip "Q = +173 MeV" with an orange arrow pointing out of the reaction, and a small grey tag "about 200 MeV in total, once the fragments decay"; chip "Next: why can one fission event trigger a controlled or uncontrolled chain?". No reactor, moderator or control rods are shown. v18 opens on this frame (open decision 3).

## Scene list and build ids

Lesson key `p-y12-m8-v17` (route phys-y12-m8-v17). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v17` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v17` (root to confirm).

In order (kebab-case; 19 scene headings, all `### N.`): hook, rutherford-observation, balance-equation, q-from-energy, sign-of-q, which-masses, rutherford-masses, rutherford-q, alpha-energy, q-fixed, binding-route, positive-reaction, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: range test, energy ledger, reaction balance, binding bars, nuclear equation builder (v14), `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change to the ledger; 4 to 5 camera continue; 5 to 6 clear change (the equation returns); 6 to 7 camera continue (working layout); 7 to 8 camera continue; 8 to 9 clear change; 9 to 10 camera continue (the ledger gains its live slider); 10 to 11 clear change; 11 to 12 clear change; 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 clear change; 18 to 19 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v17-learning-review.md`, `science_check` = `checks/p-y12-m8-v17-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/y12p-po-be-source-v1.png` (1920 × 819, RGBA; delivered at native size by root decision 17; inspected 7 Nov: a source holder with a polonium disc and a larger beryllium disc, which root decision 18 accepts for a schematic source): 12.
- **Checked, not used:** `y12p-alpha-scattering-chamber-v1.png` (v08; a vacuum scattering chamber with a gold foil, not Rutherford's 1919 gas-filled box; reusing it would merge two experiments); `y12p-lead-bricks-v1.png` (not needed).

Need: no new plates (open decision 1 notes a possible chamber plate).

Coded: the schematic chamber, alpha tracks, scintillation flashes, nuclei and discs, equations and tallies, electrons, the energy ledger, the reaction balance, binding bars, the binding curve, fission fragments and neutrons, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v17 build brief):
1. **Energy ledger.** Two stacked bars (rest energy and kinetic energy) constrained to equal totals, with a set rest-energy step that transfers to kinetic energy (positive Q) or from it (negative Q), and optional labelled values.
2. **Fission split.** A large disc cluster that stretches and splits into two set clusters with neutrons leaving along set paths (shared with v18's opening).

## Codex asset brief

No new plates. Revision 2: `y12p-po-be-source-v1.png` is delivered (root decision 17).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the scintillations beyond the alpha range; the balanced equations; Q from conservation of energy with rest energy; the sign of Q; spontaneous decays always have positive Q; electrons cancel when Z is conserved (author note a); the alpha needing more than |Q| (momentum, repulsion; author note c); Q independent of projectile speed; the binding-energy route; the fission Q and the 200 MeV tag (author note e).
3. Confirm the conversion is displayed as on the HSC data sheet: 1 u = 931.5 MeV/c².
4. Confirm the history: Rutherford 1919 (nitrogen, protons; oxygen-17 identified 1925, author note d); Chadwick's polonium-beryllium source (v09); A1's reaction (Curie and Joliot 1934, not named in learner copy).
5. Confirm the memory aid's assumptions (see "Memory aid check").
6. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
7. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
8. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
9. Confirm no person, hand, face or body outline is drawn or requested (the chamber's eyepiece is drawn as a tube with no viewer); scientists are named in text only.
10. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
11. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Report site notes 8 to 10 under Decisions to root.
13. Confirm the "Final frame" description is passed unchanged to v18's designer.

## YouTube metadata (draft)

Title: Q-Value of Nuclear Reactions: Rutherford's Transmutation of Nitrogen | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson15.sa.html

In 1919 Rutherford turned nitrogen into oxygen with alpha particles. Did the reaction give out energy or take it in? Derive the Q-value from conservation of energy, see why atomic masses work when charge is conserved, calculate Rutherford's Q = −1.19 MeV and Chadwick's +5.70 MeV, and find out why a faster projectile can't change Q. Then see the Q-value of uranium-235 fission. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse relationships that represent conservation of mass-energy in spontaneous and artificial nuclear transmutations, including alpha decay, beta decay, nuclear fission and nuclear fusion (ACSPH032)"
"predict quantitatively the energy released in nuclear decays or transmutations, including nuclear fission and nuclear fusion, by applying: (ACSPH031, ACSPH035, ACSPH036)
- the law of conservation of energy
- mass defect
- binding energy
- Einstein’s mass–energy equivalence relationship E = mc²"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how missing mass measures nuclear binding energy. Next: why one fission event can trigger a controlled or uncontrolled chain.

#HSCPhysics #Physics #NuclearReactions #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 193's findings are resolved below; needs the Codex error check before plates and voicing. The final frame is unchanged (root decision 9), so v18's opening holds.
- Revision 1 had no independent review. Next: student learning review (trace from v16 and v14; check that the ledger makes Q's derivation followable at speed; that the six-decimal masses in scene 7 are not read aloud too slowly (reserve trim); that scene 9's three reasons fit one scene; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The flashes beyond the alpha range, the ledger bars and the balance tipping to the products carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 193 findings (`checks/p-y12-m8-v17-learning-review.md`, `checks/p-y12-m8-v17-science-check.md`): 0 blockers, 2 should fix.
- **Should fix, scene 15 cues (learning).** Resolved: the reactant total, product total, Δm and Q now arrive on their own spoken numbers ("thirty point nine eight four one four one u", "thirty point nine eight six nine seven eight u", "minus zero point zero zero two eight three seven u", "minus two point six four mega electron volts"), with (c) on "absorbed". The short feedback and the crossed wrong-sign answer are kept. No speech change.
- **Should fix, displayed equality (scene 11, science).** Resolved: the binding stacks show three decimals (28.296 + 104.659 = 132.955 MeV; 131.763 MeV) and "131.763 − 132.955 = −1.19 MeV = Q ✓", with a small tag "one decimal gives ≈ −1.2". The narration's rounded values and Q are unchanged; no re-voicing.
- Join repair carried from v16 (brief 193 science): the opening frame's teal fission arrow now rises up and to the left towards the peak.

Audit item: key notes at six items (`checks/visual-standard-audit-chem-y11-phys-y12.md`, "Physics key notes at exactly 6 items") cut to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plate in scene 1: none fits (root decision 11 keeps the 1919 chamber coded; the alpha-scattering chamber plate is a different experiment). The delivered Po-Be source carries scene 12 at about 640 px wide.
- Live control: the energy ledger's K_in slider in scene 10 with K_in, Q and K_out readouts (Q stays −1.19 MeV while K_out follows K_in).
- Hand tags and a pen mark in role colours in every teaching scene ("more KE in → more out?", "beyond the alpha range!", "top 18 = 18", "bottom 9 = 9", "mass drop → KE", "before − after", "projectile must supply it", "9 = 9", "products heavier", "K_out = K_in + Q", "K_out bigger", "same Q", "less total binding → heavier → Q < 0", "products lighter: energy out").
- Framed answers: the equation (3), Q = (m_reactants − m_products)c² (4), the atomic-mass chip (6), −1.19 MeV (8), 6.5 MeV (9), "Q: set by masses only" (10), the binding check (11), +5.70 MeV (12), the A1 Q and (c) lines (15), the A2 line (17). New crossed slip: "Q = −0.00128 MeV" (8, forgot × 931.5); A1 and A2 keep theirs.
- The memory line in scene 13 writes as the framed card reused on the notes screen.
- Question cards arrive with full text and a picture; answer sides add a givens strip.
- Type sizes stated; colour roles fixed. No set-up runs past about 77 s.

New plate requests: none.

Joins: the opening frame is v16's final frame as revised in v16 Revision 2 (both arrows rise towards the peak). The final frame (scene 18) is unchanged, as root decision 9 requires, so v18 opens on it.

Counts: 5,908 to 5,908 characters (scene sum; Revision 1's headline 5,926 used the inter-scene convention); about 527 s to about 510 s.
