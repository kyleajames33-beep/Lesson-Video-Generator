# Interim artwork integration review

Checked 25 October 2026. Scope: current B05, B06 and B07 source, actual artwork, existing QA images and saved preview assets. No scene or media files changed. Continuous playback was unavailable: the computer tool listed no browsers, and attempts to open the existing preview in the in-app browser and Chrome both returned `Browser is not available`.

## Findings that affect the next review

1. **The three saved v1 previews contain older artwork.** A SHA-256 comparison found 10 PNG differences in B05, one in B06 and one in B07. The complete filenames and hashes are in `codex-interim-art-source.json`. B05's differences are the ten plates rematted in brief 102. B06's difference is its reused root-cells-defended thumbnail. B07's difference is the bare B cell rematted in brief 103. These are preserved historical preview copies, not corrupt files. Build a new numbered preview from the intended current inputs before judging their cleaned edges. Keep the existing pages as historical evidence.
2. **The Banksia retake has not entered B05.** `src/explainer/lessons/bio-m7-b05/assets.ts` still sets `BANKSIA_ALIGNED = false` and loads healthy-v1 and phytophthora-v2. The current fallback therefore shows the old pair side by side. Brief 102's healthy-v2 and phytophthora-v3 exist and their overlay shows a fixed trunk and branches while foliage changes. The new pair needs scene review before integration. Re-measure the shared crop, soil contact and feature coordinates when changing the filenames: the hook currently anchors the old plant's root crown at natural y=1380. The new drawing has different framing. A filename-only swap would not establish correct placement.
3. **Inspect the macrophage edge at scene size.** The current `m7-macrophage-engulf-after-v2.png` has bright cyan/blue edge pixels around several arms when inspected against the image viewer's dark transparency background. This observation is at native-image scale; it does not establish a visible problem in the final cream scene. Check that exact plate during the transition and the settled state before deciding whether it needs matte repair.

## Repairs already present in source

- **B06 avoids a direct wrap-to-inside crossfade.** `parts.tsx`, `Engulf`, computes `a = clamp01(t2 * 2)` and `b = clamp01(t2 * 2 - 1)`. The old wrap plate has opacity `1 - a`; the masked new rod has opacity `b`. Their nominal opacities do not overlap. The new rod is hidden while the old plate fades, then revealed. Source inspection supports the intended repair; feathered masks and the perceived change still require playback. Before-to-wrap and after-to-digest remain short six-frame crossfades.
- **B07 scales the plasma cell in the scene.** `assets.ts`, `plasmaW`, uses the bare painted width 1284 within its 1599-pixel shared crop, then applies the 1.5 ratio. Scene `plasma-memory` uses this helper for the comparison and clone cells. The old concern about the two plates' natural canvas ratio is addressed in source. Actual perceived scale and label fit remain for playback.

## Exact playback targets

Times below come from the measured caption cues imported by the current configs. They locate checks; they are not observations of playback.

| Lesson | Scene and time | What to inspect |
| --- | --- | --- |
| B05 | `hook`, 0:24.37, local frame 731 | The spoken `another dies` cue. After the retake is integrated, the same plant should change in place, keep its ground contact and preserve the healthy reference. Current source still uses the fallback. |
| B06 | `phagocytosis`, 3:12.17 to 3:18.63 | Wrap starts after local cue frame 488. The masked wrap-to-inside change runs at about 3:15.07 to 3:15.80. Check one identifiable bacterium, no visible duplicate, and no distracting blank or patch as it moves inside. Inspect the cyan edge at the actual plate width. |
| B07 | `plasma-memory`, 3:01.97 to 3:15.73 | Compare the bare B cell with its larger plasma-cell drawing, follow the antibody release, and check the shrinking transition into the next case. Review using the current rematted bare B cell. |

## Evidence and remaining work

I opened the brief 102 Banksia pair overlay, both cream views and the diseased dark edge crop; the brief 101 before/after and before/wrap macrophage overlays; and the current after-v2 PNG. The pair overlay preserves the Banksia structure. The unmasked before/after macrophage overlay shows the rod in two positions, which explains why the source uses a masked transition. A still overlay cannot judge that repaired transition.

`scripts/check-interim-art-sources.mjs` repeats the read-only source hashes, preview PNG comparisons and caption cue lookup. Its output is `codex-interim-art-source.json`. It does not change preview pages or production inputs. `codex-interim-media-audit.json` records archive verification separately.

Remaining: review and integrate the Banksia retake; build fresh numbered previews for current artwork; inspect these beats continuously at playback speed and at intended viewing size. Human listening, teaching acceptance and release approval are pending. This report provides no motion pass.

## Addendum: Banksia retake consumers beyond the hook

25 October 2026. Read-only source audit of `src/explainer/lessons/bio-m7-b05` and direct visual inspection of all four current PNGs: old healthy-v1/diseased-v2 and new healthy-v2/diseased-v3. The viewer displayed the complete 2000-pixel canvases reduced to 1600 pixels. No generated preview, continuous motion, listening or final scene-size judgement was made. No narration, scene, asset or configuration was changed.

The old pair depicts an exposed root system below one main stem; the diseased plate visibly marks root damage. The new pair depicts a branched shrub ending at its trunk base, with no visible roots. The trunk and branches remain in place between the new pair while foliage changes, but that does not make the new plate a replacement for the root-damage illustration. A global filename/shared-box change would affect five scenes. The `assets.ts` switch comment's `Nothing else needs to change` is insufficient for these particular retakes.

All consumers found are listed below. Paths are under `src/explainer/lessons/bio-m7-b05/`; scene names are the imported measured IDs. Trigger phrases identify source cues, not observed playback.

| Consumer | Source and trigger | Consequence and necessary adaptation before using new pair |
| --- | --- | --- |
| `banksiaOk` and `banksiaSick` in hook | `s1.tsx:26` to 30 (`bkCy`) and `:44`; helper `parts.tsx:206` to 216. Healthy appears at `cope with it far better`; the right copy changes at `another dies`. | The fixed natural y=1380 is the old root-crown ground anchor. On the new shrub that level is above its cut trunk base, so changing only the crop cannot establish ground contact. Re-anchor the actual trunk base to the soil and recheck composition width and both copies. Use a measured common box and the aligned flag only for a pair whose use in this scene has been checked. |
| `banksiaSick`, `FEAT.sickRoots`, `FEAT.sickLeaves` and three hard-coded water-path points | `s1.tsx:57`, `:63`, `:81` to 90, scene `water-mould`. Root ring at `The threads kill` plus 16 frames; water arrow at `less water reaches`; leaf rings at `dies back`. | The new plate has no root target for `sickRoots=[1000,1560]`. A ring on the shrub's lower trunk cannot show killed roots. Retain a root-bearing mechanism visual, or provide a clearly connected root view before replacing this scene's plate. Also remeasure yellow/brown leaf targets and the water path's `[1000,1460]`, `[1000,1080]`, `[1000,700]` points. Those hard-coded points are not repaired by updating `FEAT` alone. Keep root death, reduced water supply and dieback visually connected at their existing cues. |
| `banksiaOk` and `FEAT.bark` | `s1.tsx:135`, `:151` to 153, scene `barriers`; cue `older roots and stems`, ring plus 14 frames. | The new shrub has visible woody bark, so it may serve this stem-bark thumbnail. Independently recheck `bark=[1000,1330]` against the new drawing and final 200-pixel plate width, then adjust the marker if needed. Do not treat the rootless thumbnail itself as showing older roots; the separate `RootBar` and root inset carry the root part. This is a feature/scale check, not a proven missing-bark error. |
| `banksiaOk`, `FEAT.signal` and `FEAT.leaves` | `s1.tsx:213`, `:235` to 238, scene `firebreak`; `A signal can` reveals the plant, with pulse at plus 14 frames, then leaf destinations. `SignalPulse` implementation at `parts.tsx:135` to 157. | The old signal path begins in the exposed root region and rises to the stem before branching to three leaf targets. The new plate lacks that root origin. Preserve a visible link from the root-cell case to the shrub before using it here, and remeasure the entire path and leaf endpoints on the new branches. A pulse merely starting at a cut trunk must not stand in for the root-to-distant-tissue explanation. |
| `banksiaSick` and `FEAT.stem`, plus soil-height calculation | `s2.tsx:130` to 155, scene `control`; plate and soil appear at `phosphite can be`; stem marker at plus 14 frames; soil specks at `doesn't remove`. | The phosphite marker must remain on a visible woody stem. Recheck `stem=[1000,1250]` and the label against the new trunk/branch junction. The soil line is currently `BP.cy + ph/2 - ph*0.26`, inherited from the old root-bearing crop. Re-anchor soil to the new actual base; otherwise the band can cover the lower trunk and leave `still in the soil` pointing at the wrong region. Keep the pathogen-in-soil cue distinct from the treatment marker. |

Feature inventory is complete for the requested names: `bark` is used only by `barriers`; `signal` and `leaves` only by `firebreak`; `sickRoots` and `sickLeaves` only by `water-mould`; `stem` only by `control`. The hook does not use these `FEAT` entries and instead has its own y=1380 anchor. `parts.tsx` re-exports the objects and its `BanksiaPair` helper uses the two plates, while `ASSETS_M7B05` automatically collects their filenames. No additional `banksiaOk`/`banksiaSick` consumers were found in the lesson. Other seedling/root-cell plates and their markers are separate assets.

The smallest isolated integration is to give the new hook pair separate asset entries and placement, while keeping the existing root-bearing mechanism visual until its replacement is decided. This would avoid silently changing all five scenes. If root chooses a global swap, each row above needs a scene-specific decision and subsequent playback check. Crop alignment alone cannot supply absent roots. This addendum gives no art, motion, teaching or release approval.

Inspected file SHA-256 values:

| File | SHA-256 |
| --- | --- |
| `public/assets/biology/m7-banksia-healthy-v1.png` | `afa886594cb24d1f84354a068957b50e133c3a1b2db625257ebd793bdf3e70f3` |
| `public/assets/biology/m7-banksia-phytophthora-v2.png` | `1113a0928f993dedcd103ac561f7ef634b8b12561412608b9a13aa630b987d15` |
| `public/assets/biology/m7-banksia-healthy-v2.png` | `7c35d347ce92c696986f15535893d9ca10083c6c763a41110ff7185291043e77` |
| `public/assets/biology/m7-banksia-phytophthora-v3.png` | `a3023a5041f460c64f15966d84c7f09c44694a67b9200f2834a457e8b2f0f8a8` |
| `src/explainer/lessons/bio-m7-b05/assets.ts` | `05f6e773059f5a62f196aca1b60ba4d5ae6d083d785b825bce0d10e1f3723b9c` |
| `src/explainer/lessons/bio-m7-b05/parts.tsx` | `35d153125f993fdd011850d2ac4702e7b47980a9d4ef537a96a9761aa15c9adc` |
| `src/explainer/lessons/bio-m7-b05/s1.tsx` | `8c1cfab2a586879ccdd8252c75788379d666131b62aef458d80108741dc044e9` |
| `src/explainer/lessons/bio-m7-b05/s2.tsx` | `ca08fae8c7183eb561f83d3a95a2eaff6c549390e0fcf41d0b28b3fae910bf6e` |

## Addendum: independent Banksia hook geometry check

25 October 2026. Independently decoded the two new PNGs with Pillow/NumPy and checked `banksiaRetakeFit` in `check-interim-art-sources.mjs` against the actual renderer inheritance. Alpha strictly greater than 20 gives healthy bounds `[220,256,1780,1744]`, diseased bounds `[220,257,1780,1744]`, and shared union `[220,256,1780,1744]`. Independently calculated alpha-at-least-32 IoU is `0.980459728561568`, matching the output and brief 102. Bounds use exclusive right/bottom edges.

B05 imports `Pl`/`plH` and `ptOf` through B04/B03. `Pl` comes from `bio-m6-b09/parts.tsx`, delegates to the shared `PlateB`, and uses scale `w/(x1-x0)`. `ptOf` from `bio-m7-b01/parts.tsx` maps a natural y to `cy + (y-(y0+y1)/2)*scale`. `PlateB` places the full PNG around that box centre. This `Pl` call supplies no clipping ID, so the box controls scale/centre and does not automatically crop the artwork. The check's geometry matches that behaviour.

For hook width 380 and soil y=880, independent arithmetic reproduces:

| Box and anchor | Centre y | New painted bottom-edge y |
| --- | --- | --- |
| Stale box `[362,200,1624,1800]`, old anchor 1380 | 765.578447 | 989.603803 |
| Measured new box, old anchor 1380 | 787.435897 | 968.666667 |
| Measured new box, proposed trunk-bottom anchor 1744 | 698.769231 | 880.000000 |

No arithmetic or inheritance error found. The proposed anchor aligns the measured alpha-box bottom edge, not a demonstrated anatomical root crown. This is a positioning diagnostic only. It neither supplies absent roots nor approves replacing the mechanism plates, integrating the pair, rendering or playback.

Checked script SHA-256: `32bd580a94ad3d7343aba88411ffeafa89d38a63bdd4dd4b0c28deb0c16c5891`. Checked output SHA-256: `b14785a20c6d1808ff337a345e73ea27261d45d49040e3730df8646011beddae`.
