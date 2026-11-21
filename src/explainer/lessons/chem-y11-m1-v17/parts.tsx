// Drawing parts for Y11 Chem M1 V17 (radiation from unstable isotopes). Reuses the V16 parts (and through them the
// V13, V10, V08 and V01 chains: text, chips, framed answers, pen marks, plates, photons, the nucleon cluster, the
// shell atom, the burst) read-only. New here:
// - Nuc: a big nucleon cluster with an optional excited glow and flicker (v08's red and slate nucleons);
// - AlphaClu: an alpha particle (2 protons + 2 neutrons with an orange outline); BetaDot: a small blue electron;
// - RadCard: the particle card (name and symbol at 52 px, rows at 44 px arriving on cue);
// - Change: the "change in the nucleus" counters (protons and neutrons tick from 0 on cue);
// - Band: a small neutrons-against-protons sketch with its band and one off-band point (v08's sketch, small);
// - PenDiagram: the HSC penetration diagram (source, paper, aluminium, lead; tracks drawn from chance runs);
// - IonMark: an ionised atom left on a track; Detector: the coded camera bar; Chamber: the smoke-alarm chamber cutaway.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {runTrials} from '../../sims/chance';
import type {ChanceRun} from '../../sims/chance';
import {INK, Nucleus, PAPER, Plate, Rich, Sx, clamp01, lerp, prog, richW, smooth, vis} from '../chem-y11-m1-v16/parts';
import {ABS, AL_P, IONS_PER_100, LEAD_P, PAPER_P, PEN, POT, RAD, pw, sgn} from './common';
import type {RKey} from './common';

export * from '../chem-y11-m1-v16/parts';

export const P_RED = '#d24a3c', P_INK = '#a8322a', N_SLATE = '#9aa3ad', N_INK = '#4f5862', E_BLUE = '#2f6fd0', E_INK = '#1f4f9e';
export const ORANGE = RAD.alpha.fill, ORANGE_T = RAD.alpha.ink, BLUE = RAD.beta.fill, BLUE_T = RAD.beta.ink, VIOLET = RAD.gamma.fill, VIOLET_T = RAD.gamma.ink;
export const NAT_T = '#2f8a5b', HUM_T = '#12827b';

// ---------- the big nucleus ----------
/** Outer radius of a v08 nucleon cluster of t nucleons with nucleon radius r. */
export const nucR = (t: number, r: number) => 2 * r * 0.56 * Math.sqrt(t - 1 + 0.3) + r;
/** Nucleon radius that gives a cluster of t nucleons the outer radius R. */
export const rFor = (t: number, R: number) => R / (1.12 * Math.sqrt(t - 0.7) + 1);
export const Nuc: React.FC<{cx: number; cy: number; p: number; n: number; r: number; glow?: number; flick?: number; o?: number}> = ({cx, cy, p, n, r, glow = 0, flick = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const R = nucR(p + n, r);
	const s = 1 + 0.035 * flick * Math.sin(f * 1.7);
	return (
		<g opacity={o}>
			{glow > 0.005 ? <circle cx={cx} cy={cy} r={R * 1.28} fill="#ead9ff" stroke="#b89ae6" strokeWidth={4} opacity={glow} /> : null}
			<g transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}><Nucleus cx={cx} cy={cy} p={p} n={n} r={r} /></g>
		</g>
	);
};

// ---------- particles ----------
export const AlphaClu: React.FC<{x: number; y: number; r: number; o?: number}> = ({x, y, r, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r * 2.25} fill="#fde3c4" stroke={ORANGE} strokeWidth={Math.max(3, r * 0.18)} />
		{[[-0.55, -0.55, 1], [0.55, -0.55, 0], [-0.55, 0.55, 0], [0.55, 0.55, 1]].map(([dx, dy, pr], i) => <circle key={i} cx={x + dx * r * 1.7} cy={y + dy * r * 1.7} r={r} fill={pr ? P_RED : N_SLATE} stroke={pr ? P_INK : N_INK} strokeWidth={Math.max(1.2, r * 0.14)} />)}
	</g>
));
export const BetaDot: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 12, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={E_BLUE} stroke={E_INK} strokeWidth={2.5} />
		<line x1={x - r * 0.45} x2={x + r * 0.45} y1={y} y2={y} stroke="#fff" strokeWidth={Math.max(2, r * 0.22)} strokeLinecap="round" />
	</g>
));
/** A particle that flies from a to b, starting at `at`, over `d` frames (eased); stays at b. */
export const flyPt = (f: number, a: [number, number], b: [number, number], at: number, d: number): [number, number] => {
	const t = smooth(clamp01((f - at) / d));
	return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
};

// ---------- the particle card ----------
export type CardRow = {label: string; value: string; at: number};
export const RadCard: React.FC<{x: number; y: number; w: number; k: RKey; at: number; rows: CardRow[]; out?: number; o?: number; size?: number; minLines?: number}> = ({x, y, w, k, at, rows, out, o = 1, size = 44, minLines = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.005) return null;
	const R = RAD[k];
	const lh = size * 1.3;
	// a row whose value does not fit on its label's line carries it on a second line
	// labels show from the card's first frame; each value arrives on its cue
	const lines: {segs: {t: string; c?: string; at?: number}[]}[] = [];
	rows.forEach(r => {
		if (richW([{t: `${r.label}: ${r.value}`}], size) <= w - 56) lines.push({segs: [{t: `${r.label}: `}, {t: r.value, c: R.ink, at: r.at}]});
		else { lines.push({segs: [{t: `${r.label}:`}]}); lines.push({segs: [{t: r.value, c: R.ink, at: r.at}]}); }
	});
	const h = 104 + Math.max(minLines, lines.length) * lh + 10;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={PAPER} stroke={R.fill} strokeWidth={5} />
			<Sx x={x + 28} y={y + 68} text={`${R.name} (${R.sym})`} size={52} color={R.ink} weight={800} at={-1000} />
			{lines.map((l, i) => {
				let xx = x + 28;
				return l.segs.map((sg, k) => {
					const x0 = xx;
					xx += richW([{t: sg.t}], size);
					return <Rich key={`${i}-${k}`} x={x0} y={y + 104 + (i + 0.78) * lh} segs={[{t: sg.t, c: sg.c}]} size={size} weight={800} at={sg.at ?? -1000} />;
				});
			})}
		</g>
	);
};

// ---------- change-in-the-nucleus counters ----------
export const Change: React.FC<{x: number; y: number; w: number; dP: number; dN: number; atP: number; atN: number; o?: number; hiP?: number}> = ({x, y, w, dP, dN, atP, atN, o = 1, hiP}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const pv = f >= atP ? dP : 0, nv = f >= atN ? dN : 0;
	const pop = (at: number) => 1 + 0.14 * Math.sin(Math.PI * clamp01((f - at) / 12)) * (f >= at ? 1 : 0);
	const hi = hiP !== undefined ? prog(f, hiP, 10) : 0;
	const box = (yy: number, label: string, val: number, color: string, at: number) => {
		const cx = x + w - 92, cy = yy - 16;
		return (
			<g>
				<Sx x={x + 26} y={yy} text={label} size={44} color={color} weight={800} at={-1000} />
				<g transform={`translate(${cx},${cy}) scale(${pop(at)}) translate(${-cx},${-cy})`}>
					<rect x={x + w - 176} y={yy - 52} width={152} height={72} rx={14} fill={PAPER} stroke={color} strokeWidth={4} />
					<Sx x={cx} y={yy + 2} text={sgn(val)} size={52} color={color} anchor="middle" weight={800} at={-1000} />
				</g>
			</g>
		);
	};
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={236} rx={20} fill={PAPER} stroke={INK} strokeWidth={4} />
			{hi > 0.005 ? <rect x={x + 10} y={y + 74} width={w - 20} height={76} rx={14} fill="#fbe3df" opacity={hi} /> : null}
			<Sx x={x + 26} y={y + 50} text="change in the nucleus" size={34} color={INK} weight={800} at={-1000} />
			{box(y + 128, 'protons', pv, P_INK, atP)}
			{box(y + 208, 'neutrons', nv, N_INK, atN)}
		</g>
	);
};

// ---------- small neutrons-against-protons sketch (v08's band, small) ----------
export type BandG = {x: number; y: number; w: number; h: number};
const bandN = (z: number) => (z <= 20 ? z : z + 0.01145 * (z - 20) * (z - 20));
export const bandXY = (g: BandG, z: number, n: number): [number, number] => [g.x + (z / 90) * g.w, g.y + g.h - (n / 150) * g.h];
/** The band of stability with an optional off-band point (z, n). */
export const Band: React.FC<{g: BandG; pt?: [number, number]; ptAt?: number; o?: number; labels?: boolean}> = ({g, pt, ptAt = -1000, o = 1, labels = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const pts: string[] = [];
	for (let z = 0; z <= 88; z += 2) { const [x, y] = bandXY(g, z, bandN(z)); pts.push(`${x.toFixed(1)},${y.toFixed(1)}`); }
	const [px, py] = pt ? bandXY(g, pt[0], pt[1]) : [0, 0];
	const pp = prog(f, ptAt, 10);
	return (
		<g opacity={o}>
			<path d={`M${g.x},${g.y - 6} L${g.x},${g.y + g.h} L${g.x + g.w + 6},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={4} />
			<polyline points={pts.join(' ')} fill="none" stroke="#d18f1f" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" opacity={0.9} />
			{labels ? <>
				<Sx x={g.x + g.w} y={g.y + g.h + 36} text="protons" size={30} color={INK} anchor="end" weight={700} at={-1000} />
				<Sx x={g.x + 12} y={g.y - 14} text="neutrons" size={30} color={INK} weight={700} at={-1000} />
				<Sx x={g.x + g.w * 0.36} y={g.y + g.h * 0.86} text="band of stability" size={30} color="#9c5a00" weight={800} at={-1000} />
			</> : null}
			{pt && pp > 0.005 ? <circle cx={px} cy={py} r={13} fill={P_RED} stroke={INK} strokeWidth={3} opacity={pp} /> : null}
		</g>
	);
};

// ---------- ionised atom mark ----------
export const IonMark: React.FC<{x: number; y: number; r?: number; o?: number; color?: string}> = ({x, y, r = 9, o = 1, color = INK}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fff" stroke={color} strokeWidth={2.5} />
		<path d={`M${x - r * 0.55},${y} L${x + r * 0.55},${y} M${x},${y - r * 0.55} L${x},${y + r * 0.55}`} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
	</g>
));

// ---------- the penetration diagram ----------
export const OUT: string[] = ['in the paper', 'in the aluminium', 'in the lead', 'through the lead'];
export const penRun = (k: RKey): ChanceRun => runTrials({seed: PEN[k].seed, trials: PEN[k].trials, experiment: {kind: 'weighted', outcomes: OUT.map((label, i) => ({label, weight: PEN[k].w[i]}))}});
export const RUNS: Record<RKey, ChanceRun> = {alpha: penRun('alpha'), beta: penRun('beta'), gamma: penRun('gamma')};
/** Geometry: source box at x0, absorbers at ax (left faces) with widths aw, the lanes' y values and the end x. */
export type PenG = {x0: number; srcW: number; ax: [number, number, number]; aw: [number, number, number]; top: number; bot: number; lanes: Record<RKey, number>; end: number; thumb?: number};
/** x where a particle of outcome i stops (inside its absorber, or the end of the frame for "through"). */
export const stopX = (g: PenG, i: number) => (i < 3 ? g.ax[i] + Math.min(g.aw[i] * 0.5, 10) + (i === 2 ? g.aw[2] * 0.25 : 0) : g.end);
const jit = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
/** Frames each trial takes to fly (constant speed across the board). */
export const FLY = 22;
export type Pace = {at: number; every: number};
/** Trial start frames for a run at a fixed pace. */
export const starts = (k: RKey, p: Pace) => Array.from({length: RUNS[k].trials}, (_, i) => p.at + i * p.every);
/** Counts landed by frame f for a run (outcome tallies of the trials whose particle has arrived). */
export const landed = (k: RKey, p: Pace, f: number) => {
	const run = RUNS[k], c = [0, 0, 0, 0];
	let sent = 0;
	starts(k, p).forEach((t, i) => { if (f >= t) sent++; if (f >= t + FLY) c[run.outcome[i]]++; });
	return {sent, c};
};
export const Absorbers: React.FC<{g: PenG; o?: number; thumbs?: boolean; labelSize?: number; src?: boolean}> = ({g, o = 1, thumbs = true, labelSize = 34, src = true}) => {
	if (o <= 0.005) return null;
	const fills = ['#fbfaf5', '#c9ced6', '#7d838c'];
	const strokes = [INK, '#4f5862', '#2c3138'];
	const plates = [PAPER_P, AL_P, LEAD_P];
	const th = g.thumb ?? 170;
	return (
		<g opacity={o}>
			{src ? <>
				<rect x={g.x0} y={(g.top + g.bot) / 2 - 70} width={g.srcW} height={140} rx={12} fill="#e8e4da" stroke={INK} strokeWidth={4} />
				<Sx x={g.x0 + g.srcW / 2} y={(g.top + g.bot) / 2 + 12} text="source" size={Math.max(28, labelSize)} color={INK} anchor="middle" weight={800} at={-1000} />
			</> : null}
			{ABS.map((a, i) => (
				<g key={a.key}>
					<rect x={g.ax[i]} y={g.top} width={g.aw[i]} height={g.bot - g.top} rx={4} fill={fills[i]} stroke={strokes[i]} strokeWidth={4} />
					<Sx x={g.ax[i] + g.aw[i] / 2} y={g.bot + labelSize + 8} text={a.label} size={labelSize} color={INK} anchor="middle" weight={800} at={-1000} />
					{thumbs ? (() => {
						const p = plates[i], h = i === 2 ? th * 0.42 : th, w = pw(p, h);
						return <Plate p={p} x={g.ax[i] + g.aw[i] / 2 - w / 2} y={g.top - 26 - h} h={h} />;
					})() : null}
				</g>
			))}
		</g>
	);
};
/** One run on the diagram: particles flying along a lane, stopped marks at their absorber, surviving gamma tracks. */
export const PenRun: React.FC<{g: PenG; k: RKey; p: Pace; o?: number; spread?: number}> = ({g, k, p, o = 1, spread = 34}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const run = RUNS[k], R = RAD[k], y0 = g.lanes[k];
	const sx = g.x0 + g.srcW;
	const out: React.ReactNode[] = [];
	starts(k, p).forEach((t, i) => {
		if (f < t) return;
		const oc = run.outcome[i];
		const yy = y0 + (jit(i, 3) - 0.5) * spread;
		const x1 = stopX(g, oc);
		const u = clamp01((f - t) / FLY);
		const x = lerp(sx, x1, u);
		const done = u >= 1;
		if (oc === 3) {
			// a surviving gamma ray: a thin solid track that stays
			out.push(<line key={'t' + i} x1={sx} y1={yy} x2={x} y2={yy} stroke={R.fill} strokeWidth={done ? 3 : 4} strokeLinecap="round" opacity={done ? 0.9 : 1} />);
			return;
		}
		if (!done) {
			out.push(k === 'gamma'
				? <line key={'m' + i} x1={Math.max(sx, x - 60)} y1={yy} x2={x} y2={yy} stroke={R.fill} strokeWidth={4} strokeLinecap="round" />
				: <circle key={'m' + i} cx={x} cy={yy} r={k === 'alpha' ? 11 : 7} fill={R.fill} stroke={R.ink} strokeWidth={2} />);
		} else {
			out.push(<circle key={'s' + i} cx={x1 - 4 + jit(i, 7) * 8} cy={yy} r={k === 'alpha' ? 8 : 6} fill={R.fill} stroke={R.ink} strokeWidth={2} />);
		}
	});
	return <g opacity={o}>{out}</g>;
};
/** The lane's guide track (solid, in the radiation colour) from the source to where most of the run stops. */
export const Lane: React.FC<{g: PenG; k: RKey; at: number; o?: number}> = ({g, k, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * o;
	if (v <= 0.005) return null;
	const R = RAD[k], y = g.lanes[k], sx = g.x0 + g.srcW;
	const x1 = k === 'alpha' ? stopX(g, 0) : k === 'beta' ? stopX(g, 1) : g.ax[2] + g.aw[2];
	return (
		<g opacity={v}>
			<line x1={sx} y1={y} x2={x1} y2={y} stroke={R.fill} strokeWidth={k === 'gamma' ? 7 : 9} strokeLinecap="round" opacity={0.35} />
			{k === 'gamma' ? <line x1={x1} y1={y} x2={g.end} y2={y} stroke={R.fill} strokeWidth={3} strokeLinecap="round" opacity={0.9} /> : null}
		</g>
	);
};
/** Ionisation trail along a lane: ions per 100 px from the data table, revealed left to right from `at`. */
export const Trail: React.FC<{g: PenG; k: RKey; at: number; o?: number}> = ({g, k, at, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.005) return null;
	const y = g.lanes[k], sx = g.x0 + g.srcW;
	const x1 = k === 'alpha' ? stopX(g, 0) : k === 'beta' ? stopX(g, 1) : g.end;
	const n = Math.max(1, Math.round(((x1 - sx) / 100) * IONS_PER_100[k]));
	const rev = clamp01((f - at) / 24);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const x = sx + ((i + 0.5) / n) * (x1 - sx - 6);
				const xr = (x - sx) / Math.max(1, x1 - sx);
				return xr <= rev ? <IonMark key={i} x={x} y={y - 30 + (i % 2) * 60} r={10} color={RAD[k].ink} /> : null;
			})}
		</g>
	);
};
/** Number of ions on a lane's trail (for the readouts). */
export const trailN = (g: PenG, k: RKey) => {
	const sx = g.x0 + g.srcW, x1 = k === 'alpha' ? stopX(g, 0) : k === 'beta' ? stopX(g, 1) : g.end;
	return Math.max(1, Math.round(((x1 - sx) / 100) * IONS_PER_100[k]));
};

// ---------- detector bar and chamber cutaway ----------
export const Detector: React.FC<{x: number; y: number; w: number; h: number; hit?: number; o?: number}> = ({x, y, w, h, hit = 0, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={10} fill="#d9dde3" stroke={INK} strokeWidth={4} />
		<rect x={x + 10} y={y + 12} width={w - 20} height={h - 24} rx={6} fill="#3a3f47" />
		{hit > 0.005 ? <rect x={x + 10} y={y + 12} width={w - 20} height={h - 24} rx={6} fill={VIOLET} opacity={0.55 * hit} /> : null}
	</g>
));
export const Chamber: React.FC<{x: number; y: number; w: number; h: number; tracksAt: number; ionAt: number; o?: number}> = ({x, y, w, h, tracksAt, ionAt, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const srcX = x + 30, cy = y + h / 2;
	const tr = [-0.32, -0.12, 0.1, 0.3];
	const reach = 0.34 * w;
	const air = Array.from({length: 22}, (_, i) => [x + 70 + jit(i, 1) * (w - 110), y + 40 + jit(i, 2) * (h - 80)] as [number, number]);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#f4f1ea" stroke={INK} strokeWidth={4} />
			<rect x={x + 8} y={y + 10} width={w - 16} height={14} rx={4} fill="#b7bcc4" stroke={INK} strokeWidth={2} />
			<rect x={x + 8} y={y + h - 24} width={w - 16} height={14} rx={4} fill="#b7bcc4" stroke={INK} strokeWidth={2} />
			<rect x={srcX - 14} y={cy - 34} width={28} height={68} rx={6} fill={ORANGE} stroke={ORANGE_T} strokeWidth={3} />
			{air.map(([ax, ay], i) => <circle key={i} cx={ax} cy={ay} r={7} fill="#e6ebf2" stroke="#8a929c" strokeWidth={2} />)}
			{tr.map((d, i) => {
				const p = smooth(prog(f, tracksAt + i * 5, 16));
				if (p <= 0.005) return null;
				const x2 = srcX + 16 + reach * p, y2 = cy + d * h * p;
				return <line key={i} x1={srcX + 16} y1={cy} x2={x2} y2={y2} stroke={ORANGE} strokeWidth={6} strokeLinecap="round" />;
			})}
			{tr.map((d, i) => [0.35, 0.7, 1].map((u, j) => {
				const q = prog(f, ionAt + i * 3 + j * 4, 8);
				return q > 0.005 ? <IonMark key={`${i}-${j}`} x={srcX + 16 + reach * u} y={cy + d * h * u - 16} r={9} o={q} color={ORANGE_T} /> : null;
			}))}
		</g>
	);
};

// ---------- potassium-40 caption card ----------
export const K40Card: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={22} fill={PAPER} stroke={NAT_T} strokeWidth={5} />
		<Sx x={x + w / 2} y={y + h * 0.42} text="K-40" size={96} color={NAT_T} anchor="middle" weight={800} at={-1000} />
		<Sx x={x + w / 2} y={y + h * 0.66} text="19 protons" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={x + w / 2} y={y + h * 0.8} text="21 neutrons" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
	</g>
));

/** Source pot thumbnail drawn by height at a centre. */
export const PotAt: React.FC<{cx: number; bottom: number; h: number; o?: number}> = ({cx, bottom, h, o = 1}) => <Plate p={POT} x={cx - pw(POT, h) / 2} y={bottom - h} h={h} o={o} />;
