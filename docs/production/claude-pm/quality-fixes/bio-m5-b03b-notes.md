# bio-m5-b03b (reproduction in farming): quality fix, 6 Nov 2026

Grade before: B (frames 4 and 9). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b03b-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged; all new elements use existing word cues in `docs/production/claude-pm/lessons/b3b/measured/lesson.json`.

## Changes
- **Trade-off and cost (frame 4, `s2.tsx`).** The scorecard opens at 1.15 scale (it was 0.62), filling the left half, beside the painted Holstein cow (3 times larger) labelled 48 px. Just before "as milk yield rose", it eases to 0.8 scale in the lower left (it was 0.62), so its later cost and welfare cells are readable. The welfare note card moved 30 px right to clear it.
- **Model answer cards (frames 9 to 11, `s4.tsx`).** The cards are 1000 by 116 px with 30 px body text (were 960 by 106 at 25 px) and 42 px titles.
- **Judgement drawn (frame 9).** `JudgePanel` shows three unrelated bulls (painted, ringed in three allele colours) on "worthwhile". Arrows and beads then pass each bull's colour to only its own two cows on "only a share". On "health traits", a heart appears with "chosen for health too, not only milk" (40 px). The panel clears before the herd comparison.
- **Verdict.** The frozen-semen and heritage-breed boxes moved below the taller cards, with text at 30 px (was 25). "keep variety safe" moved to y 966.
- **Evaluate.** The criterion glosses are now 30 px (were 25).

No shared file was edited.

## Still to check
- At playback speed: the scorecard easing down as the studies panel slides in.
- Ready to re-render on the existing narration.
