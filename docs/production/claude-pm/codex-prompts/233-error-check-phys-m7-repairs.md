# Brief 233: error check of the brief 191 repairs (Year 12 Physics m7-v01 to v16), then plates

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 186, 214 and 232 (their method and file format). The review part is error-only. Do not spawn sub-agents. Make no design edits, speech or commits. This is light work and may run alongside a render. Run it after 232.

**Designs:** `phys-y12-m7-v01` to `v16` in `lessons/`, all at Revision 2. Claude resolved your brief 191 findings and upgraded each design to the visual standard. v10 and v15 were redesigned at scene level, with one stage per scene. The root decisions that apply are items 10 to 19 in `checks/root-decisions-phys-y12-m7.md`.

**Check each design:**
1. Every brief 191 finding is resolved as its Revision 2 section claims.
2. No new physics or arithmetic error. Recalculate every changed number and every slider and readout value in `work/brief233/`, in particular:
   - v01: the antenna dial (50/100/200 MHz to λ 6.0/3.0/1.5 m);
   - v02: the wheel-speed slider (gap-to-tooth time 110 to 55 μs against the 55 μs round trip) and the GPS "about three hundred metres";
   - v03: the drop selector (levels 3, 4, 5 and 6 to level 2, with λ readouts) and the cool sodium vapour absorber;
   - v04: the H-alpha velocity slider (+300, +600 and −300 km/s) and the "seen from the same angle" condition;
   - v05: the simulated slit-sweep fringe widths (13/26/52 mm red, 11/21/43 mm green). They only need to be plausible and in the right trend, because the video is qualitative;
   - v06: the small-angle row (0.145°, sin = tan = 0.002531), the crossed 30° row, and the Δx slider (0.90 to 5.20 mm);
   - v07: θ₁ of 10.4°, 12.3° and 15.0°, and the 2° tilt figures (14.94°, 15.08°, mean 15.01°);
   - v08: the analyser slider (I = 40, 20, 10, 0 W m⁻²) and "≈ 480 lux: the maximum reading";
   - v09: Wien peaks of 2898, 828, 580, 500 and 290 nm, and 9993 K and 6900 K;
   - v10: photon energies 1.77, 3.10, 4.30, 4.96 and 6.20 eV, and K_max 0, 0, 0, 0.66 and 1.90 eV;
   - v11: 4.125 × 10⁻¹⁵ V s, 6.608 × 10⁻³⁴ J s, −2.275 V, 5.515 × 10¹⁴ Hz and 3.645 × 10⁻¹⁹ J;
   - v13 and v14: the gamma slider values, the muon ideal-model counter, and "mean lifetime stretches to 22 μs";
   - v15: the 6.5 TeV LHC figures and the equal-momentum-step speeds;
   - v16: the energy-out slider's mass-loss readouts and the "per bond" figure.
3. Cues are verbatim and in spoken order. Speech changed in v02, v03, v04, v05, v07, v09, v11, v12, v14, v15 and v16.
4. Each opening equals the previous lesson's final frame, including m6-v20/m7-v01 and v08/v09. v16 ends with the new tag "head-on, equal energies", and m8-v01 will fade it (root decision 15).
5. Counts are the sum of scene strings, and seconds stay within the band and the 570 s cap.
6. Plates exist and are not stretched. The v05 to v07 laser sits whole on a coded block (root decision 10).
7. Practical beats do not present any method as school-approved.
8. No em dashes, Australian spelling, and no people, hands or faces.

Write `checks/p-y12-m7-vNN-rev2-error-check.md`.

**Then the plates:**
- **`y12p-light-sensor-v1.png`.** Paint it as briefed in v02's Codex asset brief: transparent PNG, no painted guide marks, no plank. v02 scene 5 and v08 scene 8 use it.
- **Bar-heater glow plate (optional).** Retry it once, registered exactly to the heater plate. If it does not register, report the element-rod rectangle in pixels instead.

Update the brief 191 manifest.

**Hand-in:** to `status.md`, one line per design, then the plates.
