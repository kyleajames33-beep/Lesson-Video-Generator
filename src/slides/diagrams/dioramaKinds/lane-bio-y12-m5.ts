// Diorama kinds owned by the "bio-y12-m5" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
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

export const KINDS: DioramaKindMap = {
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
};
