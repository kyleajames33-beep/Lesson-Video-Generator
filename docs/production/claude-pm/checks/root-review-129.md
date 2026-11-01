# Root review of the brief 129 maths kit pilot (1 November 2026)

**What I reviewed:** desktop stills at frames 440, 900, 1400 and 1940 of `out/explainer/maths-calculus-kit-pilot/`. I checked them as stills only; motion needs judging at playback speed when a lesson is built.

**Accepted.** The components are fit for building the d01 to d10 lessons. The maths in every frame I checked is correct:
- ln x: domain x > 0, with the asymptote shown.
- e^x/(x+1): the sign chart splits at the excluded point −1, decreases on both sides of it, and increases after 0.
- d10: f(1/2) = 8.5, f(2) = 4 and f(4) = 5.
- e^(x+1): height = gradient = 2.718 at x = 0.

**Fix before the first lesson build:**
1. **Gradient readout placement** (frame 440, ln x). The "gradient = 0.25" readout sits at the lower left, far from its point at x = 4. Readouts must sit next to the point they describe, or in a fixed readout panel joined to it by a leader.
2. **Small-panel tick crowding** (frame 1940, gradient dots). The x tick labels (−0.38, 0.25, 0.88) crowd together, and the caption "Dots: (x, gradient), same y scale" overlaps them. At small panel sizes, use fewer, rounder ticks, and keep captions clear of the axis labels.
3. **Note on frame 900:** the quotient algebra panel shows a lone "=" with an empty line. If that is a mid-animation frame, there is nothing to fix. If it is a resting state, the line must be filled or hidden.

These fixes are small, so they go into the first maths build brief, not a separate one.
