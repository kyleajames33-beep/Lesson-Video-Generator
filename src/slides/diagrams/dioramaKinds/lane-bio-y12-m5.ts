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

export const KINDS: DioramaKindMap = {
  bio12m5Mitosis: MitosisDiagram,
  bio12m5Meiosis: MeiosisDiagram,
  bio12m5Ploidy: PloidyDiagram,
  bio12m5Reshuffle: ReshuffleDiagram,
  bio12m5CellCycle: CellCycleDiagram,
};
