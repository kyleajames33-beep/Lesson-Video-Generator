# Year 11 Physics FA1 V12: How can a free-body diagram determine the net force? Isolating one object, resolving forces with F_x = F cos θ and F_y = F sin θ, and adding components (design)

Status: Revision 2 (2 Nov): brief 145 repairs applied (scene 5 now says the upward component reduces the normal force instead of lifting the sledge; 5,323 characters, about 494 s). Needs a Codex error check.

Narration 5,323 characters, 14 scenes, about 494 s (8.2 minutes) including one 3 s prediction countdown, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). **Slightly below the 5,500 character band:** the two content points are fully taught without padding at about 5,300 characters; root decides whether to accept it (open decision 5).

Scope: twelfth video of Year 11 Physics (2025), Focus Area 1, and the first of the "Forces and motion" group. Templates: `math-a12-d10.md` (calculation layout, aligned algebra, result lines on cues, coded diagrams) and `bio-y11-fa1-v05.md` (painted objects at native aspect, no people). Route entry **phys-y11-fa1-v12** in `../../phys-y11-video-route.json` (route-approved by root 1 Nov; playlist order 12; kind concept). Pre-design pack `../pre-design/phys-y11/phys-y11-fa1-v12.md`. Site lesson read in full as text (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson12.sa.html`, SHA256 `e609990cbaa9ef233fbaefc546811eb9b9069019235c6d19f99a0bc0e5d4598b` (recomputed 2 Nov). Sections used: drawing a free-body diagram (the dot and its arrows; the quick check on the force the box exerts on the table), resolving forces into components (worked example `we-1`, numbers unchanged), finding the net force (sum the components, recombine), misconceptions 1 and 2, the warm-up (weight and normal on a resting object). Three site errors in this lesson are already logged (friction "opposing motion", N = mg only under stated conditions, inverse tangent and quadrants); this design applies all three and does not repeat them. Lesson review key **p-y11-v12**.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Forces and motion"; local ledger IDs P25-FA1-G3-01 and P25-FA1-G3-02; official CMS codenames), quoted from the route JSON `syllabusActions` in linear form:

- `cibfd5f69e`: "Resolve vectors into perpendicular components using F_x = F cos θ and F_y = F sin θ where θ is the angle with the x-axis"
- `cic6c0b2c4`: "Use free-body diagrams and vector analysis to determine the net force acting on an object"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary.** Entry knowledge (route): Stage 5 Science and Mathematics (forces as pushes and pulls, weight, right-triangle trigonometry, Pythagoras) and phys-y11-fa1-v11 (vectors add head to tail; perpendicular parts combine by Pythagoras and tan). From earlier FA1 videos, recalled: vectors and scale arrows (v02); W = mg with g = 9.80 m/s² is Stage 5 knowledge, used with a one-phrase reminder. Start (route): "Start with Free-Body Diagrams and Net Force. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Stop (route): "Stop after the learner can answer: How can a free-body diagram determine the net force? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa1-v13: How can I explain and apply newton's first law and equilibrium?" (placeholder wording; root rewrites it before v13's design). Not taught: Newton's laws as laws (v13, v14); what a zero or non-zero net force does to motion beyond one sentence; friction coefficients (later FA1); inclined planes (later FA1); tension in connected bodies.

**Opening frame.** v11 (Revision 1, written just before this design) ends scene 13 with the sledge plate `y11p-sledge-v1.png` on a coded snow line, a coded rope rising at an angle with an orange force arrow along it, a short grey downward arrow, and the chip "Next: How can a free-body diagram determine the net force?". V12 opens there: the chip becomes the heading, the rope's angle settles at 20° and its arrow is labelled 150 N.

## Decisions

- **Learner question kept (route), answered as a cause.** "How can a free-body diagram determine the net force?" The answer, built in order: a free-body diagram isolates one object and draws every force acting on it, so nothing is missed and nothing that acts on something else sneaks in (2, 3); forces are vectors, so they can't be added by size; resolving each into x and y components, its shadows on the axes, turns the sum into two ordinary signed additions (4 to 6); the two sums, recombined, are the net force (7, 8).
- **Hook surprise and prediction (site worked example re-staged).** The sledge is pulled with 150 N along a rope tilted 20° up. "How much of that pulls it forward: all 150 newtons, more, or less?" A 3 s countdown follows. Scene 5 answers: 141 N forward, and 51.3 N upward, which reduces the normal force. The surprise is that a pull at an angle does two jobs.
- **Isolate first (site card 1 and misconception 1; owner physics bar).** Scene 2 shows the whole scene (sledge, snow, rope, the Earth as a grey curve below), then fades everything except the sledge, which shrinks to a dot. Each force is named as "by what, on what": the Earth on the sledge (weight), the snow on the sledge (normal and friction), the rope on the sledge (tension). The sledge's push down on the snow is drawn once on the snow and crossed: it acts on the snow, not on the sledge. Rule on screen and in the memory aid: "Forces on it, not by it."
- **Force meanings with the logged corrections applied.** Weight W = mg, down (the Earth's pull). Normal force N: the snow's push, perpendicular to the surface. Friction: along the surface, against the sledge sliding over the snow (logged correction: "opposes relative sliding"; the snow is still, so it points backwards). Tension T: the rope's pull, along the rope. N is found from the vertical components in scene 7, not assumed equal to mg (logged correction), and comes out less than mg because the rope's upward pull takes some of the load.
- **Resolving as shadows (cause before formula; `cibfd5f69e`).** Scene 4 shines a coded light from straight above and from the side: the 150 N arrow's shadow on the x-axis is F cos θ and on the y-axis is F sin θ. The rope's angle sweeps 0° to 90° and back to 20°: the x shadow shrinks as the y shadow grows (at 45° they are equal). Then the formulas, with "θ is the angle with the x-axis" (the syllabus condition) written and shown with an arc from the x-axis. The direction rule: components point the way their shadows point; a component pointing left or down is negative.
- **Worked example 1 (site `we-1`, numbers unchanged).** F = 150 N at 20° above the horizontal: F_x = 150 cos 20° = 141 N, F_y = 150 sin 20° = 51.3 N (150 taken as three figures, as the site implies; author note b). The site's own interpretation is kept: most of the pull is horizontal because 20° is shallow, and F_y reduces the normal force on the sledge (it does not lift it, because the sledge stays on the snow).
- **Net force is a vector sum (site card 3 and misconception 2).** Adding the sizes of the four sledge forces gives 586 N, which is meaningless (shown and crossed). Instead: add every x component, add every y component, then recombine.
- **Worked example 2 (new numbers on the site's sledge; `cic6c0b2c4`).** Sledge mass 20.0 kg (W = 196 N), the 150 N pull at 20°, friction 95.0 N backwards, sliding along level snow without lifting off. Vertical: the sledge doesn't lift off or sink in, so its vertical components add to zero; N + 51.3 − 196 = 0 gives N = 145 N. Horizontal: 141 − 95.0 = 46.0 N. Net force 46.0 N forward (horizontal). Author note c records why the "no lifting off" condition gives ΣF_y = 0 at this level and how v13 formalises it.
- **Recombining two non-zero sums (scene 8).** A boat (v11's white boat plate, plan view) pulled by two horizontal ropes, 800 N east and 600 N north (pack candidate 1's 3-4-5 shape, scaled to a boat): F_net = √(800² + 600²) = 1000 N = 1.00 kN, 36.9° north of east. The quadrant is chosen from the signs of the sums (logged correction on inverse tangent), shown by a small sign-to-quadrant compass.
- **Memory aid (scene 8): "Forces on it, not by it. Split, sum, recombine."** The first line is the free-body rule; the second is the vector-analysis method. Assumptions under "Memory aid check".
- **Attempts (original).** (A1, free-body diagram and a one-axis net force) a 3.00 kg box pushed across a level floor by a horizontal 20.0 N force with friction 14.0 N: forces W = 29.4 N down, N = 29.4 N up (level floor, horizontal push), 20.0 N push, 14.0 N friction; net force 6.0 N in the direction of the push. Crossed: a fifth arrow, "the box pushing down on the floor, 29.4 N" (acts on the floor). (A2, resolve, sum, recombine) two horizontal ropes on a crate on smooth ice: 30.0 N east and 20.0 N at 60.0° north of east (the card shows the two directions as an HSC diagram would): ΣF_x = 40.0 N, ΣF_y = 17.3 N, F_net = 43.6 N at 23.4° north of east. Crossed: "50.0 N" (sizes added).
- **Mistake scene:** none separate. "Draw the forces the object exerts" (2, crossed arrow; A1 crossed); "add the sizes" (6, crossed 586 N; A2 crossed); "N always equals mg" (7, N = 145 N, not 196 N); "the whole pull acts forward" (hook prediction, answered in 5).
- **Site sources used:** card 1 (dot and arrows; the four usual forces with the logged corrections applied); card 1's quick check (the force the box exerts on the table, used as the crossed arrow in 2 and A1); card 2 and `we-1`; card 3 (sum then recombine; the "stuck crate" sentence not used, since it is v13's equilibrium case); misconceptions 1 and 2; warm-up (weight and normal on a resting object, used in A1). Not used: the activity (see site error 1), the matching task, short-answer Q1 to Q3 (practice).
- **Site errors found (this read, 2 Nov; for `../site-corrections-phys-y11.md`; the three L12 rows already logged are not repeated):**
  1. Activity 1: "A 10 kg box on a smooth floor is pushed with a horizontal force of 30 N east while a 12 N friction-like resistance acts west". A smooth floor means no friction, so the 12 N resistance contradicts the stated surface. Proposed: "A 10 kg box on a rough floor is pushed with a horizontal force of 30 N east while friction of 12 N acts west".
  2. Short-answer Q1 and Q2 use the same data (40 N east, 30 N north) and the same demand, and Q2 shows no marking criteria. Proposed: give Q2 new values or a new demand, and add its marking criteria. (Content gap, not a science error.)
- **Cause chain taught, in order:** (1) a pull at an angle: how much acts forward? (1); (2) isolate the object; forces on it, not by it (2); (3) the four forces, each "by what, on what" (3); (4) components are shadows on the axes; F_x = F cos θ, F_y = F sin θ with θ from the x-axis; signs from direction (4); (5) the sledge pull: 141 N forward, 51.3 N up (5); (6) net force is a vector sum: add components, not sizes (6); (7) the sledge: vertical sum zero gives N = 145 N; horizontal sum 46.0 N (7); (8) two non-zero sums: Pythagoras, tan and the quadrant from the signs (8).
- **Learner-visible vocabulary (plain meaning at first use):** free-body diagram (a drawing of one object as a dot, with an arrow for every force acting on it, 2); weight (the Earth's gravitational pull on the object, W = mg, 3); normal force (a surface's push, at right angles to the surface, 3); friction (a surface's force along it, against sliding, 3); tension (a rope's pull, along the rope, 3); component (the part of a force along one axis, its shadow on that axis, 4); resolve (split a force into components, 4); net force (the single force that has the same effect as all the forces together, 6).
- **Legacy logic ported:** none. Drawing parts from the 2017 kit only (`Arrow`, bounded vector heads in `course-kit.tsx`).
- **No human figures.** The pull is shown by a rope running off the frame edge (no puller drawn); the box in A1 is pushed by an arrow labelled "applied push", with no hand.
- **Author notes (not learner copy):**
  (a) θ convention: the syllabus measures θ from the x-axis. The design uses the positive x-axis to the right, angles drawn from it, and components signed by direction. For a force at 150° from the positive x-axis, cos θ and sin θ would give the signs directly; this video's worked forces all lie in the first quadrant or along an axis, so the sign rule is stated (4, key note 3) and the quadrant is chosen from the signs of the sums in 8 (logged correction).
  (b) 150 cos 20° = 140.95 N, 150 sin 20° = 51.30 N; reported 141 N and 51.3 N (150 N treated as three figures, 20° exact, as the site does). Weight 20.0 × 9.80 = 196 N.
  (c) Vertical balance in worked example 2: the sledge slides along level snow without lifting off or sinking in, so its vertical velocity stays zero; the vertical components of the forces therefore add to zero. The narration states it as an observation about the sledge ("doesn't lift off or sink in, so the up and down forces cancel"); v13 (first law, equilibrium) and v14 (second law) formalise why. N = 196 − 51.30 = 144.70 N ≈ 145 N. If F_y exceeded W the sledge would leave the snow and N = 0 (pack note); not the case here.
  (d) ΣF_x = 140.95 − 95.0 = 45.95 N ≈ 46.0 N. With rounded components 141 − 95.0 = 46.0 N; the same to three figures. Sum of sizes (crossed): 150 + 95.0 + 196 + 145 = 586 N.
  (e) Boat: ropes 800 N east, 600 N north (horizontal; the boat's weight and buoyancy cancel and are not drawn on the plan view; water resistance ignored at the instant shown, stated on screen as "at the start, before it moves"). F_net = 1000 N, θ = tan⁻¹(600/800) = 36.87° north of east.
  (f) A2: ΣF_x = 30.0 + 20.0 cos 60.0° = 40.0 N; ΣF_y = 20.0 sin 60.0° = 17.32 N; F_net = √(40.0² + 17.32²) = 43.59 N ≈ 43.6 N; θ = tan⁻¹(17.32/40.0) = 23.41° ≈ 23.4° north of east. Smooth ice: no friction; vertical forces (weight, normal) cancel and are excluded from the horizontal plan view.
  (g) Pronunciations: "F x equals F cos theta"; "F y equals F sin theta" (sin as "sine"); "sigma" is not spoken: say "the sum of the x components"; "one point zero zero kilonewtons"; "newtons".

Main question: *A sledge is pulled with 150 newtons along a rope tilted up at 20 degrees. Its weight, the snow's push and friction act too. How can a free-body diagram find the single net force, and how much of the pull actually acts forward?*
Entry knowledge: Stage 5 (forces, weight, trigonometry, Pythagoras); v11 (vector addition; perpendicular parts by Pythagoras and tan).
Stops after: the free-body rule (one object; forces on it, not by it); the four common forces with "by what, on what"; resolving with F_x = F cos θ and F_y = F sin θ, θ from the x-axis, signed by direction; the net force as component sums, recombined with Pythagoras, tan and the quadrant from the signs; two attempts.
Handoff: v13, what a zero net force means for motion.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout (constant): heading top-left; the scene or the free-body dot in the left half; axes, components and algebra in the right half. Colour key (one per force, kept wherever that force appears): tension orange; weight purple; normal teal; friction terracotta; applied push (A1) orange; components dashed in their force's colour; the net force thick ink with a double head; crossed items red with a scribble cross. Force arrows are drawn to one scale within each scene (a scale chip, e.g. "1 cm = 50 N", sits in the corner) with equal x and y units, so angles are true. At most three bright text items.

### 1. hook (a pull that does two jobs)
> Last video ended with this sledge. A rope pulls it with a hundred and fifty newtons, tilted up at twenty degrees. Its weight pulls down, the snow pushes up, and friction drags back. So which way does it actually get pushed overall, and how hard? Start with the rope. How much of its pull drags the sledge forward? All hundred and fifty newtons, more, or less? **Predict.**

Visual: opens on v11's last frame (see Scope): `y11p-sledge-v1.png` on a coded snow line, the coded rope rising to the right off the frame edge, an orange arrow along it; the "Next" chip moves to the top left as the heading "Free-body diagrams and net force". On "a hundred and fifty newtons" the orange arrow is labelled "T = 150 N" and an arc at the rope's base reads "20°". On "Its weight" a purple arrow grows downward from the sledge; on "the snow pushes up" a teal arrow grows upward; on "friction" a terracotta arrow grows backward along the snow. On "which way ... overall" a large grey "?" sits over the sledge. On "Predict" three chips write under the scene: "150 N", "more", "less", and the 3 s countdown ring runs.

### 2. one object, every force on it
> To answer that, we draw a free-body diagram. It's a drawing of just one object, as a dot, with an arrow for every force acting on it. First, isolate the object. The rope, the snow, even the Earth are outside it. The only forces we draw are the ones they put **on** the sledge. The sledge also pushes down on the snow, but that force acts on the snow, not the sledge. So it doesn't belong on this **diagram**.

Visual: the whole scene widens slightly: sledge, snow line, rope, and the Earth as a grey curve along the bottom edge. On "isolate" a dashed ink loop draws around the sledge; the rope, snow and Earth dim to 30 per cent. On "on" the four arrows from scene 1 re-attach to the sledge, each with a small grey "by what" tag at its tail end: tension "by the rope", weight "by the Earth", normal "by the snow", friction "by the snow". On "pushes down on the snow" a grey arrow draws downward on the snow surface under the sledge (tag "sledge on snow"); on "diagram" it takes a red scribble cross, caption "acts on the snow". Then the sledge plate shrinks into a dot at the centre of the loop, the four arrows staying attached to the dot (a 1 s move). Rule chip, top right: "forces ON the object, not BY it".

### 3. the four forces on the sledge
> There are four. Weight is the Earth's pull, m g, straight down. The sledge has a mass of twenty kilograms, so that's a hundred and ninety six **newtons**. The normal force is the snow's push, at right angles to its surface, so here it's up. Friction is the snow's force along its surface, against the sliding, so it points **back**. And tension is the rope's pull, along the rope. Each arrow starts at the dot, and points the way its force **acts**.

Visual: the free-body dot at the left, enlarged. A force card in the right column writes one row per force as spoken, each row in its force's colour: "weight W = mg (Earth on sledge), down"; on "newtons" "W = 20.0 × 9.80 = 196 N" (grey tag "g = 9.80 m/s²"); "normal N (snow on sledge), ⊥ surface, up"; on "back" "friction f (snow on sledge), along the surface, against the sliding: 95.0 N" with a grey tag "sledge slides forward over still snow"; "tension T (rope on sledge), along the rope: 150 N at 20°". As each row writes, its arrow on the dot brightens and the others dim. On "acts" all four brighten together; the normal arrow carries a "?" (its size is found in scene 7). Scale chip "1 cm = 50 N".

### 4. resolving: the shadows of a force
> Forces are vectors, so you can't just add their sizes. The trick is to split each angled force into two parts along the axes. Shine a light straight down, and the tension's shadow on the x axis is its x **component**. Shine it from the side, and its shadow on the y axis is the y component. Tilt the rope up, and the x shadow shrinks while the y shadow **grows**. Trigonometry gives their sizes. F x equals F cos theta, and F y equals F sin theta, where theta is the angle from the x **axis**. And if a component points left or down, it's negative.

Visual: clear change to axes (x right, y up) with the 150 N orange arrow from the origin at 20°. On "split" the heading tag "resolve: split into components". On "light straight down" a soft coded beam falls from above and the arrow's shadow forms on the x-axis as a dashed orange bar, labelled "F_x"; on "from the side" a second beam from the left forms a dashed bar on the y-axis, "F_y"; dotted drop lines from the arrow's tip to both axes complete a rectangle. On "Tilt the rope up" the arrow sweeps from 0° to 90° (about 2 s) with live readouts beside the bars ("F_x = 150, 141, 106, 51.3, 0 N" as it passes 0°, 20°, 45°, 70°, 90°; author note b), then returns to 20°; at 45° a brief tag "equal". On "Trigonometry" the right triangle (arrow as hypotenuse, F_x adjacent, F_y opposite) outlines in ink; boxed formulas write: "F_x = F cos θ", "F_y = F sin θ"; on "axis" the arc from the positive x-axis to the arrow glows with the tag "θ measured from the x-axis". On the last sentence a ghost arrow pointing up and to the left drops a shadow onto the negative x-axis, tagged "left: negative", then fades.

### 5. worked example: resolving the pull
> Now the sledge's pull. A hundred and fifty newtons, at twenty degrees above the horizontal. F x is a hundred and fifty times cos twenty degrees, which is a hundred and forty one **newtons**. F y is a hundred and fifty times sin twenty degrees, fifty one point three newtons, **up**. So the answer to the prediction is less. Most of the pull, a hundred and forty one newtons, drags the sledge forward. The upward part reduces the normal force: the **snow** pushes up less.

Visual: calculation layout. Task strip: "Resolve the rope's pull into components". Givens (navy): "F = 150 N", "θ = 20° above the horizontal (from the x-axis)". The axes and arrow from scene 4 stay at the left at 20°. `AlignedAlgebra`: "F_x = F cos θ = 150 cos 20°"; on "newtons" boxed "F_x = 141 N" (grey readout "140.95"), the x shadow bar labelled; "F_y = F sin θ = 150 sin 20°"; on "up" boxed "F_y = 51.3 N" (grey readout "51.30"), the y bar labelled. On "less" the hook's chips return small and "less" lights. On "snow" a small inset of the sledge shows the y component as an orange dashed arrow pulling up from the dot, and the teal normal arrow shortening slightly (no value yet; tag "upward part: smaller normal force").

### 6. net force: add components, not sizes
> The net force is the single force that has the same effect as all of them together. Adding the four sizes gives five hundred and eighty six newtons, which means **nothing**, because the forces point different ways. Instead, add all the x components together, and all the y components together, taking right and up as positive. Those two sums are the net force's own **components**.

Visual: the free-body dot returns with all four arrows. On "Adding the four sizes" the four labels fly into a line "150 + 95.0 + 196 + 145 = 586 N" (the normal's value shown here only as a grey ghost that scene 7 confirms); on "nothing" the line takes a red scribble cross, caption "forces point different ways". On "add all the x components" every arrow drops its x shadow onto a horizontal number line (orange +141 to the right, terracotta −95.0 to the left; weight and normal drop nothing, a grey "0" tag each); on "all the y components" every arrow drops its y shadow onto a vertical number line (orange +51.3 up, teal +N up, purple −196 down). "+ right, + up" chip. On "components" two empty boxes write: "sum of x components = ?" and "sum of y components = ?".

### 7. worked example: the sledge's net force
> Let's find them. The sledge slides along level snow without lifting off or sinking in, so its up and down forces cancel. The y components add to zero. N, plus fifty one point three, minus a hundred and ninety six, equals zero, so the normal force is a hundred and forty five **newtons**. That's less than the weight, because the rope is carrying some of it. Now the x components. A hundred and forty one forward, minus ninety five point zero back, is forty six point zero newtons. So the net force on the sledge is forty six point zero newtons, **forward**.

Visual: task strip: "Find the net force on the sledge". Givens (navy): "m = 20.0 kg, W = 196 N", "T = 150 N at 20°: T_x = 141 N, T_y = 51.3 N" (carried from scene 5), "f = 95.0 N backwards", "level snow; the sledge doesn't lift off or sink in". The vertical number line at the left: on "cancel" the up bars (51.3 and N) and the down bar (196) align so their ends meet (tag "vertical: sum = 0"). `AlignedAlgebra`: "y: N + 51.3 − 196 = 0"; on "newtons" boxed "N = 145 N" (grey tag "not 196 N: the rope's upward pull takes some load"); the teal arrow on the dot gets its value. "x: 141 − 95.0 = 46.0 N"; on "forward" boxed "F_net = 46.0 N forward (horizontal)". The free-body dot gains a thick ink double-headed arrow pointing right, labelled "F_net = 46.0 N", drawn in a separate panel beside the dot (grey tag "the net force is a result, not a fifth force on the sledge").

### 8. when both sums aren't zero
> Sometimes both sums are not zero. Two ropes tow a boat across still water, seen from above. One pulls with eight hundred newtons east, the other with six hundred newtons north. So the sums are eight hundred east and six hundred north. So the net force is the square root of eight hundred squared plus six hundred squared, a thousand newtons. The tan of its angle is six hundred over eight hundred, so it's thirty six point nine degrees north of **east**. Both sums are positive, so it points up and right. Here's a way to remember the whole method. Forces on it, not by it. Then split, sum, and **recombine**.

Visual: clear change to a plan view, north up (compass small): a pale water field; `y11p-boat-top-white-v1.png` (from v11, rotated to face east) at the centre; two coded ropes leave its bow, one to the east with an orange arrow "800 N E", one to the north with an orange arrow "600 N N"; grey tag "at the start, before it moves" (author note e). On "sums" the free-body dot replaces the boat; sum boxes fill "x: +800 N", "y: +600 N". On "square root" the two arrows join head to tail; `AlignedAlgebra`: "F_net = √(800² + 600²) = 1000 N = 1.00 kN"; on "east" "tan θ = 600/800, θ = 36.9°" and boxed "1.00 kN, 36.9° N of E" with the arc from east. On "Both sums are positive" a small four-quadrant compass lights its upper-right quadrant ("+x, +y: up and right"; the other quadrants show their sign pairs in grey). On "remember" the handwritten memory line writes large: "Forces on it, not by it. Split, sum, recombine." Hold about 1 second.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A three kilogram box is pushed across a level floor by a horizontal force of twenty point zero newtons. Friction on the box is fourteen point zero newtons. Draw a free-body diagram for the box, and find the net force on it. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "A 3.00 kg box is pushed across a level floor by a horizontal force of 20.0 N. The friction force on the box is 14.0 N. Take g = 9.80 m s⁻². (a) Draw a labelled free-body diagram for the box. (b) Determine the net force on the box. (4 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the new box plate `y11p-box-v1.png` on a coded floor line, no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> Four forces. Weight, twenty nine point four newtons down, and the normal force, twenty nine point four up, since the push is horizontal and the floor is **level**. The push, twenty newtons forward, and friction, fourteen back. So the net force is six point zero newtons, in the direction of the **push**. A fifth arrow, the box pushing on the floor, is the classic mistake. It acts on the **floor**.

Visual: card shrinks to the top; "horizontal", "level floor" and "box" underlined as they are used. A free-body dot builds one arrow per force: purple "W = 3.00 × 9.80 = 29.4 N" down; teal "N = 29.4 N" up (on "level"); orange "push 20.0 N" right; terracotta "f = 14.0 N" left. Rows: "vertical: 29.4 − 29.4 = 0"; "horizontal: 20.0 − 14.0 = 6.0 N"; on "push" boxed "F_net = 6.0 N in the direction of the push". On "A fifth arrow" a grey arrow labelled "box on floor, 29.4 N" draws downward from the dot; on "floor" it takes a red scribble cross, caption "acts on the floor, not the box". Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> One more. Two horizontal ropes pull a crate across smooth ice. One pulls with thirty point zero newtons east. The other pulls with twenty point zero newtons, at sixty degrees north of east. Find the net force on the crate. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two horizontal ropes pull a crate across smooth, level ice. Rope 1 exerts 30.0 N due east. Rope 2 exerts 20.0 N in a direction 60.0° north of east. Determine the magnitude and direction of the net force on the crate. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it a coded plan diagram as an HSC paper would print it: a small square labelled "crate", two arrows from it labelled "30.0 N" (east) and "20.0 N" (with a "60.0°" arc from the east direction), and a north arrow; no components, no resultant. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer."

### 12. feedback 2 (brief)
> Split the angled rope. Its x component is twenty cos sixty, ten newtons, and its y component is twenty sin sixty, seventeen point three newtons. The x components sum to forty point zero, and the y sum is seventeen point **three**. So the net force is forty three point six newtons, at twenty three point four degrees north of **east**. Fifty newtons, just adding the sizes, is the classic **mistake**.

Visual: card shrinks; the plan diagram stays. Dashed components draw on rope 2's arrow: "20.0 cos 60.0° = 10.0 N" along east, "20.0 sin 60.0° = 17.3 N" along north. Rows: "x: 30.0 + 10.0 = 40.0 N"; on "three" "y: 0 + 17.3 = 17.3 N". On "So the net force" the sums join head to tail; boxed "F_net = √(40.0² + 17.3²) = 43.6 N"; on "east" "tan θ = 17.3/40.0, θ = 23.4°" and boxed "43.6 N, 23.4° N of E". On "mistake" a chip "30.0 + 20.0 = 50.0 N" fades in and takes a red scribble cross, caption "different directions: add components". Hold about 1 second.

### 13. summary and handoff
> So a free-body diagram shows every force on one object. Split the angled forces, sum the components, and recombine, and you have the net force. Next, a crate is pushed hard, and doesn't budge. **What** does a net force of zero tell you about its motion?

Visual: board clears to the sledge's free-body dot with its four arrows and its net force panel (46.0 N forward), and the memory line beneath. On "crate" `y11p-box-v1.png` appears on a coded floor line with an orange "push" arrow and a terracotta friction arrow of the same length, both labelled with "?" values; on "What" a chip "F_net = 0 ?" and a chip "Next: why velocity stays the same when forces balance" (v13's route question, aligned by root). Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A free-body diagram shows one object as a dot, with an arrow for every force acting on it. Forces the object exerts on other things are not drawn.
2. Weight W = mg (down); normal N (perpendicular to the surface); friction f (along the surface, against sliding); tension T (along the rope). N equals mg only in special cases: find it from the forces.
3. Resolve with θ measured from the x-axis: F_x = F cos θ, F_y = F sin θ. Components pointing left or down are negative.
4. Net force: add all x components, add all y components, then F_net = √((ΣF_x)² + (ΣF_y)²), with the angle from tan θ = ΣF_y ÷ ΣF_x and the direction chosen from the signs.
5. Never add the sizes of forces that point different ways.

Memory aid (large, on the notes screen): *Forces on it, not by it.* Second line, smaller: *Split, sum, recombine.*

## Teaching checks

- **Does it explain causes?** Why isolate (to include every force on the object and none that act elsewhere, 2, the crossed arrow). Why each force's direction (the agent and the surface: the Earth pulls down, the snow pushes at right angles, friction resists sliding, a rope pulls along itself, 3). Why components (forces in different directions can't be added by size; their shadows on the axes can be added as signed numbers, 4, 6). Why cos for x and sin for y (adjacent and opposite to the angle from the x-axis, shown by the shadows and the sweep, 4). Why N is less than mg (the rope's lift carries some of the weight, 5, 7). Why the boat moves north-east (both sums positive, 8).
- **Worked-example rule:** task strip, givens with units and directions, and algebra separate; one stage per scene (5: resolve; 7: sum and conclude; 8: recombine); the components from 5 move into the givens of 7; result lines on their cues.
- **Response opportunities:** one 3 s prediction (1, answered in 5); two unseen HSC-style questions with every condition on the card (A1: mass, g, horizontal push, level floor, friction, both demands; A2: both forces with directions, smooth level ice, both demands, an HSC-style diagram of the two forces only), 10 s each with "Pause here to answer."; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 28 s by script.
- **Avoided double teaching:** vector addition and Pythagoras with tan (v11) are recalled in a phrase (8); W = mg is a one-phrase reminder (3).
- **Syllabus coverage:** `cibfd5f69e`: resolution with the syllabus formulas and θ from the x-axis (4, 5, A2). `cic6c0b2c4`: free-body diagrams (2, 3, A1) and vector analysis to the net force (6 to 8, A1, A2).
- **Out of scope by design:** Newton's laws (v13, v14); friction coefficients and static friction thresholds (later FA1); inclined planes (later FA1); forces at angles beyond the first quadrant in a worked example (the sign rule is stated).

## Practice questions and model answers

Each attempt ends with "Pause here to answer." and a 10 second countdown; the card and every demand stay on screen. Marks appear on the card; the narration does not read them. Every card carries "HSC-style question, written for HSCScience".

**Attempt 1 (scene 9; original wording; 4 marks suggested, not an official marking scheme).** "A 3.00 kg box is pushed across a level floor by a horizontal force of 20.0 N. The friction force on the box is 14.0 N. Take g = 9.80 m s⁻². (a) Draw a labelled free-body diagram for the box. (b) Determine the net force on the box."
Model answer: (a) Four arrows from a dot: weight 29.4 N down; normal force 29.4 N up (level floor, horizontal push, no vertical acceleration); applied push 20.0 N forward; friction 14.0 N backward (2 marks: all four forces, correct directions and labels). (b) Vertical: 29.4 − 29.4 = 0. Horizontal: 20.0 − 14.0 = 6.0 N. Net force 6.0 N in the direction of the push (2 marks). Classic mistake (crossed): a fifth arrow "box on floor, 29.4 N" (acts on the floor).

**Attempt 2 (scene 11; original wording; 3 marks suggested).** "Two horizontal ropes pull a crate across smooth, level ice. Rope 1 exerts 30.0 N due east. Rope 2 exerts 20.0 N in a direction 60.0° north of east. Determine the magnitude and direction of the net force on the crate."
Model answer: Rope 2: F_x = 20.0 cos 60.0° = 10.0 N, F_y = 20.0 sin 60.0° = 17.3 N (1 mark). ΣF_x = 30.0 + 10.0 = 40.0 N; ΣF_y = 17.3 N (1 mark). F_net = √(40.0² + 17.3²) = 43.6 N; θ = tan⁻¹(17.3/40.0) = 23.4° north of east (1 mark). Weight and the normal force cancel and are not part of the horizontal sum. Classic mistake (crossed): "50.0 N" (sizes added).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sledge pull (site `we-1`) | 150 N at 20° above horizontal; F_x = 140.95 ≈ 141 N; F_y = 51.30 ≈ 51.3 N | 1, 3 to 7 |
| Sweep readouts | F_x at 0°, 20°, 45°, 70°, 90°: 150, 141, 106, 51.3, 0 N (F_y the reverse) | 4 |
| Sledge forces | m = 20.0 kg; W = 196 N; f = 95.0 N; N = 196 − 51.3 = 144.7 ≈ 145 N | 3, 6, 7 |
| Sum of sizes (crossed) | 150 + 95.0 + 196 + 145 = 586 N | 6 |
| Sledge net force | 141 − 95.0 = 46.0 N forward (unrounded 45.95) | 7, 13 |
| Boat | 800 N E, 600 N N; √(800² + 600²) = 1000 N = 1.00 kN; tan⁻¹(600/800) = 36.87° ≈ 36.9° N of E | 8 |
| A1 | m = 3.00 kg; W = N = 29.4 N; push 20.0 N; f = 14.0 N; F_net = 6.0 N | 9, 10 |
| A2 | 30.0 N E; 20.0 N at 60.0° N of E: 10.0 N, 17.3 N; sums 40.0 N, 17.3 N; 43.6 N at 23.4° N of E; crossed 50.0 N | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 150 cos 20° = 140.954; 150 sin 20° = 51.303; 150 cos 45° = 106.07; 150 cos 70° = 51.303.
- 20.0 × 9.80 = 196.0; 196.0 − 51.303 = 144.697; 140.954 − 95.0 = 45.954; 150 + 95.0 + 196 + 145 = 586.
- √(800² + 600²) = 1000; tan⁻¹(0.75) = 36.870°.
- 3.00 × 9.80 = 29.4; 20.0 − 14.0 = 6.0.
- 20.0 cos 60° = 10.0; 20.0 sin 60° = 17.321; √(40.0² + 17.321²) = 43.589; tan⁻¹(17.321/40.0) = 23.413°.

## Memory aid check

- **"Forces on it, not by it."** Written for this lesson from the site's misconception 1. Meaning: a free-body diagram includes only forces that act on the chosen object. Assumption: the object has been chosen and named first (scene 2's loop); a force "by it" acts on something else (its third-law partner, not named here; v16's topic). True and it prevents the most common error (A1 crossed).
- **"Split, sum, recombine."** The vector-analysis method: resolve each angled force into components (θ from the x-axis), add each axis's components with signs, then combine the two sums by Pythagoras and tan with the quadrant from the signs. True for any set of forces in a plane. "Recombine" is skipped when one sum is zero (scene 7: the net force is just the other sum), which the sledge example shows.
- **Considered, not used:** "SOH CAH TOA" (Stage 5 knowledge; the shadows already show which side is which).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,323 characters**, 14 scenes. Characters per scene (1 to 14): 368, 400, 437, 536, 459, 373, 549, 601, 256, 387, 244, 389, 249, 75. At 13.3 characters per second the speech is about 401 s; add 3 s for the hook prediction countdown, 20 s for two attempt countdowns, about 15 s of holds and settling (the plate-to-dot shrink in 2, the shadow sweep in 4, the components dropping in 6, the head-to-tail join in 8, 1 s at the end of 8, 10 and 12, 2 s at the end of 13) and about 55 s more of the quiet notes hold: **about 494 s (8.2 minutes)**, under the 570 s cap and 177 characters below the 5,500 band (open decision 5). Feedback: scene 10 about 30 s, scene 12 about 31 s (with their 1 s holds), at the top of the 15 to 30 s guide. Scenes 8 (601) and 7 (549) are the longest; check that each result line writes before it is spoken and that scene 8's memory line has its 1 s hold. Reserve cuts only if root also applies open decision 1 or 2 and the voice runs long: scene 8's "Both sums are positive, so it points up and right." (about 4 s; the quadrant compass carries it).

## Scene list and build ids

Lesson key `p-y11-v12` (route phys-y11-fa1-v12). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v12` and build folder `docs/production/claude-pm/lessons/p-y11-v12` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, isolate, four-forces, resolve-shadows, worked-resolve, sum-components, worked-net-force, recombine, attempt-1, feedback-1, attempt-2, feedback-2, summary-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1 and attempt-2 (`hold`) and key-notes (`hold`); the hook carries a 3 s prediction countdown inside an explain scene. Transitions (`pickTransition`): v11's last frame continues into scene 1 (camera continue: the same sledge); 1 to 2 camera pull back (whole scene), then the plate-to-dot shrink; 2 to 3 camera continue (same dot); 3 to 4 clear change (axes); 4 to 5 camera continue (same arrow); 5 to 6 camera continue back to the dot; 6 to 7 camera continue; 7 to 8 clear change (plan view); attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook 3 s countdown after "Predict."; attempt-1, attempt-2 (10 s countdown after the speech); key-notes quiet hold (about 60 s, standard line, reuse take); 1 s at the end of 8, 10 and 12; 2 s at the end of 13. Review evidence paths for the LESSONS entry: `learning_review` = `checks/p-y11-v12-learning-review.md`, `science_check` = `checks/p-y11-v12-physics-check.md` (root to confirm names).

## Assets

Have (inspected 2 Nov; uniform scale only, never stretched):
- `y11p-boat-top-white-v1.png` (requested in the v11 design; plan view, bow up, rotated to face east here): scene 8.
- **Inspected, not used:** `public/assets/chemistry/m7-hdpe-crate-v1.png` (a blue plastic produce crate in three-quarter view; its open slatted sides read as a chemistry storage object and its perspective doesn't sit on a side-view floor line); a box plate is requested instead.

Need (new plates, Codex):
1. `y11p-sledge-v1.png`: scenes 1, 2, 5 (inset), 13; also v11 scene 13. Essential (the video's main object).
2. `y11p-box-v1.png`: A1 card (9) and the handoff (13); reused by v13 (the crate that doesn't budge). Essential.

Coded: snow line, floor line, water field; the rope (a thin dark line from the plate's tow point to the frame edge); the isolating loop; the Earth curve; all force arrows (`Arrow` from `course-kit.tsx`, one colour per force) and the free-body dot; the scale chip; axes, coded light beams, shadow bars and drop lines, the sweep with live readouts, the triangle outline and the angle arc; the number lines of components; `AlignedAlgebra`; the net-force panel; the four-quadrant sign compass; the A2 plan diagram; `Chip` with `cross`; `Countdown`; `QuestionCard` (subject "Physics"); `KeyNotes`. Kit gap for the build brief: a reusable **free-body diagram** part (a dot with named, coloured, scaled force arrows; optional component shadows; a separate net-force panel) would serve v12 to v24; lesson-local is acceptable for Revision 1.

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v12.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, snow, floor, glow or ground shadow. Keep the native aspect; never stretch.

1. `y11p-sledge-v1.png` (2000 × 1000 px): one empty wooden sledge (toboggan with two curved metal runners and a flat slatted wooden seat) in exact side view facing right, runners level along one horizontal line; a small metal tow ring or eye at the front tip where a rope would attach (no rope painted; the rope is coded). Mark nothing else on it.
2. `y11p-box-v1.png` (1200 × 1000 px): one plain closed cardboard box (or a plain wooden crate with solid sides) in exact side view, flat bottom level along one horizontal line, no tape text, no labels; it should read as a heavy box at 300 px wide.

Report inspection on the dark board background at about 300 px and 600 px wide, including the sledge's tow point position (for the coded rope's anchor). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/p-y11-v12-provenance.json`.

## Codex error-check brief

Error-only (report errors; do not restyle or rewrite). Report to `docs/production/claude-pm/checks/` (root names the check).
1. Re-check every value under "Numbers to verify" and every value in the narration, screen text, attempts and key notes against "Numbers used".
2. Physics: confirm the four force descriptions (with the logged corrections: friction against relative sliding; N found from the forces, not assumed equal to mg); the vertical balance reasoning in scene 7 (author note c) and its condition on screen; the net force panel shown as a result, not a fifth force; A1's N = mg condition (level floor, horizontal push).
3. Confirm the shadow model in scene 4 (cos for the x-axis shadow, sin for the y-axis shadow, θ from the x-axis) and the sweep readouts.
4. Confirm the direction and quadrant handling in scene 8 and A2 (signs of the sums choose the quadrant; logged inverse tangent correction applied).
5. Confirm every diagram uses one force scale and equal x and y units within a scene.
6. Confirm significant figures (141 N, 51.3 N, 145 N, 46.0 N, 1.00 kN, 36.9°; A1 6.0 N; A2 43.6 N, 23.4°).
7. Confirm both attempt questions are original in wording, every condition is on the card, A2's diagram shows only the two given forces, and neither closely paraphrases a NESA Physics question (search "pushed across a level floor", "two horizontal ropes", "smooth ice").
8. Confirm the syllabus quotes match the route JSON `syllabusActions` for `cibfd5f69e` and `cic6c0b2c4` and the ledger entries P25-FA1-G3-01 and G3-02.
9. Confirm no em dash (U+2014) anywhere in this file; Australian spelling; YouTube title 100 characters or fewer; search the narration for absolute claims and confirm each is true as scoped.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Add site errors 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Free-Body Diagrams and Net Force: Resolving Forces Into Components | Year 11 Physics

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson12.sa.html

Pull a sledge with 150 N along a rope tilted up at 20°. How much of that pull drags it forward? Learn to draw a free-body diagram (one object, every force on it, none of the forces it exerts), name the common forces (weight, normal, friction, tension), and resolve an angled force into components with F_x = F cos θ and F_y = F sin θ, seen as the force's shadows on the axes. Then find the net force: add the components on each axis, and recombine with Pythagoras and a named direction. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Resolve vectors into perpendicular components using F_x = F cos θ and F_y = F sin θ where θ is the angle with the x-axis" (cibfd5f69e)
"Use free-body diagrams and vector analysis to determine the net force acting on an object" (cic6c0b2c4)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Relative velocity in two dimensions (previous video); vectors (earlier videos). Next: Newton's first law and equilibrium.

#Year11Physics #Forces #HSCScience

## Open decisions

- **1. Vertical balance before v13 (root).** Worked example 2 uses "the sledge doesn't lift off or sink in, so its up and down forces cancel" to find N (author note c). This is the site's own move ("zero net force means no change in motion", L12 card 3) and the stop needs a net force with N unknown. If root prefers v13 to own any balance reasoning, give N directly on the task ("the snow pushes up with 145 N") and cut scene 7's first three sentences (about −180 characters; ΣF_y then shows 145 + 51.3 − 196 ≈ 0).
- **2. Overlap with v03 (root).** The route's crosswalk lists site lesson 3 ("splitting a vector into two directions", "the component formulas") under `cib3157911` for v03. If v03's design already teaches F cos θ and F sin θ, scene 4 shortens to a one-sentence recall plus the shadow sweep (about −200 characters), and `cibfd5f69e` coverage is shared. This design assumes v03 drew components as a vector-diagram skill and v12 owns the syllabus formulas (the route assigns `cibfd5f69e` to v12).
- **3. v13 handoff wording.** The route's v13 question is a placeholder ("How can I explain and apply newton's first law and equilibrium?"). Scene 13 uses the site L12 hook's stuck crate and the chip "Next: Newton's first law and equilibrium"; align the chip with v13's final question.
- **4. Unit notation.** As v09 open decision 3.
- **5. Length (root).** 5,323 characters, about 494 s, is just below the 5,500 band. Recommended: accept. If root wants the band, the useful addition is a one-sentence worked case of a force outside the first quadrant in scene 8 (for example, a third rope at 150° from the positive x-axis, about 200 characters), which applies the syllabus's "θ is the angle with the x-axis" with signs; it adds reading load to the longest scene, so it is not included by default.

## Review notes

- Revision 2 (2 Nov): brief 145 review applied. One should-fix (learning review and physics check): scene 5 "lifts it a little" replaced by "reduces the normal force: the snow pushes up less", with the matching cues and author notes (hook, force meanings, worked example 1 interpretation, scene 5 and scene 7 tags). Count 5329 -> 5323 characters; the v13 handoff frame is unchanged. Earlier plan for the review, kept for reference: Next: student learning review (trace from v11 and Stage 5: does the isolate step make "on it, not by it" concrete; do the shadows make cos and sin feel caused rather than assigned; is the vertical balance in scene 7 followable without Newton's laws; is the reading load in scene 7 acceptable), then the Codex physics check and error check.
- The plate-to-dot shrink (2), the shadow sweep (4), the components dropping onto number lines (6) and the head-to-tail recombination (8) carry the explanation; judge them at playback speed in the voiced preview.
