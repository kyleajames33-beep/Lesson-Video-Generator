# math-s11-t02: How do we calculate elapsed time from timetables and schedules?

Maths Standard pre-design pack (Year 11, Time and location), 24 November 2026, written by Claude (designer of record) in the form of the a packs, from route inputs 12 (`../../../programme/maths-standard-route-inputs-12.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Time and location, group "Time and time differences", outcome MST-11-06:

- `cia32b799a`: Solve a variety of practical problems by calculating elapsed time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c). Site coverage: covered (lesson01).

**Entry knowledge:** math-s11-t01 (the time ladder; 24-hour time; decimal hours); math-s11-e01 (pay = hours × rate).

**Prior video:** math-s11-t01. **Start:** t01's final frame (the coach `ma12-bus-side-v1.png` beside the departure board `ma12-timing-display-v1.png` with "DEP 2348" and "ARR 0125"; chips "How long?", "Next: elapsed time", "?").

**Stop:** elapsed time as the time between a start and a finish; counting up in hops (to the next whole hour, whole hours, the minutes left); crossing midnight; the "3 h 76 min" slip and borrowing 60; adding a duration past 2400 (next day); reading a timetable (columns are services, rows are stops; the next service; waiting time); a shift's length and pay. Not: time zones (t05, t06); the calculator's degrees-minutes-seconds key (Year 12 t02).

**Next:** math-s11-t03: the phone `ma12-phone-v1.png` with a coded map screen, a pin and the readout "−33.86, 151.21"; chips "What do these numbers mean?", "Next: latitude and longitude", "?".

## 2. Site order, sections and worked examples

`year11/time-and-location/lesson01.sa.html`: hook (a train 11:48 pm to 1:23 am; a friend's "1 h 35 min"); key facts ("Add 2400 to the finish time before subtracting. e.g. depart 2348, arrive 0125: 2525 − 2348 = 1 h 37 min"); WE1 (bus 10:47 am to 2:23 pm: count whole hours, then minutes: 3 h 36 min); WE2 (overnight train 11:48 pm to 6:15 am: split at midnight: 6 h 27 min); WE3 (a train timetable, Central to Penrith, services A, B, C: 1 h 13 min; next service; 3 min wait); trap 02 ("borrow 1 hour (60 minutes): 83 − 47 = 36"); trap 03 (add 2400); drills 3 to 5; Q1 (a shift 6:45 pm to 1:10 am: 6 h 25 min); Q3 (a flight with a layover, times added through midnight).

All values recalculated (scratchpad `s11t/verify.py`): every final answer is right. Site decisions: counting up (the site's "count whole hours first, then remaining minutes" and "split at midnight") is the main method; "add 2400 then subtract" is not taught as written, because ordinary subtraction of four-digit times gives the wrong number unless 60 is borrowed (MSY-22). Q3's flight adds durations to a Sydney departure time and calls the result the landing time in Singapore without saying which clock it is (MSY-23); the video's adding example is a coach in one time zone. WE3's timetable is replaced by an invented example timetable with the same times and generic stop names.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Coach 2348 to 0125 | 12 min + 1 h + 25 min | 1 h 37 min |
| Bus 10:47 am to 2:23 pm | 13 min + 3 h + 23 min | 3 h 36 min; slip 1423 − 1047 = 376 |
| Coach 2150 + 8 h 20 min | 2950 − 2400 = 0550; + 20 min | 0610 the next day |
| Timetable service A | 0743 to 0829 | 46 min |
| Reach Uni 0840 | service B at 0843 | 3 min wait; Beach 0858 |
| Shift 5:45 pm to 12:15 am | 15 min + 6 h + 15 min | 6 h 30 min = 6.5 h; × $28.40 = $184.60 |

## 4. Misconceptions and HSC-style traps

- Subtracting four-digit times as ordinary numbers (1423 − 1047 = 376, "3 h 76 min").
- Subtracting the wrong way round across midnight (2240 − 0205 = 2035, "20 h 35 min").
- Forgetting the next day when a time passes 2400.
- Catching a service that has already left; reading across a row as one bus.
- Mixing 12-hour and 24-hour times in one calculation.

## 5. Visual needs

The coach and departure board (t01's frame); a hop line (a horizontal time line with ticks at whole hours, a violet midnight post, and arcs labelled with each hop; a running total); a clock odometer for adding a duration (2950 rolling to 0550 with a violet "next day" chip); a coded example timetable (four stops, three services) with column and row highlights and an arrival marker; the pay envelope; the phone with a coded map for the handoff.

## 6. Two original candidate practice questions

**Question 1.** A night bus leaves at 10:40 pm and arrives at 2:05 am. How long is the trip? (site drill 4)
Worked answer: 2240 to 2300 (20 min), to 0200 (3 h), to 0205 (5 min): 3 h 25 min. Slip: "2240 − 0205 = 20 h 35 min".

**Question 2.** Use the example timetable. You reach the Hospital stop at 0830. Which service can you catch, when does it reach Beach, and how long do you wait at the stop?
Worked answer: A (0758) and B (0827) have left; service C leaves Hospital at 0912 and reaches Beach at 0944; wait 42 min. Slip: "Service B".

## 7. Everyday anchors

An overnight coach; a city bus; an example bus timetable; a casual shift. No people.

## 8. Site corrections and decisions for Claude

- MSY-22: the "add 2400, then subtract" line and drill 4's working.
- MSY-23: Q3's layover flight ignores time zones.
- Count up as the method; borrowing 60 shown once as the fix for the 376 slip.
- Pace: about 9 minutes.
