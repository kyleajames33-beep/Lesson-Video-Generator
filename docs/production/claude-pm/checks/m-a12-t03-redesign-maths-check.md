# t03 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent calculations are in `work/brief240/t03-calculations.json` and `check-t03.py`. The assumed cosine tide has midline 4.5 m, amplitude 3 m and period 12 h; h(4)=3 m. Solving h=5.25 gives t=2.5174 and 9.4826 hours. The wheel model gives 17 m at 20 and 40 seconds; the daylight attempt gives 13.25 hours at two months, and the buoy's first two times are 4/3 and 20/3 seconds.

The narration calls its four-parameter checklist suitable for 'any periodic model'. The amplitude, cosine and sine construction requires an assumed sinusoidal shape and appropriate start and direction; periodicity alone does not imply this shape. Scope the checklist accordingly. For the boat example, name the first-12-hour model intervals [0, about 2.52] and [about 9.48, 12] instead of leaving the second interval open-ended; future cycles repeat under the model. The model explicitly assumes consecutive extremes and a smooth cosine, which should stay visible.

Live https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html Problem 1 confirms the 7.5/1.5 tide, 12-hour model, 3 m at four hours and 2.52/9.48 solutions; its quick check confirms the 10 m radius, 12 m centre and 60 s wheel; SA1 confirms the buoy formula and 4/3 and 20/3 second answers.
