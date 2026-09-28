// Diorama kinds owned by the "bio-y12-m7" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {SorterDiagram} from '../kinds/bio-y12-m7/SorterDiagram';
import {CompareDiagram} from '../kinds/bio-y12-m7/CompareDiagram';

export const KINDS: DioramaKindMap = {
  bio12m7Sorter: SorterDiagram,
  bio12m7Compare: CompareDiagram,
};
