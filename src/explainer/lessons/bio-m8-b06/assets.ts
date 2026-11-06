// M8 B06 plates (see common.ts). The host outlines, pathogen arrow, group tab, cause chain, chloride and water dots,
// dust particles, O₂ dots, live bars, dividing ring, Punnett square (letters only), LDL dots, chips, cards, countdown and
// key notes are coded. No people, hands or faces.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
