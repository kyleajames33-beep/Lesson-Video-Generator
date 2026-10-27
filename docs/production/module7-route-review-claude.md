# Module 7 route: Claude's review of Codex's draft (21 Oct 2026)

Source: `module7-video-route-draft.md` and `.json` (Codex brief 93). This review sets the plan the Module 7 designs will follow. The Module 6 review is the model.

## Accepted

- **Chemistry:** the learner order, the core boundaries other than those changed below, and practice videos g01 to g03.
- **Biology:** 15 core videos in the draft order and practice videos g01 and g02.
- **Ledger IDs:** every ID resolves in `programme/syllabus/chem-2017-y12.json` and `bio-2017-y12.json`, and spot checks found no off-by-one errors. Every Module 7 dotpoint is covered by at least one video; there are no orphans. C7-IQ2-02 and C7-IQ4-03 are covered only by P and G entries, which is correct because each dotpoint is the practical itself.
- **Lengths:** every core video is planned at 8 to 9 minutes (5,500 to 6,800 characters).

## Changes

1. **Split chem-m7-c04 (too dense).** L05, L06 and L07 together mean four addition reagents with conditions, plus alkyne addition, plus alkane substitution. Split it into two delivery parts, following the Module 5 C4a/C4b convention:
   - c04a: "What can add across a C=C bond?" (L05 framing and L06; H2, X2, HX and H2O, with conditions).
   - c04b: "Why do alkanes substitute while alkenes and alkynes add?" (L07; UV substitution and alkyne addition).
2. **Split chem-m7-c08 (too dense).** Alcohol dehydration, substitution and oxidation (L12) is one full question. Aldehyde and ketone structure, properties and tests (L13) is another. Make them delivery parts c08a (L12) and c08b (L13). P04 follows c08b.
3. **Fix the acid and base boundary.** c09 uses L18 (organic acids and bases), but amines are not taught until c11. c09 keeps the acid half of L18. c11 takes the base half and owns the C7-IQ5-04 comparison of an organic acid with an organic base.
4. **Convert chem-m7-c16 to practice (too thin).** L23 adds environmental lifecycle material that is not in the 2017 dotpoints, so as a core video it would pad. Fold the property links (branching, packing, thermoplastic behaviour) into c14 and c15. Replace c16 with **chem-m7-g04**, a polymer practice video: draw the repeating unit from a monomer, recover the monomer, classify a polymer as addition or condensation, and explain one property from its structure.
5. **C7-IQ2-05 (safe handling and disposal)** comes off c01. It is taught through the risk table in every Chemistry P video, which already carries the ID.
6. **Biology practicals.** Keep p01 (an epidemic transmission simulation, an explicit example under B7-IQ1-01), p02 (microbial testing of food or water, which the syllabus says to "design and conduct") and p05 (antimicrobial discs).
   - Fold **p03** into b05. B7-IQ2-01 allows a secondary-sourced investigation, and b05 already is that investigation of a named plant and pathogen.
   - Cut **p04**. Modelling the immune system is the job of the b06 to b08 visuals, so a separate "model" video would repeat them.
   - Microbiology safety for p02 and p05: sealed plates are never reopened, incubation is at 25 to 30 °C (never 37 °C), and plates are autoclaved before disposal.
   - The ledger marks B7-IQ1-01 as not practical, but its text includes "design and conduct a practical investigation". The ledger flag should be corrected later (a Codex error-only task).
7. **Add bio-m7-g03: immune response practice**, placed after b09. Immunity is the most-examined Module 7 Biology content. It has three worked questions:
   - sequence the events from entry to antibody production;
   - read a primary and secondary antibody graph;
   - active against passive immunity.
   The id g03 keeps existing ids stable.
8. **Move B7-IQ1-04** (pathogen adaptations for entry and transmission) from b01 to b03, where transmission is taught. b01 keeps classification.
9. **Chemistry practicals.** Confirm all six: P01 (C7-IQ2-02), P03 (C7-IQ4-03) and P05 (C7-IQ5-03) are required investigations, and P02, P04 and P06 support "investigate" dotpoints.
   - P02 bromine water stays. Module 8 P05 then refers back to it for the C=C test instead of repeating it.
   - Fermentation (C7-IQ4-05) is shown as a short apparatus sequence inside c06, not as a separate video.
   - Risk tables: cyclohexane and cyclohexene in a fume cupboard, no flames near volatile organics, a draught shield for spirit burners, a water bath for ester reflux with concentrated H2SO4, and organic waste residues into the labelled container.
10. **Prerequisites:**
    - c07, p03 and g02 add chem-m6-c03, where q = mcΔT is taught.
    - c10 replaces chem-m5-c01 with chem-m5-c03. Excess reactant and water removal are Le Chatelier ideas.
    - bio-m7-b04 adds bio-m5-b03b, because monoculture and low genetic diversity explain crop vulnerability.
11. **Exam skills placement** (shared videos sit once in each subject playlist):
    - s07 (practical questions) goes in Chemistry after p03. Heat loss, validity and reliability in combustion enthalpy is the classic HSC practical question.
    - s05 (calculations) belongs in Chemistry Module 6, before chem-m6-g01, where pH and titration calculations pile up.
    - s06 (graphs and data) goes in Biology before g01 (outbreak data).
    - s08 (extended responses) goes in Biology before g02 (evaluate a strategy).
    - Module 8 takes the remaining placements (see that review).

## Known source issue (must be fixed before design)

- **Chemistry L11 methanol example.** The site's methanol hook and practice uses 200 g water, a 13.4 °C rise and 0.48 g burnt. Those figures give about -748 kJ/mol, which is 103% of the -726 kJ/mol reference. The site states -383 kJ/mol and 53%, which is physically impossible with that data. Replace the measurements with a realistic dataset before c07, P03 or G02 is designed. Do not reuse the site figures.
- **Other site errors.** The pre-design packs flag further site errors in:
  - L06: an ambiguous C4H8 identification.
  - L07: the alkyne hydration product's formula.
  - L18: litmus results.
  - L21: recovering a monomer from a polymer.
  - L22: nylon melting described as amide bonds breaking.
  `claude-pm/site-corrections-m7.md` records none of these. Codex should enter every finding before design begins.

## Mechanical edits made to `module7-video-route-draft.json`

- **chem-m7-c01:** the prerequisite chem-m5-c01 (static equilibrium, unrelated) is removed. Entry knowledge is now Year 11 carbon valence and covalent bonding, matching the pre-design index.
- **chem-m7-c06:** chem-m5-c04b becomes chem-m5-c04. C4b is a delivery part, and the route id is c04.
- **bio-m7-b01:**
  - bio-m5-b02c becomes bio-m5-b02b (the route id of that delivery part).
  - bio-m6-b01 becomes bio-m5-b06a. The pack names "B6a DNA and cell types", so the module number was wrong.

The `.md` table was not edited and still shows the old prerequisites. The route JSON is canonical.

## Order of production

Module 7 designs start as Module 6 designs clear the pipeline (the owner's priority is to finish Year 12 Modules 5 to 8 first).

- **Chemistry first:** c01, c02, c03, c04a, c04b and g01. Naming and hydrocarbon reactions underpin every later Module 7 and Module 8 Chemistry video. Second wave: c05 to c07, p03, s07 and g02, after the methanol data is replaced.
- **Biology in parallel:** b01 to b03 and p02 (the opening block and its required practical). Second wave: the immunity block b06 to b09 and g03.

Each design goes through the full pipeline.

## Owner questions

1. **bio-m7-b15 (Aboriginal protocols, the smoke bush case).** Should HSCScience seek an Aboriginal cultural reviewer before this video is published? The content concerns Indigenous cultural and intellectual property, and a science check cannot judge cultural accuracy or appropriate use of names and knowledge. Design can proceed either way. Publication would wait on your answer.

## Root decisions during design (21 Oct 2026)

- **C7-IQ2-05 removed from chem-m7-c01** in the route JSON (it was still listed; change 5 above). It is carried by the P-series risk tables.
- **C7-IQ1-01 (naming, including every functional-group family)** is carried by c01 and g01 for hydrocarbons and by each family video for its own class: c04a (haloalkanes), c05 (alcohols), c08b (aldehydes and ketones), c09 (carboxylic acids), c11 (amines and amides). Each of those designs names its family by IUPAC rules and lists C7-IQ1-01 among its dotpoints. Add the ID to those route entries when the designs are written.
- **Route JSON updated (22 Oct):** chem-m7-c04 is split into chem-m7-c04a (L05, L06; C7-IQ3-01 and C7-IQ1-01) and chem-m7-c04b (L07; prerequisite c04a), both marked `deliveryPartOf: chem-m7-c04`. Later prerequisites in the Module 7 and 8 routes now point to chem-m7-c04b. B7-IQ1-04 moved from bio-m7-b01 to bio-m7-b03, which also gains site lesson L02 and a wider start line.
- **Route JSON updated (22 Oct, Biology):** bio-m7-p03 (folded into b05) and bio-m7-p04 (cut) are removed. bio-m7-b04 gains the prerequisite bio-m5-b03b. bio-m7-b05 now hands on to b06, and b06 to b07.
- **Route JSON updated (22 Oct, immunity block):** bio-m7-g03 (immune response practice, change 7) added after b09 at playlist order 14, with later Biology entries shifted by one. b09 now hands on to g03, and g03 to b10. **Herd immunity moves to bio-m7-b10** (the b09 author moved it out because b09 is full); the b10 design must cover it.
- **Plate note:** `m7-b-cell-bare-v1.png` has painted pixels touching its left edge. The b07 builder must not tile it edge to edge, and Codex should re-matte it in the next plate brief.
- **Route JSON updated (23 Oct):** chem-m7-c08 is split into c08a (L12) and c08b (L13), both delivery parts of c08. The preceding entry hands on to c08a. Later prerequisites now point to c08b.

- 27 Oct: chem-m7-c11 gains site lesson L18 (base half and acid against base comparison, change 3), C7-IQ1-01 (amine and amide naming) and entry knowledge c09, c10, c05, m6-c01, per the c11 Revision 1 design.
