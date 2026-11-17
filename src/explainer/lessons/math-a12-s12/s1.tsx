// Scenes 1 to 5: s11's question (μ = ? for a 1% tail below 490); the filling machine and its dial with simulated
// bottles (19, 6, 2 short at 500, 504, 508); a probability fixes z; the table read backwards (0.9901 at 2.33, z =
// −2.33); solving for μ = 508.64 mL; the forward check (0.0099) and the safe direction.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, NormalCurve, SceneHeading, SigmaRuler, StudioPlot, ZTable, fnPath, kf, makePlot, normCdf, normPdf, regionPath, smooth, vis} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AnswerBox, BROWN, BoxCard, Chip, Frac, GREY, HEAD, Hand, MU_EXACT, MU_SET, Machine, Mark, MirrorTail, Plate, RED, Row, S11FinalFrame, Slip, TEAL, Task, VIO, bellFill, runShown, shortCount} from './parts';

const AMB = '#d18f1f';
const pdf0 = (v: number) => normPdf(v, 0, 1);
export const WF = {x: [460, 560] as [number, number], y: [0, 0.058] as [number, number]};
const FT = [470, 490, 530, 550];
/** The fills' bell at μ on the right (shared by scenes 1, 2 and 5), the 490 tail shaded with its live area. */
const RB = {x: 980, y: 140, w: 900, h: 400} as const;
const FillsBell: React.FC<{mu: number; at?: number; label?: boolean}> = ({mu, at = -30, label = true}) => {
	const m = makePlot(RB.x, RB.y, RB.w, RB.h, WF);
	const tail = normCdf(490, mu, 8);
	return <>
		<NormalCurve x={RB.x} y={RB.y} width={RB.w} height={RB.h} window={WF} mu={mu} sigma={8} xTicks={FT} xLabel="fill (mL)" yLabel="" muMark={{}} shade={[{to: 490}]} overlay={mm => bellFill(mm, mu, 8, 460, 560)} at={at} />
		<Mark m={m} v={490} o={1} mu={mu} sigma={8} label="490" ly={0.05} />
		{label ? <Hand x={m.pf(462, 0)[0]} y={m.pf(0, 0.016)[1]} at={at} size={36} color={AMB}>{`tail ${tail.toFixed(4)}`}</Hand> : null}
	</>;
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = smooth(prog(fr, k.dial - 4, 24));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<S11FinalFrame />
				<Hand x={1240} y={860} at={k.until} out={k.dial} size={40} color={GREY} w={640}>until now: μ, σ → probability</Hand>
				<Hand x={1240} y={910} at={k.time} out={k.dial} size={40} color={BROWN} w={640}>now: the probability is fixed</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="Finding μ or σ" at={k.dial} size={48} />
				<FillsBell mu={500} at={k.dial} />
				<Machine mu={500} shown={runShown(fr, k.dial + 20, 260)} at={k.dial} />
				<LiveReadoutBoard x={120} y={800} width={520} at={k.dial} inline rows={[{label: 'dial: μ', value: 500, digits: 2, role: 'gradient', unit: 'mL'}, {label: 'short', value: 0, text: `${shortCount(500, Math.floor(runShown(fr, k.dial + 20, 260)))} of ${Math.floor(runShown(fr, k.dial + 20, 260))}`, role: 'mistake'}]} />
				<BoxCard x={980} y={600} w={560} at={k.unknown} size={36} title="this time">
					<div style={{color: GREY}}>μ, σ → probability</div>
					<div style={{fontWeight: 800}}>probability → μ or σ</div>
				</BoxCard>
				<Hand x={1580} y={620} at={k.only} size={38} color={RED} w={300}>only 1% under 490</Hand>
				<Chip x={980} y={830} at={k.where} size={44} color={BROWN}>Where must μ be set?</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. a probability fixes z ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const mu = kf(fr, [[k.turn, 500], [k.smaller, 508], [k.at500 - 10, 508], [k.at500 + 20, 500], [k.keep, 500], [k.percent + 10, MU_EXACT]]);
	const run = fr >= k.fill && fr < k.keep ? runShown(fr, k.fill, 110) : 200;
	const rulerP = vis(fr, k.turn, undefined, 12);
	const m = makePlot(RB.x, RB.y, RB.w, RB.h, WF);
	const [rx0] = m.pf(460, 0), [rx1] = m.pf(560, 0);
	const pulse = vis(fr, k.short, k.keep, 8) * (0.5 + 0.5 * Math.sin((fr - k.short) / 4));
	const stops = [{mu: 504, at: k.keep + 30}, {mu: 508, at: k.keep + 70}];
	return (
		<>
			<FillsBell mu={mu} />
			<Machine mu={mu} shown={run} />
			<LiveReadoutBoard x={120} y={800} width={560} inline rows={[{label: 'dial: μ', value: mu, digits: 2, role: 'gradient', unit: 'mL'}, {label: 'short (simulated)', value: 0, text: `${shortCount(mu, Math.floor(run))} of ${Math.floor(run)}`, role: 'mistake'}]} />
			<FrameSvg style={{opacity: pulse}}><rect x={110} y={790} width={580} height={150} rx={20} fill="none" stroke={RED} strokeWidth={7} /></FrameSvg>
			<Hand x={700} y={810} at={k.turn + 20} out={k.at500} size={38} color={VIO.ink} w={260}>turn μ up: fewer short</Hand>
			{stops.map((s0, i) => <Hand key={i} x={700} y={800 + 60 * i} at={s0.at} out={k.sigmas} size={32} color={GREY} w={280}>{`μ = ${s0.mu}: ${shortCount(s0.mu)} short, tail ${normCdf(490, s0.mu, 8).toFixed(4)}`}</Hand>)}
			<SigmaRuler x={rx0} y={620} width={rx1 - rx0} range={WF.x} from={490} to={mu} sigma={8} progress={rulerP} ticks={[{value: 490, label: '490'}]} label={st => (fr >= k.percent ? '? σ' : `${st.toFixed(2)}σ`)} at={k.turn} />
			<StudioPlot x={1440} y={680} width={440} height={220} window={{x: [-3.6, 3.6], y: [0, 0.46]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} bare at={k.same} out={k.job}>
				{mm => <><path d={regionPath(mm, pdf0, -3.6, -2.33)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} /><path d={fnPath(mm, pdf0, -3.6, 3.6, 200)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={mm.p(-3.6, 0)[0]} x2={mm.p(3.6, 0)[0]} y1={mm.p(0, 0)[1]} y2={mm.p(0, 0)[1]} stroke="#2b2620" strokeWidth={3} /><text x={mm.p(-2.33, 0)[0]} y={mm.p(0, 0)[1] + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: AMB}}>z = ?</text></>}
			</StudioPlot>
			<Hand x={1060} y={700} at={k.same} out={k.job} size={38} color={VIO.ink} w={360}>same curve in σs: 1% tail at the same z</Hand>
			<Row x={1060} y={700} at={k.job} size={44}>1. area → z</Row>
			<Row x={1060} y={780} at={k.job + 20} size={44}>2. z → μ</Row>
		</>
	);
};

// ---------- 3. reading the table backwards ----------
const B3 = {x: 40, y: 220, w: 920, h: 640} as const;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const flip = smooth(prog(fr, k.below, 30));
	const zm = 2.33 * (1 - 2 * flip);
	return (
		<>
			<SceneHeading text="Reading the table backwards" at={4} size={48} />
			<StudioPlot x={B3.x} y={B3.y} width={B3.w} height={B3.h} window={{x: [-3.6, 3.6], y: [0, 0.46]}} xTicks={[-3, -2, -1, 0, 1, 2, 3]} yTicks={[]} xLabel="z" yLabel="" grid={false} at={-30}>
				{m => <>
					<path d={regionPath(m, pdf0, -3.6, -2.33)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} opacity={1 - prog(fr, k.below, 10) + prog(fr, k.below + 30, 10)} />
					<path d={regionPath(m, pdf0, -3.6, 2.33)} fill="rgba(243,217,166,0.55)" stroke={AMB} strokeWidth={3} opacity={vis(fr, k.left - 20, k.below, 14)} />
					<path d={regionPath(m, pdf0, 2.33, 3.6)} fill="rgba(124,92,191,0.2)" stroke={VIO.stroke} strokeWidth={3} opacity={vis(fr, k.right, k.below, 14)} />
					<g clipPath={m.clip}><path d={fnPath(m, pdf0, -3.6, 3.6, 300)} stroke={TEAL.stroke} strokeWidth={7} fill="none" /></g>
					<MirrorTail m={m} fn={pdf0} c={0} a={2.33} lo={-3.6} p={prog(fr, k.mirrors - 10, 40) * (1 - prog(fr, k.left, 10))} />
					{(() => {const [px, by] = m.p(zm, 0), [, ty] = m.p(zm, pdf0(zm)); return <g opacity={prog(fr, k.left - 20, 12)}><line x1={px} x2={px} y1={by} y2={ty - 40} stroke={AMB} strokeWidth={6} /><circle cx={px} cy={by} r={14} fill={AMB} stroke="#fffdf8" strokeWidth={4} /></g>;})()}
				</>}
			</StudioPlot>
			<Hand x={110} y={560} at={-30} out={k.left - 20} size={40} color={AMB}>left tail: 1%</Hand>
			<Hand x={400} y={560} at={k.left} out={k.below} size={56} color={'#8a5a12'}>0.99</Hand>
			<Hand x={800} y={660} at={k.right} out={k.below} size={40} color={VIO.ink}>1%</Hand>
			<ZTable x={1000} y={200} rowStart={2.0} rows={5} cols={4} cellW={150} cellH={56} size={34} scan={{target: 0.99, at: k.nine, dur: 50}} at={-30} />
			<Chip x={1000} y={560} at={k.search} size={36} color={AMB}>target 0.9900</Chip>
			<Hand x={1330} y={570} at={k.nine} size={38} color={BROWN}>look for 0.99 inside</Hand>
			<Row x={1000} y={650} at={k.at232} size={34} color={GREY}>2.32: 0.9898 (0.0002 away)</Row>
			<Row x={1000} y={700} at={k.at233} size={34} color={GREY}>2.33: 0.9901 (0.0001 away)</Row>
			<Row x={1000} y={760} at={k.closer} size={44}>P(Z &lt; 2.33) ≈ 0.99</Row>
			<AnswerBox x={1000} y={836} at={k.minus} size={52}>z = −2.33</AnswerBox>
			<Hand x={1330} y={850} at={k.below} size={40} color={BROWN}>below: z negative</Hand>
		</>
	);
};

// ---------- 4. solving for the mean ----------
const B4 = {x: 40, y: 290, w: 880, h: 460} as const;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const mu = kf(fr, [[k.in, 500], [k.in + 60, MU_SET]]);
	const m = makePlot(B4.x, B4.y, B4.w, B4.h, WF);
	const [rx0] = m.pf(460, 0), [rx1] = m.pf(560, 0);
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Find μ so that P(X &lt; 490) = 0.01.</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={36} title="model and givens">
				<div style={{fontWeight: 800, color: TEAL.ink}}>X ∼ N(μ, 64)</div>
				<div style={{fontWeight: 800}}>x = 490 mL, σ = 8 mL, z = −2.33</div>
			</BoxCard>
			<NormalCurve x={B4.x} y={B4.y} width={B4.w} height={B4.h} window={WF} mu={mu} sigma={8} xTicks={FT} xLabel="fill (mL)" yLabel="" muMark={{}} shade={[{to: 490}]} overlay={mm => bellFill(mm, mu, 8, 460, 560)} at={-30} />
			<Mark m={m} v={490} o={1} mu={mu} sigma={8} label="490" ly={0.05} />
			<Plate plate={HEAD} x={760} y={300} w={150} />
			<SigmaRuler x={rx0} y={905} width={rx1 - rx0} range={WF.x} from={490} to={mu} sigma={8} progress={1} label={st => (fr >= k.in + 60 ? '2.33σ = 18.64 mL' : `${st.toFixed(2)}σ`)} at={k.in} />
			<Row x={1000} y={300} at={k.zed} size={44} dim={prog(fr, k.multiply, 14) * 0.6}>z = <Frac n="x − μ" d="σ" /></Row>
			<Row x={1000} y={390} at={k.eight} size={48} dim={prog(fr, k.so, 14) * 0.6}>−2.33 = <Frac n="490 − μ" d="8" /></Row>
			<Row x={1000} y={490} at={k.four} size={44} dim={prog(fr, k.ml, 14) * 0.6}>490 − μ = −2.33 × 8 = −18.64</Row>
			<Row x={1000} y={560} at={k.so} size={44}>μ = 490 + 18.64</Row>
			<AnswerBox x={1000} y={640} at={k.ml} size={52}>μ = 508.64 mL</AnswerBox>
			<Hand x={1000} y={750} at={k.with} size={36} color={GREY} w={860}>table z: tail ≈ 0.0099, just under 1%</Hand>
			<Hand x={1000} y={820} at={k.in + 20} size={42} color={BROWN}>area → z → μ</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: vis(fr, k.eight + 30, k.ml, 12)}}><Slip x={1000} y={640} at={k.eight + 30} strikeAt={k.eight + 60} size={36} caption="below: z negative">z = +2.33</Slip></div>
		</>
	);
};

// ---------- 5. checking the direction ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const mu = kf(fr, [[k.shrinks - 10, MU_SET], [k.shrinks + 20, 512], [k.shrinks + 40, 512], [k.shrinks + 70, 508], [k.so - 10, 508], [k.so + 10, MU_SET]]);
	const run = fr >= k.fill ? runShown(fr, k.fill, 100) : 200;
	return (
		<>
			<FillsBell mu={mu} />
			<Machine mu={mu} shown={run} />
			<LiveReadoutBoard x={120} y={800} width={560} inline rows={[{label: 'dial: μ', value: mu, digits: 2, role: 'gradient', unit: 'mL'}, {label: 'short (simulated)', value: 0, text: `${shortCount(mu, Math.floor(run))} of ${Math.floor(run)}`, role: 'mistake'}]} />
			<Hand x={700} y={810} at={k.shrinks} out={k.shrinks + 40} size={36} color={'#2f7d4f'} w={260}>higher μ: smaller tail</Hand>
			<Hand x={700} y={810} at={k.shrinks + 50} out={k.so} size={36} color={RED} w={260}>lower μ: more than 1%</Hand>
			<Row x={1010} y={570} at={k.nine - 40} size={38}>z = <Frac n="490 − 508.64" d="8" /> = −2.33</Row>
			<Row x={1010} y={660} at={k.nine} size={38}>P(X &lt; 490) = 1 − 0.9901 = 0.0099 ✓</Row>
			<AnswerBox x={1010} y={730} at={k.so} size={34}>set μ = 508.64 mL: tail ≈ 0.0099, just under 1%</AnswerBox>
			<Hand x={1010} y={810} at={k.round} size={40} color={BROWN}>round up: safe</Hand>
			<Row x={1300} y={820} at={k.so + 20} size={28} color={GREY}>app: ≈ 508.6108 (z not rounded)</Row>
			<Chip x={1010} y={870} at={k.up - 20} size={28} color={GREY}>round up to be sure of reaching the target</Chip>
		</>
	);
};
export {MU_EXACT};
