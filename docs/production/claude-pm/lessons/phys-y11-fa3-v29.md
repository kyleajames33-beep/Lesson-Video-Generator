# Year 11 Physics FA3 V29 (Physics 2025, Year 11, Focus Area 3): Which core material makes the best switchable electromagnet, and how can trustworthy sources show why? The core materials investigation (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v29`, `docs/production/student-learning-review.md`), a Codex physics check (including the material values) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new beyond v28's requests (the rod set, crane magnet, scrap bundle, coil former, nail and paper clip, all requested in `phys-y11-fa3-v28.md`); the bench supply (delivered), v15's multimeter, Biology's petri dish (`b3a-petri-dish-v1.png`, delivered) and the delivered retort stand reused by name. Source A's values are typical published values, rounded, to be confirmed by the physics check against a named reference; Sources B and C are example sources written for this lesson and are labelled so on screen.

Narration 5,703 characters, 20 scenes, about 528 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: one investigation point, fully conducted; not padded.

Scope: twenty-ninth video of the Year 11 Physics (2025) Focus Area 3 route and the secondary-source investigation of core materials: what a secondary-source investigation is; the criteria a switchable core must meet (magnetise strongly when on, keep little magnetism when off; cost as a practical check); reading two properties from a reference table (relative permeability; coercivity, read through v27's nI); ruling out copper and aluminium; why hard steel holds on (its domains are jammed in place); weighing nickel against soft iron; checking an example supplier sheet and an example forum claim for reliability (who and why, data and method, agreement); a validity point (which steel?); the conclusion with limitations. Templates: `phys-y11-fa3-v15.md` (investigation format and FA0 placement table) and `phys-y11-fa3-v13.md` to `v18.md` (FA3 section list), with the secondary-source structure of `bio-y11-fa3-v18.md` (step rail, `SourceCard` with three check slots, one card bright at a time). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson26.sa.html`: card 2 (soft iron versus steel, a secondary-source assessment) and its figure, the quick check, the odd one out, Q2 (permeability and retentivity) and its model answer, Q1's core half; card 1 belongs to v28 and card 3, activity 1 and Q3 to v30. Route entry: `phys-y11-fa3-v29` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Core materials source investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete core materials source investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next: "phys-y11-fa3-v30: Which controlled changes alter measured electromagnet strength?" (this design proposes "How can a fair test show how the current and the number of turns change an electromagnet's strength?"; `phys-y11-fa3-v30.md` adopts it; see open decision 2).

**Opening frame (v28's actual handoff, Revision 1, 3 Nov).** v28's scene 17 ends with its memory line "The coil makes the field. The iron multiplies it. Switch off, and soft iron lets go." small at the top; the painted crane magnet (`phys-y11-scrapyard-crane-magnet-v1.png`) with the painted scrap bundle (`phys-y11-scrap-bundle-v1.png`) still hanging under it, current chip "0 A", core chip "core: hard steel", a small plum dashed field remaining around the disc; chip "why won't it let go?"; chip "Next: Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (sources are coded cards with plain citation text, no logos, no imitated page layouts, no author photos); the crane, scrap and rods painted; tables, source cards, domain windows and readouts coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v28 (domains, soft iron lets go, ferromagnetic) and v27 (n = N/L; the coil's field rises with nI) recalled in a phrase each; FA2 v25 and FA1 investigation skills (reliability, validity) recalled in a phrase.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Magnetism"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G3-07 `cic3a3747e`: "Conduct a secondary-source investigation to assess the choice of materials used in the core of electromagnets"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G3-04 `ci72f6b8b9`, P25-FA0-G2-03 `cid3f0dfde`, P25-FA0-G4-01 `ci6364656f`, P25-FA0-G5-04 `ci15366d75`, P25-FA0-G4-04 `cief805888`, P25-FA0-G7-01 `ci9fda93ae`, P25-FA0-G5-05 `ci8856aeb0`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v28's handoff (above); the question and what a secondary-source investigation is; the criteria; Source A's table; permeability (plain meaning), with copper and aluminium ruled out (prediction); coercivity read as "the reverse nI needed to wipe out the leftover magnetism"; why hard steel holds on (domains jammed by carbon and strain; plain words); weighing both properties: nickel against soft iron (prediction); Source B (supplier sheet) checked against A; Source C (forum claim) judged; the reliability checks; the validity point (which steel?); the conclusion and its limitations; memory aid; two attempts. Stops at a justified choice of core material from judged sources. Not taught: the electromagnet's practical investigation (v30); hysteresis loops and saturation values; eddy currents and laminated cores (Year 12); a risk assessment (no laboratory work; author note f).

## Decisions

- **Learner question (route question reworded; open decision 1).** Route: "Which core material best fits a switchable electromagnet, and why trust the sources?" It is answerable but splits into two loose halves; reworded as one causal question: "Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?" ("show why" ties the source judgement to the physical cause). Heading on screen (shortened): "Which core makes the best switchable electromagnet?" Answer, built in order: the criteria (2); Source A's two properties (3 to 6); weighing them (7); Sources B and C judged (8 to 10); which steel (11); conclusion and limitations (12, 13); memory aid (14).
- **Step rail and source desk (Biology FA2 v25 and FA3 v18 pattern, `SourceCard` promoted to the physics kit).** Top-left a five-step rail: "1 criteria", "2 gather", "3 analyse", "4 judge", "5 conclude", the current step lit. Right third: the source desk, one coded `SourceCard` bright at a time, each with three check slots ("who and why?", "data and method?", "agrees with others?") that fill with a tick, a cross or a "?" as spoken.
- **The sources (honesty rule).** Source A: "Physics reference table: magnetic properties of materials (typical values, rounded)". Its values are typical published values (author note a), shown with a grey tag "typical values: vary with purity and treatment"; the physics check confirms them against a named reference (Kaye and Laby's tables or an equivalent university materials text), and root may then put that reference's name on the card. Sources B and C are example sources written for this lesson, each carrying a grey tag "example source, written for this lesson". No real company, website or person is named or imitated. Source B: "A supplier's product sheet for soft-iron electromagnet cores" stating "relative permeability up to about 5000", "coercivity about 80 A m⁻¹", "releases cleanly when switched off" and "the best core on the market". Source C: "A post on a hobby forum, no author details": "Use a steel bolt for your core. Steel makes the strongest magnets, so it makes the strongest electromagnet."
- **Source A's table (values in author note a).** Columns: material; relative permeability (maximum, typical); coercivity (A m⁻¹, typical). Rows: soft iron (annealed) ≈ 5000, ≈ 80; nickel ≈ 600, ≈ 60; hardened carbon steel ≈ 100, ≈ 4000; copper ≈ 1, "not ferromagnetic"; aluminium ≈ 1, "not ferromagnetic"; a grey reference row "air (vacuum) 1". Each row starts with its painted rod (v28's set; nickel uses a coded rod of the same size, author note e).
- **Relative permeability, plain meaning.** "How many times more easily the material magnetises than empty space (air). The bigger it is, the more the core can boost the coil's field." Grey tag: "in a real magnet the boost is less, because of gaps" (keeps v28's "hundreds of times" consistent with thousands in the table).
- **Coercivity, read through v27's nI (the visible cause).** "After switch-off, some magnetism is left. Coercivity is how big a reverse field it takes to wipe it out, in amps per metre, the same units as turns per metre times current." Worked reading: with a coil of 1000 turns per metre, soft iron's 80 A m⁻¹ needs only 0.08 A in reverse; hard steel's 4000 A m⁻¹ needs 4 A. "Low coercivity: it lets go easily." The site's word "retentivity" (Q2) is shown as a grey gloss: "the site calls the leftover magnetism 'retentivity'; for letting go, the low coercivity is what matters" (author note b; site correction 1).
- **Why hard steel holds on (the cause, `DomainGrid` from v28).** Two windows side by side after switch-off: soft iron's arrows relax back to random; hard steel's stay mostly lined up, with small grey dots at the patch borders (gloss "carbon atoms and strain jam the domains in place"). This turns the table's numbers into the mechanism; one sentence.
- **Prediction 1 (3 s, scene 4): which can't be cores?** "Which of these could never boost the field?" Chips on the five rows. Answered in 5: copper and aluminium (relative permeability about 1, the same as air; no domains, v28).
- **Prediction 2 (3 s, scene 7): nickel or soft iron?** "Nickel lets go even more easily than soft iron. So is nickel the best core?" Chips "yes, nickel?", "no, soft iron?". Answered: no; nickel's permeability is about an eighth of iron's, so its field boost is far smaller, and it costs much more (cost tagged "a practical criterion"; author note c). Both properties must be read together (site Q2's model answer).
- **Judging the sources (`cid3f0dfde`, `ci15366d75`).** Source A: who (a reference table compiled from measurements), data and method (values with units; "typical" stated), agreement (B agrees): ticks. Source B: who and why (a seller: a reason to overstate, "?" in amber outline), data (values given, ticks), agreement with A (tick): "use its numbers, not its sales words" ("the best core on the market" takes a grey scribble). Source C: who (unknown, cross), data (none, cross), agreement (disagrees with A for switch-off, cross). Then why C is half right: steel does make good permanent magnets, precisely because it holds on, which is the wrong property for a switchable magnet. The mistake taught: judging by the type of website rather than by evidence (A2 crossed).
- **Validity: which steel? (`ci15366d75`; site correction 2 in v28).** "Steel isn't one material. Mild steel and silicon steel are soft, and are used in motor and transformer cores. Hardened carbon steel is the hard one." So C's claim and the site's "steel" must be read for which steel; Source A names it. One sentence and a three-chip strip, no new data.
- **Conclusion (`cic3a3747e`'s "assess the choice").** Soft iron (or another soft magnetic material such as silicon steel) for a switchable electromagnet: high permeability, low coercivity, cheap. Hardened steel suits permanent magnets, not switchable ones. Nickel works but boosts less and costs more. Copper and aluminium are useless as cores. Confidence: two independent sources agree (A and B), the third is rejected with reasons.
- **Limitations (`ci7e38e278` applied).** Typical values vary with purity and heat treatment; the real boost is less than the permeability because of gaps; the table does not test our own nail and coil (v30 measures that). Improvement: check a second independent reference and test the actual core.
- **Attempts (original, HSC style).** (A1, data analysis and justification) A table for materials P, Q and R: "relative permeability (maximum): P 4000, Q 150, R 1.0; coercivity (A m⁻¹): P 50, Q 5000, R: not ferromagnetic". "An engineer is choosing the core for an electromagnet in a door lock. The lock must release the instant the power is cut. (a) Identify the most suitable core material, and justify your choice using both properties in the table. (b) Suggest a use for material Q, with a reason. (3 marks)" Answer: P; high permeability, so it magnetises strongly and gives a strong field when on; low coercivity, so it keeps little magnetism and releases when the power is cut; Q, a permanent magnet, because its high coercivity means it keeps its magnetism. Crossed: "Q, because it stays magnetised the longest". (A2, source reliability) "A student finds two sources. Source 1: a magnet retailer's website states, 'Our cobalt-steel cores are the strongest electromagnet cores available.' No data are given. Source 2: a university engineering textbook gives a table of the relative permeability and coercivity of common core materials, with the conditions under which they were measured. Assess the reliability of each source for choosing the core of a switchable electromagnet. (3 marks)" Answer: Source 2 is more reliable: expert authors, measured data with conditions, can be checked against other references; Source 1 is less reliable: a commercial interest in the claim, no data or method, and "strongest" is undefined (it says nothing about releasing when switched off). Crossed: "Source 1 is unreliable because it is on a website".
- **Mistake scene:** none separate. "Steel is best because it makes the strongest magnets" (Source C, 10; site misconception 2); "any metal works" (5); "lowest coercivity alone wins" (7, nickel); "a source is unreliable because it's online" (A2 crossed); "a seller's numbers must be false" (8: checked against A instead).
- **Memory aid:** "Strong when on, gone when off: soft iron. Hard steel holds on." (see "Memory aid check").
- **Handoff (route next; proposal for v30's question).** Board change: Source A's soft iron row stays small at the top; the bench assembles, unconnected: the painted retort stand (`phys-y11-retort-stand-v1.png`) with its boss (`phys-y11-boss-crossbar-v1.png`) clamping v28's coil (`phys-y11-coil-former-v1.png`) with the nail inside, pointing down over the painted petri dish (`b3a-petri-dish-v1.png`) holding a heap of paper clips; the painted supply and v15's multimeter beside; an empty results table "current (A) | clips lifted"; chips "what do we change?" and "how do we measure strength?"; then "Next: How can a fair test show how the current and the number of turns change an electromagnet's strength?". This is the frame v30 opens on.
- **Site sources used:** card 2 and its figure (soft iron releases, steel keeps: 6, 7, 12); quick check (A: 12, key notes); odd one out (copper not ferromagnetic: 5); misconception 2 (Source C, 10); key terms (soft and hard magnetic materials: 6, 11); Q2 and its model answer (permeability high, "retentivity" low, both read together: 3 to 7; site correction 1); Q1 core half (A1 adapted).
- **Site corrections (quoted from site lesson 26, read 3 Nov; for `../site-corrections-phys-y11.md`; v28 logs three for this lesson; this one is new):**
  1. Independent practice Q2 and its model answer: "Retentivity describes how much magnetism the material keeps once the magnetising current is switched off ... a low value is what the student wants." Whether a core lets go depends mainly on its coercivity (how hard the leftover magnetism is to remove); soft iron's retentivity (remanence, in a closed ring) is not small, but its coercivity is very low, so in an open electromagnet almost nothing is left. Suggest: "coercivity (how strong a reverse field is needed to remove the leftover magnetism): a low value is wanted", or keep "retentivity" with "together with a low coercivity". Minor; a precision correction.
  - Suggestion, not an error: card 2 describes "comparing manufacturers' data and reference tables" without any data. Suggest adding a small typical-values table (as Source A) and one sentence on judging a seller's claims.
- **Cause chain taught, in order:** (1) a hard-steel core kept the scrap stuck: the core material decides (1); (2) a switchable core must magnetise strongly and keep little magnetism (2); (3) a high permeability means a big boost (4); (4) copper and aluminium, at about 1, boost nothing (5); (5) a low coercivity means a small reverse nI wipes out the leftover magnetism, so it lets go (6); (6) hard steel's jammed domains keep it magnetised (6); (7) both properties together pick soft iron; nickel boosts less (7); (8) a source is trusted for its evidence and agreement, not its format (8 to 10); (9) "steel" must be pinned down (11); (10) the conclusion and its limits (12, 13).
- **Entry knowledge (route `entryKnowledge`):** v28 (electromagnet; domains; soft iron lets go; ferromagnetic; the crane), v27 (n = N/L; the coil's field rises with nI; units of turns per metre), FA2 v25 and FA1 v10 (secondary source; reliability and validity in a phrase), each recalled in a phrase; Stage 5 (reading tables).
- **Learner-visible vocabulary (plain meaning at first use):** secondary-source investigation (answering a question from data other people measured and published, and judging how far to trust it, 1); relative permeability (how many times more easily a material magnetises than empty space, 3); coercivity (how big a reverse field it takes to wipe out the magnetism left after switch-off, 6); reliable (other sources and repeats give the same result, 8, recalled); valid (it measures or answers what you actually need, 11, recalled); hard and soft magnetic materials (hard keeps its magnetism; soft lets it go, 6).
- **Legacy logic ported:** none. Drawing parts only: `Panel`, `Label` (`course-kit.tsx`); Biology FA2 v25's `SourceCard` and step rail (copied lesson-local or promoted; root to confirm).
- **New explainer motion (coded unless a plate is named):** **step rail**; **`SourceCard`** with three check slots; **material table** (row at a time, each row led by its rod plate; columns light as spoken; rows rule out with a grey band); v28's **`DomainGrid`** (two windows: relaxing and jammed); **reverse-nI reading** (a small coil icon with "n = 1000 m⁻¹" and a reverse "I" arrow whose readout scales 0.08 A against 4 A); **two-property chart** (a coded scatter: permeability up on a log axis, coercivity across on a log axis, each material a labelled dot; the "switchable" corner, high and left, shaded pale green; author note d); **steel strip** (three chips); v28's crane and scrap; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a table; `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Board layout (constant):** heading and step rail top-left; the working area (table, chart or windows) centre-left; the source desk in the right third.
- **Colour key:** as v28 (magnetic field and domain arrows plum; pole tags ink on pale grey); check-slot ticks ink, crosses grey scribble, unknowns an amber outline "?"; the "switchable" region pale green; ruled-out rows a grey band; "typical values" and "example source" tags grey; plates avoid red and navy.
- **No human figures.** Sources are text cards; no authors, faces or hands; the crane has no operator.
- **Author notes (not learner copy):**
  (a) Source A values (typical, rounded; physics check to confirm against a named reference): annealed commercial soft iron (about 99.8 per cent Fe), maximum relative permeability about 5000, coercivity about 80 A m⁻¹; nickel, maximum relative permeability about 600, coercivity about 60 A m⁻¹ (annealed); hardened high-carbon steel (about 1 per cent C), relative permeability about 100, coercivity about 4000 A m⁻¹ (the classic carbon-steel magnet figure); copper and aluminium, relative permeability 1.00 to two decimal places (copper slightly below 1, aluminium slightly above). Published values vary widely with purity and treatment; the tag says so.
  (b) Coercivity H_c is in A m⁻¹, the units of H = nI inside a long solenoid, so "the reverse nI that wipes out the leftover magnetism" is a fair Year 11 reading (for an ideal long solenoid with the material filling it). Remanence (the site's "retentivity") of soft iron in a closed ring can be over 1 T, but in an open core the self-demagnetising field exceeds its tiny coercivity, so little remains; a high-coercivity steel resists that. Hence coercivity, not remanence, decides switch-off.
  (c) Nickel: lower maximum permeability and a lower saturation field (about 0.6 T against about 2.1 T for iron), and much higher cost. Only "boosts less" and "costs much more" are said. Silicon (electrical) steel: maximum relative permeability several thousand, coercivity tens of A m⁻¹; mild (low-carbon) steel: permeability in the hundreds to thousands, coercivity a few hundred A m⁻¹. Only "soft, used in motor and transformer cores" is said.
  (d) The two-property chart uses log axes so both 1 and 5000, and 60 and 4000, fit; the axes carry plain labels ("boost: relative permeability", "hard to wipe out: coercivity") and tick values 1, 10, 100, 1000, 10 000; a grey tag "each step is ten times" (log axes are new at Year 11; the tag is the plain meaning). Copper and aluminium sit on the bottom axis with "not ferromagnetic" (no coercivity point; drawn as hollow dots at the left edge).
  (e) No nickel rod plate is requested (one row only); the row uses a coded plain rod in the same size, or root adds `phys-y11-rod-nickel-v1.png` to v28's set.
  (f) Risk: a secondary-source investigation has no laboratory hazard; no risk table is spoken. Teacher note only: none needed.
  (g) Pronunciations: "permeability" (PER-mee-a-BIL-i-tee); "coercivity" (koh-er-SIV-i-tee); "ferromagnetic".

Main question: *A crane with a hard-steel core wouldn't let go of its scrap. Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?*
Entry knowledge (v28 domains, soft iron, ferromagnetic; v27 nI and turns per metre; FA2 v25 secondary sources; FA1 reliability and validity).
Stops after: the criteria; Source A's permeability and coercivity; copper and aluminium ruled out; hard steel's jammed domains; nickel weighed; Sources B and C judged; which steel; the conclusion with limitations; two attempts. No practical, no hysteresis, no laminations.
Handoff: v30, the electromagnet practical investigation.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v29 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G3-04 `ci72f6b8b9` | "Gather data and information from a range of secondary sources" | Scenes 3, 8, 9: a reference table, a supplier sheet and a forum claim, of different kinds | Database searches (fa0-v03) |
| P25-FA0-G2-03 `cid3f0dfde` | "Assess the reliability of secondary data and information when planning" | Scenes 8 to 10, A2: who and why, data and method, agreement | (continues FA2 v25) |
| P25-FA0-G4-01 `ci6364656f` | "Select qualitative and quantitative information from texts, diagrams, flow charts, tables, databases, graphs and multimedia resources" | Scenes 3 to 7, A1: two columns read from a table and a chart | Other formats (fa0-v04) |
| P25-FA0-G5-04 `ci15366d75` | "Assess the validity , reliability, accuracy and precision of data and information" | Scenes 10, 11: reliability of three sources; validity (which steel?) | Accuracy and precision (fa0-v05) |
| P25-FA0-G4-04 `cief805888` | "Extract data and information from a wide range of sources and acknowledge these sources using an accepted referencing style" | Scene 8 and the source cards: each value tagged with its source | A referencing style (fa0-v07) |
| P25-FA0-G7-01 `ci9fda93ae` | "Construct evidence-based arguments and recognise the role of peer review in the evaluation of scientific practices, solutions or conclusions" | Scene 12: the conclusion argued from two agreeing sources, the third rejected with reasons | Peer review (fa0-v07) |
| P25-FA0-G5-05 `ci8856aeb0` | "Interpret data and information to identify outliers , make predictions , explain results and draw conclusions" | Scenes 4, 7, 12: two predictions; the conclusion | (continues in v30) |

Applied, not re-taught: P25-FA0-G5-06 `ci7e38e278` (limitations and improvements, scene 13). Recommendation to root: accept the table and record it in the route as v29's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. the question, and a secondary-source investigation
> With a hard steel core, the crane wouldn't let go. So the core material decides whether an electromagnet can switch off. Today we choose the best core, not by guessing, but from published data. That's a secondary-source investigation. It means answering a question from data other people measured and published, and then judging how far to trust **it**.

Visual: opens on v28's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Which core makes the best switchable electromagnet?"; the memory line fades. On "the core material decides" the "core: hard steel" chip pulses beside the stuck scrap. On "published data" the crane shrinks to the top right and the source desk slides in at the right (three empty card slots). On "secondary-source investigation" a gloss "secondary-source investigation: answering a question from data other people measured and published, then judging how far to trust it". On "trust it" the step rail writes top-left: "1 criteria", "2 gather", "3 analyse", "4 judge", "5 conclude".

### 2. what the core must do
> First, decide what a good core has to do. When the current's on, it has to magnetise strongly, so the magnet lifts a lot. When the current stops, it has to keep as little magnetism as possible, so it lets go. And for a big crane, it shouldn't cost a **fortune**.

Visual: camera continue; "1 criteria" lit. A criteria panel builds as spoken: "on: magnetises strongly (big boost)"; "off: keeps little magnetism (lets go)"; "practical: affordable" (grey). Beside each, a tiny picture: the crane lifting; the crane dropping; a small coded coin icon.

### 3. source A: a reference table
> Here's our first source, a physics reference table. These are typical values, rounded. The first column is relative permeability. That's how many times more easily a material magnetises than empty space, or air. The bigger the number, the more the core can boost the coil's **field**.

Visual: board change; "2 gather" lit. Source A's card brightens on the desk: "Source A: physics reference table, magnetic properties of materials (typical values, rounded)". The material table builds in the working area, row at a time, each row led by its rod plate (`phys-y11-rod-soft-iron-v1.png`, a coded nickel rod, `phys-y11-rod-hard-steel-v1.png`, `phys-y11-rod-copper-v1.png`, `phys-y11-rod-aluminium-v1.png`) and a grey reference row "air: 1". On "relative permeability" the second column lights (gloss "relative permeability: how many times more easily it magnetises than empty space"); tag "typical values: vary with purity and treatment". The values stay hidden under grey bars for now.

### 4. prediction: which can't be a core?
> Quick prediction. Before we read the numbers, which of these could never boost the field, whatever the **current**?

Visual: camera continue. Chips appear on each row's rod: "soft iron?", "nickel?", "hard steel?", "copper?", "aluminium?"; a 3-second countdown ring.

### 5. copper and aluminium are out
> Copper and aluminium. Their relative permeability is about one, the same as air. They have no domains to line up, so a copper core gives the same field as no core at all. Soft iron is about five thousand, nickel about six hundred, and hard steel only about one **hundred**.

Visual: camera continue; "3 analyse" lit. On "Copper and aluminium" their chips glow; on "about one" their cells reveal "≈ 1" and the rows take a grey band "not ferromagnetic: ruled out". On "no domains" a small empty `DomainGrid` window (v28) beside the copper row. On "five thousand" the soft iron cell reveals "≈ 5000"; "nickel" "≈ 600"; "hard steel" "≈ 100". A grey tag under the column: "in a real magnet the boost is less, because of gaps".

### 6. letting go: coercivity
> Now the second column, coercivity. After switch-off, a little magnetism is left behind. Coercivity is how big a reverse field it takes to wipe that out. It's in amps per metre, the same units as turns per metre times current. So for soft iron, a coil with a thousand turns per metre needs just point oh eight amps, backwards, to clear it. Hard steel needs four amps. That's because in hard steel, carbon atoms and strain jam the domains in place. Soft iron lets go easily. Hard steel holds **on**.

Visual: camera continue. The third column lights (gloss "coercivity: how big a reverse field it takes to wipe out the leftover magnetism"); the site term as a grey gloss "the site's 'retentivity': the leftover magnetism". On "amps per metre" a unit chip "A m⁻¹ = (turns per metre) × (amps)" (tag "from B = μ₀NI/L"). Cells reveal: soft iron "≈ 80", nickel "≈ 60", hard steel "≈ 4000". On "a thousand turns per metre" a small coil icon "n = 1000 m⁻¹" with a reverse "I" arrow and readout "80 ÷ 1000 = 0.08 A"; on "four amps" the readout changes to "4000 ÷ 1000 = 4 A" for the steel row. On "jam the domains" two `DomainGrid` windows side by side after switch-off: soft iron's arrows relax to random; hard steel's stay lined up with small grey dots at the patch borders (gloss "carbon atoms and strain jam the domains"). On "holds on" chips "soft: lets go", "hard: holds on".

### 7. prediction: nickel or soft iron?
> Here's a catch. Nickel's coercivity is even lower than soft iron's, so it lets go even more easily. Quick prediction. Is nickel the best core, then? No. Its permeability is about an eighth of iron's, so it boosts the field far less, and it costs much more. You have to read both columns together. Strong boost, and easy release. Only soft iron does **both**.

Visual: board change: the two-property chart (permeability up, coercivity across, both log axes with a grey tag "each step is ten times"); dots for soft iron, nickel and hard steel drop in from the table; copper and aluminium as hollow dots at the bottom edge with "not ferromagnetic". On "Is nickel the best" chips "yes, nickel?", "no, soft iron?" and a 3-second countdown ring. After it, "no, soft iron?" glows and "yes, nickel?" takes a grey scribble cross. On "an eighth" a bracket between the nickel and iron dots "≈ 600 vs ≈ 5000". On "costs much more" a grey tag "cost: a practical criterion". On "both" the "switchable" corner (high boost, low coercivity) shades pale green and only the soft iron dot sits inside it.

### 8. source B: a supplier's sheet
> Source two is a supplier's product sheet for soft iron cores. It says the permeability is up to about five thousand, and the coercivity about eighty. It also says it's the best core on the market. A seller has a reason to talk its product up. So we check its numbers against source A. They agree, so we can use the numbers. But not the sales **words**.

Visual: board change; "4 judge" lit. Source A's card dims; Source B's card brightens: "Source B: a supplier's product sheet, soft-iron electromagnet cores" with a grey tag "example source, written for this lesson"; quoted lines "relative permeability up to about 5000", "coercivity about 80 A m⁻¹", "releases cleanly when switched off", "the best core on the market". Check slots fill as spoken: "who and why?" an amber "?" ("a seller"); "data and method?" a tick ("values given"); "agrees with others?" a tick, with a coded line linking B's two values to A's soft iron row. On "not the sales words" the line "the best core on the market" takes a grey scribble.

### 9. source C: a forum post
> Source three is a post on a hobby forum, with no author details. It says, use a steel bolt for your core, because steel makes the strongest magnets, so it makes the strongest electromagnet. Who wrote it, we can't tell. There's no data, and no method. And it disagrees with source A about letting **go**.

Visual: camera continue. Source B dims; Source C's card brightens: "Source C: a post on a hobby forum (no author details)", tag "example source, written for this lesson", quote "Use a steel bolt for your core. Steel makes the strongest magnets, so it makes the strongest electromagnet." Check slots: "who and why?" a cross (grey scribble) "unknown"; "data and method?" a cross "none"; "agrees with others?" a cross, with a coded line to A's hard steel row "coercivity ≈ 4000: holds on".

### 10. half right, for the wrong job
> But source three is half right. Hard steel does make good permanent magnets, because it holds on to its magnetism. That's exactly the wrong property for a magnet you need to switch off. So we reject it, not because it's online, but because it has no evidence, and it answers a different **question**.

Visual: camera continue. On "permanent magnets" a small coded bar magnet beside the steel row with "permanent: wants to hold on ✓"; on "wrong property" the crane icon at the top right shows its stuck scrap with "switchable: needs to let go ✗". On "not because it's online" a chip "unreliable because it's online" takes a grey scribble cross; chips "no evidence" and "a different question" box under Source C.

### 11. which steel?
> One more check. Steel isn't one material. Mild steel and silicon steel are soft, and they're used in motor and transformer cores. Hardened carbon steel is the hard one. So whenever a source says steel, check which steel it means. Source A does. Source three **doesn't**.

Visual: board change: a three-chip steel strip: "mild steel: soft", "silicon steel: soft (motor and transformer cores)", "hardened carbon steel: hard". On "check which steel" the strip lines up under the table's hard steel row (its label "hardened carbon steel" underlined in Source A). On "Source three doesn't" Source C's word "steel" gets an amber "?" outline. Grey tag "valid: answers what you actually need" (recalled).

### 12. conclusion
> So here's our conclusion. For a switchable electromagnet, choose soft iron, or another soft magnetic material. It gives a big boost when it's on, it keeps almost nothing when it's off, and it's cheap. Hard steel suits permanent magnets instead. Nickel works, but boosts less and costs more. And copper and aluminium are useless as cores. Two independent sources agree, and the one that doesn't has no **evidence**.

Visual: board change; "5 conclude" lit. A conclusion panel builds as spoken: "switchable core: soft iron (or another soft magnetic material): high permeability, low coercivity, cheap" (soft iron rod, boxed); "permanent magnet: hard steel" (steel rod); "nickel: works, boosts less, costs more"; "copper, aluminium: no use". On "Two independent sources" the desk shows A and B ticked and linked, C crossed. The crane icon swaps its core chip to "core: soft iron" and its scrap drops.

### 13. limitations
> There are limits. The values are typical, and they change with purity and treatment. In a real electromagnet, gaps mean the boost is much less than the permeability. And a table can't test our own nail and coil. So check a second reference, and test the actual **core**.

Visual: board change: a limitations list builds, each with its improvement: "typical values; vary with purity and treatment → check a second independent reference"; "gaps reduce the real boost → measure the actual magnet"; "not our nail and coil → test it" (v28's nail and coil plates appear small).

### 14. memory aid
> So remember. Strong when on, gone when off. That's soft iron. Hard steel holds **on**.

Visual: the handwritten line writes large: "Strong when on, gone when off: soft iron. Hard steel holds on." The soft iron dot in its green corner and the two `DomainGrid` windows (relaxed, jammed) sit under it. Hold about 2 seconds.

### 15. attempt 1 (countdown, 10 seconds)
> Your turn. An engineer is choosing a core for an electromagnet in a door lock, which has to release the instant the power is cut. Use the table. Identify the most suitable material, and justify it with both properties. Then suggest a use for material Q, with a reason. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a table: "Material: P, Q, R"; "Relative permeability (maximum): 4000, 150, 1.0"; "Coercivity (A m⁻¹): 50, 5000, not ferromagnetic". "An engineer is choosing the core for an electromagnet in a door lock. The lock must release the instant the power is cut. (a) Identify the most suitable core material, and justify your choice using both properties in the table. (b) Suggest a use for material Q, with a reason. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 1 (brief)
> P. Its high permeability means it magnetises strongly, so the lock holds firmly when it's on. Its low coercivity means it keeps very little magnetism, so it releases when the power's cut. Q, with its huge coercivity, suits a permanent magnet. Choosing Q because it stays magnetised longest gets the job **backwards**.

Visual: card shrinks to the top; the table stays; "release the instant the power is cut" underlined. Rows: "(a) P: high permeability (4000): strong field when on; low coercivity (50 A m⁻¹): keeps little magnetism, releases", boxed; "(b) Q: permanent magnet: high coercivity, keeps its magnetism", boxed. On "backwards" a chip "Q, because it stays magnetised the longest" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. attempt 2 (countdown, 10 seconds)
> Last one. A student finds two sources. Source one, a magnet retailer's website, says its cobalt steel cores are the strongest available, with no data. Source two, a university engineering textbook, gives a table of permeability and coercivity, with the measuring conditions. Assess the reliability of each source for choosing a switchable core. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student finds two sources. Source 1: a magnet retailer's website states, 'Our cobalt-steel cores are the strongest electromagnet cores available.' No data are given. Source 2: a university engineering textbook gives a table of the relative permeability and coercivity of common core materials, with the conditions under which they were measured. Assess the reliability of each source for choosing the core of a switchable electromagnet. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 18. feedback 2 (brief)
> Source two is more reliable. Its authors are experts, it gives measured data with conditions, and you can check it against other references. Source one has a reason to sell, gives no data or method, and never says what strongest means, or whether the core lets go. Calling it unreliable just because it's on a website misses the **reason**.

Visual: card shrinks to the top; "No data are given" and "with the conditions under which they were measured" underlined. Rows: "Source 2: more reliable: expert authors; measured data with conditions; can be checked against other references", boxed; "Source 1: less reliable: commercial interest; no data or method; 'strongest' undefined; says nothing about releasing", boxed. On "misses the reason" a chip "unreliable because it is on a website" fades in and takes a grey scribble cross. Hold about 1 second.

### 19. handoff
> The sources say an iron core multiplies the field. But no table has tested our nail, our coil, or our current. So let's measure it ourselves. How can a fair test show how the current and the number of turns change an electromagnet's **strength**?

Visual: board change: the memory line small at the top; Source A's soft iron row small beside it. The bench assembles, unconnected: the painted retort stand (`phys-y11-retort-stand-v1.png`) and boss (`phys-y11-boss-crossbar-v1.png`) clamping v28's coil (`phys-y11-coil-former-v1.png`) with the nail (`phys-y11-iron-nail-v1.png`) inside, pointing down over the painted petri dish (`b3a-petri-dish-v1.png`) holding a heap of paper clips; the painted supply and v15's multimeter (`phys-y11-digital-multimeter-v1.png`) beside, blank display; an empty results table "current (A) | clips lifted". On "fair test" chips "what do we change?" and "how do we measure strength?". On "strength" the chip "Next: How can a fair test show how the current and the number of turns change an electromagnet's strength?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 20. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A switchable core must magnetise strongly when on and keep little magnetism when off (and be affordable).
2. Relative permeability: how many times more easily a material magnetises than empty space; high means a big boost. Copper and aluminium are about 1: no use as cores.
3. Coercivity: how big a reverse field it takes to remove the leftover magnetism; low means the core lets go. Soft iron is low; hardened steel is high (its domains are jammed in place).
4. Choice: soft iron (or another soft magnetic material) for switchable electromagnets; hardened steel for permanent magnets. Read both properties together.
5. Judging sources: who wrote it and why; data and method; agreement with independent sources. Check which steel a source means.

Memory aid (large, on the notes screen): *Strong when on, gone when off: soft iron. Hard steel holds on.*

At the end the notes cross-fade back to scene 19's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the core decides switch-off (1, 6). Why permeability matters: a bigger number, a bigger boost (3, 5). Why copper fails: no domains (5). Why coercivity decides release: the reverse nI needed to clear the leftover magnetism (6). Why hard steel holds on: jammed domains (6). Why nickel loses: a far smaller boost and higher cost (7). Why B is trusted and C rejected: evidence and agreement, not format (8 to 10). Why "which steel" matters (11).
- **Misconceptions addressed:** steel is best because it makes the strongest magnets (9, 10; site misconception 2); any metal works (5); the lowest coercivity alone wins (7); online means unreliable (10, A2 crossed); a seller's numbers must be false (8); a stuck-on magnet is "stronger" and therefore better (16 crossed).
- **One idea at a time:** criteria (2), permeability (3 to 5), coercivity and its cause (6), both together (7), each source in turn (8, 9, 10), validity (11), conclusion (12), limits (13).
- **Video makes it easier:** the student sees the table reveal column by column as rows are ruled out (3 to 6), the reverse current readout scale from 0.08 A to 4 A (6), the jammed domain window beside the relaxing one (6), the dots land in or out of the green "switchable" corner (7), the check slots fill on each source card (8, 9), the crane drop its scrap once the core is soft iron (12).
- **Response opportunity:** two 3 s predictions (4, 7); two unseen HSC-style tasks, 10 seconds each, every condition and the table on the card, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 26 s.
- **Avoided double teaching:** v28's domains, soft iron and ferromagnetic recalled in a phrase each (5, 6); v27's nI as units only (6); FA2 v25's secondary source and FA1's reliability and validity in a phrase (1, 11).
- **Syllabus coverage:** `cic3a3747e`: a secondary-source investigation conducted (question, criteria, three sources gathered, data analysed, sources judged, a justified choice with limitations) that assesses the choice of core materials (soft iron, hard steel, nickel, copper, aluminium; which steel).
- **Out of scope by design:** the practical (v30); hysteresis loops, saturation values, eddy currents and laminations (Year 12); a referencing style (fa0-v07).

## Practice questions and model answers

**Attempt 1 (scene 15; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "[Table: Material P, Q, R. Relative permeability (maximum): 4000, 150, 1.0. Coercivity (A m⁻¹): 50, 5000, not ferromagnetic.] An engineer is choosing the core for an electromagnet in a door lock. The lock must release the instant the power is cut. (a) Identify the most suitable core material, and justify your choice using both properties in the table. (b) Suggest a use for material Q, with a reason."
Model answer: (a) Material P. Its high relative permeability (4000) means it magnetises strongly, greatly increasing the coil's field, so the lock holds firmly when on. Its low coercivity (50 A m⁻¹) means it keeps very little magnetism once the current stops, so the lock releases when the power is cut. (R is not ferromagnetic and would not boost the field; Q would stay magnetised.) (b) Q suits a permanent magnet, because its high coercivity means it keeps its magnetism after being magnetised. Classic mistake (crossed): "Q, because it stays magnetised the longest".

**Attempt 2 (scene 17; original wording, HSC style, 3 marks suggested).** "A student finds two sources. Source 1: a magnet retailer's website states, 'Our cobalt-steel cores are the strongest electromagnet cores available.' No data are given. Source 2: a university engineering textbook gives a table of the relative permeability and coercivity of common core materials, with the conditions under which they were measured. Assess the reliability of each source for choosing the core of a switchable electromagnet."
Model answer: Source 2 is the more reliable: it is written by subject experts, gives measured values with the conditions of measurement, and can be checked against other independent references. Source 1 is much less reliable: the retailer has a commercial interest in the claim, it gives no data or method, and "strongest" is undefined; it also says nothing about whether the core releases when switched off, which is the property a switchable electromagnet needs. Classic mistake (crossed): "Source 1 is unreliable because it is on a website" (the format is not the reason; the lack of evidence and the conflict of interest are).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Source A (typical, rounded) | soft iron ≈ 5000, ≈ 80 A m⁻¹; nickel ≈ 600, ≈ 60 A m⁻¹; hardened carbon steel ≈ 100, ≈ 4000 A m⁻¹; copper ≈ 1; aluminium ≈ 1; air 1 | 3 to 7, 12, notes |
| Reverse current reading | n = 1000 m⁻¹: 80 ÷ 1000 = 0.08 A; 4000 ÷ 1000 = 4 A | 6 |
| Nickel against iron | 600 ÷ 5000 ≈ 0.12, "about an eighth" | 7 |
| Source B (example) | up to about 5000; about 80 A m⁻¹ | 8 |
| A1 | P 4000, 50 A m⁻¹; Q 150, 5000 A m⁻¹; R 1.0, not ferromagnetic | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check, and to confirm Source A's typical values against a named reference (author note a).

- 80 ÷ 1000 = 0.08; 4000 ÷ 1000 = 4.0; 600 ÷ 5000 = 0.12 (1/8 = 0.125: "about an eighth").
- Source B's values equal Source A's soft iron row.
- A1: P has the highest permeability and lowest coercivity of the ferromagnetic materials; Q's coercivity is 100 times P's.

## Memory aid check

- **"Strong when on, gone when off: soft iron. Hard steel holds on."** Written for this lesson; it extends v28's "Switch off, and soft iron lets go." Meaning, as said in 14: a switchable core needs a big boost when the current flows (high permeability) and almost no leftover magnetism afterwards (low coercivity); hardened steel keeps its magnetism. Assumptions checked: "gone" means almost all gone in an open electromagnet (a trace remains; author note b); "hard steel" means hardened carbon steel, not mild or silicon steel (11 says so). Introduced after both properties and the conclusion (5 to 12).
- **Considered, not used:** "soft lets go, hard holds on" (shorter, but loses the "strong when on" half, and both properties must be read together).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,703 characters** (5,722 joined), 20 scenes. Characters per scene (1 to 20): 349, 258, 280, 111, 269, 493, 354, 348, 299, 296, 266, 410, 266, 82, 290, 313, 366, 336, 242, 75. At 13.3 characters per second the speech is about 430 s; add about 12 s of holds and settling (the table reveals in 3 to 6, the domain windows in 6, the chart in 7, the check slots in 8 and 9), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 528 s**, inside the owner's 5 to 10 minute target. If the voiced preview runs long, the first cut is scene 11 (about 270 characters; the steel strip stays on screen as a silent tag), then scene 6's reverse-current sentences (about 180 characters).

## Scene list and build ids

Lesson key `p-y11-fa3-v29` (route phys-y11-fa3-v29). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v29` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v29` (root to confirm).

In order (kebab-case; 20 scene headings, all `### N.`): question, criteria, source-a-table, core-prediction, copper-out, coercivity, nickel-prediction, source-b, source-c, half-right, which-steel, conclusion, limitations, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). core-prediction and nickel-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v28's last frame continues into scene 1 (camera continue: the crane shrinks, the desk slides in); 1 to 2 camera continue; 2 to 3 board change; 3 to 4 to 5 to 6 camera continue; 6 to 7 board change (chart); 7 to 8 board change; 8 to 9 to 10 camera continue; 10 to 11 board change; 11 to 12 board change; 12 to 13 board change; 13 to 14 camera continue; attempts and feedback card shrink to the top; 18 to 19 board clear; 19 to 20 fade to the notes board, and 20 cross-fades back to 19's final frame.

Holds: core-prediction and nickel-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v29-learning-review.md`, `science_check` = `checks/p-y11-fa3-v29-physics-check.md`.

## Assets

Checked first (3 Nov): `public/assets/physics/` holds the bench supply, the retort stand and boss (FA1) and the FA1 release-coil stand (not used: no core, too small); v28 requests the coil former, nail, paper clip, rod set, crane magnet and scrap bundle; v15 requests the multimeter; `public/assets/biology/b3a-petri-dish-v1.png` is delivered (cross-subject reuse, FA2 root decision 20). Reused by name (uniform scaling only, never stretched):
- `phys-y11-rod-soft-iron-v1.png`, `phys-y11-rod-hard-steel-v1.png`, `phys-y11-rod-copper-v1.png`, `phys-y11-rod-aluminium-v1.png` (v28's set; 3 to 7, 12).
- `phys-y11-scrapyard-crane-magnet-v1.png`, `phys-y11-scrap-bundle-v1.png` (v28; 1, 12).
- `phys-y11-coil-former-v1.png`, `phys-y11-iron-nail-v1.png`, `phys-y11-paper-clip-v1.png` (v28; 13, 19).
- `phys-y11-retort-stand-v1.png`, `phys-y11-boss-crossbar-v1.png`, `phys-y11-low-voltage-supply-v1.png` (delivered; 19).
- `phys-y11-digital-multimeter-v1.png` (v15 request; 19).
- `b3a-petri-dish-v1.png` (Biology, delivered; 19; if its style does not fit the physics bench, root swaps in a plain shallow dish plate).

New: none. Optional: `phys-y11-rod-nickel-v1.png` to complete v28's set (author note e).

Considered, not used: logos or page mock-ups for the sources (no imitation of real organisations); a hysteresis-loop graph (beyond Year 11; the two-property chart carries the comparison).

Coded: the step rail, source cards and check slots, the material table, the two-property chart, the `DomainGrid` windows, the reverse-current reading, the steel strip, the bar-magnet icon, the cost icon, the conclusion panel.

Kit gaps (for the build brief): **`SourceCard`** and **step rail** (promote from Biology FA2 v25 to a shared kit or copy lesson-local); **material table** led by rod plates; **two-property log chart** with a shaded region; **`DomainGrid` jammed variant** (grey pinning dots; arrows that stay aligned).

## Codex asset brief (Year 11 Physics FA3 v29)

No new plates. The rod set, crane magnet, scrap bundle, coil former, nail and paper clip are requested in `phys-y11-fa3-v28.md`; the multimeter in `phys-y11-fa3-v15.md`. Optional addition to v28's rod set: `phys-y11-rod-nickel-v1.png` (same size and view as the other rods; a bright silvery finish with a faint warm yellow tint, distinguishable from the aluminium and hard-steel rods).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, tables, chart, attempts and key notes against the "Numbers used" table.
2. Confirm Source A's typical values (author note a) against a named reference and report the reference; flag any value outside typical published ranges.
3. Confirm the physics: relative permeability of copper and aluminium is about 1 (not ferromagnetic); coercivity in A m⁻¹ shares the units of nI, and "the reverse nI needed to remove the leftover magnetism" is a fair reading for a long solenoid; low coercivity lets an open core lose almost all its magnetism; hardened carbon steel's high coercivity comes from domain walls pinned by carbon and lattice strain; nickel's maximum permeability is far below soft iron's; mild and silicon steels are soft magnetic materials used in motor and transformer cores.
4. Confirm Sources B and C carry "example source, written for this lesson" and that no real company, website or person is named or imitated.
5. Confirm no practical method, risk table, hysteresis loop or lamination content is taught.
6. Confirm both attempt questions are original in wording, carry every condition and their table, and give nothing away.
7. Confirm the syllabus and FA0 quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm the opening frame matches `phys-y11-fa3-v28.md` scene 17.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Choosing an Electromagnet Core: Soft Iron vs Steel | Year 11 Physics

(Title length: 68 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson26.sa.html

Why does a scrapyard crane use soft iron, not steel? Read two properties from a reference table (how strongly a material magnetises, and how hard its leftover magnetism is to wipe out), rule out copper and aluminium, see why hardened steel holds on, and weigh nickel against soft iron. Then judge a supplier's sheet and a forum claim for reliability and reach a justified choice. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a secondary-source investigation to assess the choice of materials used in the core of electromagnets" (cic3a3747e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electromagnets, cores and field strength (previous video). Next: The electromagnet investigation.

#Year11Physics #Physics #Electromagnets #PhysicsInvestigation #HSCScience

## Open decisions

- **1. Learner question wording.** The route's question is answerable; this design rewords it as one causal question ("Which core material makes the best switchable electromagnet, and how can trustworthy sources show why?"). Root enters it (v28's chip already uses it) or keeps the route's wording (then v28's chip and this heading change).
- **2. v30's question (proposal).** The handoff chip uses "How can a fair test show how the current and the number of turns change an electromagnet's strength?" for phys-y11-fa3-v30 (route: "Which controlled changes alter measured electromagnet strength?"); `phys-y11-fa3-v30.md` adopts it.
- **3. Coercivity rather than retentivity.** The design teaches coercivity as the switch-off property, with the site's "retentivity" as a gloss (site correction 1). The physics check confirms; if root prefers the site's single term, scene 6 changes its column name and the reverse-current reading is dropped (about 180 characters).
- **4. Log-axis chart.** New at Year 11; the grey tag gives its plain meaning. If the learning review finds it a detour, scene 7 uses the table alone with the two columns highlighted.
- **5. Source A's named reference.** After the physics check, root may print the reference's name on the card in place of "physics reference table".
- **6. Nickel rod plate.** Optional (author note e).

## Review notes

- Revision 1 next steps: student learning review (trace from v28 at Year 11 entry; check that permeability and coercivity each have a plain meaning before they are used; that the reverse-current reading makes coercivity concrete; that the source judgement rests on evidence, not format; that the example sources are clearly labelled; that the attempts give nothing away), then the Codex physics check (with the material values) and error check.
- The table revealing column by column as rows are ruled out (3 to 6), the 0.08 A against 4 A readout (6), the relaxed and jammed domain windows (6), the dots landing in the green corner (7), the check slots filling (8, 9) and the crane dropping its scrap with a soft iron core (12) carry the explanation; judge them at playback speed in the voiced preview.
