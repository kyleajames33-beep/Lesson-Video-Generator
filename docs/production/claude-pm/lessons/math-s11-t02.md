# Maths S11 T02: How do we calculate elapsed time from timetables and schedules? Counting up in hops (to the next o'clock, whole hours, the minutes left), midnight as a stop on the way, adding a duration past 2400, reading a timetable, and a shift's pay (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-t01.md` (Revision 1, this batch), `math-s11-a01.md` to `a11.md`, the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,806 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 515 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of the Year 11 Time and location strand, outline playlist order 49. One video for Standard 1 and Standard 2. Viewers arrive from t01's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-t02.md`. Route entry: `math-s11-t02` in `../../programme/maths-standard-route-inputs-12.json`. Site lesson: `year11/time-and-location/lesson01.sa.html` (hook, WE1 to WE3, traps 02 and 03, drills 3 to 5, Q1). Visual system: maths studio kit; the coach, departure board, bus, bus stop, pay envelope and phone plates (all existing); the hop line, clock odometer and timetable coded.

Owner rules applied: as t01 (header strip "TIME AND LOCATION" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a coach, a bus, a timetable, a shift); no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Time and location, "Time and time differences", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-12.json`:

- `cia32b799a`: "Solve a variety of practical problems by calculating elapsed time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

**Boundary:** starts from t01's final frame exactly (the coach `ma12-bus-side-v1.png`, about 700 px wide, at the left; the departure board `ma12-timing-display-v1.png`, about 640 px wide, at the right with coded amber LED text "DEP 2348" and "ARR 0125"; chips "How long?", "Next: elapsed time" and "?"). Recalls t01 (24-hour time; decimal hours) and e01 (pay = hours × rate) in grey chips. Teaches: elapsed time; counting up in hops; midnight as a stop; why plain subtraction fails (and borrowing 60); adding a duration past 2400; reading a timetable; a shift's length and pay. Not taught: time zones (t05, t06); the calculator's degrees-minutes-seconds key (Year 12 t02).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-t02-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **T02-BORROW (should fix): accepted, reviewer's wording.** Scene 3 now says where 83 comes from: "Fourteen twenty-three is the same as thirteen hours and eighty-three minutes, because one hour is sixty minutes. Eighty-three minus forty-seven is thirty-six, and thirteen minus ten is three, the same answer." A grey row "1423 = 13 h 83 min" writes before the existing borrow row. Counting up stays the taught method.
- **T02-2400 (note): applied.** Scene 6's sentence "midnight is both twenty-four hundred at the end of one day and nought nought hundred at the start of the next" moved to scene 4, where 2400 is first used, with a violet chip "2400 = 0000". Scene 6 now says "because this midnight is twenty-four hundred, the end of the day" (the violet post still shows "2400 = 0000"). t01 scene 5 now also mentions 2400 once.
- **T02-GUESS (note): applied.** Scene 1 says "A quick guess says one hour thirty-five", so no person is implied.
- No result changed; the borrowing row 23 + 60 = 83 is added to Numbers to verify. Joins unchanged.
- Narration 5,818 characters (Revision 1: 5,629); about 516 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-t02-learning-review.md` already matches).

## Decisions

- **Anchor: the overnight coach (t01's frame).** 2348 to 0125: subtraction gives a negative number; a guess of 1 h 35 min is close but wrong (the site's hook).
- **Counting up is the method (recurring model: the hop line).** Hop to the next o'clock, then whole hours, then the minutes left; add the hops. Midnight is a violet post on the line, "a stop on the way". This avoids negative numbers and borrowing (site WE1, WE2: "count whole hours first", "split at midnight").
- **Why subtraction misleads.** 1423 − 1047 = 376 on a calculator ("3 h 76 min"): four-digit times are not ordinary numbers, since an hour has 60 minutes. The fix, borrowing an hour as 60 minutes (1423 = 13 h 83 min, then 83 − 47 = 36 and 13 − 10 = 3), is shown once with the borrowing step said and written (site trap 02; Revision 2, T02-BORROW). The site's "add 2400 then subtract" line is not taught (MSY-22).
- **Adding a duration.** 2150 + 8 h 20 min: the clock odometer passes 2400, takes off 24 hours and lights "next day" (violet). Kept in one time zone (a coach), not the site's layover flight (MSY-23).
- **Timetables.** An example timetable (four generic stops, three services; the site's WE3 times, invented stop names): down a column is one bus, along a row is one stop; the next service after you arrive; the wait.
- **Pay (callback to e01, t01).** A shift 5:45 pm to 12:15 am: 6 h 30 min = 6.5 h; at the example rate $28.40 (t01's), $184.60.
- **Simulations (standard item 3).**
  1. **Hop line** (scenes 2, 3, 6, feedback 1): start and finish pins on a time line; arcs hop to the next o'clock, across whole hours, then the minutes left; a running total adds each hop; midnight a violet post.
  2. **Clock odometer** (scene 4): four LED digits roll forward 8 hours from 2150; at 2400 they wrap to 0000 with a violet "next day" chip; then 20 more minutes roll to 0610.
  3. **Timetable tracker** (scene 5, feedback 2): column and row highlights; an arrival marker slides down the "Uni" or "Hospital" row; departed services grey out with a "gone" tag; the wait counts up.
- **Colour roles (fixed t01 to t06).** Given times blue; hops and durations amber; leftovers teal; midnight and day changes violet; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "count up", "midnight: a stop", "hop to the o'clock", "60, not 100", "past 2400: next day", "down = one bus", "gone", "6.5 h". At most two live at once.
- **Stage changes (standard item 2).** The coach and board (1); the hop line (2); the bus and the daytime hop line (3); the clock odometer (4); the timetable (5); the pay envelope and shift hops (6); framed card (7); question cards (8 to 11); the phone's map (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "2348 → 0000: 12 min; 0000 → 0100: 1 h; 0100 → 0125: 25 min"; "12 min + 1 h + 25 min = 1 h 37 min" (framed green). Scene 3: "10:47 am = 1047; 2:23 pm = 1423"; "13 min + 3 h + 23 min = 3 h 36 min" (framed green); crossed "1423 − 1047 = 376 → 3 h 76 min" (caption "60, not 100"); grey row "borrow 60: 83 − 47 = 36; 13 − 10 = 3". Scene 4: "2150 + 8 h = 2950 → 2950 − 2400 = 0550 (next day)"; "0550 + 20 min = 0610 (next day)" (framed green). Scene 5: "A: 0743 → 0829 = 17 + 29 = 46 min" (green); "Uni 0840: A gone (0814); B 0843; wait 3 min; Beach 0858" (framed green). Scene 6: "1745 → 1800: 15 min; → 0000: 6 h; → 0015: 15 min = 6 h 30 min = 6.5 h"; "6.5 × $28.40 = $184.60" (framed green).
- **Memory aid.** Framed card: "Count up: hop to the next o'clock, then whole hours, then the minutes left." Key line: "Convert to 24-hour time first. Midnight is a stop on the way. Past 2400: take off 24 h, next day."
- **Visual surprise.** The calculator's "376" turns into "3 h 76 min" and the hop line beside it shows only 3 h 36 min fit (scene 3); the odometer wraps from 2400 to 0000 and lights "next day" (scene 4).
- **Plain meanings at first use.** Elapsed time ("the time that passes between a start and a finish"); service ("one trip by one bus, a column in the timetable"); duration ("how long something takes").
- **Attempts.** A1 (pack question 1): 3 h 25 min; crossed "2240 − 0205 = 20 h 35 min" (caption "it crosses midnight: count up"). A2 (pack question 2): service C, 0944, 42 min; crossed "Service B" (caption "B left at 0827").
- **Mistake scene:** none separate. Plain subtraction (1, 3, A1); the wrong way round (A1); forgetting the next day (4); a departed service (5, A2); mixing formats (3, said).
- **Cause chain taught, in order:** (1) elapsed time is the time that passes from start to finish (1); (2) times don't count in hundreds and the clock restarts at midnight, so subtracting four-digit times can mislead (1, 3); (3) counting up in hops lands on whole hours, so every hop is easy and midnight is just a stop (2); (4) a clock only reaches 2400, so a time past it starts the next day: take off 24 hours (4); (5) a timetable lists each bus down a column, so following a column gives one trip, and comparing along a row finds the next bus (5); (6) a shift's length × the rate gives pay, after turning minutes into part of an hour (6).
- **Entry knowledge (route):** math-s11-t01, e01. Recalled in grey chips.
- **Site notes.** lesson01 recalculated: every answer right. MSY-22 (the "add 2400, then subtract" line; drill 4's "40 min to midnight"), MSY-23 (Q3's flight without time zones).
- **Handoff (to math-s11-t03, latitude and longitude).** Scene 12: board clear; the phone `ma12-phone-v1.png` (about 640 px tall) at the centre-left with a coded map screen (coastline, streets, a red pin) and a readout bar "−33.86, 151.21" (blue); chips "What do these numbers mean?", "Next: latitude and longitude" and "?". t03 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 2348 to 0000 = 12; 0000 to 0100 = 60; 0100 to 0125 = 25; 97 min = 1 h 37 min (the site's hook answer).
  (b) 1047 to 1100 = 13; 1100 to 1400 = 180; 1400 to 1423 = 23; 13 + 23 = 36; 3 h 36 min. 1423 − 1047 = 376. Borrow: 1423 = 13 h 83 min (23 + 60); 83 − 47 = 36; 13 − 10 = 3.
  (c) 2150 + 800 = 2950; 2950 − 2400 = 0550; 0550 + 20 = 0610.
  (d) A: 0743 to 0800 = 17; 0800 to 0829 = 29; 46. B at Uni 0843; 0840 to 0843 = 3; Beach 0858.
  (e) 1745 to 1800 = 15; 1800 to 0000 = 360; 0000 to 0015 = 15; 390 min = 6 h 30 min = 6.5 h; 6.5 × 28.40 = 184.60.
  (f) A1: 2240 to 2300 = 20; 2300 to 0200 = 180; 0200 to 0205 = 5; 205 min = 3 h 25 min; slip 2240 − 0205 = 2035. A2: Hospital row 0758, 0827, 0912; Beach 0944; 0830 to 0912 = 42.
  (g) The timetable is invented ("example timetable"): stops Town Centre, Hospital, Uni, Beach; services A (0743, 0758, 0814, 0829), B (0812, 0827, 0843, 0858), C (0857, 0912, 0929, 0944). These are the site's WE3 times for its first four stops, with generic names.

Main question: *An overnight coach leaves at 2348 and arrives at 0125. How do we calculate elapsed time from timetables and schedules?*
Entry knowledge (math-s11-t01, e01): 24-hour time; decimal hours; pay = hours × rate.
Stops after: counting up, midnight, adding a duration, timetables, a shift's pay.
Handoff: math-s11-t03: "Next: latitude and longitude".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): given times blue; hops and durations amber; leftovers teal; midnight and day change violet; answer green; mistake red. Header strip "TIME AND LOCATION". Scene headings in the hand font, 44 px.

### 1. hook: how long is the trip?
> Here's the overnight coach. It leaves at twenty-three forty-eight and gets in at nought one twenty-five. How long is the trip? Try subtracting, nought one twenty-five take away twenty-three forty-eight, and you get a negative number, because the clock went back to zero at midnight. A quick guess says one hour thirty-five, which is close, but wrong. Elapsed time means the time that passes between a start and a finish. So how do we calculate elapsed time reliably, even when a trip crosses **midnight**?

Visual: opens on t01's final frame exactly (the coach, the board with "DEP 2348" and "ARR 0125", chips "How long?", "Next: elapsed time", "?"). On "How long is the trip" the "Next" chips fade. On "Try subtracting" a red ghost row "0125 − 2348 = −2223?" writes under the board and is crossed (caption "the clock restarts at midnight"). On "one hour thirty-five" a ghost chip "1 h 35 min?" with a red question mark. On "Elapsed time means" a definition chip, 40 px: "elapsed time: the time from start to finish". On "midnight" heading "Elapsed time" writes on (hand font, 56 px) and a violet "0000" glows between the two times.

### 2. counting up: hop to the next o'clock
> The safest method is to count up, in hops, like a ruler laid along the clock. Put the start and the finish on a time line. Hop first to the next whole hour. From twenty-three forty-eight to midnight is twelve minutes. Midnight is just a stop on the way, nought nought nought nought, and the count carries on. Then hop whole hours. Midnight to nought one hundred is one hour. Then hop the minutes left, from nought one hundred to nought one twenty-five, twenty-five minutes. Now add the hops. Twelve minutes, one hour and twenty-five minutes is one hour thirty-seven **minutes**. Counting up never needs a negative number, and it never asks you to subtract minutes that are too small. You only ever add, and every hop lands on a whole hour, so the sixties look after themselves.

Visual: stage change (simulation 1): the hop line across the centre (1,600 px): ticks at 2300, 0000, 0100, 0200; a blue start pin "2348" and a blue finish pin "0125"; midnight a violet post labelled "0000" (hand tag "midnight: a stop"). On "next whole hour" an amber arc hops 2348 → 0000 labelled "12 min" (hand tag "hop to the o'clock"); on "whole hours" an arc 0000 → 0100 "1 h"; on "minutes left" an arc 0100 → 0125 "25 min". A running total box at the right fills "12 min", "+ 1 h", "+ 25 min"; on "minutes" (bold) row, 52 px, "12 min + 1 h + 25 min = 1 h 37 min" (framed green), and the board badge (top right, 300 px) shows a green "1 h 37 min". On "You only ever add" hand tag "count up".

### 3. a daytime trip, and why subtracting misleads
> It works the same in the daytime. A bus leaves at ten forty-seven am and arrives at two twenty-three pm. First, put both in twenty-four-hour time, ten forty-seven and fourteen twenty-three, so the afternoon is clearly later. Hop to eleven hundred, that's thirteen minutes. Hop to fourteen hundred, three hours. Hop to fourteen twenty-three, twenty-three minutes. Thirteen plus twenty-three is thirty-six, so the trip is three hours thirty-six **minutes**. Here's the slip. Fourteen twenty-three minus ten forty-seven on a calculator is three hundred and seventy-six, which looks like three hours seventy-six minutes. That can't be right, because an hour has sixty minutes, not a **hundred**. If you do subtract, borrow an hour. Fourteen twenty-three is the same as thirteen hours and eighty-three minutes, because one hour is sixty minutes. Eighty-three minus forty-seven is thirty-six, and thirteen minus ten is three, the same answer.

Visual: stage change: the bus `ma12-bus-side-v1.png` (about 600 px wide) at the top left at the bus stop `ma12-bus-stop-v1.png` (about 360 px tall). Rows, 44 px: "10:47 am = 1047"; "2:23 pm = 1423" (grey chip "t01: after noon, add 12"). The hop line resets below (1047 to 1423, ticks 1100 to 1400): arcs "13 min", "3 h", "23 min" on their phrases; on "minutes" (bold) row "13 min + 3 h + 23 min = 3 h 36 min" (framed green). On "calculator" the calculator badge (about 300 px) shows "1423 − 1047 = 376" and a red slip "3 h 76 min" writes; on "hundred" it is crossed (caption "60, not 100"), hand tag "60, not 100". On "borrow an hour" a grey row "1423 = 13 h 83 min" writes, with the "60" of the borrowed hour in amber added to "23" (Revision 2, T02-BORROW); on "Eighty-three minus" the grey row "borrow 60: 83 − 47 = 36; 13 − 10 = 3" (teal "36").

### 4. adding a duration: past midnight is the next day
> Sometimes you know the start and the length of the trip, and you want the finish. A coach leaves at twenty-one fifty, and the trip takes eight hours twenty minutes. Add the hours first. Twenty-one fifty plus eight hours would be twenty-nine fifty, but the clock only goes to twenty-four. Midnight is both twenty-four hundred at the end of one day and nought nought hundred at the start of the next. So take away twenty-four hours, and it's nought five fifty, the next **day**. Then add the twenty minutes, and the coach arrives at nought six ten the next **morning**. Whenever a time goes past twenty-four hundred, take off twenty-four hours, and move on one day.

Visual: stage change (simulation 2): the clock odometer, 120 px LED digits, centre: "2150" (blue). A duration card "8 h 20 min" (amber) at the right. On "Add the hours first" the hour digits roll forward eight steps; at "twenty-nine fifty" a ghost "2950" with a red "?" flashes; on "Midnight is both" a violet chip "2400 = 0000" (Revision 2, note T02-2400, moved here from scene 6); on "take away twenty-four" the digits wrap through "2400 → 0000" and settle on "0550", with a violet chip "next day" on "day" (hand tag "past 2400: next day"). Rows, 44 px: "2150 + 8 h = 2950 → 2950 − 2400 = 0550 (next day)"; on "morning" the minutes roll 20 steps: "0550 + 20 min = 0610 (next day)" (framed green). The coach badge (about 300 px) slides along a strip under the odometer.

### 5. reading a timetable
> Timetables put a lot of times in one table. Here's an example bus timetable. Each column is one bus, called a service, and each row is a stop. Read down a column to follow one bus. Service A leaves Town Centre at nought seven forty-three and reaches Beach at nought eight twenty-nine. Count up. Seventeen minutes to eight o'clock, then twenty-nine more, so forty-six **minutes**. Now a real question. You reach the Uni stop at nought eight forty. Which bus can you catch? Look along the Uni row. Service A left at nought eight fourteen, so it's gone. Service B leaves at nought eight forty-three, so you wait three minutes, and it reaches Beach at nought eight fifty-**eight**. Down a column follows one bus. Along a row compares the buses at one stop.

Visual: stage change (simulation 3): a coded timetable, 44 px, filling the right two thirds: title "Example bus timetable"; rows "Town Centre", "Hospital", "Uni", "Beach"; columns "A", "B", "C" with times (blue): A 0743, 0758, 0814, 0829; B 0812, 0827, 0843, 0858; C 0857, 0912, 0929, 0944. The bus stop plate (about 300 px) at the left. On "Each column" column A outlines amber (hand tag "down = one bus"); on "each row" the "Uni" row outlines. On "Service A leaves" "0743" and "0829" ring; on "minutes" (first bold) row "A: 0743 → 0829 = 17 + 29 = 46 min" (green). On "You reach the Uni stop" an arrival marker "you: 0840" (blue) slides into the Uni row between "0814" and "0843"; on "it's gone" the "0814" cell greys with a tag "gone"; on "Service B" "0843" rings green; a wait counter "0840 → 0843: 3 min"; on "eight" "0858" rings and the row "Uni 0840: B 0843; wait 3 min; Beach 0858" (framed green).

### 6. a shift that crosses midnight
> Elapsed time pays the bills, too. A casual shift starts at five forty-five pm and finishes at twelve fifteen am. In twenty-four-hour time, that's seventeen forty-five to nought nought fifteen, so it crosses midnight. Hop fifteen minutes to eighteen hundred, six hours to midnight, then fifteen minutes more. Eighteen hundred to midnight is six whole hours, because this midnight is twenty-four hundred, the end of the day. That's six hours thirty minutes, or six point five hours. At the example rate of twenty-eight dollars forty an hour, the shift pays a hundred and eighty-four dollars **sixty**.

Visual: stage change: the pay envelope `ms12-pay-envelope-v1.png` (about 420 px) at the top left; a card "5:45 pm to 12:15 am, $28.40 an hour (example rate)" (blue). The hop line below: pins "1745" and "0015", violet midnight post; arcs "15 min", "6 h", "15 min" on their phrases; on "this midnight is twenty-four hundred" the violet post shows "2400 = 0000". Rows, 52 px: "15 min + 6 h + 15 min = 6 h 30 min = 6.5 h" (hand tag "6.5 h"; grey chip "t01: 30 ÷ 60 = 0.5"); on "sixty" "6.5 × $28.40 = $184.60" (framed green), grey chip "e01: pay = hours × rate".

### 7. memory aid
> So here's elapsed time in one card. Count up. Hop to the next o'clock, then whole hours, then the minutes left, and add the hops. Midnight is just a stop on the **way**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the hop line from scene 2 (small). Main line, hand font 56 px: "Count up: hop to the next o'clock, then whole hours, then the minutes left." On "way" the key line, 40 px: "Convert to 24-hour time first. Midnight is a stop on the way. Past 2400: take off 24 h, next day." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A night bus leaves at ten forty pm and arrives at two oh five am. How long is the trip? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A night bus leaves at 10:40 pm and arrives at 2:05 am. How long is the trip?" Picture slot: the bus badge with a small violet moon. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> In twenty-four-hour time, that's twenty-two forty to nought two oh five. Hop twenty minutes to twenty-three hundred, three hours to nought two hundred, then five minutes. That's three hours twenty-five **minutes**. Subtracting the wrong way round, twenty-two forty minus nought two oh five, gives twenty hours thirty-five, and that's the **slip**.

Visual: the card shrinks to the top (30 px). The hop line: pins "2240" and "0205", arcs "20 min", "3 h", "5 min". On "minutes" row, 44 px, "20 min + 3 h + 5 min = 3 h 25 min" (framed green). On "slip" a red slip "2240 − 0205 = 20 h 35 min" writes and is crossed (caption "it crosses midnight: count up"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Use the same bus timetable. You reach the Hospital stop at nought eight thirty. Which service can you catch, when does it reach Beach, and how long do you wait at the stop? Pause here to answer.

Visual: `QuestionCard`, 36 px: "Use the example bus timetable. You reach the Hospital stop at 0830. (a) Which service can you catch? (b) When does it reach Beach? (c) How long do you wait at the stop?" Picture slot: the full timetable (as scene 5, 36 px, no highlights). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Along the Hospital row, Service A left at nought seven fifty-eight, and Service B at nought eight twenty-seven, both before you arrived. So you catch Service **C** at nought nine twelve, and it reaches Beach at nought nine forty-**four**. From nought eight thirty to nought nine twelve is a forty-two minute **wait**. Picking Service B, which has already gone, is the **slip**.

Visual: the card shrinks to the top; the timetable stays. The Hospital row outlines; "0758" and "0827" grey with "gone" tags. On "C" "0912" rings green; on "four" column C lights down to "0944" (framed green). On "wait" the marker "you: 0830" and a counter "0830 → 0912: 42 min" (framed green). On "slip" a red slip "Service B" writes and is crossed (caption "B left at 0827"). Hold about 1 s.

### 12. handoff: latitude and longitude
> So that's elapsed time. Count up in hops, and let midnight be a stop on the way. When you step off the bus, your phone's map drops a pin and shows two numbers, minus thirty-three point eight six, and one hundred and fifty-one point two one. Those two numbers say exactly where you are on Earth. What do they mean? Latitude and longitude are **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "your phone's map" the phone `ma12-phone-v1.png` (about 640 px tall) at the centre-left with a coded map screen (a harbour coastline in teal, grey streets) and a red pin that drops in; on "minus thirty-three" a readout bar "−33.86, 151.21" (blue) at the screen's foot. On "What do they mean" chip "What do these numbers mean?" at the right. On "next" chips "Next: latitude and longitude" and "?". Hold about 2 s. This is t03's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Elapsed time: the time from start to finish.
- Convert both times to 24-hour time first.
- Count up: next o'clock, whole hours, minutes left; add.
- Past 2400: take off 24 h, and it's the next day.
- Timetable: down a column is one bus; along a row is one stop.

Memory aid (framed card, right side, as in scene 7): *Count up: hop to the next o'clock, then whole hours, then the minutes left.* Key: *Convert to 24-hour time first. Midnight is a stop on the way. Past 2400: take off 24 h, next day.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t03's opening frame.

## Teaching checks

- **Does it explain causes?** Why subtraction fails: 60-minute hours and the midnight restart (1, 3). Why hops: each lands on a whole hour (2). Why "next day": the clock stops at 2400 (4). Why down a column: one bus per column (5). Why decimal hours for pay: hours × rate (6).
- **Misconceptions addressed:** plain subtraction (1, 3); the wrong way round (A1); the forgotten next day (4); a departed service (5, A2); mixing formats (3).
- **Visual standard, item by item:** 1 the coach and board in the first 20 s; 2 a new stage every 40 to 60 s; 3 the hop line with a running total, the clock odometer wrapping at 2400, the timetable tracker; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 "376" against the hop line, and the odometer's wrap to "next day".
- **One idea at a time:** counting up (2), a daytime trip and the slip (3), adding a duration (4), timetables (5), a shift (6).
- **Response opportunity:** two unseen tasks with every demand visible (A2 carries the full timetable); 10 s each; feedback about 26 s and 27 s.
- **Avoided double teaching:** t01's + 12 and decimal hours in chips; e01's pay in a chip; time zones left to t05 and t06.
- **Syllabus coverage:** `cia32b799a` (1 to 6, A1, A2; notes 1 to 5): journeys, timetables, schedules and shifts.
- **Out of scope by design:** time zones and flights across zones (t05, t06); the calculator's degrees-minutes-seconds key (Year 12 t02).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: 2240 → 2300 (20 min) → 0200 (3 h) → 0205 (5 min): 3 h 25 min. Classic mistake (crossed): "2240 − 0205 = 20 h 35 min".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: (a) service C (A left Hospital at 0758, B at 0827). (b) 0944. (c) 0830 → 0912 = 42 min. Classic mistake (crossed): "Service B".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Coach | 12 min, 1 h, 25 min; 1 h 37 min | 1, 2 |
| Bus | 13 min, 3 h, 23 min; 3 h 36 min; slip 376; borrow 83 − 47 = 36 | 3 |
| Adding | 2950; 0550; 0610 next day | 4 |
| Timetable | 46 min; wait 3 min; 0858 | 5 |
| Shift | 6 h 30 min; 6.5 h; $184.60 | 6 |
| A1 | 3 h 25 min; slip 20 h 35 min | 8, 9 |
| A2 | service C; 0944; 42 min | 10, 11 |
| Handoff | −33.86, 151.21 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact arithmetic (24 Nov 2026, scratchpad `s11t/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 2348 → 0000 = 12 min; 0000 → 0100 = 60 min; 0100 → 0125 = 25 min; total 97 min = 1 h 37 min.
- 1047 → 1100 = 13; 1100 → 1400 = 180; 1400 → 1423 = 23; 3 h 36 min. 1423 − 1047 = 376; 1423 = 13 h 83 min (23 + 60 = 83); 83 − 47 = 36; 13 − 10 = 3.
- 2150 + 8 h = 2950; 2950 − 2400 = 0550; 0550 + 20 min = 0610.
- 0743 → 0829 = 46 min; 0840 → 0843 = 3 min.
- 1745 → 0015 = 390 min = 6 h 30 min = 6.5 h; 6.5 × 28.40 = 184.60.
- 2240 → 0205 = 205 min = 3 h 25 min; 2240 − 0205 = 2035. 0830 → 0912 = 42 min.
- The pin "−33.86, 151.21" is in Sydney (near the harbour); Codex confirms.

## Memory aid check

- **"Count up: hop to the next o'clock, then whole hours, then the minutes left."** with key line **"Convert to 24-hour time first. Midnight is a stop on the way. Past 2400: take off 24 h, next day."** Original (from the site's "count whole hours first" and "split at midnight"). Meaning, as said in scene 7: elapsed time is the sum of easy hops. Assumptions checked: both times in one format (3); the finish is after the start, on the same or the next day (2, 4); for trips longer than a day, add 24 h per extra day (not needed here). It helps a new case: 0655 to 1520 is 5 + 8 h + 20 = 8 h 25 min.
- **Considered, not used:** "add 2400 and subtract" (needs borrowing 60, so it fails as written; MSY-22).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,818 characters** in Revision 2 (Revision 1: 5,629), 13 scene headings. Characters per scene (1 to 13): 501, 773, 928, 655, 744, 595, 165, 120, 339, 204, 361, 346, 75. Feedback speech about 25.5 s and 27.1 s.

At 13.3 characters per second the speech is about 437 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the hop line (2), the odometer (4) and the timetable (5), about 14 s; the key-notes scene adds about 39 s beyond its line. Total **about 516 s**, 54 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 3's last sentence (keep the grey borrow row on screen); scene 5's last sentence.

## Scene list and build ids

Lesson key `m-s11t02` (route math-s11-t02). Explainer folder `src/explainer/lessons/math-s11-t02`; build inputs in `docs/production/claude-pm/lessons/math-s11-t02/` (at voicing).

In order (13 scene headings): hook-how-long, count-up, daytime-trip, add-duration, timetable, shift, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | The coach and the board |
| 40 to 105 s | 2 | The hop line |
| 105 to 168 s | 3 | The daytime trip and the 376 slip |
| 168 to 216 s | 4 | The clock odometer |
| 216 to 280 s | 5 | The timetable |
| 280 to 315 s | 6 | The shift and its pay |
| 315 to 330 s | 7 | Framed memory card |
| 330 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 455 s | 12 | The phone's map pin |
| 455 to 500 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t01's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-t02-learning-review.md`, `science_check` = `checks/m-s11-t02-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, `public/assets/maths`, viewed on a contact sheet): `ma12-bus-side-v1.png` (a cream and teal bus, side view); `ma12-bus-stop-v1.png` (a round bus sign on a post with a blank timetable panel); `ma12-timing-display-v1.png` (a blank board for coded LED text); `ma12-calculator-v1.png`; `ms12-pay-envelope-v1.png`; `ma12-phone-v1.png` (blank screen for a coded map).

Need: none new. Reused: the six plates above.

Coded: the LED text, the hop line and arcs, the running total, the clock odometer, the timetable and its highlights, the map screen and pin, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `Dial24` LED text mode (t01), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row t02):
1. **`HopLine`**: a time line with start and finish pins, whole-hour ticks and a violet midnight post; amber arcs hop to the next o'clock, across whole hours and over the minutes left; a running total adds each hop. Check: 2348 → 0125 = 1 h 37 min; 1047 → 1423 = 3 h 36 min; 1745 → 0015 = 6 h 30 min; 2240 → 0205 = 3 h 25 min. Reused in t05 and t06 (offset hops).
2. **`ClockOdometer`**: LED digits rolling forward by a duration, wrapping at 2400 to 0000 with a "next day" chip (or back past 0000 with "previous day", for t06). Check: 2150 + 8 h 20 min = 0610 next day.
3. **`TimetableTracker`**: a stops-by-services table with column and row highlights, an arrival marker, greyed "gone" cells and a wait counter. Check: Uni 0840 → B 0843 (3 min), Beach 0858; Hospital 0830 → C 0912 (42 min), Beach 0944.
4. **Map screen** (for `ma12-phone-v1.png`): a coded map with a pin drop and a coordinate readout bar. Reused in t03.

## Codex asset brief

No new plate. All six plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm "−33.86, 151.21" lies in Sydney near the harbour.
4. Confirm the timetable is labelled "Example bus timetable" and uses no real route or operator name.
5. Confirm both attempts carry every demand (A2's card shows the full timetable) and show no answer.
6. Confirm scene 1 opens on t01's final frame exactly and scene 12 matches t03's Boundary.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Elapsed Time: Timetables, Shifts and Midnight | Year 11 Maths Standard

(Title length: 70 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/time-and-location/lesson01.sa.html

An overnight coach leaves at 2348 and arrives at 0125. How long is the trip? Learn to count up in hops (to the next o'clock, whole hours, then the minutes left), why subtracting four-digit times can give "3 hours 76 minutes", how to add a duration past midnight, how to read a bus timetable and find the next service, and how long a shift that crosses midnight runs. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Time and location. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Solve a variety of practical problems by calculating elapsed time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

Builds on: Seconds, Minutes, Hours and 24-Hour Time. Next: Latitude and Longitude: Finding Any Place on Earth.

#Year11Maths #MathsStandard #ElapsedTime #HSCScience

## Open decisions

- **1. Site method.** The site's "add 2400 to the finish, then subtract" is replaced by counting up (MSY-22); students who learned it in class can still use it with borrowing, shown once in scene 3.

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (T02-BORROW, T02-2400, T02-GUESS). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from t01; check that the negative number and "1 h 35" make the need for a method felt, that each hop lands on a whole hour, that "376" is explained by 60-minute hours, that the odometer makes "next day" visible, that the timetable's column and row meanings are said before the question, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-t02-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,818 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,806 (Codex's value). Narration is **5,806 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief271/source-inventory.json`). At 13.3 characters per second the speech is about 437 s; total about 515 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
