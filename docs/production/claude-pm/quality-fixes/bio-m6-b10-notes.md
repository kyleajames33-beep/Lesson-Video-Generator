# bio-m6-b10 (judging plant and animal biotechnology): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 6, 9, 10, 11, 13, 14 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b10-sheet.jpg`. These are 16 evenly spaced stills at the same frames as the audit sheet. Stills come from `out/explainer/Explainer-bio-m6-b10/stills/`.

Narration, audio and measured timing are unchanged. Every animation still uses the existing word cues from `docs/production/claude-pm/lessons/m6b10/measured/lesson.json`.

## Changes by scene

- **The benefit and risk table (all board scenes).** Chip text is 36 px in the hand font (it was 30), with the rows spread to 300, 440 and 580. Column heads are 46 px and "who" is 50 px. Stakeholder icons are 1.45 times larger, with 29 px labels. The farm workers, beneficial insects and farm ecosystem icons are now painted plates (the insecticide sprayer, the bee on a flower and the monoculture field). Growers, communities, the seed company and regulators stay as coded outlines, because no plate exists for them.
- **1. Hook.** The cotton (420 px) and the hornless bull (620 px) are larger, the allele strip is thicker and the labels are 36 to 76 px.
- **2. What a judgement needs.** The case panel shows the cotton and bull plates until the pros-and-cons list arrives. The blank chips now carry the narration's meaning ("what improves, and by how much?", "what could go wrong?"), with "helps one group" and "costs another" on the crossing lines.
- **3. Bt cotton: the benefit.** The mechanism fills the frame first: the soil bacterium plate, then the cotton (560 px) and the Helicoverpa larva (560 px), with Bt protein dots crossing to it and 48 px tags ("toxic to certain caterpillars", "works only after binding in their guts"). On "sprayed", both plates move into the case panel and the board appears. The spray bars are 40 px tall, with the sprayer plate and "about 85% fewer sprays" (38 px). The CSIRO tag is 28 px (it was 20).
- **4. The risks.** The cotton and larva plates head the panel. The caterpillar glyphs are 1.3 times larger, and the field labels and tags are 34 to 44 px.
- **5. Verdict.** The cotton is 400 px. The who row fades when the verdict lands, so the verdict (48 px) and its condition (42 px) sit large and clear of the table.
- **6. Hornless cattle (rebuilt).** The painted calf starts large on the right (640 px), with its horn buds ringed and "removing horn buds: painful" at 46 px. It then moves into the case panel as the Angus strips arrive. The strips are thicker (40 px rungs), with 40 px row labels and new tags ("crossing: beef alleles too", "edit: just the hornless allele").
- **7. Checking the evidence.** The six tested calves are now six painted calf plates. The four that inherited the bacterial DNA glow amber over their strips ("4 of 6 inherited it"). The strip labels are 38 px.
- **8. What an animal case adds.** The coded embryo circles are replaced by six painted blastocysts; four grey out on "many embryos don't survive". A painted surrogate cow sits beneath them. The objection chip is 36 px.
- **9. Three kinds of question.** The five objections from the two cases wait along the top from the first second, as chips at 32 px, with the bins outlined. Each chip drops into its bin on its cue.
- **10. Checklist (memory).** Each question is a framed card with a painted plate: the bee for "who benefits", the larva for "who carries the risk", the regulator building and the field for biodiversity. The animal line uses the calf.
- **11a. Exam question 1.** The question fills the left column. The right column draws the givens: the rice plant, the white and golden rice bowls, and cards for "beta-carotene → vitamin A", "too little vitamin A → blindness in children" and "rice: the main food". Nothing is answer-bearing.
- **11c. Exam question 2.** The card appears from "Second", with the salmon plate and cards for the three stem facts (growth hormone gene, effectively sterile, tanks on land).
- **11d. Feedback two.** The three column heads show dimmed from the start, and the salmon plate sits bottom right until the verdict.
- **12. Decision rule.** The step cards are larger (52 px). The right column shows the case each step points at: cotton, then the larva, the calf, and the plasmid bacterium for "check the evidence".
- **13. Key notes.** Seven short bullets at 34 px replace the five paragraphs at 29 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b10/assets.ts`: adds the sprayer, bee, coins, blastocyst, dairy cow, salmon, rice plant, rice bowls and plasmid-bacterium plates, measured from the real files. The existing keys are unchanged; other lessons import some of them.
- `src/explainer/lessons/bio-m6-b10/parts.tsx`: changes the board constants (`ROWY`, `WHO_Y`, the `JChip` and `chipAnchor` default size, the `BoardFrame` head sizes, `WhoIcon` scale and plate icons, `whoTop`) and adds `WhoGlyph`. Only b10 uses these. Other lessons import only `Embryos` and `StopMark`, which are unchanged.
- `src/explainer/lessons/bio-m6-b10/s1.tsx`, `s2.tsx`, `s3.tsx`.

No shared kit, legacy or other lesson file was edited. The typecheck passes.

## Plates needed

None required. Optional upgrades: an Angus (black, polled) beef bull plate for scene 6's Angus strip, and a land-based fish tank plate for exam question 2. The salmon plate shows wild fish in a river, which is acceptable for "salmon" but does not show the tanks.

## Still to check

- The board's right side stays empty for about two seconds in scene 3, between the plates moving into the panel and the benefit chip landing on "That benefits".
- Scene 9's bins show only outlines until each title is spoken.
- Judge the motion at playback speed in the re-render, especially the calf's move into the panel (scene 6) and the plant and larva move in scene 3. The checks so far are stills only.
- Ready for Codex to re-render on the existing narration.
