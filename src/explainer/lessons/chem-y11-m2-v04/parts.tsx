// Drawing parts for Y11 Chem M2 V04 (measuring molar mass). Reuses the M2 V03 parts (and through them V02's; read-only).
// New here: the gas boxes (a particle-box run from src/explainer/sims drawn as H2, O2 and CO2 molecules, its right
// wall a piston that follows the run), the burette collection (the painted start plate with the painted end plate
// revealed from the tap end down to the live liquid level, and rising bubbles), the coded balance display window,
// the notebook card and the compare table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import type {BoxConfig, BoxRun} from '../../sims/particle-box';
import {runBox} from '../../sims/particle-box';
import {BUR0, BUR1} from './common';
import {CO2, Di, INK, PAPER, Plate, Sx, clamp01, plateMap, prog, richW} from '../chem-y11-m2-v03/parts';

export * from '../chem-y11-m2-v03/parts';

// ---------- colour roles (design Revision 2) ----------
/** gas volumes and conditions */
export const SLATE_S = '#3f6fb0';
export const SLATE_T = '#335f9e';
export const SLATE_SOFT = '#dbe6f5';
/** losses and their arrows */
export const ROSE_S = '#c8443a';
export const ROSE_T = '#b8322a';
export const ROSE_SOFT = '#f7dcd8';
/** accepted values */
export const GOLD_T = '#8a6a0e';
export const GOLD_S = '#b08a1e';

// ---------- gas boxes from a particle-box run ----------
const RUNS = new WeakMap<BoxConfig, BoxRun>();
export const useRun = (cfg: BoxConfig) => {
	let r = RUNS.get(cfg);
	if (!r) { r = runBox(cfg); RUNS.set(cfg, r); }
	return r;
};
export type GasKind = 'H2' | 'O2' | 'CO2';
/** A gas box: frame drawn at (x, y) with the run's piston as the right wall; the molecules are drawn at the run's
 *  positions. tint 0..1 washes the box warm (heated). */
export const GasBox: React.FC<{run: BoxRun; x: number; y: number; kind: GasKind; u: number; f0?: number; tint?: number; o?: number; label?: string}> = ({run, x, y, kind, u, f0 = 0, tint = 0, o = 1, label}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const sf = Math.min(run.frames - 1, Math.max(0, Math.round(f + f0)));
	const wall = run.wallX[sf];
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const k = sf * run.slots + i;
		if (run.sp[k] < 0) continue;
		const px = x + run.x[k], py = y + run.y[k], rot = (i * 53 + sf * 1.3) % 360;
		out.push(kind === 'CO2' ? <g key={i} transform={`rotate(${rot},${px},${py})`}><CO2 x={px} y={py} r={u} /></g> : <Di key={i} el={kind === 'H2' ? 'H' : 'O'} x={px} y={py} r={u} rot={rot} />);
	}
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={wall} height={run.config.h} fill={tint > 0.005 ? `rgba(232,120,90,${0.22 * tint})` : PAPER} />
			{out}
			<path d={`M${x + wall},${y} L${x},${y} L${x},${y + run.config.h} L${x + wall},${y + run.config.h}`} fill="none" stroke={INK} strokeWidth={5} />
			<rect x={x + wall - 6} y={y - 16} width={14} height={run.config.h + 32} rx={5} fill="#8a8478" stroke={INK} strokeWidth={3} />
			{label ? <Sx x={x + wall / 2} y={y - 22} text={label} size={40} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- the burette collection ----------
/** Native geometry of the upturned burette plates (see common.ts). */
export const BUR_N = {cx: 426, top: 400, end: 1170, tubeL: 410, tubeR: 442, mouth: 1345, surface: 1228};
export const burMap = (x: number, y: number, h: number) => plateMap(BUR0, x, y, h);
/** Liquid level (native y) for a gas volume v of vEnd: the gas space grows down from the tap end. */
export const levelN = (v: number, vEnd: number) => BUR_N.top + (clamp01(v / vEnd)) * (BUR_N.end - BUR_N.top);
/** The upturned burette: start plate, the end plate revealed above the level, bubbles rising while `bubbling`,
 *  and the end plate whole (ribbon gone) from `done`. Optional `leak` draws bubbles escaping sideways at the mouth. */
export const Burette: React.FC<{id: string; x: number; y: number; h: number; v: number; vEnd: number; bubbling?: boolean; done?: number; leak?: boolean; o?: number}> = ({id, x, y, h, v, vEnd, bubbling = false, done, leak = false, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const m = burMap(x, y, h);
	const lv = m.Y(levelN(v, vEnd));
	const endO = done === undefined ? 0 : prog(f, done, 16);
	const bub: React.ReactNode[] = [];
	if (bubbling) for (let i = 0; i < 6; i++) {
		const t = ((f * 0.03 + i / 6) % 1);
		const by = m.Y(BUR_N.mouth - 20) - t * (m.Y(BUR_N.mouth - 20) - lv);
		if (by < lv + 4) continue;
		bub.push(<circle key={i} cx={m.X(BUR_N.cx) + Math.sin(f * 0.3 + i) * 3} cy={by} r={Math.max(3, h * 0.005)} fill="#ffffff" stroke="#7aa6c8" strokeWidth={1.5} />);
	}
	if (leak) for (let i = 0; i < 4; i++) {
		const t = ((f * 0.025 + i / 4) % 1);
		bub.push(<circle key={'l' + i} cx={m.X(BUR_N.cx) + 14 + t * 90} cy={m.Y(BUR_N.mouth) - t * 90 - i * 4} r={Math.max(3, h * 0.006)} fill="#ffffff" stroke={ROSE_S} strokeWidth={2} opacity={1 - t * 0.6} />);
	}
	return (
		<g opacity={o}>
			<Plate p={BUR0} x={x} y={y} h={h} />
			<defs><clipPath id={id}><rect x={x - 400} y={y - 50} width={m.w + 800} height={Math.max(0, lv - (y - 50))} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Plate p={BUR1} x={x} y={y} h={h} /></g>
			{endO > 0.005 ? <Plate p={BUR1} x={x} y={y} h={h} o={endO} /> : null}
			<line x1={m.X(BUR_N.tubeL) - 4} x2={m.X(BUR_N.tubeR) + 4} y1={lv} y2={lv} stroke={SLATE_S} strokeWidth={3} />
			{bub}
		</g>
	);
};

// ---------- the balance display window (coded) ----------
export const Display: React.FC<{x: number; y: number; w: number; text: string; size?: number; label?: string}> = ({x, y, w, text, size = 64, label}) => (
	<g>
		<rect x={x} y={y} width={w} height={size * 1.6} rx={14} fill="#26302b" stroke={INK} strokeWidth={5} />
		<Sx x={x + w - 24} y={y + size * 1.15} text={text} size={size} color="#d8fbe0" anchor="end" weight={800} at={-1000} />
		{label ? <Sx x={x} y={y - 16} text={label} size={32} color={INK} weight={800} at={-1000} /> : null}
	</g>
);

// ---------- the notebook card (the final frame) ----------
export const Notebook: React.FC<{x: number; y: number; w: number; head: string; runs: string[]; at?: number[]; under?: {line: number; from: string; at: number}; size?: number}> = ({x, y, w, head, runs, at = [], under, size = 34}) => {
	const f = useCurrentFrame();
	const lh = size * 1.75;
	const h = (runs.length + 1) * lh + 70;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf4" stroke="rgba(60,45,20,0.4)" strokeWidth={3} />
			{Array.from({length: runs.length + 2}, (_, i) => <line key={i} x1={x + 10} x2={x + w - 10} y1={y + 40 + i * lh + 14} y2={y + 40 + i * lh + 14} stroke="#bcd3e6" strokeWidth={2} />)}
			<line x1={x + 70} x2={x + 70} y1={y + 6} y2={y + h - 6} stroke="#e4a0a0" strokeWidth={2.5} />
			<Sx x={x + 90} y={y + 40} text={head} size={size + 4} color={INK} hand weight={700} at={-1000} />
			{runs.map((r, i) => <Sx key={i} x={x + 90} y={y + 40 + (i + 1) * lh} text={r} size={size} color={INK} hand weight={700} at={at[i] ?? -1000} />)}
			{under && f >= under.at ? (() => {
				const t = runs[under.line], k = t.indexOf(under.from);
				const hw = (u: string) => richW([{t: u}], size, true, 700);
				const x0 = x + 90 + hw(t.slice(0, k)), x1 = x + 90 + hw(t);
				const yy = y + 40 + (under.line + 1) * lh + 8;
				return <line x1={x0} x2={x0 + (x1 - x0) * prog(f, under.at, 14)} y1={yy} y2={yy} stroke={ROSE_S} strokeWidth={4} strokeLinecap="round" />;
			})() : null}
		</g>
	);
};
