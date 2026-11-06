# Year 11 Chemistry M3 V15: Surface area and catalysts. How do surface area and catalysts change reaction rate differently? (design)

Status: Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,153 characters, 18 scenes, about 555 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifteenth and last Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 69, between `chem-y11-m3-v14` and `chem-y11-m4-v01`; a practical and explanation video. Templates: `chem-y11-m3-v14.md` and `v13.md` (same designer, layout and colour key), `chem-y11-m2-v09.md` (plugged flask on the balance), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m3-v15` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare accessible surface with an alternative lower-activation-energy route, using controlled rate data. Stop before the thermodynamic catalyst recap in Module 4."; next handoff: "How does an energy profile distinguish endothermic from exothermic change?"; practical: "Surface-area and catalyst rate investigations"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson12.sa.html` (SHA256 `82cdc5ec95517e567e80bc4bfc8f5fa91c0e29dd3a53783da57ae8a92248e32a`, recomputed, matches the route), sections `l12-four-factors-that-affect-reaction-rate-title`, `l12-2-concentration-and-surface-area-title` and `l12-3-catalysts-homogeneous-and-heterogeneous-title`, with the energy-distribution catalyst card and the catalytic converter card. Used: the surface-area paragraph ("only the particles on the surface of the solid are available to collide ... Collision frequency at the reaction interface increases; proportion of effective collisions is unchanged") and its HSC Must-Do (surface area applies when a solid reacts); the catalyst definition and its three-part Must-Do ("alternative reaction pathway; with a lower activation energy; not consumed"); the Common Error "catalysts 'give energy to the particles'"; the distribution card ("the curve is unchanged and the Eₐ line moves left") and its Common Error (shifting the curve for a catalyst); the summary line "Temperature: shifts the curve right. Catalyst: shifts the Eₐ line left"; the heterogeneous catalyst idea (reaction on a solid surface; platinum in a catalytic converter; 2CO(g) + O₂(g) → 2CO₂(g)), used in attempt 2; worked example 1's zinc granules against powder, rebuilt as attempt 1 with new numbers. Not used: homogeneous and heterogeneous as defined terms (one grey tag only, author note e), the adsorption, surface reaction and desorption names, the cold-start explanation and 2NO → N₂ + O₂ (site notes in `chem-y11-m3-v14.md`, 2 and 3), catalysts and equilibrium, the energy-profile catalyst overlay (`chem-y11-m4-v05` owns it: route stop), the copper(II) sulfate "not a true catalyst" example (site note 1).

Owner rules applied: as `chem-y11-m3-v14.md` (one learner question; no people, hands or faces: apparatus alone, powders tipped and filtered by code; real apparatus as painted plates; graphs, lenses and distributions coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). All investigation data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 3, Rates of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ3-01`: "conduct a practical investigation, using appropriate tools (including digital technologies), to collect data, analyse and report on how the rate of a chemical reaction can be affected by a range of factors, including but not limited to:"
  - "surface area of reactant(s)"
  - "catalysts (ACSCH042)"
- `C3-IQ3-03`: "explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v14's final frame (the logging rig after the control run; chips and powder watch glasses; peroxide flask and manganese dioxide; "Same lever, or a different one?"). Teaches: surface area as the exposed area of a solid; only surface particles can be hit; the cube-cutting model (same mass, ten times the surface); logged evidence (powder against v14's control run, same 0.44 g, much faster); the collision explanation (more collisions per second, same fraction, same Eₐ); surface area matters when a solid reacts; a catalyst (manganese dioxide with hydrogen peroxide) and the logged evidence; not used up (recovered, dried, weighed, reused); an alternative route with a lower activation energy; the distribution with the Eₐ line moved left and the curve unchanged; temperature against catalyst; neither changes the amount of product; a solid catalyst works at its surface, so fine catalysts work faster; the warming flask as a limitation of the catalyst comparison; the full memory set. Not taught: energy profiles with catalysed and uncatalysed paths, and ΔH unchanged (m4-v05; route stop), equilibrium, adsorption mechanism names, enzymes.

## Decisions

- **Learner question (route wording kept).** "How do surface area and catalysts change reaction rate differently?" The answer, in order: crushing exposes more particles to be hit, so more collisions per second at the same Eₐ (1 to 4); a catalyst is not used up and gives a route with a lower Eₐ, so a larger fraction of the same collisions succeed (5 to 8); neither changes how much product forms (3, 9); the two combine in solid catalysts (10).
- **Opening frame (equals `chem-y11-m3-v14.md`'s final frame, same designer).** Left: balance with `y11c-flask-acid-plug-spent-v1.png`, laptop showing the control curve (1.00 mol L⁻¹, 20.0 °C) levelled at 0.44 g. Right upper: `y11c-chips-powder-watch-glasses-v1.png` with "1.00 g chips", "1.00 g powder", chip "crush them?". Right lower: the spent-flask plate labelled "hydrogen peroxide solution" beside `y11c-mno2-watch-glass-v1.png`, "manganese dioxide: not used up?". The amber chip "Same lever, or a different one?"; the memory line small; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Which lever does crushing push: hit often, hit hard or hit right?" Answer: hit often. It uses the memory line as a thinking tool before the evidence.
- **Cube model (scene 2).** 1 cm cube: 6 cm²; cut into 1 mm cubes: 1000 cubes × 6 mm² = 6000 mm² = 60 cm²; ten times the surface for the same mass. A model of why powder exposes more, not a prediction that the rate rises exactly ten times (real powder is finer and irregular; author note b).
- **Surface-area evidence (scene 3; illustrative data).** Same logging rig, 1.00 g, 100.0 mL of 1.00 mol L⁻¹ HCl, 20.0 °C. Chips: v14's control run (0.09 g in 30 s; 0.44 g from about 390 s, "about six and a half minutes"). Powder: 0.24 g at 10 s, 0.37 g at 20 s, 0.42 g at 30 s, 0.44 g from about 40 s. Same total 0.44 g (same mass of carbonate, acid in excess). Compared by finishing time and the steepness of the start; no first-30-s rate for the powder, because it has nearly finished inside that interval (author note b). The powder froths, so the plug matters more (spoken).
- **Where surface area applies (scene 4; site Must-Do).** Only when the reaction happens at a surface: a solid with a liquid or gas. Said in plain words; "heterogeneous" is not introduced.
- **The catalyst investigation (scenes 5, 6; illustrative data).** 25.0 mL of hydrogen peroxide solution, about 3% (0.90 mol L⁻¹), in the same plugged flask on the logging balance. Without a catalyst: no measurable mass change in 3 minutes. With 0.50 g of manganese(IV) oxide powder (spoken "manganese dioxide", the school name, with "MnO₂" on screen): mass lost 0.19 g at 30 s, 0.28 at 60, 0.32 at 90, 0.34 at 120, 0.35 at 150, 0.36 g from 180 s (all 0.0225 mol H₂O₂ gives 0.36 g O₂). Not used up: filtered, dried and weighed, 0.50 g; it works again on fresh peroxide (illustrative; real recovery loses a little on the filter paper, author note c).
- **Mechanism level (scene 7).** "A different route, through steps on the surface of the manganese dioxide, with a lower activation energy". The site's three-part Must-Do is met (alternative pathway, lower Eₐ, not consumed). The energy-profile picture of the two routes is left to m4-v05 (route stop); this video uses only the distribution.
- **Distribution (scene 8; site card).** One curve at 20 °C (unchanged); the uncatalysed Eₐ line (dashed amber) and a new catalysed Eₐ line further left (dashed teal) with a left-pointing arrow "catalyst"; the tail beyond the new line shaded, much larger. Then v14's two-temperature picture returns small beside it for the contrast. Memory line: "Temperature moves the curve. A catalyst moves the line." (the site's summary, shortened).
- **Neither changes the amount (scene 9).** Surface area: the same 0.44 g (scene 3 evidence). Catalyst: same oxygen when complete; spoken as "faster, not more". The site's ΔH and equilibrium points are left to Module 4 and Year 12.
- **Combining the two (scene 10).** A solid catalyst works at its surface, so a fine powder (or a thin coating over a large surface) works faster. One scene; it prepares attempt 2 without teaching the converter.
- **Limitation (scene 11; route "analyse").** The catalysed decomposition releases heat, so the flask warms and the reaction speeds up further. Revision 2 (brief 183): logging the temperature reveals the warming but cannot by itself separate it from the catalyst's effect; a comparison held at the same temperature is needed to isolate it. The warm flask also loses a little water vapour, so the balance curve approximates the oxygen lost and is not an exact selective measurement. It also hands Module 4 its first observation (the warm flask).
- **Memory aid:** "Concentration and surface area: hit often. Temperature: hit hard. Catalyst: lower the bar." with "Temperature moves the curve. A catalyst moves the line." (see "Memory aid check").
- **Safety (author note d; science check).** Eye protection; about 3% hydrogen peroxide (an irritant; higher concentrations are not used); 0.50 g of manganese(IV) oxide (harmful if swallowed or inhaled; weighed without raising dust); small volumes, the plug against froth and spray; the powder run froths, so a large flask; waste as the school directs. One spoken clause in scene 3 (plug) and a safety chip in scene 5.
- **Attempts (original wording, HSC style).** A1 (surface area; the site's zinc example rebuilt): 0.50 g of zinc granules and 0.50 g of zinc powder, each with 50.0 mL of 1.0 mol L⁻¹ HCl (excess) at 25 °C; curves P (steep, levelling early) and Q, both at 190 mL. (a) Which is the powder; justify with collision theory. (b) Why the same final volume. Crossed: "the powder has a lower activation energy". A2 (catalyst and surface together; new context): a catalytic converter's thin platinum coating on a ceramic honeycomb for 2CO + O₂ → 2CO₂. (a) Explain with a Maxwell-Boltzmann distribution how platinum increases the rate. (b) Why a thin coating on a honeycomb rather than a solid block. Crossed: "platinum shifts the curve to the right".
- **Mistake scene:** none separate. "Crushing raises the energy" (1, 4; crossed in A1); "a catalyst gives the particles energy" (7); "a catalyst moves the curve" (8; crossed in A2); "catalysts make more product" (9); "a catalyst is used up" (6).
- **Handoff (route next: `chem-y11-m4-v01`, "How does an energy profile distinguish endothermic from exothermic change?").** Scene 17: Module 3 ends; the catalysed flask warmed by more than ten degrees; how can we show where that energy goes, and why do some reactions cool their surroundings instead? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted; lesson 12; notes 2 to 4 on the converter card are in `chem-y11-m3-v14.md` and are not repeated):**
  1. Worked example 1, experiment 4: copper(II) sulfate "is not a true catalyst ... The added copper is consumed (deposited), not regenerated". Copper(II) ions are consumed to deposit copper, but the deposited copper then speeds hydrogen evolution without being used up further; many texts call this catalysis by the deposited copper. Suggest: "the copper(II) ions are used up, but the copper they deposit on the zinc speeds up hydrogen evolution and is not consumed further, so the copper metal acts as a catalyst."
  2. Lesson 12 Concepts: "a catalyst is the only factor that changes the proportion of particles exceeding Eₐ WITHOUT changing temperature, it lowers Eₐ, not the energy distribution" is correct; lesson 11's formula reference contradicts it (logged in `chem-y11-m3-v13.md`, note 1).
  - Checked and correct: the surface-area paragraph and Must-Do; the catalyst definition and Must-Do; the distribution card and its Common Error; the Common Error "give energy to the particles"; 2CO + O₂ → 2CO₂.
- **Cause chain taught, in order:** (1) only surface particles can be hit, and crushing exposes more of them (2); (2) more collisions per second at the same success rate speed it up; the energy and Eₐ are unchanged (4); (3) the same mass of carbonate gives the same gas (3, 9); (4) a catalyst is recovered unchanged, so it is not used up (6); (5) it opens a route with a lower Eₐ, so at the same temperature a larger fraction of collisions succeed (7, 8); (6) a solid catalyst works at its surface, so more surface helps it too (10); (7) the reaction's own heat also speeds it, which a fair comparison must separate (11).
- **Entry knowledge:** m3-v13 (Eₐ, the distribution, effective collisions, memory line); m3-v14 (the logging rig, the control run, the same-interval comparison, temperature moves the curve); m2-v09 (plugged flask, system); ws-v02 (fair test).
- **Learner-visible vocabulary (plain meaning at first use):** surface area (2, "the total area of a solid that is exposed"); catalyst (5, "a substance that speeds up a reaction without being used up"); alternative route is spoken as "a different route". Grey tag only: "heterogeneous catalyst: in a different state from the reactants" (scene 10, author note e).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **logging rig** (v14's, scenes 1, 3, 5, 6, 11); **cube cutter** (scene 2: a coded 1 cm cube with its faces shaded amber, sliced along a 10 × 10 × 10 grid into 1 mm cubes that spread apart with every new face shading amber; surface counters "6 cm²" and "60 cm²"); **surface lens** (scene 4: a chip edge against powder grains in acid with H⁺ dots and hit counters); **filter strip** (scene 6: coded funnel and paper over a flask, the black powder collecting by code, then `y11c-mno2-watch-glass-v1.png` on the balance reading 0.50 g); **route sketch** (scene 7: a coded "bar" on two lanes, a high bar labelled "no catalyst" and a lower bar labelled "on the MnO₂ surface"; abstract, no figure); **energy-spread graph** (scene 8: v13's curve with two Eₐ lines; v14's two-curve picture small beside it); **lever board** (scenes 9, 12); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v14):** the control run mid slate; powder light grey-white curve with a slate outline; peroxide runs: uncatalysed grey, catalysed teal; Eₐ (uncatalysed) amber dashed; Eₐ (catalysed) teal dashed; tails amber (uncatalysed) and teal (catalysed); surface faces amber; crossed items red strike; every data item tagged "illustrative data".
- **Board layout (Revision 2):** heading top left. Stages, each under about 47 s: the chips and powder plate large (1); the cube slider at full width (2); the rig with the powder flask and graph (3); two surface lenses (4); the rig with the peroxide flask (5, 6, about 47 s with the filter and reweigh in 6); the lever board with the two-lane route sketch (7); the energy-spread graph at full width with the line slider (8); the lever board, then the lump and powder panels (9, 10, about 48 s); the rig with the probe (11); the memory board (12); question cards (13 to 16); the final layout (17).
- **Colour roles (Revision 2, fixed for the whole video):** the control run mid slate; powder light grey-white curve with a slate outline; peroxide runs: uncatalysed grey, catalysed teal; Eₐ (uncatalysed) amber dashed; Eₐ (catalysed) teal dashed; tails amber (uncatalysed) and teal (catalysed); surface faces and the surface counter amber; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; method, safety and "illustrative data" tags grey.
- **Type sizes (Revision 2, 1080p):** the current line or row at least 44 px (48 px); the surface counter, the tail readout and framed results about 52 px; graph axis labels and plan rows 32 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px ("illustrative data" tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the cube slider (scene 2) and the line slider (scene 8).** The cube: a navy slider sets the number of cuts along each edge (1, 2, 5, 10); the cube splits into n × n × n smaller cubes, every new face shades amber, and the surface counter (52 px) recomputes 6n cm²: 6, 12, 30, 60 cm², while a mass readout stays at 1.00 g. The line: the Eₐ line slides left from the uncatalysed to the catalysed position while the curve stays locked, and a horizontal bar beside the graph (no numbers) grows with the shaded tail, so the student watches the fraction beyond Eₐ rise.

Author notes (not learner copy):
(a) Surface area: 1 cm cube, 6 × 1 cm² = 6 cm². 1000 cubes of 1 mm: 1000 × 6 × (0.1 cm)² = 60 cm². Factor 10 = edge ratio.
(b) Powder curve from the v14 model with k ten times larger (k(20 °C) = 4.5): 0.243, 0.366, 0.422, 0.438, 0.440 g at 10, 20, 30, 40, 50 s, rounded to 0.24, 0.37, 0.42, 0.44 g. Chips (control) from v14: 0.44 g from 390 s. The powder's first-30-s average (0.014 g s⁻¹) is only about five times the chips' 0.0030 because it has almost finished in 30 s; the video therefore compares finishing times and starting steepness, not that average.
(c) Peroxide: 25.0 mL × 0.90 mol L⁻¹ = 0.0225 mol H₂O₂ (0.765 g, 3.1% w/v); 2H₂O₂ → 2H₂O + O₂ gives 0.01125 mol O₂ = 0.360 g. Catalysed readings from 0.36 × (1 − e^(−0.025 t)): 0.190, 0.280, 0.322, 0.342, 0.351, 0.356 g at 30 to 180 s, rounded 0.19, 0.28, 0.32, 0.34, 0.35, 0.36. A small extra loss of water vapour from the warm flask is ignored in the model; Revision 2 (brief 183) states the approximation on screen (scenes 5 and 11) and in the evaluation, so the balance curve is not presented as an exact oxygen measurement. Recovery: 0.50 g is an ideal, illustrative result, not a guarantee of complete recovery; the practical notes say to weigh on a tared watch glass and compare within the balance's precision (±0.01 g). The 0.50 g value is kept (brief 183: do not replace it with an invented 0.49 g).
(d) Safety: hydrogen peroxide about 3% (school stock is often 3% or 6%); manganese(IV) oxide is harmful if swallowed or inhaled; eye protection; small amounts; waste as the school directs. Science check against current NSW school chemical-safety guidance.
(e) "Homogeneous" and "heterogeneous" catalysts are on the site; the 2017 dotpoint names only "catalysts". One grey tag in scene 10; no teaching.
(f) Temperature rise in the catalysed flask (final frame): ΔH for H₂O₂(aq) → H₂O(l) + ½O₂(g) is about −94.6 kJ mol⁻¹ (ΔfH: H₂O(l) −285.8, H₂O₂(aq) −191.2); 0.0225 mol releases about 2.13 kJ; into 25 g of solution with no losses, ΔT ≈ 2130 ÷ (25 × 4.18) ≈ 20 °C. The shown rise 21.0 → 32.5 °C (11.5 °C) allows for heat lost to the flask and air (illustrative).
(g) A1: 0.50 ÷ 65.38 = 7.65 × 10⁻³ mol Zn; HCl needed 0.0153 mol, supplied 0.050 mol (excess); H₂ 7.65 × 10⁻³ × 24.79 = 0.190 L = 190 mL at 25 °C, 100 kPa (the card shows the level only).
(h) Pronunciations: "M n O two" for MnO₂ is never spoken (narration says "manganese dioxide"); "two H two O two"; "two C O plus O two makes two C O two".

Main question: *How do surface area and catalysts change reaction rate differently?*
Entry knowledge: m3-v13, m3-v14; m2-v09; ws-v02.
Stops after: surface area (model, evidence, collision cause), catalyst (evidence, not used up, lower Eₐ route, distribution), the contrast, the combination, a limitation, two attempts. No energy profiles.
Handoff: chem-y11-m4-v01, energy profiles.

## Opening frame and final frame

- **Opening frame:** m3-v14's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v01` opens on it):** left: the logging balance with the new plate `y11c-flask-peroxide-mno2-plug-fizz-v1.png` (black powder in frothing liquid, plug in the neck) on its pan; `m7-temp-probe-sleeve-stand-v1.png` beside it with the probe tip dipping through the plug's edge into the liquid (coded readout "32.5 °C", with a small grey "started at 21.0 °C" under it); a faint warm-orange glow ripple spreading from the flask into the air (coded). Right: the memory board small: "Concentration and surface area: hit often. Temperature: hit hard. Catalyst: lower the bar." Top left a small grey tag "Module 3 complete". The amber chip "The flask warmed by 11.5 °C. Where did that energy come from?". The chip "Next: How does an energy profile distinguish endothermic from exothermic change?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Two more ways to speed up a reaction. First, crush the chips. Here's one gram of marble chips, and one gram of the same marble ground into powder. So, quick prediction. Using the memory line from last time, which lever does crushing push? Hit often, hit hard, or hit **right**?

Visual: (stage: the chips and powder plate large; about 21 s) opens on m3-v14's final frame; the "Next" chip fades and the lower right panel dims. On "crush the chips" the upper panel `y11c-chips-powder-watch-glasses-v1.png` moves to the centre and enlarges to fill about two thirds of the frame width (slate hand tags "chips" and "powder", a pen ring around the powder). On "one gram of marble chips" label "1.00 g chips"; on "ground into powder" label "1.00 g powder". Heading writes: "Surface area and catalysts". On "the memory line" the line "Hit often, hit hard, hit right." enlarges at the top. Chips "hit often", "hit hard", "hit right". On "right" the 3 s `Countdown` ring runs.

### 2. only the surface can be hit
> Hit often. In a solid, only the particles on the surface can be hit by the acid. The ones inside have to wait until the layers above them have reacted. So the key quantity is surface area, the total area of the solid that's exposed. Picture a one centimetre cube. It has six faces, six square centimetres of surface. Cut it into one millimetre cubes, and you get a thousand of them, with sixty square centimetres of surface altogether. Same mass, ten times the surface for the acid to **hit**.

Visual: "hit often" ticks. On "only the particles on the surface" a coded cross-section of a chip (packed white particles) with acid H⁺ dots hitting only the outer layer; outer particles outlined amber, inner ones grey. On "wait until the layers above" the outer layer peels away and the next layer turns amber. On "surface area" gloss card "surface area: the total area of a solid that is exposed". On "a one centimetre cube" (stage change: the cube slider at full width) a 1 cm cube with amber faces, the surface counter "6 cm²" (52 px) and a mass readout "1.00 g". On "Cut it into one millimetre cubes" the navy slider runs (see Simulation): 2 cuts per edge, "12 cm²"; 5, "30 cm²"; 10, "60 cm²"; the small cubes spread apart, every new face shades amber, and the mass readout stays "1.00 g"; the working "1000 cubes × 6 mm² = 60 cm²" writes. On "hit" the result "same mass, 10 × the surface" frames in a dark-ink box with a green tick (amber hand tag "new faces to hit").

### 3. the evidence: powder against chips
> Here's the evidence, on the same logging balance, with the same one mole per litre acid at twenty degrees. The chips curve is the control run from last time. The powder froths hard, so the plug really matters, and its curve shoots up and flattens in about forty seconds. The chips take about six and a half minutes. But both level off at zero point four four grams, because it's the same mass of calcium carbonate, just more of it exposed at **once**.

Visual: the board returns to the logging rig; the graph shows v14's control curve (mid slate, "chips", 0 to 420 s, levelling at the dashed 0.44 g line at 390 s). On "The powder froths" the flask plate cross-fades to the new `y11c-flask-powder-acid-plug-fizz-v1.png` (dense froth under the plug) and the plug is ringed. On "shoots up" the powder curve draws (pale with slate outline): points 0, 0.24, 0.37, 0.42, 0.44 g at 0, 10, 20, 30, 40 s, flat after (tag "illustrative data"); a marker "about 40 s". On "about six and a half minutes" a marker at 390 s on the chips curve. On "both level off" the dashed 0.44 g line pulses where both meet it. On "once" chip "same carbonate, same CO₂" (slate hand tag "same total, much faster"; a pen ring around the powder's early corner).

### 4. why more surface is faster
> So more surface means more acid particles hit the solid each second. That's collision frequency again. The temperature is the same, so the fraction of collisions with enough energy hasn't changed, and neither has the activation energy. More collisions each second, at the same success rate, means a faster reaction. And surface area only matters when the reaction happens at a surface, like a solid reacting with a liquid or a **gas**.

Visual: the surface lens: left, one chip edge with a few H⁺ hits per second (counter); right, many powder grains in the same acid with many hits (counter several times larger). On "collision frequency again" the funnel inlet lights ("hit often"). On "fraction of collisions with enough energy hasn't changed" the v13 energy-spread thumbnail with one curve and one Eₐ line, unchanged, and a "same" bracket; a crossed chip "crushing gives particles more energy". On "a faster reaction" teal success flashes come more often in the right lens. On "gas" a small grey tag "surface area: when a solid reacts" beside a ghost of two clear solutions mixing (tag "two solutions: no surface to expose"). The crossed chip carries a red hand tag "same Eₐ, same energies"; slate hand tag "more hits per second" on the right lens.

### 5. a substance that isn't used up
> Now the second way. Hydrogen peroxide slowly breaks down into water and oxygen, so slowly that on the balance, nothing seems to happen. Add half a gram of black manganese dioxide powder, and it froths straight away, and the mass falls as the oxygen escapes. Manganese dioxide is a catalyst, a substance that speeds up a reaction without being used **up**.

Visual: the rig with `y11c-flask-acid-plug-spent-v1.png` on the pan, label "25.0 mL hydrogen peroxide, about 3%"; equation strip "2H₂O₂(aq) → 2H₂O(l) + O₂(g)". On "nothing seems to happen" the laptop graph ("mass of O₂ lost (g)" 0 to 0.40 against "time (s)" 0 to 180) draws a flat grey line at 0.00 (tag "no catalyst: no measurable change in 3 min"). On "half a gram of black manganese dioxide" `y11c-mno2-watch-glass-v1.png` appears above the flask, label "0.50 g MnO₂", and the powder tips in by code (the watch glass tilts on a coded arc; no hand); safety chip "eye protection · about 3% peroxide · no dust". On "it froths straight away" the flask cross-fades to the new `y11c-flask-peroxide-mno2-plug-fizz-v1.png`. On "the mass falls" the teal catalysed curve draws live with the balance readout: 0, 0.19, 0.28, 0.32, 0.34, 0.35, 0.36 g at 0 to 180 s (tag "illustrative data"; grey method tag "mass lost ≈ oxygen: a little water vapour also leaves the warming flask"; teal hand tag "froths at once"). On "catalyst" gloss card "catalyst: a substance that speeds up a reaction without being used up". On "up" the card's last words underline.

### 6. how we know it isn't used up
> How do we know it isn't used up? After the reaction, filter out the black powder, dry it, and weigh it. There's still zero point five zero grams. And if you add it to fresh hydrogen peroxide, it works just as well. It takes part in the reaction, but it's given back at the **end**.

Visual: the filter strip: a coded funnel and filter paper over a flask; the frothing liquid pours through by code (the flask tilts on a coded arc) and the black powder collects on the paper. On "dry it" a small coded warm-air shimmer over the paper. On "weigh it" `y11c-mno2-watch-glass-v1.png` sits on `y11c-top-pan-balance-v1.png`, readout "0.50 g" framed in a dark-ink box with a green tick against the label "0.50 g before" (tag "illustrative: weigh on a tared watch glass; compare within ±0.01 g"). On "fresh hydrogen peroxide" a second run: the powder tips into a new flask (`y11c-flask-acid-plug-spent-v1.png` → `y11c-flask-peroxide-mno2-plug-fizz-v1.png`) and a second teal curve draws on top of the first. On "end" a small loop arrow "takes part → given back" (teal hand tag "not used up").

### 7. a lower bar
> So which lever does a catalyst push? It doesn't speed the particles up, and it doesn't make them collide more often. Instead, it gives the reaction a different route, through steps on the surface of the manganese dioxide, and that route has a lower activation energy. Think of it as lowering the bar. At the same temperature, many more collisions can now clear **it**.

Visual: the lever board: the funnel at the centre, the three phrases at its inlet and gates. On "doesn't speed the particles up" a crossed chip "a catalyst gives particles energy"; on "doesn't make them collide more often" the inlet stays dim. On "a different route" the route sketch: two lanes from "H₂O₂" to "H₂O + O₂"; the upper lane has a high amber bar "no catalyst"; the lower lane, labelled "on the MnO₂ surface", has a lower teal bar. On "lower activation energy" a bracket shows the drop between the bars. On "lowering the bar" the funnel's energy gate glows teal and widens. On "it" many collision dots pass the lower bar while few pass the high one. The crossed chip carries a red hand tag "same energies, lower bar"; teal hand tag "new route" on the lower lane.

### 8. the curve stays, the line moves
> Here's the spread of energies again. A catalyst doesn't touch the curve, because the temperature hasn't changed. It moves the activation energy line to the left. Now a much bigger tail lies beyond it, so a much larger fraction of collisions are effective. Compare that with heating, from last time, which moved the curve. Temperature moves the curve. A catalyst moves the **line**.

Visual: the board clears to the energy-spread graph: one curve "20 °C", the amber dashed line "Eₐ (no catalyst)" with its small amber tail. On "doesn't touch the curve" a lock icon on the curve. On "moves the activation energy line to the left" the line slider runs (see Simulation): a teal dashed line "Eₐ (with catalyst)" slides left from the amber line's position with a left-pointing arrow "catalyst", while the tail bar beside the graph grows. On "a much bigger tail" the area beyond the teal line fills teal, much larger than the amber tail (teal hand tag "bigger fraction"). On "Compare that with heating" v14's two-temperature graph appears small at the right (curve moved, line fixed). On "Temperature moves the curve" a `PenArrow` along the shifted curve in the small graph; on "line" a `PenArrow` along the moved line in the big graph; the memory line writes under both: "Temperature moves the curve. A catalyst moves the line." A crossed ghost of a shifted curve labelled "catalyst" flashes once (site Common Error; red hand tag "the curve stays"). The memory line sits in a framed card from here on.

### 9. different levers, same amount
> So the two work differently. More surface area gives more collisions each second, with the same activation energy. A catalyst gives the same collisions, but a lower activation energy, so more of them succeed. And neither one changes how much product you get. Manganese dioxide makes the oxygen come off faster, but it doesn't make more of **it**.

Visual: the lever board returns: a slate cable from a "surface area" dial to the inlet ("more collisions per second, same Eₐ"); a teal cable from a "catalyst" dial to the energy gate ("same collisions, lower Eₐ, larger fraction succeed"). On "neither one changes how much product" the powder and chips levels (0.44 g) and a teal "0.36 g O₂ when complete" level appear small; chip "faster, not more" framed with a green tick (ink hand tag "same amount").

### 10. catalysts have surfaces too
> The two ideas also work together. Manganese dioxide is a solid, and the reaction happens on its surface. So a fine powder of catalyst works faster than one lump of the same mass, because more of its surface is exposed. That's why many industrial catalysts are spread thinly over a very large **surface**.

Visual: two small coded panels: "one lump of MnO₂" (a single black lump in peroxide, a few bubbles from its surface) and "same mass as powder" (fine black grains, bubbles from every grain); bubble counters. On "the reaction happens on its surface" a lens on one grain: peroxide molecules meeting the surface, oxygen bubbles leaving (no mechanism names). Grey tag "a catalyst in a different state from the reactants (here a solid in a solution) works at its surface". On "spread thinly" a coded thin teal coating spreading over a large ridged outline (abstract; the converter is not named). On "surface" both cables from scene 9 light together (teal hand tag "more catalyst surface"; a pen ring around the powder panel's bubble counter).

### 11. a fair catalyst test
> One thing to watch in the catalyst run. Breaking down hydrogen peroxide releases heat, so the frothing flask warms up, and that speeds it up even more. Logging the temperature shows the warming, but it can't separate the two effects. For that, compare runs held at the same temperature. And a warm flask loses a little water vapour, so not all the lost mass is **oxygen**.

Visual: back to the rig with the catalysed flask; `m7-temp-probe-sleeve-stand-v1.png` beside it, its probe in the flask; coded readout climbing "21.0 → 32.5 °C" (illustrative) as a warm-orange ripple spreads from the flask. On "speeds it up even more" a small orange arrow to the funnel's energy gate ("warmer: hit hard"). On "Logging the temperature" a second line on the laptop graph, "temperature (°C)", rises with the mass curve; on "can't separate" a bracket "two effects: catalyst + warming" with a grey tag "logging shows it; it doesn't separate it" (orange hand tag "confounded"). On "held at the same temperature" an evaluation row writes (36 px): "isolate the catalyst: compare runs at one controlled temperature". On "oxygen" a second row "mass lost ≈ O₂ (a little water vapour too)" with a pen ring on the faint vapour wisp.

### 12. the full set
> So here's the full set. Concentration and surface area, hit often. Temperature, hit hard. A catalyst, lower the **bar**.

Visual: the memory board writes large in the explainer's handwriting style: "Concentration and surface area: hit often." (slate), "Temperature: hit hard." (deep orange), "Catalyst: lower the bar." (teal), with "Temperature moves the curve. A catalyst moves the line." small beneath. On "bar" each line links by a thin cable to its part of the funnel.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Zero point five zero grams of zinc granules and zero point five zero grams of zinc powder each react with excess hydrochloric acid at the same temperature. The graph shows the hydrogen collected. Which curve shows the powder? Justify your answer using collision theory. Then explain why both curves reach the same final volume. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "0.50 g of zinc granules and 0.50 g of zinc powder were each added to 50.0 mL of 1.0 mol L⁻¹ hydrochloric acid (excess) at 25 °C. The volume of hydrogen collected is shown. (a) Which curve, P or Q, shows the zinc powder? Justify your answer using collision theory. (2 marks) (b) Explain why both reactions produce the same final volume of hydrogen. (1 mark)" with a coded `LineGraph` "volume of H₂ (mL)" 0 to 200 against "time (s)": P steep, levelling at 190 mL early; Q shallower, reaching 190 mL later (tag "illustrative data"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Curve P. It's steeper at the start. Powder has a larger surface area, so more zinc particles are exposed and more acid particles hit them each second, at the same activation energy. Both end at a hundred and ninety millilitres because the same mass of zinc reacts, with acid in excess. The powder doesn't have a lower activation **energy**.

Visual: card shrinks to the top. Rows: "P: steeper start → faster" (P's start ringed); "powder: larger surface area → more Zn particles exposed → more collisions with H⁺ per second; same Eₐ, same fraction effective" (slate); "same mass of Zn (limiting) → same moles of H₂ → same 190 mL" (teal). The answer "P: the powder" sits in a dark-ink box with a green tick. On "energy" a chip "the powder has a lower activation energy" fades in and is crossed in red (red hand tag "same Eₐ, more hits"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A car's catalytic converter has a thin coating of platinum spread over a ceramic honeycomb. The platinum speeds up the reaction of carbon monoxide with oxygen. Explain, using a Maxwell-Boltzmann distribution, how the platinum increases the rate. Then explain why it's spread as a thin coating over a honeycomb, instead of being used as a solid block. Pause here to answer.

Visual: `QuestionCard`: "A car's catalytic converter contains a ceramic honeycomb coated with a thin layer of platinum. The platinum catalyses the reaction 2CO(g) + O₂(g) → 2CO₂(g). (a) With reference to a Maxwell-Boltzmann distribution, explain how platinum increases the rate of this reaction. (3 marks) (b) Explain why the platinum is spread as a thin coating over a honeycomb rather than used as a solid block. (2 marks)" beside the new plate `y11c-catalytic-converter-honeycomb-v1.png` (a cut ceramic honeycomb block showing its many square channels; no car, no people). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Platinum gives a different route with a lower activation energy. On the distribution, the curve stays the same, but the activation energy line moves left, so a larger fraction of collisions have enough energy, and the rate rises. The reaction happens on the platinum's surface, so a thin coating over a honeycomb exposes far more surface, for less platinum. Shifting the curve to the right would be **wrong**.

Visual: card shrinks. Rows with a small distribution sketch: "alternative route, lower Eₐ; platinum not used up" (teal); the sketch draws: same curve, Eₐ line moving left, larger shaded tail; "→ larger fraction of collisions with energy ≥ Eₐ → more effective collisions per second" (teal); "reaction on the Pt surface → thin coating on a honeycomb: huge surface, little platinum (expensive)" (slate, the honeycomb channels ringed). The answer "lower Eₐ route: line moves left, curve stays; thin coating = huge surface" sits in a dark-ink box with a green tick. On "wrong" a chip "platinum shifts the curve to the right" fades in and is crossed in red (red hand tag "the line moves"). Hold about 1 second.

### 17. conclusion and handoff
> So surface area and catalysts both speed reactions up, but in different ways. More surface means more collisions each second. A catalyst opens a route with a lower activation energy, so more of the collisions succeed. That's the end of Module 3. Now look back at the catalyst run. The flask warmed up by more than eleven degrees, and that energy came from the reaction itself. Where does it come from, and why do some reactions cool their surroundings **instead**?

Visual: the memory board small at the right. On "More surface" the surface-area cable pulses; on "lower activation energy" the catalyst cable. On "end of Module 3" grey tag "Module 3 complete". On "look back at the catalyst run" the board settles into the final frame: the balance with `y11c-flask-peroxide-mno2-plug-fizz-v1.png`, the probe beside it reading "32.5 °C" with "started at 21.0 °C", the warm ripple spreading. On "came from the reaction itself" the amber chip "The flask warmed by 11.5 °C. Where did that energy come from?". On "instead" the chip "Next: How does an energy profile distinguish endothermic from exothermic change?" writes. Hold about 2 seconds. This is the final frame (m4-v01 opens on it).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Smaller pieces: more surface, more collisions per second, same Eₐ.
2. Same mass of solid: same amount of product.
3. Catalyst: not used up; gives a route with a lower Eₐ.
4. A catalyst moves the Eₐ line left; temperature moves the curve.
5. Compare catalysts at one temperature: the reaction's own heat speeds it up.

Memory aid (framed card, on the notes screen): *Concentration and surface area: hit often. Temperature: hit hard. Catalyst: lower the bar.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why crushing helps (2, 4: more particles exposed, more hits per second); why the totals match (3: same carbonate); why the catalyst is not used up (6: recovered and reused); why it helps (7, 8: lower Eₐ, larger fraction at the same temperature); why powders help catalysts (10); why the warming matters (11).
- **Misconceptions addressed:** crushing gives energy (4; crossed in A1); a catalyst gives particles energy (7); a catalyst shifts the curve (8; crossed in A2); a catalyst makes more product (9); a catalyst is used up (6); surface area matters for two solutions (4).
- **One idea at a time:** surface model (2), evidence (3), cause (4); catalyst evidence (5), not used up (6), route (7), distribution (8); contrast (9); combination (10); limitation (11).
- **Video makes it easier:** the cube splits and its new faces light (2); one curve over the other on the same axes (3); hit counters in two lenses (4); the powder tips, filters and is reweighed (5, 6); two lanes with two bars (7); the line slides while the curve is locked, beside v14's moved curve (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 25 s and 30 s (feedback 2 answers a two-part, 5-mark question).
- **Avoided double teaching:** the logging rig and same-interval comparison (v14); Eₐ, the distribution, effective collisions (v13); the plug and system (m2-v09).
- **Syllabus coverage:** `C3-IQ3-01` practical investigation for surface area and catalysts with digital data (3, 5, 6, 11, A1); `C3-IQ3-03` collision-theory explanations (4, 7, 8, 9, A1, A2).
- **Out of scope by design:** catalysed energy profiles and ΔH (m4-v05); equilibrium; adsorption steps; enzymes.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) P (1 mark): the powder has a larger surface area, so more zinc particles are exposed to collisions with H⁺ ions each second; the activation energy and the fraction of effective collisions are unchanged, so there are more effective collisions per second and the initial rate is greater (1 mark). (b) The same mass of zinc reacts in each, and zinc is the limiting reactant (acid in excess), so the same amount of hydrogen forms (1 mark). Classic mistake (crossed): "the powder has a lower activation energy".

**Attempt 2 (scene 15; original wording, HSC style, 5 marks suggested).** As on the card.
Model answer: (a) Platinum provides an alternative reaction pathway with a lower activation energy and is not used up (1 mark). On the Maxwell-Boltzmann distribution the curve is unchanged at the same temperature, but the Eₐ line moves to lower energy, so a larger fraction of particles (area under the curve beyond Eₐ) have at least the activation energy (1 mark). More collisions are effective per second, so the rate increases (1 mark). (b) The reaction occurs on the platinum surface (1 mark); a thin coating over the many channels of a honeycomb gives a very large surface area for collisions with CO and O₂ while using little of an expensive metal (1 mark). Classic mistake (crossed): "platinum shifts the curve to the right".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Cube model | 1 cm cube 6 cm²; 1000 × 1 mm cubes, 60 cm²; × 10 | 2 |
| Surface-area runs (illustrative) | 1.00 g chips and powder; 100.0 mL 1.00 mol L⁻¹ HCl; 20.0 °C; powder 0.24, 0.37, 0.42, 0.44 g at 10, 20, 30, 40 s; chips level at 0.44 g from about 390 s (6.5 min) | 3 |
| Peroxide runs (illustrative) | 25.0 mL, about 3% (0.90 mol L⁻¹, 0.0225 mol); 0.50 g MnO₂; mass lost 0.19, 0.28, 0.32, 0.34, 0.35, 0.36 g at 30 to 180 s; no catalyst 0.00 g | 5, 6 |
| Recovery | 0.50 g before, 0.50 g after | 6 |
| Warming | 21.0 → 32.5 °C (11.5 °C, illustrative) | 11, 17, final frame |
| A1 | 0.50 g Zn (7.65 × 10⁻³ mol); 50.0 mL 1.0 mol L⁻¹ HCl (0.050 mol, excess); 190 mL H₂ | 13, 14 |
| A2 | 2CO + O₂ → 2CO₂ | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 6 × 1² = 6 cm²; 1000 × 6 × 0.1² = 60 cm².
- Powder model (author note b): 0.243, 0.366, 0.422, 0.438, 0.440 g at 10 to 50 s.
- 0.0250 × 0.90 = 0.0225 mol H₂O₂; × 34.016 = 0.765 g (3.06% w/v in 25.0 mL); O₂ 0.01125 mol × 32.00 = 0.360 g.
- 0.36 × (1 − e^(−0.025t)) at t = 30, 60, 90, 120, 150, 180: 0.190, 0.280, 0.322, 0.342, 0.351, 0.356.
- Heat: 0.0225 × 94.6 = 2.13 kJ; 2130 ÷ (25 × 4.18) = 20.4 °C (no losses); shown 11.5 °C.
- 0.50 ÷ 65.38 = 7.648 × 10⁻³ mol; × 24.79 = 0.1896 L → 190 mL; HCl needed 0.0153 mol, supplied 0.050 mol.
- Equations: 2H₂O₂ → 2H₂O + O₂ (H 4, O 4); 2CO + O₂ → 2CO₂ (C 2, O 4); Zn + 2HCl → ZnCl₂ + H₂.

## Memory aid check

- **"Concentration and surface area: hit often. Temperature: hit hard. Catalyst: lower the bar."** Completes v13's "Hit often, hit hard, hit right." and v14's extension. Assumptions checked: surface area raises collision frequency only, with Eₐ and the energy distribution unchanged (site lesson 12 table, scene 4); a catalyst lowers Eₐ by an alternative route and leaves the distribution unchanged (site distribution card, scene 8); "lower the bar" refers to Eₐ, the bar defined in v13 (scene 7 repeats it). "Temperature: hit hard" drops "and a little more often" for brevity; v14's full line stays in its notes, and nothing here depends on the omission.
- **"Temperature moves the curve. A catalyst moves the line."** The site's own summary ("Temperature: shifts the curve right. Catalyst: shifts the Eₐ line left"), shortened. Holds for every distribution in the course at a fixed temperature. Helps attempt 2.
- **Considered, not used:** the site's adsorption, surface reaction, desorption sequence (beyond the 2017 dotpoint wording; the converter card has errors logged in v14).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,153 characters**, 18 scenes (per scene: 273, 489, 447, 431, 351, 277, 364, 377, 342, 300, 368, 116, 360, 336, 382, 405, 460, 75; Revision 1: 6,103). At 13.3 characters per second the speech is about 463 s; add about 11 s of settling (the cube slider in 2, the curves in 3 and 5, the filter in 6, the line slider in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 555 s** (Revision 1: about 550 s).

## Scene list and build ids

Lesson key `c-y11-m3-v15` (route chem-y11-m3-v15; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v15`.

In order (18 scene headings, all `### N.`): hook-prediction, surface-only, powder-evidence, why-surface, catalyst-evidence, not-used-up, lower-bar, curve-and-line, different-levers, catalyst-surfaces, fair-catalyst-test, full-set, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m3-v14's final frame into scene 1 by camera continue (the chips and powder panel moves to the centre); 1 to 2 camera push into a chip; 2 to 3 pull back to the rig; 3 to 4 camera push into the surfaces; 4 to 5 pull back to the rig with the peroxide flask; 5 to 6 camera continue; 6 to 7 clear change to the lever board; 7 to 8 clear change to the distribution; 8 to 9 camera continue; 9 to 10 camera continue; 10 to 11 clear change to the rig; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v15-learning-review.md`, `checks/c-y11-m3-v15-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png`, `public/assets/biology/y11-laptop-blank-v1.png`, `public/assets/chemistry/m7-temp-probe-sleeve-stand-v1.png`: as in v14.
- The plugged flask set (`chem-y11-m2-v08.md`, `v09.md`): `y11c-flask-acid-plug-spent-v1.png` (also the "hydrogen peroxide, no catalyst" flask: clear liquid, plug), `y11c-flask-chips-acid-plug-fizz-v1.png`.
- `y11c-chips-powder-watch-glasses-v1.png`, `y11c-mno2-watch-glass-v1.png` (delivered by brief 183; inspected 6 November).
- **Inspected, not used:** `c4b-metal-catalyst-v1.png` (crumpled foil; reads as foil, not a catalyst bed); `c7-iron-catalyst-pellets-v1.png` (Haber iron pellets; a different process); `biology/y11-liver-peroxide-before-v1.png` and `after` (an enzyme, liver; enzymes belong to Biology and the dotpoint example here is a chemical catalyst); `public/assets/hscscience/chem-y11-m3/l12/l12MisconceptionCatalyst.png` (a site graphic with text, cartoon style).

Delivered by brief 183 (inspected 6 November on a paper contact sheet at about 300 px): `y11c-flask-powder-acid-plug-fizz-v1.png` (1106 × 1422, scene 3); `y11c-flask-peroxide-mno2-plug-fizz-v1.png` (1106 × 1422, scenes 5, 6, 11, final frame); `y11c-catalytic-converter-honeycomb-v1.png` (1448 × 1086, attempt 2). Need (new plates): none in Revision 2.

Coded: cube cutter and slider, surface lenses and counters, line slider and tail bar, filter strip, route sketch, distributions, lever board and cables, warm ripple, readouts, `LineGraph`s, chips, cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v15)

Delivered by brief 183; no new request in Revision 2. The original brief is kept for reference.

Plates 1 and 2 match the plugged flask set exactly (style, canvas about 1400 × 1800 px, flask outline, plug and camera as `y11c-flask-chips-acid-plug-v1.png` in `chem-y11-m2-v08.md`), so they cross-fade in place on the balance pan; transparent PNG with alpha channel; no text, no people, hands or faces.

1. `y11c-flask-powder-acid-plug-fizz-v1.png`: the same 250 mL conical flask and cotton wool plug, about two fifths full (liquid plus froth): a thin layer of fine white powder on the bottom, dense fine bubbles throughout the clear liquid, and a thick white froth reaching about halfway up the cone, below the plug.
2. `y11c-flask-peroxide-mno2-plug-fizz-v1.png`: the same flask and plug, about one tenth full of clear colourless liquid with a small amount of fine black powder swirling near the bottom, vigorous bubbling and a pale grey froth on the surface (no froth touching the plug).
3. `y11c-catalytic-converter-honeycomb-v1.png` (about 1600 × 1200 px): a cut cylindrical ceramic honeycomb block, cream-coloured, seen at a three-quarter angle so its cut face shows many small square channels; a faint grey metallic sheen on the channel walls (the coating). No metal casing, no car, no text.

Codex records the flask outline in the JSON sidecar shared with the set.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson12.sa.html` (surface-area paragraph and Must-Do; catalyst definition and Must-Do; distribution card and Common Error; the summary line; 2CO + O₂ → 2CO₂; worked example 1's granules and powder).
3. Confirm the equations are balanced and the MnO₂ and H₂O₂ safety statements match a current safety data sheet and NSW school guidance (author note d).
4. Confirm both attempt cards are original, carry every needed fact (A1 states excess acid and shows both levels; A2 states the equation and the coating), and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (powders tip, filter and pour by code); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m3-v14's final frame, and send the final frame to the m4-v01 designer.

## YouTube metadata (draft)

Title: Surface Area and Catalysts: Two Different Ways to Speed Up a Reaction | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Why does marble powder react so much faster than marble chips, and how can manganese dioxide speed up hydrogen peroxide without being used up? Compare logged rate data for chips and powder, then for hydrogen peroxide with and without a catalyst. Surface area gives more collisions each second; a catalyst gives a route with a lower activation energy, so the activation energy line moves on the Maxwell-Boltzmann distribution while the curve stays put. Two exam-style questions at the end, including a catalytic converter.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct a practical investigation, using appropriate tools (including digital technologies), to collect data, analyse and report on how the rate of a chemical reaction can be affected by a range of factors, including but not limited to:"
"surface area of reactant(s)"
"catalysts (ACSCH042)"
"explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Previous: How do temperature and concentration change the rate evidence? Next: How does an energy profile distinguish endothermic from exothermic change?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Module 4 join (root).** The final frame (the warm catalysed flask, 21.0 → 32.5 °C) is the m4-v01 opening; the m4-v01 design (same designer, this wave) opens on it.
- **2. Recovered mass (resolved in Revision 2).** 0.50 g stays, tagged illustrative, with "weigh on a tared watch glass; compare within ±0.01 g" (brief 183 optional finding).
- **3. Scene count and length (learning review).** 18 scenes and about 550 s. Reserve cuts: scene 10's last sentence (about 95 characters) and scene 11's second sentence (about 110 characters); attempt 2 (b) still works without scene 10's last sentence because the card states the coating.
- **4. Safety (science check).** About 3% hydrogen peroxide with 0.50 g manganese(IV) oxide in a plugged 250 mL flask (froth and warming), and marble powder froth. Confirm against current NSW school chemical-safety guidance.
- **5. Three new plates (resolved).** All three delivered by brief 183 and inspected.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the "lower the bar" route sketch in scene 7 read as an energy idea rather than a physical barrier; is the contrast in scene 8 clear at playback speed), then the science check and Codex error check.
- Checker output (5 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 2 should fix, 1 optional; all resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,153 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m3-v15-learning-review.md`, `checks/c-y11-m3-v15-science-check.md`; both list the same three):
1. Warm-flask mass loss (should fix): scene 5 adds a grey method tag "mass lost ≈ oxygen: a little water vapour also leaves the warming flask"; scene 11 now ends "a warm flask loses a little water vapour, so not all the lost mass is oxygen", with an evaluation row. The Limitation decision and author note (c) carry the approximation; all data stay tagged illustrative.
2. Separating catalyst and temperature effects (should fix): scene 11 now says "Logging the temperature shows the warming, but it can't separate the two effects. For that, compare runs held at the same temperature." Key note 5 says "Compare catalysts at one temperature". The warm-flask handoff to Module 4 is unchanged (the final frame is the same).
3. Recovery interpretation (optional, applied): 0.50 g is kept and framed, tagged "illustrative: weigh on a tared watch glass; compare within ±0.01 g"; author note (c) and open decision 2 updated.

Visual upgrade (teaching logic unchanged):
- Scene 1: the painted chips and powder plate fills about two thirds of the frame width in the first 20 s.
- Live readouts: the cube slider (scene 2: 1, 2, 5, 10 cuts per edge give 6, 12, 30, 60 cm² at a constant 1.00 g) and the line slider (scene 8: the Eₐ line slides left with a growing tail bar while the curve stays locked).
- Stage list written (Board layout); no set-up runs past about 48 s.
- Framed answers with a green tick: "same mass, 10 × the surface" (2), the recovered 0.50 g (6), "faster, not more" (9), feedback 1 and feedback 2. Crossed slips carry red hand tags ("same Eₐ, same energies", "same energies, lower bar", "the curve stays", "same Eₐ, more hits", "the line moves").
- Hand tags and a pen mark in role colours in every teaching scene (1 to 11).
- Memory line framed from scene 8; key notes cut to five short bullets (about 300 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The final frame is unchanged (m4-v01 opens on it).

New plate requests: none. All three brief 183 plates are delivered and inspected.

Counts: 6,153 characters (Revision 1: 6,103); about 550 s to about 555 s.
