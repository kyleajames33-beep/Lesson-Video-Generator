# Brief 41: pre-design packs for the next Module 5 videos (site content, numbers, corrections)

Read `00-standing-rules.md` first. Claude designs every video. Your job is to gather and check the raw material so each design starts from the site lesson, which is the source of truth, with its numbers already verified. Do not write narration or scripts.

Make one pack per upcoming topic, in `docs/production/claude-pm/pre-design/` (create the folder):

**Chemistry**
- `chem-c10-colourimetry.md` (site lesson 13, the colourimetry part)
- `chem-c11-ka-kb.md` (lesson 14)
- `chem-c12-dissolution-indigenous.md` (lesson 15)
- `chem-c13-solubility-rules-precipitation.md` (lesson 16)
- `chem-c14-ksp.md` (lesson 17)
- `chem-c15-qsp-common-ion.md` (lesson 18)

**Biology**
- `bio-b7-transcription.md`
- `bio-b8-translation.md`
- `bio-b9-proteins-phenotype.md`
- `bio-b10-inheritance-patterns.md` (autosomal, sex linkage, codominance, incomplete dominance, multiple alleles)
- `bio-b11-punnett-pedigrees.md`
- `bio-b12-population-genetics-technologies.md`

Use the matching `docs/production/claude-pm/site-extracts/` files and the site lessons in `C:/Users/kygs/hscscience/subjects/` (read-only).

Each pack contains:
1. The exact 2017 syllabus dotpoint(s), quoted word for word, with the source.
2. The site lesson's section order, key ideas, worked examples with all their numbers, misconceptions it names, practice questions, and memory aids.
3. A number check: recompute every worked example. Check every constant against a reliable source (Ka values, Ksp values at 25 °C, molar absorptivity if used). List errors and the corrected values, in the style of `docs/production/claude-pm/site-corrections.md`.
4. Classic exam traps and common student mistakes for this topic, with sources (for example NESA marking feedback, if available).
5. Real objects, apparatus and organisms the video will need. Note which already exist as painted plates in `public/assets`, including the brief 38 and 39 plates if they are done.
6. Overlap: which earlier videos already teach a needed prerequisite (from `docs/production/claude-pm/lessons/*.md`), so the new video recalls it instead of re-teaching.
7. Open questions for Claude.

Keep each pack factual and scannable, under about 1,500 words. Append a hand-in to `status.md` listing the packs and any site errors found.
