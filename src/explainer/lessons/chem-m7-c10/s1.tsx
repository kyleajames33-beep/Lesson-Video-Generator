// M7 C10 scenes 1 to 6: the hook (fruit smells; acid + alcohol → ?), joining the halves (the acid's OH and the
// alcohol's H lift out as water; the halves link through the alcohol's O), naming (alcohol part first, acid part
// second), working backwards (the cut at the single-bonded O), properties (no O–H: the strip; isomers of acids) and
// the conditions (catalyst, reflux, hazards).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Overlay, Sx, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Brace, Crossed, DISP, Dots, Locants, Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Wisps} from '../chem-m7-c02/parts';
import {CT, Mol2D, apt, cmol, ctW, dimAt, loc, vis, water2} from '../chem-m7-c04a/parts';
import {Mark, Strip} from '../chem-m7-c03/parts';
import {Arrow2, EqRow, Plate, Reflux, RingAt, ptOn} from '../chem-m7-c06/parts';
import {ACID_F, AcidAt, NoChip, OkChip, acidK} from '../chem-m7-c09/parts';
import {FRUIT, Heading, REFLUX, sc} from './common';
import {AMB, BLUE, ESTER_F, EsterAt, EsterName, GREY, HazCard, INK, INK_SOFT, NAVY, RED, esterK, sides} from './parts';

const ETL = cmol([{l: 'OH', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {banana: ['banana', 2], pine: ['pineapple', 2], each: 'Each one', acid: 'carboxylic acid', alcohol: 'an alcohol', join: 'how do the two', finish: 'never quite', out: 'ester out'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const t = smooth(prog(f, K1.alcohol - 20, 26));
	const cx = 960 - 560 * t, top = 300 + 60 * t, h = 420 - 140 * t;
	const fo = dimAt(f, K1.alcohol, 0.6);
	return (
		<>
			<Heading text="Esters: how do an acid and an alcohol join?" at={4} size={56} />
			<Overlay>
				<g opacity={fo}><Plate p={FRUIT} cx={cx} top={top} h={h} at={0} /></g>
				<g opacity={vis(f, 0, K1.alcohol - 20)}>
					<Tag x={430} y={760} text="pentyl ethanoate: banana" at={K1.banana} size={28} color={AMB} fill="#fbedd0" anchor="middle" />
					<Tag x={960} y={760} text="ethyl butanoate: pineapple" at={K1.pine} size={28} color={AMB} fill="#fbedd0" anchor="middle" />
					<Tag x={960} y={830} text="often described as" at={K1.banana + 10} size={22} anchor="middle" />
				</g>
				<g opacity={vis(f, K1.acid)}>
					<AcidAt k={acidK(2)} x={900} y={430} s={1.1} at={K1.acid} ring={K1.acid + 10} />
					<Sx x={900} y={540} text="ethanoic acid" size={28} color={INK} anchor="middle" weight={700} at={K1.acid} />
				</g>
				<Sx x={1160} y={446} text="+" size={56} color={INK} anchor="middle" weight={700} at={K1.alcohol} />
				<CT x={1330} y={446} text="CH_3CH_2OH" size={40} anchor="middle" at={K1.alcohol} />
				<Sx x={1330} y={540} text="ethanol" size={28} color={INK} anchor="middle" weight={700} at={K1.alcohol} />
				<Arrow2 a={[1480, 430]} b={[1585, 430]} at={K1.alcohol + 10} color={INK} />
				<g opacity={vis(f, K1.alcohol + 16)}><rect x={1600} y={370} width={130} height={120} rx={16} fill="none" stroke={GREY} strokeWidth={3} strokeDasharray="10 8" /><Sx x={1665} y={448} text="?" size={56} color={GREY} anchor="middle" weight={800} at={-1000} /></g>
				{['join?', 'finish?', 'out?'].map((q, i) => { const a = [K1.join, K1.finish, K1.out][i]; return <Tag key={i} x={800 + i * 220} y={640} text={q} at={a} size={28} o={i === 2 ? 1 : dimAt(f, [K1.finish, K1.out][i], 0.5)} />; })}
				<Tag x={800} y={720} text="from ethanol alone?" at={K1.out + 10} size={22} o={0.6} />
			</Overlay>
		</>
	);
};

// ---------- 2. Joining the halves ----------
const K2 = cues(sc('joining-halves'), {take: 'Take ethanoic', acidl: 'The acid loses', alcl: 'the alcohol loses', together: 'Together,', water: 'make water', link: 'The two parts', giving: 'giving ethyl', ester: 'is the ester', cond: 'condensation'});
export const SceneJoin: React.FC = () => {
	const f = useCurrentFrame();
	const X = 520, Y = 380, S = 1.2, X2 = 1260;
	const aO = ACID_F.k['1r'], aH = ACID_F.k['1rH'], eO = ETL.k['0l'], eH = ETL.k['0lH'];
	const W: V2 = [700, 640];
	const pO = apt(ETL, eO, X2, Y, S);
	const target = apt(ACID_F, aO, X, Y, S);
	const slide = smooth(prog(f, K2.link, 30));
	const dx = (target[0] - pO[0]) * slide;
	const C1 = apt(ACID_F, ACID_F.k.c1, X, Y, S), Ou = apt(ACID_F, ACID_F.k['1u'], X, Y, S);
	const arrive = K2.together + 30;
	const eqO = dimAt(f, K2.cond, 0.5);
	return (
		<Overlay>
			<TaskLine text="Join them" at={K2.take} size={54} y={130} />
			<Mol2D m={ACID_F} x={X} y={Y} s={S} at={0} glow={{[aO]: [K2.acidl, K2.together], [aH]: [K2.acidl, K2.together]}} lift={{[aO]: {to: loc(W, X, Y, S), at: K2.together, dur: 30, fade: arrive}, [aH]: {to: loc([W[0] + 70, W[1]], X, Y, S), at: K2.together, dur: 30, fade: arrive}}} />
			<g transform={`translate(${dx},0)`}>
				<Mol2D m={ETL} x={X2} y={Y} s={S} at={6} glow={{[eH]: [K2.alcl, K2.together]}} lift={{[eH]: {to: loc([W[0] - 70, W[1]], X2, Y, S), at: K2.together, dur: 30, fade: arrive}}} />
			</g>
			{f >= K2.link + 26 ? <DrawPath d={`M${C1[0] + 18},${C1[1]} L${target[0] - 18},${target[1]}`} at={K2.link + 26} dur={12} color={INK} width={4} /> : null}
			<Tag x={X - 140} y={Y + 110} text="shown by isotope-labelling experiments" at={K2.acidl + 10} out={K2.together} size={20} />
			<g opacity={vis(f, arrive - 4)}><Mol2D m={water2()} x={W[0]} y={W[1]} s={S} at={arrive - 4} /></g>
			<Tag x={W[0] + 140} y={W[1] - 24} text="+ H₂O" at={arrive} size={30} color="#4f86ad" fill="#dcebf6" />
			<RingAt c={[(C1[0] + target[0]) / 2 + 6, (Ou[1] + C1[1]) / 2 + 10]} rx={110} ry={100} at={K2.ester} />
			<Sx x={1060} y={Y + 150} text="ethyl ethanoate" size={34} color={INK} weight={800} at={K2.giving} />
			<Tag x={1200} y={250} text="ester group: –COO–" at={K2.ester} size={32} color={RED} fill="#f9e1dc" />
			<g opacity={eqO}>
				<EqRow left={[{t: 'CH_3COOH', at: K2.giving}, {t: '+', at: K2.giving}, {t: 'CH_3CH_2OH', at: K2.giving}]} right={[{t: 'CH_3COOCH_2CH_3', at: K2.giving + 10}, {t: '+', at: K2.giving + 10}, {t: 'H_2O', at: K2.giving + 10}]} cx={960} y={790} size={40} len={130} arrow={{at: K2.giving + 6, eqAt: K2.giving + 6, o: 0.45}} />
				<Tag x={960} y={830} text="more on this arrow soon" at={K2.giving + 30} size={20} anchor="middle" />
			</g>
			<Tag x={960} y={910} text="condensation: join + lose water" at={K2.cond} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
		</Overlay>
	);
};

// ---------- 3. Naming ----------
const K3 = cues(sc('naming-esters'), {two: 'Ester names', first: 'comes first', ethyl: 'gives ethyl', second: 'comes second', oate: 'oate', salt: 'just like the salt', ethanoate: 'gives ethanoate', so: 'So this is', careful: 'Careful', sidef: 'acid side first', matters: 'The order matters', eb: 'Ethyl butanoate', same: 'same formula', diff: 'different molecules'});
const Halves: React.FC<{x: number; y: number; a: string; b: string; at: number; size?: number; cut?: number}> = ({x, y, a, b, at, size = 40, cut}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const wa = ctW(a, size);
	return (
		<g opacity={v}>
			<CT x={x} y={y} text={a} size={size} color={AMB} />
			<CT x={x + wa} y={y} text={b} size={size} color={BLUE} />
			{cut !== undefined ? <line x1={x + wa} x2={x + wa} y1={y - size * 0.95} y2={y + size * 0.35} stroke={RED} strokeWidth={3} strokeDasharray="6 5" opacity={prog(f, cut, 10)} /> : null}
		</g>
	);
};
export const SceneNaming: React.FC = () => {
	const f = useCurrentFrame();
	const X = 640, Y = 380, S = 1.05;
	const eth = [ESTER_F.k.c3, ESTER_F.k.c4], acd = [ESTER_F.k.c0, ESTER_F.k.c1, ESTER_F.k.od];
	const g: Record<number, [number, number?]> = {};
	eth.forEach(i => { g[i] = [K3.first, K3.second]; });
	acd.forEach(i => { g[i] = [K3.second, K3.so]; });
	const c1 = apt(ESTER_F, ESTER_F.k.c1, X, Y, S), os = apt(ESTER_F, ESTER_F.k.os, X, Y, S), od = apt(ESTER_F, ESTER_F.k.od, X, Y, S);
	const out1 = K3.eb - 10;
	return (
		<Overlay>
			<TaskLine text="Name it" at={K3.two} size={54} y={130} />
			<g opacity={vis(f, -100, out1)}>
				<Mol2D m={ESTER_F} x={X} y={Y} s={S} at={0} glow={g} />
				<RingAt c={[(c1[0] + os[0]) / 2, (od[1] + c1[1]) / 2 + 10]} rx={110} ry={90} at={4} />
				<EsterName x={420} y={570} at={K3.two} a={[{text: 'ethyl', at: K3.first + 10}]} b={[{text: 'ethanoate', at: K3.ethanoate}]} glow={K3.so} />
				<Tag x={1360} y={300} text="ethanol → ethyl" at={K3.ethyl} out={K3.second} size={26} color={BLUE} fill="#e3f0fa" />
				<Tag x={1360} y={360} text="ethanoic acid → ethanoate" at={K3.ethanoate} out={K3.sidef} size={26} color={RED} fill="#f9e1dc" />
				<Tag x={1360} y={420} text="C09: sodium ethanoate" at={K3.salt} out={K3.sidef} size={22} />
				<Halves x={560} y={830} a="CH_3COO" b="CH_2CH_3" at={K3.sidef - 10} size={44} />
				<Tag x={1000} y={790} text="formula: acid side first; name: alcohol part first" at={K3.sidef + 20} size={26} />
			</g>
			<Halves x={300} y={420} a="CH_3CH_2CH_2COO" b="CH_2CH_3" at={K3.eb} size={46} cut={K3.eb + 10} />
			<Sx x={1150} y={420} text="ethyl butanoate" size={40} color={INK} weight={800} at={K3.eb + 6} />
			<Tag x={1520} y={386} text="pineapple" at={K3.eb + 20} size={22} />
			<Halves x={300} y={640} a="CH_3COO" b="CH_2CH_2CH_2CH_3" at={K3.eb + 40} size={46} cut={K3.eb + 50} />
			<Sx x={1150} y={640} text="butyl ethanoate" size={40} color={INK} weight={800} at={K3.eb + 46} />
			<Tag x={300} y={500} text="both C₆H₁₂O₂" at={K3.same} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={300} y={760} text="same formula, different esters" at={K3.diff} size={32} color={RED} fill="#f9e1dc" />
			{void K3.oate}{void K3.careful}{void K3.matters}
		</Overlay>
	);
};

// ---------- 4. Working backwards ----------
const K4 = cues(sc('working-backwards'), {exam: 'Exam questions', heres: "here's an ester", find: 'Find the C', cut: 'and cut', next: 'next to it', side: 'The side with', alc: 'The oxygen, and', inn: 'In C H', three: 'three carbons', prop: 'propanoic acid', one: 'one carbon', meth: 'methanol', mp: 'methyl propanoate'});
const MP = esterK(3, 1);
export const SceneBack: React.FC = () => {
	const X = 760, Y = 560, S = 1.4;
	const sd = sides(MP, X, Y, S);
	const acidC = [MP.c, 1, 0].map(i => sd.P(i));
	return (
		<Overlay>
			<TaskLine text="Name it backwards" at={K4.exam} size={54} y={130} />
			<CT x={960} y={270} text="CH_3CH_2COOCH_3" size={58} anchor="middle" at={K4.heres} />
			<EsterAt e={MP} x={X} y={Y} s={S} at={K4.heres + 20} ring={K4.find} ringOut={K4.next} cut={K4.next} acidT={K4.side} alcT={K4.alc} />
			<Tag x={sd.acid.x0} y={sd.acid.y1 + 20} text="acid side: has the C=O" at={K4.side} size={26} color={AMB} fill="#fbedd0" />
			<Tag x={sd.alc.x0 + 20} y={sd.alc.y1 + 80} text="alcohol side: O + chain" at={K4.alc} size={26} color={BLUE} fill="#e3f0fa" />
			<Crossed x={1220} y={380} text="cut at the C=O oxygen" at={K4.cut} cross={K4.next} note="cut at the single-bonded O" size={30} />
			<Locants pts={acidC} at={K4.three} offs={acidC.map((_, i) => [0, i % 2 ? 50 : -50] as V2)} />
			<Tag x={sd.acid.x0} y={sd.acid.y1 + 80} text="propanoic acid" at={K4.prop} size={30} color={AMB} fill="#fbedd0" />
			<Tag x={sd.alc.x0 + 20} y={sd.alc.y1 + 140} text="methanol" at={K4.meth} size={30} color={BLUE} fill="#e3f0fa" />
			<EsterName x={1180} y={620} at={K4.mp - 10} a={[{text: 'methyl', at: K4.mp}]} b={[{text: 'propanoate', at: K4.mp + 10}]} glow={K4.mp + 24} size={36} w={[220, 320]} />
			{void K4.inn}{void K4.one}
		</Overlay>
	);
};

// ---------- 5. Properties ----------
const K5 = cues(sc('ester-properties'), {no: 'An ester has', cant: "can't hydrogen", just: 'just dipole-dipole', compare: 'Compare three', mass: 'eighty eight', e77: 'seventy seven', p138: 'thirty eight', b164: 'sixty four', evap: 'evaporate', notice: 'And notice', c4: 'C four', fizz: 'fizzes'});
const EE = esterK(2, 2), BA = acidK(4);
const FV: V2[] = [[300, 380], [720, 340], [340, 640], [760, 610]];
export const SceneProps: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.72, SX = 1500;
	const fo = dimAt(f, K5.compare, 0.35) * (1 - prog(f, K5.notice - 10, 14));
	const so = vis(f, K5.compare, K5.notice - 10);
	const P = (i: number, k: number) => sides(EE, FV[i][0], FV[i][1], S).P(k);
	return (
		<Overlay>
			<TaskLine text="Forces" at={K5.no} size={54} y={130} />
			<g opacity={fo}>
				{FV.map(([x, y], i) => <EsterAt key={i} e={EE} x={x} y={y} s={S} at={K5.no + i * 6} ring={i === 0 ? K5.no + 20 : undefined} />)}
				{[[0, 1], [2, 3], [0, 2]].map(([a, b], k) => <Dots key={k} a={P(a, EE.c)} b={P(b, EE.o)} at={K5.just + k * 10} color="#2a8c7e" width={5} />)}
				{[[0, 2], [1, 3]].map(([a, b], k) => <Dots key={'p' + k} a={P(a, 4)} b={P(b, 4)} at={K5.just + 20 + k * 8} color={DISP} width={4} flicker />)}
				<Crossed x={96} y={820} text="two O atoms, so hydrogen bonding" at={K5.no + 10} cross={K5.cant} note="no O–H: no hydrogen bonds between esters" size={30} />
				<Tag x={96} y={750} text="dipole–dipole + dispersion only" at={K5.just} size={26} color="#2a8c7e" fill="#dff2ef" />
			</g>
			<g opacity={so}>
				<Strip at={K5.compare} x={SX} />
				<Tag x={1080} y={220} text="all about 88 g/mol" at={K5.mass} size={26} color={NAVY} fill="#e7edf8" />
				<Mark T={77} label="ethyl ethanoate 77 °C (dipole–dipole)" at={K5.e77} x={SX} left />
				<Mark T={138} label="pentan-1-ol 138 °C (hydrogen bonds)" at={K5.p138} x={SX} left />
				<Mark T={164} label="butanoic acid 164 °C (dimers)" at={K5.b164} x={SX} left />
				<Wisps x={SX} y={410} at={K5.evap} />
				<Tag x={1080} y={560} text="volatile: the smell reaches your nose" at={K5.evap + 10} size={24} />
			</g>
			<g opacity={vis(f, K5.notice)}>
				<EsterAt e={EE} x={560} y={500} s={1.15} at={K5.notice} ring={K5.notice + 10} />
				<Sx x={560} y={640} text="ethyl ethanoate" size={30} color={INK} anchor="middle" weight={700} at={K5.notice} />
				<AcidAt k={BA} x={1360} y={500} s={1.15} at={K5.notice + 6} ring={K5.notice + 16} />
				<Sx x={1360} y={640} text="butanoic acid" size={30} color={INK} anchor="middle" weight={700} at={K5.notice + 6} />
				<Brace x1={360} x2={1560} y={360} dir={-1} text="C₄H₈O₂: functional group isomers" at={K5.c4} color={NAVY} size={30} />
				<NoChip x={460} y={700} text="NaHCO₃: no fizz" at={K5.fizz + 10} />
				<OkChip x={1250} y={700} text="NaHCO₃: fizz" at={K5.fizz} />
			</g>
			{void VIOLET}
		</Overlay>
	);
};

// ---------- 6. Conditions ----------
const K6 = cues(sc('conditions-reflux'), {room: 'At room temperature', add: 'So we add', cat: 'catalyst', heat: 'heat the mixture', as: 'As in the', cools: 'condenser cools', back: 'drip back', conc: ['Concentrated sulfuric', 2], flam: 'flammable', heater: 'electric heater'});
export const SceneConditions: React.FC = () => {
	const f = useCurrentFrame();
	const RF = {cx: 420, top: 330, h: 620};
	const liq = ptOn(REFLUX, RF.cx, RF.top, RF.h, 1000, 1286), cb = ptOn(REFLUX, RF.cx, RF.top, RF.h, 1012, 880);
	return (
		<Overlay>
			<TaskLine text="Conditions" at={K6.room} size={54} y={130} />
			<Tag x={96} y={190} text="room temperature: very slow" at={K6.room + 10} out={K6.cat} size={24} />
			<EqRow left={[{t: 'CH_3COOH', at: 0}, {t: '+', at: 0}, {t: 'CH_3CH_2OH', at: 0}]} right={[{t: 'CH_3COOCH_2CH_3', at: 6}, {t: '+', at: 6}, {t: 'H_2O', at: 6}]} cx={1180} y={330} size={32} len={200} arrow={{at: 4, eqAt: 4, above: [{t: 'conc. H_2SO_4 (catalyst)', at: K6.cat}], below: [{t: 'heat under reflux', at: K6.heat}]}} />
			<Tag x={1180} y={460} text="above the arrow: a catalyst, not a reactant" at={K6.cat + 20} out={K6.as} size={22} anchor="middle" />
			<Plate p={REFLUX} cx={RF.cx} top={RF.top} h={RF.h} at={K6.heat - 10} />
			<Tag x={600} y={liq[1] - 10} text="ethanoic acid + ethanol + conc. H₂SO₄" at={K6.heat} out={K6.conc} size={22} />
			<Reflux base={[liq[0], liq[1] - 6]} top={[cb[0], cb[1] - 160]} at={K6.cools} until={K6.conc} />
			<Tag x={680} y={560} text="C06: the condenser returns the vapours" at={K6.as} out={K6.conc} size={22} />
			<Tag x={680} y={620} text="volatile ethanol and ester drip back" at={K6.back} out={K6.conc + 20} size={26} color={NAVY} fill="#e7edf8" />
			<HazCard x={760} y={620} lines={[{t: 'conc. H₂SO₄: corrosive', at: K6.conc + 20}, {t: 'organic liquids: flammable', at: K6.flam}, {t: 'electric heater or water bath, no flame', at: K6.heater}]} size={28} />
			{void INK_SOFT}{void GREY}
		</Overlay>
	);
};
