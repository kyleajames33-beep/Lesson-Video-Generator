# Maths S12 b03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b03.md`, "Does correlation mean one thing causes the other?" Source SHA256 `103902f1feb64a2970523870379d95ca0f1b1a3b6f50ba5769587c4383d8d618`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (b02 strength and direction; b01 independent and dependent; Year 11 d04 experiments and observational studies) as a Mathematics Standard student, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A very good causation video for Standard. Both words get plain meanings ("tend to move together"; "changing one makes the other change"), the lurking variable is shown, not asserted (the temperature slider moves both columns while the arrow between them stays crossed), and the slip "temperature" alone teaches students to say how it drives each one. The design avoids the common over-correction: scene 6's fare rule ("we can point to the rule") and the heater in A2 show when a relationship may be described as causal, which is the half of the syllabus point most lessons miss. The experiment explains random days in one plain sentence without the jargon. Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): ice creams against sunscreen r = 0.999477, temperature against sunscreen 0.996555 (neither shown), 2 kW for an hour is 2 kWh. All correct.

## Findings

1. **Should fix, scene 5 against scene 8 (does more data cause coincidences or protect against them?).** Scene 5 says "With enough data, some pairs line up just by chance." Scene 8's fourth question asks "is there enough data to trust the pattern?" A student hears more data as the cause of coincidence, then as the cure. Fix, scene 5: "If you compare enough different things, some pairs will line up just by chance, especially when there's only a little data." Students should understand that chance matches come from looking at many pairs with few data, which is why question 4 asks for enough data.

2. **Optional, scene 7 (the trays never split evenly).** The counters show "sunny 3, cloudy 2" against "sunny 2, cloudy 3", and the narration says "nothing else differs on average". A careful student says the $4 tray got more sunny days. Add a clause after "spread across both prices": "It won't split exactly evenly, but over many days, the weather evens out."

3. **Optional, scene 4 (reuse the rooster).** The rooster in scene 2 is itself a cause running the other way (the coming dawn makes it crow). One clause in scene 4, "like the rooster, where the coming dawn makes it crow", would make that example earn its place twice.

## Joins

Opens on b02's final frame. Final frame matches b04a's opening: the ruler lies across the cloud, a little too shallow, with no line drawn and no mean point.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; neither has a picture that answers. A1 removes r so Standard 1 can answer, and its slip ("strong correlation, so it's proven") is the misconception the video targets. A2 practises both halves of the syllabus point (one causal, one not). Feedbacks about 24 s each, answer and reason first, one crossed slip. Cafés and parking fines, umbrellas and late trains: everyday, with no deaths or health contexts (ruling 69).

## Key notes and length

Five short notes that a student can reconstruct the argument from. About 474 s; finding 1 adds about 3 s, and scene 5 remains the named first trim.

No speech, design edits, builds or commits were made.
