# m-a12d10 maths check: Revision1

Checked 1 November 2026. SHA256 7744c4da51f34da0c0ee816594e1219709bf8ebe6950429c08be74c31bed9a56. Read narration, shots, tables, calculations and metadata. No design edits.

## Finding

Should fix: continuity on a closed interval guarantees extrema, but the complete interior candidate set is f'=0 OR f' undefined. Undefined derivatives are not confined to sharp corners. For abs(x)^(2/3) on[-1,1],0 is the global minimum at a cusp. Broaden “corners” to all interior nondifferentiable points as in learning finding 1, while retaining the simple corner example. No general differentiability lesson is requested. Source: [OpenStax critical points and closed-interval extrema](https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima).

Count: 0 blockers,1 should fix,0 optional maths findings, shared with learning. The separate coded-motif build correction is learning finding 2.

## Recalculation

SymPy confirms every derivative and candidate: x cubed-3x gives values-2,2,-2,18 at-2,-1,1,3, so max18 at 3 and tied min-2 at-2 and1; endpoint slope24. The ceiling at 2 fails and at 18 supports the whole graph; floor-2 touches twice. The corner abs(x-3) gives3,0,7 at 0,3,10 and one-sided slopes-1,+1. x+4/x derivative1-4/x squared has roots+/-2, only+2 admissible; values17/2,4,5 at 1/2,2,4, max17/2 at 1/2,min4 at 2, endpoint slope-15. No zero-domain issue lies inside that interval.

The exponential transfer exp(-x)(1-x) yields0,1/e,3/e cubed at 0,1,3: 0,.3678794412,.1493612051. A1's values0,-16,-9 at 0,2,3 give max0,min-16; rejected-2 gives16 outside the interval. A2's derivative exp x-2 vanishes at ln2=.6931471806; values1,2-2ln2=.6137056389,exp2-4=3.3890560989 give the stated exact winners. All window, fencing, box, optimiser and listed site-check numbers agree: fence 200,box 1024,box second derivative-96,open-box 16000/27,drill minimum-3 and maximum6,practice Q1 values0,5,4,9,physical Q2 area 3750. Site“other endpoint not even second” is false because5>4.

Fresh official cif819815e,ci7e542996,ci4a528415,ci5668f984 wording and HTML saved in work/brief134-d10-official.json match each design quote. Partial optimisation coverage is explicit. [Official Applications content](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104). Closed finite interval/unbroken curve conditions are visible; discontinuous/open domains are deferred, not falsely solved by a finite candidate list.

Site correction2 needs a convention note, not an unconditional falsehood verdict: with two-sided local extrema, endpoints are separate; with neighbourhoods relative to the domain, every global extremum is also local. The site's statement should name its convention. An endpoint being nonstationary alone does not settle the definition. Keep the lesson's practical distinction between nearby interior turning points and endpoint winners. Other confirmed site issues logged.

Narration 5616/5629 characters,about 513 seconds using 90 seconds of holds. U+2014 zero; no outgoing course identity used. Exact voiced timing and human listening pending.
