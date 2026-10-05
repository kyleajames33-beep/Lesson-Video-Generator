# Molar-mass first pilot package

Status: prepared draft, 2 October 2026. No media generated, learner sessions run or existing lesson changed. This is one test case in the [library plan](../../../research/library-implementation-plan.md), followed by mechanism and investigation checks before rollout.

## Review contents

- [Matched full scripts](scripts.md): descriptive versus causal worked explanation; common introduction, prompt and feedback.
- [Scene and hold plan](scene-plan.md): reuse existing calculation boards; six seconds without an answer.
- [Machine-readable package](pilot.json): source/script hashes, five unique speech segments, unresolved timings and no attached recordings.
- [Student form A](assessment-a.md) and [form B](assessment-b.md).
- [Rubric and facilitator instructions](assessment-rubric.md): scoring, counterbalancing and session sequence.
- [Technical work](../../technical-change-list.md): shared production fixes required to make the draft real.

Generate these draft materials from the protocol with `node scripts/prepare-molar-mass-pilot-package.mjs`. The script performs no external calls, recording or rendering. It overwrites only its generated files in this package; this README is maintained separately. Change the source protocol first, then regenerate and review all affected materials. Changing a form or script in only one copy creates drift.

Variant A has 179 spoken words; B has 178. At a planning rate of 135 to 165 WPM, their speech is about 65 to 80 seconds, plus the six-second gap and any final reading hold. Actual audio, not this estimate, determines final timing. Preserve equal response opportunities rather than forcing identical speed.

## Proposed recording scope and remaining cost

The common introduction, prompt and feedback can use the same newly recorded selected takes in both variants. Each middle gets its own recording. That means five unique segments, 1,343 source characters for one take each. These are source-text counts, not a provider credit quotation. A proposed two-take cap is ten short clips and 2,686 source characters before any model/voice multiplier. Additional retakes require a stated reason and revised budget.

Keep Simon in the same trial model for both variants; the existing selection records eleven_v4. Actual supported settings and model access remain to be checked at recording time. Do not silently switch one variant's model. Do not attach earlier molar-mass audio. The later voice-model comparison is separate and is not included in this character budget.

Generation cost remains `approved characters × applicable credit multiplier × actual marginal credit price`, plus any alignment charges. Account prices and access are unknown here. Labour remaining includes approximately 6 to 12 hours for pilot assembly/cues/review once shared timing work is available, plus 1 to 2 hours subject review and the recruitment/session allowances in the protocol. Shared T1 to T5 work has an initial 12 to 24 hour allowance; do not add every overlapping allowance as a fixed quote.

## Checks before recording and learner testing

Teacher/science review remains pending. A matched script is not automatically an approved explanation. Confirm symbol pronunciation, supplied values, reporting convention and form difficulty. The 6.005 g midpoint in form A reports 6.01 g under the stated school rounding convention; accept correct guard-digit answers and score rounding separately from understanding.

After recording: listen to all critical words/numbers, select takes, resolve duration/cues, assemble the exact gap, rebuild alignment/captions, verify earliest answer exposure and watch complete exports on actual phone and desktop with captions on/off. No learner testing before those checks pass. Recruitment, organiser and consent route remain unresolved; no participant data belongs in this folder.

The primary comparison measures the added value of causal framing in the worked example after identical feedback. It is close transfer and a feasibility pilot, not a demonstration that all causal scripts, art treatments or AI voice models improve HSC learning.
