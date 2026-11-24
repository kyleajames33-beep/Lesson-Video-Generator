# Maths Standard Y11 t01 to t06 and n01 to n07: learning review resolution

24 November 2026. This is the design author's resolution of `m-s11-t-n-learning-review-summary.md` and the per-design files `m-s11-<id>-learning-review.md`. It applies root's ten rulings for this round: (1) t06 scene 3 moves to January (Sydney +11, New York −5); (2) n07 attempt 1 uses the reviewer's flooded-road network; (3) t01 says 200 s is 3.33 minutes but not 3 min 33 s; (4) t03 links longitude to solar noon, not sunrise, and puts Perth's crosshair at 116° east; (5) t04 says "two hours behind Sydney on standard time, three during daylight saving"; (6) t05 says "about half the year"; (7) n02 draws two-way streets in a directed network one way, consistently; (8) n03's "least total, not fewest stops" tag sits on an example where the two differ, and the P and W labels are fixed; (9) n05's second feedback names both length-7 links and the tie; (10) review file references are renamed only if they differ.

Twelve designs carry "Revision 2 (24 Nov 2026): learning review resolved" in their Status line and a "Revision 2: learning review resolved (24 Nov 2026)" section with the detail. n01 had no blocker or should-fix and is unchanged. This round changed documents only: no speech, build, render or commit. Changed values were recalculated with exact arithmetic (scratchpad `s11tn/verify_t.py`, integer minutes, 9 checks, 0 failures; `s11tn/net.py`, every simple path and every spanning tree listed, `python -I`). Narration was recounted with `work/brief-review-s11-e/count.py`, the counter named in the design status file. Codex's maths check remains the authority.

**Totals:** 2 blockers, 10 should fix, 15 notes. Blockers: both resolved. Should fix: all 10 applied (6 with the reviewer's wording or option, 4 adapted under root's rulings). Notes: 10 applied, 3 kept as recorded or reserve options (T05-LOAD, T05-RETURN, T06-UTC), 2 left unchanged by design (N01-DRAW, N01-PIPES). The review file references already use `checks/m-s11-<id>-learning-review.md`, which matches the files, so none was renamed (ruling 10).

## Blockers

- **t06 T06-NY (ruling 1).** Scene 3 is now "fourteen hundred UTC on a Wednesday in January". Sydney (+11): 1400 + 11 h = 2500; 2500 − 2400 = 0100 Thursday. Tokyo (+9 all year): 2300 Wednesday. New York (−5 in its winter): 0900 Wednesday. Both offsets hold in January, so the moment is real and still shows two different days. Updated with it: the scene 3 rows and toggle (flips back to "January" with "check the season"), the Decisions worked examples, author note (b), Numbers used, Numbers to verify and the `DifferenceLadder` check line. Follow-on fix in scene 2: New York is introduced as "minus five in its winter", and the July toggle now lifts New York to −4 as well as London to +1. The July ladder had kept New York at −5, which was the same error in the picture.
- **n07 N07-A1 (ruling 2).** Attempt 1 is now "Distances (km): P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3. The road Q–S is flooded. Find the shortest open path from P to S and its length." Every simple path: P–Q–S 11, P–R–S 14, P–Q–R–S 15, P–R–Q–S 16. With Q–S closed only 14 and 15 remain, so P–R–S, 14 km, is unique. Feedback 1 (265 characters, about 20 s) removes the flooded road, compares the two open routes and crosses "P → Q → S = 11 km" (caption "Q–S is flooded"). The model answer, author note (f), Numbers used and Numbers to verify match.

## Should fix

- **t01 T01-333 (ruling 3): accepted.** The main question, the Decisions "Anchor" heading and the YouTube description now say a 200-second song "is 3.33 minutes, but not 3 minutes 33 seconds". Scene 1's narration now says "Three point three three minutes is right, but the point three three is part of a minute, not thirty-three seconds", with a green tick on the calculator and a chip "3.33 min = 3 min 20 s".
- **t02 T02-BORROW: accepted, reviewer's wording.** Scene 3 says that 1423 is 13 hours and 83 minutes because one hour is 60 minutes, then 83 − 47 = 36 and 13 − 10 = 3. A row "1423 = 13 h 83 min" now comes before the borrow row.
- **t03 T03-SUNRISE (ruling 4): accepted.** "So the Sun reaches its highest point there a little earlier". The sunrise glow is now a noon line crossing Brisbane's meridian before Sydney's.
- **t03 T03-PERTH (ruling 4): accepted.** "A bit more than halfway between one hundred and ten and one hundred and twenty east". The crosshair passes a halfway tick at 115°E and stops at 116°E.
- **t04 T04-SEASON (ruling 5): accepted.** "Real clocks in Perth are two hours behind Sydney on standard time, three during daylight saving, and never two hours twenty." The clock faces are captioned "standard time", and a chip reads "daylight saving: 3 h (t05)".
- **t05 T05-MOST (ruling 6): accepted.** "Australia has three time zones. Start with standard time, which runs for about half the year, from April to October." Scene 12's recap now reads "three zones, with three times in winter and five in summer".
- **n02 N02-TWOWAY (ruling 7): accepted, double arrow.** Year 12 c01a draws each activity as an arrow, and f01 draws "one arrow for each row, from the From point to the To point". So a two-way street in a directed network gets an arrowhead at each end, and "in a directed network every edge shows its direction". The "plain line" sentence is cut. Plain lines are kept for undirected networks only. Key note 3 matches.
- **n03 N03-FEWEST (ruling 8): accepted, reviewer's option (b).** Mill to Village is now 9 km. Routes from the Trailhead to the Village: T–L–R–V 16 (three edges, unique shortest), T–M–V 18 (two edges, fewest stops), T–L–M–V 19, T–M–L–R–V 23. The tag "least total, not fewest stops" now sits beside T–M–V with the chip "fewest stops: 18 km". The ride is 16 ÷ 12 = 4/3 h = 1 h 20 min (was 1 h 10 min). n02's handoff table (n03's opening frame) now shows 9 in the M–V cell, so the join stays exact.
- **n03 N03-INITIALS (ruling 8): accepted, matching initials.** The one-way town is now Car park C, School S, Hall H (was the Shops) and Pool P. The rows read "C → S → H → P = 9 min" and "P → S → H → C = 15 min". No time changed.
- **n05 N05-TIE (ruling 9): accepted.** Feedback 2 says "Two links tie at seven. A B closes A, B, C, so skip it. E F brings in F, so keep it." The sorted list shows both 7s. Listing every spanning tree gives a unique 21 km minimum (next 22), and either order for the tied 7s gives the same tree. The feedback lasts about 28.5 s at 379 characters, after cutting "because it joins the two groups" and shortening the slip line.

## Notes

- Applied: T01-2400 (t01 scene 5 says midnight at the end of a day is sometimes written 2400); T02-2400 (t02's "midnight is both 2400 and 0000" moved from scene 6 to scene 4, where 2400 is first used); T02-GUESS ("A quick guess says"); T03-CLIMATE (climate clause cut); T03-LOAD (degrees-and-minutes sentences moved after the dropped-minus slip); T06-LA ("on a Thursday in January"); N02-WEIGHT ("or how much can flow through it"); N04-CYCLE ("A route that never repeats a vertex until it comes back to the start is called a cycle."); N05-DIRECT (the "most direct route" clause is cut, since every skipped link ties with its tree route; n07 teaches the true contrast); N06-WHY ("a stop that's already at least as far, and then travel further still").
- Kept as reserve options or recorded: T05-LOAD and T05-RETURN become reserve trims in t05's length section, used only if the voiced take runs long. T06-UTC is recorded for the maths check, as the reviewer advised.
- Unchanged by design: N01-DRAW (the 10 s countdown is the owner rule; the card stays up). N01-PIPES: `ma11-water-tank-v1.png` was viewed. It is a garden rainwater tank, not a town reservoir, so the coded schematic stays short.
- Strand pattern 1 (season facts in side remarks): t03 to t06 error-check briefs gain an item: every time-zone, offset, gap or Sun claim names its season or month or is given in the question.

## Lengths after Revision 2

| Design | Characters (Rev 1 → Rev 2) | Total with holds | Feedback 1, 2 |
| --- | --- | --- | --- |
| t01 | 5,750 → 5,892 | about 526 s | 21.4 s, 16.5 s |
| t02 | 5,629 → 5,818 | about 516 s | 25.5 s, 27.1 s |
| t03 | 6,048 → 6,042 | about 536 s | 22.7 s, 27.0 s |
| t04 | 5,541 → 5,594 | about 506 s | 19.6 s, 22.5 s |
| t05 | 5,514 → 5,598 | about 502 s | 18.0 s, 21.1 s |
| t06 | 5,632 → 5,787 | about 518 s | 18.8 s, 24.7 s |
| n01 | 5,520 (unchanged) | about 496 s | 16.8 s, 18.6 s |
| n02 | 5,573 → 5,598 | about 502 s | 21.7 s, 27.9 s |
| n03 | 5,558 → 5,664 | about 509 s | 22.3 s, 21.2 s |
| n04 | 5,475 → 5,500 | about 495 s | 20.2 s, 28.8 s |
| n05 | 5,495 → 5,458 | about 493 s | 23.9 s, 28.5 s |
| n06 | 5,526 → 5,558 | about 502 s | 23.8 s, 27.2 s |
| n07 | 5,545 → 5,489 | about 494 s | 19.9 s, 24.5 s |

Every design keeps 13 scene headings, ends both attempts with "Pause here to answer.", keeps feedback under 30 s and stays under the 570 s cap. The t strand stays within Revision 1's 5,514 to 6,048 characters. n03 (5,664) is above the n strand's Revision 1 range (5,475 to 5,573), but it is still about 61 s under the cap. No em dash appears in any source. En dashes appear only in network edge names such as P–Q, following the strand's existing convention.

## Joins

Joins are unchanged except n02 to n03: n02's final-frame table now shows M–V 9, which is n03's revised opening frame. t06 to n01 and n07 to d01 are untouched.

## Open for root

- n07 attempt 1 and attempt 2 both use the letters P, Q, R and S, on different networks with separate cards. This is kept as ruled. Relabel attempt 1 (for example J, K, L, M) if the voiced preview shows any confusion.
- Human listening and the voiced-preview learning review remain pending. This record covers written designs only.
