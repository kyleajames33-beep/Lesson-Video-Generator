// AufbauStaircaseDiagram — the subshell filling order as a staircase.
// Each step is one subshell, in the order electrons fill them (lowest energy
// first): 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p. An electron hops up the stairs in
// that order; the 4s step sits BELOW 3d, which is the headline surprise.
//
// Fix (v2): the old grid revealed 4d straight after 4p and never showed 5s,
// but 5s fills before 4d. The staircase now carries the exact sequence the
// lesson tells students to memorise.
//
// Diorama restyle: painted stone steps (colour = subshell type s / p / d)
// standing on a grass-and-soil ground strip, a glossy electron that hops step
// to step, and a breathing amber highlight on 4s-before-3d during the hold.
//
// Timing: Chem Y11 M1 L16 formula reveals at the default frame 62 (START).
// The narration lists the sequence roughly 8 to 16 s in and reaches "four s
// fills before three d" at about 17 s.
// Beat plan (frames after START):
//   0     ground + empty steps (dim)
//   150   the electron hops up the steps in filling order, lighting each
//   450   amber highlight on 4s → 3d
//   880   "fill by energy · write by shell number"

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, clamp, fadeAt, shade} from './kinds/restyle-chem-specials/props';

const ID = 'aufbau';
const START = 62;
const W = 760;

const ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p'];
const TYPE_COLOR: Record<string, string> = {s: '#2f9e84', p: '#3f6fd8', d: '#8e5bd6'};
const X0 = 66, STEP_W = 56, DEPTH = 16, GROUND_Y = 440, H0 = 34, DH = 27;
const HOP_START = 150, HOP_EVERY = 26, HIGHLIGHT_AT = 450, CAPTION_AT = 880;

export const AufbauStaircaseDiagram = () => {
	const frame = useCurrentFrame() - START;
	const pulse = idlePulse(frame + START);

	const stepTop = (i: number) => GROUND_Y - (H0 + i * DH);
	const stepX = (i: number) => X0 + i * STEP_W;
	// Electron position: hops (parabolic arc) from step k-1 to step k.
	const hopP = interpolate(frame, [HOP_START, HOP_START + (ORDER.length - 1) * HOP_EVERY], [0, ORDER.length - 1], clamp);
	const k = Math.floor(hopP), f = hopP - k;
	const at = (i: number) => ({x: stepX(i) + STEP_W / 2 + DEPTH / 2, y: stepTop(i) - DEPTH * 0.5 - 12});
	const a = at(k), b = at(Math.min(ORDER.length - 1, k + 1));
	const ex = a.x + (b.x - a.x) * f;
	const ey = a.y + (b.y - a.y) * f - Math.sin(f * Math.PI) * 26 + (hopP >= ORDER.length - 1 ? idleBob(frame, 2, 2) : 0);
	const lit = (i: number) => fadeAt(frame, HOP_START + i * HOP_EVERY - 4, 8);
	const hl = fadeAt(frame, HIGHLIGHT_AT, 16);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Aufbau filling order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{e: '#f0a830'}} />

			{/* ground strip */}
			<g opacity={fadeAt(frame, -START, 16)}>
				<ellipse cx={W / 2 + 10} cy={GROUND_Y + 44} rx={370} ry={20} fill="rgba(58,40,18,0.2)" filter={`url(#${ID}-blur)`} />
				<path d={`M 30 ${GROUND_Y} L ${W - 30} ${GROUND_Y} L ${W - 30} ${GROUND_Y + 30} Q ${W / 2} ${GROUND_Y + 44} 30 ${GROUND_Y + 30} Z`} fill={`url(#${ID}-soil)`} />
				<path d={`M 30 ${GROUND_Y} Q ${W / 2} ${GROUND_Y - 22} ${W - 30} ${GROUND_Y} Q ${W / 2} ${GROUND_Y + 12} 30 ${GROUND_Y} Z`} fill={`url(#${ID}-grass)`} />

				{/* energy axis */}
				<line x1={36} y1={GROUND_Y - 20} x2={36} y2={120} stroke={TOK.inkMute} strokeWidth={3} />
				<path d="M 36 108 l -8 14 l 16 0 Z" fill={TOK.inkMute} />
				<text x={30} y={98} fill={TOK.inkDim} fontSize={18} fontWeight={700}>energy</text>

				{ORDER.map((name, i) => {
					const x = stepX(i), top = stepTop(i), h = GROUND_Y - top;
					const base = TYPE_COLOR[name[1]];
					const on = lit(i);
					const col = on > 0 ? base : '#b9bdb8';
					const face = on > 0 ? base : '#c9ccc6';
					return (
						<g key={name}>
							<path d={`M ${x + STEP_W} ${top} l ${DEPTH} ${-DEPTH * 0.55} l 0 ${h} l ${-DEPTH} ${DEPTH * 0.55} Z`} fill={shade(col, -0.2)} />
							<path d={`M ${x} ${top} l ${DEPTH} ${-DEPTH * 0.55} l ${STEP_W} 0 l ${-DEPTH} ${DEPTH * 0.55} Z`} fill={shade(col, 0.18)} />
							<rect x={x} y={top} width={STEP_W} height={h} fill={face} opacity={0.35 + on * 0.65} />
							<rect x={x + 4} y={top + 5} width={6} height={Math.max(0, h - 10)} rx={3} fill="#ffffff" opacity={0.22} />
							<text x={x + STEP_W / 2} y={top + 26} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={900} opacity={0.55 + on * 0.45}>{name}</text>
						</g>
					);
				})}
			</g>

			{/* 4s before 3d */}
			<g opacity={hl}>
				<rect x={stepX(5) - 4} y={stepTop(5) - DEPTH * 0.55 - 4} width={STEP_W * 2 + DEPTH + 8} height={GROUND_Y - stepTop(5) + DEPTH * 0.55 + 8} rx={8} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} strokeDasharray="8 6" />
				<rect x={stepX(5) - 58} y={stepTop(6) - 104} width={240} height={40} rx={20} fill="#fff8e8" stroke={TOK.amber} strokeWidth={2.5} />
				<text x={stepX(5) + 62} y={stepTop(6) - 77} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>4s is lower: it fills first</text>
			</g>

			{/* hopping electron */}
			{frame >= HOP_START - 10 ? <Ball id={ID} fill="e" edge="#f0a830" x={ex} y={ey} r={10} shadow opacity={fadeAt(frame, HOP_START - 10, 10)} /> : null}

			{/* legend */}
			<g opacity={fadeAt(frame, 20)}>
				{(['s', 'p', 'd'] as const).map((t, i) => (
					<g key={t}>
						<rect x={96 + i * 140} y={36} width={22} height={22} rx={4} fill={TYPE_COLOR[t]} />
						<text x={126 + i * 140} y={54} fill={TOK.inkDim} fontSize={19} fontWeight={700}>{t} subshell</text>
					</g>
				))}
			</g>

			<text x={W / 2} y={514} textAnchor="middle" fill={TOK.chem1} fontSize={22} fontWeight={800} opacity={fadeAt(frame, CAPTION_AT, 16)}>
				fill by energy · write by shell number
			</text>
		</svg>
	);
};
