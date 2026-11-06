# phys-y12-m5-v06 science check

Independent Codex source check, 6 November 2026.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v06.md`, Revision 1. SHA256: `096ff5c745bcc43f8604c797d56bd0d326d728a6bb6f985bd275e1d3b2579096`. No design or narration edit. Human listening and full-speed motion have not been reviewed for this revision.

The main wall case gives t1.695520 s, vertical displacement3.418723 m, height 18.418723 m and clearance10.418723 m. Its wall-point vertical velocity is negative. The horizontal contrast is 5.54784 m above sea level and misses by 2.45216 m. A1 clearance4.01367 m and A2 clearance0.4 m are correct. The deliberate rounding example needs both early-rounding operations named, as reported.

Findings: 0 blocker, 1 should fix, 0 optional.

- **should fix**, S7 (rounding example): Rounding only t to 1.70 s and then each term to three significant figures gives 17.6 minus 14.2, or 3.4 m, when u_y remains unrounded. The shown 17.5 minus 14.2 requires also rounding u_y to 10.32 (as the author note does) before multiplying. State both early-rounding steps or change the displayed example. Keep the valid unrounded 10.4187 m clearance and the carry-full-values message. A length-neutral change can name rounded components and time.

Mechanical checks: 15 scenes; 6233 declared narration characters under the joined speech with one space between scenes convention (scene sum 6219, joined count 6233); about 557 seconds. Both parser conventions are recorded to avoid inventing count errors. Bold and quoted visual cues are present in spoken order. Site hashes match the design and route, and the official parent wording is quoted. No U+2014 or U+2061. Question cards retain the demands and needed values during countdowns.

Preserve the course colour key, complementary-component explanation before the identity, lower-landing boundary, moment-arm name and weight-arrow-only seesaw. Optional Moon, zero-acceleration, sideways-launch and couple beats stay optional. v01 and v08 are near the cap: use named cuts or length-neutral repairs. No practical-completion or recording/release pass is claimed.

Evidence: work/brief187/audit.json, mechanical-audit.json, quoted-cues.json, calculations.json (46 independently calculated cases with their derived values), primary-sources.json. The official HSC sheet and existing reference images were visually inspected. New plates and actual scene joins still need their own QA.
