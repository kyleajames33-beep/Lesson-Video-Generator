// TargetBoardsDiagram (kind: chem11m2Targets): reliable is not the same as
// valid or accurate.
//
// Archery targets on easels, each on its own plinth. The bullseye is the true
// value; each dart is one repeat trial. Darts land one at a time. A tight group
// means the repeats agree (reliable); a group on the bullseye means accurate.
// The trap board has a tight group far from the centre: perfectly repeatable,
// and wrong every time, which is what a flawed (invalid) method produces.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {LANE, TrapLine, clamp} from './parts';

type Board = {title: string; sub?: string; spread: number; offset: [number, number]; beat: number; trapSub?: string};

export type TargetBoardsProps = {
	boards?: Board[];
	header?: {text: string; beat: number};
	trap?: {text: string; beat: number; board: number};
	delay?: number;
};

const ID = 'c11m2tgt';
const W = 760;
const VB_H = 520;
const R = 100;
const CY = 208;
const PY = 380;
// Fixed dart scatter pattern (unit offsets), so boards differ only by spread/offset.
const PATTERN: [number, number][] = [[0.1, -0.3], [-0.5, 0.2], [0.6, 0.35], [-0.15, 0.7], [0.45, -0.75]];

export const TargetBoardsDiagram = ({
	boards = [
		{title: 'RELIABLE', sub: 'repeats agree', spread: 11, offset: [46, -44], beat: 60},
		{title: 'RELIABLE + ACCURATE', sub: 'on the true value', spread: 11, offset: [0, 0], beat: 200},
	],
	header,
	trap,
	delay = 62,
}: TargetBoardsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const xs = boards.length === 2 ? [196, 564] : boards.map((_, i) => 130 + (i * 500) / Math.max(1, boards.length - 1));

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label="Targets: a tight group means reliable; a group on the bullseye means accurate" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{header && (
				<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800} opacity={fade(header.beat) * (trap ? 1 - fade(trap.beat - 10) : 1)}>{header.text}</text>
			)}
			{boards.map((b, i) => {
				const cx = xs[i];
				const isTrap = trap?.board === i && frame >= trap.beat;
				return (
					<g key={i} opacity={fade(b.beat - 30, 16)}>
						<DioramaPlinth id={ID} cx={cx} cy={PY} rx={130} />
						{/* easel legs */}
						<path d={`M ${cx - 60} ${PY + 4} L ${cx - 20} ${CY + 40} M ${cx + 60} ${PY + 4} L ${cx + 20} ${CY + 40} M ${cx} ${PY - 14} L ${cx} ${CY + 60}`} stroke={LANE.woodDark} strokeWidth={8} strokeLinecap="round" />
						{/* board */}
						<circle cx={cx + 4} cy={CY + 5} r={R + 6} fill="rgba(40,30,10,0.22)" />
						<circle cx={cx} cy={CY} r={R + 6} fill={LANE.wood} stroke={LANE.woodDark} strokeWidth={3} />
						{['#f7f5ef', '#3f6fd8', '#e0433a', '#f2c230'].map((c, k) => (
							<circle key={k} cx={cx} cy={CY} r={R * (1 - k * 0.24)} fill={c} stroke="rgba(0,0,0,0.15)" strokeWidth={1.2} />
						))}
						<circle cx={cx} cy={CY} r={5} fill="#7a5418" />
						{isTrap && <circle cx={cx + b.offset[0]} cy={CY + b.offset[1]} r={b.spread * 2.6 + 6 + pulse * 3} fill="none" stroke={TOK.amber} strokeWidth={4} />}
						{/* darts */}
						{PATTERN.map(([ux, uy], k) => {
							const hx = cx + b.offset[0] + ux * b.spread * 2;
							const hy = CY + b.offset[1] + uy * b.spread * 2;
							const t = spring({frame: frame - b.beat - k * 12, fps, config: {damping: 18, stiffness: 220}});
							const s = Math.max(0, Math.min(1, t));
							const fx = hx + (1 - s) * 260, fy = hy - (1 - s) * 120;
							return (
								<g key={k} opacity={s > 0.02 ? 1 : 0}>
									<line x1={fx} y1={fy} x2={fx + 34} y2={fy - 22} stroke="#3b3b3b" strokeWidth={4} strokeLinecap="round" />
									<path d={`M ${fx + 28} ${fy - 18} l 14 -2 l -6 -8 Z M ${fx + 26} ${fy - 20} l 6 -14 l 4 8 Z`} fill={LANE.given} />
									<circle cx={fx} cy={fy} r={3.5} fill="#1a1a1a" />
								</g>
							);
						})}
						<text x={cx} y={PY + 96} textAnchor="middle" fill={isTrap ? TOK.amberInk : TOK.ink} fontSize={21} fontWeight={900} letterSpacing="0.04em" opacity={fade(b.beat + 40)}>{b.title}</text>
						<text x={cx} y={PY + 122} textAnchor="middle" fill={isTrap ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fade(b.beat + 40)}>{isTrap && b.trapSub ? b.trapSub : b.sub}</text>
					</g>
				);
			})}
			{trap && <TrapLine x={W / 2} y={34} text={trap.text} opacity={fade(trap.beat, 14)} pulse={pulse} />}
		</svg>
	);
};
