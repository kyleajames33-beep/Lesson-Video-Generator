// RateYieldDiagram (kind: chem12m5RateYield) — the rate–yield trade-off for
// an exothermic equilibrium (Haber).
//
// Against temperature, a yield (Keq) curve falls and a rate curve rises; both
// draw themselves. A temperature marker then visits low T (high yield,
// painfully slow) and high T (fast, low yield), and a compromise band settles
// in between. Beside the graph a thermometer and two bar meters on a plinth
// read the marker's yield and rate, so the trade is visible as motion. A
// pressure chip notes that pressure helps both. Punchline: the marker drops to
// 25 °C, where Keq ≈ 6 × 10⁵ (nearly all would convert) but the rate is
// essentially zero: thermodynamically perfect, kinetically useless.
//
// Qualitative: no tick values (the scene gives none), the only numbers are
// the scene's 25 °C and 6 × 10⁵.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {beatCaption, clamp, ease, ramp} from './shared';
import {Axes, PRODUCT, Tag, polyPath} from './lcKit';

export type RateYieldProps = {
	delay?: number;
	beats?: {
		/** curves draw */
		curves?: number;
		/** marker to low T */
		low?: number;
		/** marker to high T */
		high?: number;
		/** compromise band */
		compromise?: number;
		/** pressure chip */
		pressure?: number;
		/** marker to 25 °C, Keq readout */
		room?: number;
		/** "rate essentially zero" */
		zero?: number;
		/** amber punchline */
		punch?: number;
	};
	roomLabel?: string;
	keqText?: string;
	pressureText?: string;
};

const ID = 'c12m5ry';
const W = 760;
const GX0 = 70, GX1 = 452, GY0 = 62, GY1 = 322;
const T_LOW = 0.14, T_HIGH = 0.86, T_MID = 0.5, T_ROOM = 0.03;

const yieldAt = (t: number) => 0.06 + 0.9 / (1 + Math.exp((t - 0.42) / 0.11));
const rateAt = (t: number) => 0.02 + 0.92 * ((Math.exp(3.6 * t) - 1) / (Math.exp(3.6) - 1));
const xAt = (t: number) => GX0 + 8 + t * (GX1 - GX0 - 24);
const yAt = (v: number) => GY1 - 8 - v * (GY1 - GY0 - 30);

export const RateYieldDiagram = ({
	delay = 62,
	beats = {},
	roomLabel = '25 °C',
	keqText = 'Keq ≈ 6 × 10⁵',
	pressureText = 'Pressure (Haber): raises yield AND rate',
}: RateYieldProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {curves: 20, low: 142, high: 324, compromise: 439, pressure: 513, room: 797, zero: 945, punch: 990, ...beats};

	const draw = interpolate(frame, [b.curves, b.curves + 90], [0, 1], clamp);
	const pts = (fn: (t: number) => number) => Array.from({length: 81}, (_, i) => [xAt(i / 80), yAt(fn(i / 80))] as [number, number]);
	const yPts = pts(yieldAt), rPts = pts(rateAt);

	// marker temperature over time
	const stops: [number, number][] = [
		[b.low, T_LOW],
		[b.high, T_HIGH],
		[b.compromise, T_MID],
		[b.room, T_ROOM],
	];
	let T = T_LOW;
	for (let i = 1; i < stops.length; i++) {
		const [at, t] = stops[i];
		const k = ease(interpolate(frame, [at, at + 40], [0, 1], clamp));
		T = T + (t - T) * k;
	}
	const markerIn = ramp(frame, b.low, 14);
	const Y = yieldAt(T), R = rateAt(T);
	const pulse = idlePulse(frame);

	// plinth meters
	const PCX = 612, PCY = 312;
	const BAR_H = 176;
	const bar = (x: number, v: number, color: string, label: string) => (
		<g>
			<rect x={x - 17} y={PCY - 12 - BAR_H} width={34} height={BAR_H} rx={8} fill="rgba(255,255,255,0.7)" stroke={TOK.rule} strokeWidth={2} />
			<rect x={x - 17} y={PCY - 12 - BAR_H * v} width={34} height={BAR_H * v} rx={8} fill={color} />
			<text x={x} y={PCY - 22 - BAR_H} textAnchor="middle" fill={color} fontSize={17} fontWeight={800}>{label}</text>
		</g>
	);
	const thermo = () => {
		const x = 540;
		const top = PCY - 12 - BAR_H, bulbY = PCY - 26;
		const level = bulbY - 14 - (BAR_H - 34) * T;
		return (
			<g>
				<rect x={x - 9} y={top} width={18} height={bulbY - top} rx={9} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
				<rect x={x - 4.5} y={level} width={9} height={bulbY - level} fill="#d8452f" />
				<circle cx={x} cy={bulbY} r={15} fill="#d8452f" stroke={TOK.inkMute} strokeWidth={2} />
				<text x={x} y={top - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>T</text>
			</g>
		);
	};

	const caps = [
		{at: b.low, text: 'Low T: high yield, but painfully slow'},
		{at: b.high, text: 'High T: fast, but low yield'},
		{at: b.compromise, text: 'The compromise sits in between'},
		{at: b.room, text: `At ${roomLabel}: ${keqText}, nearly all would convert…`},
		{at: b.zero, text: '…but the rate is essentially zero'},
	];
	const cap = beatCaption(frame, caps);
	const onRoom = frame >= b.room;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Against temperature, the yield (Keq) of an exothermic reaction falls while the rate rises: low temperature gives high yield but a very slow rate, high temperature a fast rate but low yield, so industry compromises in between; at 25 °C the Haber Keq is about 6 × 10⁵ but the rate is essentially zero" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{/* compromise band */}
			<g opacity={ramp(frame, b.compromise + 20, 16)}>
				<rect x={xAt(0.38)} y={GY0 + 4} width={xAt(0.62) - xAt(0.38)} height={GY1 - GY0 - 4} fill={theme.accent} opacity={0.1} />
				<text x={xAt(0.5)} y={GY0 + 24} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>compromise</text>
			</g>

			<Axes x0={GX0} y0={GY0} x1={GX1} y1={GY1} xLabel="temperature" opacity={ramp(frame, 0, 14)} size={17} />
			<text x={GX0 + 6} y={GY1 + 24} fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={ramp(frame, 0, 14)}>low</text>

			{/* curves */}
			<path d={polyPath(yPts, draw)} fill="none" stroke={theme.accent} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
			<path d={polyPath(rPts, draw)} fill="none" stroke={PRODUCT} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
			<g opacity={ramp(frame, b.curves + 70, 14)}>
				<text x={xAt(0.05)} y={yAt(yieldAt(0.05)) - 14} fill={theme.accent} fontSize={18} fontWeight={800}>yield (Keq)</text>
				<text x={xAt(0.97)} y={yAt(rateAt(0.97)) + 4} textAnchor="end" fill={PRODUCT} fontSize={18} fontWeight={800} transform="translate(-14 0)">rate</text>
			</g>

			{/* temperature marker */}
			<g opacity={markerIn}>
				<line x1={xAt(T)} y1={GY0 + 30} x2={xAt(T)} y2={GY1} stroke={onRoom ? TOK.amber : TOK.inkDim} strokeWidth={2.5} strokeDasharray="6 5" />
				<circle cx={xAt(T)} cy={yAt(Y)} r={8 + pulse * 1.5} fill={theme.accent} stroke="#ffffff" strokeWidth={2.5} />
				<circle cx={xAt(T)} cy={yAt(R)} r={8 + pulse * 1.5} fill={PRODUCT} stroke="#ffffff" strokeWidth={2.5} />
				{onRoom && (
					<text x={xAt(T) + 6} y={GY1 - 30} fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={ramp(frame, b.room + 30, 12)}>{roomLabel}</text>
				)}
			</g>

			{/* plinth: thermometer + yield / rate meters */}
			<g opacity={ramp(frame, 6, 14)}>
				<DioramaPlinth id={ID} cx={PCX} cy={PCY} rx={118}>
					{thermo()}
					{bar(608, markerIn > 0 ? Y : 0.5, theme.accent, 'yield')}
					{bar(676, markerIn > 0 ? R : 0.5, PRODUCT, 'rate')}
				</DioramaPlinth>
			</g>

			{/* captions */}
			<text x={W / 2} y={392} textAnchor="middle" fill={cap.index >= 3 ? TOK.ink : TOK.inkDim} fontSize={21} fontWeight={800} opacity={cap.opacity}>{cap.text}</text>
			<Tag x={W / 2} y={440} text={pressureText} color={theme.accent} ink={theme.accent} size={18} anchor="middle" opacity={ramp(frame, b.pressure, 14) * (1 - 0.6 * ramp(frame, b.room, 14))} />
			<g opacity={ramp(frame, b.punch, 16)}>
				<Tag x={W / 2} y={494} text="Thermodynamically perfect, kinetically useless" color={TOK.amber} ink={TOK.amberInk} size={21} anchor="middle" strokeWidth={2 + pulse * 1.5} />
			</g>
		</svg>
	);
};
