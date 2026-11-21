// Y11 Chem M2 V04 scenes 13 to 19: one idea, two routes (the compare table with both apparatus plates and the framed
// memory card), two HSC-style attempts (zinc in acid; the foil-capped flask; ring full from "Pause here", 10 s
// countdown), brief feedback (navy givens strip, green framed answers, one red crossed slip each), the handoff (the
// final frame: the class's raw notebook page, the burette and the one-run result, the "MM = m ÷ n" strip and the
// "Next" chip) and the key notes with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {A1, A1_MM, A1_N, A1_WRONG, BATH_V, BUR1, COND, EL_MM, FOIL, GMOL, LMOL, NOTEBOOK, RIBBON, VM, ZN, dur, fix, hold, ph, pw, sc, sci} from './common';
import {
	AMB_T, Card, Chip, Fade, Framed, GREEN_S, Givens, INK, NAVY_T, Notebook, PAPER, PauseHoldR, PenRing, Plate, QTag, RED_T, Rich, ROSE_S, ROSE_T, SLATE_S, SLATE_SOFT, SLATE_T,
	SVG, Sx, TEAL_S, TEAL_SOFT, TEAL_T, Write, plateMap, prog, richW,
} from './parts';
import type {Seg} from './parts';
import {TopStrips} from './s1';

const Q: React.FC<{lines: Seg[][]; y0?: number; lh?: number; size?: number}> = ({lines, y0 = 300, lh = 72, size = 44}) => <>{lines.map((l, i) => <Rich key={i} x={150} y={y0 + i * lh} segs={l} size={size} weight={700} />)}</>;

// ---------- 13. one idea, two routes ----------
const K13 = cues(sc('compare'), {so: 'So both', weigh: 'Weigh the substance', divide1: ['divide', 1], diff: 'The difference', mg: 'Magnesium makes', amounts: 'two amounts', liquid: 'The liquid becomes', moles: "vapour's moles", here: "Here's a line", weigh2: 'Weigh it', count: 'count it', divide2: ['divide', 2]});
const C0 = {x: 96, w: 850}, C1 = {x: 974, w: 850};
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const cell = (x: number, w: number, y: number, h: number, at: number, children: React.ReactNode, fill = PAPER, stroke = 'rgba(60,45,20,0.35)') => (
		<g opacity={prog(f, at, 12)}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={fill} stroke={stroke} strokeWidth={3} />
			{children}
		</g>
	);
	return (
		<SVG>
			<Write x={96} y={150} text="One idea, two routes" at={4} size={60} color={INK} />
			<TopStrips cond="T and P measured" tick />
			{cell(C0.x, C0.w, 190, 340, -1000, <>
				<Plate p={BUR1} x={C0.x + 30} y={200} h={320} />
				<Plate p={RIBBON} x={C0.x + 170} y={370} h={ph(RIBBON, 200)} />
				<Sx x={C0.x + 420} y={330} text="element:" size={40} color={INK} weight={800} at={-1000} />
				<Sx x={C0.x + 420} y={390} text="magnesium" size={52} color={INK} weight={800} at={-1000} />
			</>)}
			{cell(C1.x, C1.w, 190, 340, -1000, <>
				<Plate p={BATH_V} x={C1.x + 20} y={200} h={320} />
				<Sx x={C1.x + 380} y={330} text="compound:" size={40} color={INK} weight={800} at={-1000} />
				<Sx x={C1.x + 380} y={390} text="volatile liquid" size={52} color={INK} weight={800} at={-1000} />
			</>)}
			{cell(C0.x, C1.x + C1.w - C0.x, 548, 90, -1000, <Rich x={C0.x + 30} y={606} segs={[{t: 'both: ', c: INK}, {t: 'MM = m ÷ n', c: TEAL_T}, {t: ';  n from a gas volume at measured T and P', c: SLATE_T}]} size={42} />, TEAL_SOFT, TEAL_S)}
			{cell(C0.x, C0.w, 652, 122, -1000, <>
				<Rich x={C0.x + 30} y={700} segs={[{t: 'gas: hydrogen, made by the reaction;'}]} size={38} />
				<Rich x={C0.x + 30} y={752} segs={[{t: 'n(Mg) = n(H_2)', c: AMB_T}, {t: ' from the equation'}]} size={38} />
			</>)}
			{cell(C1.x, C1.w, 652, 122, -1000, <>
				<Rich x={C1.x + 30} y={700} segs={[{t: "gas: the substance's own vapour;"}]} size={38} />
				<Rich x={C1.x + 30} y={752} segs={[{t: 'no equation needed', c: AMB_T}]} size={38} />
			</>)}
			<PenRing cx={C0.x + C1.x + C1.w - C0.x - 900} cy={594} rx={880} ry={52} at={K13.weigh} out={K13.diff} color={TEAL_S} seed={2} />
			<PenRing cx={C0.x + 160} cy={740} rx={150} ry={34} at={K13.amounts} color={AMB_T} seed={3} />
			<PenRing cx={C1.x + 170} cy={740} rx={170} ry={34} at={K13.moles - 20} color={AMB_T} seed={5} />
			<Fade at={K13.here}>
				<rect x={96} y={790} width={1728} height={146} rx={22} fill={PAPER} stroke={INK} strokeWidth={4} />
				<rect x={106} y={800} width={1708} height={126} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={130} y={838} text="memory aid" size={34} color={INK} hand weight={700} at={-1000} />
			</Fade>
			<Write x={360} y={900} text="Weigh it," at={K13.weigh2} size={68} color={NAVY_T} />
			<Write x={660} y={900} text="count it with a gas," at={K13.count} size={68} color={SLATE_T} />
			<Write x={1230} y={900} text="then divide." at={K13.divide2 - 6} size={72} color={TEAL_T} />
			{void K13.so}{void K13.divide1}{void K13.diff}{void K13.moles}{void SLATE_SOFT}
		</SVG>
	);
};

// ---------- 14. attempt 1 ----------
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Write x={96} y={150} text="Your turn" at={0} size={60} color={INK} />
		<QTag />
		<Card h={700} />
		<Q lines={[
			[{t: `${fix(A1.m, 3)} g of zinc reacts completely with excess dilute`}],
			[{t: 'hydrochloric acid:   Zn(s) + 2HCl(aq) → ZnCl_2(aq) + H_2(g)'}],
			[{t: `The hydrogen collected has a volume of ${fix(A1.V, 1)} mL at`}],
			[{t: `${COND.room.replace(', ', ' and ')}. Calculate the molar mass of zinc.`}],
			[{t: `(Molar volume of a gas at 25 °C and 100 kPa = ${VM} ${LMOL})`}],
		]} y0={300} lh={76} />
		<Plate p={ZN} x={1800 - pw(ZN, 420)} y={250} h={420} />
		<PauseHoldR h={hold('attempt-1')} at={K14.pause} x={150} y={800} cx={1060} cy={760} />
		{void K14.turn}
	</SVG>
);

// ---------- 15. feedback 1 ----------
const K15 = cues(sc('feedback-1'), {fifty: 'Fifty-six point nine', divided: 'Divided by', thats: "that's two point", zinc: 'and of zinc', one: 'one to one', so: 'So the molar mass', sixty: 'sixty-five point four', leaving: 'Leaving the volume', tiny: 'tiny', slip: 'slip'});
export const SceneFeedback1: React.FC = () => {
	const r4: Seg[] = [{t: 'MM = '}, {t: fix(A1.m, 3), c: NAVY_T}, {t: ' ÷ '}, {t: sci(A1_N, 3), c: AMB_T}];
	return (
		<SVG>
			<Write x={96} y={150} text="Your turn" at={-1000} size={60} color={INK} />
			<Givens segs={[{t: `${fix(A1.m, 3)} g Zn  |  ${fix(A1.V, 1)} mL H_2 at ${COND.room}  |  ${VM} ${LMOL}  |  Zn + 2HCl → ZnCl_2 + H_2`}]} />
			<Plate p={ZN} x={1824 - pw(ZN, 500)} y={300} h={500} />
			<Rich x={96} y={360} segs={[{t: 'V = '}, {t: `${fix(A1.V, 1)} mL = ${fix(A1.V / 1000, 4)} L`, c: SLATE_T}]} size={48} at={K15.fifty} />
			<Rich x={96} y={480} segs={[{t: 'n(H_2) = '}, {t: fix(A1.V / 1000, 4), c: SLATE_T}, {t: ' ÷ '}, {t: `${VM}`, c: SLATE_T}, {t: ' = '}, {t: `${sci(A1_N, 3)} mol`, c: AMB_T}]} size={48} at={K15.divided} />
			<Rich x={96} y={600} segs={[{t: 'n(Zn) = n(H_2)', c: AMB_T}, {t: '   (1 : 1 in the equation)'}]} size={48} at={K15.zinc} />
			<Rich x={96} y={730} segs={r4} size={52} at={K15.so} />
			<Framed x={96 + richW(r4, 52) + 30} y={730} segs={[{t: `= ${fix(A1_MM, 1)} ${GMOL}`, c: TEAL_T}]} at={K15.sixty} size={52} stroke={GREEN_S} />
			<Chip x={96} y={800} segs={[{t: `${fix(A1.m, 3)} ÷ (${fix(A1.V, 1)} ÷ ${VM}) = ${fix(A1_WRONG, 4)} ${GMOL}`}]} at={K15.leaving} size={40} color={RED_T} strike={K15.slip} />
			<Write x={1000} y={845} text="mL to L first" at={K15.slip + 6} size={52} color={RED_T} />
			{void K15.thats}{void K15.one}{void K15.tiny}
		</SVG>
	);
};

// ---------- 16. attempt 2 ----------
const K16 = cues(sc('attempt-2'), {last: 'Last one', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Write x={96} y={150} text="Last one" at={0} size={60} color={INK} />
		<QTag />
		<Card h={700} />
		<Q lines={[
			[{t: 'In the volatile liquid method, a student removes the'}],
			[{t: 'flask from the water bath, cools it, and reweighs it'}],
			[{t: 'without drying the outside of the flask.'}],
			[{t: 'Explain the effect of this on the calculated molar mass'}],
			[{t: 'of the liquid.'}],
		]} y0={310} lh={78} />
		<Plate p={FOIL} x={1790 - pw(FOIL, 480)} y={230} h={480} />
		<PauseHoldR h={hold('attempt-2')} at={K16.pause} x={150} y={800} cx={1060} cy={760} />
		{void K16.last}
	</SVG>
);

// ---------- 17. feedback 2 ----------
const K17 = cues(sc('feedback-2'), {too: 'too high', water: 'The water on the outside', big: 'too big', volume: 'The volume', bigger: 'A bigger mass', saying: 'Saying', slip: 'classic slip'});
const DROPS17: [number, number][] = [[300, 900], [270, 1000], [880, 920], [910, 1040], [600, 1170], [430, 1160], [760, 1160]];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const fx = 1300, fy = 280, fh = 620;
	const m = plateMap(FOIL, fx, fy, fh);
	return (
		<SVG>
			<Write x={96} y={150} text="Last one" at={-1000} size={60} color={INK} />
			<Givens segs={[{t: 'flask reweighed with a wet outside     |     MM = m ÷ n'}]} />
			<Plate p={FOIL} x={fx} y={fy} h={fh} />
			{DROPS17.map(([u, v], i) => <path key={i} d={`M${m.X(u)},${m.Y(v) - 16} q12,16 0,26 q-12,-10 0,-26 Z`} fill="#5b9fd0" stroke="#2d6f9c" strokeWidth={2} opacity={prog(f, K17.water, 12)} />)}
			<Framed x={96} y={380} segs={[{t: 'too high', c: GREEN_S}]} at={K17.too} size={56} stroke={GREEN_S} />
			<Rich x={96} y={510} segs={[{t: 'm(vapour) ↑', c: ROSE_T}, {t: '   the water is weighed as vapour'}]} size={44} at={K17.water} />
			<Rich x={96} y={610} segs={[{t: 'n unchanged', c: AMB_T}, {t: '   same volume, same moles'}]} size={44} at={K17.volume} />
			<Rich x={96} y={720} segs={[{t: 'MM = m ÷ n ↑', c: ROSE_T}]} size={56} at={K17.bigger} />
			<Chip x={96} y={790} segs={[{t: 'too low: the water dilutes the liquid'}]} at={K17.saying} size={40} color={RED_T} strike={K17.slip} />
			<Write x={96} y={920} text="the water is outside the flask" at={K17.slip + 6} size={50} color={RED_T} />
			<PenRing cx={m.X(590)} cy={m.Y(1040)} rx={230} ry={150} at={K17.water + 8} color={ROSE_S} seed={4} />
			{void K17.big}
		</SVG>
	);
};

// ---------- 18. handoff: one run is one number (final frame; chem-y11-ws-v04 opens on it) ----------
const K18 = cues(sc('handoff'), {one: 'One run', class: 'So a class', five: 'five times', here: "Here's what", mixed: 'Mixed units', missing: 'missing labels', note: 'a note about', away: 'getting away', next: 'Next time', use: 'use'});
export const NEXT18 = 'Next: How do raw chemistry readings become a usable table or graph?';
export const NB18 = {x: 96, y: 190, w: 1340, size: 38};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const runAt = NOTEBOOK.runs.map((_, i) => K18.one + 20 + i * 20);
	const lh = NB18.size * 1.75;
	const lineY = (i: number) => NB18.y + 40 + (i + 1) * lh;
	const hw = (t: string) => richW([{t}], NB18.size, true, 700);
	const r1 = NOTEBOOK.runs[0], r4 = NOTEBOOK.runs[3];
	const mgX = NB18.x + 90 + hw(r1.slice(0, r1.indexOf('12 mg'))), mgW = hw('12 mg');
	const m4X = NB18.x + 90 + hw(r4.slice(0, r4.indexOf('0.035'))), m4W = hw('0.035,');
	const nextO = prog(f, K18.next, 14);
	const bh = 500;
	return (
		<SVG>
			<Write x={96} y={150} text="One run is one number" at={4} size={60} color={INK} />
			<TopStrips />
			<Notebook x={NB18.x} y={NB18.y} w={NB18.w} head={NOTEBOOK.head} runs={NOTEBOOK.runs} at={runAt} under={{line: 2, from: 'Ribbon floated', at: K18.away}} size={NB18.size} />
			<PenRing cx={mgX + mgW / 2} cy={lineY(0) - 10} rx={mgW / 2 + 16} ry={30} at={K18.mixed} color={ROSE_S} seed={3} />
			<PenRing cx={m4X + m4W / 2} cy={lineY(3) - 10} rx={m4W / 2 + 16} ry={30} at={K18.missing} color={ROSE_S} seed={6} />
			<Write x={NB18.x} y={770} text="mixed units, missing labels, bubbles escaped" at={K18.mixed + 10} size={46} color={ROSE_T} />
			<Plate p={BUR1} x={1640 - pw(BUR1, bh) / 2} y={190} h={bh} />
			<Chip x={1640} y={706} segs={[{t: `one run: ${fix(EL_MM, 1)} ${GMOL}`, c: TEAL_T}]} at={K18.one} size={38} color={TEAL_S} fill={TEAL_SOFT} anchor="middle" />
			{nextO > 0.005 ? (
				<g opacity={nextO}>
					<rect x={96} y={820} width={1728} height={100} rx={24} fill={PAPER} stroke={NAVY_T} strokeWidth={5} />
					<Sx x={130} y={886} text={NEXT18} size={46} color={NAVY_T} weight={800} at={-1000} />
				</g>
			) : null}
			{void K18.five}{void K18.here}{void K18.note}{void K18.use}{void SLATE_S}
		</SVG>
	);
};

// ---------- 19. key notes ----------
const NOTE_SIZE = 36;
export const NOTES: Seg[][][] = [
	[[{t: 'MM = m ÷ n', c: TEAL_T}, {t: ': weigh to get '}, {t: 'm', c: NAVY_T}, {t: '; use a gas volume to find '}, {t: 'n', c: AMB_T}, {t: '.'}]],
	[[{t: 'Equal gas volumes (same T, P) hold equal numbers of particles:'}], [{t: `n = V ÷ ${VM} ${LMOL}`, c: SLATE_T}, {t: ` at ${COND.room}.`}]],
	[[{t: 'Element: '}, {t: 'Mg + 2HCl → MgCl_2 + H_2'}, {t: ', so '}, {t: 'n(Mg) = n(H_2)', c: AMB_T}, {t: '.'}]],
	[[{t: "Compound: a volatile liquid's vapour fills the flask;"}], [{t: 'n(vapour) = n(compound)', c: AMB_T}, {t: '.'}]],
	[[{t: 'n too small or m too big gives '}, {t: 'MM too high', c: ROSE_T}], [{t: '(escaped gas, oxide, wet flask).'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const DUR = dur('key-notes');
	const outA = DUR - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 52 + 30;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={INK} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 52} segs={l} size={NOTE_SIZE} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1320} y={262} width={504} height={470} rx={22} fill={PAPER} stroke={INK} strokeWidth={4} />
					<rect x={1330} y={272} width={484} height={450} rx={16} fill="none" stroke={INK} strokeWidth={2} />
					<Sx x={1356} y={320} text="memory aid" size={34} color={INK} hand weight={700} at={-1000} />
					<Sx x={1356} y={430} text="Weigh it," size={60} color={NAVY_T} hand weight={700} at={-1000} />
					<Sx x={1356} y={520} text="count it with a gas," size={56} color={SLATE_T} hand weight={700} at={-1000} />
					<Sx x={1356} y={610} text="then divide." size={60} color={TEAL_T} hand weight={700} at={-1000} />
					<Sx x={1356} y={690} text="MM = m ÷ n" size={36} color={TEAL_T} weight={800} at={-1000} />
				</Fade>
			</Fade>
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void ROSE_T;
