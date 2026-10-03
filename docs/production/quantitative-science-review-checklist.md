# Science review checklist for the six complete drafts

Review status: pending. No reviewer identity, sign-off or learning result is
recorded by this checklist. Use the current
[package manifest](../../out/review/quantitative-lessons/manifest.json) to record
the exact original-source and proposed-draft hashes beside each review outcome.
Run `npm run validate:quantitative-package` before reviewing changed files.

For each lesson, record reviewer, date, draft hash, accepted or changes-required,
affected scene/field and scientific rationale. Review copy and supplied question
data together. Do not infer approval from the passing arithmetic tests.

## Checks common to all six lessons

- Verify the applicable cohort and exact syllabus coverage separately. The
  earlier selected Biology mapping does not verify these Chemistry lessons.
- Recalculate from one supplied value set, retaining guard digits. Distinguish
  equality from rounded approximation and check spoken/displayed units and signs.
- Check that the requested reporting convention is explicit and is not presented
  as a measured uncertainty analysis.
- Read the hook, concept account, worked example, misconception, response task
  and summary as one lesson. Look for claims that become false outside the stated
  model or imply an investigation has been completed merely by watching.
- Assess the question without reading its feedback first. Confirm it supplies
  enough data and assumptions, and that the answer addresses the requested quantity.
- Confirm changed copy is suitable for fresh narration. Do not reattach an old
  take or treat proposed reading/thinking time as an audio measurement.

## Lesson-specific decisions

| Lesson | Check and record a decision |
| --- | --- |
| Empirical/molecular formulas | Verify the approximate ratio inference, formula multiplier and supplied atomic values. Explain why equal empirical formulas or molecular formulas alone do not establish unique molecular identity. Ensure the atom-block illustration is read as composition grouping rather than a chemical reaction or complete structural model |
| Gravimetry | Verify precipitate stoichiometry, weighing form, sample volume, recovery/purity assumptions and chloride/sulfate calculations. Check that washing, drying, excess reagent and constant mass are not portrayed as unconditional guarantees of accuracy |
| Combustion | Verify the water/reaction system distinction, fuel amount, sign, J-to-kJ conversion and requested precision. Check constant-pressure and complete-combustion assumptions, vessel/external heat transfer and fuel evaporation. Distinguish a smaller exothermic magnitude from a numerically smaller signed value |
| Neutralisation | Verify the complete balanced reaction before calculating water amount, including the 1:2 H₂SO₄/NaOH example. Check total solution mass, equal initial temperatures, heat-capacity approximation and neglected mixing/dilution heat. Restrict negative enthalpy claims to the stated cases |
| Dissolution | Verify total solution mass, equal initial solid/water temperatures, signed solution heat and the opposite dissolution sign. Check the declared qualitative lattice-dissociation/hydration cycle and reference states. Separate enthalpy from spontaneity and bound commercial-pack examples |
| Back/conductometric titration | Verify selective completion, known excess, full-sample or aliquot/blank accounting and both balanced reactions. Recalculate mass/percentage from unrounded amounts. Check that no missing label supports a compliance claim. Scope the conductometric curve to HCl/NaOH and distinguish conductivity from measured conductance |

## Component source findings before preview

Subsequent source work implements shared defaults, scoped conductometric
labels/motion and required-cue checks. See the
[repair evidence](quantitative-model-repairs-2026-10-03.md). The table below
preserves the findings that prompted the work. Original overridden card copy,
final cue integration and science/visual review remain open.

The source inspection below identifies dependencies that the text/schema checks
do not resolve. Existing component artwork and animation code are preserved.
No visual or continuous-playback approval is recorded.

| Component/source finding | Required next action |
| --- | --- |
| [CalorimetryDiagram](../../src/slides/diagrams/kinds/chem-y11-m3m4/CalorimetryDiagram.tsx): the default neutralisation card still uses concentration × volume of limiting reactant as a universal water amount. The integrated draft supplies corrected custom card copy | Reconcile the shared default with balanced stoichiometry without silently changing recorded lesson copy. Review all affected uses before production |
| Calorimetry custom cards and notes require `at`; the unvoiced draft intentionally removes these speech cues. The component reads `list[0].at`, `c.at` and `note.at` directly | Treat this as an explicit cue-integration dependency. Rebuild finite cue values from final alignment before preview; do not rely on the schema pass to establish visibility |
| [EnergyLadderDiagram](../../src/slides/diagrams/kinds/chem-y11-m3m4/EnergyLadderDiagram.tsx): arrow, heat, reference-line, note and step reveals depend on `at` fields. Those values are removed from the drafts while qualitative level geometry is retained | Rebuild reveal order and reading holds. Verify the dissolution gas-ion reference label, positive lattice dissociation and negative hydration throughout motion. Do not read qualitative level spacing as measured enthalpy |
| [ConductometricDiagram](../../src/slides/diagrams/kinds/chem-y12-m6/ConductometricDiagram.tsx): generic accessible description and endpoint label present a minimum without identifying HCl/NaOH. The chart calculation divides conductivity-weighted counts by total volume | Scope accessible/visible labels to the selected reaction and identify the normalised illustrative signal. Check concentration/dilution, conductivity/conductance units and what fitted experimental branches would establish |
| Conductometric ion motion uses different arbitrary jitter speeds by ion. The endpoint says only Na⁺ and Cl⁻ remain, omitting the equilibrium qualification. The new note supplies model context but its cue is removed | Review whether motion could imply a physical transport mechanism or speed measurement. Bound the major-ion simplification, restore note timing and confirm the intended conductivity-value conditions/units before use |
| [EmpiricalBlocksDiagram](../../src/slides/diagrams/kinds/chem-y11-m2/EmpiricalBlocksDiagram.tsx): atom counts and grouping illustrate empirical units; its default compounds are named glucose and formaldehyde | Check count conservation, grouping and the spoken limitation about formula identity. Verify that labels teach a known illustrative compound rather than inferring its identity from formula alone |

Component findings are C22 in the correction register. Subject review may
identify further changes; this is a bounded source inspection, not a complete
scientific simulation audit. Shared default repairs should include source/model
checks and an affected-use inventory. Changed narration still requires later
fresh media and alignment.

The [artwork queue](../../out/review/selected-artwork/queue.md) separately records
four missing scene images. Locate existing approved files and rights evidence.
Caption/device fit, actual response boundaries, continuous scientific motion,
listening, learner timing and restore testing remain later review scopes.
