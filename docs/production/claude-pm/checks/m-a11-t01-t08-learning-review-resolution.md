# Year 11 Maths Advanced t01 to t08: learning review resolution

17 November 2026. This is the design author's resolution of `m-a11-t01-t08-learning-review-summary.md` and the per-design files `m-a11-t0N-learning-review.md`. It applies root's six binding decisions for this round: (1) split t02 into t02a (elevation and depression) and t02b (bearings); (2) t04 says "All Stations To Central" once in narration, causes 180° − A, 180° + A and 360° − A from the circle's mirrors, names t03's 60° as a related angle and rewords two feedback lines; (3) t08's key notes carry a first-quadrant table with a 60 s hold, and the full table stays in teaching for about 8 s; (4) the cliff's sight line and its 40 m both measure from the waterline; (5) t01's opening frame lists e08's grey chip, which then fades; (6) every other should-fix is applied, and optional findings where they help and cost little time.

All designs now carry "Revision 2 (17 Nov 2026): learning review resolved" in their Status line and a "Revision 2" section with the detail, finding by finding. This round changed documents only: no speech, build, render or commit. New and changed values were rechecked with SymPy 1.14 and bearings by coordinates (`work/brief-resolve-t/verify.py`: 96 checks, 0 failures). Narration was recounted by script (`work/brief-resolve-t/count.py`, which reproduces e08's 5,632 and c10's 5,915). Codex's maths check remains the authority.

**Totals:** 28 findings (0 blockers, 14 should fix, 14 optional). Should fix: all 14 applied. 7 use the reviewer's wording or visual, 5 follow root's decisions (t02 #2, t02 #5, t04 #1, t04 #2, t08 #1), and 2 are adapted (t02 #4, t04 #3). Optional: all 14 applied. None declined.

## The t02 split (root's decision 1)

- `lessons/math-a11-t02a.md`, "How do angles of elevation and depression find heights and distances?" Revision 1's scenes 1 to 3 (scene 3 now split into the alternate-angle idea on the painted cliff and a worked example on a coded side view), the buoy attempt unchanged, a new attempt that finds an angle (a tree 15 m tall seen from 40 m: tan⁻¹(15/40) ≈ 20.6°, so 21°; crossed "69°", the angle at the top), the memory card's first line with a new second line ("Unknown on top: multiply. On the bottom: divide."), and a new handoff: the top-view yacht on a coded sea map with a north line and an unlabelled heading, chips "which way?", "Next: bearings", "?". 4,359 characters, about 409 s with holds. YouTube link lesson04.
- `lessons/math-a11-t02b.md`, "How do true and compass bearings describe a journey?" Opens on t02a's final frame and defines a true bearing on that heading (040°). Compass to true in all four directions (N40°E = 040°, S32°W = 212°, S25°E = 155°, N65°W = 295°), each caused by "start at N or S, then turn clockwise (add) or back (subtract)"; true to compass ("find the nearer of north and south": 212° = S32°W, 295° = N65°W); the reverse bearing (212° to 032°); the right-angle journey with "both bearings are measured from the same north line at the turn, so the angle between the legs is their difference", then the bearing of the finish with "the second leg turned clockwise, so add". A new conversion attempt (S48°E: 132°, return 312°; crossed "228°", which is S48°W) and the hiker attempt. The handoff is Revision 1's t03 frame, unchanged; only its first sentence changes ("Every triangle today had a right angle, so its other two angles were smaller than ninety degrees"), because 212° made the old sentence untrue. 4,989 characters, about 459 s with holds. YouTube link lesson09.
- Both quote `ci61c6fa90` exactly, each with a line saying which part it covers. Both have their own learner question, Numbers to verify, joins, kit additions (`BearingRose` elevation mode first used in t02a, bearing mode in t02b) and error-check brief. The top-view yacht's Codex asset brief moved to t02a, its first use.
- `lessons/math-a11-t02.md` is now a short stub (split on 17 November, pointing to t02a and t02b). Revision 1's full text is in git history; every part of it is carried into one of the two designs.
- Joins: t01 → t02a unchanged except the waterline geometry; t02a's final frame is t02b's opening; t02b's final frame is t03's existing opening (t03 now names t02b). t06's spoken "Back in the bearings video" stays (it is accurate); its grey chip now reads "t02b: right-angle turn: √(12² + 9²) = 15 km". t03, t05 and t06 now name t02a or t02b in their recalls, entry knowledge, transitions and asset references.

## Should fix

- t01 #1, scene 7 (side = diagonal × cos 45°, no ratio): accepted, reviewer's narration and rows ("cos 45° = side ÷ diagonal", then the rearrangement, then "2√2 × √2/2 = 2 ✓" on the drawn 2 cm square). The decimal now says "centimetres".
- t01 #2, scene 3 (the base's right angle asserted): accepted, reviewer's narration; right-angle mark and tag "180° − 30° − 60° = 90°" on "ninety".
- t02 #1, scene 1 (multiply step unsaid): accepted in t02a, reviewer's narration, tag "unknown on top: multiply". t02a scene 4 now also says why dividing works ("multiply both sides by d, then divide by tangent twenty-seven degrees").
- t02 #2, the triangle does not close (t02 scene 1, t01 scene 13): accepted as root's decision 4. In t01's final frame, t02a's opening and every later cliff frame, the 40 m and the sight line both start at the yacht's bow waterline point, and the horizontal is the waterline. t01's Codex asset brief now asks for the yacht with its bow to the right and a sidecar point where the bow meets the waterline, with both waterlines at the same screen height; t02a's plate-anchored sight line starts there.
- t02 #3, the angle at the turn and the add step: accepted in t02b scenes 4 and 5, reviewer's narration; both arcs glow from the one north line at P before the 90° fills, and a clockwise arrow shows why the angle is added. Attempt 2's model answer now gives the same reason.
- t02 #4, only compass to true, only the add case: accepted and adapted. The reviewer asked for a sentence each; with the split there was room for a full scene each way (t02b scenes 2 and 3), covering all four compass forms and two true-to-compass readings. The crossed "S32°W = 148°" now shows its cause: 148° is S32°E.
- t02 #5, split: accepted as root's decision 1 (above).
- t03 #1, scene 6 (why 60°, which side is 1): accepted, reviewer's narration and visual ("sixty degrees short of a half turn", bracket and tag "180° − 120° = 60°"; the 1 and the 30° ring together, "1 faces 30°"). Ruling 17 still holds. Open decision 1 closed.
- t04 #1, scene 2 (copy forms announced; t03's 60° unnamed): accepted as root's decision 2. Scene 2 names t03's case first ("so its related angle is sixty degrees", chip "t03: 120° → 60°"), then causes each form from the mirror that makes it: the y-axis mirror leaves the copy "A short of a half turn" (180° − A), the x-axis mirror takes it "A past a half turn" (180° + A), one more mirror leaves it "A short of a full turn" (360° − A). Each copy gets a bracket of size A from the 180° or 360° mark, and the mirror that made it flashes.
- t04 #2, ASTC said twice: accepted as root's decision 2. Said once, in scene 3; scene 7 says "A, S, T, C". The framed card keeps the words on screen, as decision 2 allows.
- t04 #3, two feedback lines hard to hear: accepted and adapted. Feedback 2 uses the reviewer's line. Feedback 1 uses the reviewer's reason ("Tangent a hundred and thirty-five degrees is minus one, from the second quadrant") with a shorter sign step ("A minus angle flips its sign, so here it's plus one"), because the reviewer's full wording made it about 31 s; it is now 359 characters (Revision 1: 366).
- t06 #1, the handoff names an angle B not drawn: accepted, reviewer's narration and visual ("Call that point B. Seven kilometres faces the forty degree angle"; B on the highway 10.84 km from A, a dashed amber "7 km" line to C, "55.7°" violet at B). t07's boundary and scene 1 list them, and that B becomes B₁ on "twice".
- t07 #1, b sin A not derived: accepted, reviewer's narration and tinted triangle, tag "opposite A: b sin A".
- t08 #1, ruling 20 not applied: accepted as root's decision 3, not the reviewer's proposal. Key notes: four bullets (Revision 1's fourth bullet became the table's header row) and a first-quadrant table (0, π/6, π/4, π/3, π/2 with 0° to 90°; sin, cos, tan; tan π/2 undefined), held 60 s (1,800 frames). Scene 6 keeps the full table for about 8 s (Revision 1: 3 s), not in the notes, and gains one sentence saying why the first quadrant is enough to learn ("Every entry is a first-quadrant value with its quadrant's sign"), with the first-quadrant columns lighting.

## Optional

- t01 #3 (why scaling keeps ratios): applied as a replacement clause ("Scaling multiplies every side by the same number, so it cancels in each ratio"), teal row "2 ÷ 2√2 = 1 ÷ √2".
- t01 #4 (why the diagonal halves the right angle): applied ("The two sides at that corner are equal, so the cut is a mirror line"), tag "equal sides: mirror line".
- t01 #5 (e08's chip): applied as root's decision 5. The opening frame lists "e04: log₂ 100 ≈ 6.644, exact as log₂ 100", which fades with the "Next" chips on the first sentence.
- t02 #6 (spoken and written decimals differ): applied in t02a; the row reads "tan θ ≈ 0.788".
- t02 #7 (the painted cliff plays an 18 m cliff): applied in t02a; the 18 m example is on a coded HSC-style side view, "drawn the way exam questions draw it".
- t02 #8 ("zero six seven"): applied in t02b ("zero six seven degrees").
- t03 #2 (theta before its meaning): applied; the meaning now comes first.
- t05 #1 (shorter side faces smaller angle): applied, reviewer's wording, tag "shorter side, smaller angle". t07 #2 now leans on it.
- t05 #2 (calculator's degrees-and-minutes key): applied, one sentence and a "° ′ ″" key chip after the dial.
- t06 #2 (why relabel): applied ("The same steps work from any corner, so relabel the corners").
- t06 #3 (why add to 040°): applied ("The second leg turned clockwise, so the finish is clockwise of the first leg"), matching t02b.
- t07 #2 (link to t05's acute angle): applied, reviewer's sentence, before "So when A is acute", with the grey chip "t05: shorter side, smaller angle".
- t08 #2 ("a radian has no units"): applied ("a radian measure is a pure number. We often say radians to be clear, but the number doesn't depend on centimetres or metres"); the tag "no units" stays.
- t08 #3 ("two ten over one eighty"): applied ("two hundred and ten over a hundred and eighty").

## Housekeeping

- Open decisions answered by the review or by root are closed in each design: t01 (1, 2), t02a and t02b (1 pace, 2 feedback, 3 link), t03 (1, 2), t04 (1, 2, 3), t05 (1, 2), t06 (1, 2), t07 (1, 2) and t08 (1).
- Review evidence paths: t01 and t03 to t08 keep `checks/m-a11-t0N-learning-review.md`. t02a and t02b both name `checks/m-a11-t02-learning-review.md` (the review covers both parts) and new maths-check names `checks/m-a11-t02a-maths-check.md` and `checks/m-a11-t02b-maths-check.md`, for root to confirm with Codex's brief.
- Stage-plan times in t01 and t03 to t07 are Revision 1 approximations and say so; t02a, t02b and t08 have Revision 2 stage plans. Frames come from the recording's word timings.
- Scripted checks on all nine designs: no em dash (U+2014); every bold cue is quoted in its scene's Visual in spoken order. "All Stations To Central" occurs once in t04's narration.
- Edit scripts and checks are kept in `work/brief-resolve-t/` (count, finalize, cuecheck, verify, edit_t03 to edit_t08).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| t01 | 6,145 | 6,402 | about 567 s | about 476 s | 25 s, 26 s |
| t02 (Revision 1, one video) | 6,031 | split | about 541 s | about 448 s | 29 s, 28 s |
| t02a | (part of t02) | 4,359 | about 409 s | about 322 s | 29 s, 28 s |
| t02b | (part of t02) | 4,989 | about 459 s | about 369 s | 25 s, 28 s |
| t03 | 5,837 | 6,019 | about 540 s | about 447 s | 26 s, 28 s |
| t04 | 5,467 | 5,667 | about 511 s | about 420 s | 27 s, 27 s |
| t05 | 5,533 | 5,676 | about 512 s | about 421 s | 27 s, 29 s |
| t06 | 5,908 | 6,099 | about 546 s | about 453 s | 26 s, 29 s |
| t07 | 5,710 | 5,928 | about 533 s | about 440 s | 28 s, 28 s |
| t08 | 5,470 | 5,698 | about 539 s (60 s notes, 8 s table) | about 423 s | 28 s, 26 s |

Every design is under 570 s with holds, not only in speech. t01 is the tightest (about 567 s): it took Revision 1's scene 5 reserve trim (rewritten as "Keep the hypotenuse at one:") and two small cuts, and names two more reserve trims. t02a and t02b sit inside the 380 to 470 s split target. The longest single scenes are t05 scene 4 (936 characters, about 70 s), t04 scene 2 (937, about 70 s) and t06 scene 5 (928, about 70 s), each on a stage that keeps changing. These are speech-only estimates; measure them on the Year 11 voice.

## Joins

- e08 → t01: now exact, including the grey e04 chip (decision 5).
- t01 → t02a: the cliff frame with the waterline geometry (decision 4), identical in both designs.
- t02a → t02b → t03: new map frame, then Revision 1's 120° frame unchanged.
- t03 → t04, t04 → t05, t05 → t06, t07 → t08, t08 → t09: unchanged frames.
- t06 → t07: changed frame (B, 7 km, 55.7°), updated in both designs.

## For root

- Route and outline: `programme/maths-a11-route-inputs-4.json`, `maths-a11-course-outline.json` and `.md` still have one t02 entry. The designs assume outline order 59 carries an a and b part, as ruling 21 does for t14 and t15, which makes 19 trigonometry videos. Lesson keys `m-a11t02a` and `m-a11t02b` are proposed.
- Shared files outside this brief still name t02 as one video: `checks/root-decisions-maths-a11-t01-t08.md`, `checks/maths-a11-kit-needs.md` (`BearingRose` now first used in t02a, elevation mode, and t02b, bearing mode; the plate-anchored sight line now starts at the waterline), `parallel-production-board-2026-10-10.json`, and the t09 to t16 designs (for example t11 recalls "t02 (SOH CAH TOA)", which is now t02a's).
- The t02 review's evidence covers both parts; confirm whether Codex's maths-check brief should name t02a and t02b separately.
- New Revision 2 material (t02a attempt 2, its handoff and memory line; t02b scenes 1 to 3, attempt 1 and the memory line; t08's table sentence) has not had an independent review. The repeat check on the exact voiced preview, which AGENTS.md requires anyway, covers it; root may prefer a short review of t02a and t02b first.

Nothing recorded; human listening pending.
