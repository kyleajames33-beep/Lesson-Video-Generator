# Maths S12 i01 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i01.md`, "How does simple interest grow, and what does its graph look like?" Source SHA256 `f9896abf839bc1ed06be4e3a8229287dcae54a7d77d6449705a3bcef75c451d8`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Standard m01, f01, l03: a percentage as a decimal, substitution, a linear model's gradient and intercept) as a Mathematics Standard student starting Year 12, arriving from a13 (Standard 2) and again from a08 (Standard 1). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

This is a good opening to the money strand. "Paid out into a jar" makes the equal interest obvious before any formula: the balance bar visibly stays at $5,000 while three equal $200 stacks drop into the jar, so "the interest never earns interest itself" is seen, not just said. Every term gets its plain meaning first (interest, principal, simple interest, p.a., gradient), the rate goes in as a decimal with the reason ("per cent means out of a hundred"), r and n are matched by an example, and the stacks becoming points on the axes is a real visual answer to a13's "what shape?". Finding the principal by "one year first" keeps the Standard 1 route free of rearranging (ruling 30), with the rearranged formula grey and unspoken. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): 4% of 5,000 = 200; totals 5,000 to 6,000 at n = 0 to 5; I(3) = 600; the 6% line 5,000, 5,300, 5,600, 5,900; 8,000 at 4%: 8,000, 8,320, 8,640, 8,960; slider gradients 100, 200, 300, 400 (5-year totals 5,500 to 7,000); `we-1` 3,000, $11,000 and the slip 300,000; `we-2` 150, 3,000, check 450, grey row 450 ÷ 0.15 = 3,000; A1 $567, $5,067 and the slip 56,700; A2 $2,400, $2,640, gradient 160. All correct.

## Findings

1. **Should fix, scene 5 (why divide by 0.05).** "And that hundred and fifty is five per cent of the principal. So the principal is a hundred and fifty divided by zero point zero five." A Standard 1 student who has only ever multiplied by a percentage will ask why it is now a division; the "So" skips the reason, and it is the one step this video's Standard 1 route depends on. Fix. Narration, after "five per cent of the principal": "If five per cent is a hundred and fifty, then one per cent is thirty, and a hundred per cent, the whole principal, is three thousand dollars. That's the same as a hundred and fifty divided by zero point zero five." Visual: two rows before the framed answer, 44 px: "5% of P = $150", "1% of P = 150 ÷ 5 = $30", "100% of P = 30 × 100 = $3000" (framed green), with the existing division row moved beside it in ink "150 ÷ 0.05 = 3000", hand tag "same answer". Students should understand that dividing by the rate undoes "r of P", rather than learn it as a rule. Time: about 7 s against a 32 s margin; the named reserve trim (scene 5's last sentence) covers it if needed.

2. **Should fix, scenes 2, 6 and 7 (the steps and slopes will be too small to see).** The design rightly starts the money axis at $0 so the $5,000 intercept is honest, but on a 700 px axis running to $7,000 each $200 step is about 20 px, so the scene's surprise (the stack tops "line up in a straight line") happens in a band the height of one line of text. In scene 7, on $0 to $10,000 over 5 years, the 4%, 6% and $8,000 lines rise about 70, 105 and 112 px, so "steeper" and "steeper too" are hard to tell apart on a phone; the same applies to the $200 stacks on scene 2's 600 px bar (about 24 px each). Fix. Scene 2: draw each stack with its "$200" label beside it at 36 px, not inside it. Scene 6: after "not at zero", a zoom inset (as a01's) of t = 0 to 3, $4,800 to $5,800, labelled "zoomed in", where the four points and the "+$200" step triangle are drawn large; the full $0 axis stays behind it. Scene 7: run the comparison window to 10 years (ends $7,000, $8,000 and $11,200 on a $0 to $12,000 axis), so the three rises are about 117, 175 and 187 px, and keep the dot's run at t = 3 to 5 as written. Students should be able to see the straight line and which line is steeper without reading the step labels.

3. **Optional, scene 3 (the "per period" tags).** The letters drop tags "rate per period" and "number of periods" while the narration says only "per year" and "number of years". Say "the rate per period, here per year" on "rate, r", so the key notes' "same each period" is not a new word.

4. **Optional, scene 4 (open decision 2).** The reused plate is a pair of studio monitors, which reads as studio gear rather than a band's PA. Say "new studio speakers" in the task strip and narration; nothing else changes.

## Joins

a13 to i01 (Standard 2) matches: a13's final frame (the jar badge, empty "balance ($)" and "years" axes, the grey chip "the same amount added each year: what shape?") is i01's opening frame, and a08's right panel carries the same jar, axes and chip, so "Last time ended with a coin jar" is true for both routes. i01 to i02a matches the decisions file's join: the jar tips $200 back, the bar reads "$5,200?", and no second-year interest is shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture shows an answer (A2's axes are empty). Feedback 1 (about 28 s) gives the decimal reason, short working, the total and the crossed 4.2 slip. Feedback 2 (about 27 s) gives both values, the steeper line, what the gradient means, and crosses "B's line starts higher". A gap-year fund, a band's loan and savings are fair, everyday anchors; the rates are labelled examples, "Rates change all the time" is said once, and the RBA and money.com.au sources are dated in the design (ruling 32).

## Key notes and length

The five notes are useful and one line each; note 4 ("one period's interest ÷ r") matches the Standard 1 route. The memory card's assumptions (total, not I; rate per period) hold. About 538 s with holds, 32 s under the 570 s cap; finding 1 uses about 7 s.

No speech, design edits, builds or commits were made.
