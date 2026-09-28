// Diorama kinds owned by the "chem-y12-m5" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {ExchangeDiagram} from '../kinds/chem-y12-m5/ExchangeDiagram';
import {NetIonicDiagram} from '../kinds/chem-y12-m5/NetIonicDiagram';
import {StaticDynamicDiagram} from '../kinds/chem-y12-m5/StaticDynamicDiagram';
import {BottleDiagram} from '../kinds/chem-y12-m5/BottleDiagram';
import {GibbsSpectrumDiagram} from '../kinds/chem-y12-m5/GibbsSpectrumDiagram';
import {EntropyPaysDiagram} from '../kinds/chem-y12-m5/EntropyPaysDiagram';
import {KeqBuilderDiagram} from '../kinds/chem-y12-m5/KeqBuilderDiagram';
import {KeqScaleDiagram} from '../kinds/chem-y12-m5/KeqScaleDiagram';
import {IceTableDiagram} from '../kinds/chem-y12-m5/IceTableDiagram';
import {SmallXDiagram} from '../kinds/chem-y12-m5/SmallXDiagram';
import {QuadraticRootsDiagram} from '../kinds/chem-y12-m5/QuadraticRootsDiagram';
import {KaKbDiagram} from '../kinds/chem-y12-m5/KaKbDiagram';
import {GibbsLnKDiagram} from '../kinds/chem-y12-m5/GibbsLnKDiagram';
import {KspDissolveDiagram} from '../kinds/chem-y12-m5/KspDissolveDiagram';
import {QGaugeDiagram} from '../kinds/chem-y12-m5/QGaugeDiagram';
import {MixDiluteDiagram} from '../kinds/chem-y12-m5/MixDiluteDiagram';
import {CommonIonDiagram} from '../kinds/chem-y12-m5/CommonIonDiagram';
import {DissolveEnergyDiagram} from '../kinds/chem-y12-m5/DissolveEnergyDiagram';
import {HotColdPacksDiagram} from '../kinds/chem-y12-m5/HotColdPacksDiagram';
import {LeachingDiagram} from '../kinds/chem-y12-m5/LeachingDiagram';
import {CatalystBothDiagram} from '../kinds/chem-y12-m5/CatalystBothDiagram';
import {PressureDiagram} from '../kinds/chem-y12-m5/PressureDiagram';
import {RateYieldDiagram} from '../kinds/chem-y12-m5/RateYieldDiagram';
import {HaberLoopDiagram} from '../kinds/chem-y12-m5/HaberLoopDiagram';
import {SignaturesDiagram} from '../kinds/chem-y12-m5/SignaturesDiagram';
import {HeatShiftDiagram} from '../kinds/chem-y12-m5/HeatShiftDiagram';
import {KeqTrendDiagram} from '../kinds/chem-y12-m5/KeqTrendDiagram';
import {ColourimetryDiagram} from '../kinds/chem-y12-m5/ColourimetryDiagram';

export const KINDS: DioramaKindMap = {
  chem12m5Exchange: ExchangeDiagram,
  chem12m5NetIonic: NetIonicDiagram,
  chem12m5StaticDynamic: StaticDynamicDiagram,
  chem12m5Bottle: BottleDiagram,
  chem12m5GibbsSpectrum: GibbsSpectrumDiagram,
  chem12m5EntropyPays: EntropyPaysDiagram,
  chem12m5KeqBuilder: KeqBuilderDiagram,
  chem12m5KeqScale: KeqScaleDiagram,
  chem12m5IceTable: IceTableDiagram,
  chem12m5SmallX: SmallXDiagram,
  chem12m5Quadratic: QuadraticRootsDiagram,
  chem12m5KaKb: KaKbDiagram,
  chem12m5LnK: GibbsLnKDiagram,
  chem12m5KspDissolve: KspDissolveDiagram,
  chem12m5QGauge: QGaugeDiagram,
  chem12m5MixDilute: MixDiluteDiagram,
  chem12m5CommonIon: CommonIonDiagram,
  chem12m5Dissolve: DissolveEnergyDiagram,
  chem12m5HotCold: HotColdPacksDiagram,
  chem12m5Leach: LeachingDiagram,
  chem12m5CatalystBoth: CatalystBothDiagram,
  chem12m5Pressure: PressureDiagram,
  chem12m5RateYield: RateYieldDiagram,
  chem12m5HaberLoop: HaberLoopDiagram,
  chem12m5Signatures: SignaturesDiagram,
  chem12m5HeatShift: HeatShiftDiagram,
  chem12m5KeqTrend: KeqTrendDiagram,
  chem12m5Colourimetry: ColourimetryDiagram,
};
