# Maths A11 s01 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s01.md`, "How do we describe a collection precisely with set notation?" Source SHA256 `f865618e430b1aa6310db31015e334e6ddf168b75cfa040264d7ee92c347b647`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Years 7 to 10 factors, multiples, primes, even and odd numbers; no earlier Year 11 video) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`, Python fractions and SymPy); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

A good first video for the strand. Braces arrive as the cure for vague words, and the caps give one visible universal set that carries every syllabus point. Each rule has its reason in the narration: order and repeats change nothing because "a set records which objects are in it, not how often"; the empty set is still a set because a description can pick out nothing; {0} is crossed with the reason "a set with one element, the number zero"; "every cap is in exactly one of S and S complement" gives 7 + 6 = 13; and the complement shrinking with U is a real visual surprise that makes "depends on U" visible. The bars are named as a count, never as absolute value, and n(A) is said once. The subset test (one failure is enough; smaller isn't enough; the empty set has nothing to fail) is well ordered. Root ruling 9 is applied; no gambling. Recalculated: even numbers 1 to 11 {2, 4, 6, 8, 10}; even caps 6; multiples of 3 in 1 to 12 {3, 6, 9, 12}; {8, ..., 13} (6) and, in 1 to 10, {8, 9, 10}; {1, 3} ⊆ {1, 2, 3, 4}, {1, 3, 5} and {1, 9} not subsets; A1 primes {2, 3, 5, 7, 11, 13}, complement of 9 elements as listed; A2 E = {1, 2, 3, 4, 6, 12}, {2, 4, 8} ⊄ E, ∅ ⊆ E. All correct.

## Findings

1. **Should fix, scenes 2 and 3 ("finite" is used before it is named).** Scene 2 says "Some sets never end" but never says "infinite"; scene 3 opens "The number of elements in a finite set is written with vertical bars", so the syllabus word "finite" (also in key note 3) arrives with no plain meaning, and "infinite" is first heard as a label in scene 3's last sentence. A student will ask "what counts as finite?" at the moment they should be watching the bars. Fix. Scene 2, replace "Some sets never end." with "Some sets never end. A set like that is called infinite. A set you could finish counting is finite." Visual: on "infinite" a hand tag "infinite: never ends" beside "{0, 2, 4, 6, …}"; on "finite" the tag "finite: you can finish counting" beside E. Students should hear both words with their meanings before scene 3 restricts |A| to finite sets.

2. **Optional, scene 3 ("From caps one to twelve").** The caps run to 13, so restricting to 12 invites "why not all thirteen?". The multiples of 3 among caps 1 to 13 are the same {3, 6, 9, 12}, so say "let A be the caps that are multiples of three" and set the task strip to "List A, the caps that are multiples of 3, and find |A|". The site's numbers and answer are unchanged.

3. **Optional, scene 4 (the states with no coastline).** The example is correct for states, but a student is likely to think of the ACT, which has no coastline, and stop following the empty-set point. Replace it with one that has no exception to argue about, for example "the months with thirty-two days. There aren't any, so that set is empty too." (chip "months with 32 days = ∅").

4. **Optional, scene 6 and A2 (the "not a subset" symbol).** The definition card uses ⊆, and the verdicts write ⊄ (the negation of ⊂). Use ⊈ for "is not a subset of" so the struck symbol matches the one just defined, or add a grey chip "⊄: not a subset". Low priority; the narration says "not a subset" each time.

## Open decisions answered

- (1) g06 join: matches today (see Joins).
- (2) Title: root ruling 36 already chose the 65-character alternative.
- (3) "Now say caps one to seven start in the pool": reads naturally as a supposition. Keep.

## Joins

g06 to s01 matches: g06 scene 11 ends on the grey delivery-circle badge ("every point exactly 5 km from the store: a collection"), "the even numbers from 1 to 11", empty braces with "?", and chips "a collection, written precisely?", "Next: sets and set notation", "?"; s01 scene 1 opens on that frame and fills the braces with {2, 4, 6, 8, 10} in its second sentence. g06's last line ("Here's one described in words, the even numbers from one to eleven") is picked up by s01's first ("Here's a collection described in words"). s01 to s02: the cabinet plate, the cone plate, the braces "C = { cones with a chocolate scoop }" and "V = { cones with a vanilla scoop }", and chips "this cone: in C? in V?", "Next: sets that overlap", "?" are s02's opening frame, and s02's first line picks up the question.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture (the numbers 1 to 15 unlit in a rectangle) and A2's (an empty brace "E = { }") show nothing answer-bearing. A1 practises scenes 3 and 5; A2 practises scenes 3 and 6. Each feedback gives the answer, the key reason, short working and one crossed classic mistake (1 in A; "{2, 4, 8} ⊆ E: 2 and 4 are in E"). Feedback 1 about 23 s, feedback 2 about 25 s.

## Pace

About 371 s of speech before the notes, about 460 s in all; new stages every 30 to 55 s. Not rushed. Finding 1 adds about 90 characters (about 7 s).

## Year 12 handoff check

Nothing in Year 12 s01 to s06 assumes s01 directly; its notation (U, |A|, A̅, ⊆) is what s04 and s05 build on, and both use it as taught here.

## Site link

`probability-and-data/lesson11.sa.html` (`we-1`, `we-2`, `we-3`, card 06) matches the outline. Correct.

No speech, source edits or commits were made.
