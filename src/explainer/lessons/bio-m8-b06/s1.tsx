// M8 B06 scenes 1 to 5: the hook (around 1900 and today, painted bacterium, heart and lungs, the reasons, the heading),
// the dividing line (two hosts and a pathogen, "caused by a pathogen?", not severity or genes, CF crossed chip), the four
// groups (a painted plate per group, then the group tab and the empty cause chain), cystic fibrosis's normal job (the CFTR
// cell, chloride and water out through the channels, the airway lining with thin mucus and sweeping cilia) and what goes
// wrong (the missing-channel cell, ions staying in, thick mucus, the chain filling).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading} from '../chem-m5-c03/common';
import {CF_CHAN, CF_CLUMP, P, sc} from './common';
import {
	CAN, Callout, Card, Chain, DimG, DrawPath, ENV, GEN, GREYC, Glow, GroupTab, INK, IonFlow, MistakeX, NAVY, NUT, PATH, PicF, PicV, Pill, ShrinkAt, Sx, TaskLine, Wr, plPt, plW, prog, smooth, vis, Framed,
} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {around: 'Around', pneu: 'pneumonia', tb: 'tuberculosis', today: 'Today', heart: 'heart disease', dem: 'dementia', stroke: 'stroke', lung: 'lung cancer', vacc: 'vaccines', anti: 'antibiotics', clean: 'clean water', live: 'live long', causes: 'causes'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="What causes a non-infectious disease?" at={K1.causes} size={64} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<TaskLine text="What do Australians die of?" at={0} out={K1.causes - 14} />
				<Card x={96} y={200} w={820} h={640} title="around 1900" titleSize={46} />
				<PicF p={P.bact} x={150} y={290} h={200} />
				<DimG at={K1.vacc} to={0.5}>
					<Pill x={140} y={540} text="pneumonia" at={K1.pneu} color={PATH} size={36} />
					<Pill x={440} y={540} text="tuberculosis" at={K1.tb} color={PATH} size={36} />
					<Wr x={140} y={680} text="caught from someone else: infectious" at={K1.tb + 20} size={34} color={INK} hand />
				</DimG>
				{[['vaccines', K1.vacc], ['antibiotics', K1.anti], ['clean water', K1.clean]].map(([t, at], i) => <Pill key={i} x={140 + [0, 200, 430][i]} y={730} text={t as string} at={at as number} color={ENV} size={32} />)}
				<Card x={1004} y={200} w={820} h={640} title="today" titleSize={46} />
				<PicF p={P.heart} x={1080} y={270} h={290} />
				<PicF p={P.lungs} x={1420} y={270} h={290} />
				{[['heart disease', K1.heart], ['dementia', K1.dem], ['stroke', K1.stroke], ['lung cancer', K1.lung]].map(([t, at], i) => <Pill key={i} x={1050 + (i % 2) * 330} y={600 + Math.floor(i / 2) * 76} text={t as string} at={at as number} color={CAN} size={34} />)}
				<Wr x={1050} y={810} text="nobody can catch these" at={K1.lung + 20} size={34} color={INK} hand />
				<Glow cx={1414} cy={420} rx={360} ry={180} at={K1.today} len={60} />
				<DrawPath d="M 700 905 C 900 970, 1100 970, 1280 905" at={K1.live} dur={22} color={NAVY} width={6} />
				<path d="M 1258 896 L 1284 903 L 1268 925" fill="none" stroke={NAVY} strokeWidth={6} opacity={prog(f, K1.live + 18, 6)} />
				<Wr x={990} y={1030} text="longer lives: time for slow diseases to develop" at={K1.live + 10} size={38} color={NAVY} hand anchor="middle" />
				{void vis}
			</svg>
		</>
	);
};

// ---------- 2. The dividing line ----------
const K2 = cues(sc('dividing-line'), {start: 'Start with', inf: 'An infectious', path: 'pathogen', invading: 'invading', many: 'Many but not all', hosts: 'between hosts', non: 'non-infectious', catch: "can't catch", test: 'The test is', serious: 'how serious', genes: 'genes are', cf: 'Cystic fibrosis', genetic: 'genetic', still: 'still non-infectious'});
export const SceneDividing: React.FC = () => {
	const f = useCurrentFrame();
	const t = smooth(prog(f, K2.path, 70));
	const bx = 270 + (830 - 270) * t, by = 330 - Math.sin(t * Math.PI) * 120;
	const gone = prog(f, K2.non, 14);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="The dividing line" at={0} />
			<Pill x={500} y={110} text="b7: what makes a disease infectious?" at={K2.inf} color={GREYC} size={26} />
			{[130, 700].map((x, i) => (
				<g key={i}>
					<rect x={x} y={360} width={280} height={190} rx={40} fill="#f1eee7" stroke={INK} strokeWidth={3.5} />
					<Sx x={x + 140} y={470} text={`host ${i + 1}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<g opacity={1 - gone}>
				<DrawPath d="M 300 350 Q 560 170 830 350" at={K2.path} dur={30} color={PATH} width={5} dash="12 9" />
				<PicF p={P.bact} x={bx - 70} y={by - 40} h={80} o={prog(f, K2.path - 6, 10)} />
				<Wr x={150} y={605} text="caused by a pathogen invading and multiplying" at={K2.invading} size={32} color={PATH} weight={700} />
				<Wr x={150} y={650} text="many pass between hosts; some don't" at={K2.many} size={32} color={INK} weight={700} />
				<Wr x={150} y={695} text="(tetanus comes from soil)" at={K2.many + 20} size={32} color={INK} weight={700} />
			</g>
			<Pill x={565} y={430} text="no pathogen" at={K2.non + 10} color={OKC} size={32} anchor="middle" />
			<Card x={96} y={580} w={980} h={150} at={K2.non} color={OKC} />
			<Wr x={124} y={640} text="non-infectious: not caused by a pathogen," at={K2.non + 4} size={40} color={INK} weight={800} />
			<Wr x={124} y={696} text="so you can't catch it" at={K2.catch} size={40} color={INK} weight={800} />
			<Framed x={110} y={830} text="The test is the cause." at={K2.test} size={50} color={NAVY} />
			<MistakeX x={96} y={920} text="non-infectious means not genetic" at={K2.genetic} cross={K2.still} size={34} />
			{/* the test card */}
			<Card x={1140} y={200} w={690} h={330} title="Is it caused by a pathogen?" titleSize={38} />
			<Pill x={1180} y={300} text="yes: infectious" at={-1000} color={PATH} size={34} solid={prog(f, K2.inf + 10, 10) > 0.5 && prog(f, K2.non, 10) < 0.5} />
			<Pill x={1180} y={400} text="no: non-infectious" at={-1000} color={OKC} size={34} solid={prog(f, K2.non, 10) > 0.5} />
			<Pill x={1150} y={570} text="how serious?" at={K2.serious} color={GREYC} size={32} />
			<Wr x={1430} y={605} text="not the test" at={K2.serious + 16} size={34} color={CROSSC} hand />
			<Pill x={1150} y={650} text="genes involved?" at={K2.genes} color={GREYC} size={32} />
			<Wr x={1470} y={685} text="not the test" at={K2.genes + 16} size={34} color={CROSSC} hand />
			<PicV p={P.airway} x={1150} y={740} h={200} at={-1000} />
			<Sx x={1520} y={852} text="cystic fibrosis?" size={34} color={INK} weight={800} at={-1000} out={K2.genetic - 4} />
			<Wr x={1520} y={810} text="cystic fibrosis:" at={K2.genetic} size={34} color={GEN} weight={800} />
			<Wr x={1520} y={852} text="genetic, can't" at={K2.genetic + 10} size={34} color={GEN} weight={800} />
			<Wr x={1520} y={894} text="be caught" at={K2.genetic + 20} size={34} color={GEN} weight={800} />
			{void K2.start}{void K2.hosts}
		</svg>
	);
};
const OKC = '#2f8a5b', CROSSC = '#c4432f';

// ---------- 3. Four groups of cause ----------
const K3 = cues(sc('four-groups'), {what: 'So what', four: 'four groups', gen: 'genetic', env: 'environmental', nut: 'nutritional', can: 'cancer', chain: 'chain', cause: 'the cause', cells: 'changes in the cells', effect: 'effect on the body'});
export const SceneFourGroups: React.FC = () => {
	const cols: [string, string, string[], typeof P.bact, number][] = [
		['genetic', GEN, ['a DNA change', 'alters a protein'], P.protein, K3.gen],
		['environmental', ENV, ['an outside exposure', 'damages cells'], P.silic, K3.env],
		['nutritional', NUT, ['too little or too much', 'of a nutrient'], P.rbc, K3.nut],
		['cancer', CAN, ['cells dividing', 'out of control'], P.dividing, K3.can],
	];
	const nexts = [K3.env, K3.nut, K3.can, K3.chain];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Four groups of cause" at={0} />
			<ShrinkAt cx={960} cy={196} k={0.8} at={K3.chain - 10}>
				{cols.map(([t, c, m, p, at], i) => {
					const x = 96 + i * 438;
					return (
						<g key={t}>
							<Card x={x} y={200} w={410} h={640} color={c} o={1} />
							<Glow cx={x + 205} cy={520} rx={230} ry={330} at={at} len={Math.max(30, nexts[i] - at)} />
							<PicF p={p} x={x + 205 - plW(p, 270) / 2} y={230} h={270} />
							<Sx x={x + 30} y={580} text={t} size={46} color={c} hand weight={700} at={at - 4} />
							{m.map((ln, k) => <Wr key={k} x={x + 30} y={650 + k * 50} text={ln} at={at + 10 + k * 12} size={36} color={INK} weight={800} />)}
						</g>
					);
				})}
			</ShrinkAt>
			<Pill x={1430} y={110} text="the syllabus lists these four" at={K3.four} out={K3.chain - 10} color={GREYC} size={26} />
			<GroupTab at={K3.chain} all={K3.chain} />
			<Chain at={K3.chain} headPulse={K3.cause} />
			<Wr x={960} y={820} text="trace the same chain for each one" at={K3.chain + 10} size={40} color={NAVY} hand anchor="middle" />
		</svg>
	);
};

// ---------- 4. Cystic fibrosis: the normal job ----------
const K4 = cues(sc('cf-normal-job'), {start: 'Start with', cf: 'cystic fibrosis', lining: 'Cells lining', cftr: 'CFTR', gene: 'CFTR gene', channel: 'channel', chloride: 'chloride ions', out: 'out onto', water: 'Water follows', thin: 'thin and runny', cilia: 'cilia', sweep: 'sweep', up: 'up and out'});
const CELL = {x: 140, y: 196, h: 670};
const AIR = {x: 1080, y: 210, h: 400};
export const chanPts = () => CF_CHAN.map(c => plPt(P.cftr, CELL.x, CELL.y, CELL.h, c));
const airPt = (n: [number, number]) => plPt(P.airway, AIR.x, AIR.y, AIR.h, n);
/** The airway lining plate (cross-fading to thick mucus from `thick`) with the cilia sweep arrow. */
const Airway: React.FC<{thick?: number; sweepAt: number; stall?: number}> = ({thick, sweepAt, stall}) => {
	const f = useCurrentFrame();
	const q = thick === undefined ? 0 : prog(f, thick, 30);
	const [ax, ay] = airPt([360, 640]), [bx] = airPt([1660, 640]);
	const st = stall === undefined ? 0 : prog(f, stall, 14);
	const run = prog(f, sweepAt, 18) * (1 - st);
	const dash = (f * 2) % 40;
	return (
		<g>
			<PicF p={P.airway} x={AIR.x} y={AIR.y} h={AIR.h} />
			{q > 0.01 ? <PicF p={P.thick} x={AIR.x} y={AIR.y} h={AIR.h} o={q} /> : null}
			{run > 0.01 ? (
				<g opacity={run}>
					<path d={`M${ax},${ay - 36} L${bx},${ay - 36}`} stroke={NAVY} strokeWidth={6} strokeDasharray="22 18" strokeDashoffset={-dash} fill="none" />
					<path d={`M${bx - 22},${ay - 52} L${bx + 4},${ay - 36} L${bx - 22},${ay - 20}`} stroke={NAVY} strokeWidth={6} fill="none" />
				</g>
			) : null}
		</g>
	);
};
export const SceneCFNormal: React.FC = () => {
	const f = useCurrentFrame();
	const ch = chanPts();
	const [zx, zy] = airPt([900, 900]);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Cystic fibrosis: the normal job" at={0} />
			<GroupTab lit={0} litAt={K4.start} />
			<PicF p={P.cftr} x={CELL.x} y={CELL.y} h={CELL.h} />
			<Airway sweepAt={K4.sweep} />
			<g opacity={1 - prog(f, K4.cftr - 10, 14)}>
			<DrawPath d={`M${zx},${zy} L${CELL.x + plW(P.cftr, CELL.h) + 20},${CELL.y + 120}`} at={K4.lining} dur={18} color={INK} width={3} dash="8 8" />
			<DrawPath d={`M${zx},${zy} L${CELL.x + plW(P.cftr, CELL.h) + 20},${CELL.y + CELL.h - 60}`} at={K4.lining + 4} dur={18} color={INK} width={3} dash="8 8" />
			</g>
			<Glow cx={zx} cy={zy} rx={50} ry={110} at={K4.lining} len={60} />
			<Wr x={AIR.x} y={AIR.y + AIR.h + 46} text="cells lining the airway" at={K4.lining} size={34} color={INK} hand />
			<Callout from={ch[4]} x={520} y={250} text="CFTR: a channel protein" at={K4.cftr} size={38} color={GEN} />
			<Wr x={520} y={300} text="made from the CFTR gene" at={K4.gene} size={32} color={GEN} hand />
			<IonFlow chans={ch} at={K4.chloride} color="#3c8a4a" label="Cl⁻" n={12} />
			<IonFlow chans={ch} at={K4.water} color="#3f7fc4" label="H₂O" n={8} seed={9} />
			<Wr x={520} y={400} text="Cl⁻ out onto the airway surface" at={K4.out} size={36} color="#2f6b3c" weight={800} />
			<Wr x={520} y={460} text="water follows by osmosis" at={K4.water} size={36} color="#2f5f9e" weight={800} />
			<Pill x={520} y={485} text="Year 11: osmosis" at={K4.water + 10} color={GREYC} size={26} />
			<Callout from={airPt([1300, 600])} x={1200} y={710} text="thin mucus" at={K4.thin} size={36} color={NAVY} />
			<Callout from={airPt([1050, 760])} x={1500} y={710} text="cilia: tiny hairs" at={K4.cilia} size={36} color={NAVY} />
			<Wr x={1200} y={790} text="swept up and out" at={K4.up} size={38} color={NAVY} hand />
			<Chain at={-1000} />
		</svg>
	);
};

// ---------- 5. What goes wrong ----------
const K5 = cues(sc('cf-what-goes-wrong'), {both: 'both copies', common: 'most common', folds: 'folds', breaks: 'breaks it down', few: 'too few', less: 'less chloride', water: 'less water', thick: 'thick', cilia: "cilia can't", bact: 'bacteria stay', inf: 'infections'});
export const SceneCFWrong: React.FC = () => {
	const f = useCurrentFrame();
	const ch = chanPts();
	const q = prog(f, K5.folds, 30);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Cystic fibrosis: what goes wrong" at={0} />
			<GroupTab lit={0} />
			<PicF p={P.cftr} x={CELL.x} y={CELL.y} h={CELL.h} o={1 - q} />
			<PicF p={P.cftrMissing} x={CELL.x} y={CELL.y} h={CELL.h} o={q} />
			<IonFlow chans={ch} at={0} until={K5.folds} color="#3c8a4a" label="Cl⁻" n={8} />
			<IonFlow chans={ch} at={K5.less} color="#3c8a4a" label="Cl⁻" inside depth={420} n={9} />
			<IonFlow chans={ch} at={K5.water} color="#3f7fc4" label="H₂O" inside depth={420} n={6} seed={9} />
			<Airway thick={K5.thick} sweepAt={-1000} stall={K5.cilia} />
			<Wr x={520} y={260} text="two altered CFTR alleles" at={K5.both} size={38} color={GEN} weight={800} />
			<Wr x={520} y={320} text="one amino acid missing" at={K5.common} size={34} color={INK} weight={700} />
			<Callout from={plPt(P.cftr, CELL.x, CELL.y, CELL.h, CF_CLUMP)} x={520} y={420} text="misfolded," text2="broken down" at={K5.folds + 20} size={38} color={CROSSC} />
			<Pill x={520} y={500} text="like sickle cell: one change, protein, cell, body" at={K5.breaks} color={GREYC} size={26} />
			<Wr x={520} y={620} text="too few channels:" at={K5.few} size={36} color={INK} weight={800} />
			<Wr x={520} y={666} text="Cl⁻ and water stay in" at={K5.less} size={36} color={INK} weight={800} />
			<Callout from={plPt(P.airway, AIR.x, AIR.y, AIR.h, [1100, 560])} x={1190} y={700} text="thick, sticky mucus" at={K5.thick + 10} size={36} color={CROSSC} />
			<Wr x={1190} y={770} text="cilia can't clear it" at={K5.cilia} size={36} color={INK} hand />
			<Wr x={1190} y={820} text="bacteria stay trapped" at={K5.bact} size={36} color={INK} hand />
			<Chain slots={[
				{lines: ['altered CFTR gene', '(both copies)'], at: K5.both, thumb: P.protein},
				{lines: ['too few channels →', 'less Cl⁻ and water out'], at: K5.less, thumb: P.cftrMissing},
				{lines: ['thick mucus → blocked', 'airways, repeated infections'], at: K5.inf, thumb: P.lungs},
			]} />
			{void vis}{void NUT}{void ENV}{void CAN}
		</svg>
	);
};
