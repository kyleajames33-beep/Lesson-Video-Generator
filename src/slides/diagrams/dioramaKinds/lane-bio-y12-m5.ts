// Diorama kinds owned by the "bio-y12-m5" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {PlantReproductionBoard} from '../kinds/bio-y12-m5/PlantReproductionBoard';
import {Module5AnimalReproductionDiagram} from '../kinds/bio-y12-m5/Module5AnimalReproductionDiagram';
import {MitosisDiagram} from '../kinds/bio-y12-m5/MitosisDiagram';
import {MeiosisDiagram} from '../kinds/bio-y12-m5/MeiosisDiagram';
import {PloidyDiagram} from '../kinds/bio-y12-m5/PloidyDiagram';
import {ReshuffleDiagram} from '../kinds/bio-y12-m5/ReshuffleDiagram';
import {CellCycleDiagram} from '../kinds/bio-y12-m5/CellCycleDiagram';
import {DnaDiagram} from '../kinds/bio-y12-m5/DnaDiagram';
import {ForkDiagram} from '../kinds/bio-y12-m5/ForkDiagram';
import {ReadsDiagram} from '../kinds/bio-y12-m5/ReadsDiagram';
import {GroupFreqDiagram} from '../kinds/bio-y12-m5/GroupFreqDiagram';
import {ProbeStripDiagram} from '../kinds/bio-y12-m5/ProbeStripDiagram';
import {TranslationDiagram} from '../kinds/bio-y12-m5/TranslationDiagram';
import {PathwayDiagram} from '../kinds/bio-y12-m5/PathwayDiagram';
import {FoldDiagram} from '../kinds/bio-y12-m5/FoldDiagram';
import {GxEDiagram} from '../kinds/bio-y12-m5/GxEDiagram';
import {CrossDiagram} from '../kinds/bio-y12-m5/CrossDiagram';
import {HeterozygoteDiagram} from '../kinds/bio-y12-m5/HeterozygoteDiagram';
import {PopulationDiagram} from '../kinds/bio-y12-m5/PopulationDiagram';
import {Module5LineageSelector} from '../kinds/bio-y12-m5/Module5LineageDiagram';
import {MicrobesDiagram} from '../kinds/bio-y12-m5/MicrobesDiagram';
import {FlowerDiagram} from '../kinds/bio-y12-m5/FlowerDiagram';
import {MammalDiagram} from '../kinds/bio-y12-m5/MammalDiagram';
import {FertiliseDiagram} from '../kinds/bio-y12-m5/FertiliseDiagram';
import {BreedingDiagram} from '../kinds/bio-y12-m5/BreedingDiagram';
import {CellDnaDiagram} from '../kinds/bio-y12-m5/CellDnaDiagram';
import {AllelePoolDiagram} from '../kinds/bio-y12-m5/AllelePoolDiagram';
import {RiskArrayDiagram} from '../kinds/bio-y12-m5/RiskArrayDiagram';
import {NucleusExportDiagram} from '../kinds/bio-y12-m5/NucleusExportDiagram';

export const KINDS: DioramaKindMap = {
  bioM5PlantReproduction: PlantReproductionBoard,
  bioM5AnimalReproduction: Module5AnimalReproductionDiagram,
  bio12m5Mitosis: MitosisDiagram,
  bio12m5Meiosis: MeiosisDiagram,
  bio12m5Ploidy: PloidyDiagram,
  bio12m5Reshuffle: ReshuffleDiagram,
  bio12m5CellCycle: CellCycleDiagram,
  bio12m5Dna: DnaDiagram,
  bio12m5Fork: ForkDiagram,
  bio12m5Reads: ReadsDiagram,
  bio12m5GroupFreq: GroupFreqDiagram,
  bio12m5ProbeStrip: ProbeStripDiagram,
  bio12m5Translation: TranslationDiagram,
  bio12m5Pathway: PathwayDiagram,
  bio12m5Fold: FoldDiagram,
  bio12m5GxE: GxEDiagram,
  bio12m5Cross: CrossDiagram,
  bio12m5Heterozygote: HeterozygoteDiagram,
  bio12m5Population: PopulationDiagram,
  bio12m5Lineage: Module5LineageSelector,
  bio12m5Microbes: MicrobesDiagram,
  bio12m5Flower: FlowerDiagram,
  bio12m5Mammal: MammalDiagram,
  bio12m5Fertilise: FertiliseDiagram,
  bio12m5Breeding: BreedingDiagram,
  bio12m5CellDna: CellDnaDiagram,
  bio12m5AllelePool: AllelePoolDiagram,
  bio12m5RiskArray: RiskArrayDiagram,
  bio12m5NucleusExport: NucleusExportDiagram,
};
