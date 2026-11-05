# Year 11 Chemistry M4 V11: Entropy. How does entropy describe spreading and possible particle arrangements? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,923 characters, 16 scenes, about 536 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eleventh Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 80, between `chem-y11-m4-v10` (photosynthesis and respiration) and `chem-y11-m4-v12` (sign of entropy change); the concept video that opens the entropy and Gibbs free energy inquiry question. Templates: `chem-y11-m4-v10.md` (same designer, colour key), `chem-y11-m4-v02.md` (series layout), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates); particle conventions from `chem-y11-m1-v26.md` and `-v27.md`. No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v11` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Contrast enthalpy and entropy using a particle/energy distribution model. Stop before numerical Gibbs calculations."; next handoff: "How can a balanced reaction suggest the sign of entropy change?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson11.sa.html` (SHA256 `2b2a7da0570acdb7db9301d252918c766dfc134f8704d10a8dd8a8a1a8f2ea5b`, recomputed, matches the route), sections `l11-what-is-entropy-title` and `l11-the-second-law-of-thermodynamics-title`. Used: the recall hook (perfume spreading and never returning to the bottle); entropy as "the number of ways energy can be distributed across the particles of a system"; microstate ("one specific arrangement of all the energy among all the particles. More microstates = higher entropy"); gas, liquid, solid ordering and its reasons; units J K⁻¹ mol⁻¹ with the unit alert; the misconception "Entropy is just messiness or disorder" (kept as a caution, microstate language preferred); "enthalpy and entropy must be evaluated separately"; the Second Law as ΔS(universe) = ΔS(system) + ΔS(surroundings) > 0 for a spontaneous process; the Second Law table (ice melting, water freezing at −10 °C); the ammonium salt explain-it (endothermic dissolving still happens). Not used: Boltzmann's S = k ln W and its history (named in an author note only), the rubber band example (it needs polymer chains not yet taught), the refrigerator drill, the third law (v12), the sign rules (v12). Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v10.md` (one learner question; no people, hands or faces; real objects as painted plates; particle models, energy packets, counters and readouts coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ3-01`: "analyse the differences between entropy and enthalpy"
- `C4-IQ3-02`: "use modelling to illustrate entropy changes in reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v10's final frame (same designer). Teaches: counting arrangements of four gas particles in two joined gas jars (16 arrangements; 1 all on one side; 6 evenly split); microstate; why spreading is overwhelmingly likely for many particles (no force needed); energy spreading by counting ways to share energy packets (10 ways among 3 particles, 56 among 6); entropy, S, as a measure of the number of ways particles and energy can be arranged, units J K⁻¹ mol⁻¹; solid, liquid and gas, and temperature; enthalpy against entropy (what each measures, units, independent signs); the surroundings' entropy rises when heat is released into them and falls when heat is taken from them; the second law (total entropy rises in any change that happens by itself) explaining ice melting and an endothermic cold pack; a system's own entropy can fall (water freezing) when its surroundings gain more. Not taught: sign rules from equations, standard entropies and ΔS° calculations (v12), the word "spontaneous" and Gibbs free energy (v13), temperature thresholds (v14), S = k ln W.

## Decisions

- **Learner question (route wording kept).** "How does entropy describe spreading and possible particle arrangements?" The answer, in order: count the arrangements of particles (2, 3) and of energy (4); entropy measures that count (5, 6); it is a different quantity from enthalpy (7); together with the surroundings it decides which way a change goes by itself (8, 9).
- **Opening frame (equals `chem-y11-m4-v10.md`'s final frame, same designer).** Left, small: the glucose cycle with "needs light" on the up arrow. Right: `c9-ice-cube-v1.png` on a coded bench with a puddle, "room 25 °C", "ΔH = +6.01 kJ mol⁻¹ (absorbs heat)"; `m5x-cold-pack-v1.png` with "25.0 → 12 °C" and "endothermic"; the amber chip "Endothermic, yet it happens by itself. What else decides the direction?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** Two gas jars joined mouth to mouth, four gas particles: "after a while, all four in the top jar, or two in each: which is more likely?" Answer: two in each, six times more likely (scene 2). Counting is the route's "possible particle arrangements".
- **The counting model (scenes 2 to 4; route "particle/energy distribution model").** Positions: particles labelled A to D, each top or bottom, 2⁴ = 16 equally likely arrangements; "all top" 1; "two and two" 6 (C(4,2)). Scale: 100 particles all in one jar, (½)¹⁰⁰ ≈ 8 × 10⁻³¹, said as "about one chance in a million million million million million" (10³⁰). Energy: energy packets are a model (author note a); 3 packets among 3 particles: C(5,2) = 10 ways; among 6 particles: C(8,3) = 56 ways; so energy spreads from a hot block into a cold one. Both counts are shown as coded tallies; each arrangement flashes briefly for the small counts.
- **Entropy defined (scene 5).** "Entropy, S, is a measure of how many ways the particles of a substance, and their energy, can be arranged. More ways, more entropy." Units J K⁻¹ mol⁻¹, with "joules, not kilojoules" stressed (the site's unit alert; used in v12 and v13). "Disorder" is mentioned as a loose nickname only (site misconception box).
- **States and temperature (scene 6).** Solid: particles vibrate in fixed places; liquid: they move past each other; gas: they move freely through the whole container. Data: S°(H₂O, l) = 70.0 and S°(H₂O, g) = 188.8 J K⁻¹ mol⁻¹ (OpenStax Chemistry 2e Appendix G). Heating adds energy packets, so entropy rises with temperature.
- **Enthalpy against entropy (scene 7; syllabus C4-IQ3-01).** Two-column card: enthalpy change, ΔH: the heat taken in or given out as attractions and bonds change (kJ mol⁻¹); entropy change, ΔS: the change in the number of ways (J K⁻¹ mol⁻¹). Ice melting: ΔH positive (heat absorbed to loosen the attractions between water molecules) and ΔS positive (more ways). Steam condensing: both negative. Their signs are judged separately (site common error). A third example, mixing two gases: ΔH about zero, ΔS positive (enthalpy cannot explain mixing at all).
- **Second law and surroundings (scenes 8, 9; site section).** Heat released into the surroundings gives their particles more energy to share, so their entropy rises; heat taken from them lowers it. Second law: in any change that happens by itself, the total entropy of the system and its surroundings increases. Ice at 25 °C: the water gains more ways than the room loses; the cold pack: the ions spreading through the water gain a lot. A system's own entropy can fall (water freezing in a freezer) if the heat it releases raises the surroundings' entropy by more. Qualitative only (route stop); "whether the gain beats the loss depends on temperature" points to v13 and v14.
- **Memory aid:** "Entropy counts the ways." (see "Memory aid check"), scene 10.
- **Attempts (original wording, HSC style).** A1: two gases separated by a partition; explain, using particle arrangements, why they mix and do not unmix. Crossed: "they mix because mixing releases energy". A2: distinguish the enthalpy change and the entropy change when ice melts at 25 °C (signs and what each describes). Crossed: "ΔS is negative because melting absorbs energy".
- **Mistake scene:** none separate. Spreading needs a pushing force (3); entropy equals enthalpy, or one sign sets the other (7; crossed in A2); entropy always increases for the system (9); mixing releases energy (crossed in A1).
- **Handoff (route next: `chem-y11-m4-v12`, "How can a balanced reaction suggest the sign of entropy change?").** Scene 15: chemists want to read entropy changes straight from an equation. Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 11 Revisit: "Boltzmann's equation predicts that NH₄NO₃ dissolves spontaneously even though ΔHsoln = +25.7 kJ mol⁻¹". S = k ln W counts arrangements; it does not by itself predict spontaneity (the surroundings' entropy, or ΔG, must be included). Suggest "Boltzmann's equation explains why the dissolved ions have more entropy; with the surroundings included, the total entropy still rises".
  2. Lesson 11 Revisit hint: "at higher T, the same energy input is distributed across more already-accessible microstates, the relative increase in W is smaller". The direction is right but the wording is hard to follow; suggest "the same heat makes a smaller relative difference to a hotter substance, which already has many ways to share its energy" (this is the idea v13 uses).
  3. Lesson 11 Drill 5 (a): "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) ... (In practice slightly positive due to mixing...)". With standard entropies (OpenStax: CH₄ 186.3, O₂ 205.2, CO₂ 213.8, H₂O(g) 188.8) ΔS° = 591.4 − 596.7 = −5.3 J K⁻¹ mol⁻¹, slightly negative (lesson 12's own drill gives −5.5). Suggest "ΔS ≈ 0 (data give a small negative value)". v12 uses this case.
  4. Lesson 11 priority rule: "If the number of moles of gas increases, ΔS is positive regardless of other changes." Generally reliable, but "regardless" overstates a guide; suggest "almost always".
  - Checked and correct: the Second Law table (ice melting +6.01 kJ mol⁻¹; water freezing at −10 °C); the S°(diamond) 2.4 and S°(graphite) 5.7 key term; worked example parts (a) to (d); Q7 and Q8 model answers.
- **Cause chain taught, in order:** (1) particles move at random, so every arrangement is equally likely, and spread-out patterns have far more arrangements (2, 3); (2) with huge numbers of particles, the spread-out patterns are so many that unspreading never happens (3); (3) energy shared among more particles has more ways to be arranged, so heat spreads from hot to cold (4); (4) gas particles can be in far more places, so gases have more entropy than liquids and solids (6); (5) more energy means more ways to share it, so entropy rises with temperature (6); (6) heat measures energy transferred; entropy measures arrangements, so the two can change in different directions (7); (7) heat released into the surroundings gives them more ways, so exothermic changes raise the surroundings' entropy (8); (8) a change goes by itself only if the total entropy rises, so an endothermic change must gain enough entropy itself (8, 9).
- **Entry knowledge:** Stage 5 particle model of solids, liquids and gases; m4-v01 (system, surroundings, endothermic, ΔH); m4-v04 (the cold pack dissolving); m1-v27 (dissolving as a trade of attractions; its one grey tag "mixing itself helps a little", now explained).
- **Learner-visible vocabulary (plain meaning at first use):** arrangement, microstate (2, "one particular way the particles are arranged"); energy packet (4, "a model: energy shared out in small equal amounts"); entropy, S (5); second law (8, "in any change that happens by itself, the total entropy of the system and surroundings goes up").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **gas-jar pair** (scenes 1 to 3, A1: two `y11c-gas-jar-v1.png` mouth to mouth, the upper one rotated 180 degrees, coded glass cover slide between them that slides out; coded particles A to D in four colours moving randomly; a tally board that flashes each of the 16 arrangements in turn, sorted into columns "4–0", "3–1", "2–2", "1–3", "0–4" with counts 1, 4, 6, 4, 1); **energy-packet blocks** (scene 4: two coded blocks of particle dots, small amber packets hopping between dots; a "ways" counter); **state lens** (scene 6: solid, liquid, gas particle panels with arrangement counters and two S° bars); **two-column card** (scene 7); **surroundings ring** (scenes 8, 9: the system dashed teal, a wide surroundings ring around it whose dots brighten as heat arrives); `m7-perfume-bottle-v1.png`, `c9-ice-cube-v1.png`, `m5x-cold-pack-v1.png`, `y11c-dry-ice-v1.png`; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** entropy and arrangements purple (new quantity, used in v12 to v14); enthalpy and heat warm orange (energy out) or cool blue (energy in), as in v01 and v10; energy packets amber; system dashed teal; surroundings grey ring; crossed items red strike.
- **Board layout (constant):** heading top left; the model (jars, blocks or lens) at the left two thirds; counters, cards and chips at the right.

Author notes (not learner copy):
(a) Energy packets: the Einstein-solid counting model (q indistinguishable quanta among N oscillators: C(q + N − 1, q) ways). It is a model; real energy levels are quantised but not equal for all motions. The learner copy says "imagine energy shared out in small, equal packets".
(b) Boltzmann: S = k ln W, with W the number of microstates; not shown (the ledger asks for modelling, not the formula). The site names it as "Going deeper".
(c) Data: OpenStax Chemistry 2e Appendix G (checked online 6 November 2026): S°(H₂O, l) 70.0, S°(H₂O, g) 188.8 J K⁻¹ mol⁻¹. Ice melting ΔH 6.01 kJ mol⁻¹.
(d) (½)¹⁰⁰ = 7.9 × 10⁻³¹, about 1 in 1.3 × 10³⁰; "a million million million million million" = 10³⁰.
(e) The surroundings' entropy change is −ΔH/T for a reaction at constant T and P; this is the bridge v13 uses. Not said here (no numbers; route stop).
(f) Mixing ideal gases: ΔH = 0, ΔS > 0; the gas-mixing attempt uses two unreactive gases (nitrogen and argon on the card is avoided; the card says "two gases that do not react").
(g) Pronunciations: "entropy, S"; "joules per kelvin per mole".

Main question: *How does entropy describe spreading and possible particle arrangements?*
Entry knowledge: Stage 5 particle model; m4-v01; m4-v04; m1-v27.
Stops after: counting arrangements and energy shares, entropy defined with units, states and temperature, enthalpy against entropy, the surroundings and the second law qualitatively. No sign rules from equations, no S° calculations, no Gibbs.
Handoff: chem-y11-m4-v12, the sign of ΔS from a balanced equation.

## Opening frame and final frame

- **Opening frame:** m4-v10's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v12` opens on it):** the memory line "Entropy counts the ways." small at the top. Left: `y11c-dry-ice-v1.png` with a coded equation card beneath "CO₂(s) → CO₂(g)" and a purple chip "ΔS: + or −?". Right: a coded equation card "N₂(g) + 3H₂(g) → 2NH₃(g)" with four coded reactant molecules above it and an empty products tray, and a purple chip "ΔS: + or −?". The amber chip "Can a balanced equation tell us which way entropy changes?". The chip "Next: How can a balanced reaction suggest the sign of entropy change?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Ice melts on a warm bench, and a cold pack gets cold. Both absorb heat, yet both happen by themselves. So something besides energy must decide the direction. To find it, start with something simpler. Here are two gas jars joined mouth to mouth, with four gas particles, all starting in the top jar. Slide the cover out, and let them move at random. After a while, which is more likely: all four still in the top jar, or two in each **jar**?

Visual: opens on m4-v10's final frame; the "Next" chip fades. On "something besides energy" the cycle and the two plates shrink into a corner strip. Heading writes: "Entropy: counting the ways". On "two gas jars joined mouth to mouth" the gas-jar pair builds at the left (the upper `y11c-gas-jar-v1.png` rotated 180 degrees), coded glass cover between them; four coded particles A, B, C, D (four colours) in the top jar. On "Slide the cover out" the cover slides away; the particles start to move. Chips "all four in the top jar" and "two in each jar". On "jar" the 3 s `Countdown` ring runs.

### 2. counting arrangements
> Two in each, by a long way. Here's why. Each particle can be in the top jar or the bottom jar, so four particles have two times two times two times two, sixteen possible arrangements. Each one, a particular way the particles are arranged, is called a microstate. And because the particles move at random, every microstate is equally likely. Only one of the sixteen has all four at the top. But six of them have two in each jar. So two and two turns up six times as **often**.

Visual: "two in each jar" ticks. On "sixteen possible arrangements" the tally board at the right flashes each arrangement in turn (small jar icons with coloured dots) and sorts them into five columns: "4 top: 1", "3 top: 4", "2 and 2: 6", "1 top: 4", "0 top: 1". On "is called a microstate" gloss "microstate: one particular way the particles are arranged". On "equally likely" every icon gets the same small weight mark. On "Only one of the sixteen" the "4 top" column rings red; on "six of them" the "2 and 2" column rings purple; on "often" a bar "6 ÷ 1 = 6 times as likely" draws.

### 3. why spreading wins
> With more particles, the numbers get enormous. For a hundred particles, the chance of finding them all in one jar is about one in a million million million million million. A real sample has far more particles than that, so it never happens. No force pushes the gas to spread out. Spread-out arrangements are just so much more numerous that spreading is what we always see. That's why perfume spreads through a room, and never gathers back into the **bottle**.

Visual: the jars fill with a hundred tiny dots spreading evenly. On "about one in a million million million million million" a chip "all in one jar: (½)¹⁰⁰ ≈ 1 in 10³⁰" (purple). On "far more particles" a grey tag "a real sample: about 10²³ particles". On "No force pushes" a crossed chip "a force pushes the gas". On "Spread-out arrangements" the "2 and 2" column from scene 2 returns small, swelling. On "perfume" `m7-perfume-bottle-v1.png` at the right with a coded cloud of scent dots spreading out; on "bottle" a ghost arrow from the cloud back into the bottle is crossed.

### 4. energy spreads too
> Energy spreads in the same way. Imagine energy shared out in small, equal packets. Three packets shared among three particles can be arranged in ten different ways. Let those particles touch three cold ones, and the same three packets can be shared among six particles, in fifty-six ways. So the energy spreads into the cold particles, simply because there are more ways for it to be shared. That's why heat flows from a hot object into a cold **one**.

Visual: board clears to two coded blocks: "hot" (three dots carrying three amber packets) and "cold" (three dots, no packets), apart. On "Imagine energy shared out in small, equal packets" gloss "model: energy in small, equal packets". On "ten different ways" a counter "3 packets, 3 particles: 10 ways" and the packets hop through several of the ten sharings. On "touch three cold ones" the blocks join; the packets begin hopping across. On "fifty-six ways" the counter "3 packets, 6 particles: 56 ways" (purple). On "more ways for it to be shared" the packets settle spread across both blocks; on "one" orange heat arrows flow from the hot block into the cold block.

### 5. what entropy is
> Now we can name the idea. Entropy, written S, is a measure of how many ways the particles of a substance, and their energy, can be arranged. More ways means more entropy. People sometimes call it disorder, but counting the ways is more accurate. Entropy is measured in joules per kelvin per mole. Notice that's joules, not **kilojoules**.

Visual: the jars (small, left) and the blocks (small, right) sit either side. On "Entropy, written S" gloss card "entropy, S: a measure of how many ways the particles and their energy can be arranged" (purple). On "More ways means more entropy" a chip "more ways → more entropy". On "disorder" a grey chip "nickname: disorder (less precise)". On "joules per kelvin per mole" the unit "J K⁻¹ mol⁻¹" writes large; on "kilojoules" the "J" is ringed purple and a ghost "kJ" beside it is crossed.

### 6. solids, liquids and gases
> This explains why gases have so much entropy. In a solid, particles vibrate in fixed places. In a liquid, they can slide past each other, so there are more arrangements. In a gas, each particle can be almost anywhere in the container, so there are vastly more. For water, liquid has an entropy of seventy joules per kelvin per mole, and steam has a hundred and eighty-nine. Heating anything adds energy packets too, so entropy also rises with **temperature**.

Visual: the state lens: three particle panels in a row. On "vibrate in fixed places" the solid panel (a lattice of dots with short jiggle marks); on "slide past each other" the liquid panel (close, irregular, moving); on "almost anywhere in the container" the gas panel (few dots, far apart, fast). Under each, an arrangement counter: "few", "more", "vastly more" (purple, rising). On "seventy joules per kelvin per mole" two purple bars: "H₂O(l): 70.0 J K⁻¹ mol⁻¹" and on "a hundred and eighty-nine" "H₂O(g): 188.8 J K⁻¹ mol⁻¹" (grey source tag "OpenStax Chemistry 2e, Appendix G"). On "temperature" amber packets drop into each panel and every counter ticks up.

### 7. enthalpy and entropy are different
> So how is entropy different from enthalpy? The enthalpy change is about heat: the energy taken in or given out as bonds and attractions change, in kilojoules per mole. The entropy change is about arrangements: how the number of ways changes, in joules per kelvin per mole. They're judged separately. When ice melts, delta H is positive, because heat is needed to loosen the attractions between water molecules. And delta S is positive too, because liquid water has more ways. When two gases mix, delta H is about zero, but delta S is positive, so enthalpy can't explain mixing at **all**.

Visual: the two-column card. Left column (orange and blue) "enthalpy change, ΔH": on "about heat" "heat taken in or given out as bonds and attractions change"; "units: kJ mol⁻¹". Right column (purple) "entropy change, ΔS": on "about arrangements" "change in the number of ways"; "units: J K⁻¹ mol⁻¹". On "judged separately" a divider line thickens. On "When ice melts" a row with the ice plate small: "ΔH: + (heat absorbed to loosen attractions)" (blue) and on "delta S is positive too" "ΔS: + (more ways)" (purple). On "When two gases mix" a second row with two coloured dot clouds merging: "ΔH ≈ 0" and "ΔS: +". On "all" the "ΔH ≈ 0" cell is ringed, tag "enthalpy can't explain this".

### 8. the surroundings count too
> There's one more piece. When a change releases heat, that energy spreads into the surroundings, and gives their particles more ways to share it, so the surroundings' entropy goes up. When a change absorbs heat, the surroundings' entropy goes down. The second law of thermodynamics says that in any change that happens by itself, the total entropy of the system and its surroundings goes up. So an exothermic change helps itself, while an endothermic change has to gain enough entropy of its **own**.

Visual: the surroundings ring: a small dashed teal circle "system" inside a wide grey ring "surroundings" filled with faint dots. On "releases heat" orange arrows leave the system; amber packets spread into the ring and its dots brighten; a purple chip on the ring "surroundings: entropy up". On "absorbs heat" blue arrows enter the system from the ring; the ring dims, chip "surroundings: entropy down". On "The second law of thermodynamics" gloss card "second law: in any change that happens by itself, total entropy (system + surroundings) goes up". On "an exothermic change helps itself" a tick on the orange version; on "own" the blue version's system circle fills purple, tag "must gain enough entropy itself".

### 9. ice, the cold pack, and freezing
> That solves the puzzle. Ice melting on a warm bench takes heat from the room, so the room loses a little entropy, but the water gains more, as its molecules break free to move. The cold pack is the same: the ions spreading through the water gain a lot of entropy. And a system's own entropy can go down. Water freezing in a freezer loses entropy, but the heat it releases raises the entropy of its surroundings by more. Whether the gain beats the loss depends on temperature, and we'll come back to **that**.

Visual: on "Ice melting on a warm bench" `c9-ice-cube-v1.png` inside the system circle; a small purple bar pair: "room: − (small)" and on "the water gains more" "water: + (larger)"; a total bar "total: +" with a tick. On "The cold pack" `m5x-cold-pack-v1.png` replaces the ice; a coded inset of ions spreading through water dots; the "water: +" bar becomes "ions spreading: + (large)". On "Water freezing in a freezer" a coded ice tray in the system: "system: −" (purple down) and on "raises the entropy of its surroundings" "surroundings: + (larger)"; total "+" with a tick. On "depends on temperature" a grey chip "depends on temperature: coming in this module". On "that" the three totals pulse.

### 10. counting the ways
> Here's the line to remember. Entropy counts the **ways**.

Visual: the memory line writes large in the explainer's handwriting style: "Entropy counts the ways." Beneath it, the "2 and 2: 6" column and the "56 ways" counter return small; on "ways" both pulse purple.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A box is divided by a partition, with one gas on the left and a different gas on the right. The gases don't react. The partition is removed. Explain, in terms of particle arrangements, why the gases mix, and why they never unmix by themselves. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A box is divided into two halves by a partition. One half contains a gas, and the other half contains a different gas. The gases do not react. The partition is removed. Explain, in terms of particle arrangements and entropy, why the gases mix, and why they do not separate again by themselves. (3 marks)" A coded box with purple dots left and green dots right beside the card. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Once the partition is gone, each particle can be anywhere in the box, so there are far more possible arrangements, and almost all of them are mixed. The particles move at random, so the system ends up in mixed arrangements, and its entropy rises. Unmixing would need one of the very rare separated arrangements, so it never happens. Mixing doesn't release energy. It happens because it's far more **likely**.

Visual: card shrinks to the top. Rows: "particles can be anywhere: many more arrangements, almost all mixed" (purple); "random motion → mixed arrangements; entropy increases"; "separated arrangements are extremely rare → no unmixing". On "Mixing doesn't release energy" a chip "they mix because mixing releases energy" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Distinguish between the enthalpy change and the entropy change when ice melts at twenty-five degrees. Give the sign of each, and say what each one describes. Pause here to answer.

Visual: `QuestionCard`: "Ice melts at 25 °C: H₂O(s) → H₂O(l). Distinguish between the enthalpy change and the entropy change for this process. In your answer, state the sign of each and what each describes. (3 marks)" The ice plate small beside the card. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Delta H is positive. Melting absorbs heat, to loosen the attractions between water molecules. Delta S is also positive, because molecules that can move past each other have more possible arrangements. One describes heat, the other describes arrangements. Saying delta S is negative because melting absorbs energy mixes the two **up**.

Visual: card shrinks. Rows: "ΔH > 0: heat absorbed to loosen attractions (kJ mol⁻¹)" (blue); "ΔS > 0: more possible arrangements in the liquid (J K⁻¹ mol⁻¹)" (purple); "ΔH: heat. ΔS: arrangements." On "mixes the two" a chip "ΔS < 0 because melting absorbs energy" fades in and is crossed. Hold about 1 second.

### 15. conclusion and handoff
> So entropy describes spreading by counting the ways particles and their energy can be arranged, and gases have by far the most. That gives chemists a shortcut. If a reaction makes gas from a solid, or changes the number of gas molecules, the equation itself might tell us which way entropy changes. Dry ice turning to gas, or nitrogen and hydrogen making ammonia: can you read the sign straight from the **equation**?

Visual: the memory line returns small at the top. On "gases have by far the most" the state lens returns briefly, gas panel ringed. On "makes gas from a solid" `y11c-dry-ice-v1.png` enters at the left with the card "CO₂(s) → CO₂(g)"; on "changes the number of gas molecules" the card "N₂(g) + 3H₂(g) → 2NH₃(g)" at the right with four coded reactant molecules above it and an empty products tray. On "Dry ice turning to gas" and "nitrogen and hydrogen making ammonia" each card gains a purple chip "ΔS: + or −?". On "equation" the amber chip "Can a balanced equation tell us which way entropy changes?" and the chip "Next: How can a balanced reaction suggest the sign of entropy change?" write. Hold about 2 seconds. This is the final frame (m4-v12 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Entropy, S: a measure of how many ways the particles of a substance and their energy can be arranged (microstates). More ways, more entropy. Units: J K⁻¹ mol⁻¹ (joules, not kJ).
2. Spreading happens because spread-out arrangements are far more numerous, not because of a force. Energy spreads from hot to cold for the same reason.
3. Entropy: gas ≫ liquid > solid (water: 70.0 and 188.8 J K⁻¹ mol⁻¹); it rises with temperature.
4. ΔH is heat taken in or given out (kJ mol⁻¹); ΔS is the change in the number of ways (J K⁻¹ mol⁻¹). Judge their signs separately.
5. Second law: in any change that happens by itself, total entropy (system + surroundings) increases. Heat released raises the surroundings' entropy.

Memory aid (large, on the notes screen): *Entropy counts the ways.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why two and two is more likely (2: more arrangements); why gases never unspread (3); why heat flows hot to cold (4); why gases have more entropy (6); why entropy rises with temperature (6); why melting has ΔH and ΔS both positive (7); why heat released raises the surroundings' entropy (8); why ice melts and cold packs work (9).
- **Misconceptions addressed:** a force pushes gases to spread (3); entropy is just messiness (5); kJ for entropy (5); one sign sets the other (7; crossed in A2); a system's entropy must always rise (9); mixing releases energy (crossed in A1).
- **One idea at a time:** prediction (1), counting (2), scale (3), energy (4), definition (5), states (6), contrast (7), surroundings (8), applications (9).
- **Video makes it easier:** every arrangement flashed and sorted into columns (2); a swelling count as particles are added (3); packets hopping across joined blocks with a live count (4); particle panels with rising counters (6); a surroundings ring that brightens or dims with heat (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 31 s and 26 s.
- **Avoided double teaching:** system, surroundings and ΔH sign (m4-v01); the cold pack measurements (m4-v04); dissolving as a trade of attractions (m1-v27).
- **Syllabus coverage:** `C4-IQ3-01` "analyse the differences between entropy and enthalpy" (7, 8, A2); `C4-IQ3-02` "use modelling to illustrate entropy changes" (2 to 4, 6, 9, A1). "in reactions" continues in v12 (reaction equations).
- **Out of scope by design:** sign rules from equations and ΔS° calculations (v12), spontaneity and Gibbs free energy (v13, v14), S = k ln W.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: with the partition removed, each particle can occupy the whole box, so the number of possible arrangements increases greatly, and almost all of them are mixed (1 mark); random particle motion makes the system end up in mixed arrangements, so entropy increases (1 mark); separated arrangements are a tiny fraction of the total, so the gases do not unmix by themselves (1 mark). Classic mistake (crossed): "the gases mix because mixing releases energy" (ΔH ≈ 0 for gases that do not react).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: ΔH is positive: heat is absorbed from the surroundings to loosen the attractions between water molecules (1 mark). ΔS is positive: molecules in the liquid can move past each other, so there are more possible arrangements (1 mark). ΔH describes heat transferred (kJ mol⁻¹); ΔS describes the change in the number of arrangements (J K⁻¹ mol⁻¹) (1 mark). Classic mistake (crossed): "ΔS is negative because melting absorbs energy".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Four particles | 2⁴ = 16 arrangements; 1, 4, 6, 4, 1; 6 ÷ 1 = 6 | 1, 2 |
| A hundred particles | (½)¹⁰⁰ ≈ 7.9 × 10⁻³¹, about 1 in 10³⁰; real sample about 10²³ particles | 3 |
| Energy packets | 3 packets, 3 particles: 10 ways; 3 packets, 6 particles: 56 ways | 4, 10 |
| Water entropies | S°(H₂O, l) 70.0; S°(H₂O, g) 188.8 J K⁻¹ mol⁻¹ (OpenStax) | 6, key notes |
| Ice melting | ΔH = +6.01 kJ mol⁻¹ | opening, 7 |
| Cold pack | 25.0 → 12 °C (illustrative, from m4-v10's final frame) | opening, 9 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 2⁴ = 16; C(4,0..4) = 1, 4, 6, 4, 1; 0.5¹⁰⁰ = 7.89 × 10⁻³¹ (1 in 1.27 × 10³⁰).
- C(3 + 3 − 1, 3) = C(5,3) = 10; C(3 + 6 − 1, 3) = C(8,3) = 56.
- OpenStax Appendix G: S°(H₂O, l) 70.0, S°(H₂O, g) 188.8 J K⁻¹ mol⁻¹; "a hundred and eighty-nine" is 188.8 rounded.
- Site check: [213.8 + 2(188.8)] − [186.3 + 2(205.2)] = 591.4 − 596.7 = −5.3 J K⁻¹ mol⁻¹.

## Memory aid check

- **"Entropy counts the ways."** Written for this lesson from the site's microstate definition. Meaning, as said in scenes 5 and 10: entropy measures the number of possible arrangements of particles and their energy. Assumptions checked: "ways" covers both positions (scenes 2, 3) and energy shares (scene 4), as the definition card says; it is a measure that grows with the count (the logarithm in S = k ln W is not needed for comparisons and stays in author note b). It helps a new case: A1 (mixing) and the v12 handoff (gas count).
- **Considered, not used:** "Entropy is disorder" (the site warns it is imprecise; kept only as a nickname chip).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **5,923 characters**, 16 scenes (per scene: 436, 471, 456, 448, 334, 455, 584, 495, 504, 53, 276, 404, 189, 330, 413, 75). At 13.3 characters per second the speech is about 445 s; add about 10 s of settling (the tally board in 2, the packets in 4, the state lens in 6, the surroundings ring in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 536 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v11` (route chem-y11-m4-v11; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v11`.

In order (16 scene headings, all `### N.`): hook-prediction, counting-arrangements, why-spreading-wins, energy-spreads, entropy-defined, states-and-temperature, enthalpy-vs-entropy, surroundings-second-law, ice-coldpack-freezing, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v10's final frame into scene 1 by camera continue (its plates shrink to a corner strip); 1 to 2 camera continue (tally board at the right); 2 to 3 camera push into the jars; 3 to 4 clear change to the blocks; 4 to 5 camera pull back (jars and blocks either side); 5 to 6 clear change to the state lens; 6 to 7 camera continue (the lens becomes the card's ice row); 7 to 8 clear change to the surroundings ring; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v11-learning-review.md`, `checks/c-y11-m4-v11-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling and rotation only, never stretched):
- `public/assets/chemistry/y11c-gas-jar-v1.png` (935 × 1682; empty gas jar with ground-glass rim, portrait): scenes 1 to 3, two copies, the upper rotated 180 degrees (as m1-v01's diffusion pair).
- `public/assets/chemistry/m7-perfume-bottle-v1.png` (2000 × 2000; glass perfume bottle): scene 3.
- `public/assets/chemistry/c9-ice-cube-v1.png` (2095 × 2105): opening, scenes 7, 9, 13.
- `public/assets/chemistry/m5x-cold-pack-v1.png` (2000 × 2000): opening, scene 9.
- `public/assets/chemistry/y11c-dry-ice-v1.png` (1619 × 972; dry ice pellets in a dish): scene 15, final frame.
- **Inspected, not used:** `m8-permanganate-purple-v1.png` and `-clear-v1.png` (test tubes in a rack; the site's permanganate-crystal hook needs a beaker, and the gas jars carry the same idea without a new plate).

Need: no new plates. Build check: the two gas jars mouth to mouth need a coded cover slip drawn between the rims; confirm the rims align after rotation.

Coded: particles and tally board, energy packets and blocks, counters, state lens, S° bars, two-column card, surroundings ring, ion inset, ice tray, equation cards, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson11.sa.html` (`l11-what-is-entropy-title`, `l11-the-second-law-of-thermodynamics-title`) and the site notes' quotations.
3. Confirm OpenStax Appendix G water entropies and the energy-packet counts (author note a).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (the cover slides by code); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v10's final frame, and send the final frame to the m4-v12 designer.

## YouTube metadata (draft)

Title: What Is Entropy? Counting Particle Arrangements | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Ice melts and cold packs get cold, yet both absorb heat. So what decides which way a change goes? Count the ways four gas particles can sit in two jars, and the ways energy can be shared between particles, to see why spreading is overwhelmingly likely. Define entropy, compare solids, liquids and gases, contrast entropy with enthalpy, and use the second law to explain why an endothermic change can still happen by itself. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"analyse the differences between entropy and enthalpy"
"use modelling to illustrate entropy changes in reactions"

Previous: How are photosynthesis and respiration related in an enthalpy cycle? Next: How can a balanced reaction suggest the sign of entropy change?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Second law in this video (root).** The route stops before Gibbs; the second law is taught qualitatively (scenes 8, 9) because the site places it here and it answers v10's handoff. If root prefers to hold the second law for v13, scenes 8 and 9 shrink to one scene (about 450 characters cut) and the handoff stays.
- **2. Energy-packet model (science check).** The equal-packet counting model (author note a) is a simplification; the science check should confirm the wording "imagine energy shared out in small, equal packets" is acceptable for Year 11.
- **3. Length (learning review).** Reserve cut: scene 7's gas-mixing example (about 120 characters); A1 covers mixing.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the 16-arrangement tally followable at speed; does scene 4's packet model land without a diagram the student has seen before), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
