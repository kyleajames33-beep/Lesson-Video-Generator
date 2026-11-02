# Year 11 Physics FA3 V06 (Physics 2025, Year 11, Focus Area 3): What sets the force between two charges, and why does moving them three times closer make it nine times stronger? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v06`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new, with one sidecar (Coulomb's torsion balance).

Narration 5,476 characters, 17 scenes, about 512 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Just under 5,500 by design: one syllabus point, fully taught; not padded.

Scope: sixth video of the Year 11 Physics (2025) Focus Area 3 route: the electrostatic force law (Coulomb's law) built from v04's field and v05's F = qE, the factors that set the force (each charge, the separation, the signs), the equal and opposite pair, a calculation and factor (ratio) analysis. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v05.md` (Revision 1; v05's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson06.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 the electrostatic force law with its figure description, true or false, card 2 calculating the Coulomb force with `we-1` and the quick check, activity 1 change a factor, odd one out, card 3 a twin of Newton's gravity, last check, match the pairs, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 6 ("Coulomb is Newton's gravity with a plus and a minus."; not used, see "Memory aid check"). Route entry: `phys-y11-fa3-v06` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Coulomb's Law. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply coulomb's law? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v07: How can I explain and apply the field between parallel plates?" (this design proposes "What makes the field between two charged plates the same everywhere, and what sets its strength?" for v07's chip; see open decision 1).

**Opening frame (v05's actual handoff, Revision 1, 3 Nov).** v05's scene 15 ends with the memory line "Size: q times E. Plus goes with the field, minus goes against it." small at the top; two point charges, q₁ (red "+") at the left and q₂ (red "+") at the right, with a dimension line "r"; q₁'s teal lines reaching q₂; at q₂ the rows "E at q₂ = kq₁/r² (last video)" and "F on q₂ = q₂E (this video)"; a chip "so F = ?"; chips "both charges matter?" and "three times closer?"; chip "Next: What sets the force between two charges, and why does moving them three times closer make it nine times stronger?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (Coulomb is named, never drawn; the torsion balance stands alone and its parts move by code); the torsion balance painted (apparatus); point charges, field lines, force arrows, factor bars and working coded (abstract diagrams); one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v03 (like and unlike pair pictures), v04 (E = kq/r², inverse square) and v05 (F = qE) recalled in a phrase each; FA1 (Newton's third law) recalled in a phrase.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its typeset fraction rendered inline, FA2 root decision 11):

- P25-FA3-G1-08 `cia29563ca`: "Analyse the factors that affect the force between 2 charged particles using the electrostatic force law and F = (1/4πε₀) q₁q₂/r²"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v05's handoff (above); the hook (three times closer: three times or more?); the law built by substituting v04's field into v05's F = qE; the syllabus form F = (1/4πε₀) q₁q₂/r² and its names (electrostatic force law, Coulomb's law); Coulomb's 1785 torsion balance as the measurement behind it (one scene); the factors: each charge (×2 each; product), separation (inverse square; the hook answered, ×9), signs (like repel, unlike attract; sizes in the equation, signs for the nature); equal and opposite forces whatever the charges' sizes (site misconception 1; Newton's third law); the site's worked example; factor analysis with k cancelling (site activity 1 part 4, as a prediction); memory aid; two attempts. Stops at the force between two point charges on one line. Not taught: forces from three or more charges added as vectors; charges not in a line; Newton's law of gravitation and the comparison with gravity (site card 3; Year 12; open decision 2); the uniform field between plates (v07).

## Decisions

- **Learner question (v05's proposal adopted; route placeholder rewritten).** "What sets the force between two charges, and why does moving them three times closer make it nine times stronger?" One causal question carrying the syllabus verb ("analyse the factors") and the site's hook surprise. Answer, built in order: hook and prediction (1); the law from the last two videos (2); Coulomb's measurement (3); the charges (4); the distance, and the hook answered (5); equal and opposite (6); direction (7); a calculation (8); factor analysis with a prediction (9, 10); memory aid (11).
- **The law built, not announced (owner quality bar).** Scene 2 substitutes v04's row into v05's row on v05's own board: `AlignedAlgebra` slides "kq₁/r²" into the E of "F = q₂E", giving "F = kq₁q₂/r²", then shows the syllabus form. So every factor already has a cause the student met: q₁ sets the field, q₂ sets how many coulombs feel it, r sets how much the field has spread.
- **Coulomb's torsion balance (evidence, painted apparatus).** One short scene: the painted balance (`phys-y11-torsion-balance-v1.png`); a coded twist of the wire and of the hanging rod as a second charged ball is brought near; a coded twist-angle readout grows as the gap shrinks (no numbers; tag "Coulomb's 1785 measurement"). It answers "how do we know?" without a practical (the syllabus point is analytical). No figure of Coulomb.
- **Factors made visible.** **`ForceFactorBar`**: an amber force bar beside the pair with three coded dials, "q₁", "q₂", "r"; turning a dial multiplies the bar by the factor, with the multiplier written ("× 2", "× 4", "× ¼", "× 9"). For the distance, v04's sphere picture returns as a thumbnail: q₁'s lines at r and at r/3 (the patch nine times as dense).
- **Equal and opposite, from both ends (site misconception 1).** A big charge (+3 units) and a small one (+1): the board computes the force on each as "charge × the other's field", both giving kq₁q₂/r²; equal amber arrows, opposite. Named as Newton's third law (FA1), as a matching pair. Prediction-free; the question is asked and answered in one scene, because A2 (a) tests it.
- **Worked example (site `we-1`, numbers unchanged).** +4.0 × 10⁻⁶ C and −3.0 × 10⁻⁶ C, 0.50 m apart in air; F = 0.43 N, attractive. Layout: task strip; equation strip; grouped givens (two charges as sizes, with the signs kept beside them for the nature; r; k); one step per cue: the product on top, r², F, nature.
- **Prediction 2 (3 s, scene 9; site activity 1 part 4).** "Double both charges and double the distance: new force?" Chips "the same?", "twice as big?". Answered in 10 (× 2 × 2 ÷ 4 = × 1). The scene teaches the factor method (k cancels), which A2 (b) uses.
- **Attempts (original, HSC style).** (A1, calculation) "Two small charged spheres carry charges of +3.0 × 10⁻⁸ C and +5.0 × 10⁻⁸ C. Their centres are 0.15 m apart in air. Treat them as point charges. (a) Calculate the magnitude of the electrostatic force between them. (b) State whether the force is attractive or repulsive, and give a reason. (3 marks)" Answer: 6.0 × 10⁻⁴ N; repulsive, like charges. Crossed: "9.0 × 10⁻⁵ N (r not squared)". (A2, factor analysis and the pair) "Two small charged spheres, A and B, attract each other with a force of 0.20 N. The charge on A is twice the charge on B. (a) Compare the magnitude of the force on A with the magnitude of the force on B. (b) The charge on B is then tripled and the distance between the spheres is halved. Calculate the new force between them. (3 marks)" Answer: equal; 2.4 N, still attractive. Crossed: "(a) A feels twice the force".
- **Mistake scene:** none separate. "Doubling the distance halves the force" (5; site misconception 2); "the bigger charge feels the bigger force" (6, feedback 2 crossed; site misconception 1); "use the signed charges and read the sign of F" (7: sizes for the size, signs for the nature, so no negative force appears); "dividing by r, not r²" (feedback 1 crossed).
- **Memory aid:** "Charges multiply, distance squares. Like pushes, unlike pulls." (see "Memory aid check").
- **Handoff (route next; proposal for v07's question).** Board change: the point pair fades; a row of red "+" charges spreads into a long horizontal plate at the top and a row of navy "−" into a plate at the bottom (coded, edge-on); the gap between them is a pale teal "?" region; a red "+" probe at two places in the gap, near the middle and near one end, each with a dashed "?" amber arrow; chips "the same everywhere?" and "what sets its strength?"; then "Next: What makes the field between two charged plates the same everywhere, and what sets its strength?". This is the frame v07 opens on (open decision 1). It also answers v05's grey tag "how to make one: a later video".
- **Site sources used:** intro (Coulomb, 1785: 3); hook (three times closer, ninefold: 1, 5); warm-up (twice as far: 5); intentions (Know 1 to 3; Understand 1 and 2; Can Do 1 to 3: 2 to 10, A1, A2; Understand 3, the gravity parallel: not used, open decision 2); key terms (Coulomb's law, electrostatic force, like and unlike, separation: 2, 7); misconceptions 1 and 2 (6, 5); card 1 and its figure (4 to 7); true or false (false: 6); card 2 and `we-1` (8); quick check (C, a ninth: 5); activity 1 parts 1 to 4 (4, 9, 10); odd one out (C: 5); match the pairs (4, 5, 10; site correction 3); Q1 (A1 structure); Q2 (factor method, A2 b); Q3 and card 3 (not used).
- **Site corrections (quoted from site lesson 6, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 1 equation "$F = \frac{kq_1 q_2}{r^2}$" and both dot-point lines: "Dot point: Analyse the factors that affect the force between 2 charged particles using the electrostatic force law and F = kq₁q₂/r² (Coulomb's law)". The 2025 syllabus writes "F = (1/4πε₀) q₁q₂/r²" and has no "(Coulomb's law)" in the point, so the dot point is misquoted (same issue as lesson 4, correction 1 in `phys-y11-fa3-v04.md`). Suggest quoting the dot point exactly and adding "k = 1/4πε₀ = 8.99 × 10⁹ N m² C⁻²".
  2. Intro: "In 1785 Charles-Augustin de Coulomb measured exactly how two charges push or pull on each other". His torsion-balance measurements were rough (a few per cent, and his attraction data needed a different method); the inverse square law was confirmed precisely by later experiments. Suggest: "In 1785 Charles-Augustin de Coulomb measured how the push between two charges changes with distance".
  3. Match the pairs: the right-hand options are "Force ×4", "Force ×2", "Force ×4", "Force ×¼", so two options are identical. "Double both charges" and "Halve the separation" both need ×4; if the widget grades by option position, a correct pairing can be marked wrong. Suggest making the targets distinct, for example replacing "Halve the separation" with "Triple the separation" (Force × ⅑).
  - Checked and correct: `we-1` (0.43 N, attractive); quick check (C, F/9); activity 1 (× 2, × 4, × 4, × 1); odd one out (C); Q1 (2.2 N, repulsive); Q2 (0.080 N); Q3 model answer; misconceptions; the equal and opposite pair.
- **Cause chain taught, in order:** (1) three times closer: three times? (1); (2) q₁'s field at q₂ times q₂ gives the law (2); (3) Coulomb's measurement found the 1/r² (3); (4) q₁ sets the field and q₂ the coulombs feeling it, so the force goes as q₁q₂ (4); (5) the field spreads as 1/r², so the force does; a third of the distance, nine times the force (5); (6) computing from either end gives the same product, so the forces are equal and opposite (6); (7) the signs set attraction or repulsion (7); (8) a force value (8); (9) factors multiply and k cancels (9, 10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v03 (like charges' lines bend away, unlike charges' lines join), v04 (E = (1/4πε₀) q/r² = kq/r²; the inverse square from spreading lines), v05 (F = qE; sizes and signs); FA1 (Newton's third law: forces come in equal and opposite pairs), each recalled in a phrase; Stage 5 Mathematics (scientific notation, squares).
- **Learner-visible vocabulary (plain meaning at first use):** electrostatic force (the push or pull between charges that aren't moving, 2); Coulomb's law (the same law, named after the scientist who measured it, 2); torsion balance (a balance that measures a tiny force by how far it twists a thin wire, 3); separation, r (the distance between the two charges' centres, 1, 2); attractive and repulsive (pulling together, pushing apart, 7).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v03's **`FieldLines`** (like and unlike pairs, 7; one source's lines, 2, 4); **`AlignedAlgebra`** (the substitution of one row into another, 2; the factor products, 10); **twist overlay** (a coded angle wedge at the torsion head and a rotation of the hanging rod layer on the painted balance; a growing readout bar as the second ball approaches); **`ForceFactorBar`** (new: an amber bar with q₁, q₂ and r dials and a multiplier label); v04's **`LineSphereCount`** thumbnail (lines at r and r/3, 5); **both-ends board** (two stacked rows computing each force from the other charge's field, merging to one product, 6); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v05 (positive red "+", negative navy "−", signs always printed); field lines teal; forces amber with a dark ink outline; the factor bar amber; the torsion balance plate in brass, glass and dark wood (no red or navy; its two balls pale gilt); crossed items grey scribble.
- **Board layout (constant):** heading top-left; the pair (or the balance) in the left 60 per cent; the equation, givens and working in the right column.
- **No human figures.** Coulomb is named in narration only; no portrait. The balance's head turns by code.
- **Author notes (not learner copy):**
  (a) "In air": as v04 note a (relative permittivity 1.0006; vacuum k used).
  (b) The substitution in 2 is exact for point charges (or uniformly charged spheres, centre to centre); the narration says "two point charges" and A1's card says "Treat them as point charges".
  (c) Torsion balance (1785): a silk or silver wire held a light horizontal needle with a pith ball at one end; a second fixed ball charged them alike; the needle's twist angle measured the repulsion. Coulomb reported angles of 36°, 18° and 8.5° at roughly halving separations (consistent with 1/r² within his errors). Not said; "the bigger the force, the bigger the twist" is the only claim.
  (d) Newton's third law holds here for charges at rest (electrostatics). For moving charges the electric and magnetic forces need not pair instantly; not said.
  (e) `we-1`: kq₁q₂ = 8.99 × 10⁹ × 4.0 × 10⁻⁶ × 3.0 × 10⁻⁶ = 0.10788 N m²; r² = 0.25 m²; F = 0.4315 N, written 0.43 N.
  (f) Gravity comparison (site card 3, Q3, memory hook): not taught; Newton's law of gravitation (F = GMm/r²) is not in this course before Year 12 (open decision 2).
  (g) Pronunciations: "Charles-Augustin de Coulomb" (sharl oh-goo-STAN duh KOO-lom); "seventeen eighty-five"; "q one, q two"; "point oh two two five".

Main question: *Bring two charges three times closer together. What sets the force between two charges, and why does moving them three times closer make it nine times stronger?*
Entry knowledge (v03 pair pictures; v04 the field of a point charge; v05 F = qE; FA1 Newton's third law).
Stops after: the law built and stated in syllabus form; Coulomb's measurement; the charges, separation and signs as factors; equal and opposite forces; a force calculation; factor analysis with k cancelling. No three-charge problems, no gravity.
Handoff: v07, the field between charged parallel plates.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v05.

### 1. hook (three times closer, three times stronger?)
> Last time, we put a second charge in the field of the first. Here's that pair again. Charge q one makes a field, and charge q two sits in it, a distance r away. So what sets the force between them? Here's a test. Bring them three times closer together. Does the force get three times stronger, or **more**?

Visual: opens on v05's last frame (see "Opening frame"). The "Next" chip becomes the heading: "The force between two charges"; the memory line fades; the two rows and "so F = ?" stay at q₂. On "three times closer" q₂ slides in to a third of the distance (dimension line "r ÷ 3"); its amber arrow appears as a dashed "?". On "more" chips "three times?" and "nine times?" and a 3-second countdown ring.

### 2. building the law
> We can build the answer from the last two videos. At q two, the field from q one is k q one over r squared. And the force on q two is q two times that field. Put them together, and the force is k q one q two, over r squared. In the syllabus form, that's one over four pi epsilon nought, times q one q two, over r squared. It's called the electrostatic force law, the force between charges that aren't moving. You'll also hear it called Coulomb's **law**.

Visual: camera continue; q₂ returns to r. `AlignedAlgebra` at the right: the row "E at q₂ = kq₁/r²" lifts and slides into the E of "F on q₂ = q₂E"; on "Put them together" the result writes "F = kq₁q₂/r²", boxed. On "syllabus form" a second box "F = (1/4πε₀) × q₁q₂/r²" (tag "syllabus form; 1/4πε₀ = k = 8.99 × 10⁹ N m² C⁻²"). On "electrostatic force law" the label "electrostatic force law" (gloss "the force between charges at rest"); on "Coulomb's law" the label "Coulomb's law". The "so F = ?" chip fades.

### 3. how Coulomb measured it
> It's named after Charles-Augustin de Coulomb, who measured it in seventeen eighty-five, with a torsion balance. A light rod hangs from a thin wire, with a small charged ball on one end. A second charged ball pushes it away, and the wire twists. The bigger the force, the bigger the twist. By measuring the twist at different distances, Coulomb found that the force falls as one over r **squared**.

Visual: board change: the torsion balance plate (`phys-y11-torsion-balance-v1.png`) centre left (tag "Coulomb's torsion balance, 1785"; no figure). On "A light rod hangs" a coded highlight traces the wire and the hanging rod (sidecar points); on "small charged ball" a red "+" on the hanging ball. On "A second charged ball" a red "+" on the fixed ball; the hanging rod layer rotates a little away from it; on "the wire twists" a coded twist wedge at the torsion head (gloss "torsion balance: measures a tiny force by how much it twists a wire"). On "different distances" the fixed ball's gap shrinks in two steps and the twist readout bar grows sharply. On "squared" chip "F ∝ 1/r²: measured".

### 4. factor one: the charges
> So what are the factors? First, the charges. Double q one, and its field at q two is twice as strong, so the force doubles. Double q two instead, and twice as many coulombs feel the same field, so the force doubles too. Double both, and the force is four times bigger. That's why the two charges are multiplied **together**.

Visual: board change back to the pair; `ForceFactorBar` beside it with dials "q₁", "q₂", "r". On "Double q one" q₁ grows to "2q₁", its teal lines double (24, as v03), and the bar doubles ("× 2"). Reset. On "Double q two" q₂ grows to "2q₂", coulomb tiles under it double (v05), and the bar doubles ("× 2"). On "Double both" both grow; the bar reaches "× 4". On "together" the "q₁q₂" in the boxed law pulses (chip "F ∝ q₁q₂").

### 5. factor two: the distance
> Second, the distance. q one's field at q two falls as one over r squared, so the force does too. Move them twice as far apart, and the force drops to a quarter. Now our test: three times closer. r becomes a third, so r squared becomes a ninth. And dividing by a ninth makes the force nine times **stronger**.

Visual: the r dial turns. On "falls as one over r squared" v04's `LineSphereCount` thumbnail appears small (lines at r and 2r, tag "last video"). On "twice as far apart" q₂ slides to 2r; the bar shrinks to "× ¼"; a chip "twice as far: half the force" takes a grey scribble cross. On "three times closer" q₂ slides to r ÷ 3; rows "r → r/3", "r² → r²/9"; on "stronger" the bar grows to "× 9" and runs off its scale (scale break); the scene 1 chip "nine times?" glows and "three times?" takes a grey scribble cross.

### 6. equal and opposite
> Here's a question that trips people up. If q one is much bigger than q two, which one feels the bigger force? Work it out from both ends. The force on q two is q two times q one's field. The force on q one is q one times q two's field. Both come out as k q one q two, over r squared. So the two forces are always the same size, and opposite in direction. It's Newton's third law: a matching **pair**.

Visual: board change: a large red "+3" (q₁) and a small red "+1" (q₂). Both-ends board at the right: on "The force on q two" row "F on q₂ = q₂ × kq₁/r²"; on "The force on q one" row "F on q₁ = q₁ × kq₂/r²"; on "Both come out" the two rows merge into "kq₁q₂/r²" with "=" between them. On "same size" equal amber arrows on both charges, pointing away from each other. On "pair" chip "Newton's third law: equal and opposite" (tag "from the forces videos"), and a chip "the bigger charge feels the bigger force" takes a grey scribble cross.

### 7. attraction or repulsion
> And which way do the forces point? Like charges repel, and unlike charges attract, just as the field pictures showed. So use the sizes of the charges in the equation to find the size of the force. Then use their signs to say whether it's attraction, or **repulsion**.

Visual: v03's `FieldLines` for a like pair (lines bend away; amber arrows outward, chip "like: repel") and an unlike pair (lines join; amber arrows inward, chip "unlike: attract") side by side, small. Right column rule: "size: use |q₁| and |q₂|"; on "repulsion" "nature: from the signs", boxed.

### 8. worked example: the force between two charges
> Let's try one. Task: two point charges, plus four point oh times ten to the minus six coulombs and minus three point oh times ten to the minus six coulombs, are point five oh metres apart in air. Find the size of the force between them, and say whether it attracts or repels. The givens: q one is four point oh times ten to the minus six coulombs, q two is three point oh times ten to the minus six, r is point five oh metres, and k is eight point nine nine times ten to the nine. On top, k times the two charges is about point one oh eight. r squared is point two five. So F is point four three newtons. The signs are opposite, so the force is **attractive**.

Visual: clear change to the calculation layout; a red "+" and a navy "−" at the left with a dimension line "0.50 m". Task strip: "Find the size of the force, and whether it attracts or repels" (grey tag "site worked example"). Equation strip: "F = kq₁q₂/r²". Givens group: "q₁ = 4.0 × 10⁻⁶ C (+)"; "q₂ = 3.0 × 10⁻⁶ C (−)"; "r = 0.50 m"; "k = 8.99 × 10⁹ N m² C⁻²". Rows, one per cue: "kq₁q₂ = 8.99 × 10⁹ × 4.0 × 10⁻⁶ × 3.0 × 10⁻⁶ ≈ 0.108"; "r² = 0.25 m²"; "F = 0.108 ÷ 0.25 = 0.43 N"; on "attractive" "opposite signs: attractive", boxed, and equal amber arrows on the two charges pointing towards each other.

### 9. prediction: change two factors
> Now, a quick analysis, with no k needed. Two charges feel a force F. Double both charges, and double the distance between them as well. What's the new **force**?

Visual: board change back to the pair with `ForceFactorBar` at "F". On "Double both charges" the q₁ and q₂ dials tick to "× 2" (no bar change yet); on "double the distance" the r dial ticks to "× 2". On "force" chips "the same?" and "twice as big?" and a 3-second countdown ring.

### 10. working in factors
> Take the factors one at a time. Doubling one charge gives two times the force. Doubling the other gives two times again: four. Doubling the distance divides by two squared, which is four. Four divided by four is one. So the force is exactly the same as before. Working in factors like this means k cancels, so you never need its **value**.

Visual: `AlignedAlgebra` rows, one per cue: "q₁ × 2: × 2"; "q₂ × 2: × 2 → × 4"; "r × 2: ÷ 2² = ÷ 4"; "× 4 ÷ 4 = × 1". The bar grows to × 4 and falls back to × 1 in step. On "the same as before" chip "the same?" glows and "twice as big?" takes a grey scribble cross. On "value" a grey row "F_new / F_old = (2 × 2) / 2² = 1: k cancels".

### 11. memory aid
> To remember it: the charges multiply, and the distance gets squared. Like charges push, and unlike charges **pull**.

Visual: the handwritten line writes large: "Charges multiply, distance squares. Like pushes, unlike pulls." On "multiply" the "q₁q₂" in a small law pulses; on "squared" the "r²"; on "push" two red "+" with outward arrows; on "pull" a red "+" and a navy "−" with inward arrows. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Two small charged spheres carry plus three point oh times ten to the minus eight coulombs, and plus five point oh times ten to the minus eight coulombs. Their centres are point one five metres apart, in air. Calculate the size of the electrostatic force between them. Then state whether it's attractive or repulsive, with a reason. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "Two small charged spheres carry charges of +3.0 × 10⁻⁸ C and +5.0 × 10⁻⁸ C. Their centres are 0.15 m apart in air. Treat them as point charges. (a) Calculate the magnitude of the electrostatic force between them. (b) State whether the force is attractive or repulsive, and give a reason. (3 marks)" Below: "k = 8.99 × 10⁹ N m² C⁻²". Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> On top, k times the two charges is one point three five times ten to the minus five. r squared is point oh two two five. So F is six point oh times ten to the minus four **newtons**. Both charges are positive, so they're like charges, and the force is **repulsive**. Dividing by r instead of r squared gives nine point oh times ten to the minus five. Don't forget the **square**.

Visual: card shrinks to the top; "+3.0 × 10⁻⁸ C", "+5.0 × 10⁻⁸ C" and "0.15 m" underlined. Rows: "kq₁q₂ = 8.99 × 10⁹ × 3.0 × 10⁻⁸ × 5.0 × 10⁻⁸ = 1.35 × 10⁻⁵"; "r² = (0.15)² = 0.0225 m²"; on "newtons" "(a) F = 1.35 × 10⁻⁵ ÷ 0.0225 = 6.0 × 10⁻⁴ N", boxed; on "repulsive" "(b) both positive: like charges repel", boxed, with outward amber arrows on two small red "+". On "square" a chip "9.0 × 10⁻⁵ N (divided by r)" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Two small charged spheres, A and B, attract each other with a force of point two oh newtons. The charge on A is twice the charge on B. Compare the size of the force on A with the size of the force on B. Then the charge on B is tripled, and the distance between the spheres is halved. Calculate the new force. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "Two small charged spheres, A and B, attract each other with a force of 0.20 N. The charge on A is twice the charge on B. (a) Compare the magnitude of the force on A with the magnitude of the force on B. (b) The charge on B is then tripled and the distance between the spheres is halved. Calculate the new force between them. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The forces are equal in size. A's bigger charge doesn't change that, because both forces come from the same product, q A times q **B**. Tripling B's charge triples the force. Halving the distance divides r squared by four, so the force is four times bigger again. Three times four is twelve, so the new force is two point four newtons, still **attractive**. Saying A feels twice the force forgets the third **law**.

Visual: card shrinks to the top; "twice the charge", "tripled" and "halved" underlined. On "B" "(a) equal: both = kq_Aq_B/r²", boxed, with equal amber arrows on A and B pointing towards each other. Rows: "q_B × 3: × 3"; "r ÷ 2: r² ÷ 4, so × 4"; on "attractive" "(b) 0.20 × 3 × 4 = 2.4 N, attractive", boxed. On "law" a chip "(a) A feels twice the force" fades in and takes a grey scribble cross. Hold about 1 second.

### 16. handoff
> So the force between two charges grows with each charge, and falls with the distance squared. But what if the charge is spread out, across two flat metal plates, one positive and one negative? What's the field like in the gap between **them**?

Visual: board change: the memory line small at the top. The point pair fades; a row of red "+" charges spreads into a long horizontal plate at the top and a row of navy "−" into a plate at the bottom (coded, edge-on, labels "+" and "−"); the gap between them is a pale teal "?" region. On "the field like" a red "+" probe appears at two places in the gap, near the middle and near one end, each with a dashed "?" amber arrow. Chips write: "the same everywhere?" and "what sets its strength?". On "them" the chip "Next: What makes the field between two charged plates the same everywhere, and what sets its strength?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Electrostatic force law (Coulomb's law): F = (1/4πε₀) q₁q₂/r² = kq₁q₂/r², with k = 8.99 × 10⁹ N m² C⁻² and r the distance between the charges' centres, in metres.
2. It comes from F = q₂E with E = kq₁/r²: q₁ sets the field, q₂ sets how many coulombs feel it.
3. Factors: F ∝ q₁, F ∝ q₂, F ∝ 1/r². Twice as far: ¼. A third of the distance: × 9.
4. Use the sizes of the charges for the size of F; like charges repel, unlike charges attract. The two charges always feel equal and opposite forces (Newton's third law).
5. For "what is the new force?" questions, multiply the factors; k cancels.

Memory aid (large, on the notes screen): *Charges multiply, distance squares. Like pushes, unlike pulls.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the force depends on q₁: q₁ sets the field at q₂ (4). Why it depends on q₂: q₂ sets how many coulombs feel that field (4). Why the charges multiply: each doubles the force on its own (4). Why the inverse square: the field from q₁ spreads as 1/r² (5). Why three times closer gives nine times: r² becomes a ninth (5). Why the forces are equal even for unequal charges: from either end the product is the same (6). Why we use sizes: the signs only set the nature (7). Why k cancels in factor questions: it is the same before and after (10). How we know: Coulomb's twisting wire (3).
- **Misconceptions addressed:** twice as far, half (5; site misconception 2); the bigger charge feels more (6, feedback 2 crossed; site misconception 1); a negative force means attraction (7, by using sizes); forgetting to square r (feedback 1 crossed).
- **One idea at a time:** the law (2), the evidence (3), charges (4), distance (5), the pair (6), direction (7), a calculation (8), factor method (9, 10).
- **Video makes it easier:** the student sees v04's row slide into v05's to make the law (2), a wire twist more as a ball approaches (3), a force bar double on each charge dial and jump to × 9 (4, 5), two different routes give one product (6) and the factor bar climb and fall back to × 1 (10).
- **Response opportunity:** two 3 s predictions (1, 9); two unseen HSC-style tasks, 10 seconds each, every condition on the card (both signs; centres 0.15 m apart; "treat as point charges"; k given; "twice the charge"; "tripled"; "halved"), nothing answer-bearing. One crossed mistake each; feedback about 26 s and 31 s.
- **Avoided double teaching:** v04's field and inverse square recalled in a phrase with a thumbnail (2, 5); v05's F = qE and coulomb tiles in a phrase (2, 4); v03's pair pictures reused small (7); FA1's third law named (6).
- **Syllabus coverage:** `cia29563ca`: the electrostatic force law in syllabus form (2), and the factors that affect the force analysed (charges 4, distance 5, signs 7, the pair 6), used in a calculation (8, A1) and a factor analysis (9, 10, A2).
- **Out of scope by design:** three or more charges; charges off a line; gravitation (open decision 2); plates and E = V/d (v07).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Two small charged spheres carry charges of +3.0 × 10⁻⁸ C and +5.0 × 10⁻⁸ C. Their centres are 0.15 m apart in air. Treat them as point charges. (a) Calculate the magnitude of the electrostatic force between them. (b) State whether the force is attractive or repulsive, and give a reason." (k = 8.99 × 10⁹ N m² C⁻² given.)
Model answer: (a) F = kq₁q₂/r² = (8.99 × 10⁹)(3.0 × 10⁻⁸)(5.0 × 10⁻⁸) ÷ (0.15)² = 1.35 × 10⁻⁵ ÷ 0.0225 = 6.0 × 10⁻⁴ N. (b) Repulsive: both charges are positive, and like charges repel. Classic mistake (crossed): "9.0 × 10⁻⁵ N (divided by r)".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** "Two small charged spheres, A and B, attract each other with a force of 0.20 N. The charge on A is twice the charge on B. (a) Compare the magnitude of the force on A with the magnitude of the force on B. (b) The charge on B is then tripled and the distance between the spheres is halved. Calculate the new force between them."
Model answer: (a) The magnitudes are equal. The force on each sphere is kq_Aq_B/r², the same product, so A and B feel equal and opposite forces (Newton's third law), even though A's charge is larger. (b) F ∝ q_Aq_B/r². Tripling q_B multiplies F by 3; halving r divides r² by 4, multiplying F by 4. New F = 0.20 × 3 × 4 = 2.4 N, still attractive (the signs are unchanged). Classic mistake (crossed): "(a) A feels twice the force".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| k = 1/4πε₀ | 8.99 × 10⁹ N m² C⁻² | 2, 8, 12, 13, notes |
| Lines per unit charge | 12 (24 for 2q₁) | 4, 7 |
| Factor bar | × 2, × 4, × ¼, × 9, × 1 | 4, 5, 9, 10 |
| Both-ends charges | +3 and +1 units | 6 |
| `we-1` (site) | +4.0 × 10⁻⁶ C and −3.0 × 10⁻⁶ C; 0.50 m; kq₁q₂ ≈ 0.108; r² = 0.25 m²; F = 0.43 N attractive | 8 |
| A1 | +3.0 × 10⁻⁸ C, +5.0 × 10⁻⁸ C; 0.15 m; kq₁q₂ = 1.35 × 10⁻⁵; r² = 0.0225 m²; F = 6.0 × 10⁻⁴ N repulsive; crossed 9.0 × 10⁻⁵ N | 12, 13 |
| A2 | 0.20 N; q_A = 2q_B; × 3 and × 4; 2.4 N attractive | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 8.99 × 10⁹ × 4.0 × 10⁻⁶ × 3.0 × 10⁻⁶ = 0.10788; ÷ 0.25 = 0.4315 → 0.43 N.
- 8.99 × 10⁹ × 3.0 × 10⁻⁸ × 5.0 × 10⁻⁸ = 1.3485 × 10⁻⁵; ÷ 0.0225 = 5.99 × 10⁻⁴ → 6.0 × 10⁻⁴ N; ÷ 0.15 = 8.99 × 10⁻⁵ → 9.0 × 10⁻⁵ N.
- (r/3)² = r²/9, so F × 9; (2r)² = 4r², so F ÷ 4; (2 × 2)/2² = 1.
- 0.20 × 3 × 4 = 2.4 N.

## Memory aid check

- **"Charges multiply, distance squares. Like pushes, unlike pulls."** Meaning, as said in scene 11: the force is proportional to the product of the two charges and inversely proportional to the square of their separation ("distance squares" stands for the r² below the line, said in 5 and 10 as "divides by r squared"); like charges repel and unlike attract. Assumptions checked: point charges (or spheres measured centre to centre), at rest, in a vacuum or air; "distance squares" does not mean the force grows with distance, which scenes 5 and 10 rule out by showing the bar falling; introduced after the factors (4, 5) and the direction rule (7).
- **Site hook (lesson 6) considered, not used.** "Coulomb is Newton's gravity with a plus and a minus" relies on Newton's law of gravitation, which students meet in Year 12 (open decision 2). It would be a memory aid for a law they do not yet know.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,476 characters** (5,492 joined), 17 scenes. Characters per scene (1 to 17): 302, 450, 393, 320, 304, 396, 263, 656, 157, 335, 112, 364, 367, 340, 403, 239, 75. At 13.3 characters per second the speech is about 412 s; add about 18 s of holds and settling (the slide to r ÷ 3 in 1, the row substitution in 2, the twist in 3, the factor bar in 4, 5 and 10, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 512 s**, inside the owner's 5 to 10 minute target. 24 characters under the 5,500 floor; the point is fully taught, so it is not padded (FA1 root decision 12 precedent).

## Scene list and build ids

Lesson key `p-y11-fa3-v06` (route phys-y11-fa3-v06). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v06` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v06` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, build-law, torsion-balance, factor-charges, factor-distance, equal-opposite, attract-repel, worked-example, prediction, factor-method, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v05's last frame continues into scene 1 (camera continue: the pair and its rows carry over); 1 to 2 camera continue; 2 to 3 board change to the balance; 3 to 4 board change back to the pair; 4 to 5 camera continue (the r dial); 5 to 6 board change; 6 to 7 camera continue; 7 to 8 clear change to the calculation layout; 8 to 9 board change back to the pair; 9 to 10 camera continue; 10 to 11 fade; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v06-learning-review.md`, `science_check` = `checks/p-y11-fa3-v06-physics-check.md`.

## Assets

Reused: none painted. Coded parts reused from v03 (`FieldLines`), v04 (`LineSphereCount` thumbnail) and v05 (coulomb tiles, the handoff pair and rows).

New (requested below): `phys-y11-torsion-balance-v1.png` with sidecar `phys-y11-torsion-balance-v1.json` (3).

Checked first (3 Nov): `public/assets/physics/` has no torsion balance or electrostatics plates (v01 to v03 requests not yet delivered); FA1's retort stand and force scales are not suitable.

Coded: charges, field lines, force arrows, the twist wedge and readout, the factor bar and dials, the plates in the handoff, working.

Kit gaps (for the next physics kit brief): `ForceFactorBar`, twist overlay, both-ends board, the edge-on charged-plate handoff (v07 will need plates as a kit part); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v06, torsion balance)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-torsion-balance-v1.png` plus `phys-y11-torsion-balance-v1.json`: an eighteenth-century style electrostatic torsion balance, side view, slightly from above: a wide clear glass cylinder on a dark wooden base, with a brass-rimmed glass lid; a tall narrow glass tube rising from the centre of the lid, topped by a brass torsion head with a plain graduated ring (fine tick marks, no numerals); a fine wire hanging down the tube into the cylinder, holding a thin horizontal straw-coloured needle with a small pale gilt ball at one end and a small paper vane counterweight at the other; a second small pale gilt ball on a vertical insulating rod passing down through the lid, beside the needle's ball, slightly apart; a plain graduated band (tick marks only) round the cylinder at the needle's height. About 1600 px tall. Paint the hanging needle and its ball as a separate layer file `phys-y11-torsion-balance-needle-v1.png` at the same canvas size, so code can rotate it about the wire. Sidecar JSON: the wire's top and bottom points, the needle's pivot, the hanging ball's centre and radius, the fixed ball's centre and radius, and the torsion head's centre (in plate pixels).

Acceptance: true transparency, no halo; no numerals or text anywhere; the needle layer registers exactly with the body when unrotated; nothing red or navy (the balls carry coded charge signs).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: F = q₂E with E = kq₁/r² gives F = kq₁q₂/r²; the syllabus form F = (1/4πε₀) q₁q₂/r²; k = 8.99 × 10⁹ N m² C⁻²; F ∝ q₁, F ∝ q₂, F ∝ 1/r²; a third of the distance gives nine times the force; twice the distance a quarter; the two charges feel equal and opposite forces regardless of their sizes (Newton's third law, at rest); like charges repel and unlike attract; sizes in the equation, signs for the nature; k cancels in factor comparisons; Coulomb's 1785 torsion balance measured the force by the twist of a wire and found the inverse square.
3. Confirm no gravitation formula and no three-charge or vector-sum problem appears.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly (with the fraction typeset inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v05.md` scene 15.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Coulomb's Law: The Force Between Two Charges | Year 11 Physics

(Title length: 61 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson06.sa.html

Bring two charges three times closer and the force between them gets nine times stronger. Why? Build Coulomb's law from the field of one charge and the force on the other, see how Coulomb measured it with a twisting wire in 1785, and analyse each factor: the two charges, the distance and the signs. Find out why a big charge and a small one always feel equal forces, then calculate a force and use factors to predict new ones without ever needing k. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse the factors that affect the force between 2 charged particles using the electrostatic force law and F = (1/4πε₀) q₁q₂/r²" (cia29563ca)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: The force on a charge in an electric field (previous video). Next: The electric field between parallel plates.

#Year11Physics #Physics #CoulombsLaw #HSCScience

## Open decisions

- **1. v07's question (proposal).** The handoff chip uses "What makes the field between two charged plates the same everywhere, and what sets its strength?" for phys-y11-fa3-v07 (route placeholder "How can I explain and apply the field between parallel plates?"). It covers both v07 points (`ci6c3ec771` field-line diagrams between plates; `ci347cedf7` E = V/d factors). Root to enter it in the route, or align this chip to v07's designer's question.
- **2. The gravity comparison.** Site card 3, Q3 and the lesson 6 memory hook compare Coulomb's law with Newton's law of gravitation, which is not taught before Year 12 in this course. Not taught here; root may add a grey end tag "the same shape returns for gravity in Year 12" (screen only), or leave it to the Year 12 gravitation video.
- **3. Torsion balance scene.** Kept short (one scene, about 27 s) as evidence for the law and the one painted apparatus in the video. If the review finds it a detour, it is the first cut (393 characters; the video would fall to about 5,083 characters and 482 s, which root would then accept as fully taught).
- **4. Route refinement (root to record).** Question as above; start "Begin at v05's pair with E = kq₁/r² and F = q₂E; recall the inverse square"; stop "Stop at the force between two point charges on a line: the law, its factors, equal and opposite forces, calculation and factor analysis; hand charged plates to v07".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v05 at Year 11 entry; check that building the law from v04 and v05 makes each factor feel caused; that the torsion balance reads as evidence, not history for its own sake; that "both ends" settles equal forces; that sizes-then-signs prevents negative-force confusion; that the factor method is clear before A2; that the attempts give nothing away), then the Codex physics check and error check.
- The substitution of one row into another (2), the wire twisting more as the ball approaches (3), the factor bar jumping to × 9 (5), the two routes merging into one product (6) and the bar falling back to × 1 (10) carry the explanation; judge them at playback speed in the voiced preview.
