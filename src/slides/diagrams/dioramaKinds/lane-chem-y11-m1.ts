// Diorama kinds owned by the "chem-y11-m1" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {DecisionTreeDiagram} from '../kinds/chem-y11-m1/DecisionTreeDiagram';
import {ChargeCarriersDiagram} from '../kinds/chem-y11-m1/ChargeCarriersDiagram';
import {NetworkSolidsDiagram} from '../kinds/chem-y11-m1/NetworkSolidsDiagram';
import {NewSubstanceDiagram} from '../kinds/chem-y11-m1/NewSubstanceDiagram';
import {TrendSkylineDiagram} from '../kinds/chem-y11-m1/TrendSkylineDiagram';
import {TrendCompassDiagram} from '../kinds/chem-y11-m1/TrendCompassDiagram';
import {ShellCauseDiagram} from '../kinds/chem-y11-m1/ShellCauseDiagram';
import {WeightedAverageDiagram} from '../kinds/chem-y11-m1/WeightedAverageDiagram';
import {RouteChainDiagram} from '../kinds/chem-y11-m1/RouteChainDiagram';
import {PolymerChainsDiagram} from '../kinds/chem-y11-m1/PolymerChainsDiagram';
import {OrbitalBoxesDiagram} from '../kinds/chem-y11-m1/OrbitalBoxesDiagram';
import {ModelTimelineDiagram} from '../kinds/chem-y11-m1/ModelTimelineDiagram';

export const KINDS: DioramaKindMap = {
  chem11m1DecisionTree: DecisionTreeDiagram,
  chem11m1ChargeCarriers: ChargeCarriersDiagram,
  chem11m1NetworkSolids: NetworkSolidsDiagram,
  chem11m1NewSubstance: NewSubstanceDiagram,
  chem11m1TrendSkyline: TrendSkylineDiagram,
  chem11m1TrendCompass: TrendCompassDiagram,
  chem11m1ShellCause: ShellCauseDiagram,
  chem11m1WeightedAverage: WeightedAverageDiagram,
  chem11m1RouteChain: RouteChainDiagram,
  chem11m1PolymerChains: PolymerChainsDiagram,
  chem11m1OrbitalBoxes: OrbitalBoxesDiagram,
  chem11m1ModelTimeline: ModelTimelineDiagram,
};
