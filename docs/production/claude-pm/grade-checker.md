# Automatic grade-A check (from 10 November 2026)

Status: working and calibrated on 10 November 2026 (results at the end). Use it on every build before the sheet goes to root.

## What it is for

The build gate in `maths-visual-standard.md` was checked by a person looking at a 16-frame sheet. This script measures the parts of that gate that can be measured, so any model, Codex or the owner gets the same answer from one command. It measures the rendered page itself (real font sizes after scaling, real opacity, real picture sizes), not the numbers written in the source.

A pass means "no measurable defect was found". It is not teaching or design approval. Root still looks at the sheet, and motion is still judged at playback speed.

## How to run it

```
npm run grade:explainer -- Explainer-chem-m5-g01
```

- It takes the shared stills lock (`out/explainer/.stills-lock`) and waits its turn, so it is safe beside a render queue. It also waits until 0.8 GB of memory is free.
- It renders the 16 evenly spaced sheet frames, one frame in the middle of every answer pause, and one frame late in the key notes.
- Results go to `out/explainer/<id>/grade/`:
  - `<id>-grade.md`: the report to read;
  - `<id>-grade-sheet.jpg`: the sheet, with failing frames boxed in red and warnings in amber;
  - `<id>-grade.json`: every measurement.
- Exit code 0 is a pass, 1 means failures, 2 means the check could not run.

## What it checks

| Rule | Fails when |
| --- | --- |
| Broken picture, font not loaded, fallback font | an image or font did not load (a render defect) |
| Stretched plate | a picture is drawn more than 3% off its true shape |
| Em dash | an em dash is on screen, in the captions or in the lesson source |
| Text too small | 12 or more characters sit below 24 px (labels of three characters or fewer, such as units and subscripts, are held to 18 px). Text between 24 and 26 px warns |
| No line at working size | the largest line in a text frame is below 44 px |
| Faint text | more than half of the frame's text is below 60% opacity or has low measured contrast |
| Text off the frame | text runs past the edge |
| Thin frame | under 25 characters with no plate (250 px or taller) and no drawn diagram |
| Mostly empty frame | more than 60% of the frame's coarse cells are bare paper (a question scene only warns) |
| Unchanged set-up | four sheet frames in a row are almost identical outside pauses and the notes hold |
| Short key-notes hold | the key-notes scene is under 40 s |
| Scene has no picture | a narrated scene has no component |

Warnings (amber, do not fail): a few small characters, 25 to 50% faint text, a sparse frame (50 to 60% bare), content in one corner, text boxes that overlap, three near-identical frames in a row, dense key notes (over 480 characters), few frames with a picture, and no kit countdown found in an answer pause (lessons that draw their own ring trigger this harmlessly).

All thresholds live in one place: `RULES` in `scripts/lib/explainer-grade-rules.mjs`. Rule logic has unit tests: `npm run test:explainer-grade`.

## What it cannot check

- Whether the science or maths is right, and whether the explanation teaches.
- Whether a picture is the right picture, or is only decoration.
- Motion quality, timing against the voice, and transitions.
- Whether a worked example follows the g01 layout.

## Calibration (10 November 2026)

| Lesson | Standing before | Checker result | Comment |
| --- | --- | --- | --- |
| `Explainer-math-a12-d01` | owner-approved pilot | pass, 5 warnings | warns on three sparse frames and 595 characters of key notes |
| `Explainer-bio-m8-b09` | root-graded A | pass, 7 warnings | warns on grey definition text in six frames (25 to 40% faint) |
| `Explainer-chem-m8-c03b` | built before the A gate | fail, 25 findings | tiny washed-out flowchart text, near-empty frames, paragraph notes, 25 s notes hold. Root agrees with every frame it flagged |
| `Explainer-chem-m5-g01` | the October reference sheet | fail | the sheet matches the stored reference frame for frame; the lesson predates the A rules (several half-empty frames, 25 s notes hold) |
| `SimGallery` | new | fail: the 12 s demo notes scene and one sparse worked-example frame | expected for a catalogue of 12 s demos; every simulation frame passed |

What calibration changed: the empty-frame limits were raised from 50/40% to 60/50%, question scenes only warn when sparse, the faint-text failure moved to "more than half", and text of 24 to 26 px warns instead of failing.

Known limits:
- The warnings on the approved builds are real but minor. Treat a warning as "look at this frame", not as a defect.
- The stretch check does not cover plates placed inside an SVG (`<image>`); it covers HTML images and video.
- Sixteen frames can miss a short defect between samples. Use `--frames 32` for a closer look.
- It holds each frame until its pictures are decoded (the same guard full renders use). `scripts/explainer-stills.mjs` does not, so on a busy machine its stills can come out with plates missing. If a hand-made sheet shows blank plates, re-run the frame before blaming the lesson.
