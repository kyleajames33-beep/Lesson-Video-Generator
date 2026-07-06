# Gold Standard Script

The script-content rubric for HSCScience lessons. Use this when writing or generating the lesson JSON. The video can only be as good as the script — everything below is what makes a script earn a render.

> **Companion docs**
> - [gold-standard-video-standard.md](gold-standard-video-standard.md) — philosophy + non-negotiables
> - [gold-standard-lesson-reference.md](gold-standard-lesson-reference.md) — scene structure + durations
> - This doc — content quality, required rhetorical pieces, scoring rubric

A new lesson is **production-ready when it scores ≥85/100** on the rubric in §5 and passes every item in the pre-flight checklist (§6). Anything below that goes back for rewrite, not render.

---

## 1. The mandatory rhetorical pieces

Every production lesson must contain all nine. If a piece doesn't fit (e.g. no calculation in a conceptual lesson), the *reason* must be recorded in the lesson's `productionNotes` field — not silently dropped.

### 1.1 Hook — a concrete student problem

A real-world or counterintuitive question that gives the student a **reason to care** before any definitions land.

Required elements:
- A specific scenario or problem (not a topic statement)
- A stake: why does this matter for marks, the lab, or the real world
- A one-line callout of the framing punchline (no spoiler — the framing, not the answer)

> ❌ "Today we will learn about molar mass."
> ✅ "We can count atoms, but can we weigh them? A balance reads grams; a chemist counts moles."

### 1.2 Analogy — a precise everyday bridge

At least one analogy that maps cleanly to the concept's mechanics. Vague analogies hurt more than they help.

Required elements:
- A specific everyday concept (a dozen eggs, a bridge, a recipe)
- A stated mapping: "X is to Y what A is to B"
- A "where the analogy breaks" line if the mapping is partial

> ✅ "A mole is a chemist's dozen — a fixed count, but the count is 6.022×10²³ instead of 12."
> ✅ "Molar mass is a bridge: moles on one bank, grams on the other."

Place analogies in `hook`, `concept`, or `marginalia` scenes — wherever they earn their keep most.

### 1.3 Definition — exact wording, units, notation

The HSC examiner cares about the *wording*. Definitions must be statable.

Required elements:
- The term in HSC-acceptable form (don't paraphrase the syllabus loosely)
- Units explicitly written (g mol⁻¹, J kg⁻¹, etc.)
- The symbol introduced (n, m, M, N, etc.) and disambiguated from any similar term
- One short example that grounds the abstraction

> ✅ "Molar mass (M) is the mass of one mole of a substance, measured in g mol⁻¹. It's not the same as the mass of your sample (m)."

### 1.4 Formula — equation + substitution

Every quantitative lesson must present its central equation with at least one substitution.

Required elements:
- The bare equation, isolated and large
- Each variable named with units
- Any rearrangement students will need on the day
- One worked numerical substitution (can live in the formula scene or carry into the worked example)

### 1.5 Worked example — a real HSC-style question

At least one per calculation lesson. The worked example is what students replay before the exam.

Required elements (this matches the `workedExample` scene type):
- A real exam-style question with enough context
- `coachNote` stating the target and method choice ("Target: mass. So use m = n × M.")
- Step list following Known / Find / Formula / Substitute / Answer
- Final answer with correct unit and significant figures
- `unitCancel` showing units cancel to the expected output

### 1.6 Misconception — sharp wrong-vs-right

At least one per lesson. Examiners write distractors around the most common mistakes — name them explicitly.

Required elements:
- The wrong instinct stated as a student would think it
- The mechanism for why it's wrong (not just "this is wrong")
- The corrected rule
- A discriminator question students can ask themselves on the day

> ✅ Wrong: "Just multiply the mass by Avogadro's number to get moles."
>   Why wrong: "Avogadro's number converts moles to particles, not grams to moles."
>   Right: "Use n = m / M. Mass-to-moles always goes through molar mass."
>   Discriminator: "Am I going from particles to amount, or mass to amount?"

### 1.7 Quick check — transfer-level recall

At least one per lesson, ideally before the summary. **Not** identical to the worked example.

Required elements:
- A question that requires applying the concept to a new context
- `pausePrompt` directing the student to attempt before the answer reveals
- Stepwise answer they can compare their work against

### 1.8 Summary — exam-ready checklist + decision rule

The summary is the artifact a student takes into revision. Every point should pass the "could this be a flashcard?" test.

Required elements:
- 4–5 takeaway points, each self-contained and revision-ready
- Token-coloured formula terms (M, n, m, etc.)
- A `finalPrompt` decision rule — the question the student should ask themselves at the start of every related exam question

> ❌ `"finalPrompt": "Now you know molar mass!"`
> ✅ `"finalPrompt": "Before calculating: do I need M (per mole) or m (the sample)?"`

### 1.9 Syllabus mapping — every claim earns its place

Every testable claim in the lesson must trace back to a NESA dot point. Curiosity tangents go in marginalia at most, never the main beat.

Required elements:
- `syllabusVersion` set to the active NESA syllabus
- `syllabusModule` quoted from the syllabus
- `syllabusDotPoints` is a non-empty array of *actual* NESA dot-point text (not paraphrased)
- `lessonIntent` is a *student-can-do* statement — not a topic description
- `examSkill` describes what the student should be able to do in a marked question

---

## 2. Per-scene quality criteria

These layer on top of the structural rules in `gold-standard-lesson-reference.md`.

### Voiceover pacing
- ≤145 wpm overall
- Scene seconds × 2.2 ≈ word budget (already in §4 of the lesson reference)
- Each beat in narration introduces **one** new idea — if the script says "and also…", split the scene
- No filler: cut "let's now move on", "as we just saw", "okay so"

### Bullet reveal pacing (when the slide uses bullets)
- Bullets appear in the order the narrator introduces them
- Each bullet has a hand-authored `at:` value in seconds (auto-distribute is the fallback, not the goal)
- A bullet must contain ONE proposition — not a paragraph

### On-screen vs voiceover labour
| Layer | Job |
|---|---|
| Voiceover | Explains *why* and *how*. Carries the narrative. |
| Bullets / body | The structural points the student will see again in the summary |
| Captions | One-line scene reinforcement, exam-friendly phrasing |
| Visuals (diagrams, doodles, lab footage) | Prove the claim, not decorate it |

If voiceover, bullets, and captions all say the same thing, you've wasted three layers.

---

## 3. Tone

- **Year 11 mature.** Direct, conversational, precise.
- **"You" address.** Not "the student", not "we as a class".
- **No cheerleading.** "You can do this!" goes in the bin.
- **No filler transitions.** Cut "let's now…", "moving on…", "as we just saw…"
- **No baby-talk.** "Atoms are like teeny tiny balls" — out.
- **No vague claims.** "Scientists discovered…" must be replaced with specific attribution or removed.

---

## 4. Prohibited patterns

| Pattern | Why it's banned |
|---|---|
| Encouragement ending instead of decision rule | Wastes the most-remembered moment of the lesson |
| Naked numbers without units | HSC markers deduct for unit-less answers; we model what we expect |
| Mid-sentence units in narration without on-screen units | "Twelve grams per mole" must be paired with on-screen `12 g mol⁻¹` |
| Reading the on-screen text aloud verbatim | Voiceover and visuals should differ — different layers, different jobs |
| Off-syllabus tangents in main beats | Curiosity goes in marginalia, not concept scenes |
| "Quick check" identical to worked example | Defeats transfer; rewrite or remove |
| Worked example without `coachNote` | The student loses the *method choice* — the most important step |
| More than one idea per scene | One scene = one idea. Split it. |
| Decorative diagrams that don't earn their keep | If removing the diagram doesn't hurt understanding, remove it |

---

## 5. Scoring rubric (out of 100)

A lesson is production-ready at **≥85**. Reference lessons should hit **≥92**.

| Category | Weight | What earns the points |
|---|---|---|
| Syllabus alignment | 20 | Dot points populated, accurate to NESA wording, every main beat traces to a dot point |
| Hook quality | 10 | Concrete problem, stakes named, callout teaches |
| Concept clarity | 10 | One idea per scene, body sentences ≤25 words, on-screen ≠ voiceover |
| Analogy presence + quality | 10 | At least one precise analogy with mapping; "where it breaks" line if non-trivial |
| Worked example completeness | 15 | Coach note, full Known/Find/Formula/Substitute/Answer, unit cancel, sig figs |
| Misconception sharpness | 10 | Wrong instinct, mechanism, corrected rule, discriminator question |
| Quick check transfer level | 10 | Different context from worked example, pause prompt, stepwise reveal |
| Summary + decision rule | 10 | 4–5 self-contained bullets, decision rule (not encouragement) |
| Tone consistency | 5 | Year 11 mature, no baby-talk, no filler, "you" address |

Mechanical checks (`npm run score:lesson`) cover roughly **60 points** of the 100 — presence/absence and word counts. The remaining ~40 are subjective and need human review.

---

## 6. Pre-flight checklist

Run before render. Every box must be ticked or the issue documented.

- [ ] `syllabusDotPoints` populated with NESA-accurate text
- [ ] `lessonIntent` is a student-can-do statement
- [ ] `examSkill` describes a markable behaviour
- [ ] Title, hook, concept, definition, formula, worked example, misconception, quick check, summary all present (or absence justified in `productionNotes`)
- [ ] At least one analogy somewhere in the lesson
- [ ] Every scene has `voiceover.text`
- [ ] Voiceover word count ≤ scene seconds × 2.2 for every scene
- [ ] Worked example has `coachNote` and `unitCancel`
- [ ] Quick check has `pausePrompt` and is **not** the same problem as the worked example
- [ ] Misconception has `mistakeTag` and a corrected rule
- [ ] Summary has `finalPrompt` decision rule (not encouragement)
- [ ] No filler phrases ("let's now", "as we just saw", "moving on", "you can do this")
- [ ] Every bullet has either an `at:` timestamp or sits inside a scene that's tested with auto-distribute
- [ ] Captions are not transcripts of the voiceover
- [ ] `npm run score:lesson -- src/data/<file>.json` reports ≥85
- [ ] `npm run validate:lessons` passes
- [ ] `npm run voiceover:timing -- src/data/<file>.json` reports zero tight scenes

---

## 7. The notes byproduct

Every production lesson should produce a **printable notes sheet** the student can take into revision. The notes sheet is generated from the script — you don't write it twice.

The notes sheet contains:
- Lesson title + syllabus dot points
- The definition (in §1.3 form)
- The central formula(s) with variables and units
- The worked example, fully rendered
- The misconception's wrong/right comparison
- The summary's bullet list + decision rule

If your script doesn't have these pieces, the notes sheet won't have them either — and you'll know the script is incomplete before you render.

(The notes-export script is a separate build; the script is responsible for *containing* the content.)

---

## 8. The reference

`src/data/chemistry-y11-m2-l2-molar-mass.json` (Lesson 2: Molar Mass) is the current reference lesson. When in doubt about how a piece should land in JSON, look there first.
