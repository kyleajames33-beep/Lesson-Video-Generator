# phys-y12-m7-v03 science check

Source: phys-y12-m7-v03, Revision 1, SHA-256 `bb7babb797787ba20c765e1860dbb708921089d3e7d12ed10157505f0ed4a242`. Independent Codex source review, 6 November 2026. No design, narration, speech or scene edits.

The four prominent hydrogen lines round to the listed school values, and the sodium doublet and helium/neon reference positions agree with the NIST tables at the stated precision. A cold hydrogen cloud is not automatically a visible Balmer absorber: the lower state for those transitions is n = 2. The drawing explicitly starts there without establishing its population. The 2900 K filament does not establish that condition.

1. **Should fix:** (hydrogen count, scenes 1 and 4): exactly four visible lines is too strong, especially with the displayed 380 to 750 nm window. NIST also lists hydrogen lines near 383.5, 388.9 and 397.0 nm. Call the four shown lines prominent, rather than an exhaustive set. Keep the useful four-line school diagram.

2. **Should fix:** (absorption example, scene 6): cool hydrogen in front of a 2900 K filament does not establish enough n = 2 atoms to produce the four prominent Balmer absorption lines drawn. Most cold hydrogen is in its ground state. Use a suitable absorber and transition, or establish the required lower-level population in the example. Preserve the simple upward-transition explanation; students do not need a new statistical-mechanics detour.

3. **Should fix:** (feedback 1, scene 11): excluding neon because its other reference lines are absent conflicts with accepting helium when the unknown shows only five of the seven helium reference lines. Reject neon because most observed unknown lines have no neon match. Align the connectors and caption with that observed-line test.

**Optional:** (continuum wording, scene 3 and notes): the material-independent spectrum is the blackbody approximation, not an exact property of every real metal filament. The intended point is that a continuum lacks the element-specific line fingerprint. Avoid presenting the real filament's emissivity as strictly independent of material.

[NIST hydrogen strong lines](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2.htm), [NIST hydrogen levels](https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable5.htm) and [UCSD stellar-spectra lecture](https://www.cass.ucsd.edu/archive/physics/ph7/Stars.html) support the line positions and the n = 2 population condition. [NASA spectroscopy explanation](https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-how-absorption-and-emission-spectra-work/) supports the emission/absorption distinction.

Arithmetic: `work/brief191/first-calculations.py` and `calculations.json`.

Mechanical count: 6,181 characters as a sum of 15 scene strings; 6,195 with a single joining space between scenes. The design headline uses the latter convention. Both remain inside the narration band. Runtime is the source estimate, not a measured take. No U+2014 or U+2061.

Result: 0 blockers, 3 should fix, 1 optional. Resolve findings before recording. Built fit, motion at playback speed, captions, exact voiced preview and human listening are pending. New plates are handled after the source reviews; no artwork delivery or practical approval is claimed here.
