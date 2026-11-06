# Year 11 Chemistry M3 V13: Collision theory. Why do collision energy and orientation control reaction rate? (design)

Status: Revision 3 (7 Nov 2026): brief 219 error-check findings resolved (root). Ready to voice. Previously Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,154 characters, 17 scenes, about 553 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: thirteenth Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 67, between `chem-y11-m3-v12` and `chem-y11-m3-v14`; the first of three reaction-rate videos (v13 collision theory, v14 temperature and concentration, v15 surface area and catalysts). A concept video with one short rate calculation. Templates: `chem-y11-m2-v20.md` (same series layout and colour habits), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m3-v13` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Define rate and successful collisions; distinguish frequency, activation energy and orientation. Stop before experimental factor comparisons."; next handoff: "How do temperature and concentration change the rate evidence?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson11.sa.html` (SHA256 `cf5f403acb6076f32aac62de752ab1b82d7813b9d8768fe70038591a7a8d902f`, recomputed, matches the route), sections `l11-defining-reaction-rate-title` and `l11-collision-theory-the-particle-level-explanat-title`, with the key terms, the Must Know and Common Error boxes, worked example 1 and the traps. Used: the definition of rate as change per unit time with its three measured forms (mL/s, g/s, mol L⁻¹ s⁻¹); "Rate is fastest at the start ... it is not constant" (Common Error); worked example 1's marble-chip gas data and both average rates, unchanged (0.53 and 0.067 mL/s); worked example 1 (c)'s explanation of the falling rate (fewer collisions per second, fraction effective unchanged at constant temperature); the two conditions and "Always state BOTH conditions" (Must Know); the frequency versus effectiveness Common Error; the orientation trap ("As long as particles have energy ≥ Eₐ, the reaction will occur"). Not used here: the energy profile card (`chem-y11-m4-v01` owns energy profiles), the variables preview table and glow sticks (v14 and v15 own the factors), the "1 in 10⁹ collisions" and "10³⁰ per second" insight (site note 2).

Owner rules applied: one learner question; no people, hands or faces (apparatus alone; particles and graphs coded; the high-jump comparison is spoken and drawn only as a bar on the graph, never as a figure); real apparatus as painted plates; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame. Data from the site's worked example are the site's; the attempt 2 data are illustrative and tagged.

Syllabus content (Chemistry Stage 6, 2017, Module 3, Rates of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ3-02`: "investigate the role of activation energy, collisions and molecular orientation in collision theory"
- `C3-IQ3-03`: "explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v12's final frame (zinc and aluminium in acid, both spontaneous; "bigger E°cell = faster" crossed). Teaches: a cell potential says a reaction can happen, not how fast; molecules collide billions of times a second, so most collisions must fail; reaction rate as change in amount over time, with the site's gas-syringe data (average rate over an interval; a steeper graph is faster; rate falls as reactants are used up); collision theory (particles must collide); activation energy as the minimum collision energy, with a spoken "bar" comparison; the spread of particle energies (Maxwell-Boltzmann distribution named, read at one temperature only, with the Eₐ line and shaded tail); orientation with the CO + NO₂ model; effective collisions need both conditions; rate depends on effective collisions per second (frequency and the fraction that succeed); frequency versus effectiveness; the falling rate explained. Not taught: changing temperature, concentration, surface area or catalysts (v14, v15), the temperature shift of the distribution (v14), energy profile diagrams and ΔH (m4-v01), tangents for instantaneous rate (author note d).

## Decisions

- **Learner question (route wording kept).** "Why do collision energy and orientation control reaction rate?" The answer, in order: most collisions fail, or reactions would be instant (1, 2); rate is how fast amounts change (3, 4); a collision must clear the activation energy (6, 7) and meet the right way round (8); only collisions doing both are effective, and the rate counts effective collisions per second (9); fewer collisions per second slows a reaction even when the fraction that succeed stays the same (10).
- **Opening frame (equals `chem-y11-m3-v12.md`'s final frame; reconciled 5 November).** m3-v12 was designed in parallel; this design was first written against an assumed frame and then reconciled to v12's written final frame once it appeared. The frame: left third, the E° ladder small (K −2.94, Mg −2.36, Al −1.68, Zn −0.76, Fe −0.44, H₂ 0.00 dashed, Cu +0.34, Ag +0.80) with the Al and Zn tiles ringed teal; right two thirds, `m6-zinc-acid-v1.png` ("Zn: E°cell = +0.76 V", tick "spontaneous") and `y11c-aluminium-acid-v1.png` ("Al: E°cell = +1.68 V", tick "spontaneous"); a crossed red chip "bigger E°cell = faster"; the amber chip "how fast? particles must meet" with a small clock glyph; the "Next" chip, which fades. Scene 1's first two sentences use it (aluminium's bigger cell potential did not make it faster). If v12's final frame changes, only those two sentences and the first visual cue change.
- **Hook and prediction (scenes 1, 2).** The surprise: a molecule in air collides several billion times a second (author note a), so if every collision reacted, reactions would be over in a tiny fraction of a second. 3 s prediction: hours, minutes or less than a second? Answer: less than a second. The marble chips from m2-v09 and m2-v20 fizzed for minutes, so most collisions must fail. This makes "why do most collisions fail?" the question that the rest of the video answers.
- **Rate (scenes 3, 4; site worked example 1, data unchanged).** "Reaction rate: how quickly a reactant is used up or a product forms" with "rate = change in amount ÷ time taken". Gas syringe readings 0, 18, 32, 42, 48, 51, 52 mL at 0 to 180 s every 30 s (the site's numbers, tagged "data: HSCScience worked example"). Average rate 0 to 60 s: 32 ÷ 60 = 0.53 mL s⁻¹; 120 to 180 s: 4 ÷ 60 = 0.067 mL s⁻¹; eight times slower. Units chip: mL s⁻¹ (gas volume), g s⁻¹ (mass lost), mol L⁻¹ s⁻¹ (concentration). The rig is m2-v20's gas syringe set-up (recalled, not re-taught).
- **Reaction model for collisions (scenes 5, 6, 8).** CO(g) + NO₂(g) → CO₂(g) + NO(g): one oxygen atom moves across in the collision, so the orientation requirement is visible (the carbon end of CO must strike an oxygen atom of NO₂). A standard textbook orientation example (author note b). Atoms in HSC model colours: carbon dark grey, oxygen red, nitrogen blue; balls of sensible relative size. The marble-chip reaction is not used for orientation because a solid surface hides it.
- **Activation energy (scene 6).** Plain meaning first: "the smallest collision energy that can start breaking the old bonds so new ones can form". Spoken comparison: a bar the collision has to clear (a high-jump bar, never drawn as a person). The bar is the same horizontal "Eₐ" line that becomes the vertical Eₐ line on the energy-spread graph in scene 7; v14 moves the curve and v15 moves the line, so the visual carries through three videos.
- **Energy spread (scene 7).** One Maxwell-Boltzmann curve at one temperature: axes "number of particles" and "kinetic energy"; curve starts at zero, peaks, long tail; dashed Eₐ line; the area to its right shaded amber, "enough energy". Named once, as the site's supporting depth ("Beyond the syllabus" box): the idea, not the name, is the point. No second temperature (v14).
- **Effective collision and the funnel (scene 9).** A coded funnel: a stream of collision dots enters "all collisions each second"; most drop out at the gate "energy ≥ Eₐ?"; some more drop out at "right orientation?"; a few pass as "effective collisions each second → rate". No numbers on the funnel (the real fraction varies enormously between reactions; site note 2). Spoken: the rate depends on how often particles collide and the fraction that succeed.
- **Frequency versus effectiveness (scene 10; site Common Error).** Two labelled meters: "collision frequency: how often" and "fraction effective: how many succeed". The falling rate in scene 4 is explained with them: the acid becomes less concentrated (fewer H⁺ per millilitre; Revision 3: not "weaker", which would mean acid strength) and the chips shrink (less surface to hit), so there are fewer collisions per second; same temperature, so the same fraction succeeds; fewer effective collisions per second. Revision 2 (brief 183): the shrinking solid surface is now spoken, because worked example 1 does not say which reactant limits; in A2 (acid in excess) the feedback uses the shrinking magnesium surface.
- **Memory aid:** "Hit often, hit hard, hit right." (see "Memory aid check"), scene 11.
- **Attempts (original wording, HSC style).** A1 (conditions, new reaction): 2HI(g) → H₂(g) + I₂(g); explain why only a small fraction of collisions between HI molecules produce products. Model: energy below Eₐ (bounce apart) and wrong orientation (the two hydrogen atoms must come together); crossed "HI molecules do not collide often enough" (frequency does not explain a fraction). A2 (rate data, illustrative): magnesium with excess dilute HCl at a constant 25 °C, hydrogen volumes 0, 24, 40, 50, 56 mL at 0, 20, 40, 60, 80 s; average rates 1.2 and 0.30 mL s⁻¹; explanation as scene 10; crossed "the particles lose energy as the reaction goes on".
- **Mistake scene:** none separate. "Every collision reacts" (1, 2); "rate is constant" (4); "enough energy is enough" (8, site trap); "frequency and effectiveness are the same thing" (10); "particles slow down as the reaction goes" (crossed in A2).
- **Handoff (route next: `chem-y11-m3-v14`, "How do temperature and concentration change the rate evidence?").** Scene 16: two of the three levers can be pushed in a laboratory by changing concentration and temperature; which does what, and how would the data show it? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Lesson 11 formula reference: "Temperature is the only factor that changes the proportion of particles exceeding Eₐ". The same lesson's variables table (and lesson 12) says a catalyst increases that proportion by lowering Eₐ. Suggest "Temperature is the only factor that changes the energy distribution of the particles; a catalyst changes the proportion above Eₐ by lowering Eₐ".
  2. Lesson 11 collision theory Insight: "For a typical reaction at room temperature, only about 1 in 10⁹ collisions is effective ... on the order of 10³⁰ per second in a typical solution". The fraction of effective collisions varies over many orders of magnitude between reactions, so no single "typical" value is defensible, and no source is given for either number. Suggest removing the numbers: "For many reactions only a tiny fraction of collisions are effective, yet the total number of collisions each second is so enormous that the reaction still proceeds at a measurable rate."
  3. Lesson 11 key term "Activation energy (Ea) ... must be exceeded for effective collisions" against the Must Know "kinetic energy ≥ activation energy". Minor: suggest "must be equalled or exceeded" for consistency.
  - Checked and correct: worked example 1 (a) 32 ÷ 60 = 0.53 mL/s, (b) 4 ÷ 60 = 0.067 mL/s; drill 4 (18 ÷ 30 = 0.60 mL/s); drills 2 and 5 (sign and Eₐ reading); the two-condition definitions.
- **Cause chain taught, in order:** (1) if every collision reacted, reactions would be instant, so most fail (1, 2); (2) rate is change in amount per unit time, and it falls as reactants are used (3, 4); (3) a collision with less than the activation energy can't break the old bonds, so the particles bounce apart (5, 6); (4) particles have a spread of energies, so only the fast tail clears Eₐ (7); (5) the wrong way round, no atom can move across, so even a hard hit fails (8); (6) only collisions with both are effective, and the rate counts them per second (9); (7) fewer reactant particles per millilitre means fewer collisions per second, and at constant temperature the same fraction succeed, so the rate falls (10).
- **Entry knowledge:** Stage 5 particle model (particles move, faster when hotter; reactions rearrange atoms by breaking and forming bonds); m2-v09 and m2-v20 (the marble-chip reaction and gas syringe); m2-v10 (concentration, on a chip only); m3-v12 (cell potentials predict spontaneity, scene 1 only).
- **Learner-visible vocabulary (plain meaning at first use):** reaction rate (3); collision theory (5); activation energy, Eₐ (6); Maxwell-Boltzmann distribution (7, named once as "this graph of the spread"); orientation (8); effective collision (9); collision frequency (10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **gas rig** (scenes 2 to 4, 10: `y11c-flask-chips-acid-bung-fizz-v1.png` with the coded tube and `c4a-syringe-barrel-v1.png` plus `c4a-syringe-plunger-v1.png`; the plunger moves out with the readings); **volume-time graph** (`LineGraph`: "V (mL)" against "t (s)", the seven site points, two gradient triangles); **collision stage** (scenes 5, 6, 8: a dark panel where CO and NO₂ ball models drift, collide and either bounce or swap an oxygen atom; a small coded "collision energy" bar beside each pair with the dashed Eₐ level); **energy-spread graph** (scene 7: `LineGraph` with one smooth Maxwell-Boltzmann curve, the dashed Eₐ line, the shaded tail); **funnel** (scene 9); **two meters** (scene 10); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`. Reuse: the Year 12 `chem-m5-c03` collision strip idea (slow bump, hard bump) restyled into this collision stage; no legacy code.
- **Colour key:** volumes slate blue; rates teal; activation energy amber dashed; the shaded "enough energy" tail amber at 40% opacity; orientation green tick or red cross on the contact point; carbon dark grey, oxygen red, nitrogen blue, hydrogen white, iodine purple; crossed items red strike; earlier rows dimmed.
- **Board layout (Revision 2, high-risk redesign):** heading top left. Revision 1 kept the gas rig and graph for scenes 2 to 4 (about 87 s) and the collision stage for scenes 5 to 8 (about 115 s). Revision 2 stages, each under about 55 s: m3-v12's beakers, then the air box (1); the painted gas rig large (2); the table and graph at full width with the rig as a thumbnail (3); the sliding-window simulation on the graph (4); the collision stage at full width (5, 6, about 55 s with the energy meter arriving in 6); the energy-spread graph large with the stage small (7); the stage again with orientation replays (8); the funnel with live tally bars (9); the painted chips with a surface lens and two meters (10); the memory card (11); question cards (12 to 15); the final layout (16).
- **Colour roles (Revision 2, fixed for the whole video):** volumes slate blue; rates and the sliding window teal; activation energy amber dashed; the shaded "enough energy" tail amber at 40% opacity; orientation green tick or red cross on the contact point; carbon dark grey, oxygen red, nitrogen blue, hydrogen white, iodine purple; collision frequency slate; fraction effective teal; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; data-source tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); the sliding-window readout, the energy meter reading and framed rates about 52 px; table cells and graph axis labels 32 to 36 px; gloss cards 34 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (source tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the sliding window (scene 4) and the live collision stage (5, 6, 8).** The window: a teal 60 s window slides along the volume-time curve in 30 s steps while the syringe plunger thumbnail tracks the volume, and its gradient triangle and live readout (52 px) recompute "rate = ΔV ÷ 60 s": 0.53, 0.40, 0.27, 0.15, then 0.067 mL s⁻¹. The student watches the rate fall as the curve flattens. The collision stage: each colliding pair drives a live energy meter against the dashed activation energy line, and the outcome (bounce or react) follows the reading and the contact point.

Author notes (not learner copy):
(a) Collision frequency of an N₂ molecule in air at 25 °C and 100 kPa: z = √2 π d² v̄ (P/kT), with d ≈ 3.7 × 10⁻¹⁰ m, v̄ = √(8RT/πM) ≈ 475 m s⁻¹, P/kT ≈ 2.43 × 10²⁵ m⁻³: z ≈ 7 × 10⁹ s⁻¹. "Several billion times every second" is safe. Python check below.
(b) CO + NO₂ → CO₂ + NO: kept as a teaching model of the orientation requirement (one oxygen atom moves across in the collision). Attribution corrected in Revision 2 (brief 183): OpenStax Chemistry 2e section 12.5 uses CO with O₂ for its orientation figure, not CO with NO₂, so it is not the source of this model. Codex to cite a primary teaching source for the CO + NO₂ orientation model if one is found; otherwise it stays an uncited model drawn from the balanced equation. The reaction and the narration are unchanged.
(c) Worked example 1 does not say which reactant is in excess. Revision 2 (brief 183): scene 10 now names both causes of fewer collisions per second (less concentrated acid and a shrinking chip surface; Revision 3 wording), so the falling rate is not attributed to acid depletion alone. In A2 the acid is in excess, so the feedback uses the shrinking magnesium surface. Either way the explanation (fewer collisions per second, same fraction effective at the same temperature) holds.
(d) Average rate over an interval only; instantaneous rate from a tangent is mentioned on the site as a Common Error remark and is not needed for this route stop.
(e) Pronunciations: "C O plus N O two makes C O two plus N O"; "two H I makes H two plus I two"; "E a" is never spoken (the narration says "the activation energy"); "Maxwell-Boltzmann" spoken as written.
(f) The Maxwell-Boltzmann curve is drawn for illustration (shape of the 3D kinetic-energy distribution, f(E) ∝ √E e^(−E/kT)); no values on the axes.

Main question: *Why do collision energy and orientation control reaction rate?*
Entry knowledge: Stage 5 particle model; m2-v09, m2-v20 (marble chips, gas syringe); m3-v12 (scene 1 only).
Stops after: rate defined and calculated over an interval; effective collisions (energy and orientation); frequency versus fraction effective; the falling rate explained. No factor comparisons.
Handoff: chem-y11-m3-v14, temperature and concentration.

## Opening frame and final frame

- **Opening frame:** m3-v12's final frame exactly (Decisions; reconciled to `chem-y11-m3-v12.md` as written on 5 November).
- **Final frame (`chem-y11-m3-v14` opens on it):** left: the gas rig small (`y11c-flask-chips-acid-bung-fizz-v1.png`, coded tube, syringe at 52 mL) over the finished volume-time graph. Right: the funnel from scene 9, smaller, with its three labels "hit often", "hit hard", "hit right". Under the funnel two coded control dials: "concentration" (slate) and "temperature" (deep orange), each with a small "?" tag; a pen arrow from "concentration" to "hit often" with a "?" and one from "temperature" to "hit hard" with a "?" (the arrows are questions, not answers). The amber chip "Which lever does each one push, and how would the data show it?". The chip "Next: How do temperature and concentration change the rate evidence?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Last time, cell potentials told us that zinc and aluminium will both react with acid. But aluminium's bigger cell potential didn't make it react faster. A cell potential says nothing about how fast. Here's something surprising. In the air around you, each molecule collides with other molecules several billion times every second. So, quick prediction. If every collision made a reaction happen, would a reaction take hours, minutes, or less than a **second**?

Visual: opens on m3-v12's final frame; the "Next" chip fades and the amber chip "how fast? particles must meet" grows a little. On "aluminium's bigger cell potential" the crossed chip "bigger E°cell = faster" pulses and the aluminium beaker's few bubbles are ringed. On "says nothing about how fast" both ticks "spontaneous" stay and a grey tag "cell potential: will it react? not how fast" writes under them. The opening beakers are m3-v12's painted plates, so the first frame carries a picture; a teal hand tag "spontaneous, but slow" sits on the aluminium beaker with a pen ring on its bubbles. On "In the air around you" the board clears (stage change; about 20 s on the air box) to a dark particle box of air (coded N₂ and O₂ dots, grey and red pairs) with one molecule ringed by a `ScribbleCircle`; a counter beside it climbs "collisions: 1, 2, 3 ... several billion each second" (fast blur). Heading writes: "Why do most collisions fail?" On "hours, minutes" chips "hours", "minutes", "less than a second". On "second" the 3 s `Countdown` ring runs.

### 2. most collisions fail
> Less than a second. With billions of collisions every second, every reaction would be over almost instantly. But the marble chips in acid from Module 2 fizzed for minutes, and some mixtures sit for years without reacting. So most collisions must fail. That's today's question. Why do they fail, and how does that decide the speed of a **reaction**?

Visual: "less than a second" ticks. On "over almost instantly" a coded flash in the particle box: every pair turns to product at once (red tag "if every collision reacted"). On "marble chips in acid" the board cross-fades (stage change) to the painted gas rig large across the frame (`y11c-flask-chips-acid-bung-fizz-v1.png`, coded tube, `c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png` at 0 mL) with a coded timer "0 s → 3 min" ticking; tag "m2-v20"; slate hand tag "minutes, not instantly" with a pen arrow to the timer. On "sit for years" a grey tag "for example: hydrogen peroxide in its bottle" (no plate). On "most collisions must fail" the particle box returns small at the right with most pairs bouncing apart (grey "bounce") and an occasional pair reacting (teal flash). On "reaction" the question card writes under the heading: "Why do most collisions fail, and how does that set the rate?"

### 3. what reaction rate means
> First, what do we mean by speed? Reaction rate is how quickly a reactant is used up or a product forms. It's the change in an amount divided by the time it took. Here are the marble chips again, with the carbon dioxide caught in a gas syringe. In the first sixty seconds, thirty-two millilitres of gas formed. So the average rate is thirty-two over sixty, about zero point five three millilitres per second. And a steeper graph means a faster **rate**.

Visual: on "Reaction rate is" a gloss card at the top right: "reaction rate: how quickly a reactant is used up or a product forms"; on "change in an amount divided by the time" the strip "rate = change in amount ÷ time taken" (teal) and a small units chip "mL s⁻¹ (gas) · g s⁻¹ (mass lost) · mol L⁻¹ s⁻¹ (concentration)". On "caught in a gas syringe" the plunger moves out and the table and `LineGraph` "V (mL)" against "t (s)" build together: "0 | 0", "30 | 18", "60 | 32", "90 | 42", "120 | 48", "150 | 51", "180 | 52" (tag "data: HSCScience worked example"). On "first sixty seconds" a teal gradient triangle from (0, 0) to (60, 32) with legs labelled "32 mL" and "60 s". On "thirty-two over sixty" the row "rate (0 to 60 s) = 32 ÷ 60 = 0.53 mL s⁻¹" writes (teal). On "steeper graph" a `PenArrow` runs along the steep early part of the curve (teal hand tag "steeper = faster"). Stage: the rig shrinks to a thumbnail at the top left as the table and graph take the full width (48 px current row); the result "0.53 mL s⁻¹" frames in a dark-ink box with a green tick.

### 4. the rate falls
> Now look later on. Between a hundred and twenty and a hundred and eighty seconds, only four more millilitres formed. That's four over sixty, about zero point zero six seven millilitres per second, eight times slower. So the rate isn't constant. In this run, it's fastest at the start, and it falls as the reactants get used up. To explain why, we need to zoom in on the **particles**.

Visual: on "a hundred and twenty and a hundred and eighty" a second, flatter gradient triangle from (120, 48) to (180, 52) with legs "4 mL" and "60 s". On "four over sixty" the row "rate (120 to 180 s) = 4 ÷ 60 = 0.067 mL s⁻¹" writes under the first and frames in a dark-ink box with a green tick, and a chip "8 times slower" bridges them. On "isn't constant" a red crossed chip "rate is constant" (red hand tag "not in this run"). On "fastest at the start" the sliding window runs (see Simulation): the teal 60 s window steps along the curve from the steep start, the readout falling 0.53, 0.40, 0.27, 0.15 mL s⁻¹ while the plunger thumbnail slows; on "falls" it lands on the flat triangle at 0.067 mL s⁻¹ (teal hand tag "flatter = slower"). On "particles" the camera pushes into the fizzing chips and the board becomes the dark collision stage.

### 5. particles must collide
> Collision theory says particles must collide to react. Here's a simple case, carbon monoxide and nitrogen dioxide. When they react, an oxygen atom moves from the nitrogen dioxide to the carbon monoxide, making carbon dioxide and nitrogen monoxide. That can only happen during a collision. But watch this pair. They collide, and they just bounce **apart**.

Visual: on "Collision theory" gloss card "collision theory: particles must collide to react". On "carbon monoxide and nitrogen dioxide" ball models drift into the stage: CO (dark grey C, red O) and NO₂ (blue N, two red O, bent); equation strip "CO(g) + NO₂(g) → CO₂(g) + NO(g)". On "an oxygen atom moves" a slow replay of a successful collision: one red O transfers along a `PenArrow`, giving CO₂ and NO; the moving O is ringed. On "watch this pair" a new pair approaches slowly; on "apart" they touch and separate unchanged (grey hand tag "bounce"; a pen ring on the unchanged NO₂). Stage: the collision stage fills the frame (stage change from the graph); the equation strip at 44 px across the top.

### 6. activation energy: clearing the bar
> That collision was too gentle. To react, the colliding particles need enough energy to start breaking the old bonds, so that new ones can form. The smallest collision energy that can do this is called the activation energy. Think of it as a bar the collision has to clear. A slow collision falls short, and the particles bounce apart. A fast, hard collision clears the bar, and it can **react**.

Visual: a coded vertical "collision energy" meter appears beside the stage with a dashed amber line across it. On "start breaking the old bonds" the N–O bond in the next NO₂ flickers. On "activation energy" the dashed line is labelled "activation energy, Eₐ" with its plain meaning under it: "the smallest collision energy that can start a reaction". On "a bar the collision has to clear" the line thickens briefly (no figure). On "falls short" a slow pair collides and the meter fills only to half, below the line; the pair bounces (grey). On "clears the bar" a fast pair collides with the right ends together; the meter shoots above the line and the O moves across (teal flash "reacts"). On "react" the two meter readings sit side by side as chips (40 px): "below Eₐ: bounce" and "at or above Eₐ: can react" (amber hand tag "clears the bar" with a pen arrow to the dashed line).

### 7. only a few have enough energy
> So how many collisions clear the bar? At any temperature, the particles don't all move at the same speed. A few are slow, most are somewhere in the middle, and a few are very fast. This graph shows that spread of energies. It's called a Maxwell-Boltzmann distribution. The activation energy is a line on the energy axis, and only the particles to the right of it, in this small shaded tail, have enough energy to react. Most fall **short**.

Visual: the stage slides left and shrinks; at the right axes draw: vertical "number of particles", horizontal "kinetic energy". On "A few are slow" particles in the stage are tinted by speed (blue slow, white middle, orange fast) and the smooth curve starts to draw from the origin; on "most are somewhere in the middle" it rises to its peak, which is ringed; on "a few are very fast" it falls away in a long tail. On "this graph shows that spread" the two axis titles pulse. On "Maxwell-Boltzmann distribution" the name writes under the axis title in small grey type. On "a line on the energy axis" the dashed amber Eₐ line drops onto the axis (the meter's line turning vertical, a coded rotation). On "small shaded tail" the area right of the line fills amber; tag "enough energy". On "short" the much larger unshaded area pulses grey, tag "not enough energy". Stage: the graph fills the right two thirds (stage change), axis titles 36 px; amber hand tag "only these" with a pen ring around the shaded tail.

### 8. the right way round
> But enough energy still isn't the whole story. The particles must also meet the right way round. Here, the carbon end of the carbon monoxide has to hit an oxygen atom on the nitrogen dioxide. If the oxygen end hits instead, or it hits the nitrogen, no oxygen can move across, so even a very hard collision just bounces off. That's called **orientation**.

Visual: back to the stage at full width; the energy meter stays. On "carbon end" the C atom is ringed and on "an oxygen atom on the nitrogen dioxide" one O is ringed; a green tick at the contact point of a replayed successful collision. On "the oxygen end hits instead" a fast pair collides O-to-O: the meter is above the line but the pair bounces (red cross at the contact point). On "it hits the nitrogen" a fast pair collides C-to-N: red cross, bounce. On "even a very hard collision" the meter pulses above the line beside the crossed pair. On "orientation" gloss card "orientation: which parts of the particles meet"; green hand tag "C end to an O" by the ticked contact, red hand tag "hard, but wrong way" by the crossed pair.

### 9. effective collisions set the rate
> So a collision that makes products, called an effective collision, needs two things at once. It needs enough energy, at least the activation energy, and it needs the right orientation. The rate of a reaction depends on how many effective collisions happen each second. That's set by how often the particles collide, and by what fraction of those collisions have both enough energy and the right **orientation**.

Visual: board clears to the funnel at the right; the stage stays small at the left. On "effective collision" gloss card "effective collision: enough energy (≥ Eₐ) AND the right orientation". On "two things at once" the two gates of the funnel label: "energy ≥ Eₐ?" (amber) and "right orientation?" (green). On "how many effective collisions happen each second" a stream of collision dots pours in at the top ("all collisions each second"); most drop out at the first gate, more at the second; a thin stream leaves the bottom ("effective collisions each second → rate", teal). On "how often the particles collide" the incoming stream is ringed ("how often"); on "what fraction" both gates pulse ("fraction that succeed"). Live tally bars (no numbers, by decision) beside the funnel fill as dots arrive: a long slate bar "in", a short amber bar "past energy", a shorter green bar "past orientation", and the teal outlet bar "effective each second"; on "both enough energy and the right orientation" the gloss card's "AND" is pen-ringed (ink hand tag "both at once").

### 10. frequency is not the same as success
> Keep those two ideas apart. Collision frequency is how often the particles collide. The fraction that are effective is how many of those collisions succeed. Now back to the marble chips. As the reaction goes on, the acid becomes less concentrated, so there are fewer hydrogen ions in each millilitre, and the chips shrink, leaving less surface to hit. Both mean fewer collisions each second. The temperature hasn't changed, so the same fraction still succeeds. Fewer collisions each second means fewer effective collisions, and a slower **rate**.

Visual: two coded meters at the right: "collision frequency: how often" (slate) and "fraction effective: how many succeed" (teal). On "back to the marble chips" (stage change) the left half shows `m6-marble-chips-acid-v1.png` large, with a close-up lens grown from one chip's surface (white lattice edge) in acid with H⁺ dots (small, labelled "H⁺(aq)") striking it. On "fewer hydrogen ions in each millilitre" the dots thin out (slate hand tag "less concentrated acid"); on "the chips shrink" the lattice edge retreats and the struck area shortens (slate hand tag "less surface"); on "fewer collisions each second" the frequency meter drops. On "The temperature hasn't changed" a small thermometer chip "same temperature" and the fraction meter stays level (a flat line ticks; teal hand tag "same fraction"). On "rate" the scene 4 flat gradient triangle returns small with "0.067 mL s⁻¹".

### 11. hit often, hit hard, hit right
> Here's a way to remember it. Hit often, hit hard, hit right. A reaction goes faster when its particles collide more often, when more of the collisions clear the activation energy, or when more of them meet the right way round. The next videos test what changes **each one**.

Visual: the memory line writes large in the explainer's handwriting style: "Hit often, hit hard, hit right." Under each phrase in turn: "hit often: collision frequency" (slate), "hit hard: energy ≥ Eₐ" (amber, with a tiny copy of the shaded tail), "hit right: orientation" (green, with the ticked contact point). On "each one" the three phrases line up beside the funnel's inlet and two gates. The memory line sits in a framed card (44 px) from here on.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. When two hydrogen iodide molecules react, they form hydrogen and iodine. Only a small fraction of collisions between hydrogen iodide molecules produce these products. Using collision theory, explain why. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Hydrogen iodide decomposes when two HI molecules collide: 2HI(g) → H₂(g) + I₂(g). Only a small fraction of the collisions between HI molecules produce H₂ and I₂. Using collision theory, explain why. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> A collision only works if it has at least the activation energy, and most collisions don't, so the molecules bounce apart. It also needs the right orientation, here the two hydrogen atoms meeting, so they can bond. Only collisions with both are effective. Saying they don't collide often enough misses the point, because it's the fraction that fails.

Visual: card shrinks to the top. Rows write in turn: "Effective collision needs energy ≥ Eₐ: most HI collisions have less, so they bounce apart" (amber, with the small shaded tail icon); "and the right orientation: the H atoms must meet to form H–H" (green; two HI ball models, H white and I purple, meeting H-to-H with a tick, then I-to-I with a cross); "Only collisions with both react, so only a small fraction succeed" (teal). The last row frames in a dark-ink box with a green tick. On "don't collide often enough" a chip "HI molecules don't collide often enough" fades in and is crossed in red (red hand tag "it's the fraction"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Magnesium reacts with excess dilute hydrochloric acid at a constant twenty-five degrees, and the hydrogen is collected in a gas syringe. Use the table to calculate the average rate between zero and twenty seconds, and between sixty and eighty seconds. Then explain the change using collision theory. Pause here to answer.

Visual: `QuestionCard`: "Magnesium ribbon reacts with excess dilute hydrochloric acid at a constant 25 °C. The hydrogen gas is collected in a gas syringe. Time (s): 0, 20, 40, 60, 80. Volume of H₂ (mL): 0, 24, 40, 50, 56. (a) Calculate the average rate of reaction between 0 and 20 s, and between 60 and 80 s. (2 marks) (b) Explain the change in rate using collision theory. (2 marks)" with the data as a small two-row table (tag "illustrative data"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> From zero to twenty seconds, twenty-four over twenty is one point two millilitres per second. From sixty to eighty, six over twenty is zero point three zero. As the ribbon reacts away, there's less magnesium surface for the acid to hit, so fewer collisions happen each second. At the same temperature, the same fraction succeed, so the rate falls. The particles didn't lose **energy**.

Visual: card shrinks. Rows: "0 to 20 s: 24 ÷ 20 = 1.2 mL s⁻¹" and "60 to 80 s: (56 − 50) ÷ 20 = 6 ÷ 20 = 0.30 mL s⁻¹", each framed in a dark-ink box with a green tick; "ribbon reacts away (acid in excess) → less Mg surface → fewer collisions per second" (slate meter dropping); "same temperature → same fraction effective → fewer effective collisions per second → slower" (teal). On "energy" a chip "the particles lose energy as the reaction goes on" fades in and is crossed in red (red hand tag "same temperature, same energies"). Hold about 1 second.

### 16. conclusion and handoff
> So collision energy and orientation control the rate because only collisions with both can react, and the rate counts how many of those happen each second. In a laboratory, we can't turn particles the right way round, but we can change how often they collide and how hard they hit. Two easy controls are the concentration and the temperature. Which lever does each one push, and how would the data **show it**?

Visual: the memory line returns small at the top. On "only collisions with both can react" the funnel returns with its two gates lit. On "how many of those happen each second" the outlet stream pulses. On "In a laboratory" the board settles into the final frame's layout: the gas rig and graph small at the left, the funnel with "hit often", "hit hard", "hit right" at the right. On "concentration" the slate dial appears with "?"; on "temperature" the deep orange dial appears with "?"; the two questioning pen arrows draw. On "show it" the amber chip "Which lever does each one push, and how would the data show it?" and the chip "Next: How do temperature and concentration change the rate evidence?" write. Hold about 2 seconds. This is the final frame (m3-v14 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Rate = change in amount ÷ time taken (for example mL s⁻¹).
2. In these runs, rate was fastest at the start and fell as reactants were used up.
3. Effective collision: energy ≥ activation energy (Eₐ) AND the right orientation.
4. Eₐ: the smallest collision energy that can start a reaction.
5. Rate depends on how often particles collide and the fraction that succeed.

Memory aid (framed card, on the notes screen): *Hit often, hit hard, hit right.*

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why most collisions must fail (1, 2); why the rate falls over time (4, 10); why a gentle collision bounces (6: the old bonds can't start to break); why only some particles have enough energy (7: a spread of speeds); why the wrong way round fails even when hard (8: no atom can move across); why rate depends on frequency and the fraction (9).
- **Misconceptions addressed:** every collision reacts (1, 2); rate is constant (4); enough energy is enough (8); frequency and effectiveness are the same (10; crossed in A1); particles slow down as the reaction goes (crossed in A2).
- **One idea at a time:** surprise (1, 2), rate (3, 4), collision (5), energy (6, 7), orientation (8), effective collisions and rate (9), frequency versus success (10), memory line (11).
- **Video makes it easier:** gradient triangles show "steeper is faster" (3, 4); collisions replay with a live energy meter (6); the meter's bar turns into the graph's Eₐ line (7); crossed contact points show wrong orientation at high energy (8); the funnel shows two filters on one stream (9).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 26 s and 25 s, each inside the brief-answer range.
- **Avoided double teaching:** the marble-chip reaction and gas syringe (m2-v09, m2-v20); concentration (m2-v10, used on a chip only); cell potential (m3-v12, scene 1 only).
- **Syllabus coverage:** `C3-IQ3-02` activation energy (6, 7), collisions (5, 9), molecular orientation (8); `C3-IQ3-03` a change in rate explained (4, 10, A2).
- **Out of scope by design:** temperature, concentration, surface area and catalyst comparisons (v14, v15); the distribution at two temperatures (v14); energy profiles (m4-v01); instantaneous rate by tangent.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: a collision is effective only if the colliding molecules have at least the activation energy; most collisions have less, so the molecules bounce apart unchanged (1 mark). The molecules must also collide with the right orientation (the two H atoms meeting so an H–H bond can form); other orientations fail even with enough energy (1 mark). Only collisions meeting both conditions produce H₂ and I₂, so only a small fraction succeed (1 mark). Classic mistake (crossed): "HI molecules don't collide often enough" (frequency does not explain why most collisions fail).

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) 0 to 20 s: 24 ÷ 20 = 1.2 mL s⁻¹ (1 mark); 60 to 80 s: (56 − 50) ÷ 20 = 0.30 mL s⁻¹ (1 mark). (b) As the magnesium ribbon reacts away (the acid is in excess), less magnesium surface is exposed to the acid, so there are fewer collisions per second (1 mark); the temperature is constant, so the fraction of collisions with energy ≥ Eₐ and the right orientation is unchanged, so there are fewer effective collisions per second and the rate decreases (1 mark). Classic mistake (crossed): "the particles lose energy as the reaction goes on".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Cell potentials (opening, from m3-v12) | Zn +0.76 V; Al +1.68 V | opening frame, 1 |
| Collisions in air | several billion per second per molecule (about 7 × 10⁹ s⁻¹ for N₂ at 25 °C, 100 kPa) | 1, 2 |
| Site data (gas syringe) | 0, 18, 32, 42, 48, 51, 52 mL at 0, 30, 60, 90, 120, 150, 180 s | 3, 4, 10 |
| Average rates | 32 ÷ 60 = 0.53 mL s⁻¹; 4 ÷ 60 = 0.067 mL s⁻¹; ratio 8 | 3, 4, 10 |
| A2 (illustrative) | 0, 24, 40, 50, 56 mL at 0, 20, 40, 60, 80 s; 24 ÷ 20 = 1.2 mL s⁻¹; 6 ÷ 20 = 0.30 mL s⁻¹; 25 °C | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 32 ÷ 60 = 0.5333 → 0.53; 4 ÷ 60 = 0.06667 → 0.067; 0.5333 ÷ 0.06667 = 8.0.
- 24 ÷ 20 = 1.2; (56 − 50) ÷ 20 = 0.30; the slip "average from the start" (56 ÷ 80 = 0.70) is not used.
- N₂ collision frequency: v̄ = √(8 × 8.314 × 298.15 ÷ (π × 0.028014)) = 474.6 m s⁻¹; n = P ÷ kT = 100000 ÷ (1.380649 × 10⁻²³ × 298.15) = 2.429 × 10²⁵ m⁻³; z = √2 × π × (3.7 × 10⁻¹⁰)² × 474.6 × 2.429 × 10²⁵ = 7.0 × 10⁹ s⁻¹.
- E°cell with H⁺/H₂ (0.00 V): Zn 0.00 − (−0.76) = +0.76 V; Al 0.00 − (−1.68) = +1.68 V (data-sheet E° values; as in m3-v12).
- Equations balanced: CO + NO₂ → CO₂ + NO (C 1, O 3, N 1 each side); 2HI → H₂ + I₂; Zn + Cu²⁺ → Zn²⁺ + Cu (charge 2+ each side).

## Memory aid check

- **"Hit often, hit hard, hit right."** Meaning: the rate rises if particles collide more often (frequency), if more collisions have at least the activation energy, or if more meet with the right orientation. Assumptions checked: "hard" means collision energy at or above Eₐ, not the force of a single bump (scene 6 defines it first); "right" means orientation, which the laboratory cannot set directly (said in scene 16), so the aid does not suggest otherwise; the aid describes effective collisions per second, which is what the rate depends on in this course's model (rate laws are not needed). It helps a new case: A1 (hard and right) and A2 (often). It carries into v14 (temperature: hit hard and a little more often; concentration: hit often) and v15 (surface area: hit often; catalyst: the bar is lower).
- **Considered, not used:** the site's "1 in 10⁹" statistic (site note 2); a glow-stick hook (the site's lesson 11 hook compares temperatures, which belongs to v14).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,140 characters**, 17 scenes (per scene: 456, 344, 448, 380, 351, 391, 436, 350, 407, 528, 270, 236, 350, 331, 381, 406, 75; Revision 1: 6,011). At 13.3 characters per second the speech is about 462 s; add about 9 s of settling (the graph build in 3, the sliding window in 4, the collision replays in 6 and 8, the funnel in 9, the lens in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 552 s** (Revision 1: about 541 s).

## Scene list and build ids

Lesson key `c-y11-m3-v13` (route chem-y11-m3-v13; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v13`.

In order (17 scene headings, all `### N.`): hook-prediction, collisions-fail, rate-meaning, rate-falls, must-collide, activation-energy, energy-spread, orientation, effective-collisions, frequency-vs-success, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m3-v12's final frame into scene 1 by camera continue, then a clear change to the air box; 1 to 2 camera continue; 2 to 3 camera continue (the rig stays); 3 to 4 camera continue; 4 to 5 camera push into the chips (meaningful zoom to particles); 5 to 6 camera continue; 6 to 7 camera continue (the meter's line rotates into the graph); 7 to 8 camera continue; 8 to 9 clear change to the funnel; 9 to 10 camera continue; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v13-learning-review.md`, `checks/c-y11-m3-v13-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c4a-syringe-plunger-v1.png`: scenes 2 to 4, final frame.
- `public/assets/chemistry/y11c-flask-chips-acid-bung-fizz-v1.png` (delivered for m2-v20; inspected 6 November on a paper contact sheet at about 300 px): scenes 2 to 4, final frame.
- `public/assets/chemistry/m6-marble-chips-acid-v1.png` (open beaker of fizzing chips, inspected 6 November): scene 10, the lens source (Revision 2; the chips read larger than in the flask).
- `public/assets/chemistry/m6-zinc-acid-v1.png` (zinc granules fizzing in acid) and `public/assets/chemistry/y11c-aluminium-acid-v1.png` (delivered for m3-v07): opening frame and scene 1 only, as in v12.
- **Inspected, not used:** `public/assets/hscscience/chem-y11-m3/l11/l11HookGlowStick.png` (site cartoon style, flat colours; it does not match the painted plates, and its temperature comparison belongs to v14); `biology/y11-gas-syringe-rig-v1.png` (a yeast flask in a water bath, syringe painted in).

Need: no new plates.

Coded: air particle box, collision stage and ball models, energy meter, gradient triangles and the sliding window, table and `LineGraph`s (volume-time and the energy spread), funnel and tally bars, meters, chip-surface lens, dials, cards, chips, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson11.sa.html` (`l11-defining-reaction-rate-title` units and Common Error; worked example 1 data and answers; `l11-collision-theory-the-particle-level-explanat-title` Must Know and Common Error; the orientation trap).
3. Confirm the N₂ collision frequency estimate (author note a) supports "several billion times every second", and the CO + NO₂ orientation source (author note b) with a stable link.
4. Confirm the equations are balanced and the ball-model colours follow HSC conventions (C dark grey, O red, N blue, H white, I purple).
5. Confirm both attempt cards are original, carry every needed fact (A2 states constant temperature and excess acid), and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested (the high-jump comparison is spoken only); no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m3-v12's final frame as written in `chem-y11-m3-v12.md`, and send this final frame to the m3-v14 designer.

## YouTube metadata (draft)

Title: Collision Theory: Activation Energy, Orientation and Reaction Rate | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Molecules collide billions of times a second, so why aren't all reactions instant? Learn what reaction rate means and calculate an average rate from gas syringe data. Then see why most collisions fail: a collision needs at least the activation energy and the right orientation. Read the spread of particle energies, tell collision frequency apart from the fraction that succeed, and explain why a reaction slows down. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"investigate the role of activation energy, collisions and molecular orientation in collision theory"
"explain a change in reaction rate using collision theory (ACSCH003, ACSCH046)"

Previous: How do standard reduction potentials predict a redox reaction? Next: How do temperature and concentration change the rate evidence?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Opening frame (root).** Written first against an assumed v12 frame, then reconciled to `chem-y11-m3-v12.md`'s final frame (both written 5 November in parallel). If v12's final frame changes in review, only scene 1's first two sentences and its first visual cue change.
- **2. Maxwell-Boltzmann name (learning review).** Named once (scene 7) because v14 and v15 and the HSC use it; the site calls it supporting depth. If the learning review finds the name a distraction at first meeting, keep the graph and say "this graph of the spread of energies" only.
- **3. Hydrogen peroxide aside (science check).** Scene 2's grey tag "for example: hydrogen peroxide in its bottle" (slow at room temperature; v15 catalyses it). Confirm the wording "sit for years without reacting" is fair for the spoken general claim ("some mixtures").
- **4. Scene length (learning review).** Scene 7 (436 characters) carries the distribution; trim option: drop "A few are slow, most are somewhere in the middle, and a few are very fast." (about 85 characters) if the curve build makes it clear.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the bar-to-line rotation in scene 7 clear at playback speed; is the funnel understood without numbers), then the science check and Codex error check.
- Checker output (5 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 3 should fix; all resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,140 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m3-v13-learning-review.md`, `checks/c-y11-m3-v13-science-check.md`; both list the same three):
1. Cause of the falling surface-reaction rate (should fix): scene 10 now says "the acid gets weaker ... and the chips shrink, leaving less surface to hit. Both mean fewer collisions each second", with a lens showing the chip edge retreating. Feedback 2 (acid in excess) now says "As the ribbon reacts away, there's less magnesium surface for the acid to hit"; its row and the A2 model answer match. The same-temperature, same-fraction contrast is kept. Author note (c) and the Frequency decision are updated.
2. Scope of the rate trend (should fix): scene 4 says "In this run, it's fastest at the start"; key note 2 says "In these runs, rate was fastest at the start and fell as reactants were used up". The gradient calculations and the frequency and effectiveness distinction are unchanged.
3. Source description (should fix): author note (b) now records that OpenStax Chemistry 2e section 12.5 uses CO with O₂, not CO with NO₂; the CO + NO₂ model is kept as an uncited teaching model unless Codex finds a primary teaching source. The reaction and narration are unchanged.

High-risk redesign (scene level; narration, numbers and teaching logic kept):
- Revision 1 held the gas rig and graph for scenes 2 to 4 (about 87 s) and the collision stage for 5 to 8 (about 115 s). Revision 2 stages (Board layout): the painted rig large (2), the full-width table and graph (3), the sliding-window simulation (4), the collision stage (5, 6), the energy-spread graph large (7), the stage again (8), the funnel with live tally bars (9), the painted chips with a surface lens (10). No set-up runs past about 55 s.
- Scene 1 opens on m3-v12's painted zinc and aluminium beakers, now with a hand tag and pen ring, before the air box.
- Live readouts: the sliding 60 s window (scene 4) recomputes the average rate 0.53, 0.40, 0.27, 0.15, 0.067 mL s⁻¹ as it moves; the collision stage's energy meter (5, 6, 8); tally bars on the funnel (9, no numbers by decision).
- Framed answers with a green tick: 0.53 (3), 0.067 (4), feedback 1's conclusion row, feedback 2's two rates. Crossed slips carry red hand tags ("not in this run", "it's the fraction", "same temperature, same energies").
- Hand tags and a pen mark in role colours in every teaching scene (1 to 11).
- `m6-marble-chips-acid-v1.png` added as the scene 10 lens source (existing, inspected).
- Memory line as a framed card; key notes cut to five short bullets (about 351 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The final frame is unchanged (m3-v14 opens on it).

New plate requests: none.

Counts: 6,140 characters (Revision 1: 6,011); about 541 s to about 552 s.

## Revision 3 (7 Nov 2026)

Brief 219 error check (`checks/c-y11-m3-v13-rev2-error-check.md`), should-fix finding resolved (root):
- Scene 10 speech: "the acid gets weaker" becomes "the acid becomes less concentrated" (using up H⁺ lowers concentration; it does not change hydrochloric acid's strength), matching repaired m2-v20. The hand tag now reads "less concentrated acid"; the author notes in Decisions and (c) use the same wording.
- Scene 9: the pen ring on the gloss card's "AND" is now tied to the spoken "both enough energy and the right orientation", so the final bold cue is quoted in order. Visual otherwise unchanged.
- Narration 6,154 characters (sum of 17 scene strings; scene 10 is 542, +14 against Revision 2's 6,140), about 553 s. Inside 5,500 to 6,800 and under 570 s. Bold cues quoted in spoken order; no em dashes. Speech changed in scene 10 only: record from this revision.
