/**
 * M7 B05 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/.
 * - New (brief 100): the Phytophthora sporangium and zoospores, the root tip with settled spores, the aligned root
 *   cell pair (entry, defended; one shared box so masked reveals stay in place), the aligned seedling triplet
 *   (healthy, contained, collapsed; one shared box), scarlet and old man banksia branches, the boot-cleaning station.
 * - The banksia pair: `m7-banksia-healthy-v1` and `m7-banksia-phytophthora-v2` do NOT align (alpha IoU 0.811, edge
 *   fringes; Codex brief 102 is retaking them). Until the retake passes QA the hook shows them SIDE BY SIDE, never as
 *   an in-place crossfade. SWITCH POINT: when `m7-banksia-healthy-v2` and `m7-banksia-phytophthora-v3` arrive, change
 *   the two src names below, give both plates the shared `BANKSIA_PAIR_BOX`, measure it, and set
 *   `BANKSIA_ALIGNED = true`. The hook (s1.tsx `BanksiaPair`) then crossfades a second healthy copy into the
 *   diseased plate in place, as the design's target describes. Nothing else needs to change.
 * - Reused: the myrtle rust leaf (b04 callback thumbnail).
 * - Coded: the soil band and specks, swimming paths, the defence ladder, the signal pulse, the race strip day line and
 *   brackets, the water arrow, the track line, chips, attempt cards, countdown. No people, hands, walkers or rangers.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const CELLS: Box = [200, 474, 1800, 1525];
const SEED: Box = [556, 200, 1443, 1800];

/** Set true (with the retaken, aligned pair) to restore the in-place crossfade in the hook. */
export const BANKSIA_ALIGNED = false;
/** Shared box for the aligned retake (measure the retaken pair and set it here). */
export const BANKSIA_PAIR_BOX: Box = [362, 200, 1624, 1800];

export const PLATES = {
	banksiaOk: mk(B + 'm7-banksia-healthy-v1.png', BANKSIA_ALIGNED ? BANKSIA_PAIR_BOX : [377, 201, 1624, 1800]),
	banksiaSick: mk(B + 'm7-banksia-phytophthora-v2.png', BANKSIA_ALIGNED ? BANKSIA_PAIR_BOX : [362, 200, 1606, 1800]),
	zoospores: mk(B + 'm7-phytophthora-zoospores-v1.png', [200, 389, 1800, 1610]),
	rootTip: mk(B + 'm7-root-tip-zoospores-v1.png', [322, 200, 1677, 1799]),
	cellsEntry: mk(B + 'm7-root-cells-entry-v1.png', CELLS),
	cellsDef: mk(B + 'm7-root-cells-defended-v1.png', CELLS),
	/** The defended plate cropped to the dead ring and the stopped hypha (memory and feedback thumbnails). */
	deadRing: mk(B + 'm7-root-cells-defended-v1.png', [840, 520, 1320, 1020]),
	seedOk: mk(B + 'm7-banksia-seedling-healthy-v1.png', SEED),
	seedHeld: mk(B + 'm7-banksia-seedling-contained-v1.png', SEED),
	seedDead: mk(B + 'm7-banksia-seedling-collapsed-v1.png', SEED),
	coccinea: mk(B + 'm7-banksia-coccinea-v1.png', [201, 227, 1800, 1773]),
	serrata: mk(B + 'm7-banksia-serrata-v1.png', [200, 215, 1800, 1785]),
	station: mk(B + 'm7-boot-cleaning-station-v1.png', [200, 211, 1799, 1788]),
	myrtle: mk(B + 'm7-myrtle-rust-leaf-v1.png', [201, 489, 1799, 1511]),
};
/** Natural-pixel features (read off gridded zoom crops, 23 Oct). */
export const FEAT = {
	/** Root tip plate: the settled spore cluster, three germ-tube ends, and the young zone behind the tip. */
	spores: [900, 990] as [number, number],
	tubes: [[1073, 873], [1027, 1067], [947, 1213]] as [number, number][],
	young: [760, 1240] as [number, number],
	/** Root cell plates: the junction where the hypha presses in (entry), the callose plug, the dead ring, cells. */
	entry: [1063, 830] as [number, number],
	plug: [1070, 785] as [number, number],
	ring: [1075, 860] as [number, number],
	/** Golden (lignified, phenolic) cells either side of the dead ring. */
	golden: [[850, 840], [1258, 840]] as [number, number][],
	/** Cell outlines (natural) traced in scene 3. */
	cells: [[790, 705, 1040, 960], [1060, 705, 1300, 960], [1320, 705, 1510, 960], [800, 985, 1080, 1215]] as [number, number, number, number][],
	/** Healthy banksia: woody stem base, root crown, and the signal path root to stem to leaves. */
	bark: [1000, 1330] as [number, number],
	signal: [[1000, 1700], [1000, 1420], [1000, 1150], [1000, 900], [990, 700]] as [number, number][],
	leaves: [[640, 820], [1380, 820], [880, 560]] as [number, number][],
	/** Dying banksia: root rot and the yellowed leaves. */
	sickRoots: [1000, 1560] as [number, number],
	sickLeaves: [[520, 880], [1520, 950]] as [number, number][],
	stem: [1000, 1250] as [number, number],
	/** Seedling: the root tip (bottom) for the day 1 masked reveal. */
	seedTipY: 1480,
};
export const ASSETS_M7B05: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
