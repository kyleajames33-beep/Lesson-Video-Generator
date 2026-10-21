// M6 B13 scenes 5 to 8: can it be undone? (the undo row of both cases at the left; the undo strip: a field lane that
// switches crop and back, a species lane that fades and cannot return, a gene pool whose drive rings stay after
// releases stop; a balance where a reversible gain and a permanent loss are not settled by size); two conditional
// verdicts on the full board; what would change each verdict (resistance monitoring; three trial-stage checks); memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {PAST_BT, PAST_GD} from './s1';
import {
	AMBER, AMBER_INK, Balance, CARD, CheckBox, ColHead, EDGE, FillBar, GREEN, GREYT, GREY_INK, INK, INK_SOFT, InsectG, LBL, MosqG, PLATES, Pl, ROW_LABELS, ReturnArrow,
	RingCluster, RoofG, SeasonField, VerdictBar, clamp01, colsAt, lerp, prog, smooth, vis,
} from './parts';
import type {RK} from './parts';

// ---------- 5. Can it be undone? ----------
const K5 = cues(S('undone'), {notice: 'Notice which question', undone: 'can it be undone', won: 'won back', stop: 'Stop growing a crop', next: 'next season', extinct: 'an extinct species', drive: 'a drive that has spread', compare: 'comparing their sizes', permanent: 'may be permanent', stronger: 'much stronger evidence'});
const LANE = {x0: 700, x1: 1820};
const POOL: RK[] = ['A', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'A', 'C'];
const AMB = [1, 4, 6, 8];
const BX = 1180, BY = 1020, BS = 1.6, BL = 70 * BS, BH = 64 * BS;
export const SceneUndone: React.FC = () => {
	const f = useCurrentFrame();
	const fields = [K5.won + 6, K5.stop + 10, K5.next + 10];
	const gens = [0, 1, 2, 3].map(k => K5.extinct + 6 + k * 14);
	const stopBar = prog(f, K5.drive + 40, 14);
	const balO = prog(f, K5.compare - 10, 14);
	const tilt = -10 * smooth(prog(f, K5.compare + 6, 20));
	return (
		<>
			<Heading text="Can it be undone?" at={4} size={60} />
			<Overlay>
				{/* the undo row of both cases, at the left */}
				<g opacity={prog(f, 4, 14)}>
					<rect x={LBL.x0} y={210} width={520} height={560} rx={20} fill={CARD} stroke={vis(f, K5.undone, K5.won, 10) > 0.5 ? AMBER : EDGE} strokeWidth={3} />
					<Sx x={LBL.x0 + 30} y={268} text={ROW_LABELS[2].key} size={38} color={INK} weight={800} />
					<Pl p={PLATES.cotton} cx={LBL.x0 + 110} cy={400} w={100} />
					<ReturnArrow x={LBL.x0 + 330} y={420} w={150} kind="solid" />
					<Sx x={LBL.x0 + 330} y={470} text="can be stopped" size={26} color={GREY_INK} hand anchor="middle" />
					<Pl p={PLATES.mosquito} cx={LBL.x0 + 110} cy={630} w={130} />
					<ReturnArrow x={LBL.x0 + 330} y={650} w={150} kind="broken" />
					<Sx x={LBL.x0 + 330} y={700} text="may not be recallable" size={26} color={GREY_INK} hand anchor="middle" />
				</g>
				{/* top lane: a crop can switch and switch back */}
				<g opacity={prog(f, K5.won - 10, 12)}>
					<rect x={LANE.x0} y={210} width={LANE.x1 - LANE.x0} height={230} rx={20} fill="#f7f9f1" stroke={EDGE} strokeWidth={2.5} />
					{['Bt cotton', 'other crop', 'Bt cotton'].map((t, i) => (
						<g key={i} opacity={prog(f, fields[i], 12)}>
							<SeasonField x={LANE.x0 + 60 + i * 300} y={300} w={210} phase={i === 1 ? 1 : 0} labels={i === 1 ? ['', 'other'] : ['Bt', '']} />
							<Sx x={LANE.x0 + 165 + i * 300} y={420} text={`season ${i + 1}`} size={22} color={GREY_INK} hand anchor="middle" />
							{void t}
						</g>
					))}
					<g opacity={prog(f, fields[2], 8)}>
						<path d={`M${LANE.x0 + 480},292 Q${LANE.x0 + 615},236 ${LANE.x0 + 750},292`} fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, fields[2], 22)} />
						<path d={`M${LANE.x0 + 736},280 L${LANE.x0 + 752},294 L${LANE.x0 + 734},300`} fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, fields[2] + 18, 6)} />
						<Sx x={LANE.x0 + 615} y={248} text="switch back" size={24} color={GREY_INK} hand anchor="middle" />
					</g>
				</g>
				<Tg x={LANE.x1 - 20} y={262} text="reversible: can be won back" at={K5.next + 20} out={K5.extinct} anchor="end" size={34} />
				{/* bottom lane: an extinct species cannot return */}
				<g opacity={prog(f, K5.extinct - 6, 12)}>
					<rect x={LANE.x0} y={470} width={LANE.x1 - LANE.x0} height={230} rx={20} fill="#f7f4f0" stroke={EDGE} strokeWidth={2.5} />
					{gens.map((g, k) => (
						<g key={k} opacity={prog(f, g, 10)}>
							{k < 3 ? <InsectG x={LANE.x0 + 120 + k * 190} y={590} s={1.5} o={1 - k * 0.32} /> : <g opacity={0.6}><InsectG x={LANE.x0 + 120 + k * 190} y={590} s={1.5} color={GREYT} o={0.35} /></g>}
							<Sx x={LANE.x0 + 120 + k * 190} y={680} text={`generation ${k + 1}`} size={22} color={GREY_INK} hand anchor="middle" />
						</g>
					))}
					<g opacity={prog(f, gens[3] + 10, 8)}>
						<path d={`M${LANE.x0 + 690},540 Q${LANE.x0 + 600},492 ${LANE.x0 + 500},500`} fill="none" stroke={GREYT} strokeWidth={4} strokeDasharray="9 8" strokeLinecap="round" opacity={prog(f, gens[3] + 10, 14)} />
					</g>
					<GreyCross x={LANE.x0 + 470} y={502} at={gens[3] + 30} s={16} />
				</g>
				<Tg x={LANE.x0 + 30} y={762} text="permanent" at={gens[3] + 30} size={38} color={f >= K5.compare ? GREY_INK : AMBER_INK} />
				{/* a spread drive stays when releases stop */}
				<g opacity={prog(f, K5.drive, 12)}>
					<RingCluster x={1640} y={585} kinds={POOL} cols={5} gap={38} r={12} kindOf={i => (AMB.includes(i) && f >= K5.drive + 10 + AMB.indexOf(i) * 6 ? 'new' : POOL[i])} />
					<g opacity={stopBar}>
						<rect x={1520} y={lerp(470, 500, stopBar)} width={240} height={14} rx={7} fill={GREYT} />
						<Sx x={1640} y={lerp(462, 492, stopBar)} text="releases stop" size={22} color={GREY_INK} hand anchor="middle" />
					</g>
				</g>
				{/* sizes alone don't settle it */}
				<g opacity={balO}>
					<Balance x={BX} y={BY} s={BS} tilt={tilt} />
					<g transform={`translate(${BX - BL * Math.cos((tilt * Math.PI) / 180)},${BY - BH - BL * Math.sin((tilt * Math.PI) / 180)})`}>
						<rect x={-34} y={30 * BS - 50} width={68} height={50} rx={8} fill="#e6efd8" stroke={GREEN} strokeWidth={3} />
					</g>
					<g transform={`translate(${BX + BL * Math.cos((tilt * Math.PI) / 180)},${BY - BH + BL * Math.sin((tilt * Math.PI) / 180)})`}>
						<rect x={-14} y={30 * BS - 26} width={28} height={26} rx={5} fill="#f0e3e0" stroke="#b5483a" strokeWidth={3} />
					</g>
					<Sx x={BX - 130} y={BY - 150} text="gain (reversible)" size={30} color={GREY_INK} hand anchor="end" />
					<Sx x={BX + 130} y={BY - 150} text="loss (permanent)" size={30} color={GREY_INK} hand />
					<Sx x={360} y={930} text="compare sizes only" size={34} color={GREY_INK} hand anchor="middle" opacity={prog(f, K5.compare + 20, 10)} />
				</g>
				<GreyCross x={360} y={918} at={K5.compare + 40} s={34} />
				<Tg x={BX + 130} y={BY - 105} text="needs stronger evidence" at={K5.stronger} size={34} />
				{void K5.notice}{void K5.permanent}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- the compact board (scene 6) ----------
const CY = [300, 386, 472, 558];
const CH = 78;
const CLABEL = ['benefit', 'biodiversity', 'can it be undone?', 'who gains, who risks?'];
const SUM = [
	['85% less insecticide: measured', 'huge need; lab cages only'],
	['more insect species vs sprayed', 'population down if it works'],
	['can stop next season', 'spreads by itself'],
	['growers, wildlife gain', 'risk crosses borders'],
];
const CompactBoard: React.FC<{o?: number}> = ({o = 1}) => {
	const cols = colsAt(0);
	return (
		<g opacity={o}>
			{CY.map((y, r) => (
				<g key={r}>
					<rect x={LBL.x0} y={y} width={1820 - LBL.x0} height={CH} rx={14} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<Sx x={LBL.x0 + 24} y={y + 50} text={CLABEL[r]} size={28} color={GREY_INK} weight={800} />
					{cols.map((c, i) => <Sx key={i} x={c.x0 + 20} y={y + 50} text={SUM[r][i]} size={27} color={GREY_INK} hand />)}
				</g>
			))}
			<ColHead c={cols[0]} kind="bt" />
			<ColHead c={cols[1]} kind="gd" />
		</g>
	);
};

// ---------- 6. Two verdicts ----------
const K6 = cues(S('verdicts'), {now: 'Now the verdicts', bt: ['Bt cotton', 1], large: 'to a large extent', provided: 'provided refuges', gd: ['The gene drive', 1], notyet: 'not yet justified', staged: 'staged field trials', iff: 'if each stage', same: 'Same four questions', two: 'two different verdicts', one: 'one verdict for all', judge: 'Judge each case', change: 'when your verdict would change'});
export const BT_VERDICT = (m: {large: number; provided: number}) => [
	[{t: 'To a large extent', mark: m.large}, {t: ' justified,'}],
	[{t: 'provided that', mark: m.provided}, {t: ' refuges keep'}],
	[{t: 'resistance rare.'}],
];
export const GD_VERDICT = (m: {notyet: number; iff: number}) => [
	[{t: 'Not yet', mark: m.notyet}, {t: ' justified for release.'}],
	[{t: 'Staged field trials could be, '}, {t: 'if', mark: m.iff}],
	[{t: 'each stage shows no serious harm'}],
	[{t: 'and communities agree.'}],
];
export const SceneVerdicts: React.FC = () => {
	const f = useCurrentFrame();
	const cols = colsAt(0);
	const pulse = vis(f, K6.two, K6.two + 50, 8) * (0.5 + 0.5 * Math.sin((f - K6.two) / 4));
	const glow = vis(f, K6.change, K6.change + 70, 10);
	const btTilt = 14 * smooth(prog(f, K6.bt + 10, 24));
	const gdTilt = -12 * smooth(prog(f, K6.gd + 10, 24));
	const slide = smooth(prog(f, K6.one, 18));
	return (
		<>
			<Heading text="Two verdicts" at={4} size={60} />
			<Overlay>
				<CompactBoard o={prog(f, 0, 12)} />
				<Balance x={(cols[0].x0 + cols[0].x1) / 2} y={768} s={1} tilt={btTilt} weight={1} glow={glow} />
				<Balance x={(cols[1].x0 + cols[1].x1) / 2} y={768} s={1} tilt={gdTilt} weight={1} glow={glow} />
				<VerdictBar x={cols[0].x0} y={800} w={cols[0].w} h={180} at={K6.bt} size={34} lines={BT_VERDICT({large: K6.large, provided: K6.provided})} lit={1 - prog(f, K6.gd, 10) + prog(f, K6.two, 10)} pulse={pulse} />
				<VerdictBar x={cols[1].x0} y={800} w={cols[1].w} h={180} at={K6.gd} size={32} lines={GD_VERDICT({notyet: K6.notyet, iff: K6.iff})} pulse={pulse} />
				<GTag x={cols[1].x1} y={990} text="a model verdict" at={K6.gd + 20} size={24} anchor="end" />
				<g transform={`translate(${lerp(700, 0, slide)},0)`} opacity={prog(f, K6.one, 8)}>
					<MistakeChip x={480} y={96} text="biotechnology is good" at={K6.one} cross={K6.one + 24} size={30} />
				</g>
				{void K6.now}{void K6.staged}{void K6.same}{void K6.judge}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 7. What would change the verdict? ----------
const K7 = cues(S('verdict-checks'), {good: 'A good condition', monitor: 'resistance monitoring', season: 'each season', common: 'became common', weaken: 'would weaken', stage: 'each trial stage', fall: 'target mosquitoes fall', steady: 'other species hold steady', agree: 'people affected agree', either: 'either way'});
export const SceneChecks: React.FC = () => {
	const f = useCurrentFrame();
	const btLit = vis(f, K7.monitor - 10, K7.stage, 10);
	const gdLit = prog(f, K7.stage, 10);
	const hi = vis(f, K7.common + 4, K7.weaken + 70, 20);
	const res = 0.14 + 0.62 * hi;
	const btTilt = lerp(14, 1, hi);
	const rock = f >= K7.either ? 9 * Math.sin((f - K7.either) / 5) * (1 - prog(f, K7.either + 60, 20)) : 0;
	const gdTilt = -12 * (1 - prog(f, K7.stage + 20, 30)) + rock;
	const popDraw = prog(f, K7.fall, 40);
	const pts = Array.from({length: 21}, (_, i) => i / 20).filter(t => t <= popDraw + 1e-6).map(t => `${1500 + t * 260},${560 + (t < 0.25 ? 0 : 70 * smooth((t - 0.25) / 0.75)) - 34}`);
	return (
		<>
			<Heading text="What would change the verdict?" at={4} size={56} />
			<Overlay>
				{/* the two verdicts, small */}
				<g opacity={0.5 + 0.5 * Math.max(btLit, 1 - gdLit)}>
					<VerdictBar x={100} y={180} w={830} h={110} at={-100} size={27} lit={btLit} lines={[[{t: 'Bt cotton: to a large extent justified,'}], [{t: 'provided that refuges keep resistance rare.'}]]} />
				</g>
				<g opacity={0.5 + 0.5 * gdLit}>
					<VerdictBar x={990} y={180} w={830} h={110} at={-100} size={27} lit={gdLit} lines={[[{t: 'Gene drive: not yet for release; staged trials,'}], [{t: 'if each stage shows no serious harm and communities agree.'}]]} />
				</g>
				<Balance x={515} y={440} s={0.9} tilt={btTilt} weight={1} glow={btLit * 0.6} />
				<Balance x={1405} y={440} s={0.9} tilt={gdTilt} weight={1} glow={gdLit * 0.6} />
				{/* Bt cotton: resistance monitoring each season */}
				<g opacity={prog(f, K7.monitor, 14) * (0.45 + 0.55 * btLit)}>
					<Pl p={PLATES.larva} cx={210} cy={640} w={170} />
					<Sx x={330} y={580} text="resistance alleles in caterpillars" size={28} color={GREY_INK} hand />
					<rect x={330 + 520 * 0.5} y={604} width={520 * 0.5} height={34} rx={8} fill="#fde7c4" opacity={0.8} />
					<FillBar x={330} y={606} w={520} h={30} p={res} color={hi > 0.5 ? AMBER : '#9aa3ab'} />
					{[0, 1, 2, 3, 4].map(k => <line key={k} x1={330 + k * 130} y1={650} x2={330 + k * 130} y2={664} stroke={GREYT} strokeWidth={3} />)}
					<Sx x={590} y={698} text="seasons" size={24} color={GREY_INK} hand anchor="middle" />
				</g>
				<Tg x={330} y={780} text="checked every season" at={K7.season + 10} out={K7.common} size={38} />
				<Tg x={330} y={780} text="verdict weakens" at={K7.weaken} out={K7.stage} size={38} />
				{/* the gene drive: three trial-stage checks */}
				<CheckBox x={1000} y={580} text="target mosquitoes fall?" o={prog(f, K7.fall - 6, 12)} tick={prog(f, K7.fall + 40, 10)} lit={vis(f, K7.fall, K7.steady, 10)} />
				<g opacity={prog(f, K7.fall, 12)}>
					<line x1={1500} y1={500} x2={1500} y2={600} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={1500} y1={600} x2={1770} y2={600} stroke={INK_SOFT} strokeWidth={3} />
					{pts.length > 1 ? <polyline points={pts.join(' ')} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
					<MosqG x={1790} y={500} s={1} hot />
				</g>
				<CheckBox x={1000} y={730} text="other species steady?" o={prog(f, K7.steady - 6, 12)} tick={prog(f, K7.steady + 30, 10)} lit={vis(f, K7.steady, K7.agree, 10)} />
				<g opacity={prog(f, K7.steady, 12)}>
					<Pl p={PLATES.finch} cx={1580} cy={715} w={80} />
					<InsectG x={1700} y={720} s={1.1} />
					<line x1={1520} y1={770} x2={1770} y2={770} stroke={GREEN} strokeWidth={4} strokeLinecap="round" />
				</g>
				<CheckBox x={1000} y={880} text="people affected agree?" o={prog(f, K7.agree - 6, 12)} q={prog(f, K7.agree + 20, 10)} lit={vis(f, K7.agree, K7.either + 40, 10)} />
				<RoofG x={1640} y={870} s={1.2} o={prog(f, K7.agree, 12)} />
				<Sx x={1760} y={890} text="?" size={48} color={GREY_INK} weight={800} anchor="middle" at={K7.agree + 10} />
				{void K7.good}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 8. Memory ----------
const K8 = cues(S('memory'), {two: 'Two things', aid1: 'A benefit can be paused', why: 'reversibility weighs', aid2: 'provided that'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<Sx x={140} y={360} text="A benefit can be paused;" size={70} color={INK} hand at={K8.aid1} />
				<Sx x={140} y={450} text="an extinction can't be undone." size={70} color={INK} hand at={K8.aid1 + 30} />
				<g opacity={prog(f, K8.aid1 + 20, 14)}>
					<SeasonField x={1380} y={270} w={230} phase={0} labels={['Bt', '']} />
					<ReturnArrow x={1495} y={262} w={170} kind="solid" />
					<InsectG x={1440} y={450} s={2} o={0.4} color={GREYT} />
					<ReturnArrow x={1640} y={450} w={170} kind="broken" />
				</g>
				<Sx x={140} y={760} text="Verdict, provided that ..." size={70} color={AMBER_INK} hand at={K8.aid2} />
				<Balance x={1500} y={820} s={1.2} tilt={12} weight={prog(f, K8.aid2 + 10, 12)} glow={0.5} o={prog(f, K8.aid2, 12)} />
				{void K8.two}{void K8.why}
			</Overlay>
		</>
	);
};
void PAST_BT; void PAST_GD;
