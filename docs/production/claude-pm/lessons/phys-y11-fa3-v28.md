# Year 11 Physics FA3 V28 (Physics 2025, Year 11, Focus Area 3): Why does an iron core make a coil's magnetic field so much stronger, and what else makes an electromagnet stronger? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v28`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: nine new (coil on a clear tube, iron nail, paper clip, scrapyard crane magnet, scrap bundle, and a set of four rods: copper, soft iron, hard steel, aluminium; the rod set is shared with v29); the bench supply (delivered) reused by name.

Narration 5,603 characters, 18 scenes, about 519 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: the core mechanism and the factors, fully taught; not padded.

Scope: twenty-eighth video of the Year 11 Physics (2025) Focus Area 3 route and the first of the three electromagnet videos: what an electromagnet is (a solenoid with a ferromagnetic core); why an iron core multiplies the coil's field (magnetic domains lined up by the coil's field add their own field); why soft iron lets the field switch off; why copper or aluminium cores do nothing useful; the factors that set an electromagnet's strength (current, turns per metre, core), each with its cause; the site's scaling worked example; why the strength levels off with a core (the domains run out); reversing the current swaps the poles but keeps the strength. Templates: `phys-y11-fa3-v13.md`, `v14.md`, `v16.md` to `v18.md` (concept format and section list) with the FA3 colour key and conventions from `phys-y11-fa3-v01.md` to `v20.md`. No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson26.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 how a core multiplies the field, true or false, card 2 choosing the core material and its figure, quick check, activity 1, odd one out, card 3 the factors that affect strength with `we-1`, last check, match the pairs, independent practice Q1 to Q3, retrieve); lesson 25's worked example and closing lines read for the opening. Route entry: `phys-y11-fa3-v28` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below; both syllabus actions carry coverage "preparation-for-investigation"). Route start: "Start with Electromagnets, Cores and Field Strength. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply electromagnets, cores and field strength? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa3-v29: Which core material best fits a switchable electromagnet, and why trust the sources?" (the handoff chip uses the reworded form adopted in `phys-y11-fa3-v29.md`; see open decision 2).

**Opening frame (ASSUMED; `phys-y11-fa3-v27.md` did not exist when this design was finished, 3 Nov).** v27 is being designed in parallel. This design assumes v27 ends on the frame its route and site lesson 25 imply: the solenoid cut along its axis (lesson 25's figure: "⊙" turns on top, "⊗" below), 500 turns over 0.25 m carrying 3.0 A, a uniform plum dashed field inside pointing to the N end and returning outside, a readout "B = μ₀NI/L ≈ 7.5 × 10⁻³ T" (lesson 25's `we-1`; 4π × 10⁻⁷ × 2000 × 3.0 = 7.54 × 10⁻³ T), a chip "the empty coil" and the chip "Next: Why does an iron core make a coil's magnetic field so much stronger, and what else makes an electromagnet stronger?". Scene 1's first sentence is a separate bridge take ("Last time, a coil carrying a current made a strong, even field inside it."), so when v27 lands root aligns only that take and the first second of scene 1's visual (series rule). If v27's last frame shows a different coil or numbers, the bridge keeps its wording and the readout follows v27.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the nail slides into the coil by code; clips rise to the coil by code; the crane works without a visible operator); apparatus and objects painted at native aspect (coil, nail, paper clip, rods, supply, crane magnet, scrap); field lines, domains, circuit symbols, readouts and calculations coded (abstract diagrams); one reasoning stage at a time; the calculation laid out as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v24 (field lines), v26 (a solenoid's field; N and S ends) and v27 (B = μ₀NI/L; n = N/L) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Magnetism"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G3-07 `cic3a3747e`: "Conduct a secondary-source investigation to assess the choice of materials used in the core of electromagnets" (preparation: the physics of the core; v29 owns the investigation)
- P25-FA3-G3-08 `cib271cbdb`: "Conduct a practical investigation to examine the factors affecting the strength of an electromagnet" (preparation: the factors and their causes; v30 owns the investigation)

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v27's handoff (assumed, above); the hook (a coil on a tube holds 3 paper clips; with an iron nail inside, about 25; illustrative); "the extra field comes from the iron"; magnetic domains (plain meaning) pointing at random, so an ordinary nail is not a magnet; the coil's field lines the domains up, so the iron adds its field: an electromagnet, hundreds of times stronger than the bare coil; switch off: soft iron's domains fall back to random and the clips drop; copper and aluminium have no domains, so they barely change the field (ferromagnetic: iron, nickel, cobalt and their alloys); the factors: current (more charge circling each second), turns per metre (more loops adding along each metre), the core (multiplies the coil's field); the site's scaling worked example (×3.0); the strength levels off once nearly every domain is lined up; reversing the current swaps the poles, same strength; memory aid; two attempts; the crane handoff. Stops at the physics of the core and the factors. Not taught: comparing core materials from data and judging sources (v29); the practical investigation (v30); permeability or coercivity values (v29); hysteresis loops; force on a current (Year 12).

## Decisions

- **Learner question (route placeholder rewritten; open decision 1).** Route: "How can I explain and apply electromagnets, cores and field strength?" Rewritten as one causal question: "Why does an iron core make a coil's magnetic field so much stronger, and what else makes an electromagnet stronger?" It carries both preparation actions: the core (`cic3a3747e`'s physics) and the factors (`cib271cbdb`'s physics). Heading on screen (shortened): "Why does an iron core make a coil so much stronger?" Answer, built in order: hook (1, 2); domains at random (3); domains lined up add their field (4); switch-off (5); only ferromagnetic cores work (6); the factors and why (7, 8); the worked example (9); the levelling off (10); reversing the current (11); memory aid (12).
- **The mechanism made visible (owner quality bar).** **`DomainGrid`** (new, coded): a cutaway window into the nail showing about 30 irregular domain patches, each with a plum arrow (the magnetic field colour, FA2 root decision 18); a live "iron's own field" bar at the side sums the arrows (near zero when random). When the coil's field turns on (plum dashed lines through the coil), arrows rotate towards the axis and aligned patches grow at their neighbours' expense; the bar climbs and the external plum dashed field lines multiply. Switching off reverses it for soft iron (most arrows drift back to random; the bar falls to almost zero). This one part carries scenes 3 to 5 and 10.
- **Hook (site warm-up, made visible).** Coil on a clear plastic tube (new plate), connected to the bench supply, with a coded ammeter readout "2.0 A" (no meter plate needed: a readout chip on the lead). Empty: it holds 3 clips (coded chain of the painted clip plate, rotated only). With the iron nail inside: about 25 clips. Illustrative counts, tagged "illustrative" and said aloud. Site: "hundreds of times stronger"; the clip count does not scale with the field (a chain of clips is not a field meter), so the video does not claim 25 ÷ 3 is the field ratio (author note b). Prediction 1 (3 s): "a few more?", "about twice as many?", "far more?".
- **Domains (plain meaning at first use).** "Inside iron, each atom acts like a tiny magnet. In small regions called domains, the atoms' magnets all point the same way." Screen gloss: "domain: a small region where the atoms' magnets all point the same way". The atom-as-magnet model is stated as a model (grey tag "a model: the atom's magnetism comes from its electrons, Year 12 and beyond"). No spin.
- **"Hundreds of times" (site card 1).** Kept as "can be hundreds of times stronger than the coil's alone", with a grey tag "depends on the core and any gaps". The site's B = μ₀nI applied to a cored magnet is already logged as a site correction (air-core equation carried into a core context); this design keeps μ₀NI/L for the coil's own field only (scene 8 and 9 label it "the coil's field") and says so in scene 10.
- **Switch-off and the v29 boundary.** Scene 5 shows soft iron letting go (the reason an electromagnet is useful). It says only "some materials hold on to their magnetism; that's the next video". No permeability, no coercivity, no steel comparison beyond the handoff picture (v29 owns the assessment).
- **Ferromagnetic (scene 6).** A painted copper rod slides into the coil instead of the nail: the clip chain stays at 3; the `DomainGrid` window over the copper shows no domain arrows (grey "no domains"). "Ferromagnetic: a material with domains, such as iron, nickel and cobalt, and their alloys, like steel." This corrects the site's misconception 1 "Right" text, which names only "iron, and steel" (site correction 1).
- **The factors, each with a cause (`cib271cbdb` preparation).** Current: more charge circling the coil each second makes a stronger field (v25's wire field rises with current; recalled in a phrase). Turns per metre: each turn adds its field along the axis, so packing more turns into each metre adds more (v27's n = N/L). The core: multiplies whatever field the coil makes. Shown as a three-row factor panel with a coded slider for each, the coil's field readout and the `DomainGrid` bar responding. "Turns per metre, not total turns" is spoken (v27's point, recalled).
- **Worked example (site `we-1`, numbers unchanged, tagged "site worked example").** Task strip: "By what factor does the coil's field change?"; equation strip: "B = μ₀NI/L, so B ∝ nI, with n = N/L"; givens grouped "before: N = 200, L = 0.25 m, I = 1.5 A" and "after: N = 300, L = 0.25 m, I = 3.0 A". Working one stage at a time: n₁ = 800 m⁻¹, n₂ = 1200 m⁻¹; ratio of n 1.5; ratio of I 2.0; B₂/B₁ = 1.5 × 2.0 = 3.0. "The effects multiply, they don't add." The site's closing line ("adding a soft-iron core would multiply it again") is kept as one sentence.
- **Levelling off (scene 10; FA3 site correction already logged).** "Turn the current up and up, and eventually nearly every domain is already lined up. After that, extra current only adds the coil's own small field, so the strength rises much more slowly." Screen gloss "saturated: almost every domain already lined up". This is necessary learner copy: without it the factor scene would teach that a cored magnet's strength is exactly proportional to current, and v30's data level off at the top. A coded sketch graph "electromagnet strength" against "current" (no numbers) rises steeply then flattens, beside a dashed "coil alone" line that rises slowly and straight.
- **Prediction 2 (3 s, scene 11): reverse the current.** "Stronger, weaker, or the same?" Chips. Answered: the same strength, poles swapped, because the domains line up the other way (site match the pairs). The N and S tags swap ends.
- **Attempts (original, HSC style).** (A1, calculation) "The coil of an electromagnet has 400 turns wound over a length of 0.20 m and carries a current of 2.0 A. The same 400 turns are rewound so they are spread over 0.40 m, and the current is increased to 3.0 A. The core is unchanged. Calculate the factor by which the magnetic field produced by the coil changes. (2 marks)" Answer: n from 2000 m⁻¹ to 1000 m⁻¹ (× 0.5), I × 1.5; B₂/B₁ = 0.5 × 1.5 = 0.75: the coil's field falls to 0.75 times (weaker). Crossed: "1.5 times stronger" (only the current counted). (A2, explanation and evaluation) "A student claims: 'Placing an aluminium rod inside a solenoid will make a much stronger electromagnet, because aluminium is a metal.' Evaluate the student's claim, and explain how an iron core increases the magnetic field of a solenoid. (3 marks)" Answer: the claim is wrong: aluminium is not ferromagnetic, it has no domains, so it barely changes the field; iron contains domains which the coil's field lines up, so the iron's own field adds to the coil's and the total is many times stronger. Crossed: "any metal core makes it stronger".
- **Mistake scene:** none separate. "Any metal makes a good core" (6; A2 crossed; site misconception 1); "more total turns always means more field" (7, 9; A1 crossed); "a cored magnet's strength is proportional to the current forever" (10); "reversing the current weakens it" (11, chips crossed).
- **Memory aid:** "The coil makes the field. The iron multiplies it. Switch off, and soft iron lets go." (see "Memory aid check").
- **Handoff (route next; v29's adopted question).** Board change: the painted scrapyard crane magnet (new plate) holding the painted scrap bundle (new plate) over a coded ground line; a coded cutaway of the magnet's disc shows the coil and core with a chip "core: soft iron"; on "switch off" the scrap drops. Then the core chip changes to "core: hard steel", the current switches off again, and the scrap stays stuck (a small plum dashed field remains around the disc); chip "why won't it let go?"; then "Next: Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?". This is the frame v29 opens on (the scrap still hanging under the steel-cored magnet, current off). Site hook ("If you built it with a steel core instead of soft iron, the cars would refuse to let go") turned into the picture; "hard steel" replaces the site's unqualified "steel" (site correction 2).
- **Site sources used:** hook (crane: handoff); warm-up (coil, tube, nail, paper clips: 1, 2); key terms (electromagnet, ferromagnetic core, soft magnetic material: 4 to 6; hard magnetic material: handoff only); misconceptions 1 and 2 (6; handoff); card 1 (3 to 5); true or false (4); card 2 (handoff only; v29 owns it); activity 1 and odd one out (v30 and v29); card 3 and `we-1` (7 to 9); last check (7); match the pairs (11; "removing the core weakens it greatly": 6); Q1 (A2 adapted, the core half; the factors half in 7); Q2 (v29); Q3 (v30); retrieve (12).
- **Site corrections (quoted from site lesson 26, read 3 Nov; for `../site-corrections-phys-y11.md`; one item for this lesson is already logged there: the air-core B = μ₀nI carried into a cored magnet, card 3):**
  1. Misconceptions box, misconception 1, "Right": "Only ferromagnetic materials (iron, and steel) boost the field." The list omits nickel and cobalt, and the lesson's own odd-one-out question counts nickel as ferromagnetic. Suggest: "Only ferromagnetic materials (iron, nickel, cobalt and alloys such as steel) boost the field."
  2. Key terms, "Hard magnetic material (steel)", card 2 ("Steel (a hard magnetic material) also magnetises but retains its magnetism") and the hook ("a steel core instead of soft iron"). "Steel" is not one material: low-carbon (mild) steel and silicon (electrical) steel are soft magnetic materials used in transformer and motor cores; hardened high-carbon steel is the hard one. Suggest "hardened (high-carbon) steel" in each place.
  3. Hook: "the cars would refuse to let go". A hard-steel core would keep some magnetism, but whether it still holds a load as heavy as a car is not established. Suggest "some of the scrap would stay stuck" (an overstatement, minor).
  - Checked and correct: `we-1` (800 m⁻¹, 1200 m⁻¹, 1.5 × 2.0 = 3.0); match the pairs; odd one out (copper).
- **Cause chain taught, in order:** (1) the same coil and current hold far more clips with iron inside, so the iron adds field (1, 2); (2) iron's atoms act as tiny magnets grouped in domains pointing at random, so their fields cancel (3); (3) the coil's field lines the domains up, so their fields add to the coil's: an electromagnet (4); (4) when the coil's field stops, soft iron's domains return to random, so the field goes and the load drops (5); (5) materials without domains add nothing (6); (6) more current, more turns per metre and a better core each make the field stronger, for their own reasons (7, 8); (7) the coil's factors multiply (9); (8) once the domains are all lined up, extra current adds little (10); (9) reversing the current reverses the alignment, so the poles swap (11).
- **Entry knowledge (route `entryKnowledge`):** v24 (field lines: direction and closeness show strength), v25 (a wire's field grows with current), v26 (a solenoid's field like a bar magnet's, N and S ends), v27 (B = μ₀NI/L inside a long solenoid; n = N/L, turns per metre), each recalled in a phrase; v11 (current is charge flowing per second); Stage 5 (magnets attract iron; poles). Stage 5 Mathematics: ratios.
- **Learner-visible vocabulary (plain meaning at first use):** electromagnet (a coil with an iron core, whose magnetism switches on and off with the current, 4); domain (a small region where the atoms' magnets all point the same way, 3); core (the material inside the coil, 2); ferromagnetic (a material with domains, such as iron, nickel and cobalt, and their alloys, 6); soft iron (iron that magnetises easily and loses it easily, 5); saturated (almost every domain already lined up, 10).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`DomainGrid`** (new: cutaway window, domain patches with plum arrows that rotate and grow, an "iron's own field" bar); **`CoilField`** (v26/v27's solenoid field lines, plum dashed, with density tied to a field value so they multiply when the core aligns); **clip chain** (instances of the painted clip plate hanging from the coil's end, count readout, rotation only); **nail slide-in** (the nail plate slides into the coil plate's bore from its sidecar); **factor panel** (three rows with coded sliders driving the field readout); **sketch graph** (strength against current: cored curve flattening, coil-alone dashed line); **pole tags** ("N", "S" ink letters on pale grey tags, swapping in 11); **crane cutaway** (coil and core inside the disc magnet plate from its sidecar; a falling scrap bundle); `AlignedAlgebra`; calculation layout (task strip, equation strip, givens group); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** magnetic field plum dashed (FA2 root decision 18) and domain arrows plum; conventional current a bold ink "I" arrow on the leads (FA3 root decision 17); coil turns copper brown; pole tags ink letters on pale grey (not red or navy, which are charges); "iron's own field" bar plum; crossed items grey scribble; plates avoid red and navy except the delivered supply's red terminal (the positive terminal, as v12 and v15).
- **Board layout (constant):** heading top-left; the coil and clips (or the crane) in the left 55 per cent; the `DomainGrid` window or the calculation layout in the right column.
- **No human figures.** None; the nail, rods and clips move by code; the crane has no visible cab or operator.
- **Author notes (not learner copy):**
  (a) Domains: regions of aligned atomic moments (from electron spin) separated by domain walls; in a weak applied field walls move so favourably aligned domains grow; in stronger fields moments rotate. Both are shown simply (patches grow, arrows turn). Soft iron returns close to random when the field is removed in an open magnetic circuit (low coercivity; shape demagnetisation).
  (b) Hook counts (3 empty, about 25 with the nail at 2.0 A) are illustrative. The clip count is not proportional to B (clip chains depend on the clips magnetising each other and gravity), so no ratio is claimed. The "hundreds of times" refers to the field (an open-ended iron rod's effective boost is far below its relative permeability of thousands because of demagnetisation).
  (c) The worked example and A1 compute the coil's field ratio (the air-core model, B = μ₀NI/L). With a core, the electromagnet's field is not exactly proportional (saturation); scene 9's grey tag "the coil's field" and scene 10 cover this.
  (d) A1: n₁ = 400 ÷ 0.20 = 2000 m⁻¹; n₂ = 400 ÷ 0.40 = 1000 m⁻¹; 0.5 × (3.0 ÷ 2.0) = 0.75. Crossed slip: 3.0 ÷ 2.0 = 1.5, length ignored.
  (e) Reversing the current: the coil's field reverses, the domains align the other way, so the same magnitude with N and S swapped (for soft iron; a residual from the previous direction is negligible).
  (f) Pronunciations: "mu nought"; "ferromagnetic" (FERR-oh-mag-NET-ik); "domains".

Main question: *Last time, a coil carrying a current made a strong, even field inside it. Why does an iron core make that field so much stronger, and what else makes an electromagnet stronger?*
Entry knowledge (v24 field lines; v25 wire field and current; v26 solenoid poles; v27 B = μ₀NI/L, n = N/L).
Stops after: domains at random and lined up; electromagnet as coil plus core; soft iron switches off; only ferromagnetic cores; current, turns per metre and core as factors with causes; the scaling example; levelling off; reversing the current. No material data, no source judging, no practical method.
Handoff: v29, choosing the core material from secondary sources.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (a coil and a nail)
> Last time, a coil carrying a current made a strong, even field inside it. Here's a small coil like that, wound on a plastic tube and connected to a supply. These counts are illustrative. It picks up three paper clips. Now slide an iron nail into the tube. Same coil, same current. Quick prediction. How many clips will it hold now? A few more, about twice as many, or far **more**?

Visual: opens on v27's last frame (assumed; see "Opening frame"). The "Next" chip becomes the heading: "Why does an iron core make a coil so much stronger?"; the cut-away solenoid shrinks to a small icon at the top right. On "Here's a small coil" the painted coil on a clear tube (`phys-y11-coil-former-v1.png`) appears at the left, leads to the painted supply (`phys-y11-low-voltage-supply-v1.png`) with a coded current chip "2.0 A" and a bold ink "I" arrow on the lead; a sparse plum dashed field (`CoilField`) around the coil. On "illustrative" a grey tag "illustrative counts". On "three paper clips" a chain of three painted clips (`phys-y11-paper-clip-v1.png`) hangs from the coil's lower end; count chip "3". On "iron nail" the painted nail (`phys-y11-iron-nail-v1.png`) waits beside the coil. On "Same coil, same current" the current chip pulses. On "more" chips "a few more?", "about twice?", "far more?" and a 3-second countdown ring.

### 2. the iron is doing it
> Far more. The nail slides in, and the coil now holds about twenty-five clips. Nothing changed in the wire. The current is the same, and so are the turns. So the extra magnetism must be coming from the iron itself. The material inside a coil is called its **core**. So what is the iron doing?

Visual: camera continue. On "slides in" the nail slides into the tube's bore (sidecar); the plum dashed field lines multiply around the coil and out of its ends. On "twenty-five" the clip chain grows to a cluster (about 25 instances, rotated only; count chip "about 25"). Chip "far more?" glows; the other two take grey scribble crosses. On "Nothing changed in the wire" ticks beside "current: 2.0 A" and "turns: same". On "core" a gloss "core: the material inside the coil". On "doing" a magnifier circle on the nail opens into the right column as an empty cutaway window.

### 3. tiny magnets, pointing every way
> Inside iron, each atom acts like a tiny magnet. In small regions called domains, the atoms' magnets all point the same way. But in an ordinary nail, the domains point in random directions. Their fields cancel each other out, so the nail on its own isn't a **magnet**.

Visual: board change: the `DomainGrid` window fills the right column: about thirty irregular patches, each with a plum arrow, pointing every way. On "tiny magnet" one patch enlarges briefly with a cluster of tiny arrows all one way (gloss "domain: a small region where the atoms' magnets all point the same way"; grey tag "a model: more in Year 12"). On "random directions" arrows jitter to show they are all different. On "cancel" the "iron's own field" bar at the side stays near zero; a small nail with no clips at the left (switch off; "0" chip). On "magnet" the bar pulses at zero.

### 4. lining them up
> Now switch the coil on. Its field turns the domains towards it, and the ones already lined up grow, taking over their neighbours. With most of the tiny magnets now pointing the same way, their fields add together, and add to the coil's field. The iron has become a magnet itself. The total field can be hundreds of times stronger than the coil's alone. A coil with an iron core like this is called an **electromagnet**.

Visual: camera continue. On "switch the coil on" plum dashed coil-field lines sweep through the window from left to right (the coil's direction). On "turns the domains" arrows rotate towards the field; on "grow" aligned patches expand into their neighbours. On "add together" the "iron's own field" bar climbs high above a small "coil's field" bar beside it. On "hundreds of times" a grey tag "can be hundreds of times: depends on the core and any gaps". On "electromagnet" the left coil reappears with the nail inside and its clip cluster; label "electromagnet: coil + iron core" (gloss "a coil with an iron core, whose magnetism switches on and off with the current"); pole tags "N" and "S" at its ends (v26's convention).

### 5. switch off, and let go
> Now switch off. The coil's field disappears. In soft iron, the domains fall back to random directions, so the iron's own field disappears too, and the clips drop. That's what makes an electromagnet so useful. It's a strong magnet you can switch on, and then switch off again. Some materials hold on to their magnetism, though. That's the next **video**.

Visual: camera continue. On "switch off" the current chip reads "0 A" and the coil-field lines fade from the window. On "fall back" most arrows drift back to random, the patches shrink; the "iron's own field" bar falls almost to zero. On "clips drop" the clip cluster falls away at the left (a short drop, settling in a heap). Gloss "soft iron: magnetises easily, and loses it easily". On "switch on, and then switch off" a small on-off strip shows the bar rising and falling twice with the switch. On "hold on" a grey tag "some materials keep their magnetism: next video".

### 6. any metal?
> So would any metal do? Try a copper rod instead of the nail. The clips stay at three, the same as the empty coil. Copper has no domains, so there's nothing to line up. The same goes for aluminium. Only ferromagnetic materials have domains. That means iron, nickel and cobalt, and their alloys, like **steel**.

Visual: board change: the nail slides out; the painted copper rod (`phys-y11-rod-copper-v1.png`) slides in; the field lines stay sparse; the clip chain at "3". On "no domains" the window shows the copper with no arrows (grey "no domains"); the "iron's own field" bar is replaced by "core's own field: none". On "aluminium" the painted aluminium rod (`phys-y11-rod-aluminium-v1.png`) appears beside it with the same grey "no domains". On "ferromagnetic" a gloss "ferromagnetic: has domains"; chips "iron", "nickel", "cobalt", "alloys like steel". A small grey crossed chip "any metal works" (grey scribble).

### 7. what makes the coil stronger?
> So what makes an electromagnet stronger? Start with the coil, because the core multiplies whatever the coil makes. First, the current. More current means more charge circling the coil every second, and that makes a stronger field. Second, the turns. Each turn adds its own field along the inside, so packing more turns into each metre makes the field stronger. It's turns per metre that count, not just the total. Third, the core itself. A better core multiplies the field **more**.

Visual: board change: the factor panel in the right column, three rows built as spoken, each with a coded slider. On "the current" row 1 "current, I: more charge circling each second"; its slider moves up and the coil's field lines at the left thicken; readout "coil's field ↑". On "the turns" row 2 "turns per metre, n = N/L" (tag "from the last video"); the coil's turns pack closer along the same length; lines thicken. On "not just the total" a mini pair: the same 10 turns spread over twice the length, lines thinner (chip "turns per metre count"). On "the core itself" row 3 "core: multiplies the coil's field"; the nail slides in and the `DomainGrid` bar climbs.

### 8. the equation for the coil
> For the coil on its own, last time's equation shows the first two exactly. B equals mu nought, times N I, over L. Double the current, and the coil's field doubles. Double the turns per metre, and it doubles again. So the two effects multiply, they don't **add**.

Visual: camera continue. The equation strip writes "B = μ₀NI/L" with a grey tag "the coil's own field (no core)"; underneath "B ∝ nI, where n = N/L". On "Double the current" a coded "× 2" on I and on B; on "doubles again" "× 2" on n and B shows "× 4". On "multiply" a small row "2 × 2 = 4, not 2 + 2" with "+" taking a grey scribble.

### 9. worked example: rewinding an electromagnet
> Here's an example. An electromagnet's coil has two hundred turns over a quarter of a metre, carrying one point five amps. It's rewound with three hundred turns over the same length, and the current goes up to three amps. By what factor does the coil's field change? Turns per metre first. Two hundred over point two five is eight hundred per metre, and three hundred over point two five is twelve hundred. That's one point five times. The current doubles. So the field changes by one point five times two, three times **stronger**. And a soft iron core would then multiply that again.

Visual: board change: calculation layout, right column. Task strip: "By what factor does the coil's field change?" (tag "site worked example"). Equation strip: "B ∝ nI, n = N/L". Givens grouped as spoken: "before: N = 200, L = 0.25 m, I = 1.5 A"; "after: N = 300, L = 0.25 m, I = 3.0 A". Working, one line at a time on cue: "n₁ = 200 ÷ 0.25 = 800 m⁻¹", "n₂ = 300 ÷ 0.25 = 1200 m⁻¹", "n₂/n₁ = 1.5"; on "doubles" "I₂/I₁ = 3.0 ÷ 1.5 = 2.0"; on "three times" "B₂/B₁ = 1.5 × 2.0 = 3.0", boxed. At the left the coil plate shows more turns and the current chip "3.0 A". On "multiply that again" the nail slides in (grey tag "the coil's field, before the core").

### 10. the core runs out of domains
> There's a limit, though. With a core, turn the current up and up, and eventually nearly every domain is already lined up. The core is saturated. After that, extra current only adds the coil's own small field, so the strength rises much more slowly. That's why the coil's equation can't tell you the whole electromagnet's **strength**.

Visual: board change: the `DomainGrid` window at the right with a current slider stepping up: more and more arrows align; at the top step all point one way (gloss "saturated: almost every domain already lined up"). At the left a coded sketch graph, "strength" up and "current" across, no numbers: the cored curve rises steeply then flattens in step with the slider; a dashed "coil alone" line rises slowly and straight underneath. On "much more slowly" the flat part pulses. On "whole electromagnet's strength" the equation chip "B = μ₀NI/L: the coil's own field" slides beside the dashed line.

### 11. prediction: reverse the current
> Quick prediction. Reverse the current through the coil. Does the electromagnet get stronger, weaker, or stay the **same**? It stays the same strength, but its poles swap. The coil's field points the other way, so the domains line up the other way, and the north and south ends **change** places.

Visual: board change: the electromagnet at the left with its "I" arrow and pole tags "N" (top) and "S" (bottom); the window at the right with its arrows aligned. On "same" chips "stronger?", "weaker?", "the same?" and a 3-second countdown ring. After the countdown the "I" arrow reverses; the window's arrows swing round to the opposite direction; the bar stays the same height. Chip "the same?" glows; the others take grey scribble crosses. On "change places" the "N" and "S" tags swap ends.

### 12. memory aid
> So remember. The coil makes the field. The iron multiplies it. Switch off, and soft iron lets **go**.

Visual: board change: the electromagnet with its clip cluster, the window beside it. The handwritten line writes large in three parts, each with its picture: "The coil makes the field." (coil-field lines pulse); "The iron multiplies it." (the domain bar climbs); "Switch off, and soft iron lets go." (the clips drop). Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electromagnet's coil has four hundred turns over point two oh metres, carrying two point oh amps. The same four hundred turns are spread over point four oh metres, and the current is raised to three point oh amps. Calculate the factor by which the coil's field changes. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "The coil of an electromagnet has 400 turns wound over a length of 0.20 m and carries a current of 2.0 A. The same 400 turns are rewound so they are spread over 0.40 m, and the current is increased to 3.0 A. The core is unchanged. Calculate the factor by which the magnetic field produced by the coil changes. (2 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Turns per metre first. Four hundred over point two oh is two thousand per metre. Spread over point four oh, it's one thousand, so that halves the field. The current goes up one and a half times. So the factor is a half times one point five, point seven five. The coil's field gets weaker. Saying one and a half times stronger forgets the **length**.

Visual: card shrinks to the top; "spread over 0.40 m" and "3.0 A" underlined. Rows: "n₁ = 400 ÷ 0.20 = 2000 m⁻¹; n₂ = 400 ÷ 0.40 = 1000 m⁻¹: × 0.5"; "I: 3.0 ÷ 2.0 = × 1.5"; "B₂/B₁ = 0.5 × 1.5 = 0.75 (weaker)", boxed. On "forgets the length" a chip "1.5 times stronger" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that putting an aluminium rod inside a solenoid will make a much stronger electromagnet, because aluminium is a metal. Evaluate the claim, and explain how an iron core does increase a solenoid's field. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student claims: 'Placing an aluminium rod inside a solenoid will make a much stronger electromagnet, because aluminium is a metal.' Evaluate the student's claim, and explain how an iron core increases the magnetic field of a solenoid. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The claim is wrong. Aluminium isn't ferromagnetic. It has no domains, so it barely changes the field. Iron has domains. The coil's field lines them up, so the iron's own field adds to the coil's, and the total is many times stronger. Being a metal isn't **enough**.

Visual: card shrinks to the top; "aluminium" and "because aluminium is a metal" underlined. Rows: "aluminium: not ferromagnetic, no domains: field barely changes: claim not supported", boxed; "iron: the coil's field lines up its domains, so the iron's field adds: total many times stronger", boxed, with a small `DomainGrid` pair (random, then aligned). On "isn't enough" a chip "any metal core makes it stronger" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. handoff
> Here's where that matters. A scrapyard crane lifts scrap with a huge electromagnet, then drops it by cutting the current. With a soft iron core, it lets go. But build the core from hard steel, and switch off, and the scrap stays stuck. So which core material makes the best switchable electromagnet, and how can trustworthy sources show **why**?

Visual: board change: the memory line small at the top. The painted crane magnet (`phys-y11-scrapyard-crane-magnet-v1.png`) holds the painted scrap bundle (`phys-y11-scrap-bundle-v1.png`) above a coded ground line; a coded cutaway of the disc shows coil and core, chip "core: soft iron"; plum dashed field lines around the disc. On "lets go" the current chip reads "0 A", the field lines fade and the scrap drops to the ground. On "hard steel" the scrap is lifted again and the core chip changes to "core: hard steel"; on "switch off" the current chip reads "0 A", a small plum dashed field remains and the scrap stays hanging; chip "why won't it let go?". On "why" the chip "Next: Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Electromagnet: a coil (solenoid) with a ferromagnetic core, usually soft iron. Its magnetism switches on and off with the current.
2. Domains: small regions where the atoms' magnets point the same way. In unmagnetised iron they point at random. The coil's field lines them up, so the iron adds its own field: the total can be hundreds of times the coil's.
3. Switch off: soft iron's domains return to random, so the field disappears and the load is released. Copper and aluminium have no domains and do not help.
4. Stronger electromagnet: more current; more turns per metre (n = N/L); a strongly ferromagnetic core. For the coil, B = μ₀NI/L, so the factors multiply. With a core, the strength levels off when the core is saturated.
5. Reversing the current swaps the poles; the strength stays the same.

Memory aid (large, on the notes screen): *The coil makes the field. The iron multiplies it. Switch off, and soft iron lets go.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the nail adds field: its domains line up with the coil's field and add theirs (3, 4). Why an ordinary nail isn't a magnet: random domains cancel (3). Why the electromagnet switches off: soft iron's domains return to random (5). Why copper does nothing: no domains (6). Why current strengthens it: more charge circling each second (7). Why turns per metre: each turn adds its field along the inside (7). Why the effects multiply (8, 9). Why it levels off: the domains run out (10). Why reversing swaps the poles: the alignment reverses (11).
- **Misconceptions addressed:** any metal makes a core (6, A2 crossed); total turns rather than turns per metre (7, A1 crossed); the coil's equation gives the cored magnet's strength (8 tag, 10); reversing weakens it (11 crossed chips); the extra field comes from the wire (2).
- **One idea at a time:** the iron adds field (1, 2), domains at random (3), aligned (4), switch-off (5), ferromagnetic (6), factors (7), the equation (8), the example (9), saturation (10), reversal (11).
- **Video makes it easier:** the student sees the clip chain jump when the nail slides in (2), the domain arrows turn and the iron's own field bar climb (4), the arrows fall back and the clips drop (5), nothing happen with copper (6), the arrows saturate as the graph flattens (10), the arrows swing and the pole tags swap (11), the scrap drop or stay stuck (17).
- **Response opportunity:** two 3 s predictions (1, 11); two unseen HSC-style tasks, 10 seconds each, every condition on the card, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 20 s.
- **Avoided double teaching:** v26's solenoid field shape and v27's B = μ₀NI/L and n = N/L recalled in a phrase each (1, 7, 8); v25's wire field and current in a phrase (7); material data and the steel question left to v29; the method left to v30.
- **Syllabus coverage (preparation):** `cic3a3747e`: the physics the source investigation assesses (what a core does; why soft iron switches off; why non-ferromagnetic metals fail); `cib271cbdb`: the factors and their causes (current, turns per metre, core; saturation; reversal). Both investigations themselves are v29 and v30.
- **Out of scope by design:** permeability and coercivity values, steel grades, source evaluation (v29); method, data and risk (v30); hysteresis; the origin of atomic magnetism; forces on currents and motors (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The coil of an electromagnet has 400 turns wound over a length of 0.20 m and carries a current of 2.0 A. The same 400 turns are rewound so they are spread over 0.40 m, and the current is increased to 3.0 A. The core is unchanged. Calculate the factor by which the magnetic field produced by the coil changes."
Model answer: B = μ₀NI/L, so B ∝ nI with n = N/L. n₁ = 400 ÷ 0.20 = 2000 m⁻¹; n₂ = 400 ÷ 0.40 = 1000 m⁻¹ (halved). I₂/I₁ = 3.0 ÷ 2.0 = 1.5. B₂/B₁ = 0.5 × 1.5 = 0.75: the coil's field falls to 0.75 times its original value. Classic mistake (crossed): "1.5 times stronger" (the change in length ignored).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** "A student claims: 'Placing an aluminium rod inside a solenoid will make a much stronger electromagnet, because aluminium is a metal.' Evaluate the student's claim, and explain how an iron core increases the magnetic field of a solenoid."
Model answer: The claim is not supported. Aluminium is not ferromagnetic: it has no magnetic domains, so it barely changes the solenoid's field (being a metal is not enough). Iron is ferromagnetic: it contains domains, regions in which the atoms' magnets point the same way. In unmagnetised iron they point at random and cancel. The solenoid's field lines the domains up, so the iron becomes magnetised and its own field adds to the coil's, making the total field many (up to hundreds of) times stronger. Classic mistake (crossed): "any metal core makes it stronger".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (assumed v27 frame) | 500 turns, 0.25 m, 3.0 A, B ≈ 7.5 × 10⁻³ T | opening frame |
| Hook (illustrative) | 2.0 A; 3 clips empty; about 25 clips with the nail | 1, 2, 4, 5 |
| Copper rod | 3 clips (same as empty) | 6 |
| Doubling | × 2, × 2 → × 4 | 8 |
| Worked example (site `we-1`) | 200 → 300 turns, L = 0.25 m, 1.5 → 3.0 A; n 800 → 1200 m⁻¹; × 1.5 × 2.0 = × 3.0 | 9 |
| A1 | 400 turns, 0.20 → 0.40 m, 2.0 → 3.0 A; n 2000 → 1000 m⁻¹; 0.5 × 1.5 = 0.75 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Opening: 4π × 10⁻⁷ × (500 ÷ 0.25) × 3.0 = 7.54 × 10⁻³ T ≈ 7.5 × 10⁻³ T.
- Worked example: 200 ÷ 0.25 = 800; 300 ÷ 0.25 = 1200; 1200 ÷ 800 = 1.5; 3.0 ÷ 1.5 = 2.0; 1.5 × 2.0 = 3.0.
- A1: 400 ÷ 0.20 = 2000; 400 ÷ 0.40 = 1000; 1000 ÷ 2000 = 0.5; 3.0 ÷ 2.0 = 1.5; 0.5 × 1.5 = 0.75.
- Scene 8: 2 × 2 = 4.

## Memory aid check

- **"The coil makes the field. The iron multiplies it. Switch off, and soft iron lets go."** Written for this lesson (the site hooks file has no electromagnet line). Meaning, as said in 12: the current in the coil creates the field (4, 7); the core's lined-up domains add to it, so it grows many times (4); soft iron's domains return to random when the current stops (5). Assumptions checked: "multiplies" is a description, not an exact constant factor (the boost depends on the core and gaps and falls as the core saturates, 10); "soft iron lets go" is true of soft magnetic materials and deliberately not of hard steel (handoff, v29). Introduced after the mechanism (3 to 11).
- **Considered, not used:** "more amps, more turns, more iron" (a list without causes, and "more iron" misleads: the material matters more than the amount).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,603 characters** (5,620 joined), 18 scenes. Characters per scene (1 to 18): 377, 287, 263, 415, 349, 305, 478, 258, 580, 330, 287, 97, 305, 345, 250, 261, 341, 75. At 13.3 characters per second the speech is about 423 s; add about 12 s of holds and settling (the nail slide-in in 2, the domain turn in 4, the drop in 5, the working lines in 9, the saturation steps in 10), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 52 s more of the quiet notes hold (about 96 s of holds): **about 519 s**, inside the owner's 5 to 10 minute target. If the voiced preview runs long, the first cut is scene 8's doubling sentences (about 110 characters; the "× 2 × 2 = × 4" row stays on screen silent).

## Scene list and build ids

Lesson key `p-y11-fa3-v28` (route phys-y11-fa3-v28). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v28` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v28` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, iron-is-doing-it, domains-random, domains-aligned, switch-off, any-metal, coil-factors, coil-equation, worked-example, saturation, reverse-prediction, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). hook and reverse-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v27's last frame continues into scene 1 (camera continue: the solenoid icon shrinks); 1 to 2 camera continue; 2 to 3 board change (the window opens from the magnifier); 3 to 4 to 5 camera continue; 5 to 6 board change; 6 to 7 board change; 7 to 8 camera continue; 8 to 9 board change; 9 to 10 board change; 10 to 11 board change; 11 to 12 board change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and reverse-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v28-learning-review.md`, `science_check` = `checks/p-y11-fa3-v28-physics-check.md`.

## Assets

Checked first (3 Nov): `public/assets/physics/` holds the bench supply (`phys-y11-low-voltage-supply-v1.png`) and FA1 plates, including `phys-y11-retort-stand-electromagnet-v1.png` (a short black release coil clamped to a stand for FA1's free-fall timing; it shows no core, its leads are red and black, and its coil is too small to show a nail sliding in, so it is not reused here). No coil former, nail, paper clip, rod, crane or scrap plate is delivered. Reused by name (uniform scaling only, never stretched):
- `phys-y11-low-voltage-supply-v1.png` (delivered; 1 to 7, 9).

New (requested below): `phys-y11-coil-former-v1.png` (1 to 12), `phys-y11-iron-nail-v1.png` (1 to 12, 16), `phys-y11-paper-clip-v1.png` (1 to 6, 12), `phys-y11-rod-copper-v1.png` (6), `phys-y11-rod-aluminium-v1.png` (6), `phys-y11-rod-soft-iron-v1.png` and `phys-y11-rod-hard-steel-v1.png` (requested here as a matching set; first used in v29), `phys-y11-scrapyard-crane-magnet-v1.png` (17), `phys-y11-scrap-bundle-v1.png` (17).

Considered, not used: the FA1 release coil (above); a multimeter plate for the hook (a coded current chip is enough; v30 uses the meter); a car plate for the crane (FA1's cars are top views and a lifted car invites the site's overstatement; a crushed scrap bundle is honest).

Coded: field lines, the `DomainGrid` window and bar, the clip chain arrangement (from the clip plate), the current chip and "I" arrows, pole tags, the factor panel and sliders, equation and calculation layout, the sketch graph, the crane cutaway (coil and core drawn inside the disc), the ground line.

Kit gaps (for the build brief): **`DomainGrid`**; **`CoilField`** with density tied to a field value (extends v26/v27's solenoid lines); **clip chain** from plate instances; **nail slide-in** from the coil plate's bore sidecar; **sketch graph** (no numbers); **pole tags**; **crane cutaway and drop**.

## Codex asset brief (Year 11 Physics FA3 v28, electromagnet parts)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, numerals or brand marks, no people or hands, never stretched). Save to `public/assets/physics/`. Plates avoid red and navy.

1. `phys-y11-coil-former-v1.png`: a clear plastic tube about 8 cm long and 1.5 cm across, side view, horizontal, with a single neat layer of enamelled copper wire (copper brown) wound tightly along its middle 5 cm; both ends of the tube open and empty (the bore visible as a dark ellipse at each end); two wire ends leaving the coil as plain grey insulated leads. About 1200 px wide. Sidecar `phys-y11-coil-former-v1.json`: the bore's axis line (start and end points), the winding's start and end x positions, the lower end of the tube (where clips hang), and the two lead ends.
2. `phys-y11-iron-nail-v1.png`: a large plain dark grey iron nail, side view, horizontal, head at the left, about 10 cm long and thin enough to fit the coil's bore at the same scale; no rust. About 1200 px wide. Sidecar: the shaft axis and the tip.
3. `phys-y11-paper-clip-v1.png`: one standard silver steel paper clip, flat, front view, slightly angled light. About 300 px tall. Sidecar: the two end loops (hang points), so instances can be chained and rotated.
4. Rod set, all four at the same size and view (a short solid cylinder about 8 cm long and the nail's thickness, side view, horizontal, ends gently bevelled), each about 1200 px wide, distinguishable by finish alone: `phys-y11-rod-copper-v1.png` (warm copper), `phys-y11-rod-aluminium-v1.png` (matte silver-white), `phys-y11-rod-soft-iron-v1.png` (dark matte grey), `phys-y11-rod-hard-steel-v1.png` (bright, slightly blue-grey polished steel). Shared sidecar pattern: the axis line.
5. `phys-y11-scrapyard-crane-magnet-v1.png`: the end of a yellow crane boom (no cab, no operator) with a short chain hanging a large round lifting electromagnet, side view: a thick dark grey steel disc about twice as wide as it is tall, with a cable from its top. About 1400 px tall. Sidecar: the disc's face (bottom edge), its centre and its outline for a coded cutaway.
6. `phys-y11-scrap-bundle-v1.png`: a compact block of crushed scrap steel (bent sheet metal, rods, a wheel rim), grey and rust-brown (no red), side view, flat top. About 1000 px wide. Sidecar: the top contact line.

Acceptance: true transparency, no halo; no text, numerals or brand marks; no people; the nail fits the coil's bore at the same scale; the rods match each other in size and view; not stretched.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics: a ferromagnetic core's domains are lined up by the coil's field and add their own field; random domains cancel; soft iron returns close to unmagnetised when the field is removed; copper and aluminium are not ferromagnetic and barely change the field; ferromagnetic materials include iron, nickel, cobalt and alloys such as steel; B = μ₀NI/L gives the coil's own field (air core), so B ∝ nI; a cored electromagnet saturates, so its strength rises more slowly at high current; reversing the current swaps the poles with the same strength.
3. Confirm "hundreds of times stronger" carries its grey tag and is not tied to the clip counts.
4. Confirm no permeability or coercivity values, steel grades or source evaluation (v29) and no method or risk (v30) is taught.
5. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
6. Confirm the syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
7. Confirm the opening frame against `phys-y11-fa3-v27.md` once it exists (assumed here); report any mismatch for root to align the bridge take.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Electromagnets: Why an Iron Core Makes a Coil Stronger | Year 11 Physics

(Title length: 73 characters; shorter option: "How Electromagnets Work: Cores and Strength | Year 11 Physics", 61 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson26.sa.html

Slide an iron nail into a coil and it suddenly holds far more paper clips. Why? See the magnetic domains inside the iron line up with the coil's field and add their own, find out why soft iron lets go when you switch off and copper does nothing at all, and work out how the current and the turns per metre set the coil's field (and why a core eventually levels off). Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025), prepared for in this video:
"Conduct a secondary-source investigation to assess the choice of materials used in the core of electromagnets" (cic3a3747e)
"Conduct a practical investigation to examine the factors affecting the strength of an electromagnet" (cib271cbdb)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: The magnetic field inside a solenoid, B = μ₀NI/L (previous video). Next: Choosing an electromagnet's core material.

#Year11Physics #Physics #Electromagnets #HSCScience

## Open decisions

- **1. Learner question (route placeholder rewritten).** "Why does an iron core make a coil's magnetic field so much stronger, and what else makes an electromagnet stronger?" Root to enter it in the route, and to align v27's handoff chip to it.
- **2. v29's question.** The handoff chip uses v29's reworded form ("Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?"); `phys-y11-fa3-v29.md` records the rewording. Root enters it or keeps the route's wording (then this chip changes).
- **3. Opening frame assumed.** v27 was not designed when this was finished. Root aligns scene 1's bridge take and first visual to v27's actual last frame (only the take and the opening second change).
- **4. Domain model.** The "atoms act like tiny magnets" model with the grey tag; the physics check confirms the simplified wall-motion and rotation picture is fair at Year 11.
- **5. Title.** The 73-character title or the 61-character option (root's FA2 preference was the shorter option).

## Review notes

- Revision 1 next steps: student learning review (trace from v27 at Year 11 entry; check that the domain window makes "the iron adds its own field" visible rather than told; that switch-off and copper are clear without stealing v29's steel comparison; that the factor causes are plain; that saturation reads as a needed condition, not a detour; that the attempts give nothing away), then the Codex physics check and error check.
- The clip cluster jumping with the nail (2), the domain arrows turning with the iron's own field bar (4), the arrows relaxing and the clips dropping (5), the empty copper window (6), the saturating window beside the flattening graph (10) and the pole tags swapping (11) carry the explanation; judge them at playback speed in the voiced preview.
