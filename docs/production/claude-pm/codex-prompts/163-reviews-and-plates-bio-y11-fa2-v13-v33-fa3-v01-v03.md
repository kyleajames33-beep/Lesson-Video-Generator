# Brief 163: reviews, then plates, for Year 11 Biology FA2 v13 to v33 and FA3 v01 to v03

Read `00-standing-rules.md` and briefs 147, 150 and 157 first, and use their methods and file formats exactly. Do not spawn sub-agents. Make no design edits, speech or commits.

## Inputs
**Designs** (all Revision 1; review those that exist):
- `lessons/bio-y11-fa2-v13.md` to `v33.md` (keys `y11b-fa2-vNN`);
- `lessons/bio-y11-fa3-v01.md` to `v26.md` that exist (keys `y11b-fa3-vNN`; v05 and v16 are on cultural hold).

**Route.** `docs/production/y11-bio-fa2-fa3-video-route.json` is root-approved. Say where a design differs from it.

**Root decisions.** These are the FA1 Biology files, `checks/root-decisions-bio-y11-fa2.md` and `checks/root-decisions-bio-y11-fa3.md`. Confirm them, in particular:
- FA2 item 28: v30's handoff "How can measurements test it?"; v32 at about 572 s; FA3 v01 opening on v33's real final frame;
- FA3 items 2 to 4: the short v02 and v03 accepted; the peppered moth and Gorongosa cases; plate priority.

## Part 1: reviews
Review each design as in brief 157 Part 1. Check:
- **Learning review**, traced from the route's entry knowledge.
- **Science check** against the 2025 point (quoted verbatim with its ID), the site lesson and reliable sources. In FA3, check these figures: the Gorongosa elephant figures, the moth's current rarity, the Newfoundland cod maturation evidence, and the Daphne Major beak data.
- **Practicals and source investigations** for NSW school safety and for source reliability (v31's named study; v32's three sources).
- **Data analyses**, checked numerically.
- **Content rules**: no human tissue sampling, and no people, hands or faces in any plate request.
- **Openings**: each equals the previous handoff frame.

Repairs must be length-neutral or come with a named cut. Each design stays at or under about 570 s.

Write `checks/<key>-learning-review.md` and `checks/<key>-science-check.md`. Add confirmed site findings to `site-corrections-bio-y11.md` without duplicates.

## Part 2: plates
After the reviews, paint the requested plates, following any review changes.
- Reuse `public/assets/biology/` plates where they fit.
- Matched states share one canvas.
- Never stretch a plate.
- FA3 v03's toad, snake and elephant plates come last.

Write the manifest to `assets/brief163-manifest.json` and QA images to `assets/brief163-qa/`.

## Hand-in
Hand in to `status.md` with one paragraph per design and one line for the plates.
