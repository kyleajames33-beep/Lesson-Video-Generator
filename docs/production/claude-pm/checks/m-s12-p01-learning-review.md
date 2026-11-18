# Maths S12 p01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p01.md`, "How do we measure chance from 0 to 1 and list every possible outcome?" Source SHA256 `624773e34ae23e225d0e1d6e8eb62dbb182a3a4785618cc32b4e0808046360aa`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Stage 4 and 5 chance words, simple fractions, Year 11 m01 percentages; no Year 11 probability) as a Mathematics Standard student starting Year 12, once on the Standard 2 route and once on the Standard 1 route (identical content). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

A good opening video for probability. It picks up b07's forecast slip word for word, gives "probability", "chance experiment", "trial", "outcome", "sample space" and "n(S)" a plain meaning before each symbol, and gives real reasons: 0 and 1 are "can't happen" and "must happen"; ten marbles are ten outcomes because each is a separate object; the counts multiply because "each of the six faces can go with heads or with tails". The PIN wheels with the ghost list giving up at 10 000 make multiplying feel necessary, not just quicker. The forecast is said only as a 20% chance treated as 0.2 (ruling 67), the die replaces the sunrise chip (ruling 76), and there is no deck, raffle or stake. Recalculated with Python `fractions` (`work/brief-review-standard-p/verify.py`, `python -I`): 20/100 = 1/5 = 0.2; 1/4 = 0.25 = 25%; 3/8 = 0.375 = 37.5%, slip 3.75; 75/100 = 3/4; n(S) 6, 4 (listed HH, HT, TH, TT), 10, 12 (listed) and 10 000 (listed); 0.35 = 7/20 < 0.5; 5 × 3 = 15, slip 8; the memory-aid case 26³ = 17 576. All correct.

## Findings

1. **Should fix, scenes 3 and 4, A1 and key note 2 (decimal to fraction is asked but never taught).** Scene 3 teaches percentage to fraction, fraction to decimal and decimal to percentage; scene 4's givens card lists the same three. A1 then asks for 0.35 "as a fraction in simplest form", a direction no scene shows. Feedback 1 uses place value ("thirty-five hundredths") for the first time. Also "To go from a fraction to a decimal, divide" does not say what is divided by what, and key note 2 ("Fraction ÷ for a decimal") is cryptic for copying. Fix. Scene 3, after "zero point **two**": "And back the other way, zero point two is two tenths, which simplifies to one fifth." Change "divide" to "divide the top by the bottom". Scene 4 givens card: add a fourth line "decimal → fraction: place value, then simplify (0.2 = 2/10 = 1/5)". Scene 4: "Times a hundred moves the decimal point two places to the right." Key note 2: "Fraction → decimal: top ÷ bottom. Decimal → %: × 100." Students should be able to convert in every direction A1 and the HSC ask for. Time: about 7 s (checked: 0.2 = 2/10 = 1/5 and 0.35 = 35/100 = 7/20 in `work/brief-review-standard-p/suggested.py`).

2. **Should fix, scene 6 ("because the coins are different", while the picture shows two identical coins).** The two coin plates are the same silver coin; only the small labels "coin 1" and "coin 2" separate them. A student who sees one head and one tail either way will ask why HT and TH are two outcomes, and p02 and p03 rely on that answer. Fix. Narration, after "Call them coin one and coin two": "Think of coin one as a ten-cent coin and coin two as a dollar coin." Visual: coded grey tags "coin 1: 10c" and "coin 2: $1" under the plates (no painted change), kept on screen while HT and TH ring; the hand tag "HT ≠ TH" adds "10c heads, $1 tails ≠ 10c tails, $1 heads" as a small caption. Students should see that HT and TH are different results of two different objects. Time: about 5 s.

3. **Optional, scene 1 ("Should the kiosk owner worry?" is never answered).** The hook asks it, and scene 2 places rain at 0.2 without returning to the owner. Either take the named reserve trim, or add after "it could still **happen**": "So the kiosk owner probably gets a dry day, but can't count on it." About 4 s.

4. **Optional, scene 2 (a weaker reason for the coin at a half).** "Right in the middle is a half, even chance, like a coin landing heads" is recalled from Stage 4, which is fine; adding "two sides, one of them heads" would let the chip carry its own reason before p02 formalises it. About 2 s.

## Joins

b07 to p01: scene 1 opens on b07's final frame item for item (the kiosk, the five-row board, the forecast slip "Tomorrow", cloud, "top 30°C", "20% chance of rain", chip "what does 20% mean?"), fades only the label, "Next", "?" and the sixth row, and repeats b07's words "the forecast also says a twenty per cent chance of rain". p01 to p02: scene 14 is section 3 of the decisions file exactly (the bag plate, ten lettered tokens, "S: 10 marbles", the dimmed chance line, "how likely is blue?"), with no probability worked out. Both courses take this path.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's picture is an empty chance line and A2's is the phone with the two option lists and no pairs, so neither gives the answer away. Each feedback gives the answer, the reason, short working and one crossed slip ("P = 35"; "5 + 3 = 8"), about 24 s and 23 s. The school bus and the phone are fair everyday anchors.

## Key notes and length

The five notes are short and useful once note 2 is reworded (finding 1). About 480 s with holds; findings 1 and 2 add about 12 s (about 492 s), well under 570 s.

No speech, design edits, builds or commits were made.
