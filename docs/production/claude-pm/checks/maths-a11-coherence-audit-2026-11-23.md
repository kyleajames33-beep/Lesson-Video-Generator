# Year 11 Mathematics Advanced: coherence audit (23 November 2026)

Independent review for root, made before any Year 11 voicing or build. It answers the owner's direction of 23 November: each design must be planned well at three levels (lesson, topic and whole course), the lessons must fit together, and they must fit the HSCScience site's lessons unless the site is wrong. The audit also checks that Year 11 ends where the already published Year 12 Advanced videos (math-a12-*) begin. It is read only: no design, outline, route, site or corrections file was edited. The topic-by-topic table is in `maths-a11-coverage-map-2026-11-23.md`.

**Inputs read**
- The 94 files `claude-pm/lessons/math-a11-*.md`: 93 designs and the t02 split stub.
- The pre-design packs, `programme/maths-a11-course-outline.md` and `.json`, `programme/maths-a11-route-inputs-1.json` to `-5.json` and the crosswalk `programme/syllabus/maths-advanced-2024-y11-crosswalk.json` (201 points).
- `claude-pm/site-corrections-maths-a11.md` and `site-fix-maths-a11-task.md` and `-task-2.md`.
- The Year 12 designs `math-a12-*.md` and `maths-a12-video-route.json`.
- `AGENTS.md` and `claude-pm/maths-visual-standard.md`.
- Site: the read-only clone `C:/Users/kygs/teaching-app-fix`, main at `5d74a6272` (16 Nov 2026), `subjects/maths-advanced/year11/` (103 lesson files). Nothing was run there.

**Methods**
- Handoffs, entry knowledge, point quoting and YouTube "Builds on" and "Next" lines were extracted by script, in course order.
- Each claimed prerequisite was checked against the cited design's text.
- The site-missing points, the Year 12 entry-knowledge claims and the site departures were checked by reading the relevant sections.

## Verdict

The Year 11 plan is coherent at all three levels. All 201 syllabus points have a home. All 92 handoffs between designs match exactly, and no design assumes anything taught later. Every Year 11 point that Year 12 relies on is owned and taught. The site fit is sound: wherever a design departs from the site, the design is right.

None of the findings blocks voicing. Seven should be fixed first, because four of them change narration or on-screen text that would otherwise need re-voicing or a rebuild (S-1, S-2, S-4, S-6). The other three are route metadata, the learner-facing YouTube lines and the site itself (S-3, S-5, S-7).

**Counts:** 0 blockers, 7 should fix, 9 notes.

## Findings

### Blockers

None.

### Should fix

**S-1. The last Year 11 video points learners at the wrong first Year 12 video.**
- File: `lessons/math-a11-s11.md`, scene 13 ("the end of Year 11"), the decisions "Handoff" bullet, the route "Next" line and the YouTube "Next" line.
- Problem: the narration says "In the Year 12 Maths Advanced playlist, bars of relative frequencies like these become probability distributions", with chips "Year 12: relative frequencies become probability distributions" and "Year 12: the 0 to 1 curve returns". But the Year 12 playlist opens on math-a12-d01 (derivatives of exponentials; playlist order 1 in `maths-a12-video-route.json`), and Year 12 s01 is order 53. A learner who clicks "next" meets a broth flask and eˣ, not distributions. The hand-over should also name the Year 11 ideas d01 relies on (e02's eˣ as its own derivative, and c10's chain rule).
- Fix (unvoiced, so text only): rewrite scene 13 along these lines. "That's the last core video of Year 11 Maths Advanced. Year 12 starts with calculus, picking up e to the x from the exponentials videos, and the chain rule. Later in Year 12, bars of relative frequencies like these become probability distributions, and this 0 to 1 curve comes back." Replace the chips with "Year 12 starts: derivatives of eˣ (e02, c10)" and "Later in Year 12: relative frequencies become probability distributions". Keep "Next: the Year 12 Maths Advanced playlist". Set the YouTube "Next" line to "math-a12-d01: How does the derivative change when an exponential is scaled or shifted?". Recheck the 570 s cap (s11 is about 514 s). The new scene is about the same length as the old one.

**S-2. c16 and the published Year 12 d09 teach one test with two different pictures.**
- Files: `lessons/math-a11-c16.md` (scene 7 memory aid, key notes) and `lessons/math-a12-d09.md` (published; do not change).
- Problem: Year 11 `ci6341be75` requires "justify conclusions", so c16 rightly classifies a cubic's stationary points from the sign of f′ either side. Its aid is "Plus to minus, a crest. Minus to plus, a hollow. No change in sign, neither." Year 12 d09 then teaches the same first-derivative test as new. It recalls only "f′ > 0 increasing" from Year 11, and its aid is "Turn the signs into arrows, and the arrows sketch the shape. Up then down draws a peak. Down then up draws a valley. Two arrows the same way draw a step, the horizontal point of inflection." A learner who watches both meets one test taught twice with two aids. That is the double teaching the course rules forbid.
- Fix (in c16 only, because d09 is published): make the arrows c16's aid, so that d09 plays as a recall plus its new parts (the name "horizontal point of inflection" and excluded values). For example: "Turn each sign of f prime into an arrow. Up then down draws a crest. Down then up draws a hollow. Two arrows the same way, and it doesn't turn at all." Add the arrows to the slope table (↗ ↘) and to the framed card. Add one key-notes line: "Year 12 names the no-turn case a horizontal point of inflection." Keep "always give both coordinates".

**S-3. The YouTube "Builds on" lines name the previous video, not the real prerequisites, in 15 designs.**
- Files: the "YouTube metadata (draft)" section of `math-a11-c01`, `c10`, `c14`, `c16`, `c17`, `e01`, `e08`, `t01`, `t03`, `t08`, `t10`, `t11`, `t14a`, `t15a` and `s09`.
- Problem: these learner-facing lines send students to the wrong prerequisite. Examples:
  - e01 says "Builds on: Displacement and velocity", but c18 only supplies its opening frame.
  - t01 says "Builds on: Log graphs as reflections".
  - c10 says "Builds on: Given gradient and angle of inclination", but its real prerequisites are w27's composite functions and c07's power rule.
  - s09 says "Builds on: Independent events", but it needs s04 and s06.
  - c16 says "Builds on: Sketching the graph of f′", but it needs c14.
- Fix: write each "Builds on" from that design's own "Entry knowledge" line. For example, e01: "Index laws (w01); domain and range (w09); asymptotes (w21)". t10: "Trig ratios on a circle (t03), related angles (t04), radians (t08), asymptotes (w21), even and odd functions (w26)". Keep the "Next" lines, which all match.

**S-4. g03 shows the wrong source video on screen.**
- File: `lessons/math-a11-g03.md`. The boundary line, the entry-knowledge lines (56 and 73) and scene 5's visual (the grey chip "w15: y = ax², a wider parabola") all cite w15.
- Problem: w15 teaches completing the square for the vertex. It never mentions narrower or wider parabolas (0 matches). The sweep of a through narrow, wide and upside-down curves is in `math-a11-w16.md` (scene 3: "some narrow, some wide, some upside down").
- Fix: change the chip to "w16: y = ax², narrower or wider", and change the entry-knowledge and boundary references from w15 to w16. Keep w15 only for the vertex form.

**S-5. The machine-readable route still shows the pre-split course, and Year 11 has no canonical route file.**
- Files: `programme/maths-a11-course-outline.json` (`videos` and `contentPointOwners` name math-a11-t02, t14 and t15) and `programme/maths-a11-route-inputs-4.json` (the same three ids). There is no `docs/production/maths-a11-video-route.json` to match Year 12's `maths-a12-video-route.json`.
- Problem: the split (t02a/b, t14a/b, t15a/b) exists only in the outline .md table and the designs. Every design carries a "Draft route entry (root to adopt)", but no file has adopted them. A build, release or playlist step that reads JSON would see 90 videos with three wrong ids.
- Fix (root): write `docs/production/maths-a11-video-route.json` in the Year 12 route's schema from the 93 designs' draft route entries (id, playlistOrder, mainLearnerQuestion, syllabusActionIds, entryKnowledge, start, stop, next). Use playlist orders 1 to 93 in the design chain order (w01 to w31, c01 to c18, e01 to e08, t01 to t16 with the a and b parts, g01 to g06, s01 to s11). Update the outline JSON owners to the split ids. Do this before the first Year 11 build.

**S-6. Year 12 d01 assumes eˣ graphs that no Year 11 video draws.**
- Files: `lessons/math-a11-e02.md` (the fix goes here) and `lessons/math-a12-d01.md` (published).
- Problem: d01 draws y = eˣ, y = e⁻ˣ and 3eˣ as "Year 11 curves" (through (0, 1), above y = 0, stretched by k). e01 teaches k aˣ and k a^(−x) for a general base before e exists. e02 introduces e and draws eˣ only. "e⁻ˣ" and "3eˣ" appear in Year 11 only in e01's note about what Year 12 relies on. The idea transfers, but d01 presents these curves as already seen.
- Fix: in e02, after "the gradient always equals the height", add about 10 s with no new teaching. "And everything from e01 still works with e as the base: e to the minus x is the mirror image, and three e to the x crosses the y axis at three." Draw the three curves on one set of axes, with grey chip "e01: k aˣ, k a⁻ˣ". Add the same line to the key notes. Recheck the length (e02 is about 521 s).

**S-7. The site still contains every logged error, and the YouTube descriptions link to those pages.**
- Site files, in the local clone at `5d74a6272`:
  - `algebraic-techniques-and-inequalities/lesson10.sa.html` still says "which they always are in this course" (S11-01).
  - `working-with-functions/lesson09.sa.html` still writes y = mx + b (7 matches).
  - `trigonometric-identities-and-equations/lesson01.sa.html` still writes csc (49 matches).
- Problem: each Year 11 design links its site lesson in the YouTube description. Without the fixes, a student who follows a correct video to its site lesson meets the errors the video avoids, for example the radian formula (S11-11), the cos⁻¹ quadrant trap (S11-12), the transformation order (S11-G03) and the wrong quartiles (S11-P03, S11-P04).
- Fix (owner and site session): confirm the state of live main. If the fixes are not merged, land site-fix task 1 PR 1 and task 2 PR A (`site-fix-maths-a11-task.md` and `-task-2.md`) before the first Year 11 video is released. Add the new item A11-N1 (section 4) to task 2.

### Notes

**N-1. The three optional practice videos have no designs.**
- The outline lists math-a11-p01 to p03 ("optional mixed practice"). No design exists for any of them.
- The site's synthesis pages (`working-with-functions/lesson07`, `lesson08` and `exponential-and-logarithmic-functions/lesson10`) are therefore unused.
- Not a syllabus gap, because practice videos own no points. Root should decide to design them (after the core 93) or drop them from the outline.

**N-2. Five openings describe the previous frame "exactly" but leave the "Next" chip unmentioned.**
- Files: `math-a11-w03.md`, `w04.md`, `w05.md`, `w06.md` and `w24.md` (scene 1 visual).
- The previous handoff frame carries a "Next: …" chip, but these openings do not list it or say when it fades. The other 87 openings do (for example "On the first sentence the 'Next' chip fades").
- Fix: add that clause, so the builder does not have to guess.

**N-3. Old pre-split ids remain in several designs.**
- `math-a11-t11.md`: entry knowledge (lines 50 and 64), boundary (line 30), the double-teaching note and the review note say "t02". They should say t02a.
- `math-a11-t15a.md`: the boundary and entry knowledge say "t02 (inverse ratios on a calculator)". They should say t02a.
- `math-a11-t07.md` line 49 says "t15 reuses…". It should say t15a.
- The "out of scope" lines in `t01.md` and `t04.md` say t14 and t15. They should say t14a and t15a/b.
- These are author text only, with no narration change.

**N-4. Eight designs still have a Revision 1 status line after passing review.**
- Files: `math-a11-w12`, `w13`, `w22`, `w23`, `w26`, `w27`, `w29` and `w30`.
- Each still reads "Revision 1 … Needs the Codex learning review", but each review in `checks/m-a11-wNN-learning-review.md` passed with 0 blockers and 0 should-fix findings.
- Fix: update the status lines so that the parallel board and the voicing order do not hold these designs back.

**N-5. Year 12 f07 uses |r| < 1, which Year 11 does not teach as an inequality.**
- w31 rightly stops at |ax + b| = k (absolute-value inequalities are not in the 2024 Year 11 syllabus).
- w30's "absolute value is how far, not which way" supports reading |r| < 1 as "r is within 1 of zero", and f07 is published.
- No change is needed. If w30's key notes are revised for other reasons, one line ("|x| < 1 means x is within 1 of 0: −1 < x < 1") would help f07.

**N-6. t14b does not quote one of its jointly owned points.**
- `math-a11-t14b.md` does not quote `cif79ffa41`, which it jointly owns with t14a in the outline.
- t14b uses the identities rather than deriving them, so either add the codename to t14b's syllabus line with "(used)" or make t14a the sole owner in the route.

**N-7. The painted phone plate carries the anchor in about 13 designs.**
- The phone (`ma12-phone-v1.png`) carries the anchor in w21, w27/w28, c03/c04, e02, e05, t09/t10, t14b, t16, g02, s07 and s08, and Year 12 uses it heavily too.
- The contexts vary (apps, a game, alarms, a map, a tuner), so this is not a rule breach. But it is the most repeated visual in the course.
- When the plates are commissioned, prefer the scene's own object where one exists (the tuning fork, the bike, the clock), and keep the phone small.

**N-8. Probability cannot yet be released on its own.**
- The outline says probability "can run in parallel at any time", but `math-a11-s01.md` opens on g06's final frame (the delivery-zone circle).
- If root releases s01 to s11 before g06 (for example, to fill the playlist sooner), give s01 a cold-open variant of scene 1 that starts on the water-polo caps. Otherwise keep the strand order.

**N-9. The Year 11 and Year 12 trig-equation aids now agree.**
- t15b ("Do to the domain what the equation does to the angle") and the published Year 12 t02 ("Do to the domain what you do to x") deliberately share the window method, and t15a's review note records this. Year 12 t02 will play as a recall with its new shift case.
- The same pattern holds for c11 and c12 against Year 12 d07 and d08 ("each factor takes a turn"; "low d high minus high d low").
- No action. This is the intended recurring-aid design.

## 1. Course level

**Completeness**
- All 201 Year 11 points (2024 syllabus) are owned, and 200 are quoted by every owner (N-6 is the exception).
- The site's 25 partial and 6 missing points all receive original teaching in their owning design. I read each missing one:
  - w30: √(x²) = |x| by substitution.
  - t11: sec, cosec and cot at 0° and 90° from shrinking triangles.
  - t12: sec = r/x, cosec = r/y, cot = x/y on a circle of radius r.
  - e02: d/dx(aˣ) = k aˣ.
  - g03: enlargement by replacing x and y together.
  - s08: the proof that P(A|B) = P(A) gives P(B|A) = P(B).
- Against the site, 86 of 103 lesson files are a source for a design. The 13 retired pages are not sources. The four other unused pages are Year 12 content or synthesis pages (N-1).
- The designs exclude site content outside 2024 Year 11 Advanced: second derivative, continuous compounding, box plots, inverse functions, y = a sin(bx) + d and the cot graph.

**Sequence**
- The chain is w01 to w31, c01 to c18, e01 to e08, t01 to t16, g01 to g06, then s01 to s11, as the outline recommends.
- Every design's entry knowledge cites only earlier designs or Stage 5. No forward reference was found in any of the 93 entry-knowledge lines.
- The cross-strand dependencies hold:
  - c04 uses w30's corner of |x|.
  - c10 uses w27's composites.
  - c14 uses w18's quadratic sign.
  - e02 uses c04, c05 and c07, which is why exponentials follow differentiation.
  - t03 uses w24's circle.
  - t13 uses e08's reflection in y = x.
  - t16 uses w04's quadratics.
  - g01 and g05 use w15, w21, w31, e01 and e08.
  - g06 uses w15's completing the square.
- c09 uses Year 10 tan for the angle of inclination, before the trig strand. It handles a falling line with "180° minus the acute angle", so it needs nothing from t04.

**Spot checks of "taught in an earlier video" claims**

About 45 claims were spot-checked against the cited designs. All held except g03 (S-4) and a minor citation in c04, which credits "w29 and w30" with the corner of |x| (only w30 has it). The claims that held include:
- w04 completes the square (claimed by w09 and w15).
- w10 says vertical lines have no gradient (claimed by c05).
- w11 says perpendicular gradients multiply to −1 (claimed by c08) and that parallel lines have the same gradient (claimed by c09).
- w17 limits "meets once" to non-vertical lines on a parabola (claimed by c02, in line with the site correction).
- w21 explains dividing by a number near 0 (claimed by t11).
- e08 reflects in y = x (claimed by t13).
- t05 uses degrees and minutes (claimed by t06).
- t14a gives the rearrangements (claimed by t14b and t16).
- s05 covers mutually exclusive events (claimed by s08).
- w01 and w07 establish √ as the non-negative root (claimed by w25 and w30).
- e08 defers translated logs, and g05 picks them up.

**Recurring models, anchors and memory aids**
- Each recurring model is introduced once and carried forward on purpose:
  - the hammock (w14, w15);
  - the pizza (w09, t08, t09);
  - the yacht (t01 handoff, t02a, t02b, t06);
  - the RC car (c01, c02);
  - the trading cards (e01, e08);
  - the clock (t04, t14b, t15a, t15b);
  - the spinner (s10, s11).
- The cross-strand aids are consistent, with no contradictions found:
  - "inside opposite, outside as written" (g01, g03, g04);
  - "flip it and change the sign" (w11 perpendicular, c08 normal);
  - "the discriminant counts" (w05, w14, w17, w31);
  - the "f is how high, f′ is how steep" family (c05, c14, c17).
- Two aids now disagree across years (S-2). The anchors meet the everyday-context rule: money, sport, travel, games, food and home. Science contexts are avoided, and the only near-science one, t10's tuning fork, is a sound context. Phone reuse is high (N-7).

**Double teaching**
- Within Year 11: none beyond the intended shared points (t05 to t07; w22 and w23; t14a and t14b; t15a and t15b; g04 and g05). The discriminant is taught once (w05) and recalled as a chip later.
- Across the year boundary: c16 against Year 12 d09 (S-2). The t15b and Year 12 t02 overlap is intended (N-9).

**Year 11 to Year 12 hand-over**

All 24 Year 11 points that the Year 12 routes assume are owned (see the outline's list). I checked the free-text Year 12 assumptions against the designs:

| Year 12 video assumes | Year 11 home | Status |
|---|---|---|
| d01: eˣ is its own derivative; the chain rule; the multiple rule; exponential graphs; dy/dx and f′ readings | e02, c10, c07, e01, c05 | Present. eˣ variants not drawn (S-6). |
| d02 to d04: e^(ln a) = a; ln = log_e; change of base; log laws; log 1 = 0; ln(1/3) = −ln 3 | e03, e05, e07 | Present. |
| d03: exponential and log graphs reflect in y = x | e08 | Present. |
| d05: radians; exact values at π/6 and π/4; sin, cos and tan graphs in radians; solving cos x = k on [0, 2π] | t08, t10, t15a | Present. |
| d06, d12: tan = sin/cos; cosec = 1/sin; x² − 9 > 0 | t12, t11, w18 | Present. Notation matches: "cosec", "related angle". |
| d07, d08, d13: product and quotient rules and their aids; choosing the rule | c11, c12, c13 | Present, with matching aids. |
| d09, d10, d16: increasing and decreasing; stationary points; cubics | c14, c16 | Present. The aid differs (S-2). |
| d15: first principles; one-sided behaviour; piecewise graphs | c06, c04, w28 | Present. |
| t01: transformations of y = f(x), in the form y = k f(a(x + b)) + c, using "minus inside means later" | g01 to g04 | Present. g01 uses t01's own words, and g04 uses the same general form. |
| t02, t03: solving on [0, 2π]; the calculator in radian mode | t15a, t15b | Present. |
| t04: base-10 logs; the log laws | e03, e05 | Present. |
| i07, i12, i08: the circle x² + y² = r²; odd and even functions; first principles | w24, w26, c06 | Present. |
| f03 to f11: quadratics; index laws; logs; absolute value | w04, w18, w01, e04 to e06, w30 | Present (N-5). |
| s01, s02, s04: listing outcomes; the 6 × 6 dice table; relative frequency as an estimate; the complement rule | s04, s06, s10, s05 | Present, with matching wording ("one trial gives exactly one outcome"). |
| s09: infinity notation in intervals | w09 | Present. |

The one hand-over fault is at the very end, where s11 points to the wrong first Year 12 topic (S-1).

## 2. Topic level

See `maths-a11-coverage-map-2026-11-23.md` for every point and every site lesson by topic, with gaps, repeats and order notes. Summary:

| Topic | Points | Designs | Gaps | Repeats | Order issues |
|---|---|---|---|---|---|
| Working with functions | 71 | w01 to w31 | none | intended only (w22/w23; discriminant recalls) | none; two justified moves (linear inequalities into the toolkit; w19 after the vertex) |
| Trigonometry and measure of angles | 20 | t01 to t10 | none | intended only (t05 to t07; t02a/t02b) | none; radians after any magnitude, following the syllabus rather than the site |
| Trigonometric identities and equations | 13 | t11 to t16 | none | intended only (t14a/b, t15a/b) | none |
| Introduction to differentiation | 40 | c01 to c18 | none | none within Year 11; d09 overlap (S-2) | none |
| Exponential and logarithmic functions | 17 | e01 to e08 | none (S-6 is a Year 12 convenience) | none | none |
| Graph transformations | 10 | g01 to g06 | none | intended only (g04/g05) | none; one wrong cross-reference (S-4) |
| Probability and data | 30 | s01 to s11 | none | none | none; sets come first, as the syllabus orders them (the site puts them last) |

## 3. Lesson level

**Entry knowledge**
- All 93 designs state route and short-form entry knowledge, a start and stop boundary and a next handoff.
- Every cited earlier design exists and comes earlier in the chain.
- Errors found: g03 cites w15 for content that is in w16 (S-4); old t02, t14 and t15 ids remain (N-3); c04 credits w29 with the corner, which is minor.

**Handoffs (checked mechanically for every pair)**

For each consecutive pair, the script took the "Next: …" chip from the handoff scene of design A. It then read scene 1 of design B and checked three things:
1. B says it opens on A's final frame, naming A.
2. The frame B describes matches A's handoff visual.
3. Any "Next" chip B restates is identical to A's.

Result: 92 of 92 joins pass, with the right previous id named every time. Five openings do not restate the chip (N-2). The last video, s11, hands to the Year 12 playlist (S-1). The full table is the appendix.

**Strand bridges**
- The five strand changes each bridge with an idea rather than a shared topic:
  - w31 to c01: the V's rise over run becomes the average rate.
  - c18 to e01: a table of y = 2ˣ.
  - e08 to t01: an exact log against a calculator decimal, then exact trig values.
  - t16 to g01: a parabola shifted by replacing x.
  - g06 to s01: a circle as "a collection of points".
- Each one is honest, because no narration claims the topics are the same. Listen to these five at the voiced preview to confirm they do not feel forced.

## 4. Site fit

**Departures where the design is right.** I found no case where the site is right and the design wrong. The designs depart from the site for these reasons:

| Area | Site | Design | Who is right |
|---|---|---|---|
| Line form | y = mx + b | y = mx + c | Design (syllabus `ci7f902bc1`) |
| Reciprocal ratio name | csc | cosec | Design (syllabus wording throughout) |
| Trig definitions | unit circle only | circle of radius r | Design (`ci95d785c0`; Year 12 assumes r) |
| Sets and probability order | sets lessons 11 to 13 after probability 01 to 04 | sets first (s01 to s03) | Design (syllabus order; P(A) = \|A\|/\|S\| needs sets) |
| Set notation | ξ, n(A), A′ | U, \|A\| or n(A), A̅, A′, Aᶜ | Design (syllabus) |
| Dilations | y = af(x), y = f(bx) only | replacing x by x/k and y by y/l, linked to "coefficient 1/k inside" | Design (`cide27d1f1`; Year 12 t01 needs the link) |
| Variation | y = kx, y = k/x | y = kxⁿ, y = k/xⁿ | Design (`ci388144c4`, `cie81af7cc`) |
| Stationary points | second-derivative test (lesson08) | first-derivative signs; f″ left to Year 12 | Design (Year 11 scope) |
| Out-of-scope pages | second derivative, continuous compounding, box plots, inverse functions | excluded | Design |
| Copy errors S11-01 to S11-18, S11-G01 to G06, S11-P01 to P07, section 6 items | as logged | avoided, with corrected numbers | Design |

**Site errors for the corrections file**

The existing file is thorough: every site error the designs cite has a code there. One more error was found during this audit:

- **A11-N1 (new).** `graph-transformations/lesson05.sa.html`, key-term card "Asymptote".
  - Old text: "A line the graph gets closer and closer to but never touches. Like this: $y = \tfrac{1}{x} + 2$ approaches the line $y = 2$ as $x$ gets large."
  - Correction: "A line that the graph gets closer and closer to as $x$ or $y$ grows without bound. A graph can still cross a horizontal asymptote somewhere else, so 'never touches' is not part of the meaning. Like this: $y = \tfrac{1}{x} + 2$ approaches the line $y = 2$ as $x$ gets large."
  - Reason: as a general definition, "never touches" is false. For example, y = 2 + x/(x² + 1) crosses its horizontal asymptote y = 2 at x = 0. It is the same error as the logged exponentials lesson02 item ("never crosses"). g05 relies on asymptotes, so the site page should match the video.

For root to add to `site-corrections-maths-a11.md` (this audit did not edit it).

**State of the site fixes.** None of the logged fixes is present in the local clone (S-7). The clone may be behind live main, so confirm there before deciding.

## Top ten fixes, in order

1. S-1: rewrite s11 scene 13 to hand over to Year 12 d01 (unvoiced, text only).
2. S-2: give c16 d09's arrow aid and a key-notes line on the Year 12 name.
3. S-6: add the eˣ, e⁻ˣ and 3eˣ beat to e02.
4. S-4: change g03's on-screen "w15" chip and references to w16.
5. S-5: write `maths-a11-video-route.json` with the split ids, and update the outline JSON owners.
6. S-7: confirm and land the site fixes (task 1 PR 1, task 2 PR A, plus A11-N1) before the first Year 11 release.
7. S-3: rewrite the 15 YouTube "Builds on" lines from each design's entry knowledge.
8. N-4: update the eight stale status lines (w12, w13, w22, w23, w26, w27, w29, w30).
9. N-2 and N-3: add the chip-fade clause to five openings, and rename the old t02, t14 and t15 ids.
10. N-1 and N-6: decide on the optional practice videos p01 to p03, and settle the ownership of `cif79ffa41`.

## Appendix: handoff check, every join

| # | From | To | "Next" chip on the handoff frame | Next design opens on that frame | Chip shown in the next opening |
|---|---|---|---|---|---|
| 1 | w01 | w02 | Next: why must we factorise before we cancel? | yes (w01's frame) | same chip |
| 2 | w02 | w03 | Next: how does a conjugate clear a surd? | yes (w02's frame) | not restated (N-2) |
| 3 | w03 | w04 | Next: which method solves a quadratic? | yes (w03's frame) | not restated (N-2) |
| 4 | w04 | w05 | Next: what does b² − 4ac tell you? | yes (w04's frame) | not restated (N-2) |
| 5 | w05 | w06 | Next: why does dividing by a negative flip the inequality sign? | yes (w05's frame) | not restated (N-2) |
| 6 | w06 | w07 | Next: what makes a relation a function? | yes (w06's frame) | same chip |
| 7 | w07 | w08 | Next: f(x), the value of f at x | yes (w07's frame) | same chip |
| 8 | w08 | w09 | Next: which inputs can a function take? | yes (w08's frame) | same chip |
| 9 | w09 | w10 | Next: two points fix a line | yes (w09's frame) | same chip |
| 10 | w10 | w11 | Next: where does it cross, and what crosses it at right angles? | yes (w10's frame) | same chip |
| 11 | w11 | w12 | Next: build the line from the words | yes (w11's frame) | same chip |
| 12 | w12 | w13 | Next: two models, one meeting point | yes (w12's frame) | same chip |
| 13 | w13 | w14 | Next: where is a function zero? | yes (w13's frame) | same chip |
| 14 | w14 | w15 | Next: the lowest point and the line of symmetry | yes (w14's frame) | same chip |
| 15 | w15 | w16 | Next: build a parabola from its features, then work back to its equation | yes (w15's frame) | same chip |
| 16 | w16 | w17 | Next: where two graphs meet | yes (w16's frame) | same chip |
| 17 | w17 | w18 | Next: quadratic inequalities | yes (w17's frame) | same chip |
| 18 | w18 | w19 | Next: quadratic models and best values | yes (w18's frame) | same chip |
| 19 | w19 | w20 | Next: how a cubic's factors shape its graph | yes (w19's frame) | same chip |
| 20 | w20 | w21 | Next: y = k/x | yes (w20's frame) | same chip |
| 21 | w21 | w22 | Next: direct variation, y = kxⁿ | yes (w21's frame) | same chip |
| 22 | w22 | w23 | Next: inverse variation, y = k/xⁿ | yes (w22's frame) | same chip |
| 23 | w23 | w24 | Next: which points are exactly 10 cm from the centre? | yes (w23's frame) | not restated (N-2) |
| 24 | w24 | w25 | Next: an equation for half a circle | yes (w24's frame) | same chip |
| 25 | w25 | w26 | Next: mirror or half-turn? | yes (w25's frame) | same chip |
| 26 | w26 | w27 | Next: one function's output becomes another's input | yes (w26's frame) | same chip |
| 27 | w27 | w28 | Next: a function defined in pieces | yes (w27's frame) | same chip |
| 28 | w28 | w29 | Next: can you draw it without lifting your pen? | yes (w28's frame) | same chip |
| 29 | w29 | w30 | Next: a distance that ignores direction | yes (w29's frame) | same chip |
| 30 | w30 | w31 | Next: which guesses are exactly 20 off? | yes (w30's frame) | same chip |
| 31 | w31 | c01 | Next: how fast does a graph change? Average rate of change | yes (w31's frame) | same chip |
| 32 | c01 | c02 | Next: speed at one instant | yes (c01's frame) | same chip |
| 33 | c02 | c03 | Next: rates of other things | yes (c02's frame) | same chip |
| 34 | c03 | c04 | Next: the gradient of a curve, exactly | yes (c03's frame) | same chip |
| 35 | c04 | c05 | Next: a gradient for every x | yes (c04's frame) | same chip |
| 36 | c05 | c06 | Next: from secant to derivative, exactly | yes (c05's frame) | same chip |
| 37 | c06 | c07 | Next: a rule for every power | yes (c06's frame) | same chip |
| 38 | c07 | c08 | Next: the tangent's equation | yes (c07's frame) | same chip |
| 39 | c08 | c09 | Next: gradient given, find the point and the angle | yes (c08's frame) | same chip |
| 40 | c09 | c10 | Next: a function inside a function | yes (c09's frame) | same chip |
| 41 | c10 | c11 | Next: two functions multiplied | yes (c10's frame) | same chip |
| 42 | c11 | c12 | Next: one function divided by another | yes (c11's frame) | same chip |
| 43 | c12 | c13 | Next: which rule first? | yes (c12's frame) | same chip |
| 44 | c13 | c14 | Next: the sign of f′ | yes (c13's frame) | same chip |
| 45 | c14 | c15 | Next: sketch y = f′(x) | yes (c14's frame) | same chip |
| 46 | c15 | c16 | Next: stationary points of a cubic | yes (c15's frame) | same chip |
| 47 | c16 | c17 | Next: what f′(c) means | yes (c16's frame) | same chip |
| 48 | c17 | c18 | Next: displacement and velocity | yes (c17's frame) | same chip |
| 49 | c18 | e01 | Next: exponential graphs | yes (c18's frame) | same chip |
| 50 | e01 | e02 | Next: the gradient at (0, 1) | yes (e01's frame) | same chip |
| 51 | e02 | e03 | Next: running 2ˣ backwards | yes (e02's frame) | same chip |
| 52 | e03 | e04 | Next: solving aˣ = b | yes (e03's frame) | same chip |
| 53 | e04 | e05 | Next: the log laws | yes (e04's frame) | same chip |
| 54 | e05 | e06 | Next: solving with the log laws | yes (e05's frame) | same chip |
| 55 | e06 | e07 | Next: changing the base | yes (e06's frame) | same chip |
| 56 | e07 | e08 | Next: the graph of a log | yes (e07's frame) | same chip |
| 57 | e08 | t01 | Next: exact trig values | yes (e08's frame) | same chip |
| 58 | t01 | t02a | Next: right-triangle problems | yes (t01's frame) | same chip |
| 59 | t02a | t02b | Next: bearings | yes (t02a's frame) | same chip |
| 60 | t02b | t03 | Next: any angle | yes (t02b's frame) | same chip |
| 61 | t03 | t04 | Next: every quadrant | yes (t03's frame) | same chip |
| 62 | t04 | t05 | Next: the sine rule | yes (t04's frame) | same chip |
| 63 | t05 | t06 | Next: the cosine rule | yes (t05's frame) | same chip |
| 64 | t06 | t07 | Next: two triangles? | yes (t06's frame) | same chip |
| 65 | t07 | t08 | Next: radians | yes (t07's frame) | same chip |
| 66 | t08 | t09 | Next: arc length and sector area | yes (t08's frame) | same chip |
| 67 | t09 | t10 | Next: the graphs of sin, cos and tan | yes (t09's frame) | same chip |
| 68 | t10 | t11 | Next: secant, cosecant and cotangent | yes (t10's frame) | same chip |
| 69 | t11 | t12 | Next: any angle | yes (t11's frame) | same chip |
| 70 | t12 | t13 | Next: complementary angles | yes (t12's frame) | same chip |
| 71 | t13 | t14a | Next: the Pythagorean identities | yes (t13's frame) | same chip |
| 72 | t14a | t14b | Next: proving identities | yes (t14a's frame) | same chip |
| 73 | t14b | t15a | Next: solving trig equations | yes (t14b's frame) | same chip |
| 74 | t15a | t15b | Next: multiple angles | yes (t15a's frame) | same chip |
| 75 | t15b | t16 | Next: equations that reduce to quadratics | yes (t15b's frame) | same chip |
| 76 | t16 | g01 | Next: graph transformations | yes (t16's frame) | same chip |
| 77 | g01 | g02 | Next: reflections | yes (g01's frame) | same chip |
| 78 | g02 | g03 | Next: stretching a graph | yes (g02's frame) | same chip |
| 79 | g03 | g04 | Next: does the order matter? | yes (g03's frame) | same chip |
| 80 | g04 | g05 | Next: tracking features | yes (g04's frame) | same chip |
| 81 | g05 | g06 | Next: circles off the origin | yes (g05's frame) | same chip |
| 82 | g06 | s01 | Next: sets and set notation | yes (g06's frame) | same chip |
| 83 | s01 | s02 | Next: sets that overlap | yes (s01's frame) | same chip |
| 84 | s02 | s03 | Next: counting a union | yes (s02's frame) | same chip |
| 85 | s03 | s04 | Next: sample spaces and probability | yes (s03's frame) | same chip |
| 86 | s04 | s05 | Next: rules for probabilities | yes (s04's frame) | same chip |
| 87 | s05 | s06 | Next: arrays and tree diagrams | yes (s05's frame) | same chip |
| 88 | s06 | s07 | Next: conditional probability | yes (s06's frame) | same chip |
| 89 | s07 | s08 | Next: independent events | yes (s07's frame) | same chip |
| 90 | s08 | s09 | Next: random variables | yes (s08's frame) | same chip |
| 91 | s09 | s10 | Next: frequency tables | yes (s09's frame) | same chip |
| 92 | s10 | s11 | Next: histograms and polygons | yes (s10's frame) | same chip |
| 93 | s11 | Year 12 playlist | Next: the Year 12 Maths Advanced playlist | n/a (d01 cold-opens) | n/a |
