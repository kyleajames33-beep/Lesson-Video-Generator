# bio-m6-b01 (mutation and new alleles): quality fix, 6 Nov 2026

Grade before: B (audit frames 6, 11, 13 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b01-sheet.jpg` (16 stills at the audit frames). I also checked stills in the middle of scenes 7, 12a and 12c.

Narration, audio and measured timing are unchanged. Every new animation is keyed to existing word cues in `docs/production/claude-pm/lessons/m6b01/measured/lesson.json`.

## Changes by scene

- **7. Replica plates (frame 6).** The apparatus is on screen from the first word: dish 1, dish 2 (at 35% until "then onto a dish") and the velvet pad resting at the right, each labelled at 34 px. The pad lifts over dish 1 on "velvet pad". The "1952" label moved to the top right so the pad never covers it.
- **12a. Exam question 1 (frame 11).** Painted bacteria (12 plates) fill the empty right side on "A patient's infection contains", labelled "about 10¹⁰ bacteria". One gains an amber resistance ring on "Before treatment" ("1 in 10⁸ resistant (amber)"). The answer box narrows to the left. Nothing shows the answer.
- **12c. Exam question 2 (frame 13).** The blue-tongue lizard plate appears with the stem ("island lizards"). Each event is drawn as it is read: (i) the sperm plate with a new-allele ring, (ii) two allele rings reshuffled, (iii) a skin cell. The events clear for the answer table, and the lizard parks at the top right.
- **13. Decision rule (frame 15).** All three step cards wait at 32% from the opening words and light on their cues. The fly is larger.
- **14. Key notes.** Eight one-line bullets at 34 px replace five paragraphs at 32 px. The framed memory aid is unchanged. (The narration only says "Here are the key notes".)

## Files touched

- `src/explainer/lessons/bio-m6-b01/s2.tsx` (scene 7) and `s4.tsx` (12a, 12c, 13, 14).
- New: `local-assets.ts` (lizard `y11-blue-tongue-lizard-v1.png`, sperm `b3a-sperm-v1.png`, with measured alpha boxes). `config.ts` adds them to the preload list.
- `assets.ts` and `parts.tsx` are untouched, because many M6 and M7 lessons import them.

The typecheck passes on the B01, B02 and B03 graphs (scoped tsconfig).

## Plates needed

None.

## Still to check

- At playback speed: the velvet pad's move from its resting place, and the lizard parking.
- One still-render pass showed partly drawn plates at frame 6; a re-render of that frame was clean, so this was an image-load race in the stills tool, not the scene.
- Ready to re-render on the existing narration.
