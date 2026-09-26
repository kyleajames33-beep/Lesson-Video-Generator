// RatioConvertDiagram (kind: chem11m2Ratio): moles known × (wanted ÷ known).
//
// The balanced equation sits on top with the two coefficients that matter
// picked out. Moles are drawn as crates (each crate = `crate` mol): the known
// substance's crates stand on the left plinth, the ratio stands in the middle
// as a fraction card with WANTED on top and KNOWN underneath, and the wanted
// substance's crates stack up on the right. The answer is computed:
// wanted = known × wantedCoef ÷ knownCoef.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {LANE, clamp, shade, textW} from './parts';

type Sp = {label: string; coef: number};

export type RatioConvertProps = {
	equation?: string;
	known?: Sp & {moles: number};
	wanted?: Sp;
	crate?: number;
	dp?: number;
	beats?: {known?: number; ratio?: number; wanted?: number; onTop?: number};
	delay?: number;
};

const ID = 'c11m2rat';
const W = 760;
const VB_H = 520;
const PY = 356;

const Crate = ({x, y, color, label}: {x: number; y: number; color: string; label: string}) => {
	const w = 46, h = 38, d = 12;
	return (
		<g>
			<path d={`M ${x - w / 2} ${y - h} l ${d} ${-d * 0.7} h ${w} l ${-d} ${d * 0.7} Z`} fill={shade(color, 0.22)} stroke={shade(color, -0.3)} strokeWidth={1.2} />
			<path d={`M ${x + w / 2} ${y - h} l ${d} ${-d * 0.7} v ${h} l ${-d} ${d * 0.7} Z`} fill={shade(color, -0.18)} stroke={shade(color, -0.3)} strokeWidth={1.2} />
			<rect x={x - w / 2} y={y - h} width={w} height={h} fill={color} stroke={shade(color, -0.3)} strokeWidth={1.2} />
			<text x={x} y={y - h / 2 + 6} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={900}>{label}</text>
		</g>
	);
};

// Crate positions: a neat stack, 3 per row, rows going up.
const crateSlots = (cx: number, baseY: number, n: number) =>
	Array.from({length: n}, (_, i) => {
		const row = Math.floor(i / 3), col = i % 3;
		const inRow = Math.min(3, n - row * 3);
		return {x: cx + (col - (inRow - 1) / 2) * 54 - row * 4, y: baseY - row * 44};
	});

export const RatioConvertDiagram = ({
	equation = '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O',
	known = {label: 'Ca(OH)₂', coef: 1, moles: 0.3},
	wanted = {label: 'HCl', coef: 2},
	crate = 0.1,
	dp = 1,
	beats = {},
	delay = 62,
}: RatioConvertProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const bKnown = beats.known ?? 30;
	const bRatio = beats.ratio ?? bKnown + 120;
	const bWanted = beats.wanted ?? bRatio + 150;
	const onTop = beats.onTop !== undefined && frame >= beats.onTop;

	const wantedMoles = (known.moles * wanted.coef) / known.coef;
	const nKnown = Math.round(known.moles / crate);
	const nWanted = Math.round(wantedMoles / crate);
	const crateLabel = crate.toFixed(dp);
	const kSlots = crateSlots(130, PY - 6, nKnown);
	const wSlots = crateSlots(630, PY - 6, nWanted);
	const working = `${known.moles.toFixed(dp)} × ${wanted.coef} ÷ ${known.coef} = ${wantedMoles.toFixed(dp)} mol`;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`${working} of ${wanted.label}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fade(0)}>{equation}</text>
			<text x={W / 2} y={72} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={fade(bRatio)}>
				{`coefficients: ${wanted.label} ${wanted.coef}, ${known.label} ${known.coef}`}
			</text>

			{/* known */}
			<g opacity={fade(bKnown - 10, 14)}>
				<DioramaPlinth id={ID} cx={130} cy={PY} rx={112} />
			</g>
			{kSlots.map((p, i) => {
				const drop = spring({frame: frame - bKnown - i * 6, fps, config: {damping: 13, stiffness: 170}});
				const k = Math.max(0, Math.min(1, drop));
				return (
					<g key={i} opacity={k > 0.01 ? 1 : 0} transform={`translate(0, ${-(1 - k) * 90 + (frame > bKnown + 60 ? idleBob(frame, i, 0.8) : 0)})`}>
						<Crate x={p.x} y={p.y} color={LANE.given} label={crateLabel} />
					</g>
				);
			})}
			<g opacity={fade(bKnown + 20)}>
				<text x={130} y={PY + 92} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} letterSpacing="0.06em">KNOWN</text>
				<text x={130} y={PY + 122} textAnchor="middle" fill={LANE.given} fontSize={25} fontWeight={900}>{`${known.moles.toFixed(dp)} mol ${known.label}`}</text>
			</g>

			{/* ratio card */}
			<g opacity={fade(bRatio, 14)}>
				<rect x={318} y={150} width={124} height={170} rx={18} fill={TOK.bgLift} stroke={LANE.moles} strokeWidth={3} />
				<text x={346} y={250} textAnchor="middle" fill={LANE.moles} fontSize={40} fontWeight={900}>×</text>
				<text x={400} y={214} textAnchor="middle" fill={onTop ? TOK.amberInk : LANE.wanted} fontSize={48} fontWeight={900}>{wanted.coef}</text>
				<line x1={374} x2={426} y1={236} y2={236} stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" />
				<text x={400} y={290} textAnchor="middle" fill={LANE.given} fontSize={48} fontWeight={900}>{known.coef}</text>
				<text x={380} y={344} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.06em">MOLE RATIO</text>
			</g>
			<g opacity={fade(bRatio + 30)}>
				<text x={450} y={206} fill={onTop ? TOK.amberInk : LANE.wanted} fontSize={18} fontWeight={900}>wanted</text>
				<text x={450} y={284} fill={LANE.given} fontSize={18} fontWeight={900}>known</text>
			</g>
			{onTop && (
				<rect x={370} y={170} width={60} height={58} rx={12} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 2} />
			)}
			{/* arrows */}
			<g opacity={fade(bRatio + 10)}>
				<path d="M 214 250 L 300 250" stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" />
				<path d="M 290 241 L 302 250 L 290 259" fill="none" stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<g opacity={fade(bWanted - 10)}>
				<path d="M 460 250 L 546 250" stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" />
				<path d="M 536 241 L 548 250 L 536 259" fill="none" stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			</g>

			{/* wanted */}
			<g opacity={fade(bWanted - 10, 14)}>
				<DioramaPlinth id={ID} cx={630} cy={PY} rx={112} />
			</g>
			{wSlots.map((p, i) => {
				const drop = spring({frame: frame - bWanted - i * 6, fps, config: {damping: 13, stiffness: 170}});
				const k = Math.max(0, Math.min(1, drop));
				return (
					<g key={i} opacity={k > 0.01 ? 1 : 0} transform={`translate(0, ${-(1 - k) * 90 + (frame > bWanted + 70 ? idleBob(frame, i + 20, 0.8) : 0)})`}>
						<Crate x={p.x} y={p.y} color={LANE.wanted} label={crateLabel} />
					</g>
				);
			})}
			<g opacity={fade(bWanted + 30)}>
				<text x={630} y={PY + 92} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} letterSpacing="0.06em">WANTED</text>
				<text x={630} y={PY + 122} textAnchor="middle" fill={LANE.wanted} fontSize={25} fontWeight={900}>{`${wantedMoles.toFixed(dp)} mol ${wanted.label}`}</text>
			</g>

			<g opacity={fade(bWanted + 50)}>
				<rect x={W / 2 - (textW(working, 22) + 40) / 2} y={400} width={textW(working, 22) + 40} height={40} rx={20} fill={TOK.bgLift} stroke={LANE.moles} strokeWidth={2.5} />
				<text x={W / 2} y={427} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={900}>{working}</text>
			</g>
		</svg>
	);
};
