# Maths A11 s11 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s11.md`, "How do histograms and polygons show the mode and median?" Source SHA256 `5bd06260803ab88dde4cc2a4225b4725e1f8ab3ad8c30e5b5ba45ddf67cb8e1a`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s10: the five-column table and spreadsheet) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`, with both grouped medians by linear interpolation in exact fractions); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

One spreadsheet chart panel that switches from histogram to relative histogram to polygon to staircase is a good use of video: the same data stay put while only the view changes, and "Every height was divided by the same forty, so only the scale on the side changes" gives the reason the shape survives. "The mode is the value, two, not its frequency, eighteen" targets the classic slip. The ride gives continuous data a reason for touching bars ("Time is continuous, so the classes run straight into each other"), and upper boundaries have a reason ("Each running total is only complete at the top of its class"). The grouped median is honestly "an estimate". No quartiles are used, so root ruling 13 has nothing to apply to. The closing frame is an honest ending (root ruling 45). Recalculated: the 20th and 21st spinner results are both 2; ride waits sum 50, cumulative 6, 20, 40, 47, 50, median 20 + 5/20 × 10 = 22.5 (and 22.5 again from 0.5 on the relative curve); A1 cumulative 3, 12, 17, 23, 27, 30, the 15th and 16th baskets both 3; A2 cumulative 3, 11, 26, 44, 50, median 176/3 ≈ 58.7. All correct.

## Findings

1. **Should fix, scene 5 (the median rule is given without its reason).** The narration says "draw a line across at half the total, twenty. The first bar to reach it is the bar for two, so the median is two." Why the first bar to reach half holds the middle result is shown only by ringed tokens. A student who cannot say why will misapply the rule (for example, reading the value under the bar that the line touches last). Fix, after "the median is **two**": "Here's why. The first ten results are ones, and results eleven to twenty-eight are twos. So the twentieth and twenty-first results are both twos." Visual: on "eleven to twenty-eight" the 18 twos in the token row light, with the 20th and 21st ringed. Students should be able to explain that the running total tells you which value the middle results fall in.

2. **Should fix, scene 7 and feedback 2 (how to read between the plotted points is not said, but A2's answer depends on it).** Scene 7 says "It lands at about twenty-two point five minutes", with the interpolation only as a grey row. A2's feedback then gives "about fifty-eight point seven", a precision a student will not get by eye from their own polygon, and the grey row "40 + 14/15 × 20" is never explained. A student who reads "about 59" will think they are wrong. Fix, in scene 7 after "then down": "The polygon is a straight line between twenty and thirty minutes, and twenty-five is a quarter of the way from twenty to forty, so the median is a quarter of the way through that class, twenty-two point five." In feedback 2: "Across from twenty-five, the polygon is just below sixty, about fifty-nine. Working along the straight line, it's fifty-eight point seven." Keep the grey rows. Students should know that a graph reading near 59 is right, and how the exact estimate is found.

3. **Optional, scene 7 (the cumulative relative frequency polygon arrives in one closing sentence).** This is the graph Year 12 s04 and s06 build on, and it appears as the scene's last sentence after 600 characters of other work. A 1 s hold after the axis relabels to 0 to 1, before "the median is where it reaches zero point five", would let it register.

## Open decisions answered

- (1) The closing frame: settled by root ruling 45. It reads as an ending and makes only true claims about published Year 12 videos.
- (2) A2's "online quiz" context: fine; the numbers are the site's and the context is neutral.

## Joins

s10 to s11 matches: the finished spreadsheet, the three bars and the chips open s11, and the first line restates the two questions. s11 is the last core video of Year 11; its final frame points to the Year 12 playlist with no "?" and no promise of p01 to p03. The two Year 12 claims ("relative frequencies become probability distributions"; "the 0 to 1 curve returns") match Year 12 s01 and s04.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; both pictures are empty axes. A1 practises scenes 2 and 5 on a new data set; A2 practises scenes 6 and 7 (with finding 2 the student has been shown how to get the estimate). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s; feedback 2 about 29 s now, and finding 2 adds about 60 characters, so trim elsewhere in it to stay under 30 s (for example, drop "plotted at twenty, forty, sixty, eighty and a hundred", which the points show).

## Pace

About 399 s of speech before the notes, about 490 s in all. Scene 7 is the longest (700 characters, about 53 s) and finding 2 adds about 220 characters to it; still well under 570 s and one idea (the grouped median). Not rushed.

## Year 12 handoff check

Year 12 s01 builds distributions from relative frequency bars: scene 3 delivers the relative frequency histogram with heights adding to 1. Year 12 s04 uses a histogram with touching bars and a cumulative function from 0 to 1: scenes 6 and 7. Year 12 s06 reads the median at 0.5: scene 7's last sentence. Delivered.

## Site link

`probability-and-data/lesson15.sa.html` is linked (lesson07's box-plot errors S11-P03 to S11-P05 are avoided by not using quartiles). Correct.

No speech, source edits or commits were made.
