# Year 11 Chemistry M1 V07: Percentage composition from a formula. Why does a chemical formula fix the percentage by mass of each element? (design)

Status: Revision 4 (12 Nov 2026): visual upgrade to maths-visual-standard.md, visuals only. Narration unchanged, so the brief 236 voicing is not affected. Needs a Codex error check of the visual plan before plates and build. Previously Revision 3 (7 Nov 2026): brief 186 error check clean, headline restated as the sum of scene strings, ready to voice.

Narration 6,093 characters (sum of scene strings; 6,108 with joining spaces; Revision 1 was 6,108 by the joined parser count), 16 scenes, about 547 s (9.1 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: seventh video of Year 11 Chemistry (2017 syllabus), Module 1. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief); chemistry conventions `chem-m5-g02.md`. Pre-design pack: `../pre-design/chem-y11/chem-y11-m1-v07.md` (every number recalculated below). Route entry: `chem-y11-m1-v07` in `../../programme/chem-y11-route-inputs.json`. Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson05.sa.html` (SHA256 `c8b8b3adf2bc76e424505bb6e88bafecc0cd7fa9784e57dd9400175521a4222d`, recomputed, matches the route), section `l05-percentage-composition-by-mass-title` and its quick check, short answer Q9 and drill; the rest of the page (gravimetric analysis, technique choice) belongs to v06 and Module 2. Site corrections: none of the logged items touches this section; one new precision note below.

Owner rules applied: as v06 (one learner question; no people, hands or faces; real objects as painted plates, formulae, particles and bars coded; one reasoning stage at a time with task strip, equation strip and grouped givens; 3 s prediction countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration; earlier videos recalled, not re-taught; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ1-01`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "explore homogeneous mixtures and heterogeneous mixtures through practical investigations:"
  - "calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on v06's final frame (salt is a compound; can the formula alone give its percentages?). Teaches why a fixed formula ratio makes one formula a fair sample of the whole substance; relative atomic mass as a given comparison number (one sentence, no units); relative formula mass; percentage of an element from count × relative atomic mass ÷ relative formula mass; counting every atom (NH4NO3); hydrates and water of crystallisation (CuSO4·5H2O) and the matching mass loss on heating. Uses the site's CO2, NH4NO3 and CuSO4·5H2O values exactly. Stops before empirical formulae and before the mole (no g mol⁻¹). Not taught: why relative atomic masses are not whole numbers (v09, named once); nuclide notation (v08, the handoff); ionic formulae from charges (v19).

## Decisions

- **Learner question (route wording made causal; open decision 1).** Route: "How does a chemical formula determine percentage composition by mass?" Proposed: "Why does a chemical formula fix the percentage by mass of each element?" The answer, in order: a compound has a fixed ratio of atoms, so one formula is a fair sample of the whole (2); atoms have different masses, compared by relative atomic mass (3); so count atoms, weigh them by relative atomic mass, and take the element's share of the total (4 to 6); count every atom, including a second group and a hydrate's waters (7, 8); the hydrate percentage is the mass you can drive off (9).
- **Opening frame (equals v06's final frame).** Salt jar `c1-salt-jar-crystals-v1.png` centre, "NaCl" with the tag "compound: fixed ratio", a crossed filter-funnel icon "can't filter a compound apart", the chip "Na: ? %  Cl: ? %  from the formula alone?", and the 20.00 g bar small at the top with "salt 70.0%". The salt question is left open and returns as attempt 1, so the hook pays off.
- **Why the formula is enough (pack and site, made causal).** The site says "no experiment is required, only the compound's formula". The video says why: every carbon dioxide molecule has the same atoms, so the mass fraction of one molecule equals the mass fraction of any sample. Analogy: a carton of identical snack packs (fraction of nuts in one pack equals the fraction in the carton). Assumptions checked: the packs are identical, as the molecules are; the analogy is not extended to ionic lattices beyond "the ratio is fixed" (author note a).
- **Relative atomic mass without the mole (pack; site precision note).** The site writes "g mol⁻¹" throughout this card, but the mole arrives in Module 2. The video uses relative atomic mass and relative formula mass as unitless comparison numbers, defined in one sentence, with "a later video explains why many aren't whole numbers" (v09). The site's numbers are unchanged.
- **The mass bar (new coded visual, continuous with v06's accounting bar).** Each formula is drawn as a row of atom tiles whose widths are proportional to relative atomic mass (normalised so every formula fills the same 640 px bar; author note c). The selected element's tiles turn amber; the percentage is literally their share of the bar. A second row of equal-width tiles (atom count) sits above it in the prediction answer, so "two thirds of the atoms" and "72.7% of the mass" are visibly different lengths.
- **In-teaching prediction (3 s countdown, scenes 4 and 5).** "Two of the three atoms are oxygen: is carbon dioxide two thirds oxygen by mass?" Answer: more (72.7%), because each oxygen atom is heavier than the carbon atom. This is the pack's misconception ("formula subscripts are not mass percentages") made into a test.
- **Site walkthroughs used exactly:** CO2 (44.0; 32.0; 72.7%); NH4NO3 (14.0 + 4 × 1.0 + 14.0 + 3 × 16.0 = 80.0; N 28.0; 35.0%); CuSO4·5H2O (63.5 + 32.1 + 64.0 + 90.0 = 249.6; water 90.0; 36.1%). Values are given as on the site, to one decimal place; results to three significant figures.
- **Counting every atom (site "common trap").** The site says missing the ammonium nitrogen is "the single most common error"; the pack notes we have no frequency data, so the narration calls it "a classic slip", not the most common. The two nitrogens are shown in their own groups (NH₄⁺ and NO₃⁻ on screen; narration says "two parts", since ions are named but not taught until v19 and v21).
- **Hydrate meaning and evidence (site sentence, made visible).** The dot is explained as "for every copper sulfate unit, five water molecules in the crystal", and the five waters stay as one tinted group in the bar. The site's line "heating a hydrate ... causes a measurable mass loss, exactly this percentage" is kept with its condition spoken: "if all the water leaves". Scene 9 links back to v06: lost mass was an error there, here it is the measurement. Gentle heating only (author note b).
- **Memory aid (new; see "Memory aid check"):** "Count every atom, then it's part over whole."
- **Attempts (original wording, HSC style).** A1: chlorine in sodium chloride (Na 23.0, Cl 35.5), closing the hook; 60.7%; crossed "50%" (one of two atoms). A2: water in MgSO4·7H2O (pack candidate 2: Mg 24.3, S 32.1, O 16.0, H 1.0); 51.1%; crossed "13.0%" (one water). The pack's CaCO3 candidate and the site's MgO quick check (39.7%) and (NH4)2SO4 Q9 (21.2%) are not used in the video; (NH4)2SO4 is suggested for the site practice set only.
- **Mistake scene:** none separate. "Atom fraction equals mass fraction" (4, 5; crossed in A1 feedback); "count the element once" (7, 50% in A1, one water in A2); "the dot means multiply the whole formula" (8, the five waters drawn as their own group).
- **Handoff (route next).** Scene 15: the relative atomic masses came as given numbers, but they come from what is inside the atom; the final frame writes chlorine in nuclide notation with "?" at 35 and 17 (v08: "How does nuclide notation tell us the particles in an atom or ion?").
- **Site notes (quoted from `l05-percentage-composition-by-mass-title`, read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. "M(CO₂) = 12.0 + (2 × 16.0) = 44.0 g mol⁻¹" (and every "g mol⁻¹" in the card): Module 1 has not introduced the mole; the same page's gravimetric card says so. Suggest "relative formula mass Mr(CO₂) = 44.0 (no units; molar mass in g mol⁻¹ comes in Module 2)".
  2. "this is the single most common error in percentage composition questions": an unsupported frequency claim. Suggest "a common slip".
  3. "causes a measurable mass loss, exactly this percentage": true only if all the water of crystallisation is driven off without decomposing the anhydrous salt. Suggest "if all the water is driven off".
  - Checked and correct: all three walkthroughs; MgO quick check 16.0 ÷ 40.3 = 39.7%; Q9 (NH4)2SO4: 2 × 18.0 + 32.1 + 64.0 = 132.1, N 28.0, 21.2%.
- **Cause chain taught, in order:** (1) a compound can't be separated physically, but its ratio is fixed (1); (2) so one formula is a fair sample (2); (3) atoms differ in mass, compared by relative atomic mass (3); (4) atom count is not mass share (4, 5); (5) the method: count, multiply, add, divide (6); (6) count every atom (7); (7) hydrates keep waters as a group, and the water percentage is the mass that heating removes (8, 9).
- **Entry knowledge:** Stage 5 simple formulae and proportions; v01 (compound: elements bonded in a fixed ratio), v06 (percentage by mass as part over whole).
- **Learner-visible vocabulary:** relative atomic mass (an atom's mass compared on one scale, carbon 12.0; no units, 3); relative formula mass (all the relative atomic masses in a formula added up, 5); water of crystallisation (water molecules built into a crystal, 8); hydrate (a crystal containing water of crystallisation, 8); anhydrous (without water, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **formula tiles** (each symbol in a formula expands into a row of atom tiles; subscripts and the hydrate coefficient multiply tiles visibly); **mass bar** (tile widths ∝ relative atomic mass; selected element amber; percentage label at its share); **count bar** (equal-width tiles, scene 5 only); **particle model** (scene 2: a coded CO2 molecule, carbon dark grey, oxygen red, multiplying into a field of identical molecules); **calculation layout** (task strip, equation strip, givens group, working rows); **heating cross-fade** (scene 9: blue crystals to white powder in the crucible, coded steam, a coded readout falling); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; formula and its bars across the upper middle; working rows and givens in the right column; plates at the left when used.

Author notes (not learner copy):
(a) "One formula is a fair sample": for molecular substances, every molecule is identical in composition; for ionic substances (NaCl, NH4NO3, hydrates), the formula gives the fixed ratio of ions in the lattice. Isotopic variation is averaged by using relative atomic masses (v09). No claim is made that every particle has identical mass.
(b) Copper(II) sulfate pentahydrate loses its water on gentle heating (stepwise, to about 250 °C) to give white anhydrous CuSO4; much stronger heating decomposes CuSO4 (to CuO and sulfur oxides). Scene 9 says "heat the blue crystals" and shows a low flame; the condition "if all the water leaves" is spoken. The white residue is "anhydrous copper sulfate", shown as white to very pale grey.
(c) Bar scale: each formula's bar is 640 px wide. CO2: 44.0 → C 174.5 px, each O 232.7 px. NH4NO3: 80.0 → each N 112 px, each H 8 px, each O 128 px. CuSO4·5H2O: 249.6 → water group 230.8 px (36.1%). The tiles for H are narrow; label H tiles as a group ("4 H") rather than singly.
(d) Pronunciations: "C O two" is not spoken; narration says "carbon dioxide". "N H four N O three" and "C u S O four, dot, five H two O" are spoken once each so students hear how the formula is read; "relative formula mass"; "heptahydrate" (HEP-tuh-HY-drate); "pentahydrate".
(e) Results to three significant figures from one-decimal data: 72.7, 35.0, 36.1, 60.7, 51.1.

Main question: *Why does a chemical formula fix the percentage by mass of each element?*
Entry knowledge: Stage 5 formulae and proportions; v01 (compounds); v06 (percentage by mass).
Stops after: fixed ratio, relative atomic and formula mass, element and water percentages, counting every atom, hydrate mass loss. No moles, empirical formulae or nuclide notation.
Handoff: v08, nuclide notation.

## Visual upgrade (Revision 4)

Each scene below keeps its Visual line and gains an "Upgrade (Revision 4)" paragraph. The Upgrade paragraph adds to the Visual and wins wherever the two differ. No narration line changed.

- **Anchor.** The painted jar of salt (`c1-salt-jar-crystals-v1.png`, about 420 px) is on screen from the first frame, because the video opens on v06's final frame. It is parked as "your turn later", returns on the attempt 1 card and is answered in feedback 1. The second real object is the crucible of blue copper sulfate crystals (`y11c-cuso4-crucible-blue-v1.png`), whose mass loss shows the calculated percentage.
- **Simulation: the live mass bar.** The mass bar is computed, not drawn by hand: each tile's width is its relative atomic mass, and three readouts (52 px) read the same data as tiles land: "share", "Mr" and "%". In scene 5 a selector steps from carbon to oxygen and the "%" readout moves 27.3% → 72.7%. In scene 9 the heating runs on one clock: the balance readout falls 2.50 g → 1.60 g while the water tiles lift off the bar and a "% of starting mass" readout falls 100% → 63.9%.
- **Colour key (fixed for the whole video).** The selected element's tiles and every percentage amber; other tiles in their element colours with an ink outline; the water group pale blue; givens navy; a framed answer green with a green tick; a crossed mistake red with a red hand tag. Hand tags take the colour of the idea they mark. Earlier rows stay solid at a smaller size instead of dimming, and every tag the Visual lines call "grey" or "ghost" is dark ink at full strength.
- **Type sizes (1080p).** Heading 60 px; the formula 72 px; the current working row, readouts and framed answers 52 px, never under 44; question-card sentences 38 px; givens and tile labels 34 px; supporting lines 30 px or more; hand tags 42 px; key notes 34 px; nothing a student must read under 26 px.
- **Board stages and cuts.** (A) the salt jar, scene 1 (about 37 s); (B) the molecule field, then the carton, scene 2 (about 31 s); (C) the comparison balance, scene 3 (about 36 s); (D) count bar and mass bar for CO₂, scenes 4 to 6 (about 85 s, with the calculation board arriving at scene 5); (E) ammonium nitrate, scene 7 (about 50 s); (F) the blue crystals and the hydrate working, scene 8 (about 58 s); (G) heating stage, scene 9 (about 33 s): the crucible large at the centre over the balance readout; (H) the three bars and the memory card, scene 10 (about 17 s); question and feedback cards; the handoff; the notes board. Scene 9 is a new stage so the crucible board does not run about 91 s unchanged.
- **Question cards.** Each attempt card arrives whole (38 px) with a picture from its first frame and nothing answer-bearing. Each feedback scene keeps a navy givens strip, frames the answer in green and crosses one classic mistake in red.
- **No coded pictures of real things.** The coded carton of snack packs (scene 2) becomes a painted plate (requested below, with a plain-tile fallback); on-screen tags never show a video number.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v06): percentages and the selected element's tiles amber; other atom tiles in element colours with an ink outline (carbon dark grey, oxygen red, nitrogen blue, hydrogen white, copper copper-brown, sulfur yellow, magnesium pale green, sodium violet, chlorine green), water groups as a pale blue tint around their tiles; givens navy; earlier rows dimmed; crossed chips red strike. Screen notation: subscripts (CO₂, NH₄NO₃), the hydrate dot (CuSO₄·5H₂O), Ar and Mr written "relative atomic mass" and "relative formula mass" in full on first use, then "Ar" and "Mr" in rows.

### 1. hook: you can't filter a compound
> Last time, we found our mixture was seventy percent salt, by separating it and weighing the parts. But salt itself is a compound. Its sodium and chlorine are bonded in a fixed ratio, one sodium for every chlorine, so no filter can split **them**. Here's the surprise. Because that ratio is fixed, you don't need to split it. The formula alone tells you what percentage of the mass comes from each **element**. We'll build the method on carbon dioxide, and then you'll use it on salt **yourself**.

Visual: opens on v06's final frame (Decisions). On "them" the crossed filter icon pulses and the tag "compound: fixed ratio" gains "1 Na : 1 Cl". On "element" the formula "NaCl" splits into two tiles (sodium violet, chlorine green, widths not yet meaningful, equal and dashed) with "? %" under each; the heading writes on: "Percentage composition from a formula". On "yourself" the salt jar and its tiles shrink to a small parked card at the top right labelled "your turn later", and the formula "CO₂" writes large at the centre.

Upgrade (Revision 4): The salt jar is about 420 px and solid from the first frame; the funnel beside "NaCl" is the small painted filter plate, as in v06's final frame. On "one sodium for every chlorine" a navy hand tag "1 : 1, always" writes beside the tag with a pen underline. On "you don't need to split it" an amber hand tag "read it off the formula" writes with a pen arrow to "NaCl". The two "? %" marks are 52 px in amber. The parked card label "your turn later" is dark ink at 30 px.

### 2. why the formula is enough
> Here's why the formula is enough. Every carbon dioxide molecule is the same: one carbon atom and two oxygen **atoms**. So whatever fraction of one molecule's mass is oxygen, a billion molecules have exactly the same **fraction**. One molecule is a fair sample of the whole substance. It's like a carton of identical snack packs. Find what fraction of one pack is nuts, and you know the fraction for the whole **carton**.

Visual: the formula "CO₂" expands into a coded particle model: one dark grey carbon sphere between two red oxygen spheres, with `PenArrow` labels "1 C" and "2 O" on "atoms". On "fraction" the molecule copies outward into a field of identical molecules filling the stage (fast multiply, about 1 s), and the small `c1-sparkling-bottle-sealed-v1.png` plate appears at the corner with a grey tag "the gas in a soft drink: carbon dioxide". On "carton" the field gives way to a simple coded carton outline holding a grid of identical snack packs (plain rounded rectangles, each with the same two coloured fills), one pack magnified with a tag "same fraction in every pack". The chip "one formula = a fair sample" writes beside it.

Upgrade (Revision 4): The formula "CO₂" is 72 px and the bottle plate (about 300 px tall) is on the board from the first frame of the scene, tagged in dark ink. On "one carbon atom and two oxygen atoms" the two labels are pen arrows. On "exactly the same fraction" an amber hand tag "same in every molecule" writes over the field with a pen ring round one molecule. On "a carton of identical snack packs" the painted carton (`y11c-snack-pack-carton-v1.png`, new, about 520 px wide) replaces the coded carton, with one pack ringed by a pen ring and an amber hand tag "one pack tells you the carton". The chip "one formula = a fair sample" is 44 px.

### 3. relative atomic mass, in one sentence
> To find those fractions, we need to know how heavy each kind of atom is. Atoms are far too light to weigh one at a time, so chemists compare them on one scale, called relative atomic **mass**. On that scale, a carbon atom is twelve point zero and an oxygen atom is sixteen point **zero**. They're just comparison numbers, with no units, and you'll find them on the periodic table or in the question. A later video explains why many of them aren't whole **numbers**.

Visual: board returns to the CO₂ molecule at the left. On "mass" a coded beam balance outline draws (abstract, a line and two pans) with one carbon sphere on the left pan; the heading tag "relative atomic mass (Ar): atoms compared on one scale". On "zero" (second) an oxygen sphere sits on the right pan and the beam tips down on that side; readouts "C 12.0" and "O 16.0" write under the pans. On the fourth sentence a small coded periodic table cell for carbon draws (symbol and "12.0" only), with the tag "no units". On "numbers" a small grey chip "why decimals? video 9" writes and fades to the corner.

Upgrade (Revision 4): The CO₂ molecule (about 300 px wide) and the abstract beam balance are on the board from the first frame. The readouts "C 12.0" and "O 16.0" are 52 px. On "compare them on one scale" an ink hand tag "compared, not weighed" writes above the beam. On "They're just comparison numbers, with no units" an ink hand tag "no units" writes with a pen underline under both readouts. On "numbers" the chip reads "why decimals? a later video" in dark ink at 30 px, with no video number.

### 4. prediction (countdown, 3 seconds)
> Quick prediction. Two of the three atoms in carbon dioxide are oxygen. So is carbon dioxide two thirds oxygen by mass, about sixty-seven percent? Or more, or less? Have a **think**.

Visual: the CO₂ molecule at the top; below it the count bar: three equal tiles (one grey, two red), the two red tiles bracketed "2 of 3 atoms = 66.7%". The question writes as a chip: "oxygen by mass: 66.7%, more, or less?". On "think" the 3 s `Countdown` ring runs. No mass bar yet.

Upgrade (Revision 4): The molecule and the count bar are on the board from the first frame; the bracket "2 of 3 atoms = 66.7%" and the question chip are 44 px. No hand tags (thinking time).

### 5. carbon dioxide, worked
> It's more, and here's why. Add up the whole molecule: one carbon at twelve point zero, plus two oxygens at sixteen point zero each. That's forty-four point zero, the relative formula **mass**. The oxygen's share is two times sixteen point zero, which is thirty-two point **zero**. So oxygen is thirty-two point zero over forty-four point zero, times a hundred, which is seventy-two point seven **percent**. That's more than two thirds, because each oxygen atom is heavier than the carbon **atom**. Counting atoms isn't the same as weighing **them**.

Visual: calculation layout. Task strip: "Find the percentage by mass of oxygen in CO₂". Givens (navy): "C 12.0; O 16.0". On "mass" (first) row "Mr(CO₂) = 12.0 + 2 × 16.0 = 44.0" writes, and directly under the count bar the mass bar draws: one grey tile 12.0 wide and two red tiles 16.0 wide each, filling the 640 px bar, labelled "44.0". On "zero" row "oxygen share = 2 × 16.0 = 32.0" and the two red tiles turn amber. On "percent" row "% O = 32.0 ÷ 44.0 × 100 = 72.7%" (bright) and the amber section is labelled "72.7%"; a grey chip "carbon: 27.3% (check: adds to 100%)". On "atom" a `PenArrow` points at one red tile, longer than the grey tile, tag "O is heavier than C". On "them" the count bar's "66.7%" bracket and the mass bar's "72.7%" bracket glow together, unequal in length, tagged "count ≠ mass".

Upgrade (Revision 4): The task strip, the navy givens card ("C 12.0 | O 16.0") and the empty 640 px mass bar are on the board from the first frame. On "It's more" the answer "more" is framed in green with a tick (44 px). The three readouts "Mr 44.0", "share 32.0" and "% 72.7" are live (see "Simulation"), and the selector steps carbon 27.3% then oxygen 72.7% as the tiles turn amber. On "seventy-two point seven percent" the result "72.7%" is framed in green with a tick (52 px). The chip "carbon: 27.3% (check: adds to 100%)" is dark ink at 34 px. On "each oxygen atom is heavier" an amber hand tag "heavier atom, bigger share" writes with the pen arrow. On "Counting atoms isn't the same as weighing them" the bracket "2 of 3 atoms = 66.7%" is struck in red with a red hand tag "count ≠ mass".

### 6. the method
> So here's the method. Count how many atoms of the element are in the formula. Multiply by its relative atomic mass, to get that element's share of the **mass**. Add up every atom in the formula, to get the relative formula **mass**. Then divide the share by the total, and multiply by a **hundred**. It's part over whole, just like last time, except now the whole is the formula **itself**.

Visual: the CO₂ rows dim; the equation strip writes in four labelled stages as spoken: "1 count", then on "mass" (first) "2 share = count × Ar", on "mass" (second) "3 Mr = sum of all Ar", on "hundred" "4 % = share ÷ Mr × 100". On "itself" the full equation strip forms: "% of element = (number of atoms × Ar) ÷ Mr × 100", and a small ghost of v06's accounting bar slides in beside the mass bar with the tag "same idea: part over whole".

Upgrade (Revision 4): The CO₂ rows stay solid at 34 px (not dimmed). The four stages write at 44 px with the numerals hand-numbered in amber. On "It's part over whole" the full equation strip (52 px) takes an amber pen bracket over "(number of atoms × Ar)" tagged "part" and a navy pen bracket under "Mr" tagged "whole". The copy of v06's accounting bar is solid, about 300 px wide, tagged in dark ink.

### 7. ammonium nitrate: count every nitrogen
> Now a formula with a trap. Ammonium nitrate is N H four N O three. It's made of two parts, ammonium and nitrate, and each part contains a nitrogen **atom**. So there are two nitrogens, not one. The relative formula mass is fourteen point zero, plus four times one point zero, plus fourteen point zero, plus three times sixteen point zero, which is eighty point **zero**. Nitrogen's share is two times fourteen point zero, twenty-eight point **zero**. So nitrogen is twenty-eight point zero over eighty point zero, which is thirty-five point zero **percent**. Count only one nitrogen, and you'd get half that, seventeen point five percent, which is a classic **slip**.

Visual: board resets; task strip "Find the percentage by mass of nitrogen in NH₄NO₃"; givens "N 14.0; H 1.0; O 16.0". The formula "NH₄NO₃" writes large. On "atom" it splits into two bracketed groups "NH₄⁺" and "NO₃⁻" with grey labels "ammonium" and "nitrate", and a scribble circle rings the N in each group. On "zero" (first) row "Mr = 14.0 + 4 × 1.0 + 14.0 + 3 × 16.0 = 80.0" and the mass bar builds group by group (N, 4 H as one narrow labelled block, N, 3 O). On "zero" (second) row "nitrogen share = 2 × 14.0 = 28.0" and both blue N tiles turn amber, one in each group. On "percent" row "% N = 28.0 ÷ 80.0 × 100 = 35.0%" (bright). On "slip" a chip "one N: 14.0 ÷ 80.0 × 100 = 17.5%" fades in and is crossed (caption "count every N").

Upgrade (Revision 4): The task strip, the navy givens card ("N 14.0 | H 1.0 | O 16.0") and the formula (72 px) are on the board from the first frame. On "each part contains a nitrogen atom" the two pen rings land with an amber hand tag "two N". The readouts "Mr", "share" and "%" are live as the bar builds. On "thirty-five point zero percent" the result "35.0%" is framed in green with a tick (52 px). On "slip" the crossed chip is struck in red with a red hand tag "count every N".

### 8. hydrates: water inside the crystal
> Some crystals hold water inside them. These blue copper sulfate crystals have water molecules built into the crystal itself, called water of **crystallisation**. Their formula is written C u S O four, dot, five H two O. The dot means that for every copper sulfate unit, there are five water molecules in the **crystal**. Treat the five waters as one group. Each water is two times one point zero plus sixteen point zero, eighteen point zero, so the five waters are ninety point **zero**. The whole formula is sixty-three point five, plus thirty-two point one, plus sixty-four point zero, plus ninety point zero, which is two hundred and forty-nine point **six**. So water is ninety point zero over two hundred and forty-nine point six, thirty-six point one **percent**.

Visual: board resets; the new plate `y11c-cuso4-crucible-blue-v1.png` (blue crystals in a crucible on a pipeclay triangle, burner unlit) at the left. On "crystallisation" a magnifier circle on the crystals shows a coded fragment of lattice: copper-brown and yellow-red sulfate groups with small blue-tinted water molecules tucked between them, tag "water of crystallisation". Task strip "Find the percentage by mass of water in CuSO₄·5H₂O"; givens "Cu 63.5; S 32.1; O 16.0; H 1.0". The formula writes large; on "crystal" the dot glows and "5H₂O" lifts into five small water tiles with a pale blue tint around the group, tag "for every CuSO₄: five H₂O in the crystal". Staged working (Revision 2; one reasoning stage bright at a time, never all four rows bright together). On "Treat the five waters as one group" only the formula's "5H₂O" group stays bright (the rest of the formula dims). On "zero" rows "H₂O = 2 × 1.0 + 16.0 = 18.0" and "5 H₂O = 5 × 18.0 = 90.0" write beside the bright "5H₂O". On "The whole formula" that working clears except a small kept result chip "5 H₂O = 90.0"; on "six" row "Mr = 63.5 + 32.1 + 4 × 16.0 + 90.0 = 249.6" (the "4 × 16.0" written "64.0" beneath it) and the mass bar builds: Cu, S, 4 O, then the tinted water group. On "So water is" the formula-mass expansion dims to a short kept result "Mr = 249.6"; on "percent" the water group turns amber; row "% H₂O = 90.0 ÷ 249.6 × 100 = 36.1%" (bright), with only the "90.0" and "249.6" results kept beside it.

Upgrade (Revision 4): The crucible of blue crystals (about 460 px tall) is solid at the left from the first frame, with the task strip and the navy givens card ("Cu 63.5 | S 32.1 | O 16.0 | H 1.0"). On "water of crystallisation" a pale blue hand tag (dark-ink outline) "water built into the crystal" writes on the magnifier. On "five water molecules in the crystal" an ink hand tag "the dot means: plus 5 waters" writes with a pen ring round the dot. On "Treat the five waters as one group" a chip "5H₂O read as one water" fades in and is struck in red, with a red hand tag "five waters, not one". The staged working stays as written, with kept results solid at 34 px. On "thirty-six point one percent" the result "36.1%" is framed in green with a tick (52 px).

### 9. you can see that percentage
> And that number is something you can measure. Heat the blue crystals gently, and the water is driven off as steam. The crystals crumble to a white **powder**. If all the water leaves, the mass falls by thirty-six point one percent. So two point five zero grams of crystals would lose about zero point nine zero grams, leaving about one point six zero **grams**. Last time, lost mass was an error. Here, it's the **measurement**.

Visual: the burner under the crucible lights (plate cross-fades to the lit variant, `y11c-cuso4-crucible-blue-lit-v1.png`) with coded steam wisps. On "powder" the crucible cross-fades to `m5-g02b-open-crucible-v1.png` (white powder, same framing; Codex matches the new plates to it), tag "anhydrous: without water". On the fourth sentence the mass bar's tinted water group lifts off and drifts away as steam, leaving the 63.9% white segment. On "grams" a coded readout "2.50 g" falls to "1.60 g" with rows "water lost: 36.1% of 2.50 g ≈ 0.90 g" and "left ≈ 1.60 g". On "measurement" v06's rose hatched gap appears small beside it with a tag "v06: loss = error"; the water segment gets "here: loss = the measurement".

Upgrade (Revision 4): Board change to the heating stage: the crucible (about 560 px tall) at the centre, the balance readout (52 px) under it and the mass bar at the right, solid from the first frame. The run is live (see "Simulation"). On "the water is driven off as steam" a pale blue hand tag (dark-ink outline) "water leaving" writes with a pen arrow up the steam. On "the mass falls by thirty-six point one percent" the readout "% of starting mass" reads 63.9% and an amber hand tag "36.1% gone" writes with a pen bracket over the missing part of the bar. On "leaving about one point six zero grams" the result "1.60 g" is framed in green. On "Here, it's the measurement" the two tags read "last video: loss = error" (rose) and "here: loss = the measurement" (amber), with no video number.

### 10. one line to remember
> Here's the line to remember. Count every atom, then it's part over **whole**. Count every atom of the element, including the ones hiding in a second group or in a hydrate's waters, then divide its share by the whole formula **mass**.

Visual: the three bars (CO₂, NH₄NO₃, CuSO₄·5H₂O) stack small, their amber sections glowing in turn. On "whole" the handwritten line writes large: "Count every atom, then it's part over whole." On "mass" scribble circles ring the second N in NH₄NO₃ and the "5" in 5H₂O. Hold about 2 seconds.

Upgrade (Revision 4): The line sits in a framed memory card (hand lettering, 52 px): amber "Count every atom," navy "then it's part over whole." The two rings on the second N and on the "5" are pen rings.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn, and it's the salt from the start. Using sodium, twenty-three point zero, and chlorine, thirty-five point five, calculate the percentage by mass of chlorine in sodium chloride. Pause here to answer.

Visual: the parked salt card returns small at the corner. `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Using relative atomic masses Na = 23.0 and Cl = 35.5, calculate the percentage by mass of chlorine in sodium chloride, NaCl." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the salt tiles stay equal and dashed).

Upgrade (Revision 4): The card text is 38 px, and the salt jar (about 280 px) sits on the card's right side from the first frame as its picture. Nothing answer-bearing.

### 12. feedback 1 (brief)
> The relative formula mass is twenty-three point zero plus thirty-five point five, which is fifty-eight point **five**. Chlorine is thirty-five point five over fifty-eight point five, times a hundred, sixty point seven **percent**. One of the two atoms is chlorine, but fifty percent is the classic slip. A chlorine atom is heavier than a sodium atom, so it carries more of the **mass**.

Visual: card shrinks to the top. On "five" row "Mr(NaCl) = 23.0 + 35.5 = 58.5", and the parked salt tiles become a true mass bar (violet 23.0, green 35.5). On "percent" row "% Cl = 35.5 ÷ 58.5 × 100 = 60.7%"; the green tile turns amber, labelled "60.7%". On "mass" a chip "1 of 2 atoms = 50%" fades in and is crossed (caption "count ≠ mass"). The v06 chip "Na: ? %  Cl: ? %" from the opening ticks: "Cl 60.7%, Na 39.3%". Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "Na 23.0 | Cl 35.5 | NaCl". The rows are 52 px; on "sixty point seven percent" the result "60.7%" is framed in green with a tick. On "fifty percent is the classic slip" the chip "1 of 2 atoms = 50%" is struck in red with a red hand tag "count ≠ mass". The ticked chip "Cl 60.7%, Na 39.3%" is 44 px beside the jar.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Using magnesium twenty-four point three, sulfur thirty-two point one, oxygen sixteen point zero and hydrogen one point zero, calculate the percentage by mass of water in magnesium sulfate heptahydrate, M g S O four, dot, seven H two O. Pause here to answer.

Visual: `QuestionCard`: "Magnesium sulfate heptahydrate has the formula MgSO₄·7H₂O. Using Mg = 24.3, S = 32.1, O = 16.0 and H = 1.0, calculate the percentage by mass of water in this hydrate." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

Upgrade (Revision 4): The card text is 38 px. From the first frame the card's right side carries a watch glass of white crystals (`y11c-watch-glass-salt-v1.png`, about 280 px wide), untagged, as the picture of a white crystalline hydrate. Nothing answer-bearing.

### 14. feedback 2 (brief)
> The magnesium sulfate part adds up to one hundred and twenty point **four**. Seven waters at eighteen point zero each make one hundred and twenty-six point **zero**. So the total is two hundred and forty-six point four, and water is one hundred and twenty-six point zero over that, fifty-one point one **percent**. Counting only one water gives thirteen point zero percent, and that's the slip to **avoid**.

Visual: card shrinks to the top; "·7H₂O" in the card is underlined on the second sentence. On "four" row "MgSO₄ = 24.3 + 32.1 + 4 × 16.0 = 120.4". On "zero" row "7 H₂O = 7 × 18.0 = 126.0". On "percent" row "Mr = 120.4 + 126.0 = 246.4; % H₂O = 126.0 ÷ 246.4 × 100 = 51.1%" with a mass bar whose tinted water group, now amber, is just over half. On "avoid" a chip "one H₂O: 18.0 ÷ 138.4 × 100 = 13.0%" fades in and is crossed (caption "count all seven waters"). Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "Mg 24.3 | S 32.1 | O 16.0 | H 1.0 | MgSO₄·7H₂O". The rows are 52 px; "120.4" and "126.0" are framed in amber as partial results, and on "fifty-one point one percent" the result "51.1%" is framed in green with a tick. On "avoid" the crossed chip is struck in red with a red hand tag "count all seven waters".

### 15. handoff: what's inside an atom?
> We've been using relative atomic masses as numbers handed to us. But each one comes from what's inside the atom. Chemists can write chlorine like this, with a thirty-five above and a seventeen below the **symbol**. Next time, we'll see how those two numbers tell us exactly which particles are inside an atom, or an **ion**.

Visual: board clears to the NaCl mass bar from scene 12. The green chlorine tile lifts out and grows into a large "Cl". On "symbol" a superscript "35" writes at its top left and a subscript "17" at its bottom left (nuclide notation ³⁵₁₇Cl), each with a small "?" beside it. On "ion" a chip writes "How does nuclide notation tell us the particles in an atom or ion?". Hold about 2 seconds. This is the final frame (v08 opens on it).

Upgrade (Revision 4): The NaCl bar is on the board from the first frame of the scene. On "each one comes from what's inside the atom" an ink hand tag "what's inside?" writes above the lifted "Cl" and clears before the last chip writes, so the final frame is exactly as described. The "35" and "17" are 52 px with their "?" marks in amber.

### 16. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A compound's atom ratio is fixed, so its formula gives its percentages.
2. % of element = (number of atoms × Ar) ÷ Mr × 100.
3. Mr = the sum of every Ar in the formula. Ar and Mr have no units.
4. Count every atom: NH₄NO₃ has 2 N. Atom share is not mass share.
5. Hydrates: the dot means water in the crystal. CuSO₄·5H₂O is 36.1% water.

Memory aid (framed card beside the notes, hand lettering, amber and navy as in scene 10): *Count every atom, then it's part over whole.* Notes 34 px in the role colours; no paragraphs. The whole notes scene runs 45 s.

## Teaching checks

- **Does it explain causes?** Why the formula is enough: identical particles, fixed ratio (2). Why we need relative atomic masses: atoms have different masses (3). Why oxygen is more than two thirds of CO2's mass: each oxygen atom is heavier than the carbon atom (5). Why both nitrogens count: each part of the formula carries one (7). Why the water percentage is the mass loss on heating: those waters are what leaves (9).
- **Misconceptions addressed:** atom fraction equals mass fraction (4, 5; crossed in 12); count the element once (7, crossed; 14, crossed); the hydrate dot multiplies the whole formula (8, drawn as a separate group); relative atomic masses have units of grams (3, "no units").
- **One idea at a time:** why (2), the scale (3), the test (4, 5), the method (6), the trap (7), the hydrate (8), its evidence (9).
- **Video makes it easier:** the mass bar makes the percentage a visible share of a length, with heavier atoms drawn wider (5, 7, 8); the count bar and mass bar side by side show 66.7% against 72.7% (5); the water group lifts off as steam and the remaining bar is the anhydrous solid (9).
- **Response opportunity:** prediction (3 s) and two unseen tasks with every relative atomic mass visible on the card; 10 s each; nothing answer-bearing. Feedback about 28 s and 30 s.
- **Avoided double teaching:** v06's part-over-whole and accounting bar are referenced as the same idea; compounds recalled in one clause (v01); relative atomic mass explained only as far as needed (v09 owns the weighted average).
- **Syllabus coverage:** `C1-IQ1-01`, second example: percentage composition by weight of component elements (CO2, NH4NO3, NaCl) and of a component compound within a hydrate (water in CuSO4·5H2O and MgSO4·7H2O).
- **Out of scope by design:** the mole and molar mass (Module 2); empirical formulae; gravimetric analysis; nuclide notation (v08).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style).** "Using relative atomic masses Na = 23.0 and Cl = 35.5, calculate the percentage by mass of chlorine in sodium chloride, NaCl."
Model answer: Mr(NaCl) = 23.0 + 35.5 = 58.5; % Cl = 35.5 ÷ 58.5 × 100 = 60.7% (sodium 39.3%). Classic mistake (crossed): "50%", because one of the two atoms is chlorine; atom fraction is not mass fraction.

**Attempt 2 (scene 13; original wording, HSC style; numbers from pack candidate 2).** "Magnesium sulfate heptahydrate has the formula MgSO₄·7H₂O. Using Mg = 24.3, S = 32.1, O = 16.0 and H = 1.0, calculate the percentage by mass of water in this hydrate."
Model answer: MgSO4 = 24.3 + 32.1 + 64.0 = 120.4; 7 H2O = 7 × 18.0 = 126.0; Mr = 246.4; % H2O = 126.0 ÷ 246.4 × 100 = 51.1%. Classic mistake (crossed): counting one water, 18.0 ÷ 138.4 × 100 = 13.0%.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (v06) | salt 70.0% of the 20.00 g mixture | 1 |
| Relative atomic masses | C 12.0; O 16.0; N 14.0; H 1.0; Cu 63.5; S 32.1; Na 23.0; Cl 35.5; Mg 24.3 | 3, 5, 7, 8, 11 to 14 |
| Prediction | 2 of 3 atoms = 66.7% | 4, 5 |
| CO2 (site) | Mr 44.0; O share 32.0; 72.7%; C 27.3% (screen) | 5, 10, key note 3 |
| NH4NO3 (site) | Mr 80.0; N share 28.0; 35.0%; crossed 17.5% | 7, 10, key note 3 |
| CuSO4·5H2O (site) | H2O 18.0; 5 H2O 90.0; Mr 249.6; 36.1% water; anhydrous 63.9% | 8, 9, 10, key note 4 |
| Heating (illustrative) | 2.50 g crystals lose 0.90 g (0.9014), leaving 1.60 g (1.5986) | 9 |
| A1 | Mr 58.5; Cl 60.7%; Na 39.3%; crossed 50% | 11, 12 |
| A2 | MgSO4 120.4; 7 H2O 126.0; Mr 246.4; 51.1%; crossed 13.0% (18.0 ÷ 138.4) | 13, 14 |
| Nuclide notation (handoff) | ³⁵₁₇Cl | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- CO2: 12.0 + 2 × 16.0 = 44.0; 32.0 ÷ 44.0 × 100 = 72.727 (72.7); 12.0 ÷ 44.0 × 100 = 27.27 (27.3); 2 ÷ 3 × 100 = 66.67 (66.7).
- NH4NO3: 14.0 + 4.0 + 14.0 + 48.0 = 80.0; 28.0 ÷ 80.0 × 100 = 35.0; 14.0 ÷ 80.0 × 100 = 17.5.
- CuSO4·5H2O: 63.5 + 32.1 + 64.0 + 90.0 = 249.6; 90.0 ÷ 249.6 × 100 = 36.058 (36.1); 159.6 ÷ 249.6 × 100 = 63.94 (63.9); 2.50 × 90.0 ÷ 249.6 = 0.9014 (0.90); 2.50 − 0.9014 = 1.5986 (1.60).
- NaCl: 23.0 + 35.5 = 58.5; 35.5 ÷ 58.5 × 100 = 60.68 (60.7); 23.0 ÷ 58.5 × 100 = 39.32 (39.3).
- MgSO4·7H2O: 24.3 + 32.1 + 64.0 = 120.4; 7 × 18.0 = 126.0; 246.4; 126.0 ÷ 246.4 × 100 = 51.14 (51.1); one water: 120.4 + 18.0 = 138.4, 18.0 ÷ 138.4 × 100 = 13.01 (13.0).
- Site checks (not in the video): MgO 16.0 ÷ 40.3 × 100 = 39.70; (NH4)2SO4 132.1, 28.0 ÷ 132.1 × 100 = 21.20.
- Bar widths (author note c): computed from the same values (640 px × Ar ÷ Mr).

## Memory aid check

- **"Count every atom, then it's part over whole."** Written for this lesson; it deliberately echoes v06's "Divide by what you started with". Meaning, as said in scene 10: find the element's total contribution by counting every atom of it (in every group, and inside a hydrate's waters) times its relative atomic mass, then divide by the relative formula mass. Assumptions checked: "part" means count × Ar, not the count alone (scene 5 shows count ≠ mass, so the aid is said after that contrast); "whole" is the relative formula mass including any water of crystallisation. It helps a new case: (NH4)2SO4 (2 N in two groups) or any hydrate. Introduced after the three worked formulae.
- **Considered, not used:** "CMAD" (count, multiply, add, divide) as an acronym (adds decoding); the site's "pause and copy" prompt (kept as the key-notes hold instead).

## Narration length estimate

Revision 1 count (5 November; build parser rules, scenes joined with a space): **6,108 characters**, 16 scenes (per-scene counts in Review notes). At 13.3 characters per second the speech is about 459 s; add about 2 s for the molecule field (scene 2), 2 s for the steam and readout (scene 9), 2 s for the scene 10 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 88 s): **about 547 s** (9.1 minutes), inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's carton analogy (two sentences; keep the molecule field), scene 3's last sentence (the chip stays), scene 8's spoken formula reading ("Their formula is written ...").

Revision 4 (12 Nov 2026): narration unchanged (6,093 characters, 16 scenes). The notes scene is now 45 s in all (it was about 60 s), so the estimate falls from about 547 s to about 532 s.

## Scene list and build ids

Lesson key `c-y11-m1-v07` (route chem-y11-m1-v07; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v07`.

In order (16 scene headings, all `### N.`): hook, fixed-ratio, relative-atomic-mass, prediction, carbon-dioxide, method, ammonium-nitrate, hydrate, hydrate-heating, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except prediction, attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions: 1 to 2 camera continue (CO₂ expands into the molecule); 2 to 3 camera continue; 3 to 4 camera continue (the molecule stays); 4 to 5 board reset to the calculation layout (the count bar carries over); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue (the crucible lights); 9 to 10 board clear; attempts and feedback card shrink to the top; 14 to 15 board clear (the NaCl bar carries over); 15 to 16 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m1-v07-learning-review.md`, `checks/c-y11-m1-v07-science-check.md`.

Revision 4: key-notes hold is 45 s in all. Transition 8 to 9 is a board change to the heating stage.

## Assets

Have (inspected 5 November on a paper-background contact sheet; scaled uniformly only, never stretched):
- `public/assets/chemistry/c1-salt-jar-crystals-v1.png` (1600 × 1718): scenes 1, 11 (from v06's final frame).
- `public/assets/chemistry/m5-g02b-open-crucible-v1.png` (1280 × 1920; open porcelain crucible of white powder on a pipeclay triangle and tripod over a lit Bunsen burner): scene 9, the anhydrous end state.
- `public/assets/chemistry/c1-sparkling-bottle-sealed-v1.png` (sealed fizzy drink bottle): scene 2, small context.
- **Inspected, not used:** `c11-cuso4-beaker-crystal-v1.png` and `c11-cuso4-beaker-dissolved-v1.png` (a single blue crystal in a beaker of solution; it shows dissolving, not a hydrate being heated, and can't cross-fade to the crucible); `p01-cocl2-crystals-blue-v1.png` (cobalt chloride in a clamped tube; wrong substance).

Need (new plates, Codex):
1. `y11c-cuso4-crucible-blue-v1.png` and `y11c-cuso4-crucible-blue-lit-v1.png`: scenes 8, 9. Essential (the hydrate's evidence). Made from `m5-g02b-open-crucible-v1.png` as the base so all three overlay exactly.

Coded: the CO₂ particle model and molecule field, carton and packs, abstract beam balance, periodic table cell, formula tiles, count and mass bars, lattice magnifier, steam, readouts, calculation rows, chips, nuclide notation, attempt cards, countdowns, key notes board.

Revision 4 (12 Nov 2026). Now delivered and used (confirmed by file listing, not re-inspected): `y11c-cuso4-crucible-blue-v1.png`, `y11c-cuso4-crucible-blue-lit-v1.png`. Existing plates newly used on question cards: the salt jar (attempt 1), `y11c-watch-glass-salt-v1.png` (attempt 2). New plate request: `y11c-snack-pack-carton-v1.png` (scene 2). Fallback until it arrives: a plain grid of identical two-colour rounded tiles with no carton drawn.

## Codex asset brief (Year 11 Chemistry M1 v07)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m1-v07.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo**, ink and watercolour in the house style, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-cuso4-crucible-blue-v1.png` (1280 × 1920 px, the same canvas as `m5-g02b-open-crucible-v1.png`): **edit of that plate**, identical in every line (crucible, pipeclay triangle, tripod, burner position), except: the burner is unlit (no flame, the barrel top visible), and the crucible holds small bright blue copper(II) sulfate pentahydrate crystals (translucent, angular, the familiar vivid blue) instead of the white powder, filling the crucible to the same level.
2. `y11c-cuso4-crucible-blue-lit-v1.png` (same canvas): identical to plate 1 with the burner's flame copied exactly from `m5-g02b-open-crucible-v1.png` (a small blue flame), and the crystals' colour unchanged.

All three (`m5-g02b-open-crucible-v1.png`, plate 1, plate 2) must overlay exactly so they cross-fade. Report the overlay check on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m1-v07-provenance.json`.

Revision 4 (12 Nov 2026), one new plate, same standing rules as above. `y11c-snack-pack-carton-v1.png` (2000 × 1400 px, landscape): an open cardboard carton seen from a high three-quarter view, holding two neat rows of identical small clear snack packs, each pack showing the same two kinds of contents (for example nuts and dried fruit) in the same proportion. Transparent PNG with a true alpha channel and clean edges; ink and watercolour in the house style; no text, labels, brand names, logos, people or hands; no glow or ground shadow. It must read at 520 px wide on the paper background with single packs still distinct. Sidecar anchors: the centre of one front-row pack (for the ring).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry of every learner-visible claim: fixed ratio in a compound; Ar and Mr unitless; atom fraction not mass fraction; NH4NO3 has two N; the hydrate dot meaning; CuSO4·5H2O loses its water on gentle heating to a white anhydrous solid, with "if all the water leaves" spoken (author note b).
3. Confirm the analogy's assumptions (Decisions) and the memory aid (Memory aid check).
4. Confirm the site values are used exactly (CO2, NH4NO3, CuSO4·5H2O) and that "g mol⁻¹" appears nowhere in learner copy.
5. Confirm both attempt cards are original, carry every relative atomic mass needed, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger.
7. Confirm no person, hand or face is drawn or requested.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("crystallisation", "sulfate").
9. Confirm the narration character count by script.
10. Confirm the opening frame equals v06's final frame and the final frame matches v08's opening.

Revision 4 (visuals only), also check: the narration lines are identical to Revision 3; every phrase quoted after "On" in an "Upgrade (Revision 4)" paragraph is in that scene's narration, in spoken order within the paragraph; the new on-screen items agree with "Numbers used" (carbon 27.3%; "% of starting mass" 100% → 63.9%; "36.1% gone"); the struck chip "5H₂O read as one water" carries no number; the attempt card pictures give nothing away; every plate named exists except the one new request.

## YouTube metadata (draft)

Title: Percentage Composition from a Formula: CO2, NH4NO3 and Hydrates | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson05.sa.html

You can't filter salt apart into sodium and chlorine, but its formula tells you exactly what fraction of its mass is chlorine. Learn why a fixed formula ratio is enough, what relative atomic mass and relative formula mass are, why carbon dioxide is 72.7% oxygen and not two thirds, how to count both nitrogens in ammonium nitrate, and how to find the water in a hydrate like copper sulfate pentahydrate (and why heating it loses exactly that mass). Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
- calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

Previous: Percentage composition of a separated mixture. Next: Nuclide notation, protons, neutrons and electrons.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Learner question wording (root).** Route: "How does a chemical formula determine percentage composition by mass?" Proposed: "Why does a chemical formula fix the percentage by mass of each element?"
- **2. Site notes 1 to 3 (root).** Log in `../site-corrections-chem-y11.md` if accepted (g mol⁻¹ before the mole; frequency claim; "exactly this percentage" condition).
- **3. Spoken formulae (root, listening).** "N H four N O three" and "C u S O four, dot, five H two O" are spoken once so students hear the formula read aloud. If the Google voice mangles them, replace with the names only ("ammonium nitrate", "copper sulfate pentahydrate") and keep the formula on screen.
- **4. Plates (root).** Two crucible edits of the existing `m5-g02b` plate; confirm.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is "one formula is a fair sample" clear for ionic compounds as well as molecules; is relative atomic mass followable as a given number; does the count bar against mass bar contrast land in the prediction answer; is scene 8 too long for one stage, and if so split the formula reading from the calculation), then the science check and Codex error check.
- Checker output (5 November): narration 6,108 characters; per scene (1 to 16): 484, 408, 453, 177, 529, 374, 647, 749, 416, 225, 208, 374, 267, 391, 316, 75; no em dash; every quoted cue found in its scene's narration in spoken order. Scene 8 (749) is the longest stage; the learning review should judge whether to split it (formula reading and water group, then the sum).

## Revision 2 (6 November 2026, brief 177 repairs)

Findings from `../checks/c-y11-m1-v07-learning-review.md` and `../checks/c-y11-m1-v07-science-check.md` (status.md, "Codex hand-in: brief 177").

1. Scene 8 (should fix): visual directions split at the existing cues: only "5H₂O" bright while 90.0 is computed ("Treat the five waters as one group", "zero"); that working clears except a kept "5 H₂O = 90.0" chip on "The whole formula" while 249.6 builds ("six"); the formula-mass expansion dims to "Mr = 249.6" on "So water is" before the division ("percent"). Never all four rows bright together. No speech change.

Narration: 6,108 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; 0 against Revision 1's 6,108), about 547 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-m1-v07-rev2-error-check.md`): 0 blockers, 0 should fix. Nothing to resolve.
- Headline count restated as the sum of scene strings: 6,093 characters over 16 scenes (the earlier 6,108 included the 15 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).

## Revision 4 (12 Nov 2026)

Visual upgrade to `../maths-visual-standard.md` and the build gate. Visuals only: no narration line changed (checked by hash against Revision 3), so the brief 236 voicing stands.

Findings: the latest error check (`checks/c-y11-m1-v07-rev2-error-check.md`) was clean; nothing to resolve.

Changes:
- New section "Visual upgrade (Revision 4)"; each scene gains an "Upgrade (Revision 4)" paragraph.
- Anchor: the salt jar from v06's final frame, parked and paid off in feedback 1; the blue crystals are the second real object.
- Simulation: the mass bar is computed, with live "share", "Mr" and "%" readouts; the heating in scene 9 runs live (2.50 g to 1.60 g, 100% to 63.9%).
- Cut: scene 9 is a new heating stage. Stage list recorded.
- Hand tags (two or three) and a pen mark in scenes 1 to 3 and 5 to 9; the memory line is a framed card in scene 10.
- Worked examples: givens cards; 72.7%, 35.0% and 36.1% framed in green; crossed slips in red in scenes 5 (the 66.7% bracket), 7 and 8 (new chip "5H₂O read as one water").
- Scene 2: the coded carton becomes a painted plate (new request, with a fallback). Scene 3 and scene 9 tags no longer show a video number.
- Question cards: attempt 1 carries the salt jar; attempt 2 a watch glass of white crystals; feedback scenes gain navy givens strips and green frames.
- Key notes: four long items cut to five one-line bullets with the framed memory card; the notes scene is 45 s. Left the board: the 72.7% example and the heating consequence (kept in scenes 5 and 9).

New plate requests: `y11c-snack-pack-carton-v1.png` (scene 2; fallback stated).

Joins: the opening is v06's final frame (its funnel drawn as the small painted plate, as v06 Revision 3 says). The final frame (scene 15) is unchanged, so v08's opening holds.

Counts: 6,093 characters, unchanged; about 547 s to about 532 s.

Calls for root: (1) the new carton plate, or keep the plain-tile fallback; (2) the struck chip in scene 8 is new on-screen wording; (3) a watch glass of white crystals stands for magnesium sulfate heptahydrate on the attempt 2 card.
