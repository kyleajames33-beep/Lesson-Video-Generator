// M7 C04b scenes 8 to 10: how much reagent decides the step (hydrogen: ethyne to ethene to ethane; excess means both
// steps, the overall + 2H₂ line; HBr: bromoethene, then 1,1-dibromoethane), water and what bromine water can tell you
// (alkenes and alkynes both decolourise it, alkanes don't; the formula tells them apart for an open chain with one
// multiple bond) and the memory aid (swap, add, add twice).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, Sx, TEAL, TaskLine, mw} from '../chem-m6-c01/parts';
import {Brace, MULTI, Place, Skel, Tag, TickMark, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {GChip} from '../chem-m7-c03/parts';
import {CT, CondEq, PlateC, ctW, dimAt, pulseAt, vis} from '../chem-m7-c04a/parts';
import {SmallCard} from '../chem-m7-c04a/s2';
import {BRW_PAIR, sc} from './common';
import {AidCards, CARD5, UV, UV_SOFT} from './parts';

// ---------- 8. How much reagent decides the step ----------
const K8 = cues(sc('how-much-reagent'), {so: 'So with an alkyne', check: 'always check', with: 'With hydrogen', becomes: 'ethyne becomes', then: 'then ethane', just: 'With just one', first: 'first step', excess: 'excess', go: 'go all the', two: 'plus two', hbr: 'Hydrogen bromide works', step1: 'first step gives', bromoethene: 'bromoethene', second: 'a second H', dibromo: 'dibromoethane'});
const NI = (at: number) => [{t: 'Ni catalyst, about 150 °C', at}];
export const SceneHowMuch: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, SZ = 42, LEN = 200;
	const left3 = 'HC≡CH + 2H_2';
	const x2 = X - 20 - ctW(left3, SZ) + ctW('HC≡CH + ', SZ) + ctW('2', SZ) / 2;
	const hO = (i: number) => (i === 1 ? 1 : dimAt(f, K8.first, 0.35));
	return (
		<Overlay>
			<Sx x={96} y={150} text="How much reagent?" size={52} color={INK} hand at={K8.so} out={K8.go} />
			<g opacity={1 - prog(f, K8.two - 4, 12)}>
				<CondEq x={X} y={260} left="HC≡CH + H_2" right="CH_2=CH_2" at={K8.with} rightAt={K8.becomes + 14} len={LEN} size={SZ} above={NI(K8.with + 20)} o={hO(1)} />
				<CondEq x={X} y={400} left="CH_2=CH_2 + H_2" right="CH_3CH_3" at={K8.then - 10} rightAt={K8.then + 6} len={LEN} size={SZ} above={NI(K8.then)} o={hO(2)} />
				<Tag x={1400} y={230} text="1 H_2: step 1" at={K8.first} size={30} color="#24407a" fill="#e7edf8" />
			</g>
			<Place keys={[{at: -100, x: 0, y: 0, s: 1}, {at: K8.hbr, x: 960 * 0.35, y: -70, s: 0.65, o: 0.5}]}>
				<CondEq x={X} y={330} left={left3} right="CH_3CH_3" at={K8.two} len={LEN} size={SZ} above={NI(K8.two)} />
				<ellipse cx={x2} cy={330 - SZ * 0.05} rx={30} ry={36} fill="none" stroke="#c98a1b" strokeWidth={5} opacity={vis(f, K8.two + 14)} />
			</Place>
			<Tag x={960} y={490} text="excess = more than enough → both steps" at={K8.excess} size={34} color="#8a5a0c" fill="#fbeec4" anchor="middle" />
			<CondEq x={X} y={640} left="HC≡CH + HBr" right="CH_2=CHBr" at={K8.step1} rightAt={K8.bromoethene} len={LEN} size={SZ} o={dimAt(f, K8.second, 0.4)} />
			<Sx x={X + LEN + 22 + ctW('CH_2=CHBr', SZ) / 2} y={710} text="bromoethene" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K8.bromoethene + 6} opacity={dimAt(f, K8.second, 0.4)} />
			<CondEq x={X} y={810} left="CH_2=CHBr + HBr" right="CH_3CHBr_2" at={K8.second + 6} rightAt={K8.dibromo} len={LEN} size={SZ} />
			<Sx x={X + LEN + 22 + ctW('CH_3CHBr_2', SZ) / 2} y={880} text="1,1-dibromoethane" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K8.dibromo + 6} />
			{void K8.check}{void K8.just}{void K8.go}{void mw}
		</Overlay>
	);
};

// ---------- 9. Water, and what bromine water can tell you ----------
const K9 = cues(sc('bromine-water-limits'), {water: 'Water adds', so: 'So water questions', now: 'And now the', test: 'test makes', alkenes: 'Alkenes and', alkynes: 'and alkynes', both: 'both can add', alkane: "An alkane doesn't", losing: 'So losing', which: 'but not which', tell: 'To tell', formula: 'molecular formula', open: 'open-chain', cn: 'C n H two n is', minus: 'minus two'});
const ZZ = zig(6, -215, 0, 86, 50);
const LIN: V2[] = [[-215, -25], [-129, -25], [-43, -25], [43, 25], [129, -25], [215, 25]];
const chain = (n: number, k = -1, o: 2 | 3 = 2): Bond[] => Array.from({length: n - 1}, (_, i) => (i === k ? {a: i, b: i + 1, order: o, color: MULTI} : {a: i, b: i + 1}));
const TILES: {pts: V2[]; bonds: Bond[]; name: string; formula: string}[] = [
	{pts: ZZ, bonds: chain(6, 0, 2), name: 'hex-1-ene', formula: 'C_6H_12'},
	{pts: LIN, bonds: chain(6, 0, 3), name: 'hex-1-yne', formula: 'C_6H_10'},
	{pts: ZZ, bonds: chain(6), name: 'hexane', formula: 'C_6H_14'},
];
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const xs = [330, 800, 1270], Y = 520;
	const pl = pulseAt(f, K9.minus, 30);
	return (
		<Overlay>
			<Tag x={96} y={150} text="alkyne + H_2O: product changes family (later video)" at={K9.water} size={30} o={dimAt(f, K9.now, 0.4)} />
			<PlateC p={BRW_PAIR} cx={1760} top={300} h={280} o={vis(f, K9.now)} />
			<Tag x={1760} y={600} text="the test itself: practical video" at={K9.test} size={24} anchor="middle" o={dimAt(f, K9.test + 60, 0.45)} />
			{TILES.map((t, i) => (
				<g key={t.name} opacity={vis(f, K9.test + i * 8)}>
					<Skel pts={t.pts.map(p => [p[0] + xs[i], p[1] + Y] as V2)} bonds={t.bonds} at={K9.test + i * 8} width={6} />
					<Sx x={xs[i]} y={Y + 80} text={t.name} size={30} color={INK} anchor="middle" weight={700} at={-1000} />
					<CT x={xs[i]} y={Y + 124} text={t.formula} size={30} anchor="middle" color={INK_SOFT} at={K9.minus} />
				</g>
			))}
			{[0, 1].map(i => <g key={i}><TickMark x={xs[i] - 100} y={Y + 180} at={K9.alkynes + i * 10} /><Tag x={xs[i] - 70} y={Y + 160} text="decolourises" at={K9.alkynes + i * 10} size={26} color="#1f6b44" fill="#e3f3e9" /></g>)}
			<Tag x={xs[2]} y={Y + 160} text="no change (no UV)" at={K9.alkane} size={26} anchor="middle" />
			<Brace x1={xs[0] - 230} x2={xs[1] + 230} y={Y - 60} dir={-1} text="multiple bond: but which?" at={K9.which} size={32} />
			<GChip x={xs[0] - 150} y={Y + 230} text="alkene: C_{n}H_{2n}" at={K9.formula} size={34} color={TEAL} fill="#dff2ef" />
			<g transform={`translate(${xs[1]},${Y + 258}) scale(${1 + 0.12 * pl}) translate(${-xs[1]},${-(Y + 258)})`}>
				<GChip x={xs[1] - 170} y={Y + 230} text="alkyne: C_{n}H_{2n−2}" at={K9.formula + 8} size={34} color="#24407a" fill="#e7edf8" />
			</g>
			<Tag x={(xs[0] + xs[1]) / 2} y={Y + 330} text="open chain, one multiple bond" at={K9.open} size={26} anchor="middle" />
			<Tag x={xs[2]} y={Y + 240} text="from the properties video" at={K9.formula} size={22} anchor="middle" />
			{void K9.so}{void K9.alkenes}{void K9.both}{void K9.losing}{void K9.tell}{void K9.cn}{void UV}{void UV_SOFT}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const K10 = cues(sc('memory-aid'), {so: "So here's", swap: 'swap:', uv: 'UV light,', add: 'add once', twice: 'add twice,', each: 'one piece', last: ['Alkanes swap', 2]});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const sw = mw('Alkanes swap, alkenes add, alkynes add twice.', 58, true, 700);
	return (
		<Overlay>
			<TaskLine text="Alkanes swap, alkenes add, alkynes add twice." at={K10.so} size={58} y={190} color={TEAL} />
			<DrawPath d={`M96,212 C${96 + sw * 0.3},218 ${96 + sw * 0.7},206 ${96 + sw},214`} at={K10.last} dur={20} color="#c98a1b" width={6} />
			<AidCards lit={[K10.swap, K10.add, K10.twice]} y={280} />
			<SmallCard upto={4} rows={CARD5} at={K10.twice + 30} fill={-100} right={1420} y={620} />
			{void K10.uv}{void K10.each}{void f}
		</Overlay>
	);
};
