# Year 12 Physics M8 V11: Hydrogen energy levels and the Balmer series. How do hydrogen energy gaps predict Balmer wavelengths? (design)

Status: Revision 2 (7 Nov 2026): brief 192 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,034 characters, 18 scenes, about 520 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v10's final frame.

Scope: eleventh video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that classical physics cannot explain the properties of the atom?". Templates as `phys-y12-m7-v10.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through `work/brief168/module8-lesson12.sa.txt`; also read for v10): lesson 12, especially "state-bohrs-postulates" (four lines 656, 486, 434, 410 nm; E_n = −13.6/n² eV; Figure 1 levels −13.6, −3.40, −1.51, −0.85 eV; Stop and check n = 3 → 2), "predict-wavelengths-with-rydberg" (1/λ = R_H(1/n_f² − 1/n_i²), R_H = 1.097 × 10⁷ m⁻¹, the five series and their regions, Figure 2, Stop and check: shortest Balmer wavelength, true/false items), "avoid-the-standard-bohr-traps" (n_i > n_f for emission; shortest λ from n_i = ∞; longest from n_f + 1; misconception on wavelength order), "calculate-spectral-lines" (Activity 1: Hα, Lyman-α, Balmer limit, 5 → 2 in eV and J), "Analyse 6 marks" (discrete levels to discrete lines, E = hf = hc/λ by conservation of energy, the series by its lower level, crowding from level spacing, the series limit), independent practice Q1 (4 → 2, 486 nm) and Q2 (c), (d): `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson12.sa.html`, SHA256 `d94a625920457295b9d4e2cf96410ffb63f6d47d3c16247570df4b189fc82f0e` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v11`, sections `predict-wavelengths-with-rydberg`, `calculate-spectral-lines`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Link transitions ending n=2 to visible lines; calculate with Rydberg and E=hf=hc/lambda. Keep series limit separate from one line." Next: "phys-y12-m8-v12: What evidence shows that particles have wave behaviour?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the discharge tube, spectroscope and supply are reused painted plates (inspected 7 Nov), scaled uniformly, never stretched; the energy ladder, photons, spectrum strips and calculation strips are coded, HSC style; every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.602 × 10⁻¹⁹ C and R = 1.097 × 10⁷ m⁻¹; the Rydberg equation exactly as printed on the HSC formula sheet, 1/λ = R(1/n_f² − 1/n_i²), with the data-sheet symbol R; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v10 (Bohr's levels, ground state −13.6 eV, hf = E_i − E_f), Module 7 v03 (the discharge tube and spectroscope investigation, the four lines), Module 7 v10 (E = hf, E = hc/λ, the electron volt and its conversion).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger ids `P8-IQ3-02`, `P8-IQ3-03`), quoted from the route JSON `syllabusActions`:

- `P8-IQ3-02`: "investigate the line emission spectra to examine the Balmer series in hydrogen (ACSPH138)"
- `P8-IQ3-03`: "relate qualitatively and quantitatively the quantised energy levels of the hydrogen atom and the law of conservation of energy to the line emission spectrum of hydrogen using:"
  - "E=hf"
  - "E=(hc)/(λ)"
  - "(1)/(λ)=R((1)/(n_(f)^(2))-(1)/(n_(i)^(2))) (ACSPH136)" (displayed as 1/λ = R(1/n_f² − 1/n_i²), as on the HSC formula sheet)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v10's final frame (ladder with four "?" arrows to n = 2 and the measured lines). Teaches: Balmer's 1885 formula fitted without a reason (hook); the investigation (discharge tube through a spectroscope or grating, measuring line positions, high-voltage and heat safety); hydrogen's level values from E_n = −13.6/n² eV (−3.40, −1.51, −0.85 eV) and their crowding; the energy-gap method for 3 → 2 (1.89 eV, 3.03 × 10⁻¹⁹ J, λ = hc/E = 656 nm); the Rydberg equation shown to be the same physics (13.6 eV/hc = 1.096 × 10⁷ m⁻¹ ≈ R); Rydberg for 3 → 2 (656 nm) and 4 → 2 (486 nm); n_f is the lower level and a negative answer means a swap; 5 → 2 and 6 → 2 (434, 410 nm) and 7 → 2 (397 nm, a faint deep-violet line still inside the 380 to 750 nm visible range); why the lines crowd and cross into the ultraviolet near n_i = 10 (380 nm); the series limit ∞ → 2 (365 nm, ultraviolet) as an edge, not a line; why the Balmer series is the visible one (Lyman ultraviolet, Paschen infrared). One visible boundary, 380 to 750 nm, throughout (Revision 2; v10 uses the same). Stops before matter waves (v12) and before absorption-spectrum calculations, ionisation from excited states and other one-electron ions (site extension).

## Decisions

- **Learner question (route wording kept).** "How do hydrogen energy gaps predict Balmer wavelengths?" The answer, built in order: each line is one photon from one drop, its energy fixed by the gap (conservation of energy, v10) (1); the gap gives the energy, and E = hc/λ gives the wavelength (4, 5); the Rydberg equation does both steps at once (6 to 8); the levels' crowding explains the crowding of lines and the limit (9, 10); only drops to n = 2 have visible-sized gaps (11).
- **Hook (site "Before you read", history added).** Balmer's empirical fit (1885) as the surprise: a formula that worked for decades before anyone knew why. Balmer named in words only.
- **Investigation (`P8-IQ3-02`, recalling m7-v03).** One scene with the reused plates (discharge tube, high-voltage supply, pocket spectroscope): what is done (view, measure each line's position or angle to get its wavelength) and the safety point (high voltage and a hot tube, so the teacher sets it up; do not touch). Grating mathematics is not repeated (m7-v07). The measured values used are the site's (656, 486, 434, 410 nm).
- **Level values (site Figure 1).** E_n = −13.6/n² eV shown once as Bohr's result, with the values −13.6, −3.40, −1.51, −0.85, −0.54, −0.38 eV; narration says "in exams, you'll usually be given a diagram like this" (HSC questions supply level diagrams; the formula is not on the formula sheet).
- **Energy-gap method first (site "Analyse 6 marks" steps 1 to 3; syllabus E = hf, E = hc/λ).** Two stages for 3 → 2: (1) ΔE = −1.51 − (−3.40) = 1.89 eV = 3.03 × 10⁻¹⁹ J; (2) λ = hc/E = 6.56 × 10⁻⁷ m = 656 nm. Values are carried at three significant figures, as a student would from an exam diagram (author note a on rounding).
- **Rydberg equation derived, not dropped in (route "derive each newly introduced equation").** Because every level is −13.6/n² eV, any gap is 13.6 eV × (1/n_f² − 1/n_i²); dividing by hc gives 1/λ; 13.6 eV/hc = 1.096 × 10⁷ m⁻¹, the Rydberg constant (data sheet 1.097 × 10⁷ m⁻¹, the difference is the rounding of 13.6 eV). Displayed exactly as the formula sheet prints it.
- **Rydberg calculations (site Activity 1 and Q1).** 3 → 2 (656 nm), 4 → 2 (486 nm, site Q1) in full; 5 → 2 and 6 → 2 as results; 7 → 2 (397 nm) as a faint deep-violet line still inside the visible range (Revision 2); the live n_i slider in scene 9 shows the lines crossing 380 nm at n_i = 10. One stage visible at a time; the earlier result kept as a single line.
- **Trap (site "avoid-the-standard-bohr-traps").** n_f is the lower level for emission; a negative 1/λ means the levels were swapped (A1's crossed mistake).
- **Series limit kept separate (route stop).** Scene 10 treats n_i = ∞ as the edge the lines crowd towards (the largest drop to n = 2, from an electron that was only just free), not as one more line; 1/λ = R/4, λ = 365 nm, near ultraviolet. Its own scene, its own colour (a dashed slate edge on the strip).
- **Why Balmer is visible (site Figure 2 and "classic MC trap"; Revision 2).** Visible photons 1.65 to 3.27 eV (380 to 750 nm, the one boundary used in v10 and v11). Drops to n = 1 are at least 10.2 eV (Lyman, ultraviolet, Lyman-α 122 nm); drops to n = 3 are at most 1.51 eV (Paschen, infrared, 4 → 3 at 1875 nm, limit 820 nm); drops to n = 2 run from 1.89 to 3.40 eV, so the four bright, prominent lines (656, 486, 434, 410 nm) and fainter lines down to 384 nm (n_i = 9) are visible, and lines from n_i = 10 (380 nm) and the limit (365 nm) are ultraviolet. The narration says "at least for the first few lines" to avoid the site's "Balmer = visible" overgeneralisation (site note 1).
- **Memory aid (scene 12): "Lyman, Balmer, Paschen land on one, two, three: ultraviolet, visible, infrared."** See "Memory aid check".
- **Attempts (original numbers, HSC style; site Activity 1 Q4 transition, new wording).** A1 (3 marks): 5 → 2 by Rydberg (434 nm), energy in eV (2.86 eV), series (Balmer). Crossed: swapping n_i and n_f (negative 1/λ). A2 (2 marks): 3 → 1 (103 nm), explain why not visible. Crossed: "it starts at level three, so it's Balmer".
- **Handoff (route next).** Scene 17: Bohr's unexplained angular-momentum rule (from v10) and de Broglie's 1924 idea (a wave that fits the orbit a whole number of times), stated as a hypothesis needing evidence. The final frame shows an orbit with a standing wave of three whole wavelengths, "electron = wave?", and an empty "evidence?" panel. See "Final frame".
- **Colour key (v10 and Module 7 keys):** energy levels navy lines; downward arrows and photons in the colour of the emitted line (red 656, blue-green 486, violet 434, deep violet 410), ultraviolet and infrared arrows grey with tags; the series limit a dashed slate edge; energy brackets orange; R and data-sheet constants in chips.
- **Colour key (Revision 2, fixed for every scene).** As above, with true line colours matching v10: 656 nm red, 486 nm cyan (blue-green), 434 nm blue-violet, 410 nm violet, 397, 389 and 384 nm deep violet and faint; 380 nm and below a grey "UV" band, above 750 nm a grey "IR" band, never coloured. n_i and the slider teal; ΔE orange; 1/λ and λ ink; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4 to 8 and 10 stages and feedback rows 52 px; framed answers 56 px); live readouts (the n_i slider's ΔE, 1/λ and λ) about 52 px; ladder labels, strip labels and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v10's final frame (the ladder with four "?" arrows and the measured strip) is the anchor, with the painted discharge tube `y12p-discharge-tube-v1.png` (1003 × 1568, RGBA, inspected 7 Nov) glowing beside the strip in scene 1; the tube, the painted pocket spectroscope `y12p-pocket-spectroscope-v1.png` (1896 × 830) and the EHT supply carry scene 2 and return on both question cards and at the end of scene 9.
- **Simulation (Revision 2).** The core live control is the n_i slider in scene 9: a teal slider on the ladder steps the upper level for drops to n = 2, and live readouts show ΔE, 1/λ and λ while the photon lands on the strip in its true colour (Python, R = 1.097 × 10⁷ m⁻¹: n_i = 5 → 2.858 eV, 434.1 nm; 6 → 3.025 eV, 410.2 nm; 7 → 3.125 eV, 397.0 nm; 8 → 388.9 nm; 9 → 383.6 nm; 10 → 3.267 eV, 379.8 nm, into the UV band; ∞ → 3.403 eV, 364.6 nm, the limit). The photon-to-line flights (1, 5, 7, 8) and the series fan (11) are the other live elements.
- **Board stages (Revision 2).** Revision 1 ran scenes 6 to 10 as one board (about 139 s). Revision 2: the bench (2); the ladder (3 to 5, about 79 s); the derivation strip (6); full-width Rydberg working (7, 8, about 47 s); the live n_i slider (9, 10, about 55 s); the series fan (11, 12). No set-up runs past about 80 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the ladder with a 5 → 2 arrow and the painted discharge tube, no wavelength shown; A2: the ladder with a 3 → 1 arrow and an empty visible strip 380 to 750 nm). On the answer side the card shrinks to the top, a givens strip lists the data (A1: "n_i = 5, n_f = 2; R, h, c, 1 eV from the data sheet"; A2: "n_i = 3, n_f = 1; R = 1.097 × 10⁷ m⁻¹; visible 380 to 750 nm"), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 12: four lines (1, 2, 9); E_n = −13.6/n² and Figure 1 values (3); Rydberg formula and R_H (6 to 8); series and regions, Figure 2 (11); traps (8, 14); Activity 1 (Hα, Lyman-α, Balmer limit, 5 → 2) (7, 10, 11, A1); "Analyse 6 marks" (gaps, conservation of energy, series by lower level, crowding, limit) (4 to 10); Q1 (4 → 2) (8); Q2(d) (Lyman limit 91.2 nm, author note b). Not used: r_n = n²a₀; the He⁺ extension; absorption calculations.
- **Site notes (quoted from site lesson 12, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Overgeneralisation ("predict-wavelengths-with-rydberg" and Figure 2): "Balmer series: n_f = 2 (visible)" and the true/false item "The Balmer series falls in the visible part of the electromagnetic spectrum because n_f = 2" (marked true). Revision 2 wording: the four bright lines and fainter lines down to about 384 nm are visible (380 to 750 nm); lines from n_i = 10 (380 nm) and the series limit (365 nm) are near ultraviolet. Suggest "Balmer series: n_f = 2 (its bright lines are visible; its highest lines and limit are near ultraviolet)" and rewording the true/false item.
  2. Precision (Figure 2): "Brackett and beyond, n_f ≥ 4: far infrared". Brackett lines are about 1.46 to 4.05 μm (near to mid infrared). Suggest "infrared". (Also in v10's site notes.)
  3. Constant (minor): the formula box gives "1 eV = 1.6 × 10⁻¹⁹ J" while the data sheet gives 1.602 × 10⁻¹⁹ J. Suggest the data-sheet value.
  4. Checked and correct: 656, 486, 434, 410 nm (Rydberg with R = 1.097 × 10⁷: 656.3, 486.2, 434.1, 410.2); Q1 486 nm; Q2(c) 2.18 × 10⁻¹⁸ J; Q2(d) 91.2 nm; Activity 1 values (Hα 656 nm, Lyman-α 122 nm, Balmer limit 365 nm, 5 → 2: 2.86 eV, 4.58 × 10⁻¹⁹ J, 434 nm).
- **Cause chain taught, in order:** (1) an electron dropping between levels emits one photon whose energy equals the gap (conservation of energy) (1, 4); (2) the photon's energy fixes its wavelength through E = hc/λ (5); (3) because the levels follow −13.6/n², every gap has the form 13.6 eV × (1/n_f² − 1/n_i²), so 1/λ follows the Rydberg equation (6); (4) the upper levels crowd together, so drops from them to n = 2 differ less and less, and the lines crowd (9); (5) the largest possible drop to n = 2 starts from just free, giving the limit (10); (6) only gaps to n = 2 match visible photon energies, for the bright lines and the fainter ones down to about 384 nm (11).
- **Entry knowledge (route `entryKnowledge`):** v10 (levels, ground state, hf = E_i − E_f); Module 7 (E = hf, c = fλ, E = hc/λ, eV conversion, the four lines, spectroscope use).
- **Learner-visible vocabulary (plain meaning at first use):** Balmer series (all drops that end on level 2, 1); n_i, n_f (initial upper and final lower levels, 7); Rydberg constant R (6); series limit (the shortest wavelength in a series, from n = ∞, 10); Lyman and Paschen series (drops ending on 1 and 3, 11).
- **Legacy logic ported:** none. Coded family `m8-quantum-atom` (levels, a downward change and a photon) reused within its limits ("rounded nonrelativistic hydrogen energies").
- **New explainer motion:** **energy ladder to spectrum** (an arrow drops, its photon flies to a strip and becomes a line at the computed wavelength; brackets show gap sizes); **crowding zoom** (upper levels and their lines converging on the limit edge); **series fan** (three families of arrows ending on 1, 2 and 3 with their strips placed on one EM axis); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the ladder at the left; the strip across the upper right; working strips lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Rounding: with level values to three significant figures, ΔE(3 → 2) = 1.89 eV and λ = 656 nm. Carrying 13.6/4 − 13.6/9 = 1.8889 eV unrounded gives 656.9 nm; the gap from 13.6 eV is slightly off because 13.6 is rounded (the measured ionisation energy is 13.598 eV and the hydrogen-specific R_H = 1.0968 × 10⁷ m⁻¹). The Rydberg equation with R = 1.097 × 10⁷ m⁻¹ gives 656.3 nm. All quoted to three figures: 656 nm.
  (b) Lyman limit: 1/R = 91.2 nm; Paschen limit: 9/R = 820 nm. Not narrated except Paschen's range.
  (c) Measured Balmer wavelengths in air are 656.3, 486.1, 434.0 and 410.2 nm; the Rydberg values with R = 1.097 × 10⁷ m⁻¹ agree to within 0.1 nm.
  (d) The series limit corresponds to capture of an electron with zero kinetic energy into n = 2; free electrons with some kinetic energy give a faint continuum beyond the limit. Not said.
  (f) Visible boundary (Revision 2, brief 192 finding 1). One boundary, 380 to 750 nm, in v10 and v11. NIST lists hydrogen lines at 397.0072 and 388.9049 nm; with R = 1.097 × 10⁷ m⁻¹, n_i = 7, 8, 9 give 397.0, 388.9, 383.6 nm (inside the range) and n_i = 10 gives 379.8 nm (just outside). The four 656 to 410 nm lines are called the bright or prominent lines, never the only visible ones; the 397 nm line is a faint deep violet, not ultraviolet.
  (e) Pronunciations: "Balmer" (BAHL-mer); "Lyman" (LYE-mun); "Paschen" (PAH-shun); "Rydberg" (RID-berg); "n f" and "n i" said "n final" and "n initial" at first use, then "n f", "n i"; "de Broglie" (duh BROY).
- **Open decisions for root:**
  - **1. Order of methods (learning review).** Energy gaps first, then Rydberg (the gap method shows the cause; Rydberg is the shortcut). Keep, or reverse if the review finds the two stages before Rydberg slow.
  - **2. Investigation depth (learning review and coverage check).** One scene recalls m7-v03's spectroscope work; a separate practical video with measured angles would give `P8-IQ3-02` fuller coverage. Recorded as a possible coverage gap for the Module 8 check.
  - **3. Handoff picture (root, with v12's designer).** The final frame shows de Broglie's standing wave on the orbit as a question; v12 must open on it.

Main question: *If each line is one photon from one drop, can the size of each energy gap predict the exact wavelength?*
Entry knowledge: Bohr's levels and hf = E_i − E_f (v10); E = hf, E = hc/λ, eV (Module 7).
Stops after: the investigation, level values, gap method, the Rydberg equation derived and used, crowding, the series limit, why Balmer is visible. No matter waves; no absorption or ion calculations.
Handoff: v12, what evidence shows that particles have wave behaviour.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *E_n*, *n_i*, *n_f*, *R*, *λ*, *h*, *c*.

### 1. hook (a formula without a reason)
> Here are hydrogen's four bright visible lines, and Bohr's energy levels. In eighteen eighty five, a Swiss maths teacher, Johann Balmer, found a formula that fitted these four wavelengths, with no idea why it worked. Nearly thirty years later, Bohr's model explained it. If each line comes from one drop between two levels, the size of each energy gap should fix each wavelength. So how do hydrogen energy gaps predict Balmer **wavelengths**?

Visual: opens on v10's final frame (see "Opening frame"); the chip becomes the heading: "How do hydrogen energy gaps predict Balmer wavelengths?"; the painted discharge tube `y12p-discharge-tube-v1.png` (about 360 px tall, coded pink glow) appears beside the strip as the source of the lines. On "four bright visible lines" the strip's lines pulse in their true colours, red pen ring round 656. On "Johann Balmer" a name tag in words only "Balmer, 1885" and a small grey chip "a formula that fits, no reason", grey hand tag "it works, but why?". On "Bohr's model explained it" tag "Bohr, 1913: levels". On "one drop between two levels" the 3 → 2 arrow flashes and a red photon travels from it to the 656 nm line. On "the size of each energy gap" an orange bracket spans n = 3 to n = 2, orange hand tag "gap = photon energy". On "wavelengths" the heading underlines "energy gaps" and "wavelengths".

### 2. seeing the lines
> You can see these lines yourself. A hydrogen discharge tube glows when a high voltage drives a current through the gas. Look at it through a spectroscope, or a diffraction grating, and the glow separates into sharp coloured lines. Measure where each line falls, and you get its wavelength. The tube runs at high voltage and gets hot, so it's set up by your teacher, and you don't touch **it**.

Visual: board change: the reused discharge tube `y12p-discharge-tube-v1.png` in its holder with the reused supply `phys-y11-eht-supply-v1.png` (coded leads), a faint pink coded glow (tag "glow colour is not data", as m7-v03). On "a spectroscope" the reused pocket spectroscope `y12p-pocket-spectroscope-v1.png` points at the tube; on "a diffraction grating" a small coded grating chip "or a grating (Module 7)". On "sharp coloured lines" a coded view through the eyepiece: four lines on a scale. On "Measure where each line falls" a pointer slides along the scale, reading "656 nm", "486 nm", "434 nm", "410 nm". On "it" two safety chips "high voltage: teacher sets up" and "hot tube: don't touch". Marks (Revision 2): the bench (tube about 420 px, supply about 320 px, spectroscope about 480 px wide) is solid from the first frame; the eyepiece lines in true colours; teal hand tag "position → wavelength" with a teal pen arrow along the pointer's path; red hand tag "safety".

### 3. the energy levels
> First, the levels. Bohr's model gives hydrogen's levels as minus thirteen point six over n squared electron volts. So level two is minus three point four zero, level three is minus one point five one, level four is minus zero point eight five, and the levels crowd together as they approach **zero**. In exams, you'll usually be given a diagram like this.

Visual: board change: the coded ladder at the left, energy axis "E (eV)". On "minus thirteen point six over n squared" chip "E_n = −13.6 / n² eV (Bohr)". On "level two" label "n = 2: −3.40 eV"; on "level three" "n = 3: −1.51 eV"; on "level four" "n = 4: −0.85 eV"; then "n = 5: −0.54", "n = 6: −0.38" write quietly. On "zero" the gaps between successive levels get small orange brackets that shrink upwards; tag "levels crowd towards 0". On "a diagram like this" a thin frame draws round the ladder, tag "exam data", navy hand tag "usually given". Marks (Revision 2): orange hand tag "gaps shrink upwards" with an orange pen bracket on the top three gaps.

### 4. the red line from the gap: energy
> Take the red line, a drop from level three to level two. The photon's energy is the gap. Minus one point five one, minus minus three point four zero, is one point eight nine electron **volts**. To get joules, multiply by one point six zero two times ten to the minus nineteen, giving three point zero three times ten to the minus nineteen **joules**.

Visual: the ladder shrinks to the top left with the 3 → 2 arrow red. Task strip: "Predict the wavelength of the 3 → 2 photon". Equation strip: "E = hf = hc/λ, photon energy = E_i − E_f". Givens grouped: "E₃ = −1.51 eV, E₂ = −3.40 eV" (diagram); "h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J" (data sheet). On "volts" `AlignedAlgebra` "E = E₃ − E₂ = −1.51 − (−3.40) = 1.89 eV". On "joules" "E = 1.89 × 1.602 × 10⁻¹⁹ = 3.03 × 10⁻¹⁹ J" (framed), orange hand tag "eV → J". Marks (Revision 2): orange pen bracket from E₃ to E₂ on the small ladder.

### 5. the red line from the gap: wavelength
> Then E equals h c over lambda, so lambda equals h c over E. Six point six two six times ten to the minus thirty four, times three point zero zero times ten to the eight, over three point zero three times ten to the minus nineteen, is six point five six times ten to the minus seven metres. That's six hundred and fifty six nanometres, the red line we **measure**.

Visual: stage 1's working shrinks to one kept line "E = 3.03 × 10⁻¹⁹ J". On "lambda equals h c over E" "λ = hc / E". On "six point five six times ten to the minus seven metres" "λ = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (3.03 × 10⁻¹⁹) = 6.56 × 10⁻⁷ m" with a `NumberTicker`; beside it a small chip "λ = hc / 1.89 = 1.05 × 10⁻²⁵ m" crossed in red, red hand tag "joules, not eV". On "measure" "= 656 nm" (framed); the red photon flies to the strip and lands on the 656 nm line with a tick "predicted = measured", red pen ring round the landing.

### 6. the shortcut: where the Rydberg equation comes from
> There's a shortcut that does both steps at once. Every level is minus thirteen point six over n squared, so any gap is thirteen point six electron volts, times one over n f squared, minus one over n i squared. Dividing a gap by h c gives one over lambda. And thirteen point six electron volts over h c is one point zero nine six times ten to the seven per metre, the Rydberg constant, **R**. So one over lambda equals R, times one over n f squared, minus one over n i **squared**. That's on your formula sheet.

Visual: board change to a derivation strip (the ladder small at the left). On "any gap is thirteen point six electron volts" `AlignedAlgebra` "E_i − E_f = −13.6/n_i² − (−13.6/n_f²) = 13.6 (1/n_f² − 1/n_i²) eV". On "Dividing a gap by h c gives one over lambda" "1/λ = E/hc". On "R" "13.6 eV / hc = (13.6 × 1.602 × 10⁻¹⁹) / (6.626 × 10⁻³⁴ × 3.00 × 10⁸) = 1.096 × 10⁷ m⁻¹" beside a data-sheet chip "R = 1.097 × 10⁷ m⁻¹" (tag "same, within rounding of 13.6"). On "squared" the formula-sheet line writes large: "1/λ = R (1/n_f² − 1/n_i²)" (framed), labels "n_f: final (lower) level", "n_i: initial (upper) level". On "formula sheet" a small chip "HSC formula sheet". Marks (Revision 2): ink hand tag "both steps in one" with an ink pen arrow from "E/hc" to the framed line; grey hand tag "13.6 is rounded" on the 1.096 versus 1.097 pair.

### 7. Rydberg for the red line
> Try it on the red line. The final level, n f, is the lower one, two, and the initial level, n i, is three. One quarter minus one ninth is five thirty sixths. Times one point zero nine seven times ten to the seven, that's one point five two four times ten to the six per **metre**. Flip it, and lambda is six hundred and fifty six nanometres **again**.

Visual: clear change to the full-width working layout, solid from the first frame (the ladder small at the upper left with the red 3 → 2 arrow). Task strip: "Use the Rydberg equation for 3 → 2". Givens: "n_f = 2, n_i = 3, R = 1.097 × 10⁷ m⁻¹". On "One quarter minus one ninth is five thirty sixths" "1/2² − 1/3² = 1/4 − 1/9 = 5/36 = 0.1389". On "metre" "1/λ = 1.097 × 10⁷ × 5/36 = 1.524 × 10⁶ m⁻¹". On "again" "λ = 1 / (1.524 × 10⁶) = 6.56 × 10⁻⁷ m = 656 nm" (framed), tick beside the gap method's "656 nm", teal hand tag "flip it", teal pen ring round "n_f = 2".

### 8. the blue-green line, and the trap
> For the blue-green line, n i is four. One quarter minus one sixteenth is three sixteenths, and lambda comes out at four hundred and eighty six **nanometres**. Always make the lower level n f. For emission the answer must be positive, so if you get a negative, you've swapped **them**.

Visual: the 3 → 2 result shrinks to one kept line "3 → 2: 656 nm". On "n i is four" the ladder's 4 → 2 arrow (blue-green) highlights; givens "n_f = 2, n_i = 4". On "three sixteenths" "1/4 − 1/16 = 3/16 = 0.1875; 1/λ = 2.057 × 10⁶ m⁻¹". On "nanometres" "λ = 486 nm" (framed); a cyan photon lands on the 486 nm line, tick. On "Always make the lower level n f" chip "n_f = lower (final) level". On "them" a crossed working line "1/λ = R(1/4² − 1/2²) = −2.057 × 10⁶ m⁻¹" with a red hand tag "negative → n_i and n_f swapped".

### 9. all four lines, and why they crowd
> Levels five and six give four hundred and thirty four, and four hundred and ten nanometres, matching all four bright lines. Level seven gives three hundred and ninety seven, a faint deep violet line near the edge of what we can see. Notice the lines bunch up as n i grows. The upper levels crowd together, so their drops to level two become almost the same **size**.

Visual: camera change to the live n_i slider (the lesson's simulation), solid from the first frame: the ladder at the left with a teal slider "n_i" beside it, three live readouts (52 px) "ΔE", "1/λ" and "λ", and the strip across the right with a grey "UV" band below 380 nm; kept lines "3 → 2: 656 nm", "4 → 2: 486 nm" at the top. On "Levels five and six" the slider steps to 5 then 6: arrows 5 → 2 (blue-violet) and 6 → 2 (violet) drop with readouts "2.858 eV, 434.1 nm" and "3.025 eV, 410.2 nm", photons landing on the strip, ticks. On "matching all four bright lines" the four lines pulse together, tag "all four predicted" (framed). On "Level seven" the slider steps to 7: a faint deep-violet line at "397 nm" just inside the 380 nm edge, readout "3.125 eV", teal hand tag "faint, still visible". On "the lines bunch up" the slider runs 8, 9, 10: lines at 389 and 384 nm, then 380 nm landing in the grey UV band (readout "3.267 eV, 379.8 nm"), each closer to the last, teal pen bracket over the bunch. On "size" the ladder zooms on n = 5 to 10: levels almost touching; the orange brackets for drops to n = 2 become nearly equal, orange hand tag "upper levels crowd → lines crowd".

### 10. the series limit: an edge, not a line
> Where does the bunching stop? The biggest possible drop to level two starts at n equals infinity, from an electron that was only just free. Then one over n i squared is zero, so one over lambda is R over four, and lambda is three hundred and sixty five nanometres. That's the series limit, the shortest Balmer wavelength. It isn't one more line from a level. It's the edge the lines crowd **towards**.

Visual: on "n equals infinity" the dashed "n = ∞, E = 0" line highlights and a slate dashed arrow drops from it to n = 2. On "one over n i squared is zero" "1/∞² = 0". On "one over lambda is R over four" "1/λ = R/4 = 2.743 × 10⁶ m⁻¹". On "three hundred and sixty five nanometres" "λ = 365 nm" (framed); the slider's readouts show "∞", "3.403 eV", "364.6 nm". On "series limit" a dashed slate edge draws on the strip at 365 nm (in the ultraviolet band), labelled "Balmer series limit"; it is a different style from the lines. On "towards" the lines from n_i = 8 upward pile against the dashed edge without reaching it; tag "limit: the edge of the series, not a single level's line", slate hand tag "an edge, not a line" with a slate pen ring round the edge.

### 11. why Balmer is the visible series
> So why is Balmer the series we see? Visible photons carry about one point seven to three point three electron volts. Drops to level one are at least ten point two electron volts, so the Lyman series is all ultraviolet. Drops to level three are at most one point five one, so the Paschen series is all infrared. Only drops to level two land in the visible, at least for the first few **lines**.

Visual: board change to the series fan: the full ladder from n = 1, with three families of arrows ending on n = 1 (grey, "Lyman"), n = 2 (coloured, "Balmer") and n = 3 (grey, "Paschen"); a horizontal EM axis below with "UV", "visible" and "IR" bands. On "one point seven to three point three electron volts" the visible band gets "1.65 to 3.27 eV (750 to 380 nm)". On "at least ten point two electron volts" the smallest Lyman arrow (2 → 1) gets "10.2 eV, 122 nm"; the Lyman family's strip lands in "UV". On "at most one point five one" the Paschen family's largest arrow (∞ → 3) gets "1.51 eV, 820 nm" and its smallest (4 → 3) "0.66 eV, 1875 nm"; its strip lands in "IR". On "lines" the Balmer family's strip lands across "visible", with its highest lines (from 380 nm) and limit in "UV" (tag "bright lines visible; the tail reaches UV"). Marks (Revision 2): grey hand tags "too big: UV" on Lyman and "too small: IR" on Paschen; ink pen ring round the visible band.

### 12. a way to remember
> Here's a way to remember the three named series. Lyman, Balmer, Paschen land on one, two and three. Ultraviolet, visible, **infrared**.

Visual: the series fan stays solid (about 1100 px wide); three chips write in turn under their arrow families: "Lyman → n = 1: UV", "Balmer → n = 2: visible", "Paschen → n = 3: IR". On "infrared" the line writes large: "Lyman, Balmer, Paschen land on 1, 2, 3: ultraviolet, visible, infrared." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electron in a hydrogen atom drops from the n equals five level to the n equals two level. Use the Rydberg equation to calculate the wavelength of the emitted photon. Then calculate the photon's energy in electron volts, and name the series. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An electron in a hydrogen atom makes a transition from the n = 5 level to the n = 2 level. (a) Use the Rydberg equation to calculate the wavelength of the emitted photon. (b) Calculate the energy of this photon in electron volts. (c) Name the spectral series to which this line belongs. (3 marks)" Data-sheet chips "R = 1.097 × 10⁷ m⁻¹", "h = 6.626 × 10⁻³⁴ J s", "c = 3.00 × 10⁸ m s⁻¹", "1 eV = 1.602 × 10⁻¹⁹ J". The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> One over lambda equals R times one quarter minus one twenty fifth, which is two point three zero times ten to the six per metre, so lambda is four hundred and thirty four **nanometres**. E equals h c over lambda, four point five eight times ten to the minus nineteen joules, or two point eight six electron **volts**. It ends on level two, so it's Balmer. The slip is swapping n i and n f, which makes one over lambda **negative**.

Visual: card shrinks to the top with its picture; givens strip "n_i = 5, n_f = 2; R = 1.097 × 10⁷ m⁻¹; h, c, 1 eV (data sheet)"; "n = 5", "n = 2", "electron volts" and "series" underline. On "nanometres" "(a) 1/λ = 1.097 × 10⁷ (1/2² − 1/5²) = 1.097 × 10⁷ × 0.21 = 2.304 × 10⁶ m⁻¹; λ = 1 / (2.304 × 10⁶) = 4.34 × 10⁻⁷ m = 434 nm" (framed). On "volts" "(b) E = hc/λ = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.34 × 10⁻⁷) = 4.58 × 10⁻¹⁹ J; (4.58 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.86 eV" (framed); then "(c) n_f = 2: Balmer series (blue-violet line)" (framed). On "negative" a chip "1/λ = R(1/5² − 1/2²) = −2.30 × 10⁶ m⁻¹" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Calculate the wavelength of the photon emitted when an electron in hydrogen drops from n equals three to n equals one, and explain why this line can't be seen. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Calculate the wavelength of the photon emitted when an electron in a hydrogen atom falls from the n = 3 level to the n = 1 level, and explain why this spectral line cannot be seen. (2 marks)" Data-sheet chip "R = 1.097 × 10⁷ m⁻¹". The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> One over lambda equals R times one minus one ninth, so lambda is one hundred and three **nanometres**. That's ultraviolet, far shorter than violet light at about four hundred, because a drop to level one is a very big gap. It's a Lyman line. The slip is thinking a drop from level three must be Balmer. The series is set by where the electron **lands**.

Visual: card shrinks to the top with its picture; givens strip "n_i = 3, n_f = 1; R = 1.097 × 10⁷ m⁻¹; visible 380 to 750 nm"; "n = 3", "n = 1" and "cannot be seen" underline. On "nanometres" "1/λ = 1.097 × 10⁷ (1/1² − 1/3²) = 1.097 × 10⁷ × 8/9 = 9.751 × 10⁶ m⁻¹; λ = 1 / (9.751 × 10⁶) = 1.03 × 10⁻⁷ m = 103 nm" (framed). On "a very big gap" framed "103 nm < 380 nm: ultraviolet, not visible (ΔE = 12.1 eV)". On "lands" a chip "starts at 3, so it's Balmer" fades in and is crossed (caption "series = final level: n_f = 1, Lyman"). Hold about 1 second.

### 17. handoff
> So Bohr's energy gaps predict every Balmer wavelength. But his model still rests on one unexplained rule, that the electron's angular momentum comes in whole numbers of h over two pi. In nineteen twenty four, Louis de Broglie suggested a reason. If an electron also behaves like a wave, only orbits that fit a whole number of its wavelengths would last. That's a bold claim about a particle. So what evidence shows that particles have wave **behaviour**?

Visual: board clears (camera change). On "every Balmer wavelength" the four photons land once more on their lines, ticks. On "one unexplained rule" the boxed "mvr = nh/2π" from v10 returns with a grey chip "why?". On "Louis de Broglie" a name tag in words only "de Broglie, 1924". On "only orbits that fit a whole number of its wavelengths" a dashed circular orbit with a navy standing wave wrapped round it, exactly three wavelengths, tag "n = 3: three whole wavelengths fit"; beside it a crossed orbit where the wave does not join up, tag "doesn't fit: not allowed". On "a bold claim about a particle" tag "electron = wave?". On "behaviour" an empty panel "evidence?" appears at the right and the chip "Next: what evidence shows that particles have wave behaviour?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Photon energy = gap: E_i − E_f = hf = hc/λ.
2. E_n = −13.6/n² eV; 3 → 2: 1.89 eV, 656 nm.
3. 1/λ = R(1/n_f² − 1/n_i²); n_f is the lower level.
4. Balmer (n_f = 2): bright lines 656, 486, 434, 410 nm.
5. Limit (n_i = ∞): 365 nm, an edge, in the UV.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Lyman, Balmer, Paschen land on 1, 2, 3: ultraviolet, visible, infrared.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs. (The investigation and its safety points stay on screen in scene 2; they are not a notes bullet.)

## Teaching checks

- **Does it explain causes?** Why a gap gives a wavelength (conservation of energy, E = hc/λ) (4, 5); why the Rydberg equation has its form (every level is −13.6/n²) (6); why lines crowd (levels crowd) (9); why there is a limit (the largest drop from just free) (10); why Balmer is the visible series (gap sizes) (11).
- **Misconceptions addressed:** swapping n_i and n_f (8, 14 crossed); the series is set by the starting level (16 crossed); all Balmer lines are visible, or only four are (9, 11: four bright, fainter ones to 384 nm, then UV); using eV in λ = hc/E (5 crossed); the limit is one more line (10); shorter wavelength means a smaller drop (the site trap; 8, 9 show bigger drops give shorter λ).
- **One idea at a time:** the investigation (2), the levels (3), energy (4), wavelength (5), the equation (6), each Rydberg case (7, 8), the remaining lines and crowding (9), the limit (10), the series (11).
- **Video makes it easier:** photons flying from arrows to their lines (1, 5, 7 to 9); brackets shrinking up the ladder (3, 9); lines piling against a dashed edge (10); three families landing in three bands (11).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 32 s and 26 s (feedback 1 covers three parts).
- **Avoided double teaching:** Bohr's levels and hf = E_i − E_f (v10), E = hc/λ and eV conversion (Module 7 v10), spectroscope use and the four lines (Module 7 v03) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ3-02`: the Balmer series examined in hydrogen's line emission spectrum (2, 9 to 11) with the investigation (2; open decision 2). `P8-IQ3-03`: quantised levels and conservation of energy related to the spectrum qualitatively (1, 9 to 11) and quantitatively with E = hf, E = hc/λ (4, 5, 14) and the Rydberg equation (6 to 10, 14, 16).
- **Out of scope by design:** matter waves (v12); absorption calculations, ionisation from excited states, He⁺ (site extension); grating angle calculations (m7-v07).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An electron in a hydrogen atom makes a transition from the n = 5 level to the n = 2 level. (a) Use the Rydberg equation to calculate the wavelength of the emitted photon. (b) Calculate the energy of this photon in electron volts. (c) Name the spectral series to which this line belongs."
Model answer: (a) 1/λ = R(1/n_f² − 1/n_i²) = 1.097 × 10⁷ (1/4 − 1/25) = 1.097 × 10⁷ × 0.21 = 2.304 × 10⁶ m⁻¹, so λ = 1 / (2.304 × 10⁶) = 4.34 × 10⁻⁷ m = 434 nm. (b) E = hc/λ = (6.626 × 10⁻³⁴ × 3.00 × 10⁸)/(4.34 × 10⁻⁷) = 4.58 × 10⁻¹⁹ J; (4.58 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.86 eV. (c) The final level is n = 2, so the line is in the Balmer series (visible, blue-violet). Classic mistake (crossed): n_i and n_f swapped, giving a negative 1/λ.

**Attempt 2 (scene 15; original wording, HSC style, 2 marks).** "Calculate the wavelength of the photon emitted when an electron in a hydrogen atom falls from the n = 3 level to the n = 1 level, and explain why this spectral line cannot be seen."
Model answer: 1/λ = 1.097 × 10⁷ (1/1² − 1/3²) = 9.751 × 10⁶ m⁻¹, so λ = 1 / (9.751 × 10⁶) = 1.03 × 10⁻⁷ m = 103 nm. This is in the ultraviolet (shorter than about 380 nm), because a drop to n = 1 is a large energy gap (12.1 eV), so the photon's wavelength is outside the visible range; it is a Lyman series line. Classic mistake (crossed): "it starts at level 3, so it's a Balmer line".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; 1 eV = 1.602 × 10⁻¹⁹ J; R = 1.097 × 10⁷ m⁻¹; hc = 1.9878 × 10⁻²⁵ J m | 4 to 16 |
| Levels (E_n = −13.6/n² eV) | −13.6, −3.40, −1.51 (−1.511), −0.85, −0.54 (−0.544), −0.38 (−0.378) eV | 3, 4, 11 |
| Gap method 3 → 2 | ΔE = 1.89 eV; × 1.602 × 10⁻¹⁹ = 3.03 × 10⁻¹⁹ J; λ = 1.9878 × 10⁻²⁵ / 3.03 × 10⁻¹⁹ = 6.56 × 10⁻⁷ m = 656 nm (unrounded 1.8889 eV: 656.9 nm) | 4, 5 |
| R from 13.6 eV | 13.6 × 1.602 × 10⁻¹⁹ / 1.9878 × 10⁻²⁵ = 1.096 × 10⁷ m⁻¹ | 6 |
| Rydberg 3 → 2 | 5/36 = 0.1389; 1/λ = 1.524 × 10⁶ m⁻¹; λ = 656.3 nm | 7 |
| Rydberg 4 → 2 | 3/16 = 0.1875; 1/λ = 2.057 × 10⁶ m⁻¹; λ = 486.2 nm; swapped: −2.057 × 10⁶ | 8 |
| 5 → 2, 6 → 2, 7 → 2 | 434.1 nm (2.304 × 10⁶ m⁻¹; 4.58 × 10⁻¹⁹ J = 2.86 eV); 410.2 nm; 397.0 nm (visible, faint deep violet) | 9, 13, 14 |
| n_i slider (Revision 2) | ΔE = hc/λ (eV), λ: 5 → 2.858, 434.1; 6 → 3.025, 410.2; 7 → 3.125, 397.0; 8 → 3.190, 388.9; 9 → 3.235, 383.6; 10 → 3.267, 379.8 (UV); ∞ → 3.403, 364.6 nm | 9, 10 |
| Scene 5 slip (Revision 2) | hc / 1.89 = 1.05 × 10⁻²⁵ (eV not converted) | 5 |
| Balmer limit | 1/λ = R/4 = 2.743 × 10⁶ m⁻¹; λ = 364.6 nm ≈ 365 nm | 10 |
| Visible photon energies | 750 nm: 1.65 eV; 380 nm: 3.27 eV ("about one point seven to three point three") | 11 |
| Lyman | 2 → 1: 10.2 eV, 121.5 nm ≈ 122 nm; 3 → 1: 1/λ = 9.751 × 10⁶ m⁻¹, 102.6 nm ≈ 103 nm, 12.1 eV; limit 91.2 nm | 11, 15, 16 |
| Paschen | 4 → 3: 0.66 eV, 1875 nm; limit ∞ → 3: 1.51 eV, 820 nm | 11 |
| Balmer gaps | 1.89 eV (3 → 2) to 3.40 eV (limit) | 11 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- −1.51 − (−3.40) = 1.89; 1.89 × 1.602e-19 = 3.028e-19 J (3.03e-19); 6.626e-34 × 3.00e8 / 3.03e-19 = 6.560e-7 m.
- 13.6/4 − 13.6/9 = 1.8889 eV; hc/(1.8889 × 1.602e-19) = 656.9 nm.
- 13.6 × 1.602e-19 / 1.9878e-25 = 1.0961e7 m⁻¹.
- 1.097e7 × (1/4 − 1/9) = 1.5236e6 → 656.3 nm; × (1/4 − 1/16) = 2.0569e6 → 486.2 nm; × 0.21 = 2.3037e6 → 434.1 nm; × (1/4 − 1/36) → 410.2 nm; × (1/4 − 1/49) → 397.0 nm; × 1/4 = 2.7425e6 → 364.6 nm.
- hc / 434.08e-9 = 4.579e-19 J = 2.858 eV.
- 1.097e7 × (1 − 1/9) = 9.7511e6 → 102.6 nm; 13.6 × 8/9 = 12.09 eV; 1.097e7 × 3/4 → 121.5 nm, 10.2 eV; 1/1.097e7 = 91.2 nm.
- 1.097e7 × (1/9 − 1/16) → 1875 nm (0.661 eV); 9/1.097e7 = 820.4 nm.
- hc/(750e-9 × 1.602e-19) = 1.654 eV; hc/(380e-9 × 1.602e-19) = 3.265 eV.
- Revision 2 (7 Nov): 1.097e7 × (1/4 − 1/n²) for n = 8, 9, 10, 11 → 388.9, 383.6, 379.8, 377.1 nm; hc / 1.89 = 1.052e-25.

## Memory aid check

- **"Lyman, Balmer, Paschen land on 1, 2, 3: ultraviolet, visible, infrared."** Meaning, as said in scene 12: the series named by the final level, with its region. Assumptions checked: Lyman lines all lie between 91 and 122 nm (ultraviolet); Paschen lines all lie between 820 and 1875 nm (infrared); Balmer's bright lines and its fainter lines down to 384 nm are visible, but lines from 380 nm and the limit are near ultraviolet, so "visible" is true for the lines students meet and scene 9 and the key notes state the exception (Revision 2: one boundary, 380 to 750 nm). "Land on" encodes that the series is set by n_f, which is A2's trap. Alphabetical order does not help (B, L, P), so the aid uses order of the level number. Introduced after the explanation (11).
- **Considered, not used:** "the bigger the drop, the bluer the light" (true within the visible range but misleading across series, since Lyman lines are not "blue").

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,034 characters**, 18 scenes. Characters per scene (1 to 18): 437, 389, 351, 342, 359, 502, 343, 276, 362, 397, 389, 131, 276, 419, 191, 345, 450, 75. At 13.3 characters per second the speech is about 454 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 9 slider runs under its narration): **about 520 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,001 characters (scene sum; 6,018 with inter-scene spaces), about 533 s. Reserve trims if the voiced take runs long: scene 2's grating clause; scene 6's last sentence (keep the chip); scene 9's level-seven sentence (keep the line).

## Opening frame

v10's final frame (`phys-y12-m8-v10.md`, Revision 2): paper background; heading "Why couldn't Rutherford's model explain stable atoms and line spectra?"; at the left a coded hydrogen energy ladder (navy lines n = 1 to 6, dashed "n = ∞, E = 0" at the top, "E₁ = −13.6 eV" at the bottom; other levels labelled with n only), level n = 2 highlighted; four downward arrows ending on n = 2 from n = 3 (red), 4 (cyan), 5 (blue-violet) and 6 (violet), each with a "?"; at the right a black spectrum strip with four lines labelled "656", "486", "434", "410 nm (measured)"; tag "ΔE → λ?"; chip "Next: how do hydrogen energy gaps predict Balmer wavelengths?". Scene 1 turns the chip into the heading and brings in the painted discharge tube beside the strip.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How do hydrogen energy gaps predict Balmer wavelengths?"; at the upper left the boxed rule "mvr = nh/2π" with a grey chip "why?"; at the centre a dashed circular orbit around a small red nucleus with a navy standing wave wrapped round it, exactly three wavelengths, tag "n = 3: three whole wavelengths fit"; beside it a smaller crossed orbit where the wave does not join up, tag "doesn't fit: not allowed"; name tag "de Broglie, 1924" and tag "electron = wave?"; at the right an empty panel headed "evidence?"; chip "Next: what evidence shows that particles have wave behaviour?". v12 opens on this frame (root to pass to v12's designer; open decision 3).

## Scene list and build ids

Lesson key `p-y12-m8-v11` (route phys-y12-m8-v11). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v11` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v11` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, seeing-lines, energy-levels, gap-energy, gap-wavelength, rydberg-derived, rydberg-red, rydberg-blue-trap, crowding, series-limit, other-series, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: energy ladder to spectrum (`m8-quantum-atom`), crowding zoom, series fan, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2; no set-up runs past about 80 s): 1 to 2 clear change to the bench; 2 to 3 clear change to the ladder; 3 to 4 camera continue (ladder shrinks); 4 to 5 camera continue (3 to 5 about 79 s); 5 to 6 clear change; 6 to 7 clear change to full-width working; 7 to 8 camera continue (about 47 s); 8 to 9 camera change (the live n_i slider); 9 to 10 camera continue (about 55 s); 10 to 11 clear change to the fan; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v11-learning-review.md`, `science_check` = `checks/p-y12-m8-v11-physics-check.md`.

## Assets

Have (all inspected 7 Nov; scaled uniformly only, never stretched, never above native size):
- `public/assets/physics/y12p-discharge-tube-v1.png` (1003 × 1568, RGBA; glow coded): 1, 2, A1 card.
- `public/assets/physics/y12p-pocket-spectroscope-v1.png` (1896 × 830, RGBA): 2.
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA; inspected for m6-v01): 2.
- **Checked, not used:** `y12p-slide-holder-v1.png` (M7 grating holder; the grating is mentioned as a chip only, to avoid repeating m7-v07).

Need: no new plates.

Coded: ladder, arrows, photons, spectrum strips and bands, brackets, dashed limit edge, series fan, EM axis, standing-wave orbit, evidence panel, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v11 build brief):
1. **Ladder to spectrum.** A downward arrow whose photon flies to a strip and lands at the wavelength computed from R (so the line positions come from the same numbers as the working).
2. **Standing-wave orbit.** A sinusoid wrapped round a circle with a whole number of wavelengths (and a non-closing version) for the final frame.

## Codex asset brief

No new plates (Revision 2). `y12p-discharge-tube-v1.png` and `y12p-pocket-spectroscope-v1.png` are delivered and were inspected.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: photon energy equals the level difference; the Rydberg equation's derivation from −13.6/n² and its match to the data-sheet R; n_f as the lower level; the crowding argument; the series limit as an edge; visible photon energies; the Lyman, Balmer and Paschen ranges; "first four visible".
3. Confirm the Rydberg equation is displayed exactly as on the HSC formula sheet: 1/λ = R(1/n_f² − 1/n_i²).
4. Confirm the history: Balmer 1885; Bohr 1913; de Broglie 1924.
5. Confirm the memory aid's assumptions (see "Memory aid check").
6. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
7. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
8. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
9. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
10. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
11. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Report site notes 1 to 3 under Decisions to root.
13. Revision 2: confirm one visible boundary, 380 to 750 nm, everywhere (1, 9, 11, notes, memory aid check, site note 1; author note f); 397 nm called a faint deep-violet visible line, not ultraviolet; grouped denominators (5, 7, 14, 16, model answers); the n_i slider values; the scene 5 crossed slip; true line colours; the final frame unchanged for v12.

## YouTube metadata (draft)

Title: Hydrogen's Balmer Series: Energy Levels and the Rydberg Equation | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa.html

Each line in hydrogen's spectrum is one photon from one drop between energy levels. Use the energy gaps with E = hc/λ to predict the red 656 nm line, see where the Rydberg equation comes from, then use it for all four Balmer lines and the series limit. Find out why the Balmer series is the visible one while Lyman is ultraviolet and Paschen is infrared. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the line emission spectra to examine the Balmer series in hydrogen (ACSPH138)"
"relate qualitatively and quantitatively the quantised energy levels of the hydrogen atom and the law of conservation of energy to the line emission spectrum of hydrogen using:
- E = hf
- E = hc/λ
- 1/λ = R(1/n_f² − 1/n_i²) (ACSPH136)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the limits of the Rutherford and Bohr models. Next: what evidence shows that particles have wave behaviour.

#HSCPhysics #Physics #BalmerSeries #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10 and Module 7; check that the gap method lands before the Rydberg shortcut; that the derivation in scene 6 is followable at speed; that the limit is understood as an edge; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The photons landing on their lines, the shrinking brackets and the lines piling against the dashed limit carry the explanation; judge them at playback speed in the voiced preview.
- Revision 2 (7 Nov): brief 192 findings resolved and visual upgrade; see "Revision 2" below.

## Revision 2 (7 Nov 2026)

Brief 192 findings (`checks/p-y12-m8-v11-learning-review.md`, `checks/p-y12-m8-v11-science-check.md`): 0 blockers, 2 should fix, 0 optional.
- **Should fix, inconsistent visible/UV boundary (9, 11, notes, memory aid, site note).** Resolved with one boundary, 380 to 750 nm: scene 9 says "matching all four bright lines. Level seven gives three hundred and ninety seven, a faint deep violet line near the edge of what we can see."; the slider shows 389 and 384 nm inside the range and 380 nm (n_i = 10) in the UV band; scene 1 says "four bright visible lines"; the Boundary, Decisions, notes, memory aid check and site note 1 say the same; author note (f). v10 uses the same boundary and wording.
- **Should fix, grouped denominators (5, 7, feedback 1, feedback 2, model answers).** Resolved: "/ (3.03 × 10⁻¹⁹)", "1 / (1.524 × 10⁶)", "1 / (2.304 × 10⁶)", "/ (4.34 × 10⁻⁷)", "(4.58 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹)", "1 / (9.751 × 10⁶)". Values unchanged (Python: 656.0, 656.3, 434.1, 2.858, 102.6 nm).
- **Also fixed:** "violet line" for 434 nm becomes "blue-violet" (true colour), matching v10's arrow colours.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the painted discharge tube now glows in scene 1 beside the measured strip; with the spectroscope and supply it carries scene 2 and the A1 card.
- Live control: the n_i slider in scene 9 with live ΔE, 1/λ and λ readouts and true-colour photons (Python: 434.1, 410.2, 397.0, 388.9, 383.6, 379.8 and 364.6 nm), running into the UV band and on to the limit in scene 10.
- High-risk redesign (audit list): Revision 1 ran scenes 6 to 10 as one board (about 139 s); Revision 2 changes stage at 6, 7 and 9; no set-up runs past about 80 s.
- Hand tags and a pen mark in role colours in every teaching scene ("it works, but why?", "gap = photon energy", "position → wavelength", "safety", "usually given", "gaps shrink upwards", "eV → J", "joules, not eV", "both steps in one", "13.6 is rounded", "flip it", "negative → n_i and n_f swapped", "faint, still visible", "upper levels crowd → lines crowd", "an edge, not a line", "too big: UV", "too small: IR"; pen rings, brackets and arrows on 656 nm, the pointer path, the gaps, the landing photon, the derivation, n_f, the bunched lines, the limit edge and the visible band).
- Framed answers: 3.03 × 10⁻¹⁹ J (4), 656 nm (5, 7), the Rydberg line (6), 486 nm (8), "all four predicted" (9), 365 nm (10), all feedback rows (14, 16). New crossed slip: "λ = hc / 1.89 = 1.05 × 10⁻²⁵ m" (5).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip.
- Key notes cut from five long items (about 900 characters) to five short bullets (about 230 characters) with the framed memory card; the investigation and safety points stay on screen in scene 2; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v10's Revision 2 final frame (arrow colours now cyan, blue-violet and violet). The final frame (scene 17) is unchanged, so the v12 join holds.

Counts: 6,001 to 6,034 characters (scene sum); about 533 s to about 520 s.
