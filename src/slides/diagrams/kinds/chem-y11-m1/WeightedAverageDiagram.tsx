// WeightedAverageDiagram — relative atomic mass as a weighted average, in three moves.
//
// Each isotope is a pile of glossy atoms on its own plinth (pile size ∝
// abundance). Under each pile the three moves play in narration order:
//   1. % → fraction (÷ 100)
//   2. isotopic mass × fraction = contribution
//   3. add the contributions → Ar (the one amber thing)
// A number line then shows why: the simple mean of the mass numbers is ghosted
// and crossed out, and the Ar pin slides from there toward the more abundant
// isotope's end of the line.
//
// Every number is COMPUTED from `isotopes` ({label, mass, percent}):
// fraction = percent ÷ 100 (shown to the percent's decimals + 2), contribution =
// mass × fraction rounded to 3 dp, and Ar = the sum of the displayed
// contributions, shown to 2 dp, so the working on screen always adds up.
// All `at` values are frames after `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, GlossDefs, clamp, fadeAt, popAt, shade} from './shared';

export type WAIsotope = {label: string; mass: number; percent: number};
export type WeightedAverageProps = {
	isotopes?: WAIsotope[];
	/** Symbol for the Ar line, e.g. "Ar". */
	arLabel?: string;
	/** Base colour for the atoms (defaults to CPK chlorine). */
	color?: string;
	/** Number-line range (defaults to the rounded mass numbers). */
	axis?: [number, number];
	/** Beats (frames after delay). */
	beats?: {
		percents?: number; fractions?: number; multiply?: number; add?: number; formula?: number;
		line?: number; crossMean?: number; pull?: number; closer?: number;
	};
	delay?: number;
};

const ID = 'c11wavg';
const W = 760;
const H = 530;
const PY = 116;
const PRX = 112;
const ROW1 = 220;
const ROW2A = 264;
const ROW2B = 296;
const ROW3 = 340;
const FORMULA_Y = 368;
const LINE_Y = 488;
const AX0 = 110;
const AX1 = 650;

const DEFAULT_ISOTOPES: WAIsotope[] = [
	{label: '³⁵Cl', mass: 34.969, percent: 75.77},
	{label: '³⁷Cl', mass: 36.966, percent: 24.23},
];
const DEFAULT_BEATS = {percents: 11, fractions: 129, multiply: 174, add: 328, formula: 383, line: 528, crossMean: 575, pull: 682, closer: 764};

const decimals = (x: number) => {
	const s = String(x);
	const i = s.indexOf('.');
	return i < 0 ? 0 : s.length - i - 1;
};
// A heap of n balls on a plinth top: hex-packed positions inside the
// ellipse, nearest the centre first, painted back to front.
const heap = (cx: number, cy: number, rx: number, n: number, r: number) => {
	const ry = rx * 0.34;
	const dy = r * 0.95;
	const pts: {x: number; y: number; d: number}[] = [];
	for (let row = -4; row <= 4; row++) {
		const y = row * dy;
		for (let col = -6; col <= 6; col++) {
			const x = (col + (row % 2 ? 0.5 : 0)) * r * 2.05;
			const e = (x / (rx * 0.8)) ** 2 + (y / (ry * 0.78)) ** 2;
			if (e <= 1) pts.push({x, y, d: (x / rx) ** 2 + (y / ry) ** 2 * 0.6});
		}
	}
	return pts
		.sort((p, q) => p.d - q.d)
		.slice(0, n)
		.sort((p, q) => p.y - q.y)
		.map((p) => ({x: cx + p.x, y: cy + p.y - r * 0.55}));
};
const round = (x: number, dp: number) => Math.round(x * 10 ** dp + 1e-9) / 10 ** dp;

export const WeightedAverageDiagram = ({
	isotopes = DEFAULT_ISOTOPES,
	arLabel = 'Ar',
	color = ELEMENT_COLORS.Cl,
	axis,
	beats: beatsIn,
	delay = 62,
}: WeightedAverageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {...DEFAULT_BEATS, ...beatsIn};

	// ── The arithmetic (single source of every number on screen) ───────────
	const rows = isotopes.map((iso) => {
		const fdp = decimals(iso.percent) + 2;
		const fraction = round(iso.percent / 100, fdp);
		const contribution = round(iso.mass * fraction, 3);
		return {...iso, fdp, fraction, contribution};
	});
	const sumShown = round(rows.reduce((s, r) => s + r.contribution, 0), 3);
	const ar = round(sumShown, 2);
	const massNumbers = rows.map((r) => Math.round(r.mass));
	const simpleMean = round(massNumbers.reduce((s, m) => s + m, 0) / massNumbers.length, 2);
	const [a0, a1] = axis ?? [Math.min(...massNumbers), Math.max(...massNumbers)];
	const pad = (a1 - a0) * 0.25;
	const ax = (v: number) => AX0 + ((v - (a0 - pad)) / (a1 - a0 + 2 * pad)) * (AX1 - AX0);
	const minPct = Math.min(...rows.map((r) => r.percent));
	const topIdx = rows.reduce((best, r, i) => (r.percent > rows[best].percent ? i : best), 0);

	const n = rows.length;
	const xs = n === 2 ? [190, 570] : rows.map((_, i) => (W / n) * (i + 0.5));
	const atomColors: Record<string, string> = {};
	rows.forEach((_, i) => (atomColors[`iso${i}`] = shade(color, -0.1 * i)));

	const fmt = (x: number, dp: number) => x.toFixed(dp);

	// Number-line pin: starts on the simple mean, slides to Ar on the "pull" beat.
	const slide = interpolate(frame, [b.pull, b.pull + 44], [0, 1], clamp);
	const ease = slide < 0.5 ? 2 * slide * slide : 1 - Math.pow(-2 * slide + 2, 2) / 2;
	const pinV = simpleMean + (ar - simpleMean) * ease;
	const pinIn = popAt(frame, fps, b.pull - 6);
	const arrived = fadeAt(frame, b.pull + 40, 12);
	const closer = frame > b.closer ? idlePulse(frame, 56) : 0;
	const crossed = popAt(frame, fps, b.crossMean);

	const label = (t: string) => t;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Weighted average: ${rows.map((r) => `${r.mass} × ${r.fraction}`).join(' + ')} = ${ar}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={atomColors} />

			{/* Isotope plinths, piles sized by abundance */}
			{rows.map((r, i) => {
				const count = Math.max(1, Math.round((r.percent / 100) * 16));
				const atomR = 14 + (r.mass - rows[0].mass) * 0.5;
				const slots = heap(xs[i], PY, PRX, count, atomR);
				return (
					<g key={r.label} opacity={fadeAt(frame, 0 + i * 4)}>
						<DioramaPlinth id={ID} cx={xs[i]} cy={PY} rx={PRX}>
							{slots.map((s, k) => {
								const enter = popAt(frame, fps, 4 + k * 2 + i * 6);
								return (
									<g key={k} transform={`translate(${s.x},${s.y + idleBob(frame, k + i * 20, 1.6)}) scale(${Math.max(0, enter)})`}>
										<ellipse cx={0} cy={atomR * 0.95} rx={atomR * 1.1} ry={atomR * 0.26} fill="rgba(40,36,30,0.22)" />
										<Ball id={ID} name={`iso${i}`} color={atomColors[`iso${i}`]} x={0} y={0} r={atomR} />
									</g>
								);
							})}
						</DioramaPlinth>
						<text x={xs[i]} y={32} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800}>
							{label(r.label)}
							<tspan fill={TOK.inkDim} fontSize={20} fontWeight={700} dx={10}>mass {fmt(r.mass, decimals(r.mass))}</tspan>
						</text>
					</g>
				);
			})}

			{/* Move 1: % → fraction */}
			{rows.map((r, i) => {
				const fIn = fadeAt(frame, b.fractions + i * 20, 12);
				return (
					<g key={`m1${i}`} opacity={fadeAt(frame, b.percents + i * 6)}>
						<text x={xs[i]} y={ROW1} textAnchor="middle" fontSize={25} fontWeight={800}>
							<tspan fill={TOK.inkDim}>{fmt(r.percent, decimals(r.percent))} %</tspan>
							<tspan fill={TOK.inkDim} opacity={fIn}> → </tspan>
							<tspan fill={TOK.ink} opacity={fIn}>{fmt(r.fraction, r.fdp)}</tspan>
						</text>
					</g>
				);
			})}
			{n === 2 && <Chip x={W / 2} y={ROW1 - 8} text="÷ 100" size={19} color={theme.accent} opacity={fadeAt(frame, b.percents)} />}

			{/* Move 2: mass × fraction = contribution */}
			{rows.map((r, i) => (
				<g key={`m2${i}`}>
					<text x={xs[i]} y={ROW2A} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={700} opacity={fadeAt(frame, b.multiply + 18 + i * 50)}>
						{fmt(r.mass, decimals(r.mass))} × {fmt(r.fraction, r.fdp)}
					</text>
					<text x={xs[i]} y={ROW2B} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={fadeAt(frame, b.multiply + 38 + i * 50)}>
						= {fmt(r.contribution, 3)}
					</text>
				</g>
			))}
			{n === 2 && <Chip x={W / 2} y={ROW2A + 8} text="mass × fraction" size={17} color={theme.accent} opacity={fadeAt(frame, b.multiply)} />}

			{/* Move 3: add */}
			<g opacity={fadeAt(frame, b.add)}>
				<text x={W / 2} y={ROW3} textAnchor="middle" fontSize={29} fontWeight={800} fill={TOK.ink}>
					<tspan fill={TOK.inkDim}>{rows.map((r) => fmt(r.contribution, 3)).join(' + ')} = </tspan>
					<tspan fill={TOK.amberInk} opacity={fadeAt(frame, b.add + 24, 10)}>
						{arLabel} = {fmt(ar, 2)}
					</tspan>
				</text>
			</g>
			<text x={W / 2} y={FORMULA_Y} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={fadeAt(frame, b.formula)}>
				{arLabel} = Σ (isotopic mass × fractional abundance)
			</text>

			{/* Number line: simple mean vs weighted average */}
			<g opacity={fadeAt(frame, b.line, 14)}>
				<line x1={AX0} y1={LINE_Y} x2={AX1} y2={LINE_Y} stroke={TOK.inkMute} strokeWidth={3} strokeLinecap="round" />
				{Array.from({length: Math.round(a1 - a0) + 1}, (_, k) => a0 + k).map((v) => {
					const major = true;
					return (
						<g key={v}>
							<line x1={ax(v)} y1={LINE_Y - (major ? 8 : 5)} x2={ax(v)} y2={LINE_Y + (major ? 8 : 5)} stroke={TOK.inkMute} strokeWidth={2} />
							{major && (
								<text x={ax(v)} y={LINE_Y + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700}>
									{v}
								</text>
							)}
						</g>
					);
				})}
				{/* isotope weights at their true masses, sized by abundance */}
				{rows.map((r, i) => {
					const k = Math.max(1, Math.round(r.percent / minPct));
					const pts = k >= 3 ? [[-13, 0], [13, 0], [0, -22]] : k === 2 ? [[-13, 0], [13, 0]] : [[0, 0]];
					const grow = i === topIdx ? 1 + closer * 0.08 : 1;
					return (
						<g key={`w${i}`} transform={`translate(${ax(r.mass)},${LINE_Y - 16}) scale(${grow})`}>
							{pts.map(([x, y], j) => (
								<Ball key={j} id={ID} name={`iso${i}`} color={atomColors[`iso${i}`]} x={x} y={y} r={13} />
							))}
							<text x={0} y={pts.length > 1 ? -46 : -24} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>
								{r.label}
							</text>
						</g>
					);
				})}
				{/* ghost pin: the simple mean */}
				<g opacity={0.9}>
					<line x1={ax(simpleMean)} y1={LINE_Y} x2={ax(simpleMean)} y2={LINE_Y - 64} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 5" />
					<circle cx={ax(simpleMean)} cy={LINE_Y - 64} r={6} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} />
					<text x={ax(simpleMean)} y={LINE_Y - 78} textAnchor="middle" fill={TOK.inkMute} fontSize={17} fontWeight={800} textDecoration={frame >= b.crossMean ? 'line-through' : undefined}>
						simple mean {fmt(simpleMean, decimals(simpleMean))}
					</text>
					{frame >= b.crossMean && (
						<g transform={`translate(${ax(simpleMean) + 92},${LINE_Y - 84}) scale(${Math.max(0, crossed)})`}>
							<path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke="#d8453b" strokeWidth={4} strokeLinecap="round" />
						</g>
					)}
				</g>
				{/* Ar pin: slides from the simple mean toward the abundant isotope */}
				{frame >= b.pull - 6 && (
					<g opacity={Math.min(1, pinIn * 1.4)}>
						<line x1={ax(pinV)} y1={LINE_Y} x2={ax(pinV)} y2={LINE_Y - 38} stroke={TOK.amber} strokeWidth={4 + closer * 1.5} strokeLinecap="round" />
						<circle cx={ax(pinV)} cy={LINE_Y} r={7} fill={TOK.amber} stroke={TOK.amberDim} strokeWidth={1.5} />
						<circle cx={ax(pinV)} cy={LINE_Y - 40} r={8 + closer * 1.5} fill={TOK.amber} stroke={TOK.amberDim} strokeWidth={1.5} />
						{slide > 0.05 && slide < 1 && (
							<text x={ax(pinV) + 18} y={LINE_Y - 34} fill={TOK.amberInk} fontSize={22} fontWeight={800}>←</text>
						)}
						<text x={ax(ar)} y={LINE_Y - 56} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800} opacity={arrived}>
							{arLabel} {fmt(ar, 2)}
						</text>
					</g>
				)}
			</g>
		</svg>
	);
};
