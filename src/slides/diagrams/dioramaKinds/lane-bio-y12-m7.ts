// Diorama kinds owned by the "bio-y12-m7" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {SorterDiagram} from '../kinds/bio-y12-m7/SorterDiagram';
import {CompareDiagram} from '../kinds/bio-y12-m7/CompareDiagram';
import {ResponseDiagram} from '../kinds/bio-y12-m7/ResponseDiagram';
import {EpiCurveDiagram} from '../kinds/bio-y12-m7/EpiCurveDiagram';
import {StepsDiagram} from '../kinds/bio-y12-m7/StepsDiagram';
import {SelectionDiagram} from '../kinds/bio-y12-m7/SelectionDiagram';
import {AntigenDiagram} from '../kinds/bio-y12-m7/AntigenDiagram';
import {AntibodyDiagram} from '../kinds/bio-y12-m7/AntibodyDiagram';
import {ClonalDiagram} from '../kinds/bio-y12-m7/ClonalDiagram';
import {TKillDiagram} from '../kinds/bio-y12-m7/TKillDiagram';
import {HubDiagram} from '../kinds/bio-y12-m7/HubDiagram';
import {InflammationDiagram} from '../kinds/bio-y12-m7/InflammationDiagram';
import {PhagoDiagram} from '../kinds/bio-y12-m7/PhagoDiagram';
import {FlaskDiagram} from '../kinds/bio-y12-m7/FlaskDiagram';
import {DilutionDiagram} from '../kinds/bio-y12-m7/DilutionDiagram';
import {PlantDiagram} from '../kinds/bio-y12-m7/PlantDiagram';
import {LeafHRDiagram} from '../kinds/bio-y12-m7/LeafHRDiagram';
import {HerdDiagram} from '../kinds/bio-y12-m7/HerdDiagram';
import {ChainDiagram} from '../kinds/bio-y12-m7/ChainDiagram';

export const KINDS: DioramaKindMap = {
  bio12m7Sorter: SorterDiagram,
  bio12m7Compare: CompareDiagram,
  bio12m7Response: ResponseDiagram,
  bio12m7EpiCurve: EpiCurveDiagram,
  bio12m7Steps: StepsDiagram,
  bio12m7Selection: SelectionDiagram,
  bio12m7Antigen: AntigenDiagram,
  bio12m7Antibody: AntibodyDiagram,
  bio12m7Clonal: ClonalDiagram,
  bio12m7TKill: TKillDiagram,
  bio12m7Hub: HubDiagram,
  bio12m7Inflammation: InflammationDiagram,
  bio12m7Phago: PhagoDiagram,
  bio12m7Flask: FlaskDiagram,
  bio12m7Dilution: DilutionDiagram,
  bio12m7Plant: PlantDiagram,
  bio12m7LeafHR: LeafHRDiagram,
  bio12m7Herd: HerdDiagram,
  bio12m7Chain: ChainDiagram,
};
