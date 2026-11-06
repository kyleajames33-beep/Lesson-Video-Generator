# bio-m5-b05a (mitosis): quality fix, 6 Nov 2026

Grade before: B (frames 3, 4, 11 and 12). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b05a-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every new element uses existing cues in `docs/production/claude-pm/lessons/b5a/measured/lesson.json`.

## Changes
- **New lesson-local `pnuc.tsx`.** It provides the painted nucleus close-up (`cd-nucleus-zoom-empty-v1.png`, uniform scale) and preloads it with the painted chromosome plates. It follows the owner's 20 Oct direction: a nucleus zoom with large painted 2n = 4 chromosomes. `cd.tsx` and `chrom.tsx` are shared with B5b, B6a and Module 6, so they were not edited. The plate was added to `assets.ts`.
- **Why copy first (frame 3, `s2.tsx`).** The coded oval cell became the painted nucleus, holding four painted chromosomes (ChromP) above the nucleolus. The cut shows the long chromosome splitting into two greyed painted halves. "Shared out" shows two painted daughter nuclei, each with only one set. "Copy first" now shows a painted copied chromosome, not the coded document icon.
- **What the copy looks like (frame 4).** The painted nucleus zooms in. The painted chromosomes duplicate into Xs on cue, with chromatid highlights, the centromere ring, the bracket and the centromere count. The count line sits on a cream backing.
- **Interphase ring (frame 5).** The coded cell became a small painted nucleus with painted, still uncoiled chromosomes that duplicate in S phase.
- **Accurate, not perfect (frame 11, `s4.tsx`).**
  - The coded metaphase cell became the painted metaphase cell. It dissolves into the painted anaphase cell as the chromatids travel.
  - Both cells are scaled 1.2, so the centrosomes sit on the model poles. The chromatids stop inside the clear spindle zone.
  - The chromosomes are painted, and the 5 and 3 counts still tap on cue.
  - The copying-mistake chromosome and the small "descendant" cells are painted too (a nucleus close-up with a painted chromosome).
- **Your turn (frame 12, `s5.tsx`).** Both question cards and their pictures arrive with the title. The text still fills as it is read.
- **Question 2 cell (frames 13, feedback two).** The coded outline cell with bars became the painted metaphase cell with six painted copied chromosomes. Centromere discs are still hidden in the question and tapped in the feedback.
- **Key notes (frame 16, `s6.tsx`).** Five dense paragraphs became 8 short lines at 38 px, plus a framed aid: "IPMAT (I comes first and is not part of mitosis)" and "Count centromeres, not chromatids".

## Left as is
- Tracking (frame 9) and feedback one (frame 14) keep the small coded counting diagrams (outline cells with bars). The audit did not flag them. They are abstract counters, not cell pictures. If the owner wants them painted too, use the same `PNuc` and `Chrom` pieces.

## Still to check
- At playback speed: the metaphase-to-anaphase plate dissolve, and the chromosomes moving into the daughter nuclei in "why copy first".
- Ready to re-render on the existing narration.
