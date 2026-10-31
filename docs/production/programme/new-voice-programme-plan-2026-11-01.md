# New-voice programme plan: Year 12 Maths, then Year 11 Biology, Maths and Physics

Written by Claude (designer and PM) on 1 November 2026, from the owner's plan of 31 October and Codex's groundwork inventory (`claude-pm/checks/new-voice-programme-inventory-2026-10-31.md`). This plan is the decision record. Each video still gets its own brief, design and review chain.

## Why this order

| Programme | Students start | Status of groundwork |
|---|---|---|
| **Year 12 Maths (2024 syllabuses)** | Year 12 started in Term 4 2026; first HSC 2027 | **Students are on it now.** Advanced has 59 site lessons, a visual plan for 60 rows and a tangent pilot. |
| Year 11 Maths (2024) | Year 11 started in Term 1 2026 | 235 site lessons (Advanced, Extension 1, Standard); a reviewed secant starter pack; no route. |
| Year 11 Biology (2025) | Term 1 2027 | 75 site lessons, 105 pre-design packs (brief 61), and 17 plates delivered (brief 79). Most ready to design. |
| Year 11 Physics (2025) | Term 1 2027 | 79 site lessons. The 54-family Physics kit maps the old Year 12 course, so a Year 11 map is needed. |
| Year 11 Chemistry (2025) | Term 1 2028 | Deferred a year (owner). Brief 62's review stays on file. |

Year 12 Maths goes first because its students need it this term. The Year 11 science courses begin in Term 1 2027, so their videos should be ready by about February 2027.

## Decisions

1. **Year 12 Mathematics Advanced comes first.** It has the largest cohort, the best groundwork, and Extension 1 builds on it.
   - Extension 1 Year 12 is second (109 site lessons, no content crosswalk yet).
   - Standard (Standard 2 organisation, 63 lessons) is third.
   - Extension 2 is last (86 lessons with old module names, mapping needed).
   - The owner can reorder.
2. **First strand:** the differential calculus opener in Codex's draft (math-a12-d01 to d10: exponential, log and trig derivatives, chain, product and quotient rules, then increasing, decreasing and optimisation). The route JSON, `docs/production/maths-a12-video-route.json`, is made in the module 5 route format, with syllabus action IDs, before the first design. Finance (19 lessons) comes after calculus, because it needs a new cash-flow kit.
3. **The voice is gated by the pilot.** No maths lesson is voiced until brief 124 shows that Google speech plus forced alignment gives word timings good enough for cues and captions. **The pilot needs a Google AI Studio key in `.env.local`.** Design and kit work can start before that.
4. **One visual system.** Maths uses the explainer engine (`src/explainer`), its paper style and fonts, extending `src/explainer/math/kit.tsx`. The kit's first build targets the calculus strand:
   - general function graphs with domains and asymptotes;
   - a moving secant that becomes the tangent, with a local zoom;
   - derivative sign charts and increasing or decreasing shading;
   - extended aligned algebra (factors, cancellation, substitution, retained givens).
   Finance timelines and probability densities come later, when their strands start.
5. **Maths visuals are coded.** Graphs and algebra are coded diagrams, never painted. Painted plates are used only for real-world context (for example a ramp or a tank in a rates question), which the image bank already limits to a few rows.
6. **The house rules carry over unchanged:**
   - plain subject-action sentences;
   - one reasoning stage at a time, keeping established results on screen;
   - worked examples that separate the task, the equation and the grouped givens;
   - "Pause here to answer." and a 10 s countdown;
   - brief feedback;
   - a key notes hold;
   - no em dashes;
   - no people;
   - captions as YouTube CC only.
7. **Codex does the execution work; Claude designs and reviews.**
   - Codex: route drafting inputs, site extracts and pre-design packs, kit components, builds, reviews and checks.
   - Claude: the route decisions, every design, the resolution of findings, and the build reviews.
8. **The uncommitted Physics kit work** (about 40 MB, 280 files): commit the 26 TS/TSX source files, the verifier and helper scripts, and the READMEs and state JSON, after a quick root review. Archive the 208 review PNGs and six silent sample MP4s to Drive with a hashed manifest, outside git. **This needs the owner's OK** (it is untracked work, not Claude's).

## Sequence

| Step | Owner | Gate |
|---|---|---|
| 1. Google voice pilot (brief 124) | Codex | Google AI Studio key in `.env.local` |
| 2. Advanced Year 12 route JSON inputs, site extracts and pre-design packs for d01 to d10; content crosswalk against the 2024 syllabus | Codex (brief 128) | None |
| 3. Maths kit, calculus set (decision 4), as a silent pilot reviewed at playback speed | Codex | Step 2 packs name the needs |
| 4. Route JSON, then designs for d01 to d10, Revision 1 | Claude | Steps 2 and 3 |
| 5. Learning review, science check, error check, voice (Google), build, render, upload | as for science | Pilot passed |
| 6. Year 11 Biology designs from the brief 61 packs, from about December | Claude, Codex | Year 12 science voicing done |
| 7. Year 11 Physics map, then designs; Year 11 Maths route | Codex, Claude | After step 6 starts |

## Open questions for the owner

1. Is Advanced first right, or do you want Standard earlier?
2. OK to commit the Physics kit source and archive its media (decision 8)?
3. The Google AI Studio key for the pilot.
