# G03d: Equilibrium calculations: HSC-style practice, part 2 (design)

Status: Revision 3 (16 Oct): split for length; ready to voice

Revision 3 (16 Oct): created by splitting the G03c practice set (take01 measured at about 13:58, too long) into two videos, following the owner's choice for G03. This is part 2: questions 3 (NOCl, flip K, tiny K) and 4a/4b (NO2 + SO2, find K, then a hidden perfect square). Every question scene keeps its G03c Revision 2 text character for character, so its G03c take01 audio can be reused (takes are matched by exact text; source `g03c/take01-superseded/voice-manifest.json` and `g03c/measured/lesson.json`). New narration: a short hook naming the part 2 traps and a decision board for them. Key notes reuse the standard take. Reviews carried over: `../checks/g03d-learning-review.md` and `../checks/g03d-claude-science-check.md` (copied from the G03c reviews, with a split note). Split notes: `../checks/g03cd-split-notes.md`. Part 1 is `chem-m5-g03c.md`.

Working title: "Equilibrium calculations: HSC-style practice, part 2". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries "HSC-style question, written for HSCScience". The focus is the correct method and avoiding classic mistakes; learner copy never mentions marks. Owner rules applied: "I for initial, C for change, E for equilibrium" (scene 1); E row first (key note 1, from part 1; no part 2 question has a single measured value); every rearrangement says "multiply both sides by the bottom, then divide" (scenes 2c, 4c); the owner quadratic line in scene 4b ("You can use it if you like, but HSC questions are written so you shouldn't need it"); K without a unit; "Pause here to answer." with a 10 s countdown after each question. Questions keep the numbers 3 and 4 from the full set, so the recorded "Question three" and "Question four" lines stay true. **Route id:** `chem-m5-g03d`. Playlist order: after G03c (suggest 12.7), before C9.

## Decisions

- **Main question:** *In an equilibrium calculation you have not seen, where is the trap, and what do you do first so it cannot catch you?* Part 2 answers it for a K given for the other equation, a tiny K with the 5 per cent check on the amount actually taken off, and a two-part question with a hidden perfect square.
- **Trap coverage (learner-visible as the trap checklist, scene 1 and scene 5):**

  | Trap | Where |
  |---|---|
  | Moles given, not concentrations: divide by the volume first | Q3 (4.00 L), Q4a (5.00 L), Q4b (2.00 L) |
  | A reversed equation (K flips); doubled (K squares) | Q3 (K given for the equation that makes NOCl; the equation is rewritten the way the vessel runs and K flips with it); doubling in the decision board and key notes (a C6a callback) |
  | Tiny K approximation with the 5 per cent check on the amount taken off | Q3 (the amount taken off is 2x, 4 per cent: passes, only just) |
  | Convert back to moles | Q3 (moles of chlorine) |
  | A perfect square hidden in a K question | Q4b (x times x over (0.250 - x)(0.250 - x)) |
  | Multi-step: find K, then use it; report what was asked | Q4a then Q4b (same temperature, same K); x = 0.225 is the change, [NO2] = 0.0250 |

- **Questions in order:** Q3 type 3 with a reversed K and a tiny K (cube, 5 per cent check, then moles); Q4a type 1 (find K) and Q4b type 3 with a hidden perfect square using the K from Q4a.
- **No question needs the quadratic formula.** Q3 has a tiny K; Q4a gives equilibrium values; Q4b is a perfect square. Scene 4b says the owner line and the decision board footer carries it.
- **Entry knowledge:** G03c (part 1: the trap checklist, divide first, E row first, Change = E minus I, the methanol mixture that ran backwards and kept its K), C5, C6a (reversed and doubled equations), C6b (x from the coefficients, perfect square with the positive root, tiny K with the drop and the 5 per cent check, "multiply both sides by the bottom, then divide"), G03a and G03b. Year 11: c = n / V, mole ratios, square and cube roots. Scene 2b refers back to question 2 ("Question two ran backwards too"); the visual shows a thumbnail of the part 1 methanol strip labelled "part 1", so a learner who has not watched part 1 still sees what it refers to.
- **Start and stop:** starts at "part two of the practice set: questions three and four"; stops after three answers with the traps avoided and a decision board of first moves. No new method. Not covered: Q against K (G03a), amount added and huge K (G03b), temperature and K (C9), colorimetry and mixing (p02), Ksp, acids, marks.
- **Placement and handoff:** after G03c; next is C9, temperature and K (scene 5, "Next: how temperature changes K").
- **Learner-visible definitions:** callbacks: ICE table; "the amount taken off the start" (the 5 per cent check); "perfect square" (the whole fraction is something squared); "tiny K" (shown as a power of ten); "trap" (from part 1, restated in scene 1 by example).
- **Units policy:** mol/L in every column heading and on the givens cards, mol on the answer lines, K without a unit with the quiet tag "K: no unit written" at each substitution.
- **Mistake scenes:** none as a template. Each question ends with its own classic mistake (Q3 K not flipped; Q4b x reported as the answer).
- **Memory aids** (bank draft, recalled on cards only): "Flip the equation, flip K. Multiply the equation, power K." and from C6b "Perfect square: square root. Tiny K: drop the x, then check it." Answer chip: "Answer what was asked."
- **Reuse (no prototype components):** the C6 three-zone board, ICE table component, givens card, C5 expression builder, C6 algebra line, C6b check ruler and two-shortcut card, type badges, G03a coded sealed vessels (orange-yellow NOCl tint, faint brown NO2 tint), countdown ring, wrong-answer chips, key notes board, and the G03c trap checklist (six part 2 rows) and convert-back chain. One visual system throughout. No painted art needed.
- **Author notes (not learner copy):** (a) **Q3 NOCl.** A textbook exercise quotes K = 1.6 x 10^-5 for 2NOCl ⇌ 2NO + Cl2 "at 35 C"; standard data give about 7 x 10^-9 at 35 C, and Kc reaches 1.6 x 10^-5 near 420 K (about 150 C). The card says "at a certain temperature" with the chip "illustrative value". (b) **Q3 exact answer.** x = 0.00974 mol/L, 0.0390 mol of Cl2; the shortcut (0.0400 mol) is 2.7 per cent high; an unspoken tag gives the exact value. (c) **Q4 NO2 + SO2.** K = 81.0 from the data is realistic (standard data about 80 at 733 K; textbook sets about 85 at 460 C). Equal gas count, so the volume cancels in Q4a; not said aloud (it would invite skipping the division Q4b needs). (d) **Q4b root.** The negative root gives x = 0.28125, more than the start, so it is rejected (unspoken grey tag). (e) **Running backwards is not a reason to flip K.** K belongs to the equation as written. Q2 (part 1) runs backwards and keeps its K because its equation is kept as given; in Q3 the equation is rewritten the way the vessel runs, and only that rewrite flips K. (f) **Pronunciation:** "N O C L" letters, "nitrosyl chloride" said once, "N O two", "S O two", "N O", "S O three", "ten to the four", "ten to the minus five", "ten to the minus six", "four x cubed", "per cent", "two x". Check that 0.000800 and 0.0648 are clear.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as G03c: made plus green, used up minus red, K teal, pen highlight for rings; NOCl orange-yellow tint, NO pale, Cl2 yellow-green; NO2 brown, SO2 pale, NO pale, SO3 pale. Board layout in every question (three zones, constant) as G03c. A small type badge sits in the top-right corner of each question. Earlier questions are cleared before the next card writes on; only the trap checklist (shrunk to a strip on the far left) persists, ticking the traps each question met. During each countdown the strip dims to a faint outline and returns after the hold.

### 1. hook-traps (part two: the harder traps; new)
> This is part two of the practice set, with questions three and four. The method is the same as part one: divide by the volume first, then the I C E table, I for initial, C for change, E for equilibrium. Question three gives K for the **other equation**, so you will have to flip it, and its K is **tiny**, so the 5 per cent check goes on the amount actually taken off, which here is two x. Question four has **two parts**: part a finds K, and part b hides a **perfect square**. Pause and try each one, then we'll work it through one step at a time.

Visual: heading "Part 2: the harder traps" writes on, with a small faded thumbnail of the part 1 checklist ("part 1: divide first, E row first, convert back") in the top-left corner. On "divide by the volume first" a mini ICE table writes with the letters I, C and E expanding to Initial, Change and Equilibrium on their words. The part 2 trap checklist builds on the left, one row per trap with an empty tick box: "moles given: divide by the volume", "K for a different equation", "tiny K and the 5% check", "convert back to moles", "a hidden perfect square", "two parts, one K". "moles given" writes on with the method line; on "other equation" its row writes and a small equation strip flips with a curved arrow; on "tiny" its row writes with a small log mark at 10^-5; "convert back to moles" writes on quietly after it; on "two parts" two question cards labelled 3 and 4 fan out at the right, the second with tabs "a" and "b", each with the tag "HSC-style question, written for HSCScience", and the "two parts, one K" row writes; on "perfect square" its row writes. Hold about 1 second; the checklist then shrinks to a strip on the far left.

### 2a. q3-question (question 3: K for the other equation; reuse take)
> Question three. For two N O plus chlorine making two N O C L, nitrosyl chloride, K is **6.25 times ten to the four** at a certain temperature. **2.00 moles** of N O C L is placed in an empty **4.00 litre** vessel at that temperature, and some of it **splits**. How many **moles of chlorine** are present at equilibrium? Pause here to answer.

Visual: fresh board. Type badge "Type 3: K + start". Task line "Find the moles of Cl2 at equilibrium." Equation strip 2NO(g) + Cl2(g) ⇌ 2NOCl(g) exactly as given. A coded sealed vessel with an orange-yellow tint. Givens card: "K = 6.25 x 10^4 for 2NO + Cl2 ⇌ 2NOCl (this temperature)", "vessel: 4.00 L", "start: NOCl 2.00 mol, no NO, no Cl2", chips "illustrative value" and "HSC-style question, written for HSCScience". On "splits" a single NOCl in the vessel breaks (coded dots) with a pen ring. Empty ICE outline (labels only). Countdown ring 10 seconds with "Pause here to answer." on screen. Nothing answer-bearing: the equation strip is not flipped and K is not changed.

### 2b. q3-flip-and-table (flip K, then the table; reuse take)
> Look at which way the equation runs. K was given for the equation that **makes** N O C L, but this vessel starts with N O C L, which **splits**. K belongs to the equation as it is written, so write the equation the way this vessel runs, and **flip K with it**: one over 6.25 times ten to the four is **1.6 times ten to the minus five**, which is tiny. Question two ran backwards too, but we kept its equation as given, so its K stayed the same. Now the table. The start is 2.00 over 4.00, **0.500 moles per litre**. If x of chlorine forms, then two x of N O C L splits and two x of N O forms, so the equilibrium row is **0.500 minus two x**, two x, and x.

Visual: on "makes" a pen arrow under the given equation points left to right; on "splits" the vessel's split NOCl is ringed; on "write the equation the way this vessel runs" the equation strip flips with a curved arrow to 2NOCl(g) ⇌ 2NO(g) + Cl2(g). On "flip K with it" the K line writes "K = 1 / (6.25 x 10^4) = 1.6 x 10^-5" with the C6a aid chip "Flip the equation, flip K." and the tag "same temperature, equation as written". On "tiny" a small log scale beside K shows 10^-5 far below 1. On "Question two ran backwards too" a small thumbnail of the part 1 methanol equation strip with its right-to-left pen arrow, labelled "Q2 (part 1): K = 14.6, equation kept", pops in beside the K line and fades. A small unspoken grey tag under the K line: "or keep the given equation: [NOCl]^2 / ([NO]^2 [Cl2]) = 6.25 x 10^4 gives the same x". On "0.500 moles per litre" the division runs on the card into the NOCl Initial cell; NO and Cl2 tick "0". On "x of chlorine" the bracket "x = Cl2 formed, mol/L" points at the Cl2 column; the coefficient chips "2 : 2 : 1" fly in and the Change row fills "-2x", "+2x", "+x"; the Equilibrium row fills "0.500 - 2x", "2x", "x". Trap strip: "K for a different equation" and "moles given" tick.

### 2c. q3-drop-and-solve (drop the two x, solve the cube; reuse take)
> K is two x all squared, times x, over 0.500 minus two x, all squared. K is tiny, so very little splits: **drop the two x** from the bottom, and keep the x on top, because that is the answer. The bottom becomes 0.500 squared, **0.250**. On top, two x all squared, times x, is **four x cubed**. **Multiply both sides by the bottom**, 0.250: four x cubed is 4.0 times ten to the minus six. Then **divide both sides by four**: x cubed is **1.0 times ten to the minus six**, and x is **0.0100**.

Visual: the C5 builder writes "K = [NO]^2 [Cl2] / [NOCl]^2 = (2x)^2 x / (0.500 - 2x)^2 = 1.6 x 10^-5", tag "K: no unit written". On "drop the two x" the "- 2x" greys and slides out, the bottom becomes "0.500^2" and "≈" replaces "="; the NOCl Equilibrium cell shades to "≈ 0.500". On "keep the x on top" a pen ring holds "(2x)^2 x" with the tag "keep: this is the answer". The algebra line runs in beats: "0.500^2 = 0.250", "(2x)^2 x = 4x^3", "4x^3 / 0.250 = 1.6 x 10^-5"; on "Multiply both sides by the bottom" a pen arrow carries the 0.250 across with the aside "multiply both sides by the bottom", giving "4x^3 = 1.6 x 10^-5 x 0.250 = 4.0 x 10^-6"; on "divide both sides by four" the aside "divide by 4" and "x^3 = 1.0 x 10^-6", "x = cube root = 0.0100 mol/L" on its word. Unspoken crossed chip: "(2x)^2 = 2x^2" with the correction "(2x)^2 = 4x^2". Only the table, the K line and the algebra line are on the board; the givens card shrinks to a one-line strip ("K = 1.6 x 10^-5, start 0.500 mol/L, 4.00 L").

### 2d. q3-check-and-moles (the 5 per cent check on two x, and the moles; reuse take)
> Check the shortcut. The amount taken off the start is **two x**, not x: 0.0200 out of 0.500 is **4 per cent**. That is under about 5, so it passes, but only just. Chlorine is 0.0100 moles per litre, times 4.00 litres, which is **0.0400 moles**. The classic mistake is putting 6.25 times ten to the four into the splitting expression **without flipping it**. That gives x of about 16 moles per litre, far more than the 0.500 you started with, which is impossible.

Visual: the C6b check ruler: the start bar 0.500 with the sliver "2x = 0.0200" drawn to scale close to the dashed 5 per cent line (0.025), label "0.0200 / 0.500 = 4%" on "4 per cent" with a tick and the tag "5%: a school rule of thumb"; a crossed ghost chip, unspoken, "x / 0.500 = 2%: wrong amount, NOCl loses 2x". On "0.0400 moles" the convert-back chain: "[Cl2] = 0.0100 mol/L x 4.00 L = 0.0400 mol" with a tick, and a small unspoken tag "exact answer 0.0390 mol; the shortcut is about 3% high". On "without flipping it" a crossed chip: "4x^3 = 6.25 x 10^4 x 0.250, x^3 = 3906, x = 15.7 mol/L > 0.500 start: impossible" with a pen arrow to the K on the givens card and the caption "K not flipped". Trap strip: "tiny K and the 5% check" and "convert back to moles" tick. Hold about 2 seconds.

### 3a. q4a-question (question 4, part a: find K; reuse take)
> Question four has two parts. Nitrogen dioxide and sulfur dioxide react to make nitrogen monoxide and sulfur trioxide, all gases. At 460 degrees, a **5.00 litre** vessel at equilibrium holds 0.100 moles of N O two, 0.200 of S O two, **0.900** of N O and **1.80** of S O three. Part a: calculate K. Pause here to answer.

Visual: fresh board. Type badge "Type 1: every equilibrium value given". Task line "4(a) Calculate K." with a greyed placeholder line "4(b) uses your K" so the learner knows a second part follows. Equation strip NO2(g) + SO2(g) ⇌ NO(g) + SO3(g). Coded sealed vessel with a faint brown tint. Givens card grouped: "vessel: 5.00 L", "at equilibrium: NO2 0.100 mol, SO2 0.200 mol, NO 0.900 mol, SO3 1.80 mol", "460 C", tags "illustrative amounts" and "HSC-style question, written for HSCScience". Countdown ring 10 seconds with "Pause here to answer." on screen. Nothing answer-bearing.

### 3b. q4a-answer (divide first, then K; reuse take)
> Divide each amount by **5.00**: 0.0200, 0.0400, 0.180 and 0.360 moles per litre. Every coefficient is one, so K is N O times S O three, over N O two times S O two. On top, 0.180 times 0.360 is 0.0648. Underneath, 0.0200 times 0.0400 is 0.000800. So **K is 81.0**.

Visual: on "5.00" each amount divides on the givens card into a "mol/L" column: 0.0200, 0.0400, 0.180, 0.360 (pen arrows, each on its word). The C5 builder writes K = [NO][SO3] / ([NO2][SO2]); the values drop in; the working writes in beats: "0.180 x 0.360 = 0.0648", "0.0200 x 0.0400 = 0.000800", "K = 0.0648 / 0.000800 = 81.0" larger, teal, tag "K: no unit written". The result "K = 81.0 (460 C)" then lifts into a small teal card that slides to the top-right and stays for part b, labelled "from part a". Trap strip: "moles given" ticks again (a second tick mark).

### 4a. q4b-question (question 4, part b: use that K; reuse take)
> Part b. At the **same temperature**, 0.500 moles of N O two and 0.500 moles of S O two are placed in an empty **2.00 litre** vessel. Find the concentration of **N O two** at equilibrium. Pause here to answer.

Visual: the part a working clears; the teal "K = 81.0 (460 C), from part a" card stays top-right. Task line "4(b) Find [NO2] at equilibrium." Same equation strip. Givens card: "same temperature: 460 C", "vessel: 2.00 L", "start: NO2 0.500 mol, SO2 0.500 mol", "start: no NO, no SO3". On "same temperature" a pen line joins the givens line to the teal K card. Empty ICE outline (labels only). Countdown ring 10 seconds with "Pause here to answer." on screen. Nothing answer-bearing: no x, no root signs, no shortcut card.

### 4b. q4b-square (same K, and a hidden perfect square; reuse take)
> Same temperature, so the **same K**: 81.0 from part a. The start is 0.250 of each reactant. Each reactant changes by minus x, and each product by plus x. So K is x times x, over 0.250 minus x, times 0.250 minus x. That looks like it needs the **quadratic formula**. You can use it if you like, but HSC questions are written so you shouldn't need it, so look again. The top is **x squared**, and the bottom is **0.250 minus x, all squared**. It is a **perfect square**, because the two reactants started equal.

Visual: on "same K" the teal card pulses and its value flies into the K line. The divisions run on the card (0.500 / 2.00 = 0.250, twice) into the Initial row: 0.250, 0.250, 0, 0. Change "-x", "-x", "+x", "+x" (chips "1 : 1 : 1 : 1"); Equilibrium "0.250 - x", "0.250 - x", "x", "x". The C5 builder writes "x · x / ((0.250 - x)(0.250 - x)) = 81.0". On "quadratic formula" a grey sketch of the expanded form "80x^2 - 40.5x + 5.0625 = 0" writes small and is crossed, caption "You can use it if you like, but HSC questions are written so you shouldn't need it". On "x squared" the top rewrites as "x^2"; on "all squared" the two bottom factors ring together and rewrite as "(0.250 - x)^2", with a pen line to the givens "NO2 0.500 mol, SO2 0.500 mol" and the tag "equal starts". On "perfect square" the C6b two-shortcut card appears with its "Perfect square → square root" half ticked; the line rewrites "(x / (0.250 - x))^2 = 81.0". Trap strip: "a hidden perfect square" and "two parts, one K" tick.

### 4c. q4b-solve (take the root, then answer what was asked; reuse take)
> Take the square root of both sides: x over 0.250 minus x is **9.00**. **Multiply both sides by the bottom**, 0.250 minus x: x equals 2.25 minus 9 x. Add 9 x to both sides, so ten x is 2.25, then **divide by ten**: **x is 0.225**. But the question asks for **N O two**, which is 0.250 minus x: **0.0250 moles per litre**. Check: 0.225 squared over 0.0250 squared is 81. The classic mistake is stopping at **x** and giving 0.225 as the answer. x is the change, not the N O two.

Visual: root signs draw over both sides; "x / (0.250 - x) = 9.00" with the tag "positive root: concentrations are positive" (an unspoken grey tag beside it: "-9.00 gives x = 0.281, more than the start"). The algebra line: on "Multiply both sides by the bottom" a pen arrow carries "(0.250 - x)" across with the aside "multiply both sides by the bottom", giving "x = 9.00 (0.250 - x)", then "x = 2.25 - 9x"; the 9x slides across, "10x = 2.25"; on "divide by ten" the aside "divide by 10" and "x = 0.225" on its word. On "N O two" the task line pulses and a pen arrow runs from it to the NO2 Equilibrium cell "0.250 - x", which ticks "0.250 - 0.225 = 0.0250 mol/L" with a tick; the other cells tick 0.0250, 0.225, 0.225. The check writes "0.225^2 / 0.0250^2 = 0.050625 / 0.000625 = 81.0" with a teal "= K" tick. On "stopping at x" a crossed chip "[NO2] = 0.225: that is x, the change" with a pen arrow to the "-x" cell. A second crossed chip, unspoken: "drop x: x^2 / 0.0625 = 81, x = 2.25 > 0.250 start: K is not tiny". Memory aid chip: "Answer what was asked." Hold about 2 seconds.

### 5. decision-board (what you see, what you do first; new)
> So here is what to look for. K for a **different equation**: flip it if the equation is reversed, square it if it is doubled. K and a start: look for a **perfect square**, or a **tiny K** with the 5 per cent check on the amount taken off. Asked for **moles**: convert back at the end, and answer what was asked, because x is the change. And two parts at the same temperature use the **same K**. **Next**: how temperature changes K.

Visual: the part 2 trap checklist returns full size as a two-column board, "What you see in the question" on the left and "What you do first" on the right, each row lighting on its cue word with the question number that used it as a small badge: "K for a different equation → reversed: 1 / K; doubled: K^2 (Q3)"; "K and a start → x; perfect square: root (Q4b); tiny K: drop x, check the amount taken off < 5% (Q3)"; "Asked for mol, or for one species → x volume at the end; x is the change, not always the answer (Q3, Q4b)"; "Two parts, same temperature → same K (Q4)". A quiet first row, unspoken, carries over from part 1: "Moles and a volume → divide first (Q3, Q4)". Footer tag: "Quadratic formula: you can use it if you like, but HSC questions are written so you shouldn't need it". On "Next" a chip "Next: temperature and K" with a small thermometer icon (coded). Hold about 2 seconds.

### 6. key-notes (reuse take: key-notes; quiet, hold about 45 seconds)
> Here are the key notes. Pause the video if you need more time to copy them.

- Moles in a vessel: divide by the volume before anything goes into the table or into K. A measured equilibrium value goes in the E row first. Convert back at the end: mol/L x volume gives mol.
- K belongs to the equation as written, at one temperature. Reversed: 1 / K. Doubled: K squared. Same temperature: same K, even in a new vessel.
- K and a start (HSC questions are written so you shouldn't need the quadratic formula): equal starts can give a perfect square, so take the square root and keep the positive root. A tiny K lets you drop x where it is taken from a start; check that the amount taken off is under about 5 per cent of the start.
- Answer what was asked: x is the change, not always the answer.

Memory aids (large, on the notes screen): *Flip the equation, flip K.* Second line: *Perfect square: square root. Tiny K: drop the x, then check it.* Condition tag: "same temperature, equation as written; 5 per cent is a rule of thumb".

## Teaching checks

- **Does it explain causes?** Why K flips in Q3 and not in Q2, although both run backwards: K belongs to the equation as written, and only Q3 rewrites its equation (2b); why the change row has 2x for NOCl: the coefficients (2b); why x can be dropped from the bottom but kept on top (2c); why the 5 per cent check uses 2x: NOCl loses 2x, not x (2d); why part b uses part a's K: same temperature (4b); why Q4b is a perfect square: the reactants started equal (4b); why x is not the answer: it is the change (4c).
- **Owner method rule:** "I for initial, C for change, E for equilibrium" in scene 1; Q3 and Q4b say the change is x set by the coefficients (2b, 4b); every rearrangement says "multiply both sides by the bottom", then divides (2c, 4c); the quadratic line is the owner wording (4b, decision board footer, key note 3); K has no unit; "Pause here to answer." and a 10 s countdown after each question (2a, 3a, 4a); no marks are mentioned.
- **Misconceptions and slips addressed:** K not flipped (2d); flipping K just because a mixture runs backwards (2b); 5 per cent check on x instead of 2x (1, 2d chip); (2x)^2 as 2x^2 (2c chip); expanding a perfect square into a quadratic (4b); reporting x as the answer (4c); a new K assumed for the second vessel (4b); dropping x when K is not tiny (4c chip).
- **Worked-example rule:** one reasoning stage per scene: Q3 flip and table (2b), drop and solve (2c), check and moles (2d); Q4a one scene (3b); Q4b same K and the square (4b), root and answer (4c). The task line, equation strip and grouped givens stay through each question; the part a K is carried as a teal card into part b.
- **Response opportunities:** three, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a). Nothing answer-bearing during the holds; the trap strip dims during each countdown. Scene 1 names the trap types (as part 1's hook did), not the answers.
- **Reading load:** the givens cards hold 3 to 5 short lines; one working line at a time; the givens card shrinks to a strip in 2c. The decision board has four spoken rows and one quiet carried-over row.
- **Out of scope by design:** Q against K (G03a), amount added and huge K (G03b), temperature and K (C9), mixing and colorimetry (p02), Ksp and acid questions, mark allocation.

## Numbers to verify (unchanged from G03c Revision 2; rechecked in the science check)

- **Q3 (K = 6.25 x 10^4 for 2NO + Cl2 ⇌ 2NOCl; 4.00 L, 2.00 mol NOCl).** Flipped K = 1.6 x 10^-5. [NOCl] start 0.500 mol/L. E 0.500 - 2x, 2x, x. Drop 2x: 4x^3 / 0.250 = 1.6 x 10^-5; 4x^3 = 4.0 x 10^-6; x^3 = 1.0 x 10^-6; x = 0.0100 mol/L. Check 2x / start = 4.0 per cent. n(Cl2) = 0.0400 mol. Exact x = 0.009739, n = 0.0390 mol. Not flipped: x^3 = 3906, x = 15.7 mol/L.
- **Q4a (NO2 + SO2 ⇌ NO + SO3, 5.00 L).** 0.0200, 0.0400, 0.180, 0.360 mol/L; K = 0.0648 / 0.000800 = 81.0.
- **Q4b (K = 81.0; 0.500 mol each in 2.00 L).** Start 0.250; root 9.00; x = 2.25 - 9.00x, 10x = 2.25, x = 0.225; [NO2] = 0.0250 mol/L; check 0.050625 / 0.000625 = 81.0. Negative root x = 0.281 > start. Expanded 80x^2 - 40.5x + 5.0625 = 0. Dropping x gives 2.25 > start.

## Memory aid check

- **"Flip the equation, flip K."** Recalled from C6a. Assumptions: same temperature, the equation as written. Holds in Q3. The doubling half is in the decision board and key note 2.
- **"Perfect square: square root. Tiny K: drop the x, then check it."** C6b. Holds in Q4b (equal starts) and Q3 (check 4 per cent on 2x). The Q4b ghost chip shows the limit: with K = 81, dropping x fails.

## Narration length estimate

See `../checks/g03cd-split-notes.md`. Reused scenes use their G03c take01 measured durations; the two new scenes are estimated at the take01 speaking rate. Estimated runtime about 8.3 minutes, at the top of the 6 to 8 minute target, because both hard question types are here. No reserve cut is proposed: every reused scene is a reasoning stage, a check or a classic mistake.

## Scene reuse

| # | id | source |
|---|---|---|
| 1 | hook-traps | new |
| 2a | q3-question | reuse take (g03c take01 q3-question) |
| 2b | q3-flip-and-table | reuse take (g03c take01 q3-flip-and-table) |
| 2c | q3-drop-and-solve | reuse take (g03c take01 q3-drop-and-solve) |
| 2d | q3-check-and-moles | reuse take (g03c take01 q3-check-and-moles) |
| 3a | q4a-question | reuse take (g03c take01 q4a-question) |
| 3b | q4a-answer | reuse take (g03c take01 q4a-answer) |
| 4a | q4b-question | reuse take (g03c take01 q4b-question) |
| 4b | q4b-square | reuse take (g03c take01 q4b-square) |
| 4c | q4b-solve | reuse take (g03c take01 q4b-solve) |
| 5 | decision-board | new |
| 6 | key-notes | reuse take (key-notes, standard line) |

## Build ids

In order: hook-traps, q3-question, q3-flip-and-table, q3-drop-and-solve, q3-check-and-moles, q4a-question, q4a-answer, q4b-question, q4b-square, q4b-solve, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen): q3-question, q4a-question, q4b-question. key-notes is the quiet notes hold (about 45 s; reuse take). New to voice: hook-traps, decision-board.

## Assets

Have: everything listed for G03c (C6 board, ICE table, givens card, C5 builder, C6 algebra line, C6b check ruler and two-shortcut card, type badges, coded sealed vessels with tints, countdown ring, wrong-answer chips, key notes board, trap checklist, convert-back chain).
New coded items: the part 2 checklist rows (six) and a small faded part 1 checklist thumbnail for the hook.
Need: none. No painted art is required.
