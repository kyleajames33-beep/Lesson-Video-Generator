# Visual direction test : 2026-10-02

## Decision to make

Choose visual treatments by teaching purpose. User feedback on 2026-10-02
favours hand-drawn and painted treatments, permits a mixture, and asks us to
preserve usable existing designs. Follow [animation planning](animation-planning.md)
for the next pilot. The current
catalogue already has 278 diorama kinds. More components are not the immediate
goal; stronger selection, staging and narration alignment are.

## First controlled comparison

Three 24-second silent motion prototypes use the same content and beat times:

| Direction | Treatment | Hypothesis |
| --- | --- | --- |
| A : editorial diorama | Light stage, stone plinths, coded quantities | Best default for legibility and repeatable production |
| B : hand-drawn explanation | Paper, hatching and held motion; labels stay stable | Useful for mechanisms and teacher-like explanation |
| C : painted laboratory | Generated text-free backdrop with the same coded bars | May improve atmosphere; must not distract or dilute the science |

Content comes from the limiting-reagents example in Chemistry Y11 M2 L13:
`2Na + Cl₂ → 2NaCl`; `0.435 mol Na`, `0.282 mol Cl₂`.
Sodium reaction capacity is `0.435 / 2 = 0.2175 mol`, displayed as `0.218 mol`;
chlorine capacity is `0.282 / 1 = 0.282 mol`. Sodium is limiting. Raw mole count
alone gives the wrong intuition. Bars use unrounded values; visible working
uses three significant figures, consistent with the existing example.

- 0–8 seconds: question and raw amounts.
- 8–16 seconds: divide by stoichiometric coefficients; Na bar halves.
- 16–24 seconds: decision and transferable rule.

No voice or music in this first experiment: missing API credentials should not
prevent a visual comparison. This phase does not test audiovisual pacing or
teaching effectiveness. Prototype compositions use an isolated entry point,
without modifying the lesson catalogue.

## Review and selection

1. View each clip once, then explain why sodium is limiting.
2. Review the phone-size setting: equation, values and conclusion must be readable.
3. Identify distracting movement, unnecessary detail and long unproductive holds.
4. Compare the same beat across all three clips using synchronized playback.
5. Select a default and, if earned, one secondary style. Keep an option to reject
   all three or combine specific moves.

The initial designer preference was A as default. User feedback supersedes
that proposal: use a mix where it helps, without wholesale redesign. This
first comparison tests chart presentation; it cannot
establish how well B works for cell division or C works for apparatus.

## After selection

The next experiment is the [molar mass narrated pilot](molar-mass-pilot-plan.md),
reusing existing artwork and recorded speech. Run `npm run prototype:pilot`.
This pilot tests conversion and unit cancellation. The separate Biology
mechanism is now included in the capability comparisons.

The [capability comparisons](capability-tests-plan.md) now cover a native DNA
mechanism and existing diorama motion with and without the painted context.
They are silent visual tests. A same-script ElevenLabs comparison is prepared;
new voice generation is deferred to the user on their return.

The [connected chemistry preview](connected-chemistry-plan.md) now tests
painted context, an existing diorama, a worked calculation with hand-drawn
marks and an active-recall hold in one silent sequence. The narrated pilot's
V2 export improves formula readability without changing its speech.

1. Test the selected treatment on one Biology mechanism to check transfer.
2. Build a 60–90 second narrated pilot using an agreed voice; time reveals from
   recorded alignment rather than estimated reading speed.
3. Review scientific accuracy, pronunciation, mobile legibility, transitions,
   active-recall pauses, loudness and retention of the opening.
4. Record a compact set of rules and reusable templates. Avoid module-wide
   restyling until the pilot survives the complete review.
5. Complete one full lesson, then a small release batch. Revisit the direction
   using learner feedback and viewing behaviour.

## Reproduce

`npm run prototype:render` renders the three clips and nine review stills to
`out/prototypes/`, plus a local comparison page. `--stills` skips video.
`npm run prototype:studio` opens only these experimental compositions.

The comparison MP4s are 1280×720 at 30fps, derived from a 1920×1080 layout.
Review stills are 960×540. Generated artwork is in
`public/assets/prototypes/lab-background-v1.png`; like other project media,
it is ignored by Git and must be backed up or transferred separately.

## Generated artwork provenance

Tool: built-in image generation; model variant was not exposed by the tool.
Original output is preserved in the Codex generated-images directory. The
selected image was copied into the workspace, without replacing existing art.

Prompt:

> Create a text-free painted background plate for an educational science video prototype, landscape 16:9 composition. Premium restrained editorial gouache and softly rendered 3D illustration, warm ivory studio background #f7f7f5, pale neutral stone workbench surface along the bottom quarter. A very small cluster of clear EMPTY unmarked chemistry glassware (one round bottom flask and one beaker) at the far right edge only, cropped slightly, muted teal shadows, soft top-left lighting, natural subtle brush texture. The central 80% and upper 75% must be nearly empty ivory negative space because exact coded quantitative bar charts will be overlaid there. No plinths, no columns, no atoms, no liquids, no chemical reactions, no apparatus connections, no people, no text, no letters, no numbers, no labels, no logos. Mature understated science editorial art, not cartoon, not fantasy, no photographic busy laboratory. Full-bleed opaque background, gentle depth without strong contrast. Output a clean production background asset.
