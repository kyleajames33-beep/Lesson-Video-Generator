# Year 11 Chemistry WS V06: Problem solving. How can a chemistry model solve an unfamiliar quantitative problem? (design)

Status: Revision 2 (6 Nov 2026): brief 180 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,596 characters, 16 scenes, about 513 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: sixth Year 11 Chemistry (2017 syllabus) Working Scientifically skills video, playlist entry 39, between `chem-y11-m2-v06` and `chem-y11-m2-v07`. Templates as `chem-y11-ws-v03.md` and `chem-y11-ws-v05.md` (same series), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates). Running case: the copper sulfate heating investigation (ws-v01 to ws-v05), now meeting an unfamiliar result; the model is the one built in m2-v02 to m2-v06 (moles count particles; n = m ÷ MM; ratios from moles). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-ws-v06` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply problem solving to that case and a new question; do not re-teach the subject mechanism"; next handoff: "How do we calculate product mass from a reactant mass?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches the route). The route marks it "partial context; add the missing explicit skill teaching from official WS content": the page is an error-analysis lesson with no modelling or problem-solving section, so only its general move "name the source, explain the direction, suggest a fix" is echoed (scene 6's ruling out of causes). The skill teaching is written from the syllabus wording.

Owner rules applied: as ws-v05 (one learner question; no people, hands, faces or body outlines; apparatus alone; real objects as painted plates; models, calculations, hypothesis cards and graphs coded; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Course definitions of valid, reliable, accurate and precise unchanged (root decision 12).

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Problem Solving", outcome CH11/12-6; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS6-01`: "use modelling (including mathematical examples) to explain phenomena, make predictions and solve problems using evidence from primary and secondary sources (ACSCH006, ACSCH010)"
- `C11-WS6-02`: "use scientific evidence and critical thinking skills to solve problems"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 35)

**Boundary:** opens on m2-v06's final frame (the old jar, "lost only 30.2%" against 36.1%, the model panel). Teaches: what a model is (simplified, explains and predicts; physical and mathematical; rests on assumptions); a four-step problem-solving routine (ask it as a calculable unknown; model it with the evidence; test the possible explanations with evidence and make a testable prediction; check the answer is reasonable); critical thinking moves (don't round away a meaningful non-integer; list rival explanations; weigh them with evidence that supports or weakens each; prefer the explanation that predicts something testable); primary evidence (masses, colour, constant mass) and secondary evidence (published behaviour of copper sulfate crystals in dry air); a model's limits. Not taught: new chemistry mechanisms (route stop); mass-to-mass calculation (m2-v07, the handoff); error types and uncertainty (ws-v05, recalled once).

## Decisions

- **Learner question (route wording kept).** "How can a chemistry model solve an unfamiliar quantitative problem?" The answer, in order: turn the puzzle into a calculable unknown (3); apply the model to the evidence (4); treat an odd answer as information and list explanations (5); test each with primary and secondary evidence (6); let the model explain the phenomenon (7); test a prediction (8); check reasonableness (9); know the model's limits (10).
- **Opening frame (equals `chem-y11-m2-v06.md`'s final frame, same designer).** Old-crystals jar and white-powder crucible at the left; navy "lost only 30.2%" against gold "formula: 36.1%"; the model panel ("moles count particles", "n = m ÷ MM", "ratios come from moles"); amber "?"; the "Next" chip, which fades as scene 1 starts.
- **Main case: weathered copper sulfate (illustrative, tagged).** 2.50 g of crystals from an old, loosely closed jar, heated gently to constant mass in the ws-v02 method, lose 30.2% (0.755 g). Model: CuSO₄·xH₂O; x = (0.755 ÷ 18.0) ÷ (1.745 ÷ 159.6) = 3.84. Rival explanations, each weighed rather than ruled in or out (Revision 2, brief 180): (a) heating incomplete (weakened: constant mass under the chosen conditions and a white powder count against it, but do not prove that all water left; white copper sulfate monohydrate is also reported); (b) not copper sulfate (consistent but not proven: blue crystals turning white fits copper sulfate and does not uniquely identify it); (c) crystals lost water before the experiment (best supported: the known hydrate source and storage, a pale powdery crust, and secondary evidence that copper sulfate pentahydrate slowly loses water in warm, dry air, author note b; then the fresh-sample prediction). The model offers a mixture of hydrates (an average) as the explanation the evidence supports, not a new compound; the video does not teach that a non-integer by itself means a mixture. Prediction: a fresh sealed sample gives x = 5; test result 35.9% → x = 4.97. This uses m2-v05's method on an unfamiliar result, so nothing new is re-taught.
- **Why this case.** It makes "critical thinking" concrete: the tempting move (round 3.84 to 4 and announce CuSO₄·4H₂O) is a classic error, and the evidence tells against it (the true pentahydrate and lower hydrates are known; a 4-hydrate would be a new claim needing its own evidence, author note c). It also completes ws-v05's scene 10 point that the accepted value is relevant only if the crystals were pure pentahydrate.
- **The routine (memory aid):** "Ask it, model it, test it, check it." Ask: what exactly is unknown, as a quantity. Model: choose the model and apply it to the evidence. Test: rival explanations against evidence, and a prediction against a new result. Check: is the answer reasonable (size, range, units). See "Memory aid check".
- **Primary and secondary evidence (syllabus wording).** Primary: masses, colour, constant mass, the fresh-sample test. Secondary: the published formula masses and the published behaviour of the crystals in dry air. Both are named on screen as they are used.
- **Model limits (scene 10).** The model assumes the white powder is pure CuSO₄ and only water leaves; a strong flame (ws-v01's group C) breaks that assumption and the model's x would be wrong.
- **Prediction (scene 5's end, 3 s).** "Is CuSO₄·4H₂O the answer?" A beat for the student to commit before the evidence is weighed.
- **Attempts (original, HSC style).** A1 (mathematical model from m2-v06, a new reaction): continuous variation with solutions X and Y at the same concentration, total 60 mL; lines of best fit cross at 20 mL X : 40 mL Y. (a) Mole ratio; (b) predict the volume of Y that reacts exactly with 15 mL of X. Model: 1 : 2; 30 mL. Crossed: "7.5 mL" (ratio applied upside down). A2 (critical thinking with evidence, a new hydrate): washing soda, Na₂CO₃·10H₂O, from an old open packet with a white powdery crust; heated to constant mass, it loses 48.5%. (a) Calculate x (Na₂CO₃ 105.99, H₂O 18.02); (b) explain the result using evidence and propose a test. Model: x = 5.5; fewer waters than 10, not a whole number; the crust shows the crystals lost water before heating (washing soda is well known for this); test a fresh sealed sample, predicting x = 10 (63.0% loss). Crossed: "x = 6, so the formula is Na₂CO₃·6H₂O".
- **Mistake scene:** none separate. "Round any answer to the nearest whole number" (5; crossed in A2); "the first explanation that comes to mind is the answer" (5, 6); "a model is always right" (10); "a model can't make predictions" (8).
- **Handoff (route next: `chem-y11-m2-v07`, "How do we calculate product mass from a reactant mass?").** Scene 15: the model found a mass of water from a mass of crystals; can it predict a product's mass from a reactant's? The site's lesson 12 hook (10 g of magnesium burnt in oxygen: more, less or the same mass of oxide?) sets up m2-v07, which opens on it.
- **Site sources used:** lesson 18's answer structure (name the cause, its effect, a fix) echoed in weighing causes; nothing else applies. Site notes: none new (ws-v01 notes 1 to 6 and ws-v05 notes 7 and 8 stand).
- **Cause chain taught, in order:** (1) a model simplifies, so it can explain and predict, but rests on assumptions (2); (2) a calculable unknown lets the model work (3); (3) the evidence fixes the unknown's value (4); (4) a non-integer ratio means something about the sample, not a rounding chance (5); (5) evidence supports or weakens each explanation (6); (6) a mixture of hydrates would average to a non-integer, and the crust supports it here (7); (7) a supported model predicts new results (8); (8) checks catch slips (9); (9) broken assumptions break the model (10).
- **Entry knowledge:** ws-v01 to ws-v05 (the case, the method, uncertainty about 3%); v07 (36.1%, hydrates); m2-v02 to m2-v06 (mole, n = m ÷ MM, empirical formula from masses, mole ratios, continuous variation).
- **Learner-visible vocabulary (plain meaning at first use):** model (a simplified picture of how something works, used to explain and predict, 2); mathematical model (2); assumption (recalled from ws-v05, 2); unknown (3); rival explanation (another possible cause, 5); prediction (recalled, 8).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **model panel** carried in (its chips glow when used); **routine strip** (four chips "ask it", "model it", "test it", "check it" lighting in turn); **question box** (scene 3: "what went wrong?" crossed, rewritten as "x in CuSO₄·xH₂O = ?"); **calculation layout** (task strip, equation strip, grouped givens, one working row at a time); **hypothesis cards** (three rival-explanation cards; evidence chips slide onto each and it is crossed or kept, rose or teal); **mixture view** (scene 7: a coded field of formula units, most with five pale-blue waters, surface ones with fewer; an average meter settling at 3.84); **prediction-and-test pair** (a dashed "predict x = 5" chip, then a measured "x = 4.97" chip that lands inside it); **check list** (`CheckList`, three reasonableness checks); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** as ws-v05 (accepted value gold; givens navy; amounts teal; ratios amber); primary evidence chips ink with a small "primary" tag, secondary evidence chips grey with a "secondary" tag; kept explanation teal, ruled-out rose.
- **Board layout (constant):** heading top left; routine strip across the top from scene 3; plates at the left; calculation, hypothesis cards or check list at the right. Revision 2 stages: Revision 1 ran scenes 1 to 10 (about 285 s) as camera continues. Now: A, the old jar (1); B, the model stage (2); C, full-width g01 calculation (3, 4); D, hypothesis cards (5, 6); E, the mixture simulation (7); F, the prediction test (8); G, the check list (9); H, limits (10). No stage runs past about 60 s.
- **Colour roles (Revision 2, fixed):** as the colour key (accepted gold; givens navy; amounts teal; ratios amber; primary evidence ink, secondary grey); best-supported explanation teal, weakened rose (dimmed, not crossed), consistent-but-unproven grey; framed results in a dark-ink box with a green tick; mistakes red (strike plus red hand tag). Hand tags take the role colour of what they mark.
- **Type sizes (Revision 2, at 1080p):** current working row 48 px (never below 44 px); live readouts (mixture simulation) 52 px; hypothesis card titles 36 px; supporting lines 30 px; hand tags 34 to 40 px; nothing a student must read below 26 px (the "illustrative data" tag is 26 px).
- **Anchor and simulation (Revision 2).** Painted anchor from the first frame: the old copper sulfate crystals jar (`y11c-cuso4-old-crystals-v1.png`, now on disk) with its crust, beside the white-powder crucible. The genuine simulation is scene 7's mixture slider: an amber handle sets the share of formula units that have lost water at the surface (shown as one possible mixture, pentahydrate with trihydrate) from 0% to 58%, and two live readouts move together, "average x" (5.00 → 4.60 → 4.20 → 3.84) and "mass lost on heating" (36.1% → 34.2% → 32.1% → 30.2%), landing on the measured 30.2%.
- **Illustrative data (Revision 2, brief 180).** The old and fresh results are an illustrative story, not measurements by an identified class; every screen showing them carries the grey tag "illustrative data" (scenes 1, 4, 8).

Author notes (not learner copy):
(a) Case arithmetic (v07 values): 2.50 × 0.302 = 0.755 g water; 2.50 − 0.755 = 1.745 g CuSO₄; 0.755 ÷ 18.0 = 0.04194 mol; 1.745 ÷ 159.6 = 0.010934 mol; x = 3.836. Fresh: 2.50 × 0.359 = 0.8975 g; 1.6025 g; 0.049861 ÷ 0.010041 = 4.966 (4.97). Spoken to three significant figures.
(b) Weathering (efflorescence): copper(II) sulfate pentahydrate slowly loses water in warm, dry air, its crystal surfaces turning pale and powdery (lower hydrates, ultimately whitish). The effect is slow at room conditions; a jar left loosely closed in a warm prep room over years is the illustrative story. Science check to confirm the wording "slowly lose water in warm, dry air" and the visible crust. If the science check judges the effect too slight to give 30.2%, the fallback story keeps the numbers but changes the sample to one stored in a warm drying cabinet (author note f).
(c) Known copper sulfate hydrates: pentahydrate, trihydrate, monohydrate (and anhydrous). A 3.84 average fits a mixture (for a pentahydrate and trihydrate mixture, about 42% of the CuSO₄ units would still be pentahydrate). No tetrahydrate is commonly reported; "CuSO₄·4H₂O" would be an unsupported new claim.
(d) A1: 20 : 40 = 1 : 2; 15 × 2 = 30 mL. The upside-down slip gives 15 ÷ 2 = 7.5 mL.
(e) A2 (data-sheet values, m2-v03's convention for new examples): Na₂CO₃ = 2(22.99) + 12.01 + 3(16.00) = 105.99; H₂O = 18.02; decahydrate water 180.16 ÷ 286.15 = 63.0%; 48.5 ÷ 18.02 = 2.692 mol; 51.5 ÷ 105.99 = 0.4859 mol; x = 5.54 (said "about five and a half"). Washing soda crystals effloresce readily in air to a white powder (the monohydrate), a well-known textbook example. The copper sulfate case keeps v07's values (CuSO₄ 159.6, H₂O 18.0) so its numbers match ws-v05 and m2-v05.
(f) Fallback story for (b): "stored for months in a warm drying cabinet"; same numbers.
(g) Pronunciations: "C u S O four, dot x H two O"; "N a two C O three"; "efflorescence" is not spoken.

Main question: *How can a chemistry model solve an unfamiliar quantitative problem?*
Entry knowledge: ws-v01 to ws-v05; v07; m2-v02 to m2-v06.
Stops after: what a model is; ask it, model it, test it, check it; rival explanations tested with primary and secondary evidence; a tested prediction; reasonableness checks; model limits. No mass-to-mass calculation (m2-v07).
Handoff: chem-y11-m2-v07, product mass from reactant mass.

## Opening frame and final frame

- **Opening frame:** m2-v06's final frame exactly (Decisions).
- **Final frame (m2-v07 opens on it):** at the left, the magnesium ribbon plate (`p01-mg-ribbon-v1.png`) with a coded chip "10.0 g Mg"; an arrow to the white oxide plate (`p01-mgo-ash-dish-v1.png`) with "? g MgO" in amber; above, the equation "2Mg + O₂ → 2MgO"; the model panel small at the top right (three teal chips); the chip "Next: How do we calculate product mass from a reactant mass?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: an unfamiliar result
> Here's a problem nobody has shown us how to solve. Crystals from an old jar of copper sulfate are heated gently to constant mass, and they lose only thirty point two percent of their mass. Fresh crystals lose about thirty-six. Same method, same balance, and the gap is far bigger than our three percent uncertainty. So what's going on, and how do we even **start**?

Visual: opens on m2-v06's final frame; the "Next" chip fades. On "old jar" the old-crystals plate (`y11c-cuso4-old-crystals-v1.png`) enlarges to about 520 px (uniform scale) and its pale crust catches a faint highlight, ink hand tag "pale crust" with a pen arrow. On "thirty point two" the navy chip pulses, with a grey tag beneath (26 px) "illustrative data"; on "about thirty-six" the gold chip. On "three percent" ws-v05's amber "± 3%" chip slides in small (grey tag "uncertainty video"), amber hand tag "too big a gap". On "start" the heading writes: "Solving an unfamiliar problem".

### 2. what a model is
> We start with a model. A model is a simplified picture of how something works, which lets us explain and predict. Some models are drawings, like a particle diagram. Others are mathematical, like n equals m over M M, or a formula with a number we don't know **yet**. A model works on evidence: primary evidence that we collect ourselves, and secondary evidence from published **sources**. And every model rests on assumptions, so part of solving a problem is checking **them**.

Visual: clear change to the model stage (the jar to a thumbnail). Gloss chip (36 px) "model: a simplified picture that explains and predicts". On "particle diagram" a small coded water-molecule diagram from m2-v06 appears (tag "drawn model"). On "mathematical" the model panel's "n = m ÷ MM" chip glows (tag "mathematical model"); on "yet" a chip "CuSO₄·xH₂O" writes with x amber. On "primary evidence" a small ink chip "primary: we collect it (masses, colour)"; on "sources" a grey chip "secondary: published (formula masses)". On "them" a small grey tag hangs off the panel: "assumptions: pure substance; only water leaves", grey hand tag "check these".

### 3. step one: ask it
> Step one is to ask exactly what's unknown. Not just what went wrong, but something we can calculate. How many water molecules are there for each copper sulfate in these crystals? Call it x, so the formula is C u S O four, dot x H two **O**. In fresh crystals, x is **five**.

Visual: clear change to the calculation stage (full width, Chemistry g01 layout). The routine strip writes across the top: "ask it", "model it", "test it", "check it"; "ask it" lights. A question box writes "What went wrong?" and is struck in red, red hand tag "can't calculate this"; under it, on "O" (the end of "dot x H two O"; brief 180 cue check), "x in CuSO₄·xH₂O = ?" (amber x, 48 px), amber hand tag "a number we can find". On "five" a grey chip "fresh: CuSO₄·5H₂O" (tag "empirical formula video").

### 4. step two: model it with the evidence
> Step two is to apply the model to the evidence. From two point five zero grams, losing thirty point two percent means zero point seven five five grams of water left, and one point seven four five grams of copper sulfate **remained**. In moles, that's zero point zero four one nine of water, and zero point zero one zero nine of copper sulfate. Divide, and x is three point eight **four**.

Visual: "model it" lights. Calculation layout. Task strip "Find x for the old crystals". Givens (navy, grouped): "start 2.50 g; lost 30.2%" (grey tag "illustrative data"); "CuSO₄ 159.6, H₂O 18.0 g mol⁻¹" (grey tag "secondary data"). On "water left" row "m(H₂O) = 2.50 × 0.302 = 0.755 g"; on "remained" row "m(CuSO₄) = 2.50 − 0.755 = 1.745 g". On "In moles" rows "n(H₂O) = 0.755 ÷ 18.0 = 0.04194 mol" and "n(CuSO₄) = 1.745 ÷ 159.6 = 0.010934 mol" (48 px, grey "≈ 0.0419", "≈ 0.0109"; earlier rows dim). On "four" row "x = 0.04194 ÷ 0.010934 = 3.84" framed in a dark-ink box (amber), amber hand tag "not a whole number!".

### 5. thinking critically about 3.84 (countdown, 3 seconds at the end)
> Three point eight four isn't a whole number. It's tempting to round it to four, and announce a new formula. A good problem solver treats the odd number as information, and lists the possible causes. Maybe the heating didn't finish. Maybe it isn't copper sulfate at all. Or maybe the crystals had already lost some water in the **jar**. Before we test them, is C u S O four, dot four H two O the **answer**?

Visual: stage change to the hypothesis stage (the calculation shrinks to a strip at the top with "x = 3.84" kept). On "round it to four" a chip "CuSO₄·4H₂O?" writes in amber with a "?". On "possible causes" three hypothesis cards slide in at the right as spoken: "A: heating didn't finish", "B: not copper sulfate", on "jar" "C: lost water in the jar". On "answer" the 3 s `Countdown` ring runs beside the "CuSO₄·4H₂O?" chip.

### 6. step three: test it with evidence
> Let's weigh each cause against the evidence. The mass stopped changing and the powder turned white, which counts against unfinished heating. Blue crystals turning white fits copper sulfate, though it doesn't prove it. The jar has the strongest support. These crystals have a pale, powdery crust. And published sources say copper sulfate crystals slowly lose water in warm, dry air, forming that kind of **crust**.

Visual: "test it" lights. Each card gets an evidence meter (support against weakening) instead of a cross (brief 180). On "mass stopped changing" a primary evidence chip "constant mass" (ink, tag "primary") and on "turned white" the white-powder crucible chip slide onto card A; its meter tips towards "weakened" and the card dims rose (not crossed), rose hand tag "less likely". On "Blue crystals turning white" chips "blue → white" slide onto card B; its meter sits at "consistent" and the card goes grey, grey hand tag "fits, not proof". On "pale, powdery crust" the old-crystals plate returns large at the left with a magnifier circle on the crust (tag "primary: observation"); on "published sources" a grey source card "secondary: crystals lose water in warm, dry air" slides onto card C, whose meter rises to "best supported" and turns teal, teal hand tag "most evidence" with a pen ring. On "crust" the "CuSO₄·4H₂O?" chip is crossed in red, red hand tag "no evidence for a new compound".

### 7. the model explains the number
> So the model offers an explanation. Suppose most crystals still hold five waters, but some have lost water from their surfaces. Heating the whole sample would give an average, somewhere between. The crust supports that picture, a mixture rather than a new **compound**. If we'd rounded to four, we'd have claimed a compound that none of our evidence **supports**.

Visual: camera push to the mixture stage (stage E, the simulation): a coded field of formula units fills the frame, each a copper-brown tile with pale-blue water dots, all with five at first. An amber slider "units that lost water at the surface: 0%" sits under the field with two live readouts (52 px): "average x = 5.00" (amber) and "mass lost on heating = 36.1%" (navy); a grey tag (26 px) "one possible mixture: pentahydrate + trihydrate". On "Suppose" the handle sweeps 0 → 20% → 40% → 58%: surface units drop to three waters while the readouts move together ("4.60, 34.2%"; "4.20, 32.1%") and settle at "3.84" and "30.2%", matching the measured chip, which glows; amber hand tag "lands on 30.2%" with a pen ring. On "compound" a chip "mixture of hydrates (best supported)" (teal) replaces the crossed "CuSO₄·4H₂O?". On "supports" the crossed chip flashes once, red hand tag "no evidence".

### 8. a prediction we can test
> A good model also predicts something new. If the jar is the cause, crystals from a fresh, sealed jar should give x equal to five. So the class tests it. The fresh crystals lose thirty-five point nine percent, and the same steps give x equal to four point nine **seven**. That's five within our uncertainty, so the prediction is **supported**.

Visual: stage change to the prediction stage. A dashed chip (44 px) "prediction: fresh, sealed crystals → x = 5" writes. A fresh blue crystal crucible plate (`y11c-cuso4-crucible-blue-v1.png`) slides in at the left with a coded seal tag. On "thirty-five point nine" rows (48 px, grey tag "illustrative data", 26 px): "lost 35.9%: 0.8975 g H₂O, 1.6025 g CuSO₄"; on "seven" "x = (0.8975 ÷ 18.0) ÷ (1.6025 ÷ 159.6) = 0.049861 ÷ 0.010041 = 4.966 ≈ 4.97" with a grey tag "unrounded amounts carried" (brief 180: the rounded 0.0499 ÷ 0.0100 would give 4.99). On "supported" a solid chip "x = 4.97" framed with a green tick lands inside the dashed prediction chip; tick "prediction supported" (tag "primary evidence, illustrative"), teal hand tag "within uncertainty".

### 9. step four: check it
> The last step is to check the answer makes sense. Is x between zero and five? Yes, because old crystals can't hold more water than fresh ones. Is the water lost smaller than the starting mass? Yes. And do the units work, grams divided by grams per mole giving moles? **Yes**. Checks like these catch slips before they turn into wrong conclusions. Ask it, model it, test it, check **it**.

Visual: clear change to the check stage. "check it" lights. A `CheckList` writes as spoken (44 px): "0 < x ≤ 5", "0.755 g < 2.50 g", and on "Yes" (last) "g ÷ g mol⁻¹ = mol", each with a teal tick and a teal pen tick mark. On "it" (last) a framed memory card draws above the routine strip and the line writes in it in hand lettering (48 px): "Ask it, model it, test it, check it."; the strip lights all four chips together.

### 10. the model's limits
> Every model has limits too. Ours assumes the white powder is pure copper sulfate, and that only water leaves. If the flame were too strong, some copper sulfate would break down, extra mass would be lost, and the model would give the wrong x. So a conclusion is only as good as the evidence behind each **assumption**. And when new evidence doesn't fit, we improve the model, just as the models of the atom improved with new **evidence**.

Visual: stage change to the limits stage. The assumptions tag from scene 2 enlarges into two rows (40 px): "powder is pure CuSO₄", "only water leaves". On "too strong" ws-v01's black-crust crucible (`y11c-cuso4-crucible-black-v1.png`) slides in small; the second row cracks (rose), rose hand tag "assumption broken", and a ghost "x = ?" wobbles on the calculation. On "assumption" both rows gain small evidence chips from scene 6 ("gentle flame; powder white") and the ghost settles. On "models of the atom" a small grey thumbnail of the model timeline from the atom videos (three coded atoms, "new evidence → better model") appears; on "evidence" (last) a loop arrow "evidence → improve the model" joins it to the model panel.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn, using the continuous variation model. Solutions X and Y have the same concentration. They're mixed in changing proportions with sixty millilitres in total, and the lines of best fit cross at twenty millilitres of X and forty of Y. Find the mole ratio, then predict the volume of Y that reacts exactly with fifteen millilitres of X. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Solutions X and Y have the same concentration. A continuous variation investigation used a constant total volume of 60 mL. The lines of best fit on the graph of temperature rise against volume of X crossed at 20 mL of X and 40 mL of Y. (a) Determine the mole ratio in which X and Y react. (b) Predict the volume of Y that would react exactly with 15 mL of X. (2 marks)" A small sketch graph with the two lines crossing at 20 mL (axis "volume of X (mL)", 0 to 60). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Twenty to forty is one to two, and equal concentrations make that a mole ratio. So fifteen millilitres of X needs twice as much Y, thirty millilitres. Halving instead, and getting seven point five, is the classic slip. Check it: Y is the bigger share, so its volume should be **bigger**.

Visual: card shrinks to the top. Rows (48 px): "(a) 20 : 40 = 1 : 2 (X : Y)"; "(b) 15 × 2 = 30 mL of Y", the "1 : 2" and "30 mL" framed with a green tick. On "bigger" a chip "7.5 mL" fades in and is crossed in red, red hand tag "upside down", with the check tag "Y is the bigger share". Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Washing soda crystals are N a two C O three, dot ten H two O. A student heats some from an old open packet, with a white powdery crust, to constant mass. They lose forty-eight point five percent. Calculate x for this sample, then explain the result using evidence, and propose a test. Pause here to answer.

Visual: `QuestionCard`: "Washing soda crystals have the formula Na₂CO₃·10H₂O. A student took crystals from an old, open packet. The crystals had a white, powdery crust. The student heated a sample to constant mass and found that 48.5% of its mass was lost. (a) Calculate x in Na₂CO₃·xH₂O for this sample. (Na₂CO₃ = 105.99 g mol⁻¹, H₂O = 18.02 g mol⁻¹) (b) Explain the result using the evidence, and propose a test of your explanation. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> In one hundred grams, forty-eight point five grams of water is two point six nine moles, and fifty-one point five grams of sodium carbonate is zero point four eight six. So x is about five and a half. That's below ten, and the crust is evidence the crystals lost water before heating. Test a fresh sealed packet, predicting x equals ten. Rounding to six and claiming a new formula is the classic **slip**.

Visual: card shrinks to the top. Rows (44 px): "(a) n(H₂O) = 48.5 ÷ 18.02 = 2.69 mol; n(Na₂CO₃) = 51.5 ÷ 105.99 = 0.486 mol; x = 5.5", the "x = 5.5" framed; "(b) x < 10; crust: evidence of water lost before heating (a likely mixture); test: fresh sealed crystals, predict x = 10 (63.0% lost)", framed with a green tick. On "slip" a chip "Na₂CO₃·6H₂O" fades in and is crossed in red, red hand tag "a new formula with no evidence". Hold about 1 second.

### 15. conclusion and handoff
> So, ask it as a quantity, model it with the evidence, test the explanations and a prediction, and check the answer. Our model turned a mass of crystals into a number of waters. Can it predict how much product a reaction makes? Burn ten grams of magnesium in oxygen. Will you get more than ten grams of oxide, less, or the same? How do we calculate product mass from a reactant **mass**?

Visual: the memory line at the top; a strip writes as spoken: "ask: a quantity → model: with evidence → test: explanations and a prediction → check: reasonable?". On "magnesium" the board clears to the magnesium ribbon plate (`p01-mg-ribbon-v1.png`) with "10.0 g Mg", an arrow, and the white oxide plate (`p01-mgo-ash-dish-v1.png`) with "? g MgO" in amber; on "oxygen" "2Mg + O₂ → 2MgO" writes above; the model panel shrinks to the top right. On "more than ten grams" three small chips "more", "less", "same" under "? g MgO". On "mass" (last) the chip "Next: How do we calculate product mass from a reactant mass?" writes. Hold about 2 seconds. This is the final frame (m2-v07 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Model: a simplified picture that explains and predicts; it rests on assumptions.
2. Ask it: make the problem a calculable unknown (x in CuSO₄·xH₂O).
3. Model it: apply the model to the evidence, with units.
4. Test it: weigh rival explanations with primary and secondary evidence; test a prediction.
5. Check it: range, size, units. Don't round away an odd result.

Memory aid (framed card under the notes, hand lettering as in scene 9): *Ask it, model it, test it, check it.* Notes 32 px in the role colours; no paragraphs.

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why a model helps (2); why a calculable unknown is needed (3); why the evidence supports a mixture for 3.84 (5, 7); why each rival is weakened, consistent or supported (6); why a prediction strengthens the explanation (8); why checks catch slips (9); why broken assumptions break the answer (10).
- **Misconceptions addressed:** round any answer (5, crossed in A2); the first idea is the answer (5, 6); models are always right (10); "what went wrong" is a question you can calculate (3).
- **One idea at a time:** model (2), ask (3), model it (4), rivals (5), test (6), explain (7), predict (8), check (9), limits (10).
- **Video makes it easier:** the routine strip lights stage by stage; hypothesis cards are crossed or kept as evidence chips land; the mixture field averages to 3.84; the measured chip lands inside the dashed prediction.
- **Response opportunity:** one 3 s prediction (5); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 21 s and 31 s.
- **Avoided double teaching:** n = m ÷ MM, the empirical method and continuous variation are used, not re-taught; uncertainty (ws-v05) recalled once.
- **Syllabus coverage:** `C11-WS6-01` (2, 4, 7, 8, 10, A1); `C11-WS6-02` (3, 5, 6, 9, A2).
- **Out of scope by design:** mass-to-mass calculation; new chemistry mechanisms.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 20 mL : 40 mL; equal concentrations, so X : Y = 1 : 2 by moles (1 mark). (b) 15 mL × 2 = 30 mL of Y (1 mark). Classic mistake (crossed): 7.5 mL (ratio applied upside down).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) In 100 g: n(H₂O) = 48.5 ÷ 18.02 = 2.69 mol; n(Na₂CO₃) = 51.5 ÷ 105.99 = 0.486 mol; x = 5.5 (2 marks). (b) x is well below 10 and not a whole number, so the sample is a mixture: the crystals had lost some water before heating, as the white powdery crust shows (1 mark). Test: heat fresh crystals from a sealed packet the same way; the explanation predicts x = 10 (about 63.0% mass lost) (1 mark). Classic mistake (crossed): "Na₂CO₃·6H₂O" (rounding to a new formula without evidence).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Old crystals (illustrative) | 2.50 g; 30.2%; 0.755 g H₂O; 1.745 g CuSO₄; 0.04194 and 0.010934 mol; x = 3.84 | 1, 4, 5, 7 |
| Mixture simulation (Revision 2) | surface-weathered share 0, 20, 40, 58%: x 5.00, 4.60, 4.20, 3.84; mass lost 36.1, 34.2, 32.1, 30.2% | 7 |
| Fresh value | about 36 (36.1%); uncertainty ± 3% (ws-v05) | 1 |
| Molar masses (v07 values) | CuSO₄ 159.6; H₂O 18.0 | 4, 8 |
| Fresh test (illustrative) | 35.9%; 0.8975 g; 1.6025 g; 0.049861 and 0.010041 mol; x = 4.966 (4.97) | 8 |
| A1 | 60 mL; 20 : 40; 1 : 2; 15 mL → 30 mL; slip 7.5 mL | 11, 12 |
| A2 | 48.5%; 105.99; 18.02; 2.69 and 0.486 mol; x = 5.5; 10; 63.0% | 13, 14 |
| Handoff | 10.0 g Mg | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 2.50 × 0.302 = 0.755; 2.50 − 0.755 = 1.745; 0.755 ÷ 18.0 = 0.041944; 1.745 ÷ 159.6 = 0.010934; ratio 3.836.
- 2.50 × 0.359 = 0.8975; 1.6025; 0.8975 ÷ 18.0 = 0.049861; 1.6025 ÷ 159.6 = 0.010041; ratio 4.966. Revision 2 (brief 180): 0.0499 ÷ 0.0100 = 4.99 and 0.898 + 1.603 = 2.501, so the screen carries 0.8975, 1.6025 and the unrounded amounts.
- Mixture slider (pentahydrate fraction f with trihydrate): x = 5f + 3(1 − f); f = 0.42 gives x = 3.84; mass lost = 18.0x ÷ (159.6 + 18.0x): x = 5.00 → 36.06% (36.1), 4.60 → 34.16% (34.2), 4.20 → 32.14% (32.1), 3.84 → 30.22% (30.2).
- 20 : 40 = 1 : 2; 15 × 2 = 30; 15 ÷ 2 = 7.5.
- Na₂CO₃ = 45.98 + 12.01 + 48.00 = 105.99; 180.16 ÷ 286.15 = 62.96%; 48.5 ÷ 18.016 = 2.692; 51.5 ÷ 105.99 = 0.4859; ratio 5.540.

## Memory aid check

- **"Ask it, model it, test it, check it."** Written for this video, in the rhythm of ws-v05's "Name it, size it, fix it" so the skills series has a family of aids. Meaning: the four problem-solving steps of scenes 3, 4, 6 to 8 and 9. Assumptions checked: "test it" covers both rival explanations and a prediction (scene 6 and 8 say so); the routine is a guide, not a fixed algorithm (real problems loop back, which scene 10 shows by returning to the assumptions). It helps a new case: A1 (ask: volume of Y; model: ratio; check: Y bigger) and A2 (ask: x; model: moles; test: crust and fresh sample; check: x below 10).
- **Considered, not used:** "GRASP" (Given, Required, Analysis, Solution, Paraphrase; a calculation routine that leaves out evidence and testing, which this syllabus point needs).

## Narration length estimate

Revision 2 count (6 November; build parser rules: only lines starting "> ", `**` removed, total = sum of scene strings): **5,596 characters**, 16 scenes (scene 6 rewritten 412 to 409, scene 7 366 to 355, scene 14 416 to 401). At 13.3 characters per second the speech is about 421 s; add about 3 s for the mixture slider (7), 1 s for the stage cuts, about 9 s of holds and settling (hypothesis cards in 6, the mixture field in 7, the prediction landing in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 513 s (8.6 minutes)**.

## Scene list and build ids

Lesson key `c-y11-ws-v06` (route chem-y11-ws-v06; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v06`.

In order (16 scene headings, all `### N.`): hook, what-is-a-model, ask-it, model-it, rival-explanations, test-it, explain, predict-test, check-it, limits, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 5 is `explain` with a 3 s countdown at its end. Transitions: m2-v06's final frame into scene 1 by camera continue; 1 to 2 clear change to the model stage (Revision 2); 2 to 3 clear change to the full-width calculation (routine strip writes); 3 to 4 camera continue; 4 to 5 stage change to the hypothesis stage; 5 to 6 camera continue; 6 to 7 camera push into the mixture simulation; 7 to 8 stage change to the prediction stage; 8 to 9 clear change to the check stage; 9 to 10 stage change to the limits stage; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: rival-explanations countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-ws-v06-learning-review.md`, `checks/c-y11-ws-v06-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/y11c-cuso4-crucible-blue-v1.png`: scene 8.
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (silver ribbon on a dark heatproof tile): final frame.
- `public/assets/chemistry/p01-mgo-ash-dish-v1.png` (white powder in an evaporating dish): final frame.
- From earlier briefs: `y11c-cuso4-crucible-lid-white-v1.png` (opening frame, scene 6), `y11c-cuso4-crucible-black-v1.png` (scene 10).
- From m2-v06: `y11c-cuso4-old-crystals-v1.png` (now on disk; essential: scenes 1, 6, 7). Inspect its crust at about 300 px before build.

Need (new plates, Codex): none beyond m2-v06's request.

Coded: mixture slider and its live readouts, evidence meters, model panel, routine strip, question box, calculation layout, hypothesis cards and evidence chips, source card, mixture field and average meter, prediction chips, `CheckList`, sketch graph (A1), attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry WS v06)

No new plates. `y11c-cuso4-old-crystals-v1.png` is painted under the m2-v06 brief; this video depends on it (the crust is primary evidence in scene 6).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the claims: copper(II) sulfate pentahydrate slowly loses water in warm, dry air with a pale crust (author note b); known copper sulfate hydrates (author note c); washing soda crystals lose water in air to a white powder; Na₂CO₃·10H₂O is 63.0% water.
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the two syllabus quotes match `chem-2017-y11.json` exactly.
5. Confirm no person, hand, face or avatar is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals m2-v06's final frame and the final frame matches m2-v07's opening.

## YouTube metadata (draft)

Title: Solving Unfamiliar Chemistry Problems with Models | Year 11 Chemistry Skills

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Crystals from an old jar of copper sulfate lose only 30.2% of their mass when heated, not 36.1%. Nobody has shown you how to solve this one. Learn what a model is, and a four-step routine for unfamiliar problems: ask it as a quantity, model it with the evidence, test the possible explanations and a prediction with primary and secondary evidence, and check that the answer makes sense. Plus why you shouldn't round away an odd result. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Problem Solving.
Syllabus content (NSW Chemistry Stage 6):
"use modelling (including mathematical examples) to explain phenomena, make predictions and solve problems using evidence from primary and secondary sources (ACSCH006, ACSCH010)"
"use scientific evidence and critical thinking skills to solve problems"

Previous: Why reaction coefficients give mole ratios rather than mass ratios. Next: How to calculate product mass from a reactant mass.

#Year11Chemistry #Chemistry #WorkingScientifically #HSCScience

## Open decisions

- **1. Weathering claim (science check, root).** The main case depends on copper sulfate pentahydrate losing water in warm, dry air (author note b). If the science check judges a 30.2% result implausible for that cause, use the drying-cabinet story (author note f); the numbers and narration change by one phrase in scenes 1 and 6.
- **2. Old-crystals plate (root).** Requested in m2-v06's brief; this video needs it.
- **3. Countdown inside an explain scene (root).** Scene 5 ends on a 3 s countdown rather than a separate prediction scene, to keep the rival-explanation cards on screen; confirm the build supports it, or split scene 5's last sentence into its own scene.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is "ask it" distinct enough from "model it"; does ruling out causes read as critical thinking rather than a list; is the mixture explanation clear without lower hydrates being named), then the science check and Codex error check.
- Checker output (5 November): narration 5,625 characters; per scene (1 to 16): 361, 464, 266, 380, 398, 412, 366, 334, 379, 429, 364, 283, 316, 416, 382, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
- Revision 2 count (6 November): 5,596 characters (sum of scene strings); per scene (1 to 16): 361, 464, 266, 380, 398, 409, 355, 334, 379, 429, 364, 283, 316, 401, 382, 75. Every bold cue checked in its Visual in spoken order (scene 3's "O" now quoted); no em dash.

## Revision 2 (6 Nov 2026)

Brief 180 findings (`checks/c-y11-ws-v06-learning-review.md`, `checks/c-y11-ws-v06-science-check.md`):
- **Should fix, evidence not proof (scenes 6, 7, 14):** the rival-explanation cards no longer get "ruled out" crosses. Constant mass and a white powder now count against unfinished heating ("less likely"); blue-to-white "fits, not proof" for copper sulfate; the jar explanation is "best supported" by the source and storage, the crust and published behaviour, and then the fresh-sample prediction. Scene 6 narration rewritten within its length (412 to 409); scene 7 now offers the mixture as the explanation the crust supports, not a rule that a non-integer means a mixture (366 to 355); scene 14 says the crust is evidence of water lost before heating (416 to 401). Decisions, Boundary, cause chain, Teaching checks and key note 4 follow.
- **Should fix, scene 8 guard digits:** the fresh rows carry 0.8975 g and 1.6025 g and x = 0.049861 ÷ 0.010041 = 4.966 ≈ 4.97, with a grey tag "unrounded amounts carried" (the rounded 0.0499 ÷ 0.0100 gives 4.99, and 0.898 + 1.603 makes 2.501). Spoken 4.97 unchanged.
- **Should fix, data provenance (scenes 1, 4, 8):** the old and fresh results carry a grey "illustrative data" tag on screen; a Decisions line records that they are an illustrative story. No speech added.
- **Cue check:** scene 3's bold "O" was not quoted in its Visual; now quoted.
- **Count finding:** withdrawn by Codex (5,625 was the scene sum). Revision 2: 5,596 characters, about 513 s.

Visual upgrade (`../maths-visual-standard.md`, audit recommendation):
- Decisions: stage plan A to H (Revision 1 ran scenes 1 to 10, about 285 s, as camera continues), colour roles, type sizes (current row 48 px, readouts 52 px, floor 26 px), anchor and simulation lines.
- Scene 1 opens on the painted old-crystals jar (now on disk) at about 520 px with a "pale crust" tag.
- Simulation: scene 7's mixture slider sets the share of surface-weathered units (one possible pentahydrate and trihydrate mixture) while live readouts for average x and mass lost move together and land on 3.84 and 30.2%.
- Evidence meters replace crosses on the hypothesis cards; hand tags and pen marks in role colours in every teaching scene; framed results on x = 3.84 (4), x = 4.97 (8), the A1 and A2 answers (12, 14); crossed slips with red hand tags (3, 6, 12, 14).
- Memory line in a framed card (9); key notes trimmed to five short bullets (348 characters) with the framed card.
- No new plate requests. Final frame unchanged (m2-v07 opens on it); the opening still matches m2-v06's final frame.
