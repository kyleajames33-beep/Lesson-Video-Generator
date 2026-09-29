// AlveolusDiagram (bio11m2Alveolus) — gas exchange in the lungs.
//
// mode "exchange": one alveolus (air sac with a moist lining) at the end of an
//   airway, wrapped by a capillary. Blood enters the capillary deoxygenated
//   (purple) and leaves oxygenated (red); red cells move along it. O₂ dots
//   diffuse from the air into the blood and CO₂ dots diffuse the other way,
//   across a barrier two thin walls deep. Feature chips (surface area, thin
//   walls, steep gradient, moist lining) build on their beats.
// mode "subdivide": the model behind "millions of alveoli". One large sphere
//   beside n small spheres of the same total volume; the surface-area bars are
//   computed (total area grows by n^(1/3)), so the ratio shown is exact.
// All labels from props. Hold: gases keep crossing, blood keeps flowing.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, fadeAt, mix, popAt, wrap} from './shared';

export type AlveolusProps = {
	mode: 'exchange' | 'subdivide';
	exchange?: {
		alveolusAt: number;
		capillaryAt: number;
		o2At: number;
		co2At: number;
		airLabel: string;
		wallLabel?: {text: string; at: number};
		bloodIn: string;
		bloodOut: string;
		features?: {text: string; at: number; amber?: boolean}[];
	};
	subdivide?: {
		n: number;
		bigAt: number;
		smallAt: number;
		bigLabel: string;
		smallLabel: string;
		barsAt: number;
		volumeNote?: string;
	};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2alv';

export const AlveolusDiagram = ({mode, exchange, subdivide, footer = [], delay = 62}: AlveolusProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	if (mode === 'subdivide' && subdivide) {
		const {n} = subdivide;
		const R = 92;
		const k = Math.round(Math.cbrt(n));
		const r = R / Math.cbrt(n);
		const ratio = Math.cbrt(n);
		const bp = popAt(frame, fps, subdivide.bigAt);
		const sp = popAt(frame, fps, subdivide.smallAt);
		const bars = fadeAt(frame, subdivide.barsAt, 40);
		const ball = (cx: number, cy: number, rr: number, key: string | number) => (
			<g key={key}>
				<circle cx={cx} cy={cy} r={rr} fill={`url(#${ID}-g-lung)`} stroke="#b56a74" strokeWidth={1.2} />
			</g>
		);
		// small balls in a k×k×k-ish pile drawn as k rows of k·k/row
		const smalls: {x: number; y: number}[] = [];
		const cols = Math.ceil(Math.sqrt(n));
		for (let i = 0; i < n; i++) {
			const c = i % cols, rw = Math.floor(i / cols);
			smalls.push({x: 540 + (c - (cols - 1) / 2) * r * 2.05, y: 250 - (rw - (Math.ceil(n / cols) - 1) / 2) * r * 2.05 - 40});
		}
		const barMax = 260;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${subdivide.bigLabel}; ${subdivide.smallLabel}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				<g opacity={Math.min(1, bp * 1.4)}>
					<DioramaPlinth id={`${ID}b`} cx={200} cy={330} rx={120} />
					{ball(200, 212 + idleBob(frame, 1, 1.2), R, 'big')}
					<Lines x={200} y={414} lines={wrap(subdivide.bigLabel, 22)} size={19} color={theme.accent} />
				</g>
				<g opacity={Math.min(1, sp * 1.4)}>
					<DioramaPlinth id={`${ID}s`} cx={540} cy={330} rx={120} />
					{smalls.map((p, i) => ball(p.x, p.y + idleBob(frame, i, 1), r, i))}
					<Lines x={540} y={414} lines={wrap(subdivide.smallLabel, 22)} size={19} color={theme.accent} />
				</g>
				{subdivide.volumeNote && <text x={W / 2} y={34} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, subdivide.smallAt, 14)}>{subdivide.volumeNote}</text>}
				{/* surface-area bars (computed) */}
				<g opacity={bars > 0 ? 1 : 0}>
					<text x={120} y={468} fill={TOK.inkDim} fontSize={17} fontWeight={800}>surface area</text>
					<rect x={236} y={456} width={(barMax / ratio) * bars} height={16} rx={8} fill={theme.accent} opacity={0.6} />
					<rect x={236} y={482} width={barMax * bars} height={16} rx={8} fill={TOK.amber} opacity={0.85 + 0.15 * idlePulse(frame)} />
					<text x={236 + (barMax / ratio) * bars + 8} y={469} fill={TOK.ink} fontSize={16} fontWeight={800}>1 ×</text>
					<text x={236 + barMax * bars + 8} y={495} fill={TOK.amberInk} fontSize={16} fontWeight={800}>{`${Number.isInteger(ratio) ? ratio : ratio.toFixed(1)} ×`}</text>
				</g>
				<Foot lines={footer} frame={frame} />
			</svg>
		);
	}

	if (!exchange) return null;
	const e = exchange;
	const CX = 230, CY = 270, RA = 138, RC = 164;
	const aOn = popAt(frame, fps, e.alveolusAt);
	const cOn = fadeAt(frame, e.capillaryAt, 30);
	const th = (t: number) => ((130 - 260 * t) * Math.PI) / 180;
	const pt = (t: number, R: number) => ({x: CX + Math.cos(th(t)) * R, y: CY + Math.sin(th(t)) * R});
	const SEG = 26;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${e.airLabel}; ${e.bloodIn} to ${e.bloodOut}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<DioramaPlinth id={`${ID}p`} cx={CX} cy={CY + RC + 26} rx={200} />
			{/* airway + sac */}
			<g opacity={Math.min(1, aOn * 1.4)}>
				<path d={`M ${CX - 40} ${CY - RA + 12} L ${CX - 40} 20 M ${CX + 40} ${CY - RA + 12} L ${CX + 40} 20`} stroke="#d9a3aa" strokeWidth={10} fill="none" />
				<rect x={CX - 36} y={16} width={72} height={CY - RA} fill="#fbeef0" />
				<circle cx={CX} cy={CY} r={RA} fill="#fbeef0" stroke="#d9a3aa" strokeWidth={6} />
				<circle cx={CX} cy={CY} r={RA - 7} fill="none" stroke="#8fd0ea" strokeWidth={4} opacity={0.8} />
				<text x={CX} y={CY - 20} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800}>{e.airLabel}</text>
				{/* O₂ in the air */}
				{Array.from({length: 10}, (_, k) => (
					<circle key={k} cx={CX - 70 + ((k * 53) % 140) + idleBob(frame, k, 4)} cy={CY + 10 + ((k * 37) % 70) + idleBob(frame, k + 3, 4)} r={6} fill={`url(#${ID}-g-oxygen)`} />
				))}
			</g>
			{/* capillary band, colour shifting from deoxygenated to oxygenated along the flow */}
			<g opacity={cOn}>
				{Array.from({length: SEG}, (_, i) => {
					const a = pt(i / SEG, RC), b = pt((i + 1) / SEG, RC);
					return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={mix(PAL.deoxy, PAL.blood, i / (SEG - 1))} strokeWidth={30} strokeLinecap="round" />;
				})}
				<path d={`M ${pt(0, RC - 15).x} ${pt(0, RC - 15).y} A ${RC - 15} ${RC - 15} 0 1 0 ${pt(1, RC - 15).x} ${pt(1, RC - 15).y}`} fill="none" stroke="#f3d6cf" strokeWidth={3} />
				{/* red cells moving along */}
				{Array.from({length: 9}, (_, k) => {
					const t = ((frame / 260 + k / 9) % 1 + 1) % 1;
					const p = pt(t, RC + 3);
					return <ellipse key={k} cx={p.x} cy={p.y} rx={9} ry={6} fill={mix(PAL.deoxy, PAL.blood, t)} stroke="#ffffff" strokeWidth={1} opacity={0.95} />;
				})}
				{(() => {
					const a = pt(0, RC + 40), b = pt(1, RC + 40);
					return (
						<g>
							<Chip2 x={a.x - 10} y={a.y + 14} text={e.bloodIn} color={PAL.deoxy} size={16} t={cOn} />
							<Chip2 x={b.x - 6} y={b.y - 8} text={e.bloodOut} color={PAL.blood} size={16} t={cOn} />
						</g>
					);
				})()}
			</g>
			{/* gases crossing */}
			{[
				{at: e.o2At, key: 'oxygen', inward: false, n: 7},
				{at: e.co2At, key: 'co2', inward: true, n: 5},
			].map((gz) =>
				fadeAt(frame, gz.at, 10) > 0
					? Array.from({length: gz.n}, (_, k) => {
						const u = (((frame - gz.at) / 70 + k / gz.n) % 1 + 1) % 1;
						const t = 0.12 + ((k * 0.61 + (gz.inward ? 0.3 : 0)) % 0.76);
						const r0 = RA - 30, r1 = RC + 2;
						const rr = gz.inward ? r1 - (r1 - r0) * u : r0 + (r1 - r0) * u;
						const p = pt(t, rr);
						return <circle key={`${gz.key}${k}`} cx={p.x} cy={p.y} r={6.5} fill={`url(#${ID}-g-${gz.key})`} stroke="#ffffff" strokeWidth={1} opacity={Math.sin(Math.PI * u) * 0.9 + 0.1} />;
					})
					: null,
			)}
			{/* feature chips */}
			{(e.features ?? []).map((f, k) => (
				<Chip2 key={k} x={600} y={96 + k * 52} text={f.text} color={f.amber ? TOK.amber : theme.accent} textColor={f.amber ? TOK.amberInk : undefined} t={popAt(frame, fps, f.at)} size={18} />
			))}
			{e.wallLabel && (
				<Lines x={600} y={96 + (e.features?.length ?? 0) * 52 + 20} lines={wrap(e.wallLabel.text, 20)} size={16} color={TOK.inkDim} weight={700} opacity={fadeAt(frame, e.wallLabel.at, 14)} />
			)}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
