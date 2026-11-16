# chem-m8-c10 (infrared spectroscopy): new build, 16 to 17 Nov 2026

Sheet: `chem-m8-c10-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-chem-m8-c10`, measured narration `docs/production/claude-pm/lessons/m8c10/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Not committed.

## Files created
- `src/explainer/lessons/chem-m8-c10/`: `common.ts`, `assets.ts` (IR spectrometer, dropper bottle), `irdata.ts` (generated measured traces), `parts.tsx` (the IR kit for c12 and g03: IG, wx, ty, IRAxes, IRTrace, dipIn, RangeShade with an empty-range hatch, BandMark, SpanBracket, TraceFill, Spring, DataSheet, Beam, MOL10 structures, mirror), `s1.tsx` (1 to 7), `s2.tsx` (8 to 14), `s3.tsx` (15 to 20), `scenes.tsx`, `config.ts`.
- `docs/production/claude-pm/assets/brief246-ir/`: the point files (5 copied from brief 246, 1 extra, 4 digitised here), `digitise-graphs.py` and run files, `make-irdata.py` (builds `irdata.ts`), `README.md` (sources and validation).
- Imports read-only: c09's parts (and through them the M8 practice board), `chem-m7-c01/molecules`, `chem-m5-c06a/s4`.
- `src/explainer/registry.ts`: `config_m8c10` entry.

## Traces (coded only; all measured, liquid film or neat liquid)
| Trace | Source | How |
| --- | --- | --- |
| cyclohexane, 2-methylpropan-2-ol, butan-1-ol | NIST Coblentz 6045, 6880, 6915 | point CSVs in `brief120-nist` |
| ethanol, propan-1-amine, propan-1-ol, propan-2-ol, ethyl ethanoate | J18-E, JFA p51, p50, p31, CAA-EA | brief 246 calibrated point CSVs, copied |
| ethanoic acid | A306-IR (SDBS 306, IR-NIDA-60820) | digitised here from the AIST graph (`acetic-acid-sdbs-306-p3.png`); 15 printed table bands match within 8 cm⁻¹, depths within 3 %T except the narrow 1360 shoulder (table 29, graph minimum 41) |
| propanone | A319-IR (SDBS 319, IR-NIDA-63533) | digitised here (`muenster-p15.png`, left plot; the slide's region arrows removed); 13 table bands within 7 cm⁻¹ and 4 %T, the weak 3414 dip included |

The Bluffton-derived acid and propanone CSVs were not used. No band-list fallback was needed. Every narrated and carded value stays within 15 cm⁻¹ of the measured centre (3340, 1050, 1715, 1060, 1130, 3370, 1200, 1740, 1240, 1050, 3330, 1070 rechecked against the drawn points).

## Readiness review build fixes (brief 245)
- Scene 9: one chip "no broad O–H" with a thin bracket spanning the 3230 to 3550 and 2500 to 3000 shades (chip just right of the bracket so it clears the task line); the 3414 dip has a grey chip "weak, narrow: not an O–H band" below the trace on a short dashed leader, fading on "kind".
- Scene 8 (optional, done): the violet shade follows the recorded envelope (TraceFill) and a thin bracket reads "data sheet: 2500 to 3000".
- Scene 16: the 2500 to 3000 range is a "no broad band" shade with the chip "no broad band: only sharp C–H dips, no acid O–H".

## Plates
`m8-ir-spectrometer-v1` (hook, scene 2 and 3 thumbnails), `p03-dropper-bottle-v1` (hook, scene 13). Both exist; boxes measured. None missing.

## Departures from the design (with reasons)
- Board: the M8 practice board; trace across the upper two thirds; structures and cards in the lower strip.
- Hook: empty small axes with a "?" sit under the plate (the design's axes "across the upper area" would cover the plate).
- Scene 2: the dip on "dip" is a schematic single dip with no numbers (a demonstration, not a compound's spectrum).
- Scene 3: a demonstration dip until "wavenumber"; grey tags for 100% and 0%, and the IR plate thumbnail at lower right (fill).
- Scene 4: three springs (C=O thick, C–O thin, C–H with a small H) and markers on a bare wavenumber ruler.
- Scene 5: a small axis under the text shows where the lit data-sheet rows sit.
- Scene 7: hydrogen bonding drawn as three O–H links of different lengths with dotted bonds (not full ethanol molecules); the fan of violet lines merges into the band.
- Scene 8: the dimer is two ethanoic acid structures facing each other with two dotted links; the ethanol thumbnail sits lower right.
- Scene 11: the two propanol traces are stacked with their structures at left; band labels above the plot where they would cross the trace.
- Scene 12: chips are numbered pills under the axis; the candidate strip is six word chips (four struck).
- Scene 13: step numbers are written into the marker labels ("1", "3", "4").
- Data sheet card: printed ranges use the data sheet's en dash (3300–3500) as a range sign, as on the NESA sheet.
- Key notes: five short bullets.

## Cue check
139 cue phrases resolve; every underline matches its card text.

## Check at playback speed
- Scene 2: spring stretch then bend on "bend"; the beam gap after "absorbs".
- Scenes 6 to 13: each trace drawing left to right; band rings drawing; the fan merging in scene 7.
- Scene 11: the left and right region pulses on "same bands" and "fingerprints differ".

## Grade and ink check
- Scoped typecheck (lesson folders c09 to c12, a scratch tsconfig extending the root one): clean.
- `npm run grade:explainer -- Explainer-chem-m8-c10`: PASS WITH WARNINGS (0 failures, 3 warnings: sparse carbonyl and memory-aid samples, "few pictures": IR traces are single paths, so the checker does not count them as diagrams). Earlier runs failed on 22 to 24 px axis and data-sheet text (the `^{−1}` markup renders at 64%), an empty opening in scene 3 and the countdown caption running off the frame; all fixed. Report: `out/explainer/Explainer-chem-m8-c10/grade/Explainer-chem-m8-c10-grade.md`.
- My grade per frame (final sheet): 1 hook A; 2 reading the chart A; 3 position A; 4 data sheet A; 5 C–H A; 6 acid O–H A; 7 C=O (sample before its marker) A−; 8 N–H A; 9 fingerprint A; 10 bottle Y A; 11 memory aid (before "sword") A−; 12 feedback 1 A; 13 attempt 2 A; 14 feedback 2 A; 15 decision A; 16 notes A. Lesson grade: A.
- Ink check (`ink-check-any.sh chem-m8-c10`, final run): 9 runs. 8 are the deliberate red strikes (crossed chips; the struck candidate words in scene 12). 1 is the coded "Y" on the bottle's painted label (by design). Fixed and re-checked: band labels crossing the trace (O–H labels now sit above the plot), range labels on shade edges, the acid chip over the ethanol thumbnail, the scene 9 chip over the task line, "≈ 1130" on the propan-2-ol dips, and the countdown caption against the card edge.
