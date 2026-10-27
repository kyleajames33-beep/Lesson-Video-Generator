# Brief 110: learning review, science check, plates and site log for chem M7 G03, P04, P05, P06 and skills S08

Read `00-standing-rules.md` and brief 109 first. This brief uses the same method and file formats as brief 109. Codex writes both independent reviews, and Claude resolves them.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`:
- `chem-m7-g03.md`: synthesis-route practice; the walkthrough is the content.
- `chem-m7-p04.md`: alcohol oxidation practical (distil against reflux; Tollens', Benedict's and litmus tests on the distillate).
- `chem-m7-p05.md`: ester yield practical (pentyl ethanoate, 2:1 against 1:1 acid).
- `chem-m7-p06.md`: soap against detergent in hard water practical.
- `skills-s08.md`: extended-response planning (PEEL, using the stimulus, a judgement with its condition).

**Root decision already made:** P05 uses an electric heating mantle, not a water bath. The reflux mixture boils above 100 °C. Check this choice, but don't reopen it unless it's unsafe.

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109. For P04, P05 and P06, also check that the plan can be evaluated: aim, variables, controls, validity, reliability and accuracy language matching s07, and the risk table. Recalculate every number.

Write one file per design: `checks/m7g03-learning-review.md`, `m7p04-learning-review.md`, `m7p05c-learning-review.md`, `m7p06c-learning-review.md` and `skills08-learning-review.md`. Use numbered findings, each with a severity and a concrete repair. End each file with an empty "## Resolution" section.

## 2. Science check

Verify every fact, number, equation and structure against reliable sources, and check every dotpoint word for word. In particular:

- **G03:** every route and its conditions; hydrating hex-1-ene against hex-3-ene to make hexan-3-one; whether the ethane start is reasonable; the low overall yield.
- **P04:**
  - GHS codes for every chemical;
  - NSW school rules on acidified dichromate;
  - Tollens' and Benedict's results with propanal, propanone and glucose;
  - whether a tertiary alcohol stays orange.
- **P05:**
  - the yield arithmetic;
  - the equilibrium ceiling at 1:1 against 2:1;
  - pentyl ethanoate's boiling point and density;
  - the safety rules against the NSW Chemical Safety in Schools 2021 page references the design cites.
- **P06:**
  - calcium chloride hardness, and whether the concentration is sensible;
  - the soap scum chemistry;
  - the controls.
- **S08:** the fictional measles dataset (internally consistent and plausible), the drills, and the Working Scientifically quotes.

Write `checks/m7g03-claude-science-check.md`, `m7p04-claude-science-check.md`, `m7p05c-claude-science-check.md`, `m7p06c-claude-science-check.md` and `skills08-claude-science-check.md`. Keep the brief 109 format.

## 3. Plates

Use the same style as brief 109. Check the aligned pair with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| P04 | `m7-oxidation-water-bath-before-v1` and `-after-v1` (aligned) | chemistry |
| P05 | `m7-ester-drying-flask-v1` | chemistry |
| G03, P06, S08 | none (P06 reuses brief 107's soap and emulsion tube pairs) | |

Write the provenance to `assets/brief110-provenance.json` and the QA views to `assets/brief110-qa/`. Archive the plates and write a media checkpoint.

## 4. Site corrections log

Add each site error you confirm to `site-corrections-m7.md`, in that file's format, with the exact old text, the correct statement and a source. These are L12 (from P04), L15 (from P05) and L17 (from P06). Skip any already logged.

Hand in to `status.md`, with one line per design giving its blocker and should-fix counts.
