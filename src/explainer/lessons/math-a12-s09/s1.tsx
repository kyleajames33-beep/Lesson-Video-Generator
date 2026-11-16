// Scenes 1 to 5: s08's 1,000 bags (roughly mirror images), five more bags filling chip by chip; the peg board (1 path to
// the edge, 924 to the middle); the normal curve over the bars; what the shape means (fold, median, mode, tails); the
// notation X ∼ N(μ, σ²) with μ and σ moving the bell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {BagFill, ClassHistogram, FrameSvg, LiveReadoutBoard, NormalCurve, PegBoard, SceneHeading, StudioPlot, bagFillAt, fnPath, kf, makePlot, normPdf, paceCount, regionPath, smooth} from '../../math/studio';
import type {StudioPace} from '../../math/studio';
import {HIST, HM} from '../math-a12-s08/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER_FILL, AnswerBox, bellFill, BAG_COUNTS, BAG_EDGES, BLUE, BROWN, BoxCard, CHIP_BAG, Chip, FIVE, GREY, Hand, INK, MU, PEG_RUN, POTATO, PegPaths, Plate, Q, Row, S08FinalFrame, SCALES, SIG, Slip, TEAL, Task, VIO, pegBinX, ticks} from './parts';

const RED = '#b8322a';
// ---------- 1. hook: why a bell? ----------
const H1 = {x: 980, y: 300, w: 900, h: 480} as const;
const M1 = makePlot(H1.x, H1.y, H1.w, H1.h, {x: [161, 189], y: [0, 220]});
const FILL = {every: 75, fill: 60} as const;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.fill - 6, 20);
	const glow = prog(fr, k.most + 20, 12) * (1 - prog(fr, k.images, 12));
	const ends = prog(fr, k.most + 80, 12) * (1 - prog(fr, k.images, 12));
	const mirror = prog(fr, k.images, 12) * (1 - prog(fr, k.fill - 10, 10));
	const st = bagFillAt(FIVE, 90, k.fill + 20, FILL.every, FILL.fill, fr);
	const bar = (j: number, o: number, color: string) => {const [x0, ty] = HM.pf(BAG_EDGES[j], BAG_COUNTS[j]), [x1, by] = HM.pf(BAG_EDGES[j + 1], 0); return <rect key={j} x={x0 + 3} y={ty + 3} width={x1 - x0 - 6} height={by - ty - 6} fill="none" stroke={color} strokeWidth={6} opacity={o} />;};
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.fill - 6, 10)}}>
				<S08FinalFrame />
				<FrameSvg>
					{[6, 7, 8].map(j => bar(j, glow, MATH_AMBER))}
					{[0, 13].map(j => bar(j, ends * (0.6 + 0.4 * Math.sin(fr / 4)), MATH_AMBER))}
					{mirror > 0.01 ? (() => {const [px, top] = HM.pf(175, 215), [, b] = HM.pf(175, 0); return <g opacity={mirror}>
						<line x1={px} x2={px} y1={top} y2={b} stroke={VIO.stroke} strokeWidth={5} />
						{BAG_COUNTS.slice(0, 7).map((c, j) => {const [x0, ty] = HM.pf(175 + (175 - BAG_EDGES[j + 1]), c), [x1, by] = HM.pf(175 + (175 - BAG_EDGES[j]), 0); return <rect key={j} x={x0} y={ty} width={x1 - x0} height={by - ty} fill="none" stroke={VIO.stroke} strokeWidth={3} strokeDasharray="8 6" />;})}
					</g>;})() : null}
				</FrameSvg>
				<Hand x={1300} y={738} at={k.machine} size={28} color={GREY} w={560}>drawn from a bell-shaped model</Hand>
				<Hand x={HM.pf(176, 0)[0] + 40} y={HM.pf(0, 180)[1]} at={k.images} out={k.fill - 10} size={40} color={VIO.ink}>roughly mirror images</Hand>
			</div> : null}
			<SceneHeading text="When is a normal model useful?" at={k.fill} size={48} />
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.fill + 4, 14)}}>
				<ClassHistogram x={H1.x} y={H1.y} width={H1.w} height={H1.h} edges={BAG_EDGES} counts={BAG_COUNTS} yMax={220} xTicks={[165, 170, 175, 180, 185]} yTicks={[100, 200]} xLabel="mass (g)" yLabel="number of bags" countLabels={false} at={-300} />
				<FrameSvg>{FIVE.slice(0, st.completed).map((m, i) => {
					const j = Math.floor((m - 161) / 2), [x0, ty] = M1.pf(BAG_EDGES[j], BAG_COUNTS[j]), [x1] = M1.pf(BAG_EDGES[j + 1], 0);
					const stack = FIVE.slice(0, i).filter(v => Math.floor((v - 161) / 2) === j).length;
					return <rect key={i} x={x0 + 4} y={ty - 22 - stack * 24} width={x1 - x0 - 8} height={20} rx={4} fill={BLUE.ink} stroke="#fffdf8" strokeWidth={2} />;
				})}</FrameSvg>
				<Hand x={1300} y={240} at={k.fill + 20 + FILL.fill} size={32} color={GREY} w={560}>these 5: built from 90 chip masses</Hand>
				<Hand x={1300} y={880} at={k.fill + 20} size={30} color={GREY} w={560}>simulated: 1,000 bags (drawn from a bell-shaped model)</Hand>
				<BagFill masses={FIVE} chipsPerBag={90} startAt={k.fill + 20} every={FILL.every} fillFrames={FILL.fill} bag={{x: 150, y: 370, w: 300, plate: CHIP_BAG}} mouth={[300, 430]} chip={{plate: POTATO, w: 46}}
					scale={{x: 520, y: 360, width: 380, plate: {plate: SCALES, x: 60, y: 724, w: 480}}} at={k.fill} />
				<Hand x={570} y={720} at={k.each + 30} size={42} color={INK} w={380}>90 small nudges</Hand>
				<Chip x={1560} y={150} at={k.us} size={40} color={BROWN}>Why a bell?</Chip>
			</div> : null}
		</>
	);
};
const MATH_AMBER = '#d18f1f';

// ---------- 2. many small nudges ----------
const PB = {x: 260, y: 170, w: 1000, h: 760} as const;
const ALL_LEFT = [new Array(12).fill(0)];
const ONE_RIGHT = Array.from({length: 12}, (_, r) => Array.from({length: 12}, (_, s) => (s === r ? 1 : 0)));
const SIX_SIX = [[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1], [0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0]];
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const pace: StudioPace = {at: k.pegs, slow: 6, every: 30, until: k.so + 90};
	const bx = (b: number) => pegBinX(PB.x, PB.w, 12, b);
	return (
		<>
			<SceneHeading text="Many small nudges" at={4} size={48} />
			<Plate plate={CHIP_BAG} x={1700} y={110} w={150} />
			<Hand x={1300} y={240} at={k.here} out={k.that2 - 20} size={40} color={INK} w={420}>a bag&apos;s mass: many small nudges</Hand>
			<Chip x={1300} y={340} at={k.lots + 40} out={k.that2 - 20} size={34} color={BLUE.ink}>+ one more chip</Chip>
			<Chip x={1300} y={410} at={k.lots + 70} out={k.that2 - 20} size={34} color={BLUE.ink}>+ a bigger chip</Chip>
			<Chip x={1300} y={480} at={k.lots + 100} out={k.that2 - 20} size={34} color={MATH_AMBER}>− a few crumbs</Chip>
			<PegBoard x={PB.x} y={PB.y} width={PB.w} height={PB.h} rows={12} run={PEG_RUN} pace={pace} binScale={3} at={-30} />
			<PegPaths x={PB.x} y={PB.y} width={PB.w} height={PB.h} rows={12} paths={ALL_LEFT} o={prog(fr, k.far, 12) * (1 - prog(fr, k.one, 14))} draw={smooth(prog(fr, k.far + 30, 60))} />
			<PegPaths x={PB.x} y={PB.y} width={PB.w} height={PB.h} rows={12} paths={ONE_RIGHT} o={prog(fr, k.one, 12) * (1 - prog(fr, k.middle, 14)) * 0.7} draw={smooth(prog(fr, k.one + 20, 60))} strokeWidth={3} />
			<PegPaths x={PB.x} y={PB.y} width={PB.w} height={PB.h} rows={12} paths={SIX_SIX} o={prog(fr, k.middle, 12) * (1 - prog(fr, k.so, 14)) * 0.8} draw={smooth(prog(fr, k.middle + 30, 70))} strokeWidth={4} />
			<Hand x={bx(0) - 60} y={PB.y + PB.h - 300} at={k.that1} out={k.so} size={40} color={MATH_AMBER}>1 path</Hand>
			<Hand x={bx(1) - 20} y={PB.y + PB.h - 240} at={k.twelve} out={k.so} size={40} color={MATH_AMBER}>12 paths</Hand>
			<LiveReadoutBoard x={1300} y={560} width={520} at={k.here} out={k.that2 - 20} rows={[{label: 'dots dropped', value: paceCount(400, fr, pace), text: `${paceCount(400, fr, pace)} of 400`, role: 'a'}]} />
			<LiveReadoutBoard x={1300} y={560} width={520} at={k.that2} rows={[{label: 'paths to the middle bin', value: 924, text: '924 of 4,096', role: 'k'}]} />
			<Hand x={1300} y={700} at={k.that2 + 10} size={42} color={MATH_AMBER}>924 paths</Hand>
			<FrameSvg style={{opacity: prog(fr, k.sides, 12)}}><line x1={bx(6)} x2={bx(6)} y1={PB.y + 620} y2={PB.y + PB.h} stroke={VIO.stroke} strokeWidth={5} strokeDasharray="12 8" /></FrameSvg>
			<Hand x={1300} y={780} at={k.sides} size={38} color={VIO.ink} w={560}>the same on both sides</Hand>
			<Hand x={1300} y={850} at={k.bell} size={36} color={GREY} w={560}>many small, independent nudges added up</Hand>
		</>
	);
};

// ---------- 3. the normal model ----------
export const BB = {x: 96, y: 230, w: 1100, h: 620} as const;
export const WB = {x: [159, 191] as [number, number], y: [0, 0.11] as [number, number]};
export const MB = makePlot(BB.x, BB.y, BB.w, BB.h, WB);
const pdf = (v: number) => normPdf(v, MU, SIG);
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const ghost = prog(fr, k.any + 30, 20);
	const curve = smooth(prog(fr, k.things, 40));
	const ar = prog(fr, k.area, 14);
	return (
		<>
			<SceneHeading text="The normal model" at={4} size={48} />
			<Plate plate={CHIP_BAG} x={1680} y={120} w={170} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - 0.7 * ghost}}>
				<ClassHistogram x={BB.x} y={BB.y} width={BB.w} height={BB.h} edges={BAG_EDGES} counts={BAG_COUNTS} density total={1000} yMax={0.11} xTicks={[165, 170, 175, 180, 185]} yTicks={[0.05, 0.1]} xLabel="mass (g)" yLabel="density" countLabels={false} at={-30} />
			</div>
			<StudioPlot x={BB.x} y={BB.y} width={BB.w} height={BB.h} window={{x: [161, 189], y: WB.y}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} bare at={-30}>
				{m => <>
					<g opacity={ar}><path d={regionPath(m, pdf, 173, 175)} fill={AMBER_FILL} stroke={MATH_AMBER} strokeWidth={3} />{(() => {const [a, t] = m.p(173, 0.0705), [b, base] = m.p(175, 0); return <rect x={a} y={t} width={b - a} height={base - t} fill="none" stroke={MATH_AMBER} strokeWidth={5} />;})()}</g>
					<g clipPath={m.clip}><path d={fnPath(m, pdf, 161, 161 + 28 * curve, 300)} stroke={TEAL.stroke} strokeWidth={7} fill="none" /></g>
				</>}
			</StudioPlot>
			<Hand x={1260} y={330} at={k.things} size={44} color={TEAL.ink}>a continuous model</Hand>
			<Chip x={1260} y={420} at={k.like} size={32} color={GREY}>adult heights (one population)</Chip>
			<Chip x={1260} y={500} at={k.like + 40} size={32} color={GREY}>measurement errors</Chip>
			<Chip x={1260} y={580} at={k.like + 80} size={32} color={GREY}>products from a machine</Chip>
			<Hand x={1260} y={680} at={k.area} size={40} color={MATH_AMBER} w={600}>area = probability</Hand>
			<Hand x={1260} y={760} at={k.fit} size={38} color={GREY} w={600}>approximate fit: a model</Hand>
			<Hand x={1260} y={830} at={k.peak} size={36} color={TEAL.ink} w={600}>one peak, symmetric, tails match</Hand>
		</>
	);
};

// ---------- 4. what the shape means ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const fold = smooth(prog(fr, k.fold + 10, 40));
	const zoom = prog(fr, k.never - 20, 16);
	const Z = {x: 1260, y: 590, w: 600, h: 300};
	return (
		<>
			<SceneHeading text="What the shape means" at={4} size={48} />
			<Plate plate={CHIP_BAG} x={1730} y={110} w={140} />
			<NormalCurve x={BB.x} y={BB.y} width={BB.w} height={BB.h} window={WB} mu={MU} sigma={SIG} xTicks={[167, 171, 179, 183]} xLabel="mass (g)" yLabel="f(x)" muMark={{at: k.sym}}
				shade={[{to: 175, at: k.too, out: k.most, label: () => '½'}, {from: 175, at: k.too, out: k.most, color: 'rgba(31,138,143,0.25)', label: () => '½'}, {from: 171, to: 179, at: k.most}]} at={-30}
				overlay={m => <>
					{bellFill(m, MU, SIG, 159, 191, 1 - prog(fr, k.too, 12))}
					{fold > 0.001 && fr < k.too + 20 ? <path d={fnPath(m, v => {const c = fold * 2 - 1 || 1e-6, src = MU - (v - MU) / c; return src <= MU && src >= 159 ? pdf(src) : NaN;}, 159, 191, 400)} stroke={VIO.stroke} strokeWidth={5} strokeDasharray="12 8" fill="none" opacity={0.9} clipPath={m.clip} /> : null}
					{(() => {const o = prog(fr, k.high, 12); const [px, py] = m.p(MU, pdf(MU)); return o > 0.01 ? <circle cx={px} cy={py} r={22} fill="none" stroke={MATH_AMBER} strokeWidth={6} opacity={o} /> : null;})()}
					{(() => {const o = prog(fr, k.dirs, 12), [x0, y0] = m.p(159, 0), [x1] = m.p(191, 0); return o > 0.01 ? <g opacity={o} stroke={TEAL.stroke} strokeWidth={6} fill="none"><path d={`M${x0 + 60},${y0 - 14} L${x0 + 6},${y0 - 14} M${x0 + 24},${y0 - 30} L${x0 + 6},${y0 - 14} L${x0 + 24},${y0 + 2}`} /><path d={`M${x1 - 60},${y0 - 14} L${x1 - 6},${y0 - 14} M${x1 - 24},${y0 - 30} L${x1 - 6},${y0 - 14} L${x1 - 24},${y0 + 2}`} /></g> : null;})()}
				</>} />
			<Hand x={MB.pf(176, 0)[0] + 20} y={MB.pf(0, 0.108)[1]} at={k.fold} out={k.too + 20} size={38} color={VIO.ink}>fold: halves match</Hand>
			<Hand x={MB.pf(159.3, 0)[0]} y={MB.pf(0, 0)[1] - 70} at={k.dirs} size={36} color={TEAL.ink}>to −∞</Hand>
			<Hand x={MB.pf(187.5, 0)[0]} y={MB.pf(0, 0)[1] - 70} at={k.dirs} size={36} color={TEAL.ink}>to +∞</Hand>
			<Hand x={1260} y={160} at={-30} size={36} color={TEAL.ink}>the bags&apos; bell, μ = 175 g</Hand>
			<Row x={1260} y={230} at={k.sym} size={40} color={VIO.ink}>symmetric about μ</Row>
			<Row x={1260} y={300} at={k.too} size={36}>P(X &lt; μ) = 0.5, so median = μ</Row>
			<Row x={1260} y={356} at={k.mode} size={36}>highest at μ, so mode = μ</Row>
			<AnswerBox x={1260} y={416} at={k.same} size={38}>mean = median = mode = μ</AnswerBox>
			<Hand x={1260} y={500} at={k.same + 30} size={32} color={GREY} w={600}>and it balances at μ (last video)</Hand>
			{zoom > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: zoom}}>
				<div style={{position: 'absolute', left: Z.x - 10, top: Z.y - 10, width: Z.w + 20, height: Z.h + 20, background: '#fffdf8', borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.14)'}} />
				<StudioPlot x={Z.x} y={Z.y} width={Z.w} height={Z.h} window={{x: [184, 191], y: [0, 0.004]}} xTicks={[185, 187, 189, 191]} yTicks={[]} xLabel="zoom: right tail" yLabel="" grid={false} at={-30}>
					{m => <g clipPath={m.clip}><path d={fnPath(m, pdf, 184, 191, 200)} stroke={TEAL.stroke} strokeWidth={6} fill="none" /></g>}
				</StudioPlot>
				<Hand x={Z.x + 300} y={Z.y + 40} at={k.never} size={36} color={TEAL.ink}>never reaches 0</Hand>
			</div> : null}
		</>
	);
};

// ---------- 5. the notation ----------
const G5 = {x: 40, y: 300, w: 1000, h: 580} as const;
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const mu = kf(fr, [[k.change, 175], [k.axis, 180], [k.make - 10, 175]]);
	const sigma = kf(fr, [[k.make, 4], [k.one, 6]]);
	const peak = normPdf(mu, mu, sigma);
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={44}>Read X ∼ N(175, 16).</Task>
			<BoxCard x={1080} y={150} w={800} at={k.bags} size={38} title="given"><div style={{fontWeight: 800}}>mean 175 g, variance 16</div></BoxCard>
			<NormalCurve x={G5.x} y={G5.y} width={G5.w} height={G5.h} window={{x: [155, 200], y: [0, 0.11]}} mu={mu} sigma={sigma} xTicks={[160, 165, 170, 185, 190, 195]} xLabel="mass (g)" yLabel="f(x)" muMark={{}} at={-30} />
			<Hand x={G5.x + 120} y={G5.y + 60} at={k.axis - 30} out={k.make} size={40} color={VIO.ink}>μ moves the centre</Hand>
			<Hand x={G5.x + 120} y={G5.y + 60} at={k.make + 20} size={40} color={VIO.ink}>σ sets the spread</Hand>
			<Hand x={G5.x + 120} y={G5.y + 120} at={k.wide} size={36} color={GREY}>width × 1.5, peak × 2/3</Hand>
			<Row x={1080} y={300} at={k.this} size={52}>X ∼ N(μ, σ²)</Row>
			<Hand x={1250} y={370} at={k.first} size={32} color={VIO.ink}>mean</Hand>
			<Hand x={1370} y={370} at={k.second} size={32} color={MATH_AMBER}>variance</Hand>
			<Row x={1080} y={430} at={k.bags} size={44}>X ∼ N(175, 16)</Row>
			<AnswerBox x={1080} y={500} at={k.grams} size={44}>σ = √16 = 4 g</AnswerBox>
			<Slip x={1450} y={490} at={k.grams + 30} strikeAt={k.grams + 52} size={36} caption="16 is σ²">σ = 16</Slip>
			<Chip x={1080} y={620} at={k.change - 20} size={28} color={GREY}>N(60, 9): σ = 3, not 9</Chip>
			<LiveReadoutBoard x={1080} y={700} width={380} at={k.change} rows={[{label: 'μ', value: mu, digits: 1, role: 'gradient'}, {label: 'σ', value: sigma, digits: 2, role: 'gradient'}]} />
			<LiveReadoutBoard x={1490} y={700} width={390} at={k.make} rows={[{label: 'area', value: 1, digits: 0, role: 'k'}, {label: 'peak height', value: peak, digits: 4}]} />
		</>
	);
};
export {RED, FONT_DISPLAY, HIST, Q};
