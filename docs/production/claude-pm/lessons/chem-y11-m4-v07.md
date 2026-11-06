# Year 11 Chemistry M4 V07: Hess's law. Why can we add reaction enthalpies along different paths? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,213 characters, 19 scenes, about 560 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: seventh Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 76, between `chem-y11-m4-v06` and `chem-y11-m4-v08`; a concept and calculation video. Root decision m4-1 places scaling and reversing thermochemical equations here. Templates: `chem-y11-m4-v06.md` (same designer, series layout, ladders), `chem-y11-m4-v01.md` (thermochemical equation format), `math-a12-d10.md` (calculation layout), `phys-y11-fa1-v01.md`, `bio-y11-fa1-v05.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v07` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use the same start/end states, reverse and scale equations, then cancel intermediates. Include carbon to carbon dioxide via carbon monoxide."; next handoff: "How do standard formation enthalpies calculate a reaction enthalpy?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson08.sa.html` (SHA256 `3e1cbbc975c04e3874267c6c20ff718c5d628f694ced9c43667c9b87f9625587`, recomputed, matches the route), sections `l08-why-hess-s-law-exists-title`, `l08-manipulating-thermochemical-equations-title`, `l08-worked-examples-title`. Used: the altitude analogy (Think First: valley floor to a lookout by a steep or gentle track; distance walked depends on the route); "Why Hess's Law exists" (C + ½O₂ → CO cannot be run cleanly because CO keeps burning; build the change from measurable reactions); the state-function statement and the conservation argument (drill 3: "you could cycle between pathways and create energy from nothing"); the reverse and scale rules with their table; the strategy (target first, place each species, reverse or scale, add, cancel, check the target, sum); the NESA example's values (−110.5, −283.0, −393.5); trap 1 (forgetting to flip: the site's +172.5 example) and trap 2 (scaling the equation but not ΔH); trap 3 (skip the target check); the "Hess's Law cycle" summary. Changed: the worked example calculates the unmeasurable C → CO from the two measurable combustions (site note 1). Not used: the three-equation methane formation example (m4-v09 and v08 territory), the ethene drills, the Hess 1840 story (site note 2), the blast-furnace anchor (author note d).

Owner rules applied: as `chem-y11-m4-v06.md` (one learner question; no people, hands or faces; a painted charcoal lump for carbon; level diagrams, equations and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Enthalpy and Hess's Law; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ2-02`: "investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037)"
  - "carbon reacting with oxygen to form carbon dioxide via carbon monoxide"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v06's final frame (the methane ladder through separate atoms, "break: +2652 kJ", "form: −3460 kJ", the direct dashed arrow "ΔH = −808 kJ mol⁻¹", "Two routes, same ΔH. Why can we add enthalpies along a different path?"). Teaches: a prediction (carbon to CO₂ directly or via CO releases the same energy); the two-route energy diagram for carbon; why (enthalpy depends only on the substances and their states; altitude analogy; the conservation argument); Hess's law; why it is needed (C → CO cannot be measured cleanly); reversing (sign flips; conservation) and scaling (ΔH scales; ΔH belongs to the equation as written); the worked example C(s) + ½O₂(g) → CO(g) from two combustions (keep, reverse, halve, add, cancel, check, sum = −110.5); traps; memory aid. Not taught: formation enthalpies as a method (v08), combustion cycles and per-gram comparisons (v09), photosynthesis and respiration (v10), three-equation problems.

## Decisions

- **Learner question (route wording kept).** "Why can we add reaction enthalpies along different paths?" The answer, in order: two routes from carbon to CO₂ give the same total (2); enthalpy depends only on the start and end substances, and anything else would break conservation of energy (3); so step enthalpies add (Hess's law, 4); to add measured steps we reverse and scale them with their ΔH (6, 7) and cancel what appears on both sides (10).
- **Opening frame (equals `chem-y11-m4-v06.md`'s final frame, same designer).** The methane ladder: "CH₄(g) + 2O₂(g)" lower left; "separate atoms: C + 4H + 4O (gas)" at the top; "CO₂(g) + 2H₂O(g)" lower right, below the reactants; blue up arrow "break: +2652 kJ"; orange down arrow "form: −3460 kJ"; red dashed direct arrow "direct: ΔH = −808 kJ mol⁻¹" ("real reaction"); grey "imaginary route"; amber chip "Two routes, same ΔH. Why can we add enthalpies along a different path?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Carbon straight to CO₂, or via CO first: more energy, less, or the same?" Answer: the same.
- **Two-route diagram (scenes 2, 11, 18; the syllabus example).** Coded enthalpy levels: top "C(s) + O₂(g)", middle "CO(g) + ½O₂(g)", bottom "CO₂(g)"; arrows "−110.5" (step 1), "−283.0" (step 2), "−393.5" (direct). Values: NBS data, as the site (author note a). `c4-icon-carbon-lump-v1.png` stands for the carbon (charcoal; "C(s), graphite" on the label, with a grey tag "charcoal is mostly carbon").
- **Why (scene 3; site "state function", drill 3).** Enthalpy depends only on what the substances are and their states (the phrase "state function" is on screen as a grey tag, not spoken). The site's altitude analogy, reset in an Australian setting (beach to lookout); the route-dependent "distance walked" is shown as the thing that does depend on route. Conservation argument: out by one route, back by the other, net energy from nothing.
- **Hess's law (scene 4).** "The enthalpy change for a reaction is the same whatever route it takes, so the enthalpy changes of the steps add to give the overall enthalpy change." Ties back to v06's ladder.
- **Why it is needed (scene 5; site "Why Hess's Law exists").** C + ½O₂ → CO cannot be run cleanly (some CO burns on to CO₂; a mixture forms); both combustions can be measured.
- **Rules (scenes 6, 7; site table).** Reverse: same size, opposite sign; the cause is conservation (energy out forwards = energy in backwards). Scale: ΔH belongs to the equation as written (m4-v01's format), so multiplying or dividing the equation does the same to ΔH. Each rule is shown on one small equation card with its ΔH moving with it (the "equation and its ΔH are one object" idea from site trap 2).
- **Worked example (scenes 8 to 11; route stop; site note 1).** Target C(s) + ½O₂(g) → CO(g). Given (1) C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ mol⁻¹; (2) 2CO(g) + O₂(g) → 2CO₂(g), ΔH = −566.0 kJ mol⁻¹ (the measured CO combustion written for two moles, so both rules are needed). Steps: keep (1); reverse (2): +566.0; halve: CO₂(g) → CO(g) + ½O₂(g), +283.0; add; cancel CO₂; O₂: 1 left, ½ right, net ½ left; check the target; ΔH = −393.5 + 283.0 = −110.5 kJ mol⁻¹. Layout: task strip; target strip (pinned); givens as two equation cards; one manipulation per row; earlier rows dimmed; the cancelled species struck through in grey.
- **Check (scene 11).** −110.5 matches the data value for forming CO; it is step 1 of the scene 2 diagram. The check-the-target habit (site trap 3) is spoken.
- **Traps (scene 12; site traps 1 and 2).** No flip: −393.5 − 283.0 = −676.5 (crossed). No halving: −393.5 + 566.0 = +172.5 (crossed; "burning carbon endothermic" as the absurdity check; the site's own +172.5 arises from a different slip, which is fine because the number is the same).
- **Memory aid:** "Flip it, flip the sign. Scale it, scale ΔH. Then add, and check the target." (see "Memory aid check"), scene 13.
- **Attempts (original wording, HSC style).** A1 (scale only; sulfur trioxide): S(s) + O₂(g) → SO₂(g), −296.8; 2SO₂(g) + O₂(g) → 2SO₃(g), −197.8; target S(s) + 3/2O₂(g) → SO₃(g): −296.8 + (−98.9) = −395.7 kJ mol⁻¹. Crossed: "−494.6 (not halved)". A2 (reverse and scale; nitrogen dioxide): N₂(g) + O₂(g) → 2NO(g), +180.5; 2NO₂(g) → 2NO(g) + O₂(g), +114.1; target ½N₂(g) + O₂(g) → NO₂(g): +90.25 + (−57.05) = +33.2 kJ mol⁻¹. Crossed: "+147.3 (sign not flipped)". All values are NBS data (author note a), so each answer matches a real formation enthalpy (SO₃ −395.7; NO₂ +33.2), which v08 picks up.
- **Mistake scene:** none separate. "A two-step route releases more (or less)" (1, 2); forgetting to flip (12; crossed in A2); scaling the equation but not ΔH (12; crossed in A1); skipping the target check (11).
- **Handoff (route next: `chem-y11-m4-v08`, "How do standard formation enthalpies calculate a reaction enthalpy?").** Scene 18: −110.5 and −393.5 are each the enthalpy change for making one mole of a compound from its elements; chemists tabulate these for thousands of substances; how do they give a reaction's ΔH? Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted; module 4 lesson 8):**
  1. "The NESA Example" card says C + ½O₂ → CO "cannot be measured cleanly" and that Hess's law lets us "calculate the ΔH for the CO-forming step", but the worked example gives that step (ΔH₁ = −110.5) and calculates C + O₂ → CO₂, which can be measured directly. The card's closing summary does it the other way round. Suggest making the worked example find ΔH(C → CO) from C + O₂ → CO₂ (−393.5) and CO + ½O₂ → CO₂ (−283.0), as this video does, and keeping the current direction as a drill.
  2. Revisit: "Germain Hess's 1840 carbon dioxide example from the St Petersburg Academy of Sciences ... Hess showed this experimentally: his two-step pathway gave ΔH(C → CO) = −110.5 ... and later direct measurements confirmed this value". Hess's 1840 work measured heats of neutralisation and hydration, not carbon monoxide, and the lesson itself says C → CO cannot be measured directly. Suggest removing the attribution and the "direct measurements" claim.
  3. Key term "State function ... e.g., H, G, S but not q or w" uses G and w before they are taught (G in later Module 4; w not in the course). Suggest "e.g. enthalpy (but not the heat measured along one route)" or simply "e.g. H".
  4. The blast-furnace card says "Hess's Law lets engineers calculate the ΔH for the CO-forming step precisely, critical for designing furnace conditions and energy input in Australia's steel industry". The claim about Australian furnace design is unsourced; suggest removing "in Australia's steel industry" or citing it.
  - Checked and correct: NESA example (−393.5); the +172.5 trap; worked example 1 (−74.8); drill 2 (−283.0); drill 4 (−137); drill 5 (−3257); quick check (+160).
- **Cause chain taught, in order:** (1) enthalpy depends only on the substances and their states, so two routes between the same start and end have the same ΔH (2, 3); (2) different ΔH values for two routes would let a loop create energy, which conservation forbids (3); (3) so the steps' ΔH values add to the overall ΔH (4); (4) running a reaction backwards takes in what it gave out, so reversing flips the sign (6); (5) twice the amount of reaction transfers twice the energy, so scaling scales ΔH (7); (6) species on both sides of the sum are made and then used, so they cancel (10); (7) only the target equation's ΔH is wanted, so the sum must equal the target before ΔH is added (11).
- **Entry knowledge:** m4-v01 (thermochemical equation format, ΔH for the equation as written); m4-v05 (ΔH depends on start and end); m4-v06 (the imaginary route through atoms; conservation of energy); m3-v04 (complete and incomplete combustion).
- **Learner-visible vocabulary (plain meaning at first use):** Hess's law (4); target equation (8: "the equation whose ΔH we want"); intermediate (10: "made in one step and used up in the next, so it cancels").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **carbon card** (`c4-icon-carbon-lump-v1.png` with a coded glow for burning, scenes 1, 5); **two-route diagram** (scenes 2, 4, 11, 18); **altitude panel** (scene 3: a coded side-on coastline, a beach flag and a lookout flag, a steep track and a long gentle track, a height bracket and a "distance walked" counter that differs between tracks); **energy loop** (scene 3: out by one arrow, back by the other, a "+energy?" counter crossed); **equation cards** (scenes 6 to 10, 14 to 17: each equation with its ΔH on one card; flip animation turns the card over and its sign changes; scale animation stretches the coefficients and ΔH together); **cancel board** (scene 10: the two cards stack, matching species strike through grey, the remaining species slide together into the target); **target strip** (pinned at the top of the board, ticked in scene 11); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v04 to v06):** ΔH red when negative, blue when positive; reversed cards outlined teal; scaled cards outlined amber; cancelled species grey strike; the target strip green when matched; data values slate blue; crossed items red strike.
- **Board layout (Revision 2):** heading top left. Stages, each under about 56 s: m4-v06's final frame, then the painted carbon (1); the two-route diagram with the route marker (2); the altitude panel, then the loop on the diagram (3); the gloss card with the sliding arrows (4); the painted carbon with the flame sketch beside the diagram (5); the equation card (6, 7, about 41 s); the calculation layout with the pinned target (8, 9, about 56 s); the cancel board at full width (10); the diagram with the check (11); the trap stage at full width (12); the framed memory card (13); question cards (14 to 17); the final layout (18). Revision 1 held the calculation layout for scenes 8 to 12 (about 134 s).
- **Colour roles (Revision 2, fixed for the whole video):** ΔH red when negative, blue when positive; reversed cards outlined teal; scaled cards outlined amber; cancelled species grey strike; the target strip green when matched; data values slate blue; the route marker and its running readout white with a red value; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; recall and source tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row and the active equation card at least 44 px (48 px); framed results and the running ΔH readout about 52 px; givens, other cards and level labels 34 to 36 px; earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (recall tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the route marker (scene 2) and the altitude counters (scene 3).** A live readout on the core idea (the total depends only on start and finish): a marker travels down the two-step route while a running readout (52 px) ticks "ΔH so far: −110.5" at the middle level, then "−393.5 kJ mol⁻¹" at the bottom; a second marker takes the direct arrow and its readout lands on the same "−393.5". In scene 3 the two walkers' flags carry live counters: "height climbed" ends at the same value for both tracks while "distance walked" ends at different values, so the student sees which quantity depends on the route.

Author notes (not learner copy):
(a) Data (NBS tables, Wagman et al. 1982; ΔfH at 298 K, kJ mol⁻¹): CO −110.53, CO₂ −393.51, SO₂ −296.83, SO₃ −395.72, NO +90.25, NO₂ +33.18. Hence C + O₂ → CO₂ −393.5; 2CO + O₂ → 2CO₂ 2 × (−393.51 + 110.53) = −565.96 → −566.0; CO + ½O₂ → CO₂ −283.0; 2SO₂ + O₂ → 2SO₃ 2 × (−395.72 + 296.83) = −197.78 → −197.8; N₂ + O₂ → 2NO +180.5; 2NO₂ → 2NO + O₂ 2 × (90.25 − 33.18) = +114.14 → +114.1.
(b) "Enthalpy is a state function" is shown as a grey tag; the narration says "depends only on what the substances are and their states". Constant pressure is not raised.
(c) Halving is spoken as "halve" and "divide by two"; the A2 intermediate values +90.25 and −57.05 are shown to two decimals so the sum is exact; the answer is +33.2 (three significant figures).
(d) Blast furnaces: CO forms when coke burns with limited air and then reduces iron oxide; not used (site note 4; one learner question).
(e) Pronunciations: "Hess's law" ("hessez law"); "C O" spoken as "carbon monoxide"; "S O three" as "sulfur trioxide"; "N O two" as "nitrogen dioxide"; "half O two" as "half a mole of oxygen" on first use, then "half oxygen".

Main question: *Why can we add reaction enthalpies along different paths?*
Entry knowledge: m4-v01, m4-v05, m4-v06.
Stops after: carbon via CO; why; Hess's law; reverse and scale rules; worked example to −110.5 with cancelling and the target check; traps.
Handoff: chem-y11-m4-v08, formation enthalpies.

## Opening frame and final frame

- **Opening frame:** m4-v06's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v08` opens on it):** the carbon two-route diagram at full width (coded): top level "C(s) + O₂(g)" with a teal tag "elements"; middle level "CO(g) + ½O₂(g)"; bottom level "CO₂(g)". Left: a long red arrow "direct: −393.5 kJ mol⁻¹". Right: red arrows "step 1: −110.5" and "step 2: −283.0". Beside the −110.5 arrow a slate tag "forming 1 mol of CO from its elements"; beside the −393.5 arrow a slate tag "forming 1 mol of CO₂ from its elements". `c4-icon-carbon-lump-v1.png` small at the top left. The amber chip "Values like these are tabulated for thousands of compounds. How do they give a reaction's ΔH?". The chip "Next: How do standard formation enthalpies calculate a reaction enthalpy?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Last time, we went the long way round. We pulled methane and oxygen apart into atoms, then built the products, and still got delta H. Here's a simpler case to test that idea. Carbon can burn straight to carbon dioxide. Or it can burn to carbon monoxide first, and then the carbon monoxide burns to carbon dioxide. So predict. Does the two-step route release more energy, less, or the **same**?

Visual: opens on m4-v06's final frame; the "Next" chip fades. On "pulled methane and oxygen apart into atoms" the up and down arrows pulse; on "still got delta H" the dashed direct arrow pulses. Clear change on "a simpler case": `c4-icon-carbon-lump-v1.png` at the left with a coded red glow, label "C(s)". On "straight to carbon dioxide" one arrow "C → CO₂"; on "carbon monoxide first" a two-arrow path "C → CO → CO₂". Heading writes: "Why do different routes give the same ΔH?". Chips "more", "less", "the same". On "same" the 3 s `Countdown` ring runs. Hand tags: slate "one step?" on the direct arrow and "two steps?" on the path, with a `PenArrow` between them; pen ring on "C(s)".

### 2. same start, same finish
> The same. Burning carbon straight to carbon dioxide releases three hundred and ninety-three point five kilojoules per mole. Going via carbon monoxide, the first step releases one hundred and ten point five, and the second releases two hundred and eighty-three point zero. Add those, and you get three hundred and ninety-three point five again. Same start, same finish, same delta **H**.

Visual: "the same" ticks. Stage: the diagram fills the right two thirds, the painted carbon a thumbnail at the left. The two-route diagram draws: on "straight to carbon dioxide" levels "C(s) + O₂(g)" (top) and "CO₂(g)" (bottom) with the direct arrow "−393.5 kJ mol⁻¹"; on "the first step" the middle level "CO(g) + ½O₂(g)" and arrow "−110.5"; on "the second" the arrow "−283.0". On "Add those" the route marker (Decisions) runs down the two steps with its readout ticking "ΔH so far: −110.5", then "−393.5", and the row "−110.5 + (−283.0) = −393.5" writes under the steps; a second marker runs the direct arrow and lands on the same "−393.5". On "Same start" the top level pulses; on "same finish" the bottom level; on "H" both routes pulse together. Red hand tag "same total" with a `ScribbleCircle` round the two readouts.

### 3. why it must be
> Here's why it has to work. Enthalpy depends only on what the substances are and their states, not on how they got there. It's like height above sea level. Walk from the beach up to a lookout by a steep track or a gentle one, and you climb the same height, even though you walk different distances. And if two routes gave different energy changes, you could go out by one route and come back by the other, making energy from nothing. Conservation of energy rules that **out**.

Visual: on "depends only on what the substances are" a grey tag "enthalpy is a state function". On "height above sea level" clear change to the altitude panel: a beach flag and a lookout flag; on "a steep track or a gentle one" two coded tracks draw; on "the same height" one height bracket covers both; on "different distances" live counters run as two markers climb: "height climbed" ends equal on both tracks, while "distance walked" ends at different values (tag "depends on the route"). On "go out by one route" the panel returns to the carbon diagram and an arrow loop runs down the direct route and back up the two-step route with a "+energy?" counter; on "out" the counter is crossed (tag "conservation of energy"). Hand tags: slate "same height" on the bracket; grey "route matters here" on the distance counters; red "energy from nothing? no" on the crossed counter.

### 4. Hess's law
> That's Hess's law. The enthalpy change for a reaction is the same whatever route it takes, so the enthalpy changes of the steps add up to the overall enthalpy change. It's why our imaginary route through separate atoms **worked**.

Visual: on "Hess's law" a gloss card writes: "Hess's law: ΔH is the same whatever route a reaction takes, so the ΔH values of the steps add to the overall ΔH". On "the steps add up" the two step arrows slide end to end beside the direct arrow, matching its length. On "worked" a small thumbnail of v06's methane ladder (tag "m4-v06") with its up and down arrows equalling the direct arrow. Red hand tag "steps add" with a `PenArrow` along the end-to-end arrows.

### 5. measuring what we can
> Hess's law matters most when a reaction can't be measured. Try to burn carbon to just carbon monoxide, and some of the carbon monoxide keeps burning to carbon dioxide, so you always get a mixture. But burning carbon completely, and burning carbon monoxide, can both be measured. So we can calculate the step we can't **measure**.

Visual: the carbon card returns at the left. On "burn carbon to just carbon monoxide" a coded flame sketch over the carbon with arrows "CO" and, on "keeps burning", some "CO" arrows turning into "CO₂" (tag "a mixture"). On the diagram, the step 1 arrow turns grey with a "?" (tag "can't be measured cleanly"). On "burning carbon completely" the direct arrow ticks green "measured"; on "burning carbon monoxide" step 2 ticks green "measured". On "measure" the "?" on step 1 pulses. Stage: the painted carbon large at the left with the flame sketch (stage change). Hand tags: grey "a mixture" with a pen ring on the turning arrows; green "measured" on both ticked arrows.

### 6. reversing an equation
> To use measured equations, we often have to turn them around or resize them. First, reversing. If a reaction gives out two hundred and eighty-three kilojoules going forwards, then going backwards it must take in exactly two hundred and eighty-three. So when you reverse an equation, delta H keeps its size, but changes **sign**.

Visual: clear change to an equation card: "CO(g) + ½O₂(g) → CO₂(g)  ΔH = −283.0 kJ mol⁻¹" (red). On "going forwards" an orange arrow out of the card; on "going backwards" the card flips over (teal outline) to "CO₂(g) → CO(g) + ½O₂(g)  ΔH = +283.0 kJ mol⁻¹" (blue) with a blue arrow in. On "sign" a rule chip: "reverse → ΔH × (−1)". Stage: the equation card fills the centre (48 px). Teal hand tag "backwards: same size, opposite sign" with a `PenArrow` from the flipped sign to the rule chip.

### 7. scaling an equation
> Second, scaling. Delta H belongs to the equation as written. Burning two moles of carbon monoxide releases twice as much energy as burning one. So if you multiply or divide an equation by a number, you do the same to delta **H**.

Visual: on "belongs to the equation as written" the card "CO(g) + ½O₂(g) → CO₂(g)  ΔH = −283.0" with a grey tag "m4-v01". On "two moles of carbon monoxide" the card stretches (amber outline): "2CO(g) + O₂(g) → 2CO₂(g)  ΔH = −566.0 kJ mol⁻¹", the coefficients and ΔH changing together. On "H" a rule chip: "scale by n → ΔH × n". Amber hand tag "× 2, both together" with a pen ring on the 2 and on −566.0.

### 8. the target
> Let's find delta H for carbon burning to carbon monoxide. The target is carbon plus half a mole of oxygen, giving carbon monoxide. We're given two measured equations. Equation one, carbon plus oxygen gives carbon dioxide, minus three hundred and ninety-three point five. Equation two, two carbon monoxide plus oxygen gives two carbon dioxide, minus five hundred and sixty-six point **zero**.

Visual: board settles into the calculation layout. Task strip: "Find ΔH for C(s) + ½O₂(g) → CO(g)". On "The target is" the target strip pins at the top: "target: C(s) + ½O₂(g) → CO(g)  ΔH = ?" (gloss "target equation: the equation whose ΔH we want"). On "Equation one" card (1): "C(s) + O₂(g) → CO₂(g)  ΔH = −393.5 kJ mol⁻¹"; on "Equation two" card (2): "2CO(g) + O₂(g) → 2CO₂(g)  ΔH = −566.0 kJ mol⁻¹" (tag "both measured"). On "zero" both cards gain a green tick "measured". Green hand tag "the one we want" with a pen ring on the target strip.

### 9. reverse and halve
> The target has carbon on the left, and so does equation one, so keep equation one as it is. The target has carbon monoxide on the right, but equation two has it on the left, so reverse it. Now delta H is plus five hundred and sixty-six. The target needs one carbon monoxide, not two, so halve the equation, giving plus two hundred and eighty-three point **zero**.

Visual: on "carbon on the left" the C in the target and in card (1) ring together; card (1) ticks "keep". On "carbon monoxide on the right" the CO in the target rings; on "equation two has it on the left" the 2CO in card (2) rings red. On "reverse it" card (2) flips (teal outline): "2CO₂(g) → 2CO(g) + O₂(g)  ΔH = +566.0". On "one carbon monoxide, not two" the coefficient 2 is ringed; on "halve the equation" the card shrinks (amber outline): "CO₂(g) → CO(g) + ½O₂(g)  ΔH = +283.0 kJ mol⁻¹" (row beside it "+566.0 ÷ 2 = +283.0"); on "zero" the ΔH pulses blue. Hand tags: teal "wrong side: reverse" on card (2); amber "÷ 2" with a `PenArrow` from the 2 to +283.0.

### 10. add and cancel
> Now add the two equations. Carbon dioxide appears on both sides, so it cancels. It's an intermediate, made in one step and used up in the next. Oxygen is one mole on the left and half a mole on the right, which leaves half on the left. What's left is carbon plus half oxygen giving carbon monoxide, exactly the target. So delta H is minus three hundred and ninety-three point five plus two hundred and eighty-three point zero, which is minus one hundred and ten point **five**.

Visual: the cancel board: card (1) and the adjusted card (2) stack, and a sum line writes "C(s) + O₂(g) + CO₂(g) → CO₂(g) + CO(g) + ½O₂(g)". On "Carbon dioxide appears on both sides" both CO₂ ring and strike through grey; on "an intermediate" gloss "intermediate: made in one step, used up in the next". On "one mole on the left and half a mole on the right" O₂ and ½O₂ ring; ½O₂ strikes through and the left O₂ becomes "½O₂". On "exactly the target" the remaining species slide into "C(s) + ½O₂(g) → CO(g)" and the target strip turns green. On "minus three hundred and ninety-three point five plus two hundred and eighty-three point zero" the row "ΔH = −393.5 + (+283.0)"; on "five" "= −110.5 kJ mol⁻¹" (red), framed in a dark-ink box with a green tick (52 px). Stage: the cancel board fills the frame (stage change from the cards); the target strip stays pinned. Grey hand tag "made, then used" on the struck CO₂; slate hand tag "1 − ½ = ½" on the oxygen.

### 11. check it
> That's the data value for forming carbon monoxide. On the energy diagram, it's the first step of the two-step route, found from two reactions we can actually measure. Always check the target before you add the delta H values. If something hasn't cancelled, you've solved a different **reaction**.

Visual: on "the data value" a slate chip "data: −110.5 kJ mol⁻¹" beside the result. On "On the energy diagram" the two-route diagram returns at the left; the step 1 arrow loses its "?" and fills "−110.5" (red). On "check the target" the green target strip pulses with a tick "matches target"; on "reaction" a ghost sum with an uncancelled "CO₂" left over, tagged "not the target", fades in and is crossed. Stage: the diagram takes the left half with the result framed at the right. Green hand tag "check first" with a pen ring on the target tick; the crossed ghost sum carries a red hand tag "not the target".

### 12. two traps
> Two traps. Forget to flip the sign, and you get minus six hundred and seventy-six point five. Forget to halve, and you get plus one hundred and seventy-two point five, which would make burning carbon endothermic. Whatever you do to an equation, do the same to its delta **H**.

Visual: on "Forget to flip the sign" a crossed row "−393.5 + (−283.0) = −676.5"; on "Forget to halve" a crossed row "−393.5 + 566.0 = +172.5" with a tag "burning carbon endothermic? impossible". On "Whatever you do to an equation" a card flips and stretches with its ΔH moving with it; on "H" the two rule chips from scenes 6 and 7 pulse. Stage: the two crossed rows fill the frame at 44 px. Red hand tags "flip it!" and "halve it!" on the two rows.

### 13. the rule
> Here's the rule. Flip it, flip the sign. Scale it, scale delta H. Then add, and check the **target**.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "Flip it, flip the sign. Scale it, scale ΔH. Then add, and check the target." On "Flip it" a card flips (teal); on "Scale it" a card stretches (amber); on "target" the green target strip ticks.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Sulfur burns to sulfur dioxide, delta H minus two hundred and ninety-six point eight kilojoules per mole. Two sulfur dioxide plus oxygen gives two sulfur trioxide, delta H minus one hundred and ninety-seven point eight. Calculate delta H for sulfur plus one and a half oxygen giving sulfur trioxide. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Use the following thermochemical equations: S(s) + O₂(g) → SO₂(g)  ΔH = −296.8 kJ mol⁻¹; 2SO₂(g) + O₂(g) → 2SO₃(g)  ΔH = −197.8 kJ mol⁻¹. Calculate ΔH for the reaction S(s) + 3/2 O₂(g) → SO₃(g). Show how the equations are combined. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Keep the first equation. Halve the second, so it makes one sulfur trioxide, with delta H minus ninety-eight point nine. Add them, and sulfur dioxide cancels, leaving the target. Delta H is minus two hundred and ninety-six point eight plus minus ninety-eight point nine, which is minus three hundred and ninety-five point seven kilojoules per mole. Forgetting to halve gives minus four hundred and ninety-four point **six**.

Visual: card shrinks to the top. Rows on cue: "(1) keep: S(s) + O₂(g) → SO₂(g)  −296.8"; "(2) ÷ 2: SO₂(g) + ½O₂(g) → SO₃(g)  −98.9" (amber outline); "add: SO₂ cancels; O₂ + ½O₂ = 3/2 O₂ → target ✓"; "ΔH = −296.8 + (−98.9) = −395.7 kJ mol⁻¹" (red). On "six" a chip "−296.8 + (−197.8) = −494.6" fades in and is crossed, note "not halved". Hold about 1 second. The ΔH row frames in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "halve it too".

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Nitrogen and oxygen form two nitrogen monoxide, delta H plus one hundred and eighty point five. Two nitrogen dioxide breaks down into two nitrogen monoxide and oxygen, delta H plus one hundred and fourteen point one. Calculate delta H for half a nitrogen plus oxygen giving nitrogen dioxide. Pause here to answer.

Visual: `QuestionCard`: "Use the following thermochemical equations: N₂(g) + O₂(g) → 2NO(g)  ΔH = +180.5 kJ mol⁻¹; 2NO₂(g) → 2NO(g) + O₂(g)  ΔH = +114.1 kJ mol⁻¹. Calculate ΔH for the reaction ½N₂(g) + O₂(g) → NO₂(g). Show how the equations are combined. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Halve the first equation, plus ninety point two five. Reverse and halve the second, so nitrogen dioxide is a product, minus fifty-seven point zero five. Add them. Nitrogen monoxide cancels, and the two halves of oxygen add to one, leaving the target. Delta H is plus thirty-three point two kilojoules per mole. Keeping the second sign positive gives plus one hundred and forty-seven point **three**.

Visual: card shrinks. Rows on cue: "(1) ÷ 2: ½N₂(g) + ½O₂(g) → NO(g)  +90.25" (amber); "(2) reversed, ÷ 2: NO(g) + ½O₂(g) → NO₂(g)  −57.05" (teal and amber outline); "add: NO cancels; ½O₂ + ½O₂ = O₂ → target ✓"; "ΔH = +90.25 + (−57.05) = +33.2 kJ mol⁻¹" (blue). On "three" a chip "+90.25 + 57.05 = +147.3" fades in and is crossed, note "sign not flipped". Hold about 1 second. The ΔH row frames in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "flip the sign".

### 18. conclusion and handoff
> So we can add reaction enthalpies along different paths because enthalpy depends only on the start and the finish. Reverse or scale each step together with its delta H, cancel what appears on both sides, and add. Now look at the two numbers we used for carbon. Each one is the enthalpy change for making one mole of a compound from its elements. Chemists list values like these for thousands of compounds. So how do they give a reaction's delta **H**?

Visual: the memory line returns small at the top. On "depends only on the start and the finish" the two-route diagram returns at full width with all three arrows; on "cancel what appears on both sides" the middle level pulses. On "the two numbers we used for carbon" the "−110.5" and "−393.5" arrows pulse; on "making one mole of a compound from its elements" the top level gains a teal tag "elements", and slate tags write beside the arrows: "forming 1 mol of CO from its elements" and "forming 1 mol of CO₂ from its elements". `c4-icon-carbon-lump-v1.png` small at the top left. On "thousands of compounds" a faint coded table edge slides in behind the diagram and stops. On "H" the amber chip "Values like these are tabulated for thousands of compounds. How do they give a reaction's ΔH?" and the chip "Next: How do standard formation enthalpies calculate a reaction enthalpy?" write. The table edge fades out. Hold about 2 seconds. This is the final frame (m4-v08 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Hess's law: ΔH is the same by any route, so the steps' ΔH values add.
2. Reverse an equation: ΔH changes sign.
3. Multiply or divide an equation: do the same to ΔH.
4. Method: target first; reverse or scale; add; cancel; check the target; add ΔH.
5. C(s) + ½O₂(g) → CO(g): −393.5 + 283.0 = −110.5 kJ mol⁻¹.

Memory aid (framed card, on the notes screen): *Flip it, flip the sign. Scale it, scale ΔH. Then add, and check the target.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why two routes give the same ΔH (3: state, conservation); why Hess's law is needed (5); why reversing flips the sign (6); why scaling scales ΔH (7); why species cancel (10); why the target check matters (11).
- **Misconceptions addressed:** a two-step route releases a different amount (1, 2); forgetting to flip (12; crossed in A2); scaling the equation but not ΔH (12; crossed in A1); summing before checking the target (11).
- **One idea at a time:** prediction (1), two routes (2), why (3), law (4), need (5), reverse (6), scale (7), target (8), manipulate (9), add and cancel (10), check (11), traps (12), memory line (13).
- **Video makes it easier:** arrows that slide end to end to match the direct arrow (2, 4); two tracks with one height bracket and different distance counters (3); cards that flip and stretch with their ΔH attached (6, 7, 9); cancelled species struck through and the rest sliding into the target strip (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 31 s and 29 s.
- **Avoided double teaching:** thermochemical equation format (m4-v01); start and end only (m4-v05); conservation of energy and the atom route (m4-v06).
- **Syllabus coverage:** `C4-IQ2-02` Hess's law used to quantify a stepped reaction with standard enthalpy change data (8 to 11, A1, A2), including "carbon reacting with oxygen to form carbon dioxide via carbon monoxide" (1 to 5, 8 to 11); bond energy data in a Hess sense (4, via m4-v06).
- **Out of scope by design:** formation-enthalpy method (v08); combustion cycles and per-gram comparisons (v09); photosynthesis and respiration (v10); three-equation problems.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: Keep equation 1: S(s) + O₂(g) → SO₂(g), ΔH = −296.8 kJ mol⁻¹. Halve equation 2: SO₂(g) + ½O₂(g) → SO₃(g), ΔH = −98.9 kJ mol⁻¹ (1 mark). Add: SO₂ cancels, giving S(s) + 3/2 O₂(g) → SO₃(g) (1 mark). ΔH = −296.8 + (−98.9) = −395.7 kJ mol⁻¹ (1 mark). Classic mistake (crossed): −494.6 kJ mol⁻¹ (equation 2 not halved).

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: Halve equation 1: ½N₂(g) + ½O₂(g) → NO(g), ΔH = +90.25 kJ mol⁻¹ (1 mark). Reverse and halve equation 2: NO(g) + ½O₂(g) → NO₂(g), ΔH = −57.05 kJ mol⁻¹ (1 mark). Add: NO cancels, giving ½N₂(g) + O₂(g) → NO₂(g); ΔH = +90.25 + (−57.05) = +33.2 kJ mol⁻¹ (1 mark). Classic mistake (crossed): +147.3 kJ mol⁻¹ (sign of equation 2 not flipped).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (v06) | +2652; −3460; −808 kJ mol⁻¹ | opening, 1 |
| Carbon routes | C → CO₂ −393.5; C → CO −110.5; CO → CO₂ −283.0; sum −393.5 | 2, 4, 5, 11, 18, final frame |
| Rules | −283.0 reversed +283.0; × 2 → −566.0 | 6, 7 |
| Worked example | (1) −393.5; (2) −566.0 → reversed +566.0 → halved +283.0; −393.5 + 283.0 = −110.5 | 8 to 11 |
| Traps | −676.5; +172.5 | 12 |
| A1 | −296.8; −197.8 → −98.9; −395.7; slip −494.6 | 14, 15 |
| A2 | +180.5 → +90.25; +114.1 → −57.05; +33.2; slip +147.3 | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- −110.5 + (−283.0) = −393.5; 2 × (−393.51 + 110.53) = −565.96 → −566.0.
- −393.5 − (−566.0 ÷ 2) = −393.5 + 283.0 = −110.5; slips −393.5 − 283.0 = −676.5; −393.5 + 566.0 = +172.5.
- −296.8 + (−197.8 ÷ 2) = −296.8 − 98.9 = −395.7 (data SO₃ −395.72); slip −296.8 − 197.8 = −494.6; 2 × (−395.72 + 296.83) = −197.78.
- 180.5 ÷ 2 = 90.25; −114.1 ÷ 2 = −57.05; 90.25 − 57.05 = 33.20 (data NO₂ +33.18); slip 90.25 + 57.05 = 147.3; 2 × 90.25 = 180.5; 2 × (90.25 − 33.18) = 114.14.

## Memory aid check

- **"Flip it, flip the sign. Scale it, scale ΔH. Then add, and check the target."** Meaning: every change to a thermochemical equation is made to its ΔH too, and the summed equations must equal the target before the ΔH values are added. Assumptions checked: it holds for any thermochemical equations under the same conditions and states (the states are written on every card, and liquid against gaseous water is v06's and v08's point); "scale" covers halving and fractions; "check the target" includes states. It is the site's trap list compressed into an order of work.
- **Considered, not used:** the site's altitude analogy as the memory aid (kept as the explanation in scene 3; an analogy explains, the rule line guides the method).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,213 characters**, 19 scenes (per scene: 389, 382, 471, 226, 325, 324, 225, 387, 359, 473, 292, 272, 97, 332, 419, 323, 395, 447, 75; Revision 1: 6,213). At 13.3 characters per second the speech is about 467 s; add about 12 s of settling (the two-route diagram and route marker in 2, the altitude counters in 3, the cancel board in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 560 s** (Revision 1: about 558 s).

## Scene list and build ids

Lesson key `c-y11-m4-v07` (route chem-y11-m4-v07; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v07`.

In order (19 scene headings, all `### N.`): hook-prediction, same-start-finish, why-it-must-be, hess-law, measuring-what-we-can, reversing, scaling, target, reverse-and-halve, add-and-cancel, check-it, traps, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v06's final frame into scene 1 by camera continue, then a clear change to the carbon card; 1 to 2 camera continue (the diagram draws beside the carbon); 2 to 3 clear change to the altitude panel and back; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 clear change to the equation card; 6 to 7 camera continue; 7 to 8 clear change to the calculation layout; 8 to 9 camera continue; 9 to 10 camera continue; 10 to 11 camera continue; 11 to 12 camera continue; 12 to 13 clear change; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v07-learning-review.md`, `checks/c-y11-m4-v07-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4-icon-carbon-lump-v1.png` (1600 × 1600, RGBA; a black, glassy lump of carbon, reads as charcoal or coal): scenes 1, 5, 18, final frame, with a coded glow and the label "C(s)".
- **Inspected, not used:** `m8-graphite-furnace-v1.png` (an instrument part, not a fuel); `c6-furnace-tube-v1.png` (a different context).

Need: no new plates (Revision 2: the carbon plate stays on screen as a thumbnail through scenes 1 to 5).

Coded: two-route diagram, altitude panel, energy loop, equation cards with flip and stretch, cancel board, target strip, calculation rows, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the data values against the NBS tables (author note a).
3. Confirm the site content used matches `module4/lesson08.sa.html` (why Hess's law exists, the rules table, the NESA example values, traps 1 to 3, drill 3's conservation argument) and log the four site notes, site note 1 first.
4. Confirm every equation on every card is balanced with states, and the cancellations in scenes 10, 15 and 17 are correct.
5. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
6. Confirm the syllabus quote matches `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested (the altitude panel has tracks and flags only); no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m4-v06's final frame, and send the final frame to the m4-v08 designer.

## YouTube metadata (draft)

Title: Hess's Law: Why Enthalpy Changes Add Up Along Any Path | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Carbon can burn straight to carbon dioxide or go via carbon monoxide, and both routes release the same energy. Find out why (enthalpy depends only on the start and the finish), state Hess's law, learn the rules for reversing and scaling thermochemical equations, and use them to calculate the enthalpy change for carbon burning to carbon monoxide, a reaction no one can measure cleanly. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037) carbon reacting with oxygen to form carbon dioxide via carbon monoxide"

Previous: How do broken and formed bonds determine an approximate enthalpy change? Next: How do standard formation enthalpies calculate a reaction enthalpy?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Worked example direction (root).** The video finds ΔH(C → CO) from the two combustions (site note 1), which needs both rules on equation 2. If root prefers the site's direction (given C → CO, find C → CO₂), the worked example loses its "why we need Hess" motivation; not recommended.
- **2. Equation 2 written for 2 mol CO (science check).** Given as 2CO(g) + O₂(g) → 2CO₂(g), −566.0, so the example uses reversing and halving. The site gives the reversed one-mole form (+283.0). Both are standard.
- **3. Length (learning review).** Reserve cut: scene 11's last two sentences (about 125 characters), if the target check is already clear from scene 10.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the conservation loop in scene 3 followable; can students track the oxygen bookkeeping in scene 10), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 0 should fix, 0 optional.
- Checker output (Revision 2, 6 November): narration 6,213 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order (scene 8's "zero" cue, unquoted in Revision 1, is now quoted).

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v07-learning-review.md`, `checks/c-y11-m4-v07-science-check.md`): 0 blocker, 0 should fix, 0 optional. Nothing to resolve; the carbon comparison, the separate reverse and scale steps, the pinned target and the altitude analogy are kept as the reviewers asked.

Visual upgrade (teaching logic and narration unchanged):
- Scene 1 opens on m4-v06's final frame (unchanged) and cuts to the painted carbon in the same scene; the carbon stays as a thumbnail through scenes 2 to 4 and returns large in 5.
- Live readouts: the route marker (scene 2) ticks "ΔH so far" −110.5 then −393.5 along the two-step route and lands on the same −393.5 by the direct route (−110.5 + (−283.0) = −393.5); the altitude panel (scene 3) runs live "height climbed" (equal) and "distance walked" (different) counters.
- Stage list written (Board layout): the Revision 1 calculation stretch (scenes 8 to 12, about 134 s) splits into the calculation layout (8, 9), the full-width cancel board (10), the diagram check (11) and the trap stage (12), each under about 56 s.
- Framed answers with a green tick: −110.5 kJ mol⁻¹ (10), −395.7 (feedback 1), +33.2 (feedback 2). Crossed slips carry red hand tags ("flip it!", "halve it!", "halve it too", "flip the sign", "not the target").
- Hand tags and a pen mark in role colours in every teaching scene (1 to 12).
- Scene 8's bold cue "zero" is now quoted in its Visual.
- Memory line as a framed card; key notes cut to five short bullets (about 350 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The opening and the final frame are unchanged, so the joins with m4-v06 and m4-v08 hold.

New plate requests: none.

Counts: 6,213 characters (Revision 1: 6,213, unchanged); about 558 s to about 560 s.
