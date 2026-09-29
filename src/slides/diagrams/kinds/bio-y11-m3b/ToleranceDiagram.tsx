// ToleranceDiagram (bio11m3Tolerance) — a species' tolerance range for one
// abiotic factor, and the distribution it produces on the ground.
//
// Top: abundance against the factor draws itself as a hump. Zone bands then
// shade in: absent (beyond the limits) · stress (near the edges: rarer) ·
// optimum (most abundant). Bottom: a stone ledge running along the same
// factor gradient, on which organisms stand. How many stand in each stretch
// is COMPUTED from the curve's height there, so the crowd thins towards the
// edges and stops at the limits exactly where the graph says it should.
//
// Beats (frames after `delay`): curve, zones, optimum, ground, limit.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Footer, H, Pill, Title, W, easeT, fadeAt, popAt, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName} from './icons';

export type ToleranceProps = {
	title?: string;
	factor: string;
	lowLabel?: string;
	highLabel?: string;
	organism?: AnyIconName;
	beats?: Partial<{curve: number; zones: number; optimum: number; ground: number; limit: number}>;
	limitText?: string;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3tol';
// tolerance limits and optimum on a 0..1 factor axis
const LO = 0.14;
const HI = 0.86;
const OPT_LO = 0.38;
const OPT_HI = 0.62;
const hump = (u: number) => (u <= LO || u >= HI ? 0 : 0.8 * Math.pow(Math.sin(((u - LO) / (HI - LO)) * Math.PI), 1.6));

export const ToleranceDiagram = ({title, factor, lowLabel = 'low', highLabel = 'high', organism = 'shrub', beats = {}, limitText = 'beyond the limit: absent', footer = [], delay = 62}: ToleranceProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {curve: 0, zones: 9999, optimum: 9999, ground: 9999, limit: 9999, ...beats};
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const L = 70;
	const R = W - 30;
	const T = top + 34;
	const B = top + 230;
	const X = (u: number) => L + u * (R - L);
	const Y = (v: number) => B - v * (B - T);
	const pulse = idlePulse(frame);

	const t = easeT(frame, b.curve, b.curve + 80);
	const N = 120;
	const pts = Array.from({length: Math.round(N * t) + 1}, (_, i) => {
		const u = i / N;
		return `${i ? 'L' : 'M'} ${X(u)} ${Y(hump(u))}`;
	}).join(' ');

	// ground: 12 stretches; organisms per stretch computed from the hump
	const stretches = 12;
	const groundY = B + 118;
	const zones = [
		{a: 0, b: LO, name: 'absent', fill: 'rgba(179,38,30,0.08)'},
		{a: LO, b: OPT_LO, name: 'stress', fill: 'rgba(240,168,48,0.12)'},
		{a: OPT_LO, b: OPT_HI, name: 'optimum', fill: 'rgba(46,139,87,0.12)'},
		{a: OPT_HI, b: HI, name: 'stress', fill: 'rgba(240,168,48,0.12)'},
		{a: HI, b: 1, name: 'absent', fill: 'rgba(179,38,30,0.08)'},
	];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Tolerance range'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* zone bands */}
			{zones.map((z, i) => (
				<g key={i} opacity={fadeAt(frame, b.zones + i * 8, 14)}>
					<rect x={X(z.a)} y={T - 6} width={X(z.b) - X(z.a)} height={B - T + 6} fill={z.fill} />
					<text x={(X(z.a) + X(z.b)) / 2} y={T + 12} textAnchor="middle" fill={z.name === 'optimum' ? '#2e7a4f' : z.name === 'stress' ? TOK.amberInk : '#a3372e'} fontSize={15} fontWeight={800}>{z.name}</text>
				</g>
			))}
			{/* axes */}
			<g opacity={fadeAt(frame, 0, 12)}>
				<line x1={L} y1={B} x2={R} y2={B} stroke={TOK.inkDim} strokeWidth={2.5} />
				<line x1={L} y1={B} x2={L} y2={T - 6} stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={L - 16} y={(T + B) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(-90 ${L - 16} ${(T + B) / 2})`}>abundance</text>
				<text x={(L + R) / 2} y={B + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{factor}</text>
				<text x={L} y={B + 24} textAnchor="start" fill={TOK.inkMute} fontSize={14} fontWeight={700}>{lowLabel}</text>
				<text x={R} y={B + 24} textAnchor="end" fill={TOK.inkMute} fontSize={14} fontWeight={700}>{highLabel}</text>
			</g>
			<path d={pts} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinecap="round" />
			{frame > b.optimum && (
				<g opacity={fadeAt(frame, b.optimum, 12)}>
					<circle cx={X(0.5)} cy={Y(0.8)} r={9 + 3 * pulse} fill={TOK.amber} opacity={0.85} />
					<Pill x={X(0.5)} y={Y(0.8) - 26} text="most abundant" size={15} color={TOK.amber} textColor={TOK.amberInk} />
				</g>
			)}
			{/* ground ledge along the same gradient */}
			<g opacity={fadeAt(frame, b.ground, 14)}>
				<rect x={L} y={groundY} width={R - L} height={16} rx={6} fill="#d3cfc7" stroke="#bdb8ae" strokeWidth={2} />
				<rect x={L} y={groundY + 16} width={R - L} height={10} rx={4} fill="#b3afa7" />
				<text x={(L + R) / 2} y={groundY + 48} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>on the ground, along the same gradient</text>
			</g>
			{Array.from({length: stretches}, (_, s) => {
				const u = (s + 0.5) / stretches;
				const count = Math.round((hump(u) / 0.8) * 3);
				return Array.from({length: count}, (_, k) => {
					const x = X(s / stretches) + ((R - L) / stretches) * ((k + 0.5) / count);
					const p = popAt(frame, fps, b.ground + 10 + s * 4 + k * 3);
					return <EcoIcon key={`${s}-${k}`} id={ID} name={organism} x={x} y={groundY - 22 + idleBob(frame, s * 3 + k, 1)} s={0.42 * Math.min(1, p)} frame={frame} />;
				});
			})}
			{frame > b.limit && (
				<g opacity={fadeAt(frame, b.limit, 12)}>
					<line x1={X(HI)} y1={T} x2={X(HI)} y2={groundY + 16} stroke="#a3372e" strokeWidth={2.5} strokeDasharray="6 5" />
					<line x1={X(LO)} y1={T} x2={X(LO)} y2={groundY + 16} stroke="#a3372e" strokeWidth={2.5} strokeDasharray="6 5" />
					<text x={X(LO) - 8} y={groundY - 8} textAnchor="end" fill="#a3372e" fontSize={14} fontWeight={800}>limit</text>
					<text x={X(HI) + 8} y={groundY - 8} textAnchor="start" fill="#a3372e" fontSize={14} fontWeight={800}>limit</text>
				</g>
			)}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
