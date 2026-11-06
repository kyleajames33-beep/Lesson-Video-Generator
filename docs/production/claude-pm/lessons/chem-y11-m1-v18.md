# Year 11 Chemistry M1 V18: Balanced nuclear equations. How do we balance a nuclear reaction? (design)

Status: Revision 2 (7 Nov 2026): brief 179 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing. Previously Revision 1 (5 November 2026): first design.

Narration 5,944 characters (sum of scene strings), 18 scenes, about 527 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighteenth video of Year 11 Chemistry (2017 syllabus), Module 1; second of two nuclear videos (v17 radiation types and radioisotopes, v18 balanced nuclear reactions). It builds on `chem-y11-m1-v08.md` (nuclide notation, mass number and atomic number, isotopes) and `chem-y11-m1-v17.md` (what alpha, beta and gamma are, the nuclear change for each in words, the six named radioisotopes) without re-teaching them. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout: task strip, equation strip, grouped givens, one stage at a time), `bio-y11-fa1-v05.md` (plates), `chem-y11-m1-v17.md` (series conventions). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m1-v18` in `../../programme/chem-y11-route-inputs.json`. Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson20.sa.html` (SHA256 `9b3f77c9e3c1f1dbd121035c1fa3f627ac9da932adf48f0bfa9d14233b2db378`, recomputed, matches; used: `l20-balanced-nuclear-equations-title` (the A and Z rule, the U-238 alpha and C-14 beta equations with their checks, the "beyond the syllabus" note on fission and fusion), the key-term "transmutation", the Th-234 beta worked example (method: identify the change, new Z, equation, check both totals), the misconception "forgetting to balance the atomic number", the lock-in Co-60 beta task, the I-131 spot-the-error item (mass number wrongly dropped by 1), and `l20-natural-and-human-made-radioisotopes-title` for Co-60's origin by neutron bombardment of Co-59; `l20-half-life-title` is later and not used). Site corrections file checked: no logged item touches lesson 20.

Owner rules applied: as v17 (one learner question; no people, hands or faces; real objects as painted plates, reused from v17; nuclei, particles and equations coded in the HSC convention; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Calculation layout: each worked equation has a short task strip, the equation strip and the two balance rows (top and bottom) as grouped givens; one row is worked at a time; only the current equation stays bright.

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ2-05`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "investigate the properties of unstable isotopes using natural and human-made radioisotopes as examples, including but not limited to:"
  - "types of radiation" (v17; used here)
  - "types of balanced nuclear reactions" (this video)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 37)

**Boundary:** opens on v17's final frame. Recalls v08's mass number and atomic number in one sentence each. Teaches the two conservation rules (total nucleons and total charge are the same on both sides) and why they hold; the two numbers for each particle (alpha, beta, gamma, neutron, proton); balancing alpha decay (U-238 to Th-234), beta decay (C-14 to N-14, with the neutron-to-proton cause), gamma emission (Tc-99m); the pattern (alpha: top −4, bottom −2; beta: top unchanged, bottom +1; gamma: no change) and its link to the periodic table; a human-made reaction (Co-59 + neutron → Co-60 in a reactor); finding an unknown particle (N-14 + neutron → C-14 + proton, natural); what changes in each nucleus, and transmutation. Stops before half-life and its calculations (route stop), fission and fusion (site: beyond the syllabus; author note b), positron emission and electron capture (author note c), and energy in nuclear reactions.

## Decisions

- **Learner question (route wording kept).** "How do we balance a nuclear reaction?" The answer, in order: track two numbers (2); give every particle its two numbers (3); make both rows match, then read the element from the bottom number (4, 6, 7); the pattern for each decay (8); the same rule for a human-made reaction and for an unknown particle (9, 10); what changes in the nucleus (11).
- **Opening frame (equals v17's final frame).** ²³⁸₉₂U at the left with an orange alpha cluster labelled ⁴₂He leaving to the right and the remaining nucleus labelled "?"; a faint arrow line "²³⁸₉₂U → ? + ⁴₂He" with its top and bottom numbers glowing amber; under it a faint second line "⁵⁹Co + neutron → ⁶⁰Co"; the chip "Next: how do we balance a nuclear reaction?". Scene 4 completes the first line; scene 9 rewrites the second in full notation.
- **Why the rules hold (cause before rule).** The top number counts nucleons; in these reactions nucleons are rearranged (a neutron can become a proton), never created from nothing, so the total is conserved. The bottom number of a nucleus is its proton count and so its charge; charge is never created from nothing, so the bottom total is conserved once every particle's bottom number is its charge. This explains the beta particle's −1 without a separate rule.
- **Particle notation (site table and key terms).** Alpha ⁴₂He (the site's notation; α accepted), beta ⁰₋₁e, gamma written γ alone (root decision 26; it adds 0 to both rows, shown as "+ 0" in the balance rows only), neutron ¹₀n, proton ¹₁p. Shown as five cards, each with its reason ("not a nucleon: top 0"; "charge −1: bottom −1").
- **Worked examples (site numbers).** U-238 alpha (site), C-14 beta (site), Tc-99m gamma (v17's isotope; site lists it as gamma decay). The site's Th-234 beta example is replaced by C-14 because C-14 is a v17 isotope and the site uses it in its main equation; Th-234's method (identify the change, new Z, equation, check) is kept as the stage order.
- **Human-made reaction (route stop: "a human-made reaction").** Co-59 + neutron → Co-60 (site: "neutron bombardment of cobalt-59 in a nuclear reactor"; v17 scene 9). It shows a reaction with two things on the left, and that adding a neutron keeps the element.
- **Unknown particle (natural).** ¹⁴₇N + ¹₀n → ¹⁴₆C + ¹₁p (v17 author note a: how carbon-14 forms in the upper atmosphere). It teaches the "find the missing particle" skill on a reaction students already met in words.
- **Memory aid:** "Top counts nucleons, bottom counts charge." Checked in "Memory aid check".
- **Attempts (original wording, HSC style).** A1: alpha decay of americium-241 (v17's smoke-alarm isotope); write the balanced equation and identify the new nuclide (3 marks), with a periodic table extract on the card. Answer ²³⁷₉₃Np. Crossed: "²³⁷₉₁Pa" (four taken off both numbers). A2: beta decay of cobalt-60 (v17; site lock-in task, reworded); write the balanced equation and name the element formed (3 marks), with an extract. Answer ⁶⁰₂₈Ni. Crossed: "⁶⁰₂₆Fe" (one taken off the bottom "because an electron left").
- **Mistake scene:** scene 12 is a short trap scene, kept because the site names this misconception and both attempts test it: balancing only the top row (the site's I-131 spot-the-error item, mass number dropped by 1, is the same slip in reverse and is named in scene 12's visual).
- **Handoff (route next: `chem-y11-m1-v19`, "How do ion charges determine a neutral inorganic formula?").** Scene 17 contrasts nuclear and chemical change: chemical reactions leave the nucleus alone and move only electrons, so a sodium atom that loses one electron becomes Na⁺ and a chlorine atom that gains one becomes Cl⁻. Final frame (Final frame section) sets up v19.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l20-balanced-nuclear-equations-title`, beta check line: "Atomic numbers 6 = 7 + (−1) ✓". Correct; no change. Noted only because the narration uses the same check.
  2. `l20-natural-and-human-made-radioisotopes-title`, Tc-99m row: "produced from a molybdenum-99/technetium-99m generator in hospitals". Acceptable, but the molybdenum-99 itself is made in a reactor (v17 note a). Suggest "from molybdenum-99 (made in a reactor), using a generator in the hospital". Minor.
  3. Drill 2 (Po-210) and the Ra-226 fill-the-blanks use "₂He" for the alpha particle; consistent with the main text. No change.
  No errors found that affect this design.
- **Cause chain taught, in order:** (1) a nuclear equation must conserve nucleons (top) and charge (bottom) because neither is created from nothing (2); (2) each particle's two numbers come from its nucleons and charge (3); (3) alpha removes 4 nucleons and 2 charges, so the new nucleus has 2 fewer protons (4); (4) in beta a neutron becomes a proton and an electron leaves, so the top stays and the bottom rises by 1 (6); (5) gamma removes only energy (7); (6) the bottom number names the element, so alpha moves it back two places and beta forward one (8); (7) the same two rules balance a human-made reaction and find an unknown particle (9, 10); (8) changing the proton number is transmutation (11).
- **Entry knowledge:** v08 (nuclide notation, mass number, atomic number, isotopes, protons and neutrons); v17 (alpha, beta and gamma: what each is, its charge and relative mass, the nuclear change in words; U-238, C-14, Co-60, Tc-99m, Am-241; cobalt-60 made from cobalt-59 in a reactor; carbon-14 made from nitrogen in the atmosphere); finding an element from its atomic number in the periodic table (v08, v12).
- **Learner-visible vocabulary:** nucleons (protons and neutrons, the particles in the nucleus, 2); nuclear equation (an equation showing how a nucleus changes, 1, 2); conserved (the same total before and after, 2); transmutation (one element changing into another because its number of protons changes, 11). Mass number and atomic number are recalled (v08), not re-taught.
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus reused plates):** **nucleus** (v17's red and grey cluster, smaller); **nuclear equation strip** (nuclides in HSC notation, arrow, "+" signs); **balance rows** (two tally strips under the equation: the top row in amber "nucleons", the bottom row in teal "charge"; each side's sum writes in, and a tick lands when they match); **particle cards** (alpha, beta, gamma, neutron, proton, each with its two numbers and the reason); **element strip** (a short run of the periodic table, symbols with atomic numbers; the matching box lights); **neutron-to-proton swap** (v17's beta animation, reused); **change table** (decay type, top change, bottom change, what happens in the nucleus); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; task strip under it; the equation strip across the upper middle; the balance rows directly under it; the nucleus or plate at the left; the element strip or cards at the right.
- **Anchor (Revision 2).** The painted uranium ore (`y11c-uranium-ore-v1.png`, v17's plate, about 420 px tall, uniform scale) enters in scene 1 at about 8 s beside the opening nucleus: the question "which element is left?" is asked about a real rock. It returns as a thumbnail when thorium is named (scene 4).
- **Simulation (Revision 2): the nucleus counter.** A coded nucleus (red protons, grey neutrons) with two live readouts beside it, "nucleons (top)" in amber and "charge (bottom)" in teal (52 px), and a pointer on the element strip that slides to the box matching the charge readout. Each emission plays on it: alpha (scene 4: 238 → 234, +92 → +90, pointer U → Th), beta (scene 6: 14 stays, +6 → +7, pointer C → N), gamma (scene 7: both readouts hold, "same" pulses) and, in scene 8, a three-step run of the real uranium-238 chain (U-238 α → Th-234 β → Pa-234 β → U-234), so the student watches the pointer jump back two, then forward one, then forward one.
- **Colour roles (Revision 2, fixed for the whole video):** top numbers, the top balance row and the nucleon readout amber; bottom numbers, the bottom row and the charge readout teal; protons red; neutrons grey; electrons and beta particles blue; alpha clusters orange; gamma violet; element strip ink with the lit box gold; givens strips navy; framed answers in a dark-ink box with a green tick; crossed slips red strike with a red hand tag; hand-font teacher tags take the colour of the row they mark (amber on tops, teal on bottoms, red on slips).
- **Type sizes (Revision 2, 1080p):** the current equation strip 64 px; the current balance row 52 px; live readouts about 52 px; particle cards and supporting lines 32 to 36 px; hand-font tags at least 30 px; nothing a student must read below 26 px (grey source tags 26 px). All text above the bottom 12% of the frame.

Author notes (not learner copy):
(a) Nuclide data (NNDC NuDat 3; site agrees where given): U-238 (Z 92) α to Th-234 (Z 90); C-14 (Z 6) β⁻ to N-14 (Z 7); Tc-99m (Z 43) isomeric transition to Tc-99 (140.5 keV γ); Co-59 (Z 27, stable, 100% natural cobalt) + n to Co-60 (Z 27); Co-60 β⁻ to Ni-60 (Z 28), followed by 1.17 and 1.33 MeV γ rays from the excited Ni-60; Am-241 (Z 95) α to Np-237 (Z 93); N-14 + n → C-14 + p (the cosmic-ray reaction). Element numbers checked against the IUPAC periodic table: Th 90, Pa 91, U 92, Np 93, Pu 94, Am 95; Fe 26, Co 27, Ni 28, Cu 29; C 6, N 7, O 8.
(b) Fission and fusion: the site marks them "Beyond the syllabus" for Module 1. One grey tag in scene 8 says "the same two rules balance every nuclear reaction"; no fission example is shown.
(c) Positron emission (⁰₊₁e) and electron capture occur in proton-rich nuclei; not taught (v17 note b).
(d) Gamma notation (Revision 2, root decision 26): written γ alone everywhere on screen. The balance rows may still show "+ 0" for γ so the sums are visible; no ⁰₀γ symbol is printed.
(e) Charge bookkeeping: the bottom row conserves nuclear charge plus the charge of emitted particles. The atom's orbital electrons are ignored in nuclear equations (the daughter is briefly an ion); not taught.
(f) "Technetium-99m": the "m" means metastable, an excited nuclear state that lasts long enough to be used. Learner copy: "a nucleus with extra energy".
(g) Pronunciations: "nucleons" (NEW-klee-onz); "transmutation" (tranz-mew-TAY-shun); "thorium" (THOR-ee-um); "neptunium" (nep-TEW-nee-um); "americium" (am-er-ISS-ee-um); "technetium-ninety-nine M"; numbers spoken in words in the narration.

Main question: *How do we balance a nuclear reaction?*
Entry knowledge: v08, v12, v17.
Stops after: the two conservation rules, notation for five particles, alpha, beta and gamma equations, a human-made neutron-capture reaction, an unknown particle, what changes in the nucleus. No half-life, fission, fusion or positron emission.
Handoff: chem-y11-m1-v19, ion charges and neutral formulae.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v17): protons red; neutrons grey; electrons and beta particles blue; alpha particles orange (a 2p2n cluster); gamma rays violet wavy arrows; the top row of every nuclide and the top balance row amber ("nucleons"); the bottom row and the bottom balance row teal ("charge"); the element strip ink with the matching box lit; crossed chips red strike. Screen notation: ²³⁸₉₂U, ⁴₂He, ⁰₋₁e, γ (alone), ¹₀n, ¹₁p (mass number top left, atomic number bottom left). Colour roles and type sizes as in Decisions (Revision 2).

### 1. hook: which element is left?
> Last time, we met the three kinds of radiation. Now let's write down exactly what happens. When uranium-two-thirty-eight gives out an alpha particle, the nucleus left behind is a different **element**. But which one? To find out, we track two numbers on each side of the arrow, and make them **match**. That's how we balance a nuclear **reaction**.

Visual: opens on v17's final frame (Decisions). On the second sentence the faint arrow line brightens to full ink (64 px) and the painted uranium ore (`y11c-uranium-ore-v1.png`, about 420 px tall) slides in at the far left, solid, with an amber hand tag "uranium-238 is in this rock" and a pen arrow from the rock to the "²³⁸₉₂U" nucleus. On "element" the "?" nucleus pulses, a red pen ring circles it and a hand tag writes "a different element: which?". On "match" two thin bands draw under the arrow line, an amber band under the top numbers and a teal band under the bottom numbers, each with an empty "=" between its left and right ends. On "reaction" the heading writes on: "Balancing nuclear equations: make both rows match". The faint cobalt line slides to the bottom right and dims (it returns in scene 9).

### 2. two numbers, two rules
> Remember nuclide notation. The top number, the mass number, counts the protons and neutrons in the nucleus. Together, they're called **nucleons**. The bottom number, the atomic number, counts the protons, so it's also the charge on the **nucleus**. In a nuclear reaction, nucleons get rearranged, but none appear from nothing, and neither does charge. So the top numbers must add up to the same total on both sides, and so must the bottom **numbers**.

Visual: the uranium nuclide grows at the centre with a small red and grey nucleus beside it. On "nucleons" the top number 238 glows amber and the nucleus's red and grey dots both flash, tag "mass number: protons + neutrons (nucleons)". On "nucleus" the bottom number 92 glows teal and only the red dots flash, tag "atomic number: protons = charge of the nucleus (+92)". On the fourth sentence a chip writes "nucleons and charge: never made from nothing". On "numbers" two rule lines write beside the bands at 44 px: "top: total nucleons the same on both sides" (amber) and "bottom: total charge the same on both sides" (teal), each with a tick; an amber hand tag "count the nucleons" with a pen bracket over 238 and a teal hand tag "count the charge" with a pen bracket under 92. The ore stays as a small solid thumbnail at the top left.

### 3. every particle gets two numbers
> To use this, every particle needs the same two numbers. An alpha particle is a helium nucleus, so it's written as helium, with four on top and two on the **bottom**. A beta particle is an electron. It isn't a nucleon, so its top number is zero, and its charge is minus one, so its bottom number is minus **one**. A gamma ray has neither, so it's zero and **zero**. And a neutron is one on top, and zero on the bottom, because it has no **charge**.

Visual: board clears to a row of particle cards writing in one at a time, each with the v17 particle drawing above. On "bottom" the alpha card: "⁴₂He: 2 protons + 2 neutrons; charge +2". On "one" (second) the beta card: "⁰₋₁e: not a nucleon (top 0); charge −1 (bottom −1)", the −1 glowing teal. On "zero" (third) the gamma card: "γ: no nucleons, no charge (written γ alone; adds 0 and 0)". Hand tags as the cards land: teal "−1 = its charge" with a pen arrow to the beta card's bottom number, violet "nothing to count" beside γ. On "charge" the neutron card: "¹₀n: 1 nucleon, no charge", and a fifth card writes silently beside it: "¹₁p: proton, 1 nucleon, charge +1". The cards shrink into a reference strip at the right edge (kept to scene 10).

### 4. alpha decay: uranium-238
> Let's balance the uranium. On the left, uranium-two-thirty-eight has two hundred and thirty-eight on top, and ninety-two on the **bottom**. On the right, the alpha particle takes four and **two**. So the new nucleus must have two hundred and thirty-eight minus four on top, which is two hundred and thirty-**four**. And ninety-two minus two on the bottom, which is **ninety**. Now, which element has ninety protons? The periodic table says **thorium**. Check both rows. Two thirty-four plus four is two thirty-eight, and ninety plus two is ninety-two. It's **balanced**.

Visual: calculation layout. Task strip: "Alpha decay of uranium-238: find the new nuclide". Equation strip: "²³⁸₉₂U → ? + ⁴₂He" (from scene 1). On "bottom" the left side's numbers fill the bands: amber "238", teal "92". On "two" the alpha card's numbers drop into the right side of the bands: amber "? + 4", teal "? + 2". On "four" the amber row resolves: "238 − 4 = 234" and the "?" takes the top number 234. On "ninety" the teal row resolves: "92 − 2 = 90", and the bottom number 90 writes. The nucleus counter (simulation, Decisions) sits at the left from the scene's first frame, reading "nucleons 238" (amber) and "charge +92" (teal), 52 px. On "four" the orange cluster leaves the counter's nucleus and the nucleon readout ticks 238 → 234; on "ninety" the charge readout ticks +92 → +90. On "thorium" an element strip slides in at the right ("88 Ra, 89 Ac, 90 Th, 91 Pa, 92 U"), the counter's pointer slides from 92 back to 90, the 90 box lights gold, and the "?" becomes "Th": "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He", framed in a dark-ink box; teal hand tag "2 places back" with a pen arrow along the strip. On "Check both rows" the bands write their sums: amber "238 = 234 + 4", teal "92 = 90 + 2". On "balanced" both bands tick and an ink hand tag "both rows" rings the ticks. The counter is relabelled "thorium-234" and the ore thumbnail gains the tag "uranium → thorium".

### 5. prediction (countdown, 3 seconds)
> Quick prediction. Carbon-fourteen gives out a beta particle. What happens to its top number, and to its bottom number? Have a **think**.

Visual: board clears to the equation strip "¹⁴₆C → ? + ⁰₋₁e" with empty bands. Chip "beta decay: top number? bottom number?". On "think" the 3 s `Countdown` ring runs. Nothing else changes.

### 6. beta decay: carbon-14
> The top number stays at fourteen, because the beta particle carries away no nucleons. But the bottom number goes up by **one**. Here's why. Inside the nucleus, a neutron turns into a proton and an electron. The electron leaves as the beta particle, but the new proton stays, so the nucleus now has seven **protons**. Seven protons means **nitrogen**. Check the bottom row. Six on the left, and seven plus minus one on the right, which is also **six**. Charge is conserved.

Visual: task strip: "Beta decay of carbon-14: find the new nuclide". The amber row writes "14 = ? + 0, so ? = 14" on the first sentence. On "one" the teal row writes "6 = ? + (−1), so ? = 7", the "−1" glowing. On the third and fourth sentences a carbon-14 nucleus at the left plays v17's swap: one grey neutron glows and turns red, and a blue dot shoots out labelled "⁰₋₁e"; on "protons" the proton counter ticks from 6 to 7. On "nitrogen" the element strip ("5 B, 6 C, 7 N, 8 O") lights 7 and the equation completes: "¹⁴₆C → ¹⁴₇N + ⁰₋₁e". The swap plays on the nucleus counter: its readouts hold "nucleons 14" (amber, hand tag "same") while "charge" ticks +6 → +7 (teal) on "protons", and the pointer slides one box forward. On "six" the teal band writes "6 = 7 + (−1)" and ticks; the amber band "14 = 14 + 0" ticks; the equation is framed; teal hand tag "the −1 balances it" with a pen ring round the "−1".

### 7. gamma: only energy leaves
> Gamma rays are the easy case. Technetium-ninety-nine M, from our hospital example, has a nucleus with extra energy. That's what the M **means**. When it gives out a gamma ray, both numbers stay the same, so it's still technetium-ninety-**nine**. Only energy **leaves**.

Visual: board clears; `y11c-lead-shielded-vial-v1.png` (from v17, about 340 px tall, solid from the first frame) at the left, the nucleus counter beside it reading "nucleons 99" and "charge +43". Equation strip: "⁹⁹ᵐ₄₃Tc → ⁹⁹₄₃Tc + γ". On "means" the "m" glows with a hand tag "m: a nucleus with extra energy" and a pen ring. On "nine" both bands write and tick at once: amber "99 = 99 + 0", teal "43 = 43 + 0" (a grey tag "γ adds 0 to each row"); both counter readouts pulse "same". On "leaves" a violet wavy arrow leaves the vial, violet hand tag "only energy leaves", ink tag "same element, same isotope".

### 8. the pattern
> So here's the pattern. Alpha takes four off the top and two off the bottom, so the element moves two places back in the periodic **table**. Beta leaves the top alone, and adds one to the bottom, so the element moves one place **forward**. Gamma changes **neither**. You don't need to memorise these, if you remember one line. Top counts nucleons, bottom counts **charge**.

Visual: board clears to a three-row change table beside a longer element strip ("88 Ra to 95 Am" with "5 B to 8 O" as a second strip). The nucleus counter runs the real uranium-238 chain along the strip (simulation; grey tag "uranium-238 decay chain"). On "table" row 1 writes "alpha: top −4, bottom −2", an orange cluster leaves, the readouts tick 238 → 234 and +92 → +90 and the pointer jumps from 92 U back to 90 Th (orange pen arc "−2"). On "forward" row 2 writes "beta: top 0, bottom +1", a blue dot leaves, the charge readout ticks +90 → +91 with the nucleons holding at 234, and the pointer jumps to 91 Pa (blue pen arc "+1"). On "neither" row 3 writes "gamma: no change" with a violet "=", and a violet wavy arrow leaves while both readouts hold. On the fourth sentence a second beta step plays silently: +91 → +92, pointer to 92 U, ink hand tag "uranium again, but uranium-234". On "charge" the memory line writes in a framed card in hand lettering (48 px): amber "Top counts nucleons," teal "bottom counts charge." A small grey tag at the side: "the same two rules balance every nuclear reaction". Hold about 2 seconds.

### 9. a human-made reaction: making cobalt-60
> Now a reaction people make happen. In a nuclear reactor, cobalt-fifty-nine is hit with **neutrons**. When its nucleus absorbs one, the top number goes up by one, from fifty-nine to sixty. The bottom number stays at twenty-seven, because a neutron has no **charge**. So it's still cobalt, just a heavier isotope, cobalt-**sixty**. That's how the cobalt-sixty used in cancer treatment is **made**.

Visual: board clears; `phys-y11-gamma-source-v1.png` (from v17, about 320 px tall, solid) stands at the left from the first frame; the faint cobalt line from the opening frame slides back up and rewrites in full ink as the equation strip "⁵⁹₂₇Co + ¹₀n → ?". Task strip: "Neutron capture in a reactor: find the product". On "neutrons" a grey neutron flies in from the left and joins a coded cobalt nucleus, tag "human-made: in a reactor". The amber row writes "59 + 1 = 60" on the second sentence. On "charge" the teal row writes "27 + 0 = 27". On "sixty" the element strip ("26 Fe, 27 Co, 28 Ni") lights 27 and the equation completes "⁵⁹₂₇Co + ¹₀n → ⁶⁰₂₇Co"; both bands tick; tag "same element, heavier isotope". Hand tags: amber "+1 nucleon" with a pen arrow from the neutron to the 60, teal "no charge added" under the 27. On "made" a pen arrow runs from the product to the source plate, tag "cobalt-60 source: cancer treatment, sterilising".

### 10. finding a missing particle
> Sometimes the missing piece is the particle, not the nucleus. High in the atmosphere, a neutron from cosmic rays hits nitrogen-fourteen, and makes carbon-fourteen plus something **else**. On the left, the tops add to fifteen, and the bottoms to **seven**. Carbon-fourteen accounts for fourteen and six. So the missing particle has a top of one, and a bottom of **one**. One nucleon, with a charge of plus one, is a **proton**.

Visual: board clears; the cobalt work shrinks to a dim strip at the top. Task strip: "Find particle X". Equation strip: "¹⁴₇N + ¹₀n → ¹⁴₆C + X". On "else" the X glows and `g1-tree-v1.png` (from v17, about 300 px tall, solid) appears at the left, tag "natural: carbon-14 in the atmosphere". On "seven" the left sums write: amber "14 + 1 = 15", teal "7 + 0 = 7". On "one" (third) the right sums write: amber "15 − 14 = 1", teal "7 − 6 = 1", and X becomes "¹₁X". On "proton" the proton card in the reference strip glows and slides into place: "¹⁴₇N + ¹₀n → ¹⁴₆C + ¹₁p", the "¹₁p" framed in a dark-ink box; both bands tick; hand tags amber "what's left over: 1" and teal "charge left over: +1", with a pen ring round "¹₁".

### 11. what changes in the nucleus
> So what actually changes in each nucleus? Alpha decay removes two protons and two neutrons. Beta decay turns one neutron into a proton. Both change the number of protons, so both turn one element into another. That's called **transmutation**. Gamma changes no particles at all. And adding a neutron keeps the same element, but makes a heavier **isotope**.

Visual: board clears to the change table from scene 8, widened with a fourth column "inside the nucleus" and a fourth row. On the second sentence the alpha row's cell writes "2 protons and 2 neutrons leave" with a small orange cluster leaving a nucleus. On the third sentence the beta row writes "1 neutron → 1 proton" with v17's swap. On "transmutation" a bracket joins the alpha and beta rows with the tag "transmutation: the number of protons changes, so the element changes". On the sixth sentence the gamma row writes "no particles change; energy leaves". On "isotope" the fourth row writes "neutron capture: top +1, bottom 0; 1 more neutron, same element". Table rows 36 px; hand tags: red "protons change → new element" with a pen bracket on the alpha and beta rows, ink "element stays" beside rows 3 and 4.

### 12. the trap: check both rows
> Here is the trap. Students balance the top numbers, and forget the bottom. In beta decay, the top number doesn't change at all, so it's tempting to think nothing has. But the bottom number goes up by one, and that's a new **element**. Always check both rows, **separately**.

Visual: board clears to a student-style line "¹⁴₆C → ¹⁴₆C + ⁰₋₁e" with only the amber band ticked. On the third sentence the teal band writes "6 ≠ 6 + (−1)" in red. On "element" the line is crossed and the correct line writes under it, "¹⁴₆C → ¹⁴₇N + ⁰₋₁e", with both bands ticked. A small grey example beside it, also crossed: "¹³¹₅₃I → ¹³⁰₅₄Xe + ⁰₋₁e (top dropped by 1)", with the tag "beta: the top doesn't change". The wrong line is struck in red with a red hand tag "top only"; the correct line is framed with a green tick. On "separately" a chip writes "check the top row, then the bottom row", with an amber "1" and a teal "2" hand-numbered beside its halves.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Americium-two-forty-one, the isotope in smoke alarms, decays by alpha emission. Write a balanced nuclear equation for this decay, and identify the new nuclide. Use the periodic table extract. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Americium-241 (²⁴¹₉₅Am), the radioisotope used in smoke alarms, decays by alpha emission. Write a balanced nuclear equation for this decay and identify the nuclide formed. (3 marks)" Under it, a periodic table extract: "90 Th, 91 Pa, 92 U, 93 Np, 94 Pu, 95 Am". Picture on the card's right: `y11c-smoke-alarm-v1.png` (about 260 px, uniform scale). Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no change table, no bands).

### 14. feedback 1 (brief)
> Take four off the top, and two off the bottom. Two forty-one minus four is two thirty-seven, and ninety-five minus two is ninety-**three**. Element ninety-three is neptunium, so it's neptunium-two-thirty-**seven**. Check: two thirty-seven plus four is two forty-one, and ninety-three plus two is ninety-five. Taking four off the bottom as well is the **slip**.

Visual: card shrinks to the top with its smoke-alarm picture kept small. A navy givens strip on the answer side: "Am: top 241, bottom 95 | alpha ⁴₂He: 4, 2". Rows write at 52 px: amber "241 − 4 = 237"; on "three" teal "95 − 2 = 93", and the extract's 93 box lights. On "seven" the equation writes: "²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He", framed in a dark-ink box with a green tick, tag "neptunium-237". On "Check" both bands tick. On "slip" a chip "²³⁷₉₁Pa (four off both numbers)" fades in and is struck in red, red hand tag "alpha: −4 top, −2 bottom". Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Cobalt-sixty, made in a reactor, decays by beta emission. Write a balanced nuclear equation for this decay, and name the element formed. Pause here to answer.

Visual: `QuestionCard`: "Cobalt-60 (⁶⁰₂₇Co) is made in a nuclear reactor and decays by beta emission. Write a balanced nuclear equation for this decay and name the element formed. (3 marks)" Extract: "26 Fe, 27 Co, 28 Ni, 29 Cu". Picture on the card's right: `phys-y11-gamma-source-v1.png` (about 240 px, uniform scale). Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The top stays at sixty, and the bottom goes up by one, from twenty-seven to twenty-**eight**. Element twenty-eight is nickel, so it's nickel-**sixty**, plus a beta particle. Check: sixty equals sixty plus zero, and twenty-seven equals twenty-eight plus minus one. Taking one off the bottom, because an electron left, is the **trap**. That electron came from a neutron that became a proton.

Visual: card shrinks to the top with its picture kept small. A navy givens strip on the answer side: "Co: top 60, bottom 27 | beta ⁰₋₁e: 0, −1". On "eight" the bands write at 52 px: amber "60 = ? + 0, so ? = 60", teal "27 = ? + (−1), so ? = 28". On "sixty" the extract's 28 box lights and the equation writes: "⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e", framed in a dark-ink box with a green tick. On "Check" both bands tick. On "trap" a chip "⁶⁰₂₆Fe (one off the bottom)" fades in and is struck in red, red hand tag "a neutron became a proton: bottom +1". Hold about 1 second.

### 17. handoff: chemistry moves only electrons
> Notice that nuclear reactions change the nucleus itself. Ordinary chemical reactions never do. They only move electrons. When a sodium atom loses one electron, it keeps its eleven protons, so it becomes a sodium ion, with a charge of plus **one**. A chlorine atom that gains one electron becomes a chloride ion, minus **one**. Next time, we'll use charges like these to work out the formula of a **compound**.

Visual: board clears. At the left a small nucleus with a red "changes" tag, labelled "nuclear: the nucleus changes"; at the right, a sodium shell atom (2, 8, 1) whose nucleus is locked with a grey tag "chemical: the nucleus stays the same". On the third sentence sodium's outer blue electron lifts away. On "one" (first) the sodium atom becomes "Na⁺" with a counter "11 protons, 10 electrons: charge +1" (teal). On "one" (second) a chlorine shell atom (2, 8, 7) beside it takes an electron and becomes "Cl⁻", counter "17 protons, 18 electrons: charge −1". Hand tags: red "nucleus untouched" with a pen ring round sodium's nucleus, blue "only electrons move" with a pen arrow along the moving electron. On "compound" a line writes between them, "Na⁺ + Cl⁻ → ?" (52 px), with a teal tag "total charge?", and the chip writes: "Next: how do ion charges decide a compound's formula?". Hold about 2 seconds. This is the final frame (v19 opens on it).

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Balance both rows: top = nucleons, bottom = charge.
2. α = ⁴₂He, β = ⁰₋₁e, γ, n = ¹₀n, p = ¹₁p.
3. Alpha: top −4, bottom −2.
4. Beta: a neutron becomes a proton; top same, bottom +1.
5. New bottom number = new element (transmutation). Gamma: no change.

Memory aid (framed card under the notes, hand lettering, amber and teal as in scene 8): *Top counts nucleons, bottom counts charge.* Notes 34 px in the role colours (tops amber, bottoms teal); no paragraphs. The quiet hold runs about 45 s after the spoken line.

## Final frame

The handoff board of scene 17, held about 2 seconds: at the left a small nucleus tagged "nuclear: the nucleus changes"; at the right a sodium ion "Na⁺" (shell model 2, 8, with its removed electron drifting just above) with the teal counter "11 protons, 10 electrons: charge +1", and beside it a chloride ion "Cl⁻" (shell model 2, 8, 8, the gained electron ringed) with "17 protons, 18 electrons: charge −1"; between them the line "Na⁺ + Cl⁻ → ?" with a teal tag "total charge?"; heading "Balancing nuclear equations: make both rows match" dimmed; the chip "Next: how do ion charges decide a compound's formula?". v19 opens on this frame.

## Teaching checks

- **Does it explain causes?** Why both rows balance: nucleons and charge are never made from nothing (2). Why beta's bottom number is −1: it is the electron's charge (3). Why the bottom rises by 1 in beta: a neutron becomes a proton (6). Why gamma changes nothing: only energy leaves (7). Why the element changes: the proton number changes (8, 11). Why neutron capture keeps the element: a neutron has no charge (9).
- **Misconceptions addressed:** balancing only the top row (12, site); beta lowers the mass number (12, site's I-131 item); beta lowers the atomic number because an electron leaves (crossed in 16); alpha takes 4 off both numbers (crossed in 14); gamma changes the element (7).
- **One idea at a time:** the two rules (2), the particle numbers (3), one decay per scene (4, 6, 7), the pattern (8), the human-made reaction (9), the unknown particle (10), what changes (11), the trap (12).
- **Video makes it easier:** each sum writes into its own coloured band and ticks; the new element is read off a periodic strip as its box lights; v17's neutron-to-proton swap plays as the bottom number rises.
- **Response opportunity:** prediction (3 s); two unseen tasks with every condition on the card, including the periodic table extract; 10 s each. Feedback about 26 s and 30 s.
- **Avoided double teaching:** nuclide notation recalled from v08 in one sentence each; the nature of alpha, beta and gamma recalled from v17 (cards only).
- **Syllabus coverage:** `C1-IQ2-05` "types of balanced nuclear reactions" (alpha, beta, gamma, neutron capture, a reaction with an unknown particle), using natural (U-238, C-14, N-14 to C-14) and human-made (Co-60, Am-241, Tc-99m) radioisotopes.
- **Out of scope by design:** half-life; fission and fusion (author note b); positron emission and electron capture (note c); energy released.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style).** "Americium-241 (²⁴¹₉₅Am), the radioisotope used in smoke alarms, decays by alpha emission. Write a balanced nuclear equation for this decay and identify the nuclide formed. (3 marks)" Periodic table extract on the card: 90 Th, 91 Pa, 92 U, 93 Np, 94 Pu, 95 Am.
Model answer: Alpha emission removes ⁴₂He, so the mass number falls by 4 (241 − 4 = 237) and the atomic number by 2 (95 − 2 = 93) (1). ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He (1). The nuclide formed is neptunium-237; check: 241 = 237 + 4 and 95 = 93 + 2 (1). Classic mistake (crossed): "²³⁷₉₁Pa" (4 subtracted from both numbers).

**Attempt 2 (scene 15; original wording, HSC style).** "Cobalt-60 (⁶⁰₂₇Co) is made in a nuclear reactor and decays by beta emission. Write a balanced nuclear equation for this decay and name the element formed. (3 marks)" Extract: 26 Fe, 27 Co, 28 Ni, 29 Cu.
Model answer: In beta decay a neutron changes into a proton and an electron is emitted, so the mass number is unchanged (60) and the atomic number rises by 1 (27 + 1 = 28) (1). ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e (1). The element formed is nickel; check: 60 = 60 + 0 and 27 = 28 + (−1) (1). Classic mistake (crossed): "⁶⁰₂₆Fe" (atomic number lowered because an electron leaves).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| U-238 alpha | 238 − 4 = 234; 92 − 2 = 90 (Th); 238 = 234 + 4; 92 = 90 + 2 | 1, 4, 8, 18 |
| C-14 beta | 14 = 14 + 0; 6 = 7 + (−1) (N) | 5, 6, 8, 12, 18 |
| Tc-99m gamma | 99 = 99 + 0; 43 = 43 + 0 | 7 |
| Co-59 neutron capture | 59 + 1 = 60; 27 + 0 = 27 (Co) | 9, 18 |
| N-14 + n → C-14 + X | tops 14 + 1 = 15; bottoms 7 + 0 = 7; X: 15 − 14 = 1, 7 − 6 = 1 (proton) | 10 |
| I-131 (crossed example) | wrong ¹³⁰₅₄Xe; correct ¹³¹₅₄Xe | 12 |
| Am-241 alpha (A1) | 241 − 4 = 237; 95 − 2 = 93 (Np); crossed ²³⁷₉₁Pa | 13, 14 |
| Co-60 beta (A2) | 60 unchanged; 27 + 1 = 28 (Ni); crossed ⁶⁰₂₆Fe | 15, 16 |
| Na⁺, Cl⁻ | 11 protons, 10 electrons (+1); 17 protons, 18 electrons (−1) | 17 |
| Element numbers | Ra 88, Ac 89, Th 90, Pa 91, U 92, Np 93, Pu 94, Am 95; B 5, C 6, N 7, O 8; Fe 26, Co 27, Ni 28, Cu 29 | 4, 6, 8, 9, 13 to 16 |

## Numbers to verify (all values, repeated for Codex)

- Every equation balances in both rows (checked by script, 5 November): U-238 α (238 = 234 + 4; 92 = 90 + 2); C-14 β (14 = 14 + 0; 6 = 7 − 1); Tc-99m γ (99, 43); Co-59 + n (59 + 1 = 60; 27 + 0 = 27); N-14 + n → C-14 + p (15 = 15; 7 = 7); Am-241 α (241 = 237 + 4; 95 = 93 + 2); Co-60 β (60 = 60 + 0; 27 = 28 − 1).
- Atomic numbers against the IUPAC periodic table: Ac 89, Th 90, Pa 91, U 92, Np 93, Pu 94, Am 95, Ra 88; Fe 26, Co 27, Ni 28, Cu 29; B 5, C 6, N 7, O 8; I 53, Xe 54; Tc 43; Na 11, Cl 17.
- Decay modes against NuDat 3: U-238 α; C-14 β⁻; Tc-99m IT (γ); Co-60 β⁻; Am-241 α; formation of C-14 by ¹⁴N(n,p)¹⁴C.

## Memory aid check

- **"Top counts nucleons, bottom counts charge."** Written for this lesson from the site's "mass number (A), top, and the atomic number (Z), bottom". Meaning, as said in scenes 2 and 8: the top number of every symbol is its number of protons plus neutrons, and the bottom number is its charge (for a nucleus, its proton count). Assumptions checked: for a nucleus the bottom number is the proton number, which equals its charge in units of the proton charge; for the electron "charge" gives −1, matching ⁰₋₁e; for gamma and neutron 0; it does not cover orbital electrons (author note e), which nuclear equations ignore. It helps a new case: any particle's symbol (A1, A2, the unknown-particle task) can be built from it, so students need not memorise a separate rule for each decay.
- **Considered, not used:** "alpha: minus four, minus two" chant (a rule without its cause; the pattern is shown in scene 8 and derived each time).

## Narration length estimate

Revision 2 count (7 November; build parser rules, the total is the sum of the 18 scene strings): **5,944 characters** (Revision 1 was 5,959 as a sum, stated 5,976 with the joining spaces; scene 12 lost 15). At 13.3 characters per second the speech is about 447 s; add about 3 s for the balancing writes in scenes 4, 6 and 10, 3 s for the scene 8 chain to settle, 2 s for the scene 8 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s of quiet notes hold: **about 527 s**, inside 5,500 to about 7,000 characters and under 570 s.

Revision 1 estimate (superseded): **5,976 characters**, 18 scenes. At 13.3 characters per second the speech is about 449 s; add about 3 s for the balancing writes in scenes 4, 6 and 10, 2 s for the scene 8 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s): **about 536 s**, inside the band and under the cap. Reserve trims: scene 9's last sentence (keep the plate silent), scene 12's last sentence (keep the chip), scene 16's last sentence (keep the caption).

## Scene list and build ids

Lesson key `c-y11-m1-v18` (route chem-y11-m1-v18; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v18`.

In order (18 scene headings, all `### N.`): hook, two-rules, particle-numbers, alpha-uranium, prediction, beta-carbon, gamma, pattern, human-made, missing-particle, nucleus-changes, trap, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 camera push onto the uranium nuclide; 2 to 3 clear change (the cards build); 3 to 4 camera continue (cards shrink to the reference strip, the equation returns); 4 to 5 clear change; 5 to 6 camera continue (the same strip fills); 6 to 7 clear change; 7 to 8 clear change to the table; 8 to 9 clear change (the faint cobalt line returns); 9 to 10 camera continue (cobalt strip dims to the top); 10 to 11 clear change to the table; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 45 s quiet). Revision 2: no stage runs more than about 75 s unchanged (scenes 3 and 4 share the reference strip but the nucleus counter, equation and strip change in scene 4). Review evidence paths: `checks/c-y11-m1-v18-learning-review.md`, `checks/c-y11-m1-v18-science-check.md`.

## Assets

Have (from v17's set; scaled uniformly only, never stretched; Revision 2 inspected 7 November):
- `public/assets/chemistry/y11c-uranium-ore-v1.png` (dark glossy uraninite in a pale granite matrix with yellow-green stains): scene 1 anchor, scenes 2 and 4 thumbnail.
- `public/assets/chemistry/y11c-smoke-alarm-v1.png` (white ceiling alarm seen from below): attempt 1 card picture.
- `public/assets/chemistry/y11c-lead-shielded-vial-v1.png` (requested in v17): scene 7.
- `public/assets/physics/phys-y11-gamma-source-v1.png` (1312 × 1199; a sealed source in a bolted lead pot): scene 9, as the cobalt-60 source.
- `public/assets/chemistry/g1-tree-v1.png` (1800 × 2200): scene 10, small and faint.
- `phys-y11-gamma-source-v1.png` is also the attempt 2 card picture (Revision 2). The Revision 1 choice to leave the ore and smoke alarm out is reversed by the visual standard (scene 1 anchor; question cards carry a picture).

Need: no new plates. If `y11c-lead-shielded-vial-v1.png` is not painted by build time, scene 7 runs with the coded nucleus only.

Coded: nuclei, the nucleus counter and its readouts, particle cards, the nuclear equation strip, the amber and teal balance bands, element strips, the change table, shell atoms and ions (scene 17), chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M1 v18)

No new plates. Confirm that the three reused plates exist at the paths above before build; if v17's `y11c-lead-shielded-vial-v1.png` is still pending, record it in `status.md` as a dependency.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every equation under "Numbers to verify" in both rows, and every number on screen against "Numbers used".
2. Confirm each element symbol against its atomic number.
3. Confirm the science of every learner-visible claim: conservation of nucleon number and charge; each particle's notation; beta made from a neutron becoming a proton; gamma changes neither number; Co-59 neutron capture in a reactor; ¹⁴N(n,p)¹⁴C in the upper atmosphere; transmutation definition.
4. Confirm the memory aid's assumptions.
5. Confirm both attempt cards are original, carry every condition (including the periodic table extract), and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger.
7. Confirm no person, hand or face is drawn or requested.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Confirm the opening frame equals v17's final frame and the final frame matches v19's opening.

## YouTube metadata (draft)

Title: How to Balance Nuclear Equations: Alpha, Beta and Gamma | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson20.sa.html

When uranium-238 gives out an alpha particle, what's left behind? Learn the two rules that balance every nuclear equation (total nucleons and total charge), how to write alpha, beta and gamma particles, how to balance alpha decay, beta decay and gamma emission, how cobalt-60 is made in a reactor, and how to find a missing particle. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"investigate the properties of unstable isotopes using natural and human-made radioisotopes as examples, including but not limited to:
- types of radiation
- types of balanced nuclear reactions"

Previous: Alpha, beta and gamma radiation from natural and human-made radioisotopes. Next: How ion charges decide a compound's formula.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Gamma notation (root).** Resolved by root decision 26: γ alone (Revision 2).
- **2. Unknown-particle example (root).** ¹⁴N + n → ¹⁴C + p is used because v17 named it. It is a neutron-induced reaction, not a decay; confirm it is suitable, or swap for the site's Ra-226 fill-the-blanks.
- **3. Trap scene (root).** Scene 12 is a short dedicated trap scene (the site names the misconception and both attempts test it). Cut to a chip in scene 8 if the learning review finds it repetitive.
- **4. Handoff chip wording (root).** The chip says "how do ion charges decide a compound's formula?" (plainer than the route's "determine a neutral inorganic formula"); v19's title keeps the route's wording.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does scene 2's "never made from nothing" land before the rules; is scene 3's card row too much at once; is scene 10 one task too many), then the science check and Codex error check.
- Checker output (5 November): narration 5,976 characters; per scene (1 to 18): 336, 439, 431, 546, 132, 456, 257, 356, 379, 410, 347, 281, 224, 348, 168, 377, 397, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (7 Nov 2026)

Findings from `../checks/c-y11-m1-v18-learning-review.md` and `../checks/c-y11-m1-v18-science-check.md` (brief 179; 0 blockers, 3 should fix):

1. **Scene 12 opener (should fix):** "One trap costs marks every year." became "Here is the trap." (unsupported exam-outcome claim removed; 15 characters shorter).
2. **Stale check cues, scenes 4 and 14 (should fix):** the band sums in scene 4 now write on "Check both rows" and the ticks in scene 14 land on "Check" (scene 16 retied to "Check" too). No speech change.
3. **Gamma notation (should fix; root decisions 26 and 37):** γ alone in the colour key, the scene 3 card, the scene 7 equation, key note 2, the particle-notation decision and author note d; the balance rows keep "+ 0" with a grey tag "γ adds 0 to each row". Open decision 1 closed. No speech change.

Visual upgrade (`../maths-visual-standard.md`, build-agent-brief root rules):
- Scene 1: painted anchor `y11c-uranium-ore-v1.png` (existing, inspected) solid at about 8 s, with a hand tag and pen arrow to the nucleus; it returns as a thumbnail in scenes 2 and 4.
- Live simulation: the nucleus counter (nucleon and charge readouts at 52 px, element-strip pointer) plays alpha (4), beta (6), gamma (7) and, in scene 8, the real chain U-238 → Th-234 → Pa-234 → U-234 so the pattern is seen happening (back two, forward one, forward one). Checked by script: 238 = 234 + 4, 92 = 90 + 2; 234 = 234 + 0, 90 = 91 − 1; 234 = 234 + 0, 91 = 92 − 1.
- Hand tags (two or three) and a pen mark added to scenes 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12 and 17.
- Framed answers with a green tick and red-struck slips with red hand tags in scenes 4, 6, 10, 12, 14 and 16; navy givens strips on the answer side of 14 and 16.
- Question cards carry a picture: smoke alarm (attempt 1), cobalt-60 source pot (attempt 2).
- Plates that carry a scene (lead vial, cobalt source, tree) are solid from the scene's first frame, not faint.
- Memory aid framed in scene 8 and on the notes screen; key notes cut to five short bullets (34 px) with a 45 s quiet hold.
- Colour roles and type sizes stated in Decisions.
- No new plates: every plate used exists in `public/assets` (uranium ore, smoke alarm, lead-shielded vial, gamma source, tree).

Narration: 5,944 characters as the sum of the 18 scene strings (Revision 1: 5,959 as a sum, 5,976 stated with joining spaces); about 527 s with holds. Bold cues quoted in spoken order; no em dashes.
