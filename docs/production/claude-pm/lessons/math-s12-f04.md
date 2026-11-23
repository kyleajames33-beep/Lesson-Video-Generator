# Maths S12 F04: What happens when an edge's capacity changes, and can the network meet demand? Demand in the network's units, sufficient or not with the spare or shortfall in context, widening an edge in the minimum cut until another cut takes over, an edge in no minimum cut changing nothing, a reduction, and the close of the core Year 12 course (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), f03's final frame (`math-s12-f03.md` scene 13) and root's Standard rulings (1 to 76; ruling 73: f04 ends the core Year 12 Standard course, points to the Year 12 Maths Standard playlist and promises no future videos; ruling 74 and MS-56: "at least the shortfall, then recheck"). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,161 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 503 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-f04-learning-review.md` (summary `../checks/m-s12-c01-f04-learning-review-summary.md`), with root's rulings 1 to 81 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-c01-f04-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 2 (the average rate is never said; ruling 81): **accepted**, the reviewer's clause placed at the start of its sentence. "Five hours is three hundred minutes. If the fans arrive evenly over that time, sixty thousand in three hundred minutes is two hundred people a **minute**." A small grey chip "arriving evenly: an average rate" sits beside the demand box. It is said once and nowhere else. Author note (e) is updated, and open decision 2 is closed.
2. Should fix, scene 12 ("Every video is in the Year 12 Maths Standard playlist"): **accepted** (root's decision 1). Spoken: "You'll find the rest of Year 12 Maths Standard in the playlist, so go back to any topic, any time, and keep **practising**." The screen line, the Decisions course-close and Handoff entries, and the YouTube description now read "Find the rest of Year 12 Maths Standard in the playlist". None of them claims that every video is already public. "The core Year 12 Maths Standard course is complete" and the banner stay, because they are about the content taught. The nine strand names on the card stand (root's decision 1).
3. Optional, scene 3 (why twenty): **applied**, reviewer's sentence. "Widening it by just ten, to ninety, would give exactly two hundred, with nothing to spare." A ghost handle shows A→T at 90 with the panel in grey (210, 210, 230, 200) and the flow bar exactly on the demand line ("spare 0"), then fades.

Open decisions 1 and 2 are closed (root's decision 1; ruling 81). The course close keeps ruling 73: no "Next" chip, and no promise of future videos, exam dates or results. Joins unchanged: scene 1 opens on f03's final frame, and scene 12's final frame changes only in its last screen line.

Narration 5,161 characters by script (Revision 1: 5,027), about 503 s with holds, 67 s under the 570 s cap; feedback speech about 25 s and 29 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fourth and last video of the Network flow strand and the last core video of Year 12 Mathematics Standard, playlist order 92. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-f04.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/network-flow/lesson03.sa.html` (SHA256 `59e939459228608fc7c8af3cc28a3a46d01cd06935bd90d83dca37e066cba875`; card 06, "Upgrading $A \to T$ from 8 to 12 lifts THIS cut to 12 + 7 = 19. Whether the maximum flow actually reaches 19 depends on the rest of the network"; card 07, "A water network has max flow 18 ML/day. The town needs 22 ML/day. Insufficient, shortfall = 22 − 18 = 4 ML/day."; "The maximum flow of X units per day is [sufficient / insufficient] to meet the demand of Y units per day."; `we-2`, C→T upgraded from 10 to 14 gives 12, not 14). The key-term line "the extra capacity that must be added to the minimum cut" (MS-56) is taught as "at least the shortfall, then recheck". Route entry: `math-s12-f04` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the stadium (f03's final frame) as the anchor; capacity handles; a demand gauge; the course-close frame.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces (fans are dots and a counter); one main question; one stage at a time; words before symbols (demand, sufficient, spare, shortfall in plain words first); g01 worked example (task strip, givens grouped, units first); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a grand final crowd, a festival's water on a hot day); Australian spelling; no em dashes; conversational narration; text above y = 950; no promise of future videos (ruling 73).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Network flow):
- `ci1c4ddbb0`: "Examine the impact of increasing or reducing the flow capacity of an edge in a network diagram"
- `cie0f5e510`: "Explain why the flow capacity of a network is or is not sufficient to meet demand in a variety of contexts"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

**Boundary:** starts from f03's final frame exactly (decisions file section 2): the stadium plate; arrows S→A 120, S→B 90, A→B 30, A→T 80, B→T 110 with labels S, A, B, T; the gates' cut in violet "190"; crowd counter "0 of 60 000 fans"; clock "5 hours"; chips "60 000 fans in 5 hours: will 190 a minute be enough?", "Next", "?". Recalls f03 (maximum flow = minimum cut; listing cuts) and f02 (the method) in a phrase or grey chip, and rates (per hour to per minute; Year 11 rates and r-strand conversions) in a grey chip. Teaches: demand (how much is needed) put in the network's units; sufficient when the maximum flow is at least the demand (spare = maximum − demand), insufficient otherwise (shortfall = demand − maximum), explained in a context sentence; widening an edge in the minimum cut raises the maximum flow, but only until another cut becomes the smallest (stadium north gate 80 to 100: 210; to 120: still 210, so +40 buys +20); widening an edge in no minimum cut changes nothing (S→A 120 to 150: 190); reducing an edge in the minimum cut lowers the flow by that amount (south gate 110 to 90: 170); after any change, recheck the cuts; the shortfall must be added at least, then rechecked. Stops at the end of the core Year 12 Standard course.

## Decisions

- **Anchor: the stadium (f03's handoff; c06 to f03).** Demand 60 000 ÷ (5 × 60) = 200 per minute; maximum 190; shortfall 10 (190 × 300 = 57 000, 3 000 short). North gate (A→T) 100: cuts {S} 210, {S, A, B} 210, {S, A} 220, {S, B} 230: 210, spare 10. North gate 120: {S} 210 is the minimum: 210. S→A 150: still 190. South gate (B→T) 90: 170.
- **The worked example is the stadium's demand check (g01).** Task strip, grouped givens (demand: 60 000 fans in 5 hours; network: maximum flow 190 people per minute), units first, compare, the site's sentence frame filled in context; crossed slip "60 000 > 190, so not enough" (caption "compare in the same units: 200 per minute against 190 per minute").
- **The upgrade rule (pack decision; MS-56).** "Only an edge in the minimum cut can help, and only until another cut catches up." The stadium's +40 for +20 is the surprise, shown with two cut sums racing on a capacity handle.
- **Reductions (syllabus "reducing").** The south gate's lane closure (110 to 90: 170) in scene 6, with one sentence for a reduction outside the minimum cut.
- **Course close (ruling 73).** Scene 12 closes the core course: the stadium's flow counter at 210 against the demand of 200, then the Year 12 Maths Standard playlist card with nine strand lines ticked (the six from p08's Standard 1 card plus "The normal distribution", "Critical path analysis" and "Network flow"), "Year 12 Maths Standard: core videos complete" and "Find the rest of Year 12 Maths Standard in the playlist" (Revision 2, root's decision 1: no claim that every video is already public). No "Next" chip; nothing about future videos, exam dates or results. Standard 1 viewers were sent to the playlist at p08, so no Standard 1 panel.
- **Simulations (standard item 3).**
  1. **DemandGauge** (scenes 2 to 6; new kit part): a vertical gauge with a dashed ink demand line at 200 and a teal flow bar (190); the gap shown as an amber "shortfall 10" or an olive "spare 10"; a units chip converting "60 000 in 5 h" to "200 per min".
  2. **capacityHandle with live cut sums** (scenes 3 to 6; FlowNetwork + CutLine): dragging a gate's width changes its capacity label; the four cut sums update live in a small panel (violet), the smallest ringed; the flow bar follows the smallest sum and stops when another cut takes over.
  3. **Crowd dots and counter** (scenes 1, 12): dots stream through the gates; the counter "of 60 000" runs at the current flow (sped up, with a "× 60" chip so a minute passes in a second).
- **Colour roles (strand, fixed).** Capacity blue (the handle blue); flow teal; cuts and sums violet; demand dashed ink; spare olive; shortfall amber; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Gauge numbers 48 px; cut sums 44 px; working rows 48 px. Hand tags: "same units first", "× 60", "demand > flow: not enough", "shortfall = demand − flow", "in the minimum cut", "another cut caught up", "+40 for +20", "not in the minimum cut: nothing", "drops by the same", "recheck every cut", "at least the shortfall, then recheck". At most two live at once.
- **Stage changes (standard item 2).** f03's frame (1); g01 board, the demand check (2); widening the north gate to 100 (3); widening it to 120 (4); widening S→A (5); the lane closure (6); framed card (7); question cards (8 to 11); the gates open and the course-close card (12); key notes (13).
- **Worked example (g01 layout).** Scene 2: task strip "60 000 fans must enter the stadium within 5 hours. The walkway network has a maximum flow of 190 people per minute. Is the network sufficient to meet the demand? Explain."; givens card grouped: "demand: 60 000 fans in 5 hours", "network: maximum flow 190 people per minute (the gates' cut)"; rows "5 hours = 5 × 60 = 300 minutes", "60 000 ÷ 300 = 200 people per minute", "200 > 190: not sufficient", "shortfall = 200 − 190 = 10 people per minute", check row "190 × 300 = 57 000 < 60 000"; framed answer (the site's sentence frame): "The maximum flow of 190 people per minute is insufficient to meet the demand of 200 people per minute (a shortfall of 10 per minute)."; crossed slip "60 000 > 190, so not enough" (caption "compare in the same units").
- **Memory aid.** Framed card: "Only the minimum cut can help, until another cut catches up." Key line: "Same units, compare, then recheck every cut."
- **Visual surprise.** The handle drags the north gate from 100 on to 120, its cut sum climbs to 230, and the flow bar does not move: the plaza's cut (210) has taken over (4).
- **Plain meanings at first use.** Demand ("how much is needed"); sufficient ("enough"); spare ("left over"); shortfall ("how much short"); upgrade ("increase an edge's capacity").
- **Attempts (original, HSC style).** A1 (pack question 1): S→A 40, S→B 30, A→C 25, B→C 20, B→T 15, C→T 35, maximum 50: (a) C→T to 45 gives 55, not 60, because the cut {S, A} (30 + 25) is now smallest; (b) S→A to 50 gives 50, unchanged; crossed "(a) 60" (caption "another cut, 55, is now the smallest"). A2 (pack question 2): the festival's hot-day network (S→A 35, S→B 25, A→C 20, A→B 10, B→C 15, B→T 18, C→T 30; demand 52 kL per hour): (a) minimum cut 18 + 30 = 48 < 52, a shortfall of 4; (b) B→T to 24: the cut into T 54, the next smallest 55, so 54 ≥ 52, 2 spare; crossed "(a) 35 + 25 = 60 leaves S, so yes" (caption "the smallest cut sets the flow: 48").
- **Mistake scene:** none separate. Different units (2 crossed); upgrading the biggest or busiest-looking edge (5, said); the full upgrade assumed (4; A1 crossed); "sufficient" with no numbers or context (2, the sentence frame); the source's capacity read as the flow (A2 crossed); adding the shortfall without rechecking (MS-56; 3, said).
- **Cause chain taught, in order:** (1) demand and flow can only be compared in the same units, so convert first (2); (2) the maximum flow is the smallest cut (f03), so it decides whether demand is met (2); (3) widening an edge in the minimum cut raises that cut, so the flow rises (3); (4) but the flow is the smallest of all the cuts, so once another cut is smaller, it limits the flow (4); (5) an edge in no minimum cut can't raise the smallest cut (5); (6) reducing an edge in the minimum cut lowers that cut by the same amount, and it stays the smallest (6).
- **Entry knowledge (route):** math-s12-f03 (maximum flow = minimum cut); math-s12-f02 (the method); rates (per hour to per minute). Recalled in a phrase or grey chip.
- **Handoff (course close; ruling 73).** Scene 12's frame (decisions file section 2): no header strip (topic only; root ruling 23 Nov 2026: no course name on screen); the stadium plate at the left (about 900 px), its north gate drawn wider (A→T "100"), dots streaming through both gates, the flow counter "210 per minute" (teal) beside a dashed demand line "200" (hand tag "enough: 10 spare"); at the right a coded playlist card (about 820 × 640 px) headed "Year 12 Maths Standard playlist", nine strand lines with ticks ("Algebraic relationships", "Money: investments and loans", "Ratios and rates", "Trigonometry", "Bivariate data", "Probability", "The normal distribution", "Critical path analysis", "Network flow") and a line "revise any video, any time"; banner "Year 12 Maths Standard: core videos complete" (44 px); line "Find the rest of Year 12 Maths Standard in the playlist" (36 px). No "Next" chip; nothing about future videos.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Stadium: 5 × 60 = 300; 60 000 ÷ 300 = 200; 200 − 190 = 10; 190 × 300 = 57 000; 60 000 − 57 000 = 3 000. Gate 100: 210 (two minimum cuts, {S} and {S, A, B}); spare 10 per minute (3 000 in 5 hours). Gate 120: 210. S→A 150: 190. B→T 90: 170.
  (b) A1: cuts after C→T 45: {S, A} 55, {S, A, B} 60, {S, A, B, C} 60, {S} 70; maximum 55. After S→A 50: {S, A, B, C} 50 still smallest; 50.
  (c) A2: original cuts {S, A, B, C} 48, {S, A, B} 53, {S, A} 55, {S} 60; after B→T 24: {S, A, B, C} 54, {S, A} 55, {S, A, B} 59, {S} 60; maximum 54; spare 2.
  (d) The site's `we-2` (C→T 10 to 14 gives 12) and `we-3` (21 000 against 20 000) are not used; MS-56's point is made on the stadium (scene 4) and in A1.
  (e) "Enough" is judged as an average rate over the 5 hours (the network's maximum flow against the average demand); queues at the start are not modelled. Revision 2 (review finding 1, ruling 81): said once, in scene 2 ("If the fans arrive evenly over that time"), with the grey chip "arriving evenly: an average rate"; nowhere else.
  (f) The strand lines on the playlist card follow p08's card wording plus the three Standard 2 strands; Codex checks them against the playlist's real section names at build.

Main question: *Sixty thousand fans in five hours: is 190 a minute enough, and if not, which walkway should be widened? What happens when an edge's capacity changes, and can the network meet demand?*
Entry knowledge (f03; f02): maximum flow = minimum cut; the method; rate conversions.
Stops after: demand checks, widening and reducing edges, rechecking cuts. The core Year 12 course ends.
Handoff: none (course close; the playlist).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): capacity blue; flow teal; cuts violet; demand dashed ink; spare olive; shortfall amber; answer green; mistake red. Header strip "NETWORK FLOW" (topic only; root ruling 23 Nov 2026: no course name on screen) (scenes 1 to 11 and 13); scene 12 has no header strip (no course name; topic-only rule). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: sixty thousand fans
> It's grand final day. Sixty thousand fans need to get into the stadium within five hours, and the walkways can carry at most a hundred and ninety people a minute. Is that enough? And if it isn't, which walkway should be widened? Event organisers plan exactly this before every big game. What happens when an edge's capacity changes, and can the network meet **demand**?

Visual: opens on f03's final frame exactly. On the first sentence "Next" fades. On "Sixty thousand fans" the counter "0 of 60 000 fans" pulses; on "five hours" the clock pulses. On "a hundred and ninety" the gates' cut "190" glows violet with a grey chip "recall: maximum flow = minimum cut". On "widened" the five walkway arrows each flicker a small blue handle. On "demand" (bold) heading "Capacity changes and demand" writes.

### 2. worked example: is it enough?
> Here's a worked example. Demand means how much is needed, and to compare it with the network, it has to be in the same units. Five hours is three hundred minutes. If the fans arrive evenly over that time, sixty thousand in three hundred minutes is two hundred people a **minute**. The maximum flow is a hundred and ninety a minute. Two hundred is more than a hundred and ninety, so the network isn't sufficient. The shortfall is two hundred minus a hundred and ninety, ten people a **minute**. As a check, a hundred and ninety a minute for three hundred minutes is fifty-seven thousand fans, three thousand short. So in context, the maximum flow of a hundred and ninety people a minute is not enough for the demand of two hundred a minute, and about ten fans a minute would be left **waiting**. Comparing sixty thousand with a hundred and ninety is the slip. Always match the units **first**.

Visual: clear change to the g01 board. Task strip, 40 px: "60 000 fans must enter the stadium within 5 hours. The walkway network has a maximum flow of 190 people per minute. Is the network sufficient to meet the demand? Explain." Givens card grouped: "demand: 60 000 fans in 5 hours" (ink) and "network: maximum flow 190 people per minute" (teal), each in its own box. On "same units" hand tag "same units first". Rows, 48 px: "5 h = 5 × 60 = 300 min" (chip "× 60"); on "arrive evenly" a small grey chip "arriving evenly: an average rate" beside the demand box; "60 000 ÷ 300"; on "minute" (first bold) "= 200 people per minute". Simulation 1 beside the rows (about 420 × 520 px): the DemandGauge with a dashed line "demand 200" and a teal bar "flow 190". On "isn't sufficient" row "200 > 190: not sufficient" (hand tag "demand > flow: not enough"); on "minute" (second bold) row "shortfall = 200 − 190 = 10 per minute" and the gap fills amber "shortfall 10" (hand tag "shortfall = demand − flow"). On "fifty-seven thousand" check row "190 × 300 = 57 000 < 60 000". On "waiting" (bold) framed answer (green, 36 px): "The maximum flow of 190 people per minute is insufficient to meet the demand of 200 people per minute (a shortfall of 10 per minute)." On "slip" a red slip "60 000 > 190, so not enough"; on "first" (bold) it is crossed (caption "compare in the same units: 200 per minute against 190 per minute").

### 3. widen a gate in the minimum cut
> So let's widen something. The north gate, A to T, is in the minimum cut, so widen it from eighty to a hundred. The cut at the gates grows to a hundred plus a hundred and ten, which is two hundred and ten. But after any change, recheck the other cuts. The cut around the plaza is a hundred and twenty plus ninety, also two hundred and ten, and the others are bigger. So the new maximum flow is two hundred and **ten**, and that's enough, with ten people a minute to **spare**. We added twenty to cover a shortfall of ten. Widening it by just ten, to ninety, would give exactly two hundred, with nothing to spare. You always need at least the shortfall, and then a recheck.

Visual: stage change: simulation 2. The stadium network (about 1,250 × 600 px) with the DemandGauge at the right and a small panel of four cut sums (violet, 40 px): "{S} 210", "{S, A} 200", "{S, B} 230", "{S, A, B} 190" (ringed, smallest). On "north gate" A→T glows (hand tag "in the minimum cut"). On "eighty to a hundred" the blue handle drags A→T's label from 80 to 100; the panel updates live: "{S, A} 220", "{S, A, B} 210". On "recheck the other cuts" each sum flashes in turn (hand tag "recheck every cut"); "{S} 210" and "{S, A, B} 210" both ring. On "ten" (bold) the flow bar rises to 210, past the demand line. On "spare" (bold) the gap above the line fills olive "spare 10". On "just ten, to ninety" a ghost handle shows A→T at 90 with the panel in grey ("{S} 210", "{S, A} 210", "{S, B} 230", "{S, A, B} 200") and the flow bar exactly on the demand line ("spare 0"), then the ghost fades. On "at least the shortfall" a grey chip "add at least the shortfall, then recheck" (hand tag "at least the shortfall, then recheck").

### 4. a bigger upgrade, no bigger gain
> What if we widen the north gate even more, to a hundred and twenty? The cut at the gates becomes two hundred and thirty. But the cut around the plaza is still two hundred and ten, and now that's the smallest. So the flow stays at two hundred and **ten**. Forty more on the gate bought only twenty more people a minute. An upgrade helps only until another cut becomes the **smallest**.

Visual: camera continue. On "a hundred and twenty" the handle drags A→T on from 100 to 120; the panel: "{S, A, B} 230" climbs, "{S, A} 240"; the ring moves to "{S} 210" alone, and the plaza's two walkways glow violet (hand tag "another cut caught up"). On "ten" (bold) the flow bar stays at 210 while the gates' sum keeps climbing. On "Forty more" a row writes, 44 px: "gate +40, flow +20" (hand tag "+40 for +20"). On "smallest" (bold) the handle returns to 80 and everything resets to 190.

### 5. widening the wrong walkway
> Now widen the wrong walkway. The plaza to the north concourse, S to A, goes from a hundred and twenty to a hundred and fifty. It isn't in the minimum cut, so the gates still limit the flow to a hundred and **ninety**. Nothing changes at all, and the smallest cut doesn't even flicker. It's tempting to widen the busiest-looking walkway, but only an edge in the minimum cut can **help**.

Visual: camera continue. On "S to A" the handle drags S→A from 120 to 150; the panel: "{S} 240", "{S, B} 260", "{S, A} 200", "{S, A, B} 190" (still ringed). On "ninety" (bold) the flow bar stays at 190 with the amber shortfall still showing (hand tag "not in the minimum cut: nothing"). On "busiest-looking" S→A's dots thicken, then a grey tag "busy, but not the limit". On "help" (bold) the handle returns S→A to 120.

### 6. a lane closes
> Reducing works the same way in reverse. Say a lane closes at the south gate, so B to T drops from a hundred and ten to ninety. That gate is in the minimum cut, so the flow drops by the same twenty, to a hundred and **seventy**. That leaves a shortfall of thirty a minute. Reducing an edge that isn't in the minimum cut only matters if it pushes another cut below the minimum. So after any change, up or down, recheck the **cuts**.

Visual: camera continue. On "a lane closes" a coded barrier slides across part of the south gate; the handle drags B→T from 110 to 90; the panel: "{S, A, B} 170" (ringed), "{S, B} 210", "{S} 210", "{S, A} 200". On "seventy" (bold) the flow bar drops to 170 and the amber shortfall grows to 30 (hand tag "drops by the same"). On "another cut below the minimum" the panel's other sums pulse once. On "cuts" (bold) the barrier lifts and everything resets to 190.

### 7. memory aid
> Here's the summary. Match the units, then compare the demand with the minimum cut. To raise the flow, widen an edge in the minimum cut, and then recheck every **cut**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the cut-sum panel with its moving ring. Main line, hand font 52 px: "Only the minimum cut can help, until another cut catches up." On "cut" the key line, 40 px: "Same units, compare, then recheck every cut." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A network has edges S to A, forty, S to B, thirty, A to C, twenty-five, B to C, twenty, B to T, fifteen, and C to T, thirty-five. Its maximum flow is fifty. First, C to T is increased to forty-five. Find the new maximum flow, and explain why it isn't sixty. Then, instead, S to A is increased to fifty. What's the new maximum flow? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A network has edges S→A (40), S→B (30), A→C (25), B→C (20), B→T (15) and C→T (35). Its maximum flow is 50. (a) The capacity of C→T is increased to 45. Find the new maximum flow and explain why it is not 60. (b) Instead, the capacity of S→A is increased to 50. What is the new maximum flow? Explain." The network drawn. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The cut into T becomes fifteen plus forty-five, sixty. But the cut with S and A on the source side is thirty plus twenty-five, fifty-five, so the new maximum is **fifty-five**. Widening S to A changes nothing, because it isn't in the minimum cut, so the flow stays at **fifty**. Saying sixty is the slip. Another cut is now the **smallest**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "cut into T: 15 + 45 = 60"; "cut {S, A}: S→B 30 + A→C 25 = 55" (tint on S, A); on "fifty-five" (bold) framed "(a) 55" (green). On "fifty" (bold) framed "(b) 50: S→A is not in the minimum cut (15 + 35 = 50)" (green). On "slip" a red slip "(a) 60"; on "smallest" (bold) it is crossed (caption "another cut, 55, is now the smallest"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. On the hottest day, the festival campground needs fifty-two kilolitres of water an hour. The pipes are S to A, thirty-five, S to B, twenty-five, A to C, twenty, A to B, ten, B to C, fifteen, B to T, eighteen, and C to T, thirty, in kilolitres an hour. Is the network sufficient? Explain. Then show that increasing B to T to twenty-four kilolitres an hour meets the demand. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A festival's water network (kL per hour) has edges S→A (35), S→B (25), A→C (20), A→B (10), B→C (15), B→T (18) and C→T (30). On the hottest day the campground needs 52 kL per hour. (a) Is the network sufficient? Explain. (b) The organisers can upgrade one pipe. Show that increasing B→T to 24 kL per hour meets the demand." The network drawn; picture slot: the festival tank plate (about 240 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The smallest cut is into the taps, eighteen plus thirty, forty-eight, which is less than fifty-two. So it isn't sufficient, with a shortfall of **four**. With B to T at twenty-four, that cut becomes fifty-four, and the next smallest is fifty-five, so the maximum flow is fifty-four, enough with two to **spare**. Saying sixty leaves the tank, so yes, is the slip. The smallest cut sets the **flow**.

Visual: the card shrinks to the top. A small DemandGauge (dashed "52"). Row "cut into T: 18 + 30 = 48 < 52"; on "four" (bold) the amber gap "shortfall 4" and framed "(a) not sufficient: 48 < 52, shortfall 4 kL per hour" (green). Row "B→T 24: cut into T 24 + 30 = 54; next smallest {S, A} 25 + 20 + 10 = 55"; on "spare" (bold) the flow bar rises to 54, olive "spare 2", framed "(b) maximum flow 54 ≥ 52: sufficient" (green). On "slip" a red slip "(a) 35 + 25 = 60 leaves S, so yes"; on "flow" (bold) it is crossed (caption "the smallest cut sets the flow: 48"). Hold about 1 s.

### 12. the gates open: core course complete
> Back on grand final day, the north gate is widened, and two hundred and ten fans a minute stream in, more than the two hundred needed. And with that, the core Year 12 Maths Standard course is complete. You'll find the rest of Year 12 Maths Standard in the playlist, so go back to any topic, any time, and keep **practising**. Well done for working through it all.

Visual: board clear to the final frame (decisions file section 2). The header strip clears (no course name; topic-only rule, 23 Nov 2026). The stadium plate at the left (about 900 px) with A→T drawn wider "100"; on "two hundred and ten fans a minute" simulation 3: dots stream through both gates, the teal counter "210 per minute" beside a dashed "200" (hand tag "enough: 10 spare"), and the crowd counter runs "… of 60 000" (with a "× 60" chip). On "core Year 12 Maths Standard course is complete" the coded playlist card slides in at the right (about 820 × 640 px), headed "Year 12 Maths Standard playlist", and its nine strand lines tick in turn: "Algebraic relationships", "Money: investments and loans", "Ratios and rates", "Trigonometry", "Bivariate data", "Probability", "The normal distribution", "Critical path analysis", "Network flow"; the banner "Year 12 Maths Standard: core videos complete" (44 px) writes above. On "any topic, any time" the line "revise any video, any time" (32 px). On "practising" (bold) the line "Find the rest of Year 12 Maths Standard in the playlist" (36 px). No "Next" chip; nothing about future videos. Hold about 2 s. Scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Put demand in the network's units first (for example, per minute).
- Maximum flow ≥ demand: sufficient (spare = max − demand). Else shortfall.
- Widen an edge in the minimum cut: flow rises until another cut is smallest.
- Widen an edge in no minimum cut: no change.
- Reduce an edge in the minimum cut: flow drops by that much. Recheck all cuts.

Memory aid (framed card, right side, as in scene 7): *Only the minimum cut can help, until another cut catches up.* Key: *Same units, compare, then recheck every cut.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame of the core Year 12 Standard course.

## Teaching checks

- **Does it explain causes?** Why units first (2). Why the minimum cut decides sufficiency: it is the maximum flow (2). Why widening a minimum-cut edge helps (3). Why the help stops: the flow is the smallest of all cuts (4). Why a non-minimum edge does nothing (5). Why a reduction passes straight through (6).
- **Misconceptions addressed:** different units (2); the biggest or busiest edge upgraded (5); the full upgrade assumed (4, A1); "sufficient" with no numbers (2, the sentence frame); the source's capacity as the flow (A2); adding the shortfall without rechecking (3, MS-56).
- **Visual standard, item by item:** 1 the stadium plate, the festival tank plate; 2 a new stage every 30 to 60 s; 3 capacity handles with live cut sums and a moving ring, the demand gauge filling spare or shortfall, the crowd counter; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 2; 8 framed card and five bullets; 9 the gate's sum climbing while the flow bar stays still.
- **One idea at a time:** demand (2), a helpful upgrade (3), its limit (4), a useless upgrade (5), a reduction (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (A1 states the maximum of 50); 10 s each; feedback about 25 s and 29 s.
- **Avoided double teaching:** f03's theorem and cut listing are a chip; the panel lists the four cuts without re-deriving them.
- **Syllabus coverage:** `ci1c4ddbb0`: "the impact of increasing" (3, 4, 5, A1, A2 (b)) "or reducing the flow capacity of an edge" (6); `cie0f5e510`: "Explain why the flow capacity of a network is or is not sufficient to meet demand" (2, 3, A2) "in a variety of contexts" (a stadium crowd in people per minute; festival water in kL per hour).
- **Out of scope by design:** costs of upgrades; queueing over time (author note (e)).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A network has edges S→A (40), S→B (30), A→C (25), B→C (20), B→T (15) and C→T (35). Its maximum flow is 50. (a) The capacity of C→T is increased to 45. Find the new maximum flow and explain why it is not 60. (b) Instead, the capacity of S→A is increased to 50. What is the new maximum flow? Explain."
Model answer: (a) The cut into T becomes 15 + 45 = 60, but the cut with S and A on the source side is S→B 30 + A→C 25 = 55, so the maximum flow is 55. (b) 50, unchanged: S→A is not in the minimum cut (the cut into T, 15 + 35 = 50, is still the smallest). Classic mistake (crossed): "(a) 60".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 4 marks suggested).** "A festival's water network (kL per hour) has edges S→A (35), S→B (25), A→C (20), A→B (10), B→C (15), B→T (18) and C→T (30). On the hottest day the campground needs 52 kL per hour. (a) Is the network sufficient? Explain. (b) The organisers can upgrade one pipe. Show that increasing B→T to 24 kL per hour meets the demand."
Model answer: (a) The minimum cut is B→T 18 + C→T 30 = 48 kL per hour, less than 52: not sufficient, a shortfall of 4 kL per hour. (b) The cut into T becomes 24 + 30 = 54; the next smallest cuts are S, A against the rest (25 + 20 + 10 = 55) and S, A, B against C, T (20 + 15 + 24 = 59); the minimum is now 54 ≥ 52, so the demand is met with 2 kL per hour to spare. Classic mistake (crossed): "(a) 35 + 25 = 60 leaves S, so yes".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Demand | 5 × 60 = 300 min; 60 000 ÷ 300 = 200 per min; 200 − 190 = 10; 190 × 300 = 57 000 (3 000 short) | 1, 2 |
| North gate 100 | cuts {S} 210, {S, A} 220, {S, B} 230, {S, A, B} 210; flow 210; spare 10 | 3, 12 |
| North gate 120 | {S} 210, {S, A} 240, {S, B} 230, {S, A, B} 230; flow 210; +40 for +20 | 4 |
| S→A 150 | {S} 240, {S, A} 200, {S, B} 260, {S, A, B} 190; flow 190 | 5 |
| South gate 90 | {S} 210, {S, A} 200, {S, B} 210, {S, A, B} 170; flow 170; shortfall 30 | 6 |
| A1 | C→T 45: 60 and 55, so 55; S→A 50: 50 | 8, 9 |
| A2 | 48 < 52, shortfall 4; B→T 24: 54, next 55, spare 2 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: every cut and an independent maximum flow after each change); Codex to re-check.

- Stadium base: cuts 190, 200, 210, 230; maximum 190.
- A→T 100: cuts {S} 210, {S, A, B} 210, {S, A} 220, {S, B} 230; maximum 210.
- A→T 120: cuts {S} 210, {S, B} 230, {S, A, B} 230, {S, A} 240; maximum 210.
- S→A 150: cuts {S, A, B} 190, {S, A} 200, {S} 240, {S, B} 260; maximum 190.
- B→T 90: cuts {S, A, B} 170, {S, A} 200, {S} 210, {S, B} 210; maximum 170.
- A1: base 50; C→T 45: 55 ({S, A}); S→A 50: 50.
- A2: base 48; B→T 24: 54 (next {S, A} 55, {S, A, B} 59, {S} 60).
- 60 000 ÷ 300 = 200; 190 × 300 = 57 000; 210 × 300 = 63 000.
- Revision 2 (`work/brief-resolve-standard-cf/verify.py`, `python -I`, 46 checks, 0 failures): north gate 90 gives cuts 210, 210, 230, 200, so a maximum of 200 and nothing spare; north gate 100 gives 210, 10 spare; 60 000 ÷ 300 = 200 a minute as an average rate.

## Memory aid check

- **"Only the minimum cut can help, until another cut catches up."** with key line **"Same units, compare, then recheck every cut."** From the pack's upgrade rule and the site's card 06 ("Whether the maximum flow actually reaches 19 depends on the rest of the network") with MS-56's "at least the shortfall, then recheck". Meaning, as said in scenes 3 to 7. Assumptions checked: "help" means an increase; when two cuts tie for the minimum, an edge must lie in every minimum cut to help (scene 3's tie at 210 is not upgraded further); reductions of a minimum-cut edge pass through in full; "compare" means maximum flow against demand in the same units over the same period. It helps a new case: on the traffic network (f03), widening A→C from 10 to 16 lifts the middle cut to 40, but the cut at the car park is also 40, so the flow becomes 40 and stops.
- **Considered, not used:** "Fix the bottleneck" (a path idea; the limit is a cut).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,161 characters** (Revision 1: 5,027), 13 scene headings. Characters per scene (1 to 13): 365, 876, 663, 376, 378, 422, 163, 364, 329, 404, 387, 359, 75. Speech about 388 s; holds and settling unchanged from Revision 1 (below); total **about 503 s**, 67 s under the 570 s cap. Feedback speech: about 25 s and 29 s. The Revision 1 paragraph below is kept for the record.

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,027 characters**, 13 scene headings. Characters per scene (1 to 13): 365, 842, 572, 376, 378, 422, 163, 364, 329, 404, 387, 350, 75.

At 13.3 characters per second the speech is about 378 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the board and gauge (2), each handle drag and its panel (3 to 6) and the gates opening and the playlist card ticking (12) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 493 s**, under the 570 s cap. Feedback speech: about 25 s and 29 s.

Reserve trims if the voiced take runs long: scene 2's check sentence (about 7 s; the row stays); scene 6's third sentence (about 7 s).

## Scene list and build ids

Lesson key `m-s12f04` (route math-s12-f04). Explainer folder `src/explainer/lessons/math-s12-f04`; build inputs in `docs/production/claude-pm/lessons/math-s12-f04/` (at voicing).

In order (13 scene headings): hook-sixty-thousand, worked-demand-check, widen-gate, bigger-upgrade, wrong-walkway, lane-closes, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, course-complete, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | f03's frame; 60 000 fans |
| 25 to 100 s | 2 | g01 board: the demand check and gauge |
| 100 to 140 s | 3 | The north gate to 100: 210 |
| 140 to 170 s | 4 | To 120: still 210 |
| 170 to 200 s | 5 | The wrong walkway |
| 200 to 235 s | 6 | A lane closes: 170 |
| 235 to 250 s | 7 | Framed memory card |
| 250 to 365 s | 8 to 11 | Question cards and countdowns, then feedback |
| 365 to 395 s | 12 | The gates open; core course complete |
| 395 to 440 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: f03's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-f04-learning-review.md`, `science_check` = `checks/m-s12-f04-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the stadium (c06's brief) and the festival tank (f01's brief); no other plate is needed. The pack's "icons for the ten focus areas" become a coded playlist card with strand lines (no icons, matching p08's card).

Need (painted): none new.

Coded: the board, the gauge, handles, the cut-sum panel, the barrier, dots and counters, question cards, the countdown, the playlist card and banner, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `FlowModel`, `FlowNetwork`, `CutLine`, f03's crowd counter; p08's playlist card.

Additions (kit-needs file, network flow items 2 and 4):
1. **capacityHandle on FlowNetwork** editing FlowModel; a small **cut-sum panel** listing every cut's live sum with a ring on the smallest (two rings on a tie); the flow bar following the smallest sum. Check: every case in "Numbers to verify" is reached by one drag and returns cleanly.
2. **DemandGauge**: a dashed demand line, a teal flow bar, an amber shortfall or olive spare gap with labels; a units chip ("× 60").
3. **Playlist card with nine strand lines** (p08's card extended).

## Codex asset brief (Maths S12 F04)

No new plate. Report nothing unless the build finds the stadium's gates unreadable with a widened coded gate and two dot streams at about 900 px.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script (every cut and an independent maximum flow after each change), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm MS-56's correction is taught ("at least the shortfall, then recheck"), and the site's sentence frame is used in the worked example's answer.
4. Confirm both attempts carry every demand and given (A1 states the maximum of 50; A2 states the 52 kL per hour), and neither card shows an answer.
5. Confirm scene 1 opens on f03's final frame; confirm scene 12 promises no future videos, makes no claim that every video is already public (Revision 2), has no "Next" chip, and its strand lines match the playlist's real section names (ruling 73).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Capacity Changes and Meeting Demand in Flow Networks | Year 12 Maths Standard

(Title length: 77 characters by script; course suffix unified to "| Year 12 Maths Standard", 23 Nov 2026, coherence audit S5.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson03.sa.html

Sixty thousand fans need to get into a stadium in five hours, and the walkways carry at most 190 people a minute. Is that enough? Learn to put demand in the network's units, decide whether the flow capacity is sufficient, and explain the spare or shortfall in context. Then see what happens when an edge's capacity changes: widening an edge in the minimum cut raises the flow only until another cut becomes the smallest, widening any other edge changes nothing, and reducing a minimum-cut edge lowers the flow by the same amount. Always recheck every cut. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Network flow. Standard 2. The last core video of Year 12 Mathematics Standard.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Examine the impact of increasing or reducing the flow capacity of an edge in a network diagram"
"Explain why the flow capacity of a network is or is not sufficient to meet demand in a variety of contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

Builds on: Maximum Flow, Minimum Cut. Find the rest of Year 12 Maths Standard in the playlist.

#Year12Maths #MathsStandard #NetworkFlow #HSCScience

## Open decisions

- **1. The course-close card (root; ruling 73).** Closed in Revision 2: root's decision 1 (the nine strand names stand; the playlist line makes no claim that every video is public). Revision 1 text: Nine strand lines (p08's six plus three Standard 2 strands), no icons; Codex matches them to the playlist's real section names at build.
- **2. "Enough" as an average rate (root).** Closed in Revision 2: ruling 81 accepts the average rate, said once (scene 2). Revision 1 text: The demand check compares the maximum flow with the average demand over 5 hours (author note (e)); queues at the start are not modelled or mentioned.
- **3. The title (root).** Closed 23 Nov 2026: with the unified suffix "| Year 12 Maths Standard" (coherence audit S5) the title is 77 characters, under 80. Earlier text: 79 characters with the course suffix; a shorter alternative is "Meeting Demand in Flow Networks | Year 12 Maths Standard 2".

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-f04-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from f03; check that units come before the comparison, that the sentence frame makes "explain" concrete, that the +40 for +20 surprise is followable from the cut panel, that the wrong-walkway case and the reduction are clear, that the course close feels like an ending without promising more, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
