# math-s11-a08: How do we find the surface area of prisms, cylinders, spheres and composite solids?

Maths Standard pre-design pack (Year 11, Applications of measurement), 23 November 2026, written by Claude (designer of record) in the form of the m packs, from route inputs 11 (`../../../programme/maths-standard-route-inputs-11.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Applications of measurement, group "Perimeter, area and volume", outcome MST-11-05:

- `ci5c8f765b`: Solve practical problems involving the surface area of prisms, cylinders, spheres and composite solids in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fad74ae493). Site coverage: covered (lesson06, lesson07).

**Entry knowledge:** math-s11-a05a (rectangle and triangle areas; "plan first"); math-s11-a05b (C = 2πr, A = πr², halve the diameter); math-s11-a06 (Pythagoras for a missing edge).

**Prior video:** math-s11-a07. **Start:** a07's final frame (the cereal box with "30 cm × 20 cm × 8 cm"; chips "how much cardboard?", "Next: surface area", "?").

**Stop:** surface area as the total area of the outside faces (square units), not volume; the net of a prism; a triangular prism's sides as the end's perimeter times the length; a cylinder's curved surface unrolled (2πr × h); closed and open cylinders; a sphere 4πr²; a hemisphere 3πr²; composite and partial solids by listing exposed and hidden faces. Not: cones and pyramids (not named in the point); volume (a09).

**Next:** math-s11-a09: the water tank with "1.8 m wide, 2 m tall"; chips "how many litres?", "Next: volume of prisms and cylinders", "?".

## 2. Site order, sections and worked examples

`year11/applications-of-measurement/lesson06.sa.html`: hook (wrapping a gift box); nets; the cylinder's curved surface unrolled ("width = circumference"); WE1 (8, 5, 3 cm box: 158 cm²), WE2 (triangular prism with legs 6 and 8, hypotenuse 10, length 15: 408 cm²), WE3 (closed cylinder r = 7, h = 12: 266π; open tank d = 3 m, h = 4 m: 14.25π); SA 5 (chocolate box with legs 9 and 12, length 20: 828 cm²). `lesson07.sa.html`: sphere 4πr²; hemisphere 3πr² ("never forget the flat base"); hidden faces at a join ("joining always hides TWO faces"); WE3 (silo: 96π m²).

Values recalculated: no arithmetic error in the worked examples. Site issues: lesson06 drill 4 uses sin 60° for an equilateral triangle's area (Year 12 trigonometry; MSY-13); lesson07's answer list mixes in answers to cone and pyramid questions that the page does not ask (MSY-19).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Cereal box | 2 × (30 × 20 + 30 × 8 + 20 × 8) | 2 × (600 + 240 + 160) = 2000 cm² |
| Chocolate box (legs 9, 12; length 20) | hypotenuse 15; 2 × 54 + (9 + 12 + 15) × 20 | 108 + 720 = 828 cm² |
| Tin (r = 4, h = 11) | curved 2π × 4 × 11; ends 2π × 16 | 88π = 276.46; 32π = 100.53; total 120π = 376.99 cm² |
| Golf ball (d ≈ 4.27 cm) | 4π × 2.135² | 57.28 cm² |
| Polytunnel (r = 1.5 m, length 6 m) | half curved π × 1.5 × 6; two half-ends π × 1.5² | 9π + 2.25π = 11.25π = 35.34 m² |

## 4. Misconceptions and HSC-style traps

- Missing a face of a prism (often the third rectangle of a triangular prism).
- The diameter in the cylinder formula.
- Treating a hemisphere as half a sphere's surface (forgetting the flat face).
- Counting hidden faces at a join, or a floor that isn't covered.
- Surface area in cm³.

## 5. Visual needs

The cereal box (from a07) unfolding into its net; the chocolate box as a coded triangular prism with its rectangles laid out as one long strip (perimeter × length); the food tin's label peeling off into a rectangle 2πr wide; the golf ball beside four circles of the same radius; the polytunnel plate with its plastic cover lifted into a half-rectangle and two half-circles; an exposed or hidden face list.

## 6. Two original candidate practice questions

**Question 1.** A closed cylindrical tin has a diameter of 10 cm and a height of 14 cm. Find its total surface area, correct to 2 decimal places.
Worked answer: r = 5; 2π × 25 + 2π × 5 × 14 = 50π + 140π = 190π = 596.90 cm². Slip: "r = 10" (200π + 280π = 480π = 1507.96 cm²).

**Question 2.** A bollard is a cylinder of radius 0.15 m and height 0.9 m with a hemisphere of the same radius on top. Its base stands in the ground. Find the area to be painted, correct to 2 decimal places.
Worked answer: curved side 2π × 0.15 × 0.9 = 0.27π; dome 2π × 0.15² = 0.045π; total 0.315π = 0.99 m². Slip: "0.315π + 2π × 0.15² = 1.13 m²" (the two hidden circles at the join counted).

## 7. Everyday anchors

A cereal box; a chocolate box; a food tin; a golf ball; a garden polytunnel; a bollard. No people.

## 8. Site corrections and decisions for Claude

- MSY-13 (trigonometry in a drill), MSY-19 (stray answers in lesson07). Neither used.
- Cones are not in this point; a10 uses cones for volume only.
- Pace: about 9 minutes (full).
