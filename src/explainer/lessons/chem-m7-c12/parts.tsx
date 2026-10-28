// M7 C12 board pieces (chem-m7-p06 can import these). README for Claude:
// - SoapSym: the head-and-tail symbol: a round head (red "−" for soap and anionic detergents, indigo "+" cationic,
//   violet uncharged, grey for scum) and a pale-blue zigzag tail pointing along angle `ang` from the head.
// - Micelle: n symbols on a ring, heads out, tails in; `grease` fills the core yellow (a coated droplet); `build`
//   flies each symbol in from outside between two frames.
// - OilChain: a yellow skeletal hydrocarbon chain. Fabric: a hatched cloth band. Ion: a small labelled ion ball.
// - kpos: keyed positions (move from key to key, each move starting at its key's frame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, INK_SOFT, Sx, smooth} from '../chem-m6-c01/parts';
import {NAVY} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {RED} from '../chem-m7-c08a/parts';
import {INDIGO} from '../chem-m7-c11/parts';

export const OIL = '#e3b23c', OIL_SOFT = '#f6e3a4', TAIL = '#5d9ccc', CA = '#2a9d8f', NA = '#c08a3e', SCUM = '#b9b4aa', WATER_SOFT = '#e3eff8';
export {INDIGO, INK, INK_SOFT, NAVY, RED};

export const kpos = (f: number, keys: {at: number; p: V2}[], dur = 26): V2 => {
	let p = keys[0].p;
	for (let i = 1; i < keys.length; i++) { const t = smooth(prog(f, keys[i].at, dur)); p = [p[0] + (keys[i].p[0] - p[0]) * t, p[1] + (keys[i].p[1] - p[1]) * t]; }
	return p;
};

export type Head = 'neg' | 'pos' | 'non' | 'grey';
export const SoapSym: React.FC<{x: number; y: number; ang: number; s?: number; o?: number; head?: Head; len?: number}> = ({x, y, ang, s = 1, o = 1, head = 'neg', len = 120}) => {
	if (o <= 0.01) return null;
	const r = 16 * s, n = 6, L = len * s;
	const ux = Math.cos(ang), uy = Math.sin(ang), nx = -uy, ny = ux;
	const pts = Array.from({length: n + 1}, (_, i) => { const d = r + (L * i) / n, w = (i % 2 ? 1 : -1) * 7 * s; return `${x + ux * d + nx * w},${y + uy * d + ny * w}`; });
	const col = head === 'neg' ? RED : head === 'pos' ? INDIGO : head === 'non' ? '#7a5bb5' : SCUM;
	const tail = head === 'grey' ? SCUM : TAIL;
	return (
		<g opacity={o}>
			<polyline points={pts.join(' ')} fill="none" stroke={tail} strokeWidth={4.5 * Math.max(0.6, s)} strokeLinejoin="round" strokeLinecap="round" />
			<circle cx={x} cy={y} r={r} fill={head === 'grey' ? '#e7e3db' : '#fffdf8'} stroke={col} strokeWidth={3.5} />
			{head !== 'non' ? <Sx x={x} y={y + r * 0.5} text={head === 'pos' ? '+' : '−'} size={r * 1.5} color={col} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

export const Micelle: React.FC<{cx: number; cy: number; r?: number; n?: number; at: number; out?: number; o?: number; grease?: boolean; build?: [number, number]; s?: number; glow?: number}> = ({cx, cy, r = 130, n = 14, at, out, o = 1, grease = false, build, s = 1, glow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const g = glow === undefined ? 0 : vis(f, glow);
	return (
		<g opacity={v}>
			{grease ? <circle cx={cx} cy={cy} r={(r - 14) * 1} fill={OIL_SOFT} stroke={OIL} strokeWidth={3} /> : null}
			{g > 0 ? <circle cx={cx} cy={cy} r={r + 24 * s} fill="none" stroke={RED} strokeWidth={6} opacity={0.35 * g} /> : null}
			{Array.from({length: n}, (_, i) => {
				const a = (i / n) * Math.PI * 2;
				const t = build ? smooth(prog(f, build[0] + ((build[1] - build[0]) * i) / n, 20)) : 1;
				const rr = r + (1 - t) * 260;
				const a2 = a + (1 - t) * 0.8;
				return <SoapSym key={i} x={cx + Math.cos(a2) * rr} y={cy + Math.sin(a2) * rr} ang={a2 + Math.PI} s={s} len={r * 0.85 / s} o={build ? Math.min(1, t * 3) : 1} />;
			})}
		</g>
	);
};

export const OilChain: React.FC<{x: number; y: number; n?: number; at: number; out?: number; o?: number; dx?: number}> = ({x, y, n = 10, at, out, o = 1, dx = 44}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const pts = Array.from({length: n}, (_, i) => `${x + i * dx},${y + (i % 2 ? -14 : 14)}`).join(' ');
	return <g opacity={v}><polyline points={pts} fill="none" stroke={OIL} strokeWidth={8} strokeLinejoin="round" strokeLinecap="round" /></g>;
};

export const Fabric: React.FC<{x: number; y: number; w: number; h?: number; at: number; o?: number}> = ({x, y, w, h = 60, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={10} fill="#e8dcc6" stroke="#a8946f" strokeWidth={3} />
			{Array.from({length: Math.floor(w / 26)}, (_, i) => <line key={i} x1={x + 10 + i * 26} y1={y + 6} x2={x + i * 26 - 10} y2={y + h - 6} stroke="#bba886" strokeWidth={2} />)}
			<Sx x={x + w + 20} y={y + h * 0.65} text="fabric" size={26} color="#8a7550" weight={700} at={-1000} />
		</g>
	);
};

export const Ion: React.FC<{x: number; y: number; t: string; color?: string; r?: number; o?: number}> = ({x, y, t, color = CA, r = 30, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={color} strokeWidth={4} />
		<Sx x={x} y={y + r * 0.32} text={t} size={r * 0.8} color={color} anchor="middle" weight={800} at={-1000} />
	</g>
));
