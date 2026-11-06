# Year 11 Chemistry M4 V13: Gibbs free energy and spontaneity. How do enthalpy, entropy and temperature determine spontaneity? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,746 characters, 15 scenes, about 525 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: thirteenth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 82, between `chem-y11-m4-v12` (sign of entropy change) and `chem-y11-m4-v14` (temperature reversing spontaneity, the last video of the course); a concept and calculation video. Templates: `chem-y11-m4-v12.md` (same designer, colour key), `chem-y11-m4-v09.md` (calculation board), `math-a12-d10.md` (calculation staging), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v13` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use consistent energy units in DeltaG=DeltaH-TDeltaS; interpret the sign at stated conditions and distinguish spontaneous from fast."; next handoff: "When can changing temperature reverse reaction spontaneity?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson13.sa.html` (SHA256 `898ff79cedc1b9ac4309c53ee9cf48c201f1da8c6b5ec98291d3e9c767b76e0a`, recomputed, matches the route), sections `l13-defining-gibbs-free-energy-title`, `l13-the-haber-process-paradox-resolved-title`, `l13-solving-g-problems-step-by-step-title`. Used: ΔG = ΔH − TΔS with T in kelvin; the three sign meanings (ΔG < 0 spontaneous, > 0 non-spontaneous and the reverse favoured, = 0 neither favoured); the unit checklist (T(K) = T(°C) + 273; ΔS ÷ 1000) and "Both conversions must happen before substitution"; the 1000× error worked on the Haber numbers; the misconception "Spontaneous means the reaction happens quickly" and its fix (rate is set by activation energy); the Haber process at 25 °C ("spontaneous ... but very slow", N≡N barrier); the limestone data (non-spontaneous at room temperature), rebuilt with cited data. Not used here: the four sign combinations, the crossover temperature and the Haber operating-temperature paradox (v14 owns temperature; the paradox needs Year 12 equilibrium ideas, site note 3), ΔG = ΔG° + RT ln Q and K (Year 12 and beyond), −ΔG as maximum work. Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v12.md` (one learner question; no people, hands or faces; real objects as painted plates; equation cards, balance beam, calculation rows and the ΔG axis coded in the data-graph style; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ3-04`: "explain reaction spontaneity using terminology, including: (ACSCH072)"
  - "Gibbs free energy"
  - "enthalpy"
  - "entropy"
- `C4-IQ3-05`: "solve problems using standard references and ΔG° = ΔH° - TΔS° (Gibbs free energy formula) to classify reactions as spontaneous or nonspontaneous"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v12's final frame (same designer). Teaches: spontaneous in plain words (tends to happen by itself under the stated conditions, without being forced by an outside driver such as electricity; may need a start; may be slow) and non-spontaneous; why ΔS is multiplied by temperature (heat released makes a bigger entropy difference to cold surroundings than hot ones); ΔG = ΔH − TΔS as the total-entropy test written in energy units; the sign rules; units (ΔH kJ mol⁻¹, T in K, ΔS ÷ 1000); the Haber reaction at 25 °C (−32.8 kJ mol⁻¹, spontaneous); the two unit traps; spontaneous is not fast (Haber at 25 °C, methane needing a spark); limestone at 25 °C (+130.4 kJ mol⁻¹, non-spontaneous) and the handoff to heating it. Not taught: sign-combination analysis and threshold temperatures (v14), equilibrium, K and Q (Year 12), maximum work.

## Decisions

- **Learner question (route wording kept).** "How do enthalpy, entropy and temperature determine spontaneity?" The answer, in order: spontaneity is decided by total entropy (2, 3); enthalpy enters through the surroundings, scaled by temperature, giving ΔG = ΔH − TΔS (3); the sign of ΔG at the stated temperature decides (4, 5, 8); ΔG says whether, not how fast (7).
- **Opening frame (equals `chem-y11-m4-v12.md`'s final frame, same designer).** The Haber card with molecule tiles; orange chip "ΔH° = −91.8 kJ mol⁻¹: heat released, surroundings gain entropy" (tick "helps"); purple chip "ΔS° = −198.1 J K⁻¹ mol⁻¹: the system loses entropy" (cross "hurts"); a coded balance beam level and wobbling; the amber chip "One helps, one hurts. Which wins, and does temperature matter?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "At 25 °C, under standard conditions, does the ammonia reaction tend to go by itself: yes or no?" Answer: yes, ΔG° = −32.8 kJ mol⁻¹ (scene 5), followed by the surprise that nothing visibly happens (scene 7).
- **Spontaneous (scene 2; syllabus terminology).** "A spontaneous change is one that, under the stated conditions, tends to happen by itself, without being forced by something like electricity. It may need a start, and it may be slow." Revision 2 (brief 184): the Revision 1 clause "without a continuing supply of energy from outside" is dropped, because ice melting takes heat from its surroundings and m4-v14's heated limestone needs heat to hold its temperature; the definition now separates the tendency under the stated conditions from an imposed driving process. Examples: ice melting at 25 °C (spontaneous); water splitting into hydrogen and oxygen (non-spontaneous; only happens while electricity keeps flowing). The reverse of a spontaneous change is non-spontaneous.
- **Why T multiplies ΔS (scene 3).** From v11: heat released raises the surroundings' entropy. The same heat makes a bigger difference to cold surroundings, which have little energy to share, than to hot surroundings, which already have a lot (site lesson 11 hint, reworded; site note 2 in v11). So the surroundings' share is "ΔH divided by T", and the total-entropy test, rearranged into energy units, becomes ΔG = ΔH − TΔS. The rearrangement is shown on screen in small grey rows (ΔS(total) = ΔS − ΔH ÷ T; multiply by −T: −TΔS(total) = ΔH − TΔS = ΔG), not spoken as algebra. Gibbs free energy change, ΔG, glossed as "one number that combines the enthalpy change and the entropy change at a given temperature".
- **Sign rules (scene 4; site table).** ΔG negative: total entropy rises, spontaneous. ΔG positive: non-spontaneous (the reverse is spontaneous). ΔG zero: neither direction is favoured. The "°" means standard conditions (100 kPa for gases, 1 mol L⁻¹ for solutions) at the stated temperature; said once.
- **Units (scene 4; route stop).** ΔH in kJ mol⁻¹; T in kelvin (°C + 273, the site's and HSC's convention); ΔS in J K⁻¹ mol⁻¹ divided by 1000 to give kJ K⁻¹ mol⁻¹. Both conversions are written as their own rows before substitution (site checklist).
- **Calculation layout (scenes 5, 8; `math-a12-d10.md`).** Task strip; equation strip "ΔG° = ΔH° − TΔS°"; grouped givens with units; conversion rows; then TΔS; then ΔG; then a classification row. Results to three significant figures (Module 4 rule): Haber −32.8 kJ mol⁻¹; limestone +130 kJ mol⁻¹ (unrounded 130.4, shown).
- **Haber at 25 °C (scene 5).** ΔH° = −91.8 kJ mol⁻¹, ΔS° = −198.1 J K⁻¹ mol⁻¹ (from v12; OpenStax data). TΔS° = 298 × (−0.1981) = −59.0 kJ mol⁻¹; ΔG° = −91.8 − (−59.0) = −32.8 kJ mol⁻¹. The site's −32.7 and −33.1 come from its −92 and −92.4.
- **Unit traps (scene 6).** J not converted: −91.8 − 298 × (−198.1) = +58 942, "non-spontaneous", crossed. Celsius: −91.8 − 25 × (−0.1981) = −86.8, crossed (right sign, wrong number; the stamp says "T must be in kelvin").
- **Spontaneous is not fast (scene 7; route stop).** Ammonia at 25 °C: ΔG° negative, but a mixture of nitrogen and hydrogen makes no measurable ammonia for years, because breaking the strong nitrogen triple bond gives a high activation energy (m3-v13, m4-v01). Methane and air: spontaneous, yet a Bunsen needs a spark (m4-v01). ΔG tells whether a reaction can go; activation energy tells how fast. Plates: `p01-bunsen-unlit-v2.png` then `p01-bunsen-lit-v2.png`.
- **Limestone at 25 °C (scene 8).** CaCO₃(s) → CaO(s) + CO₂(g): ΔH° = +178.3 kJ mol⁻¹, ΔS° = +160.6 J K⁻¹ mol⁻¹ (NBS tables, Wagman et al. 1982; OpenStax's calcite row disagrees with other tables, so it is not used for this reaction; the site uses +178 and +160.7). TΔS° = 298 × 0.1606 = 47.9; ΔG° = +130.4 kJ mol⁻¹: non-spontaneous. Limestone buildings do not fall apart into lime and carbon dioxide. The entropy term helps but is too small at 25 °C.
- **Memory aid:** "Negative ΔG says it can go. Activation energy says how fast." (see "Memory aid check"), scene 9.
- **Attempts (original wording, HSC style; data from OpenStax).** A1: 2H₂O(l) → 2H₂(g) + O₂(g), ΔH° = +571.7 kJ mol⁻¹, ΔS° = +326.6 J K⁻¹ mol⁻¹, 25 °C: ΔG° = +474 kJ mol⁻¹, non-spontaneous. Crossed: "571.7 − 298 × 326.6 = −97 000 kJ: spontaneous" (J not converted). A2: 2H₂O₂(l) → 2H₂O(l) + O₂(g), ΔH° = −196.1 kJ mol⁻¹, ΔS° = +126.0 J K⁻¹ mol⁻¹, 25 °C: ΔG° = −234 kJ mol⁻¹, spontaneous; explain why a bottle of hydrogen peroxide solution can be stored for months (high activation energy, slow; m3-v15's catalyst speeds it). Crossed: "ΔG is negative, so it decomposes quickly".
- **Mistake scene:** none separate. Exothermic means spontaneous (1, 5: true here, not always: limestone's reverse and v14); J not converted (6; crossed in A1); °C used (6); spontaneous means fast (7; crossed in A2); ΔG positive means "impossible" (8: it is non-spontaneous at that temperature; the handoff says heating may change it).
- **Handoff (route next: `chem-y11-m4-v14`, "When can changing temperature reverse reaction spontaneity?").** Scene 14: limestone is non-spontaneous at 25 °C, yet lime kilns turn it into quicklime. ΔS is positive, so a larger T makes −TΔS more negative. Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 13 "Thermodynamic meaning" table and text description: "ΔG = 0: equilibrium, at T = ΔH ÷ ΔS; forward rate = reverse rate". This joins two different ideas: a mixture is at equilibrium whenever its actual ΔG = 0, at any temperature; T = ΔH° ÷ ΔS° is where ΔG° = 0, where neither direction is favoured under standard conditions (K = 1). Suggest separating them: "ΔG = 0: the mixture is at equilibrium" and "ΔG° = 0 at T = ΔH° ÷ ΔS°: under standard conditions neither direction is favoured".
  2. Lesson 13 header: "Syllabus reference: solve problems using the Gibbs free energy equation ... (ACSCH127)". The 2017 syllabus dot points for this content carry ACSCH072 (terminology) and no code for the formula dot point; the temperature dot point carries ACSCH070. Minor; suggest matching the syllabus.
  3. Lesson 13 Revisit: "The Haber process is run at high T purely because of kinetics ... Engineers accept thermodynamic non-spontaneity at 500°C because the iron catalyst provides enough rate." This contradicts the lesson's own careful paradox card (high pressure and NH₃ removal keep the actual ΔG negative). Suggest reusing the card's wording. This video does not teach the operating-temperature paradox (it needs Year 12 equilibrium).
  4. Lesson 13 drill "Rusting" (Q7) and others use "Tcross" with "Above 3002 K: non-spontaneous ... exceeds the melting point of iron". Correct, but note that ΔH° and ΔS° change at phase changes; the site's own caution covers it. No change needed.
  - Checked and correct: worked example 1 (−33.1, 464.6 K, +61.4 with −92.4); worked example 2 (−13.25, 720 K); drills (−817.6; +130.1, −10.5, 1108 K; 1053 K; 326 K; −0.21 and 273 K); Q6 to Q8 model answers; the 1000× error (−59 272 kJ mol⁻¹ with the site's numbers).
- **Cause chain taught, in order:** (1) a change goes by itself only if total entropy rises (2, 3; from v11); (2) heat released raises the surroundings' entropy, more so when they are cold, so the surroundings' share depends on ΔH and on T (3); (3) combining the system's ΔS with the surroundings' share and rearranging gives ΔG = ΔH − TΔS, negative when total entropy rises (3, 4); (4) ΔH is in kJ and ΔS in J, so ΔS must be divided by 1000 (4, 6); (5) temperature scales the entropy term, so T must start from absolute zero, in kelvin (4, 6); (6) for ammonia at 25 °C the released heat outweighs the system's entropy loss, so ΔG is negative (5); (7) a high activation energy means few collisions succeed, so a spontaneous reaction can be extremely slow (7); (8) for limestone at 25 °C the entropy gain is too small to pay for the heat absorbed, so ΔG is positive (8).
- **Entry knowledge:** m4-v11 (entropy, surroundings, second law), m4-v12 (ΔS° from tables; Haber −198.1), m4-v01 (ΔH, activation energy, the Bunsen spark), m3-v13 to v15 (collision theory, activation energy, catalysts; the peroxide catalyst), m2 (kelvin, from the gas laws).
- **Learner-visible vocabulary (plain meaning at first use):** spontaneous and non-spontaneous (2); Gibbs free energy change, ΔG (3); standard conditions, ° (4).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **balance beam** (scenes 1, 5: the v12 beam tips toward enthalpy when ΔG is negative); **surroundings ring** (scene 3, from v11: the same heat packets dropped into a cold ring and a hot ring; each ring's arrangement counter rises by a different amount); **formula build** (scene 3: grey rearrangement rows collapsing into "ΔG = ΔH − TΔS" with each symbol labelled and unit-tagged); **sign dial** (scene 4: a horizontal ΔG line with "spontaneous" left of zero, "non-spontaneous" right, "neither favoured" at zero); **calculation board** (scenes 5, 6, 8, A1, A2); **rate strip** (scene 7: a coded energy profile with a tall Eₐ hill beside the ΔG verdict); `p01-bunsen-unlit-v2.png`, `p01-bunsen-lit-v2.png`, `c9-ice-cube-v1.png`, new `y11c-limestone-lumps-v1.png`; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v11 and v12):** enthalpy orange (released) or blue (absorbed); entropy purple; temperature slate; ΔG green when negative (spontaneous), red when positive (non-spontaneous); activation energy amber (as v01); crossed items red strike; earlier rows dimmed.
- **Board layout (Revision 2):** heading top left. Stages, each under about 47 s: m4-v12's final frame (1); the gloss card with the painted ice and the electrolysis cell (2); the cold and hot rings with live counters, then the formula strip (3); the sign dial at full width under the strip (4); the calculation board with the beam (5); the full-width trap rows (6); the painted Bunsen pair with the rate strip (7); the painted limestone with its calculation (8); the framed memory card (9); question cards (10 to 13); the final layout (14).
- **Colour roles (Revision 2, fixed for the whole video):** enthalpy orange (released) or blue (absorbed); entropy purple; temperature slate; ΔG green when negative, red when positive; activation energy amber; energy packets amber; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; source and derivation rows grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); framed results, the ring counters and the beam's ΔG readout about 52 px; givens, conversion rows and dial labels 34 to 36 px; the grey derivation rows 28 px (supporting, not required reading); earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the cold and hot rings (scene 3) and the live beam (scene 5).** A live readout on the core idea (the same heat matters more to cold surroundings): three packets drop into each ring (m4-v11's packet model, 6 particles per ring); the cold ring's ways counter (52 px) jumps from 6 to 126 (× 21), the hot ring's from 3003 to 8568 (× 2.9), counting the ways with the v11 rule (grey tag "packet model, as in m4-v11"). In scene 5 the balance beam's two pans carry live weights "ΔH°: −91.8" and "TΔS°: −59.0" as each row is calculated, and its pointer readout settles on "ΔG° = −32.8 kJ mol⁻¹".

Author notes (not learner copy):
(a) Derivation (on screen in grey, not spoken): at constant T and P, ΔS(surroundings) = −ΔH(system) ÷ T; ΔS(total) = ΔS − ΔH ÷ T; multiplying by −T gives −TΔS(total) = ΔH − TΔS ≡ ΔG; so ΔG < 0 exactly when ΔS(total) > 0.
(b) Data: Haber from OpenStax (ΔfH°(NH₃) −45.9 kJ mol⁻¹; S° as in v12). Limestone from the NBS tables (Wagman et al., 1982, J. Phys. Chem. Ref. Data 11, Suppl. 2): ΔfH° CaCO₃(calcite) −1206.92, CaO −635.09, CO₂ −393.51 kJ mol⁻¹; S° 92.9, 39.75, 213.74 J K⁻¹ mol⁻¹; ΔH° = +178.32, ΔS° = +160.59. OpenStax lists calcite as −1220.0 kJ mol⁻¹ and 110.0 J K⁻¹ mol⁻¹, which disagrees with the NBS and CRC tables (CRC: −1207.6 and 91.7); Codex to confirm and root to log. Water splitting: −2(−285.83) = +571.66 kJ; 2(130.7) + 205.2 − 2(70.0) = +326.6 J K⁻¹. Peroxide: 2(−285.83) − 2(−187.78) = −196.10 kJ; 2(70.0) + 205.2 − 2(109.6) = +126.0 J K⁻¹ (OpenStax H₂O₂(l): −187.78, 109.6).
(c) T = °C + 273 (site and HSC convention); 298 K for 25 °C.
(d) Ammonia at 25 °C: no measurable reaction without a catalyst; even with the iron catalyst the rate is negligible at room temperature (site).
(e) Hydrogen peroxide solutions are stored in dark bottles and often contain stabilisers; decomposition is slow at room temperature and is sped up by catalysts such as manganese dioxide (m3-v15).
(f) Pronunciations: "delta G equals delta H minus T delta S"; "kilojoules per kelvin per mole"; "two hundred and ninety-eight kelvin".

Main question: *How do enthalpy, entropy and temperature determine spontaneity?*
Entry knowledge: m4-v01, m4-v11, m4-v12; m3-v13 to v15; kelvin.
Stops after: spontaneous defined; ΔG = ΔH − TΔS motivated from total entropy; sign rules and units; Haber and limestone classified at 25 °C; spontaneous distinguished from fast. No thresholds or sign-combination analysis.
Handoff: chem-y11-m4-v14, temperature reversing spontaneity.

## Opening frame and final frame

- **Opening frame:** m4-v12's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v14` opens on it):** left: `y11c-limestone-lumps-v1.png` with the equation card "CaCO₃(s) → CaO(s) + CO₂(g)", chips "ΔH° = +178.3 kJ mol⁻¹" (blue) and "ΔS° = +160.6 J K⁻¹ mol⁻¹" (purple). Right: a coded ΔG axis (vertical "ΔG° (kJ mol⁻¹)", horizontal "T (K)", a horizontal zero line), with one red point at "298 K: +130.4" and a faint dashed purple arrow leaving the point downward to the right, tagged "−TΔS grows as T rises". The amber chip "Hot enough, could ΔG turn negative?". The chip "Next: When can changing temperature reverse reaction spontaneity?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the ammonia reaction again. Its heat release helps, by raising the entropy of the surroundings. Its own entropy loss hurts. At twenty-five degrees, under standard conditions, which one wins? Does this reaction tend to go by itself, yes or **no**?

Visual: opens on m4-v12's final frame; the "Next" chip fades. Heading writes: "Which wins: enthalpy or entropy?". On "Its heat release helps" the orange chip pulses; on "Its own entropy loss hurts" the purple chip pulses; the beam wobbles. On "twenty-five degrees" a slate chip "25 °C, standard conditions". Chips "yes" and "no". On "no" the 3 s `Countdown` ring runs. Hand tags: orange "helps" and purple "hurts" beside the two chips, with a pen ring on the wobbling beam's pivot.

### 2. what spontaneous means
> First, let's name what we're asking. A spontaneous change is one that, under the stated conditions, tends to happen by itself, without being forced by something like electricity. It may need a start, and it may be slow. Ice melting at twenty-five degrees is spontaneous. Water splitting into hydrogen and oxygen is non-spontaneous. It only happens while electricity keeps flowing, and it stops when you switch **off**.

Visual: the Haber card moves to the upper left and stays small. On "A spontaneous change is one that" gloss card "spontaneous: tends to happen by itself under the stated conditions, not forced by an outside driver such as electricity (may need a start; may be slow)" (green outline). On "Ice melting at twenty-five degrees" `c9-ice-cube-v1.png` with a coded puddle, green chip "spontaneous". On "Water splitting into hydrogen and oxygen" a coded electrolysis cell (two electrodes in a beaker, bubbles at each, a battery symbol), red chip "non-spontaneous". On "off" the battery symbol switches off and the bubbles stop. Hand tags: green "by itself" with a pen ring on the puddle; red "only while forced" on the switched-off battery.

### 3. why temperature multiplies entropy
> Last time we saw that a change goes by itself only if the total entropy, of the system plus the surroundings, goes up. The system's part is delta S. The surroundings' part comes from the heat. And here's where temperature matters. The same heat makes a bigger difference to cold surroundings, which have little energy to share, than to hot surroundings, which already have plenty. Put the two parts together, write them in energy units, and you get the Gibbs free energy change: delta G equals delta H minus T delta **S**.

Visual: the surroundings ring from v11: system (dashed teal) inside a grey ring. On "The system's part is delta S" a purple chip on the system "ΔS". On "The surroundings' part comes from the heat" orange arrows carry heat packets into the ring. On "The same heat makes a bigger difference to cold surroundings" the ring splits into two side-by-side rings: "cold" (few amber packets) and "hot" (many); the same three packets drop into each; the live ways counters (Decisions) run: cold "6 → 126 ways (× 21)", hot "3003 → 8568 ways (× 2.9)" (grey tag "packet model, as in m4-v11"). On "Put the two parts together" grey rearrangement rows write small at the right: "ΔS(total) = ΔS − ΔH ÷ T", "× (−T): −TΔS(total) = ΔH − TΔS". On "the Gibbs free energy change" they collapse into a large strip "ΔG = ΔH − TΔS" (green), with gloss "Gibbs free energy change, ΔG: one number that combines ΔH and ΔS at a given temperature". On "S" each symbol gains a coloured label: "ΔH" orange, "T" slate, "ΔS" purple. Purple hand tag "cold: big jump" with a `PenArrow` to the × 21 counter; slate hand tag "so T multiplies ΔS" with a pen ring on the T in the strip.

### 4. reading delta G and the units
> The sign tells you the answer. If delta G is negative, the total entropy rises, and the change is spontaneous. If it's positive, the change is non-spontaneous, and the reverse is spontaneous instead. At zero, neither direction is favoured. The little circle means standard conditions, at the stated temperature. Watch the units. Delta H is in kilojoules per mole. Delta S is in joules, so divide it by a thousand. And T must be in kelvin, so add two hundred and seventy-**three**.

Visual: the sign dial under the strip: a horizontal ΔG line, a zero mark; on "If delta G is negative" the left half fills green "ΔG < 0: spontaneous"; on "If it's positive" the right half fills red "ΔG > 0: non-spontaneous (reverse spontaneous)"; on "At zero" the zero mark rings "ΔG = 0: neither direction favoured". On "standard conditions" the strip becomes "ΔG° = ΔH° − TΔS°" with a gloss "°: standard conditions (100 kPa, 1 mol L⁻¹) at the stated temperature". On "kilojoules per mole" a unit tag under ΔH° "kJ mol⁻¹"; on "divide it by a thousand" under ΔS° "J K⁻¹ mol⁻¹ ÷ 1000 → kJ K⁻¹ mol⁻¹"; on "three" under T "K = °C + 273". Stage: the dial runs full width under the strip (stage change; dial labels 36 px). Hand tags: green "go" on the left half, red "won't go" on the right; slate "+ 273" with a pen ring on the K tag.

### 5. ammonia at twenty-five degrees
> Now ammonia at twenty-five degrees. Delta H is minus ninety-one point eight kilojoules. Delta S is minus one hundred and ninety-eight point one joules, which is minus zero point one nine eight one kilojoules per kelvin. T is two hundred and ninety-eight kelvin. T delta S is two hundred and ninety-eight times minus zero point one nine eight one, minus fifty-nine point zero. So delta G is minus ninety-one point eight, minus minus fifty-nine point zero, which is minus thirty-two point eight kilojoules per mole. Negative, so yes, it's spontaneous. At this temperature, the heat release **wins**.

Visual: the calculation board beside the Haber card. Task strip: "Is N₂(g) + 3H₂(g) → 2NH₃(g) spontaneous at 25 °C?". Equation strip "ΔG° = ΔH° − TΔS°". Givens: on "minus ninety-one point eight kilojoules" "ΔH° = −91.8 kJ mol⁻¹" (orange); on "minus zero point one nine eight one kilojoules per kelvin" "ΔS° = −198.1 J K⁻¹ mol⁻¹ = −0.1981 kJ K⁻¹ mol⁻¹" (purple, the ÷ 1000 written small); on "two hundred and ninety-eight kelvin" "T = 25 + 273 = 298 K" (slate). Stage rows: on "two hundred and ninety-eight times minus zero point one nine eight one" "TΔS° = 298 × (−0.1981) = −59.0 kJ mol⁻¹"; on "minus minus fifty-nine point zero" "ΔG° = −91.8 − (−59.0)"; on "minus thirty-two point eight kilojoules per mole" "= −32.8 kJ mol⁻¹" (green). On "spontaneous" a classification row "ΔG° < 0: spontaneous at 25 °C"; the prediction chip "yes" ticks. On "wins" the balance beam, its pans carrying live weights "ΔH°: −91.8" and "TΔS°: −59.0", tips toward the orange chip and its readout settles on "ΔG° = −32.8 kJ mol⁻¹"; the result row frames in a dark-ink box with a green tick (52 px). Purple hand tag "÷ 1000 first" with a pen ring on the ΔS° conversion row; red hand tag "minus a negative adds" with a `ScribbleCircle` round the double minus.

### 6. the two unit traps
> Two traps. Forget to divide delta S by a thousand, and you'd get plus fifty-eight thousand nine hundred and forty-two, which says non-spontaneous and is completely wrong. Use twenty-five degrees instead of two hundred and ninety-eight kelvin, and you'd get minus eighty-six point eight, the right sign but the wrong number. Convert both before you **substitute**.

Visual: two ghost rows under the working: on "Forget to divide delta S by a thousand" "−91.8 − 298 × (−198.1) = +58 942" with the red stamp "J not converted"; on "Use twenty-five degrees" "−91.8 − 25 × (−0.1981) = −86.8" with the stamp "T must be in kelvin". On "substitute" the two conversion rows in the givens are ringed teal, tag "convert first". Stage: the two trap rows fill the frame at 44 px (stage change from the board). Red hand tags "J vs kJ" and "K, not °C" on the two crossed rows.

### 7. spontaneous is not fast
> So here's the surprise. Mix nitrogen and hydrogen at twenty-five degrees, and you can wait for years without making any ammonia you could measure. Spontaneous doesn't mean fast. Breaking nitrogen's strong triple bond gives this reaction a very high activation energy, so almost no collisions succeed. Methane and air are the same. Burning is spontaneous, but a Bunsen burner still needs a spark. Delta G tells you whether a reaction can go. Activation energy tells you how **fast**.

Visual: on "Mix nitrogen and hydrogen" a coded sealed flask of N₂ and H₂ molecules with a calendar counter running "1 year, 2 years..." and a "NH₃ formed: none measurable" readout. On "Spontaneous doesn't mean fast" a crossed chip "spontaneous = fast". On "very high activation energy" the rate strip: a coded energy profile with a tall amber Eₐ hill (from v01's style) beside the green "ΔG° = −32.8". On "Methane and air" `p01-bunsen-unlit-v2.png`; on "still needs a spark" a coded spark and the plate cross-fades to `p01-bunsen-lit-v2.png`. On "Delta G tells you whether" a green chip "ΔG: whether"; on "fast" an amber chip "Eₐ: how fast". Stage: the painted Bunsen burner large at the left, the rate strip at the right. Amber hand tag "the hill decides the speed" with a `PenArrow` up the Eₐ hill; green hand tag "can go" on the ΔG chip.

### 8. limestone at twenty-five degrees
> Now a reaction that absorbs heat. Limestone, calcium carbonate, can break down into lime and carbon dioxide gas. Delta H is plus one hundred and seventy-eight point three kilojoules, and delta S is plus one hundred and sixty point six joules per kelvin, which is plus zero point one six zero six kilojoules. At two hundred and ninety-eight kelvin, T delta S is forty-seven point nine. So delta G is plus one hundred and seventy-eight point three minus forty-seven point nine, plus one hundred and thirty point four kilojoules. Positive, so it's non-spontaneous. The entropy gain helps, but at this temperature it's far too **small**.

Visual: board clears to the calculation board with new `y11c-limestone-lumps-v1.png` at the left and the card "CaCO₃(s) → CaO(s) + CO₂(g)". Givens: on "plus one hundred and seventy-eight point three kilojoules" "ΔH° = +178.3 kJ mol⁻¹" (blue); on "plus zero point one six zero six kilojoules" "ΔS° = +160.6 J K⁻¹ mol⁻¹ = +0.1606 kJ K⁻¹ mol⁻¹" (purple; grey source tag "NBS tables, Wagman et al. 1982"); "T = 298 K". Rows: on "T delta S is forty-seven point nine" "TΔS° = 298 × 0.1606 = 47.9 kJ mol⁻¹"; on "plus one hundred and thirty point four kilojoules" "ΔG° = 178.3 − 47.9 = +130.4 kJ mol⁻¹" (red), framed in a dark-ink box with a tick (52 px). On "non-spontaneous" "ΔG° > 0: non-spontaneous at 25 °C"; a grey tag "limestone buildings stay limestone". On "small" a bar pair: "ΔH°: 178.3" (blue, long) against "TΔS°: 47.9" (purple, short). Stage: the painted limestone large at the left (stage change). Hand tags: blue "costs 178.3" on the long bar, purple "pays only 47.9" on the short bar, with a pen ring on the gap.

### 9. can go, how fast
> Here's the pair to remember. Negative delta G says it can go. Activation energy says how **fast**.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "Negative ΔG says it can go. Activation energy says how fast." Beneath, the green "ΔG < 0" chip and the amber Eₐ hill from scene 7 sit side by side; on "fast" the hill pulses.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Water splits into hydrogen and oxygen gases. Delta H is plus five hundred and seventy-one point seven kilojoules, and delta S is plus three hundred and twenty-six point six joules per kelvin. Calculate delta G at twenty-five degrees, and classify the reaction. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "For the reaction 2H₂O(l) → 2H₂(g) + O₂(g): ΔH° = +571.7 kJ mol⁻¹ and ΔS° = +326.6 J K⁻¹ mol⁻¹. Calculate ΔG° at 25 °C, and classify the reaction as spontaneous or non-spontaneous at this temperature. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Delta S is zero point three two six six kilojoules, and T is two hundred and ninety-eight kelvin. T delta S is ninety-seven point three. So delta G is five hundred and seventy-one point seven minus ninety-seven point three, about plus four hundred and seventy-four kilojoules per mole. Positive, so non-spontaneous. Forgetting to divide by a thousand gives about minus ninety-seven thousand, which wrongly says **spontaneous**.

Visual: card shrinks to the top. Rows: "ΔS° = 326.6 ÷ 1000 = 0.3266 kJ K⁻¹ mol⁻¹; T = 298 K"; "TΔS° = 298 × 0.3266 = 97.3 kJ mol⁻¹"; "ΔG° = 571.7 − 97.3 = +474 kJ mol⁻¹: non-spontaneous" (red). On "Forgetting to divide by a thousand" a chip "571.7 − 298 × 326.6 ≈ −97 000" fades in; on "spontaneous" it gains the wrong verdict "spontaneous" and is crossed. Hold about 1 second. The ΔG° row frames in a dark-ink box with a tick (52 px). The crossed chip carries a red hand tag "divide by 1000".

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Hydrogen peroxide decomposes into water and oxygen. Delta H is minus one hundred and ninety-six point one kilojoules, and delta S is plus one hundred and twenty-six point zero joules per kelvin. Calculate delta G at twenty-five degrees. Then explain why a bottle of hydrogen peroxide can still be stored for months. Pause here to answer.

Visual: `QuestionCard`: "For the reaction 2H₂O₂(l) → 2H₂O(l) + O₂(g): ΔH° = −196.1 kJ mol⁻¹ and ΔS° = +126.0 J K⁻¹ mol⁻¹. (a) Calculate ΔG° at 25 °C. (2 marks) (b) Hydrogen peroxide solution can be stored for months at room temperature. Explain why this is consistent with your answer to (a). (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> T delta S is two hundred and ninety-eight times zero point one two six, thirty-seven point five. So delta G is minus one hundred and ninety-six point one minus thirty-seven point five, about minus two hundred and thirty-four kilojoules. It's spontaneous, but the activation energy is high, so it's very slow, until a catalyst speeds it up. Saying it must decompose quickly confuses spontaneous with **fast**.

Visual: card shrinks. Rows: "TΔS° = 298 × 0.1260 = 37.5 kJ mol⁻¹"; "ΔG° = −196.1 − 37.5 = −234 kJ mol⁻¹: spontaneous" (green); "(b) high Eₐ: very slow at room temperature; a catalyst (such as MnO₂) speeds it up" (amber). On "confuses spontaneous with" a chip "ΔG < 0, so it decomposes quickly" fades in; on "fast" it is crossed. Hold about 1 second. The ΔG° row frames in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "whether, not how fast".

### 14. conclusion and handoff
> So enthalpy, entropy and temperature combine in delta G equals delta H minus T delta S, and its sign at the stated temperature decides whether a change is spontaneous. Limestone is non-spontaneous at twenty-five degrees. But lime kilns turn limestone into lime every day. Its delta S is positive, so as T gets bigger, minus T delta S gets more negative. Hot enough, could delta G turn **negative**?

Visual: the memory line returns small at the top. On "delta G equals delta H minus T delta S" the green formula strip pulses. On "Limestone is non-spontaneous" the limestone plate and card return at the left with the chips "ΔH° = +178.3 kJ mol⁻¹" and "ΔS° = +160.6 J K⁻¹ mol⁻¹". On "lime kilns" a grey chip "lime kilns: limestone → lime". On "as T gets bigger" a coded ΔG axis draws at the right ("ΔG° (kJ mol⁻¹)" against "T (K)", zero line), with the red point "298 K: +130.4"; on "minus T delta S gets more negative" a faint dashed purple arrow leaves the point downward to the right, tag "−TΔS grows as T rises". On "negative" the amber chip "Hot enough, could ΔG turn negative?" and the chip "Next: When can changing temperature reverse reaction spontaneity?" write. Hold about 2 seconds. This is the final frame (m4-v14 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Spontaneous: tends to happen by itself under the stated conditions (may need a start; may be slow).
2. ΔG° = ΔH° − TΔS°: negative, spontaneous; positive, non-spontaneous; zero, neither favoured.
3. Units: ΔS ÷ 1000 (kJ K⁻¹ mol⁻¹); T in K (°C + 273). Convert before substituting.
4. At 298 K: NH₃ −32.8 kJ mol⁻¹ (spontaneous); CaCO₃ +130.4 (non-spontaneous).
5. Spontaneous ≠ fast: ΔG says whether; activation energy says how fast.

Memory aid (framed card, on the notes screen): *Negative ΔG says it can go. Activation energy says how fast.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why total entropy decides (3, from v11); why T multiplies ΔS (3: heat matters more to cold surroundings); why the sign of ΔG decides (3, 4); why ΔS is divided by 1000 and T is in kelvin (4, 6); why ammonia is spontaneous at 25 °C (5); why it still doesn't happen (7: activation energy); why limestone is not (8).
- **Misconceptions addressed:** spontaneous means fast (7; crossed in A2); J not converted (6; crossed in A1); °C used (6); exothermic is enough (14 and v14); ΔG > 0 means impossible (8, 14: only at that temperature).
- **One idea at a time:** prediction (1), definition (2), why the formula (3), signs and units (4), worked ammonia (5), traps (6), rate (7), limestone (8).
- **Video makes it easier:** the same heat packets dropped into a cold and a hot ring with different count jumps (3); grey rearrangement rows collapsing into the formula (3); a sign dial (4); a balance beam that tips (5); a calendar counter beside a tall Eₐ hill (7); a long ΔH bar against a short TΔS bar (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all data on the cards, 10 s each, nothing answer-bearing. Feedback about 33 s and 31 s (slightly above the 30 s guide because each restates both unit conversions; the learning review may trim).
- **Avoided double teaching:** entropy, the surroundings and the second law (m4-v11); ΔS° from tables (m4-v12); activation energy and catalysts (m3-v13 to v15, m4-v01, m4-v05).
- **Syllabus coverage:** `C4-IQ3-04` "explain reaction spontaneity using terminology, including: Gibbs free energy, enthalpy, entropy" (2 to 5, 7, 8); `C4-IQ3-05` "solve problems using standard references and ΔG° = ΔH° - TΔS° ... to classify reactions as spontaneous or nonspontaneous" (5, 8, A1, A2). Temperature effects (`C4-IQ3-06`) are v14.
- **Out of scope by design:** threshold temperatures and sign combinations (v14); equilibrium, K and Q (Year 12); maximum work.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: ΔS° = 326.6 ÷ 1000 = 0.3266 kJ K⁻¹ mol⁻¹ and T = 25 + 273 = 298 K (1 mark); ΔG° = 571.7 − 298 × 0.3266 = 571.7 − 97.3 = +474 kJ mol⁻¹ (1 mark); ΔG° > 0, so the reaction is non-spontaneous at 25 °C (1 mark). Classic mistake (crossed): 571.7 − 298 × 326.6 ≈ −97 000 kJ mol⁻¹, "spontaneous" (ΔS not converted).

**Attempt 2 (scene 12; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) TΔS° = 298 × 0.1260 = 37.5 kJ mol⁻¹ (1 mark); ΔG° = −196.1 − 37.5 = −234 kJ mol⁻¹, spontaneous (1 mark). (b) ΔG° tells only whether the reaction can proceed, not its rate (1 mark); the decomposition has a high activation energy, so at room temperature it is very slow unless a catalyst is added (1 mark). Classic mistake (crossed): "ΔG is negative, so it decomposes quickly".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Haber data | ΔH° = −91.8 kJ mol⁻¹; ΔS° = −198.1 J K⁻¹ mol⁻¹ = −0.1981 kJ K⁻¹ mol⁻¹ | opening, 1, 5 |
| Temperature | 25 °C = 298 K | 4, 5, 8, A1, A2 |
| Haber at 298 K | TΔS° = −59.0; ΔG° = −32.8 kJ mol⁻¹ | 5, key notes |
| Traps | J slip +58 942; °C slip −86.8 | 6 |
| Limestone data | ΔH° = +178.3 kJ mol⁻¹; ΔS° = +160.6 J K⁻¹ mol⁻¹ (NBS) | 8, 14, final frame |
| Limestone at 298 K | TΔS° = 47.9; ΔG° = +130.4 kJ mol⁻¹ | 8, 14, final frame |
| A1 | ΔH° +571.7; ΔS° +326.6 → 0.3266; TΔS° 97.3; ΔG° +474 (474.4); slip ≈ −97 000 (−96 755) | 10, 11 |
| A2 | ΔH° −196.1; ΔS° +126.0 → 0.1260; TΔS° 37.5; ΔG° −234 (−233.6) | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 2(−45.9) = −91.8; 298 × (−0.1981) = −59.034; −91.8 + 59.034 = −32.766 → −32.8.
- −91.8 − 298 × (−198.1) = +58 941.999 ≈ +58 942; −91.8 − 25 × (−0.1981) = −86.85 → −86.8 (displayed to one decimal as −86.8; unrounded −86.8475).
- NBS: −635.09 − 393.51 + 1206.92 = 178.32; 39.75 + 213.74 − 92.9 = 160.59; 298 × 0.1606 = 47.859; 178.3 − 47.859 = 130.44 → +130.4.
- Water splitting: −2(−285.83) = 571.66; 2(130.7) + 205.2 − 2(70.0) = 326.6; 298 × 0.3266 = 97.33; 571.7 − 97.33 = 474.37; 571.7 − 298 × 326.6 = −96 755.1.
- Peroxide: 2(−285.83) − 2(−187.78) = −196.10; 2(70.0) + 205.2 − 2(109.6) = 126.0; 298 × 0.1260 = 37.548; −196.1 − 37.548 = −233.65 → −234.

## Memory aid check

- **"Negative ΔG says it can go. Activation energy says how fast."** Written for this lesson from the site's misconception box ("Spontaneous means thermodynamically favourable, not fast"). Meaning, as said in scenes 7 and 9: the sign of ΔG at the stated conditions tells whether a reaction tends to proceed; the activation energy (with temperature and catalysts) sets its rate. Assumptions checked: "can go" means "tends to proceed under the stated conditions" (scene 2), not "will start without a spark" (scene 7 says it may need a start); standard conditions are stated (scene 4); it does not claim ΔG and Eₐ are unrelated in every sense, only that the sign of one does not set the size of the other. It helps a new case: A2.
- **Considered, not used:** "Negative G, good to go" (rhymes, but "good to go" suggests it starts and runs at once, the very misconception).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,746 characters**, 15 scenes (per scene: 249, 414, 518, 476, 593, 359, 478, 629, 94, 293, 423, 347, 404, 394, 75; Revision 1: 5,746). At 13.3 characters per second the speech is about 432 s; add about 12 s of settling (the rings and counters in 3, the dial in 4, the calculation and beam in 5, the rate strip in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 525 s** (Revision 1: about 523 s).

## Scene list and build ids

Lesson key `c-y11-m4-v13` (route chem-y11-m4-v13; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v13`.

In order (15 scene headings, all `### N.`): hook-prediction, spontaneous-defined, why-t-delta-s, signs-and-units, ammonia-298, unit-traps, not-fast, limestone-298, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v12's final frame into scene 1 by camera continue; 1 to 2 camera continue (the Haber card shrinks to the corner); 2 to 3 clear change to the surroundings ring; 3 to 4 camera continue (the formula strip stays); 4 to 5 camera continue (calculation board beside the Haber card); 5 to 6 camera continue; 6 to 7 clear change to the flask and rate strip; 7 to 8 board clear to the limestone board; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v13-learning-review.md`, `checks/c-y11-m4-v13-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c9-ice-cube-v1.png` (2095 × 2105): scene 2.
- `public/assets/chemistry/p01-bunsen-unlit-v2.png` and `p01-bunsen-lit-v2.png` (2000 × 2000 each, an aligned pair): scene 7.
- **Inspected, not used:** `c7-ammonia-storage-tank-v1.png` (industry framing belongs with the operating-temperature question, which this video does not teach); `m5x-limestone-cave-v1.png` (a cave shows limestone dissolving in acidic water, a different reaction).

Have (Revision 2): `public/assets/chemistry/y11c-limestone-lumps-v1.png` was delivered in brief 184 (1254 × 1254 native, not upsampled; heap about 61% of the canvas width; inspected 6 November on a dark sheet: pale grey, matt, irregular lumps, clean cutout). Used at native size by uniform scaling only; its partner `y11c-quicklime-lumps-v1.png` registers within about 3 native pixels (brief 184 manifest), so the m4-v14 cross-fade holds. Root accepts the native size and fill as delivered. The Revision 1 request is kept below for the record.

Requested in Revision 1 (now delivered):
- `public/assets/chemistry/y11c-limestone-lumps-v1.png`: a small heap of pale grey limestone lumps (calcium carbonate, irregular, matt, fist-sized pieces, a few smaller chips), on nothing (no dish, no surface), three-quarter view from slightly above, soft studio light from the upper left, painted in the HSCScience chemistry plate style (realistic gouache-like painting, gentle texture), 2000 × 2000 px canvas with the heap centred and filling about 70% of the width. **Transparent PNG with an alpha channel.** No text, no labels, no people, no hands. This plate is the "before" of an aligned pair: `y11c-quicklime-lumps-v1.png` (requested in `chem-y11-m4-v14.md`) must use the same canvas, camera, heap outline and light, so the two can cross-fade by translation only. Used: scenes 8, 14, final frame; v14 opening and scenes 1 to 5.

Coded: surroundings rings, formula build, sign dial, calculation rows, electrolysis cell, sealed flask and calendar counter, rate strip, ΔG axis, bars, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson13.sa.html` (the three named sections) and the site notes' quotations.
3. Confirm the NBS (Wagman et al. 1982) values for CaCO₃, CaO and CO₂ (author note b), and log OpenStax's calcite row (−1220.0, 110.0) against the CRC values for root. Confirm OpenStax H₂O₂(l) −187.78 kJ mol⁻¹ and 109.6 J K⁻¹ mol⁻¹.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (including the hyphen-minus in "ΔH° - TΔS°" as printed in the ledger).
6. Confirm no person, hand or face is drawn or requested (the electrolysis cell and the spark are coded); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v12's final frame, and send the final frame and the limestone plate pairing to the m4-v14 designer.

## YouTube metadata (draft)

Title: Gibbs Free Energy and Spontaneity: ΔG = ΔH − TΔS | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

The ammonia reaction releases heat, but its entropy falls. Which wins? Learn what "spontaneous" means, why temperature multiplies the entropy change, and how ΔG = ΔH − TΔS combines both into one test. Work through ammonia and limestone at 25 °C with the unit conversions (J to kJ, °C to K), and see why a spontaneous reaction can still be extremely slow. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"explain reaction spontaneity using terminology, including: Gibbs free energy, enthalpy, entropy (ACSCH072)"
"solve problems using standard references and ΔG° = ΔH° - TΔS° (Gibbs free energy formula) to classify reactions as spontaneous or nonspontaneous"

Previous: How can a balanced reaction suggest the sign of entropy change? Next: When can changing temperature reverse reaction spontaneity?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. The formula's origin (learning review).** Scene 3 motivates ΔG = ΔH − TΔS from total entropy, with the algebra on screen only. If the learning review finds it too much for Year 11, scene 3 keeps its first five sentences and states the formula (about 120 characters shorter); the "cold surroundings" idea is still needed for v14.
- **2. Limestone data source (root, Codex).** NBS values (+178.3, +160.6) against the site's +178 and +160.7 and the CRC's (+179.2, +160.2). OpenStax's calcite row looks wrong (author note b). Root to accept NBS for this one reaction, or switch the whole module to one table.
- **3. Plate (resolved in Revision 2).** `y11c-limestone-lumps-v1.png` and v14's quicklime plate were delivered in brief 184 and inspected; used at native size.
- **4. Length (learning review).** Reserve cut: scene 6's Celsius trap (about 130 characters); the unit checklist in scene 4 still covers it.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the "same heat matters more to cold surroundings" idea land in scene 3; is scene 5's "minus minus" read clearly by the Google voice, fallback "plus fifty-nine point zero"), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 1 should fix; resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 5,746 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted exactly in its scene's Visual in spoken order (scene 11 "spontaneous" and scene 13 "fast" now quoted).

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v13-learning-review.md`, `checks/c-y11-m4-v13-science-check.md`; both list the same one):
1. Spontaneous definition (should fix): scene 2 now says "A spontaneous change is one that, under the stated conditions, tends to happen by itself, without being forced by something like electricity." The overbroad clause "without a continuing supply of energy from outside" is dropped (ice melting takes heat from its surroundings; m4-v14's heated limestone needs heat to hold its temperature). The gloss card, the Boundary line, the Spontaneous decision and key note 1 match. The slow-reaction contrast and the negative-ΔG criterion at constant temperature and pressure are kept; the on-screen-only derivation (root decision 12) is unchanged.

Visual upgrade (teaching logic unchanged):
- Scene 1 opens on m4-v12's final frame (coded cards and beam, unchanged, for the join); the painted ice arrives in scene 2, the Bunsen pair in 7 and the limestone in 8. The limestone and quicklime plates are now delivered (brief 184) and inspected; Assets records them as had, used at native size.
- Live readouts: the cold and hot rings (scene 3): three packets raise the cold ring's ways from 6 to 126 (× 21) and the hot ring's from 3003 to 8568 (× 2.9) (Python: C(6,1), C(9,4), C(15,10), C(18,13)); the live beam (scene 5) carries ΔH° −91.8 and TΔS° −59.0 and settles on ΔG° = −32.8.
- Stage list written (Board layout): the dial (4) and the trap rows (6) become full-width stages, so no set-up runs past about 47 s.
- Framed answers: −32.8 (5), +130.4 (8), +474 (feedback 1), −234 (feedback 2). Crossed slips carry red hand tags; "minus a negative adds" on scene 5's double minus.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 8).
- Bold cues now quoted exactly: scene 11 "spontaneous", scene 13 "fast".
- Memory line as a framed card; key notes cut to five short bullets (about 420 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The opening and the final frame are unchanged, so the joins with m4-v12 and m4-v14 hold.

New plate requests: none (the Revision 1 limestone request is delivered).

Counts: 5,746 characters (Revision 1: 5,746); about 523 s to about 525 s.
