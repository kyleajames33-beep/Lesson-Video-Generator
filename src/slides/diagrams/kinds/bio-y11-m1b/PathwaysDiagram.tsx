// PathwaysDiagram (bio11m1bPathways) — one fuel, different routes: aerobic
// versus anaerobic respiration.
//
// Glucose sits on a stone plinth on the left. Branches grow to the right, one
// per route (props), each ending in its products and an energy bar. Bars are
// qualitative (the scene gives no ATP numbers): `energy` is a 0..1 bar length,
// so "far more" and "far less" are visible without inventing a figure. The
// aerobic row can carry the amber highlight. An optional corner tag marks the
// scene as extension ("beyond the syllabus").
//
// Props: `routes` [{condition, who?, products, energyLabel, energy, at, amber?}],
// `compareAt` (bars' caption), `tag`, `rule` {text, at}.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {fadeAt, ease, lerp, CORAL, Glucose, Pill, textWidth} from './shared';

type Route = {condition: string; who?: string; products: string; energyLabel: string; energy: number; at: number; amber?: boolean};
export type PathwaysProps = {
	routes: Route[];
	compareAt?: number;
	compareText?: string;
	tag?: string;
	rule?: {text: string; at: number};
	delay?: number;
};

const ID = 'b11m1bPath';
const W = 760, H = 530;
const GX = 100, GY = 250;

export const PathwaysDiagram = ({routes, compareAt, compareText = 'same glucose, very different energy yield', tag, rule, delay = 62}: PathwaysProps) => {
	const frame = useCurrentFrame() - delay;
	useVideoConfig();
	const theme = useAccent();
	const n = routes.length;
	const top = 70, gap = n === 3 ? 140 : 180;
	const rowY = (i: number) => top + 40 + i * gap;
	const BX = 250; // branch end / row start
	const pulse = idlePulse(frame, 50);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Glucose broken down by aerobic and anaerobic routes, with their products and energy yield" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={GX} cy={GY + 40} rx={70} />
				<Glucose x={GX} y={GY + 12 + idleBob(frame, 1, 1.3)} s={1.3} label={false} />
				<text x={GX} y={GY + 102} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>glucose</text>
			</g>
			{tag && (
				<g opacity={fadeAt(frame, 0, 14)}>
					<Pill x={W - 16 - (textWidth(tag, 14) + 22) / 2} y={20} text={tag} color={TOK.inkDim} size={14} />
				</g>
			)}

			{routes.map((r, i) => {
				const y = rowY(i);
				const grow = ease(frame, r.at, r.at + 30);
				const op = fadeAt(frame, r.at + 10, 14);
				const col = r.amber ? TOK.amberInk : i === 0 ? theme.accent : CORAL;
				const bar = ease(frame, r.at + 30, r.at + 70) * r.energy;
				const bx0 = BX + 10, bxMax = W - 30;
				return (
					<g key={i}>
						{/* branch */}
						<path d={`M ${GX + 34} ${GY + 8} C ${GX + 90} ${GY + 8} ${BX - 70} ${y} ${lerp(GX + 34, BX, grow)} ${y}`} fill="none" stroke={col} strokeWidth={5} strokeLinecap="round" opacity={grow > 0 ? 1 : 0} strokeDasharray="600" strokeDashoffset={600 * (1 - grow)} />
						<g opacity={op}>
							<text x={BX + 10} y={y - 30} fill={col} fontSize={18} fontWeight={800}>{r.condition}</text>
							{r.who && <text x={BX + 10} y={y - 10} fill={TOK.inkDim} fontSize={15} fontWeight={700}>{r.who}</text>}
							<text x={BX + 10} y={y + 20} fill={TOK.ink} fontSize={18} fontWeight={800}>→ {r.products}</text>
							{/* energy bar */}
							<rect x={bx0} y={y + 34} width={bxMax - bx0} height={20} rx={10} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
							<rect x={bx0} y={y + 34} width={Math.max(20, (bxMax - bx0) * bar)} height={20} rx={10} fill={col} opacity={r.amber ? 0.75 + 0.25 * pulse : 0.9} />
							{r.energy > 0.6 ? (
								<text x={bx0 + (bxMax - bx0) * bar - 12} y={y + 49} textAnchor="end" fill="#ffffff" fontSize={14} fontWeight={800} opacity={fadeAt(frame, r.at + 70)}>{r.energyLabel}</text>
							) : (
								<text x={bx0 + Math.max(20, (bxMax - bx0) * bar) + 10} y={y + 49} fill={col} fontSize={15} fontWeight={800} opacity={fadeAt(frame, r.at + 70)}>{r.energyLabel}</text>
							)}
						</g>
					</g>
				);
			})}

			{compareAt !== undefined && (
				<text x={(BX + W) / 2} y={H - 42} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, compareAt)}>{compareText}</text>
			)}
			{rule && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, rule.at) * (0.82 + 0.18 * pulse)}>{rule.text}</text>
			)}
		</svg>
	);
};
