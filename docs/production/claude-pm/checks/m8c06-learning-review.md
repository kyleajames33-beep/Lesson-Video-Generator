# m8c06: independent student learning review

Reviewed 30 October 2026 by Codex. Design Revision 1. Source: `docs\production\claude-pm\lessons\chem-m8-c06.md`. SHA-256: `52280503f23711a77522f7cba1aad942295fd398b9c8fc586c95c68f2b30229e`.

Inspected the written proposal, narration, visual plans, attempts, feedback, notes and metadata. Earlier lesson sources were compared for prerequisite and double-teaching checks. This is a proposal review. It does not establish plate fit, playback motion, caption fit or human listening. No real student explanations were collected. Repeat on the exact voiced preview before export.

Main learner question: **What do DO and BOD measure, and how does a Winkler titre become mg/L?**

## Findings

| # | Severity | Scene / location | Finding and learner question | Concrete repair |
| --- | --- | --- | --- | --- |
| 1 | should fix | 12, 15 and 20 | **Give the fixed-interval meaning alongside the how-fast shorthand.** BOD5 is oxygen consumed over a fixed five-day test, in mg/L. "How fast" invites mg/L/day and suggests the bottle predicts the actual river rate. The subtraction example calculates an amount, not a speed. | Use "BOD measures how much oxygen microbes use in five days under standard conditions" and in the handoff "BOD is the oxygen used during the five-day test". Keep "oxygen now / oxygen used later" after stating the fixed test. Replace, do not add sentences. |
| 2 | should fix | 2, 11 and feedback 1 | **The sense check makes saturation an absolute ceiling.** "Can hold only" and "more oxygen than water can hold" conflict with the earlier algae/daylight story: photosynthesis can supersaturate water. A student would reject a real high reading. | Say "Air-saturated fresh water at twenty degrees contains about nine milligrams per litre". Feedback: "Using one to one gives thirty-three, about four times the right answer. Recheck the ratio." Keep the 70% comparison labelled air saturation. |
| 3 | should fix | 18 and 19 | **The low-depletion sample is presented as a standard measured BOD result.** P loses only 0.9 mg/L. The author notes the method criterion but the learner receives an unqualified 0.9 result. Separate arithmetic from reportable laboratory evidence. | Change the question to ask for "the five-day oxygen decrease" for P and Q, then interpret the larger demand, or use a validated low-level BOD method and state it in the question. Do not hide a changed P dataset only in feedback. Same number of words is possible. |
| 4 | optional | 12 | **The longest scene has three reasons and the procedure together.** The causal explanations are useful; splitting the scene adds time to an almost full lesson. | Keep one scene but reveal the sealed/dark/20-degree conditions one at a time next to the same two bottles. Do not add a hold. If one is essential, remove the existing scene-11 saturation sentence to pay for it. |

**Counts: 0 blocker, 3 should fix, 1 optional.** Counts overlap the science review where the same issue affects learning; do not add the two counts as distinct repairs.

## Learner trace and boundaries

From C05 and C01, the learner starts with oxygen demand and cV. Fixing links oxygen to brown manganese solid, acid releases iodine, thiosulfate measures iodine, the 1:4 ratio converts the titre, and mass/sample volume produces 6.40 mg/L. The later five-day comparison needs a fixed-amount meaning.

C05 day/night swings and warm water are recalls. C01 titration arithmetic is applied to a new ratio, not unnecessarily repeated.

## Arithmetic and reading load

Worked titre: 0.0100 x 0.00800 = 8.00e-5 mol thiosulfate; /4 = 2.00e-5 mol O2; x 32.00 x 1000 = 0.640 mg; /0.1000 = 6.40 mg/L. 6.40/9.09 x100 = 70.41%. A1: 0.00500 x0.01040 /4 x 32.00 x 1000 /0.05000 = 8.32 mg/L; wrong 1:1 gives 33.28, rounded 33.3. BOD differences 3.5, 0.9 and 5.8 mg/L are arithmetically correct. P needs the reporting distinction in finding 3.

Recount: 6,254 narration characters in 21 scenes. The source contains 0 em dashes. Counts use normalized line endings, lines beginning `> `, joined within each scene, and removed bold markers. Full per-scene counts and exact source hashes are in `../assets/brief118-source-audit.json`.

The current-case layout, dimmed previous work and retained question cards are useful. Every question specifies a visible ten-second countdown after speech. Feedback contains a crossed classic mistake; its exact duration is untested. Optional notes have a quiet copy/pause hold. The plan uses organisms, apparatus or data rather than text substitutes. Continuous motion has not been inspected at playback speed, so no motion pass is claimed.

## Timing and verdict

The design is already about 568-570 seconds. Repairs above replace existing clauses or screen labels; no new scene or hold is required. Named cuts are given where longer wording is suggested. Recount and time the exact speech after author resolution. Resolve the should-fix findings before recording. Retain the successful visual comparisons and approved lesson boundary. Science review remains separate; neither this source review nor art QA approves a recording or release.

## Resolution

Resolved in `../lessons/chem-m8-c06.md` Revision 2 (31 Oct; root resolver, Claude PM). Learning findings 1, 2 and 3 overlap science findings 1, 2 and 4 and are one edit each. Recount by script (sum of "> " lines per scene, bold markers removed): 6,269 characters (Revision 1: 6,254), about 569 s, under the 570 s cap. Named cuts: scene 11's spoken saturation sentence (the 70% gauge stays on screen) and scene 3's shortened meter sentence.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | "How fast" shorthand without the fixed five-day meaning | Fixed (as proposed). Scene 12: "BOD measures how much oxygen microbes use in five days, under standard conditions." Scene 20: "BOD is the oxygen used during the five-day test." Scene 15's "oxygen now / oxygen used later" stays after the fixed test is stated. | Scenes 12, 15 (kept), 20 |
| 2 | Saturation made an absolute ceiling | Fixed (as proposed). Scene 2: "Air-saturated fresh water at twenty degrees contains about nine milligrams per litre". Feedback 1: "Using one to one gives thirty three, about four times the right answer. Recheck the ratio." The 70% comparison stays on screen, labelled "of air saturation". | Scenes 2, 11 (screen), 17; Decisions A1; Numbers used |
| 3 | Low-depletion sample presented as a standard BOD result | Fixed (as proposed, first option). Attempt 2 asks for "the five-day oxygen decrease for each sample"; feedback 2 says "P's oxygen fell by point nine, and Q's by five point eight"; grey tag on P: "a decrease under 2 mg/L is too small for a standard BOD result". Same data. | Scenes 18 and 19; card; Decisions A2; Numbers used and to verify |
| 4 | Longest scene carries three reasons and the procedure (optional) | Taken without a split or a hold: the three conditions reveal one at a time beside the same two bottles. Scene 11's spoken saturation sentence is removed to pay for the longer wording elsewhere, as the finding allows. | Scenes 11 and 12 |
