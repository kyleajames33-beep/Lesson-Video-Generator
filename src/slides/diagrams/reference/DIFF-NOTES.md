# engine3d.ts vs. original tested math — diff verdict

These files are the **original, pre-port** interactive diagrams from the
standalone web project (VSEPR + Circuit). They are here **for comparison
only — not registered, not imported, not rendered**. `allowJs:false` keeps
the `.jsx` previews out of `tsc`; the `.original.tsx` files compile but are
never referenced.

Compared: the FROZEN "SECTION 3 — 3D ENGINE" (`rotate`, `project`,
`depthLerp`) in both originals against [`../engine3d.ts`](../engine3d.ts).
Both originals share the identical frozen engine, so one comparison covers
both.

## Verdict: mathematically faithful. One pixel-affecting difference.

| Function | Original (tested) | engine3d.ts | Rendered-output difference? |
|----------|-------------------|-------------|-----------------------------|
| `rotate` | yaw-about-Y then pitch-about-X | same formulas, same signs | **None** — bit-identical (tuple vs object only) |
| `project` | `f = FOCAL/(FOCAL - z)`, `FOCAL = 4` | `scale = cam/(cam - z)`, `CAMERA_DIST = 4.2` | **Yes, small** — see below |
| `depthLerp` | `min + ((d+1)/2)*(max-min)`, no clamp | same, plus `[0,1]` clamp + `range` divisor | **None** for unit-sphere geometry (in-range) |
| `slerp` | *(absent)* | new | additive — no original to diff |

### The one real difference: perspective constant `4.2` vs tuned `4`
- The reference `ARCHITECTURE.md` explicitly states **`FOCAL = 4` is tuned**
  ("below ~2.5 spheres distort"). engine3d uses `4.2`.
- Effect is small: near element enlargement `4/3 = 1.333×` (ref) vs
  `4.2/3.2 = 1.313×` (engine3d); far shrink `0.80×` vs `0.808×`. ~2% on the
  nearest atoms — a marginally *flatter* (safer, non-distorting) perspective.
- **Not a porting error.** The two live components (`Molecule3DDiagram`,
  `Circuit3DDiagram`) had their `unit` (148 / 222) and depth-cue ranges
  tuned and render-verified **at 4.2**. The reference `4` was tuned for the
  reference components' different scale/geometry. Porting the constant in
  isolation would desync the new tuning without re-verification.
- **Decision: leave `CAMERA_DIST = 4.2`.** For exact numerical parity with
  the reference, the one-line change is `CAMERA_DIST = 4` in `engine3d.ts`
  (no caller passes a `camera` override) — but re-render both diagrams to
  re-verify the look if you do.

### Non-differences worth noting
- `depthLerp` clamp: only changes behaviour for `|depth| > range`, which
  unit-vector geometry never produces. Safe superset.
- `range` param: Molecule3D uses the default (`1`); Circuit3D passes
  `Z_RANGE = 1.0` — both equal the original's implicit `[-1,1]` assumption.
- No sign flips, no rounding differences, no formula changes anywhere.
