# phys-y12-m6-v03 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v03.md`, SHA256 `10957bbebf6a2bfe14bfd2f6098c1f199c9038de62130b7f975f2a5feff6ff4d`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- accelerating electron: V=5000, K_eV=5000, K_J=8.01e-16, classical_speed=41936859.52272308, fraction_c=0.13978953174241027, relativistic_speed=41632399.61781964
- accelerating electron: V=10000, K_eV=10000, K_J=1.602e-15, classical_speed=59307675.50037026, fraction_c=0.19769225166790086, relativistic_speed=58454440.87459914
- accelerating electron: V=2000, K_eV=2000, K_J=3.204e-16, classical_speed=26523198.801265348, fraction_c=0.08841066267088449, relativistic_speed=26445744.93607577
- proton comparison: speed=978550.5951072219, electron_ratio=42.856097305962976
- trajectory energy loop: W_J=1.5652431660994623e-17, W_eV=97.70556592381163, K0_eV=2558.7078651685392, K_final_eV=2656.413431092351, speed=30567416.62955789, wrong_path_eV=1000.0
- retarding: K_final_eV=40, speed100=5930767.5500370255, speed40=3750946.7462267275
- alpha comparison: K_ratio=2, speed_ratio=0.7098701730954771, inverse=1.4087082932916815

Findings: 0 blocker, 3 should fix, 1 optional.

- **should fix**, S2 to S10 and notes (learner copy or diagram): The design explicitly defines signed q and DeltaV, but uses positive accelerating energy qV for electrons without defining the magnitude convention. State that accelerating-energy calculations use |q| times the magnitude of the accelerating voltage; keep W_field=-qDeltaV for signed changes. Label gain DeltaK, or from-rest K, where needed. The worked positive energies are numerically correct.
- **should fix**, S8 (learner copy or diagram): The electron deflects upwards while E points down, so its4.9mm displacement is against E, not along E as spoken and bracketed. Its force is upwards and does positive work. Use displacement along the force for the positive magnitude product, or the signed dot product. Keep the correct97.7eV result.
- **should fix**, S3 ledger (learner copy or diagram): A proton at explicitly5000V has U=+5000eV and ends at0eV, while the electron starts at0and ends-5000eV. Showing identical absolute U bars falling below zero contradicts the stated potentials. Label both bars change in U, or draw the correct separate absolute values. Both DeltaU=-5000eV values are correct.
- **optional**, Author note(b) (author note only): The relativistic5kV electron speed is4.16324e7m/s with the stated constants, not about4.12e7. Correct this author-only comparison; the learner classical4.19e7result and14percent statement stand.

Checks: 16 scenes, 5977 narration characters under the joined-speech convention, about 535 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
