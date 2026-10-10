# Chemistry C2 preparation: independent review

Reviewed 10 October 2026 by Sol 6.1, independently of the preparation author. Scope: science, causal explanation, conversational script, focused route boundaries, proposed visual decisions and response timing. This is a source and planning review. No audio was generated or heard, no lesson was played, and no rendered frame or actual device was inspected.

Recommendation: proceed to an isolated additive lesson and teaching-brief implementation using the corrected preparation below. Two bounded findings in the original preparation were resolved by root and checked here. No further preparation blocker was identified. This recommendation does not approve paid recording, export, human listening, publication or completed syllabus coverage.

## Exact reviewed input and follow-up

Source: [Chemistry C2 preparation](drafts/module5-next-preparation-2026-10-10/chemistry-c2.md).

| Review stage | SHA-256 | Evidence boundary |
| --- | --- | --- |
| Original independent review | `03d7fcdba3e5d27010f673f55ab6527a77e352cce0c97c55fdb4d15bb62d4ff7` | Complete human-readable preparation read before findings were sent to root |
| Root correction and bounded follow-up | `699108d28dc0ee421351c70d3223f42a50b9e1eb188e2d4e67e7d0498719f3a5` | Corrected preparation reread; the two changed passages independently checked against their neighbouring narration and model conditions |

Both file hashes were checked locally. The corrected file contains zero U+2014 characters. No selected source lesson, shared document, code, audio, board, ledger or approval record was edited by this reviewer. This review file is the reviewer's only authored output.

## Findings, ordered by priority

### P1: zero initial reverse rate conflicted with the visual instruction. Resolved

In the original `c2-model` visual decision, the instruction that model rates must be positive from the actual start frame conflicted with the A-only starting condition. Its narration correctly said the reverse rate was zero because no B existed. Positive first-order conversion coefficients do not make a rate positive when its starting species is absent.

Required bounded fix: forward rate positive at the A-only start; reverse rate zero initially and positive once B appears. Keep positive coefficients distinct from concentration-dependent rates. This also prevents an implementation from adding B or reverse motion prematurely. The same initial-absence distinction appears in [OpenStax's equilibrium explanation](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria).

Follow-up: corrected `c2-model`, line 69, explicitly states all three distinctions and removes the ambiguous instruction. Closed at the corrected hash. The eventual component still needs its own start-frame and continuous-motion checks.

### P2: the promised activation-energy bridge was implicit. Resolved

The original entry section promised a short activation-energy bridge, but `c2-collision` only mentioned sufficient energy and `c2-catalyst` first used the lower-barrier terminology. A learner without the prerequisite could miss what that barrier meant.

Required bounded fix: add one plain-language definition immediately after the energy/orientation sentence and before catalysis. [OpenStax's collision-theory section](https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory) supports connecting reaction success to the required energy barrier.

Follow-up: corrected `c2-collision`, line 73, now defines activation energy as the barrier reacting particles overcome. The sentence fits the conversational sequence and introduces no calculation or temperature-shift rule. Closed at the corrected hash.

## Science and teaching assessment

The declared closed, constant-temperature, fixed-volume, well-mixed, one-to-one first-order model supports the stated approach: A falls, B rises, the forward rate falls and the reverse rate rises from zero. With positive coefficients and conserved A plus B, the B:A limiting ratio of 1:2 is internally possible. The rates become equal in the equilibrium limiting state while the concentrations remain unequal. These are checks of this declared model, not evidence that all reversible reactions have first-order rate laws or this approach direction.

The script correctly separates the one-to-one conversion model from its separate `2NO₂ ⇌ N₂O₄` association example. It does not derive a real rate law from a balanced equation. The latter equation conserves two nitrogen atoms and four oxygen atoms; the planned stable inset must retain that inventory. Its explicit incomplete-mechanism qualification avoids treating the A/B hopping model as molecular collision evidence.

The catalyst explanation is scientifically usable within the stated conditions: an alternative faster pathway changes equilibration time, while the overall endpoint energies and final equilibrium composition are retained. It usefully contrasts an earlier-time difference with the common equilibrium endpoint. This agrees with [OpenStax's catalysis explanation](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis) and its [equilibrium catalyst discussion](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle). Those references do not license a universal numerical factor claim for all catalytic mechanisms.

The transfer feedback is correct for the supplied one-to-one rates: C is produced at six units and removed at two, so C initially increases by a net four units on that same rate scale. The rate evidence, rather than the statement that the mixture is mostly D, justifies the direction. The final-composition question transfers the catalyst distinction without adding equilibrium expressions.

Narration explains causes in connected speech, with a useful rhetorical opening contrast and a separate genuine transfer attempt. It avoids procedural command recitals, unsupported attainment claims and invented prevalence claims. Longer model and collision passages will need deliberate spoken phrasing and caption checks, but word count alone establishes no pacing defect. Delivery remains untested.

## Route and curriculum boundary

The preparation matches `chem-m5-c02`: follow a specified reactant-rich start, explain changing rates, and distinguish catalyst approach time from fixed-condition composition. C1 entry support, C3 disturbance handoff, retained g01 enthalpy/entropy companion and p01 practical support are explicit. The companion remains visible without becoming a universal C3 prerequisite. Equilibrium expressions, ICE calculations, quotient reasoning, pressure/temperature rules and industrial optimisation remain outside this video.

Checked the focused route, dated course plan, relevant L2/L3 ledger entries, mandatory content checklist and cached official Chemistry paragraphs p1037-p1040, p1052-p1057, p1059-p1062 and p1072. The named actions remain provisional contributions. Practical investigation of reversibility and the named non-equilibrium analyses are not silently claimed by C2. The existing checklist covers quantitative chemistry and enzymes; it does not certify this Module 5 run. Cached paragraph IDs remain repository extraction references, not official content IDs. This was not a fresh full-syllabus verification.

## Visual and response plan assessment

Per-scene reuse/adjust decisions are usable and related to teaching purpose. The separate rate and concentration displays make their different quantities explicit. Keeping a common model, fixed scales and unchanged conditions across those scenes is essential. The known 4% native equality marker is correctly rejected as exact finite-time equality; the preparation requires an approaching-equilibrium region and a separately labelled limiting state, with continuing opposing conversion.

Read the native Exchange and CatalystBoth component source relevant to the proposal. The catalyst component's common multiplier and barrier-drop assumptions are implementation details of its schematic model. Selecting the specified stable board initially is a concrete alternative that preserves the useful endpoint comparison. It avoids carrying those assumptions into universal narration. Native-component corrections, if later selected, need their own independent source and accessible-description check.

The response design is explicit: separate prompt and feedback recordings, ten seconds of assembled silence after the complete prompt, a stable answer-free stimulus and staged feedback aligned to spoken cues. The prompt asks for both direction reasoning and catalyst composition reasoning. Ten seconds is a reasonable planning hypothesis, with the pause invitation, but cannot be treated as measured adequate learner time. Keep the first visible or audible answer exposure as the actual hold boundary, including transitions, coach notes, captions and any graph or net-direction cue.

Source planning does not establish phone readability. Essential graph axes, direction labels, conditions, NO₂/N₂O₄ labels and supplied rates need inspection at the intended small-player size with captions enabled. Do not preserve the small reference graph if it compromises essential-text readability.

## Remaining downstream gates

Root should implement the corrected source in an isolated additive JSON and schema-v2 brief, then inspect the actual graphs, limiting-state label and catalyst board before the recording-stage check. All proposed reveals and holds remain estimates until selected audio is aligned. The difficult rate/concentration or catalyst sequence needs the planned voiced pilot or exact Remotion playback, and the transfer needs a first-answer-exposure check. Separate source, still/UI, playback and human-listening evidence. Full-package release review and current teaching-brief binding remain required.

Standards read for this review: AGENTS.md, HANDOFF.md, the HSC production research and implementation plan, teaching templates, teaching/visual brief template, visual handbook, animation planning, preview-first workflow, course progression plan, relevant ledger and content checklist, and focused Module 5 route. External science references above were accessed directly from their publisher during this review. No external text, image or question was imported into lesson assets.
