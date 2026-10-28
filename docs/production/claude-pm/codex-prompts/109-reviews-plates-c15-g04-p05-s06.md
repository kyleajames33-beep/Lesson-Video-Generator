# Brief 109: learning review, science check, plates and site log for chem M7 C15 and G04, bio M7 P05, and skills S06

Read `00-standing-rules.md` first. New this round, on the owner's instruction (28 October 2026, to save Claude tokens): **Codex now writes the two independent reviews** that Claude's agents used to write. You didn't author these designs, so review them as an independent reader. Claude still resolves the findings and owns the design.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c15.md`: condensation polymers (PET and nylon).
- `chem-m7-g04.md`: polymer practice. The walkthrough is the content.
- `bio-m7-p05.md`: the antibiotic disc practical.
- `skills-s06.md`: exam skills for data and graphs.

## 1. Learning review (one file per design)

Follow `docs/production/student-learning-review.md`. Trace each lesson from its stated entry knowledge, as a student starting Year 12. For each design, check:
- Does it explain causes before relying on them?
- Does each term get a plain meaning?
- Does it earn attention?
- Does it use the visual medium? Each narrated change should be shown, with at most about 3 bright text items, and no text box in a diagram slot.
- Practice questions:
  - Are they HSC Section II style and answerable from the givens?
  - Does the question stay on screen through the 10 s countdown?
  - Is the feedback brief, with one crossed-out mistake? (G04's walkthroughs are the content.)
- Are the key notes useful?
- Will students be able to apply and remember the ideas?
- Is there any double-teaching against the sister designs (c10, c11, c14; b11, p01, p02; s05, s07)?
- Is there anything that would teach a wrong idea?
- Recalculate every number.

For P05, also check that a student could plan and evaluate the method: aim, variables, controls, validity, reliability and accuracy language matching s07, and the risk table.

Write `checks/m7c15-learning-review.md`, `m7g04-learning-review.md`, `m7p05b-learning-review.md` and `skills06-learning-review.md`, in the same format as `checks/m7c13-learning-review.md`:
- number every finding;
- give each a severity: blocker, should fix or optional;
- give a concrete repair, with exact replacement narration where needed;
- end with an empty "## Resolution" section.

## 2. Science check (one file per design)

Check every narration line (lines starting `> `), the on-screen text in "Visual:" paragraphs, the attempts and feedback, the key notes, "Numbers to verify" and the YouTube metadata. Verify every fact and number against reliable sources, and check that every equation and repeat unit is correct. Check each dotpoint word for word: Chemistry and Biology against `docs/production/programme/syllabus/`, and S06's Working Scientifically outcomes against the official 2017 syllabus. Confirm or reject each site error the author logged, with a source. Flag absolute claims and anything a marker would reject.

Check these in particular:
- **C15:**
  - the PET and nylon 6,6 monomers and repeat units;
  - (n − 1) water against 2n;
  - the HCl route from acyl chlorides;
  - whether polyester "wicks" water;
  - L23's multiple-choice key "5-B" on the rendered page.
- **G04:** the poly(but-1-ene), PTT, PMMA and PLA structures; the nylon 6,6 against polyester melting points.
- **P05:**
  - school microbiology rules in NSW: is incubating at 28 °C acceptable, and are plates sealed and never opened? Cite NSW Department of Education or other Australian school guidance;
  - disc diffusion interpretation, including why zone size is not clinical effectiveness;
  - the risk table.
- **S06:** the worked data, the scale trap and the drills.

Write `checks/m7c15-claude-science-check.md`, `m7g04-claude-science-check.md`, `m7p05b-claude-science-check.md` and `skills06-claude-science-check.md`, in the same format as `checks/m7c13-claude-science-check.md`. Keep the file names as given, even though Codex writes them. End each with an empty "## Resolution" section.

## 3. Plates

Use the brief 82 to 108 style:
- a transparent PNG with a real alpha channel;
- ink and watercolour;
- at least 10% clear margin;
- no text, numbers, logos, people, hands or faces.

Each design's "Codex asset brief" section is the specification. Check each aligned pair with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| C15 | `m7-pet-bottle-v1`, `m7-nylon-rope-v1`, `m7-polyester-fabric-v1` (matched to brief 108's polymer object set) | chemistry |
| G04 | none | |
| P05 | the four named in the design: fresh disc plate, unequal-zones plate (aligned with p02's sealed-plate set), disc cartridge, clear ruler without numbers | biology |
| S06 | none | |

Write provenance to `assets/brief109-provenance.json` and QA views to `assets/brief109-qa/`. Archive and record a media checkpoint, as in earlier briefs.

## 4. Site corrections log

Add every site error you confirm to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format. Give the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md` with a one-line summary per design: the blocker and should-fix counts.

## 5. Extra: LDPE plate contrast

Retake or adjust `public/assets/chemistry/m7-ldpe-squeeze-bottle-v1.png` (brief 108). It reads very pale on the cream lesson background, even at a larger size. Give it a slightly deeper translucent tint and firmer ink edges while keeping it recognisably LDPE (soft, translucent). Keep the same canvas, alpha box and filename, so the C14 scenes need no change. Show a before/after on cream in `assets/brief109-qa/`.
