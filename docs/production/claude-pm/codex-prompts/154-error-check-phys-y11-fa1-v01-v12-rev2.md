# Brief 154: error check of phys-y11-fa1-v01 to v12 (Revision 2)

Read `00-standing-rules.md` and briefs 140 and 145 first. Root applied the brief 145 findings as Revision 2 on 2 November 2026. Error-only check: report errors, not new preferences. Do not spawn sub-agents. No design edits, speech, renders or commits.

For each of `lessons/phys-y11-fa1-v01.md` to `v12.md` (keys `p-y11-vNN`):
1. Each brief 145 finding is fully applied everywhere it appears, or its rejection is recorded with a sound reason in Review notes.
2. Every edited sentence is physically correct and grammatical; cue words still match the visual cues; recalculate every changed number (Python; `work/brief154/`).
3. Narration count by the build parser rules and timing; flag any lesson over about 570 s.
4. Opening frames: each lesson opens exactly on the previous lesson's handoff frame (series rule 16).
5. Root decisions in `checks/root-decisions-phys-y11-fa1-v01-v12.md` and `v13-v24.md` are reflected (colours, units, plate prefix, F_N).
6. No em dashes; Australian spelling.
Write `checks/p-y11-vNN-error-check.md`. Hand in to `status.md` with one line per lesson: errors (count and severity) or "clean, ready to voice after the brief 124 pilot".
