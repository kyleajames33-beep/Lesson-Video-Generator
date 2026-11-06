// M6 B16 quality-fix parts (6 Nov 2026). Lesson-local variants: B18 imports parts.tsx, so it is left unchanged.
// - MiniBoard2: the top-right tab with 26 px labels (was 22 px).
// - Meter2: criteria bars with 28 to 34 px labels and wider bars.
// - BigColumn: one hero column of the "What is being copied?" board (plate, title, gloss, a filled "what is copied"
//   bay), replacing the small card stack with empty bays.
import React from 'react';
import {AMBER, AMBER_INK, CARD, EDGE, GREYT, GREY_INK, INK, INK_SOFT, GeneSeg, NucIcon, PLATES, Pl, Sx, clamp01, tw} from './parts';
import type {Side} from './parts';

export const TITLE2 = {L: 'whole organism', R: 'one gene'};
export const MiniBoard2: React.FC<{active: Side; bay: number; what?: string; o?: number}> = ({active, bay, what, o = 1}) => {
	if (o <= 0.01) return null;
	const x0 = 1230, y0 = 30;
	return (
		<g opacity={o}>
			{(['L', 'R'] as Side[]).map((s, i) => {
				const on = s === active;
				const x = x0 + i * 300;
				return (
					<g key={s}>
						<rect x={x} y={y0} width={288} height={64} rx={16} fill={on ? '#fff8ea' : '#f1f1ef'} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3 : 2} />
						<Pl p={s === 'L' ? PLATES.lamb : PLATES.bactP} cx={x + 44} cy={y0 + 32} w={s === 'L' ? 58 : 70} dim={on ? 0 : 1} />
						<Sx x={x + 88} y={y0 + 42} text={TITLE2[s]} size={26} color={on ? INK : GREY_INK} weight={700} />
						{on ? [0, 1, 2].map(k => <circle key={k} cx={x + 118 + k * 28} cy={y0 + 84} r={8} fill={k === bay ? AMBER : CARD} stroke={k === bay ? AMBER_INK : GREYT} strokeWidth={2} />) : null}
					</g>
				);
			})}
			{what ? <Sx x={x0 + 588} y={y0 + 132} text={what} size={28} color={INK} hand anchor="end" /> : null}
		</g>
	);
};

/** Criteria bars with readable labels; fills 0..1 in their colours. */
export const Meter2: React.FC<{x: number; y: number; labels: string[]; fills: number[]; colors: string[]; o?: number; w?: number; size?: number; gap?: number}> = ({x, y, labels, fills, colors, o = 1, w = 300, size = 30, gap = 52}) => {
	if (o <= 0.01) return null;
	const lw = Math.max(...labels.map(l => tw(l, size))) + 20;
	const bh = size * 0.9;
	return (
		<g opacity={o}>
			{labels.map((l, i) => {
				const yy = y + i * gap;
				const p = clamp01(fills[i]);
				return (
					<g key={i}>
						<Sx x={x} y={yy + bh * 0.82} text={l} size={size} color={INK} weight={700} />
						<rect x={x + lw} y={yy} width={w} height={bh} rx={bh / 2} fill={CARD} stroke={INK_SOFT} strokeWidth={2.2} />
						{p > 0.005 ? <rect x={x + lw + 2} y={yy + 2} width={Math.max(bh - 4, (w - 4) * p)} height={bh - 4} rx={(bh - 4) / 2} fill={colors[i]} /> : null}
					</g>
				);
			})}
		</g>
	);
};

export const COLS2 = {L: {x0: 110, x1: 930}, R: {x0: 990, x1: 1810}};
export const GLOSS2 = {L: 'a new individual, same DNA', R: 'many copies of one piece of DNA'};
/** One hero column: frame, a large plate, the title, the gloss and the "what is copied" bay with its icon. */
export const BigColumn: React.FC<{side: Side; o?: number; gloss?: number; what?: number; y0?: number; y1?: number}> = ({side, o = 1, gloss = 0, what = 0, y0 = 320, y1 = 1030}) => {
	if (o <= 0.01) return null;
	const c = COLS2[side];
	const cx = (c.x0 + c.x1) / 2;
	const W = clamp01(what);
	return (
		<g opacity={o}>
			<rect x={c.x0} y={y0} width={c.x1 - c.x0} height={y1 - y0} rx={24} fill="#fffdf8" stroke={EDGE} strokeWidth={3} />
			{side === 'L' ? <Pl p={PLATES.lamb} cx={cx} cy={y0 + 170} w={280} /> : <Pl p={PLATES.bactP} cx={cx} cy={y0 + 170} w={460} />}
			<Sx x={cx} y={y0 + 360} text={TITLE2[side]} size={52} color={INK} weight={800} anchor="middle" />
			<Sx x={cx} y={y0 + 418} text={GLOSS2[side]} size={38} color={INK} hand anchor="middle" opacity={gloss} />
			<rect x={c.x0 + 30} y={y0 + 450} width={c.x1 - c.x0 - 60} height={y1 - y0 - 480} rx={20} fill={W > 0.5 ? '#fff8ea' : CARD} stroke={W > 0.5 ? AMBER : EDGE} strokeWidth={W > 0.5 ? 4 : 2.5} opacity={W} />
			<g opacity={W}>
				<Sx x={c.x0 + 56} y={y0 + 500} text="what is copied:" size={30} color={GREY_INK} weight={700} />
				{side === 'L' ? (
					<g>
						<NucIcon x={c.x0 + 130} y={y0 + 590} r={62} />
						<Sx x={c.x0 + 220} y={y0 + 580} text="the whole nucleus:" size={36} color={INK} hand />
						<Sx x={c.x0 + 220} y={y0 + 628} text="all of its DNA" size={36} color={INK} hand />
					</g>
				) : (
					<g>
						<GeneSeg x={c.x0 + 60} y={y0 + 575} n={6} pitch={30} gap={30} lineW={5} />
						<Sx x={c.x0 + 280} y={y0 + 580} text="one selected gene," size={36} color={INK} hand />
						<Sx x={c.x0 + 280} y={y0 + 628} text="copied many times" size={36} color={INK} hand />
					</g>
				)}
			</g>
		</g>
	);
};
