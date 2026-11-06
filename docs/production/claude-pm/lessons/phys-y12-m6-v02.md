# Year 12 Physics M6 V02: Charged particles fired between plates. Why is a charged particle's path between plates like a projectile? (design)

Status: Revision 2 (7 Nov 2026): brief 189 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,119 characters, 16 scenes, about 551 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates as `phys-y12-m6-v01.md`; projectile language and the two-motions-one-clock method from `phys-y12-m5-v01.md` and `phys-y12-m5-v05.md` (recalled, not re-taught). No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson02.sa.html`, SHA256 `b8e5d86f3143e7710d89382529af535765f6750d2469d6b16a47663924abe9f7` (recomputed 6 Nov; matches the route). Sections used: `set-frame-and-model`, `resolve-deflection`, `work-a-deflection-example`. Route entry: `phys-y12-m6-v02`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare constant field force with gravity, derive transverse displacement and exit velocity, then extend straight motion beyond the field. Keep plate length and gap visible." Next: "phys-y12-m6-v03: How does a potential difference set a particle speed?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the cathode ray tube is a new painted plate with coded beam, plates and screen marks; every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v01 (E = V/d, F = qE with sign, a = qE/m, gravity negligible for electrons); m5-v01 (independent components with one clock); m5-v05 (horizontal launch, y = ½at²); Newton's first law.

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ1-02`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-02`: "model qualitatively and quantitatively the trajectories of charged particles in electric fields and compare them with the trajectories of projectiles in a gravitational field"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v01's final frame (an electron at the entrance of the plates, moving right, with an upward force arrow; a cliff inset with a horizontal-launch parabola). Teaches: the two independent motions (constant v_x, constant a_y = qE/m from zero); the projectile comparison (same shape, y ∝ x²; differences in size, in dependence on q/m and in direction with sign); time between the plates t = L/v_x; deflection y = ½at² = qEL²/(2mv_x²) and the plate test (centre-line entry: compare with d/2); exit velocity components, speed and angle; straight motion after the plates (Newton's first law) to a screen, as in a cathode ray tube; how E, L, v and m change the deflection; a hitting case. Stops before the energy account of the speed gain (v03) and before magnetic deflection (v04).

## Decisions

- **Learner question (route wording, one grammar fix).** "Why is a charged particle's path between plates like a projectile?" (route: "Why is a charged-particle path between plates like a projectile?"). The answer, built in order: no force along the plates, so v_x is constant (2); a constant force across them, so a constant a = qE/m from zero (2); those are exactly a horizontal projectile's two motions, so the path is a parabola (2); but the acceleration's size, its dependence on q/m and its direction differ from g (3).
- **Main case (site hook numbers, not the site worked example).** Electron at 3.0 × 10⁷ m s⁻¹ into plates 5.0 cm long with E = 2.0 × 10⁴ V m⁻¹ (the site's hook and its review answer). I add a 2.0 cm gap (so V = 400 V) to make the plate test and the drawing exact. Deflection 4.89 mm, visible at true scale (about 90 px at 18 px per mm). The site worked example (20 V, 4.0 cm, 2.0 cm gap, 2.0 × 10⁷ m s⁻¹) deflects only 0.352 mm, which would need a stretched vertical scale and so hide the projectile shape. The site's attribution of the hook numbers to Thomson's 1897 tube is not used; the video calls it "an electron fired between plates" (author note b).
- **Derivations (route stop; route entry "Derive each newly introduced equation").** t = L/v_x from the horizontal motion only; y = ½at² from zero vertical speed; combined form y = qEL²/(2mv_x²) shown once (scene 8) to read the factors. v_y = at; v = √(v_x² + v_y²); θ = tan⁻¹(v_y/v_x).
- **After the plates (route stop "extend straight motion beyond the field").** No force, so a straight line along the exit velocity (Newton's first law). Screen 20 cm past the plates: extra rise v_y × (D/v_x) = 39.1 mm; total 44.0 mm. The backward extension of the exit line passes through the plates' midpoint (shown, narrated in one sentence; follows from y = ½aT² and slope aT/v_x). A painted cathode ray tube plate gives the real context (kit plan family `ph-electron-tube`, "raster-support").
- **Projectile comparison (site "Compare 6 marks").** Three differences kept: size (a/g ≈ 3.6 × 10¹⁴), dependence on q/m (every ball has g; particles differ), direction with sign (a proton curves down). Gravity always down; "no negative mass" is not narrated.
- **The speed gain (handoff).** Scene 6 notes that the exit speed (3.06 × 10⁷) exceeds the entry speed and holds it for v03, which explains it with energy (v03's scene 9 closes the loop with W = qEy).
- **Hitting a plate (site card 2 "Will it hit the plate?" and "Analyse 6 marks").** A third of the speed gives nine times the deflection (44.0 mm) against 10 mm of room; it hits the positive plate 2.38 cm along (t = √(2(d/2)/a), x = v_x t).
- **Memory aid.** "Same shape as a projectile: swap g for qE/m, and let the sign choose the direction." See "Memory aid check".
- **Attempts.** A1 (original): 2.5 × 10⁷ m s⁻¹, 6.0 cm, 3.0 cm, 150 V, centre-line entry: y = 2.53 mm < 15 mm; θ = 4.8°; crossed "tan⁻¹(y/L) = 2.4°". A2 (site "Compare 6 marks", shortened, original wording): two similarities, two differences between a proton in a field and a ball thrown horizontally; crossed "describing each separately".
- **Colour key (v01; root decision 1).** Field lines blue; velocity and its components teal (v_x) and blue-teal outline (v_y, dashed); forces amber; acceleration violet; plate length and gap navy brackets; screen marks ink.
- **Colour roles (Revision 2, fixed for the whole video).** As the colour key, plus: deflection y and the room bracket d/2 navy; time readouts and clocks ink; the exit angle θ teal (it belongs to the velocity); kinetic-energy bars orange (scene 15 only); framed answers in a dark-ink frame; crossed slips and slip tags red; hand-font tags take the colour of the quantity they mark. The projectile ghost is grey at full opacity with its own "different scale" tag.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4 to 6 and the feedback rows 52 px; framed "y = qEL²/(2mv_x²)" 60 px); live readouts (scene 8 and 9 sliders: E, L, v_x, t, y and the room) about 52 px; brackets and supporting lines 30 to 36 px; hand-font tags at least 30 px; question text 36 px, 30 px on the answer-side strip; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v01's painted high-voltage supply (`phys-y11-eht-supply-v1.png`) stays wired to the plates in scene 1, its display reading "400 V", so the opening keeps a real object on screen. The cathode ray tube plate remains requested for scene 7 (held by brief 189; see Assets for the fallback root must decide).
- **Simulation (Revision 2).** Core live control in scenes 8 and 9: the plate stage at full width with three sliders (field E by the supply dial, plate length L, entry speed v_x) and live readouts t, y and the room d/2 = 10 mm, plus an exits/hits flag (Python, main case 400 V, 2.0 cm gap: base y = 4.89 mm; E doubled 9.77 mm, exits; L doubled 19.5 mm, would exceed the room, so the path stops at the plate 7.15 cm along; v_x doubled 1.22 mm; v_x = 1.0 × 10⁷ m s⁻¹ hits 2.38 cm along). The path is always drawn only as far as the plates allow, so no learner-visible picture shows a deflection larger than the gap.
- **Stage changes (Revision 2).** Scenes 4 and 5 share the calculation layout (about 73 s); scene 6 cuts to a large velocity-triangle stage at the exit point, which breaks the Revision 1 run of about 109 s on one layout. Other set-ups run under about 75 s.
- **Projectile comparison scope (brief 189).** The size difference is stated for the fields used in this video (a ≫ g here); the general difference is that a = qE/m depends on the particle's charge-to-mass ratio and on E, while every ball has the same g.
- **Site sources used:** intro (CRT context), hook and review answer (main case), Think First (path shape, proton direction, plate length), vocabulary (trajectory, time of flight, deflection, independence), card 1 (parabolic path, component equations, electron curving up in a downward field), card 2 (t = L/v_x, y, v_y, v, θ, the plate test), card 3 (step order; numbers in author note e), card 4 (factors and the y formula), the model box (uniform field, gravity negligible, non-relativistic; v_y against t gradient), Activity 2 (CRT screen position), "Compare 6 marks" (scene 3, A2), "Analyse 6 marks" (scenes 5, 9). Not used: the worksheets; the general oblique-entry case (named in author note f only).
- **Site notes (for root to log if accepted):**
  1. Lesson 2 intro: "The same crossed-field deflection principle is used in cathode-ray oscilloscopes". An oscilloscope's tube deflects its beam with electric plates only, not crossed fields. Suggest "The same electric deflection is used in cathode-ray oscilloscopes".
  2. Lesson 2 hook and review: the numbers (5 cm region, 3.0 × 10⁷ m s⁻¹, 2.0 × 10⁴ V m⁻¹) are presented as Thomson's 1897 experiment, and the review says this "is the parabolic trajectory Thomson measured to determine e/m = 1.76 × 10¹¹ C/kg". Thomson's 1897 values for e/m were well below the modern 1.76 × 10¹¹ C kg⁻¹, and he used the crossed-field balance, not this single deflection. Suggest calling the numbers illustrative ("a Thomson-style tube") and dropping the claim that this trajectory gave 1.76 × 10¹¹ (science check to confirm the historical value).
  - Checked and correct (with e = 1.60 × 10⁻¹⁹ C, m_e = 9.11 × 10⁻³¹ kg as the site uses): worked example (1.76 × 10¹⁴ m s⁻², 2.0 ns, 0.352 mm, 3.52 × 10⁵ m s⁻¹, 1.0°); short-answer Q1 (2.67 ns, 5.0 mm), Q2 (0.61 mm), Q3 (1.10 mm, 1.76 × 10⁶ m s⁻¹, 2.5°); hook answer (3.5 × 10¹⁵ m s⁻², 1.67 ns, 4.9 mm).
- **Cause chain taught, in order:** (1) along the plates no force acts, so v_x is constant (2); (2) across the plates the uniform field gives a constant force, so a constant a = qE/m from zero vertical speed (2); (3) those two motions with one clock make a parabola, as for a horizontal projectile (2); (4) a is huge, depends on q/m and flips with the sign of q (3); (5) the time inside depends only on L and v_x (4); (6) y = ½at², compared with the room to the plate (5); (7) v_y = at, so the exit velocity tilts and its size grows (6); (8) after the plates no force acts, so the path is straight (7); (9) y ∝ E, L², 1/v², q/m (8); (10) slower means more time and a hit (9).
- **Entry knowledge:** v01; m5-v01 and m5-v05; Newton's first law.
- **Learner-visible vocabulary:** deflection (sideways displacement from the original line, 5); time of flight between the plates (4, screen tag); exit velocity (6).
- **Legacy logic ported:** none. `ElectricPlates` (`m6-plates`) is the starting point; its schematic path (a quadratic Bézier) is replaced by the exact y = ½a(x/v_x)² at true scale, per its limit "trajectory is schematic".
- **New explainer motion:** v01's **plate stage** (kit gap 1) extended with a **strobe trajectory mode** (kit gap 2: horizontal entry at a set v_x; strobe images at equal time steps; teal v_x and v_y arrows at each image; plate length L and gap d brackets always visible; optional ghost projectile with g in place of a on a shared axis with its own scale tag; straight continuation after the plates to a screen line; backward dashed extension of the exit line; a plate-hit stop with an impact mark); **tube overlay** (the CRT plate with the coded beam drawn over it); `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** No thrower: the ball leaves a coded launcher point on the cliff; no viewer at the screen.
- **Author notes (not learner copy):**
  (a) Gravity on the electron: a/g = 3.5174 × 10¹⁵ / 9.8 = 3.59 × 10¹⁴; neglected.
  (b) The main case (3.0 × 10⁷ m s⁻¹) is 0.1c; the classical model is used, as the site does (its model box: "non-relativistic speed").
  (c) The exit-line extension crosses the axis at x = L/2: y_exit − (L/2)(v_y/v_x) = ½aT² − ½L(aT/v_x) = 0.
  (d) Screen at D = 0.20 m past the plates: total = (L/2 + D)(v_y/v_x) = 0.225 × 0.19541 = 0.04397 m.
  (e) Site worked example values recalculated with the data sheet: a = 1.7587 × 10¹⁴ m s⁻², y = 0.352 mm, θ = 1.0°.
  (f) Oblique entry (site model box) is out of scope; the general component equations handle it.
  (g) Pronunciations: "v x", "v y"; "inverse tan"; "q E L squared over two m v squared".

- **Open decisions for root:**
  - **1. Main case (root).** The site hook's numbers replace the site worked example as the taught case, for a visible true-scale deflection; the 2.0 cm gap is added. Confirm, or use the worked example with a labelled ×20 vertical scale.
  - **2. New plate (root).** `y12p-crt-tube-v1.png` (asset brief below) for scene 7 and v03's electron gun. Fallback: a coded tube outline.
  - **3. Ghost projectile (learning review).** Scene 2 overlays a ghost horizontal-launch parabola from the cliff inset on the electron's path (flipped, with "different scale" tag). Confirm it helps rather than confuses the scales.

Main question: *Fire an electron sideways between two charged plates. It keeps moving across, while it's pushed steadily towards the positive plate, and its path curves like a ball thrown off a cliff, upside down. Why the same shape, and where does it come out?*
Entry knowledge: v01, m5-v01, m5-v05.
Stops after: components, parabola, comparison with projectiles, t, y, exit velocity, straight path after the plates, deflection factors, plate hit. No energy account (v03).
Handoff: v03, how a potential difference sets a particle's speed.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *v_x*, *v_y*, *a*, *E*, *L*, *d*, *t*, *y*, *θ*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (an upside-down projectile)
> Here's our electron again, at the entrance to the plates. This time it's fired in sideways, parallel to the plates, at three times ten to the seven metres per second. As it moves across, it's pushed steadily upwards, towards the positive plate. Its path **curves**, just like a ball thrown sideways off a cliff, only upside **down**. Is that a coincidence? Straight line, parabola or circle: what shape is the **path**?

Visual: opens on v01's final frame (see "Opening frame"). The electron moves right at constant speed into the gap; on "curves" its path bends up (strobe trajectory mode, true scale, 18 px per mm, plates 5.0 cm long and 2.0 cm apart, navy brackets "L = 5.0 cm", "d = 2.0 cm"). On "down" the cliff inset's parabola flips vertically and slides beside the electron's path, tag "same shape?". On "path" the 3 s `Countdown` runs beside chips "straight line", "parabola", "circle". Revision 2: the painted supply (`phys-y11-eht-supply-v1.png`, uniform scale, about 300 px tall) stays at the left with its leads to the plates, display "400 V" (52 px, navy). Hand tags: teal "steady across" under the v arrow, amber "steady push up" with a pen arrow to the force arrow, grey "upside-down cliff?" by the flipped parabola.

### 2. two motions, one clock
> Split the motion in two, the way we did for projectiles. Along the plates, there's no force, so the horizontal velocity stays **constant**. Across the plates, the force is q E, the same everywhere in the uniform field, so the electron has a constant acceleration, a equals q E over m, starting from zero vertical **speed**. One clock runs both motions. That's exactly a projectile, with q E over m in place of g, so the path is a **parabola**.

Visual: camera continue. Heading writes on: "Why is a charged particle's path between plates like a projectile?". The strobe images appear at equal time steps with a clock readout. On "constant" teal v_x arrows of equal length at every image and equal horizontal spacing ticks along the bottom plate. On "speed" violet "a" arrows of equal length point up at every image and dashed v_y arrows grow from zero; the vertical gaps between images grow 1, 3, 5, 7. On "parabola" the path traces solid, tag "y ∝ x²", and the flipped ghost parabola (tag "projectile, g: different scale") overlays it exactly in shape. Revision 2: teal hand tag "equal steps" over the bottom ticks; violet hand tag "1, 3, 5, 7" with a pen bracket on the growing vertical gaps; an ink scribble ring round the clock, tag "one clock".

### 3. same shape, different acceleration
> But there are three differences. The size. Here, a is about three and a half times ten to the fifteen metres per second squared, hundreds of trillions of times g, which is why we ignore gravity. The **mass**. Every ball falls with the same g, but the electric acceleration depends on charge and mass, so different particles follow different paths. And the direction. Gravity always pulls down, but the electric force flips with the sign of the charge, so a proton fired in at the same speed curves **downwards**, and bends far less.

Visual: camera pull to a three-row comparison table beside the stage, rows writing in as spoken: "size: a = qE/m ≈ 3.5 × 10¹⁵ m s⁻² ≫ g". On "mass" row 2 "g is the same for every ball; qE/m depends on the particle", with two balls of different sizes on identical dashed paths in a mini cliff panel. On "downwards" row 3 "direction: flips with the sign of q", and a proton "(+)" enters the plate stage on the same line, its path bending down, drawn dashed in full ink (its true deflection, 2.7 μm, is invisible; tag "proton: 1837 times less, drawn enlarged"). Revision 2: violet hand tag "≫ g in this field" with a pen ring round "3.5 × 10¹⁵"; ink hand tag "same g, every ball" in the cliff panel; amber hand tag "sign flips it" by the proton.

### 4. time between the plates
> Let's measure it. The plates are five centimetres long and two centimetres apart, with four hundred volts across them, so the field is two times ten to the four volts per metre. The electron enters on the centre line. How long is it between the plates? Only the horizontal motion decides that. Time equals length over horizontal speed, zero point zero five metres over three times ten to the seven, which is one point six seven times ten to the minus nine **seconds**. The sideways push doesn't change that time at **all**.

Visual: calculation layout, with the plate stage small at the right (brackets L and d visible throughout scenes 4 to 6). Task strip: "Electron enters on the centre line: find the time between the plates." Equation strip: "t = L/v_x". Givens grouped: "v_x = 3.0 × 10⁷ m s⁻¹", "L = 5.0 cm = 0.050 m", "d = 2.0 cm, V = 400 V → E = 2.0 × 10⁴ V m⁻¹". `AlignedAlgebra`: "t = 0.050 / 3.0 × 10⁷"; on "seconds" "= 1.67 × 10⁻⁹ s" framed. On "all" the strobe images' horizontal ticks highlight, tag "t from the horizontal motion only"; a chip "bigger push → longer inside" fades in and is crossed in red, red hand tag "only v_x and L set t". Revision 2: the plate stage at the right fills about 40% of the frame (not a thumbnail), with the L and d brackets in navy; navy hand tag "cm → m" with a pen ring round "0.050 m".

### 5. how far it's deflected
> Across the plates, it starts with zero vertical speed, so the deflection is y equals a half a t squared. The acceleration, q E over m, is three point five two times ten to the fifteen metres per second squared. Put in the time, and y is four point eight nine times ten to the minus three metres, just under five **millimetres**. Will it hit a plate? It entered on the centre line, so it has one centimetre of room. Five millimetres is less than ten, so it gets **out**.

Visual: camera continue. Equation strip adds "y = ½at², a = qE/m". `AlignedAlgebra`: "a = (1.602 × 10⁻¹⁹ × 2.0 × 10⁴)/(9.109 × 10⁻³¹) = 3.52 × 10¹⁵ m s⁻²", "y = ½ × 3.52 × 10¹⁵ × (1.67 × 10⁻⁹)²"; on "millimetres" "= 4.89 × 10⁻³ m (4.9 mm), up" framed. On "out" the stage's exit point gets a navy bracket "y = 4.9 mm" beside a bracket "d/2 = 10 mm", and a tick "4.9 mm < 10 mm: exits". Revision 2: violet hand tag "starts from zero up" with a pen arrow to "½at²"; navy hand tag "room = half the gap" by the d/2 bracket.

### 6. the exit velocity
> What's its velocity as it leaves? The horizontal part is still three times ten to the seven. The vertical part is a times t, five point eight six times ten to the six metres per **second**. Combine them with Pythagoras, and the speed is three point oh six times ten to the seven, a little faster than it went in. The angle above the horizontal is the inverse tan of v y over v x, about eleven **degrees**. Notice that the field has sped it **up**. Hold on to that, we'll need it next time.

Visual (Revision 2 stage change): clear change; the camera pushes into the exit point and a large velocity triangle fills the left two-thirds of the frame (v_x side about 600 px), with the plate stage as a strip along the top showing where the exit is. Teal v_x "3.0 × 10⁷", dashed v_y; on "second" it writes "v_y = at = 5.86 × 10⁶ m s⁻¹"; the resultant teal arrow "v = √(v_x² + v_y²) = 3.06 × 10⁷ m s⁻¹", framed. On "degrees" the angle arc "θ = tan⁻¹(v_y/v_x) = 11.1°", framed, teal hand tag "velocity's angle". On "up" two speed readouts side by side (52 px) "in: 3.00 × 10⁷", "out: 3.06 × 10⁷" with a pen ring round the "out" readout; a chip "same speed in and out" fades in and is crossed in red, and a "?" chip "why faster? (next video)".

### 7. after the plates: a straight line
> Once it leaves the plates, the force stops. With no force, Newton's first law says it moves in a straight **line**, along its exit direction. That's how an old cathode ray tube aimed its beam at the screen. With a screen twenty centimetres past the plates, the electron lands about four point four centimetres above the centre **line**. Stretch that straight line backwards, and it points back to the middle of the **plates**.

Visual: camera pull back to 4 px per mm. The beam continues straight from the exit point (no strobe acceleration arrows outside the plates). On "line" (first) a tag "no force: straight (Newton's first law)". The cathode ray tube plate (`y12p-crt-tube-v1.png`, scaled uniformly; held by brief 189, see Assets for the fallback) fades in behind the coded geometry, its deflection plates aligned with the coded plates and its screen 20 cm past them; on "line" (second) a dot glows on the screen with a navy bracket "4.4 cm" from the centre line, split into "4.9 mm (inside)" and "39 mm (after)". On "plates" a dashed backward extension of the straight path meets the axis at the plates' midpoint, tag "points back to L/2". Revision 2: "4.4 cm" framed; teal hand tag "no force: no curve" on the straight run, with a pen arrow along it; ink hand tag "most of it happens after" by the 39 mm part of the bracket.

### 8. what controls the deflection
> Put the steps together, and the deflection is q E L squared, over two m v squared. That shows what matters. A stronger field gives a bigger **push**. Longer plates give more time, and the deflection grows with the length squared, so doubling the length would give four times the **deflection**, and this electron would hit the plate. A faster electron spends less time inside, so doubling its speed gives a quarter of the **deflection**. And a heavier particle, like a proton, bends far less.

Visual (Revision 2, the core live control): clear change to the plate stage at full width (true scale, 18 px per mm), with the framed "y = qEL²/(2mv_x²)" (60 px; derived in one line from "y = ½(qE/m)(L/v_x)²") along the top. Three sliders under the stage: blue "E" (the supply dial), navy "L", teal "v_x"; a readout panel at the right updates every frame (52 px): "t", navy "y", navy "room d/2 = 10 mm" and a flag "exits" or "hits". Start: the main case (E = 2.0 × 10⁴ V m⁻¹, L = 5.0 cm, v_x = 3.0 × 10⁷ m s⁻¹: t = 1.67 ns, y = 4.89 mm, exits). On "push" the E slider doubles: the path bends twice as far, y ticks to 9.77 mm, still "exits" (just), chip "E × 2 → y × 2". On "deflection" (first) E returns and the L slider doubles the plates to 10 cm: t doubles to 3.33 ns, the path reaches the top plate 7.15 cm along and stops with an impact mark, the flag turns "hits"; a dashed grey ghost of the parabola continues past the plate, labelled "if there were room: y × 4 = 19.5 mm", and is crossed in red; chip "L × 2 → y × 4". On "deflection" (second) L returns and the v_x slider doubles: t halves, y ticks to 1.22 mm, the path flattens, chip "v × 2 → y ÷ 4". On "heavier" a chip "m larger → y smaller" with the proton's dashed path. Hand tags: blue "× 2", navy "× 4: time squared", teal "less time inside"; a pen ring round the "hits" flag.

### 9. when it hits a plate
> Now slow the electron down to one times ten to the seven metres per second, a **third** of the speed. It spends three times as long inside, so its deflection would be nine times bigger, about four point four centimetres. But there's only one centimetre of room. So it **hits** the positive plate, about two point four centimetres along. To check for a hit, compare the deflection with the room to the plate, half the gap for a centre-line **entry**.

Visual: camera continue on the live stage (Revision 2: the scene 8 sliders stay, all back at the main case). On "third" the v_x slider runs down to "1.0 × 10⁷ m s⁻¹" and a second electron enters; its strobe images are three times as close horizontally and its path bends sharply; the readouts tick (t = 5.0 ns inside if it could stay, y would be 44.0 mm). On "hits" it strikes the top plate with an impact mark, bracket "x = 2.4 cm" from the entrance, framed; the flag turns "hits"; a grey ghost of the unconstrained path continues to "y = 44 mm" off the plate and is crossed in red. On "entry" the test writes, framed: "hits if y ≥ d/2 (centre-line entry)". Hand tags: teal "3 × slower → 9 × deflection", navy "only 10 mm of room".

### 10. memory aid
> To remember it: same shape as a projectile, but swap g for q E over m, and let the charge's sign choose the **direction**. Along the plates, steady. Across the plates, speeding up. One clock for **both**.

Visual: board clears to a framed memory card (hand lettering, 52 px): "Swap g for qE/m. The sign chooses the direction." Under it "Projectile: a = g, down" and "Charge between plates: a = qE/m, direction set by the sign of q" (36 px), with "g → qE/m" ringed. On "direction" two parabolas about 200 px wide, one up (−) and one down (+). On "both" a clock icon links teal "v_x steady" and blue-teal "v_y growing". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An electron enters midway between two horizontal plates, moving parallel to them at two point five times ten to the seven metres per second. The plates are six point zero centimetres long and three point zero centimetres apart, with a hundred and fifty volts across them, and the top plate positive. Show that the electron leaves without hitting a plate, and find the angle of its velocity as it leaves. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An electron enters midway between two horizontal parallel plates, travelling parallel to the plates at 2.5 × 10⁷ m s⁻¹. The plates are 6.0 cm long and 3.0 cm apart, with a potential difference of 150 V and the top plate positive. (a) Show that the electron leaves the plates without striking either plate. (b) Calculate the angle between the electron's velocity and the horizontal as it leaves. (m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)" A small exam-style diagram: two plates with "6.0 cm" and "3.0 cm" labels and an arrow for the electron entering at mid-gap. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Here a is eight point seven nine times ten to the fourteen, and the electron is inside for two point four nanoseconds. So the deflection is two point five three millimetres, well under the fifteen millimetres of room, and it gets **out**. v y is a t, two point one one times ten to the six, so the angle is about four point eight **degrees**. The classic slip is using y over L, which gives two point **four**.

Visual: card shrinks to a full-text strip at the top (30 px). Answer side (Revision 2): a navy givens strip "v_x = 2.5 × 10⁷ m s⁻¹, L = 0.060 m, d = 0.030 m, V = 150 V, e, m_e" and, at the right, the card's diagram enlarged with the electron's path drawn to its exit point and the d/2 = 15 mm bracket. Rows (52 px): "E = 150/0.030 = 5.0 × 10³ V m⁻¹; a = 8.79 × 10¹⁴ m s⁻²"; "t = 0.060/2.5 × 10⁷ = 2.4 × 10⁻⁹ s"; on "out" "y = ½at² = 2.53 mm < d/2 = 15 mm" framed with a tick. On "degrees" "v_y = at = 2.11 × 10⁶ m s⁻¹; θ = tan⁻¹(2.11 × 10⁶ / 2.5 × 10⁷) = 4.8°" framed, teal hand tag "v_y over v_x". On "four" a chip "tan⁻¹(y/L) = 2.4°" fades in and is crossed in red (caption, Revision 2: "tan θ = v_y/v_x = 2y/L, not y/L"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A proton enters a uniform electric field at right angles to the field, and a cricket ball is thrown horizontally near Earth's surface. Give two similarities and two differences between their trajectories. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A proton enters a uniform electric field at right angles to the field. A cricket ball is thrown horizontally near Earth's surface. Compare the trajectories of the proton and the ball, giving two similarities and two differences. (4 marks)" Picture on the card (Revision 2): two small coded panels side by side, a proton entering between plates with no path drawn, and a coded ball at the edge of an exam-style cliff with no path drawn. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Similarities. Both move at constant velocity along the entry direction, with constant acceleration across it, so both paths are **parabolas**. Differences. The proton's acceleration, q E over m, depends on its charge, its mass and the field, while every ball has the same g. And the proton's direction depends on its charge's sign, while gravity always pulls **down**. The classic slip is describing each one without **comparing**.

Visual: card shrinks to a full-text strip at the top (30 px). Answer side (Revision 2): the two card panels now show their paths, the proton's parabola bending towards the negative plate and the ball's parabola falling, each about 300 px wide, under a two-column table "proton | ball" (36 px) that fills row by row: on "parabolas" "constant v along entry; constant a across; parabola | same" with a framed "same" bracket; then "a = qE/m, depends on q/m and E | a = g, same for all masses"; on "down" "direction set by the sign of q | always down", framed. On "comparing" a chip "Proton: parabola. Ball: falls." fades in and is crossed in red, red hand tag "compare in every point". Hold about 1 second.

### 15. next: where did the extra speed come from?
> So between the plates, the electron moved like a projectile, and it left a little faster than it went in. The field did work on it. That's our next question. How does a potential difference set a particle's **speed**?

Visual: clear change to the plate stage (true scale) with the main case's path; the exit speed readouts "in: 3.00 × 10⁷ m s⁻¹", "out: 3.06 × 10⁷ m s⁻¹" stay, and an orange "K" bar beside each, the exit bar slightly longer. On "speed" a chip writes: "Next: how does a potential difference set a particle's speed?". Revision 2: orange hand tag "more K out?" with a pen arrow to the longer bar (it fades before the hold, so the final frame below is unchanged). Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. v_x constant; a = qE/m constant across.
2. Path: a parabola, like a horizontal projectile.
3. t = L/v_x; y = ½at². Hits if y ≥ d/2.
4. Exit: v_y = at, tan θ = v_y/v_x; then straight.
5. Unlike g: a depends on q/m and E; sign sets direction.

Memory aid (framed card under the notes, hand lettering, 44 px): *Swap g for qE/m.* Second line in the card: *The sign chooses the direction.* Bullets 36 px in the role colours; no paragraphs. The quiet hold is about 60 s (at least 40 s).

## Teaching checks

- **Does it explain causes?** Why v_x is constant (no force along, 2); why a is constant (uniform E, 2); why a parabola (constant velocity plus constant acceleration from zero, 2); why the time depends on L and v_x only (4); why the exit is faster (field pushed partly along the motion; held for v03, 6); why a straight line after (no force, 7); why speed reduces deflection as 1/v² (less time, squared, 8); why the slow electron hits (more time, 9).
- **Misconceptions addressed:** the deflection changes the time inside (4); the electron keeps curving after the plates (7); using y/L for the exit angle (12, crossed); comparing without both objects in each point (14, crossed); a proton deflects as much as an electron (3, 8).
- **One idea at a time:** components (2), comparison (3), time (4), deflection (5), exit velocity (6), after the plates (7), factors (8), hit (9).
- **Video makes it easier:** strobe images with equal horizontal and growing vertical gaps (2); the projectile ghost matching the shape (2); the brackets L, d, y and d/2 (4, 5); the tube with the straight run to the screen (7); the slow electron hitting (9).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 30 s each.
- **Avoided double teaching:** m5-v01 components and m5-v05 horizontal launch recalled by name; v01's a = qE/m reused.
- **Syllabus coverage:** `P6-IQ1-02` modelled qualitatively (2, 3, 7, 8) and quantitatively (4 to 6, 9, A1), and compared with projectiles (2, 3, A2).
- **Out of scope by design:** the energy account of the speed gain (v03); oblique entry; relativistic speeds.

## Practice questions and model answers

**Attempt 1 (scene 11; original, 4 marks suggested).** "An electron enters midway between two horizontal parallel plates, travelling parallel to the plates at 2.5 × 10⁷ m s⁻¹. The plates are 6.0 cm long and 3.0 cm apart, with a potential difference of 150 V and the top plate positive. (a) Show that the electron leaves the plates without striking either plate. (b) Calculate the angle between the electron's velocity and the horizontal as it leaves. (m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)"
Model answer: (a) E = V/d = 150/0.030 = 5.0 × 10³ V m⁻¹; a = eE/m = 8.79 × 10¹⁴ m s⁻² (upwards); t = L/v_x = 0.060/2.5 × 10⁷ = 2.4 × 10⁻⁹ s; y = ½at² = 2.53 × 10⁻³ m. It entered midway, so it would need 1.5 × 10⁻² m to reach a plate; 2.53 mm < 15 mm, so it exits. (b) v_y = at = 2.11 × 10⁶ m s⁻¹; θ = tan⁻¹(2.11 × 10⁶ / 2.5 × 10⁷) = 4.8° above the horizontal. Classic mistake (crossed): tan⁻¹(y/L) = 2.4°.

**Attempt 2 (scene 13; original wording of the site's "Compare" task, 4 marks).** "A proton enters a uniform electric field at right angles to the field. A cricket ball is thrown horizontally near Earth's surface. Compare the trajectories of the proton and the ball, giving two similarities and two differences."
Model answer: Similarities: both have no force along the entry direction, so constant velocity that way; both have a constant force across it, so constant acceleration; so both follow parabolas (y ∝ x²). Differences: the proton's acceleration qE/m depends on its charge-to-mass ratio (and on the field), while the ball's acceleration is g regardless of mass (in fields like those in this video, qE/m is many orders of magnitude larger than g, so the proton's weight is negligible); the proton's deflection direction depends on the sign of its charge (towards the negative plate), while the ball always falls downwards. Classic mistake (crossed): describing each object separately.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; g = 9.8 m s⁻² | throughout |
| Main case | v_x = 3.0 × 10⁷ m s⁻¹; L = 0.050 m; d = 0.020 m; V = 400 V; E = 2.0 × 10⁴ V m⁻¹ | 1 to 7 |
| Acceleration | a = 3.517 × 10¹⁵ m s⁻² ("three point five two"); a/g = 3.59 × 10¹⁴ ("hundreds of trillions") | 3, 5 |
| Time | t = 1.667 × 10⁻⁹ s | 4 |
| Deflection | y = 4.885 × 10⁻³ m ("four point eight nine"); d/2 = 10 mm | 5 |
| Exit | v_y = 5.862 × 10⁶ m s⁻¹; v = 3.057 × 10⁷ m s⁻¹ ("three point oh six"); θ = 11.06° ("about eleven") | 6 |
| After the plates | D = 0.20 m; extra 39.08 mm ("thirty-nine"); total 43.97 mm ("four point four centimetres") | 7 |
| Proton | y = 2.66 × 10⁻⁶ m (screen tag only); ratio 1836.6 | 3 |
| Factors | 2v: y = 1.22 mm (a quarter) | 8 |
| Slow electron | v_x = 1.0 × 10⁷ m s⁻¹: y would be 43.97 mm; hits at t = 2.385 × 10⁻⁹ s, x = 2.38 cm ("two point four") | 9 |
| A1 | E = 5,000 V m⁻¹; a = 8.794 × 10¹⁴; t = 2.4 × 10⁻⁹ s; y = 2.533 mm; v_y = 2.110 × 10⁶; θ = 4.83° ("four point eight"); slip tan⁻¹(y/L) = 2.42° | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- a = 1.602 × 10⁻¹⁹ × 2.0 × 10⁴ / 9.109 × 10⁻³¹ = 3.51740 × 10¹⁵; t = 0.05/3.0 × 10⁷ = 1.66667 × 10⁻⁹; y = ½at² = 4.88528 × 10⁻³ m; formula qEL²/(2mv²) gives the same.
- v_y = 5.86233 × 10⁶; v = 3.05674 × 10⁷; θ = 11.057°.
- D = 0.20: extra = 5.86233 × 10⁶ × 0.20 / 3.0 × 10⁷ = 3.90822 × 10⁻² m; total 4.39675 × 10⁻² m; (L/2 + D) v_y/v_x gives the same.
- Proton y = 2.65989 × 10⁻⁶ m; ratio 1,836.65.
- 2v_x: y = 1.22132 × 10⁻³ m.
- v_x = 1.0 × 10⁷: y = 4.39675 × 10⁻² m; t_hit = √(0.020/3.51740 × 10¹⁵) = 2.38454 × 10⁻⁹ s; x_hit = 2.38454 × 10⁻² m.
- A1: a = 8.79350 × 10¹⁴; y = 2.53253 × 10⁻³ m; v_y = 2.11044 × 10⁶; θ = 4.825°; tan⁻¹(y/L) = 2.417°.
- Site checks (site constants 1.60 × 10⁻¹⁹ C, 9.11 × 10⁻³¹ kg): hook y = 4.879 × 10⁻³ m; worked example y = 0.352 mm; SA1 5.0 mm; SA2 0.613 mm; SA3 1.10 mm, 2.52°.

## Memory aid check

- **"Swap g for qE/m. The sign chooses the direction."** From the site's card 1 ("Gravity is replaced by electric acceleration a = qE/m; the direction of a depends on the sign of the charge") and the "Compare 6 marks" answer. Meaning, as said in scene 10: use the horizontal-launch projectile model with the electric acceleration. Assumptions checked: uniform field; entry at right angles to E (horizontal entry between horizontal plates); gravity negligible; non-relativistic speed; only inside the plates (straight line after, scene 7). Helps A1 and A2. Introduced after scenes 2 to 9.

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " inside each scene, joined with a space, bold markers removed; total = sum of the scene strings): **6,119 characters**, 16 scenes (Revision 1 stated 6,067, which included the 15 joins; its scene sum was 6,052). Characters per scene (1 to 16): 407, 431, 524, 515, 461, 477, 414, 480, 437, 196, 436, 398, 236, 419, 213, 75. At 13.3 characters per second the speech is about 460 s; add 3 s for the prediction countdown, about 3 s for the strobe runs in scenes 1, 2 and 9, about 2 s for the pull-back in scene 7, about 3 s for the scene 8 slider sweeps to settle, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 91 s of holds and countdowns; the notes hold is about 60 s in all): **about 551 s**, inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's proton clause; scene 7's backward-extension sentence.

## Opening frame

v01's final frame (`phys-y12-m6-v01.md`, "Final frame"): paper background; the plate stage across the centre (2.0 cm gap on the drawing scale, top row "+", bottom row "−", blue field lines pointing down); an electron "(−)" at the left entrance at mid-gap with a teal "v" arrow pointing right and a faint amber "F" arrow pointing up; at the left a small inset of an exam-style cliff with a dashed horizontal-launch parabola; heading "How does the voltage between parallel plates set a charged particle's acceleration?"; chip "Next: why is a charged particle's path between plates like a projectile?". Scene 1 sets the plate length bracket (5.0 cm) and starts the electron moving; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 15): paper background; the plate stage (true scale, plates 5.0 cm long and 2.0 cm apart, top "+", bottom "−", blue field lines down) with the main case's curved path inside the plates and its straight continuation a short way past the exit; speed readouts "in: 3.00 × 10⁷ m s⁻¹" at the entrance and "out: 3.06 × 10⁷ m s⁻¹" at the exit, each with an orange "K" bar, the exit bar slightly longer; heading "Why is a charged particle's path between plates like a projectile?"; chip "Next: how does a potential difference set a particle's speed?". v03 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v02` (route phys-y12-m6-v02). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v02`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v02` (root to confirm).

In order (16 scene headings): hook, two-motions, comparison, time-inside, deflection, exit-velocity, after-plates, factors, plate-hit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: plate stage (v01 kit gap 1) with strobe trajectory mode (kit gap 2), tube overlay, `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v01's final frame continues into scene 1 (camera continue); 1 to 2 camera continue; 2 to 3 camera pull; 3 to 4 clear change to the calculation layout (stage kept small); 4 to 5 to 6 camera continue; 6 to 7 camera pull back; 7 to 8 clear change; 8 to 9 camera change; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v02-learning-review.md`, `checks/p-y12-m6-v02-science-check.md`.

## Assets

Have (inspected 6 Nov; scaled uniformly only): none used from earlier runs (the cliff inset is coded exam style, as m5-v05).

Have (Revision 2, inspected 7 Nov; scaled uniformly only):
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, bench supply with dial and blank display): scene 1, as in v01.

Need (new plates):
- `y12p-crt-tube-v1.png`: scene 7 (and v03 scenes 1 and 5, v04 scene 1). **Held after brief 189** (three attempts failed native resolution and exact geometry). Brief 189 permits a coded-outline fallback: a side-on tube drawn in ink line art (glass envelope outline with a soft grey fill, gun cylinders, one plate pair, screen face with a phosphor tint) at the same anchor geometry as the brief below. Root decides whether to accept that fallback for this lesson or to retry the plate; under the build gate a design-requested plate replaced by a coded stand-in blocks render unless root records the fallback as the design.

Coded: plates, field lines, brackets, strobe images, components, paths, the screen dot, the backward extension, tables, chips, cards, countdowns, notes board.

Kit gaps: 2. **Strobe trajectory mode** for the plate stage (horizontal entry at a set v_x; exact y = ½a(x/v_x)² at true scale; strobe images with v_x and v_y arrows; L and d brackets fixed; ghost projectile overlay with its own scale tag; straight continuation after the plates to a screen; backward extension; plate-hit stop). Shared with v03 (scene 8) and v06.

## Codex asset brief (Year 12 Physics M6 v02)

One new plate, painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, no text, no labels, no glow or beam), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, delivered with a JSON sidecar of anchor points:

1. **`y12p-crt-tube-v1.png`**: a cathode ray tube seen exactly side-on: a long clear glass envelope, narrow neck at the left widening to a flat circular screen face at the right (screen seen edge-on, a pale phosphor coating on its inner face), an electron gun assembly inside the neck (heater, cathode cylinder and two short anode cylinders, metal grey), followed by one pair of flat horizontal deflection plates (metal, parallel, about twice as long as their gap) centred on the tube axis, with two thin wires from the plates to pins in the tube base at the far left. No beam, no glowing spot, no second (vertical) plate pair, no stand, no hands. Sidecar anchors: gun exit point on the axis; left and right ends of the top and bottom deflection plates; centre of the screen's inner face; the axis line. The coded beam, field lines and brackets are drawn over it, so the deflection plates must be truly parallel and horizontal.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: constant v_x; a = qE/m constant from zero vertical speed; parabola; the three differences from projectiles; t = L/v_x independent of the deflection; y = ½at²; the d/2 test for centre-line entry; v_y = at, v and θ; straight path after the plates; the backward extension through L/2; y = qEL²/(2mv²) and its factors; the slow-electron hit.
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Charged Particles in Electric Fields: Why the Path Is a Parabola | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson02.sa.html

Fire an electron sideways between charged plates and it curves like a ball thrown off a cliff, upside down. Split the motion into two parts with one clock, swap g for qE/m, and calculate the time between the plates, the deflection, the exit velocity and where the beam lands on a screen. See how field, plate length, speed and mass change the deflection, and when the particle hits a plate. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"model qualitatively and quantitatively the trajectories of charged particles in electric fields and compare them with the trajectories of projectiles in a gravitational field"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: how a potential difference sets a particle's speed.

#HSCPhysics #Physics #ElectricField #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the projectile comparison land for a student who has not seen our Module 5 videos; is scene 8's combined formula one step too many), then the physics check and the Codex error check.
- Judge the strobe images, the projectile ghost and the pull-back to the screen at playback speed.

## Revision 2 (7 Nov 2026)

Brief 189 findings (`checks/p-y12-m6-v02-learning-review.md`, `checks/p-y12-m6-v02-science-check.md`): 0 blocker, 3 should fix, 0 optional.
- **Should fix, S8 (doubled plate length predicts 19.54 mm against 10 mm of room).** Resolved: the narration now says doubling the length "would give four times the deflection, and this electron would hit the plate". On the live stage the path stops at the top plate 7.15 cm along (Python: t_hit = √(d/a) = 2.385 ns, x = 3.0 × 10⁷ × 2.385 × 10⁻⁹ = 7.15 cm), the flag reads "hits", and the continued parabola is a dashed grey ghost labelled "if there were room: y × 4 = 19.5 mm" and crossed. y ∝ L² and the scene 9 collision lesson are kept. Scene 8 +44 characters.
- **Should fix, S12 caption ("twice the average").** Resolved: the crossed chip's caption is now "tan θ = v_y/v_x = 2y/L, not y/L" (tan θ_exit = 2 tan θ_chord). The rounded 4.8° and 2.4° are unchanged (Python 4.825° and 2.417°).
- **Should fix, S14 and notes (unconditional a ≫ g).** Resolved: scene 14 now says the proton's acceleration "depends on its charge, its mass and the field, while every ball has the same g"; the table row reads "depends on q/m and E"; the model answer limits "many orders of magnitude larger than g" to fields like those in the video; key note 5 reads "Unlike g: a depends on q/m and E; sign sets direction"; Decisions add "Projectile comparison scope". Scene 3's "hundreds of trillions of times g" is for the stated 2.0 × 10⁴ V m⁻¹ field and stays, with the tag "≫ g in this field". Scene 14 +23 characters.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation", "Stage changes" and "Projectile comparison scope".
- Scene 1 anchor: v01's painted supply (`phys-y11-eht-supply-v1.png`, inspected 7 Nov) stays wired to the plates with "400 V" on its display. The opening frame is v01's Revision 2 final frame, which is unchanged.
- Core live control (scenes 8 and 9): E, L and v_x sliders on the true-scale plate stage with live t, y, room and exits/hits readouts; the old static factors board is replaced. Values recalculated in Python (Decisions, "Simulation").
- Stage change: scene 6 cuts to a large velocity-triangle stage, breaking the Revision 1 run of about 109 s on the scenes 4 to 6 calculation layout; the scene 4 to 5 plate stage fills about 40% of the frame.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 9 and 15), for example "steady across", "steady push up", "equal steps", "1, 3, 5, 7", "one clock", "≫ g in this field", "sign flips it", "only v_x and L set t", "starts from zero up", "room = half the gap", "velocity's angle", "no force: no curve", "× 4: time squared", "3 × slower → 9 × deflection".
- Framed answers: t (4), y (5), v and θ (6), 4.4 cm (7), the y formula and the hit point (8, 9), every feedback result. New crossed slips: "bigger push → longer inside" (4), "same speed in and out" (6), the 19.5 mm ghost (8).
- Scene 3's proton path is drawn dashed in full ink, not faint.
- Question cards: scene 13's card gains a picture (proton between plates and a ball at a cliff edge, no paths); feedback scenes 12 and 14 keep a full-text strip with a navy givens strip and an answer-side picture (the enlarged A1 diagram with its path; the two paths side by side).
- Scene 10: the memory aid becomes a framed card.
- Key notes: four long items (about 480 characters) cut to five short bullets (about 210 characters) with the framed memory card; quiet hold about 60 s.
- Type sizes stated. Review evidence path corrected to the science-check file.

New plate requests: none new. `y12p-crt-tube-v1.png` stays requested and held; the coded-outline fallback is specified under Assets for root to accept or reject.

Counts: 6,067 stated (joined; 6,052 scene sum) to 6,119 characters (scene sum); about 544 s to about 551 s.
