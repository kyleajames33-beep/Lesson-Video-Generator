# Year 12 Physics M5 V09: Torque. Why does a force turn an object more effectively at some angles? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,693 characters, 15 scenes, about 517 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v08's final frame.

Scope: ninth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), first video on torque. Templates: `phys-y12-m5-v01.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v09.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only): connect and orient (crane hook, door prediction, vocabulary, misconceptions), define the moment and its sign, represent the line of action, worked example 1 (wrench), worked example 2 (seesaw, v10's), scope boundary, misconceptions, activities, wrap-up, "Analyse 6 marks", "Account 5 marks", short answers and the revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html`, SHA256 `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v09` in `../../programme/phys-y12-route-inputs.json`, sections `l06-define-title`, `l06-represent-title`, `l06-wrench-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Define torque through perpendicular moment arm; calculate 80 N at 0.25 m for 90, 30, 180 degrees. Stop before equilibrium of several forces." Next: "phys-y12-m5-v10: How do clockwise and anticlockwise torques balance?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's "mechanic applies 80 N" becomes "a push of 80 N on the end of the handle", drawn as a force arrow only; no arm on the spanner); the spanner and the nut are painted plates (two layers, so the spanner can rotate about the nut), and force arrows, components, lines of action, moment arms, angle arcs, graphs and the HSC-style lever in the attempts are coded; plates never stretched; one reasoning stage at a time; every number recalculated in Python; HSC data sheet and syllabus symbols (τ = r⊥F = rF sin θ); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ2-05`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-05`: "investigate the relationship between the rotation of mechanical systems and the applied torque" "τ=r_(⊥)F=rFsinθ"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v08's final frame (spanner on a nut, three equal 80 N pushes at the handle end). Teaches: torque as the turning effect of a force about a pivot, unit N m (not J); τ = rF for a force at right angles, with distance mattering; the angled force split into components, only F sin θ turning (10 N m at 30°); the line of action and perpendicular moment arm r⊥ = r sin θ giving the same 10 N m; τ = r⊥F = rF sin θ with θ defined between the pivot-to-point vector and the force; the push along the handle: line of action through the pivot, θ = 180° (pushing in) or 0° (pulling out), zero torque (site correction 4); the sin θ curve with the maximum at 90°; turning sense (clockwise or anticlockwise). Stops before several forces and equilibrium (v10), the seesaw (v10), moment of inertia and τ = Iα (site: extension, not assessed).

## Decisions

- **Learner question (route wording kept).** "Why does a force turn an object more effectively at some angles?" is causal. The answer, built in order: only the component of the force at right angles to the handle turns it (4); equivalently, the turning effect depends on how far the force's line of action passes from the pivot (5); a force along the handle has its line through the pivot (6); so the effect follows sin θ, largest at 90° (7).
- **Hook (site worked example 1 and the lesson's door prediction, re-objected).** The site's wrench case is kept unchanged (80 N, 0.25 m, 90°, 30°, along the handle towards the nut). Prediction: rank the three pushes and name the one that does nothing, 3 s countdown with option chips. Scene 2 shows the result qualitatively on a nut that is free to turn (the spanner layer rotates about the nut centre; turned angle after the same short time in proportion to torque, author note a), before torque is defined.
- **The door (site "Before you read, predict").** Kept as a sentence only ("a door pushed near its hinge barely moves"), since a door plate would add an object without adding a step; the spanner itself shows the distance effect (scene 3: the push moved to half the distance gives half the torque).
- **Components first, then moment arm (site "Key insight" and the syllabus's two forms).** Scene 4 resolves the force along and at right angles to the handle (Year 11 resolution recalled in a clause; the along component "pulls on the nut through its centre"). Scene 5 extends the line of action and drops the perpendicular from the pivot (r⊥ = 0.125 m). Both give 10 N m, and both forms of the syllabus expression are written.
- **Angle definition and the push along the handle (site correction 4, `../site-corrections-phys-y12.md`).** θ is the angle between the arrow from the pivot to the point of application and the force arrow, drawn tail to tail. Pushing towards the nut gives θ = 180°; pulling outwards gives θ = 0°; both give zero torque. The site's "sin 0°" for the push towards the nut is corrected; the numerical zero is unchanged.
- **Turning sense (site "Signed torque").** Introduced in scene 7 only as a direction (anticlockwise for the drawn perpendicular push), without sums; sign conventions and adding torques belong to v10.
- **Mistake scene (scene 8).** Two specific slips the case invites: τ = rF used for an angled force (20 instead of 10 N m), and the angle measured from the wrong line. Kept because both are common in HSC working and both are corrected by the scene 5 picture.
- **Memory aid (scene 9, new): "Push square, push far."** See "Memory aid check". "Square" (at right angles) is said with its meaning.
- **Attempts (original, HSC style; pack candidates).** A1: 40 N on a 0.30 m lever, at 90° (12 N m) and at 30° (6.0 N m). A2: 40 N along a 0.30 m handle towards the pivot: moment arm 0, torque 0, θ = 180°. Crossed: A1 "cos 30° (10.4 N m)"; A2 "τ = rF = 12 N m".
- **Significant figures.** Site data (80 N, 0.25 m) give 20 N m, 10 N m, 0 N m as the site does; A1 12 N m and 6.0 N m (two significant figures, like the data).
- **Handoff (route next).** Scene 14 changes to a tower crane: a heavy load far out on the jib, a counterweight close in on the other side, and two curved turning arrows (clockwise and anticlockwise) with "?" (v10: "How do clockwise and anticlockwise torques balance?"). See "Final frame".
- **Site sources used:** door prediction (3, sentence); vocabulary "Torque", "Pivot", "Perpendicular component" (2, 4); misconceptions "Torque is the same as force" (2), "Torque is measured in joules" (3); torque formula, key insight τ = Fr⊥, syllabus requirement and unit rule (3 to 5); "Maximising and Minimising Torque" table (7); worked example 1 (1 to 6, corrected); "Analyse 6 marks" steps 2 to 6 (4, 6, 7, A2); short-answer Q1 and Q3 ideas (A1, A2). Not used: the crane hook (v10's hook), worked example 2 and Activity 1's seesaw (v10), "Account 5 marks" (two-support beams; route stops before them), τ = Iα (extension).
- **Site notes (quoted from site lesson 6, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Already logged (correction 4): wrap-up "When θ = 0° (force directed along the lever arm toward the pivot)" and worked example 1 step 4 "τ = 0.25(80) sin 0°" for a force "directed along the wrench toward the nut". With θ between the outward pivot-to-point vector and the force, this is 180°. Applied in scene 6 and A2.
  2. Terminology (precision note): the vocabulary card defines "Lever arm: the perpendicular distance from the pivot to the line of action", but the formula card and worked example 1 use "the angle between the force vector and the lever arm" and "the wrench's lever arm" for the pivot-to-point line r. A student meeting both may think θ is measured from the perpendicular distance. Suggest "moment arm (r⊥)" for the perpendicular distance and "the line from the pivot to the point of application (r)" for the angle reference. This design uses those two names.
  3. Checked and correct: worked example 1 magnitudes (20, 10, 0 N m); MC "40 N at 0.5 m" (20 N m); Activity 1 (10 N m; 15 N m; 1.0 m; MC 10 N m); short-answer Q1 (40 N m, 34.6 N m), Q2 (0.40 m, 90 cm mark), Q3; crane revisit (1.176 × 10⁶ N m each side); "Analyse 6 marks" (0° pulling away, 180° pushing towards: correct there).
- **Cause chain taught, in order:** (1) the same force can turn a nut strongly, weakly or not at all (2); (2) further from the pivot, more turning effect (3); (3) a force's component along the handle acts through the pivot and cannot turn it; only F sin θ at right angles turns it (4); (4) equivalently, torque is force times the shortest distance from the pivot to its line of action (5); (5) a force whose line passes through the pivot has zero moment arm, so zero torque (6); (6) so torque follows sin θ: zero along the handle, greatest at right angles (7).
- **Entry knowledge (route `entryKnowledge`):** Year 11 vectors and resolving a force into components, Newton's laws, trigonometry. No earlier torque video; v01 to v08 are projectiles and the practical.
- **Learner-visible vocabulary (plain meaning at first use):** pivot (the fixed point an object turns about, scene 2, on screen); torque (the turning effect of a force about a pivot, 2); newton metre (the unit of torque, 3); line of action (the line the force acts along, extended both ways, 5); moment arm or perpendicular distance r⊥ (the shortest distance from the pivot to the line of action, 5); clockwise and anticlockwise (turning sense, 7).
- **Legacy logic ported:** none. The coded families `m5-torque` and `m5-moment-arm` (`src/explainer/physics/module5/rotation-details/`) are reconfigured from r = 0.4 m, F = 50 N to the site's 0.25 m and 80 N (pack).
- **New explainer motion:** **spanner stage** (two plate layers: the nut and plate fixed, the spanner rotating about the nut centre; a coded point of application at the handle end; force arrows at any angle; optional rotation playback with angle in proportion to torque, author note a); **component split** (force arrow resolving into along-handle and at-right-angles components, the along one shown passing through the nut centre); **line of action and moment arm** (dashed extension of the force arrow both ways, a perpendicular from the pivot with a right-angle mark and a length readout); **tail-to-tail angle** (the r arrow and the F arrow slide tail to tail with an arc and readout); **sin θ torque graph** (`DataGraph`, τ against θ from 0° to 180°, with markers at 30°, 90°, 180°); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the spanner stage on the left (top view, 1,600 px per metre: the 0.25 m handle is 400 px; author note b); working or graph on the right; everything above the bottom 12% of the frame. Colour key for v09 and v10 (extends v01's): force arrows amber (`#b87918`, `PHYS.force`); the component at right angles teal; the component along the handle grey; r arrow navy; line of action dashed amber; moment arm violet (`#7956a8`); torque readouts ink; anticlockwise turning arrows blue, clockwise orange; crossed chips red.
- **No human figures.** No mechanic, no arm on the spanner; pushes are arrows only.
- **Author notes (not learner copy):**
  (a) Scene 2's "free to turn" playback is illustrative: from rest under a constant torque the turned angle after a fixed time is proportional to the torque (θ = ½αt², α = τ ÷ I), so after the same playback time the spanner turns 20°, 10° and 0° for 20, 10 and 0 N m (illustrative angles, no values shown). In a real stuck nut, friction resists until the torque is large enough; the narration says "a nut that's free to turn" and does not claim measured motion. τ = Iα is not taught (site: extension).
  (b) Stage geometry: nut centre at (360, 520) px; handle end (point of application) at (760, 520) px; perpendicular push pointing up the frame (to y smaller), so r × F is out of the screen: anticlockwise as seen from above. The 30° push is at 30° to the handle direction (+x), pointing up and to the right; its line of action passes 0.125 m (200 px) from the nut centre. The along-handle push points from the handle end towards the nut (−x).
  (c) "Torque is not energy" (site): both have base units kg m² s⁻²; the narration only says "it isn't energy, so we never write it in joules".
  (d) Pronunciations: "tau" for τ; "r perpendicular"; "F sin theta"; "newton metres"; "anticlockwise".

- **Open decisions for root:**
  - **1. Spanner and nut plates (root, Codex).** Two new plates (a spanner layer and a nut-in-plate layer) so the spanner can rotate. Fallback: a single coded spanner outline (weaker; the owner rule asks for plates for real objects, while the kit plan said coded).
  - **2. Scene 2's playback (physics check).** Illustrative rotation of a "free to turn" nut before torque is defined (author note a). If the physics check prefers no implied dynamics, replace the rotation with three static "turning tendency" curved arrows of lengths 20, 10 and 0.
  - **3. Site note 2** (lever arm terminology) for root to log.
Main question: *The same 80 N push on the end of a 0.25 m spanner turns a nut strongly at right angles, half as well at 30°, and not at all along the handle. Why?*
Entry knowledge: resolving a vector into components; sin of 0°, 30°, 90°, 180°; force in newtons.
Stops after: torque, its unit, τ = rF at right angles, F sin θ, r⊥ = r sin θ, the push along the handle (θ = 180°), the sin θ curve and turning sense. No several forces, no equilibrium.
Handoff: v10, how clockwise and anticlockwise torques balance.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *τ*, *r*, *r⊥*, *F*, *θ*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (rank the pushes)
> Here's that spanner on a stuck nut. Its handle is twenty-five centimetres long, and each push on the end is eighty newtons. One push is at right angles to the handle, one is at thirty degrees to it, and one points straight along the handle, towards the **nut**. Same force, same spot. Rank them. Which turns the nut best, and does any of them do nothing at **all**?

Visual: opens on v08's final frame (see "Opening frame"). On "twenty-five centimetres" a navy bracket along the handle "0.25 m" from the nut centre to the handle end. On "eighty newtons" each of the three amber arrows gets "80 N". On "at right angles" the perpendicular arrow brightens with a right-angle mark; on "thirty degrees" the 30° arrow brightens with an arc "30°"; on "nut" the along-handle arrow brightens. On "all" a 3 s `Countdown` runs beside three chips "A: right angles", "B: 30°", "C: along the handle" and a small ranking strip "best → worst".

### 2. reveal: torque, the turning effect
> Watch each one on a nut that's free to turn. The right-angle push swings the spanner round the most. The thirty degree push turns it too, but only half as far. And the push along the handle just shoves on the nut, with no turning at **all**. The turning effect of a force about a pivot is called torque. Torque isn't a force. It's what a force does to rotation. So why does the same force give more torque at some angles than **others**?

Visual: the three cases replay one after another on the spanner stage (author note a): on "right-angle push" the spanner layer rotates anticlockwise about the nut by about 20° (a faint ghost of its start position stays); on "thirty degree push" it returns and rotates about 10°; on "all" the along-handle push plays and the spanner does not rotate, a small grey tag "no turning". A curved blue arrow over the nut grows to match each case. On "pivot" a navy dot at the nut centre labelled "pivot: the point it turns about". On "torque" a chip "torque: the turning effect of a force about a pivot". On "others" the heading writes on: "Why does a force turn an object more effectively at some angles?" and the ranking strip fills "A > B > C (C does nothing)".

### 3. right angles: distance times force
> Start with the simplest case, the push at right angles. A longer spanner makes a stuck nut easier, and a door pushed near its hinge barely moves. Distance from the pivot matters. Push halfway along the handle, and you get only half the turning **effect**. For a force at right angles to the line from the pivot, the torque is the distance times the **force**. Tau equals r F. Here that's zero point two five metres times eighty newtons, twenty newton **metres**. Torque is measured in newton metres. It isn't energy, so we never write it in **joules**.

Visual: only the perpendicular arrow stays. On "halfway along the handle" a ghost of the push moves in to half the distance (0.125 m); on "effect" its curved arrow halves (tag "half the distance, half the turning"), then the push returns to the end. On "force" an equation strip writes "τ = rF (force at right angles)". On "metres" `AlignedAlgebra` "τ = 0.25 m × 80 N = 20 N m" and the readout "τ = 20 N m" sits by the nut. On "joules" a chip "unit: N m (newton metre)" and beside it a small chip "J" crossed (caption "torque is not energy").

### 4. at an angle: only the right-angle part turns
> Now the push at thirty degrees. Split it into two components. One runs along the handle. It just pulls on the nut through its centre, so it can't turn it. The other is at right angles to the handle, and only that part does the turning. It's F sin theta, where theta is the angle between the handle and the **force**. Eighty times sin thirty is forty newtons, so the torque is zero point two five times forty, ten newton **metres**. Half the force at right angles, so half the torque.

Visual: the 30° arrow returns at the handle end; the perpendicular arrow fades. On "Split it into two components" the 30° arrow resolves: a grey component along the handle "F cos θ" and a teal component at right angles "F sin θ" (tip-to-tail with the original, which dims). On "through its centre" the grey component extends as a dashed line straight through the nut centre (tag "acts through the pivot: no turning"). On "only that part" the teal component pulses. On "force" the arc "θ = 30°" draws between the handle line and the force arrow. On "metres" `AlignedAlgebra` "F⊥ = F sin θ = 80 × sin 30° = 40 N"; "τ = r F sin θ = 0.25 × 40 = 10 N m". The readout by the nut changes to "τ = 10 N m".

### 5. the same answer from the moment arm
> There's a second way to see it. Extend the force arrow into a long line, called its line of action. Now find the shortest distance from the pivot to that line. It meets the line at right angles, and it's called the perpendicular distance, or the moment **arm**. Here it's zero point two five times sin thirty, twelve and a half centimetres. Eighty newtons times zero point one two five metres is ten newton metres **again**. Either way, tau equals r F sin theta, which the syllabus also writes as r perpendicular times **F**.

Visual: the components fade; the 30° arrow stays. On "line of action" a dashed amber line extends the arrow far in both directions. On "shortest distance" a violet segment draws from the nut centre to the dashed line, meeting it with a right-angle mark; on "arm" it is labelled "r⊥ (moment arm)". On "twelve and a half centimetres" "r⊥ = r sin θ = 0.25 × sin 30° = 0.125 m". On "again" "τ = F r⊥ = 80 × 0.125 = 10 N m" (a tick beside the scene 4 result). On "F" the syllabus strip writes "τ = r⊥F = rF sin θ" (boxed) with a grey tag "Physics Stage 6 (2017)".

### 6. the push along the handle
> So what about the push straight along the handle? Its line of action passes right through the **pivot**, so the moment arm is zero, and so is the torque. In the formula, theta is the angle between two arrows: one from the pivot out to where the force acts, and the force itself. Pushing towards the nut, those arrows point opposite ways, so theta is one hundred and eighty **degrees**. Pulling outwards, theta is zero. The sine of either is zero. No turning, however hard you **push**. That's why a door won't open if you push its edge straight towards the hinges.

Visual: the along-handle arrow returns; the others fade. On "pivot" its dashed line of action extends straight through the nut centre and the violet moment arm shrinks to a dot, "r⊥ = 0", readout "τ = 0". On "two arrows" a navy arrow "r" draws from the nut centre out to the handle end; the force arrow and the r arrow slide tail to tail beside the spanner. On "degrees" the arc between them reads "θ = 180°". On "Pulling outwards" a ghost force arrow pointing away from the nut appears tail to tail with r, arc "θ = 0°". On "push" "sin 180° = 0, sin 0° = 0 → τ = 0" and the force arrow lengthens to "160 N", readout still "τ = 0".

### 7. torque follows sin theta
> Put it together on a graph. Torque follows sin theta. It's zero along the handle, grows as the force swings round, peaks at ninety degrees, and falls back to zero at one **eighty**. That's the answer to our question. Only the part of the force at right angles to the handle turns it, and that part is biggest when the whole force is at right **angles**. Torque also has a direction. This push turns the nut anticlockwise. Push the opposite way, and it turns it **clockwise**.

Visual: camera change: the spanner stage shrinks left; on the right a `DataGraph` "τ (N m)" against "θ (degrees)", 0 to 180. On "Torque follows sin theta" a force arrow at the handle end sweeps from 0° to 180° on the stage while a point traces the curve "τ = 0.25 × 80 × sin θ" on the graph; markers light at "30°: 10 N m", "90°: 20 N m (maximum)", "180°: 0". On "eighty" the trace finishes. On "angles" the teal component at right angles is shown on three ghost arrows (at 30°, 90°, 150°), biggest at 90°. On "anticlockwise" the perpendicular push returns with a blue curved arrow "anticlockwise"; on "clockwise" the push flips to point down the frame and the curved arrow turns orange, "clockwise". Tag "direction: next video".

### 8. two slips to avoid
> Two slips to avoid. First, using the full handle length with an angled force, as if tau were always r F. For the thirty degree push, that gives twenty instead of **ten**. Second, using the wrong angle. If a question gives the angle between the force and a line at right angles to the handle, the sine of that angle is the wrong **factor**. Always use the angle between the force and the line from the pivot to where it acts.

Visual: board clears to two chips. On "ten" a chip "τ = rF = 0.25 × 80 = 20 N m (force at 30°)" fades in and is crossed, with "10 N m" ticked beside it and the scene 5 moment arm drawn small. On "factor" a small diagram: the spanner with a force 60° from the perpendicular dashed line (that is, 30° to the handle) and a chip "τ = rF sin 60°" crossed, with "θ is measured from r: τ = rF sin 30°" ticked. Tag "find θ between r and F".

### 9. memory aid
> Here's the short version. Push square, push far. Square means at right angles to the line from the pivot, and far means a long moment arm. Both make the turning effect **bigger**. And if the force's line of action passes through the pivot, no amount of pushing **helps**.

Visual: board clears to the spanner with the perpendicular push at the handle end, the violet moment arm along the handle. On "Push square" a right-angle mark pulses; on "push far" the moment arm bracket pulses. On "bigger" the handwritten line writes large above: "Push square, push far." with a small line under it "τ = r⊥F = rF sin θ". On "helps" a grey ghost push along the handle with its dashed line through the nut, tag "line through the pivot: τ = 0". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A force of forty newtons acts on the end of a lever, zero point three zero metres from its pivot. Calculate the torque about the pivot when the force is at right angles to the lever, and when it's at thirty degrees to the lever. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A force of 40 N is applied to the end of a lever, 0.30 m from the pivot. Calculate the magnitude of the torque about the pivot when the force is (a) perpendicular to the lever, (b) at 30° to the lever. (2 marks)" A small coded HSC-style diagram: a bar, a pivot triangle at its left end, "0.30 m", and a force arrow labelled "40 N" at the right end with an angle arc "θ" (no value). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> At right angles, tau equals r F, zero point three zero times forty, twelve newton **metres**. At thirty degrees, multiply by sin thirty, a half, giving six point zero newton **metres**. The classic slip is using cos thirty, which gives about ten point four. The angle is between the force and the lever, so it's **sine**.

Visual: card shrinks to the top; "perpendicular" and "at 30° to the lever" underline. `AlignedAlgebra`: "(a) τ = rF = 0.30 × 40 = 12 N m" on the first "metres"; "(b) τ = rF sin 30° = 12 × 0.5 = 6.0 N m" on the second. On "sine" a chip "τ = 0.30 × 40 × cos 30° = 10.4 N m" fades in and is crossed (caption "θ is between F and the lever: use sin θ"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A force of forty newtons acts on the end of a zero point three zero metre handle, directed along the handle towards the pivot. State the moment arm and the torque about the pivot, and the angle between the force and the line from the pivot to the point where it acts. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A 40 N force acts on the end of a handle 0.30 m from a pivot. The force is directed along the handle towards the pivot. (a) State the perpendicular distance from the pivot to the force's line of action. (b) Calculate the torque about the pivot. (c) State the angle θ between the force and the line from the pivot to the point of application. (3 marks)" A small coded diagram: handle, pivot dot, the force arrow at the end pointing towards the pivot. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The line of action passes through the pivot, so the moment arm is zero, and the torque is zero newton **metres**. The line from the pivot points out along the handle, and the force points back in, so the angle is one hundred and eighty **degrees**. Sin one eighty is zero, which agrees. The slip is writing r F, twelve newton metres, because the force is far from the pivot. Distance alone doesn't turn **anything**.

Visual: card shrinks to the top; "towards the pivot" underlines. On the diagram the dashed line of action extends through the pivot; "(a) r⊥ = 0"; on "metres" "(b) τ = F r⊥ = 40 × 0 = 0 N m". On "degrees" the r arrow and force arrow slide tail to tail, arc "(c) θ = 180°", "sin 180° = 0 ✓". On "anything" a chip "τ = rF = 0.30 × 40 = 12 N m" fades in and is crossed (caption "line of action through the pivot: no torque"). Hold about 1 second.

### 14. handoff
> So one force's torque depends on its size, its distance from the pivot, and its angle. But real objects usually have several forces turning them at once, some clockwise and some anticlockwise. A tower crane holds a heavy load far out on one side, and a counterweight close in on the other. How do those turning effects **balance**?

Visual: board clears (camera change) to the tower crane plate (`y12p-tower-crane-v1.png`, new, specified in v10) on a coded ground line: mast at the centre, long jib to the right with the load plate (`phys-y11-crane-load-v1.png`) hanging far out, short counter-jib to the left with its counterweight. On "several forces" amber weight arrows draw down from the load and the counterweight. On "clockwise" an orange curved arrow "clockwise" draws over the jib side; on "anticlockwise" a blue curved arrow "anticlockwise" over the counter-jib side. On "balance" a navy pivot dot at the top of the mast and a chip "Next: how do clockwise and anticlockwise torques balance?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Torque τ: the turning effect of a force about a pivot. Unit: N m (newton metre), never J.
2. τ = r⊥F = rF sin θ. r: distance from the pivot to the point where the force acts. θ: angle between r (pointing out from the pivot) and F. r⊥ = r sin θ: the shortest distance from the pivot to the line of action (moment arm).
3. Only the component of F at right angles to r turns the object. Maximum at θ = 90° (τ = rF); zero when the line of action passes through the pivot (θ = 0° pulling out, θ = 180° pushing in).
4. Example: 80 N on a 0.25 m spanner: 90°: 20 N m; 30°: 10 N m; along the handle: 0. A torque also has a sense: clockwise or anticlockwise.

Memory aid (large, on the notes screen): *Push square, push far.*

## Teaching checks

- **Does it explain causes?** Why distance matters: shown by moving the push in (3). Why an angled force turns less: its along-handle component acts through the pivot; only F sin θ turns (4). Why the moment-arm view gives the same result: r⊥ = r sin θ (5). Why the along-handle push does nothing: its line of action passes through the pivot (6). Why 90° is best: the whole force is then at right angles (7).
- **Misconceptions addressed:** torque is a force (2); torque in joules (3, crossed); a force far from the pivot always turns it (6; crossed in 13); τ = rF for any angle (8, crossed); angle measured from the wrong line (8, crossed; A1's cos slip crossed in 11); the site's 0° label for a push towards the pivot (6, A2).
- **One idea at a time:** the result before the definition (2); right angles (3) before an angle (4) before the second view (5) before the zero case (6) before the graph (7).
- **Video makes it easier:** three pushes, three different turns (2); the push sliding in to half the distance (3); the along component's line passing through the nut (4); the dashed line of action and the violet moment arm (5); r and F sliding tail to tail to show 180° (6); the arrow sweeping while the graph traces sin θ (7).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (force, distance, angle and what it is measured from, direction along the handle), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 22 s and 28 s.
- **Avoided double teaching:** resolving vectors (Year 11) recalled in a clause; no Year 11 video assumed.
- **Syllabus coverage:** `P5-IQ2-05`: the applied torque τ = r⊥F = rF sin θ for a single force; its relationship to rotation qualitatively (2, 7). Balanced torques: v10.
- **Out of scope by design:** several forces and equilibrium (v10), signed sums (v10), τ = Iα and moment of inertia (site extension).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A force of 40 N is applied to the end of a lever, 0.30 m from the pivot. Calculate the magnitude of the torque about the pivot when the force is (a) perpendicular to the lever, (b) at 30° to the lever."
Model answer: (a) τ = rF sin 90° = 0.30 × 40 × 1 = 12 N m. (b) τ = rF sin 30° = 0.30 × 40 × 0.5 = 6.0 N m. Classic mistake (crossed): using cos 30° (10.4 N m).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks).** "A 40 N force acts on the end of a handle 0.30 m from a pivot. The force is directed along the handle towards the pivot. (a) State the perpendicular distance from the pivot to the force's line of action. (b) Calculate the torque about the pivot. (c) State the angle θ between the force and the line from the pivot to the point of application."
Model answer: (a) The line of action passes through the pivot, so r⊥ = 0. (b) τ = F r⊥ = 40 × 0 = 0 N m. (c) The vector from the pivot to the point of application points outwards along the handle and the force points inwards along it, so θ = 180° (sin 180° = 0, consistent with (b)). Classic mistake (crossed): "τ = rF = 12 N m".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Site case (unchanged) | F = 80 N, r = 0.25 m; 90°, 30°, along the handle towards the nut | 1 to 8 |
| Right angles | τ = 0.25 × 80 = 20 N m | 3, 7, 8 |
| Half distance | 0.125 m × 80 N = 10 N m (shown as "half the turning") | 3 |
| 30° | F⊥ = 80 sin 30° = 40 N; F along = 80 cos 30° = 69.3 N (screen label "F cos θ" only); τ = 10 N m | 4, 7 |
| Moment arm | r⊥ = 0.25 sin 30° = 0.125 m; τ = 80 × 0.125 = 10 N m | 5 |
| Along the handle | θ = 180° (in) or 0° (out); τ = 0; 160 N also 0 | 6 |
| Graph | τ = 20 sin θ N m; 30°: 10; 90°: 20; 150°: 10; 180°: 0 | 7 |
| Slips | rF = 20 N m for 30° (crossed); "sin 60°" for an angle given from the perpendicular: 0.25 × 80 × sin 60° = 17.3 N m (not shown as a number) | 8 |
| Scene 2 playback | illustrative turned angles 20°, 10°, 0° (no values on screen) | 2 |
| A1 | 0.30 × 40 = 12 N m; 12 × 0.5 = 6.0 N m; cos slip 0.30 × 40 × cos 30° = 10.39 N m (≈ 10.4) | 10, 11 |
| A2 | r⊥ = 0; τ = 0; θ = 180°; crossed rF = 12 N m | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 0.25 × 80 × sin 90° = 20; sin 30° = 0.5: 10; sin 180° = 0; sin 0° = 0; sin 150° = 0.5: 10; sin 60° = 0.866025: 17.320508.
- 80 sin 30° = 40 N; 80 cos 30° = 69.282032 N; 0.25 sin 30° = 0.125 m; 80 × 0.125 = 10.
- A1: 0.30 × 40 = 12; × 0.5 = 6.0; × cos 30° = 10.392305.
- A2: 0; 180°.
- Stage geometry (author note b): 1,600 px per metre; 0.25 m = 400 px; r⊥ for 30° = 200 px.

## Memory aid check

- **"Push square, push far."** Meaning, as said in scene 9: apply the force at right angles to the line from the pivot to the point where it acts ("square"), and as far from the pivot as possible ("far"), because τ = rF sin θ grows with r and is largest when sin θ = 1. Assumptions checked: "square" is to the line from the pivot to the point of application (r), not to the floor or the bench; the force is applied at the end of r (the moment arm then equals r); a single force about a fixed pivot. It helps a new case: A1 (90° gives the larger torque), the door (push at the handle, at right angles) and v10's crane (the counterweight close in needs a bigger force). "Square" meaning "at right angles" is defined as it is said (an Australian everyday usage). Introduced after the explanation (3 to 7).
- **Considered, not used:** "Only the perpendicular part pays" (good, but less memorable); "Line through the pivot, no turning" (one case only; kept as a key note).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,693 characters**, 15 scenes. Characters per scene (1 to 15): 357, 429, 536, 475, 513, 552, 463, 416, 263, 261, 309, 299, 404, 327, 75. At 13.3 characters per second the speech is about 428 s; add about 3 s for the prediction countdown, about 3 s for the three rotations in scene 2 (partly under speech), 2 s for the sweep in scene 7, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 89 s of holds and countdowns): **about 517 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's "Torque isn't a force" sentences; scene 7's direction sentences (move to v10); scene 8's second slip.

## Opening frame

v08's final frame (designed in this wave, `phys-y12-m5-v08.md`): paper background; top view; the nut-and-plate plate at the left, the spanner plate gripping the nut with its handle pointing right (handle end 400 px from the nut centre); three amber 80 N arrows at the handle end (perpendicular pointing up the frame, at 30° to the handle, and along the handle towards the nut); a "?" curved arrow over the nut; heading "How can primary measurements test the horizontal-launch model?" and the chip "Next: why does a force turn an object more effectively at some angles?". Scene 1 removes the chip and adds the length bracket and force labels; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a coded ground line; the tower crane plate standing on it at the centre of the stage (mast vertical; long jib to the right; short counter-jib to the left with its counterweight blocks); the crane-load plate (bricks on a pallet) hanging from the hook far out along the jib; amber weight arrows down from the load and from the counterweight; an orange curved arrow "clockwise" over the jib side and a blue curved arrow "anticlockwise" over the counter-jib side; a navy pivot dot at the top of the mast; heading unchanged ("Why does a force turn an object more effectively at some angles?"); a chip reads "Next: how do clockwise and anticlockwise torques balance?". No masses or distances shown yet. v10 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v09` (route phys-y12-m5-v09). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v09` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, reveal-torque, right-angles, components, moment-arm, along-handle, sin-graph, two-slips, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: spanner stage (rotating plate layer), component split, line of action and moment arm, tail-to-tail angle, torque graph (`DataGraph`), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 to 5 to 6 camera continue (same spanner); 6 to 7 camera change (graph beside the stage); 7 to 8 clear change; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change to the crane; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v09-learning-review.md`, `science_check` = `checks/p-y12-m5-v09-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-crane-load-v1.png` (1000 × 1600, RGBA; cable attachment point (500, 211) in its JSON): scene 14 (and v10).
- **Checked, not used:** `phys-y11-protractor-v1.png` (angles are coded exactly; a painted protractor adds clutter at the spanner); `phys-y11-scrapyard-crane-magnet-v1.png` (a jib end with a magnet, not a tower crane: it has no counter-jib, so it cannot show the balance).

Need (new plates, Codex), in priority order:
1. `y12p-spanner-v1.png` and `y12p-nut-plate-v1.png`: scenes 1 to 9 and v08 scene 16. Essential.
2. `y12p-tower-crane-v1.png`: scene 14; specified in `phys-y12-m5-v10.md`'s asset brief (not requested twice).

Coded: force arrows, components, r arrow, lines of action, moment arms, right-angle marks, angle arcs, curved turning arrows, pivot dot, graph, lever and handle diagrams in the attempts, calculation strips, crossed chips, attempt cards, countdowns, key notes board, ground line.

Kit gaps (for the v09 build brief):
1. **Spanner stage.** Two registered plate layers (nut and plate fixed; spanner rotating about the nut centre); a point of application at the handle end; force arrows at any angle; an illustrative rotation playback with angle in proportion to torque (author note a).
2. **Moment-arm construction.** Reuse `m5-moment-arm` reconfigured to r = 0.25 m and F = 80 N: dashed line of action, perpendicular from the pivot with right-angle mark and readout; component split with the along component drawn through the pivot.
3. **Tail-to-tail angle.** The r and F arrows slide to a common tail with an arc and readout (0° to 180°).
4. **Torque graph.** `DataGraph` of τ = rF sin θ linked to a sweeping force arrow on the stage.

## Codex asset brief (Year 12 Physics M5 v09: spanner and nut)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v09.md`, route entry phys-y12-m5-v09. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-boss-crossbar-v1.png` (polished steel) and `phys-y11-retort-stand-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-nut-plate-v1.png` (1000 × 1000 px): seen exactly from above: a large steel hexagonal nut on the end of a threaded bolt, sitting on a small square of grey steel plate (the plate about three times the nut's width). The nut centre at the canvas centre. Codex reports the nut centre and the across-flats width in pixels.
2. `y12p-spanner-v1.png` (2400 × 700 px): seen exactly from above: a plain chrome combination spanner, ring end at the left sized to fit the nut in plate 1 when both are displayed at the same scale, straight handle to the right, open jaw at the right end; no markings. Drawn so that when the ring's centre is placed on the nut centre, the spanner can rotate about that point. Codex reports, in plate pixels: the ring centre (the rotation point), the point 0.25 m along the handle at the handle end where forces are applied (state the plate's pixels per metre assumed, with the ring-centre-to-handle-end distance), and the handle's centreline angle (0°).

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm the spanner ring sits on the nut when both are placed at the reported centres at the same scale. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v09-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: torque definition and unit; τ = rF at right angles; only F sin θ turns; r⊥ = r sin θ and τ = r⊥F give the same 10 N m; θ between the outward r and F, 180° for a push towards the pivot and 0° for a pull outwards (site correction 4); maximum at 90°; the drawn perpendicular push turns the nut anticlockwise (author note b).
3. Confirm scene 2's playback is described as illustrative (author note a) and makes no quantitative dynamics claim.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (pushes are arrows; no mechanic).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site note 2 under Decisions to root.

## YouTube metadata (draft)

Title: Torque: Why Angle Matters | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson06.sa.html

The same 80 N push on the end of a spanner turns a nut strongly at right angles, half as well at 30°, and not at all along the handle. Why? Torque is the turning effect of a force: see why only the part of the force at right angles to the handle turns it, how the moment arm gives the same answer, and why a force whose line passes through the pivot does nothing. τ = r⊥F = rF sin θ. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the relationship between the rotation of mechanical systems and the applied torque: τ = r⊥F = rF sin θ"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: testing the projectile model with your own data. Next: how clockwise and anticlockwise torques balance.

#HSCPhysics #Physics #Torque #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Year 11 vectors; check the ranking hook is answerable in 3 s; that the along-handle component visibly passes through the nut; that the tail-to-tail 180° picture is clear; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The rotations, the component through the pivot, the line of action with the moment arm and the sweep with the graph carry the explanation; judge them at playback speed in the voiced preview.
