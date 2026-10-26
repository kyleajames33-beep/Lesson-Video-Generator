# Independent source review: Biology M6 P01 and Chemistry M6 G02

25 October 2026. Independent Codex review requested by the release integration owner after the owner's approval of the linked previews and authorisation to publish after checks.

**Result: source and calculation pass for both lessons, with no new source learning blocker identified. This is not a playback, listening, rendered-package or release-gate pass.** No lesson, narration, renderer or existing approval record was edited.

## Exact scope

Read the author and measured lessons, their measured production briefs, the corresponding `src/explainer/lessons/bio-m6-p01` and `chem-m6-g02` scene implementations, and checks 96 and 98. Traced question demands, calculations, visible givens, answer staging, narration cue references and response holds in source. Biology review was limited to the high-level teaching, interpretation of data and arithmetic, without operational protocol improvements.

| Selected measured lesson | SHA-256 | Source duration |
| --- | --- | --- |
| `docs/production/claude-pm/lessons/m6p01b/measured/lesson.json` | `f916b5a95aa21d7ebf76108030077d959d16d5132a065d78e2fa0fb916b5421e` | 489.9 s |
| `docs/production/claude-pm/lessons/m6g02c/measured/lesson.json` | `23f543dd5df69d5a6d9827e22034b27f3fbb7cb66bd5e504701409d1c4550719` | 515.467 s |

The two config files import those measured paths directly. Each lesson has 19 scenes. All measured narration strings equal the author lesson strings. All referenced narration MP3 files exist at the recorded repository-relative paths.

## Biology M6 P01

The stated entry knowledge includes the preceding mutation and mutagens lessons, cell division and experimental variables. The main learner question is what colony counts can establish about survival and mutation. The script supplies the new colony definition before using the counts, then follows a concrete cell-to-colony case to explain why surviving mutants are included among colonies. It separates the measured outcome from the unsupported mutation claim, rather than asking students to infer this distinction from fewer colonies alone.

Check 98's two learner-facing corrections survive in the measured source and renderer notes: a colony can arise from a cell or small clump, and the hook explicitly restricts its mutant example to cells that survived. The renderer uses the organism, plates, data table, graph and visible comparison, rather than a generic diagram placeholder. This is source evidence of purposeful visual design, not confirmation of its appearance or movement at playback speed.

The displayed counts yield means 142, 98, 61, 24 and 5. The relevant relative survivals independently recompute to 43.0% and 3.5%. Attempt 1 retains both sets of counts and the calculation demand during the response hold. Its means are 152 and 41, giving 26.9737%, correctly reported as 27.0%. Attempt 2 retains the changed sampling condition, both means, the reported result and evaluation demand. Its feedback identifies the confound and distinguishes the reported ratio from the standardised comparison. The displayed arithmetic is consistent. Each feedback scene is brief (23.6 s and 25.93 s), with a crossed-out mistake.

The source includes appropriate limits on the conclusion and a separate optional notes hold. No additional high-level science or causal teaching blocker was identified within this scope.

## Chemistry M6 G02

This is a practice video. The brief explicitly assumes the earlier weak-acid ICE table, pH-to-concentration, conjugate-pair and amphiprotic lessons. Its worked explanations are appropriate to those prerequisites: the data select the method, the approximation is checked, the failed check leads to the retained denominator term, and the measured-pH case runs the table backwards. The amphiprotic comparison shows the acid one proton up before using its constant to obtain the ion's base constant. All four reaction equations conserve atoms and charge.

Independent arithmetic using the supplied data:

- Q1: x = 3.8729833 × 10^-5 mol/L; x/c = 0.0774597%; pH = 4.411954, correctly displayed as 4.41.
- Q2: trial x = 5.2915 × 10^-3 mol/L, about 26% of c. The positive quadratic root is 4.6376025 × 10^-3 mol/L, giving pH = 2.333706, correctly displayed as 2.33. The discarded shortcut gives about 2.28.
- Q3: hydronium = 9.3325430 × 10^-4 mol/L; Ka = 6.1916495 × 10^-5; pKa = 4.208194. The displayed 6.2 × 10^-5 and 4.21 follow.
- Q4: the displayed carbonate and phosphate base constants follow from Kw divided by the appropriate conjugate acid's Ka. Their relative acid/base strengths give the stated basic and acidic predictions.

The complete question cards retain concentrations, supplied constants, temperature and each question demand through the response opportunity. Q4 includes all four Ka values and Kw, although the narration does not read each number. Source timing hides worked answers until their subsequent scenes. The longer walkthroughs are the content of this practice lesson, consistent with the working-rules exception for practice walkthroughs.

The central acid/base relationships were cross-checked against the publisher's [OpenStax acid/base summary](https://openstax.org/books/chemistry-2e/pages/14-summary), [polyprotic-acid discussion](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids), and [salt-hydrolysis discussion](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-4-hydrolysis-of-salts). The numerical checks above were recalculated directly from the lesson's givens.

## Mechanical source evidence and remaining gates

- Caption word tokens match every narration string after case/punctuation normalisation. All caption timestamps fall within their scene durations. This checks transcript parity and bounds, not spoken pronunciation or audible correctness.
- All six measured response holds are 300 frames (10 s) and begin 12 frames after the voiceover end. Countdown components consume those measured hold fields.
- A direct phrase-matching audit resolved all 146 Chemistry and 145 Biology cue phrases in the single-line `cues(sc(...))` / `cues(S(...))` declarations scanned. Additional indirect `S5` cue references were inspected in source. This does not prove animation offsets, layout or motion quality at playback speed.
- Both key-notes scenes retain 20.8 s after the recorded speech ends. No em dash occurs in either narration.

The measured briefs still contain pending voiced-preview and human-listening fields. This review does not change them or reinterpret the owner's statement as evidence that any particular listening task occurred. Root should record the owner's exact approval separately, perform the exact playback and visual checks it can substantiate, and run the existing export and complete-package gates on the actual selected inputs and resulting MP4s. No source blocker from this review requires a script or audio rebuild.

## Addendum: sampled exact voiced-preview inspection

Later on 25 October, the integration owner relayed the user's explicit confirmation that they watched and listened to all four previews. That user statement is separate owner evidence; this independent reviewer does not claim to have performed human listening.

Inspected the actual Chrome pages `http://127.0.0.1:8778/Explainer-bio-m6-p01-preview-v1/` and `http://127.0.0.1:8778/Explainer-chem-m6-g02-preview-v1/`, using the visible scene buttons and Play control at its normal setting, repeated browser screenshots and the accessibility tree during progression. The pages identify the expected 14,697- and 15,464-frame lessons. No speed adjustment was made. These are sampled playback observations, not uninterrupted whole-lesson viewing, frame-rate measurement or exported-MP4 review. The unoverridden browser screenshot was 1686 by 771 with an approximately 1090 by 613 player; no portrait-phone pass is claimed.

Biology observations:

- In `four-fates` (about 0:50 to 1:22), the DNA lens and organism remain identifiable as branches appear successively. The copying marker stalls, the no-colony case separates from the colony cases, and the survivor bracket and mutant tag arrive after the cases. The picture supports the stated distinction between loss of colony-forming ability and mutation among survivors.
- In `attempt-1` (about 5:25 to 5:52), both count sets and the full relative-survival demand become visible before the response hold. The working area stays blank, and the visible countdown progresses through 6 and 4 without an answer leak. The following feedback starts with the control-mean line, rather than presenting all results during the attempt. The full player screenshot shows readable question copy and no stem clipping.
- The observed visuals support the source learner path. No new learning blocker was found in these inspected beats. Other scenes retain the source-only scope stated above.

Chemistry observations:

- `q2-question` retains the acid, concentration, Ka, temperature and both (a)/(b) demands in the countdown. The observed countdown showed 5 with blank working boxes and no worked answer.
- Through `q2-check-fails` and `q2-full` (about 2:39 to 3:42), the retained question shrinks to a reference card; used givens are underlined; the denominator term drops out for the estimate and returns after the failed check. The comparison ruler places the trial well beyond 5%. The calculation advances to the full quadratic, root and pH while earlier working dims. This staged contrast provides an intelligible reason to abandon the shortcut.
- The subsequent mistake scene retains pH 2.33 and compares it with 2.28, rather than asking students to reconstruct the corrected result from memory.
- At the start of `q4-carbonate` (about 6:16 to 6:34), the full task and constants remain in a small reference card. The live ion, donor/acceptor branches, proton chain and conjugate-pair label occupy the explanation area; the Kb relation and substituted values appear during the worked step. The relevant ion and source of its base constant remain identifiable. This observation is of the worked explanation, not a screenshot of Q4's response hold.
- **Minor visual finding:** in `q2-full`, near 3:35, the right-hand note `the negative root is not a concentration` extends behind the answer panel and is partly obscured. The equation, positive root and subsequent pH remain visible. This is an annotation collision, not a calculation or main causal-learning failure. Move that note into the free space above the root or shorten its width before a fresh export if practical; a changed renderer needs fresh exact visual verification. Do not change recorded narration for this repair.

No caption overlay was displayed in these browser screenshots. Caption token parity remains verified in source, but this addendum does not establish caption-safe layout or final YouTube caption presentation. Root's separate caption and package checks still apply.
