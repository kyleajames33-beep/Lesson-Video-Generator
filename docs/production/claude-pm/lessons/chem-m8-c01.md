# M8 C01: How can a precipitation titration measure chloride? Silver nitrate, a chromate endpoint and the Mohr calculation (design)

Status: Revision 3 (30 Oct): Codex error check 112 resolved; ready to voice.

Earlier status, Revision 2 (30 Oct): learning review and science check resolved; needs Codex error check before voicing.

Earlier status, Revision 1 (28 Oct): needs learning review and science check (Codex).

Narration 5,541 characters (Revision 2), 17 scenes, about 8.5 minutes (510 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Revision 3 changes (30 Oct; resolving `../checks/codex-check-112.md`):
- Site link (metadata link only; brief 114 science checks, root decision): the YouTube description's first link is now the live page, `https://hscscience.com.au/subjects/chemistry/year12/module8/lesson01.sa.html`, the same form as p02, g01, c03a and c03b. No narration, screen or count change.
- codex-check-112 found no errors; no changes.
- Count unchanged from Revision 2. Ready to voice.

Revision 2 changes (30 Oct; resolving `../checks/m8c01-learning-review.md` (learning L1, L2) and `../checks/m8c01-claude-science-check.md` (no findings; one metadata note)):
- Scene 4 ladder (learning L1, root decision): the two thresholds now show where they come from. Small grouped givens sit beside their bars ("[Cl⁻] at the start ≈ 0.074 mol/L", "[CrO₄²⁻] ≈ 0.005 mol/L", tagged as one illustrative sample, not a fixed threshold). On "silver" the working "[Ag⁺] = Ksp ÷ [Cl⁻] = 1.77 × 10⁻¹⁰ ÷ 0.074" writes alone; it dims before "[Ag⁺] = √(Ksp ÷ [CrO₄²⁻]) = √(1.12 × 10⁻¹² ÷ 0.005)" writes. The narration gains the two concentrations (about 69 characters). The Ksp values are the ones in author note (a) (AgCl on the NESA data sheet; Ag₂CrO₄ from the CRC, shown on screen as a given).
- Feedback 1 (learning L2, root decision): the sentence "that's three point six six five times ten to the minus four moles of silver, and" is cut as the review proposed, and the clause now reads "That gives the moles of silver, and the same moles of chloride." The screen line carries the number. Feedback 1 drops from about 34 s to about 28 s (373 characters).
- Feedback 2 (learning L2, root decision): the last sentence ("Hydrogen ions aren't in the silver chloride equation, but they still change the indicator.") is cut. The crossed chip and caption keep the idea and now fade on the new last cue, "seven or eight". Feedback 2 drops from about 31 s to about 25 s (327 characters).
- Metadata dotpoint (science note, root decision): the YouTube description quotes the dotpoint with its bullets kept, not flattened to a semicolon.
- Open decisions: "Scene 4 depth" and "Feedback length" are closed by the above. Recount by script (lines starting "> ", joined with spaces, bold markers removed): 5,541 characters, 17 scenes, about 510 s (speech about 417 s, plus about 18 s of holds, 20 s of countdowns and about 55 s more of the quiet notes hold), about 8.5 minutes, inside 5,500 to 6,800 and under the 9.5-minute cap. The band was missed at 5,472 after the two cuts, so the concentrations were added to scene 4. Open owner questions: none.

Scope: first Module 8 Chemistry video. Format, voice and staging follow `chem-m7-c10.md` (Revision 3): crossed chips, countdown ring, key notes board, one reasoning stage at a time. Titration staging and the n = cV pathway are recalled from `chem-m6-c12.md` (direct titration, concordant titres, endpoint and equivalence) and `chem-m6-c13.md` (what an indicator does); precipitation, Ksp and Qsp from `chem-m5-c13.md`, `chem-m5-c14.md` and `chem-m5-c15.md`. None of these is re-taught. Pre-design pack: `../pre-design/chem-m8-precipitation-titration.md`. Site extract: `../site-extracts/chem-m8-l01.md`, and site lesson 1 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module8/lesson01.sa.html`) read in full (28 Oct, read-only). Site corrections: `../site-corrections-m8.md` records none; new corrections below. Route entry: `chem-m8-c01` in `../../module8-video-route-draft.json`, narrowed by `../../module8-route-review-claude.md` change 4 (Mohr only; direct and back titration are chem-m6-c12 and chem-m6-c15) and change 5 (p01 cut; this video processes data). Route start: "Show why Ag+ first removes chloride." Route stop: "Calculate chloride from a valid Mohr endpoint." Next: chem-m8-c02 (p01 is cut).

Owner rules applied: real apparatus as painted plates listed by filename, never stretched, the three flask states as an aligned set; no people or hands (the burette tap and swirling are coded motion); no clip-art; at most about three bright text items, earlier lines dim; the calculation as separate task, equation and grouped givens, one stage at a time; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used, no givens card; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration; no absolute claims ("roughly", "about", "often"); the chromate hazard said plainly once.

Syllabus dotpoint (as printed; NSW Chemistry Stage 6, 2017, p58; `C8-IQ1-03` is this project's local catalogue ID), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"conduct investigations and/or process data involving:
- gravimetric analysis
- precipitation titrations"

This video processes precipitation titration data (the Mohr method). Gravimetric analysis is chem-m8-c02; practice with both is chem-m8-g01.

**Boundary:** starts by showing why silver ions remove chloride first, and stops at calculating chloride from a valid Mohr endpoint. It teaches: silver nitrate titrant; Ag⁺ + Cl⁻ → AgCl (white), 1 : 1; the white solid gives no stopping signal by itself; a little potassium chromate as indicator; after nearly all chloride is used, 2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄ (red-brown); the first persistent red-brown tinge is the endpoint; why chloride precipitates first (each solid forms once its ion product exceeds its Ksp, so the silver concentration each needs depends on the actual chloride and chromate concentrations, not on pure-water solubility); why the chromate amount is controlled; valid conditions (roughly pH 6.5 to 10; acid converts chromate to dichromate and gives a late endpoint and a high titre; strong base gives silver oxide); other silver-precipitating ions counted as chloride; the slightly late endpoint and the blank; the chromate hazard; processing concordant titres (recall); n(Ag⁺) = cV, 1 : 1, divide by the aliquot, mol/L to g/L. Not taught: direct or back titration (M6 recall only), Volhard or Fajans methods, the hands-on procedure and risk table, blank arithmetic, titration curves.

## Decisions

- **Route fields (review change 4 applied):** `C8-IQ1-03`, precipitation titrations only. The site's direct titration, back titration and indicator-choice sections are Module 6 revision and are not used. The route JSON still lists p01 as next; the review cuts p01, so next is chem-m8-c02 (Open decisions).
- **Prerequisites (review change 4 applied; route JSON not yet updated):** the JSON lists chem-m5-c13, chem-m5-c14 and chem-m6-c13. The review adds chem-m6-c12. This design also needs chem-m5-c15 (Qsp against Ksp) for scene 4, which the pre-design index already names. Root to update the JSON to chem-m5-c13, c14, c15, chem-m6-c12, c13 (Open decisions).
- **Why chloride goes first (site error corrected, the lesson's surprise):** the site says silver chloride forms first because its pure-water molar solubility is lower, and its Common error box says "Compare molar solubilities, not Ksp values, when deciding which solid appears first". Pure-water solubility does not set the order in a mixture. Each solid starts to form when its ion product passes its Ksp (chem-m5-c15), so the silver needed is [Ag⁺] = Ksp(AgCl)/[Cl⁻] for silver chloride and [Ag⁺] = √(Ksp(Ag₂CrO₄)/[CrO₄²⁻]) for silver chromate. With about 0.07 mol/L chloride and about 0.005 mol/L chromate, silver chloride needs about 2 × 10⁻⁹ mol/L silver and silver chromate about 1.5 × 10⁻⁵ mol/L, thousands of times more (author note a). Scene 4 names the common claim, says it isn't the real reason, and shows a coded "silver needed" ladder. This also explains why the chromate amount is controlled, which the pack's open question asked.
- **"Every added silver ion" softened:** the site says every added silver ion is taken up while chloride remains. A little stays dissolved (Ksp is finite), so the video says "the silver keeps forming white silver chloride" and "more than ninety nine point nine percent of the chloride is gone" (author note a).
- **Valid conditions:** the route stop says "valid Mohr endpoint", so scene 5 gives pH (acid and base, each with its cause), interfering ions (one line), and the late endpoint with a blank (one line, no arithmetic). Carbonate, phosphate, sulfide and ammonia interferences stay in author notes; bromide and iodide are named because they are the common exam case (site and pack).
- **Chromate hazard and the cut practical (review change 5):** scene 6 says once that potassium chromate is a chromium(VI) compound, toxic and treated as a carcinogen, so many schools skip the practical, and the method is often met as data. This leads into data processing and matches the cut of p01.
- **Hook context:** estuary water, a clear sample. The site's worked example (25.00 mL aliquot, 0.1000 mol/L AgNO₃, 18.50 mL, 0.0740 mol/L, 2.62 g/L) is reused exactly; its g/L value is compared with seawater (roughly 19 g/L chloride, author note b), which makes "lightly salty" a checked statement. The site's application line (salinity of a water sample) supports the context.
- **Concordant titres (recall, not re-taught):** the site gives only the concordant titre 18.50 mL. Scene 7 adds an invented titre set (rough 19.10 mL; 18.45, 18.55, 18.50 mL) whose concordant mean is the site's 18.50 mL, with a grey chip "c12: within 0.10 mL". It takes one scene.
- **Colour word:** silver chromate is called "red-brown" throughout (memory aid bank wording; the site says "brick-red"). One colour word avoids two names for one change.
- **Site sources used (site lesson 1):** the Mohr card (reaction, chromate indicator, endpoint as a second precipitate, the pH 6.5 to 10 condition with both causes, the late endpoint and blank, halide and other anion interferences, the salinity application); the Mohr worked example (all five steps and numbers); the MC distractors (dividing by the titre, the 2 : 1 ratio, the pH 3 case), which informed the crossed mistakes, with original questions written for the attempts.
- **Site corrections (new; quoted from site lesson 1, read 28 Oct; for `../site-corrections-m8.md`):**
  1. Mohr card, "Why the order works": "Silver chloride is the less soluble of the two salts: its molar solubility is about 1.3 × 10⁻⁵ mol L⁻¹, against about 6.5 × 10⁻⁵ mol L⁻¹ for silver chromate. Because silver chloride is removed from solution more readily, it forms first and keeps forming until chloride runs out." Pure-water solubilities do not decide the order in the flask; the silver concentration each solid needs, set by the actual chloride and chromate concentrations, does. Correct: "Each solid forms only once its ion product exceeds its Ksp. With plenty of chloride and only a little chromate, silver chloride needs far less silver ([Ag⁺] = Ksp/[Cl⁻]) than silver chromate ([Ag⁺] = √(Ksp/[CrO₄²⁻])), so silver chloride forms first and red silver chromate appears only once almost all the chloride has gone."
  2. Mohr card, Common error box: "Compare molar solubilities, not Ksp values, when deciding which solid appears first." The first half is right (Ksp values of different formula types cannot be compared directly), but the conclusion repeats correction 1. Correct: "Neither Ksp values nor pure-water solubilities decide the order in a mixture. Calculate the silver concentration each solid needs from the concentrations present."
  3. Mohr card: "While any chloride remains, every added silver ion is taken up as silver chloride." Minor overstatement; a small equilibrium concentration of both ions remains. Correct: "While chloride remains, nearly all the added silver is taken up as silver chloride."
  - **Note, not an error:** the extract (`../site-extracts/chem-m8-l01.md`) does not record that the current HTML makes Mohr core and labels the acid-base material Module 6 revision (pack section 2).
- **Pack questions answered:** the video owns only the Mohr titration (review change 4). Chromate concentration: about 0.005 mol/L in the flask is used for author note a (a common procedure gives 1 mL of 5% K₂CrO₄ in about 50 mL); the practical is cut, so no blank volume is set. All pack numbers reproduced (author note c).
- **Cause chain taught, in order:** (1) chloride is invisible, and with no acid or base a pH indicator has nothing to respond to; (2) silver forms white silver chloride, 1 : 1, but the white solid gives no stopping signal; (3) a little chromate forms red-brown silver chromate once nearly all chloride is gone, so the first lasting red-brown is the endpoint; (4) chloride goes first because, with lots of chloride and little chromate, silver chloride needs far less silver; as chloride falls, the silver needed rises until red appears; so the chromate amount is set; (5) acid turns chromate to dichromate, so the endpoint is late and the titre high; base gives silver oxide; other silver-precipitating ions count as chloride; the blank corrects the small built-in lateness; (6) chromium(VI) hazard, so the method is often met as data; (7) concordant titres; (8 to 10) titre to moles of silver, 1 : 1 to chloride, divide by the aliquot, then g/L and its meaning.
- **Entry knowledge:** chem-m6-c12 (burette, pipette, aliquot, titre, concordant titres within 0.10 mL, n = cV, divide by the aliquot); chem-m6-c13 (an indicator signals the endpoint; endpoint and equivalence point are close but not identical); chem-m5-c13 (precipitation, net ionic equations, AgCl white); chem-m5-c14 (Ksp expressions, including a squared term for a 2 : 1 salt); chem-m5-c15 (a solid forms when Qsp exceeds Ksp). Dichromate is named, not taught (its orange colour is not needed).
- **Learner-visible vocabulary (plain meaning at first use):** precipitation titration (screen; a titration where the titrant forms a solid with the analyte); Mohr method (screen; chloride titrated with silver nitrate, chromate indicator); indicator (recall); endpoint (recall; here, the first lasting red-brown); ion product, Qsp and Ksp (recall); blank (a run with no chloride, to measure the small extra silver the colour needs, then subtracted); aliquot (recall).
- **Attempt systems (unseen, every condition visible, HSC wording):** (A1) Bore water, 20.00 mL, 0.0250 mol/L AgNO₃, titres 15.10 (rough), 14.62, 14.70, 14.66 mL; find chloride in mol/L and g/L. Tests the concordant mean, n = cV, 1 : 1, the aliquot and g/L. Crossed mistake: doubling the moles with chromate's 2 : 1 ratio (pack trap; site MC distractor). (A2) Pickling-factory wastewater at pH 3, titrated without adjusting pH: explain the effect, suggest a fix. Tests scene 5's cause. Crossed mistake: "No effect: H⁺ isn't in the silver chloride equation" (site MC distractor idea, original wording).
- **Mistake scene:** none separate. "AgCl goes first because it is less soluble" (4, named and corrected); "the 2 : 1 ratio" (11 said positively; feedback 1, crossed); "dividing by the titre" (9, said positively); "averaging the rough titre" (7, said positively); "pH doesn't matter" (feedback 2, crossed).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **burette drip** (a drop falls from the burette tip into the flask plate on each "runs in" cue; the flask plate cross-fades between aligned states); **ion swap** (in a circular zoom inset beside the flask: Ag⁺ and Cl⁻ dots pair and fall as white tiles; later Ag⁺ pairs with CrO₄²⁻ dots as red-brown tiles); **silver-needed ladder** (scene 4: a vertical log scale of [Ag⁺] from 10⁻¹⁰ to 10⁻⁴ mol/L; a white "AgCl starts" marker near 2 × 10⁻⁹ and a red-brown "Ag₂CrO₄ starts" marker near 1.5 × 10⁻⁵; as a coded chloride bar shrinks, the white marker climbs until it meets the red-brown marker); **titre table** (rows write and the rough row greys and strikes); **calculation board** (task strip, equation strip and givens group fixed at the top; one reasoning line at a time below, earlier lines dimmed but kept); crossed chips, countdown ring, key notes board (shared kit).
- **Reuse:** painted plates inspected 28 Oct by contact sheet (Assets). The burette plate has no readable graduations, so titre values are always coded text, never read off the plate.
- **No human figures:** apparatus stands alone; the tap opening, drops and swirl are coded.
- **Author notes (not learner copy):**
  (a) Silver needed (Ksp AgCl 1.77 × 10⁻¹⁰, NESA data sheet; Ksp Ag₂CrO₄ 1.12 × 10⁻¹², CRC, not on the data sheet). At the start, [Cl⁻] ≈ 0.074 mol/L: [Ag⁺] = 1.77 × 10⁻¹⁰ ÷ 0.074 = 2.4 × 10⁻⁹ mol/L. With [CrO₄²⁻] ≈ 0.005 mol/L: [Ag⁺] = √(1.12 × 10⁻¹² ÷ 0.005) = √(2.24 × 10⁻¹⁰) = 1.50 × 10⁻⁵ mol/L. Ratio about 6,000 ("thousands of times"). Chloride left when red starts: [Cl⁻] = 1.77 × 10⁻¹⁰ ÷ 1.50 × 10⁻⁵ = 1.18 × 10⁻⁵ mol/L; in about 45 mL that is 5.3 × 10⁻⁷ mol of the 1.850 × 10⁻³ mol present, about 0.03% left ("more than 99.9% gone"). At equivalence [Ag⁺] = √(1.77 × 10⁻¹⁰) = 1.33 × 10⁻⁵ mol/L, just below 1.50 × 10⁻⁵, so the red appears just after equivalence; with the visibility excess, this is the built-in lateness the blank corrects. Pure-water solubilities (site): AgCl √(1.77 × 10⁻¹⁰) = 1.33 × 10⁻⁵ mol/L; Ag₂CrO₄ (1.12 × 10⁻¹² ÷ 4)^(1/3) = 6.54 × 10⁻⁵ mol/L.
  (b) Seawater chloride about 19.4 g/kg (salinity 35), about 19.9 g/L at density 1.025; "roughly nineteen" is said. 2.62 ÷ 19.4 ≈ 0.14, brackish, consistent with an estuary.
  (c) Site numbers reproduce: 0.1000 × 0.01850 = 1.850 × 10⁻³ mol; ÷ 0.02500 = 0.0740 mol/L; × 35.45 = 2.623 g/L. Site MC check (not used): 0.0500 × 0.01600 ÷ 0.02000 = 0.0400 mol/L.
  (d) pH: 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O (with HCrO₄⁻); in strong base 2Ag⁺ + 2OH⁻ → Ag₂O + H₂O (brown). Range "roughly 6.5 to 10" (site; sources give 6.5 to 9 or 7 to 10). The A2 fix: neutralise with sodium hydrogen carbonate (or calcium carbonate, or borax) to about pH 7 to 8; any base that adds no chloride and does not push pH above about 10 is acceptable.
  (e) Potassium chromate: Cr(VI), toxic, classed as a carcinogen (GHS Carc. 1B); review change 5.
  (f) Pronunciations: "Mohr" as "more"; "K s p" spelled; "p H" spelled.

Main question: *Estuary water looks like tap water, but it carries dissolved chloride. With no acid or base for an indicator to respond to, how can a titration with silver nitrate show when the chloride runs out, and how do you turn the titre into a chloride concentration?*
Entry knowledge (chem-m6-c12, c13; chem-m5-c13, c14, c15): titration technique, concordant titres and n = cV; what an indicator does, endpoint versus equivalence; precipitation and net ionic equations; Ksp and Qsp.
Stops after: writing the titration and indicator equations with colours; explaining why chloride precipitates first and why the chromate amount is controlled; stating the pH condition with both causes and the effect of acid on the titre; naming halide interference and the blank; calculating chloride in mol/L and g/L from concordant titres. No direct or back titration, no hands-on procedure or risk table.
Handoff: weighing a precipitate instead of measuring a volume (route chem-m8-c02, gravimetric analysis).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: silver ions pale grey; chloride green; chromate yellow; silver chloride white tiles; silver chromate red-brown tiles; hydrogen ions soft orange; reasoning lines ink; givens and units navy; the current answer bright; earlier lines dim. Board layout (constant): heading top-left; apparatus left third; inset or board right two thirds.

### 1. hook (clear water, hidden chloride)
> This bottle of estuary water looks just like tap water, but it's carrying dissolved salt. How much chloride is in it? You already know how a titration counts acid, with a burette, a pipette and n equals c V. Chloride isn't an acid or a base, though, so a p H **indicator** has nothing to respond to. So how do we see the moment the chloride runs **out**?

Visual: heading writes on: "How much chloride is in this water?". `m8-river-sampling-bottle-v1.png` appears medium at centre with a tag "estuary water". A grey chip "c12: titration, n = cV" writes under it. On "indicator" `m6-clip-phenolphthalein-pink-v1.png` appears small at the right with a grey chip "c13: pH indicator", then a soft cross fades over the chip "no acid or base here". On "out" the pink flask fades, and a question chip writes and stays dim: "when is the chloride used up?".

### 2. silver meets chloride
> The trick is to titrate with silver nitrate. Silver ions grab chloride ions and form silver chloride, a white solid. One silver for one chloride, so the ratio is one to one. As the silver nitrate runs in, the flask turns cloudy **white**. But here's the problem. The white keeps forming right up to the end, and then it simply stops forming. Nothing **new** appears to tell you to stop.

Visual: the bottle shrinks to the top-left corner. `m6-burette-clamp-stand-v1.png` appears at the left with a navy coded label "AgNO₃(aq)" on the burette; `m8-mohr-flask-yellow-v1.png` is not used yet: the plain `m6-conical-flask-v1.png` sits under the tip with a coded clear fill and tag "Cl⁻(aq) sample". The equation writes on the right: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" with "white" under AgCl and a chip "1 : 1". The ion swap inset opens: grey Ag⁺ and green Cl⁻ dots pair and drop as white tiles. On "white" drops fall (burette drip) and the coded fill turns milky white. On "new" the drops continue; the inset shows no green dots left and the grey dots float unpaired; a small question mark appears over the flask.

### 3. a second precipitate as the signal
> So we add a few drops of potassium chromate before we start. It's yellow, and it's our indicator. While chloride is still around, the silver keeps forming white silver chloride. Once nearly all the chloride is gone, the next silver ions meet chromate instead, and form silver chromate, a red-brown **solid**. Two silvers for each chromate. The first faint red-brown tinge that stays after swirling is the **endpoint**. In this titration, the signal is a second precipitate.

Visual: the board resets. `m8-chromate-dropper-bottle-v1.png` appears small beside the flask with tag "K₂CrO₄ indicator"; the flask cross-fades to `m8-mohr-flask-yellow-v1.png`. Drops fall; the flask cross-fades to `m8-mohr-flask-white-v1.png`; the inset shows white tiles forming while yellow chromate dots wait. On "solid" the inset's last green dot goes, and grey Ag⁺ pairs with yellow CrO₄²⁻ as a red-brown tile; the second equation writes under the first: "2Ag⁺(aq) + CrO₄²⁻(aq) → Ag₂CrO₄(s)" with "red-brown" under it, and the first equation dims. On "endpoint" the flask cross-fades to `m8-mohr-flask-endpoint-v1.png`, a coded swirl arc circles it once, and the tag "endpoint: first lasting red-brown" writes (bright). The heading updates: "The Mohr method".

### 4. why chloride goes first
> Why does the chloride react first? You'll sometimes read that silver chloride is less soluble, so it goes first. Careful, that isn't the real reason. Think back to Q s p. A solid only forms once its ion product passes K s p. At the start there's lots of chloride, about point zero seven four molar, so silver chloride needs only a tiny trace of **silver**. There's only a little chromate, about point zero zero five molar, and silver is squared in its K s p, so silver chromate needs thousands of times more silver. As the chloride gets used up, the silver needed for silver chloride **climbs**. The red only appears when more than ninety nine point nine percent of the chloride is **gone**. That's why only a small, set amount of chromate goes in.

Visual: the flask shrinks to the left. A chip writes "AgCl is less soluble, so it goes first" and is crossed (caption "not the reason in a mixture"). A grey chip "c15: solid forms when Qsp > Ksp" writes. The silver-needed ladder draws on the right (log scale, label "[Ag⁺] needed to start forming"), with a small grey tag "one illustrative sample, not a fixed threshold". Two small grouped givens write at the ladder's foot, each beside its bar (learning review 1): beside a tall green bar "lots of Cl⁻", "[Cl⁻] at the start ≈ 0.074 mol/L"; beside a short yellow bar "a little CrO₄²⁻", "[CrO₄²⁻] ≈ 0.005 mol/L" (grey tag "sample value, worked out in the calculation later"). On "silver" the AgCl working writes alone beside the ladder: "[Ag⁺] = Ksp ÷ [Cl⁻] = 1.77 × 10⁻¹⁰ ÷ 0.074" and a white marker lands low: "AgCl: about 2 × 10⁻⁹ mol/L". Then that working dims (marker kept), and the chromate working writes: "[Ag⁺] = √(Ksp ÷ [CrO₄²⁻]) = √(1.12 × 10⁻¹² ÷ 0.005)", a small "[Ag⁺]²" tag, and a red-brown marker lands high: "Ag₂CrO₄: about 1.5 × 10⁻⁵ mol/L". The narration says the two concentrations aloud once, so voice and givens match. On "climbs" both workings dim, the green bar shrinks and the white marker slides up the ladder. On "gone" the white marker meets the red-brown marker; a red-brown flash; tag "> 99.9% of Cl⁻ gone" (bright). Last line: a dim tag under the yellow bar, "small, set amount of chromate". At most three bright items at any cue: the current working, its marker, and one given.

### 5. keeping the endpoint valid
> This endpoint works only in the right conditions. Keep the solution near neutral, roughly p H six and a half to ten. In acid, chromate ions pick up hydrogen ions and turn into dichromate, so there's less chromate to make the red. The endpoint comes late, and the titre reads **high**. In strong base, silver forms brown silver oxide **instead**. Other ions that precipitate with silver, like bromide or iodide, get counted as if they were chloride. And the red needs a tiny excess of silver before you can see it, so chemists often run a **blank** and subtract it.

Visual: board clears. A horizontal pH strip draws with a green window "about 6.5 to 10". At the left end (acid): orange H⁺ dots join yellow chromate dots in a small inset and they become "Cr₂O₇²⁻"; the yellow bar from scene 4 shrinks; on "high" a chip "late endpoint, titre too high" lights. At the right end (base), on "instead", a chip "Ag₂O forms (brown)" lights and the acid chip dims. A third chip writes on "bromide": "Br⁻, I⁻ counted as Cl⁻" and the base chip dims. On "blank" a small chip "blank: no chloride, subtract its titre" writes (grey); at most three bright items at any time.

### 6. the hazard, and why it's data
> One more thing. Potassium chromate contains chromium six, which is toxic and treated as a cancer-causing chemical, so many schools skip this practical. You're more likely to meet the Mohr method as **data** in a question. So let's process some.

Visual: `m8-chromate-dropper-bottle-v1.png` returns at centre with a coded hazard band "Cr(VI): toxic, carcinogen" (GHS pictograms as coded symbols, no people). On "data" the bottle slides away and a blank titre table frame draws on the right.

### 7. the titres
> A twenty five millilitre aliquot of the estuary water is titrated with point one zero zero zero molar silver nitrate. Here are the titres. The rough run comes first and gets **left out**. The other three agree within point one zero millilitres, so they're concordant. Their **average** is eighteen point five zero millilitres.

Visual: the titre table writes row by row: "Rough 19.10 mL", "1: 18.45 mL", "2: 18.55 mL", "3: 18.50 mL". On "left out" the rough row greys and strikes through. A grey chip "c12: concordant = within 0.10 mL" writes. On "average" a bracket gathers rows 1 to 3 and writes "mean = 18.50 mL" (bright).

### 8. stage 1: moles of silver
> First, the task: find the chloride concentration, in moles per litre and grams per litre. The equation: silver plus chloride gives silver chloride. Start with the solution you know both numbers for, the silver nitrate. Moles equals c times V. Point one zero zero zero, times point zero one eight five zero litres, gives one point eight five zero times ten to the minus three moles of **silver**.

Visual: the calculation board sets up at the top: task strip "Find c(Cl⁻) in mol/L and g/L"; equation strip "Ag⁺ + Cl⁻ → AgCl"; givens group (navy) in two short blocks: "AgNO₃: c = 0.1000 mol/L, V = 18.50 mL = 0.01850 L" and "sample: aliquot 25.00 mL = 0.02500 L". The table from scene 7 shrinks away. Stage line 1 writes: "n(Ag⁺) = cV = 0.1000 × 0.01850". On "silver" the result writes "= 1.850 × 10⁻³ mol" (bright), and the AgNO₃ givens block glows.

### 9. stage 2: the ratio and the aliquot
> The ratio is one to one, so that's also the moles of **chloride**, and all of it came from the aliquot. So divide by the aliquot's volume, point zero two five zero zero litres, not by the titre. That gives point zero seven four zero moles per **litre**.

Visual: stage line 1 dims (result kept). On "chloride" line 2 writes "1 : 1, so n(Cl⁻) = 1.850 × 10⁻³ mol" and the "1 : 1" on the equation strip glows. Line 3 writes "c(Cl⁻) = n ÷ V(aliquot) = 1.850 × 10⁻³ ÷ 0.02500"; the sample givens block glows; a small chip "÷ titre" fades in and is crossed. On "litre" the result writes "= 0.0740 mol/L" (bright).

### 10. stage 3: grams per litre
> For grams per litre, multiply by the molar mass of chlorine, thirty five point four five. That's about two point six two grams of chloride per **litre**. Seawater has roughly nineteen, so this water is only lightly salty, what you'd expect where a river meets the **sea**.

Visual: lines 1 to 3 dim, the 0.0740 result kept. Line 4 writes "0.0740 × 35.45" with "M(Cl) = 35.45 g/mol" added to the givens. On "litre" "= 2.62 g/L" (bright). On "sea" a small coded bar compares "this sample 2.62 g/L" with "seawater about 19 g/L"; the estuary bottle returns small beside it.

### 11. memory aid
> So here's the short version. White while chloride lasts, and stop at the first red-brown that stays. Keep it near neutral. Then titre, moles, ratio, and divide by the aliquot. And the one to one ratio is silver to chloride. The two to one belongs to chromate, the indicator, so leave it out of the **answer**.

Visual: board clears. Handwritten line 1: "White while Cl⁻ lasts; stop at the first lasting red-brown." Handwritten line 2: "titre → moles → ratio → ÷ aliquot". On "answer" a small card: "Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's)". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Bore water is tested by the Mohr method. Find the chloride concentration in moles per litre and in grams per litre. Pause here to answer.

Visual: question card, worded as printed: "A 20.00 mL sample of bore water was titrated with 0.0250 mol L⁻¹ silver nitrate solution, using potassium chromate as the indicator. The titres were 15.10 mL (rough), 14.62 mL, 14.70 mL and 14.66 mL. Calculate the concentration of chloride ions in the bore water, in mol L⁻¹ and in g L⁻¹. M(Cl) = 35.45 g mol⁻¹." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Leave out the rough titre and **average** the rest: fourteen point six six millilitres. That gives the moles of silver, and the same moles of **chloride**. Divide by the twenty millilitre sample: point zero one eight three molar. Times thirty five point four five, that's point six five zero grams per **litre**. Doubling the moles with chromate's two to one ratio is the classic **slip**.

Visual: card shrinks to the top. On "average" "15.10 mL (rough)" is underlined and struck; "14.62 mL, 14.70 mL and 14.66 mL" are underlined; line "mean = 14.66 mL". Line "n(Ag⁺) = 0.0250 × 0.01466 = 3.665 × 10⁻⁴ mol" ("0.0250 mol L⁻¹" underlined) writes on "silver", so the screen carries the number the voice no longer reads; on "chloride" it continues "= n(Cl⁻) (1 : 1)". Line "c = 3.665 × 10⁻⁴ ÷ 0.02000 = 0.0183 mol/L" ("20.00 mL" underlined). On "litre" line "0.018325 × 35.45 = 0.650 g/L" (answers bright; "M(Cl)" underlined). On "slip" a chip "n(Cl⁻) = 2 × n(Ag⁺) → 0.0367 mol/L" fades in and is crossed (caption "Ag⁺ : Cl⁻ is 1 : 1"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Wastewater from a pickling factory has a p H of three, and a student titrates it by the Mohr method without adjusting the p H. Explain the effect on the calculated chloride concentration, and suggest a fix. Pause here to answer.

Visual: question card, worded as printed: "Wastewater from a pickling factory has a pH of 3. A student determines its chloride concentration by Mohr titration with standard silver nitrate solution and potassium chromate indicator, without adjusting the pH. (a) Explain the effect on the calculated chloride concentration. (b) Suggest one change to the method that would correct this." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> At p H three, hydrogen ions turn much of the **chromate** into dichromate. With less chromate, extra silver is needed before red-brown silver chromate shows, so the titre's too **high**, and so is the calculated chloride. Fix it by neutralising the sample first, for example with sodium hydrogen carbonate, to about p H **seven or eight**.

Visual: card shrinks to the top. On "chromate" "pH of 3" is underlined; a mini inset: orange H⁺ dots turn yellow chromate dots into "Cr₂O₇²⁻". On "high" "potassium chromate indicator" and "calculated chloride concentration" are underlined; chips "late endpoint → titre high → Cl⁻ too high" (bright). The fix chip writes "neutralise first (e.g. NaHCO₃) to about pH 7 to 8"; "without adjusting the pH" underlined. On "seven or eight" (the last cue) a chip "No effect: H⁺ isn't in Ag⁺ + Cl⁻ → AgCl" fades in and is crossed (caption "acid changes the indicator"). The sentence that used to carry this idea is cut (learning review 2); the crossed chip and caption keep it. Hold about 1 second.

### 16. handoff
> So silver counts the chloride, and chromate tells you when to stop. **Next**: instead of measuring a volume, we'll weigh the precipitate itself.

Visual: board clears. Memory line 1 returns small at the top. On "Next" `m6-analytical-balance-v1.png` appears small at the right with a chip "Next: gravimetric analysis". Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Mohr method: AgNO₃ in the burette, chloride sample in the flask, a little K₂CrO₄ indicator. Ag⁺ + Cl⁻ → AgCl(s), white, 1 : 1.
2. Endpoint: the first lasting red-brown, 2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄(s). It appears once more than 99.9% of the Cl⁻ is gone, because with lots of Cl⁻ and little CrO₄²⁻, AgCl needs far less Ag⁺ to pass its Ksp.
3. Valid: about pH 6.5 to 10. Acid turns CrO₄²⁻ into Cr₂O₇²⁻, so the endpoint is late and the titre too high. Base gives Ag₂O. Br⁻ and I⁻ are counted as Cl⁻. A blank corrects the slightly late endpoint.
4. Calculation: concordant mean titre → n(Ag⁺) = cV → n(Cl⁻) (1 : 1) → c = n ÷ V(aliquot) → × 35.45 for g/L. Example: 25.00 mL, 18.50 mL of 0.1000 mol/L → 0.0740 mol/L, 2.62 g/L.

Memory aid (large, on the notes screen): *White while Cl⁻ lasts; stop at the first lasting red-brown.* Second line: *Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's).*

## Teaching checks

- **Does it explain causes?** Why a pH indicator can't work: no acid or base (1). Why white alone can't signal: it just stops forming (2). Why red appears at the end: chromate takes silver only after chloride is nearly gone (3). Why chloride goes first: lots of chloride and little chromate, so silver chloride needs far less silver to pass its Ksp (4). Why the chromate amount is set: it sets the silver level at which red appears (4). Why acid gives a high titre: chromate becomes dichromate, so more silver is needed before red shows (5, feedback 2). Why a blank: the colour needs a small silver excess (5). Why divide by the aliquot: all the chloride came from it (9).
- **Misconceptions addressed:** "AgCl forms first because it is less soluble" (4, crossed); "use chromate's 2 : 1 ratio" (11; feedback 1, crossed); "divide by the titre" (9, crossed chip); "average the rough titre" (7, struck); "pH has no effect" (feedback 2, crossed); "the endpoint is exactly the equivalence point" (5, blank, said positively).
- **One idea at a time:** one flask state at a time; the inset shows only the current pairing; the ladder appears only in scene 4; the pH strip lights one end at a time; one calculation line at a time with earlier results kept and dimmed.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (all four titres, both concentrations, both volumes and M(Cl) in A1; the pH, reagents and "without adjusting" in A2), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** titration technique, concordance and n = cV are c12 chips; indicators and endpoint versus equivalence are c13; Qsp is a c15 chip; Ksp powers are c14; direct and back titration are not shown.
- **Dotpoint coverage:** `C8-IQ1-03`, precipitation titrations (processing Mohr data, with the chemistry and validity conditions that make the data meaningful). Gravimetric analysis is c02; the hands-on practical is cut (review change 5).
- **Out of scope by design:** Volhard and Fajans methods; blank arithmetic; dilution steps; titration curves; the procedure and risk table.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Reactions | Ag⁺ + Cl⁻ → AgCl (white, 1 : 1); 2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄ (red-brown) | 2, 3, notes |
| Ksp | AgCl 1.77 × 10⁻¹⁰ (data sheet); Ag₂CrO₄ 1.12 × 10⁻¹² (CRC) | author note a |
| Silver needed | AgCl about 2 × 10⁻⁹ mol/L at [Cl⁻] 0.074; Ag₂CrO₄ about 1.5 × 10⁻⁵ mol/L at [CrO₄²⁻] 0.005 | 4 |
| Chloride left at red | about 0.03% (> 99.9% gone) | 4, notes |
| pH window | about 6.5 to 10 | 5, notes |
| Titres | rough 19.10; 18.45, 18.55, 18.50 mL; mean 18.50 mL | 7 |
| Worked example | 0.1000 mol/L × 0.01850 L = 1.850 × 10⁻³ mol; ÷ 0.02500 L = 0.0740 mol/L; × 35.45 = 2.62 g/L | 8 to 10, notes |
| Seawater | chloride roughly 19 g/L | 10 |
| A1 | mean 14.66 mL; 3.665 × 10⁻⁴ mol; 0.018325 → 0.0183 mol/L; 0.650 g/L; crossed 0.0367 mol/L | 12, 13 |
| A2 | pH 3; neutralise to about pH 7 to 8 with NaHCO₃ | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked by hand (28 Oct); Codex to re-check against the NESA data sheet, the CRC Handbook or another named source.

- Ksp: AgCl 1.77 × 10⁻¹⁰ (NESA data sheet); Ag₂CrO₄ 1.12 × 10⁻¹² at 25 °C (CRC; not on the data sheet). Pure-water solubilities: AgCl 1.33 × 10⁻⁵ mol/L; Ag₂CrO₄ 6.54 × 10⁻⁵ mol/L (site gives 1.3 and 6.5 × 10⁻⁵, from its Ksp 1.8 × 10⁻¹⁰ and 1.1 × 10⁻¹²).
- Silver needed: 1.77 × 10⁻¹⁰ ÷ 0.074 = 2.39 × 10⁻⁹ mol/L; √(1.12 × 10⁻¹² ÷ 0.005) = 1.50 × 10⁻⁵ mol/L; ratio about 6,300. Equivalence [Ag⁺] = 1.33 × 10⁻⁵ mol/L. Chloride left: 1.18 × 10⁻⁵ mol/L × 0.045 L = 5.3 × 10⁻⁷ mol of 1.850 × 10⁻³ mol (0.029%).
- Typical indicator: 1 mL of 5% w/v K₂CrO₄ (0.257 mol/L, M = 194.19 g/mol) in about 50 mL gives about 5 × 10⁻³ mol/L chromate. Confirm against a standard Mohr procedure.
- Titres: (18.45 + 18.55 + 18.50) ÷ 3 = 18.50 mL; range 0.10 mL. A1: (14.62 + 14.70 + 14.66) ÷ 3 = 14.66 mL; range 0.08 mL.
- Worked: 0.1000 × 0.01850 = 1.850 × 10⁻³ mol; ÷ 0.02500 = 0.07400 mol/L; × 35.45 = 2.623 g/L (2.62).
- A1: 0.0250 × 0.01466 = 3.665 × 10⁻⁴ mol; ÷ 0.02000 = 0.018325 mol/L (0.0183, 3 s.f. from 0.0250); × 35.45 = 0.6496 g/L (0.650). A student who rounds first gets 0.0183 × 35.45 = 0.649 g/L; accept both. Crossed: 2 × 0.018325 = 0.03665 (0.0367) mol/L.
- Seawater chloride about 19.4 g/kg, about 19.9 g/L; 2.62 g/L is brackish.
- pH window about 6.5 to 10 (sources vary: 6.5 to 9, 7 to 10); chromate to dichromate in acid; Ag₂O in strong base.
- Potassium chromate hazard classification (GHS: Carc. 1B, Muta. 1B, skin sensitiser, toxic to aquatic life).

## Memory aid check

- **"White while Cl⁻ lasts; stop at the first lasting red-brown."** Written for this lesson from the Module 8 bank entry "Precipitation titration (Mohr method)" (*Shortcut*): "White AgCl forms first; the first permanent red-brown Ag₂CrO₄ marks the end point. Run it near neutral pH." Assumptions checked: holds only with a small, set chromate amount and roughly pH 6.5 to 10 (scenes 4 and 5 say both before the aid); "lasting" means after swirling, since local red forms where drops land and disappears. Introduced after scenes 2 to 5.
- **"titre → moles → ratio → ÷ aliquot"** and **"Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's)."** From the bank's "Ag⁺ reacts with Cl⁻ in a 1 : 1 ratio" and the pack's site aid "titre → moles → equation ratio → aliquot concentration". Assumptions checked: no dilution step (if the sample was diluted, a dilution factor is added; not in this video); the 1 : 1 holds for chloride only.
- **Considered, not used:** the gravimetric aids (c02); the bank's "acidify before testing anions" (c03b; for Mohr, acid is the problem, so it would confuse here).

## Narration length estimate

Revision 2 count (30 Oct; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,541 characters**, 17 scenes. Characters per scene (1 to 17): 346, 378, 465, 736, 552, 240, 318, 391, 245, 264, 305, 148, 373, 238, 327, 140, 75. At 13.3 characters per second the speech is about 417 s; add about 18 s of holds, 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 8.5 minutes (510 s)**, inside the 5,500 to 6,800 character band and under 9.5 minutes. Scene 4 is the longest (736 characters, about 55 s); watch its pace in the voiced preview. Feedback: scene 13 about 28 s, scene 15 about 25 s, both inside the 30 s guide. Revision 1 was 5,646 characters, about 518 s. Reserve trims if the voiced take runs long: scene 10's seawater sentence (keep the bar), scene 5's blank sentence (keep the chip). Do not cut below 5,500 without replacing the content.

## Assets

Have (inspected 28 Oct by contact sheet): `public/assets/chemistry/m8-river-sampling-bottle-v1.png` (2000 × 2000; a clear sample bottle beside a sampling pole and cup; scene 1, scenes 10 and 16 small; clear water fits "looks like tap water", so v2, which shows murky water, is not used); `m6-clip-phenolphthalein-pink-v1.png` (2048 × 1700; conical flask with pink liquid; scene 1 only, as the "pH indicator" recall); `m6-burette-clamp-stand-v1.png` (2048 × 2048; no readable graduations, so values are coded text); `m6-conical-flask-v1.png` (2048 × 2048, empty; scene 2 with a coded fill); `m6-analytical-balance-v1.png` (scene 16, small). Scale uniformly only, never stretched. Coded: burette drip, ion swap inset, silver-needed ladder, pH strip, titre table, calculation board, crossed chips, countdown ring, key notes board.

Need: **four new plates** (Codex asset brief): `m8-mohr-flask-yellow-v1.png`, `m8-mohr-flask-white-v1.png`, `m8-mohr-flask-endpoint-v1.png`, `m8-chromate-dropper-bottle-v1.png`. Chem-m8-g01 can reuse the flask set.

## Codex asset brief

Painted plates in the house style of the `m6-clip-*` conical flask plates (transparent PNG with a true alpha channel, no background, no shadow plate, no text, no people or hands).

1. **Mohr flask set (aligned).** Three plates on a 2048 × 1700 canvas with alpha bounds identical to `m6-clip-phenolphthalein-pink-v1.png` (561, 136, 1487, 1564), the same flask outline, glass and liquid level, so they cross-fade without any shift:
   - `m8-mohr-flask-yellow-v1.png`: clear, pale lemon-yellow solution (chloride sample with a little potassium chromate). Transparent, not cloudy.
   - `m8-mohr-flask-white-v1.png`: an opaque milky-white suspension (silver chloride) with a faint yellow cast, as seen mid-titration.
   - `m8-mohr-flask-endpoint-v1.png`: the same white suspension with a faint, even pinkish red-brown tinge throughout (the first lasting silver chromate colour). Subtle: a tinge, not a deep red; it should read clearly different from the white plate at small size.
2. **`m8-chromate-dropper-bottle-v1.png`.** Match `p03-dropper-bottle-v1.png` (2000 × 2000, same bottle, cap and blank cream label, alpha bounds 160, 201, 1800, 1773), but the liquid is a clear bright yellow (potassium chromate solution). Label left blank; the name is a coded tag.

Check before delivery: no stretching; the three flasks overlay exactly; colours as described; no text in the image.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" against a named source, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the science claims in scene 4 (order set by the silver each solid needs, not by pure-water solubility), scene 5 (pH window and both causes; halide interference; blank) and feedback 2 (acid gives a high titre; NaHCO₃ fix), with sources.
3. Confirm both attempt questions are original (not copied from a NESA paper or the site) and that every condition the answer needs is on the card.
4. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
5. Confirm the narration character count and per-scene counts by script with the build parser rules.
6. Add site corrections 1 to 3 under Decisions to `../site-corrections-m8.md` (owner record only; the site is read-only here).
7. Inspect the four delivered plates against the Codex asset brief, including the overlay of the flask set.

## YouTube metadata (draft)

Title: Mohr Titration: Measuring Chloride with Silver Nitrate and a Chromate Endpoint | Year 12 Chemistry

(Title length: 98 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson01.sa.html

Chloride can't be seen, and it isn't an acid or a base, so how does a titration find it? See how silver nitrate turns chloride into white silver chloride, why a little potassium chromate gives a red-brown endpoint only once the chloride is nearly gone, and why that order comes from the silver each solid needs, not from which salt is less soluble. Learn the pH window and what acid does to the titre, then turn concordant titres into a chloride concentration in mol/L and g/L. Two exam-style questions at the end.

Chemistry 2017: Year 12 Module 8, Applying Chemical Ideas.
Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 8):
"conduct investigations and/or process data involving:
- gravimetric analysis
- precipitation titrations"
This video covers precipitation titrations; gravimetric analysis is the next video.
Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

Prerequisites: How does direct titration reveal an unknown concentration? Will mixing these solutions form a precipitate? Next: Gravimetric analysis.

#Year12Chemistry #AnalyticalChemistry #HSCScience

## Open decisions

- **Route JSON (recommended: root applies).** For chem-m8-c01 set `prerequisites` to chem-m5-c13, chem-m5-c14, chem-m5-c15, chem-m6-c12, chem-m6-c13 (review change 4 adds c12; scene 4 needs c15) and `next` to chem-m8-c02 (p01 cut, change 5). Update `entryKnowledge` to match.
- **Scene 4 depth (closed, Revision 2).** The ladder keeps its numeric markers and now shows the givens and one working per marker (learning review 1). Judge the load in the voiced preview; the fallback is to drop the workings and keep the givens.
- **Feedback length (closed, Revision 2).** Scenes 13 and 15 were cut to fit about 30 s (learning review 2).
- **Title length:** 98 characters; if a shorter title is preferred, drop "and a Chromate Endpoint" (75 characters).

## Build ids

Lesson key `m8c01` (route chem-m8-c01). Suggested explainer folder `src/explainer/lessons/chem-m8-c01` and build folder `docs/production/claude-pm/lessons/m8c01` (root to confirm when adding the LESSONS entry). The calculation board, titre table and crossed chips should be imported from the chem-m6-c12 parts, not copied.

In order (kebab-case; 17 scene headings, all `### N.`): hook, silver-meets-chloride, second-precipitate, why-chloride-first, valid-endpoint, hazard-data, titres, stage-1-silver, stage-2-aliquot, stage-3-grams, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m8c01-learning-review.md`, `science_check` = `checks/m8c01-science-check.md`.
