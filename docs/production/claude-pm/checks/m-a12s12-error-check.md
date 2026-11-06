# m-a12s12: Brief 171 error check

Revision 2, checked 5 November 2026. Source SHA256 `29e4534b3a68668cef5117fc2be202212ad20dbbc8f3ff13e209b87c001ac163`. Compared with both brief 161/162 reports, root decisions 54 to 66 and the source at f4c643ed^. This is an error-only source review; no design edits.

Narration: 5,302 characters excluding scene joins; 5,316 including joins; 15 scenes. Estimated 500.2 seconds using the prior estimate plus changed narration at 13.3 characters/s, with unchanged holds. No measured audio. No U+2014 or U+2061; no checked American spellings or requested people, hands or faces in artwork.

## Repair confirmation

Both principal numerical repairs pass: 380.16 g gives tail 0.00494001576, while 380.15 g gives 0.00501200433. The 508.64 mL table setting gives 0.00990307556. Attempt 1 now asks for an approximate table-based answer: 1006.15 g, with 1006.16 g accepted from an unrounded inverse normal. The feedback trim is applied. The rounded boundary wording below remains.

The opening and preceding handoff agree in their source descriptions, with the shared notes-to-handoff return rule. This does not establish rendered-frame identity. The changed visual cues were checked against speech and their event order.

## Errors

1. **Should fix:** Scene 5 and the Numbers used table call the rounded app value 508.61 the exact boundary, and the tailTarget check uses that endpoint for a target of 0.01. The actual boundary is 508.61078299233; 508.61 gives tail 0.01000260885. Label the display approximately 508.6108, use the unrounded value internally, and keep 508.64 explicitly safe. Ensure the leftward nudge crosses the actual boundary before showing "more than 1%". Also update the boundary summary's unrepaired 380.15 conclusion to the existing 380.16 setting. All are screen/author changes, with no new narration.

Count: 0 blockers, 1 should fix. Evidence: work/brief171/audit.json and work/brief171/recalculation.json (SymPy). Listening, exact cue timing and playback remain unchecked.
