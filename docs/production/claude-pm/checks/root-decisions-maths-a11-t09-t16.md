# Root decisions: Year 11 Maths Advanced t09 to t16 (designer's file, 17 November 2026)

Designer's decisions file for the first-revision designs `lessons/math-a11-t09.md`, `t10.md`, `t11.md`, `t12.md`, `t13.md`, `t14a.md`, `t14b.md`, `t15a.md`, `t15b.md` and `t16.md` (trigonometry: arcs and sectors, the three graphs, the reciprocal ratios, complementary angles, the Pythagorean identities and proofs, trig equations). Inputs: packs `pre-design/maths-a11/math-a11-t09.md` to `t16.md` (brief 243), `programme/maths-a11-route-inputs-4.json`, `checks/maths-a11-kit-needs.md` (trigonometry section), `site-corrections-maths-a11.md` section 7, the t01 to t08 designer's file (`root-decisions-maths-a11-t01-t08.md`, for t08's final frame, plates and colours), and the accepted Year 11 designs and rulings. Text only: no speech, build or commit. Numbers rechecked with SymPy 1.14 and numerical root scans (scratchpad `t/verify.py`); Codex's maths check remains the authority.

## Summary

| Design | Main question | Characters | Seconds (with holds) | Anchor |
| --- | --- | --- | --- | --- |
| t09 | How do radians simplify arc length, sector area and segment area? | 5,731 | about 522 | t08's pizza (reused); a round drop-leaf table |
| t10 | What do the graphs of sin, cos and tan show about their behaviour? | 5,827 | about 535 | a tuning fork's pure tone on a phone tuner; a torch along a fence (tan) |
| t11 | What are sec, cosec and cot in a right-angled triangle? | 5,934 | about 539 | a backyard flying fox |
| t12 | How do the reciprocal ratios extend to any angle, and where are they undefined? | 5,191 | about 481 | a floodlight on a tilting bracket |
| t13 | Why does a ratio of an angle equal the co-ratio of its complement? | 5,862 | about 532 | a road sign's diagonal brace |
| t14a | Where do the Pythagorean identities come from, and how do they give one ratio from another? | 5,176 | about 480 | a mixing desk's pan knob |
| t14b | How do we prove further trig identities? | 5,044 | about 470 | a graphing app's visual surprise (pure-proof lesson); t04's clock in the handoff |
| t15a | How do we find every solution of sin θ = k, cos θ = k or tan θ = k in a domain? | 5,205 | about 482 | t04's wall clock, now with a minute hand |
| t15b | How do we solve trig equations with a multiple angle, like sin 2θ = k? | 4,723 | about 446 | the wall clock over two hours |
| t16 | How do trig equations that reduce to quadratics get solved? | 5,346 | about 493 | an impossible phone battery reading |

All ten are under 570 s with holds (key notes 45 s each), counted by script (lines starting "> " inside each `### N.` scene, `**` removed) at 13.3 characters per second. No em dash in any file. Every bold cue is quoted in its scene's Visual (checked by script).

## Splits

**Split 1: t14 → t14a and t14b.** One video could not hold the three proofs, finding a ratio with the quadrant sign, simplifying, and proving further identities with their layout, one reasoning stage at a time, under 570 s (the two halves together run to about 10,200 characters). Following the pack's suggested line:
- **t14a** "Where do the Pythagorean identities come from, and how do they give one ratio from another?": `cif79ffa41` in full, and `ci1ff2042e`'s "solve problems" and "simplify expressions" by substitution (one ratio from another, the quadrant choosing the sign; one simplification). Starts on t13's final frame (the circle with x² + y² = r², "divide every term by r²?"). Ends on a coded graphing app showing tan x + cot x and sec x cosec x as one graph, "is that a proof?".
- **t14b** "How do we prove further trig identities?": `ci1ff2042e`'s "prove further trigonometric identities using substitution and/or reduction to sin x and cos x", plus simplifying with a stated restriction and disproving by one counterexample. Starts on t14a's app frame. Ends on the wall clock for t15a.
- Both cite `ci1ff2042e` and mark it shared. Outline order 71 is shared ("first part", "second part"); the ids and playlist numbers are root's to set (open question 1).

**Split 2: t15 → t15a and t15b.** Single angles (degrees, radians, exact and calculator, rearranging) and multiple angles (widening the domain) together ran to about 9,900 characters. Year 12 t02 and t03 lean on both, so neither was cut. Following the pack's suggested line:
- **t15a** "How do we find every solution of sin θ = k, cos θ = k or tan θ = k in a domain?": `ci84d04f4e` for single angles, degrees and radians, with a calculator in radian mode and the sin x = cos x rearrangement. Starts on t14b's clock frame. Ends on the clock over two hours with "sin 2θ = 0.5: two laps too?".
- **t15b** "How do we solve trig equations with a multiple angle, like sin 2θ = k?": `ci84d04f4e` for multiple and half angles (widen or shrink the domain, solve, undo; count the waves), with a radian calculator example. Starts on t15a's two-hour clock frame. Ends on "2 sin² θ − sin θ − 1 = 0", "call it s?" for t16.
- Both cite `ci84d04f4e` and mark it shared. After both, students can solve trig equations in degrees and radians with the calculator in radian mode, as Year 12 assumes.

**Not split: t12.** The pack offered t12a and t12b. The draft teaches the circle definitions, the five identities with their exclusions and the exact values in about 481 s with one stage per scene, so it stays one video (t12 open decision 1 names the fallback).

## Joins (each final frame is the next design's opening frame)

| Join | Frame |
| --- | --- |
| t08 → t09 | t08's scene 13 exactly, as the t01 to t08 file describes: the pizza `ma11-pizza-top-v1.png` with one slice outlined, its teal crust, "45° = π/4", "r = 20 cm"; chips "whole crust: 2π × 20 = 40π cm", "slice: ⅛ of a turn", "slice crust: ⅛ × 40π = 5π cm ≈ 15.7 cm", "one step instead of two?", "Next: arc length and sector area", "?". t09 keeps t08's colours (angle blue, radius ink, arc teal) and opens with "Here's the pizza from last time". |
| t09 → t10 | The phone `ma12-phone-v1.png` with a coded tuner screen ("pure tone" wave), the tuning fork `ma11-tuning-fork-v1.png`, the coded circle of radius 1 with a turning point and "height = sin θ", empty axes "angle" and "height"; chips "plot the height against the angle?", "Next: the graphs of sin, cos and tan", "?". |
| t10 → t11 | The tan graph racing up beside its asymptote at 90°; a coded right-angled triangle whose adjacent side shrinks ("adjacent → 0"); cards "opp/hyp", "adj/hyp", "opp/adj"; chips "flip them?", "Next: secant, cosecant and cotangent", "?". |
| t11 → t12 | The floodlight `ma11-floodlight-bracket-v1.png` 4 m up a coded wall, beam at 60° from straight down, "beam = 4 sec θ", "θ = 60°: 4 × 2 = 8 m"; a dial turning the beam to 120°, "no right-angled triangle", "sec 120° = ?"; "Next: any angle", "?". |
| t12 → t13 | t01's half-equilateral triangle with "sin 30° = ½" and "cos 60° = ½"; the road sign `ma11-road-sign-post-v1.png` with a coded brace, "30°" at the ground, "60°" at the post, "brace 2 m", "1 m"; chips "coincidence?", "Next: complementary angles", "?". |
| t13 → t14a | t03's circle with (x, y) and sides x, y, r; "x² + y² = r²" with "Pythagoras"; chips "x/r = cos θ", "y/r = sin θ", "divide every term by r²?", "Next: the Pythagorean identities", "?". |
| t14a → t14b | A coded graphing app plotting y = tan x + cot x and y = sec x cosec x on −π < x < π, lying on each other; chips "same graph?", "is that a proof?", "Next: proving identities", "?". |
| t14b → t15a | The wall clock `ma11-wall-clock-v1.png` (t04's plate) with a coded minute hand at 10 past, the arc "6m°", "height = L cos(6m°)", the level line at half the hand's length, "cos(6m°) = 0.5", the calculator strip "cos⁻¹(0.5) = 60° → m = 10", a ghost hand at 50 past with "?"; "Next: solving trig equations", "?". |
| t15a → t15b | The clock with its level line, the hand at twelve; "noon to 2 pm: 0 ≤ m ≤ 120", a double arc "6m: 0° to 720°", "two laps: how many times?"; "sin 2θ = 0.5, 0° ≤ θ ≤ 360°" with "2θ: two laps too?"; "Next: multiple angles", "?". |
| t15b → t16 | "2 sin² θ − sin θ − 1 = 0" with each sin θ glowing, "w04: 2s² − s − 1 = 0?", "call it s?"; "Next: equations that reduce to quadratics", "?". |
| t16 → g01 | A coded frame, no plate: y = x² on square axes with its vertex ringed; "y = x²" and "y = (x − 3)²" with the x and x − 3 in matching boxes; a grey ghost arrow left with "minus means left?"; chips "x → x − 3: left or right?", "Next: graph transformations", "?". No shifted graph is drawn and no direction is stated, so g01 stays free to choose its anchor (as e08 left t01). Spoken: "Which way does replacing x by x minus a move a graph?" |

## Anchors and plates (no people, hands or faces)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| t09 | t08's pizza (arc and sector); a round drop-leaf table (segments, major parts) | cooking; home | reused `ma11-pizza-top-v1.png`; new `ma11-drop-leaf-table-top-v1.png`; handoff: new `ma11-tuning-fork-v1.png` (briefed in t09), reused `ma12-phone-v1.png` |
| t10 | a tuning fork's pure tone on a phone tuner; a torch along a fence for tan | music and phones; home | the t09 fork and phone; reused `physics/phys-y11-torch-v1.png`; new `ma11-fence-long-top-v1.png` |
| t11 | a backyard flying fox (cable = 3 cosec θ; landing = 3 cot θ; the limits) | games and leisure | new `ma11-flying-fox-platform-v1.png`, `ma11-flying-fox-trolley-v1.png`; handoff: new `ma11-floodlight-bracket-v1.png` (briefed in t11) |
| t12 | a floodlight's beam, 4 sec θ, never landing at 90° | home | the t11 floodlight; handoff: new `ma11-road-sign-post-v1.png` (briefed in t12) |
| t13 | a road sign's brace: one side opposite 30° and adjacent to 60° | travel | the t12 sign |
| t14a | a mixing desk's pan knob (left cos θ, right sin θ, total power constant) | music | new `ma11-mixing-desk-channel-v1.png`, `ma11-studio-speakers-v1.png` |
| t14b | a graphing app: two graphs that agree, and two that only seem to | (visual surprise; pure proof) | handoff: t04's `ma11-wall-clock-v1.png` |
| t15a | the wall clock's minute hand: one calculator angle, two times | home | t04's clock |
| t15b | the wall clock over two hours: two laps, four times | home | t04's clock |
| t16 | a phone reading 140 % battery: an impossible value, rejected with a reason | phones | reused `ma12-phone-v1.png` |

Anchor checks (grep of `lessons/math-a11-*.md` and `math-a12-*.md`, 17 Nov): no tuning fork, tuner, fence-from-above, flying fox, floodlight, road sign brace, mixing desk, pan knob, drop-leaf table or battery anchor exists. Near contexts, judged distinct or deliberate: the pizza (w09's plate; t08's anchor) continued into t09, as the RC car across c01 and c02; the torch (Year 12 g01's plate, there a tangent line through the origin; here the spot along a fence is tan x); the phone plate (Year 12's; here a tuner screen and a battery icon); the clock (t04's hour marks for related angles; here a moving minute hand for solutions, open question 2). The pack's cheesecake (too close to the pizza), carousel horse (close to Year 12's Ferris wheel), gate brace (close to t13's sign brace), ladder (Year 12 and t02 avoided ladders) and voucher (see departures) were not used.

**Plate order.** Each handoff plate must exist before the earlier build that shows it: the tuning fork before t09 (briefed in t09); the floodlight before t11 (briefed in t11); the road sign before t12 (briefed in t12); the wall clock before t04 (briefed in t04), so it is ready for t14b. New plates briefed in this batch: `ma11-drop-leaf-table-top-v1.png`, `ma11-tuning-fork-v1.png` (t09); `ma11-fence-long-top-v1.png` (t10); `ma11-flying-fox-platform-v1.png`, `ma11-flying-fox-trolley-v1.png`, `ma11-floodlight-bracket-v1.png` (t11); `ma11-road-sign-post-v1.png` (t12); `ma11-mixing-desk-channel-v1.png`, `ma11-studio-speakers-v1.png` (t14a). t13, t14b, t15a, t15b and t16 need no new plate.

## Colour roles

- The course rule holds wherever an input and output are named: the angle (and every solution angle) **blue**, ratio values **teal**; answer green; mistake red, crossed slips only.
- **Triangle and circle contexts (t11 to t14a)** follow the t01 to t04 roles: opposite side and y **amber**, adjacent side and x **violet**, hypotenuse and r ink. t11 and t12 outline each reciprocal pair in the colour of its non-hypotenuse side (sin and cosec amber, cos and sec violet, tan and cot teal). t13 adds the complement 90° − θ in **magenta** (checked against mistake red at 400 px, as root ruling 1 on e01 to e08). t14a's level meters keep cos violet and sin amber.
- **Graph contexts (t10, t15a, t15b, t16)** colour the curves: sine **teal**, cosine **violet**, tan **amber**; asymptotes and midlines dashed grey; level lines y = k dashed amber; the related angle α magenta; in t15b the inside angle (2θ, θ/2) is marked by a teal outline box; in t16 the substituted letter s amber and the range band pale teal.
- **t09** continues t08's roles (angle blue, radius ink, arc teal) and adds sector pale teal, triangle grey, segment amber, major parts violet.
- One difference to note: on t14a's circle the sine value carries amber (y's colour), while on t10's graph the sine curve is teal. The two never share a frame; if root prefers one colour for sine everywhere, the builder changes the graph curves only (no narration change).

## Departures from the packs

1. **Spoken names.** The packs say "cosec" aloud; root's brief for this batch says "secant", "cosecant" and "cotangent". Every design voices the full names; the screen writes sec, cosec and cot. "sine", "cosine" and "tangent" are voiced in full throughout (as the t01 to t08 designer chose), so the voice never meets "cos" or "tan" as text.
2. **t09.** The drop-leaf table (pack anchor 3) carries segments and major parts; the pizza continues from t08 for arcs and sectors. Site `we-2` (r = 10, 60°) is not used as a worked example; its 60° appears in the degree slip instead (pack original numbers). The lesson10 segment short answer is a check only. The major example is original (r = 50 cm, 2π/3), as the pack allowed.
3. **t10.** The pack's start (a point on t03's circle, "plot the height against the angle?") is kept, with the phone tuner and tuning fork added as the anchor; the torch along a fence (pack anchor 3) gives tan's asymptote a meaning. Site correction S11-17 applied (a pure tone, not a piano note, is a sine wave).
4. **t11 → t12 join.** The pack put t03's point (−3, 4) in t11's final frame; it moves to t12's scene 2 so the handoff shows one object (the floodlight) and one question (sec 120°).
5. **t12 → t13 join.** The site's hook (sin 30° = cos 60° in the half-equilateral triangle) is kept, with the road sign's brace added as t13's anchor.
6. **t13.** Site short answer 1 (sin² 68° + sin² 22° = 1) is left out: it needs t14a's identity (pack decision). An obtuse angle (sin 130° = cos(−40°) = cos 40°) is the "any magnitude" example; A2 uses sin 115°.
7. **t14a.** Pack question 1 (a proof) moves to t14b's attempt 1; t14a's attempt 2 is site lesson02 drill 5 (sin² θ(1 + cot² θ) = 1). The pan law is said as "one common design".
8. **t14b.** A pure-proof lesson anchored on a visual surprise (standard item 1 allows it): sin x and y = x agree in a narrow window, then split. One counterexample scene (sin θ + cos θ = 1 fails at 45°) is original.
9. **t15a.** The pack's start ("sin θ = 0.5" with the calculator's 30° and a sine sketch) is re-set on t04's clock (cos(6m°) = 0.5, 10 and 50 minutes); sin θ = 0.5 is the first worked example straight after. Pack question 1 is split into attempts 1 and 2. Site correction S11-18 applied: the calculator gives one angle; from the positive value it is the related angle. lesson08 `we-1`'s division by cos x gets the missing check.
10. **t15b.** The half-angle scene (cos(θ/2) = ½) and the radian example (cos 2x = 0.3) are original. Site lesson11 card 07's "the number of solutions multiplies" is replaced by counting waves, with the k = 1 case shown. Attempt 1 is the site's short answer Q2; attempt 2 is pack question 2.
11. **t16.** The pack's expired voucher is re-set as a phone's impossible battery reading (the reason for rejection is a range, which a battery shows); the nickname idea is used in the narration ("call sine theta s ... just a shorter name"). Site `we-1` to `we-3`, the lesson10 radian short answer and a factorise-don't-divide scene (sin² θ = sin θ, solved in full) are used. Site marking claims are not used.
12. **Feedback length.** Every feedback is at most about 30 s by speech estimate. Those at 28 s or more, to measure on the voiced take, each with a named trim: t09 feedback 2 (28 s), t10 feedback 1 (28 s), t11 feedback 1 (29 s), t12 feedback 1 (29 s), t14b feedback 1 (30 s), t15b feedbacks 1 and 2 (30 s and 29 s).

## Site corrections applied (section 7)

- S11-16 (t11): the parallax-as-secant box is not used.
- S11-17 (t10): a pure tone, not a piano note, is a sine wave; no frequency stated.
- S11-18 (t15a): no claim that an inverse returns the related acute angle; cos⁻¹(−0.5) = 120° shown as a correct single value that hides 240°.
- Minor items: t09's trap 01 corrected (about 57.3 times too long, 180/π); the satellite-dish paragraph and half-mark awards not used; t13's trap 1 condition not voiced; t15's general solutions, unsupported marking claims and "solutions multiply" claim not used; lesson08's division gets its cos x = 0 check; t16's marking claims and module-header metadata not used.

## Year 12 needs

- **t10 delivers `cid79268a8`** in the form Year 12 t01, t02 and d05 recall: all three graphs on radian axes at least once, with intercepts, tan's asymptotes, domains, ranges, period, amplitude (sin and cos only) and even or odd; one degree domain (scenes 2, 3 and attempt 1). Scene 3 says cosine is "the same wave, just starting at the top" (d05's "sin x slid left by π/2" builds on it).
- **t15a and t15b leave students able to solve trig equations in degrees and radians with the calculator in radian mode.** t15a: the one-angle calculator, related angle from the positive value, quadrants from the sign, the domain, the graph's count, a radian domain with a decimal answer in radian mode (sin θ = −0.6; attempt 2's 5 sin x + 2 = 0). t15b: widening the domain and halving ("two laps, four crossings"), counting waves with the touch case, cos 2x = 0.3 in radian mode, tan 2x = −1. These match Year 12 t02's opening ("a calculator's inverse sine gives you only one angle"), its u-window ("u runs from zero to four pi ... halve them all") and t03's "use inverse cos on a calculator, in radians".
- t16 completes `ci24474f01`.

## Open questions for root

1. **Split ids and playlist numbers.** t14a and t14b share outline order 71; t15a and t15b share 72. Root sets the final ids (for example t14 and t14-2) and playlist numbers; the designs, lesson keys (`m-a11t14a` and so on) and review evidence paths follow whatever root chooses.
2. **The clock across t04, t14b's handoff, t15a and t15b.** t04 uses its hour marks for related angles; t15a and t15b use a moving minute hand for solutions (every solution pair is one of t04's mirror pairs). Judged a deliberate return, like e08's cards; the alternative is the pack's car-wheel valve (a new plate, close to Year 12's bike pedal).
3. **t10's two anchors and the torch plate.** The tuner carries sine and cosine, the torch carries tan's asymptote. Root may prefer one anchor, or a new torch plate instead of Year 12 g01's.
4. **Spoken names** (departure 1): full names throughout. Root may allow "sec", "cosec" and "cot" aloud after first use if the Google voice reads them well.
5. **t14b without a painted anchor** in its first 20 s (a pure-proof lesson on the app's surprise). The fallback is t14a's mixing-desk badge with its "= 1.000" readout in scene 1.
6. **t16's battery** instead of the pack's voucher (departure 11).
7. **t15b's half-angle scene** (original, not in the pack's stop line): kept because "do it to the domain" is clearer both ways; it is the first cut if the voiced take runs long.
8. **t15b length.** 4,723 characters, about 446 s (7.4 minutes): within 5 to 10 minutes, a little under the usual character band because the split left multiple angles on their own. No padding was added.
9. **Colour of sine** across graph and circle contexts (see "Colour roles"): builder-only alignment if root wants one colour.

No speech, builds or commits were made.
