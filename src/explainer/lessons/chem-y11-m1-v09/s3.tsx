// Y11 Chem M1 V09 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures: the mass spectrometer as
// the source of the data, and a two-row "? %" table; ring from "Pause here", 10 s countdown), brief feedback (navy
// givens strip, small balanced beam computed from the same abundances, green framed answers, one red crossed slip),
// the handoff (hydrogen glows in a few sharp colours: the final frame V10 opens on) and the key notes with the
// "leans toward the crowd" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {H2TUBE, MSPEC, hold, sc} from './common';
import {
	AMB, AMB_INK, BalanceBeam, CL35, CL37, Card, Chip, DataTable, DrawPath, E_INK, Fade, Framed, GREEN_T, Heading, INK, MIX, MOD_H, MOD_L, Nucleus, PURE, PauseHoldR, Plate, RED, Rich,
	SVG, Sx, TEAL_INK, WRow, Write, chipW, plateMap, prog, ramp, richW,
} from './parts';
import type {Seg} from './parts';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const mw = plateMap(MSPEC, 0, 0, 280).w;
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Rich x={140} y={300} segs={[{t: 'A model element has two isotopes with masses 22 and 24.'}]} size={38} weight={700} />
			<Rich x={140} y={358} segs={[{t: 'Their abundances are 70.0% and 30.0% respectively.'}]} size={38} weight={700} />
			<Rich x={140} y={416} segs={[{t: 'Calculate the relative atomic mass of the element.'}]} size={38} weight={700} />
			<Sx x={140} y={500} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={MSPEC} x={1800 - mw} y={470} h={280} />
			<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1100} cy={700} />
		</SVG>
	);
};

// ---------- feedback beams ----------
const XF = (lo: number) => (m: number) => 1250 + (m - lo) * 225;

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {fr: 'As fractions', t22: 'Twenty-two times', t24: 'twenty-four times', together: 'Together', between: 'between twenty-two', t23: 'Twenty-three', avoid: 'to avoid'});
export const SceneFeedback1: React.FC = () => {
	const X = XF(22);
	const slip: Seg[] = [{t: '(22 + 24) ÷ 2 = 23'}];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'masses 22 and 24     |     abundances 70.0% and 30.0%'}]} />
			<Rich x={110} y={316} segs={[{t: 'Task: ', c: AMB_INK}, {t: 'calculate the relative atomic mass'}]} size={36} weight={700} />
			<WRow x={110} y={390} segs={[{t: 'fractions: '}, {t: '0.700', c: AMB_INK}, {t: ' and '}, {t: '0.300', c: AMB_INK}]} at={K12.fr + 30} leave={K12.t22} />
			<WRow x={110} y={460} segs={[{t: '22 × 0.700 = 15.4'}]} at={K12.t22} leave={K12.t24} />
			<WRow x={110} y={540} segs={[{t: '24 × 0.300 = 7.2'}]} at={K12.t24} leave={K12.together} />
			<Framed x={110} y={660} segs={[{t: 'Ar = 15.4 + 7.2 = '}, {t: '22.6', c: GREEN_T}]} at={K12.together} size={52} />
			<Chip x={110} y={766} segs={slip} at={K12.t23} size={44} color={AMB_INK} strike={K12.t23 + 20} />
			<Write x={110 + chipW(slip, 44, false) + 30} y={816} text="the crowd is at 22" at={K12.avoid - 10} size={42} color={RED} />
			<BalanceBeam X={X} from={21.6} to={24.4} y={700} ticks={[22, 23, 24]} stacks={[{m: 22, n: 70, iso: MOD_L, cols: 5}, {m: 24, n: 30, iso: MOD_H, cols: 5}]} pivot={22.6} r={10} gap={22} readout="22.6" rw={200} readoutAt={K12.together} />
			<Rich x={110} y={924} segs={[{t: 'method: Ar = sum of (mass × fraction)', c: PURE}]} size={36} weight={700} />
			<Write x={1150} y={936} text="between 22 and 24, nearer 22" at={K12.between} size={42} color={PURE} />
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Rich x={140} y={300} segs={[{t: 'Assume that an element has only two isotopes,'}]} size={38} weight={700} />
		<Rich x={140} y={358} segs={[{t: 'with masses 63 and 65. Its relative atomic mass is 63.60.'}]} size={38} weight={700} />
		<Rich x={140} y={416} segs={[{t: 'Calculate the percentage abundance of each isotope.'}]} size={38} weight={700} />
		<Sx x={140} y={500} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<DataTable x={1280} y={470} w={500} cols={[30, 290]} head={['isotope', 'abundance']} size={44} rh={72} rows={[
			[{t: 'mass 63'}, {t: '? %', c: AMB_INK}],
			[{t: 'mass 65'}, {t: '? %', c: AMB_INK}],
		]} />
		<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1100} cy={700} />
	</SVG>
);

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {letx: 'Let x be', eq: 'equals sixty-three', simp: 'which simplifies', sox: 'So x is', p30: 'thirty percent', swap: "Don't swap", so: 'so sixty-three'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const X = XF(63);
	const g0 = 'masses 63 and 65     |     Ar 63.60     |     ', g1 = 'only two isotopes';
	const u0 = 124 + richW([{t: g0}], 36, false, 700), u1 = u0 + richW([{t: g1}], 36, false, 700);
	const drop = K14.p30 - 40;
	const stacks = [{m: 63, n: ramp(f, drop, drop + 50, 0, 70), iso: MOD_L, cols: 5}, {m: 65, n: ramp(f, drop + 8, drop + 40, 0, 30), iso: MOD_H, cols: 5}];
	const slip: Seg[] = [{t: 'mass 63: 30%,  mass 65: 70%'}];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: g0}, {t: g1}]} />
			<DrawPath d={`M${u0},${246} L${u1},${246}`} at={K14.letx} dur={14} color={AMB} width={5} />
			<Rich x={110} y={316} segs={[{t: 'Task: ', c: AMB_INK}, {t: 'find the percentage abundance of each isotope'}]} size={36} weight={700} />
			<WRow x={110} y={390} segs={[{t: 'let '}, {t: 'x', c: TEAL_INK}, {t: ' = fraction of mass 63'}]} at={K14.letx} leave={K14.eq} big={44} />
			<Fade at={-1000} out={K14.eq - 8}>
				<Sx x={110} y={482} text="weighted average, written with x:" size={30} color={INK} weight={700} at={-1000} />
				<Rich x={110} y={548} segs={[{t: 'Ar = 63 × '}, {t: 'x', c: TEAL_INK}, {t: ' + 65 × '}, {t: '(1 − x)', c: TEAL_INK}]} size={44} />
			</Fade>
			<WRow x={110} y={460} segs={[{t: '63'}, {t: 'x', c: TEAL_INK}, {t: ' + 65(1 − '}, {t: 'x', c: TEAL_INK}, {t: ') = 63.60'}]} at={K14.eq} leave={K14.simp} />
			<WRow x={110} y={540} segs={[{t: '65 − 2'}, {t: 'x', c: TEAL_INK}, {t: ' = 63.60'}]} at={K14.simp} leave={K14.sox} />
			<Framed x={110} y={650} segs={[{t: 'x', c: TEAL_INK}, {t: ' = '}, {t: '0.70', c: GREEN_T}]} at={K14.sox} size={52} tick={false} />
			<Framed x={110} y={760} segs={[{t: 'mass 63: 70%,  mass 65: 30%', c: GREEN_T}]} at={K14.p30} size={52} />
			<Chip x={110} y={816} segs={slip} at={K14.swap} size={40} color={AMB_INK} strike={K14.so} />
			<Rich x={110} y={938} segs={[{t: 'two isotopes: fractions ', c: PURE}, {t: 'x', c: TEAL_INK}, {t: ' and ', c: PURE}, {t: '1 − x', c: TEAL_INK}]} size={36} weight={700} />
			<Write x={110 + chipW(slip, 40, false) + 26} y={864} text="that gives 64.4" at={K14.so + 10} size={42} color={RED} />
			<BalanceBeam X={X} from={62.6} to={65.4} y={700} ticks={[63, 64, 65]} stacks={stacks} outlines={[{m: 63, n: 70, cols: 5, color: MOD_L.stroke}, {m: 65, n: 30, cols: 5, color: MOD_H.stroke}]} pivot={63.6} r={10} gap={22} readout="63.60" rw={220} />
			<Fade at={-1000} out={drop}>
				<Rich x={X(63)} y={540} segs={[{t: 'x', c: TEAL_INK}]} size={60} anchor="middle" />
				<Rich x={X(65)} y={648} segs={[{t: '1 − x', c: TEAL_INK}]} size={36} anchor="middle" />
			</Fade>
		</SVG>
	);
};

// ---------- 15. handoff: what are the electrons doing? (final frame; V10 opens on it) ----------
const K15 = cues(sc('handoff'), {same: 'electrons are the same', clue: 'Our best clue', rainbow: 'whole rainbow', next: 'Next time', atom: 'in an atom'});
const XR = (m: number) => 860 + (m - 35) * 190;
/** Hydrogen's four visible lines (nm) on a 400 to 700 nm band. */
const HLINES: [number, string][] = [[410, '#7a4fd0'], [434, '#3a5cf0'], [486, '#2fb8c8'], [656, '#e8392f']];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const tubeW = 1000, th = (tubeW / H2TUBE.box[2]) * H2TUBE.box[3];
	const SX = 1490, SW = 334;
	const lx = (nm: number) => SX + ((700 - nm) / 300) * SW; // red on the left, as in V10
	const recap = 1 - prog(f, K15.clue - 20, 16);
	return (
		<SVG>
			<Heading text="Next: what are the electrons doing?" at={0} />
			<Nucleus cx={175} cy={300} p={17} n={18} r={6} />
			<Nucleus cx={340} cy={300} p={17} n={20} r={6} />
			<Rich x={175} y={392} segs={[{t: '^{35}Cl'}]} size={34} anchor="middle" />
			<Rich x={340} y={392} segs={[{t: '^{37}Cl'}]} size={34} anchor="middle" />
			<Sx x={258} y={440} text="nuclei: done" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* a small atom: the electrons are the open question */}
			<Fade at={0}>
				<circle cx={290} cy={660} r={150} fill="#dceaf7" stroke="#2f7fc4" strokeWidth={4} />
				<Nucleus cx={290} cy={660} p={1} n={0} r={14} />
				<Sx x={372} y={640} text="?" size={72} color={E_INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Write x={110} y={900} text="what are the electrons doing?" at={K15.same} out={K15.next} size={42} color={E_INK} />
			{/* recap: Ar is about the nuclei and how common each is */}
			{recap > 0.01 ? <g opacity={recap}>
				<BalanceBeam X={XR} from={34.6} to={37.4} y={560} ticks={[35, 36, 37]} stacks={[{m: 35, n: 76, iso: CL35, cols: 6}, {m: 37, n: 24, iso: CL37, cols: 6}]} pivot={35.48} r={7} gap={15} readout="Ar ≈ 35.5" rw={300} />
				<Sx x={1390} y={400} text="nuclei + how common" size={38} color={INK} weight={800} at={-1000} />
				<Sx x={1390} y={448} text="each isotope is" size={38} color={INK} weight={800} at={-1000} />
			</g> : null}
			{/* hydrogen glows in a few sharp colours */}
			<Plate p={H2TUBE} x={460} y={470} h={th} at={K15.clue} />
			<Fade at={K15.clue + 10}>
				<rect x={SX} y={470} width={SW} height={170} rx={8} fill="#1d1b2a" stroke={INK} strokeWidth={3} />
			</Fade>
			{HLINES.map(([nm, c], i) => <Fade key={nm} at={K15.clue + 40 + i * 8}><rect x={lx(nm) - 4} y={478} width={8} height={154} fill={c} /></Fade>)}
			<Sx x={SX + SW / 2} y={690} text="a few sharp lines" size={30} color={INK} anchor="middle" weight={800} at={K15.clue + 70} />
			<Sx x={960} y={440} text="hydrogen gas, glowing" size={38} color={INK} anchor="middle" weight={800} at={K15.clue + 10} />
			<Fade at={K15.rainbow}>
				<defs>
					<linearGradient id="v9rainbow" x1="0" x2="1" y1="0" y2="0">
						{['#e8392f', '#f08a24', '#f2d22e', '#3fae4a', '#2fb8c8', '#3a5cf0', '#7a4fd0'].map((c, i) => <stop key={c} offset={i / 6} stopColor={c} />)}
					</linearGradient>
				</defs>
				<rect x={SX} y={330} width={SW} height={84} rx={8} fill="url(#v9rainbow)" stroke={INK} strokeWidth={3} />
			</Fade>
			{f >= K15.rainbow + 12 ? <DrawPath d={`M${SX + 4},${418} L${SX + SW - 4},${326}`} at={K15.rainbow + 12} dur={10} color={RED} width={7} /> : null}
			<Chip x={960} y={840} segs={[{t: 'How do line spectra reveal discrete atomic energy levels?'}]} at={K15.atom} size={40} color={PURE} anchor="middle" />
		</SVG>
	);
};

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: "Ar: weighted average mass of an element's atoms", c: PURE}], [{t: '(carbon-12 = 12). No units.'}]],
	[[{t: 'Ar = sum of (isotope mass × fraction)'}], [{t: 'fraction = % ÷ 100', c: AMB_INK}]],
	[[{t: 'Check: between the isotope masses,'}], [{t: 'nearer the more common one.'}]],
	[[{t: 'No single atom has mass Ar:'}], [{t: 'it is a sample average.'}]],
	[[{t: 'Two isotopes, one unknown: '}, {t: 'x', c: TEAL_INK}, {t: ' and '}, {t: '1 − x', c: TEAL_INK}], [{t: 'State the two-isotope assumption.'}]],
];
const XN = (m: number) => 1310 + (m - 35) * 180;
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 26;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 48} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
			{rows}
			<Fade at={6}>
				<rect x={1170} y={290} width={654} height={590} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<rect x={1180} y={300} width={634} height={570} rx={16} fill="none" stroke={PURE} strokeWidth={2} />
				<Sx x={1206} y={344} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1497} y={426} text="The average leans" size={52} color={PURE} anchor="middle" hand at={-1000} />
				<Sx x={1497} y={496} text="toward the crowd." size={52} color={PURE} anchor="middle" hand at={-1000} />
				<BalanceBeam X={XN} from={34.55} to={37.45} y={706} ticks={[35, 36, 37]} stacks={[{m: 35, n: 76, iso: CL35, cols: 8}, {m: 37, n: 24, iso: CL37, cols: 8}]} pivot={35.48} r={6} gap={13} barH={40} labelSize={30} />
				<Sx x={1497} y={850} text="balance point = Ar" size={30} color={PURE} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{void AMB}
		</SVG>
	);
};
