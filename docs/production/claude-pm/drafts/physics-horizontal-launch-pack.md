# Horizontal launch: why do both balls land together?

Unrecorded author draft, 25 October 2026. This is a complete proposed lesson pack for independent science and student learning review. It is not a recording brief, an implemented lesson, a playback review or release approval. No source, audio or media has been changed. The author of this pack must not provide its independent review.

## Learner question and boundaries

**Main question:** Why does a ball launched horizontally take the same time to fall as a ball dropped beside it?

**Intended learner:** a student beginning Year 12 Physics who knows velocity, acceleration and the constant-acceleration displacement equation. This is a focused bridge into Module 5 projectile motion, not the complete projectile-motion dotpoint or a practical investigation.

**Success:** explain the equal landing times using the same initial vertical velocity, vertical drop and gravitational acceleration; find the fall time from vertical motion; use that time to find a horizontal distance when horizontal velocity is constant.

**Entry knowledge:** velocity describes speed and direction; acceleration describes how velocity changes; metres, seconds, m/s and m/s²; substitution into `s = ut + ½at²` and taking a positive square root. Scene 2 checks and refreshes the first two ideas. The worked example recalls the equation before using it. If these ideas are unfamiliar, provide the prerequisite velocity/acceleration and constant-acceleration lessons before this one. Do not treat familiarity with a projectile diagram as evidence of those prerequisites.

**Start:** two identical balls released simultaneously from the same height, one dropped and one given an initial horizontal velocity. **Stop:** one vertical fall-time calculation and its horizontal-distance consequence. No angled launch, trigonometric resolution, maximum-height calculation, general range formula, optimisation, landing-velocity calculation or obstacle clearance.

**Next handoff:** resolving an angled initial velocity into horizontal and vertical parts. The next lesson must establish the nonzero initial vertical velocity before adapting this calculation. Do not apply the horizontal-launch `d = ½gt²` shortcut to an upward launch.

**Curriculum and cohort:** the [official NESA Physics Stage 6 (2017) page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017) identifies Advanced Mechanics as Year 12 Module 5 and says the 2017 course continues for Year 12 in 2027. That is the appropriate version for students beginning Year 12 in Term 4, 2026 for the 2027 HSC. The new course begins Year 11 in Term 1, 2027 and Year 12 in Term 4, 2027, with its first HSC in 2028. Checked 25 October 2026. The [official 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx) supports treating horizontal and vertical components separately with constant vertical gravitational acceleration and zero air resistance, and solving constant/uniformly accelerated motion problems. This lesson addresses that beginning, not every variable or practical requirement in the syllabus. Any later public description needs its own exact official dotpoint quotation and metadata review.

## Physical case and visual contract

Use identical small balls represented by their centres. A is dropped; B leaves horizontally. Release points are at the same height above one level landing surface. Release is simultaneous, initial vertical velocity is zero for both, gravity is uniform and air resistance is ignored. After release, gravity is the only force. The launch action has finished before the flight being compared. State the conditions in learner copy, rather than hiding them in notes.

For calculation use a **20 m vertical drop**, **B's horizontal velocity 6 m/s**, and **g = 10 m/s²**, explicitly described as a rounded teaching value. This is not a claim that local gravity is exactly 10. The worked fall time is 2 s; B travels 12 m horizontally. For the vertical calculation take downward as positive and let `d` mean distance fallen. The drawing's height above ground decreases as `d` increases. Keep those labels distinct.

Both centres follow the same vertical history. Use one physical time variable for both, mapped deterministically to the presentation clock. At physical times 0, 1 and 2 s, distances fallen are 0, 5 and 20 m; B's horizontal displacements are 0, 6 and 12 m. A stays below its own release point. Equal time intervals give equal horizontal steps and increasing vertical steps. Stop both at first contact with the common landing level; do not add a bounce. Account for the drawn radius consistently so apparent floor contact does not suggest different fall distances. Keep launch points separate enough to see both balls, without putting a cliff face through the dropped ball's path.

Use the existing light editorial Physics style. A has an outlined circle and persistent label `A: dropped`; B has a filled orange circle and `B: horizontal launch`. Blue denotes horizontal velocity, rose vertical velocity. Labels and arrow direction also convey meaning, so colour is not the sole identifier. Label velocity arrows explicitly; do not let a changing downward velocity arrow be mistaken for an increasing gravitational force. There is no horizontal force arrow after release. Keep an unobstructed caption band.

### Inspected reuse

Directly inspected these existing stills, rather than choosing by filename:

| Existing item | Actual appearance and decision |
| --- | --- |
| `src/explainer/physics/artifacts/site/stills/m5-elevated-launch-desktop.png` | Cream cliff and ground, orange falling projectile and trail, blue horizontal and rose vertical arrows, time/height readouts. Reuse its visual language and cliff composition. Adapt to two balls, 20 m and 6 m/s, one clock, uncluttered teaching labels and staged working. Remove the complete predicted trajectory and conclusion during the opening prediction. |
| `src/explainer/physics/module5/index.tsx`, `ElevatedLaunch` | Existing scene uses `trajectory(15, 0, 10)`, one ball and `duration * progress`. Reuse/adapt the drawing through the shared explainer, not as a finished lesson. Add the dropped ball and explicit scene phases. Derive both from the same physical time, including when the presentation pauses. |
| `src/explainer/physics/module5/model.ts`, `trajectory` | Supports `trajectory(6, 0, 20, 10)` and `trajectory(0, 0, 20, 10)`. Both yield a 2 s duration. Use model positions for motion and equal-time markers; presentation holds do not change the physics. This is a proposed integration, not code already written. |
| `src/explainer/physics/projectile/artifacts/desktop-launch.png` and `projectile/README.md` | The existing pilot shows an angled launch, component triangle and two velocity graphs. Its 16 m/s horizontal and +12 m/s vertical case is outside this lesson. Retain the component colour conventions, not the whole board or its equal-height flight-time solver. |
| `src/explainer/physics/course-kit.tsx` | Reuse shared arrows, dots, labels and panel styling inside `src/explainer`. Reflow calculation groups and practice conditions for phone width; do not shrink the entire desktop board. |

No new raster asset is required. A new paired-ball explanation and staged calculation are still needed. An existing still is not evidence of usable motion or a complete beginner explanation.

## Scene-by-scene script and action

All blockquoted text below is exact proposed narration. Screen copy is listed separately. Durations are planning estimates, to be replaced by measured narration and preview evidence. A shared clock and the stated cue phrases control the reveal order. Do not animate reading text word by word. Approximately 5 to 6 minutes including response and notes holds is a planning target, not an approval criterion.

### 1. Predict before we release (about 30 s, including a 5 s hold)

**Narration**

> Here are two identical balls at the same height. We release them at the same instant. A is simply dropped. B leaves horizontally, with no upward or downward velocity to start with. Ignore air resistance. Both will land on this level ground. Which lands first: A, B, or both together? Make a prediction.

**Screen:** the two stationary release positions, the level landing line, identities and three answer choices. Conditions: `Same height • Same release time • Initial vertical velocity = 0 • Ignore air resistance`. A small persistent `Uniform gravity` condition accompanies the comparison. No full trajectory, landing marks, fall-time value or verdict appears yet.

**Action and reuse:** adapt `ElevatedLaunch`. On “A is simply dropped”, point to A without releasing it. On “B leaves horizontally”, show only B's initial horizontal velocity arrow. After “Make a prediction”, begin a visible 5-to-0 countdown beside the choices. No movement or answer cue during this hold. At zero, transition by enlarging the release positions, retaining both identities. This is a prediction, not a scored exam question.

### 2. Separate the two directions (about 40 s, including a 4 s entry check)

**Narration before the hold**

> First, a quick check. Is velocity how something is moving, or how its motion is changing?

**Four-second countdown.** Show just the two choices. Reveal the answer after the countdown.

**Narration after the hold**

> Velocity tells us how fast and in which direction. Acceleration tells us how velocity changes. We can describe B's motion in two parts: across and down. At release, B is moving across, but neither ball is moving up or down. So both start with zero vertical velocity. Zero vertical velocity does not mean B is stationary. Its horizontal velocity is already there.

**Screen and action:** show `Velocity: speed and direction`, then replace the competing choice with `Acceleration: change in velocity`. On “across and down”, introduce separate horizontal and vertical guides through B. On “both start”, align a small `initial vertical velocity = 0` label with each ball. Keep the horizontal arrow on B, labelled `horizontal velocity`. No numerical calculation yet. If the entry check is not understood, the learning route must offer the prerequisite lesson, rather than treating the remainder as self-sufficient remediation.

### 3. Watch the same downward change (about 45 s)

**Narration**

> Once the balls are free, gravity accelerates both downward at the same rate. B's horizontal motion does not remove that downward acceleration. Watch them at the same times. After one interval, they are level. After another, they are still level, but both have fallen farther during that interval. Their downward velocities are increasing together. B also keeps moving across. Its path is longer, but it covers that path with an extra horizontal part of its velocity. A longer path does not make its fall take longer. They reach the ground together.

**Screen and action:** start both on “Once the balls are free”. Use one common physical clock. On “same times”, run a slowed comparison with identical time spacing, pausing briefly at physical t = 1 s and then t = 2 s. Thin horizontal joins connect simultaneous positions. Display `Motion slowed` while moving and `Same instant` at paired freezes. The 1 s snapshot is 5 m below release, the 2 s snapshot 20 m below release, although numerical drop labels wait for scene 5. Past-position dots are faint, limited to those two instants, and must not resemble additional balls in flight. Label rose arrows `vertical velocity`; both arrows have equal length at the same instant and grow together. Do not show an arrow at t = 0 with nonzero length. On “reach the ground together”, both stop together, then reveal `Same fall time`.

**Transition:** clear trails and velocity arrows, keep the two ground contacts and level line. The motion establishes the causal comparison before algebra. Stills alone cannot verify its effectiveness.

### 4. What has to be the same? (about 30 s)

**Narration**

> The matching fall is not a rule for every pair of thrown balls. Here, both have the same starting vertical velocity, the same distance to fall, and the same downward acceleration. That gives them the same vertical motion and the same fall time. If one starts upward, or has farther to fall, we must compare those vertical conditions again. For this horizontal launch, adding speed across does not change the fall time.

**Screen and action:** return to the release view. As each condition is spoken, point to the paired zero-vertical labels, shared drop bracket and equal `g` indicators. Build just three short rows: `Same vertical start`, `Same drop`, `Same gravity`. Keep `Ignore air resistance` visible. Do not animate an angled counterexample or introduce its equation. Retain this three-part test for the calculation transition, then clear it to make space for the givens.

### 5. Worked example: find the falling time (about 55 s)

**Narration**

> Let's put numbers on this. The balls fall twenty metres. B starts horizontally at six metres per second. Use g equals ten metres per second squared, a rounded value chosen to keep the arithmetic simple. First, find the time from the vertical motion. For this calculation, count distance fallen as positive downward. The constant-acceleration equation is s equals u t plus one half a t squared. Here the starting vertical velocity is zero, so that first term is zero. Calling the distance fallen d, we have d equals one half g t squared. Twenty equals five t squared. Divide by five: t squared equals four. The elapsed time is positive, so t equals two seconds. That is the fall time for both balls.

**Screen:** short task `Find the fall time`. Grouped givens `Vertical: d = 20 m; u_vertical = 0; g = 10 m/s² downward`. Keep a separate small case label `B: horizontal velocity 6 m/s` beside the diagram, not in the substitution group. A caption explains `g = 10 is a rounded teaching value` without requiring a second paragraph to read.

**Action:** mark the 20 m vertical drop on “twenty metres”. Introduce the downward-positive guide on its spoken cue. Show the general equation alone when named. On “first term is zero”, briefly associate `u_vertical = 0` with `ut = 0`, then replace the line with `d = ½gt²`. Reveal `20 = ½ × 10 × t² = 5t²`, then `t² = 4`, then `t = 2 s`, one reasoning stage per cue. Do not pre-display later working. Retain at most the current line and its immediately necessary earlier line. Place units beside givens and the final answer; internal substitution is using metre/second units. On “both balls”, place the same `2 s` at both landing points.

### 6. Use that same time across (about 30 s)

**Narration**

> Now keep the two-second result and look across. With no air resistance, there is no horizontal force after release, so B's horizontal velocity stays at six metres per second. In each second, it moves six metres across. Horizontal distance is horizontal velocity times time: six times two gives twelve metres. A travels no horizontal distance. Different horizontal journeys, but the same two seconds falling.

**Screen and action:** clear vertical algebra, retain `Fall time: 2 s` and the current case. Change the task to `How far does B move horizontally?`. Reveal `x = v_horizontal t`, then `x = 6 × 2 = 12 m` with the final unit. Re-run the shared-clock comparison in two equal 1 s steps, showing a 6 m horizontal segment for each. A stays at fixed horizontal position. Retain only the `2 s` clock and `12 m` horizontal bracket at the end. The horizontal and vertical drawing scales must agree if the trajectory is presented as geometrically to scale. This is constant-speed distance, not a new general projectile range formula.

### 7. Your turn: a different drop (about 50 s, including a 25 s response hold)

**Narration**

> Your turn. Two identical balls leave the same platform at the same instant, forty-five metres above level ground. A is dropped from rest. B starts horizontally at eight metres per second, with zero vertical velocity. Ignore air resistance and use a constant g of ten metres per second squared. Which ball lands first? Explain why, then calculate the fall time. Take twenty-five seconds, or pause for longer.

**Exact question card, present in full before the countdown:**

> Two identical balls are released simultaneously, 45 m above the same level ground.
>
> A: dropped from rest. B: launched horizontally at 8 m/s, with initial vertical velocity 0.
>
> Ignore air resistance. Use constant g = 10 m/s² downward.
>
> 1. Which lands first? Explain using the vertical motion.
> 2. Calculate the fall time.

**Action:** cleanly replace the 20 m worked case and its answers with this 45 m case before the prompt starts. Show the entire card alongside a stationary pair, drop bracket and level ground. Keep every condition and both question demands readable throughout the response. After the final spoken sentence, start a visible 25-to-0 countdown. No motion, answer marks, revealed formula, substituted numbers, answer captions, hints or trajectory endpoints during the hold. Retain the platform drawing, not the old `2 s` result. This is an original practice item, not a copied or purported official NESA question. If the phone layout cannot hold the drawing and complete card legibly, simplify the drawing before reducing type size.

### 8. Brief feedback (target 25 to 30 s)

**Narration**

> They land together. Both start with zero vertical velocity, fall forty-five metres, and have the same downward acceleration. Using d equals one half g t squared, forty-five equals five t squared. So t squared is nine, and both take three seconds. Cross out “B travels farther, so it takes longer.” Its horizontal motion adds distance without changing this vertical fall time.

**Screen and action:** reveal `Together` only after the response ends. Associate three short reason labels with the diagram, then show `45 = 5t² → t² = 9 → t = 3 s` in spoken stages. Finally show and cross out one classic mistake: `B travels farther, so it takes longer`. Under it show `Compare the vertical motion`. Do not turn this feedback into another full explanation, compute an unasked horizontal distance, or add extra misconceptions. Keep the prompt conditions available beside the short feedback. The exact measured voice must fit the intended brief feedback duration; shorten redundant phrasing if it exceeds 30 s, without changing a recorded take independently of its audio.

### 9. Key notes: what to write in your book (about 45 s, including a 35 s quiet hold)

**Narration**

> Here are the key notes. Pause if you want time to copy them. Next, we'll look at a launch that starts with an upward part as well as a horizontal part.

**Exact notes:**

> **Horizontal launch, ignoring air resistance**
>
> Same initial vertical velocity, same drop and same g give the same fall time.
>
> For a horizontal launch, initial vertical velocity is zero. With distance fallen positive downward: d = ½gt².
>
> Find time from the vertical motion. Then use x = v_horizontal t for constant horizontal velocity.

**Action:** remove the practice answers and build a quiet notes card with a small paired-ball sketch. All notes are visible before “Pause”. Follow the narration with 35 s of still, silent copying time and a discreet `Pause to copy` indicator. No new explanation or animated trajectories while students copy. End with a gentle fade, without treating this hold as a motion failure. If phone preview requires more space, use two stable notes pages with a clear pause opportunity on each, not small type or automatic scrolling.

## Implementation and review handoff

Use the shared `src/explainer` renderer and existing Physics primitives. Do not implement this on the frozen legacy slide engine or make a standalone prototype the release renderer. Convert this author pack into a **schema 4** teaching brief with exact lesson identifiers, entry/exit boundaries, scene purpose, reuse/adjust decisions, `motionRole`, `onScreenChange`, `motionTools`, transitions, narration cues, response countdowns and quiet holds. No machine-checked production brief exists for this draft yet.

Reading basis: `AGENTS.md`; `REPO-GUIDE.md`; `docs/production/teaching-visual-brief-template.md`; `docs/research/hsc-video-production-standard-2026-10-02.md`; `docs/research/library-implementation-plan.md`; `docs/production/teaching-templates.md`; `docs/animation-planning.md`; `docs/production/student-learning-review.md`; the Physics kit README/module models; and `docs/production/claude-pm/checks/codex-interim-physics-maths-assessment-review.md`. The existing assessment review's missing conditions and exposed-answer findings are addressed in the proposed prompt. Its flagged speed-scaling claim and unrelated site answer keys are not imported.

| Gate | Current state and required evidence |
| --- | --- |
| Independent science and student learning review | Pending on this exact pack. A different reviewer must trace the entry knowledge, causal explanation, equation recall, original practice and feedback. Repair blockers before recording. Authoring is not a review pass. |
| Production brief and source implementation | Pending. Create schema 4 brief, implement paired model-based motion, stage calculations and condition-complete answer-free holds. Run the recording-stage brief check on the exact implementation. |
| Pre-recording visual review | Pending. Inspect desktop and phone layout and short silent playback. Verify equal-time vertical positions and simultaneous contact, distinct velocity labels, unclipped units, readable full practice conditions and caption space. Still fit does not approve motion or teaching. |
| Paid narration | Not authorised by this draft. Root must resolve the recording gate and select exact narration inputs before generating speech. No audio exists for this pack. |
| Exact voiced preview and export | Pending. Align cue timing to measured narration; play the exact revision at playback speed. Independent student learning review must repeat on that preview. Check captions, question/feedback separation, countdown timing, quiet notes hold and brief feedback duration. Human listening remains a separate named pending check. Run the export-stage brief check, then freeze exact inputs before full export. |
| Release | Pending full existing package gate, current teaching-brief path and human approval. No publication, practical coverage or student-outcome claim follows from this document. |

### Reuse snapshot hashes

SHA256 of inspected current files, 25 October 2026. Recheck if they change before implementation. These identify the starting material, not an approved render.

| Path | SHA256 |
| --- | --- |
| `src/explainer/physics/module5/model.ts` | `7dc2bd1777e7b5b5ba9d61073a010241b5ad89e7ff12993a882d681588d77585` |
| `src/explainer/physics/module5/index.tsx` | `869d3df0daa77ee7c80e7aa1a734ad48de3a438257f2ba31a3281a5e28b062a0` |
| `src/explainer/physics/course-kit.tsx` | `f686b2bce3ecda9c02ad6b5796e9aab4af58ebbf7f0a63f74bac1ccf6be8e4ee` |
| `src/explainer/physics/artifacts/site/stills/m5-elevated-launch-desktop.png` | `c86dbceed926298cfa42b7fe5d7a4fbf6b4a3039ea95cfaeabe8fca6a26fa63e` |
| `src/explainer/physics/projectile/artifacts/desktop-launch.png` | `9816eaf3810f0ace1958decb26a15752d3757eb0a2454b84c9ae103eac61e369` |
| `docs/production/claude-pm/checks/codex-interim-physics-maths-assessment-review.md` | `c1233a22e9922df946ccbd64f054193a3ff81472facbdd91c8a2336ecf171641` |
