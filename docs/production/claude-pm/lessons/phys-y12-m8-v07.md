# Year 12 Physics M8 V07: Discovering the electron. How did cathode rays and oil drops reveal the electron? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,019 characters, 18 scenes, about 534 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on an assumed v06 final frame (v06 is being designed in parallel; see "Opening frame").

Scope: seventh video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that atoms are made up of protons, neutrons and electrons?". Templates as `phys-y12-m7-v10.md`; `math-a12-d10.md` for the calculation layout; `bio-y11-fa1-v05.md` for plates. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson11.sa.txt`, hash checked against the live file): lesson 11, orient and predict (gold-foil prediction, warm-up, intentions, vocabulary: cathode rays, charge-to-mass ratio, elementary charge, neutron), "read-the-geiger-marsden-evidence", "calculate-closest-approach" (beyond the syllabus), "compare-thomson-and-rutherford", "explain-cathode-ray-evidence" (four properties, wave-versus-particle debate, universality, Figure 4, Stop and check), "measure-the-electron" (Thomson's two stages, 1.76 × 10¹¹ C/kg, Millikan's balance, quantisation, m_e = e ÷ (e/m), Figure 5, Stop and check), "find-the-neutron", apply and consolidate (Activities 1 and 2, "Assess 7 marks", "Analyse 6 marks" on Thomson and Millikan), independent practice, reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson11.sa.html`, SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v07`, sections `explain-cathode-ray-evidence`, `measure-the-electron`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Separate cathode-ray evidence, Thomson e/m and Millikan charge measurement; combine them for electron mass. Keep apparatus fields and forces explicit." Next: "phys-y12-m8-v08: Why did scattering require a tiny dense nucleus?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only; the microscope eyepiece is drawn without an observer); the cathode ray tubes, the paddle-wheel tube, the Millikan plates, the high-voltage supply, the oil drop and the balance are painted plates (four new, three reused), scaled uniformly, never stretched; field lines, crosses, forces, beams, number lines and calculation strips are coded, HSC style; every number recalculated in Python with e = 1.602 × 10⁻¹⁹ C, m_e = 9.109 × 10⁻³¹ kg, m_p = 1.673 × 10⁻²⁷ kg and g = 9.8 m s⁻²; data-sheet symbols F = qE, E = V/d, F = qvB sin θ; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: Module 6 v01 (E = V/d, F = qE, the balanced oil drop qE = mg), v02 (a charged particle's projectile-like path between plates, y = ½at²), v06 (the velocity selector, v = E/B), Module 7 colour conventions (electrons navy), v06 of this module (stars made the elements; assumed).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ2-01`), quoted from the route JSON `syllabusActions`:

- `P8-IQ2-01`: "investigate, assess and model the experimental evidence supporting the existence and properties of the electron, including:"
  - "early experiments examining the nature of cathode rays"
  - "Thomson’s charge-to-mass experiment"
  - "Millikan's oil drop experiment (ACSPH026)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v06's final frame (assumed: the elements made in stars, one atom, chip to this question). Teaches: the cathode ray tube (evacuated tube, cathode, anode, glow); the wave-versus-particle debate; the early evidence (sharp shadow, paddle wheel as a weak hint, magnetic deflection, Hertz's 1883 null result for electric deflection); Thomson's 1897 electric deflection with a better vacuum (negative charge) and universality across gases and cathode metals; Thomson's two stages (balanced crossed fields give v = E/B; electric field alone gives a measured sideways deflection and q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹); what the large ratio meant (about 1840 times the hydrogen ion's); Millikan's balanced drop (qE = mg, mass from falling speed), a worked drop (2e), quantisation of charge and the elementary charge; combining the results for m_e = 9.10 × 10⁻³¹ kg (a proton about 1836 times heavier). Ends on Thomson's plum-pudding guess as the handoff. Stops before alpha scattering and the nucleus (v08).

## Decisions

- **Learner question (route wording kept).** "How did cathode rays and oil drops reveal the electron?" The answer, built in order: cathode rays were a mystery stream from the cathode (2); early evidence split between wave and particle (3); Thomson's better vacuum showed electric deflection towards the positive plate, so negative particles common to all matter (4); his balanced and unbalanced fields gave their charge-to-mass ratio, huge, so very light (5 to 7); Millikan's balanced drops gave the charge and showed it comes in packets of e (8 to 10); dividing gives the mass (11).
- **Hook (new, surprise question).** "How do you weigh something far too small to see?" with the reused top-pan balance plate showing "?" on its display: the video's answer is "with two experiments, and neither alone". The site's own hook (gold-foil prediction) belongs to v08.
- **Early evidence (site "explain-cathode-ray-evidence", four properties).** The site's four properties are kept (straight lines, field deflection, energy and momentum, deflected towards positive). Two changes, both for causal clarity: (a) the debate is told as a test that first failed (Hertz, 1883, no electric deflection) and then succeeded (Thomson, 1897, better vacuum), because "deflected by electric fields" is only convincing once students see why it was once missed; (b) the paddle wheel is shown as a weak hint, following the site's own caution (site note 1). Hertz and Thomson are named in words only.
- **Thomson's method (site "measure-the-electron", two stages; Figure 5 left).** Stage 1 is the Module 6 v06 velocity selector, recalled in one sentence (field and force directions drawn explicitly, as the route stop asks). Stage 2 follows the site's order (remove B, measure the electric deflection) and makes it quantitative with Module 6 v02's projectile model: t = L/v, a = qE/m, y = ½at², so q/m = 2yv²/(EL²). The tube numbers are illustrative and labelled so (plates 5.0 cm long and 2.0 cm apart, as in m6-v02; 300 V gives E = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; y = 5.28 mm), chosen so the result is the site's 1.76 × 10¹¹ C kg⁻¹ (author note a).
- **Magnetic-radius alternative (considered, not used).** Many textbooks finish Thomson's measurement with r = mv/qB in B alone. The site uses the electric deflection, and so does this design; the key notes do not mention the radius method. Root may add one line if the learning review asks (open decision 3).
- **What the ratio meant.** The site says "far larger than ... a hydrogen ion"; the design gives the factor with data-sheet values (e/m_e ÷ e/m_p = 1836.6, said "about eighteen hundred times") and the site's two-way inference (huge charge or tiny mass).
- **Millikan (site Figure 5 right, "Analyse 6 marks" steps 3 and 4).** Balance qE = mg recalled from m6-v01 (scene 8 there showed the same balance); one added clause says the drop's mass came from its falling speed (author note b). Worked drop (new, original numbers): 1.96 × 10⁻¹⁵ kg, plates 1.0 cm apart, 600 V: E = 6.0 × 10⁴ V m⁻¹, q = 3.20 × 10⁻¹⁹ C = 2e. Quantisation is shown as a number line of drop charges clustering on multiples of e (illustrative values, labelled).
- **Combining (site "Stop and check, worked idea").** m_e = e ÷ (e/m) with data-sheet e: 1.602 × 10⁻¹⁹ ÷ 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg (the data sheet gives 9.109 × 10⁻³¹ kg; the small gap is the rounded ratio). The site's 1/1836 comparison kept.
- **Memory aid (scene 12): "Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a balanced drop (4.9 × 10⁻¹⁵ kg, 1.0 cm, 1000 V): q = 4.80 × 10⁻¹⁹ C, three excess electrons. Crossed: using V for E (charge 100 times too big). A2 (3 marks, explain): why Thomson alone could not give m_e and how Millikan solved it (the site's "Analyse 6 marks" logic in brief). Crossed: "Thomson measured the electron's mass".
- **Handoff (route next).** Scene 17 ends on Thomson's plum-pudding model (a pale positive sphere with navy electrons dotted through it, tag "Thomson's guess") with a coded alpha particle arrow approaching it and "?"; chip "Next: why did scattering require a tiny dense nucleus?". See "Final frame".
- **Colour key (Module 6 and 7 keys):** electric field blue (from + to −); magnetic field slate crosses (B into page); electric force amber; magnetic force rose; velocity teal; electrons navy dots; cathode rays a pale green coded beam inside the tube (the glow colour is the glass, tag "glow"); oil drop as the reused yellow drop plate; positive charge pale red in the plum-pudding model (scene 17 only).
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
- **Open decisions for root:**
  - **1. Four new plates (Codex).** `y12p-maltese-cross-tube-v1`, `y12p-paddle-wheel-tube-v1`, `y12p-millikan-plates-v1` and `y12p-atomiser-v1`. Fallbacks: coded tube outlines; the m6-v01 coded plates for Millikan.
  - **2. v06 join (reconciled by root, 6 November).** v07 opens on v06's actual final frame, which already holds the cathode ray tube (beam off) at the right; scene 1 slides it left and switches the glow on.
  - **3. Thomson stage 2 (learning review).** Keep the quantitative deflection step (scene 6) or cut it to one sentence with the result if the voiced take runs long; the magnetic-radius method stays out unless the review asks for it.

Main question: *How do you find the mass of a particle far too small to see?*
Entry knowledge: E = V/d, F = qE, v = E/B, projectile path between plates, qE = mg (Module 6).
Stops after: cathode-ray evidence, Thomson's e/m, Millikan's e and quantisation, m_e from both. No alpha scattering or nucleus.
Handoff: v08, why scattering required a tiny dense nucleus.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *q*, *m*, *e*, *E*, *B*, *v*, *y*, *L*.

### 1. hook (weighing the invisible)
> Last time, stars built the elements. But what is an atom of those elements made of? For most of the eighteen hundreds, an atom was pictured as the smallest piece of matter, with nothing inside. Then a strange glow in sealed glass tubes led to something far smaller. Here's the puzzle. How do you weigh something far too small to see? It took two experiments, and neither could do it alone. So how did cathode rays and oil drops reveal the **electron**?

Visual: opens on v06's final frame exactly (`phys-y12-m8-v06.md` "Final frame": element strip, a plain gold atom with no structure, the cathode ray tube `y12p-crt-tube-v1.png` with its beam off at the right, "Next" chip). On "stars built the elements" the element strip pulses once; the chip becomes the heading: "How did cathode rays and oil drops reveal the electron?". On "what is an atom of those elements made of?" the single atom grows to the centre as a plain sphere (gold tint fading to grey). On "the smallest piece of matter" tag "1800s: atom = smallest piece, nothing inside?". On "a strange glow in sealed glass tubes" the cathode ray tube already at the right slides to the left and a pale green coded glow appears on its screen end. On "How do you weigh something far too small to see?" the reused balance plate `phys-y11-top-pan-balance-v1.png` appears at the right, its coded display reading "? kg". On "two experiments" two empty chips "experiment 1" and "experiment 2" appear under the balance. On "electron" the heading underlines "cathode rays" and "oil drops".

### 2. the cathode ray tube
> Pump almost all the air out of a glass tube, and put a high voltage across two metal electrodes inside it. The negative electrode is the cathode, and the positive one is the anode. Something streams away from the cathode, and where it hits the far end, the glass glows. Nobody could see it, so it was called cathode **rays**. Were they a wave, like light, or a stream of tiny charged **particles**? Physicists argued for years.

Visual: board change: the CRT plate large, side-on. On "Pump almost all the air out" a coded pressure tag "almost a vacuum". On "a high voltage" the reused high-voltage supply plate `phys-y11-eht-supply-v1.png` at the lower left with coded leads to the tube's pins. On "the cathode" label arrow "cathode (−)"; on "the anode" label arrow "anode (+)". On "Something streams away from the cathode" a faint coded beam (no particles drawn, a dashed grey line with "?") runs along the axis. On "the glass glows" the screen end glows pale green, tag "glow". On "rays" tag "cathode rays: what streams from the cathode". On "particles" two chips appear at the right: "wave, like light?" (grey) and "charged particles?" (navy dots).

### 3. early evidence: a shadow, a wheel, a magnet, no bend
> Some evidence fitted both ideas. A metal cross in the beam casts a sharp **shadow**, so the rays travel in straight lines, like light. A tiny paddle wheel in the beam turns, but warm leftover gas can turn it too, so that's only a **hint**. A magnet bends the beam, which points to charge. But in eighteen eighty three, Heinrich Hertz sent the beam between charged plates and saw no bend at **all**, which seemed to favour waves.

Visual: a two-by-two evidence grid on the right; each cell lights in turn. On "A metal cross in the beam" the painted Maltese-cross tube `y12p-maltese-cross-tube-v1.png` (new) appears in cell 1; on "shadow" a coded sharp cross-shaped shadow forms on its glowing end, tag "straight lines" (both chips tick). On "A tiny paddle wheel" the painted paddle-wheel tube `y12p-paddle-wheel-tube-v1.png` (new) in cell 2, its wheel rolling along its rails (coded rotation of the wheel layer); on "warm leftover gas" a small grey heat shimmer tag "heating can do this too"; on "hint" the cell gets a grey tag "weak evidence". On "A magnet bends the beam" cell 3: the CRT schematic with a slate cross grid over the plate region and the beam curving; the "charged particles?" chip gains a tick. On "charged plates" cell 4: coded plates "+" and "−" with blue field lines; on "all" the beam goes straight through, tag "Hertz, 1883: no bend"; the "wave, like light?" chip gains a tick.

### 4. Thomson's better vacuum
> In eighteen ninety seven, J J Thomson repeated that test with a much better vacuum, and the beam bent towards the positive **plate**. The leftover gas in Hertz's tube had shielded the beam. Bending towards positive means negative charge. Thomson also changed the gas and the cathode metal, and got the same rays every **time**, so these particles are part of all **matter**.

Visual: camera push into cell 4, which becomes the main stage (the CRT plate, plates 5.0 cm long and 2.0 cm apart, "+" top, "−" bottom). On "much better vacuum" the pressure tag changes to "much better vacuum", name tag in words only "Thomson, 1897". On "plate" the beam curves upwards towards the "+" plate; an amber force arrow "F = qE" on a beam marker points up; tag "bends towards +". On "shielded the beam" a small inset: Hertz's tube with grey "+" and "−" gas ions crowding the plates, tag "leftover gas screened the field". On "negative charge" the inset fades; chip "cathode rays carry negative charge"; the "wave, like light?" chip is crossed. On "the gas and the cathode metal" the tube's fill tag cycles "air", "hydrogen", "carbon dioxide" and the cathode tag cycles "aluminium", "platinum", "iron"; on "time" the same curved beam each time. On "matter" chip "same particles in all matter".

### 5. Thomson stage 1: balance the forces, find the speed
> Thomson couldn't measure the charge or the mass on its own, but he could measure the ratio, charge over mass. First he needed the speed. He added a magnetic field at right angles to the electric field, so the electric force, q E, and the magnetic force, q v B, push the beam opposite ways. When the beam goes straight, they're equal, so v equals E over **B**. That's Module 6's velocity selector. With these fields, v is two point five times ten to the seven metres per **second**.

Visual: the main stage. On "the ratio, charge over mass" a chip "measure q/m (charge ÷ mass)". On "a magnetic field at right angles" slate crosses fill the plate region, tag "B into page". On "q E" the amber arrow "F_E = qE" points up on the beam marker; on "q v B" a rose arrow "F_B = qvB" points down. On "goes straight" the beam straightens along the axis; the two arrows equalise. On "B" `AlignedAlgebra` "qE = qvB → v = E/B" (boxed). On "velocity selector" a small chip "Module 6". On "second": task strip "Stage 1: find the speed"; givens grouped "plates: V = 300 V, d = 2.0 cm → E = V/d = 1.5 × 10⁴ V m⁻¹", "B = 6.0 × 10⁻⁴ T", tag "illustrative values"; working line "v = 1.5 × 10⁴ / 6.0 × 10⁻⁴ = 2.5 × 10⁷ m s⁻¹" with a `NumberTicker`.

### 6. Thomson stage 2: switch off B, measure the bend
> Then he switched off the magnetic field. With only the electric force acting, the beam curves like a projectile, as charged particles did between plates in Module 6. It spends a time L over v in the plates, with a sideways acceleration of q E over m. Suppose it moves five point two eight millimetres **sideways**. From y equals a half a t squared, q over m equals two y v squared, over E L **squared**, which is one point seven six times ten to the eleven coulombs per **kilogram**.

Visual: stage 1's working shrinks to one kept line "v = 2.5 × 10⁷ m s⁻¹" at the top right. On "switched off the magnetic field" the crosses fade and the rose arrow vanishes. On "curves like a projectile" the beam curves up inside the plates (a parabola) and continues straight to the screen; chip "Module 6: projectile-like path". On "L over v" a navy bracket "L = 5.0 cm" along the plates and the line "t = L/v". On "q E over m" the line "a = qE/m". On "sideways" a navy bracket "y = 5.28 mm" at the plates' exit (tag "measured; illustrative"). On "squared" `AlignedAlgebra`: "y = ½at² = ½ (qE/m)(L/v)²" then "q/m = 2yv² / (EL²)". On "kilogram" "q/m = 2(5.28 × 10⁻³)(2.5 × 10⁷)² / [(1.5 × 10⁴)(0.050)²] = 1.76 × 10¹¹ C kg⁻¹" (boxed).

### 7. what the ratio meant
> That ratio is about eighteen hundred times bigger than for a hydrogen ion, the lightest ion known. So each particle carried either a huge charge, or a tiny mass. Thomson argued for a tiny mass, and the particles became known as electrons. To settle it, someone had to measure the charge **itself**.

Visual: board change: a horizontal comparison bar. On "eighteen hundred times bigger" two bars: "cathode-ray particle: q/m = 1.76 × 10¹¹ C kg⁻¹" (long) and "hydrogen ion: q/m = 9.58 × 10⁷ C kg⁻¹" (a stub), bracket "≈ 1840 ×" (tag "modern values"). On "a huge charge" a fork: left branch "huge q?"; on "a tiny mass" right branch "tiny m?". On "Thomson argued for a tiny mass" the right branch highlights; the navy dot gains the label "electron". On "itself" the left branch shows "measure q directly" with an arrow to the next scene's chip "experiment 2".

### 8. Millikan's balanced drop
> Robert Millikan did that from nineteen oh nine. He sprayed tiny oil drops above two horizontal metal plates, and some drops, charged by the spraying, fell through a hole in the top plate. He adjusted the voltage until the upward electric force on one drop balanced its weight. The drop **hangs** still, so q E equals m **g**. He found its mass from how fast it fell with the voltage **off**.

Visual: board change: the painted Millikan plates `y12p-millikan-plates-v1.png` (new) at centre left, with the painted atomiser `y12p-atomiser-v1.png` (new) above the top plate (no hand on its bulb; tag "atomiser"), wired to the reused supply plate. Name tag in words only "Millikan, 1909 to 1913". On "sprayed tiny oil drops" a coded mist of tiny yellow dots drifts down; on "fell through a hole in the top plate" a few pass through the hole. One drop (the reused drop plate `phys-y11-oil-drop-v1.png`, scaled uniformly to about 40 px) is followed; a "−" sign beside it. On "adjusted the voltage" the supply's coded display ticks up and blue field lines appear pointing down ("+" top plate). On "hangs" the drop stops; an amber arrow "qE" up and an amber arrow "mg" down, equal length. On "g" `AlignedAlgebra` "qE = mg" (boxed). On "off" the field lines fade and the drop falls at a steady speed, tag "falling speed → mass".

### 9. one drop's charge
> Here's one drop, with a mass of one point nine six times ten to the minus fifteen kilograms, hanging still at six hundred volts between plates one centimetre apart. The field, V over d, is six point zero times ten to the four volts per **metre**. So q equals m g over E, which is three point two zero times ten to the minus nineteen **coulombs**.

Visual: the plates small at the top left, the drop held still. Task strip: "Find the drop's charge". Equation strip: "qE = mg, E = V/d". Givens grouped: "m = 1.96 × 10⁻¹⁵ kg, g = 9.8 m s⁻²" (drop); "V = 600 V, d = 1.0 cm = 0.010 m" (plates). On "metre" `AlignedAlgebra` "E = V/d = 600 / 0.010 = 6.0 × 10⁴ V m⁻¹". On "coulombs" "q = mg/E = (1.96 × 10⁻¹⁵)(9.8) / 6.0 × 10⁴ = 3.20 × 10⁻¹⁹ C" (boxed).

### 10. charge comes in packets
> The surprise came from drop after drop. The charges were always whole-number multiples of one smallest charge, one point six zero two times ten to the minus nineteen coulombs, and our drop carried exactly two of **them**. Charge comes in packets. The smallest, the elementary charge e, is the size of the charge on one **electron**.

Visual: board change: a horizontal charge axis "q (× 10⁻¹⁹ C)" from 0 to 10. On "drop after drop" dots drop one by one onto the axis (tag "illustrative values"), landing in clusters at 1.60, 3.20, 4.81, 6.41, 8.01 and 9.61 with empty gaps between. On "whole-number multiples" vertical dashed lines mark "1e, 2e, 3e, 4e, 5e, 6e". On "one point six zero two times ten to the minus nineteen coulombs" chip "e = 1.602 × 10⁻¹⁹ C". On "them" our drop's dot "3.20" pulses at "2e", working "3.20 × 10⁻¹⁹ / 1.602 × 10⁻¹⁹ = 2.00". On "Charge comes in packets" a crossed chip "1.5e"; tag "charge is quantised: whole packets only". On "electron" a navy dot labelled "electron: charge −e".

### 11. combine the two
> Now combine them. Thomson gave e over m, and Millikan gave e, so dividing e by e over m leaves the **mass**. That's nine point one zero times ten to the minus thirty one **kilograms**. A proton is about eighteen hundred and thirty six times heavier, so the electron is by far the lightest part of the **atom**.

Visual: board change: the two experiment chips from scene 1, now filled: "experiment 1: Thomson → e/m = 1.76 × 10¹¹ C kg⁻¹" and "experiment 2: Millikan → e = 1.602 × 10⁻¹⁹ C". On "mass" `AlignedAlgebra` "m = e ÷ (e/m)". On "kilograms" "m = 1.602 × 10⁻¹⁹ / 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg" (boxed); the balance plate returns at the right and its display changes from "? kg" to "9.10 × 10⁻³¹ kg"; tag "data sheet: 9.109 × 10⁻³¹ kg". On "atom" two dots on a mass bar: "electron" (a speck) and "proton: 1836 × heavier".

### 12. a way to remember
> Here's a way to keep them straight. Cathode rays showed the particle exists. Thomson found its ratio, Millikan found its charge, and dividing gives its **mass**.

Visual: three chips write across in turn on the matching words: "Cathode rays: it exists", "Thomson: the ratio e/m", "Millikan: the charge e". On "mass" an arrow joins the last two into "÷ → m_e"; the line writes large: "Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An oil drop of mass four point nine times ten to the minus fifteen kilograms is held stationary between two horizontal plates one point zero centimetres apart, when the potential difference across them is one thousand volts. Calculate the charge on the drop, and the number of excess electrons it carries. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An oil drop of mass 4.9 × 10⁻¹⁵ kg is held stationary between two horizontal parallel plates 1.0 cm apart when the potential difference between the plates is 1000 V. (a) Calculate the charge on the drop. (b) Calculate the number of excess electrons on the drop. (3 marks)" Data-sheet chips "g = 9.8 m s⁻²", "e = 1.602 × 10⁻¹⁹ C". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The forces balance, so q E equals m g. The field is V over d, one point zero times ten to the five volts per metre, so q is four point eight zero times ten to the minus nineteen **coulombs**. Divide by e, and that's three excess **electrons**. The slip is using the voltage as if it were the field. That gives a charge one hundred times too **big**.

Visual: card shrinks to the top; "stationary", "1.0 cm" and "1000 V" underline. On "coulombs" "(a) E = V/d = 1000 / 0.010 = 1.0 × 10⁵ V m⁻¹; q = mg/E = (4.9 × 10⁻¹⁵)(9.8) / 1.0 × 10⁵ = 4.80 × 10⁻¹⁹ C". On "electrons" "(b) n = 4.80 × 10⁻¹⁹ / 1.602 × 10⁻¹⁹ = 3.00 → 3 electrons". On "big" a chip "q = mg/V = 4.8 × 10⁻¹⁷ C" fades in and is crossed (caption "V is not E: divide V by d first"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's experiment solved this. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's oil drop experiment resolved this. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Thomson's experiment gives only a ratio, e over m, and any charge and mass in that same ratio fit his results equally well. Millikan measured e on its own, from balanced oil drops, so dividing e by e over m gives the **mass**. The slip is saying Thomson measured the electron's mass. He measured a **ratio**.

Visual: card shrinks to the top; "alone" and "resolved" underline. Lines write in turn: "Thomson: e/m only; any (e, m) pair in that ratio fits"; "Millikan: e measured independently (qE = mg, multiples of e)"; on "mass" "m = e ÷ (e/m) = 9.10 × 10⁻³¹ kg". On "ratio" a chip "Thomson measured the electron's mass" fades in and is crossed. Hold about 1 second.

### 17. handoff
> So every atom contains electrons, tiny, negative and very light. Atoms are neutral, though, so something positive must balance them and carry nearly all the mass. Thomson guessed a ball of spread-out positive charge with electrons dotted through it, like plums in a pudding. To test what's inside something too small to see, you fire things at it. So why did scattering require a tiny dense **nucleus**?

Visual: board clears (camera change). On "every atom contains electrons" a grey atom outline with navy electron dots inside. On "something positive must balance them" the atom fills with a pale red wash, tag "positive charge: where?"; on "nearly all the mass" tag "and the mass". On "like plums in a pudding" the wash settles as a uniform pale red sphere with evenly scattered navy electrons, labels "spread-out positive charge" and "electrons"; tag "Thomson's guess, 1904: the plum-pudding model". On "you fire things at it" a coded alpha particle (a small amber circle "α (+)") approaches from the left with a dashed path ending in "?". On "nucleus" chip "Next: why did scattering require a tiny dense nucleus?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Cathode rays: streams of particles from the cathode of an evacuated tube. They cast sharp shadows (straight lines), are deflected by magnetic and electric fields, and bend towards the positive plate, so they are negative. The same particles appear for every gas and cathode metal, so they are in all matter (Thomson, 1897).
2. Thomson's e/m: balance qE = qvB, so v = E/B; then switch off B and measure the deflection y in plates of length L: q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹. Huge ratio: very light particles.
3. Millikan: a charged oil drop held still between plates: qE = mg, with E = V/d. Every drop's charge is a whole number of e = 1.602 × 10⁻¹⁹ C: charge is quantised.
4. Mass: m_e = e ÷ (e/m) = 9.10 × 10⁻³¹ kg (data sheet 9.109 × 10⁻³¹ kg); a proton is about 1836 times heavier.

Memory aid (large, on the notes screen): *Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass.*

## Teaching checks

- **Does it explain causes?** Why the rays were thought negative particles: deflection towards the positive plate (4). Why Hertz saw no bend: leftover gas screened the field (4). Why balancing fields gives speed: two forces equal and opposite (5). Why the deflection gives q/m: the projectile model links y to qE/m and the time in the plates (6). Why a huge q/m means a tiny mass (7). Why a held drop gives q: the forces balance (8, 9). Why two experiments: two unknowns, one ratio plus one value (11, 16).
- **Misconceptions addressed:** the paddle wheel proves particles (3); Thomson measured the mass (16 crossed); V used as E (14 crossed); charge can take any value (10, crossed "1.5e").
- **One idea at a time:** the tube (2), the evidence (3, 4), each of Thomson's stages (5, 6), the meaning (7), the drop (8, 9), quantisation (10), the combination (11).
- **Video makes it easier:** the shadow, the wheel, the bend that first failed then worked (3, 4); forces balancing and the beam straightening (5); the beam curving when B switches off (6); drops snapping onto multiples of e (10); the balance display filling in (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 23 s.
- **Avoided double teaching:** E = V/d, F = qE, qE = mg, v = E/B and the projectile path are Module 6 results recalled in a clause each.
- **Syllabus coverage:** `P8-IQ2-01`: early cathode-ray experiments (2 to 4), Thomson's charge-to-mass experiment (5 to 7), Millikan's oil drop experiment (8 to 10), and the combined electron properties (11). "Model" is met by the coded tube and plate models with explicit fields and forces; "assess" by the weak-hint judgement on the paddle wheel and A2.
- **Out of scope by design:** alpha scattering and the nucleus (v08); Stokes' law for the drop's mass (author note b); the magnetic-radius version of e/m (open decision 3).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An oil drop of mass 4.9 × 10⁻¹⁵ kg is held stationary between two horizontal parallel plates 1.0 cm apart when the potential difference between the plates is 1000 V. (a) Calculate the charge on the drop. (b) Calculate the number of excess electrons on the drop."
Model answer: (a) Stationary, so qE = mg. E = V/d = 1000/0.010 = 1.0 × 10⁵ V m⁻¹. q = mg/E = (4.9 × 10⁻¹⁵ × 9.8)/(1.0 × 10⁵) = 4.80 × 10⁻¹⁹ C. (b) n = q/e = 4.80 × 10⁻¹⁹ / 1.602 × 10⁻¹⁹ = 3.00, so 3 excess electrons. Classic mistake (crossed): q = mg/V = 4.8 × 10⁻¹⁷ C (V used as the field).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Explain why Thomson's charge-to-mass experiment alone could not determine the mass of the electron, and how Millikan's oil drop experiment resolved this."
Model answer: Thomson's crossed-field experiment measures only the ratio e/m of the cathode-ray particles; any combination of charge and mass with that ratio fits the measurement, so neither is found separately. Millikan measured the charge independently, by balancing the electric force on charged oil drops against their weight; the charges were always whole-number multiples of e = 1.602 × 10⁻¹⁹ C. Dividing e by Thomson's e/m gives the electron's mass, m = e ÷ (e/m) ≈ 9.1 × 10⁻³¹ kg. Classic mistake (crossed): "Thomson measured the electron's mass."

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; g = 9.8 m s⁻² | 9 to 14 |
| Thomson stage 1 (illustrative) | V = 300 V, d = 2.0 cm: E = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; v = E/B = 2.5 × 10⁷ m s⁻¹ | 5, 6 |
| Thomson stage 2 (illustrative) | L = 5.0 cm; t = L/v = 2.0 × 10⁻⁹ s; y = 5.28 mm; q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹ (true e/m_e gives y = 5.276 mm) | 6 |
| Ratio comparison | e/m_p = 9.58 × 10⁷ C kg⁻¹; e/m_e ÷ e/m_p = m_p/m_e = 1836.6 ≈ 1840 | 7, 11 |
| Worked drop | m = 1.96 × 10⁻¹⁵ kg, V = 600 V, d = 0.010 m: E = 6.0 × 10⁴ V m⁻¹; q = 3.20 × 10⁻¹⁹ C = 2.00e | 9, 10 |
| Charge axis (illustrative) | 1.60, 3.20, 4.81, 6.41, 8.01, 9.61 (× 10⁻¹⁹ C) = 1e to 6e | 10 |
| Electron mass | 1.602 × 10⁻¹⁹ / 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg; site 1.6/1.76 = 9.09 × 10⁻³¹ kg | 11, 16 |
| A1 | m = 4.9 × 10⁻¹⁵ kg, V = 1000 V, d = 0.010 m: E = 1.0 × 10⁵ V m⁻¹; q = 4.80 × 10⁻¹⁹ C; n = 3.00; wrong form mg/V = 4.80 × 10⁻¹⁷ C (100 × too big) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 300 / 0.020 = 1.5e4 V/m; 1.5e4 / 6.0e-4 = 2.5e7 m/s; 0.050 / 2.5e7 = 2.0e-9 s.
- 2 × 5.28e-3 × (2.5e7)² / (1.5e4 × 0.050²) = 1.760e11 C/kg; with 1.7587e11 C/kg the deflection is 5.276e-3 m.
- 1.602e-19 / 1.673e-27 = 9.576e7 C/kg; 1.673e-27 / 9.109e-31 = 1836.6.
- 600 / 0.010 = 6.0e4 V/m; 1.96e-15 × 9.8 / 6.0e4 = 3.2013e-19 C; / 1.602e-19 = 1.998.
- 1.602e-19 / 1.76e11 = 9.102e-31 kg.
- 1000 / 0.010 = 1.0e5 V/m; 4.9e-15 × 9.8 / 1.0e5 = 4.802e-19 C; / 1.602e-19 = 2.998; 4.9e-15 × 9.8 / 1000 = 4.802e-17 C.

## Memory aid check

- **"Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass."** Meaning, as said in scene 12: cathode-ray experiments established a negative particle common to all matter; Thomson measured its charge-to-mass ratio; Millikan measured the elementary charge; m = e ÷ (e/m). Assumptions checked: Thomson's ratio is for cathode-ray particles, which are electrons (the identity is the conclusion of scenes 4 and 7); Millikan's smallest charge is the electron's charge in size (an assumption he and later experiments supported: the drops gain or lose whole electrons); the division needs the two measurements to be independent (Millikan's balance does not use e/m). It helps a new case: A2 directly, and any "why both experiments" question. Introduced after the explanation (2 to 11).
- **Considered, not used:** "plums in a pudding" as a memory aid (it is the next video's model to be tested, not a summary of this one).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,019 characters**, 18 scenes. Characters per scene (1 to 18): 448, 419, 416, 362, 473, 471, 294, 379, 338, 324, 298, 157, 338, 337, 174, 300, 399, 75. At 13.3 characters per second the speech is about 453 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 81 s of holds and countdowns): **about 534 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's paddle-wheel sentence (keep the cell and tag); scene 6's derivation sentence (keep the strip); scene 7's last sentence.

## Opening frame

v06's final frame exactly (reconciled by root, 6 November): see `phys-y12-m8-v06.md` "Final frame" (element strip, plain gold atom with no structure drawn, cathode ray tube with beam off at the right, "Next" chip). Scene 1 keeps the tube and switches its glow on.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How did cathode rays and oil drops reveal the electron?"; at the centre Thomson's plum-pudding model: a uniform pale red sphere labelled "spread-out positive charge" with evenly scattered navy electron dots labelled "electrons"; tag "Thomson's guess, 1904: the plum-pudding model"; from the left a coded alpha particle (small amber circle "α (+)") with a dashed path heading for the sphere and ending in "?"; chip "Next: why did scattering require a tiny dense nucleus?". v08 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v07` (route phys-y12-m8-v07). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v07` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v07` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, cathode-ray-tube, early-evidence, thomson-vacuum, thomson-speed, thomson-ratio, ratio-meaning, millikan-balance, drop-charge, charge-packets, combine, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: tube stage (beam, glow, plates, field lines, crosses, force arrows), evidence grid, number line of charges, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the tube; 2 to 3 camera continue (grid beside the tube); 3 to 4 camera push into cell 4; 4 to 5 to 6 camera continue (same stage); 6 to 7 clear change; 7 to 8 clear change to the plates; 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v07-learning-review.md`, `science_check` = `checks/p-y12-m8-v07-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA, bench high-voltage supply; inspected for m6-v01): 2, 8.
- `public/assets/physics/phys-y11-oil-drop-v1.png` (1263 × 1246, RGBA, a single clear yellow drop; inspected for m6-v01): 8, 9.
- `public/assets/physics/phys-y11-top-pan-balance-v1.png` (top-pan balance; display overlaid in code): 1, 11. Codex to confirm alpha and a clear display area.
- `y12p-crt-tube-v1.png` (requested by m6-v02; side-on tube with gun and one pair of deflection plates): 1 to 6. Its plates and sidecar anchors carry the coded beam, field lines and crosses.
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a sealed shielded source; not relevant here); `y12p-discharge-tube-v1.png` (M7; a gas discharge, not a cathode ray tube).

Need (new plates):
1. `y12p-maltese-cross-tube-v1.png`: 3.
2. `y12p-paddle-wheel-tube-v1.png` with a separate wheel layer `y12p-paddle-wheel-v1.png`: 3.
3. `y12p-millikan-plates-v1.png`: 8, 9; A1 card thumbnail optional.
4. `y12p-atomiser-v1.png`: 8.

Coded: beams, glow, field lines, crosses, force arrows, evidence grid, charge axis, comparison bars, plum-pudding model, alpha particle, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v07 build brief):
1. **Tube stage.** Coded beam over the CRT plate with switchable E and B, beam path from the forces (straight when balanced, parabola in E alone, straight after the plates), and force arrows on a marker.
2. **Charge axis.** Dots that fall and settle on multiples of e, with labelled dashed lines.

## Codex asset brief

All new plates painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges, no text, no labels, no glow or beam), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, object centred with even margins, soft shadow inside the alpha only. No people, no hands, no faces.

1. **`y12p-maltese-cross-tube-v1.png`** (new). A classic Crookes "Maltese cross" tube seen side-on: a clear glass bulb, narrow neck at the left with a small disc cathode, a flat hinged metal Maltese cross (thin aluminium) standing upright inside the bulb in the middle, the wide rounded end of the bulb at the right, two electrode pins at the base of the neck. No glow, no shadow on the glass. Sidecar anchors: cathode centre; cross centre; centre of the right glass end.
2. **`y12p-paddle-wheel-tube-v1.png`** (new) and **`y12p-paddle-wheel-v1.png`** (separate layer). A horizontal Crookes paddle-wheel tube side-on: a long clear glass cylinder with disc electrodes at both ends, two thin glass rails running along its length, and a small light paddle wheel (mica vanes on a metal axle) resting on the rails. Deliver the wheel as a separate transparent layer (same scale) so code can roll it along the rails. Sidecar anchors: both electrode centres; the rail line; the wheel axle centre in the tube image.
3. **`y12p-millikan-plates-v1.png`** (new). A school Millikan apparatus, side view: two horizontal circular brass plates about 20 cm across, held parallel about 1 cm apart by three short clear insulating spacers, a small hole at the centre of the top plate, on a dark insulating base with two terminal posts; a short horizontal viewing microscope on a stand pointing at the gap from the right (eyepiece end visible, no observer); a small lamp housing at the left pointing into the gap. No drops, no field, no wires. Sidecar anchors: the hole centre; the gap's left and right ends; the two terminals.
4. **`y12p-atomiser-v1.png`** (new). A glass perfume-style atomiser with a rubber squeeze bulb and a short angled nozzle, side view, nozzle pointing down and to the right, no hand. Sidecar anchor: nozzle tip.

Requested earlier in this run: `y12p-crt-tube-v1.png` (m6-v02). Codex confirms `phys-y11-top-pan-balance-v1.png` has true alpha and a clear display area (report its corner points).

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
