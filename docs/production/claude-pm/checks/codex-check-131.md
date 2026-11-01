# Brief 131: error-only check of math-a12-d01 Revision 2

Checked 1 November 2026. Input SHA256 `869a5b0aebca126daac81919b1e37332d5e684be4db285db5c176592ee3b1568`. Read all narration, Visual paragraphs, attempts, notes, calculations and metadata against brief 130 and its resolution. No design edits, speech, renders or commits.

## Error 1: scene 6 summary strip retains the unqualified shorthand

The final learner-visible strip still says “squash by a: slopes × a” and “slide: no change”. Brief 130 repaired the same generalisations in the key notes and spoken summary, but this repeated screen summary was missed. A value 0<|a|<1 stretches, not squashes, and a slide changes the derivative at a fixed x even though it preserves the slope at the moved point. Replace these two labels with “x → ax: slopes × a (a ≠ 0)” and “slide: no extra factor”. Keep “stretch by k: heights and slopes × k”. No extra narration or time. Source: the design's own author note (a), its repaired key note 2, and the chain-rule/translation identities in [OpenStax](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions). Scene 5's author heading “the slide changes nothing” can be renamed “the slide adds no factor” to prevent reuse of the old phrase; it is not itself a learner-facing error.

## Repairs and remaining checks

Brief 130's three main repairs are present: the main question, metadata and hook chip no longer say the derivative stays the same; scene 10 says “it adds no rate factor”; scene 15 says “a slide adds no factor”. Scene 5 explicitly keeps each tangent's slope at its moved point. Key note 2 uses 1/|a| with a mirror for a<0 and a≠0, correctly scopes gradient=a×height to y=k e^(ax+b); key note 5 limits its negative-gradient/positive-height claim to y=e^(ax+b). Apart from the strip above, no new mathematical or numerical error found.

The changed narration does not strand a quoted cue. Scene 10's cue “different point” still exists; the later “together” and “a” remain. Scene 15's “Next” remains. The underlying calculations are unchanged and rechecked: e=2.7182818285, slopes 2e=5.4365636569 and 3e=8.1548454854 at matched heights; reflection changes the sign; example 1 gradient 3 at zero; example 2 derivative 10e^(2x+6), value 10 at -3 and height 5; attempts give 8 and -6. Both cards retain all givens and demands.

The two syllabus points ci8306d30a and ci4380403a were freshly checked in official __NEXT_DATA__; sourceHtml byte-matches the prior ledger and the design's linear transcriptions are faithful. [Official 2024 Year 12 content](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480). No stale course labels or U+2014 found.

Narration has 16 scenes with counts 436,470,592,497,591,480,544,492,509,441,120,309,178,351,249,75: total 6334 excluding inter-scene joining spaces, 6349 including fifteen joining spaces. This is within 5500 to 6800. The header's 6350 differs by one character, not a material production failure. At the design's 13.3 characters/s plus 93 seconds of holds, the estimate is about 570 seconds (570.37 using joining spaces). This is not measured audio or an exact voiced-runtime pass. Old Revision 1 counts are expressly historical; use the current counts when building.

Error count: 1 grouped learner-screen summary error. Claude owns the repair. Human listening and exact voiced preview remain pending.


## Resolution (root, 1 November 2026)

All findings applied as given (the scene 6 narration uses the reviewer's exact wording). Template finding 1 (keep exact identities and put rounded values only in approximate readouts) and 2 (keep exceptional cases in memory summaries) apply to d03 to d10.
