# Maths S11 E07: How do allowable deductions turn income into taxable income? The financial year, gross income (wages plus interest), the three tests for an allowable deduction, what is not allowed, taxable income = gross income − allowable deductions, and working backwards (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32 and 85 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,020 characters by script (see "Narration length estimate"), 12 scene headings, about 464 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighth video of the Year 11 Earning money strand and the first of its "Taxation" group, outline playlist order 22. One video for Standard 1 and Standard 2. Viewers arrive from e06's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e07.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson07.sa.html` (SHA256 `7d3d53ce2e0ad96f2440b5cb996d22f6bc8336f3a9e5be6496d6956284afedd0`; the hook's boots, course and donation; card 05, "Taxable income is gross income minus allowable deductions" and "PAYG tax withheld is NOT an allowable deduction"; `we-1`, Sophie, a teacher, $89,400 + $640, allowable $1,050, taxable $88,990; `we-3`, Anika, working backwards, $3,730). Route entry: `math-s11-e07` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the boots plate (briefed in e06), the book stack, travel card and tool belt reused; receipts, trays, income stack and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents (receipts are coded, unbranded); no people; one question; one stage at a time; words before symbols; plain meanings (financial year, gross income, allowable deduction, ATO, taxable income, registered charity); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (safety boots, a teacher's year, a carpenter's receipts); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; tax rules said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Taxation", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `ci1e53d540`: "Determine taxable income by examining allowable deductions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e06's final frame exactly (the boots `ms11-steel-cap-boots-v1.png` on the receipt "Steel-capped work boots $189.00"; the grey chip "Ways of earning: done"; chips "does this cut my tax?", "Next: taxable income", "?"). Recalls e01 (a year's income) in a grey chip. Teaches: the financial year (1 July to 30 June); gross income as wages or salary plus other income such as bank interest; an allowable deduction as a cost of earning your income that the ATO lets you subtract, with three plain tests (you spent it and were not paid back; it is for earning this income; you have a record); allowable: protective clothing and footwear, a compulsory uniform, union fees, work-related study for the current job, gifts of $2 or more to a registered charity; not allowable: ordinary clothing even if worn only at work, travel between home and work, and tax already withheld; taxable income = gross income − allowable deductions; working backwards for the deductions. Stops at taxable income. Not taught: tax payable (e08); car expenses, working-from-home rates and the $300 no-receipt rule (pack: beyond the point and often changed).

## Decisions

- **Anchor: steel-capped boots (painted plate, briefed in e06).** The site's hook ("$800 on work boots") becomes $189 steel-capped boots (MS-75: protective boots, at a realistic price). They pass all three tests and open the sort. No people.
- **Worked examples: the site's `we-1` and `we-3`.** Sophie, a teacher (`we-1`): $89,400 + $640 = $90,040; allowable $480 (textbooks and classroom resources), $320 (a professional development course for her teaching: the "related to your current job" condition, MS-75), $250 (registered charity) = $1,050; not allowable $180 (conventional work wardrobe) and $860 (train travel to school); taxable $88,990. Anika (`we-3`): $64,800 + $380 − $61,450 = $3,730. Both kept unchanged (no 2024-25 dependence).
- **The sort.** Six items, no amounts, each with its reason tag: steel-capped boots (yes: protective), plain black pants (no: ordinary clothing), bus fares from home to work (no: getting to work), union fees (yes), a $2-or-more gift to a registered charity (yes), tax already withheld (no: already paid). The attempts apply the same rules with amounts.
- **Notation.** "taxable income = gross income − allowable deductions" in words.
- **Join.** Scene 1 opens on e06's final frame exactly; the receipt becomes the first card in scene 3's sort.
- **Simulations (standard item 3).**
  1. **Income stack** (scene 2; `StackedTotalBar`): a salary block and a thin interest block stack into a "gross income" bar; a "forgot the interest" ghost bar sits lower, crossed in grey.
  2. **Receipt sorter** (scenes 3, 4; `OutcomeSort` with new `ReceiptCard`): receipts slide in one at a time and drop into "allowable" or "not allowable" trays, each with a one-line reason tag; the allowable tray totals itself.
  3. **Cut off the top** (scene 4): the allowable total is cut off the top of the gross bar, leaving the taxable income bar.
  4. **The gap** (scene 5): gross and taxable bars side by side, the gap between their tops labelled "deductions = ?", then filled.
- **Colour roles (fixed for e07 to e12).** Gross income **teal**; allowable deductions **violet**; taxable income **blue**; tax **amber**; Medicare levy **olive**; PAYG withheld **brown**; answer **green**; mistake **red**, crossed slips only; not-allowable items grey.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; receipts 36 px; nothing below 26 px; all text above y = 950. Hand tags: "1 July to 30 June", "include interest", "you paid", "for this income", "a record", "protective", "ordinary clothing", "getting to work", "already paid", "gross − allowable", "the gap = deductions". At most two live at once.
- **Stage changes (standard item 2).** The boots on the receipt (1); the income stack (2); the receipt sorter (3); g01 board, the teacher, with the bar cut (4); the gap (5); framed card (6); question cards (7 to 10); the tax table for e08 (11); key notes (12).
- **Worked examples (g01 layout).** 4: task strip "A teacher earns a salary of $89 400 and $640 interest. She spent $480 on textbooks and classroom resources, $320 on a professional development course for her teaching, $180 on everyday work clothes, $250 on a donation to a registered charity and $860 on train fares to school. Find her taxable income." (site `we-1`); formula strip "taxable income = gross income − allowable deductions"; givens card grouped "income" (teal) and "spent" (receipts); framed answer "$88 990"; the not-allowable receipts greyed. 5: task strip "Anika earned $64 800 salary and $380 interest. Her taxable income was $61 450. Find her allowable deductions." (site `we-3`); framed answer "$3730".
- **Memory aid.** Framed card: "Taxable = gross − allowable." Key line: "Gross: everything, including interest. Allowable: you paid it, for earning this income, with a record."
- **Visual surprise.** Plain black pants worn only to work drop into the "not allowable" tray beside steel-capped boots that drop into "allowable": both are worn at work, and only the test sorts them (scene 3).
- **Site notes (pack section 8).** MS-75: the hook's boots and course need their conditions; the video says "steel-capped" and "a course for her teaching". No arithmetic error in lesson07.
- **Plain meanings at first use.** Financial year ("1 July to 30 June"); gross income ("everything you earned in the year, before anything comes off"); allowable deduction ("a cost of earning your income that the tax office lets you take off"); ATO ("the Australian Taxation Office"); taxable income ("what's left after the allowable deductions; tax is worked out on this"); registered charity ("a charity the ATO lists, so gifts of $2 or more can be deducted").
- **Attempts.** A1 (pack question 1, no year stated in the card, as the rules are the point): Taylor, a carpenter, $56,300 + $185; boots $189, union $364, plain pants $79, charity $40, bus fares $1,040: allowable $593, taxable $55,892; crossed "56 485 − 1712 = $54 773" (caption "plain clothes and home-to-work travel are not allowed"). A2 (pack question 2): Ravi, taxable $47,260, wages $48,900, interest $76: deductions $1,716; crossed "48 900 − 47 260 = $1640" (caption "gross includes the interest").
- **Mistake scene:** none separate. Interest left out of gross (2, ghost; A2 crossed); ordinary clothing and home-to-work travel claimed (3, 4; A1 crossed); tax withheld treated as a deduction (3, said).
- **Cause chain taught, in order:** (1) tax is worked out for a financial year on taxable income, not on everything earned (1, 2); (2) gross income is all income, so interest counts too (2); (3) a deduction must be a cost you paid for earning this income, with a record, so protective gear passes and ordinary clothing and getting to work do not (3); (4) tax already withheld is not a cost of earning income; it is tax paid (3); (5) taxable income is what is left after the allowable deductions (4); (6) the deductions are the gap between gross and taxable (5).
- **Entry knowledge (route):** math-s11-e01 (a year's income). Recalled in a grey chip.
- **Money sources (rulings 5 and 32).** The three tests and the clothing, travel and gift rules from the ATO: "Deductions you can claim" (https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim), "Clothing, laundry and dry-cleaning expenses" and "Gifts and donations" (URLs in the pack, found by search 19 Nov 2026, not opened; Codex reads and dates each before narration). Said once (scene 3): "Tax rules change each year, so a question will tell you what's allowed."
- **Handoff (to math-s11-e08, "How does a tax table give the tax payable on a year of income?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: at the left the teacher's card "taxable income: $88 990" (blue, 520 × 200 px); at the right a blank coded resident tax table (900 × 520 px) headed "Resident tax rates 2026-27", five empty rows with their outlines only; chips "which row?", "Next: tax tables" and "?". No rates or values in the table. This is e08's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Sophie: 89 400 + 640 = 90 040; 480 + 320 + 250 = 1050; 90 040 − 1050 = 88 990; not allowed 180 + 860.
  (b) Ghost (scene 2): 89 400 without the interest.
  (c) Anika: 64 800 + 380 = 65 180; 65 180 − 61 450 = 3730.
  (d) A1: 56 300 + 185 = 56 485; 189 + 364 + 40 = 593; 56 485 − 593 = 55 892; slip 189 + 364 + 79 + 40 + 1040 = 1712; 56 485 − 1712 = 54 773.
  (e) A2: 48 900 + 76 = 48 976; 48 976 − 47 260 = 1716; slip 48 900 − 47 260 = 1640.
  (f) Pronunciations: "ninety thousand and forty dollars"; "eighty-eight thousand nine hundred and ninety dollars"; "the A T O".

Main question: *Steel-capped boots for work cost $189. Does buying them cut your tax? How do allowable deductions turn income into taxable income?*
Entry knowledge (math-s11-e01): a year's income.
Stops after: gross income, allowable deductions, taxable income, working backwards. No tax payable.
Handoff: math-s11-e08: "which row?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): gross income teal; allowable deductions violet; taxable income blue; tax amber; answer green; mistake red; not-allowable grey. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: do the boots cut your tax?
> Last time ended with a pair of steel-capped boots, a hundred and eighty-nine dollars, needed for work. Does buying them cut your tax? Tax isn't worked out on everything you earn. It's worked out on your taxable income, what's left after you take off certain work costs. Those costs are called allowable deductions. Most workers lodge a tax return every year, so knowing what counts can save real money. So how do allowable deductions turn income into taxable **income**?

Visual: opens on e06's final frame exactly (the boots on the receipt, the grey "Ways of earning: done" chip, chips). On the first sentence the "Next" and strand chips fade. On "everything you earn" a teal bar "income" draws at the right (1,000 × 90 px). On "taxable income" a violet slice is cut off its top and the rest turns blue, labelled "taxable income". On "allowable deductions" the violet slice labelled "allowable deductions", the boots' receipt sliding towards it with "?". On "income" (bold) heading "Taxable income" writes on; the question chip "Does it cut my tax?" moves to the top right.

### 2. gross income: everything, including interest
> Tax is worked out for each financial year, from the first of July to the thirtieth of June. Start with everything you earned in that year, called your gross income. That's your wages or salary, plus other income, like interest from a bank **account**. A teacher earns a salary of eighty-nine thousand four hundred dollars, and six hundred and forty dollars of bank interest. Her gross income is ninety thousand and forty **dollars**. Forgetting the interest is an easy **slip**.

Visual: stage change: a year strip "1 July 2026 → 30 June 2027" across the top, hand tag "1 July to 30 June". Simulation 1: on "wages or salary" a teal block "salary"; on "account" a thin teal block "bank interest" stacks on it, hand tag "include interest". On "eighty-nine thousand four hundred" the salary block reads "$89 400"; on "six hundred and forty" the interest block "$640". On "dollars" row, 52 px: "gross income = 89 400 + 640 = $90 040" (teal, framed). On "slip" a grey ghost bar "$89 400" beside it, lower by the interest, crossed in grey (caption "gross includes the interest").

### 3. three tests, then sort
> An allowable deduction is a cost of earning your income that the tax office, the ATO, lets you take off. It has to pass three tests. You spent the money yourself, and weren't paid back. It was for earning this income. And you have a record, like a **receipt**. Let's sort some. Steel-capped boots protect your feet at work, so they're **allowable**. But if your employer paid you back for them, they're not, because the money wasn't really yours. Plain black pants aren't, even if you only wear them to work, because they're ordinary **clothing**. Bus fares from home to work aren't, because getting to work isn't part of doing the **work**. Union fees are allowable, and so is a gift of two dollars or more to a registered **charity**. One more. Tax already taken out of your pay isn't a deduction at all. It's tax you've already **paid**. Tax rules change each year, so a question will tell you what's allowed.

Visual: stage change: the three tests as a strip across the top, 36 px, each writing on as said: "1. you paid (not paid back)", "2. for earning this income", "3. a record"; on "receipt" the third test's tag "a record". Below, two trays (simulation 2): "allowable" (violet) and "not allowable" (grey). On "Steel-capped boots" the boots plate (300 px) with its receipt slides in; on "allowable" it drops into the violet tray, tag "protective". On "paid you back" a grey ghost receipt "boots (employer paid it back)" drops into the grey tray, tag "test 1: you paid". On "Plain black pants" a coded receipt "plain black work pants" slides in; on "clothing" it drops into the grey tray, tag "ordinary clothing". On "Bus fares" the travel card plate `ma11-travel-card-v1.png` (260 px) with a coded receipt "bus fares: home to work"; on "work" it drops grey, tag "getting to work". On "Union fees" a receipt "union fees" drops violet; on "charity" a receipt "gift to a registered charity ($2 or more)" drops violet. On "Tax already taken out" a brown card "tax withheld from pay" hovers; on "paid" it is set aside outside both trays, tag "already paid". On "Tax rules change" a grey chip "tax rules change each year: use what the question allows".

### 4. worked example: the teacher's taxable income
> Back to the teacher. She spent four hundred and eighty dollars on textbooks and classroom resources, three hundred and twenty on a course for her teaching, a hundred and eighty on everyday work clothes, two hundred and fifty on a donation to a registered charity, and eight hundred and sixty on train fares to school. Sort them with the tests. The course counts because it's for her current job, while a course for a different career wouldn't. The textbooks, the course and the donation pass, a thousand and fifty **dollars**. The work clothes are ordinary clothing, and the train fares are home-to-work **travel**, so they don't count. Taxable income is gross income minus allowable deductions. Ninety thousand and forty minus one thousand and fifty is eighty-eight thousand nine hundred and ninety **dollars**.

Visual: clear change to the g01 board, the book stack `ma11-book-stack-v1.png` (300 px) at the top right. Task strip, 40 px: "A teacher earns a salary of $89 400 and $640 interest. She spent $480 on textbooks and classroom resources, $320 on a professional development course for her teaching, $180 on everyday work clothes, $250 on a donation to a registered charity and $860 on train fares to school. Find her taxable income." (site `we-1`). Formula strip, 52 px: "taxable income = gross income − allowable deductions". Givens card: "gross income = $90 040" (teal) and five small receipts. On "Sort them with the tests" the receipts drop into mini trays (simulation 2). On "current job" the course receipt takes the tag "for her current job". On "dollars" (first) row "allowable: 480 + 320 + 250 = $1050" (violet). On "travel" the "$180" and "$860" receipts grey out, tags "ordinary clothing", "getting to work". On "gross income minus allowable deductions" (simulation 3) the violet $1,050 slice is cut off the top of the teal $90,040 bar, hand tag "gross − allowable". On "dollars" (second) row "90 040 − 1050 = $88 990" and the remaining bar turns blue, framed answer (green) "taxable income $88 990".

### 5. working backwards
> You can work backwards too. Anika earned sixty-four thousand eight hundred in salary, and three hundred and eighty dollars of interest. Her taxable income was sixty-one thousand four hundred and fifty. What were her deductions? Her gross income is sixty-five thousand one hundred and **eighty**. The gap between gross and taxable is the deductions, three thousand seven hundred and thirty **dollars**. That's handy when a question gives you the end result, and asks what was claimed.

Visual: stage change (simulation 4): task strip, 40 px: "Anika earned $64 800 salary and $380 interest. Her taxable income was $61 450. Find her allowable deductions." (site `we-3`). Two bars side by side: gross (teal, height to be found) and taxable "$61 450" (blue). On "eighty" the gross bar reads "64 800 + 380 = $65 180". The gap between the tops is bracketed "deductions = ?", hand tag "the gap = deductions". On "dollars" row "65 180 − 61 450 = $3730" (framed green), the gap filling violet.

### 6. memory aid
> Here's the summary. Taxable income is gross income minus allowable deductions. Gross means everything, including interest. And a deduction must pass three tests: you paid, it's for earning this income, and you've got a **record**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the teal gross bar with its violet top cut off, leaving blue. Main line, hand font 56 px: "Taxable = gross − allowable." On "record" the key line, 40 px: "Gross: everything, including interest. Allowable: you paid it, for earning this income, with a record." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Taylor is a carpenter. In one financial year Taylor earns a salary of fifty-six thousand three hundred dollars, and a hundred and eighty-five dollars in bank interest. Taylor's expenses were steel-capped boots, a hundred and eighty-nine dollars, union fees, three hundred and sixty-four, plain black work pants, seventy-nine, a forty dollar donation to a registered charity, and bus fares between home and work, one thousand and forty. Calculate Taylor's taxable income. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Taylor works as a carpenter. In one financial year Taylor earns a salary of $56 300 and $185 in bank interest. Taylor's expenses were: steel-capped boots $189, union fees $364, plain black work pants $79, a $40 donation to a registered charity (a deductible gift recipient) and bus fares between home and work $1040. Calculate Taylor's taxable income." Picture slot: the tool belt plate `ms11-tool-belt-v1.png` (280 px). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Gross income is fifty-six thousand four hundred and eighty-five **dollars**. The boots, the union fees and the donation are allowable, five hundred and ninety-three dollars in **all**. The pants and the bus fares aren't. Taxable income is fifty-five thousand eight hundred and ninety-two **dollars**. Taking off every expense is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "dollars" (first) "56 300 + 185 = $56 485" (teal); on "all" "189 + 364 + 40 = $593" (violet); on "The pants and the bus fares" the two items grey, tags "ordinary clothing", "getting to work"; on "dollars" (second) "56 485 − 593 = $55 892" (framed green). On "slip" a red slip "56 485 − 1712 = $54 773" writes and is crossed (caption "plain clothes and home-to-work travel are not allowed"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Ravi's taxable income is forty-seven thousand two hundred and sixty dollars. He earned forty-eight thousand nine hundred dollars in wages, and seventy-six dollars in interest. What was the total of his allowable deductions? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Ravi's taxable income is $47 260. He earned $48 900 in wages and $76 in interest. What was the total of his allowable deductions?" Picture slot: two empty bars, "gross" and "taxable". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Gross income is forty-eight thousand nine hundred and seventy-six **dollars**, wages plus interest. The deductions are the gap, gross minus taxable, one thousand seven hundred and sixteen **dollars**. Leaving out the interest is the **slip**. That gives one thousand six hundred and forty.

Visual: the card shrinks to the top. Rows, 44 px: on "dollars" (first) "48 900 + 76 = $48 976" (teal); on "dollars" (second) "48 976 − 47 260 = $1716" (framed green), the gap filling violet. On "slip" a red slip "48 900 − 47 260 = $1640" writes and is crossed (caption "gross includes the interest"). Hold about 1 s.

### 11. handoff
> So the teacher's taxable income is eighty-eight thousand nine hundred and ninety dollars. But how much tax is that? The tax office publishes a table, with a different row for each band of income. Which row does it fall in, and what does that row **say**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "eighty-eight thousand nine hundred and ninety" the blue card "taxable income: $88 990" at the left. On "publishes a table" the blank resident tax table at the right, headed "Resident tax rates 2026-27", five empty outlined rows. On "say" chip "which row?". On "next" chips "Next: tax tables" and "?". Hold about 2 s. No rates or values in the table. This is e08's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Financial year: 1 July to 30 June.
- Gross income = wages or salary + interest + other income.
- Allowable: you paid it, for earning this income, with a record.
- Not allowable: ordinary clothes, home-to-work travel, tax withheld.
- Taxable income = gross income − allowable deductions.

Memory aid (framed card, right side, as in scene 6): *Taxable = gross − allowable.* Key: *Gross: everything, including interest. Allowable: you paid it, for earning this income, with a record.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e08's opening frame.

## Teaching checks

- **Does it explain causes?** Why taxable income: tax is charged on what is left after earning costs (1). Why interest counts: gross means all income (2). Why boots pass and plain pants fail: protective gear is for earning the income, ordinary clothing is not (3). Why home-to-work travel fails: getting to work is not doing the work (3). Why tax withheld is not a deduction: it is tax already paid (3). Why the gap gives the deductions: taxable = gross − deductions (5).
- **Misconceptions addressed:** interest left out (2; A2 crossed); ordinary clothing and home-to-work travel claimed (3, 4; A1 crossed); tax withheld subtracted (3); any work purchase treated as deductible when paid back (3, test 1).
- **Visual standard, item by item:** 1 the boots from the first frame, the textbooks in 4; 2 a new stage every 40 to 60 s; 3 the income stack, the receipt sorter with trays, the deductions cut off the top of the bar, the gap filling; 4 fixed roles (gross teal, deductions violet, taxable blue); 5 large type; 6 hand tags; 7 g01 boards in 4 and 5 with framed answers and crossed slips; 8 framed card and five bullets; 9 boots and plain pants dropping into different trays.
- **One idea at a time:** gross income (2), the tests (3), taxable income (4), working backwards (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 24 s and 21 s.
- **Avoided double teaching:** e01's yearly income recalled; tax payable left to e08.
- **Syllabus coverage:** `ci1e53d540` (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** car expenses, working-from-home rates, the $300 no-receipt rule; tax payable (e08).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, "in one financial year", original HSC style, 3 marks suggested, not an official marking scheme).** "Taylor works as a carpenter. In one financial year Taylor earns a salary of $56 300 and $185 in bank interest. Taylor's expenses were: steel-capped boots $189, union fees $364, plain black work pants $79, a $40 donation to a registered charity (a deductible gift recipient) and bus fares between home and work $1040. Calculate Taylor's taxable income."
Model answer: gross income 56 300 + 185 = $56 485; allowable: boots $189, union fees $364, donation $40 = $593 (not the plain pants or the home-to-work fares); taxable income 56 485 − 593 = $55 892. Classic mistake (crossed): every expense subtracted, "$54 773".

**Attempt 2 (scene 9; pack question 2, 2 marks suggested).** "Ravi's taxable income is $47 260. He earned $48 900 in wages and $76 in interest. What was the total of his allowable deductions?"
Model answer: gross 48 900 + 76 = $48 976; deductions = 48 976 − 47 260 = $1716. Classic mistake (crossed): "48 900 − 47 260 = $1640".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Boots | $189.00 | 1, 3 |
| Sophie | 89 400 + 640 = 90 040; 480 + 320 + 250 = 1050; 90 040 − 1050 = 88 990; not allowed 180, 860 | 2, 4, 11 |
| Anika | 64 800 + 380 = 65 180; − 61 450 = 3730 | 5 |
| A1 | 56 485; 593; 55 892; slip 1712 and 54 773 | 7, 8 |
| A2 | 48 976; 1716; slip 1640 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

- 89 400 + 640 = 90 040; 480 + 320 + 250 = 1050; 90 040 − 1050 = 88 990.
- 64 800 + 380 = 65 180; 65 180 − 61 450 = 3730.
- 56 300 + 185 = 56 485; 189 + 364 + 40 = 593; 56 485 − 593 = 55 892; 189 + 364 + 79 + 40 + 1040 = 1712; 56 485 − 1712 = 54 773.
- 48 900 + 76 = 48 976; 48 976 − 47 260 = 1716; 48 900 − 47 260 = 1640.
- Rules: the three tests, protective footwear, ordinary clothing, home-to-work travel, gifts of $2 or more to a deductible gift recipient (Codex reads and dates the ATO pages).

## Memory aid check

- **"Taxable = gross − allowable."** with key line **"Gross: everything, including interest. Allowable: you paid it, for earning this income, with a record."** Original (the site's card 05 has "Taxable income is gross income minus allowable deductions"). Meaning, as said in scene 6: start from all income, take off only the costs that pass the tests. Assumptions checked: "allowable" uses the ATO's three tests in plain words (3); the question states what is allowed when a case is unusual (3, the "rules change" line); tax withheld is never a deduction (3). It helps a new case: $40,000 wages + $120 interest, with $250 union fees and $600 home-to-work fuel, gives $40,120 − $250 = $39,870. Introduced after scenes 2 to 5.
- **Considered, not used:** "Paid, for work, recorded" alone (drops the formula).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**5,020 characters**, 12 scene headings. Characters per scene (1 to 12): 466, 466, 888, 800, 475, 226, 503, 326, 255, 277, 263, 75.

At 13.3 characters per second the speech is about 377 s. Total with the holds and settling below **about 464 s**, 106 s under the 570 s cap; speech and holds before the notes about 419 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the income stack (2), the sorter (3, 4), the bar cut (4) and the gap (5), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 3's "One more. Tax already taken out of your pay isn't a deduction at all. It's tax you've already paid." could shorten to "Tax already taken out of your pay isn't a deduction. It's tax already paid." (move the cue to "paid"); scene 2's last sentence (the ghost carries it).

## Scene list and build ids

Lesson key `m-s11e07` (route math-s11-e07). Explainer folder `src/explainer/lessons/math-s11-e07`; build inputs in `docs/production/claude-pm/lessons/math-s11-e07/` (at voicing).

In order (12 scene headings): hook-boots-tax, gross-income, three-tests-sort, worked-teacher-taxable, working-backwards, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | e06's frame: the boots on the receipt |
| 30 to 70 s | 2 | The income stack |
| 70 to 150 s | 3 | The receipt sorter |
| 150 to 215 s | 4 | g01 board: the teacher, bar cut |
| 215 to 245 s | 5 | The gap |
| 245 to 260 s | 6 | Framed memory card |
| 260 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 390 s | 11 | The tax table, for e08 |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e06's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e07-learning-review.md`, `science_check` = `checks/m-s11-e07-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma11-travel-card-v1.png` (a plain teal contactless travel card with a pale wave band and a tap symbol, no text; it has a soft teal halo painted around its edge, so the builder checks it on the dark board at 260 px; reused for the bus fares); `ma11-book-stack-v1.png` (as e04a; reused for the textbooks); `ma11-tshirt-v1.png` (a plain royal blue T-shirt; not used: the sort needs plain black pants, which stay a coded receipt). The tool belt (A1's picture) is briefed in e01; the boots in e06.

Need: none new. Reused: `ms11-steel-cap-boots-v1.png` (e06's brief), `ms11-tool-belt-v1.png` (e01's brief), `ma11-travel-card-v1.png`, `ma11-book-stack-v1.png`.

Coded: the year strip, income stack, receipts (unbranded), trays and reason tags, the bars and gap, the tax-table frame, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StackedTotalBar`, `OutcomeSort`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e07):
1. **ReceiptCard** (new, small): a coded, unbranded receipt (item, price, an optional date) that can slide into a tray and take a one-line reason tag; greyed when not allowable. Check: "Steel-capped work boots $189.00" drops into "allowable" with "protective".
2. **TaxTable frame** (blank, for the final frame): the `TaxTableReader` from e08 with no values. Check: five outlined rows, heading "Resident tax rates 2026-27".

## Codex asset brief

No new plate. The boots (e06) and tool belt (e01) are briefed elsewhere; the travel card and book stack exist and were viewed. Receipts, trays and the table frame are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Read and date the ATO pages for the three tests, clothing, home-to-work travel and gifts; confirm each sort is right and that "Tax rules change each year" is said once.
4. Confirm the site's `we-1` and `we-3` numbers are used unchanged, with the MS-75 conditions said (steel-capped; a course for her teaching).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e06's final frame and scene 11 matches the decisions file's e07 to e08 join (no values in the table).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Taxable Income and Allowable Deductions | Year 11 Maths Standard

(Title length: 64 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson07.sa.html

Steel-capped boots for work cost $189. Does buying them cut your tax? Learn what gross income includes (interest too), the three tests every allowable deduction must pass, why ordinary clothes and travel from home to work don't count, and why tax already taken out of your pay is not a deduction. Then find taxable income as gross income minus allowable deductions, and work backwards to find the deductions. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Tax rules change every year; check the ATO for current rules.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Determine taxable income by examining allowable deductions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Modelling Pay in a Spreadsheet. Next: Tax Tables and Tax Payable.

#Year11Maths #MathsStandard #TaxableIncome #HSCScience

## Open decisions

- **1. A1's year.** The pack's question says "the 2026-27 financial year"; the card says "one financial year", since the rules, not the year's rates, are tested. Confirm.
- **2. The ATO pages.** The pack found the URLs by search without opening them; Codex reads and dates them before narration, and any rule that differs changes only its sort tag.

## Review notes

- Revision 1. Next: student learning review (trace from e06 for a student who has never filed a tax return; check that the three tests come before the sort and are used to sort, that the boots against plain pants contrast lands, that "tax withheld is not a deduction" is clear without e09, that the gap picture makes working backwards obvious, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `ReceiptCard` before this video.
