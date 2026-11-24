# Maths Standard Y11 Time and location (t01 to t06) and Networks (n01 to n07): learning review summary

24 November 2026. Independent student learning review of the Revision 1 first designs (`lessons/math-s11-t01.md` to `t06.md`, `math-s11-n01.md` to `n07.md`), using `docs/production/student-learning-review.md`, AGENTS.md, the maths visual standard, route inputs 12 and 13 (including "year12DependsOn"), the design status and kit-needs files, and site findings MSY-22 to MSY-32 (site clone read only for midnight wording and the MST lesson's method names). Written designs and narration only: no built preview, plate inspection, playback or human listening is claimed. No design was edited.

Every worked number was recalculated. Time values by hand. Network values by listing every simple path and every spanning tree (scratchpad `rev/net.py`, `python -I`): all shortest paths, MSTs, MST uniqueness claims and the 21-tree counts (camp and towers) agree with the designs. No arithmetic error was found in any of the 13 designs. The findings are factual framing, teaching sequence and practice design.

## Verdicts

| Design | Blockers | Should fix | Notes | Verdict |
| --- | --- | --- | --- | --- |
| t01 time units, 24-hour time | 0 | 1 | 1 | Ready after should-fix |
| t02 elapsed time | 0 | 1 | 2 | Ready after should-fix |
| t03 latitude and longitude | 0 | 2 | 2 | Ready after should-fixes |
| t04 longitude and time | 0 | 1 | 0 | Ready after should-fix |
| t05 Australian zones, daylight saving | 0 | 1 | 2 | Ready after should-fix |
| t06 UTC | 1 | 0 | 2 | Revise scene 3 first |
| n01 networks | 0 | 0 | 2 | Ready |
| n02 degree, direction, weight | 0 | 1 | 1 | Ready after should-fix |
| n03 networks from tables and maps | 0 | 2 | 0 | Ready after should-fixes |
| n04 paths, trees, spanning trees | 0 | 0 | 1 | Ready |
| n05 minimum spanning trees | 0 | 1 | 1 | Ready after should-fix |
| n06 shortest paths | 0 | 0 | 1 | Ready |
| n07 shortest is not always best | 1 | 0 | 0 | Replace attempt 1 first |
| **Total** | **2** | **10** | **15** | |

## Blockers in full

**t06 scene 3 (T06-NY).** The season toggle is set to "July" (for standard-time Sydney, +10) while New York is shown at −5 and "1400 − 5 h = 0900 Wednesday" is framed as one real moment ("At one moment, three places"). In July New York is on UTC−4, so the time is 1000. Sydney's standard time (April to October) always falls inside New York's daylight saving (March to November), so +10 and −5 never coincide. This breaks the lesson's own rule ("check each city's daylight saving") and the brief's requirement that time-zone facts are correct for the stated date. Fix: either set the toggle to January with Sydney +11 (1400 + 11 = 0100 Thursday) and New York −5 (0900 Wednesday), or keep July and use New York −4 (1000 Wednesday).

**n07 attempt 1 (N07-A1).** Attempt 1 repeats the scene 2 worked example exactly (same toll network, same weights, same avoided edge, same question, same answer A–C–D 21 km), already shown in the hook, scene 2 and the handoff frame. It is not unseen practice. Fix: a fresh case, for example "P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3; Q–S is flooded; find the shortest open path from P to S": P–R–S, 14 km (unique; P–Q–R–S is 15; the flooded P–Q–S was 11), with the crossed slip "P–Q–S, 11 km".

## Should-fix list (one line each; details in each file)

- t01 T01-333: the main question, the Decisions heading and the YouTube line say a 200 s song "is not 3.33 minutes"; it is. Say it is not 3 min 33 s.
- t02 T02-BORROW: "eighty-three minus forty-seven" appears with no step showing 1423 = 13 h 83 min.
- t03 T03-SUNRISE: "Brisbane ... so the Sun rises there a little earlier" is false around the December solstice (Sydney's sunrise is earlier); longitude fixes solar noon, so say noon.
- t03 T03-PERTH: "just past one hundred and ten east" for Perth at 116°E sends the crosshair well west; say "a bit past halfway to 120".
- t04 T04-SEASON: "Real clocks in Perth are two hours behind Sydney" holds only on standard time; today (24 Nov) it is 3 h. Add "on standard time".
- t05 T05-MOST: "For most of the year, there are three zones": standard time is about half the year, and there are always three zones. Reword.
- n02 N02-TWOWAY: two-way streets are a "plain line" and then a double arrow in the same scene. Pick one convention for directed networks (double arrow).
- n03 N03-FEWEST: the tag "least total, not fewest stops" sits on a worked example whose shortest route (T–M–V) has the fewest stops. Drop the tag there or change M–V to 9.
- n03 N03-INITIALS: rows "P → S → H → W" use P for the Car park and W for the Pool. Use full names or matching initials.
- n05 N05-TIE: feedback 2 skips the tied A–B 7; say it closes A–B–C and is skipped.

## Cross-video and strand-level patterns

1. **Season facts slip in where a fact is said in passing, not where it is taught.** t05 and t06's taught facts are correct (daylight saving dates and states, BST, EDT, the five summer times). The errors are in side remarks: t04's unqualified "two hours", t05's "most of the year", t06 scene 3's July New York, t03's sunrise. A Codex error-check pass should read every time-zone or Sun claim in the t strand against a stated month, not just the worked rows. Worth adding to each t design's error-check brief: "every offset or gap names its season or is given in the question".

2. **Arithmetic is clean across both strands.** Every number, path, MST and count checks. The network designs' habit of verifying uniqueness by listing paid off: every "the shortest" and "the minimum spanning tree" claim is unique, including n07's "not in any MST".

3. **Worked examples sometimes fail to show the contrast they name.** n03 scene 4 (fewest stops), n05 scene 4 (all skipped links tie with tree routes, so "not the most direct route" has no example) and n07 A1 (practice equals the example) all teach a contrast with numbers that do not show it. When a scene names a misconception, its own numbers should display it.

4. **Ten-second countdowns against heavy demands.** n01 A1 (draw a network), n03 A1 (draw and compare routes), n05 A2 (Kruskal on nine edges) and n06 A2 (labelling on seven vertices) ask for more than 10 s of work. The owner rule fixes 10 s and every attempt says "Pause here to answer.", so this is not a finding; keep the full question and network on the card through the countdown (all designs do) and keep "pause" in the spoken line.

5. **Strong, consistent visual systems.** The t strand reuses one family (ladder, hop line, odometer, dial, zone ladder hung from Sydney then from UTC) and the n strand one board (`NetworkBoard` with builder, runner, label table). Each strand opens on the previous frame and closes with a "done" chip. Recurring models recall earlier ideas without re-teaching, consistent with the no-double-teaching rule.

6. **Year 12 set-up is met word for word.** r10 ("Year 11: 60 × 60", t01), Year 12 t02 (60 minutes in a degree, t03), c01a ("arrows with directions and weights", n02), f01 ("directed, weighted network", n02, n03), c02 (from-to table, n03) and c03 (shortest path as least total weight, no critical path, n06). Two small aids to Year 12: n02's directed-edge convention (N02-TWOWAY) matters for c01a and f01, and adding "or how much can flow" to the weight examples would ease f01 (note).

7. **Site fit is good.** Each design follows its site lesson where the site is right and records departures as MSY items (counting up instead of "add 2400", the London July correction, the missing digital-tools, weighted-edge, table-construction and n07 content). The site's "Midnight = 0000 (or 2400)" is consistent with t02's use of 2400; t01 could mention it once (note).

8. **Anchors are everyday and varied** (songs, podcasts, shifts, coaches, buses, map apps, sport broadcasts, video calls, flights, delivery vans, phone towers, a rail trail, a school camp, tolls). No science-themed default; no people drawn.

9. **Evidence path naming.** Each design's build section names its review file as `checks/m-s11-<id>-learning-review.md`; these reviews are written to `checks/math-s11-<id>-learning-review.md` as requested. Root may want to align the design references at revision.

No em dash in any of the 13 sources or in these review files. Human listening and voiced-preview review remain pending; this is a written-design review, not evidence that students learned.
