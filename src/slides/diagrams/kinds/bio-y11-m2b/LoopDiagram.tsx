// LoopDiagram (bio11m2Loop) — a feedback system drawn as a real closed loop.
//
// Five stations (stimulus, receptor, control centre, effector, response) sit
// on stone plinths round a ring, each lighting when the narration names it;
// a signal dot runs round the ring from station to station. In the middle, a
// vertical gauge shows the controlled variable against its set point and
// tolerance band: on `pushAt` the stimulus moves it up ("rise") or down
// ("fall") out of the band; on `returnAt` the response brings it back, and the
// closing arrow (response → stimulus) is labelled. Optional `knockout` removes
// one station (e.g. the control centre): it greys out with a cross, the signal
// stops there, and the variable is left uncorrected. All text from props.
// Hold: the variable oscillates gently inside the band; the signal keeps
// circling (unless knocked out).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, Mark, PAL, W, ease, fadeAt, mix, popAt, wrap} from './shared';
import {Organ, OrganName} from './organs';

type Station = {role: string; label: string; icon: OrganName; at: number; hot?: boolean};
export type LoopProps = {
	variable: {label: string; setLabel?: string; direction: 'rise' | 'fall'; outLabel?: string};
	stations: Station[];
	pushAt: number;
	returnAt: number;
	loop?: {label: string; at: number};
	knockout?: {index: number; at: number; text: string};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2loop';
const C = {x: W / 2, y: 252};
const RX = 268, RY = 188;
const ANG = [-90, -18, 54, 126, 198];

export const LoopDiagram = ({variable, stations, pushAt, returnAt, loop, knockout, footer = [], delay = 62}: LoopProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const pos = stations.map((_, i) => {
		const a = ((ANG[i] ?? -90 + (360 / n) * i) * Math.PI) / 180;
		return {x: C.x + Math.cos(a) * RX, y: C.y + Math.sin(a) * RY + 20};
	});
	const ko = knockout ? fadeAt(frame, knockout.at, 16) : 0;
	const koIdx = knockout?.index ?? -1;

	// variable: 0 = set point, ±1 = out of band
	const sign = variable.direction === 'rise' ? -1 : 1; // svg y: up is negative
	const out = ease(frame, pushAt, pushAt + 40);
	const back = knockout && frame >= knockout.at ? 0 : ease(frame, returnAt, returnAt + 70);
	const settle = fadeAt(frame, returnAt + 70, 30) * (knockout ? 0 : 1);
	const v = out * (1 - back) + settle * 0.14 * Math.sin((frame - returnAt) / 24);
	const GY0 = C.y - 78, GY1 = C.y + 78;
	const gy = C.y + sign * v * 64 + 12;
	const outside = Math.abs(v) > 0.45;

	// signal dot position
	const seg = (i: number, t: number) => {
		const a = pos[i], b = pos[(i + 1) % n];
		return {x: a.x + (b.x - a.x) * t, y: a.y - 40 + (b.y - a.y) * t};
	};
	let sig: {x: number; y: number} | null = null;
	for (let i = 1; i < n; i++) {
		const a = stations[i].at;
		if (frame >= a - 24 && frame < a) sig = seg(i - 1, (frame - (a - 24)) / 24);
	}
	const lastAt = loop?.at ?? stations[n - 1].at;
	if (!sig && frame > lastAt + 30) {
		const T = 50 * n;
		const u = ((frame - lastAt - 30) % T) / T;
		const k = Math.floor(u * n);
		const t = u * n - k;
		const stopped = knockout && frame >= knockout.at && k >= koIdx - 1;
		if (!stopped) sig = seg(k, t);
	}

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => `${s.role}: ${s.label}`).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />

			{/* ring arrows */}
			{stations.map((s, i) => {
				const j = (i + 1) % n;
				const closing = j === 0;
				const at = closing ? loop?.at ?? 1e9 : stations[j].at;
				const t = fadeAt(frame, at - 24, 20);
				if (t <= 0) return null;
				const a = pos[i], b = pos[j];
				const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
				const x1 = a.x + (dx / len) * 62, y1 = a.y - 34 + (dy / len) * 44;
				const x2 = b.x - (dx / len) * 62, y2 = b.y - 34 - (dy / len) * 44;
				const dead = knockout && (i === koIdx || j === koIdx) ? ko : 0;
				return (
					<g key={i} opacity={1 - dead * 0.7}>
						<Arrow x1={x1} y1={y1} x2={x1 + (x2 - x1) * t} y2={y1 + (y2 - y1) * t} color={closing ? theme.accent : TOK.inkMute} width={closing ? 4 : 3} head={11} dash={closing ? '8 6' : undefined} />
					</g>
				);
			})}

			{/* gauge */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={C.x - 14} y={GY0} width={28} height={GY1 - GY0 + 24} rx={14} fill="#ece9e3" stroke="#d3cec5" strokeWidth={2} />
				<rect x={C.x - 14} y={C.y - 20} width={28} height={64} rx={8} fill={mix('#ffffff', theme.accent, 0.3)} />
				<line x1={C.x - 26} x2={C.x + 26} y1={C.y + 12} y2={C.y + 12} stroke={theme.accent} strokeWidth={3} />
				<text x={C.x + 32} y={C.y + 18} fill={theme.accent} fontSize={16} fontWeight={800}>{variable.setLabel ?? 'set point'}</text>
				<Lines x={C.x + 30} y={GY0 + 14} anchor="start" lines={wrap(variable.label, 14)} size={17} color={TOK.ink} />
				<circle cx={C.x} cy={gy} r={13} fill={`url(#${ID}-g-${outside ? 'oxygen' : 'wbc'})`} stroke={outside ? '#9c2f25' : '#9aa0a6'} strokeWidth={1.5} />
				{variable.outLabel && <text x={C.x - 32} y={C.y + 12 + sign * 64 + 6} textAnchor="end" fill={PAL.oxygen} fontSize={16} fontWeight={800} opacity={out * (1 - back)}>{variable.outLabel}</text>}
			</g>

			{/* stations */}
			{stations.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				const on = 0.3 + 0.7 * Math.min(1, p * 1.4);
				const dead = i === koIdx ? ko : 0;
				const P = pos[i];
				const glow = i === n - 1 ? fadeAt(frame, returnAt, 20) * idlePulse(frame, 60) : 0;
				const lines = wrap(s.label, 21);
				return (
					<g key={i} opacity={on * (1 - dead * 0.6)}>
						{glow > 0 && !knockout && <ellipse cx={P.x} cy={P.y - 28} rx={62} ry={50} fill={TOK.amber} opacity={0.16 * glow} />}
						<DioramaPlinth id={`${ID}${i}`} cx={P.x} cy={P.y} rx={58} />
						<Organ id={ID} name={s.icon} x={P.x} y={P.y - 36 + idleBob(frame, i, 1.2) * Math.min(1, p)} s={0.86} frame={frame} hot={s.hot} />
						<text x={P.x} y={P.y + 38} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} letterSpacing="0.06em">{s.role.toUpperCase()}</text>
						<Lines x={P.x} y={P.y + 59} lines={lines} size={18} color={TOK.ink} />
						{dead > 0 && <Mark x={P.x + 36} y={P.y - 60} ok={false} r={15} opacity={dead} />}
					</g>
				);
			})}
			{sig && <circle cx={sig.x} cy={sig.y} r={8} fill={TOK.amber} stroke="#ffffff" strokeWidth={2} />}
			{loop && (() => {
				const a = pos[n - 1], b = pos[0];
				const mx = (a.x + b.x) / 2 - 64, my = (a.y + b.y) / 2 - 20;
				return <Chip2 x={Math.max(110, mx)} y={my} text={loop.label} color={theme.accent} t={popAt(frame, fps, loop.at)} size={16} />;
			})()}
			{knockout && <Chip2 x={W - 150} y={30} text={knockout.text} color={PAL.stop} t={popAt(frame, fps, knockout.at + 10)} size={17} />}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
