# G03c: Equilibrium calculations: HSC-style practice, part 1 (design)

Status: Revision 3 (16 Oct): split for length; ready to voice

Revision 3 (16 Oct): take01 of the full practice set was voiced and measured at about 13:58 (`g03c/measured/lesson.json`), too long for one video. Following the owner's choice for G03, the set is split into two videos of about 6 to 8 minutes: this file is part 1 (questions 1 and 2); `chem-m5-g03d.md` is part 2 (questions 3 and 4a/4b). Every question scene keeps its recorded text character for character, so its take01 audio can be reused (takes are matched by exact text). New narration: a trimmed hook (it no longer says "four HSC-style questions") and a short decision board for the part 1 traps. Key notes reuse the standard take. Split notes: `../checks/g03cd-split-notes.md`. Take01 voice manifest and request options moved to `g03c/take01-superseded/`; `g03c/measured/` is left in place for the registry. Revision 2 (15 Oct): reviews `../checks/g03c-learning-review.md` and `../checks/g03c-claude-science-check.md` (solid question first, methanol second; "multiply both sides by the bottom, then divide"; "I for initial, C for change, E for equilibrium"; the trap strip dims during each countdown; the question 1 ICE outline has no column headings during the hold). Revision 1 (15 Oct): first design.

Working title: "Equilibrium calculations: HSC-style practice, part 1". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; the board carries the tag "HSC-style question, written for HSCScience" in the hook and on every question card. Owner request (15 Oct): more worked examples of equilibrium calculation questions, "as they are usually the ones that stump most students in their HSC". The focus is the correct method and avoiding classic mistakes; learner copy never mentions marks. Owner rules applied: ICE table "I for initial, C for change, E for equilibrium" (scene 2b); the known equilibrium value goes in the Equilibrium row first, then Change = E minus I, then the coefficients for the other changes; every rearrangement says "multiply both sides by the bottom, then divide"; K written without a unit; "Pause here to answer." with a 10 s countdown after each question. **Route id:** `chem-m5-g03c`; part 2 is `chem-m5-g03d`. Playlist order: after G03b (suggest 12.6), then G03d (suggest 12.7).

## Decisions

- **Main question:** *In an equilibrium calculation you have not seen, where is the trap, and what do you do first so it cannot catch you?* Part 1 answers it for the traps of a solid with a mass answer and a start plus one equilibrium value.
- **Why a practice video, and why these questions:** C6a, C6b, G03a and G03b each teach a method with one example per type. Students lose these questions on a small early step, not on the algebra (research doc, T11, T12, T14, T15 marker comments: moles used as concentrations, mole ratios mishandled, solids included, the measured value used as the change). Part 1 gives two harder questions, each hiding more than one trap, solved with the same visible method, one reasoning stage per scene, then the classic mistake for that question crossed out.
- **Trap coverage (learner-visible as the trap checklist, scene 1 and scene 4):**

  | Trap | Where |
  |---|---|
  | Moles given, not concentrations: divide by the volume first | Q1, Q2 (2.00 L, including the measured value) |
  | A coefficient other than 1 in the change row | Q2 (2 on H2: +0.0800) |
  | A species that does not start at zero, so Change = E minus I | Q2 (methanol starts at 0.200 and ends at 0.160: change -0.0400, so the mixture runs backwards) |
  | A solid that must be left out of K | Q1 (FeO and Fe); water as the solvent named on the same card (unspoken chip) and in the decision board |
  | Find an equilibrium amount and convert back to a mass | Q1 (grams of iron) |
  | Not dropping x when K is not tiny | Q1 (K = 0.50: dropping x would take 50 per cent) |

- **Questions in order:** Q1 type 3 with a solid (linear once the solids are out, then a mass: every step is a callback, so it is the warm-up); Q2 type 2 (start plus one equilibrium value, find K, in a mixture that runs backwards: the one idea no earlier video showed, placed second after the learning review, finding L1).
- **Owner method rule:** Q2 runs Initial (converted), the measured value into E, Change = E - I with its sign, the other changes from the coefficients, then E = I + C, then K. In Q1 nothing at equilibrium is measured, so the change is x (as C6b says). The rearrangement in scene 2c says "multiply both sides by the bottom", then divides.
- **Entry knowledge:** C5 (K expressions, powers, solids and the solvent left out, no unit), C6a (types, ICE table with E-row-first), C6b (x from the coefficients, the tiny-K drop and the 5 per cent check, "multiply both sides by the bottom, then divide"), C8 (Q against K) and G03b (the five types, huge K and the amount added; G03a was dropped, owner 16 Oct). Year 11: c = n / V, n = m / M, mole ratios.
- **Start and stop:** starts at "an unseen calculation question with a trap in it"; stops after two answers with the traps avoided and a decision board of first moves. No new method. Not covered here: a reversed K, tiny K, a hidden perfect square and a two-part question (part 2, G03d); Q against K (G03a); amount added and huge K (G03b); temperature and K (C9).
- **Placement and handoff:** after G03b; next is G03d (part 2), named in scene 4 ("Next: part two"). G03d hands off to C9.
- **Learner-visible definitions:** callbacks: ICE table (I for initial, C for change, E for equilibrium). New phrase: "trap" (a small early step that, if missed, makes every later number wrong).
- **Units policy:** mol/L in every column heading and on the givens cards, mol and g on the givens and answer lines, K without a unit with the quiet tag "K: no unit written" at each substitution.
- **Mistake scenes:** none as a template. Each question ends with its own classic mistake (Q1 the volume forgotten when converting back; Q2 the measured value used as the change).
- **Memory aid** (bank draft): *Divide first. E row first. Convert back last.* Orders the three steps the part 1 traps attack. See Memory aid check.
- **Reuse (no prototype components):** the C6 explainer board in its three zones; the ICE table component (`src/explainer/lessons/chem-m5-c06/ice.tsx`) with the C6a E-row-first pen arrow and "E - I" bracket; the givens card and fraction parts; the C5 expression builder; the C6 algebra line; the C6b check ruler; the type badges; the countdown ring; wrong-answer chips; the key notes board. The G03a coded sealed vessel with a solid lump, recoloured to a dark grey-black FeO lump. New coded items: the trap checklist board (scene 1, returns in 4) and the "convert back" chain. One visual system throughout. No painted art needed.
- **Author notes (not learner copy):** (a) **Q2 direction.** The start (Q = 0.200 / (0.100 x 0.200^2) = 50) is above K = 14.6, so the mixture runs in reverse; the video shows this with the sign of E - I and does not ask for Q. (b) **Q2 guard digits.** Rounding the bottom to 0.0110 gives K = 14.5; keeping 0.01098 gives 14.6. (c) **Q1 FeO.** Wüstite is the stable iron oxide above about 570 C, so FeO(s) and Fe(s) both present at 800 C is fair. Equal gas count, so Kc = Kp; K = 0.50 at about 800 C is within the literature range 0.43 to 0.55 (science check). (d) **Pronunciation:** "C O" letters, "H two", "methanol" (the formula CH3OH is on screen only), "iron two oxide" for FeO, "per cent", "nought point". Check in the voiced preview that 0.01098 is clear.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as C6, G03a and G03b: made plus green, used up minus red, K teal, pen highlight for rings, the measured value in pen colour; species colours: CO pale grey, H2 pale grey, CH3OH pale outline; FeO dark grey-black lump, Fe grey metal flecks, CO2 pale. Board layout in every question (three zones, constant): top-left the short task in one line, kept on screen until the answer line lands; under it the equation strip; under that the grouped givens card, each value with its unit; the ICE table or the working fills the right two thirds. A small type badge sits in the top-right corner of each question. Each question card carries "HSC-style question, written for HSCScience". Earlier questions are cleared before the next card writes on; only the trap checklist (shrunk to a strip on the far left) persists, ticking the traps each question met. During each countdown the strip dims to a faint outline and returns after the hold.

### 1. hook-traps (where equilibrium calculations go wrong; new, trimmed from take01)
> Equilibrium calculations stump a lot of students, and it is rarely the algebra. It is a small **trap** early on: moles where K needs concentrations, a coefficient missed in the change row, a value that does not start at **zero**, or a **solid** left in K. Here are **two HSC-style questions**, and part two has two more. Each hides at least one trap. Pause and try each one, then we'll work it through **one step at a time**, and look at the classic mistake.

Visual: heading "Where equilibrium calculations go wrong" writes on. The part 1 trap checklist builds on the left, one row per trap with an empty tick box: "moles given: divide by the volume", "a coefficient in the change row", "a value that does not start at zero: E - I", "a solid: leave it out of K", "convert back to moles or grams". The first four rows write on, each on its spoken words ("moles", "coefficient", "zero", "solid"); the fifth writes on quietly after "solid". On "two HSC-style questions" two question cards fan out at the right, each with the tag "HSC-style question, written for HSCScience", and two faint cards behind them carry "part 2". On "one step at a time" the method strip writes under the cards: "I C E: equilibrium value into E first, then Change = E - I, then the coefficients" with a mini ICE table. Hold about 1 second; the checklist then shrinks to a strip on the far left.

### 2a. q1-question (question 1: a solid, and a mass; reuse take)
> Question one. Iron two oxide, a **solid**, reacts with carbon monoxide to make solid iron and carbon dioxide. At about 800 degrees, K is **0.50**. A sealed **2.00 litre** vessel holds an excess of iron two oxide and **0.600 moles** of carbon monoxide, with no iron or carbon dioxide at the start. What **mass of iron** is present at equilibrium? Pause here to answer.

Visual: fresh board. Type badge "Type 3: K + start". Task line "Find the mass of iron at equilibrium." Equation strip FeO(s) + CO(g) ⇌ Fe(s) + CO2(g) with the state symbols visible. The G03a coded sealed vessel, its lump recoloured dark grey-black (FeO), pale gas. Givens card: "K = 0.50 (about 800 C)", "vessel: 2.00 L", "FeO: solid, in excess", "start: CO 0.600 mol", "start: no Fe, no CO2", "Fe: 55.85 g/mol" (from the data sheet), tags "HSC-style question, written for HSCScience" and "K close to the real value near 800 C". On "solid" the "(s)" on FeO gets a pen ring; on "mass of iron" the task line is ringed. Empty ICE outline with the row labels I, C and E only and no column headings, so it gives no hint that the solids are left out; the CO and CO2 headings write on in scene 2b. Countdown ring 10 seconds with "Pause here to answer." on screen. Nothing answer-bearing.

### 2b. q1-expression (leave the solids out; reuse take)
> Start with the expression. Iron two oxide and iron are **solids**, so they stay out of K. That leaves K equals carbon dioxide over carbon monoxide, with no powers at all. Now the **I C E table**: I for initial, C for change, E for equilibrium. The carbon monoxide is in moles, so divide first: 0.600 over 2.00 is **0.300 moles per litre**, and carbon dioxide starts at zero. Nothing at equilibrium is measured, so the change is **x**: carbon monoxide ends at 0.300 minus x, and carbon dioxide at x.

Visual: on "solids" FeO and Fe in the equation strip grey out with the tag "solids: not in K"; the C5 builder writes K = [CO2] / [CO], with a crossed ghost "[Fe][CO2] / ([FeO][CO])" fading in and out beside it. An unspoken chip under the strip: "same rule: pure liquids and water as the solvent stay out". On "I C E table" the outline's row letters expand to Initial, Change and Equilibrium and the two column headings "CO (mol/L)" and "CO2 (mol/L)" write on. On "0.300 moles per litre" the division runs on the givens card and flies into the CO Initial cell; the CO2 Initial cell ticks "0". On "x" the Change row fills "-x" and "+x" (chips "1 : 1"); the Equilibrium row fills "0.300 - x" and "x". The two greyed solids stay visible in the vessel. Trap strip: "a solid: leave it out of K" and "moles given" tick.

### 2c. q1-solve (K is not tiny, and no shortcut is needed; reuse take)
> So x over 0.300 minus x equals 0.50. K is not tiny, so do **not** drop the x. You do not need to: this equation is already simple. **Multiply both sides by the bottom**, 0.300 minus x: x equals 0.150 minus 0.50 x. Add 0.50 x to both sides, so 1.50 x is 0.150. Then **divide both sides by 1.50**, and **x is 0.100**. Check: 0.100 over 0.200 is 0.50.

Visual: the K line "x / (0.300 - x) = 0.50" with the tag "K: no unit written". On "do not drop the x" the C6b check ruler flashes a ghost case: "drop x: x = 0.150, half the start" with the sliver at 50 per cent far past the dashed 5 per cent line, crossed, caption "K = 0.50 is not tiny". The ghost clears. The algebra line runs in beats: on "Multiply both sides by the bottom" a pen arrow carries "(0.300 - x)" to the right side with the aside "multiply both sides by the bottom", giving "x = 0.50 (0.300 - x)", then "x = 0.150 - 0.50x"; the 0.50x slides across, "1.50x = 0.150"; on "divide both sides by 1.50" the aside "divide by 1.50" and "x = 0.100 mol/L" on its word. The table's Equilibrium row ticks "0.200" and "0.100". The check writes "0.100 / 0.200 = 0.50 = K" with a teal tick.

### 2d. q1-mass (convert back; reuse take)
> But the question asks for a **mass of iron**. The equation makes one iron for every carbon dioxide, so the moles of iron formed equal the moles of carbon dioxide formed. That is 0.100 moles per litre, times **2.00 litres**, which is 0.200 moles. Times 55.85 grams per mole, that is **11.2 grams** of iron. The classic mistake is stopping at the concentration, or forgetting the volume and getting **5.6 grams**.

Visual: the task line pulses. On "one iron for every carbon dioxide" a pen bracket joins Fe and CO2 in the equation strip with "1 : 1". The "convert back" chain (new, coded) builds left to right on the cues: "[CO2] = 0.100 mol/L" then "x 2.00 L" then "= 0.200 mol CO2 = 0.200 mol Fe" then "x 55.85 g/mol" then "= 11.2 g Fe" with a tick; the vessel's lump gains grey metal flecks on "11.2 grams". On "5.6 grams" a crossed chip "0.100 x 55.85 = 5.6 g: volume forgotten" with a pen arrow to the "2.00 L" on the givens card; a second crossed chip, unspoken, "0.100: a concentration, not a mass". Trap strip: "convert back to moles or grams" ticks. Memory aid chip: "Convert back last." Hold about 2 seconds.

### 3a. q2-question (question 2: a start and one equilibrium value; reuse take)
> Question two. Carbon monoxide and hydrogen make methanol gas: C O plus two H two makes methanol. A **2.00 litre** vessel at about 230 degrees starts with 0.200 moles of carbon monoxide, 0.400 moles of hydrogen and **0.400 moles of methanol**. At equilibrium, it holds **0.320 moles** of methanol. Calculate K. Pause here to answer.

Visual: type badge "Type 2: start + one equilibrium value". Task line "Calculate K." Equation strip CO(g) + 2H2(g) ⇌ CH3OH(g) with the 2 highlighted. A coded sealed vessel (G03a style, plain gauge, pale gas). Givens card grouped: "vessel: 2.00 L", "start: CO 0.200 mol, H2 0.400 mol, CH3OH 0.400 mol", "at equilibrium: CH3OH 0.320 mol", "about 230 C", chips "illustrative amounts" and "HSC-style question, written for HSCScience". On "0.400 moles of methanol" a pen ring on that line (it does not start at zero); on "0.320 moles" a pen ring on the equilibrium line. An empty ICE outline (labels I, C, E and three columns with mol/L headings) stays as a scaffold. After the speech the countdown ring runs 10 seconds with "Pause here to answer." on screen. Nothing answer-bearing: no divisions, no signs, no arrows.

### 3b. q2-initial (divide first, then the equilibrium row first; reuse take)
> Everything here is in moles, so first **divide by 2.00**. The initial row is 0.100 for carbon monoxide, 0.200 for hydrogen and 0.200 for methanol. The measured methanol, 0.320 moles, is 0.160 moles per litre, and it goes in the **equilibrium row**. Change is equilibrium minus initial: 0.160 minus 0.200 is **minus 0.0400**. Methanol went **down**, so this mixture ran backwards. You did not have to guess that: the subtraction gave you the sign.

Visual: on "divide by 2.00" each start line on the givens card divides with a pen "÷ 2.00" and its result flies into the Initial row: 0.100, 0.200, 0.200 (each on its word). On "0.160 moles per litre" the equilibrium line converts on the card ("0.320 mol / 2.00 L = 0.160 mol/L"); on "equilibrium row" the C6a pen arrow carries it into the CH3OH Equilibrium cell, which ticks "0.160" in pen colour; the other two Equilibrium cells show dashed "?". On "equilibrium minus initial" the "E - I" bracket draws up the CH3OH column from the Equilibrium cell past the Initial cell to the Change cell, with "0.160 - 0.200" beside it; on "minus 0.0400" the Change cell ticks "-0.0400" in the used-up colour. On "down" a small pen arrow under the equation strip points right to left with the tag "ran backwards: the sign says so". Trap strip: "a value that does not start at zero" ticks and "moles given" gains a second tick mark.

### 3c. q2-change-and-k (the coefficients, then K; reuse take)
> Now the coefficients. Each methanol that splits gives one carbon monoxide and **two** hydrogen, so carbon monoxide rises by 0.0400 and hydrogen rises by **0.0800**. Add each change to its start: carbon monoxide 0.140, hydrogen 0.280. K is methanol over carbon monoxide times hydrogen **squared**. 0.280 squared is 0.0784, and times 0.140 that is 0.01098. Keep the extra figures until the end. 0.160 over 0.01098 gives **K is 14.6**.

Visual: on "two" the coefficient chips "1" and "2" fly from the equation strip to the CO and H2 Change cells; CO ticks "+0.0400" and, on "0.0800", H2 ticks "+0.0800" in the made colour with a pen "x 2" arrow from the CH3OH change; the ratio chip "1 : 2 : 1" lies along the Change row. On "Add each change to its start" a pen plus draws between the Initial and Change rows and the Equilibrium row completes: "0.100 + 0.0400 = 0.140", "0.200 + 0.0800 = 0.280" (the sums fade once the row is full). On "squared" the C5 builder writes K = [CH3OH] / ([CO][H2]^2) with the 2 flying from the equation strip to the power; the Equilibrium values drop in with the tag "equilibrium values only". The working writes in beats: "0.280^2 = 0.0784", "0.140 x 0.0784 = 0.010976" (shown in full; the spoken 0.01098 is ringed), a small grey aside on "extra figures": "rounding to 0.0110 gives 14.5", then "K = 0.160 / 0.010976 = 14.6" larger, teal, with the tag "K: no unit written". Trap strip: "a coefficient in the change row" ticks.

### 3d. q2-mistake (the classic mistake: the measured value used as the change; reuse take)
> The classic mistake here is writing the measured 0.160 straight into the **change row**. It is not a change, it is where methanol **ended up**. Put it in the equilibrium row, and let equilibrium minus initial give you the change, sign and all.

Visual: a ghost copy of the table with "+0.160" in the CH3OH Change cell and "0.360" in its Equilibrium cell; on "change row" it is crossed in red with the caption "that is the equilibrium value, not the change". On "ended up" the real table returns with a pen ring on the 0.160 in the Equilibrium row. Two smaller crossed chips fade in, unspoken: "H2 +0.0400 (coefficient missed): K = 19.8" and "moles put into K: 3.64". Memory aid chip: "E row first." Hold about 2 seconds.

### 4. decision-board (what you see, what you do first; new)
> So here is what to look for. **Moles and a volume**: divide first. **One equilibrium value**: it goes in the equilibrium row, and equilibrium minus initial gives the change and its sign. A **coefficient**: the change row follows it. A **solid**, or water as the solvent: leave it out of K. Asked for **grams**: convert back at the end. **Next**: part two, with a K for the other equation, a tiny K, and a hidden perfect square.

Visual: the trap checklist returns full size as a two-column board, "What you see in the question" on the left and "What you do first" on the right, each row lighting on its cue word with the question number that used it as a small badge: "Moles and a volume → divide by the volume first (Q1, Q2)"; "One equilibrium value → into the E row; Change = E - I gives the sign (Q2)"; "A coefficient other than 1 → the change row follows it (Q2)"; "A solid, or water as the solvent → leave it out of K (Q1)"; "Asked for mol or g → x volume, x molar mass, at the end (Q1)". A quiet footer tag, unspoken: "K not tiny (like 0.50): keep x (Q1)". On "Next" a chip "Next: part 2, questions 3 and 4" with three small icons: a flipping equation strip, a tiny-K log mark and a square bracket. Hold about 2 seconds.

### 5. key-notes (reuse take: key-notes; quiet, hold about 45 seconds)
> Here are the key notes. Pause the video if you need more time to copy them.

- Moles in a vessel: divide by the volume before anything goes into the table or into K, including a measured equilibrium amount. Convert back at the end: mol/L x volume gives mol; mol x molar mass gives grams.
- ICE: the measured equilibrium value goes in the Equilibrium row first. Change = equilibrium minus initial, and its sign shows which way the mixture ran. Only the change row follows the coefficients. Equilibrium = initial + change.
- Leave pure solids, pure liquids and water as the solvent out of K. No unit is written for K.
- Drop x only when K is tiny. When K is not tiny (like 0.50), keep x: multiply both sides by the bottom, then divide.

Memory aid (large, on the notes screen): *Divide first. E row first. Convert back last.* Condition tag: "a vessel of known volume; E row first when a value at equilibrium is measured".

## Teaching checks

- **Does it explain causes?** Why divide first: K is a ratio of concentrations, and a measured amount is an amount too (2b, 3b); why the measured value goes in the E row and why E - I gives the sign and the direction (3b, 3d); why the change row has 0.0800 for hydrogen: the coefficients (3c); why the solids leave K and why that makes Q1 linear (2b, 2c); why x is not dropped in Q1 (K = 0.50 is not tiny, 50 per cent on the ruler) (2c); why the moles of iron equal the moles of CO2 (1 : 1) (2d).
- **Owner method rule:** Q2 shows the full order with the E-row arrow and the "E - I" bracket (3b, 3c); Q1 says nothing is measured so the change is x (2b); scene 2b says "I for initial, C for change, E for equilibrium"; the rearrangement says "multiply both sides by the bottom", then divides (2c); K has no unit; "Pause here to answer." and a 10 s countdown after each question (2a, 3a); no marks are mentioned.
- **Misconceptions and slips addressed:** measured value used as the change (3d); coefficient missed (3d chip); moles in K (3d chip, 2b, 3b); solids in K (2b ghost); dropping x when K is not tiny (2c); forgetting the volume when converting back (2d); concentration reported as a mass (2d chip).
- **Worked-example rule:** one reasoning stage per scene; the task line, equation strip and grouped givens stay through each question; earlier questions are cleared; result lines land on their spoken cues.
- **Response opportunities:** two, each 10 s with the countdown and every demand and condition visible (2a, 3a). Nothing answer-bearing during the holds; the trap strip dims during each countdown.
- **Reading load:** the givens cards hold 4 to 6 short lines; one working line at a time; the decision board has five rows, each a recap of a scene just watched.
- **Out of scope by design:** a reversed K, tiny K, a hidden perfect square and two-part questions (G03d); Q against K (G03a); amount added and huge K (G03b); temperature and K (C9); mark allocation.

## Numbers to verify (unchanged from Revision 2; rechecked in the science check)

- **Q1 (FeO(s) + CO(g) ⇌ Fe(s) + CO2(g), K = 0.50, 2.00 L).** [CO] start = 0.600 / 2.00 = 0.300 mol/L; CO2 0. x / (0.300 - x) = 0.50; x = 0.150 - 0.50x; 1.50x = 0.150; x = 0.100 mol/L. Equilibrium: CO 0.200, CO2 0.100. Check 0.100 / 0.200 = 0.50. n(Fe) = 0.100 x 2.00 = 0.200 mol; m(Fe) = 0.200 x 55.85 = 11.17 g, reported 11.2 g. Slips: volume forgotten 5.585 g ("5.6 grams"); dropping x gives x = 0.150, 50 per cent of the start.
- **Q2 (CO + 2H2 ⇌ CH3OH, 2.00 L).** Initial 0.100, 0.200, 0.200 mol/L; measured CH3OH 0.160 mol/L; Change -0.0400, +0.0400, +0.0800; Equilibrium 0.140, 0.280, 0.160. K = 0.160 / (0.140 x 0.0784) = 0.160 / 0.010976 = 14.58, reported 14.6; rounded bottom 0.0110 gives 14.5 (aside). Slips: measured value as change gives E 0.360 (ghost); coefficient missed: 19.8; moles in K: 3.64. Start Q = 50.0 > 14.6 (author note only).

## Memory aid check

- **"Divide first. E row first. Convert back last."** It orders three steps, each the cure for one trap: concentrations before the table (Q1, Q2), the measured value into the Equilibrium row before any change is written (Q2; Q1 has no measured value, which the condition tag says), and grams only at the end (Q1). Assumptions: a vessel of known, fixed volume; K for concentrations; a measured value at equilibrium for the middle step.

## Narration length estimate

See `../checks/g03cd-split-notes.md` for the per-scene table. Reused scenes use their take01 measured durations; the two new scenes are estimated at the take01 speaking rate. Estimated runtime about 7.0 minutes.

## Scene reuse

| # | id | source |
|---|---|---|
| 1 | hook-traps | new (trimmed from take01: "four HSC-style questions" and "a K written for the other equation" no longer fit) |
| 2a | q1-question | reuse take (g03c take01 q1-question) |
| 2b | q1-expression | reuse take (g03c take01 q1-expression) |
| 2c | q1-solve | reuse take (g03c take01 q1-solve) |
| 2d | q1-mass | reuse take (g03c take01 q1-mass) |
| 3a | q2-question | reuse take (g03c take01 q2-question) |
| 3b | q2-initial | reuse take (g03c take01 q2-initial) |
| 3c | q2-change-and-k | reuse take (g03c take01 q2-change-and-k) |
| 3d | q2-mistake | reuse take (g03c take01 q2-mistake) |
| 4 | decision-board | new |
| 5 | key-notes | reuse take (key-notes, standard line) |

## Build ids

In order: hook-traps, q1-question, q1-expression, q1-solve, q1-mass, q2-question, q2-initial, q2-change-and-k, q2-mistake, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen): q1-question, q2-question. key-notes is the quiet notes hold (about 45 s; reuse take). New to voice: hook-traps, decision-board.

## Assets

Have: the C6 board, ICE table component with the C6a E-row-first arrow and "E - I" bracket, givens card, C5 expression builder, C6 algebra line, C6b check ruler, type badges, G03a coded sealed vessel with a solid lump, countdown ring, wrong-answer chips, key notes board.
New coded items: the trap checklist board (strip and two-column states, five rows), the "convert back" chain, a grey-black FeO lump with grey metal flecks.
Need: none. No painted art is required.
