# Maths S11 e03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e03.md`, "How does commission, including a sliding scale, pay for sales?" Source SHA256 `7499fff99bdebed621ddd14702f5ad81f65b75a3287dcdf5dbfaacc64d1767ac`.

Written design reviewed from its stated entry knowledge (Stage 5 percentages as decimals; e01 pay periods; e02 "blocks, then add") as a Year 11 Standard student. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The order is right: retainer as a floor that shows when sales are zero, then the decimal ("per cent means out of a hundred"), then the threshold as a slice that earns nothing, then the sliced bar. The ghost bar at the top rate overshooting by exactly the lower slices' overpayment is a strong picture, and the "$25 000 slice, not $40 000" trap is crossed where it happens. The e08 preview chip sets up tax brackets well. Recalculated with SymPy: 0.028 × 84 000 = 2352, pay 2972, slip 235 200; threshold 400, ghost 900; phone scale 400 + 1050 + 750 = 2200, ghost 3250, gap 1050 (= 0.03 × 20 000 + 0.015 × 30 000); furniture 450 + 1125 + 900 = 2475, ghost 3300; A1 400 + 900 + 520 = 1820, slip 2520; A2 723, slip 898. All correct.

## Findings

1. **Should fix, scene 4 ("so a bigger month never lowers the rate on the first slices").** The misconception a student holds is that a bigger total *raises* the rate on all of it (the ghost bar just showed that). "Never lowers" answers a worry nobody has, and the student asks "why would it lower?" This sentence also carries forward to e08 and e12's pay-rise myth, so it should state the true idea. Replace with: "Each rate only applies to its own slice, so moving into a higher slice never changes the rate on the dollars below **it**." (cue moves from "slices" to "it"). Students should be able to say why crossing a boundary only affects the dollars above it.

2. **Should fix, scene 4 opening ("This phone shop's scale is ...").** Scene 3 has just said the phone shop pays 5% above $10,000. "This phone shop's scale" gives the same shop a second, different scheme, and a student asks which one it pays. Replace with: "A second phone shop uses a sliding scale instead. It pays two per cent on the first twenty thousand dollars, ...", and tag the board "second shop". Students should treat each scheme as its own rule.

3. **Optional, scene 4 (the $1050 overshoot equals slice 2's $1050).** The bracket "$1050" over slices 1 and 2 matches slice 2's own label "$1050" by coincidence; a student may think the overshoot is slice 2's commission. Label the bracket "overpaid: $600 + $450 = $1050" (both values check: 0.03 × 20 000 and 0.015 × 30 000).

## Joins

e02 to e03: scene 1 opens on e02's final frame (hatchback, windscreen card, staff notice, chips) and its first sentence names the $620 and 2.8%. e03 to e04a: scene 11's frame (strawberry crate plate, "$2.35 a crate", "crates: 0", "paid per item") is e04a scene 1's opening.

## Practice and feedback

Both cards keep the full question on screen (A1's uncut bar and A2's empty stack give nothing away). Feedback about 28 s and 25 s, each with the answer, the slice or threshold step and one crossed slip. Target sales left out per ruling 94. Car yard, phone shop, furniture and sports stores are everyday anchors; no people drawn.

## Key notes and length

Five notes, the last ("slice size = upper boundary − lower boundary") the most useful for exams. The card "Slice it" returns in e08. 0 em dashes. 5,154 characters, about 474 s, 96 s under 570 s; the fixes add about 2 s.

No speech, design edits, builds or commits were made.
