// Drawing parts for M6 C10 (Ka and pKa, Ka from a measured pH, Ka × Kb = Kw). Reuses C08 (and through it C07 to C01:
// the board, task line, givens card, step chip, working lines, ICE table, Ka fraction, full meter with an amber readout,
// crossed chips, question card, countdown and key notes). New here:
// - PKRuler: a two-sided log ruler, Ka powers of ten above and pKa numbers below (0 to 14), with markers whose labels
//   sit left or right of their stalks so that close values never collide, an optional hatched "strong" zone left of
//   10^0, and an optional teal "weak" band;
// - FixedBar: one acid's 10^-14 to 10^0 span split at its pKa (Ka teal, its conjugate base's Kb violet), so a longer
//   Ka bar means a shorter Kb bar;
// - Strike: a pen strike through a substring of a centred fraction line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {BASE, BASE_INK, Fade, INK, INK_SOFT, PROTON, PROTON_INK, Sx, TEAL, mw, smooth, vis} from '../chem-m6-c08/parts';

export * from '../chem-m6-c08/parts';

export const NAVY = '#2c4a7a';
export type PR = {x0: number; x1: number; y: number};
export const px = (R: PR, p: number) => R.x0 + (p / 14) * (R.x1 - R.x0);
export type PMark = {p: number; at: number; out?: number; name: string; side: 'l' | 'r'; pLabel?: {t: string; at: number}; color?: string; flag?: number; o?: number};
export const PKRuler: React.FC<{R: PR; at: number; out?: number; o?: number; pkaAt?: number; marks?: PMark[]; strong?: {at: number; x: number; pulse?: number}; weak?: {at: number; out?: number}; size?: number; kaLabels?: boolean; every?: number}> = ({R, at, out, o = 1, pkaAt, marks = [], strong, weak, size = 24, kaLabels = true, every = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 22));
	const pk = pkaAt === undefined ? 0 : prog(f, pkaAt, 16);
	const sp = strong ? smooth(prog(f, strong.at, 20)) : 0;
	const spu = strong?.pulse === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - strong.pulse) / 40)) * Math.PI));
	const wk = weak ? vis(f, weak.at, weak.out, 14) : 0;
	const y = R.y;
	return (
		<g opacity={v}>
			{sp > 0.01 && strong ? (
				<g opacity={sp}>
					<defs><pattern id="hatchS" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="14" stroke="#b8b0a2" strokeWidth="5" /></pattern></defs>
					<rect x={strong.x} y={y - 60} width={R.x0 - strong.x - 6} height={120} rx={14} fill="url(#hatchS)" opacity={0.55 + 0.3 * spu} stroke="#9a9284" strokeWidth={2} />
				</g>
			) : null}
			{wk > 0.01 ? <rect x={R.x0 + 4} y={y - 60} width={R.x1 - R.x0 - 4} height={120} rx={14} fill={PROTON} opacity={0.14 * wk} /> : null}
			<line x1={R.x0} y1={y} x2={R.x0 + (R.x1 - R.x0) * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{kaLabels ? <Sx x={R.x0 - 22} y={y - 28} text="Ka" size={size + 4} color={TEAL} anchor="end" weight={800} at={at} opacity={strong ? 1 - sp : 1} /> : null}
			{pkaAt !== undefined ? <Sx x={R.x0 - 22} y={y + 44} text="pKa" size={size + 4} color={NAVY} anchor="end" weight={800} at={pkaAt} opacity={strong ? 1 - sp : 1} /> : null}
			{Array.from({length: 15}, (_, i) => {
				const X = px(R, i);
				const show = i % every === 0;
				return (
					<g key={i} opacity={prog(f, at + 4 + i * 1.5, 8)}>
						<line x1={X} y1={y - 10} x2={X} y2={y + 10} stroke={INK_SOFT} strokeWidth={2.5} />
						{kaLabels && show ? <Sx x={X} y={y - 26} text={`10^{${i === 0 ? '0' : '−' + i}}`} size={size} color={TEAL} anchor="middle" weight={600} at={-1000} /> : null}
						{pk > 0.01 && show ? <Sx x={X} y={y + 42} text={String(i)} size={size + 2} color={NAVY} anchor="middle" weight={700} at={-1000} opacity={pk} /> : null}
					</g>
				);
			})}
			{marks.map((m, i) => {
				const mo = vis(f, m.at, m.out, 12) * (m.o ?? 1);
				if (mo <= 0.01) return null;
				const X = px(R, m.p);
				const drop = (1 - smooth(prog(f, m.at, 16))) * -40;
				const col = m.color ?? TEAL;
				const anc = m.side === 'l' ? 'end' : 'start';
				const dx = m.side === 'l' ? -10 : 10;
				return (
					<g key={i} opacity={mo}>
						<line x1={X} y1={y - 104} x2={X} y2={y - 52} stroke={col} strokeWidth={2.5} strokeDasharray="5 5" />
						<line x1={X} y1={y + 14} x2={X} y2={y + 84} stroke={col} strokeWidth={2.5} strokeDasharray="5 5" />
						<path d={`M${X - 11},${y - 22 + drop} L${X + 11},${y - 22 + drop} L${X},${y - 2 + drop} Z`} fill={col} stroke={INK} strokeWidth={1.5} />
						<Sx x={X + dx} y={y - 80} text={m.name} size={size + 6} color={col} anchor={anc} weight={800} at={-1000} />
						{m.pLabel ? <Sx x={X + dx} y={y + 82} text={m.pLabel.t} size={size + 6} color={NAVY} anchor={anc} weight={800} at={m.pLabel.at} /> : null}
						{m.flag !== undefined ? (
							<Fade at={m.flag}>
								<line x1={X} y1={y - 104} x2={X} y2={y - 150} stroke={INK} strokeWidth={3} />
								<path d={`M${X},${y - 150} L${X + 34},${y - 140} L${X},${y - 128} Z`} fill="#c4432f" />
							</Fade>
						) : null}
					</g>
				);
			})}
		</g>
	);
};

/** One acid's span, 10^0 (left) to 10^-14 (right), split at pKa: Kb violet on the left, Ka teal on the right. */
export const FixedBar: React.FC<{R: PR; y: number; p: number; at: number; out?: number; o?: number; h?: number; name: string; lit?: {at: number; out?: number}}> = ({R, y, p, at, out, o = 1, h = 34, name, lit}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, 26));
	const X = px(R, p);
	const l = lit ? vis(f, lit.at, lit.out, 12) : 0;
	return (
		<g opacity={v}>
			<rect x={X} y={y} width={(R.x1 - X) * g} height={h} rx={8} fill={PROTON} opacity={0.88} />
			<rect x={X - (X - R.x0) * g} y={y} width={(X - R.x0) * g} height={h} rx={8} fill={BASE} opacity={0.88} />
			{l > 0.01 ? <rect x={R.x0 - 6} y={y - 6} width={X - R.x0 + 12} height={h + 12} rx={12} fill="none" stroke={BASE_INK} strokeWidth={5} opacity={l} /> : null}
			<Sx x={R.x0 - 22} y={y + h * 0.78} text={name} size={28} color={INK} anchor="end" weight={700} at={-1000} />
			<Sx x={(X + R.x1) / 2} y={y + h * 0.76} text="Ka" size={24} color="#ffffff" anchor="middle" weight={800} at={at + 20} />
			<Sx x={(X + R.x0) / 2} y={y + h * 0.76} text="Kb" size={24} color="#ffffff" anchor="middle" weight={800} at={at + 20} />
		</g>
	);
};

/** A pen strike through `sub` of `text` drawn centred at cx (Sx anchor middle, weight 700). */
export const Strike: React.FC<{text: string; sub: string; occ?: number; cx: number; y: number; size: number; at: number; color?: string}> = ({text, sub, occ = 1, cx, y, size, at, color = '#c4432f'}) => {
	let idx = -1;
	for (let n = 0; n < occ; n++) idx = text.indexOf(sub, idx + 1);
	if (idx < 0) throw new Error(`strike "${sub}" not in "${text}"`);
	const W = mw(text, size);
	const x1 = cx - W / 2 + mw(text.slice(0, idx), size), x2 = x1 + mw(sub, size);
	return <DrawPath d={`M${x1 - 4},${y - size * 0.1} L${x2 + 4},${y - size * 0.42}`} at={at} dur={10} color={color} width={5} />;
};
void PROTON_INK;
