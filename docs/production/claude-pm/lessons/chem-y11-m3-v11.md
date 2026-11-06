# Year 11 Chemistry M3 V11: Galvanic cells. Why does a galvanic cell need two half-cells and an ion path? (design)

Status: Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,258 characters, 19 scenes, about 560 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eleventh Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 65, between `chem-y11-m3-v10` (half-equations) and `chem-y11-m3-v12` (standard reduction potentials). Templates: `chem-y11-m3-v07.md` to `v10.md` (same designer; series conventions), `chem-m8-p02.md` (practical layout: method, fair test, safety strip, results), `bio-y11-fa1-v05.md` (aligned plate sets), `phys-y11-fa1-v01.md` (structure). Refers back to `chem-y11-m3-v10.md` (half-equations), `chem-y11-m3-v09.md` (OIL RIG), `chem-y11-m3-v07.md` (activity series, zinc in copper sulfate) and Stage 5 circuits (current as moving charge; voltmeters) instead of re-teaching them. Year 12 designs checked (5 November): no Year 12 design or explainer component covers galvanic cells, salt bridges or electrodes (the 2017 Year 12 course does not); `public/assets/physics/phys-y11-digital-multimeter-v1.png` (blank display) is reused as the voltmeter, matching Year 11 Physics. No starter pack exists; the pack work is done here. Route entry: `chem-y11-m3-v11` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Build electrodes, electron and ion paths; record cell voltage and compare relative half-cell potentials with a reference. Do not claim an absolute isolated half-cell potential."; next handoff: "How do standard reduction potentials predict a redox reaction?"; practical: "Galvanic-cell construction and potential comparison"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson09.sa.html` (SHA256 `1e73dd6ac283ad894b2044d5afcd6926c071b9c9364e3f98e240e50aa44c1f92`, recomputed, matches the route), sections `l09-what-is-a-galvanic-cell-title`, `l09-standard-reduction-potentials-and-cell-poten-title` (only its reference-electrode idea here; E° and E°cell are m3-v12's) and `l09-lithium-ion-batteries-galvanic-cells-in-your-title` (read; extension, not used), with the components card, changes-during-operation card, misconceptions, drill and the Volta revisit. Used: "When zinc metal touches copper sulfate solution directly, the reaction occurs right at the zinc surface and much of the released energy is simply dissipated (mostly as heat)"; "the electrons ... must travel through the wire, and that moving charge is an electric current"; "Remove any one and the cell stops producing current"; "Without it, charge builds up: the anode half-cell becomes increasingly positive ... the cathode half-cell becomes increasingly negative"; KNO₃ salt bridge with "NO₃⁻ ions move into the anode half-cell and K⁺ ions move into the cathode half-cell"; "AN OX / RED CAT"; "the anode is the negative terminal"; the changes card (anode mass down, cathode mass up, [Cu²⁺] down); misconceptions 1 to 3 (electrons through the salt bridge; anode positive; salt-bridge ions backwards); "Common Error: Students often think a galvanic cell creates electrons"; "relative to the standard hydrogen electrode (SHE = 0.00 V)". Not used: E° values and E°cell (m3-v12), lithium-ion batteries (site extension, "not assessed"), Volta's pile (a revisit; not needed). Site corrections file checked: no logged item touches lesson 9.

Owner rules applied: as `chem-y11-m3-v07.md` (one learner question; no people, hands or faces: electrodes, leads and the meter are placed by code; apparatus as painted plates; wires, leads, electrons, ions and ladders coded; one 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ2-05`: "conduct investigations to measure and compare the reduction potential of galvanic half-cells"
- `C3-IQ2-06`: "construct relevant half-equations and balanced overall equations to represent a range of redox reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v10's final frame. Teaches: a wire alone gives no reading (the surprise); half-cell and electrode named; why charge build-up stops the flow; the salt bridge (filter paper soaked in potassium nitrate) restores it, with the ion movements; why potassium nitrate; electrons never cross the bridge; why the reaction must be split (direct contact wastes the energy as heat; a split forces a current through the wire); galvanic cell defined; anode and cathode, their signs, electron direction; the changes as the cell runs; the practical (copper half-cell paired with magnesium, zinc and iron half-cells; fair test; illustrative readings); ranking by voltage matches the activity series; only differences can be measured, so a reference is chosen (copper here; hydrogen for the standard table); safety. Half-equations at each electrode reuse m3-v10 (`C3-IQ2-06`). Recalls without re-teaching: half-equations (m3-v10), OIL RIG (m3-v09), the activity series and zinc in copper sulfate (m3-v07), current and voltmeters (Stage 5). Not taught: E° values, E°cell and spontaneity predictions (m3-v12, the handoff), inert electrodes (m3-v12), lithium-ion cells, electrolysis.

## Decisions

- **Learner question (route wording kept).** "Why does a galvanic cell need two half-cells and an ion path?" The answer, in order: with a wire alone, charge piles up in each beaker and stops the flow almost at once (1, 3); an ion path lets ions move so both solutions stay neutral (4, 5); separating the halves is what forces electrons through the wire, where they can do work (6); the electrodes are named by their half-reactions (7); comparing half-cells against one reference ranks them (10 to 12).
- **Opening frame (equals m3-v10's final frame).** Two half-cell plates with a gap, half-equations above them, a black wire with "e⁻ ?", a grey dashed "?" in the gap, and the Next chip. Scene 1 clears the Next chip and inserts the meter into the wire.
- **The surprise (route start: concrete case).** The meter reads about zero with the wire alone (shown as "about 0 V", tagged illustrative: an open circuit can give a drifting reading near zero); the salt bridge makes it read 1.05 V. Teaching both readings shows the need for the ion path by observation before the explanation. Revision 2 (brief 183): the learner conclusion is that no current can keep flowing without an ion path; the voltmeter measures the push and draws almost no current, so its reading is never presented as a current.
- **Salt bridge (school form).** A strip of filter paper soaked in potassium nitrate solution (common in NSW school practicals; the U-tube is named on a grey tag, as the site). Why KNO₃: its ions do not react with the electrodes or the solutions and form no precipitate (all nitrates and potassium salts are soluble; a chloride bridge would precipitate silver ions in a silver half-cell: author note c).
- **Charge build-up in plain words (site components card).** "The positive side would pull electrons back, and the negative side would push them away" is the Year 11 account of the opposing potential. Science check to confirm the wording.
- **Galvanic cell defined at the point it is needed (6).** "A cell that makes electricity from a spontaneous redox reaction this way". "Spontaneous" is glossed as "happens by itself" on screen; m3-v12 defines it fully with E°cell.
- **Anode and cathode (site mnemonic "AN OX / RED CAT").** Spoken "an ox, red cat". Signs: anode negative, cathode positive in a galvanic cell. Electrolytic cells are not mentioned (not in this course's Module 3; avoids the site's misconception 2 by never setting up the confusion).
- **Practical (route: "Galvanic-cell construction and potential comparison"; `C3-IQ2-05`).** Keep the copper half-cell as the common partner; pair with magnesium, zinc and iron half-cells (school-safe metals and sulfate solutions; lead and silver avoided). Fair test: same concentration and volume, same temperature, electrodes sanded clean, fresh salt bridge each pair, copper on the meter's positive terminal. **Illustrative class readings** (tagged on screen as illustrative, author note d): Mg 1.80 V, Zn 1.05 V, Fe 0.65 V, each below the standard difference (2.70, 1.10, 0.78 V) because conditions are not standard and magnesium's oxide film lowers its reading. m3-v12 compares them with the standard values.
- **Relative, never absolute (route stop).** Scene 12: a voltmeter needs two connections, so only differences are measured; a reference is called zero. Analogy: heights from sea level (assumptions checked in "Memory aid check"). Our ladder uses copper as zero; the handoff names the hydrogen half-cell as the standard reference.
- **Prediction (3 s, scene 9).** "Swap zinc for magnesium: up or down?" Answer: up (magnesium is higher in the series, m3-v07).
- **Safety (practical).** Safety glasses; copper(II) sulfate is harmful if swallowed and toxic to aquatic life, so solutions are collected for disposal as the teacher directs, not poured down the sink; wash hands at the end. Science check to confirm against current NSW school chemical-safety guidance; no other rules invented.
- **Attempts (original wording, HSC style).** A1: magnesium and copper cell with a KNO₃ salt bridge: anode, electron direction, nitrate direction (3 marks). Crossed: "electrons flow through the salt bridge". A2: data analysis: P 0.45 V, Q 1.30 V, R 0.90 V against copper (copper positive each time): rank Q > R > P and explain why P's half-cell potential cannot be reported alone (3 marks). Crossed: "P > R > Q (smallest reading = most reactive)".
- **Mistake scene:** none separate. "Electrons flow through the salt bridge" (5, A1 crossed; site misconception 1); "a galvanic cell creates electrons" (6, tag); "the anode is positive" (7, crossed chip); "the cathode solution gets more concentrated" (8, tag); "a half-cell has its own measurable voltage" (12, crossed chip); A2 crossed.
- **Handoff (route next: `chem-y11-m3-v12`, "How do standard reduction potentials predict a redox reaction?").** Scene 18: chemists measured half-cells against one standard reference, the hydrogen half-cell, under standard conditions; the results are on the data sheet. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. `l09-changes-during-cell-operation-title`: "Cell voltage: decreases over time as concentrations approach equilibrium. When E°cell ≈ 0, the cell is flat." E°cell is a fixed standard value; it is the actual cell voltage (Ecell) that falls to zero. Suggest "When the cell voltage reaches about 0 V, the cell is flat."
  2. `l09-standard-reduction-potentials-...` table: Mg²⁺/Mg −2.37 V and Al³⁺/Al −1.66 V; the HSC data sheet gives −2.36 V and −1.68 V, and Au³⁺/Au (+1.50 V) is not on the data sheet. Drill Q9 then gives +2.24 V for Mg/Pb (data sheet: −0.13 − (−2.36) = +2.23 V). Suggest using the data-sheet values throughout lessons 9 and 10 (m3-v12 uses them).
  3. `l09-components-...`: "The salt bridge (typically KNO₃ or KCl in agar gel)". KCl would precipitate silver chloride in any silver half-cell; suggest "(typically KNO₃; KCl only where no Ag⁺ or Pb²⁺ is present)". Minor.
  - Checked and correct: the components card, electron and ion directions, the AN OX / RED CAT pairing, the Zn/Cu E°cell +1.10 V, the Mg/Pb half-equations.
- **Cause chain taught, in order:** (1) a wire alone lets a few electrons move, which leaves one solution positive and the other negative (3); (2) that charge pulls electrons back and pushes them away, so the flow stops (3); (3) a salt bridge lets ions move in to cancel the charge, so the flow continues (4); (4) unreactive ions keep the bridge from interfering (5); (5) with the halves apart, electrons can only reach the copper ions through the wire, which makes a usable current (6); (6) electrons leave where oxidation happens, so the anode is negative (7); (7) a bigger difference in tendency to lose electrons gives a bigger voltage, so voltages rank metals (11); (8) a meter compares two half-cells, so all half-cell values are relative to a chosen zero (12).
- **Entry knowledge:** m3-v10 (half-equations), m3-v09 (OIL RIG), m3-v07 (activity series), Stage 5 electricity (current as moving charge, a voltmeter measures voltage).
- **Learner-visible vocabulary (plain meaning at first use):** voltmeter (recalled: measures voltage, the push on electrons, 1); half-cell (a metal standing in a solution of its own ions, 2); electrode (the solid that carries electrons in or out, 2); salt bridge (a path that lets ions, not electrons, move between the half-cells, 4); galvanic cell (makes electricity from a redox reaction that happens by itself, 6); anode (where oxidation happens, 7); cathode (where reduction happens, 7); reference (the half-cell called zero, 12).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **cell rig** (scenes 1 to 13: the aligned galvanic plates; coded black wire and red and black meter leads; the meter's display shows coded digits "0.00 V", "1.05 V" and so on, counting up over about 0.6 s when a reading changes); **electron stream** (orange dots along the wire, speed showing current; stopped when the reading is zero); **charge meters** (3: a small "+" or "−" badge over each solution that swells as charge builds; a red "stop" bar crosses the wire); **ion stream** (4, 5: violet NO₃⁻ dots move along the bridge toward the zinc beaker, grey K⁺ dots toward the copper beaker; amber Zn²⁺ dots appear at the zinc strip, blue Cu²⁺ dots vanish at the copper strip); **direct-contact lens** (6: m3-v07's zinc-surface lens with a warm shimmer); **globe** (6: a coded small globe glyph in the wire that lights); **relative ladder** (12: a vertical scale with copper at 0.00, the other metals placed below by their readings, with a "sea level" wave glyph on the zero line); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m3-v07 to v10):** oxidation and the anode teal; reduction and the cathode violet; electrons orange (wire only); anions (NO₃⁻) violet dots; cations (K⁺) grey dots; zinc ions amber; copper ions blue; meter digits ink on the display; illustrative readings tagged grey; crossed items red strike.
- **Board layout (Revision 2):** Revision 1 kept the cell rig on one board for scenes 1 to 8 (about 210 s). Revision 2 stages, each under about 62 s: the rig with the meter (1); the rig enlarged with two electrode lenses (2); the charge counters on the two solutions, then the bridge lowering into the same stage (3, 4, about 62 s with the counts changing throughout); the bridge lens at full width (5); the split screen with the zinc beaker lens and the lamp circuit (6); the electrode cards and the AN OX card (7); the lamp circuit with the used plates (8); the half-cell swap (9, 10); the sorted table and series strip (11); the relative ladder at full width (12); the safety strip (13); question cards (14 to 17); the two ladders (18).
- **Colour roles (Revision 2, fixed for the whole video):** oxidation, the anode and its labels teal; reduction, the cathode and its labels violet; electrons orange (wire only); anions (NO₃⁻) violet dots; cations (K⁺) grey dots; zinc ions amber; copper ions blue; net-charge readouts red for + and blue for −, ink at 0; meter digits ink on the display; illustrative readings and method or safety tags grey; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark.
- **Type sizes (Revision 2, 1080p):** the current half-equation or label at least 44 px (48 px); meter digits and the net-charge and electron counters about 52 px; table rows and ladder tiles 40 px; supporting lines 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (illustrative and safety tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the charge counters (scenes 3 and 4).** A live readout on the core idea (an ion path keeps both solutions neutral, so charge can keep moving): each solution carries a net-charge readout (52 px) and the wire an electron counter. Without the bridge, each zinc ion that forms adds +2 to the left readout and each copper ion removed adds −2 to the right, while the electron counter climbs to 6 and then freezes as the readouts reach +6 and −6. As the bridge lowers, nitrate and potassium ions enter, both readouts fall back to 0 and stay there, and the electron counter climbs again without stopping. The counts are a model (author note a).
- **Measuring against running (Revision 2, brief 183).** With only the voltmeter connected, the electron stream is a slow trickle (grey tag "voltmeter: measures the push, draws almost no current"). A full stream appears only when the lamp is in the circuit (6, 8). Visible electrode and colour changes are shown only with the lamp running over a long time (8).

Author notes (not learner copy):
(a) The meter (Revision 2): a digital multimeter on its DC volts range has a very high resistance and draws a tiny current, so with a bridge it reads close to the open-circuit cell voltage; it measures voltage, not current. With no salt bridge the circuit is open and the reading sits near zero but may drift; the design shows "about 0 V" tagged illustrative and does not claim an exact 0.00 V. The robust conclusion, and the learner's, is that no significant current can keep flowing without an ion path. The charge counters (3, 4) are a model of why sustained flow stops. The exact no-bridge demonstration has not been checked; root may pin a checked reading or footage, otherwise the illustrative tag stays.
(b) Typical school solutions: 0.5 to 1 mol L⁻¹ metal sulfates (or nitrates), about 50 mL in 100 mL beakers; concentration not stated in learner copy beyond "same concentration".
(c) Potassium nitrate bridge: K⁺ and NO₃⁻ do not react with Zn, Cu, Mg, Fe or their ions and form no precipitate. Some schools use sodium nitrate or potassium chloride; chloride is avoided with silver or lead half-cells.
(d) Illustrative readings (not measured data; tagged): Mg/Cu 1.80 V, Zn/Cu 1.05 V, Fe/Cu 0.65 V. Standard differences (data sheet): 2.70, 1.10, 0.78 V. Magnesium readings in school cells commonly fall well short (oxide film, hydrogen evolution at the magnesium, non-standard concentrations); iron(II) sulfate solution oxidises in air (use fresh). The ranking, not the exact values, is the result. Codex looks for a citable school dataset; if found, use it unchanged.
(e) Signs: "copper connected to the positive terminal" means the red lead on copper and a positive reading.
(f) Energy as heat in direct contact: the Zn + Cu²⁺ reaction is exothermic; the beaker warms slightly (site).
(g) Pronunciations: "an ox, red cat"; "one point oh five"; "zero point six five".

Main question: *Why does a galvanic cell need two half-cells and an ion path?*
Entry knowledge: m3-v07, m3-v09, m3-v10, Stage 5 electricity.
Stops after: the cell built and explained (electrodes, wire, salt bridge, ion and electron paths); anode, cathode and signs; changes as it runs; half-cells compared against copper with a fair method; voltages relative to a reference, never absolute. No E° values or E°cell calculations.
Handoff: chem-y11-m3-v12, standard reduction potentials.

## Opening frame and final frame

- **Opening frame (equals m3-v10's final frame):** two half-cell plates side by side at one scale with a gap: left `y11c-halfcell-zn-v1.png` (tag "ZnSO₄(aq)"), right `y11c-halfcell-cu-v1.png` (tag "CuSO₄(aq)"); above the left "Zn(s) → Zn²⁺(aq) + 2e⁻" (teal), above the right "Cu²⁺(aq) + 2e⁻ → Cu(s)" (violet); a coded black wire arcing from the top of the zinc strip to the top of the copper strip with an amber "e⁻ ?"; a grey dashed "?" in the gap; the chip "Next: Why does a galvanic cell need two half-cells and an ion path?".
- **Final frame (m3-v12 opens on it):** left half of the board, the relative ladder titled "relative to copper (V)": a vertical scale with ticks at 0.00, −0.50, −1.00, −1.50, −2.00; tiles "Cu 0.00" (on a zero line with a small wave glyph), "Fe −0.65", "Zn −1.05", "Mg −1.80", teal outlines, grey tag "our class readings (illustrative)"; right half, an empty vertical ladder titled "E° (V), relative to hydrogen", ticks from −3.00 to +1.00, a dashed teal line at 0.00 labelled "H₂", and four empty slots each marked "?" with the labels "Mg", "Zn", "Fe", "Cu" beside them; top right, a coded ruled card glyph titled "Standard reduction potentials (data sheet)"; the chip "Next: How do standard reduction potentials predict a redox reaction?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: the wire alone
> Here's the setup. Zinc in zinc sulfate, copper in copper sulfate, and a wire joining the two metals. Let's put a voltmeter in the wire, to measure the push on the electrons. It reads about **zero**. No current can keep flowing. Zinc still loses electrons readily, and copper ions still gain them readily. So why **nothing**?

Visual: (stage: the rig with the meter; about 23 s) opens on m3-v10's final frame (the painted half-cells fill the lower two thirds); the Next chip clears. On "a voltmeter in the wire" `phys-y11-digital-multimeter-v1.png` slides in centred above the gap; the wire splits into a red lead (to copper) and a black lead (to zinc). On "zero" the display shows "about 0 V" (grey tag "illustrative: an open circuit reads near zero"); the "e⁻ ?" on the wire turns grey and still; ink hand tag "no steady current". On "Zinc still loses" the zinc half-equation pulses (teal hand tag "still wants to"); on "copper ions still gain" the copper half-equation pulses. On "nothing" the grey dashed "?" in the gap pulses amber and a pen ring circles it.

### 2. half-cells and electrodes
> First, some names. Each beaker is a half-cell, a metal standing in a solution of its own ions. The metal strip is the electrode, the solid that carries electrons in or out. Each half-cell runs one half-equation. Zinc loses electrons on the left, and copper ions gain them on the **right**.

Visual: (stage change: the rig enlarged with two electrode lenses; about 21 s) the meter shrinks to the top; the beakers enlarge to fill the lower frame. Gloss chips "half-cell: a metal in a solution of its own ions", "electrode: the solid that carries electrons in or out". On "Each beaker" a teal outline traces the left beaker and a violet outline the right; on "electrode" both strips glow and a small lens opens on each strip's surface (left: a Zn atom leaving as Zn²⁺; right: a Cu²⁺ landing as Cu). On "right" each half-equation draws a pen arrow to its strip (teal hand tag "loses e⁻ here", violet "gains e⁻ here").

### 3. why the flow stops
> Imagine a few electrons did leave the zinc through the wire. Each zinc atom that loses electrons adds a positive zinc ion to the left beaker, so that solution becomes positively charged. On the right, copper ions are removed, leaving sulfate ions behind, so that solution becomes negatively **charged**. The positive side pulls electrons back, and the negative side pushes them away. Almost at once, the flow **stops**.

Visual: (stage change: the charge counters; about 31 s) the lenses close; each solution gets a net-charge readout (52 px, "0") and the wire an electron counter ("e⁻ moved 0"). A few orange electrons start along the wire. Amber Zn²⁺ dots appear at the zinc strip; on "positively charged" the left readout ticks "+2, +4, +6" (red) and a "+" badge swells. Blue Cu²⁺ dots vanish at the copper strip, grey SO₄²⁻ dots remain; on "charged" the right readout ticks "−2, −4, −6" (blue) and a "−" badge swells. On "pulls electrons back" small amber arrows point back along the wire (red hand tag "pulled back", blue "pushed away"); on "stops" the electron counter freezes at "6", the electrons stop and a red bar crosses the wire (ink hand tag "no steady flow"). The meter stays "about 0 V".

### 4. the salt bridge
> The fix is a path for ions. A strip of filter paper, soaked in potassium nitrate solution, dips into both beakers. This is a salt bridge. Now the reading jumps to just over one **volt**. Negative nitrate ions move into the zinc beaker to balance the new zinc ions, and positive potassium ions move into the copper beaker to replace the copper ions. Both solutions stay neutral, so a current can keep **flowing**.

Visual: (same stage, the bridge arrives; about 30 s) on "filter paper" `y11c-salt-bridge-paper-v1.png` (delivered by brief 183; aligned) lowers into place across the gap; grey tag "or a U-tube of salt solution". Gloss chip "salt bridge: lets ions, not electrons, move between the half-cells". On "volt" the display counts to "1.05 V" (grey tag "voltmeter: measures the push, draws almost no current") and the red bar clears; a slow trickle of electrons moves along the wire. On "nitrate ions" violet NO₃⁻ dots move along the bridge into the left beaker and the left readout falls "+6 → 0"; on "potassium ions" grey K⁺ dots move into the right beaker and the right readout rises "−6 → 0". On "flowing" both readouts hold at 0 while the electron counter climbs past 6 and keeps going (green hand tag "both neutral, so it keeps going"; a pen ring around the two zeros).

### 5. why potassium nitrate
> Why potassium nitrate? Its ions carry charge, but they don't react with anything in either half-cell, and they don't form a precipitate with the metal ions. And notice what never crosses the bridge. Electrons. Electrons move only through the wire, and ions move only through the solutions and the **bridge**.

Visual: (stage change: the bridge lens at full width; about 23 s) a lens opens on the bridge and both strips: K⁺ and NO₃⁻ dots pass the Zn and Cu strips with no change (grey hand tag "unreactive, no precipitate"). On "Electrons." a chip "electrons flow through the salt bridge" fades in and is crossed in red (red hand tag "electrons never enter the bridge"). On "bridge" two labels write (44 px): orange "e⁻: wire only" along the wire, violet and grey "ions: solutions and bridge" along the bridge, each traced by a pen arrow.

### 6. why split the reaction?
> So why bother with two separate half-cells? If zinc touches copper ions directly, the electrons jump straight across at the surface, and the energy just warms the solution. Split the reaction in two, and the only way for electrons to get from zinc to copper ions is through the wire. Moving electrons in a wire are an electric current, and a current can do work, like lighting a small **globe**. A cell that makes electricity this way, from a redox reaction that happens by itself, is a galvanic **cell**.

Visual: (stage change: the split screen; about 37 s) left half: `y11c-cuso4-beaker-zinc-after-v1.png` large with m3-v07's surface lens (electrons hop from Zn to Cu²⁺; a warm amber shimmer; amber hand tag "direct: energy lost as heat"); right half: the cell rig. On "only way" the wire glows (orange hand tag "wire only"). On "globe" the meter shifts aside, `y11c-filament-lamp-lit-v1.png` (existing plate, scaled small) joins the wire and lights, and a full electron stream runs (grey tag "a load draws a real current"). On "cell" gloss chip "galvanic cell: makes electricity from a redox reaction that happens by itself"; grey tag "the cell doesn't create electrons; they come from the zinc"; a pen arrow from the lamp to the zinc strip.

### 7. anode and cathode
> The two electrodes have names. Oxidation happens at the anode, here the zinc. Reduction happens at the cathode, here the copper. A handy pair is an ox, red cat. Anode, oxidation. Reduction, cathode. Electrons are pushed out of the zinc, so in a galvanic cell the anode is the negative terminal, and the cathode is **positive**. Electrons always flow through the wire from the anode to the **cathode**.

Visual: the globe fades; the meter returns. Labels write: "anode (−): oxidation" under the zinc (teal), "cathode (+): reduction" under the copper (violet). On "an ox, red cat" the handwriting line writes "AN OX, RED CAT" with "AN"/"OX" teal and "RED"/"CAT" violet. On "positive" "−" and "+" signs at the strip tops; a chip "the anode is positive" fades in and is crossed in red (red hand tag "electrons leave the anode: −"). On "cathode" an orange arrow "e⁻: anode → cathode" runs along the wire with a pen ring on its arrowhead. The AN OX line sits in a framed card at the top right from here on.

### 8. what changes as it runs
> Run the cell through the globe for a long time, and you can see the half-equations at work. The zinc electrode slowly wears away, as zinc atoms become ions. The copper electrode gains a fresh coating of copper, and the blue colour fades, as copper ions are used **up**.

Visual: (stage change: the lamp circuit running; about 18 s) the meter is replaced by the lit lamp plate; on "through the globe" a coded clock glyph spins several times (grey tag "hours with a load; a voltmeter alone draws too little current to show this"); the zinc plate cross-fades to `y11c-halfcell-zn-used-v1.png` (delivered; thinner, pitted strip) and the copper plate to `y11c-halfcell-cu-used-v1.png` (delivered; thicker, rough fresh copper, paler blue). Hand tags: teal "zinc: mass down", violet "copper: mass up"; on "up" "Cu²⁺ concentration down" (grey tag "not up: ions leave the solution"); a pen ring around the paler blue.

### 9. prediction: swap in magnesium (countdown, 3 seconds)
> Quick prediction. Swap the zinc half-cell for a magnesium half-cell. Will the voltage go up, or **down**?

Visual: plates reset to the fresh pair. On "Swap" the zinc half-cell slides out left and `y11c-halfcell-mg-v1.png` (new) waits beside it; the display shows "?.?? V". On "down" the 3 s `Countdown` ring runs over the display. The meter is back in the circuit (the lamp clears).

### 10. comparing half-cells: the practical
> Up. Here's how you can investigate it. Keep the copper half-cell, and pair it with magnesium, zinc and iron half-cells in turn. Use the same solution concentration and temperature, sand each electrode clean, and use a fresh salt bridge each time. With copper on the positive terminal, a class might read about one point eight volts for magnesium, one point oh five for zinc, and zero point six five for **iron**.

Visual: the magnesium half-cell slides in; the display counts to "1.80 V". A method card writes at the right: "keep: Cu half-cell; same concentration, volume, temperature; electrodes sanded; fresh salt bridge; Cu on + terminal". A results table builds: "Mg–Cu 1.80 V"; on "one point oh five" `y11c-halfcell-zn-v1.png` returns and "Zn–Cu 1.05 V"; on "iron" `y11c-halfcell-fe-v1.png` (new) and "Fe–Cu 0.65 V". Grey tag on the table "illustrative class readings". Navy hand tag "Cu stays" on the copper half-cell; a pen ring around "1.80 V" as the display counts (live readout).

### 11. what the readings mean
> The bigger the voltage, the bigger the difference between how readily the two metals lose electrons. In every pair, copper was the positive terminal, so copper ions were reduced, and the other metal was oxidised. Rank the metals by voltage, and you get magnesium, zinc, iron, then copper, the same order as the activity **series**.

Visual: the rig shrinks to the left. The results table sorts by voltage; on "copper was the positive terminal" a "+" badge by Cu in each row; on "the other metal was oxidised" teal "oxidised" tags on Mg, Zn, Fe. On "series" the ranking "Mg > Zn > Fe > Cu" writes (48 px) in a dark-ink box with a green tick and m3-v07's series strip slides in beside it with matching tiles ticked (ink hand tag "same order"; a pen line joins each row to its tile).

### 12. only differences can be measured
> But notice what you actually measured. A voltmeter needs two connections, so it can only compare two half-cells. You can never measure one half-cell on its own. So chemists choose one half-cell as a reference, and call it zero. It's like measuring heights from sea level. Sea level isn't the bottom of anything, it's just an agreed **zero**. With copper as our zero, iron sits at minus zero point six five, zinc at minus one point oh five, and magnesium at minus one point **eight**.

Visual: the meter with its two leads enlarges; on "two connections" each lead tip glows. On "one half-cell on its own" a single half-cell with one lead and a "?" display; a chip "a half-cell has its own measurable voltage" fades in and is crossed in red (red hand tag "one lead, no reading"). On "sea level" a small wave glyph and a hill outline with a height arrow from the waves. On "zero" the relative ladder draws at full height (stage change): "Cu 0.00" on the zero line (wave glyph), then "Fe −0.65", "Zn −1.05", on "eight" "Mg −1.80". Title "relative to copper (V)"; ink hand tag "agreed zero" on the zero line.

### 13. safety
> If you do this practical, wear safety glasses. Copper sulfate is harmful if swallowed, and it harms waterways, so collect every solution for disposal as your teacher directs, not down the sink. Wash your hands when you **finish**.

Visual: the safety strip writes along the top (`chem-m8-p02` style): "safety glasses; copper(II) sulfate: harmful if swallowed, toxic to aquatic life; collect solutions for disposal as directed, not down the sink; wash hands" (36 px); `m5x-safety-glasses-v1.png` large at the left beside the rig thumbnail (grey hand tag "collect, don't pour" with a pen arrow to the beakers). On "finish" the strip's last item "wash hands" ticks.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A galvanic cell has a magnesium electrode in magnesium nitrate solution, and a copper electrode in copper nitrate solution, joined by a wire and a potassium nitrate salt bridge. Identify the anode, give the direction of electron flow, and state which way the nitrate ions move. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A galvanic cell is made from a magnesium electrode in 1 mol L⁻¹ Mg(NO₃)₂(aq) and a copper electrode in 1 mol L⁻¹ Cu(NO₃)₂(aq). The electrodes are joined by a wire and the solutions by a salt bridge containing KNO₃(aq). (a) Identify the anode, with a reason. (b) State the direction of electron flow. (c) State the direction in which nitrate ions move in the salt bridge, with a reason. (3 marks)" A small coded diagram of two labelled beakers, wire and bridge (no arrows). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the rig hides).

### 15. feedback 1 (brief)
> Magnesium is the anode. It loses electrons more readily, so it's oxidised there. Electrons flow through the wire, from magnesium to copper. Nitrate ions move through the salt bridge into the magnesium half-cell, to balance the new magnesium ions. Saying electrons flow through the salt bridge is the **slip**. Only ions move **there**.

Visual: card shrinks to the top. The diagram fills: "anode (−): Mg → Mg²⁺ + 2e⁻" (teal), "cathode (+): Cu²⁺ + 2e⁻ → Cu" (violet); orange arrow "e⁻" along the wire Mg → Cu; violet NO₃⁻ dots moving toward the Mg beaker. The answer "anode: Mg. e⁻: Mg → Cu in the wire. NO₃⁻ → Mg half-cell" in a dark-ink box with a green tick. On "slip" a chip "e⁻ through the salt bridge" fades in; on "there" it is crossed in red (red hand tag "ions only"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A student pairs three metals, P, Q and R, with a copper half-cell. Copper is the positive terminal each time. The readings are zero point four five volts for P, one point three volts for Q, and zero point nine volts for R. Rank the metals by how readily they lose electrons, and explain why the student can't report the potential of P's half-cell on its own. Pause here to answer.

Visual: `QuestionCard`: "A student made three galvanic cells, each from a copper half-cell and a half-cell of metal P, Q or R, under the same conditions. In every cell the copper electrode was the positive terminal. Readings: P–Cu 0.45 V; Q–Cu 1.30 V; R–Cu 0.90 V. (a) List P, Q and R from the most to the least readily oxidised. (b) Explain why the student cannot report a value for the potential of the P half-cell on its own. (3 marks)" A small results table repeats the data. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 17. feedback 2 (brief)
> Q, then R, then P. Every metal was oxidised against copper, and a bigger voltage means a bigger difference from copper, so Q loses electrons most readily. A voltmeter only measures the difference between two half-cells, so P's value only means something against a reference. Ranking P first, because its reading is smallest, gets the order **backwards**.

Visual: card shrinks. A mini relative ladder: "Cu 0.00", "P −0.45", "R −0.90", "Q −1.30"; ranking "Q > R > P"; tag "two connections: differences only". The answer "Q > R > P" sits in a dark-ink box with a green tick. On "backwards" a chip "P > R > Q" fades in and is crossed in red (red hand tag "smallest reading = closest to copper"). Hold about 1 second.

### 18. conclusion and handoff
> So a galvanic cell needs two half-cells to force electrons through a wire, and a salt bridge to keep both solutions neutral. And half-cells can only be compared with each other. Chemists did that carefully, against one standard reference, the hydrogen half-cell, under standard conditions, and their results are on your data sheet. How do standard reduction potentials predict a redox **reaction**?

Visual: the rig shrinks and fades left; the relative ladder (from 12) moves to the left half. On "against one standard reference" the empty ladder draws on the right: title "E° (V), relative to hydrogen", ticks −3.00 to +1.00, on "the hydrogen half-cell" a dashed teal line "H₂ 0.00". Four empty slots "?" with labels "Mg", "Zn", "Fe", "Cu" appear. On "data sheet" the coded ruled card "Standard reduction potentials (data sheet)" slides in at the top right. On "reaction" the chip "Next: How do standard reduction potentials predict a redox reaction?" writes. Hold about 2 seconds. This is the final frame (m3-v12 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Galvanic cell: a spontaneous redox reaction split into two half-cells.
2. Electrons go through the wire; ions go through the salt bridge.
3. Anode: oxidation, negative. Cathode: reduction, positive.
4. Salt bridge: anions to the anode side, cations to the cathode side. No bridge, no steady current.
5. A voltmeter compares two half-cells, so potentials are relative to a reference.

Memory aid (framed card, on the notes screen): *AN OX, RED CAT: anode oxidation, reduction cathode.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why the wire alone fails (3); why the bridge fixes it (4); why potassium nitrate (5); why the halves are separated (6); why the anode is negative (7); why voltages rank metals (11); why potentials are relative (12).
- **Misconceptions addressed:** electrons through the salt bridge (5, A1 crossed); the cell creates electrons (6, tag); the anode is positive (7, crossed); cathode solution gets more concentrated (8, tag); a single half-cell can be measured (12, crossed); smallest reading means most reactive (A2 crossed).
- **One idea at a time:** the ion path (1 to 5), the reason for two half-cells (6), the names (7), the running cell (8), comparing half-cells (9 to 12), safety (13).
- **Video makes it easier:** the meter reads 0.00 then 1.05 as the bridge lowers (1, 4); "+" and "−" badges swell and shrink with the ions (3, 4); electrons stay on the wire while ions move in the bridge (5); the direct-contact lens beside the cell shows where the energy goes (6); the half-cells swap and the meter reading changes (9, 10); the ladder places each metal below copper by its reading (12).
- **Response opportunity:** one 3 s prediction (9); two unseen HSC-style tasks with all data on the card, 10 s each, nothing answer-bearing. Feedback about 25 s and 26 s.
- **Avoided double teaching:** half-equations (m3-v10), OIL RIG (m3-v09), the activity series (m3-v07), current and voltmeters (Stage 5).
- **Syllabus coverage:** `C3-IQ2-05` "conduct investigations to measure and compare the reduction potential of galvanic half-cells" (9 to 13, A2); `C3-IQ2-06` "construct relevant half-equations" (2, 7, A1 feedback) "and balanced overall equations" (the Zn + Cu²⁺ equation recalled in 6).
- **Out of scope by design:** E° values and E°cell (m3-v12), inert electrodes (m3-v12), lithium-ion cells, electrolytic cells.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Magnesium is the anode: magnesium is more readily oxidised than copper (Mg → Mg²⁺ + 2e⁻) (1 mark). (b) Electrons flow through the external wire from the magnesium electrode to the copper electrode (1 mark). (c) Nitrate ions move through the salt bridge toward the magnesium half-cell, to balance the positive charge of the Mg²⁺ ions forming there (1 mark). Classic mistake (crossed): "electrons flow through the salt bridge".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) Q > R > P (1 mark): copper was the cathode in every cell, so each metal was oxidised, and a larger cell voltage shows a larger difference in tendency to be oxidised compared with copper (1 mark). (b) A voltmeter measures the potential difference between two half-cells; a single half-cell's potential can only be stated relative to a reference half-cell (1 mark). Classic mistake (crossed): "P > R > Q, because P's reading is smallest".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Wire only | about 0 V (illustrative; open circuit, may drift near zero) | 1, 3 |
| Charge counters (model) | left +2, +4, +6 then 0; right −2, −4, −6 then 0; electrons 6 then climbing (3 Zn²⁺ formed, 3 Cu²⁺ removed, 6 e⁻) | 3, 4 |
| Zn–Cu with salt bridge | 1.05 V (illustrative; standard 1.10 V) | 4, 10 |
| Mg–Cu | 1.80 V (illustrative; standard 2.70 V) | 9, 10 |
| Fe–Cu | 0.65 V (illustrative; standard 0.78 V) | 10 |
| Relative ladder (Cu = 0) | Cu 0.00, Fe −0.65, Zn −1.05, Mg −1.80 | 12, 18 |
| Half-equations | Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu; Mg → Mg²⁺ + 2e⁻ | 2, 7, 15 |
| A2 | P 0.45, Q 1.30, R 0.90 V; ladder P −0.45, R −0.90, Q −1.30; order Q > R > P | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked by script (5 November); Codex to re-check.

- Standard differences from data-sheet values: Cu (+0.34) − Zn (−0.76) = 1.10 V; Cu − Fe (−0.44) = 0.78 V; Cu − Mg (−2.36) = 2.70 V. Each illustrative reading is below its standard value and keeps the order Mg > Zn > Fe.
- Relative values: 0.00 − 0.65 = −0.65; 0.00 − 1.05 = −1.05; 0.00 − 1.80 = −1.80.
- Half-equations balanced in atoms and charge (as m3-v10).

## Memory aid check

- **"AN OX, RED CAT."** The site's mnemonic. Assumptions checked: it tells where oxidation and reduction happen, not the terminal sign (scene 7 states the galvanic signs separately: anode negative); it holds for every electrochemical cell, so it will not need unlearning. It helps a new case: A1 (magnesium anode).
- **Heights from sea level (analogy for relative potentials).** Assumptions checked: heights, like half-cell potentials, are only ever differences from an agreed zero; values below the reference are negative (Dead Sea shore, metals below copper); the zero can be changed (copper here, hydrogen in the data sheet) without changing the differences. Limit: nothing in the analogy corresponds to the direction of electron flow; it is used only for "relative to a chosen zero".
- **Considered, not used:** "electrons run, ions swim" (cute, but "swim" suggests whole-solution flow; the two labels on screen say it plainly).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,258 characters**, 19 scenes (Revision 1: 6,210). At 13.3 characters per second the speech is about 471 s; add about 10 s of settling (the electrode lenses in 2, the charge counters in 3 and 4, the bridge lens in 5, the split screen in 6, the running-cell cross-fade in 8, the half-cell swaps in 10, the ladder in 12), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold (about 58 s in all): **about 560 s** (Revision 1: about 553 s).

## Scene list and build ids

Lesson key `c-y11-m3-v11` (route chem-y11-m3-v11; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v11`.

In order (19 scene headings, all `### N.`): hook-wire-alone, half-cells, flow-stops, salt-bridge, why-kno3, why-split, anode-cathode, running-cell, prediction-magnesium, practical-compare, readings-meaning, relative-only, safety, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction-magnesium (`explain` ending in a 3 s hold), attempt-1, attempt-2 and key-notes (`hold`). Transitions: the opening frame into scene 1 by clearing the Next chip and inserting the meter; 1 to 2 camera continue (the rig enlarges; lenses open); 2 to 3 camera continue (lenses close; counters appear); 3 to 4 camera continue (the bridge lowers); 4 to 5 zoom into the bridge lens; 5 to 6 split screen; 6 to 7 camera continue (the lamp clears, the meter returns); 7 to 8 camera continue (the lamp replaces the meter); 8 to 9 camera continue (plates reset); 9 to 10 to 11 camera continue (the rig shrinks left as the table grows); 11 to 12 camera continue (the ladder replaces the table); 12 to 13 camera continue (safety strip over the top); attempts and feedback card shrink to the top; 17 to 18 board clear (the ladder returns); 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v11-learning-review.md`, `checks/c-y11-m3-v11-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 250 px; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-digital-multimeter-v1.png` (1086 × 1448, blank display): scenes 1 to 12. Codex reports the display window box in plate pixels for the coded digits, and checks the alpha edge (root decision 31, m1: check Physics plate alpha before reuse).
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scene 13.
- Delivered for m3-v07 (brief 182): `y11c-cuso4-beaker-zinc-after-v1.png`: scene 6.
- Revision 2 addition (inspected 6 November on a paper contact sheet at about 300 px): `public/assets/chemistry/y11c-filament-lamp-lit-v1.png` (1536 × 1024, a lit lamp on its holder): scenes 6 and 8, replacing the coded globe glyph.
- Delivered by brief 183 (inspected 6 November; all seven on one shared canvas at native 1671 × 941 rather than the 3200 × 1800 first requested, with up to two pixels of width difference qualified in the manifest): `y11c-halfcell-zn-v1.png`, `y11c-halfcell-cu-v1.png`, `y11c-salt-bridge-paper-v1.png`, `y11c-halfcell-mg-v1.png`, `y11c-halfcell-fe-v1.png`, `y11c-halfcell-zn-used-v1.png`, `y11c-halfcell-cu-used-v1.png`. Each beaker occupies a small part of the shared canvas, so the build scales the canvas uniformly until the beakers fill the lower two thirds of the frame.
- **Inspected, not used:** `c11-cuso4-beaker-dissolved-v1.png` and `m5x-unsaturated-beaker-v1.png` (single beakers without electrodes; the galvanic set is painted as one aligned canvas so the bridge sits correctly in both beakers); `phys-y11-battery-holder-v1.png` (not a galvanic half-cell).

Need (new plates): none in Revision 2. The Revision 1 request below is delivered (brief 183):
1. `y11c-halfcell-zn-v1.png`, 2. `y11c-halfcell-cu-v1.png`, 3. `y11c-salt-bridge-paper-v1.png`: scenes 1 to 12 and m3-v10's final frame. Essential (the cell is the subject).
4. `y11c-halfcell-mg-v1.png`, 5. `y11c-halfcell-fe-v1.png`: scenes 9, 10. Essential (the half-cell comparison is the syllabus practical).
6. `y11c-halfcell-zn-used-v1.png`, 7. `y11c-halfcell-cu-used-v1.png`: scene 8. Wanted; fallback: coded tags only ("zinc: mass down", "copper: mass up") on the fresh plates.

Coded: wire and leads, meter digits, electron and ion streams, charge badges and net-charge counters, electron counter, stop bar, electrode lenses, bridge lens, direct-contact lens, labels and signs, method card, results table, relative ladders, wave and hill glyphs, data-sheet card glyph, chips, attempt cards and diagrams, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v11)

Delivered by brief 183 (all seven plates, native 1671 × 941); no new request in Revision 2. The original brief is kept for reference.

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m3-v11.md` (m3-v10's final frame also uses plates 1 and 2). Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style (match the beaker glass of `c11-cuso4-beaker-dissolved-v1.png`), at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, wires, clips, meter, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

**One shared canvas: 3200 × 1800 px.** Two identical 250 mL beakers, each about 900 px tall, standing on the same baseline, the left beaker centred at x = 900 and the right at x = 2300, liquid filled to the same level (about two thirds). Each half-cell plate contains only its own beaker (the other slot transparent), so any left plate overlays any right plate. Each electrode is a flat metal strip about 90 px wide standing vertically near the inner edge facing the gap (left beaker: right side; right beaker: left side), its top 180 px above the rim (where the coded clip and wire attach; report the strip-top centre point in canvas pixels for each plate).
1. `y11c-halfcell-zn-v1.png`: left slot: colourless zinc sulfate solution; a clean, dull grey zinc strip.
2. `y11c-halfcell-cu-v1.png`: right slot: clear blue copper(II) sulfate solution (the blue of `c11-cuso4-beaker-dissolved-v1.png`); a clean pink-orange copper strip.
3. `y11c-salt-bridge-paper-v1.png`: a strip of white filter paper, damp and slightly translucent, folded into an inverted U spanning the gap, each end dipping about 120 px into the liquid of each beaker on the side away from the electrodes; nothing else on the canvas (the beakers are in plates 1 and 2; the paper's dipping ends must sit inside the beaker outlines when overlaid).
4. `y11c-halfcell-mg-v1.png`: left slot: colourless magnesium sulfate solution; a strip of bright silver magnesium ribbon (narrower, about 40 px) in the electrode position.
5. `y11c-halfcell-fe-v1.png`: left slot: very pale green iron(II) sulfate solution; a dull dark grey iron strip.
6. `y11c-halfcell-zn-used-v1.png`: plate 1 identical except the submerged zinc is visibly thinner, darker and pitted.
7. `y11c-halfcell-cu-used-v1.png`: plate 2 identical except the submerged copper is thicker with a rough, matt, fresh pink-brown copper coat, and the solution is a noticeably paler blue.

Plates 1, 4, 5 and 6 must overlay one another in the left slot; 2 and 7 in the right slot; 3 must sit across both. Report the overlay checks (all combinations of a left plate, a right plate and the bridge) on the paper and dark board backgrounds at about 400 px wide, and the strip-top points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m3-v11-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used"; confirm the readings are tagged illustrative wherever shown; look for a citable school dataset (author note d) and report it if found.
2. Confirm the site content used matches `module3/lesson09.sa.html` (sections named in Scope).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the syllabus quotes match `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals `chem-y11-m3-v10.md`'s "Final frame", and send this design's final frame to the m3-v12 designer.

## YouTube metadata (draft)

Title: Galvanic Cells: Why You Need Two Half-Cells and a Salt Bridge | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Zinc in one beaker, copper in another, a wire between them, and the voltmeter reads zero. Add a strip of filter paper soaked in potassium nitrate, and it jumps to over a volt. Find out why charge build-up stops the flow, what the salt bridge does, why the reaction has to be split into two half-cells, and which electrode is the anode and the cathode. Then compare magnesium, zinc and iron half-cells against copper, and see why half-cell potentials can only ever be measured relative to a reference. Includes two exam-style questions.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations to measure and compare the reduction potential of galvanic half-cells"
"construct relevant half-equations and balanced overall equations to represent a range of redox reactions"

Previous: How do half-equations combine into a balanced redox equation? Next: How do standard reduction potentials predict a redox reaction?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Illustrative readings (root, science check).** Mg 1.80, Zn 1.05, Fe 0.65 V are tagged illustrative (author note d). If Codex finds a citable school dataset, use it unchanged; m3-v12 scene 4 compares with the standard values, so any change carries there.
- **2. Charge build-up wording (science check).** "The positive side pulls electrons back, and the negative side pushes them away" (scene 3). Brief 183 accepted the build-up explanation; Revision 2 keeps it focused on sustained flow.
- **5. No-bridge reading (root, Revision 2).** Shown as "about 0 V", tagged illustrative (author note a). If a checked reading or footage is pinned, use it.
- **3. Safety (science check).** Scene 13's wording for copper(II) sulfate and disposal against current NSW school guidance.
- **4. Plates (root).** Five essential and two wanted plates on one shared canvas; the multimeter is reused from Year 11 Physics.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the "zero reading" surprise clear before the explanation; is scene 12's analogy useful), then the science check and Codex error check.
- Checker output (5 November): narration 6,210 characters; per scene (1 to 19): 296, 285, 411, 400, 304, 497, 393, 241, 101, 408, 327, 475, 226, 310, 327, 390, 350, 394, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 2 should fix; both resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,258 characters; per scene (1 to 19): 316, 285, 411, 404, 304, 497, 393, 265, 101, 408, 327, 475, 226, 310, 327, 390, 350, 394, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m3-v11-learning-review.md`, `checks/c-y11-m3-v11-science-check.md`; both list the same two):
1. Voltage against sustained current (should fix): scene 1 now says "It reads about zero. No current can keep flowing", and the display shows "about 0 V" with a grey tag "illustrative: an open circuit reads near zero" (no exact 0.00 V claim). Scene 4 ends "so a current can keep flowing". The voltmeter is labelled "measures the push, draws almost no current", and the electron stream is only a slow trickle while the voltmeter alone is connected. Author note (a), the Surprise decision, "Numbers used" and open decision 5 are updated. The charge build-up explanation (3) stays focused on sustained flow.
2. Measurement circuit against a running load (should fix): scene 8 now says "Run the cell through the globe for a long time"; the visual swaps the meter for the lit lamp plate and spins the clock several times, with a grey tag "hours with a load; a voltmeter alone draws too little current to show this". The full electron stream appears only with the lamp in the circuit (6, 8); the meter returns for the comparisons (9 onwards). A new decision, "Measuring against running", records this.

Visual upgrade (teaching logic unchanged):
- Scene 1 already opens on the painted half-cells (m3-v10's final frame); now the illustrative reading and hand tags are on it.
- Live readout: the charge counters (scenes 3 and 4): net-charge readouts climb to +6 and −6 and freeze the electron counter, then return to 0 as the bridge lowers while the electron count keeps climbing.
- Stage changes so no set-up runs past about 62 s (Board layout): Revision 1's single rig for scenes 1 to 8 (about 210 s) is split by the electrode lenses (2), the charge counters (3, 4), the bridge lens (5), the split screen with the lamp (6), the electrode cards (7) and the running circuit (8).
- The coded globe glyph is replaced by the existing painted lamp plate (6, 8).
- Hand tags and a pen mark in role colours in every teaching scene (1 to 12).
- Framed answers with a green tick: the ranking (11), feedback 1 and feedback 2. Crossed slips carry red hand tags ("electrons never enter the bridge", "electrons leave the anode: −", "one lead, no reading", "ions only", "smallest reading = closest to copper").
- AN OX line as a framed card from scene 7 and on the notes screen; key notes cut to five short bullets (about 366 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation", "Measuring against running" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged.

New plate requests: none. The brief 183 galvanic set is delivered at 1671 × 941 on one shared canvas (Assets and the asset brief now say so).

Counts: 6,258 characters (Revision 1: 6,210); about 553 s to about 560 s.
