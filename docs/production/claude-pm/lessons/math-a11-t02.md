# Maths A11 T02: How do we solve right-triangle problems with bearings and elevation? Choosing the ratio, finding a side or an angle, elevation and depression as alternate angles, true and compass bearings, reverse bearings, and a right-angled two-leg journey (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Designer's decisions for t01 to t08: `../checks/root-decisions-maths-a11-t01-t08.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,031 characters by script (see "Narration length estimate"), 12 scene headings, about 541 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifty-ninth video of Year 11 Mathematics Advanced (2024), outline order 59, Trigonometry and measure of angles (Trigonometry with acute angles). Pre-design pack: `../pre-design/maths-a11/math-a11-t02.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometry-and-measure-of-angles/lesson04.sa.html` (`we-1`, 40 m at 52°, then 25 m further back; with its numbers) and `lesson09.sa.html` (card 05 true and compass bearings; card 06 elevation and depression as alternate angles; `we-2`, S32°W = 212°, return 032°; `we-3`, 12 km on 040° then 9 km on 130°, 15.0 km; Q1's 18 m and 27°, 35.3 m; all with their numbers). Route entry: `math-a11-t02` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; the painted sea cliff and yacht from t01's handoff, and a painted top-view yacht for the maps; every triangle, rose, map line and working row coded.

Owner rules applied: as t01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (sport and travel: a yacht off a sea cliff), Australian spelling, no em dashes, "zero point" decimals, angles always spoken with "degrees", conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Trigonometry with acute angles), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `ci61c6fa90`: "Apply trigonometry to solve problems involving right-angled triangles in two dimensions, true and compass bearings, and angles of elevation and depression"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from t01's final frame exactly (the sea cliff `ma11-sea-cliff-v1.png` with the yacht `ma11-yacht-side-v1.png` 40 m out, a dashed horizontal and sight line with the blue angle "52°", chips "not 30°, 45° or 60°", "cliff height h = ?", "Next: right-triangle problems", "?"). Recalls Year 10 SOH CAH TOA and inverse ratios on a calculator in a phrase, and t01's exact values only by name. Teaches: choosing the ratio from the two sides involved; finding a side (unknown on top, then unknown on the bottom) and an angle (inverse tangent); rounding only at the end; angle of elevation and angle of depression, both from the horizontal, equal as alternate angles; true bearings (clockwise from north, three digits) and compass bearings (N40°E, S32°W), converting and reversing; a two-leg journey whose turn is a right angle (Pythagoras, then tan for the bearing) (`ci61c6fa90`). Stops at right-angled triangles. Not taught: non-right journeys and the cosine rule (t06); angles beyond 90° (t03).

## Decisions

- **Anchor: a yacht off a sea cliff (painted plates, live; t01's handoff).** The cliff gives elevation (looking up from the yacht) and depression (looking down from the top) in one picture, with the sea as a true horizontal; the same yacht then sails on bearings, and a top-view yacht marks it on a coded sea map. Sport and travel; the pack's anchors are orienteering, a phone compass and a roof pitch, but none gives elevation, depression and bearings together. The site's building `we-1` (40 m, 52°, then 25 m further) is re-set on the cliff with its numbers (decisions file, departure 1; ruling 9 on w01 to w14). No Year 11 or Year 12 design uses a cliff or a yacht (grep 17 Nov).
- **Simulations (standard item 3).**
  1. **Drifting yacht** (scene 2): the yacht drifts from 40 m to 65 m from the cliff's foot; the sight line follows it and a live readout "angle of elevation = …°" falls from 52° to 38.2°, with "distance = … m" (violet) beside it.
  2. **Alternate angles** (scene 3; `BearingRose` elevation mode): the clifftop horizontal and the sea surface draw as parallel dashed lines; the sight line cuts both; the two angles light together in blue and a hand "Z" traces between them.
  3. **Bearing sweep** (scenes 4, 5; `BearingRose`): a north line, a blue clockwise arc sweeping from 000° with a three-digit readout; for S32°W the arc pauses at 180° then continues 32°; a second north line draws at the turning point of the journey, and the reverse bearing sweeps from it.
- **Colour roles (the strand's, t01 to t04).** The angle **blue**; the side opposite it **amber**; the side adjacent to it **violet**; the hypotenuse **ink**; ratio values **teal**; answer green; mistake red, crossed slips only; horizontals and north lines dashed grey. On maps, legs are ink and bearings blue.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "know adjacent, want opposite: tan", "the whole 65 m", "keep 51.197…", "further: smaller angle", "unknown on the bottom: divide", "from the horizontal", "alternate angles", "clockwise from N", "three digits", "start at S, turn to W", "turn round: ± 180°", "new north here", "220° − 130° = 90°", "right angle: Pythagoras", "add to the first bearing".
- **Stage changes (standard item 2).** t01's cliff frame and the first height (1); the drifting yacht (2); the alternate angles and a depression example (3); the bearing rose (4); the sea map and the journey (5); framed card (6); question cards (7 to 10); the 120° ray (11); key notes (12).
- **Worked examples (g01 layout).** 1: lesson04 `we-1` (a), h = 40 tan 52° ≈ 51.2 m. 2: `we-1` (b), 38° from 65 m (crossed "25 m"). 3: lesson09 Q1 re-set, d = 18/tan 27° ≈ 35.3 m (crossed "from the vertical"). 4: lesson09 `we-2`, S32°W = 212°, return 032° (crossed "148°"). 5: lesson09 `we-3`, 15 km and the bearing 077°.
- **Memory aid.** Framed card: "Elevation looks up, depression looks down: both from the horizontal." Second line: "Bearings: from north, clockwise, three digits; a new north at every turn."
- **Visual surprise.** The alternate angles: the angle you look up at from the yacht and the angle you look down at from the top light up as the same angle, joined by a "Z".
- **Site notes (pack section 8; S11-12, S11-13 and minor items).** S11-13 (the ladder's reason) does not arise: the ladder is not used. S11-12 (inverse cosine and quadrants) does not arise here: only inverse tangent is used. lesson09's "marks are lost without it" (three digits) is not used; the narration says bearings are "always written with three digits". lesson09 Q2's "from the first leg reversed" wording is not used; attempt 2 is the pack's own question. lesson04's 1:12 ramp is not used.
- **Plain meanings at first use.** Angle of elevation ("measured up from the horizontal to where you're looking"); angle of depression ("measured down from the horizontal at your eye"); alternate angles ("the Z-shaped pair made when a line cuts two parallel lines, always equal", recalled from Year 8); true bearing; compass bearing; reverse bearing ("the bearing straight back").
- **Attempts (pack questions).** A1: cliff 30 m, depression 12°, d = 30/tan 12° ≈ 141 m; crossed "30 tan 12° ≈ 6 m". A2: 5 km on 070°, then 12 km on 160°: the turn is 90°, 13 km, bearing about 137°; crossed "067°".
- **Mistake scene:** none separate. The gap instead of the whole distance (2 crossed); depression from the vertical (3 crossed); bearings measured anticlockwise (4 crossed); multiplying when the unknown is on the bottom (A1 crossed); forgetting to add the first bearing (A2 crossed).
- **Cause chain taught, in order:** (1) the two sides involved (known and wanted) pick the ratio (1); (2) an angle comes back from a ratio by the inverse, and a larger distance gives a smaller angle (2); (3) the horizontal at the top is parallel to the sea, so depression from the top equals elevation from below (3); (4) a true bearing is a clockwise turn from north, so a compass bearing converts by starting at N or S and turning (4); (5) north lines are parallel, so the angle at a turn comes from the reverse bearing, and a right angle there gives Pythagoras (5).
- **Entry knowledge (route):** t01 (exact values at 30°, 45°, 60°); Year 10 SOH CAH TOA, inverse ratios on a calculator, elevation and depression, compass directions.
- **What later videos rely on.** t06 reuses the new north line and the reverse bearing for a non-right turn (the yacht again: 12 km on 040°, then 9 km on 100°); t04's and t07's rule choices assume "pick the ratio from the sides involved".
- **Handoff (to math-a11-t03, "How does a point on a circle define trig ratios for any angle?").** Scene 11: coded axes (no plate) with a blue ray at 120° from the positive x-axis and its blue angle arc; a calculator strip "sin 120° = 0.8660…"; a red-outlined chip "no right triangle holds 120°"; chips "sin 120° = ?", "Next: any angle" and "?". This is t03's opening frame (the t03 pack's start).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: h = 40 tan 52° = 51.1977 m ≈ 51.2 m; tan θ = 51.1977/65 = 0.7877; θ = 38.226° ≈ 38°. Slip: tan⁻¹(51.1977/25) = 63.97°.
  (b) Depression: 18/tan 27° = 35.327 m ≈ 35.3 m; slip 18 tan 27° = 9.17 m (not shown).
  (c) S32°W: 180 + 32 = 212°; return 212 − 180 = 032°; anticlockwise slip 180 − 32 = 148°. N40°E = 040°.
  (d) `we-3`: interior angle at the turn 220° − 130° = 90°; d = √(144 + 81) = 15 km; tan⁻¹(9/12) = 36.87°; bearing 040° + 36.87° = 076.87° ≈ 077° (checked by coordinates: the finish is at (14.61, 3.41) km east and north).
  (e) A1: 30/tan 12° = 141.14 m; slip 30 tan 12° = 6.38 m. A2: 250° − 160° = 90°; √(25 + 144) = 13 km; tan⁻¹(12/5) = 67.38°; 070° + 67.38° = 137.38° ≈ 137° (coordinates: finish (8.80, −9.57) km, bearing 137.38°).
  (f) Pronunciations: bearings read digit by digit, "zero four zero degrees", "two one two degrees"; compass bearings "south thirty-two degrees west"; "fifty-one point one nine seven".
  (g) Windows: cliff plate scaled so 40 m spans 760 px; map grid 1 km = 48 px.

Main question: *How do we solve right-triangle problems with bearings and elevation? How high is the cliff, and where does the yacht end up?*
Entry knowledge (t01, Year 10): exact values; SOH CAH TOA; inverse ratios.
Stops after: right-triangle problems with elevation, depression, true and compass bearings, reverse bearings and a right-angled journey. No non-right triangles, no angles beyond 90°.
Handoff: math-a11-t03: "a calculator gives sin 120° = 0.866, but no right triangle holds 120°: what does it mean?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the angle blue; opposite amber; adjacent violet; hypotenuse ink; values teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how high is the cliff?
> Here's the yacht, forty metres out from the foot of the cliff. Looking up from the water to the clifftop, the line of sight rises fifty-two degrees above the horizontal. That's the angle of elevation, measured up from the horizontal to where you're looking. The cliff is vertical and the sea is flat, so there's a right angle at the foot. Now choose the ratio from the two sides involved, the one you know and the one you want. We know the side next to the angle, forty metres, and we want the side opposite it, the height. Opposite and adjacent means **tangent**. So h is forty times tangent fifty-two degrees, about fifty-one point two **metres**. So how do we solve right-triangle problems like this, with elevation and with bearings, the directions sailors **use**?

Visual: opens on t01's final frame exactly (the cliff, the yacht 40 m out, the dashed horizontal and sight line, "52°", chips "not 30°, 45° or 60°", "cliff height h = ?", "Next: right-triangle problems", "?"). On the first sentence the "Next" chips fade. On "angle of elevation" hand tag "from the horizontal" on the blue arc. On "right angle" a square corner mark draws at the cliff's foot. The triangle's sides colour: "40 m" violet (adjacent), the cliff face amber (opposite), the sight line ink. On "tangent" hand tag "know adjacent, want opposite: tan" and a row, 52 px: "tan 52° = h/40". On "metres" rows "h = 40 tan 52° = 51.197…" and "h ≈ 51.2 m" (green frame). On "use" heading "Right triangles, elevation and bearings", and the question chip "Height? Direction?" moves to the top right.

### 2. drifting back: finding an angle
> Now the yacht drifts another twenty-five metres out. What's the new angle of elevation? The height hasn't changed, and the side next to the angle is now the whole sixty-five metres, not twenty-five. Keep the unrounded height in your calculator, fifty-one point one nine seven and so on. Then tangent of the angle is that height over sixty-five, about zero point seven eight **eight**. To turn a ratio back into an angle, use inverse tangent. It gives about thirty-eight point two degrees, so thirty-eight **degrees**. That makes sense, because from further away the clifftop looks lower. Using twenty-five metres as the adjacent side is the **slip**. It gives an angle bigger than fifty-two degrees, from further away.

Visual: stage continues (same cliff). The yacht drifts out (simulation 1): the sight line follows it, readouts at the top right (52 px) "distance = … m" (violet) and "angle of elevation = …°" (blue) run from 40 m and 52° to 65 m and 38.2°. A violet bracket "40 + 25 = 65 m" spans the water; hand tag "the whole 65 m". Rows, 52 px: "tan θ = 51.197… ÷ 65" with hand tag "keep 51.197…"; on "eight" "tan θ ≈ 0.7877"; on "degrees" "θ = tan⁻¹(0.7877…) ≈ 38.2° ≈ 38°" (green frame), hand tag "further: smaller angle". On "slip" a red slip "tan θ = 51.2 ÷ 25 ⇒ θ ≈ 64°" writes and is crossed, caption "use the whole 65 m".

### 3. looking down: depression
> Now look down from the clifftop. The angle of depression is measured down from the horizontal at your eye. Here's the useful part. The horizontal at the top is parallel to the sea, and the line of sight cuts across both. So the angle of depression from the top equals the angle of elevation from below. They're alternate angles, the Z-shaped pair, and they're always **equal**. Try one. Further along the coast, from a lower cliff eighteen metres high, the angle of depression to the anchored yacht is twenty-seven degrees. So at the yacht, the elevation is twenty-seven degrees too. The height, eighteen, is opposite, and the distance d is adjacent. Tangent twenty-seven degrees is eighteen over d, so with d on the bottom, divide. d is eighteen over tangent twenty-seven degrees, about thirty-five point three **metres**. Measuring depression down from the vertical is the **slip**.

Visual: clear change: the cliff plate at the left with the clifftop's horizontal (dashed grey) and the sea surface (dashed grey) as parallel lines, the sight line from the top to the yacht. On "angle of depression" the blue arc at the top draws below the top horizontal, hand tag "from the horizontal". On "equal" the elevation arc at the yacht and the depression arc at the top light together, a hand "Z" traces between them, hand tag "alternate angles". The plate shrinks to the left (700 px) and a g01 strip opens at the right. Task strip, 44 px: "From the top of an 18 m cliff, the angle of depression to a yacht is 27°. Find the distance d." Givens card, 40 px: "height 18 m (opposite)" (amber), "elevation at yacht = 27°" (blue). Rows, 52 px: "tan 27° = 18/d"; "d = 18 ÷ tan 27°" with hand tag "unknown on the bottom: divide"; on "metres" "d ≈ 35.3 m" (green frame). On "slip" a red slip "depression measured from the vertical: 63°" writes and is crossed, caption "from the horizontal".

### 4. bearings
> Now direction. At sea, a true bearing is the angle measured clockwise from north, always written with three digits. East is zero nine zero degrees, south is one eight zero degrees, and west is two seven zero degrees. A compass bearing starts at north or south, then turns towards east or west. North forty degrees east is zero four zero degrees. For a southerly one, start from south. Say the yacht sails south thirty-two degrees west. Start facing south, one eight zero degrees, then turn thirty-two degrees further clockwise, towards west. That's two one two **degrees**. To come straight back, turn around, which is one eighty degrees. Adding would pass three hundred and sixty degrees, so subtract, and the return bearing is zero three two **degrees**. Turning the other way from south, to get one four eight degrees, is the **slip**.

Visual: stage change: `BearingRose` (900 px) at the left, the top-view yacht `ma11-yacht-top-v1.png` (120 px) at its centre; north line dashed grey with "N". On "clockwise from north" a blue arc sweeps clockwise from 000° with a three-digit readout (52 px), hand tags "clockwise from N" and "three digits"; markers "090°", "180°", "270°". On "North forty degrees east" the arc sweeps to 040°, label "N40°E = 040°". On "south thirty-two degrees west" the arc sweeps to 180° (pause, hand tag "start at S, turn to W"), then on through 32°; on "degrees" (first) the readout "212°" (green frame) and label "S32°W". On "come straight back" the yacht turns round, the arc's ray reverses, hand tag "turn round: ± 180°", rows at the right, 52 px: "212° − 180°"; on "degrees" (second) "return: 032°" (green frame). On "slip" a red slip "S32°W = 148°" writes and is crossed, caption "that turned anticlockwise".

### 5. a journey with a right-angle turn
> Now a journey with a turn. The yacht sails twelve kilometres on a bearing of zero four zero degrees, then nine kilometres on one three zero degrees. How far is it from the start? At the turning point, draw a new north line, because each bearing is measured from north where you are. Looking back along the first leg is the reverse bearing, two two zero degrees. The second leg heads off at one three zero degrees. The angle between them is two hundred and twenty minus a hundred and thirty, so ninety **degrees**. A right angle, so Pythagoras gives the distance: the root of twelve squared plus nine squared, fifteen **kilometres**. And which way is the finish? At the start, tangent of the angle between the first leg and the line to the finish is nine over twelve, so about thirty-six point nine degrees. The second leg turned clockwise, so add it to zero four zero degrees, and the bearing is about zero seven seven **degrees**.

Visual: clear change to the coded sea map (grid, 1 km = 48 px) at the left, the start "O" with its north line. Task strip, 44 px: "12 km on 040°, then 9 km on 130°. Distance and bearing from the start?" The first leg draws (ink, "12 km") with its blue arc "040°" from north; the top-view yacht moves along it. On "new north line" a second dashed north line draws at the turn "P", hand tag "new north here". The reverse bearing "220°" sweeps from P's north back along the first leg; the second leg "130°" sweeps and draws (ink, "9 km"). On "degrees" (first) the angle at P shows a right-angle mark, hand tag "220° − 130° = 90°". Rows at the right, 52 px: on "kilometres" "d = √(12² + 9²) = 15 km" (green frame), hand tag "right angle: Pythagoras". Rows: "tan α = 9/12, α ≈ 36.9°"; on "degrees" (last) "bearing ≈ 040° + 36.9° ≈ 077°" (green frame), with the blue arc from O's north sweeping to the finish; hand tag "add to the first bearing".

### 6. memory aid
> Here's the summary. Elevation looks up and depression looks down, and both are measured from the horizontal. Bearings start at north, turn clockwise, and use three **digits**. And every turning point gets its own north line.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the cliff with both blue angles and the "Z", and a small rose with "212°". Main line, hand font 56 px: "Elevation looks up, depression looks down: both from the horizontal." On "digits" the key line, 40 px: "Bearings: from north, clockwise, three digits; a new north at every turn." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. From the top of a vertical cliff thirty metres high, the angle of depression to a buoy is twelve degrees. Find the horizontal distance from the base of the cliff to the buoy, to the nearest metre. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "From the top of a vertical cliff 30 m high, the angle of depression to a buoy is 12°. Find the horizontal distance from the base of the cliff to the buoy, to the nearest metre." The full question stays on screen. Picture slot: a coded HSC-style side view (vertical line "30 m", a horizontal at the top, the sight line to a dot on the waterline, "12°" marked below the top horizontal); no distance shown. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> At the buoy, the angle of elevation is also twelve degrees, because they're alternate **angles**. The height, thirty, is opposite, and the distance is adjacent, so tangent twelve degrees is thirty over d. With d on the bottom, d is thirty over tangent twelve degrees, about a hundred and forty-one **metres**. Multiplying by tangent twelve degrees instead gives about six metres. That's the **slip**.

Visual: the card shrinks to the top (30 px). On "angles" the elevation arc at the buoy lights blue with a "Z" to the top's arc. Rows, 44 px: "tan 12° = 30/d"; "d = 30 ÷ tan 12°"; on "metres" "d ≈ 141 m" (green frame). On "slip" a red slip "30 tan 12° ≈ 6 m" writes and is crossed, caption "unknown on the bottom: divide". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A hiker walks five kilometres on a true bearing of zero seven zero degrees, then twelve kilometres on one six zero degrees. Explain why the path turns through a right angle. Then find the distance from the start, and the true bearing of the finish from the start, to the nearest degree. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A hiker walks 5 km on a true bearing of 070°, then 12 km on a true bearing of 160°. (a) Explain why the path turns through a right angle. (b) Find the hiker's distance from the start and the true bearing of the finishing point from the start, to the nearest degree." Picture: a coded map with a north line at the start only; no legs drawn. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> At the turn, the reverse of the first leg is two five zero degrees, and two fifty minus one sixty is ninety **degrees**. So Pythagoras gives thirteen **kilometres**. At the start, tangent of the angle is twelve over five, about sixty-seven point four degrees. Add zero seven zero degrees, and the bearing is about one three seven **degrees**. Stopping at zero six seven is the **slip**.

Visual: the card shrinks to the top. The map draws both legs with a new north line at the turn. Rows, 44 px: on "degrees" (first) "250° − 160° = 90°" with a right-angle mark; on "kilometres" "d = √(5² + 12²) = 13 km" (green frame); "tan α = 12/5, α ≈ 67.4°"; on "degrees" (second) "bearing ≈ 070° + 67.4° ≈ 137°" (green frame). On "slip" a red slip "067°" writes and is crossed, caption "add the first bearing". Hold about 1 s.

### 11. handoff
> Every angle today was smaller than ninety degrees. But a calculator will happily give sine of a hundred and twenty degrees: zero point eight six six. No right-angled triangle can hold a hundred and twenty degree angle, so opposite over hypotenuse can't be what it means. So what does sine of a hundred and twenty degrees actually measure? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to coded axes (no plate), x and y from −2 to 2, 520 px per unit. On "a hundred and twenty degrees" (first) a blue ray draws from the origin at 120° from the positive x-axis with its blue arc "120°", and a calculator strip writes "sin 120° = 0.8660…". On "No right-angled triangle" a faint grey right triangle tries to fit the angle and fails (its corner snaps past 90°), then a red-outlined chip "no right triangle holds 120°". On "next" chips "sin 120° = ?", "Next: any angle" and "?". Hold about 2 s. This is t03's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Pick the ratio from the two sides involved; round only at the end.
- Elevation and depression: from the horizontal; equal (alternate angles).
- True bearing: clockwise from north, three digits (S32°W = 212°).
- Reverse bearing: add or subtract 180°.
- New north line at every turning point.

Memory aid (framed card, right side, as in scene 6): *Elevation looks up, depression looks down: both from the horizontal.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and t03's opening frame.

## Teaching checks

- **Does it explain causes?** Why tangent: the known and wanted sides are adjacent and opposite (1). Why 65 m: the adjacent side is the whole distance (2). Why the angle shrinks: the same height over a longer base (2). Why depression equals elevation: parallel horizontals and alternate angles (3). Why S32°W is 212°: start at 180° and keep turning clockwise (4). Why a new north line: bearings are measured from north where you are (5). Why add 36.9°: the second leg turned clockwise (5).
- **Misconceptions addressed:** the gap instead of the whole distance (2 crossed); depression from the vertical (3 crossed); anticlockwise bearings (4 crossed); multiplying when the unknown is on the bottom (A1 crossed); forgetting the first bearing (A2 crossed); rounding early (2 tag).
- **Visual standard, item by item:** 1 the yacht and cliff from the first frame (t01's handoff), the yacht on the rose and the map in 4 and 5; 2 a new stage every 40 to 60 s; 3 the drifting yacht with live readouts, the alternate-angle lights, the bearing sweep; 4 fixed roles (angle blue, opposite amber, adjacent violet); 5 large type; 6 hand tags; 7 g01 rows and strips in 1 to 3 and 5; 8 framed card and five bullets; 9 the "Z" lighting both angles as one.
- **One idea at a time:** a side (1), an angle (2), depression (3), bearings (4), a journey (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 29 s and 28 s.
- **Avoided double teaching:** SOH CAH TOA, inverse ratios (Year 10) and t01's exact values are recalled by name only.
- **Syllabus coverage:** `ci61c6fa90` (1 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** non-right journeys and the cosine rule (t06); angles beyond 90° (t03).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "From the top of a vertical cliff 30 m high, the angle of depression to a buoy is 12°. Find the horizontal distance from the base of the cliff to the buoy, to the nearest metre."
Model answer: the angle of elevation from the buoy is also 12° (alternate angles). tan 12° = 30/d, so d = 30/tan 12° ≈ 141.1, about 141 m. Classic mistake (crossed): "30 tan 12° ≈ 6 m".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 4 marks suggested).** "A hiker walks 5 km on a true bearing of 070°, then 12 km on a true bearing of 160°. (a) Explain why the path turns through a right angle. (b) Find the hiker's distance from the start and the true bearing of the finishing point from the start, to the nearest degree."
Model answer: (a) at the turn, the reverse bearing of the first leg is 250°, and 250° − 160° = 90°, so the interior angle is a right angle. (b) d = √(5² + 12²) = 13 km. At the start, tan α = 12/5, α ≈ 67.4°, clockwise from the first leg, so the bearing is 070° + 67.4° ≈ 137°. Classic mistake (crossed): "067°".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Cliff (`we-1` (a)) | 40 m, 52°; h = 40 tan 52° = 51.197… ≈ 51.2 m | 1 |
| Drift (`we-1` (b)) | 65 m; tan θ ≈ 0.7877; θ ≈ 38.2° ≈ 38°; slip ≈ 64° | 2 |
| Depression | 18 m, 27°; d = 18/tan 27° ≈ 35.3 m; slip 63° from vertical | 3 |
| Bearings | 090°, 180°, 270°; N40°E = 040°; S32°W = 212°; return 032°; slip 148° | 4 |
| Journey (`we-3`) | 12 km on 040°, 9 km on 130°; 220° − 130° = 90°; 15 km; α ≈ 36.9°; bearing ≈ 077° | 5 |
| A1 | 30/tan 12° ≈ 141 m; slip ≈ 6 m | 7, 8 |
| A2 | 250° − 160° = 90°; 13 km; α ≈ 67.4°; bearing ≈ 137°; slip 067° | 9, 10 |
| Handoff | sin 120° = 0.8660… | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 and coordinates in Python (17 Nov 2026, scratchpad `t01t08/verify.py`); Codex to re-check.

- 40 tan 52° = 51.197665; 51.197665/65 = 0.787656; tan⁻¹ = 38.2260°. Slip tan⁻¹(51.1977/25) = 63.974°.
- 18/tan 27° = 35.3270.
- S32°W = 212°; 212 − 180 = 032; 180 − 32 = 148.
- `we-3`: 220 − 130 = 90; √(12² + 9²) = 15; tan⁻¹(9/12) = 36.8699°; bearing by coordinates 076.87°.
- A1: 30/tan 12° = 141.139; 30 tan 12° = 6.377.
- A2: 250 − 160 = 90; √(25 + 144) = 13; tan⁻¹(12/5) = 67.380°; bearing by coordinates 137.38°.
- sin 120° = 0.866025.

## Memory aid check

- **"Elevation looks up, depression looks down: both from the horizontal."** Original wording of a standard rule. Meaning, as said in scene 6: an angle of elevation is measured upward from a horizontal line at the observer, and an angle of depression downward from a horizontal line at the observer; neither is measured from the vertical. Assumptions checked: the observer's horizontal and the ground or sea are parallel (true for level ground and the sea over short distances), which is what makes the two angles equal. It helps a new case: from a 30 m tower, a depression of 12° is also the elevation at the ground point (A1).
- **Second line: "Bearings: from north, clockwise, three digits; a new north at every turn."** Assumptions: true bearings only; compass bearings are converted first (scene 4).
- **Considered, not used:** "Never Eat Soggy Weetbix" (the compass points in order; Year 7 knowledge, not this lesson's difficulty).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t01t08/count.py`, which reproduces e08's 5,632 and c10's 5,915): 6,031 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the drifting yacht, the bearing sweeps, the journey) and the 45 s notes scene: about 541 s. Characters per scene (1 to 12): 757, 706, 872, 826, 919, 220, 229, 388, 318, 370, 351, 75. Speech before the notes is about 448 s, under the 570 s cap. Feedback speech: about 29 s and 28 s.

Reserve trims if the voiced take runs long: scene 2's last sentence ("It gives an angle bigger than fifty-two degrees", keep the crossed slip); scene 4's "East is zero nine zero degrees ..." sentence (keep the markers); feedback 2's "At the turn, the reverse of the first leg is two five zero degrees, and" (keep the row) if it measures over 30 s.

## Scene list and build ids

Lesson key `m-a11t02` (route math-a11-t02). Explainer folder `src/explainer/lessons/math-a11-t02`; build inputs in `docs/production/claude-pm/lessons/math-a11-t02/` (at voicing).

In order (12 scene headings): hook-cliff-height, drift-angle, depression, bearings, right-angle-journey, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 55 s | 1 | t01's cliff frame; the height |
| 55 to 105 s | 2 | The drifting yacht; an angle |
| 105 to 170 s | 3 | Alternate angles; a depression example |
| 170 to 230 s | 4 | The bearing rose |
| 230 to 295 s | 5 | The sea map; the journey |
| 295 to 310 s | 6 | Framed memory card |
| 310 to 420 s | 7 to 10 | Question cards and countdowns, then feedback |
| 420 to 450 s | 11 | The 120° ray |
| 450 to 495 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t01's last frame continues into 1; 1 to 2 stage continues (the yacht drifts); 2 to 3 clear change; 3 to 4 stage change to the rose; 4 to 5 clear change to the map; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t02-learning-review.md`, `science_check` = `checks/m-a11-t02-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only, file list): no cliff or yacht plate exists; `ma11-coastal-lookout-v1.png` (c07) is a lookout platform, not a sheer cliff, and is kept for its own video.

Reused (briefed in t01): `ma11-sea-cliff-v1.png`, `ma11-yacht-side-v1.png`. Need (painted, new; see the Codex asset brief): `ma11-yacht-top-v1.png` (this video's rose and map; also t05's handoff and t06).

Coded: every triangle, horizontal, sight line and arc, the readouts, the bearing rose, the sea map and legs, working rows, question cards and pictures, the countdown, hand tags, the framed card and key notes, and the handoff's axes and ray.

### Studio kit use and additions

Uses: `StudioTriangle`, `BearingRose` (bearing and elevation modes), `LiveReadoutBoard`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (from `../checks/maths-a11-kit-needs.md`, trigonometry section):
1. **`BearingRose`** (first use): north lines at each vertex, a clockwise sweep with a three-digit readout (leading zeros kept), compass labels, a reverse-bearing sweep, a second north line at a turning point, and an elevation mode with two parallel horizontals, one sight line and both alternate angles lit together. Check: the readout always shows three digits ("032°", never "32°").
2. **Plate-anchored sight line** (small): a dashed line from the yacht's deck point to the clifftop point (both from sidecars) that follows the yacht as it drifts, with its angle readout. Check: the readout at 40 m equals 52.0° and at 65 m equals 38.2° in the drawn geometry (the plate's vertical scale set so the clifftop is 51.2 m up).

## Codex asset brief (Maths A11 T02, a top-view yacht; also t05's handoff and t06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t02.md`. The cliff and side-view yacht are briefed in `math-a11-t01.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t02 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-yacht-top-v1.png` (600 × 900 px): the same small white yacht as `ma11-yacht-side-v1.png`, seen from directly above, bow pointing straight up the image, sails along the centreline, no wake.

Sidecar JSON (`ma11-yacht-top-v1.json`): the pixel points of the bow tip and the hull's centre. Report inspection on the paper background (`#f6f1e7`) at 120 px (its map size) and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every bearing by coordinates, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm every bearing is written with three digits and measured clockwise from north, and that the journey's turn uses a new north line.
4. Confirm 51.197… is carried unrounded into scene 2, and that no non-right triangle or angle beyond 90° is solved.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, every spoken angle carries "degrees", the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t01's final frame.

## YouTube metadata (draft)

Title: Bearings, Elevation and Depression: Right-Triangle Problems | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson09.sa.html

A yacht sits 40 m from a sea cliff and sees the top at 52°. How high is the cliff, and what happens to the angle as the yacht drifts away? Choose the right ratio from the two sides involved, find a side or an angle, see why the angle of depression equals the angle of elevation, write true and compass bearings, reverse a bearing, and solve a two-leg journey with a right-angle turn. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply trigonometry to solve problems involving right-angled triangles in two dimensions, true and compass bearings, and angles of elevation and depression"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: Exact trig values from two special triangles. Next: Trig ratios for any angle on a circle.

#Year11Maths #MathsAdvanced #Bearings #HSCScience

## Open decisions

- **1. Pace (root, learning review; decisions file, open question 4).** t02 carries the whole content point. If scenes 4 and 5 feel rushed, split bearings into their own video.
- **2. Feedback lengths.** Feedback 1 (about 29 s) and feedback 2 (about 28 s, three demands) sit near the 30 s limit; the named trims apply on the voiced take.
- **3. The link (root; decisions file, departure 2).** lesson09 is linked; the route names lesson04.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t01 and Year 10; check that "two sides involved" makes the ratio choice feel caused, that the "Z" makes depression = elevation visible, that S32°W's two-step turn is clear, and that A2's bearing step was modelled in scene 5), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
