// FeedbackLoopDiagram — a stimulus-response pathway as a row of stations on
// stone plinths, with a gauge for the controlled variable above them.
//
// The stimulus pushes the gauge's ball out of its tolerance band; a signal then
// runs station to station, each lighting as the narration names it; when the
// last station (the response) acts, the ball eases back to the set point and a
// loop-back arrow closes the negative-feedback loop. Every label comes from
// props (the scene's own words); nothing is numeric unless the scene says so.
//
// Beats are frames after `delay`. In the hold the ball drifts gently inside the
// band (a stable oscillation) and the signal keeps circling the loop.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GlossDefs, Note, NoteLine, ease, fadeAt, mix, popAt} from './shared';

type Station = {role: string; label: string; sub?: string; at: number};

export type FeedbackLoopProps = {
	variable: {label: string; setLabel?: string; highLabel?: string};
	stations: Station[];
	/** When the stimulus pushes the variable out of range. */
	pushAt: number;
	/** When the response starts bringing it back. */
	returnAt: number;
	loop?: {label: string; at: number};
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8loop';
const W = 760;
const H = 530;
const PY = 300;
const BY = 262; // ball centre on each plinth
const GY = 96; // gauge track y
const GX0 = 60, GX1 = 700;
const COLORS = ['red', 'blue', 'violet', 'teal', 'green'] as const;

export const FeedbackLoopDiagram = ({variable, stations, pushAt, returnAt, loop, notes = [], delay = 62}: FeedbackLoopProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const gap = (W - 60) / n;
	const xs = stations.map((_, i) => 30 + gap * (i + 0.5));
	const rx = Math.min(64, gap * 0.44);

	// Variable value: 0 = set point, 1 = pushed out of range.
	const up = ease(frame, pushAt, pushAt + 40);
	const down = ease(frame, returnAt, returnAt + 70);
	const settled = fadeAt(frame, returnAt + 70, 30);
	const v = up * (1 - down) + settled * 0.12 * Math.sin((frame - returnAt) / 22);
	const mid = (GX0 + GX1) / 2;
	const half = (GX1 - GX0) / 2;
	const bandHalf = half * 0.36;
	const bx = mid + v * half * 0.82;
	const outside = Math.abs(bx - mid) > bandHalf;

	// Signal: travels into station i over the 26 frames before its `at`.
	const loopOn = loop ? fadeAt(frame, loop.at, 16) : 0;
	const signal = () => {
		for (let i = 1; i < n; i++) {
			const a = stations[i].at;
			if (frame >= a - 26 && frame < a) {
				const t = (frame - (a - 26)) / 26;
				return {x: xs[i - 1] + 36 + (xs[i] - 36 - xs[i - 1] - 36) * t, y: BY};
			}
		}
		// hold: circle the whole loop once every 150 frames after the loop closes
		if (loop && frame > loop.at + 30) {
			const T = 150;
			const u = ((frame - loop.at - 30) % T) / T;
			const legs = n - 1;
			const fwd = 0.7;
			if (u < fwd) {
				const k = Math.min(legs - 1, Math.floor((u / fwd) * legs));
				const t = (u / fwd) * legs - k;
				return {x: xs[k] + 36 + (xs[k + 1] - 72 - xs[k]) * t, y: BY};
			}
			const t = (u - fwd) / (1 - fwd);
			return {x: xs[n - 1] - (xs[n - 1] - xs[0]) * t, y: LOOP_Y};
		}
		return null;
	};
	const LOOP_Y = 452;
	const sig = signal();

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => s.label).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{red: COL.red, blue: COL.blue, violet: COL.violet, teal: COL.teal, green: COL.green, off: '#c9ccd1', ball: '#ffffff'}} />

			{/* Gauge */}
			<g opacity={fadeAt(frame, 0, 16)}>
				<text x={GX0} y={GY - 26} fill={TOK.ink} fontSize={19} fontWeight={800}>{variable.label}</text>
				<rect x={GX0} y={GY - 9} width={GX1 - GX0} height={18} rx={9} fill="#e6e3dd" stroke="#cfcac1" />
				<rect x={mid - bandHalf} y={GY - 9} width={bandHalf * 2} height={18} rx={9} fill={mix('#ffffff', theme.accent, 0.3)} />
				<line x1={mid} y1={GY - 18} x2={mid} y2={GY + 18} stroke={theme.accent} strokeWidth={3} />
				<text x={mid} y={GY + 38} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{variable.setLabel ?? 'set point'}</text>
				<text x={mid} y={GY - 26} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>tolerance range</text>
				{variable.highLabel && (
					<text x={GX1 - 4} y={GY + 38} textAnchor="end" fill={COL.red} fontSize={16} fontWeight={800} opacity={up * (1 - down)}>{variable.highLabel}</text>
				)}
				<circle cx={bx} cy={GY} r={15} fill={`url(#${ID}-g-${outside ? 'red' : 'ball'})`} stroke={outside ? '#9c2f25' : '#9aa0a6'} strokeWidth={1.5} />
			</g>

			{/* Stations */}
			{stations.map((s, i) => {
				const on = fadeAt(frame, s.at - 4, 10);
				const pop = popAt(frame, fps, s.at - 4);
				const col = COLORS[i % COLORS.length];
				const glow = i === n - 1 ? idlePulse(frame, 60) * fadeAt(frame, returnAt, 20) : 0;
				const lines = (s.sub ?? '').split('\n').filter(Boolean);
				return (
					<g key={i} opacity={0.35 + 0.65 * on}>
						<DioramaPlinth id={`${ID}${i}`} cx={xs[i]} cy={PY} rx={rx} />
						{glow > 0 && <circle cx={xs[i]} cy={BY} r={40 + glow * 6} fill={TOK.amber} opacity={0.22} />}
						<circle
							cx={xs[i]}
							cy={BY + idleBob(frame, i, 1.6) * on}
							r={29 * (0.85 + 0.15 * Math.min(1.1, pop))}
							fill={`url(#${ID}-g-${on > 0.5 ? col : 'off'})`}
							stroke="rgba(0,0,0,0.25)"
						/>
						<text x={xs[i]} y={BY + 6} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800} opacity={on}>{i + 1}</text>
						<text x={xs[i]} y={BY - 44} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} letterSpacing="0.06em">{s.role.toUpperCase()}</text>
						<g opacity={on}>
							{s.label.split('\n').map((ln, k) => (
								<text key={k} x={xs[i]} y={PY + 52 + k * 20} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{ln}</text>
							))}
							{lines.map((ln, k) => (
								<text key={k} x={xs[i]} y={PY + 52 + s.label.split('\n').length * 20 + k * 18} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{ln}</text>
							))}
						</g>
						{i < n - 1 && (
							<Arrow x1={xs[i] + 34} y1={BY} x2={xs[i + 1] - 34} y2={BY} color={TOK.inkMute} width={3} head={9} t={fadeAt(frame, stations[i + 1].at - 26, 20)} />
						)}
					</g>
				);
			})}

			{/* Loop back */}
			{loop && (
				<g opacity={loopOn}>
					<path
						d={`M ${xs[n - 1]} ${LOOP_Y - 20} L ${xs[n - 1]} ${LOOP_Y} L ${xs[0]} ${LOOP_Y} L ${xs[0]} ${LOOP_Y - 20}`}
						stroke={theme.accent}
						strokeWidth={3}
						strokeDasharray="8 6"
						fill="none"
					/>
					<path d={`M ${xs[0] - 8} ${LOOP_Y - 16} L ${xs[0]} ${LOOP_Y - 28} L ${xs[0] + 8} ${LOOP_Y - 16} Z`} fill={theme.accent} />
					<rect x={W / 2 - 200} y={LOOP_Y - 14} width={400} height={28} rx={14} fill="#ffffff" />
					<text x={W / 2} y={LOOP_Y + 6} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>{loop.label}</text>
				</g>
			)}

			{sig && <circle cx={sig.x} cy={sig.y} r={8} fill={TOK.amber} stroke="#ffffff" strokeWidth={2} />}

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 10 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
