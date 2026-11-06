# chem-y11-m3-v14 science check

Independent Codex source check, 6 November 2026.

Source: `docs\production\claude-pm\lessons\chem-y11-m3-v14.md` (Revision 1). SHA256: `78c5dce33996573183b69e93c65da7ce182f5571e16895ebfd2c5f1a706256c1`.

Scope: source learning, science and error check. No voiced preview exists for this revision. Human listening, playback motion, caption fit, final artwork and release checks remain pending.

Independent integration reproduces the first 30 s rounded losses .05/.09/.17 g and .09/.13/.18 g. Their displayed rates agree. The carbonate predicts .4397gCO2 and needs .01998molHCl, below every supplied amount. The acid-limiting hydrogen endpoints are619.75/309.875 mL. The model is isothermal and does not establish an observed cooling bias. One later rounded model row needs numerical-step provenance if exact reproduction is required.

Findings: 0 blocker, 6 should fix, 1 optional. Resolve the relevant findings before recording. Preserve usable layouts and the current lesson boundaries.

- **should fix**, 3 and temperature-run method (mass-loss selectivity): The loose cotton plug catches spray but does not stop water vapour. Mass loss is not automatically pure CO2, especially for warmed acid. Describe the approximation and any evaporation/blank control in the existing method notes or strip. Retain the open gas escape path and source model labels.
- **should fix**, 5 and graph axis (spoken endpoints outside the drawn window): The graph stops at 300 s, but the half-concentration run reaches its0.44 g plateau at about 900 s and the control after 300 s. Scene5 says look at the ends and all three level at 0.44 g. Extend or break the time axis, or show the labelled endpoint inset from the existing data so students can actually see the narrated comparison. Do not suggest all plateaus are visible inside 300 s.
- **should fix**, 9 (energy wording): Warming does transfer thermal energy to the reacting mixture. Replace the claim that warm acid does not add energy to the reaction itself with the intended distinction: average kinetic energy rises while activation energy is unchanged. Keep the two-lever contrast.
- **should fix**, 10 (modelled data versus a possible cooling bias): The plotted rate model is isothermal and does not include the shown40.0to37.5 C cooling trace. Cooling is a possible limitation, not a demonstrated cause of these illustrative lower readings. Also logging temperature detects drift; it does not fix it. State those roles accurately in the existing limitation row.
- **should fix**, 10 and author note e (temperature control compatible with weighing): Keeping a flask in a water bath changes the weighing arrangement; it cannot simply be added to this balance setup without accounting for the bath and evaporation. Pin a school-approved temperature-control method compatible with the mass measurement, including suitable vessels for100 mL acid. General NSW guidance and a40 C ceiling do not independently approve this exact arrangement.
- **should fix**, YouTube title (metadata length): The draft title is 113 characters, above the100-character upload limit. Shorten it before upload.
- **optional**, author note b (model reproducibility): Independent RK4 integration reproduces the displayed first 30 s masses and most rows. At30 C/60 s it gives about 0.225 g, on the0.22/0.23 rounding boundary; the stated0.23 may reflect the original integration step. Preserve the illustrative table as authored unless root chooses to regenerate it, and record the original numerical step if exact reproduction is required. Rounded plateau times depend on the sampling interval.

Mechanical checks: 17 scenes; narration sum 6180 matches the declared count; estimated 556 seconds. Bold and quoted speech cues pass. No U+2014 or U+2061 was found in the pinned source. Site hashes match the design and route, and the named syllabus stems are quoted.

Evidence: work/brief183/audit.json, mechanical-audit.json, quoted-cues.json, calculations.json, equation-checks.json, module3-coverage.json and primary-sources.md. Reuse contact sheets were visually inspected; this does not establish actual scene integration.
