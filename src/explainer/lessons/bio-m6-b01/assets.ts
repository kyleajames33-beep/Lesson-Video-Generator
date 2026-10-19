/**
 * M6 B01 plates (B02 imports this file too). README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 19 Oct from the real files in public/assets/biology/.
 * - Brief 82 (delivered 18 Oct, provenance docs/production/claude-pm/assets/brief82-provenance.json): agar dish (top
 *   view, empty agar), velvet replica block (velvet face seen from slightly below), granite outcrop, mouldy peanuts,
 *   UV cabinet. Earlier plates: B6a bacterium (2044 x 900, flagellum to the right), red cells normal and sickle, the
 *   B8 flies, UV on skin, X-ray machine and film, shielded source, virus particle.
 * - Coded: slim DNA strands, allele rings, gene pool basins, lineage trees, colony dots, day strip, bars, frequency
 *   lines, chips, cards and the countdown. No people.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});

export const PLATES = {
	bact: mk('b6a-bacterium-v1.png', [2044, 900], [243, 192, 1880, 704]),
	sickle: mk('m6-red-cells-normal-sickle-v1.png', N2, [200, 597, 1800, 1403]),
	flyRed: mk('m5x-fly-red-eye-v1.png', N2, [445, 394, 1560, 1619]),
	flyWhite: mk('m5x-fly-white-eye-v1.png', N2, [443, 389, 1560, 1618]),
	uvSkin: mk('m6-uv-skin-v1.png', N2, [280, 200, 1720, 1800]),
	dish: mk('m6-agar-dish-top-v1.png', N2, [200, 215, 1799, 1784]),
	velvet: mk('m6-velvet-replica-block-v1.png', N2, [200, 340, 1799, 1659]),
	xray: mk('m6-xray-machine-film-v1.png', N2, [260, 200, 1741, 1800]),
	shield: mk('m6-shielded-source-v1.png', N2, [201, 382, 1800, 1618]),
	virus: mk('m6-virus-particle-v1.png', N2, [208, 201, 1791, 1800]),
	granite: mk('m6-granite-outcrop-v1.png', N2, [201, 473, 1799, 1526]),
	peanuts: mk('m6-mouldy-peanuts-v1.png', N2, [201, 503, 1800, 1497]),
	cabinet: mk('m6-uv-cabinet-v1.png', N2, [200, 488, 1800, 1512]),
};
const P = PLATES;
export const ASSETS_B01: string[] = [P.bact, P.sickle, P.flyRed, P.flyWhite, P.uvSkin, P.dish, P.velvet].map(p => p.src);
export const ASSETS_B02: string[] = [P.uvSkin, P.xray, P.shield, P.virus, P.sickle, P.granite, P.peanuts, P.cabinet].map(p => p.src);
