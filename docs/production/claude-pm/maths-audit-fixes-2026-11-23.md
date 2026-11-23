# Maths audit fixes: unvoiced designs (23 November 2026)

Text-level fixes from two audits, applied by a design-fix agent on 23 and 24 November 2026. Nothing was voiced, built, rendered or committed. No `math-s11-*` file and no Year 11 Standard status, route-input, site-corrections-additions or kit-needs file was touched. No em dash was written; every changed file was checked for U+2014.

Sources:
- A: `checks/maths-a11-coherence-audit-2026-11-23.md` (Year 11 Maths Advanced).
- B: `checks/maths-standard-coherence-audit-2026-11-23.md` (Year 12 Maths Standard), plus two root notes received during the work (the t09 hectare source, and Year 11 a-strand titles in "Builds on" lines).

Line numbers are in the edited files as they now stand. Narration counts use the build parser rules (lines starting "> " inside each `### N.` or `### Na.` scene, joined with a space, `**` removed), the method that reproduces each design's stated Revision 2 count.

## A. Year 11 Maths Advanced

### S-1. s11 hands over to Year 12 d01
`lessons/math-a11-s11.md`
- Line 133: scene 13 narration rewritten. It now says Year 12 starts with calculus, picking up e to the x and the chain rule, and that later in Year 12 relative frequencies become probability distributions and "this zero to one curve comes back".
- Line 135: the chips are now "Year 12 starts: derivatives of eˣ (e02, c10)" and "Later in Year 12: relative frequencies become probability distributions". The "Next: the Year 12 Maths Advanced playlist" chip is kept. The amber polygon pulses on "this zero to one curve".
- Line 34 (decision), line 54 (Handoff decision), line 66 (short-form Handoff) and line 259 (Codex check item 5): updated to match.
- Line 269 (YouTube description) and line 276: "Next: the Year 12 Maths Advanced playlist, starting with Differentiating k e^(ax+b): Squash, Slide or Stretch e^x." (d01's published title.)
- Lines 5 and 196: recount 5,715 characters (was 5,684); scene 13 is 374 characters; about 516 s; speech before the notes about 424 s, under the 570 s cap.

### S-2. c16 adopts d09's arrow aid
`lessons/math-a11-c16.md` (Year 12 d09 is published and was not changed)
- Line 97: scene 6 narration: "Turn each sign of f prime into an arrow. Up then down draws a crest. Down then up draws a hollow. Two arrows the same way, and it doesn't turn at all, so it's neither."
- Line 99: the card's sign strips turn into teal ↗ and amber ↘ arrows. Main line: "Turn each sign of f′ into an arrow. Up then down: a crest. Down then up: a hollow. Same way twice: no turn."
- All slope-table glyphs ╱ and ╲ are now ↗ and ↘ (lines 33, 40, 79, 89, 94, 99, 119, 233).
- Lines 132 to 137: key note 3 carries the arrows, and a sixth key note reads "Year 12 names the no-turn case a horizontal point of inflection." The notes card shows the new aid.
- Line 39 (Memory aid decision, with the d09 source and the reason), lines 145, 148 and 149 (teaching checks), and lines 186 and 187 (memory aid check and "considered").
- Lines 5 and 191: recount 5,640 characters (was 5,549); scene 6 is 256 characters; about 512 s.

### S-3. Fifteen "Builds on" lines rewritten from entry knowledge
The "Next" halves are unchanged.

| File | Line |
|---|---|
| c01 | 283 |
| c10 | 284 |
| c14 | 277 |
| c16 | 268 |
| c17 | 273 |
| e01 | 281 |
| e08 | 264 |
| t01 | 290 |
| t03 | 276 |
| t08 | 295 |
| t10 | 289 |
| t11 | 276 |
| t14a | 282 |
| t15a | 270 |
| s09 | 268 |

Example (e01): "Builds on: Index laws (w01); domain and range (w09); asymptotes (w21)."

### S-4. g03 credits w16
`lessons/math-a11-g03.md`
- Line 109: the chip now reads "w16: y = ax², narrower or wider".
- Line 34 (boundary; w15 kept only for the vertex form), line 56 (entry knowledge, with a correction note), line 73, line 162 and line 300.

### S-5. The Year 11 route
- New file: `docs/production/maths-a11-video-route.json`, in the Year 12 route's schema.
  - It has 93 videos, playlist order 1 to 93 in the design chain, with the split ids t02a/b, t14a/b and t15a/b.
  - Fields come from each design: the question from its heading, the points it quotes, "Entry knowledge (route)", its Boundary, "Stops after" and "Handoff".
  - `sourceLesson`, `preDesignPack` and the official point text come from the route inputs (the parent id for split videos).
  - It also adds `youtubeTitle`, `designPath` and `splitFrom`, an `openQuestions` list (root decision 10), and the s11 hand-over to d01.
  - The generator script is in the agent scratchpad (`route.py`), so the file can be regenerated.
- `programme/maths-a11-course-outline.json`:
  - The videos now carry the split ids and their own questions. Orders are renumbered 1 to 93, with p01 to p03 at 94 to 96.
  - `contentPointOwners`, `year12Dependencies[].year11Owner` and `sharedOwnership` use the split ids.
  - Totals are now 93 content videos (Trigonometry 19). A `splitNote` field explains the change.
- `programme/maths-a11-course-outline.md`:
  - Lines 69, 70 and 82 to 85: the split rows carry each design's question.
  - Line 122: a note naming the canonical route file and the open `cif79ffa41` ownership question.
- `programme/maths-a11-route-inputs-4.json` was left unchanged. It is a research input, and the outline already records that it keeps the original single entries.

### S-6. e02 draws eˣ, e⁻ˣ and 3eˣ together
`lessons/math-a11-e02.md`
- Line 107: scene 7 gains, after "the gradient always equals the height": "And everything from e01 still works with e as the base. e to the minus x is the mirror image in the y axis, and three e to the x crosses the y axis at three."
- Line 109: the card shrinks and one set of axes draws all three curves, with the grey chip "e01: k aˣ, k a⁻ˣ". There is no new teaching.
- Line 145: a sixth key note: "e01's graphs still work: y = e⁻ˣ is eˣ mirrored in the y axis; y = 3eˣ crosses at (0, 3)."
- Lines 54, 155 and 158 were updated.
- Lines 5 and 203: recount 5,923 characters (was 5,765); scene 7 is 348 characters; about 534 s; speech before the notes about 440 s, under the 570 s cap.

### S-7. Site
`site-corrections-maths-a11.md`, new section 9 (from line 289): A11-N1, the `graph-transformations/lesson05.sa.html` asymptote key term ("never touches"), with the audit's correction and reason. The site itself was not touched. Confirming live main and landing the PRs stays with the owner and the site session.

### N-2. Chip fades in five openings
The scene 1 visual now says when the previous "Next" chip fades:

| File | Line |
|---|---|
| w03 | 79 |
| w04 | 76 |
| w05 | 75 |
| w06 | 76 |
| w24 | 76 |

In w24, the "?" chip fades as well, and the red-pencil "?" on the line stays.

### N-3. Old split ids
- t11: lines 30, 50, 64, 80, 153 and 289 (t02 to t02a).
- t15a: lines 30, 52, 66 and 285 (t02 to t02a). Year 12 t02 and the historical "split from the outline's t15" lines were kept.
- t07: lines 27 and 153 (t15 to t15a, t15b) and line 49 (t15 to t15a).
- t01: line 31 (t14 to t14a) and line 161 (t14 to t14a, t14b).
- t04: lines 29 and 155 (t14 to t14a; t15 to t15a, t15b) and line 44 (t14 to t14a).
- c04: lines 51 and 65. The corner of |x| is credited to w30 only (the audit's minor citation note).

### N-4. Eight status lines
Line 3 of w12, w13, w22, w23, w26, w27, w29 and w30 now reads "learning review resolved". Each cites its passed learning review and maths check, and gives the next step as voicing and a build to grade A. This also clears the maths checks' "Voice hold" note on the Status gate.

While doing this, I found unresolved maths-check items in three of these designs and applied them, because they are text-level and the status would otherwise be wrong:
- **w22** (lines 5 and 196): count corrected to 5,652 characters (scene 10 is 353).
- **w27** (line 78): when the scene 4 chain swaps, f stays violet and g stays amber. Lines 5 and 191: count corrected to 5,654 characters.
- **w29** (line 79): the y = 1/x pen trace now runs down the left branch, lifts, and restarts at the top of the right branch.

w26's one optional review item stays a watch item for the voiced preview.

### Notes not acted on
- N-5: no change needed.
- N-7: phone plate reuse is a plate-commissioning note.
- N-8: applies only if root releases s01 to s11 early.
- N-9: no action needed.
- N-1 and N-6 are left open (root decision 10).

## B. Year 12 Maths Standard

### S1. r10 recalls km/h to m/s
`lessons/math-s12-r10.md`
- Lines 95 and 97: scene 3 rewritten.
  - The general method (change the top unit, then the bottom unit) is now taught on a non-speed rate. A garden pond drops 2.1 cm a week; that is 21 mm a week, 21 mm in 7 days, so 3 mm a day. The crossed slip is "21 mm per day".
  - km/h to m/s is then a Year 11 recall: grey chip "Year 11: km/h ÷ 3.6 = m/s", with one sentence giving the reason (× 1000 on top, ÷ 3600 underneath).
  - The bowler's 144 km/h = 40 m/s and the half-second pitch run are kept.
  - The plate `ma11-garden-pond-v1.png` already exists. I viewed it (a top view), so the level drop is a coded side-on gauge.
- Line 1 (heading), line 37 (boundary), line 42 (decision), line 54 (hand tags), line 59, lines 62 and 63 (cause chain; entry knowledge now f04a), line 68, line 76, line 117 (memory card left slot), line 160, lines 183 and 184 (numbers used), line 197 (numbers to verify), line 207 (memory aid check), line 230, line 245 (assets) and line 286 (description).
- Line 303: open decision 1's reaction-distance reference is now f04b.
- Lines 5, 212 and 216: recount 5,461 characters (was 5,476); scene 3 is 989 characters; about 504 s. The reserve trim was updated.

### S2. a12 treats "asymptote" as new
`lessons/math-s12-a12.md`
- Line 37 (boundary), line 54 (plain meaning: "new here"), lines 58 and 73 (a05 and asymptotes removed from entry knowledge) and line 162.
- Line 99: the grey chip "a05: an asymptote" is replaced by the hand tag "asymptote: the curve gets closer and closer to it".
- The narration is unchanged. Scene 4 already defines the term in context.

### S3. Settled "provisional" markers
- **r13**: lines 17, 21, 23, 48, 65, 80, 149, 163, 173, 303 and 308. The roof label is settled by ruling 56, and every handoff id is now `math-s12-t01a`.
- **r14**: lines 3, 17, 21, 47, 54, 63, 76, 140, 154, 164, 232, 294 and 298. The handoff is now t01a. Open decision 3 is closed, and the spoken "thirty-five degrees" stands.
- **t05**: lines 15, 43, 236 and 291. b01 is designed and opens on this picture (ruling 64).
- **t11**: lines 3, 55, 67, 131, 253 and 277.
- **i23**: line 279 (r01 is designed and opens on the jug).
- **i11**: line 305 (the i12 title is confirmed).

### S4. YouTube "Next" and "Builds on" lines

| File | Line | Change |
|---|---|---|
| r06b | 282 | Next (Standard 1): Ratios vs Rates and Unit Rates |
| r07 | 298 | Next: Rainfall Volume: V = Ah on Roofs, Tanks and Land |
| t11 | 271 | Next: Bivariate Data: One Variable or Two? |
| i18 | 286 | Next (Standard 1): Ratios, Fractions and Simplest Form |
| i23 | 272 | Next: Ratios, Fractions and Simplest Form |
| r13 | 296 | Next (Standard 1): Sine, Cosine and Tangent: Finding a Missing Side |
| r14 | 286 | Next: Sine, Cosine and Tangent: Finding a Missing Side |
| z06 | 284 | Next: Precedence Tables and Network Diagrams |
| a08 | 271 | Next: Simple Interest: I = Prn and Its Graph (Standard 1); Parabolas: The Vertex and Axis of Symmetry (Standard 2) |
| i01 | 304 | Builds on: the real titles of a13 (Standard 2) and a08 (Standard 1) |
| r09 | 286 | Adds "Previous:" naming r08 (Standard 2) and r06b (Standard 1) |
| r04 | 288 | Adds "Previous:" naming r03 (Standard 2) and r02 (Standard 1) |

### S5. One title suffix
All 26 titles that ended "| Year 12 Maths Standard 2" or "| Year 12 Maths Standard 1" now end "| Year 12 Maths Standard". Each title-length note was updated (2 characters shorter, all under 80). The files are a08, a09, a10, a11a, a11b, a12, a13, c01a to c06, f01 to f04, r08, r14 and z01 to z06, with the Title line and the length note about 2 lines below it (see the line table at the end). f04 line 288: open decision 3 is closed (77 characters).

### S7. f03 and f04 ids
- **f03a**: a02a (lines 54, 66), a13 (lines 36, 58, 72), t01a (lines 61, 76) and t06 (lines 34, 57, 69).
- **f03b**: a09 (lines 33, 54, 68).
- **f04a**: r04 (lines 61, 72), r12a (lines 34, 59, 72) and r10 (see S1).

### Header strips: topic only
In all 103 Year 12 Standard designs, the header strip is now the topic only, for example "ALGEBRAIC RELATIONSHIPS". Each design's main colour-roles line notes the ruling.

The strand-end frames that showed only "MATHEMATICS STANDARD" now have no header strip:
- z06 (line 136; also line 76)
- c06 (lines 54, 70 and 130)
- f04 (lines 55, 72 and 132)

The matching openings were changed to match:
- c01a: line 29, and line 75, where the header strip writes "CRITICAL PATH ANALYSIS".
- f01: line 30, and line 77, where it writes "NETWORK FLOW".

i19 line 44 now reads "changes to "ANNUITIES"".

### Root notes received during the work
- **t09 hectare source.** Line 34: the hectare is now credited to Year 11 a02, not a03. Lines 57 and 70 add a02 to the entry knowledge. Year 11 a05 is now split, so the area recall is a05a (t09 lines 34, 57 and 70; r06a lines 62 and 73; r06b lines 59 and 71).
- **Year 11 a-strand titles in "Builds on" lines.**
  - r01 line 293: "Units of Measurement: Length, Mass and Capacity (Year 11)".
  - r07 line 298: "The Trapezoidal Rule: Estimating Area and Volume (Year 11)".
  - No other Year 12 "Builds on" line names a Year 11 measurement topic.

### Skipped, with reasons
- **S6** (e09 to e12 PAYG joins): this waits for brief 256, as instructed.
- **S8** (f01 to f07 "Next" chips): these are math-s11 files, which this task may not edit.
- **The S4 sweep of the Year 11 f-strand short forms** (f03a, f03b, f04a, f04b, f07, f08, e08): also math-s11 files, so not edited.
- **B1, B2 and S9**: planning work for root, not text fixes.

## Open questions for root
1. Root decision 10 (left open as instructed): design the optional practice videos p01 to p03 or drop them; and settle `cif79ffa41` (t14b uses it but does not quote it; the outline and the route keep t14a and t14b as joint owners).
2. Two-route frames in Year 12 Standard still carry on-screen panel labels such as "Standard 1 next: right-angled triangles" (r13, i18, t05 and others). The ruling I applied covered header strips only. Root should say whether these route labels are also course labels to remove from the screen.
3. a12's plain meaning "a line the curve gets closer and closer to but never reaches" is true for y = k/x. It is the same general wording that site item A11-N1 corrects. Root could consider "as x or y grows without bound" for consistency.
4. Four narrations changed (s11, c16, e02, r10), and w22 and w27 counts were corrected. None of these is voiced. The independent reviews predate these changes, so the next maths check or error check should cover them.

## Changed lines by file (from a diff against the pre-edit copies)

| File | Lines |
|---|---|
| math-a11-c01 | 283 |
| math-a11-c04 | 51, 65 |
| math-a11-c10 | 284 |
| math-a11-c14 | 277 |
| math-a11-c16 | 5, 33, 39-40, 79, 89, 94, 97, 99, 119, 132, 135, 137, 145, 148-149, 186-187, 191, 233, 268 |
| math-a11-c17 | 273 |
| math-a11-e01 | 281 |
| math-a11-e02 | 5, 54, 107, 109, 145, 155, 158, 203 |
| math-a11-e08 | 264 |
| math-a11-g03 | 34, 56, 73, 109, 162, 300 |
| math-a11-s09 | 268 |
| math-a11-s11 | 5, 34, 54, 66, 133, 135, 196, 259, 269, 276 |
| math-a11-t01 | 31, 161, 290 |
| math-a11-t03 | 276 |
| math-a11-t04 | 29, 44, 155 |
| math-a11-t07 | 27, 49, 153 |
| math-a11-t08 | 295 |
| math-a11-t10 | 289 |
| math-a11-t11 | 30, 50, 64, 80, 153, 276, 289 |
| math-a11-t14a | 282 |
| math-a11-t15a | 30, 52, 66, 270, 285 |
| math-a11-w03 | 79 |
| math-a11-w04 | 76 |
| math-a11-w05 | 75 |
| math-a11-w06 | 76 |
| math-a11-w12, w13, w23, w26, w30 | 3 |
| math-a11-w22 | 3, 5, 196 |
| math-a11-w24 | 76 |
| math-a11-w27 | 3, 5, 78, 191 |
| math-a11-w29 | 3, 79 |
| math-s12-a08 | 71, 258, 260, 271 |
| math-s12-a09 | 33, 54, 68, 74, 267, 269 |
| math-s12-a10 | 74, 259, 261 |
| math-s12-a11a | 75, 251, 253 |
| math-s12-a11b | 73, 260, 262 |
| math-s12-a12 | 37, 54, 58, 73, 79, 99, 162, 266, 268 |
| math-s12-a13 | 36, 58, 72, 78, 265, 267 |
| math-s12-a02a | 54, 66, 72 |
| math-s12-c01a | 29, 70, 75, 258, 260 |
| math-s12-c01b | 71, 260, 262 |
| math-s12-c02 | 69, 262, 264 |
| math-s12-c03 | 75, 270, 272 |
| math-s12-c04 | 71, 264, 266 |
| math-s12-c05 | 69, 262, 264 |
| math-s12-c06 | 54, 70, 130, 261, 263 |
| math-s12-f01 | 30, 55, 72, 77, 274, 276 |
| math-s12-f02 | 72, 273, 275 |
| math-s12-f03 | 69, 268, 270 |
| math-s12-f04 | 55, 72, 132, 266, 268, 288 |
| math-s12-i01 | 84, 304 |
| math-s12-i11 | 87, 305 |
| math-s12-i18 | 77, 286 |
| math-s12-i19 | 44, 70 |
| math-s12-i23 | 73, 272, 279 |
| math-s12-p01 | 38, 82, 87 (header strip only) |
| math-s12-r01 | 82, 293 |
| math-s12-r04 | 61, 72, 78, 288 |
| math-s12-r06a | 62, 73, 79 |
| math-s12-r06b | 59, 71, 77, 282 |
| math-s12-r07 | 77, 298 |
| math-s12-r08 | 75, 256, 258 |
| math-s12-r09 | 79, 286 |
| math-s12-r10 | 1, 5, 37, 42, 54, 59, 62-63, 68, 76, 82, 95, 97, 117, 160, 183-184, 197, 207, 212, 216, 230, 245, 286, 303 |
| math-s12-r12a | 34, 59, 72, 78 |
| math-s12-r13 | 17, 21, 23, 48, 65, 80, 84, 149, 163, 173, 296, 303, 308 |
| math-s12-r14 | 3, 17, 21, 47, 54, 63, 76, 80, 140, 154, 164, 232, 272, 274, 286, 294, 298 |
| math-s12-t01a | 61, 76, 82 |
| math-s12-t05 | 15, 43, 76, 236, 291 |
| math-s12-t06 | 34, 57, 69, 75, 80 |
| math-s12-t09 | 34, 57, 70, 76 |
| math-s12-t11 | 3, 55, 67, 71, 131, 253, 271, 277 |
| math-s12-z01 to z05 | the header line (about 71 to 77), the Title line and the length note |
| math-s12-z06 | 76, 136, 270, 272, 284 |
| Every other math-s12 design | one line each (the header strip line, about 69 to 87) |
