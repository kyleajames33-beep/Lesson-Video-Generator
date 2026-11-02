# Brief 159: error check of Year 11 Physics FA1 v13 to v24 and v26 to v31 (Revision 2)

Read `00-standing-rules.md` and briefs 149, 153 and 154 first. Root applied the brief 149 findings (v13 to v24) and the brief 153 findings (v26 to v31) as Revision 2 on 3 November 2026. This is an error-only check. Do not spawn sub-agents. Make no design edits, speech, renders or commits.

Check only lessons whose status line starts "Revision 2". List any that do not, and skip them.

For each of `lessons/phys-y11-fa1-v13.md` to `v24.md` and `v26.md` to `v31.md` (keys `p-y11-vNN`; v25 is on cultural hold):
1. **Findings applied.** Each review finding is fully applied everywhere it appears: speech, cards, Visual cues, notes, tables, Numbers used, author notes and the YouTube draft. Otherwise its rejection is recorded with a sound reason. Check these especially:
   - **v19:** the 0.1 s lurch numbers.
   - **v21:** the net force is drawn tail to tip, downhill. The weight angle is measured from the inward perpendicular, and v22 carries this through.
   - **v24:** the uncertainty wording, the conditional conclusions, and attempt 2's gap of 0.05 + 0.2 sin θ.
   - **v31:** repeat scatter only, the named measurement limits, the conditional conclusion, and attempt 2's offset against proportional discrepancy.
2. **Correctness.** Every edited sentence is scientifically correct and grammatical. Recalculate changed numbers in Python (`work/brief159/`). Cue words match the visual cues.
3. **Plate names.** Plate names are the delivered `phys-y11-` files in `public/assets/physics/`. No `y11p-` names remain.
4. **Length.** Check the narration count and timing, and flag any lesson over about 570 s. v24, v26, v30 and v31 sit at the cap with named reserve trims. v19 is accepted at 5,456 characters.
5. **Openings.** Each opening equals the previous lesson's handoff frame (series rule 16). This runs from v12 to v13 through v23 to v24, then v24 to v26, then v26 through v31. v22's new scope chip appears in v23's opening.
6. **Style.** No em dashes; Australian spelling.

Write `checks/p-y11-vNN-error-check.md`.

Hand in to `status.md` with one line per lesson. The line gives the errors (count and severity) or reads "clean, ready to voice after the brief 124 pilot".
