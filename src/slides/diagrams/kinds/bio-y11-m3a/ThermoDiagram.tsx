// ThermoDiagram (bio11m3aThermo) — ectotherms and endotherms.
//
// mode 'behaviour'  A lizard's day on a stone plinth. Morning: the sun is low,
//                   the lizard lies flat on a rock, broadside to the rays, and
//                   its body-temperature gauge climbs into the working range.
//                   Midday: the sun is high and the lizard retreats into the
//                   shade of a rock overhang, turning head-on, so the gauge
//                   holds in range instead of overshooting. No temperatures
//                   are printed (the scene gives none); the gauge shows a band.
// mode 'graph'      Body temperature against air temperature, both axes on the
//                   same scale, from a data table (props). Each animal's line
//                   draws itself through its points; its range (max − min) is
//                   COMPUTED from the table and printed, e.g. "varies by
//                   29.0 °C". A dashed body = air line helps the eye.
//
// Beats are frames after `delay`. Hold: the lizard breathes, a reading cursor
// glides along the air-temperature axis.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Beat, Foot, H, Ledge, PAL, Tag, W, clamp, fadeAt} from './shared';

export type ThermoProps = {
	mode: 'behaviour' | 'graph';
	beats?: {morning: number; warm: number; midday: number; shade?: number};
	labels?: {morning?: string; midday?: string; gauge?: string};
	// graph
	air?: number[];
	series?: {label: string; values: number[]; at: number; tone?: 'ecto' | 'endo'}[];
	rangeAt?: number;
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3thermo';
const ease = Easing.inOut(Easing.cubic);

const Lizard = ({x, y, s = 1, flat = 0}: {x: number; y: number; s?: number; flat?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s}, ${s * (1 - flat * 0.25)})`}>
		<path d="M -40 0 Q -90 4 -120 14 Q -88 -2 -40 -8 Z" fill={PAL.lizard} stroke="rgba(0,0,0,0.25)" />
		<ellipse cx={0} cy={-6} rx={44} ry={13} fill={PAL.lizard} stroke="rgba(0,0,0,0.25)" />
		{[-24, -8, 8, 24].map((sx, k) => (
			<circle key={k} cx={sx} cy={-10} r={3} fill="#7d6d3a" />
		))}
		<ellipse cx={50} cy={-10} rx={16} ry={9} fill={PAL.lizard} stroke="rgba(0,0,0,0.25)" />
		<circle cx={56} cy={-13} r={2} fill="#222" />
		{[-26, 22].map((lx, k) => (
			<g key={k}>
				<path d={`M ${lx} 2 l -8 10 l -8 0`} stroke="#7d6d3a" strokeWidth={4} fill="none" strokeLinecap="round" />
				<path d={`M ${lx + 6} 2 l 8 10 l 8 0`} stroke="#7d6d3a" strokeWidth={4} fill="none" strokeLinecap="round" />
			</g>
		))}
	</g>
);

export const ThermoDiagram = (props: ThermoProps) => {
	const {mode, footer = [], delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	if (mode === 'behaviour') {
		const b = {morning: 0, warm: 90, midday: 260, ...(props.beats ?? {})};
		const L = props.labels ?? {};
		const noon = interpolate(frame, [b.midday, b.midday + 60], [0, 1], {...clamp, easing: ease});
		const move = interpolate(frame, [b.midday + 40, b.midday + 110], [0, 1], {...clamp, easing: ease});
		const sunX = 130 + noon * 250;
		const sunY = 190 - noon * 140;
		// gauge: rises while basking, holds in range afterwards
		const g = interpolate(frame, [b.warm, b.warm + 120], [0.12, 0.62], {...clamp, easing: ease}) + Math.sin(frame / 30) * 0.01;
		const cx = 380;
		const cy = 400;
		const lizX = 300 + move * 250;
		const lizY = 318 + move * 44;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Lizard basks in the morning and shelters at midday" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{/* sun and rays */}
				<g opacity={fadeAt(frame, b.morning)}>
					<circle cx={sunX} cy={sunY} r={30 + idlePulse(frame) * 2} fill="#f6c343" />
					{Array.from({length: 4}, (_, k) => (
						<line key={k} x1={sunX + 30} y1={sunY + 10 + k * 8} x2={lizX - 20 + k * 20 - (sunX - 130) * 0.2} y2={lizY - 30} stroke="#f6c343" strokeWidth={3} strokeDasharray="8 8" strokeDashoffset={-frame} opacity={0.7 * (1 - move)} />
					))}
				</g>
				<DioramaPlinth id={`${ID}-p`} cx={cx} cy={cy} rx={300} />
				{/* basking rock */}
				<path d="M 200 360 Q 220 300 300 296 Q 380 294 400 350 Q 330 372 200 360 Z" fill={PAL.rock} stroke="#7d776d" strokeWidth={2} />
				{/* shade overhang */}
				<path d="M 470 390 Q 480 250 610 250 Q 690 262 680 390 Z" fill="#8c867b" stroke="#6f6a61" strokeWidth={2} />
				<path d="M 500 390 Q 520 312 600 312 Q 650 322 650 390 Z" fill="#3e3a34" opacity={0.85} />
				<Lizard x={lizX} y={lizY} s={0.95} flat={1 - move} />
				<g opacity={fadeAt(frame, b.morning + 10) * (1 - fadeAt(frame, b.midday, 12))}>
					<Tag x={260} y={250} text={L.morning ?? 'Cool morning: basks broadside to the sun'} color={PAL.orange} size={16} />
				</g>
				<g opacity={fadeAt(frame, b.midday + 60)}>
					<Tag x={560} y={218} text={L.midday ?? 'Hot midday: retreats to shade'} color={theme.accent} size={16} />
				</g>
				{/* body temperature gauge */}
				<g opacity={fadeAt(frame, b.warm)}>
					<rect x={688} y={70} width={28} height={220} rx={14} fill="#fff" stroke={TOK.inkDim} strokeWidth={2} />
					<rect x={682} y={70 + 220 * (1 - 0.72)} width={40} height={220 * 0.2} rx={6} fill="#e7f4ea" stroke="#2f8f46" strokeWidth={2} strokeDasharray="5 4" />
					<rect x={694} y={70 + 220 * (1 - g)} width={16} height={220 * g - 6} rx={8} fill="#d2463c" />
					<circle cx={702} cy={298} r={18} fill="#d2463c" />
					<text x={702} y={330} textAnchor="middle" fontSize={15} fontWeight={800} fill={TOK.ink}>
						{L.gauge ?? 'body temp'}
					</text>
					<text x={672} y={70 + 220 * 0.38} textAnchor="end" fontSize={14} fontWeight={800} fill="#2f8f46">
						working
					</text>
					<text x={672} y={70 + 220 * 0.38 + 17} textAnchor="end" fontSize={14} fontWeight={800} fill="#2f8f46">
						range
					</text>
				</g>
				<Foot lines={footer} frame={frame} fade={fadeAt} />
			</svg>
		);
	}

	// graph
	const air = props.air ?? [];
	const series = props.series ?? [];
	const lo = 0;
	const hi = 45;
	const GX0 = 96;
	const GX1 = 470;
	const GY1 = 440 - footer.length * 30;
	const GY0 = GY1 - (GX1 - GX0);
	const gx = (v: number) => GX0 + ((v - lo) / (hi - lo)) * (GX1 - GX0);
	const gy = (v: number) => GY1 - ((v - lo) / (hi - lo)) * (GY1 - GY0);
	const ticks = [0, 10, 20, 30, 40];
	const tone = (t?: string) => (t === 'endo' ? theme.accent : PAL.orange);
	const lastAt = Math.max(0, ...series.map((s) => s.at)) + 80;
	const cursor = frame > lastAt + 40 ? 0.5 - 0.5 * Math.cos((frame - lastAt - 40) / 70) : null;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Body temperature against air temperature" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<Ledge x0={GX0 - 50} x1={GX1 + 20} y={GY1 + 2} />
			{ticks.map((v) => (
				<g key={v}>
					<line x1={GX0} y1={gy(v)} x2={GX1} y2={gy(v)} stroke={TOK.rule} strokeWidth={v ? 1.2 : 0} />
					<text x={GX0 - 10} y={gy(v) + 5} textAnchor="end" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						{v}
					</text>
					<text x={gx(v)} y={GY1 + 42} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						{v}
					</text>
				</g>
			))}
			<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.ink} strokeWidth={2.5} />
			<line x1={GX0} y1={GY1} x2={GX0} y2={GY0} stroke={TOK.ink} strokeWidth={2.5} />
			<text x={(GX0 + GX1) / 2} y={GY1 + 68} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.ink}>
				Air temperature (°C)
			</text>
			<text x={GX0 - 46} y={(GY0 + GY1) / 2} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.ink} transform={`rotate(-90 ${GX0 - 46} ${(GY0 + GY1) / 2})`}>
				Body temperature (°C)
			</text>
			<line x1={gx(lo)} y1={gy(lo)} x2={gx(hi)} y2={gy(hi)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 6" opacity={fadeAt(frame, 0)} />
			<text x={gx(hi) - 6} y={gy(hi) + 18} textAnchor="end" fontSize={13} fontWeight={700} fill={TOK.inkMute} opacity={fadeAt(frame, 0)}>
				body = air
			</text>
			{series.map((s, i) => {
				const t = interpolate(frame, [s.at, s.at + 60], [0, 1], {...clamp, easing: ease});
				const n = air.length;
				const upto = t * (n - 1);
				const pts = air.map((a, k) => ({x: gx(a), y: gy(s.values[k])}));
				let d = `M ${pts[0].x} ${pts[0].y}`;
				for (let k = 1; k < n; k++) {
					if (k <= upto) d += ` L ${pts[k].x} ${pts[k].y}`;
					else {
						const f = upto - (k - 1);
						if (f > 0) d += ` L ${pts[k - 1].x + (pts[k].x - pts[k - 1].x) * f} ${pts[k - 1].y + (pts[k].y - pts[k - 1].y) * f}`;
						break;
					}
				}
				const c = tone(s.tone);
				const range = Math.max(...s.values) - Math.min(...s.values);
				const airRange = Math.max(...air) - Math.min(...air);
				const ry = 110 + i * 150;
				return (
					<g key={i} opacity={fadeAt(frame, s.at)}>
						<path d={d} stroke={c} strokeWidth={4} fill="none" strokeLinejoin="round" strokeDasharray={s.tone === 'endo' ? '10 7' : undefined} />
						{pts.map((p, k) => (k <= upto ? <circle key={k} cx={p.x} cy={p.y} r={4.5} fill={c} /> : null))}
						<g opacity={fadeAt(frame, props.rangeAt ?? s.at + 70)}>
							<text x={500} y={ry} fontSize={19} fontWeight={800} fill={c}>
								{s.label}
							</text>
							<text x={500} y={ry + 28} fontSize={17} fontWeight={700} fill={TOK.ink}>
								{`varies by ${range.toFixed(1)} °C`}
							</text>
							<text x={500} y={ry + 52} fontSize={15} fontWeight={700} fill={TOK.inkDim}>
								{`across a ${airRange} °C change in air`}
							</text>
						</g>
					</g>
				);
			})}
			{cursor !== null && (
				<line x1={gx(air[0] + cursor * (air[air.length - 1] - air[0]))} y1={GY0} x2={gx(air[0] + cursor * (air[air.length - 1] - air[0]))} y2={GY1} stroke={TOK.amber} strokeWidth={2} opacity={0.7} />
			)}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
