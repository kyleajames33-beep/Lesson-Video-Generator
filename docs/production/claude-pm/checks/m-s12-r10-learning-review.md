# Maths S12 r10 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r10.md`, "How do we convert a rate into different units and use it to solve problems?" Source SHA256 `40555690bb98155c0264bc93bcaec4462108dc989951a68025f3470f56f6ffd7`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r09: a unit rate; Year 11 Standard t01, a01, f04: time and length units, speed = distance ÷ time) as a Mathematics Standard student starting Year 12, for both courses (the content is identical). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

The design does the hard thing well: it converts both units of a rate one at a time (MS-35) and reaches ÷ 3.6 only after its reason. Scene 2's "in an hour the tap runs sixty times as long, and loses sixty times as much water" makes the × 60 on both lines caused, and the row of 876 baths is a memorable surprise. The pump scene gives the reason for dividing ("each minute removes sixty litres"), and the slips are the ones students actually make (3.15 h, km/h times seconds). The three should-fix items are the places where a Standard student hears a number without the step that produced it. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): 18, 432, 157 680 L and 876 baths; 144 000 ÷ 3600 = 40, 144 ÷ 3.6 = 40, 0.503 s; 5 min per km and 12 km/h; 60 L/min and 60 min; 270 ÷ 3.25 = 83.08 (83.1) and the 3.15 slip 85.7; A1 at 840 L/h, 178.57 min, 2 h 58.57 min (2 h 59 min), 2.976 h; A2 at 20 m/s, 30 m, slip 108; the memory-aid case 25 × 3.6 = 90. All correct.

## Findings

1. **Should fix, scene 3 (the bottom unit changes by a different move, unexplained).** Scene 2 taught "change the bottom" as "multiply the top and the bottom by sixty". In scene 3 the bottom changes by rewriting one hour as 3600 seconds and then dividing ("Divide, and that's forty metres per second"). A student who has just learned "multiply both" will ask why we now divide. Then "times a thousand, then divide by three thousand six hundred, is the same as dividing by three point six" is asserted. Fix: after "a hundred and forty-four thousand metres in three thousand six hundred seconds", say "Per second means for one second, so share the metres across the seconds, just like sharing pay across hours." Then: "Times a thousand, then divide by three thousand six hundred, is the same as dividing by three point six, because three thousand six hundred is three point six thousands." Screen: on "share" the card's "3600 s" ring and a grey chip "r09: share to get the amount for one". Students should understand that a rate's bottom unit always ends as "one" of something, by scaling up (scene 2) or by sharing (scene 3), and why 3.6 appears. Time: about 13 s, in the longest scene (893 characters); if it runs long, take scene 3's "The pitch is about twenty metres long, so metres per second would be more useful." down to "Metres per second suits a twenty metre pitch."

2. **Should fix, scene 4 (twelve kilometres per hour appears from nowhere).** "In sixty minutes they'd cover twelve kilometres" is said with no step; the "× 2.4" is on screen only, and 25 × 2.4 = 60 is not a step a Standard student will reconstruct by ear. Fix: use the pace just found. Narration: "Put the distance on top instead. One kilometre every five minutes, and an hour has twelve lots of five minutes, so it's twelve kilometres per hour." Screen: replace "× 2.4" with "60 min ÷ 5 min = 12 lots" and the card "12 km" over "60 min". Students should see that the two forms of the rate come from the same five-minute kilometre. Time: about 2 s.

3. **Should fix, feedback 1 (the hours-and-minutes step is skipped, and the slip's repair is not taught).** "That's two hours and fifty-eight point six minutes" skips "two hours is a hundred and twenty minutes". The slip's correction ("An hour has sixty minutes") does not show what 0.98 h really is, and scene 6 only taught minutes to hours, not the reverse. Suggested replacement: "Fourteen litres a minute, times sixty, is eight hundred and forty litres per hour. Divide the amount by the rate, two thousand five hundred by fourteen, about a hundred and seventy-nine minutes. Two hours is a hundred and twenty of those, which leaves fifty-nine, so two hours fifty-nine minutes. Writing two point nine eight hours as two hours ninety-eight minutes is the slip. Point nine eight of an hour is about fifty-nine minutes." Screen: "178.6 − 120 = 58.6 min" stays; the slip caption becomes "0.98 h × 60 ≈ 59 min". About 33 s against the current 32 s. That is a little over the 30 s guide, but this feedback is the only place the hours-and-minutes step appears, so keep it rather than cut the reasoning.

4. **Optional, scene 2 (the bath size).** "That would fill a bath more than eight hundred times" depends on a 180 L bath that is only on screen. Say "a hundred and eighty litre bath" once.

5. **Optional, scene 5 (the multiply case is stated, not shown).** "To find an amount, multiply the rate by the time" follows a pump example that only divides. Add a pointer back: "like the tap, zero point three litres a minute for sixty minutes" (no new working).

## Joins

r09 to r10 matches (the tap, "0.3 L every minute", the "1 year, ? L" strip; scene 1 answers "a little or a lot" in scene 2). r10 to r11: the flour plate on a coded shelf with "2 kg: $3.80" and "5 kg: $8.75"; no unit price is shown. The flour plate is briefed here and painted one video early (ruling 17).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture is answer-bearing. A2's narration ("past a school, where the limit is forty") and card ("a school zone signed for 40 km/h") say the same thing in slightly different words, which is fine. Each feedback gives the answer, the reason, short working and one crossed slip, at about 32 s and 30 s. The school zone (ruling 52) uses a converted rate for a real decision without re-teaching stopping distance.

## Key notes and length

Five useful notes; note 3 states the direction of the shortcut and note 5 the 3.15 trap. About 487 s with holds; findings 1 to 3 add about 17 s, to about 504 s, still well under 570 s.

No speech, design edits, builds or commits were made.
