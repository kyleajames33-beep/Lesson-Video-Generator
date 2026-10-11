# Teaching playbook (Claude-directed videos)

Distilled 11 October 2026 from the repo's accumulated guidance and owner feedback: `docs/gold-standard-script.md`, `docs/production/teaching-templates.md`, `docs/production-memory.md`, `docs/production/beginner-teaching-audit-2026-10-10.md`, `docs/production/harder-question-companions-2026-10-10.md`, the research standard, AGENTS.md, the motion and design standard, and Claude's memory notes. Every lesson design in `lessons/` and every sub-agent brief follows this. Where this conflicts with an older document, this wins for Claude-directed work.

## Who we are teaching

Students starting Year 12 in NSW, watching on a laptop or phone, often while revising alone. They are capable but new to the topic. Talk to them like a good teacher: warm, direct, precise Australian English, "you" address. No baby talk, no cheerleading ("you can do this"), no filler ("let's now move on", "as we just saw"), no mascots.

Students move between the HSCScience site lesson and the video. **The site lesson is the source of truth:** reuse its order, worked-example numbers, key terms and misconception framings (Codex brief 02 extracts these). Do not re-teach a concept taught in an earlier lesson; give a one-line callback and spend the time on new material and worked examples.

## Shape of a video

- **One main learner question**, stated in the student's terms ("How could mould reach another slice of bread?"). Split a lesson when two objectives would rush each other or crowd the screen.
- **Length** about 4 to 10 minutes at the real narration rate (Simon reads about 185 words per minute). Conceptual lessons around 5 to 6; calculation-dense lessons up to 10.
- Entry knowledge stated, a clear stopping point, and a handoff to the next lesson.
- Typical arc (adapt, never a quota): concrete hook with a reason to care, then cause before name, then the visible mechanism or worked example, then a student attempt, then feedback, then a memory anchor, then "Key notes: what to write in your book".

## Narration (it is recorded speech, so write for the ear)

- **Explain causes before names.** Say what acts, what moves, where it goes and why that matters, then give the term with a short plain meaning. Never compress a process into nouns ("transfer, delivery, fusion").
- **Use a concrete, familiar example and a useful question, contrast or surprise** (sealed soft drink, mouldy bread, a grower's prize plant).
- **Analogies must map precisely**: "X is to Y as A is to B", and say where it breaks if it is partial.
- **Natural TTS pacing:** mix short and long sentences; commas for small pauses, full stops only for real shifts; never stack one-word "sentences" as a pacing trick. Ease the pace only at genuinely difficult reasoning, with short connected chunks.
- Narration explains why and how; the screen shows the structure and the evidence. Do not read the screen aloud word for word.
- **No reviewer language in learner copy:** no "supplied", "selected", "in this model" as filler, "production route", stacked caveats. Keep a caveat only when leaving it out would teach something false or drop a necessary condition. Everything else goes in author notes.
- No em dashes anywhere.
- Every changed spoken sentence needs a fresh recording, alignment and caption rebuild. Re-record only when it improves the lesson by a small amount or more (owner rule, to save ElevenLabs credits).

## Worked examples (done in front of the student)

The student should feel they are watching a teacher solve it on the board.

- Short task in plain words; the equation on its own line; givens grouped with **units and reference constants attached**.
- Order: Known, Find, method choice (say *why* this method: "we want mass, so use m = nM"), Formula, Substitute, Answer with unit and sensible significant figures, unit check.
- **One reasoning stage at a time.** Reveal the reason for an operation before its result. Each result appears on the word that says it. Keep earlier results on the board only if the next step uses them; clear the rest.
- Keep ratio fractions visible through substitution (wanted over known). Use guard digits in working and state the reporting convention.
- Reduce information before shrinking text. Big, calm, readable working.

## Student attempts and feedback

- At least one attempt per lesson on an **unseen** case, different from the worked example.
- Keep every question part and every needed condition visible during the attempt. Never put the answer in the conditions.
- A quiet hold with the **countdown ring** and an invitation to pause for longer. Nothing answer-bearing on screen, in captions or in speech until the hold ends.
- Feedback explains the reason, replays it visually on the same board, and names the likely wrong reasoning ("If you said both concentrations jump, separate what we added from what the reaction does afterwards").

## Memory aids

Pick one or two genuinely useful aids from the Module 5 to 8 banks (`docs/production/module5-memory-aids-2026-10-11.md` and siblings) after the idea is explained. Show it big and handwritten, say why it works, check its assumptions hold for this lesson. Put the strongest one in the key notes. Never force an acronym.

## Key notes: what to write in your book

After the explanation, a short, stable, quiet notes screen: 3 to 5 essentials (definitions, relationships, conditions, decision rule) in full sentences a student can copy. Invite them to pause. Never ask them to copy while new reasoning is being narrated.

## Summary and misconceptions

- End on a **decision rule**, not encouragement: "When you see X, ask Y, then do Z."
- A misconception scene is optional; use one only for a specific, common wrong instinct: wrong instinct, why it fails, corrected rule, a question to ask yourself on the day.

## Visuals and motion

Follow `docs/production/motion-design-standard.md` (no static slideshows). In short: show the change at its spoken word, point at named parts, real organisms and apparatus rather than text boxes, labels clear of artwork, meaningful transitions, one visual system, countdown in holds. Readable text reveals then locks (no shimmer, no word-by-word reveals on large text). Doodles only to focus attention or prevent a mistake. Image briefs must be **didactic**: a muted viewer should learn something from the picture alone. Transparent PNGs.

## Video types

1. **Concept explainer.** Mechanism or idea, built visually step by step (mould, sealed drink).
2. **Calculation lesson.** Concept briefly, then two or three worked examples with fading support, then an independent attempt.
3. **HSC practice-question walkthrough (new series).** One substantial HSC-style question per video, placed after its prerequisite lessons:
   - Title states the skill ("Equilibrium: compression, Q and the new concentrations").
   - Full stimulus on screen, a countdown attempt with an invitation to pause and try it properly.
   - Read the question like an examiner: underline the command verb and the data that matter.
   - Method choice and why, then staged working on the board, one step at a time.
   - "Where students lose marks": the two or three most likely wrong moves, shown and corrected.
   - A model written answer for extended-response questions, with the parts that earn marks highlighted.
   - A quick variant ("What if the container were expanded instead?") for transfer.
   - Use original HSC-style questions written for HSCScience (the authored exemplars in `docs/production/harder-question-companions-2026-10-10.md` are ready starting points). Never present an authored question as an official NESA question, and do not promise marks. Reproducing actual past HSC questions needs the owner's decision on NESA copyright first.

## Process lessons we already paid for

- Preview the exact voiced lesson before any render; judge motion only at playback speed, never from stills.
- Technical fit, source review and AI review are not teaching or design approval. The owner's watch-through is.
- Keep diagrams large; avoid long automatic silences after every scene, but keep real thinking holds.
- Render with the slim-bundle script and clean up (a full-public bundle filled the disk on 11 October).
