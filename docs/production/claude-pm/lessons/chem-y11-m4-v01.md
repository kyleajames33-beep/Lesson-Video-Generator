# Year 11 Chemistry M4 V01: Energy profiles. How does an energy profile distinguish endothermic from exothermic change? (design)

Status: Revision 3 (7 Nov 2026): brief 219 error-check findings resolved (root). Ready to voice. Previously Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,372 characters, 19 scenes, about 570 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: first Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 70, between `chem-y11-m3-v15` and `chem-y11-m4-v02`; a concept video with a short temperature-change practical. Templates: `chem-y11-m3-v15.md` (same designer, colour habits), `chem-y11-m2-v20.md` (series layout), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates); energy-profile styling from Year 12 `chem-m5-c04b.md` (coded valleys, ridge and brackets), restyled as an enthalpy axis with levels. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v01` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Define system/surroundings, activation energy and enthalpy difference; connect temperature observations with a profile, without treating the vertical axis as temperature."; next handoff: "How can a calorimeter turn a temperature rise into heat transfer?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson01.sa.html` (SHA256 `24c82047d9f09703dcff087b64b1f98a0e5809b8fbb923c6c9b8660e2abac4f3`, recomputed, matches the route), sections `l01-what-is-enthalpy-title`, `l01-exothermic-vs-endothermic-reactions-title`, `l01-energy-profile-diagrams-title`, `l01-thermochemical-equations-title`. Used: ΔH = H(products) − H(reactants) and "We can't measure the absolute enthalpy"; the exothermic/endothermic table (sign, energy flow, surroundings temperature, product level); the Common Error "'The exothermic reaction gets hot' is imprecise. The surroundings get hot"; the five labels of an energy profile; the x-axis as "progress of reaction, not time"; "Ea is measured from the reactant level to the peak" and its Common Error ("Ea from zero"); the methane thermochemical equation, ΔH = −890 kJ mol⁻¹; "State symbols are non-negotiable"; "ΔH belongs to the equation"; the endothermic decomposition idea (the site's Core question uses ΔH = +178 kJ mol⁻¹); the cold pack (Short answer Q3), rebuilt as attempt 1. Not used: "heat energy stored in a substance's bonds" (site note 2), H = U + pV, reverse activation energy (worked example 2 (b); not needed for the route stop), scaling and reversing equations (taught in `chem-y11-m4-v07`, where they are used), photosynthesis as a heat-absorbing example (site note 3).

Owner rules applied: as `chem-y11-m3-v15.md` (one learner question; no people, hands or faces: apparatus alone, powder tipped and stirred by code, the burner lit by a coded spark; real apparatus as painted plates; profiles, readouts and particle sketches coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Temperature readings are illustrative (the ethanol readings are the site's) and tagged.

Syllabus content (Chemistry Stage 6, 2017, Module 4, Energy Changes in Chemical Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ1-01`: "conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including:"
  - "combustion"
  - "dissociation of ionic substances in aqueous solution (ACSCH018, ACSCH037)"
- `C4-IQ1-03`: "construct energy profile diagrams to represent and analyse the enthalpy changes and activation energy associated with a chemical reaction (ACSCH072)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 43)

**Boundary:** opens on m3-v15's final frame (the catalysed peroxide flask on the balance, probe reading 32.5 °C from 21.0 °C, "Where did that energy come from?"). Teaches: some changes cool their surroundings (prediction with ammonium chloride); measuring temperature changes (start, then highest or lowest; ethanol burning under a can of water, ammonium chloride dissolving in a foam cup); system and surroundings; exothermic and endothermic by the direction of energy flow; enthalpy (stored chemical energy, measured only as a change), ΔH = H(products) − H(reactants) and its sign; building an energy profile (axes, reactant and product levels, ΔH arrow) for methane burning; the activation energy hill and transition state, linked to v13's Eₐ and the spark a Bunsen burner needs; the two arrow rules; an endothermic profile (calcium carbonate decomposing, about +178 kJ mol⁻¹); the vertical axis is enthalpy, not temperature (lower products, hotter surroundings); from a thermometer to a profile; the thermochemical equation format (states, sign, kJ mol⁻¹ for the equation as written). Not taught: q = mcΔT and calorimetry (v02), molar enthalpy calculations (v03, v04), why dissolving can go either way (v04), catalysed profiles (v05), bond energies (v06), scaling and reversing equations (v07).

## Decisions

- **Learner question (route wording kept).** "How does an energy profile distinguish endothermic from exothermic change?" The answer, in order: a thermometer in the surroundings shows the direction of energy flow (1 to 4); ΔH is the system's enthalpy change, negative when energy leaves (5); on a profile, exothermic products sit below the reactants and endothermic products above, with ΔH the drop or rise (6, 9); both have an activation-energy hill (7, 8); the vertical axis is enthalpy, not temperature (10); the observation tells you which profile to draw (11).
- **Opening frame (equals `chem-y11-m3-v15.md`'s final frame, same designer).** The logging balance with `y11c-flask-peroxide-mno2-plug-fizz-v1.png`; `m7-temp-probe-sleeve-stand-v1.png` reading "32.5 °C" with "started at 21.0 °C"; a warm-orange ripple; the memory board small; "Module 3 complete"; the amber chip "The flask warmed by 11.5 °C. Where did that energy come from?"; the "Next" chip, which fades.
- **Practical (scenes 1, 2; `C4-IQ1-01`; illustrative readings, tagged).** Two examples from the syllabus list. Combustion: ethanol in a spirit burner under a copper can of 200.0 g of water, 19.5 → 31.2 °C (the site's lesson 2 worked example readings, so v02 and v03 continue with the same data). Dissociation of an ionic substance: 5.0 g of ammonium chloride stirred into 50.0 mL of water in a foam cup with a temperature probe, 21.0 → 15.2 °C (author note b). Method in three steps: record the starting temperature; start the change; record the highest or lowest temperature reached. Safety chip: eye protection; teacher-approved fuel (ethanol), burner capped when out, cooled before refilling, flammables away from the flame; ammonium chloride is harmful if swallowed and an eye irritant. Revision 2 (brief 183): the chip does not approve the exact procedure; author note (h) requires the school-approved spirit-burner method and the product SDS before any practical recording. Why dissolving goes one way or the other is v04's question (one grey tag: "why? later in Module 4").
- **System and surroundings (scene 3).** System: the chemicals that are changing (the ethanol and oxygen reacting; the ammonium chloride separating into ions). Surroundings: everything else (the water, can or cup, thermometer, air). The thermometer reads the surroundings. The water's double role in dissolving (it surrounds the ions and is also the measured surroundings) is not raised; author note c.
- **Enthalpy (scene 5).** "The chemical energy stored in the substances, in their bonds and in how their particles are arranged"; only its change is measured. Constant pressure is not spoken (author note d). The site's "heat energy stored in bonds" is not used (site note 2).
- **Profiles (scenes 6 to 9).** Coded profile, axes "enthalpy, H" (vertical, no zero, no numbers on the axis) and "reaction progress" (horizontal, with the grey tag "not time"). Exothermic example: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH = −890 kJ mol⁻¹ (the site's example; the scale is schematic, not to size). Revision 2 (brief 183): −890 kJ mol⁻¹ is for products cooled back to 25 °C with the water as liquid; a flame's water leaves as steam, for which ΔH would be about −802 kJ mol⁻¹. The profile and the equation strip carry the tag "products cooled to 25 °C: water as H₂O(l)"; the narration and value are unchanged. Endothermic example: CaCO₃(s) → CaO(s) + CO₂(g), ΔH ≈ +178 kJ mol⁻¹ (the site's value; author note e); the lime kiln is spoken, not drawn. Five labels: reactants, products, transition state, Eₐ arrow, ΔH arrow.
- **Activation energy link (scene 7).** v13's Eₐ (the bar) becomes the hill's height; the transition state is named with its plain meaning ("the top, where old bonds are partly broken and new ones partly formed"). Why a Bunsen burner needs a spark: the first collisions need Eₐ; then the heat released keeps it going (the coded spark is a small striker flash, no hand). This is the video's surprise ("if it releases so much energy, why doesn't it light itself?").
- **The trap (scene 10; route stop).** The vertical axis is enthalpy, not temperature: in the exothermic profile the products sit lower, yet the flame and the water are hot. The energy the products no longer store has flowed out as heat. This is said once plainly and drawn as a split screen (profile left, hot can right).
- **Thermometer to profile (scene 11).** Two-column rule card: "surroundings warm → energy out of the system → products lower → ΔH negative (exothermic)"; "surroundings cool → energy into the system → products higher → ΔH positive (endothermic)". Applied at once to ammonium chloride.
- **Thermochemical equation (scene 12).** Format only: balanced equation, every state symbol, ΔH with its sign and kJ mol⁻¹, "for the equation as written (here, one mole of methane)". Why states matter: liquid water and steam store different amounts of energy (one sentence). Scaling and reversing are left to v07.
- **Memory aid:** "Exothermic: energy exits. Endothermic: energy enters." (see "Memory aid check"), scene 13.
- **Attempts (original wording, HSC style).** A1 (classify and describe; the site's cold-pack context, new wording and numbers): an instant cold pack falls from 22 °C to 4 °C as ammonium nitrate dissolves; classify, justify with system and surroundings, state the sign of ΔH and where the products sit on a profile. Crossed: "ΔH is negative because the temperature decreased". A2 (read a profile; new numbers): reactants 40, transition state 160, products −50 kJ mol⁻¹ on a labelled axis; find Eₐ and ΔH and classify. Eₐ = 120, ΔH = −90 kJ mol⁻¹, exothermic. Crossed: "Eₐ = 160 kJ mol⁻¹ (measured from zero)".
- **Mistake scene:** none separate. "The reaction gets hot" (4, said positively); "products lower means colder" (10); "Eₐ measured from the axis" (8; crossed in A2); "the x-axis is time" (6); "a temperature fall means negative ΔH" (crossed in A1).
- **Handoff (route next: `chem-y11-m4-v02`, "How can a calorimeter turn a temperature rise into heat transfer?").** Scene 18: the thermometer gave the direction; how much energy? The can of 200.0 g of water warmed by 11.7 °C; how many joules? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted; module 4 lesson 1):**
  1. The hook says "A reusable hand warmer releases heat as sodium acetate crystallises", while the Real-World Anchor says "A hand warmer contains iron powder that oxidises". Both kinds exist (reusable sodium acetate warmers; single-use iron warmers). Suggest naming each: "a reusable hand warmer (sodium acetate crystallising)" and "a single-use hand warmer (iron powder oxidising)".
  2. "Think of enthalpy (H) as the heat energy stored in a substance's bonds" conflicts with the same card's Common Error ("ΔH describes the transfer of energy ... not a quantity a substance possesses") and implies bonds store energy that breaking releases. Suggest: "Enthalpy is a measure of the energy stored in a substance (in its bonds and the arrangement of its particles). We can only measure its change, ΔH, which equals the heat exchanged with the surroundings at constant pressure."
  3. The exothermic/endothermic table lists photosynthesis as an endothermic example under "Surroundings temperature: Decreases (cools down)". Photosynthesis absorbs light energy, not heat from its surroundings, and a leaf does not cool its surroundings measurably by photosynthesising (the same issue is logged for the 2025 draft, FA3 L15, in `site-corrections-y11-chem-new.md`). Suggest an example that takes in heat, such as thermal decomposition of calcium carbonate, and keep photosynthesis as "endothermic: energy absorbed as light".
  4. Drill 4, Error 1: "The y-axis shows enthalpy, not energy from zero". Enthalpy is energy; the point is that absolute enthalpy has no meaningful zero on the diagram. Suggest: "Only differences between levels matter; the height above the axis means nothing."
  - Checked and correct: Q2(a) (0.500 ÷ 2 × 3120 = 780 kJ released); worked example 1 (4440 kJ; +2220); worked example 2 (Eₐ(reverse) = 120 − 85 = 35 kJ mol⁻¹); the mini-task halved propane equation (−1110 kJ mol⁻¹); drill 2 (160 kJ mol⁻¹).
- **Cause chain taught, in order:** (1) the thermometer sits in the surroundings, so it shows which way energy flowed (2, 3); (2) energy out of the system warms the surroundings: exothermic; energy in cools them: endothermic (4); (3) the system's stored energy falls when energy leaves, so ΔH = H(products) − H(reactants) is negative (5); (4) on a profile the products sit lower by ΔH (6); (5) old bonds must start to break before new ones form, so the energy rises to a transition state first, and that height is Eₐ (7); (6) endothermic products sit higher, so energy must keep being supplied (9); (7) the products store less energy because it left as heat, so lower does not mean colder (10).
- **Entry knowledge:** Stage 5 (exothermic and endothermic as words may be familiar; particle model; combustion); m3-v13 (activation energy, collisions); m3-v15 (the warm catalysed flask); m3-v04 (combustion equations, recalled); m1 (ionic compounds, ions in solution).
- **Learner-visible vocabulary (plain meaning at first use):** system, surroundings (3); exothermic, endothermic (4); enthalpy, H; enthalpy change, ΔH (5); energy profile, reaction progress (6); transition state (7); thermochemical equation (12).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **two-cup bench** (scenes 1 to 4: `m7-spirit-burner-calorimeter-v1.png` and `m6-foam-cup-calorimeter-v1.png` side by side, coded temperature readouts on the can's thermometer and the cup's probe; the ammonium chloride tips in from `y11c-watch-glass-v1.png` by code); **boundary view** (scenes 3, 4: a dashed teal outline round the system; warm-orange arrows crossing it outward for the burner, cool-blue arrows crossing it inward for the cup); **enthalpy bars** (scene 5: two side-by-side bars "H(reactants)" and "H(products)" with the difference bracket); **energy profile** (scenes 6 to 12, 16: coded axes, levels as short horizontal lines, a smooth hill, double-headed Eₐ arrow, single-headed ΔH arrow, five labels writing on cue); **split screen** (scene 10); **rule card** (scene 11); **equation strip** (scene 12); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** exothermic warm orange (energy out, arrows outward); endothermic cool blue (energy in, arrows inward); the system boundary dashed teal; enthalpy levels ink; Eₐ arrow amber (continues the v13 to v15 Eₐ colour); ΔH arrow red for negative, blue for positive; transition state ringed amber; crossed items red strike.
- **Board layout (Revision 2):** heading top left. Revision 1 kept the bench for scenes 1 to 4 (about 105 s) and one profile for scenes 6 to 9 (about 120 s). Revision 2 stages, each under about 37 s: m3-v15's flask, then the foam cup large (1); the burner and cup side by side with live readouts (2); the cup lens with the system outline (3); both set-ups with boundary arrows (4); the enthalpy bars at full width (5); the methane profile with the Bunsen plate (6, 7); the arrows check at full width, profile enlarged (8); the limestone profile with the limestone and quicklime plates (9); the split screen (10); the thermometer-to-profile slider (11); the equation strip at full width (12); the memory card (13); question cards (14 to 17); the final layout (18).
- **Colour roles (Revision 2, fixed for the whole video):** exothermic warm orange (energy out, arrows outward); endothermic cool blue (energy in, arrows inward); the system boundary dashed teal; enthalpy levels ink; Eₐ arrow amber (continues the v13 to v15 Eₐ colour); ΔH arrow red for negative, blue for positive; transition state ringed amber; the slider's ΔT readout orange above zero and blue below; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; method, safety and data tags grey.
- **Type sizes (Revision 2, 1080p):** the current label, equation or answer line at least 44 px (48 px); temperature readouts and the slider readout about 52 px; profile labels 36 px; gloss cards 34 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (data and safety tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the thermometer-to-profile slider (scene 11).** A live readout on the core idea (the surroundings' temperature change tells you which profile to draw): a horizontal slider for the surroundings' temperature change, with two marked stops at the video's real readings, −5.8 °C (ammonium chloride) and +11.7 °C (the ethanol burner). As the slider moves, its readout (52 px) updates; above zero the product level slides below the reactant level and the ΔH arrow turns red and points down ("ΔH negative: exothermic"); below zero the product level slides above and the arrow turns blue and points up ("ΔH positive: endothermic"). The levels move qualitatively; no ΔH value is computed from ΔT here (that is v02 and v03).

Author notes (not learner copy):
(a) Ethanol readings 19.5 → 31.2 °C with 200.0 g of water: the site's lesson 2 worked example 1 (also used in v02 and v03). ΔT = 11.7 °C.
(b) Ammonium chloride: ΔsolH ≈ +14.8 kJ mol⁻¹; 5.0 g ÷ 53.49 = 0.0935 mol; 0.0935 × 14.8 = 1.38 kJ absorbed; with about 55 g of solution and c ≈ 4.18 J g⁻¹ K⁻¹, ideal ΔT ≈ 1384 ÷ (55 × 4.18) ≈ 6.0 °C; shown 5.8 °C (21.0 → 15.2 °C), a little heat gained from the room. Illustrative; v04 may reuse it.
(c) In dissolving, water molecules surround the ions (hydration), so the water is part of the process as well as the surroundings that change temperature. The course treats the dissolving ions as the system and the bulk water as the surroundings; v04 explains separation and hydration.
(d) ΔH equals the heat exchanged at constant pressure (open containers); not spoken here because no calculation needs it yet; the key notes do not claim it either.
(e) ΔfH (kJ mol⁻¹): CaCO₃(s, calcite) −1207.6 (CRC) or −1206.9 (older NBS); CaO(s) −635.1; CO₂(g) −393.5. ΔH = −635.1 − 393.5 + 1207.6 = +179.0, or +178.3 with −1206.9. "About +178" (the site's value) is kept. CH₄ + 2O₂ → CO₂ + 2H₂O(l): −393.5 + 2(−285.8) − (−74.8) = −890.3 kJ mol⁻¹.
(f) A2's profile values are on a relative enthalpy scale (the axis shows numbers only for reading the question; a note on the card says "values relative to an arbitrary zero").
(g) Pronunciations: "delta H"; "C H four plus two O two"; "C a C O three"; "kilojoules per mole".
(h) Fuel method (Revision 2, brief 183): the ethanol spirit burner and ammonium chloride observations are plausible, but the safety chip does not establish approval of the exact apparatus and fuel procedure. Before any practical recording, root links the school-approved spirit-burner method and the product SDS (ethanol, ammonium chloride), including filling only a cold burner, cooling before refilling, keeping fuel stock away from flames, and extinguishing by capping. The video shows the painted burner plate with the chip; no learner wording beyond the chip changes (the design is at the duration cap). Revision 3: root decision 19 applies (Module 4 after-183 note): painted stills or checked footage with "follow your school's approved method" on screen; the SDS for ethanol and ammonium chloride are named here as the author-side references. No school method or SDS link is needed from the owner before voicing; no method is presented as school-approved.
(i) Methane state (Revision 2, brief 183): CH₄ + 2O₂ → CO₂ + 2H₂O(g): −393.5 + 2(−241.8) + 74.8 = −802.3 kJ mol⁻¹, against −890.3 with H₂O(l). The −890 value is kept with the tag "products cooled to 25 °C: water as H₂O(l)"; the steam value appears only as a grey tag in scene 12.

Main question: *How does an energy profile distinguish endothermic from exothermic change?*
Entry knowledge: Stage 5; m3-v13, m3-v15; m3-v04.
Stops after: temperature changes measured; system and surroundings; exo and endo; ΔH and its sign; both profiles with Eₐ and the transition state; the enthalpy-not-temperature trap; thermochemical equation format. No q = mcΔT.
Handoff: chem-y11-m4-v02, calorimetry.

## Opening frame and final frame

- **Opening frame:** m3-v15's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v02` opens on it):** left: `m7-spirit-burner-calorimeter-v1.png` large (copper can with thermometer over a lit spirit burner on a stand), a coded readout on the thermometer "31.2 °C" with a grey "started at 19.5 °C" beneath, a label card "200.0 g of water" on the can, and short warm-orange arrows from the flame into the can's base. Right: the exothermic profile small (methane), ΔH arrow red, with the tag "energy out: how much?". The amber chip "The water warmed by 11.7 °C. How many joules flowed into it?". The chip "Next: How can a calorimeter turn a temperature rise into heat transfer?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> The flask warmed by eleven and a half degrees, and nothing was heating it. The energy came from the reaction itself. But some changes do the opposite. Here's ammonium chloride, about to be stirred into water in a foam cup. So, quick prediction. Will the water's temperature go up, stay the same, or go **down**?

Visual: opens on m3-v15's final frame; the "Next" chip fades. On "nothing was heating it" the probe readout pulses "32.5 °C" and the warm ripple spreads. On "some changes do the opposite" the board clears to the foam cup, large at centre (stage change): `m6-foam-cup-calorimeter-v1.png` (probe through the lid, coded readout "21.0 °C", 52 px; blue hand tag "watch this number"), with `y11c-watch-glass-v1.png` holding a white powder heap (coded), label "5.0 g ammonium chloride, NH₄Cl"; label on the cup "50.0 mL water". Heading writes: "Energy in, energy out". Chips "up", "same", "down". On "down" the 3 s `Countdown` ring runs.

### 2. measuring temperature changes
> Down, from twenty-one degrees to about fifteen. Record the starting temperature, start the change, then record the highest or lowest temperature reached. Burning ethanol under a can of water warms the water, from nineteen point five to thirty-one point two degrees. Dissolving ammonium chloride cools it. So which way is the energy **flowing**?

Visual: the powder tips in by code (the watch glass tilts on a coded arc; no hand) and a coded stir swirl; the readout falls "21.0 → 15.2 °C" (tag "illustrative"); "down" ticks. On "Record the starting temperature" a three-step method card at the top right: "1. record the starting temperature", on "start the change" "2. start the change", on "highest or lowest" "3. record the highest or lowest temperature". On "Burning ethanol" `m7-spirit-burner-calorimeter-v1.png` slides in at the left of the cup; its coded thermometer readout climbs "19.5 → 31.2 °C" (tag "data: HSCScience worked example"). Safety chip: "eye protection · approved fuel, capped when out, cool before refilling · NH₄Cl: harmful if swallowed, eye irritant", with a grey method strip under it: "teacher demonstration or checked footage: follow your school's approved method" (root decision 19 via the Module 4 after-183 note; Revision 3). The burner stays the painted still; no fuel procedure is animated. A grey tag under the cup "why does dissolving cool? later in Module 4". On "flowing" both readouts pulse: "+11.7 °C" (orange) and "−5.8 °C" (blue), with hand tags orange "warmer" and blue "colder" and a pen ring around each readout.

### 3. system and surroundings
> To answer that, split the world in two. The system is the chemicals that are changing. In the cup, that's the ammonium chloride breaking up into ions. The surroundings are everything else, the water, the cup, the thermometer, and the air. And notice where the thermometer is. It sits in the surroundings, so it tells us what's happening to the surroundings, not directly to the **system**.

Visual: on "The system is" a dashed teal outline draws round a coded lens of the dissolving solid (NH₄⁺ and Cl⁻ leaving a lattice edge), label "system: the chemicals that are changing". On "The surroundings are everything else" the water, cup wall, probe and the air above shade pale and are labelled "surroundings: everything else". On "where the thermometer is" the probe tip is ringed, sitting in the water outside the dashed outline. On "system" the same split appears small over the burner: dashed outline round the flame zone, "system: ethanol and oxygen reacting"; can, water, thermometer and air "surroundings". Stage: the cup lens fills the left two thirds (stage change); ink hand tag "thermometer is out here" with a pen arrow to the probe tip.

### 4. exothermic and endothermic
> When the surroundings warm up, energy has flowed out of the system and into them. That's called exothermic. When the surroundings cool down, energy has flowed from the surroundings into the system. That's endothermic, like dissolving ammonium chloride. So it's the surroundings that get hot or cold. The water got colder because the system took energy from **it**.

Visual: on "flowed out of the system" warm-orange arrows cross the burner's dashed outline outward into the can; gloss "exothermic: energy flows out of the system to the surroundings" (orange). A small thumbnail of the opening flask "32.5 °C" joins the exothermic side with the burner. On "flowed from the surroundings into the system" cool-blue arrows cross the cup's dashed outline inward from the water; gloss "endothermic: energy flows into the system from the surroundings" (blue). On "it's the surroundings that get hot or cold" a crossed chip "the reaction gets hot" and a corrected chip "the surroundings get hot". On "it" the blue arrows pulse once more. The crossed chip carries a red hand tag "the surroundings change".

### 5. enthalpy and ΔH
> Chemists track the system's energy with a quantity called enthalpy, H. Think of it as the chemical energy stored in the substances, in their bonds and in how their particles are arranged. We can't measure H itself, but we can measure how it changes. Delta H equals the enthalpy of the products minus the enthalpy of the reactants. In an exothermic change, the system loses energy, so delta H is negative. In an endothermic change, it's **positive**.

Visual: board clears; two coded bars side by side: "H(reactants)" and "H(products)". On "enthalpy, H" gloss card "enthalpy, H: the chemical energy stored in the substances". On "We can't measure H itself" the bars' bottoms fade into a grey haze (no zero line), tag "only the change can be measured". On "Delta H equals" the strip "ΔH = H(products) − H(reactants)" writes. On "exothermic change" the products bar is shorter, the gap bracketed in red "ΔH < 0", with an orange arrow leaving the gap "energy out"; on "positive" a second pair beside it with the products bar taller, gap bracketed blue "ΔH > 0", a blue arrow entering "energy in" (ink hand tag "products minus reactants" with a pen ring around the strip's minus sign).

### 6. drawing the profile
> An energy profile shows this as a picture. The vertical axis is enthalpy. The horizontal axis is the progress of the reaction, from reactants to products, not time. Take methane burning in a Bunsen burner. The reactants, methane and oxygen, start at one level. The products, carbon dioxide and water, end eight hundred and ninety kilojoules per mole lower. That drop is delta H, minus eight hundred and **ninety**.

Visual: the bars slide aside; axes draw at the right: vertical "enthalpy, H" (no zero, no ticks), horizontal "reaction progress" with a grey tag "not time". On "methane burning" `m5x-bunsen-burner-v1.png` (lit) sits small at the left. On "start at one level" a short horizontal line at upper left labelled "CH₄(g) + 2O₂(g)", tag "reactants". On "end eight hundred and ninety kilojoules per mole lower" a lower line at the right "CO₂(g) + 2H₂O(l)", tag "products"; a dashed guide from the reactant level across. On "ninety" a red single-headed arrow from the reactant level down to the product level, label "ΔH = −890 kJ mol⁻¹" framed in a dark-ink box with a green tick (tags "not to scale" and "products cooled to 25 °C: water as H₂O(l)"; red hand tag "drop = ΔH").

### 7. the hill: activation energy
> But if burning methane releases so much energy, why doesn't the gas catch fire by itself? Remember activation energy from the rates videos. Before new bonds can form, collisions have to start breaking the old ones, so the energy has to rise first. On the profile, that's a hill. Its top is called the transition state, and the height from the reactants up to the top is the activation energy. A spark gives the first collisions enough energy. After that, the heat released keeps the reaction **going**.

Visual: on "why doesn't the gas catch fire by itself" the Bunsen plate swaps to `m5x-bunsen-burner-unlit-v1.png` with a coded faint gas shimmer above the barrel (tag "gas on, no flame"). On "Remember activation energy" a small thumbnail of v13's bar and energy spread. On "the energy has to rise first" the curve draws from the reactant level, up a hill, and down to the product level. On "transition state" the peak is ringed amber with gloss "transition state: the top, where old bonds are partly broken and new ones partly formed". On "the height from the reactants up to the top" an amber double-headed arrow from the reactant level to the peak, label "Eₐ". On "A spark" a small coded striker flash at the barrel top and the plate cross-fades to `m5x-bunsen-burner-v1.png` (lit); a pen arrow tracks a dot over the hill. On "keeps the reaction going" warm-orange arrows leave the product side toward the plate, and new dots climb from the reactant level fed by them (a loop arrow "heat released → next collisions"; amber hand tag "the hill comes first").

### 8. two arrows to get right
> Two arrows to get right. The activation energy arrow starts at the reactants' level, not at the bottom of the axis, and goes up to the peak. The delta H arrow starts at the reactants and ends at the products. Here it points down, so delta H is **negative**.

Visual: (stage change: the arrows check at full width; about 19 s) the Bunsen plate clears and the profile enlarges to fill the frame. On "not at the bottom of the axis" a ghost arrow from the horizontal axis up to the peak draws in grey and is crossed in red (red hand tag "not from zero"). On "goes up to the peak" the amber Eₐ arrow pulses with its base ringed at the reactant level. On "starts at the reactants and ends at the products" the red ΔH arrow redraws from tail to head. On "negative" the five labels light in turn: "reactants", "products", "transition state", "Eₐ", "ΔH" (a small checklist "5 labels" ticks).

### 9. an endothermic profile
> Now an endothermic change. Heating limestone, calcium carbonate, breaks it down into calcium oxide and carbon dioxide. Here the products end higher than the reactants, by about a hundred and seventy-eight kilojoules per mole, so delta H is positive and the arrow points up. The system has to take in that energy, which is why a lime kiln must be heated the whole time. The activation energy is still measured from the reactants to the **peak**.

Visual: (stage change: the limestone profile with its plates; about 33 s) the methane profile slides left and shrinks to a thumbnail; a second profile draws large at the right. On "calcium carbonate" the reactant level "CaCO₃(s)" draws at lower left with `y11c-limestone-lumps-v1.png` (from m4-v14) small beside it; on "calcium oxide and carbon dioxide" the product level "CaO(s) + CO₂(g)" higher at the right with `y11c-quicklime-lumps-v1.png` beside it at the same scale. On "about a hundred and seventy-eight" a blue upward ΔH arrow "ΔH ≈ +178 kJ mol⁻¹" (tag "not to scale"). On "take in that energy" cool-blue arrows enter the system from below (energy in). On "heated the whole time" a grey tag "lime kiln: kept hot" (no plate). On "peak" the hill draws above the product level, the peak ringed, the amber Eₐ arrow from the reactant level to the peak (blue hand tag "rise = ΔH, positive").

### 10. the trap: enthalpy, not temperature
> Here's a trap. In the exothermic profile, the products sit lower. Does that mean they're colder? No. The flame is hot, and the water above it warms up. The vertical axis is enthalpy, the energy stored in the chemicals, not temperature. The products store less energy because the rest has flowed out as heat, and that's exactly what makes the surroundings **hotter**.

Visual: split screen: left, the methane profile with the product level ringed and a thought chip "lower = colder?"; right, `m7-spirit-burner-calorimeter-v1.png` with its readout "31.2 °C". On "No" the chip is crossed. On "The vertical axis is enthalpy" the axis title pulses and a crossed ghost label "temperature" slides off it. On "the rest has flowed out as heat" an orange arrow leaves the ΔH gap on the profile and arrives at the can on the right. On "hotter" the can's readout pulses (red hand tag "lower H, hotter surroundings" on the crossed chip).

### 11. from a thermometer to a profile
> So you can go from a thermometer to a profile. If the surroundings warm up, energy left the system, the products sit lower, and delta H is negative. If the surroundings cool down, energy went into the system, the products sit higher, and delta H is positive. So dissolving ammonium chloride gets a profile with the products **higher**.

Visual: the rule card writes in two columns. Left (orange): "surroundings warm up" → "energy out of the system" → "products lower" → "ΔH negative: exothermic", each row on its cue. Right (blue): "surroundings cool down" → "energy into the system" → "products higher" → "ΔH positive: endothermic". Beneath the card the thermometer-to-profile slider runs (see Simulation): it first rests on "+11.7 °C" (the burner) with the product level below and the red arrow down. On "dissolving ammonium chloride" the foam cup thumbnail "−5.8 °C" joins the right column and the slider sweeps through zero to "−5.8 °C": the product level rises above the reactants and the arrow turns blue and points up. On "higher" the sketch labels write: "NH₄Cl(s)" low, "NH₄⁺(aq) + Cl⁻(aq)" higher (no numbers); blue hand tag "cooler surroundings: products higher".

### 12. the thermochemical equation
> We can also write delta H next to the equation. That's called a thermochemical equation. Methane plus two oxygen gives carbon dioxide plus two water, with every state shown, and delta H equals minus eight hundred and ninety kilojoules per mole. Per mole here means for the equation as written, so one mole of methane burning. The states matter, because liquid water and steam store different amounts of **energy**.

Visual: the equation strip writes large: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)   ΔH = −890 kJ mol⁻¹". On "thermochemical equation" gloss "thermochemical equation: a balanced equation with states and ΔH". On "every state shown" each state symbol rings in turn. On "for the equation as written" a bracket under the whole equation "for the equation as written: 1 mol CH₄". On "liquid water and steam" the "(l)" is ringed and a ghost "(g)" beside it with grey tags "products cooled to 25 °C: water as H₂O(l)" and "as steam, H₂O(g): about −802 kJ mol⁻¹". On "energy" the sign "−" is ringed red, tag "always write the sign".

### 13. energy exits, energy enters
> Here's a way to keep the words straight. Exothermic, energy exits. Endothermic, energy **enters**.

Visual: the memory line writes large in the explainer's handwriting style: "Exothermic: energy exits." (orange, with outward arrows and the "Ex" letters underlined) and on "Endothermic, energy enters" "Endothermic: energy enters." (blue, inward arrows, "En" underlined). Under each, the matching small profile.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. In an instant cold pack, solid ammonium nitrate dissolves in water, and the pack's temperature falls from twenty-two degrees to four degrees. Classify the change as exothermic or endothermic, and justify your answer using the system and surroundings. Then state the sign of delta H, and where the products sit on an energy profile. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience") beside `m5x-cold-pack-v1.png`: "An instant cold pack contains solid ammonium nitrate, NH₄NO₃, and water in separate compartments. When the inner seal is broken, the ammonium nitrate dissolves and the temperature of the pack falls from 22 °C to 4 °C. (a) Classify the dissolving of ammonium nitrate as exothermic or endothermic. Justify your answer with reference to the system and the surroundings. (2 marks) (b) State the sign of ΔH and describe the position of the products relative to the reactants on an energy profile diagram. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Endothermic. The temperature of the surroundings fell, so energy flowed from the surroundings, the water and the pack, into the system, the dissolving ammonium nitrate. So delta H is positive, and the products sit higher than the reactants. A temperature fall doesn't mean a negative delta H. Delta H describes the **system**.

Visual: card shrinks to the top. Rows: "endothermic" (blue); "surroundings (water, pack) cooled → energy flowed into the system (dissolving NH₄NO₃)" with inward blue arrows on a small dashed outline; "ΔH > 0: products higher than reactants" with a mini profile. The answer "endothermic: ΔH > 0, products higher" sits in a dark-ink box with a green tick. On "doesn't mean a negative delta H" a chip "ΔH is negative because the temperature decreased" fades in and is crossed in red; on "Delta H describes the system" a red hand tag "ΔH is the system's" writes beside it. Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Use the energy profile to determine the activation energy and the enthalpy change for this reaction, and state whether it's exothermic or endothermic. Pause here to answer.

Visual: `QuestionCard`: "The energy profile diagram for a reaction is shown. (a) Determine the activation energy, Eₐ. (1 mark) (b) Determine the enthalpy change, ΔH, and classify the reaction as exothermic or endothermic. (2 marks)" beside a coded profile: vertical axis "enthalpy (kJ mol⁻¹)" with ticks at −50, 0, 50, 100, 150, 200 and the note "values relative to an arbitrary zero"; reactant level at 40, peak at 160, product level at −50, horizontal axis "reaction progress"; labels "reactants" and "products" only (no arrows). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> The activation energy is from the reactants at forty up to the peak at a hundred and sixty, so a hundred and twenty kilojoules per mole. Delta H is products minus reactants, minus fifty minus forty, which is minus ninety kilojoules per mole. Negative, so it's exothermic. A hundred and sixty is the peak's height from zero, not the activation **energy**.

Visual: card shrinks. On the profile: the amber Eₐ arrow draws from 40 to 160, "Eₐ = 160 − 40 = 120 kJ mol⁻¹"; the red ΔH arrow from 40 down to −50, "ΔH = −50 − 40 = −90 kJ mol⁻¹"; "exothermic (products lower)". The two results frame in a dark-ink box with a green tick. On "from zero" a chip "Eₐ = 160 kJ mol⁻¹" fades in beside a grey ghost arrow from 0 to 160; on "energy" it is crossed in red (red hand tag "start at the reactants"). Hold about 1 second.

### 18. conclusion and handoff
> So an energy profile shows an exothermic change with the products below the reactants and a negative delta H, and an endothermic change with the products above and a positive delta H, both with an activation energy hill. A thermometer in the surroundings tells you which one you've got. But how much energy flowed? The water in this can warmed by eleven point seven degrees. How can that temperature rise tell us how many joules flowed into **it**?

Visual: the two small profiles side by side with the memory line under them. On "products below the reactants" the methane profile's red arrow pulses; on "products above" the limestone profile's blue arrow pulses; on "activation energy hill" both amber Eₐ arrows pulse. On "A thermometer in the surroundings" the rule card thumbnail. On "But how much energy flowed?" the board settles into the final frame: `m7-spirit-burner-calorimeter-v1.png` large at the left, readout "31.2 °C", "started at 19.5 °C", label "200.0 g of water", orange arrows into the can; the methane profile small at the right with "energy out: how much?". On "eleven point seven degrees" the amber chip "The water warmed by 11.7 °C. How many joules flowed into it?". On "it" the chip "Next: How can a calorimeter turn a temperature rise into heat transfer?" writes. Hold about 2 seconds. This is the final frame (m4-v02 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. System: the chemicals changing. Surroundings: everything else, including the thermometer.
2. Exothermic: energy out, surroundings warm, ΔH negative.
3. Endothermic: energy in, surroundings cool, ΔH positive.
4. Profile: vertical axis enthalpy, not temperature. Eₐ: reactants to peak.
5. Thermochemical equation: states, ΔH with its sign, kJ mol⁻¹ for the equation as written.

Memory aid (framed card, on the notes screen): *Exothermic: energy exits. Endothermic: energy enters.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why the thermometer shows the direction (3: it is in the surroundings); why ΔH is negative for exothermic (5: the system loses stored energy); why a hill comes first (7: old bonds must start to break); why methane needs a spark and then keeps burning (7); why an endothermic kiln needs constant heating (9); why lower products are not colder (10).
- **Misconceptions addressed:** "the reaction gets hot" (4); x-axis as time (6); Eₐ from zero (8; crossed in A2); lower means colder (10); temperature fall means negative ΔH (crossed in A1).
- **One idea at a time:** observation (1, 2), system (3), direction (4), ΔH (5), profile levels (6), hill (7), arrows (8), endothermic profile (9), trap (10), thermometer to profile (11), equation format (12).
- **Video makes it easier:** arrows crossing the dashed system outline outward or inward (3, 4); enthalpy bars become profile levels (5, 6); the dot over the hill after the spark (7); the crossed axis label "temperature" and the arrow from the ΔH gap to the hot can (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 24 s and 26 s.
- **Avoided double teaching:** activation energy and collisions (m3-v13, recalled); the catalysed peroxide (m3-v15, opening only); combustion equations (m3-v04).
- **Syllabus coverage:** `C4-IQ1-01` temperature changes measured for combustion and dissociation of an ionic substance (1, 2, 11); `C4-IQ1-03` energy profiles constructed and analysed for enthalpy change and activation energy (6 to 11, A2).
- **Out of scope by design:** q = mcΔT (v02); molar enthalpy (v03, v04); catalysed profiles (v05); scaling and reversing (v07); reverse activation energy.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Endothermic (1 mark). The temperature of the surroundings (the water and the pack) falls, so energy flows from the surroundings into the system (the dissolving ammonium nitrate) (1 mark). (b) ΔH is positive (1 mark); on an energy profile the products sit higher than the reactants (1 mark). Classic mistake (crossed): "ΔH is negative because the temperature decreased".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) Eₐ = 160 − 40 = 120 kJ mol⁻¹ (1 mark). (b) ΔH = H(products) − H(reactants) = −50 − 40 = −90 kJ mol⁻¹ (1 mark); negative, so exothermic (1 mark). Classic mistake (crossed): "Eₐ = 160 kJ mol⁻¹" (measured from zero).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 21.0 → 32.5 °C (11.5 °C) | opening, 1 |
| Ammonium chloride (illustrative) | 5.0 g in 50.0 mL; 21.0 → 15.2 °C (−5.8 °C) | 1, 2, 11 |
| Ethanol burner (site data) | 200.0 g water; 19.5 → 31.2 °C (+11.7 °C) | 2, 10, 18, final frame |
| Methane | ΔH = −890 kJ mol⁻¹ (H₂O(l), products at 25 °C); about −802 kJ mol⁻¹ with H₂O(g) (grey tag only) | 6, 12 |
| Calcium carbonate | ΔH ≈ +178 kJ mol⁻¹ | 9 |
| Cold pack (A1) | 22 °C → 4 °C | 14, 15 |
| A2 profile | reactants 40, peak 160, products −50 kJ mol⁻¹; Eₐ = 120; ΔH = −90 | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 32.5 − 21.0 = 11.5; 21.0 − 15.2 = 5.8; 31.2 − 19.5 = 11.7.
- NH₄Cl: MM = 14.01 + 4 × 1.008 + 35.45 = 53.49; 5.0 ÷ 53.49 = 0.0935 mol; × 14.8 = 1.38 kJ; 1384 ÷ (55 × 4.18) = 6.0 °C (ideal).
- CH₄: −393.5 + 2 × (−285.8) + 74.8 = −890.3 kJ mol⁻¹ (H₂O(l)); −393.5 + 2 × (−241.8) + 74.8 = −802.3 kJ mol⁻¹ (H₂O(g)).
- CaCO₃: −635.1 − 393.5 + 1207.6 = +179.0 (CRC calcite); +178.3 with −1206.9 (site's +178 kept).
- A2: 160 − 40 = 120; −50 − 40 = −90.
- Equations balanced: CH₄ + 2O₂ → CO₂ + 2H₂O (C 1, H 4, O 4); CaCO₃ → CaO + CO₂.

## Memory aid check

- **"Exothermic: energy exits. Endothermic: energy enters."** A common prefix aid (exo-, out; endo-, in). Meaning: the energy flow is described from the system's point of view, so "exits" means leaves the system into the surroundings. Assumption checked: the aid is about the system, consistent with ΔH (scene 5) and with the trap in attempt 1 (the cold pack's energy enters the system, even though the pack feels cold). It does not refer to temperature directly, so it does not invite "products lower means colder".
- **Considered, not used:** "ΔH negative, heat given" rhymes (the sign rule is spoken in scene 11 instead); the site's six-things graphic (too many items at once).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,372 characters**, unchanged from Revision 1, 19 scenes (per scene: 307, 340, 385, 360, 445, 410, 498, 253, 440, 362, 331, 410, 94, 364, 322, 182, 350, 444, 75). At 13.3 characters per second the speech is about 479 s; add about 10 s of settling (the readouts in 2, the hill draw and spark in 7, the two-profile set and plates in 9, the slider in 11), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 570 s**, at the cap.

## Scene list and build ids

Lesson key `c-y11-m4-v01` (route chem-y11-m4-v01; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v01`.

In order (19 scene headings, all `### N.`): hook-prediction, measuring-changes, system-surroundings, exo-endo, enthalpy-change, drawing-profile, activation-hill, two-arrows, endothermic-profile, enthalpy-not-temperature, thermometer-to-profile, thermochemical-equation, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m3-v15's final frame into scene 1 by camera continue, then a clear change to the foam cup; 1 to 2 camera continue (the burner slides in beside the cup); 2 to 3 camera push into the cup; 3 to 4 camera continue; 4 to 5 clear change to the bars; 5 to 6 camera continue (bars become levels); 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 camera continue (the first profile shrinks); 9 to 10 split screen; 10 to 11 clear change; 11 to 12 clear change; 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v01-learning-review.md`, `checks/c-y11-m4-v01-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (2000 × 2000; lidded foam cup with a cutaway window of clear water and a steel probe through the lid): scenes 1 to 4, 11.
- `public/assets/chemistry/m7-spirit-burner-calorimeter-v1.png` (2000 × 2000; copper can with a red-liquid thermometer, clamped over a lit spirit burner, cap beside it): scenes 2 to 4, 10, 18, final frame.
- `public/assets/chemistry/m5x-bunsen-burner-v1.png` and `m5x-bunsen-burner-unlit-v1.png` (aligned lit and unlit pair): scenes 6, 7.
- `public/assets/chemistry/m5x-cold-pack-v1.png` (2000 × 2000; a clear pack of white crystals and liquid): scene 14.
- `public/assets/chemistry/y11c-watch-glass-v1.png` (exists): scenes 1, 2 (the powder heap on it is coded).
- Revision 2 additions (inspected 6 November on a paper contact sheet at about 300 px): `public/assets/chemistry/y11c-limestone-lumps-v1.png` and `public/assets/chemistry/y11c-quicklime-lumps-v1.png` (1254 × 1254 each, delivered by brief 184 for m4-v14): scene 9, beside the reactant and product levels.
- `y11c-flask-peroxide-mno2-plug-fizz-v1.png`, `m7-temp-probe-sleeve-stand-v1.png`, `y11c-top-pan-balance-v1.png`: opening frame only (from m3-v15).
- **Inspected, not used:** `p02-foam-cup-in-beaker-v1.png` (the double-cup Year 12 set-up; the single cup is enough here); `c8-thermometer-hot-v1.png` and `m5x-thermometer-cold-v1.png` (free-standing thermometers; both set-ups already carry a thermometer or probe, and the coloured liquids would suggest "hot" and "cold" objects); `m7-spirit-burner-calorimeter-shield-v1.png` (the draught shield belongs to v03's heat-loss story).

Need: no new plates (Revision 2 reuses the limestone and quicklime pair).

Coded: readouts, powder heap and tipping, stir swirl, method card, system boundary and energy arrows, ion lens, enthalpy bars, energy profiles (axes, levels, hill, arrows, labels), split screen, rule card and the thermometer-to-profile slider, equation strip, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson01.sa.html` (ΔH definition; exo/endo table; "surroundings get hot" Common Error; five labels; Eₐ from the reactant level; methane thermochemical equation; states non-negotiable) and that the ethanol readings match `module4/lesson02.sa.html` worked example 1.
3. Confirm ΔH values: CH₄ combustion −890 kJ mol⁻¹ (H₂O(l)); CaCO₃ decomposition about +178 kJ mol⁻¹; ammonium chloride ΔsolH about +15 kJ mol⁻¹ (author note b).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing (A2's profile has no arrows).
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (powder tips and the burner lights by code); no em dash (U+2014); Australian spelling; the safety chip matches current NSW school guidance for ethanol burners and ammonium chloride.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m3-v15's final frame, and send the final frame to the m4-v02 designer.

## YouTube metadata (draft)

Title: Exothermic vs Endothermic: Energy Profile Diagrams Explained | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Burning ethanol warms water; dissolving ammonium chloride cools it. Measure both temperature changes, then use system and surroundings to see which way the energy flows. Learn what enthalpy and ΔH mean, draw energy profile diagrams for methane burning and limestone decomposing, and label the reactants, products, transition state, activation energy and ΔH. Find out why a Bunsen burner needs a spark, and why lower products on the diagram do not mean colder products. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including:"
"combustion"
"dissociation of ionic substances in aqueous solution (ACSCH018, ACSCH037)"
"construct energy profile diagrams to represent and analyse the enthalpy changes and activation energy associated with a chemical reaction (ACSCH072)"

Previous: How do surface area and catalysts change reaction rate differently? Next: How can a calorimeter turn a temperature rise into heat transfer?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Length (learning review).** 19 scenes and about 570 s, at the cap (two sentences were already cut in Revision 1). Revision 2 resolved both brief 183 findings with no narration change, so neither reserve cut was used. Any later repair that adds length must be paid for: reserve cuts are scene 12's last sentence (states; about 85 characters; the key notes keep "every state shown") and scene 9's "which is why a lime kiln must be heated the whole time" clause (about 55 characters).
- **2. Thermochemical-equation scope (root).** Format only; scaling and reversing are left to v07, where Hess's law uses them. The route listed the site's thermochemical-equations section; if root wants the scaling rule here, add one sentence to scene 12 (about 100 characters) and drop reserve cut 1.
- **3. Ammonium chloride readings (science check).** 5.0 g in 50.0 mL, 21.0 → 15.2 °C, illustrative from ΔsolH ≈ +14.8 kJ mol⁻¹. v04 may reuse or replace them.
- **4. Safety (science check).** Ethanol spirit burner under a copper can (teacher-approved fuel, burner capped when out, cooled before refilling) and ammonium chloride in a foam cup. Revision 2: the school-approved method and SDS must be linked before practical recording (author note h); root owns that link. Revision 3: resolved by root decision 19 (method strip on screen, painted still, SDS named in author note h); nothing further needed before voicing.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does scene 10's split screen remove the "lower means colder" idea at playback speed; is the dot-over-the-hill loop in scene 7 clear), then the science check and Codex error check.
- Checker output (5 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 2 should fix; both resolved in Revision 2 with no narration change.
- Checker output (Revision 2, 6 November): narration 6,372 characters (unchanged); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m4-v01-learning-review.md`, `checks/c-y11-m4-v01-science-check.md`; both list the same two):
1. Methane product state (should fix): the profile (scene 6) and the equation strip (scene 12) now carry the tag "products cooled to 25 °C: water as H₂O(l)", and scene 12 adds a grey tag "as steam, H₂O(g): about −802 kJ mol⁻¹". The equation, the −890 kJ mol⁻¹ value and the narration are unchanged. Author note (i), the Profiles decision, "Numbers used" and "Numbers to verify" record −802.3 kJ mol⁻¹ for H₂O(g) (Python: −393.5 + 2 × (−241.8) + 74.8).
2. Exact fuel method (should fix): new author note (h) requires the school-approved spirit-burner method and the product SDS (cold filling, cooling before refilling, fuel stock away from flames, extinguishing by capping) before practical recording; the safety chip adds "cool before refilling". No learner narration changes, so neither reserve cut was needed at the 570 s cap.

Visual upgrade (teaching logic unchanged):
- Scene 1 opens on m3-v15's painted flask, then the foam cup large with a 52 px readout.
- Live readout: the thermometer-to-profile slider (scene 11): the surroundings' temperature change sweeps from +11.7 °C (burner) through zero to −5.8 °C (ammonium chloride) while the product level and ΔH arrow flip.
- Stage changes so no set-up runs past about 37 s (Board layout): Revision 1's single profile for scenes 6 to 9 (about 120 s) is split by the full-width arrows check (8) and the limestone profile with the existing limestone and quicklime plates (9).
- Framed answers with a green tick: ΔH = −890 kJ mol⁻¹ (6), feedback 1 and feedback 2. Crossed slips carry red hand tags ("the surroundings change", "not from zero", "lower H, hotter surroundings", "ΔH is the system's", "start at the reactants").
- Hand tags and a pen mark in role colours in every teaching scene (1 to 12).
- Memory card framed; key notes cut to five short bullets (about 359 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The opening (m3-v15's final frame) and the final frame (m4-v02 opens on it) are unchanged.

New plate requests: none (existing `y11c-limestone-lumps-v1.png` and `y11c-quicklime-lumps-v1.png` added, inspected).

Counts: 6,372 characters (unchanged); about 570 s (unchanged, at the cap).

## Revision 3 (7 Nov 2026)

Brief 219 error check (`checks/c-y11-m4-v01-rev2-error-check.md`), should-fix finding resolved (root decision 19 via the Module 4 after-183 note):
- Scene 2: a grey method strip "teacher demonstration or checked footage: follow your school's approved method" sits under the existing safety chip on the practical view. The spirit burner stays the painted still; no fuel procedure is animated. Author note (h) names the ethanol and ammonium chloride SDS as the author-side references; open decision 4 is marked resolved.
- Display and author-plan change only, as required at the 570 s cap. No speech change. Narration 6,372 characters (sum of 19 scene strings), about 570 s. Bold cues quoted in spoken order (Revision 3 also ties scene 13's "enters" to the spoken "Endothermic, energy enters" and scene 15's "system" to "Delta H describes the system"; no timing change); no em dashes.
