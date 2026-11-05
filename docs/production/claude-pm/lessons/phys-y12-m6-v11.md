# Year 12 Physics M6 V11: Lenz's law. Why does the induced current oppose the flux change? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,699 characters, 14 scenes, about 516 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v10's final frame.

Scope: eleventh video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry questions "How are electric and magnetic fields related?" and "How has knowledge about the Motor Effect been applied to technological advances?". Templates as `phys-y12-m6-v07.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson14.sa.txt`, hash checked against the live file): orient and retrieve (approaching-pole prediction, warm-up, intentions, vocabulary, cross-lesson links), state Lenz's law (observation, ε = −NΔΦ/Δt, four-step method, Stop and Check, MC), explain energy conservation (the "aided" thought experiment, HSC tip, true/false), observe induction direction (interactive), apply the direction algorithm (worked example a to c, MC, the five-step algorithm), apply and consolidate (Activities 1 and 2, summary, eddy-current preview, MC, "Analyse 6 marks", "Explain 5 marks"), practice (Q1, Q2 and model answers), review and revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson14.sa.html`, SHA256 `edfc47dd200faeecad912f07c47ee8929d458308c8929c9586d79fcacb7fa353` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v11`, sections `state-lenz-law`, `explain-energy-conservation`, `observe-induction-direction`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use Lenz law to determine direction for entering/leaving magnets, relating mechanical work to electrical energy. Stop before machine construction." Next: "phys-y12-m6-v12: How can one coil induce an emf in another without touching it?"

Owner rules applied: as v07 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: the magnet is moved by a coded amber motion arrow, the "push" needed is an amber force arrow on the magnet, the grip rule is a coded curled arrow round an axis; the magnet, coil and galvanometer are painted plates (the galvanometer from v10's brief); field lines, induced field, current arrows, poles and energy bars are coded; every number recalculated where any appears; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v10 (changing flux induces an emf; ε = −NΔΦ/Δt; the minus sign deferred to here), Year 11 (a current-carrying coil is an electromagnet; the grip rule for a coil; like poles repel; conservation of energy).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger ids `P6-IQ3-02`, `P6-IQ4-03`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-02`: "analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε= -N(ΔΦ)/(Δt), including but not limited to: (ACSPH081, ACSPH110)" "the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids", "the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"
- `P6-IQ4-03`: "relate Lenz’s Law to the law of conservation of energy and apply the law of conservation of energy to:" "DC motors and", "magnetic braking"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v10's final frame (north pole approaching the coil, two possible current directions with "?"). Teaches: the two possible directions as "coil attracts" or "coil repels"; the thought experiment (attraction would make the magnet speed itself up while heating the coil: energy from nothing); so the coil repels, and the work done pushing against it becomes the electrical energy, then heat in the resistance; Lenz's law stated; the minus sign in Faraday's law; the four-step direction method with the grip rule (north pole approaching: anticlockwise seen from the magnet, near face north); stationary (no current, no force); receding (clockwise seen from the magnet, near face south, attracts); relative motion; evidence (open circuit: no push back; closed: harder to push; a dropped magnet falls slightly more slowly through a closed coil). Stops before DC motors and back emf (v17), eddy currents and magnetic braking in plates (v20), two coils (v12) and machine construction.

## Decisions

- **Learner question (route wording kept).** "Why does the induced current oppose the flux change?" is causal. The answer, built in order: a current that helped the change would make the magnet speed itself up while the coil heats, creating energy from nothing (2); so the current must oppose, and the work done against that opposition supplies the electrical energy (3); Lenz's law states the result (4).
- **Hook (v10's handoff and the site's "Before you read, predict").** The two possible current directions are reframed as the two possible poles at the coil's near end (south, attracting; north, repelling), so the choice becomes a physical one students can reason about. 3 s prediction with chips "pull it in" and "push it back".
- **Energy argument first, then the rule (site section 2, "Explain 5 marks" and "Analyse 6 marks" step 5).** The proof by contradiction comes before the statement of Lenz's law, so the law arrives as a conclusion. "Both energy stores grow from nothing" (the "Explain 5 marks" top-band point) is in the narration. Energy bars (coded) show work in, electrical energy, heat out.
- **Direction method (site four steps and its five-step algorithm, shortened).** Four steps on screen: (1) external field direction through the coil; (2) flux increasing or decreasing; (3) induced field opposes the change; (4) grip rule for the current, with the viewing side stated. The pole check ("near end north, like poles repel") follows, as the "Analyse 6 marks" answer recommends ("doing the poles before the current direction is the reliable order"; both orders are shown to agree).
- **Geometry (site worked example, re-staged with the v10 bench).** Magnet on the left, north pole facing the coil, moving right; field through the coil to the right; induced field to the left; current anticlockwise as seen from the magnet's side, so on the near side of each turn (facing the viewer, front view) the current flows up the screen (author note a). The receding case reverses all of these. An end-on inset "seen from the magnet" carries the clockwise or anticlockwise label, because the front view alone cannot.
- **Evidence and energy (syllabus "evidence for Lenz's Law"; `P6-IQ4-03`).** Open circuit: an emf but no current, so no opposing field and no push back; closed circuit: a larger pushing force is needed. Dropped magnet: falls slightly more slowly through a closed coil than an open one; some energy that would have become kinetic energy becomes heat. Magnetic braking with metal plates and tubes, and DC motors, are named as later videos only (v17, v20), keeping the route stop "before machine construction".
- **Memory aid (scene 8, new): "Coming in, it pushes back. Going away, it pulls back."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: the south pole of a magnet pulled away from a loop: current anticlockwise as seen from the magnet's side; the loop attracts the magnet. A2: explain with conservation of energy why the induced current cannot make a coil attract an approaching magnet. Crossed: A1 "the loop repels the magnet"; A2 "because a coil always repels a magnet".
- **No numbers.** This video is qualitative by route and site; no calculation is added. The site's Q1 (north pole dropped towards a horizontal loop: anticlockwise from above) informs A1's style.
- **Handoff (route next).** Scene 13 replaces the magnet with a second coil connected to a supply and switch (switch open), the first coil still on the galvanometer, a gap between them, "?" (v12: "How can one coil induce an emf in another without touching it?"). See "Final frame".
- **Colour key:** as v10: external field slate; induced field, induced current and the coil's induced poles rose; motion arrows amber outline; forces amber; energy bars: work amber, electrical orange, heat red.
- **Site sources used:** opening paragraph ("you feel resistance, the coil is pushing back", 1, 3); predict box (1); vocabulary "Lenz's Law", "Induced magnetic field", "Conservation of energy", "Right-hand grip rule" (4, 5); four-step method (5); energy argument and HSC tip (2, 3); worked example (a), (b), (c) (5, 6); summary "flux increasing ... repulsive, flux decreasing ... attractive" (6, 8); falling-coil Activity 2 idea (7, as a dropped magnet); "Analyse 6 marks" (5, 3); "Explain 5 marks" (2); Q1 (A1 style); Q2 (A2); eddy-current preview (7, one sentence). Not used: the interactive, the MC drills, Activity 1 (south pole approaching: A1 uses a different case), detailed eddy currents (v20).
- **Site notes (quoted from site lesson 14, read 6 Nov):** none to log. Checked and correct: worked example (a) anticlockwise viewed from the left, (b) zero, (c) clockwise; MC south pole approaching from the left (clockwise viewed from the left); Q1 (anticlockwise viewed from above); Stop and Check (north pole pulled away, viewed from the magnet's side: clockwise; no answer printed); Activity 2 (upward force entering and leaving); "Analyse 6 marks" (anticlockwise from the magnet's side, north face).
- **Cause chain taught, in order:** (1) the induced current must make the coil's near end either attract or repel the approaching magnet (1); (2) attraction would speed the magnet up by itself while heating the coil, energy from nothing, which cannot happen (2); (3) so the coil repels, and the work done pushing the magnet against that repulsion becomes electrical energy and then heat (3); (4) in general the induced current's field opposes the change in flux: Lenz's law, the minus sign in Faraday's law (4); (5) the four steps turn that into a current direction (5); (6) with no change there is no current and no force; for a receding magnet the opposing field props up the falling flux, so the coil attracts (6); (7) with no current there is no opposition and no energy transfer; with current, extra work is needed (7).
- **Entry knowledge (route `entryKnowledge`):** v10's Faraday's law and emf versus current; Year 11: a coil carrying current is an electromagnet with north and south ends, the grip rule for a coil, like poles repel, field lines leave a north pole; conservation of energy; work done by a force.
- **Learner-visible vocabulary (plain meaning at first use):** induced field (the magnetic field made by the induced current, 4); Lenz's law (the induced current's field opposes the change in flux that caused it, 4); right-hand grip rule for a coil (curl along the current, thumb along the field inside, 5); viewing side (the side you look from when you say clockwise or anticlockwise, 5).
- **Legacy logic ported:** none. The `m6-sliding-rod` family's energy ledger idea (work in, electrical energy, heat) is reused as coded energy bars; the rod itself is not used here.
- **New explainer motion:** **Lenz bench** (v10's magnet bench plus: the coil's induced poles as rose "N"/"S" letters at its ends, a rose induced-field arrow along the coil axis, rose current arrows on the near side of the turns, an end-on inset "seen from the magnet" with a rose curved arrow, and an amber force arrow on the magnet showing the coil's push or pull); **runaway what-if** (a ghost magnet accelerating into the coil with a speed readout climbing and two energy bars, kinetic and heat, growing from an empty source bar, then a red "✗ energy from nothing"); **energy bars** (work done in, electrical energy, heat out, equal heights); **grip-rule axis** (coded curled arrow round a straight arrow, no hand); **step rail** (four numbered steps lighting in turn); **drop test** (two coil stands side by side, one open and one closed, a magnet dropping through each with a timer; the closed one slightly slower; illustrative); `Countdown` (3 s in scene 1; 10 s in scenes 9 and 11); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the bench across the middle with the end-on inset at the upper right; step rail or energy bars on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Geometry (x right, y up the screen, z towards the viewer; coil axis along x; magnet on the left): approaching north pole: B through the coil along +x, increasing; induced moment along −x; current at the near side of each turn (+z) flows along (−x) × z = +y, up the screen; seen from the magnet's side (looking along +x) the induced field points at the viewer, so the current is anticlockwise; the coil's left end is a north pole. Receding: induced moment along +x, near-side current down the screen, clockwise from the magnet's side, left end a south pole.
  (b) The runaway thought experiment is counterfactual and shown greyed with a "what if" tag; no values.
  (c) Drop test: with a closed coil the induced current dissipates energy, so the magnet's kinetic energy at a given height is slightly less and it takes slightly longer to fall; with a few hundred turns and a school magnet the difference is small. Shown as illustrative (no times on screen beyond "slower").
  (d) Energy accounting: the extra work done against the opposing force equals the electrical energy delivered (ignoring radiation), which becomes internal energy in the resistance. The narration says "the books balance".
  (e) Pronunciations: "Lenz" ("lents"); "anticlockwise"; "emf" letter by letter.
  (f) Dropped magnet, north pole first (down), through a vertical-axis coil: entering, B through the coil downwards and increasing, induced field upwards, top face north, repels the north pole (upward force); leaving, the magnet below the coil with its south end uppermost, B through the coil still downwards but decreasing, induced field downwards, the field leaves the coil's bottom face, so the bottom face is north and attracts the magnet's south end (upward force). The current reverses between the two; the force on the magnet is upward both times (site Activity 2's falling coil gives the same pattern).
- **Open decisions for root:**
  - **1. Drop test (learning review, science check).** Scene 7's dropped magnet is a small effect with a coil. Keep (as illustrative evidence linking to v20), or cut to the open-versus-closed push only.
  - **2. `P6-IQ4-03` split.** This video relates Lenz's law to conservation of energy; DC motors (v17) and magnetic braking (v20) apply it. Confirm that the coverage check counts the action across v11, v17 and v20.
Main question: *Push a north pole towards a coil, and the induced current makes the coil push it back. Why does it oppose, rather than help?*
Entry knowledge: Faraday's law (v10); electromagnets, the grip rule and like poles repelling (Year 11); conservation of energy.
Stops after: the energy argument, Lenz's law, the minus sign, the four-step direction method for approaching and receding magnets, stationary case, open versus closed evidence. No motors or braking devices.
Handoff: v12, how one coil can induce an emf in another without touching it.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (pull it in, or push it back?)
> Here's that question. The north pole is pushed towards the coil, and a current is induced. It can only flow one of two ways round the coil. Either way, the coil becomes a small electromagnet, with a north end and a south end. One way, the end nearest the magnet becomes a south pole, and pulls the magnet **in**. The other way, it becomes a north pole, and pushes the magnet **back**. Which does nature choose? Make your **prediction**. It pushes back, every **time**. But why?

Visual: opens on v10's final frame (see "Opening frame"); the chip becomes the heading: "Why does the induced current oppose the flux change?". On "two ways" the two rose curved arrows round the coil's near end pulse in turn. On "small electromagnet" faint rose field lines loop round the coil. On "in" the first option plays as a ghost: rose "S" at the coil's left end, an amber arrow on the magnet pointing towards the coil, chip "pull it in". On "back" the second option: rose "N" at the coil's left end, an amber arrow on the magnet pointing away from the coil, chip "push it back". On "prediction" a 3 s `Countdown` beside the two chips. On "time" the "push it back" option becomes solid, its chip ticks; the ghost option fades.

### 2. what if it pulled the magnet in?
> Try the other choice first. Suppose the coil pulled the magnet in. Give the magnet a tiny nudge, and the coil pulls it a little faster. A faster magnet changes the flux faster, so the current grows, and the pull gets **stronger**. The magnet would speed itself up, while the current heats the coil. Kinetic energy and heat would both keep growing, from **nothing**. That breaks the law of conservation of energy, so it can't **happen**.

Visual: the bench greys into a "what if" panel (tag "what if: the coil attracts", author note b). On "tiny nudge" a short amber motion arrow nudges the magnet; a ghost "S" at the coil's left end and an amber arrow pulling the magnet in. On "stronger" the magnet accelerates towards the coil (a speed readout "v" climbing, no values), the rose current arrows thicken and the pull arrow grows; a loop arrow "faster → more current → stronger pull" circles. On "nothing" two energy bars grow beside it, "kinetic" and "heat", while a third bar "energy supplied" stays empty. On "happen" a red "✗ energy from nothing" stamps across the panel; the panel fades.

### 3. so it pushes back, and you pay
> So the coil must push back. To keep the magnet moving in, something has to keep pushing it, doing work against that **repulsion**. That work is where the electrical energy comes from. It flows round the circuit as a current, and ends up as heat in the coil's **resistance**. Mechanical work in, electrical energy, then heat out. The books **balance**.

Visual: the bench returns in colour: rose "N" at the coil's left end; on "repulsion" an amber force arrow from the coil on the magnet pointing left, and a second amber arrow "applied push" on the magnet pointing right (no hand), with the motion arrow. On "work" a chip "work done = force × distance". On "resistance" three energy bars at the right: "work done on the magnet" (amber) feeds "electrical energy" (orange) feeds "heat in the coil" (red), equal heights, with arrows between. On "balance" a tick under the bars.

### 4. Lenz's law
> This is Lenz's law. The induced current flows in the direction that makes its own magnetic field oppose the change in flux that caused it. Here, the flux to the right is increasing, so the coil's own field points to the left, against the **increase**. Notice that it opposes the change in flux, not the magnet's field itself. That's what the minus sign in Faraday's law means. The induced emf always opposes the **change**.

Visual: on "Lenz's law" a boxed chip "Lenz's law: the induced current's field opposes the change in flux that caused it". On "flux to the right is increasing" slate field lines from the magnet run right through the coil, a slate arrow "B (magnet)" and a "Φ ↑" tag. On "increase" a rose arrow "induced B" along the coil axis pointing left. On "minus sign" the equation strip "ε = −N ΔΦ / Δt" writes with the minus sign circled rose (as v10 left it). On "change" a tag "minus sign = opposes the change".

### 5. four steps to the current direction
> Now let's find the current direction, in four steps. One, which way does the magnet's field go through the coil? To the right, away from the north **pole**. Two, is the flux increasing or decreasing? Increasing, as the magnet gets **closer**. Three, the induced field must oppose that increase, so it points **left**. Four, use the right-hand grip rule for a coil. Curl the fingers the way the current flows, and the thumb points along the field inside. For a field pointing left, towards the magnet, the current flows anticlockwise, seen from the magnet's **side**. And the coil's left end becomes a north pole, facing the magnet's north pole. Like poles repel, just as we **found**.

Visual: a step rail at the right with four numbered slots. On "pole" slot 1 "external B: right →" and the slate arrow through the coil pulses. On "closer" slot 2 "Φ increasing". On "left" slot 3 "induced B: ← (opposes)" and the rose induced-field arrow pulses. On "right-hand grip rule" a coded grip-rule axis appears beside the coil (a straight rose arrow "thumb: induced B" with a curled rose arrow round it "fingers: current"; no hand). On "side" an end-on inset at the upper right "seen from the magnet": a circle with a rose anticlockwise arrow and a rose dot at its centre ("induced B towards you"); on the front-view coil, rose arrows on the near side of the turns point up the screen (author note a); slot 4 "current: anticlockwise (seen from the magnet)". On "found" rose "N" at the coil's left end beside the magnet's "N", tag "like poles repel" and the repulsion arrow pulses.

### 6. stop, then pull it out
> Stop the magnet, and the flux stops changing. No emf, no current, no **force**. Now pull the magnet back out. The field still points right, but now the flux is decreasing. So the induced field points right as well, propping up the flux that's **falling**. The current flips to clockwise, seen from the magnet, and the coil's near end becomes a south pole. It attracts the magnet, pulling against its **escape**. Pushing in, the coil repels. Pulling out, it **attracts**. Either way, it fights the change.

Visual: on "Stop the magnet" the motion arrow disappears; the rose arrows, letters and the force arrow fade; the needle returns to zero; on "force" tags "Φ steady: ε = 0, I = 0, F = 0". On "pull the magnet back out" the amber motion arrow points left and the magnet moves away. The step rail refills: "external B: right →", "Φ decreasing"; on "falling" "induced B: → (props up Φ)" with the rose induced-field arrow along +x. On "clockwise" the inset shows a rose clockwise arrow with a rose cross at its centre ("induced B away from you"); near-side arrows on the turns point down the screen; the needle swings the other way. On "escape" rose "S" at the coil's left end and an amber arrow on the magnet pointing back towards the coil. On "attracts" a split summary: "coming in: N faces N, repel" and "going away: S faces N, attract".

### 7. the evidence: who pays?
> Here's a neat test. Break the circuit, so no current can flow. There's still an emf, but with no current, the coil makes no field, so there's no push back. The magnet moves in **freely**. Close the circuit again, and you have to push harder, because now you're supplying the electrical energy. Now drop a magnet, north pole first, right through a coil standing on its end. As it falls in, the coil's top end becomes a north pole, pushing up on the falling north **pole**. As it leaves, the flux is falling, so the current reverses, and the coil's bottom end becomes a north pole, pulling up on the magnet's south **end**. Either way, the coil pushes up, so the magnet falls a little more **slowly** than through an open coil. Some of the energy that would have become kinetic energy becomes heat in the coil instead. Later in this module, the same idea brakes moving metal without touching **it**.

Visual: on "Break the circuit" one lead to the galvanometer opens (a coded gap); rose "ε" stays at the coil's terminals but no current arrows, no induced poles; on "freely" the magnet moves in with only the motion arrow (no opposing force arrow); tag "open: emf, no current, no opposition". On "Close the circuit again" the gap closes; the rose current, poles and opposing arrow return, and the applied-push arrow on the magnet grows; tag "closed: you supply the energy". On "drop a magnet" camera change to one coil plate stood on its end (axis vertical) on a coded stand above a coded floor line, a bar magnet above it with "N" at its lower end, released and falling by gravity (no hand); the galvanometer beside it. On "pole" (falling in) a rose "N" at the coil's top end, an upward amber arrow on the magnet, the needle swinging right. On "end" (leaving below) a rose "N" at the coil's bottom end facing the magnet's upper "S" end, an upward amber arrow on the magnet, the needle swinging left (tag "current reverses, force still up", author note f). On "slowly" a second, open coil appears beside the first and the drop repeats through both together; the magnet through the closed coil lags slightly (tag "illustrative: a little slower", author note c). On "instead" small energy bars beside the closed coil: "kinetic" a little shorter, "heat" a small bar. On "it" a grey chip "magnetic braking: later in Module 6".

### 8. a way to remember
> Here's a way to remember the direction. Coming in, it pushes back. Going away, it pulls back. It works for either pole, and whether the magnet or the coil does the moving. The coil always resists the change, so you always pay for the electrical energy with **work**.

Visual: board clears to two small benches side by side: magnet approaching with the coil's near end "N" and a repulsion arrow; magnet receding with the near end "S" and an attraction arrow. On "Coming in, it pushes back" the left bench pulses; on "Going away, it pulls back" the right bench pulses. On "work" the handwritten line writes large above: "Coming in, it pushes back. Going away, it pulls back." with "Lenz's law: the induced field opposes the change in flux" under it. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. The south pole of a bar magnet is pulled away from a conducting loop, along the loop's axis. State the direction of the induced current, as seen from the magnet's side. Then state whether the loop attracts or repels the magnet, and explain why. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The south pole of a bar magnet faces a conducting loop. The magnet is pulled away from the loop along the loop's axis. (a) State the direction of the induced current in the loop, as viewed from the magnet's side (clockwise or anticlockwise). (b) State whether the loop attracts or repels the magnet. Justify your answer with reference to Lenz's law. (3 marks)" A small coded diagram: a loop seen side-on at the right, the magnet at the left with "S" facing the loop, an amber motion arrow pointing left. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> Near a south pole, the field points into the pole, so through the loop it points towards the magnet. Pulling away makes that flux decrease, so the induced field points towards the magnet as well. Seen from the magnet, that's **anticlockwise**. The loop's near face becomes a north pole, so it **attracts** the south pole, opposing its escape. The classic slip is saying the loop always **repels**.

Visual: card shrinks to the top; "south pole" and "pulled away" underline. On the diagram a slate arrow through the loop points left (towards the magnet), "Φ decreasing"; a rose induced-field arrow also points left. On "anticlockwise" a small end-on inset with a rose anticlockwise arrow and a rose dot: "(a) anticlockwise (seen from the magnet)". On "attracts" rose "N" on the loop's near face and an amber arrow on the magnet pointing towards the loop: "(b) attracts: opposes the magnet moving away". On "repels" a chip "the loop repels the magnet" fades in and is crossed (caption "going away: it pulls back"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that the induced current in a coil could just as well flow the other way, so that the coil attracts an approaching magnet. Explain, using the law of conservation of energy, why this cannot happen. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student claims that when a magnet is pushed towards a coil connected in a closed circuit, the induced current could equally flow so that the coil attracts the magnet. Explain, with reference to the law of conservation of energy, why this cannot occur. (3 marks)" No diagram needed. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> If the coil attracted the magnet, the magnet would speed up by itself, inducing more and more current and heat. Kinetic energy and heat would both grow with no energy input, which breaks conservation of **energy**. So the coil must repel, and the work done pushing against it supplies the electrical **energy**. The slip is answering, because a coil always repels a magnet. It doesn't. A receding magnet is **attracted**.

Visual: card shrinks to the top; "attracts the magnet" and "conservation of energy" underline.A three-line answer builds: on "conservation of energy" "attract → magnet speeds up by itself → more current, more heat → energy from nothing ✗"; on "supplies the electrical energy" "so: repel; work against the repulsion = electrical energy → heat ✓". On "attracted" a chip "because a coil always repels a magnet" fades in and is crossed (caption "receding magnet: attracted"). Hold about 1 second.

### 13. handoff
> So the induced current always opposes the change in flux, and the energy it carries comes from the work you do. So far, every change came from a moving magnet. But a magnet isn't the only way to make a changing field. A second coil, with a changing current in it, can do the same job, without moving, and without touching. How can one coil induce an emf in **another**?

Visual: board clears (camera change) to the bench. On "moving magnet" the magnet slides out of frame to the left. On "second coil" a second coil plate (`phys-y11-solenoid-coil-v1.png`) slides in at the left, in line with the first coil, a small gap between them; coded leads from it to the knife switch (`phys-y11-knife-switch-v1.png` with its blade layer, open) and the low-voltage supply (`phys-y11-low-voltage-supply-v1.png`); the first coil stays connected to the galvanometer, needle at zero. On "without touching" a navy bracket marks the gap "no contact". On "another" a "?" over the gap and a chip "Next: how can one coil induce an emf in another without touching it?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Lenz's law: the induced current flows so that its magnetic field opposes the change in flux that caused it (the minus sign in ε = −NΔΦ/Δt).
2. Why: if it helped the change, the magnet would speed itself up while the coil heated, creating energy from nothing. Opposition means work must be done, and that work becomes the electrical energy (then heat).
3. Direction steps: (1) external B through the coil; (2) Φ increasing or decreasing; (3) induced B opposes the change; (4) grip rule for the current; state the viewing side.
4. North pole approaching: near end N, repels, anticlockwise seen from the magnet. Receding: near end S, attracts, clockwise. Stationary: no current, no force.
5. Open circuit: emf but no current, no opposing force.

Memory aid (large, on the notes screen): *Coming in, it pushes back. Going away, it pulls back.*

## Teaching checks

- **Does it explain causes?** Why the current opposes: the alternative creates energy from nothing (2). Where the electrical energy comes from: work against the opposition (3). Why the direction comes out as it does: the four steps (5). Why a receding magnet is attracted: the induced field props up a falling flux (6). Why an open circuit gives no opposition: no current, no field (7).
- **Misconceptions addressed:** a coil always repels a magnet (6, 8; crossed in 10 and 12); the induced field always opposes the external field (it opposes the change, 6); "clockwise" without a viewing side (5); induction gives energy for free (2, 3); the minus sign means small (4).
- **One idea at a time:** the choice (1), the impossible option (2), the energy account (3), the law (4), the direction method (5), other cases (6), evidence (7).
- **Video makes it easier:** the two options as ghost poles and arrows (1); the runaway magnet with energy bars rising from an empty source (2); the equal energy bars (3); the step rail lighting with the inset (5); the needle reversing with the poles (6); open versus closed and the side-by-side drop (7).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 29 s.
- **Avoided double teaching:** v10's Faraday's law recalled; Year 11 electromagnets, the grip rule and like poles recalled in clauses.
- **Syllabus coverage:** `P6-IQ3-02`: evidence for Lenz's law with a magnet and a solenoid, and the energy transfers (2, 3, 6, 7). `P6-IQ4-03`: Lenz's law related to conservation of energy (2, 3, 7); DC motors (v17) and magnetic braking (v20) apply it.
- **Out of scope by design:** motors and back emf (v17), eddy currents and braking devices (v20), two coils (v12).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The south pole of a bar magnet faces a conducting loop. The magnet is pulled away from the loop along the loop's axis. (a) State the direction of the induced current in the loop, as viewed from the magnet's side (clockwise or anticlockwise). (b) State whether the loop attracts or repels the magnet. Justify your answer with reference to Lenz's law."
Model answer: (a) The field near a south pole points into the pole, so through the loop it points towards the magnet; pulling the magnet away decreases this flux; the induced field opposes the decrease, so it also points towards the magnet; by the grip rule the current is anticlockwise as viewed from the magnet's side. (b) The loop's face towards the magnet becomes a north pole, which attracts the south pole: the induced effect opposes the change (the magnet moving away). Classic mistake (crossed): "the loop repels the magnet".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks).** "A student claims that when a magnet is pushed towards a coil connected in a closed circuit, the induced current could equally flow so that the coil attracts the magnet. Explain, with reference to the law of conservation of energy, why this cannot occur."
Model answer: If the coil attracted the magnet, the magnet would accelerate towards the coil without external work, changing the flux faster and inducing a larger current, which dissipates more heat; both kinetic energy and thermal energy would increase with no energy input, violating conservation of energy. Therefore the induced current must oppose the motion (repel), so external work must be done against the opposing force, and this work is the source of the electrical energy, dissipated as heat in the circuit. Classic mistake (crossed): "because a coil always repels a magnet" (a receding magnet is attracted).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Values | none (qualitative video by route and site) | |
| Directions | approaching north pole: induced B towards the magnet, anticlockwise from the magnet's side, near-side current up the screen; receding: clockwise, near-side current down; A1: anticlockwise, attract | 5, 6, 10, author note a |

## Numbers to verify (all values, repeated for Codex)

No numerical values. Codex to re-check the direction results with the cross products in author note a: (−x) × z = +y (approaching, near side up); (+x) × z = −y (receding, near side down); A1: B through the loop towards the magnet (−x), decreasing, induced moment −x, anticlockwise seen from the magnet's side.

## Memory aid check

- **"Coming in, it pushes back. Going away, it pulls back."** Meaning, as said in scene 8: when a magnet (either pole) approaches a coil in a closed circuit, the induced current makes the coil repel it; when it moves away, the coil attracts it; the coil always resists the relative motion. Assumptions checked: closed circuit (no current, no force); relative motion along the coil's axis; either pole (for a south pole approaching, the coil's near end becomes south, still repelling); it also holds if the coil moves instead of the magnet (relative motion). It is a consequence of Lenz's law, not a replacement: for a changing current in a nearby coil (v12) use the field-opposes-change wording. It helps a new case: A1 (south pole receding: attract), the dropped magnet (slowed both entering and leaving), and v20's braking. Introduced after the explanation (2 to 6).
- **Considered, not used:** "Nature hates change" (anthropomorphic and vague).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,699 characters**, 14 scenes. Characters per scene (1 to 14): 461, 424, 339, 415, 664, 488, 877, 262, 277, 385, 245, 409, 365, 75. At 13.3 characters per second the speech is about 428 s; add about 3 s for the prediction countdown, 2 s for the runaway what-if, 2 s for the drop test, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 88 s of holds and countdowns): **about 516 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's drop test (open decision 1); scene 6's last sentence; scene 13's first sentence.

## Opening frame

v10's final frame (designed in this wave, `phys-y12-m6-v10.md`): paper background; the bench: bar magnet at the left, "N" facing the coil, an amber motion arrow pointing towards the coil; the coil plate; dimmed coded leads to the galvanometer at the right, needle deflected; two rose curved arrows round the coil's near end (clockwise and anticlockwise as seen from the magnet), each with "?"; a large "?"; a chip "energy is conserved"; heading "What changes create an induced emf?"; chip "Next: why does the induced current oppose the flux change?". Scene 1 turns the chip into the heading and turns the two arrows into the two pole options.

## Final frame

The last explained frame (end of scene 13, before the key-notes board): paper background; a bench line; at the left a second coil plate (the primary, unlabelled yet) with coded leads to an open knife switch and the low-voltage supply; at the right, in line with it and a small gap away, the first coil with coded leads to the galvanometer, needle at zero; a navy bracket across the gap "no contact"; a "?" over the gap; heading unchanged ("Why does the induced current oppose the flux change?"); a chip reads "Next: how can one coil induce an emf in another without touching it?". v12 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v11` (route phys-y12-m6-v11). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v11` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v11` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, what-if, pay-with-work, lenz-law, four-steps, stop-and-pull, evidence, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: Lenz bench (induced poles, induced-field arrow, near-side current arrows, end-on inset, force arrows), runaway what-if, energy bars, grip-rule axis, step rail, drop test, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue (the bench greys into the what-if); 2 to 3 to 4 to 5 to 6 camera continue (same bench); 6 to 7 camera continue, then camera change to the drop test; 7 to 8 clear change; attempts and feedback card shrink to the top; 12 to 13 clear change; 13 to 14 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v11-learning-review.md`, `science_check` = `checks/p-y12-m6-v11-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-bar-magnet-v1.png` (coded "N" on the red end, "S" on the grey): 1 to 8, 13; two copies in the drop test (7).
- `public/assets/physics/phys-y11-solenoid-coil-v1.png`: the coil (1 to 8); the second coil in the handoff (13); two copies stood upright in the drop test (7, rotated 90° as a whole, uniformly scaled).
- `public/assets/physics/phys-y11-knife-switch-v1.png`, `phys-y11-knife-switch-blade-v1.png`, `phys-y11-low-voltage-supply-v1.png`: the handoff circuit (13).
- **Checked, not used:** `phys-y11-retort-stand-v1.png` for the drop test (a coded stand keeps the two coils identical and uncluttered; build may substitute the plate if it reads better).

Need (new plates, requested and specified in `phys-y12-m6-v10.md`'s asset brief, not requested twice):
1. `y12p-galvanometer-v1.png` and `y12p-galvanometer-needle-v1.png`: 1 to 7, 13.

Coded: motion and force arrows, field lines, induced poles, induced-field and current arrows, the end-on inset, the grip-rule axis, energy bars, the step rail, the open-circuit gap, the drop-test stands and floor line, summary panels, crossed chips, attempt cards and diagrams, countdowns, key notes board.

Kit gaps (for the v11 build brief):
1. **Lenz bench.** v10's magnet bench with induced poles, an induced-field arrow, near-side current arrows on the coil turns (direction from author note a), an end-on "seen from the magnet" inset, and force arrows on the magnet; an open-circuit gap that removes the induced effects while keeping "ε".
2. **Runaway what-if and energy bars.** A greyed accelerating ghost with a speed readout and three energy bars (source, kinetic, heat).
3. **Drop test.** Two upright coils on coded stands, two magnets falling under gravity, the closed one slightly delayed (illustrative).

## Codex asset brief

No new plates for v11. The galvanometer plates are specified in `phys-y12-m6-v10.md`. Confirm at build time that the solenoid coil plate reads correctly when rotated 90° for the drop test.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every direction result against author note a and the "Numbers to verify" cross products.
2. Confirm the physics of every learner-visible claim: the attract/repel choice; the runaway argument; work against the opposing force becomes electrical energy, then heat; Lenz's law and the minus sign; the four steps; approaching (N near end, repel, anticlockwise from the magnet), stationary (none), receding (S near end, attract, clockwise); open circuit (emf, no current, no opposing force); the dropped magnet falling slightly more slowly through a closed coil.
3. Confirm the what-if and the drop test are described as counterfactual and illustrative respectively.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (pushes are arrows; the grip rule is a coded axis).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Lenz's Law: Why the Induced Current Opposes the Change | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson14.sa.html

Push a magnet towards a coil, and the induced current makes the coil push it back. Why not help it instead? See why a helping current would create energy from nothing, where the electrical energy really comes from, how to state Lenz's law, and how to find the induced current's direction in four steps for a magnet coming in and going away. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε = −N ΔΦ/Δt, including but not limited to: the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids; the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"
"relate Lenz’s Law to the law of conservation of energy and apply the law of conservation of energy to: DC motors and magnetic braking"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: Faraday's law and what creates an induced emf. Next: how one coil induces an emf in another without touching it.

#HSCPhysics #Physics #LenzsLaw #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10; check that the attract/repel framing makes the choice concrete; that the runaway argument is followed at speed; that the inset carries clockwise and anticlockwise without confusion with the front view; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The ghost options, the runaway magnet with energy bars, the step rail with the inset and the needle reversing carry the explanation; judge them at playback speed in the voiced preview.
