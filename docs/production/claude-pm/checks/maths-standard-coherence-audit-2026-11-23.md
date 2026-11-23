# Maths Standard coherence audit (23 November 2026)

Independent review for root, at the owner's direction of 23 November: designs must be planned well at three levels (lesson, focus area, course), fit together, and fit the HSCScience site unless the site is wrong. Read only: no design, ruling, site-correction or site file was edited, nothing was voiced, built or rendered. The companion table is `maths-standard-coverage-map-2026-11-23.md`.

## Scope and method

- **Designs:** all 133 in `../lessons/` (`math-s11-*` 30; `math-s12-*` 103), each at Revision 2. Pre-design packs in `../pre-design/maths-standard/` (Year 11 packs exist for e, f and l only). Rulings 1 to 99 in `root-rulings-maths-standard-outline.md`. Site findings MS-01 to MS-83 in `../site-corrections-maths-standard.md`.
- **Syllabus:** Mathematics Standard 11-12 (2024), in force for both years (`../../programme/syllabus/timeline.md`: Year 11 from Term 1 2026, Year 12 from Term 4 2026, first HSC 2027). Official points from `../../programme/syllabus/maths-standard-2024-crosswalk.json` (333 points: Year 11 119; Year 12 Standard 1 71; Year 12 Standard 2 143). Plan: `../../programme/maths-standard-course-outline.md` (79 Year 11 and 92 Year 12 content videos, 4 optional) and route inputs 1 to 9.
- **Site:** read-only clone `C:/Users/kygs/teaching-app-fix/subjects/maths-standard` (HEAD `5d74a627`, 16 Nov 2026; the same HEAD the crosswalk used). 119 lessons (56 Year 11, 63 Year 12; 2 retired). Nothing there was run or changed.
- **Mechanical checks (every design):** (1) each design's `Handoff:` line and handoff scene against the next design's `**Boundary:**` and scene 1, for all 29 Year 11 joins, all 102 Year 12 joins and the 15 Standard 1 branch joins (146 joins); (2) quoted chips and plate files shared across each join; (3) YouTube "Builds on" and "Next" lines against the neighbours' actual titles; (4) content-point codenames listed by each design against the crosswalk; (5) every Standard 1 point against the Standard 1 path; (6) Year 11 ids named in Year 12 entry knowledge against the designs that exist; (7) stale "provisional" markers; (8) em dashes (none found).
- **Deep samples:** the Standard 1 branch frames (a01 to a03, a05 to a07, a08 to i01, i14 to i16, i18 to r01, r13 to t01a, b04a to b07); f03b to f08; e04a to e12; r10 against f04a; a12 against a05; z01 and z02 (σ); c01a (network terms); r07 (trapezoidal rule); t01a (hypotenuse); i12 (buy now, pay later); a04a (profit and loss); e06 and e12 (locked cells).

## Year 11 completeness: the answer

**Year 11 Standard is not complete.** The 30 designs cover 3 of the 8 Year 11 focus areas: Formulas and equations (f01 to f08; 8 outline videos as 10 designs), Linear relationships (l01 to l07) and Earning money (e01 to e12; 12 as 13). Together that is **27 of the outline's 79 Year 11 content videos** and **37 of the 119 Year 11 content points**. Every one of those 37 points has a design.

Missing, with no pack, no route input (route inputs 8 and 9 stop at e12) and no site-corrections pass:

| Focus area | Outline videos with no design | Points uncovered | Site lessons not yet used |
|---|---|---|---|
| Managing money | m01 to m09 (9) | 13 of 13 | managing-money lesson01, 03, 04, 05, 06 (02 is exam practice) |
| Applications of measurement | a01 to a11 (11) | 13 of 13 | applications-of-measurement lesson01 to 09 and 13 (10 to 12 are outside the 2024 Year 11 points; lesson12 is used by Year 12 r14) |
| Time and location | t01 to t06 (6) | 8 of 8 | time-and-location lesson01 to 03 |
| Networks, paths and trees | n01 to n07 (7) | 10 of 10 | networks-paths-and-trees lesson01, 04, 05, 06 (02 and 03 are 2017 content) |
| Data analysis | d01 to d19 (19) | 38 of 38 | data-analysis lesson02, 07, 09 to 13 (08 is a 2017 review) |
| Optional practice | x01, x02 | n/a | n/a |

That is **52 content videos and 82 content points** (69 per cent of Year 11). Ruling 1 put Year 12 first, so the gap is a known sequencing choice, but no file plans the remaining Year 11 work and 43 Year 12 designs already assume it (finding B2).

Year 12 is complete against the syllabus: all 143 Standard 2 and 71 Standard 1 points have a design, and every Standard 1 point has at least one design on the Standard 1 path (rulings 9, 30, 68).

## Counts

| Severity | Count |
|---|---|
| Blocker | 2 |
| Should fix | 9 |
| Note | 9 |

## Blockers

### B1. Year 11 Standard has 52 content videos with no design, and the e12 handoff points at one of them

- **Files:** `../../programme/maths-standard-course-outline.md` rows 28 to 81; `../lessons/math-s11-e12.md` (scene 11 "handoff (provisional)", Decisions "Handoff", `Handoff: math-s11-m01 (provisional)`); ruling 87.
- **Finding:** see the completeness answer above. e12's final frame is m01's provisional opening ("prices go up too", the swing-tag plate with "+3%"), and its YouTube "Next" names a video that has no pack or design. If e12 is voiced now (brief 256, step 4 voices "in playlist order"), the recorded close promises a video that does not exist and may open differently.
- **Fix:**
  1. Root writes route inputs 10 to 12 for m, a, t (playlist order after e) and for d and n (parallel strands), using the outline rows and the "Year 11 points that Year 12 videos assume" list, then queues packs and designs in the same pattern as e, f and l.
  2. Hold e12's voicing until m01 is designed and confirms the join, **or** change e12 scene 11 now to a neutral strand close ("Earning money: done", with no "Next" chip and no m01 tag), with a description line that does not name a next video. Then record the choice as a ruling.
  3. Add the remaining Year 11 strands to `../../parallel-production-board-2026-10-10.json` (or its current successor) with their real state (not started), so this gap is visible.

### B2. 43 Year 12 designs recall Year 11 lessons that do not exist, and none of the Year 11 strands is planned to match them

- **Files:** Year 12 entry knowledge naming undesigned Year 11 ids: a04a, a06, i01, i02a, i06a, i06b, i07, p01, p06 (m01); i07 (m02, m05); i12 (m03, m04); i16 (m03); i18 (m09); r01, r04, r05, r08, r10 (a01); r06a (a02, a05); r06b, t09 (a05); r07 (a07, a11); r08 (a03); r14 (a04); t01a, t03, t08 (a06); r10 (t01); b01 (d05, d06 to d16); b02 (d18); b03 (d04); b04a (d11); b05 (d13); b06, p07 (d07); p05 (d06); p08 (d03, d10); z01 (d09, d11, d13); z02, z03 (d13); c01a, f01 (n02, n03); c02 (n03); c03 (n06, as a contrast).
- **Finding:** these designs recall Year 11 ideas in a phrase or grey chip, which works for students who learned them in class. The samples show the Year 12 designs still teach what they need: t01a defines the hypotenuse, r07 rebuilds A ≈ (h/2)(d_f + d_l), i12 explains BNPL fees, a04a states profit = R − C, z02 explains σ as the ruler. The risk runs the other way. When m, a, t, n and d are designed, nothing tells those designers which wording, notation, anchors and chips Year 12 already uses (for example c01a's chip "Year 11: arrows with directions and weights", b05's "the calculator's statistics mode for the standard deviation", r07's "the Year 11 rule recalled", z01's σ). That invites double-teaching and clashing notation across the course.
- **Fix:** in each new Year 11 route input, add a "Year 12 depends on this" block listing the Year 12 design, the exact recall chip or phrase, the notation (for example σ for population standard deviation; d_f and d_l; weighted, directed) and the anchor, so the Year 11 video sets up what Year 12 recalls. When those Year 11 videos exist, update the Year 12 "Builds on" lines that now say only "(Year 11)" (a01, a05, a12, b01, r01, r07).

## Should fix

### S1. r10 reteaches km/h to m/s (÷ 3.6, with its reason) that Year 11 f04a already teaches, and the two designs disagree about it

- **Files:** `../lessons/math-s12-r10.md` (scene 3 and Revision 2 finding 1: "144 km/h = 144 000 m per 3600 s = 40 m/s, then the ÷ 3.6 shortcut with its reason"; recall line names f04 only for speed = distance ÷ time); `../lessons/math-s11-f04a.md` (Teaches: "km/h into m/s (÷ 3.6) with its reason, and back (× 3.6)"; memory aid "km/h ÷ 3.6 for m/s"; it says "Year 12 r10 recalls this in a grey chip and teaches unit chains in general").
- **Finding:** f04a was designed after r10 and assumes r10 recalls the conversion. r10 still derives it as new. Students who watch both see the same derivation twice.
- **Fix:** in r10 scene 3, keep the general method (change the top unit, then the bottom unit) on a non-speed rate, and meet km/h to m/s as a recall: grey chip "Year 11: km/h ÷ 3.6 = m/s", with one sentence naming the reason. Update r10's entry line to "f04a (km/h ÷ 3.6)". The alternative (keep r10 as is) needs f04a's sentence about r10 corrected. Either way, re-measure r10's length.

### S2. a12 says "asymptote" is an a05 recall, but a05 never mentions asymptotes

- **Files:** `../lessons/math-s12-a12.md` (Entry knowledge "(math-s11-l06, l07; a05): ... asymptotes"; plain meanings "asymptote (... a05 recall)"); `../lessons/math-s12-a05.md` (no use of the word).
- **Fix:** treat "asymptote" as new in a12. It already has the plain meaning "a line the curve gets closer and closer to but never reaches". Drop "a05 recall" and remove "asymptotes" from the entry line. Do not add it to a05, which Standard 1 shares and which does not need the term.

### S3. Stale "provisional" markers on joins that rulings have already settled

- **Files and fixes:**
  - `math-s12-r13.md` (Revision 2 notes, scene 13, open decisions, Status) and `math-s12-r14.md` (same places): "provisional until math-s12-t01 is designed" for the 35° roof. Rulings 56 and 62 settled this. Remove "provisional".
  - `math-s12-r13.md` (`Handoff:` line and Decisions "Handoff") and `math-s12-r14.md` (`Handoff:` line): the id "math-s12-t01" should be `math-s12-t01a` (ruling 57 split).
  - `math-s12-t05.md` (Decisions, Assets, open decision 2) and `math-s12-t11.md` (Status and `Handoff:` "provisional, ruling 59"): b01 exists and opens on t11's frame (b01 Boundary; ruling 64). Close it.
  - `math-s12-i23.md` (open decision 2): "The jug is provisional until r01 is designed". r01 exists and opens on it. Close it.
  - `math-s12-i11.md` (YouTube note): "uses a provisional i12 title". Replace it with i12's title.
- **Why it matters:** builders and the voicing brief read "provisional" as "wait". These items are settled.

### S4. YouTube "Builds on" and "Next" lines carry placeholders and wrong titles

- **Finding:** the title check across all 146 joins found 33 "Next" lines that do not quote the next design's title and 26 "Builds on" lines that do not quote the previous title. Most are acceptable short forms, but these are wrong or placeholders:
  - `math-s12-r06b.md`: "Next (Standard 1): the first rates video (title set by its design)". It should be "Ratios vs Rates and Unit Rates".
  - `math-s12-r07.md`: "Next: the volume of rainfall video (title set by its design)". It should be "Rainfall Volume: V = Ah on Roofs, Tanks and Land".
  - `math-s12-t11.md`: "Next: bivariate data (title set by its design)". It should be "Bivariate Data: One Variable or Two?".
  - `math-s12-i18.md` and `math-s12-i23.md`: "the first ratios video". It should be "Ratios, Fractions and Simplest Form".
  - `math-s12-r13.md` and `math-s12-r14.md`: "right-angled trigonometry". It should be "Sine, Cosine and Tangent: Finding a Missing Side".
  - `math-s12-z06.md`: "Next: Critical path analysis". It should be "Precedence Tables and Network Diagrams".
  - `math-s12-a08.md`: "Next (Standard 1): Simple interest". It should be "Simple Interest: I = Prn and Its Graph".
  - `math-s12-i01.md`: "Builds on: Inverse Variation Models (Standard 2) or Linear Models in Context (Standard 1)". Neither title exists. It should be "Building and Using Reciprocal Models: y = k/x (Standard 2) or Sketching Graphs from Real-Life Stories (Standard 1)".
  - `math-s12-r09.md`: "Builds on: Ratios and simplest form". The Standard 2 viewer arrives from r08 and the Standard 1 viewer from r06b. Name the actual previous video or videos, or say "Builds on" for content and add "Previous:".
  - `math-s12-r04.md`: "Builds on: Ratios, Fractions and Simplest Form". The previous video is r03 (Standard 2) or r02 (Standard 1). Fix it as for r09.
- **Fix:** one sweep. Every "Next" quotes the exact title (no suffix, ruling 26) of each route's next design. "Builds on" names the previous video on each route, then the content prerequisites if wanted. The Year 11 f-strand short forms (f03a, f03b, f04a, f04b, f07, f08, e08) get the same sweep.

### S5. Course suffix in YouTube titles is inconsistent for Standard 2-only videos

- **Finding:** 25 Standard 2-only designs end "| Year 12 Maths Standard 2" (a09 to a13, r08, r14, z01 to z06, c01a to c06, f01 to f04). 27 other Standard 2-only designs end "| Year 12 Maths Standard" (a02a, a02b, a06, i04, i06a, i06b, i07, i15, i19 to i23, r03, r05, r07, t06 to t11, b04b, b05, b06, p04, p07). a08 ends "Standard 1".
- **Fix:** root rules one convention, either a course suffix on every single-course video or none. Apply it in one pass, keeping titles at 80 characters or fewer.

### S6. e09 to e12 joins depend on PAYG placeholders still waiting for brief 256

- **Files:** `math-s11-e09.md` (every withholding amount a placeholder; "$156", "$900.78"); `math-s11-e10.md` Boundary ("both e09 placeholder-dependent"); `math-s11-e11.md` and `math-s11-e12.md` (the carried totals and the spreadsheet row "80950 | 14805 | 1619 | 64526"); `../codex-prompts/256-maths-standard-y11-facts-check-plates-voice.md` step 1.
- **Finding:** one repriced ATO row will change e09's final frame, e10's opening and recall, and possibly e11's and e12's carried values. Ruling 94 holds voicing until then, but no item covers re-checking the four joins together.
- **Fix:** when step 1 lands, root edits e09 to e12 in one batch, then re-runs the join check (handoff against boundary) and the narration numbers for all four before any is voiced.

### S7. Year 11 ids in Year 12 designs predate the f03 and f04 splits

- **Files:** `math-s12-a02a.md`, `a09.md`, `a13.md`, `r04.md`, `r10.md`, `r12a.md`, `t01a.md`, `t06.md` cite `math-s11-f03` or `f04` (ruling 88 split them).
- **Fix:** use f03a for rearranging (a02a, a13, t01a, t06), f03b for y = ax² + c (a09) and f04a for speed (r04, r10, r12a).

### S8. Year 11 Formulas and equations handoff chips omit the topic

- **Files:** the f01 to f07 handoff scenes end on chips "Next" and "?" (f08 already says "Next: gradient and y-intercept"). The l-strand, the e-strand and every Year 12 strand use "Next: <topic>".
- **Fix:** add the topic word to f01 to f07's "Next" chip (for example "Next: solving equations", "Next: rearranging formulas") and to the matching next boundary. This is a picture-only change. It keeps one visual system across the course.

### S9. No site-corrections pass exists for five Year 11 strands

- **Files:** `../site-corrections-maths-standard.md` sections 11 and 12 cover only Earning money, Formulas and equations, and Linear relationships for Year 11.
- **Fix:** the packs for m, a, t, n and d (B1) each write their site section in the same format, starting from the crosswalk's partial and missing points: GST/VAT, megalitres, metric prefixes, irregular blocks, the shortest path that is not the best path, survey design, infographics, and spreadsheet data analysis.

## Notes

- **N1. Joins pass.** In all 146 joins (Year 11, Year 12 and the Standard 1 branches), the next design's boundary names the previous design and opens on its final frame. The quoted-chip and plate check flagged 20 joins. I read 11 of them in full (f03b to f04a, f07 to f08, r12a to r12b, t01b to t02, i14 and i15 to i16, b04a and b06 to b07, i18 and i23 to r01, a01 to a03, a05 to a07), and they match. The other 9 flags come from plates that the next boundary names as files but the handoff scene names in words. I did not read those 9 in full. Only r13 and r14 name a stale id (S3).
- **N2. Standard 1 pathway is consistent.** Year 11 is one course for both pathways. In Year 12, 51 designs carry Standard 1 (a01, a03 to a05, a07, a08; i01 to i03, i05, i08 to i14, i16 to i18; r01, r02, r04, r06a, r06b, r09 to r13; t01a to t05; b01 to b04a, b07; p01 to p03, p05, p06, p08), and every two-route frame has a matching opening on both routes. Where a Standard 1 viewer meets a frame from a video they skipped (a01 to a03 shows a02b's ticket card; a05 to a07 shows a06's city model), the designs restate what is needed (a03's words card is self-contained; a07's first sentence states the model in full). This is accepted by rulings 13 and 20.
- **N3. Recurring models and memory aids are introduced once and reused.** Examples: f02's "Name it, write it, solve it, say it" returns as a03's "Name it. Two facts. Solve it. Say it."; l01's "c is where you start" returns as a06's "k: where you start"; y = mx + c is used throughout (rulings 66, 91); w for mass (ruling 93). Anchors (delivery van, red hatchback, coin jar, wall calendar, kiosk, loaf, café) are deliberate callbacks (rulings 25, 72). No contradictory aid was found.
- **N4. Order inside Year 11.** Earning money uses percentages (commission, loading, the 2% levy) before Managing money's m01 teaches percentage increase and decrease. Stage 5 recall covers this (ruling 87). When m01 is designed, open it as a callback to e03 and e10 percentages and do not reteach "a percentage of an amount".
- **N5. Planned overlaps to protect later.** Year 11 m03/m04 (buy now, pay later; buying on terms) and Year 12 i12 share the same cost idea. m03 should teach the scheme and its fees on a Year 11 anchor, and must not use i12's e-bike or its loan comparison. Year 11 a11 (trapezoidal rule) must set d_f, d_l and h exactly as r07 recalls them. Year 11 d13 must use σ (population) and the calculator steps that b05 and z02 recall.
- **N6. Site fit: the designs are right where they depart.** Sampled departures all favour the syllabus or correct a logged site error: minimum-wage repricing (MS-76), the 2026-27 tax table (MS-73), super as an employer contribution (MS-71, MS-72), y = mx + c (MS-82), w for mass (MS-01), no P(B|A) (MS-66), the empirical-rule and critical-path diagram errors (MS-47, MS-49), and Year 12 trigonometry pages labelled Year 11 (MS-44). I found no design that departs from a correct site lesson without a recorded reason.
- **N7. Site items for root to consider adding to the site-corrections file (not edited here):**
  1. The Year 11 speed point (`ci61d581aa`) has no Year 11 page. Speed, distance and time is taught only on `year12/ratios-and-rates/lesson01.sa.html`, so a Year 11 student browsing their year cannot find it. MS-81 logs the missing km/h to m/s and reaction-distance content but not this. Suggested: a Year 11 Formulas and equations lesson (or a cross-link from `year11/formulas-and-equations/lesson07.sa.html`).
  2. `year11/formulas-and-equations/lesson02.sa.html` (one-step and two-step equations) is cited only for one example (f02 `we-3`). That is acceptable because Stage 5 covers it, but it has no 2024 point of its own. Record it as a revision page in section 3 for consistency with the other out-of-scope pages.
- **N8. Lengths and placeholders are already ruled.** Under-5,000-character designs (rulings 55, 95, 99), the e07, e09, e10, e11 and f07 Codex waits (rulings 94 to 97), and the i08, r06a and t09 price sourcing (rulings 49, 51, 61) are tracked elsewhere. They are not repeated here.
- **N9. Course close.** f04 ends the Standard 2 course with no promise of further videos (ruling 73), and p08 ends Standard 1 ("Year 12 course complete"). There is no planned bridge from the last Year 11 video into Year 12 a01 (a01 opens cold). That is acceptable, but when Year 11 d19 or t06 is designed, give it a "Year 11: done" close rather than a "Next" chip into a01.

## Top ten fixes (in order)

1. Plan and design the 52 missing Year 11 videos (m, a, t, n, d; route inputs 10 to 12, packs, designs) and put them on the production board (B1).
2. Hold e12's voicing until m01 is designed, or change e12's close to a neutral "Earning money: done" (B1).
3. Add a "Year 12 depends on this" block (recall chips, notation, anchors) to each new Year 11 route input (B2).
4. Make r10 recall f04a's km/h ÷ 3.6 instead of rederiving it, or correct f04a's claim (S1).
5. Treat "asymptote" as new in a12 and drop the a05 recall claim (S2).
6. Clear the settled "provisional" markers and the stale t01 id in r13, r14, t05, t11, i23 and i11 (S3).
7. Sweep every YouTube "Next" and "Builds on" line to quote the real neighbouring titles on each route (S4).
8. Rule one course-suffix convention for single-course titles and apply it (S5).
9. Re-check the e09 to e12 joins as one batch when brief 256 step 1 fills the PAYG rows (S6).
10. Update the Year 12 references to f03 and f04 to the split ids, and add the topic to f01 to f07's "Next" chips (S7, S8).
