// SamplingDiagram (bio11m3Sampling) — quadrats and transects, seen from
// above on a stone-edged plot.
//
// mode 'techniques'  three plots side by side: random quadrats (overall
//                    abundance), a line transect across a gradient (what
//                    touches the tape), a belt transect (quadrats along the
//                    line: change AND abundance). The gradient runs from water
//                    (left) to dry bank (right).
// mode 'estimate'    one plot of `area` with plants scattered over it. Quadrats
//                    land at random coordinates and each shows its count
//                    (props); the plants inside each quadrat are drawn to that
//                    count. Then the working builds, every number COMPUTED:
//                    mean = sum ÷ n; total = mean × (area ÷ quadrat area).
// mode 'transect'    a belt transect down a rocky shore from the high-tide
//                    mark to the low-tide mark, with the zones (props) the
//                    quadrats along it record.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {ECO, Footer, H, Pill, Title, W, easeT, fadeAt, popAt, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName} from './icons';

export type SamplingProps = {
	mode?: 'techniques' | 'estimate' | 'transect';
	title?: string;
	counts?: number[];
	area?: number;
	quadratArea?: number;
	unit?: string;
	organism?: AnyIconName;
	zones?: {name: string; icons: AnyIconName[]; at: number}[];
	labels?: string[];
	subs?: string[];
	beats?: Partial<{plot: number; quadrats: number; t1: number; t2: number; t3: number; mean: number; total: number; line: number}>;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3samp';
const hash = (n: number) => {
	const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
	return x - Math.floor(x);
};
export const fmt = (v: number) => {
	const r = Math.round(v * 100) / 100;
	const [i, d] = String(r).split('.');
	const withSpaces = i.length > 4 ? i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : i;
	return d ? `${withSpaces}.${d}` : withSpaces;
};

/** A top-down plot drawn as a trapezoid (slight perspective). */
const plotMap = (cx: number, cy: number, w: number, h: number) => (u: number, v: number) => {
	const inset = 0.12 * (1 - v);
	return {x: cx - w / 2 + w * (inset + u * (1 - 2 * inset)), y: cy - h / 2 + v * h};
};

const Plot = ({cx, cy, w, h, idp, gradient}: {cx: number; cy: number; w: number; h: number; idp: string; gradient?: boolean}) => {
	const P = plotMap(cx, cy, w, h);
	const c = [P(0, 0), P(1, 0), P(1, 1), P(0, 1)];
	return (
		<g>
			<DioramaPlinth id={idp} cx={cx} cy={cy + h / 2 + 4} rx={w * 0.56} />
			<path d={`M ${c[0].x} ${c[0].y} L ${c[1].x} ${c[1].y} L ${c[2].x} ${c[2].y} L ${c[3].x} ${c[3].y} Z`} fill={gradient ? `url(#${idp}-grad)` : '#b9d58a'} stroke="#8f8b83" strokeWidth={3} />
			{gradient && (
				<defs>
					<linearGradient id={`${idp}-grad`} x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor={ECO.water} />
						<stop offset="18%" stopColor="#8fc4a8" />
						<stop offset="55%" stopColor="#b9d58a" />
						<stop offset="100%" stopColor="#e0d49a" />
					</linearGradient>
				</defs>
			)}
		</g>
	);
};

const Quadrat = ({x, y, s, opacity = 1, amber}: {x: number; y: number; s: number; opacity?: number; amber?: boolean}) => (
	<g opacity={opacity}>
		<rect x={x - s / 2} y={y - s / 2} width={s} height={s} fill="rgba(255,255,255,0.18)" stroke={amber ? TOK.amber : '#f4f1ea'} strokeWidth={4} />
		<rect x={x - s / 2} y={y - s / 2} width={s} height={s} fill="none" stroke="#6f6553" strokeWidth={1.2} />
	</g>
);

export const SamplingDiagram = ({
	mode = 'estimate', title, counts = [4, 6, 5, 5], area = 2000, quadratArea = 1, unit = 'm²', organism = 'flower',
	zones = [], labels, subs, beats = {}, footer = [], delay = 62,
}: SamplingProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {plot: 0, quadrats: 30, t1: 0, t2: 60, t3: 120, mean: 9999, total: 9999, line: 30, ...beats};
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const pulse = idlePulse(frame);

	if (mode === 'techniques') {
		const names = labels ?? ['Random quadrats', 'Line transect', 'Belt transect'];
		const sub = subs ?? ['overall abundance', 'change along a gradient', 'change + abundance'];
		const pw = (W - 20) / 3;
		const starts = [b.t1, b.t2, b.t3];
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Sampling techniques'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				{[0, 1, 2].map((k) => {
					const cx = 10 + pw * (k + 0.5);
					const cy = top + 150;
					const w = pw - 36;
					const h = 170;
					const P = plotMap(cx, cy, w, h);
					const on = fadeAt(frame, starts[k], 14);
					const grad = k > 0;
					const plants = Array.from({length: 26}, (_, i) => ({u: 0.08 + hash(i * 3 + k) * 0.84, v: 0.08 + hash(i * 7 + 1 + k) * 0.84, i}));
					return (
						<g key={k} opacity={on}>
							<Plot cx={cx} cy={cy} w={w} h={h} idp={`${ID}t${k}`} gradient={grad} />
							{plants.map((p) => {
								const q = P(p.u, p.v);
								const kind: AnyIconName = grad ? (p.u < 0.35 ? 'fern' : p.u < 0.7 ? 'grass' : 'shrub') : 'flower';
								if (grad && p.u < 0.12) return null;
								return <EcoIcon key={p.i} id={ID} name={kind} x={q.x} y={q.y + idleBob(frame, p.i, 0.6)} s={0.2} frame={frame} />;
							})}
							{k === 0 && [[0.2, 0.3], [0.62, 0.2], [0.45, 0.66], [0.8, 0.74], [0.18, 0.78]].map(([u, v], i) => {
								const q = P(u, v);
								const p = popAt(frame, fps, starts[0] + 16 + i * 8);
								return <Quadrat key={i} x={q.x} y={q.y} s={34 * Math.min(1, p)} opacity={Math.min(1, p)} />;
							})}
							{k > 0 && (() => {
								const a = P(0.02, 0.5);
								const c = P(0.98, 0.5);
								const t = easeT(frame, starts[k] + 14, starts[k] + 44);
								return (
									<g>
										<line x1={a.x} y1={a.y} x2={a.x + (c.x - a.x) * t} y2={a.y} stroke="#f0d44a" strokeWidth={5} />
										{Array.from({length: 7}, (_, i) => (i / 6 <= t ? <line key={i} x1={a.x + ((c.x - a.x) * i) / 6} y1={a.y - 5} x2={a.x + ((c.x - a.x) * i) / 6} y2={a.y + 5} stroke="#6a5a1a" strokeWidth={2} /> : null))}
										{k === 2 && Array.from({length: 5}, (_, i) => {
											const q = P(0.1 + i * 0.2, 0.5);
											const p = popAt(frame, fps, starts[2] + 48 + i * 8);
											return <Quadrat key={i} x={q.x} y={q.y} s={30 * Math.min(1, p)} opacity={Math.min(1, p)} />;
										})}
									</g>
								);
							})()}
							<text x={cx} y={cy + h / 2 + 64} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{names[k]}</text>
							<text x={cx} y={cy + h / 2 + 86} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{sub[k]}</text>
							{grad && <text x={P(0.04, 0).x} y={cy - h / 2 - 10} fill="#1f5f8a" fontSize={13} fontWeight={800}>wet</text>}
							{grad && <text x={P(0.96, 0).x} y={cy - h / 2 - 10} textAnchor="end" fill="#8a6a2a" fontSize={13} fontWeight={800}>dry</text>}
						</g>
					);
				})}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	if (mode === 'transect') {
		const cx = 240;
		const cy = top + 178;
		const w = 350;
		const h = 270;
		const P = plotMap(cx, cy, w, h);
		const n = zones.length;
		const t = easeT(frame, b.line, b.line + 40);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Belt transect'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<g opacity={fadeAt(frame, b.plot, 14)}>
					<DioramaPlinth id={`${ID}sh`} cx={cx} cy={cy + h / 2 + 4} rx={w * 0.5} />
					<defs>
						<linearGradient id={`${ID}-shore`} x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stopColor="#cbbf9f" />
							<stop offset="55%" stopColor="#a99d84" />
							<stop offset="100%" stopColor={ECO.sea} />
						</linearGradient>
					</defs>
					{(() => {
						const c = [P(0, 0), P(1, 0), P(1, 1), P(0, 1)];
						return <path d={`M ${c[0].x} ${c[0].y} L ${c[1].x} ${c[1].y} L ${c[2].x} ${c[2].y} L ${c[3].x} ${c[3].y} Z`} fill={`url(#${ID}-shore)`} stroke="#8f8b83" strokeWidth={3} />;
					})()}
					<text x={P(0.5, 0).x} y={P(0.5, 0).y - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>high-tide mark</text>
					<text x={P(0.5, 1).x} y={P(0.5, 1).y + 50} textAnchor="middle" fill="#1f5f8a" fontSize={15} fontWeight={800}>low-tide mark</text>
				</g>
				{(() => {
					const a = P(0.5, 0.02);
					const c = P(0.5, 0.98);
					return <line x1={a.x} y1={a.y} x2={a.x} y2={a.y + (c.y - a.y) * t} stroke="#f0d44a" strokeWidth={6} />;
				})()}
				{zones.map((z, i) => {
					const v = (i + 0.5) / n;
					const q = P(0.5, v);
					const p = popAt(frame, fps, z.at);
					const on = Math.min(1, p);
					return (
						<g key={i} opacity={on}>
							<Quadrat x={q.x} y={q.y} s={76} />
							{z.icons.map((ic, k) => (
								<EcoIcon key={k} id={ID} name={ic} x={q.x + (k - (z.icons.length - 1) / 2) * 24} y={q.y + 6 + idleBob(frame, i * 3 + k, 0.8)} s={0.34} frame={frame} />
							))}
							<line x1={q.x + 42} y1={q.y} x2={450} y2={q.y} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="4 4" />
							<text x={460} y={q.y + 6} fill={theme.accent} fontSize={18} fontWeight={800}>{z.name}</text>
						</g>
					);
				})}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	// ---- estimate ----
	const cx = 230;
	const cy = top + 170;
	const w = 400;
	const h = 250;
	const P = plotMap(cx, cy, w, h);
	const qPos = [[0.22, 0.28], [0.7, 0.22], [0.36, 0.72], [0.8, 0.68], [0.55, 0.47], [0.12, 0.55]].slice(0, counts.length);
	const qs = 52;
	const sum = counts.reduce((a, c) => a + c, 0);
	const mean = sum / counts.length;
	const total = mean * (area / quadratArea);
	const scatter = Array.from({length: 60}, (_, i) => ({u: 0.06 + hash(i * 5 + 2) * 0.88, v: 0.06 + hash(i * 9 + 4) * 0.88, i}));
	const insideAny = (x: number, y: number) => qPos.some(([u, v]) => {
		const q = P(u, v);
		return Math.abs(x - q.x) < qs / 2 + 8 && Math.abs(y - q.y) < qs / 2 + 8;
	});
	const wx = 470;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Quadrat estimate'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, b.plot, 14)}>
				<Plot cx={cx} cy={cy} w={w} h={h} idp={`${ID}e`} />
				{scatter.map((p) => {
					const q = P(p.u, p.v);
					if (insideAny(q.x, q.y)) return null;
					return <EcoIcon key={p.i} id={ID} name={organism} x={q.x} y={q.y + idleBob(frame, p.i, 0.6)} s={0.18} frame={frame} />;
				})}
				<text x={cx} y={cy + h / 2 + 62} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{`plot: ${fmt(area)} ${unit}`}</text>
			</g>
			{qPos.map(([u, v], i) => {
				const q = P(u, v);
				const at = b.quadrats + i * 14;
				const p = popAt(frame, fps, at);
				const on = Math.min(1, p);
				const c = counts[i];
				const cols = Math.ceil(Math.sqrt(c));
				return (
					<g key={i} opacity={on}>
						<Quadrat x={q.x} y={q.y} s={qs * Math.min(1, p)} />
						{Array.from({length: c}, (_, k) => {
							const r = Math.floor(k / cols);
							const cc = k % cols;
							const rows = Math.ceil(c / cols);
							return <EcoIcon key={k} id={ID} name={organism} x={q.x - qs / 2 + (qs * (cc + 0.5)) / cols} y={q.y - qs / 2 + (qs * (r + 0.5)) / rows + 4} s={0.14} frame={frame} opacity={fadeAt(frame, at + 8 + k * 2, 6)} />;
						})}
						<circle cx={q.x + qs / 2 + 2} cy={q.y - qs / 2 - 2} r={14} fill={theme.accent} opacity={fadeAt(frame, at + 12, 8)} />
						<text x={q.x + qs / 2 + 2} y={q.y - qs / 2 + 4} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={800} opacity={fadeAt(frame, at + 12, 8)}>{c}</text>
					</g>
				);
			})}
			<g opacity={fadeAt(frame, b.quadrats, 12)}>
				<text x={wx} y={top + 60} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{`${counts.length} random quadrats, ${fmt(quadratArea)} ${unit} each`}</text>
			</g>
			{frame > b.mean && (
				<g opacity={fadeAt(frame, b.mean, 14)}>
					<text x={wx} y={top + 110} fill={TOK.ink} fontSize={18} fontWeight={800}>mean per quadrat</text>
					<text x={wx} y={top + 140} fill={TOK.ink} fontSize={18} fontWeight={700}>{`= (${counts.join(' + ')}) ÷ ${counts.length}`}</text>
					<text x={wx} y={top + 170} fill={theme.accent} fontSize={22} fontWeight={800}>{`= ${fmt(mean)}`}</text>
				</g>
			)}
			{frame > b.total && (
				<g opacity={fadeAt(frame, b.total, 14)}>
					<text x={wx} y={top + 222} fill={TOK.ink} fontSize={18} fontWeight={800}>estimated total</text>
					<text x={wx} y={top + 252} fill={TOK.ink} fontSize={18} fontWeight={700}>{`= ${fmt(mean)} × (${fmt(area)} ÷ ${fmt(quadratArea)})`}</text>
					<rect x={wx - 8} y={top + 266} width={200} height={42} rx={10} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
					<text x={wx + 6} y={top + 296} fill={TOK.amberInk} fontSize={24} fontWeight={800}>{`≈ ${fmt(total)}`}</text>
				</g>
			)}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
