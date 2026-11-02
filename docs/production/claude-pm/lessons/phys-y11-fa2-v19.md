# Year 11 Physics FA2 V19 (Physics 2025, Year 11, Focus Area 2): How does a material's refractive index tell you how much it slows light? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa2-v19`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (two wheels on an axle, for the turning analogy); v18's ray box and glass block reused by name.

Narration 6,269 characters, 19 scenes, about 570 s (9.5 minutes) including three 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: nineteenth video of the Year 11 Physics (2025) Focus Area 2 route and the first refraction video. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v18.md` (Revision 1; v18's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson15.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 why light bends, card 2 n = c/v with `we-1`, activity 1 with its crown glass, two truths and a lie, independent practice Q1 and Q2; card 3, the lab demonstration, and Q3 belong to v20, which shares this site lesson in the route). Route entry: `phys-y11-fa2-v19` in `../../phys-y11-video-route.json` (status "route-approved-root-2026-11-02"; question set by root decision 22 in `../checks/root-decisions-phys-y11-fa2.md`). Route start: "Start with Refraction and Refractive Index. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply refraction and refractive index? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v20: What changes when waves cross a boundary between media?" (already a causal question; the handoff chip uses it).

**Opening frame (v18's actual handoff, Revision 1, 2 Nov).** v18's scene 17 ends with the memory line "Measure from the normal: angle in equals angle out." small at the top; a top view of the paper; the ray box plate (`phys-y11-ray-box-v1.png`) sending its beam to the glass block plate (`phys-y11-glass-block-v1.png`); a faint reflected ray leaving at the matching angle (its arcs share a tick, chip "law of reflection"); a ray entering the block and bending towards a dashed normal inside it (no angle values); chip "slower inside?"; chip "Next: How does a material's refractive index tell you how much it slows light?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, hands, faces or eyes (the ray box turns by code; the turning analogy uses wheels on an axle, not marching people); apparatus and the axle painted; rays, wavefronts, normals, the refractive index table and the speed bars coded (abstract diagrams); one reasoning stage at a time; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v05 (speed set by the medium), v13 (light is an electromagnetic wave) and v18 (the normal, wavefronts) recalled in a sentence at most.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave behaviours"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA2-G3-04 `ci0eac4a8c`: "Relate the velocity of light to the refractive index of a medium"
- P25-FA2-G3-05 `ci9bed6630`: "Solve refractive index problems using n x = c v x , where n x is the refractive index of the medium and v x is the speed of light in the medium" (the JSON's flattened MathML; written on screen and in the YouTube quote as "nₓ = c/vₓ", a typographic rendering per root decision 11)
- P25-FA2-G3-08 `cibbce5d8e`: "Relate the change in velocity of a light wave crossing an interface to differences between refractive indices"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v18's handoff (above); refraction named in one line (the bending seen in the handoff); the speed of light c in a vacuum and slower in every medium; the refractive index n = c/v, unitless, "how many times slower"; n ≥ 1 and a table of values; v = c/n and n = c/v used (the site's two calculations); optical density is not mass density (oil and water); the speed change at an interface, v₁/v₂ = n₂/n₁; velocity has a direction too: along the normal no bend; at an angle the wavefront turns, towards the normal when slowing and away when speeding up (qualitative only). Stops at "n is how many times slower; slower light bends towards the normal". Not taught: the law of refraction and any angle calculation (v21); wavelength and frequency at a boundary and the lab demonstration (v20); total internal reflection (v22); measuring n in the lab (v23); apparent depth, the bent pencil and dispersion (author notes d, e).

## Decisions

- **Learner question (root decision 22).** "How does a material's refractive index tell you how much it slows light?" v18's handoff chip uses it. The answer, built in order: c in a vacuum, slower in every medium (2); n = c/v counts how many times slower (3); n ≥ 1, bigger n means slower (4); using it both ways (5, 6); n is not mass density (7, 8); the speed ratio at an interface is the index ratio flipped (9); the speed change also turns the ray: none along the normal, towards the normal when slowing, away when speeding up (10 to 12).
- **The hook (v18's frame; site misconception 1 and "two truths and a lie" C, made a prediction).** "Glass has a refractive index of one point five. Is light one and a half times faster in glass, or one and a half times slower?" 3 s with chips "1.5 × faster?", "1.5 × slower?". Answered in 3.
- **Why light is slower in a medium (one plain sentence; author note a).** "The light keeps interacting with the charged particles in the material, so the wave moves through it more slowly." Kept short: the syllabus relates speed to n without asking for the mechanism, and without a sentence a student could think the light is "pushing through" like a ball in mud.
- **The definition said with its meaning (site card 2).** "n is how many times slower light is in that medium." With v18's "Measure from the normal" this sets up v21. "No units, because both speeds are in metres per second" said once (site key term).
- **n ≥ 1 and the table (site card 2).** Vacuum 1 exactly; air 1.0003 ("we usually call it one"); water 1.33; clear plastic 1.49; glass about 1.50; diamond 2.42. Read the other way: bigger n, slower light; diamond about 41 per cent of c ("about forty per cent"). Coded speed bars beside each row shrink as n grows.
- **Worked example 1 (site `we-1`, numbers unchanged).** n = 1.49, c = 3.00 × 10⁸ m s⁻¹: v = c/n = 2.01 × 10⁸ m s⁻¹. The rearrangement is said as two steps ("multiply both sides by v, divide by n"). Check: less than c.
- **Worked example 2 (site activity 1, numbers unchanged).** v = 1.97 × 10⁸ m s⁻¹ in crown glass: n = 1.52; faster in water (1.33). This is the site's activity done as a worked example; A1 gives the student a new case.
- **Surprise (prediction 2, 3 s, scene 7; site misconception 2's "denser", corrected).** "Cooking oil floats on water, because it's less dense. So which one slows light more?" Oil, n about 1.47 (author note b). "Optically denser" glossed as "light travels more slowly in it". This fixes the site's use of plain "denser" (site correction 1).
- **The interface (`cibbce5d8e`).** From v = c/n: v₁/v₂ = n₂/n₁. Water to glass: 1.50/1.33 = 1.13; 2.26 to 2.00 × 10⁸ m s⁻¹. Equal indices, no speed change. "Interface" glossed ("the boundary between two media").
- **Velocity is speed and direction (the point says "change in velocity").** Scene 10 says "Speed is only half of velocity. The other half is direction." FA1 taught velocity as a vector (fa1-v01); recalled in that sentence.
- **Prediction 3 (scene 10, 3 s; site warm-up, varied).** "Aim the beam straight along the normal. The light still slows down. Does it bend?" Chips "bends towards the normal?", "goes straight on?". Answered in 11 with the wheels head-on. With the hook and the oil prediction this makes three short 3 s predictions (open decision 2).
- **The turning cause (site card 1, made visible; no people).** Two wheels on an axle (plate) roll from smooth concrete onto sand: head-on, both slow together; at an angle, one wheel slows first and the axle swings. Then the coded wavefront: the end entering the glass first slows first (shorter steps), the wavefront turns, the ray (at right angles to it, v18) turns towards the normal. Leaving: the end leaving first speeds up first, the ray bends away. No angle values (v21 owns the law). The marching-band analogy is not used (no people; owner rule).
- **The rule with its condition (site misconception 2).** "Slowing down, towards the normal. Speeding up, away from it. Same speed, no bend." Plus "Light only bends towards the normal when it enters a medium with a higher index, not every time it crosses a boundary."
- **Attempts (original, HSC style).** (A1, both directions of n = c/v and the interface ratio) Ice: v = 2.29 × 10⁸ m s⁻¹, n = 1.31; diamond n = 2.42, v = 1.24 × 10⁸ m s⁻¹; v_ice/v_diamond = n_diamond/n_ice = 1.85. Crossed: "n = v/c = 0.76" (upside down; n is never less than 1). (A2, interface direction) Glass (1.50) into water (1.33) at an angle: speeds up by a factor of 1.13; bends away from the normal (wavefront end in water first speeds up first). Crossed: "it bends towards the normal, because light always bends towards the normal entering a new medium" (site misconception 2).
- **Mistake scene:** none separate. "Higher n means faster" (1, 3, 4; site misconception 1); "n can be less than 1" (4, A1 crossed); "denser means slower light" (7, 8); "light always bends towards the normal" (12, A2 crossed; site misconception 2); "any speed change bends the ray" (10, 11: along the normal it doesn't).
- **Memory aid:** "n is how many times slower." Second line: "slower light bends towards the normal." (see "Memory aid check").
- **Handoff (route next).** Board change: the ray box beam passes through the glass block on paper; the ray bends in, crosses, and leaves; four coded pencil dots on the paper, two on the incoming beam and two on the outgoing beam; a dashed outline traced round the block; a small ripple tank plate inset (`phys-y11-ripple-tank-v1.png`) at the right with the chip "wavelength? frequency?"; chip "what changes?"; then "Next: What changes when waves cross a boundary between media?". This is the frame v20 opens on.
- **Site sources used:** intro and hook (light changes speed and bends: 1; the bent pencil not used, author note d); warm-up (speed up or slow down; towards or away: 9 to 11); learning intentions (Know 1, 2; Understand 1 to 3; Can Do 1, 2: 2 to 11; Know 3 and Can Do 3 are v20's); key terms (refraction, medium, refractive index with no units, c: 1 to 3); misconceptions 1 and 2 (3, 4, 7, 11); card 1 (the pivot, towards and away: 10, 11; its 55° and 33° figure not used, angle values are v21's); card 1 check (true: 11); card 2 and `we-1` (3 to 5); quick check (water faster than diamond: 4); activity 1 (crown glass: 6); two truths and a lie (C, the lie: the hook); Q1 (v = c/n and the towards-normal reason: 5, 10); Q2 (n = 1.5 and its meaning: 3).
- **Site corrections and suggestions (quoted from site lesson 15, read 3 Nov; for `../site-corrections-phys-y11.md`; none of these rows is logged yet):**
  1. Misconception 2: "Light bends towards the normal only when it slows down (entering a denser medium); it bends away from the normal when it speeds up." "Denser" reads as mass density; refraction depends on optical density (the refractive index), and the two can disagree (cooking oil is less dense than water but has a higher refractive index, about 1.47 against 1.33). Suggest: "(entering a medium with a higher refractive index, called optically denser)". The same applies to the fill-the-gaps text and Q3's mark guide ("bending towards the normal on entering the denser medium").
  2. Card 3: "This links the observed bending directly to the change in the speed of light, the larger the slow-down, the larger the bend." True only at a fixed angle of incidence (the bend also depends on the angle; along the normal there is a slow-down and no bend). Suggest: "for the same angle of incidence, the larger the slow-down, the larger the bend". (v20 also uses card 3; logged once, here.)
  3. Q2 model answer: "light travels 1.5 times more slowly in this glass than it does in a vacuum" is fine, but card 2's "slows light to two-thirds of its vacuum speed" and Q2's wording are the clearer pair; no change needed. (Checked, not a correction; recorded so the checker does not raise it.)
  4. Navigation: the bottom link reads "← Previous" with no lesson title (as lesson 14, v18's correction 4). Suggest "← Previous: The Law of Reflection".
  - Checked and correct: card 1's figure (55° in, n = 1.50, 33° in the glass: sin⁻¹(sin 55° ÷ 1.50) = 33.1°); card 2 (n = c/v; n ≥ 1; vacuum 1, air 1.0003, water 1.33, glass about 1.5); `we-1` (2.01 × 10⁸); quick check (A); activity 1 (1.52); two truths and a lie (C); Q1 (2.00 × 10⁸; slowing, towards the normal); Q2 (1.5, no units).
- **Cause chain taught, in order:** (1) the bend comes from a speed change (1); (2) c in a vacuum; slower in every medium, from the interaction with charges (2); (3) n = c/v counts how many times slower (3); (4) n ≥ 1; bigger n, slower (4); (5) v = c/n and n = c/v (5, 6); (6) optical, not mass, density (7, 8); (7) speed ratio = index ratio flipped (9); (8) a speed change turns the wavefront only when it arrives at an angle (10, 11); (9) towards when slowing, away when speeding up (11, 12).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Mathematics (rearranging a formula; powers of ten; dividing in scientific notation); Stage 5 Science (light travels in straight lines). From FA1, recalled in a phrase: velocity is speed with a direction (fa1-v01). From FA2, recalled in a line at most: v05 (a wave's speed is set by the medium), v13 (light is an electromagnetic wave; c = 3.00 × 10⁸ m s⁻¹ in a vacuum), v18 (the normal; wavefronts, with rays at right angles to them).
- **Learner-visible vocabulary (plain meaning at first use):** refraction (light changing direction as it crosses into a new medium, scene 1); medium (the material a wave travels through, scene 2); c (the speed of light in a vacuum, scene 2, recalled); refractive index, n (how many times slower light is in a medium than in a vacuum, n = c/v, scene 3); optically denser (light travels more slowly in it; not the same as heavier, scene 8); interface (the boundary between two media, scene 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v18's **`RayReflect`** extended to **`RayRefract`** (as v18 planned: a ray from the ray box's slit to a boundary point, the normal drawn there, a faint reflected ray, and a refracted ray drawn by direction only in this video: "towards" or "away" from the normal at a fixed illustrative angle, no readouts); **`WavefrontRefract`** (new, physics; reused in v20 and v21: straight crest lines crossing a straight boundary; each crest point's step length shrinks or grows by v₂/v₁ as it crosses, so the front turns; a head-on mode where the whole front slows together); **index table with speed bars** (rows write as spoken; a horizontal bar per medium of length v/c, with the "× slower" readout); **speed ratio strip** (two speed bars, water and glass, with the factor 1.13 between them); **axle roll** (the axle plate translated and rotated by code along a path from a coded concrete strip onto a coded sand strip; head-on and angled runs; wheel slowing shown by shorter spacing of coded track marks); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a line drawing; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the apparatus or diagram in the left two thirds; the index table or law down the right edge; working in the lower third.
- **Colour key:** as v18: light beams warm white; ray arrows with amber-outlined heads (FA2 key 3); the normal dashed grey; wavefront crest lines navy; speed bars blue (velocity, FA1 key; v19's speed bars are speed only, labelled "speed"); the glass region pale blue-grey, the water region pale blue, the oil region pale gold; givens navy; working ink; crossed items muted red.
- **No human figures.** The viewer never appears; the axle rolls by itself.
- **Author notes (not learner copy):**
  (a) Mechanism: the light's oscillating electric field drives the bound electrons in the material, which re-radiate; the superposition of the incident and re-radiated waves travels with phase speed c/n. Said as "interacting with the charged particles" only. The photons do not slow between atoms and then speed up; not mentioned.
  (b) Cooking oil (canola or olive): density about 0.91 to 0.92 g cm⁻³, refractive index about 1.46 to 1.47; water 1.00 g cm⁻³ and 1.33. "About one point four seven" is said.
  (c) n ≥ 1 for visible light in ordinary materials. The phase speed can exceed c in special cases (X-rays in glass have n slightly below 1); not mentioned; "Nothing travels faster" is said of c, which holds for energy and information.
  (d) The bent pencil and apparent depth (the site's hook and intro) need images and tracing back, which v18 did for mirrors; refraction images are not in the Year 11 2025 points; not used.
  (e) n depends on colour (dispersion), so tables quote yellow light; "glass about one point five" covers it; not mentioned.
  (f) Speeds: 3.00/1.33 = 2.26; 3.00/1.49 = 2.01; 3.00/1.50 = 2.00; 3.00/2.42 = 1.24 (× 10⁸ m s⁻¹); 1/2.42 = 0.413.
  (g) The axle analogy: the wheel on sand moves a shorter distance in the same time, so the axle rotates towards the normal of the strip boundary; its limitation (wheels are linked by a rigid axle; a wavefront is not) is not mentioned.
  (h) The illustrative angles in 10 and 11 are drawn to the law with n = 1.50 (40° in, 25.4° in the glass) but no values are shown (tag "drawn to scale").
  (i) Pronunciations: "n equals c over v"; "three point zero zero times ten to the eight"; "refractive" (ree-FRAK-tiv).

Main question: *The beam slowed and bent as it entered the glass. How does a material's refractive index tell you how much it slows light?*
Entry knowledge (Stage 5 rearranging and scientific notation; fa1-v01 velocity has a direction; v05 speed set by the medium; v13 light is an electromagnetic wave, c; v18 the normal and wavefronts).
Stops after: c and slower light in media; n = c/v with its meaning; n ≥ 1 and the table; both calculations; optical density; the interface speed ratio; no bend along the normal; towards when slowing, away when speeding up. No angle calculations (v21), no wavelength or frequency (v20), no lab demonstration (v20).
Handoff: v20, what changes when waves cross a boundary between media.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (faster or slower?)
> Last time, light bounced off a mirror at the angle it arrived. Now the beam meets a glass block. Some light reflects, but most goes in and changes direction. That's called refraction. It happens because light travels more slowly in glass. Glass has a refractive index of one point five. Does that mean light is one and a half times faster in glass, or one and a half times **slower**?

Visual: opens on v18's last frame (the ray box beam meeting the glass block on the paper, the faint reflected ray with its ticked arcs, the ray bending inside, chip "slower inside?", the "Next" chip). The "Next" chip becomes the heading: "Refraction and refractive index"; the memory line fades. On "Some light reflects" the faint reflected ray pulses once; on "goes in" the ray inside the block draws again from the surface (`RayRefract`, tag "drawn to scale"). On "refraction" gloss "refraction: light changing direction as it crosses into a new medium". On "more slowly" the chip "slower inside?" loses its question mark. On "one point five" a navy chip "glass: n = 1.5". On "slower" chips "1.5 × faster?", "1.5 × slower?" and a 3-second countdown ring.

### 2. the speed of light in a medium
> Start with the speed. In a vacuum, light travels at three times ten to the eight metres per second. We call that speed c, and nothing travels faster. In air, water or glass, light is slower than c. The light keeps interacting with the charged particles in the material, so the wave moves through it more slowly. A medium is the material a wave travels through, and each medium slows light by its own **amount**.

Visual: board change: three coded strips stacked, "vacuum", "water", "glass", each with a beam pulse (a short warm-white wave packet) racing along it from a common start line. On "c" the vacuum pulse is labelled "c = 3.00 × 10⁸ m s⁻¹" (v13 recall tag). On "slower than c" the water and glass pulses fall behind (glass furthest behind). On "charged particles" a small magnified inset on the glass strip: a few coded dots (charges) jiggling as the wave passes (grey tag "the light makes charges vibrate"), then it fades. On "medium" gloss "medium: the material a wave travels through". On "amount" the gaps between the pulses and the vacuum pulse pulse once.

### 3. the refractive index
> The refractive index measures that amount. It's the speed of light in a vacuum, divided by the speed of light in the medium. n equals c over v. Both speeds are in metres per second, so the units cancel, and n is just a number. It tells you how many times slower light is in that medium. So an index of one point five means light is one and a half times **slower** in glass. It travels at two-thirds of **c**.

Visual: camera continue. On "divided by" the equation strip "n = c/v" writes at the right (`AlignedAlgebra`), with labels under c "speed in a vacuum" and v "speed in the medium". On "units cancel" the units "m s⁻¹ ÷ m s⁻¹" cancel with strokes; "no units". On "how many times slower" gloss "refractive index: how many times slower light is than in a vacuum". On "slower" the hook's chip "1.5 × slower?" ticks and "1.5 × faster?" takes a scribble cross. On "c" the glass pulse's distance on its strip reads "⅔ of the vacuum pulse's" (a dimension bracket "2.00 × 10⁸ m s⁻¹").

### 4. n is never less than one
> Light is never faster than c, so v is never bigger than c, and n is never less than one. A vacuum is exactly one. Air is one point zero zero zero three, so we usually call it one. Water is one point three three, glass about one point five, and diamond two point four two. A bigger index means slower light. In diamond, light travels at only about forty per cent of its speed in a **vacuum**.

Visual: board change: the index table builds row by row as spoken, each with a blue speed bar of length v/c: "vacuum 1 (exactly)", "air 1.0003 ≈ 1.00", "water 1.33", "glass ≈ 1.50", "diamond 2.42" (clear plastic 1.49 is added silently in scene 5). On "never less than one" a grey chip "v ≤ c, so n ≥ 1". On "A bigger index" an arrow down the n column "bigger n" and down the bars "slower". On "vacuum" the diamond bar reads "0.41 c".

### 5. worked example: speed in a plastic
> Task: light travels through a clear plastic with a refractive index of one point four nine. Find its speed in the plastic. We know n, and c is three point zero zero times ten to the eight metres per second. To find v, multiply both sides by v, then divide by n, and v equals c over n. That's three point zero zero times ten to the eight, divided by one point four nine, which is two point zero one times ten to the eight metres per **second**. It's less than c, as it must **be**.

Visual: clear change to the calculation layout (the table small at the right). Task strip "Find v in the plastic". Equation strip "n = c/v". Givens group (navy): "n = 1.49", "c = 3.00 × 10⁸ m s⁻¹" (grey tag "site example"). On "multiply both sides" the rows "n v = c" then "v = c/n" write one at a time. On "second" the row "v = (3.00 × 10⁸) ÷ 1.49 = 2.01 × 10⁸ m s⁻¹", boxed; a "plastic 1.49" row slides into the table with its bar. On "be" a grey check row "2.01 × 10⁸ < 3.00 × 10⁸ ✓".

### 6. worked example: the index of crown glass
> Now the other way. Task: light travels at one point nine seven times ten to the eight metres per second in crown glass. Find its refractive index. n equals c over v. That's three point zero zero times ten to the eight, over one point nine seven times ten to the eight. The powers of ten cancel, and n is one point five **two**. Is light faster in this glass or in water, at one point three three? Water has the smaller index, so light is faster in **water**.

Visual: the previous working clears. Task strip "Find n for crown glass". Equation strip "n = c/v". Givens group (navy): "v = 1.97 × 10⁸ m s⁻¹", "c = 3.00 × 10⁸ m s⁻¹". On "over" the row "n = (3.00 × 10⁸) ÷ (1.97 × 10⁸)"; on "cancel" the two "× 10⁸" take strokes; on "two" "n = 1.52 (no units)", boxed. On "water" the table's water row and a new "crown glass 1.52" row pulse; the water bar is visibly longer (tag "lower n, faster").

### 7. prediction: oil or water?
> Here's a surprise. Cooking oil floats on water, because oil is less dense. So which one slows light **more**?

Visual: board change: a coded side view of a clear glass with a gold oil layer floating on pale blue water (tag "oil floats: less dense"). On "more" chips "water, the denser one?", "oil?" and a 3-second countdown ring.

### 8. optically denser
> It's the oil. Its refractive index is about one point four seven, higher than water's one point three three, so light is slower in the oil. The refractive index isn't about how heavy a material is. When light travels more slowly in a medium, we say it's optically denser. Judge by n, not by **mass**.

Visual: on "oil" the "oil?" chip ticks; "water, the denser one?" takes a scribble cross. Two rows join the table side: "oil ≈ 1.47", "water 1.33", with their speed bars (oil shorter). On "optically denser" gloss "optically denser: light travels more slowly in it". On "mass" a small grey chip "denser ≠ optically denser".

### 9. crossing an interface
> Now light crosses an interface, the boundary between two media, say from water into glass. In water, its speed is c over one point three three. In glass, it's c over one point five zero. Divide one by the other, and the c's cancel. So the ratio of the speeds is the ratio of the indices, **flipped**. One point five zero over one point three three is one point one three, so the light slows by a factor of one point one three, from two point two six to two point zero zero times ten to the eight metres per **second**.

Visual: board change: a coded side view, pale blue water above, pale blue-grey glass below, the interface a solid line; on "interface" gloss "interface: the boundary between two media". A beam travels straight down across it (along the normal, so no bend is shown yet). Rows (`AlignedAlgebra`): on "c over one point three three" "v_water = c/1.33"; on "c over one point five zero" "v_glass = c/1.50"; on "cancel" "v_water/v_glass = (c/1.33)/(c/1.50)" with the c's struck; on "flipped" boxed "v₁/v₂ = n₂/n₁". On "second" the speed ratio strip: two blue bars, "2.26 × 10⁸ m s⁻¹" and "2.00 × 10⁸ m s⁻¹", with "÷ 1.13" between them. A small grey chip "n₁ = n₂: no change" (screen only).

### 10. prediction: along the normal
> Speed is only half of velocity. The other half is direction. Aim the beam straight along the normal, at right angles to the glass. The light still slows down. Does it **bend**?

Visual: board change: top view of the paper, the ray box and glass block plates; the ray box turns by code so its beam meets the block's face along a dashed normal. Grey tag "velocity: speed and direction" (fa1 recall). On "bend" chips "bends towards the normal?", "goes straight on?" and a 3-second countdown ring.

### 11. why the wavefront turns
> It goes straight on. Picture two wheels on an axle, rolling from smooth concrete onto sand. Head-on, both wheels hit the sand together, slow together, and roll straight on. At an angle, one wheel hits the sand first and slows down, while the other keeps going fast, so the axle swings round. A light wavefront does the same. At an angle, the end that enters the glass first slows first, so the wavefront turns, and the ray turns towards the **normal**.

Visual: on "straight on" the beam passes into the block without bending; the "goes straight on?" chip ticks; the other is crossed. Board change: a coded concrete strip meeting a coded sand strip at a straight edge; the axle plate (`phys-y11-axle-wheels-v1.png`), seen from above. On "Head-on" it rolls square to the edge: both wheels cross together, the coded track marks behind each wheel shorten together, and it carries on straight. On "At an angle" it rolls in at an angle: the near wheel reaches the sand first and its track marks shorten while the far wheel's stay long; on "swings round" the axle rotates and the path turns towards the dashed normal of the edge. On "A light wavefront" a camera move to `WavefrontRefract`: navy crest lines from the ray box beam meet the glass face at an angle; the step lengths shrink as each part crosses; on "turns" the front pivots; on "normal" an amber-outlined ray arrow at right angles to the crests in the glass, closer to the dashed normal than the incoming ray (tag "drawn to scale"; no angle values). A head-on ghost run beside it: the whole front crosses together and stays parallel to the face.

### 12. leaving the glass
> Now leave the block, from glass back into air. This time the end that leaves first speeds up first, so the wavefront swings the other way, and the ray bends away from the normal. Slowing down, the ray bends towards the normal. Speeding up, it bends away. No change in speed, no bend. So light bends towards the normal only when it enters a higher index, not every time it crosses a **boundary**.

Visual: camera continue to the block's far face: the crests reach it at an angle; the end in the air first lengthens its steps first; the front swings; the ray in the air bends away from the second dashed normal. On "Slowing down" three rows at the right edge write one at a time: "slower (n up) → towards the normal", "faster (n down) → away from the normal", "same speed (n₁ = n₂), or along the normal → no bend". On "boundary" a chip "light always bends towards the normal" fades in and is crossed.

### 13. memory aid
> So remember. n is how many times slower, and slower light bends towards the **normal**.

Visual: the table and the rule rows slide together at the centre. The handwritten line writes large: "n is how many times slower." Under it, smaller: "slower light bends towards the normal". On "slower" the speed bars pulse; on "normal" a small ray bends towards a dashed normal. Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Light travels at two point two nine times ten to the eight metres per second in ice. Find the refractive index of ice. The light then passes into diamond, which has a refractive index of two point four two. Find its speed in diamond, and how many times faster it travels in ice than in diamond. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "The speed of light in ice is 2.29 × 10⁸ m s⁻¹. Take c = 3.00 × 10⁸ m s⁻¹. (a) Calculate the refractive index of ice. (b) Light passes from the ice into diamond (n = 2.42). Calculate the speed of light in the diamond. (c) Calculate how many times faster light travels in the ice than in the diamond. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> For ice, n is c over v, three point zero zero over two point two nine, which is one point three **one**. In diamond, v is c over two point four two, one point two four times ten to the eight metres per **second**. The speed ratio is the index ratio flipped, two point four two over one point three one, so light is about one point eight five times faster in **ice**. Dividing v by c gives point seven six. That's upside **down**.

Visual: card shrinks to the top; "2.29 × 10⁸ m s⁻¹" and "n = 2.42" underlined. Rows: on "one" "(a) n = (3.00 × 10⁸) ÷ (2.29 × 10⁸) = 1.31", boxed; on "second" "(b) v = (3.00 × 10⁸) ÷ 2.42 = 1.24 × 10⁸ m s⁻¹", boxed; on "ice" "(c) v_ice/v_diamond = n_diamond/n_ice = 2.42 ÷ 1.31 = 1.85", boxed (grey readout "2.29 ÷ 1.24 = 1.85 ✓"). On "down" a chip "n = v/c = 0.76" fades in and is crossed (tag "n is never less than 1"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A ray of light passes at an angle from glass, with a refractive index of one point five zero, into water, with a refractive index of one point three three. Does the light speed up or slow down, and by what factor? Which way does the ray bend? Explain using wavefronts. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with an HSC-style line drawing (a horizontal interface, "glass (n = 1.50)" above and "water (n = 1.33)" below, an incident ray in the glass meeting it at an angle, a dashed normal; no refracted ray): "A ray of light passes at an angle from glass (n = 1.50) into water (n = 1.33). (a) State whether the light speeds up or slows down, and calculate the factor by which its speed changes. (b) Using wavefronts, explain which way the ray bends at the boundary. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Water has the lower index, so the light speeds up, by one point five zero over one point three three, a factor of one point one **three**. The end of each wavefront that reaches the water first speeds up first, so the wavefront swings round, and the ray bends away from the **normal**. Light doesn't always bend towards the normal. It depends on which way the speed **changes**.

Visual: card shrinks to the top; "from glass" and "into water" underlined. Rows: on "three" "(a) water has lower n → speeds up; v_water/v_glass = n_glass/n_water = 1.50 ÷ 1.33 = 1.13", boxed. On "normal" a small `WavefrontRefract` on the card's drawing: crests in the glass, the end in the water lengthening its steps first; the ray in the water bends away from the normal; "(b) speeds up → bends away from the normal", boxed. On "changes" a chip "it bends towards the normal: light always does entering a new medium" fades in and is crossed. Hold about 1 second.

### 18. handoff
> So the refractive index tells you how many times slower light is, and the speed change at a boundary decides which way the ray bends. Can we show this in the lab? And does anything else change, like the wavelength or the frequency? What changes when waves cross a boundary between **media**?

Visual: the memory line returns small at the top. Board change: top view of the paper; the ray box beam passes through the glass block: it bends in, crosses and leaves (tag "drawn to scale"); on "in the lab" a dashed outline traces round the block and four coded pencil dots appear, two on the incoming beam and two on the outgoing beam. On "wavelength" a small ripple tank plate inset (`phys-y11-ripple-tank-v1.png`) at the right with a chip "wavelength? frequency?". On "media" chips "what changes?" and "Next: What changes when waves cross a boundary between media?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Refraction: light changes direction when it crosses into a medium where its speed is different.
2. Refractive index: n = c/v (c = 3.00 × 10⁸ m s⁻¹, the speed in a vacuum). No units. n is how many times slower light is in the medium; n ≥ 1; bigger n, slower light. Rearranged: v = c/n.
3. Optically denser means a higher n (slower light), not a greater mass density.
4. At an interface: v₁/v₂ = n₂/n₁ (the speed ratio is the index ratio flipped).
5. Slowing down (n up): bends towards the normal. Speeding up (n down): bends away. Along the normal, or no change in n: no bend.

Memory aid (large, on the notes screen): *n is how many times slower.* Second line: *slower light bends towards the normal.*

At the end the notes cross-fade back to scene 18's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why light is slower in a medium: it interacts with the material's charges (2). Why n has no units and is at least 1: a ratio of speeds, with v never above c (3, 4). Why the speed ratio flips the index ratio: v = c/n, so the c's cancel (9). Why a ray bends at an angle but not along the normal: one end of the wavefront changes speed before the other only when it arrives at an angle (10, 11). Why towards when slowing and away when speeding up: which end goes slower (11, 12).
- **Misconceptions addressed:** higher n means faster (1, 3, 4); n less than 1 (4, feedback 1 crossed); mass density decides it (7, 8); light always bends towards the normal (12, feedback 2 crossed); any speed change bends the ray (10, 11).
- **One idea at a time:** speed in media (2), n (3), its range (4), two calculations (5, 6), optical density (7, 8), the interface ratio (9), direction (10 to 12).
- **Video makes it easier:** the student watches three light pulses race and fall behind (2), watches the speed bars shrink down the table (4), watches the axle swing as one wheel meets the sand (11) and watches the wavefront's steps shorten and the front pivot (11, 12).
- **Response opportunity:** three 3 s predictions (1, 7, 10); two unseen HSC-style tasks, 10 seconds each, every condition on the card, nothing answer-bearing (A2's drawing has no refracted ray). One crossed mistake each; feedback about 31 s and 28 s.
- **Avoided double teaching:** speed set by the medium (v05), light as a wave and c (v13), the normal and wavefronts (v18), velocity as a vector (fa1-v01) recalled in a phrase each.
- **Syllabus coverage:** `ci0eac4a8c`: the speed of light related to n (2 to 4, 7, 8). `ci9bed6630`: n = c/v problems both ways (5, 6, A1). `cibbce5d8e`: the change in velocity at an interface, its speed (9, A1 c, A2 a) and its direction (10 to 12, A2 b), related to the indices.
- **Out of scope by design:** angle calculations and Snell's law (v21); wavelength and frequency (v20); the lab demonstration (v20); total internal reflection (v22).

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "The speed of light in ice is 2.29 × 10⁸ m s⁻¹. Take c = 3.00 × 10⁸ m s⁻¹. (a) Calculate the refractive index of ice. (b) Light passes from the ice into diamond (n = 2.42). Calculate the speed of light in the diamond. (c) Calculate how many times faster light travels in the ice than in the diamond."
Model answer: (a) n = c/v = (3.00 × 10⁸) ÷ (2.29 × 10⁸) = 1.31. (b) v = c/n = (3.00 × 10⁸) ÷ 2.42 = 1.24 × 10⁸ m s⁻¹. (c) v_ice/v_diamond = n_diamond/n_ice = 2.42 ÷ 1.31 = 1.85 (or 2.29 ÷ 1.24 = 1.85), so light travels about 1.85 times faster in the ice. Classic mistake (crossed): "n = v/c = 0.76" (a refractive index is never less than 1).

**Attempt 2 (scene 16; original wording, HSC style, 4 marks suggested).** "A ray of light passes at an angle from glass (n = 1.50) into water (n = 1.33). (a) State whether the light speeds up or slows down, and calculate the factor by which its speed changes. (b) Using wavefronts, explain which way the ray bends at the boundary."
Model answer: (a) Water has the lower refractive index, so light travels faster in it: the light speeds up. v_water/v_glass = n_glass/n_water = 1.50 ÷ 1.33 = 1.13, so the speed increases by a factor of 1.13. (b) The wavefronts meet the boundary at an angle, so one end of each wavefront enters the water first and speeds up first while the rest is still in the glass. The wavefront swings round, and since the ray is at right angles to the wavefront, the ray bends away from the normal. Classic mistake (crossed): "it bends towards the normal, because light always bends towards the normal entering a new medium".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| c | 3.00 × 10⁸ m s⁻¹ | 2 to 6, 9, A1 |
| Hook | n = 1.5; 1.5 times slower; ⅔ c = 2.00 × 10⁸ m s⁻¹ | 1, 3 |
| Table | vacuum 1; air 1.0003; water 1.33; plastic 1.49; glass 1.50; diamond 2.42 (0.41 c) | 4 to 6 |
| Worked example 1 (site `we-1`) | n = 1.49; v = 2.01 × 10⁸ m s⁻¹ | 5 |
| Worked example 2 (site activity 1) | v = 1.97 × 10⁸ m s⁻¹; n = 1.52 | 6 |
| Oil | n ≈ 1.47 (water 1.33) | 7, 8 |
| Interface | water 1.33 to glass 1.50; ratio 1.13; 2.26 and 2.00 × 10⁸ m s⁻¹ | 9 |
| Drawn angles | 40° in, 25.4° in the glass (drawn to scale, not shown) | 11, 12, 18 |
| A1 | ice 2.29 × 10⁸ m s⁻¹, n = 1.31; diamond 1.24 × 10⁸ m s⁻¹; ratio 1.85; wrong 0.76 | 14, 15 |
| A2 | 1.50 to 1.33; factor 1.13; away from the normal | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.00/1.33 = 2.256 (2.26); 3.00/1.49 = 2.013 (2.01); 3.00/1.50 = 2.00; 3.00/2.42 = 1.240 (1.24); 3.00/1.0003 = 2.999; 1/2.42 = 0.413.
- 3.00/1.97 = 1.523 (1.52).
- 1.50/1.33 = 1.128 (1.13).
- A1: 3.00/2.29 = 1.310 (1.31); 2.42/1.31 = 1.847 and 2.29/1.240 = 1.847 (1.85); 2.29/3.00 = 0.763 (0.76).
- Drawn angle: sin⁻¹(sin 40° ÷ 1.50) = 25.37°.

## Memory aid check

- **"n is how many times slower."** Meaning, as said in scene 3 and repeated in 13: n = c/v, so the speed in the medium is the vacuum speed divided by n. Assumptions checked: "slower" means slower than in a vacuum (said in 3, on the table's heading); n ≥ 1 (said in 4), so the phrase never asks for a speed-up from a vacuum; it gives v = c/n directly (5). Second line, "slower light bends towards the normal": true for a ray arriving at an angle (said in 11, with the along-the-normal exception in 10 and 12, and the rule row "along the normal: no bend" on screen and in key note 5). It survives the hard cases: oil versus water (judge by n, 8), glass into water (speeds up, so away, A2). Introduced after the definition, its uses and the cause of bending (3 to 12).
- **Considered, not used:** "light is lazy, it takes the quickest path" (Fermat's principle; true but unexplained at Year 11 and invites "wants to"); a marching band turning onto mud (people; owner rule).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,269 characters**, 19 scenes. Characters per scene (1 to 19): 380, 407, 400, 387, 472, 450, 105, 296, 510, 172, 448, 391, 83, 327, 413, 300, 366, 287, 75. At 13.3 characters per second the speech is about 471 s; add about 14 s of holds and settling (the racing pulses in 2, the table build in 4, the axle runs and wavefront pivot in 11, the far-face pivot in 12, the 2-second memory hold), 9 s for three prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold: **about 570 s**, inside the 5,500 to 6,800 character band and at the 570 s cap. Three syllabus points and the bending cause fill it without padding. If the voiced preview runs long, the first cut is the charged-particles sentence in scene 2 (about 100 characters; the inset stays silent), then the oil prediction (scene 7 becomes one sentence in scene 8, about 60 characters and 3 s saved).

## Scene list and build ids

Lesson key `p-y11-fa2-v19` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v19` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v19` (root to confirm).

In order (kebab-case; 19 scene headings, all `### N.`): hook, speed-in-medium, refractive-index, index-table, worked-plastic, worked-crown-glass, oil-prediction, optically-denser, interface-ratio, normal-prediction, wavefront-turns, leaving-glass, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook, oil-prediction and normal-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v18's last frame continues into scene 1; 1 to 2 board change; 2 to 3 camera continue; 3 to 4 board change; 4 to 5 clear change to the calculation layout; 5 to 6 clear change (working only); 6 to 7 board change; 7 to 8 camera continue; 8 to 9 board change; 9 to 10 board change to the paper; 10 to 11 camera continue, then board change to the axle strips and a camera move to the wavefront; 11 to 12 camera continue; 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook, oil-prediction and normal-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v19-learning-review.md`, `science_check` = `checks/p-y11-fa2-v19-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 3 Nov). Requested earlier, reused by name (uniform scaling only, never stretched):
- v18's `phys-y11-ray-box-v1.png` (scenes 1, 10 to 12, 18).
- v18's `phys-y11-glass-block-v1.png` (scenes 1, 10 to 12, 18).
- v18's `phys-y11-ripple-tank-v1.png` (scene 18 inset only; one plate for the FA2 run, root decision 22).
- **Considered, not used:** a painted diamond (the table's row carries it); a beaker of water (scene 7's oil and water glass is a coded side view, an abstract diagram of layers).

Need (new plate, Codex):
1. `phys-y11-axle-wheels-v1.png`: scene 11. Essential (the turning cause is shown with it; a coded icon would break the owner's plate rule for objects).

Coded: beams, pulses, rays and arrowheads, normals, wavefronts and their steps, the charge inset, the index table and speed bars, the oil and water layers, the concrete and sand strips and track marks, the paper and pencil dots, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a line drawing, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`RayRefract`** (v18's `RayReflect` extended: refracted ray by direction, with a faint reflected ray; angle readouts and the law arrive in v21); **`WavefrontRefract`** (new, physics; crests crossing a straight boundary with per-point step lengths scaled by v₂/v₁, angled and head-on modes; reused in v20 and v21); **index table with speed bars**; **speed ratio strip**; **axle roll** (plate path with rotation driven by the two wheels' speeds).

## Codex asset brief (Year 11 Physics FA2 v19, refractive index)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v19.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v18's ray box and glass block, at least 8 per cent clear margin, no text, labels, numbers, logos, brand names, people, hands, faces, backdrop, ground or shadow. Keep the native aspect; never stretch.

1. **`phys-y11-axle-wheels-v1.png`**: two identical small rubber-tyred wheels joined by a straight metal axle (like a toy cart's axle with no body), seen from directly above, the axle horizontal across the image and the wheels as narrow rounded rectangles at each end, about 1 : 4 wheel width to axle length; plain grey tyres and a silver axle. Sidecar: each wheel's contact-patch centre (left, right) and the axle midpoint (the rotation centre).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every drawn refraction bends the correct way (towards the normal into higher n; away into lower n; none along the normal) and the drawn angles match sin⁻¹(sin 40° ÷ 1.50) = 25.4° where "drawn to scale" is tagged; no angle values appear on screen (v21 owns them).
3. Confirm the physics claims: n = c/v, unitless, n ≥ 1 for these media; v₁/v₂ = n₂/n₁; optical density is not mass density (oil about 1.47 and less dense than water); the wavefront-turning explanation; the interaction-with-charges sentence is a fair Year 11 simplification (author note a).
4. Confirm no person, hand, eye, face or body outline appears in any scene, card or plate (owner instruction).
5. Confirm the memory aid's conditions (slower than in a vacuum; at an angle) are spoken or on screen.
6. Confirm both attempt questions are original in wording, carry every condition, and show nothing answer-bearing.
7. Confirm the syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1, 2 and 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only; item 3 is a non-correction).

## YouTube metadata (draft)

Title: Refractive Index: How Much Does a Material Slow Light? | Year 11 Physics

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson15.sa.html

A beam of light slows down and bends as it enters glass. How much does a material slow light, and how does one number measure it? Learn the refractive index, n = c/v, and what it means: how many times slower light travels than in a vacuum. Calculate speeds and indices both ways, find out why oil slows light more than water even though it floats, relate the change in speed at a boundary to the two refractive indices, and see why the wavefront turns, bending towards the normal when light slows and away when it speeds up. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Relate the velocity of light to the refractive index of a medium" (ci0eac4a8c)
"Solve refractive index problems using nₓ = c/vₓ, where nₓ is the refractive index of the medium and vₓ is the speed of light in the medium" (ci9bed6630)
"Relate the change in velocity of a light wave crossing an interface to differences between refractive indices" (cibbce5d8e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: The law of reflection (previous video). Next: Refraction investigation.

#Year11Physics #Physics #Waves #Refraction #HSCScience

## Open decisions

- **1. Bending direction here (root).** `cibbce5d8e` says "change in velocity", so the direction change (qualitative: towards, away, none along the normal) is taught here with the wavefront cause; v21 then quantifies it with the same wavefront picture. Root to confirm; if the direction moves to v20, scenes 10 to 12 (about 1,100 characters) move with it and this video would fall below 5,500.
- **2. Three in-teaching predictions.** The hook, oil and along-the-normal predictions are all 3 s; root to confirm all three stay (the oil prediction is the first cut if the review finds the middle crowded; the surprise then becomes a statement in scene 8).
- **3. Axle plate.** One new plate for the analogy; root to confirm (the alternative, a coded icon, breaks the plate rule for objects).
- **4. Scene count.** 19 scenes (one more than v18) because the oil surprise is a prediction and answer pair; root to confirm.
- **5. Site link form.** As v10.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v05, v13 and v18 at Year 11 entry; check that "how many times slower" lands before the table; that the c's cancelling in 9 is followable at speaking pace; that the axle-to-wavefront step in 11 is read as the same cause; that the rule rows in 12 keep the along-the-normal exception; that the cards give nothing away), then the Codex physics check and error check.
- The racing pulses (2), the shrinking bars (4), the axle runs (11) and the wavefront pivots (11, 12) carry the explanation; judge them at playback speed in the voiced preview.
