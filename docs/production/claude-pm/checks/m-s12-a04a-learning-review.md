# Maths S12 a04a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a04a.md`, "Where is the break-even point, and what does it say about profit and loss?" Source SHA256 `bb6cf0fc4804e8e42e183b7eb4e5136da6bb7e5ffb0301784bf52454d8e062e0`.

Written design reviewed by tracing it from its stated entry knowledge (a03: two facts, two equations; a crossing in context; a02a for Standard 2; Year 11 Standard l03 and m01) as a Standard 2 student and as a Standard 1 student without an algebraic method. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a strong design. Every term gets its plain meaning before use (fixed cost, variable cost, revenue, profit, loss, break-even), and break-even is caused, not defined: cost starts ahead because the $150 is paid at zero lawns, revenue climbs faster ($45 against $6), the gap closes, and where the lines cross the profit is zero. Scene 4's "$45 in, $6 out, so each lawn pays back $39" is spoken for everyone, so a Standard 1 student gets a reason without algebra. The non-whole break-even (3.85 lawns) makes rounding up necessary from the first example, and checking 3 and 4 lawns shows why down is wrong. The site corrections MS-04 and MS-05 are respected. Recalculated with SymPy 1.14: break-even 50/13 ≈ 3.846; P = −150, −72, −33, 6, 240 at 0, 2, 3, 4, 10; R and C at 2, 3, 4, 10 as written; stall n = 30, $300, profit $120 at 50; A1 n = 28/5, P(5) = −45, P(6) = 30; A2 (20, 500), −$120 at 12. All correct.

## Findings

1. **Should fix, scene 7 and feedback 1 (the Standard 1 route stops after scene 4).** The market stall and A1's feedback reach break-even only by algebra ("ten n equals a hundred and eighty plus four n, so six n is a hundred and eighty"; "seventy-five n equals four hundred and twenty"), although scene 4 built the pay-back route for everyone. A Standard 1 student meets the algebra as the only spoken method in the worked example and the attempt. Fix. Scene 7, replacing "At break-even, ten n equals a hundred and eighty plus four n, so six n is a hundred and eighty, and n equals thirty.": "Each item brings in ten dollars and uses four, so it pays back six dollars of the fixed cost. A hundred and eighty divided by six is thirty, and the lines cross at thirty items." Keep the algebra rows in a grey "Standard 2" panel as in scene 4. Feedback 1: "Each car pays back ninety minus fifteen, seventy-five dollars, so break-even is four hundred and twenty divided by seventy-five, five point six." Students on both courses should find break-even the same way every time: fixed cost divided by what each item pays back, checked on the graph.

2. **Optional, scene 7 (a whole break-even is not yet a profit).** The rule "round up to the first whole number that makes a profit" is clear for 3.85, but the stall breaks even at exactly 30, where profit is $0. A student asked "how many to make a profit?" may answer 30. Add one clause after "both three hundred dollars": "At exactly thirty, it only breaks even; the first profit comes at thirty-one." (P(31) = $6.)

## Joins

a03 to a04a matches exactly (the trailer plate and card, the word-labelled lines, the "?" crossing). a04a to a04b matches: the formal table plate with "$6,500", "$85 a guest", "$130 each" and the empty spreadsheet with the cursor on A1 are a04b's opening frame.

## Practice and feedback

Both cards keep every demand visible through the 10 s countdown; A1 has empty axes and A2 supplies the graph with the crossing unmarked. Feedback is brief with one crossed slip each (about 25 s and 27 s). The mowing round, car detailing and T-shirt printing are realistic small-business anchors with no names or people.

## Key notes and length

The five notes are the essentials (C, R, break-even, profit, round up). About 535 s with holds; finding 1 is a like-for-like sentence swap.

No speech, design edits, builds or commits were made.
