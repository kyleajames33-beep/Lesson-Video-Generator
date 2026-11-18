# Maths S12 i03 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i03.md`, "How do inflation and appreciation use the compound interest formula?" Source SHA256 `58f1c7621f847eeca2a9d599a44aa551d8262101d4eb80fd96ba59da394f63aa`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i02a and i02b: FV = PV(1 + r)ⁿ forwards and backwards) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike, and onward through both routes of the final frame. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

This is a good contexts video. "Prices rise on last year's prices, just like interest on interest" carries the whole idea in one sentence, the basket's price tag rewriting up the ladder makes it concrete, and "the formula from before ... the price today is PV" keeps one formula with new words (the memory card says exactly that). The estimate caveat is one calm sentence, the CPI figure has its plain meaning and a dated ABS source chip (ruling 32; ruling 35 rechecks it at build), and "more dollars, fewer baskets" is a real visual surprise (5 shops now, 4.93 in five years). Appreciation is named with "an assumption, not a forecast" and "values can fall". The two-route ending speaks to each course by name (ruling 38). Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): the shop ladder $208.60, $217.57, $226.93, $236.68, $246.86 (246.8604622); rises 8.60, 8.97, 9.36, 9.76, 10.18; add-on $243; 200 ÷ 1.03⁴ = $177.70, slip $177.06, 1.03 × 0.97 = 0.9991; $1,216.65, 4.93 and 5 shops; the unit $682,500, $716,625, $752,456.25; A1 $51.64, $6.64, slip $51.30; A2 $3,211.74, $2,782.26, slip 12,720. All correct.

## Findings

1. **Should fix, scene 4 (why not take 3% off).** "Multiplying by zero point nine seven instead is the slip. It looks similar, but one point zero three times zero point nine seven isn't one, so it doesn't undo the rise." The reason is correct but abstract, and the two answers differ by only 64 cents, so a Standard student is likely to think "close enough". The plain reason is that last year's 3% rise was 3% of last year's smaller price. Fix. Narration, replacing the last sentence: "It looks similar, but last year's rise was three per cent of last year's price, which was smaller. Taking three per cent of today's price takes off too much. Check one year: a hundred and ninety-four dollars, times one point zero three, is a hundred and ninety-nine dollars and eighty-two cents, not two hundred." Visual: keep the grey row "1.03 × 0.97 = 0.9991", and add a one-year check row "200 × 0.97 = 194 → 194 × 1.03 = 199.82 ✗", beside "200 ÷ 1.03 = 194.17 → 194.17 × 1.03 = 200 ✓", hand tag "check forwards". Students should understand why dividing is the undo, using the same "check forwards" habit as i02b. Time: about 10 s against an 85 s margin.

2. **Should fix, scene 3 (the growing blocks will look equal).** The comparison's point is that the amber blocks grow ($8.60, $8.97, $9.36, $9.76, $10.18) while the grey blocks stay at $8.60. Stacked on a bar from $200 to about $247, each block is about the same height and the growth from one to the next is a few pixels; the totals differ by $3.86. Fix. Draw the yearly rises as two rows of side-by-side columns above a dashed "$8.60" line, labelled "each year's rise, zoomed in", at about 20 px a dollar (grey columns all 172 px; amber columns 172, 179, 187, 195 and 204 px), with each amber column's part above the dashed line ringed on "compound", hand tag "% of the new price". Keep the two totals ($243 and $246.86) as labels. Students should see each rise getting bigger, which is the reason prices compound.

3. **Optional, attempt 2 (the guitar).** A generic second-hand electric guitar usually loses value, so "expected to appreciate at 6%" may teach that guitars gain value. Make it "a vintage electric guitar" on the card and in the narration; the grey chip "an estimate: second-hand prices can fall" stays.

4. **Optional, scene 6 ("asset").** The memory card and key line say "an asset's value rises", but "asset" is never said with its meaning. Say "Something you own that has value is called an asset. When an asset grows in value, that's called appreciation."

## Joins

i02b to i03 matches: the basket with "this week: $200", the empty five-rung ladder and the grey chip, with the ladder filled in scene 2. The two-route final frame matches the decisions file (salon chair and three amber chips for Standard 2; the coffee cart and the "paid out" and "left in" cards for Standard 1), and the narration names each course before its panel appears, so neither group needs the other's video (ruling 30).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A2 asks three things in 10 s, which "Pause here to answer." covers. The pictures (a "$45 now" tag and empty ladders) give nothing away. Feedback 1 (about 24 s) and feedback 2 (about 27 s) give the answers, a short reason ("six per cent beats three") and one crossed slip each. The weekly shop, a haircut, savings and an investment unit are real, fair anchors; the ABS figure is the only real rate, and every other rate is labelled an assumption.

## Key notes and length

The five notes are short and useful; note 3 ("not × (1 − r)ⁿ") is what finding 1 explains. About 485 s with holds, 85 s under the cap, so findings 1 and 2 fit.

No speech, design edits, builds or commits were made.
