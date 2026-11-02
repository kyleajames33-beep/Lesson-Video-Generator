# Year 11 Physics FA3 V01 (Physics 2025, Year 11, Focus Area 3): Why does rubbing a balloon with a wool cloth charge both of them, when no charge is made? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v01`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: six new, with one sidecar (the start of the Focus Area 3 electrostatics kit, see "Codex asset brief").

Narration 5,686 characters, 15 scenes, about 528 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: first video of the Year 11 Physics (2025) Focus Area 3 route (Electricity and magnetism) and the first of two charging videos (v01: what moves and what is conserved; v02: the three ways of charging). Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson01.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 atoms, charge and the mobile electron, card 2 gaining and losing electrons with `we-1` and the quick check, activity 1, two truths one lie, card 3 charge is conserved, last check, fill the blanks, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 1 (the bank balance analogy). Route entry: `phys-y11-fa3-v01` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Charging Objects, The Movement of Electrons. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply charging objects, the movement of electrons? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v02: How can I explain and apply friction, induction and conduction?" (v02's design rewrites it as "How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?"; this video's chip uses that wording).

**Opening frame (assumption: phys-y11-fa2-v33 is not designed yet).** v33 (the Doppler effect) is FA2's last video. Its route handoff is "phys-y11-fa3-v01", so this design assumes v33's final frame is its own summary board (a moving source with wavefronts bunched ahead and spread behind, and its boxed frequency-shift equation) with a "Next:" chip naming this video's question: "Next: Why does rubbing a balloon with a wool cloth charge both of them, when no charge is made?". To keep the join easy to align later, scene 1 is built in two parts: (a) a 3-second bridge that starts on whatever v33's last frame turns out to be, lifts its "Next" chip into the heading and fades the rest to a clean board, with its own one-sentence narration line (recorded as a separate take, so v33's designer can change the frame without touching anything after it); (b) the hook proper, which starts on a clean board and does not depend on any element of v33's frame. Root aligns part (a) when v33 lands (open decision 1).

Owner rules applied: 2025 syllabus only; no people, faces, hands, hair or body outlines (the site's "balloon on your hair" becomes a balloon and a wool cloth; the objects move by code); objects and apparatus painted (balloon, wool cloth, glass rod, silk cloth, polythene rod, coulomb meter with its Faraday pail); the atom, charge symbols, electron hops, tallies and readouts coded (abstract diagrams); one reasoning stage at a time; the calculation as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes. Nothing from FA1 or FA2 is needed beyond scientific notation and "a force" (Stage 5).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G1-01 `ci0ed8dd13`: "Explain the role of the movement of electrons in charging particles and objects"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from the FA2 to FA3 bridge (above); the hook (a rubbed balloon and cloth read −8.0 nC and +8.0 nC on a coulomb meter; made or moved?); inside every atom: protons positive in the nucleus, electrons negative around it, the coulomb and e = 1.6 × 10⁻¹⁹ C; neutral means equal amounts, not "no charge"; why electrons move and protons don't (bound in the nucleus by the strong nuclear force, far heavier; outer electrons weakly held); an atom losing an electron becomes a positive ion (the "particles" half of the point); an object's charge is a count of electrons against protons; positive means electrons missing; the hook answered by conservation of charge; q = ne with the site's worked example; the size of the imbalance (one electron in about twenty trillion); the memory aid; two attempts. Stops at electron transfer, the sign rule, conservation and q = ne. Not taught: why a given pair of materials transfers in one direction beyond one clause, and the three methods of charging (v02); conductors and insulators (v02); forces between charges and fields (v03 onwards); current (later FA3).

## Decisions

- **Learner question rewritten (route placeholder).** "Why does rubbing a balloon with a wool cloth charge both of them, when no charge is made?" One causal question: the answer is the whole point (only electrons move; the sign is a count; what one object gains the other loses). Answer, built in order: the hook and prediction (1); what charge is and what neutral means (2); why electrons move and protons stay (3); losing an electron makes an ion and the sign is a count, with a prediction (4); positive means electrons are missing (5); the hook answered: transfer and conservation (6); counting with q = ne (7); how small the imbalance is (8); memory aid (9).
- **The hook (site hook, made measurable; no hair).** The site's "balloon on your hair" becomes a balloon and a wool cloth rubbed together by code (no people rule). A painted school coulomb meter with a Faraday pail reads each object before (0.0 nC) and after (−8.0 nC and +8.0 nC; the site's activity value for the balloon, −8.0 × 10⁻⁹ C). Prediction (3 s): "made by rubbing?" or "already there, just moved?". Grey tag on the readings: "ideal readings: no charge lost to the air".
- **The cause made visible (owner quality bar).** (2) `AtomModel`: a lithium atom (the site's card 1 figure: 3 protons, 2 inner and 1 outer electron) with a `ChargeTally` beside it ("protons 3, electrons 3, net 0"). (3) The nucleus zooms to show the protons packed tight (a grey chip "held by the strong nuclear force"); a mass bar "proton ≈ 1840 × electron"; then two surfaces pressed together at the particle scale with `ElectronHop` (outer electrons hop across the contact, inner electrons and nuclei stay). (4) The outer electron leaves the lithium atom; the tally updates to "net +1 e"; the atom gets an ion label "Li⁺". (6) The rubbing replays with the hop shown in an inset at the contact; each hop moves one navy electron dot from the cloth's tally to the balloon's; the two tallies change by the same amount every time, and the summed readout "total: 0" never changes. The same tallies and dots carry 7 and 8, so the count is seen, not just said.
- **Prediction 2 (3 s, scene 4; site quick check).** "A glass rod ends up positive. Did it gain protons, or lose electrons?" Chips "gained protons?", "lost electrons?". Answered in 5 (site misconception 1).
- **Worked example (site `we-1`, unchanged numbers).** A plastic rod gains −3.2 × 10⁻⁹ C; n = q/e = 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰ electrons (twenty billion). The rod is shown as the polythene rod plate (site "plastic rod"). Layout: task strip, equation strip "q = ne, so n = q / e", givens group (navy) "q = 3.2 × 10⁻⁹ C (rod negative: electrons gained); e = 1.6 × 10⁻¹⁹ C"; one row per cue.
- **The size of the imbalance (surprise, author note e).** The balloon's 8.0 nC is 5.0 × 10¹⁰ electrons; a 3.0 g rubber balloon holds about 1.0 × 10²⁴ electrons; so about one electron in twenty trillion has moved. Said as "about a million billion billion" and "one in every twenty trillion"; screen shows the powers of ten with the grey tag "estimate for a 3 g rubber balloon".
- **Value of e.** The site's 1.6 × 10⁻¹⁹ C is used throughout (two figures); a grey tag at first use reads "more precisely 1.602 × 10⁻¹⁹ C". Spoken "one point six times ten to the minus nineteen coulombs".
- **Particles and objects (both halves of the point).** The lithium atom becoming Li⁺ (4) and the oxygen ion in attempt 2 cover "charging particles"; the balloon, cloth and rods cover "objects".
- **Why the balloon wins the electrons.** One clause only in scene 6 ("rubber holds electrons more tightly than wool"); v02 owns the material ordering and charging by friction.
- **Attempts (original, HSC style).** (A1, objects) "A glass rod is rubbed with a silk cloth. Afterwards the rod carries a charge of +4.0 × 10⁻⁹ C. The charge on an electron is −1.6 × 10⁻¹⁹ C. (a) Explain, in terms of electron movement, how the rod became positively charged. (b) Calculate the number of electrons transferred. (c) State the charge on the silk, assuming no charge is lost to the surroundings. (4 marks)" Answer: electrons left the rod (protons fixed); 2.5 × 10¹⁰; −4.0 × 10⁻⁹ C. Crossed: "protons were added to the rod". (A2, particles) "A neutral oxygen atom has 8 protons and 8 electrons. It gains two electrons to form an ion. (a) State the number of protons and the number of electrons in the ion. (b) Calculate the charge on the ion, in coulombs. (2 marks)" Answer: 8 protons, 10 electrons; −3.2 × 10⁻¹⁹ C. Crossed: "+3.2 × 10⁻¹⁹ C, because it gained particles". Neither card shows anything answer-bearing.
- **Mistake scene:** none separate. "An object becomes positive by gaining protons" (4, 5, feedback 1 crossed; site misconception 1); "rubbing creates charge" (1, 6; site misconception 2); "neutral means no charge" (2); "gaining anything makes it positive" (feedback 2 crossed).
- **Memory aid:** "Protons stay put; electrons move. Gain them: negative. Lose them: positive." Second line: "What one object gains, another loses." The site's bank analogy is used once, in scene 6, for conservation only (see "Memory aid check").
- **Handoff (route next).** The balloon and cloth with their readouts "−8.0 nC" and "+8.0 nC" and "total: 0"; chips "why does rubber win the electrons?" and "touching? or just coming near?"; then "Next: How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?". This is the frame v02 opens on.
- **Site sources used:** hook (made or moved: 1, 6); warm-up (which particle moved: 3, 4); key terms (electric charge, electron, proton, conservation of charge: 2, 3, 6); misconceptions 1 and 2 (4, 5, 6); card 1 and its lithium figure (2, 3, 4); true or false (protons are not added: 5); card 2 and `we-1` (4, 7); quick check (glass loses electrons to silk: prediction 2); activity 1 (balloon −8.0 × 10⁻⁹ C, 5.0 × 10¹⁰ electrons: 1, 8; on a wool cloth instead of hair); card 3 (conservation, the hook answered: 6); last check (cloth gives electrons: 6); fill the blanks (q = ne: 7); Q1 to Q3 (the transfer explanation: 6, A1). Not used: Q2's numbers (−4.8 × 10⁻⁹ C, kept clear of A1).
- **Site corrections (quoted from site lesson 1, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 1 statement: "Charging is always the movement of electrons." and the figure caption "only the outer electrons are mobile, so charging always involves electron transfer". True for the everyday charging of solid objects, which is the lesson's context, but "always" is too strong: in solutions, gases and lightning channels, ions move too, and the syllabus point says "particles and objects". Suggest: "When solid objects are charged in everyday ways, only electrons move. Protons stay in their nuclei." (Suggestion, not an error.)
  - Checked and correct: key terms; misconceptions; card 1 (lithium, 3 protons and 3 electrons); card 2 and `we-1` (2.0 × 10¹⁰); quick check (A); activity 1 (5.0 × 10¹⁰); two truths one lie (C); card 3; last check (true); fill the blanks; Q1 to Q3 model answers (Q2: 3.0 × 10¹⁰ and +4.8 × 10⁻⁹ C).
- **Cause chain taught, in order:** (1) a measured charge that needs a source (1); (2) every atom holds equal positive and negative charge: neutral means balanced (2); (3) protons are locked in the nucleus and heavy; outer electrons are loosely held, so only electrons hop (3); (4) the sign is a count, for an atom and for an object (4); (5) positive means electrons missing (5); (6) the balloon's gain is the cloth's loss, so the total is unchanged: conservation (6); (7) each electron carries e, so q = ne (7); (8) a tiny fraction of the electrons is enough (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Science (atoms with protons, neutrons and electrons; static electricity as an everyday effect) and Stage 5 Mathematics (scientific notation, dividing powers of ten). Nothing from FA1 or FA2 is needed; the bridge sentence names the change of focus area.
- **Learner-visible vocabulary (plain meaning at first use):** charge (the property that makes particles push or pull on each other electrically; positive or negative, 2); coulomb, C (the unit of charge, 2); nanocoulomb, nC (a billionth of a coulomb, 1, on screen "1 nC = 10⁻⁹ C"); e (the size of the charge on one proton or one electron, 2); neutral (equal amounts of positive and negative charge, 2); nucleus (the tiny, heavy centre of an atom, 2); strong nuclear force (the force that holds the nucleus together, 3); ion (an atom with more or fewer electrons than protons, so it's charged, 4); conservation of charge (the total charge of an isolated system never changes, 6); isolated system (objects that aren't exchanging charge with anything else, 6).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`AtomModel`** (nucleus with a proton count drawn as packed red "+" discs and neutrons as grey discs, electron shells as thin rings with navy "−" dots; any electron removable or addable with a short glide; zoom into the nucleus); **`ChargeTally`** (two counters "protons" and "electrons" with a net-charge readout in units of e or in coulombs, updating on each change); **`ElectronHop`** (two surfaces in contact at the particle scale; outer electrons glide across one at a time; inner electrons and nuclei fixed; a hop counter); **`MeterReadout`** (a coded seven-segment style display overlay on the coulomb meter plate's display window, values with units, updating on cue); **rub motion** (two plates sliding back and forth against each other on a short path, by code, with a soft contact highlight; no hand); **mass bar** (two horizontal bars, electron and proton, to scale 1 : 1840 with the proton bar folded into a "× 1840" chip); **powers-of-ten ladder** (three rows: 5.0 × 10¹⁰, 1.0 × 10²⁴, ratio 5 × 10⁻¹⁴, with the ratio said as "one in twenty trillion"); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **FA3 colour key (proposed, course-wide for electrostatics; open decision 2):** positive charge and protons warm red with a white "+" (the sign always printed, so colour is never the only carrier); negative charge and electrons navy with a white "−"; neutrons grey; electric field teal (root decision 18 of FA2, kept for FA3); forces amber with a dark ink outline (FA1 decision 1); electron movement paths thin navy dashes with a small arrowhead; readouts navy; crossed items muted red with a scribble cross (a scribble, never a filled red disc, so it can't be read as a positive charge).
- **Board layout (constant):** heading top-left; the objects (balloon, cloth, rods) in the left 55 per cent; the particle-scale inset, tallies and working in the right column; the coulomb meter plate small at the lower right whenever readings are live.
- **No human figures.** The rubbing is done by code; no hands, hair or jumper on a person.
- **Author notes (not learner copy):**
  (a) e = 1.602 × 10⁻¹⁹ C; the site and this video use 1.6 × 10⁻¹⁹ C.
  (b) Hook and activity: −8.0 × 10⁻⁹ C ÷ 1.6 × 10⁻¹⁹ C = 5.0 × 10¹⁰ electrons gained by the balloon; the cloth +8.0 × 10⁻⁹ C. Real rubbing loses some charge to the air and the hands; the readings are idealised (grey tag).
  (c) `we-1`: 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰.
  (d) Proton to electron mass ratio 1836 (said "nearly two thousand times heavier"; screen "≈ 1840 ×").
  (e) Balloon electron estimate: a 3.0 g balloon of natural rubber (polyisoprene, C₅H₈, 68.1 g mol⁻¹, 38 electrons per unit): 3.0 ÷ 68.1 × 38 × 6.022 × 10²³ = 1.0 × 10²⁴ electrons; 5.0 × 10¹⁰ ÷ 1.0 × 10²⁴ = 5.0 × 10⁻¹⁴, one in 2.0 × 10¹³ (twenty trillion). Said only to one figure.
  (f) Lithium: 3 protons, 3 electrons (2 inner, 1 outer); Li⁺ has charge +1.6 × 10⁻¹⁹ C. Neutrons (4 in lithium-7) drawn grey and not discussed.
  (g) Direction for rubber and wool: rubber lies below wool in typical triboelectric series (rubber gains electrons); glass gives electrons to silk (site quick check). Orders vary with surface conditions; v02 carries the grey tag.
  (h) A1: +4.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.5 × 10¹⁰ electrons lost by the rod; silk −4.0 × 10⁻⁹ C. A2: 8 protons, 10 electrons; net −2e = −3.2 × 10⁻¹⁹ C.
  (i) Pronunciations: "nanocoulombs" (NAN-oh-KOO-lom); "one point six times ten to the minus nineteen coulombs"; "two point oh times ten to the ten"; "lithium"; "ion" (EYE-on).

Main question: *A balloon and a wool cloth start neutral. Rub them together and one reads minus eight nanocoulombs, the other plus eight. Why does rubbing charge both of them, when no charge is made?*
Entry knowledge (Stage 5: atoms, scientific notation).
Stops after: only electrons move in everyday charging; the sign is a count of electrons against protons, for an atom (an ion) and for an object; charge is conserved; q = ne. No methods of charging, conductors, forces or fields.
Handoff: v02, the three ways of charging.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: see Decisions (positive red "+", negative navy "−", neutrons grey; electron paths navy dashes; readouts navy; crossed items grey scribble).

### 1. hook (made, or moved?)
> That wraps up waves, and now we start something new: electricity and magnetism, beginning with charge.

> Here's a balloon and a wool cloth. A charge meter reads zero for each, so both are neutral. Now rub them together. The balloon now reads minus eight nanocoulombs, a tiny amount of charge, and the cloth reads plus eight. Nothing was added to either one. So where did that charge come from? Did the rubbing make it, or was it already there, and just **moved**?

Visual: part (a), bridge (about 3 s, own take): opens on v33's final frame (see "Opening frame"); its "Next" chip lifts into the heading, which rewrites as "Charge: what moves?"; the rest of v33's board fades to the clean FA3 board (a small grey course chip "Focus Area 3: Electricity and magnetism" at the top right for this scene only). Part (b): the balloon plate (`phys-y11-balloon-v1.png`) and the wool cloth (`phys-y11-wool-cloth-v1.png`) at the left; the coulomb meter (`phys-y11-coulomb-meter-v1.png`) at the lower right. The balloon dips into the Faraday pail on a short coded insulating thread (the thread hangs from the top of frame): display "0.0 nC"; out; the cloth dips: "0.0 nC". On "rub them together" the rub motion (about 2 s). The balloon dips: "−8.0 nC" (chip "1 nC = 10⁻⁹ C"); the cloth dips: "+8.0 nC"; both readouts stay as chips beside their objects (grey tag "ideal readings: no charge lost to the air"). On "moved" chips "made by rubbing?" and "already there, just moved?" and a 3-second countdown ring.

### 2. what neutral really means
> Everything is made of atoms, and every atom contains charge. At its centre is a tiny, heavy nucleus holding protons, which are positive. Around it are electrons, which are negative. Charge is measured in coulombs. One proton carries plus one point six times ten to the minus nineteen coulombs. One electron carries exactly the same amount, but negative. We call that size e. This lithium atom has three protons and three electrons, so their charges cancel. That's what neutral means. Not "no charge inside", but equal amounts of plus and **minus**.

Visual: camera pushes into the balloon's surface; a coded `AtomModel` of lithium resolves (3 red "+" discs and 4 grey neutrons in the nucleus; 2 navy "−" dots on the inner ring, 1 on the outer). On "protons" the nucleus labels "protons (+)"; on "electrons" the dots label "electrons (−)". Chip "charge: measured in coulombs, C". Row "proton: +1.6 × 10⁻¹⁹ C"; row "electron: −1.6 × 10⁻¹⁹ C"; bracket "size e = 1.6 × 10⁻¹⁹ C" (grey tag "more precisely 1.602 × 10⁻¹⁹ C"). The `ChargeTally` appears: "protons 3, electrons 3"; on "minus" "net charge 0" glows; caption "neutral = equal + and −".

### 3. why electrons move, and protons don't
> So when we rub, which ones move? Think about where each one sits. Protons are packed inside the nucleus, held there by the strong nuclear force, the force that holds the nucleus together, and nothing as gentle as rubbing comes close to **overcoming** it. Protons are also nearly two thousand times heavier than electrons. But the outer electrons sit far from the nucleus, held only weakly. When two surfaces press close together, some of those loosely held electrons can hop from one material to the **other**. So in everyday charging, only electrons move. The protons stay **put**.

Visual: zoom into the nucleus: the protons packed tight with a grey chip "held by the strong nuclear force"; on "overcoming" a faint tug arrow on one proton fails to move it (it doesn't budge). Mass bar: a tiny electron bar and a proton bar with "≈ 1840 ×". Pull out: on "outer electrons" the outer ring glows and its electron wobbles loosely. Cut to the particle-scale contact (`ElectronHop`): the cloth's surface atoms (top) and the balloon's (bottom) pressed together; on "other" two outer electrons glide across the gap, down onto the balloon side; nuclei and inner electrons stay fixed. On "put" a chip "only electrons move" and the nuclei pulse once.

### 4. the sign is a count
> That means charge is just a count. Take the lithium atom and remove its outer electron. It still has three protons, but now only two electrons, so it's left one e positive. It's become a charged particle, called an ion. A whole object works the same way. More electrons than protons, and it's negative. Fewer electrons than protons, and it's positive. Quick check. A glass rod ends up positive. Did it gain protons, or lose **electrons**?

Visual: back to the lithium `AtomModel` and its tally. On "remove" the outer electron glides off the right edge; tally "protons 3, electrons 2, net +1 e = +1.6 × 10⁻¹⁹ C"; on "ion" the label "Li⁺ ion" writes under it. Split board: two coded tally bars for an object, "more electrons than protons: negative" (navy bar longer) and "fewer electrons than protons: positive" (red bar longer). On "Quick check" the glass rod plate (`phys-y11-glass-rod-v1.png`) slides in with the silk cloth (`phys-y11-silk-cloth-v1.png`) beside it and a red chip "+" on the rod. On "electrons" chips "gained protons?" and "lost electrons?" and a 3-second countdown ring.

### 5. positive means electrons are missing
> It lost electrons. The protons never moved, so the only way to end up with more protons than electrons is for electrons to leave. Positive doesn't mean something was added. It means electrons are **missing**.

Visual: the "gained protons?" chip takes a scribble cross; "lost electrons?" glows. A particle-scale inset at the rod's surface: a few navy electrons glide from the glass onto the silk; the glass's tally bar shortens on the electron side. On "missing" the rod's chip reads "+ : electrons missing".

### 6. the answer: charge is moved, never made
> Now back to the balloon. Rubber holds electrons more tightly than wool does, so as they rub, electrons hop from the cloth onto the **balloon**. The balloon gains electrons and turns negative. The cloth loses exactly those electrons, and it's left equally positive. Add the two readings: minus eight plus eight is **zero**, the same total we started with. That's conservation of charge: in an isolated system, meaning nothing else is swapping charge with these objects, the total charge never changes. It's like a transfer between two bank accounts. One goes down by exactly what the other goes up, so the total stays the same. Rubbing didn't make charge. It separated charge that was already **there**.

Visual: the balloon and cloth return with their tallies (net counts in units of e, shown as "electron surplus" bars). The rub replays slowly with an `ElectronHop` inset at the contact; on "balloon" each hop moves one navy dot from the cloth's bar to the balloon's bar (the bars change by the same amount every time; a counter runs up to "5.0 × 10¹⁰ moved"). Readouts "−8.0 nC" and "+8.0 nC" return; on "zero" a summed readout below them "total: −8.0 + 8.0 = 0" glows and stays fixed while the bars move. Boxed: "Conservation of charge: in an isolated system, total charge stays constant." On "bank accounts" a small two-account chip: "cloth −5.0 × 10¹⁰ electrons", "balloon +5.0 × 10¹⁰ electrons", "total unchanged". On "there" the chip "made by rubbing?" from scene 1 takes a scribble cross; "already there, just moved" glows.

### 7. counting electrons: q = ne
> How many electrons moved? Each one carries a charge of size e, so the total charge is the number of electrons times e. q equals n **e**. Let's try one. Task: a plastic rod is rubbed and gains a charge of minus three point two times ten to the minus nine coulombs. How many electrons were transferred onto it? The givens: the charge is three point two times ten to the minus nine coulombs, and e is one point six times ten to the minus nineteen coulombs. We use the size of the charge. The minus sign just tells us that electrons were **added**. So n equals q over e, which is two point oh times ten to the ten electrons. That's twenty billion **electrons**.

Visual: clear change to the calculation layout; the polythene rod plate (`phys-y11-polythene-rod-v1.png`) at the left with a navy chip "−". On "e" the equation strip "q = ne, so n = q / e". Task strip "How many electrons were transferred onto the rod?". Givens group (navy): "q = 3.2 × 10⁻⁹ C (rod negative)"; "e = 1.6 × 10⁻¹⁹ C" (grey tag "site worked example"). On "added" a note "sign: electrons gained; use the size". Row: "n = 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹"; on "electrons" "n = 2.0 × 10¹⁰ electrons", boxed, with "(twenty billion)".

### 8. a big number, a tiny fraction
> Twenty billion sounds like a lot. Our balloon's eight nanocoulombs is fifty billion electrons. But a balloon contains about a million billion billion electrons altogether. So the rubbing moved only about one electron in every twenty **trillion**. A tiny imbalance is all it takes to make a balloon cling, or a spark jump.

Visual: the balloon at the left with "−8.0 nC". Powers-of-ten ladder, one row per cue: "moved: 8.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 5.0 × 10¹⁰ electrons"; "in the balloon: about 1 × 10²⁴ electrons" (grey tag "estimate for a 3 g rubber balloon"); on "trillion" "fraction moved: about 1 in 2 × 10¹³" boxed. The balloon's tally bar for all its electrons draws as a very long bar running off the board edge, with the moved electrons as a single navy hairline at its end.

### 9. memory aid
> To keep it straight: protons stay put, and electrons move. Gain them, and you go negative. Lose them, and you're left positive. And whatever one object gains, another **loses**.

Visual: the handwritten line writes large: "Protons stay put; electrons move. Gain them: negative. Lose them: positive." Under it, smaller: "What one object gains, another loses." On "protons" a nucleus icon pulses; on "electrons move" a navy dot glides; on "loses" the balloon and cloth tallies flash in opposite directions. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A glass rod is rubbed with a silk cloth. Afterwards, the rod carries a charge of plus four point oh times ten to the minus nine coulombs. The charge on an electron is minus one point six times ten to the minus nineteen coulombs. Explain how the rod became positive, calculate the number of electrons transferred, and state the charge on the silk. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A glass rod is rubbed with a silk cloth. Afterwards the rod carries a charge of +4.0 × 10⁻⁹ C. The charge on an electron is −1.6 × 10⁻¹⁹ C. (a) Explain, in terms of electron movement, how the rod became positively charged. (b) Calculate the number of electrons transferred. (c) State the charge on the silk, assuming no charge is lost to the surroundings. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Electrons moved from the rod to the silk, and the protons stayed put, so the rod has more protons than electrons: it's **positive**. n is four point oh times ten to the minus nine, over e. That's two point five times ten to the ten **electrons**. The silk gained them, so it carries minus four point oh times ten to the minus nine **coulombs**. Saying protons were added gets the cause backwards. Protons don't **move**.

Visual: card shrinks to the top; "+4.0 × 10⁻⁹ C" and "no charge is lost" underlined. Rows: on "positive" "(a) electrons moved from the rod to the silk; protons fixed"; on "electrons" "(b) n = 4.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.5 × 10¹⁰"; on "coulombs" "(c) silk: −4.0 × 10⁻⁹ C", boxed. On "move" a chip "protons were added to the rod" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A neutral oxygen atom has eight protons and eight electrons. It gains two electrons to form an ion. State the number of protons and electrons in the ion, and calculate its charge in coulombs. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A neutral oxygen atom has 8 protons and 8 electrons. It gains two electrons to form an ion. (a) State the number of protons and the number of electrons in the ion. (b) Calculate the charge on the ion, in coulombs. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The ion still has eight protons, because protons don't move, and it now has ten **electrons**. That's two more electrons than protons, so its charge is minus two e: minus three point two times ten to the minus nineteen **coulombs**. Calling it positive because it gained something misreads the sign. Gaining electrons makes it **negative**.

Visual: card shrinks to the top; "gains two electrons" underlined. A small `ChargeTally`: "protons 8, electrons 8" changes on "electrons" to "protons 8, electrons 10"; on "coulombs" "net −2e = −2 × 1.6 × 10⁻¹⁹ = −3.2 × 10⁻¹⁹ C", boxed. On "negative" a chip "+3.2 × 10⁻¹⁹ C (it gained particles)" fades in and is crossed. Hold about 1 second.

### 14. handoff
> So in everyday charging, it's the electrons that move, and the total charge stays the same. But why did the electrons go to the balloon, and not the other way? And can you charge something just by touching it, or even by bringing a charge **near**?

Visual: board change: the memory line small at the top. The balloon and cloth at the left with "−8.0 nC", "+8.0 nC" and "total: 0" beneath; the coulomb meter small at the lower right. Two chips write: "why does rubber win the electrons?" (beside the contact) and "touching? or just coming near?" (beside the balloon). On "near" the chip "Next: How do rubbing, touching and a nearby charge each move electrons, and what charge does each leave behind?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Atoms contain positive protons (in the nucleus) and negative electrons. Each carries a charge of size e = 1.6 × 10⁻¹⁹ C. Neutral means equal numbers of protons and electrons.
2. In everyday charging only electrons move: protons are held in the nucleus. Gaining electrons makes an object or atom negative; losing electrons leaves it positive. A charged atom is an ion.
3. Conservation of charge: in an isolated system the total charge is constant. Rubbing moves charge; it never makes it. The two objects end with equal and opposite charges.
4. q = ne, so n = q / e (use the size of q; the sign says gained or lost).

Memory aid (large, on the notes screen): *Protons stay put; electrons move. Gain them: negative. Lose them: positive.* Second line: *What one object gains, another loses.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why electrons move and protons don't: the protons are held in the nucleus by the strong nuclear force and are far heavier; outer electrons are weakly held (3, shown at the particle scale). Why an object is positive or negative: its charge is a count of electrons against fixed protons (4). Why positive means missing electrons: protons can't arrive (5). Why both objects charge equally: the electrons one gains are the ones the other lost (6, shown with matched tallies and a constant total). Why q = ne: each electron carries the same e (7).
- **Misconceptions addressed:** positive by gaining protons (4, 5, feedback 1 crossed); rubbing creates charge (1, 6); neutral means no charge (2); gaining makes positive (feedback 2 crossed).
- **One idea at a time:** what neutral means (2), what moves (3), the count (4, 5), conservation (6), counting (7), size (8).
- **Video makes it easier:** the student sees the meter readings before and after (1), electrons hopping while nuclei stay fixed (3), the tally change as one electron leaves (4) and the two bars change by matched amounts while the total stays at zero (6).
- **Response opportunity:** two 3 s predictions (1, 4); two unseen HSC-style tasks, 10 seconds each, every condition on the card (no charge lost; neutral atom; numbers of particles), nothing answer-bearing. One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** nothing from earlier focus areas is needed; v02 owns the material ordering, conductors and the three methods.
- **Syllabus coverage:** `ci0ed8dd13`: electron movement charges objects (1, 3, 6, A1) and particles (4, A2), with conservation and q = ne (6, 7) as the site teaches them.
- **Out of scope by design:** friction, conduction and induction as methods; conductors and insulators (v02); forces and fields (v03 onwards).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A glass rod is rubbed with a silk cloth. Afterwards the rod carries a charge of +4.0 × 10⁻⁹ C. The charge on an electron is −1.6 × 10⁻¹⁹ C. (a) Explain, in terms of electron movement, how the rod became positively charged. (b) Calculate the number of electrons transferred. (c) State the charge on the silk, assuming no charge is lost to the surroundings."
Model answer: (a) Rubbing brought the surfaces into close contact and electrons moved from the glass to the silk. The protons are fixed in the nuclei, so the rod is left with more protons than electrons: positive. (b) n = q/e = 4.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.5 × 10¹⁰ electrons. (c) Charge is conserved, so the silk gained those electrons: −4.0 × 10⁻⁹ C. Classic mistake (crossed): "protons were added to the rod".

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "A neutral oxygen atom has 8 protons and 8 electrons. It gains two electrons to form an ion. (a) State the number of protons and the number of electrons in the ion. (b) Calculate the charge on the ion, in coulombs."
Model answer: (a) 8 protons (unchanged), 10 electrons. (b) Two more electrons than protons: q = −2e = −2 × 1.6 × 10⁻¹⁹ = −3.2 × 10⁻¹⁹ C. Classic mistake (crossed): "+3.2 × 10⁻¹⁹ C, because it gained particles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| e | 1.6 × 10⁻¹⁹ C (1.602 × 10⁻¹⁹ in a grey tag) | 2, 7, 8, 10 to 13, notes |
| Hook readings | 0.0 nC before; −8.0 nC balloon, +8.0 nC cloth; total 0 | 1, 6, 14 |
| Lithium | 3 protons, 3 electrons; Li⁺ 3 and 2, +1.6 × 10⁻¹⁹ C | 2, 4 |
| Mass ratio | proton ≈ 1840 × electron (1836) | 3 |
| Worked (site `we-1`) | 3.2 × 10⁻⁹ C; n = 2.0 × 10¹⁰ | 7 |
| Balloon electrons moved | 5.0 × 10¹⁰ | 6, 8 |
| Balloon total electrons | about 1 × 10²⁴; fraction about 1 in 2 × 10¹³ | 8 |
| A1 | +4.0 × 10⁻⁹ C; 2.5 × 10¹⁰; silk −4.0 × 10⁻⁹ C | 10, 11 |
| A2 | 8 protons, 10 electrons; −3.2 × 10⁻¹⁹ C | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.2 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹⁰.
- 8.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 5.0 × 10¹⁰.
- 4.0 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 2.5 × 10¹⁰.
- −2 × 1.6 × 10⁻¹⁹ = −3.2 × 10⁻¹⁹ C.
- m_p ÷ m_e = 1.67262 × 10⁻²⁷ ÷ 9.10938 × 10⁻³¹ = 1836.15.
- 3.0 ÷ 68.12 × 38 × 6.022 × 10²³ = 1.008 × 10²⁴; 5.0 × 10¹⁰ ÷ 1.008 × 10²⁴ = 4.96 × 10⁻¹⁴; reciprocal 2.02 × 10¹³.

## Memory aid check

- **"Protons stay put; electrons move. Gain them: negative. Lose them: positive."** Meaning, as said in scene 9: in everyday charging the protons don't move, so every change in charge is electrons arriving or leaving, and the sign follows from which. Assumptions checked: "stay put" is scoped to everyday charging of objects and atoms (scene 3 and key note 2 say "everyday charging"); it is not a claim about nuclear reactions or ions moving in solutions (author note on site correction 1). "Gain them: negative" refers to electrons ("them"), on screen after "electrons move", so it can't be read as gaining protons. Introduced after the cause (3), the count (4, 5) and conservation (6).
- **"What one object gains, another loses."** Conservation for two objects exchanging electrons with nothing else (isolated system, said in 6). Holds for any number of objects if read as "the total is unchanged" (key note 3).
- **Bank analogy (site memory hook, used once in scene 6).** Accounts stand for the electron counts on the two objects; a transfer leaves the bank's total unchanged. Limits: it explains conservation only; it says nothing about which way electrons go, and the student must not read "more money" as "more positive" (the account counts electrons, labelled "electrons" on the chip). Not repeated in the notes.
- **Considered, not used:** "LEO the lion says GER" (chemistry's oxidation mnemonic; it fits the gain and loss of electrons but drags in redox terms not needed here).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,686 characters** (5,701 joined), 15 scenes. Characters per scene (1 to 15): 456, 544, 570, 434, 204, 690, 645, 317, 173, 379, 404, 223, 328, 244, 75. At 13.3 characters per second the speech is about 428 s; add about 18 s of holds and settling (the bridge in 1, the rub and meter dips in 1, the particle-scale hop in 3, the matched-tally replay in 6, the ladder in 8, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 528 s**, under the 570 s cap. One syllabus point with its cause, conservation and the counting fills it without padding.

## Scene list and build ids

Lesson key `p-y11-fa3-v01` (route phys-y11-fa3-v01). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v01` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v01` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, neutral, why-electrons, sign-is-a-count, electrons-missing, conservation, q-equals-ne, tiny-fraction, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and sign-is-a-count carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v33's last frame continues into scene 1 part (a) (chip lift and fade), then part (b) on a clean board; 1 to 2 camera push into the balloon's surface; 2 to 3 camera continue (zoom into the nucleus, then out to the contact); 3 to 4 camera continue (back to the atom); 4 to 5 camera continue; 5 to 6 camera pull back to the balloon and cloth; 6 to 7 clear change to the calculation layout; 7 to 8 camera continue; 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and sign-is-a-count (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v01-learning-review.md`, `science_check` = `checks/p-y11-fa3-v01-physics-check.md`.

## Assets

New (requested below; uniform scaling only, never stretched): `phys-y11-balloon-v1.png` (1, 6, 8, 14), `phys-y11-wool-cloth-v1.png` (1, 6, 14), `phys-y11-coulomb-meter-v1.png` with sidecar `phys-y11-coulomb-meter-v1.json` (1, 6, 14), `phys-y11-glass-rod-v1.png` (4, 5), `phys-y11-silk-cloth-v1.png` (4, 5), `phys-y11-polythene-rod-v1.png` (7). These six plates (seven files with the sidecar) start the Focus Area 3 electrostatics kit; v02 and v03 add to it.

Checked first (3 Nov): `public/assets/physics/` has no electrostatics plates (the FA1 and FA2 plates are mechanics and wave apparatus); no balloon, cloth or rod plate exists in `public/assets/biology/` or `public/assets/chemistry/` either.

Coded: the atom, nucleus zoom, tallies, electron hops, readouts on the meter's display, the rub motion, the mass bar, the ladder, the thread for the meter dips.

Kit gaps (for the next physics kit brief): `AtomModel`, `ChargeTally`, `ElectronHop`, `MeterReadout` (all reused in v02 and v03), rub motion; lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v01, electrostatics kit part 1)

Painted plates in the house style of the FA1 apparatus plates (`phys-y11-light-gate-v1.png`, `phys-y11-retort-stand-v1.png`): soft painted realism, gentle top-left light, no cast shadow on the background, transparent PNG with a true alpha channel, no text, no people, hands or body parts. Save to `public/assets/physics/`.

1. `phys-y11-balloon-v1.png`: one inflated round latex party balloon, pale yellow, matte with a soft highlight, tied knot at the bottom, no string, upright, seen side on. About 1000 px tall. Not red or blue (those colours carry charge signs in this course).
2. `phys-y11-wool-cloth-v1.png`: a folded square of knitted wool cloth, heather grey, visible knit texture, lying slightly crumpled, seen at a low three-quarter angle. About 900 px wide.
3. `phys-y11-coulomb-meter-v1.png` plus `phys-y11-coulomb-meter-v1.json`: a school charge sensor (coulomb meter): a small grey benchtop meter with a blank dark display window (no digits), a zero button and a range knob without numerals, joined by a short black lead to a Faraday pail (an open-topped polished metal can standing inside a slightly larger open mesh can, both on a clear acrylic insulating base). Three-quarter view, the pail's opening visible. About 1400 px wide. Sidecar JSON: the display window rectangle and the pail opening's centre and width in plate pixels.
4. `phys-y11-glass-rod-v1.png`: a clear glass rod about 30 cm long and 1 cm thick, horizontal, rounded ends, faint green edge tint. About 1400 px wide.
5. `phys-y11-silk-cloth-v1.png`: a folded square of cream silk cloth with a soft sheen, slightly crumpled. About 900 px wide.
6. `phys-y11-polythene-rod-v1.png`: a dark grey polythene rod about 30 cm long and 1 cm thick, horizontal, matte. About 1400 px wide. Same length and thickness in pixels as the glass rod so they can be swapped.

Acceptance: each plate on true transparency, no halo, uniform scale only; balloon and cloths not red or navy.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: in everyday charging of solids only electrons move; protons are held in the nucleus; neutral means equal numbers; losing electrons leaves an object or atom positive, gaining makes it negative; conservation of charge in an isolated system; q = ne; e = 1.6 × 10⁻¹⁹ C (1.602 × 10⁻¹⁹ C); the proton is about 1840 times heavier than the electron; rubber gains electrons from wool; glass loses electrons to silk.
3. Confirm the balloon estimate (author note e) and that it is said only to one figure with its grey tag.
4. Confirm the matched tallies in scene 6 change by equal amounts and the summed readout stays at zero throughout.
5. Confirm the memory aid's scope ("everyday charging") is on screen or spoken where the aid first appears.
6. Confirm both attempt questions are original in wording, carry every condition (no charge lost; neutral atom; particle numbers) and show nothing answer-bearing.
7. Confirm the syllabus quote matches the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site correction 1 under Decisions to `../site-corrections-phys-y11.md` (owner record only).
11. When phys-y11-fa2-v33 is designed, confirm scene 1 part (a) starts on its actual final frame (open decision 1).

## YouTube metadata (draft)

Title: How Objects Become Charged: Electrons, Ions and Conservation of Charge | Year 11 Physics

(Title length: 88 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson01.sa.html

Rub a balloon with a wool cloth and a charge meter reads minus eight nanocoulombs on the balloon and plus eight on the cloth. Nothing was added, so where did the charge come from? See why protons stay locked in the nucleus while loosely held electrons hop between surfaces, why an object's charge is just a count of electrons against protons, how an atom becomes an ion, and why charge is moved but never made. Then count the electrons with q = ne. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Explain the role of the movement of electrons in charging particles and objects" (ci0ed8dd13)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: The Doppler effect (previous video, end of Focus Area 2: Waves). Next: Charging by friction, conduction and induction.

#Year11Physics #Physics #Electrostatics #HSCScience

## Open decisions

- **1. Opening frame (assumption).** phys-y11-fa2-v33 is not designed. Scene 1 part (a) is a separate 3-second bridge with its own one-sentence take, built to start on any final frame; part (b) depends on nothing from v33. When v33 lands, root (or the error check) aligns part (a) to v33's actual frame and confirms v33's chip names this video's question. If v33's designer wants a different FA2 to FA3 bridge sentence, only that take changes.
- **2. FA3 colour key.** Positive red "+", negative navy "−" (the common textbook convention), with signs always printed and crossed items drawn only as scribbles. Root to confirm course-wide for FA3 (v02 and v03 use it).
- **3. Route refinement (root to record).** Question as above; start "Begin at the FA2 to FA3 bridge; recall only atoms and scientific notation"; stop "Stop at electron transfer, the sign as a count, ions, conservation of charge and q = ne; hand the three methods of charging and conductors to v02"; next as v02's design question.
- **4. Nanocoulombs.** The hook uses nC (a billionth of a coulomb) for readable meter values; the calculations use scientific notation in coulombs. Root to confirm nC is acceptable on screen.
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from Stage 5 at Year 11 entry; check that the bridge sentence doesn't confuse; that "why protons don't move" is seen at the particle scale, not just said; that the matched tallies make conservation feel caused; that the twenty-trillion surprise lands without crowding scene 8; that the cards give nothing away), then the Codex physics check and error check.
- The particle-scale hop (3), the tally change (4) and the matched tallies with a constant total (6) carry the explanation; judge them at playback speed in the voiced preview.
