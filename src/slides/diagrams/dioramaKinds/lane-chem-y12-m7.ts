// Diorama kinds owned by the "chem-y12-m7" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. chem11m1AtomBuilder) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {MoleculePanelsDiagram} from '../kinds/chem-y12-m7/MoleculePanelsDiagram';
import {ReactionMorphDiagram} from '../kinds/chem-y12-m7/ReactionMorphDiagram';
import {Shapes3DDiagram} from '../kinds/chem-y12-m7/Shapes3DDiagram';
import {DisruptReplaceDiagram} from '../kinds/chem-y12-m7/DisruptReplaceDiagram';
import {HeatLossDiagram} from '../kinds/chem-y12-m7/HeatLossDiagram';
import {BalanceCombustionDiagram} from '../kinds/chem-y12-m7/BalanceCombustionDiagram';
import {FermentationDiagram} from '../kinds/chem-y12-m7/FermentationDiagram';

export const KINDS: DioramaKindMap = {
  chem12m7Molecules: MoleculePanelsDiagram,
  chem12m7Reaction: ReactionMorphDiagram,
  chem12m7Shapes3D: Shapes3DDiagram,
  chem12m7DisruptReplace: DisruptReplaceDiagram,
  chem12m7HeatLoss: HeatLossDiagram,
  chem12m7BalanceCombustion: BalanceCombustionDiagram,
  chem12m7Fermentation: FermentationDiagram,
};
