# math-a12 t04, g01, g02, g03: grade round 1 (root, 20 November 2026, 00:10)

The four lessons have scene code, pass their type checks and are registered (commit f5f674c2). The first `npm run grade:explainer` on 19 Nov at 23:48 failed all four. The build agents stopped at the weekly usage limit, which resets 24 Nov at 5 am, before editing anything. **Resume them with SendMessage, or fix by hand, to reach grade A.** Use the stills lock `work/brief245/root/stills.lock` and never run stills while voicing runs (voicing runs daily from 19:00).

Agents to resume: the t04/g01 build agent and the g02/g03 build agent (this session's ids).

## t04 (1 failure, 5 warnings)
- **FAIL:** scene 4, frame 3066. The star-brightness log axis labels ("10⁻⁷" and onward) run off the right edge.
- **Scene 10's memory card:** an empty black rectangle at the top right. It also appears on the key-notes card in scene 16, probably a plate that did not load. Fix it or remove it.
- **Sparse frames:** scenes 5, 12 and 13. Scene 13 is the "Last one" question: the card is small, with a 67% bare frame, so show both data sets' pictures larger.
- **Scene 6:** 25 px "library" label.
- **Scene 8:** "10⁻⁴" collides with itself.

## g01 (3 failures, 3 warnings)
- **FAIL:** scene 3, frame 2189, is almost blank (a heading and three chips). Fill it with the board or graph and the decision tree.
- **FAIL:** scene 6, frame 4815, and scene 12, frame 10962, are mostly empty. Show the curve and the given point larger from the start.
- **Scene 1:** the question text is faint and overlaps the plate and calculator. Give it a solid card at full contrast.
- **Throughout:** the graphs, working and calculator are drawn too small, with big margins. Scale them up (current line at 44 px or more, readouts about 52 px).
- **Memory-aid card (scene 9):** a large, mostly empty box with tiny plates. Size the card to its content.
- **Sparse:** scenes 7 and 8.

## g02 (1 failure, 5 warnings)
- **FAIL:** scene 2, frame 1312, is mostly empty (63%).
- **Collisions:** "2.40" with "volume V" (scene 4); "area = 2 + 2 = 4" with "y = e^(−x²)" (scene 7).
- **Sparse:** scenes 1, 9 (a question frame, so show its picture) and 10.

## g03 (1 failure, 6 warnings)
- **FAIL:** scene 2, frame 1349, is mostly empty (79%).
- **Collisions:** "530k" and "489k" with "100" (scene 3).
- **Sparse:** scenes 4 and 11. The question frames in scenes 8 and 10 are 65% bare.

Reports and sheets: `out/explainer/Explainer-math-a12-<id>/grade/`.
After grade A: add the four keys to brief 245, then `render-one.sh <key> v1`, the sample check and `queue.py`, as for t01 to t03.
