# Maths S11 F04B: How far does a car travel before it stops, and why does speed matter so much? A red light at 60 km/h, stopping distance = reaction distance + braking distance, the reaction part in metres per second, the braking part growing four times when the speed doubles, a supplied model, and what stretches each part (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a01.md`, `a07.md`, `r10.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 91; ruling 88 makes this part f04b, stopping distance = reaction + braking). Opens on f04a's final frame as specified in `math-s11-f04a.md` (Decisions, "Handoff", and scene 12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,782 characters by script (see "Narration length estimate"), 13 scene headings, about 451 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixth video of Year 11 Mathematics Standard (2024), Formulas and equations, playlist order 4 (shared with f04a, ruling 88). Year 11 is one course for Standard 1 and Standard 2. This part covers stopping distances. Pre-design pack: `../pre-design/maths-standard/math-s11-f04.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/formulas-and-equations/lesson07.sa.html` (Quadratic Formulas in Applied Contexts, SHA256 `56fbba593ae4c2b386e409da02860a1b369f59e6e1d17149ec5d8ba024ccdc29`; the hook's model D = 0.01v² + 0.3v; card 05's "the 0.01v² part grows much faster than the 0.3v part as speed increases"; `we-1` v = 50, 25 + 15 = 40 m; the drill's 30 km/h, 18 m and 60 km/h, 54 m, "it triples, not doubles"). Its key-terms definition of stopping distance as the braking distance (MS-78) is not used: this video teaches the syllabus sum. The sum itself, reaction distance from m/s and a reaction time, is a site gap (MS-81) taught from the syllabus (ruling 3). Lesson08's `we-4` explanation (MS-77) is not used. Route entry: `math-s11-f04` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; the P-plate car, the city road, the traffic light and the stopwatch as plates; the new `StoppingDistanceStrip` (kit-needs); one new plate for f05's anchor in the final frame (a roadside breath-test sign); every bar, table and board coded.

Owner rules applied: as f01 (2024 syllabus; plates for real objects, code for diagrams; no people, hands or faces (the driver is never drawn); one question; one stage at a time; words before symbols; plain meanings (reaction distance, braking distance, stopping distance, reaction time); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a red light, a P-plate car); Australian spelling; no em dashes; conversational narration). Road safety without fear tactics (pack): no crash, no injury, no hazard that is a person or an animal; the reason to stop is a red light.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Formulas and equations, common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-8.json` (the two formulas are MathML in the official wording; their text forms are speed = distance/time and stopping distance = reaction distance + braking distance):

- `ci61d581aa`: "Calculate distance, speed and time (with change of units of measurement as required) and stopping distances of vehicles using speed = distance/time and stopping distance = reaction distance + braking distance" (shared with f04a: this video covers stopping distances; f04a covered distance, speed and time)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

**Boundary:** starts from f04a's final frame exactly (the city road `ma11-city-road-strip-v1.png` across the lower third; the P-plate car `ms11s-p-plate-car-v1.png` at the left with "60 km/h"; the traffic light `ma11-traffic-light-v1.png` at the right, its red lens ringed; the stopwatch `ma12-stopwatch-v1.png` with a coded hand at 1.5 s and the chip "≈ 1.5 s to react"; the chip "60 km/h ≈ 16.7 m every second"; chips "How far before the car stops?", "Next" and "?"). Recalls f04a (÷ 3.6; distance = speed × time) and f01 (substitution with a square) in a phrase or grey chip each. Teaches: stopping distance = reaction distance + braking distance, each part in plain words; reaction distance = speed in m/s × reaction time in s; braking distance from a table or a supplied formula; why stopping distance grows faster than speed (the reaction part doubles when the speed doubles, the braking part quadruples, with the reason); a supplied model with both parts built in (the site's D = 0.01v² + 0.3v); what lengthens each part (slow reactions: tiredness, phones, alcohol; wet roads). Stops at stopping distance. Not taught: BAC (f05); distance-time graphs (Year 12 r12a, r12b).

## Decisions

- **Anchor: a red light at 60 km/h (reused plates, live).** f04a ended at a red light with a 1.5 s reaction. The car is the P-plate car (`ms11s-p-plate-car-v1.png`, briefed in f03b); the light `maths/ma11-traffic-light-v1.png` (viewed 19 Nov: a three-lens light on a pole, lenses unlit; the red lens is ringed in code, no glow); the stopwatch `maths/ma12-stopwatch-v1.png` (viewed 19 Nov: blank dial with ticks; a coded hand). The red light is a neutral reason to stop (pack: no crash imagery).
- **Values and sources (pack decision; Codex confirms).** Reaction time "about 1.5 seconds" is the figure the pack cites from NSW road-safety guidance (nsw.gov.au "Safe stopping distance" page and the Road User Handbook); Codex confirms the figure and wording before narration. The braking distances in scenes 3 and 4 are labelled "example values (dry road)" and follow 0.01v² metres (v in km/h), the braking part of the site's model, so the table and the supplied model agree: 30 → 9 m, 60 → 36 m, 90 → 81 m, 120 → 144 m. With 1.5 s the reaction parts are 12.5, 25, 37.5 and 50 m. The site's model in scene 5 builds in a quicker reaction (0.3v metres is v ÷ 3.6 × 1.08 s); the narration says "just over a second" once so the two reaction times are not confused, and every question states its own reaction time or formula.
- **The site's model, explained (pack decision).** D = 0.01v² + 0.3v is the syllabus sum in disguise: 0.3v is a reaction distance and 0.01v² a braking distance. Taught that way, the site's numbers (40 m at 50 km/h; 18 m and 54 m in attempt 2) join the syllabus formula and show why speed matters. The site's "stopping distance = braking distance" definition (MS-78) is never used.
- **Simulations (standard item 3).**
  1. **Stopping strip** (scenes 2 to 4; new `StoppingDistanceStrip`, kit-needs row f04): the car drives towards the red light; as the light turns red (coded ring) the stopwatch hand sweeps 1.5 s while the car moves at full speed and a teal "reaction" bar grows behind it; then the brakes go on and a violet "braking" bar grows while the car slows to a stop; the total bracket reads the stopping distance.
  2. **Speed slider** (scene 4): a speed slider 30 to 120 km/h re-runs the strip; the teal part grows in step with the speed, the violet part grows with its square; a live table under the strip fills rows 30, 60, 90, 120 (reaction, braking, total).
  3. **Stretch toggles** (scene 6): a "reaction time 2.5 s" toggle stretches only the teal part (+16.7 m at 60 km/h); a "wet road" toggle stretches only the violet part (no number; labelled "longer").
- **Colour roles (fixed for f04b, carried into f08's capstone).** Reaction distance **teal**; braking distance **violet**; stopping distance (the sum) **amber**; speed **blue**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As f01. Hand tags: "still at full speed", "slowing to a stop", "reacting + braking", "m/s first", "keep it in the calculator", "speed × 2: reaction × 2", "speed × 2: braking × 4", "twice as far each second, twice as long", "both parts built in", "slower reaction: longer teal", "wet road: longer violet". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The red light (1); the two-part strip (2); g01 board (3); the speed slider and table (4); the supplied model (5); the stretch toggles (6); framed card (7); question cards (8 to 11); the breath-test frame for f05 (12); key notes (13).
- **Worked example (g01 layout).** Scene 3: 60 km/h, 1.5 s, braking 36 m (example value): 25 + 36 = 61 m. Crossed slip: "60 × 1.5 = 90 m" (caption "km/h and seconds don't mix: m/s first").
- **Memory aid.** Framed card: "Stopping = reacting + braking." Key line: "Double the speed: reacting × 2, braking × 4."
- **Visual surprise.** On the speed slider, 60 to 120 km/h stretches the violet bar to four times its length while the teal bar only doubles, and the total jumps from 61 m to 194 m.
- **Plain meanings at first use.** Reaction time ("the time between seeing the danger and the brakes going on"); reaction distance ("how far the car travels while the driver reacts, still at full speed"); braking distance ("how far it travels once the brakes are on, while it slows to a stop"); stopping distance ("the two added together").
- **Attempts.** A1 (pack question 1): 72 km/h, 1.2 s, braking 29 m (an example value): 20 m/s, 24 m, 53 m; crossed "72 × 1.2 = 86.4 m" (caption "m/s first"). A2 (the site's drill, worded as an original question): D = 0.01v² + 0.3v at 30 and 60 km/h, 18 m and 54 m, tripled; crossed "doubles" (caption "the braking part grows with the speed squared").
- **Mistake scene:** none separate. Stopping distance taken as braking only (2, MS-78's error named as the slip in words); km/h × seconds (3 crossed, A1 crossed); "double the speed, double the distance" (4, A2 crossed).
- **Cause chain taught, in order:** (1) before braking, the car keeps its full speed for the whole reaction time, so the reaction distance is speed × time in matching units (2, 3); (2) braking then takes its own distance, so the two add (2, 3); (3) the reaction part is in proportion to the speed, but the braking part grows with the square, because a faster car covers more ground each second and also brakes for longer (4); (4) a supplied model just builds both parts into one formula (5); (5) anything slowing a reaction stretches the first part, and a wet road stretches the second (6).
- **Entry knowledge (route):** f04a (÷ 3.6; distance = speed × time); f03a (rearranging); f01 (substitution with a square).
- **Handoff (to math-s11-f05, "How do the BAC formulas estimate blood alcohol from drinks, hours and body weight?").** Scene 12: header "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS"; the city road strip across the lower third; the P-plate car at the left with "60 km/h"; the stopping strip under it with its teal reaction part stretched (reaction time "2.5 s", labelled "slower reaction") and the normal violet braking part; the new plate `ms11s-breath-test-sign-v1.png` (a blank roadside sign board on a stand, with coded words "Random breath testing" on its face) at the right, about 520 px tall; a coded readout card, 52 px, "BAC 0.00" (green) with the chip "L and P plates: zero" (44 px); chips "What is BAC, and how is it estimated?", "Next" and "?". No formula shown. This is f05's opening frame; scene 13 returns to it silently after the notes.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 60 ÷ 3.6 = 16.67 m/s; × 1.5 = 25 m exactly (unrounded); + 36 = 61 m; slip 60 × 1.5 = 90.
  (b) Reaction at 1.5 s: v ÷ 3.6 × 1.5 = 5v/12: 30 → 12.5, 60 → 25, 90 → 37.5, 120 → 50. Braking 0.01v²: 9, 36, 81, 144. Totals 21.5, 61, 118.5, 194; 194 ÷ 61 ≈ 3.18.
  (c) The reason for × 4 (said in plain words): at constant deceleration, braking distance is v²/(2a); in words, twice the speed covers twice the ground each second for twice as long. Not shown as a formula.
  (d) Site model: 0.3v = v ÷ 3.6 × 1.08 s; at 50 km/h, 25 + 15 = 40 m (site `we-1`); at 40 and 80, 28 m and 88 m (site `we-2`, not used on screen).
  (e) Slower reaction: 60 ÷ 3.6 × 2.5 ≈ 41.7 m, 16.7 m more than at 1.5 s.
  (f) A1: 72 ÷ 3.6 = 20; 20 × 1.2 = 24; 24 + 29 = 53; slip 86.4. A2: D(30) = 9 + 9 = 18; D(60) = 36 + 18 = 54; 54 ÷ 18 = 3.
  (g) Pronunciations: "D equals zero point zero one v squared, plus zero point three v"; "sixteen point seven metres per second".

Main question: *A light turns red ahead of a car doing 60 km/h. How far does the car travel before it stops, and why does speed matter so much?*
Entry knowledge (f04a, f01): km/h to m/s; distance = speed × time; substitution with a square.
Stops after: stopping distance = reaction + braking, the reaction part from m/s, braking from a table or a supplied formula, why doubling speed more than doubles it, and what lengthens each part.
Handoff: math-s11-f05: "alcohol slows reactions: what is BAC, and why is it zero for L and P plates?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): reaction teal; braking violet; stopping total amber; speed blue; answer green; mistake red. Header strip "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a red light at sixty
> A P-plate driver is doing sixty kilometres an hour when the light ahead turns red. Before the brakes even go on, the driver has to notice the light, and move their foot. That takes about one and a half seconds, and for all that time, the car is still doing sixty. Then the brakes need time to slow it down. So how far does a car travel before it stops, and why does speed matter so **much**?

Visual: opens on f04a's final frame exactly (see Boundary). On "turns red" the light's red ring pulses; on "notice the light" the stopwatch hand sweeps 0 to 1.5 s while the car keeps moving at full speed along the road (the 16.7 m-a-second chip stays); on "still doing sixty" hand tag "still at full speed". On "slow it down" the car eases to a stop short of the light. On "much" heading "Stopping distance" writes on, and the question chip "How far before it stops?" moves to the top right.

### 2. two parts
> Stopping distance has two parts. The reaction distance is how far the car travels while the driver reacts, still at full speed. The braking distance is how far it travels once the brakes are on, while it slows to a stop. So stopping distance equals reaction distance plus braking **distance**. Leave out the reaction part, and you'll think the car stops much sooner than it **does**.

Visual: stage change: the stopping strip (`StoppingDistanceStrip`, about 1,600 px wide) fills the middle band: the road, the car at the left, the light at the right. The strip runs once: a teal bar grows behind the car while the stopwatch badge (top left, 220 px) ticks to 1.5 s, labelled "reaction distance" with hand tag "still at full speed"; then a violet bar grows as the car slows, labelled "braking distance", hand tag "slowing to a stop". On "distance" (bold) the formula strip, 52 px: "stopping distance = reaction distance + braking distance" (stopping amber, reaction teal, braking violet), and an amber bracket spans both bars, hand tag "reacting + braking". On "does" the teal bar flashes grey and the car's ghost (grey outline) stops where the violet bar alone would end, well short of the real stop; a red tag "braking only?" is crossed (caption "the car keeps moving while the driver reacts").

### 3. worked example: sixty kilometres an hour
> Here's the method. A car travels at sixty kilometres an hour. The driver's reaction time is one point five seconds, and the braking distance is thirty-six metres. Find the stopping distance. Step one, change the speed to metres per second, because the time is in seconds. Sixty over three point six is about sixteen point seven metres per **second**. Step two, reaction distance equals speed times reaction time. Keep the full value in the calculator, and sixty over three point six, times one point five, is exactly twenty-five **metres**. Step three, add the braking distance. Twenty-five plus thirty-six is sixty-one metres, so the car needs sixty-one metres to **stop**. Multiplying sixty by one point five is the slip. Ninety metres mixes kilometres per hour with **seconds**.

Visual: clear change to the g01 board. Task strip, 44 px: "A car travels at 60 km/h. The driver's reaction time is 1.5 s and the braking distance is 36 m. Find the stopping distance." Givens card, 44 px: "speed = 60 km/h" (blue), "reaction time = 1.5 s", "braking distance = 36 m (example value, dry road)" (violet). A small stopping strip at the top of the board, both bars empty. Rows, 52 px: on "second" "60 ÷ 3.6 ≈ 16.7 m/s", grey chip "f04a: km/h ÷ 3.6 = m/s", hand tag "m/s first"; on "metres" "reaction = 60 ÷ 3.6 × 1.5 = 25 m" (teal), hand tag "keep it in the calculator", and the teal bar fills to "25 m"; "stopping = 25 + 36" with the violet bar filling to "36 m"; on "stop" "= 61 m" framed answer (green): "The car needs 61 m to stop.", the amber bracket "61 m". On "sixty by one point five" a red slip "60 × 1.5 = 90 m" writes small at the right; on "seconds" it is crossed (caption "km/h and seconds don't mix: m/s first").

### 4. why speed matters so much
> Now watch what happens as the speed goes up. The reaction time stays at one and a half seconds, so the reaction distance grows in step with the speed. Double the speed, and you double the reaction distance. But the braking distance grows much faster. Double the speed, and the braking distance is four times as **long**. Here's why. Twice as fast, the car covers twice the ground each second, and it also takes twice as long to slow down, so twice times twice is four. At a hundred and twenty, the stopping distance is a hundred and ninety-four metres, more than three times the sixty-one metres at **sixty**.

Visual: stage change: the stopping strip fills the top half; the speed slider simulation under it, 30 to 120 km/h. A live table, 44 px, at the bottom: columns "speed (km/h)", "reaction (m)" (teal), "braking (m)" (violet, header note "example values"), "stopping (m)" (amber). The slider steps 30, 60, 90, 120; each step re-runs the strip and fills its row: 30 | 12.5 | 9 | 21.5; 60 | 25 | 36 | 61; 90 | 37.5 | 81 | 118.5; 120 | 50 | 144 | 194. On "double the reaction distance" the 30 and 60 teal cells ring, hand tag "speed × 2: reaction × 2". On "long" the 60 and 120 violet cells ring (36 and 144), hand tag "speed × 2: braking × 4", and the violet bar visibly stretches to four lengths. On "here's why" a small two-panel strip: "2 × the ground each second" and "2 × as long braking", joined by "2 × 2 = 4", hand tag "twice as far each second, twice as long". On "sixty" (final bold) the 61 and 194 cells ring amber, row "194 ÷ 61 ≈ 3.2".

### 5. a formula with both parts built in
> Some questions give you one formula with both parts built in. A road-safety model says D equals zero point zero one v squared, plus zero point three v, where v is the speed in kilometres per hour, and D is the stopping distance in metres. The zero point three v part is the reaction distance, for a driver who reacts in just over a second. The zero point zero one v squared part is the braking distance. At fifty kilometres an hour, that's twenty-five plus fifteen, forty **metres**. Just substitute, the way we did in f01.

Visual: clear change: formula strip, 52 px: "D = 0.01v² + 0.3v" with "0.01v²" violet and "0.3v" teal, labels "v: speed (km/h)" (blue), "D: stopping distance (m)" (amber); hand tag "both parts built in". On "reaction distance" a teal bracket under "0.3v", chip "reaction (just over 1 s)"; on "braking distance" a violet bracket under "0.01v²", chip "braking". Rows, 52 px: "D = 0.01(50)² + 0.3(50)" (50 blue in brackets), "= 25 + 15" (25 violet, 15 teal); on "metres" "= 40 m" framed green, and a small stopping strip shows a violet 25 m and a teal 15 m (teal first). Grey chip "f01: substitute in brackets".

### 6. what makes it longer
> Anything that slows the driver's reaction makes the reaction part longer. Tiredness, a phone, and alcohol all do it. At sixty, a reaction time of two and a half seconds, instead of one and a half, adds about seventeen metres before the brakes even **start**. And a wet road makes the braking part longer, because the tyres grip the road less. So the same speed can need a lot more room to **stop**.

Visual: stage change: the stopping strip at 60 km/h (teal 25 m, violet 36 m) across the middle. The stretch toggles simulation: a toggle "reaction time 2.5 s" switches on; only the teal bar stretches, from 25 m to about 41.7 m, a bracket "+16.7 m" (teal), hand tag "slower reaction: longer teal"; three small grey chips beside it: "tired", "phone", "alcohol". On "start" the toggle resets. A toggle "wet road" switches on; only the violet bar stretches (no number; label "longer: less grip"), hand tag "wet road: longer violet". On "stop" (bold) both toggles on together and the amber bracket reaches well past the original stop line.

### 7. memory aid
> Here's the idea to keep. Stopping distance is reacting plus braking. Double the speed, and the reacting part doubles, but the braking part is four times as **long**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two-part stopping strip at 60 and 120 km/h, small, one above the other. Main line, hand font 56 px: "Stopping = reacting + braking." On "long" the key line, 40 px: "Double the speed: reacting × 2, braking × 4." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A car travels at seventy-two kilometres per hour, and the driver's reaction time is one point two seconds. Convert seventy-two kilometres per hour to metres per second. Find the reaction distance. At this speed the braking distance is twenty-nine metres, so find the stopping distance. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A car travels at 72 km/h. The driver's reaction time is 1.2 seconds. (a) Convert 72 km/h to metres per second. (b) Find the reaction distance. (c) At this speed the braking distance is 29 m. Find the stopping distance." The full question stays on screen. Picture slot: an empty two-part stopping strip (teal and violet outlines, no numbers). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Seventy-two over three point six is twenty metres per second. Twenty times one point two is twenty-four metres of reaction **distance**. Add the braking distance, twenty-four plus twenty-nine, fifty-three **metres**. Seventy-two times one point two, eighty-six point four, is the slip. Change to metres per second **first**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "(a) 72 ÷ 3.6 = 20 m/s"; on "distance" "(b) 20 × 1.2 = 24 m" (teal), the strip's teal part fills; on "metres" "(c) 24 + 29 = 53 m" framed green, the violet part fills and the amber bracket reads "53 m". On "first" a red slip "72 × 1.2 = 86.4 m" writes and is crossed (caption "m/s first"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A road-safety model gives the stopping distance, D metres, at a speed of v kilometres per hour, as D equals zero point zero one v squared, plus zero point three v. Find D at thirty, and at sixty kilometres per hour. When the speed doubles, what happens to the stopping distance? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A road-safety model gives the stopping distance D metres at a speed of v km/h as D = 0.01v² + 0.3v. (a) Find D when v = 30 and when v = 60. (b) When the speed doubles from 30 to 60 km/h, what happens to the stopping distance?" Picture slot: the car badge on a short road strip, no distances. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> At thirty, nine plus nine is eighteen metres. At sixty, thirty-six plus eighteen is fifty-four **metres**. Fifty-four is three times eighteen, so doubling the speed tripled the stopping distance. Saying it doubles is the slip. The braking part grows with the speed **squared**.

Visual: the card shrinks to the top. Rows, 44 px: "D(30) = 0.01(30)² + 0.3(30) = 9 + 9 = 18 m"; on "metres" "D(60) = 36 + 18 = 54 m"; row "54 ÷ 18 = 3"; framed answer (green) "(a) 18 m, 54 m (b) it triples". On "squared" a red slip "doubles" writes and is crossed (caption "the braking part grows with the speed squared"). Hold about 1 s.

### 12. handoff
> So anything that slows a driver's reaction stretches the stopping distance, and alcohol is one of the biggest. That's why NSW measures alcohol in drivers, as blood alcohol content. If you're on your L or P plates, the limit is zero. So how is it estimated, and what does the number mean? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame (see Decisions, "Handoff"): the road, the car at 60 km/h and the stopping strip; on "slows a driver's reaction" the teal part stretches ("2.5 s, slower reaction"); on "blood alcohol content" the breath-test sign plate slides in at the right with its coded words; on "L or P plates" the readout "BAC 0.00" and the chip "L and P plates: zero"; on "next" chips "What is BAC, and how is it estimated?", "Next" and "?". Hold about 2 s. This is f05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Stopping distance = reaction distance + braking distance.
- Reaction distance = speed in m/s × reaction time in s.
- Change km/h to m/s first: ÷ 3.6.
- Double the speed: reaction × 2, braking × 4.
- Slow reactions and wet roads make stopping distance longer.

Memory aid (framed card, right side, as in scene 7): *Stopping = reacting + braking.* Key: *Double the speed: reacting × 2, braking × 4.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and f05's opening frame.

## Teaching checks

- **Does it explain causes?** Why a reaction distance exists: the car keeps its speed until the brakes go on (1, 2). Why m/s: the reaction time is in seconds (3). Why the reaction part doubles: same time, twice the speed (4). Why braking quadruples: twice the ground each second, for twice as long (4). Why a wet road matters: less grip, so a longer braking part (6). Why alcohol matters here: it slows reactions (6, 12).
- **Misconceptions addressed:** stopping distance as braking only (2, MS-78); km/h × seconds (3 crossed, A1 crossed); doubling the speed doubles the stopping distance (4, A2 crossed).
- **Visual standard, item by item:** 1 the car at the red light from the first frame, the strip on the same road; 2 a new stage every 30 to 60 s; 3 the stopping strip, the speed slider with a live table, the stretch toggles; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the violet bar stretching to four lengths while the teal one only doubles.
- **One idea at a time:** the two parts (2), the calculation (3), why speed matters (4), a supplied model (5), what lengthens each part (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 20 s.
- **Avoided double teaching:** f04a's ÷ 3.6 and f01's substitution are recalled in grey chips.
- **Syllabus coverage:** `ci61d581aa`, stopping-distance part: calculate stopping distances (3 to 5, A1, A2; key notes 1, 2), with change of units (3, A1; key note 3), using stopping distance = reaction distance + braking distance (2 to 6; key notes 1, 4, 5).
- **Out of scope by design:** BAC (f05); distance-time graphs and multi-leg speed (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A car travels at 72 km/h. The driver's reaction time is 1.2 seconds. (a) Convert 72 km/h to metres per second. (b) Find the reaction distance. (c) At this speed the braking distance is 29 m. Find the stopping distance."
Model answer: (a) 72 ÷ 3.6 = 20 m/s. (b) 20 × 1.2 = 24 m. (c) 24 + 29 = 53 m. Classic mistake (crossed): "72 × 1.2 = 86.4 m". The braking distance is an invented example.

**Attempt 2 (scene 10; original wording of the site's drill, HSC style, 3 marks suggested).** "A road-safety model gives the stopping distance D metres at a speed of v km/h as D = 0.01v² + 0.3v. (a) Find D when v = 30 and when v = 60. (b) When the speed doubles from 30 to 60 km/h, what happens to the stopping distance?"
Model answer: (a) D(30) = 9 + 9 = 18 m; D(60) = 36 + 18 = 54 m. (b) 54 = 3 × 18, so it triples (more than doubles), because the braking part grows with the square of the speed. Classic mistake (crossed): "doubles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example | 60 ÷ 3.6 ≈ 16.7 m/s; 60 ÷ 3.6 × 1.5 = 25 m; 25 + 36 = 61 m; slip 60 × 1.5 = 90 | 1 to 3 |
| Speed table (1.5 s; braking 0.01v², example values) | 30: 12.5 + 9 = 21.5; 60: 25 + 36 = 61; 90: 37.5 + 81 = 118.5; 120: 50 + 144 = 194; 194 ÷ 61 ≈ 3.2 | 4 |
| Site model (`we-1`) | D = 0.01v² + 0.3v; v = 50: 25 + 15 = 40 m | 5 |
| Slower reaction | 60 ÷ 3.6 × 2.5 ≈ 41.7 m; 41.7 − 25 ≈ 16.7 m more | 6, 12 |
| A1 | 72 ÷ 3.6 = 20 m/s; 20 × 1.2 = 24 m; 24 + 29 = 53 m; slip 86.4 | 8, 9 |
| A2 (site drill) | D(30) = 18 m; D(60) = 54 m; 54 ÷ 18 = 3 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `s11f/verify.py`, `python -I`; 201 checks across f01 to f08, 0 failures); Codex to re-check.

- 60/3.6 = 16.666...; (60/3.6) × 1.5 = 25; 25 + 36 = 61; 60 × 1.5 = 90.
- v/3.6 × 1.5 at 30, 60, 90, 120: 12.5, 25, 37.5, 50; 0.01v²: 9, 36, 81, 144; totals 21.5, 61, 118.5, 194; 194/61 = 3.18...
- 0.01(50)² + 0.3(50) = 40; 0.3v = (v/3.6) × T gives T = 27/25 = 1.08 s.
- (60/3.6) × 2.5 = 41.666...; 41.666... − 25 = 16.666...
- 72/3.6 = 20; 20 × 1.2 = 24; 24 + 29 = 53; 72 × 1.2 = 86.4.
- 0.01(30)² + 0.3(30) = 18; 0.01(60)² + 0.3(60) = 54; 54/18 = 3.

**Sources (Codex confirms in the maths check, ruling 32 pattern):** the reaction time "about 1.5 seconds" against NSW road-safety guidance (nsw.gov.au "Safe stopping distance"; the NSW Road User Handbook), with the date read; that the braking values are fairly labelled "example values (dry road)"; that the site's model is presented as a model, not an official figure.

## Memory aid check

- **"Stopping = reacting + braking."** with key line **"Double the speed: reacting × 2, braking × 4."** Original. Meaning, as said in scene 7: the stopping distance is the sum of the two parts; with the reaction time fixed, the reaction part is in proportion to the speed, and the braking part grows with the square of the speed. Assumptions checked: the reaction time stays the same (stated in scene 4); braking in proportion to v² assumes the same road and brakes (constant deceleration; the wet road in scene 6 is the stated exception); the key line describes the parts, not the total, which grows by between 2 and 4 times (scene 4 shows about 3.2). It helps a new case: at 80 km/h instead of 40 with a 1.5 s reaction, the reaction part goes from about 16.7 m to 33.3 m and the braking part (0.01v²) from 16 m to 64 m. Introduced after scenes 2 to 6.
- **Considered, not used:** "Speed kills" (a slogan that frightens without explaining; the owner's rule is road safety without fear tactics).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11f/count.py`, which reproduces e08's 5,632): **4,782 characters**, 13 scene headings. Characters per scene (1 to 13): 387, 375, 765, 601, 519, 390, 161, 318, 312, 310, 269, 300, 75.

At 13.3 characters per second the speech is about 360 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the strip runs (1, 2, 3), the slider's four steps (4) and the toggles (6) about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 451 s (7 min 31 s)**, 119 s under the 570 s cap. At 4,782 characters it sits just under the 5,000 guide, like r08, r09 and t09 (ruling 55): one half of a split (ruling 88), with no padding. Feedback speech: about 23 s and 20 s.

Reserve trims if the voiced take runs long: scene 4's "Here's why ..." sentence (about 9 s; the two-panel strip can stay silent, but the reason then leaves the narration, so it is the last resort); scene 6's "So the same speed ..." sentence (about 4 s).

## Scene list and build ids

Lesson key `m-s11f04b` (route math-s11-f04, part b). Explainer folder `src/explainer/lessons/math-s11-f04b`; build inputs in `docs/production/claude-pm/lessons/math-s11-f04b/` (at voicing).

In order (13 scenes): hook-red-light, two-parts, worked-sixty, why-speed-matters, supplied-model, what-lengthens, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | f04a's red light |
| 32 to 65 s | 2 | The two-part stopping strip |
| 65 to 135 s | 3 | g01 board: 60 km/h |
| 135 to 195 s | 4 | The speed slider and table |
| 195 to 235 s | 5 | The site's model |
| 235 to 270 s | 6 | The stretch toggles |
| 270 to 285 s | 7 | Framed memory card |
| 285 to 365 s | 8 to 11 | Question cards and countdowns, then feedback |
| 365 to 390 s | 12 | The breath-test frame for f05 |
| 390 to 435 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on f04a's frame; 1 to 2 stage change (the strip fills the middle band); 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-f04b-learning-review.md`, `science_check` = `checks/m-s11-f04b-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-city-road-strip-v1.png`, `ma11-traffic-light-v1.png`, `ma12-stopwatch-v1.png` (from f04a's frame); `ma11-road-sign-post-v1.png` (a green highway-guide sign; not used for the breath test, because a guide-sign green would misrepresent a police testing sign). No breath-test sign plate exists.

Need (painted, new; see the Codex asset brief): `ms11s-breath-test-sign-v1.png` (first seen in this video's final frame; f05 and f06 use it; ruling 17). Reused: `ms11s-p-plate-car-v1.png` (from f03b), `ma11-city-road-strip-v1.png`, `ma11-traffic-light-v1.png`, `ma12-stopwatch-v1.png`.

Coded: the stopping strip and its bars, the slider and table, the formula strips, the toggles, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StackedTotalBar` (inside the strip), `ParameterSlider`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row f04, item 2):
1. **StoppingDistanceStrip** (new, course-neutral; also Year 12 r10 and r12 callbacks): a road strip with a car plate and a stop marker; a two-colour bar (reaction part at full speed while a stopwatch runs, braking part while the car slows) that re-runs for any speed; a speed slider with a linked table; toggles that stretch only the reaction part (reaction time) or only the braking part (a road factor). Inputs: speed (km/h), reaction time (s), a braking function (default 0.01v² m, labelled "example values"). Check: at 60 km/h with 1.5 s the bars read 25 m and 36 m; at 120 km/h, 50 m and 144 m; the car's motion matches the bars (constant speed through the teal part, uniform slowing through the violet part).

## Codex asset brief (Maths S11 F04B, a roadside breath-test sign for f05 and f06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the designs are `docs/production/claude-pm/lessons/math-s11-f04b.md` (final frame), `math-s11-f05.md` and `math-s11-f06.md`. Paint after the learning reviews and maths checks pass and root gives the go-ahead, and before the f04b build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-traffic-light-v1.png` and `maths/ma11-road-sign-post-v1.png`; no text, letters, numbers, logos, police insignia, brand names, people, hands, faces, vehicles, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-breath-test-sign-v1.png` (about 1000 × 1500 px): a free-standing roadside warning sign on a folding metal A-frame stand, the face a blank rectangle (about 70 per cent of the width) in a plain blue with a white border, ready for coded white words; two orange traffic cones beside the stand's feet on a strip of kerb. No lettering, symbols or crest on the face.

Report inspection on the paper background (`#f6f1e7`) at 520 px and 300 px tall and the alpha check, and confirm the blank face is large enough for "Random breath testing" in white at 36 px when the plate is 520 px tall. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-f04b-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm stopping distance is never defined as the braking distance (MS-78), lesson08's `we-4` explanation (MS-77) is not used, and the sources line's reaction time and labels hold.
4. Confirm both attempts carry every demand and neither card nor picture shows an answer.
5. Confirm scene 1 matches f04a's final frame and scene 12's frame shows no BAC formula.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Stopping Distance: Reaction Plus Braking | Year 11 Maths Standard

(Title length: 65 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson07.sa.html

A light turns red ahead of a car doing 60 km/h. How far does the car travel before it stops? See why stopping distance is the reaction distance plus the braking distance, how to find the reaction distance by changing km/h to m/s first, why doubling the speed doubles the reaction part but makes the braking part four times as long, how to use a formula with both parts built in, and why tiredness, phones, alcohol and wet roads all make stopping distance longer. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Formulas and equations. Year 11 is one course for Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024), Year 11:
"Calculate distance, speed and time (with change of units of measurement as required) and stopping distances of vehicles using speed = distance/time and stopping distance = reaction distance + braking distance" (stopping distances in this video; distance, speed and time in the previous one)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

Builds on: Speed, Distance and Time. Next: Blood Alcohol Content Formulas.

#Year11Maths #MathsStandard #RoadSafety #HSCScience

## Open decisions

- **1. Two reaction times (learning review).** The worked example uses 1.5 s and the site's model builds in about 1.08 s ("just over a second"). Check that students are not confused; the alternative is to drop scene 5's sentence about the model's reaction time and say only "the 0.3v part is a reaction distance".
- **2. The reason for × 4 (learning review).** Scene 4 gives the plain-words reason (twice the ground each second, for twice as long). Check it lands for a Standard student without a formula; it is not in the reserve trims unless the take runs well over.
- **3. Site link (root).** The description links lesson07 (the site's stopping-distance model), though the site defines stopping distance as braking distance (MS-78). Root may prefer no link until the site is corrected.

## Review notes

- Student learning review: trace from f04a and f01 only. Check that both parts have plain meanings before the formula; that "m/s first" has its reason; that the × 4 reason is followed; that the site's model reads as the same two parts; that the toggles show which part each cause stretches; that the handoff's BAC line is road safety, not a drinking guide; that the cards give nothing away. Then the Codex maths check and error check, then voicing and a build to grade A.
