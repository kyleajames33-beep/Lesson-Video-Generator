# phys-y12-m6-v19 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `c7d60814c9c90dfc62a5378dd182fc8dbbe910e02ee5f4e9e6f7dfa3423a8105`.

Compared: the Revision 2 source approved by `p-y12-m6-v19-rev2-error-check.md` (SHA256 `05a39567...`, commit `2df27a06`) against the current working file (Revision 3, commit `039f0bbb`, plus root's 21 November label edit from commit `0d345c3a`), by git diff. The working copy's content is identical to commit `0d345c3a`, but it has CRLF line endings (75,028 bytes against the committed LF blob's 74,667), so the SHA256 above is of the bytes on disk, which is what the preparation script hashes. A re-checkout with LF endings would change the SHA and need this line updated. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "The boat is a plate", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 9 (the painted dinghy replaces the coded silhouette; the matched-speed boat is a second copy in a dashed inset card); a new plate request with a fallback; a recorded kit gap; Revision 3 notes; and root's label edit to scene 8's narration: "a little beyond what the syllabus asks." became "a little beyond what exams usually ask."

Narration: 15 of 16 scene strings are byte-identical to the approved Revision 2 source. Scene 8's edit removes the course label, reads naturally and is the same length (scene 8 still 444 characters). Recount: the 16 scene strings sum to 6,462, equal to the headline and under 7,000. Scene 8's bold cues ("minute", "five percent", "motor") are unchanged and in spoken order. No narration now names a module, "the syllabus" or a video number.

Revision 3 visuals: the dinghy plate `y12p-sailing-dinghy-v1.png` has been delivered (with its sidecar), so the fallback is not needed. Showing the bulge and slack through the relative-wind arrow, not a redrawn sail, still matches the narration ("the push would vanish"). The simulation note (three sine currents a third of a cycle apart give a turning field; illustrative slip model) is physically right. Scene 8 numbers unchanged and correct: n_s = 120 × 50 / 4 = 1500 rev/min, slip 75 rev/min = 5.0 %, slip 5.3 % crossed. All named plates exist under `public/`.

Mechanical: both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 8 Visual still puts the course label on screen: a grey tag "beyond the syllabus", while the narration now says "beyond what exams usually ask". It is not a narration problem, but it is the same label the edit removed and it no longer matches the spoken line. Proposed fix: change the tag to "beyond most exams" (the "### 8." heading may keep its author wording).

2. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
