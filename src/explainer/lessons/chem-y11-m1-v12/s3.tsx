// Y11 Chem M1 V12 scenes 11 to 17: the map and the memory card (row, column and block marked on the grid), two
// HSC-style attempts (whole card with a neutral picture: a blank data-sheet table, then the aluminium, sulfur and
// silicon samples tagged A, B, C; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, green
// framed answers, one red crossed slip), the conclusion and handoff (the final frame: period 3 row and group 1
// column outlined, equal dashed circles round the Na, Cl and K shell models, "radius?") and the key notes with the
// memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {AL, SHELLS, SI, SULFUR, dur, hold, pw, sc} from './common';
import {
	TYPE_C, Card, Chip, DrawBox, DrawPath, Fade, Framed, GOLD_T, GREEN_T, Heading, INK, LitCell, MIX, NAVY_T, P_FILL, P_INK, PGrid, PauseHoldR, PenArrow, PenRing, Plate, PlateB, RED_T, Rich,
	S_INK, SLATE_T, SVG, ShellModel, Sx, TEAL_T, TickMark, VIOLET_T, Write, boxRC, cellC, cellXY, prog, richW, tw,
} from './parts';
import type {PG, Seg} from './parts';

const MEM: {t: string; c: string}[] = [{t: 'Row: outer shell.', c: NAVY_T}, {t: 'Column: outer electrons.', c: GOLD_T}, {t: 'Block: last subshell.', c: GREEN_T}];

// ---------- 11. one line to remember ----------
const K11 = cues(sc('memory-line'), {map: 'the map', row: 'Row', column: 'Column', block: 'Block', read: 'Read those', place: 'place any', behaves: 'behaves'});
const GM11: PG = {x: 300, y: 222, cw: 72, ch: 50, fg: 14};
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const ats = [K11.row, K11.column, K11.block];
	const gap = tw('   ', 48, true);
	let x = 200;
	const xs = MEM.map(m => { const x0 = x; x += tw(m.t, 52, true, 700) + gap; return x0; });
	const glow = (at: number, c: string, b: {x: number; y: number; w: number; h: number}) => <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={c} opacity={0.18 * prog(f, at, 12)} />;
	const rowB = boxRC(GM11, 3, 3, 1, 18), colB = boxRC(GM11, 2, 7, 1, 1), pB = boxRC(GM11, 2, 7, 13, 18);
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<PGrid g={GM11} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} />
			{glow(K11.row, NAVY_T, rowB)}{glow(K11.column, GOLD_T, colB)}{glow(K11.block, GREEN_T, pB)}
			<DrawBox {...rowB} at={K11.row} color={NAVY_T} width={6} pad={3} />
			<DrawBox {...colB} at={K11.column} color={GOLD_T} width={6} pad={6} />
			<DrawBox {...pB} at={K11.block} color={GREEN_T} width={6} pad={9} />
			<Write x={rowB.x + rowB.w + 18} y={rowB.y + 38} text="row" at={K11.row + 6} size={42} color={NAVY_T} />
			<Write x={colB.x - 14} y={colB.y + colB.h - 8} text="column" at={K11.column + 6} size={42} color={GOLD_T} anchor="end" />
			<Write x={pB.x + pB.w + 18} y={pB.y + pB.h - 40} text="block" at={K11.block + 6} size={42} color={GREEN_T} />
			<Fade at={K11.row - 8}>
				<rect x={140} y={720} width={1640} height={214} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
				<Sx x={170} y={760} text="memory aid" size={30} color={INK} hand at={-1000} />
			</Fade>
			{MEM.map((m, i) => <Write key={i} x={xs[i]} y={838} text={m.t} at={ats[i]} size={52} color={m.c} />)}
			<Rich x={200} y={900} segs={[{t: 'Read them from a configuration: place any element, predict how it behaves.'}]} size={34} at={K11.place - 10} />
			{void K11.map}{void K11.read}{void K11.behaves}
		</SVG>
	);
};

// ---------- 12. attempt 1 ----------
const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const K12 = cues(sc('attempt-1'), {pause: 'Pause here'});
const GQ: PG = {x: 1270, y: 300, cw: 30, ch: 30, fg: 8};
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Selenium has atomic number 34.']} />
		<Q y0={370} lines={['(a)  Write the electron configuration of a', '       selenium atom.']} />
		<Q y0={508} lines={['(b)  State the period, group and block of selenium.']} />
		<Q y0={588} lines={['(c)  Name ONE other element with similar chemical', '       properties to selenium, and explain your choice.']} />
		<Sx x={140} y={740} text="(4 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PGrid g={GQ} />
		<Sx x={GQ.x} y={GQ.y + 9 * GQ.ch + 8 + 44} text="data sheet: the periodic table" size={30} color={INK} weight={800} at={-1000} />
		<PauseHoldR h={hold('attempt-1')} at={K12.pause} x={140} y={936} cx={1540} cy={770} />
	</SVG>
);

// ---------- 13. feedback 1 ----------
const K13 = cues(sc('feedback-1'), {se: 'Selenium is', p4: 'four p four', highest: 'Its highest', period: 'period four', outer: 'Its outer', six: 'six valence', full: 'The full', g16: 'group sixteen', block: 'block', sulfur: 'Sulfur, or', same: 'same outer', putting: 'Putting it', slip: 'classic slip'});
const GF1: PG = {x: 1150, y: 300, cw: 36.5, ch: 36, fg: 10};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const S = 44, AX = 110, AY = 400;
	const pre = '(a)  [Ar] ', d10 = '3d^{10} ', outer = '4s^{2} 4p^{4}';
	const aSegs: Seg[] = [{t: pre + d10 + outer, c: GREEN_T}];
	const x0 = AX + S * 0.45;
	const dX = x0 + richW([{t: pre}], S), oX = x0 + richW([{t: pre + d10}], S), oW = richW([{t: outer}], S);
	const aW = richW(aSegs, S) + S * 0.9;
	const sum = '18 + 10 + 2 + 4 = 34';
	const sx = AX + aW + 90;
	const B: {t: string; at: number; x: number}[] = [{t: '(b)  period 4', at: K13.period, x: AX}, {t: 'group 16', at: K13.g16, x: AX + 430}, {t: 'p block', at: K13.block, x: AX + 770}];
	void cellC;
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'selenium     |     Z = 34     |     [Ar] = 18 electrons'}]} />
			<Framed x={AX} y={AY} segs={aSegs} at={K13.se + 10} size={S} stroke={GREEN_T} />
			<Rich x={sx} y={AY} segs={[{t: sum, c: NAVY_T}]} size={38} at={K13.p4 + 12} />
			<TickMark x={sx + richW([{t: sum}], 38) + 30} y={AY - 12} at={K13.p4 + 22} color={NAVY_T} />
			<PenRing cx={oX + oW / 2 + 4} cy={AY - 15} rx={oW / 2 + 12} ry={36} at={K13.six} color={GREEN_T} seed={5} />
			<Write x={sx} y={AY + 70} text="6 valence electrons" at={K13.six + 8} size={42} color={GREEN_T} />
			<Write x={dX - 30} y={AY + 82} text="3d: full, not outer" at={K13.full} size={42} color={SLATE_T} />
			<Fade at={-1000} out={K13.sulfur}>
				<rect x={96} y={586} width={1180} height={226} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			</Fade>
			<Rich x={AX} y={640} segs={[{t: '(b)  State the period, group and block of selenium.'}]} size={38} weight={700} out={K13.period} />
			<Rich x={AX} y={770} segs={[{t: '(c)  Name ONE element with similar chemical properties.'}]} size={38} weight={700} out={K13.sulfur} />
			{B.map((b, i) => <Framed key={i} x={b.x} y={640} segs={[{t: b.t, c: GREEN_T}]} at={b.at} size={S} stroke={GREEN_T} />)}
			<Framed x={AX} y={770} segs={[{t: '(c)  S (or O): same outer arrangement, s^{2} p^{4}', c: GREEN_T}]} at={K13.sulfur} size={S} stroke={GREEN_T} />
			<PGrid g={GF1} tint={{s: 0.8, p: 0.8, d: 0.8, f: 0.8}} />
			<LitCell g={GF1} z={34} at={K13.se} color={P_INK} fill="#ffffff" pop={1.35} />
			<LitCell g={GF1} z={8} at={K13.sulfur} color={P_INK} fill="#ffffff" pop={1.25} />
			<LitCell g={GF1} z={16} at={K13.sulfur + 4} color={P_INK} fill="#ffffff" pop={1.25} />
			<DrawBox {...boxRC(GF1, 4, 4, 1, 18)} at={K13.period} color={NAVY_T} width={5} pad={2} />
			<Sx x={GF1.x - 10} y={GF1.y + 3 * GF1.ch + 27} text="4" size={34} color={NAVY_T} anchor="end" weight={800} at={K13.period} />
			<DrawBox {...boxRC(GF1, 2, 7, 16, 16)} at={K13.g16} color={GOLD_T} width={5} pad={4} />
			<Sx x={GF1.x + 15.5 * GF1.cw} y={GF1.y - 12} text="16" size={34} color={GOLD_T} anchor="middle" weight={800} at={K13.g16} />
			<DrawBox {...boxRC(GF1, 2, 7, 13, 18)} at={K13.block} color={GREEN_T} width={5} pad={8} />
			<Sx x={GF1.x} y={GF1.y + 9 * GF1.ch + 10 + 40} text="selenium (Se) lit" size={30} color={INK} weight={800} at={K13.se} out={K13.sulfur - 4} />
			<Sx x={GF1.x} y={GF1.y + 9 * GF1.ch + 10 + 40} text="group 16: O, S, Se" size={30} color={INK} weight={800} at={K13.sulfur} />
			<PlateB p={SULFUR} cx={1620} bottom={850} h={150} at={K13.sulfur} />
			<Sx x={1620} y={888} text="sulfur" size={30} color={INK} anchor="middle" weight={800} at={K13.sulfur} />
			<Chip x={AX} y={826} segs={[{t: 'Se: group 6'}]} at={K13.putting} size={44} color={RED_T} strike={K13.slip} />
			<Write x={AX + 360} y={882} text="6 valence electrons → group 16" at={K13.slip + 6} size={42} color={RED_T} />
			{void K13.highest}{void K13.outer}{void K13.same}{void cellXY}
		</SVG>
	);
};

// ---------- 14. attempt 2 ----------
const K14 = cues(sc('attempt-2'), {pause: 'Pause here'});
const ROWS14 = [
	{l: 'A', t: 'shiny, good electrical conductor, malleable, melting point 660 °C'},
	{l: 'B', t: 'yellow, brittle, does not conduct, melting point 115 °C'},
	{l: 'C', t: 'shiny grey, brittle, slight electrical conductor, melting point 1414 °C'},
];
export const SceneAttempt2: React.FC = () => {
	const samples = [{p: AL, h: 110, y: 360}, {p: SULFUR, h: 96, y: 520}, {p: SI, h: 156, y: 716}];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Q y0={270} lines={['Three elements, A, B and C, are described below.']} />
			{ROWS14.map((r, i) => (
				<g key={i}>
					<rect x={136} y={302 + i * 62} width={1352} height={56} rx={8} fill={i % 2 ? '#fffdf8' : '#f3eee3'} />
					<Sx x={156} y={342 + i * 62} text={r.l} size={34} color={INK} weight={800} at={-1000} />
					<Sx x={200} y={342 + i * 62} text={r.t} size={32} color={INK} weight={700} at={-1000} />
				</g>
			))}
			<Q y0={556} lines={['(a)  Classify each element as a metal, a non-metal or', '       a metalloid, giving ONE reason for each.', '(b)  State where each type of element is found in', '       the periodic table.']} lh={54} />
			<Sx x={140} y={800} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			{samples.map((s, i) => (
				<g key={i}>
					<PlateB p={s.p} cx={1700} bottom={s.y} h={s.h} />
					<Sx x={1570} y={s.y - s.h / 2 + 16} text={'ABC'[i]} size={44} color={INK} anchor="end" weight={800} at={-1000} />
				</g>
			))}
			<PauseHoldR h={hold('attempt-2')} at={K14.pause} x={140} y={936} cx={1240} cy={790} />
		</SVG>
	);
};

// ---------- 15. feedback 2 ----------
const K15 = cues(sc('feedback-2'), {a: 'A is a metal', aw: "It's shiny", left: 'left and', b: 'B is a', bw: "It's brittle", right: 'top right', c: 'C is a metalloid', cw: 'shiny but', stair: 'staircase', calling: 'Calling C', slip: 'classic slip', brittle: 'Brittleness'});
const GF2: PG = {x: 1100, y: 300, cw: 40, ch: 36, fg: 10};
export const SceneFeedback2: React.FC = () => {
	const rows = [
		{p: AL, h: 96, y: 330, ans: 'A: metal', why: 'shiny, conducts, malleable', where: ': left and centre', at: K15.a, wat: K15.aw, rat: K15.left, tgt: cellC(GF2, 25), col: INK},
		{p: SULFUR, h: 84, y: 500, ans: 'B: non-metal', why: "brittle, doesn't conduct", where: ': top right', at: K15.b, wat: K15.bw, rat: K15.right, tgt: cellC(GF2, 7), col: TEAL_T},
		{p: SI, h: 120, y: 670, ans: 'C: metalloid', why: 'shiny but brittle, conducts slightly', where: ': staircase', at: K15.c, wat: K15.cw, rat: K15.stair, tgt: cellC(GF2, 32), col: VIOLET_T},
	];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<rect x={96} y={186} width={1728} height={74} rx={14} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
			<Rich x={124} y={234} segs={[{t: 'A: shiny, conducts, malleable    |    B: yellow, brittle, no conduction    |    C: shiny grey, brittle, slight conduction', c: NAVY_T}]} size={30} weight={700} />
			<PGrid g={GF2} types={1} />
			{rows.map((r, i) => {
				const fx = 330, fy = r.y + 70;
				const aw = richW([{t: r.ans}], 52) + 52 * 0.9;
				return (
					<g key={i}>
						<PlateB p={r.p} cx={190} bottom={r.y + 120} h={r.h * 1.3} />
						<Framed x={fx} y={fy} segs={[{t: r.ans, c: GREEN_T}]} at={r.at} size={52} stroke={GREEN_T} />
						<Rich x={fx} y={fy + 56} segs={[{t: r.why, at: r.wat}, {t: r.where, c: r.col, at: r.rat}]} size={32} at={r.wat} />
						<PenArrow a={[fx + aw + 70, fy - 20]} b={[r.tgt[0] - 10, r.tgt[1]]} at={r.rat} out={r.rat + 75} color={r.col} bend={-0.12} width={5} />
						<PenRing cx={r.tgt[0]} cy={r.tgt[1]} rx={46} ry={34} at={r.rat + 14} color={r.col} seed={4 + i} />
					</g>
				);
			})}
			{[{t: 'metal', c: TYPE_C.metal.fill, s: INK}, {t: 'metalloid', c: TYPE_C.metalloid.fill, s: VIOLET_T}, {t: 'non-metal', c: TYPE_C.nonmetal.fill, s: TEAL_T}].map((k, i) => (
				<g key={k.t}>
					<rect x={1180 + i * 215} y={700} width={40} height={34} fill={k.c} stroke={k.s} strokeWidth={3} />
					<Sx x={1230 + i * 215} y={728} text={k.t} size={30} color={k.s} weight={800} at={-1000} />
				</g>
			))}
			<Chip x={110} y={846} segs={[{t: "C is a metal because it's shiny."}]} at={K15.calling} size={40} color={RED_T} strike={K15.slip + 8} />
			<Write x={860} y={892} text="shiny isn't enough: brittle, weak conductor" at={K15.brittle} size={42} color={RED_T} />
		</SVG>
	);
};

// ---------- 16. conclusion and handoff (final frame; chem-y11-m1-v13 opens on it) ----------
const K16 = cues(sc('conclusion-handoff'), {whole: 'whole table', period: 'The period gives', group: 'the group gives', block: 'and the block', size: 'think about size', na: 'Sodium and chlorine', same: 'same size', k: 'And potassium', next: 'Next, why', last: ['group', 2]});
export const GF: PG = {x: 330, y: 470, cw: 72, ch: 46, fg: 12};
const RC = 80;
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const t = 0.9 - 0.25 * prog(f, K16.whole, 24);
	const na = cellXY(GF, 11), cl = cellXY(GF, 17), k = cellXY(GF, 19);
	const naC = [na[0] + GF.cw / 2, 352], clC = [cl[0] + GF.cw / 2, 352], kC = [200, k[1] + GF.ch / 2];
	const rowB = boxRC(GF, 3, 3, 1, 18), colB = boxRC(GF, 2, 4, 1, 1);
	const lit = [3, 11, 19, 12, 13, 14, 15, 16, 17, 18];
	const memOut = K16.size - 14;
	let mx = 330;
	const mxs = MEM.map(m => { const x0 = mx; mx += tw(m.t, 52, true, 700) + 40; return x0; });
	return (
		<SVG>
			<Heading text="Groups, periods and blocks" at={-1000} />
			<Fade at={-1000} out={memOut}>
				{MEM.map((m, i) => <Sx key={i} x={mxs[i]} y={340} text={m.t} size={52} color={m.c} hand at={-1000} />)}
			</Fade>
			<PGrid g={GF} tint={{s: t, p: t, d: t, f: t}} />
			{/* recap: period, group, block */}
			<DrawBox {...rowB} at={K16.period} out={K16.size - 10} color={NAVY_T} width={6} pad={3} />
			<DrawBox {...boxRC(GF, 2, 7, 1, 1)} at={K16.group} out={K16.size - 10} color={GOLD_T} width={6} pad={7} />
			<DrawBox {...boxRC(GF, 2, 7, 13, 18)} at={K16.block} out={K16.size - 10} color={GREEN_T} width={6} pad={10} />
			<Fade at={K16.period} out={K16.size - 10}>
				<Sx x={rowB.x + rowB.w + 18} y={rowB.y + 34} text="outer shell" size={30} color={NAVY_T} weight={800} at={-1000} />
				<Sx x={rowB.x + rowB.w + 18} y={rowB.y + 34 + 4 * GF.ch} text="last subshell" size={30} color={GREEN_T} weight={800} at={K16.block - K16.period} />
				<Sx x={GF.x - 14} y={GF.y + 5 * GF.ch} text="valence" size={30} color={GOLD_T} anchor="end" weight={800} at={K16.group - K16.period} />
				<Sx x={GF.x - 14} y={GF.y + 5 * GF.ch + 34} text="electrons" size={30} color={GOLD_T} anchor="end" weight={800} at={K16.group - K16.period} />
			</Fade>
			{/* think about size: the final frame */}
			{lit.map(z => <LitCell key={z} g={GF} z={z} at={K16.size} color={INK} fill="#fffdf8" pop={1} symSize={26} />)}
			<DrawBox {...rowB} at={K16.size} color={INK} width={6} pad={2} />
			<DrawBox {...colB} at={K16.size + 6} color={INK} width={6} pad={5} />
			{f >= K16.na ? <>
				<DrawPath d={`M${naC[0] - 24},${naC[1] + RC - 4} L${naC[0] - 24},${na[1] + 4}`} at={K16.na + 10} dur={12} color={INK} width={2.5} />
				<DrawPath d={`M${clC[0]},${clC[1] + RC} L${clC[0]},${cl[1] + 4}`} at={K16.na + 16} dur={12} color={INK} width={2.5} />
			</> : null}
			{f >= K16.k ? <DrawPath d={`M${kC[0] + RC},${kC[1]} L${k[0] - 4},${kC[1]}`} at={K16.k + 10} dur={10} color={INK} width={2.5} /> : null}
			<ShellModel cx={naC[0]} cy={naC[1]} Rc={RC} counts={SHELLS.Na} at={K16.na} labelSide="left" />
			<ShellModel cx={clC[0]} cy={clC[1]} Rc={RC} counts={SHELLS.Cl} at={K16.na + 8} labelSide="left" />
			<ShellModel cx={kC[0]} cy={kC[1]} Rc={RC} counts={SHELLS.K} at={K16.k} labelSide="top" />
			<Sx x={naC[0] + RC + 40} y={naC[1] + 10} text="3 shells each" size={30} color={INK} weight={800} at={K16.na + 20} />
			<Sx x={clC[0] + RC + 30} y={clC[1] + 10} text="3 shells each" size={30} color={INK} weight={800} at={K16.na + 24} />
			<Sx x={kC[0]} y={kC[1] + RC + 38} text="4 shells" size={30} color={INK} anchor="middle" weight={800} at={K16.k + 14} />
			<Sx x={960} y={428} text="shell model, not to scale" size={30} color={INK} anchor="middle" weight={800} at={K16.k + 20} />
			<Chip x={96} y={178} segs={[{t: 'Next: Why does atomic radius change across a period and down a group?'}]} at={K16.next} size={38} color={NAVY_T} />
			{void K16.same}{void K16.last}{void MIX}
		</SVG>
	);
};

// ---------- 17. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Period', c: NAVY_T}, {t: ' (row) = highest occupied level.'}], [{t: 'Block', c: GREEN_T}, {t: ' = subshell filled last.'}]],
	[[{t: 'Group', c: GOLD_T}, {t: ' (column) = same outer arrangement,'}], [{t: 'so similar chemistry.'}]],
	[[{t: 'Valence electrons: groups 1, 2 = group number;'}], [{t: 'groups 13 to 18 = group − 10.'}]],
	[[{t: 'Metals left and centre, '}, {t: 'non-metals', c: TEAL_T}, {t: ' top right,'}], [{t: 'metalloids', c: VIOLET_T}, {t: ' on the staircase.'}]],
	[[{t: 'A group shares chemistry, not always state'}], [{t: '(halogens: gas, liquid, solid).'}]],
];
const GN: PG = {x: 1216, y: 640, cw: 31, ch: 22, fg: 6};
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 50} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={600} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
					{MEM.map((m, i) => <Sx key={i} x={1210} y={420 + i * 70} text={m.t} size={52} color={m.c} hand at={-1000} />)}
					<PGrid g={GN} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} />
					<DrawBox {...boxRC(GN, 3, 3, 1, 18)} at={-1000} color={NAVY_T} width={4} pad={2} />
					<DrawBox {...boxRC(GN, 2, 7, 1, 1)} at={-1000} color={GOLD_T} width={4} pad={4} />
					<DrawBox {...boxRC(GN, 2, 7, 13, 18)} at={-1000} color={GREEN_T} width={4} pad={6} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('conclusion-handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void Plate; void pw; void S_INK; void PenArrow;
