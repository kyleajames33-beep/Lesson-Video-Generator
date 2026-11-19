# Maths S11 E11: After a tax return, do we get a refund or owe more tax? The tax return as the year's settling up, total owed = tax + Medicare levy, comparing it with PAYG withheld, the full chain from income to result, why two jobs can leave a debt, and why deductions bring refunds (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced; waits for Codex brief 256, step 1 (the PAYG rows at $450 and $520 in scene 4) before voicing. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; ruling 85: 2026-27 figures only, every site answer recalculated; the two-jobs withholding amounts are **PAYG placeholders**; rulings 5 and 32). Not voiced. Next: student learning review and Codex maths check (including the PAYG rows), then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,988 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 462 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e11-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Should fix, scene 3 against scene 5 (Priya's refund was bigger than her deductions): **accepted** (ruling 96). Priya's withheld is repriced to $16,950 (the tax and levy on her salary alone: 15 300 + 1652 = 16 952). Narration: "and sixteen thousand nine hundred and fifty dollars was withheld" and "Sixteen thousand nine hundred and fifty was withheld, which is more, so Priya gets a refund of five hundred and twenty-six **dollars**." Task strip, givens, chain cards and framed answer "refund of $526"; crossed slip "16 950 − 14 805 = $2145 refund". Scene 5 points back: "That's Priya's refund." with a small card "Priya: refund $526". The refund now fits its cause (about (2850 − 1200) × 0.32 = $528). Priya's e12 row (80950 | 14805 | 1619 | 64526) does not change.
2. Optional, scene 2 (Ella's $180 refund had no cause): **accepted** as ruling 96 sets it: Ella's withheld is $4,800, "a little less than needed", so she has a tax debt of $120; the balance tips towards "you pay" before Priya's refund, and the grey ghost becomes "4800 − 4020 = $780 refund?" (the tax-alone mistake).
3. Optional, scene 4: **accepted**: "That's why you claim the threshold from one job only, and even then, a second job can leave a small bill."

Open decision 2 is closed. Placeholders unchanged: the PAYG rows at $450 and $520 (scene 4) wait for Codex brief 256, step 1; no placeholder is voiced. Joins unchanged: scene 1 opens on e10's final frame; scene 11 is e12's opening.

Narration 4,988 characters by `work/brief-review-s11-e/count.py` (Revision 1: 4,887 by the same parser; 4,876 by the author's), about 462 s with holds, 108 s under the 570 s cap; feedback speech about 30.5 s and 30.1 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: twelfth video of the Year 11 Earning money strand, outline playlist order 26. One video for Standard 1 and Standard 2. Viewers arrive from e10's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e11.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson08.sa.html` (SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`; card 06, "comparing what was withheld by their employer against what they actually owe", "Compare PAYG to total tax liability, not income tax alone", "Refund if PAYG > tax owed; tax debt if PAYG < tax owed"; `we-3`, Priya, $82,600 + $1,200 − $2,850, PAYG $19,400; `we-4`, Ella, $45,000, PAYG $5,100). The site's answers use the 2024-25 table (MS-73); every result here is recalculated for 2026-27, and both withheld amounts are repriced (ruling 96, Revision 2): Priya $16,950 withheld, a refund of $526 (site $2,708); Ella $4,800 withheld, a debt of $120 (site a debt of $88). Route entry: `math-s11-e11` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the coin jar reused; the return summary, balance, chain cards and pay slips coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents (the return summary is coded and unbranded); no people; one question; one stage at a time; words before symbols; plain meanings (tax return, tax liability, refund, tax debt); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns with the 2026-27 table on each card; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a first tax return, two casual jobs); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Taxation", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `ci7b90b994`: "Determine by calculation if more tax is payable or if a refund is owed after completing a tax return"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e10's final frame exactly (the `ReturnSummary` "Tax return summary 2026-27" with blank lines "Tax withheld during the year" and "Tax and Medicare levy owed", a small level balance; chips "refund or bill?", "Next: tax returns", "?"). Recalls e07 (taxable income), e08 (tax from the table), e09 (PAYG withheld; the threshold claimed once) and e10 (levy 2%) in a grey chip each. Teaches: a tax return (lodged after 30 June) works out the year's real tax; total owed (tax liability) = tax from the table + Medicare levy, both on taxable income; compare with PAYG withheld; refund = withheld − owed when more was withheld; tax debt (more tax payable) = owed − withheld when less was withheld; the full chain (income, deductions, taxable income, tax, levy, total, withheld, result); why a debt happens (two jobs both claiming the threshold; income such as interest with nothing withheld); why a refund happens (PAYG does not know about deductions); a refund is your own over-paid tax, not a bonus. Stops at the result. Not taught: offsets, HECS-HELP, the Medicare levy surcharge, interest on late payment (pack: leave out); spreadsheets (e12).

## Decisions

- **Anchor: the return summary (from e10's final frame).** Its two blank lines become a balance: withheld on one pan, owed on the other. No people.
- **Worked examples: the site's numbers, recalculated for 2026-27 (ruling 85).** Ella (`we-4`): $45,000, withheld $4,800 (Revision 2, ruling 96; site $5,100); owed 4,020 + 900 = $4,920; a debt of $120, as the first, single-income comparison, so the balance tips towards "you pay" before Priya's refund. Priya (`we-3`): the full chain, 82,600 + 1,200 − 2,850 = $80,950; tax 4,020 + 0.30 × 35,950 = $14,805; levy $1,619; owed $16,424; withheld $16,950 (Revision 2, ruling 96: the tax and levy on her salary alone, 15,300 + 1,652 = 16,952, rounded; site $19,400); refund $526, which fits scene 5's cause (roughly the tax on her deductions less her interest: (2,850 − 1,200) × 0.32 ≈ $528). **The pack's "same income, different year" side-by-side (Ella's 2024-25 debt of $88) is not used**: ruling 85 allows 2026-27 figures only, so "rates change every year" is said in one sentence without the old table.
- **Two jobs (pack anchor 1, PAYG placeholders).** $450 and $520 a week, both claiming the threshold; withheld $13 and $24 a week (**placeholders**, e09's pack values; Codex copies NAT 1005's $450 and $520 rows); 52 × $37 = $1,924 withheld; income 52 × $970 = $50,440; owed 5,652 + 1,008.80 = $6,660.80; debt $4,736.80 (placeholder-dependent).
- **Notation.** "total owed = tax + levy" and "refund = withheld − owed; debt = owed − withheld" in words; the "bigger side wins" balance carries the direction.
- **Join.** Scene 1 opens on e10's final frame exactly; the balance tips for the first time in scene 2.
- **Simulations (standard item 3).**
  1. **Balance** (scenes 2, 3, 4; `StudioBalanceBeam`): withheld (brown coins in the coin jar) on the left pan, owed (amber tax and olive levy blocks) on the right; the heavier side tips down and the difference is written in the gap, "refund" (green) or "debt" (red-free: amber outline, labelled "you pay").
  2. **Chain cards** (scene 3; new `ReturnSummary`): eight cards fill left to right: income, deductions, taxable income, tax, levy, total owed, withheld, result.
  3. **Two thin jars** (scene 4): two pay slips, both ticking "claim the threshold"; each drops a few small coins a week into its own jar; together the jars sit far below the year's owed block; a bill card arrives.
  4. **Deductions shrink the owed side** (scene 5): the owed block shrinks as the deductions card is applied, while the withheld pan stays the same, and the beam swings to "refund".
- **Colour roles (fixed for e07 to e12).** Income **teal**; deductions **violet**; taxable income **blue**; tax **amber**; levy **olive**; PAYG withheld **brown**; a refund **green**; a debt amber outlined with "you pay" (red is kept for mistakes); answer **green** frame; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, cards 36 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "settling up for the year", "tax + levy", "bigger side wins", "withheld more: refund", "withheld less: you pay", "step 1 … step 4", "threshold twice: too little withheld", "nothing withheld on interest", "PAYG doesn't know your deductions", "your own money back". At most two live at once.
- **Stage changes (standard item 2).** The return summary (1); the balance, Ella (2); g01 board, Priya's chain (3); two jobs (4); deductions and refunds (5); framed card (6); question cards (7 to 10); one spreadsheet row for e12 (11); key notes (12).
- **Worked examples (g01 layout).** 3: task strip "Priya earns a salary of $82 600 and $1200 in bank interest. Her allowable deductions total $2850 and $16 950 was withheld. Using 2026-27 rates, will she get a refund or owe tax, and how much?" (site `we-3`, withheld repriced, ruling 96); formula strip "result = withheld − (tax + levy)"; givens card grouped "income", "deductions", "withheld"; the chain cards fill as the rows land; framed answer "refund of $526"; crossed slip "16 950 − 14 805 = $2145 refund" (caption "compare with tax + levy").
- **Memory aid.** Framed card: "Owed = tax + levy. Withheld more: refund. Less: you pay." Key line: "Taxable income → tax (table) + levy (2%) → compare with PAYG withheld."
- **Visual surprise.** Two jars filling all year from two jobs still sit far below the owed block, by more than $4,700 (scene 4).
- **Site notes (pack section 8; section 11).** MS-73: every result is recalculated with the 2026-27 table; the site's printed answers are not shown and the video says nothing about the site. MS-74 (the effective-rate check) is not used.
- **Plain meanings at first use.** Tax return ("the form you lodge after 30 June that works out your real tax for the year"); total owed or tax liability ("the tax from the table plus the Medicare levy"); refund ("money back when more was withheld than you owe"); tax debt ("the rest you pay when less was withheld").
- **Attempts.** A1 (pack question 1): Cooper, $58,900 taxable, $9,100 withheld: owed 8,190 + 1,178 = $9,368; he owes $268; crossed "9100 − 8190 = $910 refund" (caption "add the Medicare levy before comparing"). A2 (pack question 2): Mira, 71,200 + 310 − 1,480 = $70,030; tax $11,529; levy $1,400.60; owed $12,929.60; withheld $13,560; refund $630.40; crossed "13 560 − 11 529 = $2031 refund" (caption "add the Medicare levy before comparing"). Both cards show the 2026-27 table and "Medicare levy 2% of taxable income".
- **Mistake scene:** none separate. The levy left out (2 to 4 said; A1 and A2 crossed; the strand's most common slip here); subtracting the wrong way and calling a debt a refund (2, the balance's direction); gross for taxable (3, step 1); a refund as a bonus (5, said); claiming the threshold twice (4).
- **Cause chain taught, in order:** (1) PAYG is an estimate, so at the end of the year the real tax is worked out in a return (1); (2) the real amount owed is the tax plus the levy, both on taxable income (2, 3); (3) whichever is bigger, withheld or owed, decides refund or debt, and the difference is the amount (2); (4) two jobs both using the threshold each withhold as if they were the only job, so too little is withheld in total (4); (5) income with nothing withheld adds to the bill (4); (6) deductions lower the real tax after it was already withheld on full pay, so the extra comes back as a refund (5).
- **Entry knowledge (route):** math-s11-e07, e08, e09, e10. Recalled in a grey chip each.
- **Money sources (rulings 5, 32 and 85).** 2026-27 resident tax rates (e08's source) and the Medicare levy of 2% (e10's source); Codex confirms both. The tax-free threshold rule (claim with one payer when total income is over $18,200; ATO, as e09). PAYG rows for the two jobs from NAT 1005 for payments from 1 July 2026 (**placeholders** until Codex copies them). Said once (scene 2): "Tax rates change every year, so always use the table for the right year."
- **Handoff (to math-s11-e12, "How does a spreadsheet test different tax scenarios?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the return summary folds into one `SpreadsheetGrid` row with headings "A: taxable income", "B: tax", "C: Medicare levy", "D: net" and the row "80950 | 14805 | 1619 | 64526" (Priya; the net is 80,950 − 14,805 − 1,619 = $64,526), an empty row 3 below it; chips "what if I earn more?", "Next: tax in a spreadsheet" and "?". This is e12's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ella: tax(45 000) = 4020; levy 900; owed 4920; debt 4920 − 4800 = 120 (Revision 2; withheld $4,800).
  (b) Priya: 82 600 + 1200 − 2850 = 80 950; 80 950 − 45 000 = 35 950; × 0.30 = 10 785; + 4020 = 14 805; levy 0.02 × 80 950 = 1619; owed 16 424; refund 16 950 − 16 424 = 526; slip 16 950 − 14 805 = 2145 (Revision 2; withheld $16,950); net for the e12 row 80 950 − 14 805 − 1619 = 64 526.
  (c) Two jobs (P = placeholder): 13 + 24 = 37 (P); × 52 = 1924 (dep.); income (450 + 520) × 52 = 50 440; tax 4020 + 0.30 × 5440 = 5652; levy 1008.80; owed 6660.80; debt 6660.80 − 1924 = 4736.80 (dep.).
  (d) A1: tax(58 900) = 4020 + 0.30 × 13 900 = 8190; levy 1178; owed 9368; 9368 − 9100 = 268; slip 9100 − 8190 = 910.
  (e) A2: 70 030; 4020 + 0.30 × 25 030 = 11 529; levy 1400.60; owed 12 929.60; 13 560 − 12 929.60 = 630.40; slip 13 560 − 11 529 = 2031.
  (f) Pronunciations: "two thousand nine hundred and seventy-six dollars"; "four thousand seven hundred and thirty-six dollars eighty"; "six hundred and thirty dollars forty".

Main question: *A tax return compares the tax withheld during the year with the tax and levy owed. After a tax return, do we get a refund or owe more tax?*
Entry knowledge (math-s11-e07 to e10): taxable income, tax, levy, withholding.
Stops after: owed against withheld, the full chain, the two-jobs debt, why refunds happen. No spreadsheets.
Handoff: math-s11-e12: "what if I earn more?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): income teal; deductions violet; taxable income blue; tax amber; levy olive; withheld brown; refund green; debt amber outlined "you pay"; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. The two-jobs amounts in scene 4 are **PAYG placeholders** until Codex copies the ATO rows.

### 1. hook: refund or bill?
> Last time ended with a tax return summary. One line shows the tax withheld during the year. The other shows the tax and Medicare levy actually owed. A tax return is the form you lodge after the thirtieth of June that works out your real tax for the year. If more was withheld than you owe, you get the difference back. That's a refund. If less was withheld, you pay the rest. That's a tax debt. So after a tax return, do we get a refund, or owe more **tax**?

Visual: opens on e10's final frame exactly (the return summary, its two blank lines, the level balance, chips). On the first sentence the "Next" chip fades. On "tax withheld" the brown line rings; on "tax and Medicare levy actually owed" the amber and olive line rings. On "A tax return" chip "tax return: settling up for the year", hand tag "settling up for the year". On "you get the difference back" the balance tips left, a green "refund" tag; on "you pay the rest" it tips right, an amber outlined "you pay" tag; then it levels. On "tax" heading "Tax returns: refund or debt?" writes on; the question chip "Which side is heavier?" moves to the top right.

### 2. the comparison
> Here's the comparison, with one income. Ella's taxable income is forty-five thousand dollars, and four thousand eight hundred dollars was withheld from her pay. With this year's table, her tax is four thousand and twenty, and the levy is nine hundred. Together she owes four thousand nine hundred and twenty **dollars**. Only four thousand eight hundred was withheld, a little less than needed. So Ella has a tax debt of a hundred and twenty **dollars**. Always compare the withheld amount with the tax plus the levy, not the tax alone. And tax rates change every year, so always use the table for the right **year**.

Visual: stage change (simulation 1): the `StudioBalanceBeam` (1,300 × 600 px). Left pan: the coin jar `ma12-coin-jar-v1.png` (300 px) labelled "withheld: $4800" (brown; Revision 2, ruling 96). Right pan: on "her tax is four thousand and twenty" an amber block "tax $4020" (grey chip "e08 table: 45 000 → $4020"); on "the levy is nine hundred" an olive block "levy 2% = $900" stacks on it (grey chip "e10: 2% of taxable income"); on "dollars" (first) the right pan's label "owed = 4020 + 900 = $4920", hand tag "tax + levy". On "a little less than needed" the beam tips down on the right, hand tag "bigger side wins". On "dollars" (second) the gap is labelled "4920 − 4800 = $120 to pay" (amber outlined "you pay", framed), hand tag "withheld less: you pay". On "not the tax alone" a grey ghost "4800 − 4020 = $780 refund?" appears and is crossed in grey. On "year" a grey chip "tax rates change every year: use the right year's table".

### 3. worked example: the full chain
> Now the full chain. Priya earns a salary of eighty-two thousand six hundred dollars, and one thousand two hundred dollars in bank interest. Her allowable deductions total two thousand eight hundred and fifty, and sixteen thousand nine hundred and fifty dollars was withheld. Refund, or tax debt? Step one, taxable income. Eighty-two thousand six hundred, plus one thousand two hundred, minus two thousand eight hundred and fifty, is eighty thousand nine hundred and **fifty**. Step two, the tax from the table, four thousand and twenty plus thirty cents on thirty-five thousand nine hundred and fifty, fourteen thousand eight hundred and **five**. Step three, the levy, two per cent, one thousand six hundred and **nineteen**. So she owes sixteen thousand four hundred and twenty-four. Step four, compare. Sixteen thousand nine hundred and fifty was withheld, which is more, so Priya gets a refund of five hundred and twenty-six **dollars**.

Visual: clear change to the g01 board. Task strip, 40 px: "Priya earns a salary of $82 600 and $1200 in bank interest. Her allowable deductions total $2850 and $16 950 was withheld. Using 2026-27 rates, will she get a refund or owe tax, and how much?" (site `we-3`, withheld repriced, ruling 96). Formula strip, 52 px: "result = withheld − (tax + levy)". Givens card, 40 px, grouped: "income: $82 600 + $1200" (teal), "deductions: $2850" (violet), "withheld: $16 950" (brown). Simulation 2: the chain cards across the bottom (eight cards, 36 px), filling as the rows land. On "fifty" row "82 600 + 1200 − 2850 = $80 950" (blue), card "taxable income $80 950", hand tag "step 1". On "five" row "4020 + 0.30 × 35 950 = $14 805" (amber), card "tax $14 805". On "nineteen" row "0.02 × 80 950 = $1619" (olive), card "levy $1619". On "owes sixteen thousand four hundred and twenty-four" row "14 805 + 1619 = $16 424", card "owed $16 424". On "compare" card "withheld $16 950". On "dollars" row "16 950 − 16 424 = $526", card "result: refund $526", framed answer (green) "refund of $526". A red slip "16 950 − 14 805 = $2145 refund" writes under the rows and is crossed (caption "compare with tax + levy").

### 4. why a debt: two jobs
> So why would anyone owe tax? A common reason is two jobs. Say you work two casual jobs, earning four hundred and fifty dollars and five hundred and twenty dollars a week, and you claim the tax-free threshold on both. Each job withholds as if it's your only job, just thirteen and twenty-four dollars a **week**. Over fifty-two weeks, that's one thousand nine hundred and twenty-four dollars withheld. But your total income is fifty thousand four hundred and forty, and the tax and levy on that come to six thousand six hundred and sixty dollars **eighty**. So the bill at tax time is four thousand seven hundred and thirty-six dollars eighty. That's why you claim the threshold from one job only, and even then, a second job can leave a small bill. Income with no tax withheld, like bank interest, can also add to the **bill**.

Visual: stage change (simulation 3): two small coded pay slips side by side, "café: $450 a week" and "cinema: $520 a week", each with its declaration box ticked "Yes", hand tag "threshold twice: too little withheld". Under each, a small jar. On "week" each slip's tax line fills "$13" and "$24" (brown; **placeholders**), and a few small coins drop into each jar through a 52-week strip. On "one thousand nine hundred and twenty-four" the jars join on the left pan: "52 × (13 + 24) = $1924". On "total income" the right pan fills: "52 × 970 = $50 440" with an amber "tax $5652" and olive "levy $1008.80"; on "eighty" label "owed $6660.80". The beam tips hard to the right. On "the bill at tax time" a coded bill card slides in: "you pay: 6660.80 − 1924 = $4736.80" (amber outlined), hand tag "withheld less: you pay". On "one job only" grey chip "e09: claim the threshold with one job". On "bill" a small card "bank interest: nothing withheld" adds a sliver to the owed side, hand tag "nothing withheld on interest".

### 5. why a refund: deductions
> And why do refunds happen? PAYG doesn't know about your deductions. It withholds as if your whole pay is taxable. When you claim deductions in your tax return, your real tax drops below what was withheld, and the extra comes back. That's Priya's refund. A refund isn't a bonus from the government. It's your own tax, paid too early, coming **back**.

Visual: stage change (simulation 4): the balance, level, withheld on the left (brown), owed on the right (amber and olive) worked on full pay, hand tag "PAYG doesn't know your deductions". On "claim deductions" a violet deductions card slides onto the right pan's income and the owed block shrinks; the beam swings to the left, "refund" (green). On "That's Priya's refund" a small card "Priya: refund $526" pins beside the beam, hand tag "her deductions, back as tax" (Revision 2, review finding 1). On "isn't a bonus" a grey crossed chip "a bonus from the government". On "back" an arrow carries a few brown coins from the gap back to a small slip labelled "you", hand tag "your own money back".

### 6. memory aid
> Here's the summary. Work out the tax and the levy on your taxable income, and add them. Then compare with what was withheld. Withheld more, you get a refund. Withheld less, you pay the **rest**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the balance with brown on the left and amber plus olive on the right, tipping each way in turn. Main line, hand font 56 px: "Owed = tax + levy. Withheld more: refund. Less: you pay." On "rest" the key line, 40 px: "Taxable income → tax (table) + levy (2%) → compare with PAYG withheld." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Cooper's taxable income is fifty-eight thousand nine hundred dollars, and nine thousand one hundred dollars of tax was withheld from his pay. Will Cooper receive a refund, or owe more tax? By how much? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In 2026-27 Cooper's taxable income is $58 900 and $9100 tax was withheld from his pay. Will Cooper receive a refund or owe more tax? By how much?" Beside it the 2026-27 resident tax table (34 px) and "Medicare levy: 2% of taxable income". The full question and table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The tax is four thousand and twenty, plus thirty cents on thirteen thousand nine hundred, eight thousand one hundred and **ninety**. The levy is two per cent, one thousand one hundred and seventy-eight, so he owes nine thousand three hundred and sixty-eight **dollars**. That's more than was withheld, so Cooper owes two hundred and sixty-eight **dollars**. Comparing with the tax alone, without the levy, is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "ninety" "4020 + 0.30 × 13 900 = $8190"; on "dollars" (first) "0.02 × 58 900 = $1178; 8190 + 1178 = $9368"; on "dollars" (second) "9368 − 9100 = $268: Cooper owes $268" (framed green), a small balance tipping right. On "slip" a red slip "9100 − 8190 = $910 refund" writes and is crossed (caption "add the Medicare levy before comparing"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Mira earned a salary of seventy-one thousand two hundred dollars, and three hundred and ten dollars in bank interest. Her allowable deductions were one thousand four hundred and eighty dollars, and her employer withheld thirteen thousand five hundred and sixty dollars. Calculate her refund, or the tax she owes. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Mira earned a salary of $71 200 and $310 in bank interest in 2026-27. Her allowable deductions were $1480 and her employer withheld $13 560. Calculate her refund or tax payable." Beside it the table (34 px) and "Medicare levy: 2% of taxable income". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Taxable income is seventy thousand and thirty **dollars**. The tax is eleven thousand five hundred and twenty-nine, and the levy is one thousand four hundred dollars sixty. Together, twelve thousand nine hundred and twenty-nine dollars **sixty**. Thirteen thousand five hundred and sixty was withheld, which is more, so it's a refund of six hundred and thirty dollars **forty**. Leaving out the levy is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "dollars" "71 200 + 310 − 1480 = $70 030"; on "eleven thousand five hundred and twenty-nine" "4020 + 0.30 × 25 030 = $11 529"; on "one thousand four hundred dollars sixty" "0.02 × 70 030 = $1400.60"; on "sixty" "owed $12 929.60"; on "forty" "13 560 − 12 929.60 = $630.40 refund" (framed green). On "slip" a red slip "13 560 − 11 529 = $2031 refund" writes and is crossed (caption "add the Medicare levy before comparing"). Hold about 1 s.

### 11. handoff
> Every one of these took the same steps, again and again, for each new income. A spreadsheet could do them all at once, and answer questions like, what if I get a pay **rise**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "the same steps" Priya's chain cards slide together and fold into one `SpreadsheetGrid` row: headings "A: taxable income", "B: tax", "C: Medicare levy", "D: net", row 2 "80950 | 14805 | 1619 | 64526", row 3 empty. On "rise" chip "what if I earn more?". On "next" chips "Next: tax in a spreadsheet" and "?". Hold about 2 s. This is e12's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Taxable income = income − allowable deductions.
- Total owed = tax (from the table) + Medicare levy (2%).
- Withheld > owed: refund = withheld − owed.
- Withheld < owed: you pay owed − withheld.
- Two jobs both claiming the threshold: too little withheld.

Memory aid (framed card, right side, as in scene 6): *Owed = tax + levy. Withheld more: refund. Less: you pay.* Key: *Taxable income → tax (table) + levy (2%) → compare with PAYG withheld.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e12's opening frame.

## Teaching checks

- **Does it explain causes?** Why a return: PAYG is an estimate (1). Why tax + levy: both are owed on taxable income (2, 3). Why the bigger side decides: the difference is either paid back or still owed (2). Why two jobs make a debt: each withholds as if it were the only job (4). Why interest adds to the bill: nothing is withheld from it (4). Why deductions bring refunds: they lower the real tax after full withholding (5).
- **Misconceptions addressed:** the levy left out (2, 3; A1 and A2 crossed); the wrong direction (2, the balance); a refund as a bonus (5); the threshold claimed twice (4); gross for taxable (3, step 1).
- **Visual standard, item by item:** 1 the return summary from the first frame; 2 a new stage every 40 to 60 s; 3 the balance tipping with each case, the chain cards filling, two thin jars against a large owed block, the owed side shrinking with deductions; 4 fixed roles (withheld brown, tax amber, levy olive); 5 large type; 6 hand tags; 7 g01 board in 3 with a framed answer and a crossed slip; 8 framed card and five bullets; 9 two jars filling all year still far short.
- **One idea at a time:** the comparison (2), the chain (3), debts (4), refunds (5).
- **Response opportunity:** two unseen tasks with the table on each card; 10 s each; feedback about 30 s each (the four-step chain is the content).
- **Avoided double teaching:** e07 to e10 recalled in grey chips; spreadsheets left to e12.
- **Syllabus coverage:** `ci7b90b994` (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** offsets, HECS-HELP, the Medicare levy surcharge, late-payment interest.

## Practice questions and model answers

Both cards show the 2026-27 resident tax table and "Medicare levy: 2% of taxable income".

**Attempt 1 (scene 7; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "In 2026-27 Cooper's taxable income is $58 900 and $9100 tax was withheld from his pay. Will Cooper receive a refund or owe more tax? By how much?"
Model answer: tax 4020 + 0.30 × 13 900 = $8190; levy 0.02 × 58 900 = $1178; total $9368; 9368 > 9100, so he owes $268. Classic mistake (crossed): "9100 − 8190 = $910 refund".

**Attempt 2 (scene 9; pack question 2, 4 marks suggested).** "Mira earned a salary of $71 200 and $310 in bank interest in 2026-27. Her allowable deductions were $1480 and her employer withheld $13 560. Calculate her refund or tax payable."
Model answer: taxable income 71 200 + 310 − 1480 = $70 030; tax 4020 + 0.30 × 25 030 = $11 529; levy 0.02 × 70 030 = $1400.60; total $12 929.60; withheld $13 560 is more, so a refund of $630.40. Classic mistake (crossed): "13 560 − 11 529 = $2031 refund".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ella | 4020 + 900 = 4920; 4920 − 4800 = 120 to pay; ghost 4800 − 4020 = 780 | 2 |
| Priya | 80 950; 35 950; 14 805; 1619; 16 424; withheld 16 950; refund 526; slip 2145; e12 row net 64 526 | 3, 5, 11 |
| Two jobs | 13, 24 (P); 1924 (dep.); 50 440; 5652; 1008.80; 6660.80; 4736.80 (dep.) | 4 |
| A1 | 8190; 1178; 9368; 268; slip 910 | 7, 8 |
| A2 | 70 030; 11 529; 1400.60; 12 929.60; 630.40; slip 2031 | 9, 10 |

(P) = PAYG placeholder; (dep.) = depends on a placeholder.

## Numbers to verify (all values, repeated for Codex)

**PAYG placeholders (ruling 85): Codex copies NAT 1005 (payments from 1 July 2026), "with tax-free threshold" column, rows $450 and $520.** Placeholders $13 and $24 (e09 pack). Then recompute: 52 × (row $450 + row $520) = withheld; 6660.80 − withheld = the debt. Scene 4 speaks "thirteen and twenty-four dollars", "one thousand nine hundred and twenty-four" and "four thousand seven hundred and thirty-six dollars eighty"; all three change with the rows.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check:
- tax(45 000) = 0.15 × 26 800 = 4020; 0.02 × 45 000 = 900; 4920; 4920 − 4800 = 120 (debt); 4800 − 4020 = 780 (crossed ghost).
- 82 600 + 1200 − 2850 = 80 950; 4020 + 0.30 × 35 950 = 14 805; 0.02 × 80 950 = 1619; 16 424; 16 950 − 16 424 = 526; 16 950 − 14 805 = 2145; Priya's withheld check: tax(82 600) = 4020 + 0.30 × 37 600 = 15 300, levy 0.02 × 82 600 = 1652, 15 300 + 1652 = 16 952 ≈ 16 950; (2850 − 1200) × 0.32 = 528 (the scene 5 cause, about the refund); 80 950 − 14 805 − 1619 = 64 526.
- (450 + 520) × 52 = 50 440; 4020 + 0.30 × 5440 = 5652; 0.02 × 50 440 = 1008.80; 6660.80; with the placeholders, (13 + 24) × 52 = 1924 and 6660.80 − 1924 = 4736.80.
- 4020 + 0.30 × 13 900 = 8190; 0.02 × 58 900 = 1178; 9368; 9368 − 9100 = 268; 9100 − 8190 = 910.
- 71 200 + 310 − 1480 = 70 030; 4020 + 0.30 × 25 030 = 11 529; 0.02 × 70 030 = 1400.60; 12 929.60; 13 560 − 12 929.60 = 630.40; 13 560 − 11 529 = 2031.

## Memory aid check

- **"Owed = tax + levy. Withheld more: refund. Less: you pay."** with key line **"Taxable income → tax (table) + levy (2%) → compare with PAYG withheld."** Original (the site's card 06 says "Compare PAYG to total tax liability, not income tax alone"). Meaning, as said in scene 6: the return compares what was paid during the year with what was really owed. Assumptions checked: both tax and levy are worked on taxable income (2, 3); the full levy applies (low incomes pay less, e10); no offsets or other charges (out of scope, the pack); withheld means the year's PAYG total (2). It helps a new case: $50,000 taxable with $7,000 withheld owes 5,520 + 1,000 = $6,520, so a refund of $480. Introduced after scenes 2 to 5.
- **Considered, not used:** "Bigger side wins" alone (drops the levy).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **4,988 characters** (Revision 1: 4,887 by the same parser, 4,876 by the author's), 12 scene headings. Characters per scene (1 to 12): 454, 605, 925, 815, 345, 190, 234, 406, 344, 400, 184, 75. Speech about 375 s; holds and settling unchanged from Revision 1 (below); total **about 462 s**, 108 s under the 570 s cap. Feedback speech: about 30.5 s and 30.1 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,876 characters**, 12 scene headings. Characters per scene (1 to 12): 454, 583, 921, 763, 322, 190, 234, 406, 344, 400, 184, 75.

At 13.3 characters per second the speech is about 367 s. Total with the holds and settling below **about 454 s**, 116 s under the 570 s cap; speech and holds before the notes about 409 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the balance (2), the chain cards (3), the two jars (4) and the shrinking owed block (5), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 4's last sentence (the interest card carries it); scene 2's "Always compare the withheld amount with the tax plus the levy, not the tax alone." (the crossed ghost carries it; it is repeated in both feedbacks).

## Scene list and build ids

Lesson key `m-s11e11` (route math-s11-e11). Explainer folder `src/explainer/lessons/math-s11-e11`; build inputs in `docs/production/claude-pm/lessons/math-s11-e11/` (at voicing).

In order (12 scene headings): hook-refund-or-bill, the-comparison, worked-full-chain, two-jobs-debt, deductions-refund, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | e10's frame: the return summary |
| 40 to 90 s | 2 | The balance: Ella |
| 90 to 170 s | 3 | g01 board: Priya's chain |
| 170 to 230 s | 4 | Two jobs, two thin jars |
| 230 to 260 s | 5 | Deductions shrink the owed side |
| 260 to 275 s | 6 | Framed memory card |
| 275 to 385 s | 7 to 10 | Question cards with the table, then feedback |
| 385 to 400 s | 11 | One spreadsheet row, for e12 |
| 400 to 445 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e10's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e11-learning-review.md`, `science_check` = `checks/m-s11-e11-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-coin-jar-v1.png` (as e09; reused as the withheld pan, continuing e09's "paid to the ATO" jar). No other plate is needed: the return, slips and balance are documents and diagrams.

Need: none new. Reused: `ma12-coin-jar-v1.png`.

Coded: the return summary (unbranded), the balance, the chain cards, the two pay slips and jars, the bill card, the spreadsheet row, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioBalanceBeam`, `PaySlipCard` (e02; two slips), `TaxTableReader` (e08; on the cards), `SpreadsheetGrid` (one row, final frame), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e11):
1. **ReturnSummary** (new, small): an unbranded tax-return summary that fills left to right as eight cards (income, deductions, taxable income, tax, levy, total owed, withheld, result), values from data props; it can fold into one spreadsheet row. Check: Priya's cards read 83 800 income (82 600 + 1200), 2850, 80 950, 14 805, 1619, 16 424, 16 950, "refund 526" (Revision 2).
2. **Balance labels** on `StudioBalanceBeam` (small prop): the gap labelled "refund" (green) or "you pay" (amber outlined), with the difference. Check: Ella's gap reads "$120 to pay" and Priya's "$526 refund" (Revision 2).

## Codex asset brief

No new plate. The coin jar exists and was viewed. The return summary, slips and balance are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. **Copy the PAYG rows** for $450 and $520 a week (NAT 1005, with the threshold, payments from 1 July 2026) and recompute scene 4's withheld total and debt.
2. Re-check every other value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
3. Confirm the syllabus quote matches the route-inputs JSON exactly.
4. Confirm the 2026-27 table and the 2% levy, that no 2024-25 figure or site printed answer appears (MS-73, ruling 85), and that "tax rates change every year" is said once.
5. Confirm both attempt cards show the table and the levy rule, carry every demand and show no answer.
6. Confirm scene 1 opens on e10's final frame and scene 11 matches the decisions file's e11 to e12 join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Tax Returns: Refund or Tax Debt? | Year 11 Maths Standard

(Title length: 57 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html

After 30 June, a tax return compares the tax withheld from your pay during the year with the tax and Medicare levy you really owe. Learn how to work out the total owed, compare it with what was withheld, and decide whether you get a refund or have a tax bill. Follow the full chain from income and deductions to the result, see why two jobs that both claim the tax-free threshold can leave a big bill, and why claiming deductions usually brings money back. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Tax rates change every year; this video uses 2026-27 figures.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Determine by calculation if more tax is payable or if a refund is owed after completing a tax return"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: The Medicare Levy and Net Pay. Next: Tax Scenarios in a Spreadsheet.

#Year11Maths #MathsStandard #TaxReturn #HSCScience

## Open decisions

- **1. The pack's "same income, different year" (Ella's 2024-25 debt of $88).** Not used, because ruling 85 allows 2026-27 figures only; the "rates change" sentence stands alone. Root may allow the comparison as a labelled one-off if it wants the point made visually.
- **2. The site's withheld amounts.** Closed by ruling 96 (Revision 2): Priya's withheld is repriced to $16,950 (the tax and levy on her salary alone; refund $526, crossed slip $2,145) and Ella's to $4,800 (a debt of $120). Priya's e12 row does not change. Revision 1 text: Priya's $19,400 (and Ella's $5,100) are kept as given (pack decision: the site's structure). They are higher than the 2026-27 tables would withhold on those incomes, which makes the refunds larger than a typical real return. Root decides whether to keep them or reprice (the method is unchanged either way).
- **3. Two-jobs placeholders.** $13 and $24 a week; the debt follows the ATO rows.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e11-learning-review.md`; ruling 96). Next: Codex maths check and error check, after brief 256, step 1 fills the placeholders, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: Codex copies the two PAYG rows; then student learning review (trace from e10; check that the balance makes "bigger side wins" obvious, that "tax plus levy" is never dropped, that the chain cards keep the four steps visible, that the two-jobs scene explains the cause and not just the bill, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `ReturnSummary` before this video.
