// GibbsSpectrumDiagram (kind: chem12m5GibbsSpectrum) — reversibility is a
// spectrum set by the size of ΔG.
//
// Two panels, each a free-energy curve (G against how far the reaction has
// gone, 0 % → 100 % products) with a ball that rolls downhill to the lowest
// point, and a plinth underneath whose mixture of reactant (teal) and product
// (violet) balls follows the ball. Left: ΔG large and negative, the minimum sits
// at the far right, so the reaction runs to completion (→). Right: ΔG near
// zero, the minimum sits part-way, so a real mixture remains (⇌). At the
// minimum ΔG = 0: no push either way, and the ball just rocks there.
//
// The curves are the ideal-mixing free energy of A ⇌ B:
//   G(ξ) = ξ·ΔG°/RT + ξ ln ξ + (1 − ξ) ln(1 − ξ),  minimum at ξ = K / (1 + K),
// so the resting point is computed, not drawn by hand. No numbers are shown.
//
// Beat plan (frames after `delay`): `bigAt` left ball rolls; `smallAt` right
// ball rolls; `zeroAt` the "ΔG = 0 here" marker; `mixAt` the "not 50 : 50" note.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Pill, clamp, ease, hash01, ramp, scatterSlots} from './shared';

export type GibbsSpectrumProps = {
	delay?: number;
	bigAt?: number;
	smallAt?: number;
	zeroAt?: number;
	mixAt?: number;
};

const ID = 'c12m5gs';
const W = 760;
const PX = [16, 396]; // panel left edges
const PW = 348;
const CY0 = 104, CY1 = 250; // curve box
const PLY = 368, PRX = 118;
const N = 12;
// ΔG°/RT for the two cases: strongly negative, and slightly negative.
const CASES = [-9, -0.7];
const PRODUCT = '#8a5cc9';

const G = (x: number, g0: number) => {
	const e = Math.min(1 - 1e-6, Math.max(1e-6, x));
	return e * g0 + e * Math.log(e) + (1 - e) * Math.log(1 - e);
};
const xiEq = (g0: number) => {
	const K = Math.exp(-g0);
	return K / (1 + K);
};

export const GibbsSpectrumDiagram = ({delay = 62, bigAt = 190, smallAt = 454, zeroAt = 745, mixAt = 1009}: GibbsSpectrumProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	const panel = (k: 0 | 1) => {
		const g0 = CASES[k];
		const px = PX[k];
		const at = k === 0 ? bigAt : smallAt;
		const cx0 = px + 40, cx1 = px + PW - 16;
		// Curve extent and scale.
		const samples = Array.from({length: 121}, (_, i) => i / 120);
		const gs = samples.map((x) => G(x, g0));
		const gMin = Math.min(...gs), gMax = Math.max(...gs);
		const sx = (x: number) => cx0 + x * (cx1 - cx0);
		const sy = (g: number) => CY0 + 10 + ((gMax - g) / (gMax - gMin)) * (CY1 - CY0 - 20);
		const d = samples.map((x, i) => `${i ? 'L' : 'M'} ${sx(x).toFixed(1)} ${sy(gs[i]).toFixed(1)}`).join(' ');
		const eq = xiEq(g0);
		// Ball rolls from pure reactants (ξ ≈ 0.02) down to the minimum, then rocks gently there.
		const roll = ease(interpolate(frame, [at + 20, at + 150], [0, 1], clamp));
		const rock = frame > at + 150 ? Math.sin((frame - at) / 22) * 0.025 * Math.min(1, (frame - at - 150) / 40) : 0;
		const xi = Math.max(0.005, Math.min(0.995, 0.02 + (eq - 0.02) * roll + rock * (k === 1 ? 1 : 0.3)));
		const bx = sx(xi), by = sy(G(xi, g0)) - 11;
		const nProd = Math.round(xi * N);
		const slots = scatterSlots(px + PW / 2, PLY, PRX, N, 32);
		const inP = ramp(frame, at - 30, 16);
		const done = ramp(frame, at + 150, 16);
		return (
			<g opacity={inP} key={k}>
				<text x={px + PW / 2} y={CY0 - 30} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>
					{k === 0 ? 'ΔG large and negative' : 'ΔG near zero'}
				</text>
				{/* axes */}
				<line x1={cx0} y1={CY1} x2={cx1} y2={CY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={cx0} y1={CY0} x2={cx0} y2={CY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={cx0 - 12} y={(CY0 + CY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} transform={`rotate(-90 ${cx0 - 12} ${(CY0 + CY1) / 2})`}>G</text>
				<text x={cx0} y={CY1 + 20} textAnchor="start" fill={TOK.inkDim} fontSize={15} fontWeight={700}>reactants</text>
				<text x={cx1} y={CY1 + 20} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>products</text>
				<path d={d} stroke={theme.accent} strokeWidth={4} fill="none" strokeLinecap="round" />
				{/* ΔG = 0 at the minimum */}
				{k === 1 && (
					<g opacity={ramp(frame, zeroAt, 14)}>
						<line x1={sx(eq)} y1={sy(G(eq, g0)) + 4} x2={sx(eq)} y2={CY1} stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.2} strokeDasharray="5 5" />
						<line x1={sx(eq) - 44} y1={sy(G(eq, g0))} x2={sx(eq) + 44} y2={sy(G(eq, g0))} stroke={TOK.amber} strokeWidth={3} />
					</g>
				)}
				<circle cx={bx} cy={by} r={11} fill={TOK.amber} stroke={TOK.amberDim} strokeWidth={1.5} />
				<circle cx={bx - 3.5} cy={by - 3.5} r={3.5} fill="#ffffff" opacity={0.7} />

				<DioramaPlinth id={ID} cx={px + PW / 2} cy={PLY} rx={PRX}>
					{slots.map((s, j) => {
						// product balls fill a scattered subset of the slots
						const order = Math.floor(hash01(j * 13 + k * 7) * 1000);
						const rank = slots.map((_, q) => Math.floor(hash01(q * 13 + k * 7) * 1000)).filter((o) => o < order).length;
						const isProd = rank < nProd;
						return <Ball key={j} id={ID} el={isProd ? 'B' : 'A'} x={s.x} y={s.y + idleBob(frame, j + k * 30, 1.4)} r={12} shadow />;
					})}
				</DioramaPlinth>
				<text x={px + PW / 2 - 12} y={PLY + 68} textAnchor="end" fill={theme.accent} fontSize={19} fontWeight={800}>reactant × {N - nProd}</text>
				<text x={px + PW / 2 + 12} y={PLY + 68} textAnchor="start" fill={PRODUCT} fontSize={19} fontWeight={800}>product × {nProd}</text>
				<g opacity={done}>
					{k === 0 ? (
						<Pill x={px + PW / 2} y={PLY + 104} text="→ goes to completion" color={TOK.inkDim} size={17} />
					) : (
						<Pill x={px + PW / 2} y={PLY + 104} text="⇌ real equilibrium" color={theme.accent} size={17} />
					)}
				</g>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Free energy curves: with a large negative ΔG the lowest point is at pure products, so the reaction goes to completion; with ΔG near zero the lowest point is a mixture, so an equilibrium forms. At the lowest point ΔG = 0." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['A', 'B']} />
			<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={ramp(frame, 0, 14)}>
				ΔG = ΔH − TΔS
			</text>
			{panel(0)}
			{panel(1)}
			<line x1={W / 2} y1={60} x2={W / 2} y2={470} stroke={TOK.rule} strokeWidth={2} opacity={ramp(frame, 0, 14)} />
			<g opacity={ramp(frame, zeroAt, 14)}>
				<text x={PX[1] + PW / 2} y={CY0 - 6} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>
					lowest point: ΔG = 0, no push
				</text>
			</g>
			<text x={W / 2} y={522} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={ramp(frame, mixAt, 16)}>
				⇌ means a real reverse reaction, not a 50 : 50 mix
			</text>
		</svg>
	);
};
