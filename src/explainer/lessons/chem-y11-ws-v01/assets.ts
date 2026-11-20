// Y11 Chem WS V01 plates (see common.ts), plus V10's plates for the frozen opening frame (its handoff draws no plate,
// but the import keeps the list complete if that changes). Question boxes, the hypothesis card, check list, evidence
// cards, bins, number line, heating-run axes, particle inset, accounting bar, readouts, question cards, countdowns
// and key notes are coded.
import {PLATES} from './common';
import {ASSETS as V10_ASSETS} from '../chem-y11-m1-v10/assets';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...V10_ASSETS])];
