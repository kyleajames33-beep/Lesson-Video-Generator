# Year 11 Maths Standard: preflight and fact repair log, 25 November 2026

Root repair of the 54 Year 11 Standard designs (m01 to m09, a01 to a11 with a05a and a05b, t01 to t06, n01 to n07, d01 to d19 with d06a and d06b) against Codex's maths-check holds (`m-s11-<id>-maths-check.md`), `maths-standard-y11-official-facts.md` and `brief264-fact-checks-2026-11-24.md`. Every design gained a final section "Revision 3 (root, 25 November 2026): preflight and fact repairs", which overrides earlier text, and a Status prefix pointing to it. No speech, render, still or commit was made. Human listening remains pending for every design.

Count method: Codex's own extraction (`scripts/inventory-briefs266-272.py`): the `> ` lines inside each `### N.` scene joined with a space, `**` removed, scene strings summed with no separator. My Python reimplementation reproduced Codex's "actual" value for all 54 designs before any edit (no differences). The declared counts had included one space between scenes (12 for 13 scenes; 11 for m04). Each header line now carries the new count, and each duration uses the design's own 13.3 characters per second with holds unchanged. All totals stay under the 570 s cap (largest: m06, about 568 s). After the edits, the script's declared-against-actual check passes for all 54.

Cue checks: every changed scene was rechecked with a script that finds each quoted `On "..."` cue in the narration, in order. All nine Codex cue findings now pass. The only remaining script flags are destinations Codex already triaged as false positives (d01 scene 1, d04 scene 4).

| Design | New count | Findings fixed | Facts applied | Narration changed | Ready for Codex re-check |
| --- | --- | --- | --- | --- | --- |
| m01 | 5,849 (declared was 5,861; Codex sum 5,849) | count-mismatch | none apply | no | yes |
| m02 | 5,487 (declared was 5,499; Codex sum 5,487) | count-mismatch | UK VAT 20% and hotel standard-rated confirmed, no change | no | yes |
| m03 | 5,696 (declared was 5,708; Codex sum 5,696) | count-mismatch | none apply | no | yes |
| m04 | 5,627 (declared was 5,638; Codex sum 5,627) | count-mismatch | none apply | no | yes |
| m05 | 6,277 (declared was 6,241; Codex sum 6,229) | count-mismatch | duty confirmed; transfer $40 to $42 (within 14 days), totals recomputed; rego, green slip, insurance and excess kept as stated examples; voicing hold cleared | yes (scenes 4, 6, 11, 12, 13) | yes |
| m06 | 6,325 (declared was 6,228; Codex sum 6,216) | count-mismatch; circular-reference blocker (scene 4) | drive-away $16 647 and five-year $43 687 carried from m05 | yes (scenes 1, 4, 6) | yes |
| m07 | 5,950 (declared was 5,962; Codex sum 5,950) | count-mismatch | rates kept as explicit illustrative examples (m08 reuses $761.21); example chips added, Decisions corrected; voicing hold cleared | no | yes |
| m08 | 5,737 (declared was 5,749; Codex sum 5,737) | count-mismatch | none apply | no | yes |
| m09 | 5,539 (declared was 5,551; Codex sum 5,539) | count-mismatch | none apply | no | yes |
| a01 | 5,738 (declared was 5,750; Codex sum 5,738) | count-mismatch; cue-order scene 2 | Sydney to Brisbane 917 km and 400 m track confirmed, no change | no | yes |
| a02 | 5,608 (declared was 5,620; Codex sum 5,608) | count-mismatch; cue-order scene 12 | netball court confirmed, no change | no | yes |
| a03 | 5,427 (declared was 5,437; Codex sum 5,425) | count-mismatch | Olympic depth reworded as an assumption ("Say it's two metres deep all over") | yes (scenes 6) | yes |
| a04 | 6,150 (declared was 6,162; Codex sum 6,150) | count-mismatch | none apply (distance and Babylon lines are in a01 and a06); confirmed, no change | no | yes |
| a05a | 5,582 (declared was 5,594; Codex sum 5,582) | count-mismatch | none apply | no | yes |
| a05b | 6,001 (declared was 6,013; Codex sum 6,001) | count-mismatch | track geometry confirmed; "fast-pitch diamond" chip added | no | yes |
| a06 | 5,485 (declared was 5,497; Codex sum 5,485) | count-mismatch | Babylon and India confirmed; ramp author note corrected (no compliance claim); fast-pitch chip in opening frame | no | yes |
| a07 | 6,042 (declared was 6,054; Codex sum 6,042) | count-mismatch | none apply | no | yes |
| a08 | 5,601 (declared was 5,613; Codex sum 5,601) | count-mismatch | golf ball minimum confirmed, no change | no | yes |
| a09 | 5,573 (declared was 5,585; Codex sum 5,573) | count-mismatch | $220 concrete kept as labelled question data (not confirmed as a current price), no change | no | yes |
| a10 | 5,639 (declared was 5,651; Codex sum 5,639) | count-mismatch | none apply | no | yes |
| a11 | 5,747 (declared was 5,759; Codex sum 5,747) | count-mismatch | reference-sheet trapezoidal rule confirmed; hold released; voicing hold cleared | no | yes |
| t01 | 5,880 (declared was 5,892; Codex sum 5,880) | count-mismatch | none apply | no | yes |
| t02 | 5,806 (declared was 5,818; Codex sum 5,806) | count-mismatch | none apply | no | yes |
| t03 | 6,030 (declared was 6,042; Codex sum 6,030) | count-mismatch; cue-order scene 6 | none apply | no | yes |
| t04 | 5,582 (declared was 5,594; Codex sum 5,582) | count-mismatch | none apply | no | yes |
| t05 | 5,586 (declared was 5,598; Codex sum 5,586) | count-mismatch | none apply | no | yes |
| t06 | 5,775 (declared was 5,787; Codex sum 5,775) | count-mismatch | none apply | no | yes |
| n01 | 5,508 (declared was 5,520; Codex sum 5,508) | count-mismatch | none apply | no | yes |
| n02 | 5,586 (declared was 5,598; Codex sum 5,586) | count-mismatch | none apply | no | yes |
| n03 | 5,652 (declared was 5,664; Codex sum 5,652) | count-mismatch | none apply | no | yes |
| n04 | 5,488 (declared was 5,500; Codex sum 5,488) | count-mismatch; cue-order scene 4 | none apply | no | yes |
| n05 | 5,446 (declared was 5,458; Codex sum 5,446) | count-mismatch | none apply | no | yes |
| n06 | 5,546 (declared was 5,558; Codex sum 5,546) | count-mismatch | none apply | no | yes |
| n07 | 5,477 (declared was 5,489; Codex sum 5,477) | count-mismatch | none apply | no | yes |
| d01 | 5,673 (declared was 5,661; Codex sum 5,649) | count-mismatch | sleep guideline: ages 14 to 17 now said; 2019 confirmed; voicing hold cleared | yes (scenes 2) | yes |
| d02 | 5,743 (declared was 5,755; Codex sum 5,743) | count-mismatch; cue-not-verbatim scene 5 | none apply | no | yes |
| d03 | 5,516 (declared was 5,528; Codex sum 5,516) | count-mismatch | none apply | no | yes |
| d04 | 5,635 (declared was 5,647; Codex sum 5,635) | count-mismatch; cue-not-verbatim scene 5 | none apply | no | yes |
| d05 | 5,509 (declared was 5,521; Codex sum 5,509) | count-mismatch; cue-not-verbatim scene 2 | none apply | no | yes |
| d06a | 5,555 (declared was 5,567; Codex sum 5,555) | count-mismatch | none apply | no | yes |
| d06b | 5,538 (declared was 5,550; Codex sum 5,538) | count-mismatch | none apply | no | yes |
| d07 | 5,549 (declared was 5,561; Codex sum 5,549) | count-mismatch | none apply | no | yes |
| d08 | 5,575 (declared was 5,587; Codex sum 5,575) | count-mismatch | none apply | no | yes |
| d09 | 5,654 (declared was 5,666; Codex sum 5,654) | count-mismatch; cue-not-verbatim scene 3 | none apply | no | yes |
| d10 | 5,556 (declared was 5,568; Codex sum 5,556) | count-mismatch | none apply | no | yes |
| d11 | 5,506 (declared was 5,518; Codex sum 5,506) | count-mismatch | none apply | no | yes |
| d12 | 5,471 (declared was 5,483; Codex sum 5,471) | count-mismatch | none apply | no | yes |
| d13 | 5,751 (declared was 5,763; Codex sum 5,751) | count-mismatch; cue-order scene 12 | none apply | no | yes |
| d14 | 5,534 (declared was 5,546; Codex sum 5,534) | count-mismatch | none apply | no | yes |
| d15 | 5,490 (declared was 5,502; Codex sum 5,490) | count-mismatch | none apply | no | yes |
| d16 | 5,550 (declared was 5,538; Codex sum 5,526) | count-mismatch | sleep guideline: ages 14 to 17 now said; voicing hold cleared | yes (scenes 4) | yes |
| d17 | 5,587 (declared was 5,599; Codex sum 5,587) | count-mismatch | none apply | no | yes |
| d18 | 5,576 (declared was 5,588; Codex sum 5,576) | count-mismatch | none apply | no | yes |
| d19 | 5,496 (declared was 5,508; Codex sum 5,496) | count-mismatch | sleep guideline: card adds "for ages 14 to 17"; voicing hold cleared | no | yes |

## m06 blocker fix

B10 keeps the valid subtotal `=SUM(B4:B9)` = 5408. The mistake now sits in a later cell: a grand total in B13 typed as `=SUM(B4:B10)` adds B10's 5408 to the six costs again, giving 10 816. The fix is `=SUM(B4:B9)` or `=B10`. B13 is outside its own range, so there is no circular reference. New scene 4 ending: "And watch the range. A grand total that's equals sum of B four to B ten counts B ten's total again, so it doubles to ten thousand eight hundred and sixteen. Use B four to B nine, or just equals B ten." The opening definition of a model was folded into the first sentence to keep the video under the cap. Visual, cue plan, author note (d), Teaching checks, Numbers used and Numbers to verify updated; the key note with `=SUM(B4:B9)` stays. Python: 1755 + 385 + 780 + 1640 + 548 + 300 = 5408; 5408 + 5408 = 10 816.

## Cross-video consistency

- The transfer fee change (m05) moves the drive-away cost to $16 647 in m05 and m06 (m06 scene 1, B14, and B15 = $43 687, still 72.8c a km). No other Year 11 Standard design uses these values. The pre-design packs still show $16 645; they are superseded inputs and were not edited.
- m07's bill values are kept as labelled examples because m08 reuses the $761.21 quarter total, so m08 needs no change.
- The recurring constructed data in the d strand (the 20-value sleep sample, the 12/8 split, the screen-time values, the nearby and bus splits) were not changed, so they stay consistent everywhere they recur. Brief 272's recurring-data check passed them.
- The sleep guideline (ages 14 to 17, 8 to 10 hours, April 2019) is now stated with its age condition in d01 and d16 narration and on d19's card; all three keep the same source line.

## Not resolved, or left for others

- Pre-existing en dashes (U+2013) remain in screen and author-note text of d01, d06a, d06b, d08, d09 and n01 to n07 (mostly edge labels such as A to B written with an en dash, and ranges). None is in narration, none was added here, and Codex's maths checks did not raise them, although its brief 271/272 inventory lists them. Root should decide whether to replace them in a later pass.
- Registration, green slip, comprehensive premium and excess values in m05 and m06, the water, gas and supply-charge rates in m07 and the $220 concrete price in a09 remain unverified as current prices. They are kept as stated examples or question data and are not presented as current values.
- New Zealand GST 15% (m02) is not in either fact sheet; it was not re-sourced here.
- The full arithmetic, syllabus-description, playlist-join and anchor checks that Codex listed as pending remain with Codex. Human listening remains pending.
