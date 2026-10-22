# Brief 102: clean retake of the B05 banksia pair

Read `00-standing-rules.md` first. Do brief 101 first if it is still open.

The brief 100 hand-in flagged the bio-m7-b05 banksia pair:
- `public/assets/biology/m7-banksia-healthy-v1.png` and `m7-banksia-phytophthora-v2.png` don't align (alpha silhouette IoU 0.811).
- Both keep colour fringes after two re-matte attempts.
- Several other B05 cutouts also have edge fringes.

## 1. The aligned pair

Paint a new aligned pair **from one shared base drawing**, so that the trunk, the branch layout, the outline and the ground contact are identical:
- **`m7-banksia-healthy-v2`:** a healthy banksia shrub with full green foliage and flower spikes.
- **`m7-banksia-phytophthora-v3`:** the same shrub dying back from *Phytophthora cinnamomi*: yellowing and browning leaves, and bare upper branches. The silhouette must stay the same, so that it changes only in colour and leaf loss.

Requirements:
- **Alignment:** register the pair so that a 50% overlay shows only the foliage change. Target an alpha IoU of 0.97 or above, and record the value.
- **Edges:** clean matte with no colour fringe. Check it on cream, checker and dark backgrounds at 100% and at 300% zoom on the edges.
- **Size:** 2000 × 2000, with at least 10% clear margin, a real alpha channel, ink and watercolour, no text, no people or hands, no ground shadow.

## 2. Edge fringes on the other B05 cutouts

Re-matte any other B05 plate whose edge fringe is visible on a dark background. Keep the file names, and note which plates you changed.

## Hand-in

Write the provenance to `assets/brief102-provenance.json` and QA views to `assets/brief102-qa/`. Archive the plates as in brief 92, and hand in to `status.md`.
