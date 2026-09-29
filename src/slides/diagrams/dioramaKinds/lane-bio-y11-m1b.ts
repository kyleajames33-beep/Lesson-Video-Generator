// Diorama kinds owned by the "bio-y11-m1b" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {EnergyEquationDiagram} from '../kinds/bio-y11-m1b/EnergyEquationDiagram';
import {StepwiseReleaseDiagram} from '../kinds/bio-y11-m1b/StepwiseReleaseDiagram';
import {PathwaysDiagram} from '../kinds/bio-y11-m1b/PathwaysDiagram';
import {EnergyCycleDiagram} from '../kinds/bio-y11-m1b/EnergyCycleDiagram';
import {EnzymeDiagram} from '../kinds/bio-y11-m1b/EnzymeDiagram';
import {ActivationDiagram} from '../kinds/bio-y11-m1b/ActivationDiagram';
import {EnzymeGraphDiagram} from '../kinds/bio-y11-m1b/EnzymeGraphDiagram';
import {PracticalDiagram} from '../kinds/bio-y11-m1b/PracticalDiagram';
import {ZipperDiagram} from '../kinds/bio-y11-m1b/ZipperDiagram';
import {WeighDiagram} from '../kinds/bio-y11-m1b/WeighDiagram';
import {SomaticGameticDiagram} from '../kinds/bio-y11-m1b/SomaticGameticDiagram';
import {CheckpointDiagram} from '../kinds/bio-y11-m1b/CheckpointDiagram';
import {AssortmentDiagram} from '../kinds/bio-y11-m1b/AssortmentDiagram';
import {FourProcessesDiagram} from '../kinds/bio-y11-m1b/FourProcessesDiagram';

export const KINDS: DioramaKindMap = {
  bio11m1bEnergy: EnergyEquationDiagram,
  bio11m1bStepwise: StepwiseReleaseDiagram,
  bio11m1bPathways: PathwaysDiagram,
  bio11m1bCycle: EnergyCycleDiagram,
  bio11m1bEnzyme: EnzymeDiagram,
  bio11m1bActivation: ActivationDiagram,
  bio11m1bEnzymeGraph: EnzymeGraphDiagram,
  bio11m1bPractical: PracticalDiagram,
  bio11m1bZipper: ZipperDiagram,
  bio11m1bWeigh: WeighDiagram,
  bio11m1bSomaticGametic: SomaticGameticDiagram,
  bio11m1bCheckpoint: CheckpointDiagram,
  bio11m1bAssortment: AssortmentDiagram,
  bio11m1bFourProcesses: FourProcessesDiagram,
};
