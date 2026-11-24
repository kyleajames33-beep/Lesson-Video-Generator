# Maths Standard Y11 n07 Revision 1: independent learning review

24 November 2026. Source `lessons/math-s11-n07.md`, SHA256 `cb34a8f6622d8c2f55ff98f57a06cfde8abb3b91e9d9d0576db08187c974a57f`. Written design and narration reviewed. No built preview, plate inspection, playback or human listening is claimed.

Result: 1 blocker, 0 should fix, 0 notes. Verdict: replace attempt 1 before the maths check.

Traced from n06's toll frame (entry: shortest paths, minimum spanning trees, time = distance ÷ speed, decimal hours). There is no site lesson (MSY-32); the design covers both halves of the point. "A shortest path minimises one kind of weight" is the causal anchor, and it is shown three ways: removing the toll edge and re-running, the km-to-minutes toggle that swaps the winner (a true visual surprise), and a gallery of things the weights do not record. The MST half uses a triangle with a unique MST first, so "not in any minimum spanning tree" is literally true, then the camp (70 m through the lit tree against 60 m in the dark), which reuses n05's answer and ends on a fair trade. The memory aid comes after both ideas. A2 is unseen and tests the MST half.

Every value recalculated by listing: toll network A → D 18 (A–B–D), 21 (A–C–D), 22, 23; triangle MST {AB, BC} = 6, unique, shortest A → C = 5; camp MST unique (n04), A → C in the tree 70 m, shortest 60 m; 12 ÷ 50 = 0.24 h = 14.4 min; 15 ÷ 100 = 0.15 h = 9 min; A2 MST {R–S, P–Q, Q–R} = 11 (unique; next 13), shortest P → R = 6 against P–Q–R 8. All correct.

## Blocker

**N07-A1, attempt 1 is the scene 2 worked example.** It uses the same network, the same weights, the same toll edge and the same question ("shortest path from A to D for a driver who won't use the toll road"), with the same answer (A–C–D, 21 km), which the hook, scene 2 and the handoff frame have all shown. A student can answer from memory, so it is not a thinking opportunity, and it breaks the unseen-practice rule. Fix: give A1 a fresh network and a different reason to avoid an edge. A checked example: "Edges (km): P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3. The road Q–S is flooded. Find the shortest open path from P to S and its length." Without the flood the shortest is P–Q–S (11 km); with Q–S closed it is P–R–S (14 km), ahead of P–Q–R–S (15 km), and unique. Crossed slip "P–Q–S, 11 km" (caption "Q–S is flooded"). The student should apply "remove what this trip can't use, then find the shortest" to a case they have not seen.

Anchors (a toll road, a motorway, a flood, a hill, a camp) are everyday; no em dash. The d01 join is confirmed by d01.
