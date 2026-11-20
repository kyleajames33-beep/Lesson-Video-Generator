// Y11 Chem M1 V12 scenes 5 to 10: the 3 s prediction (the configuration beside the grid, period ? and group ?),
// reading it (framed period 4 and group 2, calcium lit) and the group 6 trap (group 6 is in the d block; six valence
// electrons put an element in group 16), group chemistry (the painted Li, Na and K troughs, the chlorine jar, a clear
// jar of argon, coded diatomic pairs), metals, non-metals and metalloids (the grid coloured by type, the staircase,
// three property cards and the silicon sample), period 3 at room temperature (the painted samples in order, then the
// grid with the eleven gases and two liquids marked) and the halogens (painted ampoules: gas, gas, liquid, solid).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {CLJAR, GASES, JAR, LIQUIDS, P3, SI, TR_K, TR_LI, TR_NA, VIALS, VIAL_X, hold, ph, pw, sc, p3h} from './common';
import {
	BINK, Bracket, Chip, D_INK, DrawBox, DrawPath, Fade, Framed, GOLD_T, GREEN_T, Heading, INK, LitCell, NAVY_T, P_FILL, P_INK, PGrid, PenArrow, PenRing, Plate, PlateB, RED_T,
	RO, Rich, S_FILL, S_INK, SLATE_T, SVG, Sx, TEAL_T, VIOLET_T, Write, boxRC, cellC, cellXY, lerpG, prog, richW, smooth,
} from './parts';
import type {PG, Seg} from './parts';

const LIGHT = {s: 0.8, p: 0.8, d: 0.8, f: 0.8};

// ---------- 5. prediction (3 s) ----------
const K5 = cues(sc('prediction'), {quick: 'Quick prediction', t1: ['one s two', 1], t2: ['two s two', 1], t3: 'two p six', t4: 'three s two', t5: 'three p six', t6: 'four s two', which: 'Which period', it: 'it in'});
const GP: PG = {x: 96, y: 290, cw: 56, ch: 50, fg: 16};
const CFG1: Seg[] = [{t: '1s^{2} '}, {t: '2s^{2} '}, {t: '2p^{6}'}];
const CFG2: Seg[] = [{t: '3s^{2} '}, {t: '3p^{6} '}, {t: '4s^{2}', c: S_INK}];
const CX = 1200, CY1 = 390, CY2 = 476, CS = 60;
/** Left x of term k (0..2) in a configuration line, and its width without the trailing space. */
const termX = (segs: Seg[], k: number) => CX + 30 + richW(segs.slice(0, k), CS);
const termW = (segs: Seg[], k: number) => richW([{t: segs[k].t.trim()}], CS);
const ConfigCard: React.FC = () => (
	<g>
		<rect x={CX} y={276} width={624} height={240} rx={20} fill="#fffdf8" stroke={NAVY_T} strokeWidth={4} />
		<Sx x={CX + 24} y={314} text="an atom's configuration" size={30} color={INK} weight={800} at={-1000} />
		<Rich x={CX + 30} y={CY1} segs={CFG1} size={CS} />
		<Rich x={CX + 30} y={CY2} segs={CFG2} size={CS} />
	</g>
);
export const ScenePrediction: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('prediction');
	const ts = [K5.t1, K5.t2, K5.t3, K5.t4, K5.t5, K5.t6];
	let k = -1;
	ts.forEach((t, i) => { if (f >= t) k = i; });
	const line = k < 3 ? CFG1 : CFG2, kk = k < 3 ? k : k - 3, yy = k < 3 ? CY1 : CY2;
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<PGrid g={GP} tint={LIGHT} />
			<ConfigCard />
			{k >= 0 && f < K5.which + 10 ? <rect x={termX(line, kk) - 4} y={yy + 14} width={termW(line, kk) + 8} height={7} rx={3} fill={NAVY_T} /> : null}
			<Chip x={CX} y={560} segs={[{t: 'period ?', c: NAVY_T}]} at={K5.which} size={52} color={NAVY_T} />
			<Chip x={CX + 300} y={560} segs={[{t: 'group ?', c: GOLD_T}]} at={K5.which + 8} size={52} color={GOLD_T} />
			<Rich x={96} y={838} segs={[{t: 'Which level is the outer shell?'}]} size={38} at={-1000} />
			<Rich x={96} y={892} segs={[{t: 'How many electrons are in it?'}]} size={38} at={-1000} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1500} y={770} r={64} ringFrom={K5.it} />
			{void K5.quick}
		</SVG>
	);
};

// ---------- 6. reading it, and a classic trap ----------
const K6 = cues(sc('reading-and-trap'), {p4: 'Period four', four: 'is four', g2: 'Group two', subshell: 'subshell', calcium: 'calcium', an: 'An element', isnt: "isn't in group", g6: 'Group six is', dblock: 'd block', six: ['Six valence', 2], puts: 'puts it', sixteen: 'sixteen'});
export const SceneReading: React.FC = () => {
	const f = useCurrentFrame();
	const g6 = [24, 42, 74, 106], g16 = [8, 16, 34, 52, 84, 116];
	const d6 = prog(f, K6.g6, 10) * (1 - prog(f, K6.six - 10, 14));
	const four = termX(CFG2, 2);
	void cellC;
	return (
		<SVG>
			<Heading text="Reading it, and a classic trap" at={0} />
			<PGrid g={GP} tint={LIGHT} />
			{d6 > 0.01 ? <g opacity={d6}>{g6.map(z => { const [x, y] = cellXY(GP, z); return <rect key={z} x={x} y={y} width={GP.cw} height={GP.ch} fill="#f6d197" stroke={D_INK} strokeWidth={4} />; })}</g> : null}
			{g16.map((z, i) => <LitCell key={z} g={GP} z={z} at={K6.puts + i * 3} color={P_INK} fill="#ffffff" pop={1.08} />)}
			<LitCell g={GP} z={20} at={K6.calcium} color={S_INK} fill="#ffffff" pop={1.3} />
			<Write x={230} y={420} text="Ca: calcium, Z = 20" at={K6.calcium + 6} size={42} color={S_INK} />
			<ConfigCard />
			<PenRing cx={four + 16} cy={CY2 - 22} rx={24} ry={32} at={K6.four} out={K6.g2} color={NAVY_T} seed={3} />
			<PenRing cx={four + termW(CFG2, 2) / 2 + 4} cy={CY2 - 20} rx={52} ry={40} at={K6.subshell} color={S_INK} seed={5} />
			<Framed x={CX} y={612} segs={[{t: 'period 4', c: GREEN_T}]} at={K6.p4} size={52} stroke={GREEN_T} />
			<Framed x={CX} y={712} segs={[{t: 'group 2', c: GREEN_T}]} at={K6.g2} size={52} stroke={GREEN_T} />
			<Sx x={CX + 330} y={712} text="2 electrons in 4s" size={30} color={INK} weight={800} at={K6.subshell} />
			<Fade at={-1000} out={K6.an - 6}>
				<Rich x={96} y={830} segs={[{t: 'period', c: NAVY_T}, {t: ' = highest occupied level'}]} size={38} />
				<Rich x={96} y={884} segs={[{t: 'groups 1, 2: valence electrons = '}, {t: 'group', c: GOLD_T}, {t: ' number'}]} size={38} />
			</Fade>
			{/* the trap */}
			<Chip x={96} y={784} segs={[{t: '6 valence electrons → group 6'}]} at={K6.an} size={44} color={RED_T} strike={K6.isnt + 14} />
			<Write x={96} y={918} text="group 6 is in the d block" at={K6.g6} size={42} color={RED_T} />
			<Chip x={CX} y={780} segs={[{t: 'O: …2s^{2} 2p^{4}', c: P_INK}]} at={K6.six} size={38} color={P_INK} />
			<Chip x={CX} y={856} segs={[{t: 'S: …3s^{2} 3p^{4}', c: P_INK}]} at={K6.six + 8} size={38} color={P_INK} />
			<Write x={964} y={270} text="6 + 10 = 16" at={K6.sixteen - 6} size={42} color={GOLD_T} anchor="middle" />
			{void K6.dblock}
		</SVG>
	);
};

// ---------- 7. same arrangement, similar chemistry ----------
const K7 = cues(sc('group-chemistry'), {chem: 'A chemical property', phys: 'A physical property', share: 'share their', so: 'so they react', every: 'Every group one', making: 'making hydrogen', halogens: 'The halogens', pairs: 'pairs of atoms', noble: 'the noble gases', hardly: 'hardly react'});
const GS7: PG = {x: 1250, y: 196, cw: 30, ch: 22, fg: 6};
const TW = 330, TH = ph(TR_LI, 330);
/** Two touching atoms (a diatomic molecule). */
const Pair: React.FC<{x: number; y: number; r: number; fill: string; stroke: string}> = ({x, y, r, fill, stroke}) => (
	<g>
		<circle cx={x - r * 0.78} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={3} />
		<circle cx={x + r * 0.78} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={3} />
	</g>
);
export const SceneGroupChem: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = 1 + 0.25 * Math.sin(Math.PI * Math.min(1, prog(f, K7.so, 24)));
	const troughs = [{p: TR_LI, n: 'lithium', e: '…2s^{1}'}, {p: TR_NA, n: 'sodium', e: '…3s^{1}'}, {p: TR_K, n: 'potassium', e: '…4s^{1}'}];
	const tx = (i: number) => 96 + i * (TW + 16);
	const ty = 432;
	return (
		<SVG>
			<Heading text="Same arrangement, similar chemistry" at={0} />
			<Rich x={96} y={222} segs={[{t: 'chemical', c: GOLD_T}, {t: ' property: how it reacts to form new substances'}]} size={34} at={K7.chem} />
			<Rich x={96} y={270} segs={[{t: 'physical', c: NAVY_T}, {t: ' property: observed without making a new substance'}]} size={34} at={K7.phys} />
			<Write x={96} y={350} text="same outer electrons, same kind of reaction" at={K7.so} size={42} color={GOLD_T} />
			<PGrid g={GS7} tint={LIGHT} fRows={0} />
			{[[2, 7, 1, S_INK], [2, 6, 17, P_INK], [1, 7, 18, SLATE_T]].map(([r0, r1, c, col], i) => (
				<g key={i} transform={`translate(${GS7.x + (Number(c) - 0.5) * GS7.cw},${GS7.y + 80}) scale(${pulse}) translate(${-(GS7.x + (Number(c) - 0.5) * GS7.cw)},${-(GS7.y + 80)})`}>
					<DrawBox {...boxRC(GS7, Number(r0), Number(r1), Number(c), Number(c))} at={-1000} color={String(col)} width={4} pad={2} />
				</g>
			))}
			{/* group 1: the three troughs */}
			<Sx x={96} y={412} text="group 1 metals in water" size={34} color={GOLD_T} weight={800} at={-1000} />
			{troughs.map((t, i) => (
				<g key={i}>
					<Plate p={t.p} x={tx(i)} y={ty} h={TH} />
					<Sx x={tx(i) + TW / 2 - 50} y={ty + TH + 40} text={t.n} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
					<Rich x={tx(i) + TW / 2 + 70} y={ty + TH + 40} segs={[{t: t.e, c: S_INK}]} size={34} anchor="middle" />
				</g>
			))}
			<Bracket a={[tx(0) + 10, ty + TH + 58]} b={[tx(2) + TW - 10, ty + TH + 58]} at={K7.making} color={S_INK} depth={16} />
			<Rich x={96} y={ty + TH + 128} segs={[{t: 'Each trough: a group 1 metal placed on water.'}]} size={34} out={K7.making - 4} />
			<Write x={96} y={ty + TH + 128} text="all three: hydrogen + alkaline solution" at={K7.making + 10} size={42} color={S_INK} />
			<Sx x={96} y={ty + TH + 182} text="how vigorously: a later video" size={30} color={INK} weight={800} at={K7.making + 30} />
			{/* group 17 and group 18 */}
			<Sx x={1262} y={412} text="group 17" size={34} color={GOLD_T} anchor="middle" weight={800} at={-1000} />
			<PlateB p={CLJAR} cx={1262} bottom={770} h={330} />
			<Sx x={1262} y={808} text="chlorine" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1680} y={412} text="group 18" size={34} color={GOLD_T} anchor="middle" weight={800} at={-1000} />
			<PlateB p={JAR} cx={1680} bottom={770} h={330} />
			<Sx x={1680} y={808} text="argon" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Fade at={K7.halogens}>
				<Pair x={1450} y={500} r={20} fill="#e9eda0" stroke="#7d8a2a" />
				<Rich x={1450} y={560} segs={[{t: 'F_2'}]} size={34} anchor="middle" />
				<Pair x={1450} y={630} r={26} fill="#9ccf7c" stroke={P_INK} />
				<Rich x={1450} y={698} segs={[{t: 'Cl_2'}]} size={34} anchor="middle" />
			</Fade>
			<Write x={1450} y={760} text="pairs" at={K7.pairs} size={42} color={GREEN_T} anchor="middle" />
			<Fade at={K7.noble}>
				{[[1792, 520], [1800, 610], [1786, 700]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={14} fill="#c7b6e6" stroke="#5a6470" strokeWidth={2.5} />)}
				<Sx x={1793} y={752} text="Ar" size={28} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Write x={1560} y={860} text="full outer shell:" at={K7.hardly - 12} size={42} color={SLATE_T} anchor="middle" />
			<Write x={1560} y={912} text="hardly react" at={K7.hardly} size={42} color={SLATE_T} anchor="middle" />
			{void K7.share}{void K7.every}
		</SVG>
	);
};

// ---------- 8. metals, non-metals and metalloids ----------
const K8 = cues(sc('metal-character'), {pos: 'Position also', metals: 'Metals sit', few: 'just a few', shiny: "They're shiny", malleable: 'malleable', nonm: 'Non-metals sit', right: 'top right', solids: 'As solids', gases: 'many are gases', stair: 'Along the staircase', metalloids: 'the metalloids', silicon: 'Silicon is', little: 'only a little', chips: 'computer chips'});
const GM: PG = {x: 96, y: 278, cw: 50, ch: 42, fg: 12};
const STAIR = (g: PG) => {
	const L = (c: number) => g.x + (c - 1) * g.cw, T = (r: number) => g.y + (r - 1) * g.ch;
	return `M${L(13)},${T(2)} L${L(13)},${T(3)} L${L(14)},${T(3)} L${L(14)},${T(5)} L${L(15)},${T(5)} L${L(15)},${T(6)} L${L(16)},${T(6)}`;
};
const Card8: React.FC<{y: number; h: number; title: string; color: string; lines: string[]; on: number; small?: string}> = ({y, h, title, color, lines, on, small}) => (
	<g>
		<rect x={1230} y={y} width={594} height={h} rx={18} fill="#fffdf8" stroke={color} strokeWidth={4 + 3 * on} />
		<Sx x={1258} y={y + 50} text={title} size={40} color={color} weight={800} at={-1000} />
		{lines.map((l, i) => <Sx key={i} x={1258} y={y + 98 + i * 46} text={l} size={34} color={INK} weight={700} at={-1000} />)}
		{small ? <Sx x={1258} y={y + 98 + lines.length * 46 - 4} text={small} size={30} color={INK} weight={800} at={-1000} /> : null}
	</g>
);
export const SceneMetals: React.FC = () => {
	const f = useCurrentFrame();
	const on = (a: number, b: number) => prog(f, a, 10) * (1 - prog(f, b, 10));
	const siH = 250, siW = pw(SI, siH);
	return (
		<SVG>
			<Heading text="Metals, non-metals and metalloids" at={0} />
			<PGrid g={GM} types={1} tint={{}} />
			<path d={STAIR(GM)} fill="none" stroke={VIOLET_T} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
			{f >= K8.metalloids ? <DrawPath d={STAIR(GM)} at={K8.metalloids} dur={24} color={VIOLET_T} width={9} /> : null}
			{[5, 14, 32, 33, 51, 52].map((z, i) => <LitCell key={z} g={GM} z={z} at={K8.metalloids + 8 + i * 3} color={VIOLET_T} fill="#c6aef0" pop={1} />)}
			{/* metals: left and centre */}
			<Write x={110} y={760} text="metals" at={K8.shiny} size={42} color={INK} />
			<Sx x={110} y={812} text="left and centre," size={34} color={INK} weight={700} at={K8.metals} />
			<Sx x={110} y={856} text="a few valence electrons" size={34} color={INK} weight={700} at={K8.few} />
			<PenArrow a={[150, 724]} b={[160, 582]} at={K8.shiny + 8} color={INK} bend={-0.15} />
			{/* non-metals: top right */}
			<PenRing cx={GM.x + 16.3 * GM.cw} cy={GM.y + 1.5 * GM.ch} rx={106} ry={72} at={K8.right} color={TEAL_T} seed={8} />
			<Write x={GM.x + 16 * GM.cw} y={240} text="non-metals" at={K8.right + 4} size={42} color={TEAL_T} anchor="middle" />
			{/* metalloids and silicon */}
			<Write x={1006} y={500} text="in between" at={K8.metalloids + 10} size={42} color={VIOLET_T} />
			<PlateB p={SI} cx={820} bottom={930} h={siH} />
			<Sx x={820 - siW / 2 - 16} y={930 - 20} text="silicon" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			<Write x={1000} y={860} text="computer" at={K8.chips} size={42} color={VIOLET_T} /><Write x={1000} y={910} text="chips" at={K8.chips + 8} size={42} color={VIOLET_T} />
			<Card8 y={226} h={210} title="metal" color={INK} lines={['shiny', 'conducts heat and electricity', 'malleable: hammered into shape']} on={on(K8.metals, K8.nonm)} />
			<Card8 y={450} h={250} title="non-metal (as a solid)" color={TEAL_T} lines={['dull and brittle', "doesn't conduct electricity", 'many are gases']} small="graphite: an exception" on={on(K8.nonm, K8.stair)} />
			<Card8 y={716} h={212} title="metalloid" color={VIOLET_T} lines={['some metal, some non-metal', 'shiny but brittle', 'conducts a little (a semiconductor)']} on={on(K8.stair, 99999)} />
			{f >= K8.little ? <DrawPath d="M1258,918 L1790,918" at={K8.little} dur={14} color={VIOLET_T} width={6} /> : null}
			{void K8.pos}{void K8.malleable}{void K8.solids}{void K8.gases}{void K8.silicon}
		</SVG>
	);
};

// ---------- 9. across period three at room temperature ----------
const K9 = cues(sc('period-3-states'), {walk: "Let's walk", sodium: 'Sodium, magnesium', metals: 'solid metals', silicon: 'Silicon is', metalloid: 'solid metalloid', np: 'Phosphorus and', nonm: 'solid non-metals', chlorine: 'Then chlorine', pale: 'pale green', argon: 'and argon', gas: 'colourless gas', so: 'So across', change: 'change from', whole: 'And across the whole', eleven: 'only eleven', two: 'only two', bromine: 'bromine and', mercury: 'mercury', rest: 'All the rest'});
const GS9: PG = {x: 1250, y: 196, cw: 30, ch: 22, fg: 6};
const GB9: PG = {x: 230, y: 300, cw: 80, ch: 58, fg: 20};
const ROW9 = (() => {
	const s = 0.26, jarH = 270;
	const hs = P3.map((_, i) => p3h(i, s, jarH)), ws = P3.map((p, i) => pw(p.p, hs[i]));
	const gap = (1810 - 110 - ws.reduce((a, b) => a + b, 0)) / 7;
	let x = 110;
	return P3.map((p, i) => { const cx = x + ws[i] / 2; x += ws[i] + gap; return {...p, cx, h: hs[i], w: ws[i]}; });
})();
const TYPES9 = ['metal', 'metal', 'metal', 'metalloid', 'non-metal', 'non-metal', 'non-metal', 'non-metal'];
const TCOL = (t: string) => (t === 'metal' ? INK : t === 'metalloid' ? VIOLET_T : TEAL_T);
export const SceneStates: React.FC = () => {
	const f = useCurrentFrame();
	const tagAt = [K9.metals, K9.metals + 4, K9.metals + 8, K9.metalloid, K9.nonm, K9.nonm + 4, K9.pale, K9.gas];
	const out = K9.whole - 6;
	const m = smooth(prog(f, K9.whole, 30));
	const g = lerpG(GS9, GB9, m);
	const nGas = GASES.filter((_, i) => f >= K9.eleven + 10 + i * 3).length;
	const nLiq = (f >= K9.bromine ? 1 : 0) + (f >= K9.mercury ? 1 : 0);
	const ex = (i: number) => ROW9[i].cx;
	return (
		<SVG>
			<Heading text="Period 3 at room temperature" at={0} />
			<PGrid g={g} tint={{s: 0.7, p: 0.7, d: 0.7, f: 0.7}} fRows={m} />
			<DrawBox {...boxRC(g, 3, 3, 1, 18)} at={-1000} out={out} color={NAVY_T} width={4} pad={2} />
			<Fade at={-1000} out={out} d={14}>
				{ROW9.map((p, i) => (
					<g key={p.z}>
						<Sx x={p.cx} y={404} text={p.name} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
						<PlateB p={p.p} cx={p.cx} bottom={700} h={p.h} />
						{i < 6 ? <Sx x={p.cx} y={748} text={TYPES9[i]} size={34} color={TCOL(TYPES9[i])} anchor="middle" weight={800} at={-1000} opacity={0.28 + 0.72 * prog(f, tagAt[i], 12)} /> : null}
						<Sx x={p.cx} y={790} text={i >= 6 ? 'gas' : 'solid'} size={34} color={INK} anchor="middle" weight={800} at={-1000} opacity={0.28 + 0.72 * prog(f, tagAt[i], 12)} />
					</g>
				))}
				<Sx x={(ex(6) + ex(7)) / 2} y={748} text="non-metals" size={34} color={TEAL_T} anchor="middle" weight={800} at={-1000} opacity={0.28 + 0.72 * prog(f, tagAt[6], 12)} />
				<Bracket a={[ex(0) - 60, 810]} b={[ex(2) + 60, 810]} at={K9.metals + 10} color={INK} depth={16} />
				<Bracket a={[ex(4) - 40, 810]} b={[ex(5) + 60, 810]} at={K9.nonm + 10} color={TEAL_T} depth={16} />
				<Bracket a={[ex(6) - 50, 810]} b={[ex(7) + 50, 810]} at={K9.gas + 10} color={TEAL_T} depth={16} />
				<PenArrow a={[140, 864]} b={[1790, 864]} at={K9.change} color={INK} bend={0} width={5} />
				<Write x={960} y={926} text="metal → metalloid → non-metal" at={K9.change + 10} size={42} color={INK} anchor="middle" />
			</Fade>
			{/* the whole table at 25 °C */}
			{GASES.map((z, i) => {
				const [x, y] = cellXY(g, z);
				const v = prog(f, K9.eleven + 10 + i * 3, 8);
				return v > 0.01 ? <g key={z} opacity={v}><rect x={x} y={y} width={g.cw} height={g.ch} fill="#ffffff" stroke={TEAL_T} strokeWidth={5} /><Sx x={x + g.cw / 2} y={y + g.ch / 2 + 10} text="gas" size={26} color={INK} anchor="middle" weight={800} at={-1000} /></g> : null;
			})}
			{LIQUIDS.map((z, i) => {
				const [x, y] = cellXY(g, z);
				const v = prog(f, i === 0 ? K9.bromine : K9.mercury, 8);
				return v > 0.01 ? <g key={z} opacity={v}><rect x={x} y={y} width={g.cw} height={g.ch} fill="#ffffff" stroke={S_INK} strokeWidth={5} /><Sx x={x + g.cw / 2} y={y + g.ch / 2 + 10} text="liquid" size={26} color={INK} anchor="middle" weight={800} at={-1000} /></g> : null;
			})}
			<Fade at={K9.eleven}>
				<RO x={420} y={372} w={600} label="elements at 25 °C (room temperature)" text={`gases ${nGas}, liquids ${nLiq}`} size={52} />
			</Fade>
			<Write x={100} y={915} text="all the rest: solid" at={K9.rest} size={42} color={INK} />
			{void K9.walk}{void K9.sodium}{void K9.silicon}{void K9.np}{void K9.chlorine}{void K9.argon}{void K9.so}{void K9.two}
		</SVG>
	);
};

// ---------- 10. a surprise: one group, three states ----------
const K10 = cues(sc('halogen-states'), {surprise: "Here's a surprise", share: 'share their', state: 'not their state', fc: 'Fluorine and', gases: 'are gases', br: 'bromine is', liquid: 'liquid', iodine: 'iodine is', solid: 'solid', same: 'Same valence', diff: 'different states', forces: 'forces between', so: 'So a group', property: 'every physical'});
const HC = {x: 110, y: 214, w: 170, h: 126, gap: 10};
const hcy = (i: number) => HC.y + i * (HC.h + HC.gap);
const HAL = [{z: 9, s: 'F', n: 'fluorine', f: 'F_2', st: 'gas'}, {z: 17, s: 'Cl', n: 'chlorine', f: 'Cl_2', st: 'gas'}, {z: 35, s: 'Br', n: 'bromine', f: 'Br_2', st: 'liquid'}, {z: 53, s: 'I', n: 'iodine', f: 'I_2', st: 'solid'}];
const VW = 700, VH = ph(VIALS, 700), VX = 940, VY = 236;
export const SceneHalogens: React.FC = () => {
	const f = useCurrentFrame();
	const k = VW / VIALS.box[2];
	const vx = (i: number) => VX + (VIAL_X[i] - VIALS.box[0]) * k;
	const stAt = [K10.gases, K10.gases + 6, K10.liquid, K10.solid];
	const stCol = ['#7d8a2a', P_INK, '#9a3b12', '#5b2aa8'];
	return (
		<SVG>
			<Heading text="One group, three states" at={0} />
			{HAL.map((h, i) => (
				<g key={h.z}>
					<rect x={HC.x} y={hcy(i)} width={HC.w} height={HC.h} rx={10} fill={P_FILL} stroke={P_INK} strokeWidth={5} />
					<Sx x={HC.x + 10} y={hcy(i) + 28} text={`${h.z}`} size={26} color={INK} weight={800} at={-1000} />
					<Sx x={HC.x + HC.w / 2 + 10} y={hcy(i) + 74} text={h.s} size={56} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={HC.x + HC.w / 2} y={hcy(i) + 110} text={h.n} size={26} color={INK} anchor="middle" weight={800} at={-1000} />
					<Chip x={HC.x + HC.w + 22} y={hcy(i) + 34} segs={[{t: '…s^{2} p^{5}', c: P_INK}]} at={-1000} size={34} color={P_INK} />
				</g>
			))}
			<Bracket a={[548, hcy(0) + 20]} b={[548, hcy(3) + HC.h - 20]} at={K10.state} color={GREEN_T} depth={-20} />
			<Write x={584} y={hcy(1) + HC.h + 18} text="same s^{2} p^{5}" at={K10.state + 10} size={48} color={GREEN_T} />
			<Plate p={VIALS} x={VX} y={VY} h={VH} />
			<Write x={VX + VW / 2} y={206} text="different states" at={K10.diff} size={42} color={INK} anchor="middle" />
			{HAL.map((h, i) => (
				<g key={'v' + i}>
					<Rich x={vx(i)} y={VY + VH + 40} segs={[{t: h.f}]} size={34} anchor="middle" />
					<Sx x={vx(i)} y={VY + VH + 94} text={h.st} size={44} color={stCol[i]} anchor="middle" weight={800} at={stAt[i]} />
				</g>
			))}
			<Chip x={110} y={782} segs={[{t: 'why: later in Module 1'}]} at={K10.forces} size={38} color={INK} />
			<Framed x={100} y={925} segs={[{t: 'same group: similar reactions, not always the same state'}]} at={K10.so} size={44} stroke={GREEN_T} />
			{void K10.surprise}{void K10.share}{void K10.fc}{void K10.br}{void K10.iodine}{void K10.same}{void K10.so}
		</SVG>
	);
};
void BINK; void RED_T; void D_INK; void TR_NA; void TR_K; void JAR;
