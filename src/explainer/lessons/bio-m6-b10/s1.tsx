// M6 B10 scenes 1 to 5: two working biotechnologies (Bt cotton; a hornless dairy bull with one ringed allele band);
// what a judgement needs (benefit, harm or risk, who: stakeholders; lines cross the board; a bare pros-and-cons list
// crossed); the plant case: the Bt protein and the spray bars (about 85% fewer, CSIRO), the benefit joined to four
// groups; the risks (selection for resistance and the refuge field, the licence fee with a coin moving from growers
// to the company, the monoculture that Bt does not cause); a verdict with a condition.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay, PlateB, Sx} from '../bio-m5-b13/shared';
import {FillBar, GTag} from '../bio-m6-b01/parts';
import {GreyCross, ScribbleRing, TickG, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, AlleleStrip, BIO_INK, BoardFrame, CARD, CatG, Coin, EDGE, GREYT, GREY_INK, INK, INK_SOFT, JChip, Join, PANEL, PLATES, Pl, ROWY, StopMark,
	WhoIcon, chipAnchor, colsAt, lerp, prog, slotX, smooth, stripRung, vis, whoTop,
} from './parts';
import type {Cols} from './parts';

const C2 = colsAt(0);

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {two: 'Two biotechnologies', cat: 'caterpillars', bull: 'And a dairy bull', edited: 'edited', both: 'Both work', same: "isn't the same", judge: 'judge plant', why: 'why does an animal'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = 1 - 0.4 * prog(f, K1.same, 14);
	return (
		<>
			<Heading text="How should we judge it?" at={K1.judge} size={64} />
			<Overlay>
				<Pl p={PLATES.cotton} cx={430} cy={450} w={420} o={prog(f, K1.two + 20, 16)} />
				<Pl p={PLATES.larva} cx={760} cy={600} w={250} o={prog(f, K1.cat, 14)} />
				<StopMark x={850} y={520} r={34} o={prog(f, K1.cat + 14, 10)} />
				<Sx x={430} y={760} text="Bt cotton" size={40} color={INK} hand anchor="middle" at={K1.two + 30} />
				<Pl p={PLATES.bull} cx={1400} cy={410} w={620} o={prog(f, K1.bull, 16)} glow={vis(f, K1.why + 10, K1.why + 70, 14)} />
				<Sx x={1400} y={640} text="a hornless dairy bull" size={36} color={GREY_INK} hand anchor="middle" at={K1.bull + 14} />
				<AlleleStrip cx={1400} y={700} n={12} pitch={40} gap={40} band={prog(f, K1.edited + 16, 12)} bandAt={5} draw={prog(f, K1.edited, 20, x => x)} o={f >= K1.edited ? 1 : 0} />
				<ScribbleRing cx={stripRung(1400, 5, 12, 40)} cy={720} rx={36} ry={48} at={K1.edited + 24} out={K1.both} seed={6} />
				<Tg x={1400} y={830} text="hornless allele" at={K1.edited + 28} out={K1.both} anchor="middle" size={44} />
				<g transform={`translate(560,760) scale(${shrink}) translate(-560,-760)`}><TickG x={600} y={750} at={K1.both} s={50} /></g>
				<g transform={`translate(1760,600) scale(${shrink}) translate(-1760,-600)`}><TickG x={1760} y={600} at={K1.both + 8} s={50} /></g>
				<Sx x={960} y={960} text="works ≠ justified" size={76} color={AMBER_INK} hand anchor="middle" at={K1.same + 6} />
			</Overlay>
		</>
	);
};

// ---------- 2. What a judgement needs ----------
const K2 = cues(S('judgement-needs'), {three: 'three things', benefit: 'A benefit', harm: 'A harm or risk', who: 'who', stake: 'stakeholders', help: 'help one group', pros: 'pros and cons', say: 'say who gets which'});
const W4 = ['growers', 'workers', 'insects', 'company'] as const;
export const SceneNeeds: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="What a judgement needs" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} heads={[prog(f, K2.benefit, 12), prog(f, K2.harm, 12), 0]} who={prog(f, K2.who, 12)} />
				{W4.map((n, k) => <WhoIcon key={n} name={n} x={slotX(k)} o={prog(f, K2.stake + 14 + k * 6, 12)} />)}
				{/* one group helped, another pays: the lines cross */}
				<Pl p={PLATES.cotton} cx={410} cy={420} w={300} o={prog(f, 4, 14) * (1 - prog(f, K2.pros - 20, 14))} />
				<Pl p={PLATES.bull} cx={410} cy={760} w={420} o={prog(f, 10, 14) * (1 - prog(f, K2.pros - 20, 14))} />
				<JChip col={C2[0]} y={ROWY[0]} lines={['what improves,', 'and by how much?']} kind="benefit" o={prog(f, K2.benefit + 6, 12)} lit={1 - 0.6 * prog(f, K2.pros, 12)} />
				<JChip col={C2[1]} y={ROWY[0]} lines={['what could go wrong?']} kind="harm" o={prog(f, K2.harm + 6, 12)} lit={1 - 0.6 * prog(f, K2.pros, 12)} />
				<Tg x={1015} y={560} text="helps one group" at={K2.help + 14} anchor="middle" size={38} />
				<Tg x={1560} y={560} text="costs another" at={K2.help + 24} anchor="middle" size={38} />
				<Join a={chipAnchor(C2[0], ROWY[0], 2)} b={whoTop(slotX(3))} at={K2.help + 14} />
				<Join a={chipAnchor(C2[1], ROWY[0])} b={whoTop(slotX(0))} at={K2.help + 24} />
				<Sx x={760} y={800} text="stakeholders:" size={42} color={INK} weight={800} at={K2.stake} />
				<Sx x={1060} y={800} text="anyone or anything affected" size={38} color={BIO_INK} hand at={K2.stake + 10} />
				{/* a bare list of pros and cons is not enough */}
				<g opacity={prog(f, K2.pros, 12)}>
					<rect x={170} y={300} width={480} height={330} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<line x1={410} y1={320} x2={410} y2={610} stroke={EDGE} strokeWidth={2.5} />
					<Sx x={290} y={360} text="pros" size={38} color={GREY_INK} hand anchor="middle" />
					<Sx x={530} y={360} text="cons" size={38} color={GREY_INK} hand anchor="middle" />
					{[0, 1, 2].map(k => <g key={k}><line x1={210} y1={420 + k * 60} x2={370} y2={420 + k * 60} stroke={GREYT} strokeWidth={5} strokeLinecap="round" /><line x1={450} y1={420 + k * 60} x2={610} y2={420 + k * 60} stroke={GREYT} strokeWidth={5} strokeLinecap="round" /></g>)}
				</g>
				<GreyCross x={410} y={465} at={K2.pros + 30} s={110} />
				<Tg x={410} y={720} text="say who gets which" at={K2.say} anchor="middle" size={50} />
				{void K2.three}{void PANEL}
			</Overlay>
		</>
	);
};

// ---------- the cotton board: chips, joins and who icons ----------
const W6 = ['growers', 'workers', 'community', 'insects', 'company', 'ecosystem'] as const;
type CB = {chips: {o: number; lit: number}[]; joinAt: number[][]; whoLit?: number[]; whoO?: number; cols?: Cols; joinO?: number};
const CHIPS = [
	{col: 0, row: 0, lines: ['far fewer', 'insecticide sprays'], kind: 'benefit' as const, to: [0, 1, 2, 3]},
	{col: 1, row: 0, lines: ['resistance can evolve;', 'managed by refuges'], kind: 'harm' as const, to: [0, 5]},
	{col: 1, row: 1, lines: ['licence fee each season'], kind: 'harm' as const, to: [4]},
	{col: 1, row: 2, lines: ['still a monoculture', '(not caused by Bt)'], kind: 'harm' as const, to: [5]},
];
const CottonBoard: React.FC<CB> = ({chips, joinAt, whoLit = [0, 0, 0, 0, 0, 0], whoO = 1, cols = C2, joinO = 1}) => (
	<>
		{CHIPS.map((c, i) => c.to.map((k, j) => <Join key={`${i}${k}`} a={chipAnchor(cols[c.col], ROWY[c.row], c.lines.length)} b={whoTop(slotX(k))} at={joinAt[i][j]} o={chips[i].o * joinO} lit={chips[i].lit} />))}
		{CHIPS.map((c, i) => <JChip key={i} col={cols[c.col]} y={ROWY[c.row]} lines={c.lines} kind={c.kind} o={chips[i].o} lit={chips[i].lit} />)}
		{W6.map((n, k) => <WhoIcon key={n} name={n} x={slotX(k)} o={whoO} lit={whoLit[k]} />)}
	</>
);
const NEVER = [[1e9, 1e9, 1e9, 1e9], [1e9, 1e9], [1e9], [1e9]];

// ---------- 3. Bt cotton: the benefit ----------
const K3 = cues(S('cotton-benefit'), {start: 'Start with the plant', carries: 'Bt cotton carries', toxic: 'toxic to certain caterpillars', only: 'It only works', sprayed: 'many times a season', together: 'Together with', pct: 'eighty-five', benefits: 'That benefits', growers: ['growers', 2], workers: 'farm workers', comm: 'nearby communities', ins: 'beneficial insects'});
export const SceneCottonBenefit: React.FC = () => {
	const f = useCurrentFrame();
	const joins = [[K3.growers, K3.workers, K3.comm, K3.ins], ...NEVER.slice(1)];
	const m = smooth(prog(f, K3.sprayed - 30, 30, x => x));
	return (
		<>
			<Heading text="Bt cotton: the benefit" at={4} size={60} />
			<Overlay>
				{/* the mechanism fills the frame first; plant and caterpillar move into the case panel when the sprays start */}
				<BoardFrame cols={C2} heads={[m, m, 0]} who={m} panel={m} />
				<Pl p={PLATES.cotton} cx={lerp(700, 250, m)} cy={lerp(560, 420, m)} w={lerp(560, 290, m)} o={prog(f, K3.carries, 14)} />
				<Pl p={PLATES.larva} cx={lerp(1380, 555, m)} cy={lerp(560, 420, m)} w={lerp(560, 260, m)} o={prog(f, K3.toxic - 6, 14)} dim={prog(f, K3.toxic + 40, 20)} />
				{Array.from({length: 7}, (_, k) => {
					const t = smooth(prog(f, K3.toxic + 4 + k * 5, 30, x => x));
					return <circle key={k} cx={lerp(860, 1250, t)} cy={lerp(500, 560, t) - Math.sin(t * Math.PI) * 60} r={13} fill="#cfe3d2" stroke="#3f7a52" strokeWidth={3} opacity={prog(f, K3.toxic + 4 + k * 5, 6) * (1 - prog(f, K3.toxic + 32 + k * 5, 8)) * (1 - m)} />;
				})}
				<Tg x={1040} y={940} text="Bt protein: toxic to certain caterpillars" at={K3.toxic + 10} out={K3.only} anchor="middle" size={48} />
				<Tg x={1040} y={940} text="works only after binding in their guts" at={K3.only + 6} out={K3.sprayed - 30} anchor="middle" size={48} />
				<Pl p={PLATES.bact} cx={1380} cy={540} w={420} o={vis(f, K3.carries + 10, K3.toxic - 10, 12)} />
				<Tg x={1380} y={760} text="soil bacterium" at={K3.carries + 16} out={K3.toxic - 10} anchor="middle" size={42} color={GREY_INK} />
				<Tg x={700} y={260} text="carries a gene from a soil bacterium" at={K3.carries + 20} out={K3.toxic} anchor="middle" size={44} color={BIO_INK} />
				<PlateB p={PLATES.sprayer} cx={170} cy={700} w={52} o={prog(f, K3.sprayed, 10)} />
					<Sx x={210} y={712} text="before" size={34} color={GREY_INK} hand at={K3.sprayed} />
				<FillBar x={330} y={680} w={370} h={40} p={prog(f, K3.sprayed, 26)} color="#9aa3ab" o={prog(f, K3.sprayed, 10)} />
				<Sx x={210} y={792} text="with Bt" size={34} color={GREY_INK} hand at={K3.pct} />
				<FillBar x={330} y={760} w={370} h={40} p={0.15 * prog(f, K3.pct, 20)} color={AMBER} o={prog(f, K3.pct, 10)} />
					<Sx x={410} y={856} text="about 85% fewer sprays" size={38} color={AMBER_INK} weight={800} anchor="middle" at={K3.pct + 16} />
				<Sx x={410} y={900} text="with better pest management (CSIRO)" size={28} color={GREY_INK} anchor="middle" weight={600} at={K3.pct + 10} />
				<CottonBoard chips={[{o: prog(f, K3.benefits, 12), lit: 1}, {o: 0, lit: 0}, {o: 0, lit: 0}, {o: 0, lit: 0}]} joinAt={joins} whoO={0.85 * m}
					whoLit={[K3.growers, K3.workers, K3.comm, K3.ins, 1e9, 1e9].map(a => prog(f, a + 10, 10))} />
				{void K3.start}{void K3.only}{void K3.together}
			</Overlay>
		</>
	);
};

// ---------- 4. Bt cotton: the risks ----------
const K4 = cues(S('cotton-risks'), {risks: 'Now the risks', cat: 'Caterpillars that happen', survive: 'survive, and pass', natsel: 'natural selection', over: 'Over generations', stops: 'stops working', refuges: 'refuges', susc: 'susceptible caterpillars', mate: 'mate with', keeping: 'keeping resistance', rare: 'rare', licence: 'licence fee', company: 'company', field: 'a field of one crop', bio: 'biodiversity'});
const BLK = Array.from({length: 20}, (_, i) => [175 + (i % 5) * 85, 490 + Math.floor(i / 5) * 78] as [number, number]);
const BASE = [7, 13], GEN1 = [2, 16], GEN2 = [0, 9, 11, 18];
const REF = Array.from({length: 8}, (_, i) => [598 + (i % 2) * 56, 490 + Math.floor(i / 2) * 78] as [number, number]);
export const SceneCottonRisks: React.FC = () => {
	const f = useCurrentFrame();
	const fieldO = prog(f, K4.risks + 10, 14) * (1 - 0.72 * prog(f, K4.licence, 14)) * (1 - prog(f, K4.bio - 10, 12));
	const addAt = (i: number) => (BASE.includes(i) ? -100 : GEN1.includes(i) ? K4.survive + 36 : GEN2.includes(i) ? K4.natsel + 6 : K4.stops + i * 2);
	const meet = smooth(prog(f, K4.mate, 30, x => x));
	const arcA: [number, number] = [slotX(0), 840], arcB: [number, number] = [slotX(4), 840];
	const coinT = smooth(prog(f, K4.company, 40, x => x));
	const bez = (t: number): [number, number] => {
		const p0 = arcA, p1: [number, number] = [arcA[0], 770], p2: [number, number] = [arcB[0], 770], p3 = arcB;
		const u = 1 - t;
		return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]];
	};
	const [coinX, coinY] = bez(coinT);
	const fee = vis(f, K4.licence + 10, K4.bio, 12);
	return (
		<>
			<Heading text="Bt cotton: the risks" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} />
				<Pl p={PLATES.cotton} cx={250} cy={330} w={150} o={1 - prog(f, K4.bio - 10, 12)} />
					<Pl p={PLATES.larva} cx={560} cy={330} w={150} o={1 - prog(f, K4.bio - 10, 12)} />
				{/* the refuge field */}
				<g opacity={fieldO}>
					<rect x={130} y={440} width={410} height={330} rx={12} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={3} />
					<rect x={560} y={440} width={130} height={330} rx={12} fill="#f6f1df" stroke="#a39a6a" strokeWidth={3} strokeDasharray="10 7" opacity={prog(f, K4.refuges - 6, 12)} />
					<Sx x={335} y={428} text="Bt cotton" size={34} color={INK} hand anchor="middle" />
					<Sx x={625} y={428} text="refuge" size={34} color={INK} hand anchor="middle" opacity={prog(f, K4.refuges - 6, 12)} />
					{BLK.map(([x, y], i) => {
						const isBase = BASE.includes(i);
						const mx = isBase ? lerp(x, 515, meet) : x;
						const resO = isBase ? 1 : vis(f, addAt(i), K4.refuges, 10);
						return (
							<g key={i}>
								<CatG x={mx} y={y} s={1.3} res={false} o={prog(f, K4.cat + i, 8) * (1 - resO)} dead={prog(f, K4.survive + 4 + (i % 4) * 3, 14)} />
								<CatG x={mx} y={y} s={1.3} res o={resO * prog(f, K4.cat + i, 8)} />
							</g>
						);
					})}
					{REF.map(([x, y], i) => <CatG key={i} x={x} y={y} res={false} s={1} o={prog(f, K4.refuges + 8 + i * 3, 10)} />)}
					{[[626, 529], [626, 607], [626, 685]].map(([x, y], i) => <CatG key={i} x={x} y={y} res={i === 2} s={0.55} o={prog(f, K4.keeping + i * 6, 10)} />)}
				</g>
				<Tg x={410} y={830} text="selection for resistance" at={K4.natsel} out={K4.refuges} anchor="middle" size={44} />
				<Tg x={410} y={830} text="refuge keeps resistance rare" at={K4.rare} out={K4.licence} anchor="middle" size={40} />
				{/* the monoculture */}
				<Pl p={PLATES.field} cx={410} cy={600} w={520} o={prog(f, K4.bio - 6, 14)} />
				<ScribbleRing cx={277} cy={600} rx={128} ry={78} at={K4.bio + 10} seed={8} />
				<CottonBoard
					chips={[{o: 0.4, lit: 0}, {o: prog(f, K4.keeping, 12), lit: vis(f, K4.keeping, K4.licence, 10)}, {o: prog(f, K4.licence, 12), lit: vis(f, K4.licence, K4.bio, 10)}, {o: prog(f, K4.bio, 12), lit: prog(f, K4.bio, 10)}]}
					joinAt={[[1e9, 1e9, 1e9, 1e9], [K4.keeping + 12, K4.keeping + 22], [K4.licence + 12], [K4.bio + 12]]} whoO={0.85}
					whoLit={[vis(f, K4.keeping + 12, K4.licence + 50, 10), 0, 0, 0, fee, prog(f, K4.bio + 12, 10)]} />
				{/* growers pay, the company gains */}
				<g opacity={fee}>
					<path d={`M${arcA[0]},${arcA[1]} C${arcA[0]},770 ${arcB[0]},770 ${arcB[0]},${arcB[1]}`} fill="none" stroke={AMBER} strokeWidth={3.5} strokeDasharray="10 8" />
					<Coin x={coinX} y={coinY} r={24} o={prog(f, K4.company, 8)} />
				</g>
				<Tg x={1250} y={735} text="growers pay, company gains" at={K4.company + 6} out={K4.bio} anchor="middle" size={42} />
				{void K4.over}{void K4.susc}{void K4.field}{void INK}{void INK_SOFT}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 5. A verdict with a condition ----------
const K5 = cues(S('cotton-verdict'), {so: 'So, a judgement', large: 'large and measured', reaches: 'reaches several groups', main: 'The main risk', managed: 'managed by refuges', pay: 'Growers pay the fee', chosen: 'chosen Bt', justified: 'justified', aslong: 'as long as', notice: 'Notice that', cond: 'condition'});
export const SceneCottonVerdict: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [vis(f, K5.large, K5.main, 10), vis(f, K5.managed - 40, K5.pay, 10), vis(f, K5.pay, K5.justified, 10), 0];
	const vx = C2[0].x, vw = C2[1].x + C2[1].w - 20 - C2[0].x;
	return (
		<>
			<Heading text="A verdict with a condition" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} />
				<Pl p={PLATES.cotton} cx={410} cy={450} w={400} />
				<CottonBoard chips={lit.map(l => ({o: 1, lit: l}))} joinAt={[[-100, -100, -100, -100], [-100, -100], [-100], [-100]]} whoO={0.85 * (1 - prog(f, K5.justified - 10, 14))} joinO={1 - prog(f, K5.justified - 10, 14)}
					whoLit={[0, 1, 2, 3, 4, 5].map(k => (k < 4 ? lit[0] : 0) + (k === 0 || k === 5 ? lit[1] : 0) + (k === 4 || k === 0 ? lit[2] : 0))} />
				<Tg x={410} y={720} text="most Australian cotton is Bt" at={K5.chosen} out={K5.notice} anchor="middle" size={36} color={GREY_INK} />
				<g opacity={prog(f, K5.justified, 12)}>
					<rect x={vx} y={730} width={vw} height={86} rx={20} fill="#fff3d9" stroke={AMBER} strokeWidth={4} />
					<Sx x={vx + 30} y={788} text="Verdict: justified for Australian cotton" size={48} color={INK} hand />
				</g>
				<Sx x={vx + 30} y={880} text="condition: resistance management keeps working" size={42} color={AMBER_INK} hand at={K5.aslong} />
				<ScribbleRing cx={vx + 118} cy={867} rx={104} ry={34} at={K5.cond} seed={2} />
				<g opacity={1 - prog(f, K5.notice + 90, 14)}>
					<MistakeChip x={130} y={930} text="it boosts yield, so it's good" at={K5.notice} cross={K5.notice + 20} size={32} />
				</g>
				{void K5.so}{void K5.reaches}{void BIO_INK}
			</Overlay>
		</>
	);
};
