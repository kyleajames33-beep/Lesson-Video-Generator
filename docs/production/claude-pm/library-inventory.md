# Visual library inventory (Module 5 focus)

Compiled 11 October 2026 by a Claude Haiku agent from code headers, export names and file names (not a full read of every component). Check a component's actual appearance before selecting it. About 146 items in total; this file keeps the Module 5 relevant ones and the general primitives.

Registries: `src/slides/diagrams/DiagramRenderer.tsx` (diagram `type` to component) and `src/slides/diagrams/dioramaKinds/` (`lane-chem-y12-m5.ts`, `lane-bio-y12-m5.ts`, `lane-handdrawn.ts`) map `kind` names to components.

## Chemistry Module 5 (src/slides/diagrams/kinds/chem-y12-m5/)

| Kind | Component | Shows |
| --- | --- | --- |
| chem12m5StaticDynamic | StaticDynamicDiagram | Static versus dynamic equilibrium |
| chem12m5Bottle | BottleDiagram | Sealed sparkling drink, CO2 exchange; cues reversibleAt, closedAt, openAt, flatAt |
| chem12m5Exchange | Module5ExchangeDiagram, ExchangeDiagram, exchangeSim.ts | Live particle exchange simulation |
| chem12m5Approach | Module5ApproachDiagram | Forward and reverse rates converging |
| chem12m5Disturbance / DisturbanceClear | Module5DisturbanceDiagram / ClearDiagram | Add A or remove B, then re-settle (concentration graph) |
| chem12m5HeatShift | HeatShiftDiagram | Heat written into the equation |
| chem12m5HaberLoop | HaberLoopDiagram | Haber plant diorama with recycle loop |
| chem12m5KeqBuilder / KeqScale / KeqTrend | KeqBuilder, KeqScale, KeqTrend | Building Keq; size of K; K against temperature |
| chem12m5QGauge | QGaugeDiagram | Q heading towards K as a gauge |
| chem12m5RateYield | RateYieldDiagram | Rate versus yield trade-off |
| chem12m5CatalystBoth | CatalystBothDiagram | Catalyst lowers barrier both ways |
| chem12m5Pressure | PressureDiagram | Gas mole-count rule for pressure |
| chem12m5Signatures | SignaturesDiagram | Concentration-time graph signatures |
| chem12m5GibbsSpectrum / LnK / EntropyPays | Gibbs diagrams | Reversibility, delta G = -RT ln K, entropy-driven change |
| chem12m5IceTable / SmallX / Quadratic | ICE diagrams | ICE table filling; small-x check; quadratic root choice |
| chem12m5KaKb, chem12m5Colourimetry | | Ka Kb = Kw; Keq by colour |
| chem12m5KspDissolve / CommonIon / Dissolve / HotCold / Leach / MixDilute / NetIonic | Solubility set | Ksp, common ion, dissolving energy, hot/cold packs, cycad leaching, mixing dilutes, net ionic |

Related elsewhere: `kinds/chem-y11-m3m4/CollisionBoxDiagram`, `RateFactorsDiagram`, `CatalystPathDiagram`; `kinds/handdrawn/HdCollisionTheory`, `HdDissolvingSalt`; `BoltzmannDistributionDiagram`, `EnergyProfileDiagram` (showCatalyst), `GasVolumeComparisonDiagram`.

## Biology Module 5 (src/slides/diagrams/kinds/bio-y12-m5/)

| Kind | Shows |
| --- | --- |
| bio12m5Lineage | Continuity of a lineage across generations |
| bioM5RunnerMotion | Strawberry runner spreading (asexual) |
| bioM5PlantReproduction | Plant reproduction board |
| bio12m5Flower | Flower cut-away (anthers, stigma) |
| bioM5AnimalReproduction, bio12m5Fertilise, bio12m5Mammal | Animal fertilisation, external versus internal, mammalian reproduction |
| bio12m5Microbes | Binary fission style asexual copying |
| bio12m5Breeding | Controlling which gametes meet |
| bio12m5Mitosis, Meiosis, Ploidy, Reshuffle, CellCycle | Cell division set |
| bio12m5CellDna, Dna, Fork | DNA location, structure, replication fork |
| bio12m5Translation, NucleusExport, Pathway, Fold | Polypeptide synthesis set |
| bio12m5Reads, ProbeStrip | Sequencing, SNPs |
| bio12m5Cross, Heterozygote, GxE | Monohybrid cross, heterozygote, genotype by environment |
| bio12m5GroupFreq, RiskArray, Population, AllelePool | Population genetics set |

Related: `PunnettSquareDiagram`, `PedigreeChartDiagram`, `DnaHelixDiagram`, `TranscriptionStrandDiagram`, `ChromosomeMutationDiagram`; hand-drawn `HdMitosis`, `HdDnaReplication`.

## General primitives

`src/animations/`: DoodlePrimitives (ScribbleCircle, Underline, Arrow, Box, Mark, Bracket, Hatch, Highlight, Star, Annotation, MarginNote, MistakeTag, UnitCancel), DiagramPrimitives (DrawPath, TravelingDotOnPath, SpringNumber, MagnifyLens, DataChart), AttentionPrimitives (Spotlight, LeaderLineCallout, HighlightWipe), MotionPrimitives (NumberTicker, KenBurns, ParticleEmitter, CameraFrame), FormulaBuild, WhiteboardFormula, HandWriteReveal, HandDrawn (boil and hatch stage), CameraStage. Diagram types: lineGraph, molecule3d, circuit3d (engine3d), flow, lottie (folder empty).

Claude explainer engine: `src/explainer/kit.tsx` (lens, hyphae growth, spore particles, callouts, countdown, handwritten write-on).

## Artwork (public/assets)

- Biology: strawberry runner, early bud, flower, seed cut-away, seedling; b1 prize plant, varied seedlings, clone row with disease, dry-soil trays; common frog pond, hen nest, hen reproductive location; Rhizopus mould and germination, clean bread (plus alpha versions).
- Chemistry: c1 sparkling bottle sealed and open (aligned pair), book on table; generic lab equipment (beaker, flask, test tubes, burner, balance), bubbles.png.

## Candidates by lesson

- **C1 sealed drink:** BottleDiagram, StaticDynamicDiagram, Exchange simulation; c1 bottle pair and book art.
- **C2 approaching equilibrium:** Module5ApproachDiagram, SignaturesDiagram, CollisionBoxDiagram, BoltzmannDistribution, HdCollisionTheory.
- **C3 concentration and temperature:** DisturbanceClear, HeatShift, KeqTrend, QGauge, HaberLoop.
- **C4a pressure:** PressureDiagram, GasVolumeComparison.
- **C4b catalysts:** CatalystBoth, EnergyProfile (showCatalyst), CatalystPath, RateYield.
- **B1 continuity:** Lineage, RunnerMotion, PlantReproduction, Flower; strawberry and b1 art.
- **B2 animals:** Fertilise, AnimalReproduction, Mammal; frog and hen art.
- **Plants:** Flower, PlantReproduction, RunnerMotion; seed cut-away, seedling art.
- **Fungi:** explainer mould lesson and Rhizopus art (no older component).
- **Bacteria:** bio12m5Microbes; no bacteria artwork yet.
- **Protists:** nothing in the library (gap for a future asset brief).
