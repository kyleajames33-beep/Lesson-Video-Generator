# Maths S11 e09 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e09.md`, "How does PAYG take tax out of each weekly, fortnightly or monthly pay?" Source SHA256 `dc144a5969cddad685972abac3c343a30de3da0196b6c0d9e77b73f114c755bf`.

Written design reviewed from its stated entry knowledge (e01 pay periods; e02 gross pay; e08 the year's tax) as a Year 11 Standard student. Every PAYG row is a known placeholder waiting for Codex (NAT 1005, 1006, 1007 from 1 July 2026; ruling 94) and is not graded; only the arithmetic built on them is. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 0 optional).

PAYG is introduced as "the same income tax, paid in small pieces", with the coin jar filling through the year, and "it isn't an extra tax" is said outright. The lookup rule is complete and each part has its reason: the table for the pay period, the row from gross pay in whole dollars ("tax is worked out on what you earn"), the column from the tick box. The second-job scene explains why the other column withholds more ("none of the second job's income is tax-free") and sets up e11's two-jobs debt. Recalculated with SymPy: 38 × 27.81 = 1056.78; 52 × 1056.78 = 54 952.56; tax from the table 7005.77; levy 1099.05; total 8104.82; graduate 62 400 ÷ 12 = 5200. Placeholder arithmetic as written: 900.78, 8112, difference 7.18, 65, 983, 5512, 5088. All correct.

## Findings

1. **Should fix, scene 6 ("The real tax on this year's pay, including the Medicare levy, comes to ...").** The $8104.82 is the tax from e08's table plus the levy, with no offsets; e08 said "tax payable here means the tax from this table". Calling it "the real tax" contradicts that. It also matters for the copied rows: if the ATO's 2026-27 rows allow for offsets, 52 × the $1056 row can fall below $8104.82 for a reason the video never teaches. Replace with: "The tax from the table on this year's pay, plus the Medicare levy, comes to eight thousand one hundred and four dollars eighty-two." Note for Codex when the rows are copied: compare like with like. If the copied $1056 row makes the year's withholding more than about $20 below or above $8104.82, rewrite the sentence to "close, but not exact" without a direction, or pick a gross pay whose row lands within a few dollars. Students should see withholding as an estimate settled later, not as a second tax figure that disagrees with e08.

## Joins

e08 to e09: scene 1 opens on e08's final frame exactly (slip, blank tax line, small table, chips). e09 to e10: scene 12's frame (the slip with "Tax withheld $156" and "Net pay $900.78", the stethoscope, the olive tag "Medicare levy: 2% of ?", "2% of what?") is e10's opening; both values follow the copied row.

## Practice and feedback

Both cards keep the full question and the table excerpt (both columns) on screen through the countdown. Feedback about 26 s and 21 s, each with the row, the column and one crossed slip ("no-threshold column", "24 × 212"). A retail slip, a graduate and two jobs are everyday anchors; no people drawn. No slip shows super (ruling 86).

## Key notes and length

Five notes, the threshold rule among them. 0 em dashes. 4,857 characters, about 451 s, 119 s under 570 s. Not voiceable until the ATO rows are copied (ruling 94).

No speech, design edits, builds or commits were made.
