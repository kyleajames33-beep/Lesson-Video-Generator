// B8-13 scenes 6 to 9: impact evidence (summer surveys 1987 to 2017 as a shape-only line graph; more advertising, less
// sunburn, like a dose-response), outcome evidence and latency (under 40 falling, 60 and over still rising), how sure we
// can be (secondary sources, no randomised comparison, self-report, confounders: a package), and equity with an
// improvement (dot rows by group; the average hides the gap; reach them where they are, measure them separately).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, C_LIFE, CARD, CampaignFrame, EDGE, GREEN, GREYT, GTag, GroupBars, INK, INK_SOFT, LAD, LADC, Ladder, LineG, Mistake, Pic, PicH, RED, RUNGS, ShareRow, Svg, Sx, T, TEAL, Tag, Title, prog, vis,
} from './parts';
import {cfItems} from './s1';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
const CF_ALL = cfItems({exp: ON, aud: ON, act: [ON, ON, ON, ON, ON], imp: ON});

// ---------- 6. impact evidence ----------
const K6 = K('impact-evidence', {surveys: 'Summer surveys', more: 'more people', hats: 'wearing hats', fewer: 'fewer getting', another: 'Another analysis', tv: 'TV advertising', less: 'less common', dose: 'dose-response', points: 'points to', fashion: 'in fashion'});
const G6 = {x: 430, y: 220, w: 810, h: 290, x0: 1987, x1: 2017};
export const SceneImpact: React.FC = () => {
	const f = useCurrentFrame();
	const lad = RUNGS([ON, ON, undefined], [undefined, (x, y) => <GTag x={x} y={y + 10} text="hats, sunscreen, sunburn" size={28} />], [undefined, 4]);
	const legend: [string, string, number, number][] = [['used sunscreen', TEAL, K6.more, 430], ['wore a hat', BLUE, K6.hats, 700], ['sunburnt on a weekend', RED, K6.fewer, 920]];
	return (
		<Svg>
			<Title text="Impact evidence: what people did" />
			<Pic p={PL.clip} cx={190} cy={270} w={160} />
			<Tag x={96} y={390} w={300} text="summer surveys, Melbourne, 1987 to 2017" size={28} color={BLUE} ink={INK} at={K6.surveys} />
			<GTag x={96} y={490} text="Tabbakh et al. 2019" size={26} at={K6.surveys + 20} />
			<LineG g={G6} ticks={[1987, 1997, 2007, 2017]} yTitle="per cent of adults (shape only)" series={[
				{pts: [[1987, 0.3], [1997, 0.45], [2007, 0.56], [2017, 0.64]], at: K6.more, color: TEAL},
				{pts: [[1987, 0.16], [1997, 0.25], [2007, 0.33], [2017, 0.4]], at: K6.hats, color: BLUE},
				{pts: [[1987, 0.62], [1997, 0.47], [2007, 0.36], [2017, 0.28]], at: K6.fewer, color: RED, dash: '14 8'},
			]} />
			{legend.map(([t, c, at, x]) => <g key={t} opacity={prog(f, at, 12)}><line x1={x} x2={x + 40} y1={580} y2={580} stroke={c} strokeWidth={6} strokeDasharray={c === RED ? '12 6' : undefined} /><Sx x={x + 50} y={590} text={t} size={30} color={INK} hand at={ON} /></g>)}
			<g opacity={vis(f, K6.another - 6, undefined, 14)}><PicH p={PL.tv} cx={230} cy={720} h={150} /></g>
			<Sx x={440} y={636} text="sunburn" size={28} color={INK} weight={800} at={K6.tv} />
			<GroupBars g={{x: 470, y: 650, w: 340, h: 120}} max={1} ticks={[]} showVal={false} bars={[{lab: 'less advertising', v: 0.8, color: RED, at: K6.tv}, {lab: 'more advertising', v: 0.45, color: '#e5a39a', at: K6.less}]} size={26} />
			<GTag x={860} y={640} text="Dobbinson et al. 2008, shape only" size={26} at={K6.tv + 10} />
			<GTag x={860} y={700} text="b11: dose-response" size={28} at={K6.dose} />
			<Sx x={860} y={790} text="more campaign, more protection" size={34} color={C_LIFE} hand at={K6.dose + 10} />
			<GTag x={860} y={812} text="fashion changed anyway?" size={26} at={K6.fashion} />
			<Ladder x={LAD.x} y={LAD.y} w={LAD.w} h={LAD.h} rungs={lad} />
			<CampaignFrame lit={[ON, ON, ON, ON]} items={CF_ALL} />
			{void AMBER}{void GREEN}{void T}{void INK_SOFT}{void CARD}{void EDGE}{void GREYT}
		</Svg>
	);
};

// ---------- 7. outcome evidence, and latency ----------
const K7 = K('outcome-evidence', {now: 'Now outcomes', qld: 'In Queensland', under: 'under forty', fell: 'fell between', national: 'national rates', since: 'since the', rates: 'These are', older: 'In older', rising: 'kept rising', latency: 'fits latency', built: 'built up', grew: 'grew up', pattern: 'the pattern'});
export const G7 = {x: 220, y: 240, w: 980, h: 400, x0: 1985, x1: 2020};
export const UNDER40: [number, number][] = [[1995, 0.42], [2000, 0.38], [2005, 0.33], [2010, 0.29], [2014, 0.26]];
export const OVER60: [number, number][] = [[1985, 0.45], [1995, 0.6], [2005, 0.75], [2015, 0.88]];
export const SceneOutcome: React.FC = () => {
	const f = useCurrentFrame();
	const lad = RUNGS([ON, ON, K7.now], [undefined, undefined, (x, y) => <GTag x={x} y={y + 10} text="melanoma rates by age" size={28} />], [undefined, undefined, K7.pattern]);
	return (
		<Svg>
			<Title text="Outcome evidence, and latency" />
			<LineG g={G7} ticks={[1985, 1995, 2005, 2015]} yTitle="new melanoma cases per 100,000 per year (shape only)" series={[
				{pts: UNDER40, at: K7.fell, color: TEAL, label: 'under 40, invasive melanoma', labelAt: [480, 600]},
				{pts: OVER60, at: K7.rising, color: RED, label: '60 and over: still rising', labelAt: [690, 300], anchor: 'end'},
			]} />
			<GTag x={220} y={712} text="b10: rates, not counts; age-standardised" size={28} at={K7.rates} />
			<GTag x={220} y={764} text="Aitken et al. 2018, Queensland, 1995 to 2014" size={28} at={K7.qld} />
			<GTag x={220} y={816} text="national: AIHW, falling since the late 1990s" size={28} at={K7.since} />
			<Sx x={820} y={730} text="older: UV damage built up before 1981" size={32} color={RED} hand at={K7.built} />
			<g opacity={vis(f, K7.grew - 6, undefined, 14)}><PicH p={PL.protect} cx={870} cy={800} h={80} /></g>
			<Sx x={950} y={812} text="younger: grew up SunSmart" size={32} color={TEAL} hand at={K7.grew} />
			<Ladder x={LAD.x} y={LAD.y} w={LAD.w} h={LAD.h} rungs={lad} />
			<CampaignFrame lit={[ON, ON, ON, ON]} items={CF_ALL} />
		</Svg>
	);
};

// ---------- 8. how sure can we be? ----------
const K8 = K('how-sure', {secondary: 'secondary sources', who: 'who produced', when: 'when', real: 'real data', agree: 'sources agree', health: 'health agencies', nocontrol: 'no randomised', self: 'self-reported', other: 'other exposures', strong: 'evidence is', package: 'a package'});
const BLOB: [number, number][] = (() => {
	const out: [number, number][] = [];
	for (let y = -90; y <= 90; y += 22) for (let x = -130; x <= 130; x += 22) { const r = (x / 130) ** 2 + (y / 90) ** 2 + 0.15 * Math.sin(x / 30 + y / 25); if (r < 1) out.push([x, y]); }
	return out;
})();
export const SceneHowSure: React.FC = () => {
	const f = useCurrentFrame();
	const lad = RUNGS([ON, ON, ON]);
	const checks: [string, number][] = [['who produced it?', K8.who], ['when?', K8.when], ['real data?', K8.real], ['do others agree?', K8.agree]];
	const tick = prog(f, K8.health + 10, 12);
	return (
		<Svg>
			<Title text="How sure can we be?" />
			<Sx x={96} y={230} text="secondary source: data someone else collected" size={44} color={INK} hand at={K8.secondary} />
			{checks.map(([t, at], i) => <g key={t}>
				<Sx x={140} y={330 + i * 60} text={t} size={36} color={INK} hand at={at} />
				{tick > 0.01 ? <path opacity={tick} d={`M${96},${318 + i * 60} l10,12 l20,-26`} fill="none" stroke={GREEN} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
			</g>)}
			<GTag x={520} y={300} text="AIHW" size={28} at={K8.health} />
			<GTag x={520} y={360} text="Cancer Council" size={28} at={K8.health + 8} />
			<GTag x={520} y={420} text="peer-reviewed journals" size={28} at={K8.health + 16} />
			<g opacity={vis(f, K8.nocontrol - 6, undefined, 14)}>
				{BLOB.map(([x, y], i) => <circle key={i} cx={1000 + x} cy={410 + y} r={7} fill={TEAL} opacity={0.75} />)}
				<Sx x={1000} y={540} text="one national trend" size={30} color={INK} anchor="middle" hand at={ON} />
				<rect x={1160} y={330} width={300} height={170} rx={16} fill={CARD} stroke={GREYT} strokeWidth={3} strokeDasharray="12 9" />
				<T x={1180} y={384} w={270} text="no randomised comparison here" size={32} color={GREYT} />
				<GTag x={1160} y={516} text="b11: control group" size={28} />
			</g>
			<g opacity={vis(f, K8.self - 6, undefined, 14)}><PicH p={PL.clip} cx={160} cy={650} h={110} /></g>
			<GTag x={230} y={626} text="people over-report sun protection" size={28} at={K8.self} />
			<Sx x={720} y={612} text="possible confounders" size={32} color={INK} hand at={K8.other} />
			<GTag x={720} y={636} text="better sunscreens" size={28} at={K8.other + 6} />
			<GTag x={986} y={636} text="cheaper sunscreen" size={28} at={K8.other + 12} />
			<GTag x={1254} y={636} text="fashion" size={28} at={K8.other + 18} />
			<Mistake x={96} y={740} text="rates fell, so the ads did it" size={38} at={K8.strong} cross={K8.package} note="a package, not the ads alone" noteW={600} />
			<Sx x={720} y={792} text="strong evidence, for a package" size={42} color={BLUE} hand at={K8.strong + 10} />
			<Ladder x={LADC.x} y={LADC.y} w={LADC.w} h={LADC.h} rungs={lad} compact />
			<CampaignFrame lit={[ON, ON, ON, ON]} items={CF_ALL} />
			{void AMBER_INK}{void RED}{void EDGE}{void Pic}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 9. equity, and an improvement ----------
const K9 = K('equity-improve', {eq: 'means equity', avg: 'lift the', missing: 'missing them', teens: 'Teenagers and', outdoor: 'outdoor workers', improve: 'An improvement', reach: 'reach them', shade: 'with shade', cost: 'so cost', measured: 'measured separately'});
const ROWS: [string, number][] = [['children', 2], ['teens and young adults', 6], ['adults', 3], ['outdoor workers', 5]];
export const SceneEquity: React.FC = () => {
	const f = useCurrentFrame();
	const lad = RUNGS([ON, ON, ON]);
	const avg = prog(f, K9.avg, 14);
	const meas = prog(f, K9.measured + 10, 14);
	return (
		<Svg>
			<Title text="Equity, and an improvement" />
			<Sx x={96} y={222} text="equity: does the benefit reach the highest-risk people?" size={42} color={INK} hand at={K9.eq} />
			<Sx x={476} y={282} text="sunburnt last summer (shape only)" size={28} color={GREYT} hand at={ON} />
			{ROWS.map(([t, n], i) => <ShareRow key={t} x={96} y={330 + i * 78} label={t} n={n} lw={380} d={44} color={AMBER_INK} pu={i === 1 ? K9.teens : i === 3 ? K9.outdoor : undefined} />)}
			{avg > 0.01 ? <g opacity={avg}>
				<line x1={476 + 3.5 * 44} x2={476 + 3.5 * 44} y1={300} y2={590} stroke={BLUE} strokeWidth={4} strokeDasharray="10 7" />
				<Sx x={476} y={644} text="the average hides the gap" size={34} color={BLUE} hand at={ON} />
			</g> : null}
			{meas > 0.01 ? ROWS.map(([t, n], i) => <rect key={t} x={905} y={318 + i * 78} width={n * 18} height={24} rx={6} fill={AMBER_INK} opacity={meas} />) : null}
			<g opacity={vis(f, K9.shade - 6, undefined, 14)}><PicH p={PL.sail} cx={1220} cy={330} h={150} /></g>
			<g opacity={vis(f, K9.outdoor - 6, undefined, 14)}><PicH p={PL.work} cx={1200} cy={570} h={110} /></g>
			<GTag x={905} y={640} text="free, not just recommended" size={28} at={K9.cost} />
			<T x={96} y={750} w={1380} text="reach them where they are: shade, shirts and hats at work and sport" size={40} color={C_LIFE} at={K9.reach} />
			<Ladder x={LADC.x} y={LADC.y} w={LADC.w} h={LADC.h} rungs={lad} compact />
			<CampaignFrame lit={[ON, K9.reach, K9.shade, K9.measured]} items={cfItems({exp: ON, aud: ON, audOut: K9.reach, act: [ON, ON, ON, ON, ON], actOut: K9.shade, imp: ON, impOut: K9.measured}).map((col, i) =>
				i === 1 ? [...col, {t: 'teens, young adults, outdoor workers', at: K9.reach + 12}] : i === 2 ? [...col, {t: 'shade, shirts, hats at work and sport', at: K9.shade + 12}] : i === 3 ? [...col, {t: 'sunburn by group', at: K9.measured + 12}] : col)} />
			{void AMBER}{void RED}{void EDGE}{void CARD}{void Pic}{void Tag}{void Mistake}{void INK_SOFT}{void GroupBars}{void LineG}
		</Svg>
	);
};
