// Y11 Chem M2 V01 scenes 14 to 19: two HSC-style attempts (whole card with a neutral picture: the aluminium sample;
// an open crucible of white powder; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, green
// framed answers, one red crossed slip), the handoff (the final frame: the balanced magnesium equation, the ribbon on
// the balance at 0.24 g, the magnifier full of atoms and the "Next" chip; chem-y11-m2-v02 opens on it) and the key
// notes with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {ALS, EQ, M, MGO, RIBBON, dur, g2, hold, pw, sc, tally} from './common';
import type {PDef} from './common';
import {
	AMB_CT, AMB_INK as AMB_T, Balance, Boundary, Card, Chip, EqLine, Fade, Framed, GREEN_C, Heading, INK, Lens, NAVY_C, PAPER, PauseHoldR, Plate, RED_C, Rich, SLATE_C, Sx, TEAL_C,
	Tally, Wisps, Write, balGeo, prog, richW, termX, terms,
} from './parts';
import type {Seg} from './parts';
import {mgoGeo} from './s1';

const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number}> = ({p, cx, bottom, h}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} />;
const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const coefAt = (f: number, base: number[], steps: [number, number, number][]) => { const c = [...base]; for (const [t, i, v] of steps) if (f >= t) c[i] = v; return c; };

// ---------- 14. attempt 1 ----------
const K14 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Aluminium reacts with oxygen gas to form aluminium', 'oxide. Balance the equation:']} y0={290} lh={62} />
		<EqLine x={140} y={500} terms={terms(EQ.al, [1, 1, 1], [], true)} nl={2} size={76} anchor="start" />
		<PB p={ALS} cx={1440} bottom={840} h={330} />
		<PauseHoldR h={hold('attempt-1')} at={K14.pause} x={140} y={936} cx={1000} cy={720} />
	</svg>
);

// ---------- 15. feedback 1 ----------
const K15 = cues(sc('feedback-1'), {has: 'Aluminium oxide has', six: 'Six is the smallest', use: 'use three O two', two: 'and two A l two O three', four: "That's four aluminium", write: 'write a four', fourAl: 'Four A l plus', writing: 'Writing O three', slip: 'classic slip', ozone: 'is ozone'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const steps: [number, number, number][] = [[K15.use + 6, 1, 3], [K15.two + 8, 2, 2], [K15.write + 10, 0, 4]];
	const c = coefAt(f, [1, 1, 1], steps);
	const T = terms(EQ.al, c, [steps[2][0], steps[0][0], steps[1][0]], true);
	const rows = tally(EQ.al, c, ['Al', 'O']);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'Al(s) + O_2(g) → Al_2O_3(s), not yet balanced'}]} />
			<EqLine x={800} y={400} terms={T} nl={2} size={64} slots={1} />
			<Tally x={1360} y={300} w={460} rows={rows} />
			<Write x={1400} y={600} text="6 fits both" at={K15.six} size={44} color={AMB_CT} />
			<Framed x={800} y={600} segs={[{t: '4Al(s) + 3O_2(g) → 2Al_2O_3(s)', c: GREEN_C}]} at={K15.fourAl} size={48} anchor="middle" stroke={GREEN_C} />
			<PB p={ALS} cx={230} bottom={820} h={150} />
			<Chip x={500} y={700} segs={[{t: '2Al + O_3 → Al_2O_3'}]} at={K15.writing} size={44} color={RED_C} strike={K15.slip} />
			<Write x={520} y={870} text="subscript changed: O₃ is ozone" at={K15.ozone} size={44} color={RED_C} />
			{void K15.has}{void K15.four}{void termX}
		</svg>
	);
};

// ---------- 16. attempt 2 ----------
const K16 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['A student heats 5.00 g of calcium carbonate, CaCO_3, in an', 'open crucible until its mass stops changing. The', 'equation is CaCO_3(s) → CaO(s) + CO_2(g).', '2.80 g of calcium oxide remains.', '(a) Calculate the mass of carbon dioxide released.', '(b) Explain why the mass in the crucible decreased, with', '      reference to the law of conservation of mass.']} y0={270} lh={60} />
		<PB p={MGO} cx={1640} bottom={760} h={330} />
		<PauseHoldR h={hold('attempt-2')} at={K16.pause} x={140} y={936} cx={1000} cy={800} />
	</svg>
);

// ---------- 17. feedback 2 ----------
const K17 = cues(sc('feedback-2'), {five: 'Five point zero zero', grams: 'grams of carbon dioxide', the: 'The mass of the reactant', but: 'but carbon dioxide', left: 'left the open', saying: 'Saying the mass', avoid: 'slip to avoid'});
export const SceneFeedback2: React.FC = () => {
	const g = mgoGeo(1520, 900, 520);
	const row = `m(CO_2) = ${M.caco3.toFixed(2)} − ${M.cao.toFixed(2)} = `;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: `${M.caco3.toFixed(2)} g CaCO_3   |   ${M.cao.toFixed(2)} g CaO remains   |   open crucible`}]} />
			<Sx x={120} y={380} text={row} size={48} color={INK} weight={800} at={K17.five} />
			<Framed x={120 + richW([{t: row}], 48)} y={380} segs={[{t: g2(M.co2b), c: GREEN_C}]} at={K17.grams} size={48} stroke={GREEN_C} />
			<Rich x={120} y={500} segs={[{t: 'mass of reactant = mass of products'}]} size={40} weight={800} at={K17.the} />
			<Rich x={120} y={570} segs={[{t: 'but CO_2 is a gas: it '}, {t: 'left the open crucible', c: TEAL_C}]} size={40} weight={800} at={K17.but} />
			<Rich x={120} y={640} segs={[{t: 'so the balance no longer weighed it'}]} size={40} weight={800} at={K17.left + 20} />
			<Plate p={MGO} x={g.x} y={g.y} h={g.h} />
			<Boundary x={g.bowl.x} y={g.bowl.y} w={g.bowl.w} h={g.bowl.h} at={-1000} />
			<Wisps a={[g.powder[0], g.powder[1] - 6]} b={[g.powder[0] + 80, g.powder[1] - 130]} at={K17.but} n={3} spread={26} />
			<Sx x={g.x - 260} y={g.y + 60} text={`CO_2 ${g2(M.co2b)}`} size={38} color={SLATE_C} weight={800} at={K17.but + 6} />
			<Chip x={120} y={720} segs={[{t: 'mass was destroyed'}]} at={K17.saying} size={44} color={RED_C} strike={K17.avoid} />
			<Write x={140} y={880} text="it left as a gas" at={K17.avoid + 6} size={46} color={RED_C} />
			{void PAPER}
		</svg>
	);
};

// ---------- 18. handoff: too many to count (final frame; chem-y11-m2-v02 opens on it) ----------
const K18 = cues(sc('handoff'), {one: 'One more thing', counts: 'counts particles', two: 'Two magnesium atoms', but: 'But that', enormous: 'enormous number', by: 'one by one', next: 'Next time', use: 'actually use'});
export const G18 = balGeo(96, 420, 440);
export const NEXT18 = 'Next: How does a mole connect particle count with chemical amount?';
export const LENS18 = {cx: 1300, cy: 690, r: 190};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const rw = 300, rh = (rw / RIBBON.box[2]) * RIBBON.box[3];
	const T = terms(EQ.mg, [2, 1, 2], [], true);
	const cw = richW([{t: NEXT18}], 44) + 64;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Balancing equations" at={-1000} out={K18.next} />
			<Fade at={K18.next}>
				<rect x={96} y={110} width={cw} height={84} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={4} />
				<Sx x={128} y={166} text={NEXT18} size={44} color={NAVY_C} weight={800} at={-1000} />
			</Fade>
			<EqLine x={1100} y={320} terms={T} nl={2} size={68} />
			<Sx x={1100} y={390} text="2 atoms : 1 molecule : 2 units of MgO" size={38} color={INK} anchor="middle" weight={800} at={K18.two} />
			<Balance g={G18} text={g2(M.mg)} />
			<Plate p={RIBBON} x={G18.pan[0] - rw / 2} y={G18.pan[1] + 18 - rh} h={rh} />
			<Lens cx={LENS18.cx} cy={LENS18.cy} r={LENS18.r} at={K18.enormous} from={[G18.pan[0] + 80, G18.pan[1] - 30]} />
			<Write x={LENS18.cx + LENS18.r + 30} y={LENS18.cy + 10} text="how many atoms?" at={K18.by} size={46} color={INK} />
			<Sx x={G18.disp[0]} y={910} text="magnesium ribbon" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{void K18.one}{void K18.counts}{void K18.but}{void K18.use}{void Tally}{void TEAL_C}{void AMB_T}
		</svg>
	);
};

// ---------- 19. key notes ----------
const NOTE_SIZE = 34;
export const NOTES: Seg[][] = [
	[{t: 'Closed system', c: TEAL_C}, {t: ': total mass before = total mass after.'}],
	[{t: 'Open container: a gas leaving lowers the mass; joining raises it.'}],
	[{t: 'Balance with '}, {t: 'coefficients', c: AMB_CT}, {t: ' (how many), never subscripts.'}],
	[{t: 'Check each atom: '}, {t: '2', c: AMB_CT}, {t: 'H_2 + O_2 → '}, {t: '2', c: AMB_CT}, {t: 'H_2O has 4 H and 2 O each side.'}],
	[{t: 'Mass of reactants = mass of products: 5.00 − 2.80 = 2.20 g CO_2.'}],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{NOTES.map((l, i) => (
					<Fade key={i} at={i * 3}>
						<circle cx={112} cy={300 + i * 100 - 12} r={8} fill={INK} />
						<Rich x={140} y={300 + i * 100} segs={l} size={NOTE_SIZE} weight={700} />
					</Fade>
				))}
				<Fade at={6}>
					<rect x={1240} y={262} width={584} height={420} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={5} />
					<Sx x={1270} y={306} text="memory aid" size={28} color={INK} hand at={-1000} />
					<Sx x={1270} y={384} text="Atoms in, atoms out." size={50} color={TEAL_C} hand at={-1000} />
					<Sx x={1270} y={452} text="Change the big number in front," size={38} color={AMB_CT} hand at={-1000} />
					<Sx x={1270} y={500} text="never the small number inside." size={38} color={INK} hand at={-1000} />
					<EqLine x={1532} y={612} terms={terms(EQ.water, [2, 1, 2])} nl={2} size={52} />
				</Fade>
			</Fade>
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</svg>
	);
};
