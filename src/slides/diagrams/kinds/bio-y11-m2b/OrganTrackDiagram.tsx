// OrganTrackDiagram (bio11m2OrganTrack) — how blood changes as it passes
// through organs.
//
// Organs stand on stone plinths along a blood vessel. On each organ's beat the
// changes it makes pop in underneath as arrow chips ("O₂ ↓", "urea ↑"), built
// from the `changes` prop, so the chips always say exactly what the levels do.
// With `panel`, a blood sample travels along the vessel and a gauge panel
// above shows the level of each tracked substance in the blood leaving the
// last organ passed. Levels are qualitative (0–4, no units): the start levels
// plus each organ's changes, accumulated, so the bars are computed, not drawn.
// All names come from props. Hold: the sample keeps circulating, the bars
// breathe gently.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, clamp, fadeAt, popAt, wrap} from './shared';
import {Organ, OrganName} from './organs';

type Key = keyof typeof PAL;
type Station = {name: string; icon: OrganName; at: number; changes?: Partial<Record<Key, number>>; notes?: {text: string; at: number}[]; amber?: boolean};
export type OrganTrackProps = {
	substances: {key: Key; label: string}[];
	start?: Partial<Record<Key, number>>;
	panel?: {title: string; at: number};
	stations: Station[];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2trk';
const MAX = 4;

export const OrganTrackDiagram = ({substances, start = {}, panel, stations, footer = [], delay = 62}: OrganTrackProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const colW = (W - 16) / n;
	const xs = stations.map((_, i) => 8 + colW * (i + 0.5));
	const PY = panel ? 300 : 250;
	const rx = Math.min(n <= 3 ? 74 : 60, colW / 2 - 6);
	const lab = Object.fromEntries(substances.map((s) => [s.key, s.label])) as Record<string, string>;

	// cumulative levels after each station
	const levels: Record<string, number>[] = [];
	let cur: Record<string, number> = Object.fromEntries(substances.map((s) => [s.key, start[s.key] ?? 2]));
	for (const st of stations) {
		cur = {...cur};
		for (const [k, d] of Object.entries(st.changes ?? {})) cur[k] = Math.max(0, Math.min(MAX, (cur[k] ?? 2) + (d ?? 0)));
		levels.push(cur);
	}
	const levelNow = (k: string) => {
		let v = start[k as Key] ?? 2;
		stations.forEach((st, i) => {
			const t = interpolate(frame, [st.at, st.at + 30], [0, 1], clamp);
			const prev = i === 0 ? start[k as Key] ?? 2 : levels[i - 1][k];
			v = t > 0 ? prev + (levels[i][k] - prev) * t : v;
		});
		return v;
	};

	// sample position
	let sx = xs[0] - colW * 0.45;
	stations.forEach((st, i) => {
		const from = i === 0 ? xs[0] - colW * 0.45 : xs[i - 1];
		const t = interpolate(frame, [st.at - 30, st.at], [0, 1], clamp);
		if (t > 0) sx = from + (xs[i] - from) * t;
	});
	const vesselY = PY - 4;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => s.name).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />

			{panel && (
				<g opacity={fadeAt(frame, panel.at, 14)}>
					<rect x={120} y={14} width={520} height={38 + substances.length * 36} rx={14} fill="#ffffff" stroke={TOK.cardBorder} strokeWidth={2} />
					<text x={W / 2} y={42} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{panel.title}</text>
					{substances.map((s, k) => {
						const y = 70 + k * 36;
						const v = levelNow(s.key);
						return (
							<g key={s.key}>
								<text x={262} y={y + 7} textAnchor="end" fill={TOK.ink} fontSize={20} fontWeight={800}>{s.label}</text>
								<rect x={278} y={y - 10} width={340} height={20} rx={10} fill="#ece9e3" />
								<rect x={278} y={y - 10} width={Math.max(20, (340 * v) / MAX)} height={20} rx={10} fill={`url(#${ID}-g-${s.key})`} opacity={0.85 + 0.15 * idlePulse(frame, 80)} />
							</g>
						);
					})}
				</g>
			)}

			{/* vessel */}
			<line x1={xs[0] - colW * 0.48} x2={xs[n - 1] + colW * 0.48} y1={vesselY} y2={vesselY} stroke={PAL.blood} strokeWidth={14} strokeLinecap="round" opacity={0.3 * fadeAt(frame, stations[0].at - 40, 20)} />
			{panel && <circle cx={sx} cy={vesselY} r={11} fill={`url(#${ID}-g-blood)`} stroke="#ffffff" strokeWidth={2} opacity={fadeAt(frame, stations[0].at - 40, 14)} />}

			{stations.map((st, i) => {
				const p = popAt(frame, fps, st.at);
				const on = 0.3 + 0.7 * Math.min(1, p * 1.4);
				const names = wrap(st.name, Math.max(9, Math.floor(colW / 10.5)));
				let cy = PY + rx * 0.34 + 36 + names.length * 22;
				const chips = Object.entries(st.changes ?? {}).filter(([, d]) => d);
				return (
					<g key={i}>
						<g opacity={on}>
							{st.amber && <ellipse cx={xs[i]} cy={PY - 34} rx={rx * 1.15} ry={rx * 0.95} fill={TOK.amber} opacity={(0.1 + 0.14 * idlePulse(frame)) * Math.min(1, p)} />}
							<DioramaPlinth id={`${ID}${i}`} cx={xs[i]} cy={PY} rx={rx} />
							<Organ id={ID} name={st.icon} x={xs[i]} y={PY - rx * 0.62 + idleBob(frame, i, 1)} s={Math.min(1.25, rx / 54)} frame={frame} />
							<Lines x={xs[i]} y={PY + rx * 0.34 + 32} lines={names} size={19} color={st.amber ? TOK.amberInk : theme.accent} />
						</g>
						{chips.map(([k, d], j) => {
							const y = cy + j * 30;
							return <Chip2 key={k} x={xs[i]} y={y} text={`${lab[k] ?? k} ${d! > 0 ? '↑' : '↓'}`} color={PAL[k as Key]} textColor={TOK.ink} t={popAt(frame, fps, st.at + 10 + j * 8)} size={17} />;
						})}
						{(() => {
							cy += chips.length * 30;
							return (st.notes ?? []).map((nt, j) => (
								<Lines key={`n${j}`} x={xs[i]} y={cy + 2 + j * 20} lines={wrap(nt.text, Math.floor(colW / 8.6))} size={15} color={TOK.inkDim} weight={700} opacity={fadeAt(frame, nt.at, 12)} />
							));
						})()}
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

