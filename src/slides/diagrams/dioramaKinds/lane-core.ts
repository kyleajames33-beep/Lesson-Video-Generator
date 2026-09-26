// Diorama kinds owned by the "core" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {ReactionRunDiagram} from '../ReactionRunDiagram';
import {CoefficientDivideDiagram} from '../CoefficientDivideDiagram';

export const KINDS: DioramaKindMap = {
  reactionRun: ReactionRunDiagram,
  coefficientDivide: CoefficientDivideDiagram,
};
