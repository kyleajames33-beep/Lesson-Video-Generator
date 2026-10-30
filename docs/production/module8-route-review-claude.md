# Module 8 route: Claude's review of Codex's draft (21 Oct 2026)

Source: `module8-video-route-draft.md` and `.json` (Codex brief 94). This review sets the plan the Module 8 designs will follow. The Module 6 review is the model, and the Module 7 review (`module7-route-review-claude.md`) sets the shared exam skills placements.

## Accepted

- **Chemistry:** the learner order (quantitative analysis, qualitative tests, spectroscopic analysis, monitoring, organic analysis, synthesis), practice videos g01 to g03, and leaving out L05 chromatography as a site extension.
- **Biology:** 17 core videos in the draft order, practice videos g01 and g02, and keeping L11 and L21 as consolidation sources only.
- **Ledger IDs:** every ID resolves in the 2017 ledgers, and spot checks found no off-by-one errors. Every Module 8 dotpoint is covered by at least one core video; there are no orphans.
- **Lengths:** every core video is planned at 8 to 9 minutes (5,500 to 6,800 characters).

## Changes

1. **Split chem-m8-c03 (too dense).** C8-IQ1-02 names eight cations and eight anions, each with a flame, precipitation or complexation test. Sixteen ions and their confirmatory logic cannot fit one readable video. Split it into delivery parts:
   - c03a: "How do flame, precipitate and complex tests identify a cation?" (Ba2+, Ca2+, Mg2+, Pb2+, Ag+, Cu2+, Fe2+, Fe3+, ending on a test flowchart).
   - c03b: "How do we identify the anion?" (halides, hydroxide, acetate, carbonate, sulfate, phosphate).
   P03 follows c03b.
2. **Split chem-m8-c11 (too dense).** Carbon-13 environments and shifts, followed by proton environments, integration and n+1 splitting, is two full learner questions. Spectroscopy is the most-examined Module 8 Chemistry content. Make the delivery parts:
   - c11a: carbon-13 NMR.
   - c11b: proton NMR.
3. **Cut chem-m8-c07 (water treatment).** Treatment processes are not a 2017 Module 8 dotpoint, so a full video would teach outside the syllabus. Keep one link in c05: monitoring results tell a treatment plant what it must remove. c05 and c06 (dissolved oxygen and BOD, with the Winkler calculation) together cover C8-IQ1-01.
4. **Narrow chem-m8-c01 to the Mohr precipitation titration.** Site L01 also revises direct and back titration, which chem-m6-c12 and chem-m6-c15 already teach. Recall those videos and do not re-teach them. Add chem-m6-c12 as a prerequisite.
5. **Chemistry practicals.**
   - **Cut p01.** The Mohr method uses potassium chromate, a chromium(VI) compound that many schools avoid. C8-IQ1-03 says "conduct investigations and/or process data", so c01 processes titration data and g01 practises it.
   - **Keep p02** (gravimetric sulfate as BaSO4, or chloride as AgCl), **p03** (unknown ions), **p04** (a colourimetry calibration, for example of Cu2+) and **p05** (functional group tests).
   - p05 refers back to chem-m7-p02 for the bromine water test and spends its time on the hydroxyl test (acidified dichromate) and the carboxylic acid test (carbonate).
   - Risk tables cover: silver nitrate staining, barium chloride toxicity, lead and silver waste into heavy-metal containers, and dichromate as a Cr(VI) oxidant used in small volumes.
6. **Biology practicals.** Keep two:
   - **p01** (temperature regulation), using a model: insulated against bare flasks, or surface area to volume. No people are shown.
   - **p02** (plant water loss with a potometer or a stomatal count).
   The others duplicate their core videos, or are data tasks rather than practicals:
   - **p03** (causes of non-infectious disease) is secondary research already carried by b06 to b09. Cut it.
   - **p04** (collect and represent disease-rate data) becomes part of g01. g01 now draws a graph from given rates, which covers the "collect and represent" demand of B8-IQ2-02.
   - **p05** (management evidence) folds into b12.
   - **p06** (assistive technology effectiveness) folds into g02, whose prerequisites become b13, b14 and b15 to b17.
7. **Add bio-m8-g03: feedback loop practice**, placed after b05. "Construct and interpret negative feedback loops" is a common exam demand. The worked questions are:
   - build a loop from stimulus to receptor, control centre, effector and response;
   - read a blood glucose graph after a meal;
   - spot a positive feedback distractor.
8. **bio-m8-b11 stays merged** (epidemiological methods and benefits). Both evaluate dotpoints are carried by one sustained case, Doll and Hill on smoking, so that the video stays one question: "How do we judge an epidemiological study and what it achieved?"
9. **Prerequisites:**
   - bio-m8-b09 adds bio-m5-b05a, because cancer is mitosis without control.
   - chem-m8-c13 is accepted as drafted.
10. **Exam skills placement** (shared videos sit once in each subject playlist):
    - s06 (graphs and data) goes in Chemistry before g02, where calibration curves are read.
    - s08 (extended responses) goes in Chemistry before c13. "Evaluate the factors in designing a synthesis" is the canonical long response, and c13 then applies the skill.
    - s07 (practical questions) goes in Biology after p02: variables, controls and validity in a transpiration experiment.
    - s05 (calculations) goes in Biology before g01 (incidence and prevalence per 100,000).

## Known source issues (must be fixed before design)

The pre-design packs flag site errors that `claude-pm/site-corrections-m8.md` does not yet record. Codex should enter them before design:

- **L01:** precipitation order judged from pure-water solubilities.
- **L04:** the lead drinking water guideline is 0.005 mg/L, not 0.01.
- **L06:** total coliforms are called faecal indicators.
- **L08:** a bioconcentration ratio is given without units.
- **L11:** acidified permanganate is paired with brown MnO2.
- **L15:** the answer says molecular mass fixes the molecular formula.
- **L16:** saponification is called base-catalysed, and the Pfizer figures are inaccurate.

## Mechanical edits made to `module8-video-route-draft.json`

- **chem-m8-c04:** chem-m5-c10 (Ka and Kb) becomes chem-m5-p02, the Module 5 colourimetry video. The pack index's "C10 calibration" was a wrong id.
- **chem-m8-c05:** the prerequisite bio-m7-b13 is removed. A Chemistry video cannot assume a Biology video.
- **bio-m8-b01:** bio-m5-b06a (DNA in cells, unrelated) is removed. Entry knowledge is now Year 11 nervous and endocrine coordination, matching the pre-design index.

The `.md` table was not edited. The route JSON is canonical.

## Order of production

Module 8 follows the first Module 7 waves. Every video goes through the full pipeline.

- **Chemistry first:** c01, c02, p02 and g01, then c03a, c03b and p03. These depend only on Module 5 solubility and Module 6 titration, so they can be designed while Module 7 is in production. The spectroscopy block (c09 to c12 and g03) follows once chem-m7-c01 and c02 are designed, because structure work needs naming and isomers.
- **Biology in parallel:** the homeostasis block, b01 to b05, then g03 and p02. Its prerequisites are Year 11 only, so it can start at any time.
- 28 Oct: c01 prerequisites add chem-m6-c12 and chem-m5-c15, next is c02 (p01 cut); c02 prerequisites add chem-m5-c15 and chem-m8-c01.
- 30 Oct: applied change 1 in the JSON. chem-m8-c03 is replaced by c03a (cations, next c03b) and c03b (anions, next p03; playlist order 6.5). g01's next now points to c03a, and p03's prerequisite to c03b. Applied change 7: bio-m8-g03 is added after b05 (playlist order b05 + 0.5, next is b05's old next, p02), and b05's next is now g03. Open: b05's prerequisite bio-m5-b02b is plant reproduction. b05 actually assumes Year 11 plant transport, which has no video ID yet. Leave it until the Year 11 route exists.
- 30 Oct: g01 prerequisites are now c01, c02 and p02, replacing the cut p01. Its next stays c03a.
- 30 Oct: p03 prerequisites are now c03a and c03b. g02 leaves out DO and BOD data, which c06 teaches. s07 follows bio p02 in the playlist only. Design paths are recorded for the eight new designs.
- 30 Oct: c06 next is now c08, and c07 is marked cut. c08 prerequisites add M7 p02 and p04 and M8 c06. b09 prerequisites add bio-m5-b05a and b06, and its next is b10. The order now runs b10, b11, g01 (playlist order 16.5), then b12, because g01's question 3 needs b11. Bio p03 to p06 are marked cut or folded (change 6).
