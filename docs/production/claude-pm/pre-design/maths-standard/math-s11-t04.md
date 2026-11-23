# math-s11-t04: How does longitude give time differences at 15 degrees per hour?

Maths Standard pre-design pack (Year 11, Time and location), 24 November 2026, written by Claude (designer of record) in the form of the a packs, from route inputs 12 (`../../../programme/maths-standard-route-inputs-12.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Time and location, group "Positions on the Earth's surface", outcome MST-11-06:

- `cib18a3d4b`: Apply 15° = 1 hour time difference to calculate the time differences between locations on Earth given the relevant longitudes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c). Site coverage: covered (lesson03).

**Entry knowledge:** math-s11-t03 (longitude E and W of Greenwich); math-s11-t01 (60 minutes in an hour; 24-hour time); math-s11-t02 (going past midnight changes the day).

**Prior video:** math-s11-t03. **Start:** t03's final frame (the desk globe `ms11-desk-globe-v1.png` lit by a coded sun with a day-night shade; pins "Sydney 151°E" and "Perth 116°E"; chips "Noon at different times?", "Next: longitude and time", "?").

**Stop:** 360° in 24 h, so 15° = 1 h and 1° = 4 min; east is ahead (the Sun reaches it first); same side of Greenwich: subtract longitudes; opposite sides: add; time difference by ÷ 15 or × 4 min; the previous or next day; why real clocks differ from longitude time (rounded zones). Not: Australian zones and daylight saving (t05); UTC offsets (t06); the International Date Line (t06 names the date change only).

**Next:** math-s11-t05: a coded map of Australia shaded in three zone bands (west, central, east) with a coded clock face in each ("Perth", "Adelaide", "Sydney"); chips "3 zones, 1 time in each", "Next: Australian time zones", "?".

## 2. Site order, sections and worked examples

`year11/time-and-location/lesson03.sa.html`: recall (360° in 24 h, 15° per hour; Sydney about 151°E; why about UTC+10); formulas (Δt = Δλ ÷ 15; "East = ahead", "West = behind"; "One and four": 15° = 1 h, 1° = 4 min); WE2 (120°E and 75°W: 195°, 13 h; 2 pm → 1 am); WE3 (105°E, noon at 0°: 7 pm); trap 02 (same side subtract, opposite sides add); drills 3 to 7; revisit (151 ÷ 15 ≈ 10.07 h); Q1 (114.2°E: theoretical offset; local time); Q2 (ships at 90°E and 45°W: 135°, 9 h, 6 am); Q3 (Sydney and Santiago: 221.9°, about 14.8 h).

All values recalculated (scratchpad `s11t/verify.py`). Errors: Q1 (c) uses 7 h 36 min for 114.2 ÷ 15 = 7.6133 h = 7 h 36.8 min (7 h 37 min to the nearest minute, so 1537, not 1536); Q3 (c) says "approximately 14 h 47 min" for 14.7933 h = 14 h 47.6 min, then (d) uses 14 h 48 min (MSY-25). Site decisions: the site's "One and four" and "East = ahead" are used; Q2 becomes attempt 2.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Degrees per hour | 360 ÷ 24 | 15° |
| Minutes per degree | 60 ÷ 15 | 4 min |
| Sydney 151°E, Perth 116°E | 151 − 116 = 35; 35 × 4 = 140 min | 2 h 20 min; noon → 9:40 am in Perth |
| 150°E from Greenwich | 150 ÷ 15 | 10 h ahead; noon → 10 pm |
| Tokyo 140°E, New York 74°W | 140 + 74 = 214; 214 × 4 = 856 min | 14 h 16 min; 9 am Wed → 6:44 pm Tue |
| Slip: subtract | 140 − 74 = 66; 66 × 4 = 264 min | 4 h 24 min (wrong) |
| A1 30°E, 105°E | 75 ÷ 15 = 5 | 8 am → 1 pm |
| A2 90°E, 45°W | 135 ÷ 15 = 9 | 3 pm → 6 am |

## 4. Misconceptions and HSC-style traps

- Subtracting longitudes on opposite sides of Greenwich (or adding on the same side).
- Putting the western place ahead.
- Dividing by 15 but reading the decimal as minutes (2.33 h as 2 h 33 min).
- Forgetting the day change when the difference crosses midnight.
- Expecting real clocks to match longitude time exactly.

## 5. Visual needs

The lit desk globe (t03's frame); a spinning coded globe with a noon meridian, an hour counter and a degree counter; a longitude ruler (−180 to 180, west left, east right, Greenwich at 0) with two markers, a gap bracket and readouts in degrees and hours (same side and opposite sides); the clock odometer (t02) running backwards past midnight with "previous day"; a coded map of Australia with real zone bands for the handoff.

## 6. Two original candidate practice questions

**Question 1.** Town A is at 30°E and town B is at 105°E. Using longitude only, when it is 8:00 am in town A, what time is it in town B?
Worked answer: 105 − 30 = 75°; 75 ÷ 15 = 5 h; B is east, so ahead: 1:00 pm. Slip: "3:00 am".

**Question 2.** Ship A is at 90°E and ship B is at 45°W. It is 3:00 pm on ship A. Using longitude only, find (a) the time difference, (b) the time on ship B. (site Q2)
Worked answer: (a) 90 + 45 = 135°; 135 ÷ 15 = 9 h. (b) B is west, so behind: 6:00 am. Slip: "45° → 3 h".

## 7. Everyday anchors

The desk globe and the Sun; Sydney and Perth; Tokyo and New York (a video call); two towns; two ships. No people.

## 8. Site corrections and decisions for Claude

- MSY-25: rounding slips in lesson03 Q1 and Q3.
- Teach both ÷ 15 and × 4 minutes; prefer × 4 when the degrees aren't a multiple of 15.
- The surprise: longitude time and real clock time differ (Perth and Sydney: 2 h 20 min by the Sun, 2 h by the clocks), handing to t05.
- Pace: about 8 to 9 minutes.
