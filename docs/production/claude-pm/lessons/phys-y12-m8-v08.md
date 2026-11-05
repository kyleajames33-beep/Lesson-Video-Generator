# Year 12 Physics M8 V08: Rutherford scattering and the nucleus. Why did scattering require a tiny dense nucleus? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,695 characters, 17 scenes, about 512 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v07's final frame.

Scope: eighth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that atoms are made up of protons, neutrons and electrons?". Templates as `phys-y12-m7-v10.md`; `bio-y11-fa1-v05.md` for plates. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through `work/brief168/module8-lesson11.sa.txt`; also read in full for v07): lesson 11, especially orient and predict (gold-foil prediction, plum-pudding warm-up, vocabulary: alpha particle, nucleus, atomic number), "read-the-geiger-marsden-evidence" (three results, 1 in 8000, the 15-inch shell quote, Rutherford's four-part model, Figure 1, Stop and check, MC), "calculate-closest-approach" (marked beyond the syllabus by the site), "compare-thomson-and-rutherford" (Figure 3, the radiation problem, HSC tip, misconceptions, odd-one-out), Activity 2 and "Assess 7 marks" (rival prediction, both results, why the rival cannot accommodate, both explained, bounded support, verdict), independent practice Q2, reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson11.sa.html`, SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v08`, sections `read-the-geiger-marsden-evidence`, `compare-thomson-and-rutherford`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare Geiger-Marsden observations with Thomson and Rutherford predictions, explaining mostly straight paths and rare large deflections. Stop before neutron discovery." Next: "phys-y12-m8-v09: What evidence established an uncharged massive particle in the nucleus?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only; the counting microscope is drawn without an observer; the bowling-ball comparison is said, and drawn only as two balls); the scattering chamber is one new painted plate, scaled uniformly, never stretched; atoms, nuclei, alpha paths, force arrows and scale bars are coded, HSC style (nuclei enlarged and tagged "not to scale"); every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v07 (the electron, its tiny mass, Thomson's plum-pudding guess), Year 11 (Coulomb's law F = q₁q₂/(4πε₀r²), like charges repel), Year 11 nuclear notation (helium-4), Module 5 and 6 idea that a force at an angle to motion turns a path.

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ2-02`), quoted from the route JSON `syllabusActions`:

- `P8-IQ2-02`: "investigate, assess and model the experimental evidence supporting the nuclear model of the atom, including:"
  - "the Geiger-Marsden experiment"
  - "Rutherford’s atomic model"
  - "Chadwick’s discovery of the neutron (ACSPH026)" (v09)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v07's final frame (the plum-pudding model with an alpha particle approaching, "?"). Teaches: alpha particles (a helium atom without its two electrons, +2e, about 7300 electron masses, about 2 × 10⁷ m s⁻¹); the Geiger-Marsden apparatus (source, thin gold foil, zinc sulfide screen, counting microscope at every angle, vacuum); Thomson's prediction (weak force from spread charge, electrons too light, tiny random nudges, nothing returns); the observations (most nearly straight, about 1 in 8000 beyond 90°); why Thomson's model cannot produce the result; Rutherford's reasoning (concentrated charge: Coulomb's law gives a force 10⁸ times stronger at 10⁻¹⁴ m than at 10⁻¹⁰ m; concentrated mass: a light target cannot send a heavy alpha back); the three path types; rarity implies a tiny target; the scale (pea at the centre of a cricket oval); Rutherford's 1911 nuclear model and what the experiment does not settle (electron arrangement and stability). Ends on the mass puzzle (gold: charge of 79 protons, mass of about 197) as the handoff. Stops before the neutron (v09) and before the radiation problem (v10).

## Decisions

- **Learner question (route wording kept).** "Why did scattering require a tiny dense nucleus?" The answer, built in order: Thomson's model predicts only tiny deflections (3); a few alphas came back (4); that needs one huge force in one encounter, which spread charge and light electrons cannot give, and small nudges cannot add up to it (5); a concentrated charge lets the alpha get close enough for a huge Coulomb force (6) and a concentrated mass stops it being shoved aside (7); rare large bounces mean a tiny target (9).
- **Hook (site "Before you read, predict", re-staged from v07's final frame).** 3 s prediction with three chips: "all pass, tiny deflections", "a few bounce back", "most are stopped". Thomson's model favours the first; the surprise is the second.
- **Alpha particle (site vocabulary).** Said as "a helium atom stripped of its two electrons" because the nucleus has not yet been established in the story (author note a). Speed for a 7.7 MeV alpha: 1.93 × 10⁷ m s⁻¹ ("around two times ten to the seven").
- **Apparatus (site Figure 1 and practice Q2(a)).** One new painted plate `y12p-alpha-scattering-chamber-v1` (cutaway chamber, lead-shielded source with slit, foil, zinc sulfide screen and microscope on a rotating arm). The site's Figure 1 coded scattering layer is the kit family `m8-rutherford` ("rare large-angle scattering", nuclei enlarged, not a quantitative simulation), reused within its limits.
- **Thomson's prediction (site "Assess 7 marks" step 1).** Three causes, each shown: spread charge gives a weak push (field strongest at the atom's edge); electrons are too light (mass ratio 7297, maximum deflection by one electron about 0.008°, author note b); random nudges partly cancel, so the beam spreads a little and never reverses (site step 3: "a series of small deflections cannot accumulate into a reversal").
- **Observations (site "read-the-geiger-marsden-evidence").** Most nearly straight; a few at moderate angles; about 1 in 8000 beyond 90°, some nearly straight back (site figure). The site's claim that small deflections "suggested the positive charge was concentrated" is not used (site note 1): scene 4 says the common result "fits either model", as the site's own "Assess 7 marks" step 2 does. The 15-inch shell quote is kept (spoken as Rutherford's words).
- **Why concentrated charge (new, quantitative contrast, Coulomb's law recalled).** Thomson's atom: the largest force on an alpha is at the atom's edge, r ≈ 10⁻¹⁰ m (inside a uniform sphere the field falls towards the centre). Nuclear atom: an alpha can come within about 10⁻¹⁴ m. Force ratio (10⁻¹⁰/10⁻¹⁴)² = 10⁸, said as "ten thousand times closer, a hundred million times stronger" (author note c). This replaces the site's closest-approach calculation (beyond the syllabus, per the site).
- **Why concentrated mass (site "Assess 7 marks" step 4, made causal).** A light centre would be shoved aside; to send the alpha back, the target must be much heavier than the alpha (gold nucleus about 197 proton masses against the alpha's 4).
- **Size and scale (site "~10⁻¹⁵ m", "~10⁻¹⁰ m").** Narration: nuclei "between about ten to the minus fifteen and ten to the minus fourteen metres across"; atoms "around ten to the minus ten metres". Analogy checked for gold (atom about 2.9 × 10⁻¹⁰ m across, nucleus about 1.4 × 10⁻¹⁴ m across, ratio about 21 000; a 160 m oval gives a 7.6 mm pea). See "Memory aid check".
- **Model and its bounds (site "Assess 7 marks" steps 5 and 6).** Scene 10 states Rutherford's model and what the experiment does not show (electron arrangement and stability), setting up v10 without teaching the radiation problem.
- **Memory aid (scene 11): "Most through: mostly empty. Rarely back: tiny, dense and positive."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks, explain): why 1 in 8000 beyond 90° rules out Thomson and supports Rutherford. Crossed: "the alpha bounced off an electron". A2 (2 marks, evaluate): "most passed straight through, so this proves Thomson wrong". Crossed: treating the common result as decisive.
- **Handoff (route next).** Scene 16: the proton (found inside other nuclei by 1920, named by Rutherford) and the mass puzzle for gold (charge of 79 protons, mass of about 197 proton masses). See "Final frame".
- **Colour key (Module 6 and 7 keys):** alpha particles amber circles "α" with amber paths; nuclei small red "+" discs (enlarged, tagged); electrons navy dots; Thomson's positive charge pale red wash; Coulomb force arrows amber; scale bars navy.
- **Site sources used:** lesson 11: predict (1); vocabulary (alpha particle, nucleus) (2, 10); "read-the-geiger-marsden-evidence" (three results, 1 in 8000, shell quote, Figure 1, nuclear model) (2, 4, 8, 10); "compare-thomson-and-rutherford" (Figure 3, Thomson predicts only small-angle scattering, misconception "complete model") (3, 5, 10); "Assess 7 marks" (steps 1 to 6) (3 to 10, A1, A2); Activity 2 Q3 (the "large nucleus" flaw) (9); practice Q2 (apparatus) (2). Not used: closest approach and R = R₀A^(1/3) (beyond the syllabus, per the site), nuclear density.
- **Site notes (quoted from site lesson 11, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Reasoning error ("read-the-geiger-marsden-evidence"): "Some alpha particles were deflected through small angles (< 10°). This suggested the positive charge was concentrated, not spread evenly." Small deflections were expected from Thomson's model too; the site's own "Assess 7 marks" says "The majority result is consistent with either model; only the large-angle scattering separates them." Suggest: "Small deflections alone do not separate the two models; the rare large deflections do."
  2. Historical precision (same section and "Assess 7 marks"): the "about 1 in 8000 reflected" figure comes from Geiger and Marsden's 1909 paper, in which the reflecting metal for that figure was platinum; their gold-foil counts are in the 1909 and 1913 papers. The figure is widely quoted for gold. Suggest "about 1 in 8000 (Geiger and Marsden's 1909 figure)". (Science check to confirm before logging.)
  3. Historical precision (orient section): "Rutherford's 1909 gold foil experiment is the most important physics experiment". The 1909 experiment was Geiger and Marsden's, under Rutherford's direction; Rutherford's model followed in 1911. The core card states this correctly. Suggest "The Geiger-Marsden experiment (1909), interpreted by Rutherford (1911)".
  4. Inconsistency (Learning Intentions and Figure 1 against the reflect section): nucleus "~10⁻¹⁵ m" and "100,000 times smaller" in the cards, but "less than 10⁻¹⁴ m" in the reflect section. Both are order-of-magnitude statements; a gold nucleus is about 1.4 × 10⁻¹⁴ m across, so the atom is about 20 000 times larger. Suggest "about 10⁻¹⁵ to 10⁻¹⁴ m, tens of thousands of times smaller than the atom".
  5. Checked and correct: alpha charge +2e and mass about 4 u; the shell quote; Thomson 1904 and Rutherford 1911 dates; "Assess 7 marks" logic; the closest-approach answers (5.0 MeV gold 4.5 × 10⁻¹⁴ m; 7.7 MeV gold 2.95 × 10⁻¹⁴ m; silver 2.70 × 10⁻¹⁴ m).
- **Cause chain taught, in order:** (1) spread-out positive charge exerts only a weak force, and electrons are too light to turn an alpha, so Thomson predicts tiny deflections (3); (2) tiny random nudges partly cancel and cannot add to a reversal (3, 5); (3) a few alphas reverse, so one encounter must give a huge force (4, 5); (4) Coulomb's force grows as 1/r², so concentrating the charge lets the alpha get much closer and feel a far larger force (6); (5) the target must be heavier than the alpha to send it back, so the mass is concentrated too (7); (6) most alphas miss every nucleus because the atom is mostly empty; how close an alpha passes sets its deflection (8); (7) large bounces are rare, so the target is tiny (9).
- **Entry knowledge (route `entryKnowledge`):** v07 (electron, tiny mass, plum pudding); Year 11 (Coulomb's law, like charges repel, nuclear notation, momentum in collisions qualitatively).
- **Learner-visible vocabulary (plain meaning at first use):** alpha particle (2); scintillation (a tiny flash, said as "a tiny flash of light", 2); deflection (how far the path turns, 3); nucleus (the tiny, positive, heavy centre, 7); nuclear model (10).
- **Legacy logic ported:** none. Coded family `m8-rutherford` reused within its stated limits.
- **New explainer motion:** **scattering stage** (a beam of amber alpha dots crossing coded layers of atoms, paths bending by impact parameter, a rare reversal highlighted; the Thomson version with pale washes and tiny nudges; counters by angle); **Coulomb distance slider** (an alpha marker approaching a charge, force arrow growing as 1/r², readout "× 10⁸"); **scale zoom** (atom to nucleus, oval and pea); `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the chamber or the scattering stage at centre; chips and counters on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Alpha particles were identified as helium ions by Rutherford and Royds (1908). Calling them "helium nuclei" before the nucleus is established would be circular, so scene 2 says "a helium atom stripped of its two electrons"; scene 10 may then call it a helium nucleus. Speed for 7.7 MeV: v = √(2E/m) with m = 6.65 × 10⁻²⁷ kg: 1.93 × 10⁷ m s⁻¹ (5.0 MeV: 1.55 × 10⁷).
  (b) Largest deflection of an alpha by a free electron at rest: sin θ = m_e/m_α ≈ 1.4 × 10⁻⁴ rad ≈ 0.008°. Rutherford's 1911 estimate of the chance of a 90° deflection by compound scattering in Thomson's atom was vanishingly small (of order 10⁻³⁵⁰⁰).
  (c) The 10⁸ ratio compares the largest force from a uniformly charged sphere of radius 10⁻¹⁰ m (at its surface) with the force from the same charge at 10⁻¹⁴ m (an alpha's closest approach is about 3 × 10⁻¹⁴ m for 7.7 MeV on gold, so the real ratio for gold is about 2 × 10⁷). The narration states the comparison for those two distances only.
  (d) Paths are hyperbolas for a point nucleus; drawn schematically. The scattering stage is not a quantitative simulation and the nuclei are enlarged.
  (e) Pronunciations: "Geiger" (GUY-ger); "Marsden"; "alpha"; "zinc sulfide".
- **Open decisions for root:**
  - **1. New plate `y12p-alpha-scattering-chamber-v1` (Codex).** Fallback: a coded HSC cutaway (source, foil, screen arc).
  - **2. The 10⁸ force comparison (scene 6) (learning review and science check).** Keep (it turns "concentrated" into a cause) or cut to its first two sentences if the voiced take runs long.
  - **3. Site note 2 (science check).** Confirm the platinum attribution before root logs it; the video says "about one alpha in eight thousand" without naming the metal for that figure.

Main question: *How could a sheet of gold foil throw an alpha particle straight back?*
Entry knowledge: electrons and the plum-pudding model (v07); Coulomb's law (Year 11).
Stops after: Geiger-Marsden results, Thomson's failed prediction, Rutherford's reasoning and model, the scale, the model's bounds. No neutron, no radiation problem.
Handoff: v09, what evidence established an uncharged massive particle in the nucleus.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *α*, *e*, *r*, *F*.

### 1. hook (fire at the pudding)
> Here's Thomson's atom, a ball of spread-out positive charge with electrons dotted through it. How do you test it? In nineteen oh nine, Hans Geiger and Ernest Marsden, working with Ernest Rutherford, fired alpha particles at gold foil only a few hundred atoms thick. If Thomson was right, what should the alphas do? Make your **prediction**. Thomson's model says they should all get through, nudged by tiny angles. Almost all did, but a few bounced almost straight **back**. So why did scattering require a tiny dense **nucleus**?

Visual: opens on v07's final frame (see "Opening frame"); the chip becomes the heading: "Why did scattering require a tiny dense nucleus?". On "Here's Thomson's atom" the plum-pudding sphere pulses. On "Hans Geiger and Ernest Marsden" name tags in words only "Geiger and Marsden, 1909" and "with Rutherford". On "gold foil only a few hundred atoms thick" the sphere shrinks into a coded foil edge made of stacked grey atom circles, tag "gold foil ≈ 10⁻⁷ m: a few hundred atoms". On "prediction" a 3 s `Countdown` beside chips "all pass, tiny deflections", "a few bounce back", "most are stopped". On "nudged by tiny angles" the first chip highlights with a grey tag "Thomson's model". On "back" one amber alpha path reverses at the foil; the second chip highlights with an amber tag "observed". On "nucleus" the heading underlines "tiny dense nucleus".

### 2. the alpha particles and the apparatus
> First, the bullets. An alpha particle is a helium atom stripped of its two electrons. It has a charge of plus two e, about seventy three hundred times an electron's mass, and a speed of around two times ten to the seven metres per second. In a vacuum chamber, a narrow beam of alphas hits the foil. Each alpha striking a zinc sulfide screen makes a tiny flash of light, and the flashes were counted through a microscope, at every **angle**.

Visual: board change. On "An alpha particle" an amber circle "α" with a navy-dot helium atom beside it losing its two electrons (they drift off). On "plus two e" tag "charge +2e"; on "seventy three hundred times an electron's mass" a mass bar "α ≈ 7300 × m_e" with a navy electron speck; on "two times ten to the seven metres per second" tag "v ≈ 2 × 10⁷ m s⁻¹". On "vacuum chamber" the painted chamber `y12p-alpha-scattering-chamber-v1.png` (new) fills the centre, cutaway; labels "lead block and source", "slit", "gold foil", "zinc sulfide screen", "microscope". On "a narrow beam of alphas hits the foil" an amber coded beam runs from the slit to the foil. On "a tiny flash of light" a single coded flash on the screen, tag "scintillation: one flash per alpha". On "angle" the screen-and-microscope arm swings around the foil through 0°, 45°, 90°, 150°; an angle scale "θ" draws round the foil.

### 3. what Thomson's model predicts
> Now apply Thomson's model. Its positive charge is spread thinly through the whole atom, so its push on a passing alpha is always weak. The electrons can't help, because an alpha hitting an electron is like a bowling ball hitting a ping-pong ball. So each atom nudges the alpha by a tiny fraction of a degree. Through hundreds of atoms, those random nudges partly cancel, so the beam should spread just a little, and nothing should ever come **back**.

Visual: board change to the scattering stage, Thomson version: a row of pale red plum-pudding atoms with navy dots. On "spread thinly" the pale wash pulses; an amber force arrow on a passing alpha stays short, tag "spread charge → weak push". On "bowling ball hitting a ping-pong ball" an inset: a large dark ball rolling through a small white ball, which scatters while the large one barely turns (coded spheres, no people); tag "electrons: too light (α ≈ 7300 × m_e)". On "a tiny fraction of a degree" one alpha path through one atom bends by a hairline, tag "< 0.01° per atom". On "random nudges partly cancel" a zigzag path of many tiny nudges, mostly cancelling, tag "random: up, down, up". On "back" the whole beam exits as a slightly widened fan, a counter panel reads "θ > 90°: 0 expected"; chip "Thomson: small deflections only".

### 4. what they actually saw
> Here's what Geiger and Marsden saw. Most alphas went straight through, or turned only slightly. That fits either model. But about one alpha in eight thousand turned by more than ninety degrees, and some came almost straight **back**. Rutherford said it was like firing a fifteen inch shell at a piece of tissue paper, and having it come back and hit **you**.

Visual: the chamber returns, the microscope arm at 0°: the screen flashes constantly. On "turned only slightly" the arm at 5°: many flashes; tag "most: straight or small angle". On "That fits either model" a grey chip "fits Thomson and Rutherford". On "about one alpha in eight thousand" the arm swings beyond 90°; flashes become rare; the counter panel reads "θ > 90°: about 1 in 8000". On "back" the arm at about 150°: a single flash, and an amber path on the coded layer reverses; the "0 expected" counter is crossed. On "you" Rutherford's words appear as a quote card (text only, attributed "Rutherford"): "a 15-inch shell ... came back and hit you".

### 5. why Thomson's atom can't do it
> Why is that impossible in Thomson's atom? Turning an alpha right around needs a huge force in one close encounter. Spread-out charge can't supply it, and the electrons are too light. And hundreds of tiny random nudges almost never add up to a full reversal. Thomson's model didn't just miss this result. It couldn't produce it at **all**.

Visual: the Thomson scattering stage beside the reversing path. On "a huge force in one close encounter" a single large amber arrow beside the reversal, tag "needed: one huge push". On "Spread-out charge can't supply it" the short arrow from scene 3 sets next to it, crossed. On "the electrons are too light" the ping-pong inset returns small, crossed. On "almost never add up to a full reversal" the zigzag path wanders but its total angle bar stops at a sliver, tag "many small nudges ≠ one reversal". On "all" chip "Thomson's model: ruled out" (the model's sphere greys out).

### 6. concentrate the charge
> Rutherford squeezed all the positive charge into a tiny centre. Remember Coulomb's law from Year 11. The force between charges grows as one over r squared. In Thomson's atom, the strongest push is at the atom's edge, about ten to the minus ten metres from the centre. With the charge in a tiny core, an alpha can get within about ten to the minus fourteen metres. That's ten thousand times closer, so the push is a hundred million times **stronger**.

Visual: board change to the Coulomb distance slider. On "squeezed all the positive charge into a tiny centre" the pale wash collapses to a small red "+" disc (tag "enlarged"). On "Coulomb's law" chip "F = q₁q₂ / (4πε₀r²) (Year 11)". On "one over r squared" a force-against-distance curve sketches (steep near r = 0). On "the strongest push is at the atom's edge" a wash sphere returns at the left with an alpha at its edge, a short amber arrow, tag "r ≈ 10⁻¹⁰ m"; on "about ten to the minus fourteen metres" at the right an alpha near the small core with the arrow "×10⁸" (drawn broken, too long to fit), tag "r ≈ 10⁻¹⁴ m". On "ten thousand times closer" the line "10⁻¹⁰ / 10⁻¹⁴ = 10⁴". On "stronger" "(10⁴)² = 10⁸" (boxed) with a `NumberTicker`.

### 7. concentrate the mass
> The centre must hold nearly all the mass too. A light centre would just be shoved aside by the alpha, the way the electrons are. To send an alpha straight back, it has to hit something much heavier than **itself**. So Rutherford's centre, the nucleus, is tiny, positive, and **heavy**.

Visual: two collision insets side by side. On "A light centre would just be shoved aside" left: an amber α strikes a small light "+" which flies off; α carries on, tag "light target: α barely turns". On "itself" right: α strikes a large heavy "+" and rebounds, tag "heavy target: α comes back"; mass chips "gold centre ≈ 197 × m_p", "α ≈ 4 × m_p". On "heavy" the word "nucleus" writes on the heavy "+" with three tags: "tiny", "positive", "nearly all the mass".

### 8. every path explained
> Now one model explains every result. Most alphas pass far from any nucleus, through what is mostly empty space, so they barely bend. A few pass fairly close, and turn through a moderate angle. A very few head almost straight at a nucleus, feel that enormous repulsion, and swing right **around**. How much each path bends depends on how close it comes to a **nucleus**.

Visual: board change to the scattering stage, Rutherford version (kit family `m8-rutherford`): tiny red nuclei far apart in a mostly blank foil region, tag "nuclei enlarged; not to scale". On "Most alphas pass far from any nucleus" many amber paths pass straight through the gaps. On "a moderate angle" one path passes fairly close and bends by about 20°. On "around" one path heads almost straight at a nucleus and reverses; a small amber repulsion arrow grows on it. On "nucleus" a navy bracket "distance from the nucleus" on each of three paths with tags "far: small bend", "closer: bigger bend", "almost head-on: back".

### 9. rare means tiny
> The rarity tells you the size. If the nucleus were big, many alphas would pass close to one, and big bounces would be common. Only one in eight thousand came back, so the nucleus is a tiny target, between about ten to the minus fifteen and ten to the minus fourteen metres across. An atom is around ten to the minus ten. If an atom were a cricket oval, its nucleus would be about the size of a pea at the **centre**.

Visual: on "If the nucleus were big" a second stage at the left with large nuclei: many paths bend sharply, counter "θ > 90°: common", crossed. On "a tiny target" the right stage's counter "about 1 in 8000" highlights; tag "rare bounces → tiny target". On "between about ten to the minus fifteen and ten to the minus fourteen metres across" a scale bar "nucleus: 10⁻¹⁵ to 10⁻¹⁴ m"; on "ten to the minus ten" a second bar "atom: ≈ 10⁻¹⁰ m". On "centre" a coded top-down cricket oval (grass ellipse, pitch strip, no players) zooms out; at its centre a small green pea dot with tag "nucleus"; the oval tag "atom (gold: about 20 000 times wider than its nucleus)".

### 10. Rutherford's nuclear model, and its limits
> That's Rutherford's nuclear model, from nineteen eleven. Nearly all the mass and all the positive charge sit in a tiny nucleus, the electrons are somewhere outside it, and most of the atom is empty space. Notice what the experiment didn't show. It said nothing about where the electrons are, or how they stay **there**.

Visual: board change: the model drawn HSC style: a small red nucleus "+Ze" at the centre, navy electrons at a distance with faint dashed paths, labels "nucleus: tiny, dense, positive", "electrons outside", "mostly empty space"; name tag in words only "Rutherford, 1911". On "Nearly all the mass and all the positive charge" the nucleus pulses. On "most of the atom is empty space" the blank space pulses. On "there" the electrons' dashed paths turn grey with "?" tags; chip "not settled: electron arrangement and stability".

### 11. a way to remember
> Here's a way to remember the logic. Most go through, so the atom is mostly empty. A rare few come back, so the nucleus is tiny, dense and **positive**.

Visual: two lines write in turn with small path icons: "Most through → mostly empty" (straight paths); on "positive" "Rarely back → tiny, dense and positive" (one reversing path). Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. In the Geiger Marsden experiment, about one in eight thousand alpha particles was deflected through more than ninety degrees. Explain why this result could not be explained by Thomson's model of the atom, but could be explained by Rutherford's model. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In the Geiger-Marsden experiment, about 1 in 8000 alpha particles was deflected through more than 90°. Explain why this result could not be explained by Thomson's model of the atom, but could be explained by Rutherford's model. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> In Thomson's model, spread-out charge gives only a weak force, and the electrons are too light, so it allows only tiny deflections that can't add up to a reversal. Rutherford's nucleus concentrates the charge and the mass, so an alpha that comes very close feels a huge repulsion and is turned **back**. The slip is saying the alpha bounced off an electron. An electron is far too light to turn an alpha **around**.

Visual: card shrinks to the top; "more than 90°", "Thomson" and "Rutherford" underline. Two lines write: "Thomson: spread charge → weak force; light electrons; small nudges can't add to > 90°"; on "back" "Rutherford: charge and mass concentrated → huge Coulomb repulsion at close range → large deflection, rarely (tiny nucleus)". On "around" a chip "it bounced off an electron" fades in and is crossed (caption "α ≈ 7300 × m_e"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student says that because most alpha particles passed straight through the foil, the experiment proves Thomson's model was wrong. Evaluate this statement. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student states: 'Most alpha particles passed straight through the gold foil, so the Geiger-Marsden experiment proves that Thomson's model was wrong.' Evaluate this statement. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The statement is incorrect. Thomson's model also predicts that most alphas pass through with small deflections, so that result can't separate the models. The rare large deflections are what rule Thomson's model **out**. The slip is treating the common result as the decisive **one**.

Visual: card shrinks to the top; "Most" and "proves" underline. On "out" "most through: fits both models; rare > 90°: only the nuclear model → Thomson ruled out by the rare result". On "one" a chip "most went straight through, so Thomson was wrong" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So the nucleus holds the positive charge and nearly all the mass. By nineteen twenty, Rutherford had found hydrogen nuclei inside other nuclei, and called them protons. But here's a problem. A gold nucleus has the charge of seventy nine protons, yet the mass of about a hundred and ninety seven. Something heavy in there has no charge. So what evidence established an uncharged massive particle in the **nucleus**?

Visual: board clears (camera change). On "the nucleus holds the positive charge" a large coded gold nucleus (red disc, enlarged) "+79e". On "called them protons" small red "p" discs fill part of the nucleus, tag "proton: charge +e, mass m_p (Rutherford, 1920)". On "the charge of seventy nine protons" a charge bar "79 protons → +79e ✓". On "a hundred and ninety seven" a mass bar beneath: "79 protons → 79 m_p" filled red, and the rest of the bar to "197 m_p" left as a grey dashed gap, tag "≈ 118 m_p missing". On "has no charge" the gap gains "charge 0?". On "nucleus" chip "Next: what evidence established an uncharged massive particle in the nucleus?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Geiger-Marsden (1909): alpha particles (+2e, about 7300 electron masses) fired at thin gold foil; flashes on a zinc sulfide screen counted at all angles.
2. Results: most passed straight through or turned slightly; about 1 in 8000 turned more than 90°, some almost straight back.
3. Thomson's model predicted only small deflections: spread charge gives a weak force, electrons are too light, and small random nudges cannot add up to a reversal. The rare large deflections rule it out.
4. Rutherford's model (1911): nearly all the mass and all the positive charge in a tiny nucleus (about 10⁻¹⁵ to 10⁻¹⁴ m; atom about 10⁻¹⁰ m); electrons outside; mostly empty space. Close approach gives a huge Coulomb force (F ∝ 1/r²).
5. The experiment does not show how the electrons are arranged or why they stay there.

Memory aid (large, on the notes screen): *Most through: mostly empty. Rarely back: tiny, dense and positive.*

## Teaching checks

- **Does it explain causes?** Why Thomson predicts small deflections (3); why the small nudges cannot add to a reversal (3, 5); why concentrated charge gives a huge force (6, Coulomb's 1/r²); why the centre must be heavy (7); why most pass (8); why rarity means a tiny nucleus (9).
- **Misconceptions addressed:** the alpha bounced off an electron (13 crossed); "most passed through" proves Thomson wrong (15 crossed); a large nucleus (9 crossed, site Activity 2 Q3); Rutherford's model is complete (10).
- **One idea at a time:** the bullets and apparatus (2), the prediction (3), the observation (4), the impossibility (5), charge (6), mass (7), paths (8), size (9), the model and its bounds (10).
- **Video makes it easier:** the microscope arm swinging and the flashes thinning (4); the force arrow that will not fit on screen (6); light and heavy targets (7); the pea in the oval (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 21 s.
- **Avoided double teaching:** electrons and plum pudding (v07) and Coulomb's law (Year 11) recalled in a clause.
- **Syllabus coverage:** `P8-IQ2-02` (first two examples): the Geiger-Marsden experiment (2 to 5, 8, 9) and Rutherford's atomic model (6 to 10). "Assess" through scenes 5 and 10 and A2; "model" through the scattering stage. Chadwick (third example) is v09.
- **Out of scope by design:** closest approach and nuclear radius formulas (beyond the syllabus, per the site); the radiation problem (v10); the neutron (v09).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In the Geiger-Marsden experiment, about 1 in 8000 alpha particles was deflected through more than 90°. Explain why this result could not be explained by Thomson's model of the atom, but could be explained by Rutherford's model."
Model answer: In Thomson's model the positive charge is spread through the whole atom, so the electric force it exerts on a passing alpha particle is weak, and the electrons are far too light (the alpha is about 7300 times heavier) to deflect it significantly; the model predicts only very small deflections, and many small random deflections cannot add up to more than 90°. In Rutherford's model the positive charge and nearly all the mass are concentrated in a tiny nucleus, so an alpha particle passing very close to it experiences a very large Coulomb repulsion and can be turned through a large angle; because the nucleus is tiny, such close approaches are rare, matching 1 in 8000. Classic mistake (crossed): "the alpha bounced off an electron".

**Attempt 2 (scene 14; original wording, HSC style, 2 marks).** "A student states: 'Most alpha particles passed straight through the gold foil, so the Geiger-Marsden experiment proves that Thomson's model was wrong.' Evaluate this statement."
Model answer: The statement is incorrect (or unjustified). Thomson's model also predicts that most alpha particles pass through with only small deflections, so this result is consistent with both models and cannot distinguish them. The evidence that rules out Thomson's model is the small fraction of alpha particles deflected through large angles (more than 90°). Classic mistake (crossed): treating the common result as the decisive evidence.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Alpha particle | charge +2e; mass 6.65 × 10⁻²⁷ kg ≈ 7297 m_e (≈ 7300); 7.7 MeV: v = 1.93 × 10⁷ m s⁻¹ (≈ 2 × 10⁷) | 2, 3, 13 |
| Foil (site) | ≈ 10⁻⁷ m thick; gold atom ≈ 2.9 × 10⁻¹⁰ m across: ≈ 350 atoms ("a few hundred") | 1 |
| Result (site) | about 1 in 8000 beyond 90° | 4, 9, 12 |
| Electron deflection limit | sin θ_max = m_e/m_α = 1.37 × 10⁻⁴ rad ≈ 0.008° ("a tiny fraction of a degree", "< 0.01°") | 3 |
| Force comparison | (10⁻¹⁰/10⁻¹⁴)² = (10⁴)² = 10⁸ | 6 |
| Masses (handoff, scene 7) | gold nucleus ≈ 197 m_p; α ≈ 4 m_p; 79 protons → 79 m_p; gap ≈ 118 m_p | 7, 16 |
| Sizes | nuclei 10⁻¹⁵ to 10⁻¹⁴ m (gold: R = 1.2 fm × 197^(1/3) = 7.0 fm, diameter 1.4 × 10⁻¹⁴ m); atom ≈ 10⁻¹⁰ m (gold ≈ 2.9 × 10⁻¹⁰ m); ratio ≈ 2.1 × 10⁴; 160 m oval → 7.6 mm (a pea) | 9 |
| Site checks | closest approach (site k, e = 1.6): 5.0 MeV gold 4.55 × 10⁻¹⁴ m; 7.7 MeV gold 2.95 × 10⁻¹⁴ m | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- m_α = 4.001506 × 1.661e-27 = 6.6465e-27 kg; / 9.109e-31 = 7297.
- 7.7 MeV = 1.2335e-12 J; v = √(2 × 1.2335e-12 / 6.6465e-27) = 1.927e7 m/s.
- asin(9.109e-31 / 6.6465e-27) = 1.37e-4 rad = 0.0079°.
- (1e-10 / 1e-14)² = 1e8.
- 1.2e-15 × 197^(1/3) = 6.98e-15 m; 2.9e-10 / 1.40e-14 = 2.1e4; 160 / 2.1e4 = 7.6e-3 m.
- 1e-7 / 2.9e-10 = 345 atoms.
- 197 − 79 = 118.

## Memory aid check

- **"Most through: mostly empty. Rarely back: tiny, dense and positive."** Meaning, as said in scene 11: the common result (most pass) is explained by an atom that is mostly empty space; the rare reversals require a small, massive, positively charged centre. Assumptions checked: "most through" alone does not rule out Thomson (scene 4 and A2 say so; the aid is the nuclear model's explanation, not the disproof); "positive" follows from repulsion of positive alphas; "dense" means mass concentrated, from scene 7. It helps a new case: A1 and A2. Introduced after the explanation (3 to 10).
- **Analogy check, "a pea at the centre of a cricket oval".** For gold, nucleus diameter about 1.4 × 10⁻¹⁴ m and atom diameter about 2.9 × 10⁻¹⁰ m (ratio about 21 000); a 160 m oval scales the nucleus to about 7.6 mm, a pea. For lighter atoms the ratio is larger (hydrogen about 60 000), so the pea is an upper size; "about the size of a pea" holds for gold, the atom in the experiment.
- **Considered, not used:** "a fly in a cathedral" (the oval is local and the pea scale is checked).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,695 characters**, 17 scenes. Characters per scene (1 to 17): 517, 436, 446, 350, 334, 446, 277, 361, 412, 315, 147, 283, 407, 188, 275, 410, 75. At 13.3 characters per second the speech is about 428 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 512 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 4's quote (keep the card); scene 6's Year 11 sentence; scene 9's oval sentence (keep the drawing).

## Opening frame

v07's final frame (designed in this wave, `phys-y12-m8-v07.md`): paper background; heading "How did cathode rays and oil drops reveal the electron?"; at the centre Thomson's plum-pudding model: a uniform pale red sphere labelled "spread-out positive charge" with evenly scattered navy electron dots labelled "electrons"; tag "Thomson's guess, 1904: the plum-pudding model"; from the left a coded alpha particle (small amber circle "α (+)") with a dashed path heading for the sphere and ending in "?"; chip "Next: why did scattering require a tiny dense nucleus?". Scene 1 turns the chip into the heading and shrinks the sphere into the foil.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; heading "Why did scattering require a tiny dense nucleus?"; at the centre a large coded gold nucleus (red disc, tag "enlarged") labelled "+79e", partly filled with small red "p" discs; tag "proton: charge +e, mass m_p (Rutherford, 1920)"; beside it a charge bar "79 protons → +79e ✓" and under it a mass bar "79 protons → 79 m_p" filled red, the rest to "197 m_p" a grey dashed gap tagged "≈ 118 m_p missing" and "charge 0?"; chip "Next: what evidence established an uncharged massive particle in the nucleus?". v09 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v08` (route phys-y12-m8-v08). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v08` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v08` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, alpha-apparatus, thomson-prediction, observations, thomson-fails, concentrate-charge, concentrate-mass, paths-explained, rare-means-tiny, nuclear-model, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: scattering stage (Thomson and Rutherford versions), chamber with swinging arm and flash counter, Coulomb distance slider, collision insets, scale zoom, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the stage; 3 to 4 camera change to the chamber; 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change to the stage; 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v08-learning-review.md`, `science_check` = `checks/p-y12-m8-v08-physics-check.md`.

## Assets

Have: none reused as plates (the scene is atomic-scale and coded).
- **Checked, not used:** `phys-y11-gamma-source-v1.png` (a shielded container with a glass window; a window would stop alpha particles, so it would teach a wrong idea as the source); `phys-y11-vacuum-pump-v1.png` (not needed; the chamber is said to be evacuated).

Need (new plate):
1. `y12p-alpha-scattering-chamber-v1.png`: 2, 4; v09 may reuse its source block (open decision there).

Coded: alpha particles and paths, atoms, nuclei, plum-pudding washes, force arrows, counters, Coulomb slider, collision balls, scale bars, cricket oval (top-down grass ellipse, no players), quote card, calculation lines, crossed chips, countdowns, key notes board.

Kit gaps (for the v08 build brief):
1. **Scattering stage.** Thomson version (washes, hairline nudges, zigzag cancellation) and Rutherford version (`m8-rutherford`: impact-parameter-dependent paths, rare reversal), with an angle counter.
2. **Chamber arm.** The microscope-and-screen layer rotating about the foil centre with flash frequency set by angle (schematic).

## Codex asset brief

1. **`y12p-alpha-scattering-chamber-v1.png`** (new). A cutaway of the Geiger-Marsden scattering apparatus in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges), seen from above at a slight angle: a short squat cylindrical metal vacuum chamber with its top cut away to show inside; at the left a small lead block with a narrow slit facing the centre (the source sits inside the block, not visible); at the centre a thin gold foil on a small vertical holder; a small zinc sulfide screen on the end of a horizontal metal arm that pivots about the foil's centre, with a short brass microscope fixed behind the screen pointing back at it from outside the chamber wall (eyepiece visible, no observer); a pipe stub on the chamber wall for the vacuum pump. Deliver the arm, screen and microscope as a separate transparent layer `y12p-alpha-scattering-arm-v1.png` (same scale) with its pivot at the foil centre, so code can rotate it. No beam, no flashes, no text, no labels, no people or hands. Transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, object centred with even margins, soft shadow inside the alpha only. Sidecar anchors: slit exit; foil centre (the arm's pivot); screen centre in the arm layer.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: Thomson's weak-force argument; the electron mass argument; that small random deflections cannot sum to a reversal; the 10⁸ comparison and its stated distances (author note c); the mass argument; path dependence on distance; rarity implies a small target; the size ranges and the pea analogy.
3. Confirm the history: Geiger and Marsden 1909; Rutherford's model 1911; plum-pudding 1904; the 1 in 8000 figure (site note 2); protons named by 1920; the shell quote.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the cricket oval has no players; the bowling-ball inset is two balls only); scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Rutherford's Gold Foil Experiment: Why the Atom Has a Tiny Dense Nucleus | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson11.sa.html

Thomson's plum-pudding atom predicted that alpha particles would pass through gold foil with tiny deflections. Instead, about 1 in 8000 bounced back. See why Thomson's model could not produce that result, how Coulomb's law and a heavy target lead to Rutherford's tiny, dense, positive nucleus, and what the experiment did not settle. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate, assess and model the experimental evidence supporting the nuclear model of the atom, including:
- the Geiger-Marsden experiment
- Rutherford’s atomic model
- Chadwick’s discovery of the neutron (ACSPH026)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: discovering the electron. Next: Chadwick and the neutron.

#HSCPhysics #Physics #Rutherford #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v07; check that "fits either model" lands before the rare result; that the 10⁸ comparison is followable at speed; that the mass argument is distinct from the charge argument; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The flashes thinning as the arm swings, the force arrow too long for the screen and the light-versus-heavy target insets carry the explanation; judge them at playback speed in the voiced preview.
