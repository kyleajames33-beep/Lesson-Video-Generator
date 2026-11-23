# math-s11-a02: Why do area and volume conversions multiply the length factor two and three times?

Maths Standard pre-design pack (Year 11, Applications of measurement), 23 November 2026, written by Claude (designer of record) in the form of the m packs, from route inputs 11 (`../../../programme/maths-standard-route-inputs-11.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Applications of measurement, group "Practicalities of measurement", outcome MST-11-05:

- `ci2d6e3fa8`: Identify and convert between metric units of area, using 1 cm^2 = 100 mm^2, 1 m^2 = 10 000 cm^2, 1 ha = 10 000 m^2 and 1 km^2 = 1 000 000m^2 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fad74ae493). Site coverage: covered (lesson01 card 06).
- `cid416990e`: Identify and convert between metric units of volume, using 1 cm^3 = 1000 mm^3, 1 m^3 = 1 000 000 cm^3, and 1 km^3 = 1 000 000 000m^3. Site coverage: covered (lesson01 card 06).

**Entry knowledge:** math-s11-a01 (the length ladder; multiply to a smaller unit, divide to a bigger one); Stage 4 area of a rectangle and volume of a box (length × width × height).

**Prior video:** math-s11-a01. **Start:** a01's final frame (the floor tile in the corner of a coded 1 m square; chips "1 m = 100 cm", "1 m² = ? cm²", "Next: units of area and volume", "?").

**Stop:** area factor = length factor squared (cm² to mm², m² to cm², km² to m²); the hectare; volume factor = length factor cubed (cm³ to mm³, m³ to cm³, km³ to m³); converting both ways; a tile count from an area. Not: capacity (a03).

**Next:** math-s11-a03: a coded 1 cm cube beside the water jug; chips "1 cm³ holds ? mL", "Next: volume and capacity", "?".

## 2. Site order, sections and worked examples

`year11/applications-of-measurement/lesson01.sa.html`: card 06 ("if 1 m = 100 cm, does that mean 1 m² = 100 cm²?"; the 1 cm square of 100 mm²; the hectare "a standard AFL ground is about 1.6 ha"; cubes 1 cm³ = 1000 mm³, 1 m³ = 1 000 000 cm³); WE2 (c) 400 cm² = 40 000 mm², (d) 400 cm² = 0.04 m²; trap 02 (5 m² = 500 cm², wrong); drill 4 (5.2 m² = 52 000 cm²); SA 4 (3.6 ha = 36 000 m² = 0.036 km²).

All values recalculated: no arithmetic error. Site issues: 1 km³ = 1 000 000 000 m³ (in the point) is not stated (MSY-10 covers the strand's unit gaps); the AFL ground claim needs a source (MSY-15, minor).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| 1 cm² | 10 × 10 | 100 mm² |
| 1 m² | 100 × 100 | 10 000 cm²; 5 m² = 50 000 cm² |
| 1 ha; 1 km² | 100 × 100; 1000 × 1000 | 10 000 m²; 1 000 000 m² = 100 ha |
| Netball courts per hectare | 30.5 × 15.25 = 465.125 m²; 10 000 ÷ 465.125 | about 21.5 |
| Paddock | 3.6 ha × 10 000; ÷ 1 000 000 | 36 000 m²; 0.036 km² |
| Bathroom tiles | 2.4 × 1.8 = 4.32 m² = 43 200 cm²; 30 × 30 = 900 cm² | 48 tiles |
| Volume | 10³; 100³; 1000³ | 1000 mm³; 1 000 000 cm³; 1 000 000 000 m³ |

## 4. Misconceptions and HSC-style traps

- Using the length factor for area (5 m² = 500 cm²).
- Squaring instead of cubing for volume.
- Converting the area answer at the end with the wrong factor rather than converting lengths first.
- Thinking a hectare is 100 m².

## 5. Visual needs

The floor tile frame (from a01); a 1 cm square zoomed and cut into 100 mm² squares; a 1 m square filling with centimetre squares, a row of 100 then 100 rows; a netball court plate tiled 21 and a half times into a 100 m square; the block cube plate (3 by 3 by 3); a scale slider with length, area and volume readouts (k, k², k³); the tile box plate.

## 6. Two original candidate practice questions

**Question 1.** (a) Convert 2.5 m² to cm². (b) A paddock has an area of 36 000 m². Write this area in hectares.
Worked answer: (a) 2.5 × 10 000 = 25 000 cm². (b) 36 000 ÷ 10 000 = 3.6 ha. Slip: "2.5 × 100 = 250 cm²".

**Question 2.** A brick measures 22 cm by 11 cm by 7.5 cm. (a) Find its volume in cm³ and in m³. (b) Ignoring mortar, how many whole bricks fit in 1 m³?
Worked answer: (a) 22 × 11 × 7.5 = 1815 cm³; 1815 ÷ 1 000 000 = 0.001815 m³. (b) 1 000 000 ÷ 1815 = 550.96, so 550 bricks. Slip: "1815 ÷ 100 = 18.15 m³".

## 7. Everyday anchors

Floor tiles and a tile box; netball courts and a paddock for the hectare; a toy block cube; a brick. No people.

## 8. Site corrections and decisions for Claude

- Year 12 t09's chip "1 ha = 10 000 m²" is set up here (t09's entry line names a03; root fix).
- The netball court replaces the site's AFL ground (Codex confirms the court's size).
- Pace: about 9 minutes (two points; full).
