# Maths S12 i09 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i09.md`, "How does straight-line depreciation work?" Source SHA256 `8aec126f092be483a24a2e40fd9ad009233fb43998e2f5aaff2c3d03323caaa1`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i01: equal steps make a straight line; Year 11 Standard l03: a negative gradient) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 2 optional).

This is a good design. Depreciation and asset get their plain meanings in the hook, the value bar loses five equal $540 chunks into a pile before any letter appears, and S = V₀ − Dn is then read as "the starting value, V nought, minus D for each of the n years", which meets ruling 36. The total depreciation is shown two ways at once (the pile, D × n, and the bracket on the bar, V₀ − S), "simple interest in reverse" uses i01's line as a mirrored ghost, and "a value can't go below nothing, so the model stops there" and "the tools might sell for more, or less" keep the model honest. The "first below" route is plain arithmetic for Standard 1 (ruling 30): the drop needed, divided by D, rounded up, then checked on both sides, with the inequality grey and unspoken; finding D is "thirty-two thousand dollars, in eight equal steps". Open decision 1: "V nought" with "the starting value" is right (ruling 36). Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): the tools 6,200, 5,660, 5,120, 4,580, 4,040, 3,500 (2,960 at year 6), total 2,700, zero at 11.48 years, slip 8,900; the excavator $40,600, drop 55,000, 7.43, $33,200 after 7 and $25,800 after 8; D = $4,000 with check 18,000; A1 $7,100, 9,500, 5.14, $5,250 and $3,400, so 6 years; A2 $600, $1,200, slip $3,600. All correct.

## Findings

1. **Optional, scene 5 ("So seven years isn't enough").** The conclusion comes one sentence before its reason. Say "Seven drops only take off fifty-one thousand eight hundred, so seven years isn't enough", which also shows why 7.43 rounds up rather than down. (7 × 7,400 = 51,800.)

2. **Optional, key note 4 (an exact division).** "Divide the drop by D, round up, check both sides" works for 7.43, but if the division comes out exact (say a drop of $51,800 at $7,400, exactly 7), the value after 7 years equals the level and is not yet below it, so the answer is 8. The "check both sides" step catches it; feedback 1 or the key note could add "if it lands exactly on the level, one more year".

## Joins

i08 to i09 matches: scene 1 opens on the tool box with "new tools: $6,200", the empty axes and "worth less each year?". i09 to i10 matches the decisions file: the ute with "new: $38,500", empty axes, the grey chip "the same dollars every year, or a percentage of what it's worth now?", and no rate. The hook asks this question and answers only its straight-line half, so i10's opening is earned.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's dashed $5,000 level and A2's empty axes give nothing away. Feedback 1 (about 30 s) gives the value, the drop, the division, both checks and the crossed "5 years"; feedback 2 (about 24 s) gives D, the value and the crossed addition. Tools, a landscaper's excavator, a carpet-cleaning machine and a sewing machine are real, fair business assets; the ATO's use of straight-line is cited in the design, and "the rules and prices change" is said once.

## Key notes and length

The five notes are short and useful, and the memory card's key line keeps the stop at $0. About 478 s with holds, 92 s under the cap.

No speech, design edits, builds or commits were made.
