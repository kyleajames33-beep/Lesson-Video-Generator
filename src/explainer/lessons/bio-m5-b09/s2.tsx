// B9 scenes 5 to 7: a ratio is a chance for each offspring (groups of four seeds from fresh coin flips, the computed
// distribution, a running share that settles), the test cross (two computed grids), and reading a pedigree (standard
// symbols, lines, numerals, numbers, autosomes on a coded karyotype strip).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AlleleChip, CPLUM, Chip, Coin, DIST4, DrawPath, Fade, GREYT, GREY_INK, GenoTag, GreyTag, Heading, INK, INK_SOFT, MENDEL, Overlay, P0,
	PL9, PSym, PeaPlant, Pedigree, PlantIcon, PlateB, Punnett, S, Sx, TEALC, TTtt, Tick, TtTt, Tttt, clamp01, fadeV, lerp, pct, pedXY, prog, rng,
} from './shared';
import type {PLay} from './shared';

// ---------- 5. A chance for each offspring ----------
const K5 = cues(S('chance-per-offspring'), {chance: 'a chance for each offspring', promise: 'not a promise for every', each: 'Each seed has a one in four', whatever: 'whatever happened to the seed', plant: 'Plant just four seeds', exactly: 'exactly one short plant', p42: 'about 42 per cent', hundreds: 'With hundreds of seeds', settle: 'the counts settle'});
/** Each seed gets one coin flip from each Tt parent (plum = T, teal = t, as on B5b's chromosomes); short only if both give t. */
const WANT = [0, 2, 1, 1, 0];
const ROWS = (() => {
	for (let seed = 1; seed < 5000; seed++) {
		const r = rng(seed);
		const rows = WANT.map(() => Array.from({length: 4}, () => [r() < 0.5 ? 'P' : 'T', r() < 0.5 ? 'P' : 'T'] as ('P' | 'T')[]));
		if (rows.every((row, k) => row.filter(c => c[0] === 'T' && c[1] === 'T').length === WANT[k])) return rows;
	}
	throw new Error('no replay seed found');
})();
/** A simulated run of 1,064 seeds (p = 1/4), sampled every 8 seeds for the running share. */
const RUN = (() => {
	const r = rng(77);
	let s = 0;
	const pts: [number, number][] = [];
	for (let n = 1; n <= 1064; n++) { if (r() < 0.25) s++; if (n % 8 === 0 || n === 1064) pts.push([n, s / n]); }
	return pts;
})();
export const SceneChanceB9: React.FC = () => {
	const f = useCurrentFrame();
	const RX = [210, 320, 430, 540];
	const RY = [520, 610, 700, 790, 880];
	const rowAt = (k: number) => K5.each + 30 + k * 34;
	const bars = prog(f, K5.exactly - 6, 24);
	const run = prog(f, K5.hundreds, Math.max(40, K5.settle - K5.hundreds + 70), (t: number) => t);
	const CH = {x0: 1040, x1: 1780, y0: 960, y1: 720};
	const sx = (n: number) => lerp(CH.x0, CH.x1, n / 1064), sy = (v: number) => lerp(CH.y0, CH.y1, v / 0.5);
	const nShow = Math.max(1, Math.round(run * RUN.length));
	const runD = RUN.slice(0, nShow).map((p, i) => `${i ? 'L' : 'M'}${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');
	return (
		<>
			<Heading text="A chance for each offspring" at={4} size={56} />
			<Overlay>
				{/* the square, small, with its per-seed chance */}
				<Punnett x={150} y={250} cell={80} res={TtTt} top={['T', 't']} side={['T', 't']} gridAt={-60} topAt={-60} sideAt={-60} fillAt={() => -60} discR={20} plain hi={i => (i === 3 ? 1 : 0)} />
				<Sx x={360} y={312} text="1/4 short, for each seed" size={40} color={AMBER_INK} hand at={K5.chance} />
				<Sx x={360} y={366} text="not a promise for every group of four" size={32} color={INK_SOFT} hand at={K5.promise} />
				{/* groups of four seeds */}
				{ROWS.map((row, k) => {
					const at = rowAt(k);
					const shorts = row.filter(c => c[0] === 'T' && c[1] === 'T').length;
					return (
						<g key={k} opacity={prog(f, at, 10)}>
							{row.map((c, j) => {
								const sh = c[0] === 'T' && c[1] === 'T';
								const flipAt = at + j * 5;
								return (
									<g key={j}>
										<PlateB p={PL9.round} cx={RX[j]} cy={RY[k]} w={40} />
										{k === 0 ? (
											<g>
												<Coin x={RX[j] - 18} y={RY[k] - 76} r={14} from={K5.whatever + j * 8} to={K5.whatever + j * 8 + 16} face={c[0]} o={fadeV(f, K5.whatever + j * 8 - 4, K5.plant + 40)} />
												<Coin x={RX[j] + 18} y={RY[k] - 76} r={14} from={K5.whatever + j * 8 + 4} to={K5.whatever + j * 8 + 20} face={c[1]} o={fadeV(f, K5.whatever + j * 8, K5.plant + 40)} />
											</g>
										) : null}
										<PlantIcon x={RX[j]} y={RY[k] - 22} tall={!sh} s={0.8} o={prog(f, flipAt + 8, 8)} color={sh ? AMBER_INK : '#4f8a3c'} />
									</g>
								);
							})}
							<Sx x={620} y={RY[k] + 10} text={`${shorts} short`} size={34} color={shorts === 1 ? AMBER_INK : INK} weight={700} at={at + 26} />
						</g>
					);
				})}
				<Fade at={K5.whatever} out={K5.plant + 40}>
					<Sx x={720} y={438} text="each seed: a fresh flip from each parent" size={30} color={AMBER_INK} hand />
					<circle cx={735} cy={470} r={10} fill={CPLUM} stroke={INK} strokeWidth={2} />
					<Sx x={752} y={480} text="gives T" size={26} color={INK_SOFT} hand />
					<circle cx={865} cy={470} r={10} fill={TEALC} stroke={INK} strokeWidth={2} />
					<Sx x={882} y={480} text="gives t" size={26} color={INK_SOFT} hand />
				</Fade>
				{/* computed distribution for a group of four */}
				<Fade at={K5.exactly - 8}>
					<Sx x={1040} y={268} text="short plants in a group of four" size={34} color={INK_SOFT} hand at={K5.exactly - 8} />
					<line x1={1030} y1={580} x2={1790} y2={580} stroke={INK_SOFT} strokeWidth={3} />
				</Fade>
				{DIST4.map((p, k) => {
					const x = 1080 + k * 150, hh = 260 * (p / DIST4[1]) * bars;
					const hot = k === 1 ? prog(f, K5.p42, 12) : 0;
					return (
						<g key={k} opacity={prog(f, K5.exactly - 6 + k * 3, 10)}>
							<rect x={x} y={580 - hh} width={96} height={hh} rx={8} fill={hot > 0.5 ? AMBER : '#d9cbb0'} stroke={hot > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={2.5} />
							<text x={x + 48} y={616} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>{k}</text>
							<text x={x + 48} y={570 - hh} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: k === 1 ? 800 : 600, fontSize: k === 1 ? 34 : 22}} fill={k === 1 ? AMBER_INK : INK_SOFT} opacity={bars}>{pct(p, k === 1 ? 0 : 1)}</text>
						</g>
					);
				})}
				<Sx x={1230} y={660} text="exactly 1 short: only about 42%" size={34} color={AMBER_INK} hand anchor="middle" at={K5.p42 + 6} />
				{/* the running share settles near 1/4 */}
				<Fade at={K5.hundreds - 6}>
					<line x1={CH.x0} y1={CH.y0} x2={CH.x1} y2={CH.y0} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={CH.x0} y1={CH.y0} x2={CH.x0} y2={CH.y1} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={CH.x0} y1={sy(0.25)} x2={CH.x1} y2={sy(0.25)} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={CH.x0 - 10} y={sy(0.25) + 9} text="25%" size={26} color={AMBER_INK} weight={700} anchor="end" />
					<Sx x={CH.x0 - 10} y={CH.y0 + 34} text="0" size={24} color={INK_SOFT} weight={600} />
					<Sx x={CH.x1} y={CH.y0 + 34} text="1,064 seeds" size={24} color={INK_SOFT} weight={600} anchor="end" />
					<Sx x={CH.x0 + 10} y={CH.y1 - 14} text="share short, as seeds add up (a chance run)" size={26} color={INK_SOFT} hand />
				</Fade>
				{f >= K5.hundreds ? <path d={runD} fill="none" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" /> : null}
				<Fade at={K5.settle + 20}>
					<circle cx={sx(1064)} cy={sy(MENDEL.short / 1064)} r={9} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
					<Sx x={sx(1064) - 14} y={sy(MENDEL.short / 1064) - 22} text={`Mendel: ${MENDEL.short} of 1,064 = ${pct(MENDEL.short / 1064, 1)}`} size={28} color={AMBER_INK} weight={700} anchor="end" />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 6. The test cross ----------
const K6 = cues(S('test-cross'), {how: 'So how can you tell', look: 'when they look the same', cross: 'Cross it with a short plant', only: 'can only give the short allele', tc: 'This is a test cross', half: 'a half chance of being short', even: 'if even one offspring is short', must: 'must carry the short allele', alltall: "If they're all tall", prob: "it's probably homozygous", more: 'more offspring make that more certain'});
export const SceneTestCrossB9: React.FC = () => {
	const f = useCurrentFrame();
	const G = {cell: 110, y: 670, lx: 330, rx: 1150};
	const lf = [K6.only + 10, K6.only + 18, K6.only + 26, K6.only + 34];
	const rf = [K6.half - 8, K6.half, K6.half + 8, K6.half + 16];
	const known = prog(f, K6.must, 10);
	const more = clamp01((f - K6.more) / 60);
	const count = f < K6.more ? 4 : more < 0.4 ? 10 : 40;
	return (
		<>
			<Heading text="The test cross" at={K6.tc} size={56} />
			<Overlay>
				<PeaPlant tall x={380} ground={400} k={0.15} o={prog(f, K6.how, 12)} />
				<GenoTag x={380} y={452} text="TT ?" size={32} o={prog(f, K6.how + 4, 12)} />
				<PeaPlant tall x={700} ground={400} k={0.15} o={prog(f, K6.how + 6, 12)} />
				<GenoTag x={700} y={452} text={known > 0.5 ? 'Tt' : 'Tt ?'} size={32} o={prog(f, K6.how + 10, 12)} stroke={known > 0.5 ? AMBER : INK_SOFT} />
				{known > 0.01 ? <Tick x={770} y={448} at={K6.must} s={30} /> : null}
				<Sx x={540} y={516} text="same phenotype: tall" size={34} color={AMBER_INK} hand anchor="middle" at={K6.look} />
				<PeaPlant tall={false} x={1500} ground={400} k={0.15} o={prog(f, K6.cross, 12)} />
				<GenoTag x={1500} y={452} text="tt" size={32} o={prog(f, K6.cross + 4, 12)} />
				<Sx x={1500} y={516} text="can only give t" size={34} color={TEALC} hand anchor="middle" at={K6.only} />
				{/* two computed grids */}
				<Sx x={G.lx + G.cell} y={G.y - 78} text="TT × tt" size={36} color={INK} weight={800} anchor="middle" at={K6.only + 4} />
				<Punnett x={G.lx} y={G.y} cell={G.cell} res={TTtt} top={['T', 'T']} side={['t', 't']} gridAt={K6.only} topAt={K6.only + 4} sideAt={K6.only + 6} fillAt={i => lf[i]} discR={24} plain
					icon={(i, x, y) => <PlantIcon x={x} y={y + 22} tall s={0.6} />} />
				<Sx x={G.rx + G.cell} y={G.y - 78} text="Tt × tt" size={36} color={INK} weight={800} anchor="middle" at={K6.half - 12} />
				<Punnett x={G.rx} y={G.y} cell={G.cell} res={Tttt} top={['T', 't']} side={['t', 't']} gridAt={K6.half - 14} topAt={K6.half - 10} sideAt={K6.half - 8} fillAt={i => rf[i]} discR={24} plain
					icon={(i, x, y) => <PlantIcon x={x} y={y + 22} tall={Tttt.cells[i].ph === 'tall'} s={0.6} color={Tttt.cells[i].ph === 'tall' ? '#4f8a3c' : AMBER_INK} />} />
				<Chip x={960} y={596} anchor="middle" text="test cross: cross with tt" at={K6.tc} size={34} color={INK} stroke={AMBER} />
				<Sx x={G.lx + G.cell} y={G.y + 2 * G.cell + 50} text={`${TTtt.phenText}`} size={34} color={INK} weight={700} anchor="middle" at={K6.only + 40} out={K6.prob} />
				<Sx x={G.lx + G.cell} y={G.y + 2 * G.cell + 50} text="all tall: likely TT, not proven" size={34} color={AMBER_INK} hand anchor="middle" at={K6.prob} />
				<Sx x={G.rx + G.cell} y={G.y + 2 * G.cell + 50} text={`${Tttt.phenText}: half short`} size={34} color={INK} weight={700} anchor="middle" at={K6.half + 20} />
				<PlantIcon x={1560} y={850} tall={false} s={1.5} color={AMBER_INK} o={prog(f, K6.even, 10)} />
				<Sx x={1600} y={850} text="one short offspring" size={30} color={AMBER_INK} hand at={K6.even + 4} />
				<Sx x={1600} y={890} text="so the parent is Tt" size={30} color={AMBER_INK} hand at={K6.must} />
				{/* more offspring, more certain */}
				<Fade at={K6.more - 4}>
					<Sx x={130} y={1010} text={`${count} tall offspring, none short`} size={32} color={INK} weight={700} />
					<rect x={620} y={986} width={300} height={28} rx={14} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
					<rect x={624} y={990} width={292 * (0.35 + 0.6 * more)} height={20} rx={10} fill={AMBER} />
					<Sx x={940} y={1010} text="more certain" size={30} color={AMBER_INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7. Reading a pedigree ----------
const K7 = cues(S('read-pedigree'), {cant: "We can't run test crosses", ped: 'called pedigrees', sq: 'Squares are males', ci: 'circles are females', shaded: 'a shaded symbol means', line: 'A line joins two parents', down: 'a line down from it', roman: 'Roman numeral', num: 'each person a number', point: 'point to exactly who', auto: 'on autosomes', notsex: "that aren't sex chromosomes"});
const L7: PLay = {x0: 420, y0: 360, gap: 220, row: 280, sz: 92};
export const SceneReadPedigreeB9: React.FC = () => {
	const f = useCurrentFrame();
	const appear: Record<string, number> = {'I-1': K7.sq, 'II-1': K7.sq + 6, 'I-2': K7.ci, 'II-2': K7.ci + 6, 'II-3': K7.shaded};
	const xy = pedXY(P0, L7);
	const lp = prog(f, K7.line, 14), dp = prog(f, K7.down, 16);
	const karyo = fadeV(f, K7.auto - 10);
	return (
		<>
			<Heading text="Reading a pedigree" at={K7.ped} size={56} />
			<Overlay>
				<Pedigree ped={P0} L={L7} o={id => prog(f, appear[id], 12)} coupleO={lp} kidLineO={dp} numerals={prog(f, K7.roman, 12)} nums={prog(f, K7.num, 12)} rings={{'II-3': K7.point + 4}} />
				<Sx x={xy('II-3')[0] + 80} y={xy('II-3')[1] - 40} text="II-3" size={40} color={AMBER_INK} hand at={K7.point + 10} />
				<Sx x={(xy('I-1')[0] + xy('I-2')[0]) / 2} y={xy('I-1')[1] - 70} text="parents" size={32} color={INK_SOFT} hand anchor="middle" at={K7.line + 8} />
				<Sx x={xy('II-1')[0] - 70} y={xy('II-1')[1] - 76} text="their children" size={32} color={INK_SOFT} hand anchor="end" at={K7.down + 10} />
				{/* legend */}
				<Fade at={K7.sq - 4}>
					<rect x={1290} y={290} width={530} height={330} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				</Fade>
				<PSym x={1350} y={360} sex="M" aff={false} sz={52} o={prog(f, K7.sq, 10)} />
				<Sx x={1400} y={372} text="male" size={38} color={INK} hand at={K7.sq + 2} />
				<PSym x={1350} y={450} sex="F" aff={false} sz={52} o={prog(f, K7.ci, 10)} />
				<Sx x={1400} y={462} text="female" size={38} color={INK} hand at={K7.ci + 2} />
				<PSym x={1350} y={545} sex="M" aff sz={52} o={prog(f, K7.shaded, 10)} />
				<PSym x={1420} y={545} sex="F" aff sz={52} o={prog(f, K7.shaded + 4, 10)} />
				<Sx x={1470} y={557} text="has the trait" size={38} color={INK} hand at={K7.shaded + 6} />
				<GreyTag x={1290} y={650} text="carriers are often not marked" at={K7.point + 20} size={26} />
				{/* autosomes on a karyotype strip */}
				<g opacity={karyo}>
					{Array.from({length: 23}, (_, i) => {
						const x = 236 + i * 62;
						const h = i < 22 ? 92 - i * 2.6 : 0;
						const auto = i < 22;
						const hX = 70, hY = 30;
						const col = auto ? '#b98a6a' : '#b9bfc5';
						return (
							<g key={i}>
								{auto
									? [0, 1].map(k => <rect key={k} x={x + k * 18} y={960 - h} width={13} height={h} rx={6} fill={col} stroke={INK_SOFT} strokeWidth={1.5} />)
									: <>
										<rect x={x} y={960 - hX} width={13} height={hX} rx={6} fill={col} stroke={GREYT} strokeWidth={1.5} />
										<rect x={x + 18} y={960 - hY} width={13} height={hY} rx={6} fill={col} stroke={GREYT} strokeWidth={1.5} />
									</>}
								<text x={x + 15} y={994} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 20}} fill={auto ? INK_SOFT : GREY_INK}>{auto ? i + 1 : 'X Y'}</text>
							</g>
						);
					})}
					<DrawPath d="M222,850 L1588,850 L1588,1006 L222,1006 Z" at={K7.auto + 4} dur={20} color={AMBER} width={4} />
					<Sx x={222} y={836} text="autosomes: pairs 1 to 22, not X or Y" size={34} color={AMBER_INK} hand at={K7.auto + 8} />
					<Sx x={1700} y={840} text="sex chromosomes" size={28} color={GREY_INK} hand anchor="middle" at={K7.notsex} />
				</g>
			</Overlay>
		</>
	);
};
void AMBER; void AlleleChip; void INK_SOFT; void lerp;
