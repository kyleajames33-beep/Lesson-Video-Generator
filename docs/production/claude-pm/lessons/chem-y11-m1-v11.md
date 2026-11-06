# Year 11 Chemistry M1 V11: Electron configuration and spdf notation. How does spdf notation locate the electrons in an atom? (design)

Status: Revision 3 (7 Nov 2026): brief 186 error check clean (root confirmed); headline count restated as the sum of scene strings. Ready to voice. Previously Revision 2 (6 Nov 2026): brief 178 review repairs applied. Needs a Codex error check before voicing. Summary: count corrected to the joined parser convention. Narration 5,830 characters (joined parser count), about 529.4 s. Previously Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,812 characters (sum of scene strings; 5,830 with joining spaces; Revision 1 was 5,830 by the joined parser count), 19 scenes, about 529.4 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eleventh core video of Year 11 Chemistry (2017 syllabus), Module 1, playlist entry 14, after the three Working Scientifically videos. Templates: `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (asset brief format); chemistry conventions from `chem-y11-m1-v10.md` (its energy-level staircase and the s, p, d, f chips are the starting point). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m1-v11` in `../../programme/chem-y11-route-inputs.json` (stop: "Build subshell occupancy using capacities, filling order and unpaired electrons; check P, Fe and Cl. Stop before ion-removal order in transition metals."). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson16.sa.html` (SHA256 `1f62b2fec083361eaa2187bcb30a08332c32c03294713cc4f101b1695a90692f`, recomputed, matches the route). Used: `l16-subshells-orbitals-and-electron-capacity-title` (orbital counts 1, 3, 5, 7; capacities 2, 6, 10, 14; 2n²), `l16-the-aufbau-filling-order-title` (order to 4p; 4s before 3d; write in level order), `l16-the-three-rules-aufbau-pauli-hund-s-title` (the three rules; noble-gas shorthand), `l16-worked-examples-title` (phosphorus and iron exactly; the chlorine misconception example), the site's running totals "2 → 4 → 10 → 12 → 18 → 20 → 26" and its hook (potassium's outer electron "skips into a new shell"). Site correction applied: item 11 of `../site-corrections-chem-y11.md` (chlorine's 3p⁵ has two paired orbitals and one singly occupied orbital).

Owner rules applied: one main learner question; no people, hands or faces (the site's "student" appears only in question text; Hund's rule is taught with boxes and repulsion, not a bus-seat analogy with people); everything here is an abstract model, so all visuals are coded (energy ladder, orbital boxes, arrows, notation, periodic table outline); 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame.

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ2-02`), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger shows a replacement character for the apostrophe in "atom's"; restored here, as in v10's open decision 4):

- "model the atom's discrete energy levels, including electronic configuration and spdf notation (ACSCH017, ACSCH018, ACSCH020, ACSCH022)" (this video: electronic configuration and spdf notation; discrete energy levels were v10)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on ws-v03's final frame (the data-sheet periodic table with P, Cl and Fe highlighted; v10's s, p, d, f chips). Teaches: energy levels split into subshells (level n has n subshell types, to f); orbitals per subshell (1, 3, 5, 7) and two electrons per orbital with opposite spins, so capacities 2, 6, 10, 14; reading spdf notation (level, type, number of electrons) and the check that the superscripts add to the electron count; the link to Stage 5 shell numbers (2, 8, 7); filling from the lowest energy, including 4s before 3d (potassium prediction); orbital boxes, one per box before pairing, and unpaired electrons; the three route checks P, Cl and Fe; noble-gas shorthand; writing in level order (Fe: 3d⁶ before 4s²). Stops before: which electrons a transition metal loses to form an ion (route stop; v19 and later); the chromium and copper exceptions (author note c); group, period and block (v12, the handoff).

## Decisions

- **Learner question (route wording kept).** "How does spdf notation locate the electrons in an atom?" It is concrete and answerable with an address analogy. The answer, in order: levels contain subshells (2); subshells contain orbitals of two electrons (3); notation reads as an address and must add up (4); electrons fill from the lowest energy, with 4s before 3d (5 to 7); within a subshell they spread out before pairing (9); the three checks show the method (8, 10, 11).
- **Opening frame (equals ws-v03's final frame, `chem-y11-ws-v03.md` "Opening frame and final frame").** Coded periodic table outline at the centre with P (15) and Cl (17) highlighted in period 3 and Fe (26) in period 4, each with "?" for its electrons; v10's "s", "p", "d", "f" chips at the right; the "Next" chip, which fades as scene 1 starts.
- **Address analogy (scene 4).** "3p⁵: level 3, the p subshell, 5 electrons live there." An address locates; it doesn't claim the electron sits at a point (v10: orbitals are regions of likely position). The level number is "which energy level", the letter "which type of subshell", the superscript "how many electrons". This answers the route question in its own words.
- **Stage 5 link (scenes 1, 8).** Chlorine's "2, 8, 7" (Stage 5 shells) is shown grouping from 1s² | 2s² 2p⁶ | 3s² 3p⁵, and phosphorus's 2, 8, 5 likewise. This keeps the new notation anchored in what the student already writes. Iron's shell totals (2, 8, 14, 2) are not shown: they would raise a question v12 and v13 answer better.
- **Filling order (scenes 5 to 7; site `l16-the-aufbau-filling-order-title`).** Shown on an energy ladder continued from v10's staircase: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, with 4s drawn just below 3d. "Electrons fill the lowest energy subshells first", said with v10's ball-on-stairs image. The site's term "Aufbau" is given as a grey screen tag only ("Aufbau principle: German, building up"). The 3 s prediction uses potassium (the site's hook): electron 19 goes into 4s, which is why potassium begins a new row.
- **Spin and pairing (scenes 3, 9).** "Each orbital holds at most two electrons, and those two must spin in opposite directions" (Pauli, named as a screen tag only). Hund's rule (named as a screen tag only) taught as a cause: "Electrons repel each other, so in orbitals of equal energy they spread out, one per orbital, before any pair up." Single electrons are drawn with arrows all pointing up, as HSC orbital diagrams do (author note b).
- **The three route checks.** P (site worked example exactly): 1s² 2s² 2p⁶ 3s² 3p³, running total 2, 4, 10, 12, 15; three unpaired. Cl: 1s² 2s² 2p⁶ 3s² 3p⁵; one unpaired (site correction 11; the site's "All 3 3p orbitals singly occupied" is not repeated); shorthand [Ne] 3s² 3p⁵. Fe (site worked example exactly): [Ar] 3d⁶ 4s², written 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² in level order; running total 18, 20, 26; four unpaired. The site's chlorine misconception example (1s² 2s² 2p⁵ 3s² 3p⁶, which adds to 17 but leaves 2p unfilled) becomes scene 12, "a total that adds up, but is still wrong", with its explanation corrected (site note 1).
- **Noble-gas shorthand (scenes 10, 11).** "Everything up to 2p⁶ is the same as neon, so [Ne] stands for it." Used for Cl and Fe and asked in A2.
- **In-teaching prediction (3 s, scene 6).** Potassium, electron 19. Answered by the energy ladder (4s below 3d).
- **Memory aid:** "Lowest first, one per box, then pair, and check the total." (see "Memory aid check"), scene 13.
- **Attempts (original, HSC style).** A1: sulfur (Z = 16): full configuration and unpaired electrons. Model: 1s² 2s² 2p⁶ 3s² 3p⁴; 3p boxes ↑↓ ↑ ↑; 2 unpaired. Crossed: "↑↓ ↑↓ (empty): 0 unpaired" (pairing before spreading out). A2: vanadium (Z = 23): noble-gas shorthand and unpaired electrons. Model: [Ar] 3d³ 4s²; 3d boxes ↑ ↑ ↑ (two empty); 3 unpaired. Crossed: "[Ar] 3d⁵" (filling 3d before 4s).
- **Mistake scene:** none separate. "Fill 3d before 4s" (7; crossed in feedback 2); "pair up first" (9; crossed in feedback 1); "write in filling order" (11: written in level order); "if the total is right, the configuration is right" (12); "the superscripts are orbital counts" (4: they count electrons); "an orbital holds as many as the subshell" (3).
- **Handoff (route next: `chem-y11-m1-v12`, "How do electron arrangements organise groups and periods?").** Scene 18 places each configured atom back in the table: P and Cl both end in 3p and share a row; K's 4s¹ begins the next row; Fe fills 3d in the middle block; a bracket over the table's top edge asks why the column widths are 2, 10 and 6.
- **Site sources used:** listed in Scope.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted; item 11 is already logged):**
  1. `l16-worked-examples-title`, chlorine example, step 3: "Aufbau principle is strict: fill the n=2 shell completely before n=3 shell receives ANY electrons." True for these light atoms, but stated as a general rule it contradicts the same page's 4s-before-3d order (level 4 receives electrons before level 3 is complete). Suggest "fill each subshell in energy order; here 2p must be full before 3s starts".
  2. `l16-misconception-to-fix-title`: "Wrong: You should fill 3d before 4s when writing electron configurations." This mixes filling and writing: the written convention does put 3d before 4s (as the page itself says). Suggest "Wrong: 3d fills before 4s."
  3. `l16-the-aufbau-filling-order-title`: "This matches the row lengths in the periodic table: 2, 8, 8 (not 18!), 18, 18..." The lengths are 2, 8, 8, 18, 18, 32, 32; "(not 18!)" for period 3 is correct but the list stops before the f-block rows. Minor; noted for v12.
- **Cause chain taught, in order:** (1) a shell number isn't a full address (1); (2) levels split into subshells (2); (3) subshells hold 1, 3, 5 or 7 orbitals of two electrons (3); (4) the notation is level, type, count, and adds to the electron count (4); (5) electrons take the lowest energy first, and 4s is below 3d (5 to 7); (6) build by running totals (8); (7) equal-energy orbitals fill singly first because electrons repel (9); (8) Cl and Fe confirm the method and the written order (10, 11).
- **Entry knowledge:** Stage 5 shell configurations (2, 8, 7); v08 (protons and electrons from Z); v10 (energy levels as steps; orbitals as regions of likely position; s, p, d, f named).
- **Learner-visible vocabulary (plain meaning at first use):** subshell (a group of orbitals of the same type and energy within a level, 2); orbital (recalled from v10: a region where an electron is likely to be found, 3); electron configuration (the list of occupied subshells and their electrons, 4); spin (electrons in one orbital spin in opposite directions, drawn up and down, 3); unpaired electron (alone in its orbital, 9); noble-gas shorthand (the previous noble gas in brackets stands for its electrons, 10).
- **Legacy logic ported:** none.
- **Explainer motion (all coded):** **`SubshellLadder`** (new, shared with v12: horizontal rows of orbital boxes at heights by subshell energy, 1s at the bottom to 4p, 4s drawn just below 3d; a running-total counter; electrons drop in as arrows on cue, single arrows up first, then down arrows to pair); **level tree** (scene 2: levels 1 to 4 each sprouting their subshell letters); **notation builder** (each filled row writes its term, "3p³", into a configuration line; superscripts tally into a sum check "= 15 ✓"); **shell grouping brackets** (1s² | 2s² 2p⁶ | 3s² 3p⁵ → 2, 8, 7); **periodic table outline** (from ws-v03; cells light as atoms are placed); v10's staircase (scene 5, small, a ball settling to the lowest step); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** s rows blue, p rows green, d rows amber, f grey (the same tints as v10's chips, and v12's blocks); electron arrows ink; unpaired electrons ringed teal; running totals navy; crossed items red strike.
- **Board layout (constant):** heading top left; `SubshellLadder` in the left half; the configuration line, sum check and orbital-box close-ups in the right half.

Author notes (not learner copy):
(a) Subshell energies: for atoms up to Z = 20 the 4s orbital is filled before 3d (lower energy in the neutral atom being built); from scandium on the 3d and 4s energies are close and their order in the ion differs (4s electrons are removed first). Learner copy says only "4s fills first, then 3d" and "for building up the atom". The ion order is v19's business (route stop).
(b) Orbital diagram convention: singly occupied orbitals drawn with parallel spins (all arrows up), consistent with Hund's rule and HSC answers; paired orbitals ↑↓.
(c) Chromium ([Ar] 3d⁵ 4s¹) and copper ([Ar] 3d¹⁰ 4s¹) are exceptions; the site flags them "Beyond the syllabus". Not taught or mentioned in narration; A2 uses vanadium, which follows the pattern.
(d) 2n² (2, 8, 18, 32) shown as a grey tag in scene 3 ("level capacity 2n²: 2, 8, 18, 32"), not spoken; Stage 5's "2, 8, 8" is a filling observation, not a capacity, which v12 uses.
(e) Pronunciations: "three p five" (not "three p to the five"); "one s two"; "argon, three d six, four s two"; "spdf" said "s p d f"; "Aufbau" not spoken.

Main question: *How does spdf notation locate the electrons in an atom?*
Entry knowledge: Stage 5 shells; v08; v10.
Stops after: subshells, orbitals and capacities; reading and checking the notation; filling order with 4s before 3d; one per box before pairing; unpaired electrons; P, Cl and Fe; noble-gas shorthand. No ions, no exceptions, no groups and periods.
Handoff: chem-y11-m1-v12, how electron arrangements organise groups and periods.

## Opening frame and final frame

- **Opening frame:** ws-v03's final frame exactly (Decisions).
- **Final frame (v12 opens on it):** the coded periodic table outline at the centre, unshaded, with four lit cells: P (15) and Cl (17) in period 3 carrying small chips "…3p³" and "…3p⁵", K (19) at the start of period 4 with "…4s¹", and Fe (26) in the middle block with "…3d⁶"; above the table's top edge three grey brackets over the s columns, the d columns and the p columns, labelled "2?", "10?" and "6?"; v10's s, p, d, f chips gone; the chip "Next: How do electron arrangements organise groups and periods?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: an address for every electron
> On the data sheet, chlorine is element seventeen, so a chlorine atom has seventeen electrons. In Stage 5, you'd write them as two, eight, seven, one number for each **shell**. But in the energy level video, we saw that inside each level, electrons occupy orbitals of different types, s, p, d and f. So where exactly is each of chlorine's seventeen electrons? Spdf notation answers that. It's like an address for every **electron**.

Visual: opens on ws-v03's final frame; the "Next" chip fades. On the first sentence the Cl cell enlarges out of the table (the table dims behind it), "17" glowing, tag "17 electrons". On "shell" a coded Stage 5 shell diagram draws beside it (three rings with 2, 8 and 7 dots; tag "Stage 5: shells"). On the third sentence v10's s, p, d, f chips slide in beside the rings. On "electron" the line "1s² 2s² 2p⁶ 3s² 3p⁵" writes under the diagram in grey, as a preview, with a tag "the address" and a "?" over it; the heading writes on: "spdf notation: where are the electrons?".

### 2. levels split into subshells
> Start with the energy levels, numbered one, two, three and four, going up in energy. Each level is split into subshells. A subshell is a group of orbitals of the same type and energy. Level one has just an s **subshell**. Level two has s and **p**. Level three has s, p and **d**. And level four has all four types, s, p, d and **f**. So the level number tells you how many subshell types it **has**.

Visual: board clears to the level tree at the left: four level bars "1", "2", "3", "4" stacked upward (tag "energy levels, v10"). Gloss "subshell: orbitals of the same type and energy". On "subshell" level 1 sprouts a blue "s"; on "p" level 2 sprouts "s" and a green "p"; on "d" level 3 sprouts "s", "p" and an amber "d"; on "f" level 4 sprouts "s", "p", "d" and a grey "f". On "has" the level numbers and their counts of letters glow in pairs (1 and 1, 2 and 2, 3 and 3, 4 and 4).

### 3. orbitals, and two electrons each
> Each subshell is made of orbitals, the regions where an electron is likely to be found. An s subshell has one orbital, a p subshell has three, a d has five, and an f has **seven**. Here's the key rule. Each orbital holds at most two electrons, and those two must spin in opposite directions. We draw each orbital as a box, and its electrons as an up arrow and a down **arrow**. So an s subshell holds two electrons, p holds six, d holds ten, and f holds **fourteen**.

Visual: the letters become rows of boxes: s one box, p three, d five, f seven (gloss "orbital: where an electron is likely to be found, v10"); on "seven" the box counts write "1, 3, 5, 7". On "spin in opposite directions" one box enlarges with an up arrow and a down arrow dropping in (grey tags "Pauli: two per orbital, opposite spins" and "spin: drawn ↑ and ↓"). On "arrow" a third arrow tries to enter the box and bounces off (tag "never three"). On "fourteen" each row fills with paired arrows and writes its capacity: "s 2, p 6, d 10, f 14"; a grey tag "level capacity 2n²: 2, 8, 18, 32" sits small beside the tree (not spoken).

### 4. reading the notation
> Now the notation itself. Take three p five. The three is the energy level. The p is the type of subshell. And the small raised five is the number of electrons in **it**. So it's an address. Level three, the p subshell, five electrons live **there**. A full configuration lists every occupied subshell like this, and the raised numbers always add up to the number of electrons in the **atom**.

Visual: "3p⁵" writes large at the centre. On "energy level" the "3" lifts with a navy leader line and label "level"; on "type of subshell" the "p" lifts, green, label "subshell type"; on "it" the "⁵" lifts, label "electrons in it" and a small p row of three boxes shows five arrows (↑↓ ↑↓ ↑). On "there" a coded address card writes "level 3 · p subshell · 5 electrons" (tag "an address, not a point: the electrons are in the orbital region"). On "atom" chlorine's full line from scene 1 writes again in ink; its superscripts tally beneath: "2 + 2 + 6 + 2 + 5 = 17 ✓"; brackets group it "1s² | 2s² 2p⁶ | 3s² 3p⁵" over "2 | 8 | 7" (tag "Stage 5 shells").

### 5. lowest energy first
> So which subshells fill first? Electrons fill the lowest energy subshells first, just as a ball settles on the lowest step of a staircase. Mostly, that means level by level. One s, two s, two p, three s, three **p**. But there's a surprise at level four. The four s subshell is lower in energy than three d, so four s fills first, and three d fills after **it**.

Visual: board change to `SubshellLadder` at the left (empty boxes): rows at their energies, 1s at the bottom, then 2s, 2p, 3s, 3p, 4s, 3d, 4p (grey tag "Aufbau principle: build up from the lowest energy"). v10's staircase appears small at the top right; a ball settles onto its lowest step. On "three p" a navy path traces up the rows 1s → 2s → 2p → 3s → 3p. On "surprise" the 4s row pulses; it sits just below the 3d row, and on "it" the path continues 3p → 4s → 3d with a small curved arrow, tag "4s before 3d".

### 6. prediction (countdown, 3 seconds)
> Quick prediction. Potassium has nineteen electrons. Once three p is full, the atom holds eighteen. Where does electron nineteen **go**?

Visual: the ladder fills to 3p in a quick sweep (counter "18"); one extra arrow "19" hovers above the ladder between the 4s and 3d rows. Chips "4s?" and "3d?". On "go" the 3 s `Countdown` ring runs.

### 7. potassium: four s first
> Into four s, not three d. Four s is the lower energy subshell, so it fills first, and potassium ends in four s **one**. That's also why potassium starts a new row of the periodic table. Its outermost electron is the first one in level **four**. Calcium, with twenty electrons, fills four s with a second one. Only then, from scandium on, does three d start to **fill**.

Visual: on "Into four s" the hovering arrow drops into the 4s box (counter "19"); the "3d?" chip is crossed. On "one" the line "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹" writes; tally "= 19 ✓". On "four" a small periodic table outline at the top right lights the K cell at the start of row 4, tag "first electron in level 4: new row". On "Calcium" a second arrow pairs in the 4s box (counter "20") and the Ca cell lights beside K; on "fill" the first arrow drops into a 3d box (counter "21"), and the Sc cell lights at the start of the middle block (tag "3d starts at scandium").

### 8. phosphorus, step by step
> Let's build phosphorus, with fifteen electrons. One s two, that's two. Two s two, four. Two p six, ten. Three s two, twelve. And three p takes the last three, making **fifteen**. So phosphorus is one s two, two s two, two p six, three s two, three p **three**. Group the levels, and you get two, eight, five, the Stage 5 **version**.

Visual: board resets the ladder (empty); task strip "P: 15 electrons". Each clause fills a row with arrows as spoken, the counter ticking "2", "4", "10", "12", and on "fifteen" "15" (3p gets three arrows, placed but not yet arranged: they appear in the row's first box area and wait, tag "how do these three sit?"). On "three" the configuration line writes "1s² 2s² 2p⁶ 3s² 3p³" with "= 15 ✓". On "version" brackets group it into "2 | 8 | 5".

### 9. one per box before pairing
> But how do those three p electrons sit in their three orbitals? Electrons repel each other. So in orbitals of equal energy, they spread out, one per orbital, before any of them pair **up**. Phosphorus's three p electrons each get their own box. That gives phosphorus three unpaired electrons, electrons alone in their **orbital**.

Visual: the 3p row enlarges at the right. On "repel" the three waiting arrows push apart (small coded repulsion marks between them); on "up" they settle one per box, all pointing up (grey tag "Hund's rule: one per box before pairing"); a crossed alternative shows "↑↓ ↑ (empty)" small (tag "not paired first"). On "orbital" each single arrow is ringed teal and a chip writes "3 unpaired" (gloss "unpaired: alone in its orbital").

### 10. chlorine, and a shortcut
> Chlorine has seventeen, so its three p subshell holds five. The first three go one per box, and the next two pair **up**. That leaves two pairs and one single, so chlorine has one unpaired **electron**. We can shorten it, too. Everything up to two p six matches the noble gas neon, so we write neon in square brackets, then three s two, three p **five**.

Visual: the ladder refills to 3s for Cl (counter "12"); the 3p row takes arrows one per box (↑ ↑ ↑), then on "up" two down arrows pair into the first two boxes: ↑↓ ↑↓ ↑. On "electron" the single arrow is ringed teal, chip "1 unpaired". On "shorten" the rows 1s to 2p fold into one grey block labelled "[Ne] = 1s² 2s² 2p⁶ (10 electrons)" (gloss "noble-gas shorthand"). On "five" the line writes "Cl: [Ne] 3s² 3p⁵" beside the full line, and the sum check "10 + 2 + 5 = 17 ✓".

### 11. iron, and the written order
> Now iron, with twenty-six. After three p six, eighteen electrons are placed, the same as argon. Four s fills next with two, making twenty. The last six go into three **d**. When we write it, we list the subshells in level order, so three d comes before four s. Argon, three d six, four s **two**. In the five d boxes, six electrons means five singles, then one pair. So iron has four unpaired **electrons**.

Visual: the ladder refills to 3p (counter "18"); the rows fold to "[Ar]" (tag "argon: 18 electrons"). 4s takes two arrows (counter "20"); on "d" six arrows go into 3d (counter "26"). On "level order" the configuration line writes "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²" with a small curved arrow lifting "3d⁶" in front of "4s²" (tag "filled 4s first; written in level order"). On "two" "Fe: [Ar] 3d⁶ 4s²" with "18 + 6 + 2 = 26 ✓". On "five singles" the 3d row enlarges: five up arrows, then one down arrow pairs in the first box: ↑↓ ↑ ↑ ↑ ↑. On "electrons" the four singles ring teal, chip "4 unpaired".

### 12. a total that adds up, but is still wrong
> One warning. A configuration can add up and still be wrong. One s two, two s two, two p five, three s two, three p six also adds to **seventeen**. But two p isn't full. An electron won't go into a higher subshell while a lower one still has room, so this atom isn't in its lowest energy **arrangement**. Check the order, as well as the **total**.

Visual: board clears; the chlorine line from scene 10 sits at the top with a teal tick. Below it the wrong line writes in grey: "1s² 2s² 2p⁵ 3s² 3p⁶" with its tally; on "seventeen" the tally "2 + 2 + 5 + 2 + 6 = 17" writes and gains a tick (tag "the total checks out"). On "isn't full" a mini ladder shows the 2p row with one empty half-box ringed rose and the 3p row full; on "arrangement" a rose arrow from the extra 3p electron points back down to the 2p gap (tag "not the lowest energy"). On "total" the line is crossed and a chip writes "check the order and the total" (the site's chlorine example, with its correction).

### 13. one line to remember
> So here's the method in one line. Lowest first, one per box, then pair, and check the total. Fill from the lowest energy, remembering four s before three d. Spread out before pairing. And make sure the raised numbers add up to the electron **count**.

Visual: the three configurations (P, Cl, Fe) stack small at the right with their sum checks. On "count" the memory line writes large: "Lowest first, one per box, then pair, and check the total." Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Sulfur has atomic number sixteen. Write the full electron configuration of a sulfur atom, using s p d f notation, and state how many unpaired electrons it has. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Sulfur has atomic number 16. (a) Write the full electron configuration of a sulfur atom in spdf notation. (b) Draw the orbital diagram for its 3p subshell and state the number of unpaired electrons in a sulfur atom. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no ladder).

### 15. feedback 1 (brief)
> Sulfur is one s two, two s two, two p six, three s two, three p four, adding to **sixteen**. In three p, the first three go one per box, and the fourth pairs up. That's one pair and two singles, so two unpaired **electrons**. Pairing them up first, to get zero unpaired, is the classic slip. One per box comes **first**.

Visual: card shrinks to the top. Row "(a) 1s² 2s² 2p⁶ 3s² 3p⁴ (2 + 2 + 6 + 2 + 4 = 16 ✓)" boxed on "sixteen". A 3p row of three boxes fills ↑ ↑ ↑ then ↓ into the first: ↑↓ ↑ ↑; on "electrons" the two singles ring teal, boxed "(b) 2 unpaired". On "first" a chip with boxes "↑↓ ↑↓ (empty): 0 unpaired" fades in and is crossed. Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Vanadium has atomic number twenty-three. Write its electron configuration using noble gas shorthand, and state how many unpaired electrons a vanadium atom has. Pause here to answer.

Visual: `QuestionCard`: "Vanadium has atomic number 23. (a) Write the electron configuration of a vanadium atom using noble-gas shorthand. (b) State the number of unpaired electrons in a vanadium atom. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Argon takes eighteen. Four s fills next with two, making twenty, and the last three go into three d. So vanadium is argon, three d three, four s **two**. The three d electrons go one per box, so there are three unpaired **electrons**. Writing argon, three d five, is the classic slip. It fills three d before four s, and four s comes **first**.

Visual: card shrinks to the top. A mini ladder fills from "[Ar] 18" to 4s² ("20") to 3d³ ("23"); row "(a) [Ar] 3d³ 4s² (18 + 3 + 2 = 23 ✓)" boxed on "two". On "electrons" the 3d row shows ↑ ↑ ↑ (two empty boxes), singles ringed teal, boxed "(b) 3 unpaired". On "first" a chip "[Ar] 3d⁵" fades in and is crossed (caption "4s fills before 3d"). Hold about 1 second.

### 18. handoff: back to the table
> Now look where our atoms sit. Phosphorus and chlorine both end in three p, and they share a row. Potassium's four s one begins the next row, and iron is filling three d, in the middle block. That's no accident. Next, how do electron arrangements organise groups and **periods**?

Visual: board clears to the periodic table outline. On "Phosphorus and chlorine" their cells light with chips "…3p³" and "…3p⁵" and a faint bar along period 3. On "Potassium" the K cell lights at the start of period 4 with "…4s¹"; on "iron" the Fe cell lights in the middle block with "…3d⁶". On "no accident" three grey brackets draw over the table's top edge, over the s, d and p columns, labelled "2?", "10?", "6?". On "periods" the chip "Next: How do electron arrangements organise groups and periods?" writes. Hold about 2 seconds. This is the final frame (v12 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Energy levels (n = 1, 2, 3, 4) split into subshells: level 1: s; level 2: s, p; level 3: s, p, d; level 4: s, p, d, f.
2. Orbitals per subshell: s 1, p 3, d 5, f 7. Each orbital holds at most 2 electrons, with opposite spins. Capacities: s 2, p 6, d 10, f 14.
3. Notation: 3p⁵ = level 3, p subshell, 5 electrons. Superscripts add up to the number of electrons.
4. Filling order: 1s 2s 2p 3s 3p 4s 3d 4p (4s fills before 3d). Write in level order: Fe = 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² = [Ar] 3d⁶ 4s².
5. Equal-energy orbitals fill one per box before pairing. P: 3 unpaired; Cl: 1 unpaired; Fe: 4 unpaired.

Memory aid (large, on the notes screen): *Lowest first, one per box, then pair, and check the total.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why a shell number isn't enough: each level holds different kinds of orbital (1, 2). Why capacities are 2, 6, 10, 14: orbitals × 2 (3). Why superscripts must add to Z: they count every electron (4). Why 4s fills before 3d: it is lower in energy (5, 7). Why potassium starts a new row: its electron 19 is the first in level 4 (7). Why electrons spread out: they repel, and the orbitals have equal energy (9). Why Fe is written 3d⁶ 4s²: level order is the writing convention, not the filling order (11). Why a correct total can still be wrong: an electron won't sit in a higher subshell while a lower one has room (12).
- **Misconceptions addressed:** 3d fills before 4s (7, crossed in 17); pairing before spreading (9, crossed in 15); a correct total proves a correct configuration (12); writing in filling order (11); superscripts as orbital counts (4); more than two electrons per orbital (3).
- **One idea at a time:** problem (1), subshells (2), orbitals and capacity (3), notation (4), order (5 to 7), building (8), pairing (9), Cl (10), Fe (11), checking order as well as total (12).
- **Video makes it easier:** the level tree sprouts its letters (2); a third arrow bounces off a full box (3); the notation's parts lift with leader lines (4); the filling path climbs the ladder and jumps 4s before 3d (5, 7); arrows push apart and settle one per box (9); the running counter ticks as rows fill (8, 10, 11).
- **Response opportunity:** one 3 s prediction (6); two unseen tasks (S, V), 10 s each, every value on the card, nothing answer-bearing. Feedback about 22 s and 24 s.
- **Avoided double teaching:** energy levels and orbitals recalled from v10; Z and electrons from v08; groups, periods and blocks left to v12; ions left to v19.
- **Syllabus coverage:** `C1-IQ2-02` (electronic configuration and spdf notation; discrete energy levels were v10).
- **Out of scope by design:** transition-metal ion configurations (route stop); Cr and Cu exceptions (author note c); quantum numbers; orbital shapes beyond "regions".

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested).** "Sulfur has atomic number 16. (a) Write the full electron configuration of a sulfur atom in spdf notation. (b) Draw the orbital diagram for its 3p subshell and state the number of unpaired electrons in a sulfur atom."
Model answer: (a) 1s² 2s² 2p⁶ 3s² 3p⁴ (1 mark). (b) 3p: ↑↓ ↑ ↑ (one orbital paired, two singly occupied, following one per orbital before pairing) (1 mark); 2 unpaired electrons (1 mark). Classic mistake (crossed): ↑↓ ↑↓ (empty), 0 unpaired.

**Attempt 2 (scene 16; original wording, HSC style, 2 marks suggested).** "Vanadium has atomic number 23. (a) Write the electron configuration of a vanadium atom using noble-gas shorthand. (b) State the number of unpaired electrons in a vanadium atom."
Model answer: (a) [Ar] 3d³ 4s² (1 mark; [Ar] 4s² 3d³ accepted). (b) 3 (the three 3d electrons occupy separate orbitals) (1 mark). Classic mistake (crossed): [Ar] 3d⁵ (3d filled before 4s).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Orbitals per subshell | s 1, p 3, d 5, f 7 | 3, key notes |
| Capacities | s 2, p 6, d 10, f 14; levels 2, 8, 18, 32 (2n², screen only) | 3 |
| Cl (Z = 17) | 1s² 2s² 2p⁶ 3s² 3p⁵; 2 + 2 + 6 + 2 + 5 = 17; shells 2, 8, 7; [Ne] 3s² 3p⁵; 1 unpaired | 1, 4, 10 |
| K (Z = 19) | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹; 18 then 19 | 6, 7, 18 |
| Ca (Z = 20), Sc (Z = 21) | 4s² (counter 20); first 3d electron (counter 21) | 7 |
| Wrong Cl line | 1s² 2s² 2p⁵ 3s² 3p⁶: 2 + 2 + 5 + 2 + 6 = 17 | 12 |
| P (Z = 15) | running total 2, 4, 10, 12, 15; 1s² 2s² 2p⁶ 3s² 3p³; shells 2, 8, 5; 3 unpaired | 8, 9 |
| Fe (Z = 26) | 18, 20, 26; 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²; [Ar] 3d⁶ 4s²; 4 unpaired | 11 |
| [Ne], [Ar] | 10, 18 electrons | 10, 11, 16 |
| S (Z = 16), A1 | 1s² 2s² 2p⁶ 3s² 3p⁴; 2 unpaired | 13, 14 |
| V (Z = 23), A2 | [Ar] 3d³ 4s²; 18 + 3 + 2 = 23; 3 unpaired | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November; an Aufbau fill in the order 1s 2s 2p 3s 3p 4s 3d 4p, with unpaired = k if k ≤ orbitals, else 2 × orbitals − k); Codex to re-check.

- P: 2 + 2 + 6 + 2 + 3 = 15; unpaired 3. Cl: 17; unpaired 1. Fe: 2 + 2 + 6 + 2 + 6 + 6 + 2 = 26; unpaired 4. S: 16; unpaired 2. V: 23; unpaired 3. K: 19; unpaired 1.
- 2n²: 2, 8, 18, 32.
- Shell totals: Cl 2, 8, 7; P 2, 8, 5.

## Memory aid check

- **"Lowest first, one per box, then pair, and check the total."** Written for this lesson. Meaning, as said in scene 13: fill subshells in order of increasing energy (with 4s before 3d), place one electron in each equal-energy orbital before pairing, and check the superscripts add up to the electron count. Assumptions checked: "lowest first" relies on the ladder order shown (4s below 3d) and is true for the ground states of the atoms this video uses (H to Kr except Cr and Cu, author note c); "one per box" applies within a subshell, not across subshells (the scene 9 visual keeps it within the 3p row); "check the total" works for atoms, and for ions only once the charge is counted (ions are later). It helps a new case: A1 and A2 apply all three parts.
- **Considered, not used:** the diagonal (Madelung) chart from the site (a second diagram to learn; the energy ladder already shows the order); "bus seat rule" (a people analogy; the repulsion cause is shorter and true).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,812 characters**, 19 scenes. At 13.3 characters per second the speech is about 437 s; add about 10 s of holds and settling (the ladder fills in 5, 8, 10 and 11), 2 s for the memory hold, 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 528 s (8.8 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m1-v11` (route chem-y11-m1-v11; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v11`.

In order (19 scene headings, all `### N.`): hook, subshells, orbitals-capacity, notation, filling-order, prediction, potassium, phosphorus, pairing, chlorine, iron, order-check, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: ws-v03's final frame into scene 1 by camera push to the Cl cell; 1 to 2 clear change (level tree); 2 to 3 camera continue (letters become boxes); 3 to 4 camera continue; 4 to 5 clear change (the ladder); 5 to 6 to 7 camera continue; 7 to 8 ladder reset (camera continue); 8 to 9 camera push to the 3p row; 9 to 10 to 11 ladder reset each time; 11 to 12 clear change; 12 to 13 camera pull back; attempts and feedback card shrink to the top; 17 to 18 board clear (the periodic table returns); 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m1-v11-learning-review.md`, `checks/c-y11-m1-v11-science-check.md`.

## Assets

Plates: none new and none reused. Every visual here is an abstract model (levels, orbitals, electrons, notation, the periodic table outline), coded under the owner's rule that real objects are painted and abstract diagrams are coded. Checked: no existing explainer component draws subshell ladders or orbital boxes (`src/explainer/` searched 5 November for "orbital", "periodic" and "spdf": no chemistry matches), so `SubshellLadder` and the periodic table outline are new shared components (also used by v12 and later Module 1 videos).

Kit gaps (for the build brief):
1. **`SubshellLadder`** (new, shared): rows of orbital boxes at energy heights from a subshell list; cue-driven arrow placement (single up arrows first within a row, then down arrows); running counter; fold-to-core ("[Ne]", "[Ar]") animation; a filling-path trace.
2. **`PeriodicGrid`** (new, shared; first drawn in ws-v03's final frame): an 18-column outline with an optional f-block pair of rows; cells addressable by Z; highlight, chip and bracket overlays; block tints s blue, p green, d amber, f grey (v12).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every configuration, running total, sum check and unpaired count against "Numbers used".
2. Confirm the claims: level n has n subshell types (to f); orbitals 1, 3, 5, 7; two electrons per orbital with opposite spins; 4s fills before 3d in building up K, Ca and the first transition series (except Cr and Cu, not mentioned); written in level order; one per orbital before pairing in equal-energy orbitals; singly occupied orbitals drawn with parallel arrows.
3. Confirm site correction 11 is applied (Cl: two paired, one single) and that site notes 1 to 3 are accurate.
4. Confirm no ion configuration, no Cr or Cu exception, and no group or period teaching appears.
5. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger apart from the restored apostrophe.
7. Confirm no person, hand or face is drawn or requested.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Confirm the opening frame equals ws-v03's final frame and the final frame matches v12's opening.

## YouTube metadata (draft)

Title: Electron Configuration and spdf Notation (P, Cl, Fe) | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson16.sa.html

Chlorine's 17 electrons are "2, 8, 7" in Stage 5. spdf notation gives each one an address: level, subshell and how many. Learn how energy levels split into s, p, d and f subshells, why they hold 2, 6, 10 and 14 electrons, how to read 3p⁵, why 4s fills before 3d (and why potassium starts a new row), how electrons spread out one per orbital before pairing, and how to write configurations for phosphorus, chlorine and iron, with noble-gas shorthand and unpaired electrons. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"model the atom's discrete energy levels, including electronic configuration and spdf notation (ACSCH017, ACSCH018, ACSCH020, ACSCH022)"

Previous: Collecting and sourcing chemistry data safely and accurately. Next: How electron arrangements organise groups and periods.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Rule names (root).** Aufbau, Pauli and Hund are on-screen tags only, never spoken; the causes are spoken instead. Some teachers expect the names in answers; the key notes could add them in brackets if root prefers.
- **2. Shared components (root).** `SubshellLadder` and `PeriodicGrid` are new; v12 and v13 depend on `PeriodicGrid`. Root to schedule them in one build brief.
- **3. Site notes 1 to 3 (root).** For `site-corrections-chem-y11.md` if accepted.
- **4. Ledger encoding (root).** The apostrophe in "atom's" restored here, as in v10.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the address analogy carry the notation; is "4s before 3d" felt as an energy fact rather than a rule; does the repulsion cause make "one per box" stick; is iron's written order clear after its filling order), then the science check and Codex error check.
- Checker output (5 November): narration 5,812 characters; per scene (1 to 19): 423, 380, 455, 380, 354, 131, 357, 321, 322, 342, 395, 334, 246, 192, 308, 191, 332, 274, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (6 November 2026, brief 178 repairs)

Findings from `../checks/c-y11-m1-v11-learning-review.md` and `../checks/c-y11-m1-v11-science-check.md` (status.md, "Codex hand-in: brief 178").

1. Count (should fix): headline 5,812 corrected to the joined parser count 5,830; estimate about 529.4 s with the same holds. No speech change.

Narration: 5,830 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; 0 against Revision 1's 5,830), about 529.4 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-m1-v11-rev2-error-check.md`): 0 blockers, 0 should fix. Nothing to resolve.
- Headline count restated as the sum of scene strings: 5,812 characters over 19 scenes (the earlier 5,830 included the 18 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).
