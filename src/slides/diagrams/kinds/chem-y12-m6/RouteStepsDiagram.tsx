// RouteStepsDiagram — calculation routes as stepping stones that land on a
// pH ruler.
//
// Each lane is one route (strong acid direct; base via pOH; weak base via Kb):
// its steps light up one card at a time on a stone ledge, in the order the
// narration takes them, and the last step drops a pin onto the shared 0–14
// ruler at the answer's pH. An optional amber "trap" pin shows where the
// classic slip lands (e.g. stopping at pOH gives an acidic pH for a base).
// Card text comes from the lesson's own worked example; pin positions are the
// pH numbers in the props.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {Arrow, BLUE, ease, fadeAt, phColor, popAt} from './shared';

export type RouteStep = {text: string; at: number};
export type RouteLane = {title: string; tone?: 'acid' | 'base'; steps: RouteStep[]; pH?: number; pHLabel?: string};
export type RouteStepsProps = {
	lanes: RouteLane[];
	trap?: {pH: number; at: number; text: string};
	/** A note under the ruler (e.g. "acid < 7 < base"). */
	note?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m6route';
const W = 760;
const H = 530;
const X0 = 60, X1 = 700;
const px = (pH: number) => X0 + ((X1 - X0) * pH) / 14;

export const RouteStepsDiagram = ({lanes, trap, note, delay = 62}: RouteStepsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const RY = 392, RH = 26;
	const laneH = lanes.length === 1 ? 250 : 160;
	const laneTop = (i: number) => 14 + i * (laneH + 12);
	const toneColor = (l: RouteLane) => (l.tone === 'base' ? BLUE : theme.accent);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Calculation routes to pH" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-ruler`} x1="0" x2="1" y1="0" y2="0">
					{Array.from({length: 15}, (_, i) => <stop key={i} offset={`${(i / 14) * 100}%`} stopColor={phColor(i)} />)}
				</linearGradient>
			</defs>

			{lanes.map((lane, li) => {
				const y0 = laneTop(li);
				const c = toneColor(lane);
				const n = lane.steps.length;
				const gap = 22;
				const cw = (W - 40 - gap * (n - 1)) / n;
				const ch = lanes.length === 1 ? 118 : 78;
				const cy = y0 + 44;
				const first = lane.steps[0]?.at ?? 0;
				return (
					<g key={li}>
						<text x={20} y={y0 + 22} fill={c} fontSize={20} fontWeight={800} opacity={fadeAt(frame, first - 10)}>{lane.title}</text>
						{/* stone ledge under the cards */}
						<g opacity={fadeAt(frame, first - 10)}>
							<rect x={14} y={cy + ch - 4} width={W - 28} height={16} rx={6} fill="#bdb8ae" />
							<rect x={14} y={cy + ch + 6} width={W - 28} height={8} rx={4} fill="#8f8b83" />
						</g>
						{lane.steps.map((s, si) => {
							const x = 20 + si * (cw + gap);
							const pop = popAt(frame, fps, s.at);
							if (pop <= 0) return null;
							const lines = s.text.split('\n');
							const last = si === n - 1;
							return (
								<g key={si}>
									{si > 0 && <Arrow x1={x - gap + 3} y1={cy + ch / 2} x2={x - 3} y2={cy + ch / 2} color={TOK.inkMute} width={2.5} head={8} t={ease(frame, s.at - 6, s.at + 6)} />}
									<g transform={`translate(${x + cw / 2},${cy + ch / 2}) scale(${Math.min(1, pop)}) translate(${-(x + cw / 2)},${-(cy + ch / 2)})`}>
										<rect x={x} y={cy} width={cw} height={ch} rx={12} fill="#ffffff" stroke={last ? c : 'rgba(0,0,0,0.12)'} strokeWidth={last ? 3 : 1.5} />
										<rect x={x} y={cy} width={cw} height={7} rx={3.5} fill={c} opacity={0.85} />
										{lines.map((ln, k) => (
											<text key={k} x={x + cw / 2} y={cy + ch / 2 + 7 + (k - (lines.length - 1) / 2) * 23} textAnchor="middle" fill={k === 0 ? TOK.ink : TOK.inkDim} fontSize={(k === 0 ? 18 : 16) - (n > 3 ? 1 : 0)} fontWeight={k === 0 ? 800 : 700}>
												{ln}
											</text>
										))}
									</g>
								</g>
							);
						})}
					</g>
				);
			})}

			{/* Shared pH ruler */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={X0 - 16} y={RY + RH - 2} width={X1 - X0 + 32} height={18} rx={6} fill="#bdb8ae" />
				<rect x={X0 - 16} y={RY + RH + 8} width={X1 - X0 + 32} height={9} rx={4} fill="#8f8b83" />
				<rect x={X0} y={RY} width={X1 - X0} height={RH} rx={8} fill={`url(#${ID}-ruler)`} stroke="rgba(0,0,0,0.2)" />
				<line x1={px(7)} y1={RY - 6} x2={px(7)} y2={RY + RH + 6} stroke="#ffffff" strokeWidth={3} />
				{[0, 7, 14].map((v) => (
					<text key={v} x={px(v)} y={RY + RH + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{v}</text>
				))}
				<text x={px(3.5)} y={RY + RH + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>acidic</text>
				<text x={px(10.5)} y={RY + RH + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>basic</text>
			</g>

			{/* Landing pins */}
			{lanes.map((lane, li) => {
				if (lane.pH === undefined) return null;
				const at = lane.steps[lane.steps.length - 1].at + 20;
				const t = ease(frame, at, at + 22);
				if (t <= 0) return null;
				const x = px(lane.pH);
				const c = toneColor(lane);
				const y = RY - 12 - (1 - t) * 60;
				return (
					<g key={li} opacity={Math.min(1, t * 2)}>
						<path d={`M ${x} ${RY + 2} L ${x - 10} ${y - 10} L ${x + 10} ${y - 10} Z`} fill={c} />
						<rect x={x - 48} y={y - 44} width={96} height={34} rx={17} fill="#ffffff" stroke={c} strokeWidth={3} />
						<text x={x} y={y - 21} textAnchor="middle" fill={c} fontSize={18} fontWeight={800}>{lane.pHLabel ?? `pH ${lane.pH.toFixed(2)}`}</text>
					</g>
				);
			})}

			{trap && (() => {
				const t = ease(frame, trap.at, trap.at + 20);
				if (t <= 0) return null;
				const x = px(trap.pH);
				const pulse = idlePulse(frame);
				return (
					<g opacity={t}>
						<circle cx={x} cy={RY + RH / 2} r={16} fill="#ffffff" stroke={TOK.amber} strokeWidth={3 + pulse} />
						<path d={`M ${x - 6} ${RY + RH / 2 - 6} L ${x + 6} ${RY + RH / 2 + 6} M ${x + 6} ${RY + RH / 2 - 6} L ${x - 6} ${RY + RH / 2 + 6}`} stroke={TOK.amberInk} strokeWidth={3.5} strokeLinecap="round" />
						<text x={Math.max(200, Math.min(W - 200, x))} y={RY + RH + 64} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{trap.text}</text>
					</g>
				);
			})()}
			{note && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, note.at)}>{note.text}</text>
			)}
		</svg>
	);
};
