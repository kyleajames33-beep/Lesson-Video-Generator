# Maths S11 f01 to f08 Revision 1: learning review summary

19 November 2026. Independent student learning review of the ten Formulas and equations designs (`lessons/math-s11-f01.md`, `f02`, `f03a`, `f03b`, `f04a`, `f04b`, `f05`, `f06`, `f07`, `f08`, Revision 1 each), traced from Stage 5 entry knowledge with `docs/production/student-learning-review.md`, against rulings 4 and 88 to 95 and the packs `pre-design/maths-standard/math-s11-f01.md` to `f08.md`. Written designs only: no built preview, playback or human listening is claimed. Design SHA256 values are in each review and in `work/brief-review-s11-f/sha256.txt`.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional |
| --- | --- | --- | --- | --- |
| f01 substitution | should-fix | 0 | 1 | 2 |
| f02 word problems | should-fix | 0 | 2 | 2 |
| f03a rearranging | should-fix | 0 | 2 | 2 |
| f03b y = ax² + c | should-fix | 0 | 2 | 1 |
| f04a speed, distance, time | should-fix | 0 | 3 | 1 |
| f04b stopping distance | should-fix | 0 | 4 | 0 |
| f05 BAC formulas | **blocker** | 1 | 2 | 0 |
| f06 time to zero, limitations | should-fix | 0 | 4 | 1 |
| f07 dosage (held for Codex) | should-fix | 0 | 1 | 1 |
| f08 spreadsheets | should-fix | 0 | 2 | 1 |
| **Total** | | **1** | **23** | **11** |

## The blocker

**f05 scene 5 shows attempt 2's answer.** The weight dial (N 3, H 2) stops at 70 kg reading 0.0315 and 0.0390; attempt 2 asks for a 70 kg man and woman with 3 drinks over 2 hours. Fix: the dial stops at 80 kg (0.0276 and 0.0341), visuals only.

## Ruling 95 changes not yet applied (all should fix)

- f03a: the π circle check is still in scene 4 (cut its last two sentences and their rows; about 12 s shorter).
- f04b: scene 5 still speaks a second reaction time ("just over a second") and its chip says "just over 1 s"; narration becomes "The zero point three v part is the reaction distance." and the chip "reaction (the model has its own built-in reaction time)".
- f05 and f06: the footer still runs through every teaching scene; each review lists the first formula frame and the answer frames that keep it.
- f06 and f07: the 86- and 81-character titles are still in place; use the 58- and 51-character titles, and update f05's "Next:" and f07's "Builds on:" lines.
- f08: "star" is spoken 13 times; the review gives each replacement with "times" and one "the star means times" line.

Applied as ruled: f01's cold open, f02 without brackets, f03b's 73-character title, f04a's preview of f04b, no site link in f05 to f07, f06's "only time does", f08's final frame, the seven new plates. f07 correctly waits for Codex's reference-sheet check.

## Other should-fix findings, by theme

- **Spoken codenames** (f03a, f03b, f04a, f04b, f08): "f01's trip", "like f03a", "Using f03a", "the way we did in f01", "f04b's road-safety model", "just like f04b" would be voiced as letters and numbers. Plain callbacks are given in each review; on-screen grey chips may keep codenames (the accepted Year 12 pattern).
- **Road safety and the P-plate car** (f04a, f04b, f08): a red P (P1, NSW maximum 90 km/h) averaging exactly 90 km/h from Sydney implies speeding; make the coded P green (P2, maximum 100 km/h) for the whole thread and drop the red border from f03b's unpainted plate brief; hide the P when the slider or capstone runs above 100 km/h.
- **f04b attempt 1:** braking 29 m at 72 km/h is less than the video's own 36 m at 60 km/h; use 52 m (0.01 × 72²), stopping distance 76 m.
- **f04a scene 3:** "285 ÷ 3.167 = 90" is false on a calculator (89.99); show "285 ÷ (3 + 10 ÷ 60) = 90".
- **f06 scene 4:** say the early-shift driver is on P plates (0.0075 is legal on a full licence). **f06 scene 5:** too much card text at once; shrink earlier cards as each lands.
- **f01 scene 6:** two 20 cm discs cannot fit inside a 30 cm disc, so the overlay contradicts its own point; use area bars.
- **f02:** the balance cannot split into 1.5 parts (relabel both pans instead); scene 5 never names c ("Let c be the number of cars").
- **f03b scene 6:** "you'll see that ... in Year twelve" is untrue for Standard 1 students (ruling 9); end at "both roots can count".

## Checks across all ten

- **Words before symbols, attention, visual medium:** met in every design; each has a live simulation tied to the main relationship (slots, balance, docket fill, root fork, clock sector, stopping strip, BAC gauge, falling line, part-of-adult bar, fill-down sweep).
- **Practice cards:** every card keeps the full worded question (and any needed formula) on screen through the 10 s countdown; only f05 A2 is given away (the blocker).
- **Feedback:** 19 to 29 s of speech each, answer plus reason plus one crossed slip; no re-teaching.
- **Reading load:** suits Standard 1 except f06 scene 5 and f03a's π check (both should fix).
- **Joins:** f01 to f02, f02 to f03a, f03a to f03b, f03b to f04a, f04a to f04b, f04b to f05, f05 to f06, f06 to f07, f07 to f08 and f08 to l01 all match frame for frame; the P colour (if changed) must change in f03b's frame and f04a's opening together, and f05's footer must stay on its final frame.
- **BAC (ruling 4):** road-safety frame, zero for L and P plates, "estimate only, never a guide to how much is safe to drink", invented adults, no drinking imagery: met in f05 and f06.
- **Dosage (ruling 4):** invented, labelled Medicine A and doses, the doctor or pharmacist line on screen in every scene and in narration three times: met in f07.
- **Anchors and people:** everyday anchors throughout; nobody is drawn (the child is a label card, drivers are the car).
- **Em dashes:** none in any design. **Length:** 438 to 488 s with holds by the authors' estimates, every design under 570 s before and after the fixes (f03a falls to about 443 s).

## Numbers

SymPy 1.14, `work/brief-review-s11-f/verify.py`, run with `python -I`, output `work/brief-review-s11-f/verify-output.txt`: **185 checks, 0 unexpected results** (f01 16, f02 22, f03a 17, f03b 17, f04a 26, f04b 23, f05 15, f06 17, f07 18, f08 14). Every value in every design is correct. Four checks are diagnostic and support findings (the pizza overlay is geometrically impossible; 285 ÷ 3.167 = 89.99; 29 m is below the 60 km/h table value; f05 A2 uses the dial's inputs), and three check suggested replacements (52 m and 76 m; the 80 kg dial readings 0.0276 and 0.0341). Narration counts by `work/brief-review-s11-f/count.py` run 11 to 13 characters above the authors' counts in every design (a method offset), with no em dash and the spoken codenames and "star" counts listed in `count-output.txt`.

## Decisions for root

1. **f05 blocker fix:** dial stop at 80 kg (recommended; visuals only) or change attempt 2's weights.
2. **P-plate colour:** green P (P2) through f03b to f08, with the plate brief's red border removed (recommended), or keep red P and change the Canberra time (loses the exact 90 km/h).
3. **f04b attempt 1 braking:** 52 m consistent with the video's own table (recommended) or the pack's realistic 29 m with the scene 4 values changed instead.
4. **f08 feedback 2:** allow "A spreadsheet needs the star" as a second spoken "star" (it names the symbol), or reword.
5. **f01 overlay:** area bars (recommended) or another true picture of 9/4.
6. **f03b scene 6:** drop the Year 12 promise (recommended) or keep it with a "Standard 2" qualifier.

Gates unchanged: f07's reference-sheet check before narration; Codex's source checks for f04a (285 km), f04b (1.5 s), f05 and f06 (NSW and health.gov.au wording). This review does not replace the exact voiced-preview review or human listening.
