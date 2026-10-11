# Brief 01: artwork for wave 1 (C1 sealed drink, B1 grower)

Read `00-standing-rules.md` first.

## Goal

Generate 7 illustrations for two lessons. They will be animated in Remotion (camera moves, labels drawn on top, parts highlighted), so they must be clean, uncluttered, scientifically correct and consistent in style.

## Style for every image

- Naturalistic ink and watercolour scientific illustration, like a modern textbook plate. Calm, precise, warm natural colour.
- **Match the existing style** of `public/assets/biology/strawberry-runner-botanical-v1.png` and `public/assets/biology/strawberry-flower-botanical-b1-v1.png`. Open and look at them before you start.
- **No text, labels, numbers, arrows, watermarks or frames anywhere in the image.** Labels are added in the video.
- Single subject, centred, generous empty margin around it (at least 8% each side) so it can be cropped and moved.
- **Transparent PNG with a real alpha channel.** If your generator returns a white background, remove the background yourself and save the cut-out as a transparent PNG. Keep soft edges clean, with no white halo.
- At least 1600 px on the long side.

## Images

Save each to the path given. Use exactly these file names.

### C1: sealed sparkling drink (Chemistry)

1. `public/assets/chemistry/c1-sparkling-bottle-sealed-v1.png`
   A clear glass bottle of sparkling water, side view, upright, cap screwed on. Liquid fills about two thirds; a clear gas space above it. A few small bubbles cling to the inside wall and rest under the surface. Calm and still: no fizz rising. Portrait framing.
2. `public/assets/chemistry/c1-sparkling-bottle-open-v1.png`
   **The same bottle, same size, angle and framing as image 1**, cap removed and resting beside its base. Streams of bubbles rising through the liquid and a few escaping from the open neck. Generate it so images 1 and 2 line up when overlaid (same bottle position and scale).
3. `public/assets/chemistry/c1-book-on-table-v1.png`
   A closed hardback book lying flat on a simple wooden table, three-quarter view, table edge and two legs visible. Plain, still, nothing else on the table.

### B1: the strawberry grower (Biology)

4. `public/assets/biology/b1-prize-strawberry-plant-v1.png`
   One healthy mature strawberry plant growing in soil (soil cut-away at the bottom like the runner plate), with several large, glossy, ripe red strawberries and a few white flowers. It should look like a plant a grower would be proud of.
5. `public/assets/biology/b1-varied-seedlings-v1.png`
   A row of five young strawberry seedlings in identical small terracotta pots, evenly spaced, side view. The seedlings visibly differ from each other: different heights, leaf sizes, leaf shapes and shades of green. Same age, same pots, same light.
6. `public/assets/biology/b1-clone-row-disease-v1.png`
   A row of five strawberry plants in a garden bed, side view, all clearly identical to each other (same shape, size and leaf pattern, like clones). A leaf-spot disease is affecting all of them in the same way: brown and purple spots on many leaves, some leaves yellowing. Realistic, not gory.
7. `public/assets/biology/b1-dry-soil-trays-v1.png`
   Two seedling trays side by side on dry, cracked, pale soil. Left tray: six strawberry plants that all look identical. Right tray: six strawberry seedlings that visibly vary in size and leaf form. Both trays look equally cared for. Leave a clear gap between the trays.

## Provenance

Write `docs/production/claude-pm/assets/wave1-provenance.json`: an array with one object per image containing `path`, `sha256`, `prompt` (the exact prompt you used), `tool`, `retakes` (number), and `notes` (anything Claude should check, such as an anatomy compromise).

## Check before you hand in

Open every final PNG and confirm: transparent background, no text or labels, no halo, the subject matches the description, images 1 and 2 align, and image 6 plants look identical to each other while image 5 seedlings look different from each other. Retake any that fail.
