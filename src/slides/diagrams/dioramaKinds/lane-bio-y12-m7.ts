// Diorama kinds owned by the "bio-y12-m7" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {SorterDiagram} from '../kinds/bio-y12-m7/SorterDiagram';
import {CompareDiagram} from '../kinds/bio-y12-m7/CompareDiagram';
import {ResponseDiagram} from '../kinds/bio-y12-m7/ResponseDiagram';
import {EpiCurveDiagram} from '../kinds/bio-y12-m7/EpiCurveDiagram';
import {StepsDiagram} from '../kinds/bio-y12-m7/StepsDiagram';

export const KINDS: DioramaKindMap = {
  bio12m7Sorter: SorterDiagram,
  bio12m7Compare: CompareDiagram,
  bio12m7Response: ResponseDiagram,
  bio12m7EpiCurve: EpiCurveDiagram,
  bio12m7Steps: StepsDiagram,
};
