# math-s12-t08: How does the cosine rule find a missing side or angle?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci431f9599`: Apply the cosine rule c^2 = a^2 + b^2 - 2ab cos C in a given triangle ABC to find the value of an unknown side [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.
- `ci3e1d3a01`: Apply the cosine rule cos C = (a^2 + b^2 - c^2)/(2ab) in a given triangle ABC to find the value of an unknown angle [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.

Standard 1: no matching point. These are CMS codenames, not published content-point codes. (The crosswalk's plain text writes the rule with a hyphen for minus; the official HTML has the minus sign.)

**Course:** Standard 2 only. Playlist order 58 (ruling 46 positions).

**Entry knowledge:** math-s12-t06 and t07: `ci26620302`, `ci50b6961b` (the sine rule needs a matched pair); math-s11-a06: `cib49e1f1d` (Pythagoras, which the cosine rule extends); math-s12-t02: `cif8689656` (an inverse ratio, degrees and minutes).

**Prior video:** math-s12-t07.

**Start:** t07's final frame (proposed): a farmer's triangular paddock, two fences from one corner (240 m and 180 m) meeting at 110°, the third side "? m of wire" (the site lesson07 hook). "No side has its opposite angle: the sine rule cannot start."

**Stop:** The included angle (the angle between two named sides); SAS (two sides and the angle between) gives the third side by c² = a² + b² − 2ab cos C, then a square root; it is Pythagoras with a correction (at 90° the last term is zero); an obtuse included angle makes the correction add (cos is negative), so the third side is longer than Pythagoras would give; SSS (three sides) gives an angle by cos C = (a² + b² − c²) ÷ 2ab, with c the side opposite the wanted angle; a negative cosine means an obtuse angle and the calculator returns it directly (no 180° step, unlike t07); the largest angle faces the longest side; the choice between the sine and cosine rules in one line. Area is t09.

**Next:** math-s12-t09.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f5b3fa68203801b3bf3a6143e88e7e2b1b83f6c65558b093d19799c4b7193809`. Sections used: `orient-to-the-cosine-rule` (cards 01, 02, 04), `choose-your-rule` (card 05), `work-three-cosine-rule-examples` (`we-1`, `we-2`), `avoid-the-cosine-rule-traps` (traps 01 to 03), `drill-the-cosine-rule` (drills 1 to 3, 5 (angle part)), `revisit-the-cosine-rule` (the wire), `practise-the-cosine-rule` (Q1, Q2 (angle part)). Area (`we-3`, drill 4) is t09's; Q3 is t11's.

### Source lesson07, cards 01, 02 and 05

Hook: "A farmer needs to fence a triangular paddock. Two fences already run from one corner, one of $240\text{ m}$ and one of $180\text{ m}$, and they meet at $110°$. How much wire does the third side need, and how much spray does the paddock take? Not one angle is opposite a side you know." Card 02: "The included angle. The angle $C$ is included between sides $a$ and $b$ when those two sides are the ones that form it." "It is Pythagoras with a correction. If $C = 90°$ then $\cos C = 0$, the last term vanishes, and what is left is $c^2 = a^2 + b^2$. The $-2ab\cos C$ term is the price of the angle not being a right angle." Card 05: "A negative value means the angle is obtuse and the calculator will return the obtuse angle directly. There is nothing to subtract from $180°$ and nothing ambiguous to resolve." "Which rule, decided in one line. If you can see a side and the angle opposite it, use the sine rule. If you cannot, you were almost certainly given SAS or SSS, and that is the cosine rule."

### Source lesson07, `we-1` and `we-2`

`we-1`: "In triangle $ABC$, $b = 8\text{ cm}$, $c = 11\text{ cm}$ and $A = 47°$. Find $a$" ("$a^2 = 8^2 + 11^2 - 2(8)(11)\cos 47° = 185 - 176(0.681998)$", "$a^2 = 185 - 120.0317 = 64.9683$", "This is still $a$ squared. The most expensive slip in this topic is stopping here and writing $64.97$ as the answer.", "$a = \sqrt{64.9683} = \mathbf{8.06\text{ cm}}$"). `we-2`: "A triangle has sides $a = 7$, $b = 9$ and $c = 13$. Find its largest angle" ("$\cos C = \dfrac{49 + 81 - 169}{2(7)(9)} = \dfrac{-39}{126}$", "$C = \cos^{-1}(-0.309524) = 108.0305° = \mathbf{108°\,2'}$").

### Source lesson07, traps, drills, revisit and SA

Trap 01: "Answering with $c^2$ instead of $c$". Trap 02: "Using an angle that is not the included one". Trap 03: "Subtracting from 180 out of habit". Quick check: $b = 5$, $c = 8$, $A = 60°$ (7.00). Drills: 8.20; 11.36 ("The correction term is added because the cosine is negative."); 42°; drill 5's largest angle 98°15'. Revisit: "$d^2 = 240^2 + 180^2 - 2(240)(180)\cos 110°$. Since $\cos 110° = -0.342020$ is negative, that last term is added, giving $d^2 = 90000 + 29550.54 = 119550.54$ and $d \approx \mathbf{346\text{ m}}$ of wire." "Notice the third side came out longer than either fence." Q1: "Two straight roads leave an intersection at an angle of $68°$. One cyclist rides $4.2\text{ km}$ ... second cyclist rides $5.7\text{ km}$" (5.67 km). Q2: "A triangular sail has sides of $3.4\text{ m}$, $4.1\text{ m}$ and $5.2\text{ m}$. Find the angle between the two shorter sides" (87°16').

## 3. Recalculation

- `we-1`: a² = 64.9683, a = 8.0603, so 8.06 cm. `we-2`: cos C = −39/126; C = 108.0305°, so 108°2'. Quick check: 7.00 (option B). Drills: 8.1958 so 8.20; 11.3578 so 11.36; 41.7522° so 42°; 98.2515° so 98°15'. Revisit: d² = 119550.54, d = 345.76, so 346 m. Q1: d² = 32.1938, d = 5.6740, so 5.67 km. Q2: 87.2657°, so 87°16'.
- Question 1: d² = 2.4² + 3.1² − 2(2.4)(3.1) cos 126° = 24.1162; d = 4.9108, so 4.91 km. Question 2: cos θ = (16² + 20² − 7.32²) ÷ (2 × 16 × 20) = 0.9412775; θ = 19.7328°, so 19°44'.
- A-frame anchor: boards 0.9 m, feet 0.5 m apart: cos⁻¹((0.81 + 0.81 − 0.25) ÷ 1.62) = 32.2552°, so 32°15'.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Stopping at c² (64.97 for 8.06).
- Using an angle that is not between the two given sides.
- Calculating (a² + b² − 2ab) × cos C, or 185 − 176 = 9 before multiplying by cos C (order of operations).
- Putting the wrong side last in the angle form (the side opposite the wanted angle is subtracted).
- Subtracting from 180° after a negative cosine (habit from t07).
- Using the sine rule without a matched pair.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The paddock (top view): two fences hinged at the corner, the angle opening from 90° (Pythagoras: the third side √(240² + 180²) = 300 m) to 110°: the third side grows past 300 m; a correction bar for "− 2ab cos C" shrinks to zero at 90°, then flips sign and adds.
- Order of work as rows on the g01 board: square, square, the correction product, subtract, square root (with the c² row ringed "still squared").
- SSS: three sides drawn as rods snapping into a triangle; the longest side lit and its opposite angle ringed; cos C's sign shown as a plus or minus chip before the inverse.
- The one-line chooser: "Can you see a side and its opposite angle? sine rule. Otherwise cosine rule."

Advanced reuse (visual parts only): `HingeBars` and `hingeC2` (a11-trig-triangle.tsx: two bars hinged at C with c² live), `StudioTriangle` with `triHinge`, `triSAS`, `triSSS`, `squares` (Pythagoras at 90°) and `pairs`; `fmtDMS`. Plates: a farm paddock from above (the t04 and t05 farm plate, or a new paddock plate, shared with t09 and t10); a soccer goal (new `ms12-` plate, Question 2); an A-frame footpath sign (new plate, optional). Advanced t06's anchor (the yacht's 120° turn) is not used. Kit needs: none essential.

## 6. Two original candidate practice questions

### Question 1

Two walking tracks leave a car park at an angle of 126° to each other. One track runs straight for 2.4 km to a waterfall and the other runs straight for 3.1 km to a lookout. Find the straight-line distance between the waterfall and the lookout, correct to the nearest 10 m.

**Worked answer:** Two sides and the angle between them (SAS), so the cosine rule: d² = 2.4² + 3.1² − 2 × 2.4 × 3.1 × cos 126° = 5.76 + 9.61 + 8.746 = 24.116 (cos 126° is negative, so the term adds). d = √24.116 = 4.91 km, which is 4910 m to the nearest 10 m.

### Question 2

A soccer ball is 16 m from one goalpost and 20 m from the other. The goal is 7.32 m wide. Find the angle between the lines from the ball to the two posts (the shooting angle), correct to the nearest minute.

**Worked answer:** Three sides (SSS); the angle wanted is opposite the 7.32 m side. cos θ = (16² + 20² − 7.32²) ÷ (2 × 16 × 20) = 602.42 ÷ 640 = 0.9413. θ = cos⁻¹(0.9413) = 19.73°; 0.7328 × 60 = 44.0, so 19°44'.

Only the question goes on the card (with a sketch for Question 2). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "d = 24.12 km", crossed, "that's d squared: take the square root"; for Question 2: "subtracting 20² instead of 7.32²", crossed, "subtract the side opposite the angle you want"). Answers were checked with SymPy. 7.32 m is the regulation goal width (FIFA Laws of the Game); Codex confirms the wording at check.

## 7. Everyday anchors

- **Fencing a farm paddock:** two fences of 240 m and 180 m meet at 110°: about 346 m of wire for the third side, longer than either (farming; the site's hook, mirrored).
- **A soccer shooting angle:** the angle the goal mouth makes from where the ball sits, from two distances and the goal's width (sport; an angle from three sides).
- **An A-frame footpath sign:** two 90 cm boards with feet 50 cm apart open at about 32° at the top (shops and streets; SSS with a picture everyone has walked past).

Varied everyday contexts (farming, sport, shops). Repeat check (grepped 18 November 2026): Advanced t06's anchor is the yacht's journey home with a 120° turn, with a golf hole considered in its pack; "soccer", "goalpost" and "A-frame" have no hits; "paddock" appears in Standard a11 (a fencing area problem, not a triangle), r04, r07 and r08 (land and rain), so the paddock here continues the farm thread rather than repeating an anchor. Claude picks; none is required. Objects, never people (the site's cyclists in Q1 stay words).

## 8. Site corrections and decisions for Claude

No new error in the parts of lesson07 used here.

Decisions for Claude:

- **Pythagoras with a correction:** lead with the hinge (90° gives Pythagoras, wider gives more, narrower gives less), as the site's card 02 says; this is the reason students remember the minus sign.
- **Side and angle in one video:** both forms are short; keep them together and show the angle form as the same rule rearranged (no algebra on screen beyond the two lines).
- **Split option:** only if a design cannot fit under 570 s: t08a (a side from SAS, the hinge) and t08b (an angle from SSS, the sign of the cosine, choosing the rule). Not expected.
- **Pace: watch** (8 to 9 minutes with both forms).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
