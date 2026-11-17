# Maths S12 a07 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a07.md`, "Where do linear and exponential models stop matching reality?" Source SHA256 `5517307e7fa3a2769bc09c8505d2e9f69954777529c54914a9581afe960f9d95`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from both stated entry routes as a Mathematics Standard student starting Year 12: Standard 2 from a06 (y = k·aˣ, the city and the car) and Standard 1 from a05 (y = aˣ tables and graphs only; root ruling 9). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, run with `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

This is a strong design. The counter spinning from 451,528 to 92 million beside a much shorter "everyone in Australia" bar makes extrapolation felt before it is named, and "the maths is right, but the answer is absurd" gives the lesson a real question. The limitation card's two slots (assumption amber, why it fails here violet) are filled in scene 3 before the exam answer in scene 4 uses them, and the crossed "the model might be wrong" sits exactly where students would write it. The decay rider never reaching the red "$0" marker shows the decay limitation rather than asserting it. Ruling 18 is applied (the 200-year value is answered in the hook) and ruling 19 is applied (city teaches, sneakers in attempt 1). Recalculated: 250 000 × 1.03²⁰ = 451,527.8; 250 000 × 1.03²⁰⁰ = 92,338,953.8; ratio to 27.6 million 3.35 ("more than three times"); 24 000 × 0.82ᵗ at 1, 20, 30, 40: 19,680, 453.41, 62.32, 8.57; the illustrative logistic and model values at 0, 10, 20, 50, 80, 100 years match author note (b); C = 4n capped at 16, model 24 at 6 trips; 200 × 1.1¹⁵⁶ = 5.7318 × 10⁸; 38 × 30 + 7 × 45 = 1,455, model 1,350, gap 105. All correct.

## Findings

1. **Should fix, scenes 1 and 5 (Standard 1 viewers meet 1.03 and 0.82 unexplained).** Standard 1 students arrive from a05, which taught y = aˣ and doubling but not percentage multipliers or a starting value (a05 stops before k; a06 is Standard 2 only). Scene 1 says "growing by three per cent a year. Its model is P equals two hundred and fifty thousand, times one point zero three to the power of t", and scene 5 says "losing eighteen per cent ... twenty-four thousand, times zero point eight two". A Standard 1 student will ask where 1.03 and 0.82 come from, and scene 5's key reason ("Multiplying by zero point eight two always leaves something") depends on it. Fix. Scene 1, after "growing by three per cent a year": "Each year, its population is multiplied by one point zero three, that's a hundred per cent plus three. So its model is ...". Scene 5: "losing eighteen per cent of its value each year, so it keeps eighty-two per cent, and each year its value is multiplied by zero point eight two." Visual: grey chips "+3% a year: × 1.03" (scene 1) and "−18%: keep 82%: × 0.82" (scene 5). About 140 characters in all. Students should understand that the multiplier is what makes the model exponential, so the "never zero" reason in scene 5 is caused, not stated.

2. **Should fix, scene 2 (interpolation is misapplied).** "A prediction inside the data, or close to it, is fairly safe. In Year 11 that was called interpolation", with years 0 to 10 shaded "near the city's recent numbers" and the grey chip "Year 11: interpolation". The model starts today (t = 0), so every t > 0 is a prediction beyond the data: extrapolation, however small. A student who remembers Year 11's definition (predicting between known values) will see a contradiction, and one who does not will learn the wrong meaning. Fix. Narration: "Predicting between numbers you already have is interpolation, and that's fairly safe. Predicting beyond them is extrapolation. A few years ahead is a small step, but two hundred years is a giant one, and the further out you go, the riskier it gets." Visual: a few grey "recent numbers" dots at t = −10 to 0 behind the start; the band 0 to 10 relabelled "a few years ahead: a small step"; grey chips "Year 11: interpolation = between the data" and "extrapolation = beyond it". Key note 2 ("Near the data: fairly safe. Far outside: risky (extrapolation).") then reads correctly.

3. **Should fix, feedback 2 (amounts by ear).** "eleven forty", "three fifteen", "fourteen fifty-five" and "thirteen fifty" can be heard as $11.40, $3.15, $14.55 and $13.50, in a feedback whose whole point is the dollar total. Fix (380 characters, about 29 s with the hold): "Twenty hours is six hundred **dollars**. For forty-five hours, thirty-eight hours at thirty dollars is eleven hundred and forty dollars, and seven hours at forty-five dollars is three hundred and fifteen, a total of fourteen hundred and fifty-five **dollars**. The model assumes one rate for every hour, but overtime raises it. Thirteen hundred and fifty, the model's answer, is the slip." Move the second cue from "five" to the second "dollars".

4. **Optional, scene 6 ("Lines can also run below zero").** The sentence has no example, so the grey sketch has no referent, in the longest scene (777 characters, about 58 s). Either use the listed reserve trim (cut the sentence and the sketch, and drop "or zero" from key note 5), or make it concrete: "And a falling line, like data left on a phone at two gigabytes a day, would run below zero, which can't happen." with the sketch tagged "data left: below 0 GB?".

5. **Optional, attempt 1 ("week one hundred and fifty-six").** With 200 orders "in its first week" at t = 0, week 156 is t = 155, while the card and feedback use t = 156. Say "a hundred and fifty-six weeks later (t = 156)" on the card and in the narration. The answer and the teaching point do not change.

Root ruling 24: the YouTube description still carries codenames ("Standard 2 (ci5c87181e)", "Standard 1 (cid72ff748)"). Drop them, keeping separate Standard 2 and Standard 1 headings (ruling 16).

## Joins

a06 to a07 matches: a06 scene 12 ends on the skyline, "P = 250 000 × 1.03ᵗ", the curve to (20, 451 528), the "//" and "200" tick, the amber "?", "200 years: 250 000 × 1.03²⁰⁰ = ?" and "Next: when do models stop matching reality?", and a07 opens on exactly that frame and fills the "?" with "≈ 92 300 000" (ruling 18). Standard 1 viewers have not seen it, which finding 1 addresses. a07 to a08: the travel card and reader, the fare graph flat after the $16 cap, "the total stops rising: a flat piece", "Next: a graph that tells a story" and the grey "Standard 2: this next video is optional" chip are a08's stated opening frame, and a08's first line ("Last time, the travel card's fares ...") picks it up. The narration tells Standard 2 students that a08 is optional.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is the sneakers and a blank counter; A2's is empty axes; nothing is answer-bearing. Each feedback gives the answer, the key reason and one crossed classic mistake ("the model might not be accurate"; "$1,350"). Feedback 1 about 28 s, feedback 2 about 26 s (about 29 s after finding 3).

## Standard 1 check

The Standard 1 segment (scene 6) is clearly labelled, delivers both strengths and the linear limitations `cid72ff748` asks for, and tells Standard 2 viewers it is a refresher. Attempt 2 practises it. With finding 1 applied, a Standard 1 student from a05 can follow every scene.

## Length

5,696 characters (recounted by script), about 518 s with holds, about 423 s of speech before the notes. Findings 1 and 3 add about 190 characters (about 14 s). Under 570 s without rushing.

No speech, source edits or commits were made.
