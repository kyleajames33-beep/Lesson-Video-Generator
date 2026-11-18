# Maths S12 p07 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p07.md`, "How do Venn diagrams and two-way tables sort two attributes?" Source SHA256 `f96a0986382df3f8d47a2cd9977f79e053efa76a1cc2419843d4b76743bf70c6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p02: favourable over total and the complement; Year 11 d07: categorical data in tables) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A good lesson with a strong central picture. The hook states the problem in numbers ("Forty-five plus thirty is seventy-five, but that counts those twelve twice"), and the card drop answers it: the twelve double-ticked cards land first, and the lunch circle visibly includes them, so "lunch only is forty-five take away twelve" has its reason on screen. "At least one" and "exactly one" each get a plain meaning, and "does both count?" is a usable self-check. "Of those who" is taught as one row's count over that row's total, with the denominator box sliding from 150 to 80, and no conditional notation, ∪ or ∩ (ruling 66). Recalculated with Python `fractions` (`work/brief-review-standard-p/verify.py`, `python -I`): 33, 18, 63, 17; 9/40, 17/80, 63/80, 51/80; the table 12, 33, 18, 17 with margins 45, 35, 30, 50, 80; `we-2` 80, 70, 75, 75, 150, 8/15, 11/16, slip 55/150 = 11/30; A1 7, 5, 5, 13, 17/30; A2 4, 40, 58, 22, checks 90 and 90, 11/45, 1/8, slip 4/90; memory-aid case 60, 50, 60. All correct.

## Findings

1. **Should fix, scenes 1 to 4 (ruling 69: the canteen survey is not labelled).** The design's own decisions call the survey invented, and p08's advertisement carries "invented example", but the survey card ("Canteen survey: 80 students") has no tag, and it reads as a real school's data. Fix: a small grey "invented example" tag on the survey card in scene 1 and on the Venn rectangle's label in scenes 2 to 4. The card is p06's left panel (decisions file, section 6), so root adds the tag there too. No narration change.

2. **Should fix, scene 4 ("and so on" skips the cells A2 needs).** The narration fills two cells (33 and 35) and then says "and so on", while 18, 17 and 50 are only written. A2 then asks for four missing values that need a chain (petrol on time, then petrol total, then the late total). Fix. Replace "and so on" with: "Recess and no lunch is thirty take away twelve, eighteen. And no to both is thirty-five take away eighteen, seventeen." Keep the visual's order (33, 35, 18, 17, then 50). Students should see one gap's answer used to fill the next, which is exactly A2's demand. Time: about 6 s.

3. **Optional, scene 5 (the same table drawn twice).** The givens card holds the four counts as a table, and the board draws the full table again at the right. Drop the givens-card table (keep "total 150" as the only given) so one table carries the scene and the row restriction happens on the only copy.

## Joins

p06 to p07: scene 1 opens on p06's two-route frame and grows the left panel (the survey card and its returned cards, "how do we count the overlap once?"); the counts 45, 30 and 12 are first said here, as section 6 intends. p07 to p08: scene 11's 12 s bridge ("a survey's numbers are only as good as the way it was run") gives the move to an advertisement a reason, and scene 12 is p06's right panel scaled evenly by 1.3 (decisions file, section 7), with "Venn diagrams and tables: done" and the "invented example" tag, so p08 has one opening for both courses.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1's picture is an empty two-circle Venn with a key, and A2's is the table with blank boxes, which is the question itself. A2 has three demands (four missing values, a probability, an "of those" fraction) for 10 s, but "Pause here to answer." covers that. Feedback gives the answer, the reason, short working and one crossed slip ("12 and 10 written inside the circles"; "4/90"), about 26 s and 28 s. Sport, music and rideshare trips are fair anchors; `we-2`'s exercise and diet makes no health claim.

## Key notes and length

Five useful notes; "Fill the overlap first" is a compact anchor with its reason built into the lesson. About 471 s with holds; finding 2 adds about 6 s, well under 570 s.

No speech, design edits, builds or commits were made.
