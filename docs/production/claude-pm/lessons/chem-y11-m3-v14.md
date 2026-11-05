# Year 11 Chemistry M3 V14: Temperature and concentration. How do temperature and concentration change the rate evidence? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,180 characters, 17 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourteenth Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 68, between `chem-y11-m3-v13` and `chem-y11-m3-v15`; a practical video (plan, digital data, comparison, collision-theory explanation). Templates: `chem-y11-m3-v13.md` (same designer, layout and colour key), `chem-y11-m2-v09.md` (the plugged marble-chip flask on the balance, recalled), `chem-y11-ws-v02.md` (fair tests and controls, recalled), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m3-v14` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Plan controlled comparisons, collect digital time-series data, compare rate and explain with collision theory."; next handoff: "How do surface area and catalysts change reaction rate differently?"; practical: "Temperature and concentration rate investigations"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson12.sa.html` (SHA256 `82cdc5ec95517e567e80bc4bfc8f5fa91c0e29dd3a53783da57ae8a92248e32a`, recomputed, matches the route), sections `l12-four-factors-that-affect-reaction-rate-title` (with the temperature and Maxwell-Boltzmann card) and `l12-2-concentration-and-surface-area-title`. Used: the factor table's rows for temperature ("Slight increase" in frequency, "Large increase" in the proportion exceeding Eₐ) and concentration (frequency increases, proportion "No change"); the temperature card's features of the higher-temperature curve (shifts right, peak lower and broader, equal area, larger area beyond Eₐ) and its Common Error ("Many students draw the T₂ curve higher than T₁"); the concentration paragraph ("more solute particles are present per unit volume ... collide more frequently ... the proportion ... is unchanged"); the Common Error "Students say increasing concentration increases the energy of the particles"; the lesson 11 trap "Temperature increases rate only because molecules collide more frequently"; the safety box's controls (small quantities of dilute acid, safety glasses, a water bath rather than a direct flame). Not used: the zinc and copper(II) sulfate worked example (v15 uses zinc granules and powder in an attempt), the "10 °C rule" and fever claim (site note 1), the Dieselgate hook and catalytic converter cards (v15), the pressure key term (gases are not tested here; author note f).

Owner rules applied: as `chem-y11-m3-v13.md` (one learner question; no people, hands or faces: apparatus alone, chips dropped and plug placed by code; real apparatus as painted plates; graphs, tables, readouts and particle lenses coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). All investigation data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 3, Rates of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ3-01`: "conduct a practical investigation, using appropriate tools (including digital technologies), to collect data, analyse and report on how the rate of a chemical reaction can be affected by a range of factors, including but not limited to:"
  - "temperature"
  - "concentration of reactant(s)"
- `C3-IQ3-03`: "explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v13's final frame (the gas rig and graph, the funnel with "hit often", "hit hard", "hit right", the concentration and temperature dials with questioning arrows). Teaches: concentration and temperature change how fast, not how much, when the chips run out first (prediction); a plan with two series, each changing one variable (ws-v02 recalled); digital data collection (a balance logging mass every second to a laptop) and why it helps; the plug and the system (m2-v09 recalled); comparing runs by the mass lost in the same first 30 s (the average initial rate); the concentration results and their collision explanation (more H⁺ per millilitre, more collisions per second, same fraction effective); the temperature series (water bath, probe check) and its results; the temperature explanation (a little more frequent, but mainly a larger fraction beyond Eₐ: the distribution shifts right, flattens, same area); the two levers compared; limitations (warm acid cooling, chip size, balance steps) with improvements. Not taught: surface area and catalysts (v15), rate laws or orders, the Arrhenius equation, instantaneous rates by tangents, pressure of gases (author note f).

## Decisions

- **Learner question (route wording kept).** "How do temperature and concentration change the rate evidence?" The answer, in order: they change how fast the gas leaves, not how much (1, 2); a fair plan isolates each (2); logged curves show the change as a steeper start, measured over the same first 30 s (3, 4); concentration raises collision frequency only (5, 6); temperature raises the fraction with enough energy, and frequency a little (7, 8); the evidence has limits (10).
- **Opening frame (equals `chem-y11-m3-v13.md`'s final frame, same designer).** Left: the gas rig small over the finished volume-time graph. Right: the funnel with "hit often", "hit hard", "hit right"; the "concentration" and "temperature" dials with "?" tags and questioning pen arrows; the amber chip "Which lever does each one push, and how would the data show it?"; the "Next" chip, which fades.
- **Why a balance rather than the gas syringe (scene 3).** v13 used the site's gas-syringe data; for the investigation the route asks for digital time-series data. A balance connected to a laptop logs the mass every second; m2-v09's plugged flask and system boundary are recalled in one sentence. A gas syringe would cap the volume at 100 mL (0.44 g of CO₂ is about 240 mL). Author note a.
- **The investigation (illustrative data, tagged).** 1.00 g of marble chips (taken as calcium carbonate, similar-sized chips) as the limiting reactant, 100.0 mL of hydrochloric acid (excess at every concentration: 0.0500 to 0.200 mol against 0.0200 mol needed), 250 mL conical flask with a loose cotton wool plug, a 0.01 g balance logging every second. Total CO₂ 0.44 g in every run. Concentration series at 20.0 °C: 0.50, 1.00 and 2.00 mol L⁻¹. Temperature series at 1.00 mol L⁻¹: 20.0, 30.0 and 40.0 °C (acid warmed in boiling tubes in a thermostatic water bath, checked with a temperature probe). The 1.00 mol L⁻¹, 20.0 °C run is shared by both series (the control run, reused in v15). Data generated from a simple rate model (author note b) and rounded to the balance's 0.01 g.
- **Prediction (3 s, scene 1).** "Twice the concentration, chips running out first: will the total mass of carbon dioxide lost be bigger, the same or smaller?" Answer: the same. It separates "how fast" from "how much" before any rate data, and it is the evidence students then see in the levelled curves.
- **Comparing rates (scene 4).** Same interval for every run: the mass lost in the first 30 s, when the rate is fastest; average rate = mass lost ÷ 30 s (v13's definition). One worked on screen and in speech (0.09 ÷ 30 = 0.0030 g s⁻¹); the others are spoken as masses and shown as rates, because all intervals are equal. "Steeper start, faster rate" is spoken.
- **Concentration results (scene 5).** 0.05, 0.09 and 0.17 g in the first 30 s: 0.0017, 0.0030 and 0.0057 g s⁻¹. "Doubling the concentration close to doubled the rate here" (1.9 times for 1.00 to 2.00), with the tag "for this reaction": no general proportionality is claimed. All end at 0.44 g; the 0.50 mol L⁻¹ run takes about fifteen minutes (grey tag; the graph shows 0 to 300 s).
- **Temperature results (scene 7).** 0.09, 0.13 and 0.18 g in the first 30 s: 0.0030, 0.0043 and 0.0060 g s⁻¹. Forty degrees gives about twice the rate at twenty in these data. The site's "10 °C rule" is not used (site note 1); no general rule is stated.
- **Temperature explanation (scene 8; site card).** Faster particles collide slightly more often, but the main effect is that a much larger fraction have at least Eₐ: the distribution at the higher temperature shifts right, its peak is lower and broader, and its area is the same (same number of particles). The Eₐ line does not move. Spoken: "It isn't taller, because the number of particles hasn't changed" (site Common Error).
- **Two Common Errors said positively (scene 9).** Concentration does not give particles more energy; warm acid does not "add energy to the reaction", it raises the particles' average kinetic energy.
- **Limitations (scene 10; route "analyse and report").** Warm acid cools during the run (the 40 °C rate reads slightly low; improvement: keep the flask in the bath or record the temperature with the probe throughout); chips differ in size (repeat three times and use the mean; sieve to one size range); the 0.01 g balance gives few steps in 30 s (0.05 g is five steps; a 0.001 g balance or a longer interval gives finer comparisons). ws-v05's error language is not re-taught.
- **Memory aid:** reuses v13's "Hit often, hit hard, hit right." with "Concentration: hit often. Temperature: hit hard, and a little more often." (see "Memory aid check").
- **Safety (author note e; science check).** Eye protection; dilute hydrochloric acid only (no more than 2.00 mol L⁻¹); small chip mass; cotton wool plug against spray; acid warmed in a water bath, never over a flame, and no hotter than 40 °C; waste neutralised and disposed of as the school directs. Shown as a small chip in scene 3, one clause spoken.
- **Attempts (original wording, HSC style).** A1 (plan and explain, temperature): magnesium ribbon with dilute HCl in a water bath at four temperatures, timing until the ribbon disappears; identify the independent variable and two controlled variables; explain the faster rate at higher temperature. Crossed: "only because the particles collide more often" (site trap). A2 (graph, concentration, acid limiting): excess zinc granules with 50.0 mL of 1.0 and 0.5 mol L⁻¹ HCl; two curves A and B; which is 1.0 mol L⁻¹, and why the final volumes differ (620 and 310 mL). Crossed: "both curves should end at the same volume" (true only when the other reactant runs out first, as in this video's chips). A2 deliberately reverses the prediction's condition, so students must check which reactant runs out.
- **Mistake scene:** none separate. "More concentrated gives more product" (1, 2; A2 shows when it does); "temperature only increases collisions" (8, crossed in A1); "concentration gives particles more energy" (9); "draw the hotter curve taller" (8); "the curves must all end at the same place" (crossed in A2).
- **Handoff (route next: `chem-y11-m3-v15`, "How do surface area and catalysts change reaction rate differently?").** Scene 16: two more ways to speed reactions up: crush the chips, or add a substance that is not used up; same lever or different? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted; lesson 12):**
  1. Temperature card Insight: "raising the temperature by 10°C roughly doubles the fraction of particles in the high-energy tail beyond Eₐ ... this approximation holds well for biological systems, which is why fever accelerates metabolic reactions". The factor depends strongly on Eₐ (it is about 2 only for Eₐ near 50 kJ mol⁻¹ at room temperature), the same lesson's worked example says "a 10–20°C rise roughly doubles the rate", and the fever claim is unsupported. Suggest: "For many reactions near room temperature, a 10 °C rise increases the rate by a factor of about 1.5 to 3, depending on the activation energy." and remove the fever sentence.
  2. Catalytic converter card: "2NO(g) → N₂(g) + O₂(g)" is listed as the converter's NOₓ reaction. In a three-way converter, NO is mainly reduced by CO, hydrogen and hydrocarbons on rhodium (for example 2NO + 2CO → N₂ + 2CO₂). Suggest replacing the equation (and the Must-Do that drills it).
  3. "Revisit your thinking": "At low temperatures, CO and O₂ molecules do not stick to the surface strongly enough for the catalytic reaction to occur." Below light-off, CO adsorbs strongly and covers the platinum surface, blocking oxygen; the surface reaction is too slow until the surface is hot enough for CO to leave sites free. Suggest: "Below its light-off temperature (about 250 to 300 °C) the surface reaction is too slow, partly because CO covers the platinum and blocks oxygen."
  4. Catalytic converter card names "platinum (Pt) and palladium (Pd)" but the summary names "Pt, Pd and Rh, with Rh mainly for NOₓ reduction". Suggest naming all three in the card.
  - Checked and correct for this video's use: the factor table's temperature and concentration rows; the temperature card's curve features and equal area; the concentration paragraph; the safety box.
- **Cause chain taught, in order:** (1) the chips run out first, so they set how much gas forms; concentration and temperature change how fast (1, 2); (2) changing one variable at a time lets a difference be blamed on it (2); (3) logging every second records the whole curve without missed or late readings (3); (4) the same 30 s interval makes rates comparable (4); (5) more H⁺ per millilitre means more collisions with the chips per second; same temperature, same fraction effective; more effective collisions per second (6); (6) warmer particles move faster, so slightly more collisions, and a much larger fraction with at least Eₐ, so many more effective collisions per second (8); (7) cooling acid, uneven chips and coarse balance steps limit the comparison (10).
- **Entry knowledge:** m3-v13 (rate, effective collisions, Eₐ, the energy-spread graph, "hit often, hit hard, hit right"); m2-v09 (plugged flask, system, mass lost is CO₂); m2-v10 (concentration in mol L⁻¹); ws-v02 (independent, dependent and controlled variables, fair test); ws-v05 (error language, recalled only).
- **Learner-visible vocabulary (plain meaning at first use):** data logging (3, "software records the reading automatically at set times"); initial rate is not named (the narration says "the rate in the first thirty seconds"). No other new terms.
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **logging rig** (scenes 2 to 5, 7, 10: `y11c-top-pan-balance-v1.png` with the plugged flask set on its pan, a coded USB cable to `y11-laptop-blank-v1.png` whose screen shows the live coded graph; the chips drop in by code and the plug seats by code); **water bath** (scene 7: `m6-water-bath-tube-v1.png` with a coded temperature readout; `m7-temp-probe-sleeve-stand-v1.png` beside it, its coded readout "30.0 °C"); **mass-lost graph** (`LineGraph`: "mass of CO₂ lost (g)" 0 to 0.50 against "time (s)" 0 to 300; curves drawn live; a shaded 30 s band; dashed 0.44 g level); **results strip** (three rows, mass in 30 s and rate); **particle lens** (scene 6: chip surface with H⁺ dots at two densities, a per-second hit counter); **energy-spread graph** (scene 8: v13's curve at T₁ and a new curve at T₂, the fixed Eₐ line, both tails shaded); **lever board** (scene 9: v13's funnel with the concentration dial wired to the inlet and the temperature dial wired mainly to the energy gate, thinly to the inlet); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v13):** concentration series slate blue shades (light 0.50, mid 1.00, dark 2.00); temperature series orange shades (20 °C uses the shared mid-slate control colour, 30 °C orange, 40 °C deep orange); rates teal; Eₐ amber dashed; tails amber; crossed items red strike; every data item carries "illustrative data".
- **Board layout (constant):** heading top left; the logging rig at the left; graph and results strip at the right; the laptop screen mirrors the right-hand graph small.

Author notes (not learner copy):
(a) 0.0100 mol CO₂ at 20 °C, 100 kPa is about 0.0100 × 8.314 × 293.15 ÷ 100 = 0.244 L, so a 100 mL syringe cannot hold it; the balance method avoids that and gives a mass directly. Data-logging balances (USB or serial output to logging software) are common school equipment; if a school lacks one, a phone video of the balance display read back frame by frame is a fallback (not shown).
(b) Model used to generate the illustrative data: dn/dt = −k(T) × [H⁺] × n₀ ÷ 60 × f^(2/3), with f = n ÷ n₀, k(20 °C) = 0.45, Eₐ = 30 kJ mol⁻¹ (Arrhenius factor 1.50 from 20 to 30 °C, 1.46 from 30 to 40 °C), [H⁺] falling as acid is used. Mass lost every 30 s (g, rounded to 0.01): 0.50 mol L⁻¹: 0, 0.05, 0.09, 0.13, 0.16, 0.19, 0.22, 0.24, 0.26, 0.28, 0.30 (300 s), 0.43 at 780 s, 0.44 at 900 s. 1.00 mol L⁻¹ (20 °C): 0, 0.09, 0.16, 0.22, 0.27, 0.32, 0.35, 0.37, 0.39, 0.41, 0.42 (300 s), 0.44 from 390 s. 2.00 mol L⁻¹: 0, 0.17, 0.28, 0.36, 0.40, 0.43, 0.44 (180 s). 30 °C: 0, 0.13, 0.23, 0.30, 0.35, 0.39, 0.41, 0.43, 0.43, 0.44 (270 s). 40 °C: 0, 0.18, 0.29, 0.36, 0.41, 0.43, 0.44 (180 s). Marble chips in HCl are partly diffusion-controlled; an apparent Eₐ near 30 kJ mol⁻¹ is a modest, plausible teaching value. Science check: confirm the size of the temperature effect is realistic for school chips, or ask for smaller factors.
(c) Total CO₂: MM(CaCO₃) = 100.09 g mol⁻¹; 1.00 ÷ 100.09 = 9.99 × 10⁻³ mol; × 44.01 = 0.440 g. HCl needed 0.0200 mol; supplied 0.0500, 0.100, 0.200 mol.
(d) A2: n(HCl) = 0.0500 L × 1.0 = 0.050 mol → n(H₂) = 0.025 mol → V = 0.025 × 24.79 = 0.620 L at 25 °C, 100 kPa; 0.5 mol L⁻¹ → 0.310 L. Zinc in excess: 5.0 g ÷ 65.38 = 0.0765 mol would need 0.153 mol HCl. The card does not need the molar volume; the graph shows the two levels.
(e) Safety: as in m2-v09 author note e, plus warming dilute acid in a thermostatic bath to at most 40 °C (no flame). Science check against current NSW school chemical-safety guidance.
(f) Pressure for gases (the site's key term) is not in this practical; the concentration explanation transfers to it and v15's catalytic converter attempt does not need it.
(g) Pronunciations: "H plus ions" for H⁺; "zero point zero zero three zero grams per second"; "two point zero zero moles per litre".

Main question: *How do temperature and concentration change the rate evidence?*
Entry knowledge: m3-v13; m2-v09, m2-v10; ws-v02, ws-v05.
Stops after: the plan, logged curves, comparisons over the same 30 s, collision explanations for both factors, limitations, two attempts. No surface area or catalysts.
Handoff: chem-y11-m3-v15, surface area and catalysts.

## Opening frame and final frame

- **Opening frame:** m3-v13's final frame exactly (Decisions).
- **Final frame (`chem-y11-m3-v15` opens on it):** left: the logging rig (balance, `y11c-flask-acid-plug-spent-v1.png` on the pan after the control run, laptop showing the control curve, 1.00 mol L⁻¹, 20.0 °C, levelled at 0.44 g). Right, two stacked panels separated by a thin slate rule. Upper panel: `y11c-chips-powder-watch-glasses-v1.png` (new; two watch glasses, marble chips and the same mass of marble powder) with labels "1.00 g chips" and "1.00 g powder" and a "?" chip "crush them?". Lower panel: `y11c-flask-acid-plug-spent-v1.png` small, label "hydrogen peroxide solution", beside `y11c-mno2-watch-glass-v1.png` (new; a small heap of black powder on a watch glass), label "manganese dioxide: not used up?". The amber chip "Same lever, or a different one?". The memory line "Hit often, hit hard, hit right." small at the top right. The chip "Next: How do surface area and catalysts change reaction rate differently?" at the bottom of the safe area.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here are the two controls we can set in a laboratory, concentration and temperature. To find out which lever each one pushes, we need evidence. So, quick prediction. We'll react the same marble chips with acid that's twice as concentrated, with the chips running out first. Will the total mass of carbon dioxide given off be bigger, the same, or **smaller**?

Visual: opens on m3-v13's final frame; the "Next" chip fades. On "concentration and temperature" both dials pulse. On "we need evidence" the funnel slides to the top right, small, and the logging rig fades in at the left: `y11c-top-pan-balance-v1.png` with `y11c-flask-chips-acid-plug-v1.png` on its pan, a coded readout. Heading writes: "Concentration and temperature: the evidence". On "twice as concentrated" two acid label chips "1.00 mol L⁻¹" and "2.00 mol L⁻¹" (slate shades); on "chips running out first" a teal chip "chips: limiting". Chips "bigger", "the same", "smaller". On "smaller" the 3 s `Countdown` ring runs.

### 2. the plan
> The same. The chips run out first, so they decide how much carbon dioxide forms. Concentration can change how fast it comes off, not how much. Now the plan. We'll run two fair tests, each changing one thing. In the first, only the acid's concentration changes, zero point five zero, one, and two moles per litre. In the second, only the temperature changes, twenty, thirty and forty degrees. Everything else stays the same, the mass and size of the chips, and a hundred millilitres of **acid**.

Visual: "the same" ticks; a ghost of two levelled curves at one height flashes (tag "same total, different speed"). On "Now the plan" a plan board writes at the right (ws-v02's layout): "Series 1: independent variable: HCl concentration (0.50, 1.00, 2.00 mol L⁻¹) at 20.0 °C"; on "only the temperature changes" "Series 2: independent variable: temperature (20.0, 30.0, 40.0 °C) at 1.00 mol L⁻¹"; a shared row "dependent variable: rate (mass of CO₂ lost in the first 30 s ÷ 30 s)". On "Everything else stays the same" the controls row: "1.00 g chips, similar size · 100.0 mL acid · same flask and plug". On "acid" a teal ring links the two series at "1.00 mol L⁻¹, 20.0 °C" with tag "shared control run".

### 3. logging the data
> To collect the data, the flask sits on a balance that's connected to a laptop. Logging software records the mass every second, so we get the whole curve, not just a few readings written down by hand. The cotton wool plug lets carbon dioxide out but stops acid spray escaping, so the mass that's lost is the carbon dioxide. Wear eye protection, and keep the acid dilute. The software plots the mass lost against **time**.

Visual: the rig at full width: a coded USB cable runs from the balance to `y11-laptop-blank-v1.png`. On "Logging software" gloss chip "data logging: software records a reading automatically at set times"; a column of time-stamped readings scrolls on the laptop screen "1 s, 2 s, 3 s ...". On "not just a few readings written down by hand" a grey ghost of six hand-plotted dots appears beside the smooth logged line, then fades. On "cotton wool plug" the plug is ringed; the dashed teal system boundary from m2-v09 draws round flask, acid, chips and plug; grey wisps "CO₂(g)" cross it outward and small blue droplets bounce off the plug. On "eye protection" a small safety chip "eye protection · dilute HCl (≤ 2.00 mol L⁻¹) · plug against spray" (no figure). On "time" the chips drop in by code, the flask cross-fades to `y11c-flask-chips-acid-plug-fizz-v1.png`, and the laptop screen and the right-hand `LineGraph` ("mass of CO₂ lost (g)" against "time (s)") start drawing the control run.

### 4. comparing rates fairly
> So how do we compare runs? Every curve rises steeply, then flattens when the chips are used up. The rate is the steepness. For a fair comparison, we use the same part of every curve, the first thirty seconds, when the rate is fastest. At one mole per litre and twenty degrees, zero point zero nine grams was lost in that time. So the rate is zero point zero nine over thirty, zero point zero zero three zero grams per **second**.

Visual: the control curve completes: 0 to 300 s, levelling at a dashed "0.44 g" line (tag "illustrative data"). On "The rate is the steepness" a `PenArrow` along the steep start. On "the first thirty seconds" a shaded vertical band from 0 to 30 s. On "zero point zero nine grams" a dot at (30, 0.09) with a dashed drop to both axes. On "zero point zero nine over thirty" the results strip's first row writes: "1.00 mol L⁻¹, 20.0 °C: 0.09 g in 30 s → 0.09 ÷ 30 = 0.0030 g s⁻¹" (teal).

### 5. the concentration series
> Now the concentration series. In the same thirty seconds, the weaker acid lost zero point zero five grams, and the strongest lost zero point one seven. So the rates go up with concentration, and doubling the concentration close to doubled the rate here. But look at the ends. All three curves level off at the same zero point four four grams, just at different **times**.

Visual: the board resets the graph to the control curve (mid slate). On "the weaker acid" the 0.50 mol L⁻¹ curve draws (light slate) and its dot at (30, 0.05); on "the strongest" the 2.00 mol L⁻¹ curve draws (dark slate), dot at (30, 0.17). The results strip completes: "0.50 mol L⁻¹: 0.05 g → 0.0017 g s⁻¹", "1.00 mol L⁻¹: 0.09 g → 0.0030 g s⁻¹", "2.00 mol L⁻¹: 0.17 g → 0.0057 g s⁻¹". On "doubling the concentration close to doubled the rate" a bracket from the 1.00 row to the 2.00 row "× 1.9" with tag "for this reaction". On "look at the ends" the dashed 0.44 g level pulses; the 2.00 curve meets it at 180 s and the control at 390 s (graph extends to 420 s); a grey tag at the right edge "0.50 mol L⁻¹ reaches 0.44 g after about 15 min". On "times" the three meeting points tick.

### 6. why concentration matters
> Why? A more concentrated acid has more hydrogen ions in every millilitre. So more of them hit the surface of the chips each second. That's hit often. The temperature is the same, so the fraction of collisions with enough energy doesn't change. More collisions each second, with the same success rate, means more effective collisions each second, and a faster **rate**.

Visual: the board splits into two particle lenses of a chip surface in acid: left "1.00 mol L⁻¹" (some H⁺ dots), right "2.00 mol L⁻¹" (twice the dots in the same window). On "more hydrogen ions in every millilitre" a 1 mL square outline counts dots in each ("H⁺ per mL: ×2"). On "hit the surface" hits flash on the surface with per-second counters "hits each second" (the right one about twice the left). On "hit often" the funnel's inlet lights in the corner memory line. On "fraction of collisions with enough energy doesn't change" both lenses show the same small proportion of hits flashing teal (successes), with a "same fraction" bracket; a small v13 energy-spread thumbnail with one unchanged curve. On "rate" the right lens's teal flashes come twice as often (counter "effective collisions each second ×2").

### 7. the temperature series
> Now the temperature series. The acid is warmed in a water bath, never over a flame, and a temperature probe checks it's at the target before the chips go in. In the first thirty seconds, the run at thirty degrees lost zero point one three grams, and the run at forty degrees lost zero point one eight, about twice the rate at twenty. And again, every curve ends at zero point four four **grams**.

Visual: the board returns to the rig. On "warmed in a water bath" `m6-water-bath-tube-v1.png` slides in at the left (tubes of acid in the rack), coded bath readout "30.0 °C"; on "never over a flame" a small crossed chip "no flame". On "a temperature probe checks" `m7-temp-probe-sleeve-stand-v1.png` beside it with a coded readout climbing to "30.0 °C" and a tick. The graph resets to the control curve (now in the shared mid colour, labelled "20 °C"). On "thirty degrees" the 30 °C curve draws (orange), dot (30, 0.13); on "forty degrees" the 40 °C curve (deep orange), dot (30, 0.18). The temperature results strip: "20.0 °C: 0.09 g → 0.0030 g s⁻¹", "30.0 °C: 0.13 g → 0.0043 g s⁻¹", "40.0 °C: 0.18 g → 0.0060 g s⁻¹"; on "about twice the rate at twenty" a bracket "× 2.0" between 20 and 40 rows. On "grams" the dashed 0.44 g level pulses where the curves meet it.

### 8. why temperature matters so much
> Why does warming do so much? Warmer particles move faster, so they collide a little more often. But the bigger effect is energy. Here's the spread of energies from last time. At a higher temperature, the curve shifts to the right and flattens. It isn't taller, because the number of particles hasn't changed. The activation energy hasn't moved, but now a much bigger tail lies beyond it. So a much larger fraction of collisions clear the bar. That's hit **hard**.

Visual: on "collide a little more often" the funnel inlet in the corner brightens slightly (thin arrow from the temperature dial). On "spread of energies" the board clears to v13's energy-spread graph: one curve labelled "20 °C" (mid colour), the dashed Eₐ line, its small amber tail. On "shifts to the right and flattens" a second curve "40 °C" (deep orange) draws, peak lower and further right. On "It isn't taller" a grey ghost of a wrongly taller curve flashes and is crossed (tag "same area: same number of particles"); the two areas briefly fill pale to show they match. On "The activation energy hasn't moved" the Eₐ line pulses and a lock icon sits on its foot. On "a much bigger tail" the 40 °C tail fills amber, clearly larger than the 20 °C tail. On "hard" the funnel's energy gate lights, wired by a thick arrow from the temperature dial.

### 9. two controls, two levers
> So the two controls push different levers. Concentration changes how often particles collide, not how much energy they have. Temperature changes both, but mostly the fraction with enough energy. Warm acid doesn't add energy to the reaction itself, it makes the particles move faster. And neither control changes how much product forms when the chips run out, only how fast it **arrives**.

Visual: the lever board: the funnel at the centre. On "Concentration changes how often" a slate cable from the concentration dial to the inlet ("hit often"); a small crossed chip "concentration gives particles more energy". On "Temperature changes both" a thin orange cable to the inlet and a thick orange cable to the energy gate ("hit hard"). On "doesn't add energy to the reaction itself" a crossed chip "heat adds energy to the reaction" and a corrected tag "particles move faster: higher average kinetic energy". On "how much product" the two levelled 0.44 g lines from scenes 5 and 7 return small; on "arrives" a teal chip "rate: how fast, not how much (when the chips run out first)".

### 10. how good is the evidence?
> How good is this evidence? The warm acid cools a little during the run, so the forty-degree rate is slightly low. Keeping the flask in the bath, or logging the temperature too, would fix that. Chips are never exactly the same size, so repeat each run three times and use the mean. And with a balance that reads to a hundredth of a gram, zero point zero five grams is only five steps, so a finer balance or a longer interval would give a sharper **comparison**.

Visual: three limitation rows at the right, each with its improvement: on "cools a little" the probe readout drifts "40.0 → 37.5 °C" (illustrative) beside the flask, row "warm acid cools → 40 °C rate a little low · keep the flask in the bath; log the temperature too". On "never exactly the same size" a watch glass outline with chips of uneven size, row "chip size varies → repeat three times, use the mean; sieve to one size". On "five steps" a step ruler from 0 to 0.05 g in five 0.01 g steps (ws-v02's step ruler), row "0.01 g balance: few steps in 30 s → 0.001 g balance or a longer interval". On "comparison" the three rows tick.

### 11. the levers, remembered
> So add two lines to the memory aid from last time. Hit often, hit hard, hit right. Concentration, hit often. Temperature, hit hard, and a little more **often**.

Visual: the memory line writes large: "Hit often, hit hard, hit right." Under it, in the explainer's handwriting style: "Concentration: hit often." (slate, with the inlet icon) and on "Temperature" "Temperature: hit hard, and a little more often." (deep orange, with the tail icon). On "often" both lines sit beside the funnel's inlet and gate.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A student drops identical pieces of magnesium ribbon into the same volume of dilute hydrochloric acid at four temperatures, and times how long each piece takes to disappear. Identify the independent variable and two controlled variables. Then explain, using collision theory, why the reaction is faster at higher temperature. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student investigates the effect of temperature on the rate of reaction between magnesium and dilute hydrochloric acid. Identical 2 cm pieces of magnesium ribbon are added to 50 mL portions of 0.50 mol L⁻¹ HCl held in a water bath at 20, 30, 40 and 50 °C, and the time for each piece to disappear is recorded. (a) Identify the independent variable and TWO controlled variables. (2 marks) (b) Explain, using collision theory, why the reaction is faster at higher temperatures. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The independent variable is temperature. Controls include the length of ribbon and the acid's volume and concentration. At higher temperature the particles have more kinetic energy, so a much larger fraction of collisions have at least the activation energy, and they collide a little more often too. More effective collisions each second, faster rate. Just saying they collide more often isn't **enough**.

Visual: card shrinks to the top. Rows: "IV: temperature of the acid" (orange); "Controls: length (mass) of Mg ribbon; volume and concentration of HCl" (slate); "Higher T → higher average kinetic energy → much larger fraction of collisions with energy ≥ Eₐ (and slightly more collisions) → more effective collisions per second → faster" (teal), with the two-temperature energy-spread thumbnail. On "isn't enough" a chip "only because the particles collide more often" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Excess zinc granules react with fifty millilitres of hydrochloric acid, once at one mole per litre and once at zero point five. The graph shows the hydrogen collected. Which curve used the one mole per litre acid? Explain, using the graph and collision theory. Then explain why the final volumes are different. Pause here to answer.

Visual: `QuestionCard`: "Excess zinc granules were added to 50.0 mL of hydrochloric acid at 25 °C, once with 1.0 mol L⁻¹ HCl and once with 0.5 mol L⁻¹ HCl. The volume of hydrogen gas collected is shown in the graph. (a) Which curve, A or B, shows the reaction with 1.0 mol L⁻¹ HCl? Justify your answer using the graph and collision theory. (2 marks) (b) Explain why the final volumes of hydrogen are different. (2 marks)" with a coded `LineGraph` "volume of H₂ (mL)" 0 to 700 against "time (s)": curve A steep, levelling at 620 mL; curve B shallower, levelling at 310 mL (tag "illustrative data"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Curve A. It's steeper at the start, because more hydrogen ions in each millilitre means more collisions with the zinc each second. And here the zinc is in excess, so the acid runs out first. Twice the acid gives twice the hydrogen, six hundred and twenty millilitres against three hundred and ten. The curves only end together when the other reactant runs **out**.

Visual: card shrinks. Rows: "A: steeper start → faster → 1.0 mol L⁻¹: more H⁺ per mL → more collisions per second" (slate, the start of A ringed); "Zn in excess → HCl limiting → 0.050 mol HCl gives twice the H₂ of 0.025 mol" (teal); "620 mL vs 310 mL" with the two levels ringed. On "runs out" a chip "both curves should end at the same volume" fades in and is crossed, with the note "only when the other reactant runs out first (like this video's chips)". Hold about 1 second.

### 16. conclusion and handoff
> So concentration speeds a reaction by making collisions more frequent, and temperature mainly by giving more collisions enough energy, and the logged curves show both as a steeper start. There are two more ways to speed reactions up. You could crush the chips into powder, or, for some reactions, add a substance that isn't used up. Do they push the same lever, or different **ones**?

Visual: the memory line returns small at the top right. On "more frequent" the concentration cable on the lever board pulses; on "enough energy" the temperature cable. On "steeper start" the control, 2.00 mol L⁻¹ and 40 °C curves flash together. On "crush the chips into powder" the board settles into the final frame: the rig at the left with the spent flask and the control curve on the laptop; upper right panel `y11c-chips-powder-watch-glasses-v1.png` with "1.00 g chips" and "1.00 g powder" and the chip "crush them?". On "a substance that isn't used up" the lower right panel: the peroxide flask and `y11c-mno2-watch-glass-v1.png` with "manganese dioxide: not used up?". On "ones" the amber chip "Same lever, or a different one?" and the chip "Next: How do surface area and catalysts change reaction rate differently?" write. Hold about 2 seconds. This is the final frame (m3-v15 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Fair test: change one variable at a time; keep the chip mass and size and the acid volume the same. Data logging records the mass every second.
2. Compare rates over the same interval (mass lost in the first 30 s ÷ 30 s). A steeper start means a faster rate. If the chips run out first, the total gas is the same.
3. Higher concentration: more particles per mL → more collisions per second; same fraction effective → faster.
4. Higher temperature: higher average kinetic energy → much larger fraction with energy ≥ Eₐ (and slightly more collisions) → faster. The hotter curve is lower, broader, shifted right, same area.

Memory aid (large, on the notes screen): *Concentration: hit often. Temperature: hit hard, and a little more often.*

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why the totals match (1, 2: the limiting chips); why logging helps (3); why compare the same interval (4); why concentration speeds it (6: more H⁺ per millilitre, same fraction); why temperature does so much (8: the tail beyond the fixed Eₐ grows); why the curve is not taller (8: same particles); why the 40 °C value is low (10).
- **Misconceptions addressed:** more concentrated gives more product (1, 2, A2 shows the condition); temperature only raises collision frequency (8, crossed in A1); concentration gives particles energy (9); heat "adds energy to the reaction" (9); a taller hotter curve (8); curves must end together (crossed in A2).
- **One idea at a time:** prediction (1), plan (2), logging (3), measuring rate (4), concentration result then cause (5, 6), temperature result then cause (7, 8), comparison (9), limits (10).
- **Video makes it easier:** the logged curve draws live as the chips fizz (3); the same 30 s band on every curve (4, 5, 7); H⁺ counts in a 1 mL window and hit counters (6); the hotter curve redraws with a crossed taller ghost and a growing tail beyond a locked Eₐ line (8); cables from dials to the funnel's inlet and gate (9).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 30 s and 27 s (feedback 1 is at the top of the brief-answer range; trim option in Open decisions).
- **Avoided double teaching:** rate, Eₐ, the distribution, effective collisions (m3-v13); plugged flask and system (m2-v09); fair-test variables (ws-v02); error language (ws-v05, not re-taught).
- **Syllabus coverage:** `C3-IQ3-01` practical investigation with digital technologies, collecting and analysing data, for temperature and concentration (2 to 5, 7, 10, A1, A2); `C3-IQ3-03` explaining rate changes with collision theory (6, 8, 9, A1, A2).
- **Out of scope by design:** surface area and catalysts (v15); orders and rate laws; Arrhenius; tangents.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 5 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Independent variable: the temperature of the acid (1 mark). Controlled variables (any two): length or mass of magnesium ribbon; volume of acid; concentration of acid; same surface condition of the ribbon (1 mark). (b) At a higher temperature the particles have a higher average kinetic energy (1 mark), so a much larger fraction of collisions have energy at least equal to the activation energy, and collisions are also slightly more frequent (1 mark); so there are more effective collisions per second and the rate is greater (1 mark). Classic mistake (crossed): "only because the particles collide more often".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) Curve A (1 mark): its initial gradient is steeper, showing a faster rate; the 1.0 mol L⁻¹ acid has more H⁺ ions per unit volume, so more collisions with the zinc surface per second and more effective collisions per second (1 mark). (b) Zinc is in excess, so the hydrochloric acid is the limiting reactant (1 mark); 50.0 mL of 1.0 mol L⁻¹ HCl contains twice the moles of HCl of the 0.5 mol L⁻¹ solution, so it produces twice the hydrogen (620 mL against 310 mL) (1 mark). Classic mistake (crossed): "both curves should end at the same volume".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Investigation | 1.00 g CaCO₃ (9.99 × 10⁻³ mol, limiting); 100.0 mL HCl at 0.50, 1.00, 2.00 mol L⁻¹ (0.0500, 0.100, 0.200 mol; 0.0200 mol needed); total CO₂ 0.44 g | 1 to 5, 7 |
| Concentration series (20.0 °C, illustrative) | first 30 s: 0.05, 0.09, 0.17 g; rates 0.0017, 0.0030, 0.0057 g s⁻¹; 2.00 vs 1.00: × 1.9; levels at 0.44 g at about 900, 390, 180 s | 4, 5 |
| Temperature series (1.00 mol L⁻¹, illustrative) | 20.0, 30.0, 40.0 °C: 0.09, 0.13, 0.18 g; 0.0030, 0.0043, 0.0060 g s⁻¹; 40 vs 20: × 2.0; levels at 390, 270, 180 s | 7 |
| Limitations | 40.0 → 37.5 °C drift (illustrative); 0.05 g = five 0.01 g steps | 10 |
| A1 | 2 cm Mg ribbon; 50 mL of 0.50 mol L⁻¹ HCl; 20, 30, 40, 50 °C | 12, 13 |
| A2 | 50.0 mL HCl at 1.0 and 0.5 mol L⁻¹ (0.050, 0.025 mol); H₂ 620 and 310 mL at 25 °C, 100 kPa; zinc in excess | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- MM(CaCO₃) = 40.08 + 12.01 + 3 × 16.00 = 100.09; 1.00 ÷ 100.09 = 9.991 × 10⁻³ mol; × 44.01 = 0.4397 g → 0.44 g; HCl needed 0.01998 mol.
- 0.100 L × 0.50, 1.00, 2.00 = 0.0500, 0.100, 0.200 mol (all excess).
- 0.05 ÷ 30 = 0.00167 → 0.0017; 0.09 ÷ 30 = 0.0030; 0.17 ÷ 30 = 0.00567 → 0.0057; 0.13 ÷ 30 = 0.00433 → 0.0043; 0.18 ÷ 30 = 0.0060.
- 0.0057 ÷ 0.0030 = 1.9 (from unrounded 0.00567 ÷ 0.0030 = 1.89); 0.0060 ÷ 0.0030 = 2.0.
- Model curves as author note b (k(20 °C) = 0.45, Eₐ = 30 kJ mol⁻¹; exp(30000 ÷ 8.314 × (1/293.15 − 1/303.15)) = 1.50; 30 to 40 °C: 1.46).
- 0.0100 mol CO₂ at 20 °C, 100 kPa: 0.0100 × 8.314 × 293.15 ÷ 100 = 0.244 L.
- A2: 0.0500 × 1.0 = 0.050 mol HCl → 0.025 mol H₂ → × 24.79 = 0.620 L; half: 0.310 L; 5.0 g Zn ÷ 65.38 = 0.0765 mol needs 0.153 mol HCl (excess zinc).

## Memory aid check

- **"Concentration: hit often. Temperature: hit hard, and a little more often."** Extends v13's "Hit often, hit hard, hit right." Assumptions checked: concentration raises collision frequency and leaves the energy distribution unchanged (site lesson 12 table, scene 6); temperature mainly raises the fraction with energy ≥ Eₐ and slightly raises frequency (site table "Slight increase", "Large increase"; scene 8); neither changes Eₐ or orientation. Holds for both attempts. Pressure of gases would be "hit often" too (not taught here).
- **Considered, not used:** the "10 °C doubles the rate" rule (site note 1; reaction-specific); the glow-stick hook from site lesson 11 (a brightness comparison, not a measured rate; the marble-chip series gives real rate data).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,180 characters**, 17 scenes (per scene: 354, 490, 416, 425, 367, 364, 392, 459, 384, 456, 156, 358, 402, 342, 360, 380, 75). At 13.3 characters per second the speech is about 465 s; add about 10 s of settling (curve draws in 3, 5 and 7, the second distribution in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 556 s**.

## Scene list and build ids

Lesson key `c-y11-m3-v14` (route chem-y11-m3-v14; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v14`.

In order (17 scene headings, all `### N.`): hook-prediction, plan, logging, comparing-rates, concentration-series, why-concentration, temperature-series, why-temperature, two-levers, evidence-limits, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m3-v13's final frame into scene 1 by camera continue (the funnel shrinks to the corner); 1 to 2 camera continue; 2 to 3 camera continue (the rig grows); 3 to 4 camera continue; 4 to 5 camera continue (the graph keeps the control curve); 5 to 6 camera push into the chip surface; 6 to 7 pull back to the rig; 7 to 8 clear change to the distribution; 8 to 9 camera continue (the funnel returns); 9 to 10 clear change; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v14-learning-review.md`, `checks/c-y11-m3-v14-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (1402 × 1122): scenes 1 to 5, 7, 10, final frame.
- `public/assets/biology/y11-laptop-blank-v1.png` (1800 × 1200; open laptop with a blank dark screen): scenes 3 to 5, 7, final frame; the screen area holds the coded graph.
- `public/assets/biology/m6-water-bath-tube-v1.png` (2000 × 2000; thermostatic bath, lid open, tubes in a rack): scene 7.
- `public/assets/chemistry/m7-temp-probe-sleeve-stand-v1.png` (2000 × 2000; probe on a stand with a cable): scenes 7, 10.
- The plugged flask set requested in `chem-y11-m2-v08.md` and `chem-y11-m2-v09.md`: `y11c-flask-chips-acid-plug-v1.png`, `y11c-flask-chips-acid-plug-fizz-v1.png`, `y11c-flask-acid-plug-spent-v1.png`: scenes 1 to 5, 7, final frame.
- **Inspected, not used:** `phys-y11-data-logger-v1.png` (a grey box with two sockets; a laptop reads more clearly as logging software); `public/assets/hscscience/chem-y11-m3/l11/l11HookGlowStick.png` (site cartoon style); `c8-stopwatch-v1.png` (A1 is timed, but the card is text only).

Need (new plates, Codex; both used first in this video's final frame and through v15):
1. `y11c-chips-powder-watch-glasses-v1.png`: final frame; v15 scenes 1 to 3.
2. `y11c-mno2-watch-glass-v1.png`: final frame; v15 scenes 6 to 8.

Coded: USB cable, laptop-screen graph, readouts, system boundary and wisps, plan board, `LineGraph`s, bands and dots, results strips, particle lenses and counters, distributions, lever board and cables, step ruler, chips, cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v14 and v15)

Style as `y11c-top-pan-balance-v1.png` and `m6-conical-flask-v1.png` (painted, clean ink outline, soft shading, transparent PNG with alpha channel, no background, no shadow plane, no text or labels, no people, hands or faces). The watch glass matches `y11c-watch-glass-v1.png` (requested in Module 1) if it exists.

1. `y11c-chips-powder-watch-glasses-v1.png` (about 2000 × 1000 px): two identical clear glass watch glasses side by side with a clear gap. Left: five or six small white-grey marble chips (the same chips as in the plugged flask set). Right: a low, even heap of fine white marble powder of about the same volume. Both seen from slightly above.
2. `y11c-mno2-watch-glass-v1.png` (about 1200 × 900 px): one clear glass watch glass holding a small heap of fine black powder (manganese(IV) oxide), matte, slightly granular.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used"; confirm the model curves in author note b reproduce the listed readings.
2. Confirm the site content used matches `module3/lesson12.sa.html` (factor table rows; the temperature card's curve features, equal area and Common Error; the concentration paragraph and Common Error; the safety box) and lesson 11's temperature trap.
3. Confirm the equations used on cards are balanced: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; Zn + 2HCl → ZnCl₂ + H₂; Mg + 2HCl → MgCl₂ + H₂.
4. Confirm both attempt cards are original, carry every needed fact (A2 states excess zinc and shows both final volumes), and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (chips and plug move by code); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m3-v13's final frame, and send the final frame to the m3-v15 designer.

## YouTube metadata (draft)

Title: How Temperature and Concentration Change Reaction Rate: A Data-Logging Investigation | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

React marble chips with hydrochloric acid on a balance that logs the mass every second. Plan two fair tests, compare the rate over the same first 30 seconds, and see why concentration and temperature change how fast the gas comes off, not how much. Then explain the evidence with collision theory: more frequent collisions for concentration, and a much larger fraction of collisions with enough energy for temperature, shown on the Maxwell-Boltzmann distribution. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct a practical investigation, using appropriate tools (including digital technologies), to collect data, analyse and report on how the rate of a chemical reaction can be affected by a range of factors, including but not limited to:"
"temperature"
"concentration of reactant(s)"
"explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Previous: Why do collision energy and orientation control reaction rate? Next: How do surface area and catalysts change reaction rate differently?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Size of the temperature effect (science check).** The illustrative data double the rate from 20 to 40 °C (apparent Eₐ about 30 kJ mol⁻¹). Confirm this is realistic for school marble chips in HCl; if the check wants a smaller effect, regenerate with the author note b model (only scene 7's spoken masses and the strip change).
- **2. Data-logging balance (science check, root).** Confirm a USB data-logging balance is a fair "digital technology" example for NSW schools; the alternative is a gas pressure sensor in a sealed flask (`y11c-gas-pressure-sensor-v1.png`, Module 2), which raises the capped-vessel question (root decision m2-3), so it is not used.
- **3. Two new plates (root).** Both appear first in the final frame and carry v15. Fallback if they are late: coded watch-glass outlines holding a grey chip cluster, a flat white mound and a flat black mound, tagged "diagram" (worse; the powders should read as real materials).
- **4. Safety (science check).** Warming dilute HCl up to 40 °C in a thermostatic bath, 2.00 mol L⁻¹ as the strongest acid, and A1's 50 °C bath for magnesium. Confirm against current NSW school chemical-safety guidance.
- **5. Feedback 1 length (learning review).** About 30 s. Trim option: drop "and they collide a little more often too" (about 40 characters); the card row keeps it.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is "the same 30 seconds" comparison followed when the rates are shown but masses are spoken; does scene 8's equal-area idea land at playback speed), then the science check and Codex error check.
- Checker output (5 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
