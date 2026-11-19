# Maths S11 e12 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e12.md`, "How does a spreadsheet test different tax scenarios?" Source SHA256 `5754c063b30e4538716a83f04d89e3fcf29cb5f0f0b353857729081808dc1e68`.

Written design reviewed from its stated entry knowledge (f08 fill-down; e06 formulas and $; e08 the table; e10 the levy and net; e11 Priya's row) as a Year 11 Standard student. No built preview, spreadsheet run, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

A good strand close. The pay-rise worry is tested on five scenario rows and a graph that bends at $45,000 but keeps rising ("83c kept per extra dollar, then 68c"), and e01's two job ads return after tax (Job B still ahead, by $955.81, because 32c of each extra dollar goes). The formula is checked on a known row (Priya's $14 805), a habit worth teaching. Recalculated with SymPy: the supplied nested IF equals the 2026-27 table at every income used; rows 40k to 50k (3270/800/35 930, 3870/880/39 250, 4020/900/40 080, 4320/920/40 760, 5520/1000/43 480); Job A 9720, 1280, 53 000; Job B 65 405.60, 10 141.68, 1308.11, 53 955.81, gaps 1405.60 and 955.81, lost 449.79; A1 7920, 1160, 48 920, slip 158.40; A2 59 740, 8442, 1194.80, 50 103.20, +1183.20, 556.80. All correct.

## Findings

1. **Should fix, scene 3 (ruling 94 not yet applied: a single IF, not a nested IF).** Ruling 94 asks for a single IF per rule for Standard 1 load. The supplied five-level formula is about 150 characters of brackets; even read piece by piece it is the heaviest screen in the strand. Every income in this video and its attempts lies between $18 201 and $135 000, so one IF covers them all (SymPy check: equal to the table at all ten incomes used). Replace the formula with `=IF(A2<=45000,0.15*(A2-18200),4020+0.3*(A2-45000))` and a grey chip "for incomes from $18 201 to $135 000". Narration: "Here's a formula that gives the tax from the table, for incomes between eighteen thousand two hundred and a hundred and thirty-five thousand. It asks one question. Is A two up to forty-five thousand? If yes, the tax is fifteen per cent of the amount over eighteen thousand two **hundred**. If not, it's four thousand and twenty, plus thirty per cent of the amount over forty-five **thousand**. Each answer is one row of the tax table. You don't need to build it from scratch, but you do need to read it. Check it on Priya's income, eighty thousand nine hundred and fifty. It gives fourteen thousand eight hundred and five, matching the **table**." The reader shows two pieces beside rows 2 and 3. Key note 3: "Tax formula: =IF(A2<=45000, 15c row, 30c row); check it on a known row." The memory card stands. A1's card already says "the tax formula from the 2026-27 tax table", so it needs no change. Students should be able to read the formula's one question and match each answer to a table row. Root confirms this reading of ruling 94.

2. **Optional, scene 4 (the reason is not said here).** "So a pay rise never leaves you worse off" follows five rows and a graph, but the cause (each extra dollar loses at most its row's rate plus the levy, so some of it is always kept) is only in the teaching checks. Before "So a pay rise", add: "Each extra dollar loses at most its row's rate plus the levy, so part of every dollar is kept." About 4 s.

## Joins

e11 to e12: scene 1 opens on e11's final frame exactly (Priya's row and the empty row 3). e12 to m01: provisional (ruling 87); `lessons/math-s11-m01.md` does not exist yet, so the "+3%" swing-tag frame and the "Next" line wait for the m01 designer. Only scene 11 changes if it is replaced.

## Practice and feedback

Both cards keep the full question and the 2026-27 table on screen. Feedback about 27 s and 30 s, each with one crossed slip ("2% of the tax", "all at 30%"). A2's "(c) explain why" is answered in one sentence with the 32c reason. Two job ads are an everyday anchor; no people drawn.

## Key notes and length

Five notes. 0 em dashes. 4,760 characters, about 448 s, 122 s under 570 s; finding 1 is about length-neutral (scene 3 loses the two-pieces-in-one sentence and gains the range).

No speech, design edits, builds or commits were made.
