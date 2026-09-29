// Diorama kinds owned by the "bio-y11-m1a" lane. ONLY that lane edits this file.
// One entry per line, exactly `  kindName: Component,` — scripts/validate-lesson.mjs
// reads kind names from these lines. Kind names are globally unique; prefix new
// ones with the lane's topic (e.g. bio11m1Mitosis) to avoid collisions.
// See docs/diorama-system.md.

import type {DioramaKindMap} from './types';
import {CellDiagram} from '../kinds/bio-y11-m1a/CellDiagram';
import {ScaleDiagram} from '../kinds/bio-y11-m1a/ScaleDiagram';
import {MembraneDiagram} from '../kinds/bio-y11-m1a/MembraneDiagram';
import {TonicityDiagram} from '../kinds/bio-y11-m1a/TonicityDiagram';
import {ChamberDiagram} from '../kinds/bio-y11-m1a/ChamberDiagram';
import {BulkDiagram} from '../kinds/bio-y11-m1a/BulkDiagram';
import {ScopeDiagram} from '../kinds/bio-y11-m1a/ScopeDiagram';
import {ExchangeDiagram} from '../kinds/bio-y11-m1a/ExchangeDiagram';
import {TableDiagram} from '../kinds/bio-y11-m1a/TableDiagram';

export const KINDS: DioramaKindMap = {
  bio11m1Cell: CellDiagram,
  bio11m1Scale: ScaleDiagram,
  bio11m1Membrane: MembraneDiagram,
  bio11m1Tonicity: TonicityDiagram,
  bio11m1Chamber: ChamberDiagram,
  bio11m1Bulk: BulkDiagram,
  bio11m1Scope: ScopeDiagram,
  bio11m1Exchange: ExchangeDiagram,
  bio11m1Table: TableDiagram,
};
