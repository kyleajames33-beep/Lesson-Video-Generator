# math-s12-t02: How do inverse trig ratios find a missing angle in degrees and minutes?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci74344e24`: Apply trigonometric ratios to right-angled triangles to find either the lengths of unknown sides or the size of unknown angles in both degrees, and degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered. Shared with math-s12-t01: this video owns the angles.

Standard 1 (Year 12, Right-angled triangles):

- `cif8689656`: Apply trigonometric ratios to find the size of unknown angles in right-angled triangles, in both degrees, and degrees and minutes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical teaching. Playlist order 52 (ruling 46 positions).

**Entry knowledge:** math-s12-t01: `ci74344e24` and `ci07db556a` (labelling O, A, H from a chosen angle; the three ratios; degrees and minutes typed as degrees + minutes ÷ 60). Angle sum of a triangle, 180° (Stage 4, assumed in a phrase).

**Prior video:** math-s12-t01 (or t01b if split).

**Start:** t01's final frame (proposed): the roof triangle with its sides now known (3.15 m up, 4.51 m across) and the angle covered by a "?" card: "If we only knew the sides, could we get the 35° back?"

**Stop:** Inverse ratios undo a ratio: from two known sides, write the ratio, then sin⁻¹, cos⁻¹ or tan⁻¹ gives the angle (said as "inverse sine, the angle whose sine is ..."); the calculator gives decimal degrees; converting to degrees and minutes (decimal part × 60, minutes under 60, nearest minute); the other acute angle as 90° minus the first; a practical angle (a ladder, a ramp, a roof pitch). Not taught: elevation and depression by name (t03), bearings (t04).

**Next:** math-s12-t03.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f0782a717286d6c886a2e69e9adc65b400fe5b7378ecd4a2858f24cc9d8fc57a`. Sections used: `orient-to-inverse-trig` (cards 01, 02, 04), `reverse-the-process` (card 05), `work-three-angle-examples` (`we-1` to `we-3`), `avoid-the-inverse-traps`, `drill-unknown-angles` (drills 1 to 8), `revisit-unknown-angles`, `practise-unknown-angles` (SA 1, SA 3). Also lesson01 `we-3` (`tan θ = 0.842`, 40°6') from [trigonometry/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson01.sa.html) (SHA256 `bbddb5ce1c17fbe9cad548c75ca6a38af0b1b0f4fe6817dbe5f126488ac290bd`).

### Source lesson03, cards 01, 02 and 05

Hook: "If $\sin\theta = 0.5$, you know $\theta = 30°$. But what if $\sin\theta = 0.73$? What operation would you use on your calculator?" Card 02: "This is the "undo" operation for $\sin$, $\cos$, or $\tan$." "Step 1: Label O, A, H and identify which two sides you know. Step 2: Write the trig ratio (e.g. $\sin\theta = O/H$). Step 3: Evaluate the ratio (divide the two numbers). Step 4: Apply the inverse: $\theta = \sin^{-1}(\text{result})$. Step 5: Convert to degrees and minutes if required." Card 05: "If your calculator gives $38.7°$, the minutes are $0.7 \times 60 = 42'$. So the answer is $38°42'$. Always round minutes to the nearest whole minute unless told otherwise."

### Source lesson03, `we-1` to `we-3`

`we-1`: "A right-angled triangle has opposite side 7 cm and hypotenuse 11 cm. Find the angle $\theta$ opposite the 7 cm side, in degrees and minutes." "$\theta = \sin^{-1}(0.6364) \approx 39.52°$" "$0.52 \times 60 = 31.2 \approx 31'$; $\theta \approx 39°31'$". `we-2`: "A building is 45 m tall. An observer stands 60 m from the base. Find the angle of elevation to the top of the building" ($\tan^{-1}(0.75) \approx 36.87°$, $36°52'$). `we-3`: "A right-angled triangle has legs 8 m and 15 m. Find both acute angles in degrees and minutes." ($28°4'$; "$\beta = 90° - 28°4' = 61°56'$").

### Source lesson03, traps, drills, revisit and SA

Trap 01: "Writing $\sin\theta = 0.73$ and then saying $\theta = 0.73$ is a classic error." Trap 02: "$39.5°$ is NOT $39°50'$. ... A quick mental check: minutes must be less than 60." Fill the gap: "$47.35°$ ... $47°$'" (21). Drills: 22°37', 53°8', 16°16', 22°37' and 67°23', 9°28' (ramp 1.5 m over 9 m), 66°25' (10 m ladder, foot 4 m out), 21°48', 67°23'. Revisit: "$\theta = \sin^{-1}(0.73) \approx 46.89° \approx 46°53'$" and "in a right-angled triangle (angles strictly between 0° and 90°), each ratio value maps to exactly one angle." SA 1: hypotenuse 20 cm, side 12 cm (53°8', 36°52'). SA 3: "A 15-metre telephone pole ... support wire's angle with the ground to be between 55° and 70°" (59°2', yes, 5.5 m).

## 3. Recalculation

- lesson03: `we-1` 39.5212°, so 39°31'; `we-2` 36.8699°, so 36°52'; `we-3` 28.0725°, so 28°4', and 61°56'; quick check sin⁻¹(5/13); revisit 46.8864°, so 46°53'; drills 22°37', 53°8', 16°16', 22°37' and 67°23', 9°28', 66°25', 21°48', 67°23'; SA 1 53°8' and 36°52'; SA 2 19°39'; SA 3 59°2', 15 ÷ tan 70° = 5.46, so 5.5 m.
- lesson01 `we-3`: tan⁻¹(0.842) = 40.0974°, so 40°6'.
- t01's roof read back: tan⁻¹(3.1547 ÷ 4.5053) = 35.000°.
- Anchors: roof rise 2.1 m over a run of 4.5 m: tan⁻¹(2.1/4.5) = 25.0169°, so 25°1'; ladder at 4 up for 1 out: tan⁻¹ 4 = 75.9638°, so 75°58'.
- Slide anchor: sin⁻¹(2.1/3.6) = 35.6853°, so 35°41'. Rounded-ratio slip: sin⁻¹ 0.64 = 39.7918°, 39°48' (against 39°31').
- Question 1: tan⁻¹(0.6/7.5) = tan⁻¹ 0.08 = 4.5739°, so 4°34'; limit tan⁻¹(1/14) = 4.0856°, so 4°5'. Question 2: cos⁻¹(1.1/4.2) = 74.8169°, so 74°49'; other angle 15.1831°, so 15°11'.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers in lesson03 match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing θ = 0.73 (the ratio is not the angle); pressing sin instead of sin⁻¹.
- 39.5° written as 39°50' (decimal read as minutes); minutes of 60 or more.
- Rounding the ratio before the inverse (7 ÷ 11 = 0.64 gives 39.79°, 39°48', not 39°31').
- Choosing the ratio by habit (tan for every angle) instead of from the two known sides.
- Labelling O and A from the wrong angle when the "other" angle is asked.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The roof triangle from t01 with its angle hidden, then a coded "undo" arrow: angle → sin → ratio, and ratio → sin⁻¹ → angle (one machine run forwards, then backwards).
- A coded calculator screen with SHIFT and sin⁻¹: "sin⁻¹(7 ÷ 11) = 39.52119..."; the decimal part peeled off and turned into minutes on a minutes dial (0.52 of a degree fills 31 of 60 ticks).
- Both acute angles: the triangle's two corners lit in turn, 28°4' and 61°56' adding to 90° in a small sum bar.
- A ladder or ramp picture for the practical angle with a "safe range" band (site SA 3's 55° to 70° wire, or the 4-to-1 ladder).

Advanced reuse (visual parts only): `MinutesDial` and `fmtDMS` (a11-trig-triangle.tsx: the dial already reads "0.87° × 60 ≈ 52′"); `StudioTriangle` with `triRight` and `focus` for the second angle; `StudioToolPanel` (integration-parts.tsx) as the calculator; `TargetDial` (finance-parts.tsx) for a "safe angle" range if used. Plates: the house (t01's join); `maths/ma11-entrance-ramp-v1.png` exists but is Advanced w10's anchor (plate reuse only, Question 1's picture, root may prefer a coded ramp); a ladder against a wall (new `ms12-` plate, or coded). Kit needs: none essential.

## 6. Two original candidate practice questions

### Question 1

A ramp to a shop entrance rises 0.6 m over a horizontal distance of 7.5 m. (a) Find the angle the ramp makes with the horizontal, correct to the nearest minute. (b) A building rule allows a ramp no steeper than a gradient of 1 in 14 (1 m up for every 14 m across). Find the angle of that steepest allowed ramp, to the nearest minute, and decide whether this ramp is allowed.

**Worked answer:** (a) Rise opposite, run adjacent, so tan θ = 0.6 ÷ 7.5 = 0.08; θ = tan⁻¹ 0.08 = 4.574°; 0.574 × 60 = 34.4, so 4°34'. (b) tan⁻¹(1/14) = 4.086°, so 4°5'. 4°34' is steeper than 4°5', so the ramp is not allowed.

### Question 2

A 4.2 m ladder leans against a vertical wall with its foot 1.1 m from the wall on level ground. (a) Find the angle between the ladder and the ground, correct to the nearest minute. (b) Find the angle between the ladder and the wall.

**Worked answer:** (a) The 1.1 m is adjacent to the ground angle and the ladder is the hypotenuse: cos θ = 1.1 ÷ 4.2; θ = cos⁻¹(1.1/4.2) = 74.817°; 0.817 × 60 = 49.0, so 74°49'. (b) 90° − 74°49' = 15°11'.

Only the question goes on the card (with a sketch). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "θ = 0.08", crossed, "0.08 is the ratio; tan⁻¹ turns it into the angle"; for Question 2 (a): "74.82° = 74°82'", crossed, "0.82 of a degree is 0.82 × 60 = 49 minutes"). Answers were checked with SymPy. Question 1's 1-in-14 limit is the commonly cited maximum ramp gradient in AS 1428.1 (Design for access and mobility); Codex confirms the current wording before the video states it as a rule, otherwise the card calls it "a building rule" only.

## 7. Everyday anchors

- **A builder's roof pitch:** a roof that rises 2.1 m over a 4.5 m run has a pitch of about 25°1' (home; reading t01's roof backwards, and why roof angles come from measured sides).
- **The ladder "1 out for every 4 up" rule:** foot 1 m out for 4 m up is about 75°58' (home and work safety; the angle a safety rule hides).
- **A playground slide:** a straight slide 3.6 m long whose top is 2.1 m up makes sin⁻¹(2.1/3.6) = 35.685°, about 35°41', with the ground (leisure; a sine angle, so not every angle is a tan).

Varied everyday contexts (home, safety, leisure). None repeats an anchor in the Advanced designs or the Standard packs (grepped 18 November 2026: Advanced w10's anchor is the entrance ramp's 1-in-14 gradient, so the ramp is kept to a practice-question picture here; "ladder" appears in Advanced designs only as "factor ladder" or "proof ladder" diagrams; "slide" has no trigonometry anchor). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in lesson03 (MS-44 covers the page's "Year 11, Module 2" labels).

Decisions for Claude:

- **Undo before notation:** show the forward ratio and its undo with the roof's known sides recovering 35° before writing sin⁻¹; say "inverse sine" and its meaning, and say once that sin⁻¹ is not 1 ÷ sin (a likely misreading of the index).
- **Degrees and minutes:** the site's card 05 rule (decimal part × 60) plus trap 02 (39.5° is 39°30'); a minutes dial makes "sixtieths" visible.
- **Uniqueness:** keep the site's revisit point in one sentence (inside a right-angled triangle each ratio gives one angle); the obtuse case belongs to t07.
- **Keep the ratio unrounded** until the inverse (a two-line demonstration with 7 ÷ 11).
- **Standard 1 path:** identical.
- **Pace: fits** (6 to 8 minutes).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
