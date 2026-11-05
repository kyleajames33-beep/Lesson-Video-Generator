# bio-m7-b11 (antibiotics and antivirals): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 6, 7, 8, 9, 11, 13 and 16). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b11-sheet.jpg`. It holds 16 evenly spaced stills at the audit frames. Frames 2 and 6 fall 2 to 3 frames into a scene, so they show the cross-fade. I also checked 11 extra stills taken in the middle of scenes.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues from `docs/production/claude-pm/lessons/m7b11/measured/lesson.json`.

## Changes by scene (new variants in big.tsx and exam.tsx)

- **2. Selective toxicity (rebuilt).** The two large panels are side by side: the painted bacterium (820 px wide) and one of your cells (500 px). Each lights on "pathogen" and "host". Rings mark the wall ("you have none", with a dashed "no wall" around the host cell) and the ribosomes ("a different form"). All four target rings blink on "plenty of parts". The definition is a 46 px framed tag.
- **3. Antibiotic targets (rebuilt).** The bacterium is the 1000 px hero. Penicillin docks on the wall, and a 600 × 260 mesh inset loses cross-links. Osmosis arrows push in, and the painted burst plate crossfades on "bursts". A painted host cell gets a tick ("no wall"). For the ribosomes, the painted ribosome (300 px), tetracycline and a protein chain stop. Labels are 38 to 72 px.
- **4. Nothing to hit (rebuilt).** The painted virus (560 px) carries leader labels: genes (RNA) and a protein coat. "No wall" and "no ribosomes" are struck through. The virus shrinks into the 780 px airway cell, which turns infected, and new viruses are released. Both drugs fly in and are crossed. Sixteen throat and gut bacteria (120 px) follow, and the resistant ones multiply.
- **5. Antivirals block a step.** The infected cell is 800 px tall, with the painted virus and its tool rings. A larger step strip (84 px pills, 42 px text) takes 34 px drug blocks on cue. Release-blocked viruses "stay stuck".
- **6. Stopping new viruses.** The painted macrophage is 330 px. A crossed mistake fades out before a large timeline. Rows of painted airway cells (250 px) show day 1 against later days. Seven painted blister packs against two show "far fewer antivirals".
- **7. Resistance (rebuilt).** Twenty-four large bacteria are on screen from the start, with two resistant. The painted agar plates (before, then after) show the same selection. "The drug selects resistance. It doesn't create it." is 58 px. Then come the 860 px conjugation plate, the plasmid tag and the crossed "my body is resistant".
- **8. Three drugs at once.** A field of 36 painted copies, with variants haloed, shows "billions a day". The big step strip and larger viruses (80 px) follow, with 50 px text.
- **9. Using drugs well (rebuilt).** It is a 2 × 2 grid of painted cards (virus, pig, blister pack, hospital bed), dim until each lights on its cue, with 48 px text.
- **10. How effective.** The table fills as narrated, with painted column heads. Rows appear on "how safely", "how many" and "how long", and each cell appears on its own cue at 40 px. The 2021 burden and the verdict are 40 to 52 px tags.
- **12a / 12c. Exam items.** The question text narrows to 1060 px. The right column draws the givens as they are read: virus V with V polymerase, drug K docking, a human cell with "no enzyme like it" and "penicillin?". For item 2: ten painted particles for 10¹⁰ a day, one haloed at 1 in 100 000, then the drug A, B and C chips. The text, cues, pause line and countdown are unchanged.
- **14. Key notes.** Eight one-line bullets at 34 px plus the framed aid replace the five paragraphs at 23 px.
- The hook, memory, both feedback scenes and the decision rule are unchanged.

## Files touched

- `src/explainer/lessons/bio-m7-b11/big.tsx` (new): scene variants, `BigStrip`/`BigBlock`, exam pictures and notes text.
- `src/explainer/lessons/bio-m7-b11/exam.tsx` (new): the exam items and the key notes.
- `scenes.tsx`: maps the scenes to the variants.
- `assets.ts`: adds the pig, hospital-bed and two agar-colony plates.
- `s3.tsx`: `export` added to STEM1, DEM1, STEM2, DEM2, T1, T2, KA and KC only. There is no behaviour change.

`parts.tsx` is unchanged (bio-m7-b12 imports it). No shared kit or legacy file was edited. The typecheck passes.

## Plates needed

None. Every plate used already exists in `public/assets/biology/`.

## Still to check

- The virus plate (flu-like) also stands in for HIV in scene 8. It is tagged "stands for HIV", as before.
- Feedback 1 (frame 12) opens sparse for about 1 s, until its first answer row. It is unchanged.
- Judge the motion at playback speed after re-rendering, especially the virus moving into the cell (scene 4) and the strip blocks.
- Ready for Codex to re-render on the existing narration.
