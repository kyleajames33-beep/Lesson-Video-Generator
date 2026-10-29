# Brief 116: error-only check of 8 Module 8 Revision 2 designs, plus the P02 plates

Read `00-standing-rules.md` first, and use brief 112's method and format. Do this after brief 114. It can run alongside brief 115.

Claude has resolved the brief 114 reviews. The "## Resolution" table at the end of each review file says what changed. Nothing is voiced yet.

| Design (in `docs/production/claude-pm/lessons/`) | Reviews it resolved (in `checks/`) |
|---|---|
| `chem-m8-p02.md` | `m8p02-*` |
| `chem-m8-g01.md` | `m8g01-*` |
| `chem-m8-c03a.md` | `m8c03a-*` |
| `chem-m8-c03b.md` | `m8c03b-*` |
| `bio-m8-b03.md` | `m8b03-*` |
| `bio-m8-b04.md` | `m8b04-*` |
| `bio-m8-b05.md` | `m8b05-*` |
| `bio-m8-g03.md` | `m8g03-*` |

## 1. Error-only fact check

Report errors only, as in brief 112. Check:
- every narration line, especially lines that are new in Revision 2, plus the Visual text, attempts, feedback, key notes, "Numbers to verify" and metadata;
- that every blocker is fixed;
- that the Revision 2 edits introduced no new error;
- every number and equation;
- that each dotpoint is quoted verbatim;
- that each site link is the live `.sa.html` form;
- that every plate filename named in a design exists in `public/assets/`;
- that there are no em dashes;
- that narration is 5,500 to 6,800 characters and about 570 s.

Two settled decisions to confirm, not reopen:
- **P02, root decision:** the teacher prepares and dispenses dilute barium chloride, and barium waste goes to the heavy-metal container. The staff-only CSIS check is closed by this choice. Confirm only that the design follows it.
- **C01, C02, B01, B02 metadata:** these four Revision 3 designs had their site links changed (metadata only). Confirm the four links.

Write `checks/codex-check-116.md`, one section per design. For each error, give the corrected text and a source.

## 2. P02 plates

Both reviews have now passed, so the plates held in brief 114 can be painted. Paint P02's three plates, in brief 109's style, from its "Codex asset brief" section: the matched pair of beakers on a hotplate (clear, then with settled precipitate) and the filter funnel with a cloudy filtrate. Check the pair with a 50% overlay. Add the provenance to `assets/brief116-provenance.json` and the QA views to `assets/brief116-qa/`, then archive and record a media checkpoint.

## 3. Site corrections log

Add any new site error that is still standing to `site-corrections-m8.md`. Skip any already logged.

Hand in to `status.md`, with one line per design giving its error count. No design edits, speech, renders or commits.
