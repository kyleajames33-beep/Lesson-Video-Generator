# math-s11-a11: How does the trapezoidal rule estimate an irregular area or volume?

Maths Standard pre-design pack (Year 11, Applications of measurement), 23 November 2026, written by Claude (designer of record) in the form of the m packs, from route inputs 11 (`../../../programme/maths-standard-route-inputs-11.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Applications of measurement, group "Perimeter, area and volume", outcome MST-11-05:

- `ci3786e651`: Apply the Trapezoidal rule A ≈ (h/2)(d_f + d_l), where A is the area, d_f and d_l are the lengths of the parallel sides of the trapezium, d_f is the first length and d_l is the last length, and h is the perpendicular distance between them, to solve a variety of practical problems involving area, volume and capacity for up to four applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fad74ae493). Site coverage: covered (lesson13).

**Entry knowledge:** math-s11-a05a (a trapezium's area as its average width times its height); math-s11-a09 (V = Ah); math-s11-a03 (1 m³ = 1 kL); math-s11-a02 (hectares).

**Prior video:** math-s11-a10. **Start:** a10's final frame (the garden pond with a coded tape across it; chips "no formula fits", "Next: the trapezoidal rule", "?").

**Stop:** A ≈ (h/2)(d_f + d_l) as a trapezium's average width times the gap, with d_f, d_l and h named as the syllabus names them; why it estimates (the edge is treated as straight); up to four applications, each with its own first and last length, added; a zero length at a pointed end; more applications, a closer estimate; volume as a cross-section's area times a length; capacity in kL. Closes the strand. Not: the word "offset", the "ends once, middles twice" shortcut, plans, photos and maps to scale (Year 12 r07).

**Next:** math-s11-t01 (provisional): the wall clock and the stopwatch; chips "60 s = 1 min", "60 min = 1 h"; grey chip "Applications of measurement: done"; chips "Next: time units", "?".

## 2. Site order, sections and worked examples

`year11/applications-of-measurement/lesson13.sa.html`: hook (a lake's widths every 20 m); one strip "the area of a single trapezium"; multiple strips with "2d_m" ("first and last appear once; all interior measurements are doubled"); WE1 (28, 34, h = 18: 558 m²), WE2 (0, 14, 22, 19, 11, 0 at 10 m: 660 m²), WE3 (river depths at 4 m: 42.4 m²); traps; drill 2 (110, 95, 80 apart: 0.82 ha); Q2 (harbour depths and a volume).

All values recalculated: no arithmetic error. Site decision: the 2024 point says "up to four applications" of A ≈ (h/2)(d_f + d_l); the site teaches a compressed many-strip formula with d_m. The video applies the syllabus rule strip by strip (up to four) and leaves "ends once, middles twice" to Year 12 r07, which teaches it as new (MSY-21). The site's WE2 uses five applications, beyond the point.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Land block (site WE1) | 18/2 × (28 + 34) | 558 m² |
| Pond, widths every 2 m: 0, 3.2, 4.1, 3.6, 0 | 1 × 3.2 + 1 × 7.3 + 1 × 7.7 + 1 × 3.6 | 21.8 m² |
| Pond with fewer applications | one (h = 8): 4 × (0 + 0); two (h = 4): 2 × 4.1 + 2 × 4.1 | 0 m²; 16.4 m² |
| Pond water at about 0.6 m deep | 21.8 × 0.6 | 13.08 m³ = 13.08 kL |
| Channel depths every 0.3 m: 0, 0.25, 0.32, 0.26, 0; 50 m long | 0.15 × (0.25 + 0.57 + 0.58 + 0.26) = 0.249 m²; × 50 | 12.45 m³ = 12.45 kL |

## 4. Misconceptions and HSC-style traps

- Forgetting to halve h.
- h taken as the whole length rather than the gap between two widths.
- Counting the number of widths as the number of applications.
- Writing "=" for an estimate.
- Not converting m² to hectares, or m³ to kL.

## 5. Visual needs

The pond and tape (from a10); a strip builder (straight chords between width lines, the region under each chord filling as a trapezium, slivers tinted); a slider for 1, 2 and 4 applications with an area readout; the pond's water level for a volume; the drainage channel plate with a coded cross-section and its four strips; the land block for one application.

## 6. Two original candidate practice questions

**Question 1.** A paddock lies between two parallel fences 110 m and 95 m long, which are 80 m apart. Use one application of the trapezoidal rule to estimate its area in hectares.
Worked answer: A ≈ 80/2 × (110 + 95) = 40 × 205 = 8200 m² = 0.82 ha. Slip: "80 × 205 = 16 400 m²" (h not halved).

**Question 2.** A garden bed's widths are measured every 1.5 m: 2.0 m, 2.6 m, 2.2 m. (a) Use two applications of the trapezoidal rule to estimate its area. (b) Mulch is spread 8 cm deep. Estimate the volume of mulch in cubic metres.
Worked answer: (a) 0.75 × (2.0 + 2.6) + 0.75 × (2.6 + 2.2) = 3.45 + 3.6 = 7.05 m². (b) 7.05 × 0.08 = 0.564 m³. Slip: "1.5 × 4.6 + 1.5 × 4.8 = 14.1 m²" (h not halved).

## 7. Everyday anchors

A land block; a garden pond; a drainage channel; a paddock; a garden bed. No people.

## 8. Site corrections and decisions for Claude

- MSY-21: applications counted and capped at four; the d_m form left to Year 12 r07.
- Notation exactly as Year 12 r07 recalls: "d f, the first length", "d l, the last length", "h, the perpendicular distance between them"; "on the reference sheet" (Codex confirms against the 2024 reference sheet).
- Close the strand: grey chip "Applications of measurement: done"; the t01 frame is provisional.
- Pace: about 9 minutes.
