# Maths Standard Y11 n06 Revision 1: independent learning review

24 November 2026. Source `lessons/math-s11-n06.md`, SHA256 `dc903658644178d5c8687ccf467aa7ab9b20a40637ffef03e7514d9c4f543e4c`. Written design and narration reviewed. No built preview, plate inspection, playback or human listening is claimed.

Result: 0 blockers, 0 should fix, 1 note. Verdict: ready for the maths check.

Traced from n05's depot frame (entry: paths, route totals, directed weighted networks). The hook lets the eye pick S–A–T (10 min) and the method then finds a four-road route at 8 min, a real surprise that is shown, not told. The "split and spread" race explains why the smallest label can be locked before any steps are listed, and its arrival stamps (B 2, A 3, C 6, T 8) match the later table exactly, so the simulation and the method confirm each other. Labels are crossed when beaten, so updates are visible. "–" instead of infinity suits Standard students (root ruling). Trace-back is explained as "which neighbour plus which edge made this label". The one-way bus network shows arrows changing the route (A → C → B at 5 beats A → B at 8). The 10-vertex limit is stated. Both attempts are unseen; A2 has 7 vertices and needs the method rather than a glance.

Every value recalculated by listing all simple paths: van S → T 8 (S–B–A–C–T), next 9; bus A → E 15 (A–C–B–D–E), next 16; A1 P → S 7 (P–R–Q–S), slips P–R–S and P–Q–S both 9; A2 A → G 15 (A–B–C–D–E–G), next 16; slip A–C–E–G = 19. The lock orders in each table match. All correct.

Year 12 set-up: c03's "Year 11: shortest path (a different question)" needs "shortest path" defined as the least total weight between two vertices, with no critical path mentioned. Met (scene 4 and the card).

## Note

**N06-WHY, scene 2, "Any other route to it would have to pass through a stop that's already further away."** The smallest unlocked label is final because any other route must pass through some other unlocked stop, whose label is already at least as big, and weights are never negative. "Already further away" is close, but a student may ask "further than what?". Suggest: "any other route would have to go through a stop that's already at least as far, and then travel further still". Optional; the race picture carries the idea.

Anchors (a delivery van, a town bus, a cyclist, a toll sign) are everyday; no em dash. The method's name is not used, as ruled.
