// Scenes 7 to 11: the worked example in three stages (the gradient of the sodium data plot; Planck's constant, then the
// two-panel "same h" stage with the painted bar heater and its black-body curve beside the painted photocell and the
// sodium line; the intercepts on the zoomed-out plot), three graph traps and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {LPlate} from '../../physics/light/plates';
import {BBPlot, Heater} from '../../physics/light/thermal';
import {Axes2, Beam, PHOTOCELL, ax2, cellGeom} from '../../physics/light/photo';
import type {AxGeom} from '../../physics/light/photo';
import {TCOL, bbG} from '../phys-y12-m7-v09/parts';
import {planck} from '../../sims/blackbody';
import {B as B_WIEN} from '../phys-y12-m7-v09/common';
import {DATA_F, DATA_V, F0_NA, GRAD, HEAD, HEAD_SIZE, H_MEAS, INTERCEPT, PHI_NA, PHI_NA_J, CHECK_J, cap, cue} from './common';
import {AMBER, DataTable, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Strip, UV, VIOLET, fx, sci, usePulse} from './parts';
import {G5, KPlot, PHI2} from './s1';
import {hfEV} from './common';

type Pt = [number, number];
const vLine = (g: AxGeom, a: number, b: number) => { const {px, py} = ax2(g); const v = (x: number) => DATA_V[0] + GRAD * (x - DATA_F[0]) * 1e14; return `M${px(a)},${py(v(a))} L${px(b)},${py(v(b))}`; };
/** The sodium data plot: points (navy) plotted one by one from `at`, the best-fit line from `lineAt`. */
const DataPlot: React.FC<{g: AxGeom; f: number; at?: number; lineAt?: number; xTicks?: readonly number[]; yTicks?: readonly number[]; lineFrom?: number; lineTo?: number}> = ({g, f, at = -60, lineAt = -60, xTicks = [6, 7, 8, 9, 10], yTicks = [0.5, 1, 1.5, 2], lineFrom = 5.6, lineTo = 10.5}) => {
	// tick labels at 26 px (the smallest a student must read)
	const {px, py} = ax2(g);
	const d = prog(f, lineAt, 30);
	return (
		<g>
			<Axes2 g={g} xTicks={xTicks} yTicks={yTicks} fmtY={v => fx(v, 1)} tick={26} />
			{d > 0.001 ? <path d={vLine(g, lineFrom, lineFrom + (lineTo - lineFrom) * d)} stroke={INK} strokeWidth={5} fill="none" /> : null}
			{DATA_F.map((x, i) => (f >= at + i * 12 ? <circle key={i} cx={px(x)} cy={py(DATA_V[i])} r={11} fill={NAVY.stroke} stroke="#fff" strokeWidth={3} opacity={prog(f, at + i * 12, 8)} /> : null))}
		</g>
	);
};
const DP: AxGeom = {x: 170, y: 380, w: 620, h: 430, x0: 5, x1: 11, y0: 0, y1: 2.2};
const PlotLabels: React.FC<{g: AxGeom}> = ({g}) => <>
	<Lbl x={g.x - 14} y={g.y - 34} at={0} color={NAVY.ink} size={28}>V_stop (V)</Lbl>
	<Lbl x={g.x + g.w + 30} y={g.y + g.h + 74} at={0} color={INK} size={28} anchor="end">f (× 10¹⁴ Hz)</Lbl>
</>;

// ---------- 7. worked example: the gradient ----------
export const S07: React.FC = () => {
	const id = 'worked-gradient';
	const f = useCurrentFrame();
	const sod = cue(id, "Let's use the sodium data"), div = cue(id, 'Divide the equation by e'), e = cue(id, 'is h over e'), rise = cue(id, 'the rise is one point eight five minus zero point two zero'), run = cue(id, 'four point zero times ten to the fourteen hertz'), s = cap(id, cue(id, 'seconds'));
	const {px, py} = ax2(DP);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={170} at={2} size={34}>Find h, f₀ and ϕ for sodium.</Strip>
			<Strip x={96} y={250} at={6} size={34}>K_max = hf − ϕ;  eV_stop = K_max</Strip>
			<DataTable x={880} y={160} at={-30} size={30} />
			<Chip x={880} y={330} at={sod} size={28} color={NAVY.ink} border={NAVY.stroke}>e = 1.602 × 10⁻¹⁹ C (data sheet)</Chip>
			<FrameSvg>
				<DataPlot g={DP} f={f} at={sod} lineAt={sod + 70} />
				{f >= rise ? <g opacity={prog(f, rise, 12)}><line x1={px(10) + 26} y1={py(DATA_V[0])} x2={px(10) + 26} y2={py(DATA_V[4])} stroke={ORANGE.stroke} strokeWidth={5} /><line x1={px(6)} y1={py(DATA_V[0])} x2={px(10) + 26} y2={py(DATA_V[0])} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
				{f >= run ? <line x1={px(6)} y1={py(DATA_V[0]) + 30} x2={px(10)} y2={py(DATA_V[0]) + 30} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, run, 12)} /> : null}
			</FrameSvg>
			<PlotLabels g={DP} />
			<Lbl x={DP.x + 20} y={DP.y + DP.h + 110} at={sod} color={GREY.ink} size={26}>data: site worked example (sodium)</Lbl>
			<Lbl x={px(10) + 40} y={py(1.0)} at={rise} color={ORANGE.ink} size={30}>rise</Lbl>
			<Lbl x={px(7.6)} y={py(DATA_V[0]) + 66} at={run} color={NAVY.ink} size={30}>run</Lbl>
			<HandTag x={px(7) - 120} y={py(1.4)} text="gradient = h/e" at={e + 4} size={32} color={INK} />
			<div style={{position: 'absolute', left: 880, top: 440, display: 'flex', flexDirection: 'column', gap: 18, width: 940}}>
				<Row at={div - 4} ageAt={rise} size={52} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>V_stop = (h/e) f − ϕ/e</span></Row>
				<Row at={rise} ageAt={s} size={40} oldSize={32}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>rise = 1.85 − 0.20 = 1.65 V</span></Row>
				<Row at={run} ageAt={s} size={40} oldSize={32}><span style={{whiteSpace: 'nowrap', color: NAVY.ink}}>run = (10.0 − 6.0) × 10¹⁴ = 4.0 × 10¹⁴ Hz</span></Row>
				<Row at={s - 6} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={s}><span>{`gradient = 1.65 / (4.0 × 10¹⁴) = ${sci(GRAD, 3)} V s (≈ ${sci(GRAD, 2)})`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1350} y={318} at={e + 10} crossAt={e + 30} size={30} caption="V_stop graph: h/e">gradient = h</CrossedChip>
			<HandTag x={1500} y={900} text="keep 4.125" at={s + 10} size={32} color={INK} />
		</>
	);
};

// ---------- 8. worked example: Planck's constant ----------
const HP: Place8 = {x: 120, y: 330, w: 620};
type Place8 = {x: number; y: number; w: number};
export const S08: React.FC = () => {
	const id = 'worked-planck';
	const f = useCurrentFrame();
	const ge = cue(id, "Planck's constant is the gradient times e"), s = cue(id, 'seconds'), ds = cue(id, 'six point six two six'), glow = cue(id, 'glowing hot objects'), met = cue(id, 'electrons leaving a metal'), real = cap(id, cue(id, 'real'));
	const sw = prog(f, glow, 20);
	const g8 = bbG(150, 620, 640, 230, 0, 6000, planck(B_WIEN / 1500, 1500), 1);
	const cp: Place8 = {x: 1080, y: 300, w: 200};
	const cg = cellGeom(cp);
	const G8: AxGeom = {x: 1360, y: 560, w: 420, h: 300, x0: 5, x1: 11, y0: 0, y1: 2.2};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={170} at={-30} size={32}><span>{`gradient = ${sci(GRAD, 3)} V s`}</span></Strip>
			{sw < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<FrameSvg><DataPlot g={DP} f={f} /></FrameSvg>
				<PlotLabels g={DP} />
				<div style={{position: 'absolute', left: 880, top: 330, display: 'flex', flexDirection: 'column', gap: 18, width: 940}}>
					<Row at={ge - 4} ageAt={s} size={52} oldSize={36}><span style={{whiteSpace: 'nowrap'}}>h = gradient × e</span></Row>
					<Row at={s - 6} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={s}><span>{`h = (${sci(GRAD, 3)})(1.602 × 10⁻¹⁹) = ${sci(H_MEAS, 3)} ≈ ${sci(H_MEAS, 1)} J s`}</span></AnswerBox></Row>
				</div>
				<Chip x={880} y={640} at={s + 10} size={40} color={INK} border={INK}>{`h = ${sci(H_MEAS, 1)} J s`}</Chip>
				<Chip x={1320} y={640} at={-30} size={40} color={INK} border={INK}>ϕ = ?</Chip>
				<Chip x={880} y={740} at={ds} size={30} color={GREY.ink}>data sheet: 6.626 × 10⁻³⁴ J s ✓</Chip>
			</div> : null}
			{sw > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<FrameSvg>
					<rect x={100} y={240} width={760} height={680} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={1040} y={240} width={780} height={680} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, met, 14)} />
					<Heater p={{x: HP.x + 60, y: 300, w: 500}} glow={0.85} color={'#e36a1f'} />
					<BBPlot g={g8} curves={[{T: 1500, color: TCOL[1000], width: 5}]} ticks={[2000, 4000, 6000]} band={1} />
					<g opacity={prog(f, met, 14)}>
						<LPlate spec={PHOTOCELL} p={cp} />
						<Beam a={[cg.cathode[0] + 200, cg.cathode[1] - 80]} b={cg.cathode} wa={6} wb={14} color={UV} />
						<DataPlot g={G8} f={f} xTicks={[6, 8, 10]} yTicks={[1, 2]} />
					</g>
				</FrameSvg>
				<Lbl x={140} y={290} at={glow} color={INK} size={30}>glowing hot objects (last time)</Lbl>
				<Lbl x={g8.x + g8.w - 10} y={g8.y + 10} at={glow} color={GREY.ink} size={26} anchor="end">black-body curve, 1500 K (own scale)</Lbl>
				<Lbl x={1080} y={290} at={met} color={INK} size={30}>electrons leaving a metal</Lbl>
				<Lbl x={760} y={560} at={glow + 10} color={AMBER.ink} size={64}>h</Lbl>
				<Lbl x={1700} y={520} at={met + 10} color={AMBER.ink} size={64}>h</Lbl>
				<Lbl x={950} y={600} at={met + 20} color={AMBER.ink} size={110} anchor="middle">=</Lbl>
				<HandTag x={760} y={990 - 50} text="same h, two unrelated effects" at={real + 6} size={34} color={AMBER.ink} marks={[{kind: 'circle', cx: 950, cy: 570, rx: 70, ry: 60}]} />
			</div> : null}
		</>
	);
};

// ---------- 9. worked example: threshold and work function ----------
const G9: AxGeom = {x: 200, y: 280, w: 660, h: 580, x0: 0, x1: 11, y0: -2.6, y1: 2.2};
export const S09: React.FC = () => {
	const id = 'worked-intercepts';
	const f = useCurrentFrame();
	const ext = cue(id, 'Extend the line down to zero stopping voltage'), fr = cue(id, 'frequency'), vert = cue(id, 'Extend it to the vertical axis'), v = cue(id, 'electron volts'), j = cue(id, 'joules'), val = cap(id, cue(id, 'value'));
	const {px, py} = ax2(G9);
	const f0 = F0_NA / 1e14;
	const e1 = prog(f, ext, 30), e2 = prog(f, vert, 36);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={170} at={-30} size={32}><span>{`h = ${sci(H_MEAS, 3)} ≈ ${sci(H_MEAS, 1)} J s`}</span></Strip>
			<FrameSvg>
				<DataPlot g={G9} f={f} xTicks={[2, 4, 6, 8, 10]} yTicks={[-2, -1, 1, 2]} lineFrom={6} lineTo={10.5} />
				{e1 > 0.001 ? <path d={vLine(G9, 6 - (6 - f0) * e1, 6)} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" fill="none" /> : null}
				{e2 > 0.001 ? <path d={vLine(G9, f0 - f0 * e2, f0)} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" fill="none" /> : null}
			</FrameSvg>
			<PlotLabels g={G9} />
			<HandTag x={px(f0) + 20} y={py(0) + 60} text={`f₀ ≈ ${sci(F0_NA, 1)} Hz`} at={fr} size={30} color={SLATE.ink} marks={[{kind: 'circle', cx: px(f0), cy: py(0), rx: 26, ry: 26}]} />
			<HandTag x={px(0) + 24} y={py(INTERCEPT) + 10} text="−ϕ/e" at={vert + 36} size={32} color={SLATE.ink} marks={[{kind: 'circle', cx: px(0), cy: py(INTERCEPT), rx: 26, ry: 26}]} />
			<div style={{position: 'absolute', left: 940, top: 250, display: 'flex', flexDirection: 'column', gap: 14, width: 880}}>
				<Row at={fr - 4} ageAt={vert} size={36} oldSize={30} style={{whiteSpace: 'normal'}}><AnswerBox at={fr}><span>{`f₀ = 6.0 × 10¹⁴ − 0.20 / (${sci(GRAD, 3)}) = ${sci(F0_NA, 3)} ≈ ${sci(F0_NA, 1)} Hz`}</span></AnswerBox></Row>
				<Row at={vert + 10} ageAt={v} size={38} oldSize={30} style={{whiteSpace: 'normal'}}><span>{`intercept = 0.20 − (${sci(GRAD, 3)})(6.0 × 10¹⁴) = ${fx(INTERCEPT, 3)} V ≈ ${fx(INTERCEPT, 2)} V`}</span></Row>
				<Row at={v - 6} ageAt={j} size={46} oldSize={34} style={{whiteSpace: 'normal'}}><AnswerBox at={v}><span style={{color: SLATE.ink}}>{`−ϕ/e = ${fx(INTERCEPT, 3)} V → ϕ = ${fx(PHI_NA, 3)} eV ≈ ${fx(PHI_NA, 2)} eV`}</span></AnswerBox></Row>
				<Row at={j - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={j}><span>{`ϕ = ${fx(PHI_NA, 3)} × 1.602 × 10⁻¹⁹ = ${sci(PHI_NA_J, 3)} ≈ ${sci(PHI_NA_J, 2)} J`}</span></AnswerBox></Row>
				<Row at={j + 20} size={28} style={{whiteSpace: 'normal'}}><span>{`check: hf₀ = (${sci(H_MEAS, 3)})(${sci(F0_NA, 3)}) = ${sci(CHECK_J, 3)} J ✓`}</span></Row>
			</div>
			<CrossedChip x={96} y={890 - 20} at={v + 16} crossAt={v + 36} size={28} caption="ϕ is the size">ϕ = −2.28 eV</CrossedChip>
			<Chip x={1340} y={850} at={val} size={28} color={GREY.ink}>sodium: ϕ = 2.28 eV (site value) ✓</Chip>
		</>
	);
};

// ---------- 10. three graph traps ----------
const Mini: React.FC<{x: number; y: number; kind: 'lambda' | 'f' | 'int' | 'both'; f: number}> = ({x, y, kind}) => {
	const g: AxGeom = {x, y, w: 300, h: 150, x0: 0, x1: 10, y0: kind === 'int' ? -3 : 0, y1: 4};
	const {px, py} = ax2(g);
	const lam = Array.from({length: 40}, (_, i) => { const l = 2 + i * 0.2; const k = 12 / l - 1.2; return `${i ? 'L' : 'M'}${px(l)},${py(Math.max(0, Math.min(4, k)))}`; }).join(' ');
	return (
		<g>
			<Axes2 g={g} width={3} />
			{kind === 'lambda' ? <path d={lam} stroke={INK} strokeWidth={4} fill="none" /> : <path d={`M${px(kind === 'int' ? 0 : 4)},${py(kind === 'int' ? -2.4 : 0)} L${px(10)},${py(kind === 'int' ? 3.6 : 3.6)}`} stroke={INK} strokeWidth={4} fill="none" strokeDasharray={kind === 'int' ? '0' : '0'} />}
		</g>
	);
};
export const S10: React.FC = () => {
	const id = 'graph-traps';
	const f = useCurrentFrame();
	const fq = cue(id, 'Plot against frequency, not wavelength'), sign = cue(id, 'sign'), cur = cap(id, cue(id, 'current'));
	const R = [210, 450, 690];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1728} height={720} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<g opacity={prog(f, 4, 12)}><Mini x={160} y={R[0]} kind="lambda" f={f} /><Mini x={560} y={R[0]} kind="f" f={f} /></g>
				<g opacity={prog(f, sign - 30, 12)}><Mini x={160} y={R[1] + 20} kind="int" f={f} /></g>
				<g opacity={prog(f, cur - 40, 12)}><Mini x={160} y={R[2] + 20} kind="f" f={f} /></g>
			</FrameSvg>
			<Lbl x={170} y={R[0] - 4} at={4} color={INK} size={26}>K_max against λ</Lbl>
			<Lbl x={570} y={R[0] - 4} at={4} color={INK} size={26}>K_max against f</Lbl>
			<HandTag x={0} y={0} at={fq + 10} color={SLATE.stroke} marks={[{kind: 'cross', cx: 310, cy: R[0] + 80, size: 90}]} />
			<Lbl x={1000} y={R[0] + 80} at={fq} color={INK} size={40}>Plot against f, not λ: only f gives a line.</Lbl>
			<HandTag x={1000} y={R[0] + 140} text="f, not λ" at={fq + 20} size={32} color={SLATE.ink} />
			<Lbl x={170} y={R[1] + 230} at={sign - 30} color={SLATE.ink} size={30}>−ϕ</Lbl>
			<Lbl x={1000} y={R[1] + 100} at={sign - 30} color={INK} size={40}>The work function is the size of the intercept.</Lbl>
			<HandTag x={1000} y={R[1] + 160} text="ϕ = size of intercept (positive)" at={sign + 6} size={32} color={SLATE.ink} marks={[{kind: 'arrow', from: [990, R[1] + 160], to: [190, R[1] + 190], bend: 0.1}]} />
			<Lbl x={300} y={R[2] + 100} at={cur - 40} color={NAVY.ink} size={28}>dim</Lbl>
			<Lbl x={400} y={R[2] + 60} at={cur - 30} color={NAVY.ink} size={28}>bright</Lbl>
			<Lbl x={1000} y={R[2] + 100} at={cur - 40} color={INK} size={40}>Brighter light never moves the line.</Lbl>
			<HandTag x={1000} y={R[2] + 160} text="intensity: current only" at={cur} size={32} color={NAVY.ink} />
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const slope = cue(id, 'The slope is h, for every metal'), met = cap(id, cue(id, 'metal', 2));
	const p1 = usePulse(slope, 30), p2 = usePulse(met, 30);
	const {px, py} = ax2(G5);
	const f0 = (2.28 * 1.602e-19) / 6.626e-34 / 1e14, f02 = (PHI2 * 1.602e-19) / 6.626e-34 / 1e14;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<KPlot f={f} ext={1} tri={1} m2={1} tri2={1} />
				{p1 > 0.001 ? [[8, 2.28, INK], [9, PHI2, VIOLET.stroke]].map(([a, p, c], i) => <path key={i} d={`M${px(a as number)},${py(hfEV(a as number) - (p as number))} L${px((a as number) + 2)},${py(hfEV(a as number) - (p as number))} L${px((a as number) + 2)},${py(hfEV((a as number) + 2) - (p as number))}`} fill="none" stroke={c as string} strokeWidth={4 + 6 * p1} />) : null}
				{[[f0, 0], [f02, 0], [0, -2.28], [0, -PHI2]].map(([x, y], i) => <circle key={i} cx={px(x)} cy={py(y)} r={9 + 9 * p2} fill={i % 2 ? VIOLET.stroke : INK} />)}
			</FrameSvg>
			<Lbl x={G5.x - 16} y={G5.y - 34} at={0} color={ORANGE.ink} size={30}>K_max</Lbl>
			<Lbl x={G5.x + G5.w + 10} y={py(0) + 80} at={0} color={INK} size={30} anchor="end">f</Lbl>
			<div style={{position: 'absolute', left: 1240, top: 250, width: 580}}>
				<MemoryCard at={slope - 10} main={<><span style={{color: INK}}>Slope is h, for every metal.</span> <span style={{color: SLATE.ink}}>The intercepts belong to the metal.</span></>} />
			</div>
		</>
	);
};
export type {Pt};
