# phys-y12-m7-v02 science check

Source: phys-y12-m7-v02, Revision 1, SHA-256 `da28a3302cbded7ee829c62450ebeff2cfd4f8384e27dbda5e64ee1bbaab5bdb`. Independent Codex source review, 6 November 2026. No design, narration, speech or scene edits.

The stated wheel values give 5.51146 times 10^-5 s and 3.13274 times 10^8 m/s. The 30.0 m, 101 ns pulse example gives 2.97030 times 10^8 m/s. Lunar ranges are 3.83734 times 10^8 m at 2.56 s and 3.76240 times 10^8 m at 2.51 s using exact c. The accepted HSC approximation gives 3.77 times 10^8 m for the latter. The 1983 metre definition and exact c are correct.

1. **Should fix:** (displayed denominators, scenes 3, 5 and 10): bracket the whole time in scientific notation or use fractions. For example 30.0 / (101 times 10^-9) and 15000 / (5.00 times 10^-5). The present ungrouped slash expressions do not produce the stated results. No speech change.

2. **Should fix:** (GPS, scene 7): one microsecond corresponds to about 300 m of signal-range error, not a universal 300 m shift of the receiver position. Position also depends on satellite geometry and the fitted receiver clock offset. Say distance or range error here; a longer GPS explanation is unnecessary.

3. **Should fix:** (feedback cues, scene 12): distance occurs three times. The first is before the numerical result, the second is in timing the trip can only tell you the distance, and the third is in doubles the distance. The Visual assigns the explanation to first and the crossed slip to second, which makes both early. Use the corresponding full phrases or second and third. No speech change.

[BIPM Resolution 1 (1983)](https://www.bipm.org/en/committees/cg/cgpm/17-1983/resolution-1) verifies the historical definition. [ESA code-based positioning](https://gssc.esa.int/navipedia/index.php/Code_Based_Positioning_(SPS)) gives the separate pseudorange, position and clock-offset relationship.

Arithmetic: `work/brief191/first-calculations.py` and `calculations.json`.

Mechanical count: 6,121 characters as a sum of 14 scene strings; 6,134 with a single joining space between scenes. The design headline uses the latter convention. Both remain inside the narration band. Runtime is the source estimate, not a measured take. No U+2014 or U+2061.

Result: 0 blockers, 3 should fix, 0 optional. Resolve findings before recording. Built fit, motion at playback speed, captions, exact voiced preview and human listening are pending. New plates are handled after the source reviews; no artwork delivery or practical approval is claimed here.
