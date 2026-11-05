# Year 12 Physics M8 V06: Stellar mass and element production. How does stellar mass change the elements a star can make? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,305 characters, 18 scenes, about 558 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v05's final frame.

Scope: sixth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), the last for the inquiry question "What evidence is there for the origins of the elements?". Templates as `phys-y12-m8-v01.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants and AME2020 masses, published stellar-model values cited, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts, hashes checked against the live files):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson06.sa.html`, SHA256 `cf2a1403e34de2b647bcee7a61bcf57585eba0940b559d61d1e700ab707f9653` (matches the route; contents listed in `phys-y12-m8-v05.md`); sections used here `follow-the-two-mass-tracks`, `trace-where-the-elements-came-from`.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson07.sa.html`, SHA256 `dcc81fe381fc57ca14e7eb9fe34d8d11842f0ebbcc4cfcc71ac9e84f059a107d` (matches the route; contents listed in `phys-y12-m8-v05.md`); section used here `compare-the-s-and-r-processes`.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson10.sa.html`, SHA256 `8e32208b4f8e050c9d81f3562c0ef767e9f9da1fe483780da2d1ae9cc94524dc` (matches the route), read through `work/brief168/module8-lesson10.sa.txt`: orient and predict (SN 1987A neutrinos), follow the core-collapse sequence (photodisintegration, collapse, bounce, neutrino-driven explosion), compare the two progenitors (Type Ia), inside a neutron star, sort the remnants and limits, calculate and argue ("Analyse 7 marks" iron core, "Assess 6 marks" supernovae and Earth's composition), independent practice, retrieve and reflect.

Route entry: `phys-y12-m8-v06`, sections as above. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare main and post-main-sequence nucleosynthesis and iron limits, distinguish energy-releasing fusion from heavier-element production. Stop before treating every supernova detail as mandated." Next: "phys-y12-m8-v07: How did cathode rays and oil drops reveal the electron?" (designed in parallel by another designer; this design's "Final frame" is the agreed join).

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (the gold ring is shown alone on a plain ground, never worn; the 2017 observers are not drawn); nuclei, the binding curve, onion layers, the periodic table, reaction equations and calculation strips are coded, HSC style; real objects and sky objects are painted plates (the Sun, three star plates, a planetary nebula, a supernova remnant, a gold ring, the cathode ray tube), scaled uniformly, never stretched; published values cited (stage durations for a 25 M☉ star from Woosley and Janka 2005; GW170817 kilonova 2017); every number recalculated in Python with 1 u = 931.5 MeV/c² (data sheet) and AME2020 masses; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v05 (binding energy, the curve peaking near iron, hydrostatic balance, the pp chain and CNO cycle, nuclear equations with A and Z), v04 (HR regions: giants up and right, white dwarfs bottom left), v01 (Big Bang hydrogen and helium), m7-v16 (E = mc²), Year 11 (beta decay: a neutron becomes a proton and an electron).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ1-07`), quoted from the route JSON `syllabusActions` and the ledger:

- `P8-IQ1-07`: "investigate the types of nucleosynthesis reactions involved in Main Sequence and Post-Main Sequence stars, including but not limited to:" "proton–proton chain", "CNO (carbon-nitrogen-oxygen) cycle"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v05's final frame (the binding curve with dashed "?" arrows from ⁴He towards ⁵⁶Fe; the Sun and a massive star, "how far up?"). Teaches: what happens when core hydrogen runs out (core contraction and heating, shell burning, red giant); helium burning (about 10⁸ K; triple alpha, 3 ⁴He → ¹²C; ¹²C + ⁴He → ¹⁶O); the pattern (each exhausted fuel leads to contraction, heating and a heavier fuel; heavier nuclei need hotter cores; mass sets the core temperature); the Sun-like ending (no carbon burning; planetary nebula; carbon-oxygen white dwarf); the massive-star sequence (carbon, neon, oxygen, silicon burning to iron; onion layers; ever shorter stages, 25 M☉ values); the iron limit (peak of the curve; no energy-releasing fuel; core collapse in under a second to a city-sized ball; supernova); elements beyond iron by neutron capture and beta decay (⁵⁸Fe → ⁵⁹Fe → ⁵⁹Co), the slow process in giants and the rapid process in neutron-star collisions (GW170817); energy-releasing fusion against element-making neutron capture; dispersal and the origin of each element group. Stops before detailed mass thresholds, the Chandrasekhar and neutron-star mass limits, degeneracy pressure, Type Ia mechanisms, photodisintegration and core-bounce detail, pulsars and neutrino energetics (route stop and site lesson 6 "beyond the syllabus").

## Decisions

- **Learner question (route wording kept).** "How does stellar mass change the elements a star can make?" The answer: a star climbs the binding curve one fuel at a time, each needing a hotter core (2 to 4); mass sets how hot the core can get, so a Sun-like star stops at carbon and oxygen (5) while a massive star reaches iron (6); iron is the peak, so fusion stops releasing energy and the core collapses (7); heavier elements need neutron capture, mostly in extreme events (8, 9), which makes small amounts but releases no useful energy for the star (10).
- **Hook (v05's handoff; site lesson 6 predict "Can the Sun ever produce elements heavier than helium?").** 3 s prediction chips: "the Sun-like star", "the massive star", "both the same". Answer: the massive star. A painted gold ring (alone, no hand) raises "even heavier".
- **After hydrogen (site `follow-the-two-mass-tracks`; lesson 6 "Analyse 7 marks" steps 3 and 4).** Fuel out → pressure down → contraction → heating (gravitational potential energy to thermal energy); hydrogen shell burning; envelope expands and cools: red giant (v04's region recalled).
- **Helium burning (site "triple-alpha process: 3 ⁴He → ¹²C + γ (7.27 MeV)"; "alpha capture").** About 10⁸ K because helium's charge is 2 (v05's Coulomb argument recalled); "alpha particle" named for helium-4 (Year 11); ¹²C + ⁴He → ¹⁶O (site note 17's correction applied: carbon captures helium, it does not "fuse to oxygen").
- **The pattern (lesson 6 "Analyse 7 marks" step 5; site "only a sufficiently massive star reaches the temperatures").** Stated as a rule before the two tracks. Why mass sets temperature: stronger gravity squeezes harder. For a Sun-like star the core stops contracting before carbon ignition (electron degeneracy, author note a; not named, route stop).
- **Sun-like track (site lesson 6 "For low-mass stars").** No carbon burning (about 6 × 10⁸ K needed); planetary nebula (name explained: nothing to do with planets) returns helium, carbon and nitrogen; carbon-oxygen white dwarf (v04's bottom-left region). No mass thresholds in narration; "a star like the Sun" and "more than about eight times the Sun's mass" (site) only.
- **Massive track (site "Progressive core burning: H → He → C → O → Ne → Mg → Si"; site MC answer "H → He → C → O → Si → Fe").** Burning stages carbon, neon, oxygen, silicon, with approximate ignition temperatures (author note b); ash shells (onion layers: H, He, C, O/Ne, Si, Fe from outside in); stage durations for a 25 M☉ star (hydrogen about 7 million years; helium about 500 000 years; carbon about 600 years; neon about 1 year; oxygen about 6 months; silicon about 1 day; Woosley and Janka 2005). Narration quotes hydrogen and silicon only.
- **Iron limit (lesson 10 "Analyse 7 marks"; route "iron limits").** Iron at the peak (v05's curve; "near iron" as the kit's caution); fusing beyond it takes in energy; no fuel can release energy; the core keeps radiating, pressure falls, collapse in under a second to a city-sized ball of neutrons (site "roughly Earth's size to ~10 km"; screen radius 10 to 15 km); rebound and neutrinos expel the outer layers: a core-collapse supernova (one sentence; photodisintegration, bounce physics and the neutron-star limit are not taught: route stop). The painted supernova remnant is labelled "illustrative" (kit `ph-stellar-outcomes` guidance).
- **Neutron capture (site lesson 7 `compare-the-s-and-r-processes`; lesson 7 "Account 6 marks" steps 2 and 3).** Neutrons have no charge, so no repulsion; capture then beta decay raises Z by one. Worked chain with real nuclides: ⁵⁸Fe + n → ⁵⁹Fe; ⁵⁹Fe → ⁵⁹Co + e⁻ + antineutrino (half-life 44.5 days; author note c), with A and Z tallies (v05's kit).
- **Slow and rapid processes (site lesson 7).** Slow: in old giant stars (asymptotic giant branch stars, named on screen only), time to decay between captures, strontium, barium, lead. Rapid: many captures before decay, in neutron-star collisions (GW170817, 2017: kilonova with freshly made heavy elements, strontium identified; author note d) and possibly some supernovae (screen tag); gold, platinum, uranium. No neutron-capture rates in narration (author note e).
- **Energy-releasing against element-making (route stop "distinguish energy-releasing fusion from heavier-element production").** Fusion up to iron powers the star; neutron capture beyond iron makes small amounts as a by-product and cannot power a star; heavy elements are rare. The site's "requires an external supply of energy" is reworded (site note 21).
- **Origins (site lesson 6 `trace-where-the-elements-came-from`, lesson 10 "Assess 6 marks").** Coded periodic table coloured by main source: Big Bang (H, most He, some Li); Sun-like and intermediate stars shedding layers (C, N, the slow process heavy elements); massive stars and supernovae (O to Fe; Type Ia supernovae also make much iron, tag only); neutron-star collisions (rapid process heavy elements). Oxygen is assigned to massive stars, not low-mass stars (site note 22). Dispersal by winds, planetary nebulae and supernovae, then new stars, planets and "you" (narration only; no people drawn).
- **Memory aid (scene 12, new): "Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add neutrons."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): the energy released by the triple alpha process with atomic masses: 0.007809 u, 7.27 MeV. Crossed: subtracting the wrong way and concluding energy is absorbed. A2 (3 marks, explain): why a 20 M☉ star can make iron in its core and a 1 M☉ star cannot. Crossed: "the massive star has more fuel, so it burns for longer and gets further".
- **Significant figures.** Masses as given (six decimal places); energies to three figures; temperatures and durations to one figure ("about").
- **Handoff (route next, v07 written in parallel).** Every atom these stars make is a nucleus with electrons; electrons were unknown until the 1890s, when glowing glass tubes gave the first clue. "Next: how did cathode rays and oil drops reveal the electron?". See "Final frame" (exact description for the v07 designer).
- **Colour key (as v05):** protons rose, neutrons grey, electrons navy, antineutrinos small grey "ν̄", helium-4 nuclei two rose and two grey; heavier nuclei larger labelled discs; onion layers in graded warm tones with labels; gravity arrows navy, pressure arrows amber; periodic table cells coloured by source (Big Bang pale blue, Sun-like stars green, massive stars and supernovae amber, neutron-star collisions purple), with a legend so colour is never the only cue.
- **Site sources used:** lesson 6: predict (Sun's fate; heavier than helium?) (1); `follow-the-two-mass-tracks` (core contracts and heats; shell burning; red giant; triple alpha at 10⁸ K, 7.27 MeV; planetary nebula; white dwarf; progressive burning to an iron core; iron absorbs energy; collapse; supernova) (2 to 7); `trace-where-the-elements-came-from` (element sources; r-process; GW170817) (9, 11); misconceptions (supernova is not overheating; the Sun will not become a neutron star) (5, 7); "Analyse 7 marks" (fuel out, pressure down, contraction, hotter core, mass decides) (2, 4). Lesson 7: `compare-the-s-and-r-processes` (capture plus beta decay; s-process in AGB stars; r-process; GW170817 kilonova) (8, 9); "Account 6 marks" (constraint, neutrons avoid repulsion, capture then beta decay, sites, dispersal) (8 to 10). Lesson 10: `follow-the-core-collapse-sequence` (collapse in under a second, about 10 km, neutrinos, ejection) (7); "Analyse 7 marks" (equilibrium, shells, binding peak, energy balance, unopposed collapse) (6, 7); "Assess 6 marks" (production and dispersal; C, N, O made in normal stellar lives) (10, 11). Not used: Chandrasekhar and TOV limits, degeneracy pressure, Type Ia mechanism, neutron-star density and pulsar calculations, photodisintegration and neutrino energetics (route stop; site extension).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing after v05's note 20; v05's note 17 on "carbon may fuse to oxygen" also applies here):**
  21. Energy of neutron capture (lesson 7 "Account 6 marks" step 2): "Forming them requires an external supply of energy and an environment rich in free neutrons". Neutron capture itself releases energy (several MeV per capture); what is scarce is a large supply of free neutrons, and building nuclei beyond the iron peak gives no net energy to support a star. Suggest "requires an environment rich in free neutrons, and releases no net energy that could support a star".
  22. Oxygen's origin (lesson 6 `trace-where-the-elements-came-from`; lesson 7 HSC tip): "Carbon, oxygen, nitrogen: Helium and carbon burning in low- and intermediate-mass stars" and "C, O from low-mass stellar cores". Low- and intermediate-mass stars lock most of their oxygen in white dwarfs; most of the oxygen in the Universe was released by massive stars in core-collapse supernovae. Carbon and nitrogen are largely from low- and intermediate-mass stars. Suggest moving oxygen to "massive stars".
  23. Timing (lesson 6 `trace-where-the-elements-came-from`): "Hydrogen and most helium: Big Bang nucleosynthesis (first 3 minutes)"; see v01's site note 1 (fusion ran to about 20 minutes).
  24. Mass limits presented as fixed (lesson 6 HSC tip "Memorise the mass thresholds" and lesson 10 "neutron star (if < 3 M☉)"): the site's own depth notes call these extension and model dependent, and the maximum neutron-star mass is now estimated at about 2.2 to 2.3 M☉. Suggest "about 2 to 3 M☉ (model dependent)" and removing "memorise".
  25. Checked and correct: triple alpha 7.27 MeV; 10⁸ K helium ignition; silicon burning at about 3 × 10⁹ K to iron-group nuclei; collapse in under a second; 99% of energy as neutrinos; GW170817 as an r-process site; Fe-56 peak for HSC with the Ni-62 note.
- **Cause chain taught, in order:** (1) when core hydrogen runs out, pressure falls and the core contracts and heats, while the envelope swells (red giant) (2); (2) at about 10⁸ K helium fuses to carbon and oxygen (3); (3) each later fuel has more protons and needs a hotter core, and only a more massive star's gravity can squeeze its core that hot (4); (4) so a Sun-like star stops at carbon and oxygen and leaves a white dwarf (5), while a massive star climbs to iron in ever shorter stages (6); (5) iron is the peak, so no fusion can release energy, the core collapses and the star explodes (7); (6) beyond iron, neutrons (uncharged) are captured and beta decay raises the element (8), slowly in giants, rapidly in neutron-star collisions (9); (7) that makes heavy elements in small amounts without powering the star, and the dying stars spread everything into space (10, 11).
- **Entry knowledge (route `entryKnowledge`):** v05 (binding curve, hydrostatic balance, nuclear equations); v04 (HR regions); v01 (Big Bang elements); Year 11 (beta decay, nuclear notation).
- **Learner-visible vocabulary (plain meaning at first use):** shell burning (fusion in a layer around the core, 2); red giant (recalled, 2); alpha particle (a helium-4 nucleus, 3); triple alpha process (3); planetary nebula (a glowing shell of gas a dying Sun-like star throws off; nothing to do with planets, 5); white dwarf (recalled, 5); supernova (the explosion of a massive star after its core collapses, 7); neutron capture (a nucleus absorbing a free neutron, 8); beta decay (recalled: a neutron turning into a proton and giving out an electron, 8); slow process, rapid process (9).
- **Legacy logic ported:** none. Explainer families reused: `m8-stellar-evolution` (src/explainer/physics/module8: "Distinguish a Sun-like path from a massive-star core-collapse path"), within its limits ("No universal remnant mass boundary"; "No Type Ia mechanism"); `m8-nucleosynthesis` (binding and element origins), within its limits ("Iron-group maximum"; "Neutron capture is not shown step by step; no claim all supernovae provide the main r-process"): this design adds the step-by-step capture chain with real nuclides and keeps "possibly some supernovae" as a tag.
- **New explainer motion:** **core contraction and envelope swell** (a core shrinking and brightening while the outer layer balloons and reddens, linked to an HR thumbnail point moving up and right); **triple alpha** (three ⁴He discs merging into ¹²C, then ¹²C + ⁴He → ¹⁶O); **core temperature ladder** (a vertical scale with ignition marks for H, He, C, Ne, O, Si and two "reach" bars, one stopping below carbon for the Sun-like star, one reaching silicon for the massive star); **onion layers** (concentric shells filling from the centre as each stage completes, with a stage-duration clock that speeds up); **binding-curve stop** (v05's curve with a red barrier at the peak and an arrow bending downwards beyond it, "takes in energy"); **core collapse** (a city-scale bracket as the iron core shrinks in a fraction of a second, outer layers rebounding outwards); **neutron capture chain** (a nuclide strip on an N-Z grid: capture moves right, beta decay moves diagonally up-left, with A and Z tallies); **periodic table by source** (cells fill colour by source, with legend); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the binding curve as a thumbnail at the top right from scene 2 to scene 9, gaining a solid arrow for each stage reached; the star or process in the centre; equations at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) In stars below about 8 M☉ (initial mass, model dependent) the carbon-oxygen core becomes supported by electron degeneracy pressure before reaching carbon ignition (about 6 × 10⁸ K), so contraction stops heating it. The narration's "its core never gets hot enough" is the observable consequence; degeneracy is extension (site lesson 6 "beyond the syllabus").
  (b) Approximate central ignition temperatures: hydrogen 1 to 3 × 10⁷ K; helium 1 to 2 × 10⁸ K; carbon 6 to 8 × 10⁸ K; neon 1.2 to 1.5 × 10⁹ K; oxygen 1.5 to 2.2 × 10⁹ K; silicon 2.7 to 3.5 × 10⁹ K. Silicon burning makes iron-group nuclei, mostly nickel-56, which decays to iron-56; "making iron" is the HSC simplification. Durations for 25 M☉ (Woosley and Janka 2005, Nature Physics): H 7 × 10⁶ yr, He 5 × 10⁵ yr, C 600 yr, Ne 1 yr, O 6 months, Si 1 day.
  (c) ⁵⁸Fe is stable (0.28% of natural iron); ⁵⁹Fe beta-decays to stable ⁵⁹Co with a half-life of 44.5 days. A classic first step beyond iron in s-process chains (iron-group seeds). The full equations: ⁵⁸₂₆Fe + ¹₀n → ⁵⁹₂₆Fe; ⁵⁹₂₆Fe → ⁵⁹₂₇Co + ⁰₋₁e + ν̄.
  (d) GW170817 (17 August 2017; LIGO and Virgo, about 40 Mpc, about 130 million ly): kilonova AT2017gfo showed lanthanide-rich ejecta in its light curve; strontium was identified spectroscopically (Watson et al. 2019). Whether core-collapse supernovae contribute significantly to the r-process is debated; the screen tag says "possibly some supernovae".
  (e) Slow process: neutron densities of about 10⁷ to 10⁸ cm⁻³ in AGB stars give capture intervals of years to thousands of years, longer than most beta-decay half-lives. Rapid process: neutron densities above 10²⁰ cm⁻³, captures in milliseconds. The narration gives no rates.
  (f) Iron in the Solar System comes roughly half from Type Ia supernovae (white dwarf explosions) and half from core-collapse supernovae; the periodic table's iron cell shows the amber "massive stars and supernovae" colour with a tag "also white-dwarf supernovae (Type Ia)".
  (g) Gold-197: 79 protons, 118 neutrons, 79 electrons in the neutral atom (scene 8 only; the final frame shows no structure, so it does not pre-empt v08's nucleus).
  (h) Pronunciations: "triple alpha"; "neon"; "kilonova" not narrated; "cathode" as "cath-ode".
- **Open decisions for root:**
  - **1. Final-frame agreement with v07 (root).** v07 (written in parallel, read 6 Nov after this design) assumes v06 ends on an element strip and "a single plain grey atom (a circle, no internal structure)". This final frame was set to match: a periodic-table strip along the top and a plain grey gold atom, with the cathode ray tube plate (beam off) added at the right. Root to confirm v07 keeps or ignores the tube.
  - **2. Mass numbers in narration (root).** Only "more than about eight times the Sun's mass" (site) and the 25 M☉ durations are given; no remnant mass limits (route stop). Confirm.
  - **3. New plates (Codex):** `y12p-gold-ring-v1`, `y12p-planetary-nebula-v1`, `y12p-supernova-remnant-v1`. Fallbacks: a coded ring outline; coded gas shells. `y12p-crt-tube-v1` (requested by m6-v02) must exist for the final frame; fallback a coded tube outline (agree with v07).
  - **4. Site notes 21 to 24** for the site log.

Main question: *The Sun will never make iron, and no star can fuse gold. So how does a star's mass decide which elements it makes, and where did the rest come from?*
Entry knowledge: binding curve and fusion (v05); HR regions (v04); Big Bang elements (v01); beta decay (Year 11).
Stops after: the two mass tracks, the iron limit, neutron capture (slow and rapid), the energy distinction and element origins. No mass limits or supernova mechanisms beyond one sentence.
Handoff: v07, how cathode rays and oil drops revealed the electron.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *A*, *Z*, *T*, *Δm*, *u*.

### 1. hook (which star climbs higher?)
> When a star's core hydrogen runs out, can it keep climbing the curve? Here's a star like the Sun, and one twenty-five times more massive. Which one can make heavier elements? Make your **prediction**. The massive one, by far. And the gold in a ring needs something more extreme still. So how does stellar mass change the elements a star can **make**?

Visual: opens on v05's final frame (see "Opening frame"). On "can it keep climbing the curve" the dashed "?" arrows on the binding curve pulse. On "one twenty-five times more massive" the hot-blue star plate tag "25 M☉"; the Sun's tag "1 M☉". On "prediction" a 3 s `Countdown` beside chips "the Sun-like star", "the massive star", "both the same". On "The massive one, by far" the "the massive star" chip ticks; a reach bar grows beside each star, the massive star's much higher. On "the gold in a ring" the painted gold ring `y12p-gold-ring-v1.png` (alone on paper, no hand) appears at the right, a tag "Au: beyond iron" past the curve's peak. On "make" the chip becomes the heading: "How does stellar mass change the elements a star can make?"; the binding curve shrinks to a thumbnail at the top right.

### 2. when the hydrogen runs out
> Start when the core's hydrogen runs out. Fusion in the core stops, so the core's pressure drops, and gravity squeezes it smaller. Squeezing turns gravitational potential energy into heat, so the core gets **hotter**. Hydrogen keeps fusing in a shell around the core, and the extra energy pushes the outer layers out. They swell and cool, and the star becomes a red **giant**, up and to the right on the HR diagram.

Visual: board change: a coded cross-section of a Sun-like star, core filled with ⁴He discs. On "Fusion in the core stops" the amber core glow fades; amber pressure arrows shorten, navy gravity arrows stay. On "gravity squeezes it smaller" the core shrinks. On "hotter" the core temperature readout climbs "1.5 × 10⁷ K → 10⁸ K". On "in a shell around the core" a thin amber ring lights around the core, tag "shell burning". On "They swell and cool" the outer layer balloons and reddens, becoming the painted cool-red star `y12p-star-cool-red-v1.png` (scaled up uniformly). On "giant" an HR thumbnail beside it: a point moves from the main sequence up and to the right (v04 recall).

### 3. burning helium
> When the core reaches about a hundred million kelvin, helium can fuse. Helium nuclei have two protons each, so they repel more strongly than protons, and that's why it takes a much hotter core. Three helium four nuclei join to make carbon twelve. It's called the triple alpha process, because a helium four nucleus is also an alpha **particle**. Some carbon then captures another helium nucleus, making oxygen sixteen. So the core fills with carbon and **oxygen**.

Visual: board change: inside the core. On "about a hundred million kelvin" the readout "≈ 10⁸ K: helium ignites". On "they repel more strongly than protons" two ⁴He discs approaching with longer repulsion arrows than v05's protons, tag "charge +2 each". On "Three helium four nuclei join to make carbon twelve" three ⁴He discs merge, equation "3 ⁴₂He → ¹²₆C + γ", A and Z tallies ticking. On "particle" tag "alpha particle = helium-4 nucleus". On "making oxygen sixteen" "¹²₆C + ⁴₂He → ¹⁶₈O + γ". On "oxygen" the core fills with C and O discs; the binding-curve thumbnail gains a solid arrow ⁴He → ¹²C → ¹⁶O.

### 4. the pattern
> There's a pattern. Each time a fuel runs out, the core contracts and heats, until the next, heavier fuel can fuse. Heavier nuclei have more protons, so each new stage needs a hotter core. How hot can a core get? That depends on mass. More mass means stronger gravity, which squeezes the core harder and makes it **hotter**. So a star's mass decides how far up the curve it can **climb**.

Visual: board change to the core temperature ladder: a vertical scale with marks "H ~10⁷ K", "He ~10⁸ K", "C ~6 × 10⁸ K", "Ne ~1.2 × 10⁹ K", "O ~1.5 × 10⁹ K", "Si ~3 × 10⁹ K". On "Each time a fuel runs out, the core contracts and heats" a looping cycle diagram "fuel out → contract → heat → next fuel". On "each new stage needs a hotter core" each mark lights in turn with its nucleus's charge "+1, +2, +6, +10, +8, +14" beside it. On "hotter" two reach bars rise: "1 M☉" stopping between He and C; "25 M☉" reaching Si. On "climb" the binding-curve thumbnail shows two coloured arrow lengths along the curve, short (Sun-like) and long (massive).

### 5. a star like the Sun
> For a star like the Sun, the climb stops at carbon and oxygen. Its core never gets hot enough, about six hundred million kelvin, to fuse carbon. Its outer layers drift away as a glowing shell of gas, a planetary nebula, though it's nothing to do with planets. That gas carries helium, carbon and nitrogen back into space. The hot core left behind is a white dwarf, mostly carbon and oxygen, slowly cooling for billions of **years**.

Visual: board change: the Sun-like track (the `m8-stellar-evolution` family's left branch). On "the climb stops at carbon and oxygen" the "1 M☉" reach bar with a stop mark below "C ~6 × 10⁸ K". On "a planetary nebula" the painted planetary nebula `y12p-planetary-nebula-v1.png` with a small hot dot at its centre, tag "illustrative". On "helium, carbon and nitrogen back into space" small He, C and N discs drift outwards. On "a white dwarf, mostly carbon and oxygen" the central dot enlarges into a small coded white disc "C + O white dwarf"; the HR thumbnail point moves down to the bottom left. On "years" tag "cools slowly; no more fusion".

### 6. a massive star climbs to iron
> A star more than about eight times the Sun's mass keeps going. Carbon fuses at about six hundred million kelvin, then neon, then oxygen at about one and a half billion, and finally silicon at about three billion kelvin, making **iron**. Each stage leaves its ash in a shell, so the star ends up layered like an onion, hydrogen outside, iron at the centre. And each stage is faster than the last. For a star of twenty-five solar masses, hydrogen lasts about seven million years, but silicon lasts about a **day**.

Visual: board change: the massive track (right branch): a coded cross-section of a supergiant. On "Carbon fuses" the ladder's C mark lights; on "then neon, then oxygen" Ne and O light; on "iron" Si lights and the centre fills with grey-red "Fe" discs. On "layered like an onion" concentric shells label from outside in: "H", "He", "C", "O, Ne", "Si", "Fe core". On "each stage is faster than the last" a stage clock beside the onion: "H: 7 million yr", "He: 500 000 yr", "C: 600 yr", "Ne: 1 yr", "O: 6 months", "Si: 1 day" (25 M☉, Woosley and Janka 2005), each line flashing faster. On "day" the binding-curve thumbnail's long arrow reaches the peak at ⁵⁶Fe.

### 7. iron says stop
> Why stop at iron? Look at the curve. Iron is at the peak, the most tightly bound nuclei there are. Fusing iron into anything heavier would move down the curve, so it would take in energy instead of giving it out. The core has no fuel left that can **release** energy. It keeps losing energy, its pressure falls, and gravity wins. In less than a second, the iron core collapses into a ball of neutrons about the size of a **city**. The rebound and a flood of neutrinos blast the outer layers away, in a **supernova**.

Visual: board change: the binding curve full width. On "Iron is at the peak" the peak label "near iron (⁵⁶Fe: 8.8 MeV)". On "would move down the curve" an arrow beyond the peak bending downwards, red, tag "takes in energy". On "release" a red barrier at the peak, chip "no energy-releasing fuel left". On "its pressure falls, and gravity wins" the onion returns small; amber pressure arrows vanish, navy gravity arrows lengthen. On "city" the Fe core shrinks in a fraction of a second, a bracket "radius ≈ 10 to 15 km", tag "< 1 s". On "supernova" the outer layers rebound outwards and the painted supernova remnant `y12p-supernova-remnant-v1.png` fills the frame behind, tag "core-collapse supernova (illustrative)"; small grey "ν" dots stream out, tag "about 99% of the energy leaves as neutrinos".

### 8. beyond iron: add neutrons
> So how do elements heavier than iron form? Not by fusion. They're built by neutron capture. A neutron has no charge, so it isn't repelled, and a nucleus can simply absorb it. Iron fifty-eight absorbs a neutron and becomes iron fifty-nine. That's unstable, so a neutron inside it turns into a proton, giving out an **electron**. The nucleus is now cobalt fifty-nine, one element **higher**. Repeat, and you climb the periodic **table**.

Visual: board change to the neutron capture chain on a small grid (x "neutrons N", y "protons Z"). On "A neutron has no charge, so it isn't repelled" a grey "n" disc drifts into a large Fe disc with no repulsion arrow (contrast tag "p: repelled"). On "Iron fifty-eight absorbs a neutron and becomes iron fifty-nine" "⁵⁸₂₆Fe + ¹₀n → ⁵⁹₂₆Fe", A and Z tallies ticking; the grid point steps right. On "electron" "⁵⁹₂₆Fe → ⁵⁹₂₇Co + ⁰₋₁e + ν̄" (beta decay, Year 11), tallies ticking; the grid point steps diagonally up-left. On "higher" tag "Z: 26 → 27, iron → cobalt". On "table" the steps repeat quickly up a staircase of points towards "Z = 79: gold".

### 9. slow and rapid
> There are two speeds. In the slow process, inside old giant stars, nuclei capture neutrons one at a time, with time to decay in between. That makes elements like strontium, barium and **lead**. In the rapid process, neutrons arrive so fast that nuclei swallow many before they can decay. That needs the most extreme events, like two neutron stars colliding, and it makes gold, platinum and **uranium**. In twenty seventeen, astronomers detected exactly that kind of collision, and saw the glow of freshly made heavy **elements**.

Visual: the grid splits into two paths. On "nuclei capture neutrons one at a time, with time to decay in between" a staircase hugging the stable nuclei, tag "slow process (s-process): old giant stars (AGB)". On "lead" end labels "Sr, Ba, Pb". On "nuclei swallow many before they can decay" a path shooting far right, then decaying diagonally back, tag "rapid process (r-process)". On "two neutron stars colliding" two small coded dense discs spiral together, tag "neutron-star collision (possibly some supernovae too)". On "uranium" end labels "Au, Pt, U". On "elements" tag "2017: gravitational waves from a neutron-star collision (GW170817); its glow showed new heavy elements (strontium identified)".

### 10. making energy against making elements
> Notice the difference. Fusion up to iron releases energy, and that energy holds a star up and makes it shine. Neutron capture beyond iron makes only small amounts of heavy elements, as a by-product, and it can't keep a star **going**. That's one reason gold is so rare. And the winds and explosions that end a star's life spread all these elements into space, where they're built into new stars, planets, and **you**.

Visual: board change: a two-column panel. On "Fusion up to iron releases energy" left column "fusion (H → Fe): releases energy, powers the star" with the curve's climbing arrow. On "going" right column "neutron capture (beyond Fe): makes heavy elements, small amounts, no power for the star". On "gold is so rare" the gold ring plate small, tag "rare: made only in extreme events". On "spread all these elements into space" the planetary nebula and supernova remnant plates small, coloured discs drifting from both into a coded gas cloud. On "you" the cloud condenses into a small coded new star with a planet dot, tag "next generation: stars and planets".

### 11. where every element came from
> Put it on the periodic table. Hydrogen and most helium came from the Big Bang. Carbon and nitrogen mostly came from Sun-like stars, and stars a few times bigger, as they shed their outer **layers**. Oxygen up to iron mostly came from massive stars and their explosions. And beyond iron, from slow neutron capture in giants, and rapid neutron capture in neutron star **collisions**.

Visual: board change to the coded periodic table, cells grey. On "Hydrogen and most helium came from the Big Bang" H and He fill pale blue, legend "Big Bang (v01)". On "layers" C and N fill green, legend "Sun-like and intermediate stars". On "Oxygen up to iron" O through Fe fill amber, legend "massive stars and supernovae", small tag on Fe "also white-dwarf supernovae". On "slow neutron capture in giants" Sr, Ba, Pb and neighbours fill green-striped, legend "slow process: giants". On "collisions" Au, Pt, U and neighbours fill purple, legend "rapid process: neutron-star collisions".

### 12. a way to remember
> Here's a way to remember it. Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add **neutrons**.

Visual: the temperature ladder and curve thumbnail small. On "Heavier star, hotter core, heavier elements" the two reach bars; on "until iron says stop" the red barrier at the peak; on "neutrons" a grey "n" joins a nucleus and the handwritten line writes large: "Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add neutrons." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. In the triple alpha process, three helium four nuclei fuse to form carbon twelve. Using the atomic masses given, calculate the energy released, in MeV. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In the triple alpha process, 3 ⁴₂He → ¹²₆C. Atomic masses: ⁴He 4.002603 u, ¹²C 12.000000 u. Calculate the energy released, in MeV. (3 marks)" Data chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Three helium fours have a mass of twelve point zero zero seven eight zero nine u. Take away the carbon's twelve, and the mass lost is zero point zero zero seven eight zero nine **u**. Times nine three one point five, that's about seven point two seven **MeV**. The slip is subtracting the wrong way round, and deciding energy is **absorbed**.

Visual: card shrinks to the top; the two masses underline. On "u" (second) "Δm = 3(4.002603) − 12.000000 = 12.007809 − 12.000000 = 0.007809 u". On "MeV" "E = 0.007809 × 931.5 ≈ 7.27 MeV" (boxed). On "absorbed" a chip "Δm = 12.000000 − 12.007809 = −0.0078 u: energy absorbed" fades in and is crossed (caption "Δm = reactants − products"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why a star of twenty solar masses can produce iron in its core, but a star of one solar mass can't. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why a star of 20 solar masses can produce iron in its core, but a star of 1 solar mass cannot. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Each heavier fuel needs a hotter core, because heavier nuclei repel more. The more massive star's stronger gravity squeezes its core to about three billion kelvin, hot enough for silicon to fuse into **iron**. The Sun's core never gets hot enough to fuse carbon, so it stops at carbon and **oxygen**. The slip is saying the massive star has more fuel, so it burns for longer. It actually burns much **faster**.

Visual: card shrinks to the top; "20 solar masses" and "1 solar mass" underline. On "iron" the ladder: "20 M☉: stronger gravity → core ≈ 3 × 10⁹ K → Si → Fe". On "oxygen" "1 M☉: core never reaches ~6 × 10⁸ K → stops at C and O". On "faster" a chip "more fuel, so it burns for longer and gets further" fades in and is crossed (caption "massive stars burn faster: millions, not billions, of years"). Hold about 1 second.

### 17. handoff
> So stars of different masses forged everything from carbon to gold. And every one of those atoms has electrons inside it. But until the end of the eighteen hundreds, nobody knew electrons existed. The first clue came from glowing glass tubes. So how did cathode rays and oil drops reveal the **electron**?

Visual: board clears (camera change). On "everything from carbon to gold" the coloured periodic table shrinks to a strip along the top. On "every one of those atoms has electrons inside it" the gold cell of the strip lifts out and grows into a single plain grey atom at the left (a circle with no internal structure drawn), labelled "Au (gold)", tag "electrons inside?". On "nobody knew electrons existed" the tag becomes "electrons inside? (unknown before 1897)". On "glowing glass tubes" the painted cathode ray tube `y12p-crt-tube-v1.png` (scaled uniformly) appears at the right, its beam off, tag "1890s: cathode rays". On "electron" the chip "Next: how did cathode rays and oil drops reveal the electron?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. When core hydrogen runs out: pressure falls, the core contracts and heats, hydrogen burns in a shell, and the envelope swells and cools (red giant).
2. Helium burning (~10⁸ K): 3 ⁴He → ¹²C (triple alpha, 7.27 MeV); ¹²C + ⁴He → ¹⁶O. Each heavier fuel needs a hotter core; more mass means a hotter core.
3. Sun-like star: stops at C and O → planetary nebula + C-O white dwarf. Massive star (> about 8 M☉): C, Ne, O, Si burning → iron core, onion layers, ever shorter stages.
4. Iron is at the peak of binding energy per nucleon: fusing it would absorb energy, so the core collapses (< 1 s) → supernova.
5. Beyond iron: neutron capture + beta decay (Z rises by 1). Slow process in giants (Sr, Ba, Pb); rapid process in neutron-star collisions (Au, Pt, U). Fusion to iron powers stars; neutron capture only makes elements.

Memory aid (large, on the notes screen): *Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add neutrons.*

## Teaching checks

- **Does it explain causes?** Why the core heats when fuel runs out: contraction converts gravitational potential energy (2). Why helium and later fuels need hotter cores: more charge, more repulsion (3, 4). Why mass decides: gravity sets the core temperature (4, 16). Why iron ends fusion: it is at the peak, so fusion beyond it absorbs energy (7). Why neutrons build heavy elements: no charge, no repulsion; beta decay raises Z (8). Why gold is rare: only extreme events (9, 10).
- **Misconceptions addressed:** a supernova is a star simply overheating (7: collapse after fuel runs out); the Sun becomes a supernova (5); stars fuse iron into gold (8, 10); massive stars live longer because of more fuel (16 crossed); subtracting masses the wrong way (14 crossed); all elements from the Big Bang (11).
- **One idea at a time:** after hydrogen (2), helium (3), pattern (4), Sun-like end (5), massive climb (6), iron limit (7), capture (8), slow and rapid (9), energy distinction (10), origins (11).
- **Video makes it easier:** the HR point moving up and right as the star swells (2); the temperature ladder with two reach bars (4); the onion filling with a speeding stage clock (6); the red barrier and downward arrow at the peak (7); the capture staircase on the N-Z grid (8, 9); the periodic table filling by source (11).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 30 s.
- **Avoided double teaching:** binding energy, the curve and the main-sequence reactions (v05), HR regions (v04), Big Bang elements (v01), beta decay (Year 11) recalled in a clause.
- **Syllabus coverage:** `P8-IQ1-07` (post-main-sequence part): helium burning (triple alpha), carbon to silicon burning in massive stars, the iron limit, and neutron capture (slow and rapid) beyond iron (2 to 11, 13 to 16); compared with main-sequence reactions (v05) through the pattern and the energy distinction (4, 10).
- **Out of scope by design:** mass thresholds for remnants, Chandrasekhar and neutron-star limits, degeneracy pressure, Type Ia mechanism, photodisintegration and bounce detail, pulsars, neutron-star density calculations (route stop; site extension; author notes a, f).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In the triple alpha process, 3 ⁴₂He → ¹²₆C. Atomic masses: ⁴He 4.002603 u, ¹²C 12.000000 u. Calculate the energy released, in MeV. (1 u = 931.5 MeV/c²)"
Model answer: Mass of reactants = 3 × 4.002603 = 12.007809 u. Mass of products = 12.000000 u. Δm = 12.007809 − 12.000000 = 0.007809 u. E = 0.007809 × 931.5 = 7.27 MeV. Classic mistake (crossed): Δm = 12.000000 − 12.007809 = −0.0078 u, "energy is absorbed".

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Explain why a star of 20 solar masses can produce iron in its core, but a star of 1 solar mass cannot."
Model answer: Each successive fusion stage (helium, carbon, neon, oxygen, silicon) involves nuclei with more protons, so their repulsion is greater and a higher core temperature is needed. When a fuel is exhausted the core contracts under gravity and heats up; a more massive star has stronger gravity, so its core can reach the roughly 3 × 10⁹ K needed for silicon burning, which produces iron. A 1 solar mass star's core never reaches the temperature needed to fuse carbon (about 6 × 10⁸ K), so its fusion stops at carbon and oxygen, and it ends as a carbon-oxygen white dwarf. Classic mistake (crossed): "the massive star has more fuel, so it burns for longer and gets further" (massive stars burn their fuel much faster).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | 1 u = 931.5 MeV/c² | 13, 14 |
| Atomic masses (AME2020) | ⁴He 4.002603; ¹²C 12.000000; ¹⁶O 15.994915 u | 3, 13, 14 |
| Triple alpha | 3 × 4.002603 = 12.007809 u; Δm = 0.007809 u; 7.274 MeV (site 7.27 MeV); slip −0.007809 u | 3, 13, 14 |
| Alpha capture | ¹²C + ⁴He → ¹⁶O: 7.16 MeV (screen tag optional) | 3 |
| Ignition temperatures (author note b) | H ~10⁷; He ~10⁸; C ~6 × 10⁸; Ne ~1.2 × 10⁹; O ~1.5 × 10⁹; Si ~3 × 10⁹ K | 3 to 7, 16 |
| Massive threshold (site) | more than about 8 M☉ | 6 |
| 25 M☉ stage durations (Woosley and Janka 2005) | H 7 × 10⁶ yr; He 5 × 10⁵ yr; C 600 yr; Ne 1 yr; O 6 months; Si 1 day | 6 |
| Collapse (site lesson 10) | < 1 s; radius about 10 to 15 km; about 99% of energy as neutrinos | 7 |
| Capture chain | ⁵⁸Fe + n → ⁵⁹Fe (A 58 + 1 = 59; Z 26); ⁵⁹Fe → ⁵⁹Co + e⁻ + ν̄ (Z 26 → 27 − 1 = 26 balanced); half-life 44.5 d | 8 |
| Gold | ¹⁹⁷Au: Z = 79, N = 118 | 8, 17 |
| GW170817 | 17 August 2017; about 40 Mpc | 9 |
| Binding peak | ⁵⁶Fe 8.79 MeV per nucleon (v05) | 7 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 3 × 4.002603 = 12.007809; − 12.000000 = 0.007809 u; × 931.5 = 7.274 MeV.
- 12.000000 + 4.002603 − 15.994915 = 0.007688 u; × 931.5 = 7.161 MeV.
- 58 + 1 = 59; Z: 26 → 27 with e⁻ (−1): 26 = 27 − 1.
- 197 − 79 = 118.

## Memory aid check

- **"Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add neutrons."** Meaning, as said in scene 12: a more massive star's gravity squeezes its core to higher temperatures, allowing fusion of heavier nuclei, up to the iron peak; fusion stops at iron because it would absorb energy; elements beyond iron are made by neutron capture. Assumptions checked: "heavier star" means more massive at birth (initial mass), not denser; "hotter core" is the core temperature reached after contraction, not the surface temperature (scene 2 makes the surface cooler); "iron says stop" refers to energy-releasing fusion (iron-group nuclei; author note b); "add neutrons" includes the beta decay that turns neutrons into protons (scene 8). It helps a new case: A2 (why only the massive star makes iron) and any "where did gold come from?" question. Introduced after the explanation (2 to 9).
- **Considered, not used:** "We are star stuff" (true and memorable, but explains no mechanism).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,305 characters**, 18 scenes. Characters per scene (1 to 18): 342, 406, 456, 379, 428, 504, 504, 423, 517, 409, 373, 120, 184, 330, 139, 398, 301, 75. At 13.3 characters per second the speech is about 474 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 558 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 6's stage-duration sentence (keep the clock on screen); scene 9's 2017 sentence (keep the tag); scene 5's planets clause.

## Opening frame

v05's final frame (`phys-y12-m8-v05.md`, "Final frame"): paper background; heading "Why do main-sequence stars release energy by combining light nuclei?"; the coded binding-energy-per-nucleon curve across the frame with labels ¹H, ⁴He, ¹²C, ¹⁶O, "peak near iron (⁵⁶Fe: 8.8 MeV)", ²³⁸U; a solid amber arrow from ¹H to ⁴He tagged "main sequence"; dashed grey arrows from ⁴He to ¹²C, ¹⁶O and on to ⁵⁶Fe, each with a "?"; a small core inset filled with ⁴He discs, tag "core hydrogen used up"; the painted Sun `phys-y11-sun-v1.png` (small, lower left) and the painted hot-blue star `y12p-star-hot-blue-v1.png` (larger, lower right), each tagged "how far up?"; chip "Next: how does stellar mass change the elements a star can make?". Scene 1 tags the stars "1 M☉" and "25 M☉", adds the gold ring and turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board), described exactly for the v07 designer and matched to v07's assumed opening (open decision 1): paper background; heading "How does stellar mass change the elements a star can make?"; along the top a narrow strip of the coded periodic table coloured by source (pale blue Big Bang, green Sun-like and intermediate stars, amber massive stars and supernovae, purple neutron-star collisions); at the left a single plain grey atom (a circle with no internal structure drawn: no nucleus, orbits or cloud, so v07 and v08 can build the structure from evidence), labelled "Au (gold)", tag "electrons inside? (unknown before 1897)"; at the right the painted cathode ray tube `y12p-crt-tube-v1.png` (the plate requested by m6-v02; scaled uniformly, never stretched), its beam off and its screen dark, tag "1890s: cathode rays"; no people, hands or apparatus operators; chip "Next: how did cathode rays and oil drops reveal the electron?". v07 opens on this frame (open decision 1). If `y12p-crt-tube-v1.png` does not exist at build, both videos use the same coded tube outline (a horizontal glass tube with an electrode at each end and a dark screen at the right).

## Scene list and build ids

Lesson key `p-y12-m8-v06` (route phys-y12-m8-v06). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v06` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v06` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, after-hydrogen, helium-burning, pattern, sun-like-end, massive-climb, iron-limit, neutron-capture, slow-rapid, energy-against-elements, origins, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v07, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: core contraction and envelope swell, triple alpha, core temperature ladder, onion layers with stage clock, binding-curve stop, core collapse, neutron capture chain, periodic table by source, `m8-stellar-evolution`, `m8-nucleosynthesis`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 camera continue (into the core); 3 to 4 clear change to the ladder; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change to the curve; 7 to 8 clear change to the grid; 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 clear change to the table; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v06-learning-review.md`, `science_check` = `checks/p-y12-m8-v06-physics-check.md`.

## Assets

Have or requested earlier (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 1.
- `y12p-star-hot-blue-v1.png`, `y12p-star-cool-red-v1.png` (m7-v04): 1, 2.
- `y12p-crt-tube-v1.png` (m6-v02): 17 (the final frame).

Need (new plates):
1. `y12p-gold-ring-v1.png`: 1, 10.
2. `y12p-planetary-nebula-v1.png`: 5, 10.
3. `y12p-supernova-remnant-v1.png`: 7, 10.

Coded: star cross-sections, core temperature readout and ladder, nuclei and equations with tallies, onion layers and stage clock, binding curve and barrier, collapse bracket, neutrinos, N-Z grid and capture paths, neutron-star discs, two-column panel, gas cloud and new star, periodic table with legend, gold atom, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v06 build brief):
1. **Core temperature ladder with reach bars.** Ignition marks and two bars driven by a mass parameter.
2. **Onion layers with stage clock.** Concentric shells filling from the centre; a clock whose stage lines flash at increasing rate.
3. **Neutron capture chain.** An N-Z grid with capture (right) and beta-decay (diagonal) steps and A/Z tallies (v05's tally component).
4. **Periodic table by source.** A coded 18-column table whose cells fill by source with a legend.

## Codex asset brief

1. **`y12p-gold-ring-v1.png`** (new). A painted plain gold wedding-band ring, three-quarter view, warm polished gold with soft reflections, resting alone on nothing (no hand, finger, box or cloth). No text or engraving. Transparent PNG with alpha channel, about 1000 × 800, centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-top-pan-balance-v1.png` (painted everyday object, neutral lighting).
2. **`y12p-planetary-nebula-v1.png`** (new). A painted, reference-informed illustrative planetary nebula (in the manner of the Ring or Helix nebulae): a glowing shell of gas, blue-green inside and red-orange at the rim, with a small bright white central star. Edges fade softly to transparency. No text, labels or diffraction spikes. Transparent PNG with alpha channel, about 1400 × 1400. Style: match `phys-y11-galaxy-v1.png`.
3. **`y12p-supernova-remnant-v1.png`** (new). A painted, reference-informed illustrative core-collapse supernova remnant (in the manner of the Crab or Cassiopeia A): expanding filaments of glowing gas, orange-red and blue, around a faint bright central point. Edges fade softly to transparency. No text or labels. Transparent PNG with alpha channel, about 1600 × 1400. Style: match `phys-y11-galaxy-v1.png`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table and AME2020 masses.
2. Confirm the physics of every learner-visible claim: contraction and heating after core hydrogen exhaustion; shell burning and the red giant; helium ignition near 10⁸ K and its cause; triple alpha and alpha capture; the pattern and why mass sets core temperature (author note a); the Sun-like ending (no carbon burning, planetary nebula, C-O white dwarf); the massive-star stages, temperatures, onion structure and 25 M☉ durations (author note b); iron at the peak and collapse in under a second, city-sized remnant, neutrinos; neutron capture and beta decay with ⁵⁸Fe → ⁵⁹Fe → ⁵⁹Co (author note c); slow and rapid processes and their sites (author notes d, e); the energy distinction; element origins including oxygen and iron (site note 22; author note f).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the gold ring is shown alone).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 21 to 24 under Decisions to root.

## YouTube metadata (draft)

Title: How Stars Make the Elements: Helium Burning, the Iron Limit and Neutron Capture | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson06.sa.html, https://hscscience.com.au/subjects/physics/year12/module8/lesson07.sa.html and https://hscscience.com.au/subjects/physics/year12/module8/lesson10.sa.html

Why will the Sun never make iron, and where did the gold in a ring come from? Follow a star after its core hydrogen runs out: helium burning and the triple alpha process, why each heavier fuel needs a hotter core, why a Sun-like star stops at carbon and oxygen while a massive star climbs to iron, why iron ends fusion and triggers a supernova, and how neutron capture builds the elements beyond iron. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the types of nucleosynthesis reactions involved in Main Sequence and Post-Main Sequence stars, including but not limited to: proton–proton chain; CNO (carbon-nitrogen-oxygen) cycle"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: fusion in main-sequence stars. Next: how cathode rays and oil drops revealed the electron.

#HSCPhysics #Physics #Nucleosynthesis #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v05; check that the pattern in scene 4 is earned before the two tracks; that "mass sets core temperature" is understood without degeneracy; that the supernova stays to one sentence (route stop); that the energy distinction in scene 10 is clear and correct (site note 21); that the handoff to the electron is not abrupt for a student), then the physics check and the Codex error check, and root's reconciliation with v07's opening (open decision 1).
- The HR point moving as the star swells, the temperature ladder's two reach bars, the onion with its speeding clock, the barrier at the peak and the capture staircase carry the explanation; judge them at playback speed in the voiced preview.
