# Maths Standard Y11 n05 Revision 1: independent learning review

24 November 2026. Source `lessons/math-s11-n05.md`, SHA256 `ae487c6517a2504a48d60a6e89ae71b8a6cacc994d3e5c6da5198ff5ebf3998e`. Written design and narration reviewed. No built preview, plate inspection, playback or human listening is claimed.

Result: 0 blockers, 1 should fix, 1 note. Verdict: ready for the maths check after the should-fix.

Traced from n04's tower frame (entry: cycles, spanning trees, the MST defined; weights). The method is given a reason before it runs: a link that closes a cycle joins towers that are already connected, so it is never needed, and the builder flashes the very cycle each skipped link would close. "Stop at n − 1" reuses n04's check. Running past the fourth link to show why the rest are skipped is good teaching. The cost counter ($350,000 against $875,000) makes "minimal connector problem" concrete. Prim's is shown once with the same 14 km, which supports "any method" without teaching two methods in full. Closing n04's open question on the camp (the 150 m bar turns green) rewards the student who remembered it. Both attempts are unseen, carry all weights, and A2 says "use any method".

Every value recalculated: towers sorted 2, 3, 4, 5, 6, 7, 8; kept C–D, A–C, D–E, B–C = 14 km; skipped C–E (C–D–E), B–D (B–C–D), A–B (A–B–C); all links 35 km; 14 × 25,000 = 350,000; 35 × 25,000 = 875,000; Prim from A gives A–C, C–D, D–E, C–B = 14 km; 21 spanning trees, minimum 14 (unique; next 16). Camp kept 30, 35, 40, 45 = 150 m; all paths 330 m. A1 Q–R 5, R–S 7, P–R 8 = 20 km (unique; next 23). A2 D–E 2, B–C 3, A–C 4, C–E 5, E–F 7 = 21 km (unique; next 22). All correct.

## Should fix

**N05-TIE, feedback 2.** The A2 network has two links of weight 7, A–B and E–F. The feedback goes from "B D six ... skip it" straight to "E F seven, keep" and never mentions A–B 7. A student working "cheapest first" reaches A–B 7 at the same step and will ask whether to keep it, or think they have miscounted. Fix: add "A B seven would close A, B, C, so skip it. E F seven brings in F, so keep it", and show both 7s in the sorted list with A–B greyed. This also shows what to do with equal weights. Feedback should stay under 30 s (it is about 28 s now, so trim "because it joins the two groups" if needed).

## Note

**N05-DIRECT, scene 4 visual, "On 'not always by the most direct route' the tree route A → C → D → E glows teal".** There is no direct A–E link, and the alternative A → C → E is also 9 km, so the picture does not show a less direct route. In this network every skipped link ties with its tree route (A–B 8 against A–C–B 8, B–D 7 against B–C–D 7, C–E 6 against C–D–E 6), so no pair shows a longer trip. Either show A → C → B (8) beside the unlaid A–B (8) as "the long way round, the same length here", or drop the clause and leave the contrast to n07, which has a true example. Optional.

Anchors (phone towers, a country town, the camp, a water and a gas pipeline) are everyday; no em dash. Kruskal and Prim are named once, as root ruled.
