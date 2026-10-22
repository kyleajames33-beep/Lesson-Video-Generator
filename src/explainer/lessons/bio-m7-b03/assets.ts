/**
 * M7 B03 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/.
 * - New (brief 100): the Broad Street pump and its aligned no-handle twin (one shared box so the crossfade keeps the
 *   column, spout and paving in place), the door handle, raw chicken, the pork tapeworm scolex, the Anopheles mosquito
 *   feeding through a skin section, pork with cysts, the secateurs and the bed net.
 * - Reused: Anopheles and generic mosquitoes, tick, the COVID-19 virus (m7 plate, scene 6 and the spike thumbnail only),
 *   the influenza virus (m6 plate, purple spikes; never the m7 plate), the fimbriated rod (clipped to the rod, never
 *   stretched), hyphae, Plasmodium, the whole tapeworm, TB bacilli, TMV, the leaf pair, lungs, mask, sink and gloves.
 * - Coded: the street-map inset, the route chain board (host circles, stations, lanes), droplets, drifting particles,
 *   the receptor row, membrane and gut-wall edges, life-cycle arrows, break marks, chips, attempt cards, countdown.
 *   No people, no hands, no faces, no coughing figures. Hosts are abstract coded circles only.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P1} from '../bio-m7-b01/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const PUMP: Box = [561, 221, 1438, 1780];

export const PLATES = {
	pump: mk(B + 'm7-broad-street-pump-v1.png', PUMP),
	pumpNo: mk(B + 'm7-broad-street-pump-nohandle-v1.png', PUMP),
	handle: mk(B + 'm7-door-handle-v1.png', [368, 303, 1688, 1706]),
	chicken: mk(B + 'm7-raw-chicken-v1.png', [207, 407, 1792, 1665]),
	scolex: mk(B + 'm7-tapeworm-scolex-v1.png', [638, 234, 1369, 1779]),
	feeding: mk(B + 'm7-mosquito-feeding-skin-v1.png', [326, 318, 1723, 1684]),
	pork: mk(B + 'm7-pork-cysts-v1.png', [304, 467, 1702, 1532]),
	secateurs: mk(B + 'm7-pruning-secateurs-v1.png', [253, 441, 1746, 1570]),
	bednet: mk(B + 'm7-bed-net-v1.png', [326, 200, 1681, 1761]),
	anoph: mk(B + 'm5x-anopheles-mosquito-v1.png', [293, 344, 1749, 1631]),
	mosq: mk(B + 'm7-mosquito-vector-v1.png', [200, 522, 1800, 1478]),
	flu: mk(B + 'm6-virus-particle-v1.png', [208, 201, 1791, 1800]),
	rodCoccus: mk(B + 'm7-bacterium-rod-coccus-v1.png', [201, 544, 1800, 1456]),
	/** The same plate clipped to the rod and its threads (the coccus is outside this box). Draw with PlateB and an id. */
	rod: mk(B + 'm7-bacterium-rod-coccus-v1.png', [190, 690, 1265, 1470]),
	leafSick: mk(B + 'm7-infected-leaf-v1.png', [201, 609, 1800, 1389]),
	leafOk: mk(B + 'm7-healthy-leaf-v1.png', [201, 611, 1799, 1390]),
	lungs: mk(B + 'm8-lungs-healthy-v1.png', [201, 160, 1797, 1839]),
	mask: mk(B + 'm7-face-mask-v1.png', [200, 568, 1799, 1431]),
	sink: mk(B + 'm7-handwashing-sink-v1.png', [200, 345, 1799, 1655]),
	gloves: mk('assets/chemistry/m5x-gloves-v1.png', [218, 385, 1788, 1617]),
	covid: P1.virus,
	tick: P1.tick,
	hyphae: P1.hyphae,
	plasmo: P1.plasmo,
	tapeworm: P1.tapeworm,
	tb: P1.tb,
	tmv: P1.tmv,
};
/** Natural-pixel features (read off gridded zoom crops, 23 Oct). */
export const FEAT = {
	/** Pump spout outlet. */
	spout: [738, 1150] as [number, number],
	/** Pump handle pivot bracket (the no-handle plate keeps it). */
	pivot: [1150, 520] as [number, number],
	/** Scolex: hook crown and the four suckers. */
	crown: {c: [1000, 345] as [number, number], r: 170},
	suckers: [[760, 560], [1240, 560], [805, 820], [1195, 820]] as [number, number][],
	suckerR: 125,
	/** Feeding plate: head, the glands region in the front of the thorax, mouthparts entry at the skin, the tip in the
	 * dermis beside the capillary loop, and the capillary itself. */
	head: [850, 737] as [number, number],
	glands: [930, 690] as [number, number],
	skinIn: [819, 1012] as [number, number],
	tip: [801, 1245] as [number, number],
	capillary: [787, 1318] as [number, number],
	/** Pork cysts. */
	cysts: [[660, 860], [1120, 760], [1420, 880], [640, 1040], [1200, 1120], [1440, 1200], [1020, 1180], [840, 960]] as [number, number][],
	/** COVID-19 virus: the tip of the lowest spike. */
	spike: [1250, 1745] as [number, number],
	/** The rod: tips of three lower threads (entry grip points). */
	threads: [[450, 1400], [613, 1372], [777, 1318]] as [number, number][],
	rodC: [723, 1109] as [number, number],
	/** Lungs: trachea and main bronchi (the airway lining). */
	airway: [1000, 720] as [number, number],
	/** TMV coat outline centre and radius (b01). */
	tmvC: [1000, 1000] as [number, number],
	/** Secateur blades (sap stain). */
	blade: [420, 640] as [number, number],
};
export const ASSETS_M7B03: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
