// Diorama kinds owned by the "chem-y12-m7b" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {MolCompareDiagram} from '../kinds/chem-y12-m7b/MolCompareDiagram';
import {BpLadderDiagram} from '../kinds/chem-y12-m7b/BpLadderDiagram';
import {ReactionRowsDiagram} from '../kinds/chem-y12-m7b/ReactionRowsDiagram';
import {AcidDimerDiagram} from '../kinds/chem-y12-m7b/AcidDimerDiagram';
import {PkaLadderDiagram} from '../kinds/chem-y12-m7b/PkaLadderDiagram';
import {PartialIoniseDiagram} from '../kinds/chem-y12-m7b/PartialIoniseDiagram';
import {EsterLeversDiagram} from '../kinds/chem-y12-m7b/EsterLeversDiagram';
import {AmideLonePairDiagram} from '../kinds/chem-y12-m7b/AmideLonePairDiagram';
import {SoapDiagram} from '../kinds/chem-y12-m7b/SoapDiagram';
import {ReactionMapDiagram} from '../kinds/chem-y12-m7b/ReactionMapDiagram';
import {PetRepeatDiagram} from '../kinds/chem-y12-m7b/PetRepeatDiagram';
import {PolymerFateDiagram} from '../kinds/chem-y12-m7b/PolymerFateDiagram';
import {PolymerPropsDiagram} from '../kinds/chem-y12-m7b/PolymerPropsDiagram';

export const KINDS: DioramaKindMap = {
  chem12m7MolCompare: MolCompareDiagram,
  chem12m7BpLadder: BpLadderDiagram,
  chem12m7ReactionRows: ReactionRowsDiagram,
  chem12m7AcidDimer: AcidDimerDiagram,
  chem12m7PkaLadder: PkaLadderDiagram,
  chem12m7PartialIonise: PartialIoniseDiagram,
  chem12m7EsterLevers: EsterLeversDiagram,
  chem12m7AmideLonePair: AmideLonePairDiagram,
  chem12m7Soap: SoapDiagram,
  chem12m7ReactionMap: ReactionMapDiagram,
  chem12m7PetRepeat: PetRepeatDiagram,
  chem12m7PolymerFate: PolymerFateDiagram,
  chem12m7PolymerProps: PolymerPropsDiagram,
};
