// KangarooDiagram (bio11m3aKangaroo) — one animal, three kinds of adaptation.
//
// A red kangaroo (a stylised side view, not to scale) stands on a stone
// plinth. Callouts land on the narration's beats, each tagged and coloured by
// its category: structural (a body part you can draw), physiological (an
// internal process: the kidney is drawn as a dashed internal organ) or
// behavioural (something the animal does). A leader line joins each callout
// to the part it describes. Optional `sun`: a low sun and a patch of shade for
// the "rests in shade by day" behaviour. All text from props.
//
// Beats are frames after `delay`. Hold: the kangaroo breathes, the newest
// callout's leader shimmers.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Beat, Foot, H, PAL, W, clamp, fadeAt, textWidth} from './shared';

type Part = 'ears' | 'forearm' | 'coat' | 'kidney' | 'lick' | 'shade' | 'legs';
type Kind = 'S' | 'P' | 'B';
export type KangarooProps = {
	callouts: {part: Part; text: string; type: Kind; at: number; side?: 'left' | 'right'}[];
	legendAt?: number;
	sun?: {at: number};
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3roo';
const ease = Easing.inOut(Easing.cubic);
const TYPE = {
	S: {name: 'Structural', color: '#3f6fd8'},
	P: {name: 'Physiological', color: PAL.teal},
	B: {name: 'Behavioural', color: PAL.orange},
} as const;
const OX = 400;
const OY = 440;
const SC = 1.28;
// anchor points in the kangaroo's own coordinates (feet at y = 0)
const ANCHOR: Record<Part, [number, number]> = {
	ears: [52, -262],
	forearm: [62, -140],
	coat: [-2, -176],
	kidney: [-4, -118],
	lick: [70, -150],
	shade: [-60, -110],
	legs: [20, -40],
};

export const KangarooDiagram = ({callouts, legendAt = 0, sun, footer = [], delay = 62}: KangarooProps) => {
	const frame = useCurrentFrame() - delay;
	const breathe = 1 + Math.sin(frame / 22) * 0.012;
	const at = (p: Part) => ({x: OX + ANCHOR[p][0] * SC, y: OY + ANCHOR[p][1] * SC});
	const left = callouts.filter((c, i) => (c.side ?? (i % 2 ? 'right' : 'left')) === 'left');
	const right = callouts.filter((c, i) => (c.side ?? (i % 2 ? 'right' : 'left')) === 'right');
	const slotY = (i: number, n: number) => 100 + i * Math.min(92, 300 / Math.max(1, n - 1 || 1));
	const lastAt = Math.max(...callouts.filter((c) => frame >= c.at).map((c) => c.at), -1);
	const licking = callouts.find((c) => c.part === 'lick');
	const lickT = licking ? fadeAt(frame, licking.at + 20, 20) : 0;

	const Callout = ({c, x, y, align}: {c: KangarooProps['callouts'][number]; x: number; y: number; align: 'left' | 'right'}) => {
		const t = interpolate(frame, [c.at, c.at + 22], [0, 1], {...clamp, easing: ease});
		if (t <= 0) return null;
		const col = TYPE[c.type].color;
		const lines = c.text.split('\n');
		const w = Math.max(...lines.map((l) => textWidth(l, 16))) + 52;
		const h = 22 + lines.length * 20;
		const bx = align === 'left' ? x : x - w;
		const a = at(c.part);
		const ex = align === 'left' ? bx + w : bx;
		const lx = ex + (a.x - ex) * t;
		const ly = y + (a.y - y) * t;
		const newest = c.at === lastAt;
		return (
			<g opacity={Math.min(1, t * 2)}>
				<line x1={ex} y1={y} x2={lx} y2={ly} stroke={col} strokeWidth={2.5} strokeDasharray={newest ? '6 5' : undefined} strokeDashoffset={newest ? -frame * 0.6 : 0} />
				<circle cx={lx} cy={ly} r={5} fill={col} stroke="#fff" strokeWidth={1.5} />
				<rect x={bx} y={y - h / 2} width={w} height={h} rx={12} fill="#fff" stroke={col} strokeWidth={2.2} />
				<circle cx={bx + 20} cy={y} r={12} fill={col} />
				<text x={bx + 20} y={y + 5.5} textAnchor="middle" fontSize={15} fontWeight={800} fill="#fff">
					{c.type}
				</text>
				{lines.map((ln, k) => (
					<text key={k} x={bx + 40} y={y + 6 + (k - (lines.length - 1) / 2) * 20} fontSize={16} fontWeight={700} fill={TOK.ink}>
						{ln}
					</text>
				))}
			</g>
		);
	};

	const body = '#b8653a';
	const belly = '#e6c6a2';
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Red kangaroo adaptations: structural, physiological and behavioural" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<radialGradient id={`${ID}-fur`} cx="40%" cy="30%" r="80%">
					<stop offset="0%" stopColor="#d48a5a" />
					<stop offset="100%" stopColor={body} />
				</radialGradient>
			</defs>
			{/* legend */}
			<g opacity={fadeAt(frame, legendAt)}>
				{(['S', 'P', 'B'] as Kind[]).map((k, i) => (
					<g key={k} transform={`translate(${W / 2 - 240 + i * 170}, 28)`}>
						<circle cx={0} cy={0} r={11} fill={TYPE[k].color} />
						<text x={0} y={5} textAnchor="middle" fontSize={14} fontWeight={800} fill="#fff">
							{k}
						</text>
						<text x={18} y={6} fontSize={17} fontWeight={800} fill={TYPE[k].color}>
							{TYPE[k].name}
						</text>
					</g>
				))}
			</g>
			{sun && (
				<g opacity={fadeAt(frame, sun.at)}>
					<circle cx={690} cy={96} r={26 + idlePulse(frame) * 2} fill="#f6c343" />
					{Array.from({length: 8}, (_, k) => {
						const a = (k / 8) * Math.PI * 2 + frame / 120;
						return <line key={k} x1={690 + Math.cos(a) * 34} y1={96 + Math.sin(a) * 34} x2={690 + Math.cos(a) * 46} y2={96 + Math.sin(a) * 46} stroke="#f6c343" strokeWidth={4} strokeLinecap="round" />;
					})}
				</g>
			)}
			<DioramaPlinth id={`${ID}-p`} cx={OX - 30} cy={OY + 6} rx={200} />
			{sun && <ellipse cx={OX - 60} cy={OY + 2} rx={150} ry={34} fill="rgba(40,50,60,0.22)" opacity={fadeAt(frame, sun.at)} />}
			<g transform={`translate(${OX},${OY}) scale(${SC})`} opacity={fadeAt(frame, 0)}>
				<g transform={`scale(1, ${breathe}) `}>
					{/* tail */}
					<path d="M -20 -92 Q -96 -60 -168 -4 L -156 6 Q -84 -34 -8 -58 Z" fill={`url(#${ID}-fur)`} stroke="rgba(0,0,0,0.25)" />
					{/* hind leg and long foot */}
					<ellipse cx={-10} cy={-66} rx={40} ry={56} fill={`url(#${ID}-fur)`} stroke="rgba(0,0,0,0.25)" transform="rotate(-18 -10 -66)" />
					<path d="M -24 -26 L 74 -8 Q 84 -2 72 4 L -26 4 Z" fill={body} stroke="rgba(0,0,0,0.25)" />
					{/* body */}
					<ellipse cx={12} cy={-140} rx={48} ry={80} fill={`url(#${ID}-fur)`} stroke="rgba(0,0,0,0.25)" transform="rotate(18 12 -140)" />
					<ellipse cx={34} cy={-128} rx={22} ry={52} fill={belly} opacity={0.9} transform="rotate(18 34 -128)" />
					{/* kidney (internal, dashed) */}
					<path d="M -12 -128 q -8 10 0 20 q 10 6 14 -4 q -4 -6 2 -12 q -6 -10 -16 -4 Z" fill="rgba(160,60,60,0.25)" stroke="#9e3a3a" strokeWidth={1.8} strokeDasharray="4 3" />
					{/* forearm with surface blood vessels */}
					<path d="M 42 -176 Q 62 -150 64 -122" stroke={body} strokeWidth={13} strokeLinecap="round" fill="none" />
					<path d="M 44 -170 q 6 6 10 2 q 4 8 8 6 q 0 10 4 14" stroke="#c0392b" strokeWidth={1.6} fill="none" opacity={0.9} />
					<ellipse cx={66} cy={-118} rx={7} ry={5} fill="#7a3f22" />
					{/* head */}
					<path d="M 34 -208 Q 40 -238 62 -238 Q 94 -232 102 -214 Q 96 -206 70 -206 Q 50 -198 34 -208 Z" fill={`url(#${ID}-fur)`} stroke="rgba(0,0,0,0.25)" />
					<ellipse cx={46} cy={-256} rx={8} ry={22} fill={body} stroke="rgba(0,0,0,0.25)" transform="rotate(-18 46 -256)" />
					<ellipse cx={58} cy={-258} rx={8} ry={22} fill={body} stroke="rgba(0,0,0,0.25)" transform="rotate(6 58 -258)" />
					<ellipse cx={58} cy={-256} rx={3.5} ry={14} fill="#e8b494" transform="rotate(6 58 -256)" />
					<circle cx={72} cy={-224} r={3} fill="#222" />
					<circle cx={101} cy={-215} r={2.5} fill="#222" />
					{/* licking: saliva on the forearm */}
					{lickT > 0 && (
						<g opacity={lickT}>
							{[0, 1, 2].map((k) => (
								<circle key={k} cx={58 + k * 3} cy={-160 + k * 12 + ((frame / 2 + k * 7) % 10)} r={2.5} fill={PAL.water} />
							))}
						</g>
					)}
				</g>
			</g>
			{left.map((c, i) => (
				<Callout key={`l${i}`} c={c} x={16} y={slotY(i, left.length)} align="left" />
			))}
			{right.map((c, i) => (
				<Callout key={`r${i}`} c={c} x={W - 16} y={slotY(i, right.length) + 30} align="right" />
			))}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
