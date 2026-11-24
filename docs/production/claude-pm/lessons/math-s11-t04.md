# Maths S11 T04: How does longitude give time differences at 15 degrees per hour? 360° in 24 hours, 1° = 4 minutes, east is ahead, subtract on the same side and add across Greenwich, the day change, and why real clocks round (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-t01.md` to `t03.md` (Revision 1, this batch), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,582 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 505 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of the Year 11 Time and location strand, outline playlist order 51. One video for Standard 1 and Standard 2. Viewers arrive from t03's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-t04.md`. Route entry: `math-s11-t04` in `../../programme/maths-standard-route-inputs-12.json`. Site lesson: `year11/time-and-location/lesson03.sa.html` (recall, formulas card, WE2, WE3, trap 02, drills, Q2). Visual system: maths studio kit; the desk globe (new in t03); the spinning globe, longitude ruler and zone map coded.

Owner rules applied: as t01 (header strip "TIME AND LOCATION" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the globe and Sun, Australian cities, a video call between Tokyo and New York, two ships); no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Time and location, "Positions on the Earth's surface", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-12.json`:

- `cib18a3d4b`: "Apply 15° = 1 hour time difference to calculate the time differences between locations on Earth given the relevant longitudes"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

**Boundary:** starts from t03's final frame exactly (the desk globe `ms11-desk-globe-v1.png`, about 640 px tall, at the centre, lit from the left by a coded sun with a day-night shade; pins "Sydney 151°E" and "Perth 116°E"; chips "Noon at different times?", "Next: longitude and time" and "?"). Recalls t03 (longitude), t01 (60 minutes; 24-hour time) and t02 (past midnight changes the day) in grey chips. Teaches: 15° = 1 h and 1° = 4 min, with the reason; east is ahead; subtract on the same side, add across Greenwich; the time at the other place, with the day; longitude time against real clock time. Not taught: Australian zones and daylight saving (t05); UTC (t06).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-t04-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **T04-SEASON (should fix, root's ruling 5): accepted.** Scene 3 now says "Real clocks in Perth are two hours behind Sydney on standard time, three during daylight saving, and never two hours twenty." The two clock faces are captioned "standard time", and a grey chip "daylight saving: 3 h (t05)" shows on the daylight-saving clause, so t04 and t05 state one consistent fact. Scene 4's "before any daylight saving" already matches.
- No number changed. Joins unchanged.
- Error-check brief item 7 added (strand pattern 1 of the review summary): every time-zone, offset, gap or Sun claim names its season or month or is given in the question.
- Narration 5,594 characters (Revision 1: 5,541); about 506 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-t04-learning-review.md` already matches).

## Decisions

- **Anchor: the lit globe (t03's frame).** Noon reaches Sydney before Perth; the question is "how much later?".
- **The reason first: 360° in 24 h (recurring model: the spinning globe).** A noon meridian sweeps west 15° for each hour on a counter; then 60 min ÷ 15 = 4 min per degree (site's "One and four").
- **East is ahead because the Sun gets there first.** The Earth spins towards the east, so sunrise and noon reach eastern places earlier; their clocks read later.
- **Same side: subtract; opposite sides: add (site trap 02), shown on a longitude ruler.** The ruler runs from 180°W through Greenwich 0° to 180°E; two markers and a gap bracket make "the gap goes through 0" visible.
- **The surprise: the Sun's time is not the clocks' time.** Sydney and Perth differ by 2 h 20 min by longitude, but their clocks differ by 2 h. Regions round to whole or half hours so they share one time (handoff to t05). 150°E ÷ 15 = 10 explains "ten hours ahead of Greenwich" for eastern Australia's standard time.
- **The day can change.** Tokyo and New York, 214° apart: 14 h 16 min; 9 am Wednesday in Tokyo is 6:44 pm Tuesday by New York's longitude (t02's odometer, running backwards past 0000: "previous day").
- **Simulations (standard item 3).**
  1. **Spinning globe** (scene 2): `GlobeView` turning with a noon meridian and sun; counters "hours" and "degrees" tick together (1 h ↔ 15°); a zoom shows 1° ↔ 4 min.
  2. **Longitude ruler** (scenes 3, 5, 6, A1, A2 feedback): markers dragged to two longitudes; the gap bracket and readouts update in degrees, minutes (× 4) and hours (÷ 15); an "ahead" arrow always points east.
  3. **Clock odometer** (scene 5): t02's part running backwards 14 h 16 min from 0900 Wed to 1844 Tue, lighting "previous day".
- **Colour roles (fixed t01 to t06).** Longitude blue; the 15° and the time difference amber; Greenwich amber (zero line); the day change violet; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "360° in 24 h", "1° = 4 min", "east is ahead", "same side: subtract", "across Greenwich: add", "previous day", "Sun's time ≠ clock time". At most two live at once.
- **Stage changes (standard item 2).** The lit globe (1); the spinning globe (2); the longitude ruler and Australia (3); Greenwich to 150°E (4); the world ruler and the odometer (5); the two slips (6); framed card (7); question cards (8 to 11); the zone map (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "360° ÷ 24 h = 15° per hour"; "60 min ÷ 15 = 4 min per degree" (framed green). Scene 3: "151 − 116 = 35°"; "35 × 4 = 140 min = 2 h 20 min" (framed green); "Sydney noon → Perth 9:40 am (by the Sun)". Scene 4: "150 ÷ 15 = 10 h ahead of Greenwich" (framed green). Scene 5: "140 + 74 = 214°; 214 × 4 = 856 min = 14 h 16 min"; "9:00 am Wed − 14 h 16 min = 6:44 pm Tue" (framed green). Scene 6: crossed "140 − 74 = 66° → 4 h 24 min" (caption "across Greenwich: add"); crossed "New York ahead" (caption "east is ahead").
- **Memory aid.** Framed card: "15 degrees is an hour, 1 degree is 4 minutes. East is ahead: the Sun gets there first." Key line: "Same side of Greenwich: subtract the longitudes. Opposite sides: add them. Then ÷ 15 for hours, or × 4 for minutes."
- **Visual surprise.** The Sun's noon in Perth arrives 2 h 20 min after Sydney's, but the clocks on screen differ by exactly 2 h (scene 3).
- **Plain meanings at first use.** Time difference ("how far one place's clock is ahead of or behind another's"); "ahead" ("later on the clock"); longitude time ("the time the Sun gives, from longitude alone").
- **Attempts.** A1 (pack question 1): 1:00 pm; crossed "3:00 am" (caption "east is ahead"). A2 (pack question 2): 9 h; 6:00 am; crossed "45° → 3 h" (caption "across Greenwich: add").
- **Mistake scene:** scene 6, short, two slips (subtracting across Greenwich; the wrong direction), because each recurs in A1 and A2.
- **Cause chain taught, in order:** (1) the Earth turns 360° in 24 hours, so it turns 15° each hour, and 1° takes 4 minutes (2); (2) it turns towards the east, so the Sun reaches eastern places first and their time is ahead (2); (3) the gap between two longitudes is the angle the Earth must turn, so divide it by 15 for hours: on one side of Greenwich the gap is the difference, across it the gap is the sum (3, 5); (4) the gap from Greenwich itself gives a place's hours ahead of Greenwich (4); (5) taking hours off can cross midnight, so the day changes too (5); (6) regions share one clock time, so real clocks round the Sun's time (3, 12).
- **Entry knowledge (route):** math-s11-t03, t01, t02. Recalled in grey chips.
- **Site notes.** lesson03 recalculated: MSY-25 (Q1 and Q3 rounding). WE2, WE3 and Q2 correct.
- **Handoff (to math-s11-t05, Australian time zones).** Scene 12: board clear; a coded map of Australia (about 1,100 px wide) shaded in three zone bands: west (Western Australia), central (Northern Territory and South Australia) and east (Queensland, New South Wales, the ACT, Victoria, Tasmania), each band a muted tint, with a small coded clock face in each labelled "Perth", "Adelaide", "Sydney" (no times shown); chips "3 zones, 1 time in each", "Next: Australian time zones" and "?". t05 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 360 ÷ 24 = 15; 60 ÷ 15 = 4. 105 ÷ 15 = 7 (site WE3). 151 = 150 + 1: 10 h + 4 min.
  (b) 151 − 116 = 35; 35 × 4 = 140 = 2 h 20 min; 35 ÷ 15 = 2.333 h; noon − 2 h 20 min = 9:40 am. Real zones: AWST and AEST differ by 2 h.
  (c) 150 ÷ 15 = 10. Sydney 151.2 ÷ 15 = 10.08 h (site revisit, not used on screen).
  (d) 140 + 74 = 214; 214 × 4 = 856 = 14 h 16 min; 0900 − 14 h 16 min = 1844 the previous day. Slip: 140 − 74 = 66; 66 × 4 = 264 = 4 h 24 min.
  (e) A1: 105 − 30 = 75; 75 ÷ 15 = 5; 0800 + 5 h = 1300. A2: 90 + 45 = 135; 135 ÷ 15 = 9; 1500 − 9 h = 0600; slip 90 − 45 = 45 → 3 h.
  (f) Longitudes (Codex confirms, rounded to the degree): Sydney 151°E, Perth 116°E, Tokyo 140°E (139.7°E), New York 74°W (74.0°W).

Main question: *Noon reaches Sydney before Perth. How does longitude give time differences at 15 degrees per hour?*
Entry knowledge (math-s11-t03, t01, t02): longitude; 60 minutes; past midnight changes the day.
Stops after: 15° = 1 h, 1° = 4 min, east ahead, subtract or add, the day change, longitude time against clock time.
Handoff: math-s11-t05: "Next: Australian time zones".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): longitude blue; 15° and time differences amber; Greenwich amber; day change violet; answer green; mistake red. Header strip "TIME AND LOCATION". Scene headings in the hand font, 44 px.

### 1. hook: noon at different times
> Here's the globe, lit by the Sun. As the Earth turns, sunlight sweeps across it, and noon, when the Sun is highest, reaches Sydney first, and Perth a little later. The same happens with sunrise and sunset, every single day. So clocks in different places should read different times. But how much later? Is there a way to work out a time difference from longitude alone? There is, and it rests on one number. So how does longitude give time **differences**?

Visual: opens on t03's final frame exactly (the lit globe, pins "Sydney 151°E" and "Perth 116°E", chips "Noon at different times?", "Next: longitude and time", "?"). On "As the Earth turns" the "Next" chips fade and the day-night edge creeps across the globe; on "Sydney first" a small sun icon sits over Sydney's pin with a coded clock "12:00" (green); on "Perth a little later" the sun icon moves on to Perth's pin and a second clock "12:00" appears with a red "?" between them: "how much later?". On "differences" heading "Longitude and time" writes on (hand font, 56 px).

### 2. why 15 degrees is one hour
> The Earth spins once a day. That's a full turn, three hundred and sixty degrees, in twenty-four hours. Divide, and every hour it turns fifteen degrees. So fifteen degrees of longitude is one hour of time. Watch the noon line sweep. Every hour, it moves another fifteen degrees west. We can go smaller, too. One hour is sixty minutes, and sixty divided by fifteen is four, so one degree of longitude is four minutes of **time**. Move one degree east, and the Sun's noon comes four minutes sooner. Fifteen degrees is an hour, and one degree is four minutes. And because the Earth spins towards the east, the Sun always reaches the eastern place first. So the place further east is **ahead**, and the place further west is behind.

Visual: stage change (simulation 1): the desk globe cross-fades into the coded globe seen from above the North Pole (about 760 px), with blue meridians every 15° and an amber noon line from the centre towards a sun at the left. Row, 52 px: "360° ÷ 24 h = 15° per hour" (hand tag "360° in 24 h"). On "Watch the noon line sweep" the globe turns; counters at the right tick together: "1 h · 15°", "2 h · 30°", "3 h · 45°". On "sixty divided by fifteen" a zoom onto one 15° slice divided into 15 one-degree slivers, each labelled "4 min"; on "time" row "60 min ÷ 15 = 4 min per degree" (framed green), hand tag "1° = 4 min". On "spins towards the east" a curved arrow "east" on the globe's rim; on "ahead" the sun marker reaches a pin on the east side first and its coded clock reads later (hand tag "east is ahead").

### 3. same side of Greenwich: subtract
> Let's use it. Sydney is at about a hundred and fifty-one degrees east, and Perth at about a hundred and sixteen degrees east. Both are east of Greenwich, on the same side, so subtract to find the gap. A hundred and fifty-one minus a hundred and sixteen is thirty-five **degrees**. Each degree is four minutes, so thirty-five degrees is a hundred and forty minutes, two hours and twenty minutes. Or divide by fifteen, and you get two and a third hours, the same thing. Careful, two and a third hours is two hours twenty, not two hours thirty-three, because a third of sixty minutes is twenty. Sydney is further east, so it's ahead. When the Sun says noon in Sydney, it says nine forty in **Perth**. Now here's the surprise. Real clocks in Perth are two hours behind Sydney on standard time, three during daylight saving, and never two hours twenty. Regions round their clocks to whole hours, or sometimes half hours, so everyone in a region shares one time. Longitude gives the Sun's time. The clocks are a choice, and that's coming **up**.

Visual: stage change (simulation 2): the longitude ruler across the top (1,600 px): "180°W" at the left, Greenwich "0°" (amber) at the centre, "180°E" at the right, ticks every 15°. Below, a coded strip map of Australia with Perth and Sydney dots. On "Sydney is at" a blue marker drops at 151°E; on "Perth" a second at 116°E. On "same side" both markers glow on the east half (hand tag "same side: subtract"); a gap bracket spans them; on "degrees" (first bold) row "151 − 116 = 35°" (amber). On "four minutes" row "35 × 4 = 140 min = 2 h 20 min" (framed green); on "divide by fifteen" grey row "35 ÷ 15 = 2⅓ h"; on "not two hours thirty-three" a red ghost "2 h 33 min" crossed (caption "⅓ of 60 min = 20 min"). On "noon in Sydney" coded clocks above the two dots: "12:00" over Sydney; on "Perth" "9:40" over Perth (green), with an arrow pointing east labelled "ahead". On "Real clocks" two clock faces slide in beneath, captioned "standard time": "Sydney 12:00" and "Perth 10:00" with a "2 h" chip; on "three during daylight saving" a small grey chip "daylight saving: 3 h (t05)" (Revision 2, T04-SEASON); beside the Sun's "2 h 20 min" (visual surprise), hand tag "Sun's time ≠ clock time". On "up" a small chip "rounded zones: soon".

### 4. measuring from Greenwich
> The same idea explains a number you'll see a lot. The meridian at a hundred and fifty degrees east is a hundred and fifty degrees from Greenwich. A hundred and fifty divided by fifteen is ten, so it's ten hours ahead of **Greenwich**. When it's noon at Greenwich, it's ten pm there. A place at a hundred and five degrees east is seven hours ahead, so noon at Greenwich is seven pm there. And Sydney, at a hundred and fifty-one east, is one degree past a hundred and fifty, so by the Sun it's ten hours and four minutes ahead of Greenwich. That's why the clocks in eastern Australia are set ten hours ahead of Greenwich, the nearest whole hour, before any daylight saving.

Visual: the ruler stays (continue). A marker sits at Greenwich "0°" and a second at "150°E"; the bracket spans 0 to 150. On "divided by fifteen" row "150 ÷ 15 = 10 h" (amber); on "Greenwich" row "150°E is 10 h ahead of Greenwich" (framed green). On "noon at Greenwich" clocks above the two markers: "12:00" (Greenwich) and "22:00" (150°E). On "a hundred and five degrees east" a third marker at 105°E, row "105 ÷ 15 = 7 h → 7:00 pm" (green; site WE3). On "one degree past" a marker at 151°E and grey row "151° = 150° + 1° → 10 h 4 min (by the Sun)". On "eastern Australia" a chip "eastern Australia: Greenwich + 10 h" and a grey chip "t05: daylight saving".

### 5. opposite sides: add, and watch the day
> What if the two places are on opposite sides of Greenwich, one east and one west? Then the gap runs through nought, so you add. Tokyo is at about a hundred and forty degrees east, and New York at about seventy-four degrees west. A hundred and forty plus seventy-four is two hundred and fourteen degrees. Times four minutes, that's eight hundred and fifty-six minutes, which is fourteen hours sixteen **minutes**. Tokyo is east, so it's ahead. If it's nine am on Wednesday in Tokyo, take off fourteen hours sixteen. Going back past midnight takes you into the day before. So by longitude, it's six forty-four pm on Tuesday in New **York**. When a time difference crosses midnight, check the day as well as the time.

Visual: stage change: the ruler at the top with a coded strip world map below (Japan and the eastern United States marked). On "opposite sides" the markers drop at "140°E" and "74°W", one each side of Greenwich (hand tag "across Greenwich: add"); the bracket draws from 74°W through 0° to 140°E, splitting into "74°" and "140°". Rows, 52 px: "140 + 74 = 214°"; on "minutes" "214 × 4 = 856 min = 14 h 16 min" (amber, then green). On "nine am on Wednesday" the clock odometer (t02) shows "0900 Wed" (blue); on "take off" it rolls backwards 14 h 16 min, passing "0000" where a violet chip "previous day" lights (hand tag "previous day"); on "York" it settles "1844 Tue" and row "9:00 am Wed − 14 h 16 min = 6:44 pm Tue" (framed green).

### 6. two slips to avoid
> Two slips catch people here. The first is subtracting when the places are on opposite sides. Seventy-four from a hundred and forty is sixty-six degrees, which would put New York only four hours twenty-four behind Tokyo, and that's far too **close**. The second is the direction. Adding the hours to the western place puts it ahead, but the Sun reaches the east first, so east is always **ahead**.

Visual: the ruler stays. On "subtracting" a red bracket from 74 to 140 on the east side only, a red slip "140 − 74 = 66° → 4 h 24 min" writes; on "close" it is crossed (caption "across Greenwich: add"). On "the direction" a red slip "New York 0900 + 14 h 16 min: ahead" writes; on "ahead" it is crossed (caption "east is ahead") and the east-pointing "ahead" arrow pulses.

### 7. memory aid
> So here's longitude and time in one card. Fifteen degrees is an hour, and one degree is four minutes. Same side, subtract the longitudes. Opposite sides, add them. And east is ahead, because the Sun gets there **first**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the longitude ruler (small) with an east arrow. Main line, hand font 56 px: "15 degrees is an hour, 1 degree is 4 minutes. East is ahead: the Sun gets there first." On "first" the key line, 40 px: "Same side of Greenwich: subtract the longitudes. Opposite sides: add them. Then ÷ 15 for hours, or × 4 for minutes." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Town A is at thirty degrees east, and town B is at one hundred and five degrees east. Using longitude only, when it's eight am in town A, what time is it in town B? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Town A is at 30°E and town B is at 105°E. Using longitude only, when it is 8:00 am in town A, what time is it in town B?" Picture slot: a blank longitude ruler (no markers). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Both are east, so subtract. A hundred and five minus thirty is seventy-five degrees, and seventy-five divided by fifteen is five hours. Town B is further east, so it's ahead, and the time there is one **pm**. Taking the five hours off, to get three am, is the **slip**.

Visual: the card shrinks to the top (30 px). The ruler: markers at 30°E and 105°E, bracket "75°". Rows, 44 px: "105 − 30 = 75°; 75 ÷ 15 = 5 h"; on "pm" "8:00 am + 5 h = 1:00 pm" (framed green), the "ahead" arrow over town B. On "slip" a red slip "3:00 am" writes and is crossed (caption "east is ahead"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Ship A is at ninety degrees east, and ship B is at forty-five degrees west. It's three pm on ship A. Using longitude only, find the time difference, and the time on ship B. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Ship A is at 90°E and ship B is at 45°W. It is 3:00 pm on ship A. Using longitude only, find (a) the time difference, (b) the time on ship B." Picture slot: a blank longitude ruler. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The ships are on opposite sides of Greenwich, so add. Ninety plus forty-five is a hundred and thirty-five degrees, and divided by fifteen, that's nine **hours**. Ship B is west, so it's behind. Three pm take away nine hours is six **am**. Subtracting, to get forty-five degrees and three hours, is the **slip**.

Visual: the card shrinks to the top. The ruler: markers at 90°E and 45°W, the bracket through 0°. On "hours" row "90 + 45 = 135°; 135 ÷ 15 = 9 h" (framed green). On "am" row "3:00 pm − 9 h = 6:00 am" (framed green). On "slip" a red slip "90 − 45 = 45° → 3 h" writes and is crossed (caption "across Greenwich: add"). Hold about 1 s.

### 12. handoff: Australian time zones
> So that's longitude and time. Fifteen degrees an hour, and east ahead. But remember the surprise. Real clocks don't follow every degree. Australia shares just three time zones, each with one time on its clocks, rounded from the Sun's time, and some states move their clocks in summer while others don't. How do Australian time zones and daylight saving work? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "Real clocks" the coded map of Australia (about 1,100 px wide) draws; on "three time zones" it shades in three bands (west, central, east), each with a small coded clock face labelled "Perth", "Adelaide", "Sydney" (no times), and chip "3 zones, 1 time in each". On "in summer" a small coded sun icon blinks over the south-east and fades. On "next" chips "Next: Australian time zones" and "?". Hold about 2 s. This is t05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- 360° in 24 h: 15° = 1 hour; 1° = 4 minutes.
- East is ahead; west is behind.
- Same side of Greenwich: subtract the longitudes.
- Opposite sides: add them.
- Time difference = degrees ÷ 15 (hours) or × 4 (minutes); check the day.

Memory aid (framed card, right side, as in scene 7): *15 degrees is an hour, 1 degree is 4 minutes. East is ahead: the Sun gets there first.* Key: *Same side of Greenwich: subtract the longitudes. Opposite sides: add them. Then ÷ 15 for hours, or × 4 for minutes.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t05's opening frame.

## Teaching checks

- **Does it explain causes?** Why 15°: 360° in 24 h (2). Why 4 min: 60 ÷ 15 (2). Why east is ahead: the Earth spins east, so the Sun gets there first (2). Why subtract or add: the gap is the angle the Earth turns, through 0° or not (3, 5). Why the day changes (5). Why clocks round (3).
- **Misconceptions addressed:** subtracting across Greenwich (6, A2); the wrong direction (6, A1); decimals as minutes (3: "two and a third hours, the same thing" beside 2 h 20 min); the day change (5); longitude time against clock time (3).
- **Visual standard, item by item:** 1 the lit globe in the first 20 s; 2 a new stage every 40 to 70 s; 3 the spinning globe with tied counters, the longitude ruler with live brackets, the odometer running back past midnight; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the Sun's 2 h 20 min against the clocks' 2 h.
- **One idea at a time:** the reason (2), same side (3), from Greenwich (4), opposite sides and the day (5), slips (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 20 s and 23 s.
- **Avoided double teaching:** t03's longitude, t01's sixties and t02's day change in chips; zones and UTC left to t05 and t06.
- **Syllabus coverage:** `cib18a3d4b` (2 to 6, A1, A2; notes 1 to 5).
- **Out of scope by design:** UTC offsets (t06); the International Date Line; Australian zones (t05).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: 105 − 30 = 75°; 75 ÷ 15 = 5 h; B is east, so 8:00 am + 5 h = 1:00 pm. Classic mistake (crossed): "3:00 am".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: (a) 90 + 45 = 135°; 135 ÷ 15 = 9 h. (b) B is west: 3:00 pm − 9 h = 6:00 am. Classic mistake (crossed): "45° → 3 h".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rates | 15° per hour; 4 min per degree | 2 |
| Sydney and Perth | 35°; 140 min = 2 h 20 min; 9:40 am; clocks 2 h | 3 |
| Greenwich to 150°E, 105°E, 151°E | 10 h, 10 pm; 7 h, 7 pm; 10 h 4 min | 4 |
| Tokyo and New York | 214°; 856 min = 14 h 16 min; 6:44 pm Tue | 5 |
| Slip | 66°; 4 h 24 min | 6 |
| A1 | 75°; 5 h; 1:00 pm; slip 3:00 am | 8, 9 |
| A2 | 135°; 9 h; 6:00 am; slip 45°, 3 h | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11t/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 360 ÷ 24 = 15; 60 ÷ 15 = 4.
- 151 − 116 = 35; 35 × 4 = 140 = 2 h 20 min; 1200 − 2 h 20 min = 0940; AWST and AEST differ by 2 h.
- 150 ÷ 15 = 10; 1200 + 10 h = 2200. 105 ÷ 15 = 7; 1200 + 7 h = 1900. 150 ÷ 15 + 1 × 4 min = 10 h 4 min. ⅓ × 60 = 20.
- 140 + 74 = 214; 214 × 4 = 856 = 14 h 16 min; 0900 − 14 h 16 min = 1844 the previous day.
- 140 − 74 = 66; 66 × 4 = 264 = 4 h 24 min.
- 105 − 30 = 75; 75 ÷ 15 = 5; 0800 + 5 h = 1300. 90 + 45 = 135; 135 ÷ 15 = 9; 1500 − 9 h = 0600.

## Memory aid check

- **"15 degrees is an hour, 1 degree is 4 minutes. East is ahead: the Sun gets there first."** with key line **"Same side of Greenwich: subtract the longitudes. Opposite sides: add them. Then ÷ 15 for hours, or × 4 for minutes."** From the site's "One and four" and "East = ahead", with the reason attached. Meaning, as said in scene 7. Assumptions checked: "longitude only" (the Sun's time), not clock time (3); opposite sides means one E and one W, with a sum up to 360° (the video's examples stay under 360°; a sum over 180° still gives the HSC-style answer the site and syllabus expect). It helps a new case: 60°E and 15°W: 75° → 5 h, the 60°E place ahead.
- **Considered, not used:** "GMT: Greenwich Means Time" (t06 uses UTC, the syllabus term).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,594 characters** in Revision 2 (Revision 1: 5,541), 13 scene headings. Characters per scene (1 to 13): 452, 719, 1027, 667, 706, 388, 216, 197, 261, 204, 299, 371, 75. Feedback speech about 19.6 s and 22.5 s.

At 13.3 characters per second the speech is about 421 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the spinning globe (2) and the ruler (3, 5), about 20 s; the key-notes scene adds about 39 s beyond its line. Total **about 506 s**, 64 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's 105°E sentence (keep the row on screen); scene 3's "Careful" sentence (keep the crossed ghost).

## Scene list and build ids

Lesson key `m-s11t04` (route math-s11-t04). Explainer folder `src/explainer/lessons/math-s11-t04`; build inputs in `docs/production/claude-pm/lessons/math-s11-t04/` (at voicing).

In order (13 scene headings): hook-noon, why-15-degrees, same-side, from-greenwich, opposite-sides, two-slips, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | The lit globe |
| 32 to 92 s | 2 | The spinning globe and counters |
| 92 to 160 s | 3 | The longitude ruler: Sydney and Perth; Sun against clocks |
| 160 to 190 s | 4 | Greenwich to 150°E |
| 190 to 252 s | 5 | Tokyo and New York; the odometer |
| 252 to 285 s | 6 | Two slips |
| 285 to 302 s | 7 | Framed memory card |
| 302 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 415 s | 12 | The zone map |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t03's last frame continues into 1; 1 to 2 the plate cross-fades into the coded globe; 2 to 3 stage change; 3 to 4 continue; 4 to 5 stage change; 5 to 6 continue; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-t04-learning-review.md`, `science_check` = `checks/m-s11-t04-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026): `ms11-desk-globe-v1.png` is new (t03's brief); no other plate fits a rotating Earth, so the teaching globe is coded (`GlobeView`, t03). No people.

Need: none beyond t03's globe. Reused: `ms11-desk-globe-v1.png` (scenes 1, 2).

Coded: the sun and shade, the spinning globe, counters, the longitude ruler and brackets, the strip maps of Australia and the world, the clocks, the odometer, the zone map, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `GlobeView` (t03), `GridMap` strip mode (t03), `ClockOdometer` (t02, backwards mode), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row t04):
1. **`GlobeView` spin mode**: polar view with a noon line and sun; hour and degree counters tied (1 h ↔ 15°); a zoom of one 15° slice into fifteen 4-minute slivers. Check: 3 h ↔ 45°.
2. **`LongitudeRuler`**: −180 to 180 with Greenwich at 0, two draggable markers, a gap bracket that runs through 0 when the markers are on opposite sides, readouts in degrees, minutes (× 4) and hours (÷ 15), and an east-pointing "ahead" arrow. Check: 151, 116 → 35°, 140 min; 140E, 74W → 214°, 856 min; 90E, 45W → 135°, 9 h.
3. **`ZoneMap` (Australia)**: a coded map of Australia with state borders, shaded in zone bands, each with a coded clock face (times optional). Reused in t05 (with the month slider) and t06.

## Codex asset brief

No new plate beyond t03's `ms11-desk-globe-v1.png`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the rounded longitudes (Sydney 151°E, Perth 116°E, Tokyo 140°E, New York 74°W) and that Perth's clocks are 2 h behind Sydney's in standard time.
4. Confirm both attempts carry every demand ("using longitude only") and show no answer.
5. Confirm scene 1 opens on t03's final frame exactly and scene 12 matches t05's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.
7. Season check (Revision 2, learning review pattern 1): every time-zone, offset, gap or Sun claim, including side remarks, names its season or month or is given in the question, and is true for that season.

## YouTube metadata (draft)

Title: Longitude and Time: 15 Degrees Is One Hour | Year 11 Maths Standard

(Title length: 67 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/time-and-location/lesson03.sa.html

Noon reaches Sydney before Perth. Learn why the Earth's turn makes 15 degrees of longitude worth one hour (and 1 degree worth 4 minutes), why the place further east is ahead, when to subtract or add longitudes, how a time difference can change the day, and why real clocks don't match the Sun exactly. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Time and location. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Apply 15° = 1 hour time difference to calculate the time differences between locations on Earth given the relevant longitudes"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

Builds on: Latitude and Longitude: Finding Any Place on Earth. Next: Australian Time Zones and Daylight Saving.

#Year11Maths #MathsStandard #TimeZones #HSCScience

## Open decisions

- **1. Sums over 180°.** Following the site and HSC practice, opposite-side longitudes are added even when the sum exceeds 180° (Tokyo and New York, 214°). The shorter way round the other side (146°) would give the same clock time with the other day; the video does not raise this (t06 handles days with UTC).

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (T04-SEASON). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from t03; check that 15° comes from 360 ÷ 24 before use, that "east is ahead" carries its reason, that the ruler makes "add across Greenwich" visible, that the day change is shown on the odometer, that the Sun's 2 h 20 against the clocks' 2 h lands, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-t04-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,594 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,582 (Codex's value). Narration is **5,582 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief271/source-inventory.json`). At 13.3 characters per second the speech is about 420 s; total about 505 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
