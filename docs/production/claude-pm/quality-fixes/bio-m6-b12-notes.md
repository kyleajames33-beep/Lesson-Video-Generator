# bio-m6-b12 (biotechnology and biodiversity): quality fix, 6 Nov 2026

Grade before: C (audit frames 6, 7 to 9, 10, 11, 13 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b12-sheet.jpg`. It holds 16 stills at the audit frames (443 to 13735). I also checked 14 stills from the middle of scenes 4 to 10.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b12/measured/lesson.json`.

## Changes by scene

- **4, 5, 7 and 8. The levels board (rebuilt to be readable).** A new lesson-local board (`big.tsx`) replaces the old one in these scenes. Row labels are 40 px, column titles 44 px and the baseline chip 30 px. The old cells were 23 px. The board has three layouts:
  - `crop` (scenes 4 and 5): two wide crop cells, with 32 px captions and a 28 px "vs ..." line;
  - `cons` (scene 7): one wide conservation cell per row, with 34 px captions;
  - `both` (scene 8): both columns, with short 28 px captions and a side panel.
  - On-screen captions are shortened to fit (for example "adds one useful gene / vs ordinary Cavendish"). The narration is unchanged.
- **4. Banana.** The banana pair, the trial plot and the clone strips are larger, with labels from 30 to 38 px. "The crop's gene pool stays very narrow" lands on "very narrow".
- **5. Field.** The Bt cotton plate is larger, with full-width spray bars. The herbicide-tolerant row, the wildflowers and the bees are larger, and the farm and bush blocks are bigger. Labels are 30 to 38 px.
- **6. Rhino rescue (rebuilt).** The scene opens on one rhino at 860 px wide. It splits into Najin and Fatu on "two remaining females" (the second plate is mirrored), and "2018: the last male died" appears at 46 px. On "collect eggs", both rhinos move to the top left. The process then runs across the frame:
  - the ICSI plate at 460 px ("fertilised in the lab");
  - the banked sperm straw;
  - four painted early-embryo plates in a dashed frozen box ("39 embryos (2026)");
  - the sepia southern white surrogate at 500 px, with the definition at 54/40 px and "no pregnancy has lasted yet".
- **7. Tracing the rhino.** The rhino is larger (440). The gene-pool panel is larger, with 20 px rings, and so is the bottleneck. The skin-cell route is labelled "frozen skin cells from about a dozen rhinos".
- **8. Yield.** The "more yield" pill is 44 px with a large cross, and "not a level of biodiversity" is 40 px. The model sentence is 36 px. The land blocks are 440 px wide, and the closing line "compare a modified crop with the farming it replaces" lands on its cue.
- **9. Memory (rebuilt).** The TR4 plantation fills the frame under "The banana problem returns.". Then cloning (the clone row), one popular variety (the Cavendish) and one top sire (the bull) appear large, each with a 40 px label. A ten-ring gene pool narrows to one repeated pair on "narrows the gene pool", and a red outline shows "one disease can hit them all at once". The level chips and a "compared with: ..." chip close the scene.
- **10a. Exam question 1.** While the stem is read, the givens are drawn large in the empty card:
  - kale plants (the crop);
  - wild mustard (a real wild relative of brassicas), across a dashed field edge;
  - a knapsack sprayer with drifting spray.
  - No pollen or allele change is drawn, because that is the answer. On "Explain how", the picture moves into the right column and the answer box narrows to fit.
- **10b. Feedback 1.** The coded field half becomes the same kale row, for consistency.
- **10c. Exam question 2.** The chestnut plate (330 px) fills the card while 38 px tags state the givens. It moves to the top right when the demand arrives.
- **10d. Feedback 2.** The chestnut plate sits in the empty right side.
- **11. Decision rule.** All four step cards wait at 35% from the start and light on their cues. Each card carries its level's icon. "Which way, and why?" is 46 px, with up and down marks.
- **12. Key notes.** Nine one-line bullets at 34 px replace five paragraphs at 27 px. The framed memory aid is unchanged.

Scenes 1 to 3 are unchanged; the audit did not flag them.

## Files touched

- `src/explainer/lessons/bio-m6-b12/s1.tsx` (scenes 4 and 5), `s2.tsx` (scenes 6 to 9), `s3.tsx` (scenes 10a, 10b, 10c, 10d, 11 and 12).
- `assets.ts`: adds `embryo` (`b3a-cleavage-5-v1.png`), `sprayer` (`m7-insecticide-sprayer-v1.png`), `mustard` and `kale`. The last two are one plant each from `y11-brassica-crops-v1.png`, with boxes measured per plant and drawn clipped. The existing keys are unchanged.
- New: `big.tsx` (`BigBoard`, `BigHead`, `BigCell`, `CropCells2`, `ConsCells2`, `ClipPl`).
- `parts.tsx` is untouched, because B13 and B15 import it. No shared kit or legacy file was edited.

The typecheck passes on the B12, B13, B15, B16 and B18 graphs.

## Plates needed

None required. An optional upgrade is an American chestnut tree pair (healthy and blighted) for item 2, which would replace the burr-and-leaf plate. The northern white rhino plate stands in for the southern surrogate (it is tinted and labelled), as before.

## Still to check

- Judge at playback speed: the rhino split and move, the givens picture moving into the right column in item 1, and the gene-pool ring swap in scene 9.
- Ready for Codex to re-render on the existing narration.
