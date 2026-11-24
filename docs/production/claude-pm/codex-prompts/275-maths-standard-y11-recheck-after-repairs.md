# Brief 275: Year 11 Maths Standard, re-check after root's preflight and fact repairs, then continue briefs 271 and 272

Read briefs 271 and 272; they still govern the method, plates and voicing. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone.

## What root changed (25 November 2026)

All 54 designs, `lessons/math-s11-*.md`, now end with "Revision 3 (root, 25 November 2026)". The per-design log is `checks/m-s11-preflight-repair-2026-11-25.md`.

- **Counts:** every declared narration count now equals the sum of its scene strings, counted your way.
- **Cue fixes:** the nine cue-order and cue-not-verbatim findings are fixed (a01, a02, d02, d04, d05, d09, d13, n04 and t03).
- **m06 blocker:** fixed. B10 holds `=SUM(B4:B9)`. The wrong grand total sits in B13 as `=SUM(B4:B10)` and doubles to $10,816. There is no circular reference.
- **Facts applied:**
  - m05 now uses the $42 transfer fee, which changes its totals. m06 carries those totals forward.
  - a03's pool depth is now stated as an assumption.
  - d01 and d16 state the 14 to 17 age range. d19's sleep card is updated.
  - m07's example rates are now labelled as examples.
- **Voicing holds lifted:** m05, m07, a11, d01, d16 and d19 each carry the revision line that lifts their voicing hold.
- **Dashes:** the remaining en dashes in screen labels and notes are gone (12 designs). Number ranges now read "to", and path labels are hyphenated (T-L-R-V).

## Task

1. **Re-run the source preflight on all 54 designs.** Record each new SHA-256.
2. **Run the full maths check** that briefs 271 and 272 left pending:
   - arithmetic, recomputed;
   - joins in playlist order;
   - anchors;
   - the brief 271 and 272 focus points.
   Check in particular:
   - the m05 and m06 totals and practice answers: $16,647, $43,687 and $11,226;
   - the m06 B13 example;
   - that m08's reuse of $761.21 still matches m07.
3. **One extra fact for step 1:** the New Zealand GST rate that m02 uses (15%), from an official New Zealand government source, dated.
4. **Continue as briefs 271 and 272 say:**
   - Paint the plates first.
   - Then voice in playlist order, after the voicing already queued.
   - Then write the measured lessons.
   - A design with any blocker or should-fix item stops and is listed for root.

## Hand-in to `status.md`

One block per design: check result, SHA-256, whether prepared, planned voicing night. Then the plate manifest paths. Human listening stays pending.
