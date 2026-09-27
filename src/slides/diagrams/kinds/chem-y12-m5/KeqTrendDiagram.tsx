// KeqTrendDiagram (kind: chem12m5KeqTrend) — reading a Keq-vs-T trend
// backwards to the sign of ΔH.
//
// Two small plots. Measured points appear (the "little table"), then a trend
// line draws through them: Keq rising with T → forward endothermic; Keq
// falling with T → forward exothermic. The three exam steps follow, then a
// dashed extrapolation beyond the data range predicts Keq outside it. Last,
// the caution: a big Keq means products are favoured, not that the reaction
// is fast.
//
// Qualitative: no tick values.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idlePulse} from '../../diorama';
import {clamp, ramp} from './shared';
import {Arrow, Axes, PRODUCT, Tag, polyPath} from './lcKit';

export type KeqTrendProps = {
	delay?: number;
	beats?: {
		points?: number;
		up?: number;
		endo?: number;
		down?: number;
		exo?: number;
		steps?: number;
		extend?: number;
		caution?: number;
	};
};

const W = 760;
const DATA_T = [0.14, 0.32, 0.5, 0.68];
const T_PRED = 0.93;

export const KeqTrendDiagram = ({delay = 62, beats = {}}: KeqTrendProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {points: 14, up: 240, endo: 384, down: 425, exo: 541, steps: 582, extend: 719, caution: 814, ...beats};
	const pulse = idlePulse(frame);

	const plot = (ox: number, rising: boolean) => {
		const color = rising ? theme.accent : PRODUCT;
		const lineAt = rising ? b.up : b.down;
		const verdictAt = rising ? b.endo : b.exo;
		const ptsAt = rising ? b.points : b.points + 30;
		const X0 = ox + 50, X1 = ox + 344, Y0 = 70, Y1 = 262;
		const fn = (t: number) => (rising ? 0.08 + 0.8 * t * t : 0.9 - 1.05 * t + 0.28 * t * t);
		const gx = (t: number) => X0 + 10 + t * (X1 - X0 - 20);
		const gy = (v: number) => Y1 - 10 - v * (Y1 - Y0 - 30);
		const lineInRange = Array.from({length: 41}, (_, i) => {
			const t = DATA_T[0] + ((DATA_T[3] - DATA_T[0]) * i) / 40;
			return [gx(t), gy(fn(t))] as [number, number];
		});
		const lineExt = Array.from({length: 21}, (_, i) => {
			const t = DATA_T[3] + ((T_PRED - DATA_T[3]) * i) / 20;
			return [gx(t), gy(fn(t))] as [number, number];
		});
		const draw = interpolate(frame, [lineAt, lineAt + 50], [0, 1], clamp);
		const ext = interpolate(frame, [b.extend, b.extend + 40], [0, 1], clamp);
		return (
			<g opacity={ramp(frame, rising ? 0 : 20, 14)}>
				<rect x={ox} y={8} width={360} height={330} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={ox + 18} y={40} fill={color} fontSize={21} fontWeight={800}>{rising ? 'Keq rises as T rises' : 'Keq falls as T rises'}</text>
				<text x={ox + 18} y={62} fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={ramp(frame, lineAt + 40, 14)}>
					{rising ? 'so heat is a reactant' : 'so heat is a product'}
				</text>
				<Axes x0={X0} y0={Y0 + 10} x1={X1} y1={Y1} xLabel="temperature" yLabel="Keq" size={16} />
				{/* data range bracket */}
				<g opacity={ramp(frame, b.extend, 14)}>
					<path d={`M ${gx(DATA_T[0])} ${Y1 + 30} l 0 -6 L ${gx(DATA_T[3])} ${Y1 + 24} l 0 6`} fill="none" stroke={TOK.inkMute} strokeWidth={2} />
					<text x={(gx(DATA_T[0]) + gx(DATA_T[3])) / 2} y={Y1 + 48} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>data range</text>
				</g>
				<path d={polyPath(lineInRange, draw)} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
				{ext > 0 && <path d={polyPath(lineExt, ext)} fill="none" stroke={color} strokeWidth={3.5} strokeDasharray="8 7" strokeLinecap="round" />}
				{DATA_T.map((t, i) => (
					<circle key={i} cx={gx(t)} cy={gy(fn(t))} r={7} fill={color} stroke="#ffffff" strokeWidth={2.5} opacity={ramp(frame, ptsAt + i * 10, 8)} />
				))}
				<g opacity={ramp(frame, b.extend + 36, 12)}>
					<circle cx={gx(T_PRED)} cy={gy(fn(T_PRED))} r={9 + pulse * 1.5} fill="#ffffff" stroke={color} strokeWidth={3} />
					<text x={gx(T_PRED) - 4} y={gy(fn(T_PRED)) + (rising ? 32 : -18)} textAnchor="end" fill={color} fontSize={16} fontWeight={800}>predicted</text>
				</g>
				<Tag x={ox + 180} y={308} text={rising ? '→ forward endothermic' : '→ forward exothermic'} color={color} ink={color} size={19} anchor="middle" opacity={ramp(frame, verdictAt, 14)} />
			</g>
		);
	};

	const steps = ['1  Keq direction', '2  sign of ΔH', '3  predict outside range'];
	const stepX = [22, 238, 454];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Two Keq-versus-temperature plots: Keq rising with temperature means the forward reaction is endothermic; Keq falling means exothermic; the trend is extended beyond the data to predict Keq; a large Keq means products are favoured, not that the reaction is fast" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{plot(12, true)}
			{plot(388, false)}

			{/* the three marks */}
			{steps.map((s, i) => (
				<g key={i} opacity={ramp(frame, b.steps + i * 18, 12)}>
					<Tag x={stepX[i]} y={372} text={s} color={TOK.inkMute} ink={TOK.ink} size={17} />
					{i < 2 && <Arrow x1={stepX[i + 1] - 26} y1={372} x2={stepX[i + 1] - 6} y2={372} color={TOK.inkMute} w={2.5} head={8} />}
				</g>
			))}

			{/* caution */}
			<g opacity={ramp(frame, b.caution, 16)}>
				<Tag x={W / 2} y={440} text="Big Keq = products favoured, NOT a fast reaction" color={TOK.amber} ink={TOK.amberInk} size={20} anchor="middle" strokeWidth={2 + pulse * 1.2} />
				<text x={W / 2} y={486} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>position and rate are different questions</text>
			</g>
		</svg>
	);
};
