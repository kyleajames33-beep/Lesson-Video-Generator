# Year 11 Chemistry M4 V05: Catalysts and energy profiles. Why does a catalyst change activation energy but not reaction enthalpy? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,613 characters, 18 scenes, about 517 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 74, between `chem-y11-m4-v04` and `chem-y11-m4-v06`; a concept video built on one coded energy profile. Templates: `chem-y11-m4-v01.md` (energy-profile styling and colour key, same designer series), `chem-y11-m4-v04.md` (series layout), `chem-y11-m3-v15.md` (the catalyst evidence this video builds on), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v05` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Overlay catalysed and uncatalysed energy paths with unchanged endpoints; link to the rate cause already taught."; next handoff: "How do broken and formed bonds determine an approximate enthalpy change?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson05.sa.html` (SHA256 `91e73710ac6fdf5098802d26792ed904a4862e34796fed0da9aa489d679c1e8c`, recomputed, matches the route), sections `l05-how-catalysts-work-lowering-ea-title`, `l05-homogeneous-vs-heterogeneous-catalysts-title`, `l05-drawing-catalysed-vs-uncatalysed-diagrams-title`. Used: "A catalyst provides an alternative reaction pathway with a lower activation energy ... without being consumed"; "a different sequence of bond-breaking and bond-forming steps"; the overlay diagram (same reactant and product levels, one ΔH arrow, two Eₐ arrows from the reactant level); the "changes / does not change" card; the common error "The catalyst provides energy for the reaction"; the drawing rules and the three traps (ΔH changes; Eₐ from the axis or product level; catalysed products lower); homogeneous against heterogeneous by phase, with the instruction to state both phases; the Haber iron example and ΔH = −92 kJ mol⁻¹; the warm-up's two claims (rebuilt as the scene 1 prediction); worked example 1's style of profile reading (A1 uses new numbers). Not used: Eₐ(reverse) = Eₐ(forward) − ΔH (a "should know" calculation beyond the route stop; author note d), equilibrium and yield (Year 12), enzymes (Biology), the catalytic converter history (site note 1).

Owner rules applied: as `chem-y11-m4-v04.md` (one learner question; no people, hands or faces; real apparatus as painted plates; energy profiles, distributions, particle sketches and the surface model coded; 3 s prediction; "Pause here to answer." then a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Energy Changes in Chemical Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ1-03`: "construct energy profile diagrams to represent and analyse the enthalpy changes and activation energy associated with a chemical reaction (ACSCH072)"
- `C4-IQ1-04`: "model and analyse the role of catalysts in reactions (ACSCH073)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 43)

**Boundary:** opens on m4-v04's final frame (the ammonium chloride level diagram with "ΔH depends only on start and end", the catalysed peroxide flask, "A different route: does ΔH change?"). Teaches: a prediction (same total energy with or without a catalyst); ΔH depends only on reactants and products; the uncatalysed profile for hydrogen peroxide decomposition; the catalysed route (a different sequence of steps at the manganese dioxide surface; catalyst regenerated); the overlay with unchanged endpoints and the mountain-pass analogy; why the rate rises (m3-v15's distribution, recalled); why the catalysed flask warmed (same energy released faster); the drawing rules; homogeneous and heterogeneous catalysts (MnO₂ and iodide with peroxide; iron in ammonia synthesis). Not taught: Eₐ of the reverse reaction, equilibrium, enzymes, adsorption mechanism names, bond enthalpies (v06).

## Decisions

- **Learner question (route wording kept).** "Why does a catalyst change activation energy but not reaction enthalpy?" The answer, in order: ΔH depends only on the substances at the start and the end (2); a catalyst offers a different route whose highest point is lower (3, 4); the start and end do not move, so ΔH stays the same while Eₐ falls (5); a lower Eₐ means more successful collisions (6); the same energy comes out faster (7).
- **Opening frame (equals `chem-y11-m4-v04.md`'s final frame, same designer).** Left: the ammonium chloride level diagram ("NH₄Cl(s) + water", up arrow "separate ions: energy in", "separated ions", down arrow "hydrate ions: energy out", "hydrated ions", net arrow "ΔH = +14.8 kJ mol⁻¹ (data)"), start and end levels ringed teal with "ΔH depends only on start and end". Right: `y11c-flask-peroxide-mno2-plug-fizz-v1.png` with "hydrogen peroxide + manganese dioxide: a different route". Amber chip "A different route: does ΔH change?". The "Next" chip, which fades.
- **Prediction (3 s, scene 1; site warm-up claims rebuilt).** Two flasks of the same peroxide solution, one with manganese dioxide, one left (for weeks) until it has fully decomposed: which releases more energy in total? Chips "catalysed", "the same", "uncatalysed". Answer: the same. The surprise follows in scene 7 (why the catalysed flask was warmer).
- **The reaction and its ΔH (scenes 1 to 3).** 2H₂O₂(aq) → 2H₂O(l) + O₂(g), ΔH = −189 kJ mol⁻¹ for the equation as written (author note a; three significant figures by the Module 4 rule; spoken "about one hundred and eighty-nine kilojoules" for two moles). The profile is schematic (no numbers on the axis, tag "not to scale"); no activation energy values are given for peroxide (author note b).
- **The catalysed route (scene 4; site "alternative mechanism").** Plain words: peroxide molecules attach to the solid surface, their bonds weaken, products form and leave; the route's highest barrier is lower than the uncatalysed one (Revision 2, brief 184: no claim that every step needs less energy); the catalyst is regenerated (m3-v15 recovered and reweighed it). On the profile: a dashed lower path with two small humps (a multi-step route, as the site's drawing rules allow) whose highest point is well below the uncatalysed peak. Surface model coded: a strip of grey MnO₂ surface with peroxide molecules (ball-and-stick, O red, H white) settling, one O–O bond stretching, water and oxygen molecules leaving.
- **Mountain pass analogy (scene 5).** Two towns at fixed heights; the high road over a summit and a lower pass; same height descended overall; less to climb. Assumptions checked under "Memory aid check". It replaces the site's interactive.
- **Rate link (scene 6; route stop, no re-teaching).** m3-v15's distribution returns (the curve unchanged, the Eₐ line moved left, the shaded tail larger), with the memory line "A catalyst moves the line" recalled on a grey tag. One sentence each: spread of energies; only collisions with at least Eₐ react; more successful collisions per second.
- **The warm flask (scene 7; site common error "The catalyst provides energy").** The catalysed flask warmed (21.0 → 32.5 °C in m3-v15) because the same energy came out quickly, faster than heat could leak away; the uncatalysed flask releases the same total so slowly that its temperature hardly rises. Ties to v03's heat loss. A coded two-panel graph sketch (temperature against time; one sharp rise, one almost flat line), tagged "sketch, not data".
- **Drawing rules (scene 8; site rules and traps).** Same reactant level, same product level; each Eₐ from the reactant level to its own peak; one ΔH arrow. Two crossed sketches appear in turn: catalysed products drawn lower; Eₐ drawn from the axis.
- **Endothermic case (scene 9; site drill 4).** The same overlay for an endothermic reaction (products above reactants): the catalyst lowers the peak but cannot move the product level; an endothermic reaction stays endothermic. Crossed: "a catalyst makes it exothermic".
- **Homogeneous and heterogeneous (scene 10; site section).** Phase: "solid, liquid, gas or solution"; heterogeneous: different phase from the reactants (MnO₂(s) in H₂O₂(aq)); homogeneous: same phase (I⁻(aq) in H₂O₂(aq); author note c). The site's instruction to state both phases is built into A2's model answer.
- **Industrial example (scene 11).** N₂(g) + 3H₂(g) → 2NH₃(g), ΔH = −92 kJ mol⁻¹, over solid iron (heterogeneous); `c7-iron-catalyst-pellets-v1.png`. ΔH unchanged with or without iron. This sets up A2 and the final frame.
- **Memory aid:** "A catalyst finds a lower pass: same start, same finish, less climb." (see "Memory aid check"), scene 12; it extends m3-v15's "Catalyst: lower the bar".
- **Attempts (original wording, HSC style).** A1 (read an overlay; new numbers on a relative scale): reactants 20, uncatalysed peak 170, catalysed peak 110, products 60 kJ mol⁻¹. Model: Eₐ 150 and 90; ΔH +40 for both. Crossed: "catalysed ΔH smaller". A2 (iron in ammonia synthesis): heterogeneous (solid, gases); lower-Eₐ route, larger fraction of successful collisions, faster; ΔH unchanged at −92. Crossed: "the catalyst provides the energy needed".
- **Mistake scene:** none separate. "A catalyst releases more energy" (1, 2); "a catalyst supplies energy" (7; crossed in A2); catalysed products lower (8, 9; crossed in A1 feedback as "catalysed ΔH smaller"); Eₐ from the axis (8); a catalyst can make an endothermic reaction exothermic (9).
- **Handoff (route next: `chem-y11-m4-v06`, "How do broken and formed bonds determine an approximate enthalpy change?").** Scene 17: ΔH is fixed by the substances; ammonia's −92 kJ comes from the bonds broken and the bonds formed. Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted; module 4 lesson 5):**
  1. Two different uncatalysed activation energies are given for CO oxidation: the Revisit section says "dropping CO oxidation Ea from ~140 kJ mol⁻¹ to ~75 kJ mol⁻¹" (attributed to "the 1975 EPA catalytic converter mandate, Ford and GM's platinum–palladium system"), while drill 5 and Q8 use 232 kJ mol⁻¹. Neither value nor the attribution is sourced. Suggest one sourced value, or label both questions' numbers as illustrative and remove the attribution.
  2. Key term "Energy profile diagram: A graph of potential energy vs reaction progress", while the diagrams and lesson 1 use enthalpy on the vertical axis. Suggest "A graph of enthalpy against reaction progress".
  3. Q7(c) model answer: "The equilibrium amount of SO₃ depends on ΔG and temperature" goes beyond Year 11 Module 4's catalyst content (equilibrium is Year 12 Module 5). Suggest "A catalyst speeds up the forward and reverse reactions equally, so it does not change the equilibrium amount (Year 12)".
  - Checked and correct: worked example 1 (255, −75, 170 kJ mol⁻¹); drill 2 and Q6 (155, 130, 75 kJ mol⁻¹); supported and core tasks (95 kJ mol⁻¹ after a 55 kJ mol⁻¹ drop); classifications of Fe, H⁺, Pt, V₂O₅, MnO₄⁻.
- **Cause chain taught, in order:** (1) ΔH is H(products) − H(reactants), so it depends only on the start and end substances (2); (2) a reaction must pass through a high-energy arrangement, so there is a hill, Eₐ (3); (3) a catalyst provides a different sequence of steps whose highest barrier is lower, so the peak is lower (4); (4) the catalyst does not change the reactants or products, so the ends of the profile do not move and ΔH is unchanged (5); (5) a lower Eₐ means a larger fraction of collisions have enough energy, so the rate rises (6); (6) the same energy released faster heats the flask faster than it cools, so the catalysed flask gets warmer (7).
- **Entry knowledge:** m3-v13 (collision theory, activation energy, the energy distribution); m3-v15 (manganese dioxide with peroxide, catalyst recovered, "a catalyst moves the line", the warm flask); m4-v01 (energy profiles, five labels, ΔH sign); m4-v04 (ΔH depends on start and end); m1 states of matter.
- **Learner-visible vocabulary (plain meaning at first use):** catalyst, recalled (4: "speeds a reaction and comes out unchanged"); route or pathway (4); phase (9); heterogeneous, homogeneous (9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **flask** (`y11c-flask-peroxide-mno2-plug-fizz-v1.png`, with a ghost uncatalysed flask (`y11c-flask-acid-plug-spent-v1.png`) beside it in scenes 1, 2 and 7); **energy profile** (scenes 2 to 5, 8, 9, 13, 17: m4-v01's axes "enthalpy, H" and "reaction progress" with "not time"; reactant and product levels; the uncatalysed solid curve; the catalysed dashed curve with two small humps; Eₐ arrows in amber from the reactant level; one red ΔH arrow); **surface model** (scene 4); **pass analogy** (scene 5: a side-on coded landscape, two towns as flags at two heights, a high road and a lower pass; it morphs into the overlay profile); **distribution** (scene 6: m3-v15's curve with the Eₐ line moving left); **warming sketch** (scene 7); **phase sorter** (scene 10: two columns "same phase" and "different phase" with coded particle panels); **Haber panel** (scene 11: `c7-iron-catalyst-pellets-v1.png` and the ammonia profile); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v01):** uncatalysed path ink, solid; catalysed path teal, dashed; Eₐ arrows amber (lighter amber for the catalysed one); ΔH arrow red for negative, blue for positive; levels ink; crossed items red strike.
- **Board layout (Revision 2):** heading top left. Stages, each under about 52 s: the two painted flasks with the equation strip (1, 2); the full profile (3); the surface inset over the profile (4); the overlay with the peak slider, then the pass landscape (5); the distribution with the live fraction meter (6); the two flasks with the warming sketch (7); the ruled card (8, 9, about 47 s); the phase sorter, then the iron pellets and the ammonia profile (10, 11, about 52 s, with the painted pellets arriving in 11); the framed memory card (12); question cards (13 to 16); the final layout (17).
- **Colour roles (Revision 2, fixed for the whole video):** uncatalysed path ink, solid; catalysed path teal, dashed; Eₐ arrows amber (lighter amber for the catalysed one); ΔH arrow red for negative, blue for positive; levels ink; the shaded "enough energy" tail amber, the catalysed tail teal; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; recall and source tags grey.
- **Type sizes (Revision 2, 1080p):** the current calculation or rule line at least 44 px (48 px); framed results, the Eₐ meter, the fixed ΔH readout and the fraction readout about 52 px; level labels and axis titles 34 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (recall tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the peak slider (scene 5) and the fraction meter (scene 6).** A live control on the core idea (Eₐ changes, ΔH does not): a slider drags the peak of the profile down from the uncatalysed height to the catalysed height while both level lines stay pinned. Two readouts (52 px) update together: the Eₐ meter falls ("Eₐ: 100% → 55% of the uncatalysed barrier", relative, since the profile is schematic) while "ΔH = −189 kJ mol⁻¹" stays fixed with a green tick. In scene 6 the sliding Eₐ line drives a live teal meter "share of collisions with enough energy", which grows several-fold as the line moves left (grey tag "model curve, not peroxide data"), alongside the existing collisions-per-second counter.

Author notes (not learner copy):
(a) ΔfH (NBS tables, Wagman et al. 1982): H₂O₂(aq) −191.17, H₂O(l) −285.83 kJ mol⁻¹; 2 × (−285.83 + 191.17) = −189.3 kJ for 2 mol H₂O₂(aq). With pure liquid H₂O₂ (−187.78) the value is −196.1 (the site's lesson 7 worked example, used in m4-v08's attempt 2, which states "(l)"). The state difference is not raised here.
(b) Published activation energies for peroxide decomposition vary with conditions (often quoted about 75 kJ mol⁻¹ uncatalysed, lower with iodide or metal oxides). No values are shown; the profile is schematic.
(c) Iodide-catalysed decomposition of hydrogen peroxide is a standard homogeneous example (I⁻ is oxidised to IO⁻ and regenerated). It is named, not demonstrated; no procedure or concentration is given, so no safety chip is needed for it.
(d) Eₐ(reverse) = Eₐ(forward) − ΔH is the site's "should know" item; omitted (not in the route stop; adds a second calculation). The learning review may ask for it as a grey tag on the A1 feedback ("reverse: 110 − 60 = 50").
(e) A catalyst lowers the forward and reverse activation energies by the same amount; equilibrium is not mentioned (Year 12).
(f) ΔH for ammonia: 2 × (−46.11) = −92.2 kJ mol⁻¹ (NBS); the site uses −92.
(g) Pronunciations: "E a" spoken as "activation energy" throughout; "two H two O two"; "N two plus three H two".

Main question: *Why does a catalyst change activation energy but not reaction enthalpy?*
Entry knowledge: m3-v13, m3-v15, m4-v01, m4-v04.
Stops after: overlay profile with unchanged ends; rate link; the warm flask; drawing rules; homogeneous and heterogeneous.
Handoff: chem-y11-m4-v06, bond enthalpies.

## Opening frame and final frame

- **Opening frame:** m4-v04's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v06` opens on it):** right two thirds: the ammonia energy profile (coded): axes "enthalpy, H" and "reaction progress"; reactant level "N₂(g) + 3H₂(g)" at the left, product level "2NH₃(g)" lower at the right; the uncatalysed solid ink curve with a high peak; the catalysed dashed teal curve with a lower peak and the label "with iron"; amber Eₐ arrows from the reactant level to each peak; one red ΔH arrow "ΔH = −92 kJ mol⁻¹ (with or without iron)". Lower left: `c7-iron-catalyst-pellets-v1.png` small with the label "iron catalyst (solid)". The amber chip "Where does −92 kJ come from? The bonds broken and the bonds formed." The chip "Next: How do broken and formed bonds determine an approximate enthalpy change?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the flask from Module Three, hydrogen peroxide breaking down, with manganese dioxide as the catalyst. Two moles of hydrogen peroxide release about one hundred and eighty-nine kilojoules as they break down into water and oxygen. Now picture a second flask with no catalyst, left for weeks until all of its peroxide has broken down too. Which flask releases more energy in **total**?

Visual: opens on m4-v04's final frame; the "Next" chip fades and the level diagram shrinks to a thumbnail at the top left. On "breaking down" the flask's bubbles pulse. On "one hundred and eighty-nine kilojoules" an equation strip writes: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)  ΔH = −189 kJ mol⁻¹" (red). On "a second flask with no catalyst" `y11c-flask-acid-plug-spent-v1.png` slides in beside it (label "no catalyst"), with a coded calendar strip "week 1 ... week 6" ticking. Heading writes: "Does a catalyst change ΔH?". Chips "catalysed", "the same", "no catalyst". On "total" the 3 s `Countdown` ring runs. Hand tags: red "same 189 kJ?" with a `PenArrow` from the strip to the second flask; grey "weeks" with a pen ring on the calendar strip.

### 2. only the ends matter
> The same. Both flasks start with the same substances, and both finish with the same substances, water and oxygen. Delta H is the enthalpy of the products minus the enthalpy of the reactants, so it depends only on where the reaction starts and where it finishes. The catalyst changes how quickly the reaction gets there, not how far down it **goes**.

Visual: "the same" ticks. On "start with the same substances" both flasks gain the same label "2H₂O₂(aq)"; on "finish with the same substances" both gain "2H₂O(l) + O₂(g)". On "the enthalpy of the products minus the enthalpy of the reactants" the strip "ΔH = H(products) − H(reactants)" (grey tag "m4-v01"); two level lines draw at the right, "reactants" higher, "products" lower, with the red ΔH arrow between them. On "how quickly" a stopwatch icon (coded) over the catalysed flask; on "goes" the ΔH arrow pulses. Hand tags: slate "same start, same finish" with a `ScribbleCircle` round the two matching labels; red "ΔH fixed" on the arrow.

### 3. the uncatalysed hill
> Let's draw the full energy profile. The reactants sit on the left, and the products sit lower on the right, because energy is released. Between them is a hill. Its height above the reactants is the activation energy, the minimum energy a collision needs before old bonds can start to break. Without a catalyst, that hill is high, so very few collisions have enough energy to get **over**.

Visual: clear change: the two levels become an energy profile at full width (axes "enthalpy, H" and "reaction progress", tag "not time"; tag "not to scale"). On "The reactants sit on the left" the reactant level writes "2H₂O₂(aq)"; on "the products sit lower" the product level "2H₂O(l) + O₂(g)". On "a hill" the solid ink curve draws up and over. On "the activation energy" the amber Eₐ arrow from the reactant level to the peak, label "Eₐ (no catalyst)" (grey tag "m3-v13"). On "over" a few coded dots roll up the hill and most fall back. Amber hand tag "the hill = Eₐ" with a `PenArrow` up the Eₐ arrow; pen ring on the few dots that make it over.

### 4. a different route
> A catalyst gives the reaction a different route. With manganese dioxide, peroxide molecules attach to the solid's surface, where their bonds are weakened. The products form and then leave the surface. This route's highest barrier is lower than the old one, so the peak is lower. The catalyst takes part, but it comes out unchanged at the **end**. That's why a small amount of catalyst can be used again and again.

Visual: camera push into an inset at the lower left: the surface model. On "attach to the solid's surface" ball-and-stick H₂O₂ molecules settle onto a grey "MnO₂(s)" strip; on "their bonds are weakened" one O–O bond stretches and glows. On "The products form and then leave" water and O₂ molecules lift off. On "This route's highest barrier is lower" the dashed teal path draws on the profile with two small humps, its highest point well below the solid peak. On "comes out unchanged" the surface strip glows and the tag "regenerated (m3-v15: recovered, same mass)" writes; on "end" the inset closes. Hand tags: teal "new route" on the dashed path; grey "comes out unchanged" with a pen ring on the glowing surface strip.

### 5. same ends, lower pass
> Put the two routes on one diagram. Both start at the same reactant level, and both finish at the same product level. Only the peak is lower. So the activation energy changes, but delta H, the drop from reactants to products, is exactly the same. It's like crossing a mountain range by a lower pass. You start and finish in the same towns, so the overall drop is the same. You just have less to **climb**.

Visual: on "Both start at the same reactant level" the reactant level line pulses where both curves begin; on "both finish at the same product level" the product level pulses. On "Only the peak is lower" the peak slider (Decisions) drags the peak down from the solid curve's height to the dashed curve's height while both level lines stay pinned: the Eₐ meter (52 px) falls "100% → 55%" and the readout "ΔH = −189 kJ mol⁻¹" stays fixed with a green tick; the two peaks are bracketed and a second, shorter amber arrow "Eₐ (with catalyst)" draws from the reactant level. On "delta H, the drop from reactants to products" the single red ΔH arrow pulses, label "same ΔH for both". On "a mountain range" the profile morphs into the pass analogy: a coded landscape with a flag "town A" on a hillside and "town B" lower in a valley, a high road over the summit and a lower road through a pass. On "the overall drop is the same" a bracket between the two flags' heights; on "climb" the lower road's climb is shaded and the scene morphs back into the profile. Hand tags: amber "less climb" on the shorter Eₐ arrow; red "same drop" with a `ScribbleCircle` on the single ΔH arrow.

### 6. why it's faster
> So why is it faster? At any temperature, particles have a spread of energies, and only collisions with at least the activation energy can react. Lowering the activation energy moves that line to the left, so a much bigger fraction of collisions have enough energy. More successful collisions each second means a faster **rate**.

Visual: clear change to m3-v15's distribution (coded: number of particles against energy; one curve). On "a spread of energies" the curve draws. On "only collisions with at least the activation energy" the amber line "Eₐ (no catalyst)" and its small shaded tail. On "moves that line to the left" a lighter amber line "Eₐ (with catalyst)" slides left; the curve does not move (tag "curve unchanged: same temperature"). On "a much bigger fraction" the larger tail shades teal and the live meter "share of collisions with enough energy" (52 px) grows several-fold with the line (grey tag "model curve, not peroxide data"). Grey tag "A catalyst moves the line (m3-v15)". On "rate" a small counter "successful collisions per second" jumps. Teal hand tag "line moved, curve didn't" with a `PenArrow` from the old line to the new one.

### 7. why the flask got warm
> So why did the catalysed flask get warm, when the slow one hardly warms at all? Not because the catalyst adds energy. The reaction releases the same energy, just much faster, so heat builds up quicker than it can escape. The slow flask releases the same total, but so slowly that the heat leaks away as it **goes**.

Visual: the two flasks return at the left with their readouts: catalysed "21.0 → 32.5 °C" (m3-v15), uncatalysed "21.0 °C" (tag "hardly changes"). On "Not because the catalyst adds energy" a chip "catalyst adds energy" fades in and is crossed. On "much faster" a coded sketch at the right (temperature against time, tag "sketch, not data"): a sharp rise then a slow fall for the catalysed flask. On "heat builds up quicker than it can escape" large orange arrows in, small arrows out. On "the slow flask" a nearly flat line for the uncatalysed flask; on "goes" tiny arrows in and out balance (tag "same total energy, spread over weeks"). Orange hand tag "same energy, faster" on the sharp rise; red hand tag "no energy added" on the crossed chip.

### 8. drawing it in an exam
> When you draw this in an exam, follow three rules. Start both curves at the same reactant level, and end them at the same product level. Measure each activation energy from the reactant level up to its own peak. And draw just one delta H arrow, from reactants to products, because it belongs to both **routes**.

Visual: clear change to a clean overlay profile on a ruled card. On "Start both curves at the same reactant level" rule 1 writes and a crossed sketch appears beside it: a dashed curve ending at a lower product level (red strike "catalysed products lower: wrong"). On "Measure each activation energy" rule 2 writes; a crossed sketch shows an Eₐ arrow from the horizontal axis (red strike "Eₐ from the axis: wrong"); the correct amber arrows draw from the reactant level. On "just one delta H arrow" rule 3 writes; on "routes" the red ΔH arrow pulses with the label "for both routes". Stage: the ruled card fills the frame (rules at 44 px). Each crossed sketch carries a red hand tag ("ends don't move", "from the reactant level"); pen ring on the correct amber arrows.

### 9. endothermic too
> The same rules work for an endothermic reaction, where the products sit higher than the reactants. A catalyst still lowers the peak, but it can't move the products. An endothermic reaction stays endothermic, with the same positive delta H, catalyst or not. A catalyst never turns energy taken in into energy given **out**.

Visual: on the ruled card, a second small overlay draws beside the first: on "the products sit higher" the product level writes above the reactant level; solid and dashed paths rise over their peaks to it; on "still lowers the peak" the dashed peak is bracketed below the solid one. On "can't move the products" the product level is ringed and a dashed ghost level below it is crossed (red strike "catalysed products lower: wrong"). On "the same positive delta H" one blue ΔH arrow "ΔH positive (both)". On "out" a chip "a catalyst makes it exothermic" fades in and is crossed. Blue hand tag "still endothermic" with a pen ring on the blue ΔH arrow; the crossed chip carries a red hand tag "products can't move".

### 10. two kinds of catalyst
> Catalysts come in two kinds, sorted by phase, meaning solid, liquid, gas or solution. Manganese dioxide is a solid working in a solution, so it's a heterogeneous catalyst, a different phase from the reactants. Iodide ions, dissolved in the peroxide solution, also speed it up, and they're in the same phase, so iodide is a homogeneous **catalyst**.

Visual: clear change to the phase sorter, two columns. On "sorted by phase" gloss "phase: solid, liquid, gas or solution (aqueous)". On "Manganese dioxide is a solid working in a solution" the left panel: a grey solid strip under a blue solution with H₂O₂ molecules, labels "MnO₂(s)" and "H₂O₂(aq)"; on "heterogeneous" the column head "heterogeneous: different phase". On "Iodide ions" the right panel: I⁻ ions scattered among H₂O₂ molecules in one solution, labels "I⁻(aq)" and "H₂O₂(aq)"; on "catalyst" the column head "homogeneous: same phase". Hand tags: grey "different phase" and "same phase" under the two columns, with a pen ring on "(s)" against "(aq)".

### 11. an industrial catalyst
> The same rules hold in industry. Ammonia is made from nitrogen and hydrogen gases passed over solid iron, a heterogeneous catalyst. The iron makes the reaction fast enough to be useful. Without it, the reaction would need far higher temperatures to go at a useful rate. But delta H stays at minus ninety-two kilojoules per mole, with or without **it**.

Visual: on "Ammonia is made" `c7-iron-catalyst-pellets-v1.png` at the left with "iron (solid)" and gas molecules N₂ and H₂ drifting over it (labels "(g)"); a strip "N₂(g) + 3H₂(g) → 2NH₃(g)". On "heterogeneous catalyst" the pellets drop into the "different phase" column from scene 9 (small). On "fast enough to be useful" the ammonia overlay profile draws at the right (solid and dashed paths). On "minus ninety-two kilojoules per mole" the red ΔH arrow "ΔH = −92 kJ mol⁻¹"; on "it" the label "(with or without iron)". Stage: the painted pellets large at the left (stage change from the sorter). Hand tags: grey "solid + gases" with a pen ring on "(g)"; red "same −92" on the ΔH arrow.

### 12. the line to remember
> Here's the line to remember. A catalyst finds a lower pass. Same start, same finish, less **climb**.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "A catalyst finds a lower pass: same start, same finish, less climb." On "Same start" and "same finish" the two flags from scene 5 return small; on "climb" the lower road's climb shades. Grey tag beneath: "m3-v15: Catalyst: lower the bar."

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. On an energy profile, the reactants are at twenty kilojoules per mole, the uncatalysed peak is at one hundred and seventy, the catalysed peak is at one hundred and ten, and the products are at sixty. Find the activation energy with and without the catalyst, and delta H for each route. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience") with a coded profile beside it (values on a labelled relative axis): "The energy profile shows a reaction with and without a catalyst. Reactants: 20 kJ mol⁻¹; peak without catalyst: 170 kJ mol⁻¹; peak with catalyst: 110 kJ mol⁻¹; products: 60 kJ mol⁻¹ (values relative to an arbitrary zero). (a) Determine the activation energy with and without the catalyst. (2 marks) (b) Determine ΔH for each pathway. (1 mark)" The full question and profile stay on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no arrows drawn).

### 14. feedback 1 (brief)
> Without the catalyst, the activation energy is one hundred and seventy minus twenty, one hundred and fifty. With it, one hundred and ten minus twenty, ninety. Delta H is sixty minus twenty, plus forty kilojoules per mole for both routes, because the ends don't move. Saying the catalyst changes delta H misses the whole **point**.

Visual: card shrinks to the top. On the profile, arrows draw on cue: "Eₐ = 170 − 20 = 150 kJ mol⁻¹" (amber); "Eₐ(catalysed) = 110 − 20 = 90 kJ mol⁻¹" (light amber); "ΔH = 60 − 20 = +40 kJ mol⁻¹ (both)" (blue). On "point" a chip "catalysed ΔH smaller" fades in and is crossed. Hold about 1 second. The three arrow labels frame in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "ends don't move".

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Iron is used as a catalyst when ammonia is made from nitrogen and hydrogen gases. Classify iron as a homogeneous or heterogeneous catalyst, explain why it increases the rate, and state its effect on delta H. Pause here to answer.

Visual: `QuestionCard`: "Solid iron is used as a catalyst in the industrial reaction N₂(g) + 3H₂(g) → 2NH₃(g), ΔH = −92 kJ mol⁻¹. (a) Classify iron as a homogeneous or heterogeneous catalyst. Justify your answer. (1 mark) (b) Explain how iron increases the rate of this reaction. (2 marks) (c) State the effect of iron on ΔH. (1 mark)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Iron is a solid and the reactants are gases, so it's heterogeneous. It provides a route with a lower activation energy, so a bigger fraction of collisions have enough energy, and the rate increases. Delta H is unchanged at minus ninety-two, because the reactants and products are the same. The catalyst doesn't supply the **energy**.

Visual: card shrinks. Rows on cue: "(a) Fe(s), reactants (g): different phases → heterogeneous"; "(b) lower-Eₐ pathway → larger fraction of collisions with E ≥ Eₐ → more successful collisions per second"; "(c) ΔH unchanged: −92 kJ mol⁻¹". On "energy" a chip "iron provides the energy to react" fades in and is crossed. Hold about 1 second. Row (c) frames in a dark-ink box with a green tick. The crossed chip carries a red hand tag "lower barrier, not extra energy".

### 17. conclusion and handoff
> So a catalyst lowers the activation energy by offering a different route, but delta H depends only on the reactants and products, so it stays the same. That raises a deeper question. Ammonia's minus ninety-two kilojoules is fixed by the substances themselves. So where does that number come from? It comes from the bonds that break and the bonds that **form**.

Visual: the memory line returns small at the top. On "lowers the activation energy" the ammonia overlay profile returns full size and the two Eₐ arrows pulse; on "depends only on the reactants and products" the two levels pulse. On "fixed by the substances themselves" the red ΔH arrow "ΔH = −92 kJ mol⁻¹ (with or without iron)" pulses; `c7-iron-catalyst-pellets-v1.png` settles small at the lower left with "iron catalyst (solid)". On "the bonds that break" faint N≡N and H–H sketches appear by the reactant level; on "form" faint N–H sketches by the product level; both sets of sketches then fade as the amber chip "Where does −92 kJ come from? The bonds broken and the bonds formed." and the chip "Next: How do broken and formed bonds determine an approximate enthalpy change?" write. Hold about 2 seconds. This is the final frame (m4-v06 opens on it; it holds no bond sketches, which m4-v06 draws on its own scene 1 cues).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A catalyst gives a route with a lower activation energy; it is regenerated.
2. ΔH depends only on reactants and products, so a catalyst does not change it.
3. Lower Eₐ: more collisions have enough energy, so the rate rises. No energy is supplied.
4. Draw: same start and end levels; Eₐ from reactants to each peak; one ΔH arrow.
5. Heterogeneous: different phase (MnO₂(s), Fe(s)). Homogeneous: same phase (I⁻(aq)).

Memory aid (framed card, on the notes screen): *A catalyst finds a lower pass: same start, same finish, less climb.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why ΔH depends only on the ends (2); why there is a hill (3); why the catalysed peak is lower (4); why ΔH cannot change (5); why the rate rises (6); why the catalysed flask warmed (7); why the drawing rules follow (8); why an endothermic reaction stays endothermic (9).
- **Misconceptions addressed:** a catalyst releases more energy (1, 2); a catalyst supplies energy (7; crossed in A2); catalysed products lower (8, 9); a catalyst can turn an endothermic reaction exothermic (9); Eₐ from the axis (8); catalysed ΔH smaller (crossed in A1).
- **One idea at a time:** prediction (1), ends (2), hill (3), route (4), overlay (5), rate (6), warm flask (7), rules (8), endothermic case (9), phases (10), industry (11), memory line (12).
- **Video makes it easier:** the catalysed path drawn on top of the uncatalysed one with the same level lines pulsing (5); the pass landscape morphing into the profile (5); the distribution line moving while the curve stays (6); a fast and a slow warming sketch (7); crossed sketches beside each rule (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 24 s and 25 s.
- **Avoided double teaching:** collision theory, activation energy and the distribution (m3-v13, m3-v15; recalled with tags); profile basics and the five labels (m4-v01); the catalyst's recovery (m3-v15).
- **Syllabus coverage:** `C4-IQ1-03` construct (5, 8, 9) and analyse (A1) profiles with ΔH and Eₐ; `C4-IQ1-04` model (4, 5, 10) and analyse (6, 7, 11, A2) the role of catalysts.
- **Out of scope by design:** Eₐ(reverse) (author note d); equilibrium (Year 12); enzymes (Biology).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Without catalyst: Eₐ = 170 − 20 = 150 kJ mol⁻¹ (1 mark); with catalyst: Eₐ = 110 − 20 = 90 kJ mol⁻¹ (1 mark). (b) ΔH = 60 − 20 = +40 kJ mol⁻¹ for both pathways (1 mark). Classic mistake (crossed): "ΔH is smaller with the catalyst".

**Attempt 2 (scene 15; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) Heterogeneous: iron is a solid and the reactants are gases, so they are in different phases (1 mark). (b) Iron provides an alternative pathway with a lower activation energy (1 mark), so at the same temperature a larger fraction of collisions have at least the activation energy, giving more successful collisions per second (1 mark). (c) No effect: ΔH remains −92 kJ mol⁻¹ because the reactants and products are unchanged (1 mark). Classic mistake (crossed): "iron provides the energy needed to react".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Peroxide decomposition | 2H₂O₂(aq) → 2H₂O(l) + O₂(g), ΔH = −189 kJ mol⁻¹ | 1 to 3 |
| Flask temperatures | 21.0 → 32.5 °C (m3-v15; m4-v01) | 7 |
| Ammonia | N₂(g) + 3H₂(g) → 2NH₃(g), ΔH = −92 kJ mol⁻¹ | 11, 15 to 17, final frame |
| A1 | levels 20, 170, 110, 60 kJ mol⁻¹; Eₐ 150 and 90; ΔH +40 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 2 × (−285.83 − (−191.17)) = −189.32 → −189 kJ mol⁻¹ (NBS aqueous H₂O₂).
- 2 × (−46.11) = −92.22 → −92 kJ mol⁻¹.
- 170 − 20 = 150; 110 − 20 = 90; 60 − 20 = +40.
- 32.5 − 21.0 = 11.5 °C (m3-v15's reading; unchanged).

## Memory aid check

- **"A catalyst finds a lower pass: same start, same finish, less climb."** Meaning: the catalysed pathway connects the same reactants and products by a route with a lower highest point. Assumptions checked: the towns stand for the reactant and product enthalpy levels, which a catalyst cannot change because it does not change the substances (scene 2); "less climb" is the lower activation energy measured from the reactant level (scene 8); the pass still has a climb, so the analogy does not suggest the barrier vanishes; the analogy's horizontal distance means nothing, matching the "progress, not time" tag. It extends m3-v15's "Catalyst: lower the bar" rather than replacing it.
- **Considered, not used:** "Lower the hill, not the valley" (the valley image suggests the product level is a minimum, which confuses endothermic profiles).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,613 characters**, 18 scenes (per scene: 384, 345, 384, 409, 400, 324, 311, 307, 318, 344, 348, 96, 318, 326, 239, 329, 356, 75; Revision 1: 5,609, then miscounted as 17 scenes in this line). At 13.3 characters per second the speech is about 422 s; add about 14 s of settling (the full profile in 3, the surface inset in 4, the peak slider and pass morph in 5, the distribution and fraction meter in 6, the second overlay in 9), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 517 s** (Revision 1: about 515 s).

## Scene list and build ids

Lesson key `c-y11-m4-v05` (route chem-y11-m4-v05; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v05`.

In order (18 scene headings, all `### N.`): hook-prediction, only-the-ends, uncatalysed-hill, different-route, same-ends-lower-pass, why-faster, warm-flask, drawing-rules, endothermic-too, two-kinds, industrial-catalyst, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v04's final frame into scene 1 by camera continue (the flask stays); 1 to 2 camera continue; 2 to 3 clear change to the full profile (the two level lines carry over); 3 to 4 camera push into the surface inset; 4 to 5 camera continue, with the pass morph inside the scene; 5 to 6 clear change to the distribution; 6 to 7 clear change to the flasks; 7 to 8 clear change to the ruled card; 8 to 9 camera continue (second overlay on the same card); 9 to 10 clear change to the phase sorter; 10 to 11 camera continue; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v05-learning-review.md`, `checks/c-y11-m4-v05-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c7-iron-catalyst-pellets-v1.png` (1800 × 1019, RGBA; a heap of grey porous pellets): scenes 11, 17, final frame. m3-v15 rejected it for a different process; here it is the right process.
- `public/assets/chemistry/y11c-flask-peroxide-mno2-plug-fizz-v1.png` (1106 × 1422; shallow clear liquid, swirling black catalyst, bubbles and froth under a cotton plug): opening, scenes 1, 2, 7. `public/assets/chemistry/y11c-flask-acid-plug-spent-v1.png` (1106 × 1422; the same flask with still, clear liquid under a plug; m3-v15 uses it as "hydrogen peroxide, no catalyst"): scenes 1, 2, 7. Revision 2: both delivered (brief 183) and inspected 6 November on a dark sheet; same flask placement, so they stand side by side at one scale. The coded fallback is no longer needed.
- **Inspected, not used:** `c7-haber-converter-v1.png` (an industrial reactor vessel; the pellets show the catalyst itself, which is the point); `m7-temp-probe-sleeve-stand-v1.png` (the flask readouts are coded chips here).

Need: no new plates.

Coded: equation strips, level lines, energy profiles with solid and dashed paths, Eₐ and ΔH arrows, surface model with ball-and-stick molecules, pass landscape, distribution, warming sketch, phase panels, gas molecules, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson05.sa.html` (the catalyst definition and card, the overlay diagram, the drawing rules and three traps, homogeneous and heterogeneous examples, Haber ΔH) and log the three site notes.
3. Confirm the aqueous peroxide ΔH (author note a) and that iodide catalysis of hydrogen peroxide is correctly described as homogeneous (author note c).
4. Confirm both attempt cards are original, carry every needed fact (A1's values and the relative-scale note; A2's equation and phases), and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v04's final frame, and send the final frame to the m4-v06 designer.

## YouTube metadata (draft)

Title: Catalysts and Energy Profiles: Why ΔH Doesn't Change | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Manganese dioxide makes hydrogen peroxide break down in seconds instead of weeks. Does it make the reaction release more energy? Draw catalysed and uncatalysed energy profiles on one diagram, see why the activation energy falls but ΔH stays the same, why the catalysed flask still gets warmer, and how to tell homogeneous from heterogeneous catalysts. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"construct energy profile diagrams to represent and analyse the enthalpy changes and activation energy associated with a chemical reaction (ACSCH072)"
"model and analyse the role of catalysts in reactions (ACSCH073)"

Previous: Why can dissolving an ionic substance warm or cool water? Next: How do broken and formed bonds determine an approximate enthalpy change?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Peroxide ΔH (science check).** −189 kJ mol⁻¹ for aqueous peroxide (author note a), while m4-v08's attempt 2 uses −196.0 kJ for pure liquid peroxide (site data). The states are written on both cards. If root prefers one value across the course, v05 can show no number (cut "Two moles of hydrogen peroxide release about one hundred and eighty-nine kilojoules as they break down into water and oxygen", about 115 characters, and the ΔH on the strip).
- **2. Warm flask (learning review).** Scene 7 explains the m3-v15 temperature rise by rate of heat release. Check that students do not take away "catalysed reactions release more heat"; the crossed chip and "same total" tag are there to block it.
- **3. Plate dependencies (resolved in Revision 2).** Both flask plates are delivered and used as painted.
- **4. Eₐ(reverse) (root).** Omitted (author note d); add as a grey tag in feedback 1 if root wants the site's "should know" item covered.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the pass analogy help or distract; is the surface model followable in one scene), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 0 should fix, 1 optional; the optional wording change is made in Revision 2.
- Checker output (Revision 2, 6 November): narration 5,613 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v05-learning-review.md`, `checks/c-y11-m4-v05-science-check.md`; both list the same one):
1. Pathway explanation (optional, accepted): scene 4 now says "This route's highest barrier is lower than the old one, so the peak is lower" (was "Each step on this route needs less energy"), which a two-hump sketch supports. The quoted cue, the catalysed-route decision and cause-chain item 3 match. The surface sequence and the unchanged endpoints are kept.

Visual upgrade (teaching logic unchanged):
- Scene 1 already opens on painted plates (m4-v04's final frame with the catalysed flask, unchanged); the second painted flask arrives in the same scene. Both flask plates are now delivered and inspected; the coded fallback is dropped.
- Live control: the peak slider (scene 5): the peak drags down while both levels stay pinned; the Eₐ meter falls (relative, the profile is schematic) and "ΔH = −189 kJ mol⁻¹" stays fixed with a green tick. Scene 6 adds a live "share of collisions with enough energy" meter driven by the sliding Eₐ line.
- Stage list written (Board layout); the iron pellets become their own painted stage in scene 11, so no set-up runs past about 52 s.
- Framed answers with a green tick: the A1 values (feedback 1) and row (c) of feedback 2; "same ΔH" carried by the fixed readout in scene 5. Crossed slips carry red hand tags.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 11).
- Memory line as a framed card; key notes cut to five short bullets (about 410 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout". The narration-estimate line's old "17 scenes" slip is corrected to 18.
- Question cards already arrive with their full text; unchanged. The opening is unchanged. Join with m4-v06 (its optional brief 184 finding): scene 17's faint bond sketches now fade as the closing chips write, so the final frame matches the final-frame specification (no bond sketches); m4-v06 draws them on its own scene 1 cues.

New plate requests: none.

Counts: 5,613 characters (Revision 1: 5,609); about 515 s to about 517 s.
