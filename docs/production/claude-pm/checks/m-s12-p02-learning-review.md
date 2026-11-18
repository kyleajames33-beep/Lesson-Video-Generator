# Maths S12 p02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p02.md`, "How do we find a probability from equally likely outcomes, and the chance it does not happen?" Source SHA256 `9b2766c03abbbc06b26793ccaf09ae4a1f01aa70d9bffec19221f1e1faed8b65`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p01: the 0 to 1 scale, the three forms, the sample space, n(S)) as a Mathematics Standard student starting Year 12, on both routes (identical content). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A strong lesson built on the right trap. "Is it one in three?" is asked in the hook and answered with a reason (five blue marbles but only two yellow), the colour bars stretching from equal thirds to 3, 5 and 2 tenths make the answer visible, and the complement is caused properly ("Blue and not blue never happen together, and between them they cover every marble"). The complement bar trading length while always filling the bar is a good use of motion. The pack's A2 slip is correctly fixed (CANTEEN has five different letters, so the slip is 1/5; ruling 76). Recalculated with Python `fractions` (`work/brief-review-standard-p/verify.py`, `python -I`) by listing the bag, the cards and the cars: 5/10 = 1/2 = 0.5; 3/10, 2/10 = 1/5, sum 1; green 0, any colour 1; not blue 1 − 1/2 = 5/10; 7/10 and 8/10; 40 hops, bars 12, 20, 8; not a 6 is 5/6; rideshare 3/12 = 1/4, 3/4 = 0.75, check 9/12; slip −2; A1 5/20 = 1/4, 13/20, slip −6; A2 seven cards, five letters, 2/7 and 5/7. All correct.

## Findings

1. **Should fix, scene 2 (why favourable over total is a probability).** The narration names the rule ("the number of favourable outcomes, five, over the total number of outcomes, ten") but never says why that fraction is the chance. A Standard student who has only p01's chance line will ask "why divide?". Fix. Narration, after "That makes the ten marbles ten equally likely outcomes": "The whole chance, one, is shared equally between ten marbles, so each marble has one tenth of it. Five of the marbles are blue, so blue gets five tenths." Visual: on "shared equally" a bar of length 1 (teal outline) splits into ten equal pieces, each dropping a small "1/10" tag onto its token; on "five tenths" the five B tags slide together into "5/10" (violet). Keep the existing equation strip after it. Students should see that favourable ÷ total adds up equal shares, which is also why it fails when the shares are not equal (scene 3). Time: about 9 s (5 × 1/10 = 1/2 checked in `suggested.py`).

2. **Should fix, scenes 2 and 3 (a random-looking run that comes out perfectly even).** The draw machine's highlight "hops at random" and every marble ends on exactly 4 of 40. Author note (b) calls this staged, but on screen it looks like a real random run, so it teaches that random draws come out even, which p05 then contradicts (7 heads in 10 from a fair coin). Fix: show it as fair shares, not a run. Replace "a grey highlight hops at random" with an even deal (the highlight visits each token in turn, four rounds), title the tally "fair share over 40 draws: 4 each", and caption the colour bars "fair shares: red 12, blue 20, yellow 8". This fits finding 1's equal pieces, keeps the 12, 20 and 8, and removes the false impression. No narration change.

3. **Optional, scene 6 ("Here's a case where the shortcut is quicker").** Counting the nine other cars is just as quick, and the scene itself does it. Say instead: "Here's the shortcut in an exam question." A student then sees the check as a check, not as proof the shortcut was unnecessary.

## Joins

p01 to p02: scene 1 opens on p01's final frame exactly (decisions file, section 3), and "Here's the bag from last time, tipped out" names it. p02 to p03: scene 12 is section 3's lunch-deal board exactly ("Lunch deal: 1 main + 1 drink", three mains, four drinks, "picked at random", "how many different lunches?"), with no count shown. Both courses take this path.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1's twenty lettered pens and A2's seven letter cards are the question's own objects, with nothing lit or counted. Feedback gives the answer, the reason, short working and one crossed slip ("1 − 7 = −6"; "1/5, five different letters"), about 22 s each. The pencil case, the rideshare and the CANTEEN cards are everyday and stake-free.

## Key notes and length

Five clear notes; "count them, not the categories" carries the lesson's main idea. About 472 s with holds; finding 1 adds about 9 s (about 481 s), well under 570 s.

No speech, design edits, builds or commits were made.
