# Maths S12 T04: How do true bearings and compass bearings describe a direction? Clockwise from north in three digits, the halfway directions, compass bearings from north or south, converting by sketch in each quarter, and the bearing back from where you stand (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r07.md`, `r13.md`, `a04a.md`, and the faults logged in `../checks/m-s12-r01-r07-learning-review-resolution.md` and `../checks/m-s12-r08-r14-learning-review-resolution.md`), the accepted Year 11 Advanced trigonometry design `math-a11-t02b.md` (bearings; visual approach only) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 60). Designer's decisions for t01a to t05: `../checks/root-decisions-maths-s12-t01-t05.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,976 characters by script (see "Narration length estimate"), 12 scene headings, about 468 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of the Trigonometry strand, playlist order 54 (ruling 58). Shared by Standard 1 and Standard 2 (identical wording). No trigonometry is needed. Pre-design pack: `../pre-design/maths-standard/math-s12-t04.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/trigonometry/lesson05.sa.html` (SHA256 `cbe50a5103ae73d7ccf3e52295c9921083fd3f0b4e3c0e8d9df21119d20c7918`; card 02, "True bearing rules: always three digits, measured clockwise from North. 000°T = North; 090°T = East; 180°T = South; 270°T = West." and the back bearing rule; card 05's quarter table; `we-1`, "(a) Convert 155°T to a compass bearing. (b) Convert N65°W to a true bearing." (S25°E; 295°T); trap 03). Route entry: `math-s12-t04` in `../../programme/maths-standard-route-inputs-5.json`. Visual system: maths studio kit; the farm plate (t03's final frame) as the anchor; the rose, arcs, pins and north lines coded.

Owner rules applied: as t01a (plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (bearing, true bearing, compass bearing, clockwise, bearing back); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a farm, a harbour ferry, a bushwalk campsite); bearings spoken as "zero seven five degrees true" and "north seventy-five degrees east"; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-5.json`:

Standard 2 (Trigonometry):
- `ci065df8b3`: "Identify and interpret true bearings and compass bearings and convert between them"

Standard 1 (Right-angled triangles):
- `ci0b85c453`: "Identify and interpret true bearings and compass bearings and convert between them"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea (Standard 1)

**Boundary:** starts from t03's final frame exactly (the farm plate `ms12-farm-top-v1.png`, about 900 px square, north at the top; a dashed grey north arrow "N" from the homestead; coded pins "dam", "shearing shed", "front gate", each with a "which way?" chip; chips "Next: bearings", "?"). Recalls Stage 4 angle facts (a full turn is 360°, a straight angle 180°, a right angle 90°) in a phrase. Teaches: a bearing is a direction given as an angle; a true bearing is measured clockwise from north, written with three digits and T (000°T to 359°T); the four main directions and the halfway directions NE 045°T, SE 135°T, SW 225°T, NW 315°T (MS-46); a compass bearing starts at N or S, whichever is nearer, and turns up to 90° towards E or W; converting both ways by sketching first, in each quarter (from 0°, 180° or 360°); the bearing back is 180° more or less; "the bearing of A from B" is measured at B, with a new north line there. Stops at describing and converting directions. Not taught: bearings in triangles (t05).

## Decisions

- **Anchor: the farm from above (new plate `ms12-farm-top-v1.png`, briefed in t03).** Three landmarks from the homestead, placed on the plate at fixed bearings: the dam at 075°T (N75°E), the shearing shed at 155°T (S25°E, the site's `we-1` (a)), the front gate at N65°W (295°T, the site's `we-1` (b)). The same farm returns in t05 (and may in t10). No people, no animals.
- **The site's `we-1` carried on the farm.** Both of its conversions are the shed and the gate, so the worked example is the anchor itself (scenes 3 and 4) rather than a separate board; the g01 board carries the south-west case (S35°W) and the "add, subtract or take from 360" summary (scene 4).
- **Sketch first (pack decision; site card 05 kept as notes, not method).** Every conversion starts with the arm drawn on the rose, then asks "which of north, south or a full turn do we start from?". The quarter table is a key note.
- **Named directions (MS-46).** NE, SE, SW and NW said once with their true bearings, because exam wording uses them.
- **"From" (pack decision).** Scene 5 draws a new north line at the shed for "the bearing of the homestead from the shed", then shows the 180° turn.
- **Left out: the wind aside.** "A southerly blows from the south" is a reading trap the pack offered; it needs its own explanation and is not in the syllabus wording. Recorded in the decisions file.
- **Simulations (standard item 3).**
  1. **Bearing sweep** (scenes 2, 3; `BearingRose` over the farm): an arm turns clockwise from north to each landmark with a live three-digit readout "075°T"; for a compass bearing the arm's arc redraws from the nearer of N or S with a second readout "N75°E".
  2. **Turn around** (scene 5; `BearingRose` `reverse` with MapPins): the north line copies from the homestead to the shed, the arm from the shed swings half a turn, and the readout goes 155° → 335°T.
- **Colour roles (the strand's, bearings).** North lines **dashed grey**; bearing arcs and true bearings **blue**; compass arcs **teal** (measured from N or S); direction arms **ink**; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "face north", "clockwise", "three digits", "T = true", "halfway: 45°", "start at N or S", "nearer one", "never from E or W", "at most 90°", "sketch first", "anticlockwise from N: 360 −", "past S: 180 +", "before S: 180 −", "new north here", "turn round: ± 180°", "from: stand here". At most two live at once.
- **Stage changes (standard item 2).** t03's frame (1); the rose over the farm, true bearings (2); compass bearings (3); g01 board: converting in each quarter (4); the shed's north line and the bearing back (5); framed card (6); question cards (7 to 10); the ute's track for t05 (11); key notes (12).
- **Worked example (g01 layout).** Scene 4: task strip "From the homestead, the front gate is on a bearing of N65°W, and a windmill is on a bearing of S35°W. Write each as a true bearing." (the site's `we-1` (b) with an added south-west case); a coded rose at the left; givens card "N65°W" (teal), "S35°W" (teal); rows "N65°W: 65° anticlockwise from N", "360° − 65° = 295°T"; "S35°W: 35° past S, clockwise", "180° + 35° = 215°T"; framed answers "295°T", "215°T"; crossed slip "S35°W = 145°T".
- **Memory aid.** Framed card: "True: clockwise from north, three digits." Key line: "Compass: from N or S, towards E or W. Back: ± 180°."
- **Visual surprise.** The arm swings from the homestead's dam bearing and keeps sweeping round the full 360° once, the readout ticking through 090, 180, 270 and back to 000 (2); at the shed, the half-turn lands exactly on the homestead's pin (5).
- **Plain meanings at first use.** Bearing ("a direction given as an angle"); clockwise ("the way a clock's hands turn"); true bearing ("measured clockwise from north"; T for true); compass bearing ("from north or south, turned towards east or west"); bearing back ("the direction to return the way you came").
- **Attempts (original, HSC style).** A1 (pack question 2 (a) and (c)): a ferry on 304°T: N56°W; back 124°T = S56°E; crossed "056°T" (caption "turning round is ± 180°, not 360° minus"). A2 (pack question 1, set at a bushwalk campsite): lookout 063°T = N63°E; waterfall S35°W = 215°T; the campsite from the waterfall 035°T; crossed "S35°W = 145°T" (caption "towards W from S is clockwise: add"). The pack's crossed "035°T" for (b) is not used because 035°T is (c)'s correct answer.
- **Mistake scene:** none separate. Anticlockwise or from east (2, said); two-digit bearings (2, said); compass from E or W (3, said and a crossed grey "E15°S"); subtracting for the south-west quarter (4 crossed, A2 crossed); the bearing back as 360° minus (A1 crossed); "from" read at the wrong end (5, said).
- **Cause chain taught, in order:** (1) one fixed starting direction and one turning direction give every direction a single number, so a true bearing is clockwise from north (2); (2) three digits keep every bearing the same length and unmistakable (2); (3) a compass bearing starts from the nearer of N and S, so it never turns more than 90° (3); (4) converting is reading the same arm from a different start: clockwise from N gives the bearing directly, from S add or subtract from 180°, anticlockwise from N subtract from 360° (3, 4); (5) north lines everywhere point the same way, so facing back is half a turn, 180° (5); (6) a bearing is measured where you stand, so "from B" means draw north at B (5).
- **Entry knowledge (route):** a full turn 360°, a straight angle 180°, a right angle 90° (Stage 4). No earlier trigonometry is needed.
- **Handoff (to math-s12-t05, "How do bearings and right-angled triangles solve a navigation problem?").** Scene 11: the farm plate (about 900 px square), the north arrow at the homestead; the dam, shed and front gate pins dimmed to 40 per cent; a pin "far paddock gate" on the painted gate at the plate's upper right; a coded ute track (dotted ink) from the homestead due north, "2.0 km" (amber), then due east to the far paddock gate, "2.1 km" (violet), with a small turn mark at the corner (no right-angle box yet); the ute plate `ms12-ute-v1.png` as an 160 px badge beside the gate pin; a faint dashed straight line from the homestead to the gate labelled "?"; chips "how far, in a straight line?", "on what bearing?", "Next: bearings and triangles" and "?". No value is worked out. This is t05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Plate positions (1 km = 200 px; homestead (800, 800)): dam (1109, 717), bearing 74.96°, 1.6 km; shed (952, 1126), 155.0°, 1.8 km; front gate (456, 639), 295.1°, 1.9 km; far paddock gate (1220, 400), 46.4°, 2.9 km (t05).
  (b) Dam 075°T = N75°E. Shed 180 − 155 = 25: S25°E. Gate 360 − 65 = 295°T. Windmill 180 + 35 = 215°T; slip 180 − 35 = 145°T (S35°E). Halfway 045, 135, 225, 315.
  (c) Back: homestead from the shed 155 + 180 = 335°T (N25°W); from the gate 295 − 180 = 115°T.
  (d) A1: 360 − 304 = 56: N56°W; back 304 − 180 = 124°T; 180 − 124 = 56: S56°E; slip 360 − 304 = 056°T.
  (e) A2: 063°T = N63°E; 180 + 35 = 215°T; back 215 − 180 = 035°T; slip 145°T.
  (f) Pronunciations: "zero seven five degrees true"; "north seventy-five degrees east"; "three three five degrees true"; "south twenty-five degrees east".

Main question: *Which way is the dam from the homestead, exactly, and how do true bearings and compass bearings describe a direction?*
Entry knowledge (Stage 4): 360°, 180°, 90°.
Stops after: true and compass bearings, converting both ways in each quarter, the bearing back, "from". No triangles.
Handoff: math-s12-t05 ("the ute drove 2.0 km north then 2.1 km east: how far, and on what bearing?").

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): north lines dashed grey; true bearings blue; compass arcs teal; arms ink; answer green; mistake red. Header strip "MATHEMATICS STANDARD · TRIGONOMETRY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: which way?
> Here's the farm from above, with the homestead in the middle, and north at the top. The dam is over here, the shearing shed down here, and the front gate up here. How would you tell someone exactly which way to go? Saying north east is close, but it isn't exact. So how do true bearings and compass bearings describe a **direction**?

Visual: opens on t03's final frame exactly. On the first sentence the "Next" chips fade. On "dam", "shearing shed" and "front gate" each pin pulses in turn. On "exactly which way" a dotted ink arm draws from the homestead towards the dam and stops, its "which way?" chip ringing. On "north east" a grey chip "north east?" sits beside the arm, then shakes a little (close, not exact). On "direction" heading "Bearings" writes on, and the question chip "Which way, exactly?" moves to the top right.

### 2. true bearings
> A bearing is a direction given as an angle. For a true bearing, stand at the homestead and face north. Then turn clockwise, the way a clock's hands go, until you face the dam. The angle you turned through is the bearing. Here it's seventy-five degrees, written zero seven five degrees T. It always has three digits, and T means true, measured from north. So east is zero nine zero, south is one eight zero, and west is two seven zero degrees **true**. The halfway directions follow. North east is zero four five, south east one three five, south west two two five, and north west is three one five degrees **true**.

Visual: stage change: simulation 1. A coded rose (`BearingRose`, about 700 px) centred on the homestead over the farm plate (plate at 60 per cent, about 1,000 px); N, E, S, W labels. On "face north" the arm points up the dashed north line, hand tag "face north". On "turn clockwise" the arm turns clockwise (hand tag "clockwise") with a blue arc and a live readout to the dam's pin; on "seventy-five degrees" the readout reads "075°T", 60 px; on "three digits" the "0" in "075" rings, hand tag "three digits"; on "T means true" the T rings, hand tag "T = true". On "east" the arm sweeps on through "090°T", on "south" "180°T", on "west" "270°T"; on "true" (first bold) it sweeps back to "000°T" (the readout ticking through, the full-circle surprise). On "halfway" four short dashed arms at 45°, 135°, 225° and 315° draw one at a time with chips "NE 045°T", "SE 135°T", "SW 225°T", "NW 315°T", hand tag "halfway: 45°"; on "true" (second bold) the four chips settle round the rose.

### 3. compass bearings
> A compass bearing gives the same direction a different way. Start at north or south, whichever is nearer, then say how far to turn towards east or west. The dam is seventy-five degrees from north, towards east, so it's north seventy-five degrees east. The shearing shed is on a true bearing of one five five degrees. That's nearer south, so start at south. It's twenty-five degrees before south, a hundred and eighty take away a hundred and fifty-five, turned towards east. So it's south twenty-five degrees **east**. A compass bearing never turns more than ninety degrees, and it never starts from east or **west**.

Visual: camera continue. On "north or south" the N and S labels pulse, hand tag "start at N or S". On "north seventy-five degrees east" a teal arc from N to the dam arm, readout "N75°E" (teal) beside "075°T" (blue). On "one five five" the arm swings to the shed's pin, blue arc and readout "155°T". On "nearer south" a teal arc grows back from S to the arm (hand tag "nearer one"); row, 44 px: "180° − 155° = 25°"; on "east" (bold) readout "S25°E" (teal). On "more than ninety" a quarter-circle shading under each teal arc (hand tag "at most 90°"); on "west" a grey slip "E15°S" writes and is crossed (hand tag "never from E or W").

### 4. converting by sketch
> Now the other way. Here's a worked example. The front gate is on a compass bearing of north sixty-five degrees west. A windmill is south thirty-five degrees west. Write each as a true bearing. Sketch them first. For the gate, start at north and turn sixty-five degrees towards west. That's anticlockwise, but a true bearing goes clockwise, so take it from a full turn, three sixty take away sixty-five, two nine five degrees **true**. For the windmill, start at south and turn thirty-five degrees towards west. That's clockwise, past south, so add. A hundred and eighty plus thirty-five is two one five degrees **true**. Taking it away, a hundred and eighty minus thirty-five, is the slip. That points south east, the wrong **side**. So there are four cases, one for each quarter. North east, the angle is the bearing. South east, take it from a hundred and eighty. South west, add it to a hundred and eighty. North west, take it from three sixty. But the sketch always tells you **which**.

Visual: clear change to the g01 board. Task strip, 44 px: "From the homestead, the front gate is on a bearing of N65°W, and a windmill is on a bearing of S35°W. Write each as a true bearing." (the site's lesson05 `we-1` (b) and an added south-west case). A coded rose at the left (about 520 px). Givens card, 44 px: "gate: N65°W" (teal), "windmill: S35°W" (teal). On "Sketch them first" hand tag "sketch first". On "turn sixty-five degrees towards west" a teal arc from N anticlockwise to an arm; on "anticlockwise" hand tag "anticlockwise from N: 360 −"; the blue clockwise arc from N runs the long way round to the same arm. Rows, 52 px: "360° − 65° = 295°T"; on "true" (first bold) framed "gate: 295°T" (green). On "start at south" a teal arc from S clockwise to a second arm; hand tag "past S: 180 +"; row "180° + 35° = 215°T"; on "true" (second bold) framed "windmill: 215°T" (green). On "slip" a red slip "180° − 35° = 145°T" writes and a red arm appears in the south-east quarter; on "side" it is crossed (caption "towards W from S is clockwise: add"). A small grey row stays: "before S: 180 −" (from scene 3), so the three cases sit together. On "four cases" the board compresses to the left and four small quadrant cards build at the right, 40 px, one per spoken case: "NE: θ", "SE: 180° − θ", "SW: 180° + θ", "NW: 360° − θ" (θ the compass angle, teal); on "which" a hand arrow runs from the rose to the cards, hand tag "sketch first".

### 5. the bearing back
> Now turn around. From the shearing shed, which way is the homestead? Bearings are measured from where you stand, so draw a new north line at the shed. North lines all point the same way. Facing back is half a turn, so add or subtract a hundred and eighty degrees. One five five plus one eight zero is three three five degrees **true**. If the bearing is a hundred and eighty or more, subtract instead. From the gate, two nine five take away one eight zero is one one five degrees **true**. So the bearing of the homestead from the shed is measured at the shed. The word from tells you where to **stand**.

Visual: stage change: the farm plate full (about 900 px square) with the shed's arm from the homestead "155°T". Simulation 2: on "new north line" a dashed grey north line copies across from the homestead to the shed (hand tag "new north here"; both north lines glow parallel). On "half a turn" the arm at the shed swings 180° from the outward direction to point back at the homestead (hand tag "turn round: ± 180°"); on "true" (first bold) the blue arc from the shed's north runs clockwise round to the arm, readout "335°T", row "155° + 180° = 335°T". On "subtract instead" the scene moves to the gate's pin: a new north line there, the arm swings back to the homestead; on "true" (second bold) row "295° − 180° = 115°T". On "stand" the shed pin rings with hand tag "from: stand here", and a chip, 44 px: "bearing of A from B: stand at B".

### 6. memory aid
> Here's the summary. True bearings go clockwise from north, with three digits. Compass bearings start from north or south. And to go back, it's a hundred and eighty **degrees**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the rose small with one blue clockwise arc and one teal arc from S. Main line, hand font 56 px: "True: clockwise from north, three digits." On "degrees" the key line, 40 px: "Compass: from N or S, towards E or W. Back: ± 180°." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A harbour ferry leaves the wharf on a bearing of three zero four degrees true. Write this as a compass bearing. On the way back, the ferry sails directly to the wharf. Write the return bearing as a true bearing and as a compass bearing. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A harbour ferry leaves the wharf on a bearing of 304°T. (a) Write this as a compass bearing. (b) On the return trip the ferry sails directly back to the wharf. Write the return bearing as a true bearing and as a compass bearing." Picture slot: a coded rose with the wharf at the centre and a north line only (no arm). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Three zero four is in the north west quarter. Three sixty take away three zero four is fifty-six, so north fifty-six degrees **west**. Going back is half a turn. Three zero four take away one eight zero is one two four degrees true, which is south fifty-six degrees **east**. Zero five six degrees true is the slip. Turning round means a hundred and eighty, not three sixty **minus**.

Visual: the card shrinks to the top (30 px). The rose enlarges: a blue clockwise arc to 304°; a teal arc back from N, row, 44 px: "360° − 304° = 56°"; on "west" framed "N56°W" (green, (a)). The arm swings half a turn: row "304° − 180° = 124°T", a teal arc back from S, "180° − 124° = 56°"; on "east" framed "124°T = S56°E" (green, (b)). On "slip" a red slip "056°T" writes with a red arm in the north-east quarter; on "minus" it is crossed (caption "turning round is ± 180°, not 360° minus"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. From a campsite, a lookout is on a bearing of zero six three degrees true, and a waterfall is on a bearing of south thirty-five degrees west. Write the lookout's bearing as a compass bearing. Write the waterfall's bearing as a true bearing. Then find the true bearing of the campsite from the waterfall. Pause here to answer.

Visual: `QuestionCard`, 40 px: "From a campsite, a lookout is on a bearing of 063°T and a waterfall is on a bearing of S35°W. (a) Write the bearing of the lookout as a compass bearing. (b) Write the bearing of the waterfall as a true bearing. (c) Find the true bearing of the campsite from the waterfall." Picture slot: a coded rose with the campsite at the centre and a north line only. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Zero six three is between north and east, so north sixty-three degrees **east**. South thirty-five degrees west goes past south, so add. A hundred and eighty plus thirty-five is two one five degrees **true**. From the waterfall, turn around. Two one five take away one eight zero is zero three five degrees **true**. One four five degrees true is the slip. Towards west from south is clockwise, so **add**.

Visual: the card shrinks to the top. On "east" framed "N63°E" (green, (a)). A teal arc from S to the west side; row "180° + 35° = 215°T"; on "true" (first bold) framed "215°T" (green, (b)). A new north line at the waterfall, the arm swings back to the campsite; row "215° − 180° = 035°T"; on "true" (second bold) framed "035°T" (green, (c)). On "slip" a red slip "145°T" writes; on "add" it is crossed (caption "towards W from S is clockwise: add"). Hold about 1 s.

### 11. handoff
> Back to the farm. A ute drives two kilometres due north from the homestead, then two point one kilometres due east, to the far paddock gate. How far is that gate in a straight line, and on what bearing? Bearings meet right-angled triangles. That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: the farm plate (about 900 px square) with the north arrow; the dam, shed and front gate pins dim to 40 per cent. On "far paddock gate" a pin drops on the painted gate at the upper right with its label; the ute badge `ms12-ute-v1.png` (160 px) beside it. On "two kilometres due north" a dotted ink track draws up from the homestead, "2.0 km" (amber); on "two point one kilometres due east" it turns and runs to the gate, "2.1 km" (violet), with a small turn mark at the corner (no right-angle box). On "straight line" a faint dashed line from the homestead to the gate, "?"; chips "how far, in a straight line?" and "on what bearing?". On "next" chips "Next: bearings and triangles" and "?". Hold about 2 s. No value is worked out. This is t05's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- True bearing: clockwise from north, three digits (075°T).
- Compass bearing: from N or S, towards E or W (N75°E).
- NE 045°T, SE 135°T, SW 225°T, NW 315°T.
- Sketch first. Bearing back: add or subtract 180°.
- "A from B": stand at B, draw north there.

Memory aid (framed card, right side, as in scene 6): *True: clockwise from north, three digits.* Key: *Compass: from N or S, towards E or W. Back: ± 180°.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and t05's opening frame.

## Teaching checks

- **Does it explain causes?** Why clockwise from north: one start and one turning direction give one number (2). Why three digits: every bearing is written the same way (2). Why the nearer of N or S: a compass bearing then never exceeds 90° (3). Why 360 minus, 180 plus or 180 minus: the same arm read from a different start and turning direction (3, 4). Why ± 180°: north lines are parallel, so facing back is half a turn (5). Why "from" matters: the bearing is measured where you stand (5).
- **Misconceptions addressed:** anticlockwise or from east (2); two-digit bearings (2); compass from E or W (3); subtracting in the south-west quarter (4, A2); 360 minus for the bearing back (A1); "from" read at the wrong end (5).
- **Visual standard, item by item:** 1 the painted farm from the first frame; 2 a new stage every 30 to 60 s; 3 the live bearing sweep, the half-turn at the shed; 4 fixed roles (true blue, compass teal, north grey); 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the full-circle sweep and the half-turn landing on the homestead.
- **One idea at a time:** true bearings (2), compass bearings (3), converting (4), the bearing back (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** none needed; Stage 4 angle facts are a phrase.
- **Standard 1 path:** identical.
- **Syllabus coverage:** "Identify and interpret true bearings and compass bearings" (2, 3, 5; key notes 1 to 3, 5); "and convert between them" (3, 4, A1, A2; key note 4).
- **Out of scope by design:** bearings in triangles (t05); wind directions (Decisions).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 2 (a) and (c), original, HSC style, 3 marks suggested, not an official marking scheme).** "A harbour ferry leaves the wharf on a bearing of 304°T. (a) Write this as a compass bearing. (b) On the return trip the ferry sails directly back to the wharf. Write the return bearing as a true bearing and as a compass bearing."
Model answer: (a) 304°T is in the north-west quarter: 360° − 304° = 56°, so N56°W. (b) 304° − 180° = 124°T, which is 180° − 124° = 56° from south towards east: S56°E. Classic mistake (crossed): "056°T".

**Attempt 2 (scene 9; pack question 1 at a campsite, original, HSC style, 3 marks suggested).** "From a campsite, a lookout is on a bearing of 063°T and a waterfall is on a bearing of S35°W. (a) Write the bearing of the lookout as a compass bearing. (b) Write the bearing of the waterfall as a true bearing. (c) Find the true bearing of the campsite from the waterfall."
Model answer: (a) N63°E. (b) 180° + 35° = 215°T. (c) 215° − 180° = 035°T. Classic mistake (crossed): "S35°W = 145°T".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Main directions | 000, 090, 180, 270°T; NE 045, SE 135, SW 225, NW 315°T | 2 |
| Dam | 075°T = N75°E | 2, 3 |
| Shed (site `we-1` (a)) | 155°T; 180 − 155 = 25; S25°E | 3 |
| Gate (site `we-1` (b)) | N65°W; 360 − 65 = 295°T | 4 |
| Windmill | S35°W; 180 + 35 = 215°T; slip 145°T | 4 |
| Bearing back | shed 155 + 180 = 335°T; gate 295 − 180 = 115°T | 5 |
| A1 | 304°T; N56°W; 124°T; S56°E; slip 056°T | 7, 8 |
| A2 | 063°T = N63°E; 215°T; 035°T; slip 145°T | 9, 10 |
| Handoff | 2.0 km north; 2.1 km east (no value worked) | 11 |

## Numbers to verify (all values, repeated for Codex)

Integer arithmetic, checked by script (18 Nov 2026, scratchpad `t/verify.py`, run with `python -I`); Codex to re-check.

- 180 − 155 = 25; 360 − 65 = 295; 180 + 35 = 215; 180 − 35 = 145; 155 + 180 = 335; 295 − 180 = 115.
- 360 − 304 = 56; 304 − 180 = 124; 180 − 124 = 56.
- 215 − 180 = 35.
- Plate positions: bearings of (1109, 717), (952, 1126), (456, 639) and (1220, 400) from (800, 800), north up: 74.96°, 155.0°, 295.1°, 46.4°.

## Memory aid check

- **"True: clockwise from north, three digits."** with key line **"Compass: from N or S, towards E or W. Back: ± 180°."** From the site's card 02 ("always three digits, measured clockwise from North"; "Back bearing rule: add 180° if bearing < 180°; subtract 180° if bearing ≥ 180°"). Meaning, as said in scenes 2, 3, 5 and 6. Assumptions checked: "± 180°" means add when the bearing is under 180° and subtract otherwise, keeping the answer from 000° to 359° (scene 5); compass bearings use the nearer of N or S and at most 90° (scene 3); north lines are parallel on a map of this size (scene 5). It helps a new case: 210°T back is 030°T, and as a compass bearing 210°T is S30°W.
- **Considered, not used:** "Never Eat Soggy Weetbix" (it orders the compass points but says nothing about measuring bearings).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `t/count.py`, the method of `work/brief-resolve-standard-r2/count.py`, which reproduces e08's 5,632): **4,976 characters**, 12 scene headings. Characters per scene (1 to 12): 329, 607, 608, 974, 592, 172, 269, 372, 335, 390, 253, 75.

At 13.3 characters per second the speech is about 374 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the full sweep (2), the arcs (3, 4), the north line copy and the half-turn (5) about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 468 s**, under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 5's last sentence (the chip carries it); scene 2's "So east is zero nine zero, south is one eight zero, and west is two seven zero degrees true." (the sweep shows it); scene 1's "Saying north east is close, but it isn't exact."

## Scene list and build ids

Lesson key `m-s12t04` (route math-s12-t04). Explainer folder `src/explainer/lessons/math-s12-t04`; build inputs in `docs/production/claude-pm/lessons/math-s12-t04/` (at voicing).

In order (12 scene headings): hook-farm, true-bearings, compass-bearings, worked-converting, bearing-back, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-ute, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | t03's frame; the farm |
| 25 to 80 s | 2 | The rose over the farm: true bearings |
| 80 to 125 s | 3 | Compass bearings |
| 125 to 190 s | 4 | g01 board: converting by sketch |
| 190 to 240 s | 5 | The bearing back |
| 240 to 255 s | 6 | Framed memory card |
| 255 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 390 s | 11 | The ute's track for t05 |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t03's last frame continues into 1; 1 to 2 stage change (the rose arrives); 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-t04-learning-review.md`, `science_check` = `checks/m-s12-t04-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026): `physics/phys-y11-plotting-compass-v1.png` (opened: a clear plastic compass housing with a pivot and no visible needle, 1261 × 1250; it does not show a direction, so it is not used; the rose is coded). `ms12-farm-top-v1.png` is briefed in t03 and not yet painted, so its brief was read instead; `ms12-ute-v1.png` (i09's brief) likewise.

Need (painted): none new. Reused: the farm (painted before t03), the ute badge (painted before i09).

Coded: the rose, arms, arcs, readouts, north lines, pins and labels, the board's rose, the ute track and straight-line "?", question cards and roses, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `BearingRose` (sweeps, readout true and compass, markers, reverse), `fmtBearing`, `compassLabel`, `compassToTrue`, `reverseBearing` (a11-trig-bearings.tsx), `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row t04):
1. **MapPins** (small; reused by t05 and t10): coded pins with labels placed on named plate coordinates, each able to carry a bearing arm from a chosen centre, and a north line that can be copied from one pin to another. Check: arms from the homestead to the dam, shed and gate read 075°T, 155°T and 295°T within 0.5°; pin labels at least 36 px.
2. **Compass arc mode on BearingRose** (prop-level): a second arc in teal drawn from the nearer of N or S to the arm, with its own readout (the Advanced t02b sweep already pauses at N or S; here both arcs can show together). Check: 155° shows a teal 25° arc from S.

## Codex asset brief (Maths S12 T04)

No new plate. Before the t04 build, confirm `ms12-farm-top-v1.png` (t03's brief) is painted with its landmark positions and clear lines measured, and reads at 900 px square under a coded rose; confirm `ms12-ute-v1.png` (i09's brief) reads as a 160 px badge. Report the check in `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's `we-1` answers (S25°E; 295°T) are kept.
4. Confirm the coded pins and arms meet the painted landmarks on the farm plate (075°T, 155°T, 295°T within 0.5°).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on t03's final frame exactly, and scene 11's frame matches t05's opening.
7. Confirm bearings are spoken "zero seven five degrees true" and "north seventy-five degrees east", and written "075°T" and "N75°E".
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: True Bearings and Compass Bearings | Year 12 Maths Standard

(Title length: 60 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson05.sa.html

On a farm seen from above, which way is the dam from the homestead, exactly? Learn true bearings (measured clockwise from north, written with three digits, like 075°T) and compass bearings (from north or south towards east or west, like N75°E), with the halfway directions NE, SE, SW and NW. Convert between them by sketching first, in every quarter of the compass, then find the bearing back by turning half a turn, and see why "the bearing of A from B" is measured at B. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Trigonometry (Standard 2) and Right-angled triangles (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Identify and interpret true bearings and compass bearings and convert between them"
Syllabus content, Standard 1:
"Identify and interpret true bearings and compass bearings and convert between them"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea (Standard 1)

Builds on: Angles of Elevation and Depression, with Pythagoras. Next: navigation problems with bearings and right-angled triangles.

#Year12Maths #MathsStandard #Bearings #HSCScience

## Open decisions

- **1. The wind aside left out (root).** "A southerly comes from the south" is a common reading trap, but it is not in the syllabus wording and needs its own picture. It can be one grey chip in scene 5 (no narration) if root wants it.
- **2. "Degrees true" spoken (designer).** Bearings are spoken "zero seven five degrees true" (after scene 2 says T means true), matching how they are read aloud in navigation. Codex can flag if the Google voice reads "T" inconsistently on screen-reader-style input; narration never says "tee".

## Review notes

- Revision 1. Next: student learning review (trace from t03; check that "sketch first" is a method and not a slogan, that the three conversion cases are clear from the sketch without the table, that the bearing back at the shed is followable, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
