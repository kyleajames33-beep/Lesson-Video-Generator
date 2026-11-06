# Year 12 Physics M8 V18: Fission chain reactions. Why can one fission event trigger a controlled or uncontrolled chain? (design)

Status: Revision 2 (7 Nov 2026): brief 193 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,435 characters, 19 scenes (18 narrated scenes and the notes hold), about 553 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v17's actual final frame (root decision 9; see "Opening frame").

Scope: eighteenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How can the energy of the atomic nucleus be harnessed?". Templates as `phys-y12-m8-v05.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants and AME2020 atomic masses, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson14.sa.txt`, hash checked against the live file):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson14.sa.html`, SHA256 `18219e8c4f9f1d5b769f64d59db028c88c38ce4652bd933f5ca55990058af245` (matches the route): orient and predict, map the strong force, calculate binding energy, explain nuclear stability, clear the misconceptions, model nuclear fission and chain reactions (U-235 + n → Ba-141 + Kr-92 + 3n; ~200 MeV from 0.9 MeV per nucleon × 235; controlled and uncontrolled; moderator; control rods; critical mass; Figure 3), account for fusion energy, apply it ("Analyse 7 marks", "Explain 6 marks" controlled against uncontrolled), independent practice, retrieve and reflect.

Route entry: `phys-y12-m8-v18`, section `model-nuclear-fission`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Connect neutrons, fission products, energy and multiplication; explain moderator/control roles and distinguish critical from supercritical. Stop before reactor engineering." Next: "phys-y12-m8-v19: Why can fusion release energy despite repulsion between nuclei?" Entry knowledge asks that each newly introduced equation is derived before use: no new equation is introduced; the energy uses v17's Q from atomic masses and v16's binding energy, and the multiplication factor is defined in words before its symbol is used.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; nuclei, neutrons, generations, the multiplication graph, the moderator collision and the control-rod core are coded, HSC style (nuclear notation with mass number and atomic number); the OPAL reactor pool and the power station are painted plates (one new, one reused), scaled uniformly, never stretched; the kit's caution for `m8-nucleosynthesis` ("No reaction energetics or operational chain-reaction design") is respected: the design adds the energetics and stays at the conceptual level of chain control (no weapon design, no reactor engineering); every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹, 1 u = 931.5 MeV/c², 1 eV = 1.602 × 10⁻¹⁹ J (data sheet) and AME2020 atomic masses (given on the cards); "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v16 (binding energy, the curve), v17 (Q from atomic masses, sign of Q, induced transmutation), v14 (nuclear equations, conserving A and Z), Year 11 (elastic collisions, equal masses; exponential growth language from Maths is not assumed).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ4-03`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P8-IQ4-03`: "model and explain the process of nuclear fission, including the concepts of controlled and uncontrolled chain reactions, and account for the release of energy in the process (ACSPH033, ACSPH034)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v17's actual final frame (root decision 9: Q = +173 MeV, about 200 MeV in total after the fragments decay, three neutrons towards ²³⁵U "?"); scene 1 rewinds to one neutron and one nucleus. Teaches: neutron-induced fission of U-235 (absorb, wobble, split into two mid-mass fragments and two or three neutrons), balanced with A and Z; the energy from atomic masses (0.186024 u, 173 MeV for the Ba-141 and Kr-92 split) and its meaning on the binding-energy curve (fragments about 8.3 to 8.5 MeV per nucleon against U-235's 7.6); where the energy goes (fragment kinetic energy, then heat; about 200 MeV in total with the fragments' later decays; about twenty million times a chemical reaction); the chain (generations 1, 2, 4, 8); the multiplication factor k as "the average number of neutrons from each fission that cause another fission"; subcritical, critical and supercritical; where neutrons are lost (escape, capture without fission); critical mass; why a moderator is needed and how light water slows neutrons (equal-mass collisions); control rods; controlled (k held at 1) against uncontrolled (k above 1, energy in a fraction of a second); OPAL at Lucas Heights as an Australian controlled reactor. Stops before reactor engineering (delayed neutrons, coolant loops, enrichment, reactor types, waste), weapon design details, and fusion (v19).

## Decisions

- **Learner question (route wording kept).** "Why can one fission event trigger a controlled or uncontrolled chain?" The answer: each fission is triggered by one neutron and frees two or three more (2, 6); whether the chain grows, holds or dies depends on how many of those neutrons go on to cause another fission (7, 8); a moderator makes capture likely and control rods remove the extras, so a reactor holds that number at exactly one (9, 10); with no control and more than one, the chain multiplies every generation (11).
- **Hook (v17's actual handoff, root decision 9).** 3 s prediction chips for "One neutron went in. Three came out. What happens next?": "nothing", "they split more uranium", "they always escape". Answer: they can split more, if they hit uranium-235 and are slow enough.
- **The fission event (site `model-nuclear-fission`, representative reaction kept).** ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n; A 236 = 236, Z 92 = 92 (site's exact check). The intermediate is labelled "²³⁶U* (excited)" on screen and named once in narration as uranium two thirty-six "with so much extra energy" (Revision 2, brief 193: neutron capture leaves it highly excited; the ground-state isotope is a different state; author note a). The tag on neutron number reads "usually 2 or 3", not "always".
- **Energy (site "~200 MeV" kept as the total; v17 method used for the event).** Atomic masses: Δm = 236.052595 − 235.866571 = 0.186024 u; 173 MeV for this split (Revision 2: U-235 = 235.043930 u, AME2020, matching v17). Electrons balance (92 on each side), so atomic masses are consistent (author note b). The site's estimate 0.9 × 235 ≈ 200 MeV and the 173 MeV are reconciled in narration: the fragments are radioactive, and their later decays bring the total to about 200 MeV (author note c). Binding check (v16): 1783.9 MeV for U-235 (7.59 per nucleon) against 1174.0 + 783.2 = 1957.2 MeV for the fragments (8.33 and 8.51 per nucleon); the difference is 173.3 MeV, identical to the Δm result. Shown as a screen line, said in one sentence.
- **Scale comparison (site "ten to a hundred million times").** Recalculated: burning one methane molecule releases about 9.2 eV; 200 MeV / 9.2 eV ≈ 2 × 10⁷. Said "about twenty million times". The site's range holds (site note 4).
- **Chain and multiplication (site definitions; new symbol).** "Multiplication factor k: the average number of neutrons from each fission that cause another fission" (the site's "Explain 6 marks" step 2 wording, given a symbol). k < 1 subcritical, k = 1 critical, k > 1 supercritical. Revision 2 (brief 193): k = 1 is an average ("each fission leads to one more on average"), not exactly one each time; k > 1 means a growing chain, which a reactor uses briefly and gently to raise its power, and only becomes an explosion when k is well above one and unchecked (a weapon). The site uses "critical" in its full-mark answer and "supercritical" once; the route asks for both. The sensitivity line (k = 1.01 for 100 generations multiplies the rate by 2.7) is a screen tag that makes "exactly one" matter.
- **Losses and critical mass (site definition).** Neutrons escape through the surface, are absorbed without fission (by uranium-238 or other material) or cause fission. A small lump has more surface for its volume, so more escape; critical mass is the least mass that can sustain the chain. Kept qualitative (no values).
- **Moderator (site "Explain 6 marks" step 5; new causal step).** Fission neutrons are fast (about 2 MeV); U-235 captures slow neutrons far more readily (author note d: about 585 barns at thermal energy against about 1 barn fast). Water's hydrogen nuclei are protons, about the same mass as a neutron; in a head-on elastic collision between equal masses the moving one stops and the other moves off (Year 11 momentum, recalled), so a neutron loses much of its energy each bounce; about 18 collisions on average take it from 2 MeV to 0.025 eV (author note d). Graphite named on screen as the other site moderator.
- **Control rods (site).** Boron or cadmium (site); OPAL uses hafnium (sourced). Rods in: more absorbed, k falls; rods out: k rises. The site's "Stop and check" question is used as scene 10's framing.
- **Uncontrolled (site).** k well above 1, no absorbers: in a fast, unmoderated lump generations follow each other in far less than a microsecond (author note e), energy released in a fraction of a second. Revision 2 (brief 193): the narration ties the explosion to a weapon's unchecked growth, not to every k > 1; the summary chips read "controlled: k held at 1 (just above 1, briefly, to raise power)" and "uncontrolled: k well above 1, unchecked growth (a weapon's explosion)". A nuclear weapon is named once, conceptually; no design detail.
- **Australian context: OPAL (sourced).** Open Pool Australian Lightwater reactor, Lucas Heights, Sydney (ANSTO): 20 MW thermal, pool-type, low-enriched uranium (just under 20% U-235), light water moderator and coolant, heavy water reflector, five hafnium control rods; first criticality August 2006; makes medical isotopes (molybdenum-99, parent of technetium-99m), irradiates silicon, supplies neutron beams. It does not generate electricity (a common assumption). Sources: ANSTO, https://www.ansto.gov.au/facilities/opal-multi-purpose-reactor ; World Nuclear Association, https://world-nuclear.org/information-library/appendices/australian-research-reactors . Brief 193 confirmed the 20 MW, 13 m pool and five hafnium rods against ANSTO (open decision 3 closed).
- **Power-station link (one sentence).** Power reactors use the heat to boil water and drive turbines (site); the reused plate `phys-y11-power-station-v1.png` appears small beside OPAL with the contrast "power reactor: heat → steam → turbine" and "OPAL: neutrons for isotopes and research".
- **Memory aid (scene 13, new): "Slow them, catch the spares, keep k at one."** See "Memory aid check". Revision 2: "keep k at one" means hold the average at one; scene 10 shows a brief, small rise above one to raise power.
- **Attempts (original, HSC style).** A1 (3 marks): find the number of neutrons x in ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n, then the energy released from atomic masses: x = 2; 0.198263 u; 185 MeV. Crossed: dropping the product neutrons (2.216 u, "2060 MeV"). A2 (3 marks, explain): how a reactor keeps its chain steady. Crossed: "control rods slow the neutrons down" (that is the moderator's job).
- **Significant figures.** Masses to six decimal places in u (as given); energies to three figures; the site's "about 200 MeV" kept as a rounded total.
- **Handoff (route next).** Fission climbs the curve from the heavy side, up and to the left (Revision 2, brief 193; v16's direction repair); the light side climbs up, but light nuclei are positive and repel. "Next: why can fusion release energy despite repulsion between nuclei?". See "Final frame".
- **Colour key (as v05 and m7-v16):** neutrons grey discs (fast neutrons with a short grey motion streak, slow ones without), protons rose discs, U-235 a large ink-outlined disc labelled "²³⁵U", fragments mid-size ink-outlined discs labelled, gamma photons amber packets, energy amber; k readout navy; control rods dark slate bars; moderator water pale blue.
- **Colour key (Revision 2, fixed for every scene).** As above; masses in u ink; Q and energy amber; k and its readouts navy; power readout amber; ticks green; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the thing they mark (neutron tags grey, energy tags amber, k tags navy, rod tags slate, moderator tags pale blue in dark ink).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4, 15 and the feedback rows 52 px; six-decimal masses 52 px; framed answers 56 px); live readouts (k, fissions in generation 10, rod depth, power) about 52 px; curve and tree labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The delivered painted OPAL pool `y12p-opal-reactor-pool-v1.png` (inspected 7 Nov: a concrete block cut away to a deep blue pool, a bridge with guide tubes, the core glowing blue at the bottom; no text or people) previews in scene 1 as the controlled case, carries scene 12 at full size and the A2 card. The opening frame is v17's coded final frame, unchanged.
- **Simulation (Revision 2).** Two live controls: (1) the k slider in scene 7 sets the bar graph and live readouts (52 px) "k" and "fissions in generation 10", starting from 1000 in generation 1 (Python: k = 0.8, 1.0, 1.5 give about 134, 1000 and 38,000); (2) the control-rod slider in scene 10: rod insertion with live readouts "k" (0.98, 1.02, 1.00) and "power: falling, rising, steady". The generation tree (6, 11) and equal-mass bounce counter (9) are the other live elements.
- **Board stages (Revision 2).** No continued set-up runs past about 62 s (moderator water into the core, 9 to 10); every stage opens with its main picture solid.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded neutron approaching a coded ²³⁵U disc, with "¹⁴⁰Xe", "⁹⁴Sr" and "x n?" outlines; A2: the painted OPAL pool, no labels). On the answer side the card shrinks to the top, a givens strip lists the masses, the picture stays, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 14 `model-nuclear-fission` (definition; representative reaction and A/Z check; 7.6 against 8.5 MeV per nucleon; ~200 MeV; chemical comparison; chain reaction; controlled with moderator and control rods; uncontrolled; critical mass; Figure 3 generations; Stop and check) (2 to 12); `calculate-binding-energy` Figure 2 (curve, fission towards the peak) (3, 17); "Explain 6 marks" (neutron balance; critical; rods in and out; moderator as separate requirement) (7, 9, 10, 16); vocabulary "Chain reaction", "Critical mass". Not used: the strong-force properties and stability cards (v16); fusion card (v19); "Analyse 7 marks" (v16, v19).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Energy per fission (lesson 14 `model-nuclear-fission`): "The increase of roughly 0.9 MeV per nucleon over 235 nucleons gives: E ≈ 0.9 MeV/nucleon × 235 nucleons ≈ 200 MeV per fission" beside the Ba-141 + Kr-92 + 3n equation. The arithmetic gives 212 MeV, and the masses for that exact reaction give 173 MeV (AME2020). The 200 MeV figure is the total per fission including the fragments' later beta decays and gamma rays, averaged over fission modes. Suggest "about 170 MeV appears at once in this split; with the fragments' later decays, a fission releases about 200 MeV in total".
  2. Uncontrolled definition (vocabulary "Chain reaction"): "controlled (reactor) keeps about 1 neutron per fission". Correct in substance; suggest "on average exactly one neutron from each fission causes another fission", matching the card text, so "about" is not read as a tolerance.
  3. Moderator wording (card): "A moderator (water or graphite) slows the fast neutrons to thermal speeds, where U-235 is far more likely to absorb them." Correct. Note for consistency only: the reason (collisions with light nuclei of similar mass) is not given; the video adds it.
  4. Checked and correct: A and Z balance; 7.6 MeV per nucleon for U-235 (7.59); fragments "about 8.5" (Ba-141 8.33, Kr-92 8.51); "ten to a hundred million times" a chemical reaction (2 × 10⁷ for methane, 5 × 10⁷ for carbon); "two or three neutrons" (average 2.4 for thermal U-235 fission); critical mass definition; controlled at one, uncontrolled above one.
- **Cause chain taught, in order:** (1) a slow neutron is absorbed, the nucleus becomes unstable and splits into two fragments and two or three neutrons (2); (2) the fragments are more tightly bound, so they have less mass, and that mass leaves as kinetic energy (3 to 5); (3) each freed neutron can trigger another fission, so fissions can multiply by generation (6); (4) what matters is k, the average number per fission that cause another fission: below 1 the chain dies, at 1 it holds steady, above 1 it grows (7); (5) neutrons are lost by escape and by capture without fission, so too small a lump cannot sustain the chain (8); (6) fast neutrons rarely cause fission, so a moderator slows them through collisions with light nuclei (9); (7) control rods absorb spare neutrons, so moving them sets k, and a reactor holds k at exactly 1 (10); (8) with k above 1 and nothing absorbing, the chain multiplies so fast that the energy is released in a fraction of a second (11).
- **Entry knowledge (route `entryKnowledge`):** v17 (Q from atomic masses, sign of Q, induced transmutation); v16 (binding energy per nucleon; the curve); v14 (nuclear equations); Year 11 (elastic collisions between equal masses; kinetic energy and heat).
- **Learner-visible vocabulary (plain meaning at first use):** fission (a heavy nucleus splitting into two mid-sized nuclei, 2); fission fragments (the two nuclei it splits into, 2); chain reaction (neutrons from one fission causing more fissions, 6); generation (one round of fissions, 6); multiplication factor k (7); critical, subcritical, supercritical (k = 1, below 1, above 1, 7); critical mass (the least mass that can keep a chain going, 8); moderator (a material that slows neutrons, 9); control rods (rods that absorb neutrons, 10).
- **Legacy logic ported:** none. Explainer family `m8-nucleosynthesis` supplies the binding curve (3, 17) within its limits.
- **New explainer motion:** **fission event** (a grey neutron enters a large disc; the disc stretches into a peanut and pinches into two labelled fragments that fly apart with amber trails, and three grey neutrons leave); **A/Z tallies** (from v05's reaction steps kit); **generation tree** (Figure 3 redrawn: rows Gen 1, 2, 3, 4 with fission discs and arrows, a counter "fissions this generation"); **k dial and graph** (a navy k readout beside a bar graph of fissions per generation that shrinks, stays level or climbs as k is set to 0.8, 1.0 or 1.5); **neutron fates** (a lump of fuel with neutrons leaving by three labelled routes); **equal-mass bounce** (a grey neutron hits a rose proton head-on, stops, the proton moves on; then a slowing sequence with a speed bar); **control rods** (dark slate rods sliding into a coded core grid, k readout responding); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 14 and 16); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the nuclear view in the centre; equations and tallies at the right; the k readout at the top right from scene 7 to 12; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Thermal-neutron capture by U-235 forms U-236 in an excited state (about 6.5 MeV above its ground state); about 85% of captures lead to fission and about 15% to gamma emission (radiative capture). Revision 2 (brief 193): the label is "²³⁶U* (excited)" and the narration says "with so much extra energy that it wobbles and splits"; ground-state U-236 is a different, long-lived state.
  (b) Atomic masses: U-235 atom has 92 electrons; Ba (56) + Kr (36) atoms have 92; the neutrons have none. Electron masses cancel, so atomic masses give the nuclear Q directly (electron binding energies negligible). AME2020: ²³⁵U 235.043930 (235.0439299; Revision 2, brief 193), ¹⁴¹Ba 140.914403, ⁹²Kr 91.926173, ¹⁴⁰Xe 139.921646, ⁹⁴Sr 93.915356, n 1.008665 u.
  (c) Energy budget of thermal U-235 fission (about 200 MeV recoverable): fragment kinetic energy about 169 MeV, prompt neutrons about 5, prompt gamma about 7, beta and gamma from fragment decay about 13 to 14, antineutrinos about 10 (not recoverable). The single-split Q (173 MeV for Ba-141 + Kr-92 + 3n) is the prompt part; "about 200 MeV in total" is the standard rounded figure.
  (d) U-235 fission cross-section about 585 barns at 0.025 eV against about 1 to 2 barns at 1 to 2 MeV. Mean number of collisions with hydrogen to slow from 2 MeV to 0.025 eV: ln(8 × 10⁷)/ξ with ξ = 1 gives 18.2. A head-on elastic collision between equal masses transfers all the kinetic energy; average over angles is half per collision. Narration: "a head-on hit can stop it dead", "about eighteen collisions".
  (e) Prompt neutron generation time in a fast, unmoderated assembly is of order 10⁻⁸ s; the narration says "far less than a millionth of a second". No weapon-design detail is given. Reactors are controllable on human timescales because about 0.65% of U-235 fission neutrons are delayed (seconds); this is reactor engineering and is out of scope.
  (f) "Two or three neutrons": mean ν ≈ 2.43 for thermal U-235 fission; said "two or three, about two and a half on average" only on screen ("average ≈ 2.4").
  (g) Pronunciations: "uranium two thirty-five", "barium one forty-one", "krypton ninety-two", "xenon one forty", "strontium ninety-four", "OPAL" as "oh-pal", "Lucas Heights", "hafnium" as "haf-nee-um", "molybdenum" as "mol-ib-den-um".
- **Open decisions for root:**
  - **1. Opening frame (reconciled by root, 6 November).** v18 opens on v17's actual final frame (Q = +173 MeV, about 200 MeV in total, three neutrons towards ²³⁵U "?"); scene 1 rewinds to one neutron and one nucleus. The narration stands.
  - **2. 173 MeV against 200 MeV (science check).** The design gives both (scene 5) and logs site note 1. Confirm the one-sentence reconciliation is clear for learners.
  - **3. OPAL facts (Codex source check).** Closed for 20 MW, the 13 m pool and five hafnium rods (brief 193 against ANSTO). LEU just under 20%, heavy water reflector, 2006 criticality and Mo-99 are screen-only and stay for the error check.
  - **4. New plate `y12p-opal-reactor-pool-v1` (Codex).** Closed: delivered in brief 193 and inspected 7 Nov.
  - **5. Site notes 1 to 4** for the site log.

Main question: *One neutron splits one uranium nucleus, and out come two or three more neutrons. Why can that start a steady reactor in one case and an explosion in another?*
Entry knowledge: Q from atomic masses and its sign (v17); binding energy per nucleon and the curve (v16); nuclear equations (v14); elastic collisions (Year 11).
Stops after: the fission event and its energy, the chain and k, critical mass, the moderator and control rods, controlled against uncontrolled, OPAL. No reactor engineering, no fusion.
Handoff: v19, why fusion can release energy despite repulsion between nuclei.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *k*, *Q*, *Δm*, *A*, *Z*.

### 1. hook (what do the spare neutrons do?)
> When a slow neutron hits a uranium two thirty-five nucleus, the products have less mass, so energy is released. Here's what's strange about it. One neutron goes in, and two or three neutrons come out. So what happens to those spare neutrons? Make your **prediction**. They can split more uranium nuclei, if they're slow enough and they hit one. So why can one fission event trigger a controlled or uncontrolled **chain**?

Visual: opens on v17's final frame exactly (`phys-y12-m8-v17.md` "Final frame": the barium-krypton split with "Q = +173 MeV" and the tag "about 200 MeV in total, once the fragments decay", three neutrons heading towards ²³⁵U nuclei marked "?"). The Q tags and "?" marks fade, and the frame rewinds to one slow neutron approaching one ²³⁵U disc at the centre. On "One neutron goes in" the grey neutron enters the disc. On "two or three neutrons come out" three grey discs leave with streaks, grey hand tag "1 in, 2 or 3 out" with a grey pen ring round the three neutrons. On "prediction" a 3 s `Countdown` beside chips "nothing", "they split more uranium", "they always escape". On "They can split more uranium nuclei" the second chip ticks; each spare neutron heads towards a faint new ²³⁵U disc. On "chain" the chip becomes the heading: "Why can one fission event trigger a controlled or uncontrolled chain?", and the painted OPAL pool `y12p-opal-reactor-pool-v1.png` fades in at the right (solid, about 420 px tall) with a navy hand tag "controlled: OPAL, Sydney" and a navy pen arrow from "controlled" in the heading to the plate.

### 2. one fission event
> First, one event. A uranium two thirty-five nucleus absorbs a slow neutron and becomes uranium two thirty-six, with so much extra energy that it wobbles and splits in **two**. This is fission, a heavy nucleus splitting into two mid-sized nuclei, called fission fragments. A typical split gives barium one forty-one, krypton ninety-two, and three **neutrons**. Check the balance. Nucleons, two hundred and thirty-six on each side. Charge, ninety-two on each **side**.

Visual: board change to the fission event (a new set-up, solid from the first frame: the ²³⁵U disc about 400 px across). On "absorbs a slow neutron" the grey disc enters; the disc relabels "²³⁶U* (excited)" and glows, amber hand tag "extra energy". On "two" the disc stretches into a peanut and pinches into two discs. On "This is fission" chip "fission: a heavy nucleus splits into two mid-sized nuclei". On "neutrons" the fragments label "¹⁴¹₅₆Ba" and "⁹²₃₆Kr", three grey discs fly out; equation builds at the right: "¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n". On "two hundred and thirty-six on each side" tallies "A: 1 + 235 = 236 | 141 + 92 + 3 = 236" tick green. On "side" "Z: 0 + 92 = 92 | 56 + 36 + 0 = 92" tick green. Small grey tag: "fragments vary from event to event; usually two fragments and 2 or 3 neutrons (average ≈ 2.4)"; the balanced equation sits in a dark-ink frame (52 px), ink and red pen brackets over the tallies.

### 3. why energy comes out
> Why does it release energy? Look at the binding energy curve. Uranium two thirty-five sits on the heavy side, at about seven point six MeV per nucleon. The fragments sit nearer the peak, at about eight point three and eight point five. So the fragments are more tightly bound than the uranium was, and that means they have less **mass**. The missing mass leaves as **energy**.

Visual: board change (a new set-up, solid from the first frame) to the `m8-nucleosynthesis` curve, full width, (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9; peak "near iron"). On "Uranium two thirty-five sits on the heavy side" a dot at A = 235, "7.6". On "about eight point three and eight point five" dots at A = 141 "8.3" and A = 92 "8.5", and an amber arrow from the U dot up and to the left to the two fragment dots, amber hand tag "fission: up towards the peak" with an amber pen ring round the fragment dots. On "more tightly bound" chip "more tightly bound → less mass". On "mass" mass bars "n + ²³⁵U" and "Ba + Kr + 3n" with a sliver gap "Δm". On "energy" the gap glows amber, "E = Δm c²" in a dark-ink frame.

### 4. how much energy?
> Now the number. Use atomic masses, as last time. The electrons balance, ninety-two on each side. Before the split, the neutron and the uranium have a mass of two hundred and thirty-six point zero five two six u. After, the fragments and three neutrons have two hundred and thirty-five point eight six six six. The difference is zero point one eight six zero **u**. Times nine hundred and thirty-one point five gives about one hundred and seventy-three **MeV**, from one nucleus.

Visual: board change to the working layout (solid from the first frame, the small fission picture at the upper left). Task strip: "Energy released when U-235 splits into Ba-141, Kr-92 and 3 neutrons." Equation strip: "Δm = m(reactants) − m(products); E = Δm × 931.5 MeV". Givens grouped: "m(n) = 1.008665 u; m(²³⁵U) = 235.043930 u"; "m(¹⁴¹Ba) = 140.914403 u; m(⁹²Kr) = 91.926173 u"; "1 u = 931.5 MeV/c² (data sheet)". On "The electrons balance" navy hand tag "atomic masses: 92 electrons each side". On "u" `AlignedAlgebra` (52 px) "reactants: 1.008665 + 235.043930 = 236.052595 u", "products: 140.914403 + 91.926173 + 3(1.008665) = 235.866571 u", "Δm = 0.186024 u"; ink pen ring round "3(1.008665)", ink hand tag "count all 3 neutrons". On "MeV" "E = 0.186024 × 931.5 ≈ 173 MeV" in a dark-ink frame (56 px), tag "= 2.78 × 10⁻¹¹ J"; beside it a chip "0.186 × (3.00 × 10⁸)² = 1.67 × 10¹⁶ J" fades in and is crossed in red, red hand tag "u needs × 931.5"; then a check line in grey: "binding check (v16): 1957.2 − 1783.9 = 173.3 MeV ✓".

### 5. where the energy goes
> Most of that energy is kinetic energy of the two fragments, flying apart. They crash into the surrounding atoms, and the material heats **up**. The fragments are radioactive too, and their later decays add more, so one fission releases about two hundred MeV in **total**. Burning one molecule of methane releases about nine electron volts. So one fission gives about twenty million times **more**.

Visual: board change (a new set-up, solid from the first frame): the fission event replays small; the two fragments fly into a coded lattice of atoms (about 900 px). On "flying apart" amber trails on the fragments, tag "fragment kinetic energy (most of it)". On "up" the lattice atoms jiggle faster, a thermometer bar rises, amber hand tag "→ heat" with an amber pen ring round the thermometer. On "later decays" the fragments emit small e⁻ dots and amber γ packets, tag "β and γ from the fragments". On "total" a stacked bar "≈ 173 MeV at the split + later decays ≈ 200 MeV total". On "nine electron volts" a tiny bar "CH₄ + 2O₂: ≈ 9 eV". On "more" the scale chip "200 MeV ÷ 9 eV ≈ 2 × 10⁷" in a dark-ink frame.

### 6. one becomes many
> Now the chain. Each fission frees two or three neutrons, and each of those can trigger another fission. A chain reaction is neutrons from one fission causing more fissions. Say each fission triggers two more. One fission, then two, then four, then **eight**. Each round is called a generation. After ten generations, that's over a thousand fissions at **once**.

Visual: board change to the generation tree (site Figure 3 redrawn; a new set-up, solid from the first frame with Gen 1 drawn): Gen 1 at the top, a live counter "fissions this generation" (52 px) at the right. On "each of those can trigger another fission" two arrows from the Gen 1 disc to two new discs. On "A chain reaction" chip "chain reaction: neutrons from one fission cause more fissions". On "One fission, then two, then four, then" rows Gen 2 (2) and Gen 3 (4) light; on "eight" Gen 4 (8). On "generation" row labels "Gen 1, Gen 2, Gen 3, Gen 4". On "once" the counter jumps to "Gen 11: 2¹⁰ = 1024 fissions", the tree shrinking to a dense fan; navy hand tag "× 2 each generation" with a navy pen bracket over the rows.

### 7. the number that decides
> But not every neutron causes a fission. What decides everything is one number, k, the average number of neutrons from each fission that go on to cause another fission. If k is less than one, each generation is smaller, and the chain dies **away**. If k is exactly one, each fission leads to one more on average, and the rate stays **steady**. That's called critical. If k is more than one, the chain grows every generation. That's called **supercritical**.

Visual: board change to the k dial and graph (the live k slider, Revision 2): bar graph "fissions per generation" against "generation 1 to 10" (1000 fissions in generation 1); live readouts top right (52 px) "k" and "fissions in generation 10". On "k, the average number of neutrons from each fission" chip "k = average number of neutrons per fission that cause another fission". On "away" the slider sets k = 0.8, bars shrink, readout "≈ 134", tag "k < 1: subcritical, dies away". On "steady" k = 1.0, bars level, readout "1000", tag "k = 1: critical, steady (an average)". On "That's called critical" the tag pulses. On "supercritical" k = 1.5, bars climb steeply, readout "≈ 38,000", tag "k > 1: supercritical, grows"; navy hand tag "critical = steady, not dangerous" with a navy pen ring round the k = 1 bars; a grey line follows silently: "even k = 1.01: × 2.7 after 100 generations".

### 8. where neutrons go
> So where do the other neutrons go? Some escape through the surface. Some are absorbed by nuclei that don't split, like uranium two thirty-**eight**. Only the rest cause fission. In a small lump, a lot of the neutrons are near the surface, so too many escape, and k stays below one. The least mass that can keep a chain going is called the critical **mass**.

Visual: board change (a new set-up, solid from the first frame): a coded lump of fuel (ink outline, pale grey fill, about 600 px) with neutrons inside. On "Some escape through the surface" two grey discs leave through the edge, tag "escape". On "eight" a grey disc stops in a smaller disc labelled "²³⁸U", tag "absorbed, no fission". On "Only the rest cause fission" a grey disc splits a ²³⁵U disc, tag "fission". On "In a small lump" a smaller lump beside it, most arrows crossing the edge; its k readout "k < 1". On "mass" a larger lump, more arrows staying inside, its readout "k = 1", chip "critical mass: the least mass that can sustain the chain" in a dark-ink frame; grey hand tag "more surface, more escape" with a grey pen arrow along an escaping track.

### 9. slowing them down
> There's another problem. Fission neutrons are fast, and uranium two thirty-five rarely captures a fast neutron. It captures slow ones far more easily. So a reactor uses a moderator, a material that slows neutrons down. Water works well, because its hydrogen nuclei are protons, about the same mass as a neutron. Remember Year eleven collisions. When equal masses meet head on, the moving one can stop dead, handing over its **energy**. After about eighteen collisions, a neutron is **slow**.

Visual: board change (a new set-up, solid from the first frame): a grey neutron with a long streak passes a ²³⁵U disc without being captured, tag "fast (≈ 2 MeV): rarely captured". On "It captures slow ones far more easily" a slow grey neutron (no streak) is captured, tag "slow (≈ 0.03 eV): captured far more readily". On "moderator" chip "moderator: slows neutrons (water or graphite)". On "about the same mass as a neutron" a pale blue water region with rose proton discs; labels "n ≈ 1 u", "p ≈ 1 u". On "energy" the equal-mass bounce: the neutron hits a proton head on, stops, the proton moves off; grey hand tag "equal masses: full hand-over" with a grey pen ring round the stopped neutron. On "slow" a speed bar shortens over a zig-zag path through the water, a collision counter ticking to "≈ 18", tag "2 MeV → 0.03 eV".

### 10. holding k at one
> Then, how do you keep it steady? With control rods, made of materials like boron or cadmium that absorb neutrons. Push the rods further in, and they absorb more neutrons, so k **falls**. Pull them out, and k **rises**. Operators move the rods to hold k at exactly one, so the reactor runs at a steady **rate**, and its heat is removed continuously.

Visual: the water becomes a coded core (camera continue; solid): a grid of fuel cells in pale blue water, dark slate rods above with a rod-depth slider (Revision 2 live control); live readouts top right (52 px) "k" and "power". On "control rods" chip "control rods: absorb neutrons (boron, cadmium)". On "falls" rods slide in, several grey discs disappear into them, readouts "k = 0.98 ↓", "power: falling", bars dip; slate hand tag "rods absorb". On "rises" rods slide out, readouts "k = 1.02 ↑", "power: rising", bars rise; small grey tag "k just above 1, briefly: power rises, still controlled". On "rate" rods settle partway, readouts "k = 1.00", "power: steady", bars level, framed tag "controlled: k held at 1", slate pen bracket on the rod depth.

### 11. uncontrolled
> Now take the control away. If k is well above one and nothing absorbs the spare neutrons, the number of fissions multiplies every generation. In a fast lump with no moderator, each generation takes far less than a millionth of a second, so the energy of a huge number of nuclei comes out in a fraction of a **second**. That unchecked growth is how a nuclear weapon makes its **explosion**.

Visual: board change (a new set-up, solid from the first frame): the generation tree from scene 6, now with k = 2 on the readout and no rods or water. On "multiplies every generation" the tree fans rapidly row after row. On "far less than a millionth of a second" a clock tag "each generation ≪ 10⁻⁶ s". On "second" an amber flash fills the tree, tag "energy released in a fraction of a second". On "explosion" side-by-side framed summary chips: "controlled: k held at 1 (just above 1, briefly, to raise power)" | "uncontrolled: k well above 1, unchecked growth (a weapon's explosion)"; red hand tag "k > 1 alone ≠ explosion" with a red pen underline under "unchecked".

### 12. a reactor near Sydney
> Australia has one controlled reactor running right now, OPAL, at Lucas Heights in Sydney. Its core sits at the bottom of a pool of water about thirteen metres deep, and that water is its moderator. Five hafnium control rods hold its chain steady at twenty megawatts. OPAL doesn't make electricity. Its neutrons make medical isotopes for hospital **scans**.

Visual: board change (a new set-up, solid from the first frame): the painted pool reactor `y12p-opal-reactor-pool-v1.png` (about 860 px tall, below its 1086 px native height), the core glowing blue at the bottom; caption "OPAL, Lucas Heights, NSW (ANSTO): illustration". On "a pool of water about thirteen metres deep" a coded depth bracket "≈ 13 m", tag "light water: moderator and coolant". On "Five hafnium control rods" five dark slate rods drawn as coded overlays above the core, k readout "k = 1", tag "20 MW (thermal)". On "OPAL doesn't make electricity" the reused power station plate `phys-y11-power-station-v1.png` appears small at the right with a crossed link, tags "power reactor: heat → steam → turbine" and "OPAL: research reactor". On "scans" chip "molybdenum-99 → technetium-99m for medical scans"; blue pen ring round the glowing core, navy hand tag "neutrons for medicine".

### 13. a way to remember
> Here's a way to remember the controlled chain. Slow them, catch the spares, keep k at **one**.

Visual: the core from scene 10, small. On "Slow them" the water region pulses; on "catch the spares" the rods pulse; on "one" the readout "k = 1" pulses and the line writes large as the framed memory card (hand lettering, 52 px; reused on the notes screen): "Slow them, catch the spares, keep k at one." Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A uranium two thirty-five nucleus absorbs a neutron and splits into xenon one forty, strontium ninety-four and some neutrons. Find the number of neutrons released, then calculate the energy released, in MeV. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A uranium-235 nucleus absorbs a neutron and undergoes fission: ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n. Atomic masses: n 1.008665 u, ²³⁵U 235.043930 u, ¹⁴⁰Xe 139.921646 u, ⁹⁴Sr 93.915356 u. (a) Determine x. (b) Calculate the energy released, in MeV. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 280 px): a coded neutron approaching a coded ²³⁵U disc, with "¹⁴⁰Xe", "⁹⁴Sr" and "x n?" outlines. Data chip "1 u = 931.5 MeV/c²". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 15. feedback 1 (brief)
> Nucleons, two hundred and thirty-six on the left, and one forty plus ninety-four is two thirty-four, so two **neutrons**. Reactants, two hundred and thirty-six point zero five two six u. Products, two hundred and thirty-five point eight five four three **u**. The difference is zero point one nine eight three u, about one hundred and eighty-five **MeV**. The slip is leaving out the product neutrons, which gives an impossible **answer**.

Visual: card shrinks to the top; "x", the masses and "931.5" underline; givens strip with the four masses and "931.5 MeV/c²"; the card's picture stays at the right, its "x n?" becoming "2 n". On "neutrons" "A: 1 + 235 = 140 + 94 + x → x = 2" in a dark-ink frame (52 px). On "u" (second) "reactants: 236.052595 u; products: 139.921646 + 93.915356 + 2(1.008665) = 235.854332 u" (52 px). On "MeV" "Δm = 0.198263 u; E = 0.198263 × 931.5 ≈ 185 MeV" in a dark-ink frame (56 px). On "answer" a chip "Δm = 236.052595 − 233.837002 = 2.216 u → 2060 MeV" fades in and is crossed in red (red hand tag "count every product"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Explain how a nuclear reactor keeps its fission chain reaction steady. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain how a nuclear reactor maintains a steady (controlled) fission chain reaction. Refer to the moderator and the control rods. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 300 px tall): the painted OPAL pool, no labels. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 17. feedback 2 (brief)
> Each fission frees two or three neutrons, and the chain is steady when, on average, exactly one of them causes another fission, so k equals **one**. The moderator slows the fast neutrons, so uranium two thirty-five can capture **them**. The control rods absorb spare neutrons, and moving them in or out holds k at **one**. The slip is saying control rods slow the neutrons. That's the moderator's **job**.

Visual: card shrinks to the top; "steady", "moderator" and "control rods" underline; the OPAL picture stays at the right. Rows write in turn (44 px); the k = 1 row is framed. On "one" (first) row "steady chain: on average exactly 1 neutron per fission causes another (k = 1)". On "them" row "moderator (water, graphite): slows fast neutrons → more captured by U-235". On "one" (second) row "control rods (boron, cadmium): absorb spare neutrons; in → k ↓, out → k ↑". On "job" a chip "control rods slow the neutrons down" fades in and is crossed in red (red hand tag "rods absorb; moderator slows"). Hold about 1 second.

### 18. handoff
> So fission releases energy by climbing the binding energy curve from the heavy side. The other side of the curve climbs too. Joining light nuclei, like hydrogen into helium, climbs even more steeply. But light nuclei are positive, and they push each other away. So why can fusion release energy despite repulsion between **nuclei**?

Visual: board clears (camera change) to the binding curve, full width. On "climbing the binding energy curve from the heavy side" the amber fission arrow rises up and to the left from ²³⁵U to the fragments, tag "fission (this video)". On "The other side of the curve climbs too" a dashed amber arrow from ²H and ³H up to ⁴He with a "?", tag "fusion?". On "climbs even more steeply" the left side of the curve pulses. On "they push each other away" an inset beside the left side: a rose ²H disc and a rose ³H disc with red repulsion arrows pointing apart. On "nuclei" chip "Next: why can fusion release energy despite repulsion between nuclei?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 19. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. n + ²³⁵U → 2 fragments + 2 or 3 n (balance A, Z).
2. Fragments bound tighter: 173 MeV here, ≈ 200 total.
3. k = average fissions caused per fission.
4. k < 1 dies, k = 1 steady, k > 1 grows.
5. Moderator slows neutrons; control rods absorb them.

Memory aid (framed card under the notes, hand lettering as in scene 13): *Slow them, catch the spares, keep k at one.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why energy is released: the fragments are more tightly bound, so lighter (3, 4). Why a chain is possible: each fission frees more neutrons than it used (1, 6). Why it can die, hold or grow: k (7). Why small lumps fail: neutrons escape (8). Why a moderator is needed and why water works: slow capture; equal-mass collisions (9). Why control rods control: absorption sets k (10). Why uncontrolled is explosive: multiplication with very short generations (11).
- **Misconceptions addressed:** a reactor can explode like a bomb because both are "chain reactions" (11: the difference is k); control rods slow neutrons (17 crossed); more neutrons always means more fission (8); mass is destroyed (3: binding, less mass); OPAL makes electricity (12); only counting some products (15 crossed).
- **One idea at a time:** event (2), energy source (3), energy number (4), energy destination (5), chain (6), k (7), losses (8), moderator (9), rods (10), uncontrolled (11), context (12).
- **Video makes it easier:** the nucleus pinching in two (2); fragment dots moving up the curve (3); the generation fan (6); bars shrinking, levelling or climbing as k changes (7); neutrons leaving the small lump (8); the equal-mass bounce (9); rods sliding with the readout responding (10).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 28 s.
- **Avoided double teaching:** binding energy and the curve (v16), Q from atomic masses (v17), nuclear equations (v14), Year 11 collisions recalled in a clause each.
- **Syllabus coverage:** `P8-IQ4-03`: model (2, 6, 7, the generation tree and k graph) and explain fission (2 to 5), controlled and uncontrolled chain reactions (6 to 12, A2), account for the release of energy (3 to 5, A1). Also supports `P8-IQ4-06` (fission energy, A1) and `P8-IQ4-04` (A, Z and mass-energy conserved).
- **Out of scope by design:** delayed neutrons and reactor kinetics (author note e), reactor types, coolant circuits, enrichment, waste, weapon design, fusion (v19).

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A uranium-235 nucleus absorbs a neutron and undergoes fission: ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n. Atomic masses: n 1.008665 u, ²³⁵U 235.043930 u, ¹⁴⁰Xe 139.921646 u, ⁹⁴Sr 93.915356 u. (a) Determine x. (b) Calculate the energy released, in MeV. (1 u = 931.5 MeV/c²)"
Model answer: (a) Nucleon number: 1 + 235 = 140 + 94 + x, so x = 2 (charge check: 92 = 54 + 38). (b) Reactants 1.008665 + 235.043930 = 236.052595 u. Products 139.921646 + 93.915356 + 2(1.008665) = 235.854332 u. Δm = 0.198263 u. E = 0.198263 × 931.5 = 185 MeV. Classic mistake (crossed): leaving out the product neutrons (Δm = 2.216 u, "2060 MeV").

**Attempt 2 (scene 16; original wording, HSC style, 3 marks).** "Explain how a nuclear reactor maintains a steady (controlled) fission chain reaction. Refer to the moderator and the control rods."
Model answer: Each fission of U-235 releases two or three neutrons that can cause further fissions. The chain is steady when, on average, one neutron from each fission causes another fission (k = 1, critical). A moderator such as water or graphite slows the fast neutrons, because U-235 is far more likely to absorb slow neutrons, so enough fissions occur to sustain the chain. Control rods made of a neutron absorber such as boron or cadmium absorb surplus neutrons; inserting them lowers k and withdrawing them raises it, so k is held at one and the power stays steady. Classic mistake (crossed): "control rods slow the neutrons down".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | 1 u = 931.5 MeV/c²; 1 eV = 1.602 × 10⁻¹⁹ J; c = 3.00 × 10⁸ m s⁻¹ | 4, 14, 15 |
| Atomic masses (AME2020) | n 1.008665; ¹H 1.007825; ²³⁵U 235.043930 (Revision 2; was 235.043928); ¹⁴¹Ba 140.914403; ⁹²Kr 91.926173; ¹⁴⁰Xe 139.921646; ⁹⁴Sr 93.915356 u | 4, 14, 15 |
| Ba/Kr split | reactants 236.052595 u; products 235.866571 u; Δm 0.186024 u; 173.28 MeV = 2.776 × 10⁻¹¹ J | 4, 5 |
| Crossed slip (Revision 2) | 0.186024 × (3.00 × 10⁸)² = 1.67 × 10¹⁶ ("J", u not converted) | 4 |
| k slider (Revision 2) | 1000 × k⁹ for generation 10: k = 0.8 → 134; 1.0 → 1000; 1.5 → 38,443 ("≈ 38,000") | 7 |
| Binding energies (v16 method) | ²³⁵U 1783.9 MeV (7.59 per nucleon); ¹⁴¹Ba 1174.0 (8.33); ⁹²Kr 783.2 (8.51); difference 173.3 MeV | 3, 4 |
| Site estimate | 0.9 × 235 = 211.5, "≈ 200 MeV" (site note 1) | 5 (author note c) |
| Total per fission | about 200 MeV (author note c) | 5 |
| Chemical comparison | methane 890 kJ mol⁻¹ / 6.022 × 10²³ = 9.2 eV; 200 MeV / 9.2 eV = 2.2 × 10⁷ | 5 |
| Generations | 1, 2, 4, 8; Gen 11: 2¹⁰ = 1024 | 6 |
| k illustrations | 0.8, 1.0, 1.5 (bars); 1.01¹⁰⁰ = 2.70; 0.99¹⁰⁰ = 0.37; 0.98, 1.02 (rods) | 7, 10 |
| Neutrons per fission | 2 or 3; average ≈ 2.4 (author note f) | 2 |
| Moderation | 2 MeV fast, 0.025 eV thermal; ln(8 × 10⁷) = 18.2 collisions | 9 |
| OPAL | 20 MW thermal; pool ≈ 13 m (12.8 m); 5 hafnium control rods; LEU < 20% U-235; criticality Aug 2006 | 12 |
| A1 | x = 2; products 235.854332 u; Δm 0.198263 u; 184.68 MeV; slip 236.052595 − 233.837002 = 2.215593 u → 2063.8 MeV ("2060") | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad folder `m8v18-22`); Codex to re-check.

- Revision 2 (Python, 7 Nov, U-235 = 235.043930 u): 1.008665 + 235.043930 = 236.052595; 140.914403 + 91.926173 + 3.025995 = 235.866571; Δm = 0.186024 u; × 931.5 = 173.281 MeV; × 1.602e-13 = 2.776e-11 J. Slip 0.186024 × 9e16 = 1.674e16. k slider 1000 × 0.8⁹ = 134.2; 1000 × 1.5⁹ = 38,443.
- BE(²³⁵U) = (92 × 1.007825 + 143 × 1.008665 − 235.043930) × 931.5 = 1783.88 MeV, / 235 = 7.591; BE(¹⁴¹Ba) = (56 × 1.007825 + 85 × 1.008665 − 140.914403) × 931.5 = 1173.99, / 141 = 8.326; BE(⁹²Kr) = (36 × 1.007825 + 56 × 1.008665 − 91.926173) × 931.5 = 783.17, / 92 = 8.513; 1173.99 + 783.17 − 1783.88 = 173.28.
- 890000 / 6.022e23 / 1.602e-19 = 9.23 eV; 2e8 / 9.23 = 2.17e7.
- 2¹⁰ = 1024; 1.01¹⁰⁰ = 2.705; 0.99¹⁰⁰ = 0.366; ln(2e6 / 0.025) = 18.20.
- A1: 139.921646 + 93.915356 + 2.017330 = 235.854332; 236.052595 − 235.854332 = 0.198263; × 931.5 = 184.68 MeV; slip: 236.052595 − 233.837002 = 2.215593 u; × 931.5 = 2063.8 MeV.

## Memory aid check

- **"Slow them, catch the spares, keep k at one."** Meaning, as said in scenes 9, 10 and 13: the moderator slows the fission neutrons so U-235 captures them; the control rods absorb the neutrons beyond the one per fission needed; the result is k = 1, a steady chain. Assumptions checked: "slow them" applies to thermal reactors (OPAL and the site's reactor; fast reactors exist but are outside the syllabus); "catch the spares" refers to the control rods' absorption, while other losses (escape, U-238 capture) also count towards k (scene 8); "keep k at one" is the critical condition for steady power (power changes are made by briefly moving k above or below one, scene 10). It helps a new case: A2 and any "explain how a reactor is controlled" question. Introduced after the explanation (9 to 12).
- **Considered, not used:** "A reactor is a fire, a bomb is an explosion" (true in spirit, but it invites the chemical-burning picture, and both use the same fission).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,435 characters**, 19 scene headings (18 narrated scenes and the notes hold). Characters per scene (1 to 19): 413, 454, 368, 470, 385, 353, 444, 349, 483, 336, 381, 352, 90, 240, 423, 102, 389, 328, 75. At 13.3 characters per second the speech is about 484 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the k and rod sliders run under their narration): **about 553 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,429 characters, about 567 s. Reserve trims if the voiced take runs long: scene 5's methane comparison; scene 8's uranium-238 example; scene 12's last sentence.

## Opening frame

v17's final frame exactly (reconciled by root, 6 November, root decision 9; unchanged by v17 Revision 2): see `phys-y12-m8-v17.md` "Final frame" (Q = +173 MeV with the about-200-MeV tag, three neutrons heading to ²³⁵U nuclei marked "?"). Scene 1 rewinds to a single neutron and nucleus before the chain is built; v18 keeps the 173 MeV (immediate) versus about 200 MeV (after fragment decays) distinction.

## Final frame

The last explained frame (end of scene 18, before the key-notes board): paper background; heading "Why can one fission event trigger a controlled or uncontrolled chain?"; the coded binding-energy-per-nucleon curve across the frame (x "mass number A" 0 to 240, y "binding energy per nucleon (MeV)" 0 to 9; labels ²H, ³H, ⁴He, "peak near iron (⁵⁶Fe: 8.8 MeV)", ⁹²Kr, ¹⁴¹Ba, ²³⁵U); a solid amber arrow rising up and to the left from ²³⁵U to the two fragment dots tagged "fission (this video)" (Revision 2); a dashed amber arrow from ²H and ³H up to ⁴He with a "?", tagged "fusion?"; beside the left side of the curve an inset of a rose ²H disc and a rose ³H disc with red repulsion arrows pointing apart; chip "Next: why can fusion release energy despite repulsion between nuclei?". v19 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v18` (route phys-y12-m8-v18). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v18` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v18` (root to confirm).

In order (kebab-case; 19 scene headings, all `### N.`): hook, fission-event, energy-source, worked-energy, energy-destination, chain, multiplication-factor, neutron-losses, moderator, control-rods, uncontrolled, opal, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v19, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: fission event, A/Z tallies, generation tree, k dial and graph, neutron fates, equal-mass bounce, control rods, `m8-nucleosynthesis`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the curve; 3 to 4 clear change to working; 4 to 5 clear change; 5 to 6 clear change to the tree; 6 to 7 camera continue (tree to graph); 7 to 8 clear change; 8 to 9 clear change; 9 to 10 camera continue (water becomes the core); 10 to 11 clear change; 11 to 12 clear change to the plate; 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 clear change; 18 to 19 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v18-learning-review.md`, `science_check` = `checks/p-y12-m8-v18-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/y12p-opal-reactor-pool-v1.png` (1448 × 1086, RGBA; delivered in brief 193, inspected 7 Nov: concrete block cut away to a deep blue pool, bridge and guide tubes, glowing core at the bottom; no text, people or rod labels): 1 (preview), 12, 16, 17.
- `public/assets/physics/phys-y11-power-station-v1.png`: 12 (small, contrast with OPAL). Brief 193 omitted both smoking power-station plates as allowed; if no clean plate exists, scene 12 drops it and keeps the text contrast "power reactor: heat → steam → turbine".
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a lab source; adds nothing to fission).

Need (new plate): none. (Revision 1's OPAL pool request was delivered in brief 193.)

Coded: nuclei, neutrons, fragments, tallies, binding curve, mass bars, lattice and thermometer, generation tree, k graph and readout, fuel lump, water and protons, collision counter, core grid, control rods, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v18 build brief):
1. **Fission event.** A disc that stretches, pinches into two labelled fragments and emits neutron discs (reused in v19's comparison and in the final frame thumbnail).
2. **Generation tree and k graph.** A tree whose branching factor is set by k, linked to a bar graph of fissions per generation.
3. **Equal-mass bounce.** Head-on elastic collision of two equal discs with momentum handed over, then a zig-zag slowing path with a counter.
4. **Control-rod core.** Rods sliding into a grid with a k readout driven by insertion depth.

## Codex asset brief

Revision 2: no new plates. The request below is kept for the record; it was delivered in brief 193.

1. **`y12p-opal-reactor-pool-v1.png`** (new). A painted cutaway illustration of an open-pool research reactor in the style of OPAL (ANSTO, Lucas Heights): a deep cylindrical pool of clear water inside a concrete block, seen in three-quarter cutaway; at the bottom a compact square core inside a cylindrical reflector vessel, glowing soft electric blue (Cherenkov light); a few vertical guide tubes rising from the core to a bridge across the top of the pool. Reference the real facility's published cutaway diagrams on the ANSTO site for proportions; do not add brands, logos, text, people, figures, hands, numbers, arrows or control-rod labels (control rods are coded overlays). Transparent PNG with alpha channel, about 1600 × 1200, centred with even margins. Style: match `y12p-alpha-scattering-chamber-v1.png` and the Year 11 apparatus plates (painted editorial, restrained shading, on transparent ground).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table and AME2020 masses.
2. Confirm the physics of every learner-visible claim: absorption and U-236; the representative split and A/Z balance; atomic masses with balanced electrons (author note b); 173 MeV for this split and about 200 MeV in total (author note c; site note 1); fragment binding energies; the chemical comparison; k and the three regimes; losses and critical mass; moderator physics and "about eighteen collisions" (author note d); control-rod materials; generation time (author note e).
3. Confirm the OPAL facts against ANSTO and WNA (open decision 3): pool depth (about 13 m), five hafnium control rods, 20 MW, light water moderator, no electricity, medical isotopes.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested; confirm no weapon-design detail beyond the conceptual k > 1 description.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Nuclear Fission and Chain Reactions: Controlled vs Uncontrolled | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson14.sa.html

Why can one neutron start a steady reactor in one case and an explosion in another? Follow one uranium-235 fission event, balance it, and calculate the energy released from atomic masses. See why the fragments are more tightly bound, how neutrons multiply generation by generation, what the multiplication factor k means (subcritical, critical, supercritical), why critical mass exists, how a moderator slows neutrons and how control rods hold k at one. Then meet OPAL, Australia's research reactor at Lucas Heights. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"model and explain the process of nuclear fission, including the concepts of controlled and uncontrolled chain reactions, and account for the release of energy in the process (ACSPH033, ACSPH034)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the energy released in an artificial transmutation. Next: why fusion releases energy despite repulsion between nuclei.

#HSCPhysics #Physics #NuclearFission #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 193's science findings are resolved below; needs the Codex error check before plates and voicing. v19 Revision 2 opens on the revised final frame (fission arrow rising up and to the left).
- Revision 1 had no independent review. Next: student learning review (trace from v17 and v16; check that k is defined in plain words before its symbol does work; that "critical" is not heard as "dangerous"; that the 173 against 200 MeV sentence does not confuse (open decision 2); that the moderator's equal-mass reason lands at speech pace), then the physics check and the Codex error check (including the OPAL source check).
- The pinching nucleus, the generation fan, the k bars changing with the dial, the equal-mass bounce and the sliding rods carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 193 findings (`checks/p-y12-m8-v18-learning-review.md`, `checks/p-y12-m8-v18-science-check.md`): 0 blockers, 5 should fix (learning review: none).
- **Should fix, excited U-236 (scene 2).** Resolved: "becomes uranium two thirty-six, which is so unstable it wobbles" becomes "becomes uranium two thirty-six, with so much extra energy that it wobbles"; the label reads "²³⁶U* (excited)" with a tag "extra energy"; author note a.
- **Should fix, k = 1 is an average (scene 7 and the scene 2 tag).** Resolved: "every fission leads to exactly one more" becomes "each fission leads to one more on average"; the k = 1 tag adds "(an average)"; scene 2's tag reads "usually two fragments and 2 or 3 neutrons"; the A2 model answer says "on average".
- **Should fix, k > 1 is not necessarily an explosion (scene 11 and notes).** Resolved: scene 11 now says "In a fast lump with no moderator, each generation takes far less than a millionth of a second" and "That unchecked growth is how a nuclear weapon makes its explosion"; the summary chips read "controlled: k held at 1 (just above 1, briefly, to raise power)" and "uncontrolled: k well above 1, unchecked growth (a weapon's explosion)", with a tag "k > 1 alone ≠ explosion"; scene 10 tags "k just above 1, briefly: power rises, still controlled"; key notes say "k > 1 grows". No device detail added.
- **Should fix, handoff direction (scene 18).** Resolved: "coming down the binding energy curve" becomes "climbing the binding energy curve"; scene 3's and the final frame's fission arrow rise up and to the left. v19's opening frame is repaired to match.
- **Should fix, U-235 mass (AME2020 table).** Resolved: 235.043928 → 235.043930 u (matching v17); reactants 236.052595 u, Δm 0.186024 u (173.28 MeV); A1 Δm 0.198263 u (184.68 MeV); slip 2.215593 u (2063.8 MeV). Spoken rounded figures (236.0526, 0.1860, 0.1983, 173, 185, 2060) are unchanged.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plate in scene 1: the delivered OPAL pool fades in on "chain" as the controlled case; the opening frame (v17's actual final frame, root decision 9) is unchanged. OPAL also carries scene 12 at about 860 px tall and the A2 card.
- Live controls: the k slider with "fissions in generation 10" (7) and the control-rod slider with k and power readouts (10).
- Hand tags and a pen mark in role colours in every teaching scene ("controlled: OPAL, Sydney", "1 in, 2 or 3 out", "extra energy", "fission: up towards the peak", "count all 3 neutrons", "→ heat", "× 2 each generation", "critical = steady, not dangerous", "more surface, more escape", "equal masses: full hand-over", "rods absorb", "k > 1 alone ≠ explosion", "neutrons for medicine").
- Framed answers: the balanced equation (2), E = Δmc² (3), 173 MeV (4), 2 × 10⁷ (5), critical mass (8), k held at 1 (10), the summary chips (11), x = 2 and 185 MeV (15), the k = 1 row (17). New crossed slip: "0.186 × (3.00 × 10⁸)² = 1.67 × 10¹⁶ J" (4); A1 and A2 keep theirs.
- Key notes cut from five long items (about 760 characters) to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s, which also brings the estimate well under the cap.
- Question cards arrive with full text and a picture; answer sides add a givens strip.
- Type sizes stated; colour roles fixed. No set-up runs past about 62 s.

New plate requests: none.

Joins: the opening frame is v17's actual final frame (root decision 9), unchanged. The final frame keeps its content; only the fission arrow's direction is stated as rising up and to the left (brief 193). v19 Revision 2's opening frame matches.

Counts: 6,429 to 6,435 characters (scene sum); about 567 s to about 553 s.
