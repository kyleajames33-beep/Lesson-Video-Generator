// Diorama kinds owned by the "chem-y11-m2" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {MolePathwayDiagram} from '../kinds/chem-y11-m2/MolePathwayDiagram';
import {MoleHubDiagram} from '../kinds/chem-y11-m2/MoleHubDiagram';
import {FormulaTriangleDiagram} from '../kinds/chem-y11-m2/FormulaTriangleDiagram';
import {DilutionDiagram} from '../kinds/chem-y11-m2/DilutionDiagram';
import {PercentDiagram} from '../kinds/chem-y11-m2/PercentDiagram';
import {EmpiricalBlocksDiagram} from '../kinds/chem-y11-m2/EmpiricalBlocksDiagram';
import {MolarMassScaleDiagram} from '../kinds/chem-y11-m2/MolarMassScaleDiagram';
import {CoefSubscriptDiagram} from '../kinds/chem-y11-m2/CoefSubscriptDiagram';
import {RatioConvertDiagram} from '../kinds/chem-y11-m2/RatioConvertDiagram';
import {TargetBoardsDiagram} from '../kinds/chem-y11-m2/TargetBoardsDiagram';

export const KINDS: DioramaKindMap = {
  chem11m2Pathway: MolePathwayDiagram,
  chem11m2MoleHub: MoleHubDiagram,
  chem11m2Triangle: FormulaTriangleDiagram,
  chem11m2Dilution: DilutionDiagram,
  chem11m2Percent: PercentDiagram,
  chem11m2Empirical: EmpiricalBlocksDiagram,
  chem11m2MolarScale: MolarMassScaleDiagram,
  chem11m2CoefSub: CoefSubscriptDiagram,
  chem11m2Ratio: RatioConvertDiagram,
  chem11m2Targets: TargetBoardsDiagram,
};
