# Maths A11 t02b Revision 2: independent learning review

17 November 2026. Design `lessons/math-a11-t02b.md`, "How do true and compass bearings describe a journey?" Source SHA256 `d3eaa3ca98a9a941665a3761f12b733b55804ef296680ce9ced8af986b08ebe5`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t02a's ratio choice and inverse tangent; Year 10 Pythagoras; compass directions; Year 8 parallel lines) as a student starting Year 11. Concentrated on the material new in Revision 2 (scenes 1 to 3, attempt 1 and its feedback, the memory card's second line and the handoff's first sentence), then re-read the whole video as one lesson. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated, with every bearing checked by coordinates (below); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: good, with two should-fix items** (0 blockers, 2 should fix, 3 optional).

The split has given bearings the room they needed. Scene 1 defines a true bearing on the heading the student saw at the end of t02a, so the first idea arrives with a picture already in place. Scene 2's single rule ("start at north or south, then turn towards east or west"; clockwise adds, turning back subtracts) is applied to all four compass forms with a sweep each, and the crossed 148° now carries its cause (it is S32°E). Scene 3 reverses the conversion and gives a reason for subtracting 180° ("Adding to two one two would pass three sixty"). Scenes 4 and 5 now say why the angle at the turn is a difference and why 36.9° is added, so A2 (a) can be answered from what was taught. Attempt 1 is a fair, bounded conversion that needs the subtract-from-south case and a reverse bearing, and its feedback crosses the classic add slip with its meaning (228° is S48°W). The two should-fix items are both in scene 2: a pair of hand tags that become false on the last conversion, and a "three sixty" that is used before it is explained.

Recalculated (`work/brief-review-t02/verify.py`, SymPy 1.14 and coordinates, `python -I`): compass to true by unit vectors (east, north): N40°E = 040.00°, S32°W = 212.00°, S25°E = 155.00°, N65°W = 295.00°, S48°E = 132.00°, S32°E = 148.00°, S48°W = 228.00°. True to compass: 212° = S32°W, 295° = N65°W, 148° = S32°E, 228° = S48°W, 132° = S48°E. Reverses: 212° → 032°, 132° → 312°, 040° → 220°, 070° → 250°. `we-3`: 220 − 130 = 90; √(144 + 81) = 15; tan⁻¹(9/12) = 36.8699°; finish (14.608, 3.407) km east and north, 15.000 km on 076.87°. A2: 250 − 160 = 90; √(25 + 144) = 13; tan⁻¹(12/5) = 67.3801°; finish (8.803, −9.566) km, 13.000 km on 137.38°. sin 120° = 0.8660254. All correct. Narration recounted with `work/brief-resolve-t/count.py`: 4,989 characters, 12 scenes, per-scene counts as stated. No em dash in the file.

## Findings

1. **Should fix, scene 2 (two hand tags are only true from south).** On "towards west" the tag "towards W: clockwise, add" writes, and on "towards east" the tag "towards E: back, subtract". Both are true for S32°W and S25°E. Then N65°W turns towards west and is back anticlockwise, subtract from 360°, the opposite of the tag still on screen. A student copying the tags will learn "west adds, east subtracts", which gives N65°W = 065° or 425°, and the same rule fails for every north-west and north-east case. The cause the narration teaches is the turn from the starting point, not the letter W or E. Fix: word the tags "from S, towards W: clockwise, add" and "from S, towards E: back, subtract"; on "north sixty-five degrees west" fade both and write "from N, towards W: back, subtract from 360°". In line with the owner's mild-clutter rule, also dim each earlier row and label once its case is done, keeping only the four quarter labels as the summary. Students should decide add or subtract from the direction of the turn from N or S, not from the final letter.

2. **Should fix, scene 2 ("three sixty minus sixty-five").** The narration says "north sixty-five degrees west turns back anticlockwise from north, so it's three sixty minus sixty-five". Until now north has only been "zero" (scene 1's sweep runs from "000°"). A student will ask "why three sixty, if north is zero?" The answer is in key note 2 ("start at N (000° or 360°)") but is never said. Fix. Narration: "And north sixty-five degrees west turns back anticlockwise from north. North is also three six zero degrees, a full turn, so it's three sixty minus sixty-five, two nine five degrees." Visual: on "North is also" the N label writes "000° = 360°" before the arc turns back. Students should understand that turning back from north means counting down from a full turn, so the answer stays between 000° and 360°.

3. **Optional, scene 2 (the add case has no written row).** S25°E and N65°W each get a row ("180° − 25° = 155°", "360° − 65° = 295°"), and the crossed slip has one ("S32°W = 180° − 32° = 148°"), but S32°W itself shows only the readout "212°". Fix: on "add" write "180° + 32° = 212°" (green frame). The correct row and its crossed partner then sit together, and all three southerly or westerly cases read the same way.

4. **Optional, scene 3 ("find the nearer of north and south").** The rule works, but the narration does not say why. A student may ask why 295° is not "S115°W". Fix. Narration: "start from the true bearing and find the nearer of north and south, because a compass bearing never turns more than ninety degrees from either." Also "Two nine five degrees is sixty-five short of north" should be "sixty-five degrees short of north", as the design's rule on spoken angles requires. Students should be able to convert any true bearing, including ones near east or west.

5. **Optional, scene 6 memory line ("Reverse: add or subtract 180°").** The card does not say which, and scene 6's narration only says "add or subtract one eighty degrees". Scene 3 gave the reason once ("Adding to two one two would pass three sixty"). Fix: key line "Reverse: ± 180°, staying between 000° and 360°", and narration "so add or subtract one eighty degrees, whichever keeps it under three sixty". The aid's other assumptions check out (true bearings only, parallel north lines on a flat map) and it supports a new case (A1 (b), 132° → 312°).

## Other note (not a learning finding)

Scene 11's axes are described as "x and y from −2 to 2, 520 px per unit", which is 2,080 px across and cannot fit a 1080p frame; t03 scene 1 then shrinks "the axes ... (520 px)". This is Revision 1's frame, unchanged. Root or Codex's error check should confirm the intended scale (for example 520 px for the whole axes, or 240 px per unit) so the t02b and t03 frames are built identically.

## Earlier findings (t02 Revision 1 review) belonging to t02b

- **3 (why the angle at the turn is a difference, and why add): resolved.** Scene 4 says "Both bearings are measured from the same north line at the turn, so the angle between the two legs is their difference", with both arcs glowing from P's north line before the 90° fills; scene 5 says "The second leg turned clockwise, so the finish is clockwise of the first leg", with a clockwise arrow, and why tangent fits ("Nine is opposite that angle, and twelve is adjacent"). A2's model answer gives the same reason.
- **4 (only one direction of conversion, only the add case): resolved, and more fully than asked.** Scene 2 converts all four compass forms, including the subtract-from-south case (S25°E = 155°); scene 3 converts true to compass twice and reverses a bearing. Findings 1 and 2 above are about wording inside this new material, not about coverage.
- **5 (split): resolved** as root's decision 1. One main question; about 459 s with holds and about 369 s of speech. Scenes 2 and 4 are the longest (about 62 s each), but each is one rule applied with a moving sweep, not several new ideas.
- **8 ("zero six seven"): resolved.** Feedback 2 says "zero six seven degrees".

## Joins

- **t02a to t02b:** t02b's boundary and scene 1 list t02a scene 10's frame exactly (sea map, grid 1 km = 48 px, top-view yacht at "O", dashed north line "N", dotted heading ray 40° with no arc and no number, chips "which way?", "Next: bearings", "?"). Scene 1 answers the handoff's question at once, naming that ray "zero four zero degrees". Good.
- **t02b to t03:** scene 11's frame (axes, blue 120° ray and arc, "sin 120° = 0.8660…", red-outlined "no right triangle holds 120°", chips "sin 120° = ?", "Next: any angle", "?") is t03's boundary, and t03's first line ("Here's that hundred and twenty degree angle") picks it up. The new first sentence ("Every triangle today had a right angle, so its other two angles were smaller than ninety degrees") is true of this video, which used 212° and 295° as bearings but never inside a triangle. Good (subject to the scale note above).

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is an empty rose with N, E, S and W only; A2's is a map with a north line at the start only; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake, in about 25 s and 28 s. A1 needs two taught steps (the subtract-from-south case of scene 2 and the add-180° reverse of scene 4) and so is a real decision, not a copy of one example. Its crossed "228°" is the exact error finding 1's tags would encourage, which is a further reason to fix them.

## Later-video check

t06 reuses the new north line, the reverse bearing and "the angle between the legs is the difference" for a non-right turn on the same yacht; all three are taught here (scenes 3 and 4). t03 recalls nothing from t02b except its frame.

## Site link and evidence paths

lesson09 (card 05, `we-2`, `we-3`, Q3) is the YouTube link and the source of every example; this fits (root's decision 1). The design's "Review evidence paths" name `checks/m-a11-t02-learning-review.md`; root may add this file (`checks/m-a11-t02b-learning-review.md`) as t02b's Revision 2 review.

No speech, source edits or commits were made.
