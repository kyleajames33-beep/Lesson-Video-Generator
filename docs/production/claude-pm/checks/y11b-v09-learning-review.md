# y11b-v09 learning review

Revision 1, reviewed 2 November 2026. Design SHA256 `2aa096b78d433be46dc0068500ac592253e607707d6eda8533179041dbab234f`. Full written design, current L08 source, v08 final frame and root decisions inspected. Source-only review: no implemented simulation, plates, continuous playback or audio inspected. Human listening remains pending.

## Learner trace

Main question: why do substances move across a membrane without the cell spending energy, and when is a protein needed? Entry is Stage 5 particle motion and solutions, plus v08's hydrophobic core, channels and carriers. The learner must distinguish individual random crossings from their net result and transfer that cause to the three passive routes.

The gap-box prediction earns a direction without assigning intentions to particles. More particles on one side gives more opportunities to cross, while crossings still occur both ways. Net movement, gradient and passive are then defined against that same example; equilibrium keeps motion rather than freezing it. The oxygen case explains why using a substance can maintain a gradient, and the osmosis case defines solute/solvent before requiring a water-direction prediction. Aquaporins prevent the false inference that water crossing is incompatible with a hydrophobic core. The reversed glucose gradient and finite-carrier comparison explain both passive movement and saturation.

The longest scene introduces several terms, but each attaches to an already visible change in one example. A new scene is not required from the written proposal alone. Preserve the small reverse-crossing case and the equal-concentration motion when reducing text. The science check owns the exact osmosis mechanism and any limitations of a concentration-only ion rule; the learning review does not replace those physical checks.

## Findings

1. **Should fix:** Scene 3 makes the net-arrow length equal cumulative rightward crossings minus cumulative leftward crossings, yet requires that arrow to disappear at 23 particles on each side. Starting at 40 and 6, the cumulative difference is still 17 when the sides first reach 23 and 23. A learner would see a nonzero quantity labelled as zero net movement. Keep the cumulative counters as real totals, but drive the arrow from crossings in a recent fixed-duration window and label it net rate. Alternatively reset and label both counters per equal observation interval. At equilibrium the finite-window rate fluctuates around zero; do not force precisely equal counters on every frame. This is a visual/state correction with no additional narration. Evidence arithmetic is in `work/brief147/v09/learning-evidence.json`.

2. **Should fix, apply root decision 6:** The hook and asset list still specify blue food-colouring stages and a separate dye pair, while the accepted decision requires v09 and v10 to use the same permanganate beaker set. Use that set's early and late stages with matched colour, apparatus and time labels, and replace the hook's food-colouring reference with the corresponding purple-crystal wording. Keep it a preview rather than a full method. Match the handoff thumbnails and v10 opening to those same assets. This replaces the existing hook wording and plates; it does not add a scene, new investigation or new plate commission.

## Practice, memory and continuity

The three-case classification card preserves the substance, route and relevant concentration information without showing a solved process label. Identifying a process and giving a reason are both retained. The graph card shows the observed plateau as given data, not an answer leak: the student still explains finite carriers and compares simple diffusion. It does not need an ATP-use calculation. Brief feedback names the mechanism, then removes the classic misconception that using a protein alone makes a process active.

A door is not an engine is useful after the passive carrier explanation; it must remain scoped to facilitated diffusion because later pumps do use energy. Gradient sets direction, substance decides route is likewise a passive-transport rule. Water towards sugar remains attached to this example's solute-blocking membrane, not a rule for every sugar or membrane.

v09 opens on v08's actual strip, completed parts rail, two step chips, crossing particles and next-video chip. Root decision 16 restores that handoff after the quiet notes, so no false mismatch is raised from the existence of a notes scene. The v09 final table, chips and two bench thumbnails match the planned entry to v10, subject to the shared-beaker correction above. No named tonicity outcomes or pump mechanism are taught before their videos.

The written animation plan uses counted motion, maintained oxygen gradients, reversible carrier states and a saturation graph for explanation. Actual timing, legibility and random-walk honesty remain build checks. Fixed seeds are acceptable; manually scripting crossings while presenting them as simulation is not.

Count: 0 blockers, 2 should fix, 0 optional. Recount: 5,577 separate-scene characters, 5,591 joined with spaces, 15 scenes. Design estimate about 540 seconds. Both repairs replace existing states/text and need no extra narration. No design edits, artwork, code, speech, renders or commits.
