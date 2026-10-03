# Connected chemistry visual preview

Voice selection is deferred at the user's request. This silent 42-second
preview tests continuity and teaching value rather than voice quality.
The earlier comparisons and narrated pilot remain available as references.

| Time | Teaching purpose | Reuse and treatment | Movement and hold |
| --- | --- | --- | --- |
| 0 to 18 s | One mole of different elements has different mass | Existing molar-mass diorama over the existing painted laboratory plate | Sequential loads and readouts; retain the comparison |
| 18 to 34 s | Calculate the mass of 2.00 mol of carbon | Coded editorial calculation, existing hand-drawn underline | Given values, formula, substitution, cancellation, result; hold the answer |
| 34 to 42 s | Check proportional reasoning | Large stable recall prompt | Five seconds to think; disclose the answer for three seconds |

The example uses 12.01 g mol⁻¹ for carbon. The calculated 24.02 g is rounded
to 24.0 g, consistent with the 3 significant figures in 2.00 mol. The particle
heaps are schematic, not literal drawings of the number of atoms.
The painted background provides apparatus context; all scientific values,
symbols and unit cancellation remain coded. No new artwork or voice is made.

## Design decision

Use painted context sparingly for physical orientation, existing dioramas for
comparisons and hand-drawn marks for the specific reasoning step. Avoid a
quota of effects. The biology DNA mechanism remains a separate test because
it has no teaching role in this chemistry sequence.

The existing narrated pilot also receives larger formula definitions in three
cards, retaining its exact recordings and saved reveal cues. Its original
export remains intact; the new export is under `molar-mass-pilot-v2`.

## Review and reproduce

Run `node scripts/render-connected-chemistry.mjs`. Add `--stills` for layout
review only. Run `node scripts/render-molar-mass-pilot.mjs --v2` to rebuild the
narrated visual revision using unchanged early sections from the original.
Both are review prototypes. The silent preview's estimated cues must be
replaced by actual recorded alignment before a narrated production render.

Rendered verification: 1260 video frames, exactly 42 seconds, 1280 by 720
at 30 fps, with no audio stream. The revised narrated pilot has 2188 frames
and 72.933-second audio and video, retaining the original speech. TypeScript
passes. Stills verify substitution, both cancellation marks, the rounded
answer and the recall reveal. Browser playback and 390-pixel review are
checked. The narrated review page has a control-hiding button because native
player controls obscure the diagram during paused phone inspection.

Pending: confirm visual preference after the user's return, choose and review
the voice, review the full lesson science, then finish one full lesson before
batch production. These exports do not establish improved learning outcomes.
