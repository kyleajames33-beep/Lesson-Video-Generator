# Maths S12 F03: How does the minimum cut prove the maximum flow? Every unit of flow crosses every cut, so the smallest cut is the tightest ceiling; the maximum-flow minimum-cut theorem; listing every cut; a minimum cut in the middle; and a flow and a cut that prove each other (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), f02's final frame (`math-s12-f02.md` scene 13) and root's Standard rulings (1 to 76). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,004 characters by script (see "Narration length estimate"), 14 scene headings, about 491 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of the Network flow strand, playlist order 91. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-f03.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/network-flow/lesson03.sa.html` (SHA256 `59e939459228608fc7c8af3cc28a3a46d01cd06935bd90d83dca37e066cba875`; card 05, "Why this is true: Every unit of flow from $S$ to $T$ must cross every cut at least once. So no flow can exceed any cut's capacity. The minimum cut is the tightest restriction, flow cannot exceed it, and the saturated edges method shows it can always be achieved."; the systematic list "{$S$} | {$A,B,T$} ... {$S,A$} | {$B,T$} ... {$S,B$} | {$A,T$} ... {$S,A,B$} | {$T$}"; `we-1`, "$S \to A$ (10), $S \to B$ (7), $A \to T$ (6), $B \to T$ (9), $A \to B$ (3)" with cuts "17", "16", "19 (note: $A{\to}B$ is backward, not counted)", "15"). Route entry: `math-s12-f03` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the traffic network over the car park plate (f02's final frame) as the anchor; cars as dots.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces (cars as dots); one main question; one stage at a time; words before symbols ("the most that can flow equals the smallest cut" before the theorem's name); g01 worked example (task strip, edges, the cut list apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (traffic to a car park, a grand final crowd, a festival's water); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json` ("including the use of applying" is the official text):

Standard 2 (Network flow):
- `ci0d82df6b`: "Solve small-scale network flow problems including the use of applying the maximum-flow minimum-cut theorem"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

**Boundary:** starts from f02's final frame exactly (decisions file section 2): the car park plate at the left; the traffic network (S motorway exit, A, B, C, T car park; S→A 30, S→B 25, A→B 10, A→C 10, B→C 12, B→T 12, C→T 28 cars per minute); three violet dashed cuts labelled "cut 1" (around S), "cut 2" (around S, A, B), "cut 3" (around S, A, B, C), no sums; teal dots; chips "which cut tells us the most cars that can get through?", "Next", "?". Recalls f01 (cuts, forward edges only, ceilings) and f02 (the saturated edges method, the matching cut) in a phrase or grey chip. Teaches: every car from S to T crosses every cut, so the flow can never be more than any cut's capacity; the smallest cut is the tightest ceiling; the maximum-flow minimum-cut theorem (the maximum flow equals the capacity of the minimum cut; the saturated edges method, with the right paths, reaches it); listing every cut systematically (each middle point on one side or the other: two middle points give 4 cuts, three give 8); the minimum cut can be in the middle; a flow equal to a cut proves both; a claim bigger than a cut is impossible. Stops at solving small flow problems with the theorem. Not taught: changing capacities and demand (f04).

## Decisions

- **Anchor: traffic to the car park (f02's handoff).** The three drawn cuts: cut 1 {S} 30 + 25 = 55; cut 3 {S, A, B, C} 12 + 28 = 40; cut 2 {S, A, B} 10 + 12 + 12 = 34. All eight: {S} 55, {S, A} 45, {S, B} 54 (A→B back), {S, A, B} 34, {S, A, B, C} 40, {S, A, C} 63, {S, B, C} 70, {S, C} 83. Maximum flow 34 (S-A-C-T 10, S-B-T 12, S-B-C-T 12). The minimum cut sits in the middle streets.
- **Name the theorem plainly (pack decision).** "The most that can flow through a network equals the capacity of its smallest cut", then its name once, "the maximum-flow minimum-cut theorem" (the syllabus's words), in scene 4.
- **Systematic list once, then the shortcut (pack decision).** The site's `we-1` (two middle points: 4 cuts) is the worked example; the traffic's 8 cuts are stepped through with a "smallest so far" badge; scene 7 gives the shortcut (a flow from f02's method plus one matching cut), on the stadium's 190 (f02's A2).
- **"With the right paths" (MS-54 follow-through).** The theorem is stated with the method "reaching it with the right choice of paths", so f02's order trap stays true.
- **Simulations (standard item 3).**
  1. **Every car crosses every cut** (scene 3; FlowNetwork dots with CutLine): one dot drives S→B→C→T; each time it crosses one of the three cut lines, the crossed edge flashes violet and a tally under that cut ticks.
  2. **CutLine `cycleCuts`** (scene 6; new mode): the source-side tint steps through all 8 sets in turn, each with its live sum; a "smallest so far" badge moves only when a smaller sum appears.
  3. **Balance of flow and cut** (scenes 4, 7): a two-pan balance; the flow counter on one pan and the smallest cut's sum on the other; level when equal (34 and 34; 190 and 190).
- **Colour roles (strand, fixed).** Capacity blue; flow teal (dots, counters); saturated amber ("full"); cuts, counted edges and sums violet; back edges grey ("not counted"); the smallest-so-far badge violet with a ring; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Cut sums 48 px; edge labels 40 px; the badge 44 px. Hand tags: "forwards only", "every car crosses every cut", "smallest = tightest", "max flow = min cut", "each point: one side or the other", "2 points: 4 cuts", "3 points: 8 cuts", "smallest so far", "in the middle", "flow = cut: both proved", "above a cut: impossible". At most two live at once.
- **Stage changes (standard item 2).** f02's frame (1); the three cuts summed (2); a car crossing every cut (3); the method reaching 34 and the balance (4); g01 board, listing four cuts (5); cycling eight cuts (6); the shortcut on the stadium (7); framed card (8); question cards (9 to 12); the stadium gates and the crowd counter (13); key notes (14).
- **Worked example (g01 layout).** Scene 5: task strip "Find the capacity of every cut, and use the minimum cut to state the maximum flow."; givens card "S→A 10, S→B 7, A→T 6, B→T 9, A→B 3"; the network at the right; rows "{S}: 10 + 7 = 17", "{S, A}: 7 + 3 + 6 = 16", "{S, B}: 10 + 9 = 19 (A→B back)", "{S, A, B}: 6 + 9 = 15"; framed answer "minimum cut 15, so maximum flow 15"; check row "6 + 3 + 6 = 15"; crossed slip "17, the first cut drawn" (caption "only the smallest cut gives the maximum").
- **Memory aid.** Framed card: "Maximum flow = minimum cut." Key line: "A flow equal to a cut proves both."
- **Visual surprise.** The smallest-so-far badge stops in the middle of the network, on cut {S, A, B}, not at the exit or the car park (6).
- **Plain meanings at first use.** Minimum cut ("the cut with the smallest capacity"); maximum flow ("the most that can flow from the source to the sink"); theorem ("a result that is always true and has been proved").
- **Attempts (original, HSC style).** A1 (pack question 1): S→A 16, S→B 14, A→B 5, A→C 9, B→C 6, B→T 10, C→T 18: (a) {S, A, B} 9 + 6 + 10 = 25; (b) {S, A, B, C} 10 + 18 = 28; (c) every other cut at least 28, so the minimum cut is 25 and the maximum flow is 25; crossed "(c) 28, the cut at the sink" (caption "the smallest cut wins: 25"). A2 (pack question 2): the festival's 18 kL per hour claim; the cut into T is 6 + 11 = 17, so 18 is impossible; crossed "12 + 10 = 22 leaves the tank, so 18 is fine" (caption "the tightest cut limits the flow: 17").
- **Mistake scene:** none separate. The largest cut or the first cut as the answer (5 crossed; A1 crossed); only checking cuts next to S and T (6, said); a back edge counted (5, said); a ceiling read from the source's capacity alone (A2 crossed); "no path left, so maximum" (4, the theorem's "right paths").
- **Cause chain taught, in order:** (1) every car from S to T must cross every cut, travelling forwards (3); (2) so the flow can't be more than any cut, and the smallest cut is the tightest ceiling (3); (3) the method can push flow until a cut is full, so the flow reaches the smallest cut's capacity: maximum flow = minimum cut (4); (4) each middle point is on one side or the other, so there are 2, 4, 8 cuts for 1, 2, 3 middle points, and listing them all finds the smallest (5, 6); (5) a flow equal to a cut can't be beaten, and that cut can't be beaten either, so both are proved (7); (6) a claim bigger than any cut is impossible (A2).
- **Entry knowledge (route):** math-s12-f02 (the saturated edges method; the matching cut); math-s12-f01 (cuts, forward edges only). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-f04, capacity changes and demand).** Scene 13's frame (decisions file section 2): the stadium plate `ms12-stadium-plaza-v1.png` (c06's brief) filling the left and centre; the five arrows with their capacities (120, 90, 30, 80, 110) and labels S, A, B, T; the gates' cut drawn violet with "190"; a coded crowd counter at the stands "0 of 60 000 fans" (44 px) and a coded clock "5 hours" (40 px); chips "60 000 fans in 5 hours: will 190 a minute be enough?" (40 px), "Next" and "?". No demand per minute is worked out.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Traffic flows after the run: S→A 10/30, S→B 24/25, A→B 0/10, A→C 10/10, B→C 12/12, B→T 12/12, C→T 22/28. The cut {S, A, B} crosses A→C, B→C and B→T, all full.
  (b) Site `we-1`: run S-A-T 6, S-A-B-T 3, S-B-T 6 = 15 (the site's allocation; the script's order S-A-T, S-B-T, S-A-B-T gives 6, 7, 2 = 15 as well).
  (c) A1: all eight cuts {S, A, B} 25, {S, A} 28, {S, A, B, C} 28, {S} 30, {S, B} 32, {S, A, C} 37, {S, B, C} 44, {S, C} 48; maximum flow 25.
  (d) A2: festival cuts as f02 author note (a); maximum 17.
  (e) Stadium: 60 000 fans in 5 hours is 60 000 ÷ 300 = 200 per minute (f04 works it).
  (f) Counting cuts: with n middle points there are 2ⁿ cuts (said as "doubles with each point", not as a power).

Main question: *Three cuts give three different ceilings. How does the minimum cut prove the maximum flow, and how do we find it?*
Entry knowledge (f02; f01): the saturated edges method; cuts and their capacities.
Stops after: why the smallest cut limits the flow, the theorem, listing cuts, a middle minimum cut, the shortcut, impossible claims.
Handoff: the stadium gates, "60 000 fans in 5 hours: will 190 a minute be enough?" (f04).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): capacity blue; flow teal; saturated amber; cuts violet; back edges grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · NETWORK FLOW". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three cuts, three ceilings
> Here's the traffic from the motorway exit to the shopping centre car park, in cars per minute, with three cuts drawn. Every cut is a ceiling on the traffic, but these three are different sizes, even on the same roads. So which one actually tells us how many cars can get through in a minute? How does the minimum cut prove the maximum **flow**?

Visual: opens on f02's final frame exactly. On the first sentence "Next" fades. On "three cuts" the three violet dashed lines pulse in turn. On "a ceiling" grey chip "recall: flow ≤ every cut". On "different sizes" three empty sum boxes appear beside "cut 1", "cut 2", "cut 3". On "flow" (bold) heading "Maximum flow, minimum cut" writes.

### 2. three cuts, worked out
> Work out each cut, counting only the edges that cross it forwards. Cut one, around the exit, crosses thirty and twenty-five, which is **fifty-five**. Cut three, around everything except the car park, crosses twelve and twenty-eight, which is **forty**. Cut two goes through the middle streets. It crosses A to C, ten, B to C, twelve, and B to T, twelve, which is only **thirty-four**.

Visual: stage change. The network enlarges (about 1,500 × 600 px; the plate a badge). On "forwards" (hand tag "forwards only"). On "Cut one" cut 1 turns solid, its source side tints pale violet, S→A and S→B glow; on "fifty-five" (bold) its box reads "30 + 25 = 55". On "Cut three" the tint moves to S, A, B, C; B→T and C→T glow; on "forty" (bold) "12 + 28 = 40". On "Cut two" the tint moves to S, A, B; A→C, B→C, B→T glow; on "thirty-four" (bold) "10 + 12 + 12 = 34". The three boxes stay: 55, 34, 40.

### 3. every car crosses every cut
> Here's why the smallest one matters. Every car from the exit to the car park has to cross every cut. So the traffic can't be more than fifty-five, and it can't be more than forty, and it can't be more than thirty-four. All three are true, but the smallest cut is the tightest ceiling. So at most thirty-four cars a minute can reach the car **park**.

Visual: simulation 1. All three cut lines solid violet. On "Every car" one dot drives S→B→C→T; at each cut line the crossed edge flashes violet and a small tally ticks under that cut's box (hand tag "every car crosses every cut"). On "can't be more than fifty-five" a violet ceiling bar at 55 drops over a flow gauge beside the network; then 40; then 34, each lower. On "tightest ceiling" the 34 bar thickens (hand tag "smallest = tightest"). On "park" (bold) the gauge reads "at most 34 cars per minute".

### 4. the theorem
> Can the traffic actually reach thirty-four? Use the saturated edges method. S to A to C to T sends ten. S to B to T sends twelve, and S to B to C to T sends twelve more. That's **thirty-four**, and every path is now blocked. The flow equals the smallest cut. This always happens, and it's called the maximum-flow minimum-cut theorem. The most that can flow through a network equals the capacity of its smallest cut. Nothing can beat the smallest cut, and with the right choice of paths, the method always reaches **it**.

Visual: simulation 3 beside the network. On "S to A to C to T" the path lights and fills (10/30, 10/10 "full", 10/28); on "S to B to T" (12/25, 12/12 "full"); on "twelve more" (24/25, 12/12 "full", 22/28). On "thirty-four" (bold) the flow counter "34" (teal, 52 px), and the three full edges are exactly cut 2's edges. On "equals the smallest cut" the two-pan balance: flow 34 on one pan, minimum cut 34 on the other, level. On "maximum-flow minimum-cut theorem" a framed line writes, 48 px: "maximum flow = minimum cut" (hand tag "max flow = min cut"). On "it" (bold) a grey chip "if no cut matches, try another order".

### 5. worked example: list every cut
> Here's a worked example. To be sure you've found the smallest cut, list them all. Each middle point is either on the source side or the sink side. With two middle points, that's four cuts. S on its own crosses ten and seven, **seventeen**. S and A crosses seven, three and six, **sixteen**. S and B crosses ten and nine, which is **nineteen**, because A to B points back and isn't counted. And S, A and B crosses six and nine, **fifteen**. The minimum cut is fifteen, so the maximum flow is fifteen. As a check, the method sends six, then three, then six, which is fifteen. Picking the first cut you drew, seventeen, is the slip. Only the smallest cut gives the **answer**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the capacity of every cut, and use the minimum cut to state the maximum flow." Givens card: "S→A 10, S→B 7, A→T 6, B→T 9, A→B 3" (blue, 40 px). The network at the right (about 820 × 440 px). On "either on the source side or the sink side" A and B each flip a small "S side / T side" toggle (hand tag "each point: one side or the other"); on "four cuts" (hand tag "2 points: 4 cuts"). Rows, 48 px, each with its tint on the network: "{S}: 10 + 7"; on "seventeen" (bold) "= 17". "{S, A}: 7 + 3 + 6"; on "sixteen" "= 16". "{S, B}: 10 + 9"; on "nineteen" "= 19", with A→B grey "not counted". "{S, A, B}: 6 + 9"; on "fifteen" (bold) "= 15". Framed answer (green): "minimum cut 15, so maximum flow 15". Check row "6 + 3 + 6 = 15 ✓". On "slip" a red slip "17, the first cut drawn"; on "answer" (bold) it is crossed (caption "only the smallest cut gives the maximum").

### 6. eight cuts, and one in the middle
> The traffic network has three middle points, so the number of cuts doubles again, to eight. Step through them all, and keep the smallest so far. Fifty-five, forty-five, fifty-four, thirty-four, forty, sixty-three, seventy, eighty-three. The smallest is still thirty-four, and it isn't next to the exit or the car park. It's in the middle **streets**. The minimum cut can be anywhere, so checking only the cuts beside the source and the sink isn't **enough**.

Visual: stage change: simulation 2 on the traffic network (about 1,500 × 600 px). On "doubles again, to eight" (hand tag "3 points: 8 cuts"). The tint steps through the eight sets on the spoken numbers, each sum writing (violet, 44 px): {S} 55, {S, A} 45, {S, B} 54 (A→B grey), {S, A, B} 34, {S, A, B, C} 40, {S, A, C} 63, {S, B, C} 70, {S, C} 83; the badge "smallest so far" sits on 55, moves to 45, then to 34, and stays (hand tag "smallest so far"). On "streets" (bold) the tint returns to {S, A, B} and the middle streets glow (hand tag "in the middle"). On "enough" (bold) the cuts beside S (55) and beside T (40) flash grey.

### 7. the shortcut: a flow and a cut together
> You won't always need every cut. Here's the shortcut. Find a flow with the saturated edges method, then look for one cut with the same value. At the stadium, the method found a hundred and ninety people a minute, and the cut at the two gates is also a hundred and **ninety**. No flow can beat any cut, and no cut can be smaller than any flow. So when a flow and a cut are equal, the flow is the maximum and the cut is the minimum, both proved at **once**.

Visual: stage change: the stadium network (small plate behind, about 1,300 px) with f02's A2 flows (100/120, 90/90 "full", 20/30, 80/80 "full", 110/110 "full") and the flow counter "190". On "one cut with the same value" a violet line wraps S, A, B; A→T and B→T glow; on "ninety" (bold) "80 + 110 = 190". The balance: flow 190 and cut 190, level. On "both proved" (hand tag "flow = cut: both proved") framed (green): "maximum flow 190 = minimum cut 190". On "once" (bold) the balance clicks level.

### 8. memory aid
> Here's the summary. The most that can flow equals the smallest cut. Find a flow, find a cut, and when they're equal, you're **done**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the balance with flow and cut level. Main line, hand font 56 px: "Maximum flow = minimum cut." On "done" the key line, 40 px: "A flow equal to a cut proves both." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A network has edges S to A, sixteen, S to B, fourteen, A to B, five, A to C, nine, B to C, six, B to T, ten, and C to T, eighteen. Find the capacity of the cut with S, A and B on the source side. Find the capacity of the cut with only T on the sink side. Then, given that every other cut is at least twenty-eight, use the maximum-flow minimum-cut theorem to state the maximum flow. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A network has edges S→A (16), S→B (14), A→B (5), A→C (9), B→C (6), B→T (10) and C→T (18). (a) Find the capacity of the cut with S, A and B on the source side. (b) Find the capacity of the cut with only T on the sink side. (c) Every other cut has a capacity of at least 28. Use the maximum-flow minimum-cut theorem to state the maximum flow." The network drawn (no cut lines). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The first cut crosses A to C, B to C and B to T, nine plus six plus ten, **twenty-five**. The cut at the sink crosses B to T and C to T, ten plus eighteen, **twenty-eight**. Every other cut is at least twenty-eight, so the minimum cut is twenty-five, and so is the maximum flow. Giving twenty-eight, the cut at the sink, is the slip. The smallest cut **wins**.

Visual: the card shrinks to the top (30 px). On "twenty-five" (bold) the tint on {S, A, B}, framed "(a) 9 + 6 + 10 = 25" (green). On "twenty-eight" (bold) the tint on {S, A, B, C}, framed "(b) 10 + 18 = 28" (green). Framed "(c) minimum cut 25, so maximum flow 25" (green). On "slip" a red slip "(c) 28, the cut at the sink"; on "wins" (bold) it is crossed (caption "the smallest cut wins: 25"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The festival's water network has pipes S to A, twelve, S to B, ten, A to B, four, A to C, seven, B to C, five, B to T, six, and C to T, eleven, in kilolitres an hour. The organisers claim they can deliver eighteen kilolitres an hour to the campground taps. Use a cut to show this is impossible. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The festival's water network has edges S→A (12), S→B (10), A→B (4), A→C (7), B→C (5), B→T (6) and C→T (11), in kilolitres per hour. The organisers claim they can deliver 18 kL per hour to the campground taps (T). Use a cut to show this is impossible." The network drawn; picture slot: the festival tank plate (about 260 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The cut with only the taps on the sink side crosses B to T and C to T, six plus eleven, which is **seventeen**. Every litre has to cross that cut, so at most seventeen kilolitres an hour can reach the taps, and eighteen is impossible. Saying twenty-two leaves the tank, so eighteen is fine, is the slip. The tightest cut limits the **flow**.

Visual: the card shrinks to the top. The tint wraps S, A, B, C; B→T and C→T glow; on "seventeen" (bold) "6 + 11 = 17" and framed (green): "17 < 18: the claim is impossible". A violet wall "17" drops in front of the taps (hand tag "above a cut: impossible"). On "slip" a red slip "12 + 10 = 22 leaves the tank, so 18 is fine"; on "flow" (bold) it is crossed (caption "the tightest cut limits the flow: 17"). Hold about 1 s.

### 13. handoff: the stadium gates
> Back to the stadium, where we started this topic. Its maximum flow is a hundred and ninety people a minute, set by the cut at the two gates. On grand final day, sixty thousand fans need to get in within five hours. Will a hundred and ninety a minute be **enough**?

Visual: board clear to the final frame (decisions file section 2). The stadium plate filling the left and centre; the five arrows with capacities (120, 90, 30, 80, 110) and labels S, A, B, T; on "set by the cut at the two gates" the gates' cut drawn violet with "190". On "sixty thousand fans" a coded crowd counter at the stands "0 of 60 000 fans" (44 px); on "five hours" a coded clock "5 hours" (40 px). On "enough" (bold) chips "60 000 fans in 5 hours: will 190 a minute be enough?" (40 px), "Next" and "?". No demand per minute is worked out. Hold about 2 s. This is f04's opening; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- All flow crosses every cut, so flow ≤ every cut.
- Maximum flow = minimum cut (the maximum-flow minimum-cut theorem).
- List cuts: each middle point on one side or the other (3 points: 8 cuts).
- The minimum cut can be in the middle, not just at S or T.
- A flow equal to a cut proves both. A claim above a cut is impossible.

Memory aid (framed card, right side, as in scene 8): *Maximum flow = minimum cut.* Key: *A flow equal to a cut proves both.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame: f04 opens on it.

## Teaching checks

- **Does it explain causes?** Why the smallest cut: every car crosses every cut (3). Why the method reaches it: it fills paths until a cut is full (4). Why 4 and 8 cuts: each middle point has two choices (5, 6). Why a matching flow and cut prove each other (7). Why a claim above a cut is impossible (A2).
- **Misconceptions addressed:** the largest or first cut (5, A1); only the cuts at S and T (6); a back edge counted (5); a ceiling from the source alone (A2); "blocked, so maximum" (4, "the right choice of paths").
- **Visual standard, item by item:** 1 the car park plate, the stadium plate, the festival tank plate; 2 a new stage every 30 to 60 s; 3 a car crossing every cut, the tint cycling with its badge, the balance levelling; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the badge stopping in the middle.
- **One idea at a time:** three cuts (2), why the smallest (3), the theorem (4), listing (5), the middle (6), the shortcut (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 26 s and 25 s.
- **Avoided double teaching:** f01's cut rule and f02's method are recalled in chips; the method's run in scene 4 is quick.
- **Syllabus coverage:** `ci0d82df6b`: "Solve small-scale network flow problems" (4, 5, A1, A2) "including the use of applying the maximum-flow minimum-cut theorem" (4, 5, 7, A1 (c), A2).
- **Out of scope by design:** changing capacities and demand (f04); backward flow.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A network has edges S→A (16), S→B (14), A→B (5), A→C (9), B→C (6), B→T (10) and C→T (18). (a) Find the capacity of the cut with S, A and B on the source side. (b) Find the capacity of the cut with only T on the sink side. (c) Every other cut has a capacity of at least 28. Use the maximum-flow minimum-cut theorem to state the maximum flow."
Model answer: (a) A→C 9 + B→C 6 + B→T 10 = 25. (b) B→T 10 + C→T 18 = 28. (c) The minimum cut is 25, so the maximum flow is 25. Classic mistake (crossed): "(c) 28, the cut at the sink".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "The festival's water network has edges S→A (12), S→B (10), A→B (4), A→C (7), B→C (5), B→T (6) and C→T (11), in kilolitres per hour. The organisers claim they can deliver 18 kL per hour to the campground taps (T). Use a cut to show this is impossible."
Model answer: the cut with only T on the sink side has capacity B→T 6 + C→T 11 = 17 kL per hour. All water reaching T crosses this cut, so at most 17 kL per hour can reach T: 18 is impossible. Classic mistake (crossed): "12 + 10 = 22 leaves the tank, so 18 is fine".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Traffic cuts | 55, 45, 54, 34, 40, 63, 70, 83 (in the order {S}, {S, A}, {S, B}, {S, A, B}, {S, A, B, C}, {S, A, C}, {S, B, C}, {S, C}) | 2, 3, 6 |
| Traffic flow | 10 + 12 + 12 = 34 | 4 |
| Site we-1 | cuts 17, 16, 19, 15; flow 6 + 3 + 6 = 15 | 5 |
| Stadium | flow 190; gates cut 80 + 110 = 190 | 7, 13 |
| A1 | 9 + 6 + 10 = 25; 10 + 18 = 28; maximum 25 | 9, 10 |
| A2 | 6 + 11 = 17 < 18; 12 + 10 = 22 (crossed) | 11, 12 |
| Final frame | 60 000 fans; 5 hours; 190 per minute | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: every cut enumerated and the maximum flow found independently by augmenting paths); Codex to re-check.

- Traffic: cuts as "Numbers used"; maximum flow 34; run S-A-C-T 10, S-B-T 12, S-B-C-T 12.
- Site we-1: cuts {S, A, B} 15, {S, A} 16, {S} 17, {S, B} 19; maximum flow 15.
- Stadium: maximum flow 190; smallest cut {S, A, B} 190.
- A1: smallest cut 25; next 28 ({S, A} and {S, A, B, C}); maximum flow 25.
- Festival: smallest cut 17; maximum flow 17.

## Memory aid check

- **"Maximum flow = minimum cut."** with key line **"A flow equal to a cut proves both."** The theorem in the syllabus's words, and the site's card 05 reasoning. Meaning, as said in scenes 3, 4, 7 and 8. Assumptions checked: one source and one sink; capacities are the only limits; cuts count forward edges only; the flow is found with the right choice of paths (f02's order trap). It helps a new case: a network where the method reaches 25 and a cut of 25 is found is solved without listing the other cuts.
- **Considered, not used:** "The weakest link sets the flow" (a path idea, not a cut idea; it confuses the bottleneck with the cut).

## Narration length estimate

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,004 characters**, 14 scene headings. Characters per scene (1 to 14): 340, 372, 345, 512, 653, 450, 447, 129, 414, 348, 326, 333, 260, 75.

At 13.3 characters per second the speech is about 376 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the three sums (2), the car and the ceilings (3), the run and the balance (4), the board's tints (5), the eight-cut cycle (6), the stadium balance (7) and the counter (13) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 491 s**, under the 570 s cap. Feedback speech: about 26 s and 25 s.

Reserve trims if the voiced take runs long: scene 5's check sentence (about 5 s; the row stays); scene 3's middle sentence (about 7 s; the bars still drop).

## Scene list and build ids

Lesson key `m-s12f03` (route math-s12-f03). Explainer folder `src/explainer/lessons/math-s12-f03`; build inputs in `docs/production/claude-pm/lessons/math-s12-f03/` (at voicing).

In order (14 scene headings): hook-three-cuts, three-cuts-summed, every-car-every-cut, the-theorem, worked-list-cuts, eight-cuts-middle, flow-and-cut-shortcut, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-stadium-gates, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | f02's frame; three cuts |
| 25 to 55 s | 2 | The three cuts summed |
| 55 to 85 s | 3 | A car crosses every cut; ceilings drop |
| 85 to 135 s | 4 | The method reaches 34; the theorem |
| 135 to 200 s | 5 | g01 board: four cuts listed |
| 200 to 240 s | 6 | Eight cuts cycled; the middle minimum |
| 240 to 275 s | 7 | The shortcut on the stadium |
| 275 to 290 s | 8 | Framed memory card |
| 290 to 400 s | 9 to 12 | Question cards and countdowns, then feedback |
| 400 to 420 s | 13 | The stadium gates and the crowd counter |
| 420 to 465 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: f02's last frame continues into 1; 1 to 2 stage change (the network enlarges); 2 to 3 camera continue; 3 to 4 camera continue (the balance slides in); 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change (the stadium); 7 to 8 stage change; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-f03-learning-review.md`, `science_check` = `checks/m-s12-f03-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the car park is f02's brief, the stadium c06's and the festival tank f01's; no other plate is needed.

Need (painted): none new.

Coded: the network, cut lines, tints, sums, the badge, the car dot and tallies, the ceiling bars, the balance, the board, question cards, the countdown, the crowd counter and clock, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `FlowModel`, `FlowNetwork`, `CutLine`, the f02 run and counter-and-cut lock.

Additions (kit-needs file, network flow item 3):
1. **CutLine `cycleCuts`**: every source-side set in a given order, each with its live sum, and a "smallest so far" badge. Check: the traffic order gives 55, 45, 54, 34, 40, 63, 70, 83 and the badge ends on 34.
2. **Cut tallies** (small): a dot's route lights each cut it crosses and ticks that cut's tally.
3. **Two-pan balance** (small, coded): flow on one pan, cut on the other, level when equal.
4. **Crowd counter and clock chips** (small; f04 uses them live).

## Codex asset brief (Maths S12 F03)

No new plate. The car park (f02's brief), the stadium (c06's) and the festival tank (f01's) are reused. Report nothing unless the build finds the stadium's walkways too busy for the five arrows and the cut line at 1,300 px.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script (every cut and an independent maximum flow), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly ("including the use of applying"), under the Standard 2 heading only.
3. Confirm the site's `we-1` keeps its numbers (17, 16, 19, 15; maximum 15).
4. Confirm the theorem is stated so f02's order trap stays true ("with the right choice of paths").
5. Confirm both attempts carry every demand and given (A1 states "every other cut is at least 28"), and neither card shows an answer.
6. Confirm scene 1 opens on f02's final frame and scene 13 matches section 2 of the decisions file (and, once written, f04's opening).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Maximum Flow, Minimum Cut | Year 12 Maths Standard 2

(Title length: 52 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson03.sa.html

Traffic heads from a motorway exit to a shopping centre car park, and three cuts give three different ceilings. Which one tells us how many cars can get through? Every car crosses every cut, so the smallest cut is the tightest limit. Learn the maximum-flow minimum-cut theorem, list every cut systematically, find a minimum cut in the middle of a network, prove an answer with a flow and a cut that match, and show that a claim bigger than a cut is impossible. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Network flow. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve small-scale network flow problems including the use of applying the maximum-flow minimum-cut theorem"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

Builds on: The Saturated Edges Method for Maximum Flow. Next: Capacity Changes and Meeting Demand in Flow Networks.

#Year12Maths #MathsStandard #NetworkFlow #HSCScience

## Open decisions

- **1. The shortcut on the stadium (root).** Scene 7 reuses f02's A2 (190) so the shortcut is shown on a network students have run; it also sets up f04's opening.
- **2. "Doubles" for the number of cuts (root).** The video says the count doubles with each middle point (4, then 8), not 2ⁿ; Codex reports if recent HSC papers ask for a count of cuts.

## Review notes

- Revision 1. Next: student learning review (trace from f02; check that "every car crosses every cut" makes the smallest cut feel inevitable, that the theorem is understood before it is named, that the one-side-or-the-other rule makes the four and eight cuts systematic, that the middle minimum is a surprise and not a confusion, that the shortcut is clear, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
