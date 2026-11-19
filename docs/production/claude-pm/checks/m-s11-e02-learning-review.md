# Maths S11 e02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e02.md`, "How do overtime and penalty rates change a pay packet?" Source SHA256 `ca32fa8e2e7e10bbd5f93ebfe216de79822f6852c3544631592a8b5a7516c411`.

Written design reviewed from its stated entry knowledge (e01: weekly pay = rate × hours) as a Year 11 Standard student. No built preview, playback or human listening is claimed; pace at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The rate blocks are the right picture: width hours, height rate, area pay, so "each block at its own rate, then add" is seen, and the flat ghost rectangle shows exactly what lumping loses. The stretching bar answers "the whole rate, not the extra half" before any sum. "12.5 ordinary hours" is a good self-check, and the allowance rule has a worked case with a reason ("it pays for a cost, not for time"). All rates are above $26.44. Recalculated with SymPy (`work/brief-review-s11-e/verify.py`): 28.60 × 1.25, 1.5, 2, 2.5 = 35.75, 42.90, 57.20, 71.50; award chip 34.76, 41.72, 62.57; Nina 1086.80 + 171.60 = 1258.40, ghost 1201.20; roster 457.60 + 214.50 + 357.50 = 1029.60, check 357.50; warehouse 1216 + 96 + 192 + 18 = 1522; A1 994.00 (slip 880.40); A2 1147.60 + 90.60 + 120.80 + 15.60 = 1374.60 (slip 1902.60). All correct.

## Findings

1. **Should fix, scenes 1 and 4 (the roster on screen is not the roster worked).** The hook's roster card (from e01) reads "Mon 5 h", "Sat 6 h", "Sun 5 h", "Public holiday 5 h", with Sun and public holiday ringed and tagged "× ?". Scene 4 then calls it "the shop's roster" and works 16 weekday hours, 6 Saturday hours and 5 public holiday hours, with no Sunday, while the card shows small at the top right. A student comparing the two asks "where did 16 hours come from, and what happened to Sunday?" Fix (with e01 finding 2): the card rows become "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h"; scene 1 tags the Sat and public holiday rows "× ?"; scene 4's roster then matches its task strip. Sunday is still practised in A1. Students should be able to follow one roster from question to answer.

2. **Should fix, scene 5 ("This week there are three more overtime hours").** After "time and a half for the first two overtime hours, and double time after that", "three more overtime hours" reads as three overtime hours in total (two at 1.5, one at 2), which gives $1,442, not $1,522. The task strip says "2 h at time-and-a-half, then 3 h at double time", so ear and eye disagree. Replace with: "This week there are five overtime hours, so two at time and a half and three at double time, and an eighteen dollar meal allowance." About 2 s. Students should hear the tier sizes they then see.

3. **Optional, scene 2 (percentages on the award chip).** The chip writes the award's multipliers as 125%, 150%, 225%, while the narration and board use 1.25 and 1.5, and pay guides and some exam items use percentages. Add one spoken clause after "sets the multipliers": "often written as percentages, so a hundred and twenty-five per cent means times one point two five." Shorten the chip to "Retail Award Level 1, from 1 July 2026: $27.81; Saturday 125% ($34.76); Sunday 150% ($41.72); public holiday 225% ($62.57)".

4. **Optional, scene 5 (the allowance cue).** "On 'meal allowance' (in the narration's last sentences)" is ambiguous: "meal allowance" is first said in the third sentence. Cue line 4 on "An allowance is a flat amount".

## Joins

e01 to e02: the shop front, sign and chips match; the roster rows need finding 1. e02 to e03: scene 11's frame (hatchback, "$14 990", the notice "Salesperson pay: $620 a week + 2.8% of sales", "paid for sales, not hours", "Next: commission", "?") is e03 scene 1's opening, and e03's first two sentences pick it up.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1's blank roster and A2's blank slip give nothing away. Feedback about 25 s and 28 s, each with the total and one crossed slip. The night fill, bookshop and takeaway shop are everyday anchors; no people drawn.

## Key notes and length

Five useful notes; the memory card is checked on a new case (10 h at $30 + 2 h at double time = $420). 0 em dashes. 5,130 characters, about 472 s with holds, 98 s under 570 s; the fixes add about 4 s.

No speech, design edits, builds or commits were made.
