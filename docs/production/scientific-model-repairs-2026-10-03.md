# Scientific model repairs, 3 October 2026

Source corrections follow the scientific copy review for C05 and C06. Existing
artwork, layouts, scene types and narration were retained. No rendering, audio
generation or media decoding was performed. These changes are implemented but
await visual and narrated review before release.

## Changes

| Component | Confirmed source problem | Implemented correction |
| --- | --- | --- |
| EnzymeGraphDiagram | Reduced pH activity automatically distorted the active site. A falling temperature curve unconditionally showed denaturation. Substrate occupancy was normalised to 100% at the end of a finite plotted range. | Keep the native shape for pH-related charge/activity changes. Default temperature inset shows reduced activity with unspecified cause; an explicit denaturation model labels that assumption. Use the actual saturation fraction, below its limit at finite substrate. Label all curves as illustrative. |
| ForkDiagram | Primers appeared after fragment growth and disappeared during ligation, making ligase appear responsible for removal. Leading growth initially extended from before the depicted primer's 3′ end. | Show each primer when its fragment starts, extend DNA from the primer's 3′ end, replace RNA with DNA in a distinct beat, then seal remaining nicks. Clamp early cues to that order. State proofreading and repair omissions. |
| HdDnaReplication | Adjacent fragments were connected whenever both neighbouring bases existed, removing visible discontinuity before any processing step. Invalid sequence letters were silently deleted. | Keep fragment boundaries open through synthesis. Add a separately labelled simplified processing/joining beat. Validate bases without deleting them. Preserve the existing larger-letter option. |
| DnaDiagram, replication mode | Simultaneous partner assembly could be interpreted as a complete fork mechanism. | Identify it as a strand-inheritance model with enzyme steps omitted. It remains suitable for one old plus one new strand, not synthesis direction or fidelity. Other modes are unchanged. |

The pure model-state functions in `scientific-models.mjs` are used by the actual
components and by non-rendering tests. They check finite-concentration behaviour,
labelled mechanism assumptions, processing order, complementary pairing and
leading/lagging addition direction. They do not measure screen readability or
verify what an exported viewer sees.

The graph curves remain intentionally illustrative. A preset temperature curve
and pH bell curve are teaching assumptions, not a fit to experimental data.
Keeping an enzyme shape intact in the default inset means the graph does not
establish unfolding; it does not assert that unfolding is impossible.

The fork still simplifies concurrent molecular work into explanatory beats.
Its primer replacement is a schematic colour transition, not a detailed depiction
of nuclease/polymerase identities. Ligase bridges schematic spacing that represents
remaining backbone nicks after processing. The hand-drawn model names its omitted
processing steps but does not depict RNA bases, primase, polymerases or repair.

## Scientific basis

[IUBMB kinetics recommendations](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)
describe limiting rates under stated conditions and explain that similar curves
can arise through different mechanisms. This supports an approach-to-limit curve
and a separation between observed rate and inferred structural change.

[Human Okazaki-fragment maturation experiments](https://www.nature.com/articles/s41467-022-34751-2)
describe processing that produces a nick substrate for ligase. The source changes
apply that distinction at school-model level: primer replacement precedes sealing,
without assigning the detailed human enzyme system to every organism. Further
scientific sources and fidelity rationale are recorded in the
[science review](science-audit-2026-10-03.md).

## Impact and review plan

Run `npm run audit:scientific-models` for the
[scene usage queue](../../out/review/scientific-models/queue.md) and
[hashed impact record](../../out/review/scientific-models/usage.json).
It inventories catalogue, prototype-data and prepared correction-draft references.
Existing exports are unaffected files, but any future render of an affected scene
will use the changed component. Prior visual approval cannot establish approval
of these new component versions.

| Beat | Teaching purpose | Preserved treatment | Source-level status | Required later review |
| --- | --- | --- | --- | --- |
| Enzyme curve and inset | Separate measured trend from mechanism | Existing editorial/diorama curves and active-site inset | Default distortion inference removed; model labels added | Phone legibility, label width, narrated cue fit and scope wording |
| Primer, extension, replacement, sealing | Distinguish enzyme jobs and causal order | Existing fork geometry, colours and arrows | Processing order enforced, primers visible before extension | Full motion through every boundary, holds, captions and late/custom cues |
| Lagging fragments and final molecules | Show discontinuity before joining and semi-conservative composition | Existing hand-drawn bases and graphite/accent legend | Fragment joins delayed; processing limitation stated | Visible gap duration, late text overlap, synthesis-direction labels and final hold |
| Strand inheritance | Recognise one old and one new strand | Existing DNA ladder assembly | Model scope stated | Scope label placement and suitability for the selected objective |

C05 and C06 remain open for production source correction, scientific review,
final cues, media, continuous playback and device review. The original recorded
lesson copy still contains the issues identified in the earlier source review.
C07 (series-ring voltmeter) and C08 (orbit-model scope) remain separate open items;
neither Physics component was changed during this biology pass.

## Checks without media

```powershell
npm run check
npm run test:scientific-models
npm run test:science
npm run audit:scientific-models
```

These commands compile/check source, evaluate pure model state and write text/JSON
review records. They invoke no renderer or audio tool.
