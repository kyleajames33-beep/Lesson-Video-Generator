# math-s12-r03: How does capture-recapture estimate a population we cannot count?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Ratios):

- `ci4c6fcd26`: Solve practical ratio problems involving the capture-recapture technique [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1: no matching point. This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Standard 1 viewers go from r02 to r04, so r04 must not assume this video.

**Entry knowledge:** math-s12-r01: `cie93c27e5` (a ratio as a fraction; "8 out of 50"); math-s12-r02: `cid7c41f39` (a practical ratio problem). Solving a simple equation with the unknown in a denominator is met in math-s11-f02 (`ci2acef85d`); the video can avoid it by reasoning with equal fractions.

**Prior video:** math-s12-r02 (two-route frame, Standard 2 panel: a lake with a net, "how many fish?").

**Start:** A fishing club wants to know how many fish are in its lake. Nobody can drain it and count. But it can count what is in a net.

**Stop:** The idea: the fraction marked in the second catch should match the fraction marked in the whole lake, m2/n2 = n1/N; solve for N ≈ n1 × n2 ÷ m2 (the site's letters: n1 marked and released, n2 caught the second time, m2 of those marked; the syllabus gives no letters, so plain words can come first); the answer is an estimate and a whole number; the assumptions (marked fish mix back evenly; marking does not change how easily a fish is caught; no births, deaths or movement in or out between catches; marks do not fall off); which way the estimate moves when an assumption fails (more marked fish caught makes N too small). Not taught: confidence intervals or repeated-sample methods.

**Next:** math-s12-r04 (map scales; Standard 1 joins there).

## 2. Site order, sections and worked examples

Read-only source: [ratios-and-rates/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `63cb6c30c9fee31260376a9db48b408e0364878cc4de6ca0fd84b9563aef6871`. Title: Capture-Recapture and the Cost of Electricity (two topics; electricity is r14). Sections used: `orient-and-prepare`, `preview-vocabulary`, `build-capture-recapture` (card 04, worked examples 1 and 2), `independent-practice` (drills 1 and 5, SA 1), `retrieve-and-finish`.

### Source lesson05, hook

"Nobody can count every fish in a lake. A researcher tags $40$, waits a week, then catches $50$ and finds $8$ of them tagged. How many fish are in the lake?"

### Source lesson05, card 04 "Capture-recapture, a proportion in disguise"

"The method rests on a single idea: the fraction marked in your sample should match the fraction marked in the whole population." "$\frac{m_2}{n_2} = \frac{n_1}{N}$. Rearranging for the unknown population $N$ gives the formula. $N \approx \dfrac{n_1 \times n_2}{m_2}$". Worked example 1: "$\dfrac{8}{50} = \dfrac{40}{N}$ ... The sample is $16\%$ marked, so the lake should be about $16\%$ marked too ... $N \approx 250$ fish. Check: $40$ out of $250$ is $0.16$". Assumptions: "the marked animals mix back in evenly, ... being marked does not change how easily an animal is caught, and ... the population does not change between the two samples through births, deaths or migration." "If marked animals become easier to catch, then $m_2$ comes out too big, and because $m_2$ is the denominator the estimate $N$ comes out too small." Worked example 2, possums: "$120$ tagged, later $90$ caught, $15$ tagged ... $N \approx 720$ possums". Quick check: 30 banded birds, 45 caught, 9 banded (answer D, 150).

### Source lesson05, drills and SA 1

Drill 1: "$60$ fish are tagged and released. Later $80$ are caught and $12$ are tagged." (400; "Option D multiplies by $12$ instead of dividing"). Drill 5: assumptions ("Option B describes a full census"). SA 1: "A ranger tags $45$ koalas ... $60$ koalas are surveyed and $9$ of them carry a tag" (300; one assumption). Revisit: "tagged fish are about $16\%$ of the lake ... $N \approx 250$ fish."

## 3. Recalculation

- Worked example 1: 40 × 50 ÷ 8 = 250 (8/50 = 0.16; 40/250 = 0.16). Worked example 2: 120 × 90 ÷ 15 = 720. Quick check: 30 × 45 ÷ 9 = 150 (site key D, correct). Drill 1: 60 × 80 ÷ 12 = 400. SA 1: 45 × 60 ÷ 9 = 300.
- Question 1: 75 × 120 ÷ 18 = 500. Question 2: 40 × 60 ÷ 12 = 200; against 210 it is 10 short, about 4.8%.
- Yabbies anchor: 24 × 30 ÷ 5 = 144.
- Key term "8 of 50 caught are marked, then marked animals are about one sixth": 0.16 against 0.167, acceptable as "about".

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Putting the recaptured marked number on top (40 × 8 ÷ 50 = 6.4 fish).
- Treating the estimate as an exact count, or giving 6.4 or 250.0 fish.
- Naming an assumption without saying what it means for this survey.
- Getting the direction wrong: if marked fish are easier to catch, m2 is too big and N is too small (not too big).
- Thinking the second sample must be bigger than the first (drill 5's distractor).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A lake seen from above (painted), with coded fish dots: 40 get an amber tag and swim back in; the dots mix (seeded jitter); a net circle scoops 50 and 8 of them glow amber. Two fraction cards: "8/50 of the net" and "40/? of the lake", joined by an "="; the "?" fills with 250 as the lake's dot count reveals itself as an estimate ("about 250").
- An assumption strip: three chips (mix evenly, same chance to be caught, no one comes or goes); each failure plays as a short what-if: tagged fish cluster near the jetty and the net catches 16 tagged, the estimate halves to 125; a red "too small" tag.
- A kitchen-bench check with pasta shells (section 7): the same method on a bag where the true count can be revealed at the end, which earns trust in the method.

Advanced reuse (visual parts only): `SpriteField` (series-parts.tsx) for placing fish or shell sprites at native aspect; `seededRandom` and `shuffledOutcomes` (stat-math.ts) for a deterministic catch; `TrialView`-style naming is not needed. `ChipScatter` (dist-parts.tsx) may scatter dots inside a disc for the net. No new simulation engine; a small coded mixing animation is a kit need.

## 6. Two original candidate practice questions

### Question 1

A fishing club wants to estimate the number of bass in its lake. Members catch 75 bass, tag them and release them. Two weeks later they catch 120 bass, and 18 of them are tagged. (a) Estimate the number of bass in the lake. (b) Tagged bass may stay near the boat ramp, where most fishing happens. If so, would the estimate be too high or too low? Explain.

**Worked answer:** (a) N ≈ 75 × 120 ÷ 18 = 500 bass. (b) Too low. More tagged fish would be caught than their real share, so the 18 is too big; it is the number we divide by, so the estimate is too small.

### Question 2

To test capture-recapture, a student marks 40 pasta shells in a large bag with a texta, shakes the bag well, then draws out 60 shells. 12 of them are marked. (a) Estimate the number of shells in the bag. (b) The bag actually holds 210 shells. How far off was the estimate? (c) Give one reason why the method might not work as well for fish in a real lake as for shells in a bag.

**Worked answer:** (a) N ≈ 40 × 60 ÷ 12 = 200 shells. (b) 10 shells too few (about 5%). (c) Any one: fish may not mix evenly through a lake; tagged fish may avoid or be drawn to nets; fish are born, die or leave between catches; tags can fall off. A shaken bag avoids all of these.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "too high", crossed, "18 is too big, and we divide by it"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A fishing club's lake survey:** tag 40, catch 50 later, 8 tagged, about 250 fish (the site's hook numbers) (fishing, a common Australian hobby; the club needs a number to set catch limits).
- **Pasta shells in a bag:** the same method on a kitchen bench, where the true count can be checked at the end (cooking cupboard; makes the assumptions visible because a shaken bag meets them and a lake may not).
- **Yabbies in a farm dam:** a farmer marks 24 yabbies with a dot of paint, nets 30 a week later, 5 marked, about 144 (farm life; small numbers for a quick drill).

The topic is ecological by nature (ruling 6 asks for mostly non-science contexts): these anchors frame it as a hobby, a kitchen test and a farm job, not a biology lesson. The site's possums and koalas stay as optional practice. None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "fishing" appears only in a12-s11 (a normal-distribution catch) and as a fish plate note; "pasta shell" and "yabb" no hits). Claude picks; none is required. Objects and animals, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here (the electricity half of lesson05 has MS-34, logged under r14).

Decisions for Claude:

- **Letters:** the syllabus gives no formula. The site's n1, n2, m2 and N are standard but heavy for Standard students; lead with words ("marked", "caught", "marked in the catch", "lake") and the two equal fractions, and show the letters once as an optional shorthand (spoken subscripts as ruling 36).
- **Why it works first:** the equal-fractions idea is a ratio; say it in one sentence before any formula.
- **Standard 2 only:** the final frame hands to r04 (a bushwalk map), which Standard 1 reaches from r02. Keep anything r04 needs out of this video.
- Pace: not at risk; fits 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
