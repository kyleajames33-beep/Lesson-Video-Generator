# Year 12 Physics M8 V21: The Standard Model. How does the Standard Model organise particles and interactions? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,092 characters, 19 scenes (18 narrated scenes and the notes hold), about 542 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v20's final frame.

Scope: twenty-first video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that human understanding of matter is still incomplete?". Templates as `phys-y12-m8-v05.md` and `phys-y12-m8-v20.md`. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts `work/brief168/module8-lesson17.sa.txt` and `module8-lesson18.sa.txt`, hashes checked against the live files):
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson17.sa.html`, SHA256 `9b2f7109023ee4217ae4853c676e16b2361db0afdb2a8fae9ac25faba012a824` (matches the route): orient and predict, read the quark table (six flavours, generations, charges, masses, confinement), assemble the Standard Model (12 fermions, photon, gluons, W and Z, Higgs; gravity not included; Figure 2), clear the misconceptions (freeing a quark; what the Higgs gives mass to; gravity), verify quark composition (Activity 1: K⁺ = us̄; uss), analyse decays and force ranges ("Analyse 6 marks", "Compare 6 marks"), independent practice, retrieve and reflect.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson18.sa.html`, SHA256 `979d52d8884ab5f51dc2599aaaa00b6bbc737b4f2fcd6fbab8da3927861fdf0e` (matches the route): orient and predict, compare the four forces (table of strength, range, mediator, acts on; Figure 1), explain force carriers and range (virtual particles, range from carrier mass, Figure 2 Feynman sketches), identify the force in an interaction (decision tree; HSC tip), clear the force misconceptions, calculate carrier ranges, analyse forces in reactions ("Compare 7 marks" four forces; "Analyse 6 marks" beta decay), independent practice, retrieve and reflect.
- Also read: `lesson16.sa.html` (antiparticles, vocabulary note on "same mass, opposite charge"; "Explain 6 marks" on antiparticles), read in full for v20.

Route entry: `phys-y12-m8-v21`, sections `assemble-the-standard-model`, `verify-quark-composition` (lesson 17), `compare-the-four-forces`, `explain-force-carriers-and-range` (lesson 18). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Distinguish quarks, hadrons and leptons and interaction mediators, including charge accounting and antimatter. Gravity lies outside the Standard Model description." Next: "phys-y12-m8-v22: How do accelerators create and test evidence about particles?" Entry knowledge asks that each newly introduced equation is derived before use: no new equation; charge accounting is arithmetic; the range formula R ≈ ħc/(mc²) is extension on the site and appears only as a grey tag.

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; the Standard Model table, quark dots, the force comparison, the exchange sketches and the beta-decay diagram are coded (kit teaching reasons for lessons 17 and 18: "coded-only", "Avoid painting quarks as directly observed coloured marbles or using a generated particle table"); no painted plates needed; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v20 (u and d charges, uud and udd, hadrons and leptons, baryons and mesons, the muon, the neutrino, antiquark named), m7-v16 (antimatter and annihilation), v14 (beta decay), v05 (the pp chain's first step is slow), v19 (the strong force's short range; the Coulomb repulsion), Year 11 (Coulomb's law; gravity).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ5-02`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P8-IQ5-02`: "investigate the Standard Model of matter, including:" "quarks, and the quark composition hadrons", "leptons", "fundamental forces (ACSPH141, ACSPH142)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 64)

**Boundary:** starts on v20's final frame (the organising board with two quarks, three leptons, empty slots and an empty "forces?" column). Teaches: the Standard Model as the best current theory of the fundamental particles and three of the four forces, in two groups (matter particles and force carriers); six quarks in three generations with their two charges; six leptons in three generations; the pattern (each generation a heavier copy; ordinary matter is generation 1); antimatter (every particle has a partner of equal mass with every additive quantity reversed: charge, and the counts that make a neutron and antineutron different); antiquark charges and hadron charge accounting (π⁺ = ud̄, π⁻ = dū, antiproton ūūd̄, K⁺ = us̄); the four fundamental forces compared (strength order, range, what each acts on); force carriers (photon, gluons, W and Z) and why range depends on carrier mass (qualitative; gluon confinement noted); the weak force as the only one that changes quark type (beta decay at quark level; the Sun's first step); the Higgs boson (2012, 125 GeV; mass for W, Z and the matter particles, not for photon or gluon or most of a proton's mass); gravity outside the model and other gaps (dark matter), answering the inquiry question. Stops before accelerators and detectors (v22), conservation-law checking beyond charge (baryon and lepton number named only), colour charge, range calculations (grey tag only), electroweak unification.

## Decisions

- **Learner question (route wording kept).** "How does the Standard Model organise particles and interactions?" The answer: it sorts everything into matter particles (six quarks and six leptons, in three generations, each with an antimatter partner) and force carriers (photon, gluons, W and Z), plus the Higgs (2 to 6, 8 to 11); hadrons are built from quarks with whole-number charges (6); each force acts on particular particles through its carrier, and the carrier's mass sets the range (7 to 9); it leaves out gravity, so it is incomplete (12).
- **Hook (v20's handoff).** 3 s prediction chips for "How many kinds of truly fundamental particle?": "about 6", "about 17", "hundreds". Answer: 17 kinds (6 quarks, 6 leptons, 4 carriers counting the W⁺ and W⁻ as one kind and the eight gluons as one, and the Higgs), shown as the count builds. The counting convention is on screen (author note a).
- **Quarks (site `read-the-quark-table`, values kept).** Six flavours in pairs: up and down, charm and strange, top and bottom; up-type +2/3, down-type −1/3; ordinary matter uses only up and down; heavier quarks are made in high-energy collisions and decay quickly (site). Surprise: the top quark (about 173 GeV/c², site) has about the mass of a gold atom (183 GeV/c²), yet it is fundamental. Masses appear on the table small; only the top's is said.
- **Leptons (site Standard Model card).** Electron, muon, tau (charge −1), and three neutrinos (0); neutrinos interact only through the weak force and gravity (site). Generation pattern: each a heavier copy. The tau (1.78 GeV/c², heavier than a proton) is said in one clause to reinforce v20's "classify by parts, not mass".
- **Antimatter (site lesson 16 vocabulary and "Explain 6 marks").** "Same mass, opposite charge" is the start; the full rule reverses every additive quantity, which is why the antineutron (no charge) is still different from the neutron (they annihilate on meeting). Baryon number is named once in that sentence as "the count of baryons", without a conservation drill. The photon is its own antiparticle (screen tag).
- **Charge accounting (route "charge accounting"; site HSC tip).** Antiquarks: ū −2/3, d̄ +1/3. π⁺ = ud̄ = +1; π⁻ = dū = −1; antiproton = ūūd̄ = −1; K⁺ = us̄ = +1 (site Activity 1). Rule: every hadron's total is a whole number (site "Analyse 6 marks" step 5). The site trap "forgetting that antiquarks have opposite charge" is A1's crossed mistake.
- **Four forces (site "Compare the four forces"; site "Compare 7 marks").** Strength order at nuclear scale: strong, electromagnetic, weak, gravity (ratios are extension: grey tag "about 1 : 10⁻² : 10⁻¹³ : 10⁻³⁸, guide values only", site's own caveat kept). Range: electromagnetic and gravity unlimited; strong about 10⁻¹⁵ m; weak about 10⁻¹⁸ m. Acts on: gravity everything with mass-energy; electromagnetic charged particles; strong quarks (so hadrons); weak all quarks and leptons, including neutrinos. Gravity's dominance at large scales (always attractive; charges cancel in bulk) is said in one sentence.
- **Force carriers (site `explain-force-carriers-and-range`).** A force between particles is described as an exchange of a carrier particle (a boson): photon (electromagnetic), gluons (strong, between quarks), W⁺, W⁻ and Z⁰ (weak). Analogy: two boats on a lake, one throwing a heavy bag to the other, both drift apart (repulsion only; author note b on its limits); boats coded, no people drawn ("throwing" is narrated as "passing a heavy bag from one boat to the other"). Virtual particles are named only on screen (site vocabulary).
- **Range from mass (site, qualitative).** A heavy carrier can only exist briefly, so it cannot travel far: W and Z (about 80 and 91 GeV/c², site) give a range about 10⁻¹⁸ m; the massless photon gives unlimited range; gluons are massless but confined, so the strong force is short-ranged (site misconception card). The formula R ≈ ħc/(mc²) and 2.5 × 10⁻¹⁸ m appear as a grey "extension" tag.
- **Weak force changes flavour (site decision tree and "Analyse 6 marks").** Beta-minus at quark level: d → u + W⁻; W⁻ → e⁻ + ν̄; the only force that changes one quark type into another. Link: the pp chain's slow first step (v05) is a weak process, so the weak force is why the Sun burns slowly.
- **Higgs (site; misconception card).** Discovered at CERN in 2012 at about 125 GeV/c²; its field gives mass to the W and Z and to the quarks and leptons; not to the photon or gluons; most of a proton's mass comes from the energy of the quarks and gluons inside it, not from the Higgs (site).
- **Incomplete (inquiry question; site "Gravity is not included", limitation list).** Gravity has no place in the model; dark matter is not any particle in it; neutrino masses were not in the original version. One scene.
- **Memory aid (scene 13, new): "Six quarks, six leptons, four carriers, one Higgs."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): K⁻ = sū: (a) charge, (b) baryon or meson, (c) quark content of its antiparticle. −1; meson; s̄u (the K⁺). Crossed: "+1/3" from taking ū as +2/3. A2 (3 marks): identify the force and carrier for (i) beta-minus decay, (ii) holding quarks in a proton, (iii) repulsion between two electrons. Weak (W⁻); strong (gluons); electromagnetic (photon). Crossed: "beta decay is the strong force because it happens in the nucleus".
- **Handoff (route next).** Most of the table never appears in ordinary matter: charm, strange, top, bottom, muon, tau, W, Z and Higgs had to be made, then caught. "Next: how do accelerators create and test evidence about particles?". See "Final frame".
- **Colour key (as v20):** quark dots ("u", "c", "t" amber outline; "d", "s", "b" teal outline), leptons navy dots (neutrinos small grey), antiparticles drawn as the same dot with a bar over the label and a dashed outline; carriers as small diamonds (photon amber, gluon violet, W and Z slate), Higgs a gold ring; table columns: generations 1, 2, 3; rows: quarks, leptons; carriers in a separate block at the right; gravity a grey box outside the frame of the table.
- **Site sources used:** lesson 17 `read-the-quark-table` (six flavours, generations, charges, masses, "ordinary matter contains only up and down", confinement) (3); `assemble-the-standard-model` (definition, fermions and bosons, carriers, Higgs, gravity, Figure 2) (2 to 4, 8, 11, 12); misconceptions (Higgs, gravity) (11, 12); HSC tip (antiquark charges; π⁻ = dū) (6, A1); Activity 1 (K⁺ = us̄) (6); "Analyse 6 marks" (integer charges) (6); "Compare 6 marks" (hadrons and leptons, recalled) (4). Lesson 18 table and Figure 1 (strength, range, mediator, acts on) (7); force carriers and range (8, 9); decision tree and "Analyse 6 marks" (beta decay is weak; only the weak force changes flavour) (10, A2); misconceptions (gluons massless yet short range; "weak is unimportant") (9, 10); "Compare 7 marks" (the neutrino case; gravity's paradox) (7). Lesson 16 vocabulary and "Explain 6 marks" (antiparticles beyond charge) (5). Not used: colour charge, J/ψ history, range calculations, electroweak unification (lesson 18 extend), conservation-law drills (lesson 16).
- **Site notes (quoted from the site, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Quark masses (lesson 17 table): "Strange s −1/3 ~95" MeV. The current PDG value is about 93 MeV/c² (93.5); "~95" is a rounding of the older 95 ± 5 value; acceptable, noted for the check list. Top "~173,000" MeV: PDG 172.6 GeV (direct measurement); acceptable.
  2. Range wording (lesson 18 vocabulary): "Virtual particle: A transient force-mediating particle that exists within the limits of the uncertainty principle". Suggest adding the site's own later caution ("This range estimate does not mean energy conservation is temporarily violated", independent practice Q2(b)) to the vocabulary entry, so the two do not read as contradictory.
  3. Strength table (lesson 18): "Weak 10⁻¹³" relative to strong 1 alongside "EM 10⁻²". The site's own HSC tip says these are "scale- and convention-dependent guide values"; suggest carrying that caveat into the table caption.
  4. Checked and correct: six flavours and charges; generations; W 80.4 and Z 91.2 GeV/c²; Higgs 125 GeV/c², 2012; gravity not in the Standard Model; the Higgs does not give mass to the photon or gluon or most of the proton's mass; ranges 10⁻¹⁵ and 10⁻¹⁸ m; π⁺ = ud̄, π⁻ = dū, K⁺ = us̄.
- **Cause chain taught, in order:** (1) everything known divides into matter particles and force carriers (2); (2) matter particles are quarks and leptons, each set in three generations with a fixed charge pattern (3, 4); (3) each has an antimatter partner with every additive quantity reversed (5); (4) quarks combine into hadrons whose charges always add to whole numbers (6); (5) four forces differ in strength, range and what they act on (7); (6) in the model, each force works by exchanging a carrier (8); (7) a heavy carrier cannot travel far, so the weak force is short-ranged (9); (8) only the weak force changes quark type, which is why beta decay and the Sun's first step need it (10); (9) the Higgs field gives the W, Z, quarks and leptons their mass (11); (10) gravity and dark matter are outside it, so it is incomplete (12).
- **Entry knowledge (route `entryKnowledge`):** v20 (quarks u and d, hadrons and leptons, baryons and mesons, antiquark named); m7-v16 (antimatter, annihilation); v14 (beta decay); v05 (slow first step); v19 (strong force short range); Year 11 (Coulomb's law, gravity).
- **Learner-visible vocabulary (plain meaning at first use):** Standard Model (the best current theory of the fundamental particles and three of the four forces, 2); flavour (a quark's type, 3); generation (one column of the table; each a heavier copy, 3); antiparticle (5); force carrier (a particle exchanged to produce a force, 8); boson (named, 8); virtual particle (screen only, 8); Higgs field and Higgs boson (11); dark matter (named, 12).
- **Legacy logic ported:** none. `m8-particles` supplies charge sums (6) within its limits ("No complete Standard Model table ... or weak-decay mechanism": this design adds both as new coded components).
- **New explainer motion:** **Standard Model table** (a grid filling column by column, generations 1 to 3, with masses small; carriers block; Higgs; gravity box outside); **antiparticle mirror** (each dot reflected across a line, labels gaining bars and charges flipping sign); **charge accounting** (dot triplets and pairs with charge chips summing on a tally); **force comparison** (four rows with range bars on a log axis and "acts on" icons; the strength order as stepped bars); **exchange sketch** (two coded boats, a bag passing, both drifting apart; then two electron dots with an amber photon diamond passing between them); **range from mass** (a carrier diamond whose travel distance shrinks as its mass readout rises); **quark-level beta decay** (a neutron's udd, one d emitting a W⁻ diamond that splits into e⁻ and ν̄); `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 14 and 16); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the Standard Model table builds in the centre in scenes 2 to 5, then shrinks to a thumbnail at the top right that highlights the row or block being discussed; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Counting: 6 quarks + 6 leptons + photon + gluon (8 colour states, one kind) + W (W⁺ and W⁻, one kind) + Z + Higgs = 17. Some counts list W⁺ and W⁻ separately (18) or count antiparticles and colours (61). The screen states the convention.
  (b) The boat analogy shows momentum exchange giving repulsion; it cannot show attraction (the site's Feynman sketch is used for the photon case). Narration says "it explains repulsion; attraction needs the full theory", screen only (chip "analogy: repulsion only").
  (c) Range estimate R ≈ ħc/(mc²) = 197.3 MeV fm / 80,400 MeV = 2.45 × 10⁻³ fm = 2.5 × 10⁻¹⁸ m for the W (site Stop and check). ħ is not on the HSC data sheet; the tag is grey "extension".
  (d) Masses (PDG): u 2.2 MeV, d 4.7 MeV, s 93 MeV, c 1.27 GeV, b 4.18 GeV, t 172.6 GeV; e 0.511 MeV, μ 105.7 MeV, τ 1776.9 MeV; W 80.4 GeV, Z 91.2 GeV, H 125.1 GeV. Gold-197 atom 196.97 u × 0.9315 = 183.5 GeV/c².
  (e) Higgs: ATLAS and CMS, announced 4 July 2012. About 99% of a proton's mass arises from QCD binding energy (quark kinetic and gluon field energy); the u and d quark masses from the Higgs contribute about 1%.
  (f) Neutrino mass: oscillations show neutrinos have small masses, not included in the original Standard Model; the narration says "neutrinos turned out to have mass, which the original model left out".
  (g) Pronunciations: "gluon" as "gloo-on", "boson" as "bow-zon", "Higgs" as "higz", "tau" as "tow" (rhymes with now), "kaon" as "kay-on", "anti-up" and "anti-down" as said.
- **Open decisions for root:**
  - **1. Seventeen (learning review).** The hook's "17" depends on the counting convention (author note a). Confirm, or change the hook to "how many columns does the table need?".
  - **2. Boat analogy (learning review).** Kept for the exchange idea (scene 8) with a repulsion-only chip. Cut if the reviewer finds it adds load without help.
  - **3. Length of the force section (root).** Scenes 7 to 10 carry the "fundamental forces" example in about 140 s; the site treats forces as a separate lesson (18). If the voiced preview runs long, scene 9's range sentence moves to the key notes only.
  - **4. Site notes 1 to 3** for the site log.

Main question: *By now there are dozens of particles and several forces. How does one model sort them all, and what does it leave out?*
Entry knowledge: quarks u and d, hadrons and leptons (v20); antimatter (m7-v16); beta decay (v14); the strong force (v19).
Stops after: the table of quarks and leptons, antimatter and charge accounting, the four forces and their carriers, the weak force at quark level, the Higgs, and gravity outside. No accelerators.
Handoff: v22, how accelerators create and test evidence about particles.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *e*, *u*, *d*, *s*, *W*, *Z*.

### 1. hook (how many fundamental particles?)
> So far we've got two quarks, a few leptons, their antimatter partners, and some forces. How many kinds of truly fundamental particle do you think there are? Make your **prediction**. In the Standard Model, it's seventeen kinds. So how does the Standard Model organise particles and **interactions**?

Visual: opens on v20's final frame (see "Opening frame"). On "two quarks" the "u" and "d" slots pulse; on "a few leptons" the lepton column pulses; on "their antimatter partners" the mirror row; on "some forces" the empty forces column. On "prediction" a 3 s `Countdown` beside chips "about 6", "about 17", "hundreds". On "seventeen kinds" the "about 17" chip ticks; a small counter "17" with grey tag "counting W⁺/W⁻ as one kind and the 8 gluons as one". On "interactions" the chip becomes the heading: "How does the Standard Model organise particles and interactions?".

### 2. two kinds of thing
> The Standard Model is our best theory of the fundamental particles, and three of the four forces between them. It sorts everything into two groups. There are matter particles, the quarks and leptons, which make things up. And there are force carriers, which pass forces between **them**.

Visual: board change: the organising board's columns slide apart and become two labelled blocks. On "our best theory of the fundamental particles" chip "Standard Model: fundamental particles + 3 of the 4 forces". On "matter particles, the quarks and leptons" the left block heads "matter particles (quarks, leptons)". On "them" the right block heads "force carriers", with four empty diamond outlines.

### 3. six quarks
> Start with the quarks. There are six types, called flavours, in three pairs. Up and down, charm and strange, top and bottom. In every pair, the first has a charge of plus two thirds, and the second minus one third. Each pair, called a generation, is a heavier copy of the one before. Ordinary matter uses only up and down. The others are made in high-energy collisions, and decay almost straight away. The top quark has about the mass of a whole gold atom, yet as far as we know, it has no **parts**.

Visual: board change to the Standard Model table: three columns "generation 1, 2, 3", top row "quarks". On "Up and down" the generation 1 cells fill "u up +⅔" and "d down −⅓"; on "charm and strange" generation 2 "c charm +⅔", "s strange −⅓"; on "top and bottom" generation 3 "t top +⅔", "b bottom −⅓". On "the first has a charge of plus two thirds" the upper row of each pair tints amber "+⅔"; on "minus one third" the lower row teal "−⅓". On "a heavier copy" small mass labels appear under each ("2.2 MeV, 4.7 MeV | 1.27 GeV, 93 MeV | 173 GeV, 4.18 GeV"). On "Ordinary matter uses only up and down" generation 1 glows, tag "everyday matter". On "decay almost straight away" generations 2 and 3 dim slightly, tag "made in collisions; decay quickly". On "parts" a bar comparison "top quark ≈ 173 GeV/c²" against "gold atom ≈ 183 GeV/c²".

### 4. six leptons
> Now the leptons. The electron, the muon and the tau all have a charge of minus one. Each has its own neutrino, with no charge at all. Same three generations, each heavier than the last. The tau is nearly twice as heavy as a proton, but it's still a lepton, because it has no parts and doesn't feel the strong **force**.

Visual: the table's second row "leptons" fills. On "The electron, the muon and the tau" cells "e⁻ electron −1", "μ⁻ muon −1", "τ⁻ tau −1". On "its own neutrino" cells "νₑ", "ν_μ", "ν_τ" with "0". On "Same three generations" the column outlines pulse. On "nearly twice as heavy as a proton" tag "τ: 1.78 GeV/c² (proton 0.94)". On "force" chip "lepton: no parts, no strong force (v20)".

### 5. antimatter for everything
> Every one of these has an antimatter partner, with the same mass. People often say opposite charge, but it's more than that. Every quantity that adds up gets reversed. That's why an antineutron, with no charge, is still different from a neutron. Its count of baryons is minus one, not plus one. So an anti-up quark has a charge of minus two thirds, and an anti-down has plus one **third**.

Visual: board change: the antiparticle mirror: the table reflects across a horizontal line; each reflected label gains a bar and a dashed outline. On "the same mass" mass labels copy across unchanged. On "it's more than that" chip "antiparticle: same mass, every additive quantity reversed". On "an antineutron, with no charge" two discs "n (B = +1, Q = 0)" and "n̄ (B = −1, Q = 0)". On "minus one, not plus one" the B values pulse. On "third" two mirror cells enlarge: "ū: −⅔" and "d̄: +⅓"; grey tag "the photon is its own antiparticle".

### 6. adding up hadrons
> Now we can build hadrons and check their charges. A pion plus is an up and an anti-down. Plus two thirds, plus one third, makes plus **one**. A pion minus is a down and an anti-up, which makes minus one. An antiproton is two anti-ups and an anti-down, which makes minus one too. Quarks have fractional charges, but every hadron ever found adds up to a whole **number**.

Visual: board change to charge accounting. On "A pion plus is an up and an anti-down" two dots "u d̄" in a dashed boundary "π⁺ (meson)". On "one" the tally "+⅔ + ⅓ = +1" ticks green. On "A pion minus" "d ū: −⅓ − ⅔ = −1" ticks. On "An antiproton" "ū ū d̄: −⅔ − ⅔ + ⅓ = −1" ticks, tag "baryon of antiquarks". On "every hadron ever found" a grey row "K⁺ = u s̄: +⅔ + ⅓ = +1". On "number" chip "hadron charges: always whole numbers".

### 7. four forces
> Now the interactions. There are four fundamental forces. The strong force is the strongest, but it only reaches about the width of a nucleus, and it acts on quarks. The electromagnetic force acts on charged particles, and reaches forever. The weak force is weaker, reaches even less far than the strong force, and acts on all quarks and leptons, even neutrinos. Gravity is by far the weakest, but it acts on everything and reaches forever. It wins on big scales, because it only attracts, while positive and negative charges cancel **out**.

Visual: board change to the force comparison: four rows "strong", "electromagnetic", "weak", "gravity"; columns "range" (log bars) and "acts on" (icons). On "The strong force is the strongest" stepped strength bars appear, strong tallest; on "about the width of a nucleus" its range bar "≈ 10⁻¹⁵ m"; on "acts on quarks" icon "quarks (hadrons)". On "reaches forever" (first) the EM bar runs off the axis "unlimited", icon "charged particles". On "acts on all quarks and leptons, even neutrinos" weak range "≈ 10⁻¹⁸ m", icon "all quarks and leptons". On "Gravity is by far the weakest" gravity strength bar tiny, range "unlimited", icon "everything with mass-energy". On "out" a grey tag "strength order: strong > EM > weak > gravity (guide values only)" and a small inset of a neutral planet pair attracting.

### 8. forces as exchanges
> In the Standard Model, a force happens when particles exchange a carrier. Picture two boats on a lake, passing a heavy bag from one to the other. Each boat recoils, so they drift **apart**. In the same way, two electrons repel by exchanging photons. The strong force is carried by gluons, between quarks. The weak force is carried by the W and Z **bosons**.

Visual: board change to the exchange sketch: two coded boats on a pale blue lake (no figures). On "passing a heavy bag from one to the other" a coded bag arcs from the left boat to the right. On "apart" both boats drift outwards, recoil arrows; grey chip "analogy: shows repulsion only". On "two electrons repel by exchanging photons" two navy dots with an amber diamond "γ" passing between them, moving apart. On "carried by gluons, between quarks" a violet diamond "g" between two quark dots. On "bosons" slate diamonds "W⁺, W⁻, Z⁰"; the carriers block of the table fills: "γ photon (EM)", "g gluon (strong)", "W±, Z (weak)"; grey tag "exchanged carriers: 'virtual particles'".

### 9. why some forces are short
> Why is the weak force so short-ranged? Its carriers are heavy, about eighty-five to a hundred times a proton's mass. A heavy carrier can only exist for a very short time, so it can't travel far. The photon has no mass, so electromagnetism reaches forever. Gluons have no mass either, but they hold quarks so tightly together that the strong force stays inside the **nucleus**.

Visual: board change to range from mass: a carrier diamond leaves a source dot; a mass readout. On "about eighty-five to a hundred times a proton's mass" readout "W: 80.4 GeV/c², Z: 91.2 GeV/c²" and the diamond travels a tiny distance, tag "≈ 10⁻¹⁸ m". On "can't travel far" grey tag "extension: R ≈ ħc/(mc²) ≈ 2.5 × 10⁻¹⁸ m". On "The photon has no mass" readout "γ: 0", the diamond travels off the frame. On "nucleus" a violet "g" diamond inside a dashed proton boundary, held, tag "massless but confined: short range".

### 10. the force that changes quarks
> The weak force does something no other force can. It changes one type of quark into another. In beta minus decay, a down quark inside a neutron turns into an up quark, giving out a W minus. The W minus then becomes an electron and an **antineutrino**. That's why the Sun burns slowly. The first step of its fusion needs a weak interaction, to turn a proton into a **neutron**.

Visual: board change to quark-level beta decay: a neutron boundary "u d d". On "a down quark inside a neutron turns into an up quark" one "d" turns "u"; the boundary relabels "p (u u d)". On "giving out a W minus" a slate diamond "W⁻" leaves. On "antineutrino" the diamond splits into a navy "e⁻" and a grey "ν̄"; equation "d → u + W⁻ → u + e⁻ + ν̄". On "That's why the Sun burns slowly" the painted Sun thumbnail `phys-y11-sun-v1.png` (small) with v05's first step "p + p → d + e⁺ + ν". On "neutron" chip "only the weak force changes quark flavour".

### 11. the Higgs
> One more piece. The Higgs boson was discovered in twenty twelve, at CERN, with a mass of about a hundred and twenty-five GeV. It shows that the Higgs field is real, and that field gives the W and Z, the quarks and the leptons their mass. It doesn't give mass to the photon or the gluons. And here's a surprise. Most of a proton's mass doesn't come from the Higgs at all. It comes from the energy of the quarks and gluons moving inside **it**.

Visual: the full table returns; a gold ring "H, Higgs, 125 GeV/c² (2012)" appears beside the carriers block. On "that field gives the W and Z, the quarks and the leptons their mass" thin gold lines run from the ring to the W and Z cells and to all twelve matter cells. On "It doesn't give mass to the photon or the gluons" the γ and g cells stay unlinked, tag "massless". On "Most of a proton's mass" a proton bar "938 MeV/c²" with a thin sliver "quark masses (Higgs): about 1%" and the rest shaded "energy of quarks and gluons inside". On "it" chip "Higgs: gives mass to W, Z, quarks, leptons; not most of a proton's mass".

### 12. what's missing
> So the Standard Model organises nearly everything, and it has passed every test so far. But it isn't complete. Gravity isn't in it at all. Dark matter, which outweighs ordinary matter in galaxies, isn't any particle in the table. And neutrinos turned out to have mass, which the original model left out. That's how we know our understanding of matter is still **incomplete**.

Visual: the table shrinks left; at the right a grey box outside the table frame: "gravity (graviton?): not in the Standard Model". On "Dark matter" a second grey box "dark matter: no particle in the table". On "neutrinos turned out to have mass" the ν cells gain a small "mass ≠ 0" tag. On "incomplete" the inquiry question writes under the heading: "How is it known that human understanding of matter is still incomplete?", with a tick.

### 13. a way to remember
> Here's a way to remember the whole table. Six quarks, six leptons, four carriers, one **Higgs**.

Visual: the table full. On "Six quarks" the quark row pulses; on "six leptons" the lepton row; on "four carriers" the γ, g, W, Z cells; on "Higgs" the gold ring; the line writes large: "Six quarks, six leptons, four carriers, one Higgs." Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A K minus meson is made of a strange quark and an anti-up quark. Calculate its charge, state whether it's a baryon or a meson, and give the quark content of its antiparticle. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The K⁻ particle has quark composition s ū. Quark charges: u +⅔e, s −⅓e. (a) Calculate the charge of the K⁻. (b) State whether it is a baryon or a meson. (c) Give the quark composition of its antiparticle. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> The strange quark gives minus one third. The anti-up gives minus two thirds, so the total is minus **one**. It's a quark and an antiquark, so it's a meson. Its antiparticle swaps each one, an anti-strange and an up, which is the K **plus**. The slip is giving the anti-up plus two thirds, which gives an impossible fractional **charge**.

Visual: card shrinks to the top; "ū" underlines. On "one" "s ū: −⅓ + (−⅔) = −1" boxed. On "so it's a meson" row "quark + antiquark → meson". On "plus" row "antiparticle: s̄ u = K⁺ (+1)". On "charge" a chip "−⅓ + ⅔ = +⅓" fades in and is crossed (caption "antiquarks reverse the charge"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. For each process, identify the fundamental force and its carrier. Beta minus decay, quarks held together in a proton, and two electrons repelling. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Identify the fundamental force responsible and its force carrier for each process: (i) beta-minus decay of a neutron; (ii) the binding of quarks inside a proton; (iii) the repulsion between two electrons. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Beta decay changes a down quark into an up, so it's the weak force, carried by the W minus **boson**. Quarks are held together by the strong force, carried by **gluons**. Electrons repel through the electromagnetic force, carried by **photons**. The slip is calling beta decay the strong force, just because it happens in a nucleus. Only the weak force changes quark **type**.

Visual: card shrinks to the top; "force" and "carrier" underline. On "boson" row "(i) weak: W⁻ (d → u)". On "gluons" row "(ii) strong: gluons". On "photons" row "(iii) electromagnetic: photons". On "type" a chip "beta decay: strong force (it's in the nucleus)" fades in and is crossed (caption "flavour change → weak"). Hold about 1 second.

### 18. handoff
> Look at the table again. Most of it never turns up in ordinary matter. Charm, strange, top and bottom, the muon and the tau, the W, the Z and the Higgs all had to be made, and then caught, before anyone could test the theory. So how do accelerators create and test evidence about **particles**?

Visual: board clears (camera change) to the full Standard Model table at the centre. On "Most of it never turns up in ordinary matter" generation 1 (u, d, e⁻, νₑ) and the photon stay bright; the rest dim. On "Charm, strange, top and bottom, the muon and the tau, the W, the Z and the Higgs" those cells relight one by one with a small gold tag each "made in collisions". On "made, and then caught" a thin coded ring outline appears behind the table with two dots circling in opposite directions and a small flash where they meet, tag "?". On "particles" chip "Next: how do accelerators create and test evidence about particles?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Standard Model: matter particles (6 quarks, 6 leptons, in 3 generations) and force carriers (photon, gluons, W and Z), plus the Higgs boson. Gravity is not included.
2. Quarks: u, c, t (+⅔e); d, s, b (−⅓e). Leptons: e⁻, μ⁻, τ⁻ (−1) and three neutrinos (0). Ordinary matter: u, d, e⁻ (and νₑ).
3. Antiparticles: same mass, every additive quantity reversed (ū −⅔, d̄ +⅓). Hadrons: baryons qqq (p = uud), mesons qq̄ (π⁺ = ud̄); charges always whole numbers.
4. Forces: strong (gluons, quarks, ≈ 10⁻¹⁵ m), electromagnetic (photon, charged particles, unlimited), weak (W±, Z⁰, all quarks and leptons, ≈ 10⁻¹⁸ m, changes quark flavour), gravity (not in the model, everything, unlimited). Heavy carrier → short range.
5. Higgs (2012, 125 GeV/c²): gives mass to W, Z, quarks and leptons; not to photon or gluons, and not most of a proton's mass.

Memory aid (large, on the notes screen): *Six quarks, six leptons, four carriers, one Higgs.*

## Teaching checks

- **Does it explain causes?** Why generations matter: heavier copies, made in collisions, decay to generation 1 (3). Why the antineutron differs from the neutron: every additive quantity reverses (5). Why hadron charges are whole: fractional parts add in fixed combinations (6). Why gravity dominates at large scales: it only attracts (7). Why the weak force is short-ranged: a heavy carrier (9). Why the strong force is short-ranged though gluons are massless: confinement (9). Why beta decay is weak: flavour change (10). Why the model is incomplete: gravity, dark matter (12).
- **Misconceptions addressed:** antiparticles only flip charge (5); the strong force has infinite range because gluons are massless (9); the weak force is unimportant (10, the Sun); the Higgs gives every particle its mass, including most of a proton's (11); gravity is in the Standard Model (12); antiquarks keep the quark's charge (15 crossed); beta decay is a strong process (17 crossed).
- **One idea at a time:** two groups (2), quarks (3), leptons (4), antimatter (5), hadron charges (6), forces (7), carriers (8), range (9), weak (10), Higgs (11), limits (12).
- **Video makes it easier:** the table filling column by column with charge tints (3, 4); the mirror reflection with bars (5); tallies ticking (6); range bars on a log axis (7); the boats drifting apart (8); the diamond's travel shrinking as mass rises (9); a d turning to u and a W splitting (10); gold lines from the Higgs ring, missing to γ and g (11).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 28 s.
- **Avoided double teaching:** u and d charges, hadrons and leptons, baryons and mesons (v20); antimatter (m7-v16); beta decay (v14); the pp chain's slow step (v05); the strong force (v19) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ5-02`: quarks and the quark composition of hadrons (3, 5, 6, A1); leptons (4); fundamental forces (7 to 10, A2). Also the inquiry question (12).
- **Out of scope by design:** accelerators and detectors (v22); conservation-law checking beyond charge; colour charge; range calculations (grey tag); electroweak unification; the hierarchy problem.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The K⁻ particle has quark composition s ū. Quark charges: u +⅔e, s −⅓e. (a) Calculate the charge of the K⁻. (b) State whether it is a baryon or a meson. (c) Give the quark composition of its antiparticle."
Model answer: (a) s: −⅓e; ū: −⅔e (an antiquark has the opposite charge to its quark); total −1e. (b) A meson (one quark and one antiquark). (c) s̄ u (the K⁺, charge +1e). Classic mistake (crossed): taking ū as +⅔, giving "+⅓e".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks).** "Identify the fundamental force responsible and its force carrier for each process: (i) beta-minus decay of a neutron; (ii) the binding of quarks inside a proton; (iii) the repulsion between two electrons."
Model answer: (i) Weak force, carried by the W⁻ boson (a down quark changes into an up quark; only the weak force changes quark flavour). (ii) Strong force, carried by gluons. (iii) Electromagnetic force, carried by photons. Classic mistake (crossed): "beta decay is the strong force because it happens in the nucleus".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Count | 6 + 6 + 4 + 1 = 17 kinds (author note a) | 1, 13 |
| Quark charges | u, c, t +⅔; d, s, b −⅓; ū −⅔; d̄ +⅓; s̄ +⅓ | 3, 5, 6, 14, 15 |
| Quark masses (site; PDG) | u 2.2 MeV; d 4.7 MeV; s 93 MeV (site 95); c 1.27 GeV; b 4.18 GeV; t 173 GeV (172.6) | 3 |
| Gold atom | 196.966569 u × 0.9315 GeV/u = 183.5 GeV/c² | 3 |
| Leptons | e 0.511 MeV; μ 105.7 MeV; τ 1.777 GeV = 1.89 m_p | 4 |
| Charge sums | ud̄ +1; dū −1; ūūd̄ −1; us̄ +1; sū −1; slip −⅓ + ⅔ = +⅓ | 6, 14, 15 |
| Carriers | W 80.4 GeV/c²; Z 91.2 GeV/c² (85.7 and 97.2 proton masses; "eighty-five to a hundred times"); photon and gluon 0 | 9 |
| Ranges | strong ≈ 10⁻¹⁵ m; weak ≈ 10⁻¹⁸ m (R ≈ 197.3/80,400 fm = 2.45 × 10⁻¹⁸ m) | 7, 9 |
| Strength guide | 1 : 10⁻² : 10⁻¹³ : 10⁻³⁸ (site; guide only) | 7 |
| Higgs | 125 GeV/c², 2012; proton 938 MeV/c², quark masses about 1% | 11 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, scratchpad folder `m8v18-22`); Codex to re-check.

- 2/3 + 1/3 = 1; −1/3 − 2/3 = −1; −2/3 − 2/3 + 1/3 = −1; −1/3 + 2/3 = 1/3.
- 196.966569 × 0.9315 = 183.47 GeV; 172.6 / 0.9383 = 184 proton masses; 1776.9 / 938.3 = 1.89.
- 80.4 / 0.9383 = 85.7; 91.2 / 0.9383 = 97.2 (said "about eighty-five to a hundred times a proton's mass").
- 197.327 / 80400 = 2.454e-3 fm = 2.45e-18 m.

## Memory aid check

- **"Six quarks, six leptons, four carriers, one Higgs."** Meaning, as said in scenes 3, 4, 8, 11 and 13: the Standard Model's table has six quark flavours, six leptons, four kinds of force carrier (photon, gluon, W, Z) and the Higgs boson. Assumptions checked: "four carriers" counts W⁺ and W⁻ as one kind and the eight gluons as one (author note a; on screen in scene 1); antiparticles are not counted separately; the Higgs is not a force carrier in the syllabus sense (it is kept separate in the aid); gravity's carrier, the graviton, is hypothetical and not in the model (scene 12). It helps a new case: completing a Standard Model table from memory and any "identify the carrier" question. Introduced after the explanation (2 to 12).
- **Considered, not used:** a sentence mnemonic for the quark order ("Up, Down, Charm, Strange, Top, Bottom" as a phrase); the pairs are short enough to learn directly, and only u and d are needed for charge work.
- **Second line (notes only):** "Top row two thirds up, bottom row one third down" for quark charges (u, c, t +⅔; d, s, b −⅓), matching the table's layout.

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,092 characters**, 19 scene headings (18 narrated scenes and the notes hold). Characters per scene (1 to 19): 291, 283, 496, 315, 385, 361, 536, 349, 372, 368, 438, 371, 92, 207, 325, 178, 360, 290, 75. At 13.3 characters per second the speech is about 458 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 542 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's gluon sentence (open decision 3); scene 3's gold atom sentence; scene 12's neutrino sentence.

## Opening frame

v20's final frame (`phys-y12-m8-v20.md`, "Final frame"): paper background; heading "What evidence shows that protons and neutrons have smaller constituents?"; an organising board: a column headed "quarks" with "u (+⅔)" and "d (−⅓)" filled and four dashed empty slots marked "?"; a column headed "leptons" with "e⁻", "μ⁻" and "ν" filled and three dashed empty slots; a thin row "antimatter partners" with a mirror icon; an empty column headed "forces?" with four dashed slots; chip "Next: how does the Standard Model organise particles and interactions?". Scene 1 pulses each part of the board and turns the chip into the heading; scene 2 turns the board into the table's two blocks.

## Final frame

The last explained frame (end of scene 18, before the key-notes board): paper background; heading "How does the Standard Model organise particles and interactions?"; the full coded Standard Model table at the centre (quarks u, d, c, s, t, b and leptons e⁻, νₑ, μ⁻, ν_μ, τ⁻, ν_τ in three generation columns; carriers γ, g, W±, Z⁰ in a block at the right; the gold Higgs ring beside them; a grey "gravity: not in the Standard Model" box outside the frame); generation 1 and the photon bright, every other cell lit with a small gold tag "made in collisions"; behind the table a thin coded ring outline with two dots circling in opposite directions and a small flash where they meet, tag "?"; chip "Next: how do accelerators create and test evidence about particles?". v22 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v21` (route phys-y12-m8-v21). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v21` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v21` (root to confirm).

In order (kebab-case; 19 scene headings, all `### N.`): hook, two-groups, quarks, leptons, antimatter, hadron-charges, four-forces, carriers, range, weak-flavour, higgs, incomplete, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v22, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: Standard Model table, antiparticle mirror, charge accounting (`m8-particles`), force comparison, exchange sketch, range from mass, quark-level beta decay, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue (board to blocks); 2 to 3 camera continue (blocks to table); 3 to 4 camera continue; 4 to 5 camera continue (mirror); 5 to 6 clear change; 6 to 7 clear change to forces; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 clear change; 10 to 11 clear change to the table; 11 to 12 camera continue; 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 clear change; 18 to 19 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v21-learning-review.md`, `science_check` = `checks/p-y12-m8-v21-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png`: 10 (small thumbnail).
- **Checked, not used:** `phys-y11-galaxy-v1.png` (considered for the dark-matter box in scene 12; a grey text box keeps the "not in the table" point cleaner and avoids implying dark matter is visible).

Need: no new plates.

Coded: Standard Model table, mirror, charge tallies, force rows and range bars, boats and bag, carrier diamonds, mass readouts, beta-decay diagram, Higgs ring and links, proton mass bar, grey outside boxes, ring outline, crossed chips, countdowns, key notes board.

Kit gaps (for the v21 build brief):
1. **Standard Model table.** A 3-generation grid with quark and lepton rows, a carriers block, the Higgs, an outside gravity box; cells that fill, tint, dim and light by cue (reused in v22's final frame).
2. **Antiparticle mirror.** Reflection of table cells with label bars and sign flips.
3. **Exchange sketch and range from mass.** Boats with a bag, then a carrier diamond whose travel shrinks with a mass readout.
4. **Quark-level beta decay.** A boundary of three quark dots with one changing and a W diamond splitting into e⁻ and ν̄.

## Codex asset brief

No new plates. Codex confirms `phys-y11-sun-v1.png` is available for the scene 10 thumbnail.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table (including the "eighty-five to a hundred times" wording for W and Z).
2. Confirm the physics of every learner-visible claim: the Standard Model's scope (three of four forces); six flavours, charges and generations; the top quark and gold atom comparison; leptons and neutrinos; the antiparticle rule and the antineutron; antiquark charges and the four hadron sums; the four forces' strength order, ranges and what they act on; the exchange description and the boat analogy's limits (author note b); range from carrier mass; gluon confinement; the quark-level beta decay; the Sun's weak first step; the Higgs facts (author note e); the incompleteness list.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the boats have no figures).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: The Standard Model Explained: Quarks, Leptons, Force Carriers and the Higgs | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson17.sa.html and https://hscscience.com.au/subjects/physics/year12/module8/lesson18.sa.html

How does one model organise every known fundamental particle? Build the Standard Model table: six quarks and six leptons in three generations, their antimatter partners, and the charges of hadrons from quarks and antiquarks. Compare the four fundamental forces by strength, range and what they act on, see how carriers (photons, gluons, W and Z) pass forces between particles and why heavy carriers mean short range, and find out what the Higgs does and does not explain, and why gravity is left out. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the Standard Model of matter, including: quarks, and the quark composition hadrons; leptons; fundamental forces (ACSPH141, ACSPH142)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the evidence for quarks and other particles. Next: how particle accelerators create and test evidence about particles.

#HSCPhysics #Physics #StandardModel #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v20; check that the table builds slowly enough to follow; that the antimatter rule is clear without a conservation drill; that the forces section is not too dense (open decision 3); that the boat analogy helps (open decision 2)), then the physics check and the Codex error check.
- The table filling and tinting, the mirror, the ticking tallies, the shrinking carrier range and the quark changing inside the neutron carry the explanation; judge them at playback speed in the voiced preview.
