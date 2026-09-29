// SweepDiagram (bio11m3aSweep) — a pressure sweeps through a population and
// selects variation that was already there.
//
// A population (rabbits, weeds, bacteria or fish) stands on a stone plinth.
// A few individuals already carry the favoured allele: they get an amber ring
// on the `marked` beat, BEFORE the pressure arrives (selection, not creation).
// On the `pressure` beat a haze (virus, spray or antibiotic) sweeps across and
// every unmarked individual falls, except `lucky` ones the pressure happens
// to miss. On `reproduce` the survivors' offspring fill the emptied places:
// offspring of a marked parent carry the ring too, so the next generation is
// mostly resistant. Survivor and ring counts are counted from the drawing.
//
// Beats are frames after `delay`. Hold: the population jostles, rings breathe.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, PAL, Tag, W, clamp, fadeAt, hash01, popAt, shade} from './shared';

type Org = 'rabbit' | 'weed' | 'bacterium' | 'fish';
export type SweepProps = {
	organism: Org;
	pressure: {label: string; kind: 'virus' | 'spray' | 'drug'};
	/** slot indices (0..14) that carry the favoured allele from the start */
	resistant?: number[];
	lucky?: number[];
	ringLabel?: string;
	afterLabel?: string;
	beats: {pop: number; marked: number; pressure: number; reproduce: number};
	stages?: [string, string, string];
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3sweep';
const ease = Easing.inOut(Easing.cubic);
const COLS = 5;
const ROWS = 3;

const Creature = ({kind, x, y, s, dead}: {kind: Org; x: number; y: number; s: number; dead: number}) => {
	const tilt = kind === 'bacterium' || kind === 'fish' ? dead * 70 : 0;
	const grey = (c: string) => (dead > 0.5 ? shade('#9a948a', 0) : c);
	if (kind === 'rabbit')
		return (
			<g transform={`translate(${x},${y}) rotate(${tilt}) scale(${s})`}>
				<g opacity={1 - dead * 0.45} transform={`translate(0, ${dead * 8}) scale(1, ${1 - dead * 0.35})`}>
				<ellipse cx={0} cy={10} rx={22} ry={16} fill={grey('#a58b73')} stroke="rgba(0,0,0,0.25)" />
				<circle cx={-20} cy={14} r={6} fill="#f1ece4" />
				<circle cx={18} cy={-4} r={12} fill={grey('#a58b73')} stroke="rgba(0,0,0,0.25)" />
				<ellipse cx={14} cy={-26} rx={4.5} ry={14} fill={grey('#9a7f67')} transform="rotate(-12 14 -26)" />
				<ellipse cx={22} cy={-26} rx={4.5} ry={14} fill={grey('#9a7f67')} transform="rotate(10 22 -26)" />
				<circle cx={23} cy={-6} r={2} fill="#222" />
				</g>
			</g>
		);
	if (kind === 'weed')
		return (
			<g transform={`translate(${x},${y + 18}) scale(${s})`}>
				<path d={`M 0 0 Q ${2 + dead * 10} -22 ${dead * 22} ${-40 + dead * 22}`} stroke={dead > 0.5 ? '#8a6a4a' : '#3f7d2c'} strokeWidth={3} fill="none" />
				{[-12, -24, -34].map((yy, k) => (
					<g key={k}>
						<ellipse cx={-9 + dead * k * 4} cy={yy + dead * 10} rx={10} ry={4} fill={dead > 0.5 ? '#a8865a' : '#5f9e3a'} transform={`rotate(${-30 + dead * 40} ${-9} ${yy})`} />
						<ellipse cx={9 + dead * k * 4} cy={yy - 4 + dead * 10} rx={10} ry={4} fill={dead > 0.5 ? '#a8865a' : '#6fb04a'} transform={`rotate(${30 + dead * 30} 9 ${yy - 4})`} />
					</g>
				))}
			</g>
		);
	if (kind === 'fish')
		return (
			<g transform={`translate(${x},${y}) rotate(${tilt * 2.4}) scale(${s})`}>
				<ellipse cx={0} cy={0} rx={22} ry={10} fill={grey('#6f93b8')} stroke="rgba(0,0,0,0.25)" />
				<path d="M -20 0 L -32 -10 L -32 10 Z" fill={grey('#5f82a6')} />
				<circle cx={13} cy={-2} r={2} fill="#222" />
			</g>
		);
	return (
		<g transform={`translate(${x},${y}) rotate(${-20 + tilt}) scale(${s})`}>
			<rect x={-20} y={-9} width={40} height={18} rx={9} fill={grey(PAL.green)} stroke="rgba(0,0,0,0.25)" />
			<path d="M 20 0 Q 28 -6 34 0" stroke={grey('#3f7d2c')} strokeWidth={2} fill="none" />
		</g>
	);
};

const Haze = ({kind, x, y, w, h, t, frame}: {kind: 'virus' | 'spray' | 'drug'; x: number; y: number; w: number; h: number; t: number; frame: number}) => {
	const col = kind === 'virus' ? '#c2527a' : kind === 'spray' ? '#8fbf3a' : '#e0843a';
	return (
		<g opacity={t}>
			{Array.from({length: 26}, (_, k) => {
				const px = x + ((k * 53) % 100) / 100 * w + Math.sin(frame / 11 + k) * 8;
				const py = y + ((frame * 1.6 + hash01(k) * h) % h);
				return kind === 'virus' ? (
					<g key={k} transform={`translate(${px},${py})`}>
						<circle r={5} fill={col} opacity={0.75} />
						{[0, 60, 120, 180, 240, 300].map((a) => (
							<line key={a} x1={0} y1={0} x2={Math.cos((a * Math.PI) / 180) * 8} y2={Math.sin((a * Math.PI) / 180) * 8} stroke={col} strokeWidth={1.4} opacity={0.75} />
						))}
					</g>
				) : (
					<circle key={k} cx={px} cy={py} r={kind === 'spray' ? 3.5 : 4.5} fill={col} opacity={0.6} />
				);
			})}
		</g>
	);
};

export const SweepDiagram = ({organism, pressure, resistant = [3, 11], lucky = [], ringLabel = 'resistance allele already present', afterLabel = 'next generation: mostly resistant', beats, stages, footer = [], delay = 62}: SweepProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = stages ? 64 : 24;
	const cx = W / 2;
	const cy = top + 250;
	const rx = 300;
	const ry = rx * 0.34;
	const N = COLS * ROWS;
	const slots = Array.from({length: N}, (_, k) => {
		const r = Math.floor(k / COLS);
		const c = k % COLS;
		const fy = -0.62 + (1.24 * r) / (ROWS - 1);
		const halfW = rx * 0.78 * Math.sqrt(1 - fy * fy * 0.5);
		return {x: cx + (-1 + (2 * c) / (COLS - 1)) * halfW * 0.9 + (r % 2 ? 26 : -10), y: cy + fy * ry - 26};
	});
	const survivors = [...resistant, ...lucky];
	const nearest = (k: number) =>
		survivors.reduce((best, sIdx) => (Math.hypot(slots[sIdx].x - slots[k].x, slots[sIdx].y - slots[k].y) < Math.hypot(slots[best].x - slots[k].x, slots[best].y - slots[k].y) ? sIdx : best), survivors[0]);
	const hazeT = fadeAt(frame, beats.pressure, 12) * (1 - fadeAt(frame, beats.pressure + 90, 24));
	const kill = interpolate(frame, [beats.pressure + 30, beats.pressure + 80], [0, 1], {...clamp, easing: ease});
	const goneT = interpolate(frame, [beats.reproduce - 20, beats.reproduce + 4], [0, 1], clamp);
	const ringOn = fadeAt(frame, beats.marked, 16);
	const pulse = idlePulse(frame);
	const s = organism === 'weed' ? 1.05 : 0.95;
	const ringR = organism === 'weed' ? 30 : 30;
	const ringDy = organism === 'weed' ? 0 : 4;

	const stageIdx = frame >= beats.reproduce ? 2 : frame >= beats.pressure ? 1 : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${pressure.label} selects pre-existing resistance`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{stages?.map((st, i) => (
				<Tag key={i} x={W / 2 + (i - 1) * 240} y={30} text={st} size={17} color={i === stageIdx ? theme.accent : TOK.inkDim} fill={i === stageIdx ? '#eef5fc' : '#ffffff'} strokeW={i === stageIdx ? 3 : 2} opacity={fadeAt(frame, i === 0 ? beats.pop : i === 1 ? beats.pressure : beats.reproduce)} />
			))}
			<DioramaPlinth id={`${ID}-p`} cx={cx} cy={cy} rx={rx} />
			{slots.map((sl, k) => {
				const isRes = resistant.includes(k);
				const lives = survivors.includes(k);
				const born = popAt(frame, fps, beats.pop + (k % 5) * 3);
				const dead = lives ? 0 : kill;
				const fadeDead = lives ? 1 : 1 - goneT;
				const bob = idleBob(frame, k, 1.3);
				// offspring in emptied slots
				const parent = nearest(k);
				const childT = lives ? 0 : popAt(frame, fps, beats.reproduce + ((k * 4) % N) * 5);
				const childRes = resistant.includes(parent);
				return (
					<g key={k}>
						{fadeDead > 0.01 && (
							<g opacity={Math.min(1, born) * fadeDead}>
								{isRes && <ellipse cx={sl.x} cy={sl.y + ringDy} rx={ringR} ry={ringR * 0.8} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} opacity={ringOn} />}
								<Creature kind={organism} x={sl.x} y={sl.y + (dead ? 0 : bob)} s={s * Math.min(1.05, born)} dead={dead} />
							</g>
						)}
						{childT > 0.01 && (
							<g opacity={Math.min(1, childT)}>
								{childRes && <ellipse cx={sl.x} cy={sl.y + ringDy} rx={ringR} ry={ringR * 0.8} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} />}
								<Creature kind={organism} x={sl.x} y={sl.y + bob} s={s * Math.min(1.05, childT)} dead={0} />
							</g>
						)}
					</g>
				);
			})}
			<Haze kind={pressure.kind} x={cx - rx * 0.9} y={top + 60} w={rx * 1.8} h={cy - top - 30} t={hazeT} frame={frame} />
			<g opacity={fadeAt(frame, beats.pressure) * (1 - fadeAt(frame, beats.reproduce + 50, 10))}>
				<Tag x={cx} y={cy + ry + 86} text={pressure.label} color={PAL.stop} size={18} />
			</g>
			<g opacity={ringOn * (1 - fadeAt(frame, beats.pressure, 10))}>
				<Tag x={cx} y={cy + ry + 86} text={ringLabel} color={TOK.amberInk} size={18} />
			</g>
			<g opacity={fadeAt(frame, beats.reproduce + 60)}>
				<Tag x={cx} y={cy + ry + 86} text={afterLabel} color={TOK.amberInk} size={18} />
			</g>
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
