// C6a/C6b shared method pieces: the three type cards (each with a mini ICE table that shows which rows the
// question fills in), a curved pen arrow, the E - I bracket and the four-step rule chip. All coded (abstract).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Fade, Ring, Sx, TEAL, Tick} from '../chem-m5-c06/parts';
import {CROSS} from '../chem-m5-c06/common';

export type MiniCell = '' | 'S' | 'D' | 'Q' | {t: string; color?: string; at?: number};
export type TypeSpec = {n: 1 | 2 | 3; title: string; line1: string; line2: string; rows: MiniCell[][]; k: 'q' | 'given'};
export const TYPE_SPECS: TypeSpec[] = [
	{n: 1, title: 'Type 1', line1: 'Every equilibrium concentration given', line2: 'substitute into K', rows: [['', '', ''], ['', '', ''], ['S', 'S', 'S']], k: 'q'},
	{n: 2, title: 'Type 2', line1: 'Start + one equilibrium value given', line2: 'ICE table, then K', rows: [['S', 'S', 'S'], ['D', 'D', 'D'], ['D', 'D', 'S']], k: 'q'},
	{n: 3, title: 'Type 3', line1: 'K + start given', line2: 'find the equilibrium concentrations', rows: [['S', 'S', 'S'], ['', '', ''], ['Q', 'Q', 'Q']], k: 'given'},
];
/** Card-local geometry (the card is drawn at W x H, then scaled). */
export const TC = {W: 1400, H: 210, mx: 30, my: 36, lw: 44, cw: 70, rh: 46};
export const miniCell = (r: number, c: number): [number, number] => [TC.mx + TC.lw + c * TC.cw + TC.cw / 2, TC.my + r * TC.rh + TC.rh / 2];
export const COL_Y = [210, 446, 682];
const SHADE = '#cfe6dc';

export type TypeCardProps = {
	spec: TypeSpec; x: number; y: number; s?: number; at: number; out?: number; opacity?: number;
	dim?: number; lift?: number; pulse?: number; tick?: number; nextTag?: [number, number?];
	ringCell?: {r: number; c: number; at: number; out?: number}; ringRow?: {r: number; at: number; out?: number}; ringK?: {at: number; out?: number};
	line2?: string; line2At?: number; line2Color?: string; changeX?: number; showK?: boolean; children?: React.ReactNode;
};
/** One type card. `dim` and `lift` are 0..1 values (computed by the scene). */
export const TypeCard: React.FC<TypeCardProps> = ({spec, x, y, s = 1, at, out, opacity = 1, dim = 0, lift = 0, pulse, tick, nextTag, ringCell, ringRow, ringK, line2, line2At, line2Color = TEAL, changeX, showK = true, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * opacity * (1 - 0.62 * dim);
	if (o <= 0.01) return null;
	const {W, H, mx, my, lw, cw, rh} = TC;
	const pz = pulse === undefined ? 1 : 1 + 0.07 * Math.sin(Math.min(1, Math.max(0, (f - pulse) / 40)) * Math.PI * 2) * (f >= pulse && f < pulse + 40 ? 1 : 0);
	const ncol = spec.rows[0].length;
	const tw = lw + ncol * cw;
	return (
		<g opacity={o} transform={`translate(${x},${y - lift * 14}) scale(${s})`}>
			<rect x={0} y={0} width={W} height={H} rx={24} fill="#fffdf8" stroke={lift > 0.05 ? TEAL : 'rgba(60,45,20,0.18)'} strokeWidth={lift > 0.05 ? 4 : 3} />
			{lift > 0.05 ? <rect x={6} y={H + 4} width={W - 12} height={10} rx={5} fill="rgba(60,45,20,0.08)" opacity={lift} /> : null}
			{/* mini ICE table */}
			<g transform={`translate(${mx + tw / 2},${my + 1.5 * rh}) scale(${pz}) translate(${-(mx + tw / 2)},${-(my + 1.5 * rh)})`}>
				{spec.rows.map((row, r) => (
					<g key={r}>
						<text x={mx + lw / 2} y={my + r * rh + 33} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}}>{['I', 'C', 'E'][r]}</text>
						{row.map((cell, c) => {
							const cx = mx + lw + c * cw + 6, cy = my + r * rh + 6, w = cw - 12, h = rh - 12;
							const [ccx, ccy] = miniCell(r, c);
							if (cell === 'S') return <rect key={c} x={cx} y={cy} width={w} height={h} rx={7} fill={SHADE} stroke={TEAL} strokeWidth={2} />;
							if (cell === 'D' || cell === 'Q') return (
								<g key={c}>
									<rect x={cx} y={cy} width={w} height={h} rx={7} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 5" />
									{cell === 'Q' ? <text x={ccx} y={ccy + 11} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}}>?</text> : null}
								</g>
							);
							if (typeof cell === 'object') return <Sx key={c} x={ccx} y={ccy + 11} text={cell.t} size={30} color={cell.color ?? AMBER_INK} anchor="middle" hand at={cell.at ?? -100} />;
							return null;
						})}
					</g>
				))}
				<rect x={mx} y={my} width={tw} height={3 * rh} rx={8} fill="none" stroke={INK} strokeWidth={3.5} />
				{[1, 2].map(k => <path key={k} d={`M${mx},${my + k * rh} L${mx + tw},${my + k * rh}`} stroke={INK} strokeWidth={2.5} />)}
				<path d={`M${mx + lw},${my} L${mx + lw},${my + 3 * rh}`} stroke={INK} strokeWidth={2.5} />
				{changeX !== undefined ? Array.from({length: ncol}, (_, c) => <Sx key={c} x={miniCell(1, c)[0]} y={miniCell(1, c)[1] + 11} text="x" size={34} color={AMBER_INK} anchor="middle" hand at={changeX + c * 6} />) : null}
				{ringCell ? <Ring cx={miniCell(ringCell.r, ringCell.c)[0]} cy={miniCell(ringCell.r, ringCell.c)[1]} rx={42} ry={28} at={ringCell.at} out={ringCell.out} color={AMBER} seed={7} /> : null}
				{ringRow ? <Ring cx={mx + lw + (ncol * cw) / 2} cy={miniCell(ringRow.r, 0)[1]} rx={(ncol * cw) / 2 + 22} ry={30} at={ringRow.at} out={ringRow.out} color={AMBER} seed={5} /> : null}
			</g>
			{/* words */}
			<Sx x={330} y={66} text={spec.title} size={46} color={TEAL} hand at={at} />
			<Sx x={330} y={126} text={spec.line1} size={38} color={INK} weight={600} at={at + 4} />
			<Sx x={330} y={182} text={line2 ?? spec.line2} size={42} color={line2Color} hand at={line2At ?? at + 8} />
			{showK ? (
				<g>
					{spec.k === 'q' ? (
						<>
							<rect x={W - 190} y={50} width={160} height={70} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={3.5} strokeDasharray="8 6" />
							<Sx x={W - 110} y={98} text="K = ?" size={42} color={AMBER_INK} anchor="middle" hand at={at + 6} />
						</>
					) : (
						<>
							<rect x={W - 190} y={50} width={160} height={70} rx={20} fill={TEAL} />
							<Sx x={W - 110} y={98} text="K given" size={40} color="#fffdf8" anchor="middle" hand at={at + 6} />
						</>
					)}
					{ringK ? <Ring cx={W - 110} cy={85} rx={100} ry={50} at={ringK.at} out={ringK.out} color={AMBER} seed={9} /> : null}
				</g>
			) : null}
			{nextTag ? <Fade at={nextTag[0]} out={nextTag[1]}><rect x={W - 210} y={142} width={200} height={50} rx={25} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" /><Sx x={W - 110} y={177} text="next video" size={30} color={INK_SOFT} anchor="middle" hand at={nextTag[0]} /></Fade> : null}
			{tick !== undefined ? <Tick x={W - 36} y={30} at={tick} s={44} /> : null}
			{children}
		</g>
	);
};

/** A pen arrow along a cubic curve, with the head aligned to the end tangent. */
export const CurveArrow: React.FC<{d: [number, number][]; at: number; out?: number; dur?: number; color?: string; width?: number}> = ({d, at, out, dur = 22, color = AMBER_INK, width = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	const [p0, p1, p2, p3] = d;
	const path = `M${p0[0]},${p0[1]} C${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`;
	const a = Math.atan2(p3[1] - p2[1], p3[0] - p2[0]), hl = 22;
	const hx = (k: number) => p3[0] - Math.cos(a + k) * hl, hy = (k: number) => p3[1] - Math.sin(a + k) * hl;
	return (
		<g opacity={o}>
			<DrawPath d={path} at={at} dur={dur} color={color} width={width} />
			<path d={`M${hx(0.5)},${hy(0.5)} L${p3[0]},${p3[1]} L${hx(-0.5)},${hy(-0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + dur - 4, 8)} />
		</g>
	);
};

/** The E - I bracket: a "{" just right of a column, drawn up from the Equilibrium cell past the Initial cell;
 *  its tip points left into the Change cell between them, and the label sits on its right. */
export const EIBracket: React.FC<{x: number; yTop: number; yBot: number; at: number; out?: number; color?: string; label?: string; size?: number}> = ({x, yTop, yBot, at, out, color = AMBER_INK, label = 'E − I', size = 50}) => {
	const ym = (yTop + yBot) / 2;
	return (
		<Fade at={at} out={out}>
			<DrawPath d={`M${x + 16},${yBot} Q${x},${yBot} ${x},${yBot - 30} L${x},${ym + 18} Q${x},${ym} ${x - 20},${ym} Q${x},${ym} ${x},${ym - 18} L${x},${yTop + 30} Q${x},${yTop} ${x + 16},${yTop}`} at={at} dur={22} color={color} width={5} />
			<Sx x={x + 30} y={ym + size * 0.34} text={label} size={size} color={color} hand at={at + 16} />
		</Fade>
	);
};

/** The four-step type 2 rule chip; lines appear on their cues, `lit` lights one line at a time. */
export const RULE_LINES = ['Measured value into E.', 'Change = E − I.', 'Other changes from the coefficients.', 'Complete E = I + C.'];
export const RuleChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; ats: number[]; lit?: [number, number][]; size?: number; lh?: number; extra?: {text: string; at: number}; title?: string}> = ({x, y, w = 560, at, out, ats, lit = [], size = 34, lh = 46, extra, title = 'Type 2 order'}) => {
	const f = useCurrentFrame();
	const n = ats.filter(a => a < 99999).length + (extra ? 1 : 0);
	const h = 66 + n * lh + 10;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
			<Sx x={x + 24} y={y + 44} text={title} size={32} color={INK_SOFT} hand at={at} />
			{RULE_LINES.map((t, i) => {
				const ly = y + 66 + i * lh + lh * 0.62;
				const l = lit.find(q => q[0] === i);
				const glow = l ? prog(f, l[1], 10) * (1 - prog(f, l[1] + 70, 14)) : 0;
				return ats[i] < 99999 ? (
					<g key={i}>
						{glow > 0.01 ? <rect x={x + 10} y={ly - lh * 0.72} width={w - 20} height={lh - 4} rx={10} fill="#f6d77a" opacity={0.55 * glow} /> : null}
						<circle cx={x + 40} cy={ly - size * 0.32} r={17} fill={TEAL} opacity={prog(f, ats[i], 10)} />
						<Sx x={x + 40} y={ly - size * 0.32 + 9} text={String(i + 1)} size={24} color="#fffdf8" anchor="middle" at={ats[i]} />
						<Sx x={x + 70} y={ly} text={t} size={size} color={INK} hand at={ats[i]} />
					</g>
				) : null;
			})}
			{extra ? <Sx x={x + 70} y={y + 66 + 4 * lh + lh * 0.62} text={extra.text} size={size} color={TEAL} hand at={extra.at} /> : null}
		</Fade>
	);
};

/** Crossed ghost of a chip (used when a method step does not apply). */
export const CrossedGhost: React.FC<{x: number; y: number; w: number; text: string; at: number; out: number}> = ({x, y, w, text, at, out}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={64} rx={32} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
		<Sx x={x + w / 2} y={y + 44} text={text} size={36} color={INK_SOFT} anchor="middle" hand at={at} />
		<DrawPath d={`M${x + 20},${y + 52} L${x + w - 20},${y + 12}`} at={at + 14} dur={10} color={CROSS} width={7} />
	</Fade>
);
