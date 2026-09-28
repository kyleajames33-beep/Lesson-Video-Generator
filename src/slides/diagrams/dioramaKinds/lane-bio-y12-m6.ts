// Diorama kinds owned by the "bio-y12-m6" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CodonsDiagram} from '../kinds/bio-y12-m6/CodonsDiagram';

export const KINDS: DioramaKindMap = {
  bio12m6Codons: CodonsDiagram,
};
