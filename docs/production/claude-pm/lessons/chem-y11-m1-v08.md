# Year 11 Chemistry M1 V08: Nuclide notation and isotopes. How does nuclide notation tell us the particles in an atom or ion? (design)

Status: Revision 4 (12 Nov 2026): visual upgrade to maths-visual-standard.md, visuals only. Narration unchanged, so the brief 236 voicing is not affected. Needs a Codex error check of the visual plan before plates and build. Previously Revision 3 (7 Nov 2026): brief 186 error check clean, headline restated as the sum of scene strings, ready to voice.

Narration 5,885 characters (sum of scene strings; 5,900 with joining spaces; Revision 1 was 5,900 by the joined parser count), 16 scenes, about 530 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighth video of Year 11 Chemistry (2017 syllabus), Module 1. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (asset brief format). Pre-design pack: `../pre-design/chem-y11/chem-y11-m1-v08.md`. Route entry: `chem-y11-m1-v08` in `../../programme/chem-y11-route-inputs.json`. Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson13.sa.html` (SHA256 `a9c61816c6508eedc88f5fc90ab38adcb03462dfb255883bbd817f098c0dd3aa`, recomputed, matches the route; used: `l13-subatomic-particles-reference-table-title`, `l13-worked-examples-title` iron example, drill 4, activity 2) and `.../module1/lesson14.sa.html` (SHA256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`, recomputed, matches; used: `l14-isotopes-same-element-different-mass-title`, `l14-structural-basis-of-isotope-instability-title`, `l14-worked-examples-title` misconception card, drill 1 and 2). Site corrections: none of the logged items touches these sections.

Owner rules applied: as v06 and v07 (one learner question; no people, hands or faces: the site's scientists are not pictured, and no scientist is named in this video; particle models coded, labelled "model, not to scale"; one reasoning stage at a time; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ2-01`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "investigate the basic structure of stable and unstable isotopes by examining:"
  - "their position in the periodic table"
  - "the distribution of electrons, protons and neutrons in the atom"
  - "representation of the symbol, atomic number and mass number (nucleon number)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on v07's final frame (³⁵₁₇Cl with "?" at 35 and 17). Teaches the three subatomic particles (charge, relative mass, location); atomic number Z as the proton count, which fixes the element and its periodic-table position; mass number A as the nucleon count; neutrons = A − Z; electrons in neutral atoms and ions (electrons = Z − charge); the iron worked example from the site; isotopes (chlorine-35 and chlorine-37) against ions; stable and unstable isotopes through the neutron-to-proton balance. Stops before decay types and nuclear equations (v17, v18), and before relative atomic mass as an average (v09, the handoff). Electron shells appear only as the familiar Stage 5 picture; energy levels are v10, spdf is v11.

## Decisions

- **Learner question (route wording kept).** "How does nuclide notation tell us the particles in an atom or ion?" It is already concrete and answerable. The answer, in order: the particles and what each contributes (2); the bottom number counts protons and names the element (3); the top number counts protons plus neutrons (4); the charge says how many electrons were lost or gained (5); so any label can be decoded (6), and isotopes and ions are told apart by which particle differs (7 to 9).
- **Opening frame (equals v07's final frame).** A large "Cl" (lifted from v07's NaCl mass bar, chlorine green) with a superscript "35" and subscript "17" at its left, each with a small "?", and the chip "How does nuclide notation tell us the particles in an atom or ion?".
- **Chlorine as the thread.** The hook's ³⁵₁₇Cl is decoded as an atom (scenes 3 to 5), becomes the chloride ion of v07's salt (5), meets chlorine-37 (7, 8) and returns as the periodic-table value 35.45 in the handoff (15). The pack used ³⁵Cl⁻ as an attempt; here it is teaching, and the attempts are new.
- **Site worked example used exactly:** ⁵⁶₂₆Fe²⁺: protons 26, neutrons 30, electrons 24, charge check 26 − 24 = +2 (`we-chem-y11-m1-l13-2`). Spoken as "iron", without "from the textbook".
- **Particles (site reference table).** Proton +1, relative mass 1, nucleus; neutron 0, relative mass 1, nucleus; electron −1, relative mass "less than a thousandth of a proton's mass" (site: 1/1836, shown on screen as "≈ 1/1836"), outside the nucleus. Discoverers and years from the site table are not used (not needed for the question; the site marks the model history as beyond the syllabus).
- **Periodic-table position (syllabus example 1).** Said causally: the table is in order of atomic number, so Z gives the element's box; one more proton turns chlorine into argon. The decimal in the box is named in the handoff only (v09).
- **Ion rule written as a count, not a formula first.** "A positive charge means electrons were lost; negative means gained" is spoken; the screen rule "electrons = Z − charge" appears with the iron check. Feedback 1 crosses the classic sign slip (adding electrons for a positive ion).
- **In-teaching prediction (3 s countdown, scenes 7 and 8).** "Chlorine-37: still chlorine? What's different inside?" Answer: still chlorine (17 protons); 20 neutrons, two more; isotopes; same electron arrangement, so essentially the same chemistry (site: "virtually identical chemical properties"; the H and D rate exception is in author note b, not learner copy, because "essentially" already keeps the claim honest).
- **Memory aid (new; see "Memory aid check"):** "Protons pick the element, neutrons pick the isotope, electrons pick the charge."
- **Stability (route: "introduce stability without teaching decay equations").** Carbon-12 and carbon-13 stable, carbon-14 radioactive (site table); cause from the site's `l14-structural-basis-of-isotope-instability-title`: proton repulsion against the short-range strong nuclear force; neutrons add attraction without repulsion; light stable nuclei roughly 1:1, heavy stable nuclei need more neutrons (lead-208: 82 protons, 126 neutrons, about 1.5 to 1). "What it gives out when it breaks down is a later video" (v17). The site's "band of stability" name is shown as a small screen tag only.
- **Attempts (original wording, HSC style).** A1: compare ²⁴₁₂Mg²⁺ and ²⁵₁₂Mg²⁺ (pack candidate 2): 12 protons and 10 electrons each, 12 and 13 neutrons; isotopes with the same charge. Crossed: "14 electrons" (adding for a positive ion). A2 (new, reverse direction): 16 protons, 18 neutrons, 18 electrons: ³⁴₁₆S²⁻, sulfur. Crossed: "mass number 52" (counting electrons).
- **Mistake scene:** none separate. "Charge changes the protons" (5, the protons stay); "subtract the charge from the neutrons" (pack; 6 shows neutrons from A − Z only); "isotopes are different elements" (8); "isotopes behave differently in reactions" (8, site misconception card); "mass number includes electrons" (4, crossed in 14); "the periodic-table decimal is the mass number" (15, handoff).
- **No people.** No scientist is pictured or named; the site's Rutherford, Chadwick and Thomson entries belong to v10's model history at most.
- **Handoff (route next).** Scene 15: a mass number is a whole number because it counts whole particles, but chlorine's periodic-table value is 35.45; final frame: the chlorine box with 35.45 between a ³⁵Cl nucleus and a ³⁷Cl nucleus, "?" (v09: "Why is relative atomic mass a weighted average?").
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l13-worked-examples-title`, misconception card 3: the heading "Dalton's atomic theory stated that all atoms of the same element are identical in every way" is followed by "Look back at the worked examples for the most common slip, units, ratios or sign errors are the usual culprits." That sentence is boilerplate unrelated to the Dalton point. Suggest deleting it.
  2. `l14-calculating-relative-atomic-mass-title` and the same page's multiple-choice explanations are v09 material; noted there.
  - Checked and correct: reference table relationships (Z = protons; A = protons + neutrons; electrons = Z − charge); Fe²⁺ (26, 30, 24); activity 2 (¹²C 6, 6, 6; ³⁵Cl⁻ 17, 18, 18; ²³Na⁺ 11, 12, 10; ¹⁹⁷Au 79, 118, 79); S²⁻ multiple-choice explanation (16, 16, 18); isotope table neutrons (¹H 0 to ³H 2; ¹²C 6 to ¹⁴C 8; ³⁵Cl 18, ³⁷Cl 20); ²⁰⁸Pb 82 and 126.
- **Cause chain taught, in order:** (1) three particles with different charge, mass and place (2); (2) protons fix the element and its place in the table (3); (3) the nucleus holds the mass, so A counts protons plus neutrons (4); (4) charge comes from losing or gaining electrons, not protons (5, 6); (5) isotopes differ only in neutrons, so their chemistry is essentially the same (7, 8); (6) the neutron-to-proton balance decides stability (10).
- **Entry knowledge:** Stage 5 atomic structure (protons, neutrons, electrons, shells drawn as rings) and simple formulae; v07 (chlorine's relative atomic mass used as a given number).
- **Learner-visible vocabulary:** nucleus (the tiny dense centre of an atom, 2); nuclide notation (the symbol with mass number on top and atomic number below, 1); atomic number Z (number of protons, 3); mass number A (protons plus neutrons, also called nucleon number, 4); nucleon (a particle in the nucleus: a proton or a neutron, 4); ion (a charged particle formed when an atom gains or loses electrons, 5); isotopes (atoms of the same element with different numbers of neutrons, 8); radioactive (having an unstable nucleus that breaks down and gives out radiation, 10); strong nuclear force (a very short-range attraction between all nucleons, 10).
- **Legacy logic ported:** none.
- **Explainer motion (all coded):** **nuclide label** (a large symbol with A, Z and charge positions; each number glows and draws a leader line to the particle group it counts); **atom model** (a nucleus of packed red protons and grey neutrons, blue electrons on Stage 5 rings, labelled "model, not to scale"; particles fly in or out as counts change); **particle counters** (three counters, protons red, neutrons grey, electrons blue, in the right column, ticking as particles are added); **charge meter** (a small "+ / −" tally of protons against electrons, scene 5, 6); **isotope pair** (two nuclei side by side, extra neutrons pulsing); **nucleus forces sketch** (scene 10: short red repulsion arrows between protons, short ink "attraction" brackets around all nucleons); **stability strip** (scene 10: three carbon nuclei with "stable / stable / radioactive" tags; a small N against Z sketch tagged "band of stability"); coded periodic-table cells; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** nuclide label top centre; atom model at the left; counters and rows in the right column.

Author notes (not learner copy):
(a) The atom model is not to scale (nucleus radius about 1/10,000 to 1/100,000 of the atom's); stated on screen and in scene 2.
(b) Isotopes have "essentially the same" chemistry: small kinetic isotope effects exist (largest for H and D; the site notes this). Learner copy says "essentially", which keeps the claim true.
(c) Electron relative mass: 1/1836 of a proton (more precisely of the proton's mass; 1/1823 of a neutron's is not needed). "Less than a thousandth" is spoken.
(d) Stability: the N to Z balance is the school-level explanation from the site; pairing and shell effects are not mentioned. Carbon-14 has too many neutrons for a light nucleus and decays by beta emission (not named here).
(e) Argon has Z = 18 (one more proton than chlorine). Lead-208 is stable (82 protons, 126 neutrons; N:Z = 1.54).
(f) Pronunciations: "chlorine-thirty-five"; "magnesium-twenty-four two plus"; "lead-two-hundred-and-eight"; "Z" as "zed".

Main question: *How does nuclide notation tell us the particles in an atom or ion?*
Entry knowledge: Stage 5 atomic structure; v07.
Stops after: reading Z, A and charge; counting protons, neutrons and electrons; isotopes against ions; stable and unstable isotopes. No decay types, nuclear equations or averages.
Handoff: v09, relative atomic mass as a weighted average.

## Visual upgrade (Revision 4)

Each scene below keeps its Visual line and gains an "Upgrade (Revision 4)" paragraph. The Upgrade paragraph adds to the Visual and wins wherever the two differ. No narration line changed.

- **Anchor.** Revision 3 had no painted object at all. The video still opens on v07's final frame (the large "Cl" label), and at about 5 s a painted gas jar of chlorine (`y11c-gas-jar-chlorine-v1.png`, about 420 px tall, uniform scale) arrives solid beside the label: the label describes one atom of this real, pale yellow-green gas. The painted jar of salt (`c1-salt-jar-crystals-v1.png`) carries the chloride ion in scene 5, and a painted lump of iron (`c5-solid-lump-v1.png`) carries scene 6.
- **Simulation: the nuclide builder.** One coded atom model with four live readouts at 52 px ("protons", "neutrons", "electrons", "charge") and a symbol that is computed from them. Adding a proton changes the symbol (Cl to Ar and back, scene 3); adding neutrons changes the mass number (35 to 37, scene 8); adding an electron changes the charge (0 to −1, scene 5); scene 9 replays the three changes in a row. The label, the counters and the charge meter all read the same particle counts, so they cannot disagree. Coded in the lesson; no engine in `src/explainer/sims/` fits.
- **Colour key (fixed for the whole video).** Protons and "element" red; neutrons and "isotope" slate grey with a dark-ink outline; electrons blue; charge teal; the number being read amber; a framed answer green with a green tick; a crossed mistake red strike with a red hand tag; givens strips navy. Hand tags take the colour of the particle they mark. Every tag the Visual lines call "grey", "faint", "dim" or "ghost" is drawn solid in dark ink.
- **Type sizes (1080p).** Heading 60 px; the nuclide label 120 px for the symbol with its numbers at 52 px; counters, the current working row and framed answers 52 px, never under 44; question-card sentences 38 px; table cells, periodic-strip boxes and supporting lines 30 px or more; hand tags 42 px; key notes 34 px; nothing a student must read under 26 px.
- **Board stages and cuts.** (A) the label and the chlorine jar, scene 1 (about 34 s); (B) particle board, scene 2 (about 43 s): three large particles on the beam with the reference table; (C) the builder with the periodic strip, scenes 3 and 4 (about 62 s); (D) ion board, scene 5 (about 48 s): the atom at the centre, the charge meter large, the jar of salt at the right; (E) iron, scene 6 (about 37 s); (F) the two chlorine atoms, scenes 7 and 8 (about 55 s); (G) three particles and the memory card, scene 9 (about 26 s); (H) stability, scene 10 (about 64 s, already staged as three mechanisms); question and feedback cards; the handoff; the notes board. Revision 3 kept one atom model on screen through scenes 1 to 5 (about 187 s); stages B and D are the new cuts.
- **Question cards.** Each attempt card arrives whole (38 px) with a picture from its first frame and nothing answer-bearing. Each feedback scene keeps a navy givens strip, frames the answer in green and crosses one classic mistake in red.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (new for the atomic-structure videos; keep across v08 to v10): protons red (`C.rose`), neutrons grey, electrons blue (`C.blue`); nuclide numbers ink, with the number being read glowing amber; ion charges teal; crossed chips red strike. Screen notation: ³⁵₁₇Cl, ⁵⁶₂₆Fe²⁺, ³⁴₁₆S²⁻ (mass number top left, atomic number bottom left, charge top right). Narration says "Z" as "zed".

### 1. hook: two numbers on a symbol
> Last time, we saw chlorine written like this, with a thirty-five above and a seventeen below. It's called nuclide notation, and it's a compact label for what's inside an **atom**. By the end of this video, you'll be able to read any label like this, and count exactly how many protons, neutrons and electrons it **describes**, for an atom or an **ion**. So let's start with the three particles we're counting.

Visual: opens on v07's final frame (Decisions). On "atom" the heading writes on: "Nuclide notation: what's inside?", and a faint dashed circle draws around the label. On "describes" three empty counters write in the right column: "protons ?", "neutrons ?", "electrons ?". On "ion" a small teal ghost "⁻" appears at the label's top right, then fades (a preview of scene 5).

Upgrade (Revision 4): The label is solid from the first frame. On "we saw chlorine written like this" the painted chlorine gas jar (about 420 px tall) arrives solid at the left with a dark-ink tag "chlorine gas", and an amber hand tag "one atom of this" writes with a pen arrow from the jar to the label. On "what's inside an atom" the circle round the label is a solid amber pen ring. The three counters are 52 px in red, slate and blue. On "ion" the "⁻" preview is solid teal with a teal hand tag "or an ion", then clears.

### 2. the three particles
> Every atom has a tiny, dense centre called the nucleus. It holds protons, which each carry a charge of plus one, and neutrons, which carry no charge at **all**. Protons and neutrons have almost the same mass, so we give each a relative mass of **one**. Around the nucleus are the electrons. Each has a charge of minus one, but its mass is less than a thousandth of a proton's, so we count it as almost **zero**. This drawing is a model, not to scale. A real nucleus is far smaller, compared with the whole **atom**.

Visual: the label moves to the top centre; the atom model draws at the left: a small nucleus cluster and two empty Stage 5 rings. On "all" a red proton sphere and a grey neutron sphere enlarge beside the nucleus with tags "proton: +1" and "neutron: 0". On "one" both gain "relative mass 1" and sit on a small coded beam, level. On "zero" a blue electron dot enlarges beside the rings, tagged "electron: −1, relative mass ≈ 1/1836 (≈ 0)"; on the beam it barely moves. The three tags form a compact reference table in the right column (charge, relative mass, where). On "atom" a grey tag "model, not to scale" writes under the atom; a scale bar sketch shows the nucleus shrinking to a dot inside a much larger circle, then returns.

Upgrade (Revision 4): Board change to the particle board, solid from the first frame: the three particles large (about 160 px each) across the board with the beam under them and the empty reference table at the right; the atom model sits small at the left. On "a charge of plus one" a red hand tag "+1" writes on the proton; on "no charge at all" a slate hand tag "0" writes on the neutron. On "a relative mass of one" a pen bracket joins the two on the level beam with an ink hand tag "same mass". On "we count it as almost zero" a blue hand tag "almost no mass" writes on the electron. The table cells are 34 px. On "not to scale" the tag is dark ink at 30 px with a pen underline.

### 3. the bottom number: which element
> Now the bottom number. Seventeen is the atomic number, written Z. It's the number of protons in the **nucleus**. And the number of protons decides which element it is. Every atom with seventeen protons is chlorine. Give it one more proton, and it isn't chlorine any more, it's **argon**. That's also why the periodic table runs in order of atomic number. Chlorine is element seventeen, so it sits in the seventeenth **box**.

Visual: on "nucleus" the "17" glows amber, a leader line runs to the nucleus, and 17 red protons pack in one by one (fast); the protons counter ticks to 17, tag "Z = number of protons". On "argon" an eighteenth proton slides in, the symbol flickers to "Ar" with a small coded box "18 Ar", then the extra proton slides out and "Cl" returns; tag "protons decide the element". On "box" a coded strip of the periodic table's first three rows draws (boxes with atomic numbers and symbols only, 1 to 18), and box 17 "Cl" glows with a `PenArrow` "Z = 17: seventeenth box".

Upgrade (Revision 4): Board change to the builder: the atom model large at the left, the label at the top centre and the periodic strip frame at the right, solid from the first frame. On "the number of protons in the nucleus" a red hand tag "Z = protons" writes with the leader line as a pen arrow. On "it's argon" the computed symbol changes with the readout "protons 18", and a red hand tag "new proton, new element" writes with a pen ring round the eighteenth proton; then it returns to 17 and "Cl". On "the seventeenth box" the pen arrow lands on box 17 and the box is framed in amber.

### 4. the top number: protons plus neutrons
> The top number, thirty-five, is the mass number, written A. It counts every particle in the nucleus, protons plus **neutrons**. Electrons aren't counted, because they add almost no mass. So to find the neutrons, take the mass number and subtract the atomic number. Thirty-five minus seventeen gives eighteen **neutrons**.

Visual: the periodic strip shrinks to the top. On "neutrons" (first) the "35" glows amber and a leader line runs to the whole nucleus; tag "A = protons + neutrons (nucleons)". The electrons counter is dimmed with a small tag "not counted in A". On "neutrons" (second) row "neutrons = A − Z = 35 − 17 = 18" writes, 18 grey neutrons pack into the nucleus, and the neutrons counter ticks to 18.

Upgrade (Revision 4): The readout "neutrons" counts to 18 at 52 px. On "protons plus neutrons" a pen bracket spans the whole nucleus with an amber hand tag "everything in the nucleus". On "Electrons aren't counted" the electrons counter takes a slate cross and the tag "not counted in A" in dark ink (the counter is not dimmed). On "gives eighteen neutrons" the row is 52 px and "18" is framed in green with a tick.

### 5. electrons, charge and ions
> What about electrons? In a neutral atom, the plus and minus charges cancel, so the number of electrons equals the number of protons. This chlorine atom has seventeen **electrons**. But in salt, chlorine isn't a neutral atom. It has gained one extra electron, so it carries a charge of minus one. That makes it an ion, a charged particle, written with a small minus sign at the top **right**. The chloride ion has seventeen protons and eighteen **electrons**. Notice what didn't change. The protons, and so the element, stayed exactly the **same**.

Visual: on "electrons" (first) 17 blue electrons fill the rings (2, 8, 7), the electrons counter ticks to 17, and the charge meter shows "+17, −17: neutral". On "right" one blue electron flies in from the right edge to the outer ring; the label gains a teal "⁻" at its top right (³⁵₁₇Cl⁻); tag "ion: gained or lost electrons". On "electrons" (second) the counter ticks to 18 and the meter shows "+17, −18: charge −1". On "same" the protons counter is ringed with a scribble circle, tag "protons unchanged: still chlorine". A small `c1-salt-jar-crystals-v1.png` thumbnail sits at the corner tagged "chloride ion in salt".

Upgrade (Revision 4): Board change to the ion board, solid from the first frame: the atom (about 520 px) at the centre, the charge meter large at the right and the painted jar of salt (about 360 px) at the far right with a dark-ink tag "chloride ion in salt" (it is not a small thumbnail). The readouts "electrons" and "charge" are live at 52 px. On "the plus and minus charges cancel" a teal hand tag "17 + and 17 −: neutral" writes on the meter. On "It has gained one extra electron" a blue hand tag "+1 electron" writes with a pen arrow along the incoming electron, and the charge readout steps 0 to −1. On "The protons, and so the element, stayed exactly the same" the pen ring round the protons counter takes a red hand tag "still 17: still chlorine".

### 6. iron two plus
> Let's try iron, with fifty-six on top, twenty-six below, and two plus at the top **right**. Protons: that's the atomic number, twenty-**six**. Neutrons: fifty-six minus twenty-six, which is **thirty**. Electrons: a neutral iron atom would have twenty-six, but two plus means it has lost two, so it has twenty-**four**. Check the charge: twenty-six positive protons and twenty-four negative electrons leave plus two. It **matches**.

Visual: board clears; task strip "Find the protons, neutrons and electrons in ⁵⁶₂₆Fe²⁺"; the label "⁵⁶₂₆Fe²⁺" writes large (on "right" the teal "2+" glows). Counters reset. On "six" "26" glows, row "protons = Z = 26". On "thirty" "56" glows, row "neutrons = A − Z = 56 − 26 = 30". On "four" "2+" glows, row "electrons = 26 − 2 = 24" (grey tag "positive: electrons lost"); two blue dots leave a small coded atom (nucleus and rings, counts not drawn individually) beside the rows. On "matches" the charge meter shows "+26, −24 = +2" with a tick against the label's "2+"; rule chip "electrons = Z − charge".

Upgrade (Revision 4): The task strip, the label and the painted lump of iron (about 300 px, dark-ink tag "iron") are on the board from the first frame, with a navy givens card "A = 56 | Z = 26 | charge 2+". Each row is 52 px and its result ("26", "30", "24") is framed in green as it lands; earlier rows stay solid. On "two plus means it has lost two" a chip "electrons = 26 + 2 = 28" fades in and is struck in red, with a red hand tag "2+ means lost". On "It matches" the meter's "+26, −24 = +2" takes a teal pen tick with a teal hand tag "checks out".

### 7. prediction (countdown, 3 seconds)
> Quick prediction. Here's another kind of chlorine atom, chlorine-thirty-seven. Is it still chlorine? And what's different inside it, compared with chlorine-thirty-five? Have a **think**.

Visual: board returns to chlorine: the ³⁵₁₇Cl label and its atom model at the left (counters 17, 18, 17). At the right a second label "³⁷₁₇Cl" writes with its own empty counters and an empty nucleus outline. Two chips: "still chlorine?" and "what's different?". On "think" the 3 s `Countdown` ring runs. No particles are added to the second atom yet.

Upgrade (Revision 4): Both labels (symbols 120 px) and the first atom model are on the board from the first frame; the two question chips are 44 px. The empty nucleus outline is a solid dark-ink ring. No hand tags (thinking time).

### 8. isotopes
> Yes, it's still chlorine, because it still has seventeen **protons**. The difference is in the neutrons. Thirty-seven minus seventeen gives twenty, two more than chlorine-thirty-five's **eighteen**. Atoms of the same element with different numbers of neutrons are called **isotopes**. And because both have seventeen electrons, arranged the same way, they react in essentially the same way. Chemistry is mostly about electrons, and neutrons hardly change **it**.

Visual: on "protons" 17 red protons pack into the second nucleus; its protons counter reads 17 and both "17"s glow together. On "eighteen" row "37 − 17 = 20" writes, 20 grey neutrons pack in; two neutrons pulse in the second nucleus, tagged "+2 neutrons", next to the first nucleus's 18. On "isotopes" a bracket joins the two labels: "isotopes: same Z, different neutrons". On the fourth sentence 17 electrons fill both atoms' rings identically; on "it" both outer rings glow together, tag "same electrons: essentially the same chemistry".

Upgrade (Revision 4): On "Yes, it's still chlorine" the answer "still chlorine" is framed in green with a tick (44 px). The second atom's readouts are live: "protons 17", "neutrons 20". On "two more than chlorine-thirty-five's eighteen" a slate hand tag "+2 neutrons" writes with a pen ring round the two extra neutrons. On "isotopes" the bracket is a pen bracket and its line is 44 px. On "they react in essentially the same way" a blue hand tag "same electrons, same chemistry" writes between the two outer rings.

### 9. one line per particle
> So each particle has its own job, and here's a line to hold onto. Protons pick the element. Neutrons pick the **isotope**. Electrons pick the **charge**. Change the protons, and you've got a different element. Change the neutrons, and you've got a different isotope. Change the electrons, and you've got an **ion**.

Visual: three columns write under three large particle icons (red, grey, blue): "pick the element" appears with the first sentence after "hold onto"; on "isotope" "pick the isotope"; on "charge" "pick the charge". The handwritten line writes above: "Protons pick the element, neutrons pick the isotope, electrons pick the charge." On "ion" three tiny animations play in a row: a proton added turns Cl into Ar; two neutrons added turn ³⁵Cl into ³⁷Cl; an electron added turns Cl into Cl⁻. Hold about 2 seconds.

Upgrade (Revision 4): The three particles are large (about 160 px) and their column lines are 44 px in red, slate and blue. The line sits in a framed memory card (hand lettering, 46 px): red "Protons pick the element," slate "neutrons pick the isotope," blue "electrons pick the charge." The three small replays run on the nuclide builder with their readouts changing (protons 17 to 18, neutrons 18 to 20, electrons 17 to 18), each ringed by a pen ring as it plays.

### 10. stable and unstable isotopes
> Isotopes can also differ in another way. Carbon-twelve and carbon-thirteen are stable, but carbon-fourteen is unstable, or radioactive. Sooner or later, its nucleus breaks down and gives out **radiation**. Why? Inside a nucleus, the positive protons repel each other. A very short-range attraction, called the strong nuclear force, holds all the protons and neutrons **together**. Neutrons add that attraction without adding any repulsion. Small nuclei are stable with roughly equal numbers of protons and neutrons, while heavy ones need extra neutrons, like lead-two-hundred-and-eight, with eighty-two protons and a hundred and twenty-six **neutrons**. With too many or too few neutrons, a nucleus is unstable. What it gives out when it breaks down is for a later **video**.

Visual: board clears to the stability strip: three carbon nuclei "¹²₆C", "¹³₆C", "¹⁴₆C" (6 protons each; 6, 7, 8 neutrons), tags "stable", "stable", "radioactive". On "radiation" the carbon-14 nucleus flickers and a small burst mark leaves it (no particle named). Staged, one mechanism at a time (Revision 2): on "Why?" the three-nucleus strip shrinks to a small dim row at the top (the carbon-14 tag stays legible) and only the carbon-12 nucleus is carried forward. On "together" the carbon-12 nucleus enlarges: short red double-headed arrows between protons (tag "protons repel"), and a soft ink outline around all nucleons (tag "strong nuclear force: attracts all nucleons, very short range"). On "Neutrons add" (same sentence group) the grey neutrons pulse inside the outline. On "Small nuclei are stable" the enlarged nucleus fades out (a small kept tag "protons repel; strong force holds; neutrons add attraction" stays), and on "a hundred and twenty-six neutrons" a small N against Z sketch draws in its place: a curve starting along the "N = Z" line for small Z and bending above it, with the point "lead-208: 82 protons, 126 neutrons" marked; tag "band of stability". On "video" a grey chip "decay types and equations: later" writes and the carbon-14 tag glows. At most one mechanism (strip, enlarged nucleus or N against Z sketch) is full size at any moment; if the build cannot stage this at these cues, cut the spoken lead example (the reserve cut) and keep its labelled point silent on the sketch.

Upgrade (Revision 4): The three carbon nuclei are about 200 px each with their tags at 38 px ("stable" in dark ink, "radioactive" in red). The top row stays solid in dark ink when it shrinks (it is not dimmed). On "the positive protons repel each other" a red hand tag "push apart" writes on the red arrows. On "holds all the protons and neutrons together" an ink hand tag "strong force: holds" writes on the outline. On "Neutrons add that attraction without adding any repulsion" a slate hand tag "glue, no push" writes with a pen ring round a neutron. The N against Z sketch has axis labels at 30 px and its lead point labelled at 34 px, with a pen arrow from the "N = Z" line up to the curve tagged "extra neutrons". The last chip is dark ink.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Magnesium-twenty-four two plus and magnesium-twenty-five two plus both have atomic number twelve. State the number of protons, neutrons and electrons in each, and identify how the two particles are related. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Two particles are represented by ²⁴₁₂Mg²⁺ and ²⁵₁₂Mg²⁺. (a) State the number of protons, neutrons and electrons in each particle. (b) Identify the relationship between the two particles." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no atom model, no counters).

Upgrade (Revision 4): The card text is 38 px. From the first frame the card's right side carries the painted magnesium ribbon (`y11c-sample-magnesium-ribbon-v1.png`, about 280 px wide), untagged. Nothing answer-bearing.

### 12. feedback 1 (brief)
> Both have twelve protons, since that's the atomic number, and both have ten electrons, because two plus means two electrons were **lost**. The neutrons differ. Twenty-four minus twelve is twelve, and twenty-five minus twelve is **thirteen**. Same element with different neutrons, so they're isotopes, and both are ions with the same **charge**. Fourteen electrons is the classic slip. A positive charge means electrons were lost, not **gained**.

Visual: card shrinks to the top; a two-row table writes: on "lost" "protons 12, 12" and "electrons 12 − 2 = 10, 10" ("2+" in the card underlined). On "thirteen" "neutrons 24 − 12 = 12; 25 − 12 = 13". On "charge" "(b) isotopes of magnesium (same Z, different neutrons), both 2+ ions". On "gained" a chip "electrons = 12 + 2 = 14" fades in and is crossed (caption "positive: electrons lost"). Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "²⁴₁₂Mg²⁺ | ²⁵₁₂Mg²⁺ | Z = 12, charge 2+". The table cells are 44 px with the particle words in red, blue and slate. On "they're isotopes" the answer "(b) isotopes, both 2+ ions" is framed in green with a tick. On "gained" the crossed chip is struck in red with a red hand tag "positive: electrons lost".

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A particle has sixteen protons, eighteen neutrons and eighteen electrons. Write its nuclide notation, including its charge, and name the element. Pause here to answer.

Visual: `QuestionCard`: "A particle contains 16 protons, 18 neutrons and 18 electrons. Write the nuclide notation for this particle, including its charge, and name the element." A small coded periodic strip (boxes 1 to 18, numbers and symbols) sits beside the card, as a data sheet would provide. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no box highlighted).

Upgrade (Revision 4): The card text is 38 px, and the periodic strip (boxes at 30 px or more) sits on the card's right side from the first frame as its picture, as a data sheet would. No sample is pictured, because a picture of the element would give the answer away.

### 14. feedback 2 (brief)
> Sixteen protons makes it element sixteen, **sulfur**. The mass number is sixteen plus eighteen, **thirty-four**. It has two more electrons than protons, so its charge is two **minus**. So it's sulfur-thirty-four, with thirty-four on top, sixteen below, and two minus at the top right. Writing fifty-two on top is the slip. The mass number counts the nucleus only, never the **electrons**.

Visual: card shrinks to the top. On "sulfur" box 16 "S" glows in the strip, row "Z = 16: sulfur". On "thirty-four" row "A = 16 + 18 = 34". On "minus" row "charge = 16 − 18 = −2", and the label "³⁴₁₆S²⁻" builds number by number. On "electrons" a chip "A = 16 + 18 + 18 = 52" fades in and is crossed (caption "A counts protons and neutrons only"). Hold about 1 second.

Upgrade (Revision 4): A navy givens strip sits under the shrunken card: "16 protons | 18 neutrons | 18 electrons". Each row is 52 px. On "sulfur" box 16 is framed in amber. When the label "³⁴₁₆S²⁻" is complete it is framed in green with a tick. On "electrons" the crossed chip is struck in red with a red hand tag "A counts the nucleus only".

### 15. handoff: whole numbers, and 35.45
> So a mass number is always a whole number, because it counts whole particles. But look up chlorine on the periodic table, and its mass is listed as thirty-five point four five. Not thirty-five, not thirty-seven, and not a whole number at **all**. Next time, we'll see why. It's an average over both isotopes, weighted by how common each one **is**.

Visual: board clears to the two chlorine nuclei from scene 8, labelled "³⁵Cl" and "³⁷Cl". On the second sentence a coded periodic-table box for chlorine draws between them: "17", "Cl", "35.45". On "all" "35.45" is ringed and a "?" writes beside it. On "is" a faint balance beam sketch draws under the two nuclei, unequal, with "?" weights (no numbers), and the chip "Why is relative atomic mass a weighted average?". Hold about 2 seconds. This is the final frame (v09 opens on it).

Upgrade (Revision 4): The two nuclei (about 220 px each) are on the board from the first frame of the scene. On "not a whole number at all" the ring round "35.45" is an amber pen ring. Nothing else is added, so the final frame is exactly as described; its "faint" balance beam is drawn as a solid dark-ink line.

### 16. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Proton +1, mass 1; neutron 0, mass 1; both in the nucleus. Electron −1, mass ≈ 0.
2. Z (bottom) = protons: it fixes the element. A (top) = protons + neutrons.
3. Neutrons = A − Z. Electrons = Z − charge.
4. Isotopes: same Z, different neutrons. Ions: same protons, different electrons.
5. Too many or too few neutrons makes a nucleus unstable (radioactive).

Memory aid (framed card beside the notes, hand lettering, red, slate and blue as in scene 9): *Protons pick the element, neutrons pick the isotope, electrons pick the charge.* Notes 34 px in the role colours; no paragraphs. The whole notes scene runs 45 s.

## Teaching checks

- **Does it explain causes?** Why Z names the element: the proton count is what differs between elements (3). Why A ignores electrons: they add almost no mass (4). Why ions have a charge: electrons are gained or lost while protons stay (5). Why isotopes react the same way: same electrons (8). Why some nuclei are unstable: proton repulsion against the short-range strong force, balanced by neutrons (10).
- **Misconceptions addressed:** charge changes protons (5); add electrons for a positive ion (crossed in 12); isotopes are different elements (8); isotopes react differently (8); mass number includes electrons (crossed in 14); periodic-table decimal equals a mass number (15).
- **One idea at a time:** particles (2), Z (3), A (4), electrons and charge (5), a full decode (6), isotopes (7, 8), summary aid (9), stability (10).
- **Video makes it easier:** each number glows and draws a leader line to exactly the particles it counts while the counters tick (3 to 6); the extra electron flies in while the protons stay ringed (5); the two chlorine nuclei sit side by side with the extra neutrons pulsing (8); the forces sketch shows repulsion and the strong-force outline at once (10).
- **Response opportunity:** prediction (3 s); two unseen tasks, one decode and one encode, with all numbers on the card and a periodic strip for A2; 10 s each; nothing answer-bearing. Feedback about 32 s and 28 s.
- **Avoided double teaching:** Stage 5 shells shown, not taught; energy levels left to v10; relative atomic mass left to v09; decay to v17 and v18.
- **Syllabus coverage:** `C1-IQ2-01`: periodic-table position (3, 14, 15), distribution of electrons, protons and neutrons (2 to 8), representation of symbol, atomic number and mass number (1, 3, 4, 6, 14), stable and unstable isotopes (10).
- **Out of scope by design:** decay types, nuclear equations, half-life; relative atomic mass calculations; electron configurations.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style; data from pack candidate 2).** "Two particles are represented by ²⁴₁₂Mg²⁺ and ²⁵₁₂Mg²⁺. (a) State the number of protons, neutrons and electrons in each particle. (b) Identify the relationship between the two particles."
Model answer: (a) ²⁴Mg²⁺: 12 protons, 12 neutrons, 10 electrons; ²⁵Mg²⁺: 12 protons, 13 neutrons, 10 electrons. (b) They are isotopes of magnesium (same atomic number, different numbers of neutrons), and both are 2+ ions. Classic mistake (crossed): "14 electrons" (adding two electrons for a positive charge).

**Attempt 2 (scene 13; original, HSC style).** "A particle contains 16 protons, 18 neutrons and 18 electrons. Write the nuclide notation for this particle, including its charge, and name the element."
Model answer: Z = 16, so sulfur; A = 16 + 18 = 34; charge = 16 − 18 = −2; ³⁴₁₆S²⁻ (a sulfide ion of sulfur-34). Classic mistake (crossed): "A = 52" (counting electrons in the mass number).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Chlorine-35 | Z 17; A 35; neutrons 18; electrons 17 (atom), 18 (Cl⁻) | 1, 3 to 5, 7, 8, 15 |
| Argon | Z 18 | 3 |
| Electron relative mass | ≈ 1/1836 (0.000545) | 2, key note 1 |
| Iron (site) | ⁵⁶₂₆Fe²⁺: 26 protons; 30 neutrons; 24 electrons; 26 − 24 = +2 | 6 |
| Chlorine-37 | Z 17; neutrons 20; electrons 17 | 7, 8, 15 |
| Carbon isotopes (site) | ¹²C 6 n stable; ¹³C 7 n stable; ¹⁴C 8 n radioactive | 10, key note 4 |
| Lead-208 | 82 protons; 126 neutrons; N:Z ≈ 1.54 (screen "about 1.5 : 1") | 10 |
| A1 | ²⁴Mg²⁺ 12, 12, 10; ²⁵Mg²⁺ 12, 13, 10; crossed 14 electrons | 11, 12 |
| A2 | 16 p, 18 n, 18 e: ³⁴₁₆S²⁻; crossed A = 52 | 13, 14 |
| Handoff | chlorine's periodic-table value 35.45 (site value; not calculated here) | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 35 − 17 = 18; 37 − 17 = 20; 17 + 1 = 18 electrons in Cl⁻.
- 56 − 26 = 30; 26 − 2 = 24; 26 − 24 = 2.
- 24 − 12 = 12; 25 − 12 = 13; 12 − 2 = 10; wrong 12 + 2 = 14.
- 16 + 18 = 34; 16 − 18 = −2; wrong 16 + 18 + 18 = 52.
- 126 ÷ 82 = 1.537; 208 − 82 = 126.
- 1 ÷ 1836 = 0.000545 (less than a thousandth).
- Electron rings for chlorine (Stage 5 picture): 2, 8, 7 (atom); 2, 8, 8 (Cl⁻).

## Memory aid check

- **"Protons pick the element, neutrons pick the isotope, electrons pick the charge."** Written for this lesson. Meaning, as said in scene 9: changing the number of each particle changes exactly one property of the label. Assumptions checked: changing protons changes Z and so the element (true); changing neutrons at fixed Z gives another isotope of the same element (true); changing electrons at fixed Z changes the charge, giving an ion (true). Limits: changing protons also changes the mass number, and changing neutrons changes A; the aid names what each change identifies, not everything that changes. It helps new cases: A1 (neutrons differ, so isotopes) and A2 (protons name the element; electrons give the charge). Introduced after isotopes and ions have both been shown.
- **Considered, not used:** "PEN" style acronyms (protons, electrons, neutrons) that only list the particles; the site's "mass number on top, atomic number below" (kept as screen layout, not an aid).

## Narration length estimate

Revision 1 count (5 November; build parser rules, scenes joined with a space): **5,900 characters**, 16 scenes (per-scene counts in Review notes). At 13.3 characters per second the speech is about 444 s; add about 2 s for packing the nucleus (scenes 3, 4), 2 s for the scene 9 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 86 s): **about 530 s** (8.8 minutes), inside the band and under the cap. Reserve trims: scene 2's last two sentences (keep the "not to scale" tag), scene 10's lead example (keep the sketch point silent), scene 1's last sentence.

Revision 4 (12 Nov 2026): narration unchanged (5,885 characters, 16 scenes). The notes scene is now 45 s in all (it was about 60 s), so the estimate falls from about 530 s to about 515 s.

## Scene list and build ids

Lesson key `c-y11-m1-v08` (route chem-y11-m1-v08; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v08`.

In order (16 scene headings, all `### N.`): hook, particles, atomic-number, mass-number, ions, iron, prediction, isotopes, memory-line, stability, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 camera continue (the label moves up as the atom draws); 2 to 5 camera continue (one atom model throughout); 5 to 6 clear change; 6 to 7 clear change back to chlorine; 7 to 8 camera continue; 8 to 9 camera pull back; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m1-v08-learning-review.md`, `checks/c-y11-m1-v08-science-check.md`.

Revision 4: key-notes hold is 45 s in all. Transitions 1 to 2, 2 to 3 and 4 to 5 are now board changes (particle board, builder, ion board), not one continuous camera.

## Assets

Have: `public/assets/chemistry/c1-salt-jar-crystals-v1.png` (scene 5 thumbnail, continuity with v06 and v07).

Need: no new plates. Atoms, nuclei, particles, periodic-table cells and the stability sketch are abstract models and stay coded (owner rule: particle diagrams coded, HSC conventions).

Coded: nuclide labels, atom model and rings, particle counters, charge meter, reference table, beam sketch, periodic strip and cells, isotope pair, forces sketch, N against Z sketch, rows, chips, attempt cards, countdowns, key notes board.

Revision 4 (12 Nov 2026). Existing plates newly used (confirmed by file listing, not re-inspected): `public/assets/chemistry/y11c-gas-jar-chlorine-v1.png` (scene 1 anchor), `c5-solid-lump-v1.png` (scene 6, tagged "iron"), `y11c-sample-magnesium-ribbon-v1.png` (attempt 1 card); `c1-salt-jar-crystals-v1.png` is now a full plate in scene 5, not a thumbnail. New plate requests: none. Atoms, nuclei, particles and the periodic strip stay coded.

## Codex asset brief

None (no plates requested). Build note for the explainer: one reusable `NuclideAtom` component (props: Z, A, charge, ring capacities 2, 8, 8 for the Stage 5 picture, cue times for packing protons, neutrons and electrons, highlight targets for each number's leader line) would serve v08 scenes 2 to 8, 12 and 15, and v09's isotope nuclei.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry of every learner-visible claim: particle charges, relative masses and locations; Z fixes the element and the periodic order; A = protons + neutrons; electrons = Z − charge; isotopes have essentially the same chemistry; carbon-12 and carbon-13 stable, carbon-14 radioactive; lead-208 stable with 82 protons and 126 neutrons; the strong nuclear force description.
3. Confirm the memory aid's assumptions and stated limits.
4. Confirm both attempt cards are original, carry every number needed, and show nothing answer-bearing (A2's periodic strip has no highlighted box).
5. Confirm the syllabus quote matches the ledger.
6. Confirm no person, hand or face is drawn or requested, and no scientist is named.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("sulfur", "colour").
8. Confirm the narration character count by script.
9. Confirm the opening frame equals v07's final frame and the final frame matches v09's opening.

Revision 4 (visuals only), also check: the narration lines are identical to Revision 3; every phrase quoted after "On" in an "Upgrade (Revision 4)" paragraph is in that scene's narration, in spoken order within the paragraph; the chlorine gas jar reads as pale yellow-green chlorine and nothing on screen invites handling it; the struck chip "electrons = 26 + 2 = 28" is the stated slip; the builder readouts (17, 18, 17; 18 protons for argon; 20 neutrons; charge 0 to −1) agree with "Numbers used"; the attempt card pictures give nothing away; every plate named exists.

## YouTube metadata (draft)

Title: Nuclide Notation: Protons, Neutrons, Electrons, Isotopes and Ions | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson13.sa.html

What do the 35 and the 17 on chlorine actually mean? Learn the three subatomic particles, why the atomic number decides the element and its place in the periodic table, how the mass number counts protons plus neutrons, how to count electrons in an ion like Fe²⁺ or Cl⁻, how isotopes differ from ions, and why some isotopes such as carbon-14 are unstable. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"investigate the basic structure of stable and unstable isotopes by examining:
- their position in the periodic table
- the distribution of electrons, protons and neutrons in the atom
- representation of the symbol, atomic number and mass number (nucleon number)"

Previous: Percentage composition from a formula. Next: Relative atomic mass as a weighted average.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Stability depth (learning review).** Scene 10 is the longest teaching beat (strong nuclear force and the neutron balance). If the review finds it crowds the main question, keep the carbon strip and one cause sentence, and leave the lead example to v17.
- **2. Site note 1 (root).** Log the boilerplate sentence in lesson 13's misconception card if accepted.
- **3. Site link.** The description links lesson13 (nuclide notation); isotopes are on lesson14. Confirm which page.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the leader-line and counter motion make each number's meaning visible; is "electrons = Z − charge" clear for negative ions, where it adds; is scene 10 at the right depth for "introduce stability"), then the science check and Codex error check.
- Every counter value must be computed from Z, A and charge props, never typed.
- Checker output (5 November): narration 5,900 characters; per scene (1 to 16): 397, 499, 412, 313, 531, 411, 182, 446, 303, 759, 239, 429, 177, 372, 340, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (6 November 2026, brief 177 repairs)

Findings from `../checks/c-y11-m1-v08-learning-review.md` and `../checks/c-y11-m1-v08-science-check.md` (status.md, "Codex hand-in: brief 177").

1. Scene 10 (should fix): the carbon strip shrinks to a dim row on "Why?", the enlarged carbon-12 nucleus carries "together" and "Neutrons add", then fades on "Small nuclei are stable" (kept tag) and the N against Z sketch replaces it on "a hundred and twenty-six neutrons". At most one mechanism full size at a time; if the build cannot stage this, cut the spoken lead example (existing reserve cut) and keep its point silent. No speech change.

Narration: 5,900 characters (joined parser count: `### N.` headings, lines starting "> " joined with a space, `**` removed; 0 against Revision 1's 5,900), about 530 s at 13.3 characters per second with the Revision 1 holds unchanged. Inside 5,500 to 6,800 and under 570 s. No em dashes.

## Revision 3 (7 Nov 2026)

- Brief 186 error check (`checks/c-y11-m1-v08-rev2-error-check.md`): 0 blockers, 0 should fix. Nothing to resolve.
- Headline count restated as the sum of scene strings: 5,885 characters over 16 scenes (the earlier 5,900 included the 15 joining spaces). No speech, visual or timing change; the stated duration estimate is kept (it is about 1 s conservative).
- Bold cues quoted in spoken order; no em dashes (rechecked 7 November).

## Revision 4 (12 Nov 2026)

Visual upgrade to `../maths-visual-standard.md` and the build gate. Visuals only: no narration line changed (checked by hash against Revision 3), so the brief 236 voicing stands.

Findings: the latest error check (`checks/c-y11-m1-v08-rev2-error-check.md`) was clean; nothing to resolve.

Changes:
- New section "Visual upgrade (Revision 4)"; each scene gains an "Upgrade (Revision 4)" paragraph.
- Anchor: Revision 3 had no painted object. A painted jar of chlorine gas now arrives at about 5 s; the jar of salt is a full plate in scene 5; a lump of iron stands beside the worked example in scene 6.
- Simulation: the nuclide builder, one atom model with live proton, neutron, electron and charge readouts and a computed symbol (scenes 3, 5, 8 and 9).
- Cuts: scene 2 (particle board) and scene 5 (ion board) are new stages. Before, one atom model ran about 187 s through scenes 1 to 5.
- Hand tags (two or three) and a pen mark in scenes 1 to 6, 8 and 10; the memory line is a framed card in scene 9.
- Worked example (scene 6): givens card, results framed in green, and a new crossed slip "electrons = 26 + 2 = 28".
- Faint, dimmed and ghost items are drawn solid; "not counted" is a slate cross.
- Question cards: attempt 1 gains the magnesium ribbon; attempt 2 keeps the periodic strip as its picture (a sulfur sample would give the answer away); feedback scenes gain navy givens strips and green frames.
- Key notes: four long items cut to five one-line bullets with the framed memory card; the notes scene is 45 s. Left the board: the 1/1836 figure and the "about equal numbers" detail of stability (kept in scenes 2 and 10).

New plate requests: none.

Joins: the opening is v07's final frame, unchanged (the chlorine jar arrives after it). The final frame (scene 15) is unchanged, so v09's opening holds.

Counts: 5,885 characters, unchanged; about 530 s to about 515 s.

Calls for root: (1) the chlorine gas jar as the anchor (a real but hazardous gas, shown sealed and only as a picture); (2) the new crossed slip in scene 6; (3) no simulation engine fits, so the builder is coded in the lesson.
