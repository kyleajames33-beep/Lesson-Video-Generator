# Maths S12 z06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-z06.md`, "How do z-scores tell us whether a result is unusual?" Source SHA256 `0fe7da44a7b0cae9a3c19a88d14ea09ca186adc4c17d12be5c33fe2d642a3924`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (z05: tails as probabilities, expected counts; z02: z-scores) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The core is clear. "More extreme" is defined (further from the mean) before any line is drawn, the tails beyond 2 and 3 give the reason the lines sit there (5% and 0.3%), "a convention, a line people agree to use, not a law of nature" and "exam questions say which rule to use" are both said, the 484 mL bottle shows exactly 2 sitting on the line, and "unusual doesn't mean impossible" is shown with a second needle. The ZGauge labels its zones in words as well as colour. The final frame is a clean new-topic opening. Recalculated (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures): 13/5 = 2.6 (exact P(z > 2.6) = 0.47%, not used); tails 2.5, 5, 0.15, 0.3; test mark 2.8; juice −2, 2.5, 1.25; 700 and 720, 0.05 × 400 = 20, 46 > 40; A1 2.5 and −1.5; A2 z = 2. All correct.

## Findings

1. **Should fix, scenes 4 and 6 (the single-loaf action contradicts the batch scene).** Scene 4 ends "So the baker sets this loaf aside and checks the oven." Scene 6 then says about 5% of loaves, about 20 of every 400, should fall outside 700 to 720 g on an ordinary day. Each of those is "unusual", so by scene 4's logic the oven would be checked about 18 times a day (about 9 loaves a day are heavier than z = 2, and about 2 a day are heavier than z = 2.6). A student who follows both scenes will ask why one loaf justified an oven check when twenty are normal. Fix, and turn it into the lesson's clearest point about "unusual". Scene 4, replacing the last sentence: "So the baker sets this loaf aside and weighs it again. But with four hundred loaves a day, a few unusual ones turn up just by chance, so one loaf on its own doesn't prove the oven is wrong." Decision card: "z = 2.6 > 2: unusual. Set it aside and weigh it again." Scene 6 keeps "check the oven" for the batch. Update the anchor line in Decisions to match. Students should understand that "unusual" is about one result's rarity, while a fault is judged by how many unusual results turn up. About 5 s more.

2. **Should fix, scene 4 (the given event's own probability is never said).** The syllabus asks for "probabilities of events less or more extreme than a given event". Scene 3 gives the tails for z = 2 and z = 3, and the decisions say "fewer than 2.5% of loaves are at least that heavy", but the narration never says it about the 723 g loaf. Narration, after "so it's unusual": "Fewer than two and a half percent of loaves are that heavy or heavier." Visual: on a small bell beside the gauge, the tail beyond 2.6 fills amber inside the faint 2.5% tail beyond 2, labelled "less than 2.5%". Students should be able to give a "more extreme" probability for a value that is not a whole number of standard deviations. About 5 s.

3. **Should fix, scene 6 (why 46 is "unlikely to be luck").** "That's more than twice as many as we'd expect, so it's unlikely to be luck" gives a threshold without a reason; a Standard student has no way to know how far a count usually wanders from 20. Show it. On the counter, before "Yesterday", five earlier days land as small grey ticks: 18, 23, 16, 21, 25 (each well inside the usual wobble). Narration, before "Yesterday": "On ordinary days the count wobbles around twenty: sixteen one day, twenty-five another." Then "Yesterday, forty-six loaves fell outside, far beyond any ordinary day, and more than twice what we'd expect." Students should judge a batch by comparing it with the usual spread of counts, not by a memorised "twice". About 6 s. (Checked: with 400 loaves and a 5% chance each, counts of 11 to 29 cover about 97% of days, and 46 or more has a chance of about 2 in 10 million.) This builds on z05 finding 4.

4. **Optional, scene 6 (name the z-scores in the batch).** "Z-scores can judge a whole batch, too" is followed by no z-score. Say "between seven hundred and seven twenty grams, z from minus two to two," and show "z −2 to 2" under the gate.

## Joins

z05 to z06 matches section 2 of the decisions file (the 723 g display with its red ring, the blue dot, no shading, the three chips, no z-score). z06 to c01a matches section 3 exactly: the header drops the strand name, the bakery-café counter plate, the "Morning jobs" chalkboard with the five jobs and times (10, 15, 25, 20 and 10 min) in the c01 pack's order, "6:00 am", "what order, and how soon can we open?", grey "Normal distribution: done", and no order, arrow, letter or total. The lead-in sentence is word for word section 3. c01a is not designed yet, so the join stays provisional on c01a's side (z06 open decision 3); the c01 pack's "Start" proposes this same frame and its café data match.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown (A2 restates the mean and standard deviation), and the coffee cart picture carries no answer. Feedbacks give the z-score, the comparison, the decision and one crossed classic slip in about 30 s and 22 s. A1 states its own "unusual" rule, as scene 4 says exam questions do. Juice bottles, a test mark (no person drawn, no accusation) and espresso shots are everyday anchors.

## Key notes and length

The five notes are short and correct; note 4 keeps both "on the line" and "unusual ≠ impossible", and note 5 is the judgement routine. About 493 s with holds; findings 1 to 3 add about 16 s, so about 509 s, under 570 s.

No speech, design edits, builds or commits were made.
