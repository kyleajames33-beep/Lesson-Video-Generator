# Brief 112: error-only check of 13 Revision 2 designs, before voicing

Read `00-standing-rules.md` first. Do this after Claude has taken all 13 designs below to Revision 2. Each design's Status line will say "Revision 2 (30 Oct)". If any design is still at Revision 1, skip it and say so in the hand-in.

Briefs 109, 110 and 111 reviewed these designs at Revision 1. Claude has now resolved those reviews. The "## Resolution" table at the end of each review file says what changed. Nothing is voiced yet, and no new plates are needed.

| Design (in `docs/production/claude-pm/lessons/`) | Reviews it resolved (in `checks/`) |
|---|---|
| `chem-m7-c15.md` | `m7c15-*` |
| `chem-m7-g04.md` | `m7g04-*` |
| `bio-m7-p05.md` | `m7p05b-*` |
| `skills-s06.md` | `skills06-*` |
| `chem-m7-g03.md` | `m7g03-*` |
| `chem-m7-p04.md` | `m7p04-*` |
| `chem-m7-p05.md` | `m7p05c-*` |
| `chem-m7-p06.md` | `m7p06c-*` |
| `skills-s08.md` | `skills08-*` |
| `chem-m8-c01.md` | `m8c01-*` |
| `chem-m8-c02.md` | `m8c02-*` |
| `bio-m8-b01.md` | `m8b01-*` |
| `bio-m8-b02.md` | `m8b02-*` |

## 1. Error-only fact check

Report errors only. Don't redo the learning reviews. For each design, check:
- every narration line (lines starting `> `), with particular care over lines that are new or changed in Revision 2;
- the on-screen text in each "Visual:" paragraph;
- the attempts, feedback and key notes;
- "Numbers to verify";
- the YouTube metadata.

Also check that:
- every blocker in the brief 109 to 111 reviews is fixed, or declined with a reason that stands up;
- the Revision 2 edits didn't introduce a new error;
- every number is recalculated, and every equation, structure and repeat unit is correct;
- each dotpoint is quoted word for word from the 2017 syllabus;
- every question reads like an HSC Section II question and copies no NESA question or site question;
- there are no em dashes;
- narration is within 5,500 to 6,800 characters and about 570 s.

For each practical (Biology P05, P04, Chemistry P05, P06), recheck the safety and school-permission choices. Confirm or correct any "root-pending" note the resolver left.

Write `checks/codex-check-112.md`, with one section per design. For each error, give the corrected text and a source. If a design is clean, write "No errors found."

## 2. Site corrections log

Add any site error that is new in a Revision 2 Decisions section and still standing. Module 7 errors go in `site-corrections-m7.md` and Module 8 errors in `site-corrections-m8.md`, each in that file's format. For each, give the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and any marked as notes, rejected or withdrawn.

Also log the following in `site-corrections-m8.md`, if it is still standing. The Biology M8 site lesson behind `bio-m8-b02.md` says that evaporation is the only way to lose heat when the air is hotter than the body. That is wrong for the same reason as B02's scene 10 fix (see the `m8b02-*` Resolution tables). Quote the exact old text from the read-only site file.

Biology microbiology safety: check `bio-m7-p05.md`'s safety statements against current NSW Department of Education school microbiology guidance, citing the page. These cover how the lid is closed, the incubation temperature limit (28 °C), which cultures are approved, and disposal. Also check the published `bio-m7-p02` lesson's memory line "tape, don't seal" against the same guidance. If that published line is wrong, record it as a separate finding with the correct wording. Don't change the published video.

Chemistry P04: read the current NSW Chemical Safety in Schools (CSIS) Appendix D entry for potassium dichromate. Then confirm or relax the design's choice to make every dichromate step a teacher demonstration in a fume cupboard.

Chemistry P06: the revised recipe (0.001 mol/L CaCl₂ with 0.4% soap and detergent solutions) rests on a calculated screen, not a lab result. Using published solubility data for calcium dodecyl sulfate and calcium stearate (cite them), check two things: does the detergent stay clear while the soap forms a visible scum? Is the recipe sensible for a school class? If the detergent would probably go hazy, give a corrected concentration. No one will pilot this physically, so the literature check is the evidence.

Root decision for S08: the verdict keeps "probably contributed". A reasoned judgement is the skill S08 teaches, and the condition stated with it carries the uncertainty. Check only that the data supports that judgement.

Hand in to `status.md`, with one line per design giving its error count. No design edits, speech, renders or commits.
