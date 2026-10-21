// S03 plates (all existing): B10 snapdragons and cattle (worked question), the B5 chromosome pair (drill 2) and the
// M6 beaker (drill 1, twice). Alpha boxes in ./common.tsx (snapdragons, chromosome pair, beaker) and
// ../skills-shared/plates.ts (cattle).
import {COW} from '../skills-shared/plates';
import {BEAKER, CHROM, SNAP} from './common';

export const ASSETS: string[] = [SNAP.red, SNAP.white, SNAP.pink, COW.red, COW.white, COW.roan, CHROM, BEAKER].map(p => p.src);
