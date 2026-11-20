// Y11 Chem M1 V09 scenes 1 to 5: V08's final frame (the 35.45 box between the two chlorine nuclei) with the painted
// chlorine jar and the simple-average number line; the hundred-atom sample (a magnifier on the jar, 100 tokens that
// sort into 76 and 24, the tally); the definition board (mass spectrometer large, the Ar definition and the data
// table); the fraction shortcut in the calculation layout; and the chlorine balance beam whose pivot slides to the
// weighted mean computed from the same 76 and 24.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CLJAR, MSPEC, sc} from './common';
import {
	AMB, AMB_INK, BalanceBeam, CL35, CL37, Chip, DataTable, DrawPath, Fade, Framed, GREEN_T, Heading, INK, Nucleus, PURE, PenArrow, PenRing, Plate, RED, Rich, SVG, Sx,
	Readout, TaskStrip, TickMark, Tok, WRow, Write, balancePoint, clamp01, lerp, plateMap, prog, ramp, richW, smooth, tw,
} from './parts';
import type {Seg} from './parts';

// ---------- 1. hook: 35.45 belongs to no atom (opens on V08's final frame) ----------
const K1 = cues(sc('hook'), {chlorine: 'chlorine on the', five2: ['five', 2], six: 'is thirty-six', from: 'come from'});
const NL_X = (m: number) => 560 + (m - 35) * 470;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, 8, 30));
	const n35x = lerp(420, 560, mv), n37x = 1500, ny = lerp(470, 420, mv), ns = lerp(1, 0.8, mv);
	const ly = lerp(720, 600, mv), lsz = lerp(64, 56, mv);
	const tagT = '35.45 is about these atoms', tagW = tw(tagT, 42, true, 700);
	const beamO = 1 - prog(f, K1.six - 26, 14);
	const nl = prog(f, K1.six - 12, 14);
	return (
		<SVG>
			<Nucleus cx={n35x} cy={ny} p={17} n={18} r={16} scale={ns} />
			<Nucleus cx={n37x} cy={ny} p={17} n={20} r={16} scale={ns} />
			<Rich x={n35x} y={ly} segs={[{t: '^{35}Cl'}]} size={lsz} anchor="middle" />
			<Rich x={n37x} y={ly} segs={[{t: '^{37}Cl'}]} size={lsz} anchor="middle" />
			<g opacity={1 - prog(f, 2, 12)}>
				<Sx x={420} y={770} text="17 protons, 18 neutrons" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				<Sx x={1500} y={770} text="17 protons, 20 neutrons" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			</g>
			<rect x={830} y={320} width={260} height={300} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<Sx x={850} y={372} text="17" size={44} color={INK} weight={800} at={-1000} />
			<Sx x={960} y={500} text="Cl" size={120} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={960} y={584} text="35.45" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
			<PenRing cx={960} cy={566} rx={100} ry={40} at={-1000} color={AMB} seed={3} />
			<Sx x={1090} y={590} text="?" size={60} color={AMB_INK} weight={800} at={-1000} />
			{beamO > 0.01 ? <g opacity={beamO}>
				<line x1={500} y1={850} x2={1420} y2={810} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<path d="M960,830 L985,880 L935,880 Z" fill={INK} />
				<Sx x={520} y={820} text="?" size={52} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1400} y={780} text="?" size={52} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Chip x={960} y={180} segs={[{t: 'Why is relative atomic mass a weighted average?'}]} at={-1000} size={40} color={PURE} anchor="middle" />
			{/* the real jar these atoms come from */}
			<Plate p={CLJAR} x={96} y={330} h={420} at={K1.chlorine} dy={30} />
			<Sx x={192} y={796} text="chlorine gas" size={34} color={INK} anchor="middle" weight={800} at={K1.chlorine + 10} />
			<Write x={110} y={292} text={tagT} at={K1.chlorine + 16} size={42} color={PURE} />
			<PenArrow a={[124 + tagW, 282]} b={[826, 336]} at={K1.chlorine + 40} color={PURE} bend={-0.18} />
			{/* no atom has 35.45 */}
			<Write x={n35x} y={662} text="mass 35" at={K1.five2} size={42} color={INK} anchor="middle" />
			<Write x={n37x} y={662} text="mass 37" at={K1.five2 + 6} size={42} color={INK} anchor="middle" />
			<Chip x={960} y={645} segs={[{t: 'no atom = 35.45'}]} at={K1.five2 + 10} size={44} color={INK} anchor="middle" />
			{/* the simple average */}
			{nl > 0.01 ? <g opacity={nl}>
				<line x1={500} x2={1560} y1={800} y2={800} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{[35, 36, 37].map(m => <g key={m}><line x1={NL_X(m)} x2={NL_X(m)} y1={788} y2={812} stroke={INK} strokeWidth={4} /><Sx x={NL_X(m)} y={848} text={`${m}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} /></g>)}
				<circle cx={NL_X(36)} cy={800} r={11} fill={AMB} stroke={AMB_INK} strokeWidth={3} />
				<path d={`M${NL_X(35.45)},797 L${NL_X(35.45) + 14},772 L${NL_X(35.45) - 14},772 Z`} fill={PURE} />
				<Sx x={NL_X(35.45)} y={760} text="35.45" size={34} color={PURE} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Chip x={NL_X(36)} y={866} segs={[{t: 'simple average: 36'}]} at={K1.six} size={44} color={AMB_INK} anchor="middle" strike={K1.from} />
			<Write x={1290} y={918} text="not the simple average" at={K1.from + 4} size={42} color={RED} />
			<Heading text="Relative atomic mass: a weighted average" at={K1.from - 12} />
		</SVG>
	);
};

// ---------- 2. a sample of a hundred atoms ----------
const K2 = cues(sc('hundred-atoms'), {common: 'not equally common', seven: 'chlorine-thirty-seven', share: 'share the total', s76: 'Seventy-six atoms', s24: 'twenty-four atoms', gives: 'gives three thousand', that: "that's thirty-five", most: 'most of the atoms'});
/** A fixed shuffle of 0..99: grid cell p holds token PERM[p]; tokens 0..75 are chlorine-35. */
const PERM = (() => {
	const a = Array.from({length: 100}, (_, i) => i);
	let s = 9;
	for (let i = 99; i > 0; i--) { s = (s * 1103515245 + 12345) % 2147483648; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
	return a;
})();
const gridXY = (p: number): [number, number] => [690 + ((p % 10) - 4.5) * 58, 560 + (Math.floor(p / 10) - 4.5) * 58];
/** Sorted slot of token t: green block (8 wide, from the bottom) or dark block (3 wide). */
const sortXY = (t: number): [number, number] => (t < 76 ? [386 + (t % 8) * 52, 776 - Math.floor(t / 8) * 52] : [840 + ((t - 76) % 3) * 52, 776 - Math.floor((t - 76) / 3) * 52]);
const NL2 = (m: number) => 1200 + (m - 35) * 260;
export const SceneHundred: React.FC = () => {
	const f = useCurrentFrame();
	const jr = smooth(prog(f, 0, 20));
	const jh = lerp(420, 300, jr), jy = lerp(330, 420, jr);
	const jm = plateMap(CLJAR, 96, jy, jh);
	const lens: [number, number] = [jm.X(459), jm.Y(900)];
	const mag = prog(f, 12, 14);
	const shareW = tw('total ÷ number of atoms', 42, true, 700);
	let n35 = 0, n37 = 0;
	PERM.forEach((t, p) => { if (f >= 14 + p * 0.45 + 5) { if (t < 76) n35++; else n37++; } });
	return (
		<SVG>
			<Heading text="A real sample: count 100 atoms" at={0} />
			<Plate p={CLJAR} x={96} y={jy} h={jh} />
			<Sx x={164} y={760} text="chlorine gas" size={30} color={INK} anchor="middle" weight={800} at={14} />
			{mag > 0.01 ? <g opacity={mag}>
				<path d={`M${lens[0]},${lens[1]} L300,262 L300,888 Z`} fill="rgba(60,45,20,0.06)" stroke="rgba(60,45,20,0.35)" strokeWidth={2} strokeDasharray="8 7" />
				<rect x={300} y={250} width={780} height={650} rx={24} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<circle cx={lens[0]} cy={lens[1]} r={34} fill="rgba(255,255,255,0.35)" stroke={INK} strokeWidth={5} />
			</g> : null}
			{PERM.map((t, p) => {
				const o = prog(f, 14 + p * 0.45, 10);
				if (o <= 0.01) return null;
				const s = smooth(prog(f, K2.seven + (p % 25) * 1.2, 32));
				const [gx, gy] = gridXY(p), [sx, sy] = sortXY(t);
				return <Tok key={p} x={lerp(gx, sx, s)} y={lerp(gy, sy, s)} r={22} iso={t < 76 ? CL35 : CL37} o={o} />;
			})}
			<Write x={316} y={236} text="not half and half" at={K2.common} size={42} color={AMB_INK} />
			<Rich x={568} y={862} segs={[{t: '76 × ^{35}Cl', c: CL35.ink}]} size={52} anchor="middle" at={K2.seven + 34} />
			<Rich x={892} y={862} segs={[{t: '24 × ^{37}Cl', c: CL37.ink}]} size={52} anchor="middle" at={K2.seven + 40} />
			{/* the tally */}
			<g opacity={1 - prog(f, K2.share - 14, 12)}>
				<Sx x={1150} y={320} text="chlorine-35 atoms" size={30} color={CL35.ink} weight={800} at={14} />
				<Readout x={1150} y={332} w={300} text={`${n35}`} size={52} color={CL35.ink} anchor="middle" at={14} />
				<Sx x={1500} y={320} text="chlorine-37 atoms" size={30} color={CL37.ink} weight={800} at={14} />
				<Readout x={1500} y={332} w={300} text={`${n37}`} size={52} color={CL37.ink} anchor="middle" at={14} />
				<Sx x={1150} y={480} text="atoms in the sample" size={30} color={INK} weight={800} at={14} />
				<Readout x={1150} y={492} w={300} text={`${n35 + n37}`} size={52} color={INK} anchor="middle" at={14} />
			</g>
			<Write x={1150} y={310} text="total ÷ number of atoms" at={K2.share} size={42} color={INK} />
			{f >= K2.share + 20 ? <DrawPath d={`M1150,326 L${1150 + shareW},326`} at={K2.share + 20} dur={12} color={INK} width={4} /> : null}
			<Rich x={1150} y={400} segs={[{t: '76 × 35', c: CL35.ink}, {t: ' = 2660'}]} size={44} at={K2.s76} />
			<Rich x={1150} y={470} segs={[{t: '24 × 37', c: CL37.ink}, {t: ' = 888'}]} size={44} at={K2.s24} />
			<Rich x={1150} y={540} segs={[{t: 'total = 3548'}]} size={44} at={K2.gives} />
			<Framed x={1150} y={660} segs={[{t: '3548 ÷ 100 = '}, {t: '35.48', c: GREEN_T}]} at={K2.that} size={52} />
			<Fade at={K2.most - 20}>
				<line x1={1170} x2={1770} y1={800} y2={800} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{[35, 36, 37].map(m => <g key={m}><line x1={NL2(m)} x2={NL2(m)} y1={788} y2={812} stroke={INK} strokeWidth={4} /><Sx x={NL2(m)} y={846} text={`${m}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} /></g>)}
				<path d={`M${NL2(35.48)},797 L${NL2(35.48) + 14},772 L${NL2(35.48) - 14},772 Z`} fill={PURE} />
				<Sx x={NL2(35.48)} y={760} text="35.48" size={34} color={PURE} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<PenArrow a={[692, 850]} b={[1318, 812]} at={K2.most} color={GREEN_T} bend={0.25} />
			<Write x={1390} y={912} text="pulled towards 35" at={K2.most + 14} size={42} color={GREEN_T} />
		</SVG>
	);
};

// ---------- 3. weighted average, and what Ar means ----------
const K3 = cues(sc('weighted-average'), {common: 'so the common isotope', rel: 'Relative atomic mass', carbon: 'carbon-twelve', units: 'no units', pct: 'The percentages', abund: 'called abundances', spec: 'mass spectrometer', sorts: 'which sorts atoms', given: 'simply given'});
export const SceneWeighted: React.FC = () => {
	const f = useCurrentFrame();
	const ringW = tw('76 ×', 44, false, 800), ringX = 380 + ringW / 2 - 4;
	const unitsW = tw('no units', 42, true, 700);
	const toks: React.ReactNode[] = [];
	for (let t = 0; t < 100; t++) {
		const [x, y] = t < 76 ? [118 + (t % 8) * 17, 382 - Math.floor(t / 8) * 17] : [272 + ((t - 76) % 3) * 17, 382 - Math.floor((t - 76) / 3) * 17];
		toks.push(<Tok key={t} x={x} y={y} r={7} iso={t < 76 ? CL35 : CL37} />);
	}
	return (
		<SVG>
			<Heading text="A weighted average: what Ar means" at={0} />
			{toks}
			<Rich x={380} y={300} segs={[{t: '76 × 35', c: CL35.ink}]} size={44} />
			<Rich x={380} y={372} segs={[{t: '24 × 37', c: CL37.ink}]} size={44} />
			<PenRing cx={ringX} cy={286} rx={ringW / 2 + 16} ry={34} at={K3.common} color={AMB} seed={4} />
			<Write x={590} y={300} text="counts 76 times" at={K3.common + 8} size={42} color={AMB_INK} />
			<Sx x={110} y={448} text="mass spectrometer" size={34} color={INK} weight={800} at={-1000} />
			<Plate p={MSPEC} x={96} y={470} h={400} />
			<Sx x={110} y={920} text="measures abundances (how it works: later)" size={34} color={INK} weight={800} at={K3.spec + 6} />
			<g opacity={1 - prog(f, K3.pct - 14, 12)}>
				<Write x={900} y={640} text="a weighted average:" at={14} size={42} color={PURE} />
				<Rich x={900} y={706} segs={[{t: '76 × 35', c: CL35.ink}, {t: ' + '}, {t: '24 × 37', c: CL37.ink}, {t: ' = 3548'}]} size={44} />
				<Rich x={900} y={780} segs={[{t: '3548 ÷ 100 = '}, {t: '35.48', c: GREEN_T}]} size={52} />
				<Write x={900} y={850} text="each mass counted as often as it occurs" at={60} size={42} color={INK} />
			</g>
			{/* the definition */}
			<Rich x={900} y={290} segs={[{t: 'Relative atomic mass, Ar', c: PURE}]} size={52} at={K3.rel} />
			<Rich x={900} y={356} segs={[{t: 'the '}, {t: 'weighted average', c: PURE}, {t: ' mass of the atoms'}]} size={42} weight={700} at={K3.rel + 8} />
			<Rich x={900} y={410} segs={[{t: 'in a natural sample of an element,'}]} size={42} weight={700} at={K3.rel + 16} />
			<Rich x={900} y={464} segs={[{t: 'on the scale where carbon-12 = 12 exactly'}]} size={42} weight={700} at={K3.carbon} />
			<Write x={900} y={536} text="no units" at={K3.units} size={42} color={INK} />
			{f >= K3.units + 12 ? <DrawPath d={`M900,552 L${900 + unitsW},552`} at={K3.units + 12} dur={10} color={INK} width={4} /> : null}
			<Rich x={900} y={600} segs={[{t: 'abundance: ', c: AMB_INK}, {t: '% of the atoms that are each isotope'}]} size={34} weight={700} at={K3.abund} />
			<Fade at={K3.pct}>
				<DataTable x={900} y={636} w={760} cols={[24, 270, 430]} head={['isotope', 'mass', 'abundance']} rows={[
					[{t: '^{35}Cl', c: CL35.ink}, {t: '35'}, {t: '75.77%', c: AMB_INK}],
					[{t: '^{37}Cl', c: CL37.ink}, {t: '37'}, {t: '24.23%', c: AMB_INK}],
				]} />
			</Fade>
			<PenArrow a={[800, 640]} b={[892, 704]} at={K3.sorts} color={INK} bend={0.25} />
			<PenRing cx={1390} cy={772} rx={96} ry={66} at={K3.sorts + 10} color={AMB} seed={6} />
			<Write x={1560} y={884} text="given" at={K3.given - 6} size={42} color={AMB_INK} />
			{void clamp01}
		</SVG>
	);
};

// ---------- 4. the shortcut with fractions ----------
const K4 = cues(sc('fractions'), {turn: 'Turn each percentage', pct2: ['percent', 2], t35: 'Thirty-five times', t37: 'Thirty-seven times', add: ['Add them', 2], about: 'about thirty-five', table: 'The periodic table', exact: 'exact mass'});
const EQ: Seg[] = [{t: 'Ar = (mass_1 × '}, {t: 'fraction_1', c: AMB_INK}, {t: ') + (mass_2 × '}, {t: 'fraction_2', c: AMB_INK}, {t: ')'}];
export const SceneFractions: React.FC = () => {
	const f = useCurrentFrame();
	const eqS = Math.min(52, Math.floor((1150 * 52) / richW(EQ, 52)));
	const exW = tw('exact masses 34.97 and 36.97 give 35.45 (the periodic table value)', 30, false, 700);
	return (
		<SVG>
			<Heading text="The shortcut: use fractions" at={0} />
			<TaskStrip text="calculate the relative atomic mass of chlorine" />
			<Rich x={110} y={330} segs={EQ} size={eqS} />
			<Write x={110} y={398} text="fraction = % ÷ 100" at={K4.turn} size={42} color={AMB_INK} />
			{/* givens card: the data table */}
			<rect x={1290} y={280} width={534} height={236} rx={16} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Sx x={1312} y={318} text="givens" size={28} color={PURE} weight={800} at={-1000} />
			{['isotope', 'mass', '%', 'fraction'].map((t, i) => <Sx key={t} x={[1312, 1440, 1530, 1680][i]} y={366} text={t} size={28} color={PURE} weight={700} at={i === 3 ? K4.pct2 : -1000} />)}
			<line x1={1306} x2={1808} y1={380} y2={380} stroke={PURE} strokeWidth={2} />
			<Rich x={1312} y={432} segs={[{t: '^{35}Cl', c: CL35.ink}]} size={34} />
			<Rich x={1440} y={432} segs={[{t: '35', c: PURE}]} size={34} />
			<Rich x={1530} y={432} segs={[{t: '75.77%', c: AMB_INK}]} size={34} />
			<Rich x={1680} y={432} segs={[{t: '0.7577', c: AMB_INK}]} size={34} at={K4.pct2} />
			<Rich x={1312} y={492} segs={[{t: '^{37}Cl', c: CL37.ink}]} size={34} />
			<Rich x={1440} y={492} segs={[{t: '37', c: PURE}]} size={34} />
			<Rich x={1530} y={492} segs={[{t: '24.23%', c: AMB_INK}]} size={34} />
			<Rich x={1680} y={492} segs={[{t: '0.2423', c: AMB_INK}]} size={34} at={K4.pct2 + 8} />
			{/* the struck simple average from the hook, and the jar */}
			<Chip x={1290} y={570} segs={[{t: '(35 + 37) ÷ 2 = 36'}]} at={-1000} size={40} color={AMB_INK} strike={-1000} />
			<Sx x={1290} y={704} text="not the simple average" size={42} color={RED} hand weight={700} at={-1000} />
			<Plate p={CLJAR} x={1730} y={560} h={200} />
			{/* working */}
			<g opacity={1 - prog(f, K4.t35 - 14, 12)}>
				<Rich x={110} y={490} segs={[{t: '75.77% ÷ 100 = '}, {t: '0.7577', c: AMB_INK}]} size={44} at={K4.turn + 30} />
				<Rich x={110} y={570} segs={[{t: '24.23% ÷ 100 = '}, {t: '0.2423', c: AMB_INK}]} size={44} at={K4.turn + 40} />
			</g>
			<g opacity={1 - prog(f, K4.add - 14, 12)}>
				<Sx x={110} y={790} text="from the 100-atom count:" size={30} color={INK} weight={700} at={-1000} />
				<Rich x={110} y={846} segs={[{t: '3548 ÷ 100 = 35.48'}]} size={38} weight={700} />
			</g>
			<WRow x={110} y={490} segs={[{t: '35 × 0.7577 = 26.5195  (≈ 26.52)'}]} at={K4.t35} leave={K4.t37} />
			<WRow x={110} y={570} segs={[{t: '37 × 0.2423 = 8.9651  (≈ 8.97)'}]} at={K4.t37} leave={K4.add} />
			<WRow x={110} y={668} segs={[{t: 'Ar = 26.5195 + 8.9651 = 35.4846'}]} at={K4.add} />
			<Framed x={110} y={776} segs={[{t: 'Ar ≈ '}, {t: '35.48 ≈ 35.5', c: GREEN_T}]} at={K4.about} size={52} />
			<Sx x={110} y={846} text="add the unrounded values: rounding each first gives 35.49" size={30} color={INK} weight={700} at={K4.about + 14} />
			<Sx x={110} y={886} text="the 100-atom count gave 35.48 ≈ 35.5 too" size={30} color={INK} weight={700} at={K4.about + 24} />
			<Sx x={110} y={926} text="exact masses 34.97 and 36.97 give 35.45 (the periodic table value)" size={30} color={INK} weight={700} at={K4.exact} />
			<TickMark x={110 + exW + 34} y={914} at={K4.exact + 10} />
			{void K4.table}{void K4.add}
		</SVG>
	);
};

// ---------- 5. picture it as a balance ----------
const K5 = cues(sc('balance'), {stack: 'stack each one', is: 'how common it is', rel: 'The relative atomic mass', three: 'With three quarters', point: 'the balance point', avg: 'The average leans'});
const X5 = (m: number) => 260 + (m - 34) * 350;
export const SceneBalance: React.FC = () => {
	const f = useCurrentFrame();
	const n35 = ramp(f, K5.stack, K5.stack + 56, 0, 76), n37 = ramp(f, K5.stack + 12, K5.stack + 44, 0, 24);
	const stacks = [{m: 35, n: n35, iso: CL35, cols: 6, total: 76}, {m: 37, n: n37, iso: CL37, cols: 6, total: 24}];
	const bal = balancePoint([{m: 35, n: 76, iso: CL35, cols: 4}, {m: 37, n: 24, iso: CL37, cols: 4}]) ?? 36;
	const pivot = ramp(f, K5.rel + 10, K5.three, 36, bal);
	const memT = 'The average leans toward the crowd.', memW = tw(memT, 52, true, 700) + 80;
	return (
		<SVG>
			<Heading text="Picture it as a balance" at={0} />
			<BalanceBeam X={X5} from={33.75} to={38.25} y={640} ticks={[34, 35, 36, 37, 38]} stacks={stacks} pivot={pivot} readout={pivot.toFixed(2)} hover={100} r={13} gap={27} />
			<Fade at={-1000} out={K5.avg - 14}>
				<Sx x={1250} y={214} text="from the 100-atom count:" size={30} color={INK} weight={800} at={-1000} />
				<Rich x={1250} y={272} segs={[{t: '76 atoms at mass 35', c: CL35.ink}]} size={44} />
				<Rich x={1250} y={330} segs={[{t: '24 atoms at mass 37', c: CL37.ink}]} size={44} />
			</Fade>
			<Rich x={110} y={900} segs={[{t: 'Ar', c: PURE}, {t: ' = where the beam balances'}]} size={44} at={K5.rel} />
			<Fade at={-1000} out={K5.rel}>
				<Write x={1110} y={798} text="pivot starts at 36, the simple average" at={-1000} size={42} color={PURE} />
				<Rich x={110} y={900} segs={[{t: 'Each token is one atom: the beam carries all 100.'}]} size={38} weight={700} />
			</Fade>
			<Write x={720} y={470} text="76 here, 24 there" at={K5.is} size={42} color={AMB_INK} />
			<Write x={X5(pivot) + 150} y={798} text="balances here" at={K5.point} size={42} color={PURE} />
			<PenArrow a={[X5(pivot) + 150, 758]} b={[X5(pivot) + 40, 712]} at={K5.point + 6} color={PURE} bend={0.2} />
			<Fade at={K5.avg}>
				<rect x={1824 - memW} y={196} width={memW} height={118} rx={20} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
				<Sx x={1824 - memW / 2} y={274} text={memT} size={52} color={PURE} anchor="middle" hand weight={700} at={-1000} />
			</Fade>
		</SVG>
	);
};
