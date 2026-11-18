# math-s12-f03: How does the minimum cut prove the maximum flow?

Maths Standard research pack (Year 12, Network flow), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Network flow):

- `ci0d82df6b`: Solve small-scale network flow problems including the use of applying the maximum-flow minimum-cut theorem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered.

These are CMS codenames, not published content-point codes. Quote the point's wording exactly in descriptions ("including the use of applying" is the official text).

**Course:** Standard 2 only. Playlist order 91. **Standard 1:** not in the Standard 1 course (see f01).

**Entry knowledge:** math-s12-f02: `cia23e92d8` (saturated edges method; the cut check). math-s12-f01: `ci87d0361a` (cuts and their capacity, forward edges only).

**Prior video:** math-s12-f02.

**Start:** f02's final frame (proposed): the traffic network (motorway exit S to a shopping centre car park T, cars per minute) with three cut lines drawn, "which cut tells us the most cars that can get through?".

**Stop:** Every car from S to T must cross every cut, so the flow can never be more than any cut's capacity; the smallest cut is the tightest ceiling; the maximum-flow minimum-cut theorem: the maximum flow equals the capacity of the minimum cut (the saturated edges method reaches it); finding the minimum cut in a small network by listing the cuts systematically (for three middle nodes, eight cuts; often the sensible ones are enough, but say how many there are); the minimum cut can sit in the middle of a network, not only at the source or the sink (traffic: the three streets into C and the car park, 34); using a flow and a cut together: if a flow equals a cut, both are proved (the flow is the most, the cut is the smallest); a claim bigger than a cut is impossible. Changing capacities and demand are f04.

**Next:** math-s12-f04.

## 2. Site order, sections and worked examples

Read-only source: [network-flow/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson03.sa.html), SHA256 `59e939459228608fc7c8af3cc28a3a46d01cd06935bd90d83dca37e066cba875`. Sections used: `orient-max-flow-min-cut` (card 02), `apply-max-flow-min-cut` (card 05: why it is true, the systematic cut list, the quick check), `work-demand-examples` (`we-1`), `apply-min-cut-decisions` (SA 1). Also [lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson01.sa.html) (SHA256 `ff2e356c61e1ecd75877952bd054e101b212c33325ddc9283c6f178913496b5c`) SA 3 (d), the middle cut of 14.

### Source lesson03, card 05

"Why this is true: Every unit of flow from $S$ to $T$ must cross every cut at least once. So no flow can exceed any cut's capacity. The minimum cut is the tightest restriction, flow cannot exceed it, and the saturated edges method shows it can always be achieved." Systematic list for S, A, B, T: "{$S$} | {$A,B,T$} ... {$S,A$} | {$B,T$} ... {$S,B$} | {$A,T$} ... {$S,A,B$} | {$T$}".

### Source lesson03, `we-1`; lesson01 SA 3 (d)

`we-1`: "Network: $S \to A$ (10), $S \to B$ (7), $A \to T$ (6), $B \to T$ (9), $A \to B$ (3). (a) Calculate the capacity of all possible cuts." ("17", "16", "19 (note: $A{\to}B$ is backward, not counted)", "15"; "Minimum cut = $\{S,A,B\}|\{T\}$, capacity 15"; saturated edges check 6 + 3 + 6 = 15). Lesson01 SA 3 (d): "$\{S,A,B,D\} \mid \{C,T\}$ is lower still: its forward edges are $A \to C$ (6) and $D \to T$ (8), capacity 14 ... the maximum flow is 14".

## 3. Recalculation

- `we-1`: cuts 17, 16, 19, 15; maximum flow 15. SA 1: cuts 14, 16, 15, 17; maximum 14. Lesson01 SA 3: 16 cuts; minimum 14 at {S, A, B, D}.
- Traffic (invented, cars per minute): S→A 30, S→B 25, A→B 10, A→C 10, B→C 12, B→T 12, C→T 28. All eight cuts: {S, A, B} 34 (A→C 10 + B→C 12 + B→T 12), {S, A, B, C} 40, {S, A} 45, {S, B} 54 (A→B points back), {S} 55, {S, A, C} 63, {S, B, C} 70, {S, C} 83. Maximum flow 34 (checked by augmenting paths).
- Question 1: S→A 16, S→B 14, A→B 5, A→C 9, B→C 6, B→T 10, C→T 18. Cuts: {S, A, B} 25, {S, A} 28, {S, A, B, C} 28, {S} 30, {S, B} 32, {S, A, C} 37, {S, B, C} 44, {S, C} 48. Maximum flow 25.
- Question 2: the festival network (f02): cut into T is 6 + 11 = 17, so 18 kL per hour is impossible.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`: every cut enumerated and the maximum flow found independently). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Taking the largest cut, or the first cut found, as the maximum flow.
- Only checking the cuts next to S and T (the minimum can be in the middle).
- Counting a backward edge in a cut's capacity.
- Thinking a cut must be a straight line, or must cut edges and not separate nodes (state the two sides).
- Believing a flow is the maximum just because no unsaturated path is left (f02's trap).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The traffic network over a coded street map; cars as dots; three cut lines appear, each with its live sum, then all eight cuts are cycled through as tinted regions with a running "smallest so far".
- "Every car crosses every cut": a single dot's route crossing each of the three drawn cuts, lighting the crossing edge each time.
- The theorem as a two-pan balance: flow found (34) on one side, smallest cut (34) on the other, level.
- A claim tester: "18 kL per hour?" on the festival network, the 17 cut appearing as a wall.

Advanced reuse: none. New kit: `CutLine` with a `cycleCuts` mode (every source-side set in turn, live sum, smallest-so-far badge), `FlowNetwork` dots (see kit needs). Plates: a shopping centre car park entrance and street corner (new `ms12-` plate, optional; painted for f02's final frame if used).

## 6. Two original candidate practice questions

### Question 1

A network has edges S→A (16), S→B (14), A→B (5), A→C (9), B→C (6), B→T (10), C→T (18). (a) Find the capacity of the cut with S, A and B on the source side. (b) Find the capacity of the cut with only T on the sink side. (c) Use the maximum-flow minimum-cut theorem to state the maximum flow, given that every other cut is at least 28.

**Worked answer:** (a) A→C 9 + B→C 6 + B→T 10 = 25. (b) B→T 10 + C→T 18 = 28. (c) The minimum cut is 25, so the maximum flow is 25.

### Question 2

The festival water network has edges S→A (12), S→B (10), A→B (4), A→C (7), B→C (5), B→T (6), C→T (11) in kL per hour. The organisers claim they can deliver 18 kL per hour to the campground taps (T). Use a cut to show this is impossible.

**Worked answer:** The cut with only T on the sink side has capacity B→T 6 + C→T 11 = 17 kL per hour. Every litre must cross this cut, so at most 17 kL per hour can reach T: 18 is impossible.

Only the question goes on the card (with the drawn network). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (c) "28, the cut at the sink", crossed, "the smallest cut wins: 25"; Question 2 "12 + 10 = 22 leaves the tank, so 18 is fine", crossed, "the tightest cut, not the first one, limits the flow").

## 7. Everyday anchors

- **Traffic through streets:** cars per minute from a motorway exit to a shopping centre, with the bottleneck in the middle streets (travel; invented, labelled).
- **Water through pipes at a festival:** the 17 kL per hour ceiling (events; from f02).
- **People through stadium gates:** the gate cut of 190 people per minute (sport; from f01).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "traffic" appears in Standard r10 (speed and school zones), a different idea. Claude picks; none is required. Dots, objects and arrows, never drawn people.

## 8. Site corrections and decisions for Claude

No new error in the sections used (MS-56's shortfall note is f04's).

Decisions for Claude:

- **Name the theorem plainly:** "the most that can flow equals the smallest cut", then its name once.
- **Systematic list:** show the full set of eight cuts once for a three-junction network, then the shortcut (the flow found by f02's method plus one matching cut).
- **Pace: fits.** Why it is true, a full cut list, a middle minimum cut and an impossible claim fit 7 to 8 minutes.
- Final frame: the stadium gates with a crowd counter, "60 000 fans in 5 hours: will 190 a minute be enough?" (f04's opening; 190 × 300 = 57 000, so no).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
