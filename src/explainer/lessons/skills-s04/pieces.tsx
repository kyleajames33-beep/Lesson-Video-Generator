// S04 lesson-local pieces: VerdictStrip (verdict, criteria, evidence, verdict again; mini and full states), RoleTag
// (verdict, criterion, evidence, limitation tags beside answer rows), BalanceBeam (a coded beam that tips as weights
// land; an abstract diagram, no people or gavels) and BandLadder (mark bands with short criterion chips). Also the
// small icons and the verb card for scenes 2 and 15.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, Chip, DrawPath, GREY, GREY_FILL, GREY_INK, HI, INK, INK_SOFT, T, TEAL, TEAL_SOFT, chipW, clamp01, lerp, prog, smooth, vis, wrap,
} from './kit';

export const linesOf = (text: string, w: number, size: number, hand = true, weight = 700) => {
	const L = wrap(text, w, size, hand, weight);
	const out: string[] = Array.from({length: L.lines}, () => '');
	L.words.forEach(wd => { out[wd.line] = out[wd.line] ? out[wd.line] + ' ' + wd.t : wd.t; });
	return out;
};

// ---------- icons ----------
export type IconK = 'scale' | 'ruler' | 'lens' | 'parts' | 'dial' | 'struts';
/** Small coded icons (s = scale, nominal size about 60 px). */
export const Icon4: React.FC<{k: IconK; x: number; y: number; s?: number; color?: string; o?: number}> = ({k, x, y, s = 1, color, o = 1}) => {
	if (o <= 0.01) return null;
	const c = color ?? (k === 'scale' ? AMBER_INK : k === 'ruler' ? TEAL : INK);
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o} fill="none" stroke={c} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
			{k === 'scale' ? <><path d="M0,-24 L0,24 M-14,24 L14,24 M-28,-16 L28,-16" /><path d="M-28,-16 L-38,6 L-18,6 Z M28,-16 L18,6 L38,6 Z" /></> : null}
			{k === 'ruler' ? <><rect x={-30} y={-10} width={60} height={20} rx={3} />{[-20, -10, 0, 10, 20].map(t => <line key={t} x1={t} x2={t} y1={-10} y2={t % 20 === 0 ? 2 : -3} />)}</> : null}
			{k === 'lens' ? <><circle cx={-6} cy={-6} r={16} /><path d="M6,6 L24,24" strokeWidth={6} /></> : null}
			{k === 'parts' ? <><rect x={-30} y={-14} width={16} height={28} rx={3} /><rect x={-8} y={-14} width={16} height={28} rx={3} /><rect x={14} y={-14} width={16} height={28} rx={3} /><path d="M-14,0 L-8,0 M8,0 L14,0" /></> : null}
			{k === 'dial' ? <><path d="M-26,12 A26,26 0 0 1 26,12" /><path d="M0,12 L14,-10" strokeWidth={4} /><circle cx={0} cy={12} r={3} fill={c} /></> : null}
			{k === 'struts' ? <><rect x={-26} y={-24} width={52} height={18} rx={9} /><path d="M-14,-6 L-20,22 M14,-6 L20,22 M-26,22 L26,22" /></> : null}
		</g>
	);
};

// ---------- RoleTag ----------
export type Role = 'verdict' | 'criterion' | 'evidence' | 'limitation' | 'criterion + evidence' | 'verdict supported';
const ROLE_COL: Record<string, [string, string]> = {verdict: [AMBER_INK, '#fff8e6'], criterion: [TEAL, TEAL_SOFT], evidence: [INK, CARD], limitation: [GREY_INK, GREY_FILL]};
/** Small coloured tag beside an answer row (right-aligned at x by default). */
export const RoleTag: React.FC<{x: number; y: number; role: Role; at: number; out?: number; anchor?: 'start' | 'end'; size?: number}> = ({x, y, role, at, out, anchor = 'end', size = 20}) => {
	const [col, fill] = ROLE_COL[role.split(' ')[0]];
	return <Chip x={x} y={y} text={role} at={at} out={out} size={size} color={col} fill={fill} hand={false} anchor={anchor} />;
};

// ---------- VerdictStrip ----------
const VROWS = [
	{t: 'Verdict', sub: 'how good? how suitable?', k: 'scale' as IconK},
	{t: 'Criteria', sub: 'judged by what?', k: 'ruler' as IconK},
	{t: 'Evidence', sub: 'shown by which details?', k: 'lens' as IconK},
	{t: 'Verdict again', sub: 'linked to the weighing', k: 'scale' as IconK},
];
export type Box3 = {x: number; y: number; w: number};
/**
 * The judgement strip (s04 counterpart of the routine strip). rows[i] = frame row i appears (row 3 = "verdict
 * again"). `full(f)` 0 (mini) .. 1 (full). `lit` rows glow while spoken; `allLit` lights every shown row.
 */
export const VerdictStrip: React.FC<{rows: (number | undefined)[]; full?: (f: number) => number; fullBox?: Box3; miniBox: Box3; lit?: {row: number; from: number; to?: number}[]; allLit?: [number, number]; o?: number; title?: string}> = ({rows, full, fullBox, miniBox, lit = [], allLit, o = 1, title = 'A judgement answer'}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = full ? smooth(clamp01(full(f))) : 0;
	const FB = fullBox ?? miniBox;
	const fRowH = 104, mRowH = 58;
	const glow = (i: number) => Math.max(allLit ? vis(f, allLit[0], allLit[1], 10) : 0, ...lit.filter(l => l.row === i).map(l => vis(f, l.from, l.to, 10)), 0);
	const n = rows.filter((r, i) => r !== undefined && f >= r - 2 && i >= 0).length;
	return (
		<g opacity={o}>
			{k > 0.01 ? (
				<g opacity={k}>
					<rect x={FB.x} y={FB.y} width={FB.w} height={78 + Math.max(1, n) * fRowH} rx={20} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<T x={FB.x + 26} y={FB.y + 52} text={title} size={36} hand weight={700} color={AMBER_INK} />
				</g>
			) : null}
			{VROWS.map((r, i) => {
				const at = rows[i];
				if (at === undefined) return null;
				const ov = prog(f, at, 12);
				if (ov <= 0.01) return null;
				const x = lerp(miniBox.x, FB.x + 18, k), w = lerp(miniBox.w, FB.w - 36, k);
				const y = lerp(miniBox.y + i * mRowH, FB.y + 78 + i * fRowH, k), h = lerp(mRowH - 8, fRowH - 12, k);
				const g = glow(i);
				return (
					<g key={i} opacity={ov} transform={`translate(${(1 - smooth(prog(f, at, 14))) * 30},0)`}>
						{g > 0.01 ? <rect x={x - 5} y={y - 4} width={w + 10} height={h + 8} rx={14} fill={HI} opacity={0.6 * g} /> : null}
						<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<Icon4 k={r.k} x={x + lerp(30, 46, k)} y={y + h / 2} s={lerp(0.62, 0.95, k)} />
						<T x={x + lerp(62, 92, k)} y={y + lerp(h / 2 + 10, 42, k)} text={r.t} size={lerp(28, 38, k)} hand weight={700} color={INK} />
						<T x={x + 92} y={y + 76} text={r.sub} size={23} weight={600} color={GREY_INK} o={k} />
					</g>
				);
			})}
		</g>
	);
};
/** Screen y of the middle of row i in the mini strip. */
export const miniRowY = (b: Box3, i: number) => b.y + i * 58 + 25;

// ---------- BalanceBeam ----------
export type Weight = {side: -1 | 1; text: string; at: number; color?: string; fill?: string; w?: number};
/**
 * A coded beam on a stand. Left pan = side -1. Each weight tips the beam towards its pan by `w` degrees (default 6);
 * `settle` adds extra tilt at a frame (negative = towards the left pan).
 */
export const BalanceBeam: React.FC<{x: number; y: number; w: number; labels: [string, string]; weights?: Weight[]; settle?: {at: number; deg: number}[]; at: number; out?: number; o?: number; s?: number}> = ({x, y, w, labels, weights = [], settle = [], at, out, o = 1, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const draw = prog(f, at, 20);
	let deg = 0;
	weights.forEach(wt => { deg += wt.side * (wt.w ?? 4) * smooth(prog(f, wt.at + 6, 22)); });
	settle.forEach(st => { deg += st.deg * smooth(prog(f, st.at, 24)); });
	deg = Math.max(-12, Math.min(12, deg));
	const a = (deg * Math.PI) / 180;
	const end = (sg: -1 | 1): [number, number] => [x + sg * (w / 2) * Math.cos(a), y + sg * (w / 2) * Math.sin(a)];
	const hang = 100, panW = 108;
	const pan = (sg: -1 | 1, label: string) => {
		const [ex, ey] = end(sg);
		const py = ey + hang;
		const mine = weights.filter(wt => wt.side === sg);
		return (
			<g>
				<path d={`M${ex},${ey} L${ex - panW / 2 + 8},${py} M${ex},${ey} L${ex + panW / 2 - 8},${py}`} stroke={INK_SOFT} strokeWidth={2} fill="none" />
				<path d={`M${ex - panW / 2},${py} Q${ex},${py + 26} ${ex + panW / 2},${py}`} stroke={INK} strokeWidth={3.5} fill={CARD} />
				<T x={ex} y={py + 50} text={label} size={26} weight={700} color={INK} anchor="middle" />
				{mine.map((wt, k) => {
					const wo = prog(f, wt.at, 10);
					if (wo <= 0.01) return null;
					const drop = (1 - smooth(prog(f, wt.at, 14))) * -40;
					const cw = chipW(wt.text, 18, false) + 4;
					return (
						<g key={k} opacity={wo} transform={`translate(0,${drop})`}>
							<rect x={ex - cw / 2} y={py - 34 - k * 36} width={cw} height={30} rx={8} fill={wt.fill ?? TEAL_SOFT} stroke={wt.color ?? TEAL} strokeWidth={2.5} />
							<T x={ex} y={py - 13 - k * 36} text={wt.text} size={18} weight={700} color={wt.color ?? TEAL} anchor="middle" />
						</g>
					);
				})}
			</g>
		);
	};
	const [lx, ly] = end(-1), [rx, ry] = end(1);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			<path d={`M${x},${y} L${x},${y + 190} M${x - 60},${y + 190} L${x + 60},${y + 190}`} stroke={INK} strokeWidth={4} strokeLinecap="round" opacity={draw} />
			<path d={`M${x - 12},${y + 14} L${x},${y - 4} L${x + 12},${y + 14} Z`} fill={INK} opacity={draw} />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={draw} />
			<g opacity={prog(f, at + 10, 12)}>{pan(-1, labels[0])}{pan(1, labels[1])}</g>
		</g>
	);
};

// ---------- BandLadder ----------
export type Rung = {mark: string; crit: string; judge?: string; slot?: boolean};
/**
 * Mark bands top-down: a mark disc, a criterion chip and (where the band names one) an amber judgement chip. Rungs
 * draw from `at`; `lit` glows rungs; `under` underlines the judgement chips; `bracket` marks a rung range.
 */
export const BandLadder: React.FC<{x: number; y: number; rungs: Rung[]; at: number; rungH?: number; critW?: number; lit?: {rungs: number[]; from: number; to?: number}[]; under?: number; bracket?: {from: number; to: number; at: number; label: string}; o?: number}> = ({x, y, rungs, at, rungH = 104, critW = 520, lit = [], under, bracket, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const jx = x + 92 + critW + 22;
	const glow = (i: number) => Math.max(0, ...lit.filter(l => l.rungs.includes(i)).map(l => vis(f, l.from, l.to, 10)));
	return (
		<g opacity={o}>
			<line x1={x + 34} x2={x + 34} y1={y + 20} y2={y + 20 + (rungs.length - 1) * rungH * prog(f, at, 30)} stroke="rgba(60,45,20,0.2)" strokeWidth={6} strokeLinecap="round" />
			{rungs.map((r, i) => {
				const ry = y + i * rungH;
				const t0 = at + i * 8;
				const ro = prog(f, t0, 12);
				if (ro <= 0.01) return null;
				const g = glow(i);
				const cl = linesOf(r.crit, critW - 30, 24, false, 600);
				const jw = r.judge ? chipW(r.judge, 24, false) : 0;
				return (
					<g key={i} opacity={ro}>
						{g > 0.01 ? <rect x={x - 8} y={ry - 10} width={jx - x + (jw || 200) + 24} height={rungH - 12} rx={16} fill={HI} opacity={0.55 * g} /> : null}
						<circle cx={x + 34} cy={ry + 30} r={32} fill={CARD} stroke={INK} strokeWidth={3} />
						<T x={x + 34} y={ry + 40} text={r.mark} size={r.mark.length > 2 ? 20 : 28} weight={800} color={INK} anchor="middle" />
						<rect x={x + 92} y={ry} width={critW} height={cl.length * 30 + 22} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
						{cl.map((t, k) => <T key={k} x={x + 108} y={ry + 34 + k * 30} text={t} size={24} weight={600} color={INK} />)}
						{r.judge ? (
							<g opacity={prog(f, t0 + 6, 10)}>
								<rect x={jx} y={ry} width={jw} height={52} rx={14} fill="#fff8e6" stroke={AMBER} strokeWidth={3} />
								<T x={jx + 13} y={ry + 34} text={r.judge} size={24} weight={700} color={AMBER_INK} />
								{under !== undefined ? <DrawPath d={`M${jx + 10},${ry + 60} L${jx + jw - 10},${ry + 58}`} at={under + i * 6} dur={10} color={AMBER} width={5} /> : null}
							</g>
						) : r.slot ? <rect x={jx} y={ry} width={200} height={52} rx={14} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" opacity={0.7} /> : null}
					</g>
				);
			})}
			{bracket ? (() => {
				const bo = prog(f, bracket.at, 12);
				if (bo <= 0.01) return null;
				const bx = jx + 330, y0 = y + bracket.from * rungH, y1 = y + bracket.to * rungH + 52;
				return (
					<g opacity={bo}>
						<DrawPath d={`M${bx - 12},${y0} L${bx},${y0} L${bx},${y1} L${bx - 12},${y1}`} at={bracket.at} dur={14} color={AMBER_INK} width={4} cap="butt" />
						<T x={bx + 16} y={(y0 + y1) / 2 + 10} text={bracket.label} size={32} hand weight={700} color={AMBER_INK} />
					</g>
				);
			})() : null}
		</g>
	);
};

// ---------- verb card (scenes 2 and 15) ----------
export const VerbCard4: React.FC<{x: number; y: number; w: number; h: number; verb: string; body: string; icon: IconK; at: number; o?: number; lit?: [number, number]; size?: number; stamp?: number; because?: number}> = ({x, y, w, h, verb, body, icon, at, o = 1, lit, size = 28, stamp, because}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const enter = (1 - smooth(prog(f, at, 16))) * 30;
	const l = lit ? vis(f, lit[0], lit[1], 10) : 0;
	const ls = linesOf(body, w - 60, size, false, 500);
	const st = stamp === undefined ? 0 : prog(f, stamp, 10);
	return (
		<g opacity={v} transform={`translate(0,${enter})`}>
			{l > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={22} fill={HI} opacity={0.55 * l} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<Icon4 k={icon} x={x + 52} y={y + 50} s={1} />
			<T x={x + 100} y={y + 64} text={verb} size={48} hand weight={700} color={INK} />
			{ls.map((t, i) => <T key={i} x={x + 30} y={y + 118 + i * size * 1.3} text={t} size={size} weight={500} color={INK} o={prog(f, at + 10 + i * 6, 10)} />)}
			{st > 0.01 ? <g transform={`translate(${x + w - 52},${y + 46}) scale(${1 + 0.4 * (1 - st)})`} opacity={st}><circle r={32} fill="#fff8e6" stroke={AMBER} strokeWidth={3} /><Icon4 k="scale" x={0} y={2} s={0.75} /></g> : null}
			{because !== undefined ? <T x={x + 30} y={y + h - 22} text="because ..." size={30} hand weight={700} color={INK_SOFT} o={prog(f, because, 10)} /> : null}
		</g>
	);
};
