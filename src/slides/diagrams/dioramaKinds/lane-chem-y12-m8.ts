// Diorama kinds owned by the "chem-y12-m8" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {StepsDiagram} from '../kinds/chem-y12-m8/StepsDiagram';
import {CardsDiagram} from '../kinds/chem-y12-m8/CardsDiagram';
import {CurveDiagram} from '../kinds/chem-y12-m8/CurveDiagram';
import {TubeTestsDiagram} from '../kinds/chem-y12-m8/TubeTestsDiagram';
import {FlameTestsDiagram} from '../kinds/chem-y12-m8/FlameTestsDiagram';
import {NetIonicDiagram} from '../kinds/chem-y12-m8/NetIonicDiagram';
import {SpectroDiagram} from '../kinds/chem-y12-m8/SpectroDiagram';
import {SeparationDiagram} from '../kinds/chem-y12-m8/SeparationDiagram';
import {WaterBodyDiagram} from '../kinds/chem-y12-m8/WaterBodyDiagram';
import {BodDiagram} from '../kinds/chem-y12-m8/BodDiagram';
import {FoodChainDiagram} from '../kinds/chem-y12-m8/FoodChainDiagram';
import {TreatmentDiagram} from '../kinds/chem-y12-m8/TreatmentDiagram';
import {StandardDiagram} from '../kinds/chem-y12-m8/StandardDiagram';
import {SkeletalDiagram} from '../kinds/chem-y12-m8/SkeletalDiagram';
import {ChiralityDiagram} from '../kinds/chem-y12-m8/ChiralityDiagram';
import {PolymerDiagram} from '../kinds/chem-y12-m8/PolymerDiagram';
import {IonisationDiagram} from '../kinds/chem-y12-m8/IonisationDiagram';
import {DeliveryDiagram} from '../kinds/chem-y12-m8/DeliveryDiagram';
import {GreenDiagram} from '../kinds/chem-y12-m8/GreenDiagram';

export const KINDS: DioramaKindMap = {
  chem12m8Steps: StepsDiagram,
  chem12m8Cards: CardsDiagram,
  chem12m8Curve: CurveDiagram,
  chem12m8TubeTests: TubeTestsDiagram,
  chem12m8FlameTests: FlameTestsDiagram,
  chem12m8NetIonic: NetIonicDiagram,
  chem12m8Spectro: SpectroDiagram,
  chem12m8Separation: SeparationDiagram,
  chem12m8WaterBody: WaterBodyDiagram,
  chem12m8Bod: BodDiagram,
  chem12m8FoodChain: FoodChainDiagram,
  chem12m8Treatment: TreatmentDiagram,
  chem12m8Standard: StandardDiagram,
  chem12m8Skeletal: SkeletalDiagram,
  chem12m8Chirality: ChiralityDiagram,
  chem12m8Polymer: PolymerDiagram,
  chem12m8Ionisation: IonisationDiagram,
  chem12m8Delivery: DeliveryDiagram,
  chem12m8Green: GreenDiagram,
};
