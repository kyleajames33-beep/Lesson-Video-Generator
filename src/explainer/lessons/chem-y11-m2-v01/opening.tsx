// Y11 Chem M2 V01 opening: chem-y11-m1-v27's final frame, drawn here from m1-v27's design (scene 15 and its "Final
// frame" text, repeated in this lesson's Decisions) because m1-v27 is not built yet. When m1-v27 is built, re-match
// this frame to its exported final scene (or replace this component with m1-v27's frozen handoff).
// The frame: heading "Why some things dissolve"; the navy "Next" chip; the top-pan balance with the salt-solution
// beaker on the pan and the display "110.0 g"; rows "water 100.0 g + salt 10.0 g" and "100.0 + 10.0 = 110.0 g";
// tag "beaker tared"; a lens of Na+ and Cl- among water molecules, tag "every particle still there". The design's
// "Module 1 complete" tag is left out (root rule, 21 Nov 2026: no course labels on screen).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {M, SALTSOL, pw} from './common';
import {Balance, INK, NAVY_C, PAPER, Plate, Sx, balGeo, prog, richW} from './parts';

export const V27_NEXT = 'Next: why must mass be conserved when a chemical equation is balanced?';
export const G27 = balGeo(96, 440, 460);
export const ROWS27 = [`water ${M.water.toFixed(1)} g + salt ${M.salt.toFixed(1)} g`, `${M.water.toFixed(1)} + ${M.salt.toFixed(1)} = ${(M.water + M.salt).toFixed(1)} g`];
export const LENS27 = {cx: 1580, cy: 700, r: 150};
export type V27Out = {heading?: number; chip?: number; tag?: number; rows?: number; lens?: number; beaker?: number; tared?: number};
const out = (f: number, at?: number) => (at === undefined ? 1 : 1 - prog(f, at, 14));
/** The lens: water molecules with one Na+ and one Cl- among them. */
const LensView: React.FC<{cx: number; cy: number; r: number}> = ({cx, cy, r}) => {
	const W: [number, number, number][] = [[-90, -70, 0.3], [10, -105, 1.2], [95, -55, 2.1], [-110, 30, 4], [-30, 95, 2.8], [80, 80, 0.9], [120, 10, 5.1], [-60, -10, 3.3]];
	return (
		<g>
			<circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth={6} />
			{W.map(([dx, dy, a], i) => (
				<g key={i}>
					<circle cx={cx + dx + 16 * Math.cos(a)} cy={cy + dy + 16 * Math.sin(a)} r={9} fill="#ffffff" stroke={INK} strokeWidth={2} />
					<circle cx={cx + dx + 16 * Math.cos(a + 1.8)} cy={cy + dy + 16 * Math.sin(a + 1.8)} r={9} fill="#ffffff" stroke={INK} strokeWidth={2} />
					<circle cx={cx + dx} cy={cy + dy} r={15} fill="#d8483b" stroke={INK} strokeWidth={2} />
				</g>
			))}
			<circle cx={cx + 30} cy={cy - 20} r={22} fill="#8a5bb5" stroke={INK} strokeWidth={2} />
			<Sx x={cx + 30} y={cy - 11} text="+" size={30} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			<circle cx={cx + 20} cy={cy + 40} r={30} fill="#4f9a5a" stroke={INK} strokeWidth={2} />
			<Sx x={cx + 20} y={cy + 51} text="−" size={34} color="#ffffff" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const V27Final: React.FC<{outs?: V27Out; display?: string}> = ({outs = {}, display = `${(M.water + M.salt).toFixed(1)} g`}) => {
	const f = useCurrentFrame();
	const bh = 230, bw = pw(SALTSOL, bh);
	const cw = richW([{t: V27_NEXT}], 44) + 64;
	return (
		<g>
			<g opacity={out(f, outs.heading)}><Sx x={96} y={150} text="Why some things dissolve" size={60} color={INK} hand weight={700} at={-1000} /></g>
			<g opacity={out(f, outs.chip)}>
				<rect x={96} y={190} width={cw} height={84} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={4} />
				<Sx x={128} y={246} text={V27_NEXT} size={44} color={NAVY_C} weight={800} at={-1000} />
			</g>
			<Balance g={G27} text={display} />
			<g opacity={out(f, outs.beaker)}><Plate p={SALTSOL} x={G27.pan[0] - bw / 2} y={G27.pan[1] + 14 - bh} h={bh} /></g>
			<g opacity={out(f, outs.tared)}><Sx x={G27.disp[0]} y={G27.Y(1028) + 44} text="beaker tared" size={34} color={INK} anchor="middle" weight={800} at={-1000} /></g>
			<g opacity={out(f, outs.rows)}>
				{ROWS27.map((t, i) => <Sx key={i} x={860} y={440 + i * 80} text={t} size={44} color={INK} weight={800} at={-1000} />)}
			</g>
			<g opacity={out(f, outs.lens)}>
				<LensView cx={LENS27.cx} cy={LENS27.cy} r={LENS27.r} />
				<Sx x={LENS27.cx} y={LENS27.cy + LENS27.r + 50} text="every particle still there" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		</g>
	);
};
