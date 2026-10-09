# What happened to the video improvement analysis?

Update, 9 October 2026: user review identifies the limiting video as unnatural and directive, and the next silent draft as bland. The research files are confirmed in live remote main, so missing research is not the cause. The last limiting feedback revision preserved nine existing narration segments and changed only the quick-check prompt. That fixed visual/timing issues without completing the needed script rewrite. The mixed hand-drawn/painted direction also remains more developed in prototypes than in the selected releases. See the [current application-gap audit](research-application-gap-2026-10-09.md). New work is a complete separate conversational limiting script, three fresh recorded scenes and bounded tone-review pilots before another full export. The empirical-formula Remotion draft is unrecorded; silence is expected there and is not a voiced review.

The research is present and parts of it are implemented. The catalogue has not received a complete engagement rewrite. The improved molar-mass lesson now has all 14 fresh Simon v4 recordings, measured playback and captions. Its complete 5-minute 36-second, 1080p review export is rendered and its dependency snapshot verifies without drift or missing inputs. Listening, science and the other release reviews remain pending. Research proposals, improved scripts, review drafts and approved releases remain distinct.

## What is already concrete

| Recommendation | Current implementation | Remaining evidence |
|---|---|---|
| Open with a useful prediction or problem | V3 compares equal mole amounts of carbon and oxygen. Prompt and answer are separate recording segments, with a four-second thinking gap. The shared hook component hides answer artwork and feedback until the hold ends. | Verify the full recorded opening against measured audio and inspect the final export. |
| Explain decisions, rather than recite definitions | V3 distinguishes sample mass from mass per mole, explains each mole contributing the same mass and why two moles have twice the mass, shows unit reasoning and explains why the final zero matters. | Listen for lowercase m/capital M clarity in the final recording and check its visual cues. |
| Give a real attempt and specific feedback | V3 separates opening, bracket and chlorine prompts from their answers. Measured assembly verifies four, four and five seconds of silence; component tests and selected stills verify hidden answers during the holds. | Review the complete export to confirm the response opportunities work in context. |
| Reduce repeated number reading | V3 lets the bracket board show intermediate contributions while speech explains counting and final interpretation. | Check that the actual board and descriptive transcript remain sufficient for accessibility. |
| Keep usable art and purposeful motion | The recorded draft connects the larger calculation boards, balance schematic, handwritten cues, symbol cards and unit cancellation to aligned narration. Specific copy/layout failures in the misconception and summary were corrected. | Review the complete export and phone-size text, not just stills. |
| Make exact holds, captions and final timing reliable | The shared PCM assembler, answer-boundary handling, timeline, caption exports, dependency snapshots and five-scope review tools exist and have passing regression tests. | Technical fixtures prove timing behaviour, not a finished narrated lesson or learning benefit. |
| Use different structures for different teaching tasks | [Teaching templates](teaching-templates.md) cover concept, calculation, mechanism, investigation and evidence tasks. | Apply them to selected lessons. Do not force every topic into the molar-mass sequence. |
| Transfer beyond calculations | [Script proposals](../research/script-proposals.md) include limiting reagents, DNA, enzyme graphs and practical reasoning. The nephron pause/predict/retrieval package has a generator. | These are isolated proposals, not recorded catalogue replacements. |
| Test understanding and transfer | [Pilot package](pilots/molar-mass/README.md) has matched procedural/causal scripts, a common response task, scoring rubric and immediate/delayed assessment forms. | No learner results establish that the revised videos improve learning. Recruitment and the actual sessions remain pending. |

The first v3 rewrite reduced spoken words from 760 to 691. The completed opening prediction and causal formula explanation bring the current draft to 742 words across 11 scenes and 14 recording segments. Examples include “Two moles contribute twice that mass”, “Before you touch the calculator, count the oxygen atoms”, and “If you used the atomic value just once, go back to Cl two. That’s the step to fix.” The recorded export lasts 336.3 seconds, including protected response gaps and reading holds.

The opening visual inspection found that `l2HookBalance` shows a 63.55 g weight, which does not represent the current carbon/oxygen prediction. The selected opening now uses labelled equal-amount comparison cards (1 mol carbon atoms, 12.01 g; 1 mol oxygen atoms, 16.00 g, using the supplied school values). Cards and feedback appear after the hold. The original image remains in the asset library. This is a specific teaching mismatch fix, not a catalogue restyle.

## Which version is which?

- `src/data/chemistry-y11-m2-l2-molar-mass.json`: original catalogue lesson and its earlier recording references. It is not the improved v3 draft.
- [Corrected v2](../../src/prototypes/data/molar-mass-v2.json): isolated scientific/editorial corrections.
- [Engaging v3](../../src/prototypes/data/molar-mass-v3.json): the unvoiced 11-scene, 742-word source. The isolated narrated draft attaches new audio and resolves its visual cues without changing recorded speech.
- [Narrated review draft](../../out/prototypes/molar-mass-continuity-handoff/narrated.lesson-v2.json): measured playback, exact captions and the selected teaching boards. The complete export remains unapproved pending listening/science and other review scopes.
- [Matched research pilot](pilots/molar-mass/scripts.md): short procedural/causal alternatives to test wording while holding voice, board, question and feedback constant. It is a separate experiment, not the entire v3 lesson.
- [Current recording handoff](../../out/prototypes/molar-mass-continuity-handoff/README.md): complete recorded v3 in an isolated, course-neutral package, ready for a full watch-through and release review.
- [Current voice auditions](voice-v4-review-2026-10-08.md): six short same-script samples. The user finds them acceptable; they do not replace the final lesson narration.

## The next work should be content, then production

1. The opening response opportunity and causal formula explanation are now implemented. Complete science and listening review against the final visuals and new recordings. An unvoiced opening timing fixture supports visual inspection, but does not establish final narration timing.
2. Recording and measured assembly are complete. Watch the full review export on desktop and phone, and fix specific failures before approving the lesson.
3. Use the same standard on one DNA mechanism and one enzyme/practical evidence lesson. Build in a prediction or inference, a protected response opportunity, causal explanation and targeted feedback suited to that task.
4. Make a small batch from the [curriculum continuity priorities](curriculum-continuity-2026-10-08.md). Review scripts for engagement before spending on narration, including new scope and scientific corrections.
5. Use the existing learner assessment protocol when participants are available. Keep preference, watching and actual understanding as separate measures.

The original [research report](../research/hsc-video-production-standard-2026-10-02.md), [evidence matrix](../research/evidence-matrix.md) and [library implementation plan](../research/library-implementation-plan.md) remain the basis for these decisions. The missing step is completing and evaluating the improved lessons, then carrying the standard into reviewed batches. Voice tuning alone will not complete that work.
