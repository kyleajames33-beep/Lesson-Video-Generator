# bio-m8-b09 (how cancer begins and spreads): new build, 7 Nov 2026

Sheet: `bio-m8-b09-sheet.jpg` (16 evenly spaced stills over 15,167 frames, (i + 0.5) / 16 spacing; key notes held at 1,200 frames). Composition `Explainer-bio-m8-b09`, measured narration `docs/production/claude-pm/lessons/m8b09/measured/lesson.json`. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b09/`: `common.ts` (lookups, the two worded questions), `assets.ts` (18 plates, matched pairs on union boxes, feature points incl. the traced basement-membrane junction), `parts.tsx` (Spark, P53, Tissue, CycleRing, CloneTree, Pedal, PedalIcon, GeneChip, CauseChain5, DepthRuler, DnaKink, smoothPath), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 11), `s3.tsx` (12a to 14), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b07/parts` (board, RiskDial, Bracket, PreRing), `bio-m8-g01/board` via b07, `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import `config_m8b09` and the array entry (same edit as b10).

## Plates
All design-named plates exist and were inspected (contact sheet on a light board): cd-interphase, metaphase, anaphase, daughters, m8-cell-apoptotic, b5a graze and healed, m8 skin normal, melanoma and mole, m6-uv-skin, m8-sun-protection, m7-lymph-node, m8-lymph-node-melanoma, m8-melanoma-cells-vessel, m8 lungs, liver. None missing. Added: `b3a2-brain-v1.png` for "brain" (design had a grey word only).

## Departures from the design
- Heading on screen from frame 1 in every scene (house standard), not only on the hook's question cue.
- Cycle ring rotated (grow lower left, copy upper left, get ready upper right, divide lower right) so the spindle gate sits by its metaphase callout on the right and the G1 gate by its three question chips on the left.
- bio-m5-b05a gate icon, bio-m6-b02 DimerKink and bio-m6-b05 patch icon are not exported components; drawn locally (gate marks on the ring, a coded DNA kink with a spark in a painted zoom of the melanocyte layer, painted clone tree).
- Melanocyte callout is a 3.2x painted zoom of the normal skin plate (not a coded cell outline).
- Scene 4: two branch chips ("small: repair, go on", "too great: apoptosis") added at the left so the decision is visible.
- Q1 right half: two interphase plates (270 px) with gene-copy strips (the stem's givens). Q2 right half: an interphase "infected lining cell" with a crossed p53 glyph and a coded membrane strip (growth not crossed). The design said no plate on card 2; root's rule (plate plus key-given strip) applied.
- Chips, gene copies, organ thumbnails and later panels show faintly from the first frame and light on cue (root rule).
- Countdown ring (PreRing) shows full from 12 frames before "Pause here to answer." until the timed countdown.
- Key notes trimmed to five short bullets at 40 px with the framed memory card.

## Cue check
Every `cues()` phrase and question underline resolves (configs load through esbuild; `marksCheck` passes). Holds use the measured `responseHold` frames.

## Grade per frame (final sheet)
1 hook A; 2 mitosis A; 3 cycle A; 4 p53 A; 5 accelerator A; 6 brakes A; 7 melanoma A; 8 benign/malignant A; 9 metastasis A; 10 why spread A; 11 Q1 A; 12 feedback 1 A; 13 Q2 A; 14 feedback 2 A; 15 decision A; 16 key notes A.

## Check at playback speed
- Scene 1: tissue spawning from the daughters; sparks turning grey with ticks; dashed arrows to lungs and liver.
- Scene 3: dot travelling round the ring on "grows, copies, gets ready, divides"; gate lighting order.
- Scene 4: p53 glyph docking; sparks vanishing on "fix"; cross-fade to the apoptotic cell.
- Scene 9: basement-membrane line tracing (hand-traced junction; check it sits on the junction) and the gap opening on the melanoma.
- Scene 10: "links snap" marks over the vessel plate (positions approximate); five dots travelling, four greying.
- Scene 6/7: pedal press, lock and slack timing.

## Root review round (7 Nov)
- Accelerator: accelerator pedal 1.85x and brake pedal 1.3x, both solid from the first frame; the cell solid; only the gene-copy chips wait faint (moved under the cell).
- Brakes: brake pedal 1.8x and the locked accelerator 1.3x, solid; the BRCA1 cell row and the risk dial solid from the first frame; chips below the pedals fade out before the memory aid; the 'where it breaks' tag moved under the title.
- Melanoma: pigment-cell zoom solid from the first frame; only the BRAF and brake chips wait faint.
- Why spread matters: lungs, liver and brain solid and large as the opening picture; they give way to the melanoma block and depth ruler on 'finding melanoma early'; sun protection and the five words stay faint until 'the main cause'.
- Final grade per frame: all 16 A.
