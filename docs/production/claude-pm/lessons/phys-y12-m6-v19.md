# Year 12 Physics M6 V19: AC induction motors. Why must an induction-motor rotor lag the rotating field? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,300 characters, 16 scenes, about 560 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v18's final frame.

Scope: nineteenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How has knowledge about the Motor Effect been applied to technological advances?". Templates as `phys-y12-m6-v07.md` and `phys-y12-m6-v11.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson16.sa.txt`, hash checked against the live file): orient and retrieve (disconnected-rotor prediction, warm-up, intentions, vocabulary, cross-lesson links), explain the rotating field (aluminium cylinder in a ring of electromagnets, stator, squirrel-cage rotor, four steps, HSC tip "three stages to mention", why slip is essential, n_s = 120f/p and percentage slip, true/false), power-station generators (used by v18), the interactive, calculate slip and speed (marked "Beyond the syllabus"; worked example 4 poles, 50 Hz, 1425 RPM, 5.0 per cent; 2-pole 3000 RPM; poles versus pole pairs), apply and consolidate (Activity 1, odd one out, Activity 2, "Analyse 6 marks" power station, "Compare 5 marks" DC versus induction torque), practice (MC, Q1 4-pole 1440 RPM, Q2 load increase, model answers), review (Tesla's 1888 motor): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed` (recomputed 6 Nov; matches the route). Also used: lesson 10's `induction-motor-overview` (one coil alone gives a pulsating field; "Analyse 6 marks" on the induction motor's limiting case), read in full for v16 and v18 (`module6/lesson10.sa.html`, SHA256 `736384e8c6b6ea3e705767d723a0ee76e77ccceae7ab2d40f7f297065de8d36f`). Route entry: `phys-y12-m6-v19`, sections `explain-rotating-field`, `calculate-slip-and-speed`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain rotating stator field, induced rotor current, torque and slip causally; contrast synchronous speed and rotor speed. Stop before full three-phase winding design." Next: "phys-y12-m6-v20: How can a moving conductor be braked without contact?"

Owner rules applied: as v07 and v11 (2017 syllabus quoted exactly; one main learner question; no people, hands, faces or body outlines, and no people in analogies (the rotating field is compared to chasing lights and slip to a sailing boat, both drawn as coded diagrams with no figures); the squirrel-cage rotor and desk fan are painted plates (one new, one reused); the stator ring, rotating field, rotor loops, currents, forces and the speed readouts are coded; every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original attempts; optional key notes; Australian spelling; no em dashes). Recalled, not re-taught: v07 (motor effect: a current in a field feels a force), v10 (Faraday's law), v11 (Lenz's law: the induced effect opposes the change; "going away, it pulls back"), v16 and v17 (the DC motor, brushes and split ring), v18 (AC; a generator under load).

Syllabus content (Physics Stage 6 (2017), Module 6 Electromagnetism; ledger id `P6-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P6-IQ4-02`: "analyse the operation of simple DC and AC generators and AC induction motors (ACSPH110)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v18's final frame (a stator ring with a rotating field arrow, the squirrel-cage rotor inside, its mark turning slightly behind, "?"). Teaches: the observation (field 1500 revolutions per minute, rotor about 1425, never catching up, even with no load); the stator and the rotating field (several coils, AC out of step, the strongest point moving round like chasing lights; one coil alone only pulses; speed set by the supply frequency); the squirrel-cage rotor (bars and end rings, closed loops, no connection); induced rotor currents (field sweeping past the loops, Faraday); torque (motor-effect forces; Lenz: oppose the relative motion, so the rotor is dragged along with the field); why the rotor must lag (at the field's speed: no relative motion, no flux change, no current, no torque; slip defined, necessary); load (more slip, more current, more torque, a new lower speed); typical numbers labelled beyond the syllabus (4-pole, 50 Hz: 1500; rotor 1425; slip 75, 5.0 per cent); the sailing-boat picture of slip; comparison with the DC motor (supplied versus induced current, split ring versus rotating field, no brushes, low maintenance, slip). Stops before three-phase winding design, phase diagrams, torque-slip curves, synchronous motors and generator load angle. Magnetic braking is v20's.

## Decisions

- **Learner question (route wording kept).** "Why must an induction-motor rotor lag the rotating field?" is causal. The answer, built in order: the rotor's current is induced only while the field slides past it (4); that current's force drags the rotor along (5); at the field's speed nothing slides past, so there is no current and no force (6).
- **Hook (v18's handoff and the site's prediction box).** The speed readouts (1500 and about 1425 revolutions per minute) make the lag a measured fact. The prediction contrasts "friction holds it back" with "it must lag to be pushed at all"; the answer adds that with no friction or load it still could not reach the field's speed (lesson 10 "Analyse 6 marks" limiting case). The desk-fan plate grounds the device in one sentence (many desk fans use small induction motors).
- **Rotating field, qualitatively (route stop "before full three-phase winding design"; lesson 10 "Alternation in one coil alone gives a pulsating field").** Three coil pairs round the ring, each with AC, peaking one after another; the strongest point moves round; one coil alone only grows, shrinks and reverses in place. Analogy: chasing lights on a sign (each bulb blinks in place, the bright spot travels). No phase diagram or 120° arithmetic is shown.
- **Torque direction from Lenz (site HSC tip and four steps; lesson 10 "Analyse 6 marks" step 4).** The narration names the change as "the field sliding past the rotor" and says the forces act to reduce that sliding, so they drag the rotor along. This links to v11's "Going away, it pulls back" (the field's poles move away from the bars, so the bars are pulled after them).
- **Slip necessary, and load (site "Why slip is essential", Q2; site note 1).** The limiting-case argument is narrated as a thought experiment (6). The load scene states that the rotor settles at a slightly lower speed with more slip and does not return to its old speed (site Q2's model answer says "restoring the rotor speed"; site note 1).
- **Numbers labelled beyond the syllabus (site section 5 banner: "Synchronous speed n_s = 120f/p, percentage-slip calculations and three-phase detail are extension").** The route lists `calculate-slip-and-speed`, so scene 8 shows the site's worked example (4 poles, 50 Hz: 1500; rotor 1425: slip 75 and 5.0 per cent) with a grey "beyond the syllabus" tag; no formula is relied on in the attempts (open decision 1). The word "synchronous speed" is shown on screen as the name of the field's speed (route "contrast synchronous speed and rotor speed") and said once.
- **Analogy (scene 9, new): a sailing boat going straight downwind.** See "Memory aid check". People are not drawn: the boat is a coded silhouette with a square sail and wind arrows.
- **Comparison with the DC motor (site "Compare 5 marks", lesson 10 compare section).** Shared: motor-effect forces on currents in a field. Different: supplied current with brushes and a split ring versus induced current with a rotating field; no brushes or sparking, low maintenance; slip exists only in the induction motor.
- **Attempts (original, HSC style).** A1: explain why the rotor cannot rotate at the field's speed. A2: a load increase: the rotor's speed, the slip and the induced current. Crossed: A1 "friction stops it reaching the field's speed"; A2 "the rotor speeds back up to its old speed".
- **Handoff (route next).** Scene 15 flips the arrangement: hold the magnet still and move the metal. A copper pendulum plate (requested in `phys-y12-m6-v20.md`) swings into a field region; the same induced currents now drag it back. See "Final frame".
- **Colour key (root decision 1):** stator field slate (dashed resultant arrow, slate pole tint on the coils); induced rotor emf and current rose; supply current in the stator coils orange; forces and torque amber; speed readouts grey.
- **Site sources used:** prediction box (1); aluminium-cylinder demonstration (1, as the fact that nothing is connected); stator and rotor definitions (2, 3); four steps (4, 5); HSC tip (2, 4, 5); "Why slip is essential" (6); worked example (8); Activity 1 (6, 10); odd one out (3: no slip rings to the rotor); "Compare 5 marks" (10); Q1 (A1 style); Q2 (7, A2; site note 1); review (6). Lesson 10: pulsating single coil (2), limiting case (1, 6), maintenance comparison (10). Not used: the power-station analysis (v18), the interactive, the Q1 calculation (1440 RPM, 4.0 per cent; checked), poles versus pole pairs detail, synchronous generator load angle.
- **Site notes (quoted from site lesson 16, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. Section `practice-induction-motors`, Q2 model answer: "The larger rotor current interacts with the stator field to produce a greater magnetic torque, restoring the rotor speed and matching the increased load demand (1 mark)." The rotor does not return to its former speed: it settles at a slightly lower speed, with more slip, where the larger torque matches the larger load (the larger slip is what sustains the larger current). Proposed fix: "...to produce a greater magnetic torque, which matches the increased load at a slightly lower rotor speed (larger slip) (1 mark)."
  2. Section `review-and-revisit`: "At the start you were asked about Tesla's 1888 induction motor". The opening prediction box asks about a squirrel-cage rotor with no connection, not about Tesla's 1888 motor. Proposed fix: "At the start you were asked how a rotor with no electrical connection can turn" (or add the Tesla framing to the opening).
  Checked and correct: worked example (1500 RPM; 75 RPM; 5.0 per cent; 3000 RPM); Q1 (1500 RPM; 60 RPM; 4.0 per cent); MC 3000 RPM; odd one out (slip rings to the rotor is false); lesson 10's comparison and limiting case.
- **Cause chain taught, in order:** (1) the rotor follows the turning field but never reaches its speed, even unloaded (1); (2) coils round the stator carry AC peaking one after another, so the field's strongest direction turns at a speed set by the supply frequency (2); (3) the cage's bars and end rings form closed loops with no connection to the supply (3); (4) the field sweeping past changes the flux through those loops, inducing emfs and large currents (4); (5) those currents in the field feel forces; by Lenz's law they act to reduce the sliding, so they drag the rotor along with the field (5); (6) at the field's speed there would be no sliding, no flux change, no current and no torque, so the rotor slows until it lags: slip is necessary (6); (7) more load means more slip, faster flux change, more current and more torque, at a lower speed (7); (8) slip is typically a few per cent (8); (9) unlike the DC motor, the rotor's current is induced and the field turns, so no brushes or split ring, at the price of slip (10).
- **Entry knowledge (route `entryKnowledge`):** v18's AC and generator; v07's motor effect; v10's Faraday's law; v11's Lenz's law; v16 and v17's DC motor (brushes, split ring); Year 11 frequency.
- **Learner-visible vocabulary (plain meaning at first use):** stator (the fixed outer part, with coils, 2); rotating field (a magnetic field whose direction turns steadily, 2); rotor (the turning part, 3); squirrel-cage rotor (metal bars joined at both ends by metal rings, 3); induced current (a current made by a changing flux, with no supply connected, 4); slip (how far the rotor's speed falls behind the field's speed, 6); synchronous speed (the field's speed, on screen in scene 8 and said once).
- **Legacy logic ported:** none. The kit family `m6-induction-slip` (schematic resultant field, illustrative 20 per cent slip, no winding phase detail) is the candidate support for scenes 1, 4 to 7; set its slip to the scene's values (5 per cent in scenes 1 and 8; larger, schematic, in scene 7) and keep its "no winding phase detail" limit.
- **New explainer motion:** **stator ring** (six coded coils round a circle in three opposite pairs, each pair's fill pulsing with its own sine, peaking in turn; a dashed slate resultant arrow turning steadily; a "chasing lights" mode with a ring of dots lighting in sequence); **cage rotor** (the plate in side view for scene 3; a coded end-on rotor for scenes 4 to 7 with bars as dots round its rim, rose dots and crosses for bar currents, an index mark that turns); **sliding-field overlay** (slate field lines drawn across the rotor that move relative to it at the slip rate; when the speeds match they freeze relative to the rotor); **speed readouts** (two grey dials or counters "field" and "rotor" in revolutions per minute); **force arrows** (amber tangential arrows on the current-carrying bars); **what-if** (the rotor sped up to the field's speed: the sliding lines freeze, bar currents fade, arrows vanish, the rotor decelerates); **load arrow** (amber outline counter-torque on the shaft); **sailing panel** (coded boat silhouette with a square sail, wind arrows of fixed length, a relative-wind arrow at the sail that shrinks to zero as the boat's speed approaches the wind's); `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stator ring with the rotor centre-left; speed readouts and chain chips on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Rotating field: three-phase AC in three coil pairs spaced 120° round the stator gives a resultant field of constant magnitude turning at the synchronous speed; drawn qualitatively, no phase arithmetic (route stop). Single-phase fans use a split phase or shaded poles to start; not discussed beyond "many desk fans use small induction motors".
  (b) Synchronous speed n_s = 120f/p (p = number of poles): 4 poles, 50 Hz → 1500 revolutions per minute (25 per second). Rotor 1425: slip 75, 75/1500 = 5.0 per cent. Shown with a "beyond the syllabus" tag.
  (c) Torque direction: relative to the rotor the field moves forward; induced currents oppose the relative motion (Lenz), so the force on the rotor is in the field's direction of rotation. On the end-on rotor, bars just "behind" the leading pole carry currents shown as rose dots or crosses (out of or into the screen); amber arrows tangential, forward.
  (d) Load response: increased load torque → rotor decelerates → slip increases → rate of flux change in the rotor increases → rotor emf and current increase → electromagnetic torque increases → new equilibrium at higher slip (lower speed), in the normal operating range (small slip). Torque-slip curve beyond pull-out not discussed.
  (e) The unloaded "never catches up" claim: with no load and no friction the rotor approaches the field's speed but any torque needed (even friction) requires some slip; in the ideal limit the torque at exactly synchronous speed is zero. Narrated as "could never quite catch up".
  (f) Pronunciations: "stator" (STAY-tor); "rotor"; "synchronous" (SIN-kruh-nus); "emf" letter by letter; "fifteen hundred", "fourteen twenty five" for 1425.
- **Open decisions for root:**
  - **1. Scene 8 (beyond the syllabus).** The route lists the site's slip calculation; the site marks it as extension. Keep as a short tagged scene (current design), or cut it and keep "a few percent" in scene 6 (saves about 380 characters).
  - **2. Plates.** New `y12p-squirrel-cage-rotor-v1.png` (also used in v18's final frame). The desk fan is reused. The copper pendulum plates for the handoff are specified in v20's brief.
  - **3. Optional beats** the learning review may cut: scene 9's analogy (if it slows the video), the desk-fan sentence in scene 1, scene 10's maintenance sentence.
Main question: *A turning magnetic field drags a rotor round, though nothing is connected to the rotor. The field turns at 1500 revolutions per minute; the rotor never gets past about 1425. Why must an induction-motor rotor lag the rotating field?*
Entry knowledge: v18's AC; the motor effect (v07); Faraday's law (v10); Lenz's law (v11); the DC motor (v16, v17).
Stops after: the rotating field (qualitative), induced rotor current, torque, why slip is necessary, load and slip, typical numbers (extension), the comparison with the DC motor. No three-phase winding design.
Handoff: v20, how a moving conductor can be braked without contact.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (it never catches up)
> Here's that arrangement. The field turns, and the rotor follows it round, even though nothing is connected to the rotor. Many desk fans run on a motor like this. Now watch the speeds. On a fifty hertz supply, this motor's field turns at fifteen hundred revolutions per minute. The rotor turns at about fourteen twenty five. It never catches **up**. Is that just friction holding it back, or does the rotor need to lag to be pushed at all? Make your **prediction**. It needs the **lag**. Even with no friction and no load, it could never quite catch up.

Visual: opens on v18's final frame (see "Opening frame"); the chip becomes the heading: "Why must an induction-motor rotor lag the rotating field?". On "nothing is connected" the navy bracket "no wires to the rotor" pulses. On "desk fans" the desk fan plate (`phys-y11-desk-fan-v1.png`) slides in small at the right with its blades layer (`phys-y11-desk-fan-blades-v1.png`) turning; tag "many desk fans: small induction motors"; it slides out. On "fifteen hundred" a grey readout under the field arrow "field: 1500 rev/min". On "fourteen twenty five" a second readout under the rotor's mark "rotor: ≈ 1425 rev/min". On "up" the two markers circle together with the rotor's mark slipping steadily behind (a growing angle between them, wrapping round). On "prediction" a 3 s `Countdown` beside two chips: "friction holds it back" and "it must lag to be pushed at all". On "lag" the second chip ticks. On "no friction and no load" the first chip is crossed with a small tag "even unloaded, it can't reach 1500".

### 2. a field that turns
> First, how can a field turn when nothing moves? The fixed outer part of the motor is called the **stator**. It has coils spaced round the rotor. Each coil carries an alternating current, but the currents are **out of step**, so they peak one after another. One coil alone would just make a field that grows, shrinks and reverses in place. But with the coils peaking in turn, the strongest field moves round the ring. It's like lights on a sign that **chase round** a circle. Each bulb only blinks on and off, but the bright spot travels. So the field's direction turns steadily, at a speed set by the supply **frequency**.

Visual: the rotor fades to an outline; the stator ring of six coded coils in three opposite pairs fills the stage. On "stator" a label "stator: the fixed outer part, with coils". On "out of step" three small sine graphs beside the ring (one per pair), offset from each other, each with a moving dot; each pair's fill brightens orange as its graph peaks. On "One coil alone" all but one pair dim: that pair's slate field arrow grows, shrinks and reverses along a fixed line (tag "one coil: pulses in place"). On "peaking in turn" the other pairs return; the dashed slate resultant arrow turns steadily round the ring. On "chase round" the ring switches briefly to "chasing lights" mode: a ring of dots, each blinking in sequence, the bright spot travelling round; it returns to the coils. On "frequency" tag "rotating field: speed set by the supply frequency".

### 3. a rotor connected to nothing
> The turning part, the rotor, is often a squirrel cage. It's a ring of metal bars, joined at both ends by metal rings. No wires, no brushes, no connection to the supply. But every pair of bars, with the end rings, makes a closed **loop**. And a closed loop is exactly what induction **needs**.

Visual: camera change: the squirrel-cage rotor plate (`y12p-squirrel-cage-rotor-v1.png`, new) large, side view. On "metal bars" the bars highlight in sequence; on "metal rings" the two end rings highlight. On "No wires" three crossed grey chips "wires", "brushes", "split ring". On "loop" two neighbouring bars and the end-ring segments joining them trace a rose outline (a closed loop). On "needs" more loops outline round the cage; tag "closed loops: induction can drive currents round them". The plate moves back inside the stator ring as the coded end-on rotor.

### 4. the field sweeps past the bars
> Now let the field turn while the rotor is still at rest. The field sweeps past the bars, so the flux through each loop of the cage keeps **changing**. By Faraday's law, that induces an emf in each loop. The bars are thick metal with very little resistance, so large currents **flow**. These are induced currents. Nothing supplies them directly. They're made by the field moving past the **rotor**.

Visual: the end-on rotor (coded: a circle with bars as small circles round its rim) at rest inside the stator ring; the dashed resultant arrow turns and slate field lines across the rotor sweep round with it (sliding-field overlay). On "changing" one loop on the rotor (two bars) highlights and a small "Φ" tag on it pulses as the field passes. On "emf" a rose "ε" on that loop. On "flow" rose dots and crosses appear in the bars nearest the field's poles (currents out of and into the screen, author note c), moving round with the field. On "rotor" tag "induced: made by the field moving past the rotor (Faraday)".

### 5. the force drags the rotor along
> Each current carrying bar sits in the stator's field, so it feels a force, the motor effect. Which way? Lenz's law tells you. The induced currents oppose the change that caused them, and the change here is the field sliding past the rotor. To reduce that sliding, the forces drag the rotor along with the **field**. So the rotor turns in the same direction as the field, chasing **it**. Remember, going away, it pulls **back**. The field's poles move away, and the bars are pulled after them.

Visual: on "motor effect" amber tangential arrows on the current-carrying bars, all pointing in the field's direction of rotation. On "Lenz's law" a small grey chip "Lenz: opposes the change". On "sliding past the rotor" a curved slate double arrow between the field arrow and the rotor's mark "relative motion". On "field" the amber arrows combine into one curved amber torque arrow on the rotor; the rotor starts to turn. On "it" the rotor speeds up, its mark following the field arrow. On "pulls back" a small inset from v11 (magnet moving away from a coil, attraction arrow) and the chip "going away, it pulls back" (v11's memory aid). On "pulled after them" the inset fades.

### 6. why it can't catch up
> So why can't the rotor catch up? Imagine it did, turning at exactly the field's speed. Then, seen from the rotor, the field would be standing still. The flux through each loop would stop changing. No changing flux, no emf, no current, and no **force**. With no turning force, friction and the load slow the rotor down. As soon as it falls behind, the field is sliding past again, currents flow again, and the force **returns**. So the rotor settles a little slower than the field, just slow enough for the force to match the load. This lag is called **slip**. It isn't a fault. It's what makes the motor **work**.

Visual: the board greys into a "what if" panel (tag "what if: rotor at the field's speed"). On "exactly the field's speed" the rotor's readout climbs to "1500" and its mark locks onto the field arrow. On "standing still" the sliding field lines freeze relative to the rotor. On "force" the rose currents fade and the amber arrows vanish; a chain chip "same speed → no relative motion → Φ steady → ε = 0 → I = 0 → no torque". On "slow the rotor down" the panel returns to colour; the readout falls and the mark drops behind. On "returns" the field lines slide again, rose currents and amber arrows return. On "match the load" the readouts settle at "1500" and "1425". On "slip" a label "slip: how far the rotor's speed falls behind the field's" with a bracket between the readouts. On "work" tag "slip is necessary".

### 7. a heavier load
> What happens with a heavier load? The rotor slows a little more, so the slip **grows**. The field now sweeps past the bars faster, so the flux changes faster, the induced emf is bigger, and the rotor current is bigger. So the force grows, until the torque matches the new load at a slightly lower **speed**. It doesn't go back to its old speed. It needs the extra slip to keep the extra **torque**.

Visual: an amber outline counter-torque arrow "load" on the rotor's shaft grows. On "grows" the rotor readout drops (schematic: tag "illustrative"), the bracket between readouts widens. On "sweeps past the bars faster" the field lines slide faster across the rotor. On "rotor current is bigger" the rose dots and crosses enlarge. On "force grows" the amber bar arrows lengthen. On "speed" the amber torque arrow and the load arrow match; the rotor turns steadily at the lower speed. On "torque" a chain chip "load ↑ → speed ↓ → slip ↑ → faster flux change → I ↑ → torque ↑ (at a lower speed)".

### 8. typical numbers (beyond the syllabus)
> Here are typical numbers, a little beyond what the syllabus asks. A four pole motor on a fifty hertz supply has a field turning at fifteen hundred revolutions per minute. That's called the synchronous speed. If the rotor turns at fourteen twenty five, the slip is seventy five revolutions per **minute**. As a fraction of the field's speed, that's seventy five over fifteen hundred, **five percent**. A few percent is typical for a loaded **motor**.

Visual: board change to the working layout with a grey tag "beyond the syllabus" at the top right. Task strip: "Find the slip." Givens grouped: "4-pole motor", "f = 50 Hz", "rotor: 1425 rev/min". On "fifteen hundred revolutions per minute" a greyed line "n_s = 120f / p = 120 × 50 / 4 = 1500 rev/min (field)". On "synchronous speed" label "synchronous speed = the field's speed". On "minute" "slip = 1500 − 1425 = 75 rev/min". On "five percent" "75 / 1500 × 100 = 5.0%". On "motor" tag "typical: a few percent".

### 9. a way to picture slip
> Here's a way to picture slip. Think of a sailing boat going straight downwind. The wind pushes the sail only while the boat is slower than the wind. If the boat ever matched the wind's speed, the air around the sail would be still, and the push would vanish. So the boat always sails a little slower than the wind. The rotor is the boat, and the turning field is the **wind**.

Visual: board clears to the sailing panel: a coded boat silhouette with a square sail (no figures), fixed-length grey wind arrows behind it, and a short arrow at the sail "relative wind". On "slower than the wind" the boat moves right more slowly than the wind arrows; the relative-wind arrow is long and the sail bulges. On "matched the wind's speed" a ghost boat at the wind's speed: the relative-wind arrow shrinks to zero and the ghost sail hangs slack (tag "no relative wind, no push"). On "a little slower" the solid boat settles just behind the wind arrows with a small relative-wind arrow. On "wind" labels "boat = rotor", "wind = rotating field", "relative wind = slip". Hold about 2 seconds.

### 10. versus the DC motor
> Compare this with the DC motor. Both turn because currents in a field feel forces. But in the DC motor, the current is fed into the coil through brushes, and a split ring reverses it every half turn. In the induction motor, the current is induced, and the field itself turns. So there are no brushes, no split ring and no sparks to wear things out. That's why induction motors run fans, pumps and washing machines for years with little **maintenance**. The price is slip. A DC motor's rotor doesn't need to lag behind **anything**.

Visual: board change to a two-column comparison: "DC motor" (v16's motor model icon) and "induction motor" (stator ring and cage icon). On "currents in a field feel forces" a shared row across both "torque: motor-effect forces on currents in B". On "fed into the coil through brushes" left row "current supplied: brushes + split ring"; on "the current is induced" right row "current induced: rotating field, no contact". On "no sparks" right row "no brushes or split ring to wear". On "maintenance" small grey chips "fans", "pumps", "washing machines". On "slip" right row "needs slip"; on "anything" left row "no slip needed".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Explain why the rotor of an AC induction motor can never rotate at the same speed as the stator's rotating magnetic field. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Explain why the rotor of an AC induction motor cannot rotate at the same speed as the rotating magnetic field produced by its stator. (3 marks)" A small coded diagram: the stator ring with its dashed field arrow and the end-on cage rotor (no currents, no forces drawn). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> If the rotor matched the field's speed, there'd be no relative motion between them. The flux through the rotor's loops wouldn't change, so no emf would be induced, no current would flow, and there'd be no **torque**. The rotor would slow down until the slip, and the torque, **returned**. The classic slip is blaming friction. Even with no friction, there'd be no torque at the field's **speed**.

Visual: card shrinks to the top; "cannot rotate at the same speed" underlines. The chain builds on the diagram's right: on "torque" "same speed → no relative motion → Φ through rotor loops constant → ε = 0, I = 0 → no torque"; on "returned" "→ rotor slows → slip → torque returns". On "speed" a chip "friction stops it reaching the field's speed" fades in and is crossed (caption "no relative motion, no torque, friction or not"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. An induction motor runs at a steady speed. The load on it is increased. Explain what happens to the rotor's speed, the slip, and the current induced in the rotor. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "An AC induction motor is running at a steady speed. The load on the motor is then increased. Explain what happens to the rotor's speed, the slip and the current induced in the rotor. (3 marks)" No diagram needed. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The heavier load slows the rotor, so the slip **increases**. The field sweeps past the bars faster, so the flux changes faster, inducing a bigger emf and a bigger rotor **current**. That gives a bigger torque, and the rotor settles at a lower speed, with more slip. The slip here is saying the rotor speeds back up to its old **speed**. It can't. It needs the extra slip.

Visual: card shrinks to the top; "load on the motor is then increased" underlines. The chain builds: on "increases" "load ↑ → rotor speed ↓ → slip ↑"; on "current" "→ faster flux change → ε ↑ → I (rotor) ↑"; on "lower speed" "→ torque ↑ → steady at a lower speed". On "speed" a chip "the rotor speeds back up to its old speed" fades in and is crossed (caption "more torque needs more slip"). Hold about 1 second.

### 15. handoff
> So the rotor must lag, because only a field sliding past it induces the currents that push it. In the motor, the field moves and drags the metal along. Now flip it round. Hold the magnet still, and move the metal through the field instead. Here's a copper plate swinging between the poles of a magnet. It's the same relative motion, so the same kind of currents are induced. And they still oppose the relative motion, so now they drag the moving metal **back**. A brake, with no contact at all. How does it **work**?

Visual: board clears (camera change). On "the field moves and drags the metal along" a small recap: the stator ring, the dashed field arrow and the rotor turning, an amber arrow "dragged along"; it shrinks to the upper left. On "Hold the magnet still" a coded field region appears at the centre (a square of slate crosses, "B into the screen: magnet poles in front of and behind the plate"). On "copper plate swinging" the copper pendulum plate (`y12p-copper-pendulum-v1.png`, specified in v20's brief) hangs from a coded pivot at the top and swings in from the left towards the field region (amber outline motion arrow). On "same kind of currents" a faint rose loop appears on the plate's leading edge as it enters the field. On "back" a dashed amber arrow "F = ?" on the plate pointing against its motion. On "no contact" a navy bracket between the plate and the field region's edge "no contact". On "work" a "?" and a chip "Next: how can a moving conductor be braked without contact?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Stator coils carry AC out of step, so the field's direction rotates (one coil alone only pulses). Its speed is set by the supply frequency.
2. Squirrel-cage rotor: bars joined by end rings (closed loops), no connection to the supply.
3. The field sweeps past the bars, the flux through the loops changes, so emfs and currents are induced (Faraday). The currents in the field feel forces; by Lenz's law they drag the rotor along with the field.
4. At the field's speed: no relative motion, no flux change, no current, no torque. So the rotor always lags: slip is necessary.
5. More load: more slip, more rotor current, more torque, at a lower speed.
6. Versus DC motor: induced not supplied current; rotating field instead of split ring; no brushes.

Memory aid (large, on the notes screen): *No slip, no grip.*

## Teaching checks

- **Does it explain causes?** Why the field turns: coils peak in turn (2). Why the rotor carries current: the field sliding past changes the flux through its loops (4). Why it turns with the field: Lenz's law and the motor effect (5). Why it must lag: no sliding, no current, no torque (6). Why load increases slip and current (7). Why induction motors need little maintenance (10).
- **Misconceptions addressed:** friction causes the lag (1; crossed in 12); one AC coil makes a rotating field (2); the rotor is connected to the supply or uses slip rings (3); the induced forces push the rotor against the field (5); slip is a defect (6); the rotor returns to its old speed under load (7; crossed in 14; site note 1); induction motors use a commutator (10).
- **One idea at a time:** observation (1), rotating field (2), rotor (3), induction (4), force (5), lag (6), load (7), numbers (8), picture (9), comparison (10).
- **Video makes it easier:** the two speed readouts with the slipping marks (1); the offset sines and the chasing lights (2); the loops traced on the cage plate (3); field lines sliding across the rotor and freezing in the what-if (4, 6); the bar currents and forces growing with load (7); the sail going slack at the wind's speed (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 27 s.
- **Avoided double teaching:** v07's motor effect, v10's Faraday's law, v11's Lenz's law and memory aid, v16 and v17's DC motor recalled in clauses.
- **Syllabus coverage:** `P6-IQ4-02` AC induction motors (1 to 10); generators in v18.
- **Out of scope by design:** three-phase winding design and phase diagrams, torque-slip curves, synchronous motors, starting methods for single-phase motors, magnetic braking (v20).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Explain why the rotor of an AC induction motor cannot rotate at the same speed as the rotating magnetic field produced by its stator."
Model answer: The rotor's currents are induced (Faraday's law) only when the magnetic flux through the rotor's conducting loops changes, which requires relative motion between the rotating field and the rotor. If the rotor turned at the same speed as the field, there would be no relative motion, the flux through the rotor loops would be constant, and no emf, no rotor current and no torque would be produced. Friction and any load would then slow the rotor, restoring relative motion (slip) and hence torque, so the rotor always turns slightly slower than the field. Classic mistake (crossed): "friction stops it reaching the field's speed".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks).** "An AC induction motor is running at a steady speed. The load on the motor is then increased. Explain what happens to the rotor's speed, the slip and the current induced in the rotor."
Model answer: The increased load torque slows the rotor, so the slip (the difference between the field's speed and the rotor's speed) increases. With greater relative motion, the field sweeps past the rotor bars faster, so the flux through the rotor loops changes faster, inducing a larger emf and a larger rotor current (Faraday's law). The larger current in the field produces a larger torque, and the rotor settles at a new, slightly lower steady speed with greater slip, where the torque matches the load. Classic mistake (crossed): "the rotor speeds back up to its old speed".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook and worked example (site, unchanged) | 4 poles, 50 Hz: field 1500 rev/min; rotor 1425 rev/min | 1, 6, 8 |
| Slip (site worked example) | 1500 − 1425 = 75 rev/min; 75/1500 × 100 = 5.0% | 8 |
| Formula (beyond the syllabus, greyed) | n_s = 120 × 50 / 4 = 1500 rev/min | 8 |
| Load scene | illustrative readouts only (no values) | 7 |
| Not used (site Q1, checked) | 1500 − 1440 = 60; 60/1500 = 4.0% | |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 120 × 50 / 4 = 1500; 1500/60 = 25 revolutions per second; 1425/60 = 23.75.
- 1500 − 1425 = 75; 75/1500 = 0.050 = 5.0%.
- Site checks: 120 × 50 / 2 = 3000; 1500 − 1440 = 60; 60/1500 = 4.0%.

## Memory aid check

- **Sailing boat straight downwind (scene 9).** Meaning: a boat pushed by the wind gets a force only while the wind moves past the sail; at the wind's speed the relative wind is zero and the push vanishes, so the boat always moves a little slower than the wind. Assumptions checked: straight downwind with a square sail (no lift, no tacking, no angled sailing, which can exceed wind speed); steady wind; the boat has some drag, as the rotor has friction and load. The mapping is exact in the essentials: the push depends on relative motion; matching speed removes it; more drag means a bigger speed difference, as more load means more slip. Limits stated in the narration's framing ("going straight downwind"). No figures on the boat.
- **"No slip, no grip."** (key notes only, not narrated). Meaning: without slip there is no relative motion, so no induced current and no torque. Assumptions: an induction motor in normal operation; "grip" means torque on the rotor. It is a summary of scene 6, introduced after the explanation; it helps A1 directly.
- **Considered, not used:** a stadium wave for the rotating field (people as the moving parts; owner rule against people and character metaphors), "chasing your tail" (no physics).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,300 characters**, 16 scenes. Characters per scene (1 to 16): 540, 606, 284, 385, 480, 597, 386, 437, 372, 523, 155, 384, 194, 359, 508, 75. At 13.3 characters per second the speech is about 474 s; add about 3 s for the prediction countdown, 2 s for the what-if, 2 s for the sailing hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 86 s of holds and countdowns): **about 560 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8 (open decision 1); scene 9; scene 5's last two sentences.

## Opening frame

v18's final frame (designed in this wave, `phys-y12-m6-v18.md`): paper background; two small chips at the upper left "generator: turning → current" and "motor: current → turning"; at the centre a coded ring of six grey stator coils with a dashed slate field arrow across the middle, rotating; inside it the squirrel-cage rotor plate, end-on, with an index mark turning slightly behind the field arrow; a navy bracket "no wires to the rotor"; a "?" between the field arrow and the rotor's mark; heading "How do simple AC and DC generators produce different outputs?"; chip "Next: why must an induction-motor rotor lag the rotating field?". Scene 1 turns the chip into the heading, fades the two small chips and adds the speed readouts.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a small recap at the upper left (stator ring, rotor, amber "dragged along" arrow); at the centre a square field region of slate crosses ("B into the screen"); the copper pendulum plate hanging from a coded pivot, its leading edge just inside the field region, an amber outline motion arrow pointing into the region; a faint rose loop on the plate's leading edge; a dashed amber "F = ?" arrow on the plate pointing against the motion; a navy bracket "no contact"; a "?"; heading unchanged ("Why must an induction-motor rotor lag the rotating field?"); a chip reads "Next: how can a moving conductor be braked without contact?". v20 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v19` (route phys-y12-m6-v19). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v19` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v19` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, rotating-field, cage-rotor, induced-currents, drag-along, why-lag, heavier-load, typical-numbers, sailing-picture, versus-dc, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: stator ring (offset sines, resultant arrow, chasing-lights mode), cage rotor (plate and end-on coded rotor), sliding-field overlay, speed readouts, force arrows, what-if, load arrow, sailing panel, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue (rotor fades, ring fills); 2 to 3 camera change (plate); 3 to 4 camera change back into the ring; 4 to 5 to 6 to 7 camera continue; 7 to 8 clear change (working layout); 8 to 9 clear change; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), what-if (2 s), sailing picture (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v19-learning-review.md`, `science_check` = `checks/p-y12-m6-v19-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-desk-fan-v1.png` (1199 × 1312) and `phys-y11-desk-fan-blades-v1.png`: 1 (one sentence).
- `y12p-copper-pendulum-v1.png` (specified in `phys-y12-m6-v20.md`): the handoff (15).

Need (new plate, Codex):
1. `y12p-squirrel-cage-rotor-v1.png`: 3 (side view, large); end-on use in v18's final frame and scene 1 is coded over a small version or uses the coded rotor (build choice). Essential.

Coded: the stator ring, coils, offset sines, resultant arrow, chasing lights, end-on rotor, field lines, bar currents, forces, readouts, what-if, load arrow, working strips, sailing panel, comparison columns, field region and handoff arrows, crossed chips, attempt cards and diagram, countdowns, key notes board.

Kit gaps (for the v19 build brief):
1. **Stator ring with rotating field.** Three coil pairs with offset sinusoidal fills, a resultant arrow turning at a set rate, a single-pair "pulsing" mode, and a chasing-lights mode.
2. **End-on cage rotor with sliding-field overlay.** Bars round the rim, induced bar currents (dots and crosses) placed by the field's position, tangential force arrows, an index mark, and field lines whose motion relative to the rotor equals the slip (freezing when slip is zero).
3. **Sailing panel.** A coded boat with a square sail, fixed wind arrows, a relative-wind arrow and a sail bulge that both scale with (wind speed − boat speed).

## Codex asset brief (Year 12 Physics M6 v19: squirrel-cage rotor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m6-v19.md`, route entry phys-y12-m6-v19. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-solenoid-coil-v1.png` and `phys-y11-low-voltage-supply-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-squirrel-cage-rotor-v1.png` (1600 × 1000 px): the conducting cage of an induction-motor rotor on its own, **without the laminated iron core**, so the structure is clear: about twelve straight, evenly spaced aluminium-coloured bars running parallel to the axis, joined at each end by a solid aluminium end ring, with a plain steel shaft passing through the centres of the end rings, joined to them by simple solid painted hubs (no thin spokes). Seen from the side at a slight elevation, axis horizontal, so the bars read as a cage and the far bars are partly visible between the near ones. Codex reports, in plate pixels: the axis line (two points), the centres of the two end rings, and the outline of one pair of neighbouring near-side bars with the end-ring segments joining them (for the coded loop overlay).

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm that the end rings and bars read as one closed cage. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m6-v19-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the rotating field from out-of-step AC in spaced coils (one coil alone pulses); speed set by the supply frequency; the cage as closed loops with no connection; induced rotor currents from the field sweeping past; force direction from Lenz's law (rotor dragged along with the field); no torque at the field's speed; slip necessary; load increases slip, rotor current and torque at a lower speed; typical slip of a few per cent; the sailing analogy's limits; the DC motor comparison.
3. Confirm scene 8 is tagged "beyond the syllabus" and that no attempt relies on n_s = 120f/p.
4. Confirm the memory aids' assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the boat has no figures; no people in analogies).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log the two site notes in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: AC Induction Motors: Why the Rotor Must Lag (Slip) | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson16.sa.html

An induction motor's rotor is connected to nothing, yet a turning magnetic field drags it round, and it never quite catches up. See how stator coils make a field that turns, how that field induces currents in a squirrel-cage rotor, why Lenz's law makes the rotor follow the field, why it must always lag (slip), and what happens when the load increases. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the operation of simple DC and AC generators and AC induction motors"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how simple AC and DC generators produce different outputs. Next: how a moving conductor can be braked without contact.

#HSCPhysics #Physics #InductionMotor #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v18; check that the chasing lights make the rotating field believable without phase detail; that the Lenz direction (dragged along) is clear at speed; that the what-if freezing of the field lines makes the lag necessary rather than asserted; that the sailing picture helps rather than distracts; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The slipping readouts, the sliding field lines over the rotor, the what-if freeze and the sailing panel carry the explanation; judge them at playback speed in the voiced preview.
