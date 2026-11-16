// C8-13 scenes 1 to 6: the hook (Aspirin since 1899; a few grams at school, tonnes in a factory), the reaction (ring OH
// plus the acetyl group gives the ester; ethanoic acid leaves as a by-product; the factor board builds), supply (willow
// bark could not supply the world; crude oil to phenol to salicylic acid), equilibrium (why the anhydride, not the
// acid), rate and conditions (catalyst and a warm water bath; why not hotter), and yield (losses in isolation). The
// factor board sits at the far right from scene 2; one factor per scene lights amber.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, ACE, Arrow, BRICK, BYP, CARD, Chip, DrawPath, Drop, EDGE, FactorBoard, Factory, GREEN, GREYT, GTag, HBar, INK, INK_SOFT, Mistake, Mol, NAVY, OHR, Pic, PicH, RED, SeeSaw, Svg, Sx, T, TEAL, Title, lerp, prog, smooth, vis,
} from './parts';
import type {FState} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'Designing a synthesis: how do you judge a recipe?';
/** Factor board state: tiles before `cur` done, `cur` lit from `at`, extra lit tiles. */
export const fs = (cur: number, at: number = ON, extra: [number, number][] = []): FState[] => Array.from({length: 9}, (_, i) => {
	const e = extra.find(x => x[0] === i);
	if (e) return {lit: e[1]};
	return i < cur ? {done: ON} : i === cur ? {lit: at} : {};
});
export const Task: React.FC<{text: string; at?: number}> = ({text, at = 2}) => <Sx x={96} y={200} text={text} size={44} color={NAVY} hand at={at} />;
/** The four structures of the aspirin equation in one row. */
export const EqRow: React.FC<{y: number; s?: number; at: [number, number, number, number]; rings?: {oh?: number; ester?: number; eta?: number}; dim?: number}> = ({y, s = 0.85, at, rings = {}, dim}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	return (
		<g opacity={1 - 0.5 * d}>
			<Mol k="sal" x={200} y={y} s={s} at={at[0]} ring={rings.oh === undefined ? undefined : {key: 'salOH', at: rings.oh, color: OHR}} />
			<Sx x={455} y={y + 14} text="+" size={56} color={INK} anchor="middle" weight={800} at={at[1]} />
			<Mol k="anh" x={600} y={y} s={s} at={at[1]} />
			<Arrow a={[722, y]} b={[800, y]} at={at[2]} color={INK} width={5} />
			<Mol k="asp" x={880} y={y} s={s} at={at[2]} ring={rings.ester === undefined ? undefined : {key: 'aspEster', at: rings.ester, color: ACE}} />
			<Sx x={1150} y={y + 14} text="+" size={56} color={INK} anchor="middle" weight={800} at={at[3]} />
			<Mol k="eta" x={1250} y={y} s={s} at={at[3]} ring={rings.eta === undefined ? undefined : {key: 'eta', at: rings.eta, color: BYP}} />
		</g>
	);
};
export const WORD_EQ = 'salicylic acid + ethanoic anhydride → aspirin + ethanoic acid';

// ---------- 1. hook ----------
const K1 = K('hook', {y1897: '1897', aspirin: 'as Aspirin', century: 'More than', school: 'school lab', tonne: 'by the', good: 'good one'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text={TITLE} />
			<Chip x={96} y={170} text="10 Aug 1897: pure acetylsalicylic acid, Bayer" size={32} color={NAVY} ink={INK} at={K1.y1897} />
			<GTag x={96} y={244} text="Sneader 2000, BMJ" size={28} at={K1.y1897 + 20} />
			<Chip x={420} y={244} text="1899: sold as Aspirin" size={32} color={NAVY} ink={INK} at={K1.aspirin} />
			<Pic p={PL.tablets} cx={300} cy={500} w={380} />
			<Mol k="asp" x={640} y={480} s={0.9} at={K1.y1897 + 10} />
			<Sx x={700} y={680} text="acetylsalicylic acid" size={34} color={INK} anchor="middle" hand at={K1.y1897 + 20} />
			<Sx x={300} y={680} text="the same molecule" size={34} color={INK} anchor="middle" hand at={K1.century} />
			<g opacity={vis(f, K1.school - 6, undefined, 14)}>
				<PicH p={PL.bath} cx={1100} cy={500} h={320} />
				<GTag x={1100} y={690} text="school: a few grams" size={30} anchor="middle" />
			</g>
			<Factory x={1380} y={390} at={K1.school + 60} />
			<GTag x={1530} y={690} text="industry: by the tonne" size={30} anchor="middle" at={K1.tonne} />
			<Chip x={960} y={760} text="What makes a good recipe?" size={46} color={NAVY} ink={NAVY} anchor="middle" at={K1.good} />
			<g opacity={prog(f, K1.y1897, 14)}>
				<line x1={200} x2={1720} y1={930} y2={930} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				{([[200, '1897'], [320, '1899'], [1720, 'today']] as [number, string][]).map(([x, s]) => <g key={s}><line x1={x} x2={x} y1={918} y2={942} stroke={INK} strokeWidth={4} /><Sx x={x} y={984} text={s} size={32} color={INK} anchor="middle" weight={700} at={ON} /></g>)}
				<Sx x={960} y={912} text="more than a century of aspirin" size={34} color={INK_SOFT} anchor="middle" hand at={K1.century} />
			</g>
			{void AMBER}{void TEAL}{void lerp}{void smooth}
		</Svg>
	);
};

// ---------- 2. the reaction ----------
const K2 = K('reaction', {sal: 'Salicylic acid', oh: 'O H', anh: 'Ethanoic anhydride', puts: 'puts an', oxygen: 'that oxygen', ester: 'ester link', other: 'The other', acid: 'ethanoic acid', get: 'So you', by: 'by-product', equation: 'this one'});
export const SceneReaction: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Task text="The reaction" />
		<EqRow y={430} at={[K2.sal, K2.anh, K2.oxygen, K2.acid]} rings={{oh: K2.oh, ester: K2.oxygen + 20, eta: K2.acid + 10}} />
		<GTag x={480} y={262} text="acetyl group: CH_3CO" size={28} at={K2.puts} />
		<GTag x={830} y={262} text="c10: ester link" size={28} at={K2.ester} />
		<Sx x={200} y={630} text="salicylic acid" size={30} color={INK} anchor="middle" hand at={K2.sal} />
		<Sx x={600} y={630} text="ethanoic anhydride" size={30} color={INK} anchor="middle" hand at={K2.anh} />
		<Sx x={920} y={630} text="aspirin" size={30} color={INK} anchor="middle" hand at={K2.oxygen} />
		<Sx x={1250} y={630} text="ethanoic acid" size={30} color={BYP} anchor="middle" hand at={K2.acid} />
		<Sx x={96} y={712} text={WORD_EQ} size={44} color={INK} hand at={K2.get} />
		<Sx x={96} y={774} text="C_7H_6O_3 + (CH_3CO)_2O → C_9H_8O_4 + CH_3COOH" size={38} color={INK} at={K2.get + 20} />
		<GTag x={96} y={808} text="by-product: a second product you didn't want" size={28} at={K2.by} />
		<FactorBoard at={K2.equation} />
		<GTag x={1824} y={870} text="same factors: medicines, cosmetics, cleaning products, fuels" size={28} anchor="end" at={K2.equation + 50} />
	</Svg>
);

// ---------- 3. supply ----------
const K3 = K('supply', {reagents: 'the reagents', willow: 'willow bark', couldnt: "couldn't supply", industry: 'Industry makes', phenol: 'from phenol', oil: 'crude oil', anh: 'The anhydride', avail: 'availability', fossil: 'fossil fuels'});
export const SceneSupply: React.FC = () => {
	const f = useCurrentFrame();
	const dimW = prog(f, K3.couldnt + 20, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="1 Supply: where the reagents come from" />
			<g opacity={1 - 0.5 * dimW}><Pic p={PL.willow} cx={300} cy={470} w={300} /></g>
			<Sx x={300} y={680} text="willow bark: salicin" size={34} color={INK} anchor="middle" hand at={K3.willow} />
			<Mistake x={96} y={730} text="enough for world demand" size={30} at={K3.couldnt} cross={K3.couldnt + 16} />
			<Arrow a={[470, 440]} b={[580, 440]} at={K3.willow + 10} color={INK_SOFT} width={4} />
			<Mol k="sal" x={680} y={450} s={0.7} at={K3.willow + 14} />
			<Sx x={700} y={600} text="salicylic acid" size={30} color={INK} anchor="middle" hand at={K3.willow + 14} />
			<g opacity={vis(f, K3.oil - 6, undefined, 14)}><PicH p={PL.barrel} cx={1350} cy={440} h={300} /></g>
			{prog(f, K3.fossil, 12) > 0.01 ? <ellipse cx={1350} cy={440} rx={130} ry={180} fill="none" stroke={AMBER} strokeWidth={6} opacity={prog(f, K3.fossil, 12)} /> : null}
			<GTag x={1350} y={212} text="supply depends on oil" size={30} anchor="middle" at={K3.fossil} />
			<Sx x={560} y={700} text="crude oil → phenol → (+ CO_2, pressure) → salicylic acid" size={36} color={INK} hand at={K3.oil} />
			<GTag x={560} y={724} text="Kolbe-Schmitt process" size={26} at={K3.oil + 20} />
			<Chip x={900} y={724} text="ethanoic acid → ethanoic anhydride" size={30} color={NAVY} ink={INK} at={K3.anh} />
			<Sx x={560} y={840} text="availability: a cheap, steady supply" size={44} color={NAVY} hand at={K3.avail} />
			<FactorBoard st={fs(0, K3.reagents)} />
			{void CARD}{void EDGE}{void GREEN}{void GREYT}{void RED}{void T}{void DrawPath}{void AMBER_INK}{void BRICK}
		</Svg>
	);
};

// ---------- 4. equilibrium ----------
const K4 = K('equilibrium', {why: 'Why not', vinegar: 'in vinegar', eq: 'an equilibrium', left: 'left over', back: 'reaction back', nowater: 'makes no', aspirin: 'to aspirin', higher: 'much higher', catch: 'The catch', costs: 'costs more', dry: 'stay dry'});
export const SceneEquilibrium: React.FC = () => {
	const f = useCurrentFrame();
	const g1 = 0.4 * smooth(prog(f, K4.left, 30));
	const g2 = 0.95 * smooth(prog(f, K4.aspirin, 30));
	const push = smooth(prog(f, K4.back, 24));
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="2 Equilibrium: why the anhydride, not the acid" />
			<PicH p={PL.vinegar} cx={180} cy={360} h={200} />
			<GTag x={96} y={470} text="ethanoic acid: in vinegar" size={28} at={K4.vinegar} />
			<GTag x={320} y={244} text="c10: esterification is an equilibrium" size={28} at={K4.eq} />
			<Sx x={320} y={348} text="salicylic acid + ethanoic acid ⇌ aspirin + water" size={40} color={INK} hand at={K4.why} />
			<HBar x={320} y={384} w={420} h={36} label="" fill={() => g1} color={GREYT} at={K4.left} />
			<Sx x={760} y={412} text="much left unreacted" size={32} color={GREYT} hand at={K4.left + 10} />
			<g opacity={vis(f, K4.back, undefined, 12)}><Drop x={lerp(1180, 1040, push)} y={340} s={1} /></g>
			<Sx x={1100} y={420} text="water drives it back" size={32} color="#3f7fae" hand at={K4.back + 10} />
			<Sx x={320} y={560} text="salicylic acid + ethanoic anhydride → aspirin + ethanoic acid" size={40} color={INK} hand at={K4.nowater - 10} />
			<HBar x={320} y={596} w={420} h={36} label="" fill={() => g2} color={GREEN} at={K4.nowater} />
			<Sx x={760} y={624} text="almost complete" size={32} color={GREEN} hand at={K4.aspirin} />
			<g opacity={prog(f, K4.nowater, 12)}><Drop x={1180} y={600} crossed={K4.nowater + 8} /></g>
			<Sx x={1220} y={612} text="no water formed" size={32} color={INK} hand at={K4.nowater + 8} />
			<Sx x={96} y={700} text="much higher yield" size={44} color={GREEN} hand at={K4.higher} />
			<SeeSaw cx={860} cy={800} w={640} gain="higher yield" cost="costs more" at={K4.catch} costAt={K4.costs} extra="reacts with water: keep dry" extraAt={K4.dry} size={30} />
			<FactorBoard st={fs(1, K4.why)} />
			{void AMBER}{void BRICK}{void CARD}{void EDGE}{void RED}{void T}{void TEAL}{void PicH}
		</Svg>
	);
};

// ---------- 5. rate and conditions ----------
const K5 = K('rate-conditions', {slow: 'is slow', catalyst: 'a catalyst', bath: 'water bath', collisions: 'more collisions', sooner: 'there sooner', harder: 'heat it', side: 'side products', fumes: 'fumes more', energy: 'the energy', haber: 'Haber process', balance: 'a balance'});
export const SceneRate: React.FC = () => {
	const f = useCurrentFrame();
	const sp = vis(f, K5.collisions, undefined, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="3 Rate and conditions" />
			<Sx x={96} y={262} text={WORD_EQ} size={32} color={INK_SOFT} hand at={ON} />
			<Pic p={PL.bath} cx={460} cy={560} w={300} />
			{sp > 0.01 ? <g opacity={sp}>{Array.from({length: 8}, (_, i) => { const t = ((f / 10 + i * 1.7) % 6) / 6; return <circle key={i} cx={420 + ((i * 37) % 80)} cy={530 + ((i * 23) % 60)} r={5 + 4 * Math.sin(t * Math.PI)} fill={AMBER} opacity={Math.sin(t * Math.PI)} />; })}</g> : null}
			<Sx x={96} y={340} text="room temperature: slow" size={36} color={GREYT} hand at={K5.slow} />
			<Chip x={720} y={320} text="conc. H_2SO_4 or H_3PO_4 (a few drops)" size={32} color={NAVY} ink={INK} at={K5.catalyst} />
			<GTag x={720} y={386} text="c04b: same mixture, sooner" size={28} at={K5.catalyst + 20} />
			<Chip x={720} y={450} text="warm water bath, about 70 to 80 °C" size={32} color={NAVY} ink={INK} at={K5.bath} />
			<Sx x={720} y={556} text="more collisions with enough energy" size={36} color={INK} hand at={K5.collisions} />
			<GTag x={720} y={580} text="catalyst: faster, not more product" size={28} at={K5.sooner} />
			<SeeSaw cx={1040} cy={760} w={680} gain="faster" cost="side products, fumes, energy cost" at={K5.side} costAt={K5.side + 10} size={30} />
			<GTag x={96} y={808} text="c07: Haber, about 450 °C: speed, yield and cost" size={28} at={K5.haber} />
			<Sx x={720} y={872} text="a balance of speed, yield and cost" size={40} color={NAVY} hand at={K5.balance} />
			<FactorBoard st={fs(2, K5.slow)} />
			{void BRICK}{void CARD}{void EDGE}{void GREEN}{void RED}{void T}{void TEAL}{void PicH}{void lerp}
		</Svg>
	);
};

// ---------- 6. yield ----------
const K6 = K('yield', {how: 'how much', compares: 'Yield compares', lost: 'gets lost', dissolved: 'stays dissolved', glass: 'the glassware', filter: 'filter paper', normal: 'is normal', money: 'lost money'});
export const SceneYield: React.FC = () => {
	const f = useCurrentFrame();
	const col = 0.8 * smooth(prog(f, K6.compares + 20, 40));
	const drips: [string, number][] = [['stays dissolved', K6.dissolved], ['sticks to glassware', K6.glass], ['left on filter paper', K6.filter]];
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="4 Yield: how much you actually get" />
			<Pic p={PL.funnel} cx={260} cy={490} w={200} />
			<PicH p={PL.balance} cx={500} cy={560} h={220} />
			<GTag x={96} y={734} text="aspirin crystals collected by filtration" size={28} />
			<HBar x={720} y={340} w={700} label="most possible (from the equation)" fill={() => 1} color="#cfe0f0" at={K6.how} />
			<HBar x={720} y={470} w={700} label="collected" fill={() => col} color={TEAL} at={K6.compares} val={fr => `${Math.round(100 * 0.8 * smooth(prog(fr, K6.compares + 20, 40)))}%`} />
			<GTag x={1200} y={410} text="illustrative" size={26} at={K6.compares + 20} />
			<Sx x={720} y={600} text="yield = collected ÷ most possible × 100%" size={40} color={INK} hand at={K6.compares} />
			<GTag x={720} y={622} text="Year 11" size={26} at={K6.compares + 20} />
			{drips.map(([t, at], i) => {
				const k = prog(f, at, 24);
				return <g key={t} opacity={prog(f, at, 10)}>
					<circle cx={1290 + i * 40} cy={lerp(525, 690, k)} r={10} fill={GREYT} />
					<Sx x={1250} y={740 + i * 44} text={t} size={30} color={GREYT} hand at={ON} />
				</g>;
			})}
			<Chip x={720} y={700} text="lost product = lost money" size={32} color={BRICK} fill="#f7dcd8" ink={INK} at={K6.money} />
			<Sx x={720} y={820} text="well under 100% is normal" size={40} color={INK} hand at={K6.normal} />
			<FactorBoard st={fs(3, K6.how)} />
			{void AMBER}{void AMBER_INK}{void CARD}{void EDGE}{void GREEN}{void RED}{void T}{void DrawPath}
		</Svg>
	);
};
