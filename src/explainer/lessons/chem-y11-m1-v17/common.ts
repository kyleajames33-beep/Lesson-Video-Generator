// Y11 Chem M1 V17 (radiation from unstable isotopes) shared pieces: measured lesson lookups, response holds, plates
// and the one data table every on-screen radiation property, nuclear change, isotope row, penetration run and
// ionisation trail is drawn from.
// Sources (design author notes a, c and "Numbers used"):
// - alpha, beta and gamma composition, charge and relative mass: the site lesson's table (beta mass 1/1836 is the
//   electron to proton mass ratio);
// - decay modes and origins: NNDC NuDat 3 / IAEA Live Chart of Nuclides (U-238 alpha; C-14 beta; K-40 beta with
//   some gamma; Am-241 alpha; Co-60 beta then gamma, from Co-59 + neutron; Tc-99m gamma, half-life about 6 hours,
//   from Mo-99 made at the OPAL reactor, Lucas Heights);
// - penetration: alpha stopped by paper, beta by a few mm of aluminium, gamma reduced (never zero) by several cm of
//   lead. The chance-engine weights are illustrative only (every run is labelled "model: not measured count rates").
// Plate alpha boxes measured from the alpha channel (bounding box of alpha > 8).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v17/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
const PH = 'assets/physics/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V17 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const ALARM = mkp(C + 'y11c-smoke-alarm-v1.png', [1254, 1254], [184, 250, 1057, 1003]);
export const TREE = mkp(C + 'g1-tree-v1.png', [1800, 2200], [231, 264, 1568, 1935]);
export const ORE = mkp(C + 'y11c-uranium-ore-v1.png', [1422, 1106], [204, 150, 1216, 990]);
export const POT = mkp(PH + 'phys-y11-gamma-source-v1.png', [1312, 1199], [166, 181, 1147, 1029]);
export const VIAL = mkp(C + 'y11c-lead-shielded-vial-v1.png', [1173, 1341], [215, 330, 992, 1055]);
export const PAPER_P = mkp(PH + 'y12p-absorber-paper-v1.png', [1312, 1199], [332, 114, 952, 1118]);
export const AL_P = mkp(PH + 'y12p-absorber-aluminium-v1.png', [1312, 1199], [328, 106, 951, 1120]);
export const LEAD_P = mkp(PH + 'y12p-lead-bricks-v1.png', [2172, 724], [184, 83, 1984, 656]);
export const PLATES: PDef[] = [ALARM, TREE, ORE, POT, VIAL, PAPER_P, AL_P, LEAD_P];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the data table ----------
export type RKey = 'alpha' | 'beta' | 'gamma';
export type Rad = {
	key: RKey; name: string; sym: string; what: string; charge: string; mass: string;
	/** change in the nucleus: protons and neutrons */ dP: number; dN: number;
	/** fill (marks, particles) and ink (text) */ fill: string; ink: string;
};
export const RAD: Record<RKey, Rad> = {
	alpha: {key: 'alpha', name: 'alpha', sym: 'α', what: '2 protons + 2 neutrons', charge: '+2', mass: '4', dP: -2, dN: -2, fill: '#e07b12', ink: '#a35400'},
	beta: {key: 'beta', name: 'beta', sym: 'β', what: 'a fast electron', charge: '−1', mass: 'about 1/1836', dP: 1, dN: -1, fill: '#2f6fd0', ink: '#1f4f9e'},
	gamma: {key: 'gamma', name: 'gamma', sym: 'γ', what: 'a high-energy photon', charge: '0', mass: '0', dP: 0, dN: 0, fill: '#7a4fd0', ink: '#5b2aa8'},
};
export const RADS: Rad[] = [RAD.alpha, RAD.beta, RAD.gamma];
/** Signed change as shown on the counters. */
export const sgn = (v: number) => (v > 0 ? `+${v}` : v < 0 ? `−${-v}` : '0');

export type Origin = 'natural' | 'human-made';
export type Iso = {
	id: string; name: string; short: string; origin: Origin; rads: RKey[]; where: string[]; plate?: PDef;
};
/** The six named radioisotopes (design "Numbers used"); rows pair up by radiation type (alpha, beta, gamma). */
export const ISO: Record<string, Iso> = {
	U238: {id: 'U238', name: 'uranium-238', short: 'U-238', origin: 'natural', rads: ['alpha'], where: ['in rocks since', 'Earth formed'], plate: ORE},
	C14: {id: 'C14', name: 'carbon-14', short: 'C-14', origin: 'natural', rads: ['beta'], where: ['made in the upper air;', 'in every living thing'], plate: TREE},
	K40: {id: 'K40', name: 'potassium-40', short: 'K-40', origin: 'natural', rads: ['beta', 'gamma'], where: ['in rocks, soil,', 'food and you']},
	Am241: {id: 'Am241', name: 'americium-241', short: 'Am-241', origin: 'human-made', rads: ['alpha'], where: ['ionisation', 'smoke alarms'], plate: ALARM},
	Co60: {id: 'Co60', name: 'cobalt-60', short: 'Co-60', origin: 'human-made', rads: ['beta', 'gamma'], where: ['cancer treatment,', 'sterilising'], plate: POT},
	Tc99m: {id: 'Tc99m', name: 'technetium-99m', short: 'Tc-99m', origin: 'human-made', rads: ['gamma'], where: ['medical scans'], plate: VIAL},
};
export const NATURAL = [ISO.U238, ISO.C14, ISO.K40];
export const HUMAN = [ISO.Am241, ISO.Co60, ISO.Tc99m];
export const NAT_C = '#2f8a5b', HUM_C = '#12827b';

// ---------- penetration runs (chance engine; illustrative weights) ----------
export type AbsKey = 'paper' | 'aluminium' | 'lead' | 'through';
export const ABS: {key: AbsKey; label: string; sub: string}[] = [
	{key: 'paper', label: 'paper', sub: 'a sheet'},
	{key: 'aluminium', label: 'aluminium', sub: 'a few mm'},
	{key: 'lead', label: 'lead', sub: 'several cm'},
];
/** Where each kind of radiation stops: weights over paper, aluminium, lead, through the lead (model). */
export const PEN: Record<RKey, {trials: number; seed: number; w: [number, number, number, number]}> = {
	alpha: {trials: 24, seed: 171, w: [1, 0, 0, 0]},
	beta: {trials: 24, seed: 172, w: [0, 1, 0, 0]},
	gamma: {trials: 40, seed: 173, w: [0, 0.08, 0.62, 0.3]},
};
/** Ionisation trail: ions made per 100 px of track (model; alpha most, gamma least). */
export const IONS_PER_100: Record<RKey, number> = {alpha: 9, beta: 2.2, gamma: 0.45};
export const MODEL_PEN = 'model: not measured count rates';
export const SRC_ISO = 'decay data: NNDC NuDat 3';
