# Maths S12 a08 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a08.md`, "How do we sketch a graph that tells the story of a real situation?" Source SHA256 `ba376514689afdbaf3e35a263c3e8078ac05e55e1468527ce0cf4031f96a9592`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a07; Year 11 gradient as a rate and "steeper means faster") as a Mathematics Standard 1 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This works as the Standard 1-only video. The phone's data month gives a non-zero start, a steady fall, a flat piece and a steeper fall in one familiar story, and the story builder draws each piece as its sentence lights, so the graph is caused by the story rather than shown finished. The meter freezing at 30 GB while the day counter runs is a good visual surprise for "flat means no change". The hot chocolate gives curved pieces without an equation, and the petrol tank matching scene teaches "check the order of the pieces" before attempt 2 needs it. Recalculated: 40 − 10 = 30; 30 − 2(d − 15) = 0 at d = 30; 5 GB and 10 GB in 5 days; bakery 120 − 80 = 40, then 40 ÷ 2 = 20 an hour; van 1 + 0.5 + 1 = 2.5 h. All correct.

## Findings

1. **Should fix, scene 2 ("A trip up a hill isn't drawn as a hill").** The narration names no quantity. If the quantity is height, a trip over a hill really is drawn hill-shaped, so the sentence is false as heard; the label "speed going uphill?" is on screen only. A student will ask "a graph of what?". Fix. Narration: "One more thing. A sketch is a graph of the quantity, not a picture of the place. A bike's speed slows going up a hill and picks up coming down, so its speed graph dips, even though the hill bumps up." Visual: beside the crossed hill-shaped sketch (now labelled "speed"), draw the correct dip (speed falls, then rises) with the tag "graph, not a picture". Students should understand that the shape comes from how the named quantity changes. About 80 characters more; scene 2's listed reserve trim is no longer needed for length.

2. **Should fix, scene 4 (the narration and the steepness race compare different things).** The narration compares "ten gigabytes over ten days" with "ten gigabytes in just five days", but the race shows equal 5-day windows with drops of "5 GB" and "10 GB". The student hears one comparison and sees another at the same moment. Fix: "Look at the two sloping pieces over the same five days. The first drops five gigabytes. The last drops ten, so it's **steeper**. Same time, twice the drop. Using two a day is twice as fast as using one a day, so that piece falls twice as steeply." The race then proves "twice as steep" while it is said.

3. **Optional, scene 5 (the cooling readout).** The readout ends at "22" at 30 min, but author note (b)'s curve gives 21.4 there. Either end the readout at "21" or say "about 21" in the note. No narration change.

Root ruling 24: the description still carries "Standard 1 (cice949e38)". Drop the codename.

## Standard 1-only video and ruling 9

The video stands on Standard 1 entry knowledge alone (a07's flat fare cap, Year 11 gradient), teaches `cice949e38` from the syllabus (no site lesson, ruling 3), and routes Standard 1 viewers to i01 three times: the narration ("If you're doing Standard 1, your next video is simple interest"), the right panel of the final frame ("Standard 1 next: simple interest") and the description. Standard 2 viewers are told quadratics come next. Ruling 9 is applied.

## Joins

a07 to a08 matches (the fare-cap frame and its grey Standard 2 chip; a08's first sentence picks up "the total went flat"). a08 to a09: the two-route frame's left panel (the footbridge, "?" at the lowest point, "Standard 2 next: what shape is this cable?") is a09's opening frame, and a09 fades the right panel on its first sentence (ruling 20). The right panel's coin jar, empty "balance ($)"/"years" axes and grey chip "the same amount added each year: what shape?" match a13's final frame word for word, so i01 can open on either.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is an unlabelled empty grid; A2's three sketches are unhighlighted until feedback; nothing is answer-bearing. Each feedback gives the answer, the reasons piece by piece and one crossed classic mistake (a steeper last piece; graph B). Feedback 1 about 28 s, feedback 2 about 26 s.

## Length

5,609 characters (recounted by script), about 509 s with holds, about 416 s of speech before the notes. Finding 1 adds about 80 characters. Under 570 s without rushing.

No speech, source edits or commits were made.
