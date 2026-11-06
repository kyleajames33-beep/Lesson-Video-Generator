# Year 11 Chemistry M3 V03: Precipitation reactions. How do solubility rules predict a precipitation reaction? (design)

Status: Revision 2 (6 Nov 2026): brief 182 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,280 characters, 18 scenes, about 562 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: third Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 57, between `chem-y11-m3-v02` and `chem-y11-m3-v04`. Templates: `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates); series conventions from `chem-y11-m3-v02.md` (same designer: charge tiles, atom tallies, pattern strips) and `chem-y11-m2-v15.md` (the silver chloride ion lock and spectator dots). The Year 12 design `chem-m5-c13.md` (Revision 3, science-checked) teaches the same rules for Year 12 Module 5; this video reuses its checked rules card, swap cross and token-flight split as components, and its memory aid, but follows the Year 11 site lesson's cases and order (open decision 1). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m3-v03` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Predict the solid, write full/ionic/net-ionic equations and identify spectator ions."; next handoff: "How do oxygen supply and fuel affect combustion products?"; practical: "Microscale precipitation observations"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson03.sa.html` (SHA256 `bc49bf0a146c4fc117c8988d9ac2302dc95637738ec2d566fd8adcb1e28a9106`, recomputed, matches the route), sections `l03-solubility-rules-the-nagsag-framework-title` and `l03-writing-full-ionic-and-net-ionic-equations-title`, plus warm-up, key terms, water treatment card, worked examples, misconceptions and drill. Used: the warm-up hook (dissolved lead from old pipes, invisible, "a white solid forms and sinks to the bottom, taking the lead with it"); NAGSAG and the "everything else" band (with Ba(OH)₂); "Apply rules to both possible products"; the three levels of equation with Pb(NO₃)₂ + KI; "Only split compounds into ions if they are aqueous (aq) AND ionic"; "Critical error, splitting the precipitate"; worked examples 1 and 2 (BaCl₂ + Na₂SO₄, molecular, full ionic, net ionic, spectators Na⁺ and Cl⁻); drill 3 (Na₂SO₄ + KNO₃, no precipitate); Q2 (FeCl₃ + NaOH → Fe(OH)₃, "rust brown"); the water-treatment idea (choose a reagent whose anion makes an insoluble compound with the target cation; Pb²⁺ with Na₂SO₄) and its "Practical limitation" (excess reagent adds ions); the lead safety box. Not used: the mercury sulfide route (a toxic reagent and product; one example of reagent choice is enough), lattice and hydration energies (misconception 1's fix; beyond Year 11 entry), Flint (a named community event; not needed), the barium meal (people; Year 12 C13 uses it).

Owner rules applied: as `chem-y11-m3-v02.md` (one learner question; no people, hands or faces; apparatus and substances as painted plates; ions, lenses, cards and equation lines coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ1-03`: "conduct investigations to predict and identify the products of a range of reactions, for example:"
  - "synthesis"
  - "decomposition"
  - "combustion"
  - "precipitation"
  - "acid/base reactions"
  - "acid/carbonate reactions (ACSCH042, ACSCH080)"
- `C3-IQ1-05`: "construct balanced equations to represent chemical reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 41 and 42)

**Boundary:** opens on m3-v02's final frame (same designer). Teaches: a dissolved ionic compound is separate ions, so mixing two salt solutions like these gives four kinds of ion and the only change is new partners; a pair that holds together more strongly than water can separate it comes out as a precipitate; precipitation reaction and spectator ions defined; the rules come from experiment (a microscale spotting-plate investigation shown, with its controls); NAGSAG with its exceptions and the "mostly insoluble" band; the method (list ions, swap partners, check both); molecular, full ionic and net ionic equations for BaCl₂ + Na₂SO₄; never split the precipitate; the charge check; PbI₂'s formula from charges; a "no precipitate" case with no net ionic equation; choosing a precipitating reagent for dissolved lead, with the excess-reagent limitation. Recalls without re-teaching: ion charges (m1-v19), names (m1-v20), the AgCl precipitate and spectator dots (m2-v15), balancing (m2-v01), the two patterns (m3-v02). Not taught: Ksp and partial solubility (Year 12 C14), lattice and hydration energy, filtrate composition with excess (m2-v15 covered excess in gravimetric work), naming spectator ions in redox (m3-v09 onwards).

## Decisions

- **Learner question (route wording kept).** "How do solubility rules predict a precipitation reaction?" The answer, in order: in salt solutions like these, the dissolved ions swap partners (2); a pair that won't stay dissolved is the precipitate, the rest are spectators (3); which pairs do that is a pattern from experiment (4), summarised as rules (5); apply them to both possible products (6, 10); the equations show what really happened (7 to 9); the same reasoning chooses a reagent (11).
- **Opening frame (equals `chem-y11-m3-v02.md`'s final frame, same designer).** Two `p03-dropper-bottle-v1.png` labelled "silver nitrate solution" and "sodium chloride solution" (tags "clear"); `m5x-no-ppt-clear-v1.png` beside `m5x-ppt-agcl-white-v1.png` with a pen arrow "mix"; strip "AgNO₃(aq) + NaCl(aq) → ?"; pattern strips "A + B → AB" and "AB → A + B" (ticked) and "AB + CD → ?" (amber) small at the top right; the "Next" chip, which fades.
- **The hook (route start: concrete case, site warm-up).** The silver chloride from m2-v15 is recalled, then a lab problem gives the stakes (Revision 2, brief 182 finding 2): a waste beaker from an experiment holds dissolved lead ions; it looks clear, but the right solution pulls the lead out as a solid. Revision 1 used the site's lead-in-tap-water problem, but trace lead in drinking water is controlled by pipe replacement and corrosion control, not sulfate and filtering (author note d). The question "which pairs make a solid?" is asked before any rule.
- **Cause before rule.** Scenes 2 and 3 explain precipitation with ions (four kinds, new partners, a pair water can't keep apart), then scene 4 shows that the rules summarise experiments. The lattice and hydration energy explanation (site misconception 1 fix) is not taught; "attract each other more strongly than the water can keep them apart" is the Year 11 wording (as C13).
- **Practical (route practical: "Microscale precipitation observations").** Scene 4 shows a spotting plate with drops of dilute solutions, observations recorded as "cloudy" or "clear". Controls spoken: safety glasses, tiny volumes, waste into the labelled container. Silver nitrate stains skin (m2-v15's control); lead and barium salts are toxic, so the video shows them only as teacher demonstrations or data (site lead safety box; root decision m2-15/m2-18 on barium). The student pairs on the plate are silver nitrate, copper(II) sulfate, calcium chloride, sodium hydroxide, sodium carbonate and sodium chloride (author note b).
- **Rules (site NAGSAG, matched to the checked Year 12 card).** Spoken: nitrates, ammonium and Group 1 "almost always soluble" (C13 Revision 3: a few lithium salts); sulfates except barium, lead and calcium (site list; the card adds "Sr²⁺; Ag⁺ slightly" and marks Ca²⁺ "slightly"); acetates; halides except silver and lead (card footnote "PbCl₂ slightly soluble"); everything else mostly insoluble unless with Group 1 or ammonium (card adds "Ba(OH)₂ soluble"). The card says "a first prediction from experiments", as C13.
- **Worked examples (site cases).** WE1: BaCl₂ + Na₂SO₄ → BaSO₄(s) + 2NaCl(aq), then full ionic and net ionic (site worked examples 1 and 2). WE2: Pb(NO₃)₂ + 2KI → PbI₂(s) + 2KNO₃(aq), with the 2 from charges (site's three-level example). No-precipitate case: Na₂SO₄ + KNO₃ (site drill 3), as the 3 s prediction.
- **Prediction (3 s, scene 10, in-scene countdown).** "Sodium sulfate and potassium nitrate: will a solid form?" Answer: no; both possible products are Group 1 compounds. In-scene 3 s countdowns are a kit build item (root decision m2-8).
- **Reagent choice (site water-treatment card; route stop "predict the solid").** Scene 11 returns to the hook: sodium sulfate removes Pb²⁺ as PbSO₄(s); the site's limitation (excess reagent adds ions to the water) is one sentence. A2 applies the same reasoning to copper.
- **Memory aid (see "Memory aid check"):** "Swap partners, check both. Split only the aqueous; cross out what's the same on both sides." Shared with Year 12 C13 (one line across both years, as m2-v14's bridge line).
- **Attempts (original wording, HSC style).** A1 (site Q2's reaction, new wording): iron(III) chloride with sodium hydroxide: Fe(OH)₃(s), rust-brown; Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s); crossed "Fe³⁺(aq) + 3OH⁻(aq) → Fe³⁺(aq) + 3OH⁻(aq)" (precipitate split; site misconception 2). A2 (reagent choice, new): copper ions with sodium and nitrate; choose from NaNO₃, NaOH, KCl: NaOH, Cu(OH)₂(s) pale blue; crossed "KCl" (chlorides are soluble except with Ag⁺ and Pb²⁺).
- **Mistake scene:** none separate. "Every ionic compound dissolves" (1, a mixture that stays clear in 10); "check only one product" (6, crossed chip); "split the precipitate" (7, A1 crossed); "PbI" (9, crossed chip); "no precipitate means nothing is there" (10: all four ions remain, tagged).
- **Handoff (route next: `chem-y11-m3-v04`, "How do oxygen supply and fuel affect combustion products?").** Scene 17: products so far stayed in the tube (a solid, or ions in solution); when a fuel burns, the products leave as gases; the same burner gas burns blue or yellow. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 3, lead safety box: "The same solubility rule can be shown more safely with silver chloride or barium sulfate." Soluble barium salts (for example barium chloride) are toxic; barium sulfate is a safer product, not a safer practical. Suggest "shown more safely with silver chloride (small volumes, gloves; silver nitrate stains skin), or as a teacher demonstration with barium chloride".
  2. Lesson 3, NAGSAG card: "use the NESA data sheet in exams". The HSC Chemistry data sheet gives solubility constants (Ksp values, Year 12), not solubility rules; Year 11 students must know the rules or use those supplied in a question. Suggest "Use the rules supplied in the question, or the ones you have learned; the data sheet's Ksp table is a Year 12 tool."
  4. (Revision 2, brief 182) Lesson 3's lead-in-tap-water problem: sulfate precipitation and filtering is not how trace lead in drinking water is controlled (pipe replacement and corrosion control; NHMRC). Suggest a concentrated laboratory lead solution as the context, or say the trick works only on concentrated mixtures.
  3. Lesson 3, comprehensive answers, "Why not NaCl for Pb²⁺? ... Additionally, the Cl⁻ ion already present means no driving force for additional precipitation from NaCl." The second sentence is unclear and not correct as stated (adding more chloride does lower dissolved lead somewhat). Suggest deleting it and keeping "PbCl₂ is only slightly soluble, so too much Pb²⁺ would remain dissolved."
  - Checked and correct: worked examples 1 and 2; drills 1 to 3; Q1 (spectators K⁺ and NO₃⁻); Q2 (FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl; net Fe³⁺ + 3OH⁻ → Fe(OH)₃); Q3 (Hg²⁺ + S²⁻ → HgS); Activity 2 rows (PbCO₃, Cu(OH)₂, Fe(OH)₃); the Flint revisit equation 3Pb²⁺ + 2PO₄³⁻ → Pb₃(PO₄)₂ (balanced in atoms and charge).
- **Cause chain taught, in order:** (1) a dissolved ionic compound is separate ions, so mixing can only make new partners (2); (2) a new pair that holds together more strongly than water can separate it leaves the solution as a solid (3); (3) ions that stay dissolved and unchanged take no part (3, 8); (4) which pairs do this was found by experiment (4), summarised as rules (5); (5) a precipitate's formula follows the ion charges, which sets the coefficients (9); (6) only free ions can be written as ions, so the solid stays whole (7, A1); (7) the same rules pick a reagent that removes one ion and leaves the rest dissolved (11, A2).
- **Entry knowledge:** m1-v19 (charges and formulae), m1-v20 (names), m2-v01 (balancing, states), m2-v15 (AgCl precipitate; spectator dots shown but unnamed), m3-v02 (patterns).
- **Learner-visible vocabulary (plain meaning at first use):** precipitate (a solid that forms when two solutions are mixed, 3); precipitation reaction (a reaction that makes a precipitate from two solutions, 3); spectator ions (ions present but unchanged, taking no part, 3); soluble and insoluble (dissolves, and barely dissolves, 5); full ionic equation (every aqueous ionic compound written as separate ions, 7); net ionic equation (only the ions that actually change, 8).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **ion lens** (scenes 2, 3, 8, 10: amber cations and violet anions with pale blue water shells, moving; two lenses merge on mixing; a pair sheds its shells and locks into a small lattice that sinks in its real colour; spectators get grey tags; m2-v15's ion lock reused); **spotting-plate results** (scene 4: on `p03-well-plate-white-tile-v1.png` a coded 3 × 3 block of wells fills drop by drop, each well clear or cloudy in the solid's real colour; a results grid writes beside it); **rules card** (scene 5, from C13 Revision 3, Year 11 wording); **swap cross** (scenes 6, 9, 10, A1, A2: from C13); **token flight** (scene 7: each aqueous formula splits and its ions fly down to the full ionic line; the solid drops unsplit with a lock icon; from C13); **cancel strikes and charge tally** (scene 8); `Countdown` (3 s in-scene, scene 10; 10 s in attempts), `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (as C13 and m3-v02):** cations amber; anions violet; water shells pale blue; precipitates in their real colour (white, bright yellow, rust-brown, pale blue); spectators grey when tagged or struck; equation lines in three rows labelled "molecular", "full ionic", "net ionic"; crossed items red strike.
- **Rules card (Revision 2, brief 182 finding 1).** The full card and the compact card match `chem-m5-c13.md` Revision 3 exactly (root decision m3-4, one shared card): Group 1 "almost always soluble"; sulfates "except Ba²⁺, Sr²⁺, Pb²⁺ (insoluble); Ca²⁺, Ag⁺ (slightly)"; halides "except Ag⁺, Pb²⁺" (footnote "PbCl₂ slightly soluble"); mostly insoluble "carbonates, phosphates, hydroxides, sulfides, unless with Group 1 or NH₄⁺; also soluble: Ba(OH)₂ and Ca, Sr, Ba sulfides; Ca(OH)₂, Sr(OH)₂ slightly". The Year 11 narration keeps its shorter spoken list. The card is labelled "a summary of many experiments, wider than this plate" (brief 182 finding 4: the plate tested no potassium or ammonium salt).
- **Yellow-flame plate canvas (Revision 2, brief 182 finding 6; shared with m3-v04).** Revision 1 asked for a flame twice the blue flame's height on the fixed 2000 × 2000 canvas, which cannot fit (the blue flame is about 581 px from the mouth near y 760; only about 600 px fits above it). Revised request: a taller portrait canvas, 2000 × 2800, with the burner identical in size and drawn at the blue plate's position shifted down by 800 px (mouth near y 1560), so the two plates align by their bottom edges at the same pixel scale; the yellow flame about 1.8 times the blue flame's height (about 1 050 px, tip near y 510), with the 8% top margin (224 px) kept. Code aligns the pair by bottom edge, never by stretching.
- **Board layout (Revision 2):** heading top left; the equation stack (up to three lines) under the heading. Revision 1 kept plates in a column on the left third with one item at a time on the right. Revision 2 stages, each under about 37 s: the lab-waste beaker and AgCl tubes filling the frame (1); the two bottles with large ion lenses (2); the merged lens at full frame with live ion counters (3); the spotting plate at full frame (4); the rules card at full width (5); the swap cross with the BaSO₄ plate (6); the three-line stack at full width (7, 8); the PbI₂ plate large beside its lines (9); the no-precipitate swap (10); the waste beaker and lens (11); the memory card (12).
- **Colour roles (Revision 2, fixed for the whole video):** cations amber; anions violet; water shells pale blue; precipitates in their real colour; spectators grey; equation margins "molecular", "full ionic", "net ionic" slate; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the ion they mark; scope and safety tags grey.
- **Type sizes (Revision 2, 1080p):** the current equation line at least 44 px (48 px); live ion counters about 52 px; rules card rows 36 to 40 px (compact card in attempts at least 30 px); supporting lines 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the ion lens counters (scene 3).** A live readout on the core idea (only the insoluble pair leaves the solution): four counters beside the merged lens (52 px) show the dissolved ions, "Ag⁺ 6", "Cl⁻ 6", "Na⁺ 6", "NO₃⁻ 6"; as Ag⁺ and Cl⁻ shed their shells and lock into the sinking lattice, their counters fall 6 → 0 while "Na⁺" and "NO₃⁻" stay at 6 the whole time, and a "solid AgCl" counter climbs 0 → 6.

Author notes (not learner copy):
(a) Rules detail as `chem-m5-c13.md` author note (a) (science-checked Revision 3): Group 1 has a few poorly soluble lithium salts; sulfates of Ba²⁺, Sr²⁺, Pb²⁺ insoluble, Ca²⁺ and Ag⁺ slightly soluble; PbCl₂ slightly soluble (more in hot water); hydroxides soluble with Group 1 and Ba²⁺ (Ca(OH)₂, Sr(OH)₂ slightly); Ca, Sr and Ba sulfides soluble (hydrolyse). The site lists sulfate exceptions as Ba²⁺, Pb²⁺, Ca²⁺; narration follows the site, the card adds Sr²⁺ and marks Ca²⁺ and Ag⁺ "slightly".
(b) Spotting-plate pairs (illustrative results, real colours): AgNO₃ with NaCl (white AgCl), with Na₂CO₃ (pale yellow Ag₂CO₃), with NaOH (brown Ag₂O); CuSO₄ with NaOH (pale blue Cu(OH)₂), with Na₂CO₃ (blue-green basic copper carbonate), with NaCl (clear); CaCl₂ with Na₂CO₃ (white CaCO₃), with NaOH (slight white cloud, Ca(OH)₂, depends on concentration), with NaCl (clear). Only "cloudy" or "clear" is read in narration; the three pale cases are coded faint. Science check to confirm at about 0.1 mol L⁻¹.
(c) Lead and barium: shown as plates and equations only; no handling or procedure; the site's lead controls (teacher demonstration, gloves, minimum volumes, heavy-metal waste) appear as one grey tag in scene 9.
(d) Lead removal (Revision 2): the context is a concentrated laboratory waste solution, handled by the teacher as heavy-metal waste, not tap water. Real drinking-water control of lead is pipe replacement and corrosion control (NHMRC: protective orthophosphate films), not sulfate and filtration. Check (work/brief182/v03-solubility-checks.json; data sheet Ksp(PbSO₄) = 2.53 × 10⁻⁸; simple concentrations, 25 °C): at an illustrative 10 µg L⁻¹ Pb²⁺ (4.83 × 10⁻⁸ mol L⁻¹) about 0.52 mol L⁻¹ sulfate would be needed just to reach saturation, so the trick only works on concentrated mixtures. Author note only; no Ksp in the video.
(e) PbSO₄ is white; PbI₂ bright yellow; Fe(OH)₃ rust-brown; Cu(OH)₂ pale blue; BaSO₄ white.
(g) Reaction scope (Revision 2, brief 182 finding 3): mixing ionic solutions can also give acid-base, gas-forming or redox reactions (later videos), so the narration says "with salts like these". "Split only the aqueous" applies to these salt equations; strong-acid equations come later.
(f) Pronunciations: "NAGSAG" as "NAG-sag"; "lead" the metal, rhyming with "bed"; "iron three chloride" and "iron three hydroxide" (m1-v20 style); "P b I two" spoken once.

Main question: *How do solubility rules predict a precipitation reaction?*
Entry knowledge: m1-v19, m1-v20, m2-v01, m2-v15, m3-v02.
Stops after: predicting the solid with NAGSAG by checking both products; molecular, full ionic and net ionic equations with spectators; a no-precipitate case; choosing a precipitating reagent. No Ksp, no lattice energy.
Handoff: chem-y11-m3-v04, combustion products.

## Opening frame and final frame

- **Opening frame:** m3-v02's final frame exactly (Decisions).
- **Final frame (m3-v04 opens on it):** two Bunsen burners side by side at the same scale: left `m8-flame-blue-v2.png` tagged "air hole open"; right `y11c-bunsen-yellow-flame-v1.png` (new; fallback in Assets) tagged "air hole closed"; a pen bracket over both "same gas"; an amber chip across them "same fuel, different products?"; small at the top right, the strip "AB + CD → precipitate" ticked beside m3-v02's two ticked strips; the chip "Next: How do oxygen supply and fuel affect combustion products?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: lead you can't see
> Last time, two clear solutions, silver nitrate and sodium chloride, made a white solid. The same trick solves a real lab problem. After an experiment, the waste beaker can hold dissolved lead ions. They're poisonous, and the solution still looks perfectly **clear**. Add the right solution, and the lead comes out as a solid you can filter off. But not every pair of clear solutions makes a **solid**. So how could you know which ones will?

Visual: opens on m3-v02's final frame; the "Next" chip fades and the pattern strips stay small; the AgCl tubes grow at the left. On "perfectly clear" a clear beaker (`m6-beaker-v1.png`) fills the right half with the tag "lab waste: lead nitrate solution" and a lens showing a few amber "Pb²⁺" dots among water (rose hand tag "poisonous, invisible"); grey tag "teacher handles heavy-metal waste". On "makes a solid" two more tubes appear: `m5x-no-ppt-clear-v1.png` (tag "two clear solutions: still clear") beside the white AgCl tube (amber hand tag "which pairs?"). Heading writes: "Precipitation reactions".

### 2. what's really in each bottle
> Start with what's in each bottle. A dissolved ionic compound isn't whole units floating around. It's separate ions, each surrounded by water. Silver nitrate solution is silver ions and nitrate ions. Sodium chloride solution is sodium ions and chloride ions. Mix them, and you have **four kinds of ions** in one tube. With salts like these, the only new thing that can happen is that ions find **new partners**.

Visual: stage change: the two dropper bottles with a large ion lens above each: amber Ag⁺ and violet NO₃⁻; amber Na⁺ and violet Cl⁻; each ion in a pale blue water shell (pale blue hand tag "ions, not whole units"). On "four kinds of ions" the two lenses slide together and merge (slate hand tag "4 kinds of ion"). On "new partners" pen arcs link Ag⁺ to Cl⁻ and Na⁺ to NO₃⁻ (amber hand tags "new pair?"); grey tag "salt solutions like these".

### 3. the precipitate and the spectators
> Silver ions and chloride ions attract each other more strongly than the water can keep them apart, so they lock together into solid silver chloride. A solid that forms when two solutions are mixed is a **precipitate**, and this is a precipitation reaction. Sodium and nitrate ions stay dissolved, exactly as they were. They take no part, so they're called **spectator ions**. They're in the tube, but they're not in the reaction.

Visual: stage change: the merged lens fills the frame with the four live ion counters at the right (simulation; 52 px): "Ag⁺ 6", "Cl⁻ 6", "Na⁺ 6", "NO₃⁻ 6", "solid AgCl 0". Ag⁺ and Cl⁻ shed their shells, lock into a small white lattice and sink (m2-v15's ion lock) while their counters fall to 0 and "solid AgCl" climbs to 6; `m5x-ppt-agcl-white-v1.png` pulses. On "precipitate" gloss chips "precipitate: a solid that forms when two solutions are mixed" and "precipitation reaction". On "spectator ions" Na⁺ and NO₃⁻ keep swimming, their counters still at 6 (grey hand tag "unchanged"), and get grey "spectator" tags; gloss chip "spectator ions: present, unchanged, take no part". A composition card writes: "solid: AgCl" and "still dissolved: Na⁺, NO₃⁻", framed.

### 4. finding the pattern by experiment
> Which pairs lock together was found by experiment, and you can see the pattern on a small scale. Put one drop of each of two solutions into a well of a spotting plate, and record which pairs go cloudy. Wear safety glasses, use tiny volumes, and put the waste in the container your teacher labels. Silver nitrate stains skin, and lead and barium salts are toxic, so those are teacher demonstrations. Now look down the **results**. None of the solids contain sodium or **nitrate**.

Visual: stage change: `p03-well-plate-white-tile-v1.png` fills the frame; a coded 3 × 3 block of wells fills drop by drop (rows "AgNO₃", "CuSO₄", "CaCl₂"; columns "NaCl", "Na₂CO₃", "NaOH"): white, pale yellow, brown; clear, blue-green, pale blue; clear, white, faint white (author note b). A safety strip: `m5x-safety-glasses-v1.png` small, "tiny volumes; waste to the labelled container; AgNO₃ stains skin; Pb²⁺ and Ba²⁺ salts: teacher demonstration". On "results" a results grid writes beside the plate with "cloudy" and "clear". On "potassium or nitrate" a pen ring circles the grid's formulas: every Na⁺ and NO₃⁻ stays in solution (tag "never in the solid").

### 5. the solubility rules (NAGSAG)
> Patterns like that are summed up as the solubility rules. A handy way to remember the soluble groups is **NAGSAG**. Nitrates, ammonium and Group 1 compounds are almost always soluble. Sulfates are soluble, except with barium, lead and **calcium**. Acetates are soluble. And Group 17, the halides chloride, bromide and iodide, are soluble except with **silver and lead**. Everything else, like carbonates and hydroxides, is mostly insoluble, unless it's paired with Group 1 or **ammonium**.

Visual: stage change: the rules card (C13 Revision 3 card) fills the frame, replacing the plate; gloss chips "soluble: dissolves", "insoluble: barely dissolves". On "NAGSAG" the six letters stack down the left; rows write on their words: "N: nitrates (NO₃⁻)", "A: ammonium (NH₄⁺)", "G: Group 1 (Na⁺, K⁺)", bracket "almost always soluble". On "calcium" the S row: "S: sulfates (SO₄²⁻): soluble, except Ba²⁺, Sr²⁺, Pb²⁺ (insoluble); Ca²⁺, Ag⁺ (slightly)". "A: acetates (CH₃COO⁻): soluble". On "silver and lead" the G row: "G: Group 17 halides (Cl⁻, Br⁻, I⁻): soluble, except Ag⁺, Pb²⁺" (footnote "PbCl₂ slightly soluble"). On "Group 1 or ammonium" a separate box: "Mostly insoluble: carbonates, phosphates, hydroxides, sulfides, unless with Group 1 or NH₄⁺. Also soluble: Ba(OH)₂; Ca, Sr, Ba sulfides. Ca(OH)₂, Sr(OH)₂ slightly". Tag: "a summary of many experiments, wider than this plate"; the card matches Year 12 C13 Revision 3; violet and amber hand tags "exceptions" ring the exception lists. Hold about 3 seconds (reading hold).

### 6. the method, and barium sulfate
> So here's the method. List the ions, swap partners, and **check both** new pairs against the rules. Try barium chloride and sodium sulfate. Swapping gives barium sulfate and sodium chloride. Sodium chloride is Group 1, so it's soluble. Barium sulfate is a sulfate with barium, one of the exceptions, so it's the white **precipitate**. Balanced, barium chloride plus sodium sulfate gives barium sulfate solid, plus two sodium chloride, **aqueous**.

Visual: the card shrinks to the corner. Stage change: the swap cross at the right two thirds, `m5x-ppt-baso4-white-v1.png` large at the left (grey tag "teacher demonstration"). Tiles "Ba²⁺ Cl⁻" and "Na⁺ SO₄²⁻"; cations cross over (pen X). On "check both" a tick box appears under each new pair; a chip "checked one product only" fades in and is crossed in red (red hand tag "check both!"). NaCl ticks green ("Group 1: soluble"); on "precipitate" BaSO₄ flags amber ("sulfate with Ba²⁺: insoluble"). On "aqueous" the molecular line writes (48 px): "BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)" (margin "molecular").

### 7. the full ionic equation
> That equation hides what's really in the tube. So write every aqueous ionic compound as its separate ions. On the left, a barium ion, two chloride ions, two sodium ions and a sulfate ion. On the right, sodium chloride splits too, but barium sulfate is a solid, so it stays **whole**. That's the full ionic equation. Never split the precipitate, because in a solid the ions aren't free.

Visual: stage change: the three-line stack at full width. The token flight: each (aq) formula splits and its ions fly down to line 2 (48 px): "Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq)" (margin "full ionic"); gloss chip "full ionic equation: every aqueous ionic compound as separate ions". On "whole" BaSO₄(s) drops straight down unsplit with a lock icon (red hand tag "(s): never split").

### 8. cancel the spectators
> Now find the ions that are exactly the same on both sides: two sodium ions and two chloride ions. They're the spectators, so cross them **out**. What's left is the net ionic equation: barium ion plus sulfate ion gives barium sulfate solid. Check the charges. Plus two and minus two make zero, matching the neutral **solid**. That one line is the only change that actually happened.

Visual: pen links join matching pairs in line 2 (2Na⁺ to 2Na⁺, 2Cl⁻ to 2Cl⁻); on "out" each pair is struck grey on both sides (grey hand tag "spectators"). Line 3 writes (52 px): "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)" (margin "net ionic"), framed in a dark-ink box with a green tick; gloss chip "net ionic equation: only the ions that change". On "the neutral solid" the charge tally writes: "(+2) + (−2) = 0 → 0". The ion lens returns small: Ba²⁺ and SO₄²⁻ lock and sink, grey Na⁺ and Cl⁻ swim on.

### 9. lead iodide: charges set the twos
> Here's one where the charges matter. Mix lead nitrate and potassium iodide. Potassium nitrate is soluble, but lead with a halide is an exception, so lead iodide is a bright yellow **precipitate**. A lead ion is plus two and iodide is minus one, so the formula is P b I **two**. That's why the equation needs two potassium iodides, and why the net ionic equation is lead ion plus two iodide ions gives lead iodide **solid**.

Visual: the stack clears; stage change: `m5x-ppt-pbi2-yellow-v1.png` large at the left. Swap cross "Pb²⁺ NO₃⁻" and "K⁺ I⁻" to "Pb²⁺ I⁻" and "K⁺ NO₃⁻"; KNO₃ ticks; on "precipitate" PbI₂ flags amber and the yellow tube pulses (grey tag "lead salts: toxic, teacher demonstration, heavy-metal waste"). On "P b I two" charge tiles "+2" and two "−1" balance; a chip "PbI" fades in and is crossed in red (red hand tag "charges: two iodides"). Lines write quickly: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)"; "Pb²⁺(aq) + 2NO₃⁻(aq) + 2K⁺(aq) + 2I⁻(aq) → PbI₂(s) + 2K⁺(aq) + 2NO₃⁻(aq)" with 2K⁺ and 2NO₃⁻ struck grey. On "solid" line 3: "Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)", tally "(+2) + 2(−1) = 0".

### 10. prediction: no precipitate (in-scene countdown, 3 seconds)
> Quick prediction. Sodium sulfate and potassium nitrate. Will a solid **form**? Swapping gives sodium nitrate and potassium sulfate, and both are Group 1 compounds, so both are **soluble**. Nothing forms. Every ion is a spectator, so there's no net ionic **equation**. Write no precipitate.

Visual: the swap cross with "Na⁺ SO₄²⁻" and "K⁺ NO₃⁻"; chips "solid" and "no solid". On "solid form" a 3 s `Countdown` ring runs (in-scene; narration resumes after it). On "soluble" both new pairs tick green; `m5x-no-ppt-clear-v1.png` in the left column (label "no precipitate"). On "equation" the lens shows all four ions with grey spectator tags (tag "all still there") and line 3 shows an empty bracket "none: all spectators"; "no precipitate" framed in a dark-ink box with a green tick.

### 11. back to the lead
> Now back to the lead waste. You want a solution whose negative ion makes an insoluble compound with lead, while everything else stays dissolved. Sodium sulfate works. Sodium stays in solution, and lead sulfate **precipitates**, so it can be filtered off. Lead ion plus sulfate ion gives lead sulfate solid. One catch, though. Too much sodium sulfate leaves extra ions in the water, so the amount has to be **controlled**.

Visual: stage change: the waste beaker (`m6-beaker-v1.png`, tag "lab waste: lead nitrate solution") returns large with its Pb²⁺ lens; reagent chip "Na₂SO₄(aq)". Rules card rows light: "sulfate with Pb²⁺: insoluble", "Group 1: soluble". On "precipitates" the lens shows Pb²⁺ and SO₄²⁻ locking into white solid and sinking; Na⁺ grey-tagged; line (48 px) "Pb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)", framed, amber hand tag "filter it off"; grey tag "teacher: heavy-metal waste". On "controlled" a few extra violet SO₄²⁻ and grey Na⁺ dots remain in the lens (amber tag "excess reagent: extra ions left in the water").

### 12. memory aid
> So here's the line to remember. Swap partners, check **both**. Then for the equation, split only the aqueous, and cross out what's the same on both **sides**.

Visual: the swap cross returns small with its X of arrows; on "check both" the first line writes large as a framed card in the handwriting style (dark-ink frame; amber "Swap partners", violet "check both"): "Swap partners, check both." On "sides" the BaSO₄ three-line stack returns small, the split arrows and grey strikes lighting in turn; second line: "Split only (aq). Cross out what's the same on both sides." Condition tags: "rules are a first prediction; never split the solid" and "for salt equations like these".

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Iron three chloride solution is mixed with sodium hydroxide solution. Name the precipitate, and write the net ionic equation. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Solutions of iron(III) chloride and sodium hydroxide are mixed. (a) Name the precipitate that forms. (b) Write the net ionic equation for its formation, including states. (3 marks)" The compact rules card stays visible small in the corner (supplied rules, as in an exam stimulus). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no swap cross, no tube).

### 14. feedback 1 (brief)
> Swap partners: iron three hydroxide and sodium chloride. Sodium chloride is soluble. Hydroxides are mostly insoluble, and iron isn't an exception, so iron three hydroxide forms, a rust-brown solid. Iron is plus three, so it needs three hydroxides: iron three ion plus three hydroxide ions gives iron three hydroxide solid. Writing the product as separate ions again is wrong, because the precipitate is never **split**.

Visual: card shrinks to the top. Swap cross runs quickly; NaCl ticks; Fe(OH)₃ flags amber; `m5x-ppt-feoh3-brown-v1.png` beside it; answer chip "(a) iron(III) hydroxide, Fe(OH)₃(s), rust-brown". Line "Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)", framed in a dark-ink box with a green tick, tally "(+3) + 3(−1) = 0". On "split" a chip "Fe³⁺(aq) + 3OH⁻(aq) → Fe³⁺(aq) + 3OH⁻(aq)" fades in and is crossed in red (red hand tag "keep the solid whole"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A water sample contains dissolved copper ions, along with sodium and nitrate ions. Which solution would remove the copper as a precipitate: sodium nitrate, sodium hydroxide or potassium chloride? Justify your choice. Pause here to answer.

Visual: `QuestionCard`: "A water sample contains Cu²⁺(aq), Na⁺(aq) and NO₃⁻(aq) ions. A technician can add one of these solutions: sodium nitrate, sodium hydroxide or potassium chloride. Identify the solution that would remove copper ions as a precipitate, and justify your choice using solubility rules. (3 marks)" The compact rules card stays small in the corner. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 16. feedback 2 (brief)
> Sodium hydroxide. Hydroxides are mostly insoluble and copper isn't an exception, so pale blue copper hydroxide forms, while sodium stays dissolved. Sodium nitrate only adds soluble ions. Potassium chloride is the trap: chlorides are soluble except with silver and lead, so copper chloride stays **dissolved**.

Visual: card shrinks. Three option tiles: "NaNO₃" (grey, "all soluble: no solid"), "NaOH" (ticked and framed; `m5x-ppt-cuoh2-blue-v1.png` small; line "Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)"), and on "copper chloride stays dissolved" "KCl" fades in with "CuCl₂ precipitates" and is crossed in red (red hand tag "chlorides: soluble except Ag⁺, Pb²⁺"). Hold about 1 second.

### 17. conclusion and handoff
> So when two salt solutions like these mix, the ions swap partners, and the rules tell you whether a new pair stays dissolved or comes out as a solid. So far, our products have stayed in the tube. When a fuel burns, the products leave as gases you can't see. Here's the same burner gas burning two ways: a blue flame, and a yellow, smoky one. Same fuel, so are the products the same? How do oxygen supply and fuel affect combustion **products**?

Visual: the swap cross and the three-line stack shrink into the strip "AB + CD → precipitate", which ticks beside m3-v02's two strips at the top right. On "When a fuel burns" the final frame builds: `m8-flame-blue-v2.png` (tag "air hole open") and `y11c-bunsen-yellow-flame-v1.png` (tag "air hole closed") slide in at the same scale; on "same burner gas" a pen bracket "same gas" spans them; on "Same fuel" the amber chip "same fuel, different products?" writes across them. On "combustion products" the chip "Next: How do oxygen supply and fuel affect combustion products?" writes. Hold about 2 seconds. This is the final frame (m3-v04 opens on it).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Salt solutions: ions swap partners; an insoluble pair precipitates.
2. Soluble (NAGSAG): nitrates, ammonium, Group 1, acetates; sulfates except Ba²⁺, Sr²⁺, Pb²⁺ (Ca²⁺, Ag⁺ slightly); halides except Ag⁺, Pb²⁺.
3. Mostly insoluble: carbonates, phosphates, hydroxides, sulfides, unless with Group 1 or NH₄⁺ (also soluble: Ba(OH)₂; Ca, Sr, Ba sulfides).
4. Full ionic: split only (aq) ionic compounds, never the solid.
5. Net ionic: cross out spectators, e.g. Ba²⁺ + SO₄²⁻ → BaSO₄(s).

Memory aid (framed card, on the notes screen): *Swap partners, check both. Split only the aqueous; cross out what's the same on both sides.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why mixing can only make new partners (2); why a solid forms (3); why some ions are spectators (3, 8); where the rules come from (4); why the solid is never split (7, A1); why the formula and coefficients follow charges (9); why a reagent works or fails (11, A2).
- **Misconceptions addressed:** every ionic compound dissolves (1, 10); check one product only (6, crossed); split the precipitate (7, A1 crossed); PbI (9, crossed); no precipitate means nothing is there (10); a chloride removes any metal (A2 crossed).
- **One idea at a time:** ions in solution (2), precipitate and spectators (3), evidence (4), rules (5), method (6), full ionic (7), net ionic (8), charges (9), no precipitate (10), use (11).
- **Video makes it easier:** two ion lenses merge and one pair locks and sinks while spectators swim on (2, 3, 8); the spotting plate fills well by well (4); cations cross in the swap cross (6, 9, 10); formulas split and fly down, the solid drops whole with a lock (7); matching ions are linked and struck (8).
- **Response opportunity:** one 3 s prediction (10); two unseen HSC-style tasks with the rules supplied as in an exam stimulus, 10 s each, nothing answer-bearing. Feedback about 31 s and 23 s.
- **Avoided double teaching:** charges and formulae (m1-v19), names (m1-v20), balancing and states (m2-v01), the AgCl ion lock (m2-v15), the patterns (m3-v02).
- **Syllabus coverage:** `C3-IQ1-03` "predict and identify the products" for "precipitation" (2 to 11, with the spotting-plate investigation in 4); `C3-IQ1-05` "construct balanced equations" (6 to 9, 11, A1, A2), including ionic equations.
- **Out of scope by design:** Ksp, lattice and hydration energies, filtrate composition, mercury sulfide treatment, the barium meal.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) iron(III) hydroxide, Fe(OH)₃ (1 mark), because hydroxides are mostly insoluble and Fe³⁺ is not an exception, while NaCl is soluble. (b) Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s) (1 mark for species and balance, 1 mark for states). Classic mistake (crossed): the product split into ions.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: sodium hydroxide (1 mark). Cu²⁺ with OH⁻ forms copper(II) hydroxide, which is insoluble because hydroxides are mostly insoluble unless with Group 1, NH₄⁺ (or Ba²⁺) (1 mark); Na⁺ stays dissolved, and NaNO₃ or KCl would give only soluble combinations (nitrates soluble; chlorides soluble except Ag⁺ and Pb²⁺) (1 mark). Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s). Classic mistake (crossed): potassium chloride.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook recall | AgNO₃ + NaCl → AgCl(s) + NaNO₃ (1 : 1) | opening, 1 to 3 |
| WE1 | BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl; full ionic as in scene 7; Ba²⁺ + SO₄²⁻ → BaSO₄; (+2) + (−2) = 0 | 6 to 8 |
| WE2 | Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃; Pb²⁺ + 2I⁻ → PbI₂; (+2) + 2(−1) = 0 | 9 |
| No precipitate | Na₂SO₄ + KNO₃: NaNO₃ and K₂SO₄ both soluble | 10 |
| Lead removal | Pb²⁺ + SO₄²⁻ → PbSO₄ (Pb(NO₃)₂ + Na₂SO₄ → PbSO₄ + 2NaNO₃ as the check) | 11 |
| A1 | FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl; Fe³⁺ + 3OH⁻ → Fe(OH)₃; (+3) + 3(−1) = 0 | 13, 14 |
| A2 | Cu²⁺ + 2OH⁻ → Cu(OH)₂ | 15, 16 |
| Spotting plate | AgCl, Ag₂CO₃, Ag₂O; Cu(OH)₂, basic copper carbonate; CaCO₃, Ca(OH)₂ (slight) | 4 |

## Numbers to verify (all values, repeated for Codex)

Checked by an atom-and-charge counting script (5 November); Codex to re-check.

- BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl; the full ionic line (1 Ba, 2 Cl, 2 Na, 1 S, 4 O; charge 0 each side); Ba²⁺ + SO₄²⁻ → BaSO₄.
- Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃; its full ionic line; Pb²⁺ + 2I⁻ → PbI₂.
- Pb²⁺ + SO₄²⁻ → PbSO₄; FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl; Fe³⁺ + 3OH⁻ → Fe(OH)₃; Cu(NO₃)₂ + 2NaOH → Cu(OH)₂ + 2NaNO₃; Cu²⁺ + 2OH⁻ → Cu(OH)₂; CaCl₂ + Na₂CO₃ → CaCO₃ + 2NaCl; CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄. All balanced in atoms and charge.

## Memory aid check

- **"Swap partners, check both. Split only the aqueous; cross out what's the same on both sides."** From Year 12 `chem-m5-c13.md` (science-checked), shared deliberately so the same line serves both years. Meaning: list the two possible new pairs and test each against the rules; then write ions only for dissolved ionic compounds and cancel identical ions. Assumptions checked: "aqueous" means a dissolved ionic compound (a dissolved covalent compound such as sugar is not split; not met here); "the same on both sides" means same formula, charge and state (site misconception 3). It helps a new case: A1 and A2, and m3-v05's neutralisation net ionic equation.
- **NAGSAG** (site and Module 5 bank mnemonic): the letters carry the soluble groups; exceptions sit on the card, not in the acronym.
- **Considered, not used:** "spectators are fans in the stand" (a people image; the plain meaning is clearer).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,280 characters**, 18 scenes (Revision 1: 6,263). Revision 2 adds about 2 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 471 s; add about 6 s of settling (lenses in 2, 3; the spotting plate in 4; the token flight in 7), 3 s for the in-scene prediction, 3 s reading hold on the rules card, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 562 s** (Revision 1: about 559 s).

## Scene list and build ids

Lesson key `c-y11-m3-v03` (route chem-y11-m3-v03; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v03`.

In order (18 scene headings, all `### N.`): hook-lead, ions-in-bottles, precipitate-spectators, spotting-plate, nagsag, method-baso4, full-ionic, net-ionic, lead-iodide, prediction-no-ppt, lead-removal, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); prediction-no-ppt is `explain` with an in-scene 3 s countdown (kit build item, root decision m2-8). Transitions: m3-v02's final frame into scene 1 by camera continue; 1 to 2 board clear (bottles stay); 2 to 3 camera continue (the lens stays); 3 to 4 camera continue (the lens shrinks, the plate slides in); 4 to 5 cross-fade (results grid into the rules card); 5 to 6 camera continue (card shrinks to the corner); 6 to 7 to 8 camera continue (the equation stack grows down); 8 to 9 board clear of the stack; 9 to 10 to 11 camera continue; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: rules card (3 s), prediction (3 s in-scene), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v03-learning-review.md`, `checks/c-y11-m3-v03-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 250 px; scaled uniformly only, never stretched):
- `public/assets/chemistry/p03-dropper-bottle-v1.png` (twice), `m5x-no-ppt-clear-v1.png`, `m5x-ppt-agcl-white-v1.png`: opening frame, scenes 1 to 3.
- `public/assets/chemistry/m5x-ppt-baso4-white-v1.png`, `m5x-ppt-pbi2-yellow-v1.png`, `m5x-ppt-feoh3-brown-v1.png`, `m5x-ppt-cuoh2-blue-v1.png` (2000 × 2000, the aligned m5x rack set; the precipitates read in their real colours at 250 px): scenes 6, 9, 10, 14, 16.
- `public/assets/chemistry/p03-well-plate-white-tile-v1.png` (2048 × 1365): scene 4; Codex reports the centres of a 3 × 3 block of wells in plate pixels for the coded fills.
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scene 4 strip.
- `public/assets/chemistry/m8-flame-blue-v2.png` (2000 × 2000): scene 17 and the final frame.
- Revision 2: `m6-beaker-v1.png` (existing clear beaker, used in m3-v01) shows the lab-waste lead solution in scenes 1 and 11; `y11c-sample-bottle-clear-v1.png` is no longer used here (the tap-water context is withdrawn).
- **Inspected, not used:** `c13-pbi2-tube-clear-v1.png` and `c13-pbi2-tube-precipitate-v1.png` (wire-stand tubes; they never sit beside the m5x rack set, so the m5x yellow tube is used); `m5x-barium-meal-glass-v1.png` (a people context, Year 12 only); `m5x-gloves-v1.png` (hand-shaped; glasses carry the safety strip); `m8-river-sampling-bottle-v1.png` (pole sampler reads as river fieldwork, not tap water).

Need (new plates, Codex):
1. `y11c-bunsen-yellow-flame-v1.png`: scene 17 and the final frame; also m3-v04 throughout. Essential (the handoff's contrast and m3-v04's central observation). Aligned with `m8-flame-blue-v2.png`.

Coded: ion lenses and shells, lattice lock, spotting-plate well fills and results grid, rules card, swap cross, token flight, strikes, charge tallies, composition card, reagent chips, option tiles, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v03; plate shared with v04)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m3-v03.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, at least 8 per cent clear margin, no text, labels, numbers, people, hands, faces, backdrop or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-bunsen-yellow-flame-v1.png` (Revision 2, brief 182 finding 6: 2000 × 2800 px portrait, the width and pixel scale of `m8-flame-blue-v2.png`, with the burner drawn at that plate's position shifted down by 800 px, mouth near y 1560, so the pair aligns by bottom edges): **edit of that plate**, identical in burner body, base, gas tap and scale, except: the air-hole collar is turned so the air hole is **closed** (no dark opening visible), and the flame is a tall, wavy, luminous yellow-orange flame (the "safety flame"), about 1.8 times the height of the blue flame (about 1 050 px, tip near y 510, top margin at least 224 px), with a soft ragged top and a faint wisp of grey smoke above it; no blue inner cone. If the blue plate's collar shows an open hole, Codex reports it so m3-v04 can point at it.

Report the overlay check against `m8-flame-blue-v2.png` (burner outlines identical) on the paper and dark board backgrounds at about 300 px wide, and the plate-pixel position of the air-hole collar on both plates. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m3-v03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every equation under "Numbers to verify" (atoms and charge), and every equation in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson03.sa.html` (NAGSAG and the "everything else" band; the three levels with Pb(NO₃)₂ + KI; worked examples 1 and 2; drill 3; Q2; the water-treatment card and its limitation; the lead safety box).
3. Confirm the rules card matches `chem-m5-c13.md` Revision 3 content where the two overlap, with the Year 11 differences listed in Decisions.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m3-v02's final frame, and send the final frame to the m3-v04 designer.

## YouTube metadata (draft)

Title: Precipitation Reactions: Solubility Rules and Net Ionic Equations | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Two clear solutions, one solid. When salt solutions like these mix, the ions swap partners, and the solubility rules (NAGSAG) tell you whether a new pair stays dissolved or comes out as a precipitate. Learn the method (swap partners, check both), write molecular, full ionic and net ionic equations, spot the spectator ions, and use the same reasoning to pull dissolved lead out of water. Includes a microscale spotting-plate investigation and two exam-style questions.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations to predict and identify the products of a range of reactions, for example: synthesis, decomposition, combustion, precipitation, acid/base reactions, acid/carbonate reactions (ACSCH042, ACSCH080)"
"construct balanced equations to represent chemical reactions"

Previous: How can we predict and balance synthesis and decomposition products? Next: How do oxygen supply and fuel affect combustion products?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Overlap with Year 12 C13 (root).** This video and `chem-m5-c13.md` teach the same rules and equation levels for different years. This design follows the Year 11 site cases (BaCl₂ and Na₂SO₄, lead in water) and shares C13's components and memory aid. Root to decide whether C13 later adds a "you met this in Year 11" line; no change proposed here.
- **2. Spotting-plate results (science check).** Confirm author note b's colours at school concentrations, especially Ca(OH)₂ (faint) and basic copper carbonate (blue-green).
- **3. Lead-removal framing (science check).** Scene 11 uses the site's sulfate example; author note d. Confirm "the same trick" does not overstate municipal practice.

## Review notes

- Revision 1 was reviewed by brief 182 (0 blockers, 5 should fix, 1 optional, including the burner geometry addendum); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (is the rules card readable at the 3 s hold; does scene 10's in-scene countdown feel natural), then the science check and Codex error check.
- Checker output (5 November): narration 6,263 characters; per scene (1 to 18): 434, 379, 421, 482, 473, 435, 381, 373, 411, 277, 407, 150, 158, 415, 248, 305, 439, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 6,280 characters (sum of scene strings); per scene (1 to 18): 432, 402, 421, 471, 473, 435, 381, 373, 411, 277, 413, 150, 158, 415, 248, 305, 440, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 182 findings (`checks/c-y11-m3-v03-learning-review.md`, `checks/c-y11-m3-v03-science-check.md`):
1. Shared C13 exceptions (should fix): the scene 5 rules card and the compact card now match `chem-m5-c13.md` Revision 3 (Sr²⁺ with the insoluble sulfates, Ca²⁺ and Ag⁺ slightly; Ba(OH)₂ and the Ca, Sr and Ba sulfides as soluble exceptions; Ca(OH)₂ and Sr(OH)₂ slightly). Key notes 2 and 3 are a faithful compact version. The spoken Year 11 list is unchanged.
2. Drinking-water context (should fix): the hook and scene 11 now use a laboratory waste beaker of lead nitrate solution, handled by the teacher as heavy-metal waste (`m6-beaker-v1.png`), not tap water. Scene 1 says "The same trick solves a real lab problem. After an experiment, the waste beaker can hold dissolved lead ions"; scene 11 says "back to the lead waste". Author note (d) keeps the Ksp check (about 0.52 mol L⁻¹ sulfate at 10 µg L⁻¹ Pb²⁺) and site note 4 logs the correction.
3. Limits of the reaction pattern (should fix): scene 2 says "With salts like these, the only new thing that can happen is that ions find new partners"; scene 17 says "when two salt solutions like these mix, the ions swap partners"; the YouTube description matches; the memory card carries a grey tag "for salt equations like these"; author note (g) records the scope.
4. Unmeasured ions (optional, applied): scene 4 says "None of the solids contain sodium or nitrate" (potassium removed), and the rules card is tagged "a summary of many experiments, wider than this plate".
5. Metadata length (should fix): the title is now "Precipitation Reactions: Solubility Rules and Net Ionic Equations | Year 11 Chemistry Module 3" (94 characters).
6. Asset canvas geometry (should fix): the yellow-flame request now uses a 2000 × 2800 portrait canvas at the blue plate's pixel scale, burner shifted down 800 px, flame about 1.8 times the blue flame's height, aligned by bottom edges (Decisions "Yellow-flame plate canvas" and the Codex asset brief). m3-v04 uses the same plate and is updated to match.

Visual upgrade (scene-level visual changes; teaching logic unchanged):
- Scene 1: the waste beaker and AgCl tubes fill the frame in the first 20 s.
- Stage changes in every teaching scene (large ion lenses, full-frame merged lens, full-frame spotting plate, full-width rules card, swap cross with a large BaSO₄ plate, full-width equation stack, large PbI₂ plate, waste beaker); no stage longer than about 37 s.
- Live readout: the ion lens counters (scene 3) show Ag⁺ and Cl⁻ falling to 0 while Na⁺ and NO₃⁻ stay at 6 and the solid AgCl count climbs.
- Framed answers with a green tick: the composition card (3), Ba²⁺ + SO₄²⁻ → BaSO₄ (8), "no precipitate" (10), Pb²⁺ + SO₄²⁻ → PbSO₄ (11), Fe³⁺ + 3OH⁻ → Fe(OH)₃ (14), NaOH (16). Crossed slips carry red hand tags ("checked one product only", PbI, the split precipitate, KCl).
- Hand tags and pen marks in role colours in every teaching scene (1 to 12).
- Memory line as a framed card (scene 12 and the notes screen); key notes cut to five bullets.
- Decisions gain "Rules card", "Yellow-flame plate canvas", "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Plate request changed: `y11c-bunsen-yellow-flame-v1.png` canvas revised (finding 6); no other new plates.

Counts: 6,280 characters (Revision 1: 6,263); about 559 to about 562 s.
