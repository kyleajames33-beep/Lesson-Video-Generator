// M6 B09 exam-card pictures (6 Nov quality fix). Item 1: one painted tile per use (A to D), waiting at 35% and lit as
// each use is read; the tiles show the givens only (what is used), never what is changed. Item 2: the cotton plant and
// a Helicoverpa larva boring into a boll (the caterpillar pest), drawn around (0, 0) for the scene to place and scale.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Sx} from '../bio-m5-b13/shared';
import {AMBER, AMBER_INK, BactIns, CARD, EDGE, INK, PLATES, Pl, prog} from './parts';
import type {PB} from '../bio-m5-b07/shared';

/** A plate clipped to its own box (for one half of a paired plate). */
const ClipPl: React.FC<{p: PB; cx: number; cy: number; w: number; id: string; rot?: number}> = ({p, cx, cy, w, id, rot = 0}) => {
	const h = (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);
	return (
		<g transform={`rotate(${rot},${cx},${cy})`}>
			<defs><clipPath id={id}><rect x={cx - w / 2 - 2} y={cy - h / 2 - 2} width={w + 4} height={h + 4} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Pl p={p} cx={cx} cy={cy} w={w} /></g>
		</g>
	);
};

export const TILE = {x: 1500, w: 290, h: 112, y0: 196, gap: 122};
/** Four use tiles, A to D; `show` is when each tile waits (35%), `lit` when its use is read. */
export const UseTiles: React.FC<{show: number; lit: number[]}> = ({show, lit}) => {
	const f = useCurrentFrame();
	return (
		<>
			{['A', 'B', 'C', 'D'].map((L, i) => {
				const o = prog(f, show + i * 4, 12);
				if (o <= 0.01) return null;
				const on = prog(f, lit[i], 12);
				const y = TILE.y0 + i * TILE.gap, cy = y + TILE.h / 2;
				const x = TILE.x;
				return (
					<g key={L} opacity={o * (0.35 + 0.65 * on)}>
						<rect x={x} y={y} width={TILE.w} height={TILE.h} rx={18} fill={CARD} stroke={on > 0.5 ? AMBER : EDGE} strokeWidth={on > 0.5 ? 3.5 : 2.5} />
						<Sx x={x + 22} y={cy + 14} text={L} size={40} color={on > 0.5 ? AMBER_INK : INK} weight={800} />
						{i === 0 ? <><Pl p={PLATES.milk} cx={x + 130} cy={cy + 4} w={110} /><Pl p={PLATES.bact} cx={x + 235} cy={cy} w={100} /></> : null}
						{i === 1 ? <><Pl p={PLATES.bull} cx={x + 150} cy={cy + 2} w={150} /><Pl p={PLATES.straw} cx={x + 255} cy={cy} w={48} /></> : null}
						{i === 2 ? <ClipPl p={PLATES.cavendish} cx={x + 175} cy={cy} w={56} rot={-72} id="b09-tile-cav" /> : null}
						{i === 3 ? <><Pl p={PLATES.cotton} cx={x + 135} cy={cy} w={86} /><BactIns cx={x + 235} cy={cy} w={100} arc={0} /></> : null}
					</g>
				);
			})}
		</>
	);
};

/** Item 2 givens: a cotton plant, and a caterpillar pest boring into a boll. */
export const CottonPest: React.FC<{plant: number; pest: number; o?: number}> = ({plant, pest, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<Pl p={PLATES.cotton} cx={-250} cy={0} w={400} o={prog(f, plant, 14)} />
			<Sx x={-250} y={270} text="cotton plant" size={50} color={INK} hand anchor="middle" at={plant + 10} />
			<Pl p={PLATES.larva} cx={260} cy={0} w={440} o={prog(f, pest - 4, 14)} />
			<Sx x={260} y={270} text="caterpillar pest in a boll" size={50} color={AMBER_INK} hand anchor="middle" at={pest + 6} />
		</g>
	);
};
