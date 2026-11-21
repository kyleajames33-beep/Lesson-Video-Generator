// Y11 Chem M2 V02 scenes 14 to 19: two HSC-style attempts (whole card with a neutral painted picture: the gas jar,
// the calcium chloride sample; ring full from "Pause here", 10 s countdown; no bridge on the first card), brief
// feedback (navy givens strip, green framed answers, one red crossed slip each; the bridge returns in feedback 1 with
// its divide arrow ringed; a CaCl2 formula unit splits into its ions in feedback 2), the handoff (the final frame:
// the balance with the ribbon at 0.24 g, the violet N_A card, "n(Mg) = ? mol", the small bridge and the "Next" chip)
// and the key notes with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CACL2, D, JAR, NA_S, NA_UNIT, R, dur, fix, hold, ph, pw, sc, sci} from './common';
import {
	AMB_S, AMB_T, Ball, Bridge, Card, Chip, Fade, Framed, GREEN_S, Givens, Heading, INK, NAVY_T, PAPER, PauseHoldR, PenArrow, PenRing, Plate, QTag, RED_T, Reveal, Rich, richW,
	SVG, SmallBridge, Sx, VIO_S, VIO_SOFT, VIO_T, Write, lerp, prog, span, MoleTile,
} from './parts';
import type {BridgeG, Seg} from './parts';
import {BAL1, BalRibbon} from './s1';

const Q: React.FC<{lines: Seg[][]; y0?: number; lh?: number; size?: number}> = ({lines, y0 = 300, lh = 66, size = 44}) => <>{lines.map((l, i) => <Rich key={i} x={150} y={y0 + i * lh} segs={l} size={size} weight={700} />)}</>;
const NA_GIVEN = `N_A = ${NA_S} ${NA_UNIT}`;

// ---------- 14. attempt 1 ----------
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const jh = 620;
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Q lines={[[{t: `A balloon contains ${sci(D.a1.N, 2)} atoms of helium.`}], [{t: 'Calculate the chemical amount of helium,'}], [{t: 'in moles.'}], [{t: `(${NA_GIVEN})`}]]} y0={320} lh={76} />
			<Plate p={JAR} x={1640 - pw(JAR, jh) / 2} y={250} h={jh} />
			<PauseHoldR h={hold('attempt-1')} at={K14.pause} x={150} y={800} cx={1060} cy={760} />
			{void K14.turn}
		</SVG>
	);
};

// ---------- 15. feedback 1 ----------
const K15 = cues(sc('feedback-1'), {neq: 'n equals', nine: 'Nine point', zero: 'is zero point', atoms: 'helium atoms', mult: 'Multiplying', impossible: 'impossible', slip: 'slip', avoid: 'avoid'});
const B15: BridgeG = {x: 1090, y: 300, wN: 300, wn: 290, h: 130, gap: 144, size: 32};
export const SceneFeedback1: React.FC = () => {
	const row: Seg[] = [{t: 'n = '}, {t: sci(D.a1.N, 2), c: NAVY_T}, {t: ' ÷ '}, {t: NA_S, c: VIO_T}];
	const wrong = `${sci(D.a1.N, 2)} × ${NA_S} = ${sci(R.a1wrong, 2)} mol`;
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: `N = ${sci(D.a1.N, 2)} helium atoms     |     ${NA_GIVEN}`}]} />
			<Bridge g={B15} NLines={['N: particles']} nLines={['n: amount (mol)']} hiDiv={K15.atoms} arrowSize={34} />
			<Plate p={JAR} x={1460 - pw(JAR, 420) / 2} y={480} h={420} />
			<Sx x={1460} y={935} text="helium" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Reveal at={K15.neq} dur={14}><Rich x={96} y={370} segs={[{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'N', c: NAVY_T}, {t: ' ÷ '}, {t: 'N_A', c: VIO_T}]} size={56} /></Reveal>
			<Reveal at={K15.nine} dur={40}><Rich x={96} y={480} segs={row} size={56} /></Reveal>
			<Framed x={96} y={620} segs={[{t: `= ${fix(R.a1, 3)} mol`, c: AMB_T}, {t: ' of He atoms', c: INK}]} at={K15.zero} size={60} stroke={GREEN_S} />
			<Chip x={96} y={710} segs={[{t: wrong}]} at={K15.mult} size={40} color={RED_T} strike={K15.slip} />
			<Write x={96} y={880} text="multiplying: an impossible answer" at={K15.impossible} size={52} color={RED_T} />
			<Write x={600} y={370} text="particles → moles: divide" at={K15.neq + 10} size={46} color={NAVY_T} />
			{void K15.avoid}
		</SVG>
	);
};

// ---------- 16. attempt 2 ----------
const K16 = cues(sc('attempt-2'), {last: 'Last one', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const cw = 720;
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Q lines={[[{t: 'Calculate the number of chloride ions'}], [{t: `in ${fix(D.a2.n, 3)} mol of calcium chloride, CaCl_2.`}], [{t: `(${NA_GIVEN})`}]]} y0={330} lh={76} />
			<Plate p={CACL2} x={1800 - cw} y={470} h={ph(CACL2, cw)} />
			<Sx x={1440} y={760} text="calcium chloride" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<PauseHoldR h={hold('attempt-2')} at={K16.pause} x={150} y={800} cx={1060} cy={760} />
			{void K16.last}
		</SVG>
	);
};

// ---------- 17. feedback 2 ----------
const K17 = cues(sc('feedback-2'), {each: 'Each formula unit', two: 'two chloride ions', mcl: 'moles of chloride ions', times: 'Times N A', two41: 'two point four one', forget: 'Forgetting the two', not: 'not chloride ions'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const split = span(f, K17.each + 10, K17.each + 36);
	const cx = 350, cy = 500;
	const r1: Seg[] = [{t: 'n(Cl^{−}) = '}, {t: `${D.a2.clPer}`, c: RED_T}, {t: ' × '}, {t: fix(D.a2.n, 3), c: AMB_T}, {t: ' = '}, {t: `${fix(R.a2n, 3)} mol`, c: AMB_T}];
	const r2: Seg[] = [{t: 'N(Cl^{−}) = '}, {t: fix(R.a2n, 3), c: AMB_T}, {t: ' × '}, {t: NA_S, c: VIO_T}];
	const WX = 680;
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: `${fix(D.a2.n, 3)} mol CaCl_2     |     ${NA_GIVEN}`}]} />
			<rect x={96} y={290} width={560} height={380} rx={18} fill={PAPER} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<Sx x={120} y={336} text="one formula unit of CaCl_2" size={30} color={INK} weight={800} at={-1000} />
			<Ball el="Cl" x={cx - lerp(80, 170, split)} y={cy} r={56} sign="−" />
			<Ball el="Cl" x={cx + lerp(80, 170, split)} y={cy} r={56} sign="−" />
			<Ball el="Ca" x={cx} y={cy} r={48} sign="2+" />
			<Sx x={cx} y={636} text="1 Ca^{2+}   +   2 Cl^{−}" size={38} color={INK} anchor="middle" weight={800} at={K17.each + 30} />
			<Write x={cx} y={730} text="2 chloride ions per unit" at={K17.two} size={46} color={NAVY_T} anchor="middle" />
			<Plate p={CACL2} x={110} y={760} h={ph(CACL2, 500)} />
			<Rich x={WX} y={400} segs={[{t: 'N(Cl^{−}) = '}, {t: '?', c: NAVY_T}]} size={56} at={-1000} out={K17.mcl - 34} />
			<Reveal at={K17.mcl - 30} dur={36}><Rich x={WX} y={400} segs={r1} size={54} /></Reveal>
			<Reveal at={K17.times} dur={30}><Rich x={WX} y={520} segs={r2} size={54} /></Reveal>
			<Framed x={WX} y={660} segs={[{t: `= ${sci(R.a2N, 2)}`, c: NAVY_T}, {t: ' chloride ions', c: INK}]} at={K17.two41} size={56} stroke={GREEN_S} />
			<Chip x={WX} y={740} segs={[{t: `${fix(D.a2.n, 3)} × ${NA_S} = ${sci(R.a2wrong, 2)}`}]} at={K17.forget} size={44} color={RED_T} strike={K17.not} />
			<Write x={WX} y={900} text="that's formula units, not chloride ions" at={K17.not + 6} size={48} color={RED_T} />
		</SVG>
	);
};

// ---------- 18. handoff: we weigh, we don't count (final frame; chem-y11-m2-v03 opens on it) ----------
const K18 = cues(sc('handoff'), {so: 'So the mole lets', lab: 'in the lab', dont: "we don't count", weigh: 'we weigh them', ribbon: 'This ribbon', how: 'How many moles', next: 'Next time', molar: 'molar mass', moles: ['moles', 2]});
export const NEXT18 = 'Next: How does molar mass turn a measured mass into moles?';
export const NA_CARD18 = {x: 96, y: 200, w: 900, h: 120};
export const ASK18 = {x: 1000, y: 680};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const nextO = prog(f, K18.next, 14);
	return (
		<SVG>
			<Heading text="The mole: counting particles" at={-1000} />
			<SmallBridge />
			<Fade at={-1000}>
				<rect x={NA_CARD18.x} y={NA_CARD18.y} width={NA_CARD18.w} height={NA_CARD18.h} rx={18} fill={VIO_SOFT} stroke={VIO_S} strokeWidth={5} />
				<Rich x={NA_CARD18.x + 30} y={NA_CARD18.y + 78} segs={[{t: `1 mol = ${NA_S} particles `, c: VIO_T}, {t: '(N_A)', c: VIO_T}]} size={46} />
			</Fade>
			<BalRibbon x={BAL1.x} y={BAL1.y} h={BAL1.h} />
			<Fade at={K18.so} out={K18.dont - 12}>
				<MoleTile x={1000} y={300} w={300} h={220} seed={71} />
				<Write x={1340} y={420} text="a count chemists" at={K18.so + 10} size={50} color={AMB_T} />
				<Write x={1340} y={480} text="can handle" at={K18.so + 20} size={50} color={AMB_T} />
			</Fade>
			<Write x={1000} y={440} text="in the lab: we don't count particles," at={K18.dont} size={48} color={INK} />
			<Write x={1000} y={510} text="we weigh them" at={K18.weigh} size={48} color={INK} />
			<PenArrow a={[990, 500]} b={[600, 560]} at={K18.ribbon} color={INK} bend={0.2} />
			<Rich x={ASK18.x} y={ASK18.y} segs={[{t: 'n(Mg) = ', c: AMB_T}, {t: '? mol', c: AMB_T}]} size={72} at={K18.how} />
			<PenRing cx={ASK18.x + richW([{t: 'n(Mg) = '}], 72) + richW([{t: '? mol'}], 72) / 2} cy={ASK18.y - 26} rx={richW([{t: '? mol'}], 72) / 2 + 14} ry={58} at={K18.how + 16} color={AMB_S} seed={4} />
			{nextO > 0.005 ? (
				<g opacity={nextO}>
					<rect x={96} y={790} width={1728} height={110} rx={24} fill={PAPER} stroke={NAVY_T} strokeWidth={5} />
					<Sx x={130} y={862} text={NEXT18} size={48} color={NAVY_T} weight={800} at={-1000} />
				</g>
			) : null}
			{void K18.so}{void K18.lab}{void K18.molar}{void K18.moles}
		</SVG>
	);
};

// ---------- 19. key notes ----------
const NOTE_SIZE = 36;
export const NOTES: Seg[][][] = [
	[[{t: '1 mol = '}, {t: NA_S, c: NAVY_T}, {t: ' particles; '}, {t: `N_A = ${NA_S} ${NA_UNIT}`, c: VIO_T}]],
	[[{t: 'n', c: AMB_T}, {t: ': chemical amount (mol); '}, {t: 'N', c: NAVY_T}, {t: ': number of particles (no unit)'}]],
	[[{t: 'N', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'N_A', c: VIO_T}, {t: '        '}, {t: 'n', c: AMB_T}, {t: ' = '}, {t: 'N', c: NAVY_T}, {t: ' ÷ '}, {t: 'N_A', c: VIO_T}]],
	[[{t: 'Equal moles, equal numbers of particles,'}], [{t: 'whatever their mass ('}, {t: '1 mol H_2', c: AMB_T}, {t: ' and '}, {t: '1 mol O_2', c: AMB_T}, {t: ').'}]],
	[[{t: 'Name the particle: '}, {t: `${fix(D.co2.n, 2)} mol CO_2`, c: AMB_T}, {t: ' holds '}, {t: `${fix(R.co2On, 1)} mol O atoms`, c: AMB_T}, {t: ';'}], [{t: `${D.nacl.n} mol NaCl`, c: AMB_T}, {t: ' holds '}, {t: `${2 * D.nacl.n} mol of ions`, c: AMB_T}, {t: '.'}]],
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
					<rect x={1280} y={262} width={544} height={470} rx={22} fill={PAPER} stroke={INK} strokeWidth={4} />
					<rect x={1290} y={272} width={524} height={450} rx={16} fill="none" stroke={INK} strokeWidth={2} />
					<Sx x={1316} y={320} text="memory aid" size={34} color={INK} hand weight={700} at={-1000} />
					<Sx x={1316} y={420} text="A mole is a count," size={56} color={AMB_T} hand weight={700} at={-1000} />
					<Sx x={1316} y={500} text="so always say" size={56} color={NAVY_T} hand weight={700} at={-1000} />
					<Sx x={1316} y={580} text="a mole of what." size={56} color={NAVY_T} hand weight={700} at={-1000} />
					<Sx x={1316} y={680} text="atoms, molecules or ions?" size={34} color={INK} weight={700} at={-1000} />
				</Fade>
			</Fade>
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void Ball; void Chip;
