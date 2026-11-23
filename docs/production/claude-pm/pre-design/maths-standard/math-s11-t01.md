# math-s11-t01: How do we convert between seconds, minutes and hours, and between 12-hour and 24-hour time?

Maths Standard pre-design pack (Year 11, Time and location), 24 November 2026, written by Claude (designer of record) in the form of the a packs, from route inputs 12 (`../../../programme/maths-standard-route-inputs-12.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Time and location, group "Time and time differences", outcome MST-11-06:

- `cic8bbf9d6`: Convert between seconds (s), minutes (min) and hours (h) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c). Site coverage: covered (lesson01).
- `cicd3af9e2`: Represent and convert between 12-hour and 24-hour time formats. Site coverage: covered (lesson01).

**Entry knowledge:** math-s11-a01 (the unit ladder: "Smaller unit, more of them: multiply. Bigger unit, fewer of them: divide."); math-s11-e01 (pay = hours × hourly rate).

**Prior video:** math-s11-a11. **Start:** a11's final frame (the wall clock with coded hands at 10:10 and the stopwatch; chips "60 s = 1 min", "60 min = 1 h"; grey chip "Applications of measurement: done"; chips "Next: time units", "?"). This pack confirms that frame.

**Stop:** the time ladder (h, min, s) with × 60 down and ÷ 60 up; 1 h = 60 × 60 s = 3600 s ("60 × 60" on screen for Year 12 r10); a remainder as the next unit down; decimal hours both ways (pay); 12-hour and 24-hour time both ways; noon and midnight. Not: elapsed time and timetables (t02); time zones (t05, t06); the calculator's degrees-minutes-seconds key (Year 12 t02 teaches it for angles).

**Next:** math-s11-t02: the coach `ma12-bus-side-v1.png` beside the departure board `ma12-timing-display-v1.png` showing "DEP 2348" and "ARR 0125"; chips "How long?", "Next: elapsed time", "?".

## 2. Site order, sections and worked examples

`year11/time-and-location/lesson01.sa.html` ("Timetables and Elapsed Time"): hook (a train 11:48 pm to 1:23 am); key facts (24-hour rules; "add 2400" for midnight); section 2, converting formats (table: 0000, 0030, 0915, 1200, 1300, 1945, 2359; the 12 pm trap); section 3, seconds, minutes and hours (× 60 down, ÷ 60 up; × 3600; "Leftovers become the next unit down": 200 s = 3 min 20 s, 145 min = 2 h 25 min; decimal hours 3 h 45 min = 3.75 h, 2.4 h = 2 h 24 min; "2.5 h is not 2 h 5 min"); worked examples on elapsed time and a timetable (t02); drills 1, 2, 6, 7; Q4 (a casual worker at $28.40 an hour: 5 h 24 min = 5.4 h, $153.36; reading 5.24 h underpays $4.54).

All values recalculated (scratchpad `s11t/verify.py`): no arithmetic error in the parts this video uses. Site decisions: the site's ladder, leftover rule and decimal-hour rules are used as written; Q4's pay comparison becomes scene 4 (a callback to e01). Section 3's line "Time is the one measurement that does not run in tens" becomes the hook's contrast with a01 to a11.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| One hour in seconds | 60 × 60 | 3600 s |
| Two-hour movie; seven-minute break | 2 × 3600; 7 × 60 | 7200 s; 420 s |
| Song of 200 s | 200 ÷ 60 = 3 r 20 | 3 min 20 s (calculator 3.333...) |
| Playlist of 145 min | 145 ÷ 60 = 2 r 25 | 2 h 25 min |
| Decimal hours | 45 ÷ 60 = 0.75; 0.4 × 60 = 24; 0.5 × 60 = 30 | 3.75 h; 2 h 24 min; 2 h 30 min |
| Pay (site Q4) | 5.4 × 28.40; 5.24 × 28.40 | $153.36; $148.82 (short by $4.54) |
| 24-hour | 9:15 am; 7:45 pm; 2258; 12:30 pm; 12:10 am | 0915; 1945; 10:58 pm; 1230; 0010 |

## 4. Misconceptions and HSC-style traps

- Treating time as decimal: 200 ÷ 60 = 3.33, read as "3 min 33 s".
- × 100 or ÷ 100 for minutes and hours (the metric habit from a01).
- Reading decimal hours as minutes: 2.5 h as 2 h 5 min; 5.24 h for 5 h 24 min.
- The 12 pm trap: 12:30 pm as 0030; 12 am as 1200.
- Dropping the leading zero (915 for 0915).

## 5. Visual needs

The a11 frame (wall clock, stopwatch); a time ladder (a01's `UnitLadder` with 60 rungs and a combined "× 60 × 60" arrow); a leftover splitter (200 one-second ticks packing into 60-blocks, 20 left over); a decimal-hour bar (60 minute ticks over a 0 to 1 scale); a 24-hour dial (inner 1 to 12, outer 13 to 24 and 00, with a day-sweep slider and a twin readout "7:45 pm ↔ 1945"); the phone with a coded player screen; the calculator; the departure board for the handoff.

## 6. Two original candidate practice questions

**Question 1.** A podcast episode runs for 4500 seconds. Write its length (a) in hours and minutes, (b) in decimal hours.
Worked answer: 4500 ÷ 60 = 75 min = 1 h 15 min; 15 ÷ 60 = 0.25, so 1.25 h. Slip: "4500 s = 45 min" (÷ 100).

**Question 2.** (a) Write 6:05 pm in 24-hour time. (b) Write 0040 in 12-hour time.
Worked answer: (a) 6 + 12 = 18, so 1805. (b) 40 minutes after midnight: 12:40 am. Slip: "12:40 pm".

## 7. Everyday anchors

A song and a podcast on a phone; a movie; a playlist; a casual shift's pay; a departure board. No people.

## 8. Site corrections and decisions for Claude

- No new site error in the sections used. MSY-22 (lesson01's "2525 − 2348 = 1 h 37 min" line and drill 4's working) belongs to t02.
- Show "1 h = 60 × 60 s = 3600 s" with the "60 × 60" visible (Year 12 r10 recalls "Year 11: 60 × 60").
- Confirm a11's frame; the on-screen heading is "Time units" (a11's chip "Next: time units").
- Pace: about 9 minutes.
