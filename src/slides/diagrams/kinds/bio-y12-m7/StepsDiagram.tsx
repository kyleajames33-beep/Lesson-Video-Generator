// StepsDiagram (bio12m7Steps) — a process as stepping-stone plinths.
//
// Each step is a small stone plinth with an icon, a name and a short line; it
// rises in on its narration beat and the arrow to it draws in. Layouts:
//  row     left to right (optionally with a loop-back arrow under the row)
//  cycle   stones round a ring, arrows following it (a life cycle)
//  stairs  each stone a step higher (increasing levels of something)
// Optional: a `traveller` icon that hops to each stone on its beat, `tags`
// (chips under a stone at their own beats: interventions, what a step adds),
// `bars` on a step (a tiny stylised bar chart, e.g. a population collapsing),
// one amber step, and footer lines. All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GLOSS, GlossDefs, H, Lines, Title, W, clamp, fadeAt, popAt, textWidth, wrap} from './shared';
import {Icon, type IconName, type IconOpts} from './icons';

export type Step = {
	name: string;
	sub?: string;
	icon?: IconName;
	iconOpts?: IconOpts;
	at: number;
	amber?: boolean;
	bars?: number[];
	tags?: {text: string; at: number; tone?: 'accent' | 'warm' | 'amber'}[];
};
export type StepsProps = {
	title?: string;
	layout?: 'row' | 'cycle' | 'stairs';
	steps: Step[];
	numbered?: boolean;
	loop?: {text?: string; at: number};
	traveller?: {icon: IconName; iconOpts?: IconOpts};
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b12m7step';
const ease = Easing.inOut(Easing.cubic);

export const StepsDiagram = ({title, layout = 'row', steps, numbered, loop, traveller, footer = [], delay = 62}: StepsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = steps.length;
	const top = title ? 50 : 8;
	const footH = footer.length * 25;

	// stone positions (centre of plinth top), sized from each stone's label block
	const cycle = layout === 'cycle';
	const colW = (W - 20) / n;
	const rx = cycle ? 66 : Math.min(88, colW / 2 - 10);
	const nameMax = cycle ? 18 : Math.floor((rx * 2 + 30) / 11);
	const subMax = cycle ? 22 : Math.floor((rx * 2 + 34) / 8.4);
	const nameL = steps.map((st) => wrap(st.name, nameMax));
	const subL = steps.map((st) => (st.sub ? wrap(st.sub, subMax) : []));
	const below = steps.map((st, i) => rx * 0.54 + 24 + nameL[i].length * 21 + subL[i].length * 18 + (st.tags?.length ?? 0) * 30 + 4);
	const above = rx * 1.35 + 10;
	const loopH = loop && !cycle ? (loop.text ? 50 : 30) : 0;
	const bottomLimit = H - footH - loopH - 8;
	let pos: {x: number; y: number}[];
	if (cycle) {
		const sins = steps.map((_, i) => Math.sin(-Math.PI / 2 + (i / n) * Math.PI * 2));
		const lo = Math.min(...sins);
		const hi = Math.max(...sins);
		const topY = top + above;
		const botY = bottomLimit - Math.max(...below);
		const K = (botY - topY) / (hi - lo);
		const c = topY - lo * K;
		pos = steps.map((_, i) => ({x: W / 2 + Math.cos(-Math.PI / 2 + (i / n) * Math.PI * 2) * 262, y: c + sins[i] * K}));
	} else {
		const rise = layout === 'stairs' ? 56 : 0;
		let baseY = bottomLimit - Math.max(...below.map((b, i) => b - i * rise));
		const slack = baseY - (n - 1) * rise - above - top;
		if (slack > 0) baseY -= slack / 2;
		pos = steps.map((_, i) => ({x: 10 + colW * (i + 0.5), y: baseY - i * rise}));
	}
	const loopY = Math.max(...pos.map((p, i) => p.y + below[i])) + 18;

	// traveller: hops to each step on its beat
	let tx = pos[0].x;
	let ty = pos[0].y;
	let tOn = 0;
	if (traveller) {
		tOn = fadeAt(frame, steps[0].at);
		for (let i = 1; i < n; i++) {
			const t = interpolate(frame, [steps[i].at - 14, steps[i].at + 10], [0, 1], {...clamp, easing: ease});
			if (t > 0) {
				tx = pos[i - 1].x + (pos[i].x - pos[i - 1].x) * t;
				ty = pos[i - 1].y + (pos[i].y - pos[i - 1].y) * t - Math.sin(t * Math.PI) * 60;
			}
		}
		if (loop) {
			const t = interpolate(frame, [loop.at, loop.at + 30], [0, 1], {...clamp, easing: ease});
			if (t > 0) {
				tx = pos[n - 1].x + (pos[0].x - pos[n - 1].x) * t;
				ty = pos[n - 1].y + (pos[0].y - pos[n - 1].y) * t - Math.sin(t * Math.PI) * (layout === 'cycle' ? 40 : -60);
			}
		}
	}

	const iconY = (i: number) => pos[i].y - rx * 0.6;
	const arrowBetween = (a: number, b: number, at: number, key: string, curve = 0) => {
		const p1 = pos[a];
		const p2 = pos[b];
		const dx = p2.x - p1.x;
		const dy = p2.y - p1.y;
		const len = Math.hypot(dx, dy) || 1;
		const pad = layout === 'cycle' ? rx + 12 : rx + 4;
		const x1 = p1.x + (dx / len) * pad;
		const y1 = p1.y - 30 + (dy / len) * pad * 0.6;
		const x2 = p2.x - (dx / len) * pad;
		const y2 = p2.y - 30 - (dy / len) * pad * 0.6;
		const t = interpolate(frame, [at - 16, at + 4], [0, 1], clamp);
		if (t <= 0) return null;
		if (curve) {
			const mx = (x1 + x2) / 2 + (-(y2 - y1) / len) * curve;
			const my = (y1 + y2) / 2 + ((x2 - x1) / len) * curve;
			return (
				<g key={key} opacity={t}>
					<path d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} fill="none" stroke={TOK.inkMute} strokeWidth={3} strokeDasharray="6 6" />
					<Arrow x1={mx + (x2 - mx) * 0.8} y1={my + (y2 - my) * 0.8} x2={x2} y2={y2} color={TOK.inkMute} width={3} head={11} />
				</g>
			);
		}
		return <Arrow key={key} x1={x1} y1={y1} x2={x1 + (x2 - x1) * t} y2={y1 + (y2 - y1) * t} color={TOK.inkMute} width={3} head={11} />;
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Steps'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* arrows */}
			{steps.slice(1).map((s, i) => arrowBetween(i, i + 1, s.at, `a${i}`, layout === 'cycle' ? 34 : 0))}
			{loop && layout === 'cycle' && arrowBetween(n - 1, 0, loop.at, 'loop', 34)}
			{loop && layout !== 'cycle' && (() => {
				const y = loopY;
				const o = fadeAt(frame, loop.at - 10, 16);
				return (
					<g opacity={o}>
						<path d={`M ${Math.min(W - 6, pos[n - 1].x + rx + 4)} ${pos[n - 1].y} L ${Math.min(W - 6, pos[n - 1].x + rx + 4)} ${y} L ${Math.max(6, pos[0].x - rx - 4)} ${y} L ${Math.max(6, pos[0].x - rx - 4)} ${pos[0].y + 30}`} fill="none" stroke={TOK.amber} strokeWidth={3} strokeDasharray="7 6" />
						<Arrow x1={Math.max(6, pos[0].x - rx - 4)} y1={pos[0].y + 30} x2={Math.max(6, pos[0].x - rx - 4)} y2={pos[0].y + 4} color={TOK.amber} width={3} head={11} />
						{loop.text && <text x={(pos[0].x + pos[n - 1].x) / 2} y={y + 22} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{loop.text}</text>}
					</g>
				);
			})()}
			{/* stones */}
			{steps.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				const on = Math.min(1, p * 1.4);
				const labelY = pos[i].y + rx * 0.54 + 24;
				const nameLines = nameL[i];
				const subLines = subL[i];
				return (
					<g key={i} opacity={on}>
						{s.amber && <ellipse cx={pos[i].x} cy={pos[i].y - 26} rx={rx * 0.95} ry={rx * 0.7} fill={TOK.amber} opacity={0.08 + 0.12 * idlePulse(frame)} />}
						<g transform={`translate(0, ${(1 - Math.min(1, p)) * 30})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={pos[i].x} cy={pos[i].y} rx={rx} />
							{s.icon && <Icon id={ID} name={s.icon} x={pos[i].x} y={iconY(i) + idleBob(frame, i, 1.4)} s={rx / 62} frame={frame} opts={s.iconOpts} />}
							{s.bars && (
								<g>
									{s.bars.map((v, k) => {
										const bw = (rx * 1.3) / s.bars!.length;
										const hh = v * 60 * fadeAt(frame, s.at + k * 10, 12);
										return <rect key={k} x={pos[i].x - rx * 0.65 + k * bw + 2} y={pos[i].y - 10 - hh} width={bw - 4} height={hh} rx={2} fill={s.amber ? TOK.amber : theme.accent} />;
									})}
								</g>
							)}
							{numbered && (
								<g>
									<circle cx={pos[i].x - rx * 0.8} cy={pos[i].y - 58} r={14} fill={theme.accent} />
									<text x={pos[i].x - rx * 0.8} y={pos[i].y - 52} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={800}>{i + 1}</text>
								</g>
							)}
						</g>
						<Lines x={pos[i].x} y={labelY} lines={nameLines} size={19} color={s.amber ? TOK.amberInk : theme.accent} />
						{subLines.length > 0 && <Lines x={pos[i].x} y={labelY + nameLines.length * 21 + 2} lines={subLines} size={15} color={TOK.inkDim} weight={700} />}
						{(s.tags ?? []).map((t, k) => {
							const tp = popAt(frame, fps, t.at);
							if (tp <= 0) return null;
							const ty2 = labelY + nameLines.length * 21 + subLines.length * 18 + 18 + k * 30;
							const c = t.tone === 'warm' ? '#b5562e' : t.tone === 'amber' ? TOK.amber : theme.accent;
							const w = textWidth(t.text, 15) + 22;
							return (
								<g key={k} transform={`translate(${pos[i].x}, ${ty2}) scale(${Math.min(1, tp)})`}>
									<rect x={-w / 2} y={-13} width={w} height={26} rx={13} fill={t.tone === 'amber' ? '#fff6e6' : '#ffffff'} stroke={c} strokeWidth={2} />
									<text y={5} textAnchor="middle" fill={t.tone === 'amber' ? TOK.amberInk : c} fontSize={15} fontWeight={800}>{t.text}</text>
								</g>
							);
						})}
					</g>
				);
			})}
			{traveller && tOn > 0 && (
				<g opacity={tOn}>
					<Icon id={ID} name={traveller.icon} x={tx + rx * 0.62} y={ty - 64 + idleBob(frame, 9, 2)} s={0.42} frame={frame} opts={traveller.iconOpts} />
				</g>
			)}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
