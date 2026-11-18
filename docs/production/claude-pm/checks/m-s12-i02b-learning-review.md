# Maths S12 i02b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i02b.md`, "How do we work backwards to the starting amount or the rate?" Source SHA256 `48e37a0e53e6d564060bf5e16e96390970ba8682ecf3e42b29a18a8179d42cf4`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i02a: FV = PV(1 + r)ⁿ and the multiplier; Year 11 Standard f01: calculator powers) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

This is a well-built video. Present value comes from i02a's own ladder with its arrows flipped ("to go back a year, do the opposite"), the money walks back to $1,360.54 and forward again to exactly $1,500.00, and "it's less than the goal, because two years of interest make up the rest" is shown as a violet-plus-teal bar. The rate is reached the way a Standard student can think it: "how many times bigger", then "one multiplier, used three times", then trial (too small, very close) before the root key, so the root key arrives as the exact version of something the student has already done (ruling 33: no logarithms, no finding n). Subtracting 1 is said with its reason ("a hundred per cent plus r"), and every answer is checked by substituting back. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): 1500 ÷ 1.05 = $1,428.57; 1500 ÷ 1.05² = $1,360.54; check 1360.54 × 1.05² = 1,499.99535, so $1,500.00; interest $139.46; slip 1,653.75; 4500 ÷ 4000 = 1.125; 1.03³ = 1.092727, 1.04³ = 1.124864, 1.05³ = 1.157625; ∛1.125 = 1.0400419115, so 4.00%; 4000 × 1.04³ = 4,499.456; slip 4.17%; A1 $5,212.76 and slip 6,906.14; A2 ∛1.16 = 1.0507175745, so 5.07%, check 2,899.85, slip 5.33%. All correct.

## Findings

1. **Should fix, scene 5 and feedback 2 (the crossed slip has a label, not a reason).** "Dividing the twelve and a half per cent growth by three is the slip. That's a simple interest answer." A student who did exactly that will ask why it is wrong: 4.17% sounds reasonable, and "simple interest answer" names the error without showing it. This is the video's main misconception, so it needs its reason. Fix. Scene 5, after "simple interest answer": "Check it. Four point one seven per cent, compounded for three years, gives about four thousand five hundred and twenty-one dollars, too much, because the interest earns interest." Visual: under the crossed slip, a grey check row "4000 × 1.0417³ ≈ $4521 > $4500 ✗", hand tag "overshoots". Feedback 2 keeps its short form ("That's simple interest.") because scene 5 now carries the reason. Students should understand that compounding makes the yearly rate smaller than the total growth divided by the years, and that substituting back catches the slip. Time: about 8 s against a 103 s margin. (4000 × (1 + 0.125 ÷ 3)³ = $4,521.12.)

2. **Optional, scenes 4 and 5 ("times itself three times").** "Times itself three times" and "multiplied by itself three times" can be heard as four factors (1.03 × 1.03 × 1.03 × 1.03). Say "three of it multiplied together" in scene 4 and in the cube root's plain meaning in scene 5, matching the on-screen "× m → × m → × m".

3. **Optional, scene 5 (open decision 1, the root key).** Students will look for a key labelled "x√" and may not find it, since on the common school scientific calculators it is a second function. Keep the unbranded "x√" strip, and add one grey chip, 30 px: "often SHIFT, then the power key". Root can name one layout instead; either way the student needs to know where to look.

4. **Optional, scene 5 ("four point zero zero per cent").** The step from 0.04004 to a percentage is said but not shown as a step. Add the row "0.04004 × 100 = 4.004%" before the framed "≈ 4.00% p.a.", so A2's "correct to two decimal places" is clearly about the percentage.

## Joins

i02a to i02b matches: scene 1 opens on the phone, the two "?" rungs and the 5% chip, and fills the rungs first. i02b to i03 matches the decisions file: the grocery basket with "this week: $200", the empty five-rung ladder, the grey chip "prices go up by a percentage each year", and no inflation rate shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; the pictures (an empty ladder, "× ?" arrows) give nothing away. Feedback 1 (about 28 s) gives the division, the answer, why it is less than the goal and the crossed multiplication. Feedback 2 (about 30 s) gives the growth factor, the root, the rate, a check and the crossed slip; it is at the limit, so finding 1 adds nothing to it. The phone goal and an investment are fair, everyday anchors; "Rates change, so that's just an example" is said once, with sources as i02a's (ruling 32).

## Key notes and length

The five notes are short and useful; note 5 keeps the slip ("Not growth ÷ n (that's simple)"), which finding 1 now explains. About 467 s with holds, 103 s under the cap.

No speech, design edits, builds or commits were made.
