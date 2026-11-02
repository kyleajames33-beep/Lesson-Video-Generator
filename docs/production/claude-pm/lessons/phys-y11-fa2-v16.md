# Year 11 Physics FA2 V16 (Physics 2025, Year 11, Focus Area 2): Why does light get dimmer so quickly as you move away from the source? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v16`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (torch); reused: v13's filament lamp, v15's shielded gamma source, v11's metre rule and v17's light meter and sensor head (requested in v17; handoff only).

Narration 5,923 characters, 17 scenes, about 543 s (9.1 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: sixteenth video of the Year 11 Physics (2025) Focus Area 2 route and the fourth of the light videos. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); house conventions and the FA2 and light colour keys from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v15.md` (Revision 1; v15 written just before this one, its scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson13.sa.html` (orient with the warm-up sphere prediction and the 1 m to 3 m hook; intentions and key terms; misconceptions; card 1 why light thins out, the 4πd² sphere and the d to 2d patch figure; card 2 solving with I₁d₁² = I₂d₂² and `we-1`; activity 1 design and solve; card 3 the distance-intensity graph; independent practice Q1 to Q3; retrieve). Card 3, activity 1 part (1), the odd-one-out and Q3 belong to v17 (the investigation); everything else is used here. Route entry: `phys-y11-fa2-v16` in `../../phys-y11-video-route.json` (route-approved by root, 2 Nov). Route start: "Start with The Inverse Square Law for Light. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply the inverse square law for light? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v17: Does measured light intensity follow an inverse square relationship?".

**Opening frame (v15's actual handoff, Revision 1, 2 Nov).** v15's scene 16 ends with the memory line "Size, punch, and what stops it." small at the top; the filament lamp plate (`phys-y11-filament-lamp-v1.png`) alone at the left of a dark board, glowing; coded light spreading from it through two square frames at "1 m" and "2 m", the second with four times the area and visibly dimmer (tag "same light, spread wider"); chips "how much dimmer?" and "Next: Why does light get dimmer so quickly as you move away from the source?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, hands, faces or bodies (the torch lies on a table; the gamma source is said to be handled "from a distance", with coded distance rings and no person or tongs); apparatus and objects painted; light, spheres, photon dots, patches, graphs and readouts coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v13 to v15 recalled in a sentence at most.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 2, group "Light and sound"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON in linear form:

- P25-FA2-G2-09 `ci297a0581`: "Solve problems involving the inverse square law using I α 1 r 2 and I 1 r 1 2 = I 2 r 2 2 to compare the intensity of light at points r 1 and r 2"
- P25-FA2-G2-10 `ci68035e55`: "Explain the relationship between distance and radiation intensity from a point source"

Typographic rendering (root decision 11): "I α 1/r² and I₁r₁² = I₂r₂²". The NESA MathML writes the proportionality sign as the Greek letter α (its aria label reads "I alpha"); on screen in teaching the video uses the proportionality sign ∝, read "is proportional to" (open decision 2).

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v15's handoff (above); intensity as the power landing on each square metre (W m⁻²), with power as energy each second; a point source; light leaving in straight lines and filling a growing sphere, none lost in clear space; counting light through a square at 1 m, 2 m and 3 m (36, 9, 4 per square: the site's quick-check numbers); the sphere's area 4πr², I = P ÷ 4πr², I ∝ 1/r²; why the dimming is fast close to the source and slow far away; I r² is the same at every point, so I₁r₁² = I₂r₂²; the site's worked example (find an intensity); finding a distance (the square root step); the law's conditions (a point source spreading equally in all directions, far compared with its size, nothing absorbing or reflecting on the way; a torch beam as the counter-example); the same law for other radiation from a point source (gamma rays: distance as protection). Stops at "twice as far, a quarter of the light" with its conditions. Not taught: measuring intensity or the I against 1/r² graph (v17); lux and light meters (v17); inverse square laws for gravity, electric fields or sound (later; one grey tag only); absorption in materials (v15 owns it); dose units.

## Decisions

- **Learner question (root decision 17, entered in the route).** "Why does light get dimmer so quickly as you move away from the source?" It is v15's handoff chip. The answer, built in order: brightness is measured as intensity, power per square metre (2); the light fills a growing sphere and none is lost, so the same power is shared over more area (3); twice as far, the same light covers four squares, so a quarter each (4); the sphere's area grows with r², so I ∝ 1/r², and that square is why it fades so quickly near the source (5); so I r² is fixed for one source (6); the numbers (7 to 9); the law's conditions, and other radiation (10).
- **The hook (v15's frame, made a prediction).** "You're twice as far from the lamp. So is the light half as bright?" 3 s prediction with chips "half?", "a quarter?", "a third?". v15's frame already shows the second frame with four times the area, but nothing quantitative was said; the prediction asks for the brightness, not the area, which is the site's misconception 1 ("Doubling the distance from a lamp halves its brightness"). Answered by counting in 4.
- **The cause made visible (owner quality bar).** (3) **`SphereSpread`**: three nested translucent coded spheres around the filament at 1 m, 2 m and 3 m (drawn shrunk, with a grey tag "not to scale"); gold photon dots stream outward along straight radial lines at a steady rate; a counter on each sphere reads the same number crossing it each second ("same light through every sphere"); a hollow gold energy arrow labelled "power P" leaves the lamp. (4) **`InverseSquareCone`**: a pyramid of straight lines from the filament through a 1 m × 1 m square at 1 m carrying 36 gold dots per second; the same lines continue to 2 m, where the patch is a 2 × 2 grid of squares with 9 dots each, and to 3 m, a 3 × 3 grid with 4 dots each; each square's brightness is drawn in proportion to its dot count. (5) The formula builds from the sphere, then a coded graph of I against r falls steeply near the lamp and flattens far away, with two highlighted steps: 1 m to 2 m ("−75%") and 10 m to 11 m ("−17%"). (6) I × r² readouts on each sphere: "36 × 1² = 36", "9 × 2² = 36", "4 × 3² = 36". (10) A torch's beam drawn as a narrow cone with its patch shrinking far less with distance; the gamma source with coded distance rings, its intensity readout quartering at twice the distance.
- **Intensity, with its plain meaning (site key term).** "Intensity is the power landing on each square metre of a surface. So it's measured in watts per square metre." Power is glossed "the energy it sends out each second, in watts" (FA1 energy videos introduced energy in joules; power is said as a plain meaning, open decision 3). Brightness as we see it is said to follow intensity, without lux (v17 introduces the light meter's unit).
- **Point source, with its condition (site key term, corrected; site correction 3).** "A source so small, compared with our distance from it, that we can treat it as a single point, sending light equally in every direction." The site's "small enough to treat as a single point" omits "compared with the distance", which is the condition that matters in v17.
- **Why it fades "so quickly" (the question's word, answered literally).** The square makes the early steps large: 1 m to 2 m loses three quarters of the intensity, while 10 m to 11 m loses about a sixth (1 − (10/11)² = 0.174). Said and shown on the I against r graph.
- **Analogy (one, meaningful).** "It's like one tin of paint spread over a bigger and bigger ball. The same paint, but a thinner coat." It carries the misconception "light runs out" (site misconception 2): the paint (power) is all still there. Its limit is stated by the condition in 10 (the paint has to cover the whole ball evenly, so a beam that goes one way breaks it).
- **Worked example 1 (site `we-1`, numbers unchanged, tagged "teaching values").** 80 W m⁻² at 2.0 m; at 5.0 m: I₂ = 80 × 2.0² ÷ 5.0² = 12.8 W m⁻², "about 13" (two significant figures). Check by ratio: 2.5 times as far, 6.25 times less. The site's intensities imply kilowatt lamps (author note b; site correction 2); the video keeps the site's numbers with the grey tag "teaching values", as fa1-v30 did (root decision 25 of the FA1 v13 to v24 file).
- **Prediction 2 (3 s, scene 8).** "You want light four times as intense. How much closer do you need to be?" Chips "a quarter of the distance?", "half the distance?". Answer: half; a factor of 4 in I needs a factor of 2 in r. Leads straight into finding a distance.
- **Worked example 2 (original; realistic values).** A lamp gives 7.2 W m⁻² at 1.0 m (about a 90 W radiator, author note b); where is it 0.80 W m⁻²? r₂ = r₁ √(I₁ ÷ I₂) = 1.0 × √9 = 3.0 m. The classic slip (forgetting the square root: 9 m) is said in a sentence.
- **Conditions (`ci68035e55` "from a point source"; site Q2's assumption).** Spreads equally in all directions (a torch's reflector squeezes the light into a beam, so near the torch it dims much more slowly than the law predicts); far away compared with the source's size; nothing absorbing or reflecting on the way. Kept in learner copy because dropping them would teach that every light source obeys the law.
- **Other radiation (`ci68035e55` "radiation intensity").** One sentence: double your distance from a gamma ray source and its intensity drops to a quarter, so distance is one of the best protections. v15's shielded gamma source plate with coded rings. No person, no tongs. A grey tag "the same 1/r² pattern appears for other spreading effects later in the course" (site's "where this sits": gravity and electric fields; no detail).
- **Attempts (original, HSC style).** (A1, find an intensity, tripled distance) A small lamp: 24 W m⁻² at 0.50 m; find the intensity at 1.5 m and explain why it is not 8.0 W m⁻². 2.7 W m⁻²; three times as far spreads the light over nine times the area. Crossed: "three times as far, a third: 8.0 W m⁻²". (A2, a ratio of distances, the Sun) Sunlight at Earth 1.36 × 10³ W m⁻²; Mars 1.52 times as far: 589 W m⁻² (5.89 × 10² W m⁻²); assumption: the Sun radiates equally in all directions and almost nothing absorbs the light in between. Crossed: "1.36 × 10³ ÷ 1.52 = 895 W m⁻²" (dividing by the ratio without squaring).
- **Mistake scene:** none separate. "Twice as far, half as bright" (1, 4; site misconception 1); "light runs out with distance" (3, the paint analogy; site misconception 2); "every source obeys the law" (10, the torch); "forgetting the square root when finding a distance" (9); "dividing by the distance ratio, not its square" (A1 and A2 crossed).
- **Memory aid:** "Twice as far, a quarter of the light." (see "Memory aid check").
- **Handoff (route next).** The filament lamp on a bench at the left, low; the light meter body and sensor head plates (`phys-y11-light-meter-v1.png`, `phys-y11-light-sensor-head-v1.png`, v17's requests), the head on the metre rule plate at 0.20 m, the meter's screen showing "?"; above, a dashed grey curve "model prediction: I ∝ 1/r²"; chip "prediction ≠ measurement"; then "Next: Does measured light intensity follow an inverse square relationship?". This is the frame v17 opens on.
- **Site sources used:** intro and hook (1 m to 3 m: a ninth, scene 4); warm-up (the sphere's area doubling prediction: scenes 1, 4); learning intentions (Know, Understand, Can Do 1 and 2; Can Do 3 to v17); key terms (intensity, point source with correction 3, inverse square law, the working form: 2, 5, 6); misconceptions 1 and 2 (1, 3, 4); card 1 and its figure (3 to 5); card 1 check (B, a quarter: 4); card 2 and `we-1` (6, 7); quick check (36 at 1.0 m, 4.0 at 3.0 m: the dot counts in 4 and 6); activity 1 part (2) (security light: not used, A1 is original); two truths, one lie (C, doubling halves: 1, 4); Q1 (5, 7: explanation plus calculation is A1's structure); Q2 (the assumption: 10, A2 (b)). Not used here: card 3, activity part (1), the odd one out and Q3 (v17).
- **Site corrections (quoted from site lesson 13, read 2 Nov; for `../site-corrections-phys-y11.md`; none of these rows is logged yet):**
  1. Throughout (intro, key terms, card 1, card 2, `we-1`, Q1 to Q3): "$I_1 d_1^2 = I_2 d_2^2$" and "$I \propto 1/d^2$". The 2025 syllabus point writes the distance as r (r₁ and r₂), and exam questions will use r. Suggest r throughout, or one line: "the syllabus writes the distance as r".
  2. `we-1` ("80 W m⁻² at a distance of 2.0 m"), activity 1 ("a security light reads 200 W m⁻² at 1.5 m"), Q1 ("120 W m⁻² at a distance of 3.0 m") and Q2 ("180 W m⁻² at 2.0 m from a small lamp"). For a point source P = I × 4πr², so these imply lamps radiating about 4.0 kW, 5.7 kW, 13.6 kW and 9.0 kW of light; a 100 W filament bulb radiates about 95 W in total, about 7.6 W m⁻² at 1 m. The arithmetic is right; the values are unrealistic. Suggest tagging them "teaching values" or scaling them down (for example 8.0 W m⁻² at 2.0 m).
  3. Key terms: "Point source: A source small enough to treat as a single point radiating equally in all directions." The condition is relative: a source is a point source when it is small compared with the distance to it (a bulb is not a point source 2 cm away). Suggest: "A source whose size is small compared with the distance to it, so it can be treated as a single point radiating equally in all directions."
  - Checked and correct: card 1 (I = P ÷ 4πd²; double: a quarter; triple: a ninth); the figure (d: A; 2d: 4A); card 2 (Id² the same at every distance); `we-1` (80 × 4.0 ÷ 25 = 12.8 = 13 W m⁻²); quick check (36 ÷ 9 = 4.0, answer B); two truths, one lie (C is the lie); Q1 (120 × 9 ÷ 81 = 13 W m⁻²) and Q2 (180 × 4.0 ÷ 36 = 20 W m⁻², with the point-source, no-absorption and square-on assumptions); misconception 2 ("total light energy is conserved"). Card 3's "confirms" belongs to v17's log.
- **Cause chain taught, in order:** (1) twice as far: half? (1); (2) intensity is power per square metre (2); (3) the same light crosses every sphere; none is lost (3); (4) twice as far, four squares, a quarter each; three times, nine squares (4); (5) the sphere's area 4πr², so I ∝ 1/r²; the square makes the fade fast near the source (5); (6) I r² is fixed, so I₁r₁² = I₂r₂² (6); (7) an intensity (7); (8) a distance, with the square root (8, 9); (9) conditions; other radiation (10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Science (energy; light travels in straight lines); Stage 5 Mathematics (squares and square roots, rearrangement; the surface area of a sphere is met as a given formula, said once). From FA2, recalled in a line at most: v13 (light carries energy across empty space), v14 (light as photons, gold dots here), v15 (absorption depends on the material; the gamma source). Power is given its plain meaning (open decision 3).
- **Learner-visible vocabulary (plain meaning at first use):** power (the energy a source sends out each second, in watts, scene 2); intensity (the power landing on each square metre, in watts per square metre, scene 2); point source (a source so small, compared with our distance from it, that we treat it as a single point sending light equally in every direction, scene 2); proportional to (if one changes by some factor, the other changes by the same factor, scene 5, screen gloss); inverse square law (intensity is proportional to one over the distance squared, scene 5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`); `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx` for the I against r curve.
- **New explainer motion (coded unless a plate is named):** **`SphereSpread`** (new, physics; reused in v17's hook: nested translucent spheres at set radii around a source point, photon dots streaming radially at a constant rate, a per-sphere crossing counter that stays equal, an optional coat-thinning shade); **`InverseSquareCone`** (new, physics: a square pyramid of lines from the source through 1 × 1, 2 × 2 and 3 × 3 grids at r, 2r, 3r, with a fixed dot count shared among the squares and each square's brightness proportional to its share); v14's **`PhotonPacket`** dots (gold); the I against r curve with two highlighted steps; **I r² readouts** pinned to each sphere; **torch beam cone** (a narrow cone from the torch plate whose patch area grows far more slowly than r²); **distance rings** (coded concentric rings round the gamma source, each ring's intensity readout); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a line drawing; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the lamp at the left; spheres, cones and patches across the middle; the formula and readouts down the right edge; working in the lower third.
- **Colour key:** photons gold dots (v14); energy leaving the lamp a hollow gold arrow (FA2 key 3); intensity readouts gold; distances ink dimension lines with labels; givens navy; working ink; the model curve dashed grey "model prediction" (handoff); crossed items muted red.
- **No human figures.** No person, hand, eye or face; the torch lies on a table; "you" is a grey chip at a position, never a figure.
- **Author notes (not learner copy):**
  (a) Hook and counts: the 36 dots per second through 1 m² at 1 m are a counting device (tag "counting light, not to scale"); 36 ÷ 4 = 9 per square at 2 m, 36 ÷ 9 = 4 per square at 3 m; these match the site's quick check (36 W m⁻² at 1.0 m, 4.0 W m⁻² at 3.0 m) without its units.
  (b) Realism: P = 4πr² I. Site `we-1`: 4π × 2.0² × 80 = 4.0 × 10³ W. Worked example 2: 4π × 1.0² × 7.2 = 90 W (a 100 W filament bulb radiates about 95 W, mostly infrared, so about 7.6 W m⁻² at 1 m). A1: 4π × 0.50² × 24 = 75 W. Sunlight at Earth 1.36 × 10³ W m⁻² (the solar constant, about 1361 W m⁻²).
  (c) Fast near, slow far: (1 − (1/2)²) = 0.75; (1 − (10/11)²) = 0.174, said "about a sixth" (0.167).
  (d) I r² = P ÷ 4π for an isotropic point source with no absorption; I₁r₁² = I₂r₂² follows for any two points; r₂ = r₁ √(I₁ ÷ I₂).
  (e) Torch: a reflector or lens produces a beam whose cross-section grows much more slowly than r² near the torch; far away the beam behaves like a point source placed behind the torch (the inverse square law holds from that virtual point). Said only as "near the torch it dims much more slowly". A laser is the extreme case (not mentioned).
  (f) Gamma: a gamma source small compared with the distance obeys the inverse square law in air at these distances (absorption in air is small); dose rate falls as 1/r² (the "distance" principle of radiation protection, with time and shielding). The video names only distance.
  (g) Sun as a point source: at 1.5 × 10¹¹ m the Sun (radius 7.0 × 10⁸ m) is small compared with the distance; Mars's mean distance is 1.52 times Earth's (1.524 AU); 1.36 × 10³ ÷ 1.52² = 588.6 W m⁻² (real mean value about 586 W m⁻²).
  (h) Pronunciations: "four pi r squared"; "I one r one squared equals I two r two squared"; "one point three six times ten to the three"; "five hundred and eighty-nine".

Main question: *Twice as far from a lamp, is the light half as bright? Why does light get dimmer so quickly as you move away from the source?*
Entry knowledge (Stage 5 energy, squares and square roots; v13 light carries energy; v14 photons; v15 the gamma source).
Stops after: intensity and a point source; the sphere and the square counting; I ∝ 1/r² with the reason for the fast fade; I₁r₁² = I₂r₂² for an intensity and for a distance; the conditions; other radiation. No measurement, no lux, no graph of I against 1/r².
Handoff: v17, the light intensity investigation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (twice as far, half as bright?)
> Every region of the spectrum has its job, but distance changes what any source can do. Here's a lamp. Its light passes through this frame, one metre away, and then through this bigger frame, two metres away. You're twice as far from the lamp. So is the light half as **bright**?

Visual: opens on v15's last frame (the memory line small at the top; the lamp at the left; the two square frames at "1 m" and "2 m" with the tag "same light, spread wider"; chips "how much dimmer?" and "Next"). The "Next" chip becomes the heading: "The inverse square law for light"; the memory line fades. On "one metre away" the first frame pulses with a dimension line "1 m" from the filament; on "two metres away" the second, "2 m". A grey chip "you" slides from the first frame to the second. On "bright" chips "half?", "a quarter?", "a third?" and a 3-second countdown ring.

### 2. intensity: power on each square metre
> To answer that, we need to measure brightness properly. The lamp sends out energy as light at a steady rate. That rate is its power, the energy it sends out each second, in watts. Intensity is the power landing on each square metre of a surface. So it's measured in watts per square **metre**. We'll treat the lamp as a point source. That means it's so small, compared with our distance from it, that we can treat it as a single point, sending light equally in every **direction**.

Visual: the frames fade; the lamp stays. A hollow gold energy arrow leaves the lamp, tag "power P: energy each second (W)" (gloss "power: the energy a source sends out each second, in watts"). A coded 1 m × 1 m square patch sits at the right, face-on; gold dots land on it each second; on "metre" a readout "intensity I = power on each square metre (W m⁻²)" (gloss "intensity: the power landing on each square metre"). On "point source" the lamp's filament shrinks to a dot as the camera pulls back (tag "small compared with the distance"); on "direction" short gold lines radiate evenly from the dot all round (gloss "point source: so small, compared with our distance, we treat it as one point sending light equally every way").

### 3. the same light through every sphere
> Picture the light leaving the lamp. It travels outward in straight lines, in every direction, so it fills a growing sphere. Every bit of light that crosses a sphere one metre out goes on to cross a sphere two metres out. None of it is lost in clear air. It's just shared over more area. It's like one tin of paint spread over a bigger and bigger ball. The same paint, but a thinner **coat**.

Visual: camera continue. `SphereSpread`: three nested translucent spheres appear round the filament dot at "1 m", "2 m" and "3 m" (tag "not to scale"). Gold photon dots stream outward along straight radial lines at a steady rate. On "crosses a sphere" a counter on each sphere reads "crossing each second: 36" on all three (tag "counting light, not to scale", author note a). On "None of it is lost" the hollow gold arrow "P" passes through all three spheres unchanged. On "paint" each sphere takes a gold coat whose shade thins from the inner sphere to the outer (tag "same paint, thinner coat"). On "coat" a chip "light runs out with distance" fades in and is crossed.

### 4. counting: why a quarter
> Now let's count. Take the light passing through a one metre square, one metre from the lamp. Say thirty-six bits of light each second. Follow those same straight lines out to two metres. They've spread twice as wide and twice as tall, so they cover four squares. Each square gets nine. That's a quarter. So twice as far gives a quarter of the intensity, not **half**. At three metres, the patch is three times as wide and three times as tall. That's nine squares, and each gets just **four**. A ninth.

Visual: board change: side-on perspective. `InverseSquareCone`: four straight lines from the filament dot through the corners of a 1 m × 1 m square at "1 m"; 36 gold dots pass through it each second (counter "36"). On "two metres" the lines continue to a 2 × 2 grid at "2 m"; dimension lines "2 m wide" and "2 m tall"; the 36 dots share out, 9 per square, each square drawn a quarter as bright (readouts "9" in each). On "half" the hook's "a quarter?" chip ticks; "half?" takes a scribble cross. On "three metres" a 3 × 3 grid at "3 m", 4 dots per square, each square a ninth as bright; on "four" readouts "4" in each square and a row "36 ÷ 9 = 4: a ninth".

### 5. the law, and why it fades so quickly
> The whole sphere works the same way. A sphere's surface area is four pi r squared, where r is the distance from the source. So the intensity is the power, spread over four pi r squared. Double r, and the area is four times bigger. So intensity is proportional to one over r squared, the inverse square law. Inverse, because further means less. Square, because the area grows with the distance squared. And that's why light dims so quickly near a lamp. From one metre to two loses three quarters of the intensity. But from ten metres to eleven loses only about a **sixth**.

Visual: the spheres return small at the left. Rows at the right, one per cue: "area of a sphere = 4πr²" (the 2 m sphere pulses, a dimension line "r"); "I = P ÷ 4πr²"; on "proportional" boxed "I ∝ 1/r²" (gloss "∝: is proportional to. If one changes by some factor, the other changes by the same factor"; tag "inverse square law"). On "Inverse" and "Square" the "1/" and the "²" pulse in turn. On "dims so quickly" a coded graph "I against r" draws in the lower third (curve from r = 1 m to 12 m, I in units of the 1 m value): it falls steeply then flattens; on "one metre to two" a step from 1 to 2 m highlights, "−75%"; on "sixth" a step from 10 to 11 m highlights, "−17%".

### 6. comparing two points
> In problems, we usually don't know the power, but we don't need it. Intensity times r squared equals the power over four pi, so it's the same at every point around the same source. So at any two points, I one r one squared equals I two r two **squared**. Know three of those four values, and you can find the **fourth**.

Visual: the three spheres return; I r² readouts pin to each: "36 × 1² = 36", "9 × 2² = 36", "4 × 3² = 36" (author note a: the counting units). A row "I r² = P ÷ 4π: the same for one source". On "squared" boxed equation strip "I₁r₁² = I₂r₂²", with the 1 m and 2 m readouts sliding into the "1" and "2" slots. On "fourth" the four symbols pulse in turn.

### 7. worked example: the intensity further away
> Let's try one. Task: a lamp gives an intensity of eighty watts per square metre at two point oh metres. Find the intensity at five point oh metres. Rearranged, I two is I one r one squared, over r two squared. That's eighty times two point oh squared, over five point oh squared. Eighty times four is three hundred and twenty, and over twenty-five that's twelve point eight, about thirteen watts per square **metre**. Check: two and a half times as far, so six and a quarter times less. Eighty over six point two five is twelve point eight **again**.

Visual: clear change to the calculation layout. Task strip "Find I₂ at 5.0 m". Equation strip "I₁r₁² = I₂r₂²", then "I₂ = I₁r₁² ÷ r₂²". Givens group (navy): "I₁ = 80 W m⁻²; r₁ = 2.0 m; r₂ = 5.0 m" (grey tag "site example, teaching values"). A small sketch at the right: the lamp dot with two distance marks "2.0 m" and "5.0 m". Rows, one per cue: "I₂ = 80 × 2.0² ÷ 5.0²"; "= 320 ÷ 25"; on "metre" "= 12.8 ≈ 13 W m⁻²", boxed. On "Check" a grey check row: "5.0 ÷ 2.0 = 2.5; 2.5² = 6.25; 80 ÷ 6.25 = 12.8" with a tick on "again".

### 8. prediction: four times as bright
> Now the other way. You want light four times as intense. How much closer do you need to **be**?

Visual: the sketch enlarges: the lamp dot and a grey chip "you" at a distance mark "r"; a readout "I" beside it, then a target readout "4 × I". On "be" chips "a quarter of the distance?", "half the distance?" and a 3-second countdown ring.

### 9. worked example: finding a distance
> Half the distance. Intensity depends on r squared, so four times the intensity needs only half the distance. Now with numbers. Task: a lamp gives seven point two watts per square metre at one point oh metre. How far away is the intensity zero point eight oh? Rearranged, r two is r one times the square root of I one over I two. Seven point two over zero point eight is nine, and the square root of nine is three. So r two is three point oh **metres**. Don't forget the square root. Without it you'd say nine metres, which is far too **far**.

Visual: on "Half" the "half the distance?" chip ticks; the chip "you" slides from "r" to "r ÷ 2", the readout rising to "4 × I" (row "(½)² = ¼, so I × 4"). Clear change to the calculation layout. Task strip "Find r₂ where I₂ = 0.80 W m⁻²". Equation strip "I₁r₁² = I₂r₂²", then "r₂ = r₁ √(I₁ ÷ I₂)". Givens group (navy): "I₁ = 7.2 W m⁻²; r₁ = 1.0 m; I₂ = 0.80 W m⁻²". Rows: "I₁ ÷ I₂ = 7.2 ÷ 0.80 = 9"; "√9 = 3"; on "metres" "r₂ = 1.0 × 3 = 3.0 m", boxed. On "far" a chip "r₂ = 9 m (no square root)" fades in and is crossed.

### 10. when the law works
> The law has conditions. The source must spread its light equally in every direction, like a bare bulb. A torch doesn't. Its mirror squeezes the light into a beam, so near the torch, it dims much more slowly than the law predicts. You also need to be far away, compared with the size of the source, and nothing can absorb or reflect the light on the way. The same law works for other radiation from a point source. Double your distance from a gamma ray source, and its intensity drops to a quarter. That's why distance is one of the best **protections**.

Visual: board change: a conditions list writes at the right as spoken: "spreads equally in every direction", "far away compared with the source's size", "nothing absorbs or reflects on the way". On "A torch" the torch plate (`phys-y11-torch-v1.png`) lies on a coded table at the left; a narrow coded beam cone leaves it; patches at two distances along the beam barely grow (tag "a beam, not a sphere"), and a chip "every light source obeys 1/r²" fades in and is crossed. On "far away" the filament lamp returns with a zoom ring: a grey chip "you" very close to the bulb, where the glowing filament and glass are large compared with the gap (tag "too close: not a point"). On "gamma ray source" board change: v15's shielded gamma source plate (`phys-y11-gamma-source-v1.png`) at the left; coded distance rings at "1 m" and "2 m" with intensity readouts "I" and "I ÷ 4". On "protections" a grey tag "distance: one of the best protections from radiation" and a small grey tag "the same 1/r² pattern returns later in the course".

### 11. memory aid
> So remember. Twice as far, a quarter of the light. Three times as far, a ninth. That's for a point source, with nothing in the **way**.

Visual: the 2 × 2 and 3 × 3 grids from scene 4 return small. The handwritten line writes large: "Twice as far, a quarter of the light." Under it, smaller: "three times as far: a ninth. Point source, nothing in the way." On "quarter" the 2 × 2 grid pulses; on "ninth" the 3 × 3 grid. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A small lamp gives an intensity of twenty-four watts per square metre at zero point five oh metres. Calculate the intensity at one point five metres. Then explain why the answer isn't eight watts per square metre. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with an HSC-style line drawing (a small lamp at the left, two marked points on a line at "0.50 m" and "1.5 m"; no rays or patches): "A small lamp can be treated as a point source. The light intensity 0.50 m from the lamp is 24 W m⁻². (a) Calculate the light intensity 1.5 m from the lamp. (b) Explain why the intensity at 1.5 m is not 8.0 W m⁻². (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> I two is twenty-four times zero point five oh squared, over one point five squared. That's two point seven watts per square **metre**. One point five metres is three times as far, so the light spreads over nine times the area, and you get a ninth, not a **third**. Eight comes from dividing by three and forgetting to **square**.

Visual: card shrinks to the top; "0.50 m" and "1.5 m" underlined. Rows: "I₂ = I₁r₁² ÷ r₂² = 24 × 0.50² ÷ 1.5²"; on "metre" "= 6.0 ÷ 2.25 = 2.7 W m⁻²", boxed "(a)". On "third" "(b) 1.5 ÷ 0.50 = 3; area × 3² = 9; I ÷ 9", with a small 3 × 3 grid. On "square" a chip "three times as far, a third: 8.0 W m⁻²" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Sunlight at Earth has an intensity of one point three six times ten to the three watts per square metre. Mars is one point five two times as far from the Sun as Earth is. Calculate the intensity of sunlight at Mars, and state one assumption you made. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with an HSC-style line drawing (a circle "Sun" at the left, two small circles "Earth" and "Mars" further along one line; no distances or rays): "The intensity of sunlight at Earth's distance from the Sun is 1.36 × 10³ W m⁻². Mars is 1.52 times as far from the Sun as Earth is. (a) Calculate the intensity of sunlight at Mars's distance from the Sun. (b) State one assumption your calculation relies on. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> I at Mars is one point three six times ten to the three, over one point five two squared. That's about five hundred and eighty-nine watts per square **metre**. The assumption: the Sun sends light out equally in all directions, and almost nothing absorbs it on the **way**. Dividing by one point five two without squaring gives eight hundred and ninety-five. That's the classic **slip**.

Visual: card shrinks to the top; "1.52 times as far" underlined. Rows: "I_Mars = I_Earth × (r_E ÷ r_M)² = 1.36 × 10³ ÷ 1.52²"; on "metre" "= 1.36 × 10³ ÷ 2.31 = 589 W m⁻² (5.89 × 10² W m⁻²)", boxed "(a)". On "way" boxed "(b) the Sun radiates equally in all directions; nothing absorbs the light in between". On "slip" a chip "1.36 × 10³ ÷ 1.52 = 895 W m⁻²" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So light dims quickly because the same power spreads over a sphere, and the sphere's area grows with the distance squared. That's the model. But a real lamp isn't a perfect point, and a real room isn't perfectly dark. Does measured light really follow the inverse square **law**?

Visual: the memory line returns small at the top. Board change: a dark bench; the filament lamp at the left, low, glowing; the metre rule plate (`phys-y11-metre-rule-v1.png`, v11) along the bench from the filament; the light sensor head plate (`phys-y11-light-sensor-head-v1.png`, v17's request) on the rule at "0.20 m" and the light meter body (`phys-y11-light-meter-v1.png`, v17's request) on the bench beside it, its screen showing "?". Above the bench a dashed grey curve "model prediction: I ∝ 1/r²" over a distance axis. On "law" chips "prediction ≠ measurement" and then "Next: Does measured light intensity follow an inverse square relationship?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Intensity I: the power landing on each square metre, in W m⁻². Point source: small compared with the distance to it, sending light equally in all directions.
2. The same power spreads over a sphere of area 4πr², so I = P ÷ 4πr² and I ∝ 1/r². Twice as far: a quarter. Three times as far: a ninth.
3. For two points from the same source: I₁r₁² = I₂r₂². To find a distance: r₂ = r₁ √(I₁ ÷ I₂).
4. Conditions: a point source spreading equally in all directions (not a torch beam), far away compared with its size, nothing absorbing or reflecting on the way. It works for other radiation too, such as gamma rays.

Memory aid (large, on the notes screen): *Twice as far, a quarter of the light.* Second line: *point source, nothing in the way.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why light dims with distance: the same power is shared over a growing sphere, none lost (3, shown with equal counters and the thinning coat). Why a quarter at twice the distance: the patch is twice as wide and twice as tall, four squares (4, counted). Why the square: a sphere's area grows with r² (5). Why it fades so quickly near the lamp: the square makes early steps large (5, the two highlighted steps). Why I₁r₁² = I₂r₂²: I r² is P ÷ 4π, fixed for one source (6). Why a torch is an exception: its light goes into a beam, not a sphere (10). Why distance protects from gamma rays: the same spreading (10).
- **Misconceptions addressed:** twice as far, half as bright (1, 4); light runs out (3); all sources obey the law (10); forgetting the square root (9); dividing by the ratio without squaring (A1 and A2 crossed).
- **One idea at a time:** intensity (2), spreading (3), counting (4), the law (5), the working form (6), one calculation per scene (7, 9), conditions (10).
- **Video makes it easier:** the student watches equal numbers of photons cross every sphere (3), counts 36, 9 and 4 per square (4), watches the I against r curve's big early drop (5) and sees the I r² readouts stay at 36 (6).
- **Response opportunity:** two 3 s predictions (1, 8); two unseen HSC-style tasks, 10 seconds each, every given on the card, nothing answer-bearing (the drawings carry no rays, grids or distances beyond the givens). One crossed mistake each; feedback about 24 s and 28 s.
- **Avoided double teaching:** photons (v14), absorption by materials (v15) and the gamma source (v15) recalled in a phrase each.
- **Syllabus coverage:** `ci297a0581`: I ∝ 1/r² (5) and I₁r₁² = I₂r₂² (6, 7, 9, A1, A2) to compare intensities at two points. `ci68035e55`: the relationship between distance and intensity from a point source explained (3 to 5) with its conditions (10) and for other radiation (10).
- **Out of scope by design:** measurement and the I against 1/r² graph (v17); lux (v17); other inverse square laws (later; one tag); dose units.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A small lamp can be treated as a point source. The light intensity 0.50 m from the lamp is 24 W m⁻². (a) Calculate the light intensity 1.5 m from the lamp. (b) Explain why the intensity at 1.5 m is not 8.0 W m⁻²."
Model answer: (a) I₁r₁² = I₂r₂², so I₂ = I₁r₁² ÷ r₂² = 24 × 0.50² ÷ 1.5² = 6.0 ÷ 2.25 = 2.7 W m⁻². (b) The light from a point source spreads over a sphere whose area is 4πr². At 1.5 m the distance is three times larger, so the same power is spread over 3² = 9 times the area, and the intensity is a ninth (2.7 W m⁻²), not a third (8.0 W m⁻²). Classic mistake (crossed): "three times as far, a third: 8.0 W m⁻²".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** "The intensity of sunlight at Earth's distance from the Sun is 1.36 × 10³ W m⁻². Mars is 1.52 times as far from the Sun as Earth is. (a) Calculate the intensity of sunlight at Mars's distance from the Sun. (b) State one assumption your calculation relies on."
Model answer: (a) I_M r_M² = I_E r_E², so I_M = I_E × (r_E ÷ r_M)² = 1.36 × 10³ ÷ 1.52² = 1.36 × 10³ ÷ 2.31 = 589 W m⁻² (5.89 × 10² W m⁻²). (b) Any one of: the Sun radiates equally in all directions (acts as a point source at these distances); no light is absorbed or scattered in the space between Earth's and Mars's distances. Classic mistake (crossed): "1.36 × 10³ ÷ 1.52 = 895 W m⁻²".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook frames | 1 m and 2 m | 1 |
| Counting light | 36 per second through 1 m²; 9 per square at 2 m; 4 per square at 3 m | 3, 4, 6 |
| I r² readouts | 36 × 1² = 9 × 2² = 4 × 3² = 36 | 6 |
| Fast near, slow far | 1 m to 2 m: −75%; 10 m to 11 m: −17% ("about a sixth") | 5 |
| Worked example 1 (site `we-1`) | 80 W m⁻² at 2.0 m; 12.8 ≈ 13 W m⁻² at 5.0 m; check 2.5² = 6.25 | 7 |
| Prediction 2 | 4 × I needs r ÷ 2 | 8, 9 |
| Worked example 2 | 7.2 W m⁻² at 1.0 m; 0.80 W m⁻²; ratio 9; r₂ = 3.0 m (9 m crossed) | 9 |
| Gamma rings | 1 m and 2 m: I and I ÷ 4 | 10 |
| A1 | 24 W m⁻² at 0.50 m; 2.7 W m⁻² at 1.5 m; 8.0 crossed | 12, 13 |
| A2 | 1.36 × 10³ W m⁻²; ratio 1.52; 1.52² = 2.31; 589 W m⁻²; 895 crossed | 14, 15 |
| Handoff | sensor at 0.20 m | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 36 ÷ 4 = 9; 36 ÷ 9 = 4; 9 × 2² = 36; 4 × 3² = 36.
- 1 − (1/2)² = 0.75; 1 − (10/11)² = 0.1736.
- 80 × 2.0² ÷ 5.0² = 320 ÷ 25 = 12.8; 5.0 ÷ 2.0 = 2.5; 2.5² = 6.25; 80 ÷ 6.25 = 12.8.
- 7.2 ÷ 0.80 = 9; √9 = 3; 1.0 × 3 = 3.0 m.
- 24 × 0.50² ÷ 1.5² = 6.0 ÷ 2.25 = 2.667 = 2.7 W m⁻²; 24 ÷ 3 = 8.0.
- 1.52² = 2.3104; 1.36 × 10³ ÷ 2.3104 = 588.6 = 589 W m⁻²; 1.36 × 10³ ÷ 1.52 = 894.7 = 895.
- Realism: 4π × 2.0² × 80 = 4021 W; 4π × 1.0² × 7.2 = 90.5 W; 4π × 0.50² × 24 = 75.4 W; 95 ÷ 4π = 7.56 W m⁻².
- Site: 120 × 3.0² ÷ 9.0² = 13.3; 180 × 2.0² ÷ 6.0² = 20; 200 × 1.5² ÷ 6.0² = 12.5; implied powers 13.6 kW, 9.05 kW, 5.65 kW; 36 at 1.0 m implies 452 W.

## Memory aid check

- **"Twice as far, a quarter of the light."** Meaning, as said in scene 11: for a point source, doubling the distance spreads the same power over four times the area, so the intensity is a quarter; three times as far, a ninth. Assumptions checked: a point source spreading equally in all directions, far compared with its size, and nothing absorbing or reflecting on the way (all said in 10, and "point source, nothing in the way" spoken in 11 and on the notes screen); "light" means intensity, not the total power (the total is unchanged, said in 3). It survives the hard cases: it fails for a torch beam (10, said), and it extends to gamma rays (10). Introduced after the counting (4) and the law (5) have explained the idea.
- **Considered, not used:** "double the distance, half the light" (the misconception itself); "inverse square: one over the square" (names the law but carries no picture).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,923 characters**, 17 scenes. Characters per scene (1 to 17): 274, 473, 387, 493, 568, 312, 542, 91, 534, 549, 131, 246, 317, 282, 374, 275, 75. At 13.3 characters per second the speech is about 445 s; add about 16 s of holds and settling (the spheres and counters in 3, the cone and grids in 4, the graph steps in 5, the readouts in 6, the torch and rings in 10, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 543 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Two syllabus points, a counted cause, two calculation types and the conditions fill it without padding. If the voiced preview runs long, the first cut is the ratio check in scene 7 (about 130 characters; the check row stays silent), then the "ten metres to eleven" sentence in scene 5 (about 60 characters; the highlighted step stays).

## Scene list and build ids

Lesson key `p-y11-fa2-v16` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v16` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v16` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, intensity, sphere-spread, counting, inverse-square-law, two-points, worked-intensity, closer-prediction, worked-distance, conditions, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and closer-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v15's last frame continues into scene 1 (camera continue: the same lamp and frames); 1 to 2 camera continue (frames fade); 2 to 3 camera continue (the spheres grow round the dot); 3 to 4 board change to the side-on cone; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 clear change to the calculation layout; 7 to 8 camera continue (the sketch enlarges); 8 to 9 camera continue, then clear change to the calculation layout; 9 to 10 board change; 10 to 11 board change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and closer-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v16-learning-review.md`, `science_check` = `checks/p-y11-fa2-v16-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v13's `phys-y11-filament-lamp-v1.png` (scenes 1 to 6, 10, 16; the code adds the glow and shrinks the filament to a dot on "point source").
- v15's `phys-y11-gamma-source-v1.png` (scene 10).
- v11's `phys-y11-metre-rule-v1.png` (scene 16).
- v17's `phys-y11-light-meter-v1.png` and `phys-y11-light-sensor-head-v1.png` (scene 16; requested in v17's asset brief).
- **Considered, not used:** v13's `phys-y11-sun-v1.png` and `phys-y11-earth-v1.png` (A2's card uses an HSC-style line drawing, so no plate is needed; using the plates in teaching would give A2's context away).

Need (new plate, Codex):
1. `phys-y11-torch-v1.png`: scene 10. Useful; if cut, the conditions list keeps the beam cone from a coded outline and the narration is unchanged.

Coded: the frames, spheres, photon dots, counters, coat shading, cone and grids, dimension lines, the I against r graph and its steps, I r² readouts, the beam cone, distance rings, the "you" chip, `AlignedAlgebra`, `Countdown`, `QuestionCard` with line drawings, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`SphereSpread`** (new, physics; nested spheres with radial photon streams, equal crossing counters and an optional coat shade; reused in v17's hook); **`InverseSquareCone`** (new, physics; a pyramid of lines through 1 × 1, 2 × 2 and 3 × 3 grids with a fixed dot count shared and brightness per square proportional to its share); v14's `PhotonPacket` dots; `DataGraph` for the I against r curve with highlighted steps.

## Codex asset brief (Year 11 Physics FA2 v16, inverse square law)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v16.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v13's filament lamp and radio mast, at least 8 per cent clear margin, no text, labels, numbers, logos, brand names, people, hands, faces, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch. Each plate gets a JSON sidecar with the named pixel coordinates.

1. **`phys-y11-torch-v1.png`**: a plain cylindrical torch (flashlight) lying on its side, side view, lens end facing right, a visible shiny reflector cup inside the lens, a plain switch; matt dark grey or blue body; unlit (the code adds the beam). Sidecar: the lens centre (the beam's origin); the lens rim's top and bottom points; the body's contact line.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the scene 3 counters are equal on every sphere, the scene 4 grids carry 36, 9 and 4 per square with brightness in proportion, and the scene 5 graph is I ∝ 1/r² with the two steps correctly sized (−75%, −17%).
3. Confirm the physics claims: intensity is power per unit area in W m⁻²; a point source is small compared with the distance; light from a point source spreads over a sphere of area 4πr² with none lost in clear space; I ∝ 1/r²; I₁r₁² = I₂r₂²; r₂ = r₁√(I₁ ÷ I₂); a torch beam does not follow the law near the torch; the law applies to gamma radiation from a point source; the Sun treated as a point source for A2.
4. Confirm no person, hand, eye, face or body outline appears in any scene, card or plate (owner instruction).
5. Confirm the memory aid's conditions are spoken and on screen.
6. Confirm both attempt questions are original in wording, carry every given on the card, and show nothing answer-bearing.
7. Confirm the syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: The Inverse Square Law for Light: Why Light Dims So Fast | Year 11 Physics

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson13.sa.html

Move twice as far from a lamp: is the light half as bright? No, it's a quarter. See why: light from a point source spreads over a sphere whose area grows with the distance squared, so the same power is shared ever more thinly. Count the light through squares at one, two and three metres, see why the dimming is so fast close to a lamp, and use I₁r₁² = I₂r₂² to find an intensity and a distance. Learn the law's conditions, why a torch beam breaks it, and why distance protects you from gamma rays. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving the inverse square law using I α 1/r² and I₁r₁² = I₂r₂² to compare the intensity of light at points r₁ and r₂" (ci297a0581)
"Explain the relationship between distance and radiation intensity from a point source" (ci68035e55)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Applications across the electromagnetic spectrum (previous video). Next: Light intensity investigation.

#Year11Physics #Physics #Waves #InverseSquareLaw #HSCScience

## Open decisions

- **1. Route question.** Root decision 17 already set it; no change.
- **2. The proportionality sign.** The NESA MathML renders "I α 1/r²" with the Greek letter α as the sign. Teaching screens use ∝ ("is proportional to"). The YouTube quote keeps α as the source has it (root decision 11 covers fractions only); root may approve "∝" there as a typographic rendering.
- **3. Power before its FA1 or FA3 home.** "Power" is given its plain meaning ("the energy it sends out each second, in watts"). If an FA1 energy video already teaches power formally, the gloss becomes a recall. Root to confirm.
- **4. Site teaching values.** The site's 80 W m⁻² example is kept with a "teaching values" tag (author note b); worked example 2 and A1 use realistic lamp values. Root to confirm the tag.
- **5. Site link form.** As v10.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13 to v15 at Year 11 entry; check that the counting in scene 4 answers the hook visibly; that "power" and "intensity" land as plain meanings; that the paint analogy helps and does not confuse; that the fast-near, slow-far point answers "so quickly"; that the square root step is followable at speaking pace; that the torch counter-example is clear; that the cards give nothing away), then the Codex physics check and error check.
- The sphere counters (3), the cone grids (4), the graph steps (5) and the I r² readouts (6) carry the explanation; judge them at playback speed in the voiced preview.
