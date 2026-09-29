// Diorama kinds owned by the "bio-y11-m3b" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {PanelsDiagram} from '../kinds/bio-y11-m3b/PanelsDiagram';
import {TempoDiagram} from '../kinds/bio-y11-m3b/TempoDiagram';
import {StrataDiagram} from '../kinds/bio-y11-m3b/StrataDiagram';
import {SeqDiagram} from '../kinds/bio-y11-m3b/SeqDiagram';
import {GraphDiagram} from '../kinds/bio-y11-m3b/GraphDiagram';
import {ToleranceDiagram} from '../kinds/bio-y11-m3b/ToleranceDiagram';
import {ShoreDiagram} from '../kinds/bio-y11-m3b/ShoreDiagram';
import {SamplingDiagram} from '../kinds/bio-y11-m3b/SamplingDiagram';
import {MrrDiagram} from '../kinds/bio-y11-m3b/MrrDiagram';
import {EstimatesDiagram} from '../kinds/bio-y11-m3b/EstimatesDiagram';
import {UsesDiagram} from '../kinds/bio-y11-m3b/UsesDiagram';

export const KINDS: DioramaKindMap = {
  bio11m3Panels: PanelsDiagram,
  bio11m3Tempo: TempoDiagram,
  bio11m3Strata: StrataDiagram,
  bio11m3Seq: SeqDiagram,
  bio11m3Graph: GraphDiagram,
  bio11m3Tolerance: ToleranceDiagram,
  bio11m3Shore: ShoreDiagram,
  bio11m3Sampling: SamplingDiagram,
  bio11m3Mrr: MrrDiagram,
  bio11m3Estimates: EstimatesDiagram,
  bio11m3Uses: UsesDiagram,
};
