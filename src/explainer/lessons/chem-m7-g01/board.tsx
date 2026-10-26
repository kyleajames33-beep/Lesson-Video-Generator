// M7 G01 practice board, in the chem-m6-g01 layout with the Module 7 molecule kit. README for Claude:
// - Checks7: the three-check strip along the bottom ("which bonds?", "added or swapped?", "atoms and name check?"),
//   lesson-local copy of chem-m6-g01's Checks with the Module 7 labels; ticks the row a scene uses, dims to an outline
//   during every countdown (pass the hold).
// - Badge: the teal question-type badge at the top right (hidden during the attempts).
// - QStrip: the worded question card (C01's QCardX) as a strip across the top during the walkthrough; givens are
//   underlined in the card text at their cues (no givens card). QFull: the same card at attempt size.
// - AnsBox: a dashed answer box; the full model answer writes in grey with one lit phrase (the answer itself).
// - BondIcon, SplitIcon, TallyIcon: the hook's check icons.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, TEAL, mw} from '../chem-m6-c01/parts';
import {CARDC, MULTI, QCardX, qCardH} from '../chem-m7-c01/molecules';
import type {ULine} from '../chem-m7-c01/molecules';
import {CHLOR, vis} from '../chem-m7-c04a/parts';

export const GLOW = '#f6d77a';

// ---------- check strip ----------
export const CHECKS7 = ['which bonds?', 'added or swapped?', 'atoms and name check?'];
const STRIP_Y = 1004;
export const Checks7: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number}> = ({ticks = {}, hold, at = -100, out}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.72 * dim);
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	let x = 96 + mw('three checks:', 28, true, 700) + 18;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={96} y={STRIP_Y + 34} text="three checks:" size={28} color={INK_SOFT} hand at={-1000} />
			{CHECKS7.map((l, i) => {
				const px = x;
				const w = mw(l, 26, true, 700) + 62;
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : CARDC} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill={CARDC} stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- type badge ----------
export const Badge: React.FC<{text: string; at: number; out?: number}> = ({text, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = mw(text, 28, true, 700) + 48;
	return (
		<g opacity={v}>
			<rect x={1780 - w} y={14} width={w} height={46} rx={23} fill={TEAL} />
			<Sx x={1780 - w / 2} y={46} text={text} size={28} color="#fffdf8" anchor="middle" hand at={-1000} />
		</g>
	);
};

// ---------- question card ----------
export const QS = {y: 70, size: 26};
export const QF = {y: 175, size: 34};
/** The strip card across the top (walkthrough), scaling in from slightly larger over the first frames. */
export const QStrip: React.FC<{lines: string[]; under?: ULine[]; gaps?: number[]; children?: React.ReactNode}> = ({lines, under = [], gaps = [], children}) => {
	const f = useCurrentFrame();
	const k = 1 + 0.08 * (1 - prog(f, 0, 16));
	return (
		<g transform={`translate(140,${QS.y}) scale(${k}) translate(-140,${-QS.y})`}>
			<QCardX lines={lines} at={-100} y={QS.y} size={QS.size} under={under} gaps={gaps} />
			{children}
		</g>
	);
};
export const stripBottom = (n: number, gaps: number[] = []) => QS.y + qCardH(n, QS.size, gaps);

// ---------- answer box ----------
/** Dashed answer box; parts write on in order at their own frames: lit parts (the answer itself) in teal, the rest of
 *  the model answer in grey. */
export type APart = {t: string; at: number; lit?: boolean};
export const AnsBox: React.FC<{x: number; y: number; w: number; label: string; at: number; parts?: APart[]; size?: number; o?: number}> = ({x, y, w, label, at, parts = [], size = 26, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 12) * o;
	if (v <= 0.01) return null;
	const h = size * 2.3;
	let tx = x + 24 + mw(label, 24, false, 700) + 16;
	const ty = y + h / 2 + size * 0.36;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARDC} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
			<Sx x={x + 20} y={y + h / 2 + 9} text={label} size={24} color={INK_SOFT} weight={700} at={-1000} />
			{parts.map((p, i) => {
				const px = tx;
				tx += mw(p.t, size, false, p.lit ? 800 : 600);
				const fo = prog(f, p.at, 14);
				if (fo <= 0.01) return null;
				return <Sx key={i} x={px} y={ty} text={p.t} size={size} color={p.lit ? TEAL : '#8f897f'} weight={p.lit ? 800 : 600} at={-1000} opacity={fo} />;
			})}
		</g>
	);
};

// ---------- hook icons (drawn centred on 0, 0) ----------
export const BondIcon: React.FC = () => (
	<g stroke={INK} strokeWidth={4} strokeLinecap="round">
		<line x1={-40} y1={-22} x2={-16} y2={-22} />
		<line x1={-12} y1={-4} x2={12} y2={-4} stroke={MULTI} /><line x1={-12} y1={6} x2={12} y2={6} stroke={MULTI} />
		<line x1={16} y1={14} x2={40} y2={14} stroke={MULTI} /><line x1={16} y1={23} x2={40} y2={23} stroke={MULTI} /><line x1={16} y1={32} x2={40} y2={32} stroke={MULTI} />
	</g>
);
export const SplitIcon: React.FC = () => (
	<g>
		<Sx x={-34} y={-6} text="X–Y" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
		<path d="M-34,2 L-44,22 M-34,2 L-24,22" stroke={TEAL} strokeWidth={3} fill="none" strokeLinecap="round" />
		<Sx x={22} y={-6} text="H" size={22} color={INK_SOFT} anchor="middle" weight={800} at={-1000} />
		<path d="M30,-14 C44,-24 44,0 30,-4" stroke={CHLOR} strokeWidth={3} fill="none" strokeLinecap="round" />
		<Sx x={30} y={28} text="Cl" size={22} color={CHLOR} anchor="middle" weight={800} at={-1000} />
	</g>
);
export const TallyIcon: React.FC = () => <Sx x={0} y={10} text="C ✓ H ✓" size={24} color={INK} anchor="middle" weight={800} at={-1000} />;
