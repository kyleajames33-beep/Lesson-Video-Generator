// Diorama kinds owned by the "chem-y12-m6" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {ProtonHopDiagram} from '../kinds/chem-y12-m6/ProtonHopDiagram';
import {ProtonLadderDiagram} from '../kinds/chem-y12-m6/ProtonLadderDiagram';
import {PhScaleDiagram} from '../kinds/chem-y12-m6/PhScaleDiagram';
import {RouteStepsDiagram} from '../kinds/chem-y12-m6/RouteStepsDiagram';
import {FivePercentDiagram} from '../kinds/chem-y12-m6/FivePercentDiagram';
import {BufferDiagram} from '../kinds/chem-y12-m6/BufferDiagram';
import {TitrationCurveDiagram} from '../kinds/chem-y12-m6/TitrationCurveDiagram';
import {ConductometricDiagram} from '../kinds/chem-y12-m6/ConductometricDiagram';
import {IndicatorDiagram} from '../kinds/chem-y12-m6/IndicatorDiagram';
import {HeatLedgerDiagram} from '../kinds/chem-y12-m6/HeatLedgerDiagram';
import {NetIonicDiagram} from '../kinds/chem-y12-m6/NetIonicDiagram';
import {FizzBeakersDiagram} from '../kinds/chem-y12-m6/FizzBeakersDiagram';
import {SorterDiagram} from '../kinds/chem-y12-m6/SorterDiagram';
import {IonCrowdDiagram} from '../kinds/chem-y12-m6/IonCrowdDiagram';
import {FixCardsDiagram} from '../kinds/chem-y12-m6/FixCardsDiagram';

export const KINDS: DioramaKindMap = {
  chem12m6ProtonHop: ProtonHopDiagram,
  chem12m6ProtonLadder: ProtonLadderDiagram,
  chem12m6PhScale: PhScaleDiagram,
  chem12m6RouteSteps: RouteStepsDiagram,
  chem12m6FivePercent: FivePercentDiagram,
  chem12m6Buffer: BufferDiagram,
  chem12m6TitrationCurve: TitrationCurveDiagram,
  chem12m6Conductometric: ConductometricDiagram,
  chem12m6Indicator: IndicatorDiagram,
  chem12m6HeatLedger: HeatLedgerDiagram,
  chem12m6NetIonic: NetIonicDiagram,
  chem12m6FizzBeakers: FizzBeakersDiagram,
  chem12m6Sorter: SorterDiagram,
  chem12m6IonCrowd: IonCrowdDiagram,
  chem12m6FixCards: FixCardsDiagram,
};
