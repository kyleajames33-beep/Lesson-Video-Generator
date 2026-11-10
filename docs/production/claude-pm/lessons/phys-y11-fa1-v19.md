# Y11 Physics FA1 V19 (Physics 2025, Year 11, Focus Area 1): Why does it take more force to start something sliding than to keep it sliding? (design)

Status: Revision 3 (11 Nov 2026): visual upgrade to maths-visual-standard.md. Needs Codex error check before plates and voicing. Previously Revision 2 (3 Nov) applied the brief 149 repairs (speed and contact-area independence scoped to the simple model).

Narration 5,572 characters (Revision 3; scene sum by the build parser rules; Revision 2 was 5,442), 15 scenes, about 504 s (8.4 minutes) (see "Narration length estimate"). Opens on v18's final frame. Independent learning review and physics check are in `checks/p-y11-v19-learning-review.md` and `checks/p-y11-v19-science-check.md` (0 blockers). Nothing recorded; human listening pending.

Scope: nineteenth video of the Year 11 Physics (2025) Focus Area 1 route, the third of four on applying Newton's laws. Templates: `phys-y11-fa1-v05.md` and `phys-y11-fa1-v08.md` (physics format; v08's coded graphs) and `math-a12-d10.md` (section list); `phys-y11-fa1-v17.md` and `phys-y11-fa1-v18.md` (Revision 1, written just before this one; v18's scene 13 is this video's first frame; force colour and plates). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v19.md`. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson18.sa.html` (orient, intentions, static vs kinetic friction, calculating friction, apply, why starting is harder than sliding, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v19` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How can I explain and apply friction: static vs kinetic?" (placeholder; root's learner question used). Next: "phys-y11-fa1-v20: How can I explain and apply applying newton's laws to real situations?" (v20's root question: "How do Newton's laws solve real situations, at rest and in motion?").

Owner rules applied: as v17 and v18 (2025 syllabus only; arrows, graphs, readouts and the microscopic surface model coded; block, crate, sensor, sled and surface strips painted plates; no people; one reasoning stage at a time; task, equation and grouped givens; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v18 recalled in one sentence).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1; NESA content-system codenames), quoted from the route JSON `syllabusActions`:

- `ci927ecf47`: "Compare static and kinetic friction"
- `ci6eb6311a`: "Solve problems using f friction = μ F N"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Opening frame.** v18 (Revision 1) ends scene 13 on one wooden block on the rough bench strip, a coded string from its screw eye to a force sensor at the right, the sensor readout held at "4.0 N", a grey "not moving yet" tag, v18's memory line small at the top, and the chip "Next: Why does it take more force to start something sliding than to keep it sliding?". V19 opens there: the chip becomes the heading and the pull continues.

**Boundary:** starts from v18's handoff (a pulled block that has not moved); static friction matches the applied force up to a maximum f = μs F_N; kinetic friction f = μk F_N while sliding, roughly constant; μs > μk explains the peak and the drop; the normal force F_N (equal to mg on a level surface with only vertical weight and support); in the simple dry-friction model, friction depends on F_N and the surfaces and approximately not on the contact area; level-surface problems with f_friction = μF_N (`ci927ecf47`, `ci6eb6311a`). Not taught: angled pulls that change F_N (v20); inclines (v21, v22); rolling friction and air resistance (named as "resistance forces" in v18 only).

## Decisions

- **Learner question kept (route).** "Why does it take more force to start something sliding than to keep it sliding?" The answer, built in order: while the block is still, friction matches the pull because the net force is zero (3); that static friction has a maximum, μs F_N (4); once sliding, friction is μk F_N, smaller, so the reading drops and the leftover pull makes the block lurch (5); a simple model of touching bumps says why μs is bigger (6).
- **The hook (a measured surprise; continues v18's handoff).** The pull keeps rising; the sensor trace climbs, peaks at 7.8 N as the block jerks free, then drops to about 5.9 N while it slides. The question is asked over the finished trace. The site's orient-and-predict (friction on a still crate at several pushes) becomes the scene 2 prediction at the 4.0 N reading.
- **The cause made visible (owner quality bar).** A force-time trace builds in step with the pull (1, 3 to 5). The amber friction arrow on the block grows exactly with the pull arrow while the block stays still (3), stops at a dashed "maximum" mark (4), and snaps shorter at the instant of sliding while the pull arrow is still long, with the difference drawn as an outlined net-force arrow as the block lurches (5). The contact zoom shows bumps settling and locking while still, then skipping while sliding (6). Turning the block on its end leaves the sensor reading unchanged; stacking a second block doubles it (7).
- **Demonstration numbers (original, physically typical for wood on wood).** Block 2.0 kg, g = 9.8 m s⁻², μs = 0.40, μk = 0.30: F_N = 19.6 N; f_s,max = 7.84 N (shown 7.8 N); f_k = 5.88 N (5.9 N); leftover force at break-free 1.96 N, acceleration 0.98 m s⁻² at the instant of break-free, falling to zero as the pull drops over 0.1 s, speed gained 0.049 m s⁻¹ (shown as motion, not spoken); end-on reading 5.9 N; two blocks 11.76 N (about 12 N). **Precision:** coefficients to two significant figures; results to two significant figures (grey tag "teaching data").
- **Worked example (site `we-1`, unchanged numbers).** 10 kg crate, 50 N horizontal push, sliding, μk = 0.30, g = 9.8 m s⁻²: F_N = 98 N; f_k = 29.4 N; net 20.6 N; a = 2.06, shown as 2.1 m s⁻² (two significant figures, as the site).
- **Notation (syllabus).** Screen text uses the syllabus symbols: f = μF_N, with f_s,max = μs F_N and f_k = μk F_N, and F_N for the normal force. Narration says "F N" as "the normal force, F N". v17 labels the normal force F_N to match (to be checked by root against v12 to v16's symbol; open decision 2).
- **Friction direction (logged correction, not repeated).** Friction is described as opposing the sliding of the surfaces (or the tendency to slide), not "the motion" in general, following the brief 137 entry for lesson 12. On a level bench with a stationary surface this is the same direction, and the narration says "pulling back".
- **The microscopic model, kept small.** One scene (6), said to be "a simple model". It is the site's card 3 explanation (contact points settle and bond while still; sliding surfaces skip). The same model explains the area result (7): the real contact area depends on how hard the surfaces are pressed, not on the block's face.
- **Attempts (original).** (A1) 12 kg box, μs = 0.45, μk = 0.30, horizontal pull 50 N: F_N = 117.6 N; f_s,max = 52.9 N (53 N); 50 N < 53 N, so it stays still and friction = 50 N. Crossed: "50 N > 35 N (μk F_N), so it moves". (A2) 15 kg sled pulled at constant velocity on level snow by a 22 N horizontal rope: f_k = 22 N; F_N = 147 N; μk = 0.15. Crossed: "μ = 22 ÷ 15 = 1.5". A1 tests the static limit and the choice of coefficient; A2 runs f = μF_N backwards with the zero-net-force condition.
- **Mistake scene:** none separate. "Static friction is always at its maximum" (2, 3; key note 1); "use μk to decide whether it starts" (feedback 1 crossed); "more contact area means more friction" (7, crossed; key note 4); "kinetic friction grows with speed" (5, said); "μ = f ÷ m" (feedback 2 crossed).
- **Memory aid:** "Static stretches. Kinetic's constant." (see "Memory aid check").
- **Handoff (route next).** The `we-1` crate with its full free-body diagram (push 50 N, friction 29.4 N, weight 98 N, normal force 98 N) and the outlined net force 20.6 N; chip "Next: How do Newton's laws solve real situations, at rest and in motion?". This is v20's opening frame.
- **Route refinement adopted (pack).** "Start with normal and contact forces. Stop after distinguishing static and kinetic friction and computing simple level cases. Hand multi-force problems to v20." Adopted; for root to enter in the route.
- **Site sources used:** orient (static friction on a still crate, as the scene 2 prediction); intentions and key terms (static and kinetic friction, normal force, coefficient); card 1 (static adjusts up to a maximum; kinetic roughly constant; the drop and the lurch); card 2 and `we-1` (f = μF_N; F_N = mg on a flat surface; not area); card 3 (microscopic model); misconceptions (both); activity's idea ("will it move?") as A1 with original numbers; Q2's idea (constant velocity means pull = friction) reversed in A2. Not used: quick check (5.0 kg, μk 0.40; same structure as `we-1`); Q1 (same structure as `we-1`); Q3 (the video's main question).
- **Site corrections:** none new for lesson 18 (read 2 Nov). Its "points opposite to the motion" (card 1) and "on a flat floor N = mg" (key terms) are the same issues already logged for lesson 12 (brief 137); this design states the conditions instead. Checked and correct: `we-1` (98 N, 29.4 N, 2.1 m s⁻²); quick check (B, 19.6 N ≈ 20 N); activity (98 N maximum static friction; the 80 N push does not move the box); Q1 (147 N, 36.75 N, 1.6 m s⁻²); Q2 (245 N, 73.5 N); orient-and-predict and retrieve answers (static friction 30 N, then 80 N).
- **Pack questions answered:** `we-1` used unchanged; candidate 1 (2.0 kg block, μk 0.20) becomes the demonstration block (2.0 kg, with wood-on-wood coefficients 0.40 and 0.30 so the peak and drop are visible); candidate 2 (6.0 N against a 10 N maximum) is scene 3's idea (pull below the maximum: friction equals the pull). Pack visual need met: a force-sensor plot with the static rise, peak and kinetic plateau, and animated relative sliding.
- **Cause chain taught, in order:** (1) the trace: rise, peak, drop (1); (2) predict friction at 4.0 N (2); (3) zero net force, so static friction matches the pull (3); (4) the maximum μs F_N; F_N and μ defined; the peak calculated (4); (5) kinetic friction μk F_N, the drop and the lurch; constant velocity at the kinetic value (5); (6) why μs > μk: settling bumps (6); (7) not area; F_N doubles friction (7); (8) the method on `we-1` (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** v18 (forces between bodies; smooth surfaces until now); v17 (the road's push on tyres is friction); v12 to v16 (free-body diagrams, net force, F_net = ma, W = mg, normal force; assumed parallel designs). Stage 5 forces (friction named).
- **Learner-visible vocabulary (plain meaning at first use):** static friction (friction between surfaces that are not sliding over each other, scene 3); kinetic friction (friction between surfaces that are sliding, scene 5); normal force F_N (how hard a surface pushes on an object, at right angles to the surface: how hard the two surfaces press together, scene 4); coefficient of friction μ (a number with no units that says how grippy a pair of surfaces is, scene 4); constant velocity (said; v12 to v16 assumed).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **force trace** (a sensor-reading-against-time graph drawn in step with the pull: ramp 0 to 7.84 N over 4.0 s, a drop to 5.88 N within 0.1 s, then a plateau; maths `FunctionGraph`; dashed horizontal marks "maximum static" and "kinetic"); **matched arrows** (pull and friction arrows on the block, equal while static, from one function); **net-force flash** (outlined amber arrow equal to the difference at break-free); **contact zoom** (a magnifier circle on the block's base showing two coded jagged profiles; contact points glow and "settle" (profiles nudge into each other) while still; at sliding the upper profile slides and the contacts flicker); **turn and stack** (the block plate rotates 90° onto its end with a short tumble; a second block drops onto the first); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`; v17's `ForcePair` is not needed.
- **Board layout (constant):** heading top-left; the bench strip and block across the left two thirds (upper half); the force trace below it (about 900 × 360 px); working in the right column.
- **No human figures.**
- **Colour key (Revision 3, fixed for every scene).** Forces amber, tails on the body they act on: the pull plain amber, the friction arrow amber with a short hatched tail band; the net force a thicker amber arrow with a dark outline; the force trace amber; velocity teal; acceleration orange (the design's existing role names are kept; nothing is re-hued here); weight and F_N arrows, level marks on the trace, conditions and "simple model" tags grey; givens navy; contact points in the zoom glow amber; every result and framed answer green; every mistake, crossing and its tag red. Hand tags take the colour of the idea they mark. A dark-ink frame is used for the memory card only.
- **Type sizes (Revision 3, 1080p).** Heading 60 px; the current working line, the sensor readout and live readouts 52 px, never under 44; framed answers 52 px (rule sentences in a frame 44 px); card sentences and question text 38 px; supporting lines, axis labels, level marks and arrow labels 30 px; nothing a student must read under 26 px; hand tags 42 px (34 px where space is tight); key notes 34 px. No faint or ghosted text or arrows.
- **Anchor (Revision 3).** The painted wooden block `phys-y11-wooden-block-v1.png` on the rough bench strip `phys-y11-surface-rough-v1.png`, pulled through the painted force sensor `phys-y11-force-sensor-v1.png`. Scene 1 opens on v18's final frame, which already holds these plates, and the pull resumes about 8 s in. The hook's question is answered on the same block in scene 5 (the drop and the lurch) and scene 6 (the contact model).
- **Simulation (Revision 3).** The friction rig is the live simulation, used in scenes 1, 3, 5 and 7: one pull function drives the force trace, the pull and friction arrows, the readouts (52 px: "pull", "friction", "block: still" or "sliding") and the block. The block's motion comes from the field motion engine (`src/explainer/sims/field-motion.ts`, `custom` force law: net force = pull minus friction, with friction equal to the pull while static and 5.88 N while sliding), so the lurch (0.049 m s⁻¹ gained) is read from the run. The student watches the two readouts climb together (3), the friction readout snap from 7.8 to 5.9 N while the pull is still high (5), and the reading hold at 5.9 N end-on and climb to about 12 N when a second block is stacked (7). The trace itself is the `FrictionTrace` kit gap; no existing engine draws it.
- **Board stages (Revision 3).** Revision 2 kept the bench, block and trace on one set-up through scenes 1 to 7 (about 250 s). Revision 3 cuts five times. Stages in order: v18's frame, then the bench with the trace building (1, 2, about 46 s); matched-arrows close-up (3, about 36 s); worked-example stage for the limit (4, about 52 s); live trace stage (5, about 47 s); contact zoom stage (6, about 35 s); turn-and-stack stage (7, about 39 s); crate worked example (8, about 40 s); memory stage (9, about 13 s); cards (10 to 13); handoff (14). No set-up runs past about 52 s.
- **Question cards (Revision 3).** Each attempt card arrives with its full text (38 px) and its picture in one move, showing only the given force: the crate on the floor strip with the 50 N rope arrow (A1); the sledge on a snow line with the 22 N rope arrow (A2). The prediction (2) keeps the block, the sensor reading and its question chip on screen. On the answer side the card shrinks to the top, a navy givens strip lists the supplied values, the picture stays and gains the friction arrow, the answer sits in a green frame and one classic mistake is crossed in red.
- **Author notes (not learner copy):**
  (a) Demonstration: m = 2.0 kg; F_N = 19.6 N; μs = 0.40 → 7.84 N; μk = 0.30 → 5.88 N. Trace: F(t) = 1.96t N for 0 ≤ t ≤ 4.0 s (passes 4.0 N at about 2.04 s, which is the opening reading; the opening frame holds at 4.0 N, so the ramp resumes from t = 2.04 s); break at 4.0 s; reading falls to 5.88 N; plateau to 7.0 s. Threshold rule (Revision 3, error check finding 2): the block is static while the pull is at or below 7.84 N and slides once the pull exceeds it. The ramp reaches exactly 7.84 N at t = 4.0 s, which is the largest value static friction takes and the trace's peak; the drop begins on the next instant, when the pull would pass 7.84 N. The trace must never be drawn above 7.84 N, and the readout shows "7.8 N" at the peak (two significant figures), so the spoken "at about seven point eight newtons" (scene 1) and "Just above that, the block starts to slide" (scene 4) both match the picture: 7.84 N is the last static value, not a sliding one. Block: still until 4.0 s; at break-free the reading falls linearly from 7.84 to 5.88 N within 0.1 s and the block's motion is driven from the same pull curve (Revision 2): net force = pull minus 5.88 N, so it falls linearly from 1.96 N to zero over 0.1 s; acceleration falls from 0.98 to 0 m s⁻²; speed gained = ½ × 1.96 N × 0.1 s ÷ 2.0 kg = 0.049 m s⁻¹, then constant while the pull holds 5.88 N (screen speed enlarged for visibility, tag "speed enlarged"). It is not a constant 0.98 m s⁻² for 0.3 s.
  (b) Turned on end: reading unchanged at 5.88 N (5.9 N). Two blocks: F_N = 39.2 N; f_k = 11.76 N (about 12 N).
  (c) `we-1`: F_N = 98 N; f_k = 29.4 N; net 20.6 N; a = 2.06 m s⁻² (2.1).
  (d) A1: F_N = 117.6 N; f_s,max = 52.92 N; μk F_N = 35.28 N; friction = 50 N.
  (e) A2: F_N = 147 N; μk = 22 ÷ 147 = 0.1497 → 0.15.
  (f) The site writes N for the normal force; the syllabus writes F_N. Screen text uses F_N.
  (g) Pronunciations: "mu s" ("mew ess"), "mu k" ("mew kay"); "f equals mu, F N"; "F N" as "eff en"; "nineteen point six newtons"; "zero point four oh".

Main question: *A sensor pulls a block harder and harder. The reading climbs to 7.8 newtons, the block jerks free, and the reading drops below 6 newtons. Why does it take more force to start something sliding than to keep it sliding?*
Entry knowledge (v18; v17's friction on tyres; v12 to v16 free-body diagrams, F_net = ma, W = mg).
Stops after: static friction matches the pull up to μs F_N; kinetic friction μk F_N, roughly constant; μs > μk; friction set by F_N and the surfaces, approximately not by area (simple model); level problems with f = μF_N.
Handoff: v20, Newton's laws in real situations.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v17 and v18): force arrows amber, tails on the body they act on; the friction arrow amber with a short hatched tail band to tell it from the pull; the net force a thicker outlined amber arrow; velocity arrows teal; acceleration arrows orange; the force trace amber on a white panel, with "maximum static" and "kinetic" marks dashed grey; working in ink with givens navy; results and framed answers green; mistakes and their crossings red; hand tags in the colour of the idea they mark (see "Colour key (Revision 3)" and "Type sizes" under Decisions).

### 1. hook (the reading drops)
> Last video ended with this block. A force sensor pulls it with four newtons, and it doesn't move. Let's keep pulling harder. The reading climbs, five, six, seven newtons, and still nothing. Then, at about seven point eight newtons, the block suddenly jerks **free**, and the reading drops below six newtons, while it keeps sliding. So it took more force to start the block sliding than to keep it sliding. **Why**?

Visual: opens on v18's final frame and holds it under the bridge sentence (see "Opening frame"): the painted block `phys-y11-wooden-block-v1.png` (about 520 px wide, 325 px tall) on the rough bench strip `phys-y11-surface-rough-v1.png`, the string to the painted sensor `phys-y11-force-sensor-v1.png`, the readout "4.0 N" (52 px) and the grey "not moving yet" tag; the chip moves up as the heading (60 px) "Static and kinetic friction". On "Let's keep pulling harder" (about 8 s in) the force trace panel opens below the bench (time axis "time (s)", reading axis "sensor reading (N)", 0 to 10 N, ticks 2, labels 30 px), with the trace already drawn from 0 to 4.0 N, and the pull resumes as the live run (author note a): the readout counts up through 5, 6, 7 N as the trace climbs; the block stays still (grey hand tag "still not moving"). On "free" the block lurches right and the trace drops from 7.8 to 5.9 N; the block slides on steadily as the trace runs flat. On "more force to start" an amber pen ring circles the peak, amber hand tag "to start: 7.8 N"; on "keep it sliding" a second amber pen ring circles the plateau, amber hand tag "to keep sliding: 5.9 N". On "Why" a chip (44 px) "more to start than to keep sliding: why?".

### 2. prediction: friction on a still block
> Go back to the moment the sensor pulled with four newtons. The block wasn't moving. How big was the friction on it then? Zero, four newtons, or the most it can **be**?

Visual: the trace rewinds to the 4.0 N point (cursor and readout "4.0 N"); the block slides back to its start; the block, the sensor reading and the trace all stay on screen. On "How big was the friction" a question chip (44 px) "friction on the still block = ?" and a grey pen ring round the block's base, grey hand tag "not moving". On "be" three chips (44 px) "0", "4.0 N", "its maximum" and a 3-second countdown ring.

### 3. static friction matches the pull
> It's four newtons. The block isn't accelerating, so the net force on it is zero. The only other force along the bench is friction, so friction must pull back with exactly four **newtons**. Pull with five newtons, and friction becomes five. Pull with six, and it's six. Watch the two readouts climb together, always equal. Friction between surfaces that aren't sliding is called static friction. It adjusts itself to match the pull and keep the block **still**. But it can only grow so far.

Visual: board change (Revision 3 cut; the matched-arrows stage, solid from its first frame): a close-up of the block (about 640 px wide, 400 px tall) on the rough bench strip with the string and the sensor, the amber pull arrow to the right, and two live readouts (52 px) above it, "pull: 4.0 N" and "friction: ?"; the trace small at the lower right with its cursor at 4.0 N; the three prediction chips in a row under the heading. The "4.0 N" chip turns green and the other two are crossed in red. On "the net force on it is zero" grey hand tag "not accelerating: net force 0". On "newtons" an amber friction arrow (hatched tail band) draws to the left along the base, equal in length to the pull, and the second readout fills in, "friction: 4.0 N"; an amber pen bracket spans the two equal arrows, amber hand tag "friction = pull". On "Pull with five newtons" the trace runs on from 4.0 N to 6 N with its cursor (Revision 3 simulation, see "Simulation"): the pull and friction arrows grow together and the two readouts count 5.0, then 6.0 N in step; on "always equal" the two readouts pulse together. On "static friction" a chip (38 px) "static friction: no sliding; matches the pull". On "still" the block gives a tiny tremble (not moving). On "so far" a dashed grey ceiling line draws across the trace at a height not yet labelled, grey hand tag "a limit?".

### 4. the limit: f equals mu F N
> The most static friction can be is mu s, times F N. F N is the normal force, how hard the bench pushes up on the block, which is how hard the two surfaces press together. On a level bench, with only the weight and that push acting up and down, F N equals the weight, m g. This block is two point oh kilograms, so F N is two point oh times nine point eight, nineteen point six **newtons**. Mu, the coefficient of friction, is a number with no units that says how grippy a pair of surfaces is. For this wood on wood, the static coefficient is zero point four oh. So the maximum is zero point four oh times nineteen point six, seven point eight **newtons**. Just above that, the block starts to **slide**.

Visual: board change (Revision 3 cut; the worked-example stage in the g01 layout, solid from its first frame): the block (about 520 px wide, 325 px tall) on the bench strip at the upper left with its pull and friction arrows, the trace with its unlabelled ceiling line below it; task strip "Find the maximum static friction"; givens card (navy): "m = 2.0 kg; level bench; g = 9.8 m s⁻²; μs = 0.40 (wood on wood)", grey tag "teaching data". On "mu s, times F N" the equation row (52 px): "f_s,max = μs F_N". On "how hard the bench pushes up" a grey arrow "F_N" up on the block, grey hand tag "bench pushes up"; on "F N equals the weight" a grey arrow "W = mg" down, equal, with a grey pen bracket joining the two, grey hand tag "level: F_N = mg"; row on "newtons": "F_N = mg = 2.0 kg × 9.8 m s⁻² = 19.6 N". On "coefficient" a chip (38 px) "μ: grippiness of a pair of surfaces, no units"; two small surface swatches beside it (`phys-y11-surface-rough-v1.png` "wood on wood, μs ≈ 0.4" and `phys-y11-surface-smooth-v1.png` "polished, lower μ"; the second is shown only as a contrast, no number). On "times nineteen point six" a chip "0.40 × 2.0 kg" is crossed in red, red hand tag "μ times F_N, not the mass". Row on the second "newtons": "f_s,max = 0.40 × 19.6 N = 7.84 N ≈ 7.8 N" in a green frame (52 px). On "slide" the trace's dashed ceiling labels itself "maximum static 7.8 N" and meets the peak (the block slides once the pull exceeds it), amber hand tag "the ceiling".

### 5. kinetic friction: the drop
> Once the block slides, a different friction takes over, called kinetic friction. It's mu k, times F N, and for these surfaces, mu k is zero point three oh. So kinetic friction is zero point three oh times nineteen point six, five point nine **newtons**, less than the maximum. In this simple model, it stays about the same at any speed. At the moment the block broke free, the pull was still seven point eight newtons, but friction fell to five point nine. You can see the gap open up between the two readouts. The leftover force makes the block **lurch**. Pull with just five point nine newtons, and it slides at a constant **velocity**.

Visual: board change (Revision 3 cut; the live trace stage, solid from its first frame): the bench, block (about 480 px wide, 300 px tall) and sensor across the top with the pull and friction arrows, the force trace wide below (about 1200 × 380 px) with its "maximum static 7.8 N" mark, and a live readout board at the right (52 px): "pull", "friction", "block: still"; a small navy givens card "F_N = 19.6 N; μk = 0.30". On "mu k, times F N" the equation row "f_k = μk F_N"; on "newtons" the row "f_k = 0.30 × 19.6 N = 5.88 N ≈ 5.9 N" in a green frame (52 px), and the trace's plateau gets its dashed mark "kinetic 5.9 N". On "about the same at any speed" a chip (38 px) "kinetic friction: sliding; about constant (simple model)". On "the block broke free" the break-free moment replays slowed as the live run (author note a; Revision 3 simulation): the pull readout reads "7.8 N" while the friction arrow and the friction readout snap from 7.8 to "5.9 N", amber hand tag "friction snaps down"; on "the gap open up" an amber pen bracket marks the gap between the two levels on the trace, and the two readouts pulse. On "lurch" an outlined amber net-force arrow (the difference, unlabelled) and an orange acceleration arrow flash as the block jumps forward, orange hand tag "leftover force: lurch", then shrink to nothing as the pull arrow, following the trace, falls to 5.9 N within the slowed 0.1 s; the board reads "block: sliding". On "velocity" the pull arrow matches friction, both readouts read "5.9 N", the net arrow is gone, and a steady teal velocity arrow rides with the sliding block; teal hand tag "pull = friction: constant velocity".

### 6. why starting is harder
> But why is static friction stronger? Zoom right in. Even polished surfaces are rough, covered in tiny bumps. Where the bumps touch, they press together and stick a little. When the block sits still, the bumps settle into each other, so breaking them all apart takes extra **force**. Once it's sliding, the bumps don't have time to settle. They skip over each other, so the friction is **smaller**. That's a simple model, but it explains why mu s is usually bigger than mu k.

Visual: board change (Revision 3 cut; the contact zoom stage, solid from its first frame): a magnifier circle fills the left two thirds, with the block on its bench strip (about 480 px wide, 300 px tall) at the upper right and a thin line from the block's base to the magnifier: two coded jagged profiles in full ink (block above, bench below) touching at a few points that glow amber. On "they press together and stick" an amber pen ring circles one contact. On "settle into each other" the profiles ease into each other and the glowing contacts grow, amber hand tag "still: contacts settle". On "force" a pull arrow on the upper profile strains and the contacts snap one after another. On "smaller" the upper profile slides steadily; contacts flicker on and off, smaller, amber hand tag "sliding: contacts skip". On "a simple model" grey hand tag "a simple model", and the conclusion sits in a green frame (44 px): "μs is usually bigger than μk".

### 7. not the area
> This model also tells us what friction depends on. Turn the block onto its end. Less of it touches the bench, but the friction is the same, five point nine **newtons**. The same weight presses on a smaller area, so each contact is squeezed harder. Now stack a second identical block on top, and watch the reading. The surfaces press together twice as hard, so the friction doubles, to about twelve **newtons**. In this simple model, friction depends on the normal force and the surfaces, and approximately not on the contact **area**.

Visual: board change (Revision 3 cut; the turn-and-stack stage, solid from its first frame): the block (about 520 px wide, 325 px tall) sliding on the bench strip, pulled through the sensor, with a large live readout (52 px) "friction: 5.9 N" and the grey "F_N 19.6 N" arrow; the trace plateau small at the lower right. On "Turn the block onto its end" the block tumbles onto its end (plate rotated 90°, footprint visibly narrower, grey pen bracket "contact area" under it); the sensor pulls it sliding at constant velocity and on "newtons" the readout holds "5.9 N" (author note b), amber hand tag "same 5.9 N". On "squeezed" a small inset of the magnifier shows fewer contacts, each glowing brighter. The block tumbles back; on "Now stack" a second `phys-y11-wooden-block-v1.png` drops onto it; the grey "F_N" arrow doubles in length, label "39.2 N"; on "about twelve" the live readout climbs to "11.8 N ≈ 12 N" and the trace plateau rises to that level, amber hand tag "press twice as hard: double". On "area" a chip "more contact area → more friction" is crossed in red, red hand tag "not the area (simple model)", and the rule sits in a green frame (44 px): "friction depends on F_N and the surfaces".

### 8. worked example: a sliding crate
> Let's use it. A ten kilogram crate is pushed across a level floor with a horizontal force of fifty newtons, and it slides. The coefficient of kinetic friction is zero point three oh. First, the normal force. F N equals m g, ten times nine point eight, ninety-eight **newtons**. Then friction, zero point three oh times ninety-eight, twenty-nine point four newtons, **backwards**. The net force is fifty minus twenty-nine point four, twenty point six newtons. So a equals twenty point six over ten, two point one metres per second **squared**.

Visual: clear change (a new stage in the g01 worked-example layout, solid from its first frame). `phys-y11-crate-v1.png` (about 400 px wide, 350 px tall) on the floor strip `phys-y11-surface-floor-v1.png`, sliding right slowly, with the amber push arrow "50 N" to the right. Task strip "Find the friction force and the acceleration"; givens card (navy): "m = 10 kg; push 50 N, horizontal; sliding on a level floor; μk = 0.30; g = 9.8 m s⁻²", grey tag "teaching data (site example)". Rows (52 px), one per cue: on "newtons" "F_N = mg = 10 kg × 9.8 m s⁻² = 98 N" (grey up and down arrows on the crate, grey hand tag "first, F_N"); on "backwards" "f_k = μk F_N = 0.30 × 98 N = 29.4 N" in a green frame (amber friction arrow with its hatched tail band on the crate's base, pointing left, amber hand tag "opposes the sliding"); on "The net force is fifty minus" "F_net = 50 − 29.4 = 20.6 N" (outlined net arrow), and a chip "a = 50 N ÷ 10 kg = 5.0 m s⁻²" is crossed in red, red hand tag "friction left out"; on "squared" "a = 20.6 N ÷ 10 kg = 2.06 ≈ 2.1 m s⁻²" in a green frame (52 px; orange acceleration arrow), with an orange pen arrow from the net arrow to the result.

### 9. memory aid
> Static stretches, kinetic's constant. Static friction stretches to match the pull, but only up to mu s F N. Kinetic friction stays at mu k F N while the surfaces **slide**.

Visual: board change to the memory stage (solid from its first frame): the block on its bench strip (about 480 px wide, 300 px tall) at the upper left with the force trace below it across the left two thirds, and the memory card in a dark-ink frame at the right. On "stretches to match the pull" the rising static part is tinted amber with an amber pen arrow along it, amber hand tag "static stretches (up to μs F_N)"; on "Kinetic friction stays" a pen underline runs along the plateau, amber hand tag "kinetic's constant (μk F_N)". The handwritten line writes large in the card (60 px): "Static stretches. Kinetic's constant." On "slide" the plateau pulses. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve kilogram box rests on a level floor. The coefficient of static friction is zero point four five, and of kinetic friction, zero point three oh. A horizontal rope pulls the box with fifty newtons. Does the box move? And what is the friction force on it? Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A 12 kg box rests on a level floor. The coefficient of static friction between the box and the floor is 0.45 and the coefficient of kinetic friction is 0.30. A horizontal rope pulls on the box with a force of 50 N. Take g = 9.8 m s⁻². Determine whether the box moves, and calculate the friction force acting on it. (3 marks)" Tag: "HSC-style question, written for HSCScience". The card arrives with its full text (38 px) and its picture in one move. Picture: `phys-y11-crate-v1.png` (about 360 px wide, 315 px tall) on the floor strip `phys-y11-surface-floor-v1.png` with a coded rope to the right and a single amber arrow "50 N" along it, as given; no friction arrow. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 11. feedback 1 (brief)
> F N is twelve times nine point eight, a hundred and seventeen point six newtons. The maximum static friction is zero point four five times that, fifty-three **newtons**. The fifty newton pull is less, so the box stays still, and static friction matches the pull, fifty **newtons**. Comparing it with kinetic friction, thirty-five newtons, is the trap. Kinetic friction only applies once it's **sliding**.

Visual: card shrinks to the top; "rests", "0.45", "0.30" and "50 N" underlined in navy as used; givens strip (navy, 38 px) "12 kg; μs = 0.45; μk = 0.30; pull 50 N; g = 9.8 m s⁻²"; the crate picture stays at the right. Rows (52 px): "F_N = 12 kg × 9.8 m s⁻² = 117.6 N"; on "newtons" "f_s,max = 0.45 × 117.6 N = 52.9 N ≈ 53 N"; a small comparison bar: "50 N < 53 N → stays still"; on the second "newtons" the friction arrow "50 N" appears on the box's base, equal to the pull. The answer sits in a green frame (52 px): "does not move; friction = 50 N (static)". On "sliding" a chip "50 N > μk F_N = 35 N, so it moves" is crossed in red, red hand tag "to start, compare with μs F_N". Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A fifteen kilogram sled is pulled along level snow at a constant velocity, by a horizontal rope with a tension of twenty-two newtons. Find the coefficient of kinetic friction between the sled and the snow. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A 15 kg sled is pulled at constant velocity along level snow by a horizontal rope. The tension in the rope is 22 N. Take g = 9.8 m s⁻². Calculate the coefficient of kinetic friction between the sled and the snow. (3 marks)" Tag as before. The card arrives with its full text (38 px) and its picture in one move. Picture: `phys-y11-sledge-v1.png` (about 600 px wide, 300 px tall) on a coded snow line with a coded rope and one amber arrow "22 N", as given; no friction arrow. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Constant velocity means zero net force, so kinetic friction equals the pull, twenty-two **newtons**. F N is fifteen times nine point eight, a hundred and forty-seven newtons. So mu k is twenty-two over a hundred and forty-seven, zero point one **five**. Dividing by the mass instead gives one point five, but mu compares friction with the normal **force**.

Visual: card shrinks to the top; "constant velocity", "15 kg" and "22 N" underlined in navy; givens strip (navy, 38 px) "15 kg; constant velocity; tension 22 N; g = 9.8 m s⁻²"; the sledge picture stays at the right. On "newtons" the friction arrow "22 N" on the sled, equal to the pull, grey hand tag "net force 0". Rows (52 px): "F_N = 15 kg × 9.8 m s⁻² = 147 N"; on "five" "μk = f_k ÷ F_N = 22 N ÷ 147 N = 0.15" in a green frame (52 px, "no units"). On "force" a chip "μ = 22 ÷ 15 = 1.5" is crossed in red, red hand tag "divide by F_N, not the mass". Hold about 1 second.

### 14. handoff
> Now we can find every force an object feels, its weight, the normal force, tension and friction. Next, we'll put them all together to solve real situations, at rest and in **motion**.

Visual: the memory line returns small at the top. The board clears to the `we-1` crate on its floor strip with its full free-body diagram drawn one arrow per spoken force: grey "W = 98 N" down, grey "F_N = 98 N" up, amber "push 50 N" right, amber "friction 29.4 N" left, then the outlined net "20.6 N". On "motion" the chip "Next: How do Newton's laws solve real situations, at rest and in motion?". This is the video's last frame. Hold about 2 seconds.

### 15. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Static friction (no sliding) matches the applied force, up to f_s,max = μs F_N.
2. Sliding: kinetic friction f_k = μk F_N opposes the sliding; about constant (simple model).
3. Usually μs > μk, so starting to slide takes more force than keeping sliding.
4. Level surface, only weight and F_N vertical: F_N = mg. Area hardly matters (simple model).
5. Method: F_N, then friction, then net force, then a = F_net ÷ m.

Memory card (framed in dark ink, beside the notes): *Static stretches. Kinetic's constant.* with a small copy of the trace (rise, peak, plateau) under the line. Notes in the role colours (friction words amber, F_N grey, acceleration orange), 34 px; five one-line bullets, about 400 characters of bullet text; no paragraphs. At the end of the hold the notes cross-fade back to scene 14's last frame.

## Teaching checks

- **Does it explain causes?** Why friction equals the pull on a still block: the net force must be zero (3). Why there is a starting threshold: static friction has a maximum, μs F_N (4); in this ideal model the block slides once the pull exceeds it. Why the reading drops: kinetic friction is μk F_N, smaller (5). Why the block lurches: the pull is still at the static maximum when friction falls (5). Why μs > μk: settled contacts must all be broken at once (6). Why area does not matter: the same weight on a smaller face presses each contact harder (7). Why constant velocity in A2 gives friction = pull: zero net force (13).
- **Misconceptions addressed:** "static friction is always its maximum" (2, 3; key note 1); "use μk to decide whether it starts" (11 crossed); "more area, more friction" (7 crossed; key note 4); "kinetic friction grows with speed" (5); "μ = f ÷ m" (13 crossed).
- **One idea at a time:** static (3), limit (4), kinetic (5), model (6), area (7), method (8); one row per cue.
- **Video makes it easier:** the trace builds with the pull (1, 3 to 5); the friction arrow grows with the pull and snaps short at break-free while the net arrow flashes (3, 5); the contacts settle and skip (6); the reading holds when the block is turned and doubles when stacked (7).
- **Response opportunity:** a 3 s prediction (2); two unseen HSC-style tasks with every condition on the card, 10 seconds each with the invitation to pause, the card pictures showing only the given forces. One crossed mistake each; feedback about 30 s and 27 s.
- **Avoided double teaching:** F_net = ma, W = mg and free-body diagrams (v12 to v16) used, not re-taught; v18 recalled in one sentence.
- **Syllabus coverage:** `ci927ecf47` (compare static and kinetic): 1 to 6, 9, A1. `ci6eb6311a` (f_friction = μF_N): 4, 5, 7, 8, A1, A2.
- **Out of scope by design:** angled pulls changing F_N (v20); inclines (v21, v22); air and rolling resistance.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks, not an official marking scheme).** "A 12 kg box rests on a level floor. The coefficient of static friction between the box and the floor is 0.45 and the coefficient of kinetic friction is 0.30. A horizontal rope pulls on the box with a force of 50 N. Take g = 9.8 m s⁻². Determine whether the box moves, and calculate the friction force acting on it."
Model answer: F_N = mg = 12 × 9.8 = 117.6 N. Maximum static friction = μs F_N = 0.45 × 117.6 = 52.9 N (53 N). The pull (50 N) is less than 53 N, so the box does not move. Static friction matches the pull: 50 N, opposite to the pull. Classic mistake (crossed): comparing 50 N with μk F_N = 35 N and concluding the box moves.

**Attempt 2 (scene 12; original wording, HSC style, 3 marks).** "A 15 kg sled is pulled at constant velocity along level snow by a horizontal rope. The tension in the rope is 22 N. Take g = 9.8 m s⁻². Calculate the coefficient of kinetic friction between the sled and the snow."
Model answer: Constant velocity, so the net force is zero and f_k = 22 N. F_N = mg = 15 × 9.8 = 147 N. μk = f_k ÷ F_N = 22 ÷ 147 = 0.15 (no units). Classic mistake (crossed): "μ = 22 ÷ 15 = 1.5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Demonstration | 2.0 kg; g 9.8; F_N 19.6 N; μs 0.40 → 7.8 N; μk 0.30 → 5.9 N; opening reading 4.0 N; end-on 5.9 N; stacked F_N 39.2 N, friction about 12 N | 1 to 7, 9 |
| Worked (site we-1) | 10 kg; 50 N; μk 0.30; F_N 98 N; f_k 29.4 N; net 20.6 N; a 2.1 m s⁻² | 8, 14 |
| A1 | 12 kg; μs 0.45; μk 0.30; 50 N; F_N 117.6 N; max static 53 N; friction 50 N; crossed 35 N | 10, 11 |
| A2 | 15 kg; 22 N; constant velocity; F_N 147 N; μk 0.15; crossed 1.5 | 12, 13 |
| Crossed slips (Revision 3, screen only) | scene 4: "0.40 × 2.0 kg" (μ times the mass, no result shown); scene 8: a = 50 N ÷ 10 kg = 5.0 m s⁻² (friction left out) | 4, 8 |
| Live readouts (Revision 3) | pull and friction equal from 4.0 to 7.8 N (3); pull 7.8 N with friction 7.8 then 5.9 N, then both 5.9 N (5); friction 5.9 N end-on, 11.8 ≈ 12 N stacked, F_N 19.6 and 39.2 N (7) | 3, 5, 7 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 2.0 × 9.8 = 19.6; 0.40 × 19.6 = 7.84; 0.30 × 19.6 = 5.88; 7.84 − 5.88 = 1.96; 1.96/2.0 = 0.98; speed gained ½ × 1.96 × 0.1 / 2.0 = 0.049 m/s; 2 × 19.6 = 39.2; 0.30 × 39.2 = 11.76.
- Trace: F = 1.96t reaches 4.0 N at t = 2.04 s and 7.84 N at t = 4.0 s.
- 10 × 9.8 = 98; 0.30 × 98 = 29.4; 50 − 29.4 = 20.6; 20.6/10 = 2.06.
- 12 × 9.8 = 117.6; 0.45 × 117.6 = 52.92; 0.30 × 117.6 = 35.28.
- 15 × 9.8 = 147; 22/147 = 0.1497; 22/15 = 1.47 (the crossed 1.5).
- Revision 3 crossed slip (scene 8): 50/10 = 5.0 (wrong on purpose: friction left out).

## Memory aid check

- **"Static stretches. Kinetic's constant."** Written for this lesson, said with its meaning in scene 9 and drawn on the trace: static friction stretches to whatever value keeps the surfaces from sliding, up to μs F_N; kinetic friction stays at μk F_N while they slide. Assumptions checked: "stretches" carries its limit in the same sentence (up to μs F_N); "constant" is the course model (kinetic friction roughly independent of speed and of contact area; real surfaces vary a little, kept in this author note only); it applies at a given normal force (if F_N changes, both values change, scene 7). It helps a new case: a student meeting "will it move?" knows to compare with the static maximum, and for a sliding object uses μk F_N directly (A1 and A2). Introduced after both frictions and the trace have been seen (3 to 8). Revision 3: the wording is unchanged; the aid is now a framed card in scene 9 and beside the key notes, with a small copy of the trace.
- **Considered, not used:** "Starting is harder than sliding" (the question itself, not a tool); "S before K" (alphabetical, no physics).

## Narration length estimate

Revision 3 count (11 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,572 characters**, 15 scenes. Characters per scene (1 to 15): 406, 163, 481, 690, 626, 466, 522, 530, 168, 293, 392, 237, 344, 179, 75. Revision 3 added three short clauses that narrate the simulation (130 characters in all): scene 3 "Watch the two readouts climb together, always equal." (+53); scene 5 "You can see the gap open up between the two readouts." (+54); scene 7 ", and watch the reading" (+23). At 13.3 characters per second the speech is about 419 s; add about 18 s of holds and settling (the trace build in 1, the replays in 3 and 5, the zoom in 6, the tumble and stack in 7, the 2-second memory hold), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 85 s of holds): **about 504 s**. Inside the 5,500 to 7,000 band and under the 570 s cap. Revision 2: 5,442 characters (scene sum; 5,456 joined), about 510 s with a 60 s notes hold, 58 characters below the band (accepted by root decision 10 at the time). Feedback: scene 11 about 30 s, scene 13 about 27 s (including the 1 s holds). Scene 4 is the longest (about 52 s): it defines F_N and μ and calculates the peak; if the learning review finds it dense, move the μ swatches to scene 5.

## Scene list and build ids

Lesson key `p-y11-v19` (route phys-y11-fa1-v19). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v19` and build folder `docs/production/claude-pm/lessons/p-y11-v19` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, predict-static, static-matches, static-limit, kinetic-drop, why-harder, not-area, worked-crate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except predict-static (`hold`: the 3 s prediction), attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): v18's last frame continues into scene 1 (camera continue); 1 to 2 camera continue (the trace rewinds); 2 to 3 board change to the matched-arrows close-up; 3 to 4 board change to the worked-example stage; 4 to 5 board change to the live trace stage; 5 to 6 board change to the contact zoom stage; 6 to 7 board change to the turn-and-stack stage (five Revision 3 cuts); 7 to 8 clear change (crate); 8 to 9 board change to the memory stage; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and the notes cross-fade back to scene 14's last frame at the end.

Holds: predict-static (3 s countdown), attempt-1, attempt-2 (10 s countdowns). key-notes is the quiet notes hold (about 45 s). `motionTools` adds the field motion engine (`custom` force) with `SimReadout` for the friction rig (scenes 1, 3, 5, 7). Review evidence paths: `learning_review` = `checks/p-y11-v19-learning-review.md`, `science_check` = `checks/p-y11-v19-science-check.md`.

## Assets

Delivered (present in `public/assets/physics/`; uniform scaling only, never stretched; the Codex asset brief below is kept for the record and needs no further painting):
- `phys-y11-wooden-block-v1.png` (1600 × 1000) and `phys-y11-force-sensor-v1.png` (the hooked sensor, 1200 × 900): scenes 1 to 7, 9.
- `phys-y11-sledge-v1.png` (2000 × 1000): A2.
- `phys-y11-crate-v1.png` (1600 × 1400; the wooden crate from brief 149): scenes 8, 10, 11, 14; v20 opens on it.
- `phys-y11-surface-rough-v1.png`, `phys-y11-surface-smooth-v1.png` and `phys-y11-surface-floor-v1.png` (each 2400 × 300, tiled never stretched): rough bench in 1 to 7 (v18's handoff; v20), smooth swatch in 4, floor in 8, 10, 11, 14.

Revision 3 sizes (files listed 11 Nov, all RGBA; scaled uniformly, never stretched): the block about 480 to 640 px wide (300 to 400 px tall); the crate about 400 × 350 px in scene 8 and 360 × 315 px on the A1 card; the sledge about 600 × 300 px on the A2 card; surface strips tiled at their native 300 px height or scaled uniformly.

Need (new plates): none.

Coded: string and rope, snow line, all arrows (`AMBER`, grey, teal, orange), the force trace (maths `FunctionGraph` through `graphTransform`, dashed marks), the magnifier and jagged contact profiles (an abstract model diagram, so coded), brackets, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`. v05's `MotionTrack` drives the block's position.

Kit gaps (for the build brief):
1. **`FrictionTrace`** (new, physics): a sensor-reading-against-time graph driven by one pull function with a static ramp, a break time, a drop to a kinetic level and a plateau; returns the block's state (still, lurching, sliding) for the same time so the plate, the arrows and the trace stay in step; dashed level marks with labels; rewind and replay to a cue. Revision 3: the block's motion comes from the field motion engine (`custom` force = pull minus friction) and the "pull", "friction" and "block" readouts use `SimReadout`, all on the trace's clock; the reading is never drawn above the static maximum (threshold rule in author note a); a second run covers the stacked block (F_N 39.2 N, plateau 11.76 N).
2. **`ContactZoom`**: magnifier with two coded jagged profiles, glowing contact points, a "settle" and a "skip" mode.

## Codex asset brief

Revision 3: no new plates. Delivered (see Assets); kept for the record.

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y11-fa1-v19.md`, route entry phys-y11-fa1-v19. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Same plate rules as the v17 brief (true alpha, clean edges, house style matched to `public/assets/biology/b4-car-blue-v1.png`, 8 per cent margin, no text, people, backdrop, glow or shadow; native aspect, never stretched).

1. `phys-y11-surface-rough-v1.png` (2400 × 300 px, **seamlessly tileable left to right**): a strip of plain timber bench top seen in exact side view with a little of the top face, visible grain and a slightly matte, rough finish; the top edge exactly horizontal. Tiled (repeated), never stretched, to any width. Essential (scenes 1 to 7; v18's handoff; v20).
2. `phys-y11-surface-smooth-v1.png` (2400 × 300 px, seamlessly tileable): the same strip in polished, glossy laminate (pale grey) with a soft sheen line, so it reads as slipperier than the timber. Used small as a contrast swatch (scene 4). Optional; if cut, scene 4 shows only the timber swatch.
3. `phys-y11-surface-floor-v1.png` (2400 × 300 px, seamlessly tileable): a strip of floor in side view, sealed concrete or vinyl, pale warm grey, matte. Essential (scenes 8, 10, 11, 14; v20).
4. `phys-y11-crate-v1.png` (1600 × 1400 px): a closed wooden shipping crate in exact side view with a little of the top face, slatted planks and corner battens, no stencilling, labels or text, flat bottom level. Essential (scenes 8, 10, 11, 14; v20 opens on it).

Report inspection on the dark board background at about 150 px and 600 px wide, and a tiling check (three copies side by side, no visible seam). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y11-v19-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: static friction matches the applied force up to μs F_N (when the pull is the only other horizontal force); kinetic friction μk F_N is roughly constant; μs > μk for most surfaces; F_N = mg only on a level surface with only weight and the normal force acting vertically (stated); friction independent of contact area in this model; constant velocity means zero net force.
3. Confirm the trace, the arrows and the block's state come from one function (author note a), that the break-free value equals 7.84 N, the plateau 5.88 N and the stacked plateau 11.76 N.
4. Confirm the microscopic model is labelled "a simple model" on screen and in the narration.
5. Confirm both attempt questions are original in wording, carry every needed value, and that the card pictures show only the given forces (no friction arrows).
6. Confirm the memory aid's condition (up to μs F_N) is on screen and spoken.
7. Confirm the syllabus quotes match the route JSON exactly, the notation follows the syllabus (f = μF_N), and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and no people in any plate request.
9. Confirm the narration character count by script with the build parser rules.
10. Revision 3: confirm every phrase quoted after "On" in a Visual appears word for word in that scene's narration, in spoken order, and every bold cue is quoted in its Visual.
11. Revision 3: confirm the three added clauses (scene 3 "Watch the two readouts climb together, always equal."; scene 5 "You can see the gap open up between the two readouts."; scene 7 ", and watch the reading") say nothing the pictures do not show, and that the live readouts match "Numbers used".
12. Revision 3: confirm the two crossed slips added on screen (scene 4 "0.40 × 2.0 kg"; scene 8 "a = 50 N ÷ 10 kg = 5.0 m s⁻²") are clearly marked wrong, and that the threshold rule in author note (a) agrees with scene 1 and scene 4's wording.
13. Revision 3: confirm the boundary, the "Stops after" line and the YouTube draft now scope contact-area independence to the simple model.
14. Revision 3: confirm scene 1 opens on v18's final frame and scene 14's final frame is unchanged from Revision 2; no faint or ghosted items; every plate named by filename; five one-line key notes.

## YouTube metadata (draft)

Title: Static vs Kinetic Friction: Why Starting Is Harder Than Sliding | Year 11 Physics

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson18.sa.html

A force sensor pulls a block harder and harder. The reading climbs to 7.8 N, the block jerks free, and the reading drops below 6 N. Why does it take more force to start something sliding than to keep it sliding? See static friction match the pull up to its limit, μs F_N, then kinetic friction, μk F_N, take over at a lower, steady value. Find out why the block lurches, why μs is usually bigger than μk, and why, in the simple model of friction, it depends on the normal force and the surfaces but approximately not on the contact area. Then solve friction problems with f = μF_N. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Compare static and kinetic friction" (ci927ecf47)
"Solve problems using f friction = μ F N" (ci6eb6311a)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Connected bodies (previous video). Next: Newton's laws in real situations.

#Year11Physics #Physics #Friction #HSCScience

## Open decisions

- **1. Demonstration coefficients.** μs = 0.40 and μk = 0.30 for wood on wood are typical textbook values, not the site's. They make the peak and drop large enough to see. If root prefers the site's crate numbers throughout, the demonstration can use the site activity's box (20 kg, μs 0.50, μk 0.35: 98 N and 68.6 N) at a larger scale; this design does not recommend it (the activity's 80 N push does not move the box, which is a different scene).
- **2. Normal force symbol across the course.** This design uses the syllabus F_N, and v17 (scene 5) labels the normal force F_N to match; v18 draws it unlabelled. Root to fix one symbol for v12 to v20 (recommend F_N, the syllabus symbol).
- **3. Site link form.** As v05.

## Review notes

- Revision 2 (3 Nov): independent learning review and physics check (brief 149) found 0 blockers and 3 should-fix, all applied: (1) scene 5 now says kinetic friction stays about the same at any speed "in this simple model", and scene 7, key note 2 and key note 4 scope speed and contact-area independence to the simple model ("approximately"); the repeated "That's the drop on the sensor" was cut to fund it; (2) author note (a) and the scene 5 visual drive the lurch from the sensor's 0.1 s pull drop (net force 1.96 N falling to zero, speed gained 0.049 m/s, then constant), not a constant 0.98 m/s² for 0.3 s; (3) scene 4 says "Just above that, the block starts to slide" (cue word "slide") instead of "exactly where the block broke free". Plate names updated to the delivered `phys-y11-` files. Count 5,456 joined (5,442 separate), 15 scenes, about 510 s. No findings rejected. Original Revision 1 next steps, for the record: student learning review (trace from v18 and the assumed v12 to v16; check that the zero-net-force step makes "friction matches the pull" feel caused; that the snap at break-free explains the lurch; that the bump model is clearly a model; that the area demonstration convinces; that the attempt cards give nothing away), then the Codex physics check and error check.
- The trace, the matched arrows and the snap at break-free carry the explanation; judge them at playback speed in the voiced preview. All three must come from one function.
- Revision 3 (11 Nov): visual upgrade; the error check's two should-fix findings are resolved; three short clauses added to the narration (130 characters). Needs the Codex error check before plates and voicing.

## Revision 3 (11 Nov 2026)

Findings resolved (`checks/p-y11-v19-error-check.md`, 3 Nov; 0 blockers, 2 should fix; the learning review and science check findings were applied in Revision 2):
- **Should fix, contact area unscoped in the boundary and the YouTube draft.** Resolved: the boundary now reads "in the simple dry-friction model, friction depends on F_N and the surfaces and approximately not on the contact area"; the "Stops after" line and the YouTube description carry the same scope ("in the simple model of friction ... approximately not on the contact area"; "usually bigger").
- **Should fix, trigger at exactly 7.84 N against "just above".** Resolved in author note (a) with a threshold rule: static while the pull is at or below 7.84 N, sliding once it exceeds it; 7.84 N is the trace's peak and the last static value; the trace is never drawn above it and the readout rounds to "7.8 N". The spoken lines are unchanged and now agree with the model. Kit gap 1 carries the rule for the build.
- **Checker finding (this revision).** Scene 8's first bold cue "newtons" was not quoted in its Visual; the first row now writes on "newtons".

Narration (no voice manifest exists, so the text could change): Revision 2 was 5,442 characters, under the 5,500 floor. Three short clauses that narrate the simulation were added, as the upgrade brief allows:
- Scene 3: "Watch the two readouts climb together, always equal."
- Scene 5: "You can see the gap open up between the two readouts."
- Scene 7: "Now stack a second identical block on top, and watch the reading."

Visual upgrade (to `../maths-visual-standard.md` and the build gate), scene by scene:
- Decisions gain "Colour key (Revision 3)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Scene 1: v18's frame holds under the bridge sentence with its plates named and sized; the trace opens on "Let's keep pulling harder" (about 8 s in); amber pen rings and hand tags "to start: 7.8 N", "to keep sliding: 5.9 N".
- Scene 2: the block, reading and a question chip stay on screen; grey pen ring and "not moving".
- Scene 3: new matched-arrows close-up (block 400 px tall) with two live readouts; hand tags "not accelerating: net force 0", "friction = pull", "a limit?"; amber pen bracket; wrong prediction chips crossed in red.
- Scene 4: new worked-example stage (g01 layout); hand tags "bench pushes up", "level: F_N = mg", "the ceiling"; crossed slip "0.40 × 2.0 kg" with "μ times F_N, not the mass"; the maximum in a green frame at 52 px.
- Scene 5: new live trace stage with a readout board (pull, friction, block state); hand tags "friction snaps down", "leftover force: lurch", "pull = friction: constant velocity"; amber pen bracket on the gap; f_k in a green frame.
- Scene 6: new contact zoom stage, profiles in full ink, the block kept in view; amber pen ring; hand tags "still: contacts settle", "sliding: contacts skip", "a simple model"; conclusion in a green frame.
- Scene 7: new turn-and-stack stage with a large live readout; hand tags "same 5.9 N", "press twice as hard: double"; red crossing with "not the area (simple model)"; the rule in a green frame.
- Scene 8: crate sized; g01 layout; hand tags "first, F_N", "opposes the sliding"; crossed slip "a = 50 N ÷ 10 kg = 5.0 m s⁻²" with "friction left out"; friction and acceleration in green frames; orange pen arrow.
- Scene 9: the memory aid is a framed card beside the block and trace, with a pen arrow and underline on the trace.
- Scenes 10 to 13: cards arrive with full text (38 px) and picture; countdown ring full from "Pause here to answer."; answer sides gain navy givens strips, green framed answers at 52 px and red hand tags on the crossed slips.
- Scene 14: unchanged.
- Scene 15: hold 45 s; five one-line bullets (the longest about 90 characters); the memory card framed beside them.

Cuts made: scenes 1 to 7 ran about 250 s on one bench set-up. Five board changes were added (at scenes 3, 4, 5, 6 and 7), so the longest set-up is now about 52 s (scene 4).

Simulation: the friction rig (scenes 1, 3, 5, 7): one pull function drives the trace, the arrows, the readouts and the block; the block's motion uses the field motion engine (`custom` force) with `SimReadout`. The trace itself stays the `FrictionTrace` kit gap.

New plate requests: none.

Joins: the opening (scene 1 on v18's final frame) is unchanged, and v18's final frame was not changed in its own Revision 3. The final frame (scene 14) is unchanged, so v20's opening holds.

Counts: 5,442 to 5,572 characters (scene sum); about 510 s to about 504 s (speech up about 10 s, notes hold 60 s to 45 s).

Calls for root:
1. Root decision 10 accepted v19 at 5,420 characters. This revision follows the later call to add one or two short simulation clauses when under 5,500; three were needed to clear the floor with a margin (5,572). Any of the three can be dropped without harming the visuals; dropping all three returns to 5,442.
2. The threshold rule keeps the trace peak at exactly 7.84 N as the last static value. The alternative (letting the reading overshoot before the drop) would show 7.9 N and was not chosen.
3. Two new crossed slips are screen only: "0.40 × 2.0 kg" (scene 4, no result shown) and "a = 50 N ÷ 10 kg = 5.0 m s⁻²" (scene 8).
4. Key note 4 was shortened to "Area hardly matters (simple model)", keeping the science check's scope; the definition of F_N stays in scene 4.
5. The opening-frame paragraph still says "v18 (Revision 1) ends scene 13 on"; the frame it describes is unchanged through v18 Revision 3, so the text was left alone.
6. Acceleration stays orange here (existing role name), pending root's shared scheme.
