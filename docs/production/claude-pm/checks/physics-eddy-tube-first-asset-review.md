# Independent review of the first copper-tube candidates

25 October 2026. Reviewed the current `ph-eddy-tube` family contract in `docs/production/claude-pm/assets/physics-maths-image-bank/physics-plan.json` and visually inspected these exact original files:

| Candidate | SHA-256 | Native file |
| --- | --- | --- |
| `out/checks/physics-eddy-tube-2026-10-25/raw/04-intact-white-base.png` | `565c9b40a7bf1f8a5650b1335dcfcac66fc20c9c5802edd6ab87a2944ffae9c4` | 1024 x 1536, RGB, no alpha channel |
| `out/checks/physics-eddy-tube-2026-10-25/raw/07-slotted-white-corrected.png` | `9cba6423bdbb269e516ee1aa08925d0a8d4dbb0b595b9b06c182399347cb56f3` | 1024 x 1536, RGB, no alpha channel |

Reviewer did not author the prompts, generate or edit either image. Read-only pixel inspection used Pillow/NumPy. No image edit, derived crop, QA composite, image-generation call, source change or media write was made. Only this report was written. Earlier outputs 01/02/03/05/06 were not inspected in this review, so this report does not independently verify their defects or the complete generation/edit provenance chain.

**Decision: usable shape/science candidates for further preparation, with two unresolved delivery limits.** Both remain white-background images, not transparent cutouts. Their overall composition is closely matched, but the edit changes painted texture outside the slot. Do not record an alpha pass or a fully invariant aligned-state pass. Actual scene fit and transition/motion review remain pending.

## Subject and physical interpretation

The intact candidate reads as one tall, opaque, straight copper tube. The upper opening shows a recognisable bore, an inner wall and a continuous rim. The visible external wall is continuous, without a longitudinal cut, transparent panel, exposed magnet or current diagram. The lower edge is complete. This top-looking view does not expose the lower bore, so it establishes the conventional appearance of an open tube rather than proving unseen lower-end construction.

The slotted candidate has two distinct cut edges down the near/front wall. The front top lip is interrupted between those edges; the gap continues to the bottom front edge without a visible bridging band or a stopped-short cut. The far/back top rim remains continuous. The opening therefore reads as a structural slot, rather than a dark stripe painted on an otherwise unbroken front surface.

The dark copper region visible through the slot is consistent with seeing the far inner wall through the front-wall opening. It should not be removed to white simply because the background is white. A front-wall slot does not cut away the back wall. Likewise, do not add a notch through the far rim to make the slot appear more obvious.

No gross shape/science defect is visible in the selected pair. The apparent long slot is appropriate for illustrating interruption of circumferential conducting paths. Neither raster contains current loops, a field, a measured fall time or a claim that all currents disappear. Later coded overlays and narration must preserve the contract's qualification: local eddy currents can persist, and a slotted tube does not universally eliminate all electromagnetic drag. Actual timing depends on the selected geometry/material/model or measurements.

The wall remains opaque. Any later internal magnet position needs a separately identified schematic or an occlusion-aware treatment, not a magnet drawn visibly through the copper as if the tube were transparent.

## Composition, style and alignment limits

Both are portrait 2:3 canvases with a restrained painted copper treatment, dark contour and clear top opening. The complete subject is centred with useful top/bottom space. There are no baked labels, arrows, numbers, glow, apparent current traces or ground shadows. The tall narrow silhouette is appropriate to this subject; it does not need a square composition. The pair's scientific meaning must still be carried by coded labels and explanation rather than copper colour alone.

Approximate copper-coloured bounds were measured with the same simple colour predicate on both RGB files: red minus green greater than 20, red minus blue greater than 35, red below 245. These are diagnostic bounds, not segmentation masks or alpha bounds:

| File | Half-open pixel bounds (x0, y0, x1, y1) |
| --- | --- |
| 04 intact | (403, 182, 623, 1354) |
| 07 slotted | (402, 182, 623, 1354) |

The common top/bottom position and near-identical lateral bounds support closely matched framing. They do not establish identical geometry everywhere. The visible outer contour generally remains close, while the new slot intentionally alters the front lip/lower edge.

Painted texture and some contour pixels also change outside the edited slot. Compared corresponding rectangular regions in the original files without resampling, registration, colour correction or background removal. Pixel differences use 8-bit RGB channel values:

| Region, half-open bounds | Mean absolute channel difference | Pixels with any channel difference above 10 |
| --- | ---: | ---: |
| Left wall away from slot: (425,330,480,1260) | 6.60 | 42.64% |
| Right wall away from slot: (550,330,600,1260) | 8.22 | 69.47% |
| Far upper rim: (455,185,570,205) | 8.89 | 49.43% |

These differences are not a measure of scientific error or a reason to discard the shapes. They do show that unchanged painted regions were not preserved pixel-for-pixel. The slotted image has visibly different surface marks. A common canvas and similar bounds therefore cannot close the contract's unchanged-region/registered-state acceptance check.

For a side-by-side comparison, closely matched scale and view may be sufficient after exact layout review. For an in-place switch, wipe or crossfade, assess the actual transition at playback speed. If unintended surface changes draw attention, prepare an invariant pair using the authorised production method or choose a clear comparison layout. Do not describe this pair as a proven seamless controlled edit or approve motion from the stills.

The slot is visible in the inspected native view, but its readability at the intended desktop and phone scene sizes is untested. The object occupies only about 220 native pixels across. Placement or enlargement must not claim that it adds native surface detail; inspect the actual rendered slot edges, rim and labels before selecting the final scene size.

## Remaining gates and permitted conclusions

1. **Background preparation is unresolved.** Both selected files are RGB with a white background. They are not transparent deliverables and have no measurable alpha bounds. Root has asked the user to choose an authorised cleanup route. This review does not choose or perform it. Once prepared, review the exact resulting files on the intended scene backgrounds for edge loss, copper/white halos, complete rims and retention of the far wall seen through the slot.
2. **Pair invariance is not passed.** Preserve the measured texture-change limitation in provenance. Review the actual selected comparison or transition before declaring the pair aligned for that use. A cleanup operation alone does not establish invariant painted regions.
3. **Teaching integration is pending.** Select the exact scene, magnet/tube relationship and coded explanation. Keep large-path interruption, any remaining local currents and illustrative versus measured response distinct. No predicted numerical fall time follows from these paintings.
4. **Scene-size and playback gates are pending.** Inspect desktop/phone slot readability, caption space, labels, occlusion, coded current paths and the exact transition. No motion, narration, human listening, student-learning or release pass is supplied by this report.

The selected raw candidates preserve useful physical recognition and are worth retaining. This report approves neither final transparent assets nor their integration into a released lesson.
