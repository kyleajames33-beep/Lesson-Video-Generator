# Physics m6-v17a: physics and arithmetic check

26 November 2026. Source SHA-256: `a48ca9d30877c8a92590bc164ef2e8ce93d6bce9ce8c88b241fa110c1bcdd270`.

Result: 0 blockers, 0 should fix.

All 40 independent numeric substitutions pass in `work/brief277/check.json` and `check.py`. The five force values, least-squares gradient and intercept, through-origin slope, B, repeated readings and resolution shares agree. The +0.79 and -0.75 g pair gives 0.77 g force signal and +0.02 g drift. At turns 0, 20 and 30 degrees, theta is 90, 70 and 60 degrees. The active lengths are 5.00, 5.32 and 5.77 cm. The 30-degree clearance is 2.88675 cm, below the 3.0 cm gap. B I l sin(theta) stays 0.0075 N in this slab model. Fringing limits the exact equality, as the author notes already explain.

The current-balance direction agrees with I cross B: current right, field into the screen, wire force up. The magnet's force is equal and opposite. With fixed wire, the changed balance load measures this force. Current reversal cancels constant drift provided the actual current magnitudes match; the procedure reads the ammeter. Heating and geometry controls, resolution and repeatability claims agree with the site investigation. The rig does not isolate sin(theta), because active length changes. A wide uniform region holding the whole active wire is needed for that comparison.

For the motor, reversing I or B reverses torque. Two starts from rest compare initial torque; a running-current change is not silently substituted. The noncommutating coil rocks towards zero torque with damping, and the split-ring dead point cannot self-start. Scene 11 obtains R from a steady held-still reading, with back emf zero: 6/3 = 2 ohms. Running back emf is 6 - 0.80*2 = 4.4 V. The block is applied briefly. A slowed motor has less back emf and draws more current. Both practice answers and crossed errors recompute correctly.

Site lesson 07 was read from the read-only clone. Its exact hash, direct prose quotations and matched words are in `work/brief277/check.json`; the force equation agrees after removing HTML/TeX delimiters. The valid/reliable definitions match the full model answer. No clone file changed.

Existing independent learning review and root's Revision 2 resolution remain the teaching authority. This written physics pass is separate from the source error check, artwork, playback and human listening.

## Brief 280 re-check, 26 November 2026

Current source SHA-256: `9c49543b9c46e499b79048f07cedc32e066423a33d9db7591c80fa3b375dd674`.

Result: 0 blockers, 0 should fix.

Revision 2a explicitly puts the illustrative-values tag on scene 11 motor readings. The sole error finding is resolved. Python repeated all 40 arithmetic checks and site-lesson quotation comparisons; all pass. All 18 narration strings still total 6609 characters. All quoted On-cue phrases remain in order. The final override changes only the visual label. The previous syllabus, learning-resolution, practical, joins and question-card checks still apply. Hook prediction, memory, attempt, notes and silent return holds remain required. No design edits or speech requests. Human listening pending. Evidence: `work/brief280/physics-check.json`.
