# Year 11 Chemistry M3 V02: Synthesis and decomposition. How can we predict and balance synthesis and decomposition products? (design)

Status: Revision 2 (6 Nov 2026): brief 182 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,627 characters, 16 scenes, about 508 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: second Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 56, between `chem-y11-m3-v01` and `chem-y11-m3-v03`. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (staging), `bio-y11-fa1-v05.md` (plates); series conventions from `chem-y11-m2-v01.md` (atom tiles, tallies, coefficient slots, the memory line "Change the big number in front, never the small number inside") and `chem-y11-m1-v19.md` (ion charges and the neutrality rule) and `chem-y11-m1-v20.md` (Stock numerals). No starter pack exists; the pack work is done here (site givens unchanged, every equation checked by an atom-count script, original questions, asset reuse). Route entry: `chem-y11-m3-v02` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Predict familiar products and balance coefficients, conserving every atom."; next handoff: "How do solubility rules predict a precipitation reaction?"; practical: "Approved synthesis/decomposition observations"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson02.sa.html` (SHA256 `a7facf444691b5c5632a09f95ab0ae7e52e3ecff9a89e8c32525be1e2f645546`, recomputed, matches the route), sections `l02-balancing-synthesis-and-decomposition-equati-title` and `l02-worked-examples-title`, plus its key terms, misconceptions and drill. Used: the two patterns "A + B → AB" and "AB → A + B" and "distinguish synthesis from decomposition by counting products"; misconception 1 (synthesis reactants need not be elements: SO₃ + H₂O → H₂SO₄); misconception 2 (decomposition products can be compounds: CaCO₃(s) → CaO(s) + CO₂(g)); drill 1 (Fe + Cl₂ → FeCl₃, balanced to 2Fe + 3Cl₂ → 2FeCl₃); the key term "Electrolytic decomposition ... 2H₂O → 2H₂ + O₂"; drill 2's style of atom count; Q2(a) (2H₂O₂(aq) → 2H₂O(l) + O₂(g)) and Q2(c) (MnO₂ is a catalyst, not a reactant); worked example 2 (copper(II) carbonate, already balanced); the safety box ("gently heating copper(II) carbonate or the catalysed decomposition of dilute hydrogen peroxide ... safety glasses, small quantities, a heat-resistant mat and good ventilation"); the "types of energy that drive decomposition" (heat, electricity). Not used: the Hindenburg hook (people died; the video draws no people and the case adds nothing the magnesium case lacks), the ammonium nitrate case study and Beirut (analysis only, and the route stop is prediction and balancing), the iron wool in oxygen example (site note 2), KClO₃ (drill 2; heating chlorates is not a school practical, and three decomposition cases are enough).

Owner rules applied: one learner question; no people, hands or faces (tongs rest on the mat, apparatus stands alone); real substances and apparatus as painted plates; atom tiles, tallies, coefficient slots and formula building coded; one reasoning stage at a time; 3 s prediction countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame; earlier videos recalled, not re-taught.

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ1-02`: "use modelling to demonstrate"
  - "the rearrangement of atoms to form new substances"
  - "the conservation of atoms in a chemical reaction (ACSCH042, ACSCH080)"
- `C3-IQ1-03`: "conduct investigations to predict and identify the products of a range of reactions, for example:"
  - "synthesis"
  - "decomposition"
  - "combustion"
  - "precipitation"
  - "acid/base reactions"
  - "acid/carbonate reactions (ACSCH042, ACSCH080)"
- `C3-IQ1-05`: "construct balanced equations to represent chemical reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 41 and 42)

**Boundary:** opens on m3-v01's final frame (reconciled to m3-v01 Revision 1; see "Opening frame and final frame"). Teaches: synthesis (many reactants, one product) and decomposition (one reactant, several products) named by counting products; synthesis reactants can be compounds; predicting a synthesis product between a metal and a non-metal from ion charges (m1-v19), including a Stock numeral (m1-v20); the order "formula first, then coefficients"; balancing 2Na + Cl₂ → 2NaCl and 2Fe + 3Cl₂ → 2FeCl₃ (the common-multiple step); decomposition products contain only the atoms of the reactant; three decomposition families with their energy source: metal carbonates on heating (to a metal oxide and carbon dioxide), water by electricity (to its elements), hydrogen peroxide with a catalyst (to water and oxygen); balancing 2H₂O → 2H₂ + O₂ and 2H₂O₂ → 2H₂O + O₂; identifying gases by the limewater test (carbon dioxide) and the glowing splint (oxygen). Recalls without re-teaching: balancing by inspection, subscripts against coefficients and state symbols (m2-v01); ion charges and neutrality (m1-v19); Stock numerals (m1-v20); indicators of change and atoms rearranging (m3-v01). Not taught: precipitation (m3-v03, the handoff), combustion (m3-v04), catalysts beyond one plain sentence (Module 3 rates videos), the hydrogen pop test (m3-v07 owns metals in acid), ammonium nitrate, redox.

## Decisions

- **Learner question (route wording kept).** "How can we predict and balance synthesis and decomposition products?" The answer, in order: count products to name the pattern (1, 2); for a synthesis between elements, charges fix the product's formula (3, 5); then coefficients balance it (4, 6); a decomposition can only release what the compound already holds, and familiar families have familiar products, each confirmed by a gas test (7 to 9); balancing follows the same rule (8, 9).
- **Opening frame (equals `chem-y11-m3-v01.md`'s final frame, Revision 1, read 5 November; m3-v01 was designed in parallel).** The board split by a slate divider: left, the atom-tile model "2Mg + O₂ → 2MgO" with `p01-mg-ribbon-v1.png` small ("magnesium burns in oxygen"), the equation "2Mg(s) + O₂(g) → 2MgO(s)", tally "Mg 2 | 2 ✓, O 2 | 2 ✓" and the amber chip "two substances → one"; right, the model "CaCO₃ → CaO + CO₂" with `m5-g02b-open-crucible-v1.png` small ("calcium carbonate heated"), the equation "CaCO₃(s) → CaO(s) + CO₂(g)", tally "Ca 1 | 1 ✓, C 1 | 1 ✓, O 3 | 3 ✓" and the amber chip "one substance → two"; heading "Reactive chemistry"; m3-v01's memory line small at the top right; the "Next" chip, which fades. Scene 1 uses both halves as its hook. If m3-v01's final frame changes in review, only scene 1 changes.
- **The hook is m3-v01's two cases, counted (route start: concrete case).** m3-v01 ends on magnesium burning (two substances into one) and calcium carbonate heated (one into two), the site's lesson 2 examples, with amber chips that describe the patterns without naming them. Scene 1 counts reactants and products and promises names; scene 2 names them. This matches the site's "distinguish synthesis from decomposition by counting products". Copper carbonate (m2-v01) appears in scene 7 as a second carbonate.
- **Prediction is taught causally.** Synthesis between a metal and a non-metal makes an ionic compound, so its formula comes from the ion charges (m1-v19), not from the reactant formulas. The classic error, copying the subscript from Cl₂ into the product (site's "MgO₂" trap, lesson 4, applied here to iron chloride), is the 3 s prediction (scene 5). "Formula first, then coefficients" is the memory aid.
- **Worked examples (site's own cases).** 2Na + Cl₂ → 2NaCl (the site's key-term example, balanced; site note 1); 2Fe + 3Cl₂ → 2FeCl₃ (site drill 1), with the Stock numeral "iron(III)" giving Fe³⁺ (m1-v20); SO₃ + H₂O → H₂SO₄ on one line (site misconception 1). The common-multiple step for chlorine (2 and 3 → 6) is taught because the site's trial-and-error steps ("Multiply FeCl₃ by 2 ... Still unbalanced") are slower to follow on screen; the answer is unchanged.
- **Decomposition families (route stop "familiar products").** Metal carbonate → metal oxide + carbon dioxide, scoped to many metal carbonates, such as the copper, calcium and zinc carbonates shown (Revision 2, brief 182 finding 1: sodium and potassium carbonates do not decompose with school heating, as in the RSC class experiment https://edu.rsc.org/experiments/thermal-decomposition-of-metal-carbonates/450.article; the family card carries this) (CuCO₃ recalled from m2-v01, CaCO₃ from the site's misconception 2); water → hydrogen + oxygen by electricity (site key term); hydrogen peroxide → water + oxygen with manganese dioxide (site Q2). Each is paired with its energy source (heat, electricity, a catalyst) and, for the two gases, its test. The rule underneath: products can contain only atoms the compound already had.
- **Practical observations (route practical: "Approved synthesis/decomposition observations").** Shown, not instructed: magnesium burning (recalled, m2-v01), green copper carbonate turning black with limewater going milky, and dilute hydrogen peroxide with manganese dioxide relighting a glowing splint. Sodium with chlorine is named as "a teacher demonstration in a fume cupboard, or footage" on a grey tag and is not drawn burning.
- **Safety (site's controls, science check).** Spoken once (scene 9): safety glasses, small amounts of dilute hydrogen peroxide, heat-resistant mat. Tag only for sodium and chlorine. No invented rules.
- **Memory aid (see "Memory aid check"):** "Charges fix the formula. Coefficients fix the count." It extends m2-v01's line ("Change the big number in front, never the small number inside").
- **Attempts (original wording, HSC style).** A1 (synthesis, needs charges): lithium reacts with nitrogen gas to form a single product: 6Li(s) + N₂(g) → 2Li₃N(s); crossed "Li + N₂ → LiN₂" (subscript copied from N₂). A2 (decomposition, needs the family and the test): zinc carbonate heated: ZnCO₃(s) → ZnO(s) + CO₂(g), limewater turns milky; crossed "ZnCO₃ → Zn + C + O₃" (decomposition into elements; site misconception 2).
- **Mistake scene:** none separate. "Copy the reactant's subscript into the product" (5; A1 crossed); "decomposition always gives elements" (8; A2 crossed); "a catalyst is a reactant" (9, one tag).
- **Handoff (route next: `chem-y11-m3-v03`, "How do solubility rules predict a precipitation reaction?").** Scene 15: in both patterns we predicted from what the substances are made of; some reactions start with two dissolved compounds that swap partners, and sometimes a solid appears from two clear solutions. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 2, key terms, "Products of synthesis ... e.g., Na + Cl₂ → NaCl": unbalanced. Suggest "2Na(s) + Cl₂(g) → 2NaCl(s)".
  2. Lesson 2, `l02-balancing-synthesis-and-decomposition-equati-title`, "When iron wool glows in a jar of oxygen gas ... a single red-brown solid (iron oxide, Fe₂O₃)" and its 4Fe + 3O₂ → 2Fe₂O₃ (also lesson 4's metal combustion table, "Glowing sparks in pure O₂"): iron burning in oxygen gives mainly black iron(II,III) oxide, Fe₃O₄ (3Fe + 2O₂ → Fe₃O₄); red-brown Fe₂O₃ is typical of slow rusting. Suggest "a black solid (mainly Fe₃O₄)" with that equation, or use magnesium as the synthesis example.
  - Checked and correct: worked example 1 (2Mg + O₂ → 2MgO), worked example 2 (CuCO₃ already balanced), drills 1 to 3 (2Fe + 3Cl₂ → 2FeCl₃; 2KClO₃ → 2KCl + 3O₂; 2SO₂ + O₂ → 2SO₃), Q2 (2H₂O₂ → 2H₂O + O₂), Q3 (2NH₄NO₃ → 2N₂ + O₂ + 4H₂O, 3.5 mol gas per mol), the controlled pathway NH₄NO₃ → N₂O + 2H₂O. The basic copper carbonate note is already logged from m2-v01.
- **Cause chain taught, in order:** (1) counting products tells the pattern (1, 2); (2) a metal and a non-metal combine as ions, so the product's formula is set by the charges, before any balancing (3, 5); (3) a diatomic gas brings atoms in pairs, so the coefficients must make each count match (4, 6); (4) a compound can only break into substances made of its own atoms (7); (5) the same compound family gives the same kind of products, so carbonates give an oxide and carbon dioxide (7, A2); (6) energy from heat or electricity breaks the compound up; a catalyst is not an energy source, it speeds the decomposition by giving it an alternative pathway and is not used up (8, 9; Revision 2, brief 182 finding 2); (7) a gas is identified by a test, not by guessing (7, 9).
- **Entry knowledge:** m1-v19 (ion charges; neutral formulae); m1-v20 (names and Stock numerals); m2-v01 (conservation, balancing by inspection, subscripts against coefficients, state symbols); m3-v01 (indicators; atoms rearranged, none lost).
- **Learner-visible vocabulary (plain meaning at first use):** synthesis (two or more substances combine into one product, 2); decomposition (one compound breaks down into two or more simpler substances, 2); diatomic (an element found as molecules of two atoms, 4); limewater (a dilute solution of calcium hydroxide that turns milky with carbon dioxide, 7); electrolysis (using an electric current to break down a compound, 8); catalyst (a substance that speeds up a reaction and is not used up, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **pattern counter** (scenes 1, 2: reactant and product boxes under each plate with a count "2 → 1" and "1 → 2"; they collapse into the two pattern strips "A + B → AB" and "AB → A + B"); **charge builder** (scenes 3, 5, A1: ion tiles with charge tags click together until the charge tally reads 0, then the formula writes; from m1-v19); **atom tiles and tally** (scenes 4, 6, 8, 9: m2-v01's coloured atom tiles under each formula and a left/right tally that turns green when equal; coefficient slots in front of formulas, subscripts locked with m2-v01's padlock glyph); **common-multiple ladder** (scene 6: "Cl: 2, 4, 6" and "Cl: 3, 6" counting up until both reach 6); **family card** (scene 7: "metal carbonate → metal oxide + carbon dioxide" with a slot for any metal); **gas-test chips** (scenes 7, 9: "CO₂: limewater turns milky", "O₂: glowing splint relights"); calculation-free; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v01):** atom tiles by element (metal grey-silver, oxygen red, chlorine green, carbon charcoal, hydrogen white, nitrogen blue, lithium pale violet); charges amber (+) and violet (−); coefficients teal; locked subscripts grey with the padlock; synthesis strip teal, decomposition strip amber; crossed items red strike.
- **Charge rule scope (Revision 2, brief 182 finding 3).** "Charges fix the formula" applies to the ionic products studied here (metal with non-metal: NaCl, FeCl₃, Li₃N), not to every synthesis product (SO₃ + H₂O → H₂SO₄ is covalent). The method card and charge builder carry a grey tag "for ionic products like these"; the memory card keeps its words with the same tag.
- **Board layout (Revision 2):** heading top left; pattern strips small at the top right from scene 2. Revision 1 kept plates in a column on the left third and equation lines in the centre throughout. Revision 2 stages, each under about 42 s: the two models filling the frame (1); the pattern strips at full width (2); the sodium and chlorine plates large beside the charge builder (3); the full-width balancing line (4); the prediction board (5); the coefficient stepper stage (6); the family card with the carbonate plates (7); the electrolysis line (8); the peroxide tube plates large beside the line (9); the method card (10).
- **Colour roles (Revision 2, fixed for the whole video):** atom tiles by element (as the Colour key); charges amber (+) and violet (−); coefficients teal; locked subscripts grey with the padlock; synthesis teal, decomposition amber; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; scope tags grey.
- **Type sizes (Revision 2, 1080p):** the current equation line at least 44 px (48 px); live tallies about 52 px; card lines 36 to 40 px; supporting lines 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the coefficient stepper (scene 6).** A live control on the core idea (coefficients, not subscripts, make the counts match): teal steppers in the slots before Fe, Cl₂ and FeCl₃; as the Cl₂ stepper climbs 1, 2, 3 and the FeCl₃ stepper 1, 2, the live tally (52 px) updates each time, Cl turning green only at 6 = 6, then the Fe stepper climbs to 2 and Fe turns green. The subscripts stay locked (padlock) throughout.

Author notes (not learner copy):
(a) Basic copper carbonate: the school reagent is CuCO₃·Cu(OH)₂ (logged in m2-v01, site note 2 there); CuCO₃ is the textbook model. Keep "copper carbonate" spoken and "CuCO₃" on screen, as m2-v01.
(b) Sodium and chlorine: a teacher demonstration in a fume cupboard (chlorine is toxic) or footage; the video shows only the formula work and a salt jar. Science check to confirm the tag wording.
(c) Hydrogen peroxide: school practicals use dilute solutions (about 3 to 6 per cent; the site says "dilute"); concentration not stated in learner copy. Manganese dioxide is a fine black powder; it is recovered unchanged (site Q2(c)). The glowing-splint test: a glowing (not flaming) splint relights in oxygen-enriched gas.
(d) Electrolysis of water: in practice an electrolyte is added (for example dilute sodium sulfate); hydrogen and oxygen collect in a 2 : 1 volume ratio. Not taught; the video shows only the equation and the energy source.
(e) Calcium carbonate: needs strong heating (above about 800 °C); copper carbonate decomposes on gentle heating. "Some carbonates need much stronger heating than others" is one grey tag in scene 7 (the trend links to m3-v07's reactivity; not explained).
(f) Lithium nitride: lithium is the only Group 1 metal that reacts directly with nitrogen at room temperature (slowly); A1 is a written question, not a practical. N³⁻ from Group 15 (m1-v19's pattern).
(g) Light as an energy source: silver chloride darkens in light (2AgCl → 2Ag + Cl₂, photodecomposition; m2-v15 author note d). One grey tag in scene 8, not spoken.
(h) Pronunciations: "iron three chloride" spoken for iron(III) chloride, as m1-v20; "F e C l three" spoken once; "N a C l" not spoken (say "sodium chloride"); "H two O two" spoken once as "hydrogen peroxide, H two O two"; "Li three N" spoken as "L i three N".

Main question: *How can we predict and balance synthesis and decomposition products?*
Entry knowledge: m1-v19, m1-v20, m2-v01, m3-v01.
Stops after: naming both patterns by counting products; predicting a metal plus non-metal product from charges; balancing two synthesis and two decomposition equations; three decomposition families with their energy sources; limewater and glowing-splint tests. No precipitation, combustion or acid reactions.
Handoff: chem-y11-m3-v03, solubility rules and precipitation.

## Opening frame and final frame

- **Opening frame:** m3-v01's final frame exactly (Decisions; reconciled to m3-v01 Revision 1, 5 November).
- **Final frame (m3-v03 opens on it):** left, two painted reagent bottles (`p03-dropper-bottle-v1.png` twice) with coded labels "silver nitrate solution" and "sodium chloride solution", each with a small "clear" tag; centre, `m5x-no-ppt-clear-v1.png` beside `m5x-ppt-agcl-white-v1.png` (same scale) joined by a pen arrow "mix"; under them the strip "AgNO₃(aq) + NaCl(aq) → ?"; the pattern strips "A + B → AB" (ticked) and "AB → A + B" (ticked) small at the top right, with a third strip "AB + CD → ?" (amber); the chip "Next: How do solubility rules predict a precipitation reaction?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: count what comes out
> Last time ended on two reactions. Magnesium burns in oxygen and makes one product, magnesium oxide. Calcium carbonate, heated strongly, breaks into two products, calcium oxide and carbon **dioxide**. Two into one, and one into two. Those two patterns have names, and once you can spot them, you can predict what a reaction will make before you even **try** it.

Visual: opens on m3-v01's final frame; the "Next" chip and the memory line fade; the two halves' plates and atom-tile models grow to fill the frame. On "magnesium oxide" the left half's atom-tile model replays its regrouping; on "dioxide" the right half's model replays its split. On "Two into one, and one into two" the amber chips rewrite as counters: "2 reactants → 1 product" and "1 reactant → 2 products" (teal and amber hand tags "count them"). On "try" the two plates shrink away and the models move up, ready to collapse into the pattern strips.

### 2. synthesis and decomposition
> When two or more substances combine into a single product, that's called **synthesis**. A plus B makes A B. When one compound breaks down into two or more simpler substances, that's **decomposition**. A B makes A plus B. So the test is a count. Many into one is synthesis, one into many is decomposition. And the reactants in a synthesis don't have to be elements. Sulfur trioxide and water combine to make sulfuric **acid**. One product, so that's synthesis too.

Visual: stage change: the two counters collapse into the pattern strips at full width (48 px). On "that's called synthesis" the teal strip "A + B → AB" writes with two tiles sliding together; gloss chip "synthesis: two or more substances combine into one product". On "that's decomposition" the amber strip "AB → A + B" writes with one tile splitting; gloss chip "decomposition: one compound breaks into two or more simpler substances". On "acid" a line writes under the teal strip: "SO₃(g) + H₂O(l) → H₂SO₄(aq)" with "2 → 1" and a tick (teal hand tag "compounds can combine too"); a chip "synthesis needs elements" fades in and is crossed in red (red hand tag "not always"). The strips shrink to the top right and stay.

### 3. predicting a synthesis product: charges first
> So how do you predict the product? Take sodium reacting with chlorine gas. A metal and a non-metal combine as ions, so use the charges from the ion charges video. Sodium forms plus one ions, and chloride ions are minus one. One of each makes the charges cancel, so the product is sodium **chloride**. Notice what we didn't do. We didn't look at the chlorine molecule to decide the formula. The charges decide it.

Visual: stage change: `y11c-sodium-cut-fresh-v1.png` and `y11c-gas-jar-v1.png` with a coded pale yellow-green fill (tag "chlorine gas, Cl₂") large at the left; grey tag "teacher demonstration in a fume cupboard, or footage". At the right, the charge builder: an amber tile "Na⁺" and a violet tile "Cl⁻" click together; tally "(+1) + (−1) = 0" (52 px; amber hand tag "charges cancel"). On "product is sodium chloride" the formula "NaCl" writes, framed, and `c1-salt-jar-crystals-v1.png` appears small beside it (tag "sodium chloride"); grey tag "charges: for ionic products like these". On "The charges decide it" the Cl₂ in the reactant strip dims with a tag "doesn't set the product's formula".

### 4. then balance it
> Now write the equation and count. Chlorine is diatomic, which means it comes as molecules of two atoms, so there are two chlorine atoms on the left and only one on the right. You can't change N a C l, so put a two in front of **it**. Now there are two sodium atoms on the right, so put a two in front of sodium as well. Two sodium and two chlorine on each **side**. That's the rule from the balancing video: change the big number in front, never the small number inside.

Visual: stage change: the balancing line at full width (48 px): "Na(s) + Cl₂(g) → NaCl(s)" with atom tiles under each formula (grey Na, green Cl) and the tally "left: 1 Na, 2 Cl | right: 1 Na, 1 Cl" (red mismatch on Cl; red pen ring). Gloss chip "diatomic: an element found as molecules of two atoms". The padlock glyph on NaCl's subscripts (from m2-v01; grey hand tag "locked"). On "in front of it" a teal "2" drops into the slot before NaCl; a second NaCl tile set appears; tally updates, Na now mismatched. On "on each side" a teal "2" drops before Na; tally "2 Na, 2 Cl | 2 Na, 2 Cl" turns green: "2Na(s) + Cl₂(g) → 2NaCl(s)", framed in a dark-ink box with a green tick.

### 5. prediction (countdown, 3 seconds)
> Quick prediction. Iron reacts with chlorine to make iron three chloride. Is the formula F e C l two, copying the two from chlorine, or something **else**?

Visual: plain board with the line "Fe + Cl₂ → iron(III) chloride". Two chips: "FeCl₂ (copy the 2 from Cl₂)" and "something else". On "else" the 3 s `Countdown` ring runs.

### 6. iron three chloride, and the common multiple
> Something else. The three in iron three chloride is the iron ion's charge, so iron is plus three, and each chloride is minus one. It takes three chlorides to cancel it, so the formula is F e C l **three**. Now balance. Chlorine comes in twos on the left and threes on the right. The smallest number both can make is six. So three chlorine molecules and two iron three chlorides, and then two iron atoms to **match**.

Visual: the chip "FeCl₂ (copy the 2 from Cl₂)" is crossed in red (red hand tag "the name gives the charge: Fe³⁺"). Charge builder: "Fe³⁺" plus three "Cl⁻" tiles; tally "(+3) + 3(−1) = 0"; on "F e C l three" "FeCl₃" writes, framed. Stage change to the coefficient stepper: line "Fe(s) + Cl₂(g) → FeCl₃(s)" at full width with tiles, teal steppers in the coefficient slots and the live tally (Cl 2 against 3). On "six" the steppers run (simulation): the Cl₂ stepper climbs 1, 2, 3 and the FeCl₃ stepper 1, 2 while the common-multiple ladder counts "Cl₂: 2, 4, 6" and "FeCl₃: 3, 6", meeting at 6 (teal hand tag "smallest both make: 6"); the tally's Cl turns green. On "match" the Fe stepper climbs to 2; tally "2 Fe, 6 Cl | 2 Fe, 6 Cl" turns green: "2Fe(s) + 3Cl₂(g) → 2FeCl₃(s)", framed in a dark-ink box with a green tick.

### 7. predicting decomposition: only what's already there
> Decomposition is easier to predict than it looks, because a compound can only break into substances made of its own atoms. And compounds in the same family break up the same way. Heat many metal carbonates, and you get the metal oxide and carbon dioxide. Copper carbonate gives copper oxide and carbon dioxide, already balanced. Bubble that gas through limewater, a dilute solution of calcium hydroxide, and it turns **milky**. That's the test for carbon dioxide.

Visual: the board clears to the family card "many metal carbonates (e.g. Cu, Ca, Zn) → metal oxide + carbon dioxide" with an empty metal slot, and a grey tag on the card: "not all: sodium and potassium carbonates don't decompose with school heating". Line "CuCO₃(s) → CuO(s) + CO₂(g)" with atom tiles (one Cu, one C, three O on each side; tally green at once, amber hand tag "already balanced"), framed; the copper tile slides into the family card's slot. At the left, large: the black-crucible plate, then `m6-limewater-clear-v1.png`; gloss chip "limewater: dilute calcium hydroxide solution". On "milky" it cross-fades to `m6-limewater-milky-v1.png`; gas-test chip "CO₂: limewater turns milky".

### 8. not always elements
> A common mistake is to think decomposition always breaks things into elements. Sometimes it does. Pass electricity through water, called electrolysis, and water splits into hydrogen and oxygen, two H two O making two H two and one O **two**. But calcium carbonate from the start gave two compounds, calcium oxide and carbon **dioxide**. Decomposition means one into several simpler substances. They don't have to be elements.

Visual: stage change: line "H₂O(l) → H₂(g) + O₂(g)" at full width with tiles, tally red on O (1 against 2); a teal "2" before H₂O, then "2" before H₂; on "one O two" the tally turns green: "2H₂O(l) → 2H₂(g) + O₂(g)", framed, with an energy tag "electricity" (lightning glyph) on the arrow; gloss chip "electrolysis: using an electric current to break down a compound" (amber hand tag "elements this time"). On "dioxide" the second line writes "CaCO₃(s) → CaO(s) + CO₂(g)" with tag "heat" on the arrow and the calcium tile dropped into the family card's slot (amber hand tag "two compounds"); a chip "decomposition always gives elements" fades in and is crossed in red (red hand tag "not always"). Grey tag (small, not spoken): "light can do it too: silver chloride darkens in sunlight".

### 9. hydrogen peroxide, and a glowing splint
> One more family member you'll see in class. Hydrogen peroxide, H two O two, slowly breaks down into water and oxygen. Add a pinch of black manganese dioxide and it fizzes straight away. Manganese dioxide is a catalyst, a substance that speeds up a reaction and isn't used up, so it goes over the arrow, not in the equation. Balance the oxygen with a two in front of hydrogen peroxide and water. Then hold a glowing splint in the gas, and it **relights**. That's the test for oxygen. In class this uses dilute hydrogen peroxide, small amounts, and safety **glasses**.

Visual: stage change: `y11c-h2o2-tube-splint-glowing-v1.png` large at the left (tube of colourless liquid with black powder and fine bubbles, a glowing splint at the mouth). Line "H₂O₂(aq) → H₂O(l) + O₂(g)" with "MnO₂" written small above the arrow; gloss chip "catalyst: speeds up a reaction and isn't used up" (grey hand tag "a faster route, not a reactant"); a chip "MnO₂ is a reactant" fades in and is crossed in red. Tiles and tally (O: 2 against 3); teal "2" before H₂O₂ and before H₂O; tally "4 H, 4 O | 4 H, 4 O" green: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)", framed. On "relights" the plate cross-fades to `y11c-h2o2-tube-splint-relit-v1.png`; gas-test chip "O₂: glowing splint relights" joins the CO₂ chip. On "glasses" a safety strip "dilute H₂O₂, small amounts, safety glasses, heat-resistant mat for heating" with `m5x-safety-glasses-v1.png` small.

### 10. the method in one line
> So here's the method for both patterns. Decide what forms. For a synthesis between a metal and a non-metal, the charges set the formula. For a decomposition, use the family, and remember the products can only contain the atoms you started with. Only then, balance with coefficients, and finish by counting every atom on both sides, because a balanced equation says no atom appeared or vanished. Charges fix the formula, coefficients fix the **count**.

Visual: a method card at full width writes line by line (40 px): "1. Pattern: count products (many → one, or one → many)." "2. Formula: charges (ionic synthesis products) or family (decomposition)." "3. Balance: coefficients only, check every atom." with a grey tag "charges: for ionic products like these" and the two gas-test chips under it. On "coefficients fix the count" the memory line writes large as a framed card in the handwriting style (dark-ink frame; amber "Charges", teal "Coefficients"): "Charges fix the formula. Coefficients fix the count."

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Lithium reacts with nitrogen gas to form a single product. Predict the product's formula, and write the balanced equation. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Lithium metal reacts with nitrogen gas to form a single ionic product. (a) Predict the formula of the product. (b) Write a balanced equation for the reaction, including states. (3 marks)" Small givens strip: "Li is in Group 1; N is in Group 15." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the method card hides).

### 12. feedback 1 (brief)
> Lithium is plus one, and nitrogen forms minus three ions, so it takes three lithiums: L i three N, lithium nitride. Nitrogen comes in pairs, so two lithium nitrides, then six lithium atoms. Six L i plus N two gives two L i three N. If you wrote L i N two, you copied the subscript from the nitrogen **molecule**.

Visual: card shrinks to the top. Charge builder: three "Li⁺" with one "N³⁻", tally "3(+1) + (−3) = 0", "Li₃N". Line "6Li(s) + N₂(g) → 2Li₃N(s)" with tally "6 Li, 2 N | 6 Li, 2 N" green, framed in a dark-ink box with a green tick. On "molecule" a chip "Li + N₂ → LiN₂" fades in and is crossed in red (red hand tag "charges set the formula"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Zinc carbonate is heated strongly. Write a balanced equation with states, and describe a test that identifies the gas. Pause here to answer.

Visual: `QuestionCard`: "A sample of zinc carbonate, ZnCO₃, is heated strongly in a test tube and a gas is given off. (a) Write a balanced equation for the decomposition, including states. (b) Describe a chemical test that would identify the gas and the expected result. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." The family card stays hidden.

### 14. feedback 2 (brief)
> It's a metal carbonate like copper's, so it gives the metal oxide and carbon dioxide. Z n C O three solid gives Z n O solid plus C O two gas, already balanced. Bubble the gas through limewater, and it turns milky. Breaking it into zinc, carbon and oxygen elements is wrong, because a carbonate decomposes into an oxide and carbon **dioxide**.

Visual: card shrinks. Family card returns with "Zn" in the slot; line "ZnCO₃(s) → ZnO(s) + CO₂(g)" with tally "1 Zn, 1 C, 3 O" both sides, green, framed in a dark-ink box with a green tick. `m6-limewater-milky-v1.png` small with the chip "CO₂: limewater turns milky". On "an oxide and carbon dioxide" a chip "ZnCO₃ → Zn + C + O₃" fades in and is crossed in red (red hand tag "carbonate → oxide + CO₂"). Hold about 1 second.

### 15. conclusion and handoff
> So, synthesis and decomposition are predictable because the products come from what the reactants are made of. Charges set the formula, families tell you how a compound breaks, and coefficients make the atoms match. But some reactions start with two dissolved compounds. Mix two clear solutions, silver nitrate and sodium chloride, and a white solid appears. Which pairs of solutions do this, and how could you know before you **mix**? How do solubility rules predict a precipitation reaction?

Visual: the pattern strips grow back to the centre, both ticked, with Fe and Cu equations ghosted beneath; on "two dissolved compounds" a third strip "AB + CD → ?" writes in amber. On "silver nitrate and sodium chloride" the final frame builds: two `p03-dropper-bottle-v1.png` with labels "silver nitrate solution" and "sodium chloride solution" (tags "clear"); `m5x-no-ppt-clear-v1.png` beside `m5x-ppt-agcl-white-v1.png` with a pen arrow "mix"; strip "AgNO₃(aq) + NaCl(aq) → ?". On "mix" the chip "Next: How do solubility rules predict a precipitation reaction?" writes. Hold about 2 seconds. This is the final frame (m3-v03 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Synthesis: many → one. Decomposition: one → many.
2. Ionic product: formula from charges, then balance.
3. Many metal carbonates → metal oxide + CO₂ on heating.
4. Products contain only the reactant's atoms.
5. CO₂ turns limewater milky; O₂ relights a glowing splint.

Memory aid (framed card, on the notes screen): *Charges fix the formula. Coefficients fix the count.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why counting names the pattern (1, 2); why charges, not the reactant molecule, set a synthesis product's formula (3, 6, A1); why coefficients are needed (4, 6); why decomposition products are limited to the reactant's atoms (7); why families repeat (7, A2); what drives each decomposition (8, 9); why a gas needs a test (7, 9).
- **Misconceptions addressed:** synthesis needs elements (2, crossed); copy the subscript from the reactant (5, 6, A1 crossed); decomposition always gives elements (8, A2 crossed); a catalyst is a reactant (9, crossed).
- **One idea at a time:** patterns (1, 2), synthesis formula (3), balancing it (4), harder synthesis (5, 6), decomposition rule and family (7), energy sources (8, 9), method (10).
- **Video makes it easier:** product counters collapse into the two pattern strips (1, 2); ion tiles click until the charge tally is zero (3, 6); atom tiles multiply as each coefficient drops in, and the tally turns green (4, 6, 8, 9); the common-multiple ladder meets at six (6); the family card's slot takes copper, calcium and zinc in turn (7, 8, 14); limewater and the splint change on screen (7, 9).
- **Response opportunity:** one 3 s prediction (5); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 23 s and 24 s.
- **Avoided double teaching:** balancing by inspection and the subscript rule (m2-v01, recalled through the padlock glyph); ion charges (m1-v19); Stock numerals (m1-v20); conservation of atoms (m3-v01).
- **Syllabus coverage:** `C3-IQ1-03` "predict and identify the products" for "synthesis" and "decomposition" (3 to 9, with two gas tests); `C3-IQ1-05` "construct balanced equations" (4, 6, 8, 9, A1, A2); `C3-IQ1-02` "rearrangement" and "conservation of atoms" (atom tiles and tallies in 4, 6, 8, 9).
- **Out of scope by design:** precipitation, combustion, acid reactions, ammonium nitrate, the hydrogen pop test, catalyst mechanism.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Li forms Li⁺ and N forms N³⁻, so three Li⁺ balance one N³⁻: Li₃N (1 mark). (b) 6Li(s) + N₂(g) → 2Li₃N(s) (1 mark for correct balancing, 1 mark for states). Classic mistake (crossed): "Li + N₂ → LiN₂" (subscript copied from N₂).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) ZnCO₃(s) → ZnO(s) + CO₂(g) (1 mark for products, 1 mark for states and balance). (b) Bubble the gas through limewater; it turns milky (cloudy), showing carbon dioxide (1 mark). Classic mistake (crossed): "ZnCO₃ → Zn + C + O₃" (decomposition into elements).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | Mg + O₂ → MgO (2 → 1); CuCO₃ → CuO + CO₂ (1 → 2) | 1 |
| Synthesis from compounds | SO₃ + H₂O → H₂SO₄ (S 1, O 4, H 2 each side) | 2 |
| Sodium chloride | (+1) + (−1) = 0; 2Na + Cl₂ → 2NaCl (2 Na, 2 Cl) | 3, 4 |
| Iron(III) chloride | (+3) + 3(−1) = 0; common multiple of 2 and 3 is 6; 2Fe + 3Cl₂ → 2FeCl₃ (2 Fe, 6 Cl) | 5, 6 |
| Carbonates | CuCO₃ → CuO + CO₂; CaCO₃ → CaO + CO₂ (1 metal, 1 C, 3 O) | 7, 8 |
| Water | 2H₂O → 2H₂ + O₂ (4 H, 2 O) | 8 |
| Hydrogen peroxide | 2H₂O₂ → 2H₂O + O₂ (4 H, 4 O) | 9 |
| A1 | 3(+1) + (−3) = 0; 6Li + N₂ → 2Li₃N (6 Li, 2 N) | 11, 12 |
| A2 | ZnCO₃ → ZnO + CO₂ (1 Zn, 1 C, 3 O) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked by an atom-and-charge counting script (5 November); Codex to re-check.

- 2Na + Cl₂ → 2NaCl; 2Fe + 3Cl₂ → 2FeCl₃; SO₃ + H₂O → H₂SO₄; CuCO₃ → CuO + CO₂; CaCO₃ → CaO + CO₂; 2H₂O → 2H₂ + O₂; 2H₂O₂ → 2H₂O + O₂; 6Li + N₂ → 2Li₃N; ZnCO₃ → ZnO + CO₂; Ca(OH)₂ + CO₂ → CaCO₃ + H₂O (limewater, author only); 2AgCl → 2Ag + Cl₂ (tag, author only). All balanced.

## Memory aid check

- **"Charges fix the formula. Coefficients fix the count."** Written for this video, extending m2-v01's "Change the big number in front, never the small number inside." Meaning: decide the product's formula from ion charges (or the decomposition family) before balancing, then use only coefficients. Assumptions checked: "charges" applies to ionic products (a metal with a non-metal); for covalent products such as SO₃ + H₂O → H₂SO₄ the formula is given, and the scene says the product is known. The line does not claim charges predict every formula; the method card (scene 10) says "charges (synthesis) or family (decomposition)". It helps a new case: A1 (Li₃N), and m3-v04's metal oxides (MgO, not MgO₂).
- **Considered, not used:** the site's ammonium nitrate "same reactant, different conditions" idea (out of scope); "many to one, one to many" is kept as plain wording in the method card, not a separate aid.

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,627 characters**, 16 scenes (Revision 1: 5,609). Revision 2 adds about 2 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 422 s; add about 4 s of settling (tiles and tallies in 4, 6), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 508 s** (Revision 1: about 505 s).

## Scene list and build ids

Lesson key `c-y11-m3-v02` (route chem-y11-m3-v02; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v02`.

In order (16 scene headings, all `### N.`): hook-count, two-patterns, synthesis-charges, balance-nacl, prediction, iron-chloride, decomposition-family, not-elements, peroxide-splint, method, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m3-v01's final frame into scene 1 by camera continue (the model shrinks off; plates slide in); 1 to 2 camera continue (counters collapse into the strips); 2 to 3 to 4 camera continue; 4 to 5 board clear; 5 to 6 camera continue; 6 to 7 board clear (strips stay); 7 to 8 to 9 camera continue (the family card stays); 9 to 10 camera continue (chips gather under the method card); attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v02-learning-review.md`, `checks/c-y11-m3-v02-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 250 px; scaled uniformly only, never stretched):
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (2000 × 2000) and `m5-g02b-open-crucible-v1.png` (1280 × 1920): opening frame and scene 1 (m3-v01's final frame).
- `public/assets/chemistry/y11c-sodium-cut-fresh-v1.png`: scene 3 (sodium as a sample; no reaction drawn).
- `public/assets/chemistry/y11c-gas-jar-v1.png` (935 × 1682; coded pale yellow-green fill for chlorine): scene 3.
- `public/assets/chemistry/c1-salt-jar-crystals-v1.png`: scene 3.
- `public/assets/chemistry/m6-limewater-clear-v1.png` and `m6-limewater-milky-v1.png` (2000 × 2000, aligned pair; delivery tube into limewater in a rack): scenes 7, 14.
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scene 9 strip.
- `public/assets/chemistry/p03-dropper-bottle-v1.png` (twice), `m5x-no-ppt-clear-v1.png`, `m5x-ppt-agcl-white-v1.png` (2000 × 2000, the aligned m5x rack set): scene 15 and the final frame.
- Requested in `chem-y11-m2-v01.md` (not yet painted): `y11c-cuco3-crucible-green-v1.png`, `y11c-cuco3-crucible-green-lit-v1.png`, `y11c-cuco3-crucible-black-lit-v1.png`: scene 7 (the black crucible only). If m2-v01's set is not painted when this video is built, it waits for it; fallback `m5-g02b-open-crucible-v1.png` with a coded green then black powder fill.
- **Inspected, not used:** `y11c-iron-sulfur-mixture-v1.png` and `y11c-iron-sulfur-residue-v1.png` (Module 1 mixture separation; heating iron with sulfur gives sulfur dioxide and is not shown here); `m6-splint-pop-v1.png` (the lit-splint pop test for hydrogen belongs to m3-v07; used here only as the source plate for the new pair); `c4b-metal-catalyst-v1.png` (a crumpled metal catalyst, not manganese dioxide powder). `c1-burned-magnesium-v1.png` is not needed (m3-v01's frame shows the ribbon and the model).

Need (new plates, Codex):
1. `y11c-h2o2-tube-splint-glowing-v1.png` and 2. `y11c-h2o2-tube-splint-relit-v1.png`: scene 9. Essential (the oxygen test is the observation that identifies the product; a coded splint would be clip art). Edits of `m6-splint-pop-v1.png`.

Coded: pattern counters and strips, charge tiles and tallies, atom tiles, coefficient slots and padlock glyph, common-multiple ladder, family card, gas-test chips, gas wisp, lightning glyph, method card, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v02)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m3-v02.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-h2o2-tube-splint-glowing-v1.png` (2000 × 2000 px, the canvas of `m6-splint-pop-v1.png`): **edit of that plate**, identical in clamp, stand, tube position and splint angle, except: the tube is about one third full of colourless liquid with a small layer of fine black powder (manganese dioxide) at the bottom and many fine bubbles rising through the liquid; the splint has **no flame**, only a small glowing orange-red ember at its tip, held just inside the tube mouth.
2. `y11c-h2o2-tube-splint-relit-v1.png` (same canvas): plate 1 identical except the splint tip carries a small bright yellow flame (copy the flame of `m6-splint-pop-v1.png`, the same size or slightly larger).

Plates 1 and 2 must overlay exactly (only the splint tip changes). Report the overlay check on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m3-v02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every equation under "Numbers to verify" by atom count, and every equation in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson02.sa.html` (the two patterns; misconceptions 1 and 2; drill 1's 2Fe + 3Cl₂ → 2FeCl₃; Q2's 2H₂O₂ → 2H₂O + O₂ and the catalyst answer; the safety box).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the syllabus quotes match `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals m3-v01's final frame (Revision 1), and send the final frame to the m3-v03 designer.

## YouTube metadata (draft)

Title: Synthesis and Decomposition Reactions: Predicting Products | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Count the products: many into one is synthesis, one into many is decomposition. Learn to predict a synthesis product from ion charges before you balance (why iron(III) chloride is FeCl₃, not FeCl₂), why a decomposition can only release atoms the compound already holds, and how metal carbonates, water and hydrogen peroxide break down. Includes the limewater test for carbon dioxide and the glowing splint test for oxygen, and two exam-style questions.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"use modelling to demonstrate: the rearrangement of atoms to form new substances; the conservation of atoms in a chemical reaction (ACSCH042, ACSCH080)"
"conduct investigations to predict and identify the products of a range of reactions, for example: synthesis, decomposition, combustion, precipitation, acid/base reactions, acid/carbonate reactions (ACSCH042, ACSCH080)"
"construct balanced equations to represent chemical reactions"

Previous: Which observations are evidence that new substances formed? Next: How do solubility rules predict a precipitation reaction?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Opening frame (root).** Reconciled to m3-v01 Revision 1's final frame (read 5 November). If m3-v01's final frame changes in its review, only scene 1 changes.
- **2. Sodium and chlorine (science check).** Scene 3 uses the site's sodium chloride example as a formula exercise with a "teacher demonstration in a fume cupboard, or footage" tag. Confirm the tag, or switch to magnesium and chlorine (MgCl₂) if the science check prefers no chlorine at all.
- **3. Hydrogen peroxide plates (root).** The new aligned pair is requested as essential; if the owner declines, the oxygen test becomes a gas-test chip only and scene 9's last two sentences change.
- **4. Common-multiple step (learning review).** Scene 6 replaces the site's trial-and-error steps with the common multiple of 2 and 3; confirm this is followable at speed.

## Review notes

- Revision 1 was reviewed by brief 182 (0 blockers, 4 should fix, 0 optional); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (is scene 3's "the charges decide it" clear without a second example; is scene 9 too long for one reasoning stage), then the science check and Codex error check.
- Checker output (5 November): narration 5,609 characters; per scene (1 to 16): 352, 451, 408, 462, 150, 408, 455, 417, 558, 447, 155, 308, 150, 324, 489, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 5,627 characters (sum of scene strings); per scene (1 to 16): 352, 451, 408, 462, 150, 408, 459, 417, 558, 447, 155, 308, 150, 338, 489, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 182 findings (`checks/c-y11-m3-v02-learning-review.md`, `checks/c-y11-m3-v02-science-check.md`):
1. Limits of carbonate prediction (should fix): scene 7 says "Heat many metal carbonates" (was "a metal carbonate"); the family card reads "many metal carbonates (e.g. Cu, Ca, Zn)" with a grey tag "not all: sodium and potassium carbonates don't decompose with school heating" (RSC class experiment); scene 14 says "a metal carbonate like copper's"; key note 3 says "Many metal carbonates".
2. Catalyst and energy (should fix): the author cause chain item (6) now says a catalyst gives an alternative pathway and is not an energy source; scene 9's narration is unchanged, and its Visual gains a grey tag "a faster route, not a reactant".
3. Ionic formula rule (should fix): the charge builder and method card carry a grey tag "charges: for ionic products like these"; the method card line reads "charges (ionic synthesis products)". A Decisions item records the scope.
4. Metadata length (should fix): the title is now "Synthesis and Decomposition Reactions: Predicting Products | Year 11 Chemistry Module 3" (87 characters).

Visual upgrade (scene-level visual changes; teaching logic unchanged):
- Scene 1: m3-v01's two plates and models fill the frame in the first 20 s.
- Stages change in every teaching scene (pattern strips, sodium and chlorine plates with the charge builder, full-width balancing, coefficient stepper, family card with large carbonate plates, electrolysis, peroxide tube plates, method card); no stage longer than about 42 s.
- Live control: the coefficient stepper (scene 6) steps the coefficients while a live tally turns each element green, with the subscripts locked.
- Framed answers with a green tick: NaCl (3), 2Na + Cl₂ → 2NaCl (4), FeCl₃ and 2Fe + 3Cl₂ → 2FeCl₃ (6), the CuCO₃, water and peroxide equations (7 to 9), 6Li + N₂ → 2Li₃N (12), ZnCO₃ → ZnO + CO₂ (14). Crossed slips carry red hand tags.
- Hand tags and pen marks in role colours in every teaching scene (1 to 10).
- Memory line as a framed card (scene 10 and the notes screen); key notes cut to five short bullets.
- Decisions gain "Charge rule scope", "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- No new plate requests.

Counts: 5,627 characters (Revision 1: 5,609); about 505 to about 508 s.
