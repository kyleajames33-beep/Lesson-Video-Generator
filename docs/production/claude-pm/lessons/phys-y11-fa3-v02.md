# Year 11 Physics FA3 V02 (Physics 2025, Year 11, Focus Area 3): How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind? (design)

Status: Revision 3 (5 Nov 2026): brief 173 fixes applied (cue "Get the order wrong" retied); needs the Codex error check of Revision 3. Previously Revision 2 (5 Nov, brief 164 repairs) and Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v02`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (paper scraps set, metal sphere on an insulating stand); v01's balloon, wool cloth, glass rod, silk cloth and polythene rod reused by name.

Narration 6,196 characters, 16 scenes, about 566 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 11 Physics (2025) Focus Area 3 route and the second of two charging videos (v01: what moves and what is conserved; v02: the three ways of charging). Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` (Revision 1, written just before this one; its scene 14 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson02.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 charging by friction, card 2 charging by conduction with `we-1` and the quick check, activity 1, odd one out, card 3 charging by induction, last check, matching task, independent practice Q1 to Q3, retrieve). Site memory hook read: lesson 2 ("FRICTION rubs, CONDUCTION touches, INDUCTION never touches"). Route entry: `phys-y11-fa3-v02` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Friction, Induction and Conduction. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply friction, induction and conduction? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v03: How can I explain and apply the electric field of a point charge?" (v03's design rewrites it as "How does a charge push and pull across empty space, and how does that build into a lightning strike?"; this video's chip uses that wording).

**Opening frame (v01's actual handoff, Revision 1, 3 Nov).** v01's scene 14 ends with the memory line "Protons stay put; electrons move. Gain them: negative. Lose them: positive." small at the top; the balloon and wool cloth at the left with "−8.0 nC", "+8.0 nC" and "total: 0" beneath; the coulomb meter small at the lower right; chips "why does rubber win the electrons?" and "touching? or just coming near?"; chip "Next: How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands, hair or body outlines (rods, wires and spheres move by code; the earth connection is a coded wire with the earth symbol, closed and opened by code); objects and apparatus painted (rods, cloths, paper scraps, the metal sphere on its stand); electrons, surface charges, molecules, force arrows, the material ladder and the earth wire coded (abstract diagrams); one reasoning stage at a time; the calculation as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v01 (only electrons move; the sign is a count; conservation; q = ne) recalled in a sentence at most.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON `sourceHtml` (the JSON's linear `text` field carries a stray space after "friction" from the source's link markup; the wording is identical):

- P25-FA3-G1-02 `ci6c641d68`: "Explain how friction, induction and conduction can cause objects to become electrically charged"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v01's handoff (above); the hook (will neutral paper move towards a charged rod it never touches?); the three ways named; conductors and insulators (free electrons or bound electrons); friction: materials hold electrons with different strengths, rubbing makes close contact, electrons cross to the tighter-holding material, equal and opposite charges (and v01's chip "why does rubber win?" answered); conduction: contact lets electrons spread (negative rod) or be pulled off (positive rod), same sign, the insulating stand; the site's sharing worked example; induction: polarisation of a conductor and the net attraction; the paper hook answered with molecular polarisation in an insulator (site correction 1); induction with earthing, the order of steps, opposite sign; the comparison and memory aid; two attempts. Stops at the three methods and the sign each leaves. Not taught: electric fields and field lines (v03; "the rod's push" is said, not "the rod's field"); why electric forces weaken with distance and by how much (v04 for fields, the Coulomb's law video for forces; one sentence "electric forces get weaker with distance" is used as a given); electroscopes; sparks and lightning (v03); current (later FA3).

## Decisions

- **Learner question rewritten (route placeholder).** "How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?" One causal question in two tied parts: the electron movement in each method is the cause, and the sign it leaves is the consequence. It is v01's handoff chip. Answer, built in order: the hook and prediction (1); conductors and insulators (2); friction (3); conduction (4) and the shared charge (5); the induction prediction (6); polarisation and attraction (7); the paper (8); earthing for a lasting charge (9); the comparison and memory aid (10).
- **The hook (site hook and warm-up, made a prediction).** The polythene rod (v01 plate, chip "−", tag "rubbed with wool") is lowered by code towards five paper scraps on the bench. Prediction (3 s) before the reveal: "stay put?", "jump up to the rod?". Revealed at the start of 2 (the scraps lift and cling). Answered in 7 and 8.
- **Conductors and insulators (needed for conduction and induction; not on the site as a card, implied by its "conductor" wording).** A coded metal block inset with free electrons drifting between fixed positive ion cores, beside a plastic block inset whose electrons each stay with an atom (they wobble in place). Plain meanings at first use.
- **Friction (site card 1; v01's chip answered).** A coded **material ladder** runs from "holds electrons loosely" to "holds electrons tightly": glass, wool, silk, rubber, polythene (grey tag "typical order; it can vary with surface conditions"). Two runs: polythene with wool (electrons to the polythene: rod negative, wool positive); glass with silk (electrons to the silk: glass positive). Rubber's place answers v01's "why does rubber win the electrons?". Insulators keep the charge where rubbed (shown as charge symbols only on the rubbed patch).
- **Conduction (site card 2).** Negative rod touches the sphere on its insulating stand: electrons glide across the contact and spread over the whole sphere surface (conductor), the rod's surplus drops; positive rod: electrons glide from the sphere onto the rod; the sphere's surface shows the missing electrons as red "+" spread evenly. Same sign each time. "Protons can't flow" ties to v01. The insulating stand stops the charge draining away (a faint path to the bench shown blocked).
- **Worked example (site `we-1`, unchanged numbers).** Identical spheres, −6.0 × 10⁻⁸ C and 0; each −3.0 × 10⁻⁸ C after contact. Layout: task strip, equation strip "total conserved; identical spheres share equally: q_each = q_total / 2", givens group "q₁ = −6.0 × 10⁻⁸ C; q₂ = 0; identical spheres"; one row per cue. The number of electrons moved (1.9 × 10¹¹) is an author note only.
- **Prediction 2 (3 s, scene 6; site warm-up).** "Do the sphere's free electrons move towards the rod, or away?" Chips "towards?", "away?". Answered in 7.
- **Induction and the attraction (site card 3).** Electrons slide to the far side (navy "−" gather), near side red "+"; a net-charge readout stays "0". Two amber force arrows on the sphere: a longer attraction on the near side, a shorter repulsion on the far side; their sum, a small net arrow towards the rod. The sentence "electric forces get weaker with distance" is a given (grey tag "how much weaker: later in this focus area").
- **The paper, corrected (site correction 1).** Paper is an insulator, so the site's free-electron explanation is replaced: a molecular-scale inset shows each molecule's electron cloud (a navy oval) shifting slightly away from the rod, leaving a thin red "+" layer on the near surface and a navy "−" layer on the far surface; the scrap lifts.
- **Earthing (site card 3 and Q2).** "Earth" with its plain meaning; the coded earth wire with the circuit earth symbol connects to the sphere (tag "touching anywhere on the sphere works"); electrons glide down it; it opens (first); the rod leaves (second); the remaining positive charge spreads evenly. The wrong order plays as a quick ghost replay (rod removed first: electrons flow back up; sphere neutral) and is crossed.
- **Comparison (site matching task and odd one out).** Three columns on one board: method, contact?, what moves, sign left. Friction: rubbing; electrons cross to the tighter-holding material; opposite pair. Conduction: touching; electrons spread onto, or are pulled off, the object; same sign as the charging object. Induction: no contact; electrons pushed or pulled within the object (polarised); with earthing, opposite sign to the charging object.
- **Attempts (original, HSC style).** (A1, conduction with numbers, links v01) "A metal sphere on an insulating stand carries a charge of +6.4 × 10⁻⁹ C. It touches an identical neutral metal sphere, and the spheres are then separated. Take e = 1.6 × 10⁻¹⁹ C. (a) Calculate the final charge on each sphere. (b) State the direction in which electrons moved, and calculate how many moved. (3 marks)" Answer: +3.2 × 10⁻⁹ C each; from the neutral sphere to the charged sphere; 2.0 × 10¹⁰. Crossed: "2.0 × 10¹⁰ protons moved onto the neutral sphere". (A2, induction with earthing, positive rod; the site's Q2 uses a negative rod) "A positively charged rod is held near, but not touching, a neutral metal sphere on an insulating stand. The sphere is briefly connected to earth. The earth connection is removed, and then the rod is taken away. Explain the final charge on the sphere. (3 marks)" Answer: the rod attracts electrons; electrons flow from earth onto the sphere; removing earth first traps them; negative. Crossed: "positive, the same sign as the rod". Neither card shows a diagram with charges.
- **Mistake scene:** none separate. "Induction always charges an object" (7, 9: alone it only polarises; site misconception 1); "conduction leaves opposite charges" (4, 5; site misconception 2); "positive charge flows onto the sphere" (4, feedback 1 crossed); "induction gives the same sign as the rod" (feedback 2 crossed); "the order of earthing steps doesn't matter" (9, the crossed ghost replay).
- **Memory aid:** "Rub to transfer, touch to share, come near to shove." Second line: "Rub: opposite pair. Touch: same sign. Near plus earth: opposite sign." Adapted from the site hook ("FRICTION rubs, CONDUCTION touches, INDUCTION never touches"), with the sign added (see "Memory aid check").
- **Handoff (route next).** Board change: the negative rod held near the polarised metal sphere, the amber force arrows across the empty gap between them glowing; paper scraps clinging to the rod's tip at the left; chips "a push across an empty gap?" and "a lightning strike?"; then "Next: How does a charge push and pull across empty space, and how does that build into a lightning strike?". This is the frame v03 opens on.
- **Site sources used:** hook (neutral paper attracted without contact: 1, 7, 8); warm-up (electrons towards or away: prediction 2); key terms (friction, conduction, induction, polarisation: 3, 4, 7); misconceptions 1 and 2 (4, 7, 9); card 1 (friction, polythene and glass: 3); true or false (opposite signs after friction: 3); card 2 and `we-1` (4, 5); quick check (positive rod: same sign: 4); activity 1 (scenario 3, grounded sphere: 9; scenarios 1 and 2 not used, see site correction 2); odd one out (induction needs no contact: 10); card 3 (polarisation, attraction, earthing order: 7, 9); last check (true: 7); matching task (10); Q1 (7); Q2 (9, A2 with the opposite rod); Q3 (10).
- **Site corrections (quoted from site lesson 2, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 3: "Bring a negative rod near a neutral metal sphere. The rod's field repels the sphere's electrons to the far side ... This is why a charged rod attracts neutral paper, answering the hook." Paper is an insulator, so its electrons can't move to the far side as they do in a metal; the hook's answer applies the conductor model to an insulator. Suggest adding: "Paper is an insulator, so its electrons can't travel across it. Instead the electrons in each molecule shift slightly away from the rod, which still leaves the near surface slightly positive, so the paper is attracted."
  2. Activity 1, scenario 2: "a charged balloon touches a metal doorknob and the spark transfers charge", with the task "state the final sign of charge on the object". A doorknob is joined to a large door and frame, so most of the balloon's charge at the contact spreads away and the knob is left almost neutral; the balloon is an insulator, so only the touched patch discharges. The "final sign" has no clear answer. Suggest a metal can on an insulating mat touched by a charged metal sphere.
  3. Card 2: "Because the charge is shared, conduction works only on conductors, where electrons can move freely." Touching an insulator with a charged object also transfers some charge, but it stays near the contact point. Suggest: "Charge spreads over the whole object only when it is a conductor; on an insulator it stays near the point of contact." (Suggestion, not an error.)
  4. Q2 and its model answer: "The far side of the sphere is briefly earthed" and "Earthing the far side gives those repelled electrons a path to escape". Earthing any point on the sphere works; naming the far side can suggest that it must be the far side. Suggest: "The sphere is briefly earthed (touching any point works)". (Suggestion, not an error.)
  - Checked and correct: key terms; misconceptions; card 1; card 2 and `we-1` (−3.0 × 10⁻⁸ C each); quick check (A); odd one out (C); card 3 earthing sequence; last check; matching task; Q1 and Q3 model answers; Q2's final sign (positive for a negative rod).
- **Cause chain taught, in order:** (1) a neutral object attracted without contact needs a cause (1); (2) in metals some electrons are free, in insulators they are bound (2); (3) friction: the tighter-holding material takes electrons; equal and opposite (3); (4) conduction: electrons spread onto or are pulled off the object; same sign (4, 5); (5) a nearby charge pushes free electrons away: polarised, still neutral (6, 7); (6) nearer charges win, so neutral objects are attracted (7); (7) in an insulator each molecule polarises instead (8); (8) earthing lets electrons leave or arrive; break earth first: opposite sign (9); (9) comparison and memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Science (static electricity; like charges repel and unlike attract) and v01 (only electrons move; gain is negative, loss is positive; conservation; q = ne), recalled in a phrase each.
- **Learner-visible vocabulary (plain meaning at first use):** conductor (a material that charge can move through, because some electrons are free to drift, 2); insulator (a material where each electron stays with its own atom, so charge stays where it's placed, 2); charging by friction (charging by rubbing two materials together, 3); charging by conduction (charging by touching, 4); polarised (a neutral object whose charge has separated into a positive side and a negative side, 7); induction (rearranging charge in an object with a nearby charge, without contact, 7); earth (the ground, a huge conductor that can take or give electrons, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v01's **`ElectronHop`**, **`ChargeTally`** and rub motion; **`SurfaceCharges`** (red "+" and navy "−" symbols laid on a plate's outline; on a conductor they redistribute evenly or polarise according to a nearby charge's position; on an insulator they stay on the patch where placed); **`ConductorInset`** (free electrons drifting between fixed ion cores) and **`InsulatorInset`** (electrons bound, wobbling in place); **`MoleculePolarise`** (a row of molecules, each a grey core with a navy electron oval that shifts by a small offset towards or away from a charge); **`EarthLink`** (a coded wire from any point on an object to the circuit earth symbol, with a switch gap that opens and closes on cue, and electron dots gliding along it); **force pair** (two amber arrows on a polarised object, lengths set by an inverse-distance rule for display only, with their small net arrow); **material ladder** (a vertical scale from "holds electrons loosely" to "holds electrons tightly" with five labelled rungs and a travelling electron); **ghost replay** (a faded quick replay of a wrong sequence, then crossed); **comparison board** (three columns, one revealed per cue); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Colour key:** as v01 (positive red "+", negative and electrons navy "−", signs always printed); forces amber with a dark ink outline (FA1 decision 1); the earth wire mid grey with a black earth symbol; electron paths navy dashes; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the apparatus (rod, sphere, stand, paper) in the left 60 per cent; the particle insets, ladder and working in the right column.
- **No human figures.** No hands hold the rods; the earth wire is switched by code.
- **Author notes (not learner copy):**
  (a) Material ladder (loosely to tightly held): glass, wool, silk, rubber, polythene. Typical triboelectric series place glass above wool above silk, with rubber and polythene further towards the negative end; orders vary with humidity, surface condition and source. The two runs used (polythene with wool; glass with silk) give the standard school results.
  (b) Conduction from a polythene rod: the rod is an insulator, so only charge near the touched point transfers; the visual moves only the electrons near the contact. The worked example uses metal spheres, where the sharing is even.
  (c) `we-1`: (−6.0 × 10⁻⁸ + 0) ÷ 2 = −3.0 × 10⁻⁸ C each; electrons moved 3.0 × 10⁻⁸ ÷ 1.6 × 10⁻¹⁹ = 1.875 × 10¹¹ (not shown).
  (d) Polarisation attraction: the force pair is illustrative only; for a point-like rod tip the near-side attraction exceeds the far-side repulsion because the force falls with distance. No inverse-square law is stated here.
  (e) Earthing: for a negative rod, electrons leave the sphere to earth; for a positive rod, electrons arrive from earth. The connection point on the sphere doesn't matter (the whole conductor and earth form one conductor while connected).
  (f) A1: (6.4 × 10⁻⁹ + 0) ÷ 2 = 3.2 × 10⁻⁹ C each; the charged sphere's charge fell from +6.4 to +3.2 × 10⁻⁹ C, so it gained 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰ electrons from the neutral sphere, which is left +3.2 × 10⁻⁹ C.
  (g) Paper molecules: the shift is a tiny displacement of each molecule's electron cloud (induced dipoles), not electron travel; the scrap lifts because its weight is small compared with the net attraction.
  (h) Pronunciations: "polythene" (POL-ee-theen); "polarised" (POH-luh-ryzd); "minus six point oh times ten to the minus eight coulombs".

Main question: *A charged rod lifts neutral scraps of paper without touching them. How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?*
Entry knowledge (Stage 5 static electricity; v01 electron transfer, sign rule, conservation, q = ne).
Stops after: conductors and insulators; friction (opposite pair), conduction (same sign), induction (polarises; with earthing, opposite sign); the paper attracted by polarisation. No fields, no force laws, no lightning.
Handoff: v03, how a charge acts across empty space, and lightning.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 (positive red "+", negative navy "−"; forces amber with a dark outline; earth wire grey; crossed items grey scribble).

### 1. hook (will the paper move?)
> Last time, we found that charging is electrons on the move. Here's a polythene rod, rubbed with wool, so it's negative. Below it are some scraps of paper, completely neutral. The rod comes close, but never touches them. Will the scraps stay where they are, or jump up to the **rod**?

Visual: opens on v01's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Three ways to charge"; the balloon, cloth and meter fade; the memory line stays small at the top for this scene only. The polythene rod (`phys-y11-polythene-rod-v1.png`) slides in at the upper left beside the wool cloth (`phys-y11-wool-cloth-v1.png`); a short rub motion; a navy chip "−" on the rod's rubbed end. Five paper scraps (`phys-y11-paper-scrap-a-v1.png` to `-e-v1.png`) lie on a coded bench line below, with a grey chip "neutral". The rod lowers slowly towards them and stops about 3 cm above (coded gap marker "no contact"). On "rod" chips "stay put?" and "jump up to the rod?" and a 3-second countdown ring.

### 2. conductors and insulators
> They jump up and cling to the rod. Neutral paper, pulled by a charge it never touched. To explain that, we need the three ways objects get charged: rubbing, touching, and bringing a charge near. First, one more idea. In a metal, some electrons aren't tied to any one atom. They're free to drift through the whole piece, so metal is a conductor, a material that charge can move through. In plastic, glass, wool and paper, each electron stays with its own atom. Those are insulators. Charge placed on an insulator stays where it **lands**.

Visual: on "jump up" the scraps lift and cling to the rod's tip; chip "neutral, but attracted?" pins beside them. On "three ways" three empty column heads write at the top right: "rubbing", "touching", "a charge nearby". Right column: `ConductorInset` (a metal block: red "+" ion cores in a grid, navy electrons drifting freely between them; label "conductor: some electrons free") and below it `InsulatorInset` (a plastic block: each atom's electron wobbling in place; label "insulator: electrons stay with their atoms"). On "lands" a few navy "−" dropped on the insulator block stay in one corner; on the metal block the same dropped charge spreads out across it.

### 3. charging by friction
> First, rubbing, called charging by friction. Different materials hold their outer electrons with different strengths. Rubbing presses the surfaces into close contact, and electrons cross to the material that holds them more **tightly**. Polythene holds electrons more tightly than wool, so the rod gains electrons and turns negative, and the wool is left equally positive. That's why last video's balloon won the electrons: rubber holds them tightly too. Glass holds electrons more loosely than silk, so rubbing glass with silk sends electrons the other way, and the glass turns **positive**.

Visual: the "rubbing" column head glows. Material ladder in the right column: "holds electrons loosely" at the top, rungs "glass", "wool", "silk", "rubber", "polythene", "holds electrons tightly" at the bottom (grey tag "typical order; it can vary with surface conditions"). Left: the polythene rod and wool cloth rub (an `ElectronHop` inset at the contact shows electrons gliding from wool to polythene); on "tightly" an electron on the ladder travels from the "wool" rung down to "polythene". Charge symbols appear only on the rubbed patches (navy "−" on the rod's end, red "+" on the cloth's patch), equal in number. On "balloon" the "rubber" rung glows with a small balloon thumbnail beside it (v01's chip answered). The glass rod (`phys-y11-glass-rod-v1.png`) and silk cloth (`phys-y11-silk-cloth-v1.png`) replace them; the rub; electrons glide from glass to silk; on "positive" red "+" on the glass patch, navy "−" on the silk. Bottom row: "friction: equal and opposite charges".

### 4. charging by conduction
> Second, touching, called charging by conduction. Touch a negatively charged rod onto a neutral metal sphere on an insulating stand. The extra electrons repel each other, so some spread across the contact onto the sphere, and then out over its whole **surface**. Take the rod away, and the sphere keeps them. It's now negative, the same sign as the rod. What if the rod is positive? Protons can't flow. Instead, electrons are pulled from the sphere onto the rod, and the sphere is left **positive**, again the same sign. The insulating stand stops the charge leaking away.

Visual: the "touching" column head glows. The metal sphere on its stand (`phys-y11-metal-sphere-stand-v1.png`) centre left; a grey chip on the stand "insulating stand". The polythene rod (navy "−" on its tip) moves in and touches the sphere; navy electrons near the contact glide across, then `SurfaceCharges` spread them evenly over the sphere; on "surface" the spread completes. The rod withdraws; the sphere's "−" stay; chip "same sign as the rod". The glass rod (red "+") replaces it and touches; navy electrons glide from the sphere onto the rod (dashed paths into the rod); on "positive" the sphere shows red "+" spread evenly. On "leaking away" a faint grey path from the sphere down through the stand to the bench appears and is blocked at the stand (small bar).

### 5. worked example: sharing charge
> Here's a worked example. Task: a metal sphere carrying minus six point oh times ten to the minus eight coulombs touches an identical neutral metal sphere, and then they're separated. What charge does each carry? The givens: that charge on one, zero on the other, and identical spheres. Charge is conserved, so the total stays the same, and identical spheres share it equally. So each gets **half**: minus three point oh times ten to the minus eight coulombs. Both negative, just as conduction **predicts**.

Visual: clear change to the calculation layout; two sphere plates side by side (the same plate twice, uniform scale), the left with navy "−" spread over it, the right plain. Task strip "Find the charge on each sphere after contact". Equation strip "total conserved; identical spheres share equally: q_each = q_total ÷ 2". Givens group (navy): "q₁ = −6.0 × 10⁻⁸ C; q₂ = 0; identical spheres" (grey tag "site worked example"). The spheres slide together and touch; navy "−" flow until both carry equal numbers; they separate. Rows: "q_total = −6.0 × 10⁻⁸ + 0 = −6.0 × 10⁻⁸ C"; on "half" "q_each = −6.0 × 10⁻⁸ ÷ 2 = −3.0 × 10⁻⁸ C", boxed. On "predicts" chip "same sign: conduction".

### 6. prediction: a rod brought near
> Third, bringing a charge near. Hold the negative rod close to a neutral metal sphere, but don't let it touch. The sphere's free electrons can move. Which way will they go: towards the rod, or away from **it**?

Visual: the "a charge nearby" column head glows. One sphere on its stand; the polythene rod (navy "−") approaches from the left and stops a short gap away (gap marker "no contact"). The sphere shows evenly mixed small "+" and "−" (neutral). On "it" chips "towards?" and "away?" and a 3-second countdown ring.

### 7. induction: polarised, and pulled
> Away. Like charges repel, so the rod pushes the free electrons to the far side of the sphere. The near side is left short of electrons, so it's positive. The sphere is now polarised, with a positive side and a negative side. But no electrons entered or left, so its total charge is still **zero**. Now, electric forces get weaker with distance. The positive side is closer to the rod, so its pull beats the push on the far side, and the sphere is attracted **overall**. Rearranging charge with a nearby charge, without contact, is called induction.

Visual: on "Away" the "away?" chip glows and "towards?" fades. `SurfaceCharges`: the navy "−" slide to the far (right) side, red "+" remain on the near (left) side. Label "polarised". Net readout under the sphere "net charge: 0" glows on "zero". On "weaker with distance" grey tag "how much weaker: later in this focus area". Force pair: a longer amber arrow on the near side pointing towards the rod ("pull on near +"), a shorter amber arrow on the far side pointing away ("push on far −"); on "overall" a small net arrow towards the rod; the sphere's stand is fixed, so the sphere (on a light coded pivot thread version, ghosted) leans slightly towards the rod. On "induction" the column head reads "a charge nearby: induction".

### 8. why the neutral paper jumps
> So what about the paper? Paper is an insulator, so its electrons can't travel across it. Instead, inside each molecule, the electrons shift slightly away from the rod. That leaves the near surface a little positive, and the far surface a little negative. The nearer charges win again, so the scraps are pulled up. Neutral overall, but **polarised**.

Visual: back to the hook's rod above the scraps. Zoom into one scrap: `MoleculePolarise`: a row of grey molecule cores, each with a navy electron oval; on "shift slightly" each oval shifts a small step away from the rod; a thin red "+" layer forms on the scrap's top surface and a navy "−" layer on its bottom surface. Small force pair as in 7. On "polarised" the zoom pulls out and the scrap lifts to the rod; the hook chip "neutral, but attracted?" resolves to "polarised, so attracted".

### 9. induction with earthing: a lasting charge
> Polarising is only temporary. Take the rod away, and the electrons spread back. To leave a lasting charge, we use earth: the ground, a huge conductor that can take or give electrons. With the rod still near, connect the sphere to earth with a wire. The pushed electrons escape down the wire into the **ground**. Break the earth connection first, then take the rod away. The sphere is short of electrons, so it's positive, the opposite sign to the rod. Remove the rod first instead, and the electrons just flow back up the **wire**.

Visual: the polarised sphere with the rod near. On "Take the rod away" a quick demo: the rod withdraws, the charges re-mix, the rod returns and the sphere re-polarises. On "earth" the `EarthLink` draws from the sphere's far side down to the earth symbol (label "earth: the ground, a huge conductor"; grey tag "touching anywhere on the sphere works"). On "ground" navy electrons glide down the wire and into the earth symbol; the sphere keeps only the red "+" on its near side. Step chips, one per cue: "1 rod near", "2 connect earth", "3 break earth first" (the switch gap opens), "4 then remove rod"; the rod withdraws and the red "+" spread evenly over the sphere: "positive: opposite to the rod". On "Remove the rod first instead" a ghost replay: earth still connected, rod removed first; on "wire" electrons glide back up the wire, the sphere returns to neutral, and the ghost replay takes a scribble cross.

### 10. three ways, side by side
> So, three ways. Friction uses rubbing, which makes close contact again and again, and leaves the two materials with opposite charges. Conduction needs touching, and leaves the same sign as the charging object. Induction needs no contact. On its own, it only polarises. With earthing, it leaves the opposite sign. A way to remember: rub to transfer, touch to share, come near to **shove**.

Visual: comparison board, one column per sentence (thumbnails from 3, 4 and 9 at the top of each): "Friction: rubbing; electrons cross to the tighter-holding material; opposite pair"; "Conduction: touching; electrons spread onto or are pulled off; same sign as the charging object"; "Induction: no contact; electrons pushed or pulled within the object; alone: polarised only; with earth: opposite sign". On "remember" the handwritten line writes large: "Rub to transfer, touch to share, come near to shove." Under it, smaller: "Rub: opposite pair. Touch: same sign. Near plus earth: opposite sign." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A metal sphere on an insulating stand carries a charge of plus six point four times ten to the minus nine coulombs. It touches an identical neutral metal sphere, and the spheres are then separated. Take e as one point six times ten to the minus nineteen coulombs. Calculate the final charge on each sphere. Then state which way electrons moved, and how many. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A metal sphere on an insulating stand carries a charge of +6.4 × 10⁻⁹ C. It touches an identical neutral metal sphere, and the spheres are then separated. Take e = 1.6 × 10⁻¹⁹ C. (a) Calculate the final charge on each sphere. (b) State the direction in which electrons moved, and calculate how many moved. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The total is conserved and shared equally, so each sphere ends with plus three point two times ten to the minus nine **coulombs**. Protons can't move, so electrons moved from the neutral sphere onto the charged one. That's three point two times ten to the minus nine, over e: two point oh times ten to the ten **electrons**. Saying protons moved across gets it backwards. Only electrons **move**.

Visual: card shrinks to the top; "identical" and "neutral" underlined. Rows: on "coulombs" "(a) q_each = +6.4 × 10⁻⁹ ÷ 2 = +3.2 × 10⁻⁹ C", boxed; two small spheres with navy dashed arrows from the right (neutral) sphere to the left (charged) one; on "electrons" "(b) n = 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰ electrons, neutral → charged", boxed. On "move" a chip "2.0 × 10¹⁰ protons moved onto the neutral sphere" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A positively charged rod is held near a neutral metal sphere on an insulating stand, without touching it. The sphere is briefly connected to earth. The earth connection is removed, and then the rod is taken away. Explain the final charge on the sphere. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A positively charged rod is held near, but not touching, a neutral metal sphere on an insulating stand. The sphere is briefly connected to earth. The earth connection is removed, and then the rod is taken away. Explain the final charge on the sphere. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The positive rod attracts electrons. While the sphere is earthed, electrons flow up from the ground onto the **sphere**. The earth is removed first, so they can't leave. When the rod goes, the sphere has extra electrons, so it's **negative**, the opposite sign to the rod. Calling it positive, like the rod, treats induction like conduction. Nothing **touched**.

Visual: card shrinks to the top; "positively charged", "removed" and "then" underlined. A small sphere with the red "+" rod near and `EarthLink`: on "sphere" navy electrons glide up the wire onto the sphere's near side; the switch opens; the rod leaves; the navy "−" spread evenly; on "negative" "negative: opposite to the rod", boxed. On "touched" a chip "positive, the same sign as the rod" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So every way of charging moves electrons: by rubbing, by touching, or by a push from nearby. But that push crossed an empty gap. How does a charge reach across space to push or pull another charge, and how can that build up into a lightning **strike**?

Visual: board change: the memory line small at the top. The polythene rod (navy "−") held near the polarised metal sphere on its stand, with the force pair from 7; the empty gap between rod and sphere highlighted with a faint dashed outline; paper scraps clinging to the rod's tip. Two chips write: "a push across an empty gap?" (in the gap) and "a lightning strike?" (upper right). On "strike" the chip "Next: How does a charge push and pull across empty space, and how does that build into a lightning strike?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Conductors (metals) have free electrons, so charge spreads through them. In insulators electrons stay with their atoms, so charge stays where it is placed.
2. Friction: rubbing makes close contact again and again, and electrons move to the material that holds them more tightly. The two materials get equal and opposite charges.
3. Conduction: touching lets electrons spread onto, or be pulled off, a conductor. It ends with the same sign as the charging object.
4. Induction: a nearby charge pushes or pulls a conductor's free electrons, so it is polarised but still neutral, and attracted. Earth it, break the earth, then remove the charge: it is left with the opposite sign.

Memory aid (large, on the notes screen): *Rub to transfer, touch to share, come near to shove.* Second line: *Rub: opposite pair. Touch: same sign. Near plus earth: opposite sign.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why rubbing charges: materials hold electrons with different strengths, so electrons cross to the tighter-holding one (3, shown with the ladder). Why conduction leaves the same sign: electrons spread onto, or are pulled off, the touched object (4, both cases shown). Why a nearby charge polarises a conductor: like charges repel, free electrons move (7). Why a neutral object is attracted: the nearer opposite charges are pulled harder than the further like charges are pushed (7, force pair). Why neutral paper is attracted: each molecule polarises (8). Why the earthing order matters: electrons need the wire to leave or arrive, and must be trapped before the rod goes (9, ghost replay).
- **Misconceptions addressed:** induction always charges (7, 9); conduction leaves opposite charges (4, 5); positive charge flows (4, feedback 1 crossed); induction gives the same sign (feedback 2 crossed); the earthing order doesn't matter (9, crossed replay); paper's electrons cross it (8, site correction 1).
- **One idea at a time:** conductors (2), friction (3), conduction (4, 5), induction's polarisation (6, 7), paper (8), earthing (9), comparison (10).
- **Video makes it easier:** the student sees the scraps jump (1, 2), electrons travel down the ladder (3), charge spread over a conductor but stay put on an insulator (2, 4), electrons slide to the far side while the net readout stays at zero (7), molecules polarise (8) and electrons run down and back up an earth wire (9).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card (identical; neutral; insulating stand; the order of steps), nothing answer-bearing. One crossed mistake each; feedback about 29 s and 26 s.
- **Avoided double teaching:** v01's electron transfer, sign rule and conservation recalled in a sentence each (1, 4, 5, 12).
- **Syllabus coverage:** `ci6c641d68`: friction (3), conduction (4, 5, A1), induction with and without earthing (6 to 9, A2), each explained by electron movement.
- **Out of scope by design:** fields and field lines, lightning (v03); the force-distance law (later FA3); electroscopes.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A metal sphere on an insulating stand carries a charge of +6.4 × 10⁻⁹ C. It touches an identical neutral metal sphere, and the spheres are then separated. Take e = 1.6 × 10⁻¹⁹ C. (a) Calculate the final charge on each sphere. (b) State the direction in which electrons moved, and calculate how many moved."
Model answer: (a) Charge is conserved and identical spheres share it equally: (6.4 × 10⁻⁹ + 0) ÷ 2 = +3.2 × 10⁻⁹ C on each. (b) Protons don't move, so electrons moved from the neutral sphere onto the positive sphere, leaving the neutral sphere positive. Number: 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰ electrons. Classic mistake (crossed): "2.0 × 10¹⁰ protons moved onto the neutral sphere".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "A positively charged rod is held near, but not touching, a neutral metal sphere on an insulating stand. The sphere is briefly connected to earth. The earth connection is removed, and then the rod is taken away. Explain the final charge on the sphere."
Model answer: The positive rod attracts the sphere's free electrons (the sphere polarises). While the sphere is earthed, electrons are attracted up from the earth onto the sphere. The earth is disconnected while the rod is still near, so these extra electrons cannot leave. When the rod is removed they spread over the sphere, which is left negatively charged, opposite in sign to the rod. Classic mistake (crossed): "positive, the same sign as the rod".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked (site `we-1`) | −6.0 × 10⁻⁸ C and 0; −3.0 × 10⁻⁸ C each | 5 |
| A1 | +6.4 × 10⁻⁹ C; +3.2 × 10⁻⁹ C each; 2.0 × 10¹⁰ electrons, neutral to charged | 11, 12 |
| e | 1.6 × 10⁻¹⁹ C | 11, 12 |
| Electrons moved in `we-1` (author note only) | 1.9 × 10¹¹ (1.875 × 10¹¹) | not shown |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- (−6.0 × 10⁻⁸ + 0) ÷ 2 = −3.0 × 10⁻⁸ C; 3.0 × 10⁻⁸ ÷ 1.6 × 10⁻¹⁹ = 1.875 × 10¹¹.
- (6.4 × 10⁻⁹ + 0) ÷ 2 = 3.2 × 10⁻⁹ C; 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰.

## Memory aid check

- **"Rub to transfer, touch to share, come near to shove."** Meaning, as said in scene 10: friction transfers electrons between two materials; conduction shares charge across a contact; induction shoves (or pulls) electrons within the object from a distance. Assumptions checked: "shove" covers both a negative rod pushing electrons away and a positive rod pulling them closer; the second line carries the sign each leaves, with induction's sign only "plus earth" (without earthing it only polarises, said in 7 and 10). "Share" holds for conductors; the equal split needs identical conductors (said in 5). Introduced after all three methods (3 to 9).
- **Site hook ("FRICTION rubs, CONDUCTION touches, INDUCTION never touches") considered.** Correct on contact but silent on sign; its explanation line "Only induction leaves the OPPOSITE sign" is misleading next to friction's opposite pair, so the adapted line names each sign separately.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,196 characters** (6,211 joined), 16 scenes. Characters per scene (1 to 16): 279, 533, 636, 563, 498, 205, 540, 345, 523, 342, 391, 384, 284, 350, 248, 75. At 13.3 characters per second the speech is about 466 s; add about 18 s of holds and settling (the rod lowering in 1, the two rubs in 3, the two touches in 4, the spheres sharing in 5, the earthing steps and ghost replay in 9, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 566 s**, under the 570 s cap (close to it: if the voiced preview runs over, the first cut is scene 3's balloon sentence, then the leaking-away sentence in 4). Three methods, each with its cause and sign, fill it without padding.

## Scene list and build ids

Lesson key `p-y11-fa3-v02` (route phys-y11-fa3-v02). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v02` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v02` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, conductors-insulators, friction, conduction, sharing-example, induction-prediction, polarised-attraction, paper, earthing, three-ways, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and induction-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v01's last frame continues into scene 1 (camera continue: the wool cloth stays, the balloon gives way to the rod); 1 to 2 camera continue (the scraps jump); 2 to 3 split board (ladder in the right column); 3 to 4 camera continue (the rod moves to the sphere); 4 to 5 clear change to the calculation layout; 5 to 6 camera continue (one sphere stays); 6 to 7 camera continue; 7 to 8 camera pan to the paper and zoom; 8 to 9 camera return to the sphere; 9 to 10 board change to the comparison; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and induction-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v02-learning-review.md`, `science_check` = `checks/p-y11-fa3-v02-physics-check.md`.

## Assets

Reused (v01 requests; uniform scaling only, never stretched): `phys-y11-polythene-rod-v1.png` (1, 3, 4, 6 to 9, 15), `phys-y11-wool-cloth-v1.png` (1, 3), `phys-y11-glass-rod-v1.png` (3, 4), `phys-y11-silk-cloth-v1.png` (3), `phys-y11-balloon-v1.png` (thumbnail on the ladder, 3).

New (requested below): `phys-y11-paper-scrap-a-v1.png` to `phys-y11-paper-scrap-e-v1.png` (1, 2, 8, 15), `phys-y11-metal-sphere-stand-v1.png` with sidecar `phys-y11-metal-sphere-stand-v1.json` (4 to 9, 12, 14, 15).

Checked first (3 Nov): `public/assets/physics/` has no electrostatics plates; v01's six requested plates are not yet delivered.

Coded: conductor and insulator insets, surface charges, molecules, the material ladder, the earth wire and symbol, force arrows, the gap marker, the bench line, step chips, the comparison board.

Kit gaps (for the next physics kit brief): `SurfaceCharges`, `ConductorInset`, `InsulatorInset`, `MoleculePolarise`, `EarthLink`, force pair, material ladder, ghost replay (plus v01's `ElectronHop` and `ChargeTally`); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v02, electrostatics kit part 2)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-paper-scrap-a-v1.png` to `phys-y11-paper-scrap-e-v1.png`: five separate small scraps of torn white printer paper, each a different irregular shape (roughly 1 to 2 cm across in life), lying flat, seen from a low angle so each reads as thin. One scrap per file, about 300 px across, same scale in all five.
2. `phys-y11-metal-sphere-stand-v1.png` plus `phys-y11-metal-sphere-stand-v1.json`: a polished aluminium sphere about 10 cm across on a clear acrylic insulating rod about 20 cm tall, fixed in a heavy black circular base. Side view, soft reflections, no reflected objects. About 1000 px tall. Sidecar JSON: the sphere's centre and radius and the top of the acrylic rod in plate pixels (for charge symbols, the earth wire and contacts).

Acceptance: true transparency, no halo; the sphere plate used twice side by side at the same uniform scale.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: free electrons in metals, bound electrons in insulators; friction moves electrons to the tighter-holding material and leaves equal and opposite charges; polythene gains electrons from wool, glass loses electrons to silk, rubber gains from wool; conduction leaves the same sign (electrons spread onto, or are pulled off); induction polarises a conductor with net charge zero and gives a net attraction; an insulator polarises at the molecular scale; earthing with a negative rod lets electrons leave, with a positive rod lets electrons arrive; break the earth before removing the rod; the final sign is opposite to the rod.
3. Confirm no electric field or force law is stated (only "electric forces get weaker with distance" with its grey tag).
4. Confirm the memory aid's sign line is on screen and induction's sign is tied to earthing.
5. Confirm both attempt questions are original in wording, carry every condition (identical; neutral; insulating stand; the order of steps) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the syllabus JSON `sourceHtml` exactly (no stray space) and no 2017-syllabus label appears.
7. Confirm the opening frame matches `phys-y11-fa3-v01.md` scene 14 and the handoff chip matches v03's question.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Charging by Friction, Conduction and Induction (with Earthing) | Year 11 Physics

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson02.sa.html

A charged rod lifts neutral scraps of paper without touching them. How? See the three ways to charge an object, each explained by where the electrons go: friction moves them to the material that holds them more tightly, conduction spreads them across a contact, and induction pushes them around inside an object from a distance. Find out why a neutral object is still attracted, why paper polarises molecule by molecule, and why the order of earthing steps decides the final charge. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Explain how friction, induction and conduction can cause objects to become electrically charged" (ci6c641d68)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: How objects become charged (previous video). Next: Electric fields and lightning.

#Year11Physics #Physics #Electrostatics #HSCScience

## Open decisions

- **1. Route refinement (root to record).** Question as above; start "Begin at v01's balloon handoff; recall electron transfer, the sign rule and conservation"; stop "Stop at the three methods and the sign each leaves, with polarisation of conductors and insulators; hand fields and lightning to v03"; next as v03's design question.
- **2. Conductors and insulators.** Taught here in one scene because conduction and induction depend on it; the route has no separate point for it. Root to confirm it isn't owned by a later FA3 video (the circuits videos may recall it).
- **3. "Electric forces get weaker with distance" as a given.** Needed for the polarisation attraction; the size of the effect waits for later FA3 videos (grey tag). Root to confirm.
- **4. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v01 at Year 11 entry; check that the ladder makes "why that direction" feel caused; that both conduction cases make "same sign" seen rather than memorised; that the force pair makes a neutral object's attraction feel caused; that the paper correction is clear in one scene; that the ghost replay makes the earthing order matter; that the cards give nothing away), then the Codex physics check and error check.
- The ladder run (3), the two conduction touches (4), the polarising sphere with its force pair (7), the molecular shift (8) and the earth wire runs (9) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): "Friction needs rubbing" is gone. Scene 10 now says "Friction uses rubbing, which makes close contact again and again", matching scene 3's "Rubbing presses the surfaces into close contact", so contact (not sliding) is the cause. Key note 2 matches. The comparison board's "Friction: rubbing" column label stays as the method name.
- Narration count: 6,201 characters (build parser rule), about 566 s with the stated holds (10 characters shorter than the reviewed 6,211). Funded by cutting scene 3's last sentence "Either way, the two charges are equal and opposite." (v01 taught conservation, the visual tallies show the equal pair, and scene 10 and key note 2 restate it).

## Revision 3 (5 November 2026, brief 173 fixes)

Findings from `checks/p-y11-fa3-v02-error-check.md`.

- Scene 9: the ghost-replay cue "Get the order wrong" retied to "Remove the rod first instead".
- Narration count: 6,186 characters (scene narration only, ** removed, joins excluded), estimated about 566 s with the stated holds. Narration unchanged; visual/event instructions only.
