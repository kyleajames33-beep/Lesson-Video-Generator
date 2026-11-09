# Maths d06 Revision 3: independent maths check

Codex, 8 November 2026. Source SHA256 `77eba193ac278edf034234f9efdc1d750ff0d18801412607b7e5ac12195598db`. Reviewed new bike anchor and changed scenes 1 and 3, simulation values, counts and joins. No source or speech edits.

Result: 0 blockers, 0 mathematical should-fix findings, 0 optional. Two visual-specification findings, one shared with d05, are recorded in the learning report.

Independent derivatives and numerical checks: `work/brief235/d06-calculations.json`. For unit crank length and angle x squared, the height is sin(x squared), angular rate is 2x, and height rate is 2x cos(x squared). The 0.5, 1 and 1.5 stops give true slopes 0.968912, 1.080605 and -1.884521 against outside slopes 0.968912, 0.540302 and -0.628174, with ratios 1, 2 and 3. Central differences agree to the stated precision. x is a scaled time unit, so these are comparison rates, not a claimed real cycling cadence.

The sweep crosses x = sqrt(pi/2) = 1.253314, where both slopes are zero and their quotient is undefined. The source explicitly requires that no ratio is displayed there and scopes the quotient to nonzero cos(x squared). That requirement must apply between stops as well as at them. The inside factor 2x remains defined; displaying that factor is different from dividing zero by zero. No new narrated value is needed.

The finite-change chain, exponential/sine contrast, log-cosine domain, cosine composite, both attempts and handoff height agree. Domain restrictions remain attached to the original logarithm, including absolute x > 3 for ln(x squared minus 9).

Fifteen scene strings sum to 5905 characters; changed scenes contain 433 and 692. No em dashes. The per-scene estimate sums to 517s, under 570; changed takes remain to be timed. New bold stops appear in spoken order. The outgoing e-to-the-x times sine-x frame matches d07's opening. The incoming d05 colour discrepancy is 235-J05 in the learning report.

Written-source check only. Artwork pivots, continuous readouts, exact voiced cues, playback and listening remain pending.
