# phys-y12-m8-v06 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v06.md` (Revision 3 with the 24 November coherence fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v06/common.ts` imports `work/physics-prebuild/p-y12-m8-v06/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`cuecheck-m8b.py v06`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v06/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,361 characters, 18 scenes).
- **Holds.** (1) Hook 3 s prediction: the prepared hold sits at the scene end, after "a star can make?"; the design wants it on "prediction" with the answer following at once (misplaced; ring over the answer, tick after the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 4 mass slider runs inside its narration (no hold named).
- **Opening frame:** v05's `M8V05FinalFrame` at frame 0; from frame 1 the core inset and the "how far up?" hand tags fade while the curve, its arrows, the Sun and the hot-blue star stay solid; the heading is already this lesson's question; the "Next" chip fades and the curve becomes a top-right thumbnail on "So how does stellar mass change" (capped).
- **Plates:** Sun, hot-blue, cool-red and white stars, gold ring, planetary nebula, supernova remnant, molecular cloud, Maltese-cross tube (final frame).
- **Plate request (1):** `y12p-neutron-star-merger-v1.png` for scene 9: two painted neutron stars spiralling together, seen from above at a slight angle, small and dense with a faint glow, no text, no people; transparent PNG with alpha, about 1400 × 900, centred with even margins; style as `phys-y11-galaxy-v1.png`. Built fallback: two small coded discs that spiral together, tagged "(schematic)".

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v06/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v06`, topic "STELLAR MASS AND ELEMENTS". Registry: after m8-v05.
- New shared kit file: `src/explainer/physics/atom/elements.tsx` (gold ring, planetary nebula and supernova remnant specs; `TempLadder`, `ReachBar`, `ladderY` on a log scale; `Onion`; N-Z chart `NZGrid`, `nzPt`; `PeriodicTable` (elements 1 to 92, standard layout, cells coloured by a lesson source) and `ElementStrip`). Also `src/explainer/physics/atom/electron.tsx` (Maltese-cross tube spec for the final frame; see v07).
- Reused: `physics/atom/nuclear.tsx` (v05: curve, `NucEq`, `Tally`); v05's `MassBars` and `NucDisc`.

## Stages built

1 the dashed "?" arrows pulse with an amber pen arrow; "1 M☉" and "25 M☉"; 3 s ring with three chips; tick on "the massive star"; purple reach bars (short, tall); the painted gold ring, "Au: beyond iron", ring round the peak; crossfade of the curve to the thumbnail. 2 a Sun-like star cross-section (core of ⁴He nuclei): glow fades, pressure arrows shorten, the core shrinks, readout 1.5 × 10⁷ → 10⁸ K, an amber shell lights, the envelope swells and reddens into the painted cool-red star, an HR thumbnail point moves up and right. 3 helium nuclei on the particle box engine (via ⁸Be, a higher activation energy; counts of carbon and oxygen made), two ⁴He with longer repulsion arrows ("+2 each: more push"), three merging into ¹²C with the framed equation and ticking tallies, alpha-particle chip, ¹²C + ⁴He → ¹⁶O (7.16 MeV), thumbnail arrow to ¹⁶O. 4 the log core-temperature ladder (H to Si), a fuel-out cycle, charges +1, +2, +6 on the first three marks, Ne, O, Si lighting, the purple mass slider 1 → 4 → 15 → 25 M☉ with the reach bar and four live readouts (mass, hottest core, last fuel, ends as), two arrow lengths on the thumbnail. 5 1 M☉ bar stopping below C, slate cross on the C mark, the painted nebula with a small painted white star, He, C, N discs drifting out, the white dwarf growing, an HR point moving to the bottom left. 6 the painted cool-red star as the outside view, C, Ne, O, Si lighting on a small ladder, onion shells filling from the centre (H, He, C, O/Ne, Si, Fe), a stage clock spinning faster with the 15 M☉ durations (Woosley and Janka 2005), "Si: 18 days" ringed, the thumbnail arrow reaching the peak. 7 the full curve with the iron-group peak ringed, a red arrow bending down beyond it, a red barrier, the onion's iron core shrinking under longer gravity arrows, "core radius ≈ 10 to 15 km, in < 1 s", the painted remnant, neutrinos streaming, "about 99%". 8 an N-Z grid: a neutron drifting in (a repelled proton beside it), ⁵⁸Fe + n → ⁵⁹Fe and ⁵⁹Fe → ⁵⁹Co + e⁻ + ν̄ with ticking tallies, the point stepping right then diagonally up-left, stable ink and unstable red rings, slate-crossed "⁵⁹Fe → ⁵⁹Mn", framed "Z: 26 → 27, iron → cobalt", a staircase to "Z = 79: gold" with the painted ring. 9 a schematic N-Z chart: the slow path along the stability band (captures while stable, a decay from each unstable nucleus), "Sr, Ba, Pb"; the rapid path far out and back to "Au, Pt, U"; two coded neutron stars spiralling; the 2017 and 2019 tag. 10 two framed columns (amber tick, slate cross), the painted ring, nebula and remnant shedding coloured discs into the painted cloud, which becomes the painted Sun with a planet dot. 11 the periodic table filling by source with a legend and small plate icons, "first 20 minutes", the iron tag, the gold cell ringed. 12 two reach bars, the red barrier on the curve, a neutron joining an iron nucleus, hand lines. 13 to 16 cards and brief feedback (feedback 1 adds mass bars with the gap × 100). 17 the table shrinking to a strip, the gold cell lifting out into a plain grey atom, the painted Maltese-cross tube with its glow off; heading changes to v07's question. 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v07's learner question** (root rule), on "So how did cathode rays and oil drops reveal" (capped).
- Binding-curve thumbnail kept in scenes 2 to 6 only (scene 7 shows the full curve; scenes 8 and 9 drop it for space).
- Scene 5: the cross on the carbon mark is slate ("not possible", root rule R1); the "never hot enough" hand tag stays red (temperature role).
- Scene 9: the chart is schematic (labelled); the slow path is generated along the band, so stable and unstable stops follow the design's rule.
- Scene 11: lithium to boron, cobalt to zinc and other elements stay grey (the design names no main source for them); a footnote says "grey: other or mixed sources"; the slow-process set (Sr, Y, Zr, Ba, La, Ce, Pb, Bi) is green striped, the rapid set (Eu, Os, Ir, Pt, Au, Th, U) purple.
- Hook: the curve crossfades to the thumbnail rather than scaling (no frames with shrunken text).
- Scene 4's cycle is four chips in a ring with an ink pen ring, rather than arrows.

## Final frame (exported as `M8V06FinalFrame` in `s3.tsx`)

`<HandoffBoard06 f={end} final />`: heading "How did cathode rays and oil drops reveal the electron?"; a 92-cell element strip (x 96, y 176, 18.7 × 40 px cells; coloured by source, gold's cell lifted out) with "H", "Fe", "U" under it; a plain grey atom (360, 560, r 150) labelled "Au (gold)" and "electrons inside? (unknown before 1897)"; the painted Maltese-cross tube (x 1040, y 430, 780 wide, glow off) with "1890s: cathode rays" and a grey hand tag "glass tube, no glow yet"; chip "Next: how did cathode rays and oil drops reveal the electron?". Props `marks`, `tube`, `atom`, `strip` let v07 rebuild it in layers.

## Numbers (all from `common.ts`, checked against "Numbers used")

Triple alpha 3 × 4.002603 = 12.007809 u, Δm 0.007809 u, 7.27 MeV, slip −0.0078 u; alpha capture 7.16 MeV; ignition H ~10⁷, He ~10⁸, C ~6 × 10⁸, Ne ~1.2 × 10⁹, O ~1.5 × 10⁹, Si ~3 × 10⁹ K; Sun's core 1.5 × 10⁷ K; more than about 8 M☉; slider 1, 4 (about 10⁸ K, helium, C-O white dwarf), 15, 25 M☉ (about 3 × 10⁹ K, silicon, iron core then supernova); 15 M☉ stages H 11 million yr, He 2 million yr, C 2000 yr, Ne 0.7 yr, O 2.6 yr, Si 18 days; collapse under 1 s, radius 10 to 15 km, about 99% as neutrinos; ⁵⁸Fe (Z 26, N 32), ⁵⁹Fe (N 33), ⁵⁹Co (Z 27), half-life 44.5 days; Au Z 79; peak 8.8 MeV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v06` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 1 warning** (sparse feedback 1 at its opening). Earlier warnings (24 px ladder and onion labels, a label collision in scene 9, small picture text) were fixed. Report: `out/explainer/Explainer-phys-y12-m8-v06/grade/Explainer-phys-y12-m8-v06-grade.md`.

**Honest grade: B+ on provisional timing.** The ladder with the live mass slider, the onion and stage clock, the barrier at the peak and the capture staircase carry the explanation; motion needs judging at playback speed.

## For root

- Hook pause position (as v04 and v05).
- Open decision 1: the final frame keeps the Maltese-cross tube (v07 opens on it, as built).
- Plate request: neutron-star merger (above).
- m8-v07 opens on `M8V06FinalFrame`.
