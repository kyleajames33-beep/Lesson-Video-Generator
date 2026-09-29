// TractDiagram (bio11m2Tract) — the digestive tract as one tube of stations,
// mouth to anus, each organ on its own stone plinth, joined by a gut tube.
//
// A food bolus travels along the tube, reaching each station on its beat (the
// moment the narration names it); the station lights and its job chip pops in
// underneath. Accessory organs (liver, pancreas) sit above the station they
// feed, with a duct arrow and label (e.g. "bile + enzymes"). One station can
// be amber (most absorption). All text from props. Hold: the bolus keeps
// cycling along the tube, the amber station breathes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, fadeAt, popAt, wrap} from './shared';
import {Organ, OrganName} from './organs';

type Station = {name: string; icon: OrganName; at: number; chips?: {text: string; at: number}[]; amber?: boolean};
export type TractProps = {
	stations: Station[];
	accessory?: {name: string; icon: OrganName; to: number; label: string; at: number}[];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2tract';

export const TractDiagram = ({stations, accessory = [], footer = [], delay = 62}: TractProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const colW = (W - 16) / n;
	const xs = stations.map((_, i) => 8 + colW * (i + 0.5));
	const PY = accessory.length ? 320 : 260;
	const rx = Math.min(58, colW / 2 - 4);
	const tubeY = PY - 6;

	// bolus position: between station i-1 and i during the 30 frames before stations[i].at
	let bx = xs[0];
	for (let i = 1; i < n; i++) {
		const a = stations[i].at;
		if (frame >= a) bx = xs[i];
		else if (frame > a - 30) bx = xs[i - 1] + ((xs[i] - xs[i - 1]) * (frame - (a - 30))) / 30;
	}
	const last = stations[n - 1].at;
	if (frame > last + 60) {
		const u = ((frame - last - 60) % 240) / 240;
		bx = xs[0] + (xs[n - 1] - xs[0]) * u;
	}
	// the bolus shrinks as it goes (broken down), then is just waste
	const frac = (bx - xs[0]) / (xs[n - 1] - xs[0] || 1);
	const bR = 13 - frac * 6;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => s.name).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />

			{/* gut tube */}
			<line x1={xs[0]} x2={xs[0] + (xs[n - 1] - xs[0]) * fadeAt(frame, stations[0].at, 40)} y1={tubeY} y2={tubeY} stroke={PAL.gut} strokeWidth={18} strokeLinecap="round" opacity={0.45} />

			{fadeAt(frame, stations[0].at, 10) > 0 && (
				<circle cx={bx} cy={tubeY} r={bR} fill="#c9a26a" stroke="#8f6f3f" strokeWidth={1.5} opacity={fadeAt(frame, stations[0].at, 10)} />
			)}
			{accessory.map((a, k) => {
				const p = popAt(frame, fps, a.at);
				const ax = xs[a.to] + (k - (accessory.length - 1) / 2) * 118;
				const ay = 150;
				return (
					<g key={k} opacity={Math.min(1, p * 1.4)}>
						<DioramaPlinth id={`${ID}a${k}`} cx={ax} cy={ay} rx={46} />
						<Organ id={ID} name={a.icon} x={ax} y={ay - 30 + idleBob(frame, k + 9, 1)} s={0.8} frame={frame} />
						<text x={ax} y={ay + 40} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{a.name}</text>
						<Arrow x1={ax} y1={ay + 50} x2={xs[a.to] + (ax - xs[a.to]) * 0.25} y2={PY - 96} color={PAL.fat} width={4} head={10} t={fadeAt(frame, a.at + 10, 16)} />
					</g>
				);
			})}
			{accessory.length > 0 && (
				<Chip2 x={Math.min(W - 90, xs[accessory[0].to] + 190)} y={150} text={accessory[0].label} color={theme.accent} t={popAt(frame, fps, accessory[accessory.length - 1].at + 16)} size={16} />
			)}

			{stations.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				const on = 0.3 + 0.7 * Math.min(1, p * 1.4);
				const names = wrap(s.name, Math.floor(colW / 10));
				let cy = PY + rx * 0.34 + 34 + names.length * 21;
				return (
					<g key={i}>
						<g opacity={on}>
							{s.amber && <ellipse cx={xs[i]} cy={PY - 30} rx={rx * 1.2} ry={rx} fill={TOK.amber} opacity={(0.1 + 0.14 * idlePulse(frame)) * Math.min(1, p)} />}
							<DioramaPlinth id={`${ID}${i}`} cx={xs[i]} cy={PY} rx={rx} />
							<Organ id={ID} name={s.icon} x={xs[i]} y={PY - 38 + idleBob(frame, i, 1)} s={rx / 54} frame={frame} />
							<Lines x={xs[i]} y={PY + rx * 0.34 + 30} lines={names} size={18} color={s.amber ? TOK.amberInk : theme.accent} />
						</g>
						{(s.chips ?? []).map((c, k) => {
							const lines = wrap(c.text, Math.floor(colW / 9));
							const y0 = cy;
							cy += lines.length * 19 + 8;
							return <Lines key={k} x={xs[i]} y={y0} lines={lines} size={16} color={TOK.ink} weight={700} opacity={fadeAt(frame, c.at, 12)} />;
						})}
					</g>
				);
			})}

			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
