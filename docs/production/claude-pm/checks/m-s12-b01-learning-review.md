# Maths S12 b01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b01.md`, "When do we need bivariate data, and which variable is independent?" Source SHA256 `ae57a2e9f08733279cf6571984ae3aff50c31d46b1d757448ac825264b7e622d`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 d05, d06 to d16, l01: numerical variables, dot plot, mean, median, reading a point) as a Mathematics Standard 2 student arriving from t11, and again as a Standard 1 student arriving from t05's right panel. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

This is a strong opening video. The one-variable view of the same board (mean 77, median 75, "hotter days? not in this column") makes the syllabus contrast one picture, and the shuffle is the right surprise: every number survives but the question can no longer be answered. "Bivariate" arrives after its plain meaning, "independent" and "dependent" each get the syllabus word, its everyday partner and two reasons for temperature (sales can't change the weather; the forecast is known first), and "might" keeps cause for b03. The column swap and the A2 card with the fare listed first both attack "the left column goes across". Reading (28, 90) back as a day, with units, is a clean worked step. Recalculated with Python (`work/brief-review-standard-b/verify.py`, `python -I`): sums 385 and 125, mean 77, median 75, mean temperature 25, all correct. One author-note claim fails (finding 1). Narration 5,133 characters by my count, matching the design; no digits in narration; no em dash.

## Findings

1. **Should fix, scene 3 (the shuffle leaves one pair joined).** The build order 25, 32, 18, 28, 22 puts 28 back in the fourth row, beside 90, so the 28 | 90 link never breaks. Author note (b) says "no cell stays in place, so every link breaks"; the script finds 28 unmoved. That row is the one the scene then boxes as "one pair" and scene 7 plots, so a student sees the most important pair survive the shuffle and may conclude shuffling is harmless. Fix: use 25, 32, 18, 22, 28 (checked: no temperature stays in its row). Students should see every link snap, so "pairs lost" is true on screen.

2. **Should fix, scene 11 (attempt 2's card answers part (a)).** Part (b) reads "One trip is plotted at (8, 21), with distance on the horizontal axis." A student who has just learnt "independent goes across" reads (a)'s answer off part (b). Fix: card (b) "One trip is plotted at the point (8, 21). What does this point represent?" (the narration already omits the phrase); change the model answer to match. Feedback 2 already explains both parts. Students should have to decide the role, then use it to read the point.

3. **Should fix, scene 6 (why shoe size and reading speed go together at all).** The narration says "Bigger shoes don't make anyone read faster", and only a grey chip mentions age. A listener asks: then why are these two even a pair? Fix: after "Take shoe size and reading speed for children." add "Older children tend to have bigger feet, and they also read faster, so the two go together." Then "But bigger shoes don't make anyone read faster." About 6 s against an 85 s margin. Students should understand that "neither drives the other" still leaves a real pattern worth predicting from, which is when "choose by what you want to predict" applies.

4. **Optional, scene 6 (a codename on a learner chip).** "age may drive both: in b03" names an internal code. Recall chips such as "t01a: SOH CAH TOA" are accepted precedent, but a forward pointer means nothing to a viewer. Use "age may drive both: more in Correlation vs Causation" (b03's published title).

## Joins

Opening matches t11 scene 12 (Revision 2) and t05's right panel: same board, five empty rows, "hotter day, more ice creams?"; the grey chip, label, "Next" and "?" fade on the first sentence so both arrivals look the same. t11's last line ("That's trigonometry done. Next, a new topic") and b01's first ("Trigonometry's done, and this is a new topic") repeat each other, which is harmless across a video boundary. Final frame matches b02's stated opening (28°C point placed, 18°C row in flight).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1 has no picture, A2's phone screen shows no numbers. Each feedback gives the answer, the reason and one crossed slip, about 25 s and 22 s. The canteen and rideshare anchors are everyday and fair.

## Key notes and length

Five short notes, each one line, matching the memory card. About 485 s with holds; finding 3 adds about 6 s.

No speech, design edits, builds or commits were made.
