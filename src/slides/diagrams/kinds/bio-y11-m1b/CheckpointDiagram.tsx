// CheckpointDiagram (bio11m1bCheckpoint) — why the cell cycle's order matters.
//
// Top row (the real order): a G1 cell (model 2n = 4: a long and a short pair,
// one of each in the accent colour, one in coral, all unreplicated) → S phase
// copies every chromosome into two sister chromatids → a checkpoint gate
// checks the copy before division (tick) → mitosis + cytokinesis send one
// chromatid of every chromosome to each daughter.
// Bottom row (what if S were skipped): the same G1 cell divides without
// copying, so its four single chromosomes are shared out and each daughter is
// missing some (cross). Every count on screen is computed from the chromosome
// lists drawn, never typed.
//
// Props: `at` (frames after `delay`): g1 / s / gate / m / result / skip /
// skipResult / rule; `rule` text; `note` {text, at} (e.g. cytokinesis must
// follow mitosis).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, ease, lerp, CORAL, GlossDefs, Chromosome, CellBody, Verdict, Arrow, Ledge} from './shared';

export type CheckpointProps = {
	at?: {g1?: number; s?: number; gate?: number; m?: number; result?: number; skip?: number; skipResult?: number; rule?: number};
	note?: {text: string; at: number};
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bChk';
const W = 760, H = 530;
// Model chromosomes: [long accent, long coral, short accent, short coral]
const CH = [
	{len: 40, color: 'pat', dx: -18, dy: -10, a: 15},
	{len: 40, color: 'mat', dx: 14, dy: -14, a: -20},
	{len: 26, color: 'pat', dx: -10, dy: 16, a: 60},
	{len: 26, color: 'mat', dx: 20, dy: 14, a: -8},
] as const;

const Cell = ({x, y, frame, chromatids, which = [0, 1, 2, 3], s = 1, seed = 0}: {x: number; y: number; frame: number; chromatids: 1 | 2; which?: number[]; s?: number; seed?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
		<CellBody id={ID} cx={x} cy={y} rx={54} ry={44} />
		{which.map((k) => {
			const c = CH[k];
			return <Chromosome key={k} id={ID} x={x + c.dx} y={y + c.dy + idleBob(frame, seed + k, 0.8)} len={c.len} w={9} color={c.color} chromatids={chromatids} angle={c.a} splay={5} />;
		})}
	</g>
);

export const CheckpointDiagram = ({at = {}, note, rule, delay = 62}: CheckpointProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tG1 = at.g1 ?? 10, tS = at.s ?? 80, tGate = at.gate ?? 150, tM = at.m ?? 220, tRes = at.result ?? 290, tSkip = at.skip ?? 360, tSR = at.skipResult ?? 430, tR = at.rule ?? 520;
	const pulse = idlePulse(frame, 50);
	const YA = 140, YB = 350;
	const parentCount = CH.length;
	// Top row daughters: each gets one chromatid of every chromosome.
	const topDaughter = [0, 1, 2, 3];
	// Bottom row: four single chromosomes shared out, two each.
	const botDaughters = [[0, 3], [1, 2]];
	const gateOpen = ease(frame, tGate + 30, tGate + 50);
	const split = ease(frame, tM, tM + 50);
	const splitB = ease(frame, tSkip + 40, tSkip + 90);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="DNA is copied in S phase and checked before mitosis, so each daughter gets a complete set" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* TOP ROW: the real order */}
			<text x={20} y={34} fill={theme.accent} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tG1)}>in order</text>
			<Ledge x={20} y={YA + 50} w={720} opacity={fadeAt(frame, tG1)} />
			<g opacity={fadeAt(frame, tG1, 12)}>
				<Cell x={80} y={YA} frame={frame} chromatids={1} seed={1} />
				<text x={80} y={YA - 56} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>G1</text>
			</g>
			<Arrow x1={140} y1={YA} x2={174} y2={YA} color={TOK.inkMute} t={fadeAt(frame, tS)} />
			<g opacity={fadeAt(frame, tS, 12)}>
				<Cell x={236} y={YA} frame={frame} chromatids={2} seed={2} s={lerp(0.9, 1, popAt(frame, fps, tS))} />
				<text x={236} y={YA - 56} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>S: DNA copied</text>
			</g>
			{/* checkpoint gate */}
			<g opacity={fadeAt(frame, tGate, 12)}>
				<rect x={318} y={YA - 44} width={12} height={88} rx={4} fill="#8f8b83" />
				<rect x={318} y={YA - 44 + gateOpen * 70} width={12} height={10} fill="#cfccc5" />
				<Verdict x={324} y={YA - 60} ok r={13} opacity={fadeAt(frame, tGate + 20)} />
				<text x={324} y={YA + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>G2 checkpoint</text>
			</g>
			<Arrow x1={338} y1={YA} x2={364} y2={YA} color={TOK.inkMute} t={fadeAt(frame, tM)} />
			<g opacity={fadeAt(frame, tM, 12)}>
				<CellBody id={ID} cx={452} cy={YA} rx={70} ry={44} split={split} gap={10 * split} />
				{split < 0.5 ? (
					<g>{CH.map((c, k) => <Chromosome key={k} id={ID} x={452 + c.dx} y={YA + c.dy} len={c.len} w={9} color={c.color} chromatids={2} angle={c.a} splay={lerp(5, 12, split * 2)} />)}</g>
				) : (
					[-1, 1].map((sd) => (
						<g key={sd}>
							{topDaughter.map((k) => {
								const c = CH[k];
								return <Chromosome key={k} id={ID} x={452 + sd * 44 + c.dx * 0.7} y={YA + c.dy * 0.9 + idleBob(frame, k + sd * 3, 0.8)} len={c.len * 0.85} w={8} color={c.color} chromatids={1} angle={c.a} />;
							})}
						</g>
					))
				)}
				<text x={452} y={YA - 56} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>M: mitosis, cytokinesis</text>
			</g>
			<g opacity={fadeAt(frame, tRes)}>
				<Verdict x={586} y={YA - 10} ok r={14} />
				<text x={606} y={YA - 4} fill={theme.accent} fontSize={17} fontWeight={800}>{topDaughter.length} of {parentCount} each</text>
				<text x={606} y={YA + 18} fill={TOK.inkDim} fontSize={15} fontWeight={800}>complete, identical</text>
			</g>

			{/* BOTTOM ROW: if S were skipped */}
			<text x={20} y={YB - 70} fill={CORAL} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tSkip)}>if DNA were not copied first</text>
			<Ledge x={20} y={YB + 50} w={720} opacity={fadeAt(frame, tSkip)} />
			<g opacity={fadeAt(frame, tSkip, 12)}>
				<Cell x={80} y={YB} frame={frame} chromatids={1} seed={9} />
				<text x={80} y={YB + 86} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>G1</text>
				<path d={`M 140 ${YB} C 170 ${YB - 40} 200 ${YB - 40} 226 ${YB}`} fill="none" stroke={CORAL} strokeWidth={3} strokeDasharray="6 6" />
				<text x={184} y={YB - 38} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>S skipped</text>
				<CellBody id={ID} cx={320} cy={YB} rx={70} ry={44} split={splitB} gap={10 * splitB} />
				{splitB < 0.5 ? (
					<g>{CH.map((c, k) => <Chromosome key={k} id={ID} x={320 + c.dx} y={YB + c.dy} len={c.len} w={9} color={c.color} chromatids={1} angle={c.a} />)}</g>
				) : (
					botDaughters.map((set, di) => (
						<g key={di}>
							{set.map((k) => {
								const c = CH[k];
								return <Chromosome key={k} id={ID} x={320 + (di === 0 ? -44 : 44) + c.dx * 0.6} y={YB + c.dy * 0.9 + idleBob(frame, k + 20, 0.8)} len={c.len * 0.85} w={8} color={c.color} chromatids={1} angle={c.a} />;
							})}
						</g>
					))
				)}
				<text x={320} y={YB + 86} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>divides anyway</text>
			</g>
			<g opacity={fadeAt(frame, tSR)}>
				<Verdict x={462} y={YB - 10} ok={false} r={14} />
				<text x={482} y={YB - 4} fill={CORAL} fontSize={17} fontWeight={800}>{botDaughters[0].length} of {parentCount} each</text>
				<text x={482} y={YB + 18} fill={TOK.inkDim} fontSize={15} fontWeight={800}>incomplete sets</text>
			</g>
			{note && <text x={W / 2} y={H - 40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, note.at)}>{note.text}</text>}
			{rule && <text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text>}
		</svg>
	);
};
