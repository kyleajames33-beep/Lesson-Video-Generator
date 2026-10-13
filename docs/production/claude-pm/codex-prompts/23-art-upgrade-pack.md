# Brief 23: painted art upgrades for built Module 5 lessons

Read `00-standing-rules.md` first, then follow the "Style for every image" section of `01-assets-wave1-c1-b1.md` exactly: ink and watercolour textbook plate, **transparent PNG with a real alpha channel**, no text, labels, arrows or numbers, no halo, at least 1600 px on the long side, at least 8% empty margin. Match the style of the named existing plate for each item so the lesson keeps one look. These replace simple coded stand-ins in lessons that are already built, so the subject must read clearly at small size (check each at 200 px tall).

Where a set is "aligned", every image in the set uses the same canvas size and the shared object does not move or change size between images (they crossfade in the video); check by overlaying.

## B3b, reproduction in agriculture (match `public/assets/biology/b3b-dairy-bull-cow-v1.png`)

1. `b3b-dairy-cow-side-v1.png`: one Holstein dairy cow, full body, side view facing right, standing, black and white patches, udder visible.
2. `b3b-dairy-bull-side-v1.png`: one Holstein bull, full body, side view facing right, heavier neck and shoulders, no udder.
3. `b3b-calf-side-v1.png`: one young Holstein calf, side view facing right.
4. `b3b-merino-sheep-side-v1.png`: one merino sheep (ram, no horns or small horns), full body, side view facing right, white fleece.
5. Same scale relationship across 1 to 3 (cow and bull similar size, calf about half height), each on its own canvas of the same size so they line up in a row.

## C5, equilibrium expressions (match `public/assets/chemistry/c3-iron-tube-start-v1.png`)

6. Aligned pair, same test tube and rack position: `c5-copper-tube-pale-v1.png` (clear pale blue copper(II) sulfate solution) and `c5-copper-tube-deep-v1.png` (the same tube, deep royal blue tetraamminecopper(II) solution). Only the liquid colour changes.

## B3a part 2, pregnancy hormones (match `public/assets/biology/b3a-tract-thick-lining-v1.png`)

7. `b3a2-ovary-closeup-v1.png`: a close-up of one human ovary in section, with several small follicles and one larger follicle containing an egg, clean organic edge all round (it replaces a hard rectangular crop of the tract plate), so it can sit in a round inset.
8. Aligned pair with 7 (same ovary, same canvas): `b3a2-ovary-no-ripening-v1.png`, the same ovary where the large follicle is absent and only small follicles remain (no egg released), for "no follicle matures enough to release an egg".

## B5a mitosis and B5b meiosis (match `public/assets/biology/b2c-amoeba` style plates in `public/assets/biology/`)

9. Read the "Codex asset brief" sections at the end of `docs/production/claude-pm/lessons/bio-m5-b05a.md` and `bio-m5-b05b.md`. In brief 20 you skipped the items marked optional. Make them now, following those instructions exactly. If an item would need chromosome counts drawn, keep it chromosome-free (chromosomes are coded in the video so counts stay exact).

## Record

Write `docs/production/claude-pm/assets/art-upgrade-23-provenance.json` (same fields as earlier provenance files: file, prompt, model, retakes, sha256, checks) and keep QA images in `docs/production/claude-pm/assets/art-upgrade-23-qa/`. Open every PNG on a checkerboard and at 200 px before handing in; retake failures. Append a hand-in to `status.md`.
