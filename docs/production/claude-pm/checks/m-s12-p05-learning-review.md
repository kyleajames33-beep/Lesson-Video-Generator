# Maths S12 p05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p05.md`, "How does relative frequency estimate a probability, and why do more trials help?" Source SHA256 `6ebb9ed5770548574cc8f62d7ccc91dc179dafaf6ec80bf50ae9e0626020a5c3`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p02: theoretical probability from equally likely outcomes; Year 11 d06: tallies and frequency tables) as a Mathematics Standard student starting Year 12, once arriving from p04 (Standard 2) and once from p03 (Standard 1). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

The central idea is taught well. The reason short runs wobble and long runs settle is given in plain words ("each flip is a big share of so few"; later "each new flip now changes the fraction only a tiny bit"), the three-panel running line makes both visible, and the careful wording holds throughout ("settles overall, not at every step"; "the coin has no memory"). The app record is a good example of a probability with no formula behind it. Recalculated with Python `fractions` and `math.comb` (`work/brief-review-standard-p/verify.py`, `python -I`): 7/10 = 0.7; 54/100; 507/1000; 5037/10 000 = 0.5037; 8 or more heads in 10 is 56/1024 = 7/128 ≈ 0.0547, about 1 run in 18.3; the die totals 120, 24/120 = 0.2, 16/120 ≈ 0.133, 1/6 ≈ 0.167, gaps +0.017, −0.017, +0.033, −0.008, +0.008, −0.033 (largest 1/30); 40/50 = 0.8; 34/40 = 0.85; 0.6; 0.489. All correct. The seeded run's 7, 54 and 507 are accepted by ruling 76 and still need the build's seed.

## Findings

1. **Should fix, scene 3 ("So let's keep flipping": whose coin?).** The hook asks whether this coin is unfair. "Let's keep flipping" sounds like the same coin, and the line then settles on 0.5, which would quietly answer the hook by assuming the coin is fair. The run is a simulated fair coin, but nothing says so. Fix. Narration: "So let's watch what a fair coin does. A computer flips one a thousand times, and we plot the relative frequency of heads after every flip." Keep "After ten, it's at zero point seven, just like our coin", which now carries the payoff: a fair coin did it too. Visual: a grey tag "simulated fair coin" on the coin at the top of the run, and the same tag on the forty short and forty long runs in scene 4. Students should understand that a fair coin can show 0.7 after ten flips and only settles later, so 0.7 alone proves nothing. Time: about 4 s.

2. **Should fix, scene 4 ("eight or more heads in ten ... about one run in eighteen").** The coin in question got seven heads, so a student will ask why the evidence is about eight. The figure for "seven or more" is the one that answers the hook, and it is stronger: 176/1024 = 11/64 ≈ 0.17, about one run in six (1024/176 = 5.8; checked in `suggested.py`). Fix. Narration: "A fair coin gets seven or more heads in ten flips about one run in six, so seven heads in ten isn't strong evidence that the coin is unfair." Readout: "7+ heads in 10 fair flips: about 1 run in 6". Update author note (c) and "Numbers to verify". No time change.

3. **Should fix, scenes 5 and 12 (ruling 69: the app record is not labelled).** "40 of the last 50 rides arrived within 5 minutes" reads as a real company's record. The decisions file says every new dataset is labelled, but this one carries no tag. Fix: a small grey "invented example" tag on the phone's record in scene 5 and in the handoff frame. The handoff is p06's opening (decisions file, section 3), so root adds the tag there as well and p06's scene 1 inherits it.

4. **Optional, scene 6 ("that's normal variation" is asserted).** Students have no way to judge whether 0.03 is small. Add: "A sixth of a hundred and twenty is twenty, and every face came up between sixteen and twenty-four times, only a few either side." This uses division students already have, not p06's formula. About 6 s.

5. **Optional, scene 1 (the "Probability trees: done" chip for Standard 1 viewers).** Standard 1 viewers arrive from p03 and see a chip naming a video they skipped, until it fades on the first sentence. Either fade it before the narration starts, or have root word it "Standard 2: probability trees done" in section 5 of the decisions file.

## Joins

p04 to p05 (Standard 2) and p03 to p05 (Standard 1): scene 1 opens on p04's final frame, which is p03's right panel scaled evenly by 1.3, so both courses see the same coin and tally card. Nothing in p05 needs p04; the hook's "is this coin unfair?" is answered in scene 4. p05 to p06: scene 12 matches section 3 of the decisions file (the phone with "40 of the last 50 rides arrived within 5 minutes" and 50 dots, the empty "your next 30 trips" grid, "how many on time?"), with no count worked out.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; the score sheet (34 ticks, 6 crosses) and the two tally cards show the data, not the answer. Feedback gives the answer, the reason, short working and one crossed slip ("40/34"; "yes, unfair: 0.6 isn't 0.5"), about 25 s and 27 s. A2's "six heads in ten flips happens often with a fair coin" is true (6 or more: 386/1024 ≈ 0.38). Netball and coin flips are fair anchors.

## Key notes and length

Five useful notes, and "Each trial is new: nothing is 'due'" earns its place. About 485 s with holds; the findings add about 4 to 10 s, well under 570 s.

No speech, design edits, builds or commits were made.
