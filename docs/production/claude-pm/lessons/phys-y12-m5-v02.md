# Year 12 Physics M5 V02: Launch components. How does launch angle set the two initial velocity components? (design)

Status: Revision 2 (6 Nov 2026): brief 187 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,132 characters, 16 scenes, about 544 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics). Templates: `phys-y11-fa1-v01.md` (structure, voice, layout), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format); visual system and colour key from `phys-y12-m5-v01.md` (written just before this design). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v02.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only), as for v01, with the "Resolve the launch vector" and "Apply component reasoning" sections and worked examples 1 and 2 used here: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson01.sa.html`, SHA256 `a739198c2342e395b4220c69a481c9d3e2086d5a788c8b83c7e35025b2e3b6d1` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v02` in `../../programme/phys-y12-route-inputs.json`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Resolve 20 m/s at 30 degrees; use 25 m/s at 40 degrees to find time to the peak. Distinguish zero vertical speed from zero acceleration. Stop before full flight." Next: "phys-y12-m5-v03: What determines height, flight time and landing velocity at the launch level?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; one main question; no people, hands or faces: the site's kicked ball becomes a ball fired by a school projectile launcher; painted plates for the launcher and ball, coded triangle, arrows, ground, columns and clock; plates never stretched; one reasoning stage at a time; task strip, equation strip and grouped givens; every number recalculated; g = 9.8 m s⁻²; HSC data sheet symbols; 3 s in-teaching prediction countdowns; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causes before rules). Year 11 right-triangle trigonometry and Pythagoras are recalled in a phrase; v01's two columns and clock are recalled, not re-taught.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-01`: "analyse the motion of projectiles by resolving the motion into horizontal and vertical components, making the following assumptions:" "a constant vertical acceleration due to gravity", "zero air resistance"
- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)" (this video: initial velocity and launch angle, and the time to the peak as the first step towards time of flight)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (pages 52 and 53)

**Boundary:** opens on v01's final frame (ball B's launch arrow tilted up, two dashed components with "?"). Teaches: the launch velocity as the hypotenuse of a right triangle of components; why the horizontal component uses cos and the vertical sin when θ is measured from the horizontal (adjacent and opposite); site worked example 1 (20 m s⁻¹ at 30°: 17.3 and 10.0 m s⁻¹); why the components don't add to 20 (perpendicular, Pythagoras); how the angle shares a fixed speed between the two directions (0° to 90° sweep); what each component does in flight (u_x constant, v_y falling by 9.8 m s⁻¹ each second); the peak (v_y = 0, velocity horizontal, acceleration still 9.8 m s⁻² down); site worked example 2 (25 m s⁻¹ at 40°: time to peak 1.64 s); two traps (total speed in place of u_y; an angle from the vertical). Stops at the peak. Not taught: maximum height, total flight time, landing velocity (v03); range (v04); unequal heights (v05).

## Decisions

- **Learner question (route wording kept).** "How does launch angle set the two initial velocity components?" The answer, built in order: the launch velocity is the hypotenuse of a right triangle whose sides are the components (2); θ from the horizontal makes the horizontal side adjacent (cos) and the vertical side opposite (sin) (2); so a steeper angle moves speed from across to up without changing it (3, 4); in flight the horizontal part stays and the vertical part is used up by gravity, so u_y alone sets the time to the peak (5, 7, 8).
- **Opening frame (v01 handoff).** v01's final frame, described in v01's "Final frame": B at the bench edge with an orange launch arrow at 35°, a dashed teal horizontal outline "u_x = ?" and a dashed blue vertical outline "u_y = ?", the ledger small at the top right and the chip "Next: how does the launch angle set u_x and u_y?". Scene 1's first sentence recalls v01 over that frame; on "tilt the launcher up" the bench clears and the frame becomes a launcher on level ground at 30°.
- **Hook and prediction (site worked example 1 numbers; prediction new).** "30° is a third of the way to vertical, so does a third of the speed go up?" is a natural wrong guess (linear sharing). The answer in scene 3 is half (sin 30° = 0.5), and the components add to 27.3, not 20. Both surprises push students to the triangle rather than to proportions.
- **Projectile launcher instead of a kick (no people).** A school spring projectile launcher (new two-layer plate: base and barrel, the barrel rotating about its pivot) fires the steel ball. It is reused in v03 to v05. The launch speed is a given model value; the launcher's own settings are not discussed.
- **Why cos and sin (site worked example 1 step 2: "The horizontal component is adjacent to the launch angle, while the vertical component is opposite it").** Taught from the triangle, with adjacent and opposite pointed at on the drawing; SOH CAH TOA is recalled as "from right-angled triangles", not as a mnemonic.
- **Angle sweep (pack visual reuse: `m5-vector-resolution` and `VelocityDecomposition`, one vector scale).** The launch arrow keeps one length (20 m s⁻¹ at 14 px per m s⁻¹ = 280 px) while the angle sweeps 0° to 90°; the teal and blue sides resize, with readouts at 0°, 45° and 90°. The artwork is not rotated to imply a magnitude change (pack).
- **In-flight behaviour (v01 recalled).** The ledger from v01 returns with u_y now positive: v_y = u_y + a_y t loses 9.8 m s⁻¹ each second: 10.0 → 0.2 m s⁻¹ after 1.0 s, zero at 1.02 s (screen only; the narration says "a moment later").
- **The peak (route stop; site misconceptions 2 and 3; lesson 3 "At the top of the path, the velocity is zero").** A 3 s prediction ("velocity and acceleration at the top?"), then a causal argument: if the acceleration were zero at the top, v_y would stay zero and the ball would never come down. Zero vertical velocity is not zero acceleration, and the velocity at the top is u_x, horizontal.
- **Worked example 2 (site worked example 2, unchanged numbers).** 25 m s⁻¹ at 40°: u_y = 16.07 m s⁻¹, t = 16.07/9.8 = 1.64 s. Givens grouped by column; v_x is shown but not needed (grey tag "not needed for the time"). The site's own note "This is the time to maximum height, not the total flight time" is said.
- **Two traps (pack section 4).** (1) Total speed in t = u/g (25/9.8 = 2.55 s, crossed). (2) An angle from the vertical: 40° from the vertical is 50° above the horizontal, so u_y = 25 cos 40° = 19.2 m s⁻¹. This also sets up v03's case (25 m s⁻¹ at 50°, the same launch), used for the final frame.
- **Memory aid (new; see "Memory aid check"): "Cos is close."** The component close to (next to) the given angle uses cos. Introduced after the triangle reasoning (2) and the vertical-angle trap (9), which it resolves.
- **Attempts (pack candidates, original wording).** A1: 10.0 m s⁻¹ at 60°: u_x = 5.00, u_y = 8.66 m s⁻¹ (crossed: swapped components). A2: u_x = 8.0, u_y = 14.7 m s⁻¹: time to peak 1.50 s; velocity at the peak 8.0 m s⁻¹ horizontal; acceleration 9.8 m s⁻² down (crossed: "velocity and acceleration are zero at the top").
- **Sign convention and significant figures.** +x launch direction, +y up, a_y = −9.8 m s⁻². Worked example 1 to three significant figures as on the site (17.3, 10.0); worked example 2 carries u_y = 16.0697 unrounded into t and gives 1.64 s. A1 to three significant figures (data 10.0); A2 to three (1.50 s).
- **Handoff (route next).** Scene 15 fires the 25 m s⁻¹, 50° launch from scene 9, draws the rising half to the peak, and leaves the falling half dashed with "?" at the peak height, the landing time and the landing velocity. See "Final frame".
- **Site sources used:** "Resolve the launch vector" (component equations and the resultant box); worked example 1 (scenes 2, 3); worked example 2 (scene 8); misconceptions 2 and 3 (scenes 6, 7); MC item "10 m/s at 60°, v_x?" (A1's idea, rewritten); lesson 3's "At the top of the path, the velocity is zero" misconception (scene 7, A2); the resultant-velocity Pythagoras check (scene 3). Not used: the atan2 quadrant note (no below-horizontal velocity needs an angle here; v03); the 30 m s⁻¹ cricket-ball illustration (pack: a different case); the long jumper (a person); Activity 1 (15 m s⁻¹ at 50°, 12 and 5 m s⁻¹ resultant, cliff drop) left as site practice.
- **Site notes:** none new for this video. Checked and correct: worked example 1 (17.3, 10.0 m s⁻¹); worked example 2 (16.1 m s⁻¹, 1.64 s; full precision gives 1.6398 s, the same to three significant figures); MC 10 m s⁻¹ at 60° (5.0 m s⁻¹); Activity 1 drill (10.3 m s⁻¹).
- **Pack questions answered:** both candidates used as attempts (unchanged numbers); the pack's visual reuse (`VelocityDecomposition`, `m5-vector-resolution` configured 20 m s⁻¹ at 30°, one vector scale) is adopted, with a clear switch to the 25 m s⁻¹, 40° case for the time to the peak.
- **Cause chain taught, in order:** (1) components are the perpendicular sides of a right triangle with u as hypotenuse (2); (2) θ from the horizontal: adjacent is horizontal (cos), opposite is vertical (sin) (2); (3) perpendicular parts combine by Pythagoras, not addition (3); (4) the angle shares a fixed speed between across and up (4); (5) no horizontal force keeps u_x; gravity removes 9.8 m s⁻¹ of v_y each second (5); (6) at the top v_y = 0 but v = u_x and a = g down (7); (7) so t_peak = u_y/g, using u_y only (8, 9).
- **Entry knowledge (route):** Year 11 vectors, Newton's laws, trigonometry, constant acceleration and work-energy; v01 (two columns, one clock; a_x = 0, a_y = −9.8 m s⁻²).
- **Learner-visible vocabulary (plain meaning at first use):** launch angle θ (the angle between the launch velocity and the horizontal, scene 1); hypotenuse, adjacent and opposite (the long side, the side next to the angle, the side across from it, 2, recalled); peak or highest point (where the ball stops rising, 5).
- **Legacy logic ported:** none.
- **New explainer motion (coded, plus plates):** launch triangle with a live angle (`VelocityDecomposition` extended: one fixed hypotenuse length, teal and blue sides resizing, adjacent and opposite labels attached to the sides, angle arc); component bars beside the sweep (teal and blue, to scale); the v01 strobe stage (kit gap 1) configured to 20 m s⁻¹ at 30° and 25 m s⁻¹ at 40° and 50°, with shrinking blue arrows and constant teal arrows at each image; the two-column ledger and clock (kit gap 2); `AlignedAlgebra`; `Countdown` (3 s in scenes 1 and 6; 10 s in 11 and 13); `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout and colour key:** as v01 (stage left with equal x and y scales; ledger and clock right; horizontal teal, vertical blue, resultant and launch velocity orange, acceleration violet, givens navy). Ground is a coded level ground line above the bottom 12% of the frame.
- **Colour roles (Revision 2, fixed for the whole video; the v01 key):** horizontal quantities (u_x, v_x, cos θ, the adjacent side, the teal bar) teal; vertical quantities (u_y, v_y, sin θ, the opposite side, the blue bar) blue; launch velocity u, the hypotenuse and the trajectory orange; a_y and g violet; givens navy; clock ink; framed answers in a dark-ink box; crossed mistakes and their hand tags red. Hand-font teacher tags take the colour of the quantity they mark, and the same colours run through the triangle, bars, ledger, working, readouts and key notes.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scene 3, 8 and 9 rows 52 px); live readouts (θ, u_x, u_y and the check u_x² + u_y² in scene 4; the clock) about 52 px; triangle side labels 44 px; supporting lines, givens and ledger rows 30 to 36 px; hand-font tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The painted launcher (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, delivered in brief 187 and inspected on `assets/brief187-qa/launcher-rotations.jpg` at 0°, 30°, 50° and 90°) arrives in scene 1 and is the live control in scene 4, the launch point in scenes 5, 8 and 15.
- **Simulation (Revision 2).** Scene 4 becomes a true slider: the painted barrel (about 320 px wide, not an icon) tilts from 0° to 90° while the triangle beside it resizes and a readout panel updates every frame: "θ", teal "u_x", blue "u_y" and an ink check "u_x² + u_y² = 400" that never changes. The strobe stage with shrinking blue arrows (5, 7) is the second simulation.
- **Stage changes (Revision 2).** Scene 2 is the pushed-in triangle; scene 3 the calculation layout beside it; scene 4 a clear change to the launcher slider; scenes 5 and 6 the strobe stage; scene 7 a camera push to the ball at the peak; 8 and 9 the calculation layout; 10 the two triangles. No set-up runs past about 60 s.
- **No human figures.** The launcher fires the ball; nothing is thrown or kicked by a person.
- **Author notes (not learner copy):**
  (a) The launcher is idealised: the ball leaves at the given speed and angle from the barrel tip, taken as the origin, on level ground. Launch height above the ground (a few centimetres) is ignored here and in v03 and v04 (equal launch and landing levels).
  (b) "Cos is close" is a statement about the side adjacent to the given angle in the velocity triangle; it is true for any angle convention once the adjacent side is identified. It is not a statement that horizontal always uses cos.
  (c) The peak argument (scene 7) uses a_y = −9.8 m s⁻² throughout the flight; "if the acceleration were zero" is a counterfactual, flagged as such in the narration ("If ... would").
  (d) Scene 5 values: v_y = 10.0 − 9.8t: 10.0, 7.55, 5.10, 2.65, 0.20 m s⁻¹ at t = 0, 0.25, 0.5, 0.75, 1.0 s; zero at t = 1.0204 s. Screen only except "ten" and "zero point two".
  (e) Pronunciations: "u cos theta", "u sin theta" (say "sine" as "sin" in the house voice; root to confirm the Google voice reads "sin" as "sine"), "twenty-five sin forty", "one point six four seconds".

- **Open decisions for root:**
  - **1. Launcher plate (root).** One new two-layer plate, shared with v03 to v05. Fallback: the steel ball alone with a coded launch point (weaker; there is then nothing to tilt). Revision 2: delivered in brief 187 (`assets/brief187-manifest.json`; registration checked at 0°, 30°, 50° and 90°); designer acceptance of its native size and pivot coordinates is pending with root.
  - **2. "sin" pronunciation (voice pilot).** Narration writes "sin theta" and "sin thirty" as students write them; confirm the Google voice says "sine". If not, write "sine" in the narration text.
  - **3. Peak counterfactual (learning review).** Scene 7's "if the acceleration were zero" ghost path: confirm it clarifies rather than plants a wrong picture; if not, cut the sentence and the ghost (about 120 characters).

Main question: *A launcher fires a ball at 20 m s⁻¹, 30° above the horizontal. How much of that velocity goes across, how much goes up, and why does the angle decide it?*
Entry knowledge: Year 11 right-triangle trigonometry and vectors; v01's two columns and one clock.
Stops after: components u_x = u cosθ, u_y = u sinθ with reasons; the angle sweep; behaviour in flight to the peak; v_y = 0 with nonzero velocity and unchanged acceleration at the peak; time to the peak from u_y.
Handoff: v03, maximum height, flight time and landing velocity for a launch back to the same level.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols as v01.

### 1. hook (how much goes up?)
> Last time, ball B left the bench sideways, so it started with no vertical velocity at all. Now let's tilt the launcher up. This one fires a ball at twenty metres per second, at thirty degrees above the **horizontal**. Some of that velocity carries the ball across, and some carries it up. But how much of each? Thirty degrees is a third of the way from horizontal to vertical. So does a third of the speed go **up**? Have a **think**.

Visual: opens on v01's final frame (see Decisions). On "tilt the launcher up" the bench, B and the ledger slide out; a coded level ground line draws across the stage and the launcher plate (`y12p-launcher-base-v1.png` with its barrel layer `y12p-launcher-barrel-v1.png`, new) stands at the left with the steel ball (`phys-y11-steel-ball-v1.png`, 36 px) at the barrel tip. The barrel rotates up to 30°. On "horizontal" an orange arrow "u = 20 m s⁻¹" draws from the barrel tip along the barrel, a dashed grey horizontal reference line and an angle arc "θ = 30°" at its tail. On "up" the dashed teal and blue outlines from v01 reappear at the arrow with "?" each, and a chip "30° is ⅓ of 90°, so ⅓ of the speed up?" writes. Hand tags: teal "across?" by the teal outline and blue "up?" by the blue outline (30 px); an ink pen ring circles "30°". On "think" a 3 s `Countdown` ring runs beside the chip (44 px).

### 2. the launch triangle: why cos and sin
> The launch velocity is a vector, so we can split it into two components at right angles: a horizontal one, u x, and a vertical one, u y. Put them tip to tail and they make a right-angled triangle, with the launch velocity as the **hypotenuse**. The angle theta sits between the launch velocity and the horizontal. So the horizontal side is next to the angle, the adjacent side, and the vertical side is **opposite** it. From right-angled triangles, adjacent over hypotenuse is cos theta, and opposite over hypotenuse is sin theta. So u x equals u cos theta, and u y equals u sin **theta**.

Visual: camera push into the launch arrow (launcher dims). The dashed outlines become solid: a teal arrow along the horizontal "u_x" and a blue arrow up from its head "u_y", tip to tail, with a right-angle mark. On "hypotenuse" the orange arrow is traced by a `PenArrow` and tagged "hypotenuse: u". On "adjacent" the teal side is underlined with a tag "next to θ: adjacent"; on "opposite" the blue side gets "across from θ: opposite". On the fifth sentence two grey chips write "cos θ = adjacent ÷ hypotenuse" and "sin θ = opposite ÷ hypotenuse". An ink pen ring circles θ at the arrow's tail with an ink hand tag "angle sits here". On "theta" (last bold) they turn into the boxed component equations (52 px), teal "u_x = u cos θ" and blue "u_y = u sin θ", which move to the right column under the clock as the first rows of the ledger.

### 3. worked example: twenty metres per second at thirty degrees
> Let's do the twenty metres per second at thirty degrees. Horizontally, u x is twenty times cos thirty, which is about seventeen point three metres per **second**. Vertically, u y is twenty times sin thirty. Sin thirty is exactly a half, so u y is ten point zero metres per second, **upwards**. So half the speed goes up, not a third. And notice, seventeen point three plus ten isn't twenty. The components aren't pieces of a total that you add as numbers. They're at right angles, so they combine by Pythagoras, and the square root of seventeen point three squared plus ten squared is **twenty**.

Visual: calculation layout beside the triangle (site worked example 1). Task strip: "Find the components of the launch velocity". Equation strip: "u_x = u cos θ", "u_y = u sin θ". Givens (navy): "u = 20 m s⁻¹", "θ = 30° above the horizontal". `AlignedAlgebra`: teal "u_x = 20 cos 30° = 20 × 0.866" and on "second" "= 17.3 m s⁻¹ (horizontal)", the teal side of the triangle gaining the label "17.3"; blue "u_y = 20 sin 30° = 20 × 0.500" and on "upwards" "= 10.0 m s⁻¹ (up)", the blue side labelled "10.0". On "not a third" the scene 1 chip returns and is crossed (caption "sin 30° = ½"). On "isn't twenty" a red sum "17.3 + 10.0 = 27.3 ≠ 20" writes and is struck. On "twenty" a grey row "√(17.3² + 10.0²) = √400 = 20 ✓" with the right-angle mark ringed and an ink hand tag "at right angles: Pythagoras". Rows 52 px; "u_x = 17.3 m s⁻¹" and "u_y = 10.0 m s⁻¹" framed in dark-ink boxes; blue hand tag "half, not a third" beside u_y; a red hand tag "not 20!" on the struck sum.

### 4. the angle shares the speed
> Now watch what the angle does. At zero degrees, like ball B last time, all twenty metres per second goes **across**, and none goes up. As the launcher tilts up, u y grows and u x **shrinks**. At forty-five degrees they're equal, about fourteen point one each. Keep going, and at ninety degrees it's all vertical, with nothing **across**. The launch speed never changes. The angle only decides how that speed is shared between the two directions.

Visual: clear change to the slider stage (simulation). The painted launcher (base and barrel layers, about 320 px wide, uniform scale; not an icon) stands at the left on the ground line and is the live control; its barrel carries the orange launch arrow, and the triangle drawn on that arrow is large in the centre with the orange hypotenuse fixed at 280 px (14 px per m s⁻¹); at the right two vertical bars, teal "u_x" and blue "u_y", to the same scale, and a readout panel updating every frame (52 px): "θ", teal "u_x", blue "u_y" and ink "u_x² + u_y² = 400". On "across" (first) the angle drops to 0°: the teal side is the whole 280 px "20.0", the blue side vanishes "0". On "shrinks" the barrel sweeps smoothly up (about 4 s for 0° to 90°) and the triangle, bars and readouts follow live (for example 15°: "19.3", "5.18"; 60°: "10.0", "17.3"; 75°: "5.18", "19.3"), while the check readout stays at 400; teal hand tag "less across" and blue hand tag "more up" write by the bars; brief pauses at 45° ("14.1" and "14.1", the triangle isosceles, sides ticked equal). On "across" (second) at 90° the teal side vanishes "0" and the blue side is "20.0". On "never changes" the orange hypotenuse pulses with an orange hand tag "u = 20 m s⁻¹ throughout" and an ink scribble ring round the "u_x² + u_y² = 400" readout; the barrel returns to 30°.

### 5. in the air: one part stays, one runs out
> Once the ball's in the air, the two components behave just as before. u x never changes, because there's still no horizontal **force**. But u y now points up, while gravity points down. Taking up as positive, a y is minus nine point eight, so the vertical velocity drops by nine point eight metres per second every **second**. Starting at ten, after one second it's down to just zero point two, and a moment later it **runs out**. That's the highest point.

Visual: camera pull back to the strobe stage (kit gap 1, 20 m s⁻¹ at 30°, 30 px per metre, strobe every 0.25 s, slow motion) with the ledger and clock on the right: teal "a_x = 0, v_x = u_x = 17.3 m s⁻¹"; blue "u_y = +10.0 m s⁻¹, a_y = −9.8 m s⁻²". On "force" teal arrows at each strobe image stay equal (17.3). On "second" blue arrows at the images shrink (10.0, 7.55, 5.10, 2.65, 0.20 m s⁻¹ at 0, 0.25, 0.5, 0.75, 1.0 s; author note d) and the ledger row "v_y = u_y + a_y t" writes with the clock ticking. On "runs out" the ball reaches the top at "t = 1.02 s", the blue arrow has shrunk to nothing, and the ball freezes there with a tag "highest point". Hand tags: teal "never changes" by the equal teal arrows, blue "−9.8 m s⁻¹ every second" by the shrinking blue arrows, with an ink pen ring on the clock at "1.02 s".

### 6. prediction: at the top (countdown, 3 seconds)
> So what's happening right at the top? What's the ball's velocity there, and what's its acceleration? Have a **think**.

Visual: the frozen ball at the top of its path; two empty boxes beside it "velocity at the top = ?" and "acceleration at the top = ?". On "think" the 3 s `Countdown` ring runs. No arrows at the ball.

### 7. the top: zero vertical velocity is not zero acceleration
> At the top, the vertical velocity is zero for an instant. But the ball is still moving, because its horizontal velocity is still seventeen point three metres per second. So its velocity at the peak isn't zero. It's **horizontal**. And the acceleration hasn't changed at all. Gravity never switches off, so it's still nine point eight metres per second squared, **downwards**. That's what turns the ball around. If the acceleration were zero at the top, the vertical velocity would stay at zero, and the ball would just keep going sideways at that **height**. Zero vertical velocity isn't zero acceleration.

Visual: camera push to the ball at the peak (new set-up; the path fills the frame behind it). On the first sentence the box fills "v_y = 0" (blue). On "horizontal" a teal arrow "17.3 m s⁻¹" draws at the ball and the velocity box completes "velocity = 17.3 m s⁻¹, horizontal"; a chip "velocity = 0 at the top" is crossed. On "downwards" a violet arrow "a = 9.8 m s⁻², down" draws at the ball and the acceleration box fills; a chip "acceleration = 0 at the top" is crossed. On "turns the ball around" the motion resumes briefly: blue arrows reappear below the ball pointing down and growing. On "height" a counterfactual ghost (dashed grey, labelled "if a = 0") runs straight sideways from the peak and fades, while the real orange path curves down. On the last sentence two framed tags side by side: blue "v_y = 0 (for an instant)" and violet "a_y = −9.8 m s⁻² (always)", with a violet hand tag "gravity never switches off". The crossed chips carry red hand tags "still moving" and "still accelerating".

### 8. worked example: time to the peak
> Here's how to use that. A ball is launched at twenty-five metres per second, at forty degrees above the horizontal. How long does it take to reach its highest point? Only the vertical column can tell us, so start there. Up is positive, so a y is minus nine point eight. u y is twenty-five sin forty, about sixteen point one metres per **second**. At the peak, v y is **zero**. So using v equals u plus a t, zero equals sixteen point zero seven minus nine point eight t, and t is about one point six four **seconds**. That's the time to the top, not the whole flight.

Visual: clear change to the calculation layout (site worked example 2). Stage small at the left: the launcher at 40°, the orange arrow "25 m s⁻¹", the path drawn only to its peak. Task strip: "How long does the ball take to reach its highest point?" Equation strip (blue): "v_y = u_y + a_y t". Givens: teal box "u_x = 25 cos 40° = 19.2 m s⁻¹" with a grey tag "not needed for the time"; blue box "u_y = 25 sin 40°", "a_y = −9.8 m s⁻² (up positive)", "v_y = 0 at the peak". On "second" the blue box row completes "u_y = 25 sin 40° = 16.07 m s⁻¹". On "zero" the "v_y = 0 at the peak" given glows and the stage ball is ringed at the top. `AlignedAlgebra`: "0 = 16.07 + (−9.8)t"; on "seconds" "t = 16.07 ÷ 9.8 = 1.64 s", written into the clock. "t = 1.64 s" is framed in a dark-ink box. On the last sentence a grey tag "time to the peak, not the total flight" and the falling half of the stage path draws faint and dashed. Rows 52 px; a blue hand tag "only u_y" with a pen arrow to the blue givens box.

### 9. two traps
> Two traps here. The first is putting the whole twenty-five metres per second into that equation. That gives two point five five seconds, which is wrong, because only the vertical component is fighting **gravity**. The second is an angle measured from the vertical. Forty degrees from the vertical is fifty degrees above the horizontal. Now the vertical side is the one next to the angle, so u y is twenty-five cos **forty**. Always check which side the angle is next to before you choose sin or cos.

Visual: the working from scene 8 dims to its result "t = 1.64 s". A red chip "t = 25 ÷ 9.8 = 2.55 s" writes and on "gravity" is crossed, the blue u_y side of a small triangle ringed (tag "only u_y slows to zero"). Clear change within the right column: a new triangle with the orange arrow "25 m s⁻¹" drawn with its angle arc "40°" measured from a dashed vertical reference line; on "fifty degrees" a second arc "50°" appears from the horizontal. On "forty" (last bold) the blue vertical side is underlined "next to the 40° angle" and the row "u_y = 25 cos 40° = 19.2 m s⁻¹ (= 25 sin 50°)" writes; the teal side "u_x = 25 sin 40° = 16.1 m s⁻¹". "u_y = 19.2 m s⁻¹" is framed; an ink hand tag "check which side it touches" with a pen arrow to the 40° arc; the crossed 2.55 s chip carries a red hand tag "whole speed: wrong".

### 10. memory aid: cos is close
> Here's a way to remember it: cos is close. The component close to the angle, the side right next to it, uses cos, and the other one uses sin. It works whichever way the angle is **measured**, as long as you check which side it's touching.

Visual: the two triangles from scenes 3 and 9 side by side: the 30° one with its angle on the horizontal (teal side close, "cos"), the 40°-from-vertical one with its angle on the vertical (blue side close, "cos"). On "measured" each close side glows with "cos" and each far side with "sin". The memory aid writes large in hand lettering inside a framed card above the triangles (teal "Cos", ink "is close.", 52 px), with the second line "the side touching the angle" (30 px). Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A ball is launched at ten point zero metres per second, at sixty degrees above the horizontal. Calculate the horizontal and vertical components of its initial velocity. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball is launched at 10.0 m s⁻¹ at an angle of 60° above the horizontal. Calculate the horizontal and vertical components of the ball's initial velocity." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no triangle).

### 12. feedback 1 (brief)
> The angle is measured from the horizontal, so the horizontal side is close to it. u x is ten cos sixty, five point zero zero metres per **second**, horizontally. u y is ten sin sixty, about eight point six six metres per second, **upwards**. It's a steep launch, so more goes up than across. Swapping them, with eight point six six across, is the slip to **avoid**.

Visual: card shrinks to the top; "60° above the horizontal" underlines. A triangle draws: orange "10.0 m s⁻¹", arc "60°" on the horizontal, teal side close to it. Rows: on "second" "u_x = 10.0 cos 60° = 5.00 m s⁻¹ (horizontal)"; on "upwards" "u_y = 10.0 sin 60° = 8.66 m s⁻¹ (up)". Rows 44 px; "5.00 m s⁻¹" and "8.66 m s⁻¹" framed. On "avoid" a chip "u_x = 8.66 m s⁻¹" fades in and is crossed (caption "cos is close: the horizontal side touches 60°"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A projectile is launched with a horizontal velocity component of eight point zero metres per second, and a vertical component of fourteen point seven metres per second upwards. Calculate the time it takes to reach its highest point, and state its velocity and its acceleration at that point. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A projectile is launched from level ground with initial velocity components of 8.0 m s⁻¹ horizontally and 14.7 m s⁻¹ vertically upwards. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the time taken to reach maximum height. (b) State the velocity and the acceleration of the projectile at maximum height." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> At the top, v y is zero, so zero equals fourteen point seven minus nine point eight t, and t is one point five zero **seconds**. The velocity there is eight point zero metres per second, **horizontally**, because the horizontal component never changes. The acceleration is still nine point eight metres per second squared, **downwards**. Saying the velocity or the acceleration is zero at the top is the classic **slip**.

Visual: card shrinks to the top; "maximum height" underlines. The ledger returns: blue "0 = 14.7 + (−9.8)t", on "seconds" "t = 14.7 ÷ 9.8 = 1.50 s". A small path to a peak draws with the ball at the top; on "horizontally" a teal arrow "8.0 m s⁻¹" at the ball and the row "(b) velocity: 8.0 m s⁻¹ horizontally"; on "downwards" a violet arrow "9.8 m s⁻² down" and the row "acceleration: 9.8 m s⁻² downwards". Rows 44 px; "1.50 s", "8.0 m s⁻¹ horizontally" and "9.8 m s⁻² downwards" framed. On "slip" a chip "v = 0 and a = 0 at the top" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So the launch angle splits the speed, u cos theta across and u sin theta up. The vertical part decides when the ball reaches the top, while the horizontal part just carries on. But that's only half the flight. How high does the ball get, how long is it in the air altogether, and how fast is it going when it lands? That's **next**.

Visual: board clears to the stage: the launcher at 50° on the level ground line (the scene 9 launch, 25 m s⁻¹, 50° above the horizontal), the ledger small at the top right with teal "u_x = 16.1 m s⁻¹" and blue "u_y = 19.2 m s⁻¹". On the second sentence the ball flies the rising half in slow motion with teal arrows constant and blue arrows shrinking, and stops at the peak, where its blue arrow is gone and its teal arrow remains. On "But that's only half" the falling half draws dashed and faint to the ground at the launch level. On "How high" a dashed vertical bracket from the ground to the peak gets "?"; on "altogether" a dashed bracket along the ground from launch to landing gets "t = ?"; on "lands" a dashed orange arrow outline at the landing point gets "v = ?". On "next" a chip writes "Next: height, flight time and landing velocity". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. θ above the horizontal: u_x = u cos θ, u_y = u sin θ.
2. Components combine by Pythagoras: u_x² + u_y² = u². Never add them.
3. θ from the vertical: the side touching θ gets cos, so u_y = u cos θ.
4. In flight: v_x = u_x; v_y = u_y + a_y t, with a_y = −9.8 m s⁻².
5. At the top: v_y = 0, v = u_x (horizontal), a = 9.8 m s⁻² down; t = u_y ÷ 9.8.

Memory aid (framed card under the notes, hand lettering, teal and ink as in scene 10): *Cos is close.* Second line in the card: *The side touching the angle gets cos.* Notes in the role colours, 32 px; about 320 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why cos for the horizontal: θ is between u and the horizontal, so the horizontal side is adjacent (2). Why 17.3 + 10 ≠ 20: perpendicular components combine by Pythagoras (3). Why the angle shares rather than changes the speed: the hypotenuse length is fixed while the sides resize (4). Why v_y runs out: a_y = −9.8 m s⁻² removes 9.8 m s⁻¹ each second (5). Why the ball still moves at the top: v_x is unchanged (7). Why the acceleration can't be zero at the top: the ball would never come down (7). Why use u_y for the time to the top: only the vertical component is brought to zero by gravity (8, 9).
- **Misconceptions addressed:** components share the speed in proportion to the angle (1, 3, crossed); components add as numbers (3, crossed); velocity is zero at the top (7, crossed; 14); acceleration is zero at the top (7, crossed; 14); using u instead of u_y (9, crossed); sin and cos fixed to vertical and horizontal regardless of where the angle is measured (9, 10); swapping the components (12, crossed).
- **One idea at a time:** the triangle and its reasons (2) before numbers (3); the sweep (4) after one case; the peak prediction (6) before its explanation (7); the time calculation (8) after the peak condition.
- **Video makes it easier:** the student sees the triangle's sides resize while the hypotenuse holds (4), sees the blue arrows shrink to nothing while the teal arrows hold (5), and sees the "if a = 0" ghost fly straight off sideways while the real ball turns down (7).
- **Response opportunity:** two 3 s predictions (1, 6) and two unseen HSC-style tasks with every condition visible (speed and angle "above the horizontal"; both components with directions; g; negligible air resistance), 10 s each; nothing answer-bearing. Feedback about 26 s and 28 s.
- **Avoided double teaching:** v01's columns, clock and a_y recalled in one sentence (5); trigonometric ratios recalled in one sentence (2).
- **Syllabus coverage:** `P5-IQ1-01` for angled launches (components resolved, assumptions carried from v01 and named in the ledger); `P5-IQ1-02` initial velocity and launch angle related through the components, with the time to the peak as the first step to time of flight.
- **Out of scope by design:** maximum height, total time, landing velocity (v03); range (v04); unequal heights (v05).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks).** "A ball is launched at 10.0 m s⁻¹ at an angle of 60° above the horizontal. Calculate the horizontal and vertical components of the ball's initial velocity."
Model answer: u_x = 10.0 cos 60° = 5.00 m s⁻¹ horizontally; u_y = 10.0 sin 60° = 8.66 m s⁻¹ vertically upwards. Classic mistake (crossed): u_x = 8.66 m s⁻¹ (components swapped).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks).** "A projectile is launched from level ground with initial velocity components of 8.0 m s⁻¹ horizontally and 14.7 m s⁻¹ vertically upwards. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the time taken to reach maximum height. (b) State the velocity and the acceleration of the projectile at maximum height."
Model answer: (a) Up positive: at maximum height v_y = 0, so 0 = 14.7 + (−9.8)t, t = 1.50 s. (b) Velocity 8.0 m s⁻¹ horizontally (v_y = 0, v_x unchanged); acceleration 9.8 m s⁻² vertically downwards (unchanged throughout the flight). Classic mistake (crossed): "velocity and acceleration are both zero at the top."

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example 1 (site) | 20 m s⁻¹ at 30°: u_x = 17.32 ≈ 17.3 m s⁻¹; u_y = 10.0 m s⁻¹; 17.3 + 10.0 = 27.3; √(17.32² + 10²) = 20 | 1, 2, 3, 4, 5, 7 |
| Sweep | 0°: 20.0, 0; 45°: 14.1, 14.1; 90°: 0, 20.0 (screen also 15°: 19.3, 5.18; 60°: 10.0, 17.3; 75°: 5.18, 19.3) | 4 |
| In flight (20 m s⁻¹, 30°) | v_y = 10.0, 7.55, 5.10, 2.65, 0.20 m s⁻¹ at 0, 0.25, 0.5, 0.75, 1.0 s; peak at 1.02 s | 5 |
| Worked example 2 (site) | 25 m s⁻¹ at 40°: u_y = 16.07 m s⁻¹; u_x = 19.15 ≈ 19.2 m s⁻¹ (not needed); t = 16.07/9.8 = 1.64 s | 8 |
| Trap 1 | 25/9.8 = 2.55 s (crossed) | 9 |
| Trap 2 | 40° from vertical = 50° above horizontal; u_y = 25 cos 40° = 19.15 ≈ 19.2 m s⁻¹; u_x = 25 sin 40° = 16.07 ≈ 16.1 m s⁻¹ | 9, 15 |
| A1 | 10.0 m s⁻¹ at 60°: u_x = 5.00, u_y = 8.66 m s⁻¹ | 11, 12 |
| A2 | u_x = 8.0, u_y = 14.7 m s⁻¹: t = 1.50 s; velocity 8.0 m s⁻¹ horizontal; acceleration 9.8 m s⁻² down | 13, 14 |
| Handoff | 25 m s⁻¹ at 50°: u_x = 16.1, u_y = 19.2 m s⁻¹ | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 20 cos 30° = 17.320508; 20 sin 30° = 10.000000; 17.320508² + 10² = 400.000; 17.3 + 10.0 = 27.3.
- Sweep: 20 cos 15° = 19.318517, 20 sin 15° = 5.176381; 20 cos 45° = 20 sin 45° = 14.142136; 20 cos 60° = 10.0, 20 sin 60° = 17.320508; 20 cos 75° = 5.176381, 20 sin 75° = 19.318517.
- v_y = 10 − 9.8t at t = 0.25, 0.5, 0.75, 1.0: 7.55, 5.10, 2.65, 0.20; peak t = 10/9.8 = 1.020408 s.
- 25 sin 40° = 16.069690; 25 cos 40° = 19.151111; 16.069690/9.8 = 1.639764 s; 25/9.8 = 2.551020 s.
- 25 sin 50° = 19.151111; 25 cos 50° = 16.069690.
- A1: 10.0 cos 60° = 5.000000; 10.0 sin 60° = 8.660254. A2: 14.7/9.8 = 1.500000.
- Vector scale: 14 px per m s⁻¹ (20 → 280 px; 17.32 → 242.5 px; 10 → 140 px; 14.14 → 198 px).

## Memory aid check

- **"Cos is close."** Written for this lesson (a common teaching phrase). Meaning, as said in scene 10: the component on the side next to (adjacent to) the given angle in the velocity triangle is u cos θ; the other is u sin θ. Assumptions checked (author note b): true by the definition of cosine for a right triangle whatever reference the angle is measured from; it does not say "horizontal uses cos". It helps a new case: an angle given from the vertical (scene 9), and later inclined-plane and force-resolution problems in Module 5 (torque, banked tracks). Introduced after the triangle reasoning (2) and the vertical-angle trap (9).
- **Considered, not used:** "SOH CAH TOA" (students already have it; it doesn't address which side is which here); "cos for x, sin for y" (wrong whenever the angle is from the vertical).

## Narration length estimate

Revision 2 count (6 Nov; by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " counted inside each scene and joined with a space, bold markers removed, total = sum of the scene strings): **6,132 characters**, 16 scenes; narration unchanged from Revision 1, whose stated 6,147 joined the scenes with spaces (scene sum 6,132). Characters per scene (1 to 16): 422, 577, 584, 433, 444, 114, 594, 554, 491, 234, 201, 353, 323, 405, 328, 75. At 13.3 characters per second the speech is about 461 s; add 6 s for the two 3 s prediction countdowns, about 6 s of settling for the slider sweep in scene 4 and the flights in scenes 5 and 15, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 50 s in all; about 83 s of holds and countdowns): **about 544 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's "That's what turns the ball around." (keep the motion); scene 9's last sentence; scene 4's last sentence.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a coded level ground line across the stage above the bottom 12% of the frame; the launcher plate (`y12p-launcher-base-v1.png` with `y12p-launcher-barrel-v1.png`) at the left with its barrel at 50° above the horizontal; the trajectory for 25 m s⁻¹ at 50° (equal x and y scales, 15 px per metre) with the rising half drawn solid orange from the barrel tip to the peak and the falling half dashed and faint down to the ground at the launch level. The steel ball (`phys-y11-steel-ball-v1.png`, 36 px) sits at the peak with one teal arrow "16.1 m s⁻¹" pointing horizontally (no blue arrow). Three dashed question marks: a vertical bracket from the ground to the peak "?", a bracket along the ground from launch to landing "t = ?", and a dashed orange arrow outline at the landing point "v = ?". The ledger small at the top right: teal "u_x = 16.1 m s⁻¹", blue "u_y = 19.2 m s⁻¹", the clock between them. Heading top-left unchanged ("How does launch angle set the two initial velocity components?"); chip "Next: height, flight time and landing velocity". v03 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v02` (route phys-y12-m5-v02). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v02` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v02` (root to confirm).

In order (16 scene headings): hook, launch-triangle, worked-components, angle-sweep, in-flight, predict-peak, peak, worked-time-to-peak, two-traps, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except predict-peak (`hold`: the learner decides the velocity and acceleration at the top during the 3 s countdown), attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 ends with a 3 s prediction countdown inside an `explain` scene. `motionTools`: launch triangle with live angle, component bars, strobe stage (v01 kit gap 1), ledger and clock (v01 kit gap 2), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`, `CameraStage` push and pull. Transitions: v01's final frame continues into scene 1 (camera continue; the bench clears to the launcher); 1 to 2 camera push into the arrow; 2 to 3 camera continue; 3 to 4 is a clear change to the launcher slider (Revision 2); 4 to 5 camera pull back to the stage; 5 to 6 camera continue; 6 to 7 camera push to the ball at the peak (the ball stays frozen at the top); 7 to 8 clear change to the calculation layout; 8 to 9 camera continue; 9 to 10 camera continue (the two triangles); attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook and predict-peak (3 s countdowns), attempt-1, attempt-2 (10 s countdown after the speech), key-notes (about 50 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v02-learning-review.md`, `science_check` = `checks/p-y12-m5-v02-physics-check.md`.

## Assets

Have (inspected 6 Nov; uniform scaling only, never stretched):
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): the ball, scenes 1, 5 to 8, 15.
- **Checked, not used:** `phys-y11-spring-launcher-v1.png` (a horizontal plunger on a bench; it has no barrel and cannot be angled, so it cannot show θ); `phys-y11-protractor-v1.png` (painted markings are context, not a measuring scale; the angle arc and its value are coded, pack section 5).

- `public/assets/physics/y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (1448 × 1086 each, RGBA; delivered in brief 187 and inspected 6 Nov on `assets/brief187-qa/launcher-rotations.jpg` at 0°, 30°, 50° and 90° on paper and dark backgrounds; pivot (410, 644), muzzle at 0° (1245, 644), ground line y = 905 in plate pixels): scenes 1, 4 (the live control, about 320 px wide), 5, 8, 15; also v03 to v07. Designer acceptance of the native size pending with root; never stretched.

Need (new plates, Codex): none (the launcher was this design's request and is delivered).

Coded: ground line, launch triangle, angle arcs, reference lines, component bars, strobe images, arrows, trajectory, ledger, clock, calculation strips, crossed chips, ghost path, attempt cards, countdowns, key notes board.

Kit gaps: v01's kit gaps 1 (strobe projectile stage, here with angled launches and shrinking v_y) and 2 (ledger and clock). One addition: **launch triangle with live angle** (extends `VelocityDecomposition` in `src/explainer/physics/projectile/components.tsx`: fixed hypotenuse length, teal and blue sides recomputed from θ, labels attached to sides, reference line selectable as horizontal or vertical, angle arc from the chosen reference).

## Codex asset brief (Year 12 Physics M5 v02; shared with v03 to v05)

Revision 2: delivered in brief 187 (`assets/brief187-manifest.json`); no repaint requested. The original brief is kept below as the record.

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v02.md`, route entry phys-y12-m5-v02. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-steel-ball-v1.png` and `phys-y11-spring-launcher-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, angle markings, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-launcher-base-v1.png` (1600 × 1200 px) and `y12p-launcher-barrel-v1.png` (same canvas, overlaying exactly): a school spring projectile launcher seen exactly side-on, standing on the ground. Base layer: a low, heavy grey-metal base plate with a vertical bracket on the left third of the canvas, the base's underside on a straight horizontal line. Barrel layer: a straight cylindrical launch barrel (dark grey, a slightly lighter muzzle ring, a small trigger cord loop at the rear end) mounted on a visible pivot bolt on the bracket, drawn pointing exactly horizontally to the right. The barrel will be rotated in code about the pivot to angles from 0° to 90°, so no part of the base may overlap the barrel's sweep above the pivot, and the barrel must look right when rotated. No protractor markings, no ball. Codex reports, in plate pixels: the pivot centre, the muzzle centre at 0°, the barrel length from pivot to muzzle, and the base's ground line.

Report inspection on the paper background and the dark board background at about 300 px wide, with the barrel layer rotated to 30°, 50° and 90° about the reported pivot. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: u_x = u cos θ and u_y = u sin θ for θ above the horizontal; u_y = u cos θ for θ from the vertical; components combine by Pythagoras; v_x constant; v_y falls by 9.8 m s⁻¹ each second with up positive; at the peak v_y = 0, the velocity equals u_x horizontally and the acceleration is 9.8 m s⁻² down; t_peak = u_y/g (author notes a to d).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition (angle "above the horizontal"; component directions; g; negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Projectile Launch Angle: Finding u cos θ and u sin θ | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson01.sa.html

A ball is launched at 20 m/s, 30° above the horizontal. Does a third of the speed go up? See why the horizontal component is u cos θ and the vertical component is u sin θ, why the two components don't add to 20, how the launch angle shares a fixed speed between across and up, and why at the top of its path a projectile still moves and still accelerates. Then find the time to the highest point. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the motion of projectiles by resolving the motion into horizontal and vertical components, making the following assumptions: a constant vertical acceleration due to gravity; zero air resistance"
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: two motions, one clock. Next: maximum height, flight time and landing velocity.

#HSCPhysics #Physics #ProjectileMotion #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (check that the triangle labels make "adjacent" and "opposite" visible before cos and sin are named; that the 3 s predictions are answerable; that worked example 2's grouped givens make clear why u_x is not needed), then the physics check and the Codex error check.
- The live angle sweep, the shrinking blue arrows and the counterfactual ghost carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (6 Nov 2026)

Brief 187 findings (`checks/p-y12-m5-v02-learning-review.md`, `checks/p-y12-m5-v02-science-check.md`): 0 blocker, 0 should fix, 0 optional. The reports ask to keep the third-of-an-angle prediction, the triangle before the sweep, the Pythagoras check, the frozen-peak prediction and the vertical-reference trap; all are kept. The optional zero-acceleration ghost stays. The final frame is unchanged, so the v03 join holds.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Scene 4 becomes a true slider on the painted launcher (about 320 px, not an icon) with live θ, u_x, u_y readouts and a constant check "u_x² + u_y² = 400" (Python: 20 cos θ and 20 sin θ at 15°, 45°, 60°, 75° as in "Numbers to verify"; the squares always sum to 400). It is a clear change, which breaks the scene 2 to 4 triangle stretch (about 120 s) into three set-ups.
- Scene 7 is a camera push to the ball at the peak, so the strobe stage holds for under 60 s.
- Hand tags and a pen mark in role colours in every teaching scene ("across?", "up?", "angle sits here", "at right angles: Pythagoras", "half, not a third", "less across", "more up", "never changes", "−9.8 m s⁻¹ every second", "gravity never switches off", "only u_y", "check which side it touches"); red hand tags on the crossed slips.
- Framed answers: 17.3 and 10.0 m s⁻¹ (3), the peak facts (7), 1.64 s (8), 19.2 m s⁻¹ (9), A1 and A2 answers (12, 14).
- Scene 10 and the notes: the memory aid is a framed card; key notes cut from four long items to five short bullets (about 320 characters); quiet notes hold 60 s to 50 s.
- Assets: the launcher plates moved from "Need" to "Have" (delivered in brief 187, inspected).
- Question cards already arrive with their full text; unchanged.

New plate requests: none.

Counts: 6,132 characters (narration unchanged; Revision 1 stated 6,147 by the joined convention); about 555 s to about 544 s.
