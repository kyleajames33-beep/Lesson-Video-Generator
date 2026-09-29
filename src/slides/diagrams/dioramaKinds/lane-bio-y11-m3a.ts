// Diorama kinds owned by the "bio-y11-m3a" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CamouflageDiagram} from '../kinds/bio-y11-m3a/CamouflageDiagram';
import {GridDiagram} from '../kinds/bio-y11-m3a/GridDiagram';
import {ShiftDiagram} from '../kinds/bio-y11-m3a/ShiftDiagram';
import {SweepDiagram} from '../kinds/bio-y11-m3a/SweepDiagram';
import {SpeciationDiagram} from '../kinds/bio-y11-m3a/SpeciationDiagram';
import {TimelineDiagram} from '../kinds/bio-y11-m3a/TimelineDiagram';
import {GondwanaDiagram} from '../kinds/bio-y11-m3a/GondwanaDiagram';
import {LimbsDiagram} from '../kinds/bio-y11-m3a/LimbsDiagram';
import {KangarooDiagram} from '../kinds/bio-y11-m3a/KangarooDiagram';
import {LeafDiagram} from '../kinds/bio-y11-m3a/LeafDiagram';
import {ThermoDiagram} from '../kinds/bio-y11-m3a/ThermoDiagram';
import {OsmoDiagram} from '../kinds/bio-y11-m3a/OsmoDiagram';

export const KINDS: DioramaKindMap = {
  bio11m3aCamouflage: CamouflageDiagram,
  bio11m3aGrid: GridDiagram,
  bio11m3aShift: ShiftDiagram,
  bio11m3aSweep: SweepDiagram,
  bio11m3aSpeciation: SpeciationDiagram,
  bio11m3aTimeline: TimelineDiagram,
  bio11m3aGondwana: GondwanaDiagram,
  bio11m3aLimbs: LimbsDiagram,
  bio11m3aKangaroo: KangarooDiagram,
  bio11m3aLeaf: LeafDiagram,
  bio11m3aThermo: ThermoDiagram,
  bio11m3aOsmo: OsmoDiagram,
};
