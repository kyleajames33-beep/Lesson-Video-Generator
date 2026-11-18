# Maths S12 i05 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i05.md`, "Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it?" Source SHA256 `a4bd150d369a040eba12f964d06b455edd214b3232c890314ad0a8d3be79bc9e`.

Written design reviewed (narration, visual descriptions, spreadsheet, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i01 and i02a: both kinds of interest; a05: adding against multiplying; a04b: spreadsheet basics) as a Mathematics Standard student starting Year 12, once arriving from i03 (Standard 1, without i04) and once from i04 (Standard 2). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

This is a good comparison video and it works from both routes: nothing assumes i04. "They're equal, because in the first year there's no earlier interest to earn interest on" gives the reason for the surprise at year 1, the two stacks side by side then show the teal blocks starting to grow, and the differences rows (+300 every year against +300, +318, +337.08) give the reason for the line and the curve before the names "linear" and "exponential". Open decision 1: the two-row check is right and well taught; the "× A2" slip passes year 1 and fails at year 0, and the narration says so plainly. The given-graph scene serves Standard 1's "from a given graph" directly, and the 20-year gap ($5,035.68) makes the long-term point visible. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): simple 5,000 to 6,500; compound 5,300, 5,618, 5,955.08, 6,312.38, 6,691.13; gaps 0, 18, 55.08, 112.38, 191.13; steps 300, 318, 337.08, 357.30, 378.74; slip 0 and 5,300; 20 years $11,000 and $16,035.68 (MS-13), gap $5,035.68; 10 years $8,000 and $8,954.24, gap $954.24; A1 $5,849.29 with increases 200, 208, 216.32; A2 $20,500, $27,590.32, steps 700, 749, 801.43. All correct.

## Findings

1. **Should fix, scene 4 (the cell formulas are not tied to the formulas the student knows).** "Equals five thousand, plus five thousand times zero point zero six times A two" and "Equals five thousand times one point zero six, hat A two" are read as strings. A Standard 1 student meeting a spreadsheet for money will copy them without seeing that column B is i01's principal plus Prn and column C is i02a's PV(1 + r)ⁿ, with the year in column A as n. That link is what lets them write A1's C2 formula for a new rate rather than pattern-match. Fix. Narration, after the B formula: "That's the principal, plus P r n, with the year in A two as n." After the C formula: "That's PV times one plus r, to the power n." Visual: under each formula bar, 32 px tags under its parts, "5000: P", "0.06: r", "A2: n (the year)" for B, and "1.06: 1 + r", "^A2: to the power n" for C, with grey chips "i01: P + Prn" and "i02a: PV(1 + r)ⁿ". Students should be able to build either column for any principal and rate. Time: about 6 s against an 81 s margin.

2. **Optional, scene 5 ("select the two columns").** Charting only columns B and C makes most spreadsheet apps number the x-axis 1 to 6 instead of years 0 to 5. Say "select the year column and the two money columns" and outline A, B and C, so a student who tries it gets the same chart.

3. **Optional, scene 6 ("which looks steeper at the start").** "Don't be fooled by which looks steeper at the start. They both start together." The two graphs barely differ near the start, so the warning is hard to act on. Say instead: "Near the start they're almost on top of each other, so look further along. The one that bends upwards is compound." This is already one of the named reserve trims, so it costs nothing.

4. **Optional, key note 4 ("=P+P*r*A2").** Letters P and r will not work if typed into a cell, and a student copying notes may try. Write "=5000+5000*0.06*A2 and =5000*1.06^A2 (your P and r)".

## Joins

i03's right panel (Standard 1) and i04's final frame (Standard 2) are the same picture, and scene 1 opens on it; its grey chips recall i01 and i02a only, so a Standard 1 viewer meets nothing from i04. The two-route final frame matches the decisions file (the kettlebell and share row with "Yield: ?" for Standard 2; the four labelled objects for Standard 1), and the narration names each course (ruling 38).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's spreadsheet is needed and stays visible, and its "?" cell and A2's empty axes give nothing away. A1 asks three things in 10 s, which "Pause here to answer." covers. Feedback 1 (about 28 s) gives the column with its reason, the value, the formula and the crossed "× A2"; feedback 2 (about 28 s) gives both values, the reason for the curve and the crossed add-on. A coffee cart's savings is a real, fair anchor; 6% is said to be an example, "rates change" is said once, and the sources are i02a's (ruling 32).

## Key notes and length

The five notes are useful; the memory card's "(yearly compounding)" keeps the necessary condition. About 489 s with holds, 81 s under the cap.

No speech, design edits, builds or commits were made.
