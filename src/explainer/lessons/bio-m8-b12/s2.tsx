// B8-12 scenes 6 to 10: HbA1c (glucose sticks to haemoglobin for a red cell's life, so it averages months; the meter
// grows from beside the strip and returns there, never into a slot), stepping up and the insulin twist (the jammed lock
// stays jammed) with complication care, DiRECT (practice clusters assigned by chance, 46 against 4 per cent), judging
// that evidence (two-year bar, the separate five-year card, who was studied), and GLP-1 based drugs judged on the same
// evidence frame. The evidence frame replaces the mechanism strip from scene 8.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SignalPulse} from '../m8-shared/parts';
import {Lab} from '../bio-m8-b08/s1';
import {
	AMBER, AMBER_INK, Arrow, BLUE, C_CARE, C_INS, C_LIFE, CARD, Calendar, Chip, Clusters, EDGE, EV, EV_HEADS, EV_WS, GREEN, GREYT, GTag, GroupBars, Hex, INK, INK_SOFT, KeyLock, Meter, Mistake, Pic, PicH, RED, RiskDial,
	SlotStrip, Svg, Sx, T, TEAL, Tag, TickLine, Title, lerp, meterX, pbPt, prog, smooth, vis,
} from './parts';
import type {P2, SItem, SSlot} from './parts';
import {ALL_ON, MechStrip, SMALL_METER, SideMeter} from './s1';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- shared: the evidence frame ----------
export type EvState = {lit?: (number | undefined)[]; items?: SItem[][]};
export const evSlots = (s: EvState): SSlot[] => EV_HEADS.map((h, i) => ({head: h, lit: s.lit?.[i], items: s.items?.[i] ?? []}));
export const EvFrame: React.FC<{s: EvState; o?: number; dy?: number}> = ({s, o = 1, dy = 0}) => (
	<SlotStrip x={EV.x} y={EV.y} ws={EV_WS} h={EV.h} gap={EV.gap} slots={evSlots(s)} size={30} headSize={30} o={o} dy={dy} />
);
export const EV_DIRECT = 'randomised by practice; about 300 adults; 1 year; remission';

// ---------- 6. HbA1c ----------
const K6 = K('hba1c', {one: 'One glucose', moment: 'that moment', sticks: 'sticks to', last: 'last about', hb: 'HbA1c test', share: 'the share', average: 'shows average', fake: 'One good', mon: 'Monitoring', evidence: 'the evidence', keeping: 'keeping', changing: 'changing', stepping: 'stepping up'});
const RBC = {cx: 760, cy: 400, w: 460};
/** Natural-pixel cell centres on the red-cell plate (five cells), radius about 230. */
const CELLS: P2[] = [[620, 620], [1380, 560], [1010, 1010], [620, 1390], [1420, 1440]];
const BIG = {x: 1180, y: 430, w: 620};
export const SceneHbA1c: React.FC = () => {
	const f = useCurrentFrame();
	const rp = pbPt(PL.rbc, RBC.cx, RBC.cy, RBC.w);
	const sp = pbPt(PL.reader, 230, 400, 200);
	const [sx, sy] = sp(FP.screen[0], FP.screen[1]);
	const n = f < K6.sticks ? 0 : Math.min(20, Math.floor((f - K6.sticks) / 10) + 1);
	const grow = smooth(prog(f, K6.hb, 26)) * (1 - smooth(prog(f, K6.mon + 10, 26)));
	const g = {x: lerp(SMALL_METER.x, BIG.x, grow), y: lerp(SMALL_METER.y, BIG.y, grow), w: lerp(SMALL_METER.w, BIG.w, grow)};
	const glow = vis(f, K6.fake, K6.mon, 12);
	return (
		<Svg>
			<Title text="HbA1c: is the plan working?" />
			<Pic p={PL.reader} cx={230} cy={400} w={200} />
			{glow > 0.01 ? <rect x={sx - 80} y={sy - 56} width={160} height={128} rx={14} fill={AMBER} opacity={0.35 * glow} /> : null}
			<Sx x={sx} y={sy + 12} text="5.8" size={52} color={INK} anchor="middle" weight={800} at={ON} />
			<Sx x={sx} y={sy + 46} text="mmol/L" size={26} color={INK} anchor="middle" weight={700} at={ON} />
			<Sx x={230} y={630} text="one moment" size={40} color={INK} anchor="middle" hand at={K6.one} />
			<Pic p={PL.rbc} cx={RBC.cx} cy={RBC.cy} w={RBC.w} />
			{Array.from({length: n}, (_, i) => {
				const c = CELLS[i % 5];
				const a = (i * 2.4) % (Math.PI * 2);
				const [x, y] = rp(c[0] + 210 * Math.cos(a), c[1] + 150 * Math.sin(a));
				const k = smooth(prog(f, K6.sticks + i * 10, 14));
				return <Hex key={i} x={x} y={lerp(y - 40, y, k)} r={10} o={k} />;
			})}
			<Sx x={RBC.cx} y={675} text="glucose attaches, and stays" size={40} color={AMBER_INK} anchor="middle" hand at={K6.sticks + 20} />
			<g opacity={vis(f, K6.last, undefined, 12)}>
				<rect x={560} y={704} width={400} height={20} rx={10} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
				<rect x={562} y={706} width={396 * smooth(prog(f, K6.last, 40))} height={16} rx={8} fill="#c8372d" opacity={0.75} />
				<Sx x={560} y={762} text="0 days" size={28} color={INK} weight={700} at={ON} />
				<Sx x={960} y={762} text="about 120 days" size={28} color={INK} anchor="end" weight={700} at={ON} />
				<Sx x={760} y={810} text="a red cell lasts about four months" size={34} color={INK} anchor="middle" hand at={ON} />
			</g>
			<T x={BIG.x} y={230} w={640} text="HbA1c: share of haemoglobin with glucose attached" size={40} color={INK} at={K6.share} />
			<Sx x={BIG.x} y={340} text="average over the past 2 to 3 months" size={36} color={TEAL} hand at={K6.average} out={K6.fake} />
			<Sx x={1500} y={340} text="months of high glucose" size={40} color={RED} anchor="middle" hand at={K6.fake} out={K6.mon + 6} />
			<GTag x={BIG.x} y={600} text="targets are set for each person" size={28} at={K6.hb + 30} out={K6.mon} />
			<rect x={1560} y={872} width={264} height={170} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} strokeDasharray="10 8" />
			<Sx x={SMALL_METER.x} y={906} text="HbA1c (%)" size={26} color={INK} weight={800} at={ON} opacity={1 - grow} />
			<Meter g={g} size={lerp(26, 30, grow)} bar={lerp(28, 44, grow)} band={grow > 0.5 ? 'typical target' : ''} valLabel={grow > 0.5} title={grow > 0.5} val={() => 8.1} />
			<Sx x={1692} y={1030} text="monitoring" size={28} color={TEAL} anchor="middle" hand weight={700} at={ON} opacity={1 - grow} />
			<Mistake x={BIG.x} y={640} text="HbA1c treats diabetes" size={40} at={K6.mon} cross={K6.mon + 24} note="it's evidence, not treatment" noteW={620} />
			<GTag x={BIG.x} y={792} text="keep" size={32} at={K6.keeping} />
			<GTag x={BIG.x + 110} y={792} text="change" size={32} at={K6.changing} />
			<GTag x={BIG.x + 250} y={792} text="step up" size={32} at={K6.stepping} />
			<MechStrip s={{lit: ALL_ON, l3: ON, l2: ON, m1: ON, m2: ON}} />
		</Svg>
	);
};

// ---------- 7. stepping up, and the insulin twist ----------
const K7 = K('step-up', {steps: 'steps up', another: 'another medicine', insulin: 'insulin', twist: 'the twist', replaces: 'replaces a', unjam: 'unjam', weight: 'add weight', worsens: 'worsens', care: 'Care also', bp: 'blood pressure', chol: 'cholesterol', checks: 'regular kidney', dont: "don't treat", prevent: 'prevent much'});
const MU7 = {cx: 1180, cy: 330, w: 440};
export const SceneStepUp: React.FC = () => {
	const f = useCurrentFrame();
	const mp = pbPt(PL.musIn, MU7.cx, MU7.cy, MU7.w);
	const R = FP.receptors.map(([u, v]) => mp(u, v));
	const flood = smooth(prog(f, K7.replaces, 20));
	const mix = 0.3 + 0.3 * flood;
	const fat = smooth(prog(f, K7.weight, 40));
	const A = 1 - prog(f, K7.care - 10, 14);
	const B = prog(f, K7.care, 14);
	const steps: [string, number, number][] = [['lifestyle + metformin', ON, 0], ['add another medicine', K7.another, 1], ['insulin', K7.insulin, 2]];
	return (
		<Svg>
			<Title text="Stepping up, and the insulin twist" />
			<Lab x={96} y={222} t="escalation: the plan steps up" at={K7.steps} size={44} w={800} />
			{steps.map(([t, at, i]) => {
				const L = prog(f, at, 14);
				const x = 96 + i * 70, y = 600 - i * 110;
				return <g key={t}>
					<rect x={x} y={y} width={380} height={66} rx={12} fill={L > 0.5 ? '#eaf3ec' : CARD} stroke={L > 0.5 ? C_LIFE : INK_SOFT} strokeWidth={L > 0.5 ? 4 : 3} />
					<Sx x={x + 20} y={y + 45} text={t} size={34} color={L > 0.5 ? INK : GREYT} hand weight={700} at={ON} />
				</g>;
			})}
			<GTag x={96} y={700} text="for example SGLT2 inhibitors or GLP-1 drugs" size={28} at={K7.another + 20} />
			<g opacity={vis(f, K7.insulin - 4, undefined, 14)}><Pic p={PL.pen} cx={790} cy={412} w={300} /></g>
			{A > 0.01 ? <g opacity={A}>
				<Pic p={PL.musIn} cx={MU7.cx} cy={MU7.cy} w={MU7.w} />
				<g opacity={mix}><Pic p={PL.musMem} cx={MU7.cx} cy={MU7.cy} w={MU7.w} /></g>
				{flood > 0.01 ? Array.from({length: 9}, (_, i) => { const [x, y] = R[i % 3]; return <circle key={i} cx={x + ((i % 3) - 1) * 14 + (Math.floor(i / 3) - 1) * 26} cy={lerp(y - 90, y - 24 - Math.floor(i / 3) * 16, flood)} r={10} fill={TEAL} stroke="#fffdf8" strokeWidth={2} opacity={flood} />; }) : null}
				<Sx x={MU7.cx} y={530} text="replaces the signal" size={38} color={TEAL} anchor="middle" hand at={K7.replaces} />
				<KeyLock x={1660} y={330} s={0.8} mode="jam" at={K7.twist} jamAt={K7.twist} />
				<Sx x={1610} y={236} text="manages the consequence" size={38} color={AMBER_INK} anchor="middle" hand at={K7.unjam} />
				<g opacity={vis(f, K7.weight - 4, undefined, 12)}>
					<Pic p={PL.liver} cx={1180} cy={680} w={250} />
					<ellipse cx={1172} cy={672} rx={lerp(50, 105, fat)} ry={lerp(28, 52, fat)} fill="#f2dc84" opacity={0.55} />
					<Sx x={1180} y={812} text="can add weight" size={34} color={INK} anchor="middle" hand at={K7.weight} />
				</g>
				<Arrow a={[1320, 650]} b={[1580, 430]} at={K7.worsens} color={RED} width={5} bow={0.2} />
				<Sx x={1420} y={760} text="can worsen resistance" size={36} color={RED} hand at={K7.worsens} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<Chip x={980} y={180} text="complication care" size={36} color={C_CARE} fill={C_CARE} ink={CARD} />
				{([['eyes', 1070, PL.eye], ['kidneys', 1380, PL.kidney], ['heart', 1690, PL.heart]] as [string, number, typeof PL.eye][]).map(([t, x, p]) => <g key={t}><PicH p={p} cx={x} cy={385} h={200} /></g>)}
				<GTag x={980} y={520} text="blood pressure" size={30} at={K7.bp} />
				<GTag x={1220} y={520} text="cholesterol" size={30} at={K7.chol} />
				<GTag x={1420} y={520} text="kidney, eye and foot checks" size={30} at={K7.checks} />
				<Lab x={980} y={650} t="they don't treat the diabetes," at={K7.dont} size={42} w={840} />
				<Lab x={980} y={710} t="but they prevent much of its harm" at={K7.prevent} size={42} w={840} color={C_CARE} />
			</g> : null}
			<MechStrip s={{lit: ALL_ON, l3: ON, l2: ON, m1: ON, m2: ON, i2: K7.insulin + 6, c4: K7.care + 10, from: {i: [790, 412], c: [1100, 205]}}} pulseAt={undefined} />
			<SideMeter val={() => 8.1} />
			{void C_INS}{void BLUE}
		</Svg>
	);
};

// ---------- 8. DiRECT ----------
const K8 = K('direct-trial', {strong: 'How strong', direct: 'Take DiRECT', gp: 'GP practices', rand: 'randomly assigned', one: 'In one', diag: 'diagnosed in', low: 'low-energy diet', then: 'then support', other: 'Other practices', after: 'After a', f46: '46', remission: 'in remission', against: 'against 4'});
export const gridFrom = (i: number): P2 => [140 + (i % 10) * 90, 270 + Math.floor(i / 10) * 64];
export const grpTo = (_i: number, grp: number, k: number): P2 => [(grp === 0 ? 150 : 610) + (k % 5) * 84, 300 + Math.floor(k / 5) * 60];
export const SceneDirect: React.FC = () => {
	const f = useCurrentFrame();
	const swap = smooth(prog(f, 4, 26));
	return (
		<Svg>
			<Title text="A named trial: DiRECT" />
			<GTag x={1824} y={140} text="DiRECT trial, UK, 2014 to 2017 (Lean et al. 2018)" size={28} anchor="end" at={K8.direct} />
			<Clusters from={gridFrom} to={grpTo} at={K8.rand} tintAt={K8.one} />
			<Sx x={340} y={700} text="diet and support" size={40} color={C_LIFE} anchor="middle" hand at={K8.rand + 40} />
			<Sx x={800} y={700} text="usual care" size={40} color={GREYT} anchor="middle" hand at={K8.rand + 40} />
			<g opacity={vis(f, K8.low - 6, undefined, 14)}><PicH p={PL.bowl} cx={340} cy={210} h={90} /></g>
			<Sx x={96} y={762} text="about 3 months: low-energy diet" size={34} color={INK} hand at={K8.low} />
			<Arrow a={[560, 750]} b={[612, 750]} at={K8.then} color={INK_SOFT} width={4} />
			<Sx x={630} y={762} text="then: food back in, support" size={34} color={INK} hand at={K8.then} />
			<GTag x={96} y={790} text="b11: chance decides the groups; whole practices assigned" size={28} at={K8.rand + 20} />
			<T x={1120} y={232} w={700} text="remission: glucose below the diabetes threshold without glucose-lowering medicines" size={38} color={TEAL} at={K8.remission} />
			<GroupBars g={{x: 1200, y: 380, w: 560, h: 300}} bars={[{lab: 'diet and support', v: 46, color: C_LIFE, at: K8.f46}, {lab: 'usual care', v: 4, color: '#a8a092', at: K8.against}]} vsize={44} />
			<Sx x={1480} y={800} text="in remission at 12 months" size={38} color={INK} anchor="middle" hand at={K8.after} />
			<MechStrip s={{lit: ALL_ON, l3: ON, l2: ON, m1: ON, m2: ON, i2: ON, c4: ON}} o={1 - swap} dy={swap * 220} />
			<EvFrame s={{lit: [undefined, K8.against + 20], items: [[], [{t: EV_DIRECT, at: K8.against + 30}]]}} o={swap} dy={(1 - swap) * 220} />
		</Svg>
	);
};

// ---------- 9. judging the evidence ----------
const K9 = K('judge-evidence', {judge: 'Now judge', rand: 'randomised and', large: 'gap was', strong: 'strong evidence', faded: 'remission faded', back: 'came back', among: 'Among 85', eleven: '11 were', recently: 'recently diagnosed', apply: 'not apply', everyday: 'Everyday results'});
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Judging the evidence" />
			<GroupBars g={{x: 180, y: 250, w: 480, h: 280}} bars={[{lab: 'diet|year 1', v: 46, color: C_LIFE, at: ON}, {lab: 'usual care|year 1', v: 4, color: '#a8a092', at: ON}, {lab: 'diet|year 2', v: 36, color: '#7fb08f', at: K9.faded}]} vsize={38} slots={3} />
			<GTag x={180} y={630} text="DiRECT: Lean et al. 2018, 2019" size={28} at={K9.faded + 10} />
			<Arrow a={[700, 500]} b={[700, 330]} at={K9.back} color={AMBER_INK} width={6} />
			<Sx x={700} y={300} text="weight came back" size={30} color={AMBER_INK} anchor="middle" hand at={K9.back} />
			<g opacity={vis(f, K9.among, undefined, 14)}>
				<rect x={880} y={230} width={420} height={190} rx={18} fill={CARD} stroke={TEAL} strokeWidth={4} />
				<Sx x={904} y={286} text="5-year extension:" size={36} color={INK} hand at={ON} />
				<Sx x={904} y={376} text="11 of 85, 13%" size={56} color={TEAL} weight={800} at={K9.eleven} />
			</g>
			<Tag x={880} y={440} w={420} text="a different, smaller group; Lean et al. 2024" size={28} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K9.eleven + 10} />
			<Mistake x={880} y={600} text="remission means cured" size={38} at={K9.faded + 20} cross={K9.back + 10} note="the tendency remains" noteW={440} />
			<Sx x={1390} y={215} text="who was studied" size={38} color={INK} hand at={K9.recently} />
			<Clusters n={24} from={i => [1430 + (i % 6) * 66, 270 + Math.floor(i / 6) * 48]} s={0.7} tintAt={K9.recently} o={vis(f, K9.recently - 4, undefined, 14)} />
			<GTag x={1390} y={470} text="diagnosed within 6 years" size={30} at={K9.recently + 10} />
			<GTag x={1390} y={530} text="not on insulin" size={30} at={K9.recently + 30} />
			<Sx x={1390} y={636} text="may not apply more widely" size={36} color={AMBER_INK} hand at={K9.apply} />
			<GTag x={1390} y={672} text="trial support is hard to match" size={28} at={K9.everyday + 10} />
			<Sx x={180} y={760} text="randomised, large gap: strong evidence" size={42} color={BLUE} hand at={K9.strong} out={K9.faded + 10} />
			<Sx x={180} y={760} text="but remission faded as weight returned" size={42} color={AMBER_INK} hand at={K9.faded + 20} />
			<EvFrame s={{lit: [K9.strong, ON, K9.among, K9.everyday], items: [[{t: 'acts on the cause: less fat, better response', at: K9.strong + 10}], [{t: EV_DIRECT, at: ON}], [{t: 'fades if weight returns', at: K9.among + 10}], [{t: 'needs support, time, food access', at: K9.everyday + 10}]]}} />
		</Svg>
	);
};

// ---------- 10. a future direction: GLP-1 based drugs ----------
const K10 = K('future-direction', {future: 'future research', one: 'One active', gut: 'gut hormone', glp: 'called GLP-1', release: 'release insulin', only: 'only when', slow: 'slow the', appetite: 'reduce appetite', eat: 'eat less', large: 'Large trials', lowerH: 'lower HbA1c', wl: 'weight loss', fewer: 'fewer heart', against: 'Against that', injected: 'are injected', costly: 'often costly', nausea: 'cause nausea', ret: 'tends to'});
const GUT = {cx: 300, cy: 420, w: 360};
export const SceneFuture: React.FC = () => {
	const f = useCurrentFrame();
	const gp = pbPt(PL.gut, GUT.cx, GUT.cy, GUT.w);
	const lev = 0.5 + 0.32 * Math.sin(f / 26);
	const hi = f >= K10.only && lev > 0.62 ? 1 : 0;
	const period = lerp(40, 120, smooth(prog(f, K10.slow, 30)));
	const a = gp(FP.gutBody[0], FP.gutBody[1]), b = gp(FP.gutOut[0], FP.gutOut[1]);
	const app = 0.78 - 0.5 * smooth(prog(f, K10.appetite, 40));
	return (
		<Svg>
			<Title text="A future direction: GLP-1 based drugs" />
			<Chip x={1824} y={128} text="future direction" size={32} color={BLUE} ink={BLUE} anchor="end" at={K10.future} />
			<Pic p={PL.gut} cx={GUT.cx} cy={GUT.cy} w={GUT.w} />
			{f >= 0 ? Array.from({length: 4}, (_, i) => { const u = ((f / period + i / 4) % 1); return <circle key={i} cx={lerp(a[0], b[0], u)} cy={lerp(a[1], b[1], u) - 30 * Math.sin(u * Math.PI)} r={9} fill="#9a6b3c" stroke="#fffdf8" strokeWidth={2} opacity={Math.sin(u * Math.PI)} />; }) : null}
			<T x={GUT.cx} y={672} w={460} text="GLP-1: a gut hormone released after eating" size={36} color={TEAL} anchor="middle" at={K10.gut} />
			<SignalPulse a={gp(FP.gutWall[0], FP.gutWall[1])} b={[700, 380]} at={K10.glp} every={18} dur={40} bow={-40} color={TEAL} r={9} />
			{hi ? <circle cx={790} cy={360} r={150} fill={AMBER} opacity={0.22} /> : null}
			<Pic p={PL.islet} cx={790} cy={360} w={300} />
			<g>
				<Sx x={1010} y={232} text="glucose" size={28} color={INK} anchor="middle" weight={700} at={ON} />
				<rect x={990} y={250} width={40} height={230} rx={10} fill={CARD} stroke={INK} strokeWidth={3} />
				<rect x={993} y={250 + 230 * (1 - 0.62)} width={34} height={230 * (0.62 - 0.35)} fill={GREEN} opacity={0.3} />
				<rect x={996} y={250 + 230 * (1 - lev)} width={28} height={230 * lev - 3} rx={8} fill={lev > 0.62 ? RED : AMBER} opacity={0.85} />
			</g>
			<Sx x={840} y={560} text="insulin only when glucose is high" size={38} color={TEAL} anchor="middle" hand at={K10.only} />
			<Sx x={300} y={790} text="slower stomach emptying" size={34} color={INK} anchor="middle" hand at={K10.slow} />
			<RiskDial cx={800} cy={760} r={70} val={() => app} title="appetite" size={30} at={K10.appetite - 6} />
			<Sx x={920} y={790} text="less eaten, weight loss" size={34} color={INK} hand at={K10.eat} />
			<Sx x={1250} y={222} text="what do large trials show?" size={32} color={GREYT} hand at={ON} out={K10.large + 10} />
			{([[260, 'lower HbA1c?', K10.lowerH], [320, 'weight loss?', K10.wl], [380, 'fewer heart attacks and strokes?', K10.fewer]] as [number, string, number][]).map(([y, t, c]) => <Sx key={t} x={1294} y={y} text={t} size={38} color={GREYT} hand at={ON} out={c} />)}
			<TickLine x={1250} y={260} text="lower HbA1c" at={K10.lowerH} size={38} />
			<TickLine x={1250} y={320} text="weight loss" at={K10.wl} size={38} />
			<TickLine x={1250} y={380} text="fewer heart attacks and strokes" at={K10.fewer} size={38} />
			<Sx x={1294} y={420} text="(some drugs, high-risk people)" size={30} color={INK} hand at={K10.fewer + 10} />
			<GTag x={1250} y={440} text="LEADER 2016, SUSTAIN-6 2016" size={28} at={K10.fewer + 20} />
			<Calendar x={1250} y={530} at={K10.injected} cell={50} />
			<Sx x={1250} y={680} text="many: a weekly injection" size={36} color={INK} hand at={K10.injected + 10} />
			<GTag x={1250} y={700} text="one is a daily tablet" size={26} at={K10.injected + 30} />
			<GTag x={1250} y={756} text="cost and supply" size={30} at={K10.costly} />
			<GTag x={1500} y={756} text="nausea" size={30} at={K10.nausea} />
			<EvFrame s={{lit: [K10.eat, K10.fewer + 20, K10.ret, K10.costly], items: [[{t: 'more insulin when needed; less eaten; weight loss', at: K10.eat + 10}], [{t: 'large randomised trials; years; heart outcomes', at: K10.fewer + 30}], [{t: 'weight returns if stopped', at: K10.ret + 10}], [{t: 'many injected; costly; nausea', at: K10.nausea + 10}]]}} />
			{void AMBER_INK}{void C_INS}{void EDGE}{void meterX}{void Hex}
		</Svg>
	);
};
