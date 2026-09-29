// Diorama kinds owned by the "bio-y11-m2b" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CompareDiagram} from '../kinds/bio-y11-m2b/CompareDiagram';
import {HubDiagram} from '../kinds/bio-y11-m2b/HubDiagram';
import {ReachDiagram} from '../kinds/bio-y11-m2b/ReachDiagram';
import {BreakdownDiagram} from '../kinds/bio-y11-m2b/BreakdownDiagram';
import {TractDiagram} from '../kinds/bio-y11-m2b/TractDiagram';
import {VilliDiagram} from '../kinds/bio-y11-m2b/VilliDiagram';
import {OrganTrackDiagram} from '../kinds/bio-y11-m2b/OrganTrackDiagram';
import {VesselsDiagram} from '../kinds/bio-y11-m2b/VesselsDiagram';
import {BloodDiagram} from '../kinds/bio-y11-m2b/BloodDiagram';
import {AlveolusDiagram} from '../kinds/bio-y11-m2b/AlveolusDiagram';
import {NephronDiagram} from '../kinds/bio-y11-m2b/NephronDiagram';
import {LoopDiagram} from '../kinds/bio-y11-m2b/LoopDiagram';
import {AxisDiagram} from '../kinds/bio-y11-m2b/AxisDiagram';
import {CurvesDiagram} from '../kinds/bio-y11-m2b/CurvesDiagram';
import {ZonesDiagram} from '../kinds/bio-y11-m2b/ZonesDiagram';

export const KINDS: DioramaKindMap = {
  bio11m2Compare: CompareDiagram,
  bio11m2Hub: HubDiagram,
  bio11m2Reach: ReachDiagram,
  bio11m2Breakdown: BreakdownDiagram,
  bio11m2Tract: TractDiagram,
  bio11m2Villi: VilliDiagram,
  bio11m2OrganTrack: OrganTrackDiagram,
  bio11m2Vessels: VesselsDiagram,
  bio11m2Blood: BloodDiagram,
  bio11m2Alveolus: AlveolusDiagram,
  bio11m2Nephron: NephronDiagram,
  bio11m2Loop: LoopDiagram,
  bio11m2Axis: AxisDiagram,
  bio11m2Curves: CurvesDiagram,
  bio11m2Zones: ZonesDiagram,
};
