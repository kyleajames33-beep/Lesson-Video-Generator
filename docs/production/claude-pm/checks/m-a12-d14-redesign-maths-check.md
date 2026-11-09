# Maths d14 Revision 4: independent maths check

Codex, 8 November 2026. Source SHA256 `41dbf387ef5d94be3526df3109fa0b2624a7cffa99f24dc6ab5ffd1c05247840`. Full review of the new anchor and changed scenes; unchanged teaching reviewed for consistency, readouts and joins. No design or speech edits. Independent calculations and scene strings: `work/brief235/d14-calculations.json`.

Result: 0 blockers, 1 should fix, 0 optional.

**235-D14-1, should fix: coordinate sign in the Road and car numerical note.** The note calls -60 degrees the screen angle for a right-facing plate at the cos 2x point. The mathematical heading is -60 degrees, but on the usual SVG/CSS screen with y increasing downwards the corresponding rotation is +60 degrees. Specify the coordinate convention or derive the heading from the transformed tangent vector. Directly using the stated screen angle would make the car face up-right instead of down-right along the road. The scene prose correctly says down the slope; this is a screen implementation note, requiring no re-voice.

The road picture is otherwise correct under the equal-unit map and no-skid assumptions. A tangent direction alone leaves a parallel family; the curve point selects the line. At pi/6 the point is (pi/6, 1/2), slope -sqrt(3), normal slope sqrt(3)/3. The tangent's second intersection is x = 1.316613 approximately, y = -0.873540 approximately. The beam's bright forward ray reaches that point. The full mathematical tangent includes the dim backward extension, as the author explicitly defines.

The quarter turn maps (1/2, -sqrt(3)/2) to (sqrt(3)/2, 1/2); their dot product is zero and the slope product is -1. Symbolic derivatives, intercepts, the flat xe^(-x) tangent and vertical normal, quotient example, both practice answers and both outgoing joins agree. The nonzero-gradient condition on -1/m is explicit. Equal screen scales are necessary and explicitly required.

Fourteen strings sum to 5898 characters; changed scenes 746 and 548. Rounded estimates total 504s, under 570. No em dashes. Changed bold cues follow spoken order. d13's ink cos 2x frame matches the opening. The final blue pair of join curves matches d15's explicit first beat, which changes to ink after that beat.

Source review only. Plates or reused-plate appearance, built motion, exact voiced cues, caption export, machine listening and human listening remain pending. This is not full-video approval.
