// ExchangeDiagram (kind: chem12m5Exchange) — dynamic equilibrium as a live
// two-way exchange between two plinths.
//
// Reactant particles (A, teal) sit on the left plinth, product particles (B,
// violet) on the right. Forward hops arc high left → right and change colour
// in the air; reverse hops arc low right → left. A rate meter between the
// plinths shows both rates, and a graph underneath draws itself in sync:
// concentrations levelling off, or the forward rate falling while the reverse
// rate rises until they meet. After that the counts hold still but the hops
// never stop, which is the whole point.
//
// Everything is driven by exchangeSim (first-order kinetics both ways, hops
// emitted as the cumulative counts cross whole numbers), so the particles, the
// meter and the curves always agree. Optional disturbances add particles to a
// side (a concentration change) mid-run.
//
// Beat plan (frames after `delay`): `startAt` the reaction starts; each
// disturbance at its `at`; captions on their own beats.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, Ball, beatCaption, clamp, colorOf, hash01, ramp} from './shared';
import {runExchange} from './exchangeSim';

export type ExchangeSpecies = {label: string; el?: string};
export type ExchangeProps = {
	delay?: number;
	equation?: string;
	left?: ExchangeSpecies;
	right?: ExchangeSpecies;
	/** Particles on each plinth at the start. */
	left0?: number;
	right0?: number;
	/** Equilibrium ratio right : left (products ÷ reactants). Ignored when startAtEq. */
	keq?: number;
	/** Start already at equilibrium: Keq = right0 / left0, hops balanced from the first frame. */
	startAtEq?: boolean;
	/** Frames between hops in each direction once at equilibrium. */
	hopEvery?: number;
	/** Frames after delay when the reaction starts. */
	startAt?: number;
	graph?: 'conc' | 'rate' | 'none';
	/** Frames of run the graph's time axis spans. */
	graphFrames?: number;
	/** Show the forward / reverse rate meter between the plinths. */
	meter?: boolean;
	meterLabels?: [string, string];
	/** Concentration disturbances: add particles to a side at a frame (after delay). */
	disturb?: {at: number; addLeft?: number; addRight?: number; label?: string}[];
	/** Label on the equilibrium marker in the graph. */
	markerLabel?: string;
	/** Static texts under the plinths instead of the live "A × n" counters. */
	countLabels?: [string, string];
	/** Line labels at the end of the graph lines. */
	seriesLabels?: [string, string];
	captions?: {at: number; text: string}[];
};

const ID = 'c12m5ex';
const W = 760;
const XS = [178, 582];
const PY = 176;
const RX = 118;
const BALL_R = 13;
const FLIGHT = 24;
const GX0 = 96, GX1 = 628, GY0 = 330, GY1 = 468;
const PRODUCT = '#8a5cc9';

export const ExchangeDiagram = ({
	delay = 62,
	equation = 'A ⇌ B',
	left = {label: 'A', el: 'A'},
	right = {label: 'B', el: 'B'},
	left0 = 14,
	right0 = 0,
	keq = 1.5,
	startAtEq = false,
	hopEvery = 20,
	startAt = 40,
	graph = 'conc',
	graphFrames = 560,
	meter = true,
	meterLabels = ['forward', 'reverse'],
	disturb = [],
	markerLabel = 'equilibrium',
	countLabels,
	seriesLabels,
	captions = [],
}: ExchangeProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const elL = left.el ?? 'A';
	const elR = right.el ?? 'B';
	const colL = colorOf(elL) === '#9a9a9a' ? theme.accent : colorOf(elL);
	const colR = colorOf(elR) === '#9a9a9a' ? PRODUCT : colorOf(elR);
	const lineL = theme.accent;
	const lineR = PRODUCT;

	// ── Kinetics: pick kf, kr so equilibrium hops come every `hopEvery` frames ──
	const N = left0 + right0;
	const K = startAtEq && left0 > 0 ? right0 / left0 : keq;
	const aEq = N / (1 + K);
	const kf = 1 / (hopEvery * aEq);
	const kr = kf / K;
	const lastAt = Math.max(0, ...disturb.map((d) => d.at));
	const frames = Math.max(graphFrames, lastAt + 400) + startAt + 2400;
	const run = runExchange({
		left0, right0, kf, kr, start: startAt, flight: FLIGHT,
		frames,
		disturb: disturb.map((d) => ({at: d.at, addLeft: d.addLeft, addRight: d.addRight})),
	});
	const f = Math.max(0, Math.min(frames, Math.floor(frame)));

	// ── Fixed slots per plinth, filled centre-out so a few particles sit in the middle ──
	const cap = N + disturb.reduce((s, d) => s + (d.addLeft ?? 0) + (d.addRight ?? 0), 0) + 2;
	const slotsFor = (cx: number, seed: number) => {
		const raw = plinthSlots(cx, PY, RX, Math.max(cap, 6));
		return raw
			.map((s, i) => ({...s, key: Math.hypot((s.x - cx) / RX, (s.y - PY) / (RX * 0.34)) + hash01(i * 7 + seed) * 0.35}))
			.sort((a, b) => a.key - b.key);
	};
	const slots = [slotsFor(XS[0], 3), slotsFor(XS[1], 11)];
	const occ = (side: 0 | 1, at: number) => {
		const g = Math.max(0, Math.min(frames, at));
		return side === 0 ? run.onLeft[g] : run.onRight[g];
	};

	// ── Hops in the air ──
	const flying: {x: number; y: number; t: number; dir: 'f' | 'r'; k: number}[] = [];
	const sameStart = new Map<string, number>();
	const sameLand = new Map<string, number>();
	run.events.forEach((e, k) => {
		const ks = `${e.dir}${e.start}`;
		const js = sameStart.get(ks) ?? 0;
		sameStart.set(ks, js + 1);
		const land = e.start + FLIGHT;
		const kl = `${e.dir}${land}`;
		const jl = sameLand.get(kl) ?? 0;
		sameLand.set(kl, jl + 1);
		if (frame < e.start || frame >= land) return;
		const src: 0 | 1 = e.dir === 'f' ? 0 : 1;
		const dst: 0 | 1 = e.dir === 'f' ? 1 : 0;
		const s0 = slots[src][Math.max(0, occ(src, e.start - 1) - 1 - js)] ?? {x: XS[src], y: PY};
		const s1 = slots[dst][Math.max(0, occ(dst, land) - 1 - jl)] ?? {x: XS[dst], y: PY};
		const t = (frame - e.start) / FLIGHT;
		const u = t * t * (3 - 2 * t);
		const H = e.dir === 'f' ? 118 : 52;
		flying.push({x: s0.x + (s1.x - s0.x) * u, y: s0.y + (s1.y - s0.y) * u - Math.sin(Math.PI * u) * H, t: u, dir: e.dir, k});
	});

	const intro = (j: number) => spring({frame: frame - 6 - j * 2, fps, config: {damping: 13, stiffness: 220, mass: 0.6}});
	const drawPlinth = (side: 0 | 1) => {
		const n = frame < 0 ? (side === 0 ? left0 : right0) : occ(side, f);
		const added = side === 0 ? run.addedLeft[f] : run.addedRight[f];
		const base = side === 0 ? left0 : right0;
		const el = side === 0 ? elL : elR;
		const items = slots[side].slice(0, Math.max(0, n)).map((s, j) => ({...s, j}));
		items.sort((a, b) => a.y - b.y);
		// Newly added particles (disturbance) drop in from above.
		const addAt = disturb.find((d) => (side === 0 ? d.addLeft : d.addRight))?.at ?? Infinity;
		return (
			<DioramaPlinth id={ID} cx={XS[side]} cy={PY} rx={RX}>
				{items.map((s) => {
					const enter = s.j < base ? intro(s.j) : 1;
					const drop = s.j >= base && added > 0 && frame < addAt + 24 ? interpolate(frame, [addAt, addAt + 20], [-90, 0], clamp) : 0;
					return (
						<Ball key={s.j} id={ID} el={el} x={s.x} y={s.y + drop + idleBob(frame, s.j + side * 40, 1.6)} r={BALL_R} scale={Math.max(0, enter)} shadow />
					);
				})}
			</DioramaPlinth>
		);
	};

	// ── Graph ──
	const seriesA = graph === 'rate' ? run.rf : run.nA;
	const seriesB = graph === 'rate' ? run.rr : run.nB;
	const g0 = startAt;
	const g1 = startAt + graphFrames;
	let yMax = 0;
	for (let i = Math.max(0, g0 - 20); i <= Math.min(frames, g1); i++) yMax = Math.max(yMax, seriesA[i], seriesB[i]);
	if (graph === 'rate') yMax = Math.max(yMax, kf * N);
	yMax *= 1.1;
	const lead = 0;
	const gx = (fr: number) => GX0 + ((fr - (g0 - lead)) / (graphFrames + lead)) * (GX1 - GX0);
	const gy = (v: number) => GY1 - (v / yMax) * (GY1 - GY0);
	const pen = Math.min(g1, Math.max(g0 - lead, frame));
	const path = (arr: Float64Array) => {
		const pts: string[] = [];
		for (let i = g0 - lead; i <= pen; i += 3) pts.push(`${pts.length ? 'L' : 'M'} ${gx(i).toFixed(1)} ${gy(arr[Math.max(0, i)]).toFixed(1)}`);
		pts.push(`L ${gx(pen).toFixed(1)} ${gy(arr[Math.max(0, Math.floor(pen))]).toFixed(1)}`);
		return pts.join(' ');
	};
	// Equilibrium moments: rates within 4 % after the start and after each disturbance.
	const eqAfter = (from: number) => {
		for (let i = from + 1; i < frames; i++) {
			const m = Math.max(run.rf[i], run.rr[i]);
			if (m > 0 && Math.abs(run.rf[i] - run.rr[i]) / m < 0.04) return i;
		}
		return frames;
	};
	const eqMarks = [...(startAtEq ? [] : [eqAfter(startAt)]), ...disturb.map((d) => eqAfter(d.at))];

	// ── Rate meter ──
	const rateNow = (arr: Float64Array) => (frame < startAt ? (arr === run.rf ? kf * left0 : kr * right0) : arr[f]);
	const rMax = kf * Math.max(left0, N * 0.7) * 1.05;
	const barW = (v: number) => Math.max(0, Math.min(1, v / rMax)) * 116;
	const meterIn = ramp(frame, 10, 14);
	const MX = (XS[0] + XS[1]) / 2;

	const cap0 = beatCaption(frame, captions);
	const graphIn = ramp(frame, 20, 14);
	// "Rates equal" shows whenever the two rates are within 4 % of each other.
	const ratesClose = (i: number) => {
		const m = Math.max(run.rf[i], run.rr[i]);
		return m > 0 && Math.abs(run.rf[i] - run.rr[i]) / m < 0.04;
	};
	let equalSince = -1;
	if (frame >= startAt && ratesClose(f)) {
		equalSince = f;
		while (equalSince > startAt && ratesClose(equalSince - 1)) equalSince--;
	}
	const equal = equalSince >= 0;
	const seriesText = seriesLabels ?? (graph === 'rate' ? ['forward rate', 'reverse rate'] : [`[${left.label}]`, `[${right.label}]`]);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`${equation}: particles change back and forth between the two sides; at equilibrium both directions run at the same rate`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={Array.from(new Set([elL, elR]))} />

			<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={ramp(frame, 0)}>
				{equation}
			</text>

			<g opacity={ramp(frame, 2)}>
				{drawPlinth(0)}
				{drawPlinth(1)}
			</g>

			{/* Rate meter between the plinths */}
			{meter && (
				<g opacity={meterIn}>
					<text x={MX} y={PY - 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{meterLabels[0]} →</text>
					<rect x={MX - 58} y={PY + 6} width={116} height={14} rx={7} fill="rgba(0,0,0,0.06)" />
					<rect x={MX - 58} y={PY + 6} width={barW(rateNow(run.rf))} height={14} rx={7} fill={lineL} />
					<text x={MX} y={PY + 42} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>← {meterLabels[1]}</text>
					<rect x={MX - 58} y={PY + 50} width={116} height={14} rx={7} fill="rgba(0,0,0,0.06)" />
					<rect x={MX + 58 - barW(rateNow(run.rr))} y={PY + 50} width={barW(rateNow(run.rr))} height={14} rx={7} fill={lineR} />
					<text x={MX} y={PY + 86} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={equal ? ramp(frame, Math.max(startAt, equalSince), 14) * (0.7 + 0.3 * idlePulse(frame)) : 0}>
						rates equal
					</text>
				</g>
			)}

			{/* Hops in flight (drawn over the plinths) */}
			{flying.map((p) => {
				const toB = p.dir === 'f';
				const mix = interpolate(p.t, [0.4, 0.6], [0, 1], clamp);
				const from = toB ? elL : elR;
				const to = toB ? elR : elL;
				return (
					<g key={p.k}>
						<Ball id={ID} el={from} x={p.x} y={p.y} r={BALL_R} opacity={1 - mix} />
						<Ball id={ID} el={to} x={p.x} y={p.y} r={BALL_R} opacity={mix} />
					</g>
				);
			})}

			{/* Counters under the plinths */}
			{[0, 1].map((side) => {
				const sp = side === 0 ? left : right;
				// The counter follows the smooth model (a particle counts as changed once it has
				// changed colour mid-air), so it holds perfectly still at equilibrium.
				const n = frame < 0 ? (side === 0 ? left0 : right0) : Math.round(side === 0 ? run.nA[f] : run.nB[f]);
				return (
					<text key={side} x={XS[side]} y={PY + 74} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={ramp(frame, 8)}>
						{countLabels ? countLabels[side] : (
							<>
								{sp.label} <tspan fill={side === 0 ? colL : colR}>× {n}</tspan>
							</>
						)}
					</text>
				);
			})}

			<text x={W / 2} y={300} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={cap0.opacity}>
				{cap0.text}
			</text>

			{graph !== 'none' && (
				<g opacity={graphIn}>
					<line x1={GX0} y1={GY1} x2={GX1 + 6} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
					<line x1={GX0} y1={GY0 - 6} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
					<text x={GX0 - 16} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} transform={`rotate(-90 ${GX0 - 16} ${(GY0 + GY1) / 2})`}>
						{graph === 'rate' ? 'rate' : 'concentration'}
					</text>
					<text x={(GX0 + GX1) / 2} y={GY1 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>time →</text>

					{eqMarks.map((m, i) => (
						<g key={i} opacity={ramp(frame, m, 14)}>
							<line x1={gx(m)} y1={GY0 - 4} x2={gx(m)} y2={GY1} stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.2} strokeDasharray="6 6" />
							<text x={gx(m) + 8} y={GY0 + 8} fill={TOK.amberInk} fontSize={15} fontWeight={800}>
								{i === 0 && !startAtEq ? markerLabel : 'new equilibrium'}
							</text>
						</g>
					))}
					{/* Faint "before" levels, so "more than before" can be read off after a disturbance */}
					{disturb.map((d, i) => (
						<g key={`b${i}`} opacity={0.55 * ramp(frame, d.at + 20, 14)}>
							{[seriesA, seriesB].map((arr, k) => (
								<line key={k} x1={gx(d.at)} y1={gy(arr[Math.max(0, d.at - 1)])} x2={gx(pen)} y2={gy(arr[Math.max(0, d.at - 1)])} stroke={k === 0 ? lineL : lineR} strokeWidth={2} strokeDasharray="4 6" />
							))}
							<text x={gx(pen) - 4} y={gy(seriesA[Math.max(0, d.at - 1)]) + 20} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>before</text>
						</g>
					))}
					{disturb.map((d, i) => (
						<g key={`d${i}`} opacity={ramp(frame, d.at, 10)}>
							<line x1={gx(d.at)} y1={GY0 - 4} x2={gx(d.at)} y2={GY1} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 5" />
							{d.label && (
								<text x={gx(d.at) - 6} y={GY0 + 8} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{d.label}</text>
							)}
						</g>
					))}

					<path d={path(seriesA)} stroke={lineL} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<path d={path(seriesB)} stroke={lineR} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					{[seriesA, seriesB].map((arr, i) => {
						const v = arr[Math.max(0, Math.floor(pen))];
						const other = [seriesA, seriesB][1 - i][Math.max(0, Math.floor(pen))];
						// keep the two end labels from colliding
						const dy = Math.abs(gy(v) - gy(other)) < 22 ? (v > other || (v === other && i === 0) ? -11 : 11) : 0;
						return (
							<text key={i} x={gx(pen) + 10} y={gy(v) + 6 + dy} fill={i === 0 ? lineL : lineR} fontSize={16} fontWeight={800} opacity={ramp(frame, startAt + 30, 14)}>
								{seriesText[i]}
							</text>
						);
					})}
				</g>
			)}
		</svg>
	);
};
