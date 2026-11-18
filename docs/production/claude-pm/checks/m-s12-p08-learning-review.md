# Maths S12 p08 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p08.md`, "How do the media, governments and companies use probability to make decisions?" Source SHA256 `34f11e8ab4d5f3515345c5426e157153fd2729682d11a414444959112223194f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p05: a survey percentage is a relative frequency; p06: np; Year 11 d03 and d10: samples and misleading displays; p01: the forecast) as a Mathematics Standard student starting Year 12, once arriving from p07 (Standard 2) and once from p06 (Standard 1, for whom this is the last Year 12 video). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

A strong close to the strand. Every claim is turned back into numbers before it is judged ("Four out of five of twenty-five volunteers is twenty"), the random and volunteer samples lit side by side show why a self-selected sample may not look like the town, and the slider makes "halved from what?" concrete (1 fewer or 20 fewer in 100 under the same headline). The council example's crossed slip ("500 is a decent size; how they were chosen matters more here") corrects the commonest weak answer. Every claim is invented and labelled, with no health, insurance or real company (ruling 69), the forecast is said only as a 20% chance (ruling 67), and the Standard 1 close says the course is complete without promising more videos (ruling 68). Recalculated with Python `fractions` (`work/brief-review-standard-p/verify.py`, `python -I`): 4/5 = 0.8, 20 of 25; 2% to 1% is a 50% relative fall and 1 percentage point; 40% to 20% is also 50% and 20 points; 360/500 = 0.72; 4000 × 0.03 = 120; 20% = 1/5; A1 doubled, a 100% relative increase, 10 points; A2 240/300 = 0.8; memory-aid case 1 to 4 sales, 300% and 3. All correct.

## Findings

1. **Should fix, scenes 2 to 7 ("Who paid?" is in the five questions but never taught).** The memory card and scene 7 ask "And who paid for it?", but scenes 2 to 6 light only "How many?", "How chosen?", "Relative or absolute?" and "Of whom?". A student meets the fifth question with no example, and the pack lists "ignoring who ran the study or why the claim is being made" as a trap. The advertisement is the natural place. Fix. Scene 2, after "These volunteers may not.": "And who ran the trial? The app's own maker, who wants you to buy it. That doesn't make the claim false, but it's a reason to look harder." Visual: the checklist's "Who paid?" lights amber "?" on "app's own maker". Students should be able to use all five questions, and see that "who paid" is a reason to check, not an accusation (the design's own assumption). Time: about 9 s.

2. **Optional, scene 4 (what a full "examine" answer looks like).** The pack warns against answers that give an opinion with no number. After the council example, add one hand tag, "a strong answer: the number, the sample, one specific problem", or the sentence "A strong answer quotes the percentage, says who was asked, and names one specific problem." About 5 s.

3. **Optional, scene 1 (the "Venn diagrams and tables: done" chip for Standard 1 viewers).** Standard 1 viewers arrive from p06 and briefly see a chip naming a video they skipped. Fade it before the narration starts, or have root word it "Standard 2: Venn diagrams and tables done" in section 7 of the decisions file.

4. **Optional, YouTube description ("Next: Standard 2, the normal distribution").** Quote z01's published title: "Next: Standard 2, The Normal Distribution: The Bell Curve."

## Joins

p07 to p08 (Standard 2) and p06 to p08 (Standard 1): scene 1 opens on p07's final frame, which is p06's right panel scaled evenly by 1.3, so both courses see the same advertisement. Nothing here needs p07. p08 to z01: scene 12 matches section 8 of the decisions file, and z01's Boundary and scene 1 open on it item for item (the loaf on the produce scale, "--- g", "Quality check: 200 loaves, labelled 700 g", 12 of 200 weighed, "what shape is this?"); z01 fades the right panel and grows the left. The Standard 1 close ("that's the last new topic in your Year 12 course. Well done. Every video is in the Year 12 Standard playlist") is warm, accurate and promises nothing further.

## Practice and feedback

Both cards keep the full worded question on screen, each with "(All figures invented ...)", through the countdown; the pictures (two empty 100-square grids; a poll card with the votes) give the data, not the answer. Feedback gives the answer, the reason, short working and one crossed slip ("absolute change: 100%"; "80% of all members want it"), about 29 s and 28 s, at the top of the brief range but not re-teaching.

## Key notes and length

Five useful notes; the five questions on the framed card are plain enough to recall in an exam answer. About 506 s with holds; finding 1 adds about 9 s (about 515 s), under 570 s. The named reserve trims cover finding 2 if it is taken. Root's question 4 ("Of whom?" for "Has the result been replicated?") is accepted by ruling 76 and works for learning: a student can check it from the claim itself.

No speech, design edits, builds or commits were made.
