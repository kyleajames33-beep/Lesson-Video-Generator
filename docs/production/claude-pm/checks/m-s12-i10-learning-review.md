# Maths S12 i10 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i10.md`, "How does declining-balance depreciation work, and why does it look like compound interest?" Source SHA256 `0b8c4780df53869907894a9e7afe02cd2d5015db9022349f24f829137433d8ab`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i09: V₀, S, n, total depreciation; i02a: FV = PV(1 + r)ⁿ; a05: a decay curve) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike, including a viewer who opens this video without having just watched i09. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The central teaching is strong. The hook gives the reason for the method ("A ute loses the most value when it's new ... so it makes more sense to take the same percentage of whatever it's worth now"), "keeps a hundred per cent minus twenty-two per cent" comes before 0.78 with a kept-and-lost bar, and the 1.22 slip is crossed with its reason ("That would make the ute grow in value"). Scene 4 explains why the losses shrink ("each one is twenty-two per cent of a smaller value") and why the model never reaches zero ("Seventy-eight per cent of something is never zero"), and keeps the model honest ("A real ute, of course, gets sold or scrapped"). The formula twin gives Standard 1 students the words for `cid65c76c0`: alike in shape and calculator steps, different in + and −, with growing against shrinking changes shown on round numbers. Open decisions: leaving `we-4` out is right (ruling 33's spirit); the ute is the right anchor for `we-2`. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): $30,030, $23,423.40, $18,270.25, and $3,209.27 at 10 years; losses $8,470, $6,606.60, $5,153.15, which sum to the total $20,229.75; slips 25,410 and 69,910.15; the twin 12,000, 14,400, 17,280 and 8,000, 6,400, 5,120; A1 $23,552, $22,448, slip $27,600; A2 $6,612.50 and $3,612.50. All correct.

## Findings

1. **Should fix, scene 3 ("V nought" without its meaning, ruling 36).** "So the formula is S equals V nought times one minus r, to the power of n." Ruling 36 asks for "V nought, the starting value" at first use, and this is the first use in this video; a student who watched i09 some days earlier, or who arrives from a search, hears an unexplained symbol. Fix. Narration: "S equals V nought, the starting value, times one minus r, to the power of n." The formula strip's V₀ drops a 36 px tag "V₀: the starting value" alongside the existing "1 − r: the part kept". About 2 s.

2. **Optional, scene 3 (the r × n × V₀ slip has no reason yet).** "Taking twenty-two per cent, times three, of the price is the slip." The reason (after the first year, 22% is taken of a smaller value) only arrives in scene 4. Add "because after the first year, it's twenty-two per cent of a smaller value", so the crossed slip carries its reason where it appears.

3. **Optional, attempt 2 (a 15% investment).** "Five thousand dollars is invested at fifteen per cent a year compound interest" is far above any savings or deposit rate in November 2026, and the model answer admits it was chosen so the values separate. Use 8% instead: $5,832.00 and $4,232.00, still clearly apart; or label the card "(an example rate)". The similarity and difference are unchanged.

## Joins

i09 to i10 matches: scene 1 opens on the ute with "new: $38,500" and answers i09's grey chip ("a percentage of what it's worth now"). i10 to i11 matches the decisions file: the delivery van with "$40,000", the blue "straight-line: $6,000 a year" and olive "declining balance: 20% a year" chips, "which loses value faster?", and no values after year 0.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's empty "× ?" ladder and A2's empty axes give nothing away. Feedback 1 (about 28 s) says "keeps eighty per cent", gives the value and total, and crosses r × n × V₀; feedback 2 (about 29 s) gives both values, one similarity, one difference, and crosses 1.15 for the machine. A ute, a food truck and a machine are real, fair anchors; the ATO's diminishing value method is cited in the design, and "the rules and rates change" is said once.

## Key notes and length

The five notes are short and useful; notes 2 and 3 carry both crossed slips with their corrections. About 465 s with holds, 105 s under the cap.

No speech, design edits, builds or commits were made.
