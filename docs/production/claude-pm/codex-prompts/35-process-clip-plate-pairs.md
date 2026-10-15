# Brief 35: aligned plate pairs for process clips

Read `00-standing-rules.md` first, then the "Style for every image" and "Aligned sets" sections of `27-painted-icon-pack.md`. Brief 33 (`33-b3a2-muscle-cell.md`) is the model for this kind of pair.

## Why these plates exist

The owner decided on 15 Oct that AI video is used only for occasional "process clips": a 5 second image-to-video clip that starts exactly on one painted plate and ends exactly on a second plate, showing a real change that is itself the teaching point. Claude makes the clip later (Kling, start and end frame). The clip can only be as good as the pair: if anything except the changing part differs between the two plates, the video model will invent motion for it (drift, wobble, new objects). The plan is `docs/production/claude-pm/assets/process-clip-plan.md`.

## Rules for every pair (in addition to brief 27)

- Ink and watercolour textbook plate matching the named existing plate. Transparent PNG with a real alpha channel, no background, no ground patch, no cast shadow, no glow, no halo. No text, labels, numbers or arrows.
- **Aligned pair:** both images have the same canvas size, the same framing and the same scale, and every unchanging part sits in exactly the same pixels. Paint the start image first, then make the end image from it, changing only the part named as "changes". Do not repaint the shared parts, do not re-crop, do not re-centre.
- At least 1600 px on the long side, at least 8% fully transparent margin on every side (the clip is composited onto a 1920 x 1080 white canvas, so a landscape or square canvas is easiest).
- One main subject, readable at 200 px.
- Where a pair is completed against an existing plate (items 4 and 5), open that plate and match its canvas size, position and painting exactly.
- No em dashes (U+2014) in any file you write.

## The pairs

### 1. B6a: a bacterium taken inside a larger cell (endosymbiosis)

Match `public/assets/biology/b6a-animal-cell-v1.png` and `b6a-bacterium-v1.png`. Landscape canvas 2000 x 1300.

- `b6a-endosymbiosis-outside-v1.png`: one large, simple, rounded ancient host cell (pale peach cytoplasm, a thin cell membrane drawn as a clear soft line, one violet nucleus off-centre to the left, a few faint small vesicles; no mitochondria, no chloroplasts) taking up most of the canvas. On the right edge of the host, touching the outside of its membrane, one small rod-shaped bacterium (about one fifth of the host's width, same colouring and texture as `b6a-bacterium-v1.png`, no flagellum).
- `b6a-endosymbiosis-inside-v1.png`: **changes:** the same bacterium, same size and colour, now inside the host cell's cytoplasm to the right of the nucleus, wrapped in a thin extra membrane (a slightly larger clear outline around it). The membrane is closed again where the bacterium entered. Everything else identical.

Science: the bacterium stays whole and the same size; it is not digested. The host has a nucleus. Do not draw DNA rings, labels or arrows (the video draws them).

### 2. C11: a blue crystal dissolving in water

Match `public/assets/chemistry/c3-cobalt-tube-pink-v1.png` (glassware) and `c5-copper-tube-pale-v1.png` (blue copper colour). Portrait canvas 1400 x 1800.

- `c11-cuso4-beaker-crystal-v1.png`: a plain clear glass beaker, front view, about two thirds full of clear colourless water, with one bright blue copper(II) sulfate crystal (a single chunky, slightly slanted prism about one sixth of the beaker width) resting on the bottom centre. No stirrer, no spoon, no labels.
- `c11-cuso4-beaker-dissolved-v1.png`: **changes:** the crystal is gone and the water is an **even pale blue** throughout (the same pale blue as a dilute copper(II) sulfate solution, lighter than the crystal). Same beaker, same liquid level.

Science: the liquid level does not visibly change. The solution is transparent, not milky.

### 3. C13: a yellow precipitate forming when two solutions mix

Match `public/assets/chemistry/c3-iron-tube-start-v1.png` (test tube in rack). Portrait canvas 1280 x 1792, test tube in the same small wire rack as the C3 plate.

- `c13-pbi2-tube-clear-v1.png`: one clear glass test tube in the wire rack, about half full of a clear colourless solution. A plain glass dropping pipette with a rubber bulb is held vertically above the mouth of the tube (no hand), its tip just above the rim, with clear colourless liquid inside it.
- `c13-pbi2-tube-precipitate-v1.png`: **changes:** the liquid in the tube now holds a bright **canary-yellow** solid: a dense yellow cloud through the lower two thirds of the liquid and a thin layer of yellow solid settling at the bottom; the liquid above it is pale and cloudy yellow. The level is a little higher (the added drops). The pipette stays in exactly the same place, now about half empty.

Science: lead(II) iodide is a bright yellow solid. The yellow is a solid in the liquid (cloudy, settling), not a yellow solution. Claude will confirm the C13 example when its design is written; paint this pair anyway.

### 4. B5a: the graze healed (complete the existing pair)

Start plate exists: `public/assets/biology/b5a-skin-graze-v1.png` (1920 x 1280). Make one new plate on exactly the same canvas and position:

- `b5a-skin-healed-v1.png`: **changes:** the red clot in the top layer is gone and the gap in the outer skin layer is filled with new skin cells continuous with the cells either side, so the top surface is smooth and level again. The new patch can be very slightly pinker than its neighbours. The deeper layers (blood vessels, connective tissue, yellow fat) are identical to the start plate.

### 5. B2b: one pollen grain before its tube grows (complete the existing pair)

End plate exists: `public/assets/biology/b2b-step-tube-v1.png` (1600 x 1600). Make one new plate on exactly the same canvas and position:

- `b2b-pollen-tube-start-v1.png`: **changes:** the same stigma and cut-away style with the same single pollen grain in the same place, but **no pollen tube yet** (the style interior is empty). Everything else identical to `b2b-step-tube-v1.png`.

### 6. C7: ammonia condensing out of the cooled gas

Match `public/assets/chemistry/c7-condenser-cooler-v1.png` (industrial steel, same painting). Landscape canvas 2150 x 1300.

- `c7-condenser-collector-empty-v1.png`: the existing condenser-cooler drawn the same way, with a vertical steel collection drum below its right-hand outlet, joined by a short pipe. The drum has a tall clear glass sight window on its front. Inside the window: empty (pale grey interior). A gas pipe leaves the top of the drum to the right (the unreacted gas going back round).
- `c7-condenser-collector-liquid-v1.png`: **changes:** a few clear droplets on the cooled tubes inside the condenser's cut-away, and in the drum's sight window a clear, colourless liquid about half way up with a visible level line and a soft highlight. Nothing else changes.

Science: liquid ammonia is colourless. Do not tint it.

### 7. B3a2: one follicle ripening under FSH

Match `public/assets/biology/b3a2-ovary-closeup-v1.png` (1800 x 1800, same ovary outline and painting). A trial clip between `b3a2-ovary-no-ripening-v1.png` and `b3a2-ovary-closeup-v1.png` failed because those two plates differ everywhere, so the big follicle appeared at full size instead of growing. Make an aligned pair:

- `b3a2-follicle-small-v1.png`: the ovary from `b3a2-ovary-closeup-v1.png`, unchanged in outline, vessels and all the small follicles, except that the large ripe follicle on the left is replaced by one **small** follicle in the same centre position (about the size of the other small follicles, with a visible egg cell), and the tissue it used to cover is filled with ordinary ovary tissue like the rest.
- `b3a2-follicle-ripe-v1.png`: **changes:** that one follicle is the large ripe follicle (fluid-filled space, egg cell at its edge), exactly as in `b3a2-ovary-closeup-v1.png`. You may use `b3a2-ovary-closeup-v1.png` itself if the small-follicle plate is painted from it and aligns pixel for pixel outside the follicle.

Science: only one follicle ripens. The egg is not released (no burst wall).

## QA (every item)

Save QA to `docs/production/claude-pm/assets/brief35-qa/`:

1. Each plate on a checkerboard and on cream `#f6f1e7`.
2. Each plate at 200 px on the long side.
3. An overlay of each pair at 50% opacity, plus a difference image (absolute difference of the two RGBA images). The difference must show only the changing part. If anything else lights up, fix it.
4. Each pair composited on pure white 1920 x 1080 (centred, scaled to fit 1600 x 960), start and end side by side. This is what the clip starts and ends on.

Provenance: `docs/production/claude-pm/assets/brief35-provenance.json` with, per file: prompt, model, canvas size, alpha check, sha256, and which plate it was aligned to.

Hand-in: append a "Brief 35" entry to `docs/production/claude-pm/status.md` under "Codex hand-ins" listing the files, any pair you could not align, and questions for Claude. Do not generate video clips, do not edit lesson designs or code, do not commit.
