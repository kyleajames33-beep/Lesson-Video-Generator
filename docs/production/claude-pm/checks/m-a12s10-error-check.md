# m-a12s10: Brief 171 error check

Revision 2, checked 5 November 2026. Source SHA256 `68eb8e80a5c170ea13cd532a9641238cf845071243d8adf31e7d4d899e6b278f`. Compared with both brief 161/162 reports, root decisions 54 to 66 and the source at f4c643ed^. This is an error-only source review; no design edits.

Narration: 6,029 characters excluding scene joins; 6,045 including joins; 17 scenes. Estimated 555.8 seconds using the prior estimate plus changed narration at 13.3 characters/s, with unchanged holds. No measured audio. No U+2014 or U+2061; no checked American spellings or requested people, hands or faces in artwork.

## Repair confirmation

The 196 cm sentence now distinguishes the tail beyond 194 cm from the smaller tail beyond 196 cm. The repeated spoken 2 sigma squared check is removed from feedback 2. The source table and one cue remain inconsistent.

The opening and preceding handoff agree in their source descriptions, with the shared notes-to-handoff return rule. This does not establish rendered-frame identity. The changed visual cues were checked against speech and their event order.

## Errors

1. **Should fix:** The Numbers used heights row still groups 194 and 196 under approximately 0.15%. At N(170, 8 squared), the exact upper tails are 0.001349898 at 194 and 0.000577025 at 196. Update the author table to distinguish those thresholds, matching the repaired scene 9. No speech change.

2. **Should fix:** Scene 9 changes graphs on "Now the underfilled", absent from its narration, which says "Now underfilled bottles". Use that existing phrase as the cue. No duration change.

Count: 0 blockers, 2 should fix. Evidence: work/brief171/audit.json and work/brief171/recalculation.json (SymPy). Listening, exact cue timing and playback remain unchecked.
