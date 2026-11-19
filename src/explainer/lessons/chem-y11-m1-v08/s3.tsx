// Y11 Chem M1 V08 scenes 11 to 16: two HSC-style attempts (whole card with neutral pictures: the magnesium ribbon, and
// a periodic table strip as a data sheet would give; ring from "Pause here", 10 s countdown), brief feedback (navy
// givens strip, green framed answers, one red crossed slip), the handoff (two chlorine nuclei and the 35.45 box: the
// final frame V09 opens on) and the key notes with the "Protons pick the element" card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {CLJAR, MGRIB, hold, sc} from './common';
import {
	AMB, AMB_INK, Card, Chip, DrawPath, E_INK, Fade, Framed, Heading, INK, MIX, N_INK, Nuclide, Nucleus, P_INK, PTStrip, PURE, PauseHoldR, PenRing, Plate, RED, Rich, SVG, Sx,
	Write, ptXY, prog, richW, tw,
} from './parts';
import type {Seg} from './parts';

const GREEN_T = '#2f8a5b';

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const mh = (300 / MGRIB.box[2]) * MGRIB.box[3];
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Rich x={140} y={300} segs={[{t: 'Two particles are represented by'}]} size={38} weight={700} />
			<Nuclide x={830} y={320} sym="Mg" A={24} Z={12} q="2+" size={72} numSize={34} />
			<Rich x={1060} y={300} segs={[{t: 'and'}]} size={38} weight={700} />
			<Nuclide x={1210} y={320} sym="Mg" A={25} Z={12} q="2+" size={72} numSize={34} />
			<Rich x={140} y={450} segs={[{t: '(a)  State the number of protons, neutrons and electrons'}]} size={38} weight={700} />
			<Rich x={140} y={506} segs={[{t: '      in each particle.'}]} size={38} weight={700} />
			<Rich x={140} y={580} segs={[{t: '(b)  Identify the relationship between the two particles.'}]} size={38} weight={700} />
			<Sx x={140} y={680} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={MGRIB} x={1480} y={420} h={mh} />
			<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1220} cy={760} />
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {twelve: 'twelve protons', ten: 'ten electrons', lost: 'were lost', differ: 'neutrons differ', t24: 'Twenty-four minus', t25: 'twenty-five minus', thirteen: 'thirteen.', isotopes: "they're isotopes", charge: 'same charge', fourteen: 'Fourteen electrons', positive: 'A positive charge', gained: 'not gained'});
export const SceneFeedback1: React.FC = () => {
	const C1 = 560, C2 = 1060, mh = (240 / MGRIB.box[2]) * MGRIB.box[3];
	const rows: {y: number; name: string; c: string; a: string; b: string; at: number; at2: number}[] = [
		{y: 470, name: 'protons', c: P_INK, a: '12', b: '12', at: K12.twelve, at2: K12.twelve},
		{y: 560, name: 'electrons', c: E_INK, a: '12 − 2 = 10', b: '10', at: K12.ten, at2: K12.ten},
		{y: 650, name: 'neutrons', c: N_INK, a: '24 − 12 = 12', b: '25 − 12 = 13', at: K12.t24, at2: K12.t25},
	];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: '^{24}Mg^{2+}     |     ^{25}Mg^{2+}     |     Z = 12, charge 2+'}]} />
			<Nuclide x={C1 + 20} y={390} sym="Mg" A={24} Z={12} q="2+" size={64} numSize={30} />
			<Nuclide x={C2 + 20} y={390} sym="Mg" A={25} Z={12} q="2+" size={64} numSize={30} />
			<line x1={130} x2={1440} y1={412} y2={412} stroke={INK} strokeWidth={2} />
			{rows.map(r => (
				<g key={r.name}>
					<Sx x={130} y={r.y} text={r.name} size={44} color={r.c} weight={800} at={r.at} />
					<Sx x={C1} y={r.y} text={r.a} size={44} color={INK} weight={800} at={r.at} />
					<Sx x={C2} y={r.y} text={r.b} size={44} color={INK} weight={800} at={r.at2} />
				</g>
			))}
			<Framed x={130} y={780} segs={[{t: '(b) isotopes, both 2+ ions', c: GREEN_T}]} at={K12.isotopes} size={52} />
			<Chip x={130} y={820} segs={[{t: 'electrons = 12 + 2 = 14'}]} at={K12.fourteen} size={40} color={RED} strike={K12.positive} />
			<Write x={720} y={872} text="positive: electrons lost" at={K12.positive + 8} size={44} color={RED} />
			<Plate p={MGRIB} x={1520} y={430} h={mh} />
			{void K12.lost}{void K12.differ}{void K12.thirteen}{void K12.charge}{void K12.gained}
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
		<Rich x={140} y={290} segs={[{t: 'A particle contains 16 protons, 18 neutrons and 18 electrons.'}]} size={38} weight={700} />
		<Rich x={140} y={348} segs={[{t: 'Write the nuclide notation for this particle, including its'}]} size={38} weight={700} />
		<Rich x={140} y={406} segs={[{t: 'charge, and name the element.'}]} size={38} weight={700} />
		<Sx x={140} y={490} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<Sx x={1240} y={500} text="data: periodic table (rows 1 to 3)" size={30} color={INK} weight={700} at={-1000} />
		<PTStrip x={1240} y={520} />
		<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={760} cy={700} />
	</SVG>
);

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {sulfur: 'sulfur.', mass: 'The mass number', t34: ['thirty-four.', 1], two: 'two more electrons', minus: 'two minus.', so: "So it's", writing: 'Writing fifty-two', never: 'never the electrons'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const [bx, by] = ptXY(1240, 520, 16);
	const r1 = [{t: 'Z = 16: '}], r2 = [{t: 'A = 16 + 18 = '}], r3 = [{t: 'charge = 16 − 18 = '}];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: '16 protons     |     18 neutrons     |     18 electrons'}]} />
			<PTStrip x={1240} y={520} hi={16} hiAt={K14.sulfur - 10} />
			<PenRing cx={bx + 30} cy={by + 35} rx={50} ry={50} at={K14.sulfur - 10} color={AMB} seed={2} />
			<Rich x={130} y={400} segs={r1} size={52} at={K14.sulfur - 20} />
			<Framed x={130 + richW(r1, 52)} y={400} segs={[{t: 'sulfur', c: GREEN_T}]} at={K14.sulfur} size={52} />
			<Rich x={130} y={500} segs={r2} size={52} at={K14.mass} />
			<Framed x={130 + richW(r2, 52)} y={500} segs={[{t: '34', c: GREEN_T}]} at={K14.t34} size={52} />
			<Rich x={130} y={600} segs={r3} size={52} at={K14.two} />
			<Framed x={130 + richW(r3, 52)} y={600} segs={[{t: '2−', c: GREEN_T}]} at={K14.minus} size={52} />
			{/* the label builds number by number */}
			<g>
				<Sx x={1000} y={370} text="34" size={44} color={INK} anchor="end" weight={800} at={K14.t34} />
				<Sx x={1000} y={460} text="16" size={44} color={INK} anchor="end" weight={800} at={K14.sulfur} />
				<Sx x={1010} y={460} text="S" size={110} color={INK} weight={800} at={K14.sulfur} />
				<Sx x={1010 + tw('S', 110, false, 800) + 8} y={370} text="2−" size={44} color={'#0b625d'} weight={800} at={K14.minus} />
				{f >= K14.so ? <><rect x={900} y={290} width={300} height={200} rx={14} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, K14.so, 10)} /><DrawPath d="M1212,390 L1224,403 L1248,374" at={K14.so + 10} dur={10} color={GREEN_T} width={7} /></> : null}
			</g>
			<Chip x={130} y={680} segs={[{t: 'A = 16 + 18 + 18 = 52'}]} at={K14.writing} size={40} color={RED} strike={K14.never - 10} />
			<Write x={130} y={830} text="A counts the nucleus only" at={K14.never} size={44} color={RED} />
			{void AMB_INK}
		</SVG>
	);
};

// ---------- 15. handoff: whole numbers, and 35.45 (final frame; V09 opens on it) ----------
const K15 = cues(sc('handoff'), {whole: 'counts whole particles', look: 'look up chlorine', listed: 'listed as', all: 'at all.', next: 'Next time', average: 'an average', weighted: 'weighted by'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<SVG>
			<Nucleus cx={420} cy={470} p={17} n={18} r={16} />
			<Nucleus cx={1500} cy={470} p={17} n={20} r={16} />
			<Rich x={420} y={720} segs={[{t: '^{35}Cl'}]} size={64} anchor="middle" />
			<Rich x={1500} y={720} segs={[{t: '^{37}Cl'}]} size={64} anchor="middle" />
			<Sx x={420} y={770} text="17 protons, 18 neutrons" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={1500} y={770} text="17 protons, 20 neutrons" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<g opacity={prog(f, K15.look, 12)}>
				<rect x={830} y={320} width={260} height={300} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<Sx x={850} y={372} text="17" size={44} color={INK} weight={800} at={-1000} />
				<Sx x={960} y={500} text="Cl" size={120} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={960} y={584} text="35.45" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<PenRing cx={960} cy={566} rx={100} ry={40} at={K15.all - 10} color={AMB} seed={3} />
			<Sx x={1090} y={590} text="?" size={60} color={AMB_INK} weight={800} at={K15.all} />
			{f >= K15.weighted - 20 ? <g opacity={prog(f, K15.weighted - 20, 12)}>
				<line x1={500} y1={850} x2={1420} y2={810} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<path d="M960,830 L985,880 L935,880 Z" fill={INK} />
				<Sx x={520} y={820} text="?" size={52} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1400} y={780} text="?" size={52} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Chip x={960} y={180} segs={[{t: 'Why is relative atomic mass a weighted average?'}]} at={K15.average} size={40} color={PURE} anchor="middle" />
			{void K15.whole}{void K15.listed}{void K15.next}
		</SVG>
	);
};

// ---------- 16. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Proton +1, neutron 0: mass 1, in the nucleus.'}], [{t: 'Electron −1, mass ≈ 0.'}]],
	[[{t: 'Z (bottom) = protons: it fixes the element.', c: P_INK}], [{t: 'A (top) = protons + neutrons.'}]],
	[[{t: 'Neutrons = A − Z.   Electrons = Z − charge.', c: PURE}]],
	[[{t: 'Isotopes: same Z, different neutrons.', c: N_INK}], [{t: 'Ions: same protons, different electrons.', c: E_INK}]],
	[[{t: 'Too many or too few neutrons:'}], [{t: 'unstable (radioactive).'}]],
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
	const jh = 300, jw = (jh / CLJAR.box[3]) * CLJAR.box[2];
	return (
		<SVG>
			<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
			<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
			{rows}
			<Fade at={6}>
				<rect x={1170} y={290} width={654} height={330} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Sx x={1210} y={420} text="Protons pick the element," size={46} color={P_INK} hand at={-1000} />
				<Sx x={1210} y={490} text="neutrons pick the isotope," size={46} color={N_INK} hand at={-1000} />
				<Sx x={1210} y={560} text="electrons pick the charge." size={46} color={E_INK} hand at={-1000} />
				<Plate p={CLJAR} x={1500 - jw / 2} y={640} h={jh} />
			</Fade>
		</SVG>
	);
};
