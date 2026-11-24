# HMS Year 11 Module 2 V03 Revision 1: independent learning review

24 November 2026. Design `lessons/hms-y11-m2-v03.md`, "What physics are your bones and muscles already obeying, and how does knowing it make lifting and moving safer?" Source SHA256 `415ff9f4560fe748cf3eda96bb914e30576eeab0e5aa48fceee4a0857b78d586`.

Written design reviewed by tracing it from its stated entry knowledge (v01 joints and levers named; v02 muscles pull, eccentric braking) as a student starting Year 11 HMS, using `docs/production/student-learning-review.md`, `AGENTS.md` and `hms-design-brief.md`. Painted plates inspected as thumbnails: `hms-lifting-crate-v1`, `hms-starting-blocks-v1`, `hms-wheelchair-v1`, `hms-running-blade-v1`, `hms-thigh-quadriceps-v1`, `hms-lower-leg-muscles-v1`, `hms-vertebral-segment-v1`. `hms-arm-muscles-overlay-v1.png` (v02) is not yet painted. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 3 notes).

The forearm lever is computed, not asserted (50 N at 35 cm against 350 N at 5 cm), and "What it buys is speed and range at the hand" answers the obvious "why would the body do that?". Scene 8 turns "keep the load close" into a worked torque (20 N m against 60 N m) and keeps the site's care about not promising a single safe posture. The sprinter choosing instability (scene 5) is a good correction of "more stability is always better", and scene 10 treats disability as the same principles applied to different body parts, without pity framing.

## Findings

1. **Should fix, the hook's "legs are stronger isn't the answer" is never closed.** Scene 8's advice "Bend at the hips and knees, so the gluteus maximus and quadriceps do the work across big synovial joints" sounds to a beginner like "legs are stronger" again. The missing link is that bending the knees lets you get close to the load. Add in scene 8, after "So keep the load close": "Bending your knees is what lets you get close to the box, so the distance, and the torque, stay small." (about 4 s), with the crate sliding in as the linkage squats and the torque readout falling. Students should be able to explain the slogan with torque.

2. **Should fix, the second half of 12a is scene 5's taught example.** "Explain why a sprinter in the blocks does the opposite" is answered word for word by scene 5. Keep the tackle and replace the contrast with an unseen one that uses the same principle: "and explain why a swimmer on the starting block leans to the front edge." Feedback: "A swimmer wants a fast start, so she moves her line of gravity to the edge of her base on purpose." Students should transfer "stability resists change in motion" to a case they have not heard.

3. **Note, length.** About 569 s, at the cap. Finding 1 adds about 4 s; trim scene 7's last sentence ("That's why a coach fixes body position before effort") or one stability factor's narration.

4. **Note, scene 9 cites "v01's gait cycle".** v01 has no gait model; the walking run of the linkage is new here. Record it as a new use of `SegmentLinkage` so the builder does not look for it.

5. **Note, density.** A four-area dotpoint (motion, levers, stability, force, fluids, lifting, efficiency) in one video. Each board change is a clean reset and each scene has one model, so the load is manageable, but check scenes 2 and 6 at playback speed.

## Practice and feedback

Both cards stay on screen through the countdown; 12a's picture is the triangle with no answer drawn. 12b (about 24 s) crosses "lower is always better". 12d (about 28 s) models "principle plus structure", which matches the dotpoint's interrelationship demand.

## Join

v02 to v03 and v03 to v04 match (the front-thigh plate with a red supply line "from the chest").

## Reading load and memory

"Balanced while the line of gravity stays inside the base" and "Safe lifting is a torque problem: keep the load close" are both causes a student can redraw. Scene 4's five factors sit on one card beside the triangle. No em dash.

No speech, design edits, builds or commits were made.
