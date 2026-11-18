# math-s12-c06: How does a spreadsheet model a project from its precedence table?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `cida841b0a`: Use a spreadsheet to model a project involving precedence tables and solve related problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 88. **Last critical path video.** **Standard 1:** not in the Standard 1 course (see c01).

**Entry knowledge:** math-s12-c02 to c05 (scans, float, critical path, changing durations). Year 11 spreadsheet formulas (cell references, fill down) from the money strands (for example math-s12-i13's loan spreadsheet).

**Prior video:** math-s12-c05.

**Start:** c05's final frame (proposed): the formal's precedence table typed into a spreadsheet, the EST column empty, "can a spreadsheet do the scans for us?".

**Stop:** One row per activity, ordered so each sits below its predecessors; columns Activity, Predecessors, Duration, EST, EFT, LST, LFT, Float, Critical?; EFT = EST + duration; EST = MAX of the predecessors' EFTs (0 for none): this is the forward scan; LFT = MIN of the successors' LSTs (the last activity's LFT = the project time, the largest EFT): the backward scan; LST = LFT − duration; float = LST − EST; Critical? = IF(float = 0, "YES", ""); three checks (no negative float, the YES rows form an unbroken chain, the critical durations add to the largest EFT); "what if" problems by changing one duration cell (site: F 5 to 6 absorbs, 7 delays). Final frame hands to math-s12-f01 (network flow).

**Next:** math-s12-f01.

## 2. Site order, sections and worked examples

Read-only source: [critical-path-analysis/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson03.sa.html), SHA256 `562cf13c015378f7626b2f1b2c6ad94691464f68f1a742f9b395dd8102dd485a`. Section used: `model-project` (card 4: the precedence table, the column formulas, the filled table, the three checks, "Now solve with it", the quick check). No labelled worked example.

### Source lesson03, card 4

Table: "A | – | 4; B | – | 3; C | A | 5; D | A, B | 2; E | C | 3; F | D | 5; G | E, F | 2". Formulas: "EFT in column E is =D2+C2"; "EST in column D is the latest of its predecessors' finish times, so =MAX(E6,E7) for activity G, and plain 0 for A and B"; "LFT in column F is the earliest of its successors' latest starts, so =MIN(G4,G5) for activity A. The last activity is the exception: its LFT is the project duration, =MAX(E2:E8)"; "LST in column G is =F2-C2, and float in column H is =G2-D2"; "Critical? in column I is =IF(H2=0,"YES","")". Result: "The project takes 14 days and the critical path is A → C → E → G. Activity B can start up to 2 days late ... and D and F have 1 day each". Checks: "No float may be negative ... The YES cells must join up ... Add the critical durations independently. Here 4 + 5 + 3 + 2 = 14".

## 3. Recalculation

- Site table: EST 0, 0, 4, 4, 9, 6, 12; EFT 4, 3, 9, 6, 12, 11, 14; LST 0, 2, 4, 5, 9, 7, 12; LFT 4, 5, 9, 7, 12, 12, 14; float 0, 2, 0, 1, 0, 1, 0. 14 days; critical A, C, E, G. F = 6: 14 days, a second critical path A, D, F, G (B float 1). F = 7: 15 days, critical A, D, F, G only.
- Formal (c04's table) in the sheet: 8 weeks; floats B 4, D 4, E 5.
- Question 1: A 3 (–), B 2 (–), C 4 (A), D 6 (A, B), E 2 (C), F 3 (D, E). EST 0, 0, 3, 3, 7, 9; EFT 3, 2, 7, 9, 9, 12; LST 0, 1, 3, 3, 7, 9; float 0, 1, 0, 0, 0, 0. 12 days; two critical paths A-D-F and A-C-E-F. Question 2: C = 6 gives 14 days; critical A, C, E, F; float B 3, D 2.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`), which uses the same column logic as the spreadsheet. All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Rows out of order, so a MAX refers to a cell not yet calculated.
- Typing the project time into the last LFT by hand (it must be =MAX of the EFT column, or a duration change will not flow through).
- MIN of the successors' EFTs instead of their LSTs.
- Reading "no YES change" as "no change" after an edit (check the finish time cell too).
- Using MAX in the backward column.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A coded spreadsheet with the formal's rows; each column fills by its formula, one column per narrated step, the formula shown in the formula bar and the referenced cells outlined (the forward scan as arrows down the EST column, the backward scan up the LFT column).
- The network beside the sheet, its node boxes filling from the sheet's numbers (one state, two views).
- A "what if" edit: type 6 into F's duration and watch float and YES cells change; then 7 and the finish cell turns from 14 to 15.
- The three checks as tick stamps.

Advanced reuse (visual parts only): the spreadsheet board used in the money strand (`finance-parts.tsx`; the loan and annuity sheets) if it supports formula display and cell outlines; otherwise a new `ProjectSheet` (see kit needs). Plates: none required.

## 6. Two original candidate practice questions

### Question 1

A project is modelled in a spreadsheet with the rows A 3 (–), B 2 (–), C 4 (A), D 6 (A, B), E 2 (C), F 3 (D, E). (a) Write a formula for the EST of D if A's EFT is in E2 and B's EFT is in E3. (b) Complete the EST, LST and float for each activity. (c) State the minimum completion time and the critical path or paths.

**Worked answer:** (a) =MAX(E2,E3). (b) EST 0, 0, 3, 3, 7, 9; LST 0, 1, 3, 3, 7, 9; float 0, 1, 0, 0, 0, 0. (c) 12 days; two critical paths, A-D-F and A-C-E-F.

### Question 2

In the spreadsheet from Question 1, the duration of C is changed from 4 to 6. What is the new minimum completion time, which activities are now critical, and what is the float of D?

**Worked answer:** 14 days; A, C, E, F are critical (A-C-E-F = 14, A-D-F = 12); D's float is 2 days.

Only the question goes on the card (Question 1 with the sheet's empty columns). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (a) "=MIN(E2,E3)", crossed, "D waits for both: the larger finish"; Question 2 "13 days, adding 2 to one path only", crossed, "C is critical, so the whole 2 days count: 14").

## 7. Everyday anchors

- **Organising a school formal:** the c04 table in a sheet; the venue booking runs over and the sheet updates (school; invented).
- **The backyard shed:** "what if the kit is 3 days late?" by editing one cell (home; from c03).
- **The café's morning prep:** a sheet the manager reuses each day (work; from c01).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): spreadsheet scenes elsewhere (i13, i17a) model loans and interest, not projects. Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

No new error in the section used.

Decisions for Claude:

- **Course spreadsheet style:** match the money strand's spreadsheet look (cells, formula bar) so students meet one visual system.
- **Keep the site's table** as the worked model (its formulas are complete and correct); the formal can be the opening context.
- **Pace: fits.** Columns, checks and two what-if edits fit 6 to 8 minutes.
- **Join to f01 (final frame, proposed):** the formal is done; next, a stadium before the grand final: arrows from the train station plaza through two concourses to the gates, each with a number of people per minute, "how many people a minute can the gates take?". Chip: "Critical path analysis: done".

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
