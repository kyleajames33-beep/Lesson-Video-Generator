# Year 11 Physics FA1 V03: Resolving vectors into components. How can one angled vector be described by two perpendicular parts, and how do I find them? (design)

Status: Revision 1 (2 Nov). Needs student learning review and physics check (Codex), then a Codex error check. Voicing follows the brief 124 Google voice pilot. One new painted plate (a cart, side view) plus the v01-brief drone plate; one small kit gap (projection shadows with a live angle). Nothing recorded; human listening pending.

Narration 5,434 characters, 14 scenes, about 504 s (8.4 minutes): below the 5,500 band on purpose (see "Narration length estimate"; root decides), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of Year 11 Physics (2025 syllabus), Focus Area 1. Templates: `math-a12-d10.md` and `bio-y11-fa1-v05.md`; house conventions from `phys-y11-fa1-v01.md` and `phys-y11-fa1-v02.md` (Revision 1, written just before this one; its handoff frame, scene 14, is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v03.md` (every number recalculated below). Site lesson read (2 Nov, read-only) in full: orient, key terms, splitting a vector, the component formulas (`we-1`), apply, why resolving makes problems easy, independent practice and review: `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson03.sa.html`, SHA256 `5591870ce485c1179b3b283d488ec681bcfc7565c5367c0325c5d8ee0bf55006` (recomputed 2 Nov; matches the pack and the route). Route entry: `phys-y11-fa1-v03` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route start: "Start with Resolving Vectors into Components. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How do components describe the same vector along two axes? Teach only the listed actions; the next video owns its separate question." Next: "phys-y11-fa1-v04: How do I distinguish total path length from change of position?" Route root decisions applied as in v01.

Owner rules applied: as v01 and v02 (no people: the site's rope pull has no puller drawn, the rope runs off the frame; the site's child and wagon are not used; real objects painted; diagrams coded; plates never stretched; one reasoning stage at a time; calculation scenes separate the short task, the equation and grouped givens with units; 3 s prediction countdown; "Pause here to answer." and a 10 s countdown with the full worded question; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; v02 recalled in one sentence; sine and cosine ratios recalled from Stage 5 as a grey chip).

Syllabus content points (Physics 11-12 (2025), Year 11, Fundamentals of mechanics; NESA content-system codenames), quoted from the route JSON `syllabusActions`:

- `cib3157911`: "Use vector diagrams to represent the displacement, velocity and acceleration of an object"
- `cic5180781`: "Resolve vectors into components"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v02's handoff (one arrow at an angle on light axes, with dashed perpendicular outlines and "?"); explains a component as the part of a vector along a chosen axis, shown as the arrow's shadow on that axis; shows that the two perpendicular components, joined tip to tail, rebuild the vector (v02's rule run backwards) and that each acts independently; derives F_x = F cos θ and F_y = F sin θ from the right triangle with θ measured from the x-axis; resolves the site's `we-1` force (100 N at 30°) and checks it by Pythagoras; resolves a displacement whose angle is measured from north, to show that cosine goes with the reference axis (`cic5180781`; `cib3157911` for displacement, velocity and force arrows). Not taught: adding several vectors by components and signed multi-leg displacement (v04); velocity in 2D problems (v06); free-body diagrams and net force (v12, which owns F_x = F cos θ with "θ the angle with the x-axis" as its own syllabus wording); the normal force (v12; the site's "reducing the normal force" is not used, author note b); quadrant handling and atan2 (site correction already logged for L12; every vector here has an acute angle in the first quadrant, author note c).

## Decisions

- **Learner question (route placeholder kept as boundary; causal form proposed, open decision 1).** Route: "How do components describe the same vector along two axes?" Proposed: "How can one angled vector be described by two perpendicular parts, and how do I find them?" The answer, built in order: an angled pull does two jobs at once, and only part of it moves the cart forward (hook); a component is the part of the vector along one axis, its shadow on that axis (2); the two perpendicular parts joined tip to tail rebuild the original, and neither affects the other (3); the right triangle gives F cos θ along the axis the angle is measured from and F sin θ across it (4, 5); the calculation and its check (6); with the angle measured from another axis, the cosine follows the angle (7, 8).
- **Opening frame (v02 handoff).** v02 scene 14's last frame: a single arrow at an angle on light x and y axes with two dashed perpendicular outlines and "?" on each, chip "Next: resolving vectors into components". Scene 1 recalls v02 in one sentence ("two arrows made one; now one arrow becomes two") and puts a cart and a rope under the arrow.
- **Hook (site card 1 "doing two jobs at once" and `we-1`, made visible).** A rope pulls a cart with 100 N at 30° above the ground. The cart can only roll along the ground. So how much of the 100 N actually drags it forward? The answer (86.6 N) is held to scene 6. The site's sled becomes a wheeled cart (a reusable object for later force videos); the numbers are unchanged.
- **Component as a shadow (owner quality bar; site key terms "component", "resolve").** A component is shown as the projection of the arrow onto an axis: light falling straight down casts the arrow's shadow on the x-axis (the x-component); light from the side casts its shadow on the y-axis (the y-component). This makes "the part of the vector along an axis" visible and gives a reason why a component can never be longer than the vector (a shadow of a tilted stick is never longer than the stick). Projection lines are dashed and at right angles to each axis.
- **Why components can replace the vector (v02 recall, site card 1).** The x-component followed by the y-component, tip to tail, lands exactly on the arrow's tip: by v02's rule they add to the original. Because the axes are at right angles, the horizontal part has no up-down effect and the vertical part no sideways effect (site "perpendicular components are independent").
- **The formulas from the triangle (site card 2; Stage 5 trigonometry recalled).** cos θ = adjacent / hypotenuse, so the adjacent side (along the axis the angle is measured from) is F cos θ; sin θ = opposite / hypotenuse gives F sin θ. A live sweep of the angle from 0° to 90° shows the x-shadow shrinking and the y-shadow growing, readouts ticking (100 N arrow: 100, 96.6, 86.6, 70.7, 50.0, 25.9, 0).
- **Prediction (3 s; site orient warm-up, unchanged numbers).** "A 50 N force points at 45° above the horizontal. Which component is bigger?" Answer: equal, 35.4 N each, because cos 45° = sin 45°; below 45° the horizontal part is bigger, above it the vertical part.
- **Worked example (site `we-1`, unchanged numbers; precision stated).** Task "Find the horizontal and vertical components"; equation strip "F_x = F cos θ, F_y = F sin θ (θ from the x-axis)"; givens "F = 100 N; θ = 30° above the horizontal (both taken to three significant figures)". F_x = 86.6 N, F_y = 50.0 N; check √(86.6² + 50.0²) = 100 N (99.998 from the rounded values; grey tag "use unrounded values for the check" per site note 2). Meaning: 86.6 N drags the cart forward; 50.0 N pulls partly upward and doesn't move the cart along. Crossed on screen: "86.6 + 50.0 = 136.6 N" (components add as vectors, not as numbers; site Q2 note).
- **Angle from another axis (pack candidate 2, promoted to a demonstration; site misconception 1).** A drone's displacement of 10.0 m at 30.0° east of north: the angle is measured from north, so north = 10.0 cos 30.0° = 8.66 m and east = 10.0 sin 30.0° = 5.00 m. The physical arrow stays fixed while the reference axis changes (pack visual need), and the two shadows swap formulas. This refutes "horizontal always uses cos".
- **Memory aid (site L03 hook; see "Memory aid check"):** "Cos hugs the angle. Sin sits opposite." With its condition said: the angle at the tail, measured from the axis.
- **Attempts (original, HSC style).** (A1) velocity from the horizontal: a ball launched at 15.0 m s⁻¹ at 40.0° above the horizontal; horizontal 11.5 m s⁻¹, vertical 9.64 m s⁻¹. Crossed: the swap "horizontal 9.64 m s⁻¹". (A2) angle from north: a boat moving at 6.00 m s⁻¹ at 25.0° west of north; north 5.44 m s⁻¹, west 2.54 m s⁻¹. Crossed: "north 2.54 m s⁻¹" (sine for the "vertical" by habit). Data to three significant figures, answers to three. Neither card shows the triangle.
- **Mistake scene:** none separate. Sine and cosine fixed to horizontal and vertical (7; crossed in feedback 2); a component bigger than the vector (2, the shadow; 4); components adding as plain numbers (6, crossed); swapping in A1 (crossed).
- **Significant figures and units.** `we-1` given as 100 N and 30° (site); this design states "taken to three significant figures" on the givens (site precision note in `../site-corrections-phys-y11.md`), so 86.6 N and 50.0 N. Candidate 2, A1 and A2 are given to three significant figures and answered to three. Angles are in degrees (calculators in degree mode: a grey chip in scene 6, "calculator in degrees").
- **Why resolve (site card 3), kept short.** One sentence in the handoff: splitting into perpendicular parts turns a two-direction problem into two one-direction problems, which v04 uses to add multi-leg trips. No multi-vector sum is worked here.
- **Handoff (route next).** Scene 13: a drone path with three legs, the scene 7 components faint under the first leg, and the v04 question chip "total path length, or change of position?".
- **Site sources used:** orient warm-up (prediction); key terms (component, resolve, reference angle, perpendicular); misconceptions 1 and 2 (scenes 7, 2 and 4); card 1 (two jobs; triangle; independence; recombine by Pythagoras); card 2 and `we-1` (scenes 1, 4 to 6); quick check (20 m s⁻¹ at 60°: used as the sweep's 60° stop in proportion, not as a question); "two truths, one lie" D (components don't add as numbers, scene 6); card 3 (handoff sentence); short-answer Q2's note (136.6 is not the magnitude). Not used: wagon pulled by a child (person); "reducing the normal force" (v12); activity (80 N at 25°) and short-answer Q1 and Q2 numbers (left for site practice).
- **Site notes (quoted from site lesson 3, read 2 Nov; for root to log in `../site-corrections-phys-y11.md` if accepted; none is logged yet except the L03 precision line already there):**
  1. `we-1` step 2: "$F_y$ lifts it (reducing the normal force)." Correct for this case, but it brings in the normal force before it is taught (site lesson 12). Teaching-order note only.
  2. Short-answer Q2 model answer: "$\sqrt{43^2 + 25^2} = \sqrt{1849 + 625} = \sqrt{2474} = 49.7 \approx 50\ \text{N}$". The check uses components rounded to two figures, so it misses 50 N by 0.3 N and teaches students to accept a mismatch. Suggest checking with unrounded components (43.30 and 25.00 give 50.00 N) or stating the rounding.
  3. Short-answer Q1 model answer: "$F_x = 60\cos 40° = 46.0\ \text{N}$" and "$38.6\ \text{N}$" while the marking lines give "≈ 46 N" and "≈ 39 N". Mixed precision for the same answer; 60 N has unstated precision. Precision note.
  4. Short-answer Q3 model answer: "if they were not, the components would interfere and could not be handled separately." Vague: non-perpendicular components are valid vector sums but are not independent projections. Suggest: "if they were not at right angles, each component would also have a part along the other direction, so the two directions could not be treated separately."
  - Checked and correct: `we-1` (86.6 N, 50.0 N, recombines to 100 N); orient (35.4 N each); quick check (10 m s⁻¹); misconceptions; card 3 strategy; odd one out (D is the wrong one).
- **Pack questions answered:** `we-1` used unchanged with precision stated; candidate 1 (20.0 N at 60.0°: 10.0 N, 17.3 N) not used as a question, its 60° stop appears in the sweep; candidate 2 promoted to scene 7; the pack's visual needs (switch the given angle between axes without swapping the physical vector; signed projections; right-angle mark) are met in scenes 2, 4 and 7 (all projections here are positive; signs are v04).
- **Cause chain taught, in order:** (1) an angled vector acts along two directions at once (1); (2) a component is its shadow on an axis, never longer than the vector (2); (3) the perpendicular components add back to the vector and act independently (3); (4) the right triangle gives F cos θ along the reference axis and F sin θ across it (4); (5) at 45° they are equal; flatter angles favour the reference axis (5); (6) the calculation and its Pythagoras check; components don't add as numbers (6); (7) cosine follows the reference axis, not "horizontal" (7); (8) memory aid (8).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Mathematics (sine, cosine and tangent ratios in right triangles; Pythagoras); Stage 5 Science (forces in newtons as pushes and pulls); v01 (vectors); v02 (tip to tail, resultant, perpendicular resultants).
- **Learner-visible vocabulary (plain meaning at first use):** component (the part of a vector along one chosen axis, 2); resolve (split a vector into perpendicular components that add back to it, 2); perpendicular (at right angles, 3); reference axis (the axis the angle is measured from, 4); adjacent and opposite (the triangle side next to the angle; the side across from it, 4, Stage 5 recall).
- **Legacy logic ported:** none. Drawing parts: `Arrow`, `Label`, `Dot` (`course-kit.tsx`); the staged triangle of `m5-vector-resolution` (module5/projectile-details: hypotenuse, then adjacent, then opposite, each connected to its ratio) is the layout reference for scene 4, redrawn with Year 11 values.
- **New explainer motion (coded, plus plates):** **projection shadows** (kit gap 1: dashed projection lines drop at right angles from the arrow tip to each axis, and the shadow segment grows along the axis as the light "switches on"; live angle drives both shadows and their readouts); **rebuild** (the x-shadow lifts and the y-shadow slides to its tip, tip to tail, landing on the arrow's tip; v02 vector slide); **angle sweep** (the arrow rotates 0° to 90° with readouts ticking); **reference-axis switch** (the axes rotate under a fixed arrow so the angle arc moves from the x-axis to north, scene 7); `AlignedAlgebra`; right-angle marks and angle arcs; `Countdown`, `QuestionCard` (subject "Physics"), `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top-left; axes or the cart scene on the left two thirds; rows and chips in the right column. Equal unit lengths on both axes always (angles are true).
- **No human figures.** The rope leaves the frame at the top right; nothing pulls it on screen. Narration says "a rope pulls the cart".
- **Author notes (not learner copy):**
  (a) Projection: for a vector of magnitude F at angle θ to the x-axis (0° ≤ θ ≤ 90°), the orthogonal projections are F cos θ and F sin θ. "Shadow" is the orthogonal projection (light perpendicular to the axis); the narration says "light shining straight down onto the axis", which is that case. Shadows from oblique light would be longer and are not used.
  (b) The 50.0 N vertical component reduces the normal force on level ground; not said (v12). Narration: "pulls partly upward, so it doesn't help move the cart along."
  (c) All vectors here are in the first quadrant with acute angles, so every component is positive. Signs and quadrants are v04 and v12 (the atan2 site correction applies there).
  (d) Check of `we-1`: √(86.6² + 50.0²) = 99.998 N from the rounded values; √((100 cos 30°)² + (100 sin 30°)²) = 100 exactly. The screen shows the unrounded check and a grey note.
  (e) Precision: 100 N and 30° are site values with unstated precision; stated as three significant figures on the givens. 50 N at 45° (orient) gives 35.355 N, shown "35.4 N" (three figures, matching the site's answer; the 50 N precision is unstated, so this is said as "about thirty-five").
  (f) Arrow scales: scene 2 to 6 force arrows 4 px per newton (100 N = 400 px; 86.6 → 346 px; 50.0 → 200 px); scene 5 the 50 N arrow at 6 px per newton (300 px; components 212 px); scene 7 displacement 40 px per metre (10.0 m = 400 px; 8.66 → 346; 5.00 → 200).
  (g) Pronunciations: "F cos theta", "F sin theta" ("sine" is said "sin" as written; "cos" as "coz"); "theta"; "thirty degrees"; "eighty-six point six newtons"; "nine point six four"; "five point four four".

Main question: *A rope pulls a cart with 100 N at 30° above the ground. The cart can only roll along the ground, so how much of that 100 N actually drags it forward? And how can one angled vector be described by two perpendicular parts?*
Entry knowledge (Stage 5; v01, v02): sine, cosine, Pythagoras; forces in newtons; vectors; tip to tail.
Stops after: components as shadows on perpendicular axes; recombining them; F cos θ and F sin θ from the triangle with θ from the reference axis; `we-1`; the angle measured from north. No multi-vector component sums, signs or quadrants, no net force.
Handoff: v04, distance and displacement problems: total path length against change of position.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as v01 and v02, plus: the force arrow ink-dark with a warm outline (forces have not been given a colour before; use `C.ink` with the Physics orange outline; open decision 4); components drawn in the same colour as their vector but dashed until named, then solid and thinner; projection lines light grey dashes; the angle arc amber; the reference axis drawn darker than the other axis. Screen notation: F_x and F_y written as F with subscripts; θ; degrees.

### 1. hook (two jobs at once)
> Last time, two arrows at right angles made one. Today we go the other way. A rope pulls this cart with a force of one hundred newtons, at thirty degrees above the **ground**. But the cart can only roll along the ground. So how much of that hundred newtons actually drags it **forward**? An angled pull is doing two jobs at once. Part of it pulls the cart along, and part of it pulls **upward**. Splitting a vector into those two parts is called resolving it.

Visual: opens on v02's handoff frame: the angled arrow on light axes with dashed perpendicular outlines and "?". On the first sentence the axes fade and the arrow drops onto a new scene: a side view of level ground (a thin ground line), the painted cart plate (`phys-y11-cart-side-v1.png`, new) standing on it, a coded rope from the cart's front ring rising at 30° and leaving the frame at the top right. On "ground" the force arrow draws along the rope from the ring: "100 N", with an amber angle arc "30°" between the rope and the ground. On "forward" the cart rolls a short way right along the ground, and a chip "forward part: ? N" writes. On "upward" two faint dashed arrows appear from the ring, one along the ground and one straight up, with tags "along" and "up". The heading writes on: "Resolving vectors into components".

### 2. a component is a shadow
> Here's a good way to see those parts. Put the arrow on a pair of axes, one along the ground, one straight up. Now imagine light shining straight down onto the ground axis. The arrow casts a **shadow** along it. That shadow is the horizontal **component**: the part of the vector along that axis. Light from the side casts a shadow up the other axis. That's the vertical **component**. Splitting a vector into components like this is called resolving it. And notice, a shadow of a tilted arrow can never be longer than the arrow **itself**.

Visual: the cart and rope fade to a faint ghost; the force arrow stays and light x (along the ground) and y (up) axes draw from its tail, equal scales (author note f). On "shadow" a soft beam of parallel light lines falls from above (kit gap 1) and a dashed projection line drops from the arrow tip straight down to the x-axis; a dashed shadow segment grows along the x-axis from the tail to that foot. On "component" (first) it turns solid: "F_x: horizontal component" with the gloss "component: the part of a vector along an axis". On "Light from the side" the beam comes from the right and the projection line runs across to the y-axis; on "component" (second) the y-shadow turns solid: "F_y: vertical component". On "resolving" the right column writes "resolve: split into perpendicular components". On "itself" a `PenArrow` compares the x-shadow with the arrow, and the arrow briefly tilts flatter and steeper: the shadow lengthens toward, but never past, the arrow's length.

### 3. the parts rebuild the vector, and act independently
> Why can we swap the arrow for its two components? Join them tip to tail. The horizontal component, then the vertical one from its tip. They land exactly on the arrow's **tip**. So by the rule from last time, they add up to the original vector. And because they're perpendicular, at right angles, they don't interfere. The horizontal part has no up or down effect. The vertical part has no sideways **effect**. Each one can be dealt with on its own. You've actually seen this already. Last time, the boat's three point zero across and four point zero downstream made five point zero metres per second, at fifty-three degrees. Resolve that five point zero back along the two directions, and you get three point zero and four point **zero** again. Resolving just undoes adding.

Visual: on "Join them" the x-component lifts off the axis; the y-component slides so its tail sits on the x-component's tip (v02 slide, ghosts left on the axes); on "tip" the chain ends exactly at the arrow's tip, which glows, and a right-angle mark draws at the corner; row "F_x + F_y (tip to tail) = F". On "perpendicular" a gloss "perpendicular: at right angles". On "no up or down effect" a small cart icon from the ghost scene nudges right along the x-arrow only; on "effect" a small dot rises along the y-arrow only. Tag "independent". On "You've actually seen this" the v02 boat triangle returns small at the right (3.0 across, 4.0 downstream, resultant 5.0 m s⁻¹ at 53°); the two legs fade, then on "zero" its shadows draw back along the across and downstream directions: rows "5.0 cos 53° ≈ 3.0 m s⁻¹" and "5.0 sin 53° ≈ 4.0 m s⁻¹" (grey "angle measured from the heading"), tag "resolving undoes adding".

### 4. finding them: cos along, sin across
> So how long is each shadow? The vector and its two components make a right-angled triangle. The vector is the hypotenuse, and the angle, called theta, a Greek letter we use for angles, sits at its tail, measured from the horizontal axis. The side next to that angle is the **adjacent** side. Cos theta is adjacent over hypotenuse, so the horizontal component is F cos **theta**. The side across from the angle is the opposite side. Sin theta is opposite over hypotenuse, so the vertical component is F sin **theta**. Watch them change as the angle **grows**.

Visual: the chain becomes a clean right triangle on the axes: hypotenuse "F" (the vector), amber arc "θ" at the tail, the horizontal axis drawn darker with a tag "reference axis: θ measured from here". On "adjacent" the horizontal leg glows with "adjacent"; grey chip "cos θ = adjacent / hypotenuse"; on the first "theta" row "F_x = F cos θ". The vertical leg glows "opposite"; chip "sin θ = opposite / hypotenuse"; on the second "theta" row "F_y = F sin θ". On "grows" the angle sweep (kit gap 1): the 100 N arrow rotates from 0° to 90° over about 4 s with readouts ticking in the right column, stopping briefly at 30° (86.6 and 50.0), 60° (50.0 and 86.6) and 90° (0 and 100); the shadows shrink and grow on the axes. The arrow returns to 30° and the readouts clear.

### 5. prediction (countdown, 3 seconds)
> Quick prediction. A fifty newton force points at forty-five degrees above the horizontal. Which component is bigger, the horizontal one or the vertical **one**?

Visual: board clears to fresh axes: a 50 N arrow at 45° (author note f), its arc "45°", no shadows, no readouts. Chips "horizontal bigger", "vertical bigger", "equal". On "one" the 3 s `Countdown` runs.

### 6. prediction answer, then the worked example
> They're equal. At forty-five degrees the triangle has two equal legs, so cos and sin are the same, so each component is fifty times cos forty-five, about thirty-five **newtons**. Flatter than that, the horizontal part wins. Steeper, the vertical part does. Now our cart. Find the horizontal and vertical components of the one hundred newton pull, at thirty degrees. The horizontal component is one hundred cos thirty, eighty-six point six **newtons**. That's the part dragging the cart forward. The vertical component is one hundred sin thirty, fifty point zero **newtons**, pulling partly upward. Check: Pythagoras on those two gives back one hundred **newtons**. But add them as plain numbers and you'd get a hundred and thirty-six, which is more than the pull itself. Components add as vectors, not as **numbers**.

Visual: on "newtons" (first) both shadows of the 50 N arrow draw at once, equal, "35.4 N" each (grey "50 cos 45° = 50 sin 45° ≈ 35.4 N"). On "Flatter" the arrow dips to 30°, x-shadow longer; on "Steeper" it rises to 60°, y-shadow longer. Board clears to the calculation layout: task strip "Find the horizontal and vertical components"; equation strip "F_x = F cos θ, F_y = F sin θ (θ from the horizontal)"; givens (navy) "F = 100 N", "θ = 30° above the horizontal", grey "(both taken to 3 significant figures)", grey chip "calculator in degrees". Left: the cart scene returns with the 100 N arrow along the rope and axes at the ring. On "newtons" (second) row "F_x = 100 cos 30° = 86.6 N" and the x-shadow along the ground turns solid, labelled "86.6 N: drags it forward" (the hook's chip "forward part: ? N" updates to "86.6 N"). On "newtons" (third) row "F_y = 100 sin 30° = 50.0 N"; the y-shadow labelled "50.0 N: pulls partly up". On "Check" row "√(86.6² + 50.0²) ≈ 100 N" (grey "check with unrounded values: exactly 100", author note d). On "numbers" (last bold) a chip "86.6 + 50.0 = 136.6 N" fades in and is crossed (caption "components add tip to tail, not as numbers"). Boxed answer: "F_x = 86.6 N (horizontal), F_y = 50.0 N (vertical)".

### 7. when the angle is measured from north
> Careful, though. Cos doesn't always go with the horizontal. A drone's displacement is ten point zero metres, at thirty degrees east of **north**. Here the angle is measured from north. So north is the side next to the angle. North is ten cos thirty, eight point six six **metres**. East is across from the angle, so it's ten sin thirty, five point zero zero **metres**. Same arrow, different reference axis, and the cos moves with the **angle**.

Visual: board clears to a plan view with compass and light axes (east right, north up), the drone plate (`phys-y11-drone-top-v1.png`) at the tail. A navy displacement arrow "10.0 m" draws at 30° east of north. On "north" (first bold) the amber arc draws between the north axis and the arrow, "30.0°", and the north axis turns dark: tag "reference axis: north". On "next to the angle" the north leg glows "adjacent". On "metres" (first) projection onto north turns solid: "north: 10.0 cos 30.0° = 8.66 m"; on "metres" (second) "east: 10.0 sin 30.0° = 5.00 m". On "Same arrow" the reference-axis switch (kit): the arc slides from north round to the east axis (now "60.0° north of east"), and the formulas swap places beside the same two shadows ("east: 10.0 cos 60.0° = 5.00 m", "north: 10.0 sin 60.0° = 8.66 m"), proving the shadows didn't change. On "angle" a chip "horizontal always uses cos" fades in and is crossed (caption "cos goes with the reference axis").

### 8. memory aid
> Here's a way to remember it. Cos hugs the angle. Sin sits opposite. The component along the axis the angle is measured from hugs the angle, so it uses cos. The other one sits opposite, so it uses sin. Just find where the angle is **first**.

Visual: the scene 4 triangle and the scene 7 drone triangle return side by side. On "Cos hugs the angle" an amber hug outline wraps the arc and the leg next to it in both triangles, labelled "cos"; on "Sin sits opposite" the far leg in each is ringed "sin". The handwritten line writes large: "Cos hugs the angle. Sin sits opposite." Under it, smaller: "θ at the tail, measured from the axis." On "first" both arcs pulse. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A ball is launched at fifteen point zero metres per second, at forty point zero degrees above the horizontal. Find the horizontal and vertical components of its velocity. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball is launched with a velocity of 15.0 m s⁻¹ at 40.0° above the horizontal. Calculate the horizontal and vertical components of this velocity." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no triangle).

### 10. feedback 1 (brief)
> The angle is measured from the horizontal, so the horizontal component hugs it. Fifteen cos forty is eleven point five metres per **second**. The vertical component is fifteen sin forty, nine point six four metres per **second**. Both to three significant figures, like the data. Check: Pythagoras on those gives back fifteen point zero. Swapping them, and calling nine point six four the horizontal part, is the slip to **avoid**.

Visual: card shrinks to the top. A small triangle draws: hypotenuse "15.0 m s⁻¹", arc "40.0°" at the tail against the horizontal axis (darker; "above the horizontal" underlined). Rows: on "second" (first) "v_x = 15.0 cos 40.0° = 11.5 m s⁻¹"; on "second" (second) "v_y = 15.0 sin 40.0° = 9.64 m s⁻¹" ("horizontal and vertical components" underlined). Grey tag "3 significant figures"; on "Check" a grey row "√(11.49² + 9.642²) = 15.0". Boxed answer "horizontal 11.5 m s⁻¹, vertical 9.64 m s⁻¹". On "avoid" a chip "horizontal = 9.64 m s⁻¹" fades in and is crossed (caption "sin and cos swapped"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A boat moves at six point zero zero metres per second, at twenty-five point zero degrees west of north. Find the components of its velocity toward the north and toward the west. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A boat moves with a velocity of 6.00 m s⁻¹ in a direction 25.0° west of north. Calculate the components of this velocity towards the north and towards the west." The top-view boat plate (`phys-y11-boat-top-v1.png`) sits beside the card, bow pointing straight up, with a small compass (no velocity arrow, no angle). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> Here the angle is measured from north, so north hugs the angle. North is six cos twenty-five, five point four four metres per **second**. West sits opposite: six sin twenty-five, two point five four metres per **second**. Using sin for north, just because north is up the page, gives two point five four for north. That's the classic **slip**.

Visual: card shrinks to the top. Plan view: navy-free velocity triangle in orange: hypotenuse "6.00 m s⁻¹" pointing up and to the left, arc "25.0°" against the north axis (darker; "west of north" underlined). Rows: on "second" (first) "north: 6.00 cos 25.0° = 5.44 m s⁻¹"; on "second" (second) "west: 6.00 sin 25.0° = 2.54 m s⁻¹". Boxed answer "north 5.44 m s⁻¹, west 2.54 m s⁻¹". On "slip" a chip "north = 6.00 sin 25.0° = 2.54 m s⁻¹" fades in and is crossed (caption "the angle is measured from north"). Hold about 1 second.

### 13. handoff
> So any vector can be split into two perpendicular parts, and each part can be handled on its own. That turns a problem in two directions into two problems in one direction. Next time, we'll use that on journeys with several legs, and separate the total path length from the change in **position**.

Visual: board clears. The memory line returns small at the top. On the second sentence the scene 7 drone arrow returns with its two components, which slide apart onto separate horizontal and vertical number lines ("east", "north"). On "position" a drone path with three legs draws (east, north, then back west, amber trail) with a start pin and a chip "total path length, or change of position?" and a chip "Next: distance and displacement problems". No values. Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A component is the part of a vector along a chosen axis (its shadow on that axis). Resolving splits a vector into two perpendicular components, which add tip to tail to give the original and act independently.
2. For θ measured from the x-axis: F_x = F cos θ, F_y = F sin θ. Check: F = √(F_x² + F_y²). A component is never larger than the vector.
3. Cos goes with the axis the angle is measured from; sin goes with the other axis. Check where the angle is before choosing (for example, θ east of north: north = F cos θ).
4. Components add as vectors, not as numbers (86.6 N + 50.0 N is not the 100 N pull).

Memory aid (large, on the notes screen): *Cos hugs the angle. Sin sits opposite.* Second line: *θ at the tail, measured from the axis.*

## Teaching checks

- **Does it explain causes?** Why an angled pull does less forward work than its size: only its shadow along the ground acts along the ground (1, 2, 6). Why a component can't exceed the vector: a tilted arrow's shadow is shorter (2). Why components can replace the vector: tip to tail they rebuild it (3). Why they can be handled separately: perpendicular parts have no effect along each other (3). Why cos and sin: the adjacent and opposite sides of the right triangle (4). Why they're equal at 45° (6). Why "horizontal uses cos" fails: cos follows the reference axis (7).
- **Misconceptions addressed:** horizontal always cos (7, crossed; feedback 2, crossed); a component larger than the vector (2, 4; key note 2); components add as numbers (6, crossed; key note 4); swapping sin and cos (feedback 1, crossed).
- **One idea at a time:** shadow (2), rebuild and independence (3), formulas (4), prediction (5), calculation (6), other reference axis (7).
- **Video makes it easier:** the student sees the cart roll only along the ground under an angled rope (1), watches light cast each component (2), watches the components rebuild the arrow (3), watches the shadows trade length as the angle sweeps (4), and watches the reference axis swing under a fixed arrow while the shadows stay the same (7).
- **Response opportunity:** one 3 s prediction and two unseen HSC-style tasks with every condition visible (magnitude with unit, angle with its reference), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 33 s and 26 s (scenes 10 and 12).
- **Avoided double teaching:** v02's tip-to-tail rule is used, not re-taught; sine and cosine ratios are grey chips.
- **Syllabus coverage:** `cic5180781` (scenes 2 to 7, attempts); `cib3157911` (force, displacement and velocity arrows drawn and resolved: 1, 6, 7, attempts; acceleration arrows were shown in v02).
- **Out of scope by design:** component sums of several vectors and signs (v04); net force (v12); normal force; quadrants.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A ball is launched with a velocity of 15.0 m s⁻¹ at 40.0° above the horizontal. Calculate the horizontal and vertical components of this velocity."
Model answer: The angle is from the horizontal: v_x = 15.0 cos 40.0° = 11.5 m s⁻¹; v_y = 15.0 sin 40.0° = 9.64 m s⁻¹ (three significant figures). Check: √(11.49² + 9.642²) = 15.0. Classic mistake (crossed): "horizontal 9.64 m s⁻¹".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A boat moves with a velocity of 6.00 m s⁻¹ in a direction 25.0° west of north. Calculate the components of this velocity towards the north and towards the west."
Model answer: The angle is from north: north = 6.00 cos 25.0° = 5.44 m s⁻¹; west = 6.00 sin 25.0° = 2.54 m s⁻¹. Classic mistake (crossed): "north = 2.54 m s⁻¹".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Site we-1 | 100 N at 30° (taken as 3 s.f.); F_x = 86.6 N; F_y = 50.0 N; check 100 N; crossed 136.6 N | 1, 2, 3, 4, 6 |
| Sweep (100 N) | 0°: 100, 0; 30°: 86.6, 50.0; 60°: 50.0, 86.6; 90°: 0, 100 (also 15°: 96.6, 25.9; 45°: 70.7, 70.7; 75°: 25.9, 96.6 passing) | 4 |
| Orient (prediction) | 50 N at 45°: 35.4 N each (35.355) | 5, 6 |
| Pack candidate 2 | 10.0 m at 30.0° east of north: north 8.66 m, east 5.00 m; same as 60.0° north of east | 7, 8 |
| v02 boat resolved back | 5.0 m s⁻¹ at 53° (53.13°) from the heading: 3.0 across, 4.0 downstream (5.0 cos 53° = 3.01, 5.0 sin 53° = 3.99 with the rounded angle; 3.000 and 4.000 with 53.13°) | 3 |
| A1 | 15.0 m s⁻¹ at 40.0°: 11.5 and 9.64 m s⁻¹; crossed 9.64 as horizontal | 9, 10 |
| A2 | 6.00 m s⁻¹ at 25.0° W of N: north 5.44, west 2.54 m s⁻¹; crossed north 2.54 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 100 cos 30° = 86.6025; 100 sin 30° = 50.0000; √(86.6² + 50.0²) = 99.998; 86.6 + 50.0 = 136.6.
- 100 cos and sin at 15°, 45°, 60°, 75°: 96.59/25.88, 70.71/70.71, 50.00/86.60, 25.88/96.59.
- 50 cos 45° = 50 sin 45° = 35.355.
- 10.0 cos 30.0° = 8.660; 10.0 sin 30.0° = 5.000; 10.0 cos 60.0° = 5.000; 10.0 sin 60.0° = 8.660.
- 15.0 cos 40.0° = 11.491 (11.5); 15.0 sin 40.0° = 9.642 (9.64); recombine 15.000.
- 6.00 cos 25.0° = 5.438 (5.44); 6.00 sin 25.0° = 2.536 (2.54); recombine 6.000.
- v02 boat: 5.0 cos 53.13° = 3.000, 5.0 sin 53.13° = 4.000; with 53°: 3.009 and 3.993 (both 3.0 and 4.0 to two significant figures).
- Pack candidate 1 (not asked): 20.0 cos 60.0° = 10.0 N; 20.0 sin 60.0° = 17.3 N.
- Arrow scales (author note f).

## Memory aid check

- **"Cos hugs the angle. Sin sits opposite."** From the site's lesson 3 memory hook (unchanged wording). Meaning, as said in scene 8: the component along the axis the angle is measured from is next to the angle in the triangle, so it uses cos; the other component uses sin. Assumptions checked: θ is the angle at the vector's tail between the vector and one axis, and the axes are perpendicular; for 0° ≤ θ ≤ 90° both components are positive (author note c). If an exam gives the angle to the other axis (A2, scene 7), the aid still works because it follows the angle, not "horizontal". Limit: it does not give signs for vectors pointing into other quadrants (v04 and v12). It helps a new case: both attempts test it with the angle on different axes. Introduced after the triangle (4) and the switch (7).
- **Considered, not used:** "SOH CAH TOA" (Stage 5 students know it; it gives the ratios but not which component is adjacent, which is the actual error).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,434 characters**, 14 scenes. Characters per scene (1 to 14): 446, 523, 762, 542, 156, 797, 429, 236, 203, 419, 209, 331, 293, 75. At 13.3 characters per second the speech is about 409 s; add about 15 s of holds and settling (the cart roll in scene 1, the light beams in 2, the rebuild in 3, the angle sweep in 4, about 4 s, and the axis switch in 7), 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds and about 55 s more of the quiet notes hold (about 95 s): **about 504 s**, under the 570 s cap and **66 characters below the 5,500 band**. The first draft counted 4,976; four teaching additions were made (the v02 boat resolved back to 3.0 and 4.0, the gloss for theta, why 45° gives equal legs, the Pythagoras check in feedback 1). The content (one idea, one formula pair, one reference-axis twist) does not fill more without padding: a second worked force or a component sum of two vectors would be padding or v04's job. Root decides whether to accept about 8.4 minutes. Scene 6 is the longest (the prediction answer and the worked example share it); its rows must be written before each value is spoken. Reserve trims if the voiced take runs long: scene 6's "Flatter than that ... Steeper, the vertical part does." (keep the dip and rise); scene 3's last sentence; scene 13's second sentence.

## Scene list and build ids

Lesson key `p-y11-v03` (route phys-y11-fa1-v03). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v03` and build folder `docs/production/claude-pm/lessons/p-y11-v03` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, shadow, rebuild, cos-sin, prediction, worked-cart, from-north, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except prediction (`hold`: the learner compares two equal-looking legs during the 3 s countdown), attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): v02's handoff frame continues into scene 1 (camera continue: the arrow drops onto the rope); 1 to 2 camera continue (the cart ghosts; the arrow stays); 2 to 3 to 4 camera continue (same axes); 4 to 5 clear change; 5 to 6 camera continue, then clear change to the calculation layout mid-scene on "Now our cart"; 6 to 7 clear change; 7 to 8 camera pull back to two triangles; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s). key-notes about 60 s. Review evidence paths: `learning_review` = `checks/p-y11-v03-learning-review.md`, `science_check` = `checks/p-y11-v03-physics-check.md`.

## Assets

Have (inspected 2 Nov): none existing fits a pulled cart; `b4-car-blue-v1.png` (a car on a rope would mislead: towing is not this case). From the v01 Codex asset brief (pending): `phys-y11-drone-top-v1.png` (scene 7), `phys-y11-boat-top-v1.png` (scene 11).

Need (new plate, Codex):
1. `phys-y11-cart-side-v1.png`: scenes 1, 2 (ghost), 6. Essential (the hook's "only rolls along the ground" depends on a recognisable wheeled object; a coded box would be clip art). Also reusable for later force videos (v12 onward).

Coded: ground line, rope, axes, light beams and projection lines, shadows, all arrows, arcs, right-angle marks, the small "cart icon" in scene 3 (a tiny scaled copy of the cart plate, not a new drawing), compass, number lines, option chips, crossed chips, attempt cards, rows, countdowns, key notes board.

Kit gaps (for the v03 build brief):
1. **Projection shadows with a live angle.** Given a vector (magnitude, angle, reference axis), draw dashed projection lines at right angles to each axis and the shadow segments on the axes, with optional parallel "light" lines; animate the angle (sweep with timed stops) and the reference axis (rotate the arc and relabel formulas while the arrow stays fixed); readouts computed from the same values (no typed numbers).
2. **Vector slide** (from v02 kit gap 1), reused for the rebuild.

## Codex asset brief (Year 11 Physics FA1 v03, cart)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y11-fa1-v03.md`, route entry phys-y11-fa1-v03. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Same standing requirements as the v01 brief: transparent PNG with a true alpha channel, clean edges with no fringe or halo, ink and watercolour matched to `public/assets/biology/b4-car-blue-v1.png`, at least 8 per cent clear margin, no text, letters, numbers, brands, people, hands, faces, backdrop, glow or ground shadow; never stretched.

1. `phys-y11-cart-side-v1.png` (2000 × 1200 px): a sturdy four-wheeled wooden cart (a flat deck with low slatted sides and four spoked or solid rubber wheels), loaded with two plain wooden crates, seen from exactly side-on (no perspective tilt), facing right. A metal tow ring fixed at the front edge of the deck, at deck height, clearly visible so a coded rope can attach to it. No handle, no tow bar, no rope. Wheels touch a common baseline (the bottom of the wheels must be level so the cart sits on a coded ground line). It must read clearly at 360 px wide on the paper background. Codex reports the tow ring centre and the wheel baseline in plate pixels.

Report inspection on the paper and dark board backgrounds at about 360 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y11-fa1-v03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: component as orthogonal projection ("light shining straight down", author note a); components rebuild the vector tip to tail; perpendicular components act independently; F_x = F cos θ and F_y = F sin θ for θ from the x-axis; cos follows the reference axis; a component never exceeds the vector; components don't add as numbers; the 50.0 N "pulls partly upward, so it doesn't help move the cart along" (no normal-force claim, author note b).
3. Confirm the precision statements: `we-1` givens "taken to 3 significant figures"; the Pythagoras check shown with unrounded values; A1, A2 and the drone case at three significant figures.
4. Confirm every vector is in the first quadrant with an acute angle and no sign is needed.
5. Confirm both attempt cards are original, carry every condition (magnitude with unit, angle with its reference), and show no triangle or hint.
6. Confirm the two syllabus quotes match the route JSON `syllabusActions` exactly.
7. Confirm no person is drawn or requested (no puller on the rope); no em dash (U+2014) anywhere in this file; Australian spelling.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Report site notes 1 to 4 under Decisions to root for `../site-corrections-phys-y11.md`.

## YouTube metadata (draft)

Title: Resolving Vectors into Components: When to Use Sin and Cos | Year 11 Physics

(Title length: 78 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson03.sa.html

A rope pulls a cart with 100 N at 30° above the ground, but the cart can only roll along the ground. How much of the pull drags it forward? See a component as the shadow of a vector on an axis, why two perpendicular components can replace the vector, and where F cos θ and F sin θ come from. Then resolve the 100 N pull, and a displacement measured from north, to see why cos goes with the axis the angle is measured from, not always the horizontal. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Use vector diagrams to represent the displacement, velocity and acceleration of an object"
"Resolve vectors into components"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Vector diagrams, adding and subtracting (previous video). Next: Distance and displacement problems.

#Year11Physics #Physics #Vectors #HSCScience

## Open decisions

- **1. Learner question wording (root).** Proposed causal form: "How can one angled vector be described by two perpendicular parts, and how do I find them?"
- **2. A force before forces (root).** The site's worked example is a 100 N force; forces as vectors are taught formally in v12. This design uses Stage 5 "forces are pushes and pulls measured in newtons" and makes no claim beyond the components. Alternative if root prefers velocity-only examples before v12: replace `we-1` with a 100 m s⁻¹ velocity at 30° (same numbers), losing the cart's "only rolls along the ground" cause.
- **3. Precision wording.** "Taken to 3 significant figures" is added to the site's 100 N and 30°. Confirm, or state them as exact teaching values and give 86.6 N and 50.0 N as "to three significant figures".
- **4. Force colour.** v01 and v02 set displacement navy, velocity orange, acceleration rose; forces need a colour for the whole run. This design uses ink with an orange outline; root to fix the course-wide force colour before v12.
- **5. Length (root).** 5,434 characters, about 504 s, just under the 5,500 floor. Accept as is (recommended), or add the site's activity (80 N at 25°, with its recombination check) as a third in-teaching example (about 300 characters).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v02; check the shadow picture makes "component" concrete and correct; that the hook question is answered at the right moment (scene 6); that the sweep is followable at speed; that the axis switch in scene 7 shows "same arrow, same shadows" clearly; that the attempt cards give nothing away), then the Codex physics check and error check.
- The light beams, rebuild, sweep and axis switch carry the explanation; judge at playback speed. Every shadow and readout must be computed from the same magnitude and angle.
