# Year 11 Physics FA2 V31 (Physics 2025, Year 11, Focus Area 2): Why does a wave meeting its own reflection make a pattern that stays in place? (design)

Status: Revision 2 (5 Nov 2026), brief 164 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa2-v31`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new; the FA2 wave driver and its rod, v01's two-dial signal generator, FA1's retort stand and boss reused by name.

Narration 5,650 characters, 17 scenes, about 525 s (8.75 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: thirty-first video of the Year 11 Physics (2025) Focus Area 2 route and the standing wave video; it applies v29's superposition and v30's in-step and out-of-step arrival to a wave and its own reflection. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions; risk table showing only the spoken row); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v30.md` (Revision 1). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson23.sa.html` (intro and hook, warm-up, intentions and key terms, misconceptions 1 and 2, card 1 how a standing wave forms with its figure, true or false, card 2 why nodes and antinodes form with `we-1` and the quick check, activity 1, two truths one lie, card 3 demonstrating a standing wave, last check, matching task, Q1 to Q3, retrieve). Route entry: `phys-y11-fa2-v31` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"; its question is already the rewrite "Why does a wave meeting its own reflection make a pattern that stays in place?", v30's chip). Route start: "Start with Standing Waves. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply standing waves? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v32: How can I explain and apply standing waves in strings?" (placeholder; this video's handoff chip uses the rewrite "Why can a string fixed at both ends vibrate only at certain frequencies, and how do you work them out?", which v32's design adopts).

**Opening frame (v30's actual handoff, Revision 1, 3 Nov).** v30's scene 16 ends with the memory line "Whole wavelengths: in step, strong. A half left over: out of step, calm." small at the top; the FA2 wave driver plate (`phys-y11-wave-driver-v1.png`) at the left, a coded string running right to a clamp on the retort stand plate (`phys-y11-retort-stand-v1.png`); an amber-outlined travel arrow on a wave going right and a second on its reflection coming back; three small teal dots on the string that stay on the rest line while the rest of the string moves; chips "a wave and its own reflection?" and "points that never move?"; chip "Next: Why does a wave meeting its own reflection make a pattern that stays in place?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the site's "shake the other end" rope hook becomes the wave driver moving the string by code; no hand holds anything); apparatus painted (wave driver and rod, signal generator, retort stand and boss); the string, the two travelling waves, their sum, node and antinode markers, the probe traces and readouts coded; one reasoning stage at a time; the worked example as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v29 (superposition), v30 (in step, out of step) and FA1 v13 to v20 (a pull on the clamp gets an equal pull back) recalled in a sentence at most.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave behaviours"; local ledger IDs with NESA content-system codenames), quoted from the syllabus JSON:

- P25-FA2-G3-16 `cif767f5f1`: "Demonstrate the formation of a standing wave"
- P25-FA2-G3-17 `ci6032e8f8`: "Explain the production of nodes and antinodes in a standing wave"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v30's handoff (above); the prediction (do the loops travel?); a standing wave as the sum of a wave and its reflection travelling through each other in opposite directions, same frequency and amplitude; why a fixed end reflects the wave upside down and so is itself a node; nodes (always out of step, always cancel) and antinodes (always in step, twice the swing) with plain meanings; why they stay put (the timing between the two waves at each point never changes); why nodes are half a wavelength apart and a node is a quarter wavelength from an antinode; the second prediction (is one loop a wavelength?); standing against travelling waves (motion of points, no flow of energy along the string); the demonstration with a wave driver, signal generator and clamped string, with the observation that shows a standing wave and one spoken risk row; the site's worked example; the memory aid; two attempts. Not taught: which frequencies give loops and λ = 2L/n or f = v/λ for strings (v32); harmonics, fundamental (v32); standing waves in air columns (not in this route; one grey tag at most); free-end reflection (author note a).

## Decisions

- **Learner question (route, already rewritten).** "Why does a wave meeting its own reflection make a pattern that stays in place?" It is v30's handoff chip and the route's current question; kept as written. The answer, built in order: the prediction (1); two waves in opposite directions superpose into loops that don't travel (2); the fixed end makes the reflection and is a node (3); at nodes the two always cancel, at antinodes they always add, and the timing at each point never changes, so the pattern stays put (4); the spacing follows from the timing (5); a loop is half a wavelength (6, 7); how it differs from a travelling wave (8); how to demonstrate it (9); a worked loop pattern (10); memory aid (11).
- **The hook (site intro and hook, made a prediction on v30's frame; no person).** "A normal wave carries its crests along. So will these loops travel towards the clamp, or stay in place?" 3 s, chips "travel?", "stay put?". Answered in 2.
- **The cause made visible: `CounterWaves` (new).** Above the string, two thin stacked axes: the outgoing wave (navy, amber-outlined arrow pointing right) and the reflection (slate, arrow pointing left), each a travelling sinusoid of the same amplitude and wavelength. The string below shows their sum at every instant (ink). A **freeze and step** control stops time and advances it by an eighth of a period at a time, so the student can see the two waves slide past each other while the sum's zero points stay at the same places. Node markers (teal dots, "N") and antinode markers (ink rings, "A") drop onto the string. Every claim about the pattern is read from this display.
- **Fixed-end reflection (needed for "a wave meeting its own reflection"; not on the site).** One pulse on a long string reaches the clamp and returns inverted (`FixedEndReflect`, new, slowed). Cause in one sentence, recalling FA1's third law: the string pulls up on the clamp, so the clamp pulls down on the string and sends a trough back. Consequence: incoming and reflected displacements always cancel at the clamp, so the clamp is a node. A free end (no inversion) is author note a only.
- **Why nodes and antinodes form, and why they stay (site card 2 and Q3).** At a node the two waves are always exactly out of step (crest of one with trough of the other), so by superposition the displacement is always zero; halfway between, always in step, so the swing is twice either wave's. They stay put because the two waves have the same speed and travel in opposite directions, so the timing between them at each point is fixed. Shown with a **point probe** (new, built from v29's `PhaseSlider`): a probe marker on the string with two small time traces (wave 1 and wave 2 at that point) and their sum; at a node the traces are mirror images and the sum is flat; at an antinode they match and the sum is double.
- **Why the spacing is λ/2 (site card 2 and misconception 2; the cause stated, not just the rule).** Move the probe a quarter wavelength from a node: one wave reaches the new point a quarter cycle sooner, the other (coming the other way) a quarter cycle later, so their timing changes by half a cycle: out of step becomes in step, an antinode. Another quarter: out of step again, the next node. Hence N to N = λ/2, N to A = λ/4. The probe's two traces slide in opposite directions as it moves, which shows the "sooner and later" cause.
- **Prediction 2 (3 s, scene 6; site intro and misconception "fundamental wavelength equals the length", which v32 owns, rooted here).** "Is one loop a whole wavelength?" Chips "a whole wavelength?", "half?". Answered in 7: neighbouring loops bulge opposite ways; two loops make one crest and one trough.
- **Standing against travelling (site intentions "how a standing wave differs from a travelling wave", card 2's energy sentence, Q2's observation).** Travelling: every point the same amplitude, one after another; crests move along and carry energy. Standing: points in one loop move together, biggest swing in the middle; the neighbouring loop moves the opposite way; nodes still; no overall flow of energy along the string (ideal, equal waves). Shown with a travelling string above a standing string, three points on each with small vertical displacement bars (teal, FA2 key) and a hollow gold energy arrow along the travelling string only.
- **Demonstration (`cif767f5f1`; site card 3 and Q2; no hand).** Signal generator (`phys-y11-signal-generator-v1.png`, root decision 13) to the wave driver (`phys-y11-wave-driver-v1.png` with `phys-y11-wave-driver-rod-v1.png`), string to a clamp on the retort stand (`phys-y11-retort-stand-v1.png` with `phys-y11-boss-crossbar-v1.png`). The frequency dial sweeps up; at most frequencies the string shivers small and jumbled; at certain frequencies big steady loops appear (grey tag "which frequencies: next video"). Cause in one sentence: at those frequencies each wave that reflects off the clamp and again off the driver arrives in step with the new waves, so they keep building the same loops (site card 3). The observation that shows a standing wave: points that never move, loops that don't travel along the string (site Q2's mark). The driver end is drawn as nearly still (its rod moves a few millimetres; author note b).
- **Risk (one spoken row; template v24's table with only the spoken row).** Hazard: a taut string can snap or slip from the clamp and whip; harm: eye or face injury; control: safety glasses, face away from the string's line, no more tension than needed. The site's rope-shaking and air-column methods are not shown (no hands; air columns not in this route).
- **Worked example (site `we-1`, unchanged numbers).** L = 2.0 m, fixed at both ends, 4 loops: loop 0.50 m, λ = 1.0 m, node to antinode 0.25 m; check: 5 nodes. Layout: task strip, equation strip "one loop = λ/2; node to antinode = λ/4", givens group "L = 2.0 m; 4 loops"; one row per cue. Spoken "zero point five oh metres" for 0.50 m and "one point oh metres" for 1.0 m (the site's figures).
- **Attempts (original, HSC style).** (A1) rope 2.4 m, fixed at both ends, three loops: 4 nodes, loop 0.80 m, λ = 1.6 m, N to A 0.40 m. Crossed: "λ = 0.80 m (one loop = one wavelength)". (A2) P a node, next node 0.60 m away, Q 0.30 m from P between them: λ = 1.20 m; Q a quarter wavelength from P, an antinode; P still because the wave and its reflection always arrive exactly out of step there. Crossed: "P is still because the wave has stopped there".
- **Mistake scene:** none separate. "A standing wave is one wave that has stopped" (2, feedback 2 crossed; site misconception 1); "nodes and antinodes are half a wavelength apart" (5; site misconception 2); "one loop is one wavelength" (6, 7, feedback 1 crossed); "no wave reaches a node" (feedback 2).
- **Memory aid:** "Node: no movement. Antinode: swings the most. Node to node: half a wave." (see "Memory aid check").
- **Handoff (route next, rewritten).** Board change: the demonstration set-up returns; three stacked copies of the string show one, two and three loops, each with a frequency readout "f = ?"; between them, a ghost string shivering small and jumbled with a grey cross; chips "only certain frequencies?" and "which ones?"; then "Next: Why can a string fixed at both ends vibrate only at certain frequencies, and how do you work them out?". This is the frame v32 opens on.
- **Site sources used:** intro (wave meets its reflection; nodes, antinodes: 2 to 4); hook (rope, steady loops, "where did the travelling motion go?": 1, 2, without a hand); warm-up (two waves; what keeps a node still: 2, 4); intentions (differs from a travelling wave: 8); key terms (standing wave, node, antinode, reflection: 2 to 4); misconceptions 1 and 2 (2, 5, feedback 2); card 1 and its figure (4 loops on 2.0 m: 10); true or false (true: 2); card 2 and `we-1` (4, 5, 10); quick check (0.30 m node spacing → 0.60 m: A2's form uses 0.60 m spacing, its own value); activity 1 (1.2 m rope, three loops: kept for students; A1 uses 2.4 m); two truths one lie (C: 5, 7); card 3 (wave driver and signal generator: 9); last check (true: 4); matching task (9); Q1 (2 to 4); Q2 (9, the observation); Q3 (4, A2 (c)).
- **Site corrections (quoted from site lesson 23, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):** no errors found. Suggestions only:
  1. Card 1: "A standing wave forms when two waves of the same frequency and amplitude travel in opposite directions". Correct as the ideal model; the reflected wave on a real string is slightly weaker, so the nodes move a little. Suggest adding "(in practice the nodes are nearly, not perfectly, still)". (Suggestion, as v30's site correction 3.)
  2. Card 3: "Rope/spring fixed at one end: shake the free end up and down, slowly increasing the frequency until the rope locks into clear loops". A wave and its reflection superpose at any frequency; the clear, large loops appear at particular frequencies because waves reflected at both ends then reinforce. Suggest: "... until the rope locks into large, clear loops (at these frequencies the reflections from both ends reinforce each other)". (Suggestion; the card's next paragraph says this.)
  - Checked and correct: card 1's figure (4 loops, 2.0 m, nodes λ/2 apart); card 2's rules (λ/2 and λ/4) and energy sentence; `we-1` (0.50 m, 1.0 m, 0.25 m, 5 nodes); the quick check (B, 0.60 m); activity 1's structure; two truths one lie (C); card 3's methods; last check (true); the matching task; Q1 to Q3 model answers.
- **Cause chain taught, in order:** (1) a prediction that needs a cause (1); (2) a wave and its reflection, same frequency and amplitude, superpose as they pass in opposite directions; the sum makes loops that don't travel (2); (3) the clamp can't move, so it pulls back and inverts the reflection, which makes the clamp a node (3); (4) at nodes the two waves are always out of step and cancel; at antinodes always in step and add; equal speeds in opposite directions keep each point's timing fixed, so the pattern stays put (4); (5) moving a quarter wavelength changes the timing by half a cycle, so nodes are λ/2 apart and λ/4 from antinodes (5); (6) neighbouring loops bulge opposite ways, so a loop is half a wavelength (6, 7); (7) in a standing wave the nodes never move, so no energy flows along the string (8); (8) at certain driving frequencies reflections from both ends keep reinforcing the same loops, which is how the standing wave is demonstrated (9); (9) a worked pattern (10); (10) the memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (waves; reflection). From FA2, recalled in a phrase each: v01 (a transverse wave on a string), v05 (wavelength), v29 (superposition: displacements add), v30 (in step and out of step; strong and calm). From FA1, one clause: a pull on an object gets an equal pull back (third law, v17).
- **Learner-visible vocabulary (plain meaning at first use):** standing wave (a wave pattern of loops that stays in place, made by two identical waves travelling opposite ways, 2, screen gloss); reflection (the wave bouncing back from the end, 2); node (a point on a standing wave that never moves, 4); antinode (a point that swings the most, 4); loop (the part of the string between two neighbouring nodes, 6); wave driver (a motor that moves the string's end up and down at the signal generator's frequency, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`CounterWaves`** (new: two stacked travelling sinusoids in opposite directions with travel arrows, their sum on the string, freeze-and-step control, node and antinode markers); **`FixedEndReflect`** (new: a pulse inverting at a clamp, slowed, with small force arrows at the clamp in amber with ink outline, as FA1); **point probe** (new, built from v29's **`PhaseSlider`**: a probe on the string with two small time traces and their sum; the traces slide in opposite directions as the probe moves); **travelling against standing strings** (two strings, three points each with teal displacement bars; a hollow gold energy arrow on the travelling one); **driver string** (from v30's handoff: the wave driver rod moving by code, the string's response to the dial frequency: small jumbled motion off the special frequencies, large steady loops on them); `RiskRow` (one row, as v24); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a line drawing; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the bench (driver to clamp) across the lower half; `CounterWaves` axes above the string; the probe traces in the right column; working under them.
- **Colour key:** FA2 key (root decisions 3 and 9): outgoing wave navy, reflection slate (as v29's and v30's wave 1 and wave 2); the sum (the real string) ink; nodes teal dots "N"; antinodes ink rings "A"; particle displacement bars teal; wave travel direction amber outline; energy hollow gold; forces amber with ink outline (FA1); crossed items muted red.
- **No human figures.** The driver moves the string by code; no hand, no face near the string in the risk row (text and a pulsing string only).
- **Author notes (not learner copy):**
  (a) At a free end the reflection is not inverted and the end is an antinode (not taught; a string fixed at both ends in v32 needs only fixed ends).
  (b) The driver's rod moves a few millimetres, so the driver end is very nearly a node; treating both ends as nodes is the standard school model (site card 3, Q2).
  (c) For y₁ = A sin(kx − ωt) and y₂ = A sin(kx + ωt + π) (reflection from a fixed end at x = 0, written for the incoming wave travelling left), the sum is a standing wave 2A sin(kx) cos(ωt + phase): nodes at kx = 0, π, 2π, so x = 0, λ/2, λ; antinodes at λ/4, 3λ/4. The relative phase of the two waves at x is 2kx plus a constant, so moving λ/4 changes it by π (half a cycle): the "quarter sooner, quarter later" sentence.
  (d) Energy: for equal amplitudes the time-averaged power flow is zero everywhere; at a node the string's velocity is always zero, so no work is done across it. Said as "in this ideal pattern, no energy flows along the string overall". A real driven string loses a little energy, so the wave driver keeps feeding in a small amount; that stays in this note (Revision 2).
  (e) The special frequencies in the demonstration are the string's harmonics (v32). The jumbled motion off those frequencies is the sum of many reflections with changing timing; it is small, not zero.
  (f) Pronunciations: "antinode" as "AN-tee-node".

Main question: *v30 ended on a string where a wave met its own reflection and some points never moved. Why does a wave meeting its own reflection make a pattern that stays in place?*
Entry knowledge (Stage 5 waves; v01 transverse waves on a string; v05 wavelength; v29 superposition; v30 in step and out of step; FA1 third law).
Stops after: a standing wave as two opposite waves superposing; fixed-end reflection; nodes and antinodes explained; why they stay put; λ/2 and λ/4 spacing; a loop as half a wavelength; standing against travelling; the demonstration and its observation; one risk row; the worked pattern; the memory aid; two attempts. No harmonic formulas, no frequency calculations.
Handoff: v32, standing waves in strings (rewritten question).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (do the loops travel?)
> Last time ended on a string where a wave met its own reflection, and some points never moved. Here it is again, driven at one end and clamped at the other. A normal wave carries its crests along. So will these loops travel towards the clamp, or stay in **place**?

Visual: opens on v30's last frame (the wave driver, the string to the clamp on the retort stand, the two travel arrows, the three still teal dots, the chips). The "Next" chip becomes the heading: "Standing waves"; the memory line fades. On "never moved" the three teal dots pulse. On "driven at one end" the driver's rod pulses; on "clamped" the clamp pulses. On "carries its crests along" a small inset shows a travelling wave on a long string, one crest tagged with a dot moving right. On "place" chips "travel?", "stay put?" and a 3-second countdown ring.

### 2. two waves, opposite ways
> They stay put. That's because two waves are on the string at once. The driver sends a wave towards the clamp, and the clamp sends a reflection back. They have the same frequency and amplitude, and they pass through each other in opposite directions. At every point, the string's displacement is the two waves' displacements added together, which is superposition. Each wave keeps moving, but their sum just grows and shrinks in loops that stay in place. That's a standing **wave**.

Visual: on "stay put" the chip "stay put?" ticks; "travel?" takes a scribble cross. `CounterWaves`: on "sends a wave towards the clamp" the navy outgoing wave draws on the upper axis with an amber-outlined arrow pointing right; on "sends a reflection back" the slate reflection draws on the second axis with an arrow pointing left. On "same frequency and amplitude" two small matching readouts "same f" and "same A". On "pass through each other" both waves slide, opposite ways, at playback speed. On "added together" the freeze-and-step control stops time: at three points, small arrows from both axes stack onto the string (v29 style); the step advances an eighth of a period and the sums are redrawn; grey tag "superposition (v29)". On "grows and shrinks" time runs again: the string (ink) swells and flattens in fixed loops while the two waves keep sliding. On "standing wave" gloss "standing wave: a pattern of loops that stays in place, made by two identical waves travelling opposite ways".

### 3. the fixed end
> Why is there a reflection at all? The clamp can't move. When a crest arrives, the string pulls up on the clamp, so the clamp pulls down on the string, and the wave comes back upside down, as a trough. At the clamp, the incoming and reflected waves always cancel, so the clamp itself is a point that never **moves**.

Visual: camera push to the clamp. `FixedEndReflect` (slowed, tag "slowed down"): on "When a crest arrives" a single crest pulse travels right on a clean string; on "pulls up on the clamp" an amber arrow (ink outline) on the clamp points up; on "pulls down on the string" a matching arrow on the string's end points down (grey tag "equal and opposite pulls (FA1)"); on "upside down" the pulse returns as a trough travelling left. On "always cancel" the camera pulls back to `CounterWaves`: at the clamp the two axes' displacements are always equal and opposite; on "never moves" a teal dot "N" sits on the clamp.

### 4. nodes and antinodes
> A point like that is called a node. Along the string, there are more of them. At each node, whenever one wave brings a crest, the other brings a trough of the same size, so they always cancel. Halfway between two nodes, the waves always arrive in step, crest with crest and trough with trough, so the string swings twice as far as either wave alone. That's an antinode. Both waves travel at the same speed in opposite directions, so the timing between them at each point never changes. That's why the nodes and antinodes stay **put**.

Visual: on "node" gloss "node: a point on a standing wave that never moves". On "more of them" teal dots "N" drop onto every node along the string. The point probe parks on a node: on "crest ... trough" its two time traces (navy, slate) are mirror images and the sum trace lies flat. On "Halfway between" the probe slides to the middle of a loop: on "in step" the two traces match; on "twice as far" the sum trace is double height (labels "A" and "2A"). On "antinode" gloss "antinode: a point that swings the most"; ink rings "A" drop onto every antinode. On "same speed in opposite directions" the two waves slide again while the probe's traces keep their relationship; on "stay put" the markers hold still as the waves slide through them.

### 5. why half a wavelength
> So how far apart are the nodes? Start at a node and move a quarter of a wavelength along. One wave now reaches you a quarter of a cycle sooner. The other, coming the opposite way, reaches you a quarter of a cycle later. That changes their timing by half a cycle, so waves that cancelled now arrive in step: an antinode. Move another quarter, and they're out of step again: the next node. So neighbouring nodes are half a wavelength apart, and a node is a quarter of a wavelength from the nearest **antinode**.

Visual: camera continue. The probe starts on a node (traces mirrored). On "a quarter of a wavelength" a teal bracket "λ/4" draws along the string as the probe moves. On "sooner" the navy trace slides left by a quarter period (tag "¼ cycle sooner"); on "later" the slate trace slides right by a quarter period ("¼ cycle later"); on "half a cycle" a bracket between them "½ cycle"; on "antinode" the traces match and the sum is double. On "Move another quarter" the probe moves on; the traces slide again and mirror; the sum lies flat on the next node. On "half a wavelength apart" a bracket "N to N = λ/2"; on "quarter of a wavelength" a bracket "N to A = λ/4".

### 6. prediction: is one loop a wavelength?
> One loop runs from one node to the next. Is one loop a whole **wavelength**?

Visual: camera push to one loop, outlined. On "wavelength" chips "a whole wavelength?", "half?" and a 3-second countdown ring.

### 7. a loop is half a wavelength
> Half. At any instant, neighbouring loops bulge opposite ways, one up and one down. It takes two loops to make one full wave shape, a crest and a trough. That's the same thing as nodes being half a wavelength **apart**.

Visual: on "Half" the chip "half?" ticks; "a whole wavelength?" takes a scribble cross. The freeze control stops the string at its largest shape: on "one up and one down" the two neighbouring loops tint, one above, one below the rest line. On "one full wave shape" the outgoing wave's single wavelength (navy, from the axis above) drops down and overlays exactly two loops, with a bracket "λ = 2 loops". On "apart" the bracket "N to N = λ/2" returns.

### 8. standing or travelling?
> So how is this different from a travelling wave? On a travelling wave, every point swings just as far, one after another, and the crests move along, carrying energy with them. On a standing wave, all the points in one loop move up and down together, swinging most in the middle, while the next loop moves the opposite way. The nodes never move, so the pattern doesn't travel, and in this ideal pattern, no energy flows along the string overall. It stays in the **loops**.

Visual: board change: two strings, one above the other, labelled "travelling" and "standing". On "every point swings just as far" three points on the travelling string carry teal displacement bars of equal size, peaking one after another; on "carrying energy" a hollow gold arrow slides along it. On "all the points in one loop" three points in one loop of the standing string carry bars that peak together, the middle one tallest; on "the opposite way" a point in the next loop peaks opposite. On "The nodes never move" the teal dots pulse; on "no energy flows" a hollow gold arrow appears on the standing string and is greyed with a small "net 0"; on "loops" each loop glows faintly gold (grey tag "ideal: equal waves").

### 9. demonstrating a standing wave
> To demonstrate one, connect a wave driver to a signal generator, and run a string from the driver to a clamp. Slowly turn up the frequency. At most frequencies, the string just shivers in a small, jumbled way. But at certain frequencies, big steady loops suddenly appear. At those frequencies, each wave that reflects off the clamp, and then off the driver, arrives back in step with the new waves, so they keep building the same loops. The sign that it's a standing wave is points that never move, and loops that don't travel along the string. One safety point: a taut string can snap and whip, so wear safety glasses and keep your face out of its **line**.

Visual: board change: the bench in side view: the two-dial signal generator plate (`phys-y11-signal-generator-v1.png`) with two coded leads to the wave driver (`phys-y11-wave-driver-v1.png` with `phys-y11-wave-driver-rod-v1.png`); the string runs right to the clamp on the retort stand (`phys-y11-retort-stand-v1.png` with `phys-y11-boss-crossbar-v1.png`). On "connect" the leads draw; on "run a string" the string draws. On "Slowly turn up" the frequency dial turns (coded readout rising, no numbers on the plate) and the rod moves by code. On "shivers" the string shows small jumbled motion. On "big steady loops" the dial pauses and two clear loops appear and grow (grey tag "which frequencies: next video"). On "reflects off the clamp, and then off the driver" a small navy pulse marker runs to the clamp, back to the driver and out again, landing on a new crest as it leaves (chip "in step: builds up"). On "never move" the teal node dots pulse; on "don't travel" a small dot tracking a crest stays inside its loop. On "safety" the risk row writes (hazard, harm, control): "taut string snaps or slips / whips into eyes or face / safety glasses; face out of the string's line; no more tension than needed", and the string's line pulses grey.

### 10. worked example: four loops
> Let's measure one. Task: a string two point oh metres long, fixed at both ends, shows exactly four loops. Find the wavelength, and the distance from a node to the nearest antinode. Each loop is two point oh divided by four, zero point five oh **metres**. A loop is half a wavelength, so the wavelength is twice that, one point oh **metres**. A node to the nearest antinode is a quarter of a wavelength, zero point two five **metres**. Check: four loops have five nodes, counting both **ends**.

Visual: clear change to the calculation layout; the string small at the left with four loops, nodes and antinodes marked. Task strip "Find λ and the node-to-antinode distance". Equation strip "one loop = λ/2; node to antinode = λ/4". Givens group (navy): "L = 2.0 m; fixed at both ends; 4 loops" (grey tag "site example values"). Rows, one per cue: on the first "metres" "loop = 2.0 ÷ 4 = 0.50 m"; on the second "λ = 2 × 0.50 = 1.0 m", boxed; on the third "node to antinode = 1.0 ÷ 4 = 0.25 m", boxed. On "ends" the five teal node dots count "1, 2, 3, 4, 5" and a grey check "4 loops → 5 nodes ✓".

### 11. memory aid
> Here's a way to remember it. Node: no movement. Antinode: swings the most. And node to node is half a **wave**.

Visual: board change: the standing string with its markers. The handwritten line writes large: "Node: no movement. Antinode: swings the most." Under it: "Node to node: half a wave." On "no movement" the N dots glow teal; on "swings the most" the A rings glow; on "half a wave" the bracket "λ/2" glows. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A rope two point four metres long is fixed at both ends and vibrates as a standing wave with three loops. How many nodes are there, including the ends? What is the wavelength, and how far is a node from the nearest antinode? Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with an HSC-style line drawing (a straight rope between two fixed supports, the length "2.4 m" marked; no loops drawn): "A rope of length 2.4 m is fixed at both ends and vibrates as a standing wave with three loops. (a) State the number of nodes, including the ends. (b) Calculate the wavelength. (c) Calculate the distance from a node to the nearest antinode. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Three loops have four nodes, counting both ends. Each loop is two point four over three, zero point eight oh metres, so the wavelength is one point six oh **metres**. A quarter of that is zero point four oh **metres**. A loop is only half a wavelength, not a whole **one**.

Visual: card shrinks to the top; "fixed at both ends", "2.4 m" and "three loops" underlined. A small three-loop sketch draws with its four nodes counted. Rows: "(a) 4 nodes"; on the first "metres" "(b) loop = 2.4 ÷ 3 = 0.80 m; λ = 2 × 0.80 = 1.6 m", boxed; on the second "(c) λ ÷ 4 = 1.6 ÷ 4 = 0.40 m", boxed. On "one" a chip "λ = 0.80 m (one loop = one wavelength)" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. On a standing wave, point P is a node, and the next node is zero point six oh metres away. Point Q lies between them, zero point three oh metres from P. Find the wavelength. Is Q a node or an antinode? Then use superposition to explain why P never moves. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with an HSC-style line drawing (a straight rest line with two marked points P and the next node, 0.60 m apart, and Q between them at 0.30 m from P; no loops drawn): "A standing wave forms on a string. Point P is a node, and the next node along the string is 0.60 m from P. Point Q lies between them, 0.30 m from P. (a) Calculate the wavelength. (b) State whether Q is a node or an antinode. Justify your answer. (c) Using the principle of superposition, explain why P never moves. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Neighbouring nodes are half a wavelength apart, so the wavelength is one point two oh **metres**. Q is a quarter of a wavelength from P, so it's an **antinode**. At P, the wave and its reflection always arrive exactly out of step, so their displacements always cancel. Waves still pass through P. They just never move the string **there**.

Visual: card shrinks to the top; "node", "next node", "0.60 m" and "0.30 m" underlined. Rows: on "metres" "(a) λ = 2 × 0.60 = 1.20 m", boxed; on "antinode" "(b) 0.30 m = 1.20 ÷ 4 = λ/4 from a node → antinode", boxed; then "(c) at P: crest of one always meets trough of the other → displacements always cancel → P stays still", boxed, with a small probe trace pair (mirror images, flat sum). On "there" a chip "P is still because the wave has stopped there" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So a wave and its reflection pass through each other and make a standing wave, with nodes where they always cancel and antinodes where they always add. Node to node is half a wavelength, and node to antinode is a quarter. But the big loops only appeared at certain frequencies: one loop, two loops, three, and only small, jumbled shaking in between. Why can a string fixed at both ends vibrate only at certain frequencies, and how do you work them **out**?

Visual: the memory line returns small at the top. On "standing wave" the standing string holds with its markers; on "Node to node" teal brackets "N to N: λ/2" and "N to A: λ/4" flash on it, then board change: the demonstration bench returns (signal generator, wave driver, string to the clamp on the retort stand). On "one loop, two loops, three" three stacked copies of the string draw above the bench showing one, two and three loops, each with a frequency readout "f = ?"; on "small, jumbled shaking" a ghost string between them shivers small and jumbled and takes a grey cross. Chips "only certain frequencies?" and "which ones?". On "out" the chip "Next: Why can a string fixed at both ends vibrate only at certain frequencies, and how do you work them out?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A standing wave forms when two identical waves (same frequency and amplitude) travel in opposite directions and superpose, usually a wave and its reflection. The pattern of loops stays in place.
2. A fixed end can't move, so it reflects the wave upside down and is a node.
3. Node: the two waves always arrive out of step and cancel (no movement). Antinode: always in step and add (swings the most).
4. Neighbouring nodes are λ/2 apart; a node to the nearest antinode is λ/4. One loop = λ/2.
5. Demonstrate: signal generator, wave driver, string to a clamp; at certain frequencies steady loops appear, with points that never move and loops that don't travel.

Memory aid (large, on the notes screen): *Node: no movement. Antinode: swings the most. Node to node: half a wave.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the loops don't travel: two equal waves travel opposite ways and their sum has fixed zero points (2). Why there is a reflection, and why it is upside down: the clamp can't move and pulls back on the string (3). Why a node never moves: the two waves always arrive out of step and cancel (4). Why an antinode swings most: the waves always arrive in step and add (4). Why the pattern stays put: equal speeds in opposite directions keep each point's timing fixed (4). Why nodes are half a wavelength apart: a quarter wavelength of movement changes the timing by half a cycle (5). Why a loop is half a wavelength: neighbouring loops bulge opposite ways (7). Why no energy flows along: the nodes never move (8). Why loops appear only at certain frequencies: the reflections from both ends then arrive in step and keep building (9).
- **Misconceptions addressed:** a standing wave is one wave that stopped (2, feedback 2 crossed); nodes and antinodes are λ/2 apart (5); a loop is a whole wavelength (6, 7, feedback 1 crossed); no wave reaches a node (feedback 2).
- **One idea at a time:** two waves (1, 2), the fixed end (3), nodes and antinodes (4), spacing (5), a loop (6, 7), standing against travelling (8), demonstration (9), numbers (10), memory aid (11).
- **Video makes it easier:** the student watches two waves slide past each other while their sum swells in place, and can step time an eighth of a period at a time (2); watches a pulse come back upside down from the clamp (3); watches a probe's two traces mirror at a node and match at an antinode (4), then slide in opposite directions as the probe moves a quarter wavelength (5); watches one wavelength drop onto two loops (7); compares bars on a travelling and a standing string (8); watches loops appear as the dial turns (9).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card (fixed at both ends; the node positions), nothing answer-bearing (the drawings show no loops). One crossed mistake each; feedback about 19 s and 25 s.
- **Avoided double teaching:** superposition (v29), in step and out of step (v30), wavelength (v05), the third law (FA1) recalled in a phrase each.
- **Syllabus coverage:** `cif767f5f1`: the formation of a standing wave shown on the string (2, 3) and demonstrated with a wave driver, signal generator and clamped string, with the identifying observation and a risk (9); `ci6032e8f8`: nodes and antinodes explained by superposition of the incident and reflected waves (3, 4), with their fixed positions and spacing (4, 5, 7), and A1, A2.
- **Out of scope by design:** harmonics, λ = 2L/n and frequency calculations (v32); air columns; free-end reflection (author note a).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A rope of length 2.4 m is fixed at both ends and vibrates as a standing wave with three loops. (a) State the number of nodes, including the ends. (b) Calculate the wavelength. (c) Calculate the distance from a node to the nearest antinode."
Model answer: (a) Three loops have four nodes (one at each fixed end and two between). (b) Each loop is 2.4 ÷ 3 = 0.80 m. One loop is half a wavelength, so λ = 2 × 0.80 = 1.6 m. (c) A node is a quarter of a wavelength from the nearest antinode: 1.6 ÷ 4 = 0.40 m. Classic mistake (crossed): "λ = 0.80 m (one loop = one wavelength)".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "A standing wave forms on a string. Point P is a node, and the next node along the string is 0.60 m from P. Point Q lies between them, 0.30 m from P. (a) Calculate the wavelength. (b) State whether Q is a node or an antinode. Justify your answer. (c) Using the principle of superposition, explain why P never moves."
Model answer: (a) Neighbouring nodes are half a wavelength apart, so λ = 2 × 0.60 = 1.20 m. (b) Q is 0.30 m = λ/4 from the node P, midway between two nodes, so Q is an antinode. (c) The standing wave is the superposition of two identical waves travelling in opposite directions (the incident wave and its reflection). At P the two waves always arrive exactly out of phase: whenever one produces a crest, the other produces an equal trough. Their displacements always add to zero, so P never moves, although both waves pass through it. Classic mistake (crossed): "P is still because the wave has stopped there".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Spacing | N to N = λ/2; N to A = λ/4; one loop = λ/2 | 5, 7, 10, 11, 17 |
| Probe | ¼ cycle sooner, ¼ cycle later → ½ cycle change | 5 |
| Antinode swing | 2A (twice either wave) | 4 |
| Worked (site `we-1`) | L = 2.0 m; 4 loops; loop 0.50 m; λ = 1.0 m; N to A 0.25 m; 5 nodes | 10 |
| A1 | L = 2.4 m; 3 loops; 4 nodes; loop 0.80 m; λ = 1.6 m; N to A 0.40 m | 12, 13 |
| A2 | node spacing 0.60 m → λ = 1.20 m; Q 0.30 m = λ/4 → antinode | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Worked: 2.0 ÷ 4 = 0.50 m; 2 × 0.50 = 1.0 m; 1.0 ÷ 4 = 0.25 m; 4 loops + 1 = 5 nodes.
- A1: 2.4 ÷ 3 = 0.80 m; 2 × 0.80 = 1.6 m; 1.6 ÷ 4 = 0.40 m; 3 + 1 = 4 nodes.
- A2: 2 × 0.60 = 1.20 m; 1.20 ÷ 4 = 0.30 m.
- Standing wave: 2A sin(kx) cos(ωt) has zeros at x = 0, λ/2, λ and maxima |2A| at λ/4, 3λ/4; relative phase 2kx changes by π over λ/4 (author note c).

## Memory aid check

- **"Node: no movement. Antinode: swings the most. Node to node: half a wave."** Written for this lesson ("node" and "no" share their first letters, which carries the meaning). Meaning, as said in scene 11: a node is a point that never moves (the two waves always cancel there); an antinode is a point that swings the most (they always add); neighbouring nodes are half a wavelength apart. Assumptions checked: "no movement" is exact only for equal waves (site suggestion 1; in practice nearly still); "swings the most" means the largest amplitude, not that an antinode is always displaced (it passes through the rest line twice a cycle, shown in 2 and 8); "half a wave" means half a wavelength (the bracket "λ/2" glows on the word). Introduced after the cause (2 to 5) and the worked pattern (10). It helps a new case: A1, A2, and v32's strings.
- **Considered, not used:** "N for node, N for nothing" (shorter, but "nothing" could suggest no wave arrives, the misconception feedback 2 crosses).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,650 characters** (5,666 joined), 17 scenes. Characters per scene (1 to 17): 259, 477, 311, 530, 505, 72, 214, 444, 654, 477, 107, 257, 261, 286, 327, 394, 75. At 13.3 characters per second the speech is about 425 s; add about 18 s of holds and settling (the stepped sums in 2, the slowed pulse in 3, the probe moves in 4 and 5, the dropped wavelength in 7, the dial sweep in 9, the node count in 10, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold: **about 525 s**, under the 570 s cap. Two syllabus points (one a demonstration) with their causes fill it without padding. If the voiced preview runs long, the first trim is scene 8's last sentence "It stays in the loops." (about 22 characters), then the second sentence of scene 3 is shortened to "The clamp can't move, so it pulls back, and the wave returns upside down." (about 70 characters saved).

## Scene list and build ids

Lesson key `p-y11-fa2-v31` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v31` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v31` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, two-waves, fixed-end, nodes-antinodes, half-wavelength, loop-prediction, loop-half, standing-vs-travelling, demonstration, worked-example, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and loop-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v30's last frame continues into scene 1; 1 to 2 camera continue (the `CounterWaves` axes rise above the string); 2 to 3 camera push to the clamp; 3 to 4 camera pull back; 4 to 5 camera continue (the probe moves); 5 to 6 camera push to one loop; 6 to 7 camera continue; 7 to 8 board change; 8 to 9 board change to the bench; 9 to 10 clear change to the calculation layout; 10 to 11 board change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and loop-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v31-learning-review.md`, `science_check` = `checks/p-y11-fa2-v31-physics-check.md`.

## Assets

`public/assets/physics/` holds FA1 plates (including `phys-y11-retort-stand-v1.png` and `phys-y11-boss-crossbar-v1.png`); no FA2 plates are there yet (checked 3 Nov). Requested earlier, reused by name (uniform scaling only, never stretched):
- The FA2 `phys-y11-wave-driver-v1.png` with `phys-y11-wave-driver-rod-v1.png` (v01; scenes 1 to 9, 16).
- v01's `phys-y11-signal-generator-v1.png` (two dials, root decision 13; scenes 9, 16).
- FA1's `phys-y11-retort-stand-v1.png` and `phys-y11-boss-crossbar-v1.png` (the clamp; scenes 1 to 9, 16).
- **Considered, not used:** safety glasses plate (the risk row is text with the string's line pulsing; a pair of glasses alone would read as clip art); a rope fixed to a wall (needs a hand to shake it); an air column with tuning fork (not in this route).

Need: no new plates.

Coded: the string and its response, the two travelling waves and their sum, the freeze-and-step control, the clamp pulse and force arrows, node and antinode markers, the probe and its traces, the two comparison strings with bars and energy arrows, the risk row, `AlignedAlgebra`, `Countdown`, `QuestionCard` with line drawings, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`CounterWaves`** (new; two opposite travelling waves, their sum, freeze and step, markers); **`FixedEndReflect`** (new; pulse inversion at a clamp with force arrows); **point probe** (new, from v29's `PhaseSlider`); **driver string** (from v30's handoff; frequency response: small jumbled motion off the special frequencies, steady loops on them; v32 reuses it with readouts).

## Codex asset brief (Year 11 Physics FA2 v31, standing waves)

No new plates. Confirm, for plates requested earlier: (1) the wave driver's separate rod plate has a tip clamp the coded string can leave from (sidecar point at the clamp); (2) the boss and crossbar on the retort stand give a clamp jaw at the string's height, with a sidecar point for the string's fixed end; (3) the signal generator plate's frequency dial carries no printed numerals that would contradict the coded readouts.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm `CounterWaves` draws two equal travelling waves in opposite directions whose sum is the string's shape; the nodes fall where the sum is always zero, λ/2 apart, with the clamp a node; the antinodes sit midway; the probe's traces mirror at nodes and match at antinodes; a quarter-wavelength probe move shifts the traces a quarter period each, in opposite directions.
3. Confirm the physics claims: a fixed end reflects a wave inverted and is a node; nodes are points of permanent cancellation, antinodes of permanent reinforcement (amplitude twice either wave's); N to N = λ/2, N to A = λ/4, a loop = λ/2; no net energy flow along an ideal standing wave; steady large loops appear only at particular driving frequencies.
4. Confirm no person, face, hand or body outline appears in any scene, card or plate (owner instruction).
5. Confirm the risk row is shown alone and matches the spoken words.
6. Confirm both attempt questions are original in wording, carry every condition (fixed at both ends; node positions), and show nothing answer-bearing (no loops drawn).
7. Confirm the syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site suggestions 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Standing Waves: Why Nodes and Antinodes Stay in Place | Year 11 Physics

(Title length: 72 characters; open decision 3 offers "Standing Waves, Nodes and Antinodes | Year 11 Physics", 53 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson23.sa.html

A wave sent along a string meets its own reflection, and suddenly the string settles into loops that don't travel anywhere. Why? Watch the outgoing wave and its reflection slide through each other while their sum stays in place. Find out why a fixed end sends the wave back upside down, why nodes never move and antinodes swing the most, why nodes are half a wavelength apart, and how to demonstrate a standing wave with a wave driver and a signal generator. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Demonstrate the formation of a standing wave" (cif767f5f1)
"Explain the production of nodes and antinodes in a standing wave" (ci6032e8f8)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Interference patterns (previous video). Next: Standing waves in strings.

#Year11Physics #Physics #Waves #StandingWaves #HSCScience

## Open decisions

- **1. Learner question.** Kept as the route's current question (v30's chip); no change needed.
- **2. v32 handoff chip.** This video's chip proposes "Why can a string fixed at both ends vibrate only at certain frequencies, and how do you work them out?" for v32 (route placeholder "How can I explain and apply standing waves in strings?"); v32's design adopts it. Root to enter it in the route.
- **3. Title length.** The draft title is 72 characters; root picks it or the 53-character alternative.
- **4. Fixed-end reflection (scene 3).** Not on the site lesson, but the route question is about "a wave meeting its own reflection", and v32 relies on both ends being nodes. About 330 characters; if root cuts it, scene 4 opens with "The clamp can't move, so it is always a node" and the cause is lost.
- **5. Risk row.** One spoken row in a demonstration video (not a full investigation); root to confirm it meets the house rule without an FA0 table (no FA0 point is claimed here).
- **6. Site link form.** As v20.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v30 at Year 11 entry; check that the two sliding waves and the step control make "the sum stays in place" visible before the word "standing" appears; that the third-law clamp sentence is followable; that "a quarter cycle sooner, a quarter cycle later" lands as the cause of λ/2; that the loop prediction is quick; that the demonstration's "in step with the new waves" sentence does not pre-empt v32; that the cards give nothing away), then the Codex physics check and error check.
- The sliding waves and stepped sums (2), the inverted pulse (3), the probe traces (4, 5), the dropped wavelength over two loops (7), the two comparison strings (8) and the loops appearing on the dial (9) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): the closing summary no longer says nodes and antinodes are half a wavelength apart. Scene 15 now says "Node to node is half a wavelength, and node to antinode is a quarter", with brackets "N to N: λ/2" and "N to A: λ/4" flashing on the standing string. Its "nothing steady in between" also became "only small, jumbled shaking in between" (matching the existing jumbled ghost string), in line with the v32 science finding.
- Should fix 2 (both reviews): scene 9 now says "in this ideal pattern, no energy flows along the string overall" (the grey tag "ideal: equal waves" stays). Author note d records that a real driven string needs a small energy input from the driver.
- Narration count: 5,747 characters (build parser rule), about 531 s with the stated holds (81 characters longer than the reviewed 5,666; within the cap).
