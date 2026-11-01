# y11b-v06 science check

Revision 1, reviewed 1 November 2026. Design SHA256 `d7038a9b52076bec6b3a042ec9a1e95879aac52e2cbfd5658aea117f07771950`. Written narration, visuals, questions, route, root decisions and current site source inspected. No stills, continuous build or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

- Local route ID `B25-FA1-G1-06`, official CMS codename `ci5c4a2e52`: Conduct a practical investigation to calculate the size of a variety of specialised cells under the microscope using a mini-grid and the equation Cell size = diameter of field of view number of cells across the field of view
  Fresh official source (1 November 2026): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c

Exact source HTML is retained in `work/brief138/bio-official.json`. Local B25 IDs are project aliases, not NESA published content codes.

## Findings

1. **Should fix:** The field/count equation requires an equivalent end-to-end count, not the number of scattered cheek cells a line happens to intersect. Clarify this in scenes 4 and 7, notes and the new plate counting specification. Fifteen onion lengths and about eight cheek widths must span the measured diameter, with fractional ends and empty spaces handled consistently. Shared with learning finding 1; use its named cut.

2. **Should fix:** Scene 9 and attempt 11c use “photograph taken at ×400/×1000” as if it fixes the physical size of a reproduced print or screen image. Optical acquisition power alone does not survive resizing. State that the displayed print has calibrated linear magnification ×400/×1000 at its stated size, or provide a scale bar and use it. Keep 22 mm and 7.5 mm and their answers. Replace the existing photo condition rather than adding a new explanation scene.

## Confirmed checks and sources

Root’s arithmetic is correct: 4.5 mm=4500 µm; 4500/15=300 µm. With fixed eyepiece/field number, FOV is inversely proportional to objective power: 4500 x40/400=450 µm; the author-only ×100 field is 1800 µm. 450/8=56.25 µm, suitably about 56 µm for the estimated count. Counts 8,7.5,8.5 have mean 8.0; the mean of the three separately calculated widths is about 56.4 µm, also 56 µm at the reporting precision. Image check: 22 mm=22000 µm; 22000/400=55 µm, or 22/400=0.055 mm. Wrong operation 22x400=8800 mm=8.8 m. A1: 4.0x40/400=0.40 mm=400 µm; 400/8=50 µm; using the low-power field gives the diagnosed wrong 500 µm. A2: 7.5 mm=7500 µm; /1000=7.5 µm; wrong multiplication gives 7500 mm=7.5 m. Double division 56/400=0.14 µm; 300/40=7.5 µm. Field number 18 gives 18/4=4.5 mm and 18/40=0.45 mm. The repeated-cell estimate needs the geometrical condition in finding 1, not different arithmetic.

A red blood cell around 8 µm and a long neuron exceeding 1 m are reasonable examples. Neuron length is not measured by counting whole cells across a microscope field; identify it as sourced comparison data. A few to a few hundred µm is a broad plausibility range, not a rule proving every smaller result impossible. A “100 µm grid” is valid if it refers to actual stage spacing; no universal grid spacing should be imposed. The root choice of 15 and about eight is retained. Use existing prepared cheek material, not fresh sampling, consistent with the v05 finding. Neuron reuse remains conditional on provenance as root requested.

Sources: [Nikon microscopy field of view](https://www.microscopyu.com/microscopy-basics/field-of-view), [Nikon microscope magnification](https://www.microscopyu.com/microscopy-basics/magnification), and the exact 2025 content HTML retained above. The site’s 100 µm stage-grid example cannot be divided again by microscope magnification; clarify whether the quoted grid dimension is actual or an image ruler. The other small numerical results are arithmetically correct and are not automatically impossible without naming the cell type and measured dimension. “Most cells 10 to 100 µm” is a typical range, not disproved merely by exceptions or by comparing length with width.

Count: 0 blockers, 2 should fix, 0 optional. Narration recount 5,728 characters; design estimate about 552 seconds. No design edits, speech, renders or commits.
