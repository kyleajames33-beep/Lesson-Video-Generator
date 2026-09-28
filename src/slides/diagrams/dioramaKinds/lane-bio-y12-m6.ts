// Diorama kinds owned by the "bio-y12-m6" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CodonsDiagram} from '../kinds/bio-y12-m6/CodonsDiagram';
import {AlleleJobsDiagram} from '../kinds/bio-y12-m6/AlleleJobsDiagram';
import {GenePoolDiagram} from '../kinds/bio-y12-m6/GenePoolDiagram';
import {DnaDamageDiagram} from '../kinds/bio-y12-m6/DnaDamageDiagram';
import {ChromosomesDiagram} from '../kinds/bio-y12-m6/ChromosomesDiagram';
import {LineageDiagram} from '../kinds/bio-y12-m6/LineageDiagram';

export const KINDS: DioramaKindMap = {
  bio12m6Codons: CodonsDiagram,
  bio12m6AlleleJobs: AlleleJobsDiagram,
  bio12m6GenePool: GenePoolDiagram,
  bio12m6DnaDamage: DnaDamageDiagram,
  bio12m6Chromosomes: ChromosomesDiagram,
  bio12m6Lineage: LineageDiagram,
};
