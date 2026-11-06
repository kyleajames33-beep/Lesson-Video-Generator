# Year 12 Physics M8 V07: Discovering the electron. How did cathode rays and oil drops reveal the electron? (design)

Status: Revision 2 (7 Nov 2026): brief 192 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,075 characters, 18 scenes, about 523 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v06's Revision 2 final frame (see "Opening frame").

Scope: seventh video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that atoms are made up of protons, neutrons and electrons?". Templates as `phys-y12-m7-v10.md`; `math-a12-d10.md` for the calculation layout; `bio-y11-fa1-v05.md` for plates. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson11.sa.txt`, hash checked against the live file): lesson 11, orient and predict (gold-foil prediction, warm-up, intentions, vocabulary: cathode rays, charge-to-mass ratio, elementary charge, neutron), "read-the-geiger-marsden-evidence", "calculate-closest-approach" (beyond the syllabus), "compare-thomson-and-rutherford", "explain-cathode-ray-evidence" (four properties, wave-versus-particle debate, universality, Figure 4, Stop and check), "measure-the-electron" (Thomson's two stages, 1.76 × 10¹¹ C/kg, Millikan's balance, quantisation, m_e = e ÷ (e/m), Figure 5, Stop and check), "find-the-neutron", apply and consolidate (Activities 1 and 2, "Assess 7 marks", "Analyse 6 marks" on Thomson and Millikan), independent practice, reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson11.sa.html`, SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v07`, sections `explain-cathode-ray-evidence`, `measure-the-electron`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Separate cathode-ray evidence, Thomson e/m and Millikan charge measurement; combine them for electron mass. Keep apparatus fields and forces explicit." Next: "phys-y12-m8-v08: Why did scattering require a tiny dense nucleus?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only; the microscope eyepiece is drawn without an observer); the Maltese-cross tube, the paddle-wheel tube and wheel, the Millikan plates, the atomiser, the high-voltage supply, the oil drop and the balance are painted plates (the brief 192 apparatus delivered by root decision 17, three reused; all inspected 7 Nov), scaled uniformly, never stretched; Thomson's deflection tube is the coded-outline CRT recorded in Module 6 (the painted `y12p-crt-tube-v1.png` is held; see Decisions "Thomson's tube"); field lines, crosses, forces, beams, number lines and calculation strips are coded, HSC style; every number recalculated in Python with e = 1.602 × 10⁻¹⁹ C, m_e = 9.109 × 10⁻³¹ kg, m_p = 1.673 × 10⁻²⁷ kg and g = 9.8 m s⁻²; data-sheet symbols F = qE, E = V/d, F = qvB sin θ; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: Module 6 v01 (E = V/d, F = qE, the balanced oil drop qE = mg), v02 (a charged particle's projectile-like path between plates, y = ½at²), v06 (the velocity selector, v = E/B), Module 7 colour conventions (electrons navy), v06 of this module (stars made the elements; assumed).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ2-01`), quoted from the route JSON `syllabusActions`:

- `P8-IQ2-01`: "investigate, assess and model the experimental evidence supporting the existence and properties of the electron, including:"
  - "early experiments examining the nature of cathode rays"
  - "Thomson’s charge-to-mass experiment"
  - "Millikan's oil drop experiment (ACSPH026)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v06's final frame (the element strip, one plain gold atom, the painted Maltese-cross tube with its glow off, chip to this question). Teaches: the cathode ray tube (evacuated tube, cathode, anode, glow); the wave-versus-particle debate; the early evidence (sharp shadow, paddle wheel as a weak hint, magnetic deflection, Hertz's 1883 null result for electric deflection); Thomson's 1897 electric deflection with a better vacuum (negative charge) and universality across gases and cathode metals; Thomson's two stages (balanced crossed fields give v = E/B; electric field alone gives a measured sideways deflection and q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹); what the large ratio meant (about 1840 times the hydrogen ion's); Millikan's balanced drop (qE = mg, mass from falling speed), a worked negative drop (q = −2e), quantisation of charge and the elementary charge; combining the results for m_e = 9.10 × 10⁻³¹ kg (a proton about 1836 times heavier). Ends on Thomson's plum-pudding guess as the handoff. Stops before alpha scattering and the nucleus (v08).

## Decisions

- **Learner question (route wording kept).** "How did cathode rays and oil drops reveal the electron?" The answer, built in order: cathode rays were a mystery stream from the cathode (2); early evidence split between wave and particle (3); Thomson's better vacuum showed electric deflection towards the positive plate, so negative particles common to all matter (4); his balanced and unbalanced fields gave their charge-to-mass ratio, huge, so very light (5 to 7); Millikan's balanced drops gave the charge and showed it comes in packets of e (8 to 10); dividing gives the mass (11).
- **Hook (new, surprise question).** "How do you weigh something far too small to see?" with the reused top-pan balance plate showing "?" on its display: the video's answer is "with two experiments, and neither alone". The site's own hook (gold-foil prediction) belongs to v08.
- **Early evidence (site "explain-cathode-ray-evidence", four properties).** The site's four properties are kept (straight lines, field deflection, energy and momentum, deflected towards positive). Two changes, both for causal clarity: (a) the debate is told as a test that first failed (Hertz, 1883, no electric deflection) and then succeeded (Thomson, 1897, better vacuum), because "deflected by electric fields" is only convincing once students see why it was once missed; (b) the paddle wheel is shown as a weak hint, following the site's own caution (site note 1). Hertz and Thomson are named in words only.
- **Thomson's tube (Revision 2, brief 192 finding 3).** The painted `y12p-crt-tube-v1.png` is held (brief 189: three candidates failed the plate geometry). Root's Module 6 decision after briefs 189 and 190 makes the brief 189 coded-outline CRT the recorded design when the retry fails, and then it is not a missing plate at the build gate. Revision 2 therefore uses: the delivered painted Maltese-cross tube (`y12p-maltese-cross-tube-v1.png`) as the cathode ray tube in scenes 1 and 2 and the shadow cell of 3; the delivered paddle-wheel tube and wheel in 3; and the Module 6 coded-outline CRT (HSC-style: gun, one pair of plates 5.0 cm long and 2.0 cm apart, screen) for Thomson's deflection in 3 (cells 3 and 4) to 6, beside the painted EHT supply. Open decision 4 asks root to confirm or to accept a held CRT candidate under decision 17.
- **Thomson's method (site "measure-the-electron", two stages; Figure 5 left).** Stage 1 is the Module 6 v06 velocity selector, recalled in one sentence (field and force directions drawn explicitly, as the route stop asks). Stage 2 follows the site's order (remove B, measure the electric deflection) and makes it quantitative with Module 6 v02's projectile model: t = L/v, a = qE/m, y = ½at², so q/m = 2yv²/(EL²). The tube numbers are illustrative and labelled so (plates 5.0 cm long and 2.0 cm apart, as in m6-v02; 300 V gives E = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; y = 5.28 mm), chosen so the result is the site's 1.76 × 10¹¹ C kg⁻¹ (author note a).
- **Magnetic-radius alternative (considered, not used).** Many textbooks finish Thomson's measurement with r = mv/qB in B alone. The site uses the electric deflection, and so does this design; the key notes do not mention the radius method. Root may add one line if the learning review asks (open decision 3).
- **What the ratio meant.** The site says "far larger than ... a hydrogen ion"; the design gives the factor with data-sheet values (e/m_e ÷ e/m_p = 1836.6, said "about eighteen hundred times") and the site's two-way inference (huge charge or tiny mass).
- **Millikan (site Figure 5 right, "Analyse 6 marks" steps 3 and 4).** Balance qE = mg recalled from m6-v01 (scene 8 there showed the same balance); one added clause says the drop's mass came from its falling speed (author note b). Worked drop (new, original numbers): 1.96 × 10⁻¹⁵ kg, plates 1.0 cm apart, 600 V: E = 6.0 × 10⁴ V m⁻¹, |q| = mg/E = 3.20 × 10⁻¹⁹ C; the drop is negative (the field points down and the force is up), so q = −3.20 × 10⁻¹⁹ C = −2e, two excess electrons (Revision 2: magnitude and sign kept apart; e stays the positive elementary charge). Quantisation is shown as a number line of drop charges clustering on multiples of e (illustrative values, labelled).
- **Combining (site "Stop and check, worked idea").** m_e = e ÷ (e/m) with data-sheet e: 1.602 × 10⁻¹⁹ ÷ 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg (the data sheet gives 9.109 × 10⁻³¹ kg; the small gap is the rounded ratio). The site's 1/1836 comparison kept.
- **Memory aid (scene 12): "Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a balanced negative drop (4.9 × 10⁻¹⁵ kg, 1.0 cm, 1000 V): |q| = 4.80 × 10⁻¹⁹ C, so q = −4.80 × 10⁻¹⁹ C, three excess electrons. Crossed: using V for E (charge 100 times too big). A2 (3 marks, explain): why Thomson alone could not give m_e and how Millikan solved it (the site's "Analyse 6 marks" logic in brief). Crossed: "Thomson measured the electron's mass".
- **Handoff (route next).** Scene 17 ends on Thomson's plum-pudding model (a pale positive sphere with navy electrons dotted through it, tag "Thomson's guess") with a coded alpha particle arrow approaching it and "?"; chip "Next: why did scattering require a tiny dense nucleus?". See "Final frame".
- **Colour key (Module 6 and 7 keys):** electric field blue (from + to −); magnetic field slate crosses (B into page); electric force amber; magnetic force rose; velocity teal; electrons navy dots; cathode rays a pale green coded beam inside the tube (the glow colour is the glass, tag "glow"); oil drop as the reused yellow drop plate; positive charge pale red in the plum-pudding model (scene 17 only).
- **Colour key (Revision 2, fixed for every scene).** As above. Weight mg purple; charge q and e navy (with a "−" sign on negative drops); voltage V and the slider red; deflection y and lengths L, d ink brackets; framed answers in a dark-ink box; crossed chips and their hand tags red. The tube glow is the pale green of fluorescing glass (about 520 to 550 nm, true to the colour seen). Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 5, 6, 9 and 11 stages and feedback rows 52 px; framed answers 56 px); live readouts (the Millikan slider's V, E, qE and mg; the balance display) about 52 px; apparatus labels, chips and the charge axis 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v06's final frame with the painted Maltese-cross tube is the anchor; the top-pan balance with "? kg" is the question, answered in scene 11. Painted plates carry the teaching scenes: the Maltese-cross tube (1 to 3), the paddle-wheel tube and wheel (3), the EHT supply (2, 4 to 6, 8), the Millikan plates, atomiser and oil drop (8, 9, A1 card), the balance (1, 11). All glass tubes sit on the cream ground, never on navy (root decision 18).
- **Simulation (Revision 2).** The core live control is the Millikan voltage slider in scene 8: a red slider on the supply sets V, and live readouts show V, E = V/d, the electric force qE and the weight mg, while the drop's velocity arrow shows it rising, falling or held (Python, m = 1.96 × 10⁻¹⁵ kg, |q| = 2e, d = 1.0 cm: mg = 1.92 × 10⁻¹⁴ N; V = 0, 300, 600, 900 V give E = 0, 3.0 × 10⁴, 6.0 × 10⁴, 9.0 × 10⁴ V m⁻¹ and qE = 0, 0.96 × 10⁻¹⁴, 1.92 × 10⁻¹⁴, 2.88 × 10⁻¹⁴ N: falls, falls slower, held, rises). Scene 5's crossed-field balance (the beam straightening as B is tuned) and scene 10's charge axis are the other live elements.
- **Board stages (Revision 2).** Every scene has its own stage: the opening tube and balance (1), the Maltese-cross tube large (2), the evidence grid (3), the coded CRT with the supply (4), the crossed-field stage (5), the B-off stage with full-width working (6), the ratio bars (7), the Millikan bench with the live slider (8, 9, about 54 s), the charge axis (10), the combination with the balance (11). No set-up runs past about 60 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the painted Millikan plates with one painted oil drop held in the gap, a "−" sign beside it, no values on the picture; A2: the coded CRT outline and the painted Millikan plates side by side). On the answer side the card shrinks to the top, a givens strip lists the data (A1: "m = 4.9 × 10⁻¹⁵ kg; d = 1.0 cm; V = 1000 V; g = 9.8 m s⁻²; e = 1.602 × 10⁻¹⁹ C"; A2: "Thomson: e/m; Millikan: e"), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 11: vocabulary (cathode rays, charge-to-mass ratio, elementary charge) (2, 5, 10); "explain-cathode-ray-evidence" (four properties, debate, universality, Figure 4) (2 to 4); "measure-the-electron" (two stages, 1.76 × 10¹¹, Millikan's balance, quantisation, m_e, 1/1836, Figure 5) (5 to 11); "Analyse 6 marks" (independent constraints on two unknowns) (11, A2); Stop and check questions (3, A2). Not used: closest approach (beyond the syllabus; v08 does not use it either), the module 6 interactive link.
- **Site notes (quoted from site lesson 11, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Internal contradiction ("explain-cathode-ray-evidence"): the card first says the paddle-wheel spin "can also arise from heating of the residual gas, so it is suggestive rather than decisive", then says "The deflection by electric and magnetic fields, together with the paddle-wheel momentum transfer, decided the matter in favour of particles". Suggest: "The deflection by electric and magnetic fields, the charge-to-mass measurement and the universality of the particle decided the matter; the paddle wheel was only suggestive."
  2. Historical precision ("measure-the-electron"): "Thomson's result was a charge-to-mass ratio of about 1.76 × 10¹¹ C/kg". 1.76 × 10¹¹ C kg⁻¹ is the modern value; Thomson's 1897 values were of the same order but less precise. Suggest "Thomson's result was of the order of 10¹¹ C/kg; the modern value is 1.76 × 10¹¹ C/kg." (Science check to confirm Thomson's 1897 figures.)
  3. Historical precision ("measure-the-electron"): "By repeating this for thousands of droplets". Millikan's 1913 paper reported results for 58 drops (from a larger number observed). Suggest "By repeating this for many droplets". (Science check to confirm.)
  4. Constants (minor): the lesson uses e = 1.6 × 10⁻¹⁹ C and gives m_e as "9.1 × 10⁻³¹" in the card and "9.11 × 10⁻³¹" in "Analyse 6 marks". Suggest the data-sheet e = 1.602 × 10⁻¹⁹ C, which gives 9.10 × 10⁻³¹ kg from the rounded ratio (data sheet 9.109 × 10⁻³¹ kg).
  5. Checked and correct: m_e ≈ 9.1 × 10⁻³¹ kg from the site's 1.6 and 1.76 values (9.09 × 10⁻³¹); "roughly 1/1836 of a proton's mass" (1836.6 with data-sheet masses); the crossed-field directions in Figure 5 (+ plate above, B into page: F_E up and F_B down on an electron).
- **Cause chain taught, in order:** (1) a high voltage across a near-vacuum tube sends something from the cathode that makes the glass glow (2); (2) straight shadows fit both models; a magnet's bending suggests charge (3); (3) a good vacuum lets an electric field act, and the beam bends towards the positive plate, so the particles are negative; the same particles appear for every gas and metal, so they are in all matter (4); (4) balancing qE against qvB fixes the speed (5); (5) with B off, the measured sideways deflection fixes q/m (6); (6) the ratio is huge, so the particles are very light or very highly charged (7); (7) balancing qE against mg gives a drop's charge, and every charge is a whole number of e (8 to 10); (8) dividing e by e/m gives m_e (11).
- **Entry knowledge (route `entryKnowledge`):** Module 6 (E = V/d, F = qE, F = qvB, the velocity selector, the projectile-like path between plates, qE = mg for a held drop); Year 11 (atoms and the elements, charge, weight mg).
- **Learner-visible vocabulary (plain meaning at first use):** cathode, anode (2); cathode rays (what streams from the cathode, 2); vacuum (almost no air, 2); charge-to-mass ratio (charge divided by mass, 5); elementary charge e (the smallest packet of charge, 10); quantised (comes only in whole packets; said as "comes in packets", 10); electron (7).
- **Legacy logic ported:** none.
- **New explainer motion:** **tube stage** (painted tube with a coded beam, glow spot, plates, field lines and crosses that switch on and off, forces drawn on a beam marker); **number line of charges** (dots dropping onto a charge axis and snapping to multiples of e); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the tube or the plates at centre left; forces and chips on the right; algebra lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Illustrative Thomson numbers: E = 300 V / 0.020 m = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; v = 2.5 × 10⁷ m s⁻¹; L = 0.050 m; t = 2.0 × 10⁻⁹ s; with the true e/m_e the deflection would be 5.276 mm; the design quotes 5.28 mm, which gives 1.76 × 10¹¹ C kg⁻¹ exactly. The beam starts on the centre line, so 5.28 mm stays inside the 10 mm half-gap. Thomson's own tube and numbers differed; his stage 2 measured the electric deflection as on the site.
  (b) Millikan found each drop's mass from its terminal speed in air (Stokes' law, with the oil's density). HSC questions give the mass, so the method is one clause.
  (c) Hertz (1883) saw no electric deflection because residual gas in his tube was ionised and screened the plates; Thomson (1897) succeeded with a better vacuum. Perrin (1895) had also collected negative charge from cathode rays; not mentioned, to keep the story to one test.
  (d) "About eighteen hundred times bigger than for a hydrogen ion": e/m_e ÷ e/m_p = m_p/m_e = 1836.6 with data-sheet masses. Thomson's own comparison (with his less precise ratio) was "about a thousand times"; the narration uses modern values and says so on screen.
  (e) Pronunciations: "J J Thomson" (jay jay TOM-son); "Millikan" (MIL-i-kan); "Hertz" (hurts); "q over m".
  (f) Signed charge (Revision 2, brief 192 finding 1). e = 1.602 × 10⁻¹⁹ C is the positive elementary charge. qE = mg balances magnitudes, so mg/E gives |q|; the sign comes from the directions (field down, force up, so the drop is negative). Worked drop q = −3.20 × 10⁻¹⁹ C (−2e); A1 q = −4.80 × 10⁻¹⁹ C, three excess electrons. The charge axis in scene 10 shows magnitudes |q|.
- **Open decisions for root:**
  - **1. Four new plates (Codex).** `y12p-maltese-cross-tube-v1`, `y12p-paddle-wheel-tube-v1` (with `y12p-paddle-wheel-v1`), `y12p-millikan-plates-v1` and `y12p-atomiser-v1`: delivered by root decision 17 and inspected (Revision 2). No fallbacks needed.
  - **2. v06 join (reconciled by root, 6 November; Revision 2).** v07 opens on v06's Revision 2 final frame, which holds the painted Maltese-cross tube (glow off) at the right; scene 1 slides it left and switches the glow on.
  - **4. Thomson's tube (Revision 2).** The coded-outline CRT is used for scenes 3 to 6 under root's Module 6 decision (Decisions "Thomson's tube"). If root instead accepts a held brief 189 CRT candidate under decision 17, it must register with the 5.0 cm plates, 2.0 cm gap and screen geometry before it replaces the outline.
  - **3. Thomson stage 2 (learning review).** Keep the quantitative deflection step (scene 6) or cut it to one sentence with the result if the voiced take runs long; the magnetic-radius method stays out unless the review asks for it.

Main question: *How do you find the mass of a particle far too small to see?*
Entry knowledge: E = V/d, F = qE, v = E/B, projectile path between plates, qE = mg (Module 6).
Stops after: cathode-ray evidence, Thomson's e/m, Millikan's e and quantisation, m_e from both. No alpha scattering or nucleus.
Handoff: v08, why scattering required a tiny dense nucleus.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *q*, *m*, *e*, *E*, *B*, *v*, *y*, *L*.

### 1. hook (weighing the invisible)
> Last time, stars built the elements. But what is an atom of those elements made of? For most of the eighteen hundreds, an atom was pictured as the smallest piece of matter, with nothing inside. Then a strange glow in sealed glass tubes led to something far smaller. Here's the puzzle. How do you weigh something far too small to see? It took two experiments, and neither could do it alone. So how did cathode rays and oil drops reveal the **electron**?

Visual: opens on v06's Revision 2 final frame exactly (`phys-y12-m8-v06.md` "Final frame": element strip, a plain gold atom with no structure, the painted Maltese-cross tube `y12p-maltese-cross-tube-v1.png` with its glow off at the right and the grey hand tag "glass tube, no glow yet", "Next" chip); first beat: the hand tag fades. On "stars built the elements" the element strip pulses once; the chip becomes the heading: "How did cathode rays and oil drops reveal the electron?". On "what is an atom of those elements made of?" the single atom grows to the centre as a plain sphere (gold tint fading to grey). On "the smallest piece of matter" tag "1800s: atom = smallest piece, nothing inside?". On "a strange glow in sealed glass tubes" the Maltese-cross tube already at the right slides to the left (about 700 px wide) and a pale green coded glow appears on its wide end, green hand tag "glow!". On "How do you weigh something far too small to see?" the reused balance plate `phys-y11-top-pan-balance-v1.png` (about 340 px) appears at the right, its coded display reading "? kg" (52 px), ink pen ring round the display. On "two experiments" two empty chips "experiment 1" and "experiment 2" appear under the balance. On "electron" the heading underlines "cathode rays" and "oil drops".

### 2. the cathode ray tube
> Pump almost all the air out of a glass tube, and put a high voltage across two metal electrodes inside it. The negative electrode is the cathode, and the positive one is the anode. Something streams away from the cathode, and where it hits the far end, the glass glows. Nobody could see it, so it was called cathode **rays**. Were they a wave, like light, or a stream of tiny charged **particles**? Physicists argued for years.

Visual: board change: the painted Maltese-cross tube large, side-on (about 1100 px wide, on the cream ground, solid from the first frame). On "Pump almost all the air out" a coded pressure tag "almost a vacuum". On "a high voltage" the reused high-voltage supply plate `phys-y11-eht-supply-v1.png` at the lower left with coded leads to the tube's pins. On "the cathode" label arrow "cathode (−)" to the disc at the narrow end; on "the anode" label arrow "anode (+)" to the metal cross (coded lead to its stand). On "Something streams away from the cathode" a faint coded beam (no particles drawn, a dashed grey line with "?") runs along the axis. On "the glass glows" the screen end glows pale green, tag "glow". On "rays" tag "cathode rays: what streams from the cathode". On "particles" two chips appear at the right: "wave, like light?" (grey) and "charged particles?" (navy dots). Marks (Revision 2): green hand tag "the glass glows, not the rays" with a green pen ring round the glow; grey hand tag "invisible stream".

### 3. early evidence: a shadow, a wheel, a magnet, no bend
> Some evidence fitted both ideas. A metal cross in the beam casts a sharp **shadow**, so the rays travel in straight lines, like light. A tiny paddle wheel in the beam turns, but warm leftover gas can turn it too, so that's only a **hint**. A magnet bends the beam, which points to charge. But in eighteen eighty three, Heinrich Hertz sent the beam between charged plates and saw no bend at **all**, which seemed to favour waves.

Visual: a two-by-two evidence grid on the right; each cell lights in turn. On "A metal cross in the beam" the painted Maltese-cross tube `y12p-maltese-cross-tube-v1.png` (the same tube, about 440 px) moves into cell 1; on "shadow" a coded sharp cross-shaped shadow forms on its glowing end, tag "straight lines" (both chips tick). On "A tiny paddle wheel" the painted paddle-wheel tube `y12p-paddle-wheel-tube-v1.png` (about 440 px wide) in cell 2, its wheel layer `y12p-paddle-wheel-v1.png` rolling along its rails (coded rotation about the wheel's actual hub, root decision 18); on "warm leftover gas" a small grey heat shimmer tag "heating can do this too"; on "hint" the cell gets a grey tag "weak evidence". On "A magnet bends the beam" cell 3: the coded-outline CRT (Decisions "Thomson's tube") with a slate cross grid over the plate region and the beam curving; the "charged particles?" chip gains a tick. On "charged plates" cell 4: coded plates "+" and "−" with blue field lines; on "all" the beam goes straight through, tag "Hertz, 1883: no bend"; the "wave, like light?" chip gains a tick. Marks (Revision 2): ink hand tag "straight lines" with an ink pen ring round the cross's shadow; grey hand tag "weak: heat can do it"; rose hand tag "magnet bends it"; blue hand tag "no bend?" with a blue pen bracket round the plates.

### 4. Thomson's better vacuum
> In eighteen ninety seven, J J Thomson repeated that test with a much better vacuum, and the beam bent towards the positive **plate**. The leftover gas in Hertz's tube had shielded the beam. Bending towards positive means negative charge. Thomson also changed the gas and the cathode metal, and got the same rays every **time**, so these particles are part of all **matter**.

Visual: camera push into cell 4, which becomes the main stage (the coded-outline CRT about 1000 px wide, plates 5.0 cm long and 2.0 cm apart, "+" top, "−" bottom, solid from the first frame; the painted EHT supply `phys-y11-eht-supply-v1.png` at the lower left with coded leads). On "much better vacuum" the pressure tag changes to "much better vacuum", name tag in words only "Thomson, 1897". On "plate" the beam curves upwards towards the "+" plate; an amber force arrow "F = qE" on a beam marker points up; tag "bends towards +". On "shielded the beam" a small inset: Hertz's tube with grey "+" and "−" gas ions crowding the plates, tag "leftover gas screened the field". On "negative charge" the inset fades; chip "cathode rays carry negative charge"; the "wave, like light?" chip is crossed. On "the gas and the cathode metal" the tube's fill tag cycles "air", "hydrogen", "carbon dioxide" and the cathode tag cycles "aluminium", "platinum", "iron"; on "time" the same curved beam each time. On "matter" chip "same particles in all matter", navy hand tag "in everything". Marks (Revision 2): amber hand tag "towards +, so negative" with an amber pen arrow along the bending beam.

### 5. Thomson stage 1: balance the forces, find the speed
> Thomson couldn't measure the charge or the mass on its own, but he could measure the ratio, charge over mass. First he needed the speed. He added a magnetic field at right angles to the electric field, so the electric force, q E, and the magnetic force, q v B, push the beam opposite ways. When the beam goes straight, they're equal, so v equals E over **B**. That's Module 6's velocity selector. With these fields, v is two point five times ten to the seven metres per **second**.

Visual: camera change (a new stage): the plate region of the coded CRT enlarged at the left (about 900 px), the supply small beside it, a working panel at the right, all solid from the first frame. On "the ratio, charge over mass" a chip "measure q/m (charge ÷ mass)". On "a magnetic field at right angles" slate crosses fill the plate region, tag "B into page". On "q E" the amber arrow "F_E = qE" points up on the beam marker; on "q v B" a rose arrow "F_B = qvB" points down. On "goes straight" the beam straightens along the axis as B is tuned live (a slate slider "B" with a beam-angle readout falling to "0°"); the two arrows equalise, ink hand tag "straight: forces equal". On "B" `AlignedAlgebra` "qE = qvB → v = E/B" (framed). On "velocity selector" a small chip "Module 6". On "second": task strip "Stage 1: find the speed"; givens grouped "plates: V = 300 V, d = 2.0 cm → E = V/d = 1.5 × 10⁴ V m⁻¹", "B = 6.0 × 10⁻⁴ T", tag "illustrative values"; working line "v = (1.5 × 10⁴) / (6.0 × 10⁻⁴) = 2.5 × 10⁷ m s⁻¹" (framed) with a `NumberTicker`, teal pen ring round the result.

### 6. Thomson stage 2: switch off B, measure the bend
> Then he switched off the magnetic field. With only the electric force acting, the beam curves like a projectile, as charged particles did between plates in Module 6. It spends a time L over v in the plates, with a sideways acceleration of q E over m. Suppose it moves five point two eight millimetres **sideways**. From y equals a half a t squared, q over m equals two y v squared, over E L **squared**, which is one point seven six times ten to the eleven coulombs per **kilogram**.

Visual: camera change (a new stage): full-width working with the plate region small at the upper left; stage 1's working shrinks to one kept line "v = 2.5 × 10⁷ m s⁻¹" at the top right. On "switched off the magnetic field" the crosses fade and the rose arrow vanishes. On "curves like a projectile" the beam curves up inside the plates (a parabola) and continues straight to the screen; chip "Module 6: projectile-like path". On "L over v" a navy bracket "L = 5.0 cm" along the plates and the line "t = L/v". On "q E over m" the line "a = qE/m". On "sideways" a navy bracket "y = 5.28 mm" at the plates' exit (tag "measured; illustrative"). On "squared" `AlignedAlgebra`: "y = ½at² = ½ (qE/m)(L/v)²" then "q/m = 2yv² / (EL²)". On "kilogram" "q/m = 2(5.28 × 10⁻³)(2.5 × 10⁷)² / [(1.5 × 10⁴)(0.050)²] = 1.76 × 10¹¹ C kg⁻¹" (framed); beside it a small chip "q/m = 2yv / (EL²) = 7.0 × 10³" crossed in red, red hand tag "square v". Marks (Revision 2): navy hand tag "like a thrown ball" on the parabola; ink pen bracket over the "y = 5.28 mm" bracket.

### 7. what the ratio meant
> That ratio is about eighteen hundred times bigger than for a hydrogen ion, the lightest ion known. So each particle carried either a huge charge, or a tiny mass. Thomson argued for a tiny mass, and the particles became known as electrons. To settle it, someone had to measure the charge **itself**.

Visual: board change: a horizontal comparison bar. On "eighteen hundred times bigger" two bars: "cathode-ray particle: q/m = 1.76 × 10¹¹ C kg⁻¹" (long) and "hydrogen ion: q/m = 9.58 × 10⁷ C kg⁻¹" (a stub), bracket "≈ 1840 ×" (tag "modern values"). On "a huge charge" a fork: left branch "huge q?"; on "a tiny mass" right branch "tiny m?". On "Thomson argued for a tiny mass" the right branch highlights; the navy dot gains the label "electron". On "itself" the left branch shows "measure q directly" with an arrow to the next scene's chip "experiment 2". Marks (Revision 2): ink pen bracket "≈ 1840 ×" between the bars; navy hand tag "huge q or tiny m?" at the fork; navy pen ring round "tiny m?".

### 8. Millikan's balanced drop
> Robert Millikan did that from nineteen oh nine. He sprayed tiny oil drops above two horizontal metal plates, and some drops, charged by the spraying, fell through a hole in the top plate. He adjusted the voltage until the upward electric force on one drop balanced its weight. The drop **hangs** still, so q E equals m **g**. He found its mass from how fast it fell with the voltage **off**.

Visual: board change to the Millikan bench with the live voltage slider (the lesson's simulation), solid from the first frame: the painted Millikan plates `y12p-millikan-plates-v1.png` (about 900 px wide; the plate gap read from the plate as painted, root decision 18) at centre left, the painted atomiser `y12p-atomiser-v1.png` (about 360 px, no hand on its bulb, rotated no more than about 20° so its nozzle aims at the hole; never stretched) at the upper left, wired to the reused supply plate; a red slider "V" on the supply and four live readouts (52 px) "V", "E = V/d", "qE" and "mg". Name tag in words only "Millikan, 1909 to 1913". On "sprayed tiny oil drops" a coded mist of tiny yellow dots drifts down, grey hand tag "charged by the spray"; on "fell through a hole in the top plate" a few pass through the hole. One drop (the reused drop plate `phys-y11-oil-drop-v1.png`, scaled uniformly to about 40 px) is followed; a "−" sign beside it. On "adjusted the voltage" the slider steps 0, 300, 600 V and blue field lines appear pointing down ("+" top plate): readouts "qE = 0", "0.96 × 10⁻¹⁴ N", "1.92 × 10⁻¹⁴ N" against "mg = 1.92 × 10⁻¹⁴ N", the drop's purple velocity arrow shrinking from "falls" to "falls slower". On "hangs" at 600 V the drop stops; an amber arrow "qE" up and a purple arrow "mg" down, equal length, amber pen bracket joining them, amber hand tag "up = down". On "g" `AlignedAlgebra` "qE = mg" (framed). On "off" the slider drops to 0 V, the field lines fade and the drop falls at a steady speed, tag "falling speed → mass"; a brief overshoot to 900 V (readout "2.88 × 10⁻¹⁴ N") shows the drop rising, red hand tag "too much: it rises".

### 9. one drop's charge
> Here's one drop, with a mass of one point nine six times ten to the minus fifteen kilograms, hanging still at six hundred volts between plates one centimetre apart. The field, V over d, is six point zero times ten to the four volts per **metre**. So the size of the charge is m g over E, three point two zero times ten to the minus nineteen **coulombs**, and the drop is negative.

Visual: camera continue (the bench with the slider at 600 V; 8 and 9 together about 54 s): the plates at the top left, the drop held still, working at the right. Task strip: "Find the drop's charge". Equation strip: "qE = mg, E = V/d". Givens grouped: "m = 1.96 × 10⁻¹⁵ kg, g = 9.8 m s⁻²" (drop); "V = 600 V, d = 1.0 cm = 0.010 m" (plates). On "metre" `AlignedAlgebra` "E = V/d = 600 / 0.010 = 6.0 × 10⁴ V m⁻¹", red hand tag "cm → m". On "coulombs" "|q| = mg/E = (1.96 × 10⁻¹⁵)(9.8) / (6.0 × 10⁴) = 3.20 × 10⁻¹⁹ C"; on "the drop is negative" the line "field down, force up → q = −3.20 × 10⁻¹⁹ C" (framed), navy hand tag "size, then sign" with a navy pen ring round the "−".

### 10. charge comes in packets
> The surprise came from drop after drop. The charges were always whole-number multiples of one smallest charge, one point six zero two times ten to the minus nineteen coulombs, and our drop carried exactly two of **them**. Charge comes in packets. The smallest, the elementary charge e, is the size of the charge on one **electron**.

Visual: board change: a horizontal charge axis "|q| (× 10⁻¹⁹ C)" from 0 to 10, solid from the first frame, the Millikan plates small (about 300 px) at the upper left. On "drop after drop" dots drop one by one onto the axis (tag "illustrative values"), landing in clusters at 1.60, 3.20, 4.81, 6.41, 8.01 and 9.61 with empty gaps between. On "whole-number multiples" vertical dashed lines mark "1e, 2e, 3e, 4e, 5e, 6e". On "one point six zero two times ten to the minus nineteen coulombs" chip "e = 1.602 × 10⁻¹⁹ C". On "them" our drop's dot "3.20" pulses at "2e", working "(3.20 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.00" (framed), navy hand tag "2 extra electrons". On "Charge comes in packets" a crossed chip "1.5e"; tag "charge is quantised: whole packets only". On "electron" a navy dot labelled "electron: charge −e", navy pen ring round "1e".

### 11. combine the two
> Now combine them. Thomson gave e over m, and Millikan gave e, so dividing e by e over m leaves the **mass**. That's nine point one zero times ten to the minus thirty one **kilograms**. A proton is about eighteen hundred and thirty six times heavier, so the electron is by far the lightest part of the **atom**.

Visual: board change: the two experiment chips from scene 1, now filled: "experiment 1: Thomson → e/m = 1.76 × 10¹¹ C kg⁻¹" and "experiment 2: Millikan → e = 1.602 × 10⁻¹⁹ C". On "mass" `AlignedAlgebra` "m = e ÷ (e/m)". On "kilograms" "m = (1.602 × 10⁻¹⁹) / (1.76 × 10¹¹) = 9.10 × 10⁻³¹ kg" (framed); the balance plate (about 340 px) returns at the right and its display (52 px) changes from "? kg" to "9.10 × 10⁻³¹ kg", ink pen ring round the display; tag "data sheet: 9.109 × 10⁻³¹ kg"; ink hand tag "two experiments, one mass". On "atom" two dots on a mass bar: "electron" (a speck) and "proton: 1836 × heavier".

### 12. a way to remember
> Here's a way to keep them straight. Cathode rays showed the particle exists. Thomson found its ratio, Millikan found its charge, and dividing gives its **mass**.

Visual: three chips write across in turn on the matching words: "Cathode rays: it exists", "Thomson: the ratio e/m", "Millikan: the charge e". On "mass" an arrow joins the last two into "÷ → m_e"; the line writes large: "Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An oil drop of mass four point nine times ten to the minus fifteen kilograms is held stationary between two horizontal plates one point zero centimetres apart, when the potential difference across them is one thousand volts. Calculate the charge on the drop, and the number of excess electrons it carries. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An oil drop of mass 4.9 × 10⁻¹⁵ kg is held stationary between two horizontal parallel plates 1.0 cm apart when the potential difference between the plates is 1000 V. (a) Calculate the charge on the drop. (b) Calculate the number of excess electrons on the drop. (3 marks)" Data-sheet chips "g = 9.8 m s⁻²", "e = 1.602 × 10⁻¹⁹ C". The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The forces balance, so q E equals m g. The field is V over d, one point zero times ten to the five volts per metre, so the charge has a size of four point eight zero times ten to the minus nineteen **coulombs**, and it's negative. Divide by e, and that's three excess **electrons**. The slip is using the voltage as if it were the field. That gives a charge one hundred times too **big**.

Visual: card shrinks to the top with its picture; givens strip "m = 4.9 × 10⁻¹⁵ kg; d = 1.0 cm; V = 1000 V; g = 9.8 m s⁻²; e = 1.602 × 10⁻¹⁹ C"; "stationary", "1.0 cm" and "1000 V" underline. On "coulombs" "(a) E = V/d = 1000 / 0.010 = 1.0 × 10⁵ V m⁻¹; |q| = mg/E = (4.9 × 10⁻¹⁵)(9.8) / (1.0 × 10⁵) = 4.80 × 10⁻¹⁹ C; excess electrons, so q = −4.80 × 10⁻¹⁹ C" (framed). On "electrons" "(b) n = (4.80 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 3.00 → 3 electrons" (framed). On "big" a chip "|q| = mg/V = 4.8 × 10⁻¹⁷ C" fades in and is crossed (caption "V is not E: divide V by d first"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's experiment solved this. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's oil drop experiment resolved this. (3 marks)" The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Thomson's experiment gives only a ratio, e over m, and any charge and mass in that same ratio fit his results equally well. Millikan measured e on its own, from balanced oil drops, so dividing e by e over m gives the **mass**. The slip is saying Thomson measured the electron's mass. He measured a **ratio**.

Visual: card shrinks to the top with its picture; givens strip "Thomson: e/m; Millikan: e"; "alone" and "resolved" underline. Framed lines write in turn: "Thomson: e/m only; any (e, m) pair in that ratio fits"; "Millikan: e measured independently (qE = mg, multiples of e)"; on "mass" "m = e ÷ (e/m) = 9.10 × 10⁻³¹ kg". On "ratio" a chip "Thomson measured the electron's mass" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So every atom contains electrons, tiny, negative and very light. Atoms are neutral, though, so something positive must balance them and carry nearly all the mass. Thomson guessed a ball of spread-out positive charge with electrons dotted through it, like plums in a pudding. To test what's inside something too small to see, you fire things at it. So why did scattering require a tiny dense **nucleus**?

Visual: board clears (camera change). On "every atom contains electrons" a grey atom outline with navy electron dots inside. On "something positive must balance them" the atom fills with a pale red wash, tag "positive charge: where?"; on "nearly all the mass" tag "and the mass". On "like plums in a pudding" the wash settles as a uniform pale red sphere with evenly scattered navy electrons, labels "spread-out positive charge" and "electrons"; tag "Thomson's guess, 1904: the plum-pudding model". On "you fire things at it" a coded alpha particle (a small amber circle "α (+)") approaches from the left with a dashed path ending in "?". On "nucleus" chip "Next: why did scattering require a tiny dense nucleus?". Hold about 2 seconds. This is the final frame (see "Final frame"). Marks (Revision 2): navy hand tag "tiny, negative, light" on the electrons; the final frame is otherwise unchanged.

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Cathode rays bend towards +: negative, in all matter.
2. Thomson: v = E/B, then q/m = 2yv²/(EL²).
3. e/m = 1.76 × 10¹¹ C kg⁻¹: a tiny mass.
4. Millikan: |q|E = mg, E = V/d; charge in whole e.
5. m_e = e ÷ (e/m) = 9.10 × 10⁻³¹ kg.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the rays were thought negative particles: deflection towards the positive plate (4). Why Hertz saw no bend: leftover gas screened the field (4). Why balancing fields gives speed: two forces equal and opposite (5). Why the deflection gives q/m: the projectile model links y to qE/m and the time in the plates (6). Why a huge q/m means a tiny mass (7). Why a held drop gives q: the forces balance (8, 9). Why two experiments: two unknowns, one ratio plus one value (11, 16).
- **Misconceptions addressed:** the paddle wheel proves particles (3); Thomson measured the mass (16 crossed); V used as E (14 crossed); charge can take any value (10, crossed "1.5e"); v not squared (6 crossed); a negative drop given a positive charge (9, 14: size, then sign).
- **One idea at a time:** the tube (2), the evidence (3, 4), each of Thomson's stages (5, 6), the meaning (7), the drop (8, 9), quantisation (10), the combination (11).
- **Video makes it easier:** the shadow, the wheel, the bend that first failed then worked (3, 4); forces balancing and the beam straightening (5); the beam curving when B switches off (6); drops snapping onto multiples of e (10); the balance display filling in (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 23 s.
- **Avoided double teaching:** E = V/d, F = qE, qE = mg, v = E/B and the projectile path are Module 6 results recalled in a clause each.
- **Syllabus coverage:** `P8-IQ2-01`: early cathode-ray experiments (2 to 4), Thomson's charge-to-mass experiment (5 to 7), Millikan's oil drop experiment (8 to 10), and the combined electron properties (11). "Model" is met by the coded tube and plate models with explicit fields and forces; "assess" by the weak-hint judgement on the paddle wheel and A2.
- **Out of scope by design:** alpha scattering and the nucleus (v08); Stokes' law for the drop's mass (author note b); the magnetic-radius version of e/m (open decision 3).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An oil drop of mass 4.9 × 10⁻¹⁵ kg is held stationary between two horizontal parallel plates 1.0 cm apart when the potential difference between the plates is 1000 V. (a) Calculate the charge on the drop. (b) Calculate the number of excess electrons on the drop."
Model answer: (a) Stationary, so |q|E = mg. E = V/d = 1000/0.010 = 1.0 × 10⁵ V m⁻¹. |q| = mg/E = (4.9 × 10⁻¹⁵ × 9.8)/(1.0 × 10⁵) = 4.80 × 10⁻¹⁹ C; the drop carries excess electrons, so q = −4.80 × 10⁻¹⁹ C. (b) n = |q|/e = (4.80 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 3.00, so 3 excess electrons. Classic mistake (crossed): |q| = mg/V = 4.8 × 10⁻¹⁷ C (V used as the field).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's oil drop experiment resolved this."
Model answer: Thomson's crossed-field experiment measures only the ratio e/m of the cathode-ray particles; any combination of charge and mass with that ratio fits the measurement, so neither is found separately. Millikan measured the charge independently, by balancing the electric force on charged oil drops against their weight; the charges were always whole-number multiples of e = 1.602 × 10⁻¹⁹ C. Dividing e by Thomson's e/m gives the electron's mass, m = e ÷ (e/m) ≈ 9.1 × 10⁻³¹ kg. Classic mistake (crossed): "Thomson measured the electron's mass."

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; g = 9.8 m s⁻² | 9 to 14 |
| Thomson stage 1 (illustrative) | V = 300 V, d = 2.0 cm: E = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; v = E/B = 2.5 × 10⁷ m s⁻¹ | 5, 6 |
| Thomson stage 2 (illustrative) | L = 5.0 cm; t = L/v = 2.0 × 10⁻⁹ s; y = 5.28 mm; q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹ (true e/m_e gives y = 5.276 mm) | 6 |
| Ratio comparison | e/m_p = 9.58 × 10⁷ C kg⁻¹; e/m_e ÷ e/m_p = m_p/m_e = 1836.6 ≈ 1840 | 7, 11 |
| Worked drop | m = 1.96 × 10⁻¹⁵ kg, V = 600 V, d = 0.010 m: E = 6.0 × 10⁴ V m⁻¹; |q| = 3.20 × 10⁻¹⁹ C = 2.00e; q = −3.20 × 10⁻¹⁹ C (Revision 2) | 9, 10 |
| Millikan slider (Revision 2) | mg = 1.92 × 10⁻¹⁴ N; V = 0, 300, 600, 900 V: E = 0, 3.0, 6.0, 9.0 × 10⁴ V m⁻¹; qE = 0, 0.961, 1.922, 2.884 × 10⁻¹⁴ N | 8 |
| Scene 6 slip (Revision 2) | 2yv/(EL²) = 2(5.28 × 10⁻³)(2.5 × 10⁷)/[(1.5 × 10⁴)(0.050)²] = 7.04 × 10³ (v not squared) | 6 |
| Charge axis (illustrative) | 1.60, 3.20, 4.81, 6.41, 8.01, 9.61 (× 10⁻¹⁹ C) = 1e to 6e | 10 |
| Electron mass | 1.602 × 10⁻¹⁹ / 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg; site 1.6/1.76 = 9.09 × 10⁻³¹ kg | 11, 16 |
| A1 | m = 4.9 × 10⁻¹⁵ kg, V = 1000 V, d = 0.010 m: E = 1.0 × 10⁵ V m⁻¹; |q| = 4.80 × 10⁻¹⁹ C, q = −4.80 × 10⁻¹⁹ C; n = 3.00; wrong form mg/V = 4.80 × 10⁻¹⁷ C (100 × too big) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 300 / 0.020 = 1.5e4 V/m; 1.5e4 / 6.0e-4 = 2.5e7 m/s; 0.050 / 2.5e7 = 2.0e-9 s.
- 2 × 5.28e-3 × (2.5e7)² / (1.5e4 × 0.050²) = 1.760e11 C/kg; with 1.7587e11 C/kg the deflection is 5.276e-3 m.
- 1.602e-19 / 1.673e-27 = 9.576e7 C/kg; 1.673e-27 / 9.109e-31 = 1836.6.
- 600 / 0.010 = 6.0e4 V/m; 1.96e-15 × 9.8 / 6.0e4 = 3.2013e-19 C; / 1.602e-19 = 1.998.
- 1.602e-19 / 1.76e11 = 9.102e-31 kg.
- 1000 / 0.010 = 1.0e5 V/m; 4.9e-15 × 9.8 / 1.0e5 = 4.802e-19 C; / 1.602e-19 = 2.998; 4.9e-15 × 9.8 / 1000 = 4.802e-17 C.
- Revision 2 (7 Nov): 1.96e-15 × 9.8 = 1.9208e-14 N; 2 × 1.602e-19 × (3.0e4, 6.0e4, 9.0e4) = 0.961e-14, 1.922e-14, 2.884e-14 N; 2 × 5.28e-3 × 2.5e7 / (1.5e4 × 0.0025) = 7040.

## Memory aid check

- **"Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass."** Meaning, as said in scene 12: cathode-ray experiments established a negative particle common to all matter; Thomson measured its charge-to-mass ratio; Millikan measured the elementary charge; m = e ÷ (e/m). Assumptions checked: Thomson's ratio is for cathode-ray particles, which are electrons (the identity is the conclusion of scenes 4 and 7); Millikan's smallest charge is the electron's charge in size (an assumption he and later experiments supported: the drops gain or lose whole electrons); the division needs the two measurements to be independent (Millikan's balance does not use e/m); "the charge" means its size e, with the electron's charge −e (Revision 2). It helps a new case: A2 directly, and any "why both experiments" question. Introduced after the explanation (2 to 11).
- **Considered, not used:** "plums in a pudding" as a memory aid (it is the next video's model to be tested, not a summary of this one).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,075 characters**, 18 scenes. Characters per scene (1 to 18): 448, 419, 416, 362, 473, 471, 294, 379, 372, 324, 298, 157, 338, 376, 174, 300, 399, 75. At 13.3 characters per second the speech is about 457 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 8 slider runs under its narration): **about 523 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,002 characters (scene sum; 6,019 with inter-scene spaces), about 534 s. Reserve trims if the voiced take runs long: scene 3's paddle-wheel sentence (keep the cell and tag); scene 6's derivation sentence (keep the strip); scene 7's last sentence.

## Opening frame

v06's final frame exactly (`phys-y12-m8-v06.md` "Final frame", Revision 2): element strip along the top; a plain gold atom with no structure drawn, labelled "Au (gold)", tag "electrons inside? (unknown before 1897)"; the painted Maltese-cross tube `y12p-maltese-cross-tube-v1.png` with its glow off at the right, tag "1890s: cathode rays" and a grey hand tag "glass tube, no glow yet"; "Next" chip. Scene 1's first beat fades the hand tag; the scene keeps the tube, slides it left and switches its glow on.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How did cathode rays and oil drops reveal the electron?"; at the centre Thomson's plum-pudding model: a uniform pale red sphere labelled "spread-out positive charge" with evenly scattered navy electron dots labelled "electrons" with a navy hand tag "tiny, negative, light" (Revision 2); tag "Thomson's guess, 1904: the plum-pudding model"; from the left a coded alpha particle (small amber circle "α (+)") with a dashed path heading for the sphere and ending in "?"; chip "Next: why did scattering require a tiny dense nucleus?". v08 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v07` (route phys-y12-m8-v07). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v07` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v07` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, cathode-ray-tube, early-evidence, thomson-vacuum, thomson-speed, thomson-ratio, ratio-meaning, millikan-balance, drop-charge, charge-packets, combine, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: tube stage (beam, glow, plates, field lines, crosses, force arrows), evidence grid, number line of charges, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 clear change to the tube; 2 to 3 camera continue (grid beside the tube); 3 to 4 camera push into cell 4; 4 to 5 camera change (crossed-field stage with the working panel); 5 to 6 camera change (B-off stage with full-width working); no set-up runs past about 60 s; 6 to 7 clear change; 7 to 8 clear change to the plates; 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v07-learning-review.md`, `science_check` = `checks/p-y12-m8-v07-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA, bench high-voltage supply; inspected for m6-v01): 2, 8.
- `public/assets/physics/phys-y11-oil-drop-v1.png` (1263 × 1246, RGBA, a single clear yellow drop; inspected for m6-v01): 8, 9.
- `public/assets/physics/phys-y11-top-pan-balance-v1.png` (top-pan balance; display overlaid in code): 1, 11. Brief 192 confirmed true alpha and approximate display corners (`work/brief192/top-pan-balance-anchors.json`).
- `public/assets/physics/y12p-maltese-cross-tube-v1.png` (2172 × 724, RGBA; delivered by root decision 17, inspected 7 Nov: clear glass bulb, disc cathode at the narrow left end with two pins, hinged metal cross on a stand, wooden base): 1, 2, 3; v06's final frame.
- `public/assets/physics/y12p-paddle-wheel-tube-v1.png` (2172 × 724, RGBA; inspected: long glass cylinder, disc electrodes at both ends, two glass rails, two metal feet) and `y12p-paddle-wheel-v1.png` (1536 × 1024, RGBA; inspected: eight mica vanes on a metal hub, face-on, soft halo): 3. Register the wheel by its actual hub (root decision 18).
- `public/assets/physics/y12p-millikan-plates-v1.png` (1774 × 887, RGBA; inspected: two brass plates on clear spacers, a centre hole in the top plate, a lamp at the left, a microscope at the right, two terminals, dark base; no observer): 8, 9, 10, A1 and A2 cards. Read the gap from the plate as painted (root decision 18).
- `public/assets/physics/y12p-atomiser-v1.png` (1920 × 819, RGBA; inspected: glass bottle, metal pump head, black rubber bulb on a tube, nozzle at the right; no hand): 8.
- **Held, not used:** `y12p-crt-tube-v1.png` (brief 189: three candidates failed the plate geometry). Scenes 3 to 6 use the Module 6 coded-outline CRT (Decisions "Thomson's tube"; open decision 4).
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a sealed shielded source; not relevant here); `y12p-discharge-tube-v1.png` (M7; a gas discharge, not a cathode ray tube).

Need: no new plates (Revision 2; the four brief 192 apparatus plates are delivered).

Coded: beams, glow, field lines, crosses, force arrows, evidence grid, charge axis, comparison bars, plum-pudding model, alpha particle, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v07 build brief):
1. **Tube stage.** Coded beam over the CRT plate with switchable E and B, beam path from the forces (straight when balanced, parabola in E alone, straight after the plates), and force arrows on a marker.
2. **Charge axis.** Dots that fall and settle on multiples of e, with labelled dashed lines.

## Codex asset brief

Revision 2: no open request. The four plates below were delivered by root decision 17 (native size accepted) and are kept here for the record; build notes from root decision 18 apply (glass on cream, never navy behind; wheel registered by its actual hub; Millikan gap read from the plate as painted).

1. **`y12p-maltese-cross-tube-v1.png`** (delivered). A classic Crookes "Maltese cross" tube seen side-on: a clear glass bulb, narrow neck at the left with a small disc cathode, a flat hinged metal Maltese cross (thin aluminium) standing upright inside the bulb in the middle, the wide rounded end of the bulb at the right, two electrode pins at the base of the neck. No glow, no shadow on the glass.
2. **`y12p-paddle-wheel-tube-v1.png`** and **`y12p-paddle-wheel-v1.png`** (delivered). A horizontal Crookes paddle-wheel tube side-on with two glass rails, and the wheel as a separate layer at the same scale.
3. **`y12p-millikan-plates-v1.png`** (delivered). A school Millikan apparatus, side view: two horizontal circular brass plates on clear spacers, a small hole in the top plate, a lamp at the left and a viewing microscope at the right (no observer), two terminals on a dark base.
4. **`y12p-atomiser-v1.png`** (delivered). A glass atomiser with a rubber squeeze bulb and a nozzle, side view, no hand.

Not requested: `y12p-crt-tube-v1.png` stays held (brief 189); see open decision 4.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the field and force directions in scenes 4 to 6 (+ plate above, B into page: F_E up, F_B down on an electron); v = E/B; q/m = 2yv²/(EL²); the paddle wheel as weak evidence; Hertz's 1883 null result and its cause; Thomson's universality result; qE = mg; quantisation; m_e = e ÷ (e/m); the proton's mass ratio.
3. Confirm the history: Hertz 1883; Thomson 1897; Millikan 1909 to 1913; plum-pudding model 1904 (author notes c and d; site notes 2 and 3).
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.
12. Revision 2: confirm the signed charges (9, 14, model answer 1: |q| then q = −3.20 × 10⁻¹⁹ C and −4.80 × 10⁻¹⁹ C; author note f); grouped denominators (5, 9, 10, 11, 14, model answers); the slider values; the scene 6 crossed slip; the tube assignments (Maltese-cross tube in 1 to 3, coded-outline CRT in 3 to 6; open decision 4); the stage changes at 4 to 5 and 5 to 6.

## YouTube metadata (draft)

Title: Discovering the Electron: Cathode Rays, Thomson's e/m and Millikan's Oil Drop | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa.html

How do you weigh a particle far too small to see? Follow the cathode-ray evidence (shadows, a paddle wheel, magnets, and an electric deflection that failed before it worked), Thomson's crossed-field measurement of the charge-to-mass ratio, and Millikan's balanced oil drops that showed charge comes in packets of e. Then combine them to find the electron's mass, with two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate, assess and model the experimental evidence supporting the existence and properties of the electron, including:
- early experiments examining the nature of cathode rays
- Thomson’s charge-to-mass experiment
- Millikan's oil drop experiment (ACSPH026)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how stellar mass changes the elements a star can make. Next: why scattering required a tiny dense nucleus.

#HSCPhysics #Physics #Electron #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v06 and Module 6; check that the Hertz-then-Thomson story makes the electric deflection meaningful; that stage 2's algebra is followable at speed; that "charge comes in packets" lands before the combination; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The beam straightening when the forces balance, the beam curving when B switches off and the drops snapping onto multiples of e carry the explanation; judge them at playback speed in the voiced preview.
- Revision 2 (7 Nov): brief 192 findings resolved and visual upgrade; see "Revision 2" below.

## Revision 2 (7 Nov 2026)

Brief 192 findings (`checks/p-y12-m8-v07-learning-review.md`, `checks/p-y12-m8-v07-science-check.md`): 0 blockers, 3 should fix, 0 optional.
- **Should fix, signed charge (9, 14, practice).** Resolved: scene 9 says "So the size of the charge is m g over E, three point two zero times ten to the minus nineteen coulombs, and the drop is negative."; the working shows "|q| = mg/E = 3.20 × 10⁻¹⁹ C" then "q = −3.20 × 10⁻¹⁹ C"; feedback 1 says "the charge has a size of four point eight zero ... and it's negative" and shows q = −4.80 × 10⁻¹⁹ C with 3 excess electrons; the charge axis is labelled |q|; e stays the positive elementary charge (author note f; Decisions; model answer; notes).
- **Should fix, grouped denominators (5, 9, 10, 11, feedback 1).** Resolved: "(1.5 × 10⁴) / (6.0 × 10⁻⁴)", "/ (6.0 × 10⁴)", "(3.20 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹)", "(1.602 × 10⁻¹⁹) / (1.76 × 10¹¹)", "/ (1.0 × 10⁵)" and the model answer. Values unchanged (Python: 2.5 × 10⁷ m s⁻¹, 3.2013 × 10⁻¹⁹ C, 2.00, 9.102 × 10⁻³¹ kg, 4.802 × 10⁻¹⁹ C).
- **Should fix, absent CRT plate.** Resolved without a silent substitution: the delivered Maltese-cross tube (root decision 17) is the cathode ray tube of scenes 1 to 3 and of the v06 join; Thomson's deflection tube (3 to 6) uses the Module 6 coded-outline CRT, which root's Module 6 decision records as the design when the painted CRT is held, so it is not a missing plate at the build gate. Decisions "Thomson's tube" and open decision 4 ask root to confirm.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: all four brief 192 apparatus plates (Maltese-cross tube, paddle-wheel tube and wheel, Millikan plates, atomiser) inspected and placed, with the EHT supply, oil drop and balance; glass kept on cream.
- Live control: the Millikan voltage slider in scene 8 with live V, E, qE and mg readouts and the drop falling, held or rising (Python: mg = 1.92 × 10⁻¹⁴ N; qE = 0, 0.96, 1.92, 2.88 × 10⁻¹⁴ N at 0, 300, 600, 900 V); scene 5's B slider straightens the beam.
- Hand tags and a pen mark in role colours in every teaching scene ("glow!", "the glass glows, not the rays", "invisible stream", "straight lines", "weak: heat can do it", "magnet bends it", "no bend?", "towards +, so negative", "in everything", "straight: forces equal", "like a thrown ball", "square v", "huge q or tiny m?", "charged by the spray", "up = down", "too much: it rises", "cm → m", "size, then sign", "2 extra electrons", "two experiments, one mass", "tiny, negative, light"; pen rings, brackets and arrows on the display, the glow, the shadow, the plates, the beam, v, y, the bars, the forces, the "−" sign, 1e and the balance).
- Framed answers: v = E/B and 2.5 × 10⁷ m s⁻¹ (5), 1.76 × 10¹¹ C kg⁻¹ (6), qE = mg (8), q = −3.20 × 10⁻¹⁹ C (9), 2.00 (10), 9.10 × 10⁻³¹ kg (11), both feedback 1 rows (14), the A2 lines (16). New crossed slip: "q/m = 2yv / (EL²) = 7.0 × 10³" (6).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip.
- Key notes cut from four long items (about 830 characters) to five short bullets (about 230 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed. Scenes 4, 5 and 6 are separate stages (Revision 1 ran them as one camera-continue board, about 98 s).

New plate requests: none.

Joins: the opening is v06's Revision 2 final frame (the Maltese-cross tube replaces the held CRT plate); scene 1's first beat fades v06's grey hand tag. The final frame (scene 17) is unchanged apart from one navy hand tag, recorded in v08's opening.

Counts: 6,002 to 6,075 characters (scene sum); about 534 s to about 523 s.
