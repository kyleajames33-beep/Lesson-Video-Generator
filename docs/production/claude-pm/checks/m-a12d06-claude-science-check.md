# m-a12d06 maths check: Revision 1

Checked full written design, 1 November 2026. SHA256 15c16f2f9385bb3f7179d0cc4d6f4aaad619955944140f3ffa247713ed16c1e2. No design edits.

## Finding

Should fix: scene 9 infers positive log input from the reciprocal outside slope. 1/u exists for u<0; ln u does not. Use the shorter replacement in the learning review. All other domain statements correctly require positive input and retain it after simplifying. Count: 0 blockers, 1 should fix, 0 optional, shared with learning.

## Recalculation

SymPy confirms all four composite families and every worked derivative: sin(2x)'=2cos(2x); sin(x squared)'=2x cos(x squared); exp(sin x)'=exp(sin x)cos x; ln(cos x)'=-sin x/cos x on cos x>0; cos(x squared+1)'=-2x sin(x squared+1); sin(exp x)'=exp x cos(exp x); ln(x squared-9)'=2x/(x squared-9) on |x|>3; sin(ln x)'=cos(ln x)/x on x>0; exp(x squared)'=2x exp(x squared).

At .5,1,1.5 the sin(x squared) slopes .9689124217,1.0806046117,-1.8845208682 have ratios 1,2,3 to the stated outside values. The rate-chain change is .0106893695 and finite quotient 1.0689369476, approaching 2cos1=1.08060461. .0201*cos1=.01086007635. The approximations are correctly distinguished from the exact derivative. exp(sin x) heights range 1/e=.3678794412 to e=2.7182818285, with zero slopes at pi/2 and 3pi/2, gradient -1 at pi. ln(cos(pi/4))=-.3465735903, slope -1. Cosine composite at 1 gives -1.8185948537 and height -.4161468365. Attempts: 8/7 at 4 and .625 at 5 for A1; A2 cos1/e=.1987661103. Product handoff height exp(pi/2)=4.81047738097. All tables, crossed answers and rounding agree.

Fresh official source HTML for ci3eebb8d2, ci004fc1ed, ci04cbaf6f and ci4f1f8ece is saved in work/brief134-d6-official.json. The design transcribes each faithfully and explicitly limits partial coverage. [Official Year 12 content](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

Root decision 5 settled: no double-angle identity point is present in fresh Advanced Year 11 trigonometric content or the Year 12 content ledger. Official Year 11 sources fa0b724fc5 and fa6bc41678, exact HTML in work/brief134-trig-official.json, include related-angle/radian/graph work, not the claimed double-angle requirement. Thus no Advanced point can be quoted for it. The identity 2sin A cos A=sin2A is true; the site result 3sin6x is valid but should be an optional known-identity form, with 6sin3x cos3x accepted. No false derivative is logged.

Site HTML checked; missing log/square-root derivative domains, tangent definition and unsupported universal claims logged; prior item 16 preserved. Narration 5602/5616 characters, approximately 512 seconds using 90 seconds of holds. U+2014 zero. No outgoing course identity. Human listening and exact voiced review pending.
