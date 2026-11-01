# Brief 139 plate inspection

1 November 2026. Artwork was generated with the built-in image tool. Twenty new asset candidates and two attempted old-asset repairs exist. All generation prompts, reference paths, native sizes, alpha ranges and SHA256 values are in `brief139-manifest.json`. Contact sheets, 300/600 px dark-board views, phone-landscape views, black/white checks and 50% pair overlays are in `brief139-qa/`.

## Completed preparation

All twenty requested new subjects have candidates, including the sibling replacement `y11-neuron-v1.png`. No exact provenance for `public/assets/neuron.png` was found in the repository manifests, so that original was preserved. Biology review changes were carried into the requests: a wrapping autophagosome membrane precedes lysosome fusion, cheek fields represent prepared slides, and sizing needs end-to-end equivalent widths. No fresh cheek-sampling artwork was commissioned.

The apparatus objects are separate and unlabelled, use the house ink/watercolour finish and contain no people or hands. The root cell has no chloroplasts, a large vacuole and starch stores. The bacterium shows capsule/wall/membrane, unwrapped nucleoid, two plasmids, ribosomes, one flagellum and short pili. The high-power onion view distinguishes vacuole from peripheral cytoplasm. All files have real RGBA alpha, but alpha presence alone is not an edge-quality pass.

## Conditions still to clear

- Onion low-power count: the third generated field is denser and has consistent long-brick cells, but an exact fifteen cell lengths along the central diameter is not certified. No arithmetic narration was changed to fit the art.
- Cheek sizing field: eight cells intersect the central line, with small gaps. Assemble equivalent end-to-end widths before using 450/8 as a measured mean width. Do not silently count gaps as cell widths.
- Bacteria-on-cheek plate: the generator placed more bacteria than the requested eight to twelve. Reduce to a counted subset and verify the intended 1:40 relative scale.
- Many generated plates retain coloured edge fringe. Some have insufficient requested margin or native canvas dimensions that differ from the requested ones. Fit proportionally and pad, without stretching.
- The lysosome pair has scale/position drift in its 50% overlay. Register the after-state to the before-state before crossfade use.
- The crucible retains a broad semi-transparent haze after the second image-tool edit; remove it with an exact alpha mask rather than publishing the halo.
- Microscope-pair repair: same canvas but only 1.86% of originally opaque pixels were exactly preserved. Reject as an edge-only replacement.
- Organelle-set repair: generator changed height from 897 to 896 pixels and red fringe remains. Reject. Both old public files are untouched, with original hashes recorded.
- Glass-part relative physical scale (76x26 mm slide, 22x22 mm coverslip) and the 20x10 mini-grid need a common calibrated assembly rather than using native image width as a scale.

A request to permit local pixel editing is pending. The image-tool instruction requires an explicit user request before another image-editing method is used. No such answer had arrived when this inspection record was written. The candidates and exact cleanup jobs are ready; this is not a completed plate or recording approval.
