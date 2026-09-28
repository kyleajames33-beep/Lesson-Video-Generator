// HubDiagram (bio12m7Hub) — one coordinator switching on everything else.
//
// A centre cell on its own plinth is activated by a source (e.g. an
// antigen-presenting cell) and then sends signals (glossy cytokine dots) down
// each spoke to the cells it switches on, spoke by spoke on the narration's
// beats. Optional `knockout`: the centre is destroyed (e.g. by HIV); the
// signals stop and the spoke cells, still present, fall idle. All text from
// props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GLOSS, GlossDefs, H, Lines, Mark, PAL, Title, W, clamp, fadeAt, popAt, wrap} from './shared';
import {Icon, type IconName} from './icons';

export type HubProps = {
	title?: string;
	centre: {name: string; icon: IconName; at: number; sub?: string; subAt?: number};
	source?: {name: string; icon: IconName; at: number; label?: string};
	spokes: {name: string; icon: IconName; label: string; at: number}[];
	knockout?: {at: number; text: string; idleAt?: number; idleText?: string};
	signalColor?: keyof typeof PAL;
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b12m7hub';
const ease = Easing.inOut(Easing.cubic);

export const HubDiagram = ({title, centre, source, spokes, knockout, signalColor = 'helper', footer = [], delay = 62}: HubProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 44 : 0;
	const C = {x: 262, y: top + 236};
	const n = spokes.length;
	const pos = spokes.map((_, i) => {
		const a = ((-56 + (112 * i) / Math.max(1, n - 1)) * Math.PI) / 180;
		return {x: C.x + Math.cos(a) * 420, y: C.y + Math.sin(a) * 180};
	});
	const ko = knockout ? interpolate(frame, [knockout.at + 40, knockout.at + 90], [0, 1], {...clamp, easing: ease}) : 0;
	const pulse = idlePulse(frame);
	const sig = PAL[signalColor];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A coordinating cell'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* spokes */}
			{spokes.map((s, i) => {
				const p = pos[i];
				const t = interpolate(frame, [s.at - 10, s.at + 20], [0, 1], clamp);
				if (t <= 0) return null;
				const x2 = C.x + (p.x - C.x) * t;
				const y2 = C.y + (p.y - C.y) * t;
				return (
					<g key={i}>
						<line x1={C.x} y1={C.y} x2={x2} y2={y2} stroke={ko > 0 ? TOK.inkMute : sig} strokeWidth={3} strokeDasharray="2 8" strokeLinecap="round" opacity={0.6} />
						{ko < 1 &&
							[0, 1, 2].map((k) => {
								const u = ((frame - s.at + k * 16) % 48) / 48;
								if (frame < s.at + 20) return null;
								return <circle key={k} cx={C.x + (p.x - C.x) * (0.18 + 0.64 * u)} cy={C.y + (p.y - C.y) * (0.18 + 0.64 * u)} r={6} fill={`url(#${ID}-ball-${signalColor})`} opacity={(1 - ko) * Math.sin(u * Math.PI)} />;
							})}
					</g>
				);
			})}
			{/* spoke cells */}
			{spokes.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				if (p <= 0) return null;
				const idle = knockout ? fadeAt(frame, knockout.idleAt ?? knockout.at + 90, 20) : 0;
				const lbl = wrap(s.label, 24);
				return (
					<g key={i} opacity={Math.min(1, p * 1.4) * (1 - 0.5 * idle)}>
						<DioramaPlinth id={`${ID}${i}`} cx={pos[i].x} cy={pos[i].y + 26} rx={46} />
						<Icon id={ID} name={s.icon} x={pos[i].x} y={pos[i].y - 6 + idleBob(frame, i, 1.3) * (1 - idle)} s={0.72} frame={frame} />
						<text x={pos[i].x - 56} y={pos[i].y - 10} textAnchor="end" fill={theme.accent} fontSize={17} fontWeight={800}>{s.name}</text>
						<Lines x={pos[i].x - 56} y={pos[i].y + 10} lines={lbl} size={15} color={TOK.inkDim} weight={700} anchor="end" />
					</g>
				);
			})}
			{/* source → centre */}
			{source && (
				<g opacity={fadeAt(frame, source.at)}>
					<DioramaPlinth id={`${ID}src`} cx={72} cy={C.y + 60} rx={56} />
					<Icon id={ID} name={source.icon} x={72} y={C.y + 26 + idleBob(frame, 9, 1.2)} s={0.8} frame={frame} />
					<text x={72} y={C.y + 118} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{source.name}</text>
					<Arrow x1={122} y1={C.y + 18} x2={C.x - 64} y2={C.y + 4} color={TOK.inkMute} width={3} head={11} />
					{source.label && <Lines x={(122 + C.x - 64) / 2 + 4} y={C.y - 34} lines={wrap(source.label, 16)} size={15} color={TOK.inkDim} weight={800} />}
				</g>
			)}
			{/* centre */}
			<g opacity={fadeAt(frame, centre.at - 10, 14)}>
				<DioramaPlinth id={`${ID}c`} cx={C.x} cy={C.y + 42} rx={82} />
				{ko < 1 && <circle cx={C.x} cy={C.y} r={52 + pulse * 4} fill={TOK.amber} opacity={0.14 * (1 - ko)} />}
				<g opacity={1 - 0.7 * ko}>
					<Icon id={ID} name={centre.icon} x={C.x} y={C.y + idleBob(frame, 0, 1.2) * (1 - ko)} s={1.35} frame={frame} />
				</g>
				<text x={C.x} y={C.y + 108} textAnchor="middle" fill={ko > 0.5 ? TOK.inkMute : TOK.amberInk} fontSize={20} fontWeight={800}>{centre.name}</text>
				{centre.sub && <text x={C.x} y={C.y + 130} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, centre.subAt ?? centre.at)}>{centre.sub}</text>}
				{ko > 0 && <Mark x={C.x + 40} y={C.y - 40} ok={false} r={16} opacity={ko} />}
			</g>
			{/* knockout: viruses converge on the centre */}
			{knockout && frame >= knockout.at && (
				<g>
					{[0, 1, 2, 3, 4].map((k) => {
						const a = (k / 5) * Math.PI * 2 + 0.5;
						const t = interpolate(frame, [knockout.at + k * 6, knockout.at + 50 + k * 6], [0, 1], {...clamp, easing: ease});
						const d = 170 - 120 * t;
						return <Icon key={k} id={ID} name="virus" x={C.x + Math.cos(a) * d} y={C.y + Math.sin(a) * d * 0.8} s={0.42} frame={frame} opacity={fadeAt(frame, knockout.at + k * 6)} />;
					})}
					<text x={C.x} y={top + 28} textAnchor="middle" fill={PAL.stop} fontSize={19} fontWeight={800} opacity={fadeAt(frame, knockout.at)}>{knockout.text}</text>
				</g>
			)}
			{knockout?.idleText && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, knockout.idleAt ?? knockout.at + 90)}>{knockout.idleText}</text>
			)}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 36 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
