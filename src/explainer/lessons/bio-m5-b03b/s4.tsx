import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnimalIcon, Arrow, Balance, balancePans, BASE, BeadDot, CoinIcon, COST_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GAIN, GREYC, Hand, HeartIcon, HerdGrid, Heading, INK, INK_SOFT, Overlay, ORANGE, Pill, POOL, PoolLegend, poolColor, prog, RowGlyph, RowKey, S, Scorecard, Scribble, SlideIn, Straw, Tag, VAR, WELF_INK, Tick, MiniLine, HARM, Germ,
} from './shared';

const COL1 = [{at: 0, text: 'proven bull, many farms, faster progress'}];
const FULL = (at: number) => ({
	gain: [{at, text: 'proven bull, many farms, faster progress'}, {at, text: 'a new variety with both traits'}, {at, text: 'uniform, quick'}],
	variety: [{at, text: 'narrower gene pool: shared weakness'}, {at, text: 'one variety everywhere: shared weakness'}, {at, text: 'one weakness'}],
	cost: [{at, text: 'usually less than a bull on every farm'}, {at, text: 'years of hand work'}, {at, text: 'not covered here', grey: true}],
	welfare: [{at, text: 'chasing one trait can harm another'}, {at, text: 'not an animal issue', grey: true}, {at, text: 'not covered here', grey: true}],
});
void COL1;

// ---------- 5. What "evaluate" asks for ----------
export const SceneEvaluate: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('evaluate'), {
		ev: 'Evaluate means', crit: 'criteria', things: 'things you judge it by', four: 'Four make a good start', gain: 'Gain: what does it improve', evid: 'a comparison with similar farms', variety: 'Variety: does it narrow', cost: 'Cost: money', welfare: 'And for animals', answer: 'A good answer gives', reasons: 'reasons from each criterion', weigh: 'a weighing', when: 'and when it would change',
	});
	const angle = (f < c.four ? 12 * Math.sin((f - c.ev) / 10) * Math.max(0, 1 - (f - c.ev) / 120) : 0);
	const bal = prog(f, c.ev + 30, 14) * (1 - prog(f, c.four - 8, 14));
	const glossX = 1290;
	const rowY = (i: number) => 260 + 67 + i * 87 + 8;
	const chip = (text: string, at: number, color: string) => (
		<Enter at={at} dy={14}><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 999, padding: '0 26px 6px', whiteSpace: 'nowrap', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>{text}</div></Enter>
	);
	const gloss = (i: number, at: number, k: RowKey, label: string, text: string) => (
		<Enter at={at + 10} style={{position: 'absolute', left: glossX, top: rowY(i) - 6, width: 540, borderLeft: `6px solid ${k === 'gain' ? GAIN : k === 'variety' ? VAR : k === 'cost' ? COST_INK : WELF_INK}`, paddingLeft: 14}}>
			<div style={{display: 'flex', gap: 10, alignItems: 'flex-start'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25, lineHeight: 1.18, color: INK}}>{text}</div>
			</div>
		</Enter>
	);
	return (
		<>
			<Heading items={[[c.ev - 6, 'Evaluate: make a judgement using criteria']]} size={64} color={AMBER_INK} />
			<Hand at={c.crit} x={96} y={176} size={46} color={INK_SOFT}>criteria: the things you judge it by</Hand>
			<Overlay>
				<Balance x={1560} y={250} w={340} angle={angle} o={bal} pivotLabel="worth it?" />
			</Overlay>
			<Scorecard x={96} y={260} s={0.78} at={c.four} colW={420} titles={[{text: 'insemination'}, {text: 'pollination'}, {text: 'copying'}]} cells={FULL(0)} lit={{gain: c.gain, variety: c.variety, cost: c.cost, welfare: c.welfare}} />
			{gloss(0, c.gain, 'gain', '', 'what improves? Evidence: compared with similar farms that do not use it')}
			{gloss(1, c.variety, 'variety', '', 'does it narrow the gene pool?')}
			{gloss(2, c.cost, 'cost', '', 'money, time and skill')}
			{gloss(3, c.welfare, 'welfare', '', 'for animals, how well their lives go')}
			<Overlay>
				<Scribble cx={96 + 70} cy={rowY(0) + 34} rx={92} ry={34} at={c.gain} color={GAIN} seed={2} width={5} />
				<Scribble cx={96 + 70} cy={rowY(1) + 34} rx={92} ry={34} at={c.variety} color={VAR} seed={3} width={5} />
				<Scribble cx={96 + 70} cy={rowY(2) + 34} rx={92} ry={34} at={c.cost} color={COST_INK} seed={4} width={5} />
				<Scribble cx={96 + 70} cy={rowY(3) + 34} rx={92} ry={34} at={c.welfare} color={WELF_INK} seed={5} width={5} />
			</Overlay>
			<div style={{position: 'absolute', left: 96, top: 740, display: 'flex', alignItems: 'center', gap: 22}}>
				{chip('judgement', c.answer, AMBER_INK)}
				<span style={{fontFamily: FONT_HAND, fontSize: 48, color: INK_SOFT, opacity: prog(f, c.reasons, 10)}}>+</span>
				{chip('reasons from each criterion', c.reasons, VAR)}
				<span style={{fontFamily: FONT_HAND, fontSize: 48, color: INK_SOFT, opacity: prog(f, c.weigh, 10)}}>+</span>
				{chip('weigh them', c.weigh, GAIN)}
				<span style={{fontFamily: FONT_HAND, fontSize: 48, color: INK_SOFT, opacity: prog(f, c.when, 10)}}>+</span>
				{chip('when it would change', c.when, WELF_INK)}
			</div>
		</>
	);
};

// ---------- model answer pieces ----------
const CARDS: {key: RowKey | 'judge' | 'weigh'; title: string; color: string; body: React.ReactNode}[] = [
	{key: 'judge', title: 'Judgement', color: AMBER_INK, body: <><span style={{background: 'rgba(224,162,27,0.35)', borderRadius: 6, padding: '0 6px'}}>worthwhile when</span> many unrelated bulls are used, each on only a share of the cows, and health traits count</>},
	{key: 'gain', title: 'Gain', color: GAIN, body: <>records compare herds using proven bulls with similar herds that mate naturally: faster gains in traits such as milk yield</>},
	{key: 'variety', title: 'Variety', color: VAR, body: <>a few bulls father most calves, so the gene pool narrows and one disease can spread widely</>},
	{key: 'cost', title: 'Cost and welfare', color: COST_INK, body: <>semen and trained workers cost money; selecting only for milk yield is linked with lower fertility, a welfare cost for the cow</>},
	{key: 'weigh', title: 'Weigh, then verdict: when', color: INK, body: <>the benefit is real, and it lasts if many unrelated bulls are used, each on only a share of the cows, and health traits count</>},
];
const CY = [182, 300, 418, 536, 654];
const RowCard: React.FC<{i: number; at: number; hi?: number; lastsAt?: number}> = ({i, at}) => {
	const card = CARDS[i];
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: 96, top: CY[i], width: 960, height: 106, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 20, border: `3px solid ${card.color}`, boxShadow: '0 10px 24px rgba(60,45,20,0.08)', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 20, padding: '0 22px'}}>
			<div style={{width: 210, flex: 'none', display: 'flex', alignItems: 'center', gap: 10}}>
				{card.key === 'judge' || card.key === 'weigh' ? null : <RowGlyph k={card.key} size={36} />}
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: card.color, lineHeight: 1}}>{card.title}</span>
			</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25, lineHeight: 1.2, color: INK}}>{card.body}</div>
		</div>
	);
};
const QUESTION = 'Evaluate the use of artificial insemination in dairy farming.';
const Question: React.FC = () => <Heading items={[[-80, QUESTION]]} size={50} />;

// ---------- 6a. Judgement and gain ----------
export const SceneModelGain: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('model-judgement-gain'), {
		here: 'Here is a model answer', first: 'First, the judgement', worth: 'worthwhile', second: 'Second, the gain', cmp: 'compare herds using proven bulls', natural: 'mate naturally', faster: 'show faster gains',
	});
	const PX = 1120;
	return (
		<>
			<Heading items={[[c.here - 6, QUESTION]]} size={50} />
			<RowCard i={0} at={c.first} />
			<RowCard i={1} at={c.second} />
			<Overlay>
				{/* two herds face each other */}
				<g opacity={prog(f, c.cmp, 14)}>
					<rect x={PX} y={200} width={330} height={250} rx={22} fill="#fffdf8" stroke={GAIN} strokeWidth={4} />
					{[0, 1, 2].map(i => <AnimalIcon key={i} x={PX + 70 + i * 100} y={330} s={0.6} kind="cow" />)}
					<Straw x={PX + 165} y={250} w={120} rot={-8} />
					<text x={PX + 165} y={420} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={GAIN}>proven bulls (straws)</text>
				</g>
				<g opacity={prog(f, c.natural - 10, 14)}>
					<rect x={PX + 380} y={200} width={330} height={250} rx={22} fill="#fffdf8" stroke={GREYC} strokeWidth={4} />
					{[0, 1, 2].map(i => <AnimalIcon key={i} x={PX + 450 + i * 100} y={350} s={0.6} kind="cow" />)}
					<AnimalIcon x={PX + 545} y={262} s={0.55} kind="bull" />
					<text x={PX + 545} y={420} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>a bull on the farm</text>
				</g>
				<MiniLine x={PX + 40} y={520} w={600} h={230} at={c.faster} dur={44} kind="steep" color={GAIN} label="milk yield over the years" />
				<MiniLine x={PX + 40} y={520} w={600} h={230} at={c.faster + 12} dur={44} kind="rise" color={GREYC} tag="" />
			</Overlay>
			<Tag at={c.faster + 30} x={PX + 40} y={800} text="evidence: a comparison with similar herds" color={AMBER_INK} size={44} w={700} />
		</>
	);
};

// ---------- 6b. Variety, cost and welfare ----------
export const SceneModelVariety: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('model-variety-cost'), {
		third: 'Third, the variety', few: 'If a few bulls father most', narrows: 'narrows', disease: 'one disease can spread widely', fourth: 'Fourth, cost and welfare', money: 'cost money', fert: 'lower fertility', welf: 'welfare cost',
	});
	const GX = 1180, GY = 250;
	const colorOf = (i: number) => poolColor(i, f, c.few, 5);
	const colors = Array.from({length: 24}, (_, i) => colorOf(i));
	const grey = (i: number) => (colorOf(i) === ORANGE ? prog(f, c.disease + 6 + i * 2, 10) : 0);
	return (
		<>
			<Question />
			<RowCard i={0} at={-40} />
			<RowCard i={1} at={-40} />
			<RowCard i={2} at={c.third} />
			<RowCard i={3} at={c.fourth} />
			<SlideIn at={c.third + 6} dx={40}>
				<Overlay>
					<rect x={1100} y={190} width={700} height={470} rx={26} fill="#fffdf8" fillOpacity={0.55} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" />
					<HerdGrid x={GX} y={GY} cw={92} ch={72} s={0.52} color={colorOf} grey={grey} />
				</Overlay>
			</SlideIn>
			<Overlay>
				<g opacity={prog(f, c.third + 6, 14)}>
					<AnimalIcon x={1210} y={226} s={0.55} kind="bull" ring={ORANGE} />
				</g>
				<PoolLegend x={1130} y={608} colors={colors} label="alleles" />
				{f >= c.disease && f < c.disease + 70 ? <Germ x={GX + 40 + prog(f, c.disease, 60) * 480} y={GY + 90} r={14} at={c.disease} /> : null}
				<CoinIcon x={1180} y={600} r={34} o={prog(f, c.money, 12)} />
				<HeartIcon x={1330} y={598} s={1.5} o={prog(f, c.welf, 12)} />
			</Overlay>
			<Tag at={c.fert} x={1120} y={680} text="lower fertility" color={WELF_INK} size={44} />
		</>
	);
};

// ---------- 6c. Weighing and the verdict ----------
export const SceneModelVerdict: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('model-verdict'), {
		fin: 'Finally, weigh them', large: 'the gain can be large', money: 'the money cost is usually', turns: 'the answer turns on variety', depend: 'both depend on', verdict: 'The verdict', frozen: 'Frozen semen', old: 'older, different bulls', heritage: 'heritage breeds', outcross: 'outcrossing', protect: 'protect variety',
	});
	const tip = 10 * prog(f, c.turns, 40);
	const BX = 1450, BY = 250, BW = 400;
	const pans = balancePans(BX, BY, BW, tip);
	const GX = 1130, GY = 650;
	// the tray refills with six colours as unrelated bulls' beads enter
	const colorOf = (i: number) => (f >= c.outcross + i * 3 ? BASE[i] : i % 3 === 2 ? BASE[i] : ORANGE);
	const colors = Array.from({length: 24}, (_, i) => colorOf(i));
	return (
		<>
			<Question />
			<RowCard i={0} at={-40} />
			<RowCard i={1} at={-40} />
			<RowCard i={2} at={-40} />
			<RowCard i={3} at={-40} />
			<RowCard i={4} at={c.fin} />
			<Overlay>
				<Balance x={BX} y={BY} w={BW} angle={tip} o={prog(f, c.fin + 20, 14)} />
				<g opacity={prog(f, c.large, 12)}><Tick x={pans.left[0] - 36} y={pans.left[1] - 22} at={c.large} s={0.9} /><CoinIcon x={pans.left[0] + 30} y={pans.left[1] - 24} r={22} /></g>
				<g opacity={prog(f, c.turns, 12)}><BeadDot cx={pans.right[0] - 30} cy={pans.right[1] - 26} r={16} color="#1f6fb2" /><HeartIcon x={pans.right[0] + 30} y={pans.right[1] - 26} s={0.9} /></g>
				<text x={pans.left[0]} y={pans.left[1] + 60} textAnchor="middle" opacity={prog(f, c.money, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={GAIN}>gain, money cost</text>
				<text x={pans.right[0]} y={pans.right[1] + 60} textAnchor="middle" opacity={prog(f, c.turns, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={WELF_INK}>variety, welfare risk</text>
			</Overlay>
			<Tag at={c.depend} x={1100} y={440} text="a model judgement: variety and welfare decide, and both depend on how the bulls are chosen" color={AMBER_INK} size={34} w={720} />
			{/* the repair: unrelated bulls refill the tray */}
			<Overlay>
				<g opacity={prog(f, c.outcross - 30, 14)}>
					<rect x={1100} y={600} width={720} height={330} rx={22} fill="#fffdf8" fillOpacity={0.55} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" />
					{Array.from({length: 24}, (_, i) => <BeadDot key={i} cx={GX + 40 + (i % 8) * 80} cy={GY + 40 + Math.floor(i / 8) * 64} r={19} color={colorOf(i)} />)}
					<PoolLegend x={1130} y={886} colors={colors} label="colours" off={150} />
				</g>
			</Overlay>
			<Tag at={c.outcross} x={1130} y={606} text="outcrossing: breeding with unrelated animals" color={GAIN} size={36} />
			<SlideIn at={c.frozen}>
				<Overlay>
					<rect x={96} y={790} width={470} height={150} rx={20} fill="#fffdf8" stroke="#7fb0d6" strokeWidth={3} />
					<Straw x={150} y={862} w={80} rot={-30} frost={1} />
					<text x={210} y={846} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={INK}>frozen semen from older,</text>
					<text x={210} y={880} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={INK}>different bulls</text>
				</Overlay>
			</SlideIn>
			<SlideIn at={c.heritage}>
				<Overlay>
					<rect x={590} y={790} width={470} height={150} rx={20} fill="#fffdf8" stroke={GREYC} strokeWidth={3} />
					<AnimalIcon x={650} y={866} s={0.6} kind="cow" />
					<text x={720} y={846} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={INK}>heritage breeds:</text>
					<text x={720} y={880} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={INK}>older breeds still bred</text>
				</Overlay>
			</SlideIn>
			<Tag at={c.protect} x={96} y={742} text="keep variety safe" color={VAR} size={44} />
			<Pill at={c.verdict} x={1100} y={530} color={GAIN} size={40}>verdict: the benefit is real, and it lasts if...</Pill>
		</>
	);
};
