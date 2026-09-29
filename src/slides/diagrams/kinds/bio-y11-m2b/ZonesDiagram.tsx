// ZonesDiagram (bio11m2Zones) — optimal range, tolerance range and critical
// tolerance limits for one physiological variable, on a true-to-scale axis.
//
// A scale (min to max, from props) lies on a stone slab. Coloured bands mark
// the optimal range, the tolerance range either side ("copes") and the zones
// beyond the critical limits ("fails"); every boundary sits at its prop value.
// Marker pins drop onto the scale at their values on their beats (e.g. 37,
// a 40 °C fever, 42 °C). Optional `enzyme`: a curve of enzyme activity drawn
// above the same axis: rising to a peak at the optimum, then falling steeply
// to zero at the upper limit, where enzymes denature. It is a qualitative
// shape (labelled as such), anchored to the scene's own values.
// Hold: the latest marker breathes; the curve's reading bead drifts.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, STONE, idlePulse} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, PAL, W, alongPoly, fadeAt, mix, popAt} from './shared';

export type ZonesProps = {
	scale: {min: number; max: number; step: number; unit: string; label: string};
	optimal: {from: number; to: number; label: string; at: number};
	tolerance: {from: number; to: number; label: string; at: number};
	critical: {label: string; failLabel: string; at: number};
	markers?: {value: number; label: string; at: number; amber?: boolean}[];
	enzyme?: {at: number; label: string; optimum: number; zeroAt: number; note?: string; denature?: {label: string; at: number; value: number}};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2zone';
const L = 60, R = 700;

export const ZonesDiagram = ({scale, optimal, tolerance, critical, markers = [], enzyme, footer = [], delay = 62}: ZonesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const SY = enzyme ? 392 : 360; // scale baseline
	const BH = enzyme ? 44 : 74;
	const px = (v: number) => L + ((v - scale.min) / (scale.max - scale.min)) * (R - L);
	const ticks: number[] = [];
	for (let v = scale.min; v <= scale.max + 1e-9; v += scale.step) ticks.push(+v.toFixed(2));
	const band = (from: number, to: number, fill: string, o: number, key: string) => (
		<rect key={key} x={px(from)} y={SY - BH} width={Math.max(0, px(to) - px(from))} height={BH} fill={fill} opacity={o} />
	);
	const tO = fadeAt(frame, tolerance.at, 16);
	const oO = fadeAt(frame, optimal.at, 16);
	const cO = fadeAt(frame, critical.at, 16);
	const red = mix('#ffffff', PAL.stop, 0.28);
	const amb = mix('#ffffff', TOK.amber, 0.3);
	const opt = mix('#ffffff', theme.accent, 0.42);

	// enzyme curve (qualitative): smooth rise to the optimum, steep fall to zero at zeroAt
	const curve = enzyme
		? Array.from({length: 61}, (_, i) => {
			const v = scale.min + ((scale.max - scale.min) * i) / 60;
			let a: number;
			if (v <= enzyme.optimum) {
				const u = (v - scale.min) / (enzyme.optimum - scale.min);
				a = 0.25 + 0.75 * Math.sin((u * Math.PI) / 2) ** 1.5;
			} else if (v < enzyme.zeroAt) {
				const u = (v - enzyme.optimum) / (enzyme.zeroAt - enzyme.optimum);
				a = Math.cos((u * Math.PI) / 2) ** 0.8;
			} else a = 0;
			return {x: px(v), y: SY - BH - 40 - a * 210};
		})
		: [];
	const eT = enzyme ? Math.max(0, Math.min(1, (frame - enzyme.at) / 80)) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${scale.label}: ${optimal.label} ${optimal.from}–${optimal.to} ${scale.unit}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<rect x={24} y={enzyme ? 20 : 40} width={W - 48} height={enzyme ? SY + 100 - 20 : SY + 60} rx={20} fill={STONE.shadow} transform="translate(6, 10)" />
			<rect x={24} y={enzyme ? 20 : 40} width={W - 48} height={enzyme ? SY + 100 - 20 : SY + 60} rx={20} fill="#fbfaf7" stroke={STONE.topEdge} strokeWidth={3} />

			{/* bands */}
			{band(scale.min, tolerance.from, red, cO, 'fl')}
			{band(tolerance.to, scale.max, red, cO, 'fh')}
			{band(tolerance.from, optimal.from, amb, tO, 'tl')}
			{band(optimal.to, tolerance.to, amb, tO, 'th')}
			{band(optimal.from, optimal.to, opt, oO, 'o')}
			<rect x={L} y={SY - BH} width={R - L} height={BH} fill="none" stroke={TOK.inkMute} strokeWidth={2} />

			{/* band labels */}
			<g opacity={oO}>
				<line x1={(px(optimal.from) + px(optimal.to)) / 2} x2={(px(optimal.from) + px(optimal.to)) / 2 - 60} y1={SY - BH} y2={enzyme ? SY - BH - 14 : 96} stroke={theme.accent} strokeWidth={2} />
				<text x={(px(optimal.from) + px(optimal.to)) / 2 - 64} y={enzyme ? SY - BH - 18 : 90} textAnchor="end" fill={theme.accent} fontSize={18} fontWeight={800}>{optimal.label}</text>
			</g>
			<text x={(px(optimal.to) + px(tolerance.to)) / 2 + 10} y={SY - BH / 2 + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={enzyme ? 16 : 18} fontWeight={800} opacity={tO}>{tolerance.label}</text>
			<text x={(px(tolerance.from) + px(optimal.from)) / 2} y={SY - BH / 2 + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={enzyme ? 16 : 18} fontWeight={800} opacity={tO}>{tolerance.label}</text>
			<text x={(px(scale.min) + px(tolerance.from)) / 2} y={SY - BH / 2 + 6} textAnchor="middle" fill={PAL.stop} fontSize={enzyme ? 16 : 18} fontWeight={800} opacity={cO}>{critical.failLabel}</text>
			<text x={(px(tolerance.to) + px(scale.max)) / 2} y={SY - BH / 2 + 6} textAnchor="middle" fill={PAL.stop} fontSize={enzyme ? 16 : 18} fontWeight={800} opacity={cO}>{critical.failLabel}</text>
			{[tolerance.from, tolerance.to].map((v, k) => (
				<g key={k} opacity={cO}>
					<line x1={px(v)} x2={px(v)} y1={SY - BH - 6} y2={SY + 8} stroke={PAL.stop} strokeWidth={3} />
				</g>
			))}
			<text x={(L + R) / 2} y={SY + 78} textAnchor="middle" fill={PAL.stop} fontSize={17} fontWeight={800} opacity={cO}>{critical.label}</text>

			{/* axis */}
			{ticks.map((t) => (
				<g key={t}>
					<line x1={px(t)} x2={px(t)} y1={SY} y2={SY + 6} stroke={TOK.inkMute} strokeWidth={2} />
					<text x={px(t)} y={SY + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{t}</text>
				</g>
			))}
			<text x={(L + R) / 2} y={SY + 52} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{`${scale.label} (${scale.unit})`}</text>

			{/* enzyme curve */}
			{enzyme && eT > 0 && (
				<g>
					<text x={L + 4} y={46} fill={TOK.ink} fontSize={17} fontWeight={800}>{enzyme.label}</text>
					{enzyme.note && <text x={R} y={46} textAnchor="end" fill={TOK.inkMute} fontSize={15} fontWeight={700}>{enzyme.note}</text>}
					<path d={curve.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ')} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - eT} />
					{(() => {
						const b = alongPoly(curve, eT < 1 ? eT : 0.55 + 0.1 * Math.sin(frame / 50));
						return <circle cx={b.x} cy={b.y} r={10} fill={`url(#${ID}-g-glucose)`} stroke="#ffffff" strokeWidth={2} />;
					})()}
					{enzyme.denature && (
						<g>
							<line x1={px(enzyme.denature.value)} x2={px(enzyme.denature.value)} y1={60} y2={SY - BH} stroke={PAL.stop} strokeWidth={2.5} strokeDasharray="6 5" opacity={fadeAt(frame, enzyme.denature.at, 14)} />
							<Chip2 x={Math.min(R - 70, px(enzyme.denature.value) + 20)} y={90} text={enzyme.denature.label} color={PAL.stop} t={popAt(frame, fps, enzyme.denature.at)} size={16} />
						</g>
					)}
				</g>
			)}

			{/* markers */}
			{markers.map((m, k) => {
				const p = popAt(frame, fps, m.at);
				if (p <= 0) return null;
				const x = px(m.value);
				const last = k === markers.length - 1 || frame < markers[k + 1].at;
				const c = m.amber ? TOK.amber : TOK.ink;
				const y = SY - BH - 4;
				return (
					<g key={k} transform={`translate(0, ${(1 - Math.min(1, p)) * -30})`} opacity={Math.min(1, p * 1.4)}>
						<line x1={x} x2={x} y1={y - 40 - (k % 2) * 34} y2={SY} stroke={c} strokeWidth={3} />
						<circle cx={x} cy={y - 40 - (k % 2) * 34} r={10 + (last ? 2 * idlePulse(frame) : 0)} fill={m.amber ? TOK.amber : '#ffffff'} stroke={c} strokeWidth={3} />
						<text x={x} y={y - 60 - (k % 2) * 34} textAnchor="middle" fill={m.amber ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800}>{m.label}</text>
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
