# Year 12 Maths Standard r01 to r07: learning review resolution

18 November 2026. This is the design author's resolution of `m-s12-r01-r07-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for r01, r02, r03, r04, r05, r06a, r06b and r07. It applies root's five binding decisions for this round: (1) r03 speaks the capture-recapture letter shorthand once, naming each letter with its meaning; (2) r02's stakes become $100 and $60 (shares stay $300 and $180), with r01's final scene to match; (3) r04 keeps "convert first" as advice and crosses out only "0.00014 cm"; (4) r06a labels every unsourced price "example price" wherever it appears (ruling 51); (5) every other should-fix applied, cheap optional findings applied, the total kept under 570 s, and every decision recorded. All eight designs now carry a "Revision 2 (18 Nov 2026): learning review resolved" section at the top, and their Status lines say "Revision 2 (18 Nov 2026): learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Changed and new values were rechecked with SymPy 1.14 (`work/brief-resolve-standard-r1/verify.py`, `python -I`, 51 checks, 0 failures). Narration was recounted by script as the sum of the scene strings (`work/brief-resolve-standard-r1/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority. r08 to r14 were not touched; r07's final frame, which opens r08, is unchanged.

**Totals:** 25 findings (0 blockers, 10 should fix, 15 optional). Should fix: all 10 applied. 6 use the reviewer's wording or fix as written (r01 #1, r02 #1, r03 #1, r05 #1, r06b #1, r07 #1), 3 follow root's decisions (r04 #1 by decision 3, r06a #2 by decision 4, r06b #2 by decision 5), and 1 keeps the scene's existing last words (r06a #1). Optional: all 15 applied. 3 are adapted in form only (r01 #3 replaces the division sentences it repeated; r03 #2 adds the sentence, not the changed numbers; r07 #2 uses the tag the review offered instead of a sentence). None declined.

## Should fix

- r01 #1, scene 4 (a/b always crossed, then A2 (b) asks for one): accepted, reviewer's wording. "One quarter does answer a different question. The cordial is one quarter as much as the water." On the new cue "water" the grey "1/4" arrow (never crossed; only the red slip "cordial = 1/4 of the jug" is) gets the grey tag "cordial ÷ water: a different question".
- r02 #1, key note 3: accepted. "Each share = its number of parts × one part; check they add to the total."
- r03 #1, scene 3 (why the net's fraction matches the lake's): accepted, reviewer's wording, cue on "copy": "Mixed evenly means every part of the lake has the same share of tagged fish. So a net full of fish is like a small copy of the lake." The 50 netted dots lift into an inset beside the lake, 8 amber, tag "the net is a mini lake".
- r04 #1, scene 4 (the crossed slip was not a mistake): accepted (decision 3). "Dividing three point five by twenty-five thousand straight away gives zero point zero zero zero one four. That's not wrong, but it's in kilometres, a tiny number no ruler can show. Writing it as centimetres is the slip. Converting first gives centimetres, ready for the ruler." The row "3.5 ÷ 25 000 = 0.00014 km" is grey with "= 14 cm, the same length"; only "0.00014 cm" is red and crossed ("that's kilometres, not centimetres"). "This time, convert first" stays as advice; the cause chain, teaching checks and memory aid check now say "so the answer is in the ruler's unit", not "must".
- r05 #1, scenes 3, 4 and 8 (why 1 : 50 and not 1 : 40): accepted, reviewer's wording. Scene 3: "One to forty would just fit too, but one to fifty is easier to divide by, and leaves a margin for labels." Scene 4's slider gains an unspoken grey "1 : 40" stop (9 cm by 7.5 cm). Scene 8: "That leaves no room for labels, so go up to the next friendly scale, one to fifty." The friendly list is now "for example".
- r06a #1, scene 3 (why scaling the area once fails): accepted, reviewer's wording, cues "across" and "down": "Each side grows a hundred times. So the area grows a hundred times across, and a hundred times again down, ten thousand times. Multiplying by a hundred only once leaves the floor far too small." The 13.2 cm² rectangle stretches × 100 sideways into a strip, then × 100 down to fill the 13.2 m² floor, with "× 100 × 100 = × 10 000". The scene still ends "So scale the sides, not the area" (the reviewer's "scale the sides first" is already the scene's hand tag).
- r06a #2, ruling 51 labels: accepted (decision 4). A small grey "example price" tag sits beside each unsourced price wherever it appears: the benchtop chip on r04's and r05's final frames and in r06a scene 1; "$320" and "$40" in scene 4; "$38/m²" and "$99 a box" beside A2's card, outside the question text, through feedback 2. Scene 4's chip "example prices, NSW 2026" becomes "example prices: check a current quote". The YouTube description says "(an example price)". The sourced tile prices keep the scene 4 chip only.
- r06b #1, scene 5 ("which paint is better value?" left open): accepted, reviewer's wording with 60.26: "One tin of B only does the job if it really covers at least fifteen square metres a litre, because sixty point two six divided by four is about fifteen. So B is better value only if you trust it to cover close to its label." Grey row "one tin of B: 60.26 ÷ 4 ≈ 15.1 m²/L needed" with B's "up to 16" ringed; decision strip "covers at least 15.1 m²/L → B", "less → A".
- r06b #2, scenes 4 to 6 (rows that don't add): accepted (decision 5), by the reviewer's route. Every screen row now follows from the row above as shown: 33.6 − 1.67 − 1.8 = 30.13; 30.13 × 2 = 60.26; 60.26 ÷ 12 ≈ 5.02 L; 60.26 ÷ 16 ≈ 3.77 L; 26.4 − 1.67 − 1.2 = 23.53; 23.53 × 2 = 47.06; ÷ 12 ≈ 3.92 L. The narration says "sixty point two six" and "forty-seven point zero six". Root's alternatives (30.125 × 2, or exact totals) were not needed: two-decimal rows that reproduce exactly keep the screen simple, and no downstream answer changes (5.02 L, 3.77 L, 1.26 tins, 3.92 L, every tin count and cost).
- r07 #1, scene 2 (average width not joined to the formula): accepted, reviewer's wording: "the average width is twelve plus sixteen, divided by two, fourteen metres. The strip is eight metres long, so the area is fourteen times eight, a hundred and twelve square metres. Halving the sum and then multiplying by eight is the same as eight over two, times twelve plus sixteen." Rows "(12 + 16) ÷ 2 = 14 m: the average width", "14 × 8 = 112 m²", "= 8/2 × (12 + 16)" with an arc and the tag "same calculation". Named trim taken (decision 5): scene 5's last sentence, "More offsets, closer together, would follow the creek more closely and give a better estimate." The more-offsets demonstration and its readout "closer offsets, closer estimate" now play without narration.

## Optional

- r01 #2, scene 1: applied ("It has two hundred and fifty millilitres of cordial, and then one litre of water is added.").
- r01 #3, scene 3: applied, adapted ("Here it's two hundred and fifty, because two hundred and fifty goes into itself once, and into one thousand exactly four times."), replacing the two division sentences that would otherwise repeat it.
- r01 #4, open decision 2: applied (dotted connector from the jug's liquid to the five-tile column; no narration).
- r02 #2, the stakes: applied (decision 2). $100 and $60, "A hundred to sixty, divided by twenty, is five to three"; coins "$20"; the reviewer's unspoken grey chip "same answer: each gets its stake back, then shares the profit 5 : 3" (480 − 160 = 320; 200 and 120; plus stakes, 300 and 180). r01 scene 12 matches.
- r02 #3, attempt 2: applied ("Ben says they should split it equally three ways." on the card, in the narration and in the model answer).
- r02 #4, scene 5: applied ("A mortar mix for laying path pavers is cement to sand, one to three."; scene 1 says "mixing mortar").
- r03 #2, scene 7: applied as the sentence only ("If an answer isn't a whole number, round it, because you can't have part of a yabby."); A2's numbers unchanged.
- r03 #3, scene 6 and key note 5: applied (chip "no fish in or out"; note "no births, deaths or moves", which fits every animal in the video).
- r04 #2, scene 5: applied ("Enlarge or shrink the map, on a photocopier or a screen, and that ratio is wrong.").
- r04 #3, scene 5: applied, the spoken reason ("Doubled in size, each map centimetre stands for only half as much ground."), with the red "now 1 : 12 500" tag moved to that sentence.
- r06a #3, scene 3: applied ("smaller than a doormat").
- r06a #4, attempt 2: applied ("vinyl planks that you lay yourself" in narration, card and model answer).
- r06a #5, scene 2: applied ("a sliding door, which needs no room to swing"; "An arrow marked N points north, so you can tell which rooms get the afternoon sun.").
- r06b #3, scene 6: applied ("There's one door and one window, with their sizes on the card." The tin's size and price stay on screen; the task now asks "and what do they cost?", matching the task strip).
- r07 #2, scene 6: applied as the tag the review offered ("creek: on the perimeter, not fenced"); no narration.

## Root's decisions and housekeeping

- Decision 1 (r03 letters): "Some books write it in letters. N is about n one times n two, over m two, where N is the population, n one the number tagged, n two the second catch, and m two the tagged ones in it." The row "N ≈ (n₁ × n₂) ÷ m₂" writes at 44 px and each letter gets a word label as it is named. It is 183 characters, about 14 s, not 6 s, because all four letters are given with their meanings (ruling 36's pattern).
- Decision 2 (stakes): applied in r02 scenes 1 and 2, its boundary, main question, author notes, numbers and description, and in r01 scene 12, its Handoff line and numbers.
- Decision 3 (r04): applied as above; key note 3 and the memory card ("Ground to map: convert, then ÷ n") stay, as advice that is correct.
- Decision 4 (example prices): applied in r04's and r05's final frames and r05's boundary, and throughout r06a. r06a open decision 2 is closed by ruling 51.
- Decision 5: every should-fix and every optional finding applied; r07's named trim taken; every design under 570 s.
- `root-decisions-maths-s12-r01-r07.md` gains a Revision 2 note (new characters and seconds, the $100 and $60 join, the spoken letters, the example price tag, r07's frame unchanged), and its r01 → r02 and r04 → r05 join lines are updated.
- Open decisions closed in each design are marked "Closed in Revision 2", with the Revision 1 text kept: r01 2; r02 1 and 2; r03 1 and 2; r04 1 and 2; r05 1 and 2; r06a 2 and 3; r06b 1; r07 1 and 3. Still open: r01 1 ("Builds on" titles at publication), r06a 1 (Codex's symbol source line), r06b 2 (Codex rechecks the paint listings), r07 2 (dam proportions at painting).
- New bold cues: r01 "water" (scene 4), "four" (moved, scene 3); r03 "copy", "letters"; r04 "slip", "ruler" (scene 4, replacing "match"); r05 "labels"; r06a "across", "down"; r06b "fifteen"; r07 "sixteen" (scene 2), "metres" (scene 5's new last cue, replacing "estimate"). Hand tags are added to each design's list. Every bold cue is quoted in its scene's Visual in spoken order, and no em dash (U+2014) appears in any of the eight designs (both checked by script, `work/brief-resolve-standard-r1/cues.py` and `count.py`). Line endings are unchanged.
- Stage-plan times in each design remain Revision 1 approximations; frames come from the recording's word timings.

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| r01 | 5,292 | 5,360 | about 486 s | about 397 s | 25 s, 27 s |
| r02 | 5,083 | 5,096 | about 466 s | about 378 s | 25 s, 30 s |
| r03 | 5,260 | 5,661 | about 511 s | about 420 s | 23 s, 25 s |
| r04 | 5,461 | 5,737 | about 515 s | about 426 s | 28 s, 28 s |
| r05 | 5,858 | 5,999 | about 538 s | about 446 s | 29 s, 23 s |
| r06a | 5,830 | 6,072 | about 543 s | about 451 s | 27 s, 29 s |
| r06b | 5,809 | 5,935 | about 532 s | about 441 s | 29 s, 28 s |
| r07 | 6,286 | 6,369 | about 565 s | about 473 s | 27 s, 28 s |

All eight are under 570 s with holds and within 5,000 to 6,800 characters. No feedback changed; the longest is r02 feedback 2 (396 characters, about 29.8 s). r07 is now tight, about 5 s under the cap (Revision 1: 12 s): finding 1 adds about 13 s of speech, the trim saves about 7 s and the silent demonstration about 1 s more. Its further reserve trims are named (scene 7's map panel and "or a map", scene 1's listing sentence, scene 3's "That's the rule."). r05 (32 s) and r06a (27 s) have moderate margins. The longest single scenes are r06b scene 5 (923 characters, about 69 s; one comparison stage with the toggle and the threshold), r06b scene 6 (912) and r03 scene 7 (831). These are speech-only estimates; measure them on the Google voice.

## Joins

- i18 and i23 → r01: unchanged.
- r01 → r02: r01's final frame changes only in the card ("put in: $100 and $60"); r02's boundary quotes it.
- r02 → r03 and r04, r03 → r04: unchanged.
- r04 → r05 and r06a, r05 → r06a: the benchtop chip on both final frames gains the grey "example price" tag; r05's boundary and r06a's boundary and scene 1 quote it. Nothing else changes.
- r06a → r06b, r06b → r07 and r09: unchanged.
- r07 → r08: **unchanged**. Scene 14's narration, plate, "surface ≈ 1,710 m²", gauge at 25 mm and chips are exactly as Revision 1 and as section 2 of the decisions file. No finding required a change.

## For root

- r03's letter sentence is about 14 s, not the 6 s in the brief, because it names all four letters with their meanings. r03 is still 59 s under the cap. Accept, or ask for a shorter form (for example the formula without the meanings, which would drop ruling 36's pattern).
- r07's margin is now about 5 s. Accept, or ask for one of the further named trims before voicing.
- r06b: the reviewer's 60.26 and 47.06 were used rather than 30.125 × 2 or exact totals, because every two-decimal row now reproduces exactly and nothing downstream changes. Confirm.
- r06a: scene 4's chip now reads "example prices: check a current quote" instead of "example prices, NSW 2026", because four of the prices are unsourced. Codex's sources may let it return to the dated form.
- r04: key note 3 and the memory card keep "convert, then ÷ n" as advice. Confirm that is what decision 3 intends.

Nothing recorded; human listening pending.
