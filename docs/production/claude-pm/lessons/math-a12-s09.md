# Maths A12 S09: When is a normal model useful, and what does its shape mean? Many small nudges, the bell curve, mean = median = mode, X ∼ N(μ, σ²), and tail areas out to ±∞ (design)

Status: Revision 5 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 4 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 3 (5 Nov 2026, brief 171 fixes). Not voiced (no `math-a12-s09/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s09.md`).

Narration 5,869 characters (Revision 5; was 5,817), 15 scene headings, about 527 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: ninth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 61) and the first on the normal distribution, after s08 (continuous moments) and before s10 (the empirical rule and graphing the normal PDF and CDF). Revision 4 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (bags of chips coming off a factory line, each about 90 chips, weighed on a platform scale); the peg board, graphs, histograms, areas and algebra stay coded. No people. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson02.sa.html` (The Normal Distribution), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`, and `lesson03.sa.html` (Normal Distribution Applications), SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s09` ("When is a normal model useful, and what does its shape mean?", five syllabus actions, site sources lessons 2 and 3, no coverage gaps).

Owner rules applied: new 2024 syllabus only, codenames and exact wording, no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration. The one table value in this video (P(X < 242) = 0.0548) is a given in the question, not computed; attempt cards give nothing away.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci2ef338c4`: "Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena"
- `cib8d213fb`: "Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean"
- `ci9431590e`: "Identify contexts that can be approximately modelled by a normal random variable"
- `ci9f30e6a8`: "Use the notation X∼N(μ,σ^(2)) to represent a normally distributed random variable that has mean μ and standard deviation σ"
- `ci477a9380`: "Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ±∞"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s08 Revision 4's handoff frame (a histogram of 1,000 simulated bags of chips bunched in a bell around a 175 g target, the chip-bag plate small, "?", chip "Next: when is a normal model useful?"). Shows a few more bags fill chip by chip on a scale; explains why many measurements bunch in a bell (many small, independent nudges add up: a 12-row peg board, one path to an edge against 924 to the middle) (`ci2ef338c4`); lays the smooth normal curve over the histogram and names it as a continuous model of many natural measurements; reads its shape: symmetric about μ, so μ is the median; highest at μ, so μ is the mode; most values near μ; tails that approach the axis without reaching it (`cib8d213fb`); writes X ∼ N(175, 16) for the bags, with the second number as the variance (lesson 2 trap 01: N(60, 9) has σ = 3), and slides μ and stretches σ with live readouts (`ci9f30e6a8`); contrasts contexts that are and aren't approximately normal (`ci9431590e`); shades the underweight tail P(X < 170) out to −∞, the overweight tail P(X > 180) out to +∞, their equal areas by symmetry and the middle as 1 minus both tails (`ci477a9380`). Stops at the shape, the notation and shaded areas. Not taught: the PDF formula, the global maximum and points of inflection, graphing applications (s10); the empirical rule's 68%, 95% and 99.7% (s10; the handoff asks a question only); z-scores and tables (s11); finding μ or σ from a probability (s12).

## Decisions

### Revision 4 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: bags of chips off a factory line (painted plates, live).** A bag's mass is the sum of about 90 chips, each a little heavier or lighter, so "many small nudges adding up" is literally how the mass is made, and the bell comes out of it on screen. Cooking and food are on the owner's everyday list; chip bags are not used in `checks/root-decisions-maths-redesign.md` (s06's cookie is a single baked item with a geometric model, not a packing line). Basketball heights were rejected (players would need people; a team is too small for a smooth histogram).
- **Numbers (new, not a site example).** X ∼ N(175, 16), σ = 4 g, a common 175 g bag; underweight below 170 g and generous above 180 g (5 g either side). No probability is computed for the bags (tables are s11). Site lesson 3's bottle-fill numbers (500 mL, σ = 8, 490 mL) move out of this video: they are worked in s11 and s12 (s12's final frame, which g01 opens on, is the bottle machine). The site examples this video keeps are unchanged: lesson 2 card 05 (properties, examples), trap 01 (N(60, 9)), and lesson 3 problem 1's chocolate bars as A2's given.
- **Idealising assumptions (author notes, not learner copy).** Each bag holds 90 chips with independent masses (mean 175/90 ≈ 1.944 g, sd 0.42 g, so the bag's sd is √90 × 0.42 ≈ 3.98 g); the 1,000 bags (author note l, s08) and the five extra bags (author note m) are stored random samples, labelled "simulated". The fill causes are plausible examples said with "like".
- **Join with s08 (changed with s08 Revision 4).** Scene 1 opens on s08 Revision 4's final frame exactly (the chip-bag histogram, its "simulated: 1,000 bags" tag, the target line at 175 g, the chip bag, "?").
- **Join with s10 (changed with s10 Revision 4).** Scene 14 now ends on the bags' bell N(175, 16) with marks at 171 and 179, 167 and 183, 163 and 187; s10 Revision 4 opens on it. Both files change together.
- **Simulations (standard item 3).**
  1. `BagFill` (scene 1; a kit addition built on `OutcomeDrop`): painted chips (`ma12-potato-chip-v1`) tumble into the painted bag on the platform scale, the scale's coded readout counting up "chips: n" and "mass: m g" (52 px); when the bag is full its mass drops as a blue block into the histogram. Five bags: 178.1, 181.9, 175.5, 175.6, 174.6 g (author note m).
  2. `PegBoard` (scene 2): 400 stored dots fall through 12 rows into 13 bins with live bin counts, the one-path and 924-path readouts.
  3. `NormalCurve` with μ and σ sliders (scene 5): the bell slides from μ = 175 to 180 and back, and widens from σ = 4 to 6, with live readouts "area = 1" and "peak height" (0.0997 to 0.0665, grey) and a σ slider knob.
  4. `TailMirror` and `AreaFill` open ends (scenes 4, 7, 8): the fold, the lifted tail and the shaded tails running to infinity arrows.
- **Colour roles (fixed for the whole video, continuing s03 to s08).**
  - **the normal curve: teal** (`MATH_TEAL`);
  - **data (bag masses, peg-board dots, bins): blue** (`MATH_BLUE`); the traced paths amber;
  - **shaded probabilities: amber** (`MATH_AMBER`, pale amber fill);
  - **μ: a violet fulcrum triangle and line** (`MATH_GRADIENT`, s03's balance role); **σ marks: violet dashed**;
  - **answer: green**; **mistake and poor-fit regions: red**; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The chip bag is at least 380 px tall when it carries the idea; the scale 520 px wide. `HandTag` (at most two live): "90 small nudges", "roughly mirror images", "1 path", "924 paths", "a continuous model", "fold: halves match", "never reaches 0", "μ moves the centre", "σ sets the spread", "clues, not a proof", "to −∞", "tiny: still useful", "same distance, same area".
- **Stage changes (standard item 2):** the histogram, then bags filling on the scale (1); the peg board (2); the curve over the bars (3); the fold, peak and tails (4); the notation with sliders (5); the fits and doesn't-fit sketches (6); the shaded tails to infinity (7); the lifted tail and middle (8); the framed card (9); question cards with pictures (10 to 13); the σ marks (14); key notes (15).
- **Worked examples (g01 layout, standard item 7).** Scene 5: task strip "Read X ∼ N(175, 16).", givens card "mean 175 g, variance 16", rows at 52 px, green framed "σ = √16 = 4 g", red slip "σ = 16" crossed silently, tag "16 is σ²" (root decision 5). Scene 8: task strip "Use one tail to find the others.", green framed rows for each region, red slip "P(170 < X < 180) = 1 − P(X < 170)" crossed silently, tag "two tails to remove". Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Mirror, middle, forever." with three small icons (the fold, the violet μ triangle with "mean = median = mode", the two infinity arrows) and a chip-bag badge.
- **Visual surprise (standard item 9).** Ninety random chips per bag, each bag different, and still the masses build a smooth bell (1); one path to the edge against 924 to the middle (2); the folded halves land exactly on each other and the lifted tail matches its mirror exactly (4, 8).
- **Question cards (full text and a picture).** A1: the worded question with empty axes "length x (mm)" (no curve). A2: the worded question with empty axes "mass x (g)" (no curve, no marks, no shading).
- **A1 numbers changed (original question).** A1 now uses N(64, 36) (σ = 6 mm; crossed "σ = 36") so it does not repeat the bags' variance of 16.
- **Author note m (five extra bags).** Python 3.14 `random.Random(919)`: five bags of 90 chips, chip masses `gauss(175/90, 0.42)`: totals 178.1, 181.9, 175.5, 175.6, 174.6 g. Illustrative only; the histogram's 1,000 bags are s08's author note l (seed 909, `gauss(175, 4)`; 2 g classes from 161 g, counts 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2; 94 below 170, 119 above 180).
- **Narration (not voiced).** Every teaching scene is re-worded for the bags (1 to 8, 14); the attempts keep their structure; feedback 1 uses A1's new numbers.

### Kept from Revisions 1 to 3

In the bullets below, read the bottle fills (N(500, 64) mL, tails at 490 and 510, marks 492 to 524) as the chip bags (N(175, 16) g, tails at 170 and 180, marks 163 to 187), and A1 as N(64, 36); author notes (a), (b), (e), (f) and (j) are superseded by s08's author note l, author note m and the Numbers used table. The causes, examples and site sources are unchanged.

- **Learner question kept (outline).** "When is a normal model useful, and what does its shape mean?" The answer, built in order: many measurements are the sum of many small, independent nudges, and sums like that pile up in the middle and thin out evenly on both sides (2); the smooth bell that fits is the normal curve, a continuous model of many natural measurements (3); symmetry makes μ the median, the peak makes μ the mode, and most values sit near μ, with tails that never quite reach the axis (4); two numbers fix the curve, the mean and the variance (5); a normal model is useful when a variable bunches symmetrically around one peak, and wrong for skewed, flat or piled-at-an-edge variables (6); probabilities are shaded areas, and tails run to ±∞ (7, 8).
- **Hook (continuity).** s08's histogram returns; the narration says what the student can see (bunched near 500, rarer further out, mirror sides) before asking why. The site's lesson 2 hook (IQ above 130 by the empirical rule) belongs to s10 and is not used.
- **Why a bell (`ci2ef338c4`; the cause; not on the site).** `PegBoard`: 12 rows of pegs; each peg sends a dot left or right with equal chance (one nudge each); 400 stored dots fall into 13 bins (author note c: 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0). Counting is the reason: one path reaches the far left (left every time), while 924 of the 4,096 paths end in the middle (six of each, in any order), shown as a grey readout, not computed on screen. The narration scopes the claim: "When many small, independent effects add up, the total often has a shape close to a bell." No theorem is named; binomial is not named (root decision 54). The fill causes ("small changes in pressure, temperature or timing") are plausible examples, said with "like".
- **The normal model (`ci2ef338c4`; site lesson 2 card 05's examples).** The smooth curve fades in over the fill histogram (`ClassHistogram` density mode with `NormalCurve` for μ = 500, σ = 8). Examples spoken: adult heights in one population, measurement errors, fills from a machine (site card 05: "Heights of adult males in a homogeneous population", "Measurement errors in laboratory experiments", "Manufacturing tolerances"). "It's a model": the fit is approximate (`ci9431590e`'s "approximately").
- **Shape and its meaning (`cib8d213fb`).** Each property is tied to a reason on the graph: `TailMirror` folds the left half onto the right (symmetric), half the area each side tints "½ | ½" (so μ is the median: P(X < μ) = 0.5), the peak glows at μ (the mode, s06's rule "where f is highest"), the bulk near μ is tinted, and the tails are zoomed to show the gap to the axis shrinking but never closing (asymptotic, "goes on forever", extends to ±∞). The mean's balance-point reading (s08) is one phrase: "it balances at μ too".
- **Notation (`ci9f30e6a8`).** X ∼ N(μ, σ²), read "X is normal, with mean mu and variance sigma squared". For the fills: X ∼ N(500, 64), σ = √64 = 8 mL (site lesson 3's hook numbers, written in the variance form so the second number has to be read). The trap (site lesson 2 trap 01): the second number is σ², not σ. Then `NormalCurve` animations: μ from 500 to 510 slides the bell; σ from 8 to 12 spreads and lowers it with the area readout fixed at 1. "Lower because the area must stay one" is the cause.
- **When the model fits (`ci9431590e`; the contrast).** Fits: fills, adult heights in one population, measurement errors (bunched, symmetric, one peak, thin tails both ways). Doesn't fit: household water use (site lesson 10 Q3: strongly skewed to the right), the bus wait (s07: flat), a component's lifetime (site lesson 10 Q2: piled at 0, decreasing). Three small density sketches, each with its reason tag. The checklist "continuous, one peak, roughly symmetric, thinning out both ways" is on screen, and "many small independent effects adding up" is the good sign.
- **Shaded regions to ±∞ (`ci477a9380`; site lesson 3's hook and its three probability types).** Underfill P(X < 490) shades from 490 leftwards with an arrow "to −∞" (`AreaFill` open end). The model also gives negative fill volumes a positive area, but far too small to matter (grey readout "P(X < 0): less than 10⁻⁵⁰⁰", author note f). Overfill P(X > 510) shades to +∞. 510 is 10 above as 490 is 10 below, so `TailMirror` lays one tail over the other: equal areas. The middle is 1 minus both tails. No probability value is computed (tables are s11; the empirical rule is s10). The site's lesson 3 bottle numbers (500, 8, 490) are unchanged; 510 is added for the symmetric tail.
- **Attempts (original).** (A1) "The lengths X mm of bolts are modelled by X ∼ N(64, 16). State the mean, the median, the mode and the standard deviation of X." All three centres 64; σ = 4 mm. Crossed: "σ = 16" (read the variance as σ). (A2) "The masses X g of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)." By symmetry 0.0548; middle 1 − 2(0.0548) = 0.8904. Crossed: "1 − 0.0548 = 0.9452" (removed only one tail). The chocolate bar distribution and the 242 g cut are site lesson 3 problem 1 (N(250, 5²), P(X < 242) ≈ 0.0548); the 258 mirror and the middle are new. Neither card shows a curve, a shading or the answer form.
- **Mistake scene:** none separate. "σ is the second number" (5; A1 crossed); "a bell fits anything" (6); "the tails stop at the edge of the graph" (4, 7); "the middle is 1 minus one tail" (A2 crossed); "a normal model allows impossible values, so it's wrong" (7: tiny area, still useful).
- **Memory aid.** "Mirror, middle, forever." See "Memory aid check".
- **Handoff (outline next: s10, "How do graphing tools verify the empirical rule and normal CDF?").** Scene 14: the fills' bell N(500, 64) with dashed marks at 492 and 508 (μ ± σ), then 484 and 516, then 476 and 524, the region between the inner pair tinted, "?" and chip "Next: how much area lies within one, two and three σ?". No percentage is shown or spoken. This is s10's assumed opening frame (open decision 1).
- **Site sources used:** lesson 2 card 05 (notation, properties: symmetric, mean = median = mode, asymptotic, total area 1; the real-world examples), card 02's z-score and empirical rule are not used, trap 01 (N(60, 9) means σ = 3), key terms ("larger σ: wider, flatter bell"); lesson 3 hook (bottles: μ = 500 mL, σ = 8 mL, underfilled below 490 mL), problem 1 (chocolate bars N(250, 5²), P(X < 242) ≈ 0.0548, used as A2's given), card 05 (left tail, right tail, middle as the three probability types). Lesson 10 Q2 and Q3 contexts (lifetime, water use) are reused as non-normal contrasts. Not used: the empirical rule, z-scores, inverse normal, tables (s10 to s12).
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Lesson 2 card 06's lead-in says the 68–95–99.7 rule "gives exact percentages for intervals within 1, 2, and 3 standard deviations"; the same card's precision note and trap 03 say the percentages are approximate (68.27%, 95.45%, 99.73%). Suggested: "gives approximate percentages". (2) Lesson 2 card 02: "Every normal probability problem starts here" (the empirical rule) overstates; most values need z-scores and tables or technology (lesson 3). Suggested: "Many quick estimates start here." (3) Lesson 2 card 05 lists "Exam scores in large, well-designed assessments" as normal; marks are bounded and discrete, so this is approximate at best (note: say "approximately normal"). (4) Lesson 2 header label "MAV-12-06/07" style module labels and the "68–95–99.7%" en dashes are site style (no change needed); no em dashes found in the cards used.
- **Cause chain taught, in order:** (1) the fills bunch near the target, symmetrically (1); (2) a fill is the sum of many small, independent nudges, and there are far more ways to land near the middle than at an edge, so sums like this pile up in a bell (2); (3) the smooth bell is the normal model for many natural measurements (3); (4) symmetry gives median = μ, the peak gives mode = μ, most values are near μ, and the tails never reach the axis (4); (5) two numbers fix the curve; changing σ spreads and lowers it because the area stays 1 (5); (6) a normal model suits bunched, symmetric, one-peaked variables, not skewed, flat or edge-piled ones (6); (7) probabilities are shaded areas, tails reach ±∞, and symmetry matches equal tails (7, 8); (8) memory aid (9).
- **Entry knowledge (draft route `entryKnowledge`):** s04 (continuous variables, histograms, P(X = x) = 0), s05 (density, probability as area, total area 1), s06 (mode as the peak of f, median as the half-area point), s07 (uniform), s08 (E(X) as balance point; σ). Years 7 to 10: symmetry; Year 11: infinity notation in intervals.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s09`; playlistOrder 61; mainLearnerQuestion as above; syllabusActionIds `ci2ef338c4`, `cib8d213fb`, `ci9431590e`, `ci9f30e6a8`, `ci477a9380`; prerequisiteVideos `math-a12-s06`, `math-a12-s08`; sourceLessons `random-variables/lesson02.sa.html`, `random-variables/lesson03.sa.html` (SHAs above); startBoundary "From s08's histogram of 1,000 bottle fills: why a bell?"; stopBoundary "Many small nudges as the cause of the bell; the normal curve as a model; symmetric, mean = median = mode, concentrated near μ, tails to ±∞; X ∼ N(μ, σ²) with the variance second; contexts that fit and don't; shaded left, right and middle regions with symmetry. No empirical rule percentages, PDF formula, inflection points, z-scores or tables."; nextHandoff "math-a12-s10: how much area lies within one, two and three σ? (marks at μ ± σ, μ ± 2σ, μ ± 3σ with ?)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** dots falling through pegs into bins (`PegBoard`, new); the smooth bell fading over the histogram (`NormalCurve` over `ClassHistogram` density mode); the left half folding onto the right (`TailMirror`, new); half-area tints and the peak marker; a tail zoom showing the gap to the axis shrinking (`NormalCurve` `tailZoom`); μ sliding and σ stretching with the area readout fixed (`NormalCurve` animations); three small non-normal sketches (`FunctionGraph`); tails shading out to arrows "to −∞" and "to +∞" (`AreaFill` open ends, new); one tail laid on the other (`TailMirror`); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`. Painted plate: the bottle.
- **Board layout (constant):** as s04: heading top-left; graph on the left (about 1,000 × 520 px); notation, checklist and rows in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Fills (from s08 author note h): Python 3.14 `random.Random(1636)`, `gauss(500, 8)` 1,000 times; classes [476, 480), ..., [524, 528) mL; counts 2, 17, 45, 94, 153, 192, 191, 152, 94, 41, 16, 3, 0; sample mean 499.91, sample sd 7.71; 105 below 490, 106 above 510. Stored as data.
  (b) Model: X ∼ N(500, 64), σ = 8. Density heights for the overlay: 1,000 × 4 × f(x) per class for counts mode; in density mode bar heights = count/(1,000 × 4).
  (c) Peg board: 12 rows, each nudge ±1 with probability ½; `random.Random(4505)`, 400 dots, bins (number of right nudges 0 to 12): 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0. Path counts: C(12, k); C(12, 0) = 1, C(12, 6) = 924, total 2¹² = 4,096. Expected bins for 400 dots: 0.1, 1.2, 6.4, 21.5, 48.3, 77.3, 90.2, 77.3, 48.3, 21.5, 6.4, 1.2, 0.1. Stored as data (paths too, for the animation).
  (d) Shape facts for N(μ, σ²): symmetric about μ; P(X < μ) = ½; maximum at μ; f > 0 for all real x and f → 0 as x → ±∞; total area 1. Mean = median = mode = μ.
  (e) σ animation: N(500, 8²) to N(500, 12²): peak height 1/(σ√(2π)) falls from 0.0499 to 0.0332 (grey readouts not shown; area readout 1 throughout).
  (f) P(X < 490) for N(500, 64): Φ(−1.25) ≈ 0.1056 (not shown; s11). P(X < 0): z = −62.5, Φ(−62.5) ≈ 10^(−850) (shown only as "less than 10⁻⁵⁰⁰", a safe bound). P(X > 510) = P(X < 490) by symmetry.
  (g) A1: N(64, 16): μ = 64, median 64, mode 64, σ = 4. Crossed σ = 16.
  (h) A2: N(250, 25), σ = 5; 242 = μ − 8 and 258 = μ + 8; P(X > 258) = 0.0548; P(242 < X < 258) = 1 − 2(0.0548) = 0.8904 (true value 1 − 2Φ(−1.6) = 0.89040, consistent). Crossed 1 − 0.0548 = 0.9452.
  (i) Pronunciations: "X is normal, with mean mu and variance sigma squared" for X ∼ N(μ, σ²) at first use, then "N of five hundred, sixty-four"; "minus infinity", "plus infinity"; "zero point zero five four eight"; "zero point eight nine zero four".
  (j) Windows: fill histogram x 470 to 530 mL, y 0 to 200 (counts) or 0 to 0.055 (density); bell for notation x 460 to 560; peg board 13 bins; non-normal sketches small, no values.

Main question: *A thousand bags of chips pile up in a bell around the target. Why does that shape turn up so often, when is it a good model, and what does the shape tell us?*
Entry knowledge (s04 to s08): densities, area as probability, mode and median, mean and σ.
Stops after: the cause of the bell, the normal curve's shape and meaning, the notation, contexts, and shaded regions to ±∞. No percentages, formula or z-scores.
Handoff: math-a12-s10: the bags' bell N(175, 16) with μ ± σ, μ ± 2σ, μ ± 3σ marks and "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): the normal curve teal; data blue; shaded probabilities amber; μ violet triangle and line; σ marks violet dashed; answer green; mistake red; ink algebra. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px. Screen notation writes X ∼ N(μ, σ²).

### 1. hook (why a bell?)
> Last video ended with these thousand simulated bags of chips. The machine aims for one hundred and seventy-five grams. Most bags land close to that, a few land further away, and the two sides look like mirror **images**. Watch a few more bags **fill**. Each one gets about ninety chips, and each chip is a little heavier or lighter than the last. Heights, measurement errors and many other natural measurements often make a similar bell shape. So why does it keep turning up? When can we use it as a model? And what does its shape tell **us**?

Visual: opens on s08 Revision 4's last frame exactly (the blue 1,000-bag histogram in 2 g classes from 161 g, the "simulated: 1,000 bags" tag, the dashed target line at 175 g, the chip bag small at the top right, "?", chip "Next: when is a normal model useful?"). Heading writes on: "When is a normal model useful?". On the third sentence the tallest classes near 175 glow, then the end classes (3 and 2 bags) pulse; on "images" a violet mirror line at 175 flashes and the left half ghosts across onto the right (approximate match), hand tag "roughly mirror images". On "fill" the histogram shrinks to the right half (900 × 480 px) and the left half shows the painted platform scale (`phys-y11-platform-scales-v1`, 520 px wide) with the painted chip bag (`ma12-chip-bag-v1`, 400 px tall) open on it; `BagFill` drops painted chips (`ma12-potato-chip-v1`, about 40 px) into the bag while the scale's display window counts "chips: 1, 2, ..., 90" and "mass" (52 px). The first bag fills in about 3 s and reads "178.1 g"; it drops a blue block into its class on the histogram; four more bags fill quickly (181.9, 175.5, 175.6, 174.6 g), hand tag "90 small nudges". Revision 5 disclosure (screen only): the inherited tag "simulated: 1,000 bags" gains a grey second line "drawn from a bell-shaped model", and the five new blocks carry a grey tag "these 5: built from 90 chip masses", so the histogram is never presented as evidence that summing chips makes a bell; the reason comes from the peg board in scene 2. On "us" the chip "Why a bell?" moves to the top right.

### 2. many small nudges
> Here's one reason. A bag's mass isn't set by one thing. Lots of small effects push it a little up or a little down, like one more chip, a bigger chip, or a few crumbs. Watch dots fall through twelve rows of **pegs**. Each peg nudges a dot left or right, with equal chance. To land at the far left, a dot has to go left all twelve times, and only one path does **that**. To land one bin in from the edge, it needs just one right nudge, and that nudge can come at any of the twelve rows, so twelve paths do. To land in the middle, it needs six of each, in any order, and nine hundred and twenty-four paths do **that**. So the dots pile up in the middle and thin out towards the edges, the same on both **sides**. When many small, independent effects add up, the total often has a shape close to a **bell**.

Visual: clear change to `PegBoard` (12 rows of ink peg dots, 13 bins; 1,100 × 760 px), the chip bag (220 px) at the top right. On "pegs" blue dots start falling from the top (stored paths, author note c), each bounce flashing its peg; live bin counts (40 px) under the bins. On the next sentence one dot's path is traced in amber: L, R, R, L, ... (12 arrows). On "that" (first) the all-left path draws in amber to the far-left bin, hand tag "1 path". On the next sentence twelve faint one-right-nudge paths draw into bin 1, the single right step marked on each at a different row, readout "12 paths". On "that" (second) a handful of different six-and-six paths draw into the middle bin, readout "924 of 4,096 paths" (52 px), hand tag "924 paths". The remaining dots fall quickly (about 3 s) to the final bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0; on "sides" a violet mirror line flashes over the bins. On "bell" a grey tag "many small, independent nudges added up".

### 3. the normal model
> The smooth bell that fits this shape is called the normal distribution. It's a continuous probability distribution, and it's used to model many naturally occurring **things**, like adult heights in one population, measurement errors, and products from a machine. A bag can have any mass, not just a whole number of grams, so the model is a smooth curve, not bars. Just as in the histogram, the area over an interval is the probability. The fit is never perfect. It's a model, worth trying when the data bunch symmetrically around one **peak**, and then the tails have to match too.

Visual: clear change back to the bag histogram (density mode: the y axis relabels to "density", bar heights fixed as in s04's `ClassHistogram`; 1,100 × 560 px), the chip bag (260 px) at the top right. On "things" the smooth teal `NormalCurve` (μ = 175, σ = 4) draws over the blue bars, hand tag "a continuous model". On the examples, three small chips: "adult heights (one population)", "measurement errors", "products from a machine". On "any mass" the bars fade to ghosts under the curve; on "area over an interval" one class (173 to 175) and the matching strip under the curve shade amber together, grey tag "area = probability" (s04, s05). On "peak" a grey tag "approximate fit".

### 4. what the shape means
> So what does the shape mean? The curve is symmetric about its mean, mu. Fold it at mu and the two halves match. So half the area is on each side, which makes mu the median **too**. The curve is highest at mu, so mu is also the **mode**. Mean, median and mode are the same value. Most of the area sits close to the mean, and the curve gets lower and lower further out. That's why most bags land within a few grams of one seventy-five. Its tails get closer and closer to the axis, but never touch it. So the curve goes on forever, in both **directions**.

Visual: camera continue (the bars fade; the bell stays). On "symmetric" a violet μ triangle and line at 175; on "Fold" `TailMirror` folds the left half onto the right along μ, matching exactly, hand tag "fold: halves match". On "too" the two halves tint amber "½ | ½", row (52 px) "P(X < μ) = 0.5, so median = μ". On "mode" the peak glows, row "highest at μ, so mode = μ" (s06's rule in a grey chip). Green framed "mean = median = mode = μ"; the violet triangle under μ shows a level beam (grey tag "and it balances at μ", s08). On "close to the mean" the bulk near 175 tints deeper. On "never touch it" a zoom inset on the right tail (x 185 to 191) shows the gap between the curve and the axis shrinking but staying open, hand tag "never reaches 0". On "directions" arrows at both ends of the x axis, labels "to −∞" and "to +∞".

### 5. the notation: N of mu, sigma squared
> We write X is normal, with mean mu and variance sigma squared, like **this**. The first number is the mean. The second is the variance, not the standard deviation. The bags are N of one seventy-five, sixteen, so sigma is the square root of sixteen, which is four **grams**. Change mu, and the whole bell slides along the **axis**. Make sigma bigger, and the bell spreads out and gets lower, because the total area has to stay **one**. Make it one and a half times as wide, and its peak drops to two thirds of the height.

Visual: g01 board. Task strip: "Read X ∼ N(175, 16)." Right column on "this": "X ∼ N(μ, σ²)" (52 px) with labels under each part ("mean", "variance"). On "variance" the σ² slot glows, grey chip "σ = √(second number)". Givens card: "mean 175 g", "variance 16". Row "X ∼ N(175, 16)"; on "grams" green framed "σ = √16 = 4 g" (grey "same as N(175, 4²)"); a red slip "σ = 16" writes and is crossed silently, tag "16 is σ²". On "axis" a violet μ slider under the graph moves from 175 to 180 and back; the bell slides with it, shape unchanged, live readout "μ = 175 ... 180" (52 px), hand tag "μ moves the centre". On "one" a σ slider moves from 4 to 6: the bell widens and its peak lowers, with live readouts "area = 1" (held fixed throughout) and "peak height 0.0997 ... 0.0665" (grey), hand tag "σ sets the spread". On the last sentence ghost brackets show the width ratio "× 1.5" and the peak ratio "× 2/3". A small grey chip in the corner: "N(60, 9): σ = 3, not 9".

### 6. when a normal model fits
> So when is a normal model useful? Look for continuous data that bunch around one peak and thin out evenly in both **directions**. Then lay the bell over the data and check that the tails match too. These are clues, not a proof. Many small, independent effects adding up is a good sign. Household water use isn't like that. Most homes use a moderate amount, but a few use a lot, so the tail stretches far to the **right**. The bus wait from two videos ago is flat, not a **bell**. And a component's lifetime piles up near zero, then trails **off**. For those, a normal model would put the probability in the wrong places.

Visual: clear change to a checklist board. Right column checklist (44 px) writes on "directions": "continuous", "one peak", "roughly symmetric", "thins out both ways"; on "tails match" the bags' histogram returns small (600 × 320 px) with its fitted bell and both tails glow, row "tails match the bell"; hand tag "clues, not a proof"; then "good sign: many small, independent effects" beside a small chip-bag icon. Left: three density sketches (each 560 × 240 px) appear one at a time, each with a dashed teal normal curve of the same mean overlaid. On "right" a right-skewed hump with a long right tail, tag "water use: skewed right" (site lesson 10 Q3). On "bell" s07's flat rectangle with the bus stop badge, tag "bus wait: flat". On "off" a decreasing curve from a high value at 0, tag "lifetime: piled at 0" (site lesson 10 Q2). On the last sentence the mismatch regions between each sketch and its dashed bell tint red briefly, tag "wrong places".

### 7. probabilities as shaded areas, out to infinity
> In a normal model, probability is still area. A bag is underweight if it holds less than one hundred and seventy grams. That's the area to the left of one seventy, and it runs all the way out to minus **infinity**. A single value has zero probability, so less than one seventy and at most one seventy give the same area. The model even gives a tiny area to impossible bags, like negative masses. For these bags, that area is so small it doesn't matter, so the model is still **useful**. A bag over one hundred and eighty grams is the area to the right, out to plus **infinity**.

Visual: clear change to the bags' bell N(175, 16) (x 159 to 191, labels 170, 175, 180; 1,100 × 560 px), the chip bag on its scale small at the top right. Task strip: "Shade P(X < 170) and P(X > 180)." On "infinity" (first) `AreaFill` shades amber from 170 leftwards; the shading runs into an arrow at the left edge labelled "to −∞", row "P(X < 170) = area to the left of 170" (52 px); on "single value" a grey row "P(X ≤ 170) = P(X < 170), since P(X = 170) = 0" (s04). On the next sentences a grey readout "P(X < 0): less than 10⁻⁴⁰⁰" at the far left; on "useful" the hand tag "tiny: still useful". On "infinity" (second) the right tail shades amber from 180 with an arrow "to +∞", row "P(X > 180) = area to the right of 180".

### 8. symmetry gives equal tails
> One eighty is five grams above the mean, and one seventy is five below. So by symmetry, these two tails have the same **area**. And the bags between them are what's left over. That's one, minus both **tails**. The mean splits the curve too. Each half is exactly a half, so the bags from one seventy up to one seventy-five are a half, minus that left tail. You can find all three regions from one tail, using nothing but the shape of the **curve**.

Visual: camera continue, set as a g01 board. Task strip: "Use one tail to find the others." On "area" `TailMirror` lifts the left tail and lays it over the right tail: an exact match, tags "5 below" and "5 above", hand tag "same distance, same area", row (52 px) "P(X > 180) = P(X < 170)", green framed. On "tails" the middle region (170 to 180) shades a lighter amber, row "P(170 < X < 180) = 1 − 2 × P(X < 170)", green framed; a red slip "P(170 < X < 180) = 1 − P(X < 170)" writes and is crossed silently, tag "two tails to remove". On "The mean splits" a violet line at 175 and the "½ | ½" tint from scene 4 return; [170, 175] shades, row "P(170 < X < 175) = 0.5 − P(X < 170)", green framed. On "curve" all three regions sit together with a grey tag "whole area = 1". No tail value is shown.

### 9. memory aid
> Here's a way to remember the shape. Mirror, middle, forever. The halves mirror each other, the mean, median and mode share one middle, and the tails go on **forever**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line in the hand font, 64 px: "Mirror, middle, forever." Under each word a small icon from the scenes (the fold, the violet μ triangle with "mean = median = mode", the two infinity arrows), the third arriving on "forever". Badge at the left: the chip bag (220 px) above a small bell. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. State these four values. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The lengths, X mm, of bolts made by a machine are modelled by X ∼ N(64, 36). State the mean, the median, the mode and the standard deviation of X." Picture slot: empty axes "length x (mm)" (no curve, no marks). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> The first number is the mean, so mu is sixty-**four**. The curve is symmetric with one peak, so the median and the mode are sixty-four **too**. The second number, thirty-six, is the variance. So sigma is the square root of thirty-six, which is six **millimetres**. A standard deviation of thirty-six is wrong. Thirty-six is sigma **squared**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "X ∼ N(64, 36)", "mm". "64" underlined on "four"; row (52 px) "mean μ = 64". On "too" the card's axes draw a teal bell with its violet μ line and fold at 64, row "median = mode = 64". "36" underlined; on "millimetres" green framed "σ = √36 = 6 mm". On "squared" a red slip "σ = 36" writes and is crossed (caption "36 is σ²"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Use the shape of the curve. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The masses, X g, of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)." Picture slot: empty axes "mass x (g)" (no curve, no marks, no shading). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Two fifty-eight is eight grams above the mean, and two forty-two is eight grams **below**. The curve is symmetric, so the right tail has the same area: zero point zero five four **eight**. The middle is one minus two lots of zero point zero five four eight, which is zero point eight nine zero **four**. One minus zero point zero five four eight is wrong. That removes only the left **tail**.

Visual: the card shrinks to the top. `GivensStrip`: "X ∼ N(250, 25)", "P(X < 242) = 0.0548". "250", "242" and "258" underlined as used; on "below" the card's axes draw a teal bell at 250 with marks at 242 and 258, tags "8 below", "8 above". On "eight" the left tail shades amber, `TailMirror` lays it on the right tail, green framed "P(X > 258) = 0.0548". On "four" the middle shades, green framed "P(242 < X < 258) = 1 − 2(0.0548) = 0.8904" (52 px). On "tail" a red slip "1 − 0.0548 = 0.9452" writes and is crossed (caption "the right tail is still in it"). Hold about 1 s.

### 14. handoff
> So check the peak, symmetry and tails against the normal model, and a normal shape tells us the mean, median and mode are the same. Next, a new question. Mark one sigma either side of the mean. How much of the area lies between those **marks**? And what about two sigma, or **three**?

Visual: the memory-card line shows small at the top, then fades on "Next". Board clears to the bags' bell N(175, 16) (x 159 to 191; 1,100 × 560 px), the chip bag small at the top right. On "Mark" violet dashed marks at 171 and 179 with tags "μ − σ", "μ + σ"; on "marks" the region between them tints pale amber, "?" over it. On "three" further violet dashed marks at 167 and 183 ("μ ± 2σ") and 163 and 187 ("μ ± 3σ"), each with a "?". Chip "Next: how much area lies within one, two and three σ?". No percentage is shown or spoken. Hold about 2 s. This is s10 Revision 4's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Normal: a continuous bell, used for many natural measurements.
- Symmetric about μ: mean = median = mode = μ.
- X ∼ N(μ, σ²): the second number is the variance.
- Probability = shaded area; tails run to ±∞.
- Equal distances from μ give equal tails.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Mirror, middle, forever.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 14's frame exactly (the bags' bell N(175, 16) with violet dashed marks at μ ± σ, μ ± 2σ, μ ± 3σ, the tinted inner region, the "?" marks, the chip bag and chip "Next: how much area lies within one, two and three σ?"). This is the final frame and s10 Revision 4's opening frame.

## Teaching checks

- **Does it explain causes?** Why a bell: many small, independent nudges, with far more paths to the middle than to an edge (2). Why the median is μ: symmetry gives half the area each side (4). Why the mode is μ: the peak is at μ (4). Why the curve never ends: the tails approach but never reach the axis (4). Why σ = 4 for N(175, 16): the second number is the variance (5). Why a wider bell is lower: the area must stay 1 (5). Why water use, the bus wait and lifetimes don't fit: skewed, flat, piled at an edge (6). Why the two tails match: equal distances from μ and symmetry (8). Why the middle is 1 − 2 tails: total area 1 (8).
- **Misconceptions addressed:** "σ is the second number" (5; A1 crossed); "every data set is normal" (6); "the tails stop where the graph stops" (4, 7); "impossible values make the model wrong" (7); "the middle is 1 minus one tail" (A2 crossed).
- **One idea at a time:** one observation (1), one cause (2), one name (3), one shape reading (4), one notation (5), one contrast (6), one shading (7), one symmetry use (8). Only the needed earlier results stay bright: μ = 175 and σ = 4 in 5, 7 and 8.
- **Video makes it easier:** the student watches bags fill chip by chip and drop into the histogram (1), dots pile into a bell with the one path to the edge against the many to the middle (2), the curve fold onto itself (4, 8), the tail gap shrink without closing (4), μ slide and σ stretch while the area readout stays at 1 (5), and tails run off to infinity arrows (7).
- **Visual standard, item by item:** 1 the painted chip bag, chips and scale by about 15 s, returning in 2, 3, 6, 7, 9 and 14; 2 a new stage every 25 to 60 s; 3 `BagFill` with live chip and mass readouts, `PegBoard` with live bins, μ and σ sliders with live area and peak readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (5, 8), framed answers and crossed slips; 8 framed card and five short bullets; 9 the bags building a bell, 1 path against 924, the exact fold and tail match.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 25 s and 29 s (scenes 11 and 13, including the 1 s holds).
- **Avoided double teaching:** s05's probability as area, s06's mode and median and s08's balance point are used, not re-taught; s04's histogram density mode is reused.
- **Syllabus coverage:** `ci2ef338c4` (2, 3; key note 1); `cib8d213fb` (4; A1; key note 2); `ci9431590e` (3, 6; key note 5); `ci9f30e6a8` (5; A1, A2; key note 3); `ci477a9380` (7, 8; A2; key note 4).
- **Out of scope by design:** empirical rule percentages, the PDF formula, inflection points and graphing (s10); z-scores and tables (s11); unknown μ or σ (s12).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The lengths, X mm, of bolts made by a machine are modelled by X ∼ N(64, 36). State the mean, the median, the mode and the standard deviation of X."
Model answer: mean μ = 64 mm. The normal curve is symmetric about μ with its peak at μ, so the median and the mode are also 64 mm. The variance is 36, so σ = √36 = 6 mm. Classic mistake (crossed): "σ = 36" (36 is σ²).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "The masses, X g, of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258)."
Model answer: 242 = 250 − 8 and 258 = 250 + 8 are equal distances from μ, so by symmetry P(X > 258) = P(X < 242) = 0.0548. Then P(242 < X < 258) = 1 − 2(0.0548) = 0.8904. Classic mistake (crossed): "1 − 0.0548 = 0.9452" (removes only the left tail).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bag histogram (s08 author note l) | 1,000 stored bags; counts 3, 3, 13, 37, 91, 157, 176, 190, 150, 115, 44, 16, 3, 2 in 2 g classes from 161 g | 1, 3, 6 |
| Five extra bags (author note m) | 90 chips each; 178.1, 181.9, 175.5, 175.6, 174.6 g | 1 |
| Peg board | 12 rows; 400 dots; bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0; 1 path to the edge; 12 paths to the next bin; 924 of 4,096 to the middle | 2 |
| Bag model | X ∼ N(175, 16); σ = 4 g; slide to μ = 180; stretch to σ = 6 (width × 1.5, peak × 2/3; peaks 0.0997 and 0.0665, grey); P(170 < X < 175) = 0.5 − P(X < 170) | 3, 4, 5, 7, 8, 14 |
| Site trap | N(60, 9): σ = 3 | 5 |
| Bag tails | 170 and 180 (5 either side); P(X < 0) less than 10⁻⁴⁰⁰ (grey) | 7, 8 |
| A1 | N(64, 36): mean, median, mode 64; σ = 6; crossed 36 | 10, 11 |
| A2 | N(250, 25): P(X > 258) = 0.0548; P(242 < X < 258) = 0.8904; crossed 0.9452 | 12, 13 |
| Handoff | marks 171, 179; 167, 183; 163, 187 | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and SymPy (3 Nov, scratchpad scripts `nums_s07s09.py`, `seed_s09.py`, `peg_s09.py`); Codex to re-check.

- Bags (recalculated 7 Nov, scratchpad `maths07/nums.py`): `random.Random(909)`, 1,000 × `gauss(175, 4)`: the class counts above (sum 1,000); 94 below 170; 119 above 180. Five extra bags: `random.Random(919)`, 90 × `gauss(175/90, 0.42)` each: 178.1, 181.9, 175.5, 175.6, 174.6; √90 × 0.42 = 3.98.
- Peg board: `random.Random(4505)`, 400 × sum of 12 `randint(0, 1)`: bins above; C(12, 0) = 1, C(12, 1) = 12, C(12, 6) = 924, 2¹² = 4,096.
- √16 = 4; √9 = 3; √36 = 6; √25 = 5.
- σ stretch: 6/4 = 1.5; peak 1/(σ√(2π)) scales by 4/6 = 2/3 (0.09974 to 0.06649).
- A2: 250 − 242 = 8 = 258 − 250; 1 − 2(0.0548) = 0.8904; 1 − 0.0548 = 0.9452; Φ(−1.6) = 0.054799 (consistent with the given).
- P(X < 0) for N(175, 16): z = −43.75, log₁₀ P ≈ −417.7, below 10⁻⁴⁰⁰.
- Handoff marks: 175 ± 4, ± 8, ± 12.

## Memory aid check

- **"Mirror, middle, forever."** Meaning, as said in scene 9: the two halves of a normal curve are mirror images (symmetric about μ); the mean, median and mode share one middle value, μ; the tails go on forever (the curve extends to ±∞ and never reaches the axis). Assumptions checked: all three are true of every normal curve (author note d); "middle" relies on the single peak and symmetry together (scene 4 explains both), so it is not offered as a rule for every symmetric distribution (a flat uniform is symmetric but has no single mode, s07); "forever" is about the model, not the data (scene 7 says impossible values get tiny area). It helps a new case: A1's median and mode come straight from "middle", and A2's equal tails from "mirror". Introduced after the causes (scenes 4, 7, 8).
- **Considered, not used:** "N of mean, variance: root the second" as a second aid (it is key note 3 and A1's lesson; one aid per video).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,817 characters**, 15 scene headings (Revision 3: 5,692). Characters per scene (1 to 15): 531, 784, 537, 540, 504, 604, 550, 435, 163, 57, 326, 59, 376, 276, 75.

At 13.3 characters per second the speech before the notes is about 432 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 20 s of settling for the bags filling (1), the peg-board drop (2), the fold and tail zoom (4), the sliders (5) and the tail lift (8); the key-notes scene is 45 s (1,350 frames). Total **about 523 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 47 s spare.

Reserve trims if the voiced take runs long, in order: scene 8's half-minus-tail sentences (−146, keep the row); scene 3's continuous-curve sentence (−101, keep the tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s09` (route math-a12-s09). Suggested explainer folder `src/explainer/lessons/math-a12-s09` and build folder `docs/production/claude-pm/lessons/m-a12s09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, small-nudges, normal-model, shape-meaning, notation, when-it-fits, shaded-tails, equal-tails, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s08's last frame continues into scene 1 (same histogram); 1 to 2 clear change (`PegBoard`); 2 to 3 clear change back to the histogram; 3 to 4 camera continue (bars fade, bell stays); 4 to 5 camera continue (right column); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s09-rev4-learning-review.md`, `science_check` = `checks/m-a12s09-rev4-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only): no chip bag, snack packet or single chip exists in any course (searched chip, crisp, packet, bag, snack; the "chips" hits are Chemistry's marble chips in flasks and the bags are laboratory and fertiliser bags). `physics/phys-y11-platform-scales-v1.png` (inspected: a plain steel platform scale, front view, with a blank dark display window) suits the weighing and carries a coded readout in its window. The Revision 1 bottle plate (`maths-a12-bottle.png`) is not used here; it was never painted, and the drink bottle now belongs to s12 (reused `chemistry/m7-pet-bottle-v1.png`).

Need (painted, new; see the Codex asset brief): `ma12-chip-bag-v1.png` and `ma12-potato-chip-v1.png`. Reused: `phys-y11-platform-scales-v1` (scene 1); s07's `ma12-bus-stop-v1` (badge, scene 6).

Coded (studio kit): the scale readout, the histogram and blocks, the peg board, the normal curve, sliders, tails, arrows, sketches, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: decision 45's probability set (`OutcomeDrop`, `ClassHistogram`, `BalanceBeam`), decision 32's plate meter readout, and the studio's `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip`, `QuestionAxes` and `ParameterSlider`.

Additions:
1. **`BagFill`** (on `OutcomeDrop` with a plate meter readout): sprites fall into a plate's opening (mouth rectangle from the bag's sidecar), a live count and mass on the scale's display window (rectangle from the scale's sidecar, or measured by the builder), and the total dropping into a linked histogram. Checks: five totals from author note m; the block lands in the right class.
2. **`PegBoard`**: as specified in Revision 3's brief (stored paths, traced and highlighted paths, path-count readouts checked against C(12, k)). Checks: bins 0, 1, 7, 22, 49, 74, 91, 80, 47, 22, 6, 1, 0.
3. **`NormalCurve`**: the normal density with animatable μ and σ driven by `ParameterSlider`, live "area = 1" (numerical over ±8σ) and peak readouts, `peakMarker`, `halfTint`, `tailZoom`, `infinityArrows`, `sigmaMarks` and `overHistogram`. Checks: area 1 within 1e-6 at σ = 4 and 6; peaks 0.09974 and 0.06649; marks at 171, 179, 167, 183, 163, 187.
4. **`AreaFill` open ends** and **`TailMirror`** (fold and lift, with the 50-point symmetry check). Checks: N(175, 16) folds exactly at 175; the tail below 170 matches the tail above 180; N(250, 25) at 242 and 258.

## Codex asset brief (Maths A12 S09, bags of chips)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s09.md`, draft route entry math-a12-s09. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand names, nutrition panels, mascots, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-chip-bag-v1.png` (1,200 × 1,600 px, portrait): one puffed foil snack bag standing upright, seen from the front, **opened along the top edge** so the mouth is a dark slot (the chips fall into it), in a plain warm orange with one soft diagonal stripe and crimped bottom seal; no print of any kind. Bottom edge flat so it can stand on the scale. Codex reports the mouth's rectangle in `ma12-chip-bag-v1.json`.
2. `ma12-potato-chip-v1.png` (400 × 400 px): one golden potato chip seen from above at a slight tilt, gently curled, with faint bubbles and salt specks, matched in lighting to plate 1 so it reads at about 40 px.

Report inspection on the paper background (`#f6f1e7`) with the bag at 400 px tall standing on `phys-y11-platform-scales-v1` at 520 px wide, a test of 30 chip sprites falling into the mouth, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s09-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the scope of every learner-visible general claim: "the total often has a shape close to a bell" (not "always", no theorem named); "used to model many naturally occurring things" (the syllabus wording); "mean, median and mode are the same" said of the normal curve only; "a good one when the data bunch symmetrically around one peak" (approximate); the memory aid scoped to normal curves.
3. Confirm no empirical rule percentage, PDF formula, inflection point, z-score or table value is stated (the only probability values are the halves either side of μ, A2's given 0.0548 and the values derived from it by symmetry).
4. Confirm the notation reading "X is normal, with mean mu and variance sigma squared" matches the syllabus's "mean μ and standard deviation σ" (the second parameter is σ², so the standard deviation is its square root).
5. Confirm the peg-board path counts (1, 924, 4,096) and that "binomial" is not named anywhere in learner copy (root decision 54).
6. Confirm both attempt questions carry every demand and given, and that neither card shows a curve, a shading or the answer form.
7. Confirm the five syllabus quotes match the crosswalk JSON exactly (including the curly quotes around ‘ideal’) and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text ("grams", "symmetric").
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s08 scene 13 exactly, and the handoff (scene 14) shows no percentage.

## YouTube metadata (draft)

Title: The Normal Distribution: Shape, Notation and Uses | Year 12 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson02.sa.html

A thousand bags of chips pile up in a bell around the target. Why does that shape keep turning up? Watch bags fill chip by chip and dots fall through a board of pegs to see how many small, independent nudges add up to a bell, then meet the normal distribution as a model of natural measurements. See why its symmetry makes the mean equal the median and mode, why its tails go on forever, what the notation X ∼ N(μ, σ²) means (the second number is the variance), which contexts suit a normal model and which don't, and how to shade probabilities that extend to ±∞. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, the normal distribution.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena"
"Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean"
"Identify contexts that can be approximately modelled by a normal random variable"
"Use the notation X ∼ N(μ, σ²) to represent a normally distributed random variable that has mean μ and standard deviation σ"
"Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ±∞"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Expected value and variance of continuous random variables (previous video); probability density functions. Next: The empirical rule and graphing the normal distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. s10's opening frame (root).** s10 has no design yet. Scene 14 ends on the bags' bell N(175, 16) with marks (Revision 4; s10 Revision 4 opens on it) at μ ± σ, μ ± 2σ and μ ± 3σ and "?" chips, with no percentage. If s10 opens on a different picture (the site's lesson 2 card 06 or a graphing-app view), change scene 14's last two sentences and its marks only.
- **2. The peg board (learning review).** It is new (not on the site) and is the cause scene. Root decision 54 keeps binomial unnamed; the "924 of 4,096" count is a grey readout, not a calculation the student must follow. If the review finds the path count a distraction, remove the readout (screen only) and keep "only one path" and "lots of paths".
- **3. The link to lesson 2 (root).** The description links lesson 2 (the outline's first source); lesson 3 supplies the chocolate-bar numbers and the shading types. Root may prefer lesson 3's link.
- **4. Spoken notation (voice pilot).** "X is normal, with mean mu and variance sigma squared" at first use, then "N of five hundred, sixty-four" (the comma pause separates the two numbers).
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 4 (7 Nov) has had no independent review. Next: student learning review (trace from s04 to s08; check that the bags filling chip by chip make "many small nudges" concrete before the peg board gives the counting reason; that each shape property is tied to a visible reason (fold, half areas, peak, tail zoom); that the notation trap is caught before the attempt; that the sliders show σ lowering the peak because the area stays 1; that the non-normal contrasts are clear at a glance; that the shaded tails visibly run to the infinity arrows; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The falling dots, the fold, the σ stretch with a fixed area and the tail lift carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s08's scene 13 (same designer); the handoff frame is s10's assumed opening (open decision 1).

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 1 says "simulated fills" with a grey tag; scene 6 adds the tail comparison with the bell and "clues, not a proof"; key note 5 updated. Narration now 5,693 characters (counted by the build parser rules). No em dashes.

## Revision 3 (5 November 2026, brief 171 fixes)

Findings from `checks/m-a12s09-error-check.md`.

- Should fix 1 (scene 14): "So a normal model fits data that bunch symmetrically around one peak, and its shape tells us ..." becomes "So check the peak, symmetry and tails against the normal model, and a normal shape tells us the mean, median and mode are the same." The mean/median/mode result and the handoff are unchanged.
- Opening (scene 1) checked against s08's revised handoff: both say "simulated" and show the "simulated: 1,000 fills" tag. No change needed.
- Narration count: 5,692 characters (scene narration only, ** removed, joins excluded; -1 against Revision 2's 5,693), estimated about 529.9 s with the stated holds. No em dashes.


## Revision 4 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). The five syllabus points, the cause chain, the peg board, the memory aid and A2 are unchanged.

- **Anchor and why:** bags of chips off a factory line. A bag's mass is about 90 chips added together, each slightly heavier or lighter, so the cause of the bell (many small, independent nudges) is the anchor itself, and the chips filling a bag on a scale make it visible.
- **Simulations:** `BagFill` (chips falling into a bag on a scale, live chip and mass readouts, each bag dropping into the histogram); `PegBoard` with live bins; μ and σ sliders on `NormalCurve` with live area and peak readouts; `TailMirror` and open-ended tails.
- **Colour roles:** curve teal; data blue; shaded probabilities amber; μ violet triangle and line; σ marks violet dashed; answer green; mistake and poor fit red.
- **Plates:** new `ma12-chip-bag-v1` and `ma12-potato-chip-v1`; reused `phys-y11-platform-scales-v1` and s07's bus stop (badge). Revision 1's `maths-a12-bottle.png` withdrawn here (never painted).
- **Narration changes (not voiced):** scenes 1 to 8 re-worded for the bags (numbers N(175, 16), tails at 170 and 180); scene 9 gains a cue word; feedback 1 uses A1's new N(64, 36).
- **Counts:** 5,692 → 5,817 characters; about 530 s with the old 60 s notes hold → about 523 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were five long notes) beside the framed card.
- **Joins:** opens on s08 Revision 4's chip-bag histogram; ends on the bags' bell with σ marks, which s10 Revision 4 opens on (both changed together; bottle fills withdrawn from both joins).
- **Kit additions:** `BagFill`; `PegBoard`; `NormalCurve` with slider-driven μ and σ and live readouts; `AreaFill` open ends; `TailMirror`.

## Revision 5 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **Histogram generation (scene 1).** Disclosed on screen: the inherited 1,000-bag histogram is tagged "drawn from a bell-shaped model" and the five new bags "built from 90 chip masses". The cause of the bell is taught by the peg board (scene 2), not by the histogram. s08's final frame is unchanged, so the join holds. Alternative for root: regenerate all 1,000 bags as chip sums in both s08 and s09 (data change in two designs).
- **Model fit (scene 3).** "worth trying when the data bunch symmetrically around one peak, and then the tails have to match too" (symmetry alone does not establish a normal fit; scene 6 already checks tails).
- **Negative-mass tail (scene 7).** Scoped: "For these bags, that area is so small it doesn't matter". Scene 2's "often has a shape close to a bell" already carries the condition.
- **Narration changed:** scenes 3 (537 to 573), 7 (550 to 566). Total 5,817 to 5,869 characters, 15 scene strings (build parser rules).
