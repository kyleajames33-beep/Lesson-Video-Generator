# Designer decisions: Year 11 Maths Advanced e01 to e08 (Revision 1, 17 November 2026)

Written by the e01 to e08 designer (Claude) for root. The designs are `../lessons/math-a11-e01.md` to `math-a11-e08.md`, the whole Exponential and logarithmic functions strand (outline orders 50 to 57). They follow the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 designs (c06, c10 and w14 read closely, c18 for the opening frame), root's acceptance rulings for w01 to w31, root's rulings on the c and e packs and on c01 to c18 (`root-rulings-maths-a11-c-e-packs.md`), the recurring learning-review findings (`m-a11-w01-w31-learning-review-summary.md`) and section 6 of `../site-corrections-maths-a11.md`. Documents only: no node, Remotion, build, render, commit or sub-agent. Work began on 16 November and finished on 17 November after a pause; e01 and e02 were checked on disk and completed before e03 to e08 were written.

## Length and timing (counted by script)

Narration blockquotes, bold markers removed, 13.3 characters per second; totals add 2 × 10 s countdowns, about 6 s of short holds, about 22 s of settling and the 45 s notes scene.

| Video | Characters | Scene headings | Speech before notes | Total | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| e01 exponential graphs | 5,742 | 13 | 426 s | about 519 s | 25 s, 23 s |
| e02 the number e | 5,604 | 13 | 416 s | about 509 s | 25 s, 25 s |
| e03 what is a logarithm | 5,573 | 13 | 413 s | about 506 s | 26 s, 22 s |
| e04 solving aˣ = b | 5,519 | 13 | 409 s | about 502 s | 26 s, 22 s |
| e05 the log laws | 5,579 | 13 | 414 s | about 507 s | 27 s, 23 s |
| e06 using the log laws | 5,517 | 13 | 409 s | about 502 s | 25 s, 25 s |
| e07 change of base | 5,694 | 13 | 422 s | about 515 s | 23 s, 24 s |
| e08 log graphs | 5,528 | 12 | 410 s | about 503 s | 26 s, 27 s |

All are inside 5,500 to 6,800 characters and at least 140 s under the 570 s speech cap. Every feedback is under 30 s by speech estimate. Four designs (e03, e04, e07, e08) were extended after a first count fell short; each addition is teaching, not padding (e03: the calculator's base-ten log and a negative-log conversion; e04: a scene on k aˣ = b with a base below 1; e07: a reverse lock problem; e08: how slowly ln x rises).

Mechanical checks run (scratchpad `e01e08/count.py`, `fill.py`, `refill.py`): no U+2014 and no U+2013 in any file; every bold cue word appears quoted in its scene's Visual, in spoken order; no "color", "center", "-ize" or "nought"; decimals spoken "zero point"; every syllabus quote in each design and in each YouTube description matches `programme/maths-a11-route-inputs-3.json` exactly (checked by script). Every number recalculated with SymPy 1.14 (`e01e08/verify.py` plus inline checks) and listed under each design's "Numbers to verify".

## Anchors (one per video, everyday, no repeats)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| e01 exponential graphs | two collectible cards, one doubling and one halving in value each year; negative x means "years ago"; their graphs are mirror images | hobbies, money | new `ma11-trading-card-rare-v1`, `ma11-trading-card-plain-v1`; new `ma11-gold-cart-v1` (handoff) |
| e02 the number e | a mine cart of gold in a phone game: "growing now" readout is the gradient | games | reused cart; new `ma11-tournament-board-v1`, `ma11-trophy-v1` (handoff) |
| e03 logarithms | a knockout tournament: rounds are the power, teams the result | sport | reused board and trophy; new `ma11-ribbon-length-v1`, reused `biology/m5x-scissors-v1` (handoff) |
| e04 solving aˣ = b | halving a 1 m ribbon until it is 1 cm (2ⁿ = 100) | home | reused ribbon and scissors; new `ma11-slide-rule-body-v1`, `ma11-slide-rule-slide-v1` (handoff) |
| e05 log laws | a slide rule multiplying by adding log lengths | home, an object | reused slide rule; reused `maths/ma12-phone-v1`, new `ma11-phone-budget-v1` (handoff) |
| e06 using the laws | two phones losing 30% and 20% a year: when are they worth the same? | money, phones | reused phones; new `ma11-bike-lock-v1` (handoff) |
| e07 change of base | a 4-dial lock (digits = log₁₀) and the yes/no switches a computer stores it in (bits = log₂); ratio always 3.32 | home, tech | reused lock; reused rare card (handoff) |
| e08 log graphs | e01's cards read backwards: "years until it's worth V" | hobbies, money | reused both cards; final frame coded geometry for t01 |

Eight new plates and one new budget phone, all `ma11-`, each briefed in the design whose frames first show it: e01 (two cards, gold cart), e02 (noticeboard with a sheet sidecar, trophy), e03 (ribbon with an end sidecar), e04 (slide rule in two layers with a scale sidecar), e05 (budget phone), e06 (bike lock with dial-window sidecar). e07 and e08 need no new plate. Two existing plates are reused after inspecting their actual appearance (17 Nov): `biology/m5x-scissors-v1.png` (blue-handled scissors, true alpha) and `maths/ma12-phone-v1.png` (front-on phone, blank dark screen). No people anywhere: the cards carry abstract emblems, the cart is empty of miners, the narration's "engineers" (e04 handoff) are named, not drawn.

**Checks made (16 and 17 Nov).** A grep of every `math-a12-*.md` and `math-a11-*.md` design (c01 to c18 and w01 to w31 included) for: mould, mold, bread, viral, share count, forwarded, group chat, followers, subscriber, meme, tournament, knockout, trophy, noticeboard, draw sheet, ribbon, scissors, slide rule, trading card, collectible, collectable, resale, term deposit, doubling time, camera, exposure, zoom, jacket, markdown, credit card, typing, keyboard, sourdough, rice, chessboard, streaming, sneaker, spool, guessing game, higher or lower, elimination, bouncing, depreciation, phone plate, candle, decibel, petri, agar, padlock, combination lock, PIN, password, bits, gold, mine cart, nugget, idle. No anchor match. Near hits, judged distinct:
- **App users and video views (Year 12 d03, d17):** d03's eᵗ app users ("each user brings in one new user a week") is the closest idea to e02's "rate = amount"; e02 therefore avoids users, followers and views and uses a game rule.
- **Coin jar (Year 12 d02):** money doubling; e02's gold cart is a game object, not savings, and e01's cards are collectibles, not deposits.
- **Car depreciation (Year 12 d19, f08, f09; w08, w22):** a fixed percentage loss; e06 compares two phones to find when they are equal, a different question and object.
- **"slide rule" in i05:** only inside d01's phrase "squash and slide rules".
- **"ribbon" in c12:** the parcel's wrapping; "scissors" in w20: a plate list.
- **"camera", "zoom":** camera moves in design prose, not anchors.
- **The tournament (e03) against e07's lock:** e07 deliberately avoids the pack's "elimination game" because it would echo e03.

**Pack anchors rejected, with reasons.** e01 credit-card debt and jacket markdown (negative x has no meaning) and bread mould (a mould spot spreads at its edge, not exponentially; Year 12 d01 rejected an agar colony for the same reason). e02 compound interest hook (continuous compounding is not Year 11; d02 owns money doubling). e03 guessing game (near w31's jelly-bean guess and d09's "higher or lower"). e04 game upgrade costs (games already anchor e02). e05 counting digits (kept out; the slide rule carries the product law visibly). e06 camera stops and recipe doubling (fit simplifying, not solving). e07 phone zoom buttons (repeated "2×" presses are not how zoom works, so the model would mislead) and elimination game (near e03). e08 typing speed (a model, not an exact log; needs a new plate).

**Variety across the eight:** hobbies and money (e01, e08), games (e02), sport (e03), home (e04, e05), money and phones (e06), home and tech (e07).

## Joins

| From | Final frame (the next video's opening) |
| --- | --- |
| c18 → e01 | c18's coded algebra exactly: "y = 2ˣ" (x blue), the table x −2 to 3 with "?" values, "x in the power", "Next: exponential graphs", "?". e01 fills the table and brings a card badge in during scene 1 (as root ruling 1 on c10 added a pond badge), then the cards at about 50 s. |
| e01 → e02 | the gold cart; "gold: 1 kg", "doubles every hour: G = 2ᵗ", "growing how fast right now? ?", a small 2ᵗ graph through (0, 1) |
| e02 → e03 | the noticeboard with a coded 8-team draw and the trophy; "8 teams → 3 rounds", "64 teams → ? rounds", "2^? = 64" |
| e03 → e04 | the whole ribbon and scissors; "1 m = 100 cm", "each cut: half is left", "cuts to reach 1 cm? 2ⁿ = 100", grey "100 teams: also 2ˣ = 100" |
| e04 → e05 | the slide rule set at 2 × 3 = 6; "2 × 3 = 6, by adding lengths?", "length to 2 + length to 3 = length to 6" |
| e05 → e06 | the two phones; "$1200, loses 30% a year", "$800, loses 20% a year", "1200 × 0.7ᵗ", "800 × 0.8ᵗ", a graph meeting near 3, "t = ?" |
| e06 → e07 | the bike lock "0 0 0 0"; "4 dials: 10⁴ = 10 000 codes", "n switches give 2ⁿ codes", "2ⁿ = 10 000, n = log₂ 10 000 = ?" |
| e07 → e08 | the rare card; V = 2ˣ graph and table; "worth $800 when? x = log₂ 8 = 3", "x = log₂ V", "swap every pair (x, V) → (V, x)?" |
| e08 → t01 | coded geometry, no plate: a unit square with its diagonal (45°), an equilateral triangle of side 2 halved (30°, 60°), a calculator strip "sin 45° = 0.7071067811…", "never ends: exact form?", "30°, 45°, 60°: exact values?", "Next: exact trig values", "?". No exact value stated; t01 (outline order 58, "How do two special triangles give exact values at 30, 45 and 60 degrees?") has no pack or design yet, so it stays free to choose its anchor, as c18 left e01. |

Each designed opening and closing frame is described identically in the two adjacent designs.

## Year 12 continuity (what the d strand relies on, and where it is delivered)

| Year 12 reliance | Delivered in | How |
| --- | --- | --- |
| d01: exponential graphs (`ci98f43d14`), y = eˣ, e⁻ˣ, 3eˣ through (0, 1) or (0, k) | e01 scenes 3 to 5 | asymptote, (0, k), domain, range for both signs of k, end behaviour, a⁻ˣ as the y-axis mirror |
| d01, d03: "e to the x is its own derivative. So on this graph, the gradient always equals the height" | e02 scenes 6, 7 | the memory aid is d01's sentence word for word: "On eˣ, the gradient always equals the height." |
| d02: gradient ÷ height of 2ˣ is a constant (named ln 2 there) | e02 scenes 4, 5 | measured as 0.693 and explained (one step right doubles every height, so every slope); "Year 12 finds a formula for k"; ln is never named in e02 |
| d02, d03: `cic84a1659` with base e, e^(ln a) = a, e^(ln x) = x for x > 0 | e03 scene 6 | both identities shown with base 2 and base e; "e^(ln x) = x, x > 0" framed |
| d03, d04: `ci7cd97f8c`, ln a = logₑ a | e03 scene 5 | defined, with ln 1 = 0, ln e = 1 and the ln key |
| d03: ln(ab) = ln a + ln b | e05 scene 2 | the product law with conditions; e06 uses it with ln |
| d04: ln(1/3) = −ln 3; logₐ 1 = 0; ln of a number between 0 and 1 is negative | e05 scene 5 | all three on screen and spoken |
| d04: change of base with b = e, logₐ x = ln x / ln a; one log a fixed multiple of another | e07 scenes 3, 4 | proved, then finished on the ln form; the lock shows the fixed-multiple picture d04 turns into a vertical stretch |
| d03: "ln x is the reflection of eˣ in y = x"; (0, 1) → (1, 0); (ln 2, 2) → (2, ln 2) (`ci9eb0125c`) | e08 scene 4 | those exact pairs, with "reflecting in that line swaps each point's x and y" |
| d02: "a curve you met in Year 11, the natural log curve" | e08 scene 4 | y = ln x drawn with (1, 0), (e, 1), asymptote x = 0 |

## Colour roles across e01 to e08 (proposed for the strand)

Inputs, indices and log values **blue**; outputs, results and the numbers inside logs **teal** (the functions strand's inputs blue, outputs teal, root ruling 12 on w01 to w14); bases **amber**; the multiplier k (e01) and powers brought down by the power law (e05, e06) **magenta**; gradients, the gradient constant k of e02 and the e07 ratio **violet**; asymptotes and y = x **dashed grey**; answers green; mistakes red, crossed slips only. In e08 exponential curves are teal and log curves blue, so a swapped point visibly trades colours. In c01 to c18 amber was the "secant" or "lone guess" colour; no secant appears in this strand, so amber is free for the base. The builder checks magenta against red and violet at phone size (open question 3).

## Departures from the packs and site, with reasons

1. **e01:** the cards replace all three pack anchors (reasons above). Site lesson02's translation example is left to the g strand; the "never crosses" key term is not used.
2. **e02:** "k depends only on a" is explained with a picture argument (one step right is an upward stretch by a), beyond the syllabus's "identify with graphing applications", which the app overlay also covers. The site's compounding hook and A = Peʳᵗ are left out.
3. **e03:** site `we-3` (a domain question) moves to e08's domain reasoning. 2ˣ = 100 is genuinely bracketed between 6 and 7 here, so the site's broken "revisit" becomes true in e04.
4. **e04:** the outline lists lesson05 and lesson08; the full-lesson link is lesson05 because lesson08 solves 2ˣ = 5 with ln 5/ln 2, which e04 defers to e07 (pack decision). Scene 5 (k aˣ = b and a base below 1) is original. The irrationality of log₂ 100 is given a one-sentence reason (no power of 2 has a factor 5), because a calculator display alone cannot show irrationality.
5. **e05:** site `we-3` (the three-law expansion) moves to e06's "expand" example. A2 proves logₐ (1/x) = −logₐ x by the index-law route, while scene 5 uses the quotient-law route, so the attempt is not a replay. Scene 6 is a mistake scene (three non-laws tested with numbers), included because these misreadings follow directly from the laws just derived.
6. **e06:** the phones replace site `we-3` as the first different-bases example; site `we-3` follows as the bracket example (both kept). The pack's possible split (simplifying apart from solving) is not needed: speech is 409 s.
7. **e07:** the lock replaces the site's currency-exchange hook (near the w27 pack's travel money). The early-rounding warning is shown at the 4th decimal place, because the site's we-1 gives the same 3 d.p. answer either way (open question 4).
8. **e08:** the 0 < a < 1 reflection (missing on the site) is taught with e01's plain card and the app's base sweep. The site's "(2, 1) and (½, −1)" for every base is corrected to (a, 1) and (1/a, −1).

## Site findings

No new site errors beyond the ten already in section 6 of `../site-corrections-maths-a11.md` (lesson01 hook, lesson02 asymptote term, lesson03 "Daily: $2.714", lesson05 and lesson08 revisits, lesson06 ln(2x) and (2, 1) points). Each is avoided or corrected in the design that touches it, as listed in that design's "Site notes".

## Open questions for root

1. **e01 to e08: magenta for k (builder).** Confirm magenta is distinct from mistake red and gradient violet at phone size, or name another k colour for the strand.
2. **e08: reusing e01's cards.** The strand opens and closes on the same two cards ("what's it worth?" then "when?"). Accept as a deliberate callback, or ask for the typing-speed alternative (a new plate).
3. **e08 to t01: the coded geometry frame.** Confirm the t01 designer opens on it, or changes only that scene.
4. **e07: early rounding.** The 3 d.p. answer is the same either way for the site example; the design shows the 4th place. Keep, or move the point to an author note.
5. **e04: the full-lesson link** (lesson05 rather than lesson08) and the "engineers" wording in the handoff (named, not drawn).
6. **e01: idealised doubling.** "Say the rare card doubles every year" is a stated rule; the fallback is 1.5ˣ with the same mirror story (numbers would change).
7. **e02: pronouncing Euler.** The voicer adds a respelling ("Oiler") if the Google voice says "YOO-ler".

## Self-grades (design stage, before learning review; not a render grade)

| Video | Grade | Reason |
| --- | --- | --- |
| e01 | A− | Strong anchor that explains the mirror; the k < 0 case is algebra only (no context), which is honest but less vivid. |
| e02 | A− | The slider locking on e and the cart's slow start carry the idea; the stretch argument in scene 4 is the riskiest beat for pace. |
| e03 | A | Clean definition with a sport anchor, the converter and the undo machine; base-e identities placed exactly for Year 12. |
| e04 | A− | The cut-by-cut ribbon makes 6 < n < 7 visible; the rational or irrational scene relies on one spoken reason. |
| e05 | A | The slide rule makes the product law physical before the algebra; the number tests settle the non-laws. |
| e06 | B+ | The densest video (five worked tasks); every stage is separated, but scene 6 after the phones may feel quick. Learning review should judge pace. |
| e07 | A− | The frozen 3.32 ratio is a good surprise; "bits" is a new idea for some students, defined once. |
| e08 | A− | The fold and the plain card cover both syllabus cases; the anchor reuse is a judgement call for root. |

## Next

Independent student learning review of all eight (trace each from its stated entry knowledge), then Codex's maths check and error check, then the plate briefs in order (e01, e02, e03, e04, e05, e06), then voicing and builds to grade A. Nothing here is voiced, built or approved; human listening remains a later gate.
