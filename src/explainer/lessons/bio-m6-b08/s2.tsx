// M6 B08 scenes 4 to 8: bottleneck and founder effect (a random few pass the neck; a few founders reach an island);
// inbreeding shown only as signs that show more often (no allele, bar or two-copy animation stands for a defect, Codex
// check 87); mutation as one new copy (1 / 50, 1 / 2,000,000, computed) and mostly lost by drift (seeded lines);
// gene flow filling Florida's empty slots, the broader decline of inbreeding signs as two unnumbered icon rows and
// the tag "genetic variation increased"; which process matters most; the two memory aids with selection's condition.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, Heading, Overlay, PlateB, Sx, Ticker} from '../bio-m5-b13/shared';
import {CardBox, CurveArrow, qPt} from '../bio-m6-b01/parts';
import {Term} from '../bio-m6-b03/parts';
import {Brace, GreyCross, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {PLATES, TAIL} from './assets';
import {
	AMBER, AMBER_INK, BIO_INK, Cat, CoinRow, DriftLines, FreqBar, INK, INK_SOFT, PoolBasin, Rg, RingBasin, TailMark, TopChips, clamp01, findSet, fmt, freq,
	islandPath, lerp, lostAt, prog, slotsOf, smooth, tailPt, vis,
} from './parts';
import type {RK} from './parts';

const KINDS4: RK[] = ['A', 'B', 'C', 'D'];
/** A round magnifier on the panther's kinked tail (the same plate drawn larger, clipped). */
const TailZoom: React.FC<{zx: number; zy: number; r?: number; o: number; id: string}> = ({zx, zy, r = 70, o, id}) => {
	if (o <= 0.01) return null;
	const big = 900;
	const k = big / (PLATES.panther.box[2] - PLATES.panther.box[0]);
	const cx = zx - (TAIL[0] - (PLATES.panther.box[0] + PLATES.panther.box[2]) / 2) * k;
	const cy = zy - (TAIL[1] - 20 - (PLATES.panther.box[1] + PLATES.panther.box[3]) / 2) * k;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><circle cx={zx} cy={zy} r={r} /></clipPath></defs>
			<circle cx={zx} cy={zy} r={r} fill="#fffdf8" />
			<g clipPath={`url(#${id})`}><PlateB p={PLATES.panther} cx={cx} cy={cy} w={big} /></g>
			<circle cx={zx} cy={zy} r={r} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			<circle cx={zx} cy={zy + 18} r={r * 0.4} fill="none" stroke={AMBER} strokeWidth={4} />
		</g>
	);
};

// ---------- 4. Bottleneck and founder effect ----------
const K4 = cues(S('bottleneck-founder'), {strongest: 'Drift is strongest', hunting: 'Hunting and habitat loss', few: 'a few dozen', bottleneck: 'a bottleneck', survivors: 'The survivors carried', relatives: 'relatives often bred together', inbreeding: 'That inbreeding made', show: 'more likely to show', kinked: 'like kinked tails', works: 'Drift works the same way', leave: 'a few individuals leave', founder: 'founder effect', either: 'Either way'});
const BIG: RK[] = Array.from({length: 28}, (_, i) => KINDS4[(i * 5 + (i >> 1)) % 4]);
// the few that pass the neck: seven of the A and B rings, spread through the basin (kinds C and D do not get through)
const PASS = [...BIG.map((k, i) => (k === 'A' ? i : -1)).filter(i => i >= 0).slice(0, 4), ...BIG.map((k, i) => (k === 'B' ? i : -1)).filter(i => i >= 0).slice(1, 4)].sort((a, b) => a - b);
const MAIN: RK[] = Array.from({length: 28}, (_, i) => KINDS4[(i * 3 + (i >> 2)) % 4]);
const FOUND = [2, 9, 14, 19, 23, 26];
if (PASS.some(i => BIG[i] === 'C' || BIG[i] === 'D')) throw new Error('B08 scene 4: the survivors must miss two kinds');
export const SceneBottleneck: React.FC = () => {
	const f = useCurrentFrame();
	const L = {x: 140, y: 300, w: 640, h: 230};
	const SB = {x: 330, y: 700, w: 260, h: 150};
	const slB = slotsOf(L.x, L.y, L.w, L.h, 28, 7), slS = slotsOf(SB.x, SB.y, SB.w, SB.h, 9, 5);
	const squeeze = smooth(prog(f, K4.hunting + 10, 60));
	const fam = prog(f, K4.relatives, 14);
	const R = {x: 1100, y: 300, w: 640, h: 230};
	const IS = {x: 1430, y: 740, w: 260, h: 140};
	const slM = slotsOf(R.x, R.y, R.w, R.h, 28, 7), slI = slotsOf(IS.x, IS.y, IS.w, IS.h, 6, 3);
	const go = smooth(prog(f, K4.leave + 10, 50));
	const founders: RK[] = FOUND.map(i => MAIN[i]);
	const ICONS: [number, number][] = [[660, 760], [730, 760], [800, 760], [695, 830], [765, 830]];
	return (
		<>
			<Heading text="Bottleneck and founder effect" at={4} size={60} />
			<Overlay>
				<TopChips show={1} filled={[1, 0, 0]} lit={0} />
				{/* bottleneck */}
				<RingBasin x={L.x} y={L.y} w={L.w} h={L.h} kinds={BIG} cols={7} o={prog(f, 2, 14)} ringO={i => (PASS.includes(i) ? 1 - prog(f, K4.hunting + 30 + PASS.indexOf(i) * 5, 2) : 1 - 0.75 * squeeze)} />
				<Tg x={L.x + L.w / 2} y={L.y - 30} text="Florida, long ago" at={6} out={K4.bottleneck} anchor="middle" size={36} color={INK_SOFT} />
				<g opacity={prog(f, K4.hunting, 14)}>
					<path d={`M${L.x + 230},${L.y + L.h + 4} C${L.x + 290},${L.y + L.h + 80} ${L.x + 300},${SB.y - 70} ${SB.x + 90},${SB.y - 6} M${L.x + 410},${L.y + L.h + 4} C${L.x + 350},${L.y + L.h + 80} ${L.x + 340},${SB.y - 70} ${SB.x + 170},${SB.y - 6}`} fill="none" stroke="#8ba9c4" strokeWidth={4} />
					<PoolBasin x={SB.x} y={SB.y} w={SB.w} h={SB.h} />
				</g>
				{PASS.map((i, k) => {
					const [ax, ay] = slB[i], [bx, by] = slS[k];
					const t = smooth(clamp01((f - K4.hunting - 30 - k * 5) / 26));
					return <Rg key={i} x={lerp(ax, bx, t)} y={lerp(ay, by, t)} r={13} k={BIG[i]} o={t > 0.01 ? 1 : 0} />;
				})}
				{[7, 8].map(k => <Rg key={k} x={slS[k][0]} y={slS[k][1]} r={13} k="ghost" o={prog(f, K4.survivors + 10, 12)} />)}
				<Term x={140} y={975} term="bottleneck" gloss="a population crash leaves a few survivors" at={K4.bottleneck} out={K4.works} size={46} />
				<Sx x={SB.x + SB.w / 2} y={SB.y + SB.h + 50} text="bottleneck" size={34} color={INK} weight={800} anchor="middle" at={K4.works} />
				{/* relatives bred together */}
				<g opacity={fam * (1 - 0.6 * prog(f, K4.leave, 14))}>
					{ICONS.map(([x, y], k) => <Cat key={k} x={x} y={y} w={66} />)}
					<DrawPath d="M660,735 C680,700 710,700 730,735 M730,735 C750,700 780,700 800,735 M695,805 C715,770 745,770 765,805" at={K4.relatives + 6} dur={20} color={INK_SOFT} width={2.5} />
				</g>
				<TailZoom zx={930} zy={800} o={vis(f, K4.show - 4, K4.leave, 12)} id="b08-tailzoom" />
				<Tg x={930} y={910} text="inbreeding: harmful traits show more often" at={K4.show + 6} out={K4.leave} anchor="middle" size={36} />
				{/* founder effect */}
				<g opacity={prog(f, K4.works - 10, 14)}>
					<RingBasin x={R.x} y={R.y} w={R.w} h={R.h} kinds={MAIN} cols={7} ringO={i => (FOUND.includes(i) ? 1 - go : 1)} />
					<FreqBar x={R.x + 160} y={R.y + R.h + 22} w={240} p={freq(MAIN, 'A')} text={fmt(freq(MAIN, 'A'))} o={prog(f, K4.leave, 12)} />
					<path d={islandPath(IS.x + IS.w / 2, IS.y + IS.h / 2 + 30, 215, 140)} fill="#efe6cf" stroke={INK_SOFT} strokeWidth={3} />
					<PoolBasin x={IS.x} y={IS.y} w={IS.w} h={IS.h} />
				</g>
				{[0, 1, 2].map(k => {
					const t = smooth(prog(f, K4.leave + 10 + k * 6, 46));
					const [x, y] = qPt([R.x + R.w - 120 + k * 30, R.y + R.h + 60], [IS.x + 60 + k * 70, IS.y - 20], -40, t);
					return <Cat key={k} x={x} y={y} w={60} texas o={prog(f, K4.leave + 4 + k * 6, 8)} />;
				})}
				{founders.map((kd, j) => {
					const [ax, ay] = slM[FOUND[j]], [bx, by] = slI[j];
					const t = smooth(clamp01((f - K4.leave - 14 - j * 4) / 46));
					return f > K4.leave + 14 ? <Rg key={j} x={lerp(ax, bx, t)} y={lerp(ay, by, t)} r={13} k={kd} /> : null;
				})}
				<FreqBar x={IS.x + 30} y={IS.y + IS.h + 16} w={140} p={freq(founders, 'A')} text={fmt(freq(founders, 'A'))} o={prog(f, K4.founder, 12)} />
				<Rg x={R.x + 130} y={R.y + R.h + 35} r={11} k="A" o={prog(f, K4.leave, 12)} />
				<Term x={140} y={975} term="founder effect" gloss="a few individuals start a new population" at={K4.founder} out={K4.either} size={46} />
				<Sx x={IS.x - 120} y={IS.y + 50} text="founder" size={34} color={INK} weight={800} anchor="end" at={K4.either} />
				<Sx x={IS.x - 120} y={IS.y + 90} text="effect" size={34} color={INK} weight={800} anchor="end" at={K4.either} />
				<Tg x={960} y={990} text="few individuals: a random sample of the gene pool" at={K4.either + 8} anchor="middle" size={46} />
				{void K4.strongest}{void K4.few}{void K4.inbreeding}{void K4.kinked}{void tailPt}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 5. Mutation: one new copy ----------
const K5 = cues(S('mutation'), {could: 'Could mutation repair', adds: 'A mutation adds', single: 'a single copy', twentyfive: 'In twenty-five panthers', fifty: 'one copy in fifty', million: 'a population of a million', two: 'one in two million', rare: 'Mutations at any one gene', long: 'a very long time', small: 'in a small population', loses: 'drift loses most new alleles', source: 'Mutation is the source'});
const FL5: RK[] = Array.from({length: 50}, (_, i) => (i === 23 ? 'new' : i % 3 === 0 ? 'B' : 'A'));
const P_NEW = freq(FL5, 'new');
const P_MIL = 1 / (2 * 1000000);
if (P_NEW !== 0.02 || P_MIL !== 0.0000005) throw new Error('B08 scene 5: 1/50 = 0.02 and 1/2,000,000 = 0.0000005');
// a new allele at 1 / 50 in 25 animals: five seeded replicates, most lost within a few generations
const RUNNEW = findSet(3, 25, 20, 0.02, 5, s => s.filter(r => { const g = lostAt(r); return g > 0 && g <= 6; }).length >= 4 && s.some(r => !r.includes(0)) && s.every(r => Math.max(...r) <= 0.2));
export const SceneMutation: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 140, y: 380, w: 620, h: 300};
	const slots = slotsOf(B.x, B.y, B.w, B.h, 52, 10);
	const dropT = smooth(prog(f, K5.single - 6, 18));
	const lineO = prog(f, K5.loses - 8, 12);
	const big = vis(f, K5.million - 6, K5.loses - 8, 14);
	return (
		<>
			<Heading text="Mutation: one new copy" at={4} size={60} />
			<Overlay>
				<TopChips show={1} filled={[1, prog(f, K5.adds, 12), 0]} lit={f >= K5.source ? 1 : -1} />
				<PoolBasin x={B.x} y={B.y} w={B.w} h={B.h} label="Florida (25 panthers)" o={prog(f, 2, 14)} />
				{FL5.map((k, i) => {
					const [x, y] = slots[i];
					if (k === 'new') return <Rg key={i} x={x} y={lerp(y - 160, y, dropT)} r={13} k="new" o={dropT} glow={vis(f, K5.single, K5.single + 40, 8)} />;
					return <Rg key={i} x={x} y={y} r={13} k={k} o={prog(f, 4 + i * 0.4, 8)} />;
				})}
				{[50, 51].map(i => <Rg key={i} x={slots[i][0]} y={slots[i][1]} r={13} k="ghost" o={prog(f, 20, 12)} />)}
				<Tg x={B.x + B.w / 2} y={B.y - 40} text="new allele" at={K5.single + 6} out={K5.fifty} anchor="middle" size={38} />
				<FreqBar x={B.x + 100} y={B.y + B.h + 70} w={300} p={P_NEW * prog(f, K5.fifty, 12)} o={prog(f, K5.fifty - 6, 12) * (1 - prog(f, K5.long, 12))} color={AMBER} />
				<Sx x={B.x + B.w / 2} y={B.y + B.h + 150} text={`1 / 50 = ${fmt(P_NEW)}`} size={50} color={AMBER_INK} weight={800} anchor="middle" at={K5.fifty} out={K5.long} opacity={1 - 0.5 * prog(f, K5.million, 12)} />
				{/* a population of a million: an outline only */}
				<g opacity={big}>
					<PoolBasin x={900} y={330} w={880} h={340} label="a million animals" />
					<Rg x={1340} y={500} r={13} k="new" />
					<Sx x={1340} y={780} text={`1 / 2,000,000 = ${P_MIL.toFixed(7)}`} size={50} color={AMBER_INK} weight={800} anchor="middle" at={K5.two} out={K5.long} />
					<Ticker x={1340} y={880} from={0} to={100000} a={K5.long - 10} b={K5.small} size={46} anchor="middle" suffix=" generations" at={K5.long - 10} />
				</g>
				<Tg x={B.x + B.w / 2} y={B.y - 40} text="lost alleles: rarely remade" at={K5.long} out={K5.loses} anchor="middle" size={38} />
				{/* most new alleles are lost by chance */}
				<g opacity={lineO}>
					<DriftLines x={980} y={330} w={780} h={440} runs={RUNNEW.map(r => r.map(p => p * 5))} draw={prog(f, K5.loses, 60, x => x)} label="new allele in 25 panthers (5 runs)" axis={false} />
					<line x1={980} y1={330} x2={980} y2={770} stroke={INK_SOFT} strokeWidth={2.5} />
					<line x1={980} y1={770} x2={1760} y2={770} stroke={INK_SOFT} strokeWidth={2.5} />
					<text x={968} y={779} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 24}} fill={INK_SOFT}>0</text>
					<text x={968} y={339} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 24}} fill={INK_SOFT}>0.2</text>
					<text x={1760} y={806} textAnchor="end" style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 26}} fill={INK_SOFT}>generations</text>
				</g>
				<Tg x={1370} y={880} text="most new alleles lost by chance" at={K5.loses + 30} anchor="middle" size={42} />
				{void K5.could}{void K5.twentyfive}{void K5.rare}{void BIO_INK}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 6. Gene flow: alleles arrive ----------
const K6 = cues(S('gene-flow'), {what: 'What helped was gene flow', move: 'move and breed', texas: 'The Texas females carried', after: 'After they bred', more: 'more genetic variation', kinked: 'kinked tails became less common', kittens: 'The kittens survived better', grew: 'the population grew', didnt: "didn't make any new alleles", moved: 'It moved existing ones', alike: 'more alike', leave: 'Animals that leave'});
const TX6: RK[] = Array.from({length: 32}, (_, i) => KINDS4[(i * 7 + (i >> 2)) % 4]);
const FL6: RK[] = Array.from({length: 32}, (_, i) => (i >= 24 ? 'ghost' : i % 3 === 0 ? 'B' : 'A'));
// illustrative rows (no numbers): kinked-tail marks on more icons before 1995 than among kittens with Texas parents
const ROW1 = [1, 0, 1, 1, 0, 1, 1, 0], ROW2 = [0, 0, 1, 0, 0, 0, 0, 0];
export const SceneGeneFlow: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: 120, y: 360, w: 620, h: 250}, F = {x: 1180, y: 360, w: 620, h: 250};
	const slF = slotsOf(F.x, F.y, F.w, F.h, 32, 8);
	const a: [number, number] = [T.x + T.w - 60, T.y - 10], b: [number, number] = [F.x + 80, F.y - 10];
	const alike = smooth(prog(f, K6.alike, 30));
	const rows = vis(f, K6.kinked - 6, K6.grew, 14);
	const grid = vis(f, K6.grew, K6.didnt, 12);
	const flowK = (i: number): RK => (i >= 24 ? (prog(f, K6.move + 20 + (i - 24) * 7, 8) > 0.5 ? 'flow' : 'ghost') : FL6[i]);
	const leaveT = smooth(prog(f, K6.leave + 10, 30));
	return (
		<>
			<Heading text="Gene flow: alleles arrive" at={4} size={60} />
			<Overlay>
				<TopChips show={1} filled={[1, 1, prog(f, K6.what + 30, 12)]} lit={2} />
				<RingBasin x={T.x} y={T.y} w={T.w} h={T.h} kinds={TX6} cols={8} label="Texas" o={prog(f, 2, 14)} />
				<RingBasin x={F.x} y={F.y} w={F.w} h={F.h} kinds={FL6} cols={8} label="Florida" o={prog(f, 4, 14)} kindOf={flowK} glow={i => (i >= 24 ? vis(f, K6.more, K6.more + 40, 10) : 0)} />
				<FreqBar x={T.x + 170} y={T.y + T.h + 70} w={260} p={lerp(0.5, 0.44, alike)} o={prog(f, K6.alike - 10, 12)} />
				<Rg x={T.x + 140} y={T.y + T.h + 83} r={12} k="B" o={prog(f, K6.alike - 10, 12)} />
				<Rg x={F.x + 140} y={F.y + F.h + 83} r={12} k="B" o={prog(f, K6.alike - 10, 12)} />
				<FreqBar x={F.x + 170} y={F.y + F.h + 70} w={260} p={lerp(0.2, 0.36, alike)} o={prog(f, K6.alike - 10, 12)} />
				<CurveArrow a={a} b={b} at={K6.move - 10} bow={-90} color={INK_SOFT} width={4} dash="10 8" out={K6.after + 30} />
				{Array.from({length: 8}, (_, k) => {
					const t = smooth(prog(f, K6.move - 6 + k * 7, 34));
					const o = prog(f, K6.move - 6 + k * 7, 6) * (1 - prog(f, K6.move + 34 + k * 7, 8));
					const [x, y] = qPt(a, b, -90, t);
					return <Cat key={k} x={x} y={y - 20} w={64} texas o={o} />;
				})}
				<Tg x={960} y={780} text="alleles arrive with migrants" at={K6.move + 20} out={K6.more} anchor="middle" size={40} />
				<Tg x={960} y={780} text="genetic variation increased" at={K6.more + 6} out={K6.kinked} anchor="middle" size={40} />
				{/* the broader decline of inbreeding signs: two unnumbered icon rows */}
				<g opacity={rows}>
					<Sx x={140} y={880} text="before 1995" size={32} color={INK_SOFT} hand />
					<Sx x={140} y={980} text="kittens with Texas parents" size={32} color={INK_SOFT} hand />
					{ROW1.map((m, k) => <g key={'a' + k}><Cat x={560 + k * 80} y={866} w={70} /><TailMark x={560 + k * 80} y={866} w={70} o={m ? prog(f, K6.kinked + 4 + k * 2, 8) : 0} /></g>)}
					{ROW2.map((m, k) => <g key={'b' + k}><Cat x={560 + k * 80} y={966} w={70} /><TailMark x={560 + k * 80} y={966} w={70} o={m ? prog(f, K6.kinked + 24, 8) : 0} /></g>)}
				</g>
				<Tg x={960} y={780} text="inbreeding signs less common" at={K6.kinked + 10} out={K6.didnt} anchor="middle" size={40} />
				<g opacity={grid}>
					{Array.from({length: 60}, (_, k) => <Cat key={k} x={600 + (k % 15) * 46} y={870 + Math.floor(k / 15) * 40} w={38} o={prog(f, K6.grew + k * 0.6, 6)} />)}
				</g>
				{/* no new alleles */}
				<g opacity={vis(f, K6.didnt, K6.alike, 10)}>
					<Rg x={1490} y={300} r={16} k="new" />
					<GreyCross x={1490} y={300} at={K6.didnt + 10} s={22} />
				</g>
				<Tg x={960} y={780} text="no new alleles" at={K6.didnt + 6} out={K6.alike} anchor="middle" size={40} />
				<Tg x={960} y={780} text="gene flow: pools become more alike" at={K6.alike + 6} anchor="middle" size={40} />
				{/* animals that leave take their alleles out */}
				<g opacity={vis(f, K6.leave, K6.leave + 40, 10)}>
					<Cat x={lerp(F.x + F.w - 40, 1860, leaveT)} y={F.y + 60} w={60} />
					<Rg x={lerp(F.x + F.w - 40, 1860, leaveT)} y={F.y + 100} r={11} k="A" />
				</g>
				{void K6.texas}{void K6.after}{void K6.kittens}{void K6.moved}{void ScribbleRing}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 7. Which matters most? ----------
const K7 = cues(S('which-matters'), {so: 'So which process', depends: 'It depends on the population', small: 'In a small isolated population', where: 'Where populations swap', only: 'And only mutation', long: 'over long times', selection: 'Selection is different again', reason: 'for a reason', direction: 'drift has no direction'});
const RUN20S = findSet(1, 20, 50, 0.5, 5, s => s.some(r => r.includes(0)) && s.some(r => r.includes(1)));
const SEL = [0, 1, 2].map(k => Array.from({length: 51}, (_, g) => { const p0 = 0.15 + 0.05 * k; const s = 0.12 + 0.02 * k; let p = p0; for (let i = 0; i < g; i++) p = (p * (1 + s)) / (1 + s * p); return p; }));
export const SceneWhich: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.6 * prog(f, K7.selection, 14);
	const ROWS = [
		{at: K7.small, t: 'small, isolated population', r: 'drift strongest'},
		{at: K7.where, t: 'many migrants', r: 'gene flow strongest, pools stay alike'},
		{at: K7.only, t: 'new alleles, long term', r: 'mutation'},
	];
	const wob = Math.sin(f * 0.18) * 0.25;
	return (
		<>
			<Heading text="Which matters most?" at={4} size={60} />
			<Overlay>
				<TopChips show={1} filled={[1, 1, 1]} />
				<g opacity={dim}>
					<Brace x1={380} x2={1800} y={262} at={K7.depends} label="depends on size, isolation, time" size={42} />
					{ROWS.map((r, i) => (
						<g key={i} opacity={prog(f, r.at, 14)}>
							<CardBox x={380} y={300 + i * 150} w={1420} h={124} at={-100} />
							<g transform={`translate(470,${362 + i * 150})`}>
								{i === 0 ? <g><PoolBasin x={-60} y={-30} w={120} h={60} /><rect x={-50} y={40} width={100} height={12} rx={6} fill="#efe6d4" /><rect x={-50} y={40} width={50 + 40 * wob} height={12} rx={6} fill="#8a8f96" /></g> : null}
								{i === 1 ? <g><PoolBasin x={-70} y={-24} w={60} h={44} /><PoolBasin x={12} y={-24} w={60} h={44} /><path d="M-20,-34 C-5,-50 10,-50 25,-34" fill="none" stroke={INK_SOFT} strokeWidth={3} /></g> : null}
								{i === 2 ? <Rg x={0} y={0} r={22} k="new" /> : null}
							</g>
							<Sx x={560} y={375 + i * 150} text={r.t} size={44} color={INK} hand />
							<Sx x={1090} y={375 + i * 150} text={'→ ' + r.r} size={44} color={AMBER_INK} hand at={r.at + 20} />
						</g>
					))}
				</g>
				{/* selection against drift */}
				<g opacity={prog(f, K7.selection, 14)}>
					<CardBox x={140} y={760} w={800} h={290} at={-100} />
					<DriftLines x={200} y={820} w={300} h={170} runs={SEL} draw={prog(f, K7.reason, 50, x => x)} axis={false} colors={['#c4632e', '#c4632e', '#c4632e']} />
					<Sx x={540} y={880} text="selection:" size={40} color={INK} hand />
					<Sx x={540} y={930} text="non-random, for a reason" size={36} color={AMBER_INK} hand at={K7.reason} />
					<CardBox x={980} y={760} w={800} h={290} at={-100} />
					<DriftLines x={1040} y={820} w={300} h={170} runs={RUN20S} draw={1} axis={false} />
					<Sx x={1380} y={880} text="drift:" size={40} color={INK} hand />
					<Sx x={1380} y={930} text="random, no direction" size={36} color={AMBER_INK} hand at={K7.direction} />
				</g>
				{void K7.so}{void K7.long}{void FreqBar}
			</Overlay>
		</>
	);
};

// ---------- 8. Memory ----------
const K8 = cues(S('memory'), {two: 'Two aids', drift: 'Drift is luck', small: 'small groups', flow: 'gene flow tends', apart: 'Drift can pull them apart', selection: 'so can selection', different: 'favour different alleles'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const conv = smooth(prog(f, K8.flow + 10, 30));
	const div = smooth(prog(f, K8.apart + 10, 30));
	const pL = lerp(lerp(0.75, 0.5, conv), 0.8, div), pR = lerp(lerp(0.2, 0.45, conv), 0.15, div);
	const tint = vis(f, K8.different, K8.different + 200, 12);
	const cut = prog(f, K8.apart, 10);
	return (
		<>
			<Heading text="Two aids" at={K8.two} size={60} />
			<Overlay>
				<CoinRow x={190} y={318} faces={[true, true, false]} at={K8.drift} gap={70} r={26} />
				<Sx x={420} y={334} text="Drift is luck: luck matters more in small groups." size={52} color={INK} hand at={K8.drift} />
				<Sx x={160} y={500} text="Gene flow tends to make pools alike." size={52} color={BIO_INK} hand at={K8.flow} />
				<Sx x={160} y={580} text="Drift can pull them apart; so can selection," size={52} color={INK} hand at={K8.apart} />
				<Sx x={160} y={650} text="if environments favour different alleles." size={52} color={AMBER_INK} hand at={K8.selection + 10} />
				{/* two pools: bars converge under the gene-flow arrow, then diverge when it is cut */}
				<g opacity={prog(f, K8.flow, 14)}>
					{tint > 0.01 ? <rect x={300} y={740} width={520} height={290} rx={24} fill="#e6f0dc" opacity={tint} /> : null}
					{tint > 0.01 ? <rect x={1100} y={740} width={520} height={290} rx={24} fill="#f6e3cf" opacity={tint} /> : null}
					<RingBasin x={380} y={790} w={360} h={130} kinds={['A', 'B', 'A', 'B', 'B', 'A', 'B', 'B']} cols={4} r={11} />
					<RingBasin x={1180} y={790} w={360} h={130} kinds={['A', 'A', 'B', 'A', 'A', 'A', 'B', 'A']} cols={4} r={11} />
					<FreqBar x={430} y={970} w={260} p={pL} />
					<FreqBar x={1230} y={970} w={260} p={pR} />
					<path d="M760,800 C880,730 1040,730 1160,800" fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={1 - cut} />
					<path d="M1140,790 l20,10 l-22,6" fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={1 - cut} />
					{cut > 0.01 ? <g opacity={cut}><line x1={945} y1={725} x2={975} y2={775} stroke={GREYC} strokeWidth={6} /><line x1={975} y1={725} x2={945} y2={775} stroke={GREYC} strokeWidth={6} /></g> : null}
				</g>
				{void K8.small}{void INK_SOFT}
			</Overlay>
		</>
	);
};
const GREYC = '#9aa0a6';
