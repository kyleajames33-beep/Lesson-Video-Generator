# Brief 160: error check of math-a12-t01 to t04 and Year 11 Biology FA1 v13 to v31 (Revision 2)

Read `00-standing-rules.md` and briefs 150, 153 and 158 first. Root applied two sets of findings as Revision 2 on 3 November 2026:
- the brief 153 findings for t01 to t04, with root decisions 21 and 22 in `checks/root-decisions-maths-d11-i05.md`;
- the brief 150 findings for Biology v13 to v31.

This is an error-only check. Do not spawn sub-agents. Make no design edits, speech, renders or commits.

Check only lessons whose status line starts "Revision 2". List any that do not, and skip them.

| Designs | Keys | Notes |
|---|---|---|
| `lessons/math-a12-t01.md` to `t04.md` | `m-a12tNN` | The syllabus form y = k f(a(x + b)) + c is used everywhere, with a grey note for other sources' form. Every spoken fraction is "x over y". t03's attempt parts are relabelled (i) and (ii). Check t04's reference intensity and simplified magnitude wording. |
| `lessons/bio-y11-fa1-v13.md` to `v31.md` | `y11b-vNN` | The blockers in v27, v30 and v31 are fully resolved. Plate names match `assets/brief150-manifest.json`. |

For each lesson:
1. **Findings applied.** Each review finding is fully applied everywhere it appears. Otherwise its rejection is recorded with a sound reason.
2. **Correctness.** Every edited sentence is scientifically or mathematically correct and grammatical. Recalculate changed numbers in Python and SymPy (`work/brief160/`). Cue words match the visual cues.
3. **Length.** Check the narration count and timing, and flag any lesson over about 570 s.
4. **Openings.** Each opening equals the previous lesson's handoff frame (series rule 16):
   - Maths: i05 to t01, then t01 through t04.
   - Biology: v12 to v13 through v30 to v31, and v31 to `bio-y11-fa2-v01`.
5. **Style.** No em dashes; Australian spelling.

Write `checks/<key>-error-check.md`.

Hand in to `status.md` with one line per lesson. The line gives the errors (count and severity) or reads "clean, ready to voice after the brief 124 pilot".
