// GenePoolDiagram — a population's alleles on a stone plinth, and the allele
// frequency that describes them.
//
// Modes:
//   pool    One organism (a genotype) next to a whole population. On the beat
//           every allele pours into a gene-pool bar; the counts and
//           percentages are computed from the genotypes given.
//   drift   Two populations of different size, run generation by generation
//           with a deterministic Wright–Fisher draw (seeded, no Math.random):
//           each generation's alleles are sampled from the last generation's
//           frequency. The balls recolour to match and a frequency graph draws
//           itself. The large population stays near its start; the small one
//           swings and can lose or fix an allele. Tags are computed.
//   select  A favoured allele spreading: the frequency points come from props
//           (the lesson's own graph), the balls on the plinth follow them, and
//           the graph draws itself, with an optional marker.
//
// Frames are relative to `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, GlossDefs, ROSE, clamp, fadeAt, hash01, popAt, textWidth} from './shared';

type Pop = {label: string; size: number; seed: number; at?: number};
export type GenePoolProps = {
	mode: 'pool' | 'drift' | 'select';
	// pool
	individuals?: string[];
	organismAt?: number;
	populationAt?: number;
	poolAt?: number;
	percentAt?: number;
	// drift
	populations?: Pop[];
	p0?: number;
	generations?: number;
	// drift + select
	startAt?: number;
	framesPerGen?: number;
	// select
	points?: [number, number][];
	size?: number;
	seriesLabels?: [string, string];
	marker?: {x: number; label: string};
	xLabel?: string;
	yLabel?: string;
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6pool';
const W = 760;
const H = 530;

const Ball = ({x, y, r, name, label, opacity = 1, scale = 1}: {x: number; y: number; r: number; name: string; label?: string; opacity?: number; scale?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<ellipse cx={1.5} cy={r * 0.95} rx={r} ry={r * 0.26} fill="rgba(40,36,30,0.2)" />
		<circle r={r} fill={`url(#${ID}-g-${name})`} stroke="rgba(0,0,0,0.28)" />
		{label && <text y={r * 0.36} textAnchor="middle" fill="#fff" fontSize={r * 1.05} fontWeight={800}>{label}</text>}
	</g>
);

/** Ball positions packed in rows inside a plinth's top ellipse (back to front). */
const packOn = (cx: number, cy: number, rx: number, n: number, gap: number) => {
	const ry = rx * 0.34;
	const out: {x: number; y: number}[] = [];
	const rows = Math.max(1, Math.round(Math.sqrt(n / 3.2)));
	for (let row = 0; row < rows; row++) {
		const fy = rows === 1 ? 0 : -0.6 + (1.2 * row) / (rows - 1);
		const halfW = rx * 0.8 * Math.sqrt(Math.max(0.2, 1 - fy * fy));
		const remaining = n - out.length;
		const count = row === rows - 1 ? remaining : Math.min(remaining, Math.max(1, Math.round(n / rows)));
		const span = Math.min(halfW * 2, (count - 1) * gap);
		for (let c = 0; c < count; c++) out.push({x: cx + (count === 1 ? 0 : -span / 2 + (span * c) / (count - 1)), y: cy + fy * ry * 0.8});
	}
	return out;
};

/** Deterministic Wright–Fisher run: allele counts for generations 0..G. */
export const wrightFisher = (size: number, p0: number, G: number, seed: number) => {
	let k = Math.round(size * p0);
	const out = [k];
	for (let g = 1; g <= G; g++) {
		const p = k / size;
		let c = 0;
		for (let i = 0; i < size; i++) if (hash01(seed * 1000 + g * 97 + i) < p) c++;
		k = c;
		out.push(k);
	}
	return out;
};

/** A fixed shuffle so recoloured balls are scattered, not sorted. */
const scatterOrder = (n: number, seed: number) =>
	Array.from({length: n}, (_, i) => i).sort((a, b) => hash01(seed + a * 7.3) - hash01(seed + b * 7.3));

const pct = (v: number) => `${Math.round(v * 100)}%`;

export const GenePoolDiagram = (props: GenePoolProps) => {
	const {mode, delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const defs = (
		<>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{A: BLUE, a: ROSE, cap: '#e3eef8'}} />
		</>
	);
	const footer = props.footer && (
		<text x={W / 2} y={H - 12} textAnchor="middle" fill={props.footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, props.footer.at)}>
			{props.footer.text}
		</text>
	);

	// ── pool ─────────────────────────────────────────────────────────────────
	if (mode === 'pool') {
		const inds = props.individuals ?? ['AA', 'Aa', 'Aa', 'aa', 'AA', 'Aa', 'Aa', 'AA', 'Aa', 'Aa'];
		const oAt = props.organismAt ?? 0;
		const pAt = props.populationAt ?? 60;
		const poolAt = props.poolAt ?? 200;
		const perAt = props.percentAt ?? poolAt + 60;
		const alleles = inds.join('').split('');
		const nA = alleles.filter((a) => a === 'A').length;
		const total = alleles.length;
		const PY = 158;
		const oX = 112;
		const pX = 478;
		const pRx = 222;
		// individuals: capsules in two rows on the big plinth
		const perRow = Math.ceil(inds.length / 2);
		const indPos = inds.map((_, i) => {
			const row = i < perRow ? 0 : 1;
			const col = row === 0 ? i : i - perRow;
			const cnt = row === 0 ? perRow : inds.length - perRow;
			return {x: pX + (col - (cnt - 1) / 2) * 70 + (row ? 18 : -18), y: PY - 24 + row * 40};
		});
		const BX0 = 70;
		const BX1 = 690;
		const BY = 380;
		const pour = interpolate(frame, [poolAt, poolAt + 50], [0, 1], clamp);
		const cap = (x: number, y: number, g: string, k: number, o = 1) => (
			<g key={k} opacity={o} transform={`translate(${x},${y + idleBob(frame, k, 1.3)})`}>
				<rect x={-31} y={-17} width={62} height={34} rx={17} fill={`url(#${ID}-g-cap)`} stroke="rgba(60,90,120,0.4)" strokeWidth={1.5} />
				<Ball x={-14} y={0} r={12} name={g[0]} label={g[0]} />
				<Ball x={14} y={0} r={12} name={g[1]} label={g[1]} />
			</g>
		);
		// allele order in the bar: all A first, then a
		const barX = (idx: number) => BX0 + ((idx + 0.5) / total) * (BX1 - BX0);
		let ai = 0;
		let bi = nA;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A gene pool is every allele in a population" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				<g opacity={fadeAt(frame, oAt)}>
					<text x={oX} y={48} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>One organism</text>
					<DioramaPlinth id={`${ID}o`} cx={oX} cy={PY} rx={78} />
					{cap(oX, PY - 18, inds[1], 99)}
					<text x={oX} y={PY + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>a genotype: {inds[1]}</text>
				</g>
				<g opacity={fadeAt(frame, pAt)}>
					<text x={pX} y={48} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>A population · {inds.length} individuals</text>
					<DioramaPlinth id={`${ID}p`} cx={pX} cy={PY} rx={pRx} />
					{inds.map((g, i) => cap(indPos[i].x, indPos[i].y, g, i, Math.min(1, popAt(frame, fps, pAt + 6 + i * 4))))}
				</g>
				{/* gene pool bar: every allele pours in */}
				<g opacity={fadeAt(frame, poolAt - 10)}>
					<text x={W / 2} y={BY - 44} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Gene pool: all {total} alleles</text>
					<rect x={BX0 - 6} y={BY - 22} width={BX1 - BX0 + 12} height={44} rx={22} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
				</g>
				{inds.map((g, i) =>
					g.split('').map((a, j) => {
						const idx = a === 'A' ? ai++ : bi++;
						const sx = indPos[i].x + (j ? 14 : -14);
						const sy = indPos[i].y;
						const k = interpolate(pour, [i * 0.05, i * 0.05 + 0.5], [0, 1], clamp);
						if (k <= 0) return null;
						const x = sx + (barX(idx) - sx) * k;
						const y = sy + (BY - sy) * k - Math.sin(k * Math.PI) * 40;
						return <Ball key={`${i}${j}`} x={x} y={y + (k >= 1 ? idleBob(frame, idx, 0.8) : 0)} r={12} name={a} label={a} />;
					}),
				)}
				<g opacity={fadeAt(frame, perAt)}>
					<line x1={barX(nA - 0.5) + (BX1 - BX0) / total / 2} y1={BY - 30} x2={barX(nA - 0.5) + (BX1 - BX0) / total / 2} y2={BY + 30} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="4 4" />
					<text x={(BX0 + barX(nA - 1)) / 2 + 6} y={BY + 58} textAnchor="middle" fill={BLUE} fontSize={20} fontWeight={800}>
						A: {nA} of {total} = {pct(nA / total)}
					</text>
					<text x={(barX(nA) + BX1) / 2 - 6} y={BY + 58} textAnchor="middle" fill={ROSE} fontSize={20} fontWeight={800}>
						a: {total - nA} of {total} = {pct((total - nA) / total)}
					</text>
				</g>
				{footer}
			</svg>
		);
	}

	// ── graph shared by drift / select ──────────────────────────────────────
	const GX0 = 104;
	const GX1 = 700;
	const GY0 = 292;
	const GY1 = 436;
	const gx = (u: number) => GX0 + u * (GX1 - GX0);
	const gy = (v: number) => GY1 - v * (GY1 - GY0);
	const axes = (xl: string, yl: string, ticks: {u: number; text: string}[]) => (
		<g>
			<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
			<line x1={GX0} y1={GY0 - 8} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
			{[0, 0.5, 1].map((v) => (
				<g key={v}>
					<line x1={GX0} y1={gy(v)} x2={GX1} y2={gy(v)} stroke={TOK.inkMute} strokeOpacity={v === 0 ? 0 : 0.25} strokeWidth={1.5} strokeDasharray="4 6" />
					<text x={GX0 - 10} y={gy(v) + 5} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{v === 0.5 ? '0.5' : v.toFixed(0)}</text>
				</g>
			))}
			{ticks.map((t) => (
				<text key={t.u} x={gx(t.u)} y={GY1 + 20} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{t.text}</text>
			))}
			<text x={(GX0 + GX1) / 2} y={GY1 + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{xl}</text>
			<text x={GX0 - 52} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} transform={`rotate(-90 ${GX0 - 52} ${(GY0 + GY1) / 2})`}>{yl}</text>
		</g>
	);
	/** Polyline through pts, drawn up to pen u (0..1), with its tip. */
	const penPath = (pts: [number, number][], u: number) => {
		let d = `M ${gx(pts[0][0])} ${gy(pts[0][1])}`;
		let tip = pts[0];
		for (let i = 1; i < pts.length; i++) {
			const [x0, y0] = pts[i - 1];
			const [x1, y1] = pts[i];
			if (u >= x1) {
				d += ` L ${gx(x1)} ${gy(y1)}`;
				tip = pts[i];
			} else if (u > x0) {
				const f = (u - x0) / (x1 - x0);
				tip = [u, y0 + (y1 - y0) * f];
				d += ` L ${gx(tip[0])} ${gy(tip[1])}`;
				break;
			} else break;
		}
		return {d, tip};
	};
	const valueAt = (pts: [number, number][], u: number) => {
		for (let i = 1; i < pts.length; i++) if (u <= pts[i][0]) return pts[i - 1][1] + ((pts[i][1] - pts[i - 1][1]) * (u - pts[i - 1][0])) / (pts[i][0] - pts[i - 1][0] || 1);
		return pts[pts.length - 1][1];
	};

	// ── drift ────────────────────────────────────────────────────────────────
	if (mode === 'drift') {
		const pops = props.populations ?? [
			{label: 'Large population', size: 40, seed: 7},
			{label: 'Small population', size: 8, seed: 57},
		];
		const G = props.generations ?? 10;
		const p0 = props.p0 ?? 0.5;
		const start = props.startAt ?? 60;
		const fpg = props.framesPerGen ?? 30;
		const runs = pops.map((p) => wrightFisher(p.size, p0, G, p.seed));
		const genF = interpolate(frame, [start, start + G * fpg], [0, G], clamp);
		const gen = Math.floor(genF + 0.001);
		const xs = pops.length === 2 ? [226, 590] : pops.map((_, i) => (W / pops.length) * (i + 0.5));
		const rxs = pops.map((p) => Math.min(150, 70 + p.size * 2.6));
		const lineCol = (i: number) => (i === pops.length - 1 ? AMBER : TOK.inkDim);
		const ticks = Array.from({length: G + 1}, (_, g) => ({u: g / G, text: String(g)})).filter((t, i) => i % 2 === 0);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Genetic drift in a large and a small population" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				{pops.map((p, i) => {
					const run = runs[i];
					const k = run[gen];
					const order = scatterOrder(p.size, p.seed);
					const r = p.size > 20 ? 9.5 : 13;
					const pos = packOn(xs[i], 150, rxs[i], p.size, r * 2 + 3);
										const fixed = k === 0 || k === p.size;
					const f = k / p.size;
					return (
						<g key={i} opacity={fadeAt(frame, p.at ?? i * 20)}>
							<text x={xs[i]} y={40} textAnchor="middle" fill={i === pops.length - 1 ? TOK.amberInk : theme.accent} fontSize={21} fontWeight={800}>{p.label}</text>
							<DioramaPlinth id={`${ID}d${i}`} cx={xs[i]} cy={150} rx={rxs[i]} />
							{pos.map((q, j) => (
								<Ball key={j} x={q.x} y={q.y - r + idleBob(frame, j + i * 50, 1.1)} r={r} name={order.indexOf(j) < k ? 'A' : 'a'} />
							))}
							<text x={xs[i]} y={150 + rxs[i] * 0.34 + rxs[i] * 0.2 + 34} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>
								gen {gen} · <tspan fill={BLUE}>A {pct(f)}</tspan>
							</text>
							{fixed && gen > 0 && (
								<g opacity={fadeAt(frame, start + run.findIndex((c) => c === 0 || c === p.size) * fpg)}>
									<rect x={xs[i] - 66} y={58} width={132} height={30} rx={15} fill="#fff6e6" stroke={AMBER} strokeWidth={2 + idlePulse(frame)} />
									<text x={xs[i]} y={79} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{k === 0 ? 'allele A lost' : 'allele a lost'}</text>
								</g>
							)}
						</g>
					);
				})}
				<g opacity={fadeAt(frame, start - 20)}>
					{axes(props.xLabel ?? 'Generations', props.yLabel ?? 'Frequency of A', ticks)}
					{pops.map((p, i) => {
						const pts = runs[i].map((c, g) => [g / G, c / p.size] as [number, number]);
						const {d, tip} = penPath(pts, genF / G);
						return (
							<g key={i}>
								<path d={d} fill="none" stroke={lineCol(i)} strokeWidth={i === pops.length - 1 ? 5 : 4} strokeLinejoin="round" strokeLinecap="round" />
								<circle cx={gx(tip[0])} cy={gy(tip[1])} r={6} fill={lineCol(i)} />
							</g>
						);
					})}
					{genF >= G && pops.map((p, i) => {
						const last = runs[i][G] / p.size;
						return (
							<text key={i} x={GX1 + 8} y={gy(last) + (i === 0 ? -6 : 18)} fill={i === pops.length - 1 ? TOK.amberInk : TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, start + G * fpg)} textAnchor="end">
								{i === pops.length - 1 ? 'small' : 'large'}
							</text>
						);
					})}
				</g>
				{footer}
			</svg>
		);
	}

	// ── select ───────────────────────────────────────────────────────────────
	const pts = props.points ?? [[0, 0.1], [0.2, 0.18], [0.4, 0.34], [0.6, 0.55], [0.8, 0.74], [1, 0.85]];
	const alt = pts.map(([x, y]) => [x, +(1 - y).toFixed(4)] as [number, number]);
	const N = props.size ?? 20;
	const start = props.startAt ?? 60;
	const fpg = props.framesPerGen ?? 70;
	const steps = pts.length - 1;
	const u = interpolate(frame, [start, start + steps * fpg], [0, 1], clamp);
	const fav = valueAt(pts, u);
	const k = Math.round(fav * N);
	const order = scatterOrder(N, 11);
	const pos = packOn(W / 2, 126, 176, N, 30);
	const [lf, la] = props.seriesLabels ?? ['Favoured allele', 'Alternative allele'];
	const m = props.marker;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A favoured allele rises in frequency over generations" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{defs}
			<g opacity={fadeAt(frame, 0)}>
				<DioramaPlinth id={`${ID}s`} cx={W / 2} cy={126} rx={184} />
				{pos.map((q, j) => (
					<Ball key={j} x={q.x} y={q.y - 13 + idleBob(frame, j, 1.2)} r={13} name={order.indexOf(j) < k ? 'A' : 'a'} />
				))}
				<g transform="translate(0,34)">
					<circle cx={34} cy={-6} r={9} fill={`url(#${ID}-g-A)`} />
					<text x={50} y={0} fill={BLUE} fontSize={17} fontWeight={800}>{lf}</text>
					<circle cx={W - 30 - textWidth(la, 17) - 16} cy={-6} r={9} fill={`url(#${ID}-g-a)`} />
					<text x={W - 30} y={0} textAnchor="end" fill={ROSE} fontSize={17} fontWeight={800}>{la}</text>
				</g>
			</g>
			<g opacity={fadeAt(frame, start - 30)}>
				{axes(props.xLabel ?? 'Generations', props.yLabel ?? 'Allele frequency', [])}
				{m && (
					<g opacity={fadeAt(frame, start + (m.x / (1 / steps)) * fpg - 10)}>
						<line x1={gx(m.x)} y1={GY0 - 12} x2={gx(m.x)} y2={GY1} stroke={AMBER} strokeWidth={2.5 + idlePulse(frame) * 1.2} strokeDasharray="6 6" />
						<text x={gx(m.x) - 8} y={GY0 - 18} textAnchor="end" fill={TOK.amberInk} fontSize={16} fontWeight={800}>{m.label}</text>
					</g>
				)}
				{[pts, alt].map((series, i) => {
					const {d, tip} = penPath(series, u);
					const c = i === 0 ? BLUE : ROSE;
					return (
						<g key={i}>
							<path d={d} fill="none" stroke={c} strokeWidth={i === 0 ? 5 : 4} strokeLinejoin="round" strokeLinecap="round" />
							<circle cx={gx(tip[0])} cy={gy(tip[1])} r={6} fill={c} />
							<text x={Math.min(gx(tip[0]) + 10, GX1 - 4)} y={gy(tip[1]) + (i === 0 ? -10 : 22)} fill={c} fontSize={16} fontWeight={800} textAnchor={gx(tip[0]) + 60 > GX1 ? 'end' : 'start'}>
								{series === pts ? fav.toFixed(2) : (1 - fav).toFixed(2)}
							</text>
						</g>
					);
				})}
			</g>
			{footer}
		</svg>
	);
};
