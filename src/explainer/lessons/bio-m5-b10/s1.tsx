// B10 scenes 1 to 4: the hook (Morgan's white-eyed flies were all male), sex chromosomes (one X in a male, so one
// recessive allele shows), Morgan's cross on a square split into daughters and sons, and haemophilia ("of all
// children" against "of sons"). Every box and fraction comes from the shared cross logic.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CPLUM, Fade, GREYT, GREY_INK, GenoTag, GreyTag, HAEM, Heading, INK, INK_SOFT, MORGAN, MORGAN_F2, Overlay, PL10, PSym, PlateB, Punnett, Ring, S,
	SexChrom, Sx, TEALC, affectedSon, fadeV, lerp, pgeom, prog, pulse,
} from './shared';

const fmt = (n: number) => n.toLocaleString('en-AU');
const Jar: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={34} fill="rgba(255,253,248,0.55)" stroke={INK_SOFT} strokeWidth={4} />
		<rect x={x - w / 2 + 18} y={y - h / 2 - 26} width={w - 36} height={30} rx={8} fill="#e8dcc4" stroke={INK_SOFT} strokeWidth={3} />
		<path d={`M${x - w / 2 + 20},${y - h / 2 + 30} C${x - w / 2 + 14},${y} ${x - w / 2 + 14},${y + h / 4} ${x - w / 2 + 24},${y + h / 2 - 24}`} fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.7} />
	</g>
));

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {rem: 'Remember the white-eyed fruit fly', lab: "Morgan's lab in 1910", crossed: 'He crossed it with red-eyed females', allred: 'all their offspring had red eyes', rec: 'So white was recessive', bred: 'Then he bred those offspring', back: 'white eyes came back', twist: 'But there was a twist', every: 'Every single white-eyed fly', male: 'was male', why: 'Why would eye colour care'});
export const SceneHookB10: React.FC = () => {
	const f = useCurrentFrame();
	const cols: {x: number; p: typeof PL10.flyRed; label: string; n: number; at: number}[] = [
		{x: 330, p: PL10.flyRed, label: 'red-eyed females', n: MORGAN_F2.redF, at: K1.bred + 10},
		{x: 760, p: PL10.flyRed, label: 'red-eyed males', n: MORGAN_F2.redM, at: K1.back - 6},
		{x: 1190, p: PL10.flyWhite, label: 'white-eyed males', n: MORGAN_F2.whiteM, at: K1.back + 4},
	];
	return (
		<>
			<Heading text="When 3 : 1 breaks" at={K1.why} size={64} />
			<Overlay>
				<Jar x={260} y={380} w={240} h={270} o={prog(f, 0, 12)} />
				<PlateB p={PL10.flyWhite} cx={260} cy={390} w={160} o={prog(f, 4, 12)} />
				<GreyTag x={150} y={540} text="B8: a new allele, 1910" at={K1.lab} size={26} />
				{[0, 1, 2].map(i => (
					<g key={i} opacity={prog(f, K1.crossed + 6 + i * 6, 12)}>
						<PlateB p={PL10.flyRed} cx={560 + i * 150} cy={330} w={120} />
						<Sx x={560 + i * 150} y={420} text="female" size={28} color={INK_SOFT} hand anchor="middle" />
					</g>
				))}
				<Sx x={470} y={350} text="×" size={56} color={INK} weight={800} anchor="middle" at={K1.crossed + 4} />
				{Array.from({length: 6}, (_, i) => <PlateB key={i} p={PL10.flyRed} cx={560 + i * 110} cy={lerp(520, 540, prog(f, K1.allred + i * 4, 14))} w={90} o={prog(f, K1.allred + i * 4, 14)} />)}
				<Sx x={1250} y={556} text="almost all red" size={40} color={AMBER_INK} hand at={K1.allred + 24} />
				<Fade at={K1.rec}>
					<rect x={1240} y={300} width={360} height={80} rx={40} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={1420} y={354} text="white: recessive" size={42} color={INK} hand anchor="middle" />
				</Fade>
				{/* the next generation: Morgan's counts */}
				<Fade at={K1.bred}>
					<rect x={120} y={640} width={1700} height={380} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={150} y={690} text="their offspring bred with each other" size={34} color={INK_SOFT} hand />
				</Fade>
				{cols.map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 12)}>
						<PlateB p={c.p} cx={c.x} cy={790} w={110} />
						<Sx x={c.x} y={900} text={c.label} size={32} color={INK} hand anchor="middle" />
						<Sx x={c.x} y={970} text={fmt(c.n)} size={50} color={INK} weight={800} anchor="middle" />
					</g>
				))}
				<g opacity={prog(f, K1.every, 12)}>
					<rect x={1530} y={735} width={120} height={110} rx={16} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={1590} y={900} text="white-eyed females" size={32} color={INK} hand anchor="middle" />
					<Sx x={1590} y={970} text={String(MORGAN_F2.whiteF)} size={50} color={AMBER_INK} weight={800} anchor="middle" />
				</g>
				<Ring cx={1590} cy={954} rx={64} ry={46} at={K1.male} />
				<Ring cx={1190} cy={880} rx={170} ry={120} at={K1.male + 6} seed={6} />
			</Overlay>
		</>
	);
};

// ---------- 2. Sex chromosomes ----------
const K2 = cues(S('sex-chromosomes'), {ans: 'The answer is in the sex chromosomes', flies: 'In fruit flies, as in humans', fem: 'females have two X chromosomes', male: 'males have one X and one Y', gene: 'The eye colour gene is on the X', ynot: "the Y doesn't carry it", two: 'a female has two copies', one: 'a male has only one', white: 'If that one copy is the white allele', hide: "there's no other allele to hide it", eyes: 'so his eyes are white', sl: 'is called sex-linked'});
export const SceneSexChromB10: React.FC = () => {
	const f = useCurrentFrame();
	const slot = prog(f, K2.gene, 12);
	return (
		<>
			<Heading text="Sex chromosomes" at={K2.ans} size={56} />
			<Overlay>
				{/* karyotype strip, small, with the X and Y pair highlighted */}
				<g opacity={prog(f, K2.ans, 14)}>
					{Array.from({length: 23}, (_, i) => {
						const x = 760 + i * 44, auto = i < 22;
						const h = auto ? 62 - i * 1.8 : 0;
						return (
							<g key={i}>
								{auto ? [0, 1].map(k => <rect key={k} x={x + k * 13} y={190 - h} width={9} height={h} rx={4} fill="#d9cbb0" stroke={GREYT} strokeWidth={1} />)
									: <><rect x={x} y={140} width={9} height={50} rx={4} fill="#b98a6a" stroke={INK} strokeWidth={1.5} /><rect x={x + 13} y={168} width={9} height={22} rx={4} fill="#b98a6a" stroke={INK} strokeWidth={1.5} /></>}
							</g>
						);
					})}
					<rect x={1720} y={124} width={46} height={80} rx={10} fill="none" stroke={AMBER} strokeWidth={4} />
					<Sx x={1743} y={234} text="X Y" size={24} color={AMBER_INK} weight={800} anchor="middle" />
					<GreyTag x={760} y={210} text="B9: autosomes" at={K2.ans + 10} size={22} />
				</g>
				{/* female and male panels */}
				<Fade at={K2.fem - 6}>
					<rect x={150} y={330} width={760} height={470} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={180} y={384} text="female: XX" size={44} color={INK} hand />
				</Fade>
				<SexChrom x={340} y={560} kind="X" s={1.8} o={prog(f, K2.fem, 12)} tag="R" tagO={prog(f, K2.two, 10)} slot={slot} />
				<SexChrom x={490} y={560} kind="X" s={1.8} o={prog(f, K2.fem + 6, 12)} tag="r" tagO={prog(f, K2.two + 6, 10)} slot={slot} />
				<Sx x={180} y={740} text="two copies: red eyes, r is hidden" size={34} color={AMBER_INK} hand at={K2.two + 10} />
				<PlateB p={PL10.flyRed} cx={760} cy={560} w={150} o={prog(f, K2.two + 14, 12)} />
				<GenoTag x={760} y={668} text="X^{R} X^{r}" size={30} o={prog(f, K2.two + 18, 12)} />
				<Fade at={K2.male - 6}>
					<rect x={1010} y={330} width={760} height={470} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={1040} y={384} text="male: XY" size={44} color={INK} hand />
				</Fade>
				<SexChrom x={1200} y={560} kind="X" s={1.8} o={prog(f, K2.male, 12)} tag="r" tagO={prog(f, K2.one + 8, 10)} slot={slot} />
				<SexChrom x={1350} y={570} kind="Y" s={1.8} o={prog(f, K2.male + 8, 12)} slot={prog(f, K2.ynot, 12)} />
				<Sx x={1350} y={680} text="no copy on the Y" size={30} color={INK_SOFT} hand anchor="middle" at={K2.ynot + 4} />
				{f >= K2.hide ? <Ring cx={1350 + 26 * 1.8} cy={570 - 32 * 1.8} rx={42} ry={42} at={K2.hide} /> : null}
				<Sx x={1040} y={740} text="one copy: nothing to hide r" size={34} color={AMBER_INK} hand at={K2.hide + 6} />
				<PlateB p={PL10.flyWhite} cx={lerp(1800, 1620, prog(f, K2.eyes, 18))} cy={560} w={150} o={prog(f, K2.eyes, 14)} />
				<GenoTag x={1620} y={668} text="X^{r} Y" size={30} o={prog(f, K2.eyes + 8, 12)} />
				{/* the term */}
				<Fade at={K2.sl}>
					<rect x={150} y={850} width={1620} height={90} rx={24} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={190} y={910} text="sex-linked: a gene on a sex chromosome" size={44} color={INK} hand />
				</Fade>
				<GreyTag x={150} y={966} text="write the allele on the X: X^{R}, X^{r}; the Y has none" at={K2.sl + 14} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 3. Morgan's cross, sons and daughters ----------
const K3 = cues(S('morgan-cross'), {now: "Now Morgan's second cross", dau: 'The red-eyed daughters each had', mother: 'a red allele from their mother', father: "a white allele on their father's X", carriers: 'so they were carriers', cross: 'Cross one with a red-eyed male', gives: 'He gives his X', every: 'to every daughter', y: 'and his Y to every son', allred: 'So every daughter has red eyes', each: "Each son's only X", half: 'half the sons should have white eyes', matches: 'That matches what Morgan saw', nowhite: 'no white-eyed daughters', close: 'close to half the sons'});
export const GM = {x: 780, y: 380, cell: 190, dr: 44};
/** Daughter and son band labels over the two columns (the father's X column and his Y column). */
export const SexBands: React.FC<{x: number; y: number; cell: number; dr: number; at: number; o?: number}> = ({x, y, cell, dr, at, o = 1}) => {
	const f = useCurrentFrame();
	const G = pgeom(x, y, cell, dr);
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={x + 4} y={y + 4} width={cell - 8} height={2 * cell - 8} rx={10} fill={CPLUM} opacity={0.06} />
			<rect x={x + cell + 4} y={y + 4} width={cell - 8} height={2 * cell - 8} rx={10} fill={TEALC} opacity={0.06} />
			<Sx x={G.top(0)[0]} y={G.top(0)[1] - dr - 18} text="daughters" size={32} color={INK} hand anchor="middle" />
			<Sx x={G.top(1)[0]} y={G.top(1)[1] - dr - 18} text="sons" size={32} color={INK} hand anchor="middle" />
		</g>
	);
};
export const SceneMorganB10: React.FC = () => {
	const f = useCurrentFrame();
	const fills = [K3.every, K3.y, K3.every + 10, K3.y + 10];
	const dRed = MORGAN.daughters.every(c => c.ph === 'red');
	return (
		<>
			<Heading text="Morgan's second cross" at={K3.now} size={56} />
			<Overlay>
				{/* parents */}
				<PlateB p={PL10.flyRed} cx={240} cy={330} w={130} o={prog(f, K3.dau, 12)} />
				<GenoTag x={240} y={430} text="X^{R} X^{r}" size={30} o={prog(f, K3.father, 12)} />
				<Sx x={240} y={490} text="carrier female" size={32} color={INK} hand anchor="middle" at={K3.carriers} />
				<PlateB p={PL10.flyWhite} cx={510} cy={250} w={80} o={fadeV(f, K3.father, K3.cross) * 0.55} />
				<Sx x={510} y={318} text="her father" size={26} color={GREY_INK} hand anchor="middle" at={K3.father} out={K3.cross} />
				<Fade at={K3.father + 4} out={K3.cross}><path d="M300,420 C360,380 420,320 470,280" fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="8 7" /></Fade>
				<PlateB p={PL10.flyRed} cx={240} cy={680} w={130} o={prog(f, K3.cross, 12)} />
				<GenoTag x={240} y={780} text="X^{R} Y" size={30} o={prog(f, K3.cross + 6, 12)} />
				<Sx x={240} y={840} text="red-eyed male" size={32} color={INK} hand anchor="middle" at={K3.cross + 6} />
				<Sx x={GM.x - 120} y={GM.y - 90} text="father" size={28} color={CPLUM} hand anchor="end" at={K3.gives} />
				<Sx x={GM.x - 70} y={GM.y + 2 * GM.cell + 50} text="mother" size={28} color={TEALC} hand anchor="middle" at={K3.cross + 10} />
				<Punnett x={GM.x} y={GM.y} cell={GM.cell} res={MORGAN} top={['X^{R}', 'Y']} side={['X^{R}', 'X^{r}']} gridAt={K3.cross} topAt={K3.gives} sideAt={K3.cross + 10} fillAt={i => fills[i]} discR={GM.dr}
					icon={(i, x, y) => <PlateB p={MORGAN.cells[i].ph === 'red' ? PL10.flyRed : PL10.flyWhite} cx={x} cy={y + 18} w={64} o={prog(f, i % 2 === 0 ? K3.allred + (i ? 6 : 0) : K3.half + (i === 3 ? 6 : 0), 10)} />} />
				<SexBands x={GM.x} y={GM.y} cell={GM.cell} dr={GM.dr} at={K3.every - 4} />
				{/* ratios by sex, computed */}
				<Fade at={K3.allred}>
					<rect x={1260} y={380} width={580} height={250} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={1290} y={450} text={`daughters: ${dRed ? 'all red' : 'mixed'}`} size={40} color={INK} weight={800} />
				</Fade>
				<Sx x={1290} y={530} text={`sons: ${MORGAN.sons.filter(c => c.ph === 'red').length} red : ${MORGAN.sons.filter(c => c.ph === 'white').length} white`} size={40} color={INK} weight={800} at={K3.half} />
				<Sx x={1290} y={590} text={`(${MORGAN.frac(c => c.ph === 'white', MORGAN.sons)} of sons white)`} size={32} color={AMBER_INK} hand at={K3.half + 10} />
				{/* what Morgan saw */}
				<Fade at={K3.matches}>
					<rect x={1260} y={680} width={580} height={300} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					<Sx x={1290} y={730} text="Morgan's counts" size={32} color={INK_SOFT} hand />
					<Sx x={1290} y={786} text={`red-eyed females ${fmt(MORGAN_F2.redF)}`} size={30} color={INK} weight={700} />
					<Sx x={1290} y={830} text={`white-eyed females ${MORGAN_F2.whiteF}`} size={30} color={INK} weight={700} at={K3.nowhite} />
					<Sx x={1290} y={874} text={`males ${fmt(MORGAN_F2.redM)} red : ${MORGAN_F2.whiteM} white`} size={30} color={INK} weight={700} at={K3.close - 6} />
					<Sx x={1290} y={934} text="close to 1 : 1" size={34} color={AMBER_INK} hand at={K3.close + 6} />
				</Fade>
				<g opacity={pulse(f, K3.each, 50)}>
					<rect x={GM.x + GM.cell + 4} y={GM.y + 4} width={GM.cell - 8} height={2 * GM.cell - 8} rx={10} fill="none" stroke={AMBER} strokeWidth={6} />
				</g>
				<Sx x={GM.x + GM.cell} y={GM.y + 2 * GM.cell + 110} text="each son's X comes from his mother" size={32} color={AMBER_INK} hand anchor="middle" at={K3.each + 6} />
			</Overlay>
		</>
	);
};

// ---------- 4. Haemophilia ----------
const K4 = cues(S('haemophilia'), {people: 'People work the same way', haem: 'Haemophilia A', clot: "blood doesn't clot properly", recX: 'a recessive allele on the X', carrier: 'A carrier mother and an unaffected father', quarter: 'a one in four chance', son: 'of an affected son', forson: 'But for each son', half: 'the chance is one in two', read: 'So read the question', all: 'all children, or sons', nod: 'No daughter of theirs', normal: 'carries the normal allele', far: 'far more common in males', one: 'a male needs one copy', two: 'a female needs two'});
export const SceneHaemophiliaB10: React.FC = () => {
	const f = useCurrentFrame();
	const G = {x: 760, y: 380, cell: 180, dr: 42};
	const fills = [K4.carrier + 30, K4.carrier + 40, K4.carrier + 35, K4.carrier + 45];
	const allO = fadeV(f, K4.quarter, K4.forson + 4);
	const sonO = prog(f, K4.forson, 12);
	const hot = prog(f, K4.read, 10);
	return (
		<>
			<Heading text="Haemophilia A" at={K4.haem} size={56} />
			<Overlay>
				<Sx x={500} y={150} text="blood doesn't clot properly; recessive allele on the X" size={32} color={INK_SOFT} hand at={K4.clot} />
				<PSym x={240} y={380} sex="F" aff={false} dot={1} sz={84} o={prog(f, K4.carrier, 12)} />
				<GenoTag x={240} y={480} text="X^{H} X^{h}" size={30} o={prog(f, K4.carrier + 4, 12)} />
				<Sx x={240} y={540} text="carrier mother" size={32} color={INK} hand anchor="middle" at={K4.carrier + 4} />
				<PSym x={240} y={680} sex="M" aff={false} sz={84} o={prog(f, K4.carrier + 10, 12)} />
				<GenoTag x={240} y={780} text="X^{H} Y" size={30} o={prog(f, K4.carrier + 14, 12)} />
				<Sx x={240} y={840} text="unaffected father" size={32} color={INK} hand anchor="middle" at={K4.carrier + 14} />
				<Punnett x={G.x} y={G.y} cell={G.cell} res={HAEM} top={['X^{H}', 'Y']} side={['X^{H}', 'X^{h}']} gridAt={K4.carrier + 20} topAt={K4.carrier + 24} sideAt={K4.carrier + 26} fillAt={i => fills[i]} discR={G.dr}
					icon={(i, x, y) => { const c = HAEM.cells[i]; return <PSym x={x} y={y + 14} sex={c.male ? 'M' : 'F'} aff={c.ph === 'affected'} dot={c.ph === 'carrier' ? 1 : 0} sz={44} />; }} />
				<SexBands x={G.x} y={G.y} cell={G.cell} dr={G.dr} at={K4.carrier + 30} />
				{/* all children against sons */}
				<g opacity={allO}><rect x={G.x - 8} y={G.y - 8} width={2 * G.cell + 16} height={2 * G.cell + 16} rx={14} fill="none" stroke={AMBER} strokeWidth={6} /></g>
				<g opacity={sonO * (1 - prog(f, K4.nod, 10) * 0.6)}><rect x={G.x + G.cell - 2} y={G.y - 2} width={G.cell + 4} height={2 * G.cell + 4} rx={12} fill="none" stroke={AMBER} strokeWidth={6} /></g>
				<Fade at={K4.quarter}>
					<rect x={1260} y={390} width={580} height={86} rx={20} fill="#fffdf8" stroke={hot > 0.5 ? AMBER : 'rgba(60,45,20,0.2)'} strokeWidth={hot > 0.5 ? 5 : 3} />
					<Sx x={1290} y={446} text={`all children: ${HAEM.frac(affectedSon)} affected son`} size={36} color={INK} weight={800} />
				</Fade>
				<Fade at={K4.half}>
					<rect x={1260} y={500} width={580} height={86} rx={20} fill="#fffdf8" stroke={hot > 0.5 ? AMBER : 'rgba(60,45,20,0.2)'} strokeWidth={hot > 0.5 ? 5 : 3} />
					<Sx x={1290} y={556} text={`sons: ${HAEM.frac(c => c.ph === 'affected', HAEM.sons)} affected`} size={36} color={INK} weight={800} />
				</Fade>
				<Sx x={1290} y={636} text="read the question: all children, or sons?" size={30} color={AMBER_INK} hand at={K4.read} />
				<Sx x={G.x + G.cell / 2} y={G.y + 2 * G.cell + 50} text={`daughters: 0 affected; ${HAEM.frac(c => c.ph === 'carrier', HAEM.daughters)} carriers`} size={30} color={INK} hand anchor="middle" at={K4.nod} />
				<Sx x={G.x + G.cell / 2} y={G.y + 2 * G.cell + 90} text="their father's X: X^{H}" size={30} color={CPLUM} hand anchor="middle" at={K4.normal} />
				<Sx x={1290} y={736} text="a male needs one copy;" size={34} color={INK} hand at={K4.one} />
				<Sx x={1290} y={786} text="a female needs two" size={34} color={INK} hand at={K4.two} />
				<GreyTag x={96} y={990} text="if 1 in 100 X chromosomes carries the allele: about 1 in 100 males, 1 in 10,000 females (random mating)" at={K4.far} size={24} />
			</Overlay>
		</>
	);
};
void INK_SOFT;
