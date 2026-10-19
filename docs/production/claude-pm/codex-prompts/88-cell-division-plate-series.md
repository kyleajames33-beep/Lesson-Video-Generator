# Brief 88: cell division plate series (mitosis and meiosis), replacing the busy cell plates

Read `00-standing-rules.md` first. **This is the top priority after brief 84.** It blocks the release of B5a and B5b. B7 and B8 are already rendered, but they wait on B5b.

## Why

The owner rejected the current B5a (mitosis) and B5b (meiosis) visuals as "tacky" and "lazy". The problems:
- The same busy painted cell (`b5x-cell-dividing-v1`, `-nospindle-v1`, `-pinching-v1`), crammed with Golgi, mitochondria and vesicles, is reused for every phase.
- 46 tiny coded bars are scattered across it.
- The cell keeps the same shape while the chromosomes separate.
- The owner wants the chromosome scenes zoomed in on the nucleus.

## Style for the whole series

- Ink and watercolour, 2000 px, transparent PNG with a real alpha channel, no text.
- **One consistent cell across every plate:** the same outline style, colour, scale and canvas position, so plates crossfade cleanly.
- **Low detail:** a soft cream cytoplasm, a clean membrane line and only a few small faint organelles near the edge, so the chromosomes on top are the clear subject. No dense organelle clutter, and the colours are muted.
- **No chromosomes are painted** in the stage plates. Claude draws large chromosomes on top using a 2n=4 model, in the HSC exam style.
- Spindle fibres are painted where the stage has them: fine, pale lines from two centrosomes.
- Scientifically accurate shapes for each phase.

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

8. `cd-pair-metaphase`: two round cells, each with a spindle and an empty equator.
9. `cd-pair-anaphase`: two elongated cells.
10. `cd-four-cells`: four small round cells, each with a nucleus, arranged in a loose 2 × 2 group.

Meiosis I reuses plates 2 to 6.

## C. Nucleus close-ups (for the chromosome scenes)

11. `cd-nucleus-zoom`: one nucleus fills most of the frame. It shows the double envelope with pores, a nucleolus, very faint chromatin texture and a thin rim of cytoplasm at the edges. Leave the centre clear so large chromosomes can sit on it.
12. `cd-nucleus-zoom-breaking`: the same framing, with the envelope fragmenting into small vesicles (prophase), to crossfade from plate 11.

## D. Anchor data (required)

For every plate, record these in `assets/brief88-anchors.json`, in pixel coordinates on the 2000 px canvas:
- the cell outline bounding box (or each cell's box);
- the nucleus circle (centre and radius) where there is one;
- the two spindle pole points;
- the equator line;
- the furrow points.

Claude places the coded chromosomes from this file. Check each plate pair for alignment, and write QA views to `assets/brief88-qa/`: crossfade strips from plates 1 to 7, plates 8 to 10, and 11 with 12.

## Also

- Check `m6-metaphase-spread-v1` from brief 85 for use in B5a and B5b. Claude will use it to show what 46 real chromosomes look like, instead of 46 tiny bars. If brief 85 hasn't run yet, paint it here: a circular microscope field showing about forty dark purple stained chromosomes from one burst cell, on a pale lilac background. They are realistic, not arranged in pairs, and never counted on screen.
- Write the provenance to `assets/brief88-provenance.json`.

Hand in to `status.md`.
