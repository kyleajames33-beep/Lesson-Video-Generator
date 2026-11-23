# math-s11-a10: Why do pyramids and cones hold a third of a prism, and how do spheres compare?

Maths Standard pre-design pack (Year 11, Applications of measurement), 23 November 2026, written by Claude (designer of record) in the form of the m packs, from route inputs 11 (`../../../programme/maths-standard-route-inputs-11.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Applications of measurement, group "Perimeter, area and volume", outcome MST-11-05:

- `ci6e07f2cb`: Solve practical problems involving volume and capacity of prisms, cylinders, spheres, cones, pyramids and composite solids in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fad74ae493). Site coverage: covered (lesson09). **Shared:** a10 takes pyramids, cones, spheres and composites with them (a09 took prisms and cylinders).

**Entry knowledge:** math-s11-a09 (V = Ah; πr²h; capacity); math-s11-a06 (Pythagoras for a perpendicular height); math-s11-a08 (sphere and hemisphere words); math-s11-a03 (1000 cm³ = 1 L).

**Prior video:** math-s11-a09. **Start:** a09's final frame (the ice-cream cone beside a coded cylinder of the same radius and height; chips "how many cones fill it?", "Next: pyramids, cones and spheres", "?").

**Stop:** V = ⅓Ah for pyramids and cones, shown by three pours; the perpendicular height, not the slant height (Pythagoras when needed); V = 4/3 πr³ for a sphere, two thirds of its wrapping cylinder; the hemisphere ⅔πr³; composite solids; capacity in litres. Not: the surface area of cones and pyramids (not in the 2024 Year 11 points).

**Next:** math-s11-a11: the garden pond with a coded tape across it; chips "no formula fits", "Next: the trapezoidal rule", "?".

## 2. Site order, sections and worked examples

`year11/applications-of-measurement/lesson09.sa.html`: hook (a cone poured into a cylinder of the same radius and height); "Pyramid = ⅓ of enclosing prism, always"; cone ⅓πr²h ("use h, not ℓ"; h = √(ℓ² − r²)); sphere 4/3 πr³; hemisphere ⅔πr³; WE1 (square pyramid 9 m, 8 m: 216 m³), WE2 (cone 5, 12: 100π), WE3 (sphere d = 18: 972π); traps (slant height; r² for r³; the missing ⅓); Q1 (cone ℓ = 10, r = 6: h = 8, 96π), Q2 (paperweight: hemisphere on a cone: 272π/3), Q3 (silo: cylinder plus cone).

Values recalculated. Site issue: Q3 (d) multiplies the rounded volume 254.5 by 750 (190 875 kg), against the page's own rule to round only at the end; with 81π the answer is 190 851.75 kg, still about 191 t (MSY-20, minor).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Cone and cylinder (r = 3, h = 10) | ⅓π × 9 × 10; π × 9 × 10 | 30π = 94.25 cm³; 90π = 282.74 cm³ |
| Skylight pyramid (base 1.2 m square, h 0.9 m) | ⅓ × 1.44 × 0.9 | 0.432 m³ |
| Cone planter (r = 30 cm, slant 50 cm) | h = √(50² − 30²) = 40; ⅓π × 900 × 40 | 12 000π = 37 699 cm³ ≈ 37.7 L |
| Watermelon (d = 24 cm) | 4/3 π × 12³ | 2304π = 7238.23 cm³ ≈ 7.24 L |
| Wrapping cylinder (r = 12, h = 24) | π × 144 × 24 | 3456π; sphere = ⅔ of it |
| Ice cream (cone r 3, h 10; hemisphere r 3) | 30π + ⅔π × 27 = 30π + 18π | 48π = 150.80 cm³ |

## 4. Misconceptions and HSC-style traps

- The missing ⅓.
- The slant height used as the height.
- r² instead of r³ for a sphere.
- A hemisphere as the whole sphere.
- Not converting cm³ to litres.

## 5. Visual needs

The cone and cylinder (from a09); a pour simulation (three cones of water fill the cylinder); a shrinking slice stack (why a cone isn't a prism); a coded skylight pyramid inside its box; the cone planter with its right triangle; the watermelon inside a wrapping cylinder with the sphere filling two thirds; the ice-cream composite with a face-style part list.

## 6. Two original candidate practice questions

**Question 1.** A pile of sand is a cone with a base radius of 1.5 m and a height of 1.2 m. Find its volume, correct to 2 decimal places.
Worked answer: ⅓ × π × 1.5² × 1.2 = 0.9π = 2.83 m³. Slip: "π × 1.5² × 1.2 = 8.48 m³" (the ⅓ left out).

**Question 2.** A mixing bowl is a hemisphere with an inside radius of 12 cm. How many litres does it hold, correct to 2 decimal places?
Worked answer: ⅔ × π × 12³ = 1152π = 3619.11 cm³ = 3.62 L. Slip: "⅔ × π × 12² = 301.59 cm³" (r² used).

## 7. Everyday anchors

An ice-cream cone; a skylight; a cone planter; a watermelon; a sand pile; a mixing bowl. No people.

## 8. Site corrections and decisions for Claude

- MSY-20 (early rounding in Q3 (d)); not used.
- The pyramid example is a skylight, not the site's abstract pyramid.
- Pace: about 8.5 minutes.
