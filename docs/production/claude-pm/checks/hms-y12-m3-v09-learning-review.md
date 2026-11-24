# HMS Year 12 M3 V09 Revision 1: independent learning review

24 November 2026. Design `lessons/hms-y12-m3-v09.md`, "Who actually runs health in Australia, and how do so many organisations work around one person?" Source SHA256 `08e2d69cefb75a2ce3bace47c762294bbf5dc54d89b01e89de21008b2e008bfe`.

Written design reviewed by tracing it from its stated entry knowledge (hms-y12-m3-v08's six roles, access, continuity and primary care; Year 11 government, non-government organisations and communities as advocates, recalled) as a student starting Year 12 HMS, using `docs/production/student-learning-review.md`, `AGENTS.md` and `hms-design-brief.md`. No built preview, plate inspection, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 notes).

The Friday discharge (six jobs, five employers) is a concrete hook, and the three questions "who pays, who delivers, who sets the rules" give students a tool for any service instead of a list of departments. `FundersMap` computes its line crossings from the tags, so the seams are a consequence students can see, not a label. "Why split it this way?" gives the division a reason (one national payer for an entitlement, local management for hospitals). Scene 4's hospital bed between the hospital and aged care doors makes "ready to leave, nowhere funded to go" visible. The carry test on `PersonRing` (the information pulse routing through the person) is a sharp, reconstructable check, and 8c applies it to an unseen case. The design also avoids the site's practitioner registration error (site correction 27).

## Findings

1. **Should fix, 8a and 8b blur "payer is not provider" with "seam".** Scene 4 defines a seam as a boundary where two funders' lines cross and responsibility blurs. 8a asks whether each funder and deliver split "creates a seam", and 8b answers that home aged care is a seam "beside state-run hospitals". A student who answers "federal pays and a not-for-profit delivers, so payer and provider differ, and that alone is a seam" is applying the wrong rule but the feedback appears to confirm it; a student who answers "one funder, one deliverer, no crossing, so no seam" is arguably right by scene 4 and hears otherwise. Fix the demand: "explain whether it sits at a seam with another part of the health system". Fix 8b's second sentence: "On its own, that split isn't a seam. The seam is where it meets the state-run hospital, where discharge delays happen." (about 2 s). Students should hold one definition of a seam.

2. **Note (science check, currency), home aged care funding.** Since Support at Home began on 1 November 2025, home care participants make means-tested contributions. "Federally funded" remains the main answer, but "mostly federally funded, with means-tested contributions from the person" is accurate for 2026 and does not change the classic mistake. The design correctly avoids the retired program name (site correction 28).

3. **Note, scene 2 carries three government levels, a reason for each and a worked trace.** Roughly fifteen chips and three tags land in one scene. The trace of a GP visit ("Medicare pays, and a private practice delivers it") is the payoff; dim the federal, state and local chips to grey before "So trace a GP visit" so the GP door and its tags are the only bright items.

4. **Note, two recurring models in one video.** `FundersMap` and `PersonRing` are both introduced here. Each owns its own half (structure, then person), and the handoff keeps the funders map, so this works; keep the ring's six nodes identical to the map's six doors so students see they are the same services.

## Practice and feedback

Both cards stay on screen through the countdown. 8a's picture is two blank doors with empty tags; 8c's is the ring with dark links, neither showing an answer. 8b (about 27 s) crosses "not-for-profit = privately paid"; 8d (about 27 s) crosses "staff should be kinder" with "structure, not manners". Both items are unseen.

## Join

v08 to v09 matches (the open hospital doors onto five doors with empty funder tags). v09 to v10 matches v10's opening (the funder column sliding into one "health spending" bar with empty "treat" and "prevent" segments).

## Reading load and memory

Scenes 3 and 6 each carry ten or more small chips, held by boxes and bands. Organisations are described by kind, as the owner rule requires. "The payer is often not the provider" is taught with its exception (the council inspection), which is good practice. No figures on screen; no em dash.

No speech, design edits, builds or commits were made.
