// LeafHRDiagram (bio12m7LeafHR) — the hypersensitive response, cell by cell.
//
// A patch of leaf tissue (a grid of plant cells with chloroplasts) lies on a
// stone slab. A fungal hypha breaks in at the centre. In order:
//  1 detect   R-proteins in the infected cell detect the pathogen
//  2 ROS      a burst of reactive oxygen species radiates out
//  3 die      the infected and surrounding cells die: a necrotic lesion
//  4 seal     surviving neighbours thicken their walls (callose, lignin)
//  5 starve   the pathogen needs living cells; it is contained
// Step chips at the bottom light the current step. All text from props.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, textWidth, wrap} from './shared';

type Beats = {cells: number; invade: number; detect: number; ros: number; die: number; seal: number; starve: number; contained: number};
export type LeafHRProps = {
	title?: string;
	steps?: string[];
	notes?: {text: string; at: number; amber?: boolean}[];
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7hr';
const ease = Easing.inOut(Easing.cubic);
const COLS = 9;
const ROWS = 5;

export const LeafHRDiagram = ({title, steps = ['Detect', 'ROS burst', 'Cells die', 'Seal off'], notes = [], beats, delay = 62}: LeafHRProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({cells: 0, invade: 60, detect: 200, ros: 350, die: 500, seal: 650, starve: 800, contained: 950}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const cw = 74;
	const ch = 62;
	const gx = W / 2 - (COLS * cw) / 2;
	const gy = top + 90;
	const mid = {c: 4, r: 2};
	const ctr = {x: gx + (mid.c + 0.5) * cw, y: gy + (mid.r + 0.5) * ch};
	const dist = (c: number, r: number) => Math.max(Math.abs(c - mid.c), Math.abs(r - mid.r));
	const invade = interpolate(frame, [b.invade, b.invade + 60], [0, 1], {...clamp, easing: ease});
	const ros = interpolate(frame, [b.ros, b.ros + 50], [0, 1], clamp);
	const die = (d: number) => interpolate(frame, [b.die + d * 26, b.die + d * 26 + 40], [0, 1], {...clamp, easing: ease});
	const seal = interpolate(frame, [b.seal, b.seal + 40], [0, 1], clamp);
	const starve = interpolate(frame, [b.starve, b.starve + 80], [0, 1], clamp);
	const cur = [b.detect, b.ros, b.die, b.seal].reduce((acc, at, i) => (frame >= at ? i : acc), -1);
	const chipW = (i: number) => textWidth(`${i + 1} ${steps[i]}`, 16) + 22;
	const total = steps.reduce((sum, _, k) => sum + chipW(k), 0) + (steps.length - 1) * 10;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'The hypersensitive response'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<defs>
				<linearGradient id={`${ID}-slab`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#e4e1db" />
					<stop offset="100%" stopColor="#a9a59d" />
				</linearGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* stone slab */}
			<rect x={gx - 18} y={gy + ROWS * ch + 6} width={COLS * cw + 36} height={18} rx={5} fill={`url(#${ID}-slab)`} opacity={fadeAt(frame, 0, 14)} />
			<rect x={gx - 12} y={gy - 12} width={COLS * cw + 24} height={ROWS * ch + 20} rx={14} fill="#6f9a45" opacity={fadeAt(frame, 0, 14)} />
			{/* cells */}
			{Array.from({length: COLS * ROWS}, (_, k) => {
				const c = k % COLS;
				const r = Math.floor(k / COLS);
				const d = dist(c, r);
				const dead = d <= 1 ? die(d) : 0;
				const sealed = d === 2 ? seal : 0;
				const x = gx + c * cw;
				const y = gy + r * ch;
				const green = '#9ccc6a';
				const brown = '#8a6a3a';
				return (
					<g key={k} opacity={fadeAt(frame, b.cells + (c + r) * 2, 10)}>
						<rect x={x + 3} y={y + 3} width={cw - 6} height={ch - 6} rx={9} fill={dead > 0 ? brown : green} fillOpacity={dead > 0 ? 0.35 + 0.65 * dead : 1} stroke={sealed > 0 ? '#3a4a1a' : '#4f7a2a'} strokeWidth={2 + sealed * 4} />
						{dead < 1 &&
							[0, 1, 2].map((q) => (
								<ellipse key={q} cx={x + 16 + q * 18} cy={y + ch / 2 + Math.sin(frame / 30 + k + q) * 1.5} rx={6} ry={4} fill={`url(#${ID}-ball-plant)`} opacity={1 - dead} />
							))}
						{dead > 0 && <path d={`M ${x + 12} ${y + 14} L ${x + cw - 14} ${y + ch - 14} M ${x + cw - 14} ${y + 14} L ${x + 12} ${y + ch - 14}`} stroke="#5a3f28" strokeWidth={1.5} opacity={0.5 * dead} />}
					</g>
				);
			})}
			{/* hypha breaking in */}
			<g opacity={invade * (1 - starve * 0.75)}>
				<path d={`M ${ctr.x + 150} ${gy - 40} Q ${ctr.x + 60} ${gy - 20} ${ctr.x + 60 - 60 * invade} ${ctr.y - 10 * invade}`} fill="none" stroke={PAL.fungus} strokeWidth={6} strokeLinecap="round" />
				<circle cx={ctr.x + 60 - 60 * invade} cy={ctr.y - 10 * invade} r={7} fill={`url(#${ID}-ball-fungus)`} />
			</g>
			{/* R-protein detection */}
			{frame >= b.detect && (
				<circle cx={ctr.x} cy={ctr.y} r={24 + pulse * 4} fill="none" stroke={TOK.amber} strokeWidth={3} opacity={fadeAt(frame, b.detect) * (1 - fadeAt(frame, b.die, 20))} />
			)}
			{/* ROS burst */}
			{ros > 0 && ros < 1 &&
				Array.from({length: 16}, (_, k) => {
					const a = (k / 16) * Math.PI * 2;
					const d = 20 + ros * 120;
					return <circle key={k} cx={ctr.x + Math.cos(a) * d} cy={ctr.y + Math.sin(a) * d * 0.72} r={5} fill="#e0603a" opacity={1 - ros} />;
				})}
			{frame >= b.ros + 50 && frame < b.die + 60 &&
				Array.from({length: 10}, (_, k) => {
					const t = ((frame - b.ros + k * 8) % 50) / 50;
					const a = (k / 10) * Math.PI * 2;
					return <circle key={k} cx={ctr.x + Math.cos(a) * (20 + t * 90)} cy={ctr.y + Math.sin(a) * (20 + t * 60)} r={3.5} fill="#e0603a" opacity={(1 - t) * 0.8} />;
				})}
			{/* lesion ring */}
			{frame >= b.die + 60 && <ellipse cx={ctr.x} cy={ctr.y} rx={cw * 1.6} ry={ch * 1.6} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="6 5" opacity={fadeAt(frame, b.die + 60) * (0.6 + 0.4 * pulse)} />}
			{/* notes */}
			{(() => {
				const n = [...notes].reverse().find((x) => frame >= x.at);
				if (!n) return null;
				return <Lines x={W / 2} y={top + 42} lines={wrap(n.text, 64)} size={19} color={n.amber ? TOK.amberInk : TOK.ink} opacity={fadeAt(frame, n.at, 10)} />;
			})()}
			{/* step chips */}
			{steps.map((s, i) => {
				let x = W / 2 - total / 2;
				for (let k = 0; k < i; k++) x += chipW(k) + 10;
				const on = cur === i;
				return (
					<g key={i} opacity={fadeAt(frame, [b.detect, b.ros, b.die, b.seal][i] - 6)}>
						<rect x={x} y={H - 50} width={chipW(i)} height={34} rx={17} fill={on ? '#fff6e6' : '#ffffff'} stroke={on ? TOK.amber : theme.accent} strokeWidth={on ? 2.5 + pulse : 1.5} />
						<text x={x + chipW(i) / 2} y={H - 27} textAnchor="middle" fill={on ? TOK.amberInk : theme.accent} fontSize={16} fontWeight={800}>{`${i + 1} ${s}`}</text>
					</g>
				);
			})}
		</svg>
	);
};
