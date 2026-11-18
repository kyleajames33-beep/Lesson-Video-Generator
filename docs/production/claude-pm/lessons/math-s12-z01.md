# Maths S12 Z01: What does normally distributed data look like, and why do its mean, median and mode match? Two hundred loaves becoming a bell, the bell's features, the three centres together in the middle, a skewed set pulling them apart, and the mean placing the centre while the standard deviation sets the width (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and the t-strand resolution logs), the Year 12 Advanced normal distribution designs `math-a12-s09.md` to `s12.md` (visual approach only; no anchor or script reused) and root's Standard rulings (1 to 74; ruling 68: p08 is Standard 1's last video, with the two-route final frame the z01 pack proposed; ruling 72: the bakery loaves through the strand). Designer's decisions for z01 to z06, including every join: `../checks/root-decisions-maths-s12-z01-z06.md`. **The opening matches p08's final frame** (`math-s12-p08.md` Revision 1, scene 12, read 19 Nov 2026 after z02 to z06 were written; p08's decisions file `../checks/root-decisions-maths-s12-p01-p08.md` was not yet on disk, so section 1 of this strand's decisions file quotes p08's scene 12 and is re-checked against p08's section 8 when it appears). Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,477 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 530 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-z01-learning-review.md` (summary `../checks/m-s12-z01-z06-learning-review-summary.md`), with root's rulings 1 to 77 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-z01-z06-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (why the centres match was restated, not explained): **accepted**, reviewer's narration after "the same place": "Fold the bell at the peak and the two halves match. So half the loaves are on each side, which puts the median there, and every heavy loaf has a light partner the same distance out, so it balances there too." Visual: scene 3's dashed fold returns at 710 and the halves flip; "100 loaves" shows on each side; on the new cue "partner" two blue dots at 703 and 717 light with equal violet brackets "7 g", "7 g", above the level balance beam.
2. Should fix, scene 2 (two pluses "cancelling"): **accepted**, reviewer's narration ("push each loaf a little heavier or a little lighter: a bit more dough, a bit longer in the oven drying it out. On most loaves the pushes partly cancel ... Only a few get pushes all one way, and those are the loaves out at the edges."). Tags "more dough: heavier" (up arrow) and "longer bake: lighter" (down arrow) meet on the loaf outline and leave "about 710 g"; the new cue "edges" relights the 695 and 725 columns (hand tag "all one way: the edges"). The named reserve trim in scene 3 is not needed (the design stays about 40 s under the cap) and stays in reserve.
3. Should fix, scene 2 (the imagined columns did not fit the axis): **accepted** (root's decision 2). "Now imagine a thousand loaves, weighed to the nearest gram"; label "imagined: 1,000 loaves, to the nearest gram". 1,000 loaves in 1 g columns against 200 in 5 g columns is a height ratio of exactly 1, so the 1 g columns peak near 80 on the same 0 to 90 axis and one teal bell traces both. The seed is fixed so z04 counts the same set: 683, 954 and 997 of 1,000 within one, two and three standard deviations (author note (c); seed 767 with Python's `random.Random(seed).gauss(710, 5)` gives exactly these counts, `work/brief-resolve-standard-z/verify.py`). Kit check and stage plan updated.
4. Should fix, feedback 1 (the crossed slip could not be read): **accepted**, adapted to stay under 30 s. The slip is now "(b) negatively skewed", crossed with the caption "mean > median > mode: the tail is on the right". Narration: "Calling B negatively skewed is the slip. The tail is on the side the mean is pulled towards, the right, so B is positively skewed." The earlier "Set B is positively skewed." is folded into that last sentence, so the feedback is about 27 s. Practice section, decisions and teaching checks updated.
5. Optional, feedback 2 (the slip answered neither part): **applied**. Slip "(a) Farm A: its curve is higher", caption "the centre sets the mean; height only shows the spread". Narration: "Choosing farm A for the larger mean, because its curve is higher, is the slip. Where the centre sits gives the mean. A taller curve just means less spread." Scene 6 still teaches "both curves hold all of their loaves, so the narrower one has to be taller", and key note 5 keeps "narrower = taller".

Open decisions closed: 1 (p08's decisions file section 8 is on disk and matches scene 1 and the Boundary item for item; root's decision 4 of the summary), 2 (the loaves' frequencies, ruling 75) and 3 (A2's eggs kept, summary root decision 4). Joins unchanged: scene 1 still opens on p08's final frame exactly, and scene 12 is still z02's opening frame.

Narration 5,477 characters by script (Revision 1: 5,069), about 530 s with holds, under the 570 s cap. Feedbacks about 27 s and 30 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: first video of The normal distribution strand, playlist order 77. **Standard 2 only** (the 2024 Standard 1 course has no normal distribution focus area; Standard 1 viewers finish the Year 12 course at p08; ruling 68). Pre-design pack: `../pre-design/maths-standard/math-s12-z01.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/the-normal-distribution/lesson06.sa.html` (SHA256 `d4e654bcbf0d15841ccbf4dd5899b1f0bd15d43d8cd369c2a0468be454618d96`; card 05, "Symmetric: The left side is a mirror image of the right side. Unimodal: One peak at the centre. Mean = Median = Mode ... Asymptotic: Tails approach but never touch the horizontal axis."; card 09, "Larger σ: Wider, flatter bell, data more spread out. Smaller σ: Narrower, taller bell, data more concentrated around the mean.") and `lesson05.sa.html` (SHA256 `b6e3053ec2974ccd9f6a3deef897a85c23ea4a61a67d252f3457569d2419dcbe`; Activity 2, "approximately bell-shaped (symmetric), with most bars near the centre and smaller bars tapering off symmetrically on both sides"). The site shows no dataset becoming a bell and states "Mean = median = mode" for the curve only (MS-59): both are taught here with the loaves. Route entry: `math-s12-z01` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the bakery's loaves (the loaf on the bench scale, from p08's final frame) as the anchor; histograms, bells and markers coded; the phone plate for the skewed contrast.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols; plain meanings (normal distribution, bell-shaped, symmetric, tail, mean, median, mode, mu, sigma, skewed); "approximately equal" for data; g01-style board for the three centres; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a bakery, a café's coffee sales, a phone game, a food app, eggs); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (The normal distribution):
- `cic0ba342d`: "Recognise that a dataset that is normally distributed can be represented by a bell-shaped curve"
- `cif956cc8e`: "Explain that the mean, median and mode are approximately equal for data arising from a random variable that is normally distributed"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

**Boundary:** starts from p08's final frame exactly (`math-s12-p08.md` scene 12; section 1 of `../checks/root-decisions-maths-s12-z01-z06.md`): a two-route frame split by a thin grey rule at about x = 960, panel tags "Standard 2" (left) and "Standard 1" (right), 30 px grey. Left panel: the loaf `ms12-bread-loaf-v1.png` (p08's brief; about 300 px) on the produce scale `ma11-produce-scale-v1.png` (about 420 px wide), its screen coded "--- g"; a coded quality sheet "Quality check: 200 loaves, labelled 700 g"; a coded histogram with axes "mass (g)" (690 to 730) and "number of loaves", the first 12 loaves dropped as small blocks into their classes, counter "weighed: 12 of 200"; chip "what shape is this?"; label "Standard 2 next: the normal distribution"; chip "Next". Right panel: a coded playlist card headed "Year 12 Maths Standard playlist" with six ticked strand lines and "revise any video, any time"; grey chip "Standard 1: Year 12 course complete"; label "Standard 1: well done"; chip "?". z01 fades the right panel, the rule and the panel tags, and grows the left panel to full width. Recalls Year 11 (mean, median and mode from tables and graphs; symmetric and skewed shapes; σ by calculator as "how spread out") in a phrase or grey chip. Teaches: a large dataset's histogram becomes a smooth bell (many values, narrow classes); the bell's features (one central peak, symmetric, most values near the middle, thin tails on both sides that never quite reach zero); data shaped like this are normally distributed; the mean, median and mode sit together in the middle, so for real normal data they are approximately equal (the loaves: 710.05 g, 710 g, 710 g); a skewed set pulls the mean towards its tail (reaction taps: mode 250 ms, median 300 ms, mean 321 ms); μ places the centre and σ sets the width (two ovens, σ 4 g and 9 g). Stops before z-scores (z02) and percentages in bands (z04).

## Decisions

- **Anchor: 200 loaves labelled 700 g (the strand's continuity anchor, ruling 72).** Invented and labelled "invented data". Masses grouped to the nearest 5 g: 695, 700, 705, 710, 715, 720, 725 g with frequencies 1, 9, 50, 81, 47, 10, 2. Mean 710.05 g, median 710 g (the 100th and 101st loaves), mode 710 g, population standard deviation 4.9997 g (shown as "about 5 g"). **Changed from the pack** (frequencies 3, 15, 40, 84, 42, 13, 3; mean 709.95 g; σ 5.57 g) so the 200 loaves have the standard deviation of 5 g that z02 to z06 use; the three centres still differ slightly (approximately equal, not exactly).
- **The histogram becomes a bell (MS-59).** The 200 masses drop into their columns from the scale (`ClassHistogram` with `drop`); then a seeded set of 1,000 imagined loaves weighed to the nearest gram fills 1 g columns (labelled "imagined: 1,000 loaves, to the nearest gram"; Revision 2, root's decision 2: 1,000 in 1 g columns against 200 in 5 g columns is a height ratio of exactly 1, so one bell traces both on the same axis, and z04 counts the same set), and their tops trace the bell, which is laid over in teal. The cause is said in three short sentences: small differences push each loaf a little heavier (more dough) or a little lighter (a longer bake drying it out); on most loaves the pushes partly cancel, so most land near the middle; only a few get pushes all one way, and those are the edges (the site's Central Limit Theorem line is not used, MS-56).
- **Features in plain words (site card 05).** One peak in the middle; symmetric ("the left side is a mirror image of the right"); most values near the centre; tails that get very thin but never quite reach zero (the word "asymptotic" is not used; the pack allows the plain phrase). "Normal" is named as the shape, not "ordinary".
- **The three centres, each with its own picture.** Mode: the tallest column (710 g). Median: the loaves lined up, the 100th and 101st both 710 g (`MedianReader`). Mean: the balance point (`StudioBalanceBeam`, `balancePoint`), 710.05 g. They land together because a symmetric bell's peak, middle and balance point are the same place, and the fold says why (Revision 2): half the loaves lie on each side of the peak (the median), and every heavy loaf has a light partner the same distance out (the mean balances there). For real data they are approximately equal, which is what the syllabus says.
- **The skewed contrast (reaction taps; site trap "every dataset is bell-shaped").** 100 invented taps from a phone reaction game, 200 to 500 ms in 50 ms steps, frequencies 6, 30, 24, 16, 10, 8, 6: mode 250 ms, median 300 ms, mean 321 ms. The slow taps pull the mean towards the tail (positively skewed, Year 11's word). The same three markers spread apart. These taps return in z04.
- **μ and σ (site card 09; pack's two ovens).** Same mean 710 g; oven X σ = 4 g (narrow and tall), oven Y σ = 9 g (wide and flat). Both curves hold all of their loaves, so the narrower one must be taller ("same area" readout). The 200 loaves sit between them at about 5 g. Spoken "mu, the mean" and "sigma, the standard deviation" (ruling 36 pattern).
- **Simulations (standard item 3).**
  1. **Loaves to histogram to bell** (scenes 1 and 2; `ClassHistogram` with `drop`, `BagFill`'s land-on-the-scale motion repainted as loaves): each loaf lands on the scale, its coded reading flashes (blue), and a block drops into its column; a counter "weighed: 12 → 200" (continuing from p08's frame). Then the columns split into 1 g columns as 1,000 imagined masses fill them, and the teal bell traces the tops.
  2. **Three markers** (scene 4): the mode flag rises on the tallest column; the median reader runs along 200 lined-up loaf marks to the 100th and 101st; the balance beam under the axis settles at 710.05 with a live readout. In scene 5 the same three markers move onto the tap histogram and spread to 250, 300 and 321.
  3. **Two widths** (scene 6; `NormalCurve` with `ghost`, a σ slider): one bell at μ = 710 with σ sliding from 4 to 9 and back, a live readout "σ = … g" and "area = all the loaves" fixed; the σ = 4 and σ = 9 bells then settle together as X and Y.
- **Colour roles (the strand's, fixed for z01 to z06).** The bell **teal**; data (loaf masses, columns, tap times, dots) **blue**; μ (triangle and line) and σ marks **violet**; the three centres: mode, median and mean each **violet** with a word label (no new colour); shaded areas amber (only the "same area" readout here); answer green; mistake red, crossed slips only; older rows grey.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "most near the middle", "all one way: the edges", "thinner columns: smooth curve", "one peak", "mirror image", "thin tails", "tallest column", "the middle loaf", "balance point", "all together: ≈ equal", "slow taps pull the mean", "spread apart: not normal", "μ: centre", "σ: width", "same area". At most two live at once.
- **Stage changes (standard item 2).** p08's frame (1); the histogram and the bell (2); the bell's features (3); the three centres (4); the tap histogram (5); two widths (6); framed card (7); question cards (8 to 11); the 718 g loaf (12); key notes (13).
- **The board (scene 4, g01 style; not a calculation task).** Task strip "Find the mode, median and mean of the 200 loaves."; a givens card with the frequency table (mass 695 to 725 g, frequency 1, 9, 50, 81, 47, 10, 2; total 200); rows "mode = 710 g (tallest column)", "median: 100th and 101st loaves = 710 g", "mean = 142 010 ÷ 200 = 710.05 g"; framed "mean ≈ median ≈ mode" (green). The crossed slip of the strand's form appears in the feedbacks; scene 4 has no slip (a definition stage).
- **Memory aid.** Framed card: "One peak, symmetric: mean ≈ median ≈ mode." Key line: "μ places the centre; σ sets the width."
- **Visual surprise.** The 1,000 imagined loaves' thin columns trace a smooth bell exactly over the 200 loaves' columns (2); the three markers land on top of one another on the loaves and fly apart on the taps (4, 5).
- **Plain meanings at first use.** Normal distribution ("data whose histogram makes this bell shape"); bell-shaped; symmetric ("the left side is a mirror image of the right"); tail ("the thin end on each side"); mode, median, mean (recalled with their pictures, grey chip "Year 11: measures of centre"); skewed ("one tail longer than the other", grey chip "Year 11: skewed"); mu and sigma.
- **Attempts (original, HSC style).** A1 (pack question 1): coffee sales (mean 182, median 181, mode 180; symmetric, one central peak) against delivery times (mean 34 min, median 30, mode 27); Set A is more likely normal; Set B is positively skewed; crossed "(b) negatively skewed" (caption "mean > median > mode: the tail is on the right"; Revision 2, review finding 4). A2 (original, replacing the pack's ovens, which scene 6 teaches): two farms' egg masses drawn on one axis (A: μ 58 g, σ 3 g; B: μ 64 g, σ 6 g), "which has the larger mean?" and "which is more consistent?"; B's mean, A more consistent; crossed "(a) Farm A: its curve is higher" (caption "the centre sets the mean; height only shows the spread"; Revision 2, review finding 5).
- **Mistake scene:** none separate. "Normal" read as "ordinary" (2 said); every dataset assumed bell-shaped (5); the three centres expected to be exactly equal (4 said); a taller curve read as more data (6) or as a larger mean (A2 crossed); skew direction read the wrong way (A1 crossed); the mean placed at the peak of a skewed set (5).
- **Cause chain taught, in order:** (1) many small differences push each loaf heavier or lighter, and on most loaves they partly cancel, so most loaves land near the middle; only a few get pushes all one way, so the edges are thin on both sides, which makes a bell (2); (2) with more values and narrower columns, the histogram's tops trace a smooth curve (2); (3) the bell is symmetric, so folding it at the peak matches the halves: half the loaves lie on each side (the median is at the peak) and every heavy loaf has a light partner the same distance out (the mean balances at the peak), so the mode, median and mean are in the same place, and for real data they are approximately equal (4); (4) in a skewed set, the long tail's values pull the balance point towards them, so the mean moves away from the peak (5); (5) the mean says where the bell sits, the standard deviation how wide it is, and because the area is all the data, a narrower bell must be taller (6).
- **Entry knowledge (route):** math-s11-d11 (mean, median and mode from tables and graphs); math-s11-d09 (symmetric and skewed shapes); math-s11-d13 (σ by calculator, used here only as "how spread out"); math-s12-p01 to p08 (probability language). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-z02, "What does a z-score tell us, and how do we calculate it?").** Scene 12's frame, exactly as section 2 of the decisions file (z01 → z02): the bench scale `ma11-produce-scale-v1.png` with the loaf on its tray and the coded display "718 g" (blue); the loaf bell (teal) on a gram axis 690 to 730 with the violet μ triangle and line at 710 and violet dashed marks at 705 and 715, a blue dot at 718; chips "mean 710 g", "standard deviation 5 g", "718 g: how far above the usual?"; chips "Next" and "?". No z-score is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Loaves: Σf = 200; Σfx = 695 + 6300 + 35 250 + 57 510 + 33 605 + 7200 + 1450 = 142 010; mean 710.05; cumulative 1, 10, 60, 141, 188, 198, 200, so the 100th and 101st are 710; mode 710 (81); Σf(x − 710.05)² = 4999.5; σ² = 24.9975; σ = 4.9997.
  (b) Pack's frequencies (not used): 3, 15, 40, 84, 42, 13, 3; mean 709.95; median 710; mode 710; σ 5.5675.
  (c) Imagined 1,000 loaves (Revision 2; Revision 1 had 2,000, whose 1 g columns, peaking near 160, stood twice as tall as the 200 loaves' 5 g columns): a seeded sample from N(710, 5²), drawn rounded to 1 g, for the drawing in z01 and the counting in z04. The builder fixes the seed so that, of the unrounded masses, exactly 683 lie within 705 to 715 g, 954 within 700 to 720 g and 997 within 695 to 725 g (z04's counts; such seeds exist: seed 767 with Python's `random.Random(seed).gauss(710, 5)` gives exactly 683, 954 and 997, `work/brief-resolve-standard-z/verify.py`; the kit's own generator needs its own seed with the same counts). Expected 1 g peak height about 1,000 × 0.0798 = 80, matching the 81 of the 200 loaves' tallest 5 g column. No value from the set is spoken in z01.
  (h) Fold (scene 4): 703 and 717 are each 7 g from 710 (a pair shown, not data).
  (d) Taps: Σf = 100; Σfx = 1200 + 7500 + 7200 + 5600 + 4000 + 3600 + 3000 = 32 100; mean 321; cumulative 6, 36, 60, so the 50th and 51st are 300; mode 250 (30).
  (e) Ovens: μ 710, σ 4 and 9; peak heights proportional to 1/σ (9 : 4), so X's peak is 2.25 times Y's (not spoken).
  (f) A2 eggs: A μ 58 g, σ 3 g; B μ 64 g, σ 6 g; axis 45 to 80 g with ticks every 5 g; peaks at 58 and 64; A's peak twice B's height.
  (g) Pronunciations: "seven hundred and ten point zero five grams"; "three hundred and twenty-one milliseconds"; "mu"; "sigma".

Main question: *Two hundred loaves, all labelled 700 g, are weighed. What shape do their masses make, and why do the mean, median and mode match?*
Entry knowledge (Year 11 d09, d11, d13; p01 to p08): measures of centre, shapes, σ as spread, probability words.
Stops after: the bell from data, its features, the three centres approximately equal, the skewed contrast, μ and σ. No z-scores or percentages.
Handoff: the 718 g loaf on the scale beside the loaf bell, "how far above the usual?" (z02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): bell teal; data blue; μ, σ and the three centres violet; areas amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · THE NORMAL DISTRIBUTION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two hundred loaves
> Here's a bakery's quality check. Two hundred loaves, all labelled seven hundred grams, come off the line and onto the scale. They don't all weigh the same. As each mass drops into its column, a shape starts to build. What shape is it? What does normally distributed data look like, and why do its mean, median and mode **match**?

Visual: opens on p08's final frame exactly (decisions file section 1). On the first sentence the right panel (the playlist card, "Standard 1: Year 12 course complete", "Standard 1: well done", "?"), the grey rule, both panel tags, the label "Standard 2 next: the normal distribution" and the chip "Next" fade, and the left panel grows to full width (one uniform scale, centred; plates never stretched). On "Two hundred loaves" the quality sheet "Quality check: 200 loaves, labelled 700 g" glows; on "onto the scale" the scale's "--- g" changes to a coded reading "712 g" (blue) and its block drops into the 710 class. On "drops into its column" simulation 1 resumes: the loaf plate lifts off and lands again for each new loaf (the same plate, a short drop), each reading flashing and a blue block dropping into its column, the counter running "weighed: 12 of 200 →". On "What shape" the chip "what shape is this?" rings. On "match" heading "The normal distribution" writes on and the question chip "What shape? Why do the centres match?" moves to the top right. The drop continues under the narration into scene 2.

### 2. from columns to a bell
> Here are all two hundred, grouped to the nearest five grams. Most loaves land near seven hundred and ten. Fewer land further away, and only a handful at the edges. That's because lots of small differences push each loaf a little heavier or a little lighter: a bit more dough, a bit longer in the oven drying it out. On most loaves the pushes partly cancel, so most land near the middle. Only a few get pushes all one way, and those are the loaves out at the **edges**. Now imagine a thousand loaves, weighed to the nearest gram. The columns get thinner, and their tops trace a smooth curve, high in the middle and falling away on both sides. It's shaped like a bell, so we call it a bell-shaped curve. Data that make this shape are normally distributed. Normal is the name of the shape here, not a word for **ordinary**.

Visual: stage change: simulation 1 completes. The scale and quality sheet shrink to the top left; the histogram enlarges (about 1,300 px; axis "mass (g)" 690 to 730, "number of loaves" 0 to 90), counter "weighed: 200 of 200", grey chip "invented data". On "Most loaves" the 710 column glows (hand tag "most near the middle"); on "only a handful at the edges" the 695 and 725 columns glow. On "small differences" two small coded tags drift onto a loaf outline, "more dough: heavier" (blue, up arrow) and "longer bake: lighter" (blue, down arrow); on "partly cancel" they meet on the outline and leave "about 710 g"; on "edges" (bold) the 695 and 725 columns glow again with two same-direction arrows on each (hand tag "all one way: the edges"). On "imagine a thousand" the 5 g columns fade to outlines and thin 1 g columns rise inside them (label "imagined: 1,000 loaves, to the nearest gram"; hand tag "thinner columns: smooth curve"); on "smooth curve" the teal bell traces their tops and is laid over the 200 loaves' columns, on the same "number of loaves" axis (1,000 loaves in 1 g columns stand as tall as 200 loaves in 5 g columns). On "bell-shaped curve" label "bell-shaped curve" (teal, 44 px). On "ordinary" a grey chip "normal = this shape".

### 3. the bell's features
> The bell has a few features worth knowing. It has one peak, in the middle. It's symmetric, which means the left side is a mirror image of the right. Most of the values sit close to the centre. And the tails, the thin ends on each side, get very thin, but never quite reach **zero**. Year eleven called this kind of shape symmetric. Normally distributed data is symmetric, with one peak and thin tails on both **sides**.

Visual: stage change: the bell alone, large (about 1,400 px), the columns faded behind it. On "one peak" a violet flag at the top (hand tag "one peak"); on "mirror image" a dashed fold line at 710 and the left half flips onto the right (hand tag "mirror image"); on "close to the centre" the middle region glows; on "tails" both ends glow and an arrow runs along each towards the axis without touching it; on "zero" hand tag "thin tails". On "Year eleven" grey chip "Year 11: symmetric, skewed". On "sides" a features card, 40 px: "one peak in the middle", "symmetric", "most values near the centre", "thin tails on both sides".

### 4. three centres, one place
> Now the three measures of centre. The mode is the most common mass, the tallest column, seven hundred and ten grams. The median is the middle loaf. Line up all two hundred, and the hundredth and hundred and first loaves both weigh seven hundred and ten, so the median is seven hundred and **ten**. The mean is the balance point. Add all the masses and divide by two hundred, and you get seven hundred and ten point zero **five**. All three land in the middle, because a symmetric bell has its peak, its middle and its balance point in the same place. Fold the bell at the peak and the two halves match. So half the loaves are on each side, which puts the median there, and every heavy loaf has a light **partner** the same distance out, so it balances there too. For real data they're approximately equal, not exactly, and that's what we see **here**.

Visual: clear change to the board with simulation 2. Task strip, 44 px: "Find the mode, median and mean of the 200 loaves." Givens card: the frequency table (mass 695 to 725 g; frequency 1, 9, 50, 81, 47, 10, 2; total 200). The histogram at the right with the bell faint. On "tallest column" a violet "mode" flag rises on 710 (hand tag "tallest column"); row, 52 px: "mode = 710 g". On "Line up" 200 small loaf marks line up along a strip with a running count; on "hundredth and hundred and first" those two marks glow (hand tag "the middle loaf"); on "ten" (first bold) row "median = 710 g" and a violet "median" tick. On "balance point" a balance beam under the axis (`StudioBalanceBeam`) tilts and settles with a live readout (hand tag "balance point"); row "mean = 142 010 ÷ 200"; on "five" row "= 710.05 g" and a violet "mean" triangle at 710.05. On "same place" the three violet labels stack at the centre (hand tag "all together: ≈ equal"). On "Fold" scene 3's dashed fold line returns at 710 and the left half flips onto the right; on "half the loaves" each half shows "100 loaves" (blue, 32 px) beside the median tick; on "partner" two blue dots at 703 and 717 light on the axis with equal violet brackets "7 g", "7 g" to 710, above the balance beam, which stays level. On "here" framed "mean ≈ median ≈ mode" (green).

### 5. when the data aren't normal
> Compare a set that isn't normal. Here are a hundred reaction times from a phone game, in milliseconds. Most taps are quick, but a few slow ones stretch out a long tail to the right. That shape is positively skewed. The mode is two hundred and fifty, the median is three hundred, and the mean is three hundred and twenty-**one**. The slow taps pull the mean towards the tail, so the three centres spread **apart**. When the mean, median and mode are far apart, the data aren't **normal**.

Visual: stage change: simulation 2 on new data. The phone plate `ma12-phone-v1.png` (about 220 px) at the left with a coded tap screen (a circle and "tap!", no numbers); a blue histogram of 100 taps (200 to 500 ms; frequencies 6, 30, 24, 16, 10, 8, 6; grey chip "invented data"). On "long tail" the right side's columns glow with an arrow along the tail (grey chip "Year 11: positively skewed"). On "mode" the violet "mode" flag rises on 250; on "median" the reader stops at 300; on "one" the balance beam settles at 321 and the "mean" triangle lands there. On "pull the mean" the slow columns glow and the mean triangle visibly leans right of the median (hand tag "slow taps pull the mean"); on "apart" a bracket from 250 to 321; on "normal" hand tag "spread apart: not normal".

### 6. mu places it, sigma spreads it
> Every normal curve is set by two numbers. The mean, written mu, places the centre. The standard deviation, written sigma, sets the width, how spread out the data are. Two ovens both bake loaves with a mean of seven hundred and ten grams. Oven X has a standard deviation of four grams, and oven Y has nine. Same centre, but X's bell is narrow and tall, and Y's is wide and flat. Both curves hold all of their loaves, so the narrower one has to be **taller**. A narrower bell also means more consistent loaves, staying closer to the mean. Our two hundred loaves sit in between, with a standard deviation of about five **grams**.

Visual: stage change: simulation 3. A gram axis 680 to 740. On "mu" a teal bell with a violet μ triangle and line at 710, label "μ (mu): centre" (hand tag "μ: centre"); the bell slides to 700 and back to 710. On "sigma" violet dashed marks at μ ± σ and a σ slider; the bell widens and narrows as σ runs 4 → 9 → 4 (hand tag "σ: width"), readout "σ = 4 g … 9 g" (violet, 52 px). On "Oven X" the σ = 4 bell settles, label "oven X: σ = 4 g"; on "oven Y" a second bell (σ = 9) settles, label "oven Y: σ = 9 g". On "hold all of their loaves" both areas fill pale amber with a readout "same area: all the loaves" (hand tag "same area"); on "taller" X's peak glows. On "more consistent" X's μ ± σ bracket glows, short, beside Y's long one (hand tag "narrower: more consistent"). On "grams" (final) a third, thin outline at σ = 5 labelled "our loaves: about 5 g".

### 7. memory aid
> Here's the summary. A normal distribution is one bell, symmetric, with the mean, median and mode together in the middle. Mu places the centre, and sigma sets the **width**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the loaves' bell with the three stacked violet labels. Main line, hand font 56 px: "One peak, symmetric: mean ≈ median ≈ mode." On "width" the key line, 40 px: "μ places the centre; σ sets the width." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Set A is a café's daily coffee sales over a year, with a mean of a hundred and eighty-two, a median of a hundred and eighty-one and a mode of a hundred and eighty. Its histogram has one peak in the middle and is close to symmetric. Set B is delivery times for a food app, with a mean of thirty-four minutes, a median of thirty and a mode of twenty-seven. Which set is more likely to be normally distributed? Explain. Then describe the shape of the other set. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Two sets of data are summarised. Set A: daily coffee sales at a café over one year (mean 182, median 181, mode 180); its histogram has one peak in the middle and is close to symmetric. Set B: delivery times for a food delivery app (mean 34 min, median 30 min, mode 27 min). (a) Which set is more likely to be normally distributed? Explain. (b) Describe the shape of the other set." Picture slot: a coded coffee cup outline and a coded delivery bag outline (no plates, no graphs). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Set A. Its mean, median and mode are approximately equal, and its histogram is symmetric with one central **peak**. Set B's mean is bigger than its median, which is bigger than its mode, so a tail of long deliveries pulls the mean **up**. Calling B negatively skewed is the slip. The tail is on the side the mean is pulled towards, the right, so B is positively **skewed**.

Visual: the card shrinks to the top (30 px). On "peak" framed "(a) Set A: mean ≈ median ≈ mode; symmetric, one central peak" (green). A small sketch of a right-skewed histogram with "mode 27", "median 30", "mean 34" markers; on "up" framed "(b) Set B: positively skewed (mean > median > mode)" (green). On "slip" a red slip "(b) negatively skewed" writes; on "the right" the sketch's right tail glows; on "skewed" (bold) the slip is crossed (caption "mean > median > mode: the tail is on the right"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The graph shows the masses of eggs from two farms, A and B. Both are normally distributed. Which farm's eggs have the larger mean mass? Which farm's eggs are more consistent in mass? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph shows the distributions of the masses of eggs from two farms, A and B. Both are normally distributed. (a) Which farm's eggs have the larger mean mass? (b) Which farm's eggs are more consistent in mass? Explain your answer." Beside it a coded graph: axis "mass (g)" 45 to 80 with ticks every 5; curve A (narrow, tall, centred at 58) and curve B (wide, flat, centred at 64), both ink, labelled "A" and "B"; no μ or σ marks. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Farm B has the larger mean, because its centre sits further right, at about sixty-four grams against fifty-**eight**. Farm A is more consistent. Its bell is narrower, so its standard deviation is smaller, and its eggs stay closer to their **mean**. Choosing farm A for the larger mean, because its curve is higher, is the slip. Where the centre sits gives the mean. A taller curve just means less **spread**.

Visual: the card shrinks to the top. On the graph, violet μ lines drop at 58 and 64; on "eight" framed "(a) Farm B" (green). On "narrower" brackets at μ ± σ on both curves, A's short; on "mean" framed "(b) Farm A: narrower, smaller σ" (green). On "slip" a red slip "(a) Farm A: its curve is higher" writes; on "spread" it is crossed (caption "the centre sets the mean; height only shows the spread"). Hold about 1 s.

### 12. handoff: one heavy loaf
> So normal data make a bell, with the mean, median and mode together in the middle. Here's one loaf off the line at seven hundred and eighteen grams. The mean is seven hundred and ten, and the standard deviation is five. It's heavier than usual, but how far above the usual is it, **really**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as decisions file section 2, z01 → z02): the bench scale `ma11-produce-scale-v1.png` (about 420 px wide, left) with the loaf `ms12-bread-loaf-v1.png` (about 300 px) on its tray; on "seven hundred and eighteen" the display reads "718 g" (blue, 52 px); the loaf bell (teal, about 1,200 px) on a gram axis 690 to 730 with the violet μ triangle and line at 710 and violet dashed marks at 705 and 715; a blue dot at 718 on the axis; on "really" chips "mean 710 g", "standard deviation 5 g", "718 g: how far above the usual?", and "Next" and "?". No z-score is shown. Hold about 2 s. Scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Normal data: a bell-shaped curve with one peak in the middle.
- Symmetric, most values near the centre, thin tails on both sides.
- Mean ≈ median ≈ mode (approximately equal for real data).
- Skewed data: the mean is pulled towards the long tail.
- μ places the centre; σ sets the width (narrower = taller).

Memory aid (framed card, right side, as in scene 7): *One peak, symmetric: mean ≈ median ≈ mode.* Key: *μ places the centre; σ sets the width.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: z02 opens on it.

## Teaching checks

- **Does it explain causes?** Why a bell: small differences mostly cancel, so most loaves land near the middle (2). Why a smooth curve: more values and narrower columns (2). Why the centres match: fold the bell at the peak and the halves match, so half the loaves lie on each side (median) and every heavy loaf has a light partner the same distance out (mean) (4). Why skew separates them: the tail's values pull the balance point (5). Why a narrow bell is taller: both hold all the data (6).
- **Misconceptions addressed:** "normal" as "ordinary" (2); every dataset is bell-shaped (5); the centres exactly equal (4); a taller curve as more data (6) or a larger mean (A2); skew direction (A1); the mean at a skewed set's peak (5).
- **Visual standard, item by item:** 1 the painted loaf on the scale from the first frame, the phone; 2 a new stage every 30 to 60 s; 3 loaves dropping into columns, the 1,000 imagined loaves' 1 g columns tracing the bell, the three markers landing together then flying apart, the σ slider with a fixed area; 4 fixed roles; 5 large type; 6 hand tags; 7 g01-style board in 4 (definition stage, no slip); 8 framed card and five bullets; 9 the bell traced by thin columns, the markers stacking.
- **One idea at a time:** the bell from data (2), its features (3), the three centres (4), skew (5), μ and σ (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and every given visible; 10 s each; feedback about 27 s and 28 s.
- **Avoided double teaching:** Year 11's mean, median, mode, shapes and σ are phrases and grey chips; the three centres are recalled by their pictures, not re-taught as calculations.
- **Syllabus coverage:** `cic0ba342d` (1 to 3, 7, A2); `cif956cc8e` (4, 5, A1); key notes 1 to 5.
- **Out of scope by design:** z-scores (z02); percentages in bands (z04); the density formula and "total area = 1" as a number (not in Standard 2; z05 uses "the whole area is all the data").

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Two sets of data are summarised. Set A: daily coffee sales at a café over one year (mean 182, median 181, mode 180); its histogram has one peak in the middle and is close to symmetric. Set B: delivery times for a food delivery app (mean 34 min, median 30 min, mode 27 min). (a) Which set is more likely to be normally distributed? Explain. (b) Describe the shape of the other set."
Model answer: (a) Set A: its mean, median and mode are approximately equal, and its histogram is symmetric with one central peak. (b) Set B is positively skewed: mean > median > mode, so a tail of long delivery times pulls the mean up. Classic mistake (crossed): "(b) negatively skewed" (the mean is the biggest, so the long tail is on the right).

**Attempt 2 (scene 10; original, HSC style, 2 marks suggested).** "The graph shows the distributions of the masses of eggs from two farms, A and B. Both are normally distributed. (a) Which farm's eggs have the larger mean mass? (b) Which farm's eggs are more consistent in mass? Explain your answer." (Graph: A centred at 58 g, narrow; B centred at 64 g, wide.)
Model answer: (a) Farm B: its curve's centre (about 64 g) is further right than A's (about 58 g). (b) Farm A: its curve is narrower, so its standard deviation is smaller and its masses are closer to the mean. Classic mistake (crossed): "(a) Farm A: its curve is higher" (the centre's position gives the mean; a taller curve only means less spread).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Loaves | 200; 695 to 725 g; f 1, 9, 50, 81, 47, 10, 2; mode 710; median 710 (100th, 101st); mean 142 010 ÷ 200 = 710.05; σ about 5 g | 1, 2, 4, 6 |
| First reading | 712 g (one loaf in the drop) | 1 |
| Imagined loaves (Revision 2) | 1,000, N(710, 5²), 1 g columns, peak about 80; seed fixed for z04's 683, 954, 997; not spoken | 2 |
| Fold partners (Revision 2) | 703 and 717 g, each 7 g from 710 | 4 |
| Taps | 100; 200 to 500 ms; f 6, 30, 24, 16, 10, 8, 6; mode 250; median 300; mean 321 | 5 |
| Ovens | μ 710 g; σ 4 g and 9 g | 6 |
| A1 | A: 182, 181, 180; B: 34, 30, 27 min | 8, 9 |
| A2 | eggs A μ 58 g, σ 3 g; B μ 64 g, σ 6 g (drawn, not stated) | 10, 11 |
| Handoff (z02's) | 718 g; μ 710 g; σ 5 g | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact fractions and `statistics` in Python 3.14 (19 Nov 2026, scratchpad `z/verify.py` and `z/search.py`, run with `python -I`); Codex to re-check.

- Loaves: n = 200; Σfx = 142 010; mean 710.05; median 710 (cumulative 1, 10, 60, 141, 188, 198, 200); mode 710; population σ = 4.99975.
- Taps: n = 100; Σfx = 32 100; mean 321; median 300 (cumulative 6, 36, 60, 76, 86, 94, 100); mode 250.
- Ovens: σ 4 and 9 at μ 710; peak ratio 9 : 4.
- Eggs: peaks at 58 and 64 g; peak ratio A : B = 6 : 3 = 2.
- Revision 2 (`work/brief-resolve-standard-z/verify.py`, `python -I`): 1,000 × φ(0)/σ × 1 g = 1,000 × 0.0798 ≈ 80 against the 200 loaves' 81; 200 × 5 g / (1,000 × 1 g) = 1; seed 767 gives 683, 954, 997 within 5, 10, 15 g of 710; 710 − 703 = 717 − 710 = 7.

## Memory aid check

- **"One peak, symmetric: mean ≈ median ≈ mode."** with key line **"μ places the centre; σ sets the width."** From the site's card 05 (symmetric, unimodal, mean = median = mode) with "≈" for data (the syllabus's "approximately equal"), and card 09 (larger σ, wider and flatter). Meaning, as said in scenes 3, 4, 6 and 7. Assumptions checked: "≈" because real data never fit the bell exactly (the loaves: 710.05, 710, 710); the converse is not claimed (three equal centres do not by themselves prove a set is normal; A1 asks "more likely", with the shape stated). It helps a new case: a set with mean 52, median 51, mode 51 and a symmetric single-peaked histogram is likely normal; one with mean 70, median 62, mode 55 is positively skewed.
- **Considered, not used:** "Normal means average" (wrong meaning of the word).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-z/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,477 characters** (Revision 1: 5,069), 13 scene headings. Characters per scene (1 to 13): 325, 812, 411, 835, 475, 618, 168, 491, 361, 223, 396, 287, 75.

At 13.3 characters per second the speech is about 412 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the loaves' drop (1, 2), the 1 g columns and the bell (2), the fold and tails (3), the median strip, the balance beam and the fold with its 7 g partners (4), the tap markers (5) and the σ slider (6) about 53 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 530 s**, under the 570 s cap. Feedback speech: about 27 s and 30 s. The longest scenes are 4 (835 characters, about 63 s) and 2 (812, about 61 s); each is one board or one stage.

Reserve trims if the voiced take runs long: scene 3's last two sentences (about 10 s; the features card carries them, and the card's cue moves to "zero"); scene 6's "A narrower bell also means more consistent loaves, staying closer to the mean." (about 6 s; the bracket carries it). Scene 2's cause sentences are no longer a trim (Revision 2).

## Scene list and build ids

Lesson key `m-s12z01` (route math-s12-z01). Explainer folder `src/explainer/lessons/math-s12-z01`; build inputs in `docs/production/claude-pm/lessons/math-s12-z01/` (at voicing).

In order (13 scene headings): hook-200-loaves, columns-to-bell, bell-features, three-centres, skewed-taps, mu-and-sigma, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-718-loaf, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | p08's frame; loaves dropping |
| 30 to 85 s | 2 | 200 columns; 1,000 imagined; the bell |
| 85 to 120 s | 3 | The bell's features |
| 120 to 180 s | 4 | Board: the three centres |
| 180 to 220 s | 5 | The tap histogram |
| 220 to 270 s | 6 | Two ovens: μ and σ |
| 270 to 285 s | 7 | Framed memory card |
| 285 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 425 s | 12 | The 718 g loaf |
| 425 to 470 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: p08's last frame continues into 1 (the right panel fades); 1 to 2 the drop completes, then stage change; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-z01-learning-review.md`, `science_check` = `checks/m-s12-z01-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, opened at full size): `ma11-produce-scale-v1.png` (a white bench scale with a stainless tray and a blank dark display, 1476 × 1066, true alpha; the display takes a coded reading; reads at 420 px). `ma12-phone-v1.png` (a phone front, blank dark screen, 971 × 1657, true alpha; reads at 220 px). `phys-y11-platform-scales-v1.png` was considered and not used (a flat floor platform; a loaf would look wrong on it). `ms12-coffee-sandwich-v1.png` was considered for A1 and not used (a pale halo in its alpha). Not used as leads (Advanced anchors, ruling 7): s09's chip bags and chips, s10's apples, s11's fish, s12's filler.

Need (painted): none new. The loaf `ms12-bread-loaf-v1.png` (z01 to z06) is briefed in p08, whose final frame shows it first (ruling 17); z01 does not brief it again. Reused: the bench scale (`ma11-produce-scale-v1.png`, p08's choice for the pack's bench scale), the phone.

Coded: histograms, columns, the 1 g columns, the bell, features card, the board and its table, the mode flag, the median strip, the balance beam, the tap screen, the σ slider, the ovens' bells, the egg graph, the cup and bag outlines, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `ClassHistogram` (`drop`), `BagFill` and `bagFillAt` (the land-on-the-scale motion, repainted as loaves), `NormalCurve` (`ghost`, `marks`), `StudioBalanceBeam` and `balancePoint`, `MedianReader`, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row z01: none new): `ClassHistogram` should split a class into finer columns in place (5 g to 1 g) with a seeded sample, for scene 2; if it already accepts a new class width with a transition, no change. Check: 1,000 seeded masses from N(710, 25) in 1 g columns sit under the N(710, 25) curve scaled to the count (peak about 80, on the same 0 to 90 axis as the 200 loaves' 5 g columns), and the seed gives z04's counts 683, 954 and 997 (author note (c)).

## Codex asset brief (Maths S12 Z01)

No new plate. The loaf `ms12-bread-loaf-v1.png` is briefed in p08 (its final frame shows it first; ruling 17) and is not briefed again here, as p08's open decision 1 asks. The loaf rack used in z05 and z06 is briefed in z05. Before the z01 build, check the loaf at about 300 px on `ma11-produce-scale-v1.png` at about 420 px on the paper background (`#f6f1e7`): the loaf rests inside the tray, and a coded reading (52 px) fits the display. Append the check to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS or `statistics`, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's statements used (card 05's features, card 09's widths) are quoted correctly, that the site's height hook (MS-57), factory B's 58% (MS-56) and the Central Limit Theorem line are not used, and that the loaves' frequencies are the design's (changed from the pack; decisions file section 4).
4. Confirm both attempts carry every demand and given, and neither card nor picture shows an answer (A2's graph has no μ or σ marks).
5. Confirm scene 1 opens on p08's final frame exactly (p08 scene 12 and its decisions file section 8; this strand's decisions file section 1), and scene 12's frame matches z02's opening (section 2).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: The Normal Distribution: The Bell Curve | Year 12 Maths Standard 2

(Title length: 66 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson06.sa.html

Two hundred loaves, all labelled 700 g, are weighed. What shape do their masses make? Watch a histogram of real-looking data become a smooth bell-shaped curve, learn the features of a normal distribution (one peak, symmetric, thin tails), and see why the mean, median and mode are approximately equal for normally distributed data. Compare a skewed set, where the mean is pulled towards the tail, and see how the mean places the bell and the standard deviation sets its width. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. The data in this video are invented.

Mathematics Standard 11-12 (2024 syllabus), Year 12, The normal distribution. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Recognise that a dataset that is normally distributed can be represented by a bell-shaped curve"
"Explain that the mean, median and mode are approximately equal for data arising from a random variable that is normally distributed"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

Builds on: Probability in the Media, Government and Business. Next: z-Scores: How Far From the Mean?

#Year12Maths #MathsStandard #NormalDistribution #HSCScience

## Open decisions

- **1. The opening (root, p08's author). Closed in Revision 2:** p08's decisions file section 8 is on disk and matches scene 1 and the Boundary item for item (summary, root decision 4); z01's suggested first 12 masses keep the drop consistent. Revision 1 text, for the record: Scene 1 opens on p08's scene 12 as written in `math-s12-p08.md` Revision 1 (12 of 200 weighed, "--- g" on the scale, the quality sheet, "what shape is this?"). p08's decisions file (section 8) was not on disk on 19 Nov 2026; if it differs from p08's scene 12, scene 1 and the Boundary follow section 8. The loaf plate is p08's (`ms12-bread-loaf-v1.png`, unbagged, no label), so the strand shows the 700 g label as a coded tag beside the loaf (z04 to z06), never on the plate.
- **2. The loaves' frequencies (root). Closed in Revision 2 (ruling 75, accepted).** Changed from the pack so σ is 5 g (4.9997) to match z02 to z06; the pack's set has σ 5.57 g. The mean (710.05 g) still differs slightly from the median and mode, so "approximately equal" stays visible.
- **3. A2 (root). Closed in Revision 2 (kept; summary, root decision 4).** The pack's two ovens (σ 4 and 9) are scene 6's teaching example, so A2 uses two farms' eggs drawn on one axis (HSC style), testing the same two ideas on a new picture.

## Review notes

- Revision 2 (19 Nov 2026): learning review resolved (5 of 5 findings applied; see "Revision 2"). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from p08's frame for a Standard 2 student; check that the bell arises from the loaves before it is named, that "normal" is not read as "ordinary", that each centre's picture is clear, that the skewed contrast shows the mean moving, that "narrower means taller" is reasoned, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
