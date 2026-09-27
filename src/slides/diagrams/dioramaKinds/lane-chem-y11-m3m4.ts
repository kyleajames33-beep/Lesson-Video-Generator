// Diorama kinds owned by the "chem-y11-m3m4" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {ChangeTestDiagram} from '../kinds/chem-y11-m3m4/ChangeTestDiagram';
import {CombineSplitDiagram} from '../kinds/chem-y11-m3m4/CombineSplitDiagram';
import {PrecipitateDiagram} from '../kinds/chem-y11-m3m4/PrecipitateDiagram';
import {CombustionPathsDiagram} from '../kinds/chem-y11-m3m4/CombustionPathsDiagram';
import {AcidReactionsDiagram} from '../kinds/chem-y11-m3m4/AcidReactionsDiagram';
import {ElectronTransferDiagram} from '../kinds/chem-y11-m3m4/ElectronTransferDiagram';
import {GalvanicCellDiorama} from '../kinds/chem-y11-m3m4/GalvanicCellDiorama';
import {CollisionBoxDiagram} from '../kinds/chem-y11-m3m4/CollisionBoxDiagram';
import {RateFactorsDiagram} from '../kinds/chem-y11-m3m4/RateFactorsDiagram';
import {EnergyLadderDiagram} from '../kinds/chem-y11-m3m4/EnergyLadderDiagram';
import {CalorimetryDiagram} from '../kinds/chem-y11-m3m4/CalorimetryDiagram';
import {CatalystPathDiagram} from '../kinds/chem-y11-m3m4/CatalystPathDiagram';
import {EquationStackDiagram} from '../kinds/chem-y11-m3m4/EquationStackDiagram';
import {StatesEntropyDiagram} from '../kinds/chem-y11-m3m4/StatesEntropyDiagram';

export const KINDS: DioramaKindMap = {
  chem11m3ChangeTest: ChangeTestDiagram,
  chem11m3CombineSplit: CombineSplitDiagram,
  chem11m3Precipitate: PrecipitateDiagram,
  chem11m3CombustionPaths: CombustionPathsDiagram,
  chem11m3AcidReactions: AcidReactionsDiagram,
  chem11m3ElectronTransfer: ElectronTransferDiagram,
  chem11m3GalvanicCell: GalvanicCellDiorama,
  chem11m3CollisionBox: CollisionBoxDiagram,
  chem11m3RateFactors: RateFactorsDiagram,
  chem11m4EnergyLadder: EnergyLadderDiagram,
  chem11m4Calorimetry: CalorimetryDiagram,
  chem11m4CatalystPath: CatalystPathDiagram,
  chem11m4EquationStack: EquationStackDiagram,
  chem11m4StatesEntropy: StatesEntropyDiagram,
};
