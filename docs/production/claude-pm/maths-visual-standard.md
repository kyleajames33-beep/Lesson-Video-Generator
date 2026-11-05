# Maths visual standard (owner rejection of d01 v1, 6 November 2026)

Written by Claude (root, designer of record). This replaces maths programme decision 5 ("all maths visuals are coded; no painted plates") and the claim that `math-a12-d01.md` is the maths strand template. Every maths design must meet this before build, and every maths build before render.

## What went wrong in d01 v1

Contact sheets (16 evenly spaced frames each):
- Rejected: `assets/maths-std-d01-v1-rejected.jpg`.
- Reference standard: `assets/maths-std-ref-chem-m5-g01.jpg` (a calculation lesson) and `assets/maths-std-ref-bio-m5-b06a.jpg`.

The owner's verdict was boring, no images or simulations, and nowhere near Module 5. The frames show why:

- **One picture for nine minutes.** Eight of 16 frames are the same axes and curve with small grey chips beside them. Nothing new appears for the eye.
- **No real-world anchor.** The hook is "squash it or slide it", which is abstract. Chemistry g01 opens on a painted campfire, ash and a tree. A question about the real world comes before any symbol.
- **Tiny, grey, low-contrast text.** Chips about 16 px tall, sitting in pale boxes. Worked examples float small in a mostly empty frame ("Find f′(−3)").
- **No colour meaning.** Chemistry colours ΔH red and TΔS blue every time they appear, so the eye tracks each term through the working. d01 shows k, a and b in plain ink.
- **No handwritten voice.** The Module 5 videos annotate in coloured handwriting ("minus a negative adds", "every sign flips"), with circles, arrows and crossings. d01 has almost none.
- **The graph moves, nothing else does.** There is no simulation a student could not get from a textbook figure.
- **The key notes are a wall of text.** Chemistry ends with short bullets and a framed memory aid.

## The bar (every maths video)

1. **Real anchor in the first 20 seconds.** Open on a concrete situation that the maths explains, shown as a painted plate or plates (transparent PNG, never stretched, no people). Examples: a bacterial colony doubling on an agar plate, a cooling cup of tea, a ball's flight, a loan statement, a die or spinner, a Ferris wheel. Return to it when the maths answers its question. It must carry meaning: no decoration and no unrelated art. A pure-proof lesson may anchor on a striking visual surprise instead, but it still needs one.
2. **A new visual idea at least every 60 to 90 seconds.** Vary the stage: anchor scene, live simulation, large graph, full-width working, comparison, memory-aid card. Do not keep one graph on screen for most of the video.
3. **At least one genuine simulation.** The student watches something change that a still cannot show, with a live readout tied to it. Examples: a slider sweeping a parameter while the curve and readouts update; a point riding the curve with its tangent; rectangles filling an area as n grows; dice rolling into a histogram; a tank draining while its graph draws.
4. **Colour has meaning and stays fixed.** Give each role in the lesson a colour (for example k amber, a blue, b teal, the answer green, a mistake red). Use it in the equation strip, the working, the graph and the narration's on-screen echoes. List the colour roles in the design.
5. **Readable at phone size.** Working and equations are large: at least about 44 px at 1080p for the current line and 30 px for supporting lines. Nothing a student must read sits below about 26 px. The current reasoning stage fills the frame; shrink and dim older stages rather than leaving the current one small.
6. **Handwritten annotation in accent colours** for the teacher's voice: short tags, circles, arrows, crossings, "same", "×2". Use the explainer's hand font, as in the Module 5 videos.
7. **Worked examples use the Chemistry g01 layout.** Task strip, a coloured givens card, the equation built term by term with colours carried through, a framed answer, and a crossed classic mistake in red.
8. **The memory aid is a framed card**, and the key notes are short bullets plus that card. No paragraphs.
9. **The surprise is visual.** Whatever the lesson's surprise is, show it happen (a curve landing on itself, a tangent snapping), not only a sentence about it.

## Plates for maths

Painted plates are allowed and expected for the anchor and any real object. Use the `ma12-` prefix and the asset brief format in `lessons/bio-y11-fa1-v05.md`. Coded objects stay coded: graphs, axes, number lines, tables and algebra. A coded cartoon of a real object does not count as a plate. Keep HSC-style conventions for exam-style diagrams.

## Process

- d01 is redesigned to this bar as the new template, then built and rendered as a pilot for owner viewing. No other maths build or render runs until the owner accepts that pilot.
- The other 66 maths designs are audited against this bar (`checks/maths-visual-standard-audit.md`) and upgraded in waves after the pilot is accepted.
- Narration may change where an anchor needs it. Re-voice only the changed scenes on the Google voice; keep unchanged takes.
- The same bar applies to Year 11 Chemistry and Year 12 Physics designs. Those designs already use plates, but they are checked against items 2 to 9.
