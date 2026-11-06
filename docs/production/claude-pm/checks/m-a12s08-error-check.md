# m-a12s08: Brief 171 error check

Revision 2, checked 5 November 2026. Source SHA256 `44e869219946cab80d0dea3c76d2babbd2882d7a4c5adec060ecaa36138da79d`. Compared with both brief 161/162 reports, root decisions 54 to 66 and the source at f4c643ed^. This is an error-only source review; no design edits.

Narration: 5,541 characters excluding scene joins; 5,554 including joins; 14 scenes. Estimated 519.6 seconds using the prior estimate plus changed narration at 13.3 characters/s, with unchanged holds. No measured audio. No U+2014 or U+2061; no checked American spellings or requested people, hands or faces in artwork.

## Repair confirmation

The spoken instruction now includes limits, weighted integrand, result and application used. The integrals give mean pi/2 and variance pi squared/4 minus 2. Two screen/handoff repairs remain below.

The opening and preceding handoff agree in their source descriptions, with the shared notes-to-handoff return rule. The simulated-data label needs the linked handoff repair reported under s08. This does not establish rendered-frame identity. The changed visual cues were checked against speech and their event order.

## Errors

1. **Should fix:** Scene 7 still displays "the marks are in the set-up" after that unsupported marking claim was removed from speech. Replace the screen tag with the existing instruction to show limits, weighted integrand, result and tool. No narration addition.

2. **Should fix:** The scene 13 handoff presents "a thousand bottle fills from one filling machine" and its histogram without the simulated label that s09 adds at its opening. Label this same dataset simulated in the handoff and its notes return, and replace the spoken introduction with "a thousand simulated fills". Cut "from one filling machine" to fund the change. Carry the label into the matching s09 opening.

Count: 0 blockers, 2 should fix. Evidence: work/brief171/audit.json and work/brief171/recalculation.json (SymPy). Listening, exact cue timing and playback remain unchecked.
