# math-s11-t05: How do Australian time zones and daylight saving work?

Maths Standard pre-design pack (Year 11, Time and location), 24 November 2026, written by Claude (designer of record) in the form of the a packs, from route inputs 12 (`../../../programme/maths-standard-route-inputs-12.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Time and location, group "Time and time differences", outcome MST-11-06:

- `cidfef63ed`: Solve problems involving time zones in Australia, making necessary allowances for daylight saving [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa136ea49c). Site coverage: covered (lesson02).

**Entry knowledge:** math-s11-t04 (east is ahead; regions round the Sun's time); math-s11-t02 (adding a duration; counting up); math-s11-t01 (12-hour and 24-hour time).

**Prior video:** math-s11-t04. **Start:** t04's final frame (a coded map of Australia shaded in three zone bands with coded clock faces "Perth", "Adelaide", "Sydney"; chips "3 zones, 1 time in each", "Next: Australian time zones", "?").

**Stop:** the three standard zones (Western, Central, Eastern) and which states use each; differences in standard time (Western 2 h behind Eastern; Central 30 min behind Eastern); daylight saving (what, why, when: first Sunday in October to first Sunday in April; who: NSW, ACT, Vic, Tas, SA; not Qld, NT, WA); differences in summer (five times on the mainland); converting event times; a flight across zones (do the duration on the departure clock, then convert). Not: UTC offsets (t06); Lord Howe Island and Broken Hill (named in the Codex facts only, not taught).

**Next:** math-s11-t06: the phone `ma12-phone-v1.png` with a coded world-clock screen listing "Sydney", "London", "Tokyo" with "?" for each time; a coded world strip map with the Greenwich meridian in amber; chips "One clock for the world?", "Next: UTC", "?".

## 2. Site order, sections and worked examples

`year11/time-and-location/lesson02.sa.html` ("Time Zones and UTC"): hook (a 9 am London call in January); UTC and offsets; key facts (AWST = UTC+8; ACST = UTC+9:30; AEST = UTC+10; AEDT = UTC+11, ACDT = UTC+10:30; "QLD, NT, and WA do not observe daylight saving"); key terms (ACDT "SA only, not NT"); the city table; WE3 (January, 9 am Brisbane: Sydney 10 am); trap 01 ("Sydney is always 10 hours ahead of London"); trap 03 (applying daylight saving to the wrong state); drills 4, 7, 8.

All values recalculated (scratchpad `s11t/verify.py`). The site teaches Australian zones only through UTC offsets in one lesson with UTC; this video teaches them as differences between Australian zones first (the point's wording), and t06 adds UTC. Site errors found in the UTC parts (London's summer time, MSY-26) belong to t06. The site gives no dates for daylight saving; the video states them (Codex confirms; MSY-27).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| July, 7:30 pm Melbourne | Perth −2 h; Adelaide −30 min; Brisbane same | 5:30 pm; 7:00 pm; 7:30 pm |
| December, 7:15 pm Sydney | Brisbane −1 h; Adelaide −30 min; Darwin −1 h 30 min; Perth −3 h | 6:15 pm; 6:45 pm; 5:45 pm; 4:15 pm |
| Adelaide against Brisbane | winter −30 min; summer +30 min | the order flips |
| Flight Perth to Sydney, January | 1:00 pm + 4 h 30 min = 5:30 pm (Perth); + 3 h | 8:30 pm Sydney (slip 7:30 pm) |
| A1, August, 8:00 pm Sydney | Perth −2 h; Adelaide −30 min | 6:00 pm; 7:30 pm |
| A2, January, 9:00 am Brisbane | Sydney +1 h; Darwin −30 min | 10:00 am; 8:30 am |

## 4. Misconceptions and HSC-style traps

- Applying daylight saving to Queensland, the NT or WA (site trap 03).
- Forgetting daylight saving in summer (Sydney and Brisbane "the same" in January).
- Adding the half hour for Adelaide instead of taking it off.
- Changing the flight's duration instead of the clock.
- Thinking Adelaide and Darwin always share a time (only in standard time).

## 5. Visual needs

The zone map (t04's frame) with state borders; coded clocks per capital; a month slider (July to January) that recolours the south-east and shifts its clocks; a difference ladder (Sydney at the top, the other capitals hung below at their gaps, re-hung for summer); the clock odometer (t02) for the flight; the phone with a world-clock screen for the handoff.

## 6. Two original candidate practice questions

**Question 1.** A live stream starts at 8:00 pm in Sydney in August. What time does it start in (a) Perth, (b) Adelaide?
Worked answer: standard time: (a) 6:00 pm; (b) 7:30 pm. Slip: "Adelaide 8:30 pm".

**Question 2.** In January, a video call starts at 9:00 am in Brisbane. What time is it in (a) Sydney, (b) Darwin?
Worked answer: (a) Sydney is on daylight saving: 10:00 am; (b) Darwin is 30 min behind Brisbane all year: 8:30 am. Slip: "Sydney 9:00 am".

## 7. Everyday anchors

A football final; a cricket match; a live stream; a video call; a flight from Perth to Sydney (example time). No people.

## 8. Site corrections and decisions for Claude

- MSY-27: daylight saving dates and the half-hour zone's summer behaviour are not stated on the site.
- Teach zone differences first; UTC offsets in t06 (the zone names are given; offsets are not needed yet).
- Pace: about 9 minutes.
