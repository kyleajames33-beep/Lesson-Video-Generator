// Diorama kinds owned by the "chem-y12-m7" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {MoleculePanelsDiagram} from '../kinds/chem-y12-m7/MoleculePanelsDiagram';
import {ReactionMorphDiagram} from '../kinds/chem-y12-m7/ReactionMorphDiagram';

export const KINDS: DioramaKindMap = {
  chem12m7Molecules: MoleculePanelsDiagram,
  chem12m7Reaction: ReactionMorphDiagram,
};
