// Scenes 7 to 12: activity (twin N and A curves halving together; a counter catching a fixed fraction), real data
// (the painted Geiger counter reading background; the table, corrected points, best fit and halving guides; t½ ≈ 70 s),
// whole half-lives (I-131: 640 → 80 Bq), not a whole number (λ, λt, 269 Bq, the time slider on the curve), the crowd
// against the individual (particle-box runs of 20 and of 2000 nuclei against the expected curve; one nucleus 50/50)
// and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Strip as BStrip} from './parts';
import {Readout} from '../../physics/atom/universe';
import {CountDisplay, GEIGER, NucleonCluster, clusterLayout, decayRun, remainingAt} from '../../physics/atom/decay';
import {lazy} from '../../sims';
import {GraphPaper, dispRect} from '../phys-y12-m8-v14/parts';
import {BACKGROUND, CORRECTED, DATA_HALF, DATA_T, HEAD, HEAD_SIZE, I_A0, I_A1, I_A2, I_EXP, I_HALF, I_LAM, I_LT, I_N, I_T1, I_T2, MEASURED, SLIP9, SMALL_SEEDS, cap, cue, dataModel, iAct} from './common';
import {AMBER, Axes, GREEN_C, GREY, Givens, INK, LPlate, LamLaw, Lbl, NAVY, NEUTRON, NUC_RED, RED, T, TEAL, curveD, fx, gx, gy, placeAt} from './parts';
import type {GBox} from './parts';
import {Staircase} from './s1';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const At: React.FC = () => <>A<sub>t</sub> = A<sub>0</sub>e<sup>−λt</sup></>;

// ---------- 7. activity ----------
const NB: GBox = {x: 170, y: 250, w: 960, h: 240, tMax: 4}, AB: GBox = {x: 170, y: 610, w: 960, h: 240, tMax: 4};
const GEI7 = placeAt(GEIGER, [101, 357], 1500, 470, 330);
export const S07: React.FC = () => {
	const id = 'activity';
	const f = useCurrentFrame();
	const ib = cue(id, 'in becquerels'), ff = cue(id, 'a fixed fraction of them'), al = cue(id, 'activity equals lambda times N'), sh = cue(id, 'exactly the same half-life'), rd = cap(id, cue(id, 'a rate of decays'), 24);
	const flash = 1 + 1.5 * pulseOf(f, sh, 30);
	const guides = (b: GBox, c: string) => [1, 2, 3].map(n => <g key={n}><line x1={gx(b, n)} y1={gy(b, 0)} x2={gx(b, n)} y2={gy(b, 0.5 ** n)} stroke={c} strokeWidth={3 * flash} strokeDasharray="7 6" /><line x1={gx(b, 0)} y1={gy(b, 0.5 ** n)} x2={gx(b, n)} y2={gy(b, 0.5 ** n)} stroke={c} strokeWidth={2 * flash} strokeDasharray="7 6" /></g>);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Axes b={NB} xLabel="" yLabel="N (nuclei)" ticks={[0, 1, 2, 3, 4]} size={26} />
				<Axes b={AB} xLabel="time (half-lives)" yLabel="A (Bq)" ticks={[0, 1, 2, 3, 4]} size={26} />
				{guides(NB, TEAL.stroke)}{guides(AB, TEAL.stroke)}
				<path d={curveD(NB, t => 0.5 ** t)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				<path d={curveD(AB, t => 0.5 ** t)} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
				{f >= ff ? <g opacity={prog(f, ff, 14)}>
					<NucleonCluster cx={1290} cy={470} r={11} discs={clusterLayout(8, 9, 4)} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					{[-60, -25, 0, 30, 70].map((deg, i) => { const a = (deg * Math.PI) / 180, u = ((f - ff + i * 9) % 40) / 40, r = 70 + 120 * u; return <circle key={i} cx={1290 + r * Math.cos(a)} cy={470 + r * Math.sin(a)} r={7} fill={AMBER.stroke} opacity={1 - u * 0.6} />; })}
					<LPlate spec={GEIGER} p={GEI7} />
				</g> : null}
			</FrameSvg>
			<Chip x={1260} y={200} at={ib} size={28} color={AMBER.ink}>1 Bq = 1 decay per second</Chip>
			<HandTag x={1260} y={640} text="count rate ≠ activity" at={ff + 20} size={34} color={GREY.ink} />
			<Lbl x={1260} y={690} at={ff + 30} color={GREY.ink} size={26}>same set-up: same half-life</Lbl>
			<div style={{position: 'absolute', left: 1260, top: 730, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={al} size={44}>A = λN</Row>
				<Row at={al + 20} size={40}><At /></Row>
			</div>
			<div style={{position: 'absolute', left: 170, top: 880, display: 'flex', gap: 20}}>
				<Row at={rd} size={30}><AnswerBox at={rd + 4}>N: nuclei (a number)</AnswerBox></Row>
				<Row at={rd} size={30}><AnswerBox at={rd + 8}>A: decays per second (a rate)</AnswerBox></Row>
			</div>
			<CrossedChip x={1260} y={360} at={rd + 6} crossAt={rd + 18} size={28}>activity = number of nuclei</CrossedChip>
			<HandTag x={0} y={0} at={sh + 10} color={AMBER.stroke} marks={[{kind: 'circle', cx: gx(NB, 1), cy: 550, rx: 60, ry: 330}]} />
		</>
	);
};

// ---------- 8. real data: subtract the background ----------
const GEI8 = {x: 96, y: 220, w: 640};
const DB: GBox = {x: 1010, y: 250, w: 780, h: 480, tMax: 240};
const dy = (b: GBox, v: number) => gy(b, v / 45);
export const S08: React.FC = () => {
	const id = 'background-data';
	const f = useCurrentFrame();
	const sr = cue(id, 'subtract it from every reading'), pc = cue(id, 'plot the corrected count rate'), sc = cue(id, 'a smooth curve of best fit'), fd = cue(id, 'from a few different starting points'), av = cap(id, cue(id, 'and average them'), 24);
	const disp = dispRect(GEI8);
	const lift = prog(f, sr + 40, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GEIGER} p={GEI8} />
				<CountDisplay r={disp} text={fx(BACKGROUND, 1)} />
				<GraphPaper x={DB.x} y={DB.y} w={DB.w} h={DB.h} step={DB.w / 12} />
				<Axes b={DB} xLabel="time (s)" yLabel="corrected count rate (counts per second)" ticks={[0, 60, 120, 180, 240]} size={26} />
				{[0, 10, 20, 30, 40].map(v => <text key={v} x={DB.x - 12} y={dy(DB, v) + 9} textAnchor="end" style={T(26, INK)}>{v}</text>)}
				{f >= sr + 20 ? <rect x={DB.x} y={dy(DB, BACKGROUND) - 2} width={DB.w} height={dy(DB, 0) - dy(DB, BACKGROUND) + 2} fill="#b9b2a6" opacity={1 - lift} /> : null}
				{f >= pc ? DATA_T.map((t, i) => <g key={t} opacity={prog(f, pc + i * 6, 10)}><circle cx={gx(DB, t)} cy={dy(DB, MEASURED[i])} r={9} fill="none" stroke={GREY.stroke} strokeWidth={3} opacity={1 - lift} /><circle cx={gx(DB, t)} cy={dy(DB, lerp(MEASURED[i], CORRECTED[i], lift))} r={9} fill={NAVY.stroke} /></g>) : null}
				{f >= sc ? <path d={curveD(DB, dataModel, 0, 240 * prog(f, sc, 30))} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
				{f >= fd ? <g opacity={prog(f, fd, 14)} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6">
					<line x1={gx(DB, 0)} y1={dy(DB, 20)} x2={gx(DB, DATA_HALF)} y2={dy(DB, 20)} /><line x1={gx(DB, DATA_HALF)} y1={dy(DB, 20)} x2={gx(DB, DATA_HALF)} y2={dy(DB, 0)} />
					<line x1={gx(DB, DATA_HALF)} y1={dy(DB, 10)} x2={gx(DB, 2 * DATA_HALF)} y2={dy(DB, 10)} /><line x1={gx(DB, 2 * DATA_HALF)} y1={dy(DB, 10)} x2={gx(DB, 2 * DATA_HALF)} y2={dy(DB, 0)} />
				</g> : null}
			</FrameSvg>
			<Lbl x={disp[0]} y={disp[3] + 40} at={-30} color={GREY.ink} size={26}>counts per second, no source</Lbl>
			<HandTag x={96} y={500} text="background: no source" at={10} size={36} color={GREY.ink} marks={[{kind: 'circle', cx: (disp[0] + disp[2]) / 2, cy: (disp[1] + disp[3]) / 2, rx: 140, ry: 44}]} />
			<div style={{position: 'absolute', left: 96, top: 560, display: 'grid', gridTemplateColumns: '210px repeat(5, 92px)', rowGap: 8, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK, opacity: prog(f, sr, 14)}}>
				<div>t (s)</div>{DATA_T.map(t => <div key={t}>{t}</div>)}
				<div style={{color: GREY.ink}}>measured</div>{MEASURED.map((m, i) => <div key={i} style={{color: GREY.ink}}>{fx(m, 1)}</div>)}
				<div style={{color: NAVY.ink, opacity: prog(f, sr + 40, 14)}}>corrected</div>{CORRECTED.map((m, i) => <div key={i} style={{color: NAVY.ink, opacity: prog(f, sr + 40, 14)}}>{fx(m, 1)}</div>)}
			</div>
			<Lbl x={96} y={760} at={sr + 40} color={GREY.ink} size={26}>corrected = measured − 0.5 (counts per second)</Lbl>
			<Lbl x={gx(DB, DATA_HALF) + 10} y={dy(DB, 20) - 20} at={fd + 10} color={TEAL.ink} size={28}>40 → 20: 70 s</Lbl>
			<Lbl x={gx(DB, 2 * DATA_HALF) + 10} y={dy(DB, 10) - 20} at={fd + 20} color={TEAL.ink} size={28}>20 → 10: 70 s</Lbl>
			<div style={{position: 'absolute', left: 96, top: 820}}><Row at={av} size={52}><AnswerBox at={av + 4}>t½ ≈ 70 s</AnswerBox></Row></div>
			<HandTag x={420} y={860} text="counts per second, not Bq" at={av + 16} size={34} color={GREY.ink} />
		</>
	);
};

// ---------- 9 and 10. iodine-131 ----------
const CB: GBox = {x: 1180, y: 260, w: 620, h: 440, tMax: 24};
const ay = (a: number) => gy(CB, a / I_A0);
const ICurve: React.FC<{f: number; stairs?: number; slider?: number | null}> = ({stairs = 0, slider = null}) => (
	<g>
		<GraphPaper x={CB.x} y={CB.y} w={CB.w} h={CB.h} step={CB.w / 12} />
		<Axes b={CB} xLabel="t (days)" yLabel="A (Bq)" ticks={[0, 8, 16, 24]} size={26} />
		{[0, 160, 320, 480, 640].map(v => <text key={v} x={CB.x - 12} y={ay(v) + 9} textAnchor="end" style={T(26, INK)}>{v}</text>)}
		<path d={curveD(CB, t => iAct(t) / I_A0)} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
		{[8, 16, 24].map(t => <line key={t} x1={gx(CB, t)} y1={gy(CB, 0)} x2={gx(CB, t)} y2={ay(iAct(t))} stroke={TEAL.stroke} strokeWidth={2.5} strokeDasharray="6 6" />)}
		{stairs > 0.001 ? [0, 8, 16, 24].map((t, i) => <g key={t} opacity={prog(stairs * 40, i * 8, 8)}><circle cx={gx(CB, t)} cy={ay(iAct(t))} r={10} fill={AMBER.stroke} stroke="#ffffff" strokeWidth={2} /><text x={gx(CB, t) + 14} y={ay(iAct(t)) - 12} style={T(28, AMBER.ink)}>{fx(iAct(t))}</text></g>) : null}
		{slider !== null ? <g><line x1={gx(CB, slider)} y1={gy(CB, 0)} x2={gx(CB, slider)} y2={ay(iAct(slider))} stroke={NAVY.stroke} strokeWidth={3} /><circle cx={gx(CB, slider)} cy={ay(iAct(slider))} r={13} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} /></g> : null}
	</g>
);
const Strips: React.FC<{second?: number}> = ({second}) => (
	<>
		<BStrip x={96} y={190} at={-30} size={32}>Predict the activity of iodine-131</BStrip>
		<BStrip x={96} y={260} at={-30} size={32}><At />, <LamLaw /></BStrip>
		<Givens x={96} y={340} w={1000} at={-30} size={30} lines={[<>t½ = 8.0 days, A₀ = 640 Bq (sample)</>, <>t = 24 days (first case){second !== undefined ? <span style={{opacity: Math.min(1, Math.max(0, second))}}>; t = 10 days (second case)</span> : null}</>]} />
	</>
);
export const S09: React.FC = () => {
	const id = 'whole-half-lives';
	const f = useCurrentFrame();
	const th = cue(id, 'that\'s three half-lives'), eb = cap(id, cue(id, 'eighty becquerels'), 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strips />
			<FrameSvg><ICurve f={f} stairs={f >= eb ? (f - eb) / 40 : 0} /></FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={th} ageAt={eb} size={48}>{`n = t/t½ = ${I_T1}/${fx(I_HALF, 1)} = ${fx(I_N)}`}</Row>
				<Row at={eb} size={52}><AnswerBox at={eb + 4}>{`A = 640 × (½)³ = 640/8 = ${fx(I_A1)} Bq`}</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={eb + 14} crossAt={eb + 24} size={30} caption="halve 3 times, not ÷ 3">{`640 / 3 = ${fx(SLIP9)} Bq`}</CrossedChip>
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'formula-case';
	const f = useCurrentFrame();
	const tn = cue(id, "which isn't a whole number"), zp = cue(id, 'zero point zero eight six six per day'), lt = cue(id, 'lambda t is zero point eight six six'), tb = cue(id, 'two hundred and sixty nine becquerels'), su = cap(id, cue(id, 'same time units'), 24);
	const sweep = Math.max(30, Math.min(70, su - tb - 30));
	const sl = f < tb ? null : f < tb + sweep ? 24 * prog(f, tb, sweep, t => t) : lerp(24, I_T2, prog(f, tb + sweep, 20));
	const shown = f < tb ? I_A0 : Math.round(lerp(I_A0, I_A2, prog(f, tb, 20)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strips second={prog(f, tn, 14)} />
			<FrameSvg><ICurve f={f} slider={sl} /></FrameSvg>
			<Lbl x={96} y={500} at={-30} color={GREY.ink} size={30}>kept: 24 days: 80 Bq</Lbl>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 12, width: 1060}}>
				<Row at={zp} ageAt={tb} size={44}>{`λ = ln2 / 8.0 = ${fx(I_LAM, 4)} day⁻¹`}</Row>
				<Row at={lt} ageAt={tb} size={44}>{`λt = ${fx(I_LAM, 4)} × 10 = ${fx(I_LT, 3)}`}</Row>
				<Row at={tb} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={tb + 4}>{`A = 640 × e^(−${fx(I_LT, 3)}) = 640 × ${fx(I_EXP, 3)} = ${shown} Bq`}</AnswerBox></Row>
			</div>
			{sl !== null ? <Readout x={1180} y={760} label="time slider" value={`t = ${fx(sl)} days: ${fx(iAct(sl))} Bq`} color={NAVY.ink} w={620} /> : null}
			<HandTag x={1420} y={230} text="between 320 and 160 ✓" at={tb + sweep + 24} size={32} color={GREEN_C.ink} />
			<Chip x={96} y={830} at={su} size={28} color={TEAL.ink}>λ per day ↔ t in days</Chip>
			<CrossedChip x={540} y={830} at={su + 6} crossAt={su + 16} size={28} caption="ln2 ÷ t½">λ = ln2 × 8.0 → A ≈ 0 Bq</CrossedChip>
		</>
	);
};

// ---------- 11. the crowd, not the individual ----------
const HL = 90;
const CR: GBox = {x: 170, y: 260, w: 1080, h: 520, tMax: 3};
const SMALL = lazy(() => SMALL_SEEDS.map(s => decayRun(s, 20, 3 * HL + 1, Math.LN2 / (HL / 30))));
const LARGE = lazy(() => [71, 72, 73].map(s => decayRun(s, 2000, 3 * HL + 1, Math.LN2 / (HL / 30))));
const runD = (run: ReturnType<typeof decayRun>, n: number, tEnd: number, step = false) => {
	const fr = Math.round(tEnd * HL);
	return Array.from({length: fr + 1}, (_, k) => { const v = remainingAt(run, k) / n, x = gx(CR, k / HL), y = gy(CR, v); if (!step || k === 0) return `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`; const pv = remainingAt(run, k - 1) / n; return pv !== v ? `L${x.toFixed(1)},${gy(CR, pv).toFixed(1)} L${x.toFixed(1)},${y.toFixed(1)}` : `L${x.toFixed(1)},${y.toFixed(1)}`; }).join(' ');
};
const RUNC = [RED.stroke, '#b05a2f', '#7d3c98'] as const;
export const S11: React.FC = () => {
	const id = 'crowd-not-individual';
	const f = useCurrentFrame();
	const wt = cue(id, 'With twenty nuclei'), mm = cue(id, 'a million million nuclei'), dc = cue(id, 'describes the crowd'), li = cap(id, cue(id, "it's gone after one half-life"), 24);
	const c1 = f < wt ? 0 : Math.min(1, (f - wt) / 60), c3 = f < mm ? 0 : Math.min(3, (f - mm) / 25);
	const tS = Math.max(c1, Math.min(3, c3)), tL = c3;
	const glow = prog(f, dc, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GraphPaper x={CR.x} y={CR.y} w={CR.w} h={CR.h} step={CR.w / 15} />
				<Axes b={CR} xLabel="time (half-lives)" yLabel="fraction left, N/N₀" ticks={[0, 1, 2, 3]} size={26} />
				{[0, 0.25, 0.5, 0.75, 1].map(v => <text key={v} x={CR.x - 12} y={gy(CR, v) + 9} textAnchor="end" style={T(26, INK)}>{v}</text>)}
				<path d={curveD(CR, t => 0.5 ** t)} fill="none" stroke={NAVY.stroke} strokeWidth={5 + 6 * glow} opacity={0.9} />
				{tS > 0.001 ? SMALL().map((r, i) => <path key={i} d={runD(r, 20, tS, true)} fill="none" stroke={RUNC[i]} strokeWidth={4} />) : null}
				{tL > 0.001 ? LARGE().map((r, i) => <path key={`L${i}`} d={runD(r, 2000, tL)} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} />) : null}
				{c1 >= 1 ? <g opacity={prog(f, wt + 62, 12)}><line x1={gx(CR, 1) + 20} y1={gy(CR, 13 / 20)} x2={gx(CR, 1) + 20} y2={gy(CR, 7 / 20)} stroke={RED.stroke} strokeWidth={4} /><line x1={gx(CR, 1) + 10} y1={gy(CR, 13 / 20)} x2={gx(CR, 1) + 30} y2={gy(CR, 13 / 20)} stroke={RED.stroke} strokeWidth={4} /><line x1={gx(CR, 1) + 10} y1={gy(CR, 7 / 20)} x2={gx(CR, 1) + 30} y2={gy(CR, 7 / 20)} stroke={RED.stroke} strokeWidth={4} /></g> : null}
				{f >= li ? <g opacity={prog(f, li, 14)}>
					<NucleonCluster cx={1420} cy={790} r={14} discs={clusterLayout(6, 7, 2)} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					<circle cx={1640} cy={790} r={70} fill={TEAL.soft} stroke={INK} strokeWidth={3} />
					<path d={`M1640,790 L1640,720 A70,70 0 0 1 1640,860 Z`} fill={GREY.soft} stroke={INK} strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			{SMALL_SEEDS.map((_, i) => <Readout key={i} x={1320} y={220 + i * 120} label={`run ${i + 1}: 20 nuclei, left`} value={`${tS > 0 ? remainingAt(SMALL()[i], Math.round(Math.min(tS, 1) * HL)) : 20}/20`} color={INK} w={480} opacity={prog(f, wt, 12)} />)}
			<HandTag x={gx(CR, 1) + 40} y={gy(CR, 0.8)} text="chance matters" at={wt + 70} size={34} color={RED.ink} />
			<Lbl x={gx(CR, 1.75)} y={gy(CR, 0.78)} at={mm + 20} color={TEAL.ink} size={28}>2000 nuclei: three runs, close to the curve</Lbl>
			<Lbl x={gx(CR, 1.75)} y={gy(CR, 0.7)} at={mm + 40} color={TEAL.ink} size={28}>10¹² nuclei: within 1 part in 10⁶</Lbl>
			<div style={{position: 'absolute', left: 1320, top: 590}}><Row at={dc} size={30}><AnswerBox at={dc + 4}>half-life: a property of the population</AnswerBox></Row></div>
			<HandTag x={gx(CR, 2.2)} y={gy(CR, 0.85)} text="the crowd" at={dc + 16} size={38} color={NAVY.ink} />
			<Lbl x={1560} y={900} at={li + 10} color={INK} size={28} anchor="middle">one nucleus: 50% after one t½</Lbl>
		</>
	);
};

// ---------- 12. a way to remember ----------
const ST12: GBox = {x: 200, y: 250, w: 1100, h: 420, tMax: 5};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const wi = cap(id, cue(id, 'what you started with'), 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Axes b={ST12} xLabel="number of half-lives" yLabel="N/N₀" ticks={[0, 1, 2, 3, 4]} size={26} />
				<Staircase b={ST12} f={f} brackets={1} />
			</FrameSvg>
			<HandTag x={1340} y={360} text="half of what's left" at={-30} size={38} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 200, top: 760, width: 1500, opacity: prog(f, wi, 14), background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 6px #fffdf8, inset 0 0 0 8.5px ${INK}`, padding: '12px 30px', fontFamily: 'Caveat', fontWeight: 700, fontSize: 56, color: INK, textAlign: 'center'}}>Each half-life halves what&apos;s left, not what you started with.</div>
		</>
	);
};
