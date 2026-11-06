# Year 11 Chemistry M3 V12: Standard reduction potentials. How do standard reduction potentials predict a redox reaction? (design)

Status: Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,193 characters, 19 scenes, about 552 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: twelfth Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 66, between `chem-y11-m3-v11` (galvanic cells) and `chem-y11-m3-v13` (collision theory; designed in parallel by another designer). It closes the inquiry question "How is the reactivity of various metals predicted?". Templates: `chem-y11-m3-v07.md` to `v11.md` (same designer; series conventions), `math-a12-d10.md` and `chem-m5-g02.md` (calculation layout: task strip, equation strip, grouped givens with units, one reasoning stage at a time), `phys-y11-fa1-v01.md` (structure). Refers back to `chem-y11-m3-v11.md` (cells, anode and cathode, relative potentials, the illustrative readings), `chem-y11-m3-v10.md` (combining half-equations), `chem-y11-m3-v08.md` (aluminium's oxide layer) and `chem-y11-m3-v07.md` (activity series, copper in silver nitrate) instead of re-teaching them. No starter pack exists; the pack work is done here. Route entry: `chem-y11-m3-v12` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Choose reduction and oxidation, compute Ecell as a difference and predict standard-condition spontaneity; preserve units and conditions."; next handoff: "Why do collision energy and orientation control reaction rate?"). Site lessons read in full (5 November, read-only), SHA256 recomputed and matching the route: `module3/lesson09.sa.html` (`1e73dd6ac283ad894b2044d5afcd6926c071b9c9364e3f98e240e50aa44c1f92`), section `l09-standard-reduction-potentials-and-cell-poten-title`, with worked example 2 (Fe with Zn²⁺, Ag with Cu²⁺) and the drill; `module3/lesson10.sa.html` (`1e303865f44ca5de983958afeea3c5d58710b72889354d984b05e8dea887c892`), sections `l10-inert-electrodes-when-the-electrode-doesn-t--title` and `l10-predicting-reactions-using-the-standard-redu-title`, with `l10-predicting-whether-metals-will-dissolve-in-a-title`, the mini-tasks (Cu with Ag⁺; Zn, Cu, Al in acid), the worked examples and misconceptions. Used: "The standard reduction potential (E°) measures the tendency of a species to be reduced under standard conditions ... relative to the standard hydrogen electrode (SHE = 0.00 V). A more positive E° means a stronger tendency to be reduced"; "E°cell = E°cathode − E°anode"; "Must Know: ... you do NOT reverse the sign of the anode value before subtracting"; "Common Error: Students add the two E° values"; "E°cell > 0 means the reaction as written is spontaneous ... it does not predict the rate"; the prediction procedure (l10); "The standard reduction potential table and the activity series encode exactly the same reactivity ranking"; "'above hydrogen' simply means E° < 0.00 V"; inert electrodes ("conducts electrons without taking part", platinum and graphite; SHE "H₂(g) at 100 kPa over a Pt electrode in 1 mol L⁻¹ H⁺"); the aluminium mini-task note ("in practice a passive Al₂O₃ layer forms ... but the thermodynamic prediction is spontaneous"); Cu + 2Ag⁺, +0.46 V. Not used: cathodic protection and sacrificial anodes (l10; applied context, not a route action here), the Fe³⁺/Fe²⁺ with MnO₄⁻ cell (acidic half-equations, beyond m3-v10's stop), cell notation (not required by the syllabus actions; noted for root), lithium-ion and Au³⁺. Values: **NESA HSC Chemistry data sheet** standard reduction potentials (author note a), not the site's table where they differ (site note 1). Site corrections file checked: no logged item touches lessons 9 or 10.

Owner rules applied: as `chem-y11-m3-v07.md` (one learner question; no people, hands or faces; apparatus and reactions as painted plates; ladders, equations and calculations coded; one 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ2-07`: "predict the reaction of metals in solutions using the table of standard reduction potentials"
- `C3-IQ2-08`: "predict the spontaneity of redox reactions using the value of cell potentials (ACSCH079, ACSCH080)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v11's final frame. Teaches: standard reduction potential (E°) as a half-cell's potential relative to the hydrogen half-cell under stated standard conditions (25 °C, 1 mol L⁻¹, 100 kPa); filling the ladder from the data sheet; the gaps match the class cells and the order matches the activity series; reading the table (written as reductions; more positive, more readily reduced); choosing the cathode (more positive E°) and anode; E°cell = E°cathode − E°anode with values taken straight from the table; spontaneity under standard conditions (positive) and its meaning; predictions for metals in solutions (iron in copper sulfate: yes; silver in copper sulfate: no); metals in dilute acid (the H⁺/H₂ half-cell; inert platinum electrode, and inert electrodes in general); copper in silver nitrate with the "never multiply E°" trap; the limits (whether, not how fast; non-standard conditions). Recalls without re-teaching: the galvanic cell, anode and cathode, relative potentials (m3-v11), combining half-equations (m3-v10), aluminium's oxide layer (m3-v08), the activity series and copper in silver nitrate (m3-v07). Not taught: rate and collision theory (m3-v13, the handoff), cathodic protection, cell notation, acidic-medium half-cells, electrolysis.

## Decisions

- **Learner question (route wording kept).** "How do standard reduction potentials predict a redox reaction?" The answer, in order: E° values place every half-cell on one ladder against hydrogen under standard conditions (1 to 3); the more positive half-cell is reduced, the other oxidised (4); E°cell = E°cathode − E°anode (4, 5); positive means spontaneous under standard conditions (6); so a metal reacts with a solution or with acid when the resulting E°cell is positive (7 to 10, 12); E° tells whether, not how fast (13).
- **Opening frame (equals m3-v11's final frame).** Left, the relative ladder "relative to copper (V)" (Cu 0.00, Fe −0.65, Zn −1.05, Mg −1.80; tag "our class readings (illustrative)"); right, the empty "E° (V), relative to hydrogen" ladder with the dashed "H₂ 0.00" line and four "?" slots for Mg, Zn, Fe, Cu; the data-sheet card glyph; the Next chip. Scene 1 clears the Next chip and fills the slots.
- **Data-sheet values (root decision 1, m2; brief).** All E° values from the NESA HSC Chemistry data sheet: K⁺/K −2.94, Mg²⁺/Mg −2.36, Al³⁺/Al −1.68, Zn²⁺/Zn −0.76, Fe²⁺/Fe −0.44, Sn²⁺/Sn −0.14, Pb²⁺/Pb −0.13, H⁺/½H₂ 0.00, Cu²⁺/Cu +0.34, Fe³⁺/Fe²⁺ +0.77, Ag⁺/Ag +0.80. The data sheet writes hydrogen as "H⁺ + e⁻ ⇌ ½H₂(g)"; the video writes "2H⁺(aq) + 2e⁻ → H₂(g)" (m3-v10) with a grey tag "same E°: the data sheet writes it per electron" (scene 10). The data sheet uses "⇌"; screen lines use "⇌" on the table card and "→" in worked reactions, with one grey tag "the table lists each half-reaction both ways; it is written as a reduction".
- **Standard conditions (route: "preserve units and conditions").** 25 °C (298 K), solutions 1 mol L⁻¹, gases 100 kPa (site; data-sheet convention). Every E°cell result carries "V" and the phrase "under standard conditions" at least once per worked example.
- **Link to the class cells (m3-v11).** Scene 2: Cu − Zn = 1.10 V standard against the class 1.05 V; for the four tested metals (Mg, Zn, Fe, Cu) the ladder's order matches the class ranking and the activity series. Revision 2 (brief 183): the whole school series and the whole E° table are not called identical (the shared v07 series puts Na before Ca; the data sheet puts Ca before Na).
- **Calculation layout (`math-a12-d10.md`, `chem-m5-g02.md`).** Task strip ("Will Fe react with CuSO₄(aq)?"); grouped givens with units ("E°(Cu²⁺/Cu) = +0.34 V", "E°(Fe²⁺/Fe) = −0.44 V"); equation strip "E°cell = E°cathode − E°anode"; then one stage at a time: choose cathode and anode; substitute; result with units; conclusion. Earlier givens dim once used.
- **Sign trap (site Must Know and Common Error).** "Don't flip the anode's sign as well; the subtraction already does that." Crossed in A1 feedback: adding the values.
- **Never multiply E° (exam trap).** Scene 12, with the plain reason "E° measures how hard each electron is pushed, not how many electrons move". Crossed in A2 feedback (3.96 V).
- **Inert electrodes (route source `l10-inert-electrodes-...`).** Scene 10, one pass: the standard hydrogen half-cell has no solid metal, so it uses platinum, which carries the electrons without reacting (and on whose surface the hydrogen reacts); ion-to-ion couples such as Fe³⁺/Fe²⁺ also need an inert electrode, such as platinum or graphite. Revision 2 (brief 183): graphite is not presented as a replacement for the standard hydrogen electrode. No inert-electrode calculation.
- **Prediction (3 s, scene 11).** Copper wire in silver nitrate (m3-v07 attempt 2): spontaneous? Answer: yes, +0.46 V.
- **Whether, not how fast (route handoff to rate).** Scene 13: aluminium in acid has the larger E°cell (+1.68 V) but started slowly (m3-v08: the oxide layer kept the acid particles from reaching the metal atoms). Handoff: a reaction needs particles to meet. Iron rusting is named as a slow spontaneous reaction.
- **Attempts (original wording, HSC style).** A1: zinc strip in tin(II) chloride and tin strip in zinc chloride; which reacts; net ionic equation; E°cell (+0.62 V) (4 marks). Crossed: adding (−0.90 V). A2: magnesium and silver cell; overall equation; E°cell (+3.16 V) (3 marks). Crossed: doubling silver's E° (3.96 V). A2 reuses m3-v10's A1 equation (continuity).
- **Mistake scene:** none separate. "Flip the anode sign and subtract" (5); "add the values" (A1 crossed); "a negative E°cell means a slow reaction" (6, tag); "double E° with the half-equation" (12, A2 crossed); "a bigger E°cell means faster" (13, crossed).
- **Handoff (route next: `chem-y11-m3-v13`, "Why do collision energy and orientation control reaction rate?").** Final frame: see "Opening frame and final frame"; described exactly for the m3-v13 designer.
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lessons 9 and 10, E° values: Mg²⁺/Mg −2.37 V and Al³⁺/Al −1.66 V are used throughout (tables, drills, mini-tasks, the Q10 sacrificial-anode calculation +1.93 V); the HSC data sheet gives −2.36 V and −1.68 V (so Mg/Pb +2.23 V, Mg/Fe +1.92 V, Al in acid +1.68 V). Au³⁺/Au +1.50 V is not on the data sheet. Suggest the data-sheet values throughout.
  2. `l10` drill Q9(c) and mini-task: aluminium "in practice ... passivated by a tenacious Al₂O₃ surface oxide layer that prevents reaction with dilute acid under normal conditions" conflicts with lesson 7's table ("Moderate (slowed by oxide layer)") and with observation (aluminium does react with dilute hydrochloric acid after a slow start). Suggest "slows the start of the reaction".
  3. `l09` worked example 2(a) and l10: "The species with the more positive E° value always acts as the cathode" is true for a galvanic cell (spontaneous direction); in "predict whether this reaction as written is spontaneous" tasks the site correctly assigns the cathode from the equation instead. Suggest adding "(in a galvanic cell)" to the formula card's "The cathode always has the more positive E° value". Minor.
  - Checked and correct (with data-sheet values where they agree): Zn/Cu +1.10 V; Fe + Zn²⁺ −0.32 V; Ag + Cu²⁺ −0.46 V; Cu + 2Ag⁺ +0.46 V; Zn in acid +0.76 V; Cu in acid −0.34 V; Fe in acid +0.44 V; Zn/Fe +0.32 V; Fe²⁺ + Ag⁺ +0.03 V.
- **Cause chain taught, in order:** (1) a half-cell can only be measured against another, so one reference (hydrogen) is fixed at zero under fixed conditions (1); (2) the more positive E°, the more readily that species gains electrons (3); (3) in a pair, the more readily reduced species takes the electrons, so it is the cathode and the other is oxidised (4); (4) the gap between them is the cell potential, found by subtraction (4, 5); (5) a positive gap in the direction written means electrons can flow that way by themselves (6); (6) a metal reacts with an ion or acid only when that direction gives a positive E°cell (7 to 9); (7) a gas or ion-only half-cell needs an unreactive conductor (10); (8) E° is per electron, so it does not scale with the equation (12); (9) E°cell says nothing about how quickly particles meet, so it does not predict rate (13).
- **Entry knowledge:** m3-v07 (activity series, copper in silver nitrate), m3-v08 (aluminium's oxide layer), m3-v10 (combining half-equations), m3-v11 (galvanic cells, anode, cathode, relative potentials).
- **Learner-visible vocabulary (plain meaning at first use):** standard conditions (25 °C, 1 mol L⁻¹ solutions, 100 kPa gases, 1); standard reduction potential, E° (a half-cell's potential against the hydrogen half-cell under standard conditions, 1); cell potential, E°cell (the difference between the cathode's and anode's E°, 4); spontaneous (happens by itself, without a continuous supply of energy, 6); inert electrode (a conductor that carries electrons without reacting, 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **E° ladder** (scenes 1 to 13: m3-v11's empty ladder fills; tiles carry half-equations on hover-width cards, "Cu²⁺ + 2e⁻ ⇌ Cu   +0.34"; selected tiles glow violet for the cathode and teal for the anode); **gap bracket** (2, 4, 5, 7 to 9, 11, 14, 16: a vertical double arrow between two tiles labelled with the E°cell; its direction arrow shows the electron flow, downward from anode to cathode on the ladder); **calculation strips** (task, givens, equation, one stage at a time); **acid row** (9: m3-v07's acid beakers); **inert-electrode inset** (10: platinum strip glyph with H⁺ ions gaining electrons on its surface and H₂ bubbles leaving; the platinum unchanged); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m3-v07 to v11):** cathode and reduction violet; anode and oxidation teal; electrons orange; E° values ink; positive E°cell teal tick; negative red cross; hydrogen line dashed teal; illustrative class values grey; crossed items red strike.
- **Board layout (Revision 2):** the E° ladder is a reference panel on the left third (scenes 1 to 13); the main stage in the right two thirds changes every scene, each under about 35 s: the four half-cell plates beside the filling tiles (1); the class ladder beside the E° gaps (2); one enlarged table line (3); the cathode and anode cards with the equation strip (4); the zinc and copper calculation (5); the ladder enlarged to full width for the partner slider (6); the nail beakers with the calculation (7); the silver-wire beaker with the calculation (8); the acid beakers (9); the inert-electrode inset at full height (10); the full-width copper and silver working with the ladder as a thumbnail (11, 12); the zinc and aluminium beakers (13).
- **Colour roles (Revision 2, fixed for the whole video):** cathode and reduction violet; anode and oxidation teal; electrons orange; E° values ink; positive E°cell teal tick; negative E°cell red cross; hydrogen line dashed teal; the slider's partner pointer navy; illustrative class values grey; framed answers in a dark-ink box with a green tick (a red cross inside the frame for "no reaction" results); crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; source and condition tags grey.
- **Type sizes (Revision 2, 1080p):** the current calculation line at least 44 px (48 px); the framed result and the slider's live E°cell readout about 52 px; ladder tiles 34 px (the two selected tiles 40 px); task strip and givens 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (source tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the partner slider (scene 6).** A live readout on the core idea (the sign of E°cell says which way a pair runs by itself): the ladder enlarges to full width with Cu²⁺/Cu fixed as the cathode (violet). A navy partner pointer slides along the ladder from Ag down through Fe, Zn and Mg, and a live readout (52 px) recomputes "E°cell = (+0.34) − (partner)" at each stop: Ag −0.46 V (red cross, "not as written"), Fe +0.78 V, Zn +1.10 V, Mg +2.70 V (teal ticks, "spontaneous"). The gap bracket stretches with the pointer, so a longer downward gap reads as a larger positive value.

Author notes (not learner copy):
(a) NESA HSC Chemistry data sheet values used (confirmed 5 November against a published transcription; Codex to confirm against the current NESA PDF): K⁺ + e⁻ ⇌ K(s) −2.94 V; Mg²⁺ + 2e⁻ ⇌ Mg(s) −2.36 V; Al³⁺ + 3e⁻ ⇌ Al(s) −1.68 V; Zn²⁺ + 2e⁻ ⇌ Zn(s) −0.76 V; Fe²⁺ + 2e⁻ ⇌ Fe(s) −0.44 V; Sn²⁺ + 2e⁻ ⇌ Sn(s) −0.14 V; Pb²⁺ + 2e⁻ ⇌ Pb(s) −0.13 V; H⁺ + e⁻ ⇌ ½H₂(g) 0.00 V; Cu²⁺ + 2e⁻ ⇌ Cu(s) 0.34 V; Fe³⁺ + e⁻ ⇌ Fe²⁺ 0.77 V; Ag⁺ + e⁻ ⇌ Ag(s) 0.80 V. Signs: the data sheet prints positive values without "+"; the video writes "+0.34" for clarity.
(b) Standard conditions: the HSC convention is 25 °C, 100 kPa and 1 mol L⁻¹ (site; matches m2-v04's 100 kPa). The thermodynamic standard is unit activity; not stated.
(c) "Spontaneous": E°cell > 0 means ΔG° < 0 (not stated). Non-standard concentrations shift the cell potential (Nernst; not stated); scene 13 says "real solutions are rarely exactly standard, so real voltages can differ" (Revision 2: no promise that the difference is small). The acid predictions are for dilute non-oxidising acid (hydrochloric acid here): copper does react with oxidising acids such as nitric acid, which is outside this video.
(d) Magnesium in the acid row is not used (it is in m3-v07); A2's magnesium and silver cell is a written question.
(e) Tin(II) chloride: used in A1 because tin(II) nitrate is not a common laboratory solution; tin(II) chloride solutions are acidified in practice (not stated; A1 is a written question).
(f) The rusting example (scene 18): iron with oxygen and water is spontaneous (E°(O₂/OH⁻) +0.40 V against Fe −0.44 V, E° difference +0.84 V; not stated) but slow.
(g) Pronunciations: "E nought" for E°; "E nought cell"; every subtraction is spoken "subtract" (Revision 2, m3 root decision 13): "plus zero point three four, subtract negative zero point seven six", "subtract zero point eight oh"; "tin two chloride".

Main question: *How do standard reduction potentials predict a redox reaction?*
Entry knowledge: m3-v07, m3-v08, m3-v10, m3-v11.
Stops after: E° defined with conditions; the table read; cathode and anode chosen; E°cell computed as a difference with units; spontaneity under standard conditions predicted for metals in solutions and in acid; inert electrodes named; E° not multiplied; whether, not how fast. No rate theory.
Handoff: chem-y11-m3-v13, collision theory.

## Opening frame and final frame

- **Opening frame (equals m3-v11's final frame):** left half, the relative ladder titled "relative to copper (V)": ticks at 0.00, −0.50, −1.00, −1.50, −2.00; tiles "Cu 0.00" (on a zero line with a small wave glyph), "Fe −0.65", "Zn −1.05", "Mg −1.80", teal outlines, grey tag "our class readings (illustrative)"; right half, the empty ladder titled "E° (V), relative to hydrogen", ticks −3.00 to +1.00, a dashed teal "H₂ 0.00" line, four empty "?" slots labelled "Mg", "Zn", "Fe", "Cu"; top right, the ruled card glyph "Standard reduction potentials (data sheet)"; the chip "Next: How do standard reduction potentials predict a redox reaction?".
- **Final frame (m3-v13 opens on it):** left third, the E° ladder small (tiles K −2.94, Mg −2.36, Al −1.68, Zn −0.76, Fe −0.44, H₂ 0.00 dashed, Cu +0.34, Ag +0.80), with the Al and Zn tiles ringed teal; right two thirds, two acid beaker plates side by side at one scale, rims level: left `m6-zinc-acid-v1.png` (zinc granules, steady bubbles) with the tag above "Zn: E°cell = +0.76 V" and a teal tick "spontaneous", right `y11c-aluminium-acid-v1.png` (foil, one or two bubbles) with the tag "Al: E°cell = +1.68 V" and a teal tick "spontaneous"; under the aluminium beaker a crossed red chip "bigger E°cell = faster"; centred under both beakers an amber chip "how fast? particles must meet"; a small coded clock glyph beside the amber chip; the chip "Next: Why do collision energy and orientation control reaction rate?". No oxide inset, no particles drawn (m3-v13 decides its own first particle view).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. the standard ladder
> Here's the data sheet's version of our ladder. Chemists measured each half-cell against the hydrogen half-cell, under standard conditions, which means twenty-five degrees, solutions at one mole per litre, and gases at one hundred kilopascals. Each value is called a standard reduction potential, E nought. Copper sits at plus zero point three four volts, iron at minus zero point four four, zinc at minus zero point seven six, and magnesium at minus two point three **six**.

Visual: (stage: the filling ladder with the four half-cell plates; about 35 s) opens on m3-v11's final frame; the Next chip clears and the class ladder slides small to the far left. On "hydrogen half-cell" the dashed H₂ line glows (teal hand tag "zero by agreement"). On "standard conditions" a conditions card writes under the ladder title: "standard conditions: 25 °C, 1 mol L⁻¹, 100 kPa". Gloss chip "standard reduction potential, E°: a half-cell's potential against hydrogen, under standard conditions". On "Copper sits" the Cu slot fills "Cu²⁺/Cu +0.34 V" and `y11c-halfcell-cu-v1.png` (from m3-v11) appears in the right two thirds level with its tile; then "Fe²⁺/Fe −0.44", "Zn²⁺/Zn −0.76" with `y11c-halfcell-fe-v1.png` and `y11c-halfcell-zn-v1.png`; on "six" "Mg²⁺/Mg −2.36" with `y11c-halfcell-mg-v1.png` (source tag "HSC data sheet"). The four half-cells stand in a row at one scale, each joined to its tile by a pen line; a pen ring circles "−2.36".

### 2. the same gaps as our cells
> Look at the gaps. Copper minus zinc is one point one oh volts. Our class reading was one point oh five, a little lower, because our conditions weren't exactly standard. And for these four metals, the order matches our cells and the activity series. Here, the table gives the same ranking, with **numbers**.

Visual: on "Copper minus zinc" a gap bracket between Cu and Zn on the E° ladder "1.10 V"; the class ladder's Cu–Zn gap "1.05 V" (grey) lines up beside it. On "the order matches" the Mg, Zn, Fe and Cu tiles on both ladders link with grey lines; m3-v07's series strip slides in beside them (flipped: least reactive at the top) with only those four tiles lit. On "numbers" a tag "Mg, Zn, Fe, Cu: same order, now with numbers" (ink hand tag "for these four"; grey tag "the full lists differ in places"). Grey hand tag "not standard" beside "1.05 V".

### 3. reading the table
> Every line on the data sheet is written as a reduction, with the electrons on the left. The more positive the E nought, the more readily that substance gains electrons. So silver ions, at plus zero point eight oh, are reduced more readily than copper ions. The more negative the E nought, the more readily the half-reaction runs backwards, as an oxidation. Potassium, at minus two point nine four, loses electrons the most readily of all the metals on the **sheet**.

Visual: the class ladder and strip clear; the E° ladder widens and adds tiles: "Ag⁺ + e⁻ ⇌ Ag +0.80", "Pb²⁺/Pb −0.13", "Sn²⁺/Sn −0.14", "Al³⁺/Al −1.68", "K⁺ + e⁻ ⇌ K −2.94". On "written as a reduction" one tile enlarges: "Cu²⁺ + 2e⁻ ⇌ Cu(s)" with "e⁻ on the left" (grey tag "the ⇌ means it can run either way"). On "more positive" a violet arrow up the ladder "more readily reduced"; on "silver ions" the Ag tile glows violet. On "more negative" a teal arrow down "more readily oxidised"; on "sheet" the K tile glows teal. Hand tags: violet "gains e⁻ most easily" at Ag, teal "loses e⁻ most easily" at K; a pen ring around "e⁻ on the left".

### 4. which way a pair runs
> When two half-cells are joined, they can't both be reduced. The one with the more positive E nought is reduced, at the cathode. The other runs backwards, as an oxidation, at the anode. The cell potential is the difference between them. E nought cell equals E nought of the cathode minus E nought of the **anode**.

Visual: the Cu and Zn tiles pull out to the right side of the ladder. On "more positive" Cu glows violet "cathode: reduced"; on "runs backwards" Zn glows teal "anode: oxidised", its half-equation flipping to "Zn → Zn²⁺ + 2e⁻". Gloss chip "cell potential, E°cell". On "anode" the equation strip writes large (52 px) in a framed box: "E°cell = E°cathode − E°anode" (violet "cathode", teal "anode"; ink hand tag "cathode minus anode" with a pen arrow from each tile to its term).

### 5. zinc and copper
> For zinc and copper, copper is more positive, so copper ions are reduced, and zinc is oxidised. E nought cell is plus zero point three four, subtract negative zero point seven six, which is plus one point one oh **volts**. Notice you use both values straight from the table. Don't flip the anode's sign as well, because the subtraction already does **that**.

Visual: givens group: "E°(Cu²⁺/Cu) = +0.34 V", "E°(Zn²⁺/Zn) = −0.76 V". Stage by stage under the equation strip: "cathode: Cu (more positive); anode: Zn"; "E°cell = (+0.34) − (−0.76)"; on "volts" "E°cell = +1.10 V" framed in a dark-ink box with a green tick, with the gap bracket on the ladder (ink hand tag "subtracting a negative adds"). On "that" a chip "flip −0.76 to +0.76, then subtract: −0.42 V" fades in and is crossed in red (red hand tag "values straight from the table").

### 6. what a positive value means
> A positive E nought cell means the reaction is spontaneous under standard conditions. Spontaneous means it happens by itself, without a continuous supply of energy. A negative value means the reaction as written won't happen by itself, though the reverse **will**.

Visual: (stage change: the partner slider at full width; about 20 s) under "+1.10 V" a teal tick "spontaneous (standard conditions)". Gloss chip "spontaneous: happens by itself, without a continuous supply of energy". The ladder enlarges to full width and the partner slider runs (see Simulation): with copper fixed as the cathode, the navy pointer stops at Fe (+0.78 V, tick), Zn (+1.10 V, tick) and Mg (+2.70 V, tick) as the live readout recomputes. On "negative value" the pointer slides up to Ag and the readout turns red, "−0.46 V", with a red cross; on "will" a small arrow flips the pair's direction and the readout shows "+0.46 V" with a teal tick (tag "negative is not 'slow'; it's 'not this way'"; red hand tag "not as written").

### 7. predicting: iron in copper sulfate
> Now use it to predict. Will an iron nail react with copper sulfate solution? If it did, iron would be oxidised, and copper ions reduced. E nought cell is plus zero point three four, subtract negative zero point four four, which is plus zero point seven **eight** volts. Positive, so yes. The nail gets coated in copper, and the blue fades. Iron plus copper two plus gives iron two plus plus **copper**.

Visual: (stage change: the nail beakers with the calculation; about 29 s) the ladder returns to the left third. `y11c-cuso4-beaker-nail-v1.png` (delivered by brief 183) large at the right, filling about two thirds of the frame height. Task strip "Will Fe(s) react with CuSO₄(aq)?"; givens "E°(Cu²⁺/Cu) = +0.34 V", "E°(Fe²⁺/Fe) = −0.44 V". Stages: "if it reacts: Fe oxidised (anode), Cu²⁺ reduced (cathode)"; "E°cell = (+0.34) − (−0.44)"; on "eight" "E°cell = +0.78 V" framed in a dark-ink box with a green tick. On "Positive, so yes" the beaker cross-fades to `y11c-cuso4-beaker-nail-after-v1.png` (delivered) (amber hand tag "copper coat" with a pen ring; blue hand tag "blue fades"). On "copper" the line "Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s)".

### 8. a no: silver in copper sulfate
> Now a silver wire in copper sulfate. Silver would be oxidised, and copper ions reduced. Plus zero point three four, subtract zero point eight oh, is minus zero point four six volts. Negative, so no reaction. That matches the activity series, where silver is below **copper**.

Visual: (stage change: the silver-wire beaker; about 21 s) `y11c-cuso4-beaker-silver-v1.png` (new) replaces the nail beaker at the same scale (grey hand tag "no change"). Task strip "Will Ag(s) react with CuSO₄(aq)?"; givens "E°(Cu²⁺/Cu) = +0.34 V", "E°(Ag⁺/Ag) = +0.80 V"; stages "if it reacts: Ag anode, Cu²⁺ cathode"; "E°cell = (+0.34) − (+0.80)", then "E°cell = −0.46 V: no reaction" framed in a dark-ink box with a red cross (red hand tag "negative: not this way"). On "silver is below copper" the series strip flashes Cu above Ag.

### 9. metals in acid
> Dilute hydrochloric acid works the same way. Hydrogen ions are reduced to hydrogen gas, at zero volts exactly. So any metal with a negative E nought gives a positive E nought cell, and reacts with the acid. Zinc gives plus zero point seven six. Copper gives minus zero point three four, so copper doesn't react. Above hydrogen in the activity series just means a negative E **nought**.

Visual: (stage change: the acid beakers; about 29 s) m3-v07's acid beakers fill the right two thirds at one scale, rims level: `m6-zinc-acid-v1.png`, `m6-copper-acid-v1.png` (grey tag "dilute HCl"). Givens "E°(2H⁺/H₂) = 0.00 V". Stages: "Zn: E°cell = 0.00 − (−0.76) = +0.76 V" framed with a green tick over the zinc beaker (teal hand tag "bubbles"); "Cu: E°cell = 0.00 − (+0.34) = −0.34 V" framed with a red cross over the copper beaker (grey hand tag "nothing"). On "nought" the dashed H₂ line on the ladder glows and the tag "above H in the series = negative E°" writes.

### 10. a half-cell with no metal
> But how do you make a half-cell from hydrogen gas? There's no solid to use as the electrode. The standard hydrogen half-cell uses platinum, which carries electrons in and out but doesn't react itself. It's called an inert electrode. Half-cells where both chemicals are ions, like iron three plus and iron two plus, also need an inert electrode, such as platinum or **graphite**.

Visual: (stage change: the inert-electrode inset at full height; about 26 s) a platinum strip glyph in an acid beaker outline with H₂ bubbling over it (coded); H⁺ dots touch the surface, take orange electrons and leave as H₂ bubbles; the platinum stays unchanged (tag "Pt: unchanged"; ink hand tag "carries e⁻, never reacts" with a pen arrow to the strip). Gloss chip "inert electrode: carries electrons without reacting". Grey tags "standard hydrogen half-cell: platinum" and "data sheet writes H⁺ + e⁻ ⇌ ½H₂: same E°". On "iron three plus and iron two plus" a tile "Fe³⁺ + e⁻ ⇌ Fe²⁺ +0.77" adds to the ladder; on "graphite" a small platinum glyph and a graphite rod glyph appear beside it (grey tag "ion-to-ion half-cells: Pt or graphite").

### 11. prediction: copper in silver nitrate (countdown, 3 seconds)
> Quick prediction. Remember copper wire in silver nitrate? Work out E nought cell. Is it **spontaneous**?

Visual: (stage change: full-width working; the ladder shrinks to a thumbnail at the top left) task strip "Will Cu(s) react with AgNO₃(aq)?"; givens "E°(Ag⁺/Ag) = +0.80 V", "E°(Cu²⁺/Cu) = +0.34 V"; the equation strip; an empty result box. On "spontaneous" the 3 s `Countdown` ring runs.

### 12. yes, and the trap
> Yes. Silver ions are reduced, and copper is oxidised. Plus zero point eight oh, subtract zero point three four, is plus zero point four six volts. Now look at the equation. Copper plus two silver ions gives copper two plus plus two silver. You doubled the silver half-equation to balance the electrons, but you never double its E nought. E nought measures how hard each electron is pushed, not how many electrons move, so it stays the **same**.

Visual: stages: "cathode: Ag⁺; anode: Cu"; "E°cell = (+0.80) − (+0.34)", then "E°cell = +0.46 V" framed in a dark-ink box with a green tick. On "Now look at the equation" m3-v10's working slides in: "Ag⁺ + e⁻ → Ag" with "× 2", result "Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)". On "never double" a chip "E° × 2 = +1.60 V" fades in; on "same" it is crossed in red (red hand tag "per electron: never × 2"), and the silver tile shows "+0.80, whatever the multiplier" with a pen ring.

### 13. whether, not how fast
> One more limit. E nought cell tells you whether a reaction can happen under standard conditions, not how fast it happens. Aluminium in acid gives plus one point six eight volts, more than zinc, yet the foil barely fizzed at first, because of its oxide layer. And real solutions are rarely exactly standard, so real voltages can **differ**.

Visual: (stage change: the zinc and aluminium beakers; about 26 s) `m6-zinc-acid-v1.png` and `y11c-aluminium-acid-v1.png` (m3-v07) side by side, large, rims level; tags "Zn: +0.76 V", "Al: 0.00 − (−1.68) = +1.68 V" (both ticked). On "barely fizzed" a pen ring circles the aluminium's one or two bubbles and a chip "bigger E°cell = faster" fades in and is crossed in red (red hand tag "whether, not how fast"). On "differ" the class reading "1.05 V" and the standard "1.10 V" flash side by side (grey tag "one example").

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A strip of zinc is placed in tin two chloride solution, and a strip of tin is placed in zinc chloride solution. Using standard reduction potentials, predict which one reacts, write the net ionic equation, and calculate E nought cell. Pause here to answer.

Visual: board clears (the ladder hides). `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A strip of zinc is placed in 1 mol L⁻¹ tin(II) chloride solution. A strip of tin is placed in 1 mol L⁻¹ zinc chloride solution. Both are at 25 °C. Data: E°(Zn²⁺/Zn) = −0.76 V; E°(Sn²⁺/Sn) = −0.14 V. (a) Using E°cell, predict which combination reacts. (b) Write the net ionic equation for the reaction. (c) State the value of E°cell for this reaction. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 15. feedback 1 (brief)
> Zinc in the tin solution reacts. Tin two plus ions are reduced, and zinc is oxidised. E nought cell is minus zero point one four, subtract negative zero point seven six, which is plus zero point six two volts, so it's spontaneous. Zinc plus tin two plus gives zinc two plus plus tin. Adding the values to get minus zero point nine oh is the **slip**. It's always cathode minus **anode**.

Visual: card shrinks to the top. Stages: "cathode: Sn²⁺ (more positive); anode: Zn"; "E°cell = (−0.14) − (−0.76) = +0.62 V" framed in a dark-ink box with a green tick; "tin in ZnCl₂: −0.62 V, no reaction" (small, grey); line "Zn(s) + Sn²⁺(aq) → Zn²⁺(aq) + Sn(s)". On "slip" a chip "(−0.76) + (−0.14) = −0.90 V" fades in; on "anode" it is crossed in red (red hand tag "subtract, never add"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A galvanic cell is made from a magnesium half-cell and a silver half-cell. Write the overall equation, and calculate the standard cell potential. Pause here to answer.

Visual: `QuestionCard`: "A galvanic cell is constructed from a Mg(s)/Mg²⁺(aq) half-cell and a Ag(s)/Ag⁺(aq) half-cell under standard conditions. Data: E°(Mg²⁺/Mg) = −2.36 V; E°(Ag⁺/Ag) = +0.80 V. (a) Write the balanced overall equation for the cell reaction. (b) Calculate E°cell. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 17. feedback 2 (brief)
> Magnesium is oxidised, and silver ions are reduced. To balance the electrons, double the silver half-equation, so magnesium plus two silver ions gives magnesium two plus plus two silver. E nought cell is plus zero point eight oh, subtract negative two point three six, which is plus three point one six volts. Doubling silver's value first gives three point nine six, and that's the **trap**.

Visual: card shrinks. "Mg → Mg²⁺ + 2e⁻" (teal), "Ag⁺ + e⁻ → Ag" (violet) "× 2"; line "Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s)"; "E°cell = (+0.80) − (−2.36) = +3.16 V" framed in a dark-ink box with a green tick. On "trap" a chip "2(+0.80) − (−2.36) = +3.96 V" fades in and is crossed in red (red hand tag "never double E°"). Hold about 1 second.

### 18. conclusion and handoff
> So standard reduction potentials tell you which way the electrons move, and a positive E nought cell says the reaction is spontaneous. But spontaneous doesn't mean fast. Iron rusting is spontaneous, and it takes months. Aluminium in acid has the bigger E nought cell, yet it started slowly, because the acid particles couldn't reach the metal atoms. A reaction can only happen when particles meet. Why do collision energy and orientation control reaction **rate**?

Visual: the E° ladder shrinks to the left third (K, Mg, Al, Zn, Fe, H₂, Cu, Ag tiles). On "which way the electrons move" an orange arrow down the ladder. On "Iron rusting" a grey tag "rusting: spontaneous, slow" with the coded clock glyph. On "Aluminium in acid" `m6-zinc-acid-v1.png` and `y11c-aluminium-acid-v1.png` return side by side, rims level, tags "Zn: E°cell = +0.76 V ✓ spontaneous" and "Al: E°cell = +1.68 V ✓ spontaneous"; the Al and Zn tiles on the ladder ring teal; the crossed chip "bigger E°cell = faster" sits under the aluminium beaker. On "particles meet" the amber chip "how fast? particles must meet" writes centred under both beakers, the clock glyph beside it; the rusting tag fades. On "rate" the chip "Next: Why do collision energy and orientation control reaction rate?" writes. Hold about 2 seconds. This is the final frame (m3-v13 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. E°: potential against hydrogen (0.00 V) at 25 °C, 1 mol L⁻¹, 100 kPa.
2. More positive E°: reduced (cathode). The other: oxidised (anode).
3. E°cell = E°cathode − E°anode. Table values; never multiply E°.
4. E°cell > 0: spontaneous under standard conditions.
5. In dilute HCl, metals with negative E° react. E° says whether, not how fast.

Memory aid (framed card, on the notes screen): *Cathode minus anode, straight from the table: positive means it goes.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why a reference and fixed conditions (1); why the more positive half-cell is reduced (3, 4); why the anode's sign is not flipped (5); why positive means spontaneous (6); why metals above hydrogen react with acid (9); why a gas needs platinum (10); why E° is not multiplied (12); why E° does not predict speed (13, 18).
- **Misconceptions addressed:** flip-then-subtract (5, crossed); negative means slow (6, tag); add the values (A1 crossed); multiply E° (12, A2 crossed); bigger E°cell means faster (13, crossed).
- **One idea at a time:** the ladder (1 to 3), the rule (4 to 6), predicting in solutions (7, 8), in acid (9, 10), the multiplier trap (11, 12), the limit (13).
- **Video makes it easier:** the empty ladder from m3-v11 fills (1); the class and standard gaps sit side by side (2); the gap bracket between two tiles is the E°cell (4 onwards); the nail plate changes on "yes" (7); the acid beakers carry their E°cell tags (9, 13); the doubled half-equation sits beside an unchanged E° (12).
- **Response opportunity:** one 3 s prediction (11); two unseen HSC-style tasks with all E° values on the card, 10 s each, nothing answer-bearing. Feedback about 28 s and 29 s.
- **Avoided double teaching:** the galvanic cell and relative potentials (m3-v11), combining half-equations (m3-v10), aluminium's oxide layer (m3-v08), the series and copper in silver nitrate (m3-v07).
- **Syllabus coverage:** `C3-IQ2-07` "predict the reaction of metals in solutions using the table of standard reduction potentials" (7, 8, 9, 11, 12, A1); `C3-IQ2-08` "predict the spontaneity of redox reactions using the value of cell potentials" (4 to 6, 13, A1, A2).
- **Out of scope by design:** rate and collision theory (m3-v13), cathodic protection, cell notation, acidic-medium half-cells, non-standard calculations.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Zinc in tin(II) chloride: if Sn²⁺ is reduced (cathode) and Zn oxidised (anode), E°cell = (−0.14) − (−0.76) = +0.62 V > 0, so spontaneous; tin in zinc chloride would give (−0.76) − (−0.14) = −0.62 V, not spontaneous (2 marks). (b) Zn(s) + Sn²⁺(aq) → Zn²⁺(aq) + Sn(s) (1 mark). (c) E°cell = +0.62 V (1 mark). Classic mistake (crossed): "(−0.76) + (−0.14) = −0.90 V".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s) (1 mark; silver half-equation doubled to balance electrons) (1 mark). (b) E°cell = E°cathode − E°anode = (+0.80) − (−2.36) = +3.16 V (1 mark). Classic mistake (crossed): "2(+0.80) − (−2.36) = +3.96 V".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| E° (data sheet, V) | K −2.94; Mg −2.36; Al −1.68; Zn −0.76; Fe −0.44; Sn −0.14; Pb −0.13; H 0.00; Cu +0.34; Fe³⁺/Fe²⁺ +0.77; Ag +0.80 | 1 to 18 |
| Standard conditions | 25 °C, 1 mol L⁻¹, 100 kPa | 1, 14, 16, notes |
| Zn/Cu | 0.34 − (−0.76) = +1.10 V; class 1.05 V (illustrative, m3-v11); crossed flip: 0.34 − 0.76 = −0.42 V | 2, 5, 13 |
| Fe in CuSO₄ | 0.34 − (−0.44) = +0.78 V; Fe + Cu²⁺ → Fe²⁺ + Cu | 7, notes |
| Ag in CuSO₄ | 0.34 − 0.80 = −0.46 V | 8 |
| Acid | Zn 0.00 − (−0.76) = +0.76 V; Cu 0.00 − 0.34 = −0.34 V; Al 0.00 − (−1.68) = +1.68 V | 9, 13, 18 |
| Cu in AgNO₃ | 0.80 − 0.34 = +0.46 V; Cu + 2Ag⁺ → Cu²⁺ + 2Ag; crossed 2 × 0.80 = 1.60 | 11, 12 |
| A1 | (−0.14) − (−0.76) = +0.62 V; reverse −0.62 V; Zn + Sn²⁺ → Zn²⁺ + Sn; crossed (−0.76) + (−0.14) = −0.90 V | 14, 15 |
| A2 | 0.80 − (−2.36) = +3.16 V; Mg + 2Ag⁺ → Mg²⁺ + 2Ag; crossed 1.60 + 2.36 = 3.96 V | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked by script (5 November); Codex to re-check every value against the current NESA HSC Chemistry data sheet PDF.

- 0.34 + 0.76 = 1.10; 0.34 − 0.76 = −0.42; 0.34 + 0.44 = 0.78; 0.34 − 0.80 = −0.46; 0.00 + 0.76 = 0.76; 0.00 − 0.34 = −0.34; 0.00 + 1.68 = 1.68; 0.80 − 0.34 = 0.46; −0.14 + 0.76 = 0.62; −0.76 + 0.14 = −0.62; −0.76 − 0.14 = −0.90; 0.80 + 2.36 = 3.16; 1.60 + 2.36 = 3.96.
- Equations balanced in atoms and charge: Fe + Cu²⁺ → Fe²⁺ + Cu; Cu + 2Ag⁺ → Cu²⁺ + 2Ag; Zn + Sn²⁺ → Zn²⁺ + Sn; Mg + 2Ag⁺ → Mg²⁺ + 2Ag; Zn + 2H⁺ → Zn²⁺ + H₂ (author only).

## Memory aid check

- **"Cathode minus anode, straight from the table: positive means it goes."** Assumptions checked: "straight from the table" means both values as reduction potentials, unflipped and unmultiplied; "it goes" means spontaneous under standard conditions, not fast (scene 13) and not guaranteed at other concentrations (author note c); the cathode is the species reduced in the reaction being tested (so for "will this happen as written?" the cathode is read from the equation, not chosen as the more positive). It helps a new case: A1 (the reverse combination gives −0.62 V).
- **Considered, not used:** "NOO-PRR" style table-direction mnemonics (they depend on which way a table is printed; the data sheet's order is shown instead); the "anti-clockwise rule" (needs a table printed the other way up from the data sheet).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,193 characters**, 19 scenes (Revision 1: 6,096). At 13.3 characters per second the speech is about 466 s; add about 7 s of settling (the ladder and plates in 1 and 3, the slider in 6, the nail cross-fade in 7, the acid beakers in 9, the inset in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold (about 58 s in all): **about 552 s** (Revision 1: about 542 s).

## Scene list and build ids

Lesson key `c-y11-m3-v12` (route chem-y11-m3-v12; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v12`.

In order (19 scene headings, all `### N.`): standard-ladder, same-gaps, reading-table, which-way, zinc-copper, spontaneous, iron-copper-sulfate, silver-copper-sulfate, metals-in-acid, inert-electrode, prediction-copper-silver, multiplier-trap, whether-not-how-fast, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction-copper-silver (`explain` ending in a 3 s hold), attempt-1, attempt-2 and key-notes (`hold`). Transitions: the opening frame into scene 1 by clearing the Next chip and filling the slots; 1 to 2 camera continue; 2 to 3 camera continue (the class ladder clears, the E° ladder widens); 3 to 13 camera continue with the ladder fixed at the left and the right two thirds clearing between examples; attempts and feedback card shrink to the top (the ladder hides); 17 to 18 board clear (the ladder returns small); 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v12-learning-review.md`, `checks/c-y11-m3-v12-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 250 px; scaled uniformly only, never stretched):
- `public/assets/chemistry/m6-zinc-acid-v1.png`, `m6-copper-acid-v1.png`: scenes 9, 13, 18 and the final frame.
- Delivered for m3-v07 (brief 182): `y11c-aluminium-acid-v1.png` (aligned with `m6-zinc-acid-v1.png`): scenes 13, 18 and the final frame.
- Delivered by brief 183 (inspected 6 November on a paper contact sheet at about 300 px; native 1106 × 1422, the zinc-set canvas): `y11c-cuso4-beaker-nail-v1.png`, `y11c-cuso4-beaker-nail-after-v1.png`: scene 7.
- Revision 2: the m3-v11 half-cell plates `y11c-halfcell-mg-v1.png`, `y11c-halfcell-zn-v1.png`, `y11c-halfcell-fe-v1.png`, `y11c-halfcell-cu-v1.png` (delivered by brief 183, inspected): scene 1, one beside each filling tile.
- **Inspected, not used:** `y11c-cuso4-beaker-zinc-after-v1.png` (zinc, not iron; the iron prediction needs its own observation).

Need (new plate, Codex, Revision 2):
1. `y11c-cuso4-beaker-silver-v1.png`: scene 8 (the "no" prediction gets its own unchanged beaker). Fallback: `c11-cuso4-beaker-dissolved-v1.png` with the grey tag "silver wire: no change" (no coded wire drawn into the plate).

Coded: E° ladder and tiles, gap brackets, conditions card, calculation strips, chips, inert-electrode inset, platinum glyph, clock glyph, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v12)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m3-v12.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

Delivered by brief 183: `y11c-cuso4-beaker-nail-v1.png`, `y11c-cuso4-beaker-nail-after-v1.png` (1106 × 1422). Revision 2 request:

1. `y11c-cuso4-beaker-silver-v1.png` (1106 × 1422 px, the canvas of `y11c-cuso4-beaker-nail-v1.png`): **edit of that plate**, the same beaker and clear blue copper(II) sulfate solution, with one clean, bright silver wire (a short straight length, slightly bent at the top) leaning in the nail's position, its top above the liquid; no deposit, no bubbles, no colour change.

The plate must overlay the nail pair exactly (beaker outline and liquid level). Also confirm that `m6-zinc-acid-v1.png` and `y11c-aluminium-acid-v1.png` sit side by side at one scale with rims level (the final frame depends on it; m3-v13 opens on that frame). Report on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m3-v12-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Confirm every E° value against the current NESA HSC Chemistry data sheet PDF; re-check every subtraction under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson09.sa.html` and `module3/lesson10.sa.html` (sections named in Scope).
3. Confirm both attempt cards are original, carry every needed fact (E° values, conditions), and show nothing answer-bearing.
4. Confirm the syllabus quotes match `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals `chem-y11-m3-v11.md`'s "Final frame", and send this design's "Final frame" text unchanged to the m3-v13 designer.

## YouTube metadata (draft)

Title: Standard Reduction Potentials: Predicting Redox Reactions | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Use the table of standard reduction potentials on the HSC data sheet to predict whether a metal reacts with a solution or with dilute acid. Learn what E° means and its standard conditions, how to pick the cathode and anode, how to calculate E°cell = E°cathode − E°anode without the classic sign slip, why you never multiply E°, what an inert electrode is, and why a positive E°cell says a reaction is spontaneous but not how fast. Worked examples: iron and silver in copper sulfate, zinc and copper in acid, copper in silver nitrate. Includes two exam-style questions.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"predict the reaction of metals in solutions using the table of standard reduction potentials"
"predict the spontaneity of redox reactions using the value of cell potentials (ACSCH079, ACSCH080)"

Previous: Why does a galvanic cell need two half-cells and an ion path? Next: Why do collision energy and orientation control reaction rate?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Final frame to the m3-v13 designer (root).** The final frame is described exactly above; root passes it to the m3-v13 designer and reconciles if v13 needs a different first image (only scene 18's last two sentences and the chip would change).
- **2. Cell notation and cathodic protection (root).** The site teaches both (lessons 9 and 10); neither is a 2017 Module 3 syllabus action named in the route. Not designed; root decides whether a short applied video is wanted.
- **3. Inert electrodes (learning review).** Scene 10 is one pass with no calculation. Keep, or cut (saves about 330 characters) if the review finds the video full.
- **4. Spoken signs (resolved in Revision 2).** Every subtraction is spoken "subtract" (m3 root decision 13): "subtract negative zero point seven six", "subtract zero point eight oh"; the voicing pilot still listens for clarity (author note g).
- **5. Plates (root).** The nail pair is delivered (1106 × 1422). One new request in Revision 2: the silver wire in copper sulfate (scene 8), with a written fallback.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is scene 3's reading of the table clear before the rule; are 13 teaching scenes too many), then the science check and Codex error check.
- Checker output (5 November): narration 6,096 characters; per scene (1 to 19): 470, 274, 462, 309, 347, 260, 391, 273, 364, 325, 100, 442, 340, 266, 376, 177, 385, 460, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 6 should fix; all resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,193 characters; per scene (1 to 19): 470, 302, 462, 309, 350, 260, 394, 271, 381, 374, 100, 440, 335, 266, 379, 177, 388, 460, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m3-v12-learning-review.md`, `checks/c-y11-m3-v12-science-check.md`; both list the same six):
1. Scope of the ranking (should fix): scene 2 now says "for these four metals, the order matches our cells and the activity series. Here, the table gives the same ranking, with numbers"; the screen lights only Mg, Zn, Fe and Cu, with tags "for these four" and "the full lists differ in places". The Link decision records the Na and Ca difference.
2. Acid being predicted (should fix): scene 9 says "Dilute hydrochloric acid works the same way ... reacts with the acid", with a "dilute HCl" tag; key note 5 says "In dilute HCl"; author note (c) records that copper reacts with oxidising acids. Scene 13's passivation and rate distinction is kept.
3. Standard hydrogen electrode (should fix): scene 10 now says "The standard hydrogen half-cell uses platinum ... Half-cells where both chemicals are ions ... also need an inert electrode, such as platinum or graphite"; the tags separate "standard hydrogen half-cell: platinum" from "ion-to-ion half-cells: Pt or graphite". The bold cue is now "graphite".
4. Size of non-standard effects (should fix): scene 13 says "real voltages can differ" (no "a little"); the 1.05 against 1.10 V pair is tagged "one example".
5. Spoken subtraction (should fix): scenes 5, 7, 15 and 17 now say "subtract negative ..." (m3 root decision 13), and scenes 8 and 12 say "subtract zero point ..." for consistency. Values unchanged. Author note (g) and open decision 4 updated.
6. Metadata length (should fix): title now "Standard Reduction Potentials: Predicting Redox Reactions | Year 11 Chemistry Module 3" (86 characters).

Visual upgrade (teaching logic unchanged; this design was on the audit's no-framed-answer list):
- Scene 1: the four painted half-cells from m3-v11 appear beside their tiles as the ladder fills.
- Framed answers on every worked result: +1.10 V (5), +0.78 V (7), −0.46 V with a red cross (8), +0.76 V and −0.34 V (9), +0.46 V (12), +0.62 V (feedback 1), +3.16 V (feedback 2); the E°cell equation strip framed (4). Crossed slips carry red hand tags ("values straight from the table", "per electron: never × 2", "whether, not how fast", "subtract, never add", "never double E°").
- Live readout: the partner slider (scene 6): copper fixed as the cathode while a pointer moves through Ag, Fe, Zn and Mg and the E°cell readout recomputes (−0.46, +0.78, +1.10, +2.70 V).
- Stage changes: the ladder becomes a reference panel while the main stage changes every scene (Board layout); the ladder enlarges for the slider (6) and shrinks to a thumbnail for the full-width working (11, 12).
- Hand tags and a pen mark in role colours in every teaching scene (1 to 13).
- Memory aid as a framed card; key notes cut to five short bullets (about 322 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The final frame is unchanged (m3-v13 opens on it).

New plate request: `y11c-cuso4-beaker-silver-v1.png` (edit of the delivered nail plate), with a written fallback.

Counts: 6,193 characters (Revision 1: 6,096); about 542 s to about 552 s.
