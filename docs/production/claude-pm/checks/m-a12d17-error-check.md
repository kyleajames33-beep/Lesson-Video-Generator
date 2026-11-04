# m-a12d17: Brief 144 error check

Reviewed Revision 2, 2 November 2026. Source SHA256 `a0587b2f004c4b1641850321456ef453262ab5821e85ec43643a57e0a4feee3b`. Written design only; no audio or rendered lesson reviewed.

Narration: 6,280 characters, summing scene narration after removing emphasis marks and excluding joins between scenes. Per-scene counts: 573, 404, 574, 458, 365, 547, 593, 581, 557, 251, 204, 301, 237, 313, 247, 75. Estimated duration 567 s, below 570 s.

Brief 142 confirmation: Branchwise monotonicity repaired; computed positive derivative roots are 0.150892, 0.786544, 1.324252 and 1.576538.

## Errors

1. **Should fix:** The first visual explicitly opens on the previous key-notes screen and then clears to the handoff. Decision 16 makes the restored handoff the actual last frame. Open on that restored frame; remove the contradictory key-notes opening instructions from Decisions, visuals and Review notes. This is a silent correction.

2. **Should fix:** The Numbers used row still says the wiggly curve rises on about -0.150 < x < 0.151. The symmetric roots are +/-0.150891934, so ordinary three-decimal rounding is -0.151 < x < 0.151. Other repaired root entries are correct. Use the full roots for the tint.

Changed-value calculations are in `work/brief144/recalculation.json` and `work/brief144/changed-values.json`. Cue words in the edited narration still occur in the scene and keep the stated visual meaning. No em dashes found; no new American spelling found. Exact voiced timing and final built-frame checks remain production gates.
