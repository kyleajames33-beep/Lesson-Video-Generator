// B8-13 scenes 1 to 5: the hook (1981 and 1988 on a dated axis, melanoma falling in younger Australians, "or something
// else?"), the three prevention levels on a when-we-act timeline and what a campaign is, designing from the mechanism
// (the campaign frame draws at the bottom), knowing isn't doing (knows, agrees, does; the conditions that make the safe
// choice easy), and the evidence ladder (process, impact, outcome against time). The campaign frame owns the bottom from
// scene 3; the evidence ladder stands at the right from scene 5.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Lab} from '../bio-m8-b08/s1';
import {
	AMBER, AMBER_INK, Arrow, BLUE, C_LIFE, CARD, CampaignFrame, Chip, DrawPath, EDGE, GREYT, GTag, INK, INK_SOFT, LAD, Ladder, Mistake, Pic, PicH, RED, RUNGS, ShareRow, Svg, Sx, T, TEAL, Title, UVScale, prog, pulse, smooth,
	vis,
} from './parts';
import type {CFItem} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
const GREYC = '#8d857a';

// ---------- the campaign frame's contents by stage (scenes 3 to 9) ----------
export const CF_AUD = 'children, teens, outdoor workers';
export const cfItems = (o: {exp?: number; aud?: number; audOut?: number; act?: number[]; actOut?: number; meas?: number; measOut?: number; imp?: number; impOut?: number}): CFItem[][] => {
	const chips: [string, string][] = [['ads', GREYC], ['hats', C_LIFE], ['shade', C_LIFE], ['UV alerts', C_LIFE], ['bans', C_LIFE]];
	return [
		o.exp === undefined ? [] : [{t: 'UV on skin', at: o.exp}],
		o.aud === undefined ? [] : [{t: CF_AUD, at: o.aud, out: o.audOut}],
		(o.act ?? []).map((a, i) => ({t: chips[i][0], at: a, chip: chips[i][1], out: o.actOut})),
		[...(o.meas === undefined ? [] : [{t: '?', at: o.meas, out: o.imp}]), ...(o.imp === undefined ? [] : [{t: 'impact first, outcome later', at: o.imp, out: o.impOut}])],
	];
};

// ---------- 1. hook ----------
const K1 = K('hook', {highest: 'highest melanoma', y81: '1981', slip: 'slip', y88: '1988', today: 'Today', falling: 'are falling', but: 'But was', else: 'something else', so: 'So how'});
const AX = {x0: 200, x1: 1700, y: 920};
const ax = (yr: number) => AX.x0 + ((yr - 1980) / 40) * (AX.x1 - AX.x0);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Slip, slop, slap: did it work?" out={K1.so} />
			<Title text="How can prevention campaigns reduce disease?" at={K1.so} />
			<Pic p={PL.sun} cx={230} cy={330} w={280} />
			<Pic p={PL.melanoma} cx={800} cy={400} w={520} />
			<GTag x={800} y={648} text="melanoma: a skin cancer from pigment cells" size={28} anchor="middle" at={K1.highest + 10} />
			<T x={1150} y={260} w={660} text="Australia: one of the highest melanoma rates in the world" size={46} color={INK} at={K1.highest} />
			<line x1={AX.x0} x2={AX.x1} y1={AX.y} y2={AX.y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{[1980, 1990, 2000, 2010, 2020].map(yr => <g key={yr}><line x1={ax(yr)} x2={ax(yr)} y1={AX.y - 9} y2={AX.y + 9} stroke={INK} strokeWidth={3} /><Sx x={ax(yr)} y={AX.y + 42} text={`${yr}`} size={28} color={INK} anchor="middle" weight={700} at={ON} /></g>)}
			<GTag x={ax(1981)} y={712} text="b07: slip, slop, slap, seek, slide" size={28} at={K1.slip} />
			<Chip x={ax(1981)} y={770} text="1981: Slip! Slop! Slap!" size={32} color={AMBER_INK} ink={INK} at={K1.y81} />
			<DrawPath d={`M${ax(1981)},${AX.y - 10} L${ax(1981)},${820}`} at={K1.y81} dur={10} color={AMBER_INK} width={3} />
			<Chip x={640} y={770} text="1988: SunSmart" size={32} color={AMBER_INK} ink={INK} at={K1.y88} />
			<DrawPath d={`M${ax(1988)},${AX.y - 10} L${680},${820}`} at={K1.y88} dur={10} color={AMBER_INK} width={3} />
			<DrawPath d={`M${ax(2000)},${720} L${ax(2010)},${780} L${ax(2020)},${850}`} at={K1.falling} dur={24} color={TEAL} width={7} />
			<Sx x={ax(2000) - 16} y={744} text="melanoma, under 40s" size={34} color={TEAL} anchor="end" hand at={K1.falling + 10} />
			<GTag x={1824} y={636} text="shape only, see later" size={26} anchor="end" at={K1.falling + 20} />
			<Sx x={1760} y={820} text="?" size={96} color={AMBER_INK} hand at={K1.else} />
			{void f}
		</Svg>
	);
};

// ---------- 2. three levels, and what a campaign is ----------
const K2 = K('prevention-levels', {uv: 'UV damages', prev: 'Prevention means', primary: 'Primary prevention', secondary: 'Secondary prevention', tertiary: 'Tertiary prevention', campaign: 'A campaign', defined: 'defined group'});
const CX = [96, 690, 1284];
export const SceneLevels: React.FC = () => {
	const f = useCurrentFrame();
	const cards: {head: string; lab: string; at: number; p: typeof PL.sun; h: number}[] = [
		{head: 'no disease yet', lab: 'primary: stop the exposure', at: K2.primary, p: PL.protect, h: 150},
		{head: 'disease starting, no symptoms', lab: 'secondary: detect early (screening)', at: K2.secondary, p: PL.clip, h: 170},
		{head: 'disease established', lab: 'tertiary: limit the damage', at: K2.tertiary, p: PL.eye, h: 160},
	];
	const camp = pulse(f, K2.campaign, 50);
	return (
		<Svg>
			<Title text="Three levels of prevention" />
			<Pic p={PL.uvSkin} cx={200} cy={275} w={190} />
			<GTag x={96} y={400} text="b07: UV damages skin-cell DNA" size={28} at={K2.uv} />
			<Chip x={380} y={150} text="prevention: when we act" size={34} color={BLUE} ink={BLUE} />
			<T x={380} y={290} w={1440} text="prevention: acting before disease or harm develops" size={46} color={INK} at={K2.prev} />
			<Arrow a={[96, 468]} b={[1824, 468]} color={INK_SOFT} width={5} />
			{cards.map((c, i) => {
				const L = prog(f, c.at, 14);
				const dim = i === 0 ? 0 : 0;
				return (
					<g key={i} opacity={1 - dim}>
						{i === 0 && camp > 0.01 ? <rect x={CX[i] - 8} y={482} width={556} height={366} rx={26} fill={AMBER} opacity={0.35 * camp} /> : null}
						<rect x={CX[i]} y={490} width={540} height={350} rx={20} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
						<Sx x={CX[i] + 270} y={538} text={c.head} size={32} color={L > 0.5 ? INK : GREYT} anchor="middle" hand at={ON} />
						<PicH p={c.p} cx={CX[i] + 270} cy={650} h={c.h} />
						<Sx x={CX[i] + 270} y={790} text={c.lab} size={34} color={BLUE} anchor="middle" hand at={c.at} />
					</g>
				);
			})}
			<GTag x={1554} y={800} text="for example diabetes eye checks" size={26} anchor="middle" at={K2.tertiary + 20} />
			<T x={96} y={920} w={1728} text="campaign: planned messages and actions, a defined group, one behaviour" size={42} color={TEAL} at={K2.campaign} />
		</Svg>
	);
};

// ---------- 3. design from the mechanism ----------
const K3 = K('design-frame', {good: 'Good campaigns', uv: 'UV reaching', target: 'target behaviour', child: 'especially in', aud: 'choose the', measure: "what you'll", cant: 'If you', advert: 'an advert'});
export const SceneDesign: React.FC = () => (
	<Svg>
		<Title text="Design from the mechanism" />
		<GTag x={1824} y={140} text="primary prevention: stop the exposure" size={28} anchor="end" />
		<Pic p={PL.uvSkin} cx={330} cy={450} w={378} />
		<Sx x={330} y={722} text="UV reaching skin cells" size={40} color={INK} anchor="middle" hand at={K3.uv} />
		<Lab x={640} y={290} t="target behaviour: reduce UV exposure" at={K3.target} size={46} w={1180} />
		<GTag x={640} y={330} text="childhood sunburn adds most risk" size={30} at={K3.child} />
		<Sx x={640} y={430} text="audience" size={34} color={BLUE} hand at={K3.aud} />
		<ShareRow x={640} y={480} label="children" n={10} at={K3.aud} lw={260} color={TEAL} o={prog(useCurrentFrame(), K3.aud, 12)} />
		<ShareRow x={640} y={540} label="teens" n={10} at={K3.aud + 6} lw={260} color={TEAL} o={prog(useCurrentFrame(), K3.aud + 6, 12)} />
		<ShareRow x={640} y={600} label="outdoor workers" n={10} at={K3.aud + 12} lw={260} color={TEAL} o={prog(useCurrentFrame(), K3.aud + 12, 12)} />
		<Mistake x={640} y={680} text="a catchy advert" size={40} at={K3.cant} cross={K3.advert} note="name the exposure, the people and the measure" noteW={1100} />
		<CampaignFrame lit={[K3.uv, K3.aud, K3.target, K3.measure]} items={[[{t: 'UV on skin', at: K3.uv + 10}], [{t: CF_AUD, at: K3.aud + 14}], [{t: 'reduce UV exposure', at: K3.target + 10}], [{t: '?', at: K3.measure + 10}]]} />
	</Svg>
);

// ---------- 4. knowing isn't doing ----------
const K4 = K('knowing-doing', {learn: 'learn the', agree: 'agree with', still: "still don't", habit: 'habit', cost: 'cost', conv: 'convenience', others: 'what others', rely: "didn't rely", schools: 'Schools adopted', councils: 'councils built', uv: 'UV alerts', sol: 'commercial solariums', cond: 'change the', safe: 'safe choice', tobacco: 'Tobacco control', taxes: 'taxes', laws: 'smoke-free'});
export const SceneKnowing: React.FC = () => {
	const f = useCurrentFrame();
	const does = 70 + 170 * smooth(prog(f, K4.safe, 40));
	const bars: [string, number, number][] = [['knows', 300, K4.learn], ['agrees', 260, K4.agree], ['does', does, K4.still]];
	return (
		<Svg>
			<Title text="Knowing isn't doing" />
			{bars.map(([t, h, at], i) => {
				const L = prog(f, at, 12);
				return <g key={t}>
					<rect x={140 + i * 160} y={520 - h} width={110} height={h} rx={8} fill={i === 2 ? AMBER : TEAL} opacity={0.35 + 0.55 * L} />
					<Sx x={195 + i * 160} y={560} text={t} size={36} color={INK} anchor="middle" hand at={ON} />
				</g>;
			})}
			<line x1={120} x2={600} y1={520} y2={520} stroke={INK} strokeWidth={3} />
			<Sx x={96} y={630} text="knowing isn't doing" size={48} color={AMBER_INK} hand at={K4.still} />
			<GTag x={640} y={240} text="habit" size={30} at={K4.habit} />
			<GTag x={640} y={300} text="cost" size={30} at={K4.cost} />
			<GTag x={640} y={360} text="convenience" size={30} at={K4.conv} />
			<GTag x={640} y={420} text="what others do" size={30} at={K4.others} />
			<g opacity={vis(f, K4.rely - 6, undefined, 14)}>
				<PicH p={PL.tv} cx={1000} cy={290} h={190} />
				<GTag x={1000} y={400} text="ads: one layer" size={30} anchor="middle" />
			</g>
			<g opacity={vis(f, K4.schools - 6, undefined, 14)}>
				<PicH p={PL.protect} cx={1000} cy={590} h={120} />
				<Sx x={1000} y={690} text="school hat and shade policies" size={30} color={INK} anchor="middle" hand at={ON} />
			</g>
			<g opacity={vis(f, K4.councils - 6, undefined, 14)}><PicH p={PL.sail} cx={1520} cy={320} h={280} /></g>
			<Sx x={1520} y={500} text="councils built shade" size={32} color={INK} anchor="middle" hand at={K4.councils} />
			<Sx x={1360} y={545} text="UV alerts in weather forecasts" size={30} color={INK} hand at={K4.uv} />
			<UVScale x={1360} y={590} w={400} at={K4.uv} />
			<GTag x={1360} y={680} text="solarium bans (by 2016)" size={28} at={K4.sol} />
			<GTag x={96} y={700} text="b11: tobacco, in layers" size={28} at={K4.tobacco} />
			<GTag x={96} y={760} text="taxes" size={28} at={K4.taxes} />
			<GTag x={210} y={760} text="smoke-free laws" size={28} at={K4.laws} />
			<Mistake x={560} y={744} text="a memorable ad means it worked" size={34} at={K4.cond} cross={K4.safe + 20} />
			<Sx x={1360} y={820} text="the safe choice becomes the easy one" size={34} color={C_LIFE} hand at={K4.safe} />
			<CampaignFrame lit={[ON, ON, K4.rely, ON]} items={cfItems({exp: ON, aud: ON, act: [K4.rely, K4.schools, K4.councils, K4.uv, K4.sol], meas: ON})} />
			{void RED}{void AMBER_INK}
		</Svg>
	);
};

// ---------- 5. three levels of evidence ----------
const K5 = K('evidence-ladder', {how: 'how do you', process: 'Process measures', ads: 'ads shown', schools: 'schools signed', own: 'On their', impact: 'Impact measures', hats: 'hats worn', outcome: 'Outcome measures', rates: 'melanoma rates', matter: 'Outcomes matter', decades: 'takes decades', best: 'best evidence'});
export const SceneLadder: React.FC = () => {
	const f = useCurrentFrame();
	const lad = RUNGS([K5.process, K5.impact, K5.outcome], [
		(x, y) => <g><GTag x={x} y={y} text="ads shown" size={28} at={K5.ads} /><GTag x={x + 170} y={y} text="schools signed up" size={28} at={K5.schools} /></g>,
		(x, y) => <g><PicH p={PL.protect} cx={x + 80} cy={y + 40} h={80} /><GTag x={x + 180} y={y + 18} text="hats, sunscreen, sunburn" size={28} at={K5.hats} /></g>,
		(x, y) => <g><PicH p={PL.melanoma} cx={x + 60} cy={y + 46} h={92} /><GTag x={x + 140} y={y + 22} text="melanoma rates" size={28} at={K5.rates} /></g>,
	], [undefined, K5.best], K5.decades);
	const stretch = smooth(prog(f, K5.decades, 40));
	const cols: [number, string, string, number, typeof PL.tv, number][] = [[230, 'months', 'process', K5.process, PL.tv, 170], [600, 'years', 'impact', K5.impact, PL.protect, 150], [1060, 'decades', 'outcome', K5.outcome, PL.melanoma, 230]];
	return (
		<Svg>
			<Title text="Three levels of evidence" />
			<Chip x={96} y={150} text="evidence: what we measure" size={34} color={AMBER_INK} ink={INK} />
			<Sx x={96} y={258} text="after a campaign starts" size={34} color={GREYT} hand at={ON} />
			<line x1={120} x2={1240} y1={600} y2={600} stroke={INK} strokeWidth={4} />
			<path d="M1222,588 L1244,600 L1222,612" fill="none" stroke={INK} strokeWidth={4} />
			{cols.map(([x, t, c, at, p, h]) => <g key={t}>
				<g opacity={vis(f, at - 6, undefined, 14)}><PicH p={p} cx={x} cy={600 - 20 - h / 2} h={h} /></g>
				<line x1={x} x2={x} y1={590} y2={610} stroke={INK} strokeWidth={4} />
				<Sx x={x} y={648} text={t} size={32} color={TEAL} anchor="middle" hand at={at} />
				<Sx x={x} y={694} text={c} size={42} color={BLUE} anchor="middle" hand at={at} />
			</g>)}
			{stretch > 0.01 ? <rect x={600} y={595} width={460 * stretch} height={10} rx={5} fill={TEAL} opacity={0.6} /> : null}
			<GTag x={1060} y={714} text="b07: latency" size={28} anchor="middle" at={K5.decades + 10} />
			<GTag x={96} y={742} text="on their own, they can't show it worked" size={28} at={K5.own} />
			<Sx x={96} y={838} text="early on, impact is the best evidence you can get" size={42} color={INK} hand at={K5.best} />
			<Ladder x={LAD.x} y={LAD.y} w={LAD.w} h={LAD.h} rungs={lad} />
			<CampaignFrame lit={[ON, ON, ON, K5.best]} items={cfItems({exp: ON, aud: ON, act: [ON, ON, ON, ON, ON], meas: ON, imp: K5.best + 10})} />
			{void AMBER}{void RED}{void EDGE}{void CARD}
		</Svg>
	);
};
