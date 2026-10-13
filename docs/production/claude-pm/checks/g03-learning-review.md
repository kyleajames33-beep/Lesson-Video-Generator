# G03 learning review: every type of HSC equilibrium question, part 2 (calculations)

**Verdict: not yet ready to record. Three blockers, fourteen should-fix items, several notes.** The structure is sound and the hard types (quadratic root rejection, approximations with checks, amount added) get most of the time, as the owner asked. The best moves to keep: the type-card board that returns as the decision board; a root-rejection scene that gives the real consequence (PCl3 negative, PCl5 above the start); a tiny-K case that shows its own check and an honest "exact 0.0099" tag; the amount-added worked example that keeps K fixed and ends with a back-substitution; the attempt that adds a solid and a 1 : 2 ratio; feedback that names three wrong answers with the arithmetic behind each. Every number checks (table below). The blockers are about method, not arithmetic: the approximation test is taught in the wrong order, the amount-added unknown changes units between scenes without saying so, and the opening rule is false for two of the five types.

Scope: AI source review of `../lessons/chem-m5-g03.md` (revision 1): script, visual plan, numbers, memory aid check, length estimate, key notes, author notes and open decisions. Read as a student starting Year 12 who has watched C5 (K expression, powers, no solids), C6 (ICE table, change row follows the coefficients, perfect-square find-x, positive root kept) and C8 (Q, Q against K, Q chases K, a disturbance changes Q not K). Also read: `student-learning-review.md`, AGENTS.md calculation rules, `teaching-playbook.md` (type 3), `../research/hsc-equilibrium-question-types.md` (B11 to B15), `c6-learning-review.md` for format. Not inspected: stills, voiced preview, audio. Not learner evidence. Human listening pending. Science (illustrative K values, the 5 per cent convention, the huge-K statement) stays with Codex. U+2014 search of the design and this file: none. Narration recounted by script: 1,244 words over 20 scenes, matching the design's per-scene counts.

Main question traced: *given an unseen equilibrium calculation, which method, with what working, and which slip catches people?* Useful outcome: a student can sort a question into one of the five types, write the working for each, reject a bad root, state and test a shortcut, and set up an amount-added problem.

## Arithmetic check (all recomputed; no mismatch)

| Scene | Item | Result |
| --- | --- | --- |
| 2 | 0.300/2 = 0.150, 0.150/2 = 0.0750, 0.600/2 = 0.300; K = 0.0900/(0.0225 x 0.0750) = 53.33; moles version 0.360/0.0135 = 26.67 | correct, 53.3 and 26.7 |
| 3 | I 0.200, 0.150, 0; C -0.160, -0.0800, +0.160; E 0.0400, 0.0700, 0.160; K = 0.0256/0.000112 = 228.57; start values give 4.27; whole 0.160 off O2 gives -0.010 | correct, 229 |
| 4 | Q = 0.640/0.500 = 1.28 < 1.90, forward | correct |
| 5 | b^2 = 0.002025; -4ac = +0.036; sum 0.038025; root 0.195 (0.195^2 = 0.038025); roots 0.0750 and -0.120; PCl5 0.125; check 0.005625/0.125 = 0.0450; rejected root gives PCl5 0.320 | correct |
| 6a | 0.0750/0.200 = 37.5% (spoken 38); shortcut x = 0.09487 (0.095); 0.09487/0.0750 = 1.265 (26.5% high, spoken "about 27") | correct. Shortcut x over start is 47% (not shown, see B1) |
| 6b | 4x^2/0.250 = 16x^2 = 4.0e-4; x = 0.0050; NO 0.010; 1.0% of 0.500; exact 0.00990 | correct |
| 6c | 0.160/(4x^3) = 0.040/x^3; x^3 = 1.0e-12; x = 1.0e-4; 2x = 2.0e-4; 2x/0.400 = 0.05% | correct |
| 7 | old K 0.160/0.0400 = 4.00; E row 0.100, 0.100 + y, 0.500, 0.500; 0.250/0.0625 -> 0.100 + y = 0.625; y = 0.525 mol/L; x 2.00 = 1.05 mol; "forgot used up" 0.200 + y = 0.625 gives 0.425 mol/L (0.850 mol); Q after the addition 0.160/0.145 = 1.10 < 4.00 | correct |
| 8 and 9 | K = 0.160/0.400 = 0.400; CO2 used 0.100; new CO2 = 0.360/0.400 = 0.900; y = 0.600; check 0.360/0.900 = 0.400; wrong 0.500 and 0.700; Q 0.160/1.000 = 0.160 | correct (but see S7: y equals a given value) |

Word counts and time: 1,244 words is 6.7 min at 185 wpm, plus 145 s of holds, giving 9.1 min as claimed. The spoken numerals (0.038025, 0.000900, 1.0 x 10^-12) will push the voiced run to about 9.6 to 9.9 min. The fixes below add about 90 words; the proposed cuts remove about 90 (see Length).

## Blockers

| # | Scene | Exact words | Likely student question or problem | Concrete repair | What it enables |
| --- | --- | --- | --- | --- | --- |
| B1 | 6a | "Here x is 0.0750, 38 per cent of 0.200, and the shortcut would give 0.095, about 27 per cent too high. So state the assumption, then test it: x must be under about 5 per cent of the start." | The test uses 0.0750, which only exists after the full quadratic is solved. A student who follows "assume, then test" has the shortcut x (0.095), not 0.0750. The scene teaches that you must solve the hard equation to find out whether you could have skipped it, which is the reverse of the rule. 6b then does it in the right order (assume, solve, test), so the two scenes disagree. | Reorder 6a to the order a student will use: "Try the shortcut: start minus x is about 0.200, so x squared over 0.200 is 0.0450, x is 0.095. Test it: 0.095 is 47 per cent of 0.200, far over 5, so the shortcut is not allowed. Solve the full equation." Keep "the real x is 0.0750, so the shortcut was 27 per cent high" as an on-screen tag only. The rule card becomes "1 State it. 2 Solve with it. 3 Test: the amount taken off the start must be under about 5 per cent of the start." (+0 words if the 38 per cent clause is traded for 47 per cent.) | The check is something a student can run on their own working, and 6a and 6b use one order. |
| B2 | 7a, 7b, 7c, 7d | 7b: "steam is the old 0.200 plus y, in moles per litre". 7c: "Solve for y, in moles." 7c visual: "moles of steam added = ?". 7d: "y is 0.525 moles per litre ... the steam added is 1.05 moles." | (a) y is in mol/L in the table and in moles in the 7c demand. A student who solves for y "in moles" will write 0.525 mol and stop, which is the slip the lesson names in 7d. The hold is the moment they commit. (b) Nowhere does the narration say why the new table starts from the old equilibrium row. A student asks "why is carbon monoxide's initial 0.200 when the vessel started with 0.400 mol?" and "why is the initial row not the numbers I was first given?". The new initial row is the instant after the addition, before anything reacts. This is the single idea a first-time student needs for the hard type and it is missing. (c) y is never tied to the question's wording ("how much steam was added"). | 7a: after the conversion, "Right after the steam goes in, before anything reacts, the vessel is the old equilibrium plus the extra steam." 7b: "The unknown goes in the initial row: that instant, steam is the old 0.200 plus y, where y is the added steam in moles per litre." 7c: "Solve for y, in moles per litre." Visual 7c: "y = ? mol/L" only (delete "moles of steam added = ?"). 7d unchanged (it multiplies by 2.00 L to reach moles). (+25 words.) | A first-time student can say why the initial row holds the old equilibrium plus y, and cannot commit the unit slip during the hold. |
| B3 | 1 and 10 (and key note 1) | Scene 1: "what you are given tells you which. ... A mixture and a K. ... K and a start." Scene 10 and notes: "What you are given decides the method." | Types 3 and 4 give the same things (K and a mixture or start). They differ by what is asked: a direction (Q) or settled concentrations (x). A student sorting by "what is given" cannot separate them, and the video's single decision rule is then false for one of its five types. The playbook "recognising the type" aim fails at exactly the pair most often confused. | Change the rule to "what you are given and what you are asked decide the method". Scene 1: "...A mixture and a K, asking which way it goes. K and a start, asking for the settled concentrations." Type cards: (3) "Mixture + K: which way? (Q)" and (4) "Start + K: how much of each? (x)". Scene 10: "A mixture and a K, asked for a direction: Q. A start and a K, asked for concentrations: x." Key note 1 and the first aid changed to match. (+8 words.) | The decision rule is true for all five types and the sorting step actually works. |

## Should-fix

| # | Scene | Exact words | Problem and student question | Repair | Enables |
| --- | --- | --- | --- | --- | --- |
| S1 | 8 (attempt) | "Carbon dioxide is then added, and at the new equilibrium carbon monoxide is 0.600 ... How many moles of carbon dioxide were added? Pause here to answer." | A student must find K from the old equilibrium (not given), find the CO rise, halve it, find the new CO2 from K, set up "0.400 + y - 0.100", and solve. That is five stages and a new reaction. 10 s is only the invitation to pause; the demand still reads as a full problem with no help, and the amount-added worked example (7) gave K. Owner rule: do not ask for longer, trim the demand. | Give K on the givens card ("K = 0.400 at this temperature", as 7a did). The solid, the 1 : 2 ratio and "plus y, minus used" stay as the new test. Finding K from the old equilibrium moves to feedback scene 9 as a one-line recall of type 1 ("K from the old equilibrium is 0.400, as in type one"), which the student has already practised. The demand stays visible: "Find the moles of CO2 added." | An attempt a student can start inside one pause, testing the new elements (solid, ratio, y in the initial row), not a re-test of type 1. |
| S2 | 3 and 6c, 8, 4a | Scene 2 gives K = 53.3 for 2SO2 + O2 <=> 2SO3. Scene 3 gives K = 229 for the same equation. Scene 6c gives K = 4.0 x 10^10. | A student who has been taught that K depends only on temperature asks "why is the same equation 53.3, 229 and 4 x 10^10?". Likewise C + CO2 <=> 2CO has K = 1.90 (4a) and K = 0.400 (8). Scene 3 even says "in the same two litres", which reads as the same experiment. | Add a small on-screen tag at each new K: "a different temperature, so a different K". Change scene 3's "in the same two litres" to "in another two litre vessel, at a different temperature". Alternatively use a different reaction for 6c (for example H2 + Br2 or a made-up product-favoured system). No extra narration beyond the 3 edit. | Nothing in the video contradicts the C5 rule that K is fixed at one temperature. |
| S3 | 5b | "Multiply through by 0.200 minus x and move everything across: x squared plus 0.0450 x minus 0.00900 equals zero." Formula appears in the visual only; narration goes straight to "Under the root". | (a) Where does 0.00900 come from? 0.0450 x 0.200 is never spoken. (b) The formula is never spoken or named; "Use the quadratic formula with a one, b ... and c ..." assumes it is known. Some Year 12 chemistry students have not met it (Standard maths) and the chemistry data sheet does not give it. (c) "plus four times 0.00900" does not say why the sign flips (c is negative). (d) 73 words and four stages in one scene. | Split into 5b (rearrange: "Multiply by 0.200 minus x. 0.0450 times 0.200 is 0.00900. Move everything across. That is a quadratic...") and 5b2 (formula: "The quadratic formula: x equals minus b, plus or minus the square root of b squared minus four a c, over two a. Here a is one, b is 0.0450 and c is minus 0.00900. Because c is negative, minus four a c adds: 0.002025 plus 0.036 is 0.038025, and its square root is 0.195. If you prefer, your calculator's equation mode gives the same two answers."). (+30 words, scene break.) | The algebra is followable the first time and a student without the formula by heart knows an alternative. |
| S4 | 6b | "Nitrogen and oxygen make nitric oxide, K is 4.0 times ten to the minus four ... Then two x all squared over 0.500 squared gives x of 0.0050" | (a) This case is a perfect square (the scene's own author note says so). A student who watched C6 has a method that gives the exact answer in two lines, and asks "why approximate at all?". The scene does not answer. (b) The narration jumps from "each starts at 0.500" to the assumption; where "0.500 minus x" and "two x" come from is only in the table, not said. | (a) Add one honest sentence: "Because both sides here are squares, the square root from the ICE table video would also work. The shortcut earns its place when they are not." Or switch the example to N2O4 <=> 2NO2, K = 4.0 x 10^-4, start 0.500: (2x)^2/(0.500 - x) = 4.0 x 10^-4; shortcut 4x^2 = 2.0 x 10^-4, x = 0.0071, NO2 = 0.014, 1.4% of 0.500; exact x = 0.00702, shortcut 0.7% high. This is a real quadratic that C6 cannot solve, so the shortcut has a point. Recomputed: all values above. (b) Add "The table gives 0.500 minus x for each reactant and two x for nitric oxide." (+10 words.) | The shortcut has a reason to exist and the table's source is said aloud. |
| S5 | 6c and notes | Narration covers a start of products only. "A start from reactants with a huge K" is an unspoken tag; the key note says "With a huge K, start from the products, let x be the small amount that splits". | (a) The common HSC case is reactants only with a huge K, not products only. A student never hears that case; the tag is unspoken. (b) The key note reads as an instruction ("start from the products") and a student will do it on a reactant start. (c) The design's Decisions section says "one sentence only, scene 6c" but author note (c) says "unspoken on-screen tag only"; they disagree. | Speak one sentence at the end of 6c: "If you started with just the reactants and K was huge, nearly all of it would turn to products first, and you would take a small x back from there." (+30 words). Key note: "With a huge K, most of the start ends as products, so find the small amount left over (x) and test it." Reconcile the author note. | The large-K type is recognised in the form students meet it, and the note does not mislead. |
| S6 | 6a, 6b, 6c | Rule card: "x under about 5% of the start." 6c tests "two x". | In 6c the test is on 2x against 0.400, in 6b on x against 0.500. "x under 5%" is not what 6c does. | Word the rule "the amount taken off the start is under about 5 per cent of the start (x in 6b, 2x in 6c)". Label the check ruler bar with the actual quantity. | One test, applied consistently. |
| S7 | 8 and 9 | New [CO] 0.600 and answer y = 0.600 mol. | The answer equals a given number. A student who writes down the 0.600 from the card scores without working, and the wrong-answer chips (0.500, 0.700) are less likely to be the only wrong answers. | Change the new equilibrium CO to 0.500 mol/L. Recomputed: CO rises 0.100; CO2 used 0.050; new CO2 = 0.500^2/0.400 = 0.625; y = 0.625 - 0.400 + 0.050 = 0.275 mol (1.00 L); check 0.250/0.625 = 0.400. Wrong answers: 0.225 (used CO2 forgotten), 0.325 (change not halved), 0.625 (new concentration reported as the answer). Q after the addition: 0.160/0.675 = 0.237 < 0.400. | An answer no given value can leak. |
| S8 | 4a | "Work out Q, the K expression with today's concentrations, leaving out the solid. Which way will it run?" | The sentence hands over the slip the scene is testing. 4b names it ("putting carbon in Q is the solid slip") as an error to avoid, but the student has just been told what to do. | Question: "Work out Q for this mixture. Which way will it run?" Keep "carbon: solid, in excess" on the givens card. 4b says "leave the solid out" as the first step of the answer. (-4 words.) | A real decision for the student; the slip is something they catch in themselves. |
| S9 | 7a | "More steam lowers Q, so the reaction runs forward, which fits. Convert to moles per litre: ..." | 80 words and four stages (problem, givens, direction, conversion). The direction sentence is not used by the method (the new CO already tells you the change). "Which fits" has no referent for a first-time student. | Cut the direction sentence from 7a (13 words). Restore it as the sanity check in 7d: "The new Q was below 4.00 right after the addition, so forward, as the carbon monoxide fall says." only if time allows; otherwise on-screen tag. Add the "right after the steam goes in" sentence from B2. | One stage per scene, with the hard type's key idea spoken. |
| S10 | 5a | "Call the amount that splits x. At equilibrium that is 0.200 minus x, x and x, so K gives x times x over 0.200 minus x equals 0.0450." (76 words) | Define x, build the change row, build the equilibrium row, and write the K equation in one scene. C6's review split a similar scene (finding 8). | Split into 5a (task, start, K, "Call the amount that splits x, in moles per litre", change row) and 5a2 (equilibrium row, K expression with the substitution). No words change. | Matches the one-stage-at-a-time rule. |
| S11 | 6b, 6c | Numerals: "two x all squared over 0.500 squared gives x of 0.0050", "x cubed is one times ten to the minus twelve". | The algebra between the equation and x is not said (4x^2/0.250 = 16x^2; 0.160/(4x^3) = 0.040/x^3), so the learner hears a leap. The visual does show these lines. | One clause each: "four x squared over 0.250 is sixteen x squared"; "0.160 over four x cubed is 0.040 over x cubed". (+12 words.) | Spoken steps match the working on screen. |
| S12 | 11 | Bullet 4 is about 70 words (quadratic root rule, shortcut rule, test, huge K). | Too much in one bullet for a copy-and-pause note. | Split bullet 4 into "Quadratic: reject any root that makes a concentration negative (or leaves a reactant below zero)" and "Shortcut: state it, solve with it, test it (under about 5 per cent of the start). If it fails, solve the full equation. Huge K: most of the start ends as products, so find the small leftover and test it." Six short bullets. Hold stays 80 s. | A readable set of notes. |
| S13 | 5d, aids | "A negative concentration is always the wrong root." | The rejected root here also gives PCl5 above its start, not a negative PCl5. The wording could be read as only for the answer x. | "A root that makes any concentration negative is the wrong root." Keep the "more than we started with" detail as the cause. | Applies to roots that make a different species negative in other questions. |
| S14 | 7d | "The slips: 0.525 moles forgets the volume, and 0.425 forgets that some steam was used up." | 0.525 is in mol/L and is called "moles", and 0.425 is also mol/L; a student might not see they are the same quantity. | "0.525 on its own forgets the volume. 0.425 moles per litre forgets that some steam was used up." Also give the correct final-answer unit on screen. | The slips are comparable like with like. |

## Questions the designer asked, answered

| Doubt | Learning view |
| --- | --- |
| Title and route entry | Keep the owner's title. "Part 2: calculations" is clear. The only learning issue is that the title implies part 1 first; the opening line can say "if you have not seen part one, the question types are there". Owner call on the route text. |
| Length (9.1, could reach 9.9) | The fixes add about 90 words and the cuts below remove about 90. Net zero. The voiced run is likely 9.6 to 9.9 min. Do not remove 5b to 5d, 6, 7 or the attempt. |
| Quadratic formula slowed | Yes, per S3. The cost is paid by cutting the side calculation in 6a (now replaced by B1's version), the two slips sentence in 3 and the 26.7 repetition. |
| 5 per cent rule | Keep "about 5 per cent" with the test applied to the shortcut's own value (B1, S6). 10 per cent would pass the 6a case less clearly and is not the common school convention. |
| Units of K | Keep omitted, with the standing "K: no unit written" tag on screen for the whole substitution (not a flash). The three examples (no unit, mol/L, mol/L) hide the difference acceptably under that tag. |
| 2.00 L worked example | Agree. It makes the final conversion matter, and the concentrations conversion at the start is the right first step. Note that the 4 + 4 : 4 + 4 balance means the volume cancels in K; the memory aid check already says so. |
| A second Q example | Not as a pause. Add 12 spoken words in 4b instead: "If carbon monoxide were 1.50, Q would be 4.5, above K, and it would run back." Recomputed: 1.50^2/0.500 = 4.50. This practises the other direction without a second hold. |
| Codex pending | Arithmetic: done above, no mismatch. The illustrative K values: S2 asks for a visible "different temperature" tag so they cannot be read as contradictory. The "huge K from reactants" statement is reasonable for a school treatment. |

## Trace as a student (summary)

- Type 1 (2): fine for a student who watched C5, if the scene is not rushed (76 words, four stages). The 26.7 number is a strong contrast.
- Type 2 (3): follows C6 exactly. Recall only. The same-equation K clash (S2) is the one thing a careful student asks.
- Type 3 (4a, 4b): follows C8. Good. The question gives away the solid (S8).
- Type 4 (5a to 6c): 5a to 5d follow if the formula is spoken (S3). 5c's 10 s decision is real and answerable. 6a to 6c: the check order is wrong in 6a (B1) and the example in 6b undermines the shortcut (S4). 6c leaves out the more common reactant-start case (S5).
- Type 5 (7a to 7d): a student cannot follow "y in the initial row" the first time without hearing why (B2). With B2 repaired the sequence (givens, convert, table with y, K equation, solve, convert to moles) is a good one-stage-per-scene design, and "forgot used up" and "forgot volume" are the right two slips.
- Attempt (8, 9): the new elements are right; the load is too large for the pause (S1) and the answer coincides with a given (S7).
- Density, scenes 5a to 7d: 687 words and 11 scenes, about 20 s per scene, with five scenes over 70 words (5a, 5b, 6c, 7a, 7b). The splits in S3 and S10 and the cuts in S9 are enough; do not add more.

## Length and cuts

Fixes add about 90 words (B2 +25, B3 +8, S3 +30, S4 +10, S5 +30 net of the note, S11 +12, a 12-word Q variant) and cuts remove (S8 -4, S9 -13): about +110 added, -17 removed. To return to 9.1 to 9.8 min, cut in this order: (1) in 3, the closing sentence "The slips are start values in K, and the whole 0.160 off the oxygen." (17 words; the chips stay on screen); (2) in 4b, "Saying left flips the rule, and putting carbon in Q is the solid slip." only if the Q variant is kept (19 words); (3) in 2, "Solids and water stay out of K." (7 words; the second card stays); (4) in 6a, the 27 per cent clause (9 words); (5) shorten the key notes hold to 70 s. These five cuts remove about 52 words and 10 s. The design's own cut list (3, 4b, 2, key notes) overlaps. If the voiced preview still exceeds 10 min, split into part 3 (types 1 to 3 and the decision board) and part 4 (types 4 and 5), as the design already proposes.

## Memory aid check

- "What you are given decides the method": true only with "and what you are asked" (B3).
- "Concentrations, not moles": holds for 2, 3, 7 and 9; the vessel is 1.00 L in the attempt, so it tests nothing there (the worked example carries it).
- "Q chases K": fine, recalled once.
- "Test it or don't use it": correct if the test is on the shortcut's own x (B1) and the 5 per cent convention is stated as a convention.
- "A negative concentration is the wrong root": reword per S13.
- "Initial row: plus y. K stays." Good, and the key anchor for type 5; add the "right after the addition" sentence (B2) so it is reconstructable, not just a rule.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause explained before relied on? | Mostly. The quadratic formula is not spoken (S3). Why the new table starts from the old equilibrium plus y is missing (B2). |
| Terms with plain meanings? | quadratic and approximation: yes. "Initial row" after an addition: no (B2). |
| Current step on screen without competing text? | 5a, 5b, 6a, 7a have too many stages (S3, S10, S9, B1). 5c, 5d, 7c, 7d clean. |
| Worked example one stage at a time, units, results on cues? | Yes for the plan; units move from mol/L to mol across 7b to 7d without notice (B2). |
| Fair attempts? | 4a is fair apart from S8. 8 is too heavy for 10 s (S1) and its answer matches a given (S7). Conditions and demands are on the card; nothing answer-bearing is listed. |
| Feedback names wrong answers? | Yes: 26.7, 0.500, 0.700, 0.525, 0.425, plus the visible negative O2 in the author numbers. |
| Key notes small and useful? | Five bullets, one over-long (S12). Condition tags present. |
| Slideshow test (plan only)? | The plan has an event for each narrated change (chips fly, dots rise, cells tick, roots drop out, ruler fills, countdown). No static signal in the plan; playback still to judge. |
| Em dashes, plain subject-action wording? | No U+2014. Wording is plain. |
| Owner steers (recognise, method, mistakes, not marks, hard types, 10 s, 9 to 10 min)? | Met in design; the 10 s demand fit fails for the attempt (S1) and the recognition rule fails for 3 vs 4 (B3). |

## Verdict

**Revise before recording.** Resolve B1, B2 and B3 and apply S1 to S14 in the script lock pass; the changes are scene wording, two scene splits (5b, 5a) and one number change (S7). Then re-review the exact voiced preview, focusing on scenes 5b to 5d, 6a to 6c, 7a to 7d, the attempt, the total length and the spoken numerals (0.038025, 0.005625, 0.000900, 1.0 x 10^-12). Human listening pending.

## Re-review checklist (for the next revision)

- Does 6a test the shortcut's own x (47 per cent) and the rule card say "state it, solve with it, test it"?
- Does 7a/7b say the new initial row is the vessel right after the addition, and do 7b, 7c and 7d keep y in mol/L until the final multiplication?
- Do scene 1, scene 10 and key note 1 say "given and asked", and do cards 3 and 4 differ by the demand?
- Is the quadratic formula spoken once, with the sign reason for the discriminant and a calculator alternative?
- Does the attempt give K (or have a demand a student can start in one pause), and does the answer differ from every given value?
- Is a different-temperature tag on each repeated equation with a different K?
- Does 6b say why the shortcut is used when a square-root route exists (or use the N2O4 example)?
- Is the reactant-start huge-K case spoken in 6c and the key note rewritten?
- Narration recounted after edits; no U+2014.

## Re-review (Revision 2, 14 Oct)

Fresh independent reviewer. Inspected: `../lessons/chem-m5-g03.md` Revision 2 (script, visual plan, numbers, aids, length), the first review, `student-learning-review.md`, AGENTS.md calculation rules. Not inspected: stills, voiced preview, audio. AI source review, not learner evidence; human listening pending. Read as a student who has watched C5, C6 and C8. U+2014 search of the design and this file: none.

**Verdict: pass after listed fixes.** All three blockers and all fourteen should-fix items from the first review are resolved. No new blocker. Four new should-fix items (N1 to N4) and a few small notes, all wording or scene-split changes that fit inside the one-video length.

### Numbers recomputed (Revision 2 changes only)

All match the design. 7a: sqrt(0.00900) = 0.09487, 0.09487 / 0.200 = 47.4 per cent; real x 0.0750 so 26.5 per cent high. 7b and 7c: 8x^2 = 4.0e-4, x^2 = 5.0e-5, x = 0.007071, 2x = 0.01414, test 1.41 per cent. 8a: 0.400^2 = 0.160, 0.160 / 4 = 0.040, 0.040 / 4.0e10 = 1.0e-12, cube root 1.0e-4, 2x / 0.400 = 0.05 per cent. 9: K old = 0.160 / 0.0400 = 4.00; 0.250 / 4.00 / 0.100 = 0.625; y = 0.525 mol/L; 1.05 mol; wrong answer 0.425; Q after = 0.160 / 0.145 = 1.10. Attempt: CO rise 0.100, CO2 used 0.050, new CO2 0.250 / 0.400 = 0.625, y = 0.625 - 0.350 = 0.275; wrong 0.225 and 0.325; Q 0.160 / 0.675 = 0.237. 4b: 1.50^2 / 0.500 = 4.50. Scenes 2, 3 and 5 unchanged and correct. The per-scene word counts sum to 1453 (checked), and the 9a count (70) checks by hand. No given value equals 0.275 or any named wrong answer.

### First-review items

| Item | Status | Evidence |
| --- | --- | --- |
| B1 approximation order | Resolved | 7a: assume, compute 0.095, test (47 per cent), not allowed. Real x is a tag only. 7b/7c and 8a/8b use assume, solve, test. Rule card matches. |
| B2 units, new initial row | Resolved | 9b says why (the instant after adding, old equilibrium plus y) and defines y in mol/L tied to the question. The 9c demand is "moles per litre"; the "moles of steam added" line is gone; moles only at the end of 9d. |
| B3 decision rule | Resolved | "Given and asked" in scene 1, cards 3 and 4 differ by the demand, scene 12, key note 1, aids. |
| S1 attempt load | Resolved | K given on the card; K from the old equilibrium moved to feedback. See N4 for a wording tidy. |
| S2 same equation, new K | Resolved | Scene 3 narration plus tags in 3, 8a and 10. |
| S3 quadratic | Resolved | 5c rearranges, 5d speaks the formula, a, b, c, the sign reason and the calculator. Two small gaps in N3. |
| S4 tiny K | Resolved | N2O4 is a real quadratic; where 0.500 - x and 2x come from is spoken; the "C6 method cannot solve this" tag gives the reason. Honest "exact 0.0140" tag kept. |
| S5 reactant-start huge K | Resolved | Spoken in 8b, key note reworded, author note reconciled. |
| S6 test quantity | Resolved | "Amount taken off the start"; ruler labelled x or 2x. |
| S7 answer equals a given | Resolved | New CO 0.500, answer 0.275. |
| S8 attempt gives away the solid | Resolved | 4a asks "Work out Q... Which way?"; 4b opens "Leave the solid out". |
| S9 old 7a overload | Resolved | Direction sentence moved to an unspoken tag. See N1 for a different gap in the same scene. |
| S10 5a split | Resolved | 5a and 5b. |
| S11 algebra leaps | Resolved | One clause each in 7c and 8a. (8a still omits 0.400 squared, see N2.) |
| S12 key notes | Resolved | Six short bullets, 60 s hold. |
| S13 aid wording | Resolved | "Any concentration negative". The aid check keeps the "more than the start" case. |
| S14 slips like for like | Resolved | "0.525 on its own... 0.425 moles per litre..." with the unit on screen. |
| Designer answers (Q variant, cuts) | Resolved | 1.50 variant spoken in 4b; the named cuts are applied. |

### New items (Revision 2)

Should-fix:

| # | Scene | Problem and likely student question | Repair |
| --- | --- | --- | --- |
| N1 | 9a | The narration says the vessel "holds" 0.400, 0.400, 0.800, 0.800 and never says "at equilibrium"; "old equilibrium" is first heard in 9b. The new CO "0.200 moles" is also followed by the converted list 0.200, 0.200, 0.400, 0.400, so a student asks "is the CO unchanged?" The new CO 0.100 mol/L is converted only on screen. This is the hard type's setup, so it matters. | "holds, at equilibrium, 0.400 moles..." (+2 words). After the list: "The new carbon monoxide is 0.100." (+6 words). Keep the on-screen conversion. |
| N2 | 8a | 85 words, setup plus algebra in one scene, against the one-stage rule; 0.160 appears with no source. | Split into 8a (task, start, K, let O2 be x, the table cells) and 8a2 (the K line). Add "0.400 squared is 0.160" (+5 words). |
| N3 | 5c, 5d | (a) 5c says 0.0450 times 0.200 is 0.00900 but the other term, minus 0.0450 x, is not said before "move everything". (b) 5d says "plus 0.036" without its source. | 5c: "...is 0.00900, and 0.0450 times x stays." (+6). 5d: "four times 0.00900 is 0.036" (+6). |
| N4 | 11 | "Check K the type one way, with the carbon left out" is unclear, and K is now given, so the line repeats the givens. | Cut it (about 17 words, 5 s). The check line can stay on screen. |

Notes (no action required, take if cheap):
- N5: 8b joins a test and a new case. Fine as written; start the reactant-start sentence with a beat ("Now the other way round").
- N6: the stoichiometric-power slip is absent: (2x)^2 is 4x^2, not 2x^2, and 4x^3 in 8a. Add one unspoken crossed chip in 7b and 8a, and "squared the 2x" to card 4's slips in scene 12.
- N7: 9b does not say why the system moved forward. The data (CO falls) carry the method and the unspoken Q tag in 9d covers it, so this is acceptable. If words are spare, "Adding steam pushes the reaction forward" costs 6.
- N8: spoken fractions "0.250 over 0.100 times 0.625" (9d) and "0.500 times 0.500, over 0.100 times 0.100 plus y" (9c) are ambiguous by ear. The on-screen brackets resolve them. Consider "over 0.100 times the bracket 0.100 plus y".
- 4b: say "1.50 moles per litre" (units).

### Trace as a student (summary)

- Types 1 and 2: fine, clean recall of C5 and C6; the 26.7 contrast is strong.
- Type 3: a real decision (nothing handed over); the Q variant adds the other direction without a second hold.
- Type 4 quadratic: now followable end to end (define x, rows, K, rearrange, formula with a, b, c and the sign reason, roots, rejection with its consequence, independent check). The shortcut sequence is in the order a student will use, fails once (47 per cent) and succeeds once (1.4 per cent), then the huge-K mirror. The learner leaves with "state it, solve with it, test it" and a reason for each outcome.
- Type 5: with N1 repaired the sequence (givens, convert, why y is in the initial row, K equation, try it in mol/L, answer then volume, named slips) is one idea per scene. The attempt is a different system (solid, 1:2 ratio) and fits one pause because K is given.
- Owner steers: recognise (type cards, given and asked), correct method with working, classic slips on every type, hard types about 60 per cent of narration, no marks language, every practice question ends "Pause here to answer." with a 10 s countdown, mid-example holds are 10 s. Met.
- Slideshow test (plan only): each narrated change has a screen event (cells tick, chips fly, roots drop, ruler fills, flame icons, countdown). Playback judgement is still to do on the preview.

### Length (root decision: one video, about 10.5 minutes)

Agree it stays one video. 1453 words at 185 wpm is 7.9 minutes plus about 135 s of holds, so about 10.1, likely 10.4 to 10.8 voiced. N1 to N3 add about 25 words (8 s); N4 removes about 17. If needed, trim the key notes hold from 60 to 45 s (the notes stay pausable). That leaves it near 10.4 to 10.6. Do not cut 5c to 6b, 7a to 7c, 9a to 9d or the attempt.

### Memory aids

All six check out as written. "Test it or don't use it" is now sound because the test is run on the shortcut's own x. "A root that makes any concentration negative is the wrong root" fits the PCl3 case; the design correctly keeps the "more than we started with" cause for a positive but too large root.

### Next steps

Apply N1 to N4 in the script lock and recount words. Keep the Claude science check (K values, 5 per cent convention, huge-K statement, pronunciations). Then review the exact voiced preview, focusing on 5c and 5d (spoken numerals), 8a, 9a to 9d and the total length. Human listening pending.
