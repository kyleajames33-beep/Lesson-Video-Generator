# Year 12 Physics M5 V17: Universal gravitation and field strength. How does gravity vary with mass and distance from a spherical body? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,337 characters, 18 scenes, about 566 s, counted by script with the build parser rules (see "Narration length estimate"). First video of the gravitation run (v17 to v23).

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates: `phys-y11-fa1-v01.md` (structure), `phys-y12-m5-v01.md` (course style), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No pre-design pack exists for this video; the pack work (exact syllabus wording, site givens, independent arithmetic, original questions, asset reuse) is done in this file. Site lessons read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson10.sa.html`, SHA256 `64401b181f9a35605154dba81c071858b1cb3d9896c0ec74c78332321699bd7c`, and `.../module5/lesson15.sa.html`, SHA256 `0d89f9ec738bb96bd099ca0a8caa0e86cf3a02d9ba4a67485c504e0136cb005b` (both recomputed 6 Nov; both match the route). Route entry: `phys-y12-m5-v17` in `../../programme/phys-y12-route-inputs.json`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Distinguish force GMm/r squared from field strength GM/r squared and centre distance from altitude; state the spherical-body exterior-field assumption. Stop before orbit speed." Next: "phys-y12-m5-v18: How does gravity maintain a circular orbit?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's hook uses two 70 kg students and a 60 kg astronaut; here they are two 70 kg metal spheres and a satellite, and the space station is named only as a place at 400 km); real objects are painted plates (Earth, spheres, satellite) and the field arrows, radius lines, graphs and calculation strips are coded; plates never stretched; one reasoning stage at a time; task strip, equation strip and grouped givens with units; every number recalculated in Python with the HSC data sheet constants (G = 6.67 × 10⁻¹¹ N m² kg⁻², Earth's mass 6.0 × 10²⁴ kg, Earth's radius 6.371 × 10⁶ m); HSC data and formula sheet symbols (F = GMm/r², g = GM/r²); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; Year 11 ideas (Newton's third law, weight, vectors) recalled in a clause.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ3-01`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-01`: "apply qualitatively and quantitatively Newton’s Law of Universal Gravitation to:" "determine the force of gravity between two objects F= (GMm)/(r^(2))", "investigate the factors that affect the gravitational field strength g=(GM)/(r^(2))", "predict the gravitational field strength at any point in a gravitational field, including at the surface of a planet (ACSPH094, ACSPH095, ACSPH097)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v16's Earth and Moon final frame (see "Opening frame") and turns to a concrete contrast: two 70 kg metal spheres 1.0 m apart attract with 3.27 × 10⁻⁷ N, while Earth pulls one of them with about 690 N. Teaches: Newton's law of universal gravitation and the meaning of each symbol; the force acting along the line of centres, equal and opposite (third law); r measured centre to centre, with the spherical-body exterior assumption stated as a plain cause; F proportional to each mass; the inverse square dependence with the spreading-sphere picture (labelled a picture, not a proof); the investigation method (F against 1/r² is a straight line through the origin); the hook resolved (mass wins over distance by about 2 × 10⁹); field strength as force per kilogram, g = GM/r², the test mass cancelling, N kg⁻¹ = m s⁻², radially inward; g at Earth's surface from data sheet values; g at 400 km with the altitude mistake; the field map and g at 2R and 3R. Stops before orbital speed, period and apparent weightlessness (v18), gravitational potential energy and potential (v21). The site's potential-gradient and equipotential cards (lesson 15, marked enrichment there) are used only as the field-map picture: arrows point inward and crowd together where the field is strong. Potential V is not named.

## Decisions

- **Learner question (route wording kept).** "How does gravity vary with mass and distance from a spherical body?" is already the two-factor question the syllabus names. The answer, built in order: every mass attracts every mass with F = GMm/r² (2); r runs centre to centre because a spherical body acts as if its mass sits at its centre, outside its surface (3); F is proportional to each mass (4) and to 1/r² (5), which an F against 1/r² graph tests (6); in the hook, Earth's mass outweighs its distance (7); dividing by the small mass gives field strength g = GM/r², a property of the place (8); predicting g at the surface (9) and at altitude, measuring from the centre (10); the field map (11).
- **Hook (site hook, re-objected).** The site compares a 70 kg student on Earth (686 N) with two 70 kg students 1 m apart (3.27 × 10⁻⁷ N). People are replaced by two 70 kg metal spheres (the steel ball plate, scaled uniformly; at steel's density a 70 kg sphere is about 26 cm across, so centres 1.0 m apart leave a clear gap). The Earth force is computed from the law with data sheet values (690 N), not from mg with 9.8 (686 N); the screen shows "≈ 690 N" and author note (a) records both. The prediction asks "mass or distance?"; the surprise in scene 7 is that distance works against Earth.
- **"A fine grain of sand" (comparison).** 3.27 × 10⁻⁷ N is the weight of 3.3 × 10⁻⁸ kg, the mass of a sand grain about 0.3 mm across (author note b). Screen tag only "about the weight of a fine grain of sand".
- **Spherical-body assumption (route stop).** Stated as a cause in plain words: near-side mass pulls harder, far-side mass pulls more weakly and at an angle, and for a spherical body the pulls add to exactly the centre-mass value outside the surface. The shell theorem is not named or proved (author note c). "Outside the surface" is in the narration and on screen because the omission would teach a wrong idea.
- **Inverse square picture (site lesson 10 card 3).** The spreading-sphere picture is narrated as "a picture, not a proof, but it matches what we measure", matching the site's own caution. Followed by the measurable test (scene 6), which is the syllabus "investigate the factors" action.
- **Investigation (site explorer, "Investigate the force relationship").** Coded explorer: two fixed masses, separation stepped through four values, a force readout and two graphs drawn in turn (F against r, then F against 1/r²). Values are model values from the law, not measurements (tagged "model values"). Mass dependence is shown in scene 4 by doubling each mass with the force bar doubling.
- **Field strength (site card 2).** Defined as the force per kilogram at a point, with the small mass cancelling on screen. Units N kg⁻¹ shown equal to m s⁻²; "radially inward" shown with arrows. The site's ratio form g' = g(R/(R + h))² is not taught as a separate equation (it is the same law); it appears in feedback 2 as reasoning ("a quarter needs double the distance").
- **Worked examples (site worked example 2 and the "Apply 6 marks" answer, re-valued).** The site uses 5.97 × 10²⁴ kg and 6.37 × 10⁶ m (9.81, 8.69 m s⁻²). This design uses the HSC data sheet values the student will have in the exam (owner brief for this wave): surface g = 9.86 N kg⁻¹; at 400 km, r = 6.771 × 10⁶ m, g = 8.73 N kg⁻¹, 88.5 % ("about eighty-nine per cent", matching the site's 89 %). The altitude mistake (r = 4.0 × 10⁵ m gives 2.5 × 10³ N kg⁻¹) is shown and crossed because the site names it "the most common error".
- **Mistake scene.** None as a separate scene. The altitude-for-r slip is crossed inside scene 10 and again in feedback 2, because it is the misconception this lesson exists to prevent.
- **Field map (site lesson 15 equipotential card, enrichment).** Only the radial arrows and their spacing are used. No equipotential circles or potential values (v21 owns potential energy; V is supporting language there).
- **Memory aid.** "Measure r from the middle. Double the distance, quarter the pull." Introduced after both explanations (scenes 3 and 5). See "Memory aid check".
- **Attempts (original wording, site data).** A1 from the site's short-answer Q2 (Mars, 6.42 × 10²³ kg, 3.40 × 10⁶ m): 3.70 N kg⁻¹, 38 % of 9.8. A2 (new): the altitude at which g is a quarter of its surface value (h = R = 6.371 × 10⁶ m). Crossed: A1 "forgot to square the radius" (gives 1.26 × 10⁷ N kg⁻¹); A2 "2R = 1.27 × 10⁷ m" (distance from the centre, not altitude).
- **Colour key (course key from root decision 2, extended).** Gravitational force amber (the weight colour); field strength g violet (the acceleration colour, since g is the free-fall acceleration); centre-to-centre distance r navy with a dot at the centre; altitude h grey; crossed chips red. Open decision 1.
- **Handoff.** Scene 17 places a satellite at 400 km with its violet g arrow and asks why it does not fall straight down; a dashed orange sideways arrow "v = ?" appears (v18).
- **Site sources used:** hook (re-objected); vocabulary (law, G, inverse square, spherical model, field strength); misconceptions "no gravity in space" (scene 10), "r from the surface" (scenes 3, 10), "if r doubles, F halves" (scene 5, memory aid); card 1 (law, third law), card 2 (field strength, surface value, common HSC error, worked example 2 re-valued), card 3 (inverse square, graphs, F against 1/r²), the explorer instructions, the "Apply 6 marks" answer steps 2 to 5 (scenes 8 to 10), short-answer Q2 (A1). Not used: Cavendish history (one optional sentence considered and cut for length; the torsion balance plate is a Coulomb balance and would mislead), "other inverse square laws" (Coulomb's law is Module 6), the 60 kg astronaut example (a person), the "Account 5 marks" weightlessness answer (v18 owns free fall in orbit), lesson 15's potential, gradient and GPS material (v21 and enrichment).
- **Site notes (for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Lesson 10, worked example 3: "A 60 kg astronaut weighs 600 N at Earth's surface" uses g = 10 m s⁻², while the same page uses 9.8 (60 × 9.8 = 588 N). Suggest 588 N (answer 147 N) or state g ≈ 10.
  2. Lesson 10, "Evaluate evidence": M = 9.8 × (6.37 × 10⁶)² / 6.67 × 10⁻¹¹ = 5.96 × 10²⁴ kg, not 5.97 (the page states 5.97 elsewhere as a given; the inferred value rounds to 5.96).
  3. Lesson 10 and lesson 11 use 5.97 × 10²⁴ kg and 6.37 × 10⁶ m, while the HSC data sheet prints 6.0 × 10²⁴ kg and 6.371 × 10⁶ m. Not an error, but students checking site answers with data sheet values get slightly different numbers (9.86 rather than 9.81 N kg⁻¹). Suggest a one-line note.
  - Checked and correct: hook 3.27 × 10⁻⁷ N and 686 N; MC 4.2 × 10⁻⁷ N; worked example 2 (8.94 m s⁻²); 89 % at 400 km; Mars 3.71 m s⁻² and 38 %; Earth to Moon force 1.99 × 10²⁰ N; Q3 5.3 × 10⁻¹⁰ N.
- **Cause chain taught, in order:** (1) every mass attracts every other mass, along the line of centres, equal and opposite (2); (2) a spherical body acts as if its mass were at its centre, outside its surface, so r runs centre to centre (3); (3) F ∝ M and F ∝ m (4); (4) F ∝ 1/r²: the same influence spreads over 4πr² (5), tested by F against 1/r² (6); (5) Earth's mass ratio (8.6 × 10²²) beats its distance-squared ratio (4.1 × 10¹³) (7); (6) dividing by m gives g = GM/r², independent of the object (8); (7) g at the surface ≈ 9.86 N kg⁻¹ (9); (8) altitude must be added to the radius; g at 400 km is still 89 % (10); (9) g never reaches zero, quarter at 2R, ninth at 3R (11).
- **Entry knowledge (route):** Year 11 vectors, Newton's laws, weight W = mg. v16 (circular-motion investigation) is the previous video; no result from it is needed except that some real force must supply an inward pull (opening frame).
- **Learner-visible vocabulary (plain meaning at first use):** gravitational constant G (the number that sets how strong gravity is, 2); centre-to-centre distance r (3); inverse square law (force proportional to one over distance squared, 5); gravitational field strength g (the force on each kilogram at a place, 8); altitude h (height above the surface, 10).
- **Legacy logic ported:** none. The coded `InverseSquareGravity` visual in `src/explainer/physics/module5/index.tsx` (kit family `m5-inverse-square`) is the starting point for the field map; its limits ("single spherical central mass outside its surface; field-line density is not quantitative") are respected and stated in author note d.
- **New explainer motion (coded, plus plates):** **gravity stage** (kit gap 1 for v17 to v23: Earth plate at a known pixel scale with its centre anchor from `phys-y11-earth-v1.json`, a navy r line from the centre to any point, a grey h bracket from the surface, violet g arrows computed from GM/r² on a log-free linear scale, amber force pair arrows on two bodies, a radial arrow field with spacing and length from the model); **inverse square explorer** (two masses, stepped separation, readout, F against r and F against 1/r² graphs drawn from the same model); `AlignedAlgebra`, `Countdown`, `QuestionCard` (subject "Physics"), `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `KeyNotes`, `Heading`.
- **Board layout (constant for v17 to v23):** heading top-left; the gravity stage on the left (Earth plate about 520 px across unless a scene zooms); the calculation or ledger column on the right (about 640 px); nothing below the bottom 12 % of the frame.
- **No human figures.** The site's students and astronaut become spheres and a satellite; "the space station" is named as a place only, no crew drawn.
- **Author notes (not learner copy):**
  (a) Earth on a 70 kg sphere: GMm/R² = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 70 / (6.371 × 10⁶)² = 690.2 N; mg with 9.8 gives 686 N. Ratio to 3.268 × 10⁻⁷ N is 2.11 × 10⁹ ("about two billion").
  (b) 3.27 × 10⁻⁷ N / 9.8 = 3.3 × 10⁻⁸ kg; a quartz grain (2650 kg m⁻³) 0.30 mm across has mass 3.7 × 10⁻⁸ kg. "A fine grain of sand" is fair.
  (c) Spherical-body model: exact outside a spherically symmetric body (Newton's shell theorem). Earth is slightly oblate and spins, so measured free-fall acceleration varies from about 9.78 to 9.83 m s⁻²; the narration says "isn't a perfect sphere and it spins".
  (d) Field-arrow density in scene 11 is a picture; arrow length is computed from GM/r², arrow count is decorative and is not counted on screen.
  (e) Pronunciations: "big G", "big M", "little m", "little g"; "six point six seven times ten to the minus eleven"; "six point three seven one times ten to the six"; "newtons per kilogram".
  (f) Steel sphere geometry: 70 kg / 7850 kg m⁻³ = 8.92 × 10⁻³ m³, radius 0.129 m (diameter about 26 cm); the plate is drawn at 0.26 m on a 1.0 m centre bracket.

- **Open decisions for root:**
  - **1. Colour key extension (root).** Force amber, field strength violet, r navy, altitude grey, for v17 to v23. Confirm.
  - **2. Opening frame (reconciled by root, 6 November).** v17 opens on v16's actual final frame (Earth and Moon with the F = ? arrow and r bracket, no bench rig); scene 1 fades them to the corner.
  - **3. Data sheet constants (physics check).** G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, r_E = 6.371 × 10⁶ m as printed on the HSC Physics data sheet (from memory of the current sheet; the repo holds no copy). The physics check should confirm against the printed sheet. Every v17 to v23 number depends on them.
  - **4. Satellite plate (root).** One new plate, `y12p-satellite-v1.png`, first used in scene 17 here and then in v18 to v23. Fallback: a coded dot (weaker).
  - **5. Site link form.** Description link uses `subjects/physics/year12/module5/lesson10.sa.html`. Confirm the live path.

Main question: *Two 70 kg metal spheres 1.0 m apart attract with about 3 × 10⁻⁷ N, yet Earth pulls one of them with about 690 N. How does gravity depend on mass and on distance, and how do we predict its strength anywhere around a planet?*
Entry knowledge (Year 11): weight, Newton's third law, vectors; Year 12 v11 to v16 (circular motion needs an inward force).
Stops after: F = GMm/r²; centre-to-centre r and the spherical-body assumption; F ∝ M, F ∝ m, F ∝ 1/r²; g = GM/r² at the surface, at altitude and at multiples of R. No orbits.
Handoff: v18, how gravity maintains a circular orbit.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *F*, *G*, *M*, *m*, *r*, *g*, *h*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (mass or distance?)
> Here are two metal spheres, each with a mass of seventy kilograms, with their centres one metre **apart**. Gravity pulls them together with a force of about three point three times ten to the minus seven newtons. That's about the weight of a fine grain of **sand**. Put one of them on the ground, and Earth pulls it down with about six hundred and ninety **newtons**. So what makes Earth's pull about two billion times stronger, its mass or its distance? Have a **think**.

Visual: opens on v16's final frame exactly (`phys-y12-m5-v16.md` "Final frame": Earth with the Moon on a dashed orbit, teal velocity arrow, amber "F = ?" arrow towards Earth's centre, navy "r (centre to centre)" bracket, "M (Earth)" and "m (Moon)" tags, "not to scale" tag, "Next" chip). The "Next" chip fades and the Earth and Moon shrink to the top right corner and fade. Two steel sphere plates (`phys-y11-steel-ball-v1.png`, scaled uniformly to 0.26 m on the stage scale) sit on a coded bench line, tags "70 kg" each. On "apart" a navy bracket between the centres reads "r = 1.0 m". On "sand" two tiny amber arrows point from each sphere towards the other, readout "F = 3.27 × 10⁻⁷ N", grey tag "about the weight of a fine grain of sand". On "newtons" a second panel slides in at the right: one sphere on a coded ground line, a long amber arrow downward "F ≈ 690 N" (drawn about 10 times the bench arrows' length, with a grey tag "not to scale"). On "think" the 3 s `Countdown` ring runs beside "Earth's mass, or its distance?" with two option chips "mass" and "distance". Nothing is answered yet.

### 2. the law
> Newton's law of universal gravitation says every mass attracts every other mass. The force is big G times the two masses, divided by the distance between them squared. Big **G** is the gravitational constant, six point six seven times ten to the minus eleven, and it's tiny, which is why two everyday objects barely attract at all. The force pulls each mass straight towards the **other**, and by Newton's third law, the two forces are equal and **opposite**. So the sphere pulls the whole Earth up with six hundred and ninety newtons too.

Visual: camera continue on the two-sphere bench. Heading writes on: "How does gravity vary with mass and distance from a spherical body?" The equation strip writes in the right column: "F = GMm / r²" with labels drawn to each symbol: "M, m: the two masses (kg)", "r: distance (m)". On "G" a navy box "G = 6.67 × 10⁻¹¹ N m² kg⁻²" with the grey tag "the HSC data sheet value". On "other" a thin dashed line joins the two centres and the two amber arrows slide onto it, each pointing at the other sphere. On "opposite" both arrows pulse at equal length, tag "equal and opposite (third law)". In the right-hand panel a short amber arrow appears at Earth's edge pointing up towards the sphere, "690 N on Earth", beside the 690 N arrow on the sphere.

### 3. measure from the centres
> The key detail is that r is the distance between the **centres**. But for a sphere sitting on Earth, r isn't zero. It's Earth's radius, about six point four million **metres**. Why the centre? Earth's mass is spread through a huge ball. Rock on the near side pulls harder, rock on the far side pulls more weakly and at an angle, and for a spherical body, all those pulls add up to exactly what you'd get if all the mass sat at the **centre**. That only works outside the surface, which is everywhere we'll use it.

Visual: on "centres" navy dots mark both sphere centres and the bracket "r = 1.0 m" pulses between the dots, not between the surfaces (a grey surface-to-surface bracket "0.74 m" fades in and is crossed). On "metres" camera pull back: the ground panel zooms out to the Earth plate (`phys-y11-earth-v1.png`, centre anchor from its JSON); the sphere becomes a small grey dot on the surface and a navy line draws from Earth's centre to it, "r = 6.371 × 10⁶ m (Earth's radius)". As "Rock on the near side" runs, five small amber arrows grow from patches of Earth (near patch long and straight, far patches short and slanted) towards the sphere dot. On "centre" the arrows slide together and merge into one amber arrow aimed along the navy line; a navy dot at Earth's centre labelled "all the mass acts as if here"; a chip writes "spherical body: true outside the surface".

### 4. mass: proportional
> Now the two factors, starting with mass. The force is proportional to each mass. Double Earth's mass and the pull **doubles**. Double the sphere's mass as well and it doubles **again**. So a bigger mass on either end means a proportionally stronger pull.

Visual: clear change to a two-body balance diagram: a large coded disc "M" and a small disc "m" with the navy r line fixed between them; an amber force bar at the right reads "F". On "doubles" disc M swells to a disc labelled "2M" (area doubled) and the bar doubles, "2F". On "again" disc m becomes "2m" and the bar doubles again, "4F"; the equation strip "F = GMm/r²" highlights M and m in turn, tag "F ∝ M, F ∝ m".

### 5. distance: inverse square
> Distance works the other way, and more strongly, because it's squared. Picture gravity's influence spreading out from a mass over bigger and bigger spheres. Double the distance and the same influence covers four times the area, so the force falls to a **quarter**. Triple it, and the force drops to a **ninth**. That's the inverse square law. It's a picture, not a proof, but it matches what we measure.

Visual: camera continue; the masses return to M and m. Around M three coded concentric sphere outlines (drawn as circles with a soft 3D shading) at r, 2r, 3r, each with a small square patch on its surface. On "quarter" the patch at 2r shows as 2 × 2 = 4 squares and the force bar falls to "F ÷ 4"; tag "area × 4". On "ninth" the patch at 3r shows 3 × 3 = 9 squares, bar "F ÷ 9". The equation strip highlights "r²", tag "F ∝ 1/r²: the inverse square law", and a grey tag "a picture, not a proof".

### 6. testing it: force against one over r squared
> How would you test that? Keep both masses fixed and measure the force at several separations. A graph of force against distance is a steep curve that never quite reaches **zero**. But plot force against one over r squared, and the points fall on a straight line through the **origin**. That straight line is the evidence that force is proportional to one over r squared.

Visual: clear change to the inverse square explorer: masses fixed at the left, a separation slider stepping through r = 1, 2, 3, 4 units with a force readout at each step (model values, tag "model values"). Points plot on graph 1 "F against r" as each step lands; on "zero" a smooth curve draws through them and runs on towards the axis without touching it. On "origin" graph 2 "F against 1/r²" draws beside it: the same four points line up and a straight line rules through them back to (0, 0). Tag "straight line through the origin: F ∝ 1/r²", and a small triangle on the line reads "gradient = GMm" (screen only).

### 7. back to the puzzle
> Now back to our puzzle. Earth's centre is six point four million times further away than the other sphere's, and squaring that weakens the pull by a factor of about four times ten to the **thirteen**. But Earth's mass is nearly ten to the twenty-three times bigger than the sphere's. Mass wins by about two **billion**. So the answer is Earth's enormous mass, even though its distance works **against** it.

Visual: camera change back to the two hook panels side by side. A two-row ledger writes between them: row "distance: 6.371 × 10⁶ m vs 1.0 m, squared: × 4.06 × 10¹³ weaker" with a red down arrow on "thirteen"; row "mass: 6.0 × 10²⁴ kg vs 70 kg: × 8.57 × 10²² stronger" with a green up arrow. On "billion" the two rows combine into "net: 8.57 × 10²² ÷ 4.06 × 10¹³ ≈ 2.1 × 10⁹" and the 690 N arrow pulses. On "against" the "mass" option chip from scene 1 ticks; the "distance" chip gets a grey note "works against Earth".

### 8. field strength: force per kilogram
> The force changes with whatever mass you put there, so to describe gravity at a place, we divide by the small mass. That gives the gravitational field strength, little g, the force on each kilogram. Little g equals big G times the planet's mass over r squared, and the small mass has **cancelled**. Its units are newtons per kilogram, the same as metres per second **squared**, so it's also the free-fall acceleration there. It's a vector, pointing towards the planet's **centre**.

Visual: clear change to the gravity stage: Earth plate at the left, one grey test point just above the surface. Right column: "g = F / m = (GMm / r²) / m". On "cancelled" the two m's strike through and the line becomes "g = GM / r²", boxed in violet. A small tag "depends only on the planet's mass M and the distance r". On "squared" a units line writes "N kg⁻¹ = kg m s⁻² / kg = m s⁻²". On "centre" a violet arrow draws at the test point towards Earth's centre along the navy r line, labelled "g", and three more test points around Earth get violet arrows all aimed at the centre.

### 9. worked example: g at the surface
> Let's predict g at Earth's surface, using the values on the HSC data sheet. Big G is six point six seven times ten to the minus eleven, Earth's mass is six point zero times ten to the twenty-four kilograms, and r is Earth's radius, six point three seven one times ten to the six **metres**. Then g comes out at about nine point eight six newtons per **kilogram**. That's close to the nine point eight we usually use. Real values vary a little, because Earth isn't a perfect sphere and it **spins**.

Visual: calculation layout in the right column. Task strip: "Predict g at Earth's surface." Equation strip: "g = GM / r²" (violet). Givens grouped in one navy box: "G = 6.67 × 10⁻¹¹ N m² kg⁻²", "M = 6.0 × 10²⁴ kg (Earth)", "r = 6.371 × 10⁶ m (Earth's radius, centre to surface)"; each pulses as it is named and the navy r line on the stage lights for the radius. On "metres" `AlignedAlgebra`: "g = (6.67 × 10⁻¹¹ × 6.0 × 10²⁴) / (6.371 × 10⁶)²". On "kilogram" "= 4.002 × 10¹⁴ / 4.059 × 10¹³", "= 9.86 N kg⁻¹" boxed; the violet arrow at the surface point reads "9.86 N kg⁻¹". On "spins" a grey tag "measured: about 9.78 to 9.83 m s⁻² (shape and spin)".

### 10. 400 kilometres up
> Now go four hundred kilometres up, where the space station flies. The classic mistake is to put four hundred kilometres in for **r**. That gives a field thousands of times stronger than at the surface, which can't be right. r is measured from the centre, so add the radius, and r is six point seven seven one times ten to the six **metres**. Then g is about eight point seven three newtons per kilogram, still about eighty-nine per cent of its surface **value**.

Visual: the surface working shrinks to one line ("surface: g = 9.86 N kg⁻¹"). On the stage a grey dot rises to 400 km above Australia (drawn at true scale: about 16 px above a 520 px Earth), a grey bracket "h = 4.00 × 10⁵ m (altitude)". Task strip: "Predict g at 400 km altitude." On "r" a chip writes "r = 4.00 × 10⁵ m → g = 2.5 × 10³ N kg⁻¹" and is crossed in red, caption "that's the altitude, not r". On "metres" the navy r line draws from Earth's centre to the dot and the algebra writes "r = R + h = 6.371 × 10⁶ + 0.400 × 10⁶ = 6.771 × 10⁶ m". On "value" "g = 4.002 × 10¹⁴ / (6.771 × 10⁶)² = 8.73 N kg⁻¹" boxed and "8.73 ÷ 9.86 = 0.885 ≈ 89 %"; the violet arrow at the dot is drawn just shorter than the surface arrow; a chip "not zero gravity".

### 11. the whole field
> Here's the whole picture. The field arrows all point to Earth's centre, crowded close to the surface and spreading apart further **out**. At two Earth radii from the centre, which is one radius up, g is a quarter of its surface value, about two point five. At three radii it's a **ninth**. It keeps getting weaker, but it never switches off at any distance, it just tends towards **zero**.

Visual: camera pull back so Earth fills the centre-left at a smaller scale; a radial field of violet arrows (lengths from GM/r², count decorative) draws inward. On "out" the arrows near the surface are long and close together, those further out short and spaced. Dashed circles at r = 2R and 3R write with tags "2R: g = 2.46 N kg⁻¹ (÷ 4)" and on "ninth" "3R: g = 1.10 N kg⁻¹ (÷ 9)". On "zero" a small g against r graph slides in at the right: a curve from 9.86 at r = R falling towards the axis, marks at 2R and 3R, the curve never touching zero; tag "outside the surface only".

### 12. memory aid
> To keep it straight: measure r from the middle, and double the distance, quarter the pull. And keep the two equations apart. The force uses both masses. Field strength uses only the planet's mass, because it's the force on each **kilogram**.

Visual: board clears to two cards side by side: amber "F = GMm / r²: force between two masses (N)" and violet "g = GM / r²: force per kilogram at a place (N kg⁻¹)". The handwritten line writes large above: "Measure r from the middle. Double the distance, quarter the pull." On "kilogram" the m in the force card glows and an arrow labelled "÷ m" runs from the force card to the field card. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Mars has a mass of six point four two times ten to the twenty-three kilograms and a radius of three point four zero times ten to the six metres. Calculate the gravitational field strength at its surface, and express it as a percentage of Earth's value of nine point eight. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Mars has mass 6.42 × 10²³ kg and radius 3.40 × 10⁶ m. (a) Calculate the gravitational field strength at the surface of Mars. (b) Express your answer as a percentage of Earth's surface value, g = 9.8 N kg⁻¹. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Use g equals big G M over r squared, with the radius squared. That gives about three point seven zero newtons per **kilogram**, around thirty-eight per cent of Earth's. The slip to avoid is forgetting to square the **radius**.

Visual: card shrinks to the top; "surface" and "radius" underline. Rows: "g = GM / r² = (6.67 × 10⁻¹¹ × 6.42 × 10²³) / (3.40 × 10⁶)²"; on "kilogram" "= 4.282 × 10¹³ / 1.156 × 10¹³ = 3.70 N kg⁻¹" boxed and "3.70 ÷ 9.8 = 0.378 ≈ 38 %". On "radius" a chip "÷ 3.40 × 10⁶ → 1.26 × 10⁷ N kg⁻¹" fades in and is crossed (caption "r is squared"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. At what altitude above Earth's surface is the gravitational field strength one quarter of its value at the surface? Give your answer in metres, using Earth's radius of six point three seven one times ten to the six metres. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "At what altitude above Earth's surface is the gravitational field strength one quarter of its value at the surface? Earth's radius is 6.371 × 10⁶ m. Give your answer in metres." A small coded Earth outline sits beside the card with no lines drawn. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> A quarter of the field needs double the distance from the centre, so r is two Earth radii. The altitude is r minus the radius, which is one Earth radius, six point three seven one times ten to the six **metres**. The classic slip is answering two Earth radii, which is the distance from the centre, not the **altitude**.

Visual: card shrinks to the top; "altitude" and "one quarter" underline. On the outline a navy r line to a dashed circle at 2R, "r = 2R", and a grey bracket from the surface to the circle. Rows: "g ∝ 1/r²: g ÷ 4 needs r × 2", "h = r − R = 2R − R = R = 6.371 × 10⁶ m" on "metres", boxed. On "altitude" a chip "h = 2R = 1.274 × 10⁷ m" fades in and is crossed (caption "that's r, not h"). Hold about 1 second.

### 17. handoff
> So four hundred kilometres up, gravity is still almost ninety per cent as strong as on the ground. Then why doesn't a satellite up there fall straight down? It's moving sideways, very fast. Next time, we'll see how gravity keeps it going round in a **circle**.

Visual: board clears to the gravity stage: Earth plate at the left; the satellite plate (`y12p-satellite-v1.png`, new, scaled uniformly to about 40 px) at 400 km above Australia with the navy r line and the violet arrow "g = 8.73 N kg⁻¹" pointing to the centre. On "sideways" a dashed orange arrow draws from the satellite along the tangent, "v = ?". On "circle" a faint dashed circle at r = 6.771 × 10⁶ m draws around Earth and a chip writes "Next: how does gravity maintain a circular orbit?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Newton's law of universal gravitation: F = GMm/r². Every mass attracts every other mass; the forces are equal and opposite, along the line joining the centres. G = 6.67 × 10⁻¹¹ N m² kg⁻².
2. r is the centre-to-centre distance. A spherical body acts as if its mass were at its centre (outside its surface). At altitude h: r = R + h.
3. F ∝ M, F ∝ m, F ∝ 1/r²: double the distance, a quarter of the force. Test: F against 1/r² is a straight line through the origin.
4. Gravitational field strength: g = F/m = GM/r² (N kg⁻¹ = m s⁻²), pointing to the centre. Earth's surface ≈ 9.8 N kg⁻¹; at 400 km ≈ 8.7 N kg⁻¹.

Memory aid (large, on the notes screen): *Measure r from the middle.* Second line: *Double the distance, quarter the pull.*

## Teaching checks

- **Does it explain causes?** Why r is centre to centre: the near and far pulls of a spherical body add to the centre value (3). Why force falls as 1/r²: the same influence spreads over 4πr² (5), and the F against 1/r² line is the evidence (6). Why Earth's pull is huge despite its distance: the mass ratio beats the squared distance ratio (7). Why g does not depend on the object: m cancels (8). Why the "400 km for r" answer is absurd: it is an altitude, so the field would be larger than at the surface (10).
- **Misconceptions addressed:** "no gravity in space" (10, 17); "r from the surface" (3, 10, crossed in 16); "double r halves F" (5, memory aid); "only Earth attracts things" (2); "the small object doesn't pull Earth" (2).
- **One idea at a time:** the law (2), then where r is measured (3), then each factor alone (4, 5), the test (6), the puzzle (7), then field strength (8) and its predictions (9 to 11).
- **Video makes it easier:** the student sees the near and far pulls merge into one arrow at the centre (3), the patch area grow ×4 and ×9 (5), the curved graph straighten (6), the m's cancel (8), the satellite dot sit at true scale only a sliver above Earth (10), and the arrows thin out (11).
- **Response opportunity:** one in-teaching prediction (3 s) and two unseen HSC-style tasks with every given visible, 10 s each with the invitation to pause; nothing answer-bearing. Feedback about 22 s and 20 s.
- **Avoided double teaching:** Newton's third law and weight recalled in a clause; v11 to v16 not needed beyond the opening frame.
- **Syllabus coverage:** `P5-IQ3-01` all three examples: force between two objects (1, 2, 7), factors affecting g (4 to 6, 8, 11), g at any point including the surface (9 to 11, A1, A2).
- **Out of scope by design:** orbital speed, period and apparent weightlessness (v18); geostationary orbits (v19); potential energy and potential (v21).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, site data, HSC style, 3 marks suggested, not an official marking scheme).** "Mars has mass 6.42 × 10²³ kg and radius 3.40 × 10⁶ m. (a) Calculate the gravitational field strength at the surface of Mars. (b) Express your answer as a percentage of Earth's surface value, g = 9.8 N kg⁻¹. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)"
Model answer: (a) g = GM/r² = (6.67 × 10⁻¹¹ × 6.42 × 10²³) / (3.40 × 10⁶)² = 4.282 × 10¹³ / 1.156 × 10¹³ = 3.70 N kg⁻¹. (b) 3.70 / 9.8 × 100 = 38 %. Classic mistake (crossed): not squaring r (gives 1.26 × 10⁷ N kg⁻¹).

**Attempt 2 (scene 15; original, 2 marks).** "At what altitude above Earth's surface is the gravitational field strength one quarter of its value at the surface? Earth's radius is 6.371 × 10⁶ m. Give your answer in metres."
Model answer: g ∝ 1/r², so g/4 requires r = 2R (from the centre). Altitude h = r − R = R = 6.371 × 10⁶ m. Classic mistake (crossed): h = 2R = 1.274 × 10⁷ m.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | G = 6.67 × 10⁻¹¹ N m² kg⁻²; M_E = 6.0 × 10²⁴ kg; R_E = 6.371 × 10⁶ m; GM_E = 4.002 × 10¹⁴ N m² kg⁻¹ | 2, 9 to 11, 16 |
| Two spheres | 70 kg each, centres 1.0 m: F = 6.67 × 10⁻¹¹ × 4900 = 3.268 × 10⁻⁷ N ≈ 3.27 × 10⁻⁷ N ("three point three") | 1, 2 |
| Surface gap | 1.0 − 2 × 0.129 = 0.74 m (screen only, crossed) | 3 |
| Earth on sphere | 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 70 / (6.371 × 10⁶)² = 690.2 N ≈ 690 N | 1, 2, 7 |
| Ratio | 690.2 / 3.268 × 10⁻⁷ = 2.11 × 10⁹; mass ratio 8.57 × 10²²; distance² ratio 4.06 × 10¹³ | 1, 7 |
| Surface g | 4.002 × 10¹⁴ / 4.059 × 10¹³ = 9.860 N kg⁻¹ ≈ 9.86 | 9, 10 |
| 400 km | r = 6.771 × 10⁶ m; g = 8.729 N kg⁻¹ ≈ 8.73; 8.729 / 9.860 = 0.885 ≈ 89 %; wrong r = 4.00 × 10⁵ m gives 2.50 × 10³ N kg⁻¹ | 10, 17 |
| 2R, 3R | 2.465 ≈ 2.46 N kg⁻¹ ("about two point five"); 1.096 ≈ 1.10 N kg⁻¹ | 11 |
| A1 | 4.282 × 10¹³ / 1.156 × 10¹³ = 3.704 ≈ 3.70 N kg⁻¹; 37.8 % ≈ 38 %; unsquared slip 1.26 × 10⁷ | 13, 14 |
| A2 | h = R = 6.371 × 10⁶ m; slip 1.274 × 10⁷ m | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- GM = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ = 4.002 × 10¹⁴; R² = 4.0590 × 10¹³; g = 9.8597 N kg⁻¹.
- 6.67 × 10⁻¹¹ × 70 × 70 / 1.0² = 3.2683 × 10⁻⁷ N; 4.002 × 10¹⁴ × 70 / 4.0590 × 10¹³ = 690.18 N; ratio 2.1117 × 10⁹.
- r = 6.771 × 10⁶ m: g = 4.002 × 10¹⁴ / 4.5846 × 10¹³ = 8.7291 N kg⁻¹; ratio 0.88534. 4.002 × 10¹⁴ / (4.00 × 10⁵)² = 2501.25 N kg⁻¹.
- g(2R) = 2.4649; g(3R) = 1.0955 N kg⁻¹.
- Mars: 6.67 × 10⁻¹¹ × 6.42 × 10²³ = 4.2821 × 10¹³; (3.40 × 10⁶)² = 1.156 × 10¹³; g = 3.7043; 3.7043 / 9.8 = 0.37799. Unsquared: 4.2821 × 10¹³ / 3.40 × 10⁶ = 1.2594 × 10⁷.
- Steel sphere: (70 / 7850 × 3 / (4π))^(1/3) = 0.1287 m. Sand grain: 3.27 × 10⁻⁷ / 9.8 = 3.34 × 10⁻⁸ kg.
- Stage scale: Earth 520 px across (R = 260 px): 400 km = 260 × 4.00 × 10⁵ / 6.371 × 10⁶ = 16.3 px above the surface. The build computes true-scale placement for whichever Earth size is on screen.

## Memory aid check

- **"Measure r from the middle. Double the distance, quarter the pull."** From the site's centre-to-centre rule and its inverse square summary. Meaning, as said in scene 12: r always runs from the centre of the attracting body; the force and the field fall with the square of that distance. Assumptions checked: true for point masses and outside spherically symmetric bodies (scene 3 states "outside the surface"); "quarter the pull" holds for fixed masses (scene 4 states the masses are fixed). It helps a new case: A2 (a quarter of g means double r, then subtract R) and v18 to v23 (every r is R + h). Introduced after scenes 3 and 5.
- **Considered, not used:** "big G is tiny, little g is local" (catchy, but G and g confusion is not this lesson's main trap).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,337 characters**, 18 scenes. Characters per scene (1 to 18): 456, 527, 501, 246, 395, 362, 394, 469, 486, 450, 377, 237, 305, 218, 254, 312, 256, 75. At 13.3 characters per second the speech is about 476 s; add about 3 s for the prediction countdown, about 3 s for the explorer stepping in scene 6 and the zoom in scene 3, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 58 s more of the quiet notes hold (about 90 s of holds and countdowns): **about 566 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's last sentence (keep the 690 N arrow on Earth); scene 9's last sentence (keep the grey tag); scene 5's "a picture, not a proof" sentence (keep the tag).

## Opening frame

v16's final frame exactly (reconciled by root, 6 November): see `phys-y12-m5-v16.md` "Final frame" (Earth and Moon, dashed orbit, teal velocity arrow, amber "F = ?" arrow to Earth's centre, navy centre-to-centre r bracket, M and m tags, "not to scale", "Next" chip). No bench rig is on screen.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; the Earth plate (`phys-y11-earth-v1.png`, about 520 px across, Australia facing) at the centre-left; the satellite plate (`y12p-satellite-v1.png`, about 40 px) at 400 km above Australia (true scale); a navy line from Earth's centre to the satellite, "r = 6.771 × 10⁶ m"; a violet arrow from the satellite towards the centre, "g = 8.73 N kg⁻¹"; a dashed orange tangent arrow from the satellite, "v = ?"; a faint dashed circle of radius r around Earth. Heading top-left "How does gravity vary with mass and distance from a spherical body?"; a chip "Next: how does gravity maintain a circular orbit?". v18 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v17` (route phys-y12-m5-v17). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v17` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v17` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 18 scene headings, all `### N.`): hook, the-law, centre-distance, mass-factor, inverse-square, test-graph, puzzle-answer, field-strength, worked-surface, worked-altitude, field-map, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: gravity stage (kit gap 1), inverse square explorer (kit gap 2), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 to 2 camera continue; 2 to 3 camera pull back to Earth; 3 to 4 clear change; 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 camera change; 7 to 8 clear change to the gravity stage; 8 to 9 to 10 camera continue; 10 to 11 camera pull back; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), attempt-1, attempt-2 (10 s countdown after the speech), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v17-learning-review.md`, `science_check` = `checks/p-y12-m5-v17-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA; watercolour Earth with Australia facing; anchors in `phys-y11-earth-v1.json`: centre (623, 635), radius 475 px): scenes 3, 8 to 11, 17. The house Earth for v17 to v23.
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): the two 70 kg spheres, scenes 1 to 3, 7.
- **Checked, not used:** `public/assets/earth.png` (glossy 3D clip-art style, off house style); `public/assets/biology/y11-earth-small-v1.png` (Americas facing; keep the Australia-facing plate); `phys-y11-torsion-balance-v1.png` (a Coulomb-style balance; would mislead as Cavendish's).

Need (new plates, Codex), in priority order:
1. `y12p-satellite-v1.png`: scene 17 here, then v18 to v23. Essential for the run (a coded dot would be clip art).

Coded: bench and ground lines, radius lines and brackets, force and field arrows, sphere outlines and area patches, explorer and graphs, ledger, calculation strips, crossed chips, attempt cards, countdowns, notes board.

Kit gaps (for the v17 build brief; shared with v18 to v23):
1. **Gravity stage.** Earth plate at a declared pixel scale using its JSON centre and radius; true-scale altitude placement; navy r line, grey h bracket; violet g arrows and amber force arrows computed from GM/r² with the data sheet constants; optional radial arrow field; optional dashed orbit circles. Every readout from the same model as the drawing.
2. **Inverse square explorer.** Two masses, stepped separation, force readout, F against r and F against 1/r² graphs from the same model.

## Codex asset brief (Year 12 Physics M5 v17: satellite)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v17.md`, route entry phys-y12-m5-v17. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-earth-v1.png` and `phys-y11-rocket-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, flags, brand names, logos, people, hands, faces, backdrop, stars, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-satellite-v1.png` (1600 × 1000 px): a generic small Earth-orbiting satellite seen side-on: a compact box-shaped body wrapped in gold foil, two flat rectangular blue solar-panel wings extending left and right on short booms (the wings make the long axis horizontal), and one small dish antenna on the body pointing down. Not a copy of any real spacecraft. It must still read clearly at 40 px wide. Codex reports, in plate pixels: the body centre (the point that sits on the orbit line) and the overall width.

Report inspection on the paper background and the dark board background at about 400 px and at 40 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v17-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in the narration, screen text, attempts and key notes against "Numbers used"; confirm the data sheet constants (open decision 3).
2. Confirm the physics of every learner-visible claim: F = GMm/r² along the line of centres, equal and opposite; the spherical-body model holds outside the surface; F ∝ M, m, 1/r²; F against 1/r² is a straight line through the origin with gradient GMm; g = GM/r² in N kg⁻¹ = m s⁻², inward; g at 400 km ≈ 89 % of the surface value; g(2R) = g/4, g(3R) = g/9 (author notes a to d).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every given (masses, radii, G, 9.8 N kg⁻¹) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON `syllabusActions` exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested anywhere.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report the site notes under Decisions to root for `../site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: Newton's Law of Universal Gravitation and Field Strength | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson10.sa.html

Two 70 kg metal spheres a metre apart attract with a force about the weight of a grain of sand, yet Earth pulls one of them with about 690 N. Is that Earth's mass or its distance? Learn Newton's law of universal gravitation, why distances are measured from the centre of a planet, the inverse square law and how to test it, and how to predict gravitational field strength at the surface and at 400 km altitude. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply qualitatively and quantitatively Newton’s Law of Universal Gravitation to: determine the force of gravity between two objects F = GMm/r²; investigate the factors that affect the gravitational field strength g = GM/r²; predict the gravitational field strength at any point in a gravitational field, including at the surface of a planet (ACSPH094, ACSPH095, ACSPH097)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: how gravity maintains a circular orbit.

#HSCPhysics #Physics #Gravity #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the Year 11 entry knowledge; check that the near-and-far pulls picture in scene 3 is followable without the shell theorem; that the inverse square picture is not taken as proof; that the attempt cards give nothing away), then the physics check (data sheet constants) and the Codex error check.
- Judge the field map and the true-scale 400 km placement at playback speed, not from stills.
