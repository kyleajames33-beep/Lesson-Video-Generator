// M7 G04 practice board, in the chem-m7-g01 layout (QStrip, Badge and AnsBox imported from G01) with C15's token rows.
// README:
// - Back3: the three-row backbone strip along the bottom ("find the backbone", "all C–C: addition", "ester or amide
//   links: condensation"); lights or ticks the row a scene uses and dims during each countdown.
// - XUnit: question 3's X, [–CH₂–C(CH₃)(COOCH₃)–]ₙ, with its ester side group drawn in full (C=O and O–CH₃) below the
//   second backbone carbon; side greys on cue; `unstamp` lifts the brackets and n, shrinks the continuation bonds and
//   redraws the teal C=C; `ghostH` sends a crossed ghost H towards each backbone carbon.
// - AnsFrame: a dashed answer frame around a drawn answer.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, HGREY, MULTI, NAVY, OXY_INK} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {GLOW} from '../chem-m7-g01/board';
import {GREY, RED, Row, rowGeo} from '../chem-m7-c15/parts';
import type {Tok} from '../chem-m7-c15/parts';

export const AM = '#c98a1b';

// ---------- backbone strip ----------
export const BACK3 = ['find the backbone (through the brackets)', 'all C–C: addition (open or close the C=C)', 'ester or amide links: condensation (water out or back)'];
const STRIP_Y = 1004;
export const Back3: React.FC<{lit?: Record<number, number>; ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number; build?: number; dimAt?: number}> = ({lit = {}, ticks = {}, hold, at = -100, out, build, dimAt: dAt}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.72 * dim) * (dAt === undefined ? 1 : 1 - 0.55 * prog(f, dAt, 14));
	if (o <= 0.01) return null;
	let x = 96;
	return (
		<g opacity={o} transform={`translate(0,${(1 - prog(f, at, 20)) * 40})`}>
			{BACK3.map((l, i) => {
				const px = x;
				const w = mw(l, 24, true, 700) + 62;
				x = px + w + 12;
				const ro = build === undefined ? 1 : prog(f, build + i * 14, 10);
				const on = (ticks[i] ?? []).some(t => t <= f);
				const lt = lit[i] !== undefined ? vis(f, lit[i]) : 0;
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i} opacity={ro}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 || lt > 0.01 ? GLOW : CARDC} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : lt > 0.01 ? 0.5 * lt : dim > 0.5 ? 0 : 1} stroke={on || lt > 0.5 ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on || lt > 0.5 ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill={CARDC} stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={24} color={on || lt > 0.5 ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- question 3's X ----------
const XT: Tok[] = [{l: 'C', up: 'H', dn: 'H', w: 100}, {l: 'C', w: 100}];
export const xGeo = (x: number, y: number, s: number) => rowGeo(XT, x, y, s, 'middle', 60, 60);
export const XUnit: React.FC<{x: number; y: number; s?: number; at: number; out?: number; o?: number; grey?: number; unstamp?: number; ghostH?: number; br?: boolean}> = ({x, y, s = 1, at, out, o = 1, grey, unstamp, ghostH, br = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const g = xGeo(x, y, s);
	const un = unstamp === undefined ? 0 : smooth(prog(f, unstamp, 20));
	const gr = grey === undefined ? 0 : prog(f, grey, 12);
	const sc = (c: string) => (gr > 0.5 ? GREY : c);
	const c2 = g.cx[1];
	const C: [number, number] = [c2, y + 92 * s], Od: [number, number] = [c2 - 74 * s, y + 150 * s], Os: [number, number] = [c2 + 74 * s, y + 150 * s], Me: [number, number] = [c2 + 170 * s, y + 150 * s];
	const lab = (p: [number, number], t: string, col: string, k: string) => <Sx key={k} x={p[0]} y={p[1] + 14 * s} text={t} size={38 * s} color={sc(col)} anchor="middle" weight={800} at={-1000} />;
	const ln = (a: [number, number], b: [number, number], k: string, col = INK, off = 0) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]); const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L; const nx = -uy * off, ny = ux * off; return <line key={k} x1={a[0] + ux * 22 * s + nx} y1={a[1] + uy * 22 * s + ny} x2={b[0] - ux * 24 * s + nx} y2={b[1] - uy * 24 * s + ny} stroke={sc(col)} strokeWidth={4} strokeLinecap="round" />; };
	return (
		<g opacity={v}>
			<Row toks={XT} x={g.x0} y={y} s={s} at={-1000} contL={60} contR={60} contO={1 - 0.75 * un} br={br ? {a: 0, b: 1, at: -1000, out: unstamp} : undefined} />
			{un > 0.01 ? <line x1={g.cx[0] + 24 * s} y1={y - 12 * s} x2={g.cx[1] - 24 * s} y2={y - 12 * s} stroke={MULTI} strokeWidth={4.5} strokeLinecap="round" opacity={un} /> : null}
			<line x1={c2} y1={y + 22 * s} x2={c2} y2={C[1] - 22 * s} stroke={sc(INK)} strokeWidth={4} />
			{lab(C, 'C', INK, 'c')}
			{ln(C, Od, 'd1', RED, 5)}{ln(C, Od, 'd2', RED, -5)}
			{ln(C, Os, 's1')}{ln(Os, Me, 's2')}
			{lab(Od, 'O', OXY_INK, 'od')}{lab(Os, 'O', OXY_INK, 'os')}{lab(Me, 'CH₃', INK, 'me')}
			<line x1={c2} y1={y - 22 * s} x2={c2} y2={y - 52 * s} stroke={sc(INK)} strokeWidth={4} />
			<Sx x={c2} y={y - 72 * s + 14 * s} text="CH₃" size={36 * s} color={sc(INK)} anchor="middle" weight={800} at={-1000} />
			{ghostH !== undefined ? [0, 1].map(i => {
				const t = smooth(prog(f, ghostH, 24));
				const gx = g.cx[i] + (i ? 1 : -1) * (190 - 80 * t) * s;
				const q = vis(f, ghostH, ghostH + 80);
				return <g key={'h' + i} opacity={q}><Sx x={gx} y={y + 12 * s} text="H" size={34 * s} color={HGREY} anchor="middle" weight={800} at={-1000} /><line x1={gx - 18 * s} y1={y - 14 * s} x2={gx + 18 * s} y2={y + 20 * s} stroke={RED} strokeWidth={5} opacity={prog(f, ghostH + 26, 8)} /></g>;
			}) : null}
		</g>
	);
};

// ---------- answer frame ----------
export const AnsFrame: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; label?: string}> = ({x, y, w, h, at, out, label = 'answer'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
			<rect x={x + 16} y={y - 16} width={mw(label, 22, false, 700) + 20} height={30} rx={8} fill={CARDC} />
			<Sx x={x + 26} y={y + 6} text={label} size={22} color={INK_SOFT} weight={700} at={-1000} />
		</g>
	);
};
export {GREY, INK, INK_SOFT, NAVY, RED, TEAL};
