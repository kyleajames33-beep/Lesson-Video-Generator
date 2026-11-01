# m-a12d04 maths check: Revision 1

Independent reviewer: Codex, 1 November 2026. Input SHA256 `20cecb5bec49838971f42a8fffb36dbb08302d22fa4808dbd1a6d321b6d148bc`. Reviewed all narration, Visual paragraphs, notes, attempts, calculations and metadata. No design edits.

## Findings

No mathematical error found. Count: 0 blockers, 0 should fix.

## Recalculation

SymPy independently differentiates ln x/ln a to 1/(x ln a), for fixed positive a other than one. Exact checks for bases 2, 5 and 1/3 give 1/(x ln 2), 1/(x ln 5), and -1/(x ln 3). The change-of-base proof and constant multiple rule are correctly ordered and retain x > 0, a > 0, a ≠ 1. The official point states a > 0; retaining a ≠ 1 is a necessary logarithm condition, not an altered quotation.

Numeric factors: 1/ln 2 = 1.442695040889; 1/ln 10 = 0.434294481903; 1/ln 5 = 0.621334934560; 1/ln 1.1 = 10.492058687257; 1/ln(1/2) = -1.442695040889; 1/ln(1/3) = -0.910239226627. All displayed rounding is correct. At x = 1, 2, 4, log₂ slopes are 1.442695040889, 0.721347520444, 0.360673760222, against 1, 0.5, 0.25: constant ratio 1.442695040889. Base e gives 1 at x = 1.

Triangle: (2,ln 2), (4,ln 2), (4,ln 2+1) scale vertically to (2,1), (4,1), (4,2.442695040889). Run stays 2, rise becomes 1/ln 2 and slope 0.721347520444. For base ten the incorrect slope ln 10 = 2.302585092994 is steeper, contradicting the graph. Dial stops 10,e,2,1.1 have the stated factors; at a = 1.1, y = ±3 occurs at x = 1.331 and 0.751314800902. The dial never evaluates a = 1. Base half is the negative base-two curve with slopes -1.442695040889 and -0.721347520444 at x = 1 and 2. The interim flat fold is correctly treated as animation geometry, not a valid log base.

Worked gradient: 1/(4 ln 2) = 0.360673760222. Attempt 1: 1/(2 ln 5) = 0.310667467280; crossed ln 5/2 = 0.804718956217. Attempt 2: h′(x) = -1/(x ln 3) < 0 for every x > 0, so decreasing. log_(1/3)(3) = -1 and log_(1/3)(1/3) = 1. No answer or sign is revealed on either card.

The memory aid correctly applies a fixed nonzero divisor at the same x; it also handles negative ln a. It does not imply that a is a function of x. Log curves and marked points are restricted to x > 0; extended tangent lines may cross the axis without extending the function's domain.

## Official source and copy checks

Fetched the [official 2024 differential-calculus content](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480) on 1 November 2026 and extracted __NEXT_DATA__ with the existing syllabus helpers. Fresh sourceHtml for ciba8514ff byte-matches the route. The quotation preserves its prose word for word and faithfully transcribes MathML. D03's cib961593d was checked in the same fetch. Raw evidence: work/brief133-official.json. No outgoing 2017 course identity, stale site course labels or U+2014 found in the design.

Narration: 16 scenes, 6086 characters excluding inter-scene joining spaces; 6101 including fifteen spaces. At 13.3 characters/s plus 93 seconds of holds, about 552 seconds, consistent with the stated about 551 seconds. Both conventions stay within 5500 to 6800 and below about 570. This is not measured speech.

Confirmed site items are appended to site-corrections-maths-a12.md, with the repeated distance claim linked to existing item 11 rather than duplicated. Ambiguous log notation is recorded as a clarification request, not a proved false HSC convention.

## Resolution
