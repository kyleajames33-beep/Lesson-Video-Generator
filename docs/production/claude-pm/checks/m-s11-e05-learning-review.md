# Maths S11 e05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e05.md`, "What is leave loading, and how much extra does it pay?" Source SHA256 `001d1ea053eff40197cafe3582b317c5beeffea349d4a0da270f817ddcd3aeda`.

Written design reviewed from its stated entry knowledge (Stage 5 percentage of an amount; e01 weekly pay; e02 ordinary pay separate from overtime) as a Year 11 Standard student. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

The thirteen-times trap is the right misconception scene: the year bar splitting into 13 copies of the leave bar shows the cause in one look. The mechanic fills the site's two gaps (overtime is not eligible normal pay; the leave need not be four weeks), and the pay-slip filter greying the overtime line is a clear picture of "eligible". The memory card drops the site's hard-coded "4 weeks", which A1 then tests. Recalculated with SymPy: 4 × 1240 = 4960, × 0.175 = 868, total 5828; year 64 480, × 0.175 = 11 284 = 13 × 868; mechanic 1140 × 3 = 3420, loading 598.50, total 4018.50, slip (1140 + 180) × 3 × 0.175 = 693; retail 4227.12, loading 739.75, casual 34.76; A1 3355.20, 587.16, 3942.36, slip 782.88; A2 1200.80, 4803.20, 840.56, 5643.76, slip 1039.64. All correct.

## Findings

1. **Should fix, scene 4 (the crossed slip lands on the wrong sentence).** The red slip "(1140 + 180) × 3 × 0.175 = $693.00" (caption "loading is on normal pay only") is cued on "Notice it's three weeks, not four", so the student hears about weeks while watching an overtime slip crossed. Move the slip's cue to "The overtime is left **out**." (make "out" the bold cue), and on "Notice it's three weeks" show only the hand tag "3 weeks, not 4" beside "3 × 1140". Students should link each spoken rule to the mistake it prevents.

2. **Optional, scene 5 (the casual contrast ends on a number, not the point).** The last figures ($739.75 of loading) leave the student asking what to conclude. Replace "On thirty-eight hours, the permanent worker's four weeks of leave come with a loading of seven hundred and thirty-nine dollars seventy-five, on top of the leave **pay**." with "So the casual earns more each hour, but gets nothing for weeks off. That extra twenty-five per cent is paid instead of leave, while the permanent worker is paid for four weeks off, plus the **loading**." Keep the 4227.12 and 739.75 row on screen. About the same length.

## Joins

e04b to e05: scene 1 opens on e04b's final frame (suitcase, "4 weeks" tag, the calendar's four circled week rows, chips). e05 to e06: scene 11's frame (wheelbarrow "garden centre: weekly pay", the blank grid headed "A: role", "B: rate", "C: hours", "D: overtime hours", "E: pay") is e06's opening. Its chip "one formula, every worker" needs a small change; see `m-s11-e06-learning-review.md` finding 1.

## Practice and feedback

Both cards keep the full question on screen (A1's calendar shows three circled weeks, which matches the question; A2's slip is blank). Feedback about 25 s and 27 s, each with one crossed slip. A road trip, a kitchen hand and a mechanic are everyday anchors; no people drawn.

## Key notes and length

Five notes; the casual note is useful for students who are casuals. The card is checked on a new case ($900 a week for 2 weeks: $2,115). 0 em dashes. 4,868 characters, about 450 s, 120 s under 570 s.

No speech, design edits, builds or commits were made.
