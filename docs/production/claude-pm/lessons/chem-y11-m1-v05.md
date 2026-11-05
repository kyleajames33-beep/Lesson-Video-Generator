# Year 11 Chemistry M1 V05: Paper chromatography and Rf values. Why do mixture components travel different distances in chromatography? (design)

Status: Revision 2 (6 Nov 2026): brief 177 review repairs applied. Needs a Codex error check before voicing. Summary: Rf limits now 0 ≤ Rf ≤ 1 and "cannot exceed 1". Narration 5,946 characters (joined parser count), about 537.2 s. Previously Revision 1 (5 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,946 characters (Revision 2; Revision 1 was 5,970 by the joined parser count), 16 scenes, about 537.2 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifth video of Year 11 Chemistry (2017 syllabus), Module 1, inquiry question "How do the properties of substances help us to classify and separate them?". Brief: `../chem-y11-design-brief.md`. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout: short task strip, equation strip, grouped givens, one stage at a time), `bio-y11-fa1-v05.md` (plates), `chem-m5-g02.md` and `chem-m8-p02.md` (chemistry calculation and practical conventions). Previous designs: `chem-y11-m1-v01.md` to `chem-y11-m1-v04.md` (Revision 1; v04's final frame is this video's opening frame). Starter pack: `../pre-design/chem-y11/chem-y11-m1-v05.md` (site worked example used unchanged; its candidates 1 and 2 become attempts 1 and 2, rewritten; its visual note followed: the strip, baseline, solvent front and spot centres are coded so distances are exact). Site lesson read in full (5 Nov, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson04.sa.html`, SHA256 `2a97d7f9b066e10dce979bf05797b6bf600f73547e5db21cb776f8a13b479f08` (recomputed 5 Nov; matches the route and the pack). Site sections used in order: chromatography (principle: attraction to the stationary phase against the mobile phase; paper chromatography; the Rf value and the labelled strip figure); the term-matching activity (stationary phase, mobile phase, Rf, origin); worked example 2 (front 8.0 cm, P 2.4 cm, Q 6.4 cm, standards X 0.30 and Y 0.80, with logged correction 7 applied); "Inverting the Rf formula" trap; drills 3 and 4; Short Answer Q7 idea (greatest affinity for the mobile phase); multiple-choice feedback "Rf values are only comparable under identical conditions". Route entry: `chem-y11-m1-v05`; practical: "Paper chromatography with approved solvent".

Owner rules applied: as v01 to v04; calculations: task strip, equation strip and grouped givens with units, one reasoning stage at a time, earlier results kept only while needed; every number recalculated (below).

Syllabus content (NSW Chemistry Stage 6, 2017, Year 11, Module 1; local ledger ID `C1-IQ1-01`), quoted from the route JSON `syllabusActions`:

"explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
- using separation techniques based on physical properties (ACSCH026)
- calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

This video teaches chromatography, a separation technique based on physical properties (attraction to the paper against solubility in the solvent), for a homogeneous mixture of dissolved dyes.

**Boundary:** opens on v04's final frame (a paper strip with a pencil baseline and a black ink dot). Teaches: running a paper chromatogram (solvent below the baseline, lid); stationary phase and mobile phase; capillary rise named in plain words; why components travel different distances (each particle keeps switching between sticking to the paper and moving with the solvent; stronger attraction to the paper means less time moving, so a shorter distance); the solvent front; the Rf value (distance moved by the spot ÷ distance moved by the solvent front, both from the baseline, to the spot's centre), 0 to 1, no units; site worked example 2; why a ratio (a shorter run gives the same Rf) and why the conditions must match; comparing with standards run alongside, as support, not proof (correction 7); practical details (pencil baseline, solvent below the line, lid, mark the front); traps (paper edge, spot edge, flipped ratio). Stops there (route stop: "Explain mobile/stationary affinities and calculate Rf from the common baseline; compare standards under the same conditions without claiming unique identity."). Not taught: thin-layer chromatography (named only in an author note); polarity and intermolecular forces (later Module 1 and Module 2 topics); two-way chromatography; masses and percentage composition (v06).

## Decisions

- **Learner question (route wording kept; open decision 1).** "Why do mixture components travel different distances in chromatography?" is causal and concrete. On-screen heading: "Chromatography: why do the dyes travel different distances?". The answer, built in order: two phases, one still and one moving (2); every particle keeps switching between sticking to the paper and moving with the solvent; more time stuck means a shorter distance in the same run (3); so the distance, as a share of the solvent's distance, describes that balance (Rf) (5 to 7); the balance depends on paper, solvent and temperature, so comparisons need the same conditions (7, 8).
- **Opening frame (assumed: v04's final frame, `chem-y11-m1-v04.md` "Final frame").** The coded paper strip (about 220 × 760 px) with a grey pencil baseline about 125 px above its bottom edge and a black ink dot about 28 px across centred on it; the callout "black ink: several dyes"; the chip "only a few drops"; the "Next" chip. Scene 1 lowers this same strip into the jar.
- **Hook (site principle, made visible).** The strip goes into a tall glass jar (new two-layer plate: the strip and solvent sit between the jar's back and front layers) with water below the baseline; the lid closes. The solvent front climbs; the black dot smears and splits into three spots: blue (lowest), pink, yellow (highest). Times compressed (grey tag "about 20 minutes, sped up"). The question lands on the observation that all three started on the same line and had the same time.
- **Two phases (site "Principle" and "Paper Chromatography").** Stationary phase: the paper, which stays still. Mobile phase: the solvent (here water), which moves. Capillary rise in plain words: water is drawn up into the tiny gaps between the paper's fibres, the way a spill soaks into a paper towel. Author note a: strictly, in paper chromatography the stationary phase is water held on the cellulose fibres; the site and this course call it "the paper".
- **The mechanism (site principle; pack "show repeated partition/retention at an appropriate qualitative level").** A particle view on the strip: blue and yellow dye particles (simple coloured circles) keep switching between sticking to fibres (stopped) and dissolving in the moving water (carried up). The blue particles stick more often and for longer; the yellow ones mostly ride the water. A "time moving" bar beside each (blue short, yellow long). Same time for both, so the distances differ. No polarity or intermolecular-force vocabulary (later topics).
- **In-teaching prediction (3 s countdown).** "Which dye is most strongly attracted to the paper?" Three spots on screen. Answer: blue, the lowest: it spent the most time stuck. (Site drill 4 idea.)
- **Rf (site "The Rf Value", figure and term match; worked example 2 unchanged).** Definitions first: baseline (the pencil line where the sample starts), solvent front (the highest point the solvent reached), spot centre. Equation strip: "Rf = distance moved by the spot ÷ distance moved by the solvent front". Calculation layout: task strip "Calculate Rf for spots P and Q"; givens grouped with units: "solvent front: 8.0 cm; spot P: 2.4 cm; spot Q: 6.4 cm (all from the baseline)"; one row per spot. Values to two significant figures, as the data (0.30, 0.80). The site's "green food colouring" is not on the site; the example is introduced as "a green food colouring" (an invented context for the unchanged numbers, open decision 2) so that it differs from the hook's black ink.
- **Why a ratio, and why the same conditions (site "characteristic Rf value for a given solvent and stationary phase"; MC feedback).** A second strip of the same colouring stopped at half time: front 4.0 cm, P 1.2 cm, Q 3.2 cm, the same Rf values (0.30, 0.80). Then the conditions: change the paper, solvent or temperature and Rf changes (a ghost third strip in a different solvent shows different heights, no values).
- **Standards (worked example 2, step 4, with correction 7).** X (Rf 0.30) and Y (0.80) are standards run on the same paper, in the same solvent, at the same time. P matches X and Q matches Y: the match supports the identity; other substances can share an Rf; a second solvent strengthens the case. The site's "the substances are the same" is not repeated.
- **Practical details (site paper chromatography paragraph; route practical).** Pencil baseline (graphite doesn't dissolve; ink would run), solvent below the baseline (or the spots dissolve into the pool), lid on (so solvent doesn't evaporate from the paper as it climbs; author note b), mark the front at once (it dries and vanishes). Approved solvent (water here; any other solvent is the teacher's choice, author note c).
- **Traps (site "Inverting the Rf formula"; pack section 4).** Measure from the baseline, not the paper's bottom edge; to the spot's centre; spot over front (Rf above 1 means it's flipped).
- **Memory aid (new; see "Memory aid check").** "Spot over front, and stickier stays lower." Two halves: the formula (and why it's below one) and the cause (stronger attraction to the paper, smaller Rf).
- **Attempts (original, HSC style).** A1 (pack candidate 1, with a context): an unknown food dye run alongside a tartrazine standard (Rf 0.40 under these conditions); front 10.0 cm, spot 4.0 cm; calculate Rf and evaluate "the unknown must be tartrazine". A2 (pack candidate 2): front 12.0 cm, spots A 3.0 cm and B 9.0 cm; calculate both Rf values and identify which component is more strongly attracted to the stationary phase. Crossed: A1 "Rf = 10.0 ÷ 4.0 = 2.5"; A2 "B, because it moved further".
- **Mistake scene:** none separate. "Distance alone identifies a substance" (7); "Rf can be compared across different solvents" (7, 8); "a matching Rf proves identity" (8; A1 evaluated); "measure from the paper's edge" (10); "flipped ratio" (10; A1 crossed); "the spot that moved furthest is most attracted to the paper" (A2 crossed).
- **Final frame and handoff (route next `chem-y11-m1-v06`: "What fraction of a separated mixture came from each component?").** Described exactly under "Final frame". Chromatography identifies components but doesn't measure how much of each; the final frame brings back v03's recovered sand and salt on watch glasses beside a balance with a blank readout, and the question "how much of each?".
- **Site sources used:** chromatography principle; paper chromatography (stationary cellulose, mobile solvent, capillary action); "Rf is always between 0 and 1"; the strip figure's "measure every distance from the origin"; the term match; worked example 2 (all numbers unchanged); "Inverting the Rf formula"; drill 3 (4.5 ÷ 12.0 = 0.375, not used on screen; checked); drill 4 (lower Rf, stronger attraction to the stationary phase); Short Answer Q7 (highest Rf, greatest affinity for the mobile phase); MC feedback "Rf values are only comparable under identical conditions". Not used: TLC (author note a); the site's "quoted to 2 d.p." exam strategy (site note 1).
- **Site notes (quoted from site lesson 4, read 5 Nov; for root to log in `../site-corrections-chem-y11.md` if accepted; not yet logged):**
  1. Exam strategy box: "R f = component distance ÷ solvent front distance, quoted to 2 d.p." Rf should follow the data's significant figures (2.4 ÷ 8.0 → 0.30, two significant figures); "2 d.p." happens to agree here but not in general (drill 3: 4.5 ÷ 12.0 = 0.375, quoted as 0.38, which is two significant figures for 4.5 but the rule given is decimal places). Suggest "quoted to the same number of significant figures as the data (usually two)".
  2. Strip figure: "Component B travelled 149.5 mm ... Rf = 149.5 ÷ 230 = 0.65" against "A 92 mm ... 0.40". Correct arithmetic; precision note only: 149.5 mm implies a ruler read to 0.5 mm, while 92 mm and 230 mm are read to 1 mm. Suggest 150 mm (Rf 0.65 unchanged to two significant figures). Style only.
  - Logged correction 7 applied (a match supports, doesn't prove). Checked and correct: 2.4 ÷ 8.0 = 0.30; 6.4 ÷ 8.0 = 0.80; 92 ÷ 230 = 0.40; 149.5 ÷ 230 = 0.65; Q7 (3.6, 9.6, 7.2 ÷ 12.0 = 0.30, 0.80, 0.60); activity 2 (1.8, 4.5, 7.2 ÷ 9.0 = 0.20, 0.50, 0.80).
- **Cause chain taught, in order:** (1) same start, same time, different distances (1); (2) a still phase and a moving phase (2); (3) switching between them; more time stuck, shorter distance (3, 4); (4) Rf as the fraction of the solvent's distance (5, 6); (5) a ratio survives a shorter run; conditions change it (7); (6) standards under the same conditions support identity (8); (7) practical details protect the measurement (9); (8) traps; memory aid (10).
- **Entry knowledge:** v01 (mixture; homogeneous; particle views); v02 (physical property; a match is evidence, not proof; two properties); v03 (dissolved particles move with the water; solution); v04 (handoff case); Stage 5 dissolving and ratios; reading a ruler in centimetres.
- **Learner-visible vocabulary (plain meaning at first use):** chromatography (1); stationary phase (the part that stays still: the paper, 2); mobile phase (the part that moves: the solvent, 2); solvent (recalled from v03); baseline (the pencil line where the sample starts, 5); solvent front (the highest point the solvent reached, 5); Rf value (distance moved by the spot ÷ distance moved by the solvent front, 5); standard (a known substance run alongside, 8).
- **Legacy logic ported:** none.
- **New explainer motion (coded, plus plates):** **developing strip** (kit gap 1: a coded paper strip with a baseline, a sample dot, a rising solvent front (wet tint) and spots that separate from the dot at set rates, each spot moving at a fixed fraction of the front's speed, so every frame obeys Rf; used in scenes 1 to 10 and the attempts' feedback); **phase particle view** (scene 3: v01 particle view on the paper's fibres, dye particles alternating between "stuck" and "carried" with a per-kind stick probability, "time moving" bars); **measuring rulers** (scenes 5 to 7: coded dimension lines from the baseline to each spot centre and to the front, with values written on them); **half-run comparison** (scene 7: two strips side by side, one at half time, rulers and Rf rows for both); **standard lanes** (scene 8: the strip widens to three lanes: sample, X, Y, with matching horizontal dashed lines); `Countdown` (3 s in scene 4, 10 s in scenes 11 and 13), `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout:** as v01 (heading top-left; the jar or strip at the left; particle view, calculation strips or cards in the right two thirds; at most three bright text items; nothing below 88% of frame height). Calculation zone: task strip at the top of the right zone, equation strip under it, grouped givens under that, then one working row at a time.
- **No human figures.** The pencil draws the baseline by itself (`m5x-pencil-v1.png` moving along the line); the strip lowers into the jar by itself; the lid slides on.
- **Author notes (not learner copy):**
  (a) Paper chromatography's stationary phase is, strictly, water bound to the cellulose fibres (partition chromatography); the course and the site call it "the paper". Thin-layer chromatography (silica or alumina on a plate) works on the same principle and is not shown. The mechanism is described as "sticking to the paper" against "dissolving in the moving water", without polarity language.
  (b) The lid keeps the air in the jar saturated with solvent vapour, so the solvent doesn't evaporate from the paper's surface as it climbs (which would slow and distort the front). Narration: "so the solvent doesn't evaporate off the paper as it climbs".
  (c) Water is used as the solvent for water-soluble felt-tip ink and food colourings (low hazard). Any other solvent (for example ethanol or a salt solution) is the teacher's choice under the school's risk assessment; ethanol is flammable. The route practical says "approved solvent".
  (d) Hook strip (illustrative, not measured): front at 6.0 cm; blue spot 1.2 cm (Rf 0.20), pink 3.0 cm (0.50), yellow 4.8 cm (0.80). These values drive the animation only; no numbers are shown for the hook.
  (e) Worked example (site, unchanged): front 8.0 cm; P 2.4 cm → 0.30; Q 6.4 cm → 0.80; X 0.30, Y 0.80. Half run (new): front 4.0 cm; P 1.2 cm, Q 3.2 cm → 0.30, 0.80 (each distance is half; the ratio is unchanged). The half-run values are exact halves of the site's, a teaching idealisation (real spots spread slightly as they travel).
  (f) Significant figures: data to two significant figures (8.0, 2.4, 6.4; 10.0 and 4.0; 12.0, 3.0, 9.0), answers to two significant figures (0.30, 0.80, 0.40, 0.25, 0.75). Rf has no units because both distances are in centimetres.
  (g) Tartrazine (A1) is a real yellow food dye (food additive 102); its Rf depends on the system, so the card states the standard's Rf "under these conditions". No claim is made about its value elsewhere.
  (h) Pronunciations: "R F value" (spoken as the letters, "ar-eff"); "chromatography" (kroh-muh-TOG-ruh-fee); "zero point three zero"; "tartrazine" (TAR-truh-zeen).
- **Open decisions for root:** see "Open decisions" at the end of this file.

Main question: *One black dot of ink, one strip of paper, a little water. The dot splits into three coloured spots at three different heights, though they all started on the same line and had the same time. Why do mixture components travel different distances in chromatography, and how do we use those distances?*
Entry knowledge: v01 to v04; Stage 5 dissolving and ratios; ruler measurements in centimetres.
Stops after: stationary and mobile phases; why distances differ; Rf from the common baseline; why a ratio; same conditions; standards support identity, not prove it; practical details; traps.
Handoff: v06, what fraction of a separated mixture came from each component (percentage by mass).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as `chem-y11-m1-v01.md`, plus: paper strip white with a faint fibre texture; pencil baseline grey; wet paper a faint blue tint below the solvent front; dye spots blue `#3a63b8`, pink `#d4588f`, yellow `#e3b72f` (hook), P blue and Q yellow (worked example); measurement lines ink with values in navy (givens) and results bright. Screen writes "Rf" with the f as a subscript (R_f) and "cm".

### 1. hook (one dot, three spots)
> Here's the black ink dot from last time, sitting on a pencil line near the bottom of a paper strip. Stand the strip in a jar with a little water, below the line, and put on the **lid**. The water slowly soaks up the paper, and as it passes the ink, the black dot comes **apart**. A blue dye, a pink dye and a yellow dye end up at three different heights. They all started on the same line, and they all had the same time. So why do mixture components travel different distances in **chromatography**?

Visual: opens on v04's final frame (see "Opening frame"); the callout and chips fade. The jar's back layer (`y11c-chromatography-jar-back-v1.png`, new) fades in around the strip's lower half with a shallow coded layer of water (below the baseline, tag "water below the line"); the strip lowers into it by itself; the front layer (`y11c-chromatography-jar-front-v1.png`) closes over it; on "lid" the lid slides on. A grey tag "about 20 minutes, sped up". The developing strip runs: the wet tint climbs (solvent front, a crisp edge); on "apart" the black dot smears upward and splits into three spots (author note d): blue lowest, pink middle, yellow highest, still moving as the front rises, then stopping when the run stops. On "same line" a dashed line along the baseline glows; on "same time" a small coded timer chip "same run". On "chromatography" the heading writes on: "Chromatography: why do the dyes travel different distances?".

### 2. two phases
> Chromatography always has two parts. The paper is the stationary phase, the part that stays still. The water is the mobile phase, the part that **moves**. It climbs the paper the way a spill soaks into a paper towel, drawn up into the tiny gaps between the paper's **fibres**. As it climbs, it carries the dissolved dyes with it, but not all at the same speed.

Visual: the jar shrinks to the left. The right column writes "stationary phase: stays still (the paper)" with an arrow to the strip; on "moves" it writes "mobile phase: moves (the solvent, water)" with an arrow to the wet tint. On "fibres" a magnifier on the strip just below the front shows coded tangled fibres with water creeping up through the gaps between them (tag "drawn up between the fibres"). On "not all at the same speed" three small arrows of different lengths point up from the three spots.

### 3. why the distances differ
> Here's the key. Each dye particle keeps switching between two places. It can stick to the paper and stay put, or it can dissolve in the moving water and get carried up. A dye that's attracted more strongly to the paper spends more of its time stuck, so it falls behind and travels a shorter **distance**. A dye that dissolves well in the water, and sticks only weakly to the paper, spends more of its time moving, so it travels **further**. Every dye had the same time, so different attractions spread them apart. That's why one black dot becomes three **spots**.

Visual: camera push into a phase particle view on the strip (author note a): fibres as pale bars, water molecules streaming up between them, blue and yellow dye particles. Each dye particle alternates: stuck on a fibre (it stops, a small "stuck" tick) or carried by the water (it rides up). On "distance" the blue particles are ringed: they stick often and long; a "time moving" bar beside them fills only a little. On "further" the yellow particles are ringed: they mostly ride; their "time moving" bar fills a lot. On "same time" a shared timer runs for both; the two groups separate. On "spots" the view pulls back to the strip: the three spots, each with its own "time moving" bar beside it (blue short, pink middle, yellow long).

### 4. prediction (countdown, 3 seconds)
> Quick prediction. Of these three dyes, which one is attracted most strongly to the paper? Have a **think**.

Visual: the finished strip at the centre with its three spots (no bars, no labels except colours). Question: "Which dye is most strongly attracted to the paper (the stationary phase)?". On "think" the 3 s `Countdown` ring runs. Nothing answer-bearing.

### 5. the Rf value
> It's the blue one, lowest on the strip, because it spent the most time stuck. To compare spots fairly, chemists use a ratio called the R F value. It's the distance the spot moved, divided by the distance the solvent **moved**. Both are measured from the baseline, the pencil line where the sample started. For the spot, measure to its **centre**. For the solvent, measure to the solvent front, the highest point the solvent reached. A spot can never get ahead of the solvent, so R F is always between zero and **one**, and it has no units.

Visual: the blue spot is ringed (tag "most time stuck: lowest"). The right zone's equation strip writes on "moved": "R_f = distance moved by the spot ÷ distance moved by the solvent front". On "baseline" the pencil line glows with the tag "baseline: where the sample started". On "centre" a dimension line draws from the baseline up to the blue spot's centre (a small crosshair at the centre). On "solvent front" a second dimension line draws from the baseline to the front's edge (tag "solvent front: the highest point reached"). On "one" a chip writes "0 ≤ R_f ≤ 1, no units" with a ghost arrow showing a spot can't pass the front.

### 6. worked example: P and Q
> Let's try one. A green food colouring separates into two spots, P and Q. The solvent front is eight point zero centimetres above the baseline. Spot P moved two point four centimetres, and spot Q moved six point **four**. For P, two point four divided by eight point zero gives zero point three **zero**. For Q, six point four divided by eight point zero gives zero point eight **zero**. Both answers have two significant figures, like the measurements.

Visual: board shifts to a calculation layout. Left: a new developed strip (green dot on the baseline at the start; after development a blue spot P and a yellow spot Q, author note e). Right: task strip "Calculate R_f for spots P and Q"; equation strip (from scene 5) stays; givens group (navy, with units), each writing as spoken and its dimension line drawing on the strip: "solvent front: 8.0 cm"; "spot P: 2.4 cm"; on "four" "spot Q: 6.4 cm"; a grey tag "all from the baseline". Working rows one at a time: on "zero" (first) "R_f(P) = 2.4 ÷ 8.0 = 0.30"; on "zero" (second) "R_f(Q) = 6.4 ÷ 8.0 = 0.80" (the P row dims). On the last sentence a grey tag "2 significant figures, like the data".

### 7. why a ratio, and why the conditions matter
> Why a ratio? If you'd stopped this run halfway, the front would be at four point zero centimetres, P at one point two and Q at three point two. Every distance halves, but the ratios stay at zero point three zero and zero point eight **zero**. Each spot moves a fixed fraction of the solvent's distance. But that fraction depends on the conditions, the type of paper, the solvent and the temperature. Change any of them, and the R F values **change**.

Visual: a second strip slides in beside the first, labelled "stopped halfway" (author note e). On "four point zero" its dimension lines draw: "front: 4.0 cm", "P: 1.2 cm", "Q: 3.2 cm". On "zero" (last bold) rows write beside it: "1.2 ÷ 4.0 = 0.30", "3.2 ÷ 4.0 = 0.80", and both strips' R_f rows glow together (tag "same fraction"). On "the type of paper" three small chips write: "paper", "solvent", "temperature". On "change" a ghost third strip "different solvent" appears with its spots at different heights (no values) and the chip "R_f depends on the conditions".

### 8. comparing with standards
> That's how chromatography helps identify substances. Run known substances, called standards, on the same paper, in the same solvent, at the same **time**. Here, standard X has an R F of zero point three zero, and standard Y has zero point eight zero. So spot P matches X, and spot Q matches **Y**. But a match supports the identity, it doesn't prove it, because two different substances can share an R F value. To be more confident, run them again in a different solvent, and check they still **match**.

Visual: the worked-example strip widens into a three-lane sheet: lane 1 the green sample (P and Q), lane 2 standard X, lane 3 standard Y, all on one baseline. On "time" the three lanes develop together. Tags "X: R_f 0.30", "Y: R_f 0.80". On "Y" dashed horizontal lines join P to X and Q to Y. On "supports the identity" a chip "match: supports, doesn't prove" (amber underline); a ghost lane "another dye, Z" shows a spot at the same height as X (tag "same R_f, different substance"). On "match" a mini second sheet "different solvent" shows P and X again level with each other at a new height (tag "still matches: stronger evidence").

### 9. details that protect the measurement
> A few details make the results trustworthy. Draw the baseline in pencil, because pencil doesn't dissolve, but ink would run up the paper too. Keep the solvent below the baseline, or the spots just dissolve into the **pool**. Keep the lid on, so the solvent doesn't evaporate off the paper as it climbs. And mark the solvent front as soon as you take the strip out, because it dries and **disappears**.

Visual: a fresh strip; the pencil plate (`m5x-pencil-v1.png`) draws the baseline by itself (tag "pencil: doesn't dissolve"), with a ghost ink line beside it that smears upward when wetted (crossed, caption "ink would run"). On "pool" a ghost jar with the solvent above the baseline: the spot bleeds out into the liquid (crossed, caption "solvent below the line"). On "lid" the lid slides on (tag "lid: stops the solvent evaporating off the paper", author note b). On "disappears" the strip lifts out, a coded pencil tick marks the front's edge, and the wet tint fades (tag "mark the front straight away").

### 10. traps, and a way to remember
> Two classic traps. Measure from the baseline, not from the bottom edge of the paper, and to the centre of each spot. And put the spot's distance on top. If you ever get an R F bigger than one, you've flipped it. Here's a way to remember the whole idea. Spot over front, and stickier stays **lower**. The spot cannot pass the front. And the dye that sticks to the paper most has the smallest R **F**.

Visual: on the scene 6 strip, a ghost dimension line from the paper's bottom edge to P is crossed (caption "from the baseline"); a ghost line to P's top edge is crossed (caption "to the centre"). A chip "R_f = 8.0 ÷ 2.4 = 3.3" fades in and is crossed (caption "spot over front: cannot exceed 1"). On "Spot over front" the handwritten line writes large: "Spot over front, and stickier stays lower." On "lower" the blue spot of the hook strip glows (tag "stickiest: lowest"). On "F" (last) a small number line 0 to 1 shows the three hook spots placed at 0.20, 0.50 and 0.80 (author note d; screen only, no narration of the values). Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An unknown food dye is run alongside a tartrazine standard, on the same paper in the same solvent. The solvent front travels ten point zero centimetres, and the unknown's spot travels four point zero centimetres. Tartrazine's R F under these conditions is zero point four zero. Calculate the unknown's R F, and evaluate the claim that it must be tartrazine. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry"), worded as printed: "An unknown food dye was run alongside a standard sample of the dye tartrazine, on the same chromatography paper in the same solvent. The solvent front travelled 10.0 cm from the baseline, and the centre of the unknown's spot travelled 4.0 cm. Under these conditions, tartrazine has an Rf value of 0.40. (a) Calculate the Rf value of the unknown dye. (b) A student concludes that the unknown dye must be tartrazine. Evaluate this conclusion." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No strip (nothing answer-bearing).

### 12. feedback 1 (brief)
> R F is four point zero divided by ten point zero, which is zero point four **zero**. That matches tartrazine under the same conditions, so it supports the conclusion. But it doesn't prove it, because another dye could have the same R F. Running both in a second solvent would make the case **stronger**. Ten divided by four, two point five, is the slip to **avoid**.

Visual: card shrinks to the top. A small strip draws with the front at 10.0 cm and the spot at 4.0 cm (dimension lines; "10.0 cm" and "4.0 cm" underlined in the card). Row "(a) R_f = 4.0 ÷ 10.0 = 0.40" (on "zero"). Row "(b) matches 0.40 under the same conditions: supports, doesn't prove; another dye may share it; test in a second solvent" (on "stronger"). On "avoid" a chip "R_f = 10.0 ÷ 4.0 = 2.5" fades in and is crossed (caption "spot over front: cannot exceed 1"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. In a paper chromatogram, the solvent front travels twelve point zero centimetres. Spot A travels three point zero centimetres, and spot B travels nine point zero. Calculate the R F of each spot, and identify which component is more strongly attracted to the stationary phase. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a paper chromatography experiment, the solvent front travelled 12.0 cm from the baseline. Spot A travelled 3.0 cm and spot B travelled 9.0 cm. (a) Calculate the Rf value of each spot. (b) Identify which component is more strongly attracted to the stationary phase. Justify your answer." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 14. feedback 2 (brief)
> For A, three point zero over twelve point zero is zero point two **five**. For B, nine point zero over twelve point zero is zero point seven **five**. A is more strongly attracted to the stationary phase. It spent more time stuck to the paper, so it travelled a smaller fraction of the solvent's distance. Choosing B because it went further is the slip to **avoid**.

Visual: card shrinks to the top. A small strip with front 12.0 cm, A at 3.0 cm, B at 9.0 cm (dimension lines; values underlined in the card). Rows: on "five" (first) "R_f(A) = 3.0 ÷ 12.0 = 0.25"; on "five" (second) "R_f(B) = 9.0 ÷ 12.0 = 0.75". Row "(b) A: lower R_f, more time stuck to the paper" with "stickier stays lower" in grey. On "avoid" a chip "B: it moved further" fades in and is crossed (caption "further = less attracted to the paper"). Hold about 1 second.

### 15. handoff
> So chromatography tells you which substances are in a mixture. It doesn't tell you how much of each there is. For that, we go back to the sand and salt we separated, and we weigh them. Next time, we'll work out what fraction of a separated mixture came from each **component**.

Visual: board clears. The hook's developed black-ink strip shrinks to the far left, dimmed, with the tag "which components?". On "how much of each" the analytical balance plate (`m8-balance-watch-glass-v1.png`) slides in at the centre with a blank coded readout over its display. On "sand and salt" the two watch glass plates from v03 slide in at the right, stacked, tagged "sand" (`y11c-watch-glass-sand-v1.png`) and "salt" (`y11c-watch-glass-salt-v1.png`), with the chip "how much of each?". On "component" the next chip writes centred above: "Next: what fraction of a separated mixture came from each component?". This is the final frame (see "Final frame"). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Paper chromatography: the stationary phase (paper) stays still; the mobile phase (solvent) moves up the paper. Each component keeps switching between sticking to the paper and moving with the solvent.
2. Stronger attraction to the paper: more time stuck, shorter distance, smaller Rf. Dissolves well in the solvent: travels further, larger Rf.
3. Rf = distance moved by the spot ÷ distance moved by the solvent front, both from the baseline (to the spot's centre). 0 ≤ Rf ≤ 1, no units.
4. Compare Rf values only under the same conditions (paper, solvent, temperature), with standards run alongside. A match supports an identity; it does not prove it. Pencil baseline, solvent below it, lid on, mark the front.

Memory aid (large, on the notes screen): *Spot over front, and stickier stays lower.*

## Opening frame

Assumed equal to `chem-y11-m1-v04.md` "Final frame": paper board; centre, a coded strip of chromatography paper standing upright (about 220 × 760 px, white with a faint fibre texture), a thin grey pencil baseline about 125 px above its bottom edge, a round black ink dot about 28 px across centred on the baseline; a grey callout to the dot "black ink: several dyes"; at the right, the chip "only a few drops"; centred above, the chip "Next: why do the dyes travel different distances?". No heading, no jar.

## Final frame

Paper board, no heading. Three groups in a row across the frame, all above the bottom 12%:
- **Left (dimmed to about 50% opacity):** the hook's developed chromatogram from scene 1, scaled down to about 140 px wide × 480 px tall: white strip, grey pencil baseline, the faint wet tint up to the solvent front, and three spots (blue lowest, pink middle, yellow highest; heights in the ratio 0.20, 0.50, 0.80 of the front's distance). Grey tag under it: "which components?".
- **Centre:** the analytical balance plate (`public/assets/chemistry/m8-balance-watch-glass-v1.png`, about 520 px wide, scaled uniformly), with a coded blank readout box laid over its display showing "– – – . – – g" in grey dashes (no number).
- **Right:** two watch glass plates stacked vertically, about 300 px wide each: `y11c-watch-glass-sand-v1.png` (dry golden-brown sand) with the grey tag "sand", and below it `y11c-watch-glass-salt-v1.png` (white salt crystals) with the grey tag "salt". Beside them, the amber chip "how much of each?".
- **Centred above all three:** the chip "Next: what fraction of a separated mixture came from each component?".
No numbers anywhere in the frame (v06 supplies its own masses). v06 opens on this frame.

## Teaching checks

- **Does it explain causes?** Why the dyes separate: each switches between sticking to the paper and moving with the water, and stronger attraction to the paper means more time stuck and a shorter distance in the same time (3). Why the water climbs: it is drawn up between the fibres (2). Why use a ratio: a shorter run moves everything proportionally, so the fraction is fixed (7). Why the conditions must match: paper, solvent and temperature change the attractions (7). Why a match isn't proof: different substances can share an Rf (8). Why each practical detail: pencil doesn't dissolve; spots dissolve into the pool; evaporation from the paper; the front dries and disappears (9).
- **Misconceptions addressed:** distance alone identifies (7); Rf compared across solvents (7, 8); a match proves identity (8; A1); measuring from the edge or to the spot's top (10); the flipped ratio (10; A1 crossed); furthest means most attracted to the paper (A2 crossed).
- **One idea at a time:** the mechanism (2, 3) and the prediction (4) before any number; Rf defined (5) before calculated (6); why a ratio (7) before standards (8).
- **Video makes it easier:** the dot splits into spots live (1); particles visibly alternate between stuck and carried, with time bars (3); dimension lines draw from the baseline as each value is spoken (5, 6); two strips at different run lengths give the same ratios (7); lanes line up with the standards, and a third dye lines up too (8); ghost mistakes bleed and smear (9).
- **Response opportunity:** one in-teaching prediction (3 s) and two unseen HSC-style tasks with every condition visible ("same paper in the same solvent", "under these conditions", every distance "from the baseline"), 10 seconds each; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 25 s.
- **Avoided double teaching:** v02's "a match is evidence, not proof" and v03's "dissolved particles move with the water" are recalled in a phrase.
- **Syllabus coverage:** `C1-IQ1-01`: separation techniques based on physical properties (chromatography) for a homogeneous mixture, with the route practical (paper chromatography with approved solvent) (1 to 10; key notes 1 to 4).
- **Out of scope by design:** TLC; polarity and intermolecular forces; percentage composition (v06).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An unknown food dye was run alongside a standard sample of the dye tartrazine, on the same chromatography paper in the same solvent. The solvent front travelled 10.0 cm from the baseline, and the centre of the unknown's spot travelled 4.0 cm. Under these conditions, tartrazine has an Rf value of 0.40. (a) Calculate the Rf value of the unknown dye. (b) A student concludes that the unknown dye must be tartrazine. Evaluate this conclusion."
Model answer: (a) Rf = 4.0 ÷ 10.0 = 0.40 (no units). (b) The unknown's Rf equals tartrazine's under identical conditions, which supports the conclusion; however, other dyes may have the same Rf in this system, so the match does not prove the identity. Running the unknown and the standard together in a second, different solvent (or using another test) would strengthen the conclusion. Classic mistake (crossed): "Rf = 10.0 ÷ 4.0 = 2.5".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "In a paper chromatography experiment, the solvent front travelled 12.0 cm from the baseline. Spot A travelled 3.0 cm and spot B travelled 9.0 cm. (a) Calculate the Rf value of each spot. (b) Identify which component is more strongly attracted to the stationary phase. Justify your answer."
Model answer: (a) Rf(A) = 3.0 ÷ 12.0 = 0.25; Rf(B) = 9.0 ÷ 12.0 = 0.75. (b) A. It has the lower Rf: it travelled a smaller fraction of the solvent's distance, because it spent more of the time attracted to (stuck on) the stationary phase rather than moving with the mobile phase. Classic mistake (crossed): "B, because it moved further".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook strip (animation only) | front 6.0 cm; blue 1.2 cm, pink 3.0 cm, yellow 4.8 cm; Rf 0.20, 0.50, 0.80 (number line in scene 10 and final frame heights, screen only) | 1, 10, final frame |
| Worked example (site) | front 8.0 cm; P 2.4 cm → 0.30; Q 6.4 cm → 0.80; X 0.30; Y 0.80 | 6, 8, 10 |
| Half run | front 4.0 cm; P 1.2 cm → 0.30; Q 3.2 cm → 0.80 | 7 |
| Crossed flip | 8.0 ÷ 2.4 = 3.3 | 10 |
| A1 | front 10.0 cm; spot 4.0 cm → 0.40; standard 0.40; crossed 10.0 ÷ 4.0 = 2.5 | 11, 12 |
| A2 | front 12.0 cm; A 3.0 cm → 0.25; B 9.0 cm → 0.75 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 Nov); Codex to re-check.

- 2.4 / 8.0 = 0.30; 6.4 / 8.0 = 0.80; 1.2 / 4.0 = 0.30; 3.2 / 4.0 = 0.80; 8.0 / 2.4 = 3.33 (shown 3.3).
- 4.0 / 10.0 = 0.40; 10.0 / 4.0 = 2.5.
- 3.0 / 12.0 = 0.25; 9.0 / 12.0 = 0.75.
- Hook: 1.2 / 6.0 = 0.20; 3.0 / 6.0 = 0.50; 4.8 / 6.0 = 0.80.
- Site checks (not shown): 92 / 230 = 0.40; 149.5 / 230 = 0.65; 4.5 / 12.0 = 0.375; Q7 3.6, 9.6, 7.2 / 12.0 = 0.30, 0.80, 0.60.

## Memory aid check

- **"Spot over front, and stickier stays lower."** Written for this lesson. Meaning, as said in scene 10: Rf is the spot's distance over the front's distance (so it cannot exceed one, because the spot cannot pass the front; a spot left on the baseline has Rf = 0), and the component most strongly attracted to the paper (the stationary phase) travels least and has the smallest Rf. Assumptions checked: both distances from the baseline (said in scenes 5 and 10); "stickier" means more strongly attracted to the stationary phase relative to the mobile phase (in partition terms, the component that spends a larger share of time in the stationary phase); holds only within one run under one set of conditions. It helps a new case (A1's flip; A2 (b)). Introduced after the cause (3) and Rf (5 to 8).
- **Considered, not used:** "Rf is always below one" alone (no cause attached).

## Narration length estimate

Revision 1 count (5 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,970 characters**, 16 scenes. Characters per scene (1 to 16): 488, 352, 551, 103, 527, 440, 442, 491, 393, 415, 390, 354, 307, 354, 273, 75. At 13.3 characters per second the speech is about 449 s; add about 6 s of settling (the strip developing in scene 1, the three lanes in scene 8), 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s each for the memory-aid and handoff holds and about 55 s more of the quiet notes hold (about 90 s): **about 539 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's last sentence (keep the three arrows silent); scene 7's "Each spot moves a fixed fraction of the solvent's distance." (the glow carries it); scene 9's front-marking sentence (keep the tick silent).

## Scene list and build ids

Lesson key `c-y11-m1-v05` (route chem-y11-m1-v05). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v05` and build folder `docs/production/claude-pm/lessons/c-y11-m1-v05`.

In order (kebab-case; 16 scene headings, all `### N.`): hook, two-phases, why-distances-differ, prediction, rf-value, worked-example, why-a-ratio, standards, practical-details, traps-and-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except prediction (`hold`: the learner picks the stickiest dye during the 3 s countdown with the developed strip on screen), attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies four notes). `design.renderer`: explainer. `design.visualSystem`: Year 11 Chemistry paper board (v01 colour key) with the developing strip, phase particle view and calculation strips. Transitions: 1 to 2 camera pull back (jar shrinks left); 2 to 3 camera push into the paper; 3 to 4 pull back to the strip; 4 to 5 continue; 5 to 6 clear change to the calculation layout; 6 to 7 continue (second strip slides in); 7 to 8 continue (the strip widens into lanes); 8 to 9 clear change to a fresh strip; 9 to 10 continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/c-y11-m1-v05-learning-review.md`, `science_check` = `checks/c-y11-m1-v05-chemistry-check.md`.

## Assets

Have (inspected 5 Nov at contact-sheet size; scaled uniformly only, never stretched):
- `public/assets/biology/m5x-pencil-v1.png`: scene 9 (draws the baseline by itself).
- `public/assets/chemistry/m8-balance-watch-glass-v1.png` (2000 × 2000, RGBA; an analytical balance in a draught shield with a watch glass on the pan): scene 15 and the final frame.
- `y11c-watch-glass-sand-v1.png` and `y11c-watch-glass-salt-v1.png` (requested in v03): scene 15 and the final frame.
- **Checked, not used:** `y11-filter-paper-strip-v1.png` (a torn, crumpled strip lying flat; a chromatogram needs a straight, upright strip with exact distances, so the strip is coded, as the pack advises); `y11-paper-dot-white-v1.png` (a paper disc); `m6-analytical-balance-v1.png` (holds a beaker of white powder; the watch-glass balance matches v03's products).

Need (new plates, Codex):
1. `y11c-chromatography-jar-back-v1.png` and `y11c-chromatography-jar-front-v1.png` (aligned two-layer pair): scenes 1, 2, 9. Essential (the real apparatus; the coded strip and solvent sit between the layers so the glass reads in front of them).

Coded: the strip, baseline, ink and dye spots, wet tint and solvent front, the solvent layer, fibres and particles, time bars, dimension lines, crosshairs, calculation strips and rows, lanes, ghost strips and lanes, the lid's slide, the front tick, the number line, chips, crossed chips, the balance readout, attempt cards, answer rows, countdowns, key notes board.

Kit gaps (for the v05 build brief):
1. **Developing strip.** A coded paper strip component: width, height, baseline height, sample dot colour; a solvent front that rises with eased speed to a set final height; a list of components each with a colour and Rf, each spot's centre computed as baseline + Rf × (front − baseline) at every frame (so the drawing always obeys Rf), spots that start merged in the dot and spread slightly as they travel; optional lanes; dimension lines on demand. Used in scenes 1 to 15.

## Codex asset brief (Year 11 Chemistry M1 v05)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m1-v05.md`, route entry chem-y11-m1-v05. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `public/assets/chemistry/m8-beaker-hotplate-clear-v1.png` in line weight, palette and glass treatment, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y11c-chromatography-jar-back-v1.png` and `y11c-chromatography-jar-front-v1.png` (1200 × 2200 px, portrait, aligned two-layer pair): one tall, straight-sided clear glass jar (a chromatography tank), seen face-on with slight depth, with a separate flat glass lid resting on top. **Back layer:** the jar's back wall, base, inner rim and the lid's underside, painted as glass; the jar's interior must be empty and clear (no liquid, no paper). **Front layer:** only the front wall's highlights, front rim edge, the base's front lip and the lid's top surface, mostly transparent, so that a coded paper strip and a coded shallow solvent layer placed between the layers read as inside the jar. The inner floor must be flat and level; the interior width must fit a 220 px strip at the plate's intended display height of about 900 px with margin. Codex reports, in plate pixels: the inner floor line, the inner left and right walls, and the lid's bottom edge.

Report inspection on the paper background and the dark board background at about 900 px tall with a test rectangle (a white strip) placed between the layers, and confirm the layers overlay exactly. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m1-v05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table, including significant figures.
2. Confirm the chemistry of every learner-visible claim: stationary and mobile phases; the solvent rises by being drawn between the fibres; components that are more strongly attracted to the stationary phase travel less and have smaller Rf; Rf is measured from the baseline to the spot's centre and to the solvent front; 0 ≤ Rf ≤ 1, no units; Rf depends on paper, solvent and temperature; a matching Rf under the same conditions supports but does not prove identity (correction 7); pencil baseline, solvent below it, lid, mark the front.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm both attempt cards are original in wording, carry every condition the answer needs, and show nothing answer-bearing during the countdown.
5. Confirm the syllabus quote matches the route JSON `syllabusActions` exactly.
6. Confirm no person, hand or face is drawn or requested (the pencil and strip move by themselves).
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("colour", "centimetre", "litre").
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Confirm the "Final frame" description contains no numbers and matches scene 15.
10. Report site notes 1 and 2 under Decisions to root for `../site-corrections-chem-y11.md`.

## YouTube metadata (draft)

Title: Paper Chromatography and Rf Values: Why Dyes Travel Different Distances | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson04.sa.html

One black dot of ink, a strip of paper and a little water: the dot splits into three coloured spots at three different heights. See why: every dye keeps switching between sticking to the paper (the stationary phase) and moving with the solvent (the mobile phase), and the stickier it is, the less far it gets. Learn how to calculate an Rf value from the baseline, why it's a ratio, why conditions must match, how standards help identify a substance (without proving it), and the practical details that keep a chromatogram trustworthy. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
- using separation techniques based on physical properties (ACSCH026)
- calculating percentage composition by weight of component elements and/or compounds (ACSCH007)"

Previous: simple and fractional distillation. Next: what fraction of a separated mixture came from each component.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Learner question (root).** Kept as the route's wording; confirm.
- **2. Worked-example context (root).** The site's worked example 2 has no context; this design calls the sample "a green food colouring" (P blue, Q yellow), with every number unchanged. Confirm, or present it as "a mixture" with no context.
- **3. v06 handoff (root).** Checked against `chem-y11-m1-v06.md` (written in parallel, read 5 Nov): v06 assumes v05 ends on the developed chromatogram at the left with the handoff chip, uses an ink (as here), and notes that scene 1 can open directly on v03's sand and salt watch glasses if v05 ends on them. This final frame provides all three (chromatogram left, balance centre, watch glasses right, handoff chip above), with no numbers, so v06's 20.00 g mixture beaker can slide in beside the watch glasses. Root to confirm v06 scene 1 keeps the balance and watch glasses, or to ask for them to be cleared (only this file's "Final frame" and scene 15 visual would change).
- **4. Plate pair (root).** One new two-layer jar pair; without it the strip stands in a coded jar outline (clip-art risk).
- **5. Site notes (root).** Two notes for `../site-corrections-chem-y11.md`.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (check that "switching between stuck and moving" explains the distances before any number; that the 3 s prediction is fair; that scene 7's half run makes "why a ratio" obvious; that "supports, not proves" lands without undermining identification), then the science check and Codex error check.
- Every spot position must be computed from its Rf and the current front (kit gap 1), so the drawing and the numbers can never disagree; judge the development in scene 1 and the half run in scene 7 at playback speed.

## Revision 2 (6 November 2026, brief 177 repairs)

Findings from `../checks/c-y11-m1-v05-learning-review.md` and `../checks/c-y11-m1-v05-science-check.md` (status.md, "Codex hand-in: brief 177").

1. Scene 5 (should fix): limit chip now "0 ≤ R_f ≤ 1, no units" (a spot left on the baseline has Rf = 0). Key note 3, Memory aid check and the Codex brief match.
2. Scene 10 (should fix): "The spot can't beat the front, so R F is less than one." replaced by "The spot cannot pass the front." Crossed-chip captions in scenes 10 and 12 now read "spot over front: cannot exceed 1". Shorter.

Narration: 5,946 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; -24 against Revision 1's 5,970), about 537.2 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.
