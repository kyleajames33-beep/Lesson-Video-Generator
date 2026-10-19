# Brief 88: cell division plate series (mitosis and meiosis), replacing the busy cell plates

Read `00-standing-rules.md` first. **This is the top priority after brief 84.** It blocks the release of B5a and B5b. B7 and B8 are already rendered, but they wait on B5b.

## Why

The owner rejected the current B5a (mitosis) and B5b (meiosis) visuals as "tacky" and "lazy". The problems:
- The same busy painted cell (`b5x-cell-dividing-v1`, `-nospindle-v1`, `-pinching-v1`), crammed with Golgi, mitochondria and vesicles, is reused for every phase.
- 46 tiny coded bars are scattered across it.
- The cell keeps the same shape while the chromosomes separate.
- The owner wants the chromosome scenes zoomed in on the nucleus.

## Style for the whole series (revised after owner feedback, 20 Oct)

The owner then pointed at `b6a-animal-cell-v1.png` (the full animal cell with chromatin painted in the nucleus) and said it is "actually fine because the chromosomes are actually to scale / in the image". So the busy cell style itself is acceptable. What failed was chromosomes coded on top at the wrong scale and in a different style.

- **Match `b6a-animal-cell-v1.png`:** the same painterly ink and watercolour cell, organelles and palette. Use one consistent cell across every plate, with the same scale and canvas position, so plates crossfade cleanly. 2000 px, transparent PNG with a real alpha channel, no text.
- **Paint the chromosomes into each plate**, at true proportion to the cell and in the same painted style. Use a 2n = 4 model, the way HSC papers simplify it:
  - one long and one short pair;
  - one set rose-pink (from one parent) and one set teal (from the other), matching the existing `b5x-chromosome-*-pink` and `-teal` plates;
  - correct chromatid states for each stage: duplicated X shapes from prophase to metaphase, single chromatids after separation;
  - no extra or missing chromosomes; check every count.
- **Leave the organelles slightly quieter around the spindle**, so the chromosomes read first.
- **Also deliver an "empty" version of every stage plate**, with no chromosomes, named `-empty`, as a fallback.
- **Spindle fibres** are painted where the stage has them. Shapes must be accurate for each phase.

## A. Mitosis stage series (animal cell)

All plates go in `public/assets/biology/`, named `cd-<stage>-v1.png`:
1. `cd-interphase`: a round cell with a large intact nucleus (double membrane, nucleolus, faint chromatin texture) and one centrosome pair beside it.
2. `cd-prophase`: round, the nuclear envelope breaking into fragments, the two centrosomes moving apart, and the first spindle fibres.
3. `cd-metaphase`: round, no envelope, a full spindle from two poles, and an empty equator region where the chromosomes go.
4. `cd-anaphase`: the cell visibly **elongated** along the spindle axis, with the poles further apart.
5. `cd-telophase`: elongated, with a **cleavage furrow** pinching in at the middle and two new nuclear envelopes forming near the poles (left empty inside).
6. `cd-cytokinesis`: two daughter cells almost separated, joined by a thin bridge, each with a round nucleus.
7. `cd-daughters`: two separate round daughter cells side by side, each with an intact nucleus, at the same scale as plate 1.

## B. Meiosis II pair series

These are the same style, showing two cells side by side, each about 60% of the single-cell scale:

8. `cd-pair-metaphase`: two round cells, each with a spindle and its chromosomes on the equator.
9. `cd-pair-anaphase`: two elongated cells.
10. `cd-four-cells`: four small round cells, each with a nucleus, arranged in a loose 2 × 2 group.

**Meiosis I** needs its own painted plates, because the chromosome arrangement differs from mitosis. Use the same cell and scale as plates 2 to 6:
- `cd-m1-prophase`: homologous pairs synapsed side by side.
- `cd-m1-metaphase`: the pairs line up **as pairs** across the equator, one partner on each side.
- `cd-m1-anaphase`: the partners move to opposite poles, each still a duplicated X shape, and the cell is elongated.
- `cd-m1-telophase`: a furrow forms, with one long and one short duplicated chromosome at each end.

For meiosis II, paint the chromosomes into plates 8 to 10 as well: one long and one short chromosome per cell. They are duplicated at metaphase II, the chromatids separate at anaphase II, and the four cells each end with a long and a short single chromosome. Show the pink and teal mix that follows from the meiosis I plates.

## C. Nucleus close-ups (for the chromosome scenes)

11. `cd-nucleus-zoom`: one nucleus fills most of the frame, in the b6a style. It shows the double envelope with pores, a nucleolus and loose chromatin threads (interphase: no X shapes), with a thin rim of cytoplasm at the edges.
12. `cd-nucleus-zoom-breaking`: the same framing, in prophase. The chromatin has condensed into the four duplicated chromosomes (pink and teal) and the envelope is fragmenting into small vesicles, to crossfade from plate 11.
13. `cd-homologous-pair-loci`: a close-up of one homologous pair (pink and teal, duplicated), large, with three painted bands at **matching positions on both partners**. These are the gene loci where Claude labels A/a, B/b and D/d. The bands must line up exactly across the pair.
14. `cd-crossing-over` (a, b, c): an aligned trio showing the same homologous pair, as follows. (a) synapsed, the pair lying side by side; (b) a chiasma, with the non-sister chromatids crossing at one point; (c) after the exchange, with a pink segment on a teal chromatid and a teal segment on a pink chromatid. The band positions are as in plate 13.

## D. Anchor data (required)

For every plate, record these in `assets/brief88-anchors.json`, in pixel coordinates on the 2000 px canvas:
- the cell outline bounding box (or each cell's box);
- the nucleus circle (centre and radius) where there is one;
- the two spindle pole points;
- the equator line;
- the furrow points.

Also record each painted chromosome's centromere point and its two arm ends. Claude places coded labels and allele letters beside the painted chromosomes using this file. Check each plate pair for alignment, and write QA views to `assets/brief88-qa/`: crossfade strips from plates 1 to 7, plates 8 to 10, and 11 with 12.

## Also

- Check `m6-metaphase-spread-v1` from brief 85 for use in B5a and B5b. Claude will use it to show what 46 real chromosomes look like, instead of 46 tiny bars. If brief 85 hasn't run yet, paint it here: a circular microscope field showing about forty dark purple stained chromosomes from one burst cell, on a pale lilac background. They are realistic, not arranged in pairs, and never counted on screen.
- Write the provenance to `assets/brief88-provenance.json`.

Hand in to `status.md`.
