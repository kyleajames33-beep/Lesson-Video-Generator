# Designer decisions: Year 11 Maths Advanced s01 to s11 (Revision 2, 17 November 2026)

**Revision 2 (17 Nov 2026): learning review resolved.** The independent learning review (`m-a11-s01-s11-learning-review-summary.md`, 0 blockers, 16 should fix, 18 optional) is resolved in all eleven designs; the log is `m-a11-s01-s11-learning-review-resolution.md`. Root's four decisions are applied: s06's coded counters and tree branches are neutral and lettered (the painted bag is unchanged); "not a subset" is ⊈ throughout (the crosswalk writes no symbol); s10 shows "=B3/B5" with no "$"; and s05 A1's crossed slip is described below as the narration says it. The length table is updated to Revision 2; the rest of this file is the Revision 1 record, corrected where a Revision 2 change makes it wrong. Nothing recorded; human listening pending.

Written by the s01 to s11 designer (Claude) for root. The designs are `../lessons/math-a11-s01.md` to `math-a11-s11.md`, the whole Probability and data strand (outline orders 80 to 90), ending the Year 11 core course. They follow the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 designs (e08, c10 and w14 read closely), root's acceptance rulings for w01 to w31, root's rulings on the c and e packs, root's rulings on the t, g and s packs (`root-rulings-maths-a11-t-g-s-packs.md`, rulings 8 to 14 bind this strand), the c and e learning-review resolutions, the kit list `maths-a11-kit-needs-g-s.md` and section 8 of `../site-corrections-maths-a11.md`. The Year 12 statistics designs (`math-a12-s01.md` to `s12.md`) were read for their entry knowledge and anchors. Documents only: no node, Remotion, build, render, speech, commit or sub-agent. s02 to s11 were written first; s01 was written last, after g06's final frame appeared on disk.

## Length and timing (counted by script; Revision 2 figures, `work/brief-resolve-s/count.py`)

Narration blockquotes, bold markers removed, 13.3 characters per second; totals add 2 × 10 s countdowns, about 6 s of short holds, 18 to 22 s of settling and the 45 s notes scene.

| Video | Characters | Scene headings | Speech before notes | Total | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| s01 sets and set notation | 5,059 | 13 | 375 s | about 463 s | 23 s, 25 s |
| s02 intersection, union, Venn | 5,399 | 12 | 400 s | about 493 s | 26 s, 25 s |
| s03 the counting rule | 5,030 | 14 | 373 s | about 463 s | 25 s, 24 s |
| s04 sample spaces and events | 5,212 | 13 | 386 s | about 479 s | 27 s, 28 s |
| s05 complement and addition rules | 5,214 | 13 | 386 s | about 477 s | 29 s, 23 s |
| s06 arrays and trees | 5,758 | 14 | 427 s | about 521 s | 24 s, 23 s |
| s07 conditional probability | 5,260 | 13 | 390 s | about 479 s | 26 s, 25 s |
| s08 independence | 5,637 | 14 | 418 s | about 509 s | 25 s, 28 s |
| s09 random variables | 5,212 | 13 | 386 s | about 476 s | 23 s, 26 s |
| s10 frequency tables | 5,083 | 13 | 377 s | about 469 s | 27 s, 19 s |
| s11 histograms, mode, median | 5,684 | 14 | 422 s | about 514 s | 27 s, 28 s |

All are within the brief's 5,000 to 7,000 characters and well under 570 s. They sit at the low end of the band, below the 5,500 floor that the w, c and e rounds used; the probability ideas here are shorter to say than calculus or log working, and the extra settling time goes to simulations. If root wants the 5,500 floor, each design names where to add (a second worked board in s03, s04, s09 and s10 would be the natural places). Every feedback is under 30 s by estimate (s05 feedback 1 and s11 feedback 2 are closest, at about 29 s). s10's feedback 1 was cut from about 35 s to 27 s by reading one relative frequency aloud and leaving the full columns on screen.

Mechanical checks run (scratchpad `s-designs/count.py`, `fill.py`, `quotes.py`): no U+2014 or U+2013 in any of the eleven files; every bold cue appears quoted in its scene's Visual, in spoken order; no "color", "center", "-ize" spelling or "nought"; decimals spoken "zero point"; every syllabus quote in each design and its YouTube description matches `programme/maths-a11-route-inputs-5.json` exactly (the crosswalk text is identical). Every number recalculated with Python (fractions, sets, itertools) and SymPy 1.14 (`s-designs/verify.py`, 47 checks, all pass) and listed under each design's "Numbers to verify". Titles are 62 to 83 characters (Revision 2; s01 now 64).

## Anchors (one per video, everyday, no gambling, no repeats)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| s01 | a water polo team's 13 numbered caps on a pool fence (U, even caps, ∅, the starting seven and the bench) | sport | new `ma11-polo-caps-v1` |
| s02 | an ice-cream shop's two-scoop cones; one chocolate-and-vanilla cone is in both sets | food | new `ma11-icecream-cabinet-v1`, `ma11-cone-choc-vanilla-v1` (both shown at the end of s01) |
| s03 | a library's 36 members: 26 print and 19 ebook borrowers overshoot by the 9 who did both | leisure | new `ma11-library-trolley-v1` (end of s02) |
| s04 | a gumball machine, 12 red, 8 blue, 5 yellow: count gumballs, not colours | food, games | new `ma11-gumball-machine-v1` (end of s03); reused Year 12 red die and coins |
| s05 | a 40-room seaside hotel, rooms given at random: sea view, spa, floors | travel | new `ma11-hotel-facade-v1` (end of s04) |
| s06 | two sets of traffic lights on the way home (tree), with two dice for the array | travel | new `ma11-traffic-light-v1`, `ma11-counter-bag-v1`; reused dice and coins |
| s07 | a food delivery app's orders, late given peak against peak given late | food, phones | new `ma11-delivery-bag-v1`; reused Year 12 phone |
| s08 | two alarms, a phone and a wind-up clock, working independently | phones, home | new `ma11-alarm-clock-v1`; reused phone; new `ma11-mandarin-bag-v1`, `ma11-produce-scale-v1` (handoff) |
| s09 | a bag of mandarins: count it, weigh it | shopping, food | reused from s08's brief |
| s10 | a homemade spinner nobody measured, spun 40 times (site data) | games | reused Year 12 spinner plates, coded sectors |
| s11 | waiting times at a theme-park ride (grouped data), after the spinner | leisure | new `ma11-ride-queue-v1` |

Greps of every Year 11 and Year 12 Maths design (17 Nov 2026) found no prior use of water polo, ice-cream, a library's borrowers, a gumball machine, a hotel, traffic lights, delivery orders, alarms, mandarins or ride waits. Reused objects are plate reuse, not shared anchors (as w07's ruling 6): the dice, coins and phone are Year 12 plates used as neutral sample-space or screen objects. Contexts vary across the strand (sport, food, leisure, travel, phones, shopping, games); food appears three times (s02, s04, s07) in three different forms.

## Joins

- **g06 → s01.** g06 Revision 1 (another designer) ends on a coded frame: the delivery-circle badge with "every point exactly 5 km from the store: a collection", the words "the even numbers from 1 to 11", empty braces with "?", chips "a collection, written precisely?", "Next: sets and set notation", "?". s01 scene 1 opens on it exactly and fills the braces with {2, 4, 6, 8, 10} in its first two sentences. It was read on disk on 17 Nov; if g06's frame changes in review, only s01 scene 1's first two sentences and opening Visual change.
- **s01 → s02:** the ice-cream cabinet, the two-scoop cone and braces C and V; chips "this cone: in C? in V?".
- **s02 → s03:** the library trolley; "print book: 26", "ebook: 19", "members: 36", "26 + 19 = 45?".
- **s03 → s04:** the gumball machine; "red: 12", "blue: 8", "yellow: 5", "P(blue) = 1/3 ?".
- **s04 → s05:** the hotel facade with tinted windows and the Venn diagram 10, 6, 4, 20.
- **s05 → s06:** the white and red dice; "totals 2 to 12: equally likely?".
- **s06 → s07:** the 6 × 6 array with the dice under a cloth cover; "told: the total is 8", "before: P(double) = 6/36".
- **s07 → s08:** one red die and the strip 1 to 6; A = even, B = bigger than 4; "P(A | B) = ?".
- **s08 → s09:** the mandarin bag on the scale, "1.13 kg"; "count: 9", "mass: 1.13 kg".
- **s09 → s10:** the spinner with three unequal coded sectors and the raw list strip.
- **s10 → s11:** the finished five-column spreadsheet with three bars rising out of it.
- **s11 → Year 12.** s11 ends the core course. Its final frame shows the ride's cumulative relative frequency polygon (0 to 1, median at 0.5) beside the spinner's relative frequency histogram, with chips "Year 11 Maths Advanced: complete", "Year 12: relative frequencies become probability distributions", "Year 12: the 0 to 1 curve returns", "Next: the Year 12 Maths Advanced playlist". Both Year 12 claims are things Year 12 s01 and s04 do, and both are published (`bunny/ledger.csv`). The optional practice videos p01 to p03 (outline orders 91 to 93) are not mentioned, because none is designed.

Every route start boundary is honoured: s04 starts from "s03's sets, now filled with the outcomes" through the gumball handoff; s06 from two dice; s07 from the two-dice array with one fact revealed; s08 from the die's "even" and "greater than 4"; s10 from a spinner spun 40 times; s11 from s10's table turned into bars.

## Year 12 continuity (root ruling 14: the packs' Year 12 delivery notes are requirements)

| Year 12 needs | Delivered in |
| --- | --- |
| s01 "one trial, one value": each outcome is one result of one trial | s04 scene 2 ("Each turn gives exactly one outcome", a counter), s09 scene 2 ("Each trial ... gives exactly one value of X") |
| P(A) = |A|/|S| only for equally likely outcomes; listing small sample spaces | s04 scenes 3, 4 (gumball trap; die and coin), A2 (three coins) |
| s04's "Year 11 complement rule" | s05 scene 3, key note 1 |
| s02's 6 × 6 two-dice table drawn as the cause; listing two- and three-stage experiments | s06 scenes 2, 3 (white die across, red die down, ordered pairs), scene 6 (three-coin tree) |
| s01's random variable, capital X, small x, P(X = x); "discrete does not mean finite" | s09 scenes 2 to 4 |
| s01's "relative frequency as an estimate", never forced; adding to 1 because every result is in one row | s10 scenes 3, 5, 6 |
| s01's relative frequency bars; s04's histogram with touching bars and a cumulative curve from 0 to 1; s06's median at 0.5 | s11 scenes 3, 6, 7 |

## Colour roles across s01 to s11 (proposed for the strand)

Sets and events: A blue, B (or the given event) teal, A ∩ B violet, complements and "neither" amber, U or S ink. Multistage (s06): first stage blue, second teal, the event's cells or paths violet. Counters (s06 scene 7 and A2, root's decision in Revision 2): coded counter tokens and tree branches are neutral grey, lettered "R", "B", "G" or "Y" in ink, never in a role colour; the painted bag keeps real counters. Data (s09 to s11): discrete and frequency blue, continuous and relative frequency teal, cumulative frequency violet, cumulative relative frequency amber. Answers green, mistakes red throughout. These follow the functions strand's blue and teal pair where a design has two main roles.

## Departures from the packs and site, with reasons

1. **s02 and s03 stay separate** (root ruling 10), as the route's possible merge was declined.
2. **No splits.** s07 and s08 were tested against ruling 2 (via ruling 11): s07 shows all four representations and both forms of the formula in about 386 s of speech; s08 has both proofs and two practical problems in about 409 s. s06 has the most teaching scenes (seven) and still runs about 408 s; its three-coin scene is the named first trim.
3. **s04 attempt 2 and s06 scene 6 both use three coins.** s04 lists the eight outcomes; s06 recovers them with a tree and says so. This is a deliberate callback, not a repeat.
4. **s05 A1's crossed slip** is "neither = 1 − 0.45 − 0.35" (it takes the overlap away twice, as the narration says; Revision 2 wording), not the pack's "0.45 × 0.35", which assumes independence before s08.
5. **s07 A1 and s08 A2 are original.** The packs' question 1 (delivery app) and question 2 (alarms) became the anchors' worked examples, so each attempt uses a new context with the same method (online returns; a juice-bar two-way table, the s08 pack's anchor 2).
6. **s09 and root ruling 12.** The s09 pack said to leave P(X = x) = 0 to Year 12 s04; root ruled to teach the correct reason. s09 scene 5 gives it in two sentences ("probability belongs to stretches of values ... a single exact value is a stretch with no width"), with no area, density or CDF, and points to Year 12. It never uses the site's "infinitely many values" reason (S11-P02), and scene 4 shows why that reason fails.
7. **s09 "the variable is a choice"** uses "the larger number" instead of the site's "the difference", because A2 uses the difference.
8. **s11 uses the pack's question 2 data as the worked example** (the ride) and the site's card 05 table as attempt 2 ("an online quiz"; numbers unchanged). The single-value median is read from a cumulative histogram (exact for whole numbers); the grouped median from a cumulative polygon at upper boundaries (an estimate).
9. **s02 adds U = {1, ..., 7}** to site `we-1` so all four Venn regions are non-empty.
10. **Site contexts re-set, numbers unchanged:** s02 `we-2` as fifty cones. Other site examples keep their own contexts (music and visual arts, lettered M and V in Revision 2, soccer and netball, dogs and cats in s03; French and German in s08).

## Site findings

S11-P01 (s07), S11-P02 (s09), S11-P06 (s08) and S11-P07 (s05) are avoided as described in each design; S11-P03 to S11-P05 (s11, box plots and quartiles) are not used because no quartile is taught (root ruling 13 would apply if they were). The gambling copy in lesson01 (Oz Lotto) and lesson04 (lottery draws) is left out (root ruling 8). Notation follows ruling 9: U, |A| (n(A) named once in s01 and s03), A̅ (A′ and Aᶜ named once in s01), |A|/|S| in s04, and ⊈ for "not a subset" (Revision 2, root's decision; only s01 writes it). No new site error was found.

## Open questions for root

All seven are closed: 1 by ruling 35 (no padding; the review found no practice gap), 2 by ruling 43, 3 by ruling 45, 4 by ruling 39, 5 by ruling 42, 6 is a plate count with no learning question (unchanged), 7 by ruling 36 (s01 now uses the 65-character title). The Revision 1 text is kept below for the record.

1. **Length floor.** All eleven are 5,000 to 5,516 characters (the brief's band), below the 5,500 floor of earlier rounds. Accept, or ask for a second worked board in the shortest four (s01, s03, s09, s10)?
2. **s09 and ruling 12.** Is the two-sentence "no width" reason what root intended, or should s09 do more (which would move into Year 12 s04's content)?
3. **The s11 closing frame.** Accept naming only the Year 12 playlist and two published Year 12 uses, with no mention of p01 to p03? If p01 is designed later, only scene 13's last chip would change.
4. **Dice beside Year 12 (s04, s06, s07, s08).** The Year 12 red die and Biology's white die are reused as neutral objects; Year 12 s01's anchor is a board-game die rolled 200 times. Confirm this is plate reuse, not a repeated anchor.
5. **The seeded "thousand mornings" in s08.** It is seeded to show exactly 50, 100 and 5 and is labelled "simulated illustration". Keep, or use an unseeded run beside the exact 0.995?
6. **Plate count.** Thirteen new plates across the strand (caps, cabinet, cone, library trolley, gumball machine, hotel, traffic light, counter bag, delivery bag, alarm clock, mandarin bag, produce scale, ride queue). Several appear first on the previous video's final frame, so each must be painted before the earlier build (named in each asset brief).
7. **s01's title** is 96 characters; a 65-character alternative is given.

## Kit needs (requirements, not built)

From `maths-a11-kit-needs-g-s.md`, used here: SetBraces (s01), VennDiagram with counts, shading, disjoint, restrict and double-count modes (s01 to s05, s07, s08), OutcomeGrid predicate light, restrict mode and ordered-draw layout (s04 to s07, s09), ProbabilityTree (s06, s07), TwoWayTable (s07, s08), FrequencyTable with visible formulas (s10, s11), FrequencyPolygon and CumulativePolygon layers (s11), DotsVsInterval (s09). Small additions named in the designs: token stream (s02), overshoot slide (s03), turn and drop and window tints (s04, s05), count-to-probability morph (s05), lamp tint (s06), share bars, proof builder and thousand-cell grid (s08), scale display digits (s09), spin and sort (s10), chart-type switch (s11).

## Self-grades (design stage, before learning review; not a render grade)

All eleven aim at the 16-frame grade-A bar: a painted object in the opening seconds (s01's caps arrive about 15 s in, after g06's coded frame), a new stage every 30 to 65 s, at least one live simulation each, g01 boards with framed answers and crossed slips, five-bullet key notes with a framed card, and coded HSC-style diagrams with letters and numbers only. Risks for the grader: s07's scene 3 (division step, `we-1` and Venn restriction together) and s06's density; both have named trims.

## Next

Revision 2: the learning review is resolved. Next: the Codex maths check and error check, then the Codex maths check and error check, then plates (in join order), voicing on the Google voice and builds to grade A. Nothing recorded; human listening pending.
