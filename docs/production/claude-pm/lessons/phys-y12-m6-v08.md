# Year 12 Physics M6 V08: Forces between parallel wires. Why do parallel currents attract or repel? (design)

Status: Revision 2 (7 Nov 2026): brief 189 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,308 characters, 15 scenes, about 564 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v07's final frame.

Scope: eighth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "Under what circumstances is a force produced on a current-carrying conductor in a magnetic field?". Templates as `phys-y12-m6-v07.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson08.sa.txt`, hash checked against the live file): connect, predict and set the historical boundary (prediction, warm-up, intentions, vocabulary), model the field of one long wire (grip rule, Figure 1, B = μ₀I/2πr, MC), derive the pair force and its direction (derivation, Figure 2, worked example, Newton III note, MC), connect the historical wire standard to the current SI (historical wording, current SI, HSC tip, true/false), design and analyse a quantitative investigation (Figure 3, fair test, quality of evidence, linear test), apply, combine and evaluate (Activities 1 and 2, synthesis, "Analyse 6 marks", "Assess 5 marks"), practise and explain (Q1, Q2 and model answers), retrieve and finish: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson08.sa.html`, SHA256 `f6d5798bbb0a4e9546e5d71b2a0d488227622dfc60ab20847c878394676051ff` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v08`, sections `model-the-field-of-one-wire`, `derive-pair-force-and-direction`, `connect-historical-and-current-si`, `design-and-analyse-an-investigation`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Combine one wire field with the force on the other; calculate force per length and show the Newton-third-law pair. Explain the 2017 historical ampere statement alongside the current charge-based SI definition." Practical: "Quantitative primary or secondary parallel-wire force investigation". Next: "phys-y12-m6-v09: Why does changing loop orientation change magnetic flux?"

Owner rules applied: as v07 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: the grip rule and palm rule are coded axes and curled arrows only; the balance, supply, meter, stand and copper rods of the investigation are reused painted plates; wires in the reasoning diagrams are coded HSC-style lines and end-on circles; dots for current out of the screen, crosses for into; every number recalculated in Python; HSC data-sheet symbols F/l = μ₀I₁I₂/2πr with μ₀ = 4π × 10⁻⁷ N A⁻²; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v07 (F = lIB sin θ and the palm rule), Year 11 (a current makes a circular field; the grip rule).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger ids `P6-IQ2-02`, `P6-IQ2-03`), quoted from the route JSON `syllabusActions`:

- `P6-IQ2-02`: "conduct a quantitative investigation to demonstrate the interaction between two parallel current-carrying wires"
- `P6-IQ2-03`: "analyse the interaction between two parallel current-carrying wires ((F)/(l)=(μ_(0))/(2π)(I_(1)I_(2))/(r)) and determine the relationship between the International System of Units (SI) definition of an ampere and Newton’s Third Law of Motion (ACSPH081, ACSPH106)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v07's final frame (two parallel wires, currents up, "?"). Teaches: the observation (same-direction currents attract, opposite repel); the field of one long wire (circles by the grip rule, B = μ₀I/2πr, weaker with distance; μ₀ named); each wire sits in the other's field at right angles, so each feels the v07 force; the directions by the palm rule; F/l = (μ₀/2π)(I₁I₂/r); opposite currents repel; the Newton's third law pair (equal even for unequal currents); the site worked example (2.4 × 10⁻⁴ N m⁻¹, repulsive); the pre-2019 ampere definition (2 × 10⁻⁷ N m⁻¹) and why Newton's third law makes it consistent; the current SI (fixed elementary charge, μ₀ measured); a quantitative balance investigation with an illustrative dataset and the linear graph (gradient μ₀/2π). Stops before three-wire vector sums (site Q2, a practice extension), flux (v09) and induction.

## Decisions

- **Learner question (route wording kept).** "Why do parallel currents attract or repel?" is causal. The answer, built in order: each current makes a circular field (2); the other wire sits in that field at right angles, so it feels a motor-effect force (3); for same-direction currents the palm rule points each force towards the other wire (3); reversing one current reverses the forces (5).
- **Hook (site "Before you read, predict", unchanged case).** Two long wires hang side by side a few centimetres apart; same-direction currents; 3 s prediction with three chips (attract, repel, nothing); the wires bow together; then one current reverses and they bow apart. The bowing is illustrative (author note a).
- **End-on view for all reasoning (site Figures 1 and 2).** Dots for current out of the screen, crosses for into, as v07. Wire 1 on the left, wire 2 on the right, distance r between centres.
- **Field of one wire (site section 2).** The grip rule is recalled from Year 11 in a sentence and shown as a coded curled arrow round a orange "I" axis (no hand). B = μ₀I/2πr is stated, with μ₀ given a plain meaning; the 1/r fall-off is shown by circles spaced wider and a "double r, half B" tag. It is not derived (Year 11 content).
- **Derivation (site section 3).** F = B₁I₂l with B₁ = μ₀I₁/2πr at wire 2 (at right angles to wire 2, so sin θ = 1), then divide by l. The data-sheet form F/l = (μ₀/2π)(I₁I₂/r) is framed. Both force directions are found with the v07 palm-rule axes.
- **Symbol r (site note 1).** The site uses d in its formula card and worked example; this design uses r throughout, as the syllabus and the HSC data sheet do.
- **Worked example (site, unchanged).** 12 A up and 8.0 A down, 8.0 cm apart: 2.4 × 10⁻⁴ N m⁻¹, repulsive; reversing both currents changes nothing. Used to show the third-law pair with unequal currents (site "Analyse 6 marks" top-band point).
- **Ampere (site section 4 and HSC tip).** The pre-2019 definition is paraphrased in narration and quoted from the site on screen; "check it" substitutes 1, 1 and 1 into the formula (2 × 10⁻⁷ N m⁻¹). The relationship to Newton's third law (syllabus wording): the definition specifies "the force between these conductors" as a single value, which is meaningful because the two wires push on each other equally (third law), so it does not matter which wire is measured. The current SI is stated as the site states it: e fixed exactly at 1.602176634 × 10⁻¹⁹ C, so one ampere is a flow of about 6.24 × 10¹⁸ elementary charges per second; μ₀ is now measured, and 4π × 10⁻⁷ remains an excellent approximation. The narration labels the wire definition "until 2019", per the site's HSC tip ("do not blend the two statements").
- **Investigation (site section 5 and Figure 3; `P6-IQ2-02`).** A current balance built from reused plates: the lower copper rod fixed on insulating blocks on a top-pan balance, the upper rod clamped a measured distance above it, joined in series so the same current flows out along one and back along the other (opposite currents: repulsion pushes the lower rod down and the reading rises). Variables: independent I (so I₁I₂ = I²); controlled r, l and alignment; dependent F/l from the reading change. Linear test: F/l against I₁I₂/r through the origin, gradient μ₀/2π. **Dataset illustrative** (author note b; labelled "illustrative data" on screen and "for example" in narration). Safety: short bursts of current. Limitations named on screen only (finite length, wire movement changing r, heating).
- **Memory aid (scene 9, new): "Like currents attract, unlike currents repel: the opposite of magnets."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: 20 A and 5.0 A, opposite, 4.0 cm: 5.0 × 10⁻⁴ N m⁻¹, repel; the 20 A wire feels the same force (third law). A2: both currents and the separation doubled: force per unit length doubles. Crossed: A1 "the bigger current pushes harder"; A2 "1/r², like gravity: no change".
- **Significant figures.** Site data give 2.4 × 10⁻⁴ N m⁻¹; A1 5.0 × 10⁻⁴ N m⁻¹ (two significant figures); the ampere check 2 × 10⁻⁷ N m⁻¹ as defined.
- **Handoff (route next).** Scene 14 turns from forces to Faraday's reverse question and shows a square loop in a uniform field, tilted, with "?" (v09: "Why does changing loop orientation change magnetic flux?"). See "Final frame".
- **Colour key:** as v07 (current orange, field slate, force amber). Wire 1's field circles slate, wire 2's field circles a lighter slate so the two fields stay distinct; the distance r navy.
- **Colour roles (Revision 2, fixed for the whole video).** As the colour key, plus: B readouts slate; F/l readouts and force arrows amber; currents I₁, I₂ orange; distances r navy; μ₀ ink; graph points and fitted line ink with the gradient tag amber; framed answers in a dark-ink frame; crossed slips and slip tags red; hand-font tags in the colour of the quantity they mark. Wire 2's lighter slate stays at full opacity.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 4, 6 and feedback rows 52 px; framed "F/l = (μ₀/2π)(I₁I₂/r)" 60 px); live readouts (scene 2 probe B and r; scene 4 sliders I₁, I₂, r and F/l; scene 8 balance display and ammeter) about 52 px; the ampere cards' quoted text 32 px; graph axis labels and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px, 30 px on the answer-side strip; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 is a real bench: two painted retort stands (`phys-y11-retort-stand-v1.png`) joined by a coded crossbar, two coded aluminium foil strips hanging from it (author note a), and the painted car battery (`phys-y11-car-battery-v1.png`) with the knife switch (`phys-y11-knife-switch-v1.png`, blade layer) as the high-current source, tag "short bursts only". Scene 2 opens on the painted wire-through-card stand (`phys-y11-wire-card-stand-v1.png`) with plotting compasses (`phys-y11-plotting-compass-v1.png`, coded needles) on the card, the Year 11 picture of a wire's circular field. Scene 8 keeps its balance bench.
- **Simulation (Revision 2).** Core live control in scene 4: sliders for I₁, I₂ and r on the two-wire end-on panel, with a live F/l readout and both amber arrows redrawn equal at every setting (Python, starting at 10 A, 10 A, 5.0 cm: 4.0 × 10⁻⁴ N m⁻¹; I₁ to 20 A: 8.0 × 10⁻⁴; r to 10 cm with 10 A each: 2.0 × 10⁻⁴). Scene 2 has a probe slider on one wire's field with a live B readout (10 A: 2.0 × 10⁻⁴ T at 1.0 cm, 1.0 × 10⁻⁴ T at 2.0 cm, 5.0 × 10⁻⁵ T at 4.0 cm). Scene 1's bowing strips and scene 8's balance display are live too.
- **Stage changes (Revision 2 redesign; high-risk list).** Revision 1 held one end-on stage through scenes 2 to 5 (about 144 s, camera continue throughout). Revision 2 gives each scene its own stage: scene 2 the wire-and-card plate turning into the end-on single-wire field with its probe (about 44 s); scene 3 the two-wire end-on stage with the palm-rule axes (about 41 s); scene 4 full-width algebra with the live slider panel at the left (about 30 s); scene 5 a side-by-side comparison, "same direction" frozen on the left and "opposite" built on the right (about 28 s). Scenes 7 and 8 (about 60 s and 55 s) each change their picture part way through (the second ampere card; the graph). No set-up runs past about 60 s.
- **Investigation method (Revision 2, brief 189 optional).** The separation r is measured centre to centre between the rods (bracket label "r: centre to centre"). The lower rod's leads leave at right angles to the rods and are twisted together away from the balance, so the magnetic forces on its own leads largely cancel; a control run with the upper rod removed should show no reading change with current, and any residual change is subtracted. These go on screen as two method chips and in the method notes; no experimental result is claimed (the dataset stays illustrative).
- **Site sources used:** predict box (1); vocabulary "Force per unit length", "Permeability of free space", "Ampere definitions" (2, 7); grip rule, Figure 1 and B = μ₀I/2πr (2); derivation, Figure 2 and direction rule (3 to 5); worked example (6); Newton III vector pair (6); historical wording, current SI and HSC tip (7); Figure 3, fair test, quality of evidence and linear test (8); "Analyse 6 marks" (3 to 6: two stages, product not sum, unequal currents); "Assess 5 marks" (7: physics still sound, definition moved); Activity 1 ideas (A2). Not used: Q2's three-wire net force (a practice extension beyond the route stop), the MC drills, Activity 2's 2 A check.
- **Site notes (quoted from site lesson 8, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Symbol (precision note): the formula card and worked example write "$F/l = \mu_0 I_1 I_2 / (2\pi d)$" with "d perpendicular separation", while the syllabus, the HSC data sheet and the lesson's own "Analyse 6 marks" answer use r. Suggest r throughout (or a note that d here is the data sheet's r).
  2. Checked and correct: Figure 2 directions (both out of the page: attract); worked example (2.4 × 10⁻⁴ N m⁻¹, repulsive; reversing both changes nothing); MC (1.0 × 10⁻⁴ N/m); MC "current up, point to the east" (into the page); historical and current SI statements; Q1 (6.0 × 10⁻⁴ N m⁻¹, attract); Q2 (6.0, 4.0 and net 2.0 × 10⁻⁴ N m⁻¹ to the right); "Extend" (doubles).
- **Cause chain taught, in order:** (1) same-direction currents attract and opposite currents repel (1); (2) a current makes a circular field that weakens with distance, B = μ₀I/2πr (2); (3) the second wire sits in that field at right angles, so it feels the motor-effect force, towards the first wire for same-direction currents (3); (4) the first wire likewise feels a force towards the second (3); (5) substituting the field into F = BIl gives F/l = (μ₀/2π)(I₁I₂/r) (4); (6) reversing one current reverses its force, so opposite currents repel (5); (7) the forces form a third-law pair, equal even for unequal currents (6); (8) that equality let the force define the ampere until 2019; today e is fixed (7); (9) the relationship can be tested with a balance and a straight-line graph (8).
- **Entry knowledge (route `entryKnowledge`):** v07's F = lIB sin θ and palm rule; Year 11 field of a current and the grip rule; Newton's third law; F = mg.
- **Learner-visible vocabulary (plain meaning at first use):** right-hand grip rule (curled direction of a wire's field, 2); permeability of free space μ₀ (a constant that sets how strong a field a current makes, 2); force per unit length F/l (the force on each metre of wire, 4); Newton's third law pair (equal, opposite forces on two different objects, 6); elementary charge (the size of the charge on one electron or proton, 7); gradient (the slope of the graph, 8).
- **Legacy logic ported:** none. The coded family `m6-parallel-wires` supplies the two-wire field and force parts; its limits ("same-direction case only; no SI definition claim") are extended here (kit gap 1).
- **New explainer motion:** **two-wire end-on stage** (two circles with dots or crosses, each wire's field circles in its own slate, the other wire's position marked on them, field arrows at each wire, palm-rule axes from v07, force arrows drawn equal in length whatever the currents); **hanging pair** (two vertical coded wires that bow together or apart, illustrative); **ampere card** (the site's historical quote, a "until 2019" stamp and a "since 2019" card); **current balance** (plate stage: top-pan balance with a coded display digit layer, two copper rods, stand and clamp, supply and meter, coded leads with current arrows, a coded ruler bracket for r); `DataGraph` (F/l against I₁I₂/r with illustrative points and a fitted line through the origin); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the end-on stage on the left; working on the right; the balance stage centre-left with the graph right in scene 8; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Hook bowing is illustrative: real classroom demonstrations use light aluminium foil strips and tens of amps for a visible effect; no displacement is shown as a value.
  (b) Illustrative dataset (scene 8; r is centre to centre, Revision 2): l = 0.50 m, r = 0.010 m, I = 6, 8, 10, 12, 14 A (same current in both rods, opposite directions); reading rises 0.04, 0.06, 0.10, 0.15, 0.20 g (balance to 0.01 g; ideal predictions 0.037, 0.065, 0.102, 0.147, 0.200 g). F/l = Δm g / l = 7.84 × 10⁻⁴, 1.18 × 10⁻³, 1.96 × 10⁻³, 2.94 × 10⁻³, 3.92 × 10⁻³ N m⁻¹ against I₁I₂/r = 3.6, 6.4, 10.0, 14.4, 19.6 × 10³ A² m⁻¹; gradient through the origin 2.0 × 10⁻⁷ N A⁻². The narration quotes one point: 10 A, reading up 0.10 g.
  (c) Directions (x right, y up the screen, z out of the screen; wire 1 at the origin, wire 2 at +x): both currents +z: B₁ at wire 2 along +y, F on wire 2 = z × y = −x (towards wire 1); B₂ at wire 1 along −y, F on wire 1 = z × (−y) = +x. Wire 2 reversed (−z): F on wire 2 = (−z) × y = +x (away).
  (d) "The opposite of magnets": a loose analogy for memory only; the wires have no poles. The narration says "the opposite of what you'd guess from magnets, where like poles repel".
  (e) Pronunciations: "mu nought"; "I one", "I two"; "F over l"; "two times ten to the minus seven"; "twenty nineteen".
- **Open decisions for root:**
  - **1. Investigation depth (learning review).** Scene 8 is about 700 characters with an illustrative dataset. If the review finds it rushed, move the graph to a later practical video and keep the set-up and the reading change.
  - **2. SI wording (science check).** "About 6.24 × 10¹⁸ elementary charges per second" as the plain meaning of the current definition (the formal definition fixes e and the second); confirm.
  - **3. Data-sheet check.** Confirm B = μ₀I/2πr and μ₀ = 4π × 10⁻⁷ N A⁻² appear on the HSC Physics data and formula sheet in this form.
Main question: *Two long wires side by side pull together when their currents run the same way and push apart when they run opposite ways. Why?*
Entry knowledge: v07's motor effect and palm rule; a current makes a circular field (Year 11).
Stops after: field of one wire, force on the other, F/l, direction rule, third-law pair, both ampere statements, the balance investigation. No three-wire sums.
Handoff: v09, why changing loop orientation changes magnetic flux.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *F/l*, *μ₀*, *I₁*, *I₂*, *r*, *B*.

### 1. hook (pull together or push apart?)
> Two long wires hang side by side, a few centimetres apart, and both carry a current upwards. Each one sits in the other's magnetic field. So will they pull together, push apart, or do nothing at all? Make your **prediction**. They pull **together**. Now reverse one of the currents. This time they push **apart**. So why do parallel currents attract, and opposite currents **repel**?

Visual: opens on v07's final frame (see "Opening frame"). The "Next" chip becomes the heading: "Why do parallel currents attract or repel?". Anchor (Revision 2): on "Two long wires hang" the two coded wires become two aluminium foil strips (coded, light grey) hanging from a coded crossbar between two painted retort stands (`phys-y11-retort-stand-v1.png`, uniform scale, about 620 px tall), with coded leads to the painted knife switch (`phys-y11-knife-switch-v1.png` with its blade layer) and the painted car battery (`phys-y11-car-battery-v1.png`, about 300 px wide) at the right, tag "short bursts only" (30 px). On "prediction" a 3 s `Countdown` beside three chips "pull together", "push apart", "nothing". On "together" the two wires bow towards each other at their middles (illustrative, author note a); the "pull together" chip ticks; two amber arrows point inwards. On "Now reverse one of the currents" the right wire's orange arrow flips to point down and the wires straighten. On "apart" they bow away from each other; amber arrows point outwards. On "repel" a tag under the wires: "same direction: attract; opposite: repel". Hand tags: orange "both up" by the first pair of current arrows; amber "pull in" and "push out" by the two bows, each with a pen arrow; a pen ring round the flipped current arrow.

### 2. the field of one wire
> Start with one wire. Look at it end on, with its current coming out of the screen towards us. That's a dot. Its magnetic field makes circles around it. The right-hand grip rule from Year 11 gives the direction. Thumb along the current, and the fingers curl the way the field goes, anticlockwise **here**. The field gets weaker further out. Its strength is B equals mu nought I over two pi r, where r is the distance from the **wire**. Mu nought is a constant, about four pi times ten to the minus seven, that sets how strong a field a current makes. Double the distance, and the field **halves**.

Visual (Revision 2 stage change): clear change to the painted wire-through-card stand (`phys-y11-wire-card-stand-v1.png`, uniform scale, about 640 px tall) with six painted plotting compasses (`phys-y11-plotting-compass-v1.png`, about 90 px each, coded needles) in a ring on the card round the wire. On "end on" the camera rises above the card and looks straight down, so the wire becomes an orange circle with a dot, "I₁ (out of the screen)", and the card fills the stage. On "makes circles around it" the compass needles swing to lie along a circle round the wire, and three slate circles draw around it through the compasses; slate hand tag "compasses line up in circles". On "right-hand grip rule" a coded axis "thumb: I" (orange, out of the screen, in perspective) with a curled slate arrow round it "fingers curl: B" (no hand). On "here" arrowheads on the three circles point anticlockwise. On "wire" the equation strip "B = μ₀I / 2πr" with a navy radius "r" from the wire to a point on the middle circle. On "Mu nought is a constant" a chip "μ₀ ≈ 4π × 10⁻⁷ N A⁻² (data sheet)". On "halves" the point moves from r to 2r and a field arrow at the point shrinks to half length, tag "double r, half B". Revision 2 (live probe): a probe dot on a navy r slider carries a live readout (52 px): navy "r", slate "B" for I₁ = 10 A (1.0 cm: 2.0 × 10⁻⁴ T; 2.0 cm: 1.0 × 10⁻⁴ T; 4.0 cm: 5.0 × 10⁻⁵ T); on "halves" it runs from 2.0 cm to 4.0 cm. "B = μ₀I/2πr" framed. Hand tags: slate "anticlockwise here" with a pen arc on the circle; navy "× 2 → ÷ 2" by the readout.

### 3. the second wire feels a push
> Now put a second wire to the right, a distance r away, also with its current out of the screen. Wire one's field circles pass through it, and at wire two that field points straight up the **screen**. So wire two is a current in a magnetic field, at right angles to it. That's last video's motor effect. Thumb out of the screen, fingers up, and the palm faces left, so wire two is pushed towards wire **one**. Now swap roles. Wire one sits in wire two's field, which points down at wire one. That pushes wire one to the **right**, towards wire two. They **attract**.

Visual: a second orange circle with a dot slides in at the right, "I₂ (out of the screen)", with the navy distance "r" between centres. On "Wire one's field circles pass through it" wire 1's slate circle through wire 2 brightens. On "screen" a slate arrow "B₁" at wire 2 points up. On "That's last video's motor effect" v07's palm-rule axes appear at wire 2 (orange "thumb: I₂" out of the screen, slate "fingers: B₁" up, amber "palm faces: F"); on "one" an amber arrow "F on 2" points left from wire 2. On "Now swap roles" wire 2's own circles draw in light slate; the one through wire 1 brightens with a light-slate arrow "B₂" pointing down at wire 1. On "right" an amber arrow "F on 1" points right from wire 1. On "attract" both amber arrows pulse; tag "same direction: attract", framed. Revision 2: clear change to the two-wire end-on stage at full width (wires about 110 px across, 520 px apart) with the compass card gone; slate hand tag "B₁ up at wire 2" with a pen ring round the field arrow; amber hand tag "towards each other" with a pen arrow joining the two force arrows.

### 4. how big is the force?
> How big is that force? Wire two feels F equals B I l, where B is wire one's field at wire two. Swap in B equals mu nought I one over two pi r, and the force on a length l of wire two is mu nought I one I two l, over two pi **r**. Divide by l to get the force on each metre of wire. F over l equals mu nought over two pi, times I one I two over **r**. More current gives more force, and more distance gives **less**.

Visual (Revision 2 stage change): clear change to full-width algebra on the right with the two-wire end-on panel at the left (about 40% of the frame) carrying three sliders (orange I₁, orange I₂, navy r) and a live amber "F/l" readout (52 px). Equation strip: "on wire 2: F = B₁I₂l (B₁ ⟂ wire 2, so sin θ = 1)". On "Swap in" "B₁ = μ₀I₁ / 2πr" slides into the B₁ slot. On "r" `AlignedAlgebra` "F = μ₀I₁I₂l / 2πr". On "Divide by l" "F/l = μ₀I₁I₂ / 2πr". On the second "r" the data-sheet form writes and frames "F/l = (μ₀/2π)(I₁I₂/r)" (60 px), grey-ink tag "Physics Stage 6 (2017)". On "More current" (the core live control) the panel starts at 10 A, 10 A, 5.0 cm, F/l = 4.0 × 10⁻⁴ N m⁻¹, and the I₁ slider runs to 20 A: the readout ticks to 8.0 × 10⁻⁴ and both amber arrows grow together, still equal; on "less" I₁ returns to 10 A and the r slider runs to 10 cm: the readout falls to 2.0 × 10⁻⁴ N m⁻¹. Tags under the box: "I₁ × 2 → F/l × 2", "r × 2 → F/l ÷ 2". Hand tags: orange "I₁ × I₂: a product" with a pen ring round "I₁I₂"; amber "always equal" on the two arrows; ink "one l cancels".

### 5. opposite currents repel
> Now reverse the current in wire two, so it goes into the screen. Wire one's field at wire two still points up. But now the thumb points into the screen, so the palm faces right, and wire two is pushed **away**. Wire two's own field has reversed too, so the push on wire one also flips, to the **left**. Same size of force, but now they **repel**. Reverse both currents, and nothing changes.

Visual (Revision 2 stage change): clear change to a side-by-side comparison: the left half keeps scene 3's attracting pair frozen, headed "same direction", and the right half builds a second end-on pair (both dots, attraction arrows) headed "opposite". On "reverse the current in wire two" the right pair's wire 2 dot becomes a cross, "I₂ (into the screen)". On "still points up" B₁ at wire 2 pulses. On "away" the palm-rule axes at wire 2 rotate (thumb into the screen) and the amber arrow on wire 2 flips to point right. On "left" wire 2's light slate circles reverse direction; B₂ at wire 1 flips to point up and the amber arrow on wire 1 flips to point left. On "repel" both outward arrows pulse; tag "opposite: repel". On "Reverse both currents" an inset (about 30% of the frame): a cross and a dot (both flipped from the right pair), arrows still outward; then two crosses, arrows inward. Revision 2: "opposite: repel" framed; amber hand tag "flip one: forces flip" with a pen arrow between the halves; orange hand tag "flip both: same".

### 6. equal forces: a worked example
> Two long parallel wires are eight point zero centimetres apart. One carries twelve amps upwards, the other eight point zero amps downwards. Mu nought over two pi is two times ten to the minus seven, so F over l is two times ten to the minus seven, times twelve times eight point zero, over zero point zero eight zero. That's two point four times ten to the minus four newtons per **metre**. The currents are opposite, so the wires **repel**. Which wire gets the bigger push? Neither. The formula multiplies I one by I two, so it's the same for both wires. That's a Newton's third law **pair**: equal in size, opposite in direction, and acting on two different wires.

Visual: board change to the working layout, the end-on stage at the left (about 40% of the frame) (a dot "12 A" on the left, a cross "8.0 A" on the right, r = 8.0 cm). Task strip: "Find the force per metre between the wires, and whether they attract or repel." Equation strip: "F/l = (μ₀/2π)(I₁I₂/r)". Givens grouped: "I₁ = 12 A (up)", "I₂ = 8.0 A (down)", "r = 8.0 cm = 0.080 m", "μ₀/2π = 2 × 10⁻⁷ N A⁻²". On "metre" `AlignedAlgebra` "F/l = 2 × 10⁻⁷ × (12 × 8.0) / 0.080 = 2.4 × 10⁻⁴ N m⁻¹" (52 px), framed. On "repel" outward amber arrows on the small stage, chip "opposite currents: repel". On "Neither" the two amber arrows redraw at exactly equal length, labels "2.4 × 10⁻⁴ N m⁻¹" on each. On "pair" a chip "Newton's third law pair: equal size, opposite direction, on different wires", framed; a chip "12 A wire pushes harder" fades in and is crossed in red, red hand tag "same product". Hand tags: navy "cm → m" with a pen ring round "0.080 m"; amber "equal arrows".

### 7. the ampere, then and now
> This force was once used to define the amp. Until twenty nineteen, one amp was the steady current that, in two long straight parallel wires one metre apart in a vacuum, gave a force of two times ten to the minus seven newtons on each metre of **wire**. Check it. Two times ten to the minus seven, times one times one, over one. Newton's third law is what made that definition work. The two wires push on each other equally, so it didn't matter which wire you **measured**. Since twenty nineteen, it's defined differently. The size of the charge on one electron, called the elementary charge, is fixed exactly. One amp is now a flow of about six point two four times ten to the eighteen elementary charges every **second**. Mu nought is now measured, but four pi times ten to the minus seven is still extremely close.

Visual: board change: two long horizontal coded wires "1 m apart", each "1 A", same direction, small amber inward arrows "2 × 10⁻⁷ N per metre". On "Until twenty nineteen" a card with the site's quote of the historical wording and a stamp "SI definition until 20 May 2019". On "wire" the arrows label "2 × 10⁻⁷ N m⁻¹". On "Check it" `AlignedAlgebra` "F/l = 2 × 10⁻⁷ × (1 × 1) / 1 = 2 × 10⁻⁷ N m⁻¹" (tick). On "measured" the two arrows pulse equal, chip "third law: same force on each wire". On "Since twenty nineteen" a second card "SI definition since 2019: e = 1.602176634 × 10⁻¹⁹ C exactly"; on "second" a line "1 A = 1 C s⁻¹ ≈ 6.24 × 10¹⁸ elementary charges per second" with a small stream of dots crossing a line. On "Mu nought is now measured" a chip "μ₀ ≈ 4π × 10⁻⁷ N A⁻² (measured)"; the historical card shrinks to a grey-ink tag "historical" (full ink, 30 px). Revision 2: the check row "2 × 10⁻⁷ N m⁻¹" framed; the "since 2019" card fills the right half when it arrives, with the charge stream about 300 px long and a live counter ticking up to "6.24 × 10¹⁸ in 1 s"; hand tags: amber "equal on each wire: third law" with a pen ring round the two arrows; ink "until 2019" on the stamp; a chip "the wire definition is today's SI" fades in and is crossed in red.

### 8. measure it yourself
> You can measure this force. Fix one copper rod flat on the pan of a sensitive balance, and clamp a second rod just above it, a measured distance away. Join them so the same current runs out along one and back along the other. Opposite currents repel, so the lower rod is pushed down, and the balance reading **rises**. For example, ten amps might raise it by zero point one zero grams. Turn that into a force with F equals m g, and divide by the rods' length. Change the current, but keep the distance, the length and the alignment **fixed**. Then plot F over l against I one I two over r. If the model holds, the points make a straight line through the origin, with a gradient of mu nought over two pi, two times ten to the minus **seven**.

Visual: board change to the balance stage: the top-pan balance plate (`phys-y11-top-pan-balance-v1.png`) with a coded display layer; a copper rod (`phys-y11-rod-copper-v1.png`) on two small coded insulating blocks on the pan; a second copper rod above it held by a clamp on a retort stand (`phys-y11-retort-stand-v1.png`); coded leads to the low-voltage supply (`phys-y11-low-voltage-supply-v1.png`) through the digital multimeter as an ammeter (`phys-y11-digital-multimeter-v1.png`); a navy bracket "r: centre to centre" between the rods (Revision 2). On "the same current runs out along one and back along the other" orange arrows run right along the top rod and left along the bottom rod. On "rises" an amber arrow pushes down on the lower rod and the display ticks up. On "ten amps" the meter reads "10.0 A" and the display change reads "+0.10 g" (tag "illustrative data"). On "F equals m g" a strip "F = Δm g = 0.10 × 10⁻³ × 9.8 = 9.8 × 10⁻⁴ N; F/l = 9.8 × 10⁻⁴ / 0.50 = 1.96 × 10⁻³ N m⁻¹". On "fixed" chips "independent: I", "dependent: F/l", "controlled: r, l, alignment", and two method chips (Revision 2, brief 189): "lower rod's leads: at right angles, twisted together" and "control: remove the top rod; reading should not change". The balance display and ammeter are live readouts (52 px). On "Then plot" the stage shrinks left and a `DataGraph` "F/l (N m⁻¹)" against "I₁I₂/r (A² m⁻¹)" plots the five illustrative points (author note b). On "seven" a fitted line through the origin draws with "gradient ≈ 2.0 × 10⁻⁷ N A⁻² = μ₀/2π" (tick, framed), then a grey-ink chip "safety: short bursts of current (rods heat up); limits: finite rods, rods move (r changes), heating, forces on the leads". Hand tags: amber "pushed down: reading up" with a pen arrow from the lower rod to the display; ink "straight through 0" on the fitted line.

### 9. a way to remember
> Here's a way to remember the direction. Like currents attract, unlike currents repel. That's the opposite of what you'd guess from magnets, where like poles repel. And whatever the currents, the two forces are always the same **size**.

Visual: board clears to two pairs of end-on wires: two dots with inward arrows, a dot and a cross with outward arrows. On "Like currents attract" the left pair pulses; on "unlike currents repel" the right pair pulses. On "magnets" a small grey ghost of two bar-magnet outlines "N N" with outward arrows appears and dims (tag "magnets: the other way round"). On "size" the handwritten line writes large above (52 px), inside a framed memory card: "Like currents attract, unlike currents repel." with "equal and opposite (Newton's third law)" under it (36 px). Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Two long parallel wires are four point zero centimetres apart. One carries twenty amps, and the other carries five point zero amps in the opposite direction. Calculate the force per metre on the five amp wire, state whether the wires attract or repel, and compare it with the force per metre on the twenty amp wire. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Two long, straight, parallel wires are 4.0 cm apart in air. One carries a current of 20 A and the other a current of 5.0 A in the opposite direction. (a) Calculate the magnitude of the force per unit length on the 5.0 A wire. (b) State whether the wires attract or repel. (c) Compare the force per unit length on the 20 A wire with your answer to (a), and justify your comparison. (4 marks)" A small coded diagram: two end-on circles 4.0 cm apart, one with a dot "20 A", one with a cross "5.0 A". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> F over l is two times ten to the minus seven, times twenty times five point zero, over zero point zero four zero. That's five point zero times ten to the minus four newtons per **metre**. Opposite currents, so they **repel**. And the twenty amp wire feels exactly the same force, by Newton's third law. The classic slip is saying the bigger current pushes **harder**.

Visual: card shrinks to the top; "4.0 cm", "20 A", "5.0 A" and "opposite direction" underline. On "metre" `AlignedAlgebra` "(a) F/l = 2 × 10⁻⁷ × (20 × 5.0) / 0.040 = 5.0 × 10⁻⁴ N m⁻¹". On "repel" "(b) repel" with outward arrows on the diagram. On "Newton's third law" "(c) equal: 5.0 × 10⁻⁴ N m⁻¹, opposite direction (Newton's third law)". Rows (52 px); "5.0 × 10⁻⁴ N m⁻¹", "repel" and "equal" framed. Answer side (Revision 2): a navy givens strip "I₁ = 20 A, I₂ = 5.0 A (opposite), r = 4.0 cm = 0.040 m, μ₀/2π = 2 × 10⁻⁷ N A⁻²" and the card's diagram enlarged at the right with equal outward amber arrows. On "harder" a chip "20 A wire feels 4 × more" fades in and is crossed in red (caption "F/l uses I₁ × I₂: the same for both"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Two long parallel wires carry currents in the same direction. Both currents are doubled, and the distance between the wires is also doubled. By what factor does the force per unit length change? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two long, straight, parallel wires carry currents in the same direction. Both currents are doubled and the separation of the wires is doubled. Determine the factor by which the magnetic force per unit length between the wires changes. (2 marks)" Picture on the card (Revision 2): two end-on dots "I" with a navy "r" between them and inward amber arrows, no values. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The force depends on I one times I two, so doubling both currents makes it four times **bigger**. Doubling the distance halves it. Four times a half is two, so the force per unit length **doubles**. The slip is using one over r squared, like gravity. That gives four over four, no change. For long wires, it's one over **r**.

Visual: card shrinks to the top; "Both currents are doubled" and "separation ... is doubled" underline. On "bigger" "I₁I₂ → (2I₁)(2I₂) = 4I₁I₂". On "doubles" "r → 2r: ÷ 2", "F/l × 4 ÷ 2 = × 2" (framed). Answer side (Revision 2): a navy givens strip "I₁ → 2I₁, I₂ → 2I₂, r → 2r" and, at the right, the card's picture redrawn with "2I" on each wire, "2r" between them and arrows twice as long. On "r" a chip "÷ (2)² = ÷ 4: no change" fades in and is crossed in red (caption "F/l ∝ 1/r, not 1/r²"), red hand tag "1/r for wires". Hold about 1 second.

### 14. handoff
> So currents push on currents through their magnetic fields. Michael Faraday asked the reverse question. Can a magnetic field make a current? To answer that, we first need a way to measure how much magnetic field passes through a loop of wire. And that depends on which way the loop is **facing**.

Visual: board clears (camera change). On "Michael Faraday" a small text tag "Michael Faraday, 1831" (no portrait). On "make a current" a square coded wire loop draws in perspective in a region of evenly spaced slate field arrows pointing to the right. On "passes through a loop of wire" the field arrows that pass through the loop brighten. On "facing" the loop tilts by about 50° about a vertical axis and fewer arrows brighten; a navy arrow at right angles to the loop's face appears briefly; a large "?" and a chip "Next: why does changing loop orientation change magnetic flux?". Revision 2: slate hand tag "fewer lines through?" with a pen ring round the brightened arrows (it fades before the hold, so the final frame below is unchanged). Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Each wire sits in the other's field: F = BIl.
2. F/l = (μ₀/2π)(I₁I₂/r); μ₀/2π = 2 × 10⁻⁷.
3. Same direction attract; opposite repel.
4. Equal forces: a Newton's third law pair.
5. Ampere: wire force until 2019; e fixed since.

Memory aid (framed card under the notes, hand lettering, 44 px): *Like currents attract, unlike currents repel.* Bullets 36 px in the role colours; no paragraphs. The quiet hold is about 60 s (at least 40 s).

## Teaching checks

- **Does it explain causes?** Why the wires interact: each sits in the other's field (3). Why same-direction currents attract: the palm rule with the field's direction at each wire (3). Why reversing one current gives repulsion (5). Why the forces are equal: the formula is symmetric in I₁I₂, a third-law pair (6). Why the old ampere definition worked: the third law (7). Why a straight-line graph tests the model (8).
- **Misconceptions addressed:** the bigger current pushes harder (6, 11, crossed); like currents repel like magnets (9); 1/r² (13, crossed); the wire definition is still the SI definition (7); "exactly 4π × 10⁻⁷" today (7).
- **One idea at a time:** observation (1), one field (2), one force then the other (3), size (4), reversal (5), equality (6), ampere (7), experiment (8).
- **Video makes it easier:** the hanging wires bowing (1); circles growing round a dot (2); the field arrow at the other wire and the rotating palm-rule axes (3, 5); equal arrows redrawn for 12 A and 8 A (6); the balance reading ticking up and the points falling on a line (8).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 24 s.
- **Avoided double teaching:** v07's motor effect and palm rule recalled; Year 11's grip rule and B = μ₀I/2πr recalled in a sentence.
- **Syllabus coverage:** `P6-IQ2-03`: F/l, direction, the SI ampere and Newton's third law (2 to 7). `P6-IQ2-02`: a quantitative investigation design with an illustrative dataset (8); the student's own practical remains a school activity.
- **Out of scope by design:** three-wire vector sums, flux (v09), induction (v10).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "Two long, straight, parallel wires are 4.0 cm apart in air. One carries a current of 20 A and the other a current of 5.0 A in the opposite direction. (a) Calculate the magnitude of the force per unit length on the 5.0 A wire. (b) State whether the wires attract or repel. (c) Compare the force per unit length on the 20 A wire with your answer to (a), and justify your comparison."
Model answer: (a) F/l = (μ₀/2π)(I₁I₂/r) = 2 × 10⁻⁷ × 20 × 5.0 / 0.040 = 5.0 × 10⁻⁴ N m⁻¹. (b) Opposite currents: repel. (c) Equal in magnitude (5.0 × 10⁻⁴ N m⁻¹) and opposite in direction: the forces are a Newton's third law pair; the expression contains the product I₁I₂, the same for both wires. Classic mistake (crossed): "the 20 A wire exerts the larger force".

**Attempt 2 (scene 12; original wording, HSC style, 2 marks).** "Two long, straight, parallel wires carry currents in the same direction. Both currents are doubled and the separation of the wires is doubled. Determine the factor by which the magnetic force per unit length between the wires changes."
Model answer: F/l ∝ I₁I₂/r: (2 × 2)/2 = 2; the force per unit length doubles (and stays attractive). Classic mistake (crossed): treating the force as ∝ 1/r² (factor 4/4 = 1, no change).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| μ₀ | 4π × 10⁻⁷ N A⁻²; μ₀/2π = 2 × 10⁻⁷ N A⁻² | 2, 4, 6 to 8 |
| Worked example (site, unchanged) | 12 A, 8.0 A, opposite, r = 0.080 m: F/l = 2.4 × 10⁻⁴ N m⁻¹, repel | 6, key notes |
| Ampere check | 2 × 10⁻⁷ × 1 × 1 / 1 = 2 × 10⁻⁷ N m⁻¹ | 7 |
| Elementary charge | e = 1.602176634 × 10⁻¹⁹ C; 1/e = 6.2415 × 10¹⁸ per coulomb | 7 |
| Investigation (illustrative) | l = 0.50 m, r = 0.010 m; I = 6, 8, 10, 12, 14 A; Δm = 0.04, 0.06, 0.10, 0.15, 0.20 g; F/l = 7.84 × 10⁻⁴ to 3.92 × 10⁻³ N m⁻¹; x = 3.6 × 10³ to 1.96 × 10⁴ A² m⁻¹; gradient 2.0 × 10⁻⁷ | 8 |
| Quoted point | 10 A: 0.10 g; F = 9.8 × 10⁻⁴ N; F/l = 1.96 × 10⁻³ N m⁻¹ | 8 |
| A1 | 2 × 10⁻⁷ × 20 × 5.0 / 0.040 = 5.0 × 10⁻⁴ N m⁻¹, repel, equal | 10, 11 |
| A2 | 4 / 2 = 2; slip 4 / 4 = 1 | 12, 13 |
| Directions | author note c | 3, 5 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 4π × 10⁻⁷ / 2π = 2.0 × 10⁻⁷; field of 12 A at 0.080 m = 3.0 × 10⁻⁵ T.
- 2 × 10⁻⁷ × 12 × 8.0 / 0.080 = 2.4 × 10⁻⁴; 2 × 10⁻⁷ × 1 × 1 / 1 = 2 × 10⁻⁷; 1 / 1.602176634 × 10⁻¹⁹ = 6.2415 × 10¹⁸.
- Investigation: ideal Δm = (2 × 10⁻⁷ × I² / 0.010 × 0.50) / 9.8 × 1000 g = 0.0367, 0.0653, 0.1020, 0.1469, 0.2000 g for I = 6, 8, 10, 12, 14 A; illustrative readings 0.04, 0.06, 0.10, 0.15, 0.20 g; F/l = Δm × 10⁻³ × 9.8 / 0.50 = 7.84 × 10⁻⁴, 1.176 × 10⁻³, 1.96 × 10⁻³, 2.94 × 10⁻³, 3.92 × 10⁻³; gradient through the origin 2.0004 × 10⁻⁷.
- 0.10 × 10⁻³ × 9.8 = 9.8 × 10⁻⁴ N; / 0.50 = 1.96 × 10⁻³ N m⁻¹.
- A1: 2 × 10⁻⁷ × 20 × 5.0 / 0.040 = 5.0 × 10⁻⁴. A2: 2 × 2 / 2 = 2.
- Site checks: 2 × 10⁻⁷ × 10 × 10 / 0.20 = 1.0 × 10⁻⁴; Q1 2 × 10⁻⁷ × 15 × 10 / 0.050 = 6.0 × 10⁻⁴; Q2 6.0 × 10⁻⁴, 4.0 × 10⁻⁴, net 2.0 × 10⁻⁴.
- Directions (author note c): z × y = −x; z × (−y) = +x; (−z) × y = +x.

## Memory aid check

- **"Like currents attract, unlike currents repel."** Meaning, as said in scene 9: parallel currents in the same direction attract; in opposite directions they repel; the opposite pattern to magnetic poles; the two forces are always equal in size. Assumptions checked: long, straight, parallel conductors (for non-parallel wires the forces are not simply attraction or repulsion); "like" means same direction along the wires, not same size; the magnet comparison is only a memory hook (the wires have no poles, author note d). It helps a new case: A1 (opposite: repel), the hanging-foil demonstration, and the series-connected rods in the balance (out and back: repel). Introduced after the explanation (3 to 6).
- **Considered, not used:** a grip-rule mnemonic (Year 11 content, recalled instead).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " inside each scene, joined with a space, bold markers removed; total = sum of the scene strings): **6,308 characters**, 15 scenes; narration unchanged from Revision 1, whose stated 6,322 included the 14 joins. Characters per scene (1 to 15): 367, 584, 549, 403, 378, 654, 804, 729, 231, 348, 355, 226, 313, 292, 75. At 13.3 characters per second the speech is about 474 s; add about 2 s for the scene 2 probe and scene 4 slider sweeps to settle; add about 3 s for the prediction countdown, 2 s for the bowing wires, 2 s for the graph points, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 90 s of holds and countdowns; the notes hold is about 60 s in all): **about 564 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's last sentence (the inset carries it); scene 7's μ₀ sentence (keep the chip); scene 9's magnet comparison. The safety point in scene 8 is on screen only (chip).

## Opening frame

v07's final frame (designed in this wave, `phys-y12-m6-v07.md`): paper background; two long parallel vertical coded wires, each with a orange current arrow pointing up the screen, "I₁" (left) and "I₂" (right); faint slate circles around each wire reaching the other; a large "?" between them with two faint amber double-headed arrows; heading "Why does a current-carrying wire feel a magnetic force?"; chip "Next: why do parallel currents attract or repel?". Scene 1 turns the chip into the heading and removes the "?".

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; evenly spaced slate field arrows pointing to the right across the stage, label "B"; a square coded wire loop in perspective, tilted about a vertical axis by about 50° from facing the field, with the field arrows that pass through it brightened; a navy arrow at right angles to the loop's face; a small text tag "Michael Faraday, 1831"; a large "?"; heading unchanged ("Why do parallel currents attract or repel?"); a chip reads "Next: why does changing loop orientation change magnetic flux?". No values. v09 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v08` (route phys-y12-m6-v08). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v08` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v08` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, one-wire-field, second-wire, force-size, opposite-repel, worked-example, ampere, investigation, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: hanging pair, two-wire end-on stage, palm-rule axes (v07), ampere cards, current balance stage, `DataGraph`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the wire-and-card plate, then a camera rise to end on (Revision 2); 2 to 3 clear change to the two-wire stage; 3 to 4 clear change to full-width algebra with the slider panel; 4 to 5 clear change to the side-by-side comparison; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v08-learning-review.md`, `science_check` = `checks/p-y12-m6-v08-science-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-top-pan-balance-v1.png` (1400 × 900, RGBA): the balance (8). Its display is blank; the reading is a coded layer.
- `public/assets/physics/phys-y11-rod-copper-v1.png` (2172 × 724, RGBA): the two rods (8).
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400, RGBA; sidecar `phys-y11-retort-stand-v1.json`): holds the upper rod (8); the clamp is coded unless the boss-and-crossbar plate (`y11p-boss-crossbar-v1`, if painted) is available.
- `public/assets/physics/phys-y11-low-voltage-supply-v1.png` (1600 × 1000, RGBA) and `phys-y11-digital-multimeter-v1.png` (1086 × 1448, RGBA, as the ammeter): the circuit (8).
- Revision 2, inspected 7 Nov: `phys-y11-wire-card-stand-v1.png` (1024 × 1536 RGBA, a vertical copper wire through a white card held by a small stand; now used in scene 2 as the plate the camera rises over); `phys-y11-plotting-compass-v1.png` (1261 × 1247 RGBA, top view of a compass with a blank face and pivot; needles coded): scene 2; `phys-y11-retort-stand-v1.png` (two copies, as in scene 8) and `phys-y11-car-battery-v1.png` (1466 × 1073 RGBA) with `phys-y11-knife-switch-v1.png` and its blade layer: scene 1.
- **Checked, not used:** `phys-y11-boss-crossbar-v1.png` (a boss clamp only, no crossbar; the crossbar is coded); `phys-y11-bar-magnet-v1.png` (scene 9's magnet comparison is a faint coded outline only, so no plate competes with the wires).

Need: no new plates.

Coded: wires (side and end-on), dots and crosses, field circles and arrows, grip-rule and palm-rule axes, force arrows, the distance bracket, the ampere cards, insulating blocks, leads, the balance display digits, graph, calculation strips, crossed chips, attempt cards and diagrams, countdowns, key notes board, the handoff loop and field.

Kit gaps (for the v08 build brief):
1. **Two-wire end-on stage.** Extend `m6-parallel-wires` beyond its same-direction limit: either wire can be a dot or a cross; each wire's circles in its own slate; field and force arrows at each wire; force arrows always drawn equal.
2. **Current balance stage.** Plate composition with a coded display, rod positions, current arrows and an r bracket; a `DataGraph` with illustrative points and a through-origin fit.

## Codex asset brief

No new plates for v08. Confirm at build time that `phys-y11-top-pan-balance-v1.png`, `phys-y11-rod-copper-v1.png`, `phys-y11-retort-stand-v1.png`, `phys-y11-low-voltage-supply-v1.png` and `phys-y11-digital-multimeter-v1.png` compose at one consistent scale without stretching (the rods at about the width of the balance pan or a little wider), and report the balance display rectangle in plate pixels for the coded reading.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the field of a long wire and the grip rule; every direction in scenes 3 and 5 (author note c); F/l = (μ₀/2π)(I₁I₂/r); same direction attract, opposite repel, reversing both changes nothing; the third-law pair with unequal currents; the pre-2019 ampere wording and the 2 × 10⁻⁷ N m⁻¹ check; the 2019 SI statements (e exact, μ₀ measured, about 6.24 × 10¹⁸ elementary charges per second for 1 A); the balance arrangement (out and back: repel, reading rises); the linear test.
3. Confirm the scene 8 dataset is labelled illustrative on screen and in narration ("for example ... might rise").
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (no Faraday portrait; rules are coded axes).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site note 1 under Decisions to root.

## YouTube metadata (draft)

Title: Why Parallel Currents Attract or Repel (and the Ampere) | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson08.sa.html

Two wires side by side pull together when their currents run the same way and push apart when they run opposite ways. See why each wire sits in the other's magnetic field, derive F/l = (μ₀/2π)(I₁I₂/r), see why the two forces are always equal (Newton's third law), how this force defined the ampere until 2019 and what defines it now, and how to measure the force with a balance. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct a quantitative investigation to demonstrate the interaction between two parallel current-carrying wires"
"analyse the interaction between two parallel current-carrying wires (F/l = (μ₀/2π)(I₁I₂/r)) and determine the relationship between the International System of Units (SI) definition of an ampere and Newton’s Third Law of Motion"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why a current-carrying wire feels a magnetic force. Next: magnetic flux and loop orientation.

#HSCPhysics #Physics #ParallelWires #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v07; check the end-on directions read clearly at speed; that the third-law equality with unequal currents lands; that the two ampere statements stay separate; that scene 8 is not rushed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The circles growing round each wire, the field arrow at the other wire, the flipping force arrows and the balance reading feeding the graph carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 189 findings (`checks/p-y12-m6-v08-learning-review.md`, `checks/p-y12-m6-v08-science-check.md`): 0 blocker, 0 should fix, 1 optional.
- **Optional, S8 practical method notes (centre-to-centre separation; magnetic forces on the leads).** Resolved: the r bracket reads "r: centre to centre"; two method chips add "lower rod's leads: at right angles, twisted together" and "control: remove the top rod; reading should not change"; the limits chip adds "forces on the leads"; Decisions add "Investigation method" and author note (b) states the separation convention. The illustrative dataset and graph are kept and still labelled illustrative; no experimental pass is claimed. No narration change.

Scene-level redesign (high-risk list in `../checks/visual-standard-audit-chem-y11-phys-y12.md`):
- Revision 1 held one end-on stage through scenes 2 to 5 for about 144 s. Revision 2 gives each scene its own stage: scene 2 opens on the painted wire-through-card stand with plotting compasses and rises to the end-on single-wire field with a live probe (about 44 s); scene 3 is the two-wire end-on stage (about 41 s); scene 4 is full-width algebra beside the live slider panel (about 30 s); scene 5 is a side-by-side same/opposite comparison (about 28 s). Transitions in "Scene list and build ids" are updated. No set-up now runs past about 60 s.
- Scene 1 gains a real bench (two painted retort stands, coded crossbar and foil strips, the painted car battery and knife switch, "short bursts only"), so plates appear in scenes 1, 2 and 8 instead of scene 8 alone.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation", "Stage changes" and "Investigation method".
- Core live control (scene 4): I₁, I₂ and r sliders with a live F/l readout and equal arrows (Python: 4.0, 8.0 and 2.0 × 10⁻⁴ N m⁻¹). Scene 2 adds a live B probe (2.0 × 10⁻⁴, 1.0 × 10⁻⁴, 5.0 × 10⁻⁵ T for 10 A at 1, 2 and 4 cm).
- Hand tags and a pen mark in role colours in every teaching scene (1 to 8 and 14): "both up", "pull in", "push out", "compasses line up in circles", "anticlockwise here", "× 2 → ÷ 2", "B₁ up at wire 2", "towards each other", "I₁ × I₂: a product", "always equal", "one l cancels", "flip one: forces flip", "flip both: same", "same product", "cm → m", "equal arrows", "equal on each wire: third law", "until 2019", "pushed down: reading up", "straight through 0", "fewer lines through?".
- Framed answers: B = μ₀I/2πr (2), "same direction: attract" (3), the data-sheet form (4), "opposite: repel" (5), 2.4 × 10⁻⁴ N m⁻¹ and the third-law chip (6), the ampere check (7), the gradient (8), every feedback result. New crossed slips: "the wire definition is today's SI" (7); scene 6's ghost chip becomes a full crossed slip.
- Question cards: scene 12's card gains a picture (two end-on currents with r and inward arrows); feedback scenes 11 and 13 keep a full-text strip with a navy givens strip and an answer-side picture.
- Scene 9: the memory aid becomes a framed card.
- Key notes: five long items (about 560 characters) cut to five short bullets (about 230 characters) with the framed memory card; quiet hold about 60 s.
- Type sizes stated; grey tags at full ink. Review evidence path corrected to the science-check file.

New plate requests: none (all scene 1 and scene 2 plates exist and were inspected 7 Nov).

Counts: 6,322 stated (joined; 6,308 scene sum) to 6,308 characters (scene sum, narration unchanged); about 563 s to about 564 s.
