// Y11 Chem M1 V07 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures, the ring from "Pause
// here", 10 s countdown), brief feedback (navy givens strip, mass bar from the same numbers, green framed answers, one
// red crossed slip), the handoff to nuclide notation (the final frame V08 opens on) and the key notes with the "Count
// every atom" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, Lines, QTag} from '../chem-y11-m1-v01/s3';
import {CRU_B, F_MGSO4, F_NACL, SALT, SJAR, hold, sc} from './common';
import {
	AMB, AMB_INK, Card, Chip, DrawPath, EL, Fade, Framed, Heading, INK, MIX, MassBar, PURE, PauseHoldR, Plate, RED, Rich, SVG, Sx, WATER_INK, Write, prog, richW, smooth, tw,
} from './parts';
import type {Seg} from './parts';

const GREEN_T = '#2f8a5b';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Lines x={140} y={290} size={38} lh={58} lines={[
			[{t: 'Using relative atomic masses Na = 23.0 and Cl = 35.5,'}],
			[{t: 'calculate the percentage by mass of chlorine in sodium'}],
			[{t: 'chloride, NaCl.'}],
		]} />
		<Sx x={140} y={500} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<rect x={140} y={580} width={300} height={100} fill={EL.Na} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		<rect x={440} y={580} width={300} height={100} fill={EL.Cl} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		<Sx x={290} y={646} text="Na" size={48} color="#fff" anchor="middle" weight={800} at={-1000} />
		<Sx x={590} y={646} text="Cl" size={48} color="#fff" anchor="middle" weight={800} at={-1000} />
		<Sx x={290} y={740} text="? %" size={44} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={590} y={740} text="? %" size={44} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
		<Plate p={SJAR} x={1500} y={250} h={360} />
		<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1220} cy={680} />
	</SVG>
);

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {rfm: 'The relative formula', f58: 'fifty-eight', chl: 'Chlorine is', s60: 'sixty point', one: 'One of the two', slip: 'classic slip', heavier: 'is heavier', mass: 'the mass.'});
export const SceneFeedback1: React.FC = () => {
	const r1 = [{t: 'Mr(NaCl) = '}, {t: '23.0 + 35.5', c: PURE}, {t: ' = 58.5'}];
	const r2 = [{t: '% Cl = '}, {t: '35.5 ÷ 58.5', c: PURE}, {t: ' × 100 = '}];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'Na 23.0     |     Cl 35.5     |     NaCl'}]} />
			<MassBar F={F_NACL} x={110} y={310} w={640} h={90} at={[K12.rfm + 20, K12.rfm + 40]} sel={{Cl: K12.s60}} />
			<Sx x={110 + 640 * 35.5 / 58.5 + 140} y={450} text="60.7%" size={40} color={AMB_INK} anchor="middle" weight={800} at={K12.s60} />
			<Rich x={110} y={560} segs={r1.map((s, i) => ({...s, at: [K12.rfm, K12.rfm + 40, K12.f58][i]}))} at={K12.rfm} size={52} />
			<Rich x={110} y={660} segs={r2.map((s, i) => ({...s, at: [K12.chl, K12.chl + 20, K12.chl + 100][i]}))} at={K12.chl} size={52} />
			<Framed x={110 + richW(r2, 52)} y={660} segs={[{t: '60.7%', c: GREEN_T}]} at={K12.s60} size={52} />
			<Chip x={110} y={730} segs={[{t: '1 of 2 atoms = 50%'}]} at={K12.one} size={40} color={RED} strike={K12.slip} />
			<Write x={560} y={782} text="count ≠ mass" at={K12.slip + 8} size={44} color={RED} />
			<Plate p={SJAR} x={1500} y={290} h={330} />
			<Chip x={1580} y={660} segs={[{t: 'Cl 60.7%, Na 39.3%'}]} at={K12.heavier} size={44} color={GREEN_T} anchor="middle" />
			{void K12.mass}
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const wh = (300 / SALT.box[2]) * SALT.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<Lines x={140} y={290} size={38} lh={58} lines={[
				[{t: 'Magnesium sulfate heptahydrate has the formula MgSO_4·7H_2O.'}],
				[{t: 'Using Mg = 24.3, S = 32.1, O = 16.0 and H = 1.0, calculate'}],
				[{t: 'the percentage by mass of water in this hydrate.'}],
			]} />
			<Sx x={140} y={500} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SALT} x={1490} y={300} h={wh} />
			<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1220} cy={680} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {mg: 'The magnesium sulfate', four: 'twenty point four', seven: 'Seven waters', z126: 'twenty-six', total: 'So the total', water: 'and water is', f51: 'fifty-one', counting: 'Counting only', avoid: 'to avoid'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const r1 = [{t: 'MgSO_4 = '}, {t: '24.3 + 32.1 + 4 × 16.0', c: PURE}, {t: ' = '}];
	const r2 = [{t: '7 H_2O = '}, {t: '7 × 18.0', c: PURE}, {t: ' = '}];
	const r3 = [{t: 'Mr = 120.4 + 126.0 = 246.4'}];
	const r4 = [{t: '% H_2O = '}, {t: '126.0 ÷ 246.4', c: PURE}, {t: ' × 100 = '}];
	const gx0 = 124 + tw('Mg 24.3   |   S 32.1   |   O 16.0   |   H 1.0   |   MgSO', 36, false, 700);
	const wh = (240 / SALT.box[2]) * SALT.box[3];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'Mg 24.3   |   S 32.1   |   O 16.0   |   H 1.0   |   MgSO_4·7H_2O'}]} />
			{f >= K14.seven ? <DrawPath d={`M${gx0 + 14},248 L${gx0 + 120},248`} at={K14.seven} dur={12} color={WATER_INK} width={5} /> : null}
			<MassBar F={F_MGSO4} x={110} y={300} w={800} h={80} at={[K14.mg, K14.mg + 8, K14.mg + 16, K14.seven + 10]} sel={{H2O: K14.f51}} size={30} />
			<Plate p={SALT} x={1560} y={300} h={wh} />
			<Rich x={110} y={490} segs={r1} size={48} at={K14.mg} />
			<Framed x={110 + richW(r1, 48)} y={490} segs={[{t: '120.4', c: '#a35c00'}]} at={K14.four} size={48} tick={false} stroke="#e8a33d" />
			<Rich x={110} y={580} segs={r2} size={48} at={K14.seven} />
			<Framed x={110 + richW(r2, 48)} y={580} segs={[{t: '126.0', c: '#a35c00'}]} at={K14.z126} size={48} tick={false} stroke="#e8a33d" />
			<Rich x={110} y={670} segs={r3} size={44} at={K14.total} />
			<Rich x={110} y={765} segs={r4} size={52} at={K14.water} />
			<Framed x={110 + richW(r4, 52)} y={765} segs={[{t: '51.1%', c: GREEN_T}]} at={K14.f51} size={52} />
			<Chip x={110} y={815} segs={[{t: 'one H_2O: 18.0 ÷ 138.4 × 100 = 13.0%'}]} at={K14.counting} size={38} color={RED} strike={K14.avoid} />
			<Write x={920} y={865} text="count all seven waters" at={K14.avoid + 6} size={44} color={RED} />
			{void smooth}{void prog}
		</SVG>
	);
};

// ---------- 15. handoff: what's inside an atom? (final frame; V08 opens on it) ----------
const K15 = cues(sc('handoff'), {using: "We've been using", inside: "comes from what's inside", chem: 'Chemists can write', t35: 'thirty-five', s17: 'seventeen', symbol: 'the symbol', next: 'Next time', ion: 'an ion'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const lift = smooth(prog(f, K15.inside - 20, 30));
	const x0 = 640 + 640 * 23 / 58.5, w0 = 640 * 35.5 / 58.5;
	const bx = x0 + (860 - x0) * lift, by = 230 + (330 - 230) * lift, bw = w0 + (300 - w0) * lift, bh = 80 + (300 - 80) * lift;
	return (
		<SVG>
			<Plate p={SJAR} x={150} y={360} h={380} />
			<MassBar F={[F_NACL[0]]} x={640} y={230} w={640 * 23 / 58.5} h={80} />
			<rect x={bx} y={by} width={bw} height={bh} rx={12 * lift} fill={EL.Cl} stroke={INK} strokeWidth={4} />
			<Sx x={bx + bw / 2} y={by + bh / 2 + 12 + 50 * lift} text="Cl" size={34 + 130 * lift} color="#fff" anchor="middle" weight={800} at={-1000} />
			<Write x={880} y={300} text="what's inside?" at={K15.inside} out={K15.ion - 30} size={42} color={INK} />
			<Sx x={850} y={420} text="35" size={52} color={INK} anchor="end" weight={800} at={K15.t35} />
			<Sx x={850} y={620} text="17" size={52} color={INK} anchor="end" weight={800} at={K15.s17} />
			<Sx x={770} y={420} text="?" size={52} color={AMB_INK} anchor="end" weight={800} at={K15.t35 + 10} />
			<Sx x={770} y={620} text="?" size={52} color={AMB_INK} anchor="end" weight={800} at={K15.s17 + 10} />
			<Chip x={960} y={760} segs={[{t: 'How does nuclide notation tell us the particles in an atom or ion?'}]} at={K15.ion} size={38} color={PURE} anchor="middle" />
			{void K15.using}{void K15.chem}{void K15.symbol}{void K15.next}{void AMB}
		</SVG>
	);
};

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: "A compound's atom ratio is fixed,"}], [{t: 'so its formula gives its percentages.'}]],
	[[{t: '% of element = (number of atoms × Ar) ÷ Mr × 100', c: PURE}]],
	[[{t: 'Mr = the sum of every Ar in the formula.'}], [{t: 'Ar and Mr have no units.'}]],
	[[{t: 'Count every atom: NH_4NO_3 has 2 N.', c: AMB_INK}], [{t: 'Atom share is not mass share.', c: AMB_INK}]],
	[[{t: 'Hydrates: the dot means water in the crystal.', c: WATER_INK}], [{t: 'CuSO_4·5H_2O is 36.1% water.', c: WATER_INK}]],
];
export const SceneNotes: React.FC = () => {
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 24;
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
				<rect x={1260} y={290} width={564} height={280} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1290} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1300} y={430} text="Count every atom," size={52} color={AMB_INK} hand at={-1000} />
				<Sx x={1300} y={510} text="then it's part over whole." size={44} color={PURE} hand at={-1000} />
				<Plate p={CRU_B} x={1440} y={610} h={300} />
			</Fade>
		</SVG>
	);
};
