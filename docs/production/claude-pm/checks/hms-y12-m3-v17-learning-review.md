# HMS Year 12 M3 V17 Revision 1: independent learning review

24 November 2026. Design `lessons/hms-y12-m3-v17.md`, "Has digital health succeeded in connecting Australians' health information, and what would it take to make it work?" Source SHA256 `ca9d70a9027ac83985de5c3869264a0eb49d081b87cda7329c0d080034a81c0c`.

Written design reviewed by tracing it from its stated entry knowledge (hms-y12-m3-v09's seams and carry test; v15's telehealth and digital divide; v16's three questions and "the system decides the outcome") as a student starting Year 12 HMS, using `docs/production/student-learning-review.md`, `AGENTS.md` and `hms-design-brief.md`. No built preview, plate inspection, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 notes).

"It isn't really a technology. It's a response to a problem you've met before" connects digital health to v09's seams and carry test, and the unconscious-patient hook is the one case where the person cannot carry the information, so the motive is felt rather than stated. `ConnectionMap` with a completeness gauge computed from which nodes upload makes "an incomplete record can be worse than none, because it may be trusted as complete" visible (a token reading the summary misses a medicine that never arrived). "Narrow job, single owner" explains why registers and e-prescriptions work and the shared record is debated. The graded judgement ("infrastructure built, connection partial") models "to what extent" well. The cost and benefit see-saw stuck on the provider side explains slow adoption in one picture. The design teaches the 2025 sharing-by-default change (site correction 30) with a flag to confirm dates.

## Findings

1. **Should fix, 8a case 1 repeats the body's worked example.** Scene 2 shows "a test card copying itself three times at three nodes" with "tests get repeated because nobody can see the last result", and scene 3 attaches the shared record and default pathology uploads to the same nodes. Case 1 is "the same blood test three times in five weeks by three different providers". Students can recite instead of apply. Replace case 1 with an unseen case that tests the same idea, for example: "A patient's severe penicillin allergy is recorded at one hospital. Months later, a different hospital in another city prescribes penicillin." The service (shared record or allergy in a shared summary), the condition (the first hospital uploads it and the second looks) and the failure (an allergic reaction) follow the same pattern. Case 2 (the discharge the GP never hears about) is fine; secure messaging is named in the body but not worked on a case.

2. **Note, scene 6's first condition is already partly met.** "Sharing has to be the default, not a choice" follows scene 3's "new rules are starting to make some test results upload by default". Say "Sharing has to be the default for every key document, not just some test results" (about 1 s) so students do not think the video contradicts itself, and the change in the law becomes evidence for the condition.

3. **Note (science check, currency), the sharing-by-default dates.** The design flags this already; confirm which report types and providers are covered by late 2026 before voicing, and keep the narration at "starting" if commencement is still phased.

## Practice and feedback

Both cards stay on screen through the countdown. 8a's picture is the map with no links; 8c's is the laptop with a call window and the road sign, neither showing an answer. 8b (about 29 s) crosses "service named, no condition" with "coverage is not use"; 8d (about 26 s) crosses "individuals only". 8c is unseen and covers -s4 for both groups.

## Join

v16 to v17 matches (three cards sending lines to an empty "shared information" box). v17 to v18 matches v18's opening (many small maps merging into one "dataset" table with no names).

## Reading load and memory

Scene 5's four quadrants each take three or four chips; the quadrant structure carries them, and the see-saw gives the scene one point. Naming My Health Record once as a service name is appropriate. Both memory lines come after their scenes. No figures; no em dash.

No speech, design edits, builds or commits were made.
