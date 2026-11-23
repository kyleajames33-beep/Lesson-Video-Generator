# math-s11-a05b: How do we find the perimeter and area of circles, sectors and shapes with curved edges?

Maths Standard pre-design pack (Year 11, Applications of measurement), 23 November 2026, written by Claude (designer of record) in the form of the m packs, from route inputs 11 (`../../../programme/maths-standard-route-inputs-11.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Applications of measurement, group "Perimeter, area and volume", outcome MST-11-05:

- `ci139f00a0`: Solve practical problems requiring the calculation of perimeters and areas of triangles, rectangles, parallelograms, trapeziums, circles, sectors of circles and composite shapes in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fad74ae493). Site coverage: covered. **Shared:** a05b takes circles, sectors of circles and composite shapes with curved edges (a05a took the straight-edged shapes).

**Entry knowledge:** math-s11-a05a (perimeter as outside edges; area; "plan first"; the parallelogram as base × height); Stage 4 and 5 circle vocabulary (radius, diameter) and π as a number near 3.14 (recalled, with its meaning shown again).

**Prior video:** math-s11-a05a. **Start:** a05a's final frame (the pizza with one slice outlined; chips "crust?", "Next: circles, arcs and sectors", "?").

**Stop:** π as how many diameters fit around a circle; C = πd = 2πr; A = πr² (sectors rearranged into a near-rectangle); the radius from a diameter; a sector as the fraction θ/360 of a circle, for its arc and its area; a sector's perimeter = arc + 2 radii; curved composites (a running track, a path around a pond); the π key and rounding at the end. Not: the sine area rule (site lesson05; Year 12 t09; MSY-13).

**Next:** math-s11-a06: the softball diamond with home and second base ringed; chips "18.3 m", "home to second?", "Next: Pythagoras' theorem", "?".

## 2. Site order, sections and worked examples

`year11/applications-of-measurement/lesson02.sa.html`: circle A = πr² ("use the π button, never 3.14"; "halve the diameter first"; diameter used gives four times the area); WE2 (d = 14: 153.94 cm²); WE3 (rectangle minus semicircle). `lesson04.sa.html`: hook (a pizza slice's pastry frame); circumference; arc ℓ = θ/360 × 2πr; sector perimeter P = 2r + ℓ; WE2 (r = 12, 135°: 52.27 m); WE3 (running track 60 m by 20 m: 182.83 m); trap 01 (arc only), trap 02 (internal edges). `lesson05.sa.html`: sector area θ/360 × πr²; annulus π(R² − r²) as a composite; WE1, WE2; its sine area rule card is Year 12 content (MSY-13).

Values recalculated: two site errors in lesson04's practice. Drill 8 (a quarter circle of radius 4 cm removed from the corner of a 4 cm square) answers 18.28 cm with "three full sides + quarter arc"; the remaining shape has two full sides and the arc, 8 + 2π = 14.28 cm (MSY-17). SA 3 (a "garden path" with sides 8, 5, 8 m and an arc of radius 5 m centred at the midpoint of the 5 m side) describes an impossible figure, and its 60° answer uses a different one (MSY-17). Neither is used.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Pizza, d = 30 cm | C = 30π; A = π × 15² = 225π | 94.25 cm; 706.86 cm²; slip π × 30² = 2827.43 |
| 45° slice | 45/360 × 30π; 45/360 × 225π; arc + 2 × 15 | 11.78 cm; 88.36 cm²; 41.78 cm |
| Track | 2 × 60 + 20π; 60 × 20 + π × 10² | 182.83 m; 1514.16 m² |
| Pond path | π(3² − 2²) = 5π | 15.71 m² |

## 4. Misconceptions and HSC-style traps

- Using the diameter in πr² (four times too big).
- Using 3.14 or rounding π early.
- The arc alone as a sector's perimeter.
- Counting an internal diameter in a composite perimeter.
- Arc length (cm) mixed with sector area (cm²).

## 5. Visual needs

The pizza (from a05a); a circle rolling along a line one turn, its diameter laid off just over 3 times; the circle cut into 16 sectors rearranged into a near-rectangle (πr by r); a fraction wheel θ/360 with a slider; the round cake plate; a coded running track; the garden pond plate with a coded path ring.

## 6. Two original candidate practice questions

**Question 1.** A round cake of diameter 24 cm is cut into 6 equal slices. For one slice, find (a) the length of its curved edge, (b) the perimeter of its top, and (c) the area of its top. Give answers correct to 2 decimal places.
Worked answer: r = 12, θ = 60°. (a) 60/360 × 24π = 4π = 12.57 cm. (b) 24 + 12.57 = 36.57 cm. (c) 60/360 × 144π = 24π = 75.40 cm². Slip: "perimeter = 12.57 cm".

**Question 2.** A garden is a 12 m by 8 m rectangle with a semicircle added along one 8 m end. Find its area and its perimeter, correct to 2 decimal places.
Worked answer: area 96 + ½π × 4² = 96 + 8π = 121.13 m²; perimeter 12 + 12 + 8 + ½ × 8π = 32 + 4π = 44.57 m. Slip: "40 + 4π = 52.57 m" (the join counted).

## 7. Everyday anchors

A pizza; a round cake; a running track; a garden pond with a path; a garden with a curved end. No people.

## 8. Site corrections and decisions for Claude

- MSY-13 (the sine area rule is Year 12), MSY-17 (two lesson04 practice errors). Neither is taught or used.
- "Plan first" from a05a; the π key throughout; round only at the end.
- Pace: about 9 minutes.
