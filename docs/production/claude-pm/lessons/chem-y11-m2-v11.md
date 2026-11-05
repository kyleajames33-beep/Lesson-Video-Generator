# Year 11 Chemistry M2 V11: Concentration units. How do we compare molarity with mass concentration and percentage units? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,710 characters, 14 scenes, about 520 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eleventh Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 45, between `chem-y11-m2-v10` and `chem-y11-m2-v12` (another designer, in parallel). Templates: `chem-y11-m2-v10.md` (same series and board), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry calculation conventions `chem-m5-g02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v11` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Convert between specified concentration units using a named solute and the given mass/volume basis. Stop before reaction back-calculations"; next handoff: "How do we prepare a standard solution accurately?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson08.sa.html` (SHA256 `49dfb2a457f58b4b37ea782373ca1b979bdd9779f79a8ba3e2729957413428d1`, recomputed, matches the route), sections `l08-units-title` and `l08-worked-title`. Also used from `lesson06.sa.html` (read for m2-v10): its g L⁻¹ to mol L⁻¹ card and trap 3. Used: the unit ladder (g L⁻¹ ÷ MM → mol L⁻¹; mg L⁻¹ ÷ 1000 → g L⁻¹; ppm ≈ mg L⁻¹ for dilute aqueous solutions; % w/v = g per 100 mL, × 10 → g L⁻¹); the key-term caution that ppm ≈ mg L⁻¹ "relies on the density-≈-1 assumption"; the 0.9% saline context (0.154 mol L⁻¹); worked example 3's nitrate context and its guideline (50 mg L⁻¹, Australian Drinking Water Guidelines); trap 3 ("not recognising g L⁻¹ as a concentration"). Not used: percentage purity (worked examples 1 and 2, traps 1 and 2): purity is not a concentration unit, and the route's learner question and stop are about units (open decision 1); the paracetamol syrup card (a suspension, site note 1); the pool-chlorine and seawater cards.

Owner rules applied: as `chem-y11-m2-v10.md` (one learner question; no people, hands or faces; apparatus as painted plates; particles, formulae, labels and amounts coded; short task strip, equation strip, grouped givens with units, one reasoning stage at a time; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C2-IQ3-01`: "conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
- `C2-IQ3-02`: "manipulate variables and solve problems to calculate concentration, mass or volume using:"
  - "c = n/V  (molarity formula) (ACSCH063)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v10's final frame (beaker, "saline: sodium chloride 0.9% (w/v)" against "sodium chloride solution: 0.154 mol L⁻¹", "more, less or the same?"). Teaches: one solution described by different units; why each unit exists (counting particles for reactions; weighing; labels; trace amounts); mass concentration g L⁻¹ and its link to mol L⁻¹ through molar mass, with the units check; % (w/v) as grams per 100 mL of solution, × 10 to g L⁻¹, and the need to read the stated basis; mg L⁻¹ and ppm, with the dilute-water assumption; the conversion ladder; nitrate in drinking water against a guideline; determining a concentration by evaporating a measured volume to dryness (`C2-IQ3-01`), and its assumptions; converting in the reverse direction with a size check. Not taught: purity (open decision 1); reaction back-calculations (route stop); standard solutions (m2-v12, the handoff); dilution (m2-v13); % w/w and % v/v beyond naming them as other bases.

## Decisions

- **Learner question (route wording kept).** "How do we compare molarity with mass concentration and percentage units?" The answer, in order: convert each to one unit and compare (1, 2); g L⁻¹ ↔ mol L⁻¹ by molar mass, because a litre's mass of solute becomes moles (3); % w/v ↔ g L⁻¹ by 10, because a litre is ten hundred-millilitre lots (4); mg L⁻¹ ↔ g L⁻¹ by 1000, and ppm ≈ mg L⁻¹ only in dilute water (5); the ladder (6); a practical gives g L⁻¹ directly (7); the reverse, with a size check (8).
- **Opening frame (equals `chem-y11-m2-v10.md`'s final frame, same designer).** As described there; the "Next" chip fades as scene 1 starts.
- **Hook (3 s prediction, scene 1).** A third label joins: "sodium chloride solution: 9.0 g L⁻¹". Which of the three is most concentrated? All the same (0.9% w/v = 9.0 g L⁻¹ = 0.154 mol L⁻¹). The surprise shows why comparing units matters.
- **Why several units (scene 2).** Moles per litre counts particles (what reactions need, m2-v06); grams per litre and percentages say how much to weigh and suit labels; mg L⁻¹ and ppm suit trace amounts. One sentence each, no list stacking.
- **Ions (scene 3).** Sodium chloride in solution drawn as separate Na⁺ and Cl⁻ ions (HSC colours: Na grey-violet, Cl yellow-green), a step on from m2-v10's formula units; "0.154 mol of NaCl" means 0.154 mol of each ion (said only on screen, grey tag).
- **% (w/v) basis (scene 4; route "given mass/volume basis").** "w/v" means grams of solute per 100 mL of solution. Percentages by mass (w/w) and by volume (v/v) exist and are not interchangeable; named on screen, not converted (author note d).
- **ppm (scene 5).** Parts per million by mass: 1 g of solute per 10⁶ g of solution. In a dilute aqueous solution, 1 L has a mass of about 1000 g = 10⁶ mg, so 1 ppm ≈ 1 mg L⁻¹. The assumption is spoken (necessary condition: it fails for concentrated or non-aqueous solutions).
- **Nitrate (scene 6; site worked example 3's context).** Guideline 50 mg L⁻¹ (Australian Drinking Water Guidelines, as nitrate; site cites NHMRC 2011, updated 2022) → 0.0500 g L⁻¹ ÷ 62.01 = 8.06 × 10⁻⁴ mol L⁻¹. Science check to confirm the current guideline value and wording (author note e).
- **Practical (scene 7; `C2-IQ3-01`).** Evaporating a measured 25.0 mL of salt solution to dryness: 0.225 g → 9.00 g L⁻¹ → 0.900% (w/v) → 0.154 mol L⁻¹. Assumptions (one solute; all water removed; no spitting) spoken; heat gently and to constant mass on screen (ws-v02's method recalled). Uses the Module 1 separation plates.
- **Reverse and size check (scene 8).** 0.250 mol L⁻¹ glucose × 180.16 = 45.0 g L⁻¹ → 4.50% (w/v). The check: one mole of glucose is about 180 g, so the g L⁻¹ number must be bigger than the mol L⁻¹ number (direction check for × or ÷ MM).
- **Atomic masses.** HSC data-sheet values (H 1.008, C 12.01, N 14.01, O 16.00, Na 22.99, Cl 35.45, Cu 63.55).
- **Memory aid:** "Percent times ten is grams per litre; grams per litre over molar mass is moles per litre." (see "Memory aid check").
- **Attempts (original, HSC style).** A1: 3.0% (w/v) hydrogen peroxide antiseptic → 30 g L⁻¹ → ÷ 34.02 → 0.88 mol L⁻¹. Crossed: "0.088 mol L⁻¹ (skipped × 10)". A2: copper ions in tap water 3.2 mg L⁻¹ against the Australian health guideline 2 mg L⁻¹; ppm ≈ 3.2; 3.2 × 10⁻³ g L⁻¹ ÷ 63.55 = 5.0 × 10⁻⁵ mol L⁻¹; exceeds the guideline. Crossed: "0.050 mol L⁻¹ (mg not changed to g)". Science check to confirm the copper guideline (author note g).
- **Mistake scene:** none separate. "Different numbers mean different strengths" (1); "% means per litre" (4, A1); "ppm always equals mg L⁻¹" (5); "multiply by MM to get moles" (8, direction check); "mg used as g" (A2).
- **Handoff (route next: `chem-y11-m2-v12`, "How do we prepare a standard solution accurately?").** Scene 13: to use a solution in a reaction we need its concentration known exactly; 250.0 mL of sodium carbonate solution at exactly 0.100 mol L⁻¹: what to weigh, and how to get exactly that volume? The mass is not calculated here (2.650 g; author note j), so m2-v12 owns the method. Final frame described exactly below for the m2-v12 designer.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Context card "Paracetamol Syrup: 250 mg per 5 mL ... ≈ 0.332 mol L⁻¹ (MM = 151.16 g mol⁻¹)". 50.0 g L⁻¹ ÷ 151.16 = 0.331 mol L⁻¹. Also, children's paracetamol "suspension" holds undissolved drug, so a molar concentration of a solution is misleading. Suggest "≈ 0.331 mol of paracetamol per litre of suspension (not all dissolved)" or replace with a true solution.
  2. Short answer Q4 model answer: "They likely forgot that each Na₂CO₃ yields 2 Na⁺ ... This error doubled their calculated purity." With that error, 0.0480 × 105.988 ÷ 5.30 × 100 = 96.0%, not the stated 96.2%. Suggest changing the student's claim to 96.0% so the diagnosis fits.
  3. Drill 2 (Scenario B): "Need 2.00 L of 0.500 mol L⁻¹ CaCO₃". Calcium carbonate is practically insoluble in water (about 0.013 g L⁻¹), so this solution cannot be made. Suggest sodium carbonate (Na₂CO₃, 105.99 g mol⁻¹) or another soluble salt, with the numbers recalculated.
  4. Drills 1 and 4 and the spot-the-error item say "dissolved in 500 mL of water" (or "250 mL of water") while computing c with that volume. Lesson 6 trap 2 teaches that V is the volume of solution. Suggest "made up to 500 mL of solution".
  5. Context card "Seawater ... ≈ 0.60 mol L⁻¹ NaCl". That figure treats all 35 g kg⁻¹ of dissolved salts as NaCl; seawater is about 0.47 mol L⁻¹ Na⁺ and 0.55 mol L⁻¹ Cl⁻. Suggest "≈ 0.6 mol L⁻¹ if all the salt were NaCl" or the ion values.
  - Checked and correct: the unit rules; worked examples 1 to 3 (0.240 mol L⁻¹; 2.11 g; 3.23 × 10⁻⁴ mol L⁻¹); drills 3 to 5 (8.06 × 10⁻⁴; 0.900 mol L⁻¹; 9.0 g L⁻¹, 0.154 mol L⁻¹); Q1 (18.03 g, 0.184 mol); Q2 (7.05 × 10⁻³ mol L⁻¹; 1.25 × 10⁵ kg); Q3 (2.338 g, 93.5%); Q4's 48.0%; Q5 (3.40 kg; 179 mol; 89.5 mol; 6.63 kg); the warm-up lead conversion (1.2 × 10⁻⁷ and 4.8 × 10⁻⁸ mol L⁻¹); pool chlorine (1.4 to 4.2 × 10⁻⁵ mol L⁻¹ as Cl₂).
- **Cause chain taught, in order:** (1) each unit answers a different practical question, so one solution has many numbers (2); (2) a litre's grams become moles through molar mass (3); (3) a litre is ten 100 mL portions, so × 10 (4); (4) a gram is 1000 mg, and a litre of dilute water is about a million milligrams, so ppm ≈ mg L⁻¹ only then (5); (5) chaining the steps compares any two units (6); (6) weighing the solute left from a measured volume gives g L⁻¹ directly (7); (7) a mole weighs more than one gram for most solutes, so g L⁻¹ is the bigger number (8).
- **Entry knowledge:** m2-v03 (molar mass); m2-v10 (c = n ÷ V, litres, volume of solution); m1-v03 (evaporation to dryness, the separation plates); ws-v02 (constant mass).
- **Learner-visible vocabulary (plain meaning at first use):** molarity (concentration in mol L⁻¹, recalled, 2); mass concentration (grams of solute per litre of solution, 3); % (w/v) (grams of solute per 100 mL of solution, 4); parts per million (grams of solute per million grams of solution, 5); guideline (the maximum recommended in drinking water, 6).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **label cards** (three label cards on the beaker; a "=" sign forms between them in scene 2); **litre box** (scene 3: a 1 L outline with ions; a 9.0 g chip turns into 0.154 mol through a "÷ 58.44" gate); **hundred-millilitre stack** (scene 4: ten 100 mL tiles fill the 1 L box, each with "0.9 g"); **million grid** (scene 5: a 1 L box labelled "about 1000 g = 1 000 000 mg", one mg highlighted); **conversion ladder** (`UnitLadder`: rungs "% (w/v)", "g L⁻¹", "mg L⁻¹ ≈ ppm", "mol L⁻¹", with arrows "× 10", "× 1000", "÷ MM" up and their inverses down; the current step's arrow lights); **calculation layout** (task strip, equation strip, grouped givens with units, rows one at a time); **evaporation sequence** (scene 7: pipette, weighed basin, hotplate, dry salt, balance readouts); **size check** (scene 8: two bars "mol L⁻¹" and "g L⁻¹", the second about 180 times longer, broken axis); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v10):** masses amber; moles teal; volumes navy; concentrations violet; percentages rose-violet; givens navy; guideline values gold; earlier rows dimmed; crossed items red strike.
- **Board layout (constant):** heading top left; beaker or apparatus at the left; ladder small at the top right from scene 6; givens and rows at the right.

Author notes (not learner copy):
(a) Saline: 0.9 g per 100 mL = 9.0 g L⁻¹; NaCl 22.99 + 35.45 = 58.44; 9.0 ÷ 58.44 = 0.1540 mol L⁻¹. 0.154 × 58.44 = 9.00 g L⁻¹.
(b) "One litre of saline holds 9.0 g": per litre of solution, by definition of g L⁻¹.
(c) Units check: (g L⁻¹) ÷ (g mol⁻¹) = mol L⁻¹.
(d) % (w/v) = g solute per 100 mL solution; % (w/w) = g solute per 100 g solution; % (v/v) = mL solute per 100 mL solution. Converting w/w to w/v needs the density; not taught.
(e) Nitrate: NO₃⁻ = 14.01 + 3(16.00) = 62.01; 50 mg L⁻¹ = 0.0500 g L⁻¹; ÷ 62.01 = 8.063 × 10⁻⁴ mol L⁻¹. ADWG health guideline for nitrate: 50 mg L⁻¹ (as nitrate) for all ages, with a note on infants under three months at above 50 mg L⁻¹; science check to confirm the current statement and that it is spoken as "the Australian guideline limit". The site's worked example 3 uses the same figure.
(f) Evaporation: 0.225 g ÷ 0.0250 L = 9.00 g L⁻¹; 0.225 g per 25.0 mL = 0.900 g per 100 mL = 0.900% (w/v); 9.00 ÷ 58.44 = 0.154 mol L⁻¹. Illustrative readings (0.001 g balance needed for 0.225 g; the course balance reads 0.01 g, which would give 0.23 g and a ±4% reading uncertainty; the card shows a grey tag "analytical balance, 0.001 g"). Basin 45.318 g; basin + salt 45.543 g. Heat gently near dryness (salt spits), then to constant mass.
(g) A1: H₂O₂ = 2(1.008) + 2(16.00) = 34.016 → 34.02; 3.0% (w/v) = 30 g L⁻¹; 30 ÷ 34.02 = 0.8819 → 0.88 mol L⁻¹ (two significant figures from 3.0%). Slip: 3.0 ÷ 34.02 = 0.088. A2: Cu 63.55; 3.2 mg L⁻¹ = 3.2 × 10⁻³ g L⁻¹; ÷ 63.55 = 5.035 × 10⁻⁵ → 5.0 × 10⁻⁵ mol L⁻¹; 3.2 ppm (dilute). Slip 3.2 ÷ 63.55 = 0.050 mol L⁻¹ (1000 × too big). ADWG health guideline for copper: 2 mg L⁻¹ (aesthetic 1 mg L⁻¹); science check to confirm.
(h) Glucose C₆H₁₂O₆ = 6(12.01) + 12(1.008) + 6(16.00) = 180.156 → 180.16; 0.250 × 180.16 = 45.04 → 45.0 g L⁻¹; 4.50% (w/v).
(i) Ladder check: 0.9% × 10 = 9.0 g L⁻¹ × 1000 = 9000 mg L⁻¹ (about 9000 ppm, a dilute-enough solution for the approximation to within about 0.6%, the solution's density being about 1.005 g mL⁻¹; not said).
(j) Handoff (not spoken): Na₂CO₃ = 2(22.99) + 12.01 + 48.00 = 105.99; n = 0.100 × 0.2500 = 0.0250 mol; m = 0.0250 × 105.99 = 2.650 g. Sodium carbonate is a common school primary standard (anhydrous, dried); the m2-v12 designer may choose differently (open decision 3).
(k) Pronunciations: "zero point nine percent weight per volume"; "parts per million"; "N O three minus" not spoken (the word "nitrate" is used); "eight point zero six times ten to the minus four".

Main question: *How do we compare molarity with mass concentration and percentage units?*
Entry knowledge: m2-v03, m2-v10; m1-v03; ws-v02.
Stops after: g L⁻¹, % (w/v), mg L⁻¹, ppm and mol L⁻¹ for a named solute, each conversion with its reason and basis; a practical determination by evaporation; the reverse with a size check. No purity, no reaction back-calculations, no standard solution technique.
Handoff: chem-y11-m2-v12, preparing a standard solution accurately.

## Opening frame and final frame

- **Opening frame:** m2-v10's final frame exactly (Decisions).
- **Final frame (m2-v12 opens on it; exact description for the m2-v12 designer):** a dark board. At the left, the volumetric flask plate `m6-volumetric-flask-v1.png` (empty, stopper in place, etched mark on the neck), upright, about 55% of frame height, its base resting on an implied bench line at about 80% of frame height; beside its neck a coded navy tag "250.0 mL" pointing to the etched mark. At its foot, a coded white label card: "Na₂CO₃(aq), 0.100 mol L⁻¹". At the centre-right, the balance plate `y11c-top-pan-balance-v1.png`, empty pan, with a coded readout "?.??? g" in amber. Above the two, an amber chip "exactly?". The small conversion ladder sits at the top right (from scene 6). At the bottom of the content area (above the bottom 12%), the chip "Next: How do we prepare a standard solution accurately?". No sodium carbonate solid or weighing boat is shown, no mass is written, and no water is in the flask, so the m2-v12 designer can begin the method from this frame.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. three labels (countdown, 3 seconds at the end)
> Here are the two labels from last time: saline at zero point nine percent sodium chloride, and a sodium chloride solution at zero point one five four moles per litre. Let's add a third, a sodium chloride solution at nine point zero grams per litre. Three different numbers, in three different units. Which solution is the most **concentrated**?

Visual: opens on m2-v10's final frame; the "Next" chip fades. On "saline" and "zero point one five four" the two cards pulse in turn. On "nine point zero grams per litre" a third label card writes: "sodium chloride solution: 9.0 g L⁻¹". On "three different units" the units on the three cards underline: "%", "mol L⁻¹", "g L⁻¹". On "concentrated" three chips "0.9%", "0.154 mol L⁻¹", "9.0 g L⁻¹" sit under the cards; the 3 s `Countdown` ring runs. The heading writes during the countdown: "Comparing concentration units".

### 2. one solution, three descriptions
> They're all the same solution. Each unit answers a different question. Moles per litre counts particles, and that's what chemists need for reactions. Grams per litre tells you how much solid to weigh out, and percentages are handy on labels. And for tiny amounts, like pollutants in water, we use milligrams per litre, or parts per million. So the skill is converting between them, and every conversion has a **reason**.

Visual: on "all the same" the three cards slide together and two "=" signs form between them: "0.9% (w/v) = 9.0 g L⁻¹ = 0.154 mol L⁻¹". On "counts particles" the mol L⁻¹ card gains a small ion icon (teal tag "for reactions"); on "how much solid to weigh" the g L⁻¹ card gains a small balance icon (amber tag "for weighing"); on "handy on labels" the % card gains a label outline; on "parts per million" a fourth, small card "mg L⁻¹ / ppm" writes with a gold tag "trace amounts". On "reason" the four cards stack as the ladder's empty rungs at the right.

### 3. grams per litre to moles per litre
> Start with mass concentration, the grams of solute in each litre of solution. A litre of our saline holds nine point zero grams of sodium chloride. How many moles is that? Nine point zero over fifty-eight point four four is zero point one five four moles. And because that's in one litre, the concentration is zero point one five four moles per **litre**. So to go from grams per litre to moles per litre, divide by the molar mass. To go back, **multiply**. The units check it: grams per litre, divided by grams per mole, leaves moles per **litre**.

Visual: the beaker plate (`y11c-beaker-colourless-solution-v1.png`) with a 1 L box outline drawn over it; inside, Na⁺ and Cl⁻ ions in pairs (grey tag "0.154 mol of NaCl = 0.154 mol of each ion"). Gloss chip "mass concentration: grams of solute per litre of solution". On "nine point zero grams" an amber chip "9.0 g NaCl in 1 L". On "zero point one five four moles" the chip passes through a gate "÷ 58.44 g mol⁻¹" and becomes teal "0.154 mol"; row "n = 9.0 ÷ 58.44 = 0.154 mol". On "litre" (first) row "c = 0.154 mol ÷ 1.00 L = 0.154 mol L⁻¹". On "multiply" the ladder's first link writes: "g L⁻¹ ⇄ mol L⁻¹: ÷ MM up, × MM down". On "litre" (last) a units row "(g L⁻¹) ÷ (g mol⁻¹) = mol L⁻¹", the "g" units cancelling with strike-throughs.

### 4. percent weight per volume
> Percent weight per volume means grams of solute in every hundred millilitres of solution. So zero point nine percent means zero point nine grams in each hundred **millilitres**. A litre holds ten lots of a hundred millilitres, so that's nine point zero grams per litre. To turn this percent into grams per litre, multiply by **ten**. But check the label's basis. Percent by mass, or percent by volume, are different measures, and you can't swap them for this **one**.

Visual: gloss chip "% (w/v): grams of solute per 100 mL of solution". On "millilitres" one 100 mL tile with "0.9 g" draws inside the 1 L box. On "ten lots" nine more tiles fill the box, each "0.9 g"; a total "10 × 0.9 g = 9.0 g in 1 L". On "ten" the ladder link writes: "% (w/v) ⇄ g L⁻¹: × 10 down, ÷ 10 up". On "basis" the "(w/v)" on the saline card rings rose. On "one" two grey chips write beside it: "% (w/w): g per 100 g of solution" and "% (v/v): mL per 100 mL", with a tag "different basis: not interchangeable".

### 5. milligrams and parts per million
> For tiny amounts, grams per litre gets awkward, so we use milligrams. A thousand milligrams make a gram, so divide by a thousand to get grams per **litre**. Parts per million means one gram of solute in every million grams of solution. A litre of dilute solution in water has a mass of about a thousand grams, which is a million milligrams. So one part per million is about one milligram per **litre**. That shortcut only works because the solution is dilute and mostly water, with a density of about one gram per **millilitre**.

Visual: on "milligrams" a chip "1 g = 1000 mg"; on "litre" (first) the ladder link writes: "mg L⁻¹ ⇄ g L⁻¹: ÷ 1000 up". On "Parts per million" gloss chip "ppm: g of solute per 1 000 000 g of solution". On "a thousand grams" the 1 L box gains "about 1000 g"; on "a million milligrams" it relabels "= 1 000 000 mg", and one tiny cell in a grid lights, "1 mg". On "litre" (second) the ladder rung writes "mg L⁻¹ ≈ ppm". On "millilitre" a gold assumption chip: "only for dilute aqueous solutions (density ≈ 1 g mL⁻¹)".

### 6. the ladder, and nitrate in drinking water
> Put them together as a ladder. Percent, times ten, is grams per litre. Grams per litre, times a thousand, is milligrams per litre, about parts per million. And grams per litre, divided by molar mass, is moles per litre. Try nitrate in drinking water. The Australian guideline limit is fifty milligrams per litre. That's zero point zero five zero zero grams per litre. Nitrate's molar mass is sixty-two point zero one, so the limit is eight point zero six times ten to the minus four moles per **litre**.

Visual: the full ladder (`UnitLadder`) at the right: rungs top to bottom "mol L⁻¹", "g L⁻¹", "% (w/v)", with "mg L⁻¹ ≈ ppm" to the side of "g L⁻¹"; arrows light as spoken: on "Percent, times ten" (% → g L⁻¹), on "times a thousand" (g L⁻¹ → mg L⁻¹), on "divided by molar mass" (g L⁻¹ → mol L⁻¹). On "nitrate in drinking water" task strip "Express the nitrate guideline in mol L⁻¹". Givens: gold "guideline: 50 mg L⁻¹ nitrate (Australian Drinking Water Guidelines)"; "N 14.01, O 16.00 g mol⁻¹". On "zero point zero five zero zero grams per litre" row "50 mg L⁻¹ ÷ 1000 = 0.0500 g L⁻¹"; on "sixty-two point zero one" row "MM(NO₃⁻) = 14.01 + 3(16.00) = 62.01 g mol⁻¹"; on "litre" row "c = 0.0500 ÷ 62.01 = 8.06 × 10⁻⁴ mol L⁻¹" (bright). The ladder shrinks to the top right.

### 7. measuring a concentration in the lab
> How do you measure a concentration? For a dissolved solid like salt, one way is to evaporate. Pipette twenty-five point zero millilitres of the solution into a weighed evaporating basin, heat it gently until only dry salt is left, and weigh it again. Say the salt has a mass of zero point two two five **grams**. That's zero point two two five over zero point zero two five zero litres, nine point zero zero grams per **litre**. Divide by ten for percent, zero point nine zero zero, and divide by the molar mass for zero point one five four moles per litre. This assumes salt is the only solute, and that none spits out while **heating**.

Visual: board change. On "Pipette" the pipette plate (`m6-volumetric-pipette-filler-v1.png`) delivers by code into `y11c-evaporating-basin-empty-v1.png` on the balance plate; readout "45.318 g" for the empty basin (grey tag "analytical balance, 0.001 g; illustrative data"), chip "25.0 mL". On "heat it gently" the basin moves to `y11c-evaporating-basin-hotplate-v1.png` (steam wisps); a grey chip "heat gently near dryness, then to constant mass". On "dry salt" the basin cross-fades to `y11c-evaporating-basin-crystals-v1.png` and returns to the balance; readout "45.543 g". On "grams" (first) row "m(salt) = 45.543 − 45.318 = 0.225 g". On "litre" row "c = 0.225 g ÷ 0.0250 L = 9.00 g L⁻¹"; on "Divide by ten" row "= 0.900% (w/v)"; on "zero point one five four" row "= 9.00 ÷ 58.44 = 0.154 mol L⁻¹". On "heating" two grey assumption chips: "only one solute" and "no spitting losses".

### 8. the other direction
> Conversions run both ways. A glucose solution is zero point two five zero moles per litre. Times glucose's molar mass, one hundred and eighty point one six, that's forty-five point zero grams per litre, and dividing by ten gives four point five zero percent. To be sure you multiplied rather than divided, ask which number should be bigger. A mole of glucose is about a hundred and eighty grams, so the grams per litre number must be much bigger than the moles per litre **number**.

Visual: board resets. Task strip "Express 0.250 mol L⁻¹ glucose in g L⁻¹ and % (w/v)". Givens: "c = 0.250 mol L⁻¹"; "MM(C₆H₁₂O₆) = 180.16 g mol⁻¹". On "forty-five point zero" row "0.250 × 180.16 = 45.0 g L⁻¹" (the ladder's "× MM" arrow lights downward); on "four point five zero percent" row "45.0 ÷ 10 = 4.50% (w/v)". On "which number should be bigger" the size check: two bars, "0.250 mol L⁻¹" short and "45.0 g L⁻¹" long (broken axis); on "number" a teal tick, tag "1 mol ≈ 180 g, so g L⁻¹ ≫ mol L⁻¹".

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A bottle of antiseptic is labelled three point zero percent weight per volume hydrogen peroxide. Calculate its concentration in grams per litre, and in moles per litre. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "An antiseptic solution is labelled '3.0% (w/v) hydrogen peroxide, H₂O₂'. Calculate the concentration of hydrogen peroxide in (a) g L⁻¹ and (b) mol L⁻¹. (H = 1.008, O = 16.00) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the ladder dims to an outline).

### 10. feedback 1 (brief)
> Three point zero percent weight per volume is three point zero grams per hundred millilitres, so thirty grams per litre. Hydrogen peroxide's molar mass is thirty-four point zero two, and thirty over thirty-four point zero two is zero point eight eight moles per litre. Skipping the times ten gives zero point zero eight eight, ten times too **small**.

Visual: card shrinks to the top. Rows: "3.0 g per 100 mL × 10 = 30 g L⁻¹"; "MM(H₂O₂) = 2(1.008) + 2(16.00) = 34.02 g mol⁻¹"; "c = 30 ÷ 34.02 = 0.88 mol L⁻¹" (bright). On "small" a chip "0.088 mol L⁻¹ (used 3.0 g L⁻¹)" fades in and is crossed. Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A tap water sample contains copper ions at three point two milligrams per litre. The Australian health guideline for copper is two milligrams per litre. Express the copper concentration in parts per million and in moles per litre, and state whether the water meets the guideline. Pause here to answer.

Visual: `QuestionCard`: "A sample of tap water contains copper(II) ions at a concentration of 3.2 mg L⁻¹. The Australian Drinking Water Guidelines health value for copper is 2 mg L⁻¹. (a) Express the copper concentration in ppm, stating any assumption. (b) Calculate the copper concentration in mol L⁻¹. (c) State whether the water meets the guideline. (Cu = 63.55) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> In dilute water, three point two milligrams per litre is about three point two parts per million. As grams per litre, that's zero point zero zero three two. Divided by sixty-three point five five, it's five point zero times ten to the minus five moles per litre. That's above two milligrams per litre, so it fails the guideline. Forgetting to change milligrams to grams gives an answer a thousand times too **big**.

Visual: card shrinks to the top. Rows: "3.2 mg L⁻¹ ≈ 3.2 ppm (dilute, density ≈ 1 g mL⁻¹)"; "3.2 mg L⁻¹ ÷ 1000 = 3.2 × 10⁻³ g L⁻¹"; "c = 3.2 × 10⁻³ ÷ 63.55 = 5.0 × 10⁻⁵ mol L⁻¹" (bright); "3.2 > 2 mg L⁻¹: does not meet the guideline" (gold). On "big" a chip "0.050 mol L⁻¹ (mg used as g)" fades in and is crossed. Hold about 1 second.

### 13. conclusion and handoff
> So every concentration unit is an amount or a mass, over a stated volume, and a molar mass, a ten or a thousand converts between them. Now we can describe any solution. But to use a solution in a reaction, we need its concentration known exactly. Say we want two hundred and fifty point zero millilitres of sodium carbonate solution at exactly zero point one zero zero moles per litre. What would we weigh, and how do we reach exactly that volume? How do we prepare a standard solution **accurately**?

Visual: the memory line writes at the top: "Percent times ten is grams per litre; grams per litre over molar mass is moles per litre." The ladder lights all its arrows once, then shrinks to the top right. On "known exactly" the board clears. On "two hundred and fifty point zero millilitres" the volumetric flask plate (`m6-volumetric-flask-v1.png`, empty, stoppered) rises at the left with a navy tag "250.0 mL" at its etched mark; on "zero point one zero zero moles per litre" the white label card "Na₂CO₃(aq), 0.100 mol L⁻¹" writes at its foot. On "What would we weigh" the balance plate appears at the centre-right with the amber readout "?.??? g"; on "exactly that volume" the amber chip "exactly?" writes above. On "accurately" the chip "Next: How do we prepare a standard solution accurately?" writes. Hold about 2 seconds. This is the final frame (m2-v12 opens on it; see "Opening frame and final frame").

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Molarity (mol L⁻¹) counts particles; mass concentration (g L⁻¹) says how much to weigh. g L⁻¹ ÷ MM = mol L⁻¹; mol L⁻¹ × MM = g L⁻¹.
2. % (w/v) = grams of solute per 100 mL of solution; × 10 = g L⁻¹. Check the basis (w/w and v/v are different).
3. mg L⁻¹ ÷ 1000 = g L⁻¹. ppm ≈ mg L⁻¹ for dilute aqueous solutions (density ≈ 1 g mL⁻¹).
4. Measure a concentration: evaporate a measured volume to dryness and constant mass; g of solute ÷ L of solution = g L⁻¹ (assumes one solute, no losses).
5. Size check: for most solutes the g L⁻¹ number is bigger than the mol L⁻¹ number.

Memory aid (large, on the notes screen): *Percent times ten is grams per litre; grams per litre over molar mass is moles per litre.*

At the end the notes cross-fade back to scene 13's final frame.

## Teaching checks

- **Does it explain causes?** Why many units (2); why ÷ MM (3); why × 10 (4); why ppm ≈ mg L⁻¹ only when dilute (5); why evaporation gives g L⁻¹ (7); why the g L⁻¹ number is bigger (8).
- **Misconceptions addressed:** different numbers mean different strengths (1, 2); % means per litre (4, A1); any % is w/v (4); ppm always equals mg L⁻¹ (5); multiplying for moles (8); mg used as g (A2).
- **One idea at a time:** the comparison (1, 2), g L⁻¹ (3), % (4), mg L⁻¹ and ppm (5), ladder and use (6), practical (7), reverse (8).
- **Video makes it easier:** the 1 L box fills with ten 100 mL tiles (4); a million-milligram grid with one lit cell (5); the ladder lights each conversion as it is used (3 to 8, feedback); a size check bar (8).
- **Response opportunity:** 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each. Feedback about 26 s and 30 s.
- **Avoided double teaching:** c = n ÷ V, litres and solution volume (m2-v10); molar mass (m2-v03); evaporation (m1-v03) and constant mass (ws-v02) are recalled.
- **Syllabus coverage:** `C2-IQ3-01` "determine the concentrations of solutions" (7) and "the different ways in which concentrations are measured" (2 to 6, 8, A1, A2); `C2-IQ3-02` "calculate concentration, mass or volume" (3, 6 to 8).
- **Out of scope by design:** purity, back-calculations from reactions, standard solutions, dilution.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 3.0% (w/v) = 3.0 g per 100 mL = 30 g L⁻¹ (1 mark). (b) MM(H₂O₂) = 2(1.008) + 2(16.00) = 34.02 g mol⁻¹ (1 mark); c = 30 ÷ 34.02 = 0.88 mol L⁻¹ (1 mark). Classic mistake (crossed): 0.088 mol L⁻¹ (3.0 used as g L⁻¹).

**Attempt 2 (scene 11; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) 3.2 ppm, assuming a dilute aqueous solution with a density of about 1 g mL⁻¹, so 1 mg L⁻¹ ≈ 1 ppm (1 mark). (b) 3.2 mg L⁻¹ = 3.2 × 10⁻³ g L⁻¹; c = 3.2 × 10⁻³ ÷ 63.55 = 5.0 × 10⁻⁵ mol L⁻¹ (2 marks). (c) 3.2 mg L⁻¹ is above 2 mg L⁻¹, so the water does not meet the guideline (1 mark). Classic mistake (crossed): 0.050 mol L⁻¹ (milligrams not converted to grams).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 0.9% (w/v); 0.154 mol L⁻¹; 9.0 g L⁻¹ | 1, 2 |
| g L⁻¹ | 9.0 g; 58.44; 0.154 mol; 0.154 mol L⁻¹ | 3 |
| % | 0.9 g per 100 mL; × 10; 9.0 g L⁻¹ | 4 |
| ppm | 1 g = 1000 mg; 1 L ≈ 1000 g = 10⁶ mg; 1 ppm ≈ 1 mg L⁻¹ | 5 |
| Nitrate | 50 mg L⁻¹; 0.0500 g L⁻¹; 62.01; 8.06 × 10⁻⁴ mol L⁻¹ | 6 |
| Evaporation | 25.0 mL; 45.318 g; 45.543 g; 0.225 g; 9.00 g L⁻¹; 0.900%; 0.154 mol L⁻¹ | 7 |
| Glucose | 0.250 mol L⁻¹; 180.16; 45.0 g L⁻¹; 4.50% | 8 |
| A1 | 3.0%; 30 g L⁻¹; 34.02; 0.88 mol L⁻¹; slip 0.088 | 9, 10 |
| A2 | 3.2 mg L⁻¹; 2 mg L⁻¹; 3.2 ppm; 3.2 × 10⁻³ g L⁻¹; 63.55; 5.0 × 10⁻⁵ mol L⁻¹; slip 0.050 | 11, 12 |
| Handoff | 250.0 mL; 0.100 mol L⁻¹ Na₂CO₃ (mass not shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 22.99 + 35.45 = 58.44; 9.0 ÷ 58.44 = 0.15400; 0.154 × 58.44 = 9.000.
- 14.01 + 48.00 = 62.01; 0.0500 ÷ 62.01 = 8.0632 × 10⁻⁴.
- 45.543 − 45.318 = 0.225; 0.225 ÷ 0.0250 = 9.00; 0.225 ÷ 25.0 × 100 = 0.900; 9.00 ÷ 58.44 = 0.1540.
- 6(12.01) + 12(1.008) + 6(16.00) = 180.156; 0.250 × 180.16 = 45.04; ÷ 10 = 4.50.
- 2(1.008) + 2(16.00) = 34.016; 30 ÷ 34.02 = 0.8818; 3.0 ÷ 34.02 = 0.0882.
- 3.2 × 10⁻³ ÷ 63.55 = 5.035 × 10⁻⁵; 3.2 ÷ 63.55 = 0.0504.
- Handoff (not shown): 2(22.99) + 12.01 + 48.00 = 105.99; 0.100 × 0.2500 × 105.99 = 2.650.

## Memory aid check

- **"Percent times ten is grams per litre; grams per litre over molar mass is moles per litre."** Written for this video. Meaning: % (w/v) × 10 = g L⁻¹ (ten 100 mL portions in a litre); g L⁻¹ ÷ MM = mol L⁻¹ (a litre's grams counted in moles). Assumptions checked: "percent" means % (w/v) only (scene 4 shows the basis check); the molar mass is the solute's, from its formula (for an ion, the ion's formula, as nitrate in scene 6); the reverse directions invert both steps (scene 8's size check catches a wrong direction). It helps a new case (both attempts; m2-v12's mass calculation from a molarity).
- **Considered, not used:** the site's "unit ladder" as a phrase alone (kept as the visual); "ppm equals mg per litre" as a rule (true only for dilute aqueous solutions, so it is a note, not a slogan).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,710 characters**, 14 scenes. At 13.3 characters per second the speech is about 429 s; add about 12 s of holds and settling (the tiles in 4, the grid in 5, the evaporation sequence in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 520 s (8.7 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v11` (route chem-y11-m2-v11; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v11`.

In order (14 scene headings, all `### N.`): three-labels, same-solution, grams-to-moles, percent-wv, mg-ppm, ladder-nitrate, evaporation, other-direction, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v10's final frame into scene 1 by camera continue; 1 to 2 camera continue (cards slide together); 2 to 3 camera push into the beaker; 3 to 4 to 5 camera continue (the 1 L box persists); 5 to 6 clear change (ladder); 6 to 7 clear change; 7 to 8 clear change; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, and 14 cross-fades back to 13's final frame.

Holds: prediction countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v11-learning-review.md`, `checks/c-y11-m2-v11-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `y11c-beaker-colourless-solution-v1.png` (requested in `chem-y11-m2-v10.md`): opening, scenes 1 to 5.
- `public/assets/chemistry/m6-volumetric-pipette-filler-v1.png`: scene 7 (moved by code; no hand).
- `public/assets/chemistry/y11c-evaporating-basin-empty-v1.png`, `y11c-evaporating-basin-hotplate-v1.png` (basin of liquid steaming on a hotplate), `y11c-evaporating-basin-crystals-v1.png` (basin with white crystals at the edge of a little remaining liquid): scene 7 (the Module 1 separation set, root decision 2).
- `public/assets/chemistry/y11c-top-pan-balance-v1.png`: scene 7 and final frame.
- `public/assets/chemistry/m6-volumetric-flask-v1.png` (stoppered volumetric flask with an etched mark): scene 13 and final frame.
- **Inspected, not used:** `c11-cuso4-beaker-dissolved-v1.png` (blue: copper sulfate, not saline); `m6-analytical-balance-v1.png` (not needed: the 0.001 g reading is a tag on the course balance, author note f; root may swap it in, open decision 4).

Need (new plates, Codex): none essential. Optional: `y11c-evaporating-basin-dry-salt-v1.png` (edit of `y11c-evaporating-basin-crystals-v1.png` with no liquid left, only a dry white crust), so scene 7's "dry salt" reads exactly; fallback is the crystals plate.

Coded: label cards, 1 L box, ions, 100 mL tiles, million grid, `UnitLadder`, calculation layout, size-check bars, chips, cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v11)

1. (Optional) `y11c-evaporating-basin-dry-salt-v1.png`: same canvas as `y11c-evaporating-basin-crystals-v1.png`, identical basin and mat, except the basin holds no liquid: a thin dry white crust of small salt crystals over the lower inside surface. Transparent PNG with alpha channel; no text, no people, hands or faces.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the five site notes against `lesson08.sa.html`.
3. Confirm the current Australian Drinking Water Guidelines values for nitrate (50 mg L⁻¹ as nitrate) and copper (health 2 mg L⁻¹), and the wording used.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v10's final frame, and send the final frame description to the m2-v12 designer.

## YouTube metadata (draft)

Title: Concentration Units: mol/L, g/L, % (w/v) and ppm Compared | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

0.9% saline, 9.0 g/L and 0.154 mol/L: which is most concentrated? They are the same solution. Learn why chemistry uses so many concentration units, and how to convert between them with a reason for each step: grams per litre and moles per litre through molar mass, percent weight per volume through a factor of ten, milligrams per litre and parts per million (and when ppm equals mg/L). Then measure a concentration by evaporation, and check a conversion's direction. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
"manipulate variables and solve problems to calculate concentration, mass or volume using:"
"c = n/V  (molarity formula) (ACSCH063)"

Previous: How does concentration link solution volume with moles? Next: How do we prepare a standard solution accurately?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Percentage purity (root).** The site's lesson 8 teaches purity (worked examples 1 and 2) alongside units. This video leaves it out (one learner question; purity is not a concentration unit). Options: a short purity beat in m2-v12 (an impure standard), or a later practice video. Root to place it so the site's content is covered.
- **2. Guideline values (science check).** Nitrate 50 mg L⁻¹ and copper 2 mg L⁻¹ from the Australian Drinking Water Guidelines (author notes e, g).
- **3. Handoff solute (m2-v12 designer, root).** The final frame names sodium carbonate, 0.100 mol L⁻¹, 250.0 mL (2.650 g if calculated; author note j). If m2-v12 uses another standard, change the label card and the narration's "sodium carbonate" and "zero point one zero zero" (about 60 characters; no other scene depends on it).
- **4. Balance for 0.225 g (root).** The illustrative reading needs a 0.001 g balance (author note f): keep the grey tag on the course balance, or swap in `m6-analytical-balance-v1.png` for scene 7.
- **5. Site notes 1 to 5 (root).** Log if accepted.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the hook's "all the same" land as a surprise; is the ladder readable when fully lit; is the ppm assumption understood), then the science check and Codex error check.
- Checker output (5 November): narration 5,710 characters; per scene (1 to 14): 340, 416, 537, 455, 517, 499, 626, 478, 201, 347, 311, 411, 497, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
