# Year 11 Chemistry M3 V10: Half-equations. How do half-equations combine into a balanced redox equation? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,046 characters, 19 scenes, about 539 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: tenth Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 64, between `chem-y11-m3-v09` (redox and oxidation numbers) and `chem-y11-m3-v11` (galvanic cells). Templates: `chem-y11-m3-v07.md` to `v09.md` (same designer; series conventions), `math-a12-d10.md` (calculation layout: short task strip, one reasoning stage at a time, earlier results kept only when needed), `phys-y11-fa1-v01.md` (structure). Refers back to `chem-y11-m3-v09.md` (OIL RIG, oxidation numbers), `chem-y11-m3-v08.md` (the aluminium, copper sulfate and salt demonstration), `chem-y11-m3-v03.md` (net ionic equations, spectators), `chem-y11-m2-v01.md` onwards (balancing atoms) and `chem-y11-m1-v20.md` (ionic formulae such as Al₂(SO₄)₃). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m3-v10` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Conserve atoms and charge, equalise electron counts and combine simple metal/ion half-equations; stop before unfamiliar acidic-medium algorithms."; next handoff: "Why does a galvanic cell need two half-cells and an ion path?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson08.sa.html` (SHA256 `30f5bcf0d786c10b2ef782bfd58b6bdf6e434d6059e8fa0bb5bd0c33657c40cd`, recomputed, matches the route), section `l08-writing-half-equations-title`, with `l08-combining-half-equations-to-give-the-overall-title`, worked example 2 (zinc and copper), misconception card 3 (subtracting), drill Q9 (Fe²⁺ and Cl₂) and the formula card. Used: "A half-equation isolates either the oxidation step or the reduction step, making explicit exactly how many electrons are transferred"; "Must Know: Always check BOTH atoms and charge ... Charge balance is the most commonly missed check"; "Common Error: Students place electrons on the wrong side ... Draw OIL RIG above each half-equation"; the combining steps ("Multiply one or both half-equations so the number of electrons is equal ... Add ... cancelling ... Verify"); "If one involves 2 electrons and the other involves 3 electrons, multiply the first by 3 and the second by 2 (giving 6 electrons each)"; "Never subtract"; Fe²⁺ → Fe³⁺ + e⁻ with its charge check; Cl₂ + 2e⁻ → 2Cl⁻ and 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻ (charge +4 each side). Not used: the acidic-medium steps (add H₂O, add H⁺) and the MnO₄⁻ examples (route stop; named once as "later" in scene 13), bleach (m3-v09 A2). Site corrections file checked: no logged item touches lesson 8.

Owner rules applied: as `chem-y11-m3-v07.md` (one learner question; no people, hands or faces; equations, charge counters and electron tallies coded; plates only in the handoff; one 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ2-06`: "construct relevant half-equations and balanced overall equations to represent a range of redox reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 42)

**Boundary:** opens on m3-v09's final frame. Teaches: what a half-equation is and which side the electrons go (OIL RIG); the two checks, atoms then charge, with electrons fixing the charge; metal to ion (zinc), ion to metal (copper), non-metal to ion (chlorine, with the 2Cl⁻ slip), ion to ion (iron(II) to iron(III)); combining with equal electrons (zinc and copper); combining with unequal electrons by the smallest common number (aluminium and copper ions: 6e⁻); checking the result for atoms and charge; prediction and worked example Fe²⁺ with Cl₂; the "looks balanced" trap and "never subtract"; putting spectators back for the full equation (2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu). Recalls without re-teaching: OIL RIG and oxidation numbers (m3-v09), net ionic equations and spectators (m3-v03), balancing atoms (Module 2), ionic formulae (m1-v20), the aluminium demonstration (m3-v08). Not taught: half-equations needing H₂O, H⁺ or OH⁻ (named as "later"), galvanic cells (m3-v11, the handoff), reduction potentials (m3-v12).

## Decisions

- **Learner question (route wording kept).** "How do half-equations combine into a balanced redox equation?" The answer, in order: each half shows its electrons on the side OIL RIG predicts (2); atoms then charge balance, electrons fixing the charge (3 to 5); electrons lost must equal electrons gained, so scale each half to the smallest common number, add and cancel (6, 7, 10); check atoms and charge in the result (8, 11); put spectators back for a full equation (12).
- **Opening frame (equals m3-v09's final frame).** Zinc pair small and dimmed at the top; "Al(s) → Al³⁺(aq) + 3e⁻" over "Cu²⁺(aq) + 2e⁻ → Cu(s)" large, "3e⁻" and "2e⁻" ringed amber with a "?" between; OIL RIG card small at the top right; the Next chip. Scene 1 clears the Next chip.
- **Running example (continuity).** Aluminium with copper ions, from m3-v08's demonstration, carries the unequal-electron case; zinc with copper ions carries the equal case (site worked example 2). Fe²⁺ with Cl₂ (site drill Q9) is the prediction.
- **Two checks, every time (site Must Know).** A "two checks" panel stays at the top right from scene 3: "atoms ✓, charge ✓". Charge is counted aloud with a coded charge counter under each side.
- **Calculation layout (`math-a12-d10.md`).** Task strip ("combine: Al with Cu²⁺"); the two half-equations stacked; electron tally ("lost 3, gained 2 → 6"); multipliers written in the margin ("× 2", "× 3"); the sum; the cancelled electrons struck; then the check. Earlier half-equations dim once used.
- **Memory aid:** "Electrons lost = electrons gained." (Checked in "Memory aid check".) The money analogy in scene 8 is one sentence; assumptions checked.
- **Prediction (3 s, scene 9).** "Which half-equation do you multiply, and by what?" for Fe²⁺ with Cl₂. Answer: iron, by two.
- **Trap scene (site misconception 3 and Must Know).** "Al + Cu²⁺ → Al³⁺ + Cu" balances atoms, not charge; "never subtract".
- **Full equation (route: "balanced overall equations").** 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu (sulfates as spectators, m3-v03; formula from m1-v20).
- **Stop (route).** Scene 13 names half-equations with water and hydrogen ions as a later method (grey card with MnO₄⁻ greyed); no steps taught.
- **Attempts (original wording, HSC style).** A1: magnesium in silver nitrate: Mg → Mg²⁺ + 2e⁻; Ag⁺ + e⁻ → Ag (× 2); Mg + 2Ag⁺ → Mg²⁺ + 2Ag (3 marks). Crossed: "Mg + Ag⁺ → Mg²⁺ + Ag". A2: aluminium in hydrochloric acid, reduction half given: 2Al + 6H⁺ → 2Al³⁺ + 3H₂ (3 marks). Crossed: "Al + 2H⁺ → Al³⁺ + H₂". A2 links back to m3-v07 (aluminium's slow start in acid) and forward to m3-v12 (aluminium's E°).
- **Mistake scene:** scene 11 (the "looks balanced" trap and subtracting) is a resolved misconception the lesson needs: it is the most common lost mark (site). Also: "Cl₂ + e⁻ → Cl⁻" (4); electrons on the wrong side (2).
- **Handoff (route next: `chem-y11-m3-v11`, "Why does a galvanic cell need two half-cells and an ion path?").** Scene 18: in the beaker the electrons pass directly and the energy warms the solution; each half could happen separately; join two beakers with a wire. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. `l08-writing-half-equations-title`, step list: "Balance oxygen by adding H₂O ... Balance hydrogen by adding H⁺" is given as the general method for every half-equation, with no note that it applies to acidic solution only (the bleach example later uses OH⁻). Suggest "(in acidic solution)" after the heading.
  2. `l08-combining-...`, quick check option "Reverse the sign of the MnO₄⁻ reduction potential before adding" refers to reduction potentials, which the site introduces only in lesson 9. Minor; suggest replacing with another distractor.
  - Checked and correct: Fe²⁺ → Fe³⁺ + e⁻ (charge +2 each side); MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (atoms 1 Mn, 4 O, 8 H; charge +2 each side); 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O (+17 each side); Cl₂ + 2e⁻ → 2Cl⁻; 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻ (+4 each side); Zn + Cu²⁺ → Zn²⁺ + Cu (+2 each side).
- **Cause chain taught, in order:** (1) a half-equation shows one side of an electron transfer, so its electrons sit where OIL RIG puts them (2); (2) atoms cannot be made or lost, and neither can charge, so both must balance, and electrons carry the missing charge (3 to 5); (3) every electron lost must be gained, so the two halves must be scaled to the same number before adding (6, 7); (4) equal electrons on both sides cancel, leaving a balanced ionic equation (7, 8); (5) a balanced-looking equation with unequal charge has created electrons, so it is wrong (11); (6) spectators did not change, so adding them to both sides keeps the balance (12).
- **Entry knowledge:** m3-v09 (OIL RIG, oxidation numbers), m3-v08 (the aluminium demonstration), m3-v03 (net ionic equations, spectators), Module 2 (balancing atoms), m1-v20 (Al₂(SO₄)₃).
- **Learner-visible vocabulary (plain meaning at first use):** half-equation (one half of a redox reaction, oxidation or reduction, with the electrons written in, 2); ionic equation (recalled, 6); spectator ion (recalled, 12).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **charge counters** (scenes 3 to 5, 8, 10, 11, 15, 17: a small boxed sum under each side, "0", "+2 + (−2) = 0", filling as narrated); **two-checks panel** (3 onwards: "atoms", "charge", each ticking teal or crossing red); **electron tally** (6, 7, 10: "lost", "gained", and the common number); **multiplier margin** ("× 2", "× 3" sliding in beside a half-equation, its coefficients updating with a brief scale-up); **sum and cancel** (two half-equations slide together into one line; matching electron terms on each side strike with a teal line and fade); **OIL RIG side markers** (2: a teal "e⁻ out: right side" and a violet "e⁻ in: left side"); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m3-v09):** oxidation half teal; reduction half violet; electrons orange; charge counters ink; multipliers amber; cancelled terms teal strike; spectators grey; crossed items red strike.
- **Board layout (constant):** task strip top left; half-equations stacked in the centre (oxidation above, reduction below); charge counters under each side; the two-checks panel top right; the combined equation slides below the pair; the OIL RIG card small at top right until scene 3.

Author notes (not learner copy):
(a) Electrons are written "e⁻" on screen; spoken "electrons". Charges spoken "zinc two plus", "iron three plus", "H plus", "H two".
(b) Fe²⁺/Fe³⁺: both ions in solution; scene 5 says "no metal at all"; inert electrodes are m3-v12's (site lesson 10).
(c) A1: silver nitrate stains skin (as m3-v07 note g); the attempt is written, not practical.
(d) A2: aluminium in hydrochloric acid reacts after its oxide layer is breached (m3-v08); the net ionic equation 2Al + 6H⁺ → 2Al³⁺ + 3H₂; full equation 2Al + 6HCl → 2AlCl₃ + 3H₂ (author only).
(e) The money analogy (scene 8) is not extended: electrons are not "spent" in the sense of being destroyed; the point is only that the count paid equals the count received.

Main question: *How do half-equations combine into a balanced redox equation?*
Entry knowledge: m3-v09, m3-v08, m3-v03, Module 2 balancing, m1-v20.
Stops after: half-equations for metal and ion, non-metal and ion, and ion and ion, balanced for atoms and charge; combining with equal and unequal electron counts; checking; full equation with spectators. No acidic-medium half-equations.
Handoff: chem-y11-m3-v11, galvanic cells.

## Opening frame and final frame

- **Opening frame (equals m3-v09's final frame):** top, small and dimmed, "Zn(s) → Zn²⁺(aq) + 2e⁻" (teal tag "oxidation") and "Cu²⁺(aq) + 2e⁻ → Cu(s)" (violet tag "reduction"); centre, large, "Al(s) → Al³⁺(aq) + 3e⁻" (teal "oxidation") above "Cu²⁺(aq) + 2e⁻ → Cu(s)" (violet "reduction"), with "3e⁻" and "2e⁻" ringed amber and an amber "?" between the lines; the small OIL RIG card at the top right; the chip "Next: How do half-equations combine into a balanced redox equation?".
- **Final frame (m3-v11 opens on it):** two half-cell plates side by side at one scale on the lower two thirds, with a gap between them: left `y11c-halfcell-zn-v1.png` (zinc strip in colourless zinc sulfate solution; tag "ZnSO₄(aq)"), right `y11c-halfcell-cu-v1.png` (copper strip in blue copper(II) sulfate solution; tag "CuSO₄(aq)"); above the left beaker "Zn(s) → Zn²⁺(aq) + 2e⁻" (teal), above the right "Cu²⁺(aq) + 2e⁻ → Cu(s)" (violet); a coded black wire arcs from the top of the zinc strip to the top of the copper strip, with an amber "e⁻ ?" on it; a grey dashed "?" sits in the gap between the beakers; the chip "Next: Why does a galvanic cell need two half-cells and an ion path?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: three and two
> Here's where we stopped. Each aluminium atom loses three electrons, but each copper ion takes only two. Electrons can't be left over, and they can't go missing, so how do these two halves fit together? That's what half-equations are for. Let's build them properly first, then **combine** them.

Visual: opens on m3-v09's final frame; the Next chip clears. On "three electrons" the "3e⁻" ring pulses; on "only two" the "2e⁻" ring pulses. On "left over" an orange electron glyph drifts off the end of the Al line and is struck red. On "combine" the aluminium pair slides to the right edge and dims (it returns in scene 7); the task strip writes "build, then combine".

### 2. what a half-equation is
> A half-equation shows just one half of a redox reaction, the oxidation or the reduction, with the electrons written in. In an oxidation, electrons are lost, so they appear on the right, as products. In a reduction, electrons are gained, so they appear on the left, as **reactants**. Oil rig tells you which side.

Visual: gloss chip "half-equation: one half of a redox reaction, with the electrons written in". Two empty templates: "□ → □ + e⁻" (teal, "oxidation: e⁻ on the right") and "□ + e⁻ → □" (violet, "reduction: e⁻ on the left"); on "reactants" the side markers glow. On "Oil rig" the OIL RIG card pulses and moves into the two-checks corner.

### 3. two checks: zinc
> Every half-equation needs two checks. First, the atoms balance. Second, the charge balances, and electrons are how you fix it. Take zinc. Zinc goes to zinc two plus. One zinc on each side, so the atoms are fine. The charge on the left is zero, and on the right it's plus two, so add two electrons to the right. Plus two, minus two, gives **zero**. Both sides match.

Visual: two-checks panel writes "atoms", "charge". "Zn(s) → Zn²⁺(aq)" writes; on "atoms are fine" the atoms check ticks. Charge counters: left "0", right "+2"; on "add two electrons" "+ 2e⁻" slides in on the right (orange); the right counter rewrites "+2 + (−2)"; on "zero" "= 0", and the charge check ticks.

### 4. reductions: copper and chlorine
> Copper ions go the other way. Copper two plus, plus two electrons, gives copper. The left adds to zero, and so does the right. Now chlorine gas becoming chloride ions. Balance the atoms first. Chlorine gas has two atoms, so it makes two chloride **ions**. That's a charge of minus two on the right, so add two electrons to the left. Writing chlorine plus one electron gives one chloride is a common slip, because the atoms don't **balance**.

Visual: zinc line dims up. "Cu²⁺(aq) + 2e⁻ → Cu(s)" with counters "+2 + (−2) = 0" and "0"; both checks tick. Then "Cl₂(g) → Cl⁻(aq)"; on "two chloride ions" the coefficient "2" pops in front of Cl⁻ (atoms tick); counter right "2 × (−1) = −2"; on "add two electrons to the left" "+ 2e⁻" slides in on the left; counter left "0 + (−2) = −2"; charge ticks. On "balance" a chip "Cl₂ + e⁻ → Cl⁻" fades in and is crossed (tag "2 Cl on the left, 1 on the right").

### 5. ion to ion
> Some half-equations have no metal at all. An iron two plus ion can lose one electron to become iron three plus. So iron two plus gives iron three plus, plus one electron. Plus two on the left, and plus three minus one on the right, which is also plus two. **Balanced**.

Visual: "Fe²⁺(aq) → Fe³⁺(aq) + e⁻" (teal); counters "+2" and "+3 + (−1) = +2"; on "Balanced" both checks tick. Grey tag "both in solution: no metal".

### 6. combining: equal electrons
> Now combine. The rule is simple. Electrons lost must equal electrons gained. For zinc and copper ions, zinc loses two, and each copper ion gains two, so just add the two half-equations. The two electrons appear on both sides, so they **cancel**. That leaves zinc plus copper two plus gives zinc two plus plus copper, the equation you've seen since the activity series.

Visual: board clears except the panel. Task strip "combine: Zn with Cu²⁺". The zinc half (teal) over the copper half (violet); the memory line writes in the handwriting style at the top: "Electrons lost = electrons gained." Electron tally "lost 2, gained 2". On "add" the halves slide together into one line "Zn + Cu²⁺ + 2e⁻ → Zn²⁺ + 2e⁻ + Cu"; on "cancel" the two "2e⁻" terms strike teal and fade; the line tidies to "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)".

### 7. unequal electrons: aluminium and copper
> Back to aluminium. Each aluminium atom loses three electrons, and each copper ion gains two. Find the smallest number both go into, which is **six**. Two aluminium atoms lose six electrons, so multiply the aluminium half-equation by two. Three copper ions gain six electrons, so multiply the copper half-equation by **three**. Now add them, and the six electrons cancel. Two aluminium plus three copper two plus gives two aluminium three plus plus three **copper**.

Visual: the zinc result shrinks to the top left. The aluminium pair returns to the centre; task strip "combine: Al with Cu²⁺". Tally "lost 3, gained 2"; on "six" "→ 6" writes amber. On "multiply the aluminium half-equation by two" "× 2" slides into the margin and the line rescales to "2Al → 2Al³⁺ + 6e⁻"; on "three" "× 3" and "3Cu²⁺ + 6e⁻ → 3Cu". On "add them" the lines slide together, "6e⁻" strikes on both sides; on "copper" the result "2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s)".

### 8. check the result
> Always check the final equation both ways. Atoms: two aluminium and three copper on each side. Charge: three copper ions make plus six on the left, and two aluminium ions make plus six on the right. Both **balance**. Think of electrons like money in a trade. Every electron one side pays out, the other side has to **receive**.

Visual: under the result, atoms "Al 2 | 2, Cu 3 | 3" (tick); charge counters "3 × (+2) = +6" and "2 × (+3) = +6"; on "balance" both checks tick teal. On "money in a trade" a small coded ledger glyph: "paid out: 6e⁻" under 2Al, "received: 6e⁻" under 3Cu²⁺, joined by an amber arrow; on "receive" the two amounts flash equal.

### 9. prediction: iron and chlorine (countdown, 3 seconds)
> Quick prediction. Chlorine reacts with iron two plus ions. Each iron ion loses one electron, and each chlorine molecule gains two. Which half-equation do you multiply, and by **what**?

Visual: board clears to the pair "Fe²⁺(aq) → Fe³⁺(aq) + e⁻" and "Cl₂(g) + 2e⁻ → 2Cl⁻(aq)"; tally "lost 1, gained 2"; empty margin boxes "× ?". On "what" the 3 s `Countdown` ring runs.

### 10. combining iron and chlorine
> The iron one, by two. Two iron two plus ions lose two electrons, and one chlorine molecule gains them. Add and cancel, and you get two iron two plus plus chlorine gives two iron three plus plus two chloride ions. Charge check: plus four on the left, and plus six minus two on the right, which is also plus **four**.

Visual: "× 2" slides beside the iron half: "2Fe²⁺ → 2Fe³⁺ + 2e⁻"; "× 1" (grey) beside chlorine. Lines add; "2e⁻" strikes; result "2Fe²⁺(aq) + Cl₂(g) → 2Fe³⁺(aq) + 2Cl⁻(aq)". On "Charge check" counters "2 × (+2) = +4" and "2 × (+3) + 2 × (−1) = +4"; on "four" the charge check ticks.

### 11. the trap: it looks balanced
> Here's the trap that catches people. Write aluminium plus copper two plus gives aluminium three plus plus copper. One of each atom, so it looks balanced. But the charge is plus two on the left, and plus three on the right. An electron has appeared from nowhere. If the charge doesn't balance, the equation is **wrong**, even when the atoms do. And never subtract one half-equation from another. Multiply, add, then **cancel**.

Visual: board clears. "Al + Cu²⁺ → Al³⁺ + Cu" writes; atoms check ticks; counters "+2" and "+3"; on "from nowhere" an orange electron glyph pops up with a red "?"; on "wrong" the charge check crosses red and the whole line strikes red. On "never subtract" a chip "subtract one half from the other" fades in and is crossed; on "cancel" the three words "multiply, add, cancel" write as a rule line under the panel.

### 12. back to a full equation
> Half-equations build the ionic equation. To get the full equation, put the spectators back. In the demonstration, the copper ions came from copper sulfate, and sulfate ions are spectators. Add three sulfates to each side, and you get two aluminium plus three copper sulfate gives aluminium sulfate plus three **copper**.

Visual: the scene 7 result returns: "2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu". On "spectators back" three grey "SO₄²⁻" tokens fly in to each side (m3-v03's token flight). On "copper" the full line writes: "2Al(s) + 3CuSO₄(aq) → Al₂(SO₄)₃(aq) + 3Cu(s)" with a green atom tally "Al 2, Cu 3, S 3, O 12" (tick). `y11c-cuso4-beaker-al-salt-v1.png` (from m3-v08) small at the right.

### 13. where this method stops
> Some half-equations, like the one for permanganate, also need water and hydrogen ions to balance oxygen and hydrogen. Those need extra steps, so we'll leave them for later. But the core method never changes. Balance atoms, balance charge with electrons, make the electrons equal, then add and **cancel**.

Visual: a grey card slides in at the right with "MnO₄⁻ → Mn²⁺" greyed and the tag "needs H₂O and H⁺: later". On "core method" the method strip writes down the left in four numbered steps: "1. atoms", "2. charge (add e⁻)", "3. equal electrons (× )", "4. add and cancel; check"; on "cancel" the strip glows teal.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Magnesium ribbon is placed in silver nitrate solution, and crystals of silver form. Write the oxidation and reduction half-equations, and combine them into a balanced net ionic equation. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A strip of magnesium ribbon is placed in silver nitrate solution, AgNO₃(aq). Silver crystals form on the ribbon and magnesium ions enter the solution. (a) Write the oxidation half-equation. (b) Write the reduction half-equation. (c) Combine them to give the balanced net ionic equation. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the method strip hides).

### 15. feedback 1 (brief)
> Magnesium gives magnesium two plus plus two electrons. A silver ion plus one electron gives silver. Magnesium loses two, and each silver ion gains one, so double the silver half-equation. Magnesium plus two silver ions gives magnesium two plus plus two silver. Writing one silver ion balances the atoms, but leaves the charge at plus one against plus **two**.

Visual: card shrinks to the top. "Mg(s) → Mg²⁺(aq) + 2e⁻" (teal); "Ag⁺(aq) + e⁻ → Ag(s)" (violet) with "× 2"; result "Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s)", counters "+2" and "+2". On "two" a chip "Mg + Ag⁺ → Mg²⁺ + Ag" fades in and is crossed (counters "+1 | +2"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Aluminium dissolves in hydrochloric acid, giving aluminium ions and hydrogen gas. The reduction half-equation is two H plus, plus two electrons, gives H two. Write the oxidation half-equation, and the balanced net ionic equation. Pause here to answer.

Visual: `QuestionCard`: "Aluminium reacts with dilute hydrochloric acid to form aluminium ions and hydrogen gas. The reduction half-equation is: 2H⁺(aq) + 2e⁻ → H₂(g). (a) Write the oxidation half-equation. (b) Write the balanced net ionic equation for the reaction. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 17. feedback 2 (brief)
> Aluminium gives aluminium three plus plus three electrons. Three and two both go into six, so multiply the aluminium half-equation by two, and the hydrogen one by three. Two aluminium plus six H plus gives two aluminium three plus plus three H two. The charge is plus six on each side. Aluminium plus two H plus gives aluminium three plus plus H two balances the atoms, but not the **charge**.

Visual: card shrinks. "Al(s) → Al³⁺(aq) + 3e⁻" with "× 2"; "2H⁺(aq) + 2e⁻ → H₂(g)" with "× 3"; "6e⁻" strikes; result "2Al(s) + 6H⁺(aq) → 2Al³⁺(aq) + 3H₂(g)" with counters "+6 | +6". On "charge" a chip "Al + 2H⁺ → Al³⁺ + H₂" fades in and is crossed (counters "+2 | +3"). Hold about 1 second.

### 18. conclusion and handoff
> When zinc sits in copper sulfate, electrons pass straight from zinc atoms to copper ions, right at the metal's surface, and the energy just warms the solution a little. But each half-equation could happen on its own. Put zinc in a beaker of zinc sulfate, copper in a beaker of copper sulfate, and join the two metals with a wire. Would electrons flow through the wire? Why does a galvanic cell need two half-cells and an ion **path**?

Visual: board clears. `y11c-cuso4-beaker-zinc-after-v1.png` (from m3-v07) at the centre; on "right at the metal's surface" a small lens shows electrons hopping from Zn atoms to Cu²⁺ at the surface; on "warms the solution" a soft amber shimmer and a tag "energy released as heat". On "each half-equation could happen on its own" the plate splits into two: `y11c-halfcell-zn-v1.png` (left, tag "ZnSO₄(aq)") and `y11c-halfcell-cu-v1.png` (right, tag "CuSO₄(aq)"), with a gap; the zinc half-equation writes above the left beaker (teal) and the copper one above the right (violet). On "join the two metals with a wire" a black wire arcs from strip to strip; on "through the wire" an amber "e⁻ ?" sits on it; a grey dashed "?" appears in the gap. On "path" the chip "Next: Why does a galvanic cell need two half-cells and an ion path?" writes. Hold about 2 seconds. This is the final frame (m3-v11 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A half-equation shows the oxidation or the reduction, with electrons: oxidation, e⁻ on the right (Zn → Zn²⁺ + 2e⁻); reduction, e⁻ on the left (Cu²⁺ + 2e⁻ → Cu).
2. Check atoms first, then charge; add electrons to balance the charge (Cl₂ + 2e⁻ → 2Cl⁻).
3. To combine: multiply so electrons lost = electrons gained, add, cancel the electrons, then check atoms and charge. Never subtract.
4. Example: 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu (6e⁻; charge +6 each side).

Memory aid (large, on the notes screen): *Electrons lost = electrons gained.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why electrons sit on one side (2); why charge must balance (3, 11); why halves are scaled before adding (6, 7); why electrons cancel (6, 7); why a balanced-looking equation can be wrong (11); why spectators can be added back (12).
- **Misconceptions addressed:** electrons on the wrong side (2); Cl₂ + e⁻ → Cl⁻ (4, crossed); atoms balanced means done (11, crossed; A1 and A2 crossed); subtracting half-equations (11, crossed).
- **One idea at a time:** writing (2 to 5), combining equal (6), unequal (7, 8), applying (9, 10), the trap (11), the full equation (12), the boundary (13).
- **Video makes it easier:** charge counters fill as the electrons slide in (3 to 5); multipliers rescale each line in the margin (7, 10); matching electrons strike and fade as the halves merge (6, 7, 10); the ledger shows paid equals received (8); a stray electron appears when the charge fails (11).
- **Response opportunity:** one 3 s prediction (9); two unseen HSC-style tasks, all needed species on the card, 10 s each, nothing answer-bearing. Feedback about 27 s and 29 s.
- **Avoided double teaching:** OIL RIG and oxidation numbers (m3-v09), net ionic equations and spectators (m3-v03), balancing atoms (Module 2), the aluminium demonstration (m3-v08).
- **Syllabus coverage:** `C3-IQ2-06` "construct relevant half-equations" (2 to 5, A1, A2) "and balanced overall equations" (6 to 8, 10, 12, A1, A2) "to represent a range of redox reactions" (metal and ion, non-metal and ion, ion and ion, metal and acid).
- **Out of scope by design:** half-equations needing H₂O, H⁺ or OH⁻; galvanic cells; reduction potentials.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Mg(s) → Mg²⁺(aq) + 2e⁻ (1 mark). (b) Ag⁺(aq) + e⁻ → Ag(s) (1 mark). (c) Reduction × 2 to equal 2e⁻: Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s); charge +2 each side (1 mark). Classic mistake (crossed): "Mg + Ag⁺ → Mg²⁺ + Ag".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) Al(s) → Al³⁺(aq) + 3e⁻ (1 mark). (b) Oxidation × 2 and reduction × 3 (6e⁻ each) (1 mark): 2Al(s) + 6H⁺(aq) → 2Al³⁺(aq) + 3H₂(g); atoms 2 Al, 6 H; charge +6 each side (1 mark). Classic mistake (crossed): "Al + 2H⁺ → Al³⁺ + H₂".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Zinc half | Zn → Zn²⁺ + 2e⁻ (0 = +2 − 2) | 3, 6, notes |
| Copper half | Cu²⁺ + 2e⁻ → Cu (0 = 0) | 4, 6, 7 |
| Chlorine half | Cl₂ + 2e⁻ → 2Cl⁻ (−2 = −2) | 4, 9, 10 |
| Iron(II) half | Fe²⁺ → Fe³⁺ + e⁻ (+2 = +2) | 5, 9, 10 |
| Zn with Cu²⁺ | Zn + Cu²⁺ → Zn²⁺ + Cu (2e⁻; +2 = +2) | 6 |
| Al with Cu²⁺ | × 2 and × 3, 6e⁻; 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu (+6 = +6) | 7, 8, notes |
| Fe²⁺ with Cl₂ | × 2 and × 1, 2e⁻; 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻ (+4 = +6 − 2) | 9, 10 |
| Trap | Al + Cu²⁺ → Al³⁺ + Cu (+2 against +3) | 11 |
| Full equation | 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu (Al 2, Cu 3, S 3, O 12) | 12 |
| A1 | Mg + 2Ag⁺ → Mg²⁺ + 2Ag (+2 = +2); crossed Mg + Ag⁺ (+1 against +2) | 14, 15 |
| A2 | 2Al + 6H⁺ → 2Al³⁺ + 3H₂ (+6 = +6); crossed Al + 2H⁺ → Al³⁺ + H₂ (+2 against +3) | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked by an atom-and-charge counting script (5 November); Codex to re-check.

- Balanced: Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu; Cl₂ + 2e⁻ → 2Cl⁻; Fe²⁺ → Fe³⁺ + e⁻; Al → Al³⁺ + 3e⁻; Mg → Mg²⁺ + 2e⁻; Ag⁺ + e⁻ → Ag; 2H⁺ + 2e⁻ → H₂; Zn + Cu²⁺ → Zn²⁺ + Cu; 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu; 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻; 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu; Mg + 2Ag⁺ → Mg²⁺ + 2Ag; 2Al + 6H⁺ → 2Al³⁺ + 3H₂; 2Al + 6HCl → 2AlCl₃ + 3H₂ (author only).
- Crossed, confirmed unbalanced: Cl₂ + e⁻ → Cl⁻ (atoms); Al + Cu²⁺ → Al³⁺ + Cu (charge +2, +3); Mg + Ag⁺ → Mg²⁺ + Ag (charge +1, +2); Al + 2H⁺ → Al³⁺ + H₂ (charge +2, +3).

## Memory aid check

- **"Electrons lost = electrons gained."** Assumptions checked: it applies to the whole reaction after scaling, not to each half-equation on its own; it is a conservation statement (electrons are neither made nor destroyed in a chemical reaction). It helps a new case: A1 and A2, and in m3-v11 the electron count through the wire equals the electrons gained at the copper.
- **Money analogy (scene 8).** One sentence: the amount one side pays equals the amount the other receives. Assumption: no "change" or leftover (electrons are never free in the final equation). Not extended to "spending" (author note e).
- **Rule line: "Multiply, add, then cancel."** Order-sensitive; prevents subtracting (site misconception 3).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,046 characters**, 19 scenes. At 13.3 characters per second the speech is about 455 s; add about 5 s of settling (the merges in 6, 7 and 10, the token flight in 12, the plate split in 18), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 539 s**.

## Scene list and build ids

Lesson key `c-y11-m3-v10` (route chem-y11-m3-v10; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v10`.

In order (19 scene headings, all `### N.`): hook-three-two, half-equation, two-checks-zinc, reductions, ion-to-ion, combine-equal, combine-unequal, check-result, prediction-iron-chlorine, iron-chlorine, trap, full-equation, method-stops, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction-iron-chlorine (`explain` ending in a 3 s hold), attempt-1, attempt-2 and key-notes (`hold`). Transitions: the opening frame into scene 1 by clearing the Next chip; 1 to 2 camera continue (the aluminium pair parks at the right); 2 to 3 to 4 to 5 camera continue (each half writes under the last, earlier ones dimming up); 5 to 6 board clear (panel stays); 6 to 7 to 8 camera continue (the aluminium pair returns); 8 to 9 board clear; 9 to 10 camera continue; 10 to 11 board clear; 11 to 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v10-learning-review.md`, `checks/c-y11-m3-v10-science-check.md`.

## Assets

Have (inspected 5 November; scaled uniformly only, never stretched):
- Requested in `chem-y11-m3-v07.md`: `y11c-cuso4-beaker-zinc-after-v1.png`: scene 18.
- Requested in `chem-y11-m3-v08.md`: `y11c-cuso4-beaker-al-salt-v1.png`: scene 12 (small).
- Requested in `chem-y11-m3-v11.md` (the aligned galvanic set; first seen here): `y11c-halfcell-zn-v1.png`, `y11c-halfcell-cu-v1.png`: scene 18 and the final frame.

Need (new plates): none of its own. The galvanic set is briefed once, in `chem-y11-m3-v11.md`, so that all its layers are painted and aligned together; if it is late, the final frame uses `y11c-znso4-beaker-copper-v1.png`'s colourless beaker with a coded zinc strip label and `c11-cuso4-beaker-dissolved-v1.png` with a coded copper label (tags only, no painted strips).

Coded: half-equation templates, charge counters, two-checks panel, electron tally, multipliers, merges and cancels, ledger glyph, method strip, token flight, wire, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v10)

No new plates of its own (see Assets). Codex confirms that the m3-v11 galvanic set's two half-cell plates are delivered before this lesson is built, and reports in `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every equation under "Numbers to verify" (atoms and charge), including that each crossed equation is genuinely unbalanced, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson08.sa.html` (sections named in Scope).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing (A2's given reduction half-equation is a stimulus).
4. Confirm the syllabus quote matches `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals `chem-y11-m3-v09.md`'s "Final frame", and send this design's final frame to the m3-v11 designer.

## YouTube metadata (draft)

Title: Half-Equations: Balancing and Combining Redox Equations | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Aluminium loses three electrons, copper ions gain two: how do they fit together? Learn to write half-equations with the electrons on the right side, check atoms and charge every time, and combine half-equations by making electrons lost equal electrons gained. Worked examples: zinc and copper ions, aluminium and copper ions, iron(II) ions and chlorine, then the full equation with spectator ions. See the classic "looks balanced" trap, and try two exam-style questions.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"construct relevant half-equations and balanced overall equations to represent a range of redox reactions"

Previous: How do electron transfer and oxidation number identify redox? Next: Why does a galvanic cell need two half-cells and an ion path?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Acidic-medium half-equations (root).** The route stops before them; scene 13 names them as "later". No later Year 11 video on the route owns them yet; root to decide whether a short skills video is needed (the site's lesson 8 teaches the MnO₄⁻ method). Not designed here.
- **2. Scene 11 (learning review).** The trap is a separate scene because charge balance is the most commonly missed check (site). If the review finds the video long, merge the "never subtract" sentence into scene 7.
- **3. Galvanic plates (root).** The final frame depends on the m3-v11 plate set; a coded fallback is written in Assets.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (are four single half-equations before any combining too many; is the money sentence useful), then the science check and Codex error check.
- Checker output (5 November): narration 6,046 characters; per scene (1 to 19): 289, 308, 361, 433, 265, 364, 453, 319, 180, 311, 418, 316, 300, 219, 355, 261, 389, 430, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
