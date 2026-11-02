# Year 11 Physics FA1 V28 (Physics 2025, Year 11, Focus Area 1): When only gravity does work, why does kinetic plus potential energy stay the same? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-v28`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (the steel ball as a pendulum bob on v21's stand and boss, the v12 sledge, the v12 box, v21's ramp kit, v24's padded stop; see Assets).

Narration 5,658 characters, 16 scenes, about 525 s (8.8 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-eighth video in playlist order of the Year 11 Physics (2025) Focus Area 1 route and the last of three energy videos. Templates: `phys-y11-fa1-v22.md` and `phys-y11-fa1-v23.md` (section structure, calculation layout, house conventions); `phys-y11-fa1-v26.md` and `phys-y11-fa1-v27.md` (Revision 1, written just before this one: energy bars and colour key; v27's scene 15 frame is this video's first frame). Pre-design pack: none exists; the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson26.sa.html` (orient and predict, intentions and key terms, the law and its condition, solving problems with energy conservation with `we-1`, apply, when friction acts, independent practice, retrieve), and the site memory hook for lesson 26. Route entry: `phys-y11-fa1-v28` in `../../phys-y11-video-route.json` (status "proposed"; placeholder question). Route start: "Start with Conservation of Mechanical Energy. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply conservation of mechanical energy? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa1-v29: How can I explain and apply momentum and impulse?" (not yet designed; the handoff chip names the topic, root aligns the wording when v29's question is set).

Owner rules applied: as v26 and v27 (2025 syllabus only; no people, hands or faces: the site's skateboarder and child are replaced by a pendulum and an empty sledge; the pendulum is released by a coded release pin; objects painted at native aspect, diagrams, bars and graphs coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v26 and v27 recalled in a sentence each).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Momentum and energy"; local ledger IDs with NESA content-system codenames), quoted from the route JSON `syllabusActions` in linear form:

- P25-FA1-G5-02 `ci778e4712`: "State the conditions under which total mechanical energy is conserved"
- P25-FA1-G5-06 `ci7fd8d698`: "Apply the law of conservation of mechanical energy and use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems"
- P25-FA1-G5-07 `cie3b5703f`: "Analyse energy transformations and calculate the work done when an object moves within a uniform gravitational field, including changes in gravitational potential energy due to height and identifying the forces responsible for doing work"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v27's handoff (the rock just above the foot of the cliff, U drained, KE full, "784 J" on both, the bracket "U + KE: always the same?" and the faint "friction?" chip); why the total stays the same: W_net = ΔKE (v26) and, for gravity, W = ΔU done against it (v27's lift) so gravity's own work changes U by the same amount with the opposite sign; if gravity is the only force doing work, ΔKE + ΔU = 0 (`ci7fd8d698`); the pendulum: the tension does no work (always across the motion); the conditions: only gravity (a conservative force) does work, while forces that do no work may still act (`ci778e4712`); KE_i + U_i = KE_f + U_f solved for a smooth slope (site `we-1`, as a sledge), independent of mass and slope shape; with friction: gravity's work, friction's work and the normal force's zero work identified, the "missing" mechanical energy found as heat, total energy conserved, checked with W_net = ΔKE (`cie3b5703f`). Stops at the energy balance with friction. Not taught: momentum and impulse (v29); springs and elastic potential energy (not in this group); power and efficiency (not in this group); non-uniform fields and orbits (Year 12).

## Decisions

- **Learner question (route placeholder rewritten; root to record).** "When only gravity does work, why does kinetic plus potential energy stay the same?" The answer, built in order: the rock's equal joules invite the question (1); W_net = ΔKE, and gravity's work changes U by the same amount with the opposite sign, so if gravity is the only force doing work, every joule U loses, KE gains (2); a pendulum returns to its height because the tension, always across the motion, does no work (3); the law and its condition: forces may act if they do no work (4); used to find a speed (5); slope shape doesn't matter because the normal force does no work (6, 7); with friction, mechanical energy falls by friction's work and becomes heat, and each force's work is named (8, 9).
- **The hook (site warm-up).** The site's pendulum: "released from rest at the side, ignoring air resistance, does it rise higher, lower, or exactly to the same height?" 3 s prediction; answered in scene 3 (the same height), with the string's zero work as the reason that is easy to miss. The site's skateboarder hook (a person) is not used; its idea ("almost the same height: where does the 'almost' come from?") is scene 3's last sentence.
- **The cause made visible (owner quality bar).** (2) The pendulum swings; v26's `EnergyBars` show green U and blue KE trading, with a dashed ink "total" outline that never moves; gravity's work arrow (amber weight with the grey displacement along the arc) is shown with the sign chip "+" on the way down and "−" on the way up. (3) The tension arrow and the velocity arrow on the bob stay at a right angle throughout the swing (a small right-angle mark rides with them); a faint dotted line at the release height catches the bob on the far side. (6, 7) Two smooth slopes of the same height race a sledge each from one clock: the gentle one arrives later, both speed readouts end at 7.0 m s⁻¹; the normal force arrows stay perpendicular to the motion with "W = 0" chips. (8, 9) On the rough ramp the box's U bar drains 58.8 J while the KE bar fills only to 36 J and a warm-grey heat bar fills the gap; then the dashed total outline (U + KE + heat) holds still while a second "mechanical" outline (U + KE) sinks.
- **Derivation (why it stays constant; syllabus `ci7fd8d698` form).** On screen, one row per cue: "W_net = ΔKE (v26)"; "lifting at steady speed: W = ΔU (v27)"; "so gravity's work: W_g = −ΔU"; "only gravity does work: ΔKE = W_g = −ΔU"; "ΔKE + ΔU = 0"; boxed "KE + U = constant (mechanical energy)". The syllabus's "W = ΔKE" and "W = ΔU" are both written on screen in that form.
- **The conditions (syllabus `ci778e4712`; site card 1, with the key-terms wording corrected).** "Total mechanical energy is conserved when only conservative forces, such as gravity, do work. Other forces may act if they do no work (tension in a pendulum string; the normal force from a smooth surface). If friction, air resistance or a push does work, the total changes." The site's key-terms line "when only conservative forces act" is too strict (site error 2).
- **Worked example (site `we-1`, unchanged numbers; precision stated).** The site's 30 kg child on a smooth 2.5 m slide becomes a 30 kg sledge on a smooth, icy 2.5 m slope (no person): U at the top 735 J; v = √(2gh) = √49 = 7.0 m s⁻¹ (two figures); the mass cancels. Screen shows "735 J" in the bars; the narration uses the symbolic route, as the site does.
- **Second prediction (3 s, scene 6; site Q2's remark made into a race).** "Two smooth slopes, the same 2.5 m high, one steep and one long and gentle: which gives the bigger speed at the bottom?" Neither: both 7.0 m s⁻¹; the gentle one takes longer (60° slope 0.82 s; 10° slope 4.1 s; author note d).
- **Friction case (site activity 1 and Q3, unchanged numbers; precision stated).** A 2.0 kg box slides from rest down a rough ramp 3.0 m high and reaches the bottom at 6.0 m s⁻¹ (the site's statement plus "slides from rest", per the logged L22 condition): frictionless speed 7.7 m s⁻¹; ΔU = −58.8 J; KE = 36 J; heat 22.8 J ≈ 23 J (two figures); gravity's work +58.8 J, friction's −22.8 J, the normal force's 0; check W_net = 58.8 − 22.8 = 36 J = ΔKE. Total energy conserved; mechanical energy not.
- **Attempts (original, HSC style).** (A1) A 0.400 kg block released from rest at A on a smooth curved track 2.40 m above the floor; B is 0.900 m above the floor: v_B = √(2 × 9.80 × 1.50) = 5.42 m s⁻¹. Crossed: "Δh = 2.40 m, v = 6.86 m s⁻¹" (height above the floor used as the drop). (A2) A 15.0 kg crate slides from rest down a rough ramp, dropping 1.20 m, and reaches the bottom at 3.50 m s⁻¹: W_g = 176 J; KE = 91.9 J; heat 84.5 J; the normal force does no work (perpendicular to the displacement). Crossed: "KE at the bottom = 176 J" (conservation assumed on a rough ramp). Neither card shows the answer.
- **Mistake scene:** none separate. "The pendulum could rise higher" (1, 3); "the string does work on the bob" (3); "mechanical energy is conserved whenever only gravity acts" vs "does work" (4); "a steeper slope gives a faster finish" (6, 7); "friction destroys energy" (9, memory aid); "use conservation on a rough ramp" (A2 crossed); "the height above the floor is the drop" (A1 crossed).
- **Memory aid:** "Gravity swaps, friction leaks." (see "Memory aid check"; the site hook is listed as considered).
- **Handoff (route next).** The rough ramp with the box at its foot sliding toward v24's padded stop, its bars (U 0, KE 36 J, heat 22.8 J); a chip "how hard does it stop?"; chip "Next: momentum and impulse" (root replaces this with v29's question when it is set). This is the frame v29 opens on.
- **Site sources used:** warm-up (the pendulum: the hook); key terms (mechanical energy, conservation, energy transformation, dissipation; conservation's wording corrected); misconceptions 1 and 2 (scenes 9, 4); card 1 (the law and its condition: scenes 2 to 4); card 2 and `we-1` (scene 5, as a sledge); quick check (5.0 m drop, 9.9 m s⁻¹: author note h, not voiced); activity 1 (scene 8: the 2.0 kg, 3.0 m, 6.0 m s⁻¹ case); the odd-one-out (scene 4's condition: "at rest at the start" is not a condition, author note i); card 3 (when friction acts: scenes 8, 9); the match task (ball thrown up: the transformations, author note i); Q2's remark (the ramp angle doesn't appear: scenes 6, 7); Q3 (the same numbers as activity 1: scenes 8, 9); the site memory hook (considered). Not used: the skateboarder hook (a person); Q1 (a rolling ball: site error 1).
- **Site corrections (quoted from site lesson 26, read 2 Nov; for `../site-corrections-phys-y11.md`):**
  1. Short-answer Q1: "A $0.20\ \text{kg}$ ball is released from rest at the top of a curved ramp $1.5\ \text{m}$ high. It reaches the bottom moving at $4.0\ \text{m s}^{-1}$ ... (a) calculate the speed expected if the ramp were frictionless; (b) calculate the mechanical energy dissipated by friction". A ball that rolls without slipping stores part of its kinetic energy as rotation, so √(2gh) is not its frictionless speed and the 1.3 J shortfall is not all dissipated by friction. Suggest a block that slides, or "a ball that slides without rolling".
  2. Key terms, conservation of mechanical energy: "When only conservative forces act, $KE + U$ stays constant". Forces that do no work may act (the tension in a pendulum string, the normal force on a smooth surface); the card itself correctly says "do work". Suggest: "When only conservative forces do work, KE + U stays constant."
  3. Dot point line under Q2: "Apply the law of conservation of mechanical energy and use KE and U to solve problems". The 2025 syllabus point reads "... use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems". Suggest quoting it verbatim.
  4. Precision (not an arithmetic error): activity 1 and Q3 report "22.8 J" and Q3 "58.8 J" from two-figure data (2.0 kg, 3.0 m, 6.0 m s⁻¹); report 23 J (and 59 J) or state the precision. Same pattern as the logged FA1 precision notes.
  - Checked and correct: card 1 (the condition "do work"; the pendulum); `we-1` (735 J; 7.0 m s⁻¹); the quick check (9.9 m s⁻¹); activity 1 and Q3 arithmetic; the odd-one-out; card 3 and its balance; Q2 model answer (5.9 m s⁻¹; the ramp angle explanation); the warm-up answer.
- **Cause chain taught, in order:** (1) the rock's equal joules and the pendulum question (1); (2) gravity's work moves energy between U and KE joule for joule, so with only gravity working, the total is constant (2); (3) the tension does no work, so the pendulum returns to its height (3); (4) the law and its condition (4); (5) a speed from a height (5); (6) the normal force does no work, so slope shape doesn't matter (6, 7); (7) friction's negative work: mechanical energy becomes heat (8); (8) the forces doing work identified, the theorem check, total energy conserved (9); (9) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (energy can be transformed, not destroyed). From FA1, recalled in a line each: v26 (W = Fs cos θ; W_net = ΔKE; a force across the motion does no work; conservative and non-conservative forces), v27 (ΔU = mgΔh; the winch's work W = ΔU; KE = ½mv²; the rock's 784 J).
- **Learner-visible vocabulary (plain meaning at first use):** mechanical energy (kinetic plus potential energy, scene 2); conserved (stays the same, scene 2); law of conservation of mechanical energy (scene 4); heat (energy that warms the box and the ramp, scene 8); total energy (all forms, including heat, scene 9). "Dissipated" is not used aloud (key notes give it with "turned into heat").
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Dot`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v26's **`EnergyBars`** with v27's "U" type and new **dashed outlines** ("total" = U + KE + heat; "mechanical" = U + KE); **pendulum** (a coded string from v21's boss to the steel-ball bob, driven by the exact pendulum equation for its amplitude or a small-angle approximation flagged in the build notes, with tension and velocity arrows held perpendicular and a release-height line); **twin slopes** (two smooth coded ice slopes of equal height, each with the sledge plate driven from one clock along its path, constant acceleration on straight slopes); v22's **`RampMotion`** on v21's `TiltRamp` with the heat shimmer from v26; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Colour key (v26, applied):** forces amber with a dark ink outline; velocity teal; displacement grey; energy bars: KE blue, U green, heat warm grey, total a dashed ink outline, mechanical a dashed blue-green outline; crossed items muted red.
- **Board layout (constant):** heading top-left; the object in the left 60 per cent; energy bars or the working in the right column, on one joule scale per scene with the scale chip visible.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Opening: v27 scene 15 frame. The rock's 784 J is restated, not recalculated.
  (b) Pendulum: string 0.80 m, bob 0.20 kg (the steel ball), released from rest 0.200 m above its lowest point (angle 41.4° from the vertical); U at release 0.392 J; speed at the bottom √(2 × 9.80 × 0.200) = 1.98 m s⁻¹; period about 1.8 s for small angles (at 41° the true period is about 3 per cent longer: drive the motion from the exact equation or label nothing that depends on the period). Bars show no numbers (shape only); the dashed total outline is fixed. Air-resistance replay: each swing peak 2 per cent lower (illustrative, tag "with air resistance").
  (c) Slide: 30 kg, 2.5 m, smooth: U = 30 × 9.80 × 2.5 = 735 J; v = √(2 × 9.80 × 2.5) = √49.0 = 7.0 m s⁻¹.
  (d) Twin slopes (straight, smooth, 2.5 m high): 60°: length 2.89 m, a = 8.49 m s⁻², t = 0.82 s; 10°: length 14.4 m, a = 1.70 m s⁻², t = 4.11 s; both v = 7.0 m s⁻¹. Played at real speed; the 10° slope is drawn with a horizontal scale so both fit (uniform scale: the slope is long on screen).
  (e) Friction case: 2.0 × 9.80 × 3.0 = 58.8 J; ½ × 2.0 × 6.0² = 36 J; 58.8 − 36 = 22.8 J ≈ 23 J; frictionless √(2 × 9.80 × 3.0) = 7.67 m s⁻¹ ("seven point seven"). The ramp is drawn at 30° (length 6.0 m) for the animation; no angle or length is spoken or needed. Friction force implied 22.8 ÷ 6.0 = 3.8 N (not shown).
  (f) A1: Δh = 2.40 − 0.900 = 1.50 m; v_B = √(2 × 9.80 × 1.50) = √29.4 = 5.42 m s⁻¹; crossed √(2 × 9.80 × 2.40) = 6.86 m s⁻¹. The mass (0.400 kg) is a distractor (HSC style); U_A above the floor 9.41 J (not needed).
  (g) A2: W_g = 15.0 × 9.80 × 1.20 = 176.4 = 176 J; KE = ½ × 15.0 × 3.50² = 91.875 = 91.9 J; heat 176.4 − 91.875 = 84.5 J; frictionless speed √(2 × 9.80 × 1.20) = 4.85 m s⁻¹ (not shown); crossed "KE = 176 J".
  (h) Site quick check (not voiced): √(2 × 9.80 × 5.0) = 9.90 m s⁻¹.
  (i) Site odd-one-out and match task (not voiced): starting at rest is not a condition; a ball thrown up: KE to U rising, U maximum and KE minimum at the top (not zero unless thrown straight up), U to KE falling, some dissipated with air resistance.
  (j) Pronunciations: "K E plus U"; "delta K E plus delta U equals zero"; "the square root of two g h"; "fifty-eight point eight joules".

Main question: *Released from the side, does a pendulum swing higher, lower or to the same height? And when only gravity does work, why does kinetic plus potential energy stay the same?*
Entry knowledge (Stage 5 energy transformation; v26 work, the theorem, zero work across the motion, conservative forces; v27 ΔU = mgΔh, W = ΔU for a lift, KE = ½mv²).
Stops after: why mechanical energy is constant when only gravity does work; the conditions (forces that do no work allowed); KE_i + U_i = KE_f + U_f for a speed; slope shape irrelevant; friction's work as heat with forces identified; total energy conserved. No momentum, no springs, no power.
Handoff: v29, momentum and impulse.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: see Decisions (forces amber with ink outline; velocity teal; KE bar blue; U bar green; heat bar warm grey; total dashed ink; crossed items muted red).

### 1. hook (higher, lower or the same?)
> Last time, a falling rock lost seven hundred and eighty-four joules of potential energy, and gained exactly that much kinetic energy. Was that a coincidence? Let's test it with a pendulum. A steel ball hangs from a string. Pull it to one side, and release it from rest. Ignoring air resistance, does it swing up higher on the other side, lower, or to exactly the same **height**?

Visual: opens on v27's last frame (author note a). The "Next" chip becomes the heading: "Conservation of mechanical energy"; on "coincidence" the bracket "U + KE: always the same?" pulses. On "pendulum" clear change: v21's retort stand and boss with crossbar (`y11p-retort-stand-v1.png`, `y11p-boss-crossbar-v1.png`), a coded string to `y11p-steel-ball-v1.png` hanging at rest. On "Pull it" the bob moves out along its arc to 0.200 m above its lowest point (a coded release pin holds it; grey dimension "h" from the lowest point); a faint dotted horizontal line at the release height runs across to the far side. On "height" chips "higher?", "lower?", "same?" and a 3-second countdown ring.

### 2. why the total stays the same
> Here's the reasoning, from the last two videos. First, the net work on an object equals its change in kinetic energy. Second, lifting against gravity stores the work as potential energy: W equals delta U. So gravity's own work changes U by the same amount, with the opposite sign. As the ball swings down, gravity does positive work. Potential energy drops, and kinetic energy rises by exactly the same **amount**. As it swings up, gravity does negative work, and the trade runs backwards. So if gravity is the only force doing work, delta K E plus delta U is zero. Their total, called mechanical energy, stays **constant**.

Visual: right column `AlignedAlgebra`, one row per sentence: "W_net = ΔKE" (grey "v26"); "W = ΔU (lifting at steady speed, v27)"; "gravity's work: W_g = −ΔU". The pin releases on "swings down": the bob swings (author note b); an amber weight arrow "mg" on the bob with a short grey displacement along the arc and a sign chip "+" (down) and later "−" (up). Below the algebra `EnergyBars` (no numbers): green U and blue KE trade; on "amount" the two bars' changes are bracketed equal. Rows continue: "only gravity does work: ΔKE = W_g = −ΔU"; "ΔKE + ΔU = 0"; on "constant" boxed "KE + U = constant (mechanical energy)" and a dashed ink "total" outline appears around the two bars, staying fixed as they keep trading.

### 3. the string does no work
> So, exactly the same height. But wait. The string pulls on the ball too. Does it do any work? The string always pulls along itself, towards the pivot, and the ball always moves across the string, along its arc. So the tension is at ninety degrees to the motion, and it does no **work**. With, against, across, and across means zero. Gravity is the only force doing work, so the ball comes back to its starting height. Add air resistance, and each swing ends a little **lower**.

Visual: the bob reaches the far side and touches the dotted release line exactly (the "same?" chip fills). The swing continues. On "string pulls" an amber tension arrow "T" along the string towards the boss; on "moves across" a teal velocity arrow on the bob, tangent to the arc; a small right-angle mark rides between them through the whole swing; on "work" chip "T ⊥ v: W_T = 0". On "With, against, across" v26's memory line appears small (grey "v26"). On "lower" a replay with a pale drag arrow on the bob (tag "with air resistance, illustrative"): each peak falls a little below the dotted line, and the dashed total outline sinks slightly while a thin warm-grey heat bar grows.

### 4. the law and its condition
> That's the law of conservation of mechanical energy. When only gravity does work, kinetic plus potential energy at the start equals kinetic plus potential energy at the end. Other forces can still act, like tension, or the normal force from a smooth surface, as long as they do no work. But if friction, air resistance or a push does work, the total **changes**.

Visual: board clears to a law panel. Boxed: "KE_i + U_i = KE_f + U_f". Condition card, one line per cue: "Condition: only conservative forces (gravity) do work."; on "Other forces" "Forces that do no work may act: tension (pendulum), normal force (smooth surface)." with small icons of the pendulum's T and a smooth slope's F_N, each with "W = 0"; on "changes" "Friction, air resistance or a push doing work: KE + U changes." with three small amber arrows (friction, drag, push), the bar total outline beside them sinking for friction and drag and rising for the push (tags "takes energy out", "adds energy").

### 5. worked example: the icy slope
> Let's use it. Task: a thirty kilogram sledge starts from rest at the top of a smooth, icy slope two point five metres high. Find its speed at the bottom. The givens: m is thirty kilograms, the drop is two point five metres, it starts from rest, and the slope is smooth. Take the bottom as zero height. At the top, all the energy is potential, m g h. At the bottom, it's all kinetic, half m v squared. Set them equal, and the mass **cancels**. So v is the square root of two g h, the square root of forty-nine, seven point oh metres per **second**.

Visual: clear change to the calculation layout. Left: a coded smooth ice slope (curved, glossy highlight, tag "smooth") 2.5 m high (grey dimension "h = 2.5 m", zero line at the bottom) with `y11p-sledge-v1.png` at the top (empty). Task strip "Find the speed at the bottom". Equation strip "KE_i + U_i = KE_f + U_f". Givens group (navy): "m = 30 kg; h = 2.5 m; u = 0"; "smooth: only gravity does work; g = 9.80 m s⁻²" (tag "site worked example values"). Rows, one per sentence: "0 + mgh = ½mv² + 0"; on "cancels" the two m's strike through: "gh = ½v²"; on "second" "v = √(2gh) = √(2 × 9.80 × 2.5) = √49 = 7.0 m s⁻¹ (2 s.f.)", boxed. As the last row writes the sledge slides down; its green U bar ("735 J" at the top) drains into the blue KE bar, the dashed total outline fixed at 735 J.

### 6. prediction: steep or gentle?
> Now two smooth slopes, both two point five metres high. One is steep, and one is long and gentle. Which gives the sledge the bigger speed at the **bottom**?

Visual: the calculation strip shrinks to the top (boxed "7.0 m s⁻¹" kept). Two straight smooth slopes side by side, the same height (dimension "2.5 m" on both): steep (60°) left, long and gentle (10°) right (author note d); a sledge at the top of each. On "bottom" chips "steep?", "gentle?", "same?" and a 3-second countdown ring.

### 7. the slope's shape doesn't matter
> Neither. Both reach seven point oh metres per second. The normal force from a slope is always at ninety degrees to the motion, so it does no work, whatever the slope's shape. Only gravity does work, and gravity's work depends only on the height drop. The gentle slope takes longer to get there, but the speed at the bottom is the **same**.

Visual: both sledges are released together from one clock (author note d); the steep one arrives at 0.82 s, the gentle one at 4.1 s (timers under each). On "normal force" amber F_N arrows on both sledges, perpendicular to their slopes, each with a right-angle mark and chip "W = 0". On "height drop" the two height dimensions glow. On "same" both speed readouts read "7.0 m s⁻¹" (the "same?" chip fills; tag "takes longer, same speed").

### 8. friction: where does the energy go?
> Now add friction. A two point oh kilogram box slides from rest down a rough ramp three point oh metres high, and reaches the bottom at six point oh metres per second. Without friction, it would reach seven point seven. So where did the rest go? The potential energy lost is m g h, fifty-eight point eight **joules**. The kinetic energy gained is half times two times six squared, thirty-six **joules**. The difference, about twenty-three joules, is the work friction did, turned into heat in the box and the **ramp**.

Visual: clear change to the calculation layout with v21's ramp kit at the left, the plank drawn rough (coded hatching, tag "rough"), `y11p-box-v1.png` at the top (tag "2.0 kg, slides from rest"), height dimension "3.0 m". Givens group: "m = 2.0 kg; h = 3.0 m; u = 0; v = 6.0 m s⁻¹ at the bottom" (tag "site activity values"); grey chip "frictionless: √(2gh) = 7.7 m s⁻¹". The box slides down (author note e) with the heat shimmer on the plank. Rows: on "joules" "ΔU = −mgh = −2.0 × 9.80 × 3.0 = −58.8 J"; on the second "joules" "KE = ½ × 2.0 × 6.0² = 36 J"; on "ramp" "heat = 58.8 − 36 = 22.8 ≈ 23 J (2 s.f.)", boxed. `EnergyBars`: green U drains 58.8 J, blue KE fills to 36 J, warm-grey heat fills to 22.8 J.

### 9. which forces did the work?
> So which forces did the work? Gravity did positive work, friction did negative work, and the normal force did **none**. Check with the work-energy theorem: fifty-eight point eight minus twenty-three is the thirty-six joules of kinetic energy. Mechanical energy fell, but total energy didn't. Nothing was destroyed. It became **heat**.

Visual: the calculation rows shrink to the top (boxed "heat ≈ 23 J" kept); the box replays its slide, larger, with a force panel on it: amber W ("W_g = +58.8 J", its displacement component along the slide), amber friction up the ramp ("W_f = −22.8 J"), amber F_N perpendicular with a right-angle mark ("W = 0"); on "none" the F_N chip glows. On "Check" row "W_net = 58.8 − 22.8 = 36 J = ΔKE ✓". On "Mechanical energy fell" the bars return: the dashed ink "total" outline (U + KE + heat) stays fixed while a dashed blue-green "mechanical" outline (U + KE) sinks by 22.8 J. On "heat" chip "total energy conserved; mechanical energy not".

### 10. memory aid
> So, to sum up: gravity swaps, friction leaks. Gravity swaps energy between potential and kinetic, and the total stays the same. Friction leaks it out of the mechanical total, as **heat**.

Visual: the board clears. The handwritten line writes large: "Gravity swaps, friction leaks." Under it, smaller: "Swaps: U ⇄ KE, total constant. Leaks: out of KE + U into heat (not destroyed)." On "swaps" the pendulum's two bars trade inside their fixed outline (small); on "leaks" scene 9's bars with the heat bar and the two outlines (small). Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A zero point four oh oh kilogram block is released from rest at point A on a smooth, curved track, two point four oh metres above the floor. Point B on the track is zero point nine oh oh metres above the floor. Calculate the block's speed at point B. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with an HSC-style line drawing (a smooth curved track from A, high on the left, dipping and rising to B on the right; a floor line; the heights "2.40 m" and "0.900 m" marked from the floor; a small block at A; no arrows): "A 0.400 kg block is released from rest at point A on a smooth, curved track, 2.40 m above the floor. Point B on the track is 0.900 m above the floor. Take g = 9.80 m s⁻². Calculate the speed of the block at point B. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The track is smooth, so only gravity does work, and mechanical energy is conserved. The drop from A to B is one point five oh metres, so v is the square root of two times nine point eight times one point five, five point four two metres per **second**. Using the full two point four oh metres gives six point eight six, but the block hasn't reached the **floor**.

Visual: card shrinks to the top; "smooth", "from rest" and both heights underlined. Rows: "only gravity does work: KE_A + U_A = KE_B + U_B"; "½v_B² = g(2.40 − 0.900) = g × 1.50"; on "second" "v_B = √(2 × 9.80 × 1.50) = 5.42 m s⁻¹", boxed. On "floor" a chip "Δh = 2.40 m, v = 6.86 m s⁻¹" fades in and is crossed (caption "B is 0.900 m up"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A fifteen point oh kilogram crate slides from rest down a rough ramp, dropping one point two oh metres vertically, and reaches the bottom at three point five oh metres per second. Calculate the work done by gravity, and the energy transformed into heat by friction. Then name a force that acts on the crate but does no work, and explain why. Pause here to answer.

Visual: `QuestionCard`, worded as printed (HSC-style line drawing: a ramp line with the vertical drop "1.20 m" marked, a block at the top; no arrows): "A 15.0 kg crate slides from rest down a rough ramp. It drops 1.20 m vertically and reaches the bottom of the ramp at 3.50 m s⁻¹. Take g = 9.80 m s⁻². (a) Calculate the work done on the crate by gravity. (b) Calculate the energy transformed into heat by friction. (c) Name a force that acts on the crate but does no work on it, and explain why. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Gravity does m g h, one hundred and seventy-six **joules**. The kinetic energy is half times fifteen times three point five squared, ninety-one point nine joules. So friction turned eighty-four point five joules into **heat**. The normal force does no work, because it's at ninety degrees to the motion. Assuming all one hundred and seventy-six joules became kinetic energy ignores the **friction**.

Visual: card shrinks to the top; "rough", "drops 1.20 m vertically" and "3.50 m s⁻¹" underlined. Rows: on "joules" "(a) W_g = mgh = 15.0 × 9.80 × 1.20 = 176 J"; "KE = ½ × 15.0 × 3.50² = 91.9 J"; on "heat" "(b) heat = 176 − 91.9 = 84.5 J", boxed; "(c) normal force: perpendicular to the displacement, so W = 0", boxed, with a small amber F_N and a right-angle mark on the card's drawing. On "friction" a chip "KE = 176 J at the bottom" fades in and is crossed (caption "conservation needs no friction work"). Hold about 1 second.

### 15. handoff
> So when only gravity does work, kinetic plus potential energy stays the same, because gravity's work just moves energy from one to the other. Friction leaks some out as heat. Energy tells us how fast the box is going at the bottom. But when it hits the end stop, how hard is the stop? Next: momentum and **impulse**.

Visual: the memory line returns small at the top. The rough ramp from scenes 8 and 9 with the box at its foot, sliding toward `y11p-padded-stop-v1.png` clamped at the end; its bars small beside it (U 0, KE 36 J, heat 22.8 J, the total outline fixed). On "how hard" a chip "how hard does it stop?" beside the stop. On "impulse" the chip "Next: momentum and impulse". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Mechanical energy = KE + U. W_net = ΔKE; lifting at steady speed, W = ΔU; so gravity's work W_g = −ΔU.
2. Condition: mechanical energy is conserved when only conservative forces (gravity) do work. Forces that do no work may act (tension in a pendulum, the normal force on a smooth surface).
3. Law: KE_i + U_i = KE_f + U_f. From rest down a smooth drop h: v = √(2gh), for any mass and any slope shape.
4. With friction: (KE_i + U_i) = (KE_f + U_f) + heat. Friction's work turns (dissipates) mechanical energy into heat; total energy is still conserved.
5. Name the forces doing work: gravity (+ going down, − going up), friction (−), normal force and tension (0, at 90° to the motion).

Memory aid (large, on the notes screen): *Gravity swaps, friction leaks.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the total stays the same: gravity's work changes KE by +W and U by −W, so nothing is gained or lost while it is the only force doing work (2, with the fixed outline). Why the pendulum returns to its height: the tension is always across the motion, so it does no work (3, with the riding right-angle mark). Why slope shape doesn't matter: the normal force does no work and gravity's work depends only on the drop (7, with the race). Why the box is slower than √(2gh): friction does negative work, turning mechanical energy into heat (8, 9, with the sinking mechanical outline and the fixed total). Why "total energy is conserved" survives: the heat bar holds the missing joules (9).
- **Misconceptions addressed:** a pendulum could rise higher (1, 3); the string does work (3); conserved "whenever only gravity acts" versus "does work" (4); steeper slopes give faster finishes (6, 7); friction destroys energy (9, 10); conservation used on a rough ramp (A2 crossed); height above the floor used as the drop (A1 crossed).
- **One idea at a time:** the reason (2), the pendulum's string (3), the law and condition (4), a speed (5), slope shape (6, 7), friction's energy (8), the forces' work (9); one derivation row per cue.
- **Video makes it easier:** the student watches U and KE trade inside a fixed outline (2), the bob touch the release line (3), the tension and velocity stay perpendicular (3), two sledges finish at different times with the same speed (7), and the mechanical outline sink while the total holds (9).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every given on the card (smooth; both heights; rough; the drop and final speed), nothing answer-bearing. One crossed mistake each; feedback about 27 s and 30 s.
- **Avoided double teaching:** the work-energy theorem, zero work across the motion and conservative forces (v26), ΔU = mgΔh, W = ΔU for a lift and KE = ½mv² (v27) recalled in a line each.
- **Syllabus coverage:** `ci778e4712`: the condition, with forces that do no work allowed (2, 3, 4, 10, A1); `ci7fd8d698`: the law applied with W = ΔKE and W = ΔU (2, 5, 7, 8, 9, A1); `cie3b5703f`: transformations analysed, work calculated in a uniform field from the height change, forces doing work identified (3, 7, 8, 9, A2).
- **Out of scope by design:** momentum and impulse (v29); springs; power and efficiency; orbits.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 0.400 kg block is released from rest at point A on a smooth, curved track, 2.40 m above the floor. Point B on the track is 0.900 m above the floor. Take g = 9.80 m s⁻². Calculate the speed of the block at point B."
Model answer: The track is smooth, so only gravity does work (the normal force is perpendicular to the motion) and mechanical energy is conserved: KE_A + U_A = KE_B + U_B, with KE_A = 0. ½mv_B² = mg(2.40 − 0.900) = mg × 1.50, so v_B = √(2 × 9.80 × 1.50) = 5.42 m s⁻¹ (the mass cancels). Classic mistake (crossed): "Δh = 2.40 m, v_B = 6.86 m s⁻¹".

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "A 15.0 kg crate slides from rest down a rough ramp. It drops 1.20 m vertically and reaches the bottom of the ramp at 3.50 m s⁻¹. Take g = 9.80 m s⁻². (a) Calculate the work done on the crate by gravity. (b) Calculate the energy transformed into heat by friction. (c) Name a force that acts on the crate but does no work on it, and explain why."
Model answer: (a) W_g = mgΔh = 15.0 × 9.80 × 1.20 = 176 J (equal to the loss in U). (b) KE at the bottom = ½ × 15.0 × 3.50² = 91.9 J; heat = 176 − 91.9 = 84.5 J (friction's work is −84.5 J; total energy is conserved). (c) The normal force: it is perpendicular to the crate's displacement along the ramp, so W = Fs cos 90° = 0. Classic mistake (crossed): "KE at the bottom = 176 J" (conservation of mechanical energy assumed although friction does work).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rock (v27) | 784 J lost and gained | 1 |
| Pendulum (shape only) | 0.80 m; 0.20 kg; 0.200 m; 41.4°; 0.392 J; 1.98 m s⁻¹ (not shown) | 1, 2, 3 |
| Slide (site we-1) | 30 kg; 2.5 m; 735 J; √49; 7.0 m s⁻¹ | 5, 7 |
| Twin slopes | 60°: 2.89 m, 0.82 s; 10°: 14.4 m, 4.1 s; both 7.0 m s⁻¹ | 6, 7 |
| Friction (site activity, Q3) | 2.0 kg; 3.0 m; 6.0 m s⁻¹; 7.7 m s⁻¹; 58.8 J; 36 J; 22.8 ≈ 23 J; W_net 36 J | 8, 9, 15 |
| A1 | Δh 1.50 m; 5.42 m s⁻¹; crossed 6.86 m s⁻¹ | 11, 12 |
| A2 | 176 J; 91.9 J; 84.5 J; crossed KE 176 J | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- Pendulum: acos(1 − 0.200 ÷ 0.80) = 41.41°; 0.20 × 9.80 × 0.200 = 0.392; √(2 × 9.80 × 0.200) = 1.980; 2π√(0.80 ÷ 9.80) = 1.795 s.
- 30 × 9.80 × 2.5 = 735; 2 × 9.80 × 2.5 = 49.0; √49.0 = 7.00.
- 60°: 2.5 ÷ sin 60° = 2.887; 9.80 sin 60° = 8.487; √(2 × 2.887 ÷ 8.487) = 0.825 s. 10°: 2.5 ÷ sin 10° = 14.40; 9.80 sin 10° = 1.702; √(2 × 14.40 ÷ 1.702) = 4.113 s.
- 2.0 × 9.80 × 3.0 = 58.8; ½ × 2.0 × 36 = 36; 58.8 − 36 = 22.8; √(2 × 9.80 × 3.0) = 7.668.
- A1: 2.40 − 0.900 = 1.50; √(2 × 9.80 × 1.50) = 5.422; √(2 × 9.80 × 2.40) = 6.859.
- A2: 15.0 × 9.80 × 1.20 = 176.4; ½ × 15.0 × 3.50² = 91.875; 176.4 − 91.875 = 84.525 (84.5 J).

## Memory aid check

- **"Gravity swaps, friction leaks."** Meaning, as said in scene 10: gravity's work moves energy between potential and kinetic, with their total unchanged; friction's work moves energy out of the mechanical total (KE + U) into heat. Assumptions checked: "swaps" is true only for gravity in this course (a conservative force; v26), in a uniform field; "leaks" means out of the mechanical total, not out of existence (the screen line says "not destroyed"); friction here is kinetic friction on a sliding object (static friction on a non-slipping object does no work: not in this video). A push that does work is not covered by the line (scene 4 treats it). It survives every case in the video: the pendulum and slopes (swaps), the box and A2 (leaks). Introduced after the reason (2), the condition (4) and the friction case (8, 9).
- **Considered, not used:** the site's hook "Energy never leaves the building. Friction moves it to a room you cannot use." (accurate in spirit, but two sentences, and "cannot use" overstates: heat can be partly used, just not returned to the box's motion here); "KE + U stays true" (no cause in it).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,658 characters**, 16 scenes. Characters per scene (1 to 16): 375, 616, 469, 358, 539, 152, 335, 505, 326, 183, 283, 355, 373, 387, 312, 75. At 13.3 characters per second the speech is about 425 s; add about 18 s of holds and settling (the swing in 2 and 3 with the air-resistance replay, the slide in 5, the slope race in 7, the friction slide in 8, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 525 s**, inside the 5,500 to 6,800 character band. Three syllabus points that share one law fill it without padding; the content ends at the friction balance, so the video is shorter than v26 and v27 rather than padded.

## Scene list and build ids

Lesson key `p-y11-v28` (route phys-y11-fa1-v28). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v28` and build folder `docs/production/claude-pm/lessons/p-y11-v28` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, why-constant, string-no-work, law-and-condition, worked-slope, slopes-prediction, shape-doesnt-matter, friction-heat, forces-doing-work, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and slopes-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v27's last frame continues into scene 1 (camera continue), then a clear change to the pendulum; 1 to 2 split board (algebra at the right); 2 to 3 camera continue (same pendulum); 3 to 4 board clear; 4 to 5 clear change to the calculation layout; 5 to 6 split board (twin slopes); 6 to 7 camera continue; 7 to 8 clear change to the ramp and calculation layout; 8 to 9 camera continue (same ramp); 9 to 10 board clear; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and slopes-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v28-learning-review.md`, `science_check` = `checks/p-y11-v28-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched; `y11p-` names are read as `phys-y11-`):
- v21's `y11p-retort-stand-v1.png` and `y11p-boss-crossbar-v1.png`: the pendulum support, scenes 1 to 3, 10.
- `y11p-steel-ball-v1.png` (requested in v09/v10): the pendulum bob, scenes 1 to 3, 10.
- `y11p-sledge-v1.png` (v12): scenes 5 to 7 (two copies in 6, 7).
- v21's ramp kit (`y11p-ramp-plank-v1.png`, `y11p-ramp-hinge-block-v1.png`, `y11p-retort-stand-v1.png`, `y11p-boss-crossbar-v1.png`) and `y11p-box-v1.png`: scenes 8, 9, 10, 15.
- v24's `y11p-padded-stop-v1.png`: scene 15.
- v27's `phys-y11-rock-v1.png`: scene 1's opening frame only.

No new plate. Coded: the string and release pin, the ice slopes and their highlight, the rough hatching and heat shimmer, all arrows and right-angle marks, the energy bars and outlines, the law panel and condition card, both card line drawings. One check for the build: the steel ball's sidecar must give a centre point where the string attaches (top of the ball); if it has none, the string meets the ball's top edge.

Kit gaps (for the build brief): v26's `EnergyBars` gains dashed "total" and "mechanical" outlines; **pendulum** (lesson-local: string from a pivot to a bob, exact or flagged small-angle motion, tension and velocity arrows with a riding right-angle mark, a release-height line); twin slopes on one clock (lesson-local); v22's `RampMotion` on v21's `TiltRamp`. Lesson-local acceptable for Revision 1.

## Codex asset brief

None. No new plate is needed (all objects are reused; see Assets).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the animations: the pendulum reaches the release line on the far side with no air resistance; the tension and velocity arrows stay perpendicular; the twin slopes finish at 0.82 s and 4.1 s with 7.0 m s⁻¹ each; the friction slide's bars end at 0, 36 and 22.8 J with the total outline fixed and the mechanical outline lower by 22.8 J.
3. Confirm the physics claims: W_net = ΔKE; W = ΔU for a steady lift and W_g = −ΔU; with only gravity doing work, ΔKE + ΔU = 0; the condition is "only conservative forces do work", with forces that do no work allowed; the tension and the normal force on a smooth surface do no work; slope shape doesn't affect the final speed on a smooth slope; friction's negative work becomes heat; total energy is conserved; the check W_net = 36 J.
4. Confirm precision: 7.0 m s⁻¹ and about 23 J (two figures); A1 and A2 to three figures.
5. Confirm the memory aid's condition ("not destroyed") is on screen.
6. Confirm both attempt questions are original in wording, carry every given (smooth, from rest, both heights from the floor, g; rough, from rest, vertical drop, final speed, g), and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Conservation of Mechanical Energy: When KE + U Stays Constant | Year 11 Physics

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson26.sa.html

Release a pendulum from the side: does it swing higher, lower or to exactly the same height? See why kinetic plus potential energy stays constant when only gravity does work, why the string and the normal force don't count, and use KE + U = constant to find a sledge's speed at the bottom of a slope (and why the slope's shape doesn't matter). Then add friction, find where the "missing" energy goes, and identify which forces did the work. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"State the conditions under which total mechanical energy is conserved" (ci778e4712)
"Apply the law of conservation of mechanical energy and use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems" (ci7fd8d698)
"Analyse energy transformations and calculate the work done when an object moves within a uniform gravitational field, including changes in gravitational potential energy due to height and identifying the forces responsible for doing work" (cie3b5703f)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Gravitational potential and kinetic energy (previous video). Next: Momentum and impulse.

#Year11Physics #Physics #Energy #HSCScience

## Open decisions

- **1. Learner question (root to record in the route).** "When only gravity does work, why does kinetic plus potential energy stay the same?"
- **2. Handoff wording for v29.** The chip reads "Next: momentum and impulse" until v29's learner question is written; the separate handoff take is then re-voiced only if root changes the spoken last line ("Next: momentum and impulse").
- **3. "W = ΔU" sign convention.** The syllabus writes W = ΔU without naming whose work. This design reads it as the work done against gravity by a lifting force at steady speed (v27's winch), and states gravity's own work as W_g = −ΔU on screen. Root to confirm this convention course-wide (v27 uses the same).
- **4. Length.** 5,658 characters (about 525 s), shorter than v26 and v27 because three points share one law and the content is complete; no padding added. Root to accept, as for v03, v07, v11, v12 and v19.
- **5. Site link form.** As v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v26 and v27 at Year 11 entry; check that the reason in scene 2 is followed one row at a time and feels caused, not asserted; that the riding right-angle mark makes the string's zero work visible; that the slope race lands the "same speed, longer time" surprise; that the two outlines in scene 9 make "mechanical falls, total stays" clear; that the cards give nothing away), then the Codex physics check and error check.
- The fixed outline around trading bars (2, 5), the perpendicular arrows (3, 7) and the two outlines with the heat bar (9) carry the explanation; judge them at playback speed in the voiced preview.
