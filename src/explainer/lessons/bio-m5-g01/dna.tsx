// G01 coded DNA pieces: a short B4 molecule (two strands, tiles and hydrogen bonds) drawn in local coordinates and
// placed by translate and scale, so one strand can travel from the stimulus to its own new molecule. Original strands
// are B4 blue, new strands green. Pairing is computed (B4's partner), never typed.
import React from 'react';
import {AMBER, INK} from '../../kit';
import {HBonds, NEWC, ORIG, StrandRow, bondN, partner, tilesOf} from '../bio-m5-b04/dna';
import type {TileSpec} from '../bio-m5-b04/dna';
import {RED, clamp01, lerp} from './board';

export {ORIG, NEWC, partner};
export const MG = {pitch: 80, tw: 64, th: 48, so: 18, gap: 30};
/** Bottom backbone y (local). */
export const YB = 2 * MG.so + 2 * MG.th + MG.gap;
export const pairStr = (s: string) => s.split('').map(partner).join('');

export type Side = {letters: string; color: string; o?: number; dy?: (i: number) => number; unit?: (i: number) => number; tile?: (i: number) => Partial<TileSpec>; glow?: number};
export type Place = {x: number; y: number; k: number};
export const mixPlace = (a: Place, b: Place, t: number): Place => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), k: lerp(a.k, b.k, t)});
/** Screen point of a local point in a placed molecule. */
export const molPt = (p: Place, u: number, v: number): [number, number] => [p.x + u * p.k, p.y + v * p.k];

/**
 * A short molecule. (x, y) is the first column's top backbone; k scales it. Top tiles hang down, bottom tiles rise up.
 * `bond(i)` scales the hydrogen bonds of column i; bonds fade as the strands pull apart. `bad` draws the red mismatch
 * outline round one bottom (or top) tile.
 */
export const Mol: React.FC<Place & {top?: Side; bot?: Side; bond?: (i: number) => number; o?: number; bad?: {i: number; o: number; side?: 'top' | 'bot'}}> = ({x, y, k, top, bot, bond, o = 1, bad}) => {
	if (o <= 0.01) return null;
	const n = Math.max(top?.letters.length ?? 0, bot?.letters.length ?? 0);
	const tdy = (i: number) => (top?.dy ? top.dy(i) : 0);
	const bdy = (i: number) => (bot?.dy ? bot.dy(i) : 0);
	const tu = (i: number) => (top?.unit ? top.unit(i) : 1);
	const bu = (i: number) => (bot?.unit ? bot.unit(i) : 1);
	const bonds: React.ReactNode[] = [];
	if (top && bot) {
		for (let i = 0; i < n; i++) {
			const apart = Math.abs(tdy(i)) + Math.abs(bdy(i));
			const p = (bond ? bond(i) : 1) * clamp01(1 - apart / 14) * Math.min(tu(i), bu(i)) * (top.o ?? 1) * (bot.o ?? 1);
			if (p <= 0.01) continue;
			bonds.push(<HBonds key={i} x={i * MG.pitch} y1={MG.so + MG.th + tdy(i)} y2={YB - MG.so - MG.th + bdy(i)} n={bondN(top.letters[i])} p={1} w={MG.tw} o={p} width={5} />);
		}
	}
	const row = (s: Side, face: 'down' | 'up') => (
		<g opacity={s.o ?? 1}>
			<StrandRow x={0} y={face === 'down' ? 0 : YB} n={s.letters.length} pitch={MG.pitch} face={face} dir={face === 'down' ? 1 : -1} color={s.color}
				tiles={tilesOf(s.letters, s.unit, s.tile)} tw={MG.tw} th={MG.th} so={MG.so} dyOf={s.dy} unit={s.unit} thick={8}
				glowS={s.glow ? () => s.glow as number : undefined} glowL={s.glow ? () => s.glow as number : undefined} />
		</g>
	);
	let badEl: React.ReactNode = null;
	if (bad && bad.o > 0.01) {
		const side = bad.side ?? 'bot';
		const s = side === 'bot' ? bot : top;
		const t = s?.tile ? s.tile(bad.i) : {};
		const cx = bad.i * MG.pitch + (t.dx ?? 0);
		const cy = side === 'bot' ? YB + bdy(bad.i) - MG.so - MG.th / 2 + (t.dy ?? 0) : MG.so + MG.th / 2 + tdy(bad.i) + (t.dy ?? 0);
		badEl = <rect x={cx - MG.tw / 2 - 9} y={cy - MG.th / 2 - 9} width={MG.tw + 18} height={MG.th + 18} rx={12} fill="none" stroke={RED} strokeWidth={6} opacity={bad.o} transform={`rotate(${t.rot ?? 0} ${cx} ${cy})`} />;
	}
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${k})`}>
			{bonds}
			{top ? row(top, 'down') : null}
			{bot ? row(bot, 'up') : null}
			{badEl}
		</g>
	);
};
/** Amber highlight behind one column pair (local), for the pair the question points at. */
export const PairGlow: React.FC<Place & {i: number; o: number; color?: string}> = ({x, y, k, i, o, color = AMBER}) => (o <= 0.01 ? null : (
	<rect x={x + (i * MG.pitch - MG.tw / 2 - 14) * k} y={y - 30 * k} width={(MG.tw + 28) * k} height={(YB + 60) * k} rx={18 * k} fill="none" stroke={color} strokeWidth={6} opacity={o} />
));
void INK;
