# Image prompts — Chemistry Y11 Module 3 (polish pass)

This pass was a **quality polish** of the already-aligned, already-voiced
Module 3 lessons, not a rebuild. The work was: conversational TTS pacing
rewrites (0 FAIL / 0 WARN), a handful of chemistry/content corrections, and
display-text cleanups.

## New image assets introduced this pass

**None.**

Every Module 3 scene already carries an appropriate visual — either a
concrete didactic static image (fireworks, barium-meal X-ray, bushfire
fronts, antacid tablets, cycad seeds, Harbour-Bridge zinc, bleach-on-dye,
etc.) or an existing coded diagram. The polish touched only `voiceover.text`
and a few display fields, so no new image names were created and the asset
registry does not need updating.

Existing coded diagrams already in use (kept as-is — they fit better than a
static image):

| Lesson | Scene | Diagram type |
|--------|-------|--------------|
| L7  Metal Activity Series | concept    | `table` (four reactivity tests) |
| L9  Galvanic Cells        | concept    | `galvanicCell` (Zn/Cu) |
| L10 Inert Electrodes      | concept    | `galvanicCell` (Pt · Fe²⁺/Fe³⁺) |
| L11 Collision Theory      | definition | `energyProfile` (exothermic, Ea 80, ΔH −120) |
| L12 Factors Affecting Rate| concept    | `boltzmannDistribution` |

## Desired NEW coded-diagram types (backlog — not built; require shared-file work)

I am forbidden from editing shared files (`types.ts`,
`DiagramRenderer.tsx`, registry), so these stay as static images for now.
Flagging them as the highest-value future diagram additions for M3:

1. **`netIonicReduction`** — animated spectator-ion cancellation for
   precipitation. Shows the full ionic equation, then visibly greys-out /
   crosses-through the spectator ions on both sides to leave the net ionic
   equation. Would supercharge L3 (precipitation) and the cp1 walkthrough.
   Currently served by the static images `l3WorkedBaSO4`, `l3QuickCheckPbI2`,
   `cp1Walkthrough1Precipitation`.

2. **`solubilityMatrix`** — a NAGSAG grid (anions × cations) with
   soluble/insoluble cells colour-coded and the exception cells highlighted
   (Ag⁺/Pb²⁺ for halides; Ba²⁺/Pb²⁺/Ca²⁺ for sulfates). Would replace the
   static `l3DefinitionNAGSAG`.

3. **`reductionPotentialLadder`** — a vertical E° number line with metal/ion
   couples plotted, the H⁺/H₂ = 0.00 V reference marked, and the
   anode/cathode gap shaded as E°cell. Would strengthen L9, L10, and the cp2
   walkthroughs (currently `l9DefinitionReductionPotentials`,
   `l10DefinitionAcidReactivity`).

If/when a diagram engineer adds any of these, the corresponding scenes can
drop their `image` field and gain a `diagram` block — no script regen needed
(visuals don't carry audio).
