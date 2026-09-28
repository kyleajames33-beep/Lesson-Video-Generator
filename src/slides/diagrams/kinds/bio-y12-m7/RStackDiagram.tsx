// RStackDiagram (bio12m7RStack) — layered measures multiply to push R below 1.
//
// Left: R as a glossy column on a plinth, with the R = 1 line marked. Each
// measure chip lands on the stack on its beat; then their effects are applied
// one after another, each multiplying R by its fraction, so the column
// shrinks step by step and only the full stack takes it under the line.
// Right: once R < 1, a transmission tree shrinks generation by generation;
// each generation's count is computed as round(cases × R^g).
// The starting R and the fractions are illustrative (no values are shown on
// screen); the claim is only "each cuts a fraction; together below 1".

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, shade, textWidth, wrap} from './shared';
import {Icon} from './icons';

type Beats = {column: number; multiply: number; multiplyEnd: number; below: number; tree: number; treeEnd: number};
export type RStackProps = {
	title?: string;
	r0?: number;
	measures: {name: string; factor: number; at: number}[];
	cases?: number;
	generations?: number;
	labels?: {r?: string; one?: string; multiply?: string; below?: string; tree?: string};
	footer?: {text: string; at: number; amber?: boolean}[];
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7r';
const ease = Easing.inOut(Easing.cubic);

export const RStackDiagram = ({title, r0 = 2.6, measures, cases = 8, generations = 5, labels = {}, footer = [], beats, delay = 62}: RStackProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({column: 20, multiply: 300, multiplyEnd: 480, below: 480, tree: 550, treeEnd: 700}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const colX = 300;
	const baseY = top + 400;
	const unit = 110; // px per 1.0 of R
	// R after applying measures progressively
	const nM = measures.length;
	const stepLen = (b.multiplyEnd - b.multiply) / nM;
	let R = r0;
	measures.forEach((m, i) => {
		const t = interpolate(frame, [b.multiply + i * stepLen, b.multiply + (i + 1) * stepLen], [0, 1], {...clamp, easing: ease});
		R = R * (1 - (1 - m.factor) * t);
	});
	const finalR = measures.reduce((r, m) => r * m.factor, r0);
	const below = R < 1;
	const colH = R * unit;
	const colColor = below ? theme.accent : PAL.sick;
	// tree
	const counts = Array.from({length: generations}, (_, g) => Math.max(0, Math.round(cases * finalR ** g)));
	const tx0 = 470;
	const tx1 = 740;
	const genY = (g: number) => top + 70 + g * ((baseY - top - 110) / (generations - 1));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Layered measures drive R below 1'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<defs>
				<linearGradient id={`${ID}-col`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={shade(colColor, 0.2)} />
					<stop offset="55%" stopColor={colColor} />
					<stop offset="100%" stopColor={shade(colColor, -0.25)} />
				</linearGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={colX - 90} cy={baseY} rx={200} />
			</g>
			{/* R column */}
			<g opacity={fadeAt(frame, b.column)}>
				<rect x={colX - 34} y={baseY - colH} width={68} height={colH} rx={10} fill={`url(#${ID}-col)`} />
				<ellipse cx={colX} cy={baseY - colH} rx={34} ry={9} fill={shade(colColor, 0.3)} />
				<text x={colX} y={baseY - colH - 18} textAnchor="middle" fill={colColor} fontSize={22} fontWeight={800}>{labels.r ?? 'R'}</text>
			</g>
			{/* R = 1 line */}
			<g opacity={fadeAt(frame, b.column)}>
				<line x1={colX - 50} y1={baseY - unit} x2={colX + 56} y2={baseY - unit} stroke={TOK.amber} strokeWidth={3} strokeDasharray="8 6" />
				<text x={colX + 62} y={baseY - unit + 6} textAnchor="start" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{labels.one ?? 'R = 1'}</text>
			</g>
			{/* measure chips stacked beside the column */}
			{measures.map((m, i) => {
				const p = popAt(frame, fps, m.at);
				if (p <= 0) return null;
				const applied = frame >= b.multiply + (i + 1) * stepLen;
				const w = textWidth(m.name, 16) + 26;
				const y = baseY - 30 - i * 40;
				const x = colX - 52 - w / 2;
				return (
					<g key={i} transform={`translate(${x},${y - (1 - Math.min(1, p)) * 40}) scale(${Math.min(1, p)})`}>
						<rect x={-w / 2} y={-16} width={w} height={32} rx={9} fill={applied ? theme.soft : '#ffffff'} stroke={theme.accent} strokeWidth={2} />
						<rect x={-w / 2 + 4} y={12} width={w - 8} height={4} rx={2} fill="rgba(0,0,0,0.08)" />
						<text y={6} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{m.name}</text>
					</g>
				);
			})}
			<Lines x={colX - 110} y={top + 40} lines={wrap(labels.multiply ?? 'each cuts R by a fraction; the cuts multiply', 30)} size={17} color={TOK.ink} opacity={fadeAt(frame, b.multiply)} />
			{below && frame >= b.below && (
				<text x={colX - 110} y={top + 92} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.below)}>{labels.below ?? 'together: R below 1'}</text>
			)}
			{/* transmission tree, generation by generation */}
			<g opacity={fadeAt(frame, b.tree)}>
				<text x={(tx0 + tx1) / 2} y={top + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{labels.tree ?? 'cases per generation'}</text>
				{counts.map((c, g) => {
					const at = b.tree + (g * (b.treeEnd - b.tree)) / generations;
					const o = fadeAt(frame, at, 14);
					const y = genY(g);
					return (
						<g key={g} opacity={o}>
							<text x={tx0 - 8} y={y + 5} textAnchor="end" fill={TOK.inkMute} fontSize={15} fontWeight={800}>{`gen ${g + 1}`}</text>
							{Array.from({length: c}, (_, k) => (
								<Icon key={k} id={ID} name="sickPerson" x={tx0 + 22 + k * 36} y={y - 6 + idleBob(frame, k + g * 3, 0.8)} s={0.36} frame={frame} />
							))}
							{g < counts.length - 1 && <line x1={tx0 + 10} y1={y + 18} x2={tx0 + 10} y2={genY(g + 1) - 22} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />}
						</g>
					);
				})}
			</g>
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
			{/* hold life: the line under 1 breathes once R is below it */}
			{below && <line x1={colX - 34} y1={baseY - unit} x2={colX + 34} y2={baseY - unit} stroke={TOK.amber} strokeWidth={4 + pulse * 2} opacity={0.5} />}
		</svg>
	);
};
