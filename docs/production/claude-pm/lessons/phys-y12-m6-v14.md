# Year 12 Physics M6 V14: Real transformer losses. Why are real transformers less efficient than the ideal model? (design)

Status: Revision 2 (7 Nov 2026): brief 190 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,841 characters, 16 scenes, about 513 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v13's final frame.

Scope: fourteenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md` and `phys-y12-m6-v12.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson15.sa.txt`, hash checked against the live file; sections as listed in `phys-y12-m6-v13.md`): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v14`, sections `analyse-real-efficiency` and `extend-coupling-limits`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Trace copper heating, incomplete flux linkage and eddy-current heating; explain laminations and design choices. Stop before transmission system arithmetic." Next: "phys-y12-m6-v15: Why does stepping voltage up reduce transmission loss?"

Owner rules applied: as v07 and v12 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: no hand touches the warm transformer, a coded warm tint and a coded thermometer readout show heating; the transformer and the lamination sheets are painted plates; the core cross-sections, eddy loops, flux lines, leakage lines, power bars and calculation strips are coded; every number recalculated in Python; data-sheet symbols; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v13 (the ideal model and its three assumptions, V_pI_p = V_sI_s, the worked-example transformer), v10 (Faraday's law), v11 (Lenz's law), v12 (the iron core concentrates and guides the flux), Year 11 (P = I²R for heating in a resistor; resistance grows with length and falls with cross-sectional area).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-04`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-04`: "evaluate qualitatively the limitations of the ideal transformer model and the strategies used to improve transformer efficiency, including but not limited to:" "incomplete flux linkage", "resistive heat production and eddy currents"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v13's final frame (the worked-example transformer with "P_in = 115 W", "P_out = 115 W (ideal)" and question marks over the ideal card). Teaches: a real transformer with the same supply delivers less (example values: 115 W in, 104 W out, about 90%); efficiency η = P_out/P_in × 100%; each loss breaks one ideal assumption; resistive (copper) heating, P = I²R, largest in the high-current winding, reduced by thicker wire, with cooling to carry the heat away; eddy currents (the core is a conductor, the changing flux induces swirling currents in it, they heat it); lamination (thin insulated sheets along the flux confine each loop to a thin sheet: smaller loops, less emf, more resistance, far less heating); hysteresis (reversing the iron's magnetism each cycle costs energy; soft iron reduces it); incomplete flux linkage (some flux leaks round the air and misses the secondary, so its voltage is lower than the turns ratio predicts; a closed core and windings on top of each other reduce it); the judgement: the ideal model is a good approximation for large transformers (very efficient, well above 90%); the "three Cs" aid. Stops before transmission lines and I = P/V arithmetic (v15).

## Decisions

- **Learner question (route wording kept).** "Why are real transformers less efficient than the ideal model?" is causal. The answer, built in order: each of the model's three assumptions fails a little (2); current in resistive copper heats it (3); the changing flux induces currents inside the iron core that heat it (4), plus the energy to keep re-magnetising the iron (6); and not all the flux reaches the secondary (7). Each has a matching design fix (3, 5, 6, 7, 8).
- **Hook (continues v13's worked example; original measurement, example values).** The same supply and lamp on a real transformer: the input meter reads 115 W, the output 104 W, and the transformer is warm (coded warm tint, coded thermometer tag, no hand). "Where did eleven watts go?" Efficiency 104/115 = 0.904, about 90%, defined here (site "AC, switched DC and ideal limits": η = P_out/P_in). Example values are tagged; a small transformer near 90% is plausible (author note a).
- **Structure: one assumption per loss (site "Evaluate 6 marks": "state what the model assumes, take each assumption that fails in turn with the strategy that addresses it").** v13's ideal card returns and each item is crossed and paired with its loss and fix as the video proceeds. This follows the site's HSC tip ("name the loss and the countermeasure in the same breath").
- **Copper heating (syllabus "resistive heat production"; site loss 1 and Evaluate step 4).** P = I²R from Year 11. Example values (original, tagged): secondary 10 A through 0.050 Ω: 5.0 W; primary 0.50 A through 4.0 Ω: 1.0 W. The point, tied to these example values (Revision 2, brief 190): here the high-current winding loses more even with far less resistance, because the current is squared, so it gets the thicker wire (site: "which is why the high-current side gets the thickest windings"). The learner copy does not claim that the high-current winding is the worst in every transformer; resistance matters too. Cooling (oil, fins) named as removing the heat, not reducing the loss (author note b).
- **Eddy currents and lamination (syllabus "eddy currents"; site loss 2).** Faraday's law in the core itself: picture a loop inside the iron round the flux; the changing flux induces an emf round it; iron conducts, so current swirls; Lenz: it opposes the change; the iron heats. Lamination: thin sheets, insulated from each other, lying along the flux, so the flux is not blocked but each swirl is confined to one thin sheet: a smaller loop links less flux (smaller emf) and has a narrower, longer path (more resistance). The narration gives one quantitative surprise, "about a hundred times less" for sheets ten times thinner, said as "in a simple model" (author note c, open decision 1).
- **Hysteresis (site loss 4; syllabus "including but not limited to").** One short scene: AC reverses the iron's magnetism a hundred times every second (50 Hz), each reversal costs a little energy, which becomes heat; soft iron is easy to magnetise and demagnetise, so it wastes less. Kept short because the syllabus does not name it but the site and many exams do.
- **Incomplete flux linkage (syllabus; site loss 3 and extension section).** Leakage lines loop through the air near the primary and miss the secondary, so the secondary's emf is less than the turns ratio predicts, especially under load. The narration says honestly that this one is not mainly heat: it makes the transformer deliver less than the model predicts (author note d; site note 2). Fixes: a closed core with no gaps, made of soft iron, and the secondary wound on top of the primary (site Evaluate step 3). The v12 air-core comparison is recalled in one clause.
- **Judgement (syllabus verb "evaluate"; site Evaluate step 6).** Large network transformers are very efficient ("well above ninety per cent", root decision 10 fallback, Revision 2; a scoped verified example appears as a screen tag, author note e), so the ideal ratios predict well; the model cannot describe heating, the drop in output voltage under load or the hum. Judgement on screen: "good approximation, with known limits".
- **Memory aid (scene 9): "Copper, core, coupling."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): explain how laminating the core improves efficiency. Crossed: "laminating increases the flux linkage" (the site's own odd-one-out distractor). A2 (3 marks): 230 V, 2.0 A in; 23 V, 19 A out: efficiency 95%, 23 W lost, name a loss. Crossed: "η = P_in/P_out = 105%".
- **Significant figures.** Example values to two or three significant figures (104 W, 90%, 95%).
- **Handoff (route next).** Scene 15 links copper heating to the grid: "the same I squared R heating happens in power lines hundreds of kilometres long"; the board becomes the power station, two towers and a house with a long coded line, "R_line" and "P_loss = I²R ?". See "Final frame".
- **Colour key (root decision 1):** primary current orange; flux slate; secondary current and induced emf rose; eddy currents rose (they are induced); heat a warm amber-red tint; power bars amber; the core grey; insulation between sheets pale cream.
- **Colour key (Revision 2, fixed for every scene).** As above, plus: efficiency and the loss slice amber; I²R values in the colour of the winding they belong to (primary orange, secondary rose); domain arrows grey with warm pulses; leakage lines slate dashed; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scene 2's efficiency line and the feedback rows 52 px; framed results 60 px); live readouts (scene 1 meters, scene 3 current slider and I²R readouts, scene 5 sheet slider and eddy-heating readout) about 52 px; loss-table rows 40 px; supporting lines, givens strips and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The delivered painted transformer `y12p-transformer-v1.png` (inspected) slides in beside v13's final schematic in scene 1 and stays as a 360 px reference through scene 2; the delivered `y12p-lamination-sheets-v1.png` (inspected: E sheets and I strips with insulated edges) carries scene 5; the power station, towers and house carry the handoff.
- **Simulation (Revision 2).** The core live control is scene 5's sheet slider on the core slice: n = 1, 2, 5, 10 sheets in the same block, the eddy loops splitting and the live readout "eddy heating (simple model)" 100%, 25%, 4%, 1% of the solid core, with the heat tint following. Scene 3 adds a secondary-current slider (5.0 A to 10 A: I²R in 0.050 Ω from 1.25 W to 5.0 W, "× 2 current → × 4 heat"); scene 6 a live reversal counter at 50 Hz.
- **Stage changes (Revision 2; high-risk redesign).** Revision 1 kept the schematic for scenes 1 to 3 (about 115 s) and one core slice for scenes 4 to 6 (about 96 s). Now: scene 1 the schematic with the painted transformer; scene 2 a clear change to the efficiency board (large meters and bars, ideal card); scene 3 a push to the windings close-up with the current slider; scene 4 the core slice; scene 5 the lamination stage with the plate and the sheet slider; scene 6 a clear change to a magnified iron grain with domain arrows; scene 7 the schematic with leakage lines; scene 8 the loss table. No set-up runs past about 60 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a small diagram in one move. On the answer side the card shrinks to the top, a givens strip lists the data, a diagram shows the answer, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 15: real-efficiency card (four losses, HSC tip, summary) (3 to 8); odd one out "Laminating the core increases flux linkage" (A1 crossed); extension: air-core versus iron-core table and key insight (7, recalled from v12); "AC, switched DC and ideal limits" (η, 2); Activity 2 parts (a) to (c) (8); "Evaluate 6 marks" (structure, assumptions, fixes including oil and fins and winding the secondary over the primary, the judgement) (2 to 8, 10); Q2 (c) "the missing 0.8 MW" as a screen check in scene 2 (0.96 × 20 MW = 19.2 MW). Not used: transformer ratio calculations (v13), the battery case (v12).
- **Site notes (quoted from site lesson 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Unsupported figure (lesson 15, "Evaluate 6 marks" step 6): "large power transformers routinely exceed 98 per cent efficiency". Plausible but unsourced. Suggest citing a source, for example the Australian MEPS for distribution transformers (AS 2374.1.2, efficiency at 50% load) on energyrating.gov.au.
  2. Precision note (lesson 15, real-efficiency card): "Three main energy losses reduce efficiency. ... 3. Incomplete Flux Linkage" lists leakage as an energy loss. Leakage flux mainly lowers the secondary voltage under load (the model's prediction fails); it causes heat only indirectly (stray fields can induce currents in nearby metal). Suggest "Incomplete flux linkage: some flux misses the secondary, so the output is less than the ideal model predicts".
  3. Wording note (lesson 15, Q2 (c) model answer): "The missing 0.8 MW is transferred to the surroundings through copper heating, eddy currents, hysteresis and flux leakage". Same point as note 2; suggest "mainly through copper heating, eddy currents and hysteresis".
  4. Checked and correct: Q2 (8000 turns, 50 A, 19.2 MW); the four losses and their fixes; odd one out (laminating does not increase flux linkage).
- **Cause chain taught, in order:** (1) a real transformer delivers less power than it takes in, and warms up (1); (2) each ideal assumption fails a little (2); (3) current in the windings' resistance heats them, P = I²R (3); (4) the changing flux induces swirling currents in the conducting core, which heat it (4); (5) thin insulated sheets confine those currents to small, high-resistance loops (5); (6) reversing the iron's magnetism costs energy each cycle (6); (7) some flux misses the secondary, so its voltage is lower (7); (8) each fix targets one cause (8).
- **Entry knowledge (route `entryKnowledge`):** v13's ideal model; v10 Faraday's law; v11 Lenz's law; v12 the iron core; Year 11: P = I²R, resistance and wire thickness, power as energy per second.
- **Learner-visible vocabulary (plain meaning at first use):** efficiency (the fraction of the input power that comes out as useful output, 1); resistive or copper loss (heating in the windings' resistance, 3); eddy currents (swirling currents induced inside a solid conductor, 4); lamination, laminated core (a core made of thin sheets insulated from each other, 5); hysteresis loss (energy used each time the iron's magnetism is reversed, 6); flux leakage, incomplete flux linkage (flux that misses the secondary, 7).
- **Legacy logic ported:** none. The coded families `m6-transformer-grid` (schematic, power ledger) and `m6-eddy-brake` (induced circulation in a conductor; its drag arrow is not used) supply the starting parts; lamination geometry is new (the eddy family's limits say "no lamination geometry").
- **New explainer motion:** **transformer with losses** (v13's schematic plus a warm tint per part, leakage lines, a two-meter power ledger P_in and P_out with a loss bar that splits into labelled slices); **core cross-section** (a coded slice of the core at right angles to the flux, flux as slate dots "out of the screen", one large rose eddy loop with current arrows and a heat tint; then the same slice divided into thin sheets with cream insulation lines, many small rose loops, the heat tint fading); **lamination zoom** (from the painted transformer plate's lamination edges to the coded cross-section); **magnetisation flip** (a small grid of coded domain arrows in the iron reversing with the AC cursor, a warm tint pulse each flip); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the transformer or cross-section across the upper middle; the ideal card and power ledger to the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Example values: 115 W in, 104 W out (η = 0.904). Small laminated transformers of about 100 W are typically 85% to 95% efficient; the values are tagged "example values".
  (b) Cooling (oil, fins, fans) lowers the winding temperature, protecting insulation and slightly lowering copper resistance; it does not by itself remove the cause of the loss. Narration: "carries the heat away".
  (c) Classical eddy-current loss per unit volume in a thin sheet is proportional to B²f²t²/ρ (t the sheet thickness), so for the same total volume, sheets ten times thinner give about one hundredth of the eddy loss. The narration says "in a simple model, about a hundred times less" (open decision 1). Laminations lie parallel to the flux; the insulating layers do not lie across the flux path, so they barely affect the field. Silicon steel (higher resistivity) also reduces eddy loss; not taught.
  (d) Leakage flux gives leakage reactance: the secondary voltage falls under load and the ideal ratios fail; stray flux can heat the tank and clamps. The narration says "This one isn't mainly heat."
  (e) Efficiency source (Revision 2, brief 190 should fix): Australian MEPS for distribution transformers (Greenhouse and Energy Minimum Standards (Power Transformers) Determination 2012, using AS 2374.1.2-2003, efficiency at 50% rated load; https://www.energyrating.gov.au/industry-information/products/distribution-transformers). Codex verified that the oil-immersed minima are 98.28% to 99.40% at 50% rated load, but some dry-type minima are below 98%, and the tables cover distribution units of 10 to 2500 kVA on 11 and 22 kV networks, not every network transformer at every load. Revision 1's "all table values above 98%" is withdrawn. The narration now uses root decision 10's fallback "well above ninety per cent"; the screen tag gives only the scoped, verified example ("Australian minimum for oil-filled distribution transformers at half load: 98.28 to 99.40%").
  (f) Hysteresis: 50 Hz AC reverses the magnetisation twice per cycle, a hundred reversals a second. The loss per cycle is the area of the hysteresis loop (not taught).
  (g) Pronunciations: "eddy"; "lamination", "laminated"; "hysteresis" (hiss-ter-EE-sis); "I squared R".
- **Open decisions for root:**
  - **1. "About a hundred times less" (scene 5) (science check).** True for classical eddy loss with ten times thinner sheets at the same total volume (author note c). Keep, or cut to "far less heating".
  - **2. "More than ninety eight per cent" (scene 10) (root or Codex).** Closed in Revision 2: the narration uses "well above ninety per cent" and the screen tag carries the scoped, verified MEPS example (author note e).
  - **3. Hysteresis scene (6) (learning review).** Not in the syllabus examples; kept because the site teaches it. Cut if the voiced take runs long.
  - **4. New plate `y12p-lamination-sheets-v1` (Codex).** Closed in Revision 2: delivered in brief 190 and inspected.
Main question: *An ideal transformer wastes nothing. A real one gets warm. Where does the energy go?*
Entry knowledge: the ideal model (v13); Faraday's and Lenz's laws (v10, v11); the iron core (v12); P = I²R (Year 11).
Stops after: efficiency, copper heating and thick wire, eddy currents and lamination, hysteresis and soft iron, flux leakage and the closed core, the judgement. No transmission.
Handoff: v15, why stepping voltage up reduces transmission loss.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *η*, *P_in*, *P_out*, *I*, *R*.

### 1. hook (the missing watts)
> Here's our transformer from last time, twelve hundred turns to sixty, on two hundred and thirty volts. The ideal model said one hundred and fifteen watts in, and one hundred and fifteen watts out. Now try a real transformer, with the same supply and the same lamp. One hundred and fifteen watts go **in**. But only one hundred and four watts come **out**. And the transformer is **warm**. So where did eleven watts **go**?

Visual: opens on v13's final frame (see "Opening frame"); the chip becomes the heading: "Why are real transformers less efficient than the ideal model?". On "Now try a real transformer" the painted plate `y12p-transformer-v1.png` (about 360 px tall, uniform scale) slides in at the left of the schematic with the same coded leads, navy hand tag "real transformer, same supply" (the real device is what is measured; it stays through scene 2). Two coded meters (readouts 52 px) sit on its input and output leads. On "watts go in" the input meter and the P_in bar read "115 W" (tag "example values"). On "watts come out" the output meter reads "104 W" and the P_out bar drops from "115 W (ideal)" to "104 W". On "warm" the warm tint on the windings and core of both the plate outline and the schematic strengthens and a coded thermometer tag reads "warm"; red hand tag "warm = lost energy". On "where did eleven watts go" a gap bar "11 W ?" opens between the two bars and an amber pen ring circles it.

### 2. efficiency, and three assumptions
> We compare them with efficiency. Efficiency is the useful power out, divided by the power in. Here that's one hundred and four over one hundred and fifteen, about ninety per **cent**. Remember the three assumptions behind the ideal model. All the flux links both coils, the windings have no resistance, and no energy is lost in the core. A real transformer breaks each one, just a **little**. Let's find out how.

Visual: clear change to the efficiency board (a new set-up): the two amber bars large at the centre (115 W and 104 W, the 11 W gap shaded), the painted transformer at the left as a 300 px reference. On "Efficiency is the useful power out" an equation strip (44 px) "η = P_out / P_in × 100%". On "cent" `AlignedAlgebra` (52 px) "η = 104 / 115 × 100% ≈ 90%", the result in a dark-ink frame; amber hand tag "not 100%". On "Remember the three assumptions" v13's ideal card returns at the right with its three items (36 px). On "little" each item gets a small red "not quite" hand tag in turn, with a red pen tick-and-cross on each. Screen check (no narration, 3 s, 30 px): "site Q2: 96% of 20 MW = 19.2 MW out; 0.8 MW lost".

### 3. hot copper
> Start with the windings. They're long coils of copper wire, and real wire has resistance. Whenever current flows through resistance, it heats it. From Year 11, the heating power is I squared **R**. Double the current, and the heating goes up four **times**. Here's the surprise. The secondary carries ten amps. Even with a resistance of only zero point zero five zero ohms, it loses five point zero **watts**. The primary has much more resistance, four point zero ohms, but carries only zero point five zero amps, so it loses just one point zero **watt**. Because the current is squared, here the high-current winding loses more, even with far less resistance. So designers give it thicker wire, with less **resistance**. Big transformers also use oil and cooling fins, to carry the heat **away**.

Visual: camera push to the windings close-up (a new set-up): both windings of the schematic large, the ideal card small at the top right; card item 2 "no resistance in the windings" is crossed and re-labelled "copper (resistive) heating". On "it heats it" the windings glow faintly. On "I squared R" an equation strip (44 px) "P = I²R (heating in a resistance)". On "four times" a live current slider on the secondary (0.050 Ω) runs from 5.0 A to 10 A with readouts (52 px) "I = 5.0 A: I²R = 1.25 W" then "I = 10 A: I²R = 5.0 W"; rose hand tag "× 2 current → × 4 heat". On "watts" beside the secondary: "10² × 0.050 = 5.0 W" in a dark-ink frame (tag "example values"); the secondary winding glows more. On "watt" beside the primary: "0.50² × 4.0 = 1.0 W" in a dark-ink frame (orange). On "far less resistance" a chip "bigger R, so the primary loses more" fades in and is crossed in red (red hand tag "current counts twice"). On "resistance" the secondary winding redraws with thicker strands (same number of turns); tag "fix: thicker wire on the high-current side". On "away" small coded fins outline the core's sides and a tag "cooling: oil, fins (removes the heat)"; amber pen arrow from the fins outwards.

### 4. currents inside the iron
> Next, the core. Iron is a metal, so it conducts electricity. And the changing flux doesn't just pass through the windings, it runs through the iron itself. Picture a loop inside the iron, going round the flux. The flux through that loop is changing, so by Faraday's law, there's an emf around it. And because iron conducts, a current swirls round inside the core. These are called eddy **currents**. By Lenz's law they oppose the change, and they just heat the **iron**.

Visual: clear change to the core slice (a new set-up); card item 3 "no energy lost in the core" is crossed and re-labelled "core: eddy currents". On "the core" a camera push into one limb of the core; it becomes the core cross-section (a grey rectangle, about 600 px, cut at right angles to the flux), flux shown as slate dots "out of the screen" that grow and shrink with an AC cursor. On "Picture a loop inside the iron" a dashed rose loop draws round most of the slice. On "there's an emf around it" a rose tag "ε = −N ΔΦ/Δt (here N = 1)". On "currents" rose current arrows run round the large loop, switching direction with the AC cursor; label "eddy currents" and rose hand tag "swirls inside the iron". On "iron" the slice warms with a heat tint; tag "I²R in the iron" and a red pen ring round the hottest part.

### 5. laminations
> The fix is clever. Instead of a solid block, build the core from thin sheets of iron, each one coated with insulation. The sheets lie along the flux, so the field still runs **through**. But now each swirl of current is trapped inside one thin **sheet**. A thin loop goes round much less flux, so its emf is smaller, and its narrow path has more resistance. In a simple model, sheets ten times thinner cut the eddy current heating about a hundred **times**. That's why a real transformer core is **laminated**.

Visual: the lamination stage: the painted plate `y12p-lamination-sheets-v1.png` (about 380 px tall, uniform scale) sits at the left from the first frame, navy hand tag "real core sheets"; the solid slice at the right. On "thin sheets of iron" the solid slice divides into vertical strips with pale cream insulation lines between them. On "through" a side view inset shows slate flux lines running along the sheets (slate hand tag "sheets lie along the flux"). On "sheet" the large rose loop breaks and one thin rose loop appears in each strip. On "more resistance" one strip enlarges: a thin loop with a long, narrow path, tags "less flux inside → smaller ε" and "narrow path → more R". On "In a simple model" a live sheet slider under the slice steps n = 1, 2, 5, 10 sheets in the same block; the loops split to match and the readout (52 px) "eddy heating (simple model)" ticks 100%, 25%, 4%, 1% of the solid core while the heat tint fades. On "times" the slider rests on 10; amber hand tag "10 × thinner → about 1/100 (simple model)", framed. On "laminated" a navy pen arrow joins the coded slice to the plate's insulated edges; label "laminated core". Card item 3 gains "fix: laminate".

### 6. flipping the iron's magnetism
> There's one more loss in the core. With AC, the iron is magnetised one way, then the other, a hundred times every second. Turning the iron's magnetism around takes a little energy each time, and that ends up as heat too. It's called hysteresis loss. Soft iron is easy to magnetise and demagnetise, so it wastes less **energy**.

Visual: clear change to a magnified iron grain (a new set-up): a 6 × 4 grid of coded grey domain arrows fills the centre, with a slate AC trace strip under it. On "magnetised one way, then the other" the arrows flip direction with the AC cursor, about twice per visible cycle (slowed), and a live counter (52 px) "reversals: 100 every second (50 Hz)" ticks. On "takes a little energy each time" a small warm pulse at each flip; red hand tag "each flip costs energy". On "hysteresis loss" label "hysteresis loss". On "energy" tag "fix: soft iron (easily magnetised and demagnetised)"; the flips' warm pulses shrink; card item 3 gains "hysteresis: soft iron".

### 7. flux that misses
> The last assumption is that all the flux links both coils. In a real transformer, some of the primary's field leaks out through the air, and never reaches the **secondary**. This one isn't mainly heat. It means the secondary gets less flux than the model assumes, so its voltage is lower than the turns ratio predicts, especially under a heavy **load**. The fix is the closed iron core from video twelve, made with no gaps, and often the secondary is wound right on top of the primary, so they share almost all their **flux**.

Visual: camera change back to the schematic (a new set-up from scene 6); card item 1 "all flux links both coils" is crossed and re-labelled "coupling: flux leakage". On "leaks out through the air" a few slate dashed lines loop out of the core near the primary winding and close through the air without passing the secondary (slate hand tag "misses the secondary"). On "secondary" the secondary's per-turn tags dim slightly. On "lower than the turns ratio predicts" the secondary's voltage label "11.5 V (ideal)" changes to "a little less than 11.5 V" with a rose down arrow. On "load" a heavier load (two lamps) makes the label drop a little further. On "closed iron core" the core's corners pulse, tag "no gaps". On "flux" the schematic redraws with the secondary wound over the primary on the same limb (concentric windings, cut-away), the leakage lines shrink to almost none; tag "fix: closed core, windings on top of each other" and a slate pen ring round the shared limb. Card item 1 gains the fix.

### 8. each loss, its fix
> So here's the list. Each loss breaks one assumption, and each has its own fix. Heating in the copper windings, so use thicker wire. Eddy currents and hysteresis in the core, so use thin, insulated sheets of soft iron. And flux leakage, so use a closed core, with the coils wound together. In an exam, always pair the loss with the fix that targets **it**.

Visual: board change to a three-row table (rows 40 px, each with a small icon from its scene) built row by row on the spoken phrases: on "Heating in the copper windings" row 1 "copper: I²R in the windings → thicker wire (and cooling)"; on "Eddy currents and hysteresis in the core" row 2 "core: eddy currents → laminations; hysteresis → soft iron"; on "And flux leakage" row 3 "coupling: flux leakage → closed core, coils wound together". On "the fix that targets it" an "HSC tip" hand tag: "name the loss and its fix together", with a navy pen bracket joining each loss to its fix.

### 9. a way to remember
> Here's a way to remember the three. Copper, core, coupling. Copper is heat in the windings. Core is heat in the iron. Coupling is flux that never reaches the **secondary**.

Visual: the three row headings lift out into a framed memory card in hand lettering (52 px; the same card is reused on the notes screen): "Copper, core, coupling." Each word pulses as it is spoken, with a small icon linked to the schematic (the windings glow; the core slice with eddy loops; the leakage lines). On "secondary" the leakage lines flash once. Hold about 2 seconds.

### 10. how good is the ideal model?
> So is the ideal model wrong? Not really. Large transformers in the electricity network are very efficient, well above ninety per cent, so the turns ratio and power in equals power out still give very good **predictions**. What the model can't tell you is how hot the transformer gets, or how much the voltage drops under **load**. So it's a very good approximation, with known **limits**.

Visual: the schematic with the ideal card, all three items crossed with their fixes. On "well above ninety per cent" three bars: "ideal 100%", "large network transformers: well above 90%" (amber hand tag) and the small example transformer "about 90%"; a 30 px source tag under the middle bar: "e.g. Australian minimum for oil-filled distribution transformers at half load: 98.28 to 99.40% (MEPS)". On "predictions" the ratio and power equations tick. On "load" two chips "heating" and "voltage drop under load", each marked "not in the model" with a red hand tag. On "limits" a judgement chip in a dark-ink frame "ideal model: good approximation, known limits".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Explain how a laminated core improves the efficiency of a transformer. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and diagram in one move (question text 36 px), worded as printed: "Transformer cores are made from thin sheets of soft iron that are insulated from each other. Explain how this laminated construction improves the efficiency of a transformer. (3 marks)" A small coded drawing of a solid core and a laminated core side by side, no current loops drawn. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 12. feedback 1 (brief)
> The changing flux induces eddy currents in the iron core, and those currents waste energy as **heat**. Thin insulated sheets confine each eddy current to a small loop with a high resistance, so the currents are much smaller, and much less energy is **wasted**. The classic slip is saying laminating increases the flux linkage. It doesn't. It cuts the eddy **currents**.

Visual: card shrinks to the top; a givens strip (36 px): "thin sheets", "insulated from each other", "soft iron"; "insulated from each other" and "efficiency" underline. The answer-side picture (300 px): the solid and laminated slices side by side, one big rose loop beside ten small ones. On "heat" (44 px) "changing Φ in the core → eddy currents → I²R heating" and the solid slice glows. On "wasted" "insulated sheets → small loops, high R → small eddy currents → less heat" framed (52 px); the laminated slice's tint fades. On "currents" a chip "laminating increases flux linkage" fades in and is crossed in red (caption "laminations cut eddy currents"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A transformer draws two point zero amps from a two hundred and thirty volt supply. Its secondary delivers nineteen amps at twenty three volts. Calculate its efficiency, and identify one way the missing energy is lost. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and diagram in one move (question text 36 px), worded as printed: "A transformer draws a current of 2.0 A from a 230 V AC supply. Its secondary delivers 19 A at 23 V to a load. (a) Calculate the efficiency of the transformer. (b) Identify ONE way in which energy is lost in the transformer, and a design feature that reduces it. (3 marks)" A small coded transformer box with "in" and "out" leads, no values beside it. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Power in is two hundred and thirty times two point zero, four hundred and sixty watts. Power out is twenty three times nineteen, four hundred and thirty seven watts. So the efficiency is ninety five per **cent**. Twenty three watts are lost, for example as heat in the windings, reduced by thicker **wire**. The slip is dividing the wrong way round. An efficiency over one hundred per cent is always a **mistake**.

Visual: card shrinks to the top; a givens strip (36 px): orange "I_p = 2.0 A, V_p = 230 V", rose "I_s = 19 A, V_s = 23 V"; the transformer box moves right with two amber bars beside it. On "cent" rows (52 px) "(a) P_in = 230 × 2.0 = 460 W; P_out = 23 × 19 = 437 W; η = 437/460 × 100% = 95%", the 95% in a dark-ink frame; the bars fill to 460 W and 437 W. On "wire" "(b) e.g. copper (I²R) heating in the windings → thicker wire; or eddy currents → laminated core" (44 px; amber hand tag "23 W lost" on the gap). On "mistake" a chip "η = 460/437 = 105%" fades in and is crossed in red (caption "η = P_out / P_in, never over 100%"). Hold about 1 second.

### 15. handoff
> So real transformers lose a little energy, mostly as heat, and the biggest culprit in the windings is I squared R. Now think about the wires that carry electricity from a power station to a city. They're hundreds of kilometres long, so their resistance adds up, and the same I squared R heating happens all along the **line**. So why does stepping the voltage up reduce transmission **loss**?

Visual: board clears (camera change) to a wide view: at the left the power station plate (`phys-y11-power-station-v2.png`), at the right the house plate (`phys-y11-house-v1.png`), between them two transmission tower plates (`phys-y11-transmission-tower-v1.png`) carrying a long coded line. On "I squared R" a small "P = I²R" chip from scene 3 slides to the line. On "hundreds of kilometres long" the line stretches and a coded resistor zigzag label "R_line" appears along it; orange current dots run along the line. On "line" a warm tint runs along the whole line, tag "P_loss = I²R ?". On "loss" a chip "Next: why does stepping voltage up reduce transmission loss?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. η = P_out/P_in × 100%; real transformers fall short.
2. Copper: I²R heats the windings. Fix: thicker wire.
3. Core: eddy currents and hysteresis. Fix: thin insulated soft-iron sheets.
4. Coupling: leaked flux lowers V_s. Fix: closed core, coils together.
5. Ideal model: a good approximation with known limits.

Memory aid (framed card under the notes, hand lettering as in scene 9): *Copper, core, coupling.* Notes in the role colours, 34 px; about 290 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the windings heat: resistance and I²R, with the squared current deciding which winding matters (3). Why the core heats: Faraday's law inside a conductor, then I²R (4). Why lamination works: smaller loops link less flux and have more resistance (5). Why hysteresis costs energy: repeated re-magnetising (6). Why leakage matters: less flux, less secondary emf (7).
- **Misconceptions addressed:** laminating increases flux linkage (12 crossed); cooling removes the cause of copper loss (3); every loss is heat (7); efficiency can exceed 100% (14 crossed); the ideal model is useless because it is not perfect (10).
- **One idea at a time:** the gap (1), efficiency (2), copper (3), eddy currents (4), lamination (5), hysteresis (6), leakage (7), the pairs (8), the judgement (10).
- **Video makes it easier:** the loss bar opening between P_in and P_out (1); the per-winding heat tint and I²R numbers (3); the cross-section with one big eddy loop splitting into ten small ones as the heat fades (4, 5); flipping domain arrows with warm pulses (6); leakage lines shrinking as the windings are wound together (7).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 28 s.
- **Avoided double teaching:** the ideal model (v13), Faraday's and Lenz's laws (v10, v11), the iron core and air-core coupling (v12) recalled in a clause; P = I²R (Year 11) in a clause.
- **Syllabus coverage:** `P6-IQ3-04`: "evaluate qualitatively the limitations of the ideal transformer model and the strategies used to improve transformer efficiency": "incomplete flux linkage" (7, 8), "resistive heat production" (3, 8), "eddy currents" (4, 5, 8, 11), with the judgement (10).
- **Out of scope by design:** transmission line arithmetic (v15); eddy-current braking and other applications (v20).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Transformer cores are made from thin sheets of soft iron that are insulated from each other. Explain how this laminated construction improves the efficiency of a transformer."
Model answer: The changing flux in the iron core induces emfs in the core, which drive eddy currents round loops inside the conducting iron; these currents dissipate energy as heat (I²R). Insulating thin sheets from each other confines each eddy current to a small loop within one sheet: the loop links less flux, so its emf is smaller, and its narrow path has a higher resistance, so the eddy currents and their heating are much smaller. More of the input energy reaches the secondary, so efficiency increases. Classic mistake (crossed): "laminating increases the flux linkage".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks).** "A transformer draws a current of 2.0 A from a 230 V AC supply. Its secondary delivers 19 A at 23 V to a load. (a) Calculate the efficiency of the transformer. (b) Identify ONE way in which energy is lost in the transformer, and a design feature that reduces it."
Model answer: (a) P_in = 230 × 2.0 = 460 W; P_out = 23 × 19 = 437 W; η = 437/460 × 100% = 95%. (b) Any one: resistive heating in the windings (thicker wire); eddy currents in the core (laminated core); hysteresis (soft iron); flux leakage (closed core, coils wound together). Classic mistake (crossed): η = 460/437 = 105%.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (example values) | P_in = 115 W, P_out = 104 W, loss 11 W, η = 104/115 = 0.904 ≈ 90% | 1, 2, 10 |
| Site Q2 (c) | 0.96 × 20 MW = 19.2 MW; 0.8 MW lost | 2 (screen check) |
| Copper (example values) | 10² × 0.050 = 5.0 W; 0.50² × 4.0 = 1.0 W | 3 |
| Current slider (Revision 2) | 5.0² × 0.050 = 1.25 W; 10² × 0.050 = 5.0 W (× 2 current → × 4 heat) | 3 |
| Sheet slider (Revision 2, simple model, same block) | n = 1, 2, 5, 10: 1/n² = 100%, 25%, 4%, 1% | 5 |
| Lamination (simple model) | (1/10)² = 1/100 | 5 |
| Hysteresis | 50 Hz: 100 reversals per second | 6 |
| Network transformers (Revision 2) | "well above 90%" (narration); screen tag: MEPS oil-filled distribution minima at 50% load 98.28 to 99.40% (verified by Codex, brief 190) | 10 |
| A2 | 230 × 2.0 = 460 W; 23 × 19 = 437 W; 437/460 = 0.95 = 95%; 460 − 437 = 23 W; slip 460/437 = 1.053 = 105% | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 104/115 = 0.9043; 115 − 104 = 11.
- 0.96 × 20 = 19.2; 20 − 19.2 = 0.8.
- 10² × 0.050 = 5.0; 0.50² × 4.0 = 1.0.
- (1/10)² = 0.01.
- Revision 2: 5.0² × 0.050 = 1.25; 10² × 0.050 = 5.0; 1/1² = 1, 1/2² = 0.25, 1/5² = 0.04, 1/10² = 0.01.
- 230 × 2.0 = 460; 23 × 19 = 437; 437/460 = 0.950; 460/437 = 1.0526.

## Memory aid check

- **"Copper, core, coupling."** Meaning, as said in scene 9: the three ways a real transformer falls short of the ideal model: copper (resistive heating in the windings), core (eddy currents and hysteresis in the iron), coupling (incomplete flux linkage). Assumptions checked: it is a list of loss sources, not a ranking; "core" covers two mechanisms, each with its own fix (laminations, soft iron), which scene 8 states; "coupling" is not mainly a heat loss (scene 7 says so). It maps one to one onto the ideal model's three assumptions from v13. It helps a new case: A1 (core) and A2 (b), and HSC "evaluate the ideal model" answers. Introduced after the explanation (3 to 8).
- **Considered, not used:** "Thick wire, thin sheets, soft iron, shut core" (lists fixes, not causes).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 5,760, a scene sum of 5,745): **5,841 characters**, 16 scenes. Characters per scene (1 to 16): 406, 404, 773, 462, 494, 323, 514, 351, 168, 376, 103, 357, 249, 402, 384, 75. At 13.3 characters per second the speech is about 439 s; add about 3 s for the scene 2 screen check, 2 s for the scene 3 current slider, 3 s for the scene 5 sheet slider, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 74 s of holds and countdowns): **about 513 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 6 (hysteresis; the review asks to keep it); scene 3's cooling sentence; scene 10's second sentence.

## Opening frame

v13's final frame (designed in this wave, `phys-y12-m6-v13.md`): paper background; the coded closed square soft-iron core with slate flux arrows; the primary winding (many turns) "N_p = 1200" on a "230 V ~" source with "I_p = 0.50 A"; the secondary winding (few turns) "N_s = 60" on a lit lamp, "11.5 V", "I_s = 10 A"; a faint warm tint over the windings and core; amber bars "P_in = 115 W" and "P_out = 115 W (ideal)" with a "?" on P_out; the ideal card ("all flux links both coils", "no resistance in the windings", "no energy lost in the core"), each marked "?"; heading "How does a transformer exchange voltage for current?"; chip "Next: why are real transformers less efficient than the ideal model?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a wide view: the power station plate (`phys-y11-power-station-v2.png`) at the left, the house plate (`phys-y11-house-v1.png`) at the right, two transmission tower plates (`phys-y11-transmission-tower-v1.png`) between them carrying one long coded line; orange current dots along the line; a coded resistor zigzag along the line labelled "R_line"; a warm tint along the whole line; tag "P_loss = I²R ?"; no values; heading unchanged ("Why are real transformers less efficient than the ideal model?"); a chip reads "Next: why does stepping voltage up reduce transmission loss?". v15 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v14` (route phys-y12-m6-v14). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v14` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v14` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, efficiency, copper-heating, eddy-currents, laminations, hysteresis, flux-leakage, loss-fix-pairs, memory-aid, judgement, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: transformer with losses (heat tints, leakage lines, power ledger with loss bar), core cross-section with eddy loops and lamination split, lamination zoom, magnetisation flip, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 clear change to the efficiency board; 2 to 3 camera push to the windings; 3 to 4 clear change to the core slice; 4 to 5 camera continue to the lamination stage (the plate joins); 5 to 6 clear change to the iron grain; 6 to 7 camera change back to the schematic; 7 to 8 clear change to the table; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: scene 2 screen check (3 s), scene 3 current slider (2 s), scene 5 sheet slider (3 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v14-learning-review.md`, `science_check` = `checks/p-y12-m6-v14-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-power-station-v2.png` (1774 × 887, RGBA): handoff (15).
- `public/assets/physics/phys-y11-transmission-tower-v1.png` (1071 × 1469, RGBA): handoff (15), two copies at one scale.
- `public/assets/physics/phys-y11-house-v1.png`: handoff (15).
- **Checked, not used:** `phys-y11-rod-soft-iron-v1.png` (a solid rod; the scene needs a transformer core); `phys-y11-electric-kettle-v1.png` (heating context not needed).

- `public/assets/physics/y12p-transformer-v1.png` (1448 × 1086, RGBA; delivered in brief 190, inspected 7 Nov): 1, 2.
- `public/assets/physics/y12p-lamination-sheets-v1.png` (1586 × 992, RGBA; delivered in brief 190, inspected 7 Nov: E sheets and I strips with insulated edges): 5.

Need (new plates): none (Revision 2).

Coded: the schematic, heat tints, thermometer tag, power ledger and loss bar, core cross-section, flux dots, eddy loops, insulation lines, domain arrows, leakage lines, concentric windings cut-away, fins outline, loss table, calculation strips, crossed chips, countdowns, key notes board, the line and resistor zigzag in the handoff.

Kit gaps (for the v14 build brief):
1. **Core cross-section with lamination split.** A slice with flux dots linked to an AC cursor, one large eddy loop that splits into n thin loops, and a heat tint whose strength follows 1/n².
2. **Concentric windings cut-away.** The secondary wound over the primary on one limb, with leakage lines that shrink.

## Codex asset brief

Revision 2: no open request; item 1 was delivered in brief 190 and is kept here for the record.

1. **`y12p-lamination-sheets-v1.png`** (delivered). A painted fanned stack of about ten thin transformer core laminations (E-shaped and I-shaped grey silicon-steel sheets, each with a faint varnish sheen on its surface and visibly thin edges), slightly fanned so the separate sheets read clearly, lying on a flat surface, three-quarter view. Laboratory or workshop realism; no brand names, no text, no labels, no people or hands. Transparent PNG with alpha channel, about 1600 × 1000, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-rod-soft-iron-v1.png` and `y12p-transformer-v1.png` (painted, neutral lighting, clean edges). Used in v14 scene 5 beside the transformer plate; the sheet edges must read at about 35% frame width.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: efficiency; I²R heating and which winding loses more; cooling removing heat (author note b); eddy currents from Faraday's law in the core and their Lenz direction; laminations along the flux, small loops, less emf, more resistance; "about a hundred times less" in a simple model (author note c); hysteresis and soft iron, 100 reversals per second at 50 Hz; flux leakage lowering V_s and "not mainly heat" (author note d); the closed core and concentric windings; the efficiency claim for large transformers (author note e, open decision 2).
3. Confirm the example values are tagged "example values" on screen.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (no hand touches the transformer).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Revision 2: re-check the current-slider and sheet-slider readouts, the scoped MEPS tag (98.28 to 99.40%, oil-filled, 50% load) and that no learner copy ranks the high-current winding as worst in every transformer.
11. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: Real Transformers: Copper Loss, Eddy Currents and Flux Leakage | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson15.sa.html

An ideal transformer wastes nothing, but a real one gets warm. Find out where the missing energy goes: I squared R heating in the copper windings, eddy currents swirling inside the iron core, the energy used to keep re-magnetising the iron, and flux that never reaches the secondary. See why thicker wire, laminated soft-iron cores and windings wound together fix each one, and how good the ideal model really is. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"evaluate qualitatively the limitations of the ideal transformer model and the strategies used to improve transformer efficiency, including but not limited to: incomplete flux linkage; resistive heat production and eddy currents"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: ideal transformers. Next: why stepping voltage up reduces transmission loss.

#HSCPhysics #Physics #Transformers #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13; check that the "loop inside the iron" picture lands at speed; that the I²R surprise in scene 3 is clear; that scene 7's "not mainly heat" does not confuse the hook's "where did the watts go"; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The eddy loop splitting into thin loops while the heat fades, and the leakage lines shrinking as the windings are wound together, carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 190 findings (`checks/p-y12-m6-v14-learning-review.md`, `checks/p-y12-m6-v14-science-check.md`): 0 blocker, 2 should fix, 0 optional.
- **Should fix, S10, notes and author note (e) (98% efficiency scope).** Resolved: scene 10 now says "very efficient, well above ninety per cent" (root decision 10 fallback); the bar reads "large network transformers: well above 90%", with a 30 px scoped source tag "e.g. Australian minimum for oil-filled distribution transformers at half load: 98.28 to 99.40% (MEPS)" (the values Codex verified). Author note (e) withdraws "all table values above 98%" and records the dry-type and 10 to 2500 kVA scope; key note 5 no longer quotes a percentage; open decision 2 closed. The broad "good approximation" judgement is kept.
- **Should fix, S3 and notes (universal high-current-winding ranking).** Resolved: scene 3 now says "Because the current is squared, here the high-current winding loses more, even with far less resistance", tied to the displayed 5.0 W and 1.0 W estimates; a crossed chip "bigger R, so the primary loses more" with the tag "current counts twice" shows why the example comes out this way. The Decisions bullet is scoped to the example values, and key note 2 states only that I²R heats the windings. The learning review's keep note for the hysteresis scene is followed (open decision 3 stays kept).

Visual upgrade (to `../maths-visual-standard.md` and the build gate; high-risk design, scene-level redesign):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Stage changes" and "Question cards".
- Plates: `y12p-transformer-v1.png` and `y12p-lamination-sheets-v1.png` were delivered in brief 190 and inspected; the transformer now slides in at scene 1 and stays through scene 2 (it no longer cross-fades away), and the lamination sheets carry scene 5 from its first frame. Open decision 4 closed.
- Cuts: the scenes 1 to 3 schematic run (about 115 s) becomes three set-ups (hook schematic with plate; efficiency board; windings close-up); the scenes 4 to 6 slice run (about 96 s) becomes three (core slice; lamination stage; magnified iron grain). No set-up runs past about 60 s.
- Live control: scene 5's sheet slider (n = 1, 2, 5, 10; Python: eddy heating 100%, 25%, 4%, 1% of the solid core in the simple model). Also scene 3's current slider (5.0 A to 10 A in 0.050 Ω: 1.25 W to 5.0 W) and scene 6's reversal counter.
- Narration: scene 3 gains "Double the current, and the heating goes up four times." and the scoped ranking sentence (+95 characters); scene 10's efficiency clause changes (+1 character). No other speech changed.
- Hand tags and a pen mark in role colours in every teaching scene ("real transformer, same supply", "warm = lost energy", "not 100%", "not quite", "× 2 current → × 4 heat", "current counts twice", "swirls inside the iron", "real core sheets", "sheets lie along the flux", "10 × thinner → about 1/100 (simple model)", "each flip costs energy", "misses the secondary", "name the loss and its fix together", "well above 90%", "not in the model"; pen rings on the 11 W gap, the hottest core region and the shared limb; pen arrows and brackets on the fins, plate edges and loss table).
- Framed answers: η ≈ 90% (2), 5.0 W and 1.0 W (3), "about 1/100" (5), the judgement (10), and every feedback result. New crossed slip: "bigger R, so the primary loses more" (3).
- Question cards arrive with full text and a diagram in one move; the answer side has a givens strip and a picture (slices with eddy loops; the power bars).
- Key notes cut from six long items (about 640 characters) to five short bullets (about 290 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v13's final frame (unchanged in v13 Revision 2). The final frame (scene 15) is unchanged, so the v15 join holds.

Counts: 5,760 (joined; scene sum 5,745) to 5,841 characters (scene sum); about 517 s to about 513 s.
