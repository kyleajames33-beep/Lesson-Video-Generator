// Diorama kinds owned by the "bio-y11-m2a" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CubesDiagram} from '../kinds/bio-y11-m2a/CubesDiagram';
import {LadderDiagram} from '../kinds/bio-y11-m2a/LadderDiagram';
import {OrgsDiagram} from '../kinds/bio-y11-m2a/OrgsDiagram';
import {PlantIODiagram} from '../kinds/bio-y11-m2a/PlantIODiagram';
import {MineralsDiagram} from '../kinds/bio-y11-m2a/MineralsDiagram';
import {RateGraphDiagram} from '../kinds/bio-y11-m2a/RateGraphDiagram';
import {ConditionsDiagram} from '../kinds/bio-y11-m2a/ConditionsDiagram';
import {PondweedDiagram} from '../kinds/bio-y11-m2a/PondweedDiagram';
import {VesselsDiagram} from '../kinds/bio-y11-m2a/VesselsDiagram';
import {SourceSinkDiagram} from '../kinds/bio-y11-m2a/SourceSinkDiagram';
import {PressureFlowDiagram} from '../kinds/bio-y11-m2a/PressureFlowDiagram';
import {ColumnDiagram} from '../kinds/bio-y11-m2a/ColumnDiagram';
import {TranspireDiagram} from '../kinds/bio-y11-m2a/TranspireDiagram';
import {PotometerDiagram} from '../kinds/bio-y11-m2a/PotometerDiagram';
import {SectionsDiagram} from '../kinds/bio-y11-m2a/SectionsDiagram';

export const KINDS: DioramaKindMap = {
  bio11m2Cubes: CubesDiagram,
  bio11m2Ladder: LadderDiagram,
  bio11m2Orgs: OrgsDiagram,
  bio11m2PlantIO: PlantIODiagram,
  bio11m2Minerals: MineralsDiagram,
  bio11m2RateGraph: RateGraphDiagram,
  bio11m2Conditions: ConditionsDiagram,
  bio11m2Pondweed: PondweedDiagram,
  bio11m2Vessels: VesselsDiagram,
  bio11m2SourceSink: SourceSinkDiagram,
  bio11m2PressureFlow: PressureFlowDiagram,
  bio11m2Column: ColumnDiagram,
  bio11m2Transpire: TranspireDiagram,
  bio11m2Potometer: PotometerDiagram,
  bio11m2Sections: SectionsDiagram,
};
