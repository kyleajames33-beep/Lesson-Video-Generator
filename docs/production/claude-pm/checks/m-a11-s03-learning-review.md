# Maths A11 s03 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s03.md`, "Why do we subtract the overlap when counting a union?" Source SHA256 `d774bab190bdff64e1735b712c692a44af142d5ccd3e6449b5e05d65baf10c05`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s02: two-set Venn diagrams filled from the overlap, regions adding to |U|) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is the strongest "why subtract the overlap" treatment I could ask for. The hook's impossible sum (45 borrowers, 36 members, "Nobody was invented") makes the question felt; the overshooting bars and the tick counter show that each member in both totals carries two ticks, so the overshoot is exactly the overlap before any formula appears; and "take away one copy of the overlap" answers "why once, not twice". The three boards then use the rule for the union, the overlap and "neither", with the condition "Everyone plays at least one, so the union is the whole class" said aloud in scene 5. Scene 7 closes the loop: just adding is right only when nothing is counted twice. Root ruling 10 is honoured. Recalculated: 26 + 19 = 45, overshoot 9, regions 17, 9, 10; 30 + 20 − 8 = 42; 14 + 16 − 25 = 5; 45 + 32 − 15 = 62, neither 18, regions 30, 15, 17, 18; A1 union 90, overlap 25, regions 45, 25, 20, 30, slip −5; A2 |B| = 19, exactly one 23. All correct.

## Findings

1. **Should fix, scene 4 (the letter A means "art" right after the rule used A for the first set).** Scene 3's rule card puts A in blue as the first set. Scene 4's givens then read "|M| = 30" (blue) and "|A| = 20" (teal), and the equation strip "|M ∪ A| = |M| + |A| − |M ∩ A|", so A is now the second set, in the other colour, one scene after the rule. A student matching the board to the card will put 30 where A goes. Fix: call the second set "visual arts" with the letter V: narration "thirty study music, twenty study visual arts, and eight study both"; givens "|M| = 30", "|V| = 20", "|M ∩ V| = 8"; rows "|M ∪ V| = 30 + 20 − 8". Students should be able to map the first board onto the rule card term by term.

2. **Optional, scene 4 ("In a group").** "In a group, thirty study music" leaves the group unnamed while the framed answer says "42 students". "In a group of students" costs three words and matches the frame.

## Open decisions answered

- (1) Site contexts on the three boards: keep them (root ruling 38 keeps the library as the anchor and re-sets no site example). The library carries the cause; the boards show the rule travels.

## Joins

s02 to s03 matches: the library trolley plate and the four chips of s02's final frame open s03, and "Every one of its thirty-six members borrowed at least one" repeats the condition s02 stated. s03 to s04: the gumball machine plate with "red: 12", "blue: 8", "yellow: 5", "one turn = one gumball", "P(blue) = 1/3 ?", "Next: sample spaces and probability", "?" is s04's opening frame, and s04's first line repeats the counts and the question.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; both pictures are empty labelled Venn diagrams. A1 combines scene 6 (neither from the union) run backwards with scene 5 (overlap from the union); both moves were modelled. A2 rearranges the rule (scene 3, "any three give the fourth") and asks "exactly one", which s02 A1 practised. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 24 s.

## Pace

About 370 s of speech before the notes, about 461 s in all; seven teaching beats of 25 to 46 s each. Not rushed, and no extra worked board is needed (root ruling 35).

## Year 12 handoff check

No Year 12 design assumes s03 directly; s05 divides this rule by |S| and recalls "counted twice", both set up here.

## Site link

`probability-and-data/lesson13.sa.html` matches the outline. Correct.

No speech, source edits or commits were made.
