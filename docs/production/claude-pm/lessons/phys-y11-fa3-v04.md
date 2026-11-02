# Year 11 Physics FA3 V04 (Physics 2025, Year 11, Focus Area 3): Why does a charge's field get weaker so quickly as you move away from it? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v04`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new (every picture in this video is a charge, a field line, a sphere, a graph or working, all coded).

Narration 5,927 characters, 16 scenes, about 544 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the Year 11 Physics (2025) Focus Area 3 route: electric field strength as force per coulomb, the inverse square law for the field of a point charge explained by field lines spreading over a sphere, and the syllabus equation used to calculate and to demonstrate the law. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v03.md` (Revision 1; v03's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson04.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 field strength and the inverse-square law, card 2 calculating the field with `we-1` and the quick check, activity 1 compute and compare, match the pairs, card 3 why field lines picture the inverse square with its figure description, last check, odd one out, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 4 ("Twice as far, a quarter as strong. Three times as far, a ninth."; used, see "Memory aid check"). Related design read: `phys-y11-fa2-v16.md` (the inverse square law for light; its sphere-spreading picture and memory aid are recalled, not re-taught). Route entry: `phys-y11-fa3-v04` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Electric Field Strength. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply electric field strength? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v05: How can I explain and apply force on charges in an electric field?" (this design proposes "Why does the same electric field push a proton and an electron with equal force, but in opposite directions?" for v05's chip; see open decision 1).

**Opening frame (v03's actual handoff, Revision 1, 3 Nov).** v03's scene 16 ends with the memory line "Out of plus, into minus. Crowded means strong. Never cross." small at the top; a single positive point charge (red "+") with its radial teal field lines; two dashed circles at r and 2r (labels "r", "2r"); the red "+" test charge at r with its amber force arrow; a ghost test charge at 2r with a dashed "?" arrow; chips "twice as far?" and "half as strong? or less?"; chip "Next: Why does a charge's field get weaker so quickly as you move away from it?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines; point charges, test charges, field lines, spheres, patches, graphs and working all coded (abstract diagrams; no apparatus is needed, so no plates); one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v03 (field lines, closer means stronger) and FA2 v16 (light spreading over a sphere) recalled in a phrase each.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its typeset fraction rendered inline, FA2 root decision 11):

- P25-FA3-G1-05 `ci6d5de19d`: "Use the equation E = (1/4πε₀) q/r² to demonstrate that the electric field strength around a point charge follows the inverse square law"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v03's handoff (above); the hook (twice as far: half, or less?); electric field strength E defined as the force on each coulomb of positive test charge, in N C⁻¹, and independent of the test charge's size (site misconception 2); the cause: a fixed number of field lines crosses every sphere round the charge; field strength as lines per square metre; twice as far, four times the patch area, a quarter of the field; three times, a ninth (site misconception 1 answered); the sphere's area 4πr², so E ∝ 1/r², the inverse square law; E ∝ q (twice the charge, twice the lines); the syllabus equation E = (1/4πε₀) q/r², with 4πr² visible in it, ε₀ given its plain meaning, and k = 1/4πε₀ = 8.99 × 10⁹ N m² C⁻²; the site's worked example; the equation used to demonstrate the law (2r and 3r values, E r² constant, E against 1/r² a straight line); halving r (prediction); a negative charge (size from the equation, direction inward); memory aid; two attempts. Stops at calculating E round a point charge and showing it is an inverse square law. Not taught: F = qE and any force calculation (v05; scene 2 says "we'll use that force in the next video"); rearranging for r or q (site Can Do; left to site practice, open decision 2); fields of several charges added as vectors; the force between two charges (v06); uniform fields and V m⁻¹ (v07).

## Decisions

- **Learner question (v03's proposal adopted; route placeholder rewritten).** "Why does a charge's field get weaker so quickly as you move away from it?" One causal question: the answer is the cause (the same lines spread over a sphere whose area grows with r²) and the syllabus equation is that cause written in symbols. It is v03's handoff chip, so no alignment is needed. Answer, built in order: hook and prediction (1); a number for field strength (2); lines through every sphere (3); why a quarter (4); the inverse square law and the charge (5); the equation (6); the numbers (7); the equation demonstrates the law (8, 9); memory aid (10).
- **The hook (v03's frame, turned into a prediction).** The ghost test charge at 2r is the question. Prediction (3 s): "half?", "a quarter?". Answered in 4 ("a quarter, not half").
- **Field strength as force per coulomb (site key term; misconception 2).** Said as "the force on each coulomb of test charge"; a coded test charge doubles in size and its force arrow doubles, while the readout "force per coulomb" stays fixed. This gives the unit N C⁻¹ a meaning without teaching F = qE (v05 owns calculations with force). V m⁻¹ is not mentioned (v07).
- **The cause made visible (owner quality bar).** (3) **`LineSphereCount`**: v03's radial `FieldLines` with three nested translucent coded spheres at r, 2r and 3r; a counter on each sphere reads the same number of lines crossing it ("lines crossing: 36" on all three; display rule in author note b). (4) FA2 v16's **`InverseSquareCone`**, retuned for field lines: a square pyramid of teal lines from the charge through a 1 × 1 patch at r (36 lines), continuing to a 2 × 2 grid at 2r (9 lines per square) and a 3 × 3 grid at 3r (4 per square), each square's teal shade proportional to its count. The amber probe arrow at each distance shrinks in the same ratio. (6) The equation is rewritten as q ÷ (ε₀ × 4πr²) and the 4πr² glows on the 2r sphere, so the symbols are the picture.
- **Recall, not re-teaching (FA2 v16).** One sentence in 3 ("You've seen this before with light from a lamp") with a small grey thumbnail of v16's lamp and spheres. The square-counting is re-shown because it is now about field lines and field strength, which v16 did not cover.
- **The syllabus form, and k (decision for root to confirm, open decision 3).** The syllabus writes E = (1/4πε₀) q/r². The site writes E = kq/r² and calls it the formula-sheet equation. The video shows the syllabus form first, then states that 1/4πε₀ is one number, about 8.99 × 10⁹ N m² C⁻², often written k, and calculates with that number. ε₀ is shown once: "ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻² (permittivity of free space)". Plain meaning: "a measured constant for empty space that sets how strong electric effects are in our units".
- **Worked example (site `we-1`, numbers unchanged).** +3.0 × 10⁻⁹ C at 2.0 cm; answer 6.7 × 10⁴ N C⁻¹, radially outward. Layout: task strip; equation strip; grouped givens (q; r with its conversion; k); one step per cue: r², kq, E, direction.
- **Demonstrating the law with the equation (the syllabus verb).** The same charge at 4.0 cm (1.7 × 10⁴ N C⁻¹, a quarter) and 6.0 cm (7.5 × 10³ N C⁻¹, a ninth); readouts "E × r²" all about 27 N m² C⁻¹ (= kq); a coded graph of E against r (steep fall) re-plots as E against 1/r² (a straight line through the origin). This is the demonstration the syllabus asks for, done with the equation rather than asserted.
- **Prediction 2 (3 s, scene 8; site match the pairs).** "Halve the distance: what happens to E?" Chips "doubles?", "four times?". Answered in 9 (2.7 × 10⁵ N C⁻¹, four times).
- **A negative source (site card 2 summary).** The equation gives the size; the sign gives the direction (inward). One sentence and a flip of the charge in 9, so A1 is not a surprise.
- **Attempts (original, HSC style).** (A1, calculation and scaling) "A point charge of −2.0 × 10⁻⁹ C is in air. (a) Calculate the electric field strength at a distance of 3.0 cm from the charge, and state the direction of the field there. (b) Without substituting into the equation again, state the electric field strength at 6.0 cm from the charge. (3 marks)" Answer: 2.0 × 10⁴ N C⁻¹, towards the charge; 5.0 × 10³ N C⁻¹. Crossed: "(b) 1.0 × 10⁴ N C⁻¹ (half)". (A2, demonstrate and explain) "The electric field strength 0.10 m from a point charge is 3.6 × 10³ N C⁻¹. (a) Calculate the electric field strength 0.30 m from the charge. (b) Use the field-line model to explain why the field strength changes by this factor. (3 marks)" Answer: 4.0 × 10² N C⁻¹ (a ninth); the same lines cross a sphere with nine times the area, so a ninth of the lines per square metre. Crossed: "1.2 × 10³ N C⁻¹ (a third)". "In air" in A1 is the site's condition (author note a).
- **Mistake scene:** none separate. "Twice as far, half the field" (1, 4, feedback 1 crossed; site misconception 1); "E depends on the test charge" (2; site misconception 2); "forgetting to convert centimetres" (7, said as the reason for converting first); "three times as far, a third" (feedback 2 crossed).
- **Memory aid:** "Twice as far, a quarter as strong. Three times as far, a ninth." (site hook; see "Memory aid check").
- **Handoff (route next; proposal for v05's question).** Board change: `we-1`'s positive charge with its lines, point P at 2.0 cm with the readout "E = 6.7 × 10⁴ N C⁻¹" and a teal field arrow; a proton (small red "+") and an electron (small navy "−") fade in side by side at P, each with a dashed "?" force arrow; chips "how big a push?" and "which way?"; then "Next: Why does the same electric field push a proton and an electron with equal force, but in opposite directions?". This is the frame v05 opens on (open decision 1).
- **Site sources used:** intro and hook (twice as far, a quarter: 1, 4); warm-up (half, quarter or same: 1); intentions (Know 1 to 3; Understand 1 to 3; Can Do 1 and 2: 2 to 9; Can Do 3 rearranging: not used, open decision 2); key terms (field strength, inverse-square law, k, coulomb: 2, 5, 6); misconceptions 1 and 2 (4, 2); card 1 (q and r control the field; double, triple, halve: 5, 8, 9); true or false (3r is not a third: feedback 2); card 2 and `we-1` (7); quick check (2r: C, a quarter: 4); activity 1 (ratio 9: the idea of 8; its numbers not reused); match the pairs (8, 9); card 3 and its figure (3, 4, 5); last check (true: 5, with correction 3); odd one out (no mass: key note 2); Q1 (A1 structure); Q3 (A2 structure).
- **Site corrections (quoted from site lesson 4, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 1: "Electric field strength $E$ at a distance $r$ from a point charge $q$ is given by the NESA formula-sheet equation: $E = \frac{kq}{r^2}$", and both dot-point lines: "Dot point: Use the equation E = kq/r² to demonstrate that the electric field strength around a point charge follows the inverse square law". The 2025 syllabus writes the equation as E = (1/4πε₀) q/r², so the dot point is misquoted and the form students meet in the syllabus never appears. Suggest quoting the dot point exactly and adding: "Here 1/4πε₀ = k = 8.99 × 10⁹ N m² C⁻², where ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻² is the permittivity of free space."
  2. Key terms: "Coulomb (C): The SI unit of electric charge; the charge on a single electron is $1.6 \times 10^{-19}\ \text{C}$." The electron's charge is negative. Suggest: "the charge on a single electron is −1.6 × 10⁻¹⁹ C (size 1.6 × 10⁻¹⁹ C)".
  3. Last check, marked true: "Field lines crowd together close to a point charge and spread apart further away because the field strength follows an inverse-square law." Card 3 gives the cause the other way round: the lines spread over a growing sphere, and that is why the field follows an inverse-square law. Suggest: "Field lines spread apart further from a point charge because the same lines cover a larger sphere, and this spreading is why the field strength follows an inverse-square law."
  - Checked and correct: `we-1` (6.7 × 10⁴ N C⁻¹, outward); quick check (C); activity 1 values (4.5 × 10⁵ and 5.0 × 10⁴ N C⁻¹, ratio 9); match the pairs; Q1 (4.0 × 10⁴ N C⁻¹; a quarter, about 1.0 × 10⁴); Q2 (0.060 m); Q3 (a ninth; 4πr²); odd one out (C).
- **Cause chain taught, in order:** (1) twice as far: half? (1); (2) field strength is force per coulomb, a property of the field (2); (3) the same lines cross every sphere; strength is lines per square metre (3); (4) twice as far, four times the area, a quarter; three times, a ninth (4); (5) the sphere's area 4πr², so E ∝ 1/r²; more charge, more lines, E ∝ q (5); (6) the equation is the sphere in symbols (6); (7) a field value (7); (8) the equation shows the law: quarter, ninth, E r² constant, straight line against 1/r² (8); (9) closer is much stronger; a negative source points in (9); (10) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Mathematics (squares and square roots, scientific notation, the area of a square); v01 (the coulomb), v03 (field, test charge, field lines, closer lines mean stronger, more lines for a bigger charge) and FA2 v16 (light spreading over a sphere; the sphere's area 4πr²), each recalled in a phrase.
- **Learner-visible vocabulary (plain meaning at first use):** electric field strength, E (the force on each coulomb of positive test charge at a point, 2); newtons per coulomb, N C⁻¹ (its unit, 2); inverse square law (a quantity that falls as one over the distance squared: twice as far, a quarter, 5); proportional, ∝ (changes by the same factor, 5, as FA2 v16); permittivity of free space, ε₀ (a measured constant for empty space that sets how strong electric effects are in our units, 6); k (the single number 1/4πε₀, 6).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v03's **`FieldLines`** and **`TestChargeProbe`** (reused; the probe's arrow lengths follow 1/r², author note b); **`LineSphereCount`** (new: nested translucent spheres at r, 2r, 3r round a charge, the radial lines passing through, a per-sphere "lines crossing" counter that stays equal; built on FA2 v16's `SphereSpread`); FA2 v16's **`InverseSquareCone`** (retuned: teal lines in place of gold photon dots, line counts per square 36, 9, 4); **test-charge doubler** (a probe that grows to "2 ×" while its amber arrow doubles and a "force per coulomb" readout stays fixed); **`AlignedAlgebra`** (equation rows that rearrange with the 4πr² term highlighted); **E-r graph with re-plot** (a coded curve of E against r with three marked points, morphing to E against 1/r² as a straight line through the origin); **E r² readouts** pinned to the three points; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v03 (positive red "+", negative and electrons navy "−", signs always printed); field lines and field arrows teal; forces amber with a dark ink outline; spheres pale translucent grey-blue; patch shading teal at strength-proportional opacity; givens and working ink on the light board, results boxed; crossed items grey scribble (FA3 root decision 1).
- **Board layout (constant):** heading top-left; the charge and its spheres in the left 60 per cent; the equation, givens and working in the right column; graphs in the lower right third.
- **No human figures.** None needed.
- **Author notes (not learner copy):**
  (a) "In air": air's relative permittivity is about 1.0006, so the vacuum value of k is used (as v03 author note a).
  (b) Display rule: 36 lines through the 1 × 1 patch at r is a display count (the field-line model, not a physical number of lines), chosen so 36, 9 and 4 divide exactly; the full `FieldLines` drawing keeps 12 lines per unit charge in the plane, as v03. Probe arrow lengths are drawn at 1, ¼ and ⅑ of the r length, capped near the charge.
  (c) The "lines through each square metre" picture is the field-line model of field strength (flux density); the narration says "the field's strength is set by how many lines pass through each square metre", which is the model's rule, not a claim that lines are real (v03's grey tag "a drawing tool, not real threads" returns in 3).
  (d) ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²; 1/4πε₀ = 8.988 × 10⁹ N m² C⁻² (8.99 × 10⁹ used, as the site).
  (e) `we-1`: kq = 8.99 × 10⁹ × 3.0 × 10⁻⁹ = 26.97 N m² C⁻¹; r² = 4.0 × 10⁻⁴ m²; E = 6.74 × 10⁴ N C⁻¹, written 6.7 × 10⁴. Scene 8 values from the unrounded 6.74 × 10⁴: 1.69 × 10⁴ (1.7 × 10⁴) and 7.49 × 10³ (7.5 × 10³); scene 9: 2.70 × 10⁵ (2.7 × 10⁵).
  (f) The equation holds for a point charge, or outside a uniformly charged sphere measured from its centre; not said (A1 uses "a point charge").
  (g) Pronunciations: "epsilon nought" (EP-sih-lon NORT); "permittivity" (per-mih-TIV-ih-tee); "newtons per coulomb" (KOO-lom); "two point oh times ten to the four".

Main question: *Move a test charge twice as far from a point charge and the push gets weaker. Why does a charge's field get weaker so quickly as you move away from it?*
Entry knowledge (Stage 5 squares and scientific notation; v03 field lines; FA2 v16 the sphere picture).
Stops after: E as force per coulomb; the inverse square law from lines spreading over a sphere; E ∝ q; the syllabus equation and k; calculating E for a point charge; demonstrating the law with the equation. No force calculations.
Handoff: v05, the force a field puts on a charge.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v03.

### 1. hook (twice as far, half as strong?)
> Last time, we saw that a charge's field is strongest close in. Here's a positive point charge, with a test charge at a distance r, feeling a push. Now move the test charge twice as far away. The push gets weaker, but by how much? Does it halve, or drop even **further**?

Visual: opens on v03's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Field strength: how fast does it fade?"; the memory line fades. The test charge at r pulses with its amber arrow; on "twice as far away" it slides out to the ghost position at 2r, and its arrow shrinks to a dashed outline with "?". On "further" chips "half?" and "a quarter?" and a 3-second countdown ring.

### 2. putting a number on a field
> To answer that, we need a number for a field's strength. We use the force on each coulomb of test charge. That's the electric field strength, E, and it's measured in newtons per coulomb. A test charge twice as big would feel twice the force, but the force on each coulomb stays the same. So E tells us about the field itself, not the charge we test it with. We'll use that force in the next video. Today, we want to know how E changes with **distance**.

Visual: camera continue; the probe returns to r. Right column: boxed "Electric field strength E: the force on each coulomb of positive test charge" and "unit: N C⁻¹ (newtons per coulomb)". On "twice as big" test-charge doubler: the probe swells and is labelled "2 ×"; its amber arrow doubles; a readout "force per coulomb" beside it stays fixed (no numbers). On "not the charge we test it with" a chip "E depends on the test charge" fades in and takes a grey scribble cross. On "distance" the "?" arrow at 2r pulses.

### 3. the lines cross every sphere
> Here's the cause. A charge sends out a fixed number of field lines, and none of them stop in empty space. So every line that crosses a sphere at r goes on to cross a sphere at two r, and at three r. And remember, closer lines mean a stronger field. So the field's strength depends on how many lines pass through each square metre. You've seen this idea before, with light from a lamp: the same amount, spread over more **area**.

Visual: board change: the positive charge centre left with its radial teal `FieldLines`; `LineSphereCount`: three nested translucent spheres at "r", "2r", "3r" (grey tag "not to scale"). On "every line that crosses" counters on all three read "lines crossing: 36" (author note b). Grey tag returns from v03: "field lines are a drawing tool, not real threads". On "each square metre" a small square patch outlined on the r sphere. On "light from a lamp" a small grey thumbnail of FA2 v16's lamp and spheres in the corner (tag "Waves video: light spreads the same way"). On "area" the outer sphere pulses.

### 4. why a quarter
> So how much more area is there, twice as far out? Follow the lines through one small square at r. Further out, they've spread to cover a square twice as wide and twice as tall. That's four times the area, so each square metre gets a quarter of the lines. The field is a quarter as strong, not half. Three times as far, the square is three wide and three tall, nine times the area. So the field is a **ninth**.

Visual: camera continue into `InverseSquareCone`: a square pyramid of teal lines from the charge through a 1 × 1 patch at r (counter "36 lines"); the lines continue to 2r, where the patch is a 2 × 2 grid (each square "9", shaded a quarter as deep); on "a quarter as strong, not half" the probe arrows at r and 2r appear side by side, the 2r arrow a quarter of the length; the scene 1 chip "a quarter?" glows and "half?" takes a grey scribble cross. On "three times as far" the lines continue to 3r: a 3 × 3 grid, each square "4", fainter; on "ninth" the 3r probe arrow at a ninth of the length, and a strip "r: 1, 2r: ¼, 3r: ⅑".

### 5. the inverse square law, and the charge
> The whole sphere works the same way. A sphere's area is four pi r squared, so it grows with the distance squared. That makes the field strength proportional to one over r squared. That's the inverse square law. Inverse, because further means weaker. Square, because the area grows with the distance squared. And the charge matters too. Double the charge, and it sends out twice as many lines, so the field doubles at every **point**.

Visual: the spheres return small at the left. Rows at the right, one per cue: "area of a sphere = 4πr²" (the 2r sphere pulses, a dimension line "r"); on "proportional" boxed "E ∝ 1/r²" (gloss "∝: changes by the same factor"; tag "inverse square law"). On "Inverse" and "Square" the "1/" and the "²" pulse in turn. On "Double the charge" the charge becomes "+2" (larger red disc) and its lines double (24 in the plane, as v03); the counters on the spheres double to "72"; row "E ∝ q". On "point" the two rows join: "E ∝ q/r²".

### 6. the equation
> Put those together, and we get the equation. E equals one over four pi epsilon nought, times q over r squared. Rearrange the bottom, and four pi r squared is sitting right there: the area of the sphere. Epsilon nought is a measured constant for empty space, called the permittivity of free space. It sets how strong electric effects are in our units. One over four pi epsilon nought works out to a single number, eight point nine nine times ten to the nine. It's often called k, so you'll also see E equals k q over r **squared**.

Visual: `AlignedAlgebra` in the right column, one row per cue: boxed "E = (1/4πε₀) × q/r²" (tag "syllabus form"); on "Rearrange the bottom" the row becomes "E = q ÷ (ε₀ × 4πr²)" and "4πr²" glows teal while the 2r sphere at the left glows in step. On "permittivity" "ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²" with "permittivity of free space" (grey tag "measured constant"). On "single number" "1/4πε₀ = k = 8.99 × 10⁹ N m² C⁻²". On "squared" second boxed form "E = kq/r²" beside the first, with a small "=" between them.

### 7. worked example: the field 2.0 cm away
> Let's use it. Task: find the electric field strength two point oh centimetres from a point charge of plus three point oh times ten to the minus nine coulombs. The givens: q is three point oh times ten to the minus nine coulombs, r is two point oh centimetres, which is point oh two oh metres, and k is eight point nine nine times ten to the nine. Convert to metres first, because r gets squared. Point oh two oh squared is four point oh times ten to the minus four. k times q is about twenty-seven. So E is six point seven times ten to the four newtons per coulomb, pointing away from the positive **charge**.

Visual: clear change to the calculation layout; a small red "+" at the left with a point P marked "2.0 cm" away. Task strip: "Find E at 2.0 cm from the charge" (grey tag "site worked example"). Equation strip: "E = kq/r²". Givens group: "q = +3.0 × 10⁻⁹ C"; "r = 2.0 cm = 0.020 m"; "k = 8.99 × 10⁹ N m² C⁻²". On "Convert to metres first" the "= 0.020 m" pulses. Rows, one per cue: "r² = (0.020)² = 4.0 × 10⁻⁴ m²"; "kq = 8.99 × 10⁹ × 3.0 × 10⁻⁹ ≈ 27"; on "charge" "E = 27 ÷ 4.0 × 10⁻⁴ = 6.7 × 10⁴ N C⁻¹", boxed, and a teal arrow at P pointing away from the charge (chip "outward: positive source").

### 8. the equation shows the law
> Now let's use the equation to test the law. Move to four point oh centimetres, twice as far. The equation gives one point seven times ten to the four, and that's a quarter. At six point oh centimetres, three times as far, it gives seven point five times ten to the three. That's a ninth. Here's another check. E times r squared comes out the same at every point, about twenty-seven, which is just k times q. And if we plot E against one over r squared, the points fall on a straight line through the origin. Now you try. Halve the distance, to one centimetre. What happens to **E**?

Visual: the calculation board slides up; three points P, 2P, 3P on a line from the charge at "2.0 cm", "4.0 cm", "6.0 cm". Readouts, one per cue: "4.0 cm: E = 1.7 × 10⁴ N C⁻¹ (¼)"; "6.0 cm: E = 7.5 × 10³ N C⁻¹ (⅑)". On "E times r squared" each readout gains "E × r² ≈ 27 N m² C⁻¹" in turn, and "= kq" boxed. On "plot" a coded graph in the lower right: E against r with the three points on a steep falling curve; it morphs to E against 1/r² (axis label changes, points slide) and a straight line through the origin draws through them (tag "straight line: E ∝ 1/r²"). On "E" chips "doubles?" and "four times?" and a 3-second countdown ring.

### 9. closer is much stronger
> Halving r makes r squared a quarter as big, so E is four times stronger: two point seven times ten to the five newtons per coulomb. That's why the field is so strong close to a charge, and fades so fast just outside it. And for a negative charge, the equation works the same way. Use the size of the charge to find E. Then use the sign for the direction. The field of a negative charge points **in**.

Visual: on "four times stronger" a fourth point at "1.0 cm" joins the line and the graph: "E = 2.7 × 10⁵ N C⁻¹ (× 4)"; chip "four times?" glows, "doubles?" takes a grey scribble cross. On "so strong close to a charge" the E-r curve's steep section near the charge highlights. On "negative charge" the charge flips to navy "−"; the readouts keep their sizes; on "in" the teal arrows at the points swing round to point towards the charge (chip "size from the equation, direction from the sign").

### 10. memory aid
> To remember it: twice as far, a quarter as strong. Three times as far, a **ninth**.

Visual: the handwritten line writes large: "Twice as far, a quarter as strong. Three times as far, a ninth." On "twice" a 2 × 2 grid flashes; on "ninth" a 3 × 3 grid. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A point charge of minus two point oh times ten to the minus nine coulombs is in air. Calculate the electric field strength three point oh centimetres from the charge, and state the field's direction there. Then, without using the equation again, state the field strength six point oh centimetres from the charge. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A point charge of −2.0 × 10⁻⁹ C is in air. (a) Calculate the electric field strength at a distance of 3.0 cm from the charge, and state the direction of the field there. (b) Without substituting into the equation again, state the electric field strength at 6.0 cm from the charge. (3 marks)" Below: "k = 8.99 × 10⁹ N m² C⁻²". Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> r is point oh three oh metres, so r squared is nine point oh times ten to the minus four. k times the size of the charge is about eighteen. So E is two point oh times ten to the four newtons per coulomb, and the charge is negative, so the field points towards **it**. Six centimetres is twice as far, so E is a quarter: five point oh times ten to the **three**. Halving it forgets the **square**.

Visual: card shrinks to the top; "−2.0 × 10⁻⁹ C" and "without substituting" underlined. Rows: "r = 0.030 m; r² = 9.0 × 10⁻⁴ m²"; "k × 2.0 × 10⁻⁹ ≈ 18"; on "it" "(a) E = 18 ÷ 9.0 × 10⁻⁴ = 2.0 × 10⁴ N C⁻¹, towards the charge", boxed; on "three" "(b) 2r: E ÷ 4 = 5.0 × 10³ N C⁻¹", boxed. On "square" a chip "(b) 1.0 × 10⁴ N C⁻¹ (half)" fades in and takes a grey scribble cross. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. The electric field strength point one oh metres from a point charge is three point six times ten to the three newtons per coulomb. Calculate the field strength point three oh metres from the charge. Then use the field-line model to explain why it changes by that factor. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "The electric field strength 0.10 m from a point charge is 3.6 × 10³ N C⁻¹. (a) Calculate the electric field strength 0.30 m from the charge. (b) Use the field-line model to explain why the field strength changes by this factor. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Point three oh metres is three times as far, so the field is a ninth: four point oh times ten to the two newtons per **coulomb**. Why a ninth? The same field lines cross every sphere round the charge. At three times the distance, the sphere has nine times the area, so there's a ninth of the lines through each square **metre**. Dividing by three treats it like a plain inverse. The distance is **squared**.

Visual: card shrinks to the top; "0.10 m" and "0.30 m" underlined. On "coulomb" "(a) 3r: 3.6 × 10³ ÷ 9 = 4.0 × 10² N C⁻¹", boxed. On "same field lines" a small `LineSphereCount` sketch with spheres at 0.10 m and 0.30 m and equal counters; on "metre" a 3 × 3 grid lights, "(b) same lines, 9 × the area: ⅑ the lines per m²", boxed. On "squared" a chip "1.2 × 10³ N C⁻¹ (a third)" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. handoff
> So the field fades as one over r squared, because the same lines spread over a bigger and bigger sphere. Now, what does a field actually do to a charge we put in it? Place a proton and an electron at the same spot. Do they feel the same push, and in the same **direction**?

Visual: board change: the memory line small at the top. `we-1`'s positive charge with its teal lines; point P at "2.0 cm" with the readout "E = 6.7 × 10⁴ N C⁻¹" and a teal field arrow pointing away from the charge. On "a proton and an electron" a small red "+" labelled "proton" and a small navy "−" labelled "electron" fade in side by side at P, each with a dashed "?" force arrow. Chips write: "how big a push?" and "which way?". On "direction" the chip "Next: Why does the same electric field push a proton and an electron with equal force, but in opposite directions?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Electric field strength E is the force on each coulomb of positive test charge, in N C⁻¹. It belongs to the field, not to the test charge.
2. Point charge: E = (1/4πε₀) q/r² = kq/r², with k = 8.99 × 10⁹ N m² C⁻². Convert r to metres. Use the size of q; direction is out from +, in to −.
3. Inverse square law: the same field lines spread over a sphere of area 4πr², so E ∝ 1/r². Twice as far: ¼. Three times as far: ⅑. Half the distance: × 4.
4. E is proportional to q: twice the charge, twice the field at every point.

Memory aid (large, on the notes screen): *Twice as far, a quarter as strong. Three times as far, a ninth.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why E doesn't depend on the test charge: it's force per coulomb, and a bigger test charge feels proportionally more (2). Why the field weakens with distance: the same lines spread over more area (3). Why a quarter at twice the distance: the patch is twice as wide and twice as tall (4). Why the square: a sphere's area grows with r² (5). Why E ∝ q: more charge sends out more lines (5). Why 4π is in the equation: it is the sphere's area (6). Why convert to metres first: r is squared (7). Why the field of a negative charge points in: the force on a positive test charge is towards it (9).
- **Misconceptions addressed:** twice as far, half (1, 4, feedback 1 crossed); E depends on the test charge (2); three times as far, a third (feedback 2 crossed); not converting centimetres (7).
- **One idea at a time:** meaning of E (2), the sphere count (3), the factor (4), the law and the charge (5), the equation (6), the numbers (7), the demonstration (8), halving and sign (9).
- **Video makes it easier:** the student sees a doubled test charge leave the per-coulomb readout unchanged (2), equal line counts on three spheres (3), one patch become four and nine squares (4), 4πr² in the equation light up the sphere (6), and a curve straighten when plotted against 1/r² (8).
- **Response opportunity:** two 3 s predictions (1, 8); two unseen HSC-style tasks, 10 seconds each, every condition on the card (the charge's sign; "in air"; k given; "without substituting"; the two distances), nothing answer-bearing. One crossed mistake each; feedback about 27 s and 26 s.
- **Avoided double teaching:** v03's field lines and "closer means stronger" recalled in a phrase (3); FA2 v16's light and spheres recalled in one sentence (3) with a thumbnail; the sphere's area as a given formula, as v16.
- **Syllabus coverage:** `ci6d5de19d`: the equation stated in syllabus form (6), used (7, A1), and used to demonstrate the inverse square law (8, 9, A2); the law explained from field-line spreading (3 to 5, A2 b).
- **Out of scope by design:** F = qE (v05); rearranging for r or q (open decision 2); fields from several charges; Coulomb's law (v06); uniform fields and V m⁻¹ (v07).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A point charge of −2.0 × 10⁻⁹ C is in air. (a) Calculate the electric field strength at a distance of 3.0 cm from the charge, and state the direction of the field there. (b) Without substituting into the equation again, state the electric field strength at 6.0 cm from the charge." (k = 8.99 × 10⁹ N m² C⁻² given.)
Model answer: (a) r = 0.030 m. E = kq/r² = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.030)² = 17.98 ÷ 9.0 × 10⁻⁴ = 2.0 × 10⁴ N C⁻¹, directed towards the charge because it is negative. (b) 6.0 cm is twice the distance, and E ∝ 1/r², so E falls to a quarter: 5.0 × 10³ N C⁻¹. Classic mistake (crossed): "(b) 1.0 × 10⁴ N C⁻¹ (half)".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "The electric field strength 0.10 m from a point charge is 3.6 × 10³ N C⁻¹. (a) Calculate the electric field strength 0.30 m from the charge. (b) Use the field-line model to explain why the field strength changes by this factor."
Model answer: (a) 0.30 m is three times the distance; E ∝ 1/r², so E = 3.6 × 10³ ÷ 3² = 4.0 × 10² N C⁻¹. (b) The charge sends out a fixed number of field lines, and they all cross every sphere centred on it. A sphere's area is 4πr², so at three times the distance the area is nine times larger and the number of lines through each square metre, which represents the field strength, is a ninth. Classic mistake (crossed): "1.2 × 10³ N C⁻¹ (a third)".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Display line counts | 36 lines through the patch at r; 9 per square at 2r; 4 per square at 3r; 36 crossing each sphere (72 for +2) | 3, 4, 5 |
| Lines per unit charge (plane drawing) | 12 (24 for +2) | 3, 5 |
| ε₀ | 8.85 × 10⁻¹² C² N⁻¹ m⁻² | 6 |
| k = 1/4πε₀ | 8.99 × 10⁹ N m² C⁻² | 6, 7, 11, 12, notes |
| `we-1` (site) | q = +3.0 × 10⁻⁹ C; r = 2.0 cm = 0.020 m; r² = 4.0 × 10⁻⁴ m²; kq ≈ 27; E = 6.7 × 10⁴ N C⁻¹ outward | 7, 15 |
| Demonstration | 4.0 cm: 1.7 × 10⁴ N C⁻¹; 6.0 cm: 7.5 × 10³ N C⁻¹; 1.0 cm: 2.7 × 10⁵ N C⁻¹; E r² ≈ 27 N m² C⁻¹ | 8, 9 |
| A1 | −2.0 × 10⁻⁹ C; 3.0 cm; r² = 9.0 × 10⁻⁴ m²; k × size of q ≈ 18; 2.0 × 10⁴ N C⁻¹ towards; 6.0 cm: 5.0 × 10³ N C⁻¹ | 11, 12 |
| A2 | 3.6 × 10³ N C⁻¹ at 0.10 m; 4.0 × 10² N C⁻¹ at 0.30 m | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 1 ÷ (4π × 8.854 × 10⁻¹²) = 8.988 × 10⁹.
- 8.99 × 10⁹ × 3.0 × 10⁻⁹ = 26.97; ÷ (0.020)² = 6.74 × 10⁴ N C⁻¹.
- 26.97 ÷ (0.040)² = 1.69 × 10⁴; 26.97 ÷ (0.060)² = 7.49 × 10³; 26.97 ÷ (0.010)² = 2.70 × 10⁵.
- E r²: 6.74 × 10⁴ × 4.0 × 10⁻⁴ = 26.97; 1.7 × 10⁴ × 1.6 × 10⁻³ = 27.2; 7.5 × 10³ × 3.6 × 10⁻³ = 27.0 (rounded readouts give "about 27").
- A1: 8.99 × 10⁹ × 2.0 × 10⁻⁹ = 17.98; ÷ (0.030)² = 1.998 × 10⁴ → 2.0 × 10⁴; at 0.060 m 4.99 × 10³ → 5.0 × 10³.
- A2: 3.6 × 10³ ÷ 9 = 400 = 4.0 × 10²; implied source charge 3.6 × 10³ × 0.10² ÷ 8.99 × 10⁹ = 4.0 × 10⁻⁹ C (not used).
- Display counts: 36 ÷ 4 = 9; 36 ÷ 9 = 4.

## Memory aid check

- **"Twice as far, a quarter as strong. Three times as far, a ninth."** (site memory hook, lesson 4.) Meaning, as said in scene 10: for the field round a point charge, multiplying the distance by 2 divides E by 4, and by 3 divides E by 9. Assumptions checked: true for a point charge (or outside a uniformly charged sphere, distances from its centre), with the charge unchanged and in empty space or air; "far" means distance from the charge itself, not from some other point. It is not true for the uniform field between plates (v07), which the video does not mention; root may add a grey tag in v07 instead. Introduced after the cause (3, 4) and the law (5), and after the equation shows it (8). Matches FA2 v16's "Twice as far, a quarter of the light", so students hear one pattern for both.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,927 characters** (5,942 joined), 16 scenes. Characters per scene (1 to 16): 266, 449, 424, 405, 429, 526, 605, 578, 396, 79, 345, 384, 302, 395, 269, 75. At 13.3 characters per second the speech is about 446 s; add about 16 s of holds and settling (the slide to 2r in 1, the doubler in 2, the sphere counters in 3, the cone splitting in 4, the graph re-plot in 8, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 544 s**, under the 570 s cap. One syllabus point with its cause, equation and demonstration fills it without padding.

## Scene list and build ids

Lesson key `p-y11-fa3-v04` (route phys-y11-fa3-v04). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v04` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v04` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, field-strength, sphere-count, why-a-quarter, inverse-square, equation, worked-example, demonstrate-law, closer-and-sign, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and demonstrate-law carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v03's last frame continues into scene 1 (camera continue: the r and 2r circles carry over); 1 to 2 camera continue; 2 to 3 board change to the spheres; 3 to 4 camera continue (into the cone); 4 to 5 camera continue (spheres shrink left, rows right); 5 to 6 split board; 6 to 7 clear change to the calculation layout; 7 to 8 camera continue (board slides up); 8 to 9 camera continue; 9 to 10 fade; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and demonstrate-law (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v04-learning-review.md`, `science_check` = `checks/p-y11-fa3-v04-physics-check.md`.

## Assets

Reused: none painted. Coded parts reused from v03 (`FieldLines`, `TestChargeProbe`) and FA2 v16 (`SphereSpread` as the base of `LineSphereCount`; `InverseSquareCone`; the v16 lamp-and-spheres board as a grey thumbnail in 3).

New plates: none. Checked first (3 Nov): `public/assets/physics/` holds no electrostatics plates yet (v01 to v03 requests not delivered); none is needed here because every object in the video is a point charge or a diagram.

Coded: point charges, test charges, field lines, spheres, cone and patches, the doubler, equation rows, graphs, readouts.

Kit gaps (for the next physics kit brief): `LineSphereCount`, `InverseSquareCone` field-line mode, test-charge doubler, E-r graph with 1/r² re-plot (plus v03's `FieldLines` and `TestChargeProbe`, needed again in v05 and v06); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v04)

No plates requested. Kit notes only (for the physics kit brief, not an art brief): `LineSphereCount` should share `SphereSpread`'s sphere rendering so FA2 v16 and this video look alike; `InverseSquareCone` needs a line mode (teal lines, integer counts per square, shade proportional to count).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: E is the force per coulomb on a positive test charge, in N C⁻¹, independent of the test charge; a fixed number of field lines crosses every sphere round a point charge; line density represents field strength (model rule, tagged); twice the distance, four times the area, a quarter of E; three times, a ninth; E ∝ 1/r² and E ∝ q; E = (1/4πε₀) q/r² = kq/r² with k = 8.99 × 10⁹ N m² C⁻² and ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²; E r² is constant for one charge; E against 1/r² is a straight line through the origin; the field of a negative charge points inward.
3. Confirm no force calculation (F = qE) and no rearrangement for r or q is taught.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly (with the fraction typeset inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v03.md` scene 16.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Electric Field Strength and the Inverse Square Law | Year 11 Physics

(Title length: 67 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson04.sa.html

Move twice as far from a charge and its field doesn't halve. It drops to a quarter. Why? See how a fixed number of field lines spreads over a growing sphere, why that gives the inverse square law, and how the area of the sphere sits right inside the equation E = (1/4πε₀) q/r². Then calculate a field strength, use the equation to show the law at work, and try two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Use the equation E = (1/4πε₀) q/r² to demonstrate that the electric field strength around a point charge follows the inverse square law" (ci6d5de19d)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electric fields, field line diagrams and lightning (previous video). Next: The force on a charge in an electric field.

#Year11Physics #Physics #ElectricFields #HSCScience

## Open decisions

- **1. v05's question (proposal).** The handoff chip uses "Why does the same electric field push a proton and an electron with equal force, but in opposite directions?" for phys-y11-fa3-v05 (route placeholder "How can I explain and apply force on charges in an electric field?"). It is the site's lesson 5 hook made one causal question. v05's design (written next) adopts it.
- **2. Rearranging for r or q.** The site's Can Do list and Q2 include r = √(kq/E). The syllabus point asks to use the equation to demonstrate the inverse square law, and the video already fills its length with the cause and the demonstration. Left to the site's practice; root may add a short worked "find the distance" scene in place of the E against 1/r² re-plot if the review prefers it.
- **3. Equation form.** Syllabus form first, then k. If the 2025 HSC reference sheet prints only one form, root aligns the screen text (the narration says both).
- **4. Route refinement (root to record).** Question as above; start "Begin at v03's r and 2r circles; recall field lines and closer means stronger"; stop "Stop at E for a point charge and the inverse square law demonstrated with the equation; hand the force on a charge to v05".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v03 at Year 11 entry; check that "force on each coulomb" makes E feel like a property of the field without F = qE; that the sphere count and the four-square patch make "a quarter, not half" feel caused; that 4πr² in the equation lands; that the demonstration in 8 reads as a test, not a repeat; that the attempts give nothing away), then the Codex physics check and error check.
- The equal sphere counters (3), the patch splitting into four and nine squares (4), the glowing 4πr² (6) and the curve straightening (8) carry the explanation; judge them at playback speed in the voiced preview.
