# Maths S12 r03 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r03.md`, "How does capture-recapture estimate a population we cannot count?" Source SHA256 `394cbf8b4a8a436da409f0474a63fa87dcdb303a0101223596f47a41a92cb851`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r01 fraction of a whole; r02 practical ratio problems; percentages) as a Standard 2 student starting Year 12. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a strong design. The order is right: the method, then the equal-fractions idea, then the × 5 step on two fraction cards, and only then the rule in words. The pasta test (150 against a true 156) is the best move in the video: it earns trust in an estimate by showing it beside a known answer, and "because shaking the bag mixed the marked shells evenly" sets up the assumptions. The what-if replay (the same 250 dots, the tagged ones crowding the jetty, 16 in the net, 125 on the readout while "still 250 fish" stays on screen) makes "bigger bottom, smaller answer" visible. The yabby slip's sense check ("four yabbies, fewer than were marked") is a reusable habit. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 40 × 50 ÷ 8 = 250, 8/50 = 0.16 = 40/250; 40 × 50 ÷ 16 = 125; 30 × 45 ÷ 9 = 150, 156 − 150 = 6 (3.8%, not said); 24 × 30 ÷ 5 = 144, 5/30 = 24/144 = 1/6, 24 × 5 ÷ 30 = 4; 75 × 120 ÷ 18 = 500; 45 × 60 ÷ 9 = 300. All correct.

## Findings

1. **Should fix, scene 3 (why the two fractions match).** "If the tagged fish have mixed in evenly, the fraction tagged in the net should match the fraction tagged in the whole lake" is the key idea, but it is stated with its condition and no reason. A student asks "why should a net of fifty be like the whole lake?" Fix, narration after that sentence: "Mixed evenly means every part of the lake has the same share of tagged fish. So a net full of fish is like a small copy of the lake." Visual: on "small copy" the 50 netted dots lift into a small inset beside the lake, 8 amber among them, and the tag "the net is a mini lake" appears beside the "same fraction" tag. Students should understand that the matching fractions come from even mixing, which is also why the first assumption in scene 6 matters. About 7 s.

2. **Optional, scene 4 or key note 4 (rounding is never practised).** Key note 4 says "write 'about' and a whole number", but every answer in the video comes out whole (250, 150, 144, 500, 300). HSC items often do not. Add one sentence after the yabbies' answer: "If the answer isn't a whole number, round it, because you can't have part of a yabby." Or change A2's 60 to 62 (45 × 62 ÷ 9 = 310) only if a non-whole value is wanted; the sentence alone is enough.

3. **Optional, scene 6 and key note 5 ("nobody in or out").** For fish, "no fish in or out" (or "no births, deaths or moving in or out") is plainer than "nobody", which suggests people. Change the chip and the note.

## Root ruling 50 and open decision 1

Ruling 50 accepts "r03's spoken words for the letter shorthand". The design (Revision 1, written before ruling 50) still has the letters as an unspoken grey chip and offers a spoken sentence as open decision 1. Root should say which was meant. From the learner's side, the spoken sentence is worth its 6 s: exam questions and textbooks use n₁, n₂ and m₂, and a student who has only heard "tagged, caught, tagged in the catch" may not map them. If added, say each letter's meaning (ruling 36's pattern): "Some books write it with letters. N is about n one times n two, divided by m two, where n one is the number tagged, n two the second catch, and m two the tagged ones in it."

## Joins

r02 to r03: scene 1 opens on r02's two-route frame and fades the right panel. r03 to r04: scene 13 is r02's right panel full width, with no ruler or value, so r04 opens on the same picture for both courses and r03 hands on nothing r04 needs.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown and show nothing answer-bearing. A1 (b) is close to scene 6's what-if, which is fair for a first attempt and checks the direction of error. A2 (b) rewards an applied assumption, and the crossed "the sample is random" names the commonest weak answer. Feedbacks about 23 s and 25 s. A fishing club, a kitchen, a farm dam and a ranger's koala count are fair, everyday framings; no gambling, no prices, no people drawn. The koalas stay (ruling 50).

## Key notes and length

Five useful notes; note 5 lists all four assumptions in plain words. About 480 s with holds, 90 s under the cap; finding 1 and the letters sentence together add about 13 s.

No speech, design edits, builds or commits were made.
