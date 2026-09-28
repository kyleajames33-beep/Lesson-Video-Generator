// GuardCellsDiagram — a stoma modelled on a stone plinth: two glossy guard
// cells around a pore. Potassium ions are pumped in, water follows by osmosis
// a beat later, and the cells' swelling (and so the pore's opening) is driven
// by how much water is inside them, not by a separate timeline: ions → water →
// turgor → pore. The hormone ABA then sends the ions out, water follows, the
// cells go limp and the pore closes.
//
// Beats are frames after `delay`. Hold: ions and water drift inside the cells,
// the pore's edge breathes very slightly.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, clamp, ease, fadeAt, hash01} from './shared';

export type GuardCellsProps = {
	/** Frames: ions in, water in (open); ABA arrives, ions out, water out (close). */
	ionsIn: number;
	waterIn: number;
	aba: number;
	ionsOut: number;
	waterOut: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8gc';
const W = 760;
const H = 530;
const C = {x: 380, y: 196};
const R = 104;
const N_ION = 6;
const N_H2O = 8;

export const GuardCellsDiagram = ({ionsIn, waterIn, aba, ionsOut, waterOut, notes = [], delay = 62}: GuardCellsProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	// Ions / water inside the guard cells (0..1), then the swelling follows the water.
	const ionFrac = ease(frame, ionsIn, ionsIn + 90) * (1 - ease(frame, ionsOut, ionsOut + 90));
	const waterFrac = ease(frame, waterIn, waterIn + 110) * (1 - ease(frame, waterOut, waterOut + 110));
	const open = waterFrac; // turgor tracks water content
	const inner = 3 + 30 * open;
	const thick = 46 + 8 * open;
	const breathe = idlePulse(frame, 70) * 1.2;

	const cellPath = (side: -1 | 1) => {
		const i = (inner + breathe * open) * side;
		const o = (inner + thick) * side;
		return `M ${C.x} ${C.y - R} Q ${C.x + i * 2} ${C.y} ${C.x} ${C.y + R} Q ${C.x + o * 2.1} ${C.y} ${C.x} ${C.y - R} Z`;
	};
	const porePath = `M ${C.x} ${C.y - R + 8} Q ${C.x - inner * 2} ${C.y} ${C.x} ${C.y + R - 8} Q ${C.x + inner * 2} ${C.y} ${C.x} ${C.y - R + 8} Z`;

	// Particle positions: outside (neighbouring cells) ↔ inside the guard cells.
	const particle = (k: number, kind: 'ion' | 'h2o', frac: number) => {
		const total = kind === 'ion' ? N_ION : N_H2O;
		const side = k % 2 === 0 ? -1 : 1;
		// each particle crosses when the running fraction passes its own threshold
		const thr = (Math.floor(k / 2) + 0.5) / (total / 2);
		const t = interpolate(frac, [thr - 0.25, thr + 0.05], [0, 1], clamp);
		const outX = C.x + side * (250 + hash01(k * 3 + (kind === 'ion' ? 0 : 50)) * 90);
		const outY = C.y - 80 + hash01(k * 7 + (kind === 'ion' ? 1 : 9)) * 170;
		const inX = C.x + side * (inner + thick * (0.45 + hash01(k * 11) * 0.5));
		const inY = C.y - 64 + hash01(k * 13 + (kind === 'ion' ? 2 : 4)) * 128;
		const x = outX + (inX - outX) * t;
		const y = outY + (inY - outY) * t + idleBob(frame, k + (kind === 'ion' ? 0 : 30), 2);
		return kind === 'ion' ? (
			<g key={`i${k}`}>
				<circle cx={x} cy={y} r={11} fill={`url(#${ID}-g-k)`} stroke="rgba(0,0,0,0.3)" />
				<text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={800}>K⁺</text>
			</g>
		) : (
			<path key={`w${k}`} d={`M ${x} ${y - 10} Q ${x + 8} ${y} ${x} ${y + 7} Q ${x - 8} ${y} ${x} ${y - 10} Z`} fill={`url(#${ID}-g-w)`} stroke="rgba(0,0,0,0.2)" />
		);
	};

	const abaT = fadeAt(frame, aba, 14);
	const status = open > 0.6 ? 'guard cells turgid: pore open' : open < 0.2 ? 'guard cells limp: pore closed' : '';
	const lostTurgor = frame > aba;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Guard cells open a stoma by taking up potassium ions; water follows by osmosis" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{k: COL.violet, w: '#5aa7e0', cell: '#6fbf5a'}} />
			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={`${ID}p`} cx={C.x} cy={C.y + R + 6} rx={200} />
				{/* neighbouring epidermal cells (where the ions and water come from) */}
				{[-1, 1].map((sd) => (
					<rect key={sd} x={sd < 0 ? 40 : 520} y={C.y - 110} width={200} height={220} rx={40} fill="#eef6e6" stroke="#c7dcb6" strokeWidth={2} />
				))}
				<path d={porePath} fill="#3d4a33" opacity={0.85} />
				<path d={cellPath(-1)} fill={`url(#${ID}-g-cell)`} stroke="#3f7a36" strokeWidth={2} />
				<path d={cellPath(1)} fill={`url(#${ID}-g-cell)`} stroke="#3f7a36" strokeWidth={2} />
				{Array.from({length: N_H2O}, (_, k) => particle(k, 'h2o', waterFrac))}
				{Array.from({length: N_ION}, (_, k) => particle(k, 'ion', ionFrac))}
				<text x={140} y={C.y + 132} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>neighbouring cell</text>
				<text x={620} y={C.y + 132} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>neighbouring cell</text>
				<text x={C.x} y={C.y - R - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>guard cells</text>
			</g>

			{/* ABA arrives */}
			<g opacity={abaT * (1 - fadeAt(frame, waterOut + 120, 20))}>
				<Pill x={C.x} y={30 + (1 - abaT) * -20} text="ABA: plant short of water" color={COL.red} size={16} />
			</g>

			{/* legend + live readout */}
			<g transform={`translate(${W / 2 - 250} ${H - 94})`}>
				<circle cx={8} cy={-5} r={9} fill={`url(#${ID}-g-k)`} />
				<text x={24} y={0} fill={TOK.ink} fontSize={15} fontWeight={800}>K⁺ ions {lostTurgor ? 'pumped out' : 'pumped in (ATP)'}</text>
				<path d="M 266 -15 Q 274 -5 266 2 Q 258 -5 266 -15 Z" fill={`url(#${ID}-g-w)`} />
				<text x={280} y={0} fill={TOK.ink} fontSize={15} fontWeight={800}>water follows by osmosis</text>
			</g>
			<text x={W / 2} y={H - 58} textAnchor="middle" fill={open > 0.6 ? theme.accent : TOK.inkDim} fontSize={19} fontWeight={800} opacity={status ? 1 : 0}>{status}</text>

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
