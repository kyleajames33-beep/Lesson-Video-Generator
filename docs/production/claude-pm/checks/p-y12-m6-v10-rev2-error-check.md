# Physics Year 12 Module 6 v10 Revision 2 error check

Codex, 9 November 2026. Source SHA256 `633050cf04dabc6ad9ed48049bf60214557727f67f7946e673011ecaa8303069`. Error-only repair check; original learning/science reports retained. No design, narration, scene or speech edits.

Result: 0 blockers, 1 should fix, 0 optional.

- **Should fix, scene 5 new live gradient readout.** The added readout is labelled Delta(NPhi)/Delta(t), but the specification says it and |emf| jump between 3.0,0,8.0. On the falling segment, linkage changes from0.060 to-0.020 Wb in0.010s: the signed gradient is **-8.0 Wb/s**. The emf is+8.0V and its magnitude is8.0V. Keep the gradient sign separate from the magnitude readout, or explicitly label the gradient's magnitude. The earlier triangle and signed emf bar are already correct. This issue comes from the new live-control text, not the original numerical example.

The prior brief189 finding is resolved: scene3 says the doubled turns give twice the emf, and the changed bold cue emf is verbatim and in order. The two emf bars show the factor of2, while the needle is labelled illustrative with circuit resistance acknowledged. It no longer promises an unconditional doubled current-meter swing.

Independent calculations in `work/brief232/v10-calculations.json` give graph gradients+3,0,-8 Wb/s, signed emf-3,0,+8V and magnitudes3,0,8V. The200turn coil has initial per-turn flux0.002Wb and linkage0.4Wb-turn;field removal in0.20/0.020s gives2/20V. The missing-N slip gives0.010V. Rod speeds0/1/2/4m/s give area rates0/0.2/0.4/0.8m²/s and emf magnitudes0/0.10/0.20/0.40V. The slider's flux holds when stopped. Attempt1 change0.004Wb gives2V,with wrong final-flux result3V,and zero after constant flux. Attempt2 area rate1m²/s gives0.30V,and zero after stopping. Site arithmetic gives30/300/25/16/64/10/20V. All other numeric readouts and spoken rounding agree.

The explanation separates per-turn flux and flux linkage,emf and current,and field presence and flux-change rate. Open circuits can retain emf without sustained current. The graph takes a linkage derivative without an extra N. The practical magnet/coil sequences remain illustrative and make no school-approved method claim.

All14 narration strings and visual specifications were read. Bold and quoted reveal cues match spoken order,including emf in scene3. Both question cards preserve givens through countdowns and feedback. Scene sum6187characters matches the headline;estimated556s is under570. No em dash or drawn person/hand. All listed plates,including the alternative wide coil and delivered meter/needle,exist with uniform scaling specified. Bore fit and same-scale magnet passage remain an explicit build check,not a source-only pass.

Written v09/v10 and v10/v11 joins match,including the two possible current arrows,dimmed leads and conservation-of-energy question. Excerpts and hashes are recorded. Integrated needle motion,graph/readout rendering,voiced cue timing,captions and human listening remain pending. The shared CRT retry is separate.
