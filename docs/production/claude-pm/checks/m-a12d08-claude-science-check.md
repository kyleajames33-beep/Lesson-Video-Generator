# m-a12d08 maths check: Revision 1

Checked 1 November 2026, SHA256 7b0e5e275c5ba58d1fc2729162b0ac03c4fcf3df6ee48ddca1613a919c0e88be. Full source proposal read. No design edits.

## Findings

1. Should fix: the unqualified top-push/bottom-pull sentences are not a general quotient rule. Contributions are f'/g and -fg'/g squared. For example f=-1,g=x>0 makes the bottom's contribution positive; f=x,g=-1 makes top growth reduce the quotient. Scope scene 2 to its positive example and replace the general summary as in learning finding 1. Author note(a) is correct.
2. Should fix: scene 8's universal inequality f'g-fg' != fg'-f'g fails when the numerator is zero. Reversing terms always negates it; it does not change zero. Replace the chip and “every slope wrong sign” wording as in learning finding 2. Same applies to the equivalent general wording in feedback1, though nonzero errors are genuinely wrong there.

Count: 0 blockers,2 should fix,0 optional; same two findings as learning.

## Recalculation

SymPy confirms quotient/product derivation and all examples: exp x/(x+1) has derivative x exp x/(x+1) squared, x!=-1; ln x/cos x gives (cos x+x ln x sin x)/(x cos squared x), x>0,cos x!=0; sin x/x squared gives (x cos x-2sin x)/x cubed, x!=0. Raw and cancelled forms agree on the original domain. At1, log/cos gradient1.8508157177 and height0; bottom contribution zero. The degree value1.0001523280 is correctly crossed. Sin/x squared slopes at 1 and pi are -1.1426396637 and -1/pi squared=-.1013211836.

At0 the hook contributions1 and-1 cancel; guess1 and plus-form2 are wrong. At1 contributions1.3591409142 and-.6795704571 give .6795704571. At-2 gradient-.2706705665; at 2 gradient1.6420124664. All WindowA/B/C/D curve values and exclusions agree to displayed rounding. The three log/cos branches split at 0,pi/2,3pi/2 within the window. No joining across exclusions is requested. A1 gives exp x(x+1)/(x+2) squared, x!=-2. A2 (1-ln x)/x squared gives0 at e, height1/e=.3678794412; dividing derivatives gives the crossed1/e. Site sin x/(1+cos x) derivative1/(1+cos x) is correct on its original domain.

Fresh official ci4f1f8ece source HTML saved in work/brief134-d8-official.json matches the quote and its partial quotient coverage. [Official source](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480). Site missing domains/cancellation conditions logged; reciprocal-product wording treated as a method clarification, not a false derivative. Earlier site issues not duplicated.

Narration 5576/5589 characters, about 517 seconds using 97 seconds holds. U+2014 zero. No outgoing course identity. Human listening/exact voiced review pending.
