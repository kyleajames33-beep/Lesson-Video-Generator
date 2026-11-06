# Year 12 Physics M8 V20: Evidence for quarks and new particles. What evidence shows that protons and neutrons have smaller constituents? (design)

Status: Revision 2 (7 Nov 2026): brief 193 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,190 characters, 20 scenes (19 narrated scenes and the notes hold), about 534 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v19's final frame.

Scope: twentieth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that human understanding of matter is still incomplete?". Templates as `phys-y12-m8-v05.md` and `phys-y12-m8-v08.md` (evidence lessons). No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts `work/brief168/module8-lesson16.sa.txt` and `module8-lesson17.sa.txt`, hashes checked against the live files):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson16.sa.html`, SHA256 `0907dc1783c61b1355784fbb85d9c3e35063b593b745498386f99a8e42ef3eda` (matches the route): orient and predict, annihilation and pair production (positron, 1932 cloud chamber in a magnetic field), classify hadrons and leptons (Figure 2 tree; u +2/3, d −1/3; baryons, mesons, leptons), apply the conservation laws, clear the misconceptions ("A pion is a lepton because it is light"), calculate annihilation energies, decide whether an interaction is allowed ("Analyse 7 marks": the evidence that protons and neutrons are not fundamental, eight steps), independent practice, retrieve and reflect.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson17.sa.html`, SHA256 `9b2f7109023ee4217ae4853c676e16b2361db0afdb2a8fae9ac25faba012a824` (matches the route): orient and predict ("What evidence suggested protons and neutrons had internal structure?"), read the quark table (six flavours, charges, confinement, Figure 1 proton and neutron), assemble the Standard Model (v21), clear the misconceptions, verify quark composition, analyse decays ("Analyse 6 marks" quark model accounts for charges; "Compare 6 marks" hadrons and leptons), independent practice, retrieve and reflect (deep inelastic scattering at SLAC, 1967).
- Also read for the history: `lesson19.sa.html` card 1 (SLAC 1967, 20 GeV electrons, "as if they had struck a hard, small object inside the proton"), already read in full for v22; `lesson14.sa.html` retrieve and reflect (pion, 1947, cosmic-ray plates), read in full for v18.

Route entry: `phys-y12-m8-v20`, sections `classify-hadrons-and-leptons`, `retrieve-reflect-and-finish` (lesson 16), `read-the-quark-table`, `retrieve-reflect-and-finish` (lesson 17). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain scattering evidence for internal structure and additional particles, separating observations from a model diagram. Stop before memorising the full catalogue." Next: "phys-y12-m8-v21: How does the Standard Model organise particles and interactions?" Entry knowledge asks that each newly introduced equation is derived before use: no new equation; charge sums are arithmetic; r = mv/(qB) is recalled from m6-v05 and λ = h/p from v12.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; scientists are named in words only; observations (deflection counts, tracks) are coded schematics labelled "schematic, not data", kept on a separate panel from the model diagram (route stop; kit acceptance for `ph-particle-detectors`: "Generated chamber contains no purported historical observation"); the linear accelerator and the cloud chamber are painted plates (new), scaled uniformly, never stretched; quarks are small labelled coded dots inside a dashed boundary marked "model", never painted marbles (kit teaching reason for lesson 17); every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.602 × 10⁻¹⁹ C (data sheet); "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v08 (Geiger-Marsden: rare large deflections reveal a small, concentrated target), v12 (λ = h/p; smaller wavelength resolves smaller detail), m6-v05 (r = mv/(qB); the sense of curving follows the charge's sign), v14 (beta decay n → p + e⁻ + ν̄, the neutrino), v18 (reactors), m7-v16 and v05 (positrons, annihilation), v19 (the strong force).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ5-01`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P8-IQ5-01`: "analyse the evidence that suggests:" "that protons and neutrons are not fundamental particles", "the existence of subatomic particles other than protons, neutrons and electrons"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 64)

**Boundary:** starts on v19's final frame (an enlarged proton with a "?", a v08 thumbnail, an electron aimed at it). Teaches: what "fundamental" would mean (no parts, no size) and so what would count as evidence against it; why a probe needs high energy (wavelength smaller than the proton); deep inelastic scattering at SLAC (1967 to 1968): the observation (far more large-angle scattering than a smooth proton gives), kept separate from the inference (small, hard scattering centres inside); the hadron "zoo" and its patterns; why neutron decay is not evidence of parts (fundamental particles such as the muon also decay), though the quark model describes it (Revision 2, brief 193 blocker); the quark model's two charges (+2/3, −1/3) reproducing the proton (+1) and neutron (0), a constraint, not a fit; quarks never found alone (one sentence); the electron, by contrast, shows no structure; evidence for other particles: the positron's track (direction from a lead plate, then the sense of bending), the muon (1936), the pion (1947), the neutrino (missing energy in beta decay, detected at a reactor in 1956); sorting into hadrons (feel the strong force, made of quarks: baryons of three, mesons of a quark and an antiquark) and leptons (no strong force, no known parts). Stops before the full six-quark and six-lepton table, antiquark charge accounting beyond the pion's name, force carriers and the Standard Model (v21), conservation-law checking (named only), annihilation and pair production calculations (m7-v16, v05 recalled).

## Decisions

- **Learner question (route wording kept).** "What evidence shows that protons and neutrons have smaller constituents?" The answer (Revision 2): two independent lines of evidence. Scattering: high-energy electrons bounce off protons at large angles far more often than a smooth proton allows, as if hitting small hard points inside (3 to 5); patterns: hundreds of related hadrons, as expected from combinations of a few parts (6). Neutron decay is shown as a tempting false test (7): fundamental particles can decay too (the muon), so decay alone does not prove parts, though the quark model describes it as a down quark becoming an up quark. The quark model built on the evidence then accounts for both nucleon charges (8). Second half of the dot point: tracks and missing energy revealed particles beyond protons, neutrons and electrons (10 to 12).
- **Hook (v19's handoff).** 3 s prediction chips for "How could you tell if a proton has parts?": "a better microscope", "fire particles at it", "weigh it carefully". Answer: fire particles at it, as Geiger and Marsden did to atoms (v08).
- **The criterion first (site "Analyse 7 marks" step 1).** "A fundamental particle has no internal structure and no constituents" (site); so evidence against is evidence of parts or of size. Put on screen as a test card that every later line of evidence is checked against.
- **Probe energy (site lesson 19 card 1; v12 recalled).** To resolve detail inside a proton (diameter about 1.7 fm), the probe's wavelength must be smaller. 20 GeV electrons (site): λ = hc/E = 6.2 × 10⁻¹⁷ m, about 27 times smaller than a proton (said "about thirty times"). The relativistic step p ≈ E/c is on screen only, as a tag (author note a). Why electrons: they do not feel the strong force and behave as points, so any structure seen belongs to the target (site step 7).
- **Observation separated from model (route stop).** Two panels. Observation panel: a schematic bar chart "number scattered" against "scattering angle", with a grey "if the proton's charge were smooth" bar falling fast and navy "measured" bars staying high at large angles, labelled "schematic, not data" (no fabricated values). Model panel: a dashed proton boundary with three small dots, labelled "model: small hard parts". The narration says "what they saw" and "what it means" in separate sentences.
- **History (site lessons 17 and 19; named in words).** SLAC and MIT, 1967 to 1968, on a 3 km linear accelerator in California; Friedman, Kendall and Taylor (Nobel Prize 1990) named on screen only. Gell-Mann and Zweig proposed quarks in 1964 (site names Gell-Mann; Zweig added for accuracy, author note b). "The same pattern Rutherford had seen" (site) used as the bridge to v08.
- **Hadron patterns (site step 3).** "Hundreds of hadrons", "regular families with patterns in their charges and masses"; the periodic table analogy (site: "periodicity implies composition, just as it did for the chemical elements") kept in one sentence.
- **Neutron decay (site step 4; v14 recalled; Revision 2, brief 193 blocker).** Revision 1 used the site's "a particle with no internal structure has nothing to rearrange" as a third line of evidence. That claim is false: fundamental particles can transform or decay, and the muon in this same lesson is a fundamental lepton that decays. Scene 7 now presents decay as a tempting test that does not work, crosses the chip "decay proves parts", and keeps the quark-level description (a down quark becomes an up quark) as the model's account, not as evidence. Decay is removed from the evidence test card, the A2 accepted answers and the notes; A2's crossed slip becomes "neutron decay proves it has parts". Site step 4 is logged as a site correction for root.
- **Quark charges (site steps 5, 6; lesson 17 "Analyse 6 marks").** u +2/3, d −1/3; uud = +1, udd = 0; the "constraint, not a fit" point said in plain words: one pair of values fits both. Confinement in one sentence ("pulling quarks apart makes new quarks instead", site lesson 17); colour charge not mentioned (site marks it extension).
- **Electron contrast (site step 7).** No structure seen in the electron, down to about 10⁻¹⁸ m (author note c); "so the test is not saying everything has parts".
- **Other particles (dot point part 2).** Cloud chamber defined in plain words (a chamber of supersaturated vapour where a charged particle leaves a trail of droplets). Positron (1932, cosmic rays, cloud chamber in a magnetic field, site lesson 16): a lead plate across the chamber; a particle slows after crossing it, so its track curves more tightly on that side, which shows the direction of travel; with the direction known, the sense of bending shows positive charge (m6-v05); the thin, long track matched an electron, not a proton (author note d). Muon (1936, cosmic rays): curvature and track suggested about 200 electron masses (207). Pion (1947, cosmic-ray photographic plates on mountains, site lesson 14). Neutrino (v14 recalled): beta electrons come out with a spread of energies, so something unseen was carrying the rest; proposed 1930, detected in 1956 beside a nuclear reactor (v18 link; Cowan and Reines, named on screen). Then accelerators made hundreds more (bridge to the zoo and to v22).
- **Hadrons and leptons (site `classify-hadrons-and-leptons`, Figure 2 tree).** Hadrons: feel the strong force, made of quarks; baryons (three quarks: p, n), mesons (a quark and an antiquark: the pion). Antiquark named in plain words ("the antimatter partner of a quark", m7-v16 recalled for antimatter); its charges are left to v21. Leptons: no strong force, no known parts: electron, muon, neutrinos. The site misconception "a pion is a lepton because it is light" is the A2 crossed mistake's companion (A1).
- **Memory aid (scene 14, new): "Hadrons have parts. Leptons are points."** See "Memory aid check".
- **Antineutrino label (Revision 2, brief 193).** In beta-minus decay and its 1956 reactor detection the escaping particle is labelled "ν̄" (antineutrino); "neutrino" stays as the family name (scene 12 says "Here it's an antineutrino, one of the neutrino family").
- **Attempts (original, HSC style).** A1 (3 marks): "A particle X is made of three up quarks. (a) Calculate its charge. (b) Is it a hadron or a lepton? Justify." Answer +2, hadron (baryon, made of quarks). Crossed: "charge +1, like a proton". (The real particle is the Δ⁺⁺, named in feedback only.) A2 (3 marks, analyse): "Outline two pieces of evidence that protons are not fundamental particles." Crossed: "the electron is also made of quarks" (the contrast fails).
- **Handoff (route next).** A growing list: quarks (two so far), leptons (electron, muon, neutrinos), and their antimatter partners, plus forces between them. "Next: how does the Standard Model organise particles and interactions?". See "Final frame".
- **Colour key (as v05, v08 and v19):** protons rose discs, neutrons grey discs, electrons navy dots, positrons hollow rose rings "e⁺", neutrinos small grey "ν" dots; quarks small labelled dots ("u" amber outline, "d" teal outline) inside a dashed boundary tagged "model"; magnetic field as a cross grid (into the page, m6 convention); tracks ink lines of small dots; observation panels on a pale grey card with "schematic, not data".
- **Colour key (Revision 2, fixed for every scene).** As above; the probe energy and wavelength readouts navy; charges in quark sums amber (u) and teal (d) with the total in ink; ticks green; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the particle or idea they mark (electron and probe tags navy, quark tags amber or teal, model tags grey, positron tags rose).
- **Type sizes (Revision 2, 1080p).** Charge sums and feedback rows at least 44 px (52 px for the sums; framed answers 56 px); live readouts (scene 3 energy, wavelength and ratio) about 52 px; panel, tree and chamber labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The delivered painted linac tunnel `y12p-linac-tunnel-v1.png` (inspected 7 Nov: a long concrete tunnel with a copper accelerating line on stands receding to a vanishing point; no text or people) enters scene 1 on "Fire particles at it" and carries scene 3 and the A2 card. The delivered cloud chamber `y12p-cloud-chamber-v1.png` (inspected 7 Nov: a Wilson-type chamber, glass top over a brass cylinder on a wooden frame with a glass expansion bulb below; no tracks) carries scene 10 at a readable size. The opening frame is v19's coded final frame.
- **Simulation (Revision 2).** The core live control is the probe-energy slider in scene 3: as the energy readout steps 1, 5 and 20 GeV, live readouts (52 px) show λ = hc/E (1.24 × 10⁻¹⁵, 2.48 × 10⁻¹⁶, 6.2 × 10⁻¹⁷ m) and "proton diameter ÷ λ" (1.4, 6.9, 27), while the wave across the proton disc shortens. The track chamber (10) is the other live element, with r following r = mv/(qB) through the plate.
- **Board stages (Revision 2).** No continued set-up runs past about 64 s (the chamber into the discovery cards, 10 to 11); every stage opens with its main picture solid.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: three amber "u" dots inside a dashed boundary tagged "X (model)"; A2: the painted linac tunnel above a proton disc with a "?"). On the answer side the card shrinks to the top, a givens strip lists the data or the command, the picture stays, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 16 `classify-hadrons-and-leptons` (Figure 2 tree, definitions, u and d charges) (8, 13); "Analyse 7 marks" (criterion; scattering; hadron count and patterns; neutron decay; quark model and charges; electron contrast) (2 to 9, A2); `annihilation-and-pair-production` (positron history) (10); `clear-the-misconceptions` (pion is not a lepton) (13, A1). Lesson 17 `read-the-quark-table` (u, d, charges, confinement, proton and neutron figure) (8); "Analyse 6 marks" (constraint, not a fit; integer charges) (8); "Compare 6 marks" (hadrons against leptons) (13); retrieve and reflect (SLAC 1967; Gell-Mann 1964) (4, 8). Lesson 19 card 1 (20 GeV, "hard, small object", the Rutherford comparison) (3, 4). Not used: the six-quark table, generations and Higgs (v21); conservation laws (named only); annihilation energy calculations (m7-v16).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. History (lesson 17 orient): "The quark model proposed by Murray Gell-Mann at Caltech in 1964". Correct but incomplete: George Zweig proposed the same model independently in 1964 (his "aces"). Suggest "proposed independently by Murray Gell-Mann and George Zweig in 1964".
  2. Deep inelastic scattering (lesson 17 retrieve): "hard scattering centres inconsistent with a uniform charge distribution, exactly as quark confinement predicts". The 1967 to 1968 results showed point-like constituents (scaling); they do not demonstrate confinement, which explains why quarks are not seen free. Suggest "exactly as the quark model predicts".
  3. Detector history (lesson 16 card 1): "placed a Wilson cloud chamber in a 1.5 T magnetic field". Anderson's 1933 paper reports a field of about 15,000 gauss (1.5 T); correct, kept for the check list. His direction argument used a 6 mm lead plate (site omits); the video adds it, as the kit's acceptance criterion requires.
  5. Evidence error (lesson 16 "Analyse 7 marks" step 4; Revision 2, brief 193 blocker): "a particle with no internal structure has nothing to rearrange". False: fundamental particles decay (the muon). Suggest removing decay from the evidence list, or stating that the quark model describes neutron decay as d → u without making decay itself the evidence.
  4. Checked and correct: u +2/3, d −1/3; uud = +1, udd = 0; "hundreds of hadrons"; electron shows no structure; 20 GeV at SLAC (1967 experiments ran at up to about 20 GeV); pion 1947 by cosmic-ray plates.
- **Cause chain taught, in order:** (1) fundamental means no parts and no size, so evidence of either counts against it (2); (2) seeing inside needs a wavelength smaller than the proton, so very high-energy electrons (3); (3) they scattered at large angles far more often than a smooth proton allows (4); (4) so the proton contains small, hard parts (5); (5) hundreds of related hadrons fit combinations of a few parts (6); (6) neutron decay does not count as evidence, because fundamental particles also decay, though the quark model describes it (7); (7) two quark charges fit both nucleons, so the model is constrained (8); (8) the electron passes the same test as a point (9); (9) tracks in a magnetic field and missing energy revealed new particles: positron, muon, pion, neutrino (10 to 12); (10) particles sort into hadrons with parts and leptons without (13).
- **Entry knowledge (route `entryKnowledge`):** v19 (the strong force); v08 (rare large deflections); v12 (λ = h/p); m6-v05 (r = mv/qB, sense of curving); v14 (beta decay, neutrino); m7-v16 (positron, antimatter).
- **Learner-visible vocabulary (plain meaning at first use):** fundamental particle (no parts, no size, 2); scattering (bouncing particles off a target to learn its structure, 3); constituent (a part something is made of, 2); hadron (a particle that feels the strong force, made of quarks, 6, 13); quark (8); baryon, meson, antiquark (13); lepton (no strong force, no known parts, 13); cloud chamber (10); positron (recalled, 10); muon, pion (11); neutrino (recalled, 12).
- **Legacy logic ported:** none. `m8-rutherford` supplies the v08 thumbnail and the bridge (1, 4); `m8-particles` supplies the proton and neutron charge sums (8), within its limits ("No literal quark or photon sizes").
- **New explainer motion:** **evidence test card** (a card "fundamental? no parts, no size" with tick boxes that fill as each line of evidence arrives, 2 to 9); **wavelength comparison** (a proton disc with a wave whose wavelength shrinks as the energy readout rises, until it fits many times across the disc); **observation panel and model panel** (side by side, the observation drawn first; the model draws only after "what it means"); **hadron pattern grid** (dots appearing year by year, then sorting into regular hexagonal families, positions schematic); **identity change** (a neutron disc opening to show "udd", one d flipping to u, the disc relabelling "p", e⁻ and ν̄ leaving; shown as the model's account, with the "decay proves parts" chip crossed); **probe-energy slider** (live E, λ and ratio readouts, 3); **charge sum** (`m8-particles`); **track chamber** (a coded chamber with a cross grid and a lead plate; a dotted track drawing through, tighter after the plate, with direction and bending arrows); **energy spread** (a bar chart of beta electron energies, schematic, with a "missing" band); **classification tree** (site Figure 2 redrawn, filling branch by branch); `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 15 and 17); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the evidence test card small at the top right from scene 2 to 9; the evidence view in the centre; observation panel left, model panel right in scenes 4 and 5; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) λ = h/p with p ≈ E/c for an electron at 20 GeV (γ ≈ 39,000): λ = hc/E = 6.626 × 10⁻³⁴ × 3.00 × 10⁸ / (20 × 10⁹ × 1.602 × 10⁻¹⁹) = 6.20 × 10⁻¹⁷ m. Proton charge radius 0.84 fm, diameter about 1.7 fm; ratio 27. In deep inelastic scattering the resolution is set by the momentum transfer, not the beam energy alone; "small enough wavelength" is the syllabus-level statement.
  (b) Quark model: Gell-Mann (1964, "quarks") and Zweig (1964, "aces"), independently. SLAC-MIT deep inelastic scattering experiments began in 1967; the scaling results that implied point-like constituents were reported in 1968 to 1969. Friedman, Kendall and Taylor shared the 1990 Nobel Prize. Earlier, elastic electron scattering (Hofstadter, 1950s) showed the proton has a finite size; not narrated.
  (c) Electron compositeness limits from LEP and later: no structure down to about 10⁻¹⁸ m; the narration says "no structure at all, as far as anyone has measured".
  (d) Anderson 1932 (published 1933): cloud chamber in about 1.5 T with a 6 mm lead plate; the track's curvature was greater above the plate, so the particle travelled upwards and lost energy in the lead; its bending then showed positive charge; its range after the plate was far longer than a proton of that momentum could travel, so its mass was much less than a proton's, consistent with an electron's. The narration says "the trail looked like an electron's".
  (e) Muon: Anderson and Neddermeyer, 1936 to 1937; 105.7 MeV/c² = 207 m_e. Pion: Lattes, Occhialini and Powell, 1947, photographic emulsions exposed at high altitude (Pic du Midi and Chacaltaya, Bolivia). Neutrino: proposed by Pauli, 1930; detected by Cowan and Reines, 1956, with antineutrinos from the Savannah River reactor (USA).
  (f) Neutron magnetic moment (−1.91 nuclear magnetons) is further evidence of internal moving charge in a neutral particle; not narrated (not in the site).
  (h) Decay is not a test of compositeness (Revision 2, brief 193 blocker): the muon is a fundamental lepton that decays (μ⁻ → e⁻ + ν̄_e + ν_μ, mean life 2.2 μs; DOE and PDG accounts). Neutron decay is described in the quark model as d → u with a W boson (v21), which is a model of the decay, not independent evidence that decay requires constituents. Site step 4 ("a particle with no internal structure has nothing to rearrange") is logged as a site correction for root.
  (g) Pronunciations: "hadron" as "had-ron", "lepton", "baryon" as "barry-on", "meson" as "mee-zon", "muon" as "mew-on", "pion" as "pie-on", "SLAC" as "slack".
- **Open decisions for root:**
  - **1. Observation panel (science check).** The scattering and beta-energy panels are schematic shapes with no values, labelled "schematic, not data". Confirm, or replace with a published figure (needs permission and provenance).
  - **2. Baryon and meson here or in v21 (learning review).** Named here (scene 13) because the pion's discovery raises the question; v21 then adds antiquark charges and the full table. Confirm the split avoids double teaching.
  - **3. New plates `y12p-linac-tunnel-v1` and `y12p-cloud-chamber-v1` (Codex).** Closed: both delivered in brief 193 and inspected 7 Nov.
  - **4. Site notes 1 to 3 and 5** for the site log (5 is the decay-as-evidence error behind the brief 193 blocker).

Main question: *Protons and neutrons were once the smallest parts of the nucleus. What evidence shows they are made of something smaller, and that other particles exist too?*
Entry knowledge: alpha scattering (v08); de Broglie wavelength (v12); circles in a magnetic field (m6-v05); beta decay and the neutrino (v14); the strong force (v19).
Stops after: three lines of evidence, the quark charges, the electron contrast, the positron, muon, pion and neutrino, and the hadron and lepton families. No full table, no forces.
Handoff: v21, how the Standard Model organises particles and interactions.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *λ*, *h*, *p*, *r*, *m*, *v*, *q*, *B*.

### 1. hook (does a proton have parts?)
> We've treated protons and neutrons as solid little balls. But are they fundamental, or made of something smaller? How could you even tell, for something this small? Make your **prediction**. Fire particles at it, just as alpha particles were fired at gold to find the nucleus. So what evidence shows that protons and neutrons have smaller **constituents**?

Visual: opens on v19's final frame (see "Opening frame"); the helium cluster fades, the enlarged proton with "?" stays at the centre. On "solid little balls" the proton outline thickens. On "prediction" a 3 s `Countdown` beside chips "a better microscope", "fire particles at it", "weigh it carefully". On "Fire particles at it" the second chip ticks, the v08 thumbnail pulses, and the painted linac tunnel `y12p-linac-tunnel-v1.png` slides in along the bottom (solid, about 760 px wide, 380 px tall), navy hand tag "fire electrons at it" with a navy pen arrow from the tunnel to the proton. On "constituents" the chip becomes the heading: "What evidence shows that protons and neutrons have smaller constituents?".

### 2. what would count as evidence?
> First, what would fundamental mean? A fundamental particle has no parts, and no size at all, as far as we can tell. So evidence against it would show either parts inside, or a size and a shape. Keep that test in mind, because every piece of evidence today is checked against **it**.

Visual: board change (a new set-up, solid from the first frame): the evidence test card at the centre (about 900 px wide): "Fundamental? → no parts, no size"; the enlarged proton with "?" stays at the left. On "no parts, and no size at all" two tick boxes "parts inside?" and "size and shape?". On "evidence against it" the boxes turn into question marks. On "it" ink hand tag "the test" with an ink pen bracket round the two boxes; the card shrinks to the top right, where it stays to scene 9.

### 3. a probe small enough
> To see inside something, your probe needs a wavelength smaller than it. Remember, wavelength is h over p, so more momentum means a shorter wavelength. In the late nineteen sixties, a three kilometre linear accelerator in California fired electrons at protons with twenty billion electron volts of energy. Their wavelength was about thirty times smaller than a **proton**. Electrons were a good choice, because they don't feel the strong force, and they behave like points, so any structure they reveal belongs to the **target**.

Visual: board change (a new set-up, solid from the first frame): the painted linear accelerator tunnel `y12p-linac-tunnel-v1.png` (about 1100 px wide, 550 px tall, below native size) across the top half; caption "SLAC linear accelerator, California (3 km): illustration"; below it the proton disc (about 360 px) with the live energy slider and readouts (52 px) "E", "λ", "proton ÷ λ". On "wavelength is h over p" chip "λ = h/p (v12): more momentum → shorter wavelength". On "twenty billion electron volts" the energy slider steps "E = 1 GeV: λ = 1.24 × 10⁻¹⁵ m, ratio 1.4", "5 GeV: 2.48 × 10⁻¹⁶ m, 6.9", "20 GeV: 6.2 × 10⁻¹⁷ m, 27" while a navy electron dot races down the tunnel; navy hand tag "more energy → shorter λ". On "proton" the wavelength comparison: a proton disc (diameter "≈ 1.7 × 10⁻¹⁵ m") with a wave whose wavelength shrinks as the readout rises, ending at "λ ≈ 6 × 10⁻¹⁷ m (about 30 × smaller)" in a dark-ink frame, small grey tag "at this energy p ≈ E/c"; navy pen ring round the many wavelengths that fit across the disc. On "target" chip "electron: no strong force, point-like → a clean probe".

### 4. what they saw
> Here's what they saw. Most electrons were deflected only a little. But far more of them bounced off at large angles than a smooth proton could ever **produce**. It was the same surprise as alpha particles bouncing back from gold, one level **deeper**.

Visual: board change to two panels. Left, the observation panel (pale grey card, "schematic, not data"): a bar chart, x "scattering angle", y "number scattered". On "Most electrons were deflected only a little" tall navy bars at small angles. On "produce" grey outline bars "if the proton's charge were smooth" fall quickly to almost nothing at large angles, while navy "measured" bars stay well above them; navy hand tag "many more large-angle scatters" with a navy pen bracket on the gap between measured and smooth bars. On "deeper" the v08 thumbnail slides in beside the chart with its rare backward path, tag "v08: atom → nucleus"; the right panel stays empty, headed "what it means?".

### 5. what it means
> Now what it means. A smooth, spread-out proton can only nudge an electron gently. Hard, large-angle bounces mean the electron hit something small and concentrated inside the proton. The pattern fitted a proton containing a few tiny, point-like parts. So the proton has parts, and the first box on our test is **ticked**.

Visual: the right panel, headed "model", draws: a dashed proton boundary. On "A smooth, spread-out proton can only nudge" a pale uniform fill with a navy path bending gently. On "something small and concentrated inside" the fill fades and small dots appear inside, a navy path bouncing sharply off one. On "a few tiny, point-like parts" three small dots, grey hand tag "model: small hard parts (not a photograph)" with a grey pen ring round the three dots. On "ticked" the test card's "parts inside?" box ticks "✓ scattering".

### 6. too many particles
> The second clue came from numbers. By the nineteen sixties, experiments had found hundreds of particles that feel the strong force, called hadrons. Hundreds is far too many to all be fundamental. And they fell into neat families, with patterns in their charges and masses. Remember the periodic table. Its patterns came from atoms being built from a few parts. These patterns pointed the same **way**.

Visual: board change to the hadron pattern grid (a new set-up, solid from the first frame, the first dots already in place): dots appear in bursts with year labels "1950", "1955", "1960", "1965", a counter climbing "→ hundreds". On "called hadrons" chip "hadron: feels the strong force". On "neat families" the dots slide into regular hexagonal groupings (positions schematic), tag "families with patterns in charge and mass". On "Remember the periodic table" a small periodic-table outline beside it, tag "patterns → built from a few parts". On "way" the test card's "parts inside?" box adds "✓ patterns"; teal hand tag "few parts, many combinations" with a teal pen ring round one family.

### 7. a neutron that changes
> Here's a tempting third clue that doesn't work. A free neutron decays into a proton, an electron and an antineutrino. But decay alone can't prove parts, because some fundamental particles decay too, like the muon you'll meet soon. Still, the quark model describes neutron decay neatly. One of its quarks changes **type**.

Visual: board change (a new set-up, solid from the first frame): a grey neutron disc (about 360 px) at the centre. On "decays into a proton, an electron and an antineutrino" the identity change: equation "n → p + e⁻ + ν̄" builds; a navy e⁻ dot and a grey "ν̄" dot leave; the disc turns rose and relabels "p". On "decay alone can't prove parts" a chip "decay proves parts" fades in and is crossed in red, red hand tag "fundamental particles can decay too"; a small grey preview tag "μ (muon): decays, no known parts" with a red pen arrow to the crossed chip. On "type" the disc opens (dashed, "model") to show "u d d", one "d" flipping to "u", now "u u d"; grey hand tag "model's account, not evidence", tag "d → u (more in the next video)". The test card gains no tick (Revision 2, brief 193 blocker).

### 8. the quark model
> In nineteen sixty-four, Murray Gell-Mann and George Zweig proposed that hadrons are made of quarks. The up quark has a charge of plus two thirds, and the down quark has minus one third. A proton is up, up, down. Two thirds plus two thirds minus one third is plus **one**. A neutron is up, down, down, which gives zero. One pair of values fits both nucleons, so the model isn't just fitted to one **result**. Quarks have never been found alone. Pull them apart, and the energy makes new quarks **instead**.

Visual: board change to `m8-particles` charge sums (solid from the first frame): two dashed boundaries "proton" and "neutron", each tagged "model". On "The up quark has a charge of plus two thirds" chip "u: +⅔e"; on "minus one third" chip "d: −⅓e". On "A proton is up, up, down" three dots "u u d"; on "one" the sum "+⅔ + ⅔ − ⅓ = +1" (52 px) sits in a dark-ink frame and ticks green against "proton: +1 (measured)". On "which gives zero" "u d d: +⅔ − ⅓ − ⅓ = 0" (52 px) in a dark-ink frame ticks against "neutron: 0 (measured)"; amber and teal pen rings round the u and d chips. On "result" ink hand tag "same two values fit both: a constraint, not a fit". On "instead" a small animation: two quark dots pulled apart, a new pair appearing between them, tag "confinement: quarks are never seen alone".

### 9. the same test on an electron
> Here's an important contrast. Fire the same kind of probe at an electron, and it shows no structure at all, as far as anyone has measured. It still behaves like a point. So the evidence doesn't say everything has parts. It separates protons and neutrons, which do, from electrons, which **don't**.

Visual: board change (a new set-up, solid from the first frame): the test card enlarges to two columns, "proton" (two ticks: scattering, patterns) and "electron". On "shows no structure at all" the electron column's boxes stay empty, tag "point-like below 10⁻¹⁸ m". On "don't" the columns label "composite" and "fundamental (as far as we know)" in dark-ink frames, navy hand tag "same test, different answer"; the card shrinks away.

### 10. a track that bent the wrong way
> Now the second half of the question. What evidence showed other particles exist? In nineteen thirty-two, cosmic rays passed through a cloud chamber, a box of vapour where a charged particle leaves a trail of droplets, inside a magnetic field. A lead plate across the middle slowed particles down, and a slower particle curves more tightly. So the tighter side showed which way it was **travelling**. Knowing the direction, the way it bent meant positive charge. But the trail looked like an electron's. It was the positron, the electron's antimatter **partner**.

Visual: board change (a new set-up, solid from the first frame): the painted cloud chamber `y12p-cloud-chamber-v1.png` at the left (about 440 px tall, below native size); at the centre the coded track chamber (about 760 px, cross grid "B into page", a grey lead plate across the middle), labelled "schematic", joined to the plate's glass top by a grey pen arrow. On "a trail of droplets" a dotted ink track draws across the lower half. On "A lead plate across the middle slowed particles down" the track continues through the plate with a tighter curve above it, tag "slower → smaller r (r = mv/qB, m6)". On "travelling" a direction arrow on the track pointing upwards, rose hand tag "slowed by the lead: so it went up". On "the way it bent meant positive charge" a force arrow towards the centre and a chip "bends like a positive charge". On "the trail looked like an electron's" a comparison inset: a short thick "proton-like" track crossed, a long thin "electron-like" track ticked. On "partner" label "e⁺ (positron), 1932" in a dark-ink frame, a hollow rose ring.

### 11. heavier cousins
> More surprises followed. In nineteen thirty-six, cosmic-ray tracks revealed a particle like an electron, but about two hundred times heavier, the muon. In nineteen forty-seven, photographic plates carried up mountains caught the pion. Then accelerators began making new particles by the hundred.

Visual: camera continue: the chamber shrinks to the left and a row of "discovery cards" fills the frame, each a small coded track sketch labelled "schematic"; grey hand tag "cosmic rays first". On "about two hundred times heavier" card "μ (muon), 1936: charge −e, ≈ 207 m_e", with a small line "decays in about 2 μs, yet no known parts" (Revision 2: links to scene 7). On "caught the pion" card "π (pion), 1947: cosmic rays, mountain-top plates". On "by the hundred" the hadron grid from scene 6 returns small behind the cards, tag "accelerators (next videos)".

### 12. the particle no one could see
> And one particle was found by what was missing. In beta decay, the electrons come out with a spread of energies, not one fixed value. Energy seemed to vanish. In nineteen thirty, it was proposed that an unseen, neutral particle carried the rest. Here it's an antineutrino, one of the neutrino family. It was finally detected in nineteen fifty-six, right beside a nuclear **reactor**, where enormous numbers of them pour out.

Visual: board change to the energy spread (a new set-up, solid from the first frame): a schematic bar chart "number of β electrons" against "electron energy", a smooth hump ending at a dashed line "total energy available", labelled "schematic, not data". On "a spread of energies, not one fixed value" the hump draws; a single tall dashed bar "expected if only two products" crossed. On "Energy seemed to vanish" the gap between each bar and the dashed line shades, tag "missing energy". On "an antineutrino" a grey "ν̄" dot leaving each decay, grey hand tag "ν̄: neutral, almost never interacts", small tag "neutrino family". On "reactor" a small coded reactor core (from v18) with grey ν̄ dots streaming out to a tank, framed tag "ν̄ detected 1956 (Cowan and Reines)", grey pen arrow along the stream.

### 13. two families
> So particles sort into two families. Hadrons feel the strong force, and they're made of quarks. Baryons, like protons and neutrons, have three quarks. Mesons, like the pion, have a quark and an antiquark, the antimatter partner of a quark. Leptons don't feel the strong force, and they have no known parts. The electron, the muon and the neutrinos are leptons. A pion is light, but it's still a **hadron**.

Visual: board change to the classification tree (site Figure 2 redrawn; a new set-up, solid from the first frame with its root and empty branches): root "particles". On "Hadrons feel the strong force" branch "hadrons: strong force, made of quarks". On "Baryons, like protons and neutrons" sub-branch "baryons: 3 quarks (p = uud, n = udd)". On "Mesons, like the pion" sub-branch "mesons: quark + antiquark (π)". On "Leptons don't feel the strong force" branch "leptons: no strong force, no known parts". On "The electron, the muon and the neutrinos" leaves "e⁻, μ⁻, ν", navy pen ring round the lepton branch. On "hadron" a chip "pion = lepton, because it's light" fades in and is crossed in red (red hand tag "classify by parts and forces, not mass").

### 14. a way to remember
> Here's a way to remember the split. Hadrons have parts. Leptons are **points**.

Visual: the tree small. On "Hadrons have parts" the hadron branch pulses with quark dots; on "points" the lepton branch pulses with single dots; the line writes large as the framed memory card (hand lettering, 52 px; reused on the notes screen): "Hadrons have parts. Leptons are points." Hold about 2 seconds.

### 15. attempt 1 (countdown, 10 seconds)
> Your turn. A particle is made of three up quarks. Calculate its charge, and decide whether it's a hadron or a lepton, with a reason. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A particle X is made of three up quarks (uuu). The up quark has charge +⅔e. (a) Calculate the charge of X. (b) State whether X is a hadron or a lepton, and justify your answer. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 260 px): three amber "u" dots inside a dashed boundary tagged "X (model)". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 1 (brief)
> Three times plus two thirds is plus **two**. It's a hadron, because it's made of quarks, a baryon with three. It's a real particle, called the delta plus plus. The slip is saying plus one, like a **proton**.

Visual: card shrinks to the top; "three up quarks" underlines; givens strip "u: +⅔e; X = uuu"; the picture stays at the right. On "two" "3 × (+⅔e) = +2e" in a dark-ink frame (56 px). On "a baryon with three" row "made of quarks → hadron (3 quarks: baryon)". On "delta plus plus" tag "Δ⁺⁺". On "proton" a chip "charge +1, like every baryon" fades in and is crossed in red (red hand tag "add the quark charges"). Hold about 1 second.

### 17. attempt 2 (countdown, 10 seconds)
> Last one. Outline two pieces of evidence that protons are not fundamental particles. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Outline TWO pieces of evidence that protons are not fundamental particles. (3 marks)" The card arrives with its full text and picture in one move (question text 36 px). Picture (about 280 px): the painted linac tunnel above a proton disc with a "?". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 18. feedback 2 (brief)
> First, high-energy electrons scatter off protons at large angles far more often than a smooth proton allows, so there are small hard parts **inside**. Second, hundreds of hadrons fall into patterns, as expected from combinations of a few **parts**. The quark charges then fit both nucleons. The slip is using neutron decay as proof. Fundamental particles like the muon decay too, so decay alone doesn't settle **it**.

Visual: card shrinks to the top; "TWO" and "not fundamental" underline; the picture stays at the right. On "inside" row "1. scattering: many large-angle scatters → small hard parts" in a dark-ink frame (44 px). On "parts" row "2. patterns: hundreds of hadrons in families" in a dark-ink frame. On "The quark charges then fit both nucleons" a small grey row "supported by: uud = +1, udd = 0". On "it" a chip "neutron decay proves it has parts" fades in and is crossed in red (red hand tag "muons decay too"). Hold about 1 second.

### 19. handoff
> So now there are quarks, up and down so far. There are leptons, like the electron, the muon and the neutrinos. Every one of them has an antimatter partner. And there are forces acting between them all. That's a lot to keep track of. So how does the Standard Model organise particles and **interactions**?

Visual: board clears (camera change) to an organising board: at the left a small column "quarks" with "u" and "d" filled and four dashed empty slots; beside it a column "leptons" with "e⁻", "μ⁻", "ν" filled and three dashed empty slots; a thin row "antimatter partners" with a mirror icon; at the right an empty column "forces?" with four dashed slots. On "up and down so far" the dashed quark slots pulse "?". On "an antimatter partner" the mirror row lights. On "forces acting between them all" the forces column pulses. On "interactions" chip "Next: how does the Standard Model organise particles and interactions?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 20. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Scattering: many large-angle scatters → hard parts.
2. Patterns: hundreds of hadrons in families.
3. Quarks: u +⅔, d −⅓; uud = +1, udd = 0.
4. New particles: e⁺, μ, π, ν̄ (tracks, missing energy).
5. Decay alone doesn't prove parts.

Memory aid (framed card under the notes, hand lettering as in scene 14): *Hadrons have parts. Leptons are points.* Notes in the role colours, 34 px; about 240 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why high energy: short wavelength resolves small detail (3). Why large-angle scattering means parts: a smooth charge can only nudge (5). Why many hadrons suggest parts: combinations of a few (6). Why decay is not evidence: fundamental particles also decay (7). Why the quark charges are convincing: one pair fits two particles (8). Why the positron is positive: direction from the plate, then the bending (10). Why the neutrino was proposed: energy seemed to vanish (12).
- **Misconceptions addressed:** a model diagram is a photograph (5: "model" tags; observation and model on separate panels); decay proves parts (7, 18 crossed; Revision 2); everything has parts (9); a pion is a lepton because it is light (13 crossed); "baryons are always +1" (16 crossed); electrons have quarks (9); curvature alone gives the sign (10: direction first).
- **One idea at a time:** criterion (2), probe (3), observation (4), meaning (5), patterns (6), the decay trap (7), model (8), contrast (9), positron (10), muon and pion (11), neutrino (12), families (13).
- **Video makes it easier:** the shrinking wavelength across the proton (3); the measured bars staying above the smooth-proton bars (4); the model panel drawing only after the observation (5); hadron dots snapping into families (6); a d flipping to u (7); the track tightening after the lead plate (10); the missing-energy gap (12); the tree filling (13).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 15 s and 30 s.
- **Avoided double teaching:** Geiger-Marsden (v08), λ = h/p (v12), r = mv/qB (m6-v05), beta decay and neutrino (v14), positron and antimatter (m7-v16), the strong force (v19), reactors (v18) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ5-01`: protons and neutrons not fundamental (2 to 9, A1, A2); other subatomic particles (10 to 13).
- **Out of scope by design:** the full quark and lepton table, generations, antiquark charges, forces and carriers, the Higgs (v21); accelerator operation and detectors (v22); conservation laws beyond charge (named only); colour charge.

## Practice questions and model answers

**Attempt 1 (scene 15; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A particle X is made of three up quarks (uuu). The up quark has charge +⅔e. (a) Calculate the charge of X. (b) State whether X is a hadron or a lepton, and justify your answer."
Model answer: (a) 3 × (+⅔e) = +2e. (b) X is a hadron (a baryon) because it is made of quarks (three of them), so it experiences the strong force; leptons are not made of quarks. (X is the Δ⁺⁺.) Classic mistake (crossed): "charge +1, like every baryon".

**Attempt 2 (scene 17; original wording, HSC style, 3 marks).** "Outline TWO pieces of evidence that protons are not fundamental particles."
Model answer (two, each with its inference; Revision 2): High-energy electrons scattered from protons are deflected through large angles far more often than expected for a proton with smoothly spread charge, showing the proton contains small, hard, point-like constituents. Hundreds of hadrons have been discovered and fall into regular families with patterns in charge and mass, as expected from combinations of a few constituents. (The quark model built on this evidence then accounts for both nucleon charges, uud = +1 and udd = 0.) Not accepted: neutron decay alone, because fundamental particles such as the muon also decay. Classic mistake (crossed): "neutron decay proves it has parts".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; e = 1.602 × 10⁻¹⁹ C | 3 |
| Probe | 20 GeV; λ = hc/E = 6.20 × 10⁻¹⁷ m; proton diameter ≈ 1.7 × 10⁻¹⁵ m; ratio 27 ("about 30") | 3 |
| Probe slider (Revision 2) | 1, 5, 20 GeV: λ = 1.241 × 10⁻¹⁵, 2.482 × 10⁻¹⁶, 6.204 × 10⁻¹⁷ m; 1.7 fm ÷ λ = 1.37, 6.85, 27.4 | 3 |
| Muon lifetime (Revision 2) | mean life 2.2 μs (screen "about 2 μs") | 7, 11 |
| SLAC | 3 km linac (site "3 km"; 3.2 km in the site's reflect section); 1967 to 1968 | 3, 4 |
| Quark charges | u +⅔, d −⅓; uud +1; udd 0; uuu +2 | 8, 15, 16 |
| Electron limit | point-like below about 10⁻¹⁸ m (author note c) | 9 |
| Positron | 1932; about 1.5 T; 6 mm lead plate (author note d) | 10 |
| Muon | 1936; 105.7 / 0.511 = 207 electron masses | 11 |
| Pion | 1947 | 11 |
| Neutrino | proposed 1930; detected 1956 | 12 |
| Quark model | 1964 | 8 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad folder `m8v18-22`); Codex to re-check.

- λ = 6.626e-34 × 3.00e8 / (20e9 × 1.602e-19) = 6.204e-17 m; 1.7e-15 / 6.204e-17 = 27.4.
- 2/3 + 2/3 − 1/3 = 1; 2/3 − 1/3 − 1/3 = 0; 3 × 2/3 = 2.
- 105.7 / 0.511 = 206.8.
- Revision 2 (Python, 7 Nov): 6.626e-34 × 3.00e8 / (E × 1.602e-19) for E = 1e9, 5e9, 20e9 eV: 1.2408e-15, 2.4816e-16, 6.204e-17 m; 1.7e-15 divided by each: 1.37, 6.85, 27.4.
- Dates to confirm: 1932 positron; 1936 muon; 1947 pion; 1930 neutrino proposal; 1956 detection; 1964 quark model; 1967 to 1968 SLAC-MIT; 1990 Nobel Prize.

## Memory aid check

- **"Hadrons have parts. Leptons are points."** (Unchanged in Revision 2; it does not rely on decay.) Meaning, as said in scenes 13 and 14: hadrons are composite (made of quarks); leptons have no known internal structure. Assumptions checked: "parts" means quark constituents (baryons three, mesons a quark and an antiquark); "points" means no structure found down to about 10⁻¹⁸ m, not a proven zero size (scene 9 says "as far as anyone has measured"); the aid does not use mass, so it avoids the site's "pion is a lepton because it is light" trap (the tau lepton is heavier than a proton). The strong-force criterion is the companion: hadrons feel it, leptons do not. It helps a new case: A1 (uuu has parts, so a hadron) and any classification question. Introduced after the explanation (13).
- **Considered, not used:** "Hadrons are heavy, leptons are light" (the Greek roots suggest it, but it is false for the tau and the pion, and the site names it as a misconception).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,190 characters**, 20 scene headings (19 narrated scenes and the notes hold). Characters per scene (1 to 20): 348, 278, 520, 243, 316, 397, 317, 493, 293, 554, 295, 420, 402, 75, 154, 199, 106, 405, 300, 75. At 13.3 characters per second the speech is about 465 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the probe slider runs under its narration): **about 534 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,110 characters, about 543 s. Reserve trims if the voiced take runs long: scene 6's periodic table sentences; scene 11's last sentence; scene 12's last clause.

## Opening frame

v19's final frame (`phys-y12-m8-v19.md`, "Final frame"): paper background; heading "Why can fusion release energy despite repulsion between nuclei?"; at the centre-left a ⁴He cluster with navy springs; one rose proton disc lifted out and enlarged to the right half of the frame with a "?" inside; at the far left a small thumbnail of v08's gold-foil scattering with one large-angle path highlighted, tag "v08: probing an atom found the nucleus"; a dashed arrow from a small navy electron dot aimed at the enlarged proton, tag "probe a proton?"; chip "Next: what evidence shows that protons and neutrons have smaller constituents?". Scene 1 fades the helium cluster and turns the chip into the heading; the proton, thumbnail and electron stay.

## Final frame

The last explained frame (end of scene 19, before the key-notes board): paper background; heading "What evidence shows that protons and neutrons have smaller constituents?"; an organising board: at the left a column headed "quarks" with "u (+⅔)" and "d (−⅓)" filled and four dashed empty slots marked "?"; beside it a column headed "leptons" with "e⁻", "μ⁻" and "ν" filled and three dashed empty slots; under both a thin row "antimatter partners" with a small mirror icon; at the right an empty column headed "forces?" with four dashed slots; chip "Next: how does the Standard Model organise particles and interactions?". v21 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v20` (route phys-y12-m8-v20). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v20` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v20` (root to confirm).

In order (kebab-case; 20 scene headings, all `### N.`): hook, criterion, probe, observation, inference, hadron-patterns, neutron-change, quark-charges, electron-contrast, positron-track, muon-pion, neutrino, two-families, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v21, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: evidence test card, wavelength comparison, observation and model panels, hadron pattern grid, identity change, track chamber, energy spread, classification tree, `m8-rutherford`, `m8-particles`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the plate; 3 to 4 clear change to panels; 4 to 5 camera continue (right panel fills); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 clear change to the charge sums (Revision 2); 8 to 9 clear change; 9 to 10 clear change to the chamber; 10 to 11 camera continue (chamber shrinks, cards fill); 11 to 12 clear change; 12 to 13 clear change to the tree; 13 to 14 camera continue; attempts and feedback card shrink to the top; 18 to 19 clear change; 19 to 20 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v20-learning-review.md`, `science_check` = `checks/p-y12-m8-v20-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched; inspected 7 Nov; delivered in brief 193):
- `public/assets/physics/y12p-linac-tunnel-v1.png` (1774 × 887, RGBA; a concrete tunnel with a copper accelerating line on stands receding to a vanishing point, edges fading to transparency): 1, 3, 17, 18.
- `public/assets/physics/y12p-cloud-chamber-v1.png` (1448 × 1086, RGBA; a Wilson-type chamber, glass top over a brass cylinder on a red-brown wooden frame, a glass bulb below; no tracks): 10.
- **Checked, not used:** `y12p-crt-tube-v1.png` (m8-v07's electron source; a linac is the right object here), `y12p-alpha-scattering-chamber-v1.png` (the v08 thumbnail is coded `m8-rutherford`, which is lighter at thumbnail size).

Need (new plates): none. (Revision 1's linac tunnel and cloud chamber requests were delivered in brief 193.)

Coded: test card, wavelength comparison, observation and model panels, hadron grid, periodic-table outline, identity change, charge sums, track chamber, lead plate and tracks, discovery cards, energy spread, reactor core, classification tree, organising board, crossed chips, countdowns, key notes board.

Kit gaps (for the v20 build brief):
1. **Observation and model panels.** A paired layout where the model panel cannot draw until a cue, with "schematic, not data" and "model" tags as fixed parts of the component (reused in v22's detector evidence).
2. **Track chamber.** A coded cloud-chamber view with a cross grid, a lead plate, a track whose radius follows r = mv/(qB) with a speed drop at the plate, and direction and force arrows.
3. **Classification tree.** A tree that fills branch by branch (reused in v21).

## Codex asset brief

Revision 2: no new plates. The requests below are kept for the record; both were delivered in brief 193.

1. **`y12p-linac-tunnel-v1.png`** (new). A painted view down a long straight accelerator tunnel in the style of a 1960s two-mile linear accelerator: a long beam pipe running straight into the distance on regular supports, with a row of copper-coloured accelerating sections and klystron housings along one side, receding to a vanishing point; plain concrete tunnel walls. Reference published photographs of the SLAC linac tunnel for proportions; no logos, text, people, figures or hands. Transparent PNG with alpha channel (tunnel edges fading to transparency), about 1800 × 900, centred with even margins. Style: match `y12p-crt-tube-v1.png` and the Year 11 apparatus plates (painted editorial).
2. **`y12p-cloud-chamber-v1.png`** (new). Follow `ph-particle-detectors / cloud-chamber-base` (generation prompt in `docs/production/claude-pm/assets/physics-maths-image-bank/generation-prompts.md`): one selected Wilson-type cloud chamber reconstruction, three-quarter view, observation region empty of tracks, no added magnet unless the chosen reference has one, no labels, no people. Transparent PNG with alpha channel, about 1600 × 1200.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics and history of every learner-visible claim: the criterion; λ and the resolution argument (author note a); the SLAC-MIT dates, energy and inference; observation kept separate from the model; hadron patterns; neutron decay and d → u; quark charges; confinement wording; electron contrast (author note c); positron direction-then-charge argument and the electron-like trail (author note d); muon, pion and neutrino dates and the reactor detection (author note e); the hadron and lepton definitions.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in words only; no generated image is presented as a historical observation.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: Evidence for Quarks: Are Protons and Neutrons Fundamental? | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson16.sa.html and https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html

How do we know protons and neutrons are made of smaller particles? See what "fundamental" would mean, why high-energy electrons were fired at protons, what deep inelastic scattering showed (and what it means), why hundreds of hadrons point the same way (and why neutron decay alone does not), and how up and down quark charges give the proton and neutron charges. Then follow the evidence for other particles: the positron's track, the muon, the pion and the neutrino found by missing energy, and sort them into hadrons and leptons. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the evidence that suggests: that protons and neutrons are not fundamental particles; the existence of subatomic particles other than protons, neutrons and electrons"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why fusion releases energy despite repulsion. Next: how the Standard Model organises particles and interactions.

#HSCPhysics #Physics #Quarks #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 193's blocker and should-fix are resolved below; needs the Codex error check before plates and voicing.
- Revision 1 had no independent review. Next: student learning review (trace from v19, v08 and v12; check that the observation and model panels make the evidence-then-inference order audible; that the lead-plate argument is followable at speech pace; that baryon and meson naming here does not overload (open decision 2)), then the physics check and the Codex error check.
- The shrinking wavelength, the measured bars against the smooth-proton bars, the late-drawing model panel, the flipping quark, the tightening track and the missing-energy gap carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 193 findings (`checks/p-y12-m8-v20-learning-review.md`, `checks/p-y12-m8-v20-science-check.md`, `checks/brief193-history-follow-up.md`): 1 blocker, 1 should fix.
- **Blocker, decay-as-proof (scenes 7, 9, 18 and notes).** Resolved: scene 7 now says "Here's a tempting third clue that doesn't work ... decay alone can't prove parts, because some fundamental particles decay too, like the muon you'll meet soon. Still, the quark model describes neutron decay neatly. One of its quarks changes type."; a chip "decay proves parts" is crossed with "fundamental particles can decay too"; the d → u flip is labelled "model's account, not evidence"; the test card gains no tick. Scene 9's proton column shows two ticks (scattering, patterns). Scene 11's muon card adds "decays in about 2 μs, yet no known parts". Scene 18 accepts the two valid lines (scattering, patterns), notes the quark charges as support, and crosses "neutron decay proves it has parts" (replacing "electrons are made of quarks too", which scene 9 already answers). The A2 model answer, Decisions, cause chain, teaching checks, notes and author note h match; site note 5 logs the site's step 4 for root. No extra scene; scene 7's length is near Revision 1's.
- **Should fix, antineutrino label (scene 12).** Resolved: the beta-minus particle and its 1956 detection are labelled "ν̄"; narration adds "Here it's an antineutrino, one of the neutrino family", keeping "neutrino" as the family name.
- History follow-up: SLAC late 1960s, muon 1936, pion 1947, Gell-Mann and Zweig 1964, Reines and Cowan 1956 and the positron's lead-plate direction argument already match; no change.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages", "Question cards" and "Antineutrino label".
- Plate in scene 1: the delivered linac tunnel slides in on "Fire particles at it"; the opening frame (v19's final frame) is unchanged. The linac carries scene 3 at about 1100 px wide and the A2 card; the delivered cloud chamber carries scene 10 at about 440 px tall.
- Live control: the probe-energy slider in scene 3 with E, λ and "proton ÷ λ" readouts (1, 5, 20 GeV: 1.24 × 10⁻¹⁵, 2.48 × 10⁻¹⁶, 6.2 × 10⁻¹⁷ m; 1.4, 6.9, 27).
- Hand tags and a pen mark in role colours in every teaching scene ("fire electrons at it", "the test", "more energy → shorter λ", "many more large-angle scatters", "model: small hard parts", "few parts, many combinations", "fundamental particles can decay too", "model's account, not evidence", "same test, different answer", "slowed by the lead: so it went up", "cosmic rays first", "ν̄: neutral, almost never interacts").
- Framed answers: λ ≈ 6 × 10⁻¹⁷ m (3), both charge sums (8), "composite" and "fundamental" (9), the positron label (10), the ν̄ detection tag (12), +2e (16), both evidence rows (18). Crossed slips: "decay proves parts" (7), "pion = lepton" (13), "charge +1, like every baryon" (16), "neutron decay proves it has parts" (18).
- Key notes cut from five long items (about 800 characters) to five short bullets (about 240 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Board change: scene 8 now opens a clear change to the charge sums. No set-up runs past about 64 s.
- Question cards arrive with full text and a picture; answer sides add a givens strip.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening frame (v19's final frame) is unchanged; the linac enters on a scene 1 cue. The final frame (scene 19) is unchanged, so v21's opening holds.

Counts: 6,110 to 6,190 characters (scene sum); about 543 s to about 534 s.
