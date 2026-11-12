# Root decisions: Year 12 Physics Module 7 (first designs)

Claude (root), 6 November 2026. Module 5 and 6 decisions still apply where relevant.

1. **Colour keys.** Waves and fields (v01 to v08): electric field blue, magnetic field slate, travel direction navy, accelerating charges rose. Quanta and relativity (v09 to v16): photons amber, electrons navy, Earth frame ink, ship frame teal. Accepted; forces stay amber.
2. **Joins.** m6-v20 to m7-v01 and v08 to v09 match without change. v16 ends on pair production in a cooling early Universe; m8-v01 must open on it.
3. **Data sheet** to the science check: μ₀ and ε₀ values and units, whether c = 1/√(μ₀ε₀) is printed, h, Wien's constant, and the forms of the relativity formulas. "V_stop" replaces V_s for stopping voltage (Module 6 uses V_s for transformers).
4. **History** to the science check: Fizeau's figures (720 teeth, 8633 m, 12.6 turns per second, 3.13 × 10⁸ m/s); Rømer "showed light's speed is finite"; Hallwachs (1888) for the zinc-plate discharge; the 1964 CERN pion, 1977 muon storage ring and LHC bending-radius figures. Scientists are named in words only, never drawn.
5. **Physics choices.** v03 explains lines with plain-language energy levels before E = hf (accepted; v10 and Module 8 formalise it). v04 adds a rotation scene with rotation and density broadening told apart by line shape (accepted; the site lacks it, the syllabus names it). v07 uses the site's 400 lines per mm values (647 nm, visible red). v14 treats simultaneity in one sentence. v16 counts the oxygen in combustion's system and keeps the greyed fission bar.
6. **Plates.** v08's filters become an optional painted filter mount (owner rule for real objects), coded discs as fallback. New Module 7 plates as requested in each design (spark-gap transmitter and receiver, Jupiter, toothed wheel, laser module, discharge tube, pocket spectroscope, cool and hot stars, slide holder, bar heater pair, bench lamp, photocell, spacecraft and exhaust layer, atomic clock, space station, fuel can). Check `phys-y11-filament-lamp-v1`'s alpha before reuse.
7. **Coverage gaps** for the Module 7 check: time-dilation evidence from cosmological studies is left to Module 8; the twin paradox is excluded by the route.
8. **Learning-review calls:** v09's "cup of tea" line, v10's 69 s delay estimate, v15's idealised probe; optional cuts listed per design.
9. **Site corrections** (lessons 1 to 5, 9 to 14, 16) are listed in each design's Decisions; Codex logs them, first lesson 13's impossible 100 m and 60 m worked example and lesson 12's Hafele-Keating sign contradiction.

## After brief 191 repairs, v01 to v08 (7 November 2026)

10. **Laser height (v05 to v07).** The laser plate is lifted whole and unstretched onto a coded block in the bench's grey, so the aperture lines up with the slide window and screen. Accepted; no taller-post variant is needed.
11. **v05 slit-sweep readouts.** The simulated fringe widths (13/26/52 mm red, 11/21/43 mm green) are allowed in this qualitative video because no formula is shown and the readouts are tagged "simulated". They show the trend (narrower slit, wider spread) that the route asks for.
12. **v04 star B** reuses `y12p-star-white-v1.png` (brief 192). Accepted.
13. **New plate:** `y12p-light-sensor-v1.png` (briefed in v02, shared with v08). The existing `phys-y11-light-sensor-head-v1.png` has guide marks painted into the artwork and cannot be used. v02 scene 5 and v08 scene 8 wait on it.
14. **Speech changes for the error check:** v02 scene 7; v03 scenes 1, 3, 4, 5, 6 and 11 (cool sodium vapour absorber, four bright hydrogen lines); v04 scenes 6 and 13; v05 scene 7; v07 scene 9. v01, v06 and v08 speech is unchanged.

## After brief 191 repairs, v09 to v16 (7 November 2026)

15. **v16 to m8-v01 join.** v16's final frame gains the small tag "head-on, equal energies" under "≥ 0.51 MeV each". The m8-v01 repair opens on that exact frame and fades the tag in its first beat.
16. **v08 to v09 join** holds (v08's final frame is unchanged after its Revision 2).
17. **Bar-heater glow.** The glow stays a coded overlay on the painted element. A registered glow plate is an optional Codex retry; if it cannot be registered exactly, Codex reports the element-rod rectangle instead.
18. **v10 and v15 high-risk redesigns** (one stage per scene; live photocell bench; thrust stage and photon race) are accepted subject to the error check. **v12** now says measurements agree on c "within their uncertainties"; **v16** never says light carries mass.
19. **Speech changes for the error check:** v09, v11 (one word), v12, v14, v15 and v16. v10 and v13 speech is unchanged.

## Visual upgrade (13 November 2026)

Calls made by the upgrade session (Claude, second session). Root reviews these; none is final until root accepts it. Numbering is local to this section (U1 to U8).

U1. **Scope and method.** 16 designs: m7-v01 to m7-v16. Every design already carried the Revision 2 visual upgrade, so each gains a section "Visual upgrade (Revision 3)" (stage list with times, simulation engines, standing rules) and an "Upgrade (Revision 3)" paragraph only where a scene needed one. Every narration line is byte-identical (checked by hash against the baseline). All 16 pass the checking script, and none needed a checker fix.
U2. **Stages and cuts.** Every design lists its stages with times. Revision 2 already changes stage at nearly every scene, so nothing holds past about 90 s and no new cut was needed. The longest are m7-v07 (the bench zooming out to the order fan, about 84 s) and m7-v06 (the derivation and its pull back, about 81 s); each changes the frame part-way.
U3. **Root rules R1 to R4.** R1 and R2 are standing rules in every design. R3 applies once: m7-v16 draws oxygen red in its O₂ cluster and its small molecule. R4: no narration was added.
U4. **Simulation engines named.**
- Waves: wave fronts from an antenna and a spark, and the E and B curves (v01); the Doppler construction with a moving source (v04); Huygens wavelets and the spread beyond a slit (v05); superposition, the two-source stage with a path-difference probe, coherence and the band pattern (v06); grating order angles and the slit-count slider (v07); transverse against longitudinal particles (v08); standing waves in the cavity (v09); the interferometer's fringe strips (v12). Every wave on screen is a slow model wave tagged "model", with real values on the readouts.
- Field motion: Earth and Jupiter for Rømer's delay (v02); electrons turning back at the stopping voltage (v11).
- Particle box: thin hot gas and cool vapour (v03); dense against thin gas with a collision readout (v04).
- Exact arithmetic that stays lesson-coded: Malus's law (v08), the Planck curve (v09), the photoelectric bench (v10), every relativity readout (v12 to v15) and the mass-energy slider (v16).
U5. **Kit gaps (not coded around).** (a) No special-relativity kit: a light clock in two frames, γ against speed, lengths and times between frames (v12 to v15); and field motion is not relativistic, so v15's storage ring is lesson arithmetic. (b) No engine for light meeting matter: photons, work function, photocurrent, stopping voltage (v10, v11). (c) No black-body curve helper (v09). (d) The waves engine has no single-slit or many-slit intensity helper (v05, v07); both are shown by summing a row of sources. (e) The particle box has no attraction, so v03's hot dense filament is lesson-coded.
U6. **Question cards.** Every card already had a picture. Givens strips were added where missing: m7-v09 feedback 2 and m7-v12 feedback 1 and 2 (these cards have no numbers, so the strip repeats the card's cases or statement). Coded pictures on cards became plates in m7-v10 (the clock icon is the painted digital timer with a blank display) and m7-v16 (the burner flame is the painted Bunsen flame).
U7. **Coded real objects removed.** A coded light source and satellite and two method icons (v02) become plates; a coded white source, white cards and source icons (v03); a coded star dot (v04, v13); a mirror icon (v05); coded balls and a ship icon (v12, v15); coded flames (v16). Kept as diagrams: slits and ruled slides, filter discs in the painted holders (root's earlier decision), interferometer and beam-pipe schematics, the globe seen from above the pole, cabin windows and stretching springs.
U8. **Calls for root.**
- (a) **One new plate request:** `y12p-vapour-cell-v1.png` for m7-v03 scene 6 (the coded glass cell of cool sodium vapour). Its fallback draws no object at all (a dashed region tagged "cool sodium vapour"), so the scene meets the rule either way.
- (b) m7-v02's final frame keeps its row of four method pictures, but the wheel and the oscilloscope are now small copies of their plates (R2: a plate where one exists). The wording of the frame is unchanged; m7-v03's opening must be drawn the same way.
- (c) m7-v13's final frame draws its star from the white star plate for the same reason; m7-v14 opens on it.
- (d) Plates newly placed in scenes or on cards were confirmed by file listing, not re-inspected. Codex should check that the digital timer can be shown blank (v10) and that the chemistry flame plates sit well on a physics card (v16).
- (e) Key notes were already five one-line bullets with a framed card in all 16, and the hold was already 45 s, so no estimate changes in Module 7.
