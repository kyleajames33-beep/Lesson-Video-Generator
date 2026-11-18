# Maths S12 f04 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-f04.md`, "What happens when an edge's capacity changes, and can the network meet demand?" Source SHA256 `5995ea7abeac5cd5c46532d51d16bb32b4342bdac2efbf2a37fb9b25624e3b84`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (f03: maximum flow = minimum cut; f02: the method; rate conversions) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This is a good closing lesson. The demand check is set out in the order a student should write it (same units first, compare, shortfall, a check in fans, then a context sentence), the crossed "60 000 > 190" is the classic units slip, and the capacity handle with a live panel of cut sums makes every change visible: the north gate's +40 buying only +20 when the plaza's cut catches up is the right surprise, and "widening the busiest-looking walkway" doing nothing is a useful contrast. MS-56 is taught correctly ("at least the shortfall, and then a recheck"). The course close promises no future videos and ends warmly. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`; cuts by enumeration and an independent maximum flow): 5 × 60 = 300, 60 000 ÷ 300 = 200, shortfall 10, 190 × 300 = 57 000 (3 000 short), 210 × 300 = 63 000; north gate 100: cuts 210, 220, 230, 210, maximum 210; north gate 120: 210, 240, 230, 230, maximum 210; S→A 150: maximum 190; south gate 90: cuts 210, 200, 210, 170, maximum 170; attempt 1 base 50, C→T 45 gives 55 ({S, A}), S→A 50 gives 50; attempt 2 base cuts 48, 53, 55, 60, after B→T 24: 54, 55, 59, 60, maximum 54. All correct.

## Findings

1. **Should fix, scene 2 (the average rate is never said; ruling 81).** Ruling 81 accepts f04's demand "treated as an average rate (said once)", but author note (e) says it is "said nowhere", and the script does not say it. Without it, "about ten fans a minute would be left waiting" can be read as a fixed queue, and a student may wonder about everyone arriving at the last minute. Fix, after "two hundred people a minute": "if they arrive evenly over the five hours". Students should understand that the comparison is between two average rates. Time: about 3 s.

2. **Should fix, scene 12 ("Every video is in the Year 12 Maths Standard playlist").** This is true only if f04 is published after every other core Year 12 Standard video. Playlist order is separate from upload order (AGENTS.md), and with Standard designs in flight across nine strands, f04 could go public before some earlier videos. Fix: "You'll find the Year 12 Maths Standard videos in the playlist, so go back to any topic, any time, and keep practising." Keep "the core Year 12 Maths Standard course is complete" (that is about the content taught). Or root holds f04's release until every core video is public, and records that gate. Time neutral.

3. **Optional, scene 3 ("We added twenty to cover a shortfall of ten").** A student will ask why twenty. Add: "Widening it by just ten, to ninety, would give exactly two hundred, with nothing to spare." (Checked: north gate 90 gives cuts 210, 210, 230, 200, so a maximum of 200.) This also shows "at least the shortfall" working exactly. About 4 s.

## Joins

f03 to f04: scene 1 opens on f03's final frame exactly. Course close (ruling 73, ruling 81): the final frame drops the strand name, shows the stadium at 210 against a dashed 200, the playlist card with nine ticked strand lines, "Year 12 Maths Standard: core videos complete" and "Find every video in the Year 12 Maths Standard playlist", and no "Next" chip; nothing about future videos, exam dates or results. Finding 2 also applies to the on-screen line: "Find the Year 12 Maths Standard videos in the playlist" is safe whatever the release order. Root still confirms the nine strand names against the playlist's real section names (decisions section 9, item 5).

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown. Each feedback gives the answer, the reason and one crossed slip ("another cut is now the smallest"; "the smallest cut sets the flow"); feedback 2 is the longest in the strand at about 29 s, inside the limit.

## Key notes and length

The five notes are short and cover units, sufficiency, widening and reducing, and rechecking. About 493 s with holds; the fixes add about 7 s.

No speech, design edits, builds or commits were made.
