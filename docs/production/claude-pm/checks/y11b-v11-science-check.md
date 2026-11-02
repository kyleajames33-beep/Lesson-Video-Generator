# y11b-v11 science check

Revision 1, reviewed 2 November 2026. Design SHA256 `037bf63055ebf47cf56a3313e993cd4e388ea573a9319d680757de9663f798da`. Full written design, current L09, fresh official point, route and root decisions inspected. No finished plates, continuous preview or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

Local route ID `B25-FA1-G2-04`, official CMS codename `cia0fe163d`: Predict the effects of hypertonic , hypotonic and isotonic solutions on animal and plant cells

Fresh official source, 2 November 2026: [NSW Biology FA1](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c). Exact HTML is in `work/brief147/v11/official-point.json`; B25 is a local alias. The local ledger matches fresh text exactly; the route normalises punctuation spacing.

## Findings

1. **Should fix:** Scene 8 shrinks a turgid cell to flaccid while both counters show equal water flow throughout. A falling volume needs net outward movement. Start on the already equilibrated flaccid crop with equal counters, or show transient net outward flow before the final equal-rate state. This is shared with learning; the same scene can show the corrected change without extra speech.

2. **Should fix:** Scene 7 names the wall’s inward push as turgor pressure, reinforced by the label “turgor pressure: the wall pushing back”. Turgor is the internal hydrostatic pressure of the cell contents acting against the wall; the wall supplies opposing resistance. Replace the two sentences with “The wall resists swelling as the water pressure inside rises. That is turgor pressure”, and label the internal pressure and wall reaction separately. Keep the existing two-sided arrows. This is a same-length explanation of the correct quantities, not another physics scene. [Experimental living-cell plasmolysis/deplasmolysis work](https://pmc.ncbi.nlm.nih.gov/articles/PMC4844282/) supports the distinction between vacuolar water loss, turgor and mechanical connection to the wall.

The same wall-pressure repair must scope the early comparison to effectively nonpenetrating solutes over the observation interval, rather than all solutes regardless of permeability. The repeated “wall never changes direction/only the result differs/predict any cell” rule is broader than the demonstrated mechanism. Scene 7 correctly stops net entry when pressure balances the tendency to take up water, even while the exterior remains dilute. Scope the concentration arrows to the initial tendency in these examples, then retain that pressure opposition. Add “initially” to the rule/header and remove one repeated direction sentence in scene 10 or 12 if words are needed. No water-potential terminology or extra scene is required. The final turgid grid cell should show no net influx at equilibrium, rather than a perpetual inward arrow.

3. **Should fix:** Scene 6 defines “fully permeable” as letting water and dissolved substances pass straight through, without the author note’s small-solute scope. Plant walls can restrict larger molecules. Use “freely permeable to water and these small solutes” in speech, labels and notes. The [original pore-exclusion measurements](https://pubmed.ncbi.nlm.nih.gov/17735052/) directly show size restrictions; no pore-size figures or additional mechanism need appear in this video. The small salt-solution gap wash and wall-versus-membrane comparison remain valid.

## Confirmed content, practice and values

The six standard cases meet the content point when the effective nonpenetrating-solute comparison and initial/equilibrium distinction above are retained. The relative nature of hypo/iso/hyper is explicit. The late memory tag already says the solute cannot freely cross; keep that condition with the early comparison too, without turning the lesson into water-potential theory. Equal flow at isotonic equilibrium does not mean water stops moving. Distilled-water red cells can haemolyse, while a smaller hypotonic change may only swell them; the design correctly retains “may burst”. Hypertonic shrinking/crenation, vacuolar water loss and plasmolysis are correctly distinguished. A surviving plasmolysed cell can reverse on return to water, consistent with [directly imaged plasmolytic cycles](https://pmc.ncbi.nlm.nih.gov/articles/PMC4844282/).

Ordinary wilting is a loss-of-turgor effect; it need not imply membrane detachment/plasmolysis. Lettuce re-crisping is suitable for viable tissue wilted by water loss. The root-approved slug remains healthy on screen; only the coded skin-cell illustration shrinks, and no animal experiment or salt-application instruction is added. The film has a higher effective solute concentration in the stated explanation; do not turn the hook into a live-animal activity.

The hospital example is interpreted as common isotonic saline, not a claim that every IV prescription is the same fluid. [NICE’s current fluid guidance](https://www.nice.org.uk/guidance/cg174/chapter/Recommendations) lists multiple formulations and indications. An “isotonic with blood cells” tag is more precise than literal identity of blood’s individual solute concentrations; no saline percentage or treatment advice is taught. Normal blood plasma and red cells are in approximate osmotic balance. The absence of a plant wall does not mean red-cell membranes have no supporting cytoskeleton; the spoken contrast concerns the rigid external wall.

Practice 1: X hypotonic, Y isotonic, Z hypertonic; Z loses net water and crenates. Practice 2: plasmolysis after the strong salt treatment; viable cells return toward turgidity in distilled water and the wall resists excessive expansion. Both cards give observations/conditions without naming the answer; observed cell diagrams are evidence, not leaks. Ten-minute/15-minute contexts are illustrative observations, not universal timing thresholds. No fresh human tissue is requested. The final uphill-transport question leaves active transport to v12.

The reference swatches use 3,8,15 outside dots versus 8 inside. They represent lower/equal/higher concentration only when reference volumes are equal, not measured osmolarities. All six outcomes and symbolic direction checks are recorded in `work/brief147/v11/science-evidence.json`; there is no numerical calculation requiring a new measurement. Recount: 5,669 separate-scene characters, 5,684 joined, 16 scenes; stated about 549 s. Site SHA256 matches `1dcbc53cb91a82914dde9d7123c2652b001668bed9ccbce77fe9fe5bc85929e0`.

## Source findings and limits

`work/brief147/v11/site-findings.json` verifies the source’s bursting/only-safe overstatement, wilting/plasmolysis conflation and active-water-loss wording. Parent checks context and deduplicates before logging. The “water always” reminder may already be understood as net flow from context; it is identified as an owner clarification rather than automatically another categorical error. The route’s incorrect b2 label is a route note, not a site error. The source site remains unchanged.

Count: 0 blockers, 3 should fix, 0 optional. Unique cross-report total: 3 should fix. Repairs replace speech/labels or correct motion at the same cue; the repeated rule supplies any required word cut. No design edits, artwork, speech, renders or commits.
