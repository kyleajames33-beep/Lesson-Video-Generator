// LadderDiagram (bio11m2Ladder) — the hierarchy of organisation as a staircase
// of stone plinths: organelle → cell → tissue → organ → system → organism.
//
// Each step carries a small drawing of a real structure (animal: mitochondrion,
// cardiac muscle cell, cardiac muscle tissue, heart, circulatory system, human;
// plant: chloroplast, palisade mesophyll cell, mesophyll tissue, leaf, shoot
// system, whole plant), the level name and the example name, rising in on its
// beat. Optional `adds` lines under a step say what that level can do that the
// one below cannot (emergent function). One step may be amber. All text from
// props. Hold: drawings bob; the heart beats; the amber step breathes.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, LeafShape, Lines, Notes, Title, W, clamp, fadeAt, popAt, wrap, type Note} from './shared';

export type LadderLevel = {level: string; name: string; at: number; adds?: {text: string; at: number}};
export type LadderProps = {
	example?: 'animal' | 'plant';
	title?: string;
	levels: LadderLevel[];
	amber?: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2lad';

const g = (name: keyof typeof COL) => `url(#${ID}-ball-${name})`;

const Striations = ({x, y, w, h}: {x: number; y: number; w: number; h: number}) => (
	<g>
		{Array.from({length: Math.floor(w / 7)}, (_, i) => (
			<line key={i} x1={x + 4 + i * 7} y1={y + 3} x2={x + 4 + i * 7} y2={y + h - 3} stroke="#a8453a" strokeWidth={1.3} opacity={0.55} />
		))}
	</g>
);

const MuscleCell = ({x, y, w = 56, h = 22}: {x: number; y: number; w?: number; h?: number}) => (
	<g>
		<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={8} fill={g('muscle')} stroke="#a8453a" strokeWidth={1.3} />
		<Striations x={x - w / 2} y={y - h / 2} w={w} h={h} />
		<ellipse cx={x} cy={y} rx={6} ry={4.5} fill={g('nucleus')} />
	</g>
);

const Heart = ({x, y, s, beat}: {x: number; y: number; s: number; beat: number}) => (
	<g transform={`translate(${x},${y}) scale(${s * (1 + 0.05 * beat)})`}>
		<path d="M 0 22 C -34 0, -30 -26, -12 -26 C -4 -26, 0 -20, 0 -14 C 0 -20, 4 -26, 12 -26 C 30 -26, 34 0, 0 22 Z" fill={g('blood')} stroke="#7a1f1a" strokeWidth={1.5} />
		<path d="M 4 -20 C 6 -34, 16 -36, 20 -32" fill="none" stroke="#b33a32" strokeWidth={5} strokeLinecap="round" />
		<path d="M -8 -22 C -10 -32, -16 -34, -20 -30" fill="none" stroke="#4f6fb8" strokeWidth={5} strokeLinecap="round" />
	</g>
);

const Person = ({x, y, s}: {x: number; y: number; s: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<circle cx={0} cy={-30} r={10} fill="#f0c6a4" stroke="#b88a66" strokeWidth={1.2} />
		<path d="M -14 -18 L 14 -18 L 16 12 L 8 12 L 6 34 L -6 34 L -8 12 L -16 12 Z" fill="#6f93b8" stroke="#4a6a8a" strokeWidth={1.2} />
		<Heart x={-3} y={-8} s={0.2} beat={0} />
	</g>
);

const PalisadeCell = ({x, y, w = 20, h = 50}: {x: number; y: number; w?: number; h?: number}) => (
	<g>
		<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={7} fill="#e3f1cf" stroke={COL.leafDark} strokeWidth={1.3} />
		{Array.from({length: 5}, (_, i) => (
			<ellipse key={i} cx={x + (i % 2 ? 4 : -4)} cy={y - h / 2 + 7 + i * ((h - 12) / 4)} rx={3.6} ry={2.6} fill={g('chloro')} />
		))}
	</g>
);

const Chloroplast = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse rx={30} ry={17} fill={g('chloro')} stroke={COL.leafDark} strokeWidth={1.5} />
		{[-16, -4, 8, 20].map((dx) => (
			<g key={dx}>
				{[0, 1, 2].map((k) => <rect key={k} x={dx - 5} y={-7 + k * 4.5} width={10} height={3.4} rx={1.5} fill="#2f6a1e" />)}
			</g>
		))}
	</g>
);

const Mito = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse rx={30} ry={16} fill={g('mito')} stroke="#9a4a33" strokeWidth={1.5} />
		<path d="M -24 0 L -18 -9 L -12 8 L -6 -9 L 0 8 L 6 -9 L 12 8 L 18 -9 L 24 0" fill="none" stroke="#fff3e6" strokeWidth={2.2} strokeLinejoin="round" />
	</g>
);

const Icon = ({example, i, x, y, frame}: {example: 'animal' | 'plant'; i: number; x: number; y: number; frame: number}): ReactNode => {
	const beat = Math.max(0, Math.sin((frame / 22) * Math.PI)) ** 4;
	if (example === 'animal') {
		switch (i) {
			case 0: return <Mito x={x} y={y} />;
			case 1: return <MuscleCell x={x} y={y} w={64} h={26} />;
			case 2: return (
				<g>{[0, 1, 2].map((r) => [0, 1].map((c) => <MuscleCell key={`${r}${c}`} x={x - 16 + c * 34 + (r % 2 ? 10 : 0) - 5} y={y - 22 + r * 22} w={32} h={19} />))}</g>
			);
			case 3: return <Heart x={x} y={y + 4} s={1.1} beat={beat} />;
			case 4: return (
				<g>
					<path d={`M ${x} ${y - 30} C ${x + 44} ${y - 34}, ${x + 46} ${y + 30}, ${x} ${y + 30} C ${x - 46} ${y + 30}, ${x - 44} ${y - 34}, ${x} ${y - 30}`} fill="none" stroke="#b33a32" strokeWidth={4} />
					<path d={`M ${x - 36} ${y + 4} C ${x - 30} ${y + 22}, ${x + 30} ${y + 22}, ${x + 36} ${y + 4}`} fill="none" stroke="#4f6fb8" strokeWidth={4} />
					<Heart x={x} y={y - 6} s={0.6} beat={beat} />
				</g>
			);
			default: return <Person x={x} y={y + 2} s={1.1} />;
		}
	}
	switch (i) {
		case 0: return <Chloroplast x={x} y={y} />;
		case 1: return <PalisadeCell x={x} y={y} w={24} h={58} />;
		case 2: return <g>{[0, 1, 2, 3].map((k) => <PalisadeCell key={k} x={x - 30 + k * 20} y={y} w={18} h={52} />)}</g>;
		case 3: return <LeafShape x={x - 42} y={y + 8} len={86} angle={-12} fill={COL.leaf} />;
		case 4: return (
			<g>
				<path d={`M ${x} ${y + 34} L ${x} ${y - 34}`} stroke={COL.stem} strokeWidth={5} strokeLinecap="round" />
				<LeafShape x={x} y={y - 16} len={40} angle={-30} fill={COL.leaf} />
				<LeafShape x={x} y={y + 2} len={40} angle={210} fill={COL.leaf} />
				<LeafShape x={x} y={y + 20} len={40} angle={-24} fill={COL.leaf} />
			</g>
		);
		default: return (
			<g>
				<path d={`M ${x} ${y + 16} L ${x} ${y - 34}`} stroke={COL.stem} strokeWidth={5} strokeLinecap="round" />
				<LeafShape x={x} y={y - 20} len={34} angle={-30} fill={COL.leaf} />
				<LeafShape x={x} y={y - 4} len={34} angle={210} fill={COL.leaf} />
				{[-1, 0, 1].map((s) => <path key={s} d={`M ${x} ${y + 16} C ${x + s * 6} ${y + 26}, ${x + s * 16} ${y + 30}, ${x + s * 20} ${y + 40}`} fill="none" stroke="#c9b48a" strokeWidth={2.4} strokeLinecap="round" />)}
			</g>
		);
	}
};

export const LadderDiagram = ({example = 'animal', title, levels, amber, notes = [], delay = 62}: LadderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = levels.length;
	const colW = W / n;
	const rx = Math.min(54, colW / 2 - 8);
	const top = title ? 52 : 8;
	const rise = 50;
	const highestY = top + 104;
	const pos = levels.map((_, i) => ({x: colW * (i + 0.5), y: highestY + (n - 1 - i) * rise}));
	const nameMax = Math.floor((colW - 4) / 9.6);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Levels of organisation'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{levels.slice(1).map((lv, i) => {
				const t = interpolate(frame, [lv.at - 14, lv.at + 4], [0, 1], clamp);
				if (t <= 0) return null;
				const a = pos[i];
				const b2 = pos[i + 1];
				const x1 = a.x + rx * 0.62;
				const y1 = a.y - 78;
				const x2 = b2.x - rx * 0.62;
				const y2 = b2.y - 78;
				return <Arrow key={i} x1={x1} y1={y1} x2={x1 + (x2 - x1) * t} y2={y1 + (y2 - y1) * t} color={TOK.inkMute} width={2.5} head={9} />;
			})}
			{levels.map((lv, i) => {
				const p = popAt(frame, fps, lv.at);
				const on = Math.min(1, p * 1.4);
				const isAmber = amber === i;
				const labelY = pos[i].y + rx * 0.34 + 34;
				const nameL = wrap(lv.name, nameMax);
				const addsOn = lv.adds ? fadeAt(frame, lv.adds.at, 14) : 0;
				const addsL = lv.adds ? wrap(lv.adds.text, nameMax) : [];
				return (
					<g key={i} opacity={on}>
						{isAmber && <ellipse cx={pos[i].x} cy={pos[i].y - 30} rx={rx * 1.05} ry={rx * 0.9} fill={TOK.amber} opacity={0.08 + 0.12 * idlePulse(frame)} />}
						<g transform={`translate(0, ${(1 - Math.min(1, p)) * 28})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={pos[i].x} cy={pos[i].y} rx={rx} />
							<g transform={`translate(0, ${idleBob(frame, i, 1.3)})`}>
								<g transform={`translate(${pos[i].x} ${pos[i].y - 48}) scale(1.3) translate(${-pos[i].x} ${-(pos[i].y - 48)})`}>
									<Icon example={example} i={Math.min(i, 5)} x={pos[i].x} y={pos[i].y - 48} frame={frame} />
								</g>
							</g>
						</g>
						<text x={pos[i].x} y={labelY} textAnchor="middle" fill={isAmber ? TOK.amberInk : theme.accent} fontSize={21} fontWeight={800}>{lv.level}</text>
						<Lines x={pos[i].x} y={labelY + 23} lines={nameL} size={18} color={TOK.ink} weight={700} />
						{lv.adds && (
							<g opacity={addsOn}>
								<line x1={pos[i].x - colW * 0.3} x2={pos[i].x + colW * 0.3} y1={labelY + 23 + nameL.length * 22 - 6} y2={labelY + 23 + nameL.length * 22 - 6} stroke={TOK.amber} strokeWidth={2} opacity={0.6} />
								<Lines x={pos[i].x} y={labelY + 23 + nameL.length * 22 + 14} lines={addsL} size={18} color={TOK.amberInk} weight={800} />
							</g>
						)}
					</g>
				);
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
