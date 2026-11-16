# Maths A11 e07 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-e07.md`, "Why does the change of base rule work?" Source SHA256 `089ad3aba78e3f35f315381aff20f03405b56014f83658b83a2b71df2f9edf93`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (e05, e03, e04) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The frozen "switches ÷ digits = 3.32" readout makes students want the reason before the proof arrives, and scene 3 cashes it in: dividing by log₁₀ 2 is multiplying by 3.32. The proof is four rows, each with a heard reason, and it says why a ≠ 1 is needed. "The base goes to the basement" is tied to a check (3^0.565 ≈ 1.86, not 7) rather than memorised blind. The bit is defined at first use and "switches" carries the narration (open decision 1: keep). Recalculated: log₂ 10 000 = 13.288; 2¹³ = 8192, 2¹⁴ = 16 384; log₂ 10 = 3.322; log₂ 10⁶ = 19.93; ln 7/ln 3 = 1.7712; ln 3/ln 7 = 0.5646, 3^0.565 = 1.86; ln 7/ln 2 = 2.807; ln 30/ln 5 = 2.113; 32 log₁₀ 2 = 9.633; A1 ln 50/ln 7 = 2.0104, 7^2.010 = 49.96; A2 x = 16. All correct.

## Findings

1. **Should fix, root ruling 4 not yet applied (the early-rounding warning is still learner copy).** Root ruled on 17 November that the warning moves to an author note. The design still carries it in:
   - Scene 4 narration: "One more habit. Don't round ln seven and ln three before dividing. Rounded values can shift the later decimal places, so keep the full values."
   - Scene 4 visual: on "values" the comparison "1.946 ÷ 1.099 = 1.7707" against "full values: 1.7712", hand tag "keep full values"; the tag also appears in the hand-tag list.
   - Key note 5: "Keep full calculator values; round only the final answer."
   - The mistake list, the teaching checks ("Why early rounding matters"), the "Numbers used" row for `we-1` and open decision 2.

   Fix: cut the three sentences and the comparison from scene 4 (scene 4 then ends on "That's the log of seven thirds", with the bold cue moved to "thirds"); keep "Keep the full calculator values, and divide" as the plain instruction already there. Move the 1.7707 against 1.7712 note to the author notes. Replace key note 5 with something this video does teach and A1 tests: "Check: raise a to your answer; you should get x back (7^2.010 ≈ 50)." Close open decision 2 as ruled. This also saves about 10 s.

2. **Optional, scene 6 (a skipped inequality step).** Narration: "Thirty-two switches give two to the thirty-two codes, and d digits need ten to the d codes. So we need d to be at most log base ten of two to the thirty-two." The step "ten to the d can't be more than two to the thirty-two" is on screen but not said, and the jump to a log of an inequality is new. Fix: "So ten to the d can't be more than two to the thirty-two. Taking log base ten of both, d is at most log base ten of two to the thirty-two." (Log graphs are e08's, so do not justify the direction further; the check rows 10⁹ ≤ 2³² < 10¹⁰ already confirm the answer.)

3. **Optional, A2 (rule picture).** The picture slot shows "logₐ x = (log_b x)/(log_b a)" with empty boxes, a method reminder rather than an answer. Fine as is; noted only because it is the one countdown picture that names the method.

## Joins

e06 to e07 matches (bike lock "0 0 0 0", the three chips, "Next: changing the base"). e07 to e08: the rare card, "value V (hundreds of $) = 2ˣ", V = 2ˣ for x −1 to 3 with its table, "worth $800 when? x = log₂ 8 = 3", "years as a function of value: x = log₂ V", "swap every pair (x, V) → (V, x)?" and "Next: the graph of a log" are e08's opening frame. The rare card's "hundreds of dollars" measure matches e01's 100 × 2ˣ dollars.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, and nothing is answer-bearing. Scene 5's log₈ x example prepares A2. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 23 s, feedback 2 about 24 s.

## Year 12 handoff check

d04 recalls "logₐ x = (log_b x)/(log_b a), here with b = e" and uses log₂ x = (1/ln 2) ln x as a fixed multiple. Scenes 3 and 4 deliver both the ln form and the fixed-multiple picture. Delivered.

## Site link

`exponential-and-logarithmic-functions/lesson08.sa.html` matches the outline. Correct.

No speech, source edits or commits were made.
