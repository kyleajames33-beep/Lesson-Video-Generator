# Year 11 Physics (2025 syllabus): coherence audit, 23 November 2026

Independent review of the 99 Year 11 Physics designs before voicing or building, at three levels (course, focus area, lesson), against the site and the 2025 syllabus, plus the hand-over into Year 12 Physics. Companion table: `phys-y11-coverage-map-2026-11-23.md`. No existing file was edited; the site clone was only read.

**Inputs read.** `AGENTS.md`; `docs/visual-design-handbook.md` (scope only); route `docs/production/phys-y11-video-route.json`; ledgers `docs/production/programme/syllabus/phys-new-y11.json` and `phys-new-y12.json`, `timeline.md`; `docs/production/programme/syllabus-reuse-audit-2026-11-21.md`; root decisions `checks/root-decisions-phys-y11-fa0.md`, `-fa1-v01-v12.md`, `-fa1-v13-v24.md`, `-fa2.md`, `-fa3.md`; `site-corrections-phys-y11.md`; pre-designs `pre-design/phys-y11/` (FA1 only); all 99 designs `lessons/phys-y11-fa*-v*.md`; the 81 Year 12 designs `lessons/phys-y12-m5..m8-*.md` (entry knowledge, openings, aids); the site clone `C:/Users/kygs/teaching-app-fix/subjects/physics/year11/` (79 lessons) and its plan `docs/plans/physics-2025/01-syllabus-map.md`; `checks/bio-y11-coherence-audit-2026-11-23.md` (structure only).

**Method.** A script extracted from every design the H1 question, scene 1 narration, the handoff scene and its "Next:" chip, memory-aid lines and the "Builds on" line, then compared all 98 consecutive pairs in the root-decided viewing order (FA0 block inside FA1, see coverage map). Ownership of all 168 ledger points was checked by script against the route; route site hashes were recomputed against the live clone. Entry knowledge was traced for 14 cross-video or cross-focus-area dependencies and for every "Year 11" claim in the Year 12 designs. Site claims were re-checked live by text search. Science was spot-checked by recomputing 27 high-risk numbers and reading about 30 high-risk claims.

## Counts

| Severity | Count |
| --- | ---: |
| Blocker | 2 |
| Should fix | 9 |
| Note | 11 |

## Overall verdict

The plan is strong at lesson and focus-area level. All 168 syllabus points are routed; all 16 "Conduct ..." practicals have their own investigation video; all 79 site lessons are mapped; the opening-frame chain is unbroken (each scene 1 opens on the previous final frame with a spoken bridge, including across the FA0 block, because fa0-v05 and fa0-v07 restore the content videos' frames). Recurring devices are introduced once and reused: "twice as far, a quarter" (fa2-v16, fa3-v04, contrasted in fa3-v25), the trolley and falling-ball data thread (fa1-v10, v14, fa0-v01 to v05, fa1-v15, fa0-v07), "squash gets cos, slide gets sin" (fa1-v21 to v23), the plates and field-motion sims. g = 9.8 m s⁻² throughout, no em dashes, narration 3,500 to 6,600 characters in every design. The physics is accurate: no numerical error in the 27 recomputed items.

The gaps are at course level: three syllabus points left on a hold that the owner lifted on 18 November, a site corrections log that stops at FA2 L09 while live site errors contradict the videos on about 40 pages, a vocabulary clash between fa1-v10 and the FA0 definitions, handoff chips that were not updated when FA0 moved into FA1, and a Year 12 hand-over that has not been planned against the course this cohort will actually take (Year 12 Physics 2025).

## Blockers

### B1. Three syllabus points have no teaching design, and their hold no longer applies

- **Where.** Route `phys-y11-fa1-v25` (`cibb423b47`: "Explain why Aboriginal and/or Torres Strait Islander Peoples used inclined planes to move heavy objects", site FA1 L23) and `phys-y11-fa2-v08` (`cif4d17b1e`: "Describe how Aboriginal Peoples use the wave velocity and wavelength of water waves to approximate water depth", site FA2 L07): status "cultural hold; not designed". FA0 point `ciabfb4d1f` ("Describe the Cultural Knowledges and observations ... and examine how these contribute to the development of scientific knowledge") is routed to `phys-y11-fa0-v04.md` but held there (its Decisions and open decision 1). Holds come from route root decision 4, `root-decisions-phys-y11-fa1-v13-v24.md` item 14 and `root-decisions-phys-y11-fa2.md` item 12.
- **Why it blocks.** The owner decided on 18 November that no cultural reviewer will be sought and such content is taught in general, safe terms rather than held. Two mandatory content points and one FA0 point are therefore simply missing, and the site teaches both lessons.
- **Fix.** Design both videos now under the general-content rule (no named communities, people, places or specific traditional-knowledge cases; acknowledge knowledge holders as a principle).
  - fa1-v25: the physics is fa1-v22/v23's: on a slope the force needed along it is mg sin θ plus friction, less than the full weight a lift needs, so a heavy object can be moved with less force over a longer path; general uses (moving heavy stones, logs or canoes up sloping ground or ramps, rollers to cut friction).
  - fa2-v08: in shallow water (depth below about one twentieth of the wavelength) the wave speed is about √(g d), so waves slow, crowd (shorter wavelength at the same frequency, v = fλ from fa2-v05) and bend towards the shallows; reading slower, closer-spaced, steepening waves signals shallower water. fa2-v20 already shows water waves slowing in a shallow region, so it can be recalled.
  - Teach `ciabfb4d1f` as the closing beat of both (observation tested over generations, consistent with the physics model), and update the FA0 table in `phys-y11-fa0-v04.md` and the route owner.
  - Then re-take only the separate handoff takes the root decisions anticipate: fa1-v24's chip and take (to v25), fa1-v26's bridge ("Last time, a force along the track ..."), fa2-v07's chip and take (to v08) and fa2-v09's bridge.

### B2. Live site errors that contradict the videos are not in the corrections log

- **Where.** `site-corrections-phys-y11.md` covers FA1, FA2 L01 to L09, FA3 L12 and one FA3 L26 row. The designs for FA2 L10 to L25 and FA3 L01 to L26 each contain a "Site corrections (quoted from site lesson N ...; none of these rows is logged yet)" block, about 40 site pages in all. Re-checked live on the clone today (still present): FA2 L11 (300 nm ultraviolet said to "ionise atoms", but each photon carries about 4.1 eV; infrared said to "pass through the body harmlessly"; E = hf called the energy "of an EM wave"), FA2 L15 ("the larger the slow-down, the larger the bend" without "for the same angle of incidence"), FA2 L17 ("which is why the critical angle is large and TIR happens readily"; θc given as 71.4°, recomputed 71.3°), FA2 L25 ("this is a blueshift" for a siren; pitch "constant-and-high"), FA3 L13 ("barely warms up" without "the same current"; "more lattice to drift through"), FA3 L14 (the gradient of a curved V–I graph equals R, in the misconception "Right" line, a match pair and an answer placeholder), FA3 L25 (every "Dot point:" line quotes B = μ₀nI, the syllabus writes B = μ₀NI/L). Logged FA1 items are also still live (FA1 L14 "closes the focus area"; FA1 L16 rifle force; FA3 L12 "50 times a second").
- **Why it blocks.** Videos embedded on these pages will contradict the page beside them (for example fa2-v14 says 300 nm UV does not ionise; the page says it does). It blocks release onto the site, not voicing.
- **Fix.** Copy each design's "Site corrections" block into the log (they are already written as rows with exact quotes): fa2-v13 to v33 and fa3-v01 to v30, re-verified against `C:/Users/kygs/teaching-app-fix`, with paths updated from the dead `C:/Users/kygs/hscscience`. Do not edit the site. A summary list is in the appendix.

## Should fix

### S1. fa1-v10 defines "reliability" the way fa0-v05 defines precision

- **Where.** `phys-y11-fa1-v10.md` narration: "Reliability is how closely repeats agree" and "method two is more accurate, and method one is more reliable, but all its runs are low". `phys-y11-fa0-v05.md`: "Precision is how closely repeated readings agree" and "Reliable means repeating the whole experiment gives consistent results". Root FA0 decision 6 makes fa0-v05's meanings the course definitions.
- **Fix (before voicing v10).** "Reliability is whether repeating the experiment gives consistent results. Here we judge it from how closely our repeats agree." Keep the syllabus words accuracy and reliability; add "so method one is more precise" where its tight spread is meant. Ask the Codex error check to confirm fa2-v17, fa2-v23, fa2-v24, fa3-v15, fa3-v23 and fa1-v24 use the same four meanings.

### S2. Three chips skip the FA0 video that follows them

- **Where.** In the root order (FA0 decision 1), fa1-v14 is followed by fa0-v01, fa1-v15 by fa0-v07, fa1-v30 by fa0-v06. Their chips still name fa1-v15, v16 and v31 ("How can measured data test the separate effects of net force and mass?", "How do we find the forces on an object that is speeding up, slowing down or turning?", "Does the measured total momentum survive a collision?"), and their handoff takes speak to those videos.
- **Fix.** Give each a separate handoff take and chip naming the FA0 question: v14 to "How does an observation become a hypothesis an experiment can test, and why should new evidence change it?"; v15 to "How do you turn your results into an argument that other people can check, trust and understand?"; v30 to "How can a physics model solve a real problem, and what should change when new evidence doesn't fit?". Keep the rest of each final frame, so fa0-v05, fa0-v07 and fa0-v06 still restore it with the content chip.

### S3. Twelve other chips do not match the next heading

- **Where.** Of 98 pairs, 57 chips match the next question exactly and 26 match the question part of a heading that adds a subtitle (acceptable). The rest: S2's three, plus topic-label chips in fa1-v01 ("vector diagrams, adding and subtracting"), v04, v05, v06 ("motion graphs"), v07 ("slopes and areas"), v08, v09 ("How can two graphs measure g?"), v12 ("why velocity stays the same when forces balance"), v24 ("work and kinetic energy"); a wording change in fa1-v28 ("over a longer time" against "when it happens over a longer time"); and fa3-v24 ("Why does a wire's magnetic field grow with the current and fade with distance, and by how much?" against fa3-v25 "How strong is the magnetic field near a current-carrying wire, and why does it only halve when you move twice as far away?").
- **Fix.** Set each chip to the next design's question verbatim: v01 "Why do vectors join tip to tail, and how does a diagram show a resultant or a difference?"; v04 "How do instantaneous and average speed and velocity differ?"; v05 "How do I find average velocity in two dimensions?"; v06 "How can motion data become linked displacement, velocity and acceleration graphs?"; v07 "How do slopes and signed areas connect motion graphs?"; v08 "How can constant-acceleration equations predict one-dimensional motion?"; v09 "How can two graphical methods measure gravitational acceleration reliably?"; v12 "Why does an object keep the same velocity when the forces on it balance?"; v24 the v25 question once designed (B1); v28 add "when it happens"; fa3-v24 use v25's question (or retitle v25, root's choice). Chips are screen text only; the takes need no change except v24 (B1).

### S4. The route no longer describes the plan

- **Where.** `phys-y11-video-route.json`: FA0 `playlistOrder` 95 to 101 against root FA0 decision 1; `nextHandoff` still holds placeholders ("How can I explain and apply ...") for fa1-v15, v24, v25, v31, fa2-v07, fa2-v08 and others, and fa3-v30 points to fa0-v01; statuses read "pack next" or "proposed" for designed videos; `sources.site`, every `sourceLesson.path` and the corrections log point to `C:/Users/kygs/hscscience`, which no longer exists; all 94 `sha256` values differ from the current clone (the site has been edited since 1 November).
- **Fix.** Root applies decision 10: renumber `playlistOrder` to the FA0 placement, set each `nextHandoff` to the next design's H1 question, update statuses, repoint paths to `C:/Users/kygs/teaching-app-fix`, re-hash, and re-run the chip check. Re-read any site section a design quotes where the hash changed.

### S5. The course-end frame names a playlist position that no longer exists

- **Where.** `phys-y11-fa3-v30.md` scene 18 and YouTube metadata: chip "Next in the playlist: Working scientifically skills".
- **Fix.** Replace with the Year 12 opener: a chip "Year 12: Advanced mechanics, starting with projectiles" (the 2025 Year 12 course opens on projectile motion, served by `phys-y12-m5-v01`), and name it in the metadata once the 2025 Year 12 route exists (S7).

### S6. Year 12 designs re-teach what the 2025 Year 11 course now teaches

These Year 12 videos are planned to serve Year 12 2025 (reuse audit Q1), but for this cohort they repeat Year 11 lessons.
- `phys-y12-m5-v11` scenes 1 to 3 build the change-in-velocity arrow for a turning object; `phys-y11-fa1-v16` scene 7 already builds the same construction (two velocity arrows slid to a common tail). Fix: trim fa1-v16 scene 7 to the qualitative result (turning is acceleration towards the inside, supplied by an inward net force such as tyre friction), because Year 12 2025 FA1 owns the vector diagrams for circular motion.
- `phys-y12-m6-v01` scenes 2 and 3 (uniform field between plates; V = Ed derived) and `phys-y12-m6-v03` scene 2 (W = qEd = qV) re-derive `phys-y11-fa3-v07`, `v09` and `v10`. Fix before voicing: make both recalls ("In Year 11, ..."), one line each, and spend the time on the new projectile-like path and the electron gun. The 2017 cohort met the same ideas in Year 11, so one take still serves both courses.
- `phys-y12-m7-v05` scenes 2 and 3 re-teach ripple-tank diffraction and Huygens wavelets, which `phys-y11-fa2-v27` and `v28` teach. Fix: recall in one line, then go straight to light.
- `phys-y12-m7-v09` and `v10` introduce "packets, E = hf" as new; `phys-y11-fa2-v14` teaches photons and E = hf and says "you'll meet the evidence in Year 12". Fix: a bridge sentence "In Year 11 you used E = hf; here is the evidence that forced it."
- `phys-y12-m6-v15` (transmission loss, V²/R trap) duplicates `phys-y11-fa3-v17`; it is 2017-only per the reuse audit, so leave it out of the 2025 Year 12 playlist.

### S7. Year 12 assumes "Year 11" knowledge that Year 11 Physics 2025 does not teach, and its chains depend on 2017 order

- **Where.** Entry knowledge lines: "Year 11 nuclear notation", "beta decay", "atoms, nuclei" (`phys-y12-m8-v01`, `v05`, `v06`, `v07`, `v08`, `v09`, `v14`, `v16`, `m7-v16`); "kelvin temperature" (`m7-v09`); "temperature as particle kinetic energy" (`m8-v19`); "the light-year" (`m7-v13`). A search of all 99 Year 11 designs finds none of these taught (kelvin appears only in fa3-v14's resistance context; the 2025 Year 11 course has no thermodynamics). Order: 2025 puts torque in FA2 (motors), so `m5-v11`'s opening "Here's that crane again" (from m5-v10) breaks, and 2025 FA4 teaches the atom and nucleus (site plan L01 to L25) before the stars (L26 to L28), while the 2017 designs teach stars (m8-v01 to v06) first.
- **Fix.** Build the Year 12 2025 Physics route from `phys-new-y12.json` (official codenames, 21 Nov) and the reuse audit, with entry knowledge written as Year 11 video ids. Order FA4 as 2025 does (m8-v07 to v16 before m8-v01 to v06), which resolves the nuclear-notation claims; add one plain-meaning line for kelvin and temperature in m7-v09 (2025 FA3 owns it there anyway) and for the light-year in m7-v13; re-take the bridges that move (m5-v11 at least). Relabel any remaining "Year 11" claim as "Stage 5 Science".

### S8. Two memory aids for one idea across the hand-over

- **Where.** `phys-y11-fa1-v03` "Cos hugs the angle. Sin sits opposite."; built `phys-y12-m5-v02` "Cos is close" (same meaning: the component next to the given angle uses cos).
- **Fix.** m5-v02 is built and v03 is not voiced, so change fa1-v03's line to "Cos is close: the component next to the angle uses cos, and the other one uses sin." Year 12 then reinforces the Year 11 aid instead of replacing it. fa1-v21/v22's "squash gets cos, slide gets sin" is a ramp-specific case and can stay.

### S9. Root FA0 decision 3 is not yet applied

- **Where.** `phys-y11-fa1-v15.md` still teaches the range as "a first estimate of the uncertainty" and `phys-y11-fa1-v31.md` introduces precision, both after fa0-v05 (decision 3 said these "become short recalls when Revision 3 is next opened"; Revision 3 changed visuals only).
- **Fix.** At the next narration edit (before voicing), turn those lines into one-phrase recalls of fa0-v05 ("as in the analysing video, half the range is our uncertainty").

## Notes

- **N1.** fa2-v13's chip ("... raise each photon's energy?") shows "photon" before any narration defines it; fa2-v14 defines it at once. Optional: "... raise the energy each packet of light carries?".
- **N2.** Unit style: 16 designs (fa0-v04, v05, v07 and thirteen FA1 designs between v02 and v19) show m/s or m/s² on screen; 60 use m s⁻¹, as do the Year 12 designs and the HSC data sheet. Harmonise in the error check.
- **N3.** `phys-y11-fa0-v04.md` Decisions "Handoff" bullet still describes the superseded chip naming fa1-v24 (root FA0 decision 23 allows rewording at the next edit).
- **N4.** Pre-design packs exist only for FA1 (30 files); FA0, FA2 and FA3 went from route to design. No action, but the route `authorDecision` fields ("Research proposal ...") are stale (S4).
- **N5.** fa2-v12 uses decibels and the step "energy ratio = 10^(change in dB ÷ 10)". It is given as a calculator step, which is right for students without logarithms; keep it tagged as a given rule.
- **N6.** fa2-v23's aid "repeats shrink the scatter, not the shift" agrees with fa0-v05's "the spread is precision, the gap is accuracy"; have v23 recall the fa0-v05 line first so one idea has one anchor.
- **N7.** All 99 designs read "Needs Codex error check before plates and voicing" after the 11 November visual upgrade. fa0-v06 depends on plates requested by fa1-v29 and v31 (root FA0 decision 24(b)).
- **N8.** Sign conventions agree across the hand-over: Year 11 takes "up as positive" for vertical problems (fa1-v12, v16) and Year 12 M5 uses up positive with a_y = −9.8 m s⁻².
- **N9.** Built `phys-y12-m5-v01` to `v05` carry no course labels in narration (no "Module", "syllabus" or "Year 11" in any spoken line), so they serve 2025 as they are, apart from S8.
- **N10.** Year 11 forward references are right for the 2025 Year 12 course: fa2-v14 "you'll meet the evidence in Year 12" (2025 FA3 photon evidence), fa3-v30 "electromagnets return in Year 12" and "force on a current-carrying conductor and motors (Year 12)" (2025 FA2).
- **N11.** The Doppler video uses the syllabus form f' = f(v_wave + v_observer)/(v_wave − v_source) and fa3-v27 quotes B = μ₀NI/L correctly, where the site does not.

## Lesson-level handoff and entry checks (summary)

- **Handoff chain.** All 98 consecutive pairs (root order) checked. Scene 1 of every design opens on the previous final frame, with "Last time" or a "Here's that ..." continuation; fa0-v05 and fa0-v07 restore fa1-v14's and fa1-v15's frames exactly, so fa1-v15 ("In the force and mass video ...") and fa1-v16 ("Last video ended with this crate sliding") still hold. FA1 to FA2 (gliders on springs) and FA2 to FA3 (balloon and wool) join cleanly. Faults are chip text only (S2, S3) and the two held gaps (B1).
- **Entry knowledge traced (all hold unless noted).** fa1-v13 reuses v12's sledge values (150 N at 20°, 141 N and 51.3 N); W = mg first appears in fa1-v14; fa1-v26's W = Fs cos θ uses fa1-v03 components; fa1-v16's opening depends on fa0-v07 restoring v15's frame (it does); fa0-v05 reuses fa1-v10's falling-ball data; fa2-v05 to v07 use fa1-v07 graph reading; fa2-v14 defines photons and h itself; fa2-v16 states the sphere area 4πr² before using it; fa2-v19 needs c from fa2-v13; fa3-v04 reuses fa2-v16's inverse-square aid; fa3-v08 uses F = qE (v05), SUVAT (fa1-v09) and F = ma (fa1-v14); fa3-v10 builds W = qV on fa3-v09's W = qEd; fa3-v16 defines power (P = W/Δt) itself, since FA1 2025 has no power point; fa1-v10 precedes the FA0 block and must teach its own accuracy and reliability (it does, but see S1).

## Site fit

- **Design right, site off the mark:** FA0 has no site lessons (all 34 points "missing" in the crosswalk); the syllabus requires them, so fa0-v01 to v07 are right. Practical points: the site models or plans each practical, the designs add a conducted investigation (16 of the 17 "partial" crosswalk rows), which is right. fa3-v13 and v14 own resistance factors and V = IR as the syllabus groups them (site crosswalk mis-cited; root FA3 decision 20). The physics corrections in B2 (UV ionisation, TIR, Doppler terms, V–I gradient, solenoid dot point, collision rate in thick wires) are all design-right.
- **Site right, design departs:** the two First Nations lessons (FA1 L23, FA2 L07), which the site teaches and the designs hold (B1).
- **Neutral departures:** splits of one site lesson into concept and investigation videos (FA1 L14, L22, L28; FA2 L01, L09, L13, L15, L18, L19, L20; FA3 L14, L21, L26); the FA0 block placed inside FA1; site numbers kept with a "teaching values" tag (fa2-v16).

## Physics accuracy spot-check

27 numbers recomputed independently, none wrong: proton across 200 V, √(2qV/m) = 1.96 × 10⁵ m s⁻¹ (fa3-v08, "2.0 × 10⁵"); E = 8.99 × 10⁹ × 3.0 × 10⁻⁹ / 0.020² = 6.74 × 10⁴ N C⁻¹ (fa3-v04); Coulomb 0.43 N (fa3-v06); B = 2 × 10⁻⁷ I/r values and μ₀/2π (fa3-v25); μ₀nI = 7.54 mT for n = 2000 m⁻¹, 3.0 A (fa3-v27); line loss 50 000 W against 500 W (fa3-v17); 2.0 kg and 1.0 kg trolleys sticking, KE 18 J to 6 J (fa1-v30); stopping distance 75 m and 18.75 m at half speed (fa1-v09); 564 N rope tension at 10° (fa1-v20); ramp speed 5.39 m s⁻¹ (fa1-v23); braking 24.1 m and 96.5 m, ratio 4 (fa1-v26); school-zone stop 25.5 m (fa0-v06); hook mean 0.461 s and g = 9.41 m s⁻² (fa0-v05); free-fall 0.452 s from 1.000 m (fa1-v10, fa0-v05); Doppler 548 Hz, 459 Hz, 644 Hz (fa2-v33); critical angles 41.8° glass, 24.4° diamond, 80.6° fibre (fa2-v22); 28.9° in water (fa2-v21); 300 nm photon 4.1 eV (fa2-v14); Mars sunlight 589 W m⁻² (fa2-v16); +6.02 dB for doubled amplitude and equal displacement amplitude 5.6 × 10⁻⁸ m at 62, 68 and 74 dB (fa2-v12); string 30 m s⁻¹, 10 Hz to 20 Hz on halving (fa2-v32). Claims read and found correct include: paper scraps attracted by molecular polarisation, not free electrons (fa3-v02); the right-hand grip rule and "anticlockwise is north" (fa3-v24, v26); "squash gets cos" with θ to the horizontal (fa1-v21); myopia corrected by a diverging lens (fa2-v25); frequency unchanged across a boundary (fa2-v20); accelerating charges radiate (fa2-v13).

## Year 11 2025 students go on to Year 12 2025: what that implies

`timeline.md`: the 2025 Year 11 cohort starts Term 1 2027 and continues into Year 12 Physics 2025 from Term 4 2027. The published 2017 Modules 5 to 8 serve the 2026 and 2027 HSC only. So:
1. The Year 12 videos this cohort watches will be the 2017 designs relabelled (69 of 81 serve 2025 per the reuse audit) plus about 12 gap videos, in 2025 order. No 2025 Year 12 Physics route exists yet; build it (S7) before Term 3 2027.
2. This cohort arrives already knowing E = hf and photons, the EM spectrum, Huygens and diffraction, path-difference interference, the Doppler effect for light, E = V/d, W = qV and charges between plates, Coulomb's law, the fields of wires and solenoids, transmission loss and inward net force for turning. Year 12 designs that teach these as new must become recalls (S6).
3. It does not arrive knowing thermodynamics, kelvin, the light-year or nuclear notation (S7).
4. Year 11 aids should be the ones Year 12 reuses (S8), and the Year 11 course-end frame should name the Year 12 opener (S5).

## Appendix: site errors for `site-corrections-phys-y11.md` (not yet logged)

Exact quotes and suggested wording are in each design's "Site corrections" block. Lessons marked "live" were re-checked on 23 November.

| Site lesson | Design holding the rows | Errors (short) |
| --- | --- | --- |
| FA2 L10 | fa2-v13 | "accelerating charge" defined without change of direction; c stated as exactly 3.0 × 10⁸ m s⁻¹ |
| FA2 L11 | fa2-v14 | E = hf called the energy of a wave, not one photon; 300 nm UV said to ionise (4.1 eV); infrared and microwaves said to pass through the body (live) |
| FA2 L12 | fa2-v15 | "penetrating power increases with frequency" (false across the spectrum); high-energy waves "best for imaging" by penetration; infrared remotes explained by heat |
| FA2 L13 | fa2-v16, fa2-v17 | corrections 1 to 6 per design blocks |
| FA2 L14 | fa2-v18 | per design block; "← Previous" link without title |
| FA2 L15 | fa2-v19, fa2-v20 | "denser" for optical density; "larger the slow-down, the larger the bend" (live) |
| FA2 L16 | fa2-v21 | per design block |
| FA2 L17 | fa2-v22 | large critical angle said to make TIR "happen readily" (live); 71.4° should be 71.3° (live); "denser" for optical density |
| FA2 L18 | fa2-v23 | tilted normal in Q3; "improves reliability"; systematic-error example; navigation link |
| FA2 L19, L20 | fa2-v25, v26, v27, v28 | per design blocks |
| FA2 L21, L22, L24, L25 | fa2-v29, v30, v32, v33 | L25: "blueshift" for sound and "constant-and-high" pitch (live); dot point without its equation |
| FA3 L01 to L11 | fa3-v01 to v11 | per design blocks (fa3-v07: "pushes a test charge toward the negative plate" true only for a positive charge; "exactly the same strength" without the edge condition) |
| FA3 L13 | fa3-v13 | "barely warms up" needs "the same current" (live); collision rate does not depend on thickness (answer contradicts card 2); "more lattice" (live); crosswalk citation |
| FA3 L14 | fa3-v14 | curved V–I gradient called the resistance (misconception, match pair, answer placeholder; live) |
| FA3 L15 to L24 | fa3-v16 to v24 (v15, v23 suggestions only) | per design blocks |
| FA3 L25 | fa3-v27 (v25, v26 point here) | dot point misquoted as B = μ₀nI (live); width independence needs "long solenoid, away from the ends" |
| FA3 L26 | fa3-v28, v29 (v30 suggestion only) | three rows plus one new, beyond the one already logged |
