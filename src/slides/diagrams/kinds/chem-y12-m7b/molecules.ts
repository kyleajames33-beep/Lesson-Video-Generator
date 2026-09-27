// Structural-formula presets for the chem-y12-m7b kinds, drawn by `Mol`.
//
// Coordinates are in bond lengths, y down. Chains zig-zag at 120°
// (0.866 = cos 30°). Condensed groups (CH₃, CH₂, CH) are one labelled carbon
// ball; every other atom is explicit, so the atom that matters (the H on a
// carbonyl carbon, the O–H of an acid, the lone pair on N) is always a ball
// you can point at. Bond order 1.5 = delocalised (one solid + one dashed stick).
//
// Atom indices are part of the contract: kinds refer to them (e.g. "the
// carbonyl H of propanal is atom 4"), so append new atoms, never reorder.

export type MolAtom = {el: string; x: number; y: number; label?: string};
export type MolSpec = {
	atoms: MolAtom[];
	bonds: [number, number, number?][];
	charges?: {atom: number; text: string}[];
	/** Named atoms kinds may look up. */
	marks?: Record<string, number>;
};

const S = 0.866;
const HB = 0.78; // X–H sticks are drawn a little shorter

// Benzene ring (pointy-top hexagon, radius 1) with the substituent on vertex 0 (top).
const ring = (ox: number, oy: number) =>
	Array.from({length: 6}, (_, k) => {
		const a = ((-90 + 60 * k) * Math.PI) / 180;
		return {x: ox + Math.cos(a), y: oy + Math.sin(a)};
	});
const ringH = (ox: number, oy: number, k: number) => {
	const a = ((-90 + 60 * k) * Math.PI) / 180;
	return {x: ox + Math.cos(a) * (1 + HB), y: oy + Math.sin(a) * (1 + HB)};
};

const phenylAtoms = (ox: number, oy: number, subEl: string, subLabel?: string): MolAtom[] => {
	const r = ring(ox, oy);
	return [
		...r.map((p) => ({el: 'C', x: p.x, y: p.y})), // 0..5
		{el: subEl, x: ox, y: oy - 2, label: subLabel}, // 6: substituent on vertex 0
		...[1, 2, 3, 4, 5].map((k) => ({el: 'H', ...ringH(ox, oy, k)})), // 7..11
	];
};
const phenylBonds: [number, number, number?][] = [
	[0, 1, 2], [1, 2], [2, 3, 2], [3, 4], [4, 5, 2], [5, 0],
	[0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
];

export const MOLECULES: Record<string, MolSpec> = {
	// ── Carbonyls (L13) ──────────────────────────────────────────────────────
	/** CH₃CH₂CHO. Carbonyl C = 2, O = 3, the carbonyl H = 4. */
	propanal: {
		atoms: [
			{el: 'C', x: 0, y: 0, label: 'CH₃'},
			{el: 'C', x: S, y: 0.5, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0},
			{el: 'O', x: 2 * S, y: -1},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3, 2], [2, 4]],
		marks: {carbonylC: 2, carbonylO: 3, carbonylH: 4},
	},
	/** CH₃COCH₃. Carbonyl C = 1, O = 2. */
	propanone: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'C', x: 2 * S, y: 0.5, label: 'CH₃'},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3]],
		marks: {carbonylC: 1, carbonylO: 2},
	},
	/** CH₃CH₂COOH, laid out like propanal so the carbonyl H becomes the O–H. */
	propanoicAcid: {
		atoms: [
			{el: 'C', x: 0, y: 0, label: 'CH₃'},
			{el: 'C', x: S, y: 0.5, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0},
			{el: 'O', x: 2 * S, y: -1},
			{el: 'O', x: 3 * S, y: 0.5},
			{el: 'H', x: 3 * S + S * HB, y: 0.5 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3, 2], [2, 4], [4, 5]],
		marks: {carbonylC: 2, carbonylO: 3, hydroxylO: 4, acidH: 5},
	},

	// ── Acids and their conjugate bases (L14, L18) ───────────────────────────
	/** CH₃COOH. C=O oxygen = 2, O–H oxygen = 3, acidic H = 4. */
	ethanoicAcid: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'O', x: 2 * S, y: 0.5},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4]],
		marks: {carbonylO: 2, hydroxylO: 3, acidH: 4},
	},
	/** CH₃COO⁻: both C–O bonds delocalised, ½− on each oxygen. */
	ethanoate: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'O', x: 2 * S, y: 0.5},
		],
		bonds: [[0, 1], [1, 2, 1.5], [1, 3, 1.5]],
		charges: [{atom: 2, text: '½−'}, {atom: 3, text: '½−'}],
		marks: {o1: 2, o2: 3},
	},
	/** C₆H₅OH. Ring C 0..5 (0 carries the O), O = 6, ring H 7..11, O–H = 12. */
	phenol: {
		atoms: [...phenylAtoms(0, 0, 'O'), {el: 'H', x: S * HB, y: -2 - 0.5 * HB}],
		bonds: [...phenylBonds, [6, 12]],
		marks: {o: 6, acidH: 12},
	},
	/** C₆H₅O⁻. The charge delocalises onto the ortho (1, 5) and para (3) carbons. */
	phenoxide: {
		atoms: phenylAtoms(0, 0, 'O'),
		bonds: phenylBonds,
		charges: [{atom: 6, text: '−'}],
		marks: {o: 6, ortho1: 1, para: 3, ortho2: 5},
	},
	/** CH₃CH₂OH. O = 2, H = 3. */
	ethanol: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'O', x: 2 * S, y: 0.5},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3]],
		marks: {o: 2, acidH: 3},
	},
	/** CH₃CH₂O⁻: all the charge on one oxygen. */
	ethoxide: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'O', x: 2 * S, y: 0.5},
		],
		bonds: [[0, 1], [1, 2]],
		charges: [{atom: 2, text: '−'}],
		marks: {o: 2},
	},
	/** ClCH₂COOH. Cl = 0. */
	chloroethanoicAcid: {
		atoms: [
			{el: 'Cl', x: -S, y: 0},
			{el: 'C', x: 0, y: 0.5, label: 'CH₂'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'O', x: 2 * S, y: 0.5},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3, 2], [2, 4], [4, 5]],
		marks: {cl: 0, carbonylO: 3, hydroxylO: 4, acidH: 5},
	},

	// ── Esters (L15) ─────────────────────────────────────────────────────────
	/** CH₃COOCH₂CH₃. Acid half 0–3 (incl. the single-bond O = 3); alcohol half 4–5. Cut = bond 3 (O–CH₂). */
	ethylEthanoate: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'O', x: 2 * S, y: 0.5},
			{el: 'C', x: 3 * S, y: 0, label: 'CH₂'},
			{el: 'C', x: 4 * S, y: 0.5, label: 'CH₃'},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4], [4, 5]],
		marks: {carbonylO: 2, singleO: 3, cutBond: 3},
	},
	/** H₂O. */
	water: {
		atoms: [
			{el: 'O', x: 0, y: 0},
			{el: 'H', x: -S * HB, y: 0.55 * HB},
			{el: 'H', x: S * HB, y: 0.55 * HB},
		],
		bonds: [[0, 1], [0, 2]],
	},

	// ── Amines and amides (L16). N is drawn with its lone pair pointing up. ──
	/** CH₃CH₂NH₂ (1°). N = 2. */
	ethylamine: {
		atoms: [
			{el: 'C', x: -1 - S, y: 0.5, label: 'CH₃'},
			{el: 'C', x: -1, y: 0, label: 'CH₂'},
			{el: 'N', x: 0, y: 0},
			{el: 'H', x: HB, y: 0},
			{el: 'H', x: 0, y: HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3], [2, 4]],
		marks: {n: 2},
	},
	/** (CH₃)₂NH (2°), N-methylmethanamine. N = 1. */
	dimethylamine: {
		atoms: [
			{el: 'C', x: -1, y: 0, label: 'CH₃'},
			{el: 'N', x: 0, y: 0},
			{el: 'C', x: 1, y: 0, label: 'CH₃'},
			{el: 'H', x: 0, y: HB},
		],
		bonds: [[0, 1], [1, 2], [1, 3]],
		marks: {n: 1},
	},
	/** (CH₃)₃N (3°), N,N-dimethylmethanamine. N = 1. */
	trimethylamine: {
		atoms: [
			{el: 'C', x: -1, y: 0, label: 'CH₃'},
			{el: 'N', x: 0, y: 0},
			{el: 'C', x: 1, y: 0, label: 'CH₃'},
			{el: 'C', x: 0, y: 1, label: 'CH₃'},
		],
		bonds: [[0, 1], [1, 2], [1, 3]],
		marks: {n: 1},
	},
	/** CH₃CH(NH₂)CH₃ (1°: one carbon group on N, even though it sits on C2). N = 0. */
	propan2amine: {
		atoms: [
			{el: 'N', x: 0, y: 0},
			{el: 'H', x: -HB, y: 0},
			{el: 'H', x: HB, y: 0},
			{el: 'C', x: 0, y: 1, label: 'CH'},
			{el: 'C', x: -S, y: 1.5, label: 'CH₃'},
			{el: 'C', x: S, y: 1.5, label: 'CH₃'},
		],
		bonds: [[0, 1], [0, 2], [0, 3], [3, 4], [3, 5]],
		marks: {n: 0},
	},
	/** CH₃CONH₂. C = 1, O = 2, N = 3. */
	ethanamide: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'N', x: 2 * S, y: 0.5},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 - 0.5 * HB},
			{el: 'H', x: 2 * S, y: 0.5 + HB},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4], [3, 5]],
		marks: {c: 1, o: 2, n: 3},
	},
	/** CH₃CH₂NH₃⁺ (ethylammonium), laid out like ethylamine; new H on top = 5. */
	ethylammonium: {
		atoms: [
			{el: 'C', x: -1 - S, y: 0.5, label: 'CH₃'},
			{el: 'C', x: -1, y: 0, label: 'CH₂'},
			{el: 'N', x: 0, y: 0},
			{el: 'H', x: HB, y: 0},
			{el: 'H', x: 0, y: HB},
			{el: 'H', x: 0, y: -HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3], [2, 4], [2, 5]],
		charges: [{atom: 2, text: '+'}],
		marks: {n: 2},
	},

	// ── Similar-sized molecules for boiling-point ladders (all M ≈ 58–60) ──
	/** CH₃CH₂CH₂CH₃. */
	butane: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0.5, label: 'CH₂'},
			{el: 'C', x: 3 * S, y: 0, label: 'CH₃'},
		],
		bonds: [[0, 1], [1, 2], [2, 3]],
	},
	/** CH₃CH₂CH₂OH. O = 3, H = 4. */
	propan1ol: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0.5, label: 'CH₂'},
			{el: 'O', x: 3 * S, y: 0},
			{el: 'H', x: 3 * S + S * HB, y: 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3], [3, 4]],
		marks: {o: 3, h: 4},
	},
	/** HCOOCH₃ (methyl methanoate). */
	methylMethanoate: {
		atoms: [
			{el: 'H', x: -S * HB, y: 0.5 * HB},
			{el: 'C', x: 0, y: 0},
			{el: 'O', x: 0, y: -1},
			{el: 'O', x: S, y: 0.5},
			{el: 'C', x: 2 * S, y: 0, label: 'CH₃'},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4]],
	},
	/** CH₃CH₂CH₂NH₂ (propan-1-amine). N = 3. */
	propan1amine: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0.5, label: 'CH₂'},
			{el: 'N', x: 3 * S, y: 0},
			{el: 'H', x: 3 * S + S * HB, y: 0.5 * HB},
			{el: 'H', x: 3 * S, y: -HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]],
		marks: {n: 3},
	},

	// ── Oxidation / pathway series, drawn with the functional group on top ──
	/** CH₃CH₂CH₂OH laid out like propanal (O up on C3). O = 3, H = 4. */
	propan1olUp: {
		atoms: [
			{el: 'C', x: 0, y: 0, label: 'CH₃'},
			{el: 'C', x: S, y: 0.5, label: 'CH₂'},
			{el: 'C', x: 2 * S, y: 0, label: 'CH₂'},
			{el: 'O', x: 2 * S, y: -1},
			{el: 'H', x: 2 * S + S * HB, y: -1 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [2, 3], [3, 4]],
		marks: {o: 3},
	},
	/** CH₃CH(OH)CH₃ laid out like propanone. C2 = 1 (carries one H), O = 2. */
	propan2ol: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH'},
			{el: 'O', x: S, y: -1},
			{el: 'C', x: 2 * S, y: 0.5, label: 'CH₃'},
			{el: 'H', x: S + S * HB, y: -1 - 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2], [1, 3], [2, 4]],
		marks: {o: 2},
	},
	/** CH₂=CH₂. */
	ethene: {
		atoms: [
			{el: 'C', x: 0, y: 0, label: 'CH₂'},
			{el: 'C', x: 1, y: 0, label: 'CH₂'},
		],
		bonds: [[0, 1, 2]],
	},
	/** CH₃CH₂Cl. */
	chloroethane: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0, label: 'CH₂'},
			{el: 'Cl', x: 2 * S, y: 0.5},
		],
		bonds: [[0, 1], [1, 2]],
	},
	/** CH₃CHO. Carbonyl H = 3. */
	ethanal: {
		atoms: [
			{el: 'C', x: 0, y: 0.5, label: 'CH₃'},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'H', x: S + S * HB, y: 0.5 * HB},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3]],
		marks: {carbonylH: 3},
	},

	/** CH₃COOH with the carboxyl pointing right (for the H-bonded dimer). C=O oxygen = 2 (upper right), O–H oxygen = 3 (lower right), H = 4. */
	ethanoicAcidR: {
		atoms: [
			{el: 'C', x: 0, y: 0, label: 'CH₃'},
			{el: 'C', x: 1, y: 0},
			{el: 'O', x: 1.5, y: -S},
			{el: 'O', x: 1.5, y: S},
			{el: 'H', x: 1.5 + HB, y: S},
		],
		bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4]],
		marks: {carbonylO: 2, hydroxylO: 3, acidH: 4},
	},

	/** Cl₃CCOOH. Cl = 0, 1, 2. */
	trichloroethanoicAcid: {
		atoms: [
			{el: 'Cl', x: -S, y: 0},
			{el: 'Cl', x: -S, y: 1},
			{el: 'Cl', x: 0, y: 1.5},
			{el: 'C', x: 0, y: 0.5},
			{el: 'C', x: S, y: 0},
			{el: 'O', x: S, y: -1},
			{el: 'O', x: 2 * S, y: 0.5},
			{el: 'H', x: 2 * S + S * HB, y: 0.5 - 0.5 * HB},
		],
		bonds: [[0, 3], [1, 3], [2, 3], [3, 4], [4, 5, 2], [4, 6], [6, 7]],
		marks: {carbonylO: 5, hydroxylO: 6, acidH: 7},
	},
};
