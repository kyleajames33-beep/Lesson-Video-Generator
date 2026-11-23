# math-s11-t06: How does UTC make international time problems simpler?

Maths Standard pre-design pack (Year 11, Time and location), 24 November 2026, written by Claude (designer of record) in the form of the a packs, from route inputs 12 (`../../../programme/maths-standard-route-inputs-12.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Time and location, group "Time and time differences", outcome MST-11-06:

- `ci840445ac`: Represent time difference between locations using Coordinated Universal Time (UTC) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c). Site coverage: covered (lesson02).
- `ci9f3c20ba`: Solve practical problems involving UTC. Site coverage: covered (lesson02).

**Entry knowledge:** math-s11-t05 (Australian zones and daylight saving; a flight's duration on one clock); math-s11-t04 (15° = 1 h; 150°E is 10 h ahead of Greenwich; east is ahead); math-s11-t02 (adding durations past midnight); math-s11-t01 (24-hour time).

**Prior video:** math-s11-t05. **Start:** t05's final frame (the phone with a coded world-clock screen "Sydney", "London", "Tokyo", each "?"; a coded world strip map with the Greenwich meridian in amber; chips "One clock for the world?", "Next: UTC", "?").

**Stop:** UTC as the time at 0° with no daylight saving; offsets (+ ahead, − behind), including half hours and daylight saving (+1); local time = UTC + offset; UTC = local − offset; city to city through UTC; the day changing; daylight saving in both hemispheres (London's BST, UTC+1); flights in three steps (departure to UTC, add the flight, UTC to arrival). Closes the strand. Not: the International Date Line by name beyond one sentence-free visual (not in the 2024 points); GMT as a separate term.

**Next:** math-s11-n01 (Networks): a coded flight-route map of Australia: seven city dots (Perth, Darwin, Adelaide, Melbourne, Hobart, Sydney, Brisbane) joined by ten straight example routes; grey strand chip "Time and location: done"; chips "dots and lines", "Next: networks", "?". (Networks and Data analysis are parallel strands; the playlist runs n after t.)

## 2. Site order, sections and worked examples

`year11/time-and-location/lesson02.sa.html` ("Time Zones and UTC"): hook (a 9 am London call on a Tuesday in January: Sydney 8 pm); "Local time = UTC + offset"; UTC to local, local to UTC, city to city via UTC; the city table (London UTC+0, UTC+1 in summer; New York −5, −4; Los Angeles −8, −7; Dubai +4; India +5:30; Singapore and Perth +8; Tokyo +9; Darwin and Adelaide +9:30; Sydney +10, +11; Auckland +12, +13); WE1 (1400 UTC Wednesday: Sydney 0000 Thursday; New York 0900; Adelaide 2330); WE2 (3:30 pm Thursday AEDT: London 0430; Los Angeles 2030 Wednesday); trap 01; trap 02 (past 2400 or below 0000 changes the day); drills; revisit ("in July ... the call would be at 7:00 pm Sydney time"); Q1 (Tokyo broadcast); Q2 (the London call, (d) July "London still UTC+0"); Q3 (Sydney to Dubai, 14 h 20 min: 0650 Monday).

All values recalculated (scratchpad `s11t/verify.py`). Errors: the revisit and Q2 (d) treat London as UTC+0 in July; London is on British Summer Time (UTC+1) from late March to late October, so 9 am London in July is 0800 UTC and 6:00 pm in Sydney, not 7:00 pm. Trap 01's "When London also observes BST (UTC+1), the gap shrinks back to 10 hours" is right only in the few weeks when both cities are on daylight saving; for most of the northern summer the gap is 9 hours (MSY-26). Site decisions: the London call (with the corrected July case), WE1 and Q3 are used; Q1 becomes attempt 1.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| 1400 UTC Wednesday | Sydney +10; Tokyo +9; New York −5 | 0000 Thursday; 2300 Wednesday; 0900 Wednesday |
| London call, January | 0900 − 0 = 0900 UTC; + 11 | 2000 Tuesday, Sydney |
| London call, July | 0900 − 1 = 0800 UTC; + 10 | 1800 Tuesday, Sydney (gap 9 h) |
| Sydney to Dubai | 2330 − 11 = 1230 UTC Sun; + 14 h 20 min = 0250 UTC Mon; + 4 | 0650 Monday, Dubai |
| A1 Tokyo 2000 Saturday | 2000 − 9 = 1100 UTC; − 5 | 0600 Saturday, New York (slip 1600) |
| A2 Singapore 2215 Tuesday | 2215 − 8 = 1415 UTC; + 7 h 45 min = 2200 UTC; + 11 | 0900 Wednesday, Sydney (slip 0600) |

## 4. Misconceptions and HSC-style traps

- Adding when the offset is negative (or subtracting a positive one) the wrong way.
- Forgetting a city's daylight saving, or applying Australia's summer to the northern hemisphere.
- Adding a flight time straight onto the departure clock and reading it as the arrival city's time.
- Forgetting the day change past 2400 or below 0000.
- Treating London as UTC+0 all year.

## 5. Visual needs

The phone's world clock and the world strip (t05's frame); an offset ladder hung from UTC (t05's `DifferenceLadder`); the longitude ruler (t04) tying +10 to 150°E; three odometers (departure city, UTC, arrival city) for the flight; the suitcase and the departure board; a season toggle (January and July) for the London call; the coded flight-route map for the handoff.

## 6. Two original candidate practice questions

**Question 1.** A live match is broadcast from Tokyo (UTC+9) at 8:00 pm on Saturday, Tokyo time. Find (a) the UTC time, (b) the time in New York (UTC−5). (site Q1 (a), (c))
Worked answer: (a) 2000 − 9 h = 1100 UTC Saturday. (b) 1100 − 5 h = 0600 Saturday. Slip: "1600".

**Question 2.** A flight leaves Singapore (UTC+8) at 2215 on Tuesday and takes 7 h 45 min to reach Sydney. It is December, and Sydney is on UTC+11. Find the local time and day of arrival.
Worked answer: 2215 − 8 h = 1415 UTC Tuesday; + 7 h 45 min = 2200 UTC Tuesday; + 11 h = 0900 Wednesday. Slip: "0600 Wednesday" (2215 + 7 h 45 min, no zones).

## 7. Everyday anchors

A video call to London; a broadcast from Tokyo; a flight to Dubai; a flight home from Singapore. No people.

## 8. Site corrections and decisions for Claude

- MSY-26: London in July is UTC+1 (revisit, Q2 (d), trap 01).
- Closes the strand: grey chip "Time and location: done"; hands to n01 with the flight-route map.
- Pace: about 9 minutes.
