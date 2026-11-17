// B8-15 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 18 Nov from the files in public/assets/biology/,
// each inspected on a gridded paper sheet. The three ear states (plain, cochlear implant, bone conduction implant) share
// one union box, and so do the healthy and damaged hair cells, so every cross-fade stays in register. Feature points are
// natural pixels read off gridded crops.
// Coded: the sound pathway strip with breaks, ticks and bypass arcs, the uncoiled cochlea, sound waves, vibration rings,
// the area and pressure comparison, ion dots, signal pulses, the channel and cell dot rows, the timeline, the learning
// curve, the balance, chips, tags and the countdown. No people, heads, hands or faces.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});
export const EAR_BOX: [number, number, number, number] = [182, 160, 1817, 1839];
const HC: [number, number, number, number] = [248, 477, 1776, 1542];

export const PL = {
	ear: mk('m8-ear-cutaway-v1.png', EAR_BOX),
	earCI: mk('m8-ear-cutaway-implant-v1.png', EAR_BOX),
	earBC: mk('m8-ear-cutaway-bone-conduction-v1.png', EAR_BOX),
	aid: mk('m8-hearing-aid-v1.png', [160, 211, 1839, 1786]),
	ci: mk('m8-cochlear-implant-v1.png', [160, 257, 1839, 1742]),
	bc: mk('m8-bone-conduction-implant-v1.png', [220, 662, 1779, 1336]),
	oss: mk('m8-middle-ear-ossicles-v1.png', [221, 433, 1779, 1566]),
	hcOk: mk('m8-hair-cells-healthy-v1.png', HC),
	hcBad: mk('m8-hair-cells-damaged-v1.png', HC),
	eye: mk('m8-eye-cutaway-v1.png', [177, 160, 1821, 1839]),
};
/** Ear section feature points (natural pixels, shared by the three ear states). */
export const EP = {
	pinna: [330, 700] as [number, number], canalIn: [560, 1000] as [number, number], canal: [800, 1010] as [number, number],
	drum: [1040, 1020] as [number, number], malleus: [1060, 810] as [number, number], incus: [1150, 850] as [number, number],
	stapes: [1250, 985] as [number, number], window: [1300, 995] as [number, number], cochlea: [1530, 1120] as [number, number],
	middle: [1180, 920] as [number, number], nerve: [1720, 880] as [number, number], ciRecv: [840, 530] as [number, number],
	ciArray: [1560, 1190] as [number, number], bcFix: [790, 430] as [number, number], bcProc: [880, 390] as [number, number],
};
/** Device plates: callout points. */
export const AP = {mic: [520, 420] as [number, number], body: [640, 1050] as [number, number], tip: [1660, 1520] as [number, number]};
export const CP = {proc: [520, 1000] as [number, number], coil: [1400, 540] as [number, number], recv: [1330, 1290] as [number, number], lead: [1690, 1420] as [number, number]};
export const BP = {screw: [330, 1000] as [number, number], abut: [880, 1000] as [number, number], proc: [1450, 1000] as [number, number]};
/** Ossicle close-up: ring centres and radii for the three bones, the eardrum and the oval window. */
export const OP = {
	drum: [420, 1000] as [number, number], window: [1560, 1010] as [number, number],
	malleus: {c: [760, 650] as [number, number], rx: 120, ry: 260}, incus: {c: [1040, 620] as [number, number], rx: 210, ry: 190}, stapes: {c: [1430, 980] as [number, number], rx: 150, ry: 120},
};
/** Hair cells: the first inner hair cell's bundle tip and its nerve fibre; the bundle row. */
export const HP = {tip: [500, 840] as [number, number], cell: [500, 1130] as [number, number], fibreA: [470, 1230] as [number, number], fibreB: [500, 1470] as [number, number], membrane: [960, 560] as [number, number]};
export const ASSETS_M8B15: string[] = Object.values(PL).map(p => p.src);
