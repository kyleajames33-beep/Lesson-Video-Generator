# Maths S12 p06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p06.md`, "How many times should we expect an event to happen?" Source SHA256 `7aa3e45be70bc5d71026f4824a89aba4257936d3424119dac1f3e5bc92cfd5b3`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p05: relative frequency as an estimate; p02: theoretical probability; Year 11 m01: percentages as decimals) as a Mathematics Standard student starting Year 12, on both routes (identical content). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A clear, well-paced lesson. np is reached before it is named ("about eight in every ten ... three lots of eight, which is twenty-four"), so the formula arrives as a summary of something the student already did. "A long-run average, not a promise" is shown, not told: three months land on 22, 25 and 24 and the year's average glides onto 24. Decimals are justified ("You can't roll point six seven of a six, but that's fine, because it's an average"), and the wrong-n slip is crossed twice with the same caption pattern. Just under 5,000 characters with nothing missing (ruling 76). Recalculated with Python `fractions` and `math.comb` (`work/brief-review-standard-p/verify.py`, `python -I`): 30 × 0.8 = 24 and three lots of 8; binomial(30, 0.8) P(22) = 0.1106, P(25) = 0.1723, P(24) = 0.1795; 120/6 = 20; 100/6 = 16.67; 15/500 = 0.03; 2000 × 0.03 = 60; 40/2000 = 0.02; slip 15; 600 × 0.15 = 90; 500 × 0.02 = 10; A1 45, slip 4500; A2 0.015, 75, slip 6; memory-aid case 18. All correct.

## Findings

1. **Should fix, scenes 1 to 3 and 6 (rulings 69 and 76: labels missing on screen).** Ruling 76 accepts the staged months "labelled", but scene 3's visual has no label, and a student may take 22, 25 and 24 as a real record. The app record (inherited from p05) and the canteen's "about fifteen per cent of its six hundred students buy a pie" are invented statistics with no tag either. Fix: in scene 3, a grey tag "simulated months" on the month strip from the first month; the phone's record carries "invented example" (added at p05's handoff, so it appears in scene 1 unchanged); in scene 6, "invented example" on the pie gauge. No narration change.

2. **Should fix, scene 5 ("It would need a faulty rate below zero point zero two").** The step behind 0.02 is on the board ("40 ÷ 2000 = 0.02") but not said, so by ear the number appears from nowhere in an already long scene. Fix. Narration: "Forty out of two thousand is zero point zero two, so the factory would need a faulty rate below that." Students should see how to test a target: turn it into the probability it needs, then compare. Time: about 4 s.

3. **Optional, feedback 1 ("Saturday could be busier").** The card gives 250 customers, and the lesson's reason is that the count varies around np even when n is fixed. Say: "That's a long-run average, so even with two hundred and fifty customers, more than forty-five might order one, and making a few extra avoids running out."

## Joins

p05 to p06: scene 1 opens on p05's final frame exactly (decisions file, section 3). p06's two-route frame (scene 12) matches section 6 item for item: the left panel (the canteen survey card, the stack with three double-ticked cards, "how do we count the overlap once?", "Standard 2 next: Venn diagrams and two-way tables") is p07's opening, and the right panel (the phone advertisement "4 out of 5 users sleep better!", "Based on 25 volunteers", "invented example", "should we believe it?", "Standard 1 next: probability in the real world") is p08's picture. The lead-in names both paths without working anything out. If root adds the survey's "invented example" tag (p07 finding 1), it goes on this left panel.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; the order slip and the test sheet show the givens only. Feedback gives the answer, the reason, short working and one crossed slip ("250 × 18 = 4500"; "400 × 0.015 = 6"), about 26 s and 27 s, and A2's feedback states the assumption (the 400 tested are typical) as the pack's part (c) intended. A café, power banks, phone cases, pies and light bulbs are everyday and stake-free.

## Key notes and length

Five useful notes; "Use the new n, and percentages as decimals" catches both crossed slips. About 472 s with holds; finding 2 adds about 4 s, well under 570 s. No padding is needed (root's question 5).

No speech, design edits, builds or commits were made.
