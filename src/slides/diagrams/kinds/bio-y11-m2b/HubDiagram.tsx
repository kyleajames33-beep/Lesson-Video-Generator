// HubDiagram (bio11m2Hub) — one connector in the middle, the organs it links
// around it. Used for "the circulatory system ties every system to every cell"
// and for "the pituitary relays the hypothalamus's orders to target glands".
//
// Each spoke is an organ on its own stone plinth at a named position, joined
// to the centre by a pipe. On its beat the pipe draws in and glossy particles
// start flowing along it in the spoke's direction ("in" to the centre, "out"
// from it, or "both": two lanes, two colours), with a chip naming what moves.
// All text from props; nothing is computed. Hold: the particles keep flowing.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, Title, W, fadeAt, popAt, wrap} from './shared';
import {Organ, OrganName} from './organs';

type Side = 'tl' | 'tr' | 'l' | 'r' | 'bl' | 'br' | 't' | 'b';
type Spoke = {
	name: string;
	icon: OrganName;
	side: Side;
	at: number;
	flow: 'in' | 'out' | 'both';
	label?: string;
	color?: keyof typeof PAL;
	color2?: keyof typeof PAL;
	amber?: boolean;
};
export type HubProps = {
	title?: string;
	centre: {name: string; sub?: string; icon: OrganName; at: number};
	spokes: Spoke[];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2hub';
const POS: Record<Side, {x: number; y: number}> = {
	tl: {x: 112, y: 140}, tr: {x: 648, y: 140}, l: {x: 96, y: 300}, r: {x: 664, y: 300},
	bl: {x: 112, y: 432}, br: {x: 648, y: 432}, t: {x: 380, y: 118}, b: {x: 380, y: 452},
};

export const HubDiagram = ({title, centre, spokes, footer = [], delay = 62}: HubProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const C = {x: W / 2, y: 300};
	const cp = popAt(frame, fps, centre.at);
	const rxS = 56;
	const yShift = footer.length ? -footer.length * 12 : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${centre.name}: ${spokes.map((s) => s.name).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g transform={`translate(0, ${yShift})`}>
				{/* pipes + flows (under the plinths) */}
				{spokes.map((s, i) => {
					const P = POS[s.side];
					const on = fadeAt(frame, s.at - 6, 18);
					if (on <= 0) return null;
					const x1 = P.x, y1 = P.y - 30, x2 = C.x, y2 = C.y - 34;
					const len = Math.hypot(x2 - x1, y2 - y1);
					const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
					const lanes = s.flow === 'both' ? [{d: 'in' as const, o: -7, c: s.color ?? 'oxygen'}, {d: 'out' as const, o: 7, c: s.color2 ?? 'co2'}] : [{d: s.flow, o: 0, c: s.color ?? 'blood'}];
					const t = Math.min(1, on);
					return (
						<g key={`p${i}`}>
							<line x1={x1} y1={y1} x2={x1 + (x2 - x1) * t} y2={y1 + (y2 - y1) * t} stroke={PAL.blood} strokeWidth={s.flow === 'both' ? 26 : 18} strokeLinecap="round" opacity={0.28} />
							{on >= 1 &&
								lanes.map((ln, k) =>
									Array.from({length: 4}, (_, j) => {
										const u = (((frame - s.at) / 70 + j / 4) % 1 + 1) % 1;
										const f = ln.d === 'in' ? u : 1 - u;
										const px = x1 + (x2 - x1) * f + nx * ln.o;
										const py = y1 + (y2 - y1) * f + ny * ln.o;
										return <circle key={`${k}-${j}`} cx={px} cy={py} r={6} fill={`url(#${ID}-g-${ln.c})`} stroke="#ffffff" strokeWidth={1} opacity={Math.sin(Math.PI * u) * 0.9 + 0.1} />;
									}),
								)}
						</g>
					);
				})}

				{/* centre */}
				<g opacity={Math.min(1, cp * 1.4)} transform={`translate(0, ${(1 - Math.min(1, cp)) * 26})`}>
					<ellipse cx={C.x} cy={C.y - 30} rx={92} ry={70} fill={theme.accent} opacity={0.06 + 0.06 * idlePulse(frame, 70)} />
					<DioramaPlinth id={`${ID}c`} cx={C.x} cy={C.y} rx={78} />
					<Organ id={ID} name={centre.icon} x={C.x} y={C.y - 44 + idleBob(frame, 0, 1.2)} s={1.25} frame={frame} />
					<Lines x={C.x} y={C.y + 64} lines={wrap(centre.name, 22)} size={21} color={theme.accent} />
					{centre.sub && <Lines x={C.x} y={C.y + 64 + wrap(centre.name, 22).length * 24} lines={wrap(centre.sub, 26)} size={15} color={TOK.inkDim} weight={700} />}
				</g>

				{/* spokes */}
				{spokes.map((s, i) => {
					const P = POS[s.side];
					const p = popAt(frame, fps, s.at);
					const on = Math.min(1, p * 1.4);
					const names = wrap(s.name, 16);
					const lx = P.x + (C.x - P.x) * 0.6;
					const ly = P.y - 30 + (C.y - 34 - (P.y - 30)) * 0.6 - (s.side === 't' || s.side === 'b' ? 0 : 22);
					return (
						<g key={i}>
							<g opacity={on} transform={`translate(0, ${(1 - Math.min(1, p)) * 22})`}>
								{s.amber && <ellipse cx={P.x} cy={P.y - 24} rx={rxS * 1.2} ry={rxS} fill={TOK.amber} opacity={0.1 + 0.14 * idlePulse(frame)} />}
								<DioramaPlinth id={`${ID}${i}`} cx={P.x} cy={P.y} rx={rxS} />
								<Organ id={ID} name={s.icon} x={P.x} y={P.y - 30 + idleBob(frame, i + 1, 1.2)} s={0.9} frame={frame} />
								<Lines x={P.x} y={P.y + 44} lines={names} size={19} color={s.amber ? TOK.amberInk : TOK.ink} />
							</g>
							{s.label && <Chip2 x={lx} y={ly} text={s.label} color={s.amber ? TOK.amber : theme.accent} textColor={s.amber ? TOK.amberInk : undefined} t={popAt(frame, fps, s.at + 14)} size={17} />}
						</g>
					);
				})}
			</g>
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

