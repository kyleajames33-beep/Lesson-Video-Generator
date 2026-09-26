// EnergyBalanceDiagram — "dissolving is an energy balance" as a pan balance.
//
// A balance stands on a plinth. The steps that COST energy drop, one crate at a
// time, into the left pan ("energy spent") and the beam tips left. The step that
// RELEASES energy drops into the right pan ("energy released"); when it pays
// back the costs the beam swings level-to-right and the verdict appears (amber).
// Qualitative only: crate sizes show the idea of payback, not measured values.
//
// Config: `costs` and `release` crates (label + sub), the verdict text, a
// follow-up note, and beats (frames after `delay`).

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {clamp, fadeAt, popAt, shade} from './shared';

export type Crate = {label: string; sub: string; at: number};
export type EnergyBalanceProps = {
	title?: string;
	costs?: Crate[];
	release?: Crate;
	verdict?: string;
	verdictAt?: number;
	note?: string;
	noteAt?: number;
	delay?: number;
};

const ID = 'c11bal';
const W = 760;
const H = 530;
const PIVOT = {x: 380, y: 196};
const ARM = 238; // pivot → pan hanger
const STRING = 118;
const CRATE_W = 214;
const CRATE_H = 46;
const ease = Easing.inOut(Easing.cubic);

const DEFAULT_COSTS: Crate[] = [
	{label: '1. break solute–solute', sub: 'costs energy', at: 65},
	{label: '2. break solvent–solvent', sub: 'costs energy', at: 215},
];
const DEFAULT_RELEASE: Crate = {label: '3. form solute–solvent', sub: 'releases energy', at: 389};

export const EnergyBalanceDiagram = ({
	title = 'Dissolving is an energy balance',
	costs = DEFAULT_COSTS,
	release = DEFAULT_RELEASE,
	verdict = 'Pays back → it dissolves',
	verdictAt = 603,
	note = 'It pays back when the new forces are the same type as those broken',
	noteAt = 777,
	delay = 62,
}: EnergyBalanceProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	// Beam angle (degrees, + = right side down). Each cost crate tips it left;
	// the release crate, sized to pay back both, swings it slightly right.
	const land = (at: number) => interpolate(frame, [at + 10, at + 40], [0, 1], {...clamp, easing: ease});
	const costLoad = costs.reduce((s, c) => s + land(c.at), 0);
	const relLoad = land(release.at) * costs.length;
	const angle = Math.max(-11, Math.min(6, (relLoad - costLoad) * 5.5 + (relLoad > 0 ? 2.5 * land(release.at) : 0)));
	const rad = (angle * Math.PI) / 180;
	const hook = (side: -1 | 1) => ({x: PIVOT.x + side * ARM * Math.cos(rad), y: PIVOT.y + side * ARM * Math.sin(rad)});
	const L = hook(-1);
	const R = hook(1);
	const panY = (h: {y: number}) => h.y + STRING;

	const crateEl = (c: Crate, x: number, y: number, h: number, fill: string, stroke: string, key: string, dropT: number) => {
		const dy = (1 - dropT) * -140;
		return (
			<g key={key} opacity={Math.min(1, dropT * 3)} transform={`translate(0, ${dy})`}>
				<rect x={x - CRATE_W / 2 + 3} y={y - h + 4} width={CRATE_W} height={h} rx={10} fill="rgba(40,40,30,0.14)" />
				<rect x={x - CRATE_W / 2} y={y - h} width={CRATE_W} height={h} rx={10} fill={fill} stroke={stroke} strokeWidth={2.5} />
				<text x={x} y={y - h / 2 - 2} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>
					{c.label}
				</text>
				<text x={x} y={y - h / 2 + 18} textAnchor="middle" fill={stroke} fontSize={16} fontWeight={800}>
					{c.sub}
				</text>
			</g>
		);
	};
	const drop = (at: number) => interpolate(frame, [at, at + 22], [0, 1], {...clamp, easing: Easing.in(Easing.quad)});

	const verdictIn = popAt(frame, fps, verdictAt);
	const costStroke = '#b0463d';
	const costFill = '#fbe9e6';
	const relStroke = theme.accent;
	const relFill = shade(theme.soft, -0.02);

	const Pan = ({h, side}: {h: {x: number; y: number}; side: -1 | 1}) => {
		const py = panY(h);
		return (
			<g>
				<line x1={h.x} y1={h.y} x2={h.x - 100} y2={py} stroke="#7a6a55" strokeWidth={2} />
				<line x1={h.x} y1={h.y} x2={h.x + 100} y2={py} stroke="#7a6a55" strokeWidth={2} />
				<path d={`M ${h.x - 112} ${py} Q ${h.x} ${py + 26} ${h.x + 112} ${py} Z`} fill={side < 0 ? '#c9b89c' : '#c9b89c'} stroke="#8a7658" strokeWidth={2} />
				<ellipse cx={h.x} cy={py} rx={112} ry={8} fill="#e2d4bb" stroke="#8a7658" strokeWidth={2} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}: energy spent breaking forces against energy released forming new ones`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{title}
			</text>

			{/* Plinth + stand */}
			<g opacity={fadeAt(frame, 2)}>
				<DioramaPlinth id={ID} cx={PIVOT.x} cy={432} rx={124} />
				<path d={`M ${PIVOT.x - 40} 428 L ${PIVOT.x + 40} 428 L ${PIVOT.x + 12} ${PIVOT.y + 8} L ${PIVOT.x - 12} ${PIVOT.y + 8} Z`} fill="#8a6a44" stroke="#5e4428" strokeWidth={2} />
				<rect x={PIVOT.x - 54} y={420} width={108} height={13} rx={5} fill="#6f5234" />
			</g>

			{/* Column headings above each pan */}
			<g opacity={fadeAt(frame, 20)}>
				<text x={PIVOT.x - ARM} y={84} textAnchor="middle" fill={costStroke} fontSize={22} fontWeight={800}>energy spent</text>
				<text x={PIVOT.x + ARM} y={84} textAnchor="middle" fill={relStroke} fontSize={22} fontWeight={800}>energy released</text>
			</g>

			{/* Beam, pans, crates */}
			<g opacity={fadeAt(frame, 4)}>
				<line x1={L.x} y1={L.y} x2={R.x} y2={R.y} stroke="#6f5234" strokeWidth={9} strokeLinecap="round" />
				<circle cx={PIVOT.x} cy={PIVOT.y} r={10} fill="#e0b64a" stroke="#8a6a1a" strokeWidth={2} />
				<Pan h={L} side={-1} />
				<Pan h={R} side={1} />
				{costs.map((c, i) => crateEl(c, L.x, panY(L) - 2 - i * (CRATE_H + 4), CRATE_H, costFill, costStroke, `c${i}`, drop(c.at)))}
				{crateEl(release, R.x, panY(R) - 2, costs.length * CRATE_H + (costs.length - 1) * 4 + 8, relFill, relStroke, 'r', drop(release.at))}
			</g>

			{/* Verdict */}
			<g opacity={Math.min(1, verdictIn * 1.4)} transform={`translate(${W / 2}, 132) scale(${0.8 + 0.2 * Math.min(1, verdictIn)})`}>
				<rect x={-190} y={-22} width={380} height={44} rx={22} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				<text x={0} y={8} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>
					{verdict}
				</text>
			</g>
			<g opacity={fadeAt(frame, noteAt, 16)} transform={`translate(0, ${idleBob(frame, 3, 0.6)})`}>
				<text x={W / 2} y={516} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					{note}
				</text>
			</g>
		</svg>
	);
};
