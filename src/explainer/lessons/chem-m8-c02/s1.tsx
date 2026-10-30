// M8 C02 scenes 1 to 6: the hook (a clear wastewater sample turns white with barium; the c01 titration chip dims); what
// gravimetric analysis is (the flow to the balance and the three requirement cards); choosing the solid (Ca against Ba
// with their Ksp and dissolved-ion counters, excess Ba lowering the sliver, Na crossed, the chloride row); precipitate
// and digest (the method strip, HCl drops with CO2 bubbles, the cross-fade to the settled plate, the test drop, the
// hazard chip, the crystal zoom and filter line); filter and wash (funnel, wash bottle jet, the wash-drops inset);
// constant mass (the oven, desiccator and balance loop, the tare readout, four readings, the bracket that stops the loop).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BAL, DESICC, FEAT, FUNNEL, Heading, NB, OVEN, WASH, WASTE, sc} from './common';
import {
	AChip, Arrow, BalRead, Beaker, Bubbles, Counter, Crystals, DimG, FallDrop, Fade, INK, INK_SOFT, KeptChip, LensFrame, MethodStrip, MistakeX, NAVY, Note, Overlay, PicF, ReqChip, Sx, TEAL,
	UNK, VBracket, WashDrops, beakerPt, clamp01, natPt, picW, smooth, vis,
} from './parts';

const GREYX = '#9a948a';
export const BK = {x: 120, y: 330, h: 440};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {last: 'Last time', counted: 'counted chloride', volume: 'measuring a volume', weigh: "we'll weigh", waste: 'A wastewater sample', clear: 'perfectly clear', add: 'Add barium', solid: 'white solid', after: "After it's", mass: 'uses only its mass', so: 'So how does', that: 'tell you that'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K1.clear, 26));
	const wx = 660 + (100 - 660) * m, wy = 280 + (300 - 280) * m, wh = 470 + (200 - 470) * m;
	const B = {x: 640, y: 330, h: 520};
	const [dx, dy] = beakerPt(B.x, B.y, B.h, 1020, 500);
	return (
		<>
			<Heading text="Weighing an ion" at={4} size={64} />
			<Overlay>
				<DimG at={K1.waste} to={0.4}><AChip x={96} y={190} text="c01: volume (titration)" size={28} color={GREYX} hand={false} at={K1.counted} /></DimG>
				<Fade at={K1.weigh} out={K1.waste}><PicF p={BAL} x={1380} y={300} h={300} /><Note x={1490} y={650} text="this time: weigh it" size={32} color={TEAL} anchor="middle" at={K1.weigh + 6} /></Fade>
				<Fade at={K1.waste}>
					<rect x={wx - 10} y={wy - 10} width={(wh * 1973) / 1948 + 20} height={wh + 20} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<PicF p={WASTE} x={wx} y={wy} h={wh} />
					<Note x={wx + 10} y={wy + wh + 46} text="wastewater" size={30} color={INK_SOFT} at={K1.waste + 6} />
				</Fade>
				<Beaker x={B.x} y={B.y} h={B.h} settle={K1.solid + 10} o={vis(f, K1.clear + 10, undefined, 14)} />
				<Note x={B.x + 260} y={B.y + B.h + 60} text="sample" size={32} color={INK} anchor="middle" at={K1.clear + 20} out={K1.solid} />
				{[0, 1, 2, 3].map(i => <FallDrop key={i} x={dx - 30 + i * 20} y0={B.y - 60} y1={dy} at={K1.add + i * 10} color="#cdbfe6" />)}
				<Note x={B.x + 260} y={B.y + B.h + 60} text="BaSO_4(s), white" size={34} color={INK} anchor="middle" hand={false} at={K1.solid + 30} />
				<g opacity={0.75}><AChip x={1260} y={560} text="mass → sulfate?" size={44} color={NAVY} hand={false} at={K1.that} /></g>
				{void K1.last}{void K1.volume}{void K1.after}{void K1.mass}{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. Measuring by mass ----------
const K2 = cues(sc('measuring-by-mass'), {this: 'This is gravimetric', means: 'just means', turn: 'You turn the', solid: 'into a solid', collect: 'collect all', dry: 'dry it', weigh: 'and weigh it', three: 'three things', almost: 'Almost all', formula: "The solid's formula", only: 'only that solid', dry2: 'clean and dry'});
const FLOW = (k: typeof K2) => [{t: 'ion in water', at: k.turn, x: 560}, {t: 'solid (known formula)', at: k.solid, x: 830}, {t: 'dry', at: k.dry, x: 1250}, {t: 'weigh', at: k.weigh, x: 1400}];
export const SceneMass: React.FC = () => {
	const fl = FLOW(K2);
	return (
		<>
			<Heading text="Gravimetric analysis = measuring by mass" at={K2.this} size={54} />
			<Overlay>
				<Beaker x={BK.x} y={BK.y} h={BK.h} settle={-100} />
				<Note x={560} y={250} text="measuring by mass" size={36} color={TEAL} at={K2.means} />
				{fl.map((s, i) => (
					<g key={s.t}>
						<AChip x={s.x} y={320} text={s.t} size={32} color={NAVY} hand={false} at={s.at} />
						{i < 3 ? <Arrow x1={s.x + s.t.length * 17 + 46} y1={350} x2={fl[i + 1].x - 12} y2={350} at={fl[i + 1].at - 4} color={INK_SOFT} width={4} /> : null}
					</g>
				))}
				<PicF p={BAL} x={1560} y={250} h={190} o={vis(useCurrentFrame(), K2.weigh + 4, undefined, 12)} />
				<ReqChip n={0} x={560} y={540} at={K2.almost} dim={K2.formula} />
				<ReqChip n={1} x={560} y={640} at={K2.formula} dim={K2.only} />
				<ReqChip n={2} x={560} y={740} at={K2.only} glow={K2.dry2} />
				<Note x={560} y={500} text="for the mass to mean something:" size={30} color={INK_SOFT} at={K2.three} />
				{void K2.collect}
			</Overlay>
		</>
	);
};

// ---------- 3. Choosing the solid ----------
const K3 = cues(sc('choosing-solid'), {which: 'So which solid', why: 'why barium', both: 'Both sulfates', ksp: 'compare directly', calc: "Calcium sulfate's", dissolved: 'stay dissolved', ba: 'Barium sulfate leaves', excess: 'barium in excess', lower: 'even lower', common: 'common ion effect', sodium: 'Sodium', soluble: 'is soluble', chloride: 'For chloride', silver: 'making silver'});
export const SceneChoose: React.FC = () => {
	const f = useCurrentFrame();
	const ca = (fr: number) => 0.9 * smooth(prog(fr, K3.dissolved - 10, 30));
	const ba = (fr: number) => (fr < K3.ba ? 0 : 0.05 - 0.035 * smooth(prog(fr, K3.excess + 20, 30)));
	return (
		<>
			<Heading text="Choosing the solid" at={4} size={60} />
			<Overlay>
				<ReqChip n={0} x={1240} y={130} at={K3.dissolved} glow={K3.dissolved + 10} size={26} out={K3.sodium} />
				<DimG at={K3.chloride} to={0.35}>
					<Note x={120} y={330} text="Ca^{2+} → CaSO_4" size={44} color="#b0602a" hand={false} at={K3.why} />
					<Note x={120} y={390} text="Ksp 4.93 × 10^{−5}" size={36} color={INK} hand={false} at={K3.both} />
					<Counter x={170} y={450} frac={ca} color="#d8e04a" at={K3.dissolved - 20} label="lots left dissolved, never weighed" />
				</DimG>
				<Note x={720} y={330} text="Ba^{2+} → BaSO_4" size={44} color="#6d5aa0" hand={false} at={K3.why + 8} />
				<Note x={720} y={390} text="Ksp 1.08 × 10^{−10}" size={36} color={INK} hand={false} at={K3.both + 8} />
				<Counter x={770} y={450} frac={ba} color="#d8e04a" at={K3.ba - 20} label="much less dissolved" />
				<Note x={720} y={790} text={`about 0.5${NB}mg in 200${NB}mL of pure water at 25${NB}°C`} size={22} color={GREYX} hand={false} at={K3.ba + 30} />
				<AChip x={720} y={840} text={`excess Ba^{2+}`} size={28} color="#6d5aa0" hand={false} at={K3.excess} />
				<AChip x={400} y={230} text="c14: same 1 : 1 type, compare Ksp" size={28} color={GREYX} hand={false} at={K3.ksp - 10} />
				<AChip x={960} y={840} text="c15: common ion effect" size={28} color={GREYX} hand={false} at={K3.common} />
				<g opacity={vis(f, K3.sodium, undefined, 12)}>
					<MistakeX x={1300} y={330} text="Na^{+} → Na_2SO_4: soluble" at={K3.sodium} cross={K3.soluble} size={34} />
				</g>
				<AChip x={720} y={940} text="Cl^{−} + Ag^{+} → AgCl(s)" size={40} color={TEAL} hand={false} at={K3.chloride} />
				{void K3.which}{void K3.calc}{void K3.lower}{void K3.silver}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 4. Precipitate and digest ----------
const K4 = cues(sc('precipitate-digest'), {method: "Here's the method", dissolve: 'Dissolve the sample', acid: 'dilute hydrochloric', carbonate: 'remove carbonate', excess: 'add excess barium', drop: 'A drop more', out: 'sulfate is out', toxic: 'is toxic', gloves: 'wear gloves', residues: 'the residues', digest: 'Then digest', warm: 'keep it warm', small: 'Small crystals', bigger: 'bigger ones grow', slip: "don't slip", trap: 'trap fewer'});
const L4 = {cx: 1360, cy: 690, r: 210};
export const SceneDigest: React.FC = () => {
	const f = useCurrentFrame();
	const [sx, sy] = beakerPt(BK.x, BK.y, BK.h, 1020, FEAT.surf);
	const [ux, uy] = beakerPt(BK.x, BK.y, BK.h, 1020, 1100);
	const [gx, gy] = beakerPt(BK.x, BK.y, BK.h, 1020, 1900);
	const glow = vis(f, K4.digest, undefined, 20);
	return (
		<>
			<Heading text="Method" at={K4.method} size={60} />
			<Overlay>
				<MethodStrip lit={{0: K4.dissolve, 1: K4.carbonate, 2: K4.excess, 3: K4.digest}} />
				{glow > 0.01 ? <ellipse cx={gx} cy={gy} rx={200} ry={30} fill="#f2a65a" opacity={0.45 * glow * (0.8 + 0.2 * Math.sin(f / 8))} /> : null}
				<Sx x={gx} y={gy + 60} text="warm, stand" size={28} color="#a8601c" anchor="middle" hand weight={700} at={K4.warm} />
				<Beaker x={BK.x} y={BK.y} h={BK.h} settle={K4.excess + 20} />
				{[0, 1, 2].map(i => <FallDrop key={'h' + i} x={sx - 20 + i * 20} y0={BK.y - 80} y1={sy + 30} at={K4.acid + i * 10} color="#f3d7b0" />)}
				<Bubbles x={sx} y={uy} at={K4.carbonate + 10} until={K4.excess} n={7} spread={70} rise={uy - sy + 30} color="#cfd8dc" />
				{[0, 1, 2, 3].map(i => <FallDrop key={'b' + i} x={sx - 30 + i * 20} y0={BK.y - 80} y1={sy + 30} at={K4.excess + i * 9} color="#cdbfe6" />)}
				<FallDrop x={sx + 10} y0={BK.y - 80} y1={sy + 60} at={K4.drop + 6} color="#cdbfe6" s={1.4} />
				<DimG at={K4.digest} to={0.35}>
					<AChip x={600} y={250} text="dilute HCl: carbonate leaves as CO_2, so no BaCO_3 forms" size={30} color={TEAL} hand={false} at={K4.carbonate} />
					<AChip x={600} y={330} text="no new cloudiness: complete" size={30} color={TEAL} hand={false} at={K4.out} />
				</DimG>
				<AChip x={600} y={410} text="BaCl_2 toxic; AgNO_3 stains; heavy-metal waste" size={26} color={GREYX} hand={false} at={K4.toxic} />
				<LensFrame cx={L4.cx} cy={L4.cy} r={L4.r} at={K4.digest + 10} title="digestion" titleAt={K4.digest + 14}>
					<Crystals cx={L4.cx} cy={L4.cy} r={L4.r} grow={smooth(prog(f, K4.small, 60))} mesh={smooth(prog(f, K4.slip - 10, 40))} ions={prog(f, K4.trap, 14)} />
				</LensFrame>
				<Note x={L4.cx} y={L4.cy + L4.r + 100} text="small dissolve, big grow" size={28} color={INK} anchor="middle" at={K4.bigger} out={K4.slip} />
				<Note x={L4.cx} y={L4.cy + L4.r + 100} text="big crystals stay on the paper, trap fewer ions" size={26} color={INK} anchor="middle" at={K4.slip + 10} />
				{void K4.gloves}{void K4.residues}{void UNK}
			</Overlay>
		</>
	);
};

// ---------- 5. Filter and wash ----------
const K5 = cues(sc('filter-wash'), {next: 'Next, filter', paper: "you've already dried", rinse: 'Rinse every', bottle: 'wash bottle', wash: 'Then wash', ions: 'Ions like chloride', extra: 'extra barium', clinging: 'clinging to', stay: 'If they stay', add: 'add mass', sulfate: "isn't barium sulfate"});
export const FN = {x: 180, y: 280, h: 560};
export const SceneFilter: React.FC = () => {
	const f = useCurrentFrame();
	const W = {x: 470, y: 420, h: 330};
	const [nx, ny] = natPt(WASH, W.x, W.y, W.h, ...FEAT.nozzle);
	const [rx, ry] = natPt(FUNNEL, FN.x, FN.y, FN.h, ...FEAT.rim);
	const L = {cx: 1360, cy: 560, r: 220};
	return (
		<>
			<Heading text="Filter and wash" at={4} size={60} />
			<Overlay>
				<MethodStrip lit={{0: -100, 1: -100, 2: -100, 3: -100, 4: K5.next, 5: K5.wash}} />
				<PicF p={FUNNEL} x={FN.x} y={FN.y} h={FN.h} />
				<Note x={96} y={920} text="filter paper: dried and weighed first, on the tared watch glass" size={28} color={NAVY} hand={false} at={K5.paper} />
				<Fade at={K5.bottle - 10}><PicF p={WASH} x={W.x} y={W.y} h={W.h} /></Fade>
				<Fade at={K5.bottle} out={K5.stay}>
					<path d={`M${nx},${ny} Q${(nx + rx) / 2},${ny - 120} ${rx + 30},${ry + 10}`} fill="none" stroke="#7fb2d6" strokeWidth={5} strokeDasharray="10 8" strokeDashoffset={-(f % 36)} />
				</Fade>
				<Note x={W.x} y={W.y - 30} text="rinse with distilled water" size={26} color={INK_SOFT} at={K5.rinse + 10} out={K5.wash} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K5.wash} title="washing on the paper" titleAt={K5.wash + 4}>
					<WashDrops cx={L.cx} cy={L.cy} r={L.r} at={K5.ions} labelAt={K5.ions} />
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 100} text="soluble ions carried away" size={28} color={INK} anchor="middle" at={K5.clinging} />
				<KeptChip x={1160} y={880} text="unwashed: extra mass ↑" at={K5.sulfate - 10} color={UNK} size={36} />
				<ReqChip n={2} x={1100} y={140} at={K5.sulfate - 20} glow={K5.sulfate} size={26} />
				{void K5.extra}{void K5.add}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 6. Dry to constant mass ----------
const K6 = cues(sc('constant-mass'), {dry: 'Now dry', oven: 'an oven', cool: 'cool it', desicc: 'a desiccator', sealed: 'a sealed container', cools: 'while it cools', zeroed: 'is zeroed', reading: 'each reading', weigh: 'Then weigh', repeat: 'and repeat', heat: 'Heat', cool2: ['cool', 2], weigh2: ['weigh', 2], again: 'again and again', until: 'until two', agree: 'row agree', further: 'Then further', constant: "that's constant", washing: 'Washing still', balance: 'on the balance'});
const OV = {x: 80, y: 230, h: 280}, DS = {x: 560, y: 230, h: 280}, BL = {x: 330, y: 590, h: 300};
const READS = ['1.268', '1.257', '1.255', '1.255'];
export const SceneConstant: React.FC = () => {
	const f = useCurrentFrame();
	const rAt = [K6.weigh + 10, K6.weigh2 + 6, K6.again + 30, K6.until + 20];
	const loop = (fr: number) => fr >= K6.heat && fr < K6.balance;
	const stop = prog(f, K6.balance, 14);
	const cur = rAt.filter(t => f >= t).length;
	const hi = (t0: number, t1: number) => vis(f, t0, t1, 8);
	const ovG = Math.max(hi(K6.oven, K6.cool), hi(K6.heat, K6.cool2));
	const dsG = Math.max(hi(K6.cools - 20, K6.zeroed), hi(K6.cool2, K6.weigh2));
	const blG = Math.max(hi(K6.weigh, K6.repeat + 30), hi(K6.weigh2, K6.again));
	const balO = 0.35 + 0.65 * prog(f, K6.weigh, 14);
	const RX = 1000, RY = 420;
	return (
		<>
			<Heading text="Dry to constant mass" at={4} size={60} />
			<Overlay>
				<MethodStrip lit={{0: -100, 1: -100, 2: -100, 3: -100, 4: -100, 5: -100, 6: K6.dry, 7: K6.cool, 8: K6.weigh}} />
				{[[OV, ovG], [DS, dsG], [BL, blG]].map(([p, g], i) => {
					const P = p as typeof OV;
					const gg = g as number;
					return gg > 0.01 ? <ellipse key={i} cx={P.x + 140} cy={P.y + P.h / 2} rx={190} ry={P.h * 0.62} fill="#f6d77a" opacity={0.35 * gg} /> : null;
				})}
				<PicF p={OVEN} x={OV.x} y={OV.y} h={OV.h} />
				<Note x={OV.x + 140} y={OV.y - 18} text="oven" size={28} color={INK_SOFT} anchor="middle" at={K6.oven} />
				<PicF p={DESICC} x={DS.x} y={DS.y} h={DS.h} o={vis(f, K6.desicc - 10, undefined, 12)} />
				<Note x={DS.x + 126} y={DS.y - 18} text="desiccator" size={28} color={INK_SOFT} anchor="middle" at={K6.desicc} />
				<Note x={DS.x + 300} y={DS.y + 120} text="sealed, drying agent" size={24} color={INK_SOFT} at={K6.sealed} out={K6.zeroed} />
				<PicF p={BAL} x={BL.x} y={BL.y} h={BL.h} o={balO * vis(f, K6.zeroed - 20, undefined, 12)} />
				<g opacity={1 - 0.7 * stop}>
					<Arrow x1={OV.x + 300} y1={OV.y + 150} x2={DS.x - 16} y2={DS.y + 150} at={K6.cool} color={INK_SOFT} width={5} />
					<Arrow x1={DS.x + 130} y1={DS.y + DS.h + 14} x2={BL.x + 250} y2={BL.y + 60} at={K6.weigh} color={INK_SOFT} width={5} />
					<Arrow x1={BL.x - 10} y1={BL.y + 100} x2={OV.x + 120} y2={OV.y + OV.h + 16} at={K6.repeat} color={INK_SOFT} width={5} />
					{loop(f) ? <circle cx={330 + 220 * Math.cos(f / 9)} cy={560 + 150 * Math.sin(f / 9)} r={9} fill={TEAL} opacity={0.8} /> : null}
				</g>
				<BalRead p={BAL} x={BL.x} y={BL.y} h={BL.h} at={K6.zeroed} text={fr => (fr < rAt[0] ? '0.000' : READS[Math.min(3, rAt.filter(t => fr >= t).length - 1)])} />
				<Note x={BL.x + 110} y={BL.y + BL.h + 46} text="watch glass tared: paper + solid" size={24} color={NAVY} anchor="middle" hand={false} at={K6.weigh} />
				<Note x={RX} y={260} text={`tare: balance zeroed with the empty, dry watch glass (0.000${NB}g)`} size={28} color={NAVY} hand={false} at={K6.zeroed + 6} />
				{READS.map((r, i) => <Note key={i} x={RX} y={RY + 64 * i} text={`${i + 1}: ${r}${NB}g`} size={44} color={i < cur - 1 && i < 2 ? INK_SOFT : INK} hand={false} at={rAt[i]} />)}
				<VBracket x={RX + 260} y1={RY + 128 - 40} y2={RY + 192 + 10} at={K6.agree} color={TEAL} />
				<KeptChip x={RX} y={RY + 262} text="constant mass: drying no longer removing water" at={K6.agree + 10} color={TEAL} size={32} />
				<Note x={RX + 300} y={RY + 170} text="agree: within the balance's precision" size={24} color={GREYX} hand={false} at={K6.agree + 20} />
				<AChip x={RX} y={780} text="dry impurities: constant mass too, so wash" size={30} color={UNK} hand={false} at={K6.balance} />
				<ReqChip n={2} x={RX} y={870} at={K6.washing} glow={K6.balance} size={26} />
				{void K6.reading}{void K6.further}{void K6.constant}{void MistakeX}{void INK}
			</Overlay>
		</>
	);
};
