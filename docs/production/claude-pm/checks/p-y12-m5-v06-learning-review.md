# phys-y12-m5-v06 learning review

Independent Codex source check, 6 November 2026.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v06.md`, Revision 1. SHA256: `096ff5c745bcc43f8604c797d56bd0d326d728a6bb6f985bd275e1d3b2579096`. No design or narration edit. Human listening and full-speed motion have not been reviewed for this revision.

The obstacle prediction makes the horizontal clock and common height datum useful. The scene order gives one calculation stage at a time, and the sideways contrast shows that an earlier arrival alone does not guarantee clearance. The rounding-trap repair should preserve this strong method. The opening explicitly morphs the real v05 cliff/wall frame into the new15 m case, so the differing numbers are an intentional case change, not a broken join.

Findings: 0 blocker, 1 should fix, 0 optional.

- **should fix**, S7 (rounding example): Rounding only t to 1.70 s and then each term to three significant figures gives 17.6 minus 14.2, or 3.4 m, when u_y remains unrounded. The shown 17.5 minus 14.2 requires also rounding u_y to 10.32 (as the author note does) before multiplying. State both early-rounding steps or change the displayed example. Keep the valid unrounded 10.4187 m clearance and the carry-full-values message. A length-neutral change can name rounded components and time.

Mechanical checks: 15 scenes; 6233 declared narration characters under the joined speech with one space between scenes convention (scene sum 6219, joined count 6233); about 557 seconds. Both parser conventions are recorded to avoid inventing count errors. Bold and quoted visual cues are present in spoken order. Site hashes match the design and route, and the official parent wording is quoted. No U+2014 or U+2061. Question cards retain the demands and needed values during countdowns.

Preserve the course colour key, complementary-component explanation before the identity, lower-landing boundary, moment-arm name and weight-arrow-only seesaw. Optional Moon, zero-acceleration, sideways-launch and couple beats stay optional. v01 and v08 are near the cap: use named cuts or length-neutral repairs. No practical-completion or recording/release pass is claimed.

Evidence: work/brief187/audit.json, mechanical-audit.json, quoted-cues.json, calculations.json (46 independently calculated cases with their derived values), primary-sources.json. The official HSC sheet and existing reference images were visually inspected. New plates and actual scene joins still need their own QA.
