# Maths S12 F02: How does the saturated edges method find the most a network can carry? Flow over capacity on every edge, a path's bottleneck, sending flow path by path until every path has a saturated edge, the balance at each point, the order trap, and a cut that proves the answer (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), f01's final frame (`math-s12-f01.md` scene 13) and root's Standard rulings (1 to 76; ruling 74: the saturated-edges path-order warning is taught correctly, MS-54). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,282 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 512 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-f02-learning-review.md` (summary `../checks/m-s12-c01-f04-learning-review-summary.md`), with root's rulings 1 to 81 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-c01-f04-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 (why the order mattered is never said): **accepted**, adapted in one detail. After "and no cut equals twelve": "The first path sent A's flow the long way, through the link to B, and it used five of B to T's nine, which B's own flow needed." The reviewer's "filled B to T" is changed because the first path alone uses 5 of B→T's 9; B→T fills only when S-B-T's 4 arrive (checked). After "it matches the cut": "So a good habit is to send flow along the direct paths first, the ones that skip the link, and use the link for what's left. Then check with a cut." The plain meaning of "direct paths" is added. Visual, as the reviewer described: on the left, B→T pulses amber with its first 5 marked, and S→B's unused 2 glows (hand tag "B's own flow is stuck"). On the right, S-A-T and S-B-T glow in turn, then A→B (hand tag "direct paths first, link last"). The habit matches every path order the video uses: scenes 2 to 4, scene 7 and A2 all send the link path last and reach the maximum (checked). Cause chain item 6 updated.
2. Optional, attempt 1 (no order given): **applied**. A small grey tag "(other orders give the same flow)" under feedback 1's framed answer. All six orders give 16 (checked).

No reserve trim was needed; the margin is about 58 s. Scene 6 is now 817 characters (about 61 s), one split-screen stage. Open decisions: 2 is closed (ruling 81: 14 scene headings); 1 (A2 on the stadium) is unruled and the review did not object. Joins unchanged: scene 1 opens on f01's final frame, and scene 13 (f03's opening) is unchanged.

Narration 5,282 characters by script (Revision 1: 5,006), about 512 s with holds, 58 s under the 570 s cap; feedback speech about 24 s and 25 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: second video of the Network flow strand, playlist order 90. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-f02.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/network-flow/lesson02.sa.html` (SHA256 `99c4b096938fd219649911bc0947f167858cbaffb3fcf9b543d1c2a333e66b22`; card 06, "Choose any unsaturated path. Find its bottleneck ... Assign that amount of flow to every edge on the path ... Reduce remaining capacities accordingly (residual capacity = capacity − flow). Repeat ... Confirm it is the maximum. Find a cut whose capacity equals the total flow out of $S$."; card 07's full example, "Edges: $S \to A$ (10), $S \to B$ (8), $A \to C$ (6), $A \to T$ (5), $B \to C$ (7), $C \to T$ (9)", "Maximum flow = 5 + 7 + 2 = 14", "$\{S,A,B,C\} \mid \{T\}$ with capacity $5 + 9 = 14$"; `use-saturated-edge-method`, "If no cut matches your total, a different ORDER of paths will do better"). Card 02's "Order of paths doesn't change the answer" (MS-54) is not taught. Route entry: `math-s12-f02` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the festival's water network (f01's final frame) as the anchor; pipes drawn as tubes that fill.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols (path, bottleneck, saturated, maximum flow in plain words first); g01 worked example (task strip, edges, network and the working apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a festival's water, a grand final crowd); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Network flow):
- `cia23e92d8`: "Calculate and analyse the flow capacity of a network including the use of the saturated edges method"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

**Boundary:** starts from f01's final frame exactly (decisions file section 2): the festival tank plate at the left; the festival network (S tank, A, B, C, T campground taps; S→A 0/12, S→B 0/10, A→B 0/4, A→C 0/7, B→C 0/5, B→T 0/6, C→T 0/11, kL per hour); tap counter "0 kL per hour"; chips "how much water can reach the campground each hour?", "Next", "?". Recalls f01 (capacity, source, sink, inflow = outflow, cuts as ceilings) in a phrase or grey chip. Teaches: each edge shows flow/capacity, and an edge with flow equal to its capacity is saturated (full); a path's bottleneck (the smallest capacity left on it); the saturated edges method (pick a path from S to T with no saturated edge, send its bottleneck, update each edge, repeat until every path has a saturated edge); a shared edge uses what is left after earlier paths; the flow is the total leaving S (= the total reaching T), with inflow = outflow at each middle point; the order trap (a poor first path can block you below the maximum: 12 instead of 13), so finish with a cut whose capacity equals the flow. Stops at finding and checking a maximum flow. Not taught: backward flow along an edge (not in Standard 2); the theorem's name (f03).

## Decisions

- **Anchor: the festival (f01's handoff).** Paths in order: S-A-C-T 7 (A→C full), S-B-T 6 (B→T full), S-B-C-T 4 (S→B and C→T full). Flow 17. Blocked: S-A-B-T (B→T), S-A-B-C-T (C→T). Balance: B in 10, out 6 + 4; C in 7 + 4, out 11. Cut {S, A, B, C} | {T}: 6 + 11 = 17. Final flows S→A 7/12, S→B 10/10, A→B 0/4, A→C 7/7, B→C 4/5, B→T 6/6, C→T 11/11.
- **Always end on a cut (pack decision).** The method gives a flow; a cut of the same size proves it is the maximum (f01's ceiling). The theorem's name waits for f03.
- **The order trap (MS-54; ruling 74).** S→A 8, S→B 6, A→B 5, A→T 4, B→T 9. Poor order S-A-B-T 5, S-A-T 3, S-B-T 4 = 12, every path blocked; no cut equals 12 (cuts 13, 14, 15, 17); good order S-A-T 4, S-B-T 6, S-A-B-T 3 = 13 = the cut into T. Taught as "blocked is not the same as best".
- **No backward flow (pack decision).** If no cut matches, re-allocate the paths by hand in another order; the residual "undo" step is never shown.
- **Worked example (g01): the site's card 07 full example** (S-A-T 5, S-B-C-T 7, S-A-C-T 2: 14; cut 5 + 9 = 14), with the crossed slip "a path carries the sum of its capacities".
- **Simulations (standard item 3).**
  1. **Tubes that fill** (scenes 2 to 5; FlowNetwork with flow/capacity labels): each pipe is a tube; sending flow fills it in teal to the fraction flow/capacity, the label updating ("7/7"); a full tube turns solid amber with a tick and "full"; dots run along filled tubes; the tap counter adds each path's amount.
  2. **Path highlighter** (scenes 2, 3, 7): a path lights; its bottleneck edge pulses; a "what's left" label (blue, grey strike on the used part) appears on each edge.
  3. **Split screen for the order trap** (scene 6): two copies of the small network; left jams at 12 with every path showing a full edge; right reaches 13; a violet cut line into T appears on both, reading 13: equal on the right, higher than 12 on the left.
  4. **CutLine check** (scene 5): f01's cut line around S, A, B, C; its sum 17 sits beside the counter 17 and the two lock with a green "=".
- **Colour roles (strand, fixed).** Capacity blue; flow teal; saturated edges amber with a tick and "full"; cut lines and sums violet; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Edge labels 40 px; the tap counter 52 px; working rows 48 px. Hand tags: "flow/capacity", "the narrowest pipe", "bottleneck", "full = saturated", "what's left", "blocked: a full edge", "in = out", "a cut that matches", "order matters", "B's own flow is stuck", "direct paths first, link last", "blocked ≠ best", "smallest, not sum". At most two live at once.
- **Stage changes (standard item 2).** f01's frame (1); the first path and its bottleneck (2); two more paths (3); blocked, the total and the balance (4); the cut check (5); the order trap split screen (6); g01 board, the site's example (7); framed card (8); question cards (9 to 12); the traffic network with three cuts (13); key notes (14).
- **Worked example (g01 layout).** Scene 7: task strip "Use the saturated edges method to find the maximum flow. Check your answer with a cut."; givens card: the edges "S→A 10, S→B 8, A→C 6, A→T 5, B→C 7, C→T 9"; the network at the right; rows "S-A-T: min(10, 5) = 5", "S-B-C-T: min(8, 7, 9) = 7", "S-A-C-T: min(10 − 5, 6, 9 − 7) = 2", "flow = 5 + 7 + 2 = 14", "cut {S, A, B, C} | {T}: 5 + 9 = 14"; framed answer "maximum flow 14"; crossed slip "S-A-T carries 10 + 5 = 15" (caption "a path carries its smallest capacity: 5").
- **Memory aid.** Framed card: "A path carries its narrowest pipe." Key line: "Saturate every path, then find a cut that matches."
- **Visual surprise.** The left half of the split screen jams at 12 with every path blocked, while the right half, with the same pipes, reaches 13 (6).
- **Plain meanings at first use.** Path ("a route from the source to the sink"); bottleneck ("the narrowest pipe on the path: the smallest capacity left"); saturated ("full: the flow equals the capacity"); flow capacity of a network ("the most it can carry", the syllabus's phrase, equal to the maximum flow).
- **Attempts (original, HSC style).** A1 (pack question 1): S→A 11, S→B 9, A→C 6, A→T 4, B→C 8, C→T 12: S-A-T 4, S-A-C-T 6, S-B-C-T 6: 16; cut 4 + 12 = 16; crossed "S-B-C-T carries 8" (caption "C→T has only 6 left"). A2 (original; the stadium from f01): S-A-T 80, S-B-T 90, S-A-B-T 20: 190; cut at the gates 80 + 110 = 190; crossed "S-A-B-T carries 30" (caption "B→T has only 20 left").
- **Mistake scene:** none separate. The sum along a path (7 crossed); a shared edge treated as full capacity (A1, A2 crossed); stopping at "blocked" and calling it the maximum (6, the split screen); out of S not equal to into T, or a point that doesn't balance (4, said).
- **Cause chain taught, in order:** (1) water on a path must pass through every pipe on it, so the path can carry only its narrowest pipe's remaining capacity (2); (2) once a pipe is full, any path through it can carry nothing more (2, 3); (3) an earlier path uses part of a shared pipe, so a later path only has what is left (3); (4) when every path has a full pipe, nothing more can be pushed along a path, so the method stops (4); (5) no flow can be bigger than any cut (f01), so a flow that equals a cut is the most possible (5); (6) a poor order can fill a pipe that a better order would have kept for another path (the first path through the link used B→T, which B's own flow needed), so "blocked" can be below the maximum; a good habit is direct paths first and the link for what's left, and a matching cut is the proof (6).
- **Entry knowledge (route):** math-s12-f01 (terms, cuts, ceilings). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-f03, maximum flow and minimum cut).** Scene 13's frame (decisions file section 2): the new plate `ms12-car-park-entrance-v1.png` (briefed here; ruling 17) at the left (about 560 px); the traffic network at the right (about 1,200 × 520 px): S "motorway exit", A, B, C streets' corners, T "car park"; edges S→A 30, S→B 25, A→B 10, A→C 10, B→C 12, B→T 12, C→T 28 (blue, chip "cars per minute"); three violet dashed cut lines drawn, labelled "cut 1", "cut 2", "cut 3" (cut 1 around S; cut 2 around S, A, B; cut 3 around S, A, B, C), with no sums; slow teal dots; chips "which cut tells us the most cars that can get through?", "Next" and "?".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Festival cuts: {S, A, B, C} 17, {S, A, B} 18, {S, A} 21, {S} 22, {S, B} 23, {S, A, C} 25, {S, B, C} 29, {S, C} 33; maximum flow 17.
  (b) Order trap: final flows (poor) S→A 8/8, S→B 4/6, A→B 5/5, A→T 3/4, B→T 9/9; (good) S→A 7/8, S→B 6/6, A→B 3/5, A→T 4/4, B→T 9/9.
  (c) Site full example: final flows S→A 7/10, S→B 7/8, A→C 2/6, A→T 5/5, B→C 7/7, C→T 9/9; smallest cut 14.
  (d) A1: final flows S→A 10/11, S→B 6/9, A→C 6/6, A→T 4/4, B→C 6/8, C→T 12/12.
  (e) A2: final flows S→A 100/120, S→B 90/90, A→B 20/30, A→T 80/80, B→T 110/110.
  (f) Traffic (f03): cuts {S} 55, {S, A, B} 34, {S, A, B, C} 40 (the three drawn); maximum flow 34.
  (g) The syllabus says "flow capacity of a network"; the video says "the most it can carry, its flow capacity, also called the maximum flow".

Main question: *How much water can reach the campground each hour? How does the saturated edges method find the most a network can carry?*
Entry knowledge (f01): capacity, source, sink, inflow = outflow, cuts.
Stops after: the method, the balance check, the order trap, the cut check.
Handoff: the traffic network with three cuts, "which cut tells us the most cars that can get through?" (f03).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): capacity blue; flow teal; saturated amber ("full"); cuts violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · NETWORK FLOW". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: empty pipes
> Here's the festival's water network, with every pipe empty, and water only runs one way through each pipe. Each pipe shows its flow over its capacity, so nought over twelve means nothing flowing yet, out of a possible twelve kilolitres an hour. The campground wants as much water as the pipes can deliver, which is called the network's flow capacity. So how does the saturated edges method find the most a network can **carry**?

Visual: opens on f01's final frame exactly. On the first sentence "Next" fades. On "nought over twelve" the S→A label "0/12" enlarges (hand tag "flow/capacity"), its "0" teal and "12" blue. On "as much water" the tap counter pulses. On "flow capacity" a grey chip "recall: no flow is bigger than any cut". On "carry" (bold) heading "The saturated edges method" writes.

### 2. a path and its bottleneck
> Start with one path from the tank to the taps, S to A to C to T. Its pipes can carry twelve, seven and eleven. Water has to go through all three, so the path can only carry as much as its narrowest pipe, which is seven. That narrowest pipe is called the bottleneck. Send seven along the path. Now A to C shows seven over seven. It's full, and a full edge is called **saturated**.

Visual: stage change: simulations 1 and 2. The network enlarges (about 1,500 × 600 px; the plate a badge). On "S to A to C to T" the path lights. On "twelve, seven and eleven" the three labels glow in turn. On "narrowest pipe" A→C pulses (hand tags "the narrowest pipe", "bottleneck"). On "Send seven" the three tubes fill teal to 7/12, 7/7 and 7/11; dots run along them; the tap counter "7". On "saturated" (bold) A→C turns solid amber with a tick and "full" (hand tag "full = saturated").

### 3. more paths, using what's left
> That's the saturated edges method. Pick a path from source to sink with no saturated edge, send its bottleneck, and update every edge. S to B to T can carry ten and six, so send **six**, and B to T is now saturated. Next, S to B to C to T. S to B has only four left, B to C has five, and C to T has eleven minus seven, so four left. Send **four**. Now S to B and C to T are saturated too.

Visual: camera continue. On "Pick a path" a small three-step strip writes at the top, 36 px: "1 pick a path with no full edge", "2 send its bottleneck", "3 update every edge". On "S to B to T" the path lights; on "six" (bold) the tubes fill to 6/10 and 6/6; B→T turns amber "full"; the counter "13". On "S to B to C to T" the path lights; "what's left" labels write: S→B "10 − 6 = 4", B→C "5", C→T "11 − 7 = 4" (hand tag "what's left"); on "four" (bold) the tubes fill to 10/10, 4/5, 11/11; S→B and C→T turn amber "full"; the counter "17".

### 4. stop, total and balance
> Can we find another path? S to A to B to T is blocked, because B to T is full. S to A to B to C to T is blocked too, because C to T is full. Every path now has a saturated edge, so we stop. The flow is seven plus six plus four, which is seventeen kilolitres an **hour**. Check the middle points. B takes in ten, and sends out six plus four. C takes in seven plus four, and sends out eleven. Inflow equals outflow **everywhere**.

Visual: camera continue. On "S to A to B to T" a grey ghost path lights and stops at B→T's amber tube with a small "blocked" tag; on "S to A to B to C to T" a second ghost stops at C→T (hand tag "blocked: a full edge"). On "hour" (bold) a row, 48 px: "flow = 7 + 6 + 4 = 17 kL per hour" (teal) and the counter reads "17". On "Check the middle points" B and C get in and out counters: B "in 10, out 6 + 4 = 10", C "in 7 + 4 = 11, out 11"; on "everywhere" (bold) green ticks at A, B and C (A "in 7, out 7"; hand tag "in = out").

### 5. a cut that matches
> Is seventeen really the most? Remember, no flow can be bigger than any cut. Draw the cut with only T on the sink side. It crosses B to T, six, and C to T, eleven, so its capacity is **seventeen**. Our flow equals a cut, so it can't be beaten. Seventeen kilolitres an hour is the network's flow capacity, its maximum flow, the most it can **carry**. That's the whole method, send flow path by path, then prove it with a cut.

Visual: simulation 4. On "no flow can be bigger" grey chip "recall: flow ≤ every cut". On "only T on the sink side" a violet line wraps S, A, B and C; the source side tints pale violet; B→T and C→T glow violet; on "seventeen" (bold) the sum "6 + 11 = 17" (violet). On "equals a cut" the counter's "17" and the cut's "17" slide together and lock with a green "=" (hand tag "a cut that matches"). On "carry" (bold) framed (green): "maximum flow = 17 kL per hour".

### 6. the order trap
> Here's the catch. The order you choose paths in can matter. In this small network, start with S to A to B to T, and send five. Then S to A to T can take only three, and S to B to T only four. That's twelve, and now every path is blocked. But the cut into T is four plus nine, which is **thirteen**, and no cut equals twelve. The first path sent A's flow the long way, through the link to B, and it used five of B to T's nine, which B's own flow needed. So try another order. S to A to T takes four, S to B to T takes six, and S to A to B to T takes three. That's **thirteen**, and it matches the cut. So a good habit is to send flow along the direct paths first, the ones that skip the link, and use the link for what's left. Then check with a cut. Blocked doesn't mean best. A cut that matches proves you've got the **maximum**.

Visual: stage change: simulation 3, a split screen (each about 900 × 520 px), both networks S→A 8, S→B 6, A→B 5, A→T 4, B→T 9; left titled "first try", right "second try" (36 px). Left: on "send five" S-A-B-T fills (5/8, 5/5, 5/9; A→B "full"); on "only three" S-A-T (8/8 "full", 3/4); on "only four" S-B-T (4/6, 9/9 "full"); counter "12"; on "every path is blocked" grey ghosts stop at full tubes. On "four plus nine" a violet cut into T draws on the left, "4 + 9"; on "thirteen" (first bold) "= 13", with a red "12 < 13" note (hand tag "order matters"). On "the long way" the left half's S-A-B-T route pulses; on "used five of B to T's nine" the left B→T tube pulses amber with its first 5 marked, and S→B's unused 2 glows ("4/6", hand tag "B's own flow is stuck"). Right: on "S to A to T takes four" 4/8, 4/4 "full"; "S to B to T takes six" 6/6 "full", 6/9; "S to A to B to T takes three" 7/8, 3/5, 9/9 "full"; on "thirteen" (second bold) the counter "13" and the same cut "13" lock with a green "=". On "direct paths first" the right half's S-A-T and S-B-T glow in turn, then A→B (hand tag "direct paths first, link last"); on "check with a cut" the green "=" pulses. On "maximum" (bold) the right half frames green "maximum flow 13", and a red slip on the left "every path is blocked, so 12" is crossed (caption "blocked is not the same as maximum: compare with a cut"; hand tag "blocked ≠ best").

### 7. worked example: the site's network
> Here's a worked example. Use the saturated edges method to find the maximum flow, then check it with a cut. S to A to T has capacities ten and five, so it carries five, and A to T is full. S to B to C to T has eight, seven and nine, so send **seven**, and B to C is full. S to A to C to T has five left on S to A, six on A to C, but only two left on C to T, so send **two**. Now every path has a saturated edge. The flow is five plus seven plus two, fourteen. The cut into T is five plus nine, also fourteen, so fourteen is the **maximum**. Adding the capacities along a path, like ten plus five for the first one, is the slip. A path carries its **smallest**.

Visual: clear change to the g01 board. Task strip, 44 px: "Use the saturated edges method to find the maximum flow. Check your answer with a cut." Givens card: "S→A 10, S→B 8, A→C 6, A→T 5, B→C 7, C→T 9" (blue, 40 px). The network at the right (about 900 × 480 px). Rows, 48 px: "S-A-T: min(10, 5) = 5" (A→T amber "full"); "S-B-C-T: min(8, 7, 9)"; on "seven" (bold) "= 7" (B→C "full"); "S-A-C-T: min(10 − 5, 6, 9 − 7)"; on "two" (bold) "= 2" (C→T "full"). Row "flow = 5 + 7 + 2 = 14"; row "cut {S, A, B, C} | {T}: 5 + 9 = 14" with the violet line on the network; on "maximum" (bold) framed answer (green): "maximum flow 14". On "slip" a red slip "S-A-T carries 10 + 5 = 15"; on "smallest" (bold) it is crossed (caption "a path carries its smallest capacity: 5"; hand tag "smallest, not sum").

### 8. memory aid
> Here's the summary. Each path carries its narrowest pipe. Keep sending flow until every path has a full edge, then prove it with a cut that **matches**. If no cut matches, try the paths in another order.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the festival network with its four amber pipes and the 17 cut. Main line, hand font 56 px: "A path carries its narrowest pipe." On "matches" the key line, 40 px: "Saturate every path, then find a cut that matches." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A network has edges S to A, eleven, S to B, nine, A to C, six, A to T, four, B to C, eight, and C to T, twelve. Use the saturated edges method to find the flow capacity of the network. Show the flow on each edge, and check your answer with a cut. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A network has edges S→A (11), S→B (9), A→C (6), A→T (4), B→C (8) and C→T (12). Use the saturated edges method to find the flow capacity of the network. Show the flow on each edge and check your answer with a cut." The network drawn with "0/…" labels. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> S to A to T sends four, and A to T is full. S to A to C to T sends six, and A to C is full. S to B to C to T has only twelve minus six, so six, left on C to T, and it sends **six**. The flow is sixteen, and the cut into T is four plus twelve, also **sixteen**. Sending eight on the last path is the slip. C to T had only six **left**.

Visual: the card shrinks to the top (30 px). The network fills: "S-A-T 4" (4/11, 4/4 "full"); "S-A-C-T 6" (10/11, 6/6 "full", 6/12); on "six" (bold) "S-B-C-T 6" (6/9, 6/8, 12/12 "full"). On "sixteen" (bold) framed (green): "flow 16; cut 4 + 12 = 16, so 16 is the maximum", with a small grey tag under it "(other orders give the same flow)". On "slip" a red slip "S-B-C-T carries 8"; on "left" (bold) it is crossed (caption "C→T has only 6 left"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Back at the stadium, the walkways from the plaza carry a hundred and twenty and ninety people a minute, the link between the concourses carries thirty, and the gates carry eighty and a hundred and ten. Send flow along S, A, T first, then S, B, T, then S, A, B, T. Find the total flow, and check it with a cut. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The stadium network has edges S→A (120), S→B (90), A→B (30), A→T (80) and B→T (110), in people per minute. Use the saturated edges method with the paths S-A-T, then S-B-T, then S-A-B-T. Find the total flow and check it with a cut." The network drawn with "0/…" labels; picture slot: the stadium plate (about 300 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> S, A, T sends eighty, and S, B, T sends ninety. On S, A, B, T, the south gate has only twenty left, so it sends **twenty**. The total is a hundred and ninety, and the cut at the two gates, eighty plus a hundred and ten, is also a hundred and **ninety**. Sending thirty on the last path is the slip. The south gate had only twenty **left**.

Visual: the card shrinks to the top. The network fills: "S-A-T 80" (80/120, 80/80 "full"); "S-B-T 90" (90/90 "full", 90/110); on "twenty" (bold) "S-A-B-T 20" (100/120, 20/30, 110/110 "full"). On "ninety" (bold) framed (green): "flow 190 people per minute; cut 80 + 110 = 190". On "slip" a red slip "S-A-B-T carries 30"; on "left" (bold) it is crossed (caption "B→T has only 20 left"). Hold about 1 s.

### 13. handoff: traffic to the car park
> Every answer today was proved by a cut that matched. Here's traffic from a motorway exit to a shopping centre car park, in cars per minute, with three different cuts drawn. They don't all give the same number. Which cut tells us the most cars that can get **through**?

Visual: board clear to the final frame (decisions file section 2). The new plate `ms12-car-park-entrance-v1.png` at the left (about 560 px); the traffic network at the right (about 1,200 × 520 px): S "motorway exit", A, B, C, T "car park"; edges S→A 30, S→B 25, A→B 10, A→C 10, B→C 12, B→T 12, C→T 28 (blue, 36 px) with a chip "cars per minute"; slow teal dots. On "three different cuts" three violet dashed lines draw in turn, labelled "cut 1" (around S), "cut 2" (around S, A, B) and "cut 3" (around S, A, B, C); no sums. On "through" (bold) chips "which cut tells us the most cars that can get through?" (40 px), "Next" and "?". Hold about 2 s. This is f03's opening; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Each edge: flow/capacity. Full (flow = capacity) = saturated.
- A path carries its bottleneck: the smallest capacity left on it.
- Send each path's bottleneck; repeat until every path has a full edge.
- Flow = total out of S = total into T. In = out in the middle.
- Order can matter: prove it with a cut equal to the flow.

Memory aid (framed card, right side, as in scene 8): *A path carries its narrowest pipe.* Key: *Saturate every path, then find a cut that matches.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame: f03 opens on it.

## Teaching checks

- **Does it explain causes?** Why the narrowest pipe: water must pass through every pipe (2). Why a shared pipe has less: earlier paths used some (3). Why stop: every path has a full pipe (4). Why a matching cut proves it: no flow beats any cut (5). Why order can matter: a poor path fills a pipe a better order would share (6).
- **Misconceptions addressed:** the sum along a path (7); a shared edge's full capacity reused (A1, A2); blocked read as maximum (6); unbalanced points (4).
- **Visual standard, item by item:** 1 the festival tank plate, the stadium plate (A2), the car park plate; 2 a new stage every 30 to 60 s; 3 tubes filling with dots, the counter adding, the split screen jamming at 12 against 13; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 7; 8 framed card and five bullets; 9 the left half jamming.
- **One idea at a time:** bottleneck (2), the method (3), stopping and balance (4), the cut check (5), order (6), the full worked example (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (A2 gives the path order); 10 s each; feedback about 24 s and 25 s.
- **Avoided double teaching:** f01's cuts are recalled in a grey chip; the theorem waits for f03.
- **Syllabus coverage:** `cia23e92d8`: "Calculate ... the flow capacity of a network" (4, 5, 7, A1, A2) "and analyse" (5, 6: proving and the order trap) "including the use of the saturated edges method" (2 to 7, A1, A2).
- **Out of scope by design:** backward flow; the theorem's name (f03); changing capacities and demand (f04).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A network has edges S→A (11), S→B (9), A→C (6), A→T (4), B→C (8) and C→T (12). Use the saturated edges method to find the flow capacity of the network. Show the flow on each edge and check your answer with a cut."
Model answer: S-A-T: 4 (A→T full). S-A-C-T: 6 (A→C full). S-B-C-T: C→T has 12 − 6 = 6 left, so 6 (C→T full). Total 16. Flows: S→A 10/11, S→B 6/9, A→C 6/6, A→T 4/4, B→C 6/8, C→T 12/12. Cut {S, A, B, C} | {T}: 4 + 12 = 16, so 16 is the maximum. Classic mistake (crossed): "S-B-C-T carries 8".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "The stadium network has edges S→A (120), S→B (90), A→B (30), A→T (80) and B→T (110), in people per minute. Use the saturated edges method with the paths S-A-T, then S-B-T, then S-A-B-T. Find the total flow and check it with a cut."
Model answer: S-A-T 80 (A→T full); S-B-T 90 (S→B full); S-A-B-T: min(120 − 80, 30, 110 − 90) = 20 (B→T full). Total 190 people per minute. Cut {S, A, B} | {T}: 80 + 110 = 190, so 190 is the maximum. Classic mistake (crossed): "S-A-B-T carries 30".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Festival | S-A-C-T 7; S-B-T 6; S-B-C-T 4 (S→B 4 left, C→T 4 left); 17; B in 10, out 10; C in 11, out 11; cut 6 + 11 = 17 | 1 to 5, 8 |
| Order trap | poor 5, 3, 4 = 12; good 4, 6, 3 = 13; cut 4 + 9 = 13; no cut equals 12 | 6 |
| Site full example | 5, 7, 2 = 14; cut 5 + 9 = 14; slip 10 + 5 = 15 | 7 |
| A1 | 4, 6, 6 = 16; cut 4 + 12 = 16 | 9, 10 |
| A2 (stadium) | 80, 90, 20 = 190; cut 80 + 110 = 190 | 11, 12 |
| Traffic (final frame) | S→A 30, S→B 25, A→B 10, A→C 10, B→C 12, B→T 12, C→T 28 cars per minute | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: the path-by-path runs, every cut, and the maximum flow by augmenting paths); Codex to re-check.

- Festival: path run 7, 6, 4 = 17; maximum flow 17; smallest cut {S, A, B, C} 17.
- Order trap: poor run 5, 3, 4 = 12 (then blocked); good run 4, 6, 3 = 13; cuts 13, 14, 15, 17; maximum 13.
- Site full example: run 5, 7, 2 = 14; maximum 14; smallest cut 14.
- A1: run 4, 6, 6 = 16; maximum 16; smallest cut 16.
- A2: run 80, 90, 20 = 190; maximum 190; smallest cut 190.
- Revision 2 (`work/brief-resolve-standard-cf/verify.py`, `python -I`, 46 checks, 0 failures): the first try's S-A-B-T uses 5 of B→T's 9, leaving 4 for S-B-T, and 2 of S→B stay unused (5, 3, 4 = 12; no cut is 12); direct paths first gives 4, 6, 3 = 13 = the cut into T; scenes 2 to 4 (7, 6, 4 = 17), scene 7 (5, 7, 2 = 14) and A2 (80, 90, 20 = 190) each send the link path last and reach the maximum; A1 gives 16 in all six orders.

## Memory aid check

- **"A path carries its narrowest pipe."** with key line **"Saturate every path, then find a cut that matches."** From the site's card 06 steps ("Find its bottleneck ... Confirm it is the maximum. Find a cut whose capacity equals the total flow"). Meaning, as said in scenes 2, 5 and 8. Assumptions checked: "narrowest" means the smallest capacity left after earlier paths (3); flow never runs backwards along an edge (Standard 2); "a cut that matches" is the proof, and when none matches, the paths are re-allocated (6). It helps a new case: a path with 9, 4 and 6 left carries 4.
- **Considered, not used:** "Fill till it's full" (says nothing about the proof).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,282 characters** (Revision 1: 5,006), 14 scene headings. Characters per scene (1 to 14): 424, 375, 380, 420, 415, 817, 644, 199, 279, 322, 341, 327, 264, 75. Speech about 397 s; holds and settling unchanged from Revision 1 (below); total **about 512 s**, 58 s under the 570 s cap. Feedback speech: about 24 s and 25 s. The Revision 1 paragraph below is kept for the record.

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,006 characters**, 14 scene headings. Characters per scene (1 to 14): 424, 375, 380, 420, 415, 541, 644, 199, 279, 322, 341, 327, 264, 75.

At 13.3 characters per second the speech is about 376 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the tubes filling (2 to 4), the cut locking (5), the split screen (6), the board (7) and the traffic cuts (13) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 491 s**, under the 570 s cap. Feedback speech: about 24 s and 25 s.

Reserve trims if the voiced take runs long: scene 4's balance sentences (about 9 s; the ticks can stay silent); scene 13's third sentence (about 3 s).

## Scene list and build ids

Lesson key `m-s12f02` (route math-s12-f02). Explainer folder `src/explainer/lessons/math-s12-f02`; build inputs in `docs/production/claude-pm/lessons/math-s12-f02/` (at voicing).

In order (14 scene headings): hook-empty-pipes, path-bottleneck, more-paths, stop-total-balance, cut-that-matches, order-trap, worked-site-network, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-traffic, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | f01's frame; empty pipes |
| 25 to 55 s | 2 | The first path and its bottleneck |
| 55 to 90 s | 3 | Two more paths |
| 90 to 130 s | 4 | Blocked; 17; balance |
| 130 to 160 s | 5 | The cut that matches |
| 160 to 215 s | 6 | The order trap, split screen |
| 215 to 270 s | 7 | g01 board: the site's network |
| 270 to 285 s | 8 | Framed memory card |
| 285 to 400 s | 9 to 12 | Question cards and countdowns, then feedback |
| 400 to 420 s | 13 | The traffic network with three cuts |
| 420 to 465 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: f01's last frame continues into 1; 1 to 2 stage change (the network enlarges); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 stage change (split screen); 6 to 7 clear change to the board; 7 to 8 stage change; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-f02-learning-review.md`, `science_check` = `checks/m-s12-f02-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the festival tank is f01's brief and the stadium is c06's; no existing maths plate shows a street corner or a car park entrance (`ma12-` road plates are a country road and vehicles, not a junction).

Need (painted): `ms12-car-park-entrance-v1.png` (f03's opening, shown in this video's final frame; ruling 17).

Coded: the tubes, labels, dots, counters, ghosts, the split screen, cut lines, the board, question cards, the countdown, the traffic network, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; f01's `FlowModel`, `FlowNetwork` and `CutLine`.

Additions (kit-needs file, network flow items 1 and 2):
1. **Saturated edges run in FlowModel:** a given list of paths; for each, the bottleneck from what is left, the flow added, saturated flags; a blocked test for any path with a full edge. Check: the festival run gives 7, 6, 4; the poor trap run 5, 3, 4 then blocked; the good run 4, 6, 3.
2. **Tube fill and "full" state on FlowNetwork** (amber, tick); a path highlighter with a pulsing bottleneck; "what's left" labels; ghost paths stopping at a full edge; a split-screen mode (two FlowModel states side by side).
3. **Counter-and-cut lock** (small): the flow counter and a cut sum slide together and lock with "=" when equal.

## Codex asset brief (Maths S12 F02, a street corner and car park entrance)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-f02.md`, route entry math-s12-f02. Paint after the learning review and maths check pass and root gives the go-ahead, and before the f02 build (the plate appears in f02's final frame and opens f03; ruling 17). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-stadium-plaza-v1.png` (c06's brief) in palette; no text, labels, numbers, logos, store names, people, hands or faces (no drivers visible; cars only as simple shapes with tinted windows); never stretch.

1. `ms12-car-park-entrance-v1.png` (1200 × 1000 px, true alpha or a softened rectangular edge): a suburban street corner seen from above at about 45 degrees: a motorway off-ramp curving in at the top left, two local streets meeting at a set of traffic lights in the middle, and the entrance to a multi-level shopping centre car park at the lower right (a ramp, a boom gate raised, a plain concrete facade with no signs). A few cars on the roads, spaced out. Plain daylight. Leave the top 140 px and the bottom 130 px free of anything that needs to be seen.

Report inspection at 560 px and at 280 px wide on the paper background (`#f6f1e7`), confirming the off-ramp and the car park entrance read as the start and end at 280 px. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-f02-provenance.json`. If the f03 designer chooses another opening, only f02's final frame changes.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's card 07 example keeps its numbers (5, 7, 2, 14; cut 14), and that card 02's "Order of paths doesn't change the answer" (MS-54) is not taught anywhere; the order trap's numbers match MS-54's example.
4. Confirm no backward flow is shown or implied.
5. Confirm both attempts carry every demand and given (A2 gives the path order), and neither card shows an answer.
6. Confirm scene 1 opens on f01's final frame and scene 13 matches section 2 of the decisions file (and, once written, f03's opening).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: The Saturated Edges Method for Maximum Flow | Year 12 Maths Standard 2

(Title length: 70 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson02.sa.html

How much water can a festival's pipes deliver to the campground each hour? Learn the saturated edges method: each path carries its bottleneck (its narrowest pipe), so send that amount, update what is left on every edge, and repeat until every path has a full (saturated) edge. Check that each point balances, then prove the answer with a cut equal to the flow. See why the order of paths can matter, and why "blocked" is not the same as "maximum". Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Network flow. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate and analyse the flow capacity of a network including the use of the saturated edges method"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

Builds on: Flow Networks: Source, Sink, Capacity and Cuts. Next: Maximum Flow, Minimum Cut.

#Year12Maths #MathsStandard #NetworkFlow #HSCScience

## Open decisions

- **1. A2 on the stadium (root).** An original attempt that reaches f01's ceiling of 190 with the method (sets up f04); the pack's question 2 (the order trap) is taught in scene 6 instead.
- **2. Fourteen scene headings (root).** Closed in Revision 2: ruling 81. Revision 1 text: The cut check (5) and the order trap (6) are separate stages because the proof is the method's last step; scene 5 can merge into 4 if the voiced take runs long.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-f02-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from f01; check that the bottleneck is felt from "through all three", that "what's left" on a shared pipe is clear, that the stop rule and the cut proof are linked, that the split screen makes "blocked is not best" land without backward flow, that A2's given order is enough, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
