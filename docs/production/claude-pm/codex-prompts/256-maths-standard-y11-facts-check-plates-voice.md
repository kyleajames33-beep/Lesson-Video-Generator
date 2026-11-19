# Brief 256: Year 11 Maths Standard f, l and e strands: official facts first, then maths check, plates and voice

Read `00-standing-rules.md`, `maths-visual-standard.md` and brief 251. Use brief 251's method, file formats, plate method and voicing settings exactly (Google voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone.

**Designs (30):**
- `docs/production/claude-pm/lessons/math-s11-f01.md`, `f02`, `f03a`, `f03b`, `f04a`, `f04b`, `f05`, `f06`, `f07`, `f08`.
- `math-s11-l01` to `l07`.
- `math-s11-e01`, `e02`, `e03`, `e04a`, `e04b`, `e05` to `e12`.

Playlist order: f, then l, then e. Root's rulings are in `checks/root-rulings-maths-standard-outline.md` (rulings 84 to 95 apply here). Claude runs the learning reviews and resolves them. **Steps 2 to 4 wait for each design to say "Revision 2"** (or later) at the top. Step 1 can start now.

## Step 1 (start now): official facts the designs leave as placeholders

Write `checks/maths-standard-y11-official-facts.md`. For each fact, give the value, the source page's title and URL, the date you read it, and the exact place it goes (design, scene, chip). Use official pages only (ato.gov.au, fairwork.gov.au, legislation.gov.au, educationstandards.nsw.edu.au). Mark any value you cannot confirm "not confirmed"; never estimate.

1. **e09 and e11 (ruling 85):** the 2026-27 PAYG withholding rows the designs use, from the ATO's statement of formulas or weekly and fortnightly tax tables (NAT 1005 and NAT 1006, or their 2026-27 successors). Give each row the design names, both with and without the tax-free threshold claimed, and confirm that the tables apply from 1 July 2026.
2. **e07:** the ATO's current pages on work-related deductions the design quotes (protective clothing and footwear, the receipts rule, and anything else the design names). Quote the rule in plain words with the page date.
3. **e10:** the Medicare levy rate and the low-income threshold for singles **in force for 2026-27 (legislated, not proposed)**. If the 2026-27 threshold is not yet legislated, give the latest legislated one and say which year it is for.
4. **e01 to e04b:** confirm the national minimum wage of $26.44 an hour ($1,004.90 for 38 hours) from 1 July 2026, and the 12% super guarantee rate.
5. **e08:** confirm the 2026-27 resident tax rates and thresholds the design uses.
6. **f07 (ruling 89):** the exact forms of Young's, Clark's and Fried's formulas and their age ranges, as printed on the NESA Mathematics Standard 2024 reference sheet. Report any difference from the design.
7. **f05 and f06:** the BAC formula forms and constants on the same reference sheet. Confirm the design matches them.

Root edits the designs from this file. Hand in a short `status.md` block when it is done.

## Steps 2 to 4 (per design, once it is Revision 2)

- **Step 2: maths check** in brief 251's format, at `checks/m-s11-<id>-maths-check.md`, with scripts in `work/brief256/`. Joins run in playlist order. f08's final frame must match l01's opening, and l07's must match e01's opening. e12 to m01 is provisional.
- **Step 3: anchor check and plates.** Paint every new `ms11-` and `ms11s-` plate named in the designs' asset briefs, one video early (ruling 17). Report it in `assets/brief256-manifest.json`.
- **Step 4: voice** in playlist order, after the voicing already queued in brief 000 (Year 12 Maths, brief 236, briefs 247 to 249, then 251 to 255). Write `docs/production/claude-pm/lessons/math-s11-<id>/measured/lesson.json`. **Do not voice e07, e09, e10, e11, f05, f06 or f07** until root has applied the step 1 facts and the design's revision note says so.

**Hand-in** to `status.md`: one block per design.
