# p-y11-v17 physics check

Revision 1, 3 November 2026. Design SHA256 `ae92ba131801fafaeaa3dab107e5fa4d132a77dba7da8b3be3b7882a87374a6c`. Independent calculation `work/brief149/v17-calculations.py` and JSON. No design edited.

Fresh official 2025 Physics source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci980c80f2`, “Use examples to describe the effects of Newton’s third law of motion”. The paired-contact, gravitational and propulsion examples cover this action; the actual v16 lift frame and v18 connected-body handoff match.

At 10 N, the 2 and 5 kg trolleys have instantaneous accelerations 5 and 2 m/s². A half-sine pulse of 10 N peak lasting 0.20 s has impulse 1.27324 N s, giving final speed magnitudes 0.63662 and 0.25465 m/s; constant 10 N over that interval gives 1.0 and 0.40 instead. A1 gives 1.5/(6.0 × 10²⁴) = 2.5 × 10⁻²⁵ m/s². A2 gives 72 N and 2.4 m/s². Both rounded answers and the force directions are correct.

1. **Blocker:** Third-law forces act on different bodies, so they cannot cancel in the force sum on either one. They do cancel as internal forces when summing the two-body system. Scope every absolute “never cancel” statement to an individual body.
2. **Should fix:** A touches the track as well as B. Describe the unbalanced horizontal interaction, not all contact.
3. **Should fix:** Separate the constant-force calculation and movement from the earlier half-sine pulse, or use the pulse's actual impulse for its motion. The statement that the peak gives accelerations 5 and 2 is valid at the peak.

Source Q1/Q2 omit relevant water forces and are logged separately. Count: 1 blocker, 2 should fix, 0 optional.
