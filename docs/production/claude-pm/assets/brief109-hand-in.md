# Brief 109 hand-in for root

28 October 2026. Eight independent checks, seven new public plates and one LDPE replacement delivered. Designs, shared status, board and site log unchanged. No speech, full export, publication or commits.

| Design | Learning blockers / should fix | Science blockers / should fix | Distinct combined issues |
| --- | --- | --- | --- |
| C15 | 0 / 3 | 0 / 4 | 0 blockers, 4 should fix |
| G04 | 0 / 3 | 0 / 3 | 0 blockers, 3 should fix |
| P05 | 2 / 2 | 2 / 3 | 2 blockers, 5 should fix |
| S06 | 0 / 3 | 0 / 4 | 0 blockers, 5 should fix |

Combined counts remove duplicated learning/science findings. P05's distinct should-fix issues are risk-table load, accuracy wording, RG1 claim, molecular-size screen generalisation and blank-control overclaim. S06's distinct should-fix issues are graph choice, causal inference, acid/chips inconsistency, full-card reading load and glossary quotation.

Eight check paths: `checks/m7c15-learning-review.md`, `checks/m7c15-claude-science-check.md`, `checks/m7g04-learning-review.md`, `checks/m7g04-claude-science-check.md`, `checks/m7p05b-learning-review.md`, `checks/m7p05b-claude-science-check.md`, `checks/skills06-learning-review.md`, `checks/skills06-claude-science-check.md`. Every file ends with an empty Resolution section.

Public Chemistry: `m7-pet-bottle-v1.png`, `m7-nylon-rope-v1.png`, `m7-polyester-fabric-v1.png`, revised `m7-ldpe-squeeze-bottle-v1.png`. Public Biology: `m7-disc-plate-fresh-v1.png`, `m7-disc-plate-zones-v1.png`, `m7-antibiotic-disc-cartridge-v1.png`, `m7-ruler-clear-v1.png`.

All eight PNGs are 2000 square RGBA with actual zero and partial alpha and at least 200px clear margin. LDPE retains original alpha byte for byte. Fresh/grown discs reuse identical generated artwork at the same centres, with byte-identical opaque disc cores; original rim/lid retained. The ruler body centre alpha is 167/255 (about 0.65). Painted ticks remain context: scene code needs its own calibrated numerals/readout. The final 50 percent overlays show no doubled disc centres. Owner artwork acceptance remains pending.

`assets/brief109-provenance.json`, `assets/brief109-generation.json`, `assets/brief109-qa/visual-review.json` and all QA/source/reference views are provided. The rejected first zones generation is preserved. Exact retake prompt is in `assets/brief109-qa/zones-retake-prompt.txt`.

Site additions: `assets/brief109-site-corrections-proposed.md` contains five confirmed rows plus clarification/coverage notes. Rendered L23 check found an obsolete static positional MC key beside a randomised bank. Correct by removing the stale key, not merely changing 5-B to 5-A. Root has already reconciled the existing L05 temperature row, no duplicate needed.

Local restore archive and SHA256 manifest: `assets/brief109-media-checkpoint.json`. No remote archive upload claimed.

Remaining limits: owner design resolution and art acceptance; actual school practical approval; full AS/NZS clause access; grade-specific primary PET/HDPE thermal sources; full visual comparison of diagram-only exam pages; actual scene ruler calibration; human listening, voiced preview and release gates. Cached 2019 to 2025 exam text was searched and closest text matches inspected, not a guarantee of originality. No operational biology method was validated or optimised.
