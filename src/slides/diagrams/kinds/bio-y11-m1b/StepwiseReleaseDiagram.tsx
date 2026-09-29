// StepwiseReleaseDiagram (bio11m1bStepwise) — why respiration is a
// "controlled release of energy": the same total drop in energy, taken in one
// step or in many small enzyme-controlled steps.
//
// Left (burning): glucose falls from its energy level to the CO₂ + H₂O level in
// ONE step; the energy comes out at once as a burst of heat and light.
// Right (respiration): the same drop is a staircase; glucose hops down one step
// at a time, each step labelled with its own enzyme (E), and each releases a
// small packet of energy that is captured as an ATP token, with a little lost
// as heat. Both panels start and finish at the SAME levels (same overall
// energy change); only the route differs. The number of steps is schematic:
// the real pathway has dozens, so no count is shown.
//
// Props: `at` (frames after `delay`): levels / burn / steps / enzymes / atp /
// rule; `rule` text.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, ease, lerp, CORAL, Glucose, AtpToken, Flame, Ledge} from './shared';

export type StepwiseProps = {
	at?: {levels?: number; burn?: number; steps?: number; enzymes?: number; atp?: number; rule?: number};
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bStep';
const W = 760, H = 530;
const TOP = 112, BOT = 392; // glucose level and CO₂ + H₂O level
const N = 7; // schematic number of levels (6 drops)

export const StepwiseReleaseDiagram = ({at = {}, rule, delay = 62}: StepwiseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tL = at.levels ?? 10, tB = at.burn ?? 90, tS = at.steps ?? 220, tE = at.enzymes ?? 380, tA = at.atp ?? 460, tR = at.rule ?? 620;
	const pulse = idlePulse(frame, 48);

	// Left: one big fall
	const LX = 170;
	const fall = ease(frame, tB, tB + 22);
	const burst = popAt(frame, fps, tB + 20);

	// Right: staircase. Step i's top sits at yStep(i): step 0 at the glucose
	// level, step N-1 at the CO₂ + H₂O level. N-1 drops between them.
	const RX0 = 390, RX1 = 720;
	const stepW = (RX1 - RX0) / N;
	const yStep = (i: number) => TOP + (i * (BOT - TOP)) / (N - 1);
	const xStep = (i: number) => RX0 + (i + 0.5) * stepW;
	const stairsOp = fadeAt(frame, tS - 20, 16);
	// Glucose hops down one step every 18 frames from tS.
	const hop = frame < tS ? 0 : Math.min(N - 1, (frame - tS) / 18);
	const k = Math.min(N - 2, Math.floor(hop)), f = hop - k;
	const gx = lerp(xStep(k), xStep(k + 1), ease(f, 0, 1));
	const gy = lerp(yStep(k), yStep(k + 1), ease(f, 0.3, 1)) - Math.sin(Math.PI * Math.min(1, f)) * 18 - 22;
	const landed = hop >= N - 1;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Energy released in one step as heat, versus in many small enzyme-controlled steps captured as ATP" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{/* Energy axis */}
			<g opacity={fadeAt(frame, tL)}>
				<line x1={36} y1={BOT + 30} x2={36} y2={TOP - 50} stroke={TOK.inkMute} strokeWidth={2.5} />
				<path d={`M 28 ${TOP - 42} L 36 ${TOP - 58} L 44 ${TOP - 42} Z`} fill={TOK.inkMute} />
				<text x={46} y={TOP - 44} fill={TOK.inkDim} fontSize={15} fontWeight={800}>energy</text>
				{/* the two levels, dashed across both panels */}
				<line x1={48} y1={TOP} x2={W - 20} y2={TOP} stroke={TOK.rule} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={48} y1={BOT} x2={W - 20} y2={BOT} stroke={TOK.rule} strokeWidth={2} strokeDasharray="6 6" />
				<text x={56} y={BOT + 34} fill={TOK.inkDim} fontSize={15} fontWeight={800}>CO₂ + H₂O</text>
			</g>

			{/* Panel titles */}
			<text x={LX + 20} y={28} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tB - 20)}>all at once (burning)</text>
			<text x={(RX0 + RX1) / 2} y={28} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={stairsOp}>many small steps (respiration)</text>

			{/* LEFT: one step */}
			<g opacity={fadeAt(frame, tL)}>
				<Ledge x={LX - 50} y={TOP + 22} w={100} />
				<Ledge x={LX - 50} y={BOT + 2} w={100} />
				<Glucose x={LX} y={lerp(TOP - 4, BOT - 24, fall) + (fall >= 1 ? idleBob(frame, 1, 1.2) : 0)} s={0.95} label={false} />
				{fall > 0 && fall < 1 && <line x1={LX} y1={TOP} x2={LX} y2={lerp(TOP, BOT - 30, fall)} stroke={TOK.inkMute} strokeWidth={3} strokeDasharray="4 5" />}
			</g>
			{burst > 0 && (
				<g opacity={Math.min(1, burst)}>
					{[-46, 0, 46].map((dx, i) => (
						<Flame key={i} x={LX + dx} y={BOT - 60 - (i === 1 ? 20 : 0)} s={(i === 1 ? 1.5 : 1.1) * Math.min(1, burst)} frame={frame + i * 7} />
					))}
					<text x={LX} y={BOT - 168} textAnchor="middle" fill={CORAL} fontSize={17} fontWeight={800}>a burst of heat:</text>
					<text x={LX} y={BOT - 148} textAnchor="middle" fill={CORAL} fontSize={17} fontWeight={800}>energy lost, not captured</text>
				</g>
			)}

			{/* RIGHT: staircase */}
			<g opacity={stairsOp}>
				{Array.from({length: N}, (_, i) => {
					const x = RX0 + i * stepW, y = yStep(i);
					return (
						<g key={i}>
							<rect x={x} y={y} width={stepW + 1} height={BOT + 22 - y} fill={i % 2 ? '#cfccc5' : '#d9d6cf'} />
							<rect x={x} y={y} width={stepW + 1} height={6} fill="#bdb8ae" />
						</g>
					);
				})}
				<rect x={RX0} y={BOT + 22} width={RX1 - RX0} height={12} fill="#8f8b83" />
			</g>
			{/* enzyme tags: one on each drop */}
			{Array.from({length: N - 1}, (_, i) => {
				const x = RX0 + (i + 1) * stepW, y = (yStep(i) + yStep(i + 1)) / 2 + 4;
				const p = popAt(frame, fps, tE + i * 6);
				return p > 0 ? (
					<g key={i} transform={`translate(${x},${y}) scale(${Math.min(1, p)})`}>
						<circle r={12} fill={theme.accent} stroke="#ffffff" strokeWidth={2} />
						<text y={5} textAnchor="middle" fill="#ffffff" fontSize={14} fontWeight={800}>E</text>
					</g>
				) : null;
			})}
			<text x={W - 16} y={TOP + 38} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tE + 20)}>E = each step has its own enzyme</text>

			{/* glucose hopping down */}
			{frame >= tS - 20 && <Glucose x={gx} y={gy + (landed ? idleBob(frame, 3, 1.2) : 0)} s={0.8} label={false} opacity={stairsOp} />}

			{/* ATP captured at each step: a column of tokens */}
			{Array.from({length: N - 1}, (_, i) => {
				const p = popAt(frame, fps, tA + i * 7);
				return p > 0 ? <AtpToken key={i} x={RX0 + (i + 1) * stepW + 28} y={yStep(i + 1) - 30 + idleBob(frame, 10 + i, 1)} s={0.72 * Math.min(1, p)} /> : null;
			})}
			<g opacity={fadeAt(frame, tA + 40)}>
				<text x={W - 16} y={TOP + 64} textAnchor="end" fill={TOK.ink} fontSize={16} fontWeight={800}>each drop: a small packet of</text>
				<text x={W - 16} y={TOP + 84} textAnchor="end" fill={TOK.ink} fontSize={16} fontWeight={800}>energy, captured as ATP</text>
			</g>

			{/* same overall drop */}
			<g opacity={fadeAt(frame, tA + 70)}>
				<text x={W / 2 + 10} y={BOT + 66} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>same start, same finish: only the route differs</text>
			</g>

			{rule && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text>
			)}
		</svg>
	);
};
