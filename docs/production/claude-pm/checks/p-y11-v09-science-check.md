# p-y11-v09: physics check

Reviewed Revision 1 on 2 November 2026. Design SHA256 `4364f56b9846ff00c481af63c6c1dd2d6b89b17b81652a35ff36b08f253aadd6`. Written design and site source only; no built frames or audio. Narration recount 6,297 characters in separate scenes (6,312 with joining spaces); stated duration about 566 s. Per-scene counts: 522, 511, 285, 503, 453, 443, 441, 542, 463, 508, 216, 383, 227, 403, 322, 75.

## Official 2025 syllabus

- `ci72f29382`: "Solve problems involving uniformly accelerated motion in one dimension using s ⃗ = u ⃗ t + 1 2 a ⃗ t 2 , v ⃗ = u ⃗ + a ⃗ t and v ⃗ 2 = u ⃗ 2 + 2 a ⃗ s ⃗". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

The mathematical notation above is written in linear form, as in the route. The fresh official MathML HTML matches; its plain-text flattening in the validation JSON separates fraction and exponent tokens.

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief145/syllabus-validation.json`.

## Recalculation and source comparison

Every listed number, position mark, velocity mark, rounded answer and rejected answer was recomputed in `work/brief145/v09.py`; results are in `work/brief145/v09-calculations.json`. SymPy verifies the area identity and the time-eliminated equation. Site lesson09 SHA256 is 3c540cd6aa58bdc9a37373bf990ff4ffa164ea3d312980d884db0923d475867a, exactly the design source hash. Its worked example remains 30 m/s, zero final velocity and 5.0 s, yielding 75 m. The design deliberately finds acceleration first while retaining the correct site values. The v08 example gives 2.0 m/s², 32+64=96 m and v²=400. The half-speed value is 18.75 m, or 19 m at two figures. A1 gives 6.00 m/s and 9.00 m; A2 gives -4.00 m/s² and 3.00 s. Braking signs are scoped to positive velocity; the same-acceleration and brakes-already-on conditions are retained. A negative elapsed stopping time is correctly rejected. The equation with squared velocities is applied only in the accepted one-dimensional signed setting. The time-elimination step requires a nonzero a, stated in author note (a); the resulting identity also holds at a=0. No unsupported fourth syllabus equation is claimed.

## Findings

1. **Should fix:** Scene 15 says a falling object has a constant acceleration too, called g, without restricting it to gravity-dominated free fall. A falling object with appreciable drag need not have constant acceleration. Replace that sentence with a short statement of the gravity-only condition, for example In free fall, with air resistance negligible, the acceleration is g. Fund any extra characters by the named scene 6 reserve cut. This preserves why v10 can use the equations.

2. **Should fix:** The separate Opening frame assumption paragraph and Open decision 1 still direct the build to start on a shaded graph with a gradient triangle. Scene 1 now correctly opens on v08 two boxed relationships and five chips, per root decision 1. Mark the old assumption and options as resolved and point to the repaired first visual. Silent correction; no added time.

3. **Should fix:** The root-edited scene 1 is 522 characters, but the narration table still says 507. Its printed scene rows sum to 6,282; the current separate-scene sum is 6,297 (6,312 with the 15 inter-scene spaces). Update the headline and scene table for the +15-character opening change. The same hold budget gives about 567 s, still below 570 s; exact voiced timing remains pending.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

MathML transcription for readability: s⃗ = u⃗t + ½a⃗t²; v⃗ = u⃗ + a⃗t; v⃗² = u⃗² + 2a⃗s⃗ (one-dimensional signed motion). The formula structure is retained in the route sourceHtml; the quoted freshText above is its plain-text extraction.
