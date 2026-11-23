# Maths S11 T06: How does UTC make international time problems simpler? One reference clock at Greenwich, offsets ahead and behind, local time = UTC + offset, city to city through UTC, daylight saving in both hemispheres, and flights in three steps (design)

Status: Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-t01.md` to `t05.md` (Revision 1, this batch), the coherence audit (N9: the strand close) and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,632 characters by script (see "Narration length estimate"), 13 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: last video of the Year 11 Time and location strand, outline playlist order 53. One video for Standard 1 and Standard 2. Viewers arrive from t05's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-t06.md`. Route entry: `math-s11-t06` in `../../programme/maths-standard-route-inputs-12.json`. Site lesson: `year11/time-and-location/lesson02.sa.html` (hook, the UTC card, the city table, WE1, Q1, Q3; the July case corrected, MSY-26). Visual system: maths studio kit; the phone, suitcase and departure board plates (existing); the offset ladder, odometers and maps coded.

Owner rules applied: as t01 (header strip "TIME AND LOCATION" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a video call, a broadcast, flights); no people; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Time and location, "Time and time differences", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-12.json`:

- `ci840445ac`: "Represent time difference between locations using Coordinated Universal Time (UTC)"
- `ci9f3c20ba`: "Solve practical problems involving UTC"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

**Boundary:** starts from t05's final frame exactly (the phone `ma12-phone-v1.png`, about 640 px tall, at the left with a coded world-clock screen listing "Sydney", "London", "Tokyo", each with "?"; a coded world strip map, about 1,000 px wide, at the right with the Greenwich meridian in amber; chips "One clock for the world?", "Next: UTC" and "?"). Recalls t05 (Australian zones and daylight saving), t04 (150°E is 10 h ahead of Greenwich; east is ahead), t02 (past midnight changes the day) and t01 (24-hour time) in grey chips. Teaches: UTC; offsets; local = UTC + offset; city to city through UTC; days; daylight saving in both hemispheres; flights in three steps. Closes the strand. Not taught: the International Date Line by name; GMT.

## Decisions

- **Anchor: the London call (site hook, t05's frame).** 9 am Tuesday in London in January: when in Sydney? The answer, 8 pm the same evening, surprises students who expect "tomorrow morning".
- **UTC as one shared zero (recurring model: the offset ladder).** t05's difference ladder now hangs from UTC: Sydney +10, Adelaide and Darwin +9:30, Perth +8, Tokyo +9, London 0, New York −5; daylight saving lifts a city by 1 (Sydney +11, London +1). The +10 is tied back to t04 (150°E ÷ 15 = 10).
- **One rule, two directions.** Local = UTC + offset; UTC = local − offset. A negative offset subtracts (New York −5).
- **City to city through UTC (site's method).** Back to UTC, then out to the other city. January: 0900 London → 0900 UTC → 2000 Sydney. July (corrected, MSY-26): London on summer time UTC+1 → 0800 UTC → Sydney +10 → 1800. The gap changes from 11 h to 9 h because the hemispheres' summers are opposite.
- **Flights in three steps (site Q3).** Departure to UTC; add the flight in UTC; UTC to the arrival city. Sydney 2330 Sunday (+11) to Dubai (+4), 14 h 20 min (example time): 1230 UTC Sunday; 0250 UTC Monday; 0650 Monday Dubai.
- **Strand close (audit N9).** t06 is not the last Year 11 video in playlist order (n and d follow), so it closes "Time and location: done" and hands to n01 with a flight-route map: cities become dots, routes become lines.
- **Simulations (standard item 3).**
  1. **Offset ladder** (scenes 2, 3, 4): `DifferenceLadder` hung from a UTC clock; places hang at their offsets (above for +, below for −); a season toggle (January, July) shifts Sydney and London by an hour each, in opposite seasons; one UTC time ripples out to every place's clock, rolling days forward or back.
  2. **Three odometers** (scene 6, feedback 2): departure city, UTC and arrival city, linked by "− offset", "+ flight", "+ offset" arrows; each rolls in turn with day chips.
- **Colour roles (fixed t01 to t06).** Given times blue; offsets and flight times amber; UTC itself amber (the zero line); day changes violet; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "UTC: time at 0°", "+ ahead, − behind", "local = UTC + offset", "back to UTC, then out", "check the season", "1, 2, 3", "minus 5: behind". At most two live at once.
- **Stage changes (standard item 2).** The world clock (1); the offset ladder (2); one UTC moment rippling out (3); the London call with the season toggle (4); the Los Angeles clocks going back a day (5); the flight odometers (6); framed card (7); question cards (8 to 11); the strand close and the flight-route map (12); key notes (13).
- **Worked examples (g01 order).** Scene 3: "Sydney: 1400 + 10 h = 2400 = 0000 Thursday"; "Tokyo: 1400 + 9 h = 2300 Wednesday"; "New York: 1400 − 5 h = 0900 Wednesday" (framed green). Scene 4: "London Jan: 0900 − 0 = 0900 UTC; Sydney: 0900 + 11 h = 2000 Tuesday" (framed green); "London Jul: 0900 − 1 h = 0800 UTC; Sydney: 0800 + 10 h = 1800 Tuesday" (framed green). Scene 5: "1530 − 11 h = 0430 UTC Thursday; 0430 − 8 h = 2030 Wednesday" (framed green). Scene 6: "1: 2330 − 11 h = 1230 UTC Sunday"; "2: 1230 + 14 h 20 min = 0250 UTC Monday"; "3: 0250 + 4 h = 0650 Monday, Dubai" (framed green).
- **Memory aid.** Framed card: "Go through UTC: back to UTC (subtract the offset), then out (add the new offset)." Key line: "Local time = UTC + offset. + is ahead of Greenwich, − is behind. Check each city's daylight saving, and the day."
- **Visual surprise.** The call that "must be tomorrow" lands at 8 pm the same evening (scene 4); and the same London call moves two hours earlier in July, because both cities change their clocks in opposite directions of the year.
- **Plain meanings at first use.** UTC ("Coordinated Universal Time: the time at Greenwich, used as the world's reference clock, never changed for daylight saving"); offset ("how many hours a place's clock is ahead of UTC, plus, or behind it, minus").
- **Attempts.** A1 (pack question 1): 1100 UTC Saturday; 0600 Saturday; crossed "1600" (caption "minus 5: behind"). A2 (pack question 2): 0900 Wednesday; crossed "0600 Wednesday" (caption "go through UTC").
- **Mistake scene:** none separate. The sign of an offset (3, A1); the wrong season (4); flights without zones (6, said; A2); the day (3, 5, 6).
- **Cause chain taught, in order:** (1) every zone sets its clocks a whole or half number of hours from Greenwich's time, so one clock, UTC, can describe them all (2); (2) east is ahead (t04), so eastern places have + offsets and western places − offsets (2); (3) a place's clock is UTC moved by its offset, so local = UTC + offset, and in reverse UTC = local − offset (3); (4) any two places share UTC, so convert one to UTC, then UTC to the other (4); (5) daylight saving adds an hour to a city's offset only in its own summer, so gaps between hemispheres change through the year (4); (6) a flight's length is the same on every clock, so add it in UTC between the two conversions (6); (7) a negative offset takes hours off, so a western city can be in the previous day (5).
- **Entry knowledge (route):** math-s11-t05, t04, t02, t01. Recalled in grey chips.
- **Site notes.** lesson02 recalculated: MSY-26 (London in July). WE1, the January call and Q3 correct.
- **Handoff (to math-s11-n01, networks; strand close; confirmed by n01's Boundary, 24 Nov 2026).** Scene 12: board clear; grey strand chip "Time and location: done"; a coded flight-route map of Australia (about 1,200 px wide, outline only, no zone shading): seven city dots labelled "Perth", "Darwin", "Adelaide", "Melbourne", "Hobart", "Sydney", "Brisbane" (blue), joined by ten straight lines (amber), labelled "example routes" (the ten listed in author note (f)); chips "dots and lines", "Next: networks" and "?". n01 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Offsets (Codex confirms): AEST +10, AEDT +11; ACST +9:30, ACDT +10:30; AWST +8; Tokyo +9 (no daylight saving); London GMT +0, BST +1 (last Sunday in March to last Sunday in October); New York EST −5, EDT −4; Dubai +4; Singapore +8.
  (b) 1400 + 10 h = 2400 = 0000 the next day; 1400 + 9 h = 2300; 1400 − 5 h = 0900.
  (c) January: 0900 − 0 = 0900; + 11 = 2000 (same day). July: 0900 − 1 = 0800; + 10 = 1800. Gaps 11 h and 9 h.
  (d0) Los Angeles (site WE2): 1530 − 11 h = 0430; 0430 − 8 h = 2030 the previous day. Los Angeles PST −8 (PDT −7 from the second Sunday in March to the first Sunday in November; in the Australian summer it is on −8).
  (d) 2330 − 11 h = 1230 (Sunday); 1230 + 14 h 20 min = 0250 (Monday); + 4 h = 0650 (Monday). The 14 h 20 min is the site's example flight time.
  (e) A1: 2000 − 9 = 1100; 1100 − 5 = 0600 (Saturday); slip 1100 + 5 = 1600. A2: 2215 − 8 = 1415 (Tuesday); 1415 + 7 h 45 min = 2200 (Tuesday); 2200 + 11 = 0900 (Wednesday); slip 2215 + 7 h 45 min = 0600 (Wednesday). 7 h 45 min is an example flight time (Codex: typical Singapore to Sydney about 7.5 to 8 h).
  (f) Handoff routes (ten, example only, no airline): Perth to Adelaide, Perth to Melbourne, Perth to Sydney, Darwin to Adelaide, Darwin to Brisbane, Adelaide to Melbourne, Adelaide to Sydney, Melbourne to Sydney, Melbourne to Hobart, Sydney to Brisbane. Degrees (for n01, n02): Perth 3, Darwin 2, Adelaide 4, Melbourne 4, Hobart 1, Sydney 4, Brisbane 2; sum 20 = 2 × 10.

Main question: *A 9 am call in London: when do you wake up in Sydney? How does UTC make international time problems simpler?*
Entry knowledge (math-s11-t05, t04, t02, t01): Australian zones and daylight saving; east ahead; day changes; 24-hour time.
Stops after: UTC, offsets, local = UTC + offset, city to city, seasons, flights. Closes the strand.
Handoff: math-s11-n01: "Next: networks".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): given times blue; offsets, flight times and UTC amber; day changes violet; answer green; mistake red. Header strip "TIME AND LOCATION". Scene headings in the hand font, 44 px.

### 1. hook: a call to London
> Here's the world clock on your phone. You've booked a video call with a friend in London, for nine am their time, on a Tuesday in January. When should your alarm go off in Sydney? Sydney's on daylight saving, London's in winter, and the two cities are about as far apart as places get. Guessing is risky. Instead, every country sets its clocks against one shared clock. So how does UTC make international time problems **simpler**?

Visual: opens on t05's final frame exactly (the phone's world clock "Sydney ?", "London ?", "Tokyo ?", the world strip with the amber Greenwich meridian, chips "One clock for the world?", "Next: UTC", "?"). On "video call" the "Next" chips fade and a coded call card appears: "London 9:00 am, Tuesday (January)" (blue). On "When should your alarm" the Sydney row pulses with "?". On "daylight saving" a violet sun icon over Sydney; on "in winter" a grey snowflake icon over London; on "as far apart" a dashed arc across the world strip between the two. On "one shared clock" the Greenwich meridian brightens; on "simpler" heading "UTC" writes on (hand font, 56 px).

### 2. UTC and offsets
> UTC stands for Coordinated Universal Time. It's the time at the prime meridian, nought degrees, through Greenwich, and it never changes for daylight saving. Every time zone is described by its offset, how many hours it's ahead of UTC, with a plus, or behind it, with a minus. Eastern Australia is UTC plus ten, which matches the hundred and fifty degrees east meridian from longitude, ten hours ahead. Perth is UTC plus eight, and Adelaide and Darwin are UTC plus nine and a half. Tokyo is UTC plus nine. New York is UTC minus five, west of Greenwich, so behind. London sits right on Greenwich, UTC plus nought, in its winter. Daylight saving adds one hour to the offset, so in our summer, Sydney is UTC plus **eleven**. And in the northern summer, London is UTC plus **one**. Everything is measured from the same zero, so any two places can be compared through it.

Visual: stage change (simulation 1): the offset ladder fills the right two thirds: a UTC clock at a zero line (amber, label "UTC: time at 0°", hand tag "UTC: time at 0°"); places hang by offset, above for + and below for −: on "plus ten" "Sydney +10" with grey chip "t04: 150°E ÷ 15 = 10 h"; "Perth +8"; "Adelaide, Darwin +9:30"; "Tokyo +9"; on "minus five" "New York −5" below the line (hand tag "+ ahead, − behind"); on "plus nought" "London 0" on the line. The world strip map at the left shows each city's dot lighting as it is named. On "eleven" a season toggle shows "January": Sydney's tag lifts to "+11" (violet). On "one" the toggle flips to "July": Sydney drops back to "+10" and London lifts to "+1" (violet). On "same zero" the zero line pulses.

### 3. from UTC to local time
> The rule is short. Local time equals UTC plus the offset. Say it's fourteen hundred UTC on a Wednesday. Sydney, in standard time, is plus ten. Fourteen hundred plus ten hours is twenty-four hundred, which is midnight, the start of **Thursday**. Tokyo, plus nine, is twenty-three hundred on Wednesday. New York is minus five, so take five hours off, and it's nought nine hundred on Wednesday **morning**. At one moment, three places, two different days. Whenever an answer passes midnight, the day changes, forward or back. And to go the other way, from local time to UTC, just subtract the offset.

Visual: the ladder stays (continue; toggle on "July" for standard Sydney). Rule strip, 56 px: "local time = UTC + offset" (hand tag "local = UTC + offset"). The UTC clock reads "1400 Wed" (blue). On "Sydney" a ripple runs from the UTC clock to Sydney's tag: row "1400 + 10 h = 2400 = 0000"; on "Thursday" "Sydney: 0000 Thursday" (green) with a violet "next day" chip (grey chip "t02: past 2400, next day"). On "Tokyo" row "1400 + 9 h = 2300 Wednesday" (green). On "New York" row "1400 − 5 h = 0900"; on "morning" "New York: 0900 Wednesday" (green). On "two different days" the three answers frame together (green). On "subtract the offset" grey row "UTC = local − offset".

### 4. city to city: go through UTC
> Now the call. To go from one city to another, go through UTC. First, take the starting city back to UTC. London in January is UTC plus nought, so nine am London is nought nine hundred UTC. Then bring UTC forward to the other city. Sydney in January is on daylight saving, UTC plus eleven. Nought nine hundred plus eleven hours is twenty hundred, eight pm Tuesday. Your alarm is for that evening, not the next **morning**. Now move the call to July. London is on its summer time, UTC plus one, so nine am London is nought eight hundred UTC. Sydney is back on plus ten, so it's eighteen hundred, six **pm**. The gap between the cities went from eleven hours to nine, because the two hemispheres have their summers at opposite times of the year.

Visual: stage change: the call card "London 9:00 am Tuesday" at the top left; three linked clocks across the centre: "London" → "UTC" → "Sydney", with arrows labelled "− offset" and "+ offset" (hand tag "back to UTC, then out"). Season toggle "January". On "back to UTC" the London clock "0900", arrow "− 0", UTC clock "0900"; on "forward to the other city" arrow "+ 11", Sydney clock rolls to "2000"; on "morning" row "London Jan: 0900 − 0 = 0900 UTC; Sydney: 0900 + 11 h = 2000 Tuesday" (framed green), and a crossed ghost "Wednesday morning?" (caption "same evening"). On "move the call to July" the toggle flips (hand tag "check the season"): London's arrow becomes "− 1", UTC "0800"; Sydney's arrow "+ 10", Sydney "1800"; on "pm" row "London Jul: 0900 − 1 h = 0800 UTC; Sydney: 0800 + 10 h = 1800 Tuesday" (framed green). On "eleven hours to nine" two gap chips "Jan: 11 h", "Jul: 9 h", and a small globe icon with the two hemispheres' summers shaded in opposite months.

### 5. back a day: a negative offset
> Going west can take you back into yesterday. It's three thirty pm on Thursday in Sydney, in summer, so UTC plus eleven. What time is it in Los Angeles, at UTC minus eight? Back to UTC first. Fifteen thirty minus eleven hours is nought four thirty UTC, still Thursday. Now add minus eight, which means take eight hours off. Nought four thirty minus eight hours goes back past midnight, into Wednesday, and lands on twenty thirty, eight thirty pm, Wednesday **night**. So when school finishes on Thursday afternoon, it's still Wednesday evening in Los Angeles. A negative offset can take you back into **yesterday**.

Visual: stage change: the three linked clocks (as scene 4) relabel "Sydney (+11)", "UTC", "Los Angeles (−8)"; the world strip map lights Los Angeles at the far left. On "Back to UTC first" the Sydney clock "1530 Thu", arrow "− 11 h", UTC "0430 Thu"; row "1530 − 11 h = 0430 UTC Thursday". On "take eight hours off" the arrow "+ (−8) = − 8 h" (hand tag "minus 8: behind"); the Los Angeles clock rolls backwards past "0000" with a violet "previous day" chip; on "night" row "0430 − 8 h = 2030 Wednesday" (framed green). On "yesterday" two day cards side by side, "Sydney: Thursday 3:30 pm" and "Los Angeles: Wednesday 8:30 pm" (violet day names).

### 6. flights in three steps
> Flights are where UTC really earns its keep. A plane leaves Sydney at eleven thirty pm on a Sunday, on daylight saving, UTC plus eleven. The flight to Dubai takes fourteen hours twenty minutes, an example time, and Dubai is UTC plus four. Step one, change the departure to UTC. Twenty-three thirty minus eleven hours is twelve thirty UTC, still **Sunday**. Step two, add the flight time in UTC. Twelve thirty plus fourteen hours twenty is two fifty the next morning, Monday, **UTC**. Step three, change to the arrival city's time. Plus four hours, and the plane lands at six fifty am, Monday, in **Dubai**. The flight time never changes. Only the clocks do.

Visual: stage change (simulation 2): the suitcase `ma12-travel-suitcase-v1.png` (about 320 px tall) at the top left and the departure board `ma12-timing-display-v1.png` (about 520 px wide) at the top right with LED "DUBAI 2330" (amber). Three odometers across the centre: "Sydney (+11)", "UTC", "Dubai (+4)" (hand tag "1, 2, 3"). On "Step one" the Sydney odometer "2330 Sun", arrow "− 11 h", UTC odometer rolls to "1230"; on "Sunday" row "1: 2330 − 11 h = 1230 UTC Sunday". On "Step two" the UTC odometer rolls forward 14 h 20 min past "0000" (violet "next day") to "0250"; on "UTC" row "2: 1230 + 14 h 20 min = 0250 UTC Monday". On "Step three" arrow "+ 4 h", Dubai odometer "0650"; on "Dubai" row "3: 0250 + 4 h = 0650 Monday, Dubai" (framed green). On "never changes" the "14 h 20 min" label pulses.

### 7. memory aid
> So here's UTC in one card. Go through UTC. Take the first city back to UTC by subtracting its offset, then add the second city's offset. And check each city's daylight saving, and the **day**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three linked clocks "city → UTC → city". Main line, hand font 52 px: "Go through UTC: back to UTC (subtract the offset), then out (add the new offset)." On "day" the key line, 40 px: "Local time = UTC + offset. + is ahead of Greenwich, − is behind. Check each city's daylight saving, and the day." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A live match is broadcast from Tokyo at eight pm on Saturday, Tokyo time, which is UTC plus nine. What time is that in UTC, and what time is it in New York, at UTC minus five? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A live match is broadcast from Tokyo (UTC+9) at 8:00 pm on Saturday, Tokyo time. Find (a) the UTC time, (b) the time in New York (UTC−5)." Picture slot: the three linked clocks, blank. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Take Tokyo back to UTC. Twenty hundred minus nine hours is eleven hundred UTC, **Saturday**. New York is minus five, so take five hours off, and it's six am, Saturday **morning**. Adding the five, to get sixteen hundred, is the **slip**. Minus five means behind.

Visual: the card shrinks to the top (30 px). The linked clocks: on "Saturday" "Tokyo 2000 − 9 h = 1100 UTC Saturday" (framed green). On "morning" "New York: 1100 − 5 h = 0600 Saturday" (framed green). On "slip" a red slip "1100 + 5 h = 1600" writes and is crossed (caption "minus 5: behind"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A flight leaves Singapore, UTC plus eight, at twenty-two fifteen on a Tuesday. It takes seven hours forty-five minutes to reach Sydney, in December, when Sydney is UTC plus eleven. What's the local time and day when it lands? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A flight leaves Singapore (UTC+8) at 2215 on Tuesday and takes 7 h 45 min to reach Sydney. It is December, and Sydney is on UTC+11. Find the local time and day of arrival." Picture slot: the three odometers, blank. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> In UTC, the departure is twenty-two fifteen minus eight, fourteen fifteen on Tuesday. Add the flight, and it lands at twenty-two hundred UTC, still **Tuesday**. Sydney is plus eleven, so that's nine am on **Wednesday**. Adding the flight straight onto twenty-two fifteen, and getting six am, forgets the time zones, and that's the **slip**.

Visual: the card shrinks to the top. Odometers: "Singapore 2215 Tue" → "− 8 h" → "UTC 1415"; "+ 7 h 45 min" → "UTC 2200"; on "Tuesday" row "2215 − 8 h = 1415 UTC; + 7 h 45 min = 2200 UTC Tuesday" (green). On "Wednesday" "+ 11 h" → "Sydney 0900", violet "next day", row "2200 + 11 h = 0900 Wednesday" (framed green). On "slip" a red slip "2215 + 7 h 45 min = 0600 Wednesday" writes and is crossed (caption "go through UTC"). Hold about 1 s.

### 12. handoff: Time and location, done
> That's Time and location done, from seconds and minutes to clocks right around the world. Look at Australia's flight map again. Forget the clocks for a moment, and keep just the cities and the routes. Cities become dots, and routes become lines joining them. Dots joined by lines are called a network, and networks are everywhere, from flight routes and bike paths to phone towers and delivery runs. What is a network, and what can it tell us? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "Time and location done" a grey strand chip "Time and location: done". On "flight map" the coded outline of Australia (about 1,200 px wide, no zone shading) with seven city dots labelled (blue); on "Forget the clocks" small clock faces at the dots fade out; on "routes become lines" ten straight amber lines draw one after another between the dots (label "example routes"). On "dots joined by lines" chip "dots and lines". On "phone towers and delivery runs" three small coded icons (a bike outline, a tower outline, a van outline) flash in a row and fade. On "next" chips "Next: networks" and "?". Hold about 2 s. This is n01's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- UTC: the time at Greenwich (0°); no daylight saving.
- Local time = UTC + offset (+ ahead, − behind).
- City to city: back to UTC, then add the new offset.
- Daylight saving adds 1 h in that place's own summer.
- Flights: departure to UTC, add the flight, then convert; check the day.

Memory aid (framed card, right side, as in scene 7): *Go through UTC: back to UTC (subtract the offset), then out (add the new offset).* Key: *Local time = UTC + offset. + is ahead of Greenwich, − is behind. Check each city's daylight saving, and the day.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n01's opening frame.

## Teaching checks

- **Does it explain causes?** Why one reference: every zone is a whole or half number of hours from Greenwich (2). Why + and −: east ahead, west behind (2, t04). Why local = UTC + offset (3). Why through UTC: both cities share it (4). Why the London gap changes: opposite summers (4). Why add the flight in UTC: its length is the same on every clock (6). Why Los Angeles is in yesterday: a negative offset subtracts past midnight (5).
- **Misconceptions addressed:** the sign (3, A1); the wrong season (4); flights without zones (5, A2); the day (3, 5, A2); London as UTC+0 all year (2, 4).
- **Visual standard, item by item:** 1 the world clock in the first 20 s; 2 a new stage every 40 to 70 s; 3 the offset ladder with the season toggle and the UTC ripple, the three linked odometers; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the "same evening" answer, and the July gap shrinking to 9 h.
- **One idea at a time:** offsets (2), UTC to local (3), city to city (4), back a day (5), flights (6).
- **Response opportunity:** two unseen tasks with every demand visible (every offset given on the card); 10 s each; feedback about 19 s and 25 s.
- **Avoided double teaching:** t05's Australian zones, t04's 150°E and t02's day change in chips.
- **Syllabus coverage:** `ci840445ac` (2, 3; notes 1, 2): time differences represented as UTC offsets. `ci9f3c20ba` (4, 5, A1, A2; notes 3 to 5): practical problems.
- **Out of scope by design:** the International Date Line by name; GMT; half-hour daylight-saving zones.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 2000 − 9 h = 1100 UTC Saturday. (b) 1100 − 5 h = 0600 Saturday. Classic mistake (crossed): "1600".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: 2215 − 8 h = 1415 UTC Tuesday; + 7 h 45 min = 2200 UTC Tuesday; + 11 h = 0900 Wednesday, Sydney. Classic mistake (crossed): "0600 Wednesday".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Offsets | +10, +11, +8, +9:30, +9, −5, 0, +1, −8, +4 | 2, 5, 6 |
| 1400 UTC Wednesday | 0000 Thursday; 2300 Wednesday; 0900 Wednesday | 3 |
| London call | 0900 UTC; 2000 Tuesday; July 0800 UTC; 1800 Tuesday; gaps 11 h, 9 h | 1, 4 |
| Los Angeles | 0430 UTC Thursday; 2030 Wednesday | 5 |
| Dubai flight | 1230 UTC Sunday; 0250 UTC Monday; 0650 Monday | 6 |
| A1 | 1100 UTC Saturday; 0600 Saturday; slip 1600 | 8, 9 |
| A2 | 1415 UTC; 2200 UTC Tuesday; 0900 Wednesday; slip 0600 | 10, 11 |
| Handoff | 7 cities; 10 routes | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11t/verify.py`, `python -I`; 0 failures); Codex to re-check, and to confirm every offset and the British Summer Time dates.

- 1400 + 10 h = 0000 (next day); 1400 + 9 h = 2300; 1400 − 5 h = 0900.
- 0900 − 0 + 11 h = 2000; 0900 − 1 h = 0800; 0800 + 10 h = 1800; 11 h and 9 h gaps.
- 1530 − 11 h = 0430; 0430 − 8 h = 2030 (previous day).
- 2330 − 11 h = 1230; 1230 + 14 h 20 min = 0250 (next day); 0250 + 4 h = 0650.
- 2000 − 9 h = 1100; 1100 − 5 h = 0600; slip 1100 + 5 h = 1600.
- 2215 − 8 h = 1415; 1415 + 7 h 45 min = 2200; 2200 + 11 h = 0900 (next day); slip 2215 + 7 h 45 min = 0600.

## Memory aid check

- **"Go through UTC: back to UTC (subtract the offset), then out (add the new offset)."** with key line **"Local time = UTC + offset. + is ahead of Greenwich, − is behind. Check each city's daylight saving, and the day."** From the site's "City to city, go via UTC", with the subtraction and addition named. Meaning, as said in scene 7. Assumptions checked: subtracting a negative offset adds (New York −5: local to UTC is + 5; not drilled, said in feedback 1's reverse); offsets include daylight saving where it applies (4). It helps a new case: 6:00 pm in New York in January (−5) is 2300 UTC, which is 1000 the next day in Sydney (+11).
- **Considered, not used:** "add going east, subtract going west" (true, but it breaks with half-hour and daylight-saving offsets unless UTC is used).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,632 characters**, 13 scene headings. Characters per scene (1 to 13): 427, 857, 589, 734, 606, 645, 188, 208, 250, 257, 328, 456, 75. Feedback speech about 18.8 s and 24.7 s.

At 13.3 characters per second the speech is about 423 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the ladder (2, 3), the clocks (5) and the odometers (6), about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 506 s**, 64 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 2's Perth and Adelaide sentence (keep the ladder rows); scene 3's last sentence.

## Scene list and build ids

Lesson key `m-s11t06` (route math-s11-t06). Explainer folder `src/explainer/lessons/math-s11-t06`; build inputs in `docs/production/claude-pm/lessons/math-s11-t06/` (at voicing).

In order (13 scene headings): hook-london-call, utc-offsets, utc-to-local, city-to-city, back-a-day, flights, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-strand-close, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The world clock and the call card |
| 35 to 105 s | 2 | The offset ladder and season toggle |
| 105 to 155 s | 3 | One UTC moment rippling out |
| 155 to 222 s | 4 | The London call, January and July |
| 222 to 262 s | 5 | Back a day: Los Angeles |
| 262 to 325 s | 6 | The three flight odometers |
| 325 to 342 s | 7 | Framed memory card |
| 342 to 435 s | 8 to 11 | Question cards and countdowns, then feedback |
| 435 to 470 s | 12 | Strand close; the flight-route map |
| 470 to 515 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t05's last frame continues into 1; 1 to 2 stage change; 2 to 3 continue; 3 to 4 stage change; 4 to 5 continue (the clocks relabel); 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-t06-learning-review.md`, `science_check` = `checks/m-s11-t06-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, `public/assets/maths`, viewed on a contact sheet): `ma12-phone-v1.png`; `ma12-travel-suitcase-v1.png`; `ma12-timing-display-v1.png`. No aeroplane plate exists; the flights are carried by the suitcase, the departure board and the odometers (the plane itself is not needed to teach the method).

Need: none new. Reused: the three plates above.

Coded: the world-clock screen, the world strip map, the call card, the offset ladder and season toggle, the linked clocks, the odometers, the LED text, the flight-route map, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DifferenceLadder` (t05), `ClockOdometer` (t02), `GridMap` world strip (t03), world-clock screen (t05), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row t06):
1. **`DifferenceLadder` UTC mode**: hung from a UTC zero line, + above and − below, with a January and July season toggle that lifts each daylight-saving city by 1 h in its own summer, and a ripple that sends one UTC time to every city's clock with day chips. Check: 1400 UTC Wed → Sydney 0000 Thu, Tokyo 2300 Wed, New York 0900 Wed; London 0900 Jan → Sydney 2000; Jul → 1800.
2. **`LinkedOdometers`**: three `ClockOdometer`s joined by labelled arrows ("− offset", "+ flight", "+ offset") that roll in turn. Check: 2330 Sun (+11) → 1230 UTC → 0250 UTC Mon → 0650 Mon (+4); 2215 Tue (+8) → 1415 → 2200 → 0900 Wed (+11).
3. **`NetworkMap`** (handoff; built with the n strand): a coded map outline with labelled dots and straight edges drawn in turn. Check: 7 dots, 10 edges. Reused in n01 and n02.

## Codex asset brief

No new plate. All three plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic.
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm every offset (AEST, AEDT, ACST, AWST, Tokyo, London GMT and BST with its dates, New York EST, Dubai, Singapore) against a current official source.
4. Confirm the flight times are labelled "example" and are realistic.
5. Confirm both attempts carry every demand (each gives its offsets and month) and show no answer.
6. Confirm scene 1 opens on t05's final frame exactly and scene 12 matches n01's Boundary.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: UTC: Solving International Time Problems | Year 11 Maths Standard

(Title length: 66 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/time-and-location/lesson02.sa.html

A 9 am video call in London: when do you wake up in Sydney? Learn what UTC (Coordinated Universal Time) is, how every time zone is an offset ahead of or behind it, why local time = UTC + offset, how to go from city to city through UTC, why daylight saving in both hemispheres changes the gap, and how to find a flight's arrival time in three steps. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Time and location. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Represent time difference between locations using Coordinated Universal Time (UTC)"
"Solve practical problems involving UTC"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c

Builds on: Australian Time Zones and Daylight Saving. Next: Networks: Dots, Lines and Real-World Maps.

#Year11Maths #MathsStandard #UTC #HSCScience

## Open decisions

- **1. The n01 join (closed 24 Nov 2026).** n01 opens on this frame exactly (n01 Boundary); the "Next" title quotes n01's title.
- **2. Playlist close (audit N9).** t06 is not the last Year 11 video in playlist order (n01 to n07 and d01 to d19 follow), so it closes its strand only. d19 (or whichever video is last) gets the "Year 11: done" close.

## Review notes

- Revision 1. Next: student learning review (trace from t05; check that UTC is defined before any sum, that + and − are tied to east and west, that "go through UTC" is shown with both conversions, that the July call is corrected and its gap change explained, that the flight runs in three visible steps, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
