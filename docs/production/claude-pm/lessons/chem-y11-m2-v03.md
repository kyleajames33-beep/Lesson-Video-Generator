# Year 11 Chemistry M2 V03: Molar mass and n = m/MM. How does molar mass turn a measured mass into moles? (design)

Status: Revision 3 (7 Nov 2026): brief 214 error-check findings resolved (root). Ready to voice. Previously Revision 2 (6 Nov 2026): brief 180 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,683 characters, 18 scenes, about 508 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: third video of Year 11 Chemistry (2017 syllabus) Module 2, playlist entry 33, between `chem-y11-m2-v02` and `chem-y11-m2-v04`. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (asset brief); series conventions from `chem-y11-m1-v07.md` (relative formula mass, atom tiles, "count every atom") and `chem-y11-m2-v02.md` (N–n bridge, mole tiles). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m2-v03` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Count formula units and calculate n=m/MM or m=nMM with units. Stop before reaction ratios"; next handoff: "How can a practical determine molar mass?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson02.sa.html` (SHA256 `751832bc580a28da97ddd7500268ddbbab24f8df0f90f241f76a0f10669d35b6`, recomputed, matches the route). Used: `l02-molarmass-title` (definition, "molar mass numerically equals the relative atomic mass ... with units of g mol⁻¹", H₂O, NaCl and Ca(OH)₂ examples, the O₂ true/false), `l02-formula-title` (n = m ÷ MM, its rearrangements, the units check "g ÷ g mol⁻¹ = mol"), `l02-worked-title` (54 g of water; 0.50 mol of NaCl), traps 1 to 3 (O₂, brackets, divide against multiply). Not used here: `l02-practical-title` (m2-v04).

Owner rules applied: as m2-v01 and v02 (one learner question; no people, hands or faces; apparatus as plates, particles, piles, tiles and calculation rows coded; one reasoning stage at a time; 3 s prediction countdown; "Pause here to answer." then a 10 s countdown with the full question and data on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID `C2-IQ2-03`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "explore the concept of the mole and relate this to Avogadro’s constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
  - "moles of elements and compounds n = m/MM  (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v02's final frame (0.24 g of magnesium ribbon, "n(Mg) = ? mol"). Teaches: molar mass as the mass of one mole; why a mole of atoms of an element has a mass in grams equal to its relative atomic mass (a molecular element such as O₂ counts both atoms) (equal counts, mass ratio carried over; the carbon-12 choice from m2-v02); the unit g mol⁻¹; HSC data-sheet values; molar mass of compounds by counting every atom (m1-v07), including O₂ and a bracket; n = m/MM derived as "how many molar masses fit", with the units check; m = n × MM; same mass is not the same amount (magnesium against copper); formula units for an ionic compound; the chain mass → moles → particles with N_A (m2-v02). Stops before reaction ratios (m2-v06, v07), percentage composition by moles and empirical formulae (m2-v05) and experimental molar mass (m2-v04, the handoff).

## Decisions

- **Learner question (route wording kept).** "How does molar mass turn a measured mass into moles?" The answer, in order: we weigh, so we need the mass of one mole (1); one mole of atoms of an element has a mass in grams equal to its relative atomic mass, because equal counts carry the atoms' mass ratio (2, 3); molar mass for elements and compounds (4, 5); dividing by it counts how many moles fit into the mass (6); so n = m/MM, checked by units (6, 7); same mass, different amounts (8, 9); ionic formula units (10); and the full chain to particles (11).
- **Opening frame (equals m2-v02's final frame).** The balance with the magnesium ribbon, display "0.24 g", tag "n(Mg) = ? mol"; the violet card "1 mol = 6.022 × 10²³ particles (N_A)"; the small N–n bridge at the top right; the chip "Next: How does molar mass turn a measured mass into moles?". Scene 1 keeps all of it; the chip fades.
- **Relative atomic mass values (decision; site note 1).** From this video on, the course uses the HSC data sheet's periodic table values (H 1.008, C 12.01, O 16.00, Na 22.99, Mg 24.31, Ca 40.08, Cl 35.45, Cu 63.55), because those are what students have in the exam. Module 1 videos used the site's one-decimal values (m1-v07: H 1.0, O 16.0). The site's lesson uses IUPAC values to three decimals (O 15.999); every site answer used here agrees to the stated significant figures with the data-sheet values (author note a). Codex confirms the values against the current NESA data sheet.
- **Why the grams match the relative atomic mass (cause, not rule).** Scene 3: equal piles of N_A atoms; a magnesium atom is about 2.02 times as heavy as a carbon atom (24.31 ÷ 12.01), so the magnesium pile is 2.02 times as heavy; the mole's number was chosen so carbon comes out at about 12 g (m2-v02 scene 5), and every element follows on the same scale. Coded piles on a coded beam (abstract), not a painted balance.
- **Symbol.** MM, as the syllabus writes it (the site also uses M). Spoken "M M"; unit "grams per mole", g mol⁻¹ on screen.
- **Deriving n = m/MM (no triangle first).** "How many 18.02 g lots fit in 54 g?" makes division the natural step; the units check ("g ÷ g mol⁻¹ = mol") confirms it. The site's formula triangle is not shown: the units check gives the same three forms and the reason.
- **Worked examples (site numbers exactly):** 54 g of water → 3.0 mol (54 ÷ 18.02 = 2.997; site: 2.998 ≈ 3.0); 0.50 mol of NaCl → 29.22 g, shown "≈ 29 g" (two significant figures; site note 2). Added (original, linked to the opening): 0.24 g Mg → 9.9 × 10⁻³ mol → 5.9 × 10²¹ atoms (unrounded value carried, author note b).
- **Count every atom (m1-v07 memory aid recalled).** O₂ = 32.00 g mol⁻¹, not 16.00 (site trap 1); Ca(OH)₂ = 74.10 g mol⁻¹, the bracket's subscript doubling O and H (site trap 2). Ca(OH)₂ returns in A2.
- **In-teaching prediction (3 s, scene 8).** "10 g of magnesium or 10 g of copper: which has more atoms?" Answer: magnesium (0.41 mol against 0.16 mol), because each copper atom is heavier. This makes "mass is not amount" a test.
- **Memory aid (new; see "Memory aid check"):** "Let the units decide: grams divided by grams per mole leaves moles."
- **Attempts (original wording, HSC style).** A1: 11.0 g of CO₂ → 0.250 mol; crossed "11.0 × 44.01 = 484 mol". A2: mass of 0.150 mol Ca(OH)₂ → 11.1 g; crossed "8.56 g" (bracket ignored, MM 57.09). Site drill numbers (88 g CO₂; 0.25 mol CaCO₃) are left for site practice.
- **Mistake scene:** none separate. "A mole of O₂ is 16 g" (5); "same mass, same number of particles" (8, 9); multiplying instead of dividing (A1 crossed); ignoring a bracket (A2 crossed); "molar mass has no unit" (4, 6: g mol⁻¹, against m1-v07's unitless relative formula mass).
- **Handoff (route next).** Scene 17: molar mass from a formula needs the formula; MM = m ÷ n lets a practical find it, if we can measure moles without weighing. Final frame: see "Opening frame and final frame".
- **Site notes (for root to log if accepted):**
  1. Values: the page uses IUPAC three-decimal values (O 15.999, H 1.008, C 12.011) while the HSC data sheet gives O 16.00, C 12.01; students meet both. Suggest a one-line note "the HSC data sheet gives O = 16.00; either gives the same answer to three significant figures".
  2. `we-mm-2`: "m = 29.22 g of NaCl ✓" from n = 0.50 mol (two significant figures). Suggest "29 g (29.22 unrounded)". Same pattern in drill 2 ("25.02 g" from 0.25 mol).
  3. Key terms list "Molar mass (M)" while the formula card and syllabus use MM. Suggest one symbol, MM, with "(also written M)".
  - Checked and correct: H₂SO₄ 98.072; H₂O 18.015; NaCl 58.440; C₆H₁₂O₆ 180.156; Ca(OH)₂ 74.092 and the 57.085 wrong option; drills 1 to 5 (2.0 mol; 25.02 g; 0.150 mol; 72.1 g; 78.0 g mol⁻¹); MC notes (MgSO₄ 120.361; Cl₂ 1.00 mol; Al(OH)₃ 78.003; Fe 2.994 mol; Ca(H₂PO₄)₂ 234.05; XCl₂ 111.50 and X 40.59 ≈ Ca); Q2 432 g; Q3 0.1255 mol; Q4 2.71 × 10⁻³ mol and 97.6%.
- **Cause chain taught, in order:** (1) we can only weigh, so we need grams per mole (1); (2) equal counts of atoms have masses in the ratio of the atoms' masses (3); (3) so molar mass equals the relative atomic or formula mass in g mol⁻¹ (2 to 5); (4) dividing a mass by the mass of one mole counts the moles (6, 7); (5) heavier particles mean fewer per gram (8, 9); (6) moles connect mass to particles (11).
- **Entry knowledge:** Stage 5 formulae and proportion; m1-v07 (relative formula mass, count every atom), m1-v09 (carbon-12 scale), m1-v19 (ionic formulae, brackets), m2-v02 (mole, N_A, N = n × N_A).
- **Learner-visible vocabulary:** molar mass MM (the mass of one mole, g mol⁻¹, 4); grams per mole (4); formula unit (recalled from m2-v02, 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **mole piles** (a pile of N_A atom dots drawn as a heap with a "1 mol" tag, sitting on a coded abstract beam); **atom-mass ratio** (one Mg atom drawn about twice the visual weight of one C atom on a small beam, the beam tipping); **formula tiles** (m1-v07's tiles, each tile now labelled in g mol⁻¹); **lot-fitting bar** (scene 6: a 54 g bar divided into 18.02 g segments, three fitting); **unit cancel strike**; **chain strip** (scene 11: "mass (g) → ÷ MM → n (mol) → × N_A → N", each link lighting as spoken; joins the N–n bridge from m2-v02); calculation layout (task strip, equation strip, givens, rows); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; plates and piles at the left; the equation strip "n = m ÷ MM" at the top right once derived (scene 6 onward); working rows in the right column. Revision 2 stages (scene-level redesign, high-risk list): A, balance and ribbon (1); B, a mole of magnesium on the balance (2); C, the atom-count simulation on the beam (3); D, the definition card and data-sheet strip (4); E, full-width formula tiles with the oxygen gas jar (5); F, the lot-fitting bar and the worked water rows (6, 7); G, equal-mass bars (8, 9); H, sodium chloride on the halite plate (10); I, the ribbon chain (11). Scenes 2 to 5 (about 130 s of speech) were one continued board in Revision 1; no stage now runs past about 60 s.
- **Colour roles (Revision 2, fixed):** masses (g) navy; chemical amounts (mol) amber; molar masses (g mol⁻¹) teal; N_A violet; atoms in element colours; framed answers in a dark-ink box with a green tick; mistakes red (strike plus red hand tag). Hand tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, at 1080p):** current working row 48 px (never below 44 px); live readouts (atom-count simulation, balance display) 52 px; equation strip "n = m ÷ MM" 44 px; supporting lines 30 px; hand tags 34 to 40 px; nothing a student must read below 26 px.
- **Anchor and simulation (Revision 2).** Painted anchor from the first frame: the top-pan balance with the magnesium ribbon (m2-v02's final frame), and in scene 2 the same balance reading "24.31 g" under a larger coil: a real mole of magnesium. Further plates: `y11c-gas-jar-v2.png` as oxygen gas (5) and `y11c-halite-crystal-v1.png` as sodium chloride (10). The genuine simulation is scene 3's atom-count dial: the number of atoms in each pile sweeps from 1 to 6.022 × 10²³ while live mass readouts for the carbon and magnesium piles climb (from 1.99 × 10⁻²³ g and 4.04 × 10⁻²³ g to 12.01 g and 24.31 g) and a ratio readout "Mg ÷ C = 2.02" never changes.

Author notes (not learner copy):
(a) Data-sheet values: H 1.008, C 12.01, O 16.00, Na 22.99, Mg 24.31, Cl 35.45, Ca 40.08, Cu 63.55. H₂O = 18.016 (shown 18.02); 54 ÷ 18.016 = 2.997 (3.0, as the site). NaCl = 58.44 (site 58.440); 0.50 × 58.44 = 29.22 (29 g). CO₂ = 44.01. Ca(OH)₂ = 40.08 + 2 × (16.00 + 1.008) = 74.096 (74.10). O₂ = 32.00.
(b) Magnesium: 0.24 ÷ 24.31 = 0.0098725 mol, shown "9.9 × 10⁻³ mol" (two significant figures); N = 0.0098725 × 6.022 × 10²³ = 5.945 × 10²¹, shown "5.9 × 10²¹". Using the rounded 9.9 × 10⁻³ would give 5.96 × 10²¹ (6.0 × 10²¹); the scene says "keep the unrounded value until the end" on screen only (grey tag), not spoken.
(c) 10 g Mg: 10 ÷ 24.31 = 0.411 mol; 10 g Cu: 10 ÷ 63.55 = 0.157 mol (said "about zero point one six"). Mass of one Cu atom ÷ one Mg atom = 2.61.
(d) Spoken notation: "M M"; "grams per mole"; "C a, O H, in brackets, two" is not spoken: the name "calcium hydroxide" is used and the formula is on screen.

Main question: *How does molar mass turn a measured mass into moles?*
Entry knowledge: m1-v07 relative formula mass; m2-v02 mole and N_A.
Stops after: molar mass of elements and compounds, n = m/MM and m = n × MM with units, formula units, the chain to particles. No reaction ratios.
Handoff: m2-v04, measuring molar mass in a practical.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues m2-v02): masses (g) navy; chemical amounts (mol) amber; molar masses (g mol⁻¹) teal; N_A violet; atoms in element colours (Mg pale green, C dark grey, Cu copper-brown, O red, H white, Na violet, Cl green, Ca pale orange); earlier rows dimmed; crossed chips red strike.

### 1. hook: we weigh, we don't count
> Last time, we counted particles in moles. But in the lab, nobody counts particles, we weigh them. This ribbon has a mass of zero point two four of a gram. So how many moles of magnesium is that? To answer it, we need to know the mass of one mole of magnesium **atoms**. That's called its molar **mass**.

Visual: opens on m2-v02's final frame (Decisions); the "Next" chip fades. On "atoms" a coded heap of pale green dots forms beside the balance with the tag "1 mol of Mg atoms: ? g". On "mass" the heading writes on: "Molar mass: from grams to moles", and a teal tag "molar mass" attaches to the heap's "? g".

### 2. one mole of atoms of an element
> One mole of atoms of any element has a mass in grams equal to its relative atomic mass. Carbon's relative atomic mass is twelve point zero one, so one mole of carbon atoms has a mass of twelve point zero one **grams**. Magnesium's is twenty-four point three one, so one mole of magnesium atoms is twenty-four point three one **grams**. Each pile holds the same number of atoms, six point zero two two times ten to the twenty-three.

Visual: stage change (stage B). A teal rule card writes at the top (44 px): "1 mol of atoms of an element = Ar in grams", the words "of atoms" in a teal pen ring. Two coded heaps sit on the pans of a coded abstract beam at the right: dark grey "1 mol C atoms" and pale green "1 mol Mg atoms". Small periodic table cells write above each: "C 12.01", "Mg 24.31" (grey tag "HSC data sheet"). On "twelve point zero one grams" (second sentence) the carbon heap's tag reads "12.01 g". On "twenty-four point three one grams" (third sentence) the magnesium heap's tag reads "24.31 g" and the beam tips toward it; at the left the painted balance returns large with a bigger coil of `p01-mg-ribbon-v1.png` (uniform scale) on the pan, its display ticking up to "24.31 g" (52 px), navy hand tag "a real mole of Mg" with a pen arrow from the display to the heap. On the last sentence both heaps gain the violet label "6.022 × 10²³ atoms", violet hand tag "same count".

### 3. why the numbers match
> Why does that work? Relative atomic masses compare atoms. A magnesium atom is about twice as heavy as a carbon **atom**. So if two piles hold the same number of atoms, the magnesium pile must be about twice as heavy **too**. The mole's number was chosen so the carbon pile comes out at about twelve grams, and then every other element follows on the same **scale**.

Visual: clear change to the simulation stage (stage C, full width): the balance leaves; one Mg atom and one C atom sit on the two pans of a large coded beam. Above the beam, a violet atom-count dial reads "atoms in each pile: 1" (52 px); under each pan a live mass readout (navy, 52 px): "C: 1.99 × 10⁻²³ g" and "Mg: 4.04 × 10⁻²³ g"; between them a teal ratio readout "Mg ÷ C = 2.02". On "atom" the beam tips toward Mg, teal hand tag "about twice as heavy". On "too" the dial sweeps 1 → 10 → 1000 → 10²⁰ → 6.022 × 10²³, the single atoms multiplying into two heaps, both mass readouts climbing live together (ending at "12.01 g" and "24.31 g") while the ratio readout stays at "2.02" the whole way; teal hand tag "ratio never changes" with a pen ring round it. On "scale" a ghost of m2-v02's card "carbon-12: 12 g ≈ 1 mol of atoms" returns, linked by a dashed arrow, and a short row of cells (H 1.008, O 16.00, Cu 63.55) slides in under "same scale: grams per mole".

### 4. molar mass, defined
> So the molar mass of a substance is the mass of one mole of it. Its symbol is M M, and its unit is grams per mole, because it tells you how many grams each mole **weighs**. For the atoms of an element, take the relative atomic mass from the periodic table and add grams per mole. In this course, use the values on the HSC data sheet, like hydrogen, one point zero zero eight, and oxygen, sixteen point zero **zero**. Notice the difference from Module one. A relative atomic mass has no unit, but a molar mass does, grams per mole.

Visual: clear change to the definition stage (stage D). A teal card writes (48 px): "molar mass, MM: the mass of one mole (g mol⁻¹)". On "weighs" the unit "g mol⁻¹" glows and a teal pen ring circles it, hand tag "grams per mole". On the third sentence the cells become rows: "MM(Mg) = 24.31 g mol⁻¹", "MM(C) = 12.01 g mol⁻¹". On "zero" a small data-sheet strip (coded, grey) shows "H 1.008" and "O 16.00", tag "HSC data sheet values"; a grey note "Module 1 used 1.0 and 16.0" writes small and fades. On the last two sentences m1-v07's "Mr(H₂O) = 18.0 (no units)" ghosts in beside "MM(H₂O) = 18.02 g mol⁻¹", the unit ringed, teal hand tag "now it has a unit".

### 5. compounds: count every atom
> For a compound, add up the molar masses of every atom in the formula, just like the relative formula mass from Module **one**. Water has two hydrogens and one oxygen. Two times one point zero zero eight, plus sixteen point zero zero, is eighteen point zero two grams per **mole**. Oxygen gas is O two, so its molar mass is thirty-two point zero zero, not **sixteen**. And in calcium hydroxide, the two outside the bracket doubles both the oxygen and the **hydrogen**.

Visual: clear change to the full-width tiles stage (stage E). m1-v07's formula tiles return large. On "one" a ghost of m1-v07's line "Count every atom, then it's part over whole" flashes small. "H₂O" expands into two white tiles and one red tile. On "mole" the row "MM(H₂O) = 2 × 1.008 + 16.00 = 18.02 g mol⁻¹" writes (48 px), the result framed, teal hand tag "count every atom". On "sixteen" the painted gas jar (`y11c-gas-jar-v2.png`, about 420 px tall, uniform scale) slides in at the left with a coded tag "oxygen gas", and a lens inside it shows coded O₂ pairs; "O₂" expands into two red tiles, row "MM(O₂) = 2 × 16.00 = 32.00 g mol⁻¹" framed, and a chip "16.00" is crossed in red, red hand tag "O₂ has two atoms". On "hydrogen" the jar dims; "Ca(OH)₂" expands: the bracket's "2" sends an amber pen copy arrow over "OH", giving one Ca, two O, two H tiles, hand tag "× 2 for both"; row "MM = 40.08 + 2 × (16.00 + 1.008) = 74.10 g mol⁻¹".

### 6. from grams to moles
> Now we can turn a mass into moles. If one mole of water is eighteen point zero two grams, how many moles are in fifty-four grams? Ask how many eighteen point zero twos fit into fifty-four. That's a **division**. Chemical amount equals mass divided by molar mass, n equals m over M **M**. Check the units. Grams divided by grams per mole leaves **moles**. And to go back, mass equals moles times molar mass.

Visual: board resets (stage F). A navy bar "54 g of water" draws across the middle at full width. On "division" teal segments labelled "18.02 g = 1 mol" lay along it one at a time, a live amber counter "lots that fit: 1, 2, 3" (52 px) ticking as each lands; teal hand tag "how many fit?". On "M" the equation strip writes at the top right: "n = m ÷ MM" with glosses "n: chemical amount (mol)", "m: mass (g)", "MM: molar mass (g mol⁻¹)". On "moles" a unit line writes "g ÷ g mol⁻¹ = mol" with the two "g" striking out, amber hand tag "moles left". On the last sentence "m = n × MM" writes beneath, with "mol × g mol⁻¹ = g".

### 7. worked example: water
> Let's finish that one. How many moles are in fifty-four grams of water? The molar mass is eighteen point zero two grams per mole. So n equals fifty-four divided by eighteen point zero two, which is three point zero moles of water **molecules**. Sense check: fifty-four is three lots of about eighteen, so three moles fits. And with N A, that's about one point eight times ten to the twenty-four **molecules**.

Visual: calculation layout. Task strip: "How many moles are in 54 g of water?" Givens (navy and teal): "m = 54 g; MM(H₂O) = 18.02 g mol⁻¹". On "molecules" (first) row "n = 54 ÷ 18.02 = 3.0 mol of H₂O" writes (48 px), "3.0 mol of H₂O" framed with a green tick, and three amber mole tiles stack under the bar; ink hand tag "3 lots of 18" with a pen ring on the bar. On "molecules" (second) the N–n bridge glows "× N_A" and row "N = 3.0 × 6.022 × 10²³ ≈ 1.8 × 10²⁴ molecules" writes, dimmer (a side result).

### 8. prediction (countdown, 3 seconds)
> Quick prediction. Ten grams of magnesium, or ten grams of copper. Which contains more **atoms**?

Visual: stage change (stage G): two navy bars of equal length, "10 g Mg" (pale green) and "10 g Cu" (copper-brown). Chips "Mg", "Cu", "the same". On "atoms" the 3 s `Countdown` ring runs.

### 9. same mass, different amounts
> Magnesium. A copper atom is about two and a half times as heavy as a magnesium atom, with a molar mass of sixty-three point five five, so each gram of copper holds fewer atoms. Ten grams of magnesium is about zero point four one **moles**. Ten grams of copper is only about zero point one six **moles**. The same mass doesn't mean the same amount. Lighter particles mean more of them in each **gram**.

Visual: "Mg" ticks. Each bar is cut into molar-mass segments: the Mg bar shows 0.41 of a 24.31 g segment, the Cu bar 0.16 of a 63.55 g segment (segments drawn to scale, extending past the bar ends as ghosts). On "moles" (first) row "n(Mg) = 10 ÷ 24.31 = 0.41 mol". On "moles" (second) row "n(Cu) = 10 ÷ 63.55 = 0.16 mol". On "gram" two dot fields fill the bars, the Mg field visibly denser, amber hand tag "more atoms" with a pen ring round the Mg field; a chip "same mass = same number of atoms" fades in and is crossed in red, red hand tag "mass ≠ amount".

### 10. worked example: sodium chloride
> Now the other way. What mass of sodium chloride contains zero point five zero moles? Sodium chloride is ionic, so we count formula units, each one sodium ion and one chloride **ion**. The molar mass is twenty-two point nine nine plus thirty-five point four five, fifty-eight point four four grams per **mole**. Mass equals moles times molar mass. Zero point five zero times fifty-eight point four four is about twenty-nine **grams**. That's three point zero times ten to the twenty-three formula units.

Visual: board resets to the g01 calculation layout (stage H) with the painted halite plate (`y11c-halite-crystal-v1.png`, about 380 px, uniform scale) at the left, tag "sodium chloride". Task strip (40 px): "What mass of NaCl contains 0.50 mol?" Givens card: "n = 0.50 mol (NaCl formula units); Na 22.99; Cl 35.45". On "ion" a lens from the crystal face opens on a coded lattice fragment that outlines one Na⁺ with one Cl⁻, tag "formula unit". On "mole" row "MM(NaCl) = 22.99 + 35.45 = 58.44 g mol⁻¹". The equation strip "m = n × MM" glows. On "grams" row "m = 0.50 × 58.44 = 29.22" then "≈ 29 g" framed with a green tick (grey hand tag "two sig figs, from 0.50"); a red chip "0.50 ÷ 58.44 = 0.0086 g" fades in and is crossed, red hand tag "mass from moles: multiply". The last sentence writes a dim row "N = 0.50 × 6.022 × 10²³ = 3.0 × 10²³ formula units".

### 11. the ribbon: mass to moles to atoms
> Now the ribbon from the start. Zero point two four of a gram, divided by twenty-four point three one grams per mole, is about zero point zero zero nine nine moles of magnesium **atoms**. Times N A, that's about five point nine times ten to the twenty-one atoms. Mass to moles uses molar mass. Moles to particles uses N **A**. Moles sit in the **middle**, the bridge between what you can weigh and what you can't count.

Visual: board clears to the opening balance and ribbon ("0.24 g"). On "atoms" row "n(Mg) = 0.24 ÷ 24.31 = 9.9 × 10⁻³ mol" writes (48 px) and the tag "n(Mg) = ? mol" from the opening fills in, framed; amber hand tag "the answer to the opening". The second sentence writes "N = 9.87 × 10⁻³ × 6.022 × 10²³ = 5.9 × 10²¹ atoms" with a grey tag "keep the unrounded value until the end". On "A" the chain strip builds: "mass (g) → ÷ MM → n (mol) → × N_A → N (particles)". On "middle" the amber "n (mol)" box in the strip grows and glows, amber hand tag "moles in the middle" with a pen ring.

### 12. one line to remember
> Here's a line to remember. Let the units decide. Grams divided by grams per mole leaves **moles**. So if a mass is given in kilograms, change it to grams first, or the units won't cancel.

Visual: the chain strip stays at the top. On "moles" a framed memory card draws and the line writes large in it as `HandText` (48 px): "Let the units decide: g ÷ g mol⁻¹ = mol", the navy "g" and teal "g" striking out to leave amber "mol". On the last sentence a small grey row writes "kg → × 1000 → g first". Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Calculate the chemical amount in eleven point zero grams of carbon dioxide. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Calculate the chemical amount, in moles, of carbon dioxide in 11.0 g of CO₂. (C = 12.01, O = 16.00)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the equation strip "n = m ÷ MM" stays visible, as the method taught).

### 14. feedback 1 (brief)
> The molar mass of carbon dioxide is twelve point zero one plus two times sixteen point zero zero, forty-four point zero one grams per **mole**. So n equals eleven point zero divided by forty-four point zero one, zero point two five zero **moles**. Multiplying instead gives four hundred and eighty-four, which can't be right, because eleven grams is far less than one **mole**.

Visual: card shrinks to the top. On "mole" (first) row "MM(CO₂) = 12.01 + 2 × 16.00 = 44.01 g mol⁻¹". On "moles" row "n = 11.0 ÷ 44.01 = 0.250 mol" (48 px), "0.250 mol" framed with a green tick. On "mole" (second) a chip "11.0 × 44.01 = 484 mol" fades in and is crossed in red, red hand tag "units: g × g mol⁻¹ isn't mol". Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Calculate the mass of zero point one five zero moles of calcium hydroxide. Pause here to answer.

Visual: `QuestionCard`: "Calculate the mass of 0.150 mol of calcium hydroxide, Ca(OH)₂. (Ca = 40.08, O = 16.00, H = 1.008)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The bracket doubles the oxygen and the hydrogen, so the molar mass is seventy-four point one zero grams per **mole**. Mass equals moles times molar mass, zero point one five zero times seventy-four point one zero, which is eleven point one **grams**. Ignoring the bracket gives eight point five six grams, the slip to **avoid**.

Visual: card shrinks to the top; "(OH)₂" underlined. On "mole" row "MM = 40.08 + 2 × (16.00 + 1.008) = 74.10 g mol⁻¹". On "grams" row "m = 0.150 × 74.10 = 11.1 g" (48 px), "11.1 g" framed with a green tick. On "avoid" a chip "MM = 40.08 + 16.00 + 1.008 = 57.09; m = 8.56 g" fades in and is crossed in red, red hand tag "the 2 multiplies everything in the bracket". Hold about 1 second.

### 17. handoff: when you don't know the formula
> Every molar mass today came from a formula. But what if you have a substance and don't know its formula? Turn the equation around. Molar mass equals mass divided by moles. Weighing gives the mass. If we can find the moles some other way, we can measure the molar **mass**. Next time, we'll see how a practical **does** it.

Visual: board clears. "n = m ÷ MM" rearranges by animation into "MM = m ÷ n" large at the centre. On the fourth sentence a navy tag "m: weigh it" writes under "m" with a tick, and the balance thumbnail slides beside it. On "mass" an amber tag "n: find it another way?" writes under "n" with a "?". Below, two small plates slide in: `p01-mg-ribbon-v1.png` tagged "an element" and `m6-conical-flask-v1.png` tagged "an unknown liquid", each with "MM = ?". On "does" the chip writes: "Next: How can a practical determine molar mass?". Hold about 2 seconds. This is the final frame (m2-v04 opens on it).

### 18. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Molar mass MM: the mass of one mole (g mol⁻¹). 1 mol of Mg atoms = 24.31 g.
2. Compounds: add every atom. H₂O = 18.02; O₂ = 32.00; Ca(OH)₂ = 74.10 g mol⁻¹.
3. n = m ÷ MM; m = n × MM (g ÷ g mol⁻¹ = mol).
4. Same mass is not same amount: 10 g Mg = 0.41 mol; 10 g Cu = 0.16 mol.
5. Mass → ÷ MM → moles → × N_A → particles.

Memory aid (framed card under the notes, hand lettering, navy, teal and amber as in scene 12): *Let the units decide: grams divided by grams per mole leaves moles.* Notes 32 px in the role colours; no paragraphs.

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why a mole of magnesium weighs 24.31 g (equal counts carry the atoms' mass ratio, on a scale set by carbon, 2, 3); why we divide (counting how many molar masses fit, 6); why 10 g of copper has fewer atoms (heavier atoms, 9); why O₂ is 32.00 (two atoms per molecule, 5).
- **Misconceptions addressed:** molar mass equals one atom's relative mass for a diatomic element (5, crossed); equal masses mean equal amounts (8, 9, crossed); multiply instead of divide (14, crossed); ignoring brackets (16, crossed); molar mass has no unit (4).
- **One idea at a time:** the need (1), the link (2, 3), definition (4), compounds (5), the formula (6), use (7), contrast (8, 9), reverse and ionic (10), chain (11).
- **Video makes it easier:** heaps on a beam make "same count, mass in the ratio" visible (2, 3); the lot-fitting bar shows why it's a division (6); equal-mass bars with different dot densities (9); the chain strip with moles in the middle (11).
- **Response opportunity:** prediction (3 s) and two unseen tasks with all relative atomic masses on the card; 10 s each; nothing answer-bearing. Feedback about 27 s and 24 s.
- **Avoided double teaching:** relative formula mass and counting atoms (m1-v07), the mole and N_A (m2-v02), carbon-12 (m1-v09, m2-v02) recalled, not re-taught.
- **Syllabus coverage:** `C2-IQ2-03`: moles of elements and compounds, n = m/MM with the syllabus's meanings and units; masses, chemical amounts and numbers of particles manipulated together (11).
- **Out of scope by design:** experimental molar mass (m2-v04); empirical formulae (m2-v05); reaction ratios (m2-v06 onward).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style).** "Calculate the chemical amount, in moles, of carbon dioxide in 11.0 g of CO₂. (C = 12.01, O = 16.00)"
Model answer: MM(CO₂) = 12.01 + 2 × 16.00 = 44.01 g mol⁻¹; n = 11.0 ÷ 44.01 = 0.250 mol. Classic mistake (crossed): 11.0 × 44.01 = 484 mol.

**Attempt 2 (scene 15; original wording, HSC style).** "Calculate the mass of 0.150 mol of calcium hydroxide, Ca(OH)₂. (Ca = 40.08, O = 16.00, H = 1.008)"
Model answer: MM = 40.08 + 2 × (16.00 + 1.008) = 74.10 g mol⁻¹; m = 0.150 × 74.10 = 11.1 g. Classic mistake (crossed): ignoring the bracket, MM 57.09 and m 8.56 g.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (m2-v02) | 0.24 g of magnesium | 1, 11 |
| Data-sheet values | H 1.008; C 12.01; O 16.00; Na 22.99; Mg 24.31; Cl 35.45; Ca 40.08; Cu 63.55 | 2 onward |
| Mass ratio | 24.31 ÷ 12.01 = 2.02 | 3 |
| Atom-count simulation (Revision 2) | one C atom 1.994 × 10⁻²³ g (shown 1.99); one Mg atom 4.037 × 10⁻²³ g (shown 4.04); at N_A atoms 12.01 g and 24.31 g; ratio 2.02 throughout | 3 |
| Mole of magnesium on the balance (Revision 2) | 24.31 g | 2 |
| Slip chip (Revision 2) | 0.50 ÷ 58.44 = 0.0086 | 10 |
| Molar masses | H₂O 18.02; O₂ 32.00; Ca(OH)₂ 74.10; NaCl 58.44; CO₂ 44.01 | 5, 7, 10, 14, 16, key notes |
| WE1 (site) | 54 ÷ 18.02 = 3.0 mol; N ≈ 1.8 × 10²⁴ | 6, 7 |
| Prediction | 10 ÷ 24.31 = 0.41 mol; 10 ÷ 63.55 = 0.16 mol | 8, 9, key note 3 |
| WE2 (site) | 0.50 × 58.44 = 29.22 ≈ 29 g; 3.0 × 10²³ formula units | 10, key note 4 |
| Ribbon | 0.24 ÷ 24.31 = 9.9 × 10⁻³ mol; 5.9 × 10²¹ atoms | 11 |
| A1 | 0.250 mol; crossed 484 | 13, 14 |
| A2 | 11.1 g; crossed 57.09 and 8.56 g | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- H₂O 2 × 1.008 + 16.00 = 18.016; 54 ÷ 18.016 = 2.997 (3.0); 3.0 × 6.022 × 10²³ = 1.81 × 10²⁴ (1.8). Site's 18.015: 54 ÷ 18.015 = 2.998.
- 24.31 ÷ 12.01 = 2.024. Revision 2: 12.01 ÷ 6.022 × 10²³ = 1.9943 × 10⁻²³ g; 24.31 ÷ 6.022 × 10²³ = 4.0369 × 10⁻²³ g; ratio 2.024 at every count. 0.50 ÷ 58.44 = 0.00856 (0.0086).
- 10 ÷ 24.31 = 0.4114; 10 ÷ 63.55 = 0.1574.
- NaCl 22.99 + 35.45 = 58.44; 0.50 × 58.44 = 29.22; 0.50 × 6.022 × 10²³ = 3.011 × 10²³ (3.0).
- 0.24 ÷ 24.31 = 0.0098725 (9.9 × 10⁻³); × 6.022 × 10²³ = 5.945 × 10²¹ (5.9).
- CO₂ 12.01 + 32.00 = 44.01; 11.0 ÷ 44.01 = 0.24994 (0.250); 11.0 × 44.01 = 484.1.
- Ca(OH)₂ 40.08 + 2 × 17.008 = 74.096 (74.10); 0.150 × 74.096 = 11.114 (11.1); 40.08 + 16.00 + 1.008 = 57.088 (57.09); 0.150 × 57.088 = 8.563 (8.56).

## Memory aid check

- **"Let the units decide: grams divided by grams per mole leaves moles."** Written for this lesson. Meaning, as said in scene 12: write the units in the calculation and choose the operation that leaves the unit you want. Assumptions checked: the mass must be in grams (a kilogram value is converted first, said in scene 12 after the line; site trap); MM must carry g mol⁻¹, not the unitless relative mass. It decides the direction in A1 (divide) and A2 (multiply).
- **Considered, not used:** the site's formula triangle (it gives the operation without the reason; the units check carries the reason); "MM is the bridge" (the chain strip already shows it).

## Narration length estimate

Revision 2 count (6 November; build parser rules: only lines starting "> ", `**` removed, total = sum of scene strings): **5,683 characters**, 18 scenes (Revision 1's headline 5,699 included 17 joining spaces; its scene sum was 5,682). At 13.3 characters per second the speech is about 427 s; add about 2 s for the heaps and beam (2), 3 s for the atom-count sweep to settle (3), 2 s for the lot-fitting bar (6), 2 s for the scene 12 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 81 s): **about 508 s**. Reserve trims if the voiced take runs long: scene 7's second sentence, scene 10's last sentence (the dim row stays), scene 3's last sentence.

## Opening frame and final frame

- **Opening frame:** m2-v02's final frame exactly (Decisions).
- **Final frame (m2-v04 opens on it):** "MM = m ÷ n" large at the centre; under "m" a navy tag "m: weigh it" with a tick and the small balance (`y11c-top-pan-balance-v1.png`) beside it; under "n" an amber tag "n: find it another way?" with a "?"; below, `p01-mg-ribbon-v1.png` tagged "an element" and `m6-conical-flask-v1.png` tagged "an unknown liquid", each with "MM = ?"; the chip "Next: How can a practical determine molar mass?".

## Scene list and build ids

Lesson key `c-y11-m2-v03` (route chem-y11-m2-v03; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v03`.

In order (18 scene headings, all `### N.`): hook, element-mole, why-it-matches, molar-mass, compounds, grams-to-moles, water, prediction, same-mass, sodium-chloride, ribbon-chain, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m2-v02's final frame into scene 1 by camera continue; 1 to 2 stage change (the rule card and the balance with a mole of magnesium; Revision 2); 2 to 3 clear change to the full-width simulation stage; 3 to 4 clear change to the definition stage; 4 to 5 clear change to the tiles stage; 5 to 6 board reset; 6 to 7 camera continue (the bar stays); 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 board reset; 10 to 11 board clear (the opening balance returns); 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/c-y11-m2-v03-learning-review.md`, `checks/c-y11-m2-v03-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; scaled uniformly only, never stretched):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (1402 × 1122): scenes 1, 11, 17.
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (2000 × 2000): scenes 1, 11, 17.
- `public/assets/chemistry/m6-conical-flask-v1.png` (2048 × 2048; empty conical flask): scene 17 (final frame), as "an unknown liquid" (coded small liquid layer).
- `public/assets/chemistry/y11c-gas-jar-v2.png` (inspected 6 November: clear glass gas jar with a ground-glass cover plate, empty, transparent background): scene 5, as oxygen gas (Revision 2).
- `public/assets/chemistry/y11c-halite-crystal-v1.png` (inspected 6 November: a single cubic rock salt crystal): scene 10 (Revision 2).
- **Inspected, not used:** root-level `carbon-12-molar-mass-balance.png` (flat infographic, baked text); `c1-salt-jar-crystals-v1.png` (not needed: the NaCl example is a calculation).

Need: none (Revision 2 adds two existing plates and reuses the ribbon at a larger uniform scale in scene 2; no new requests). Coded: atom-count dial and live readouts, lot counter, heaps, beams, formula tiles, bars and segments, dot fields, lattice fragment, chain strip, calculation rows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v03)

No new plates.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the data-sheet values (author note a) against the current NESA Chemistry data sheet.
3. Confirm the chemistry of every learner-visible claim: molar mass equals relative atomic mass in g mol⁻¹ and the scene 3 reason; O₂ and Ca(OH)₂; formula units for NaCl.
4. Confirm the memory aid's assumptions (Memory aid check).
5. Confirm the site values are used exactly (54 g water; 0.50 mol NaCl) and the significant-figure choices (29 g; 3.0 mol).
6. Confirm both attempt cards are original, carry every relative atomic mass needed, and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger.
8. Confirm no person, hand or face is drawn or requested.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script, and that the opening frame equals m2-v02's final frame and the final frame matches m2-v04's opening.

## YouTube metadata (draft)

Title: Molar Mass and n = m/MM: From Grams to Moles | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module2/lesson02.sa.html

You can't count atoms, but you can weigh them. Learn why one mole of magnesium has a mass of 24.31 g, how to calculate the molar mass of compounds like water, oxygen gas and calcium hydroxide, how n = m/MM turns a mass into moles (and why the units prove it), why 10 g of magnesium holds more atoms than 10 g of copper, and how to go from mass to moles to particles. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"explore the concept of the mole and relate this to Avogadro’s constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)
- moles of elements and compounds n = m/MM (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)"

Previous: The mole and Avogadro's constant. Next: Measuring molar mass in a practical.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Data-sheet values from Module 2 (root).** The course switches from Module 1's one-decimal values to the HSC data sheet's values here (Decisions). Root confirms this for m2-v04 onward and for the Module 2 series.
- **2. Site notes 1 to 3 (root).** Log if accepted (value sets; significant figures in WE2 and drill 2; M against MM).
- **3. Spoken "M M" (root, listening).** If the Google voice reads "M M" oddly, say "molar mass" throughout and keep "MM" on screen.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does scene 3's reason land, or is "chosen so" too quick; is scene 5 one stage or two; does the lot-fitting bar make division obvious), then the science check and Codex error check.
- Checker output (5 November): narration 5,699 characters; per scene (1 to 18): 295, 435, 353, 509, 451, 394, 401, 92, 389, 490, 406, 183, 108, 365, 106, 316, 314, 75; no em dash; every quoted cue found in its scene's narration in spoken order. Scene 4 (509) and scene 10 (490) are the longest stages.
- Revision 2 count (6 November): 5,683 characters (sum of scene strings); per scene (1 to 18): 295, 423, 353, 522, 451, 394, 401, 92, 389, 490, 406, 183, 108, 365, 106, 316, 314, 75. Every bold cue checked in its Visual in spoken order; no em dash.

## Revision 2 (6 Nov 2026)

Brief 180 finding (`checks/c-y11-m2-v03-learning-review.md`, `checks/c-y11-m2-v03-science-check.md`):
- **Should fix, atoms not elements (scenes 2, 4, key note 1):** scene 2 now says "One mole of atoms of any element has a mass in grams equal to its relative atomic mass", funded by cutting "Here's the key fact." (435 to 423 characters); scene 4 says "For the atoms of an element" (509 to 522); a teal rule card "1 mol of atoms of an element = Ar in grams" with "of atoms" ringed; key note 1 reads "1 mol of Mg atoms = 24.31 g". The O₂ example (32.00, crossed 16.00) is kept and now shows a gas jar. Boundary wording updated.
- **Count method:** headline restated as the sum of scene strings (5,683 after the fix; Revision 1's 5,699 included joining spaces, scene sum 5,682). Estimate about 508 s.

Visual upgrade and scene-level redesign (high-risk list; narration, numbers and teaching logic otherwise unchanged):
- Decisions: stage plan A to I, colour roles, type sizes (current row 48 px, readouts 52 px, floor 26 px), anchor and simulation lines.
- Scenes 2 to 5 (about 130 s on one continued board in Revision 1) split into four stages: a real mole of magnesium on the painted balance (2), the atom-count simulation (3), the definition card (4) and full-width formula tiles with the oxygen gas jar (5).
- Scene 3 is the genuine simulation: an atom-count dial sweeps 1 to 6.022 × 10²³ while live mass readouts for the two piles climb to 12.01 g and 24.31 g and the ratio readout stays at 2.02.
- Scene 6 gains a live "lots that fit" counter; scene 10 opens on the existing halite plate.
- Hand tags and pen marks in role colours in every teaching scene; framed answers on 18.02 and 32.00 (5), 3.0 mol (7), 29 g (10), 9.9 × 10⁻³ mol (11), 0.250 mol (14), 11.1 g (16); crossed slips with red hand tags (5, 9, 10 new "0.50 ÷ 58.44", 14, 16).
- Memory line in a framed card (12); key notes cut to five short bullets (303 characters) with the framed card.
- No new plate requests; `y11c-gas-jar-v2.png` and `y11c-halite-crystal-v1.png` added (inspected).

## Revision 3 (7 Nov 2026)

Brief 214 error check (`checks/c-y11-m2-v03-rev2-error-check.md`), should-fix finding resolved (root):
- Scene 2: the carbon tag now reveals on "twelve point zero one grams" (second sentence) and the magnesium tag on "twenty-four point three one grams" (third sentence), the two bold "grams" cues. The rule card's earlier "in grams" no longer triggers anything.
- No speech change. Narration 5,683 characters (sum of 18 scene strings), about 508 s. Bold cues quoted in spoken order; no em dashes.
