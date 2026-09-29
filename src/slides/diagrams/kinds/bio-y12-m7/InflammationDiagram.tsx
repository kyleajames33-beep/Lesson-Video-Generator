// InflammationDiagram (bio12m7Inflammation) — a cut-away block of tissue on a
// stone ledge: skin on top, a capillary with blood flowing through it, a mast
// cell and a pain-receptor nerve ending.
//
// Beats (each optional, in narration order):
//   enter     bacteria get in through a break in the skin
//   histamine the mast cell releases histamine (purple dots)
//   dilate    the capillary widens and blood flow rises: redness and heat
//   leak      the capillary wall becomes leaky; plasma seeps out: swelling
//   recruit   neutrophils squeeze out and follow the chemokine gradient
//   engulf    they engulf the bacteria (phagocytosis)
//   pain      prostaglandins and bradykinin stimulate the nerve ending
// Labels are placed at fixed anchors (breach, mast, vessel, tissue, nerve,
// neutrophil) on their own beats. All text from props.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, shade, wrap} from './shared';
import {Icon} from './icons';

type Beats = {enter: number; histamine: number; dilate: number; leak: number; recruit: number; engulf: number; pain: number};
type Anchor = 'breach' | 'mast' | 'vessel' | 'tissue' | 'nerve' | 'neutrophil' | 'bottom';
export type InflammationProps = {
	title?: string;
	labels?: {text: string; at: number; anchor: Anchor; amber?: boolean; until?: number}[];
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7inf';
const ease = Easing.inOut(Easing.cubic);
const X0 = 40;
const X1 = 720;
const SKIN = 150; // skin top
const DERM = 186; // dermis top
const BASE = 400; // block bottom
const VY = 334; // capillary centre
const BREACH = 520;

export const InflammationDiagram = ({title, labels = [], beats, delay = 62}: InflammationProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({enter: 20, histamine: 200, dilate: 320, leak: 450, recruit: 600, engulf: 800, pain: 900}, beats);
	const off = title ? 20 : 0;
	const pulse = idlePulse(frame);
	const dil = interpolate(frame, [b.dilate, b.dilate + 50], [0, 1], {...clamp, easing: ease});
	const leak = interpolate(frame, [b.leak, b.leak + 60], [0, 1], {...clamp, easing: ease});
	const swell = leak * 16;
	const vr = 20 + 12 * dil;
	const enter = interpolate(frame, [b.enter, b.enter + 60], [0, 1], {...clamp, easing: ease});
	const engulf = interpolate(frame, [b.engulf, b.engulf + 40], [0, 1], clamp);
	const bact = [
		{x: BREACH - 20, y: 236},
		{x: BREACH + 30, y: 252},
		{x: BREACH + 4, y: 276},
	];
	const mast = {x: 230, y: 250};
	const nerve = {x: 650, y: 236};
	// skin top edge with swelling bulge around the breach
	const skinPath = (dy: number) => {
		const pts: string[] = [];
		for (let i = 0; i <= 40; i++) {
			const x = X0 + ((X1 - X0) * i) / 40;
			const bump = swell * Math.exp(-((x - BREACH) ** 2) / (2 * 150 ** 2));
			pts.push(`${i ? 'L' : 'M'} ${x} ${SKIN + off - bump + dy}`);
		}
		return pts.join(' ');
	};
	// label slots sit outside the block (top band / bottom band) with a leader to the anchor
	const labelPos: Record<Anchor, {x: number; y: number; ax: number; ay: number; below?: boolean}> = {
		mast: {x: 150, y: 40, ax: mast.x, ay: mast.y + off - 28},
		tissue: {x: 380, y: 40, ax: 380, ay: DERM + off + 24},
		breach: {x: 612, y: 40, ax: BREACH, ay: SKIN + off - 6},
		nerve: {x: 612, y: 40, ax: nerve.x, ay: nerve.y + off - 18},
		vessel: {x: 190, y: 452, ax: 190, ay: VY + off + vr, below: true},
		neutrophil: {x: 560, y: 452, ax: BREACH - 40, ay: VY + off - vr, below: true},
		bottom: {x: W / 2, y: H - 10, ax: 0, ay: 0},
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Inflammation'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<defs>
				<linearGradient id={`${ID}-derm`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#f7ddd2" />
					<stop offset="100%" stopColor="#efc9bb" />
				</linearGradient>
				<radialGradient id={`${ID}-red`} cx="0.62" cy="0.45" r="0.55">
					<stop offset="0%" stopColor="#e0433a" stopOpacity={0.4} />
					<stop offset="100%" stopColor="#e0433a" stopOpacity={0} />
				</radialGradient>
				<linearGradient id={`${ID}-vessel`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#e76a5e" />
					<stop offset="50%" stopColor="#c8433a" />
					<stop offset="100%" stopColor="#9a2a22" />
				</linearGradient>
				<linearGradient id={`${ID}-ledge`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#e4e1db" />
					<stop offset="100%" stopColor="#a9a59d" />
				</linearGradient>
				<clipPath id={`${ID}-clip`}>
					<path d={`${skinPath(0)} L ${X1} ${BASE + off} L ${X0} ${BASE + off} Z`} />
				</clipPath>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* stone ledge */}
			<rect x={X0 - 16} y={BASE + off} width={X1 - X0 + 32} height={20} rx={5} fill={`url(#${ID}-ledge)`} />
			<ellipse cx={W / 2} cy={BASE + off + 30} rx={(X1 - X0) / 2 + 20} ry={10} fill="rgba(40,36,30,0.18)" />
			{/* tissue block */}
			<g clipPath={`url(#${ID}-clip)`}>
				<rect x={X0} y={0} width={X1 - X0} height={BASE + off} fill={`url(#${ID}-derm)`} />
				<rect x={X0} y={0} width={X1 - X0} height={BASE + off} fill={`url(#${ID}-red)`} opacity={dil * (0.85 + 0.15 * pulse)} />
				{/* skin layers */}
				<path d={`${skinPath(0)} L ${X1} ${DERM + off} L ${X0} ${DERM + off} Z`} fill="#e9b89c" />
				<path d={skinPath(9)} fill="none" stroke="#d9a080" strokeWidth={2} />
				<path d={skinPath(20)} fill="none" stroke="#d9a080" strokeWidth={1.5} opacity={0.6} />
				{/* plasma seeping out */}
				{leak > 0 &&
					Array.from({length: 16}, (_, k) => {
						const t = ((frame - b.leak + k * 11) % 90) / 90;
						const x = 120 + ((k * 43) % 520);
						return <circle key={k} cx={x + Math.sin(k) * 6} cy={VY + off - vr - 4 - t * 70 * (k % 2 ? 1 : 0.6)} r={4} fill="#a9d6f0" opacity={leak * (1 - t) * 0.9} />;
					})}
				{/* capillary */}
				<rect x={X0} y={VY + off - vr} width={X1 - X0} height={vr * 2} fill={`url(#${ID}-vessel)`} />
				<line x1={X0} y1={VY + off - vr} x2={X1} y2={VY + off - vr} stroke="#8a2a22" strokeWidth={3} strokeDasharray={leak > 0 ? `${40 - 26 * leak} ${4 + 14 * leak}` : undefined} />
				<line x1={X0} y1={VY + off + vr} x2={X1} y2={VY + off + vr} stroke="#8a2a22" strokeWidth={3} />
				{Array.from({length: 12}, (_, k) => {
					const speed = 1.4 + 1.6 * dil;
					const x = X0 + ((k * 62 + frame * speed) % (X1 - X0 + 40)) - 20;
					return <ellipse key={k} cx={x} cy={VY + off + ((k % 3) - 1) * vr * 0.45} rx={11} ry={7} fill={`url(#${ID}-ball-blood)`} opacity={0.9} />;
				})}
			</g>
			{/* heat shimmer above the skin */}
			{dil > 0 &&
				[-120, -40, 40, 120].map((dx, i) => {
					const y0 = SKIN + off - 22 - ((frame * 0.8 + i * 9) % 24);
					return <path key={i} d={`M ${BREACH + dx} ${y0 + 20} q 7 -7 0 -14 q -7 -7 0 -14`} fill="none" stroke={TOK.amber} strokeWidth={3} strokeLinecap="round" opacity={dil * 0.9} />;
				})}
			{/* breach in the skin */}
			<path d={`M ${BREACH - 16} ${SKIN + off - 2} L ${BREACH} ${DERM + off + 4} L ${BREACH + 16} ${SKIN + off - 2}`} fill="#b8584a" stroke="#8a3a2a" strokeWidth={2} opacity={fadeAt(frame, Math.max(0, b.enter - 20))} />
			{/* nerve ending */}
			<g>
				<path d={`M ${X1 - 10} ${BASE + off - 20} C ${nerve.x + 60} ${BASE + off - 60} ${nerve.x + 20} ${nerve.y + off + 60} ${nerve.x} ${nerve.y + off}`} fill="none" stroke="#e0c040" strokeWidth={4} />
				{[[-14, -10], [0, -16], [14, -10]].map(([dx, dy], k) => <line key={k} x1={nerve.x} y1={nerve.y + off} x2={nerve.x + dx} y2={nerve.y + off + dy} stroke="#e0c040" strokeWidth={3} strokeLinecap="round" />)}
				{frame >= b.pain &&
					[0, 1, 2].map((k) => {
						const t = ((frame - b.pain + k * 12) % 36) / 36;
						return <path key={k} d={`M ${nerve.x - 8 + k * 8} ${nerve.y + off - 22 - t * 16} l 4 -6 l -6 0 l 4 -6`} stroke={TOK.amber} strokeWidth={2.5} fill="none" opacity={1 - t} />;
					})}
			</g>
			{/* mast cell and histamine */}
			<Icon id={ID} name="mast" x={mast.x} y={mast.y + off + idleBob(frame, 2, 1)} s={0.9} frame={frame} />
			{frame >= b.histamine &&
				Array.from({length: 10}, (_, k) => {
					const t = ((frame - b.histamine + k * 9) % 70) / 70;
					const a = -0.2 + (k / 10) * 1.6;
					return <circle key={k} cx={mast.x + Math.cos(a) * (26 + 110 * t)} cy={mast.y + off + Math.sin(a) * (26 + 60 * t)} r={3.6} fill={PAL.granule} opacity={(1 - t) * 0.85} />;
				})}
			{/* bacteria */}
			{bact.map((p, k) => {
				const x = p.x;
				const y = SKIN + off - 40 + (p.y + off - SKIN - off + 40) * enter;
				return <Icon key={k} id={ID} name="bacterium" x={x + idleBob(frame, k, 1.5)} y={y} s={0.38} frame={frame} opacity={fadeAt(frame, b.enter - 10) * (1 - engulf * 0.9)} />;
			})}
			{/* neutrophils leave the vessel and follow the gradient */}
			{frame >= b.recruit &&
				[0, 1, 2].map((k) => {
					const t = interpolate(frame, [b.recruit + k * 20, b.recruit + k * 20 + 90], [0, 1], {...clamp, easing: ease});
					const sx = BREACH - 160 + k * 70;
					const sy = VY + off;
					const tx = bact[k].x + 14;
					const ty = bact[k].y + off + 14;
					return <Icon key={k} id={ID} name="neutrophil" x={sx + (tx - sx) * t} y={sy + (ty - sy) * t + idleBob(frame, k + 6, 1.2) * t} s={0.55} frame={frame} />;
				})}
			{frame >= b.recruit &&
				Array.from({length: 14}, (_, k) => {
					const r = 16 + k * 9;
					const a = k * 2.3;
					return <circle key={k} cx={BREACH + 4 + Math.cos(a) * r} cy={240 + off + Math.sin(a) * r * 0.6} r={2.4} fill={theme.accent} opacity={(0.55 - k * 0.03) * fadeAt(frame, b.recruit)} />;
				})}
			{/* labels */}
			{labels.map((l, i) => {
				const p = labelPos[l.anchor];
				const o = fadeAt(frame, l.at) * (l.until !== undefined ? 1 - fadeAt(frame, l.until, 10) : 1);
				if (o <= 0) return null;
				const isBottom = l.anchor === 'bottom';
				const lines = wrap(l.text, isBottom ? 70 : 24);
				const color = l.amber ? TOK.amberInk : isBottom ? TOK.ink : shade(theme.accent, -0.1);
				const ly = isBottom ? p.y - (lines.length - 1) * 22 : p.below ? p.y : p.y + (2 - lines.length) * 9;
				const lastY = ly + (lines.length - 1) * 17 * 1.2;
				return (
					<g key={i} opacity={o}>
						{!isBottom && <line x1={p.x} y1={p.below ? ly - 18 : lastY + 6} x2={p.ax} y2={p.ay} stroke={color} strokeWidth={1.5} strokeDasharray="3 3" />}
						{!isBottom && <circle cx={p.ax} cy={p.ay} r={3.5} fill={color} />}
						<Lines x={p.x} y={ly} lines={lines} size={isBottom ? 18 : 17} color={color} anchor="middle" />
					</g>
				);
			})}
		</svg>
	);
};
