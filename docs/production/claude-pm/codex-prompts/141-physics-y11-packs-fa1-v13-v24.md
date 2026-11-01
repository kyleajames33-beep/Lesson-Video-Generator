# Brief 141: Year 11 Physics (2025) pre-design packs for phys-y11-fa1-v13 to v24

Read `00-standing-rules.md` and brief 137 first, and use brief 137's pack format exactly (`claude-pm/pre-design/phys-y11/phys-y11-fa1-v01.md` is the model). This is research and preparation only: Claude writes the designs. Do not spawn sub-agents. No designs, code, speech, renders or commits.

Root approved the physics route on 1 November 2026: `docs/production/phys-y11-video-route.json`. Its rootDecisions apply. Root rewrote the main learner questions for v13, v14 and v16 to v23 as single causal questions; use the route's current wording, not brief 137's placeholders. Syllabus rule: NSW Physics 11-12 (2025), Year 11 only; quote points verbatim with their codenames from `programme/syllabus/phys-new-y11.json`. The 2017 kit (`src/explainer/physics/`) and the image bank's `physics-plan.json` name reusable drawing parts only.

| Video | Main learner question | Site lesson |
|---|---|---|
| phys-y11-fa1-v13 | Why does an object keep the same velocity when the forces on it balance? | fa1 lesson13 |
| phys-y11-fa1-v14 | How do net force and mass together set an object's acceleration? | lesson14 |
| phys-y11-fa1-v15 | How can measured data test the separate effects of net force and mass? (investigation) | lesson14 |
| phys-y11-fa1-v16 | How do we find the forces on an object that is speeding up, slowing down or turning? | lesson15 |
| phys-y11-fa1-v17 | If forces come in equal and opposite pairs, why does anything move? | lesson16 |
| phys-y11-fa1-v18 | How do forces pass between bodies that touch or are tied together? | lesson17 |
| phys-y11-fa1-v19 | Why does it take more force to start something sliding than to keep it sliding? | lesson18 |
| phys-y11-fa1-v20 | How do Newton's laws solve real situations, at rest and in motion? | lesson19 |
| phys-y11-fa1-v21 | Why is the normal force on a ramp less than the weight? | lesson20 |
| phys-y11-fa1-v22 | How does splitting weight along a ramp give the acceleration down it? | lesson21 |
| phys-y11-fa1-v23 | How do we solve ramp problems at constant velocity and while accelerating? | lesson22 |
| phys-y11-fa1-v24 | How does ramp angle change acceleration in a measured experiment? (investigation) | lesson22 |

Site lessons are read-only at `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/`.

For each video:
1. Route check: confirm or correct entryKnowledge, startBoundary, stopBoundary and nextHandoff against the rewritten question; propose changes in the pack (root edits the route).
2. The site's worked examples, numbers reused exactly and recalculated with units and significant figures (use Python; record the script in `work/brief141/`).
3. Misconceptions the site names, plus any standard ones the question invites (for example "a moving object needs a net force", third-law pairs acting on the same body, friction always opposing motion rather than relative sliding).
4. Visual needs named against the physics kit's drawing parts (vectors, free-body diagrams, trajectories, graphs) and the maths kit (`src/explainer/math/`), with any new part needed (for example a ramp free-body diagram with weight components that rotate with the angle, a lift scene, a connected-bodies pair with a tension arrow). No people: use abstract blocks, carts, lifts and ropes.
5. For the two investigations (v15, v24): the method, the variables (independent, dependent, controlled), a realistic data set with uncertainty and the graph that tests the relationship, risks, and the FA0 Working scientifically points each one can teach just in time (propose which; root decides).
6. Two candidate practice questions with worked answers, whose cards do not give away the answer.
7. Site errors written to `claude-pm/site-corrections-phys-y11.md`, without duplicating existing items.

Hand in to `status.md` with one line per video (pack written, route changes proposed, site errors added). Validation summary in `work/brief141/validation.json`.
