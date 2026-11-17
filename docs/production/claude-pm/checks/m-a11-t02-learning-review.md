# Maths A11 t02 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t02.md`, "How do we solve right-triangle problems with bearings and elevation?" Source SHA256 `74bf34e77b72a0115a19988a0b40b276d054cba361eca5bcbc5fa071ec19d2cb`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01; Year 10 SOH CAH TOA, inverse ratios, elevation and depression, compass directions) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix, and split recommended** (0 blockers, 5 should fix, 3 optional).

The elevation half is strong. "Choose the ratio from the two sides involved, the one you know and the one you want" makes tangent a decision, not a guess. The drifting yacht shows the angle falling as the distance grows, and "from further away the clifftop looks lower" turns the crossed 64° into a check a student can reuse. The "Z" lighting both arcs together is a genuine visual surprise that explains why depression equals elevation. The bearings half is correct but compressed: scene 4 introduces true bearings, compass bearings, one conversion and reverse bearings in about 62 s, and scene 5 runs a new north line, a reverse bearing, the angle at the turn, Pythagoras, inverse tangent and an added bearing in about 69 s. Recalculated: 40 tan 52° = 51.1977; 51.1977/65 = 0.787656, tan⁻¹ = 38.226°; slip tan⁻¹(51.1977/25) = 63.97°; 18/tan 27° = 35.327; S32°W = 212°, return 032°, slip 148°; `we-3` 15 km and 076.87° by coordinates (finish (14.61, 3.41)); A1 30/tan 12° = 141.14 (slip 6.38); A2 13 km and 137.38° by coordinates; sin 120° = 0.866025. All correct.

## Findings

1. **Should fix, scene 1 (the multiply step is not said).** Narration: "Opposite and adjacent means tangent. So h is forty times tangent fifty-two degrees." The screen shows "tan 52° = h/40", but the narration jumps to h = 40 tan 52°. Scene 3 then teaches "with d on the bottom, divide" and A1's crossed slip is multiplying when the unknown is on the bottom; that contrast needs the first case said aloud. Fix. Narration: "Opposite and adjacent means tangent. So tangent fifty-two degrees is h over forty. h is on top, so multiply both sides by forty: h is forty times tangent fifty-two degrees, about fifty-one point two metres." Visual: hand tag "unknown on top: multiply" beside the row, matching scene 3's "unknown on the bottom: divide". Students should be able to choose multiply or divide from where the unknown sits.

2. **Should fix, scene 1 and t01 scene 13 (the triangle does not close).** The sight line and the dashed horizontal start at deck level (t01's handoff; the kit addition "a dashed line from the yacht's deck point"), but the 40 m runs along the waterline and scene 1 draws the right-angle mark at the cliff's foot. With the horizontal at the deck, the right angle is on the cliff face above the water and h would be measured from the deck, not the sea. The narration says "Looking up from the water". Fix in both designs and the sidecar brief: start the horizontal and the sight line at the yacht's waterline point (the sidecar already reports the waterline y), so the triangle's corners are the yacht at the water, the cliff's foot and the clifftop. Students should be able to point to all three corners and the right angle on the picture.

3. **Should fix, scene 5 (why the angle at the turn is a difference, and why add).** "The angle between them is two hundred and twenty minus a hundred and thirty, so ninety degrees." A student will ask why subtracting two bearings gives the angle inside the triangle. A2 (a) then asks them to "explain why the path turns through a right angle", which needs that reason in words. Fix. Narration: "Looking back along the first leg is the reverse bearing, zero four zero plus one eighty, two two zero degrees. Both bearings are measured from the same north line at the turn, so the angle between the two legs is their difference: two hundred and twenty minus a hundred and thirty, ninety degrees." And later: "The second leg turned clockwise, so the finish is clockwise of the first leg. Add the thirty-six point nine degrees to zero four zero degrees." Visual: on "same north line" both arcs (220° and 130°) glow from the one north line at P before the 90° fills. Students should be able to write A2 (a)'s reason.

4. **Should fix, scene 4 (only one direction of conversion, and only the "add" case).** The syllabus names true and compass bearings, and the pack's stop asks for "converting between them". The design converts compass to true twice (N40°E, S32°W), both by adding; it never converts a true bearing to a compass bearing and never shows a southerly bearing turning towards east (S25°E = 180° − 25° = 155°), which the pack flags as "the step students miss". Fix (a sentence each): "South twenty-five degrees east starts at south and turns towards east, which is back anticlockwise, so it's one eight zero minus twenty-five, one five five degrees." and "Going the other way, two one two degrees is thirty-two past south, towards west: south thirty-two degrees west." Visual: the rose's arc sweeps to 180° and back 25° towards E, readout "155°"; then the 212° ray relabels "S32°W". Students should be able to convert either way and to decide whether to add or subtract from 180°.

5. **Should fix, structure (open decision 1, root ruling 16): split bearings into their own video.** See "Answer on the split" below. Findings 1 to 4 add about 450 characters (about 34 s) to a design already at 6,031 characters and about 541 s with holds, which would put it near or over 570 s with both feedbacks at 28 to 29 s. More importantly, the video has two main questions ("How high is the cliff, and where does the yacht end up?"), and AGENTS.md asks for one, with a split when combining them would rush the explanation.

6. **Optional, scene 2 (spoken and written values differ).** Narration "about zero point seven eight eight"; the row reads "tan θ ≈ 0.7877". Say "zero point seven eight seven seven" or write 0.788, so the ear and the eye agree.

7. **Optional, scene 3 (the same cliff plays a different cliff).** "From a lower cliff eighteen metres high" is shown on the same painted cliff that was 51.2 m a moment before. Either use the coded HSC-style side view for the 18 m example (as A1's picture does), or label the shrunken plate "18 m" and drop "lower".

8. **Optional, feedback 2 ("Stopping at zero six seven is the slip").** Say "zero six seven degrees", as every other spoken bearing does.

## Answer on the split (root ruling 16)

Recommend splitting. The elevation half (scenes 1 to 3) is a complete lesson; the bearings half (scenes 4 and 5) is the part that is rushed, and it is also the part with gaps (findings 3 and 4). Proposed boundaries:

- **t02a, "How do angles of elevation and depression find heights and distances?"** Opens on t01's final frame unchanged. Scenes 1 to 3 with findings 1 and 2, the memory card's first line ("Elevation looks up, depression looks down: both from the horizontal"), A1 (the buoy, unchanged) and a new A2 that finds an angle with inverse tangent (for example from a known height and distance, to the nearest degree). Handoff: the yacht now sails away; the top-view yacht `ma11-yacht-top-v1.png` on a coded sea map with a north line, chips "which way?", "Next: bearings", "?". About 380 to 420 s.
- **t02b, "How do true and compass bearings describe a journey?"** Opens on t02a's final frame. Scene 4 with finding 4 (both conversions, add and subtract from 180°, reverse bearings), scene 5 with finding 3, the memory card's second line, A2 (the hiker, unchanged) and a conversion attempt (for example "Write S48°E as a true bearing, and give the reverse bearing"). Handoff: t03's 120° frame, unchanged. About 400 to 440 s.

Both stay within the 5 to 10 minute target. t03's opening frame does not change, and t06's "Back in the bearings video" still points to the right video (t02b). No new plate is needed. If root keeps one video, apply findings 1 to 4 and take all three named reserve trims plus scene 4's "East is zero nine zero degrees ..." sentence, and measure the voiced take against 570 s.

## Joins

t01 to t02 matches (the cliff, the yacht 40 m out, "52°", the chips), subject to finding 2's geometry, which changes the frame in both designs identically. t02 to t03: coded axes, the blue 120° ray and arc, "sin 120° = 0.8660…", the red-outlined "no right triangle holds 120°", "sin 120° = ?", "Next: any angle" and "?" are t03's opening frame, and t03's first line ("Here's that hundred and twenty degree angle") picks it up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows the 30 m cliff and the 12° depression only; A2's shows a north line at the start only; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 29 s, feedback 2 about 28 s; feedback 2 covers three demands, so finding 3's reason in scene 5 matters, because feedback 2 can only point back to it.

## Later-video check

t06 reuses the new north line and reverse bearing for a 120° turn; t07 assumes "pick the ratio from the sides involved". Both are delivered (scene 5; scene 1). Root ruling 19 (the yacht returns in t06) is consistent with either structure.

## Site link

`trigonometry-and-measure-of-angles/lesson09.sa.html` (Bearings, Elevation and Depression) is linked, with lesson04 cited in the design, as root ruling 16 says. If the video splits, t02a fits lesson04 or lesson09 and t02b fits lesson09; root decides.

No speech, source edits or commits were made.
