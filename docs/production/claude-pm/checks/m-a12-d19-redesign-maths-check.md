# Maths d19 Revision 3: independent maths check

Codex, 9 November 2026. Source SHA256 `2cf0fb1d074bf476703cd28d35bba1a7379dc4b026bc6b007a2b32f7793c0760`.

Result: 0 blockers, 1 should fix, 0 optional.

Should fix 238-D19-ASYMPTOTE-SCOPE, key note4: "Asymptote Q = 0" omits the k≠0 condition, although scene4 explicitly includes k0 on the dial. With A2,k0 the function is constantly2 and approaches2,not0. Author note(b) already states k≠0 and A≠0, but the learner summary does not carry that scope. Keep the constant case distinct from the growth/decay asymptote. No source change made; the ordinary nonzero-k worked examples remain correct.

CAS/numerical results: work/brief238/check-d19.py and d19-calculations.json. Differentiating Ae^(kt) gives kQ identically and Q(0)=A. The continuous car model gives rate/value=-0.15 per year, initial rate-4500,half value at4.620981years with rate-2250,value9035.826after8 and3673.693after14 with rate-551.054. Its annual factor is0.860708. This checks the stated continuous proportional-rate model, not a discrete0.85 yearly multiplier. The author states the continuous assumption; no real-car forecast is inferred.

The continuous savings example gives8080.372after8. The positive/negative-k sweep values0.271,0.736,2,5.437,14.778 agree. The town fit is ln1.2/5=0.03646431; doubling takes19.008920years,while rounded k0.0365 gives18.990334. The exact calculation reaches the threshold during2029; the five-year ladder10000,12000,14400,17280,20736 agrees.

The12-year half-life gives k=-ln2/12 and200×2^(-5/2)=25√2=35.355339g after30years. All half-life ladder amounts agree. Attempt1 gives k=ln2/10 and1600√2=2262.7417,rounding2263 rather than chord midpoint2400. Attempt2 leaves25g and rate-5ln2=-3.465736g/year; using the initial mass would give-20ln2=-13.862944. All rate units, signs and stated rounding agree.

Live site verified 9 November 2026: https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson02.sa . Used ordinary Next navigation, then revealed all three steps of we-1,we-2,we-3. The5000/6%/8-year savings,200g/12-year half-life/30-year amount,and10000-to12000 town data match. The site uses rounded k in later steps; the design preserves exact k and documents the resulting difference. No answer fields submitted; navigation/reveals automatically mark progress. The site's pandemic hook and separation-of-variables explanation are not imported into this design.

6352characters/15scenes,cue order and no em dashes checked. Approximate556s remains unmeasured. Alignment,captions,45s notes and machine listening follow later. Human listening and exact voiced student review pending. No narration, scene code or measured files edited.
