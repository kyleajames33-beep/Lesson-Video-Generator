# Maths Standard Year 11 m01 to m09 and a01 to a11: learning review resolution

24 November 2026. This is the design author's resolution of `m-s11-m-a-learning-review-summary.md` and the per-design files `m-s11-<id>-learning-review.md` (the summary's last line still names them `math-s11-...`; the files were renamed to `m-s11-...`, and every design already cites the new names). It applies root's eight rulings for this round: (1) m06 A2 at 10 000 km a year, car A wins by $625; (2) a02 A2 uses a 25 × 12.5 × 10 cm paver, 320 both ways; (3) a07 scene 6's diagonal becomes a third check, keeping the slip "a slanted edge used as a height"; (4) m03's memory aid reworded to fit the $492 on-time total; (5) every unit ladder drawn with the biggest unit at the top, the rule said as "going down to a smaller unit, multiply", in a01 to a04; (6) realistic contexts in m02, m04, a03 with a09, a05a, a05b, a06 and a10; (7) feedback rows split so each result writes on its own spoken cue; (8) m05's stamp duty shown as a dated example and flagged with a11's reference-sheet sentence for the Codex maths check.

All 21 designs now carry "Revision 2 (24 Nov 2026): learning review resolved" in their Status line, a "Revision 2: learning review resolved (24 Nov 2026)" section with the detail finding by finding, an updated narration line and a Revision 2 paragraph in "Narration length estimate". This round changed documents only: no speech, build, render or commit. The t and n strand designs were not touched.

**Checks run.** Every changed number recalculated with exact decimal arithmetic (scratchpad `s11ma/verify.py`, `python -I`: 35 checks, 0 failures; m06 A2 and its break-even distance, the a02 paver both ways, the a03 and a09 pool, the a05b track, the a06 ramp, the a07 diagonal). Narration recounted with `work/brief-review-s11-e/count.py` (the counter named in the design status file). Every attempt still ends "Pause here to answer."; every feedback is 16.8 s to 28.9 s. No em dash or en dash in any of the 21 designs or in this file. A bold-cue order check (scratchpad `s11ma/cuecheck.py`) finds no new mismatch; the 11 it lists are present unchanged in the Revision 1 files (phrase cues and "(last)" forms the heuristic cannot match). Edits were made by exact-replacement scripts (scratchpad `s11ma/ed.py`, `fin.py` and one edit file per design). Codex's maths check remains the authority.

**Totals:** 80 findings (3 blockers, 18 should fix, 59 notes). Blockers: 3 of 3 resolved by root's rulings. Should fix: 18 of 18 applied. Notes: 39 applied or taken as preview checks, 20 needed no change (the reviewer said so, or the design already met them). None declined.

## Blockers

- **m06 B1 (A2 answered before it is asked).** Root ruling 1, verified: at 10 000 km a year car A costs 18 000 + 5 × 2025 = $28 125 and car B 22 000 + 5 × 1350 = $28 750, so car A is cheaper by $625 (B saves $675 a year, $3375 over five years, short of the $4000 price gap; break-even about 11 852 km a year). Scene 7 now says its distance ("Both are driven fifteen thousand kilometres a year", where B wins), and drops "You'll find the five-year totals in the second question". A2's countdown picture is two blank purchase blocks with no fuel blocks or totals. Feedback 2 has one result per cue, the reason "At this distance, B saves only six seventy-five a year", and the crossed slip "B, because it was cheaper in the video".
- **a02 B1 (whole bricks in 1 m³).** Root ruling 2, verified: the paver is 3125 cm³ = 0.003125 m³; 1 000 000 ÷ 3125 = 320 and 4 × 8 × 10 = 320, so volume and stacking agree. The card asks how many whole pavers fit "in a cube 1 m on each side"; feedback shows both routes; the crossed slip is "3125 ÷ 100 = 31.25 m³".
- **a07 B1 (the diagonal "bad cut").** Root ruling 3: the diagonal is a third check (½ × 20 × 30 = 300 m² with the right angle at the front; ½ × 40 × 20 = 400 m² with the 40 m side as base and the block's 20 m width as perpendicular height; 700 m² again). The crossed slip stays as "a slanted edge used as a height", "½ × 22.36 × 40". The "no known height" tag and Decisions wording are replaced.

## Should fix

- m01 SF1: the cost-price condition added to scene 6 ("Unless a question asks for a percentage of the selling price, use the cost price") and key note 5. SF2: "with r per cent written as a decimal" said in scene 7; "Up 3%: × (1 + 0.03) = × 1.03" on the card and key note 1.
- m02 SF1: root ruling 6. A2 is a London hotel room, £54 a night including VAT (standard-rated); numbers unchanged; Codex asked for the dated GOV.UK page.
- m03 SF1: root ruling 4. New card "Interest-free isn't free: account fees even on time, late fees when you miss.", said in scene 7; key note 3 adds "even if on time". SF2: A1's givens grouped one per line in a box above the three questions, and "There's a lot to read, so pause the video if you need more time." before "Pause here to answer."
- m04 SF1: root ruling 6. Buyer two pays $200 today plus 7 × $200, 14 weeks, "about three months", shown on a token card.
- m05 SF1: root ruling 8. Grey chip "NSW rates, 2026, example" on the scene 2 and 3 cards; A1 gives the rates as the question's data ("In this question, stamp duty is ..."); the rate and the chip's date flagged in Codex brief item 3. SF2: an example $700 third-party property excess, so column 2 reads "you pay 3000 + 700 = $3700". To pay for it, scene 1's named reserve trim was applied ("Or you might borrow.").
- m06 SF1: "fifty-four oh eight" spoken to match 5408.
- m07 SF1: cost per day no longer read as usage ("compare kilowatt-hours per day", with 812 ÷ 91 ≈ 8.9 kWh a day shown).
- m08 SF1: option (a), every number unchanged: "That's mostly fixed costs, but the fuel changes with how far you drive, so it goes with the needs that change."
- a01 SF1: root ruling 5 (see "Ladders" below).
- a03 SF1: root ruling 6, with new numbers rather than a rename: an 8 m by 4 m by 1.5 m backyard pool, 48 m³ = 48 kL, $129.60 to fill at the example $2.70 a kilolitre, 40 hours by hose, 0.048 ML, "more than fifty" in an Olympic pool. The water-truck clause is gone.
- a04 SF1: scene 6 now has three beats: the zero rule ("Zeros before the first digit just hold the place ... A zero between digits does") with the 0.000 304 6 slip, then the rounding with its reason ("The next digit is a nine, so the last one rounds up to two"), then the E display on its own stage. The "Nobody needs all eight digits" trim is used. Scene 6 is still the longest in the strand (1,169 characters), but no beat carries more than one idea; the voiced preview should confirm the pace.
- a05a SF1: root ruling 6. "Mulch is sold by volume, but to know how much you need, you first need the area it covers, in square metres."
- a05b SF1: root ruling 6, option (b). Standard track inside edge: P = 2 × 84.39 + 73π = 398.12 m ("a lap is called four hundred metres because it's measured a little way out from that edge"; 0.30 m out gives 400.00 m); A = 84.39 × 73 + 36.5²π = 10 345.86 m², "just over a hectare". Track geometry added to Codex brief item 3.
- a07 SF1: the apex is "forty metres in from the left", the right piece "a hundred and twenty minus forty, eighty metres wide", with plan labels, and the two Pythagoras rows on separate cues.
- a11 SF1: "eighteen metres wide, and two parallel side boundaries at right angles to it".

## Notes applied (selected) and preview checks

- Contexts (root ruling 6): a06 A2's ramp now rises 0.45 m over 6.5 m (6.48 m across, about 1 in 14.4; slip 6.52 m); a09's sloping pool is a03's pool (8 m by 4 m, 1 m to 2 m deep: 12 m² × 4 = 48 m³, average 1.5 m, so the callback still holds); a10's melon is held down by a lid ("Melons float"); a02's netball courts are an area comparison, not a layout.
- Wording: a01 hook shortened to one sentence, "sodium 95 mg", "about twice the drive from Sydney to Brisbane"; a03 scooter ("The cc means cubic centimetres"); a04 "about three nanometres", feedback 2 shortened (28.8 s to 25.8 s); a05a "four metres high" and the "next week's tool" claim removed; a05b names theta; a06 "people in Babylon and India knew this pattern before him" (added to Codex's list) and scene 5's two unillustrated sentences cut; a09 "V = A × length"; a10 "The pour shows it for this cone, and it's been proved for any cone"; m02 "shops show prices with the GST already in"; m04 "Whatever the seller calls it" and the methods chip on A2's card; m07 "Watts measure how fast an appliance uses energy"; m08 the copied formulas "=D2/3", "=D3/3", "=D4/3"; m09 "check spending regularly, every week or month" (card and scene 7; its open decision closed).
- Preview checks recorded in the designs: m01 scene 6's comparison strip fading; m02 spoken money forms; m05 scene 5 reading load (root's split option kept); m06 the 12-row sheet's active cell; a01 scene 5's four examples; a03 the carton grid; a04 scene 6's pace; a05a scene 3's readouts.
- No change needed: m01 N3, m02 N3 (Codex dates the rate pages), m03 N1 and N2, m04 N3 (fridge plate), m05 N2 and N3, m06 N3, m07 N2 (plates), m08 N3, m09 N2 and N3, a05b N2 and N3 (the 3.14 readout already sits beside the π row), a06 N3, a07 N1, a08 N3, a09 N3, a10 N3, a11 N2.

## Ladders (root ruling 5)

a01 fixes the picture and the words; a02, a03 and a04 now match. Every ladder is drawn with the biggest unit at the top: km, m, cm, mm; t, kg, g, mg; ML, kL, L, mL; a02's cm² over mm², m² over cm², and km², ha, m²; a03's bridge ladder ML, kL = m³, L, mL = cm³; a04's prefix ladder T, G, M, k, then c, m, µ, n. Arrows down are "×", up "÷". a01 says "Put them in a ladder, with the biggest at the top", "going down the ladder to a smaller unit" and "going up the ladder to a bigger unit". Its card is "Going down to a smaller unit (more of them): multiply. Going up to a bigger unit (fewer): divide." and key note 4 is "Down to a smaller unit: multiply. Up to a bigger unit: divide." a02's scenes 2 and 7 and a04's scene 5 use the same words. The `UnitLadder` kit row records the orientation. a01's Year 12 chips ("1 mm = 0.001 m", "1 km = 1000 m", "1 L = 1000 mL") are unchanged.

## Feedback rows (root ruling 7)

Split so each result writes on its own spoken cue: m01 F2; m03 F1; m05 F1 and F2; m06 F1 and F2; m07 F1 and F2; m08 F1 and F2; m09 F1 and F2; a02 F2; a06 F2; a08 F1 and F2; a09 F1 and F2. Where a cue was needed, one existing word was made bold; no feedback sentence gained more than a few words. a10's single-chain rows are unchanged, as its review advised.

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Feedback 1, 2 |
| --- | --- | --- | --- | --- |
| m01 | 5,651 | 5,861 | about 530 s | 21.9 s, 24.3 s |
| m02 | 5,487 | 5,499 | about 499 s | 21.8 s, 17.7 s |
| m03 | 5,537 | 5,708 | about 515 s | 27.2 s, 16.8 s |
| m04 | 5,603 | 5,638 | about 511 s | 22.9 s, 28.2 s |
| m05 | 6,250 | 6,241 | about 559 s | 25.2 s, 24.8 s |
| m06 | 6,242 | 6,228 | about 561 s | 26.2 s, 28.9 s |
| m07 | 5,790 | 5,962 | about 535 s | 26.6 s, 21.4 s |
| m08 | 5,638 | 5,749 | about 523 s | 26.0 s, 18.4 s |
| m09 | 5,532 | 5,551 | about 512 s | 20.4 s, 25.8 s |
| a01 | 5,732 | 5,750 | about 522 s | 18.0 s, 25.6 s |
| a02 | 5,607 | 5,620 | about 513 s | 21.7 s, 26.7 s |
| a03 | 5,542 | 5,437 | about 500 s | 21.1 s, 23.2 s |
| a04 | 6,055 | 6,162 | about 553 s | 24.1 s, 25.8 s |
| a05a | 5,534 | 5,594 | about 513 s | 17.1 s, 23.7 s |
| a05b | 5,692 | 6,013 | about 542 s | 28.0 s, 25.8 s |
| a06 | 5,581 | 5,497 | about 504 s | 19.5 s, 26.1 s |
| a07 | 5,697 | 6,054 | about 545 s | 18.9 s, 28.0 s |
| a08 | 5,613 | 5,613 | about 512 s | 20.8 s, 25.6 s |
| a09 | 5,672 | 5,585 | about 509 s | 26.4 s, 20.4 s |
| a10 | 5,583 | 5,651 | about 515 s | 17.1 s, 17.6 s |
| a11 | 5,737 | 5,759 | about 523 s | 18.3 s, 22.3 s |

All 21 stay under the 570 s cap with holds. m05 (559 s) and m06 (561 s) remain the tightest, each with a named reserve trim; m05 also keeps root's split option. a04 (6,162) and a07 (6,054) grew the most in the a-strand, from the scene 6 restructure and the diagonal check; both keep 17 s or more spare. These are speech-only estimates; measure them on the voice.

## Joins

No handoff frame or Boundary changed. m01's opening (e12), every m to m join, m09 to a01, every a to a join and a11 to t01 are as in Revision 1. a01's hook now speaks one sentence over m09's frame, and the chips fade on "Like money"; the frame itself is unchanged. a03 and a09 share the new pool, so a09's callback to a03 still matches word for word ("one point five metres deep everywhere", 48 kL).

## Open for root

1. **Year 12 i12's key line** still reads "BNPL: free only while every instalment is on time", recalling m03's old card. Align it with m03's new card, for example "BNPL: interest-free isn't free; fees even on time" (i12 was outside this round's files).
2. **Codex maths check:** the NSW stamp duty rate and the date for m05's chip "NSW rates, 2026, example"; a11's "It's printed on the reference sheet" (held until confirmed; cut the sentence and chip if not, and tell Year 12 r07); the a05b track geometry; m02's UK hotel VAT rate; a01's Sydney to Brisbane distance; a06's history sentence and ramp gradient. Each design's Codex brief names them.
3. **m09 to a01 join:** the review confirmed it; m09's provisional marks can be lifted (design status open question 11). Year 12 t09's citation of a03 for the hectare (it is taught in a02) remains a root edit.
4. **m08 N3:** "about $1000 before tax" depends on the 2026-27 tax table; add it to the e09 to e12 re-check list.
5. **Next:** the Codex maths and error check on Revision 2, then the student learning review repeated on the exact voiced previews before full export, as `preview-first-review.md` requires.
