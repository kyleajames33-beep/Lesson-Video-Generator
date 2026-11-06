# bio-m5-p03 (frequency data in a population): quality fix, 6 Nov 2026

Grade before: B (frames 1, 3, 4, 5, 15, 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-p03-sheet.jpg`. Narration, audio and timing unchanged; existing word cues only.

## The empty beige panels: not missing assets
They were the coded "desk strip" (`Desk` in `shared.tsx`), a flat beige rectangle drawn under the lower-left plates. All eight brief 71 plates are in `public/assets/biology/` and load (no "painted plate pending" stand-ins in the current build). The desk read as an empty panel because the plates on it were small or had not entered yet. The desk rectangle is now removed (`Desk` is a no-op) and the plates are larger.

## Changes
- **Hook (frame 1, `s1.tsx`).** Clipboard plate enlarged (430 wide) with the "attached: 9 of 28" card on its sheet (56 px); "one class" 48 px.
- **Agreement (frame 3).** The declined blank slip plate enlarged (340 wide); label 38 px.
- **Define (frame 4).** The definition card fills the frame while the three definitions are written, then moves right on "Clear definitions matter" as the same-earlobe disagreement panel appears (no empty left half). Practice diagrams enter on "test" and are larger (labels 32 px).
- **Method (frame 5).** The definition card (large, labelled lobes) fills the right zone from "show the definition card" until the counters arrive; slip box and mirror plates enlarged.
- **Record (frame 6, `s2.tsx`).** Clipboard plate enlarged.
- **Decision rule (frame 15, `s4.tsx`).** One row card per step, each with its picture (slip plate, three lobe lines, two counters' tallies, 18 / 60, mini graph, population field); the class column graph sits on the right.
- **Key notes (frame 16).** 7 short bullets at 38 px, plus a framed "Remember" card.

## Still to check
- At playback speed: the definition card move in scene 4.
- Ready to re-render on the existing narration.
