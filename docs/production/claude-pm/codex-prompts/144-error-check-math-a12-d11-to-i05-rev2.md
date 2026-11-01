# Brief 144: error check of math-a12 d11 to d19 and i01 to i05 (Revision 2), plus confirmation of the brief 140 fixes

Read `00-standing-rules.md` and briefs 140 and 142 first. Root applied the brief 142 findings as Revision 2 on 2 November 2026 (and root edited d10's handoff to "Later in the course", +12 characters). This is an error-only check: report errors, not new preferences. Do not spawn sub-agents. No design edits, speech, renders or commits.

## 1. Maths d11 to i05 (Revision 2)
For each of `lessons/math-a12-d11.md` to `d19.md` and `i01.md` to `i05.md` (keys `m-a12dNN`, `m-a12iNN`), and for `math-a12-d10.md` (handoff edit only):
1. Each brief 142 finding is fully applied everywhere it appears (speech, cards, visuals, notes, tables, Numbers used, author notes, YouTube draft), or its rejection is recorded with a sound reason in Review notes.
2. Every edited sentence is mathematically correct and grammatical; cue words still match the visual cues; recalculate every changed number (SymPy in `work/brief130-python`).
3. Narration character count by the build parser rules and the timing; flag any lesson over about 570 s.
4. Opening frames: each lesson opens exactly on the previous lesson's handoff frame (d10 to d11 through i04 to i05). Series rule: the handoff frame is the video's last frame (`checks/root-decisions-bio-y11-fa1-v01-v06.md` decision 16).
5. No em dashes; Australian spelling.
Write `checks/m-a12dNN-error-check.md` / `m-a12iNN-error-check.md`.

## 2. Confirm brief 140 fixes
Root applied every brief 140 finding on 2 November (see `checks/root-decisions-bio-y11-fa1-v01-v06.md` decisions 16 and 17). Confirm each is applied and correct in `chem-m5-g02b.md` and `bio-y11-fa1-v01.md` to `v06.md`; append a short "Brief 144 confirmation" section to each existing `checks/*-error-check.md`.

Hand in to `status.md` with one line per lesson: errors (count and severity) or "clean, ready to voice after the brief 124 pilot" (g02b: "clean, ready for the December ElevenLabs cycle").
