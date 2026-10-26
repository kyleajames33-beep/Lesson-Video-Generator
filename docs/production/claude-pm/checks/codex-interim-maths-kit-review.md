# Independent Maths tangent kit review

25 October 2026. Independent Codex reviewer who did not author the kit, pilot or render script.

**No mathematical or still-layout blocker found in the supplied 15-second familiarity demo. One material reuse guard was missing from the reviewed kit API.** The supplied pilot uses that API safely. This review does not supply a motion pass.

R1 was subsequently resolved by the separate integration repair and independently checked below. No material finding remains in this reviewed scope.

## Scope

Read `AGENTS.md`, `src/explainer/math/README.md`, `pilot.tsx`, `kit.tsx`, `pilot-entry.tsx`, `scripts/render-maths-pilot.mjs`, existing model/geometry evidence and `playback-review.json`. Applied the repository Remotion skill, including chart and animation guidance. Inspected all six actual PNGs at frames 80, 260 and 420: desktop 1920 x 1080 and phone landscape 844 x 475. Read the shared `prog` helper and explainer scheduling context.

Ran read-only assertions against existing `model-check.cjs` exports and independently checked the quadratic Bezier parameterisation. Did not execute the render script, rebuild its bundle, rerender stills, play the MP4, listen to audio or modify source/media. The MP4 hash matches root's existing playback-review hash. That playback evidence remains separately attributed to its author.

## Initial material finding

### R1. Constrain the rise/run overlay to its valid point before reusing `SquareGraph`

- **Location at initial review:** `src/explainer/math/kit.tsx`, lines 40 to 58. The API accepts `a: number` and `showRise: boolean`, but lines 45 and 46 fix the second point and corner to the `a = 2` example. Lines 57 and 58 always print `run = 1` and `rise = 4`.
- **Reproduction:** with `a = 1.5` and `showRise = true`, the marked curve point is `(1.5, 2.25)`, while the fixed upper point is `(3, 8)`. The actual dashed horizontal and vertical offsets are 1.5 and 5.75, contradicting their labels. The actual tangent at `a = 1.5` has value 6.75 at `x = 3`, so `(3, 8)` is not on it.
- **Repair:** enforce that the overlay can only appear at `a = 2` and document that prop condition. Generalising the overlay is unnecessary for this fixed pilot. Preserve its current appearance.
- **Teaching consequence:** a future author could reveal the overlay during the moving-point segment and teach a false slope calculation even though the underlying tangent remains correct.
- **Current pilot impact:** none. `pilot.tsx` line 10 finishes moving the point at frame 106; lines 11 and 26 request the overlay only from frame 120, when `a` is exactly 2. This is a reuse finding, not a reason to reject the supplied example.

No other material finding from the checked scope.

## Mathematical verification

- `square(x) = x²`, `squareSlope(x) = 2x` and `tangentAt(a, x) = a² + 2a(x - a)` agree. Point-contact and tangent-slope assertions passed at `a = 1, 1.25, 1.5, 1.75, 2` using the existing exported model.
- Bezier endpoints `(0, 0)` and `(4, 16)` with control `(2, 0)` give `x(t) = 4t` and `y(t) = 16t²`, hence exactly `y = x²`. Clipping to the documented window is appropriate.
- At `(2, 4)`, the tangent is `y = 4x - 4`; `(3, 8)` belongs to that tangent, while the curve at `x = 3` is 9. The final upper point is correctly below the curve in the stills.
- Axis mapping gives 155 horizontal pixels per x unit and 48 vertical pixels per y unit. Final model points are `(402, 330)` and `(557, 138)`: 155 horizontal pixels means 1 x unit and 192 vertical pixels means 4 y units. The inverse-scaled slope is 4. The screen angle is not being used as slope.
- The difference quotient expands to `(2xh + h²)/h`, cancels to `2x + h` for nonzero `h`, then tends to `2x`. Substitution gives `f′(2) = 4`. Screen algebra and README agree.
- This is a pure coordinate example with no physical dimensions. No missing physical unit is implied.

## Learner trace and actual stills

The declared audience already knows limits and algebra (README lines 49 to 51). The useful outcome is to connect geometric rise/run of 4 with the first-principles derivative value of 4.

The moving point establishes the case with `y = x²` visible. Once settled, `(2, 4)`, the triangle and tangent equation provide a stable reference while the first-principles rows develop. Earlier equalities remain available. The cancellation and limit are valid given the declared familiarity, and the README states why `h` can be cancelled. Final substitution and graph check agree.

Desktop frames 260 and 420 show aligned working within the card, without clipped or unintentionally wrapped equations. The point, tangent, triangle and labels have identifiable referents. All three landscape phone stills retain the same layout; main algebra and essential labels remain distinguishable at the supplied width, and the graph check fits. This inspects only those frames, not every intermediate frame or a physical phone.

Short duration, silence, small limit subscripts, landscape-only phone viewing, absence of a beginner explanation/response task and loss of SVG accessibility metadata in MP4 are already documented. They are not new findings. This is a deliberate familiarity demo, not a complete introductory differentiation lesson. No motion, native playback or listening pass is inferred from the stills.

Only this report is owned by this reviewer. Root owns separate repair and integration. No release approval is supplied.

## Initial reviewed source hashes

These identify the source before the separate integration repair.

| Source | SHA256 |
| --- | --- |
| `src/explainer/math/README.md` | `9E2263594C1AAB61D77EC9AFF0680787F1874B67CAA1766E8704581F8C511B83` |
| `src/explainer/math/pilot.tsx` | `42B6E6BD0BF8D8D7F006ED135C2CC1A1E3DF50505988C0CDCA6C77E5A233BDD5` |
| `src/explainer/math/kit.tsx` | `63C61ED4BF27B4CF0BC10289F5B8DB0E050200E64A9E1DC5FA7CD9D475979685` |
| `src/explainer/math/pilot-entry.tsx` | `722C48CB2040C8F21C47E6A24CC0C2FA4C86BC5D54891B00F18C5BD285CCC804` |
| `scripts/render-maths-pilot.mjs` | `B73207B7DC095F30CB35385B3617AEAE7809529231809CB0423A08D5E86FBE59` |

Evidence files below are under `out/explainer/maths-tangent-pilot/`.

| Evidence | SHA256 |
| --- | --- |
| `math-check.json` | `C02DC31CA5449B1F44523CAA58D4E977D4AA100446A64EF9EE87513ED07D4157` |
| `model-check.cjs` | `1AB5411D8142481A18DED711ECD2BECF5C7DB526EE385D282D7702BA98CA4BB9` |
| `playback-review.json` | `0C91AA2D3C33BD8032AC229193988DEE3D4595EF500F04A5AB464827BA87FC88` |
| `maths-tangent-pilot.mp4` | `ABF67D740F8E7FFB048DD9F2680E3A20D7DE576F0E7C801040111201902C1711` |
| `desktop-f80.png` | `31FF63C23199C6D807533A3EBA3C0668B44F1F7DB872BEF579D0C6B440968434` |
| `desktop-f260.png` | `253FC315C3650A287E3AA97A6D92FDC2D1D3BED7977B76DED4D3FACF81DD55AE` |
| `desktop-f420.png` | `4F2444949C040EDD85403E0EA03BDFA4F24CDE2CDE4F3617DE04953B38DF0F79` |
| `phone-landscape-f80.png` | `5921C3203D6E520B4AACD77096FACE64DFB87CF1B8714AB92179A440E2393E78` |
| `phone-landscape-f260.png` | `68FDEC50220AE4ED2B5CFA5E6C87812D8FA1E8218BD4167D74E211B1A3209F59` |
| `phone-landscape-f420.png` | `D6DB7A5AB299F02A44C14B7733A927EA9B75F43D902B859EE67BD50DC785A780` |

## Independent check of the integration repair

Root added a `RangeError` guard at `kit.tsx` line 41, before the frame hook, rejecting `showRise` when `a !== 2`. The component comment and README lines 24 to 26 now state that the triangle is fixed to `a = 2`. This is the narrow repair requested by R1 and preserves the existing diagram design.

Independently bundled the current component and actual shared `prog` helper in memory with `write: false`. Loaded that in-memory module and the pre-repair `model-check.cjs` with a controlled frame value. No artifact bundle or media was overwritten. Confirmed:

- `SquareGraph({a: 1.5, showRise: true})` now throws `RangeError`.
- For every frame from 0 to 449, the actual pilot progress expression yields valid props. All 330 frames with the overlay enabled (120 to 449) have `a === 2`.
- The computed `SquareGraph` element trees match the existing pre-repair model at all 450 pilot frames. This is a deterministic component-data comparison, not a new image render or motion observation.
- `pilot.tsx` and the existing MP4 retain their initial hashes.

R1 is resolved for the documented API. No new playback, listening, full lesson or release approval is supplied.

| Post-repair source | SHA256 |
| --- | --- |
| `src/explainer/math/kit.tsx` | `B11368FE665B0842210FB6974531BFB5D7DE53A0014A414050F245DAB393ECF0` |
| `src/explainer/math/README.md` | `5B611625E8ACBAD6E82B2871CE4D6FF9240B9E0D8595960B1BDD086949C27958` |
