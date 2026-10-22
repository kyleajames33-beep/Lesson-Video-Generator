// Drawing parts for M6 G02 (weak acid practice: four HSC-style questions). Reuses C10 (and through it C08, C07 to C01:
// the board, task line, equation strip, ICE table, check ruler, Ka fraction, working lines, full meter, pH track,
// crossed chips, question text, countdown and key notes). New here (lesson-local):
// - QGroup: the question card group, full size during an attempt, shrunk to a strip for the walkthrough;
// - Checks: the three-check strip along the bottom ("what data?", "is x small?", "does it make sense?"), teal, dimming
//   to an outline during every countdown; HscTag and TypeBadge in the top-right corner;
// - AnsPanel: the dashed answer box whose rows write on their cues (rows can dim or pulse);
// - Fork: the two-reaction fork for an amphiprotic ion (a split-outlined ion, a "donates" arrow right and an "accepts"
//   arrow left, each with a pinned constant chip and a short label; either arrow can thicken);
// - PkaZoom: a zoomed pKa line (3.5 to 5.0) so the three close markers never collide;
// - MiniTrack: a short pH line for the 2.28 against 2.33 bracket.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, prog} from '../../kit';
import {BASE, BASE_INK, Fade, GREYT, GREY_INK, INK, INK_SOFT, NAVY, PROTON, PROTON_INK, Sx, TEAL, mw, smooth, vis} from '../chem-m6-c10/parts';
import {tw} from '../chem-m5-c05/parts';

export * from '../chem-m6-c10/parts';
export const GLOW = '#f6d77a';

// ---------- the question group ----------
/** Full size (k = 1) for an attempt; shrinks towards the top-left to scale k, animated from frame 0 when `anim`. */
export const QGroup: React.FC<{k: number; anim?: boolean; children: React.ReactNode}> = ({k, anim = false, children}) => {
	const f = useCurrentFrame();
	const s = anim ? 1 - (1 - k) * smooth(prog(f, 0, 22)) : k;
	return <g transform={`translate(100,${178}) scale(${s}) translate(-100,-178)`}>{children}</g>;
};
export const QBox: React.FC<{y?: number; h: number; at: number}> = ({y = 200, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);

// ---------- header pieces ----------
const HSC = 'HSC-style question, written for HSCScience';
export const HscTag: React.FC<{at: number; out?: number}> = ({at, out}) => {
	const w = tw(HSC, 26, true) + 44;
	return (
		<Fade at={at} out={out}>
			<rect x={1824 - w} y={30} width={w} height={48} rx={24} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
			<Sx x={1824 - w / 2} y={63} text={HSC} size={26} color={INK_SOFT} anchor="middle" hand at={at} />
		</Fade>
	);
};
/** Teal type badge under the HSC tag (hidden during every attempt, because it names the method). */
export const TypeBadge: React.FC<{text: string; at: number}> = ({text, at}) => {
	const w = tw(text, 30, true) + 48;
	return (
		<Fade at={at}>
			<rect x={1824 - w} y={92} width={w} height={50} rx={25} fill={TEAL} />
			<Sx x={1824 - w / 2} y={127} text={text} size={30} color="#fffdf8" anchor="middle" hand at={at} />
		</Fade>
	);
};

// ---------- the check strip (bottom) ----------
export const CHECKS = ['what data?', 'is x small?', 'does it make sense?'];
const STRIP_Y = 1004;
const pillW = (label: string) => tw(label, 26, true) + 62;
/** `ticks[i]`: frames at which row i ticks (earlier scenes pass -100). Dims to an outline during a hold. */
export const Checks: React.FC<{ticks?: Record<number, number[]>; at?: number; hold?: {startFrame: number; endFrame: number}; o?: number}> = ({ticks = {}, at = -100, hold, o: oo = 1}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (1 - 0.75 * dim) * oo;
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	const title = 'checks:';
	let x = 96 + tw(title, 28, true) + 18;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={96} y={STRIP_Y + 34} text={title} size={28} color={INK_SOFT} hand at={-1000} />
			{CHECKS.map((l, i) => {
				const px = x;
				const w = pillW(l);
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : '#fffdf8'} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.25)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill="#fffdf8" stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- answer boxes ----------
export const EmptyBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label?: string}> = ({x, y, w, h, at, label = 'answer'}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} strokeDasharray="10 7" />
		<Sx x={x + 20} y={y + 36} text={label} size={26} color={INK_SOFT} weight={700} at={-1000} />
	</Fade>
);
export type ARow = {t: string; at: number; color?: string; dim?: number; pulse?: number; size?: number; label?: string};
/** The answer panel: a dashed box with rows that write on their cues. `dimAll` greys every row. */
export const AnsPanel: React.FC<{x: number; y: number; w: number; h: number; rows: ARow[]; at?: number; lh?: number; size?: number; dimAll?: number; title?: string}> = ({x, y, w, h, rows, at = -100, lh = 52, size = 32, dimAll, title = 'answer'}) => {
	const f = useCurrentFrame();
	const da = dimAll === undefined ? 0 : prog(f, dimAll, 14);
	return (
		<Fade at={at}>
			<g opacity={1 - 0.6 * da}>
				<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} strokeDasharray="10 7" />
				<Sx x={x + 20} y={y + 34} text={title} size={24} color={INK_SOFT} weight={700} at={-1000} />
				{rows.map((r, i) => {
					const yy = y + 44 + (i + 0.75) * lh;
					const d = r.dim === undefined ? 0 : prog(f, r.dim, 14);
					const g = r.pulse === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - r.pulse) / 40)) * Math.PI));
					const s = r.size ?? size;
					return (
						<g key={i} opacity={1 - 0.6 * d}>
							{g > 0.01 ? <rect x={x + 10} y={yy - s * 1.0} width={w - 20} height={s * 1.35} rx={10} fill={GLOW} opacity={0.6 * g} /> : null}
							{r.label ? <Sx x={x + 20} y={yy} text={r.label} size={s} color={INK_SOFT} weight={700} at={r.at} /> : null}
							<Sx x={x + (r.label ? 20 + mw(r.label, s, false, 700) + 12 : 24)} y={yy} text={r.t} size={s} color={r.color ?? INK} weight={700} at={r.at} />
						</g>
					);
				})}
			</g>
		</Fade>
	);
};

// ---------- grey tag (a short author-style aside) ----------
export const GTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 28, anchor = 'start'}) => {
	const hand = !/[\^_]/.test(text);
	const s = hand ? size : size * 0.86;
	const w = mw(text, s, hand, 700) + 34;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y - s - 6} width={w} height={s + 22} rx={(s + 22) / 2} fill="#f3f1ec" stroke={GREYT} strokeWidth={2} />
			<Sx x={x0 + 17} y={y + 2} text={text} size={s} color={GREY_INK} hand={hand} weight={hand ? 700 : 600} at={at} />
		</Fade>
	);
};

// ---------- amphiprotic fork ----------
/** A thick-able arrow from (x1,y) to (x2,y). */
export const FArrow: React.FC<{x1: number; x2: number; y: number; at: number; color: string; thick?: number; o?: number}> = ({x1, x2, y, at, color, thick = 0, o = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 18));
	if (p <= 0.01 || o <= 0.01) return null;
	const w = 5 + 9 * thick;
	const xe = x1 + (x2 - x1) * p;
	const dir = Math.sign(x2 - x1);
	const hl = 22 + 10 * thick;
	return (
		<g opacity={o}>
			<line x1={x1} y1={y} x2={xe - dir * hl * 0.6} y2={y} stroke={color} strokeWidth={w} strokeLinecap="round" />
			<path d={`M${xe},${y} L${xe - dir * hl},${y - hl * 0.6} L${xe - dir * hl},${y + hl * 0.6} Z`} fill={color} />
		</g>
	);
};
/** A constant chip pinned above an arrow. */
export const KChip: React.FC<{cx: number; y: number; text: string; at: number; color: string; ink: string; o?: number}> = ({cx, y, text, at, color, ink, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const s = 30;
	const w = mw(text, s, false, 700) + 40;
	const drop = (1 - smooth(prog(f, at, 16))) * -24;
	return (
		<g opacity={v} transform={`translate(0,${drop})`}>
			<rect x={cx - w / 2} y={y - 32} width={w} height={48} rx={24} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
			<Sx x={cx} y={y + 2} text={text} size={s} color={ink} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
export type ForkSide = {draw: number; chip: string; chipAt: number; label: string; labelAt: number; thick?: number};
/** One amphiprotic ion: split outline (amber: can donate; violet: can accept), arrows right (donates) and left (accepts). */
export const Fork: React.FC<{cx: number; cy: number; ion: string; at: number; right: ForkSide; left: ForkSide; arm?: number; o?: number; grey?: number}> = ({cx, cy, ion, at, right, left, arm = 380, o = 1, grey = 0}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const g = grey;
	const s = 50;
	const bw = mw(ion, s, false, 800) + 56, bh = 86;
	const thR = right.thick === undefined ? 0 : smooth(prog(f, right.thick, 20));
	const thL = left.thick === undefined ? 0 : smooth(prog(f, left.thick, 20));
	const rc = g > 0.5 ? GREYT : PROTON, lc = g > 0.5 ? GREYT : BASE;
	const rx0 = cx + bw / 2 + 14, lx0 = cx - bw / 2 - 14;
	return (
		<g opacity={v}>
			<path d={`M${cx},${cy - bh / 2} L${cx + bw / 2 - 20},${cy - bh / 2} Q${cx + bw / 2},${cy - bh / 2} ${cx + bw / 2},${cy - bh / 2 + 20} L${cx + bw / 2},${cy + bh / 2 - 20} Q${cx + bw / 2},${cy + bh / 2} ${cx + bw / 2 - 20},${cy + bh / 2} L${cx},${cy + bh / 2}`} fill="#fffdf8" stroke={g > 0.5 ? GREYT : AMBER} strokeWidth={5} />
			<path d={`M${cx},${cy - bh / 2} L${cx - bw / 2 + 20},${cy - bh / 2} Q${cx - bw / 2},${cy - bh / 2} ${cx - bw / 2},${cy - bh / 2 + 20} L${cx - bw / 2},${cy + bh / 2 - 20} Q${cx - bw / 2},${cy + bh / 2} ${cx - bw / 2 + 20},${cy + bh / 2} L${cx},${cy + bh / 2}`} fill="#fffdf8" stroke={g > 0.5 ? GREYT : BASE} strokeWidth={5} />
			<Sx x={cx} y={cy + s * 0.34} text={ion} size={s} color={g > 0.5 ? GREY_INK : INK} anchor="middle" weight={800} at={-1000} />
			<FArrow x1={rx0} x2={rx0 + arm} y={cy} at={right.draw} color={rc} thick={thR} />
			<FArrow x1={lx0} x2={lx0 - arm} y={cy} at={left.draw} color={lc} thick={thL} />
			<KChip cx={rx0 + arm / 2} y={cy - 40} text={right.chip} at={right.chipAt} color={rc} ink={g > 0.5 ? GREY_INK : PROTON_INK} />
			<KChip cx={lx0 - arm / 2} y={cy - 40} text={left.chip} at={left.chipAt} color={lc} ink={g > 0.5 ? GREY_INK : BASE_INK} />
			<Sx x={rx0 + 6} y={cy + 62} text={right.label} size={32} color={g > 0.5 ? GREY_INK : PROTON_INK} anchor="start" weight={700} at={right.labelAt} />
			<Sx x={lx0 - 6} y={cy + 62} text={left.label} size={32} color={g > 0.5 ? GREY_INK : BASE_INK} anchor="end" weight={700} at={left.labelAt} />
		</g>
	);
};

// ---------- zoomed pKa line ----------
export type ZMark = {p: number; name: string; at: number; color?: string; above?: boolean};
export const PkaZoom: React.FC<{x0: number; x1: number; y: number; at: number; marks: ZMark[]; lo?: number; hi?: number; o?: number}> = ({x0, x1, y, at, marks, lo = 3.5, hi = 5.0, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const X = (p: number) => x0 + ((p - lo) / (hi - lo)) * (x1 - x0);
	const ticks = [3.5, 4.0, 4.5, 5.0];
	return (
		<g opacity={v}>
			<line x1={x0} y1={y} x2={x0 + (x1 - x0) * smooth(prog(f, at, 18))} y2={y} stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />
			<Sx x={x0 - 14} y={y + 9} text="pKa" size={26} color={NAVY} anchor="end" weight={800} at={-1000} />
			{ticks.map(t => (
				<g key={t}>
					<line x1={X(t)} y1={y - 8} x2={X(t)} y2={y + 8} stroke={INK_SOFT} strokeWidth={2} />
					<Sx x={X(t)} y={y + 36} text={t.toFixed(1)} size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			{marks.map((m, i) => {
				const mo = prog(f, m.at, 12);
				if (mo <= 0.01) return null;
				const col = m.color ?? GREYT;
				const up = m.above ?? true;
				return (
					<g key={i} opacity={mo}>
						<path d={`M${X(m.p) - 10},${y - 22} L${X(m.p) + 10},${y - 22} L${X(m.p)},${y - 4} Z`} fill={col} />
						<Sx x={X(m.p)} y={up ? y - 34 : y + 66} text={m.name} size={24} color={col === GREYT ? GREY_INK : col} anchor="middle" weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- short pH line (2.20 to 2.40) ----------
export const MiniTrack: React.FC<{x0: number; x1: number; y: number; at: number; a: number; b: number; lo: number; hi: number; text: string}> = ({x0, x1, y, at, a, b, lo, hi, text}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const X = (p: number) => x0 + ((p - lo) / (hi - lo)) * (x1 - x0);
	return (
		<g opacity={v}>
			<line x1={x0} y1={y} x2={x1} y2={y} stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />
			<Sx x={x0 - 14} y={y + 9} text="pH" size={26} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			<path d={`M${X(a) - 10},${y - 22} L${X(a) + 10},${y - 22} L${X(a)},${y - 4} Z`} fill={GREYT} />
			<Sx x={X(a)} y={y - 34} text={a.toFixed(2)} size={30} color={GREY_INK} anchor="middle" weight={700} at={-1000} />
			<path d={`M${X(b) - 12},${y - 24} L${X(b) + 12},${y - 24} L${X(b)},${y - 4} Z`} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
			<Sx x={X(b)} y={y - 36} text={b.toFixed(2)} size={32} color={PROTON_INK} anchor="middle" weight={800} at={-1000} />
			<DrawPath d={`M${X(a)},${y + 16} L${X(a)},${y + 28} L${X(b)},${y + 28} L${X(b)},${y + 16}`} at={at + 6} dur={12} color={AMBER_INK} width={4} />
			<Sx x={(X(a) + X(b)) / 2} y={y + 64} text={text} size={30} color={AMBER_INK} anchor="middle" hand at={at + 12} />
		</g>
	);
};

/** A small grey cross (marks a wrong marker). */
export const SmallCross: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 16}) => (
	<>
		<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={GREYT} width={5} />
		<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 5} dur={8} color={GREYT} width={5} />
	</>
);
export const useVis = (at: number, out?: number) => vis(useCurrentFrame(), at, out, 12);
