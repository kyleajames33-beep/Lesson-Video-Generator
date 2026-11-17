# Maths S12 a02a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a02a.md`, "How do we solve simultaneous equations with algebra instead of a graph?" (substitution). Source SHA256 `8216d79c8769dc3654337c2761af16000657ddab3e404439672c3c1e3cd6190c`.

Written design reviewed by tracing it from its stated entry knowledge (a01: the crossing is the pair true in both; Year 11 Standard f01, f02, f03: substituting, solving a linear equation, changing the subject) as a Standard 2 student who is unsure with algebra. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The motivation is strong and honest: the graph can only estimate (1.25, 3.5), and "nobody buys one point three coffees". Setting the right-hand sides equal is caused, not announced ("at the crossing ... it has the same y on both"), and the exact point dropping into a01's zoom inset is a real "the video shows it" moment. The rounded-x side row (1.3 gives 3.6 and 3.4) is a good reason to keep values exact, and the 7 = 7 collapse makes "the other equation" memorable. Recalculated with SymPy 1.14: 2x + 1 = 6 − 2x at x = 5/4, y = 7/2; 2(1.3) + 1 = 3.6 and 6 − 2(1.3) = 3.4; y = x + 1 with 3x + 2y = 17 at (3, 4), slip x = 16/5; café c = 2, s = 5, 4(7 − s) + 6s = 28 + 2s; A1 (3, 7); A2 (4, 11), slip 31/7. All correct.

## Findings

1. **Should fix, scenes 4, 5 and feedback 2 (the bracket is lost by ear).** "Three x plus two, times x plus one, equals seventeen" is heard as (3x + 2)(x + 1). "Four, times seven minus s" is heard as 4 × 7 − s. "Three x plus two, times two x plus three" has the same problem. This is the video whose named slip is the half-multiplied bracket, so the spoken form must carry the bracket. Fix. Scene 4: "Three x, plus two lots of the bracket x plus one, equals seventeen." Scene 5: "Four lots of the bracket seven minus s, plus six s, equals thirty-eight." Feedback 2: "Three x, plus two lots of the bracket two x plus three, equals thirty-four." (a03 scene 5 already says "Twenty-two lots of three hundred and fifty", so this also matches the strand.) Students should hear that the 2 multiplies the whole bracket before they see the arcs.

2. **Should fix, scene 5 (which equation to rearrange).** "Neither starts with a letter on its own, so make one" leaves the choice unexplained. A less confident student often rearranges 4c + 6s = 38 and meets fractions. Fix, one sentence after "so make one": "Pick the easier one, c plus s equals seven, because neither letter has a number in front of it." Visual: on "easier one" a hand tag "no numbers in front" beside (1). Students should be able to choose the rearrangement in A2 and later questions without guessing.

3. **Optional, scene 3 (open decision 2, "swap back").** Keep "swap back", and add once: "Putting it back in is called substituting back." The textbook term then has an anchor. The key notes already say "Swap back"; no change there.

4. **Optional, scene 3 (open decision 3, the rounded-x row).** Keep it. It is spoken as "If you'd rounded", is grey and is a single row, so it will not read as a second method.

## Joins

a01 to a02a matches exactly (the between-the-grid-lines frame). a02a to a02b matches: the stacked 3x + 2y = 16 over 3x − y = 7 with "both 3x" boxed, a grey "− ?" and no result row is a02b's opening frame, and a02b's first line names the same pair.

## Practice and feedback

Both cards keep the full question on screen through the 10 s countdown, with the equations stacked and nothing answer-bearing. A1 practises the equal-sides case, A2 the bracket. Feedback gives the answer, the reason, short working and one crossed slip (about 23 s and 29 s). The café is the site's own example and a fair everyday anchor.

## Key notes and length

The five notes are useful; note 5 ("Keep values exact") carries the scene 3 reason. About 469 s with holds. Root's open question 7 (a second worked example): not needed; this pace suits the first algebraic method, and findings 1 and 2 add only a few seconds.

No speech, design edits, builds or commits were made.
