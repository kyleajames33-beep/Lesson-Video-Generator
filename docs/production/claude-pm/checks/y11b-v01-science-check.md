# y11b-v01 science check

Revision 1, reviewed 1 November 2026. Design SHA256 `a0a284efcde73e3ad64d7aa83a23965dda948fdd69acdb44becd4c32718873a1`. Written narration, visuals, questions, route, root decisions and current site source inspected. No stills, continuous build or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

- Local route ID `B25-FA1-G1-01`, official CMS codename `ci4ad09edc`: Use a variety of sources to compare the cellular structures of eukaryotic and prokaryotic cells
  Fresh official source (1 November 2026): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c

Exact source HTML is retained in `work/brief138/bio-official.json`. Local B25 IDs are project aliases, not NESA published content codes.

## Findings

1. **Should fix:** Scene 5 chip “no internal compartments”, scene 8, notes and the memory line turn a useful typical-cell contrast into a universal absence of bacterial internal membranes. Cyanobacteria have internal thylakoid membranes; bacterial membrane-bound compartments also exist. Keep the intended contrast with the nucleus and typical eukaryotic organelles: replace the blanket “no internal membranes” wording with “no nucleus or eukaryotic organelles” and scope the office analogy to the bacterium shown. Do not add an exception lecture. Fund any extra words by cutting scene 4’s final summary sentence (listed reserve cut, 78 characters).

2. **Should fix:** Scene 6 true-scale geometry must match the tenfold ratio used to calculate volume: use 5 µm and 50 µm, not a one-twentieth-width bacterium. Shared with learning finding 2; no extra duration.

## Confirmed checks and sources

The 1 to 5 µm and 10 to 100 µm ranges are reasonable typical teaching ranges. 1 µm=0.001 mm; 1 nm=0.001 µm; tenfold linear scale gives 10³=1000-fold volume for similar shapes. Light resolution about 200 nm is appropriate. Nuclear DNA is generally linear, bacterial chromosomes are usually circular, and the design correctly retains “usually”. 70S versus 80S is the cytoplasmic comparison; some antibiotics selectively interfere with bacterial translation. No electron-resolution figure is spoken, confirming root decision 1. Keep the office-gloss goal while correcting its absolute statement above.

Sources: [NCBI translation](https://www.ncbi.nlm.nih.gov/books/NBK9849/), [original cyanobacterial membrane ultrastructure study](https://pubmed.ncbi.nlm.nih.gov/16736255/), [OpenStax cell comparison](https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells). The site Woese history and no-cytoskeleton claims are confirmed errors for the site log. The proposed universal 1 to 2 nm electron-microscope replacement is not accepted as a fixed instrument limit; resolution depends on technique, specimen and preparation. Keep v07 responsible for a sourced method-specific figure.

Original local count: 0 blockers, 2 should fix, 0 optional. See the revised combined count below. Narration recount 5,986 characters; design estimate about 568 seconds. No design edits, speech, renders or commits.

## Cross-check from v05

**Additional should fix:** v01’s hook begins “Scrape the inside of your cheek”. Replace that imperative with observation of an existing prepared cheek-cell slide. The fresh-sampling instruction conflicts with the NSW Department of Education rule identified in y11b-v05-science-check.md. This is a length-neutral opening replacement. V01 does not teach the full sampling procedure, so the practical blocker is counted in v05. Revised count for v01: 0 blockers, 3 should fix, 0 optional; one overlaps learning, giving four unique combined should-fix findings.
