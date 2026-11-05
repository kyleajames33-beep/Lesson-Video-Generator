# Year 11 Chemistry M4 V04: Enthalpy of solution. Why can dissolving an ionic substance warm or cool water? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,968 characters, 18 scenes, about 540 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 73, between `chem-y11-m4-v03` and `chem-y11-m4-v05`; a concept, practical and calculation video. Templates: `chem-y11-m4-v03.md` (same designer, series layout), `chem-y11-m4-v02.md` (calculation staging, colour key), `chem-y11-m4-v01.md` (enthalpy-level styling), `math-a12-d10.md`, `phys-y11-fa1-v01.md`, `bio-y11-fa1-v05.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v04` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Measure dissolution temperature, model competing separation/hydration energy and compute an enthalpy with uncertainty."; next handoff: "Why does a catalyst change activation energy but not reaction enthalpy?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson04.sa.html` (SHA256 `045d15bcb83112f6eeb794627f78a5d87b823b7bf5ffca19c14c3a3756b09d7d`, recomputed, matches the route), sections `l04-the-dissolution-calorimeter-setup-title`, `l04-worked-examples-title`. Used: the cold-pack and NaOH hook ("They're both ionic solids dissolving in water. What's the difference?"); the setup (polystyrene cup, weighed water, weighed solid, stir, record maximum or minimum); "m = m(water) + m(solute)"; n = moles of solid dissolved; ΔHsoln = −q/n; the two-step model (lattice dissociation, endothermic; hydration, exothermic; "the larger step decides the sign") and its enthalpy-level diagram; the sign rule and trap 3 ("Temperature drop must mean negative ΔHsoln"); traps 1 and 2 (n of water; m of water only); the safety paragraph (glasses and gloves; NaOH corrosive, few pellets, solid into water; ammonium nitrate an oxidiser); worked example 1's masses (5.35 g NH₄Cl, 53.49 g mol⁻¹, 100.0 g water, 0.1000 mol, starting at 22.5 °C) with a corrected final temperature (site note 1); worked example 2's NaOH context (A1 uses new numbers); the accepted values +14.8 (NH₄Cl) and +25.7 (NH₄NO₃). Not used: the three-calorimeter comparison table (one sentence in scene 11 is enough), entropy (`chem-y11-m4-v12` and later), "Born–Haber" naming (site note 3), the 3M history (site note 4).

Owner rules applied: as `chem-y11-m4-v03.md` (one learner question; no people, hands or faces: solids tip from a watch glass and are stirred by code; real apparatus as painted plates; ion and water particle models, level diagrams, calculation rows and readouts coded, particle diagrams in HSC convention with water drawn as bent molecules showing δ+ and δ−; 3 s prediction; "Pause here to answer." then a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Energy Changes in Chemical Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ1-01`: "conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including:"
  - "dissociation of ionic substances in aqueous solution (ACSCH018, ACSCH037)"
- `C4-IQ1-02`: "investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 43)

**Boundary:** opens on m4-v03's final frame (foam cup at 21.0 °C, the cold and hot packs, "Why can dissolving warm or cool water?"). Teaches: a prediction (separating ions takes energy in); separating ions works against ionic attraction (lattice energy, plain meaning); hydration releases energy as polar water molecules attract the ions (hydration energy); dissolving is the small difference between two large steps (table salt's numbers); the bigger step sets the sign (ammonium nitrate cools, calcium chloride warms), shown on an enthalpy-level diagram; the practical method and safety; the enthalpy of solution; a worked example (ammonium chloride; m is water plus solid; n is the solid; the sign); the uncertainty of the result from the temperature readings; comparison with the data value within that uncertainty; why the foam cup does better than the burner. Not taught: entropy and why endothermic dissolving happens at all (later Module 4; author note e), lattice and hydration energy calculations or cycles, neutralisation enthalpy (Year 12), solubility (m1-v27, Module 2).

## Decisions

- **Learner question (route wording kept).** "Why can dissolving an ionic substance warm or cool water?" The answer, in order: separating the ions takes energy in (2); hydrating them gives energy out (3); both are large and nearly equal (4); whichever is bigger sets the sign, so some salts cool water and others warm it (5); a foam cup measures the net change (6 to 9), with a known uncertainty (10, 11).
- **Opening frame (equals `chem-y11-m4-v03.md`'s final frame, same designer).** Left, small: `m7-spirit-burner-calorimeter-shield-v1.png` with "−626 against −1367 kJ mol⁻¹: heat escaped" and tag "flame outside the water". Centre: `m6-foam-cup-calorimeter-v1.png`, readout "21.0 °C", label "reaction inside the water". Right: `m5x-cold-pack-v1.png` ("ammonium nitrate dissolving: cools", blue down arrow) above `m5x-hot-pack-v1.png` ("calcium chloride dissolving: warms", orange up arrow). Amber chip "Why can dissolving warm or cool water?". The "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Pulling the ions apart: releases energy, or takes energy in?" Answer: takes energy in (scene 2). A common misconception is that breaking things up releases energy; the prediction surfaces it before the model.
- **Separation (scene 2).** Each ion is attracted to the oppositely charged ions around it (m1 ionic bonding, recalled); pulling them apart works against those attractions, so energy goes in. Lattice energy: "the energy needed to separate one mole of an ionic solid into separate ions" (on screen "(gaseous ions)"; the site's dissociation convention, positive). The last sentence ("every salt would cool the water") sets up the need for step 2.
- **Hydration (scene 3).** Water is polar (m1); δ− oxygen ends face cations, δ+ hydrogen ends face anions; forming these attractions releases energy: hydration energy. Refers back to m1-v27's "trade of attractions" without re-teaching it. Particle model: a 2D lattice of alternating ions; ions leave the edge and gain a shell of bent water molecules, oriented correctly.
- **Two big numbers (scene 4; the surprise).** Table salt: lattice energy about +787 kJ mol⁻¹; hydration about −783 kJ mol⁻¹; net about +4 kJ mol⁻¹ (data +3.9), so salt barely changes the water's temperature (author note b). Numbers rounded and tagged "about"; the point is that the net is a small difference between large steps, which is why the sign can go either way.
- **The bigger step sets the sign (scene 5).** Ammonium nitrate: separation > hydration; extra energy taken from the water; endothermic, ΔH positive (data +25.7 kJ mol⁻¹, on the diagram only). Calcium chloride: hydration > separation; extra energy warms the water; exothermic, ΔH negative (no number; author note c). Two coded enthalpy-level diagrams (m4-v01 styling: levels as short lines, arrows up blue for energy in, down orange for energy out, net ΔH arrow red or blue): start "solid + water", top "separated ions", end "hydrated ions". Not to scale (tag).
- **Method and safety (scene 6; `C4-IQ1-01`).** The site's procedure: weigh about 100 g of water into a foam cup; record its temperature; weigh the solid; add it and stir until dissolved; record the lowest (or highest) temperature. Safety spoken briefly and on a chip: safety glasses; small amounts as supplied; ammonium chloride harmful if swallowed and an eye irritant; sodium hydroxide corrosive, gloves and eye protection, solid added to water; dispose of solutions as directed. The solid tips from `y11c-watch-glass-salt-v1.png` by code. Water is weighed (so its uncertainty is negligible in scene 10).
- **Enthalpy of solution (scene 7).** "The enthalpy change when one mole of a substance dissolves in water" (site key term; the site's note that tabulated values are for a stated dilution is author note d).
- **Worked example (scenes 7, 8; site worked example 1's masses, corrected reading).** 5.35 g NH₄Cl (M = 53.49 g mol⁻¹, 0.1000 mol) in 100.0 g water, 22.5 → 19.3 °C (the site prints 18.1 °C, a fall larger than the data value allows; site note 1). m = 105.35 g (water plus solid; site trap 2); ΔT = −3.2 K; q = 105.35 × 4.18 × (−3.2) = −1409 J; ΔH = −q/n = −(−1.409) ÷ 0.1000 = +14.1 kJ mol⁻¹. Layout as v03 (task strip, equation strip, grouped givens, one row per stage).
- **Sign and n traps (scene 9; site traps 1 and 3).** Crossed "ΔH = −14.1 kJ mol⁻¹ (the temperature fell)"; crossed "n = moles of water". m4-v02's memory aid ("all from the stuff that warmed") is extended in words: here the stuff "whose temperature changed" is the whole solution (the v02 memory check anticipated this).
- **Uncertainty (scene 10; route stop).** The probe reads to 0.1 °C, so each reading is ±0.1 °C (one in the last digit, as ws-v05 uses for digital instruments) and ΔT is ±0.2 °C; 0.2 ÷ 3.2 = 6.3% ("about six per cent"). Masses on a 0.01 g balance contribute 0.2% (solid) and 0.01% (water): negligible. Because q and ΔH come from multiplying and dividing, the result carries the same percentage: +14.1 ± 0.9 kJ mol⁻¹. This is explained in one sentence, so the video does not depend on ws-v05 keeping its "add percentage uncertainties" rule (root decision m2-5).
- **Comparison (scene 11).** Range 13.2 to 15.0 kJ mol⁻¹; data value +14.8 (author note a) inside it; percentage error 4.8% ("about five per cent") is smaller than the 6% uncertainty, so the result agrees with the data (ws-v05's comparison, used). Direction note: heat leaking in from the room would shrink the fall and make the result low, which fits. Contrast with v03: the change happens inside insulated water.
- **Memory aid:** "Separate: energy in. Hydrate: energy out. The bigger step sets the sign." (see "Memory aid check"), scene 12.
- **Attempts (original wording, HSC style).** A1 (calculate; NaOH, new numbers): 2.00 g NaOH (M = 40.00 g mol⁻¹) in 100.0 g water, 21.2 → 26.2 °C. Model: m = 102.0 g; q = 2132 J; n = 0.0500 mol; ΔH = −42.6 kJ mol⁻¹. Crossed: "m = 100.0 g (water only): −41.8 kJ mol⁻¹". A2 (explain; KNO₃ cools water): separation > hydration; energy taken from the water; endothermic; ΔH positive. Crossed: "ΔH negative because the temperature fell".
- **Mistake scene:** none separate. "Breaking the solid up releases energy" (1, 2); sign from the temperature fall (9; crossed in A2); n of water (9); m of water only (7; crossed in A1).
- **Handoff (route next: `chem-y11-m4-v05`, "Why does a catalyst change activation energy but not reaction enthalpy?").** Scene 17: ΔH depended only on where the route started and finished; a catalyst gave hydrogen peroxide a different route in m3-v15; does a different route change ΔH? Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted; module 4 lesson 4):**
  1. Worked example 1: 5.35 g NH₄Cl in 100.0 g water falling 22.5 → 18.1 °C gives +19.3 kJ mol⁻¹, and the step says "the discrepancy reflects heat exchange with surroundings". With the data value +14.8 the largest possible fall is about 3.4 °C; heat entering from the surroundings would make the fall smaller and the result lower, not higher (the lesson's own drill 3 says so). Suggest a final temperature of 19.3 °C (+14.1 kJ mol⁻¹, slightly low, consistent with heat gain), as used in this video.
  2. The same pattern recurs: drill 1 to 3 (5.00 g NH₄NO₃ in 95.0 g, fall 4.3 °C, ideal 3.8 °C), Q8 experiment C (3.74 g NH₄Cl in 150.0 g, fall 2.2 °C, ideal 1.6 °C, giving +20.2 while the model answer says "underestimate"), and the Core task (4.20 g KNO₃ in 120.0 g, fall 3.7 °C, ideal 2.8 °C, +46 against +34.9). Suggest choosing falls slightly below the ideal so each result is a little low, matching the heat-gain explanation; drill 3's specific-heat explanation can then go.
  3. "Born–Haber cycle for dissolution" names the two-step dissolution model. A Born–Haber cycle is the formation cycle for an ionic solid; the dissolution model is a simple Hess cycle. Suggest "Hess cycle for dissolution (lattice and hydration steps)".
  4. Revisit: "the 3M engineers' 1959 cold pack design ... The 3M engineers measured this as ΔHsoln = +25.7 kJ mol⁻¹" is unsourced; +25.7 is a standard data value (CRC +25.69). Suggest removing the attribution or citing it.
  5. Minor arithmetic: Q6 prints q = −2122.5 J (108.01 × 4.18 × 4.7 = −2122.0 J) and Q7 prints 1981.7 J (153.0 × 4.18 × 3.1 = 1982.6 J); the final answers are unchanged.
  - Checked and correct: worked example 2 (202.0 g; 2195.7 J; 0.0500 mol; −43.9 kJ mol⁻¹); drill 2 (100.0 g; −1797.4 J); drill 3 arithmetic (+28.8); Q6 (+21.2); Q7 (−26.4); drill 5 (153.74 g; 0.06993 mol).
- **Cause chain taught, in order:** (1) ions attract their neighbours, so separating them takes energy in (2); (2) polar water molecules attract ions, so hydration releases energy (3); (3) both steps are large and similar, so the net is small and can have either sign (4); (4) when separation needs more than hydration gives, the extra comes from the water, which cools (5); when hydration gives more, the extra warms the water (5); (5) the solid becomes part of the solution, so m includes it (7); (6) the water's loss is the system's gain, so a fall means positive ΔH (8, 9); (7) each reading has an uncertainty, so ΔT and the result do too (10); (8) a gap smaller than the uncertainty is not evidence of an error (11).
- **Entry knowledge:** m4-v01 to v03 (system and surroundings, ΔH sign, q = mcΔT, ΔH = −q/n, percentage error); m1 ionic lattices, polar water and m1-v27's trade of attractions; m2 moles; ws-v05 uncertainty and comparing percentage error with uncertainty.
- **Learner-visible vocabulary (plain meaning at first use):** lattice energy (2); hydration, hydration energy (3); enthalpy of solution (7); uncertainty, recalled (10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **cup station** (`m6-foam-cup-calorimeter-v1.png`; coded readout; `y11c-watch-glass-salt-v1.png` tipping by code; coded stirrer); **lattice lens** (scenes 1 to 3: a 2D ionic lattice, cations blue +, anions red −, attraction lines; ions pulled out against stretching lines; bent water molecules with δ+ and δ− labels turning to face each ion); **two-big-numbers bars** (scene 4: an up bar 787 and a down bar 783 side by side, the tiny difference bracketed); **level diagrams** (scenes 5, 17: three levels per diagram, up and down arrows, net ΔH arrow); **calculation board** (scenes 7, 8, 14); **uncertainty bar** (scenes 10, 11: a number line 12 to 16 kJ mol⁻¹ with our result, its ± band shaded and the data value marked); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v02 and v03):** energy in cool blue (up arrows); energy out warm orange (down arrows); ΔH red when negative, blue when positive; q orange; mass amber; n violet; uncertainty band pale teal; data values slate blue; cations blue, anions red, water oxygen red-grey and hydrogen white in the particle model; crossed items red strike.
- **Board layout (constant):** heading top left; cup or particle lens at the left; level diagram, calculation rows or number line at the right.

Author notes (not learner copy):
(a) Enthalpies of solution at infinite dilution, 25 °C (CRC Handbook, "Enthalpy of solution of electrolytes"): NH₄Cl +14.78; NH₄NO₃ +25.69; NaCl +3.88; NaOH −44.51; KNO₃ +34.89; CaCl₂ −81.3 kJ mol⁻¹ (Codex to confirm). The course shows +14.8, +25.7, +3.9 and uses −44.5 for NaOH only in this note.
(b) NaCl lattice dissociation enthalpy about +787 kJ mol⁻¹ (CRC lattice energy table; some tables give 786); total hydration enthalpy of Na⁺ and Cl⁻ derived as ΔsolH − lattice = 3.9 − 787 = −783 kJ mol⁻¹ (published single-ion values vary by a few kJ, so the pair is shown as "about"). Science check confirms.
(c) Calcium chloride's strongly negative ΔsolH comes largely from the hydration of the small, doubly charged Ca²⁺ ion; not spoken (one sentence of extra theory), available if the learning review asks why.
(d) Tabulated enthalpies of solution depend on the final concentration; school results are estimates for the dilute solution made (site key term). Not spoken.
(e) Why an endothermic dissolution happens at all (entropy increase) is a later Module 4 question (`C4-IQ3`); a learner may ask. No tag here, to keep one idea; the learning review may add a grey "why does it happen at all? later in Module 4" tag.
(f) Ideal fall for the worked example: 0.1000 mol × 14.78 kJ ÷ (105.35 g × 4.18) = 3.36 °C; shown 3.2 °C (a little heat gained from the room). A1 ideal rise 0.0500 × 44.51 ÷ (102.0 × 4.18) = 5.22 °C; shown 5.0 °C.
(g) Safety (NSW school practice; site paragraph): safety glasses; gloves for sodium hydroxide; ammonium chloride harmful if swallowed and an eye irritant; sodium hydroxide corrosive (2 g in 100 mL is about 0.5 mol L⁻¹); add solid to water; ammonium nitrate (an oxidiser) appears only in the cold pack, not in the practical. The science check confirms against current guidance.
(h) Pronunciations: "N H four C l" spoken as "ammonium chloride"; "delta H"; "plus or minus"; "zero point one zero zero zero".

Main question: *Why can dissolving an ionic substance warm or cool water?*
Entry knowledge: m4-v01 to v03; m1 ionic lattices, polar water, m1-v27; m2 moles; ws-v05.
Stops after: two-step model and the sign; method; ΔH of solution calculated with its uncertainty and compared with data.
Handoff: chem-y11-m4-v05, catalysts and energy profiles.

## Opening frame and final frame

- **Opening frame:** m4-v03's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v05` opens on it):** left: the ammonium chloride enthalpy-level diagram (coded): bottom-left level "NH₄Cl(s) + water", a blue up arrow "separate ions: energy in" to the top level "separated ions", an orange down arrow "hydrate ions: energy out" to the right level "hydrated ions" (slightly above the start), and a blue net arrow "ΔH = +14.8 kJ mol⁻¹ (data)"; the start and end levels are ringed teal with the tag "ΔH depends only on start and end". Right: `y11c-flask-peroxide-mno2-plug-fizz-v1.png` (the catalysed peroxide flask from m3-v15) with the label "hydrogen peroxide + manganese dioxide: a different route". The amber chip "A different route: does ΔH change?". The chip "Next: Why does a catalyst change activation energy but not reaction enthalpy?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's a foam cup of water at twenty-one degrees. Dissolve ammonium nitrate, the solid in a cold pack, and the water cools. Dissolve calcium chloride, from a hot pack, and it warms. Table salt barely changes it at all. Dissolving pulls a solid apart into its ions. So here's a prediction. Does pulling the ions apart release energy, or take energy **in**?

Visual: opens on m4-v03's final frame; the "Next" chip and the burner thumbnail fade. On "ammonium nitrate" the cold pack pulses and the cup readout dips to a ghost "↓"; on "calcium chloride" the hot pack pulses and the ghost readout "↑"; on "Table salt" a small `y11c-watch-glass-salt-v1.png` slides in with label "sodium chloride: barely changes". Heading writes: "Why does dissolving warm or cool water?". On "pulls a solid apart into its ions" the camera pushes into the cup: the lattice lens opens (alternating + and − ions). Chips "releases energy" and "takes energy in". On "in" the 3 s `Countdown` ring runs.

### 2. separating the ions
> It takes energy in. In an ionic solid, every ion is attracted to the oppositely charged ions around it. Pulling them apart works against those attractions, so energy has to go in. The energy needed to separate one mole of an ionic solid into separate ions is called the lattice energy. If that were the whole story, every salt would cool the water as it **dissolved**.

Visual: "takes energy in" ticks. On "attracted to the oppositely charged ions" attraction lines light between one ion and its four neighbours. On "Pulling them apart" an edge ion moves outward, the lines stretch, and a blue "energy in" arrow points into it. On "lattice energy" gloss card "lattice energy: the energy needed to separate 1 mol of an ionic solid into separate (gaseous) ions" (blue). On "dissolved" a ghost readout shows "every salt ↓?" with a grey question mark.

### 3. hydration
> But there's a second step. Water molecules are polar. Their slightly negative oxygen ends turn toward positive ions, and their slightly positive hydrogen ends turn toward negative ions. Forming those new attractions releases energy. That's hydration, and the energy it releases is the hydration energy. It's the same trade of attractions we saw when we looked at why things **dissolve**.

Visual: on "Water molecules are polar" bent water molecules drift in with δ− on oxygen and δ+ on the hydrogens. On "turn toward positive ions" several turn their oxygen ends to the separated cation; on "turn toward negative ions" others turn their hydrogen ends to an anion. On "Forming those new attractions" short attraction lines form and orange "energy out" arrows leave each shell. On "hydration" gloss card "hydration: water molecules surrounding an ion; hydration energy: the energy released" (orange). On "dissolve" a small grey tag "trade of attractions (Module 1)".

### 4. two big numbers
> So dissolving is a contest between two big numbers. For table salt, separating a mole of ions takes about seven hundred and eighty-seven kilojoules, and hydrating them gives back about seven hundred and eighty-three. The difference is only about four kilojoules, which is why salt water barely changes temperature. Both steps are huge, but the overall change is the small difference between **them**.

Visual: clear change to the two-big-numbers bars. On "seven hundred and eighty-seven" a tall blue up bar "separate: about +787 kJ"; on "seven hundred and eighty-three" a tall orange down bar beside it "hydrate: about −783 kJ". On "only about four kilojoules" the tiny difference at the top is bracketed and magnified: "net: about +4 kJ mol⁻¹ (data +3.9)". On "barely changes temperature" the salt watch glass returns small with "about −1 °C". On "them" both bars pulse together (tag "values for NaCl, rounded").

### 5. the bigger step wins
> For ammonium nitrate, separating the ions takes more energy than hydration gives back. The extra energy comes from the water, so the water cools. That's endothermic, so delta H is positive. For calcium chloride, hydration gives back more than separating takes, so the extra energy warms the water. That's exothermic, with delta H **negative**.

Visual: two enthalpy-level diagrams side by side (tag "not to scale"). Left on "ammonium nitrate": start "NH₄NO₃(s) + water"; a long blue up arrow to "separated ions"; a shorter orange down arrow to "hydrated ions", which ends above the start. On "comes from the water" the cold pack thumbnail at the left with a blue arrow from the water into the diagram; on "delta H is positive" the blue net arrow "ΔH = +25.7 kJ mol⁻¹ (data)". Right on "calcium chloride": start "CaCl₂(s) + water"; a blue up arrow; a longer orange down arrow ending below the start. On "warms the water" the hot pack thumbnail with an orange arrow out; on "negative" the red net arrow "ΔH negative".

### 6. measuring it
> Here's how to measure it. Weigh about a hundred grams of water into a foam cup and record its temperature. Weigh the solid, tip it in, and stir until it has all dissolved. Then record the lowest temperature for a solid that cools the water, or the highest for one that warms it. Wear safety glasses, use only the small amounts you're given, and follow your teacher's instructions for **disposal**.

Visual: clear change to the cup station: `m6-foam-cup-calorimeter-v1.png` with a coded readout; `y11c-watch-glass-salt-v1.png` beside it. Steps write at the right, each on its cue: on "Weigh about a hundred grams of water" step 1 "100.0 g water (weighed)"; on "record its temperature" step 2 (readout "22.5 °C"); on "tip it in" the watch glass tilts by code and the crystals slide in; on "stir" a coded stirrer moves; on "record the lowest temperature" the readout falls and holds; on "or the highest" a ghost readout rises (tag "for a solid that warms"). On "Wear safety glasses" a safety chip: "safety glasses · small amounts as supplied · NH₄Cl: harmful if swallowed, eye irritant · NaOH: corrosive, gloves, add solid to water". On "disposal" the chip settles at the lower left.

### 7. a worked result
> Here's a result for ammonium chloride. We want its enthalpy of solution, the enthalpy change when one mole dissolves. Five point three five grams dissolves in a hundred grams of water, and the temperature falls from twenty-two point five to nineteen point three degrees. The solid is now part of the solution, so m is the water plus the solid, one hundred and five point three five grams. Delta T is minus three point two, so q is minus one thousand four hundred and nine **joules**.

Visual: board settles into the calculation layout beside the cup. On "enthalpy of solution" gloss "enthalpy of solution, ΔHsoln: the enthalpy change when 1 mol of a substance dissolves in water". Task strip: "Find ΔHsoln of NH₄Cl". Givens on their cues: on "Five point three five grams" "m(NH₄Cl) = 5.35 g"; on "a hundred grams of water" "m(water) = 100.0 g"; on "twenty-two point five to nineteen point three" "T: 22.5 → 19.3 °C" (tag "data: HSCScience example"). On "part of the solution" the crystals in the lens dissolve into the water; on "the water plus the solid" the row "m = 100.0 + 5.35 = 105.35 g" (amber). On "minus three point two" "ΔT = 19.3 − 22.5 = −3.2 K"; on "joules" "q = 105.35 × 4.18 × (−3.2) = −1409 J" (orange).

### 8. the enthalpy of solution
> Negative q means the solution lost heat to the dissolving. Next, the moles. The molar mass of ammonium chloride is fifty-three point four nine, so we dissolved zero point one zero zero zero moles. Delta H is minus q over n, so that's plus one point four zero nine kilojoules divided by zero point one, which is plus fourteen point one kilojoules per mole. The water cooled, so delta H is **positive**.

Visual: on "lost heat to the dissolving" a blue arrow from the solution into a dashed system outline round the dissolving crystals. On "fifty-three point four nine" "M(NH₄Cl) = 53.49 g mol⁻¹"; on "zero point one zero zero zero moles" "n = 5.35 ÷ 53.49 = 0.1000 mol" (violet). Equation strip "ΔHsoln = −q ÷ n". On "plus one point four zero nine kilojoules divided by zero point one" the row "ΔHsoln = −(−1.409) ÷ 0.1000"; on "plus fourteen point one" "= +14.1 kJ mol⁻¹" (blue). On "positive" the result is ringed with the tag "water cooled → endothermic".

### 9. the sign and the moles
> Careful with the sign. A falling temperature tempts you to write a negative answer, but the water's loss is the system's gain, so an endothermic change has a positive delta H. And n is the moles of solid that dissolved, never the moles of **water**.

Visual: on "a negative answer" a chip "ΔHsoln = −14.1 kJ mol⁻¹ (the temperature fell)" fades in and is crossed. On "the water's loss is the system's gain" the blue arrow from scene 8 pulses, tags "q(solution) −" and "system +". On "moles of solid" the n row pulses; on "water" a chip "n = moles of water" is crossed.

### 10. how sure are we?
> How sure is this result? The probe reads to zero point one of a degree, so each reading could be out by zero point one, and the difference could be out by zero point two. That's zero point two in three point two, about six per cent. The masses are far more precise. Because the answer comes from multiplying and dividing, it carries that same six per cent, so it's plus fourteen point one, plus or minus zero point **nine**.

Visual: on "reads to zero point one of a degree" the probe readout magnifies, "19.3 °C ± 0.1", and a ghost "22.5 °C ± 0.1". On "the difference could be out by zero point two" "ΔT = −3.2 ± 0.2 °C". On "about six per cent" "0.2 ÷ 3.2 × 100 = 6%" (pale teal). On "The masses are far more precise" two small grey rows "5.35 g ± 0.01: 0.2%" and "100.0 g ± 0.01: 0.01%", each ticked "negligible". On "multiplying and dividing" the ×, × and ÷ in the earlier rows glow; on "nine" the result becomes "ΔHsoln = +14.1 ± 0.9 kJ mol⁻¹".

### 11. comparing with the data value
> So the true value probably lies between thirteen point two and fifteen point zero. The data value is plus fourteen point eight, which sits inside that range. The percentage error, about five per cent, is smaller than the uncertainty, so this result agrees with the data. Heat leaking in from the room would make it a little low, which fits. The foam cup does far better than the spirit burner, because the change happens inside insulated **water**.

Visual: clear change to the number line 12 to 16 kJ mol⁻¹. On "between thirteen point two and fifteen point zero" the pale teal band shades 13.2 to 15.0 with our point at 14.1. On "plus fourteen point eight" a slate marker drops onto 14.8, inside the band (ticked). On "about five per cent" the row "% error = (14.8 − 14.1) ÷ 14.8 × 100 = 5%" beside "uncertainty 6%" with "5% < 6% → agrees". On "Heat leaking in" small blue arrows enter the cup through its wall, tag "makes the fall smaller → result low". On "spirit burner" the v03 shielded-rig thumbnail with "54%" beside the cup with "5%"; on "water" the cup's liquid is ringed.

### 12. the rule
> Here's the rule to remember. Separate the ions, energy goes in. Hydrate the ions, energy comes out. The bigger step sets the **sign**.

Visual: the memory line writes large in the explainer's handwriting style: "Separate: energy in. Hydrate: energy out. The bigger step sets the sign." On "Separate" a blue up arrow; on "Hydrate" an orange down arrow; on "sign" the two diagrams from scene 5 return small under it, their net arrows pulsing.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Two point zero zero grams of sodium hydroxide is dissolved in a hundred grams of water in a foam cup, and the temperature rises from twenty-one point two to twenty-six point two degrees. Calculate the molar enthalpy of solution of sodium hydroxide. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "2.00 g of sodium hydroxide (NaOH, M = 40.00 g mol⁻¹) is dissolved in 100.0 g of water in a polystyrene foam cup. The temperature of the solution rises from 21.2 °C to 26.2 °C. Calculate the molar enthalpy of solution of sodium hydroxide. Assume the solution has a specific heat capacity of 4.18 J g⁻¹ K⁻¹. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The solution's mass is one hundred and two grams, and delta T is five point zero. So q is one hundred and two times four point one eight times five point zero, about two point one three kilojoules. The moles are two point zero zero over forty point zero zero, which is zero point zero five. So delta H is minus forty-two point six kilojoules per mole, negative because the water warmed. Using a hundred grams leaves out the **solid**.

Visual: card shrinks to the top. Rows on their cues: "m = 100.0 + 2.00 = 102.0 g" (amber); "ΔT = 26.2 − 21.2 = 5.0 K"; "q = 102.0 × 4.18 × 5.0 = 2132 J = 2.132 kJ" (orange); "n = 2.00 ÷ 40.00 = 0.0500 mol" (violet); "ΔHsoln = −2.132 ÷ 0.0500 = −42.6 kJ mol⁻¹" (red). On "solid" a chip "m = 100.0 g: −41.8 kJ mol⁻¹" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. When potassium nitrate dissolves in water, the temperature falls. Explain this using the energy needed to separate the ions and the energy released by hydration, and state the sign of delta H. Pause here to answer.

Visual: `QuestionCard`: "When solid potassium nitrate (KNO₃) dissolves in water, the temperature of the solution decreases. Explain this observation in terms of the energy required to separate the ions and the energy released when the ions are hydrated. State the sign of the enthalpy of solution. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Separating the potassium and nitrate ions takes more energy than hydrating them releases. The extra energy is taken from the water, so the solution cools. The process is endothermic, and delta H is positive. A temperature fall doesn't mean a negative delta **H**.

Visual: card shrinks. A small level diagram builds on cue: "K⁺ and NO₃⁻ separate" (long blue up arrow); "hydrated" (shorter orange down arrow, ending above the start); "taken from the water" (blue arrow from the cup); "ΔH positive" (blue net arrow). On "H" a chip "ΔH negative because the temperature fell" fades in and is crossed. Hold about 1 second.

### 17. conclusion and handoff
> So dissolving can warm or cool water because it happens in two steps. Separating the ions takes energy in, hydrating them gives energy out, and the bigger step wins. Notice that delta H only depended on where the route started and where it finished. In Module Three, a catalyst gave hydrogen peroxide a different route. Does a different route change delta **H**?

Visual: the memory line returns small at the top. On "Separating the ions takes energy in" and "hydrating them gives energy out" the ammonium chloride level diagram draws at the left with its arrows; on "the bigger step wins" the blue net arrow "ΔH = +14.8 kJ mol⁻¹ (data)". On "where the route started and where it finished" the start and end levels ring teal with the tag "ΔH depends only on start and end". On "a catalyst gave hydrogen peroxide a different route" `y11c-flask-peroxide-mno2-plug-fizz-v1.png` slides in at the right with "hydrogen peroxide + manganese dioxide: a different route". On "H" the amber chip "A different route: does ΔH change?" and the chip "Next: Why does a catalyst change activation energy but not reaction enthalpy?" write. Hold about 2 seconds. This is the final frame (m4-v05 opens on it).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Dissolving an ionic solid has two steps: separating the ions takes energy in (lattice energy); hydrating them releases energy (hydration energy). The bigger step sets the sign.
2. Separation bigger: the water cools, endothermic, ΔHsoln positive (NH₄NO₃, NH₄Cl, KNO₃). Hydration bigger: the water warms, exothermic, ΔHsoln negative (CaCl₂, NaOH).
3. Foam cup: q = mcΔT with m = water + solid; n = moles of solid; ΔHsoln = −q ÷ n. A temperature fall gives a positive ΔHsoln.
4. Uncertainty: ΔT is ±0.2 °C for readings to 0.1 °C; the result carries the same percentage. If the percentage error is smaller than the uncertainty, the result agrees with the data.

Memory aid (large, on the notes screen): *Separate: energy in. Hydrate: energy out. The bigger step sets the sign.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why separating takes energy (2); why hydration releases energy (3); why the net can have either sign (4); why the water cools or warms (5); why m includes the solid (7); why a fall gives positive ΔH (8, 9); why ΔT has an uncertainty and the result carries it (10); why the cup beats the burner (11).
- **Misconceptions addressed:** breaking a solid apart releases energy (1, 2); a temperature fall means negative ΔH (9; crossed in A2); n as moles of water (9); m as water only (7; crossed in A1); any gap from the data value means a mistake (11).
- **One idea at a time:** prediction (1), separation (2), hydration (3), size of the steps (4), sign (5), method (6), q (7), ΔH (8), traps (9), uncertainty (10), comparison (11), rule (12).
- **Video makes it easier:** ions pulled out against stretching attraction lines, then water molecules turning to face them (2, 3); two tall bars with a tiny difference (4); level diagrams with up and down arrows (5); a number line with the uncertainty band and the data marker (11).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 31 s and 18 s.
- **Avoided double teaching:** q = mcΔT (v02); ΔH = −q/n and percentage error (v03, ws-v05); trade of attractions and polar water (m1-v27); reading uncertainty (ws-v05, used with a one-sentence reason).
- **Syllabus coverage:** `C4-IQ1-01` dissociation of ionic substances, temperature change measured (6, 7); `C4-IQ1-02` calculate (7, 8, A1), analyse (10), compare with secondary data (11) and explain differences (11).
- **Out of scope by design:** entropy; lattice and hydration energy calculations; neutralisation enthalpy.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: m = 100.0 + 2.00 = 102.0 g; ΔT = 26.2 − 21.2 = 5.0 K; q = 102.0 × 4.18 × 5.0 = 2132 J = 2.132 kJ (1 mark); n = 2.00 ÷ 40.00 = 0.0500 mol (1 mark); ΔHsoln = −q ÷ n = −2.132 ÷ 0.0500 = −42.6 kJ mol⁻¹ (1 mark). Classic mistake (crossed): m = 100.0 g (water only), giving −41.8 kJ mol⁻¹.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: Separating the K⁺ and NO₃⁻ ions from the lattice requires more energy than is released when the ions are hydrated by water molecules (1 mark). The net energy needed is absorbed from the water (the surroundings), so the solution's temperature falls (1 mark). The dissolution is endothermic and ΔHsoln is positive (1 mark). Classic mistake (crossed): "ΔH is negative because the temperature fell".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening cup | 21.0 °C (v03 final frame) | opening, 1 |
| NaCl | lattice about +787; hydration about −783; net about +4 (data +3.9) kJ mol⁻¹; about −1 °C for a spoonful (illustrative) | 4 |
| NH₄NO₃ | ΔHsoln +25.7 kJ mol⁻¹ (data) | 5 |
| Worked example | 5.35 g NH₄Cl; M 53.49; 0.1000 mol; 100.0 g water; 22.5 → 19.3 °C; m 105.35 g; ΔT −3.2; q −1409 J; ΔHsoln +14.1 kJ mol⁻¹ | 6 to 8 |
| Uncertainty | ±0.1 °C per reading; ΔT ±0.2 (6.3%); masses 0.2% and 0.01%; result ±0.9; range 13.2 to 15.0 | 10, 11 |
| Comparison | data +14.8; percentage error 4.8% (about 5%); burner 54% (v03) | 11, final frame |
| Sign slip | −14.1 kJ mol⁻¹ (crossed) | 9 |
| A1 | 2.00 g NaOH, M 40.00; 100.0 g; 21.2 → 26.2 °C; m 102.0 g; ΔT 5.0; q 2132 J; 0.0500 mol; −42.6 kJ mol⁻¹; slip −41.8 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- M(NH₄Cl) = 14.01 + 4 × 1.008 + 35.45 = 53.492; 5.35 ÷ 53.49 = 0.10002 → 0.1000 mol.
- 19.3 − 22.5 = −3.2; 100.0 + 5.35 = 105.35; 105.35 × 4.18 × (−3.2) = −1409.2 J; −(−1.4092) ÷ 0.10002 = +14.09 → +14.1 kJ mol⁻¹.
- 0.2 ÷ 3.2 = 6.25%; 0.01 ÷ 5.35 = 0.19%; 0.01 ÷ 100.00 = 0.01%; 14.09 × 0.0625 = 0.88 → 0.9; range 13.2 to 15.0.
- (14.8 − 14.09) ÷ 14.8 × 100 = 4.8%; (14.78 − 14.09) ÷ 14.78 = 4.7%.
- NaCl: 3.9 − 787 = −783.
- 100.0 + 2.00 = 102.0; 102.0 × 4.18 × 5.0 = 2131.8 J; 2.00 ÷ 40.00 = 0.0500; −2.1318 ÷ 0.0500 = −42.6; slip 100.0 × 4.18 × 5.0 = 2090 J → −41.8.
- Ideal falls and rises: author note f. Site checks: Decisions, site notes.

## Memory aid check

- **"Separate: energy in. Hydrate: energy out. The bigger step sets the sign."** Meaning: dissolving an ionic solid is modelled as two steps with opposite signs; the net enthalpy change has the sign of the larger step. Assumptions checked: the two-step model (lattice dissociation then hydration) is the site's and the standard school model; it applies to ionic solids dissolving in water (not to molecular solutes, where the trade of attractions from m1-v27 applies instead); it says nothing about whether dissolving happens (entropy, author note e), only about the heat. It blocks the prediction misconception (breaking apart releases energy).
- **Considered, not used:** "Cold pack: costs win; hot pack: hugs win" (cute, but "hugs" personifies water and the course avoids character metaphors).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **5,968 characters**, 18 scenes (per scene: 351, 364, 383, 396, 339, 393, 479, 397, 245, 420, 444, 130, 281, 430, 224, 259, 358, 75). At 13.3 characters per second the speech is about 449 s; add about 10 s of settling (the lattice lens in 2 and 3, the level diagrams in 5, the number line in 11), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 540 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v04` (route chem-y11-m4-v04; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v04`.

In order (18 scene headings, all `### N.`): hook-prediction, separating-ions, hydration, two-big-numbers, bigger-step-wins, measuring, worked-result, enthalpy-of-solution, sign-and-moles, uncertainty, compare-data, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v03's final frame into scene 1 by camera continue, then a camera push into the cup's lattice lens; 1 to 2 camera continue; 2 to 3 camera continue; 3 to 4 clear change to the bars; 4 to 5 clear change to the level diagrams; 5 to 6 clear change to the cup station; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 camera continue; 9 to 10 camera push into the readout; 10 to 11 clear change to the number line; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v04-learning-review.md`, `checks/c-y11-m4-v04-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (2000 × 2000; lidded foam cup, cutaway window, probe): opening, scenes 1, 6 to 11, 14, 16.
- `public/assets/chemistry/m5x-cold-pack-v1.png`, `m5x-hot-pack-v1.png` (2000 × 2000 each): opening, scenes 1, 5.
- `public/assets/chemistry/y11c-watch-glass-salt-v1.png` (1671 × 941; watch glass with a small heap of white crystals): scenes 1, 4, 6 (stands for any white ionic solid; a coded label names it each time).
- `public/assets/chemistry/m7-spirit-burner-calorimeter-shield-v1.png`: opening (thumbnail), scene 11 (thumbnail).
- `public/assets/chemistry/y11c-flask-peroxide-mno2-plug-fizz-v1.png`: scene 17, final frame. Requested as essential in `chem-y11-m3-v15.md` and not yet in `public/assets/chemistry` (checked 6 November). If it is not delivered, use `y11c-flask-acid-plug-spent-v1.png` (requested in m2-v08) with a coded black-powder swirl and coded bubbles; if neither exists, a coded flask outline.
- **Inspected, not used:** `m5x-thermometer-cold-v1.png` (the probe readout is clearer); `m8-balance-watch-glass-v1.png` (an analytical balance; weighing is shown as given masses).

Need: no new plates (one dependency on m3-v15's peroxide flask).

Coded: readouts, tipping and stirrer, lattice lens with ions and water molecules, bars, level diagrams, calculation rows, uncertainty readouts, number line and band, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson04.sa.html` (setup and procedure, the two-step model, traps 1 to 3, worked examples 1 and 2, the safety paragraph) and log the five site notes.
3. Confirm the enthalpies of solution (author note a) and the NaCl lattice energy (author note b) against a standard source.
4. Confirm the safety chip against current NSW school guidance (author note g).
5. Confirm both attempt cards are original, carry every needed fact (A1 gives M and c), and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested (solid tips and stirrer moves by code); water molecules drawn bent with δ charges correctly oriented; no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m4-v03's final frame, and send the final frame to the m4-v05 designer.

## YouTube metadata (draft)

Title: Why Dissolving Can Warm or Cool Water: Enthalpy of Solution | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

A cold pack cools and a hot pack warms, yet both just dissolve an ionic solid in water. Separating the ions takes energy in, hydrating them gives energy out, and the bigger step decides whether the water cools or warms. Measure the enthalpy of solution of ammonium chloride in a foam cup, work out its uncertainty, and check it against the data value. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including: dissociation of ionic substances in aqueous solution (ACSCH018, ACSCH037)"
"investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Previous: Why does combustion calorimetry underestimate a fuel enthalpy? Next: Why does a catalyst change activation energy but not reaction enthalpy?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Worked-example reading (root).** The site's 22.5 → 18.1 °C is replaced by 22.5 → 19.3 °C (site note 1) so that the result is slightly low, as heat gain predicts. Alternative: reuse m4-v01's illustrative cup (5.0 g in 50.0 mL, 21.0 → 15.2 °C, +14.3 kJ mol⁻¹), whose ±0.2 °C band ends almost exactly at 14.8 (a less clean comparison).
- **2. NaCl numbers (science check).** About +787 and −783 kJ mol⁻¹ (author note b). If the science check prefers not to show single numbers, the bars keep their heights with "about 790" and "about 790, slightly less".
- **3. Peroxide plate dependency (Codex).** The final frame uses m3-v15's requested flask; fallbacks are listed under Assets.
- **4. Entropy tag (learning review).** Author note e: add a grey "why does it happen at all? later in Module 4" tag in scene 5 if reviewers expect students to ask.
- **5. Length (learning review).** Reserve cut: scene 11's sentence about heat leaking in (about 75 characters).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (are two large steps and a small net difference clear from the bars; is the uncertainty sentence followable without ws-v05's addition rule), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
