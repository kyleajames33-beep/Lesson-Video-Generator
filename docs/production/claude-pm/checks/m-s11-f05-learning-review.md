# Maths S11 f05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f05.md`, "How do the BAC formulas estimate blood alcohol from drinks, hours and body weight?" Source SHA256 `527338deb40152d3660161c56ee6464ffebc0d030d0b38bc8174639f117c2f77`.

Written design reviewed by tracing it from its stated entry knowledge (f04b: alcohol slows reactions; f01: substitution with brackets, rounding at the end; Stage 5 decimals) as a Year 11 Mathematics Standard student. Checked against rulings 3, 4, 89 and 95 and the pack `pre-design/maths-standard/math-s11-f05.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: blocker** (1 blocker, 2 should fix, 0 optional).

Ruling 4 is carried well. BAC arrives from f04b's stretched reaction distance, so it is a road-safety measure first; "zero, not just low, zero" for L and P plates is said in the hook; "only an estimate, never a guide to how much is safe to drink" is in scene 1; every worked person is an invented adult; drinks are numbered tokens, never glasses. The formulas are explained in plain words (grams in, less an allowance for time, spread through the body) before the board, the no-brackets slip gives an impossible −224.7, and A1's crossed slip ("under 0.05, so OK to drive") is exactly the misconception that matters for a P-plater. Recalculated with SymPy 1.14 (15 checks for f05): 17.5 ÷ 544 = 0.0321691 ≈ 0.032; slip 40 − 22.5 ÷ 6.8 × 80 ≈ −224.7; 15 ÷ 330 = 1/22 ≈ 0.045; at 70 kg (N 3, H 2) 0.0315 and 0.0390, ratio 6.8/5.5 ≈ 1.24; −5 ÷ 510 ≈ −0.0098; A1 17.5 ÷ 357.5 ≈ 0.049; A2 15 ÷ 476 ≈ 0.032 and 15 ÷ 385 ≈ 0.039. All correct.

## Findings

1. **Blocker, scene 5 against attempt 2 (the attempt's answer is shown two minutes earlier).** The weight dial holds N = 3 and H = 2 and "stops at 70 kg (0.0315 and 0.0390)", with "male" and "female" readouts side by side; the Decisions line calls this the visual surprise. Attempt 2 asks for exactly this case: a 70 kg man and a 70 kg woman, 3 drinks over 2 hours, to three decimal places. A student who remembers the dial copies 0.032 and 0.039 without calculating, so the response opportunity tests recall, not the formula. Fix (visual only, no narration change): the dial stops at 80 kg, reading male ≈ 0.0276 and female ≈ 0.0341 (checked), the "≈ 1.24 ×" chip unchanged. Update the Decisions line "Visual surprise" and author note (d) to 80 kg. Attempt 2 then needs both formulas worked from scratch, while scene 5 still shows that the female estimate is always higher.

2. **Should fix, footer placement (ruling 95).** Root ruled that the ruling 4 footer shows on the first formula frame and on every answer frame, not in every teaching scene; the design runs it through scenes 3 to 11 and the key notes. Fix: footer "Estimate only. Never a guide to how much is safe to drink. L and P plates: zero." on scene 3 (the first formula frame); in scene 4 from the gauge fill and framed answer onward; on scene 5's example B answer; on scene 6's "model says 0" frame; on feedback 1 and feedback 2 (from their framed answers); and on scene 12's frame (it shows the 0.032 estimate, and f06 opens on it). Not in scene 2, scene 7 or the attempt cards (they show no result), nor in the key notes (note 5 and the memory card's key line already say "An estimate only" and "L and P plates: zero"). Update the header "Owner rules applied", the shots note and the ruling 4 check line. Students see the warning wherever a number could be mistaken for advice, and the teaching frames are less crowded.

3. **Should fix, description (ruling 95's f06 title).** "Next: How Long Until BAC Reaches Zero." becomes "Next: BAC: Time to Zero and Limitations." when f06 takes its 58-character title.

## Joins

f04b to f05: scene 1 opens on f04b's final frame exactly. f05 to f06: scene 12's frame (the sign about 440 px with the car badge, the plot 0 to 4 h and 0 to 0.04, the green zero line "L and P plates: 0", the amber point "invented example: 0.032", the dashed arrow to "?", "When does it reach 0?", the footer, no formula or time) matches f06's Boundary; keep the footer on this frame (finding 2) so the join holds.

## Practice and feedback

Both cards keep the full question, the formula(s) and the "invented example" tag on screen through the countdown; picture slots are empty gauges. Feedback 1 (about 26 s) and feedback 2 (about 25 s) each give the answer, the meaning (a P-plater must not drive; a smaller divisor gives a bigger estimate) and one crossed slip. Sources (nsw.gov.au limits, health.gov.au standard drink, a NSW source for "grams per 100 mL") wait for Codex before narration, as the handover says.

## Key notes and length

The notes are short and safe: they state the zero limit, the formula, what N, H and M are, and "An estimate only". Narration 4,759 characters by this reviewer's count, about 444 s with holds, 126 s under the cap; under 5,000 is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
