# Year 11 Chemistry M1 V19: Ion charges and ionic formulae. How do ion charges determine a neutral inorganic formula? (design)

Status: Revision 2 (7 Nov 2026): brief 179 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing. Previously Revision 1 (5 November 2026): first design.

Narration 6,350 characters (sum of scene strings), 19 scenes, about 557 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: nineteenth video of Year 11 Chemistry (2017 syllabus), Module 1; first of two nomenclature videos (v19 ion charges and formulae, v20 naming from a formula). It builds on `chem-y11-m1-v08.md` (ions: electrons = protons − charge), `chem-y11-m1-v11.md` (subshells, used in one sentence for transition metals), `chem-y11-m1-v12.md` (valence electrons per group; metals and non-metals by position) and `chem-y11-m1-v18.md` (its final frame: Na⁺ and Cl⁻) without re-teaching them. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates), `chem-y11-m1-v17.md` (series conventions). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m1-v19` in `../../programme/chem-y11-route-inputs.json`. Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson19.sa.html` (SHA256 `bf0c603459da030fe0c3d036c87ccb0efdfaaed2b1b89235f5d6ae1894d8a025`, recomputed, matches; used: `l19-from-electron-configuration-to-ion-charge-title` (the group-to-charge table, Na → Na⁺ [Ne], O → O²⁻, Al³⁺ lock-in), `l19-transition-metals-variable-oxidation-states-title` (Fe²⁺ and Fe³⁺, Cu⁺ and Cu²⁺, the cause in one sentence: 3d and 4s close in energy), `l19-iupac-nomenclature-rules-title` (the polyatomic ion examples Na₂SO₄, Ca(NO₃)₂ and (NH₄)₂CO₃, and "Working out a Roman numeral: For FeCl₂ ... FeCl₃", used here as the backwards charge step), Short Answer Q7 (CuCl and CuCl₂, the copper-against-sodium comparison, reworded for attempt 2) and Q8(a) (Fe₂O₃, the rust case); naming rules themselves are v20; the isoelectronic radius material is v13's; Lewis diagrams are v21's). Site corrections file checked: no logged item touches lesson 19.

Owner rules applied: one learner question; no people, hands or faces; real objects as painted plates (rust, salt); ions, charge tallies and formulae coded; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling ("aluminium", "sulfate"); no em dashes; nothing in the bottom 12% of the frame. Calculation layout: each formula is built with a task strip ("Formula of aluminium oxide"), an ion strip (the two ions with charges, the givens) and a charge tally (total positive, total negative, sum), one stage at a time.

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger IDs `C1-IQ1-02` and `C1-IQ4-02`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "investigate the nomenclature of inorganic substances using International Union of Pure and Applied Chemistry (IUPAC) naming conventions" (formula from ion charges here; names in v20)
- "investigate the differences between ionic and covalent compounds through:"
  - "using nomenclature, valency and chemical formulae (including Lewis dot diagrams) (ACSCH029)" (valency and formulae here; Lewis dot diagrams in v21)
  - "examining the spectrum of bonds between atoms with varying degrees of polarity with respect to their constituent elements’ positions on the periodic table" (v21)
  - "modelling the shapes of molecular substances (ACSCH056, ACSCH057)" (v23)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 37 and 38)

**Boundary:** opens on v18's final frame. Teaches why main-group atoms form the ions they do (losing or gaining electrons to reach the nearest noble gas arrangement, a full outer shell), with Na⁺ and O²⁻ shown; the group-to-charge pattern (1, 2, 13: +1, +2, +3; 15, 16, 17: −3, −2, −1; 14 usually shares; 18 none); cation and anion; the neutrality rule (total positive charge equals total negative charge); building NaCl, MgCl₂, Al₂O₃; the crossover shortcut and simplifying (MgO); variable-charge transition metals (Fe²⁺ and Fe³⁺, Cu⁺ and Cu²⁺; cause in one sentence); iron(III) oxide (Fe₂O₃, the iron oxide in rust; spoken "iron three plus oxide") and FeO; reading a charge backwards from a formula (FeCl₃, FeCl₂); six polyatomic ions with their charges; brackets (Ca(NO₃)₂). Stops before naming rules, Roman numerals in names and covalent prefixes (v20, the handoff), Lewis diagrams and bonding types (v21), the lattice (v22), and electron configurations of transition-metal ions (author note c).

## Decisions

- **Learner question (route wording kept).** "How do ion charges determine a neutral inorganic formula?" The answer, in order: atoms form ions with predictable charges (2, 3); a compound has no overall charge, so the ions combine in the ratio that cancels the charges (4, 5); the shortcut and simplest ratio (6); variable charges come from the name or the formula (8 to 10); polyatomic ions are single units, in brackets when there is more than one (11, 12).
- **Opening frame (equals v18's final frame).** At the left a small nucleus tagged "nuclear: the nucleus changes"; at the right Na⁺ (2, 8) with "11 protons, 10 electrons: charge +1" and Cl⁻ (2, 8, 8) with "17 protons, 18 electrons: charge −1"; between them "Na⁺ + Cl⁻ → ?" with a teal tag "total charge?"; the chip "Next: how do ion charges decide a compound's formula?". Scene 1 fades the nucleus, completes the line as NaCl and brings in the rust plate.
- **Hook with real objects.** Salt (`y11c-watch-glass-salt-v1.png`, Revision 2: dry cubic crystals; the Revision 1 jar plate shows crystals under water and reads as a solution) against rust (`y11c-rusty-nail-v1.png`, delivered). Revision 2 (brief 179): rust is not given one formula. The narration says rust "contains an iron oxide with two irons for every three oxygens", and the screen labels the example "iron oxide in rust: Fe₂O₃" with a grey tag "rust also holds water". The question "why those numbers?" is answered in scene 9.
- **Why ions have their charges (site table, cause first).** The nearest noble gas arrangement (a full outer shell) is the reason given; shell numbers (v12's Stage 5 picture) are used, not spdf. "The octet rule" is named on screen only, as a model (author note a: noble gas compounds exist; the rule is a guide for main-group ions).
- **Neutrality rule as the core cause.** "A grain of salt isn't charged" is the concrete evidence that a compound has no overall charge. Lowest common multiple is spoken as "the smallest number both go into".
- **Crossover shortcut with its trap (memory aid).** "Cross over, cancel down, check for zero." Checked in "Memory aid check" (the crossover works only for single ions or bracketed polyatomic units; always simplify, except where author note d applies).
- **Variable charge (site cause, one sentence).** Iron and copper can lose different numbers of electrons because their outer subshells are close in energy (v11's subshells named, not taught). Students cannot read the charge from the group; it comes from the name (v20) or from the formula (scene 10).
- **Backwards step included.** Scene 10 works the charge out from FeCl₃ and FeCl₂ (site's "Working out a Roman numeral" without the numeral). It answers attempt 2 and sets up v20's Stock numerals.
- **Polyatomic ions (six).** Hydroxide OH⁻, nitrate NO₃⁻, carbonate CO₃²⁻, sulfate SO₄²⁻, phosphate PO₄³⁻, ammonium NH₄⁺. The narration says names and charges; the formulae are on screen (spoken polyatomic formulae are hard to follow in TTS). Learned by heart: the HSC data sheet does not list them (author note e).
- **Spoken formulae.** Formulae are read once each where the subscript is the point ("M g C l two", "A l two O three", "F e two O three", "C a C l two", "M g three N two"), as v07 did; the names carry the rest. Open decision 2 gives the fallback.
- **Attempts (original wording, HSC style).** A1: formulae of magnesium nitride and aluminium sulfate (2 marks), with the group numbers and the sulfate ion on the card. Answers Mg₃N₂ and Al₂(SO₄)₃. Crossed: "Al₂SO₄₃" (no brackets). A2: copper's charge in CuO and Cu₂O, and why copper forms two oxides but sodium only one (3 marks; site Q7 reworded to oxides). Answers +2, +1; transition metal. Crossed: "Cu₂O: copper is 2+".
- **Mistake scene:** none separate. "Change the charge to make it fit" (13); "MgO is Mg₂O₂" (6); "CaNO₃₂" (12); "the subscript is the charge" (crossed in 17); "every metal has one fixed charge" (8); "no brackets needed" (crossed in 15).
- **Handoff (route next: `chem-y11-m1-v20`, "How do we name an inorganic compound from its formula?").** Scene 18 flips the direction: given FeCl₃, Cu₂O, Ca(NO₃)₂ and CO₂, how do we say the name, and what does a Roman numeral mean? Final frame in its own section.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l19-from-electron-configuration-to-ion-charge-title`, isoelectronic list: "Si⁴⁺ [Ne] ... (rare, very high IE)". Si⁴⁺ is not a real ion in compounds; silicon bonds covalently. Suggest removing it or marking "hypothetical; silicon shares electrons".
  2. Same section: "P³⁻ [Ar]" listed alongside S²⁻ and Cl⁻ without comment. P³⁻ is rare outside metal phosphides; acceptable as the group pattern. No change needed.
  3. `l19-iupac-nomenclature-rules-title`, covalent row: "N₂O₄ → dinitrogen tetroxide". Acceptable; current IUPAC wording is "dinitrogen tetraoxide". Noted for v20 (author note there).
  4. Activity 2B: "|Δχ|(C–Cl) = 3.2 − 2.6 = 0.6 (0.4–1.7)" uses lesson 18's thresholds; consistent. No change.
- **Cause chain taught, in order:** (1) main-group atoms lose or gain electrons to reach the nearest noble gas arrangement (2); (2) atoms in a group share an outer-electron count, so they share an ion charge (3); (3) a compound has no overall charge (4); (4) so ions combine in the ratio where total positive equals total negative (4, 5); (5) a formula is the simplest such ratio (6); (6) transition metals can lose different numbers of electrons, so their charge must come from the name or the formula (8 to 10); (7) a polyatomic ion stays together, so a subscript for more than one needs brackets (11, 12).
- **Entry knowledge:** v08 (ions: charge = protons − electrons); v11 (subshells, named only); v12 (valence electrons per group; metals at the left, non-metals at the right; noble gases); v18's final frame (Na⁺, Cl⁻).
- **Learner-visible vocabulary:** ion (an atom or group of atoms with a charge, recalled from v08); noble gas arrangement (the full outer shell of the nearest noble gas, 2); cation (a positive ion, 3); anion (a negative ion, 3); ionic compound (a compound made of positive and negative ions, 4); subscript (the small number after a symbol, saying how many, 4); simplest ratio (the smallest whole numbers in the same proportion, 6); transition metal (a metal from the middle block of the table, 8); polyatomic ion (a group of bonded atoms that carries an overall charge, 11).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **shell atoms** (v13's ring style; an outer electron lifts off or drops in, and the "+" or "−" charge tag writes in teal); **ion cards** (symbol with charge, cation cards warm, anion cards cool); **charge tally** (two pans of a simple level bar: positive charges stack in red at the left, negative in blue at the right; the bar levels and a "0" ticks when they balance; each added ion card drops a charge block); **crossover arrows** (two curved pen arrows carrying each charge number down to the other ion's subscript); **group strip** (a coded periodic outline with groups 1, 2, 13 to 18 marked and their charges); **polyatomic tiles** (each ion as a bracketed tile that moves as one piece; a duplicated tile picks up an outside subscript); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; task strip under it; ion strip and charge tally at the centre; formula result at the right; plates at the left when used.
- **Simulation (Revision 2): the ion counter.** The charge tally becomes a live control: two steppers under the pans, "cations ×1, ×2, ×3" and "anions ×1, ×2, ×3", each step dropping one ion card into its pan. Three readouts sit above the bar at 52 px: "total + " (red), "total − " (blue) and "sum" (ink, turning green at 0). The bar tilts live toward the heavier charge. In scene 5 the steppers search aloud for aluminium oxide (1 : 1 gives +3 − 2 = +1, tipped; 1 : 2 gives −1; 2 : 2 gives +2; 2 : 3 gives 0, level). In scene 9 the cation card is switched from Fe³⁺ to Fe²⁺ and the counter re-levels at 1 : 1, so the student sees one change of charge change the formula.
- **Colour roles (Revision 2, fixed for the whole video):** positive charge, cation pans and readouts red; negative charge, anion pans and readouts blue; ion charges on symbols teal; subscripts (the "how many" numbers) amber, from the "2 : 3" in the hook to every formula; polyatomic tiles violet with ink brackets; the sum readout ink, green at zero; givens strips navy; framed answers dark-ink box with a green tick; crossed slips red strike with a red hand tag; hand-font tags take the colour of what they mark.
- **Type sizes (Revision 2, 1080p):** the current formula or working line at least 44 px (formula results 64 px); counter readouts about 52 px; ion cards and supporting lines 32 to 36 px; hand tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.

Author notes (not learner copy):
(a) Ion charges from the site table; the noble gas arrangement is the Stage 5 shell model (Na 2,8,1 → Na⁺ 2,8; O 2,6 → O²⁻ 2,8; Cl 2,8,7 → Cl⁻ 2,8,8; Al 2,8,3 → Al³⁺ 2,8; Mg 2,8,2 → Mg²⁺ 2,8; N 2,5 → N³⁻ 2,8). Xenon and krypton form a few compounds (site), and noble-gas ions can be made (v14's ionisation energies). Revision 2: learner copy says noble gases "usually stay neutral".
(b) Rust is mainly hydrated iron(III) oxide, Fe₂O₃·xH₂O, with iron oxyhydroxides such as FeO(OH); it has no single fixed formula. Revision 2 learner copy: rust "contains an iron oxide with two irons for every three oxygens"; the worked example is iron(III) oxide, Fe₂O₃, with a grey tag "rust also holds water". The water of crystallisation (v07) is not raised.
(c) Fe²⁺ [Ar]3d⁶ and Fe³⁺ [Ar]3d⁵ (4s lost first); Cu⁺ [Ar]3d¹⁰, Cu²⁺ [Ar]3d⁹ (site). Not taught; the cause is one sentence. Zinc (Zn²⁺) and silver (Ag⁺) are d-block metals with one common charge; lead and tin (Pb²⁺/Pb⁴⁺, Sn²⁺/Sn⁴⁺) are p-block metals with two (v20 names them).
(d) "Always simplify" holds for ionic formulae. Peroxides (Na₂O₂, the O₂²⁻ ion) and mercury(I) (Hg₂²⁺) are exceptions where the formula is not cancelled; not met in Module 1.
(e) The NESA Chemistry data sheet (2017 course) has no table of polyatomic ions; students learn them. Phosphate is PO₄³⁻ (orthophosphate).
(f) Magnesium nitride, Mg₃N₂, forms when magnesium burns in air (minor product beside MgO). Not mentioned to learners.
(g) Pronunciations: "cation" (CAT-eye-on); "anion" (AN-eye-on); "polyatomic" (polly-a-TOM-ick); "sulfate" (SUL-fate); spoken formulae as letters and numbers ("A l two O three" read "A-L two O three").

Main question: *How do ion charges determine a neutral inorganic formula?*
Entry knowledge: v08, v11, v12, v18.
Stops after: ion charges by group, the neutrality rule, binary formulae with the shortcut, variable charges (forwards and backwards), six polyatomic ions with brackets. No names or Roman numerals, no Lewis diagrams, no lattice.
Handoff: chem-y11-m1-v20, naming inorganic compounds.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v08 and v18; Revision 2 colour roles and type sizes in Decisions): protons and positive charge red; electrons and negative charge blue; ion charges teal on symbols; cation cards warm cream with a red edge; anion cards cool grey with a blue edge; the charge tally's "0" tick green; polyatomic tiles outlined in violet with their brackets ink; crossed chips red strike. Screen notation: Na⁺, Mg²⁺, Al³⁺, O²⁻, N³⁻, SO₄²⁻, Ca(NO₃)₂, Al₂O₃.

### 1. hook: salt and rust
> Last time, sodium lost an electron to become a plus one ion, and chlorine gained one to become minus one. Put them together and you get salt, sodium chloride, with one sodium ion for every chloride **ion**. Rust is different. It contains an iron oxide with two irons for every three **oxygens**. Why those numbers? The answer is in the charges on the **ions**.

Visual: opens on v18's final frame (Decisions). The nucleus at the left fades. On "ion" (first) the line completes, "Na⁺ + Cl⁻ → NaCl" (64 px), with a teal tally "+1 − 1 = 0", and `y11c-watch-glass-salt-v1.png` (about 360 px wide, solid) sets down below it, amber hand tag "1 : 1" with a pen arrow from the crystals to "NaCl". On "oxygens" `y11c-rusty-nail-v1.png` (about 520 px wide, solid) slides in at the right, label "iron oxide in rust: Fe₂O₃" with a small grey tag "rust also holds water", and the "2" and "3" subscripts glow amber with a red pen ring and a chip "2 : 3, why?". On "ions" (last) the heading writes on: "Ion charges: how they decide a formula".

### 2. why atoms form the ions they do
> First, why does each atom form the ion it does? Atoms of the main groups tend to lose or gain electrons until they have the same arrangement as the nearest noble gas, with a full outer **shell**. Sodium is two, eight, one. Losing that one outer electron leaves two, eight, like neon, so sodium forms a plus one **ion**. Oxygen is two, six. Gaining two electrons makes two, eight, so oxygen forms an oxide ion, with a charge of minus **two**. The charge is just protons minus **electrons**.

Visual: board clears to two shell atoms. On "shell" a neon shell model (2, 8) appears faintly between them, tag "nearest noble gas: a full outer shell". On "ion" (first) sodium's single outer electron lifts away and its outer ring disappears; the atom now matches neon's rings, and "Na⁺" writes in teal. On "two" oxygen's outer ring takes two blue electrons and becomes "O²⁻", matching neon. On "electrons" tallies write under each: "Na⁺: 11 protons, 10 electrons: +1" and "O²⁻: 8 protons, 10 electrons: −2". Grey tag at the side: "the octet rule: a model for main-group ions". Hand tags: red "lose 1" with a pen arrow on sodium's departing electron, blue "gain 2" on oxygen's new pair, ink "same as neon" with a pen bracket joining both ions to the neon rings.

### 3. the group decides the charge
> Because atoms in a group have the same number of outer electrons, they form ions with the same charge. Groups one, two and thirteen lose one, two or three electrons, so their ions are plus one, plus two and plus **three**. Groups fifteen, sixteen and seventeen gain three, two or one, so they form minus three, minus two and minus **one**. Metals form positive ions, called cations. Non-metals form negative ions, called **anions**. Group fourteen usually shares electrons instead, and noble gases usually stay **neutral**.

Visual: board clears to the coded group strip (a periodic outline with groups 1, 2 and 13 to 18 shaded). On "three" (first) charge chips drop onto groups 1, 2 and 13: "+1, +2, +3" (red), with examples "Na⁺, Mg²⁺, Al³⁺". On "one" (last in its sentence) chips drop onto 15, 16 and 17: "−3, −2, −1" (blue), with "N³⁻, O²⁻, Cl⁻". On "anions" the left block tags "metals: cations (+)" and the right block "non-metals: anions (−)". On "neutral" group 14 gets a grey tag "usually shares electrons" and group 18 "usually neutral". Hand tags: red "lose" over the left block and blue "gain" over the right block, each with a pen arrow toward the noble-gas column. The strip shrinks to the top right and stays as a reference to scene 7.

### 4. the rule: no overall charge
> Now the key rule. An ionic compound is made of positive and negative ions, but as a whole, it has no overall charge. A grain of salt isn't charged. So the ions must combine in a ratio where the positive charges exactly cancel the negative **ones**. Sodium is plus one, chloride is minus one, so one of each. Magnesium is plus two, so it needs two chloride ions to cancel it. That's M g C l **two**. The small number written after a symbol, called a subscript, tells you how many of that ion are in the **formula**.

Visual: the charge tally draws at the centre (a level bar with a red pan at the left and a blue pan at the right). On the second sentence a salt grain from the hook enlarges with a grey tag "no overall charge". On "ones" a rule line writes: "total positive charge = total negative charge". On the fourth sentence a Na⁺ card drops a red "+1" block and a Cl⁻ card a blue "−1" block; the bar levels and ticks "0"; "NaCl" writes at the right. On the fifth sentence the board swaps to Mg²⁺: a "+2" block tips the bar; one Cl⁻ adds "−1" (still tipped); on "two" a second Cl⁻ card drops "−1", the bar levels, "0" ticks and "MgCl₂" writes. On "formula" the "₂" glows amber with a pen ring and the hand tag "subscript: how many of that ion". The tally is the ion counter from here on (Decisions): readouts "total +", "total −" and "sum" (52 px) update with every card; ink hand tag "level = no overall charge".

### 5. aluminium oxide
> Let's try a harder pair, aluminium and oxygen. Aluminium is in group thirteen, so it forms plus three ions. Oxide is minus **two**. We need the total positive charge to equal the total negative charge. The smallest number that both three and two go into is **six**. So two aluminium ions give plus six, and three oxide ions give minus **six**. The formula is A l two O three. Check: plus six and minus six make **zero**.

Visual: calculation layout. Task strip: "Formula of aluminium oxide". Ion strip (givens): "Al³⁺ (group 13)" and, on "two", "O²⁻ (group 16)". On the third sentence the tally's rule line glows. From the scene's first frame the ion counter holds one Al³⁺ and one O²⁻ card, tipped, readouts "+3", "−2", "sum +1". On the third sentence the steppers search live: anions ×2 ("sum −1", tips the other way), cations ×2 ("sum +2"), each tilt with a red or blue hand tag "too much +" or "too much −". On "six" (first) a working line writes at 44 px: "3 and 2 both go into 6". On "six" (second) the anion stepper reaches ×3: readouts "total + +6" and "total − −6", the bar levels and "sum 0" turns green. On "The formula is" "Al₂O₃" writes at the right (64 px), the "₂" and "₃" amber, framed in a dark-ink box. On "zero" the tally writes "+6 − 6 = 0" and ticks; amber hand tag "2 : 3" with a pen arrow from the stepper counts to the subscripts.

### 6. a shortcut, and simplest ratio
> There's a quicker way to the same answer. Write the two charges, then cross them over, so each ion's charge number becomes the other ion's **subscript**. Aluminium three and oxygen two give A l two O three. But always simplify. Magnesium plus two and oxide minus two cross over to M g two O two, which cancels down to M g **O**. A formula shows the simplest ratio of ions. Then check that the charges add to **zero**. Cross over, cancel down, check for zero.

Visual: board clears to "Al³⁺ O²⁻". On "subscript" two curved pen arrows carry the "3" down to oxygen's subscript and the "2" down to aluminium's: "Al₂O₃". On the third sentence a chip writes "always simplify". On the fourth sentence "Mg²⁺ O²⁻" crosses over to "Mg₂O₂" (grey); on "O" it cancels to "MgO", with "÷ 2" beside it and the tag "simplest ratio of ions: 1 : 1". On "zero" the tally ticks "+2 − 2 = 0". A red hand tag "not Mg₂O₂" strikes the grey uncancelled form. On the last sentence the memory line writes in a framed card in hand lettering (48 px): "Cross over, cancel down, check for zero."

### 7. prediction (countdown, 3 seconds)
> Quick prediction. Calcium forms a plus two ion, and chlorine forms a minus one ion. What's the formula of calcium chloride? Have a **think**.

Visual: board clears to the ion strip "Ca²⁺" and "Cl⁻" with an empty tally. Chip "calcium chloride: formula?". On "think" the 3 s `Countdown` ring runs.

### 8. one charge or more?
> It's C a C l two, one calcium ion for every two chloride **ions**. Now, back to rust. Iron is a transition metal, and transition metals can often form more than one ion. Iron can lose two electrons or three, so it forms both iron two plus, and iron three plus **ions**. That's because its outer subshells are close in energy, so it can give up different numbers of electrons. So you can't read iron's charge from its group. The name tells you, or you work it out from the **formula**.

Visual: on "ions" (first) one Ca²⁺ and two Cl⁻ cards drop into the tally, it levels, and "CaCl₂" writes. Board clears to the group strip with the transition block shaded. On the third sentence an iron atom card appears with two possible arrows: "lose 2 electrons → Fe²⁺" and "lose 3 electrons → Fe³⁺"; on "ions" (second) both ion cards write in teal. On the fifth sentence a grey tag "outer subshells close in energy (v11)". On the sixth sentence the group strip's transition block gets a crossed chip "charge from the group?". The rusty nail returns small at the left with its label "iron oxide in rust". On "formula" two chips write: "from the name (next video)" and "from the formula"; ink hand tag "can't use the group" with a pen cross over the transition block.

### 9. iron oxides: same elements, different charge
> In rust's iron oxide, the iron ions are three plus, and oxide is minus two. That's the same pattern as aluminium oxide, so six is the target again. Two iron ions give plus six, three oxide ions give minus six, and the formula is F e two O **three**. With iron two plus, the charges cancel one to one, giving F e **O**. Same elements, different charge, different **formula**.

Visual: the rust plate (solid, about 420 px wide) stands at the left from the first frame with its label "iron oxide in rust". Task strip: "Formula of the iron oxide in rust (iron three plus oxide)". Ion strip: "Fe³⁺", "O²⁻". On the second sentence the aluminium oxide line from scene 5 appears small above, "Al₂O₃: 3 and 2 → 6". On "three" the ion counter steps to two Fe³⁺ and three O²⁻ cards; readouts "+6", "−6", "sum 0" (green); "Fe₂O₃" writes at 64 px, framed, with a pen arrow to the rust label. On "O" the cation card flips live from Fe³⁺ to Fe²⁺: the readouts jump ("total + +4", "sum −2"), the bar tips, red hand tag "charge changed", then the steppers fall to one of each, the bar levels, and "FeO" writes, framed. On "formula" both results sit side by side with the chip "same elements, different charge, different formula"; the hook's "2 : 3, why?" chip ticks.

### 10. working backwards from a formula
> You can also run this backwards. In F e C l three, each chloride is minus one, so three chlorides add up to minus **three**. The compound is neutral, so the one iron ion must be plus **three**. In F e C l two, the same reasoning makes iron plus **two**. Working backwards like this is exactly how we'll name these compounds next **time**.

Visual: board clears. Task strip: "Find iron's charge". Formula "FeCl₃". On "three" (first) three Cl⁻ cards fan out of the formula into the blue pan, "3 × (−1) = −3". On "three" (second) the red pan fills with "?" which resolves to "+3", the bar levels, and "Fe³⁺" writes. On "two" the same for "FeCl₂": "2 × (−1) = −2, so Fe²⁺". Each result ("Fe³⁺", "Fe²⁺") is framed in a dark-ink box; blue hand tag "3 × (−1)" with a pen ring round the "₃". On "time" a grey chip "the charge is the key to the name" writes.

### 11. polyatomic ions
> Some ions are made of several atoms bonded together, with an overall charge. These are called polyatomic ions. Hydroxide and nitrate each have a charge of minus **one**. Carbonate and sulfate are minus **two**. Phosphate is minus **three**. And ammonium is the positive one, plus **one**. Each stays together as a single unit, so you treat it just like one ion. You'll need to learn these six by **heart**.

Visual: board clears to a row of violet polyatomic tiles, each a bracketed formula with its atoms drawn small inside. On the first sentence a sulfate tile shows its five atoms joined, tag "polyatomic ion: bonded atoms with an overall charge". On "one" (first) tiles "OH⁻ hydroxide" and "NO₃⁻ nitrate" write. On "two" tiles "CO₃²⁻ carbonate" and "SO₄²⁻ sulfate". On "three" "PO₄³⁻ phosphate". On "one" (second) "NH₄⁺ ammonium" writes with a warm cation edge. On the sixth sentence each tile wobbles once as a single piece. On "heart" a grey tag: "not on the data sheet: learn these six". Hand tags: violet "one unit" with a pen loop round the sulfate tile, red "the only positive one" with a pen arrow to ammonium.

### 12. brackets
> Calcium nitrate shows how to use them. Calcium is plus two, and nitrate is minus one, so we need two nitrate ions. To show two of the whole group, put the nitrate in brackets, with the two **outside**. That's C a, bracket N O three, close bracket, **two**. Without brackets, the two would belong to the oxygen alone, changing the ion **itself**.

Visual: task strip: "Formula of calcium nitrate". Ion strip "Ca²⁺", "NO₃⁻". On the second sentence one Ca²⁺ card and two NO₃⁻ tiles drop into the tally; it levels "+2 − 1 − 1 = 0". On "outside" the two tiles merge into one bracketed tile with an outside "₂". On "two" "Ca(NO₃)₂" writes at the right, the brackets glowing. "Ca(NO₃)₂" is framed in a dark-ink box with a green tick, amber hand tag "2 of the whole ion" with a pen bracket. On "itself" a version "CaNO₃₂" writes below and is struck in red, with a pen arrow to its "O₃₂" and a red hand tag "not 32 oxygens: brackets keep the ion whole".

### 13. one rule to keep
> So the method is always the same. Find each ion's charge. Choose how many of each ion, so the total charge is zero. Then write the simplest ratio. Never change an ion's charge, or the atoms inside a polyatomic ion, to make the numbers fit. Change only how many ions you **use**.

Visual: board clears to a three-step strip writing as spoken: "1. charges", "2. totals to zero", "3. simplest ratio". On the fifth sentence a small "SO₄²⁻ → SO₃²⁻?" and "Al³⁺ → Al²⁺?" write grey and are crossed. On "use" a chip writes: "change how many ions, never the ions", with an amber hand tag "change these" pointing at the subscripts of "Al₂O₃" and a red "never these" pointing at its charges. The framed memory card "Cross over, cancel down, check for zero." sits under the strip. Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Write the chemical formulas of magnesium nitride, the compound of magnesium and nitrogen, and aluminium sulfate. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Write the chemical formula of: (a) magnesium nitride, the compound formed from magnesium and nitrogen; (b) aluminium sulfate. Data: Mg is in group 2, N in group 15 and Al in group 13; the sulfate ion is SO₄²⁻. (2 marks)" Picture on the card's right: `y11c-sample-magnesium-ribbon-v1.png` (about 240 px, uniform scale). Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no group strip charges, no tiles).

### 15. feedback 1 (brief)
> Magnesium is plus two, and nitride is minus three. Six is the target, so three magnesium ions and two nitride ions, M g three N **two**. Aluminium is plus three, and sulfate is minus two, so six again. That's two aluminium ions and three sulfate ions, written A l two, bracket S O four, close bracket, **three**. Leaving out the brackets is the **slip**.

Visual: card shrinks to the top with its picture kept small. A navy givens strip on the answer side: "Mg²⁺ (group 2), N³⁻ (group 15) | Al³⁺ (group 13), SO₄²⁻". Rows write at 44 px: "(a) Mg²⁺, N³⁻: 3 × (+2) = +6, 2 × (−3) = −6"; on "two" "Mg₃N₂", framed with a green tick. "(b) Al³⁺, SO₄²⁻: 2 × (+3) = +6, 3 × (−2) = −6"; on "three" "Al₂(SO₄)₃", framed, brackets glowing. On "slip" a chip "Al₂SO₄₃" fades in and is struck in red, red hand tag "brackets around the whole ion". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Copper forms two oxides, C u O and C u two O. Work out the charge on the copper ion in each, and explain why copper can form two oxides, when sodium forms only one. Pause here to answer.

Visual: `QuestionCard`: "Copper forms two oxides, CuO and Cu₂O. The oxide ion is O²⁻. (a) Determine the charge on the copper ion in each oxide. (b) Explain why copper can form two different oxides, while sodium forms only one, Na₂O. (3 marks)" Picture on the card's right: `y11c-copper-oxide-black-v1.png` and `y11c-copper-oxide-red-v1.png` side by side (about 220 px each, uniform scale), captioned "CuO (black)" and "Cu₂O (red)". Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> In C u O, one oxide ion is minus two, so the copper is plus **two**. In C u two O, one oxide ion is shared by two coppers, so each copper is plus **one**. Copper is a transition metal, so it can lose one electron or two. Sodium always loses just its one outer electron, so it only forms plus one. Reading the two in C u two O as copper's charge is the **trap**.

Visual: card shrinks to the top with its two oxide pictures kept small. A navy givens strip on the answer side: "O²⁻ = −2 | CuO, Cu₂O | Na₂O". Rows write at 44 px: "CuO: −2 from O, so Cu²⁺" on "two", "Cu²⁺" framed; "Cu₂O: −2 shared by 2 Cu, so each Cu⁺" on "one", "Cu⁺" framed; then "copper: transition metal, can lose 1 or 2 electrons"; then "sodium: loses only its 1 outer electron, Na⁺ only". On "trap" a chip "Cu₂O: copper is 2+" fades in and is struck in red, red hand tag "the subscript counts ions; it isn't the charge". Hold about 1 second.

### 18. handoff: from formula to name
> So charges decide formulas. Now flip it around. If you're handed a formula, like F e C l three, or C u two O, or C O two, how do you say its name, so that everyone knows exactly which compound you **mean**? And what does a Roman numeral in a name really tell you? That's next **time**.

Visual: board clears to four formula cards in a row: "FeCl₃", "Cu₂O", "Ca(NO₃)₂", "CO₂", each with a grey "name?" tag under it. On "mean" the first three cards (ionic) get small teal charge tags from this video ("Fe³⁺", "Cu⁺", "Ca²⁺ with NO₃⁻") and CO₂ gets a grey tag "no ions?". On "time" a faint "( III )" writes above FeCl₃ with a "?" and the chip writes: "Next: how do we name an inorganic compound from its formula?". Hold about 2 seconds. This is the final frame (v20 opens on it).

### 19. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Ions take the nearest noble gas arrangement.
2. Groups 1, 2, 13: +1, +2, +3. Groups 15, 16, 17: −3, −2, −1.
3. Total charge = 0; write the simplest ratio (Al₂O₃, MgO).
4. Transition metals vary: FeCl₃ is 3 × (−1), so Fe³⁺.
5. OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻, NH₄⁺; brackets: Ca(NO₃)₂.

Memory aid (framed card under the notes, hand lettering as in scene 6): *Cross over, cancel down, check for zero.* Notes 34 px in the role colours (positive red, negative blue, subscripts amber); no paragraphs. The quiet hold runs about 45 s after the spoken line.

## Final frame

The handoff board of scene 18, held about 2 seconds: four formula cards in a row, "FeCl₃", "Cu₂O", "Ca(NO₃)₂", "CO₂", each with a grey "name?" tag under it; small teal charge tags above the first three ("Fe³⁺", "Cu⁺", "Ca²⁺ with NO₃⁻") and a grey "no ions?" tag above CO₂; a faint "( III )" with a "?" above FeCl₃; heading "Ion charges: how they decide a formula" dimmed; the chip "Next: how do we name an inorganic compound from its formula?". v20 opens on this frame.

## Teaching checks

- **Does it explain causes?** Why atoms form particular ions: to reach a noble gas arrangement (2). Why a group shares a charge: the same outer-electron count (3). Why the ratio is fixed: the compound has no overall charge (4). Why iron has two formulae: it can lose two or three electrons (8, 9). Why brackets: a polyatomic ion stays whole (12).
- **Misconceptions addressed:** change the charge to make it fit (13); not simplifying (6); every metal has one charge (8); the subscript is the charge (crossed in 17); missing brackets (12, crossed in 15).
- **One idea at a time:** ions (2, 3), the neutrality rule (4), one worked pair (5), the shortcut (6), variable charge (8 to 10), polyatomic ions (11, 12), the method (13).
- **Video makes it easier:** the charge tally levels visibly as ion cards drop in; the crossover arrows carry each number; polyatomic tiles move as single pieces and pick up an outside subscript.
- **Response opportunity:** prediction (3 s); two unseen tasks with every condition on the card; 10 s each. Feedback about 27 s and 28 s.
- **Avoided double teaching:** ion charge from protons and electrons (v08) in one sentence; valence electrons by group (v12) recalled; subshells (v11) named only.
- **Syllabus coverage:** `C1-IQ4-02` "using nomenclature, valency and chemical formulae" (valency as ion charge and formulae); `C1-IQ1-02` begun (formula from ions; names in v20).
- **Out of scope by design:** naming and Roman numerals (v20); covalent formulae and prefixes (v20); Lewis diagrams (v21); transition-metal ion configurations (author note c).

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style).** "Write the chemical formula of: (a) magnesium nitride, the compound formed from magnesium and nitrogen; (b) aluminium sulfate. Data: Mg is in group 2, N in group 15 and Al in group 13; the sulfate ion is SO₄²⁻. (2 marks)"
Model answer: (a) Mg²⁺ and N³⁻; 3 × (+2) = +6 and 2 × (−3) = −6, so Mg₃N₂ (1). (b) Al³⁺ and SO₄²⁻; 2 × (+3) = +6 and 3 × (−2) = −6, so Al₂(SO₄)₃ (1). Classic mistake (crossed): "Al₂SO₄₃" (no brackets).

**Attempt 2 (scene 16; original wording, HSC style).** "Copper forms two oxides, CuO and Cu₂O. The oxide ion is O²⁻. (a) Determine the charge on the copper ion in each oxide. (b) Explain why copper can form two different oxides, while sodium forms only one, Na₂O. (3 marks)"
Model answer: (a) In CuO, one O²⁻ (−2) balances one copper ion, so Cu²⁺; in Cu₂O, one O²⁻ (−2) is balanced by two copper ions, so each is Cu⁺ (1 each). (b) Copper is a transition metal, which can lose different numbers of electrons (one or two) because its outer subshells are close in energy; sodium has one outer electron, and losing it gives the noble gas arrangement of neon, so it forms only Na⁺ (1). Classic mistake (crossed): "Cu₂O: copper is 2+".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Na, Na⁺ | 2,8,1 → 2,8; 11 protons, 10 electrons; +1 | 1, 2, 4 |
| O, O²⁻ | 2,6 → 2,8; 8 protons, 10 electrons; −2 | 2 |
| Group charges | 1: +1; 2: +2; 13: +3; 15: −3; 16: −2; 17: −1 | 3, 19 |
| NaCl | +1 − 1 = 0 | 1, 4 |
| MgCl₂ | +2 − 1 − 1 = 0 | 4 |
| Al₂O₃ | 2 × (+3) = +6; 3 × (−2) = −6; sum 0 | 5, 6 |
| MgO | Mg₂O₂ ÷ 2 = MgO; +2 − 2 = 0 | 6 |
| CaCl₂ | +2 − 1 − 1 = 0 | 7, 8 |
| Fe₂O₃, FeO | 2 × (+3) + 3 × (−2) = 0; +2 − 2 = 0 | 1, 9 |
| FeCl₃, FeCl₂ | 3 × (−1) = −3, so Fe³⁺; 2 × (−1) = −2, so Fe²⁺ | 10 |
| Polyatomic ions | OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻, NH₄⁺ | 11, 19 |
| Ca(NO₃)₂ | +2 − 1 − 1 = 0 | 12 |
| Mg₃N₂ (A1) | 3 × (+2) = +6; 2 × (−3) = −6 | 14, 15 |
| Al₂(SO₄)₃ (A1) | 2 × (+3) = +6; 3 × (−2) = −6 | 14, 15 |
| CuO, Cu₂O (A2) | Cu²⁺; Cu⁺ | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

- Every formula's charge sum is zero (checked by script, 5 November): NaCl, MgCl₂, Al₂O₃, MgO, CaCl₂, Fe₂O₃, FeO, FeCl₃, FeCl₂, Ca(NO₃)₂, Mg₃N₂, Al₂(SO₄)₃, CuO, Cu₂O, Na₂O.
- Shell arrangements: Na 2,8,1; O 2,6; Mg 2,8,2; Al 2,8,3; N 2,5; Cl 2,8,7; Ne 2,8.
- Group numbers: Na 1, Mg 2, Ca 2, Al 13, N 15, O 16, Cl 17.
- Polyatomic ion formulae and charges as listed.

## Memory aid check

- **"Cross over, cancel down, check for zero."** Written for this lesson. Meaning, as said in scene 6: swap the charge numbers into subscripts, divide by any common factor, then confirm total charge is zero. Assumptions checked: it works for two single ions, or with a polyatomic ion kept in brackets (scene 12, A1(b)); "cancel down" is right for ionic formulae in this course (author note d gives the peroxide and mercury(I) exceptions, not met); "check for zero" carries the real cause (neutrality), so the shortcut never replaces the rule. It helps a new case: any pair of ions, A1 directly.
- **Considered, not used:** "the criss-cross method" as a named rule without the check (students then miss the cancel step).

## Narration length estimate

Revision 2 count (7 November; build parser rules, the total is the sum of the 19 scene strings): **6,350 characters** (Revision 1 was 6,359 as a sum, stated 6,377 with the joining spaces). At 13.3 characters per second the speech is about 477 s; add about 3 s for the tally levelling in scenes 4, 5 and 9, 3 s for the ion-counter search in scene 5 and the charge flip in scene 9 to settle, 2 s for the scene 13 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s of quiet notes hold: **about 557 s**, inside 5,500 to about 7,000 characters and under 570 s.

Revision 1 estimate (superseded): **6,377 characters**, 19 scenes. At 13.3 characters per second the speech is about 479 s; add about 3 s for the tally levelling in scenes 4, 5 and 9, 2 s for the scene 13 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s): **about 566 s**, inside the band and just under the 570 s cap. Reserve trims: scene 10's last sentence (keep the chip), scene 12's last sentence (keep the crossed version silent), scene 3's last sentence (keep the tags).

## Scene list and build ids

Lesson key `c-y11-m1-v19` (route chem-y11-m1-v19; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v19`.

In order (19 scene headings, all `### N.`): hook, why-ions, group-charges, neutrality, aluminium-oxide, shortcut, prediction, variable-charge, rust, backwards, polyatomic, brackets, method, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 clear change (the plates slide off); 2 to 3 camera pull back to the group strip; 3 to 4 camera continue (strip shrinks to the top right, the tally draws); 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera continue then clear to the strip; 8 to 9 camera continue (the rust plate returns); 9 to 10 clear change; 10 to 11 clear change to the tiles; 11 to 12 camera continue; 12 to 13 clear change; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 45 s quiet). Revision 2: the longest unchanged set-up is scenes 4 and 5 on the ion counter (about 68 s), and the counter itself changes with every step. Review evidence paths: `checks/c-y11-m1-v19-learning-review.md`, `checks/c-y11-m1-v19-science-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/chemistry/y11c-watch-glass-salt-v1.png` (inspected 7 November: dry white cubic crystals on a watch glass): scenes 1, 4 (Revision 2 replaces `c1-salt-jar-crystals-v1.png`, which on inspection shows crystals under water and reads as a solution).
- `public/assets/chemistry/y11c-rusty-nail-v1.png` (brief 179, inspected 7 November: a rusted nail with flakes, grey steel at the head): scenes 1, 8, 9.
- `public/assets/chemistry/y11c-sample-magnesium-ribbon-v1.png` (inspected: coiled ribbon on a watch glass): attempt 1 card picture.
- `public/assets/chemistry/y11c-copper-oxide-black-v1.png` and `y11c-copper-oxide-red-v1.png` (brief 179, v20's pair; inspected: black and red powders on matching watch glasses): attempt 2 card picture.
- **Considered, not used:** `m6-marble-chips-acid-v1.png` (carbonate, but fizzing in acid: a reaction this video doesn't teach); `m5x-ppt-feoh3-brown-v1.png` (an iron(III) hydroxide precipitate in a tube; reads as a test result, not rust).

Need: none (Revision 2). `y11c-rusty-nail-v1.png` was delivered in brief 179.

Coded: shell atoms, ion cards, the charge tally and ion counter with its steppers and readouts, crossover arrows, the group strip, polyatomic tiles, formula cards, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M1 v19)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m1-v19.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Transparent PNG with a true alpha channel and clean edges with no coloured fringe or halo (check on a black and a white background), ink and watercolour in the house style, matched to `c1-salt-jar-crystals-v1.png` in line weight, at least 8 per cent clear margin, no text, labels, logos, people, hands, faces or backdrop. No ground shadow. Never stretch; keep the native aspect ratio.

1. Delivered in brief 179 (no further painting). `y11c-rusty-nail-v1.png` (1800 × 1000 px): one large steel nail lying on its side, seen from slightly above, heavily rusted along most of its length: flaky orange-brown and reddish-brown rust with darker patches, a little grey steel still showing near the head; a few loose rust flakes beside it. No water, no bench, no background.

Report inspection on the paper and dark board backgrounds at about 400 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m1-v19-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every charge sum under "Numbers to verify", and every formula on screen against "Numbers used".
2. Confirm the science of every learner-visible claim: ion charges by group; noble gas arrangements; group 14 usually shares; noble gases usually stay neutral; Fe²⁺/Fe³⁺ and Cu⁺/Cu²⁺; the subshell cause sentence; rust contains an iron oxide (Fe₂O₃, iron(III) oxide) but has no single formula; the six polyatomic ions and charges; the data sheet does not list polyatomic ions.
3. Confirm the memory aid's assumptions.
4. Confirm both attempt cards are original, carry every condition, and show nothing answer-bearing.
5. Confirm the syllabus quotes match the ledger.
6. Confirm no person, hand or face is drawn or requested.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("aluminium", "sulfate").
8. Confirm the narration character count by script.
9. Confirm the opening frame equals v18's final frame and the final frame matches v20's opening.

## YouTube metadata (draft)

Title: Writing Ionic Formulas from Ion Charges (Including Polyatomic Ions) | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson19.sa.html

Salt is NaCl, but the iron oxide in rust is Fe₂O₃. Why those numbers? Learn why atoms form the ions they do, how the group predicts the charge, why an ionic compound's charges must add to zero, a quick crossover method (and why you must simplify), how to handle iron and copper ions with more than one charge, and how to use brackets for polyatomic ions like nitrate and sulfate. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"investigate the nomenclature of inorganic substances using International Union of Pure and Applied Chemistry (IUPAC) naming conventions"
"investigate the differences between ionic and covalent compounds through:
- using nomenclature, valency and chemical formulae (including Lewis dot diagrams) (ACSCH029)"

Previous: How to balance nuclear equations. Next: How to name an inorganic compound from its formula.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Backwards step in v19 (root).** Scene 10 (charge from a formula) overlaps the start of v20's Stock numerals. Kept because attempt 2 needs it and it makes v20 a naming video only; v20 recalls it in one sentence.
- **2. Spoken formulae (root, listening).** Five formulae are read as letters and numbers. If the Google voice mangles them, replace with the names only ("magnesium chloride", "aluminium oxide") and keep the formula on screen.
- **3. Polyatomic list (root).** Six ions (hydroxide, nitrate, carbonate, sulfate, phosphate, ammonium). Add hydrogen carbonate or acetate (ethanoate) only if the school course requires them in Module 1.
- **4. Rust plate (root).** Delivered (brief 179); closed.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is scene 4's "a grain of salt isn't charged" enough evidence; do scenes 8 to 10 carry one idea or three; is the six-ion list too much for one scene), then the science check and Codex error check.
- Checker output (5 November): narration 6,377 characters; per scene (1 to 19): 368, 473, 509, 502, 404, 446, 137, 472, 349, 322, 386, 333, 274, 145, 342, 196, 349, 277, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (7 Nov 2026)

Findings from `../checks/c-y11-m1-v19-learning-review.md` and `../checks/c-y11-m1-v19-science-check.md` (brief 179; 0 blockers, 3 should fix):

1. **Rust is not pure Fe₂O₃ (should fix):** the nail stays as context. Scene 1 now says rust "contains an iron oxide with two irons for every three oxygens" (funded by cutting "But" and "Rust is mostly iron oxide, and its formula has"); the label reads "iron oxide in rust: Fe₂O₃" with a grey tag "rust also holds water". Scene 9 is retitled "iron oxides", its task strip asks for "the iron oxide in rust (iron three plus oxide)" and the speech says "In rust's iron oxide". Scope line, author note b, the error-check brief and the YouTube line match.
2. **Noble gases (should fix):** "noble gases don't form ions at all" became "noble gases usually stay neutral" (scene 3; cue "neutral", tag "usually neutral"); author note a and the error-check brief match.
3. **Al₂O₃ reveal timing (should fix):** the formula now writes on "The formula is", after the ion counts. No speech change.

Visual upgrade (`../maths-visual-standard.md`, build-agent-brief root rules):
- Scene 1: painted salt (`y11c-watch-glass-salt-v1.png`, replacing the jar that reads as a solution) and the delivered rusty nail, both solid, with hand tags and pen marks.
- Live simulation: the ion counter (cation and anion steppers, "total +", "total −" and "sum" readouts at 52 px, a tilting bar). It searches 1 : 1, 1 : 2, 2 : 2 and 2 : 3 for aluminium oxide in scene 5, and in scene 9 the cation flips from Fe³⁺ to Fe²⁺ and the counter re-levels at 1 : 1. Sums checked by script: 3 − 2 = +1, 3 − 4 = −1, 6 − 4 = +2, 6 − 6 = 0; 4 − 6 = −2 (after the flip, before re-levelling), 2 − 2 = 0.
- Hand tags and pen marks added to scenes 1 to 6 and 8 to 13; framed answers with green ticks and red-struck slips with red hand tags in 5, 6, 9, 10, 12, 15 and 17; navy givens strips on the answer side of 15 and 17.
- Question cards carry pictures: magnesium ribbon (attempt 1); black CuO and red Cu₂O (attempt 2).
- Memory aid framed in scene 6, 13 and on the notes screen; key notes cut to five short bullets with a 45 s quiet hold.
- Colour roles and type sizes stated in Decisions.
- New plates: none. All plates exist and were inspected.

Narration: 6,350 characters as the sum of the 19 scene strings (Revision 1: 6,359 as a sum, 6,377 stated with joining spaces); about 557 s with holds. Bold cues quoted in spoken order; no em dashes.
