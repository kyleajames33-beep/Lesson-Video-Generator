// CropDiagram — genetic diversity as insurance against a new disease.
//
// Two fields on stone plinths. Each plant carries a genotype badge (coloured
// ball at its base). The diverse field has several genotypes; the uniform
// field is one genotype (clones). On the beat a disease sweeps across both:
// every plant of the susceptible genotype wilts and browns, the rest stay
// green. Survivor counts are computed from the plants drawn, so "some
// survive" versus "none survive" is counted, not asserted.
// Frames relative to `delay`.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, GlossDefs, PURPLE, ROSE, clamp, fadeAt, mix, textWidth} from './shared';

export type Field = {title: string; genotypes: number[]; at: number; note?: string};
export type CropProps = {
	fields: [Field, Field];
	/** Genotype index that the disease kills. */
	susceptible?: number;
	disease: {label: string; at: number};
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6crop';
const W = 760;
const H = 530;
const GENO = [BLUE, ROSE, PURPLE];
const LEAF = '#5fae5a';
const DEAD = '#a4895a';

const Plant = ({x, y, g, wilt, frame, k}: {x: number; y: number; g: number; wilt: number; frame: number; k: number}) => {
	const leaf = mix(LEAF, DEAD, wilt);
	const droop = wilt * 38;
	const sway = idleBob(frame, k, 1.4) * (1 - wilt);
	return (
		<g transform={`translate(${x},${y}) scale(0.86)`}>
			<ellipse cx={2} cy={2} rx={14} ry={4} fill="rgba(40,36,30,0.22)" />
			<path d={`M 0 0 Q ${2 + sway} -24 ${sway + wilt * 8} ${-46 + wilt * 12}`} stroke={mix('#5d8f3c', DEAD, wilt)} strokeWidth={5} fill="none" strokeLinecap="round" />
			{[-1, 1].map((side) => (
				<path
					key={side}
					d={`M ${sway + wilt * 8} ${-44 + wilt * 12} q ${side * 22} ${-18 + droop} ${side * 34} ${-4 + droop}`}
					stroke={leaf}
					strokeWidth={9}
					fill="none"
					strokeLinecap="round"
				/>
			))}
			<path d={`M ${sway + wilt * 8} ${-46 + wilt * 12} q ${4} -16 ${2 + wilt * 20} ${-26 + droop * 0.8}`} stroke={leaf} strokeWidth={8} fill="none" strokeLinecap="round" />
			<circle cx={0} cy={4} r={7} fill={`url(#${ID}-g-g${g})`} stroke="rgba(0,0,0,0.3)" />
		</g>
	);
};

export const CropDiagram = ({fields, susceptible = 0, disease, footer, delay = 62}: CropProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const xs = [196, 564];
	const PY = 268;
	const RX = 160;
	const sweep = interpolate(frame, [disease.at, disease.at + 60], [0, 1], clamp);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A diverse crop versus a single genotype facing a new disease" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{g0: GENO[0], g1: GENO[1], g2: GENO[2]}} />
			{fields.map((f, i) => {
				const n = f.genotypes.length;
				const cols = Math.ceil(n / 3);
				const pos = f.genotypes.map((_, k) => {
					const row = k % 3;
					const col = Math.floor(k / 3);
					return {x: xs[i] + (col - (cols - 1) / 2) * 86 + (row - 1) * 16, y: PY - 24 + row * 25};
				});
				// the disease front passes left to right across each field
				const wiltOf = (k: number) => {
					if (f.genotypes[k] !== susceptible) return 0;
					const local = (pos[k].x - (xs[i] - RX)) / (2 * RX);
					return interpolate(sweep, [local * 0.7, local * 0.7 + 0.3], [0, 1], clamp);
				};
				const alive = f.genotypes.filter((_, k) => wiltOf(k) < 0.5).length;
				const kinds = new Set(f.genotypes).size;
				const done = fadeAt(frame, disease.at + 60, 16);
				const none = alive === 0;
				const tagText = none ? `none survive (0 of ${n})` : `${alive} of ${n} ${alive === 1 ? 'survives' : 'survive'}`;
				const tw = textWidth(tagText, 17) + 26;
				return (
					<g key={i} opacity={fadeAt(frame, f.at, 14)}>
						<text x={xs[i]} y={46} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{f.title}</text>
						<text x={xs[i]} y={72} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
							{kinds === 1 ? 'one genotype (clones)' : `${kinds} genotypes`}
						</text>
						<DioramaPlinth id={`${ID}f${i}`} cx={xs[i]} cy={PY} rx={RX} />
						{/* disease spreading through the soil, left to right */}
						<defs>
							<clipPath id={`${ID}clip${i}`}>
								<ellipse cx={xs[i]} cy={PY} rx={RX * 0.96} ry={RX * 0.34 * 0.96} />
							</clipPath>
							<radialGradient id={`${ID}stain${i}`} cx="50%" cy="50%" r="50%">
								<stop offset="0%" stopColor="#6e5226" stopOpacity={0.55} />
								<stop offset="100%" stopColor="#6e5226" stopOpacity={0} />
							</radialGradient>
						</defs>
						<g clipPath={`url(#${ID}clip${i})`} opacity={fadeAt(frame, disease.at - 6)}>
							<ellipse cx={xs[i] - RX + 2 * RX * sweep * 0.55} cy={PY} rx={40 + RX * 1.3 * sweep} ry={30 + RX * 0.5 * sweep} fill={`url(#${ID}stain${i})`} />
						</g>
						{pos.map((p, k) => (
							<Plant key={k} x={p.x} y={p.y} g={f.genotypes[k]} wilt={wiltOf(k)} frame={frame} k={k + i * 20} />
						))}
						<g opacity={done} transform={`translate(${xs[i]},${PY + 110})`}>
							<rect x={-tw / 2} y={-16} width={tw} height={32} rx={16} fill={none ? '#fff6e6' : '#fff'} stroke={none ? AMBER : TOK.inkMute} strokeWidth={none ? 2.5 + idlePulse(frame) : 2} />
							<text y={6} textAnchor="middle" fill={none ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{tagText}</text>
						</g>
						{f.note && (
							<text x={xs[i]} y={PY + 152} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={done}>{f.note}</text>
						)}
					</g>
				);
			})}
			<text x={W / 2} y={112} textAnchor="middle" fill="#7a5a2c" fontSize={17} fontWeight={800} opacity={fadeAt(frame, disease.at - 10)}>{disease.label}</text>
			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
