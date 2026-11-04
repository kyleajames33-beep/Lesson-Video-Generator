# Year 11 Physics FA3 V03 (Physics 2025, Year 11, Focus Area 3): How does a charge push and pull across empty space, and how does that build into a lightning strike? (design)

Status: Revision 2 (5 Nov 2026), brief 164 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v03`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: four new (thundercloud, ground strip, ice crystal, soft hailstone); v01's balloon and wool cloth, v02's polythene rod, metal sphere stand and paper scraps, and FA1's retort stand and boss crossbar reused by name.

Narration 6,026 characters, 17 scenes, about 553 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 11 Physics (2025) Focus Area 3 route: the electric field of a point charge, field-line diagrams for single charges and pairs, and the role of static electricity in lightning. Templates: `phys-y11-fa1-v22.md` (concept format, section list) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` and `phys-y11-fa3-v02.md` (Revision 1, written just before this one; v02's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson03.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 what an electric field is, card 2 drawing field lines with its figure and `we-1`, quick check, activity 1, fill the blanks, card 3 static electricity and the lightning strike, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Site memory hook read: lesson 3 (field lines as one-way streets; not used, see "Memory aid check"). Route entry: `phys-y11-fa3-v03` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with The Electric Field of a Point Charge. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply the electric field of a point charge? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v04: How can I explain and apply electric field strength?" (this design proposes "Why does a charge's field get weaker so quickly as you move away from it?" for v04's chip; root aligns it if v04's designer writes a different question).

**Opening frame (v02's actual handoff, Revision 1, 3 Nov).** v02's scene 15 ends with the memory line "Rub to transfer, touch to share, come near to shove." small at the top; the polythene rod (navy "−") held near the polarised metal sphere on its stand, with the amber force pair and the empty gap highlighted with a faint dashed outline; paper scraps clinging to the rod's tip; chips "a push across an empty gap?" and "a lightning strike?"; chip "Next: How does a charge push and pull across empty space, and how does that build into a lightning strike?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the balloons hang from a retort stand; the cloud and ground are scenery with no figures; no house with people); objects and scenery painted (balloons, retort stand, cloud, ground, ice crystal, hailstone); point charges, test charges, field lines, force arrows, air molecules, the electron avalanche and the lightning channel coded (abstract diagrams and processes); one reasoning stage at a time; the worked diagram as task, then one reading per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v01 (only electrons move) and v02 (contact charging, induction) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger IDs with NESA content-system codenames), quoted from the syllabus JSON:

- P25-FA3-G1-03 `ci3fc7c021`: "Outline characteristics of an electric field surrounding a point charge"
- P25-FA3-G1-04 `ci14918ed7`: "Explain the role of static electricity in producing a lightning strike"
- P25-FA3-G1-06 `cic3320bf2`: "Use field line diagrams to describe the electric field around point charges and between charged particles"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v02's handoff (above); the hook (two negative balloons repel across a gap: the air, or something else?); not the air (charges act through a vacuum); the electric field defined, existing without a second charge; the test charge and the point charge; direction (radially out from positive, in to negative); strength (strongest close in, weaker further out), symmetry in three dimensions; the field-line rules (start on positive, end on negative; arrows for a positive test charge; spacing for strength; more lines for a bigger charge; never cross); a negative charge feels a force opposite to the field (site `we-1`); unlike pair and like pair, with the neutral point; static electricity defined; the thundercloud: collisions charge particles, updraughts sort them, base negative, ground positive by induction; the field between them (upwards); air breakdown by an electron avalanche; the strike as the discharge; memory aid; two attempts. Stops at qualitative field descriptions, diagrams and the lightning mechanism. Not taught: E = kq/r² and the inverse square law (v04; "much weaker" only); field strength units; F = qE (v05); the force between point charges (Coulomb's law video); lightning conductors, leaders and return strokes (author note); uniform fields between plates (later FA3).

## Decisions

- **Learner question rewritten (route placeholder).** "How does a charge push and pull across empty space, and how does that build into a lightning strike?" One causal question that joins the three points: the field is how a charge acts across a gap, the diagrams are how we describe it, and lightning is what happens when separated static charge makes the field strong enough to break down air. It is v02's handoff chip. Answer, built in order: hook and prediction (1); the field (2); its direction (3); its strength and shape (4); the line rules (5); reading a diagram (6); pairs, with a prediction (7, 8); the cloud's charge separation (9); breakdown and the strike (10); memory aid (11).
- **The hook (site hook and warm-up, made a measurement with objects).** Two v01 balloons, rubbed with the wool cloth by code, hang from the FA1 retort stand's boss crossbar on coded threads; they swing apart and settle with a visible gap. Prediction (3 s): "the air?", "something else?". The site's balloon-and-paper warm-up is not reused (v02's hook used paper).
- **Not the air (site misconception 1, extended).** A coded thought-experiment inset: the air molecules between the balloons fade out (tag "thought experiment: a vacuum"); the amber force arrows on the balloons stay. Narration: "Charges still push and pull in a vacuum" (true; no claim about balloons in a vacuum, which would burst).
- **The cause made visible (owner quality bar).** (3) `TestChargeProbe`: a small red "+" test charge visits about twelve points round a coded positive point charge; at each it gets an amber force arrow (length falling with distance, display rule in author note b); the arrows' directions join into teal field lines. The point charge flips to negative and every arrow swings round to point in. (4) The probe's arrows at three distances along one line show the strength drop while the line spacing shrinks and grows in step; a 3D rotate (lines as spokes on a sphere, one turn) shows the slice is a slice. (7, 8) `FieldLines` computed from the charges' positions for the unlike and like pairs (author note c), so the pictures are the physics, not decoration; the neutral point is found by a probe whose arrow shrinks to nothing.
- **Worked example (site `we-1`, unchanged wording, made a diagram reading).** Inward radial lines; denser at P than at Q; answer: negative charge; the electron at P pushed outward, away from the charge; stronger at P. Layout: task strip; the diagram; one reading per cue ("lines in: negative", "electron: force opposite to field", "closer at P: stronger at P").
- **Prediction 2 (3 s, scene 7; site activity 1 part 2).** "Two equal positive charges: what do the lines between them do?" Chips "join up?", "bend away?". Answered in 8.
- **Static electricity defined (site key term).** "Charge that builds up and stays put, instead of flowing." Said in scene 9 when the cloud's charge is separated; it names the "static" in the syllabus point.
- **Lightning, with the full cause (site card 3; site corrections 1 and 2).** (9) Collisions between small ice crystals and soft hailstones (graupel, said "small, soft hailstones") transfer charge, like v02's contact charging; crystals tend to end positive, hail negative; updraughts lift the light crystals and the heavier hail sinks, so the top is positive and the base strongly negative; the base repels electrons in the ground (v02's induction), so the ground's surface is positive. (10) The field lines run from the positive ground up to the negative base (teal, dense, pointing up). Air is an insulator with a few free electrons; the field accelerates them; they knock electrons off molecules; the avalanche makes a conducting path; charge surges along it: the strike. Grey tags: "simplified: real clouds also have a small positive region near the base" (9) and "most lightning stays inside the cloud" (10).
- **Attempts (original, HSC style).** (A1, diagram, `cic3320bf2`) A coded HSC-style line drawing (ink lines with arrowheads, no colour, no signs): field lines leaving X and ending on Y, with P midway on the line joining them and Q well off to one side where lines are sparse. "The diagram shows the electric field lines between two charged particles, X and Y. (a) State the sign of the charge on X and on Y. (b) State the direction of the force on an electron placed at P. (c) State whether the field is stronger at P or at Q, and justify your answer. (3 marks)" Answer: X positive, Y negative; towards X; stronger at P (lines closer). Crossed: "towards Y, along the field lines". (A2, lightning, `ci14918ed7` and `ci3fc7c021`) "During a storm, the base of a thundercloud becomes strongly negatively charged. (a) Explain how the ground below the cloud becomes charged, and state the sign of its charge. (b) State the direction of the electric field between the ground and the cloud base. (c) Explain how this electric field can lead to a lightning strike. (4 marks)" Answer: induction, positive; upwards, ground to cloud; free electrons accelerated, avalanche, air conducts, charge flows. Crossed: "downwards, from the negative cloud to the ground". The A1 diagram shows only the given field; nothing answer-bearing is labelled.
- **Mistake scene:** none separate. "A field exists only when a second charge is there" (2; site misconception 1); "field lines are real threads" (5, a grey tag "a drawing tool, not real threads"; site misconception 2); "an electron moves along the field arrows" (6, feedback 1 crossed); "field lines can cross where the field is strong" (5; site two truths one lie); "the field points from the negative cloud down to the ground" (10, feedback 2 crossed); "lightning is friction between cloud and air" (9: the charge moves in collisions between ice particles).
- **Memory aid:** "Out of plus, into minus. Crowded means strong. Never cross." (see "Memory aid check").
- **Handoff (route next; proposal for v04's question).** Board change: a single positive point charge with its radial teal lines; two dashed circles at r and 2r; the test charge at r with its amber force arrow, and a ghost test charge at 2r with a "?" arrow; chips "twice as far?" and "half as strong? or less?"; then "Next: Why does a charge's field get weaker so quickly as you move away from it?". This is the frame v04 opens on (open decision 1).
- **Site sources used:** hook (the push across a gap and the lightning question: 1, 9); warm-up (what is in the gap: 1, 2); key terms (electric field, point charge, field line, static electricity: 2, 3, 5, 9); misconceptions 1 and 2 (2, 5); card 1 (definition, direction, strength, symmetry: 2 to 4); true or false (inward is false for positive: 3); card 2 with its figure (rules; single charge; unlike pair: 5, 7); `we-1` (6); quick check (closer lines: 4); activity 1 (negative charge, two positives: 3, 7, 8); fill the blanks (radial, decreases: 3, 4); card 3 (lightning, corrected and extended: 9, 10); last check (true: 10); two truths one lie (C: 5); Q1 (A2); Q2 (field characteristics: 2 to 4, key note 1); Q3 (never cross: 5).
- **Site corrections (quoted from site lesson 3, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 3: "This friction separates charge: the top of the cloud becomes positively charged and the base becomes strongly negative." Collisions between ice crystals and soft hail charge the particles, but nothing in the card explains why positive charge ends at the top and negative at the base. The vertical separation comes from the updraughts carrying the small, light, positively charged ice crystals upwards while the heavier, negatively charged hail falls or stays lower. The same gap is in the key-points box and Q1's model answer. Suggest: "Collisions between ice crystals and soft hail transfer charge: the small crystals tend to become positive and the hail negative. Updraughts carry the light crystals to the top of the cloud while the heavier hail sinks, so the top becomes positive and the base strongly negative."
  2. Card 3: "When that field becomes strong enough, it rips electrons from the air molecules in the gap (the air "breaks down" and becomes a conductor)" and Q1's model answer "it strips electrons from air molecules". Breakdown is an avalanche: the strong field accelerates the few free electrons already in the air, and these knock further electrons off the molecules they hit, which are accelerated in turn. Suggest: "The strong field speeds up the few free electrons in the air until they knock electrons off the air molecules they hit. Those electrons do the same, so an avalanche of free charge makes the air conduct."
  - Checked and correct: key terms; misconceptions; card 1 (definition, direction, strength, symmetry); card 2 rules and figure; `we-1` (negative; outward; stronger at P); quick check (A); fill the blanks; last check (true); two truths one lie (C); Q2 and Q3 model answers; the ground's induced positive charge.
- **Cause chain taught, in order:** (1) a push across a gap needs a cause (1); (2) not the air: a charge changes the space around it, the field (2); (3) direction is the force on a positive test charge: out from plus, in to minus (3); (4) the force weakens with distance, and the lines spread (4); (5) the line rules follow from what the lines stand for (5); (6) a negative charge is pushed against the field (6); (7) the pair patterns show attraction and repulsion, and a neutral point (7, 8); (8) collisions charge ice particles and updraughts separate them; the base induces positive ground (9); (9) the strong field causes an electron avalanche, the air conducts, the static charge flows (10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Science (like charges repel, unlike attract; forces as pushes and pulls); v01 (electrons move; signs as counts) and v02 (contact charging; conductors and insulators; induction), recalled in a phrase each.
- **Learner-visible vocabulary (plain meaning at first use):** electric field (a region where any charge placed in it feels a force, 2); vacuum (a space with no air or other matter, 2); test charge (a tiny positive charge we imagine placing to probe the field, too small to disturb it, 3); point charge (a charge so small we treat it as sitting at one point, 3); radially (straight out from, or straight in to, the centre, 3); field line (a line showing the direction of the force on a positive test charge, 3); neutral point (a spot where the fields cancel, so there's no field, 8); static electricity (charge that builds up and stays put, instead of flowing, 9); updraught (a rising current of air, 9); soft hailstone (a small pellet of soft hail, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`FieldLines`** (field lines traced numerically from any set of point charges in the plane, seeded evenly round each source with the number of lines proportional to the charge; arrowheads; lines terminate on negative charges or the board edge; an optional slow draw-on); **`TestChargeProbe`** (a red "+" probe that visits a list of points, drawing an amber force arrow at each from the same field function, with a fade trail; for an electron probe, a navy "−" with the arrow reversed); **3D spoke turn** (radial lines on a wireframe sphere rotating once, then flattening to the slice); **neutral-point finder** (the probe moves along the axis between like charges and its arrow shrinks to zero at the midpoint); **vacuum inset** (air molecules as grey dots fading out between two objects while force arrows stay); **`CloudCharge`** (the cloud plate with collision sparks between ice-crystal and hailstone plates in an inset, then red "+" drifting up and navy "−" sinking inside the cloud outline, driven by an updraught arrow field); **ground induction** (navy "−" in the ground strip sliding down and away, leaving a red "+" surface layer); **`AvalancheChain`** (a branching chain: one free electron accelerates, hits a molecule, two electrons leave, each repeats; counter "free electrons: 1, 2, 4, 8 ..."); **`LightningChannel`** (a coded bright jagged channel growing from cloud base to ground with a flash; the cloud's base charges and the ground's surface charges thinning as it flows); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics", with a coded HSC-style diagram for A1); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Colour key:** as v01 and v02 (positive red "+", negative and electrons navy "−", signs always printed); electric field lines teal (FA2 root decision 18, kept for FA3); forces amber with a dark ink outline; air molecules pale grey; the lightning channel warm white with a pale violet glow; the A1 diagram ink only (HSC style); crossed items grey scribble.
- **Board layout (constant):** heading top-left; the main picture (balloons, charges, cloud) in the left 60 per cent; the probe readings, rules and working in the right column.
- **No human figures.** No hands rub or hold the balloons; the ground strip has a tree and a shed, no people or animals.
- **Author notes (not learner copy):**
  (a) Charges act through a vacuum; air changes the force by only about 0.06 per cent (relative permittivity 1.0006). The narration says "still push and pull", not "just as strongly".
  (b) Probe arrow lengths are proportional to 1/r² of the display field (the true dependence), capped near the charge for readability; the narration says only "much weaker" (v04 owns the law).
  (c) `FieldLines`: lines traced by stepping along E/|E| from seeds round each positive charge (and from the board edge into a lone negative charge); 12 lines per unit charge; unlike pair and like pair equal in magnitude; neutral point for equal like charges at the midpoint.
  (d) `we-1` reading: lines in, so negative; an electron's force is opposite to E, so outward at P; spacing smaller at P, so stronger at P.
  (e) Thundercloud charging (simplified): non-inductive collisions between graupel and ice crystals in the presence of supercooled droplets; at typical charging-zone temperatures the crystals gain positive charge and the graupel negative; updraughts carry the crystals up. Real clouds also hold a small lower positive region (grey tag). The ground's surface charge is induced (moist ground is a conductor).
  (f) Breakdown: dry air breaks down at about 3 × 10⁶ V m⁻¹ at sea level; lightning starts at lower fields with help from charged precipitation; a stepped leader and return stroke follow. None of this is said; field-strength units wait for v04.
  (g) Field direction under a negative base: from the positively charged ground up to the negative base; the force on electrons is downward, so negative charge flows to ground in a typical cloud-to-ground strike.
  (h) A1 diagram: equal and opposite charges X (left) and Y (right) 6 units apart; P at the midpoint on the axis; Q 5 units above the midpoint, where the lines are sparse; field at P points from X to Y; electron force at P towards X.
  (i) Pronunciations: "updraughts" (UP-drafts); "radially" (RAY-dee-uh-lee); "graupel" is not said.

Main question: *Two negative balloons swing apart with nothing touching them. How does a charge push and pull across empty space, and how does that build into a lightning strike?*
Entry knowledge (Stage 5 like and unlike charges; v01 electron transfer; v02 contact charging and induction).
Stops after: the field defined and its characteristics round a point charge; field-line rules; reading and drawing single charges and pairs; the force on a negative charge opposite to the field; lightning from charge separation, a strong field and air breakdown. No equations for the field.
Handoff: v04, how fast the field weakens with distance.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 and v02, plus field lines teal; lightning warm white with a pale violet glow.

### 1. hook (what's in the gap?)
> Last time, a charged rod pushed electrons around inside a sphere it never touched. Here's that kind of push on its own. Two balloons, both rubbed with wool, so both negative, hang side by side on threads. They swing apart, and nothing is touching them. So what's in the gap doing the pushing? Is it the air, or something **else**?

Visual: opens on v02's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Fields: pushing across a gap"; the rod, sphere and paper fade, and the dashed gap outline stays a moment. The retort stand (`phys-y11-retort-stand-v1.png`) with its boss crossbar (`phys-y11-boss-crossbar-v1.png`) at the left; two balloons (`phys-y11-balloon-v1.png`, the same plate twice) hang from it on coded threads, touching. The wool cloth (`phys-y11-wool-cloth-v1.png`) rubs each balloon by code; navy "−" chips appear on both. On "swing apart" the balloons swing out and settle with a clear gap (pendulum motion, about 2 s); amber force arrows on each, pointing away from the other. The dashed gap outline from v02 settles between them. On "else" chips "the air?" and "something else?" and a 3-second countdown ring.

### 2. it isn't the air: an electric field
> It isn't the air. Charges still push and pull in a vacuum, a space with no air at all. Here's how physicists explain it. A charge changes the space around it. That changed region is called an electric field: a region where any charge placed in it feels a force. The field is there whether or not anything else is nearby. The second balloon doesn't make the push. It just **feels** it.

Visual: vacuum inset over the gap: pale grey air molecules fade out (tag "thought experiment: a vacuum"); the amber arrows stay the same; the "the air?" chip takes a scribble cross. On "changes the space" a soft teal haze spreads out from the left balloon only (the right balloon greyed out and then removed); boxed: "Electric field: a region where a charge feels a force." On "whether or not" the right balloon is gone and the haze remains (chip "the field is still there"). On "feels" the right balloon returns into the haze and its amber arrow appears.

### 3. mapping the field: direction
> To map a field, we imagine a test charge: a tiny positive charge, too small to disturb anything. Start with a point charge, a charge so small we treat it as sitting at one point, and make it positive. Wherever we put the test charge, it's pushed straight **away**. That's the field's direction at each spot. Join those directions up, and we get field lines, pointing radially, straight out from the centre, like spokes. Now make the point charge negative. The test charge is pulled straight in, so the lines point radially **inward**.

Visual: board change: a coded point charge (red disc with "+") centre left; label "point charge". `TestChargeProbe`: a small red "+" (label "test charge") visits about twelve points round it; on "away" each visit leaves an amber force arrow pointing away. On "Join those directions up" teal `FieldLines` draw through the arrow positions, radial with outward arrowheads; label "field lines". On "negative" the disc flips to navy "−"; the arrows swing round in place, and on "inward" the teal arrowheads flip to point in. Right column chips: "+ : field radially outward", "− : field radially inward".

### 4. strength and shape
> The test charge tells us strength, too. Close to the charge, the push is strong. Further out, it's much weaker. The field lines show this as well. They're crowded near the charge, and spread apart further out. So closer lines mean a stronger field. Around a single point charge, the field is the same in every direction. We draw a flat slice, but really the lines spread out in all three **dimensions**.

Visual: the positive charge returns. The probe sits at three distances along one line; its amber arrows shrink sharply with distance (author note b; no numbers). At the same three spots, short ticks across neighbouring lines show their spacing growing. Chip "closer lines: stronger field". On "same in every direction" the probe circles at a fixed distance and its arrow length stays constant. On "dimensions" the 3D spoke turn (lines on a wireframe sphere rotate once) and flatten back to the slice (tag "a slice through the field").

### 5. the rules for field lines
> That gives us the rules for field lines. Lines start on positive charges and end on negative charges, or run off the edge of the picture. The arrows show the direction of the force on a positive test charge. Closer lines mean a stronger field. A bigger charge gets more lines. And lines never cross, because the field can only point one way at each spot. A test charge at a crossing would have to be pushed two ways at **once**.

Visual: right column, one rule per sentence, each with a small teal sketch: "start on +, end on − (or run off the edge)"; "arrow = force on a + test charge"; "closer = stronger"; "bigger charge, more lines" (a +2 charge with 24 lines beside a +1 with 12); "never cross". On "two ways" two lines are forced to cross in a sketch; a red "+" probe at the crossing gets two amber arrows in different directions, then the sketch takes a scribble cross. Grey tag under the rules: "field lines are a drawing tool, not real threads".

### 6. worked example: reading a field diagram
> Let's read a diagram. Task: these field lines point radially inward towards a single charge, and they're closer together at point P than at point Q. Find the sign of the charge, the direction of the force on an electron at P, and where the field is stronger. The lines point in, so they end on the charge: it's **negative**. An electron is negative, so the force on it is opposite to the field. At P, it's pushed outward, away from the **charge**. And the lines are closer at P, so the field is stronger at **P**.

Visual: clear change to the worked layout. Task strip: "Find: the sign of the charge; the force on an electron at P; where the field is stronger" (grey tag "site worked example"). The diagram: an unlabelled charge with inward radial teal lines, P marked close in, Q further out. Readings, one per cue: on "negative" "lines end on it: negative" (the charge fills navy with "−"); the rule "electron: force opposite to the field" writes; a navy "−" electron at P gets an amber arrow pointing outward on "charge", against the teal arrow; on "P" spacing ticks at P and Q, and "stronger at P", boxed.

### 7. two charges, and a prediction
> Now two charges. A positive and a negative, side by side. Lines leave the positive charge and curve round to land on the negative one, packed tightly in the space between them. That's the picture of attraction. Now make both positive. What happens to the lines in the middle, between **them**?

Visual: board change: a red "+" and a navy "−" of equal size; `FieldLines` draw on slowly from the "+" and curve into the "−", dense on the axis between them; small amber arrows on each charge point towards the other (chip "attraction"). On "both positive" the "−" flips to red "+" (same size as the other; label "equal charges") and the lines clear. On "them" chips "join up?" and "bend away?" and a 3-second countdown ring.

### 8. like charges and the neutral point
> They bend away. None of them reaches the other charge. Halfway between, the two equal pushes cancel, so there's a spot with no field, called a neutral point. And the lines bunch up on the outer sides, as if the charges are being pushed apart. That's exactly what like charges do. The field picture tells the force **story**.

Visual: `FieldLines` for the like pair draw on: lines from each charge turn aside, leaving an empty region in the middle. Neutral-point finder: a red "+" probe slides along the axis from one charge towards the midpoint; its amber arrow shrinks to nothing at the midpoint, marked "neutral point: no field". Small amber arrows on each charge point away from the other (chip "repulsion"). On "story" a small side-by-side recap: the unlike pair (lines join: attract) and the like pair (lines bend away: repel).

### 9. a thundercloud separates charge
> Now scale it up to a thundercloud. Inside it, updraughts, rising currents of air, throw ice crystals and small, soft hailstones together. Each collision moves charge between them, much like rubbing two materials. The small crystals tend to end up positive, and the hailstones negative. The updraughts carry the light crystals to the top, while the heavier hail sinks. So the cloud's top becomes positive, and its base strongly negative. This is static electricity: charge that builds up and stays put, instead of flowing. The negative base repels electrons in the ground below, by induction, leaving the ground's surface **positive**.

Visual: board change: the thundercloud plate (`phys-y11-thundercloud-v1.png`) across the upper board; the ground strip (`phys-y11-ground-strip-v1.png`) along the bottom. Pale updraught arrows rise through the cloud. On "ice crystals" an inset: the ice crystal plate (`phys-y11-ice-crystal-v1.png`) and the soft hailstone plate (`phys-y11-hailstone-v1.png`) collide with a small spark; the crystal leaves with a red "+", the hailstone with a navy "−". On "carry the light crystals" `CloudCharge`: red "+" drift up to the cloud's top, navy "−" settle in the lower cloud; labels "top: +", "base: strongly −" (grey tag "simplified: real clouds also have a small positive region near the base"). On "static electricity" chip "static: charge built up, not flowing". On "repels electrons in the ground" navy "−" in the ground slide down and away from under the cloud; on "positive" a red "+" layer forms on the ground's surface (chip "induction, from v02").

### 10. the field breaks the air down
> Now there's a strong electric field between the cloud base and the ground. Lines start on positive charge, so here they point up, from the ground to the cloud. Air is normally an insulator, but it always has a few free electrons. The field pushes them so hard that they speed up and smash into air molecules, knocking more electrons loose. Those do the same, again and again, an avalanche. The air along that path becomes a conductor, and a huge surge of charge flows through it. That's the lightning strike: built-up static charge, finally **released**.

Visual: teal `FieldLines` fill the gap from the ground's red "+" up to the cloud base's navy "−", dense and pointing up (chip "field: ground → cloud, upwards"). Zoom into the air between: grey molecules; one navy free electron. On "speed up" it accelerates (a short trail; small amber arrow on it pointing down, against the field); on "smash" it hits a molecule and a second electron leaves; `AvalancheChain` branches with a counter "free electrons: 1, 2, 4, 8, 16 ..."; the molecules hit turn into red "+" ions. Pull out: on "conductor" a faint path from the cloud base to the ground brightens; on "surge" the `LightningChannel` flashes along it; the base's navy "−" and the ground's red "+" thin out where it lands. On "released" chip "lightning: static charge discharging" (grey tag "most lightning stays inside the cloud").

### 11. memory aid
> To remember the rules: out of plus, into minus. Crowded means strong. And lines never **cross**.

Visual: the handwritten line writes large: "Out of plus, into minus. Crowded means strong. Never cross." On "plus" a small red "+" sends lines out; on "minus" a navy "−" takes them in; on "crowded" the lines near a charge pulse; on "cross" a crossing sketch takes a scribble cross. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. The diagram shows the field lines between two charged particles, X and Y, with points P and Q marked. State the sign of the charge on each particle, the direction of the force on an electron at P, and whether the field is stronger at P or at Q, with a reason. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a coded HSC-style line drawing (ink only, arrowheads on the lines, X and Y as small open circles with no signs; P midway on the line joining them; Q well above the midpoint where the lines are sparse; author note h): "The diagram shows the electric field lines between two charged particles, X and Y. (a) State the sign of the charge on X and on Y. (b) State the direction of the force on an electron placed at P. (c) State whether the field is stronger at P or at Q, and justify your answer. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The lines leave X and end on Y, so X is positive, and Y is **negative**. At P the field points from X towards Y. An electron feels a force opposite to the field, so it's pushed towards **X**. The lines are closer together at P, so the field is stronger at **P**. Pushing the electron along the arrows treats it like a positive charge. Electrons go **against** them.

Visual: card shrinks to the top; "electron" underlined. The diagram enlarges: on "negative" X fills red with "+", Y fills navy with "−"; a teal arrow at P towards Y; on "X" a navy "−" at P with an amber arrow towards X; on "P" spacing ticks at P and Q and "stronger at P: lines closer", boxed. On "against" a chip "towards Y, along the field lines" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. During a storm, the base of a thundercloud becomes strongly negatively charged. Explain how the ground below becomes charged, and state its sign. State the direction of the electric field between the ground and the cloud base. Then explain how this field can lead to a lightning strike. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "During a storm, the base of a thundercloud becomes strongly negatively charged. (a) Explain how the ground below the cloud becomes charged, and state the sign of its charge. (b) State the direction of the electric field between the ground and the cloud base. (c) Explain how this electric field can lead to a lightning strike. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The negative base repels electrons in the ground, so the ground's surface is left **positive**. Field lines run from positive to negative, so the field points up, from the ground to the **cloud**. When it's strong enough, it speeds up free electrons until they knock more loose, the air conducts, and the charge flows as **lightning**. Saying the field points down, from the negative cloud, gets the rule **backwards**.

Visual: card shrinks to the top; "strongly negatively charged" underlined. A small cloud-and-ground sketch from 9 and 10: on "positive" "(a) induction: ground surface +"; on "cloud" teal arrows upward, "(b) upwards, ground to cloud"; on "lightning" a mini avalanche and flash, "(c) free electrons accelerated, avalanche, air conducts, charge flows", boxed. On "backwards" a chip "downwards, from the negative cloud to the ground" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So a charge fills the space around it with a field, strongest close in. But how much weaker does it get as you move away? Move twice as far, and does the field halve, or drop even **faster**?

Visual: board change: the memory line small at the top. A single positive point charge with its radial teal lines; two dashed circles at r and 2r (labels "r", "2r"); the red "+" test charge at r with its amber force arrow; a ghost test charge at 2r with a dashed "?" arrow. Two chips write: "twice as far?" and "half as strong? or less?". On "faster" the chip "Next: Why does a charge's field get weaker so quickly as you move away from it?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. An electric field is a region where a charge feels a force. It exists round a charge whether or not another charge is there.
2. Field direction = the direction of the force on a small positive test charge. Round a point charge the field is radial: outward from +, inward to −. It is strongest close to the charge and the same in every direction.
3. Field lines start on + and end on − (or run off the page); closer lines mean a stronger field; more lines for a bigger charge; lines never cross. A negative charge feels a force opposite to the field.
4. Lightning: collisions charge ice particles; updraughts carry + to the top, leaving the base strongly −; the base induces + on the ground. The strong field makes free electrons knock more loose, the air conducts, and the static charge flows as a strike.

Memory aid (large, on the notes screen): *Out of plus, into minus. Crowded means strong. Never cross.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the balloons push apart without contact: each charge sets up a field, and the other feels a force in it (2). Why the field points out from plus: a positive test charge is repelled (3). Why closer lines mean stronger: the lines spread as the force weakens (4). Why lines never cross: a test charge can't be pushed two ways (5). Why an electron goes against the arrows: the arrows are defined for a positive charge (6). Why there's a neutral point: equal pushes cancel (8). Why the cloud's base is negative: collisions charge the particles and updraughts sort them by size (9). Why the ground is positive: induction (9). Why the air conducts: an electron avalanche (10).
- **Misconceptions addressed:** a field needs a second charge (2); lines are real (5); electrons move along the arrows (6, feedback 1 crossed); lines cross (5, 11); the field points down from a negative cloud (10, feedback 2 crossed); lightning as cloud-air friction (9).
- **One idea at a time:** the field (2), direction (3), strength and shape (4), rules (5), reading (6), pairs (7, 8), separation (9), breakdown (10).
- **Video makes it easier:** the student sees a probe's force arrows build the field lines (3), the arrows shrink as the lines spread (4), a crossing fail with two arrows (5), a probe find the neutral point (8), charges sort inside the cloud (9) and an avalanche branch into a strike (10).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition on the card (the diagram; electron; strongly negative base), nothing answer-bearing. One crossed mistake each; feedback about 26 s and 30 s.
- **Avoided double teaching:** v02's contact charging and induction recalled in a phrase each in 9; v01 only in the hook.
- **Syllabus coverage:** `ci3fc7c021`: characteristics round a point charge (2 to 4, notes 1 and 2, A2 b); `cic3320bf2`: field-line diagrams round point charges (3 to 6) and between charged particles (7, 8, A1); `ci14918ed7`: static electricity in lightning (9, 10, A2).
- **Out of scope by design:** E = kq/r², units and the inverse square law (v04); F = qE (v05); Coulomb's law; uniform fields; lightning conductors and leaders.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The diagram shows the electric field lines between two charged particles, X and Y. (a) State the sign of the charge on X and on Y. (b) State the direction of the force on an electron placed at P. (c) State whether the field is stronger at P or at Q, and justify your answer."
Model answer: (a) The lines leave X and end on Y: X is positive and Y is negative. (b) The field at P points from X towards Y; an electron is negative, so the force on it is opposite to the field: towards X. (c) Stronger at P, because the field lines are closer together there. Classic mistake (crossed): "towards Y, along the field lines".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "During a storm, the base of a thundercloud becomes strongly negatively charged. (a) Explain how the ground below the cloud becomes charged, and state the sign of its charge. (b) State the direction of the electric field between the ground and the cloud base. (c) Explain how this electric field can lead to a lightning strike."
Model answer: (a) The negative cloud base repels electrons in the ground away from the surface (induction), leaving the ground's surface positively charged. (b) Upwards, from the positive ground to the negative cloud base. (c) When the field is strong enough, it accelerates the few free electrons in the air so that they knock electrons off air molecules; the freed electrons do the same, in an avalanche. The air along the path becomes a conductor, and the separated static charge flows through it as a lightning strike. Classic mistake (crossed): "downwards, from the negative cloud to the ground".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Lines per unit charge | 12 (24 for the +2 sketch) | 3, 5, 7, 8 |
| Avalanche counter | 1, 2, 4, 8, 16 | 10 |
| A1 diagram geometry | X and Y 6 units apart; P at the midpoint; Q 5 units above the midpoint | 12, 13 |

No calculations: the video is qualitative by design (v04 owns field strength values).

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Equal and opposite charges at (−3, 0) and (3, 0): field magnitude at P (0, 0) ∝ 2 × 1/9 = 0.222; at Q (0, 5) ∝ 2 × (1/34) × (3/√34) = 0.0303; P is about 7.3 times stronger. Field at P points from X towards Y.
- Equal like charges: field at the midpoint is zero.
- Air relative permittivity 1.0006 (author note a).

## Memory aid check

- **"Out of plus, into minus. Crowded means strong. Never cross."** Meaning, as said in scene 11: field lines leave positive charges and end on negative charges; where lines crowd together the field is strong; lines never cross. Assumptions checked: "out of plus, into minus" describes the field direction (the force on a positive test charge), not the motion of electrons (scene 6 and feedback 1 make the electron's force opposite); lines from a lone charge run off to, or in from, the edge of the drawing (the rule still holds: they leave plus or end on minus). "Crowded means strong" compares spacing within one correctly drawn diagram. Introduced after the rules (5) and the pairs (7, 8).
- **Site hook (one-way streets) considered, not used.** Real streets do cross at intersections, so the analogy's reason ("two streets cannot cross") is false to the student's experience; scene 5's test-charge argument (two arrows at one point) is used instead.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,026 characters** (6,042 joined), 17 scenes. Characters per scene (1 to 17): 326, 380, 526, 399, 388, 501, 289, 321, 630, 550, 92, 292, 349, 318, 403, 187, 75. At 13.3 characters per second the speech is about 453 s; add about 18 s of holds and settling (the swing in 1, the probe visits in 3, the 3D turn in 4, the line draw-ons in 7 and 8, the cloud sorting in 9, the avalanche and strike in 10, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 553 s**, under the 570 s cap. Three linked points fill it without padding.

## Scene list and build ids

Lesson key `p-y11-fa3-v03` (route phys-y11-fa3-v03). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v03` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v03` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, electric-field, direction, strength-shape, line-rules, reading-example, pairs-prediction, like-charges, cloud-separation, breakdown-strike, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and pairs-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v02's last frame continues into scene 1 (camera continue: the gap outline carries over); 1 to 2 camera continue; 2 to 3 board change to the point charge; 3 to 4 camera continue; 4 to 5 split board (rules in the right column); 5 to 6 clear change to the worked layout; 6 to 7 board change; 7 to 8 camera continue; 8 to 9 board change to the cloud; 9 to 10 camera continue (zoom into the air and out); 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and pairs-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v03-learning-review.md`, `science_check` = `checks/p-y11-fa3-v03-physics-check.md`.

## Assets

Reused (uniform scaling only, never stretched): `phys-y11-balloon-v1.png` (twice, 1, 2), `phys-y11-wool-cloth-v1.png` (1) (v01 requests); `phys-y11-retort-stand-v1.png` and `phys-y11-boss-crossbar-v1.png` (FA1, delivered; 1, 2); v02's `phys-y11-polythene-rod-v1.png`, `phys-y11-metal-sphere-stand-v1.png` and paper scraps (opening frame only).

New (requested below): `phys-y11-thundercloud-v1.png` (9, 10, 15), `phys-y11-ground-strip-v1.png` (9, 10, 15), `phys-y11-ice-crystal-v1.png` (9), `phys-y11-hailstone-v1.png` (9).

Checked first (3 Nov): `public/assets/physics/` has no weather or electrostatics plates; `public/assets/biology/` has a coral spawn "cloud" only (not suitable).

Coded: point charges, test charges, field lines, force arrows, the 3D spoke turn, air molecules, the avalanche, the lightning channel, updraught arrows, charge symbols in the cloud and ground, the A1 line drawing.

Kit gaps (for the next physics kit brief): `FieldLines`, `TestChargeProbe`, neutral-point finder, vacuum inset, `CloudCharge`, ground induction, `AvalancheChain`, `LightningChannel` (`FieldLines` and `TestChargeProbe` are needed again in v04 and v05); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v03, storm scenery)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or animals). Save to `public/assets/physics/`.

1. `phys-y11-thundercloud-v1.png`: a single towering cumulonimbus storm cloud, side view, with a flat dark grey base, a tall bright white column and a spreading anvil top; no lightning, no rain shafts painted (rain and lightning are coded). Wide format, about 2000 px wide; the base flat and level across most of the width so coded charges can sit along it.
2. `phys-y11-ground-strip-v1.png`: a long strip of open grassy ground seen side on, with one lone tree towards the right and a small farm shed towards the left; transparent sky; a thin layer of soil visible at the front edge. About 2000 px wide and 300 px tall, the same width as the cloud plate.
3. `phys-y11-ice-crystal-v1.png`: one small hexagonal ice crystal (a flat plate with faint six-fold pattern), pale blue-white, slightly translucent. About 400 px across.
4. `phys-y11-hailstone-v1.png`: one small soft hailstone (graupel): a rounded white pellet with a rough, frosted, lumpy surface, opaque. About 400 px across, drawn at the same scale as the crystal but clearly larger and heavier-looking (about twice the crystal's width).

Acceptance: true transparency, no halo; the cloud and ground strip align edge to edge at the same width; nothing red or navy (those carry charge signs).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the A1 diagram geometry (P on the axis, Q off-axis and weaker).
2. Confirm the physics claims: a field exists round a charge without a second charge; direction is the force on a positive test charge; radially outward from +, inward to −; strongest close in; symmetric in three dimensions; lines start on + and end on − (or run off the drawing, for a lone charge); closer lines mean stronger; more lines for a bigger charge; lines never cross; a negative charge feels a force opposite to the field; unlike pairs join, like pairs bend away with a neutral point midway (equal charges); charges act through a vacuum.
3. Confirm the lightning claims: collisions between ice crystals and soft hail transfer charge; crystals tend positive, hail negative; updraughts carry crystals up; base strongly negative; ground surface positive by induction; the field points upwards from ground to cloud; breakdown by an electron avalanche; the strike as a discharge of the separated static charge; both grey tags present.
4. Confirm no field equation, unit or inverse square law is stated.
5. Confirm both attempt questions are original in wording, carry every condition, and that the A1 diagram shows no signs or answer labels.
6. Confirm the syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
7. Confirm the opening frame matches `phys-y11-fa3-v02.md` scene 15.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("updraughts").
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Electric Fields, Field Line Diagrams and How Lightning Strikes | Year 11 Physics

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson03.sa.html

Two charged balloons push each other apart with nothing touching them. What is in the gap? Meet the electric field: see a test charge map the field round a point charge, learn the rules for drawing field lines, read a field diagram, and find the neutral point between two like charges. Then scale it up to a thundercloud: collisions and updraughts separate charge, the ground below is charged by induction, and the field becomes strong enough to set off an electron avalanche in the air. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Outline characteristics of an electric field surrounding a point charge" (ci3fc7c021)
"Explain the role of static electricity in producing a lightning strike" (ci14918ed7)
"Use field line diagrams to describe the electric field around point charges and between charged particles" (cic3320bf2)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Charging by friction, conduction and induction (previous video). Next: Electric field strength.

#Year11Physics #Physics #ElectricFields #HSCScience

## Open decisions

- **1. v04's question (proposal).** The handoff chip uses "Why does a charge's field get weaker so quickly as you move away from it?" for phys-y11-fa3-v04 (route placeholder "How can I explain and apply electric field strength?"). Root to enter it in the route, or align this chip to v04's designer's question.
- **2. Three points in one video.** The route assigns `ci3fc7c021`, `ci14918ed7` and `cic3320bf2` together (site lesson 3). They fit as one causal story at about the length estimated; if the learning review finds the lightning half rushed, the split is v03a (field and diagrams, scenes 1 to 8) and v03b (lightning, scenes 9 and 10 with their own attempt), with the handoff moved. Not proposed now.
- **3. Lightning detail.** Grey tags carry the lower positive region and in-cloud lightning; leaders and return strokes are left out. Root to confirm this simplification level for Year 11.
- **4. Route refinement (root to record).** Question as above; start "Begin at v02's rod-and-sphere gap; recall induction"; stop "Stop at field characteristics, field-line diagrams for single charges and pairs, and lightning from separated static charge; hand field strength to v04".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v02 at Year 11 entry; check that "it isn't the air" lands without a real vacuum demonstration; that the probe arrows make line direction and spacing feel caused; that the line rules come after their reasons; that the cloud's sorting by updraught is clear; that the avalanche explains "the air conducts"; that the A1 diagram gives nothing away), then the Codex physics check and error check.
- The probe building the lines (3, 4), the crossing failure (5), the neutral-point finder (8), the cloud sorting (9) and the avalanche into a strike (10) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): the halfway neutral point now carries the equal-charge condition. Scene 8 says "the two equal pushes cancel"; scene 7's Visual labels the flipped charge "equal charges" (same size as the other). The physics-check line already said "(equal charges)".
- Should fix 2 (both reviews): scene 5's rule now reads "Lines start on positive charges and end on negative charges, or run off the edge of the picture", matching the isolated radial diagram. The rule chip, key note 3 and the physics-check line match.
- Narration count: 6,077 characters (build parser rule), about 556 s with the stated holds (35 characters longer than the reviewed 6,042; scene 8's "no field at all" became "no field", which part-funds it; within the cap).
