// C8-13 scenes 7 to 11: purity (recrystallise; the iron(III) chloride test: violet if salicylic acid remains; purer
// costs yield), safety, by-products and waste (fume cupboard; recover the ethanoic acid; labelled waste), environment,
// society and cost (every factor pulls on the others), judging the route (verdict with a condition; PEEL rows; an
// evaluation, not a list), and the memory aid (yield is not the whole route).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, ACE, Beaker, BRICK, BYP, CARD, Chip, DrawPath, EDGE, FactorBoard, GREEN, GREYT, GTag, HBar, INK, INK_SOFT, Mistake, Mol, NAVY, OHR, Pic, PicH, PriceTag, RED, SeeSaw, Svg, Sx, T, TEAL, Tag, Title, lerp, mw, prog, smooth, vis,
} from './parts';
import {Task, TITLE, WORD_EQ, fs} from './s1';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 7. purity ----------
const K7 = K('purity', {pure: 'be pure', irritate: 'irritate the', dissolved: 'are dissolved', cooled: 'and cooled', cryst: 'aspirin crystallises', recryst: 'called recrystallising', check: 'To check', iron: 'iron three', free: 'free O', violet: 'solution violet', pure2: 'Pure aspirin', trade: 'trade-off', each: 'each recrystallisation', yieldF: 'yield falls'});
export const ScenePurity: React.FC = () => {
	const f = useCurrentFrame();
	const A = 1 - prog(f, K7.check - 8, 8);
	const B = vis(f, K7.check, K7.trade - 22, 8);
	const C = prog(f, K7.trade - 12, 8);
	const step = (fr: number) => smooth(prog(fr, K7.each + 10, 30)) + smooth(prog(fr, K7.each + 60, 30));
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="5 Purity: clean enough to swallow" />
			{A > 0.01 ? <g opacity={A}>
				<HBar x={96} y={320} w={620} label="crude aspirin: some salicylic acid left" fill={() => 1} color="#f4f1ea" flecks={() => 9} at={ON} />
				<GTag x={96} y={400} text="medicines have purity limits" size={28} at={K7.pure} />
				<Sx x={96} y={500} text="salicylic acid can irritate the stomach" size={36} color={INK} hand at={K7.irritate} />
				<Beaker x={1000} y={330} at={K7.dissolved - 10} hot={K7.dissolved} cool={K7.cooled} />
				<Sx x={1130} y={690} text="hot: dissolve; cool: crystals form" size={32} color={INK} anchor="middle" hand at={K7.cooled} />
				<Sx x={1130} y={734} text="impurities stay dissolved" size={32} color="#7a4fb0" anchor="middle" hand at={K7.cryst + 20} />
				<T x={96} y={800} w={1400} text="recrystallise: dissolve hot, cool, collect the purer crystals" size={42} color={NAVY} at={K7.recryst} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<Mol k="sal" x={250} y={480} s={0.62} at={K7.iron} ring={{key: 'salOH', at: K7.free, color: OHR}} />
				<GTag x={170} y={600} text="free ring OH" size={28} at={K7.free} />
				<PicH p={PL.violet} cx={640} cy={480} h={400} />
				<PicH p={PL.pale} cx={1000} cy={480} h={400} />
				<Mol k="asp" x={1260} y={480} s={0.62} at={K7.iron} ring={{key: 'aspEster', at: K7.pure2, color: ACE}} />
				<GTag x={1240} y={600} text="OH now an ester" size={28} at={K7.pure2} />
				<Sx x={640} y={730} text="violet: salicylic acid present" size={34} color="#6a3a9a" anchor="middle" hand at={K7.violet} />
				<Sx x={1000} y={790} text="no violet: no detectable salicylic acid" size={34} color={INK} anchor="middle" hand at={K7.pure2} />
				<Sx x={96} y={252} text="iron(III) chloride test" size={36} color={NAVY} hand at={K7.iron} />
				<GTag x={96} y={840} text="melting point near 135 °C, narrow range: another purity check" size={26} at={K7.pure2 + 20} />
			</g> : null}
			{C > 0.01 ? <g opacity={C}>
				<HBar x={96} y={340} w={620} label="purity" fill={() => 1} color="#f4f1ea" flecks={fr => 9 - 4 * step(fr)} at={ON} />
				<HBar x={800} y={340} w={620} label="yield" fill={fr => 0.8 - 0.09 * step(fr)} color={TEAL} at={ON} val={fr => `${Math.round(100 * (0.8 - 0.09 * step(fr)))}%`} />
				<PicH p={PL.violet} cx={260} cy={530} h={230} />
				<PicH p={PL.pale} cx={520} cy={530} h={230} />
				<Sx x={390} y={680} text="test after each step" size={32} color={INK} anchor="middle" hand at={ON} />
				<PicH p={PL.funnel} cx={1110} cy={530} h={230} />
				<Sx x={1110} y={680} text="crystals lost each time" size={32} color={INK} anchor="middle" hand at={ON} />
				<Sx x={96} y={750} text="each recrystallisation: purer, but product is lost" size={42} color={INK} hand at={K7.each} />
				<SeeSaw cx={760} cy={900} w={640} gain="purer" cost="lower yield" at={K7.trade - 12} costAt={K7.yieldF} size={30} />
			</g> : null}
			<FactorBoard st={fs(4, K7.pure)} />
			{void AMBER}{void AMBER_INK}{void BRICK}{void BYP}{void CARD}{void Chip}{void DrawPath}{void EDGE}{void GREEN}{void GREYT}{void INK_SOFT}{void Mistake}{void Pic}{void PriceTag}{void RED}{void SeeSaw}{void Tag}{void lerp}{void WORD_EQ}
		</Svg>
	);
};

// ---------- 8. safety, by-products and waste ----------
const EQ_A = 'salicylic acid + ethanoic anhydride → aspirin +';
const K8 = K('safety-waste', {safety: 'safety and', corrosive: 'is corrosive', cat: 'acid catalyst', cupboard: 'fume cupboard', by: 'The by-product', recover: 'can recover', anhydride: 'into anhydride', used: 'Used solvents', labelled: 'labelled waste', treat: 'to treat'});
export const SceneSafety: React.FC = () => {
	const f = useCurrentFrame();
	const E2 = 540 + mw(EQ_A, 34, true, 700) + 26;
	const E2W = mw('ethanoic acid', 34, true, 700);
	const ANX = 540 + mw('salicylic acid + ethanoic', 34, true, 700) + 20;
	const sash = vis(f, K8.cupboard, K8.by, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="6 Safety, by-products and waste" />
			<Pic p={PL.hood} cx={300} cy={480} w={320} />
			{sash > 0.01 ? <rect x={170} y={350} width={260} height={110} rx={10} fill={AMBER} opacity={0.25 * sash} /> : null}
			<g opacity={1 - 0.5 * prog(f, K8.cupboard + 20, 14)}>
				<Chip x={540} y={276} text="ethanoic anhydride: corrosive, irritating vapour" size={30} color={RED} ink={INK} at={K8.corrosive} />
				<Chip x={540} y={336} text="conc. acid catalyst: corrosive" size={30} color={RED} ink={INK} at={K8.cat} />
			</g>
			<Chip x={540} y={396} text="fume cupboard, gloves, eye protection" size={32} color={GREEN} ink={INK} at={K8.cupboard} />
			<Sx x={540} y={540} text={EQ_A} size={34} color={INK} hand at={K8.by} />
			<Sx x={E2} y={540} text="ethanoic acid" size={34} color={BYP} hand at={K8.by} />
			{prog(f, K8.by + 10, 12) > 0.01 ? <rect x={E2 - 14} y={502} width={E2W + 28} height={54} rx={14} fill="none" stroke={BYP} strokeWidth={4} opacity={prog(f, K8.by + 10, 12)} /> : null}
			<DrawPath d={`M${E2 + E2W / 2},572 C${E2 + E2W / 2},650 ${ANX},650 ${ANX},566`} at={K8.anhydride} dur={24} color={BYP} width={5} />
			<path d={`M${ANX - 14},580 L${ANX},560 L${ANX + 14},580`} fill="none" stroke={BYP} strokeWidth={5} opacity={prog(f, K8.anhydride + 20, 8)} />
			<Sx x={1045} y={680} text="recovered and reused" size={34} color={BYP} anchor="middle" hand at={K8.anhydride + 10} />
			<GTag x={540} y={702} text="atom economy 75% (extension)" size={26} at={K8.anhydride + 30} />
			<g opacity={vis(f, K8.labelled - 6, undefined, 14)}><PicH p={PL.waste} cx={1440} cy={330} h={200} /></g>
			<GTag x={1440} y={444} text="labelled waste, not the sink" size={28} anchor="middle" at={K8.labelled} />
			<SeeSaw cx={900} cy={830} w={680} gain="less waste" cost="recovery equipment costs" at={K8.treat} size={30} />
			<FactorBoard st={fs(5, K8.safety, [[6, K8.by]])} />
			{void AMBER_INK}{void ACE}{void BRICK}{void CARD}{void EDGE}{void GREYT}{void HBar}{void INK_SOFT}{void Mistake}{void Mol}{void NAVY}{void OHR}{void PriceTag}{void T}{void TEAL}{void Tag}{void lerp}{void smooth}{void Beaker}
		</Svg>
	);
};

// ---------- 9. environment, society and cost ----------
const K9 = K('environment-society-cost', {step: 'step back', env: 'Environmentally', oil: 'crude oil', energy: 'use energy', social: 'Socially', medicines: 'essential medicines', health: "people's health", econ: 'Economically', little: 'very little', waste: 'little waste', others: 'the others'});
export const SceneSociety: React.FC = () => {
	const f = useCurrentFrame();
	const links = [{a: 1, b: 8, at: K9.others}, {a: 2, b: 7, at: K9.others + 8}, {a: 4, b: 3, at: K9.others + 16}, {a: 6, b: 8, at: K9.others + 24}, {a: 0, b: 7, at: K9.others + 32}];
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="7 Environment, society, cost" />
			<Sx x={290} y={262} text="environment" size={40} color={TEAL} anchor="middle" hand at={K9.env} />
			<g opacity={vis(f, K9.env - 4, undefined, 14)}><PicH p={PL.barrel} cx={250} cy={420} h={230} /></g>
			<path d="M400,330 L370,410 L398,410 L372,490 L440,392 L410,392 L436,330 Z" fill="#f3d27a" stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, K9.energy, 12)} />
			<Tag x={96} y={570} w={420} text="oil-based starting materials; energy use" size={30} color={TEAL} ink={INK} at={K9.oil} />
			<Tag x={96} y={680} w={420} text="feedstock: the raw material a process starts from" size={26} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K9.energy + 10} />
			<Sx x={780} y={262} text="society" size={40} color={NAVY} anchor="middle" hand at={K9.social} />
			<g opacity={vis(f, K9.social - 4, undefined, 14)}><Pic p={PL.tablets} cx={780} cy={420} w={340} /></g>
			<Sx x={780} y={600} text="WHO essential medicine" size={34} color={INK} anchor="middle" hand at={K9.medicines} />
			<GTag x={780} y={622} text="WHO Model List, 2023" size={28} anchor="middle" at={K9.medicines + 20} />
			<Sx x={780} y={720} text="cheap, reliable supply matters" size={32} color={INK} anchor="middle" hand at={K9.health} />
			<Sx x={1270} y={262} text="cost" size={40} color={BRICK} anchor="middle" hand at={K9.econ} />
			<PriceTag x={1150} y={360} at={K9.econ} />
			<Sx x={1270} y={560} text="very low price per tablet" size={34} color={INK} anchor="middle" hand at={K9.little} />
			<Chip x={1040} y={600} text="high yield + cheap reagents + little waste" size={28} color={BRICK} ink={INK} at={K9.waste} />
			<Sx x={96} y={850} text="every factor pulls on the others" size={48} color={NAVY} hand at={K9.others} />
			<FactorBoard st={fs(7, K9.env, [[8, K9.social]])} links={links} />
			{void AMBER}{void ACE}{void BYP}{void CARD}{void DrawPath}{void EDGE}{void GREEN}{void GTag}{void HBar}{void INK_SOFT}{void Mistake}{void Mol}{void OHR}{void RED}{void SeeSaw}{void T}{void lerp}{void smooth}{void Beaker}
		</Svg>
	);
};

// ---------- 10. judging the route ----------
const K10 = K('judge', {judge: 'how do', verdict: 'decide the', each: 'give each', here: "Here's a", sound: 'sound design', because: 'because it', provided: 'provided the', weakness: 'Its weakness', evaluation: 'an evaluation', list: 'a list'});
const PEEL = ['supply', 'equilibrium and yield', 'rate and conditions', 'purity and safety', 'waste, environment and cost'];
const RAIL = ['#24407a', '#2f7f86', '#c9781a', '#7a4fb0', '#b0452e'];
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	const rows = prog(f, K10.each, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="Judge: verdict first, then evidence" />
			<GTag x={1560} y={168} text="s08: verdict first, PEEL, verdict last" size={28} anchor="end" at={K10.verdict} />
			<rect x={96} y={236} width={1460} height={180} rx={18} fill={CARD} stroke={NAVY} strokeWidth={4} opacity={prog(f, K10.verdict, 12)} />
			<Sx x={120} y={296} text="sound design for a cheap, essential medicine" size={46} color={INK} at={K10.sound} />
			<Sx x={120} y={348} text="because: high yield, quick, mild conditions" size={36} color={INK} hand at={K10.because} />
			<g opacity={prog(f, K10.provided, 12)}>
				<path d="M110,370 L102,370 L102,404 L110,404" fill="none" stroke={GREEN} strokeWidth={4} />
				<Sx x={120} y={398} text="provided: ethanoic acid recovered; product purified to medicine standard" size={32} color={GREEN} hand at={ON} />
			</g>
			{PEEL.map((t, i) => <g key={t} opacity={rows}>
				<rect x={96} y={440 + i * 64} width={900} height={52} rx={10} fill="#f1eee7" stroke={EDGE} strokeWidth={2} />
				<rect x={96} y={440 + i * 64} width={12} height={52} rx={4} fill={RAIL[i]} />
				<Sx x={126} y={476 + i * 64} text={`paragraph: ${t}`} size={30} color={INK} hand at={ON} />
			</g>)}
			<rect x={96} y={770} width={900} height={52} rx={10} fill={CARD} stroke={NAVY} strokeWidth={3} opacity={rows} />
			<Sx x={126} y={806} text="verdict again, with its condition" size={30} color={NAVY} hand at={K10.each} />
			<Chip x={1030} y={450} text="weakness: oil-based starting materials" size={30} color={BRICK} fill="#f7dcd8" ink={INK} at={K10.weakness} />
			<Mistake x={1030} y={560} text="a list of factors, no verdict" size={34} at={K10.evaluation} cross={K10.list} note="weigh them, then judge" noteW={540} />
			<FactorBoard st={fs(9)} />
			{void AMBER}{void AMBER_INK}{void ACE}{void BYP}{void DrawPath}{void GREYT}{void HBar}{void INK_SOFT}{void Mol}{void OHR}{void Pic}{void PicH}{void PriceTag}{void RED}{void SeeSaw}{void T}{void TEAL}{void Tag}{void lerp}{void smooth}{void vis}{void Beaker}
		</Svg>
	);
};

// ---------- 11. memory aid ----------
const K11 = K('memory-aid', {line: 'One line', yieldT: 'yield tells', route: 'the route', so: 'So when', reagents: 'the reagents', people: 'the people'});
export const SceneMemory: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Task text="One line to keep" />
		<T x={96} y={300} w={1440} text="Yield tells you how much product you collected, not how good the route is." size={56} color={NAVY} at={K11.yieldT} />
		<Mistake x={96} y={440} text="high yield = good route" size={40} at={K11.route} cross={K11.route + 20} />
		<GTag x={96} y={600} text="waste" size={30} at={K11.route + 30} />
		<GTag x={230} y={600} text="hazardous solvent" size={30} at={K11.route + 40} />
		<GTag x={510} y={600} text="scarce supply" size={30} at={K11.route + 50} />
		<Sx x={96} y={760} text="start with the reagents, end with the people and the cost" size={44} color={INK} hand at={K11.reagents} />
		<PicH p={PL.bath} cx={1100} cy={530} h={240} />
		<Pic p={PL.tablets} cx={1380} cy={560} w={260} />
		<FactorBoard st={fs(9)} path={K11.people} />
		{void ACE}
	</Svg>
);
