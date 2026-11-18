# Maths S12 T02: How do degrees and minutes work when we find angles and sides? Sixty minutes in a degree, a decimal angle turned into degrees and minutes, a given angle in degrees and minutes typed as a decimal, the second acute angle, and a safe ladder and a ramp limit (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r07.md`, `r13.md`, `a04a.md`, and the faults logged in `../checks/m-s12-r01-r07-learning-review-resolution.md` and `../checks/m-s12-r08-r14-learning-review-resolution.md`), the accepted Year 11 Advanced trigonometry designs (`math-a11-t01.md`, `t02a.md`, `t02b.md`, visual approach only) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 60; ruling 57 moves the inverse ratios into t01b, so this video is the degrees and minutes video). Designer's decisions for t01a to t05: `../checks/root-decisions-maths-s12-t01-t05.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,910 characters by script (see "Narration length estimate"), 12 scene headings, about 458 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of the Trigonometry strand, playlist order 52 (ruling 58). Shared by Standard 1 and Standard 2 (identical wording). Pre-design packs: `../pre-design/maths-standard/math-s12-t02.md` (degrees and minutes, the second angle, the ladder and ramp questions) and `math-s12-t01.md` (the site's 63°24' ladder for a given angle). Site lessons (read through the packs' quotations, read only): `maths-standard/year12/trigonometry/lesson03.sa.html` (SHA256 `f0782a717286d6c886a2e69e9adc65b400fe5b7378ecd4a2858f24cc9d8fc57a`; card 05, "If your calculator gives 38.7°, the minutes are 0.7 × 60 = 42'. So the answer is 38°42'. Always round minutes to the nearest whole minute unless told otherwise."; trap 02, "39.5° is NOT 39°50'. ... A quick mental check: minutes must be less than 60."; `we-1`, 39°31'; `we-3`, "β = 90° − 28°4' = 61°56'") and `lesson02.sa.html` (SHA256 `42bde378ce705b9019cb1ea6cfd2b1e31b3c0f109f7e1dd75500d13ace6e6c8f`; `we-3`, "A ladder makes an angle of 63°24' with the ground. If the ladder reaches 4.6 m up a vertical wall, find the length of the ladder", "63°24' = 63 + 24/60 = 63.4°", 5.14 m (the site's 5.15 is MS-41); trap 02, "sin(63°24') typed directly gives the wrong answer. Convert first"). Route entry: `math-s12-t02` in `../../programme/maths-standard-route-inputs-5.json`. Visual system: maths studio kit; the ladder plate (t01b's final frame) as the anchor; the minutes dial and calculator coded; the drone plate in the handoff.

Owner rules applied: as t01a (plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meaning of "minute" for angles; g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a ladder's safety rule, a shop ramp); degrees and minutes written as the site writes them (63°24'); angles spoken with "degrees" and "minutes"; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-5.json`:

Standard 2 (Trigonometry):
- `ci74344e24`: "Apply trigonometric ratios to right-angled triangles to find either the lengths of unknown sides or the size of unknown angles in both degrees, and degrees and minutes" (this video: degrees and minutes, for sides and for angles)

Standard 1 (Right-angled triangles):
- `ci07db556a`: "Apply trigonometric ratios to find the lengths of unknown sides in right-angled triangles given an angle in both degrees, and degrees and minutes" (this video: the given angle in degrees and minutes, scene 4)
- `cif8689656`: "Apply trigonometric ratios to find the size of unknown angles in right-angled triangles, in both degrees, and degrees and minutes" (this video: angles in degrees and minutes, scenes 3, 5, A1, A2)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea (Standard 1)

**Boundary:** starts from t01b's final frame exactly (the ladder plate `ms12-ladder-wall-v1.png`, about 700 px tall, on a coded brick wall line and ground line; the coded triangle overlay "4" (amber) up the wall, "1" (violet) along the ground, right-angle box; chip "1 m out for every 4 m up"; a blue arc at the ladder's foot; calculator strip "tan⁻¹(4 ÷ 1) = 75.96375…°"; chips "75.96° in degrees and minutes?", "Next: degrees and minutes", "?"). Recalls t01a (a side from an angle) and t01b (an angle from two sides, the inverse) in a phrase or grey chip, and the angle sum of a triangle (Stage 4) in a phrase. Teaches: a degree is split into 60 minutes, written with ' (like an hour); a decimal part of a degree is not minutes (39.5° = 39°30', not 39°50'); decimal degrees to degrees and minutes (keep the whole degrees, decimal part × 60, nearest minute, under 60); degrees and minutes to a decimal for the calculator (minutes ÷ 60), with the calculator's degrees-minutes-seconds key named once; the second acute angle as 90° minus the first, borrowing 1° as 60'; a practical limit compared in degrees and minutes. Stops at degrees and minutes in right-angled triangles. Not taught: seconds; elevation and depression by name (t03); bearings (t04).

## Decisions

- **Scope (ruling 57).** With the inverse ratios taught in t01b, t02 teaches degrees and minutes in both directions: a given angle in degrees and minutes (the Standard 1 side point `ci07db556a`, which the pack placed in t01) and a found angle in degrees and minutes (`cif8689656`), plus the second acute angle and a limit. One learner question: how degrees and minutes work in trigonometry.
- **Anchor: the ladder's safety rule (new plate `ms12-ladder-wall-v1.png`, painted for t01b's final frame).** One metre out for every four up: tan⁻¹ 4 = 75.96° = 75°58'. Source to confirm: SafeWork NSW ladder guidance ("1 metre out for every 4 metres up"; Codex records the dated page in the maths check; if the wording differs, the chip becomes "a common ladder rule"). Plate reuse in A2. No people.
- **Minutes made visible (pack visual need).** `MinutesDial`: a degree drawn as a wedge with 60 ticks, filling as the decimal part times 60. A one-line link to a clock ("like an hour") gives the meaning; no time arithmetic.
- **Given angle in degrees and minutes: the site's lesson02 `we-3` with the corrected answer (MS-41).** 63°24' = 63 + 24 ÷ 60 = 63.4°; ladder = 4.6 ÷ sin 63.4° = 5.14 m (the site prints 5.15). Crossed "63.24" (caption "24' = 24/60 = 0.4°, not 0.24°"); the calculator's ° ' " key named once as an alternative.
- **Found angle in degrees and minutes: the site's lesson03 `we-1`, carried from t01b.** sin⁻¹(7 ÷ 11) = 39.52°, so 39°31' (the same answer t01b gave as 39.5°, now in minutes). The second angle: 90° − 39°31' = 50°29', borrowing 1° as 60' (site `we-3`'s method, on `we-1`'s triangle so no new triangle is needed). Check: 90 − 39.5212 = 50.4788 = 50°29'.
- **Rounding.** Minutes to the nearest whole minute (site card 05). The decimal part is multiplied unrounded (the calculator's value, not 0.96).
- **Simulations (standard item 3).**
  1. **Minutes dial** (scenes 2, 3; `MinutesDial`): a one-degree wedge enlarged to about 700 px with 60 ticks; a decimal readout drives the fill ("0.5° = 30 of 60 ticks"; "0.9638° × 60 = 57.8, so 58'"); a grey "hundredths" ruler beside it shows where 0.5 would sit if minutes were hundredths, then is crossed.
  2. **Borrow a degree** (scene 5): a coded strip "90°" breaks one degree into a 60-tick "60'" block, giving "89°60'", then 39°31' slides off, leaving 50°29'; a sum bar "39°31' + 50°29' = 90°" closes the check.
- **Colour roles (the strand's).** The angle **blue**; opposite **amber**; adjacent **violet**; hypotenuse **ink**; minutes **teal** (the dial and every minute value); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "1° = 60'", "like an hour", "0.5° = 30', not 50'", "decimal part × 60", "nearest minute", "minutes < 60", "minutes ÷ 60 to type", "or the ° ' \" key", "24' = 0.4°", "angles add to 180°", "two acute angles: 90°", "borrow 1° = 60'", "steeper than allowed". At most two live at once.
- **Stage changes (standard item 2).** t01b's frame (1); the minutes dial (2); the ladder's angle in minutes (3); g01 board, `we-3` (4); the `we-1` triangle and its second angle (5); framed card (6); question cards (7 to 10); the drone for t03 (11); key notes (12).
- **Worked example (g01 layout).** Scene 4: task strip "A ladder makes an angle of 63°24' with the ground. It reaches 4.6 m up a vertical wall. Find the length of the ladder, correct to 2 decimal places." (site lesson02 `we-3`); a coded triangle; givens card "63°24'" (blue), "opposite 4.6 m" (amber), "ladder L (hypotenuse)" (ink); rows "63°24' = 63 + 24 ÷ 60 = 63.4°", "sin 63.4° = 4.6 / L", "L = 4.6 ÷ sin 63.4°", "= 5.1445…"; framed answer "L ≈ 5.14 m"; crossed slip "sin 63.24°".
- **Memory aid.** Framed card: "Minutes are sixtieths." Key line: "Decimal to minutes: × 60. Minutes to decimal: ÷ 60. Minutes always under 60."
- **Visual surprise.** The dial: 0.5 of a degree fills exactly half the ticks, 30, while the crossed "hundredths" ruler would have said 50 (2); 89°60' appears out of 90° (5).
- **Plain meanings at first use.** Minute of angle ("one sixtieth of a degree"); degrees and minutes ("a whole number of degrees, then the leftover in minutes"); acute angle ("less than ninety degrees").
- **Attempts (original, HSC style).** A1 (pack question 1): a shop ramp rising 0.6 m over 7.5 m: tan⁻¹ 0.08 = 4.574°, so 4°34'; the 1 in 14 limit: tan⁻¹(1/14) = 4.086°, so 4°5'; not allowed. Crossed "4.57° = 4°57'" (caption "0.574 × 60 ≈ 34 minutes"). The limit is called "an access guideline" until Codex confirms AS 1428.1's wording (pack note). A2 (pack question 2, the anchor's ladder again): 4.2 m ladder, foot 1.1 m out: cos⁻¹(1.1/4.2) = 74.82°, so 74°49'; the wall angle 15°11'. Crossed "74°82'" (caption "0.82° × 60 ≈ 49 minutes").
- **Mistake scene:** none separate. Decimals read as minutes (2 said, 3 crossed, A1 crossed, A2 crossed); typing 63.24 (4 crossed); minutes of 60 or more (3, said); the second angle by plain subtraction without borrowing (5, said through the borrow).
- **Cause chain taught, in order:** (1) a degree is split into 60 equal minutes, so a decimal part of a degree is a fraction of 60, not of 100 (2); (2) so the minutes are the decimal part times 60, rounded to the nearest minute (3); (3) the calculator works in decimal degrees, so minutes go in as minutes ÷ 60 (4); (4) a triangle's angles add to 180° and one is 90°, so the two acute angles add to 90° (5); (5) subtracting minutes needs a borrowed degree, because 1° = 60' (5).
- **Entry knowledge (route):** math-s12-t01a and t01b (sides and angles from the ratios); angle sum 180° (Stage 4). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-t03, "How do Pythagoras and trig solve height and distance problems with angles of elevation and depression?").** Scene 11: the drone plate `physics/phys-y11-drone-side-v1.png` (about 300 px wide) hovering over a coded sports field strip (green ground band, white touchline, a corner flag at the left); a coded launch pad square on the ground at the left; a dashed grey vertical from the drone to the ground labelled "40 m" (amber); a ground bracket from the pad to the foot of the vertical, "75 m" (violet); a coded sight line (ink, dotted) from the pad to the drone; chips "how far away?", "what angle?", "Next: heights and distances" and "?". No value is worked out. This is t03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ladder: tan⁻¹ 4 = 75.963757°; 0.963757 × 60 = 57.825, so 58'; 75°58'. Slip "75°96'".
  (b) 0.5 × 60 = 30; 39.5° = 39°30'; 39°50' = 39.8333°.
  (c) `we-3`: 24 ÷ 60 = 0.4; sin 63.4° = 0.894154; 4.6 ÷ 0.894154 = 5.14453, so 5.14 m (MS-41: the site's 5.15 comes from the rounded 0.8942); slip 4.6 ÷ sin 63.24° = 5.15175.
  (d) `we-1`: 39.521196°; 0.521196 × 60 = 31.27, so 39°31'; 90 − 39.521196 = 50.478804; 0.478804 × 60 = 28.73, so 50°29'; 89°60' − 39°31' = 50°29'.
  (e) A1: tan⁻¹ 0.08 = 4.573921°; × 60 → 34.44', so 4°34'; tan⁻¹(1/14) = 4.085617°; 5.14', so 4°5'; slip "4°57'".
  (f) A2: cos⁻¹(1.1/4.2) = 74.816886°; 0.816886 × 60 = 49.01, so 74°49'; 90 − 74.816886 = 15.183114, 10.99', so 15°11'; 89°60' − 74°49' = 15°11'.
  (g) Pronunciations: "seventy-five degrees fifty-eight minutes"; "sixty-three degrees twenty-four minutes"; "four degrees five minutes".

Main question: *The ladder's angle is seventy-five point nine six degrees. What is that in degrees and minutes, and how do degrees and minutes work when we find angles and sides?*
Entry knowledge (t01a, t01b): a side from an angle; an angle from two sides; angle sum 180°.
Stops after: minutes as sixtieths, both conversions, the second acute angle, a limit compared. No seconds.
Handoff: math-s12-t03 ("a drone 40 m up and 75 m along: how far away, and at what angle?").

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the angle blue; opposite amber; adjacent violet; hypotenuse ink; minutes teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · TRIGONOMETRY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the ladder's angle
> Here's the ladder from last time. Its foot is one metre out for every four metres up, so its angle with the ground is inverse tangent of four, seventy-five point nine six degrees. But safety guides and exam questions often give angles in degrees and minutes instead. So how do degrees and minutes work when we find angles and **sides**?

Visual: opens on t01b's final frame exactly. On the first sentence the "Next" chips fade. On "inverse tangent of four" the calculator strip pulses and a grey chip "t01b: inverse tangent" writes. On "degrees and minutes" the chip "75.96° in degrees and minutes?" enlarges and moves beside the arc. On "sides" heading "Degrees and minutes" writes on, and the question chip "75.96° = ?° ?'" moves to the top right.

### 2. what a minute is
> Just like an hour, a degree is split into sixty equal parts, called minutes. So thirty minutes is half a degree, and fifteen minutes is a quarter of a degree. A minute is written with a small dash, like a single quote mark. Here's the trap. Thirty-nine point five degrees is thirty-nine degrees and thirty minutes, not fifty minutes, because point five is half of sixty, not half of a **hundred**. So minutes always stay under sixty.

Visual: stage change: simulation 1. A one-degree wedge enlarged to about 700 px, its arc ticked into 60 minutes (teal), heading chip "1° = 60'" (hand tag "1° = 60'"). On "like an hour" a small grey clock face with its 60 minute ticks sits beside the wedge, hand tag "like an hour". On "thirty minutes" the wedge fills to 30 ticks, label "0.5° = 30'"; on "fifteen minutes" it drops to 15 ticks, "0.25° = 15'". On "single quote mark" a 52 px "39°30'" writes with the ' ringed. On "the trap" a red slip "39.5° = 39°50'" writes; beside the dial a grey ruler of 100 hundredths appears with a mark at 50; on "hundred" the slip and the ruler are crossed (caption "0.5° is half of 60: 30'"), and the dial fills to 30 ticks, hand tag "0.5° = 30', not 50'". On "under sixty" hand tag "minutes < 60".

### 3. decimal degrees to degrees and minutes
> To change a decimal angle into degrees and minutes, keep the whole degrees, and multiply the decimal part by sixty. For the ladder, the whole degrees are seventy-five. The decimal part is about point nine six four, and times sixty that's fifty-seven point eight minutes. Round to the nearest minute, fifty-eight. So the ladder's angle is seventy-five degrees fifty-eight **minutes**. And if the minutes ever round up to sixty, that makes one more whole degree instead. Writing seventy-five degrees ninety-six minutes is the slip. Ninety-six minutes is more than a whole **degree**.

Visual: camera continue: the dial shrinks to the right; the ladder plate returns at the left (about 600 px tall) with its blue arc. Rows, 52 px: "75.96375…°" with the "75" ringed blue (hand tag "keep the whole degrees") and the ".96375…" ringed teal; row "0.96375… × 60 = 57.8…" (hand tag "decimal part × 60"); the dial fills to 57.8 ticks, then snaps to 58 (hand tag "nearest minute"). On "minutes" framed "75°58'" (green), and the ladder's arc label becomes "75°58'". On "round up to sixty" a grey row "59.6' → 60' = 1° more". On "slip" a red slip "75°96'" writes; on "degree" it is crossed (caption "96' is more than 1°: minutes < 60").

### 4. worked example: an angle given in degrees and minutes
> Now the other way. A worked example. A ladder makes an angle of sixty-three degrees twenty-four minutes with the ground, and reaches four point six metres up a vertical wall. Find the length of the ladder. The calculator works in decimal degrees, so turn the minutes into a decimal first. Twenty-four minutes is twenty-four sixtieths of a degree, which is point four. So the angle is sixty-three point four degrees. The height is opposite, and the ladder is the hypotenuse, so sine. The ladder is four point six divided by sine sixty-three point four degrees, five point one four **metres**. Typing sixty-three point two four is the slip, because twenty-four minutes isn't point two **four**. Most calculators also have a degrees and minutes key that does the conversion for you.

Visual: clear change to the g01 board. Task strip, 44 px: "A ladder makes an angle of 63°24' with the ground. It reaches 4.6 m up a vertical wall. Find the length of the ladder, correct to 2 decimal places." (site lesson02 `we-3`). A coded triangle at the left (wall "4.6 m" amber, ladder "L" ink, "63°24'" blue at the foot). Givens card, 44 px: "63°24'" (blue), "opposite 4.6 m" (amber), "ladder L (hypotenuse)" (ink). On "decimal first" a teal row, 52 px: "24' = 24 ÷ 60 = 0.4°" (hand tag "minutes ÷ 60 to type"); a small dial fills 24 of 60 ticks; row "63°24' = 63.4°". On "so sine" "S O H" lights (grey chip "t01a: SOH CAH TOA"). Equation strip "sin 63.4° = 4.6 / L"; rows "L = 4.6 ÷ sin 63.4°", on "metres" "= 5.1445…", framed answer "L ≈ 5.14 m" (green). On "slip" a red slip "sin 63.24°" writes; on "four" it is crossed (caption "24' = 0.4°, not 0.24°"), hand tag "24' = 0.4°". On "degrees and minutes key" a coded calculator key "° ' \"" pulses, hand tag "or the ° ' \" key".

### 5. the angle back in minutes, and the other angle
> Here's last video's triangle, with an opposite side of seven centimetres, and a hypotenuse of eleven. Inverse sine of seven over eleven is thirty-nine point five two degrees. The decimal part times sixty is thirty-one point three, so the angle is thirty-nine degrees thirty-one **minutes**. What about the other acute angle? A triangle's three angles add to a hundred and eighty, and one of them is ninety, so the two acute angles add to ninety. That's ninety take away thirty-nine degrees thirty-one minutes. To take away the minutes, borrow one degree as sixty minutes. Ninety degrees is eighty-nine degrees sixty minutes. Take away thirty-nine degrees thirty-one minutes, and you get fifty degrees twenty-nine **minutes**. Check it. Thirty-nine degrees thirty-one minutes plus fifty degrees twenty-nine minutes is sixty minutes, one more degree, so exactly ninety.

Visual: stage change: the 7 cm and 11 cm triangle (about 800 px wide) at the left, θ at the bottom left (blue), the top angle "β" (blue outline), right-angle box; grey chip "t01b: 39.5°". Rows at the right, 52 px: "θ = sin⁻¹(7 ÷ 11) = 39.5211…°"; "0.5211… × 60 = 31.27…" (teal); on "minutes" (first bold) framed "θ ≈ 39°31'" (green). On "other acute angle" β rings blue. On "add to a hundred and eighty" a grey row "θ + β + 90° = 180°" (hand tag "angles add to 180°"), then "θ + β = 90°" (hand tag "two acute angles: 90°"). Simulation 2: on "borrow one degree" a coded "90°" strip breaks its last degree into a teal 60-tick block, relabelled "89°60'" (hand tag "borrow 1° = 60'"); on "Take away" the "39°31'" piece slides off. On "minutes" (second bold) framed "β = 50°29'" (green). On "Check it" the sum bar "39°31' + 50°29' = 89°60' = 90°" closes with a tick.

### 6. memory aid
> Here's the summary. Minutes are sixtieths of a degree. To get minutes, multiply the decimal part by sixty. To type minutes in, divide them by **sixty**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the minutes dial small, half full ("0.5° = 30'"). Main line, hand font 56 px: "Minutes are sixtieths." On "sixty" the key line, 40 px: "Decimal to minutes: × 60. Minutes to decimal: ÷ 60. Minutes always under 60." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A ramp to a shop entrance rises zero point six metres over a horizontal distance of seven point five metres. Find the angle the ramp makes with the horizontal, to the nearest minute. An access guideline allows a ramp no steeper than one in fourteen, one metre up for every fourteen metres across. Find the angle of that steepest ramp, to the nearest minute. Is this ramp allowed? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A ramp to a shop entrance rises 0.6 m over a horizontal distance of 7.5 m. (a) Find the angle the ramp makes with the horizontal, correct to the nearest minute. (b) An access guideline allows a ramp no steeper than 1 in 14 (1 m up for every 14 m across). Find the angle of that steepest allowed ramp, to the nearest minute. Is this ramp allowed?" Picture slot: a coded HSC-style side view (a long thin wedge, "0.6 m" rise, "7.5 m" run, right-angle box, "θ"). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The rise is opposite and the run is adjacent, so tangent. Inverse tangent of zero point zero eight is four point five seven four degrees, four degrees thirty-four **minutes**. One in fourteen gives four degrees five minutes. The ramp is steeper, so it's not **allowed**. Four degrees fifty-seven minutes is the slip. Point five seven four times sixty is about thirty-four **minutes**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "tan θ = 0.6 / 7.5 = 0.08"; "θ = tan⁻¹ 0.08 = 4.5739…°"; on "minutes" (first bold) framed "θ ≈ 4°34'" (green, (a)). Row "tan⁻¹(1 ÷ 14) = 4.0856…° ≈ 4°5'"; on "allowed" framed "4°34' > 4°5': not allowed" (green, (b)), hand tag "steeper than allowed", and two thin wedges overlay, the ramp's visibly steeper. On "slip" a red slip "4.57° = 4°57'" writes; on "minutes" (second bold) it is crossed (caption "0.574 × 60 ≈ 34 minutes"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A four point two metre ladder leans against a vertical wall, with its foot one point one metres from the wall on level ground. Find the angle between the ladder and the ground, to the nearest minute. Then find the angle between the ladder and the wall. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A 4.2 m ladder leans against a vertical wall with its foot 1.1 m from the wall on level ground. (a) Find the angle between the ladder and the ground, correct to the nearest minute. (b) Find the angle between the ladder and the wall." Picture slot: the ladder plate (about 360 px tall) with a coded overlay ("4.2 m" ink along the ladder, "1.1 m" violet on the ground, right-angle box at the wall's foot; no angle values). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> One point one is adjacent, and the ladder is the hypotenuse, so cosine. Inverse cosine of one point one over four point two is seventy-four point eight two degrees, seventy-four degrees forty-nine **minutes**. The wall angle is ninety take away that, fifteen degrees eleven **minutes**. Seventy-four degrees eighty-two minutes is the slip. Point eight two of a degree is about forty-nine **minutes**.

Visual: the card shrinks to the top. Rows, 44 px: "cos θ = 1.1 / 4.2"; "θ = cos⁻¹(1.1 ÷ 4.2) = 74.8168…°"; on "minutes" (first bold) framed "θ ≈ 74°49'" (green, (a)). Row "89°60' − 74°49'"; on "minutes" (second bold) framed "15°11'" (green, (b)). On "slip" a red slip "74°82'" writes; on "minutes" (third bold) it is crossed (caption "0.82° × 60 ≈ 49 minutes"). Hold about 1 s.

### 11. handoff
> So far, every triangle came drawn for us. Real problems start with a picture. Here's a drone, forty metres above a sports field, and seventy-five metres along the ground from its launch pad. How far away is it, and at what angle do you look up to see it? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: on "Real problems" a coded sports field strip (green ground band, white touchline, a corner flag at the left). On "drone" the drone plate `physics/phys-y11-drone-side-v1.png` (about 300 px wide) slides up into a hover; on "forty metres" a dashed grey vertical from the drone to the ground, "40 m" (amber). On "seventy-five metres" a coded launch pad square at the left and a ground bracket to the foot of the vertical, "75 m" (violet). On "How far away" a dotted ink sight line from the pad to the drone and chip "how far away?"; on "look up" chip "what angle?". On "next" chips "Next: heights and distances" and "?". Hold about 2 s. No value is worked out. This is t03's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- 1° = 60'. Minutes are always under 60.
- Decimal to minutes: decimal part × 60, nearest minute.
- Minutes to decimal: 63°24' = 63 + 24 ÷ 60 = 63.4°.
- 39.5° = 39°30', not 39°50'.
- The two acute angles add to 90°. Borrow 1° = 60'.

Memory aid (framed card, right side, as in scene 6): *Minutes are sixtieths.* Key: *Decimal to minutes: × 60. Minutes to decimal: ÷ 60. Minutes always under 60.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and t03's opening frame.

## Teaching checks

- **Does it explain causes?** Why × 60: a degree has 60 minutes, so a part of a degree is that part of 60 (2, 3). Why ÷ 60 before typing: the calculator works in decimal degrees (4). Why 90° minus: the angle sum with one right angle (5). Why borrow: minutes cannot be taken from 0' (5). Why the ramp fails: its angle is bigger than the limit's (A1).
- **Misconceptions addressed:** decimals read as minutes (2, 3, A1, A2); minutes of 60 or more (3); typing 63.24 (4); rounding the decimal before × 60 (3, said through "about point nine six four" and the unrounded row).
- **Visual standard, item by item:** 1 the painted ladder from the first frame and again in A2; 2 a new stage every 30 to 60 s; 3 the minutes dial driven by the decimal, the borrowed degree; 4 fixed roles (angle blue, minutes teal, sides as t01a); 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the half-full dial against the crossed hundredths ruler, and 89°60'.
- **One idea at a time:** what a minute is (2), decimal to minutes (3), minutes to decimal (4), the second angle (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand and every given visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** t01a's sides and t01b's inverse are grey chips; the `we-1` triangle is carried from t01b, not re-solved from scratch.
- **Standard 1 path:** identical.
- **Syllabus coverage:** Standard 2 "lengths of unknown sides or the size of unknown angles in ... degrees and minutes" (3, 4, 5, A1, A2; key notes 1 to 5); Standard 1 "lengths of unknown sides ... given an angle in ... degrees and minutes" (4; key note 3); Standard 1 "size of unknown angles ... in ... degrees and minutes" (3, 5, A1, A2; key notes 2, 4, 5).
- **Out of scope by design:** seconds; elevation and depression (t03); bearings (t04).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A ramp to a shop entrance rises 0.6 m over a horizontal distance of 7.5 m. (a) Find the angle the ramp makes with the horizontal, correct to the nearest minute. (b) An access guideline allows a ramp no steeper than 1 in 14 (1 m up for every 14 m across). Find the angle of that steepest allowed ramp, to the nearest minute. Is this ramp allowed?"
Model answer: (a) tan θ = 0.6 ÷ 7.5 = 0.08, θ = tan⁻¹ 0.08 ≈ 4.574°, 0.574 × 60 ≈ 34, so 4°34'. (b) tan⁻¹(1/14) ≈ 4.086°, so 4°5'. 4°34' is steeper than 4°5', so the ramp is not allowed. Classic mistake (crossed): "4.57° = 4°57'".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 3 marks suggested).** "A 4.2 m ladder leans against a vertical wall with its foot 1.1 m from the wall on level ground. (a) Find the angle between the ladder and the ground, correct to the nearest minute. (b) Find the angle between the ladder and the wall."
Model answer: (a) cos θ = 1.1 ÷ 4.2, θ = cos⁻¹(1.1 ÷ 4.2) ≈ 74.817°, 0.817 × 60 ≈ 49, so 74°49'. (b) 90° − 74°49' = 15°11'. Classic mistake (crossed): "74°82'".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ladder rule | 4 up, 1 out; tan⁻¹ 4 = 75.96375°; × 60 = 57.8'; 75°58'; slip 75°96' | 1, 3 |
| Dial | 0.5° = 30'; 0.25° = 15'; 39.5° = 39°30'; slip 39°50' | 2 |
| Site `we-3` | 63°24' = 63.4°; 4.6 m; 5.1445, so 5.14 m (MS-41); slip 63.24 | 4 |
| Site `we-1` | 7 cm; 11 cm; 39.52°; 31.27'; 39°31'; 89°60' − 39°31' = 50°29' | 5 |
| A1 | 0.6 m; 7.5 m; 0.08; 4.574°, 4°34'; 1 in 14: 4.086°, 4°5'; not allowed; slip 4°57' | 7, 8 |
| A2 | 4.2 m; 1.1 m; 74.817°, 74°49'; 15°11'; slip 74°82' | 9, 10 |
| Handoff | 40 m; 75 m (no value worked) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `t/verify.py`, run with `python -I`); Codex to re-check.

- tan⁻¹ 4 = 75.963757°; 0.963757 × 60 = 57.825, so 58'.
- 0.5 × 60 = 30; 0.25 × 60 = 15; 39 + 50/60 = 39.8333.
- 24/60 = 0.4; sin 63.4° = 0.894154; 4.6 ÷ sin 63.4° = 5.144526; 4.6 ÷ sin 63.24° = 5.151751.
- sin⁻¹(7/11) = 39.521196°; × 60 of the decimal = 31.272, so 31'; 90 − 39.521196 = 50.478804; × 60 of the decimal = 28.728, so 29'.
- tan⁻¹ 0.08 = 4.573921° (34.435'); tan⁻¹(1/14) = 4.085617° (5.137').
- cos⁻¹(1.1/4.2) = 74.816886° (49.013'); 90 − 74.816886 = 15.183114° (10.987').

## Memory aid check

- **"Minutes are sixtieths."** with key line **"Decimal to minutes: × 60. Minutes to decimal: ÷ 60. Minutes always under 60."** From the site's card 05 ("the minutes are 0.7 × 60 = 42'") and lesson02's "63 + 24/60". Meaning, as said in scene 6: one minute is one sixtieth of a degree, so a decimal part becomes minutes by × 60, and minutes become a decimal by ÷ 60. Assumptions checked: rounded to the nearest minute (site card 05; seconds are not used in the course's questions here); the whole degrees are kept separate (scene 3). It helps a new case: 38.7° is 38° + 0.7 × 60 = 38°42' (the site's own example).
- **Considered, not used:** "Like a clock" as the main line (it explains the 60 but invites time arithmetic; kept as a hand tag only).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `t/count.py`, the method of `work/brief-resolve-standard-r2/count.py`, which reproduces e08's 5,632): **4,910 characters**, 12 scene headings. Characters per scene (1 to 12): 332, 429, 573, 771, 859, 148, 412, 372, 284, 388, 267, 75.

At 13.3 characters per second the speech is about 369 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the dial (2, 3), the board's small dial (4) and the borrowed degree (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 458 s**, under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 4's last sentence (the key's hand tag can carry it); scene 2's "and fifteen minutes is a quarter of a degree"; scene 11's first sentence.

## Scene list and build ids

Lesson key `m-s12t02` (route math-s12-t02). Explainer folder `src/explainer/lessons/math-s12-t02`; build inputs in `docs/production/claude-pm/lessons/math-s12-t02/` (at voicing).

In order (12 scene headings): hook-ladder-angle, what-a-minute-is, decimal-to-minutes, worked-given-dms, angle-and-other-angle, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-drone, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | t01b's frame; the ladder |
| 25 to 60 s | 2 | The minutes dial |
| 60 to 100 s | 3 | The ladder's angle in minutes |
| 100 to 165 s | 4 | g01 board: `we-3` |
| 165 to 225 s | 5 | The `we-1` triangle; the borrowed degree |
| 225 to 240 s | 6 | Framed memory card |
| 240 to 360 s | 7 to 10 | Question cards and countdowns, then feedback |
| 360 to 385 s | 11 | The drone for t03 |
| 385 to 430 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t01b's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-t02-learning-review.md`, `science_check` = `checks/m-s12-t02-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, opened at full size): `physics/phys-y11-drone-side-v1.png` (a grey quadcopter in flat side view, two spinning rotor discs, a camera pod under one end, 2000 × 1000; reads as a drone at 300 px; plate reuse only: Advanced a12-d12 used a drone for a camera-tilt rate, a different question). `maths/ma11-entrance-ramp-v1.png` exists but is Advanced w10's anchor, so A1 uses a coded ramp diagram instead (pack note). `ms12-ladder-wall-v1.png` is briefed in t01b and not yet painted, so its brief was read instead.

Need (painted): none new. Reused: `ms12-ladder-wall-v1.png` (painted before t01b), the drone.

Coded: the minutes dial and clock, the hundredths ruler, the calculator strips and key, the board and its triangles, the borrowed-degree strip and sum bar, the ramp diagram, the ladder overlay, the sports field strip, launch pad, sight line and brackets, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `MinutesDial` and `fmtDMS` (a11-trig-triangle.tsx), `StudioTriangle`, `StudioToolPanel` as the calculator, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row t02):
1. **MinutesDial at one-degree scale** (small option): the dial drawn as a single enlarged degree with 60 ticks, driven by a decimal part, with an optional grey 100-step ruler beside it for the crossed contrast. Check: 0.5 fills 30 ticks; 0.96376 fills 57.8 and snaps to 58 on cue.
2. **Borrow strip** (small, lesson folder): a degree bar that splits its last degree into a 60-tick block and relabels "90°" as "89°60'". Check: the relabel and the slide-off read at 52 px.

## Codex asset brief (Maths S12 T02)

No new plate. Before the t02 build, confirm `ms12-ladder-wall-v1.png` (t01b's brief) is painted and reads at 700 px and 360 px tall on the paper background (`#f6f1e7`), with the coded 4 : 1 overlay on the ladder's line within 4 px; and confirm `physics/phys-y11-drone-side-v1.png` reads at 300 px wide. Report the check in `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's `we-3` uses the corrected 5.14 m (MS-41), never 5.15, and `we-1` keeps 39°31'.
4. Confirm the ladder rule ("1 metre out for every 4 metres up") against SafeWork NSW or Safe Work Australia guidance, and the ramp limit (1 in 14) against AS 1428.1 or a dated NSW access guide; record both source lines. If either wording differs, report it: the cards already say "a safety rule" and "an access guideline".
5. Confirm both attempts carry every demand and given, and neither card nor picture shows an answer.
6. Confirm scene 1 opens on t01b's final frame exactly, and scene 11's frame matches t03's opening.
7. Confirm degrees and minutes are written as the site writes them (63°24', with a straight apostrophe or a prime used consistently), and spoken "degrees ... minutes".
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Degrees and Minutes in Trigonometry | Year 12 Maths Standard

(Title length: 61 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson03.sa.html

A ladder's safety rule gives an angle of 75.96°. What is that in degrees and minutes? Learn why a degree has 60 minutes, why 39.5° is 39°30' and not 39°50', and how to turn a calculator angle into degrees and minutes. Then go the other way: type an angle like 63°24' as a decimal to find a ladder's length, find the second acute angle by taking 90° and borrowing a degree as 60 minutes, and check whether a shop ramp is steeper than allowed. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Trigonometry (Standard 2) and Right-angled triangles (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Apply trigonometric ratios to right-angled triangles to find either the lengths of unknown sides or the size of unknown angles in both degrees, and degrees and minutes"
Syllabus content, Standard 1:
"Apply trigonometric ratios to find the lengths of unknown sides in right-angled triangles given an angle in both degrees, and degrees and minutes"
"Apply trigonometric ratios to find the size of unknown angles in right-angled triangles, in both degrees, and degrees and minutes"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9c5d0bea (Standard 1)

Builds on: Finding an Angle with Inverse Trig Ratios. Next: angles of elevation and depression, with Pythagoras.

#Year12Maths #MathsStandard #Trigonometry #HSCScience

## Open decisions

- **1. Scope (root; ruling 57).** This video is the degrees and minutes video, both directions, because t01b now teaches the inverse ratios. The t02 pack's title ("How do inverse trig ratios find a missing angle in degrees and minutes?") and main question change; the route entry's mainLearnerQuestion should follow (decisions file, section 2).
- **2. The ramp limit's wording (Codex, then root).** "An access guideline allows a ramp no steeper than 1 in 14" is used until Codex confirms AS 1428.1's current wording; if root prefers, the card can say "Suppose a rule allows ..." with no standard implied.
- **4. Length just under 5,000 characters (root).** 4,910 characters, about 458 s, with no padding (rulings 52 and 55). Scene 5 is the longest stage (859 characters, about 65 s: one triangle, the angle in minutes, then the second angle and its check); named trim if needed: the check sentence (the sum bar carries it).
- **3. Seconds (designer).** Not taught. The syllabus says "degrees, and degrees and minutes"; the calculator's ° ' " key is named once and its seconds are not mentioned.

## Review notes

- Revision 1. Next: student learning review (trace from t01b; check that "like an hour" helps without inviting time sums, that the borrow in scene 5 is followable at Standard pace, that the ramp question's (b) is clear as "find the limit's angle, then compare", that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
