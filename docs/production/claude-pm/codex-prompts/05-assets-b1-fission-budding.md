# Brief 05: binary fission and budding artwork for B1

Read `00-standing-rules.md` first. Follow the "Style for every image" section of `01-assets-wave1-c1-b1.md` exactly: ink and watercolour textbook plate, match the existing strawberry runner plate (`public/assets/biology/` runner art used in B1), no text, labels or arrows, **transparent PNG with a real alpha channel**, no halo, at least 1600 px on the long side, at least 8% empty margin.

These replace the plain coded shapes in the B1 "asexual" scene (cards titled "Binary fission" and "Budding"). The owner found the coded shapes unconvincing. Claude will crossfade each set in order to animate the process, so **every image in a set must share the same canvas size, position and scale**, with the unchanged parts lining up when overlaid.

The pictures should look like a gentle textbook illustration of a cell seen under a microscope: soft colour, visible cell wall or membrane, a hint of the inside. Not a photo, not a cartoon face, not 3D render.

Save to `public/assets/biology/`.

## Set A: binary fission (one bacterium becomes two)

1. `b1-fission-1-v1.png`: one rod-shaped bacterium, horizontal, with a single coiled loop of DNA visible inside near the middle.
2. `b1-fission-2-v1.png`: the same bacterium, longer, with **two** DNA loops (one towards each end) and the cell wall starting to pinch in at the middle.
3. `b1-fission-3-v1.png`: two identical rod-shaped bacteria side by side with a small gap between them, each with one DNA loop. Together they span about the same width as image 2.

## Set B: budding (yeast)

4. `b1-budding-1-v1.png`: one oval yeast cell with a visible nucleus.
5. `b1-budding-2-v1.png`: the same yeast cell (same position and size) with a small round bud growing from its upper right side, still joined by a narrow neck. A nucleus is visible in the bud too.
6. `b1-budding-3-v1.png`: the same parent cell (same position and size) and a full-sized bud that has just separated, sitting slightly further up and to the right with a small gap. A small scar mark remains on the parent where the bud was.

## Provenance and check

Write `docs/production/claude-pm/assets/b1-fission-budding-provenance.json` (same fields as brief 01). Before handing in, open each PNG on a checkerboard and confirm: transparent background, no text, no halo, each set lines up when overlaid (parent cell does not shift or change size in set B), and the subject matches its description. Retake any that fail. Append your hand-in to `status.md`.
