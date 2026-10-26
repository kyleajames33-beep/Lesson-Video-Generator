# Independent review of exact assessment correction draft

25 October 2026. Reviewed root's `docs/production/claude-pm/drafts/physics-maths-assessment-corrections.md`, final SHA-256 `0d98d7b561f45df97b2d83d5ae48be3ad612a7bd784155491c12439d4466c780`. Initial complete review used `f2bbe704306b0311108b99119b647b57d27603bc7843117892b101d7a685cd7f`; the subsequent narrow check confirmed the explicit SA3 revised-demand label at draft line 33 and the review-linked scope footer at line 107. Both changes accurately reflect this review and introduce no blocker. Reviewer did not author or modify that draft. Review scope is its six assessment areas, actual site source anchors and independent arithmetic. No site, code, audio or recording changes; no browser reveal test or playback review.

**Decision: no blocking finding in the correction copy.** It is suitable as a reviewed source-correction proposal within the stated limits. This does not approve applying site changes, recording or release. The draft correctly retains the need to implement and inspect the actual attempt/feedback states.

P1 to P4 and M3 below use the exact paths defined in the draft. Actual P1, P3 and P4 SHA-256 values were rechecked and match the original assessment audit. The prior source read and numerical recheck also covered P2:1098/1106, P4:1184/1193/1194 and M3:385/421. Video repository HEAD remains the original review reference `add81eea0993a7997710a2bd79e150d773865231`; untracked asset and mutable draft contents require their file hashes rather than HEAD alone.

| Area | Independent finding |
| --- | --- |
| 1. Speed scaling | Correctly distinguishes linear flight-time scaling from squared height/range scaling, fixes angle and gravity, and states model/equal-height conditions. Original equations and derivation remain intact. |
| 2. Tangent and limit | Removes the single-intersection definition and the false coincident-point quotient. The finite-derivative scope and nonzero separation are explicit. Requiring the same limiting slope from both sides fits the intended interior-point beginner example. |
| 3. Answer visibility | All original SA1 and SA2 quantities and mathematical outputs remain. Neutral placeholders remove source-level leaks. M3 retains the original cancellation demand. Actual hidden hints, rubrics, captions, diagram labels and speech still require implementation review. |
| 4. Projectile conditions | Q9 now supports exactly the key's 3, square-root-of-3 and 1 ratios. Q11 keeps its speed, angle and all four demands while making equal-height particle modelling explicit. P1 distinguishes peak time from flight time. Revised SA3 fixes all vertical conditions. |
| 5. Numerical values | Q7, Q12 and Q13 values agree with independent full-precision calculations below. The draft correctly separates a rounded threshold from strict clearance and requires unrounded inputs internally. |
| 6. Basketball wording | Retains the original calculation and changes only the ambiguous conclusion. Vertical clearance at the hoop's horizontal position is correctly described. Point-particle limits are explicit. |

## Demand and precision qualifications

SA3 is a deliberate replacement question, not a verbatim repair. The original P4:1167 asks students to choose a numerical example and evaluate a universal-sounding statement. The replacement supplies both component sets and landing conditions, changes the claim's polarity and asks students to calculate both flight times. It preserves evaluation, equation use and a numerical justification but removes independent selection of an example. This is an appropriate bounded test of the intended causal understanding, provided it is labelled a revised item and its new rubric replaces the old verdict and hints together. Do not describe it as preserving every original assessment demand unchanged.

The new SA3 feedback is correct: both nonzero flight times are `20/9.8 = 2.0408163265... s`, hence 2.04 s. The earlier source's 30-degree/60-degree comparison changed both components; the new same-vertical/different-horizontal comparison isolates the claimed cause.

Q7 deserves an explicit clarification of the earlier assessment audit: the original 26.0 m/s is a valid speed slightly above the threshold, not a physically wrong clearing speed. It is not the ordinary three-significant-figure rounding of that threshold. In a strict point-projectile non-contact model the admissible set is `u > 25.9408415588... m/s`, so there is an infimum rather than an attained smallest clearing speed. The draft correctly calls equality a threshold and says strict clearance requires exceeding it. No animation may feed 25.9 m/s into the trajectory and depict positive clearance. This qualification supersedes any reading of the earlier audit that automatically marked 26.0 as an incorrect speed.

The supplied source questions mostly use two-significant-figure data. Three-significant-figure results in the draft are computational reporting choices consistent with the existing keys, not a claim of experimental precision. Long decimals should remain in author evidence or workings needed to explain rounding; a learner frame needs only the useful rounded answer and a statement to retain calculator digits. The draft already requires approximation signs for rounded values.

## Independent calculation evidence

Used Python standard-library trigonometry and the stated ideal projectile equations, independently of asset verifiers. Taking `g = 9.8 m/s squared`:

| Case | Full-precision result | Draft answer check |
| --- | --- | --- |
| P4 Q7, 15 m away, wall 5 m high, 25-degree launch | `sqrt[9.8(15 squared)/(2 cos squared(25 degrees)(15 tan(25 degrees)-5))] = 25.940841558773904 m/s` | 25.9 m/s to three significant figures; strict clearance exceeds unrounded value. 26.0 m/s clears. |
| P4 Q12 components | `ux = 9.64181414529809`, `uy = 11.49066664678467 m/s` | Correct |
| P4 Q12 peak and total times | `1.1725170047739457 s`, `3.9106267735881732 s` | 1.17 s and 3.91 s correct |
| P4 Q12 horizontal distance | `37.70553654256388 m` | 37.7 m correct |
| P4 Q12 landing vertical velocity | `-26.83347573437943 m/s` | Correct; downward sign retained |
| P4 Q12 landing speed and direction | `28.513154858766505 m/s`, `70.2356039646878 degrees below horizontal` | 28.5 m/s and 70.2 degrees correct |
| P4 Q13 launch angles | `25.8141424264715 degrees`, `64.1858575735285 degrees` | 25.8 and 64.2 degrees correct |
| P4 Q13 times using unrounded angles | `2.6660406949598876 s`, `5.511497847275541 s` | 2.67 s and 5.51 s correct |

The Q12 impact-speed result also independently satisfies `v squared = 15 squared + 2(9.8)(30) = 813`. The Q13 two solutions have complementary angles and equal range because their double-angle sines are both 0.784.

Before adoption, check the exact replacement hash, source anchors, retained marks/subparts, attempt/feedback behaviour and selected video script. This review is not a full source-page audit, current syllabus approval, learner trial, human listening result or release gate.
