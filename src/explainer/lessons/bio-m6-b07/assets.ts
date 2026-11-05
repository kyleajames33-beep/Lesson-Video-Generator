/**
 * M6 B07 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New: m6-finch-seeds-v1.png (2000 x 2000; the soft-seed group sits at x 200 to 826, the hard Tribulus group at
 *   x 953 to 1799, a clean gap between), drawn as two halves split at x = SEED_SPLIT so the soft half fades alone.
 * - Reused: the two Daphne Major finches (slender and deep beak, both facing right), B3a's sperm and egg, the egg and
 *   sperm dish (B04), the B6a bacterium (B01) and the plasmid bacterium.
 * - Cells and chromosomes are CLEAN CODED DIAGRAMS (owner, 20 Oct): ink cell outlines, a 2n = 4 model, large rose and
 *   teal chromosomes, homologous loci at the same height. The busy painted b5x cell plates are never used under coded
 *   chromosomes. Swap point for the brief 88 painted division plates (cd-m1-*.png) once reviewed: see `InkCell` and
 *   `MeiosisStrip` in parts.tsx; nothing else depends on the cell drawing.
 * - Coded: island outline, beak-depth dot strips, source chips, allele beads, gamete rows, letters-only Punnett squares,
 *   genome bar, tickers, pool tray, bacterial lineage, deck of cards, decision board, cards and countdowns. No people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B01} from '../bio-m6-b01/assets';
import {PLATES as B04} from '../bio-m6-b04/assets';
import {PLATES as B05} from '../bio-m6-b05/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const SEED_SPLIT = 890;
export const PLATES = {
	slender: mk('m6-finch-slender-beak-v1.png', N2, [160, 224, 1838, 1774]),
	deep: mk('m6-finch-deep-beak-v1.png', N2, [180, 206, 1819, 1793]),
	seeds: mk('m6-finch-seeds-v1.png', N2, [200, 556, 1799, 1442]),
	sperm: B05.sperm,
	egg: B05.egg,
	dish: B04.dish,
	bact: B01.bact,
	plasmid: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1799, 1447]),
	// Quality pass (6 Nov), measured from the real files: B3a's cleavage stages for "every cell is copied from that first
	// one", B5a's painted chromosome pair (scene 6), the crossing-over plate as a scene 2 and decision-rule icon.
	cleave1: mk('b3a-cleavage-1-v1.png', [1800, 1800], [213, 212, 1587, 1582]),
	cleave2: mk('b3a-cleavage-2-v1.png', [1800, 1800], [213, 212, 1587, 1582]),
	cleave4: mk('b3a-cleavage-4-v1.png', [1800, 1800], [213, 212, 1587, 1582]),
	pair: mk('b5x-chromosome-pair-v1.png', N2, [283, 232, 1784, 1793]),
	coIcon: mk('cd-crossing-over-c-v1.png', N2, [100, 106, 1901, 1860]),
	metIcon: mk('cd-m1-metaphase-v1.png', N2, [98, 97, 1903, 1861]),
};
/** Brief 88 stage plates drawn by painted.tsx (scenes 3 and 4). */
const CD_FILES = ['homologous-pair-loci', 'm1-metaphase', 'm1-metaphase-empty', 'm1-anaphase', 'm1-telophase', 'four-cells', 'crossing-over-a', 'crossing-over-b', 'crossing-over-c'].map(n => `${B}cd-${n}-v1.png`);
export const ASSETS_B07: string[] = [...new Set([...Object.values(PLATES).map(p => p.src), ...CD_FILES])];
