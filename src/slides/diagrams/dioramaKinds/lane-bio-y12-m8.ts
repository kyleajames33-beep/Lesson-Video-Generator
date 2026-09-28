// Diorama kinds owned by the "bio-y12-m8" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {EyeRaysDiagram} from '../kinds/bio-y12-m8/EyeRaysDiagram';
import {EarRouteDiagram} from '../kinds/bio-y12-m8/EarRouteDiagram';
import {FeedbackLoopDiagram} from '../kinds/bio-y12-m8/FeedbackLoopDiagram';
import {FeedbackCurvesDiagram} from '../kinds/bio-y12-m8/FeedbackCurvesDiagram';
import {TwoHitDiagram} from '../kinds/bio-y12-m8/TwoHitDiagram';
import {MembraneDiagram} from '../kinds/bio-y12-m8/MembraneDiagram';
import {DataPanelsDiagram} from '../kinds/bio-y12-m8/DataPanelsDiagram';
import {NonDisjunctionDiagram} from '../kinds/bio-y12-m8/NonDisjunctionDiagram';
import {InheritanceDiagram} from '../kinds/bio-y12-m8/InheritanceDiagram';

export const KINDS: DioramaKindMap = {
  bio12m8EyeRays: EyeRaysDiagram,
  bio12m8EarRoute: EarRouteDiagram,
  bio12m8FeedbackLoop: FeedbackLoopDiagram,
  bio12m8FeedbackCurves: FeedbackCurvesDiagram,
  bio12m8TwoHit: TwoHitDiagram,
  bio12m8Membrane: MembraneDiagram,
  bio12m8DataPanels: DataPanelsDiagram,
  bio12m8NonDisjunction: NonDisjunctionDiagram,
  bio12m8Inheritance: InheritanceDiagram,
};
