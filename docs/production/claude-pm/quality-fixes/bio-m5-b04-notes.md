# bio-m5-b04 (DNA replication): quality fix, 6 Nov 2026

Grade before: B (frames 1, 11, 15 and 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b04-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every new element uses existing cues in `docs/production/claude-pm/lessons/b4/measured/lesson.json`.

## Changes
- **Hook question (frame 1, `s1.tsx`).** The painted double helix (`b5x-zoom-helix-v1.png`, uniform scale, lying across the frame) settles in as the book fades, under "How does DNA copy itself so accurately? and what happens to the original?".
- **Bacterium (frame 11, `s4b.tsx`).** The small coded capsule became the painted B1 binary fission series (`b1-fission-1/2/3`) at 1.15 scale, which fills the frame. The plates dissolve from one cell, to pinching, to two cells on "splits in two". The two copies (changed and normal, 0.6 scale) ride below and separate with the cells. "changed pair" and "normal" labels (42 px) land on "only one of the two new cells".
- **No people.** The coded child figure on "reaches children" became the painted early embryo (`b3a-cleavage-4-v1.png`), standing for the offspring.
- **Half old, half new (frame 15, `s5.tsx`).** The starting molecule is on the board from the first word. On "half old", semi-conservative replication happens on screen: the two daughters slide out of the parent, each with one old (heavy) strand and one new strand. "each copy: one old strand and one new strand" appears with them. The board is 1.12 times larger.
- **Key notes (frame 16, `s5.tsx`).** Six dense paragraphs became 7 short lines at 38 px, plus a framed memory aid: "Apple in the Tree, Car in the Garage" and "Half old, half new".

`dna.tsx` (imported by B6b, B6c and B7) was not edited.

## Still to check
- At playback speed: the fission dissolve on "splits in two", and the daughters sliding out on "half old".
- Frame 15 itself is still sparse for about one second, before the copy starts on "half old".
- Ready to re-render on the existing narration.
