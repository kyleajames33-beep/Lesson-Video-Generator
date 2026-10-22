// Drawing parts for M6 P07 (analysing a household substance: vinegar). One visual system with P02 to P06 and, through
// them, C01 to C16 (re-exported from P06): the C12 burette rig, titre table, concordance strip and mole bridge; the C07
// volumetric pipette and flask fill; the C05 meter with a movable coded probe and the C07 full meter; the P03 buffer
// bottle; the P02 risk table and cards; P06's step card, error chain and four-column titre table. New here:
// - BurCounter: a row of coded burette outlines that fill one after another (how many 50 mL burettes a titre needs);
// - ScaleBar: an arched arrow that carries "× 10" from the aliquot's concentration back to the bottle;
// - CompareBars: the label comparison bar (label grey, measured amber, with a bracket for the difference);
// - SpreadLens: the dilution lens (the same twelve amber acid dots spread through a bigger volume);
// - ResultRow: a report row with a coloured left rule (pH violet, amount amber);
// - Rise: coded NH3 dots rising out of an open beaker.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {Fade, GREYX, INK, INK_SOFT, LensFrame, Sx, clamp01, lerp, mw, smooth, vis} from '../chem-m6-p06/parts';

export * from '../chem-m6-p06/parts';

export const AMB = '#b07a12';
export const AMB_SOFT = '#e7c27a';
export const PHV = '#6f55a3';
export const VINT = '#efdca6';

// ---------- burette fill counter ----------
/** n coded burette outlines; fill(f) = how many burettes are used (e.g. 3.35). */
export const BurCounter: React.FC<{x: number; y: number; n: number; fill: (f: number) => number; at: number; out?: number; h?: number; w?: number; gap?: number; o?: number; color?: string}> = ({x, y, n, fill, at, out, h = 190, w = 30, gap = 34, o = 1, color = '#7f9cc8'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const F = fill(f);
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const bx = x + i * (w + gap);
				const q = clamp01(F - i);
				const show = prog(f, at + i * 3, 10);
				return (
					<g key={i} opacity={show}>
						{q > 0.001 ? <rect x={bx + 3} y={y + h * (1 - q)} width={w - 6} height={h * q} fill={color} opacity={0.75} /> : null}
						<rect x={bx} y={y} width={w} height={h} rx={5} fill="none" stroke={INK_SOFT} strokeWidth={3.5} />
						<path d={`M${bx + w / 2 - 4},${y + h} L${bx + w / 2 - 4},${y + h + 26} L${bx + w / 2},${y + h + 40} L${bx + w / 2 + 4},${y + h + 26} L${bx + w / 2 + 4},${y + h}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- scale bar ----------
/** An arched arrow from (x1, y) to (x2, y), rising by `lift`, with a label at the top. */
export const ScaleBar: React.FC<{x1: number; x2: number; y: number; lift?: number; text: string; at: number; out?: number; color?: string; size?: number; sub?: string}> = ({x1, x2, y, lift = 90, text, at, out, color = '#0d6b52', size = 36, sub}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const mx = (x1 + x2) / 2, my = y - lift;
	const dir = x2 > x1 ? 1 : -1;
	const g = prog(f, at + 14, 8);
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y} Q${mx},${my - lift * 0.6} ${x2},${y}`} at={at} dur={16} color={color} width={5} />
			<path d={`M${x2 - dir * 20},${y - 16} L${x2},${y} L${x2 - dir * 4},${y - 22}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={g} />
			<Sx x={mx} y={y - lift * 0.8 - 16 - (sub ? size * 0.72 + 8 : 0)} text={text} size={size} color={color} anchor="middle" weight={800} at={at + 8} />
			{sub ? <Sx x={mx} y={y - lift * 0.8 - 14} text={sub} size={size * 0.72} color={INK_SOFT} anchor="middle" weight={600} at={at + 14} /> : null}
		</g>
	);
};

// ---------- label comparison bars ----------
export const CompareBars: React.FC<{x: number; y: number; k: number; a: number; b: number; labA: string; labB: string; at: number; atB: number; brk?: number; brkText?: string; size?: number; out?: number}> = ({x, y, k, a, b, labA, labB, at, atB, brk, brkText, size = 30, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const ga = smooth(prog(f, at, 20)), gb = smooth(prog(f, atB, 20));
	const bh = 44;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={a * k * ga} height={bh} rx={8} fill={GREYX} opacity={0.55} />
			<Sx x={x} y={y - 12} text={labA} size={size} color={INK_SOFT} weight={700} at={at} />
			<g opacity={prog(f, atB, 10)}>
				<rect x={x} y={y + 110} width={b * k * gb} height={bh} rx={8} fill={AMB_SOFT} stroke={AMB} strokeWidth={3} />
				<Sx x={x} y={y + 98} text={labB} size={size} color={AMB} weight={800} at={atB} />
			</g>
			{brk !== undefined ? (
				<Fade at={brk}>
					<line x1={x + a * k} y1={y - 4} x2={x + a * k} y2={y + 110 + bh + 4} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 6" />
					<DrawPath d={`M${x + a * k},${y + 110 + bh + 18} L${x + a * k},${y + 110 + bh + 28} L${x + b * k},${y + 110 + bh + 28} L${x + b * k},${y + 110 + bh + 18}`} at={brk} dur={10} color={AMB} width={4} />
					{brkText ? <Sx x={x + b * k + 16} y={y + 110 + bh + 36} text={brkText} size={size * 0.9} color={AMB} weight={700} at={brk + 4} /> : null}
				</Fade>
			) : null}
		</g>
	);
};

// ---------- dilution lens ----------
const DOTS: [number, number][] = [[-0.12, -0.1], [0.05, -0.16], [0.16, -0.02], [-0.02, 0.02], [-0.16, 0.08], [0.1, 0.12], [-0.06, 0.18], [0.2, 0.2], [-0.2, -0.05], [0.0, -0.3], [-0.1, 0.32], [0.22, -0.2]];
export const SpreadLens: React.FC<{cx: number; cy: number; r: number; at: number; spread: number; out?: number; title?: string}> = ({cx, cy, r, at, spread, out, title}) => {
	const f = useCurrentFrame();
	const s = smooth(prog(f, spread, 40));
	const box = lerp(0.36, 0.86, s);
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#f6fbfe" />
			<rect x={cx - box * r} y={cy - box * r} width={2 * box * r} height={2 * box * r} rx={14} fill="#dcebf6" stroke="#8fb9d8" strokeWidth={3} strokeDasharray={s > 0.02 ? '10 7' : undefined} />
			{DOTS.map(([u, v], i) => {
				const k = lerp(1, 2.5, s);
				return <circle key={i} cx={cx + u * r * k} cy={cy + v * r * k} r={r * 0.07} fill={AMB_SOFT} stroke={AMB} strokeWidth={2.5} />;
			})}
		</LensFrame>
	);
};

// ---------- a report row ----------
export const ResultRow: React.FC<{x: number; y: number; text: string; color: string; at: number; size?: number; o?: number}> = ({x, y, text, color, at, size = 36, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y - size * 1.0} width={8} height={size * 1.35} rx={4} fill={color} />
			<Sx x={x + 26} y={y} text={text} size={size} color={color} weight={800} at={-1000} />
		</g>
	);
};

// ---------- NH3 escaping from an open beaker ----------
export const Rise: React.FC<{x: number; y: number; w: number; at: number; out?: number}> = ({x, y, w, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{Array.from({length: 6}, (_, i) => {
				const q = (((f - at) / 50 + i / 6) % 1 + 1) % 1;
				const px = x + w * (0.2 + 0.12 * i) + Math.sin((f + i * 20) / 9) * 8;
				return (
					<g key={i} opacity={Math.sin(q * Math.PI)}>
						<circle cx={px} cy={y - q * 150} r={11} fill="#c9d6f0" stroke="#3c5f93" strokeWidth={2} />
						<Sx x={px} y={y - q * 150 + 5} text="NH_3" size={11} color="#3c5f93" anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const textW = (t: string, size: number, weight = 700) => mw(t, size, false, weight);
void INK;
