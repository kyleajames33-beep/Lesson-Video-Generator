// M6 C06 scenes 6 to 10: baking soda explained (amphiprotic); spotting one in a proton chain; the syllabus salt with
// both water equations; water's own role (self-ionisation, neutral); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {SODA_BOX, SODA_CLIP} from './assets';
import {
	ACID, ACID_INK, BASE, BASE_INK, Chain, CurrentMeter, Dim, EqBox, EqLine, FBox, Fade, Field, FieldLens, GREY_INK, H3O, INK, INK_SOFT, LiquidBeaker, MistakeX, Mol, Note, OHg, OpGlow, Overlay,
	PairBracket, PicH, PlateAt, ProtonHop, RoleRing, SeeSaw, Sx, TEAL, TaskLine, chainX, eSpan, eq, giveAt, natP, picW, pulseAt, slotAt, vis,
} from './parts';
import type {ChainItem, EItem} from './parts';
import {eqHalf} from './s1';

/** An equation line centred at cx, with helpers for its token spans. */
const centred = (items: EItem[], size: number, cx: number) => cx - eqHalf(items, size);

// ---------- 6. Amphiprotic: baking soda explained ----------
const H6 = 'amphiprotic';
const K6 = cues(sc(H6), {now: 'Now the baking', hco3: 'hydrogen carbonate, H', takes: 'it takes a proton', making: 'making carbonic acid', breaks: 'breaks down into', fizz: 'saw fizzing', inn: 'In the sodium', gives: 'it gives a proton', carb: 'making carbonate and', nogas: "no gas", species: 'A species that', amph: 'is amphiprotic', amphi: 'Amphi means both'});
export const SceneAmphiprotic: React.FC = () => {
	const f = useCurrentFrame();
	const PH = 220, pw = picW(SODA_CLIP.before, PH);
	const S = 50, LX = 200, RX = 200, Y1 = 580, YR = 860;
	const l1 = eq(['HCO_3^{-}(aq)', '+', 'H_3O^{+}(aq)', '->', 'H_2CO_3(aq)', '+', 'H_2O(l)'], [0, 1, 2, 3, 4, 5, 6].map(i => K6.takes + i * 4));
	const l2 = eq(['H_2CO_3(aq)', '->', 'H_2O(l)', '+', 'CO_2(g)'], [0, 1, 2, 3, 4].map(i => K6.breaks + i * 4));
	const r1 = eq(['HCO_3^{-}(aq)', '+', 'OH^{-}(aq)', '->', 'CO_3^{2-}(aq)', '+', 'H_2O(l)'], [0, 1, 2, 3, 4, 5, 6].map(i => K6.gives + i * 4));
	const a = (it: EItem[], i: number, x: number) => eSpan(it, i, S, x);
	const pl = pulseAt(f, K6.fizz, 0.06, 30), pr = pulseAt(f, K6.nogas, 0.06, 30);
	const lDim = K6.gives - 6;
	return (
		<>
			<Heading text="Baking soda explained" at={4} size={58} />
			<Overlay>
				<g transform={`translate(${130 + pw / 2},${190 + PH / 2}) scale(${pl}) translate(${-(130 + pw / 2)},${-(190 + PH / 2)})`}>
					<PicH p={SODA_CLIP.fizz} x={130} y={190} h={PH} />
				</g>
				<Sx x={130 + pw / 2} y={190 + PH + 36} text="in acid" size={30} color={GREY_INK} anchor="middle" hand at={-1000} />
				<g transform={`translate(${1790 - pw / 2},${190 + PH / 2}) scale(${pr}) translate(${-(1790 - pw / 2)},${-(190 + PH / 2)})`}>
					<PicH p={SODA_CLIP.before} x={1790 - pw} y={190} h={PH} />
				</g>
				<Sx x={1790 - pw / 2} y={190 + PH + 36} text="in NaOH" size={30} color={GREY_INK} anchor="middle" hand at={-1000} />
				<FBox x={960} y={330} text="HCO_3^{-}" size={60} anchor="middle" at={K6.hco3} role={{base: [K6.takes, K6.gives - 6], acid: [K6.gives, K6.amph - 4], both: [K6.amph]}} />
				<Note x={960} y={430} text="from NaHCO_3" size={34} color={INK_SOFT} anchor="middle" at={K6.hco3 + 10} out={K6.amph - 6} />
				<Note x={960} y={440} text="amphiprotic: can give or take H^{+}" size={40} color={TEAL} anchor="middle" at={K6.amph + 6} />
				<Dim at={lDim} to={0.3}>
					<EqBox items={l1} i={0} size={S} x={LX} y={Y1} at={K6.takes} color={BASE} />
					<EqLine items={l1} x={LX} y={Y1} size={S} />
					<ProtonHop a={[a(l1, 2, LX).cx, Y1 - S - 6]} b={[a(l1, 0, LX).cx, Y1 - S - 6]} at={K6.takes + 30} dur={28} bow={-50} s={0.85} />
					<EqLine items={l2} x={LX} y={Y1 + 95} size={S} />
				</Dim>
				<EqBox items={r1} i={0} size={S} x={RX} y={YR} at={K6.gives} color={ACID} />
				<EqLine items={r1} x={RX} y={YR} size={S} />
				<ProtonHop a={[a(r1, 0, RX).cx, YR - S - 6]} b={[a(r1, 2, RX).cx, YR - S - 6]} at={K6.gives + 30} dur={28} bow={-50} s={0.85} />
				<Note x={a(r1, 6, RX).x2 + 50} y={YR} text="no gas" size={40} color={INK_SOFT} at={K6.nogas} />
				{void K6.now}{void K6.making}{void K6.inn}{void K6.carb}{void K6.species}{void K6.amphi}
			</Overlay>
		</>
	);
};

// ---------- 7. Spotting one: the middle of a proton chain ----------
const H7 = 'proton-chain';
const K7 = cues(sc(H7), {how: 'How do you spot', chain: 'proton chain', apart: 'each one proton apart', carbonic: 'Carbonic acid', hc: 'hydrogen carbonate, carbonate', c3: 'carbonate. Phosphoric', phos: 'Phosphoric acid loses', dih: 'dihydrogen phosphate', hyd: 'hydrogen phosphate, then', phosphate: 'then phosphate', ends: 'The ends do', give: 'can only give', take: 'can only take', middle: 'in the middle', amph: "they're amphiprotic", even: 'Even hydrogen phosphate', still: 'still has a proton'});
export const SceneChain: React.FC = () => {
	const S = 54, G = 120;
	const endOut = K7.middle;
	const both = K7.middle + 6;
	const c1: ChainItem[] = [{t: 'H_2CO_3', at: K7.carbonic}, {t: 'HCO_3^{-}', at: K7.hc, role: {both: [both]}}, {t: 'CO_3^{2-}', at: K7.c3}];
	const c2: ChainItem[] = [
		{t: 'H_3PO_4', at: K7.phos, role: {acid: [K7.ends]}},
		{t: 'H_2PO_4^{-}', at: K7.dih, role: {both: [both + 8]}},
		{t: 'HPO_4^{2-}', at: K7.hyd, role: {both: [both + 16]}},
		{t: 'PO_4^{3-}', at: K7.phosphate, role: {base: [K7.ends + 10]}},
	];
	const X1 = 230, X2 = 140, Y1 = 360, Y2 = 680;
	const hx = chainX(c2, X2, S, G, 2);
	return (
		<>
			<Heading text="Spotting one: the middle of a chain" at={4} size={56} />
			<Overlay>
				<Chain items={c1} x={X1} y={Y1} size={S} gap={G} keyStep={{at: K7.hc + 6}} />
				<Chain items={c2} x={X2} y={Y2} size={S} gap={G} />
				<Note x={chainX(c2, X2, S, G, 0)} y={Y2 + 90} text="gives only" size={36} color={ACID_INK} anchor="middle" at={K7.give - 10} out={endOut} />
				<Note x={chainX(c2, X2, S, G, 3)} y={Y2 + 90} text="takes only" size={36} color={BASE_INK} anchor="middle" at={K7.take - 10} out={endOut} />
				<Note x={1450} y={Y1} text="middle = amphiprotic" size={44} color={TEAL} anchor="middle" at={K7.amph} out={K7.even} />
				<MistakeX x={hx} y={Y2 + 70} text="a negative ion can't give a proton" at={K7.even} cross={K7.still} note="HPO_4^{2-} still has one to give" size={34} anchor="middle" />
				{void K7.how}{void K7.chain}{void K7.apart}
			</Overlay>
		</>
	);
};

// ---------- 8. The syllabus salts: write both roles ----------
const H8 = 'salt-equations';
const K8 = cues(sc(H8), {exam: 'Exam questions', nahco: 'sodium hydrogen carbonate', first: 'First it dissolves', na: 'sodium ions, which', react: "don't react", hc: 'and hydrogen carbonate ions', then: 'Then write one', acid: 'As an acid', gives: 'gives a proton to water', base: 'As a base', takes: 'takes a proton from', both: 'Both are partial', dbl: 'double arrows', inb: 'In baking soda', mild: 'mildly basic'});
export const SceneSalt: React.FC = () => {
	const f = useCurrentFrame();
	const S = 50, X = 150, Y1 = 360, Y2 = 570, Y3 = 770;
	const l1 = eq(['NaHCO_3(s)', '->', 'Na^{+}(aq)', '+', 'HCO_3^{-}(aq)'], [0, 1, 2, 3, 4].map(i => K8.nahco + 10 + i * 5));
	const naOut = eq(['NaHCO_3(s)', '->', {t: 'Na^{+}(aq)', color: '#a39c91'}, '+', 'HCO_3^{-}(aq)'], [1e9, 1e9, K8.react, 1e9, 1e9]);
	const l2 = eq(['HCO_3^{-}(aq)', '+', 'H_2O(l)', '<=>', 'CO_3^{2-}(aq)', '+', 'H_3O^{+}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K8.acid + 8 + i * 5));
	const l3 = eq(['HCO_3^{-}(aq)', '+', 'H_2O(l)', '<=>', 'H_2CO_3(aq)', '+', 'OH^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K8.base + 8 + i * 5));
	const s1 = (i: number) => eSpan(l1, i, S, X), s2 = (i: number) => eSpan(l2, i, S, X), s3 = (i: number) => eSpan(l3, i, S, X);
	const mini: ChainItem[] = [{t: 'H_2CO_3', at: 0}, {t: 'HCO_3^{-}', at: 0, role: {both: [-100]}}, {t: 'CO_3^{2-}', at: 0}];
	const miniO = 1 - 0.7 * prog(f, K8.mild - 10, 16);
	const bw = picW(SODA_BOX, 240);
	return (
		<>
			<Overlay>
				<Dim at={K8.acid} to={0.4}><TaskLine text="Show that HCO_3^{-} is amphiprotic." at={K8.exam} size={52} /></Dim>
				<g opacity={miniO}>
					<Fade at={K8.then - 20}>
						<Chain items={mini} x={1180} y={270} size={38} gap={80} lit={[{step: 1, dir: 'r', at: K8.gives}, {step: 0, dir: 'l', at: K8.takes}]} />
					</Fade>
				</g>
				<PlateAt p={SODA_BOX} x={1810 - bw} y={430} h={240} at={K8.nahco} />
				<Sx x={1810 - bw / 2} y={720} text="NaHCO_3(aq): mildly basic" size={30} color={GREY_INK} anchor="middle" weight={700} at={K8.mild} />
				<Dim at={K8.acid} to={0.3}>
					<EqLine items={l1.map((it, i) => (i === 2 ? {...it, out: K8.react} : it))} x={X} y={Y1} size={S} />
					<EqLine items={naOut} x={X} y={Y1} size={S} />
					<Note x={s1(2).cx} y={Y1 + 60} text="spectator" size={34} color={GREY_INK} anchor="middle" at={K8.react + 4} out={K8.hc + 40} />
				</Dim>
				<EqBox items={l2} i={0} size={S} x={X} y={Y2} at={K8.gives} color={ACID} />
				<OpGlow items={l2} i={3} size={S} x={X} y={Y2} at={K8.dbl} len={50} color={ACID} />
				<EqLine items={l2} x={X} y={Y2} size={S} />
				<ProtonHop a={[s2(0).cx, Y2 - S - 8]} b={[s2(2).cx, Y2 - S - 8]} at={K8.gives + 20} dur={28} bow={-50} s={0.85} />
				<EqBox items={l3} i={0} size={S} x={X} y={Y3} at={K8.takes} color={BASE} />
				<OpGlow items={l3} i={3} size={S} x={X} y={Y3} at={K8.dbl + 8} len={50} color={ACID} />
				<EqLine items={l3} x={X} y={Y3} size={S} />
				<ProtonHop a={[s3(2).cx, Y3 - S - 8]} b={[s3(0).cx, Y3 - S - 8]} at={K8.takes + 20} dur={28} bow={-50} s={0.85} />
				{void K8.first}{void K8.na}{void K8.then}{void K8.both}{void K8.inb}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Water's own role ----------
const H9 = 'water-role';
const K9 = cues(sc(H9), {sits: 'Water sits in', h3o: 'hydronium, water', ohm: 'hydroxide. So', amph: 'amphiprotic too', itself: 'with itself', one: 'One water molecule', making: 'a hydronium ion and', very: 'Very pure water', cond: 'conducts a tiny', there: 'are there', tiny: 'tiny equilibrium', two: 'two water molecules in a billion', because: 'And because each', equal: 'equal numbers', neutral: 'what neutral means', next: 'the next video'});
export const SceneWater: React.FC = () => {
	const f = useCurrentFrame();
	const chain: ChainItem[] = [{t: 'H_3O^{+}', at: K9.h3o}, {t: 'H_2O', at: K9.h3o + 30, role: {both: [K9.amph]}}, {t: 'OH^{-}', at: K9.ohm}];
	const L = {cx: 450, cy: 640, r: 240};
	const zoom = K9.two - 6;
	const near = 1 - prog(f, zoom, 20), far = prog(f, zoom, 20);
	const hop = K9.one + 20;
	const w1: [number, number] = [L.cx - 90, L.cy + 10], w2: [number, number] = [L.cx + 90, L.cy - 10];
	const S = 46, EX = 830, EY = 470;
	const items = eq(['H_2O(l)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'OH^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K9.making + 20 + i * 5));
	const bracketsOut = K9.cond;
	const pop = pulseAt(f, K9.equal, 0.35, 36);
	const pp = pulseAt(f, K9.making, 0.2, 30);
	return (
		<>
			<Heading text="Water's own role" at={4} size={58} />
			<Overlay>
				<Dim at={K9.making + 20} to={0.35}><Chain items={chain} x={830} y={270} size={44} gap={90} /></Dim>
				<FieldLens cx={L.cx} cy={L.cy} r={L.r} at={K9.itself - 6}>
					<g opacity={near}>
						<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
						<g transform={`translate(${w1[0]},${w1[1]}) scale(${f >= hop ? pp : 1}) translate(${-w1[0]},${-w1[1]})`}><Mol x={w1[0]} y={w1[1]} m="H2O" s={1.25} give={f >= hop ? 1 : 0} /></g>
						<g transform={`translate(${w2[0]},${w2[1]}) scale(${f >= hop + 26 ? pp : 1}) translate(${-w2[0]},${-w2[1]})`}><Mol x={w2[0]} y={w2[1]} m="H2O" s={1.25} take={f >= hop + 26 ? 1 : 0} /></g>
						<ProtonHop a={giveAt('H2O', w1[0], w1[1], 1.25)} b={slotAt('H2O', w2[0], w2[1], 1.25)} at={hop} s={0.9} bow={-60} />
					</g>
					<g opacity={far}>
						<Field cx={L.cx} cy={L.cy} r={L.r} sp={30} s={0.45} acidFrac={0} seed={61} at={-1000} />
						<circle cx={L.cx - 110} cy={L.cy - 70} r={34} fill="#eef6fb" opacity={0.9} />
						<H3O x={L.cx - 110} y={L.cy - 70} s={1.3} pop={pop} />
						<circle cx={L.cx + 120} cy={L.cy + 90} r={30} fill="#eef6fb" opacity={0.9} />
						<OHg x={L.cx + 120} y={L.cy + 90} s={1.5} pop={pop} />
					</g>
				</FieldLens>
				<RoleRing x={w1[0]} y={w1[1]} r={70} role="acid" at={K9.one} out={zoom} />
				<RoleRing x={w2[0]} y={w2[1]} r={70} role="base" at={K9.one + 8} out={zoom} />
				<EqLine items={items} x={EX} y={EY} size={S} />
				<PairBracket items={items} i={0} j={6} size={S} x={EX} y={EY} at={K9.making + 50} out={bracketsOut} above label="H_2O / OH^{-}" lsize={30} />
				<PairBracket items={items} i={2} j={4} size={S} x={EX} y={EY} at={K9.making + 60} out={bracketsOut} above={false} label="H_2O / H_3O^{+}" lsize={30} />
				<LiquidBeaker x={1300} y={600} h={230} o={vis(f, K9.cond - 6, undefined, 14)} />
				<CurrentMeter x={1640} y={640} at={K9.cond} to={[[1370, 640], [1450, 640]]} />
				<Dim at={K9.there + 30} to={0.35}><Sx x={1420} y={890} text="very pure water" size={32} color={INK} anchor="middle" hand at={K9.very} /></Dim>
				<Note x={L.cx} y={L.cy + L.r + 54} text="about 2 in a billion have given H^{+}" size={36} color={INK_SOFT} anchor="middle" at={K9.two + 10} out={K9.equal + 30} />
				<Note x={1200} y={1000} text="neutral: equal H_3O^{+} and OH^{-}" size={44} color={TEAL} anchor="middle" at={K9.neutral} />
				{void K9.sits}{void K9.tiny}{void K9.because}{void K9.next}{void natP}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory aid ----------
const H10 = 'memory-aid';
const K10 = cues(sc(H10), {rem: 'what to remember', pair: 'A conjugate pair', take: 'take one off', amphi: 'Amphi means both', stronger: 'the stronger the acid'});
export const SceneAid: React.FC = () => {
	const mini: ChainItem[] = [{t: 'H_2CO_3', at: K10.amphi + 10}, {t: 'HCO_3^{-}', at: K10.amphi + 14, role: {both: [K10.amphi + 30]}}, {t: 'CO_3^{2-}', at: K10.amphi + 18}];
	return (
		<Overlay>
			<Dim at={K10.amphi} to={0.6}><Sx x={140} y={300} text="A conjugate pair differs by exactly one H^{+}." size={66} color={TEAL} weight={800} at={K10.pair} /></Dim>
			<Sx x={140} y={460} text="Amphi means both: the middle of the chain goes either way" size={62} color={INK} hand at={K10.amphi} />
			<Chain items={mini} x={160} y={620} size={44} gap={90} />
			<SeeSaw x={1450} y={760} at={K10.stronger} s={0.75} labels={false} />
			{void K10.rem}{void K10.take}{void ACID_INK}{void BASE_INK}{void ACID}{void BASE}{void centred}
		</Overlay>
	);
};
