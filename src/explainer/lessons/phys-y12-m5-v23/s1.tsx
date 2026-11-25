// Scenes 1 to 5: the vertical launch stage (opening on last time's frame; radial field motion runs at 5 and
// 10 km/s with live height and the constant-g estimate), the energy trade (per-kilogram bars riding the 10 km/s
// run, the well inset with its finite climb), the threshold (E = 0 at infinity carried back to launch, the
// derivation), Earth's value (full-width working) and escape versus orbit (the two formulas and the arrows).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {V22FinalFrame} from '../phys-y12-m5-v22/s3';
import {GM, GM_R, HEAD, HEAD_SIZE, H_MGH, MOON, ORB400, R400, RE, RUNS, SLIP4, VESC, VORB, apexT, cue, ePerKg, hMax, holdIf, mono, runAt} from './common';
import {Bars, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, Probe, Ring, Satellite, T, TEAL, VIOLET, VecArrow, Zero, comma, fx, sci, toS} from './parts';
import type {LS} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string; out?: number}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
/** A short horizontal height marker with a label, at a screen height. */
const Marker: React.FC<{x: number; y: number; color: string; dash?: string}> = ({x, y, color, dash}) => <line x1={x - 50} y1={y} x2={x + 50} y2={y} stroke={color} strokeWidth={4} strokeDasharray={dash} />;

// ---------- the launch stage (scenes 1, 2) ----------
export const TOP = 720;
/** Stage with Earth's top fixed at y = TOP and radius R px. */
export const stage = (R: number): LS => ({cx: 400, cy: TOP + R, R});
export const ZOOM_OUT = 130;
/** The probe on a run at time t, drawn on a stage (dish outwards, i.e. upright for a vertical launch). */
export const RunProbe: React.FC<{st: LS; v: number; t: number; w?: number}> = ({st, v, t, w = 60}) => {
	const s = runAt(RUNS[v], t);
	const [x, y] = toS(st, s.x, s.y);
	return <Probe x={x} y={y - 16} w={w} />;
};

// ---------- 1. hook: does it ever not come back? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const launchP = cue(id, 'Launch a probe'), noAir = cue(id, 'no air'), five = cue(id, 'At five kilometres'), before = cue(id, 'before falling back'), ten = cue(id, 'At ten kilometres'), twenty = cue(id, 'twenty-five thousand'), still = cue(id, 'still falls back'), is = cue(id, 'Is there a launch'), inf = cue(id, 'have to be infinite'), think = cue(id, 'Have a think');
	const h = holdIf(id);
	if (f < 1) return <V22FinalFrame />;
	const fadeOld = prog(f, 1, 24);
	const shrink = prog(f, 1, 40);
	const R = kf(f, mono([[8, 140], [60, 1000], [ten, 1000], [ten + 36, ZOOM_OUT]], 6));
	const st = stage(R);
	const r1 = RUNS[5000], r2 = RUNS[10000];
	const ap1 = apexT(r1), ap2 = apexT(r2);
	const l1 = kf(f, mono([[five, 0], [before - 10, ap1], [before + 40, r1.duration]], 6), false);
	const l2 = kf(f, mono([[ten + 36, 0], [twenty + 30, ap2], [still + 30, r2.duration]], 6), false);
	const second = f >= ten + 36;
	const s = second ? runAt(r2, l2) : runAt(r1, l1);
	const v = second ? 10000 : 5000;
	const yOf = (hh: number) => st.cy - ((RE + hh) / RE) * st.R;
	const h1 = hMax(5000), h2 = hMax(10000);
	const showH1 = f >= before - 10, showH2 = f >= twenty + 30;
	const flight = f >= five;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - fadeOld, clipPath: 'inset(160px 0 0 0)'}}><V22FinalFrame /></div>
			{f < 70 ? <div style={{position: 'absolute', inset: 0, clipPath: 'inset(250px 100px 300px 990px)', transform: `scale(${1 - 0.6 * shrink})`, transformOrigin: '1824px 200px', opacity: 1 - prog(f, 30, 36)}}><V22FinalFrame /></div> : null}
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={fadeOld}>
					<line x1={st.cx} y1={TOP - 30} x2={st.cx} y2={190} stroke={INK} strokeWidth={3} strokeDasharray="12 9" opacity={0.9} />
				</g>
				<Earth cx={st.cx} cy={st.cy} d={2 * R} />
				{showH1 ? <g><Marker x={st.cx} y={yOf(h1)} color={TEAL.stroke} /><Marker x={st.cx} y={yOf(H_MGH)} color={GREY.stroke} dash="8 6" /></g> : null}
				{showH2 ? <Marker x={st.cx} y={yOf(h2)} color={TEAL.stroke} /> : null}
				{flight ? <RunProbe st={st} v={v} t={second ? l2 : l1} w={60} /> : <Probe x={st.cx} y={TOP - 18} w={70} />}
				{f >= five && f < five + 40 ? <VecArrow x={st.cx + 46} y={TOP - 20} dx={0} dy={-120} color={TEAL.stroke} width={7} head={20} at={five} out={five + 28} /> : null}
				{f >= ten + 36 && f < ten + 80 ? <VecArrow x={st.cx + 46} y={TOP - 20} dx={0} dy={-170} color={TEAL.stroke} width={7} head={20} at={ten + 36} out={ten + 68} /> : null}
				<Ring cx={st.cx + 260} cy={yOf(h2) + 10} rx={230} ry={40} at={is + 10} color={GREY.stroke} />
			</FrameSvg>
			{showH1 ? <Lbl x={st.cx + 70} y={yOf(h1) + 10} at={before - 10} out={ten} color={TEAL.ink} size={30}>h = {sci(h1, 1)} m (about 1,600 km)</Lbl> : null}
			{showH1 ? <Lbl x={st.cx + 70} y={yOf(H_MGH) + 34} at={before} out={ten} color={GREY.ink} size={28}>mgh estimate: {sci(H_MGH, 1)} m</Lbl> : null}
			<HandTag x={st.cx + 70} y={yOf(H_MGH) + 84} text="constant g underestimates the climb" at={before + 16} out={ten} size={28} color={GREY.ink} />
			{showH2 ? <Lbl x={st.cx + 70} y={yOf(h2) + 10} at={twenty + 30} color={TEAL.ink} size={30}>h = {sci(h2, 1)} m (about 25,000 km)</Lbl> : null}
			{f >= ten + 36 ? <Lbl x={st.cx + 70} y={yOf(h1) + 10} at={ten + 40} color={TEAL.ink} size={26}>1.6 × 10⁶ m</Lbl> : null}
			<HandTag x={st.cx + 70} y={yOf(h2) + 60} text="still falls back" at={still} size={30} color={GREY.ink} />
			<Strip x={1000} y={186} at={noAir} size={32}>straight up | no air | no engine after launch</Strip>
			<Readouts x={1000} y={266} w={520} size={48} at={five} rows={[
				{label: 'launch speed', value: `${v / 1000} km s⁻¹`, color: TEAL.ink},
				{label: 'height', value: `${comma(Math.max(0, s.h) / 1000)} km`, color: NAVY.ink},
			]} />
			<HandTag x={1020} y={470} text="faster" at={ten} size={32} color={TEAL.ink} />
			<Lbl x={1100} y={930} at={launchP} color={GREY.ink} size={28}>radial launch on the field motion engine; time sped up</Lbl>
			<Enter at={is} style={{position: 'absolute', left: 1000, top: 560, width: 824}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(38, INK, 800), whiteSpace: 'normal'}}>Never comes back: at what speed? <span style={{opacity: prog(f, inf, 10)}}>Infinite?</span></div>
					<div style={{display: 'flex', gap: 12, marginTop: 10}}>
						{['infinite', 'a finite speed', 'no such speed'].map((c, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', ...DISPLAY(36, INK, 700), opacity: prog(f, inf + 10 + i * 8, 10)}}>{c}</div>)}
					</div>
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1740} y={860} r={46} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. trading kinetic for potential energy ----------
const B2 = {x: 660, y0: 440, s: 300 / GM_R};
const ST2 = stage(ZOOM_OUT);
/** The well inset: U per kg against r from R out, the rim (zero) at the top. */
const WellInset: React.FC<{x: number; y: number; w: number; h: number; at: number; bracketAt: number}> = ({x, y, w, h, at, bracketAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const rMax = 12 * RE;
	const px = (r: number) => x + ((r - RE) / (rMax - RE)) * w, py = (u: number) => y + (u / -GM_R) * h;
	const d = Array.from({length: 121}, (_, i) => { const r = RE + ((rMax - RE) * i) / 120; return `${i ? 'L' : 'M'}${px(r).toFixed(1)},${py(-GM / r).toFixed(1)}`; }).join(' ');
	const b = prog(f, bracketAt, 14);
	return (
		<g opacity={o}>
			<line x1={x - 10} y1={y} x2={x + w + 20} y2={y} stroke={INK} strokeWidth={4} />
			<path d={d} fill="none" stroke={VIOLET.stroke} strokeWidth={5} />
			<T x={x + w + 20} y={y - 14} size={28} anchor="end">U = 0 at infinity</T>
			<T x={x + 10} y={y + h + 40} size={28} color={VIOLET.ink}>U at the surface</T>
			{b > 0 ? <g opacity={b}>
				<line x1={x - 24} y1={y} x2={x - 24} y2={y + h} stroke={NAVY.stroke} strokeWidth={5} />
				<line x1={x - 36} y1={y} x2={x - 12} y2={y} stroke={NAVY.stroke} strokeWidth={5} />
				<line x1={x - 36} y1={y + h} x2={x - 12} y2={y + h} stroke={NAVY.stroke} strokeWidth={5} />
			</g> : null}
		</g>
	);
};
export const S02: React.FC = () => {
	const id = 'energy-trade';
	const f = useCurrentFrame();
	const think = cue(id, 'Think about'), only = cue(id, 'With gravity the only'), same = cue(id, 'stays the same'), climbs = cue(id, 'As it climbs'), each = cue(id, 'Each extra kilometre'), runs = cue(id, 'runs out'), stops = cue(id, 'stops and falls back'), rises = cue(id, 'only rises to zero'), needs = cue(id, 'So the probe needs'), finite = cue(id, 'finite climb');
	const run = RUNS[10000], ap = apexT(run);
	const t = kf(f, mono([[climbs - 20, 0], [stops, ap], [stops + 70, run.duration]], 6), false);
	const s = runAt(run, t);
	const k = 0.5 * s.v * s.v, u = -GM / s.r, e = ePerKg(10000);
	const yOf = (hh: number) => ST2.cy - ((RE + hh) / RE) * ST2.R;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={ST2.cx} cy={ST2.cy} d={2 * ST2.R} />
				<Marker x={ST2.cx} y={yOf(hMax(10000))} color={TEAL.stroke} />
				<RunProbe st={ST2} v={10000} t={t} w={60} />
				<Zero x1={B2.x - 20} x2={B2.x + 230} y={B2.y0} opacity={prog(f, think, 12)} />
				<Bars x={B2.x} y0={B2.y0} s={B2.s} k={k} u={u} e={e} kAt={think} uAt={think + 6} eAt={only} w={54} gap={16} size={30} />
				<Ring cx={B2.x + 2 * 70 + 27} cy={B2.y0 - (e * B2.s) / 2} rx={46} ry={(-e * B2.s) / 2 + 30} at={same + 10} color={NAVY.stroke} />
				<WellInset x={1080} y={640} w={680} h={230} at={each} bracketAt={finite} />
			</FrameSvg>
			<Lbl x={B2.x + 100} y={B2.y0 + 360} at={think} color={INK_SOFT} anchor="middle" size={28}>per kilogram</Lbl>
			<Lbl x={ST2.cx + 60} y={yOf(hMax(10000)) + 10} at={-30} color={TEAL.ink} size={28}>top of the 10 km s⁻¹ climb</Lbl>
			<Readouts x={1000} y={186} w={824} size={44} at={climbs - 20} rows={[
				{label: 'speed', value: `${fx(s.v / 1000, 1)} km s⁻¹`, color: TEAL.ink},
				{label: 'height', value: `${comma(Math.max(0, s.h) / 1000)} km`, color: NAVY.ink},
			]} />
			<div style={{position: 'absolute', left: 1000, top: 350, display: 'flex', flexDirection: 'column', gap: 6, width: 824}}>
				<Row at={only} ageAt={each} size={36} oldSize={30}><span style={{color: NAVY.ink}}>gravity only: E = K + U stays the same</span></Row>
				<Row at={climbs} ageAt={each} size={36} oldSize={30}>climbing: <span style={{color: ORANGE.ink}}>K</span> → <span style={{color: VIOLET.ink}}>U</span>, so it slows</Row>
				<Row at={each} size={34} style={{whiteSpace: 'normal'}}>each km costs less: the pull weakens</Row>
			</div>
			<HandTag x={B2.x - 30} y={B2.y0 - 60} text="K runs out" at={runs} size={30} color={ORANGE.ink} anchor="end" />
			<Lbl x={B2.x - 20} y={B2.y0 + 410} at={stops} color={INK} size={30}>U still below 0: it falls back</Lbl>
			<HandTag x={1100} y={600} text="U only rises to 0" at={rises} size={30} color={VIOLET.ink} />
			<Lbl x={1040} y={760} at={finite} color={NAVY.ink} size={32}>finite climb: GMm/R ({sci(GM_R)} J kg⁻¹)</Lbl>
			<Row at={needs} size={34} style={{position: 'absolute', left: 1000, top: 540, width: 824}}>enough K for a finite climb, not infinite</Row>
		</>
	);
};

// ---------- 3. the threshold: zero total energy ----------
const E3 = {cx: 240, cy: 860, d: 260};
const B3 = {x: 470, s: 170 / GM_R, yInf: 330, yLaunch: 690};
export const S03: React.FC = () => {
	const id = 'threshold';
	const f = useCurrentFrame();
	const slowest = cue(id, 'The slowest escape'), zeroSpeed = cue(id, 'zero speed left'), out = cue(id, 'Out there'), kz = cue(id, 'kinetic energy is zero'), uz = cue(id, 'potential energy is zero'), tz = cue(id, 'so its total energy is zero'), doesnt = cue(id, "Total energy doesn't"), launchZ = cue(id, 'zero at launch'), atLaunch = cue(id, "At launch, that's"), like = cue(id, "It's like having"), cancels = cue(id, 'cancels'), vsq = cue(id, 'So v squared'), escIs = cue(id, 'the escape velocity is');
	const climb = prog(f, slowest, Math.max(40, zeroSpeed + 30 - slowest));
	const py = lerp(E3.cy - E3.d / 2 - 20, 210, Math.pow(climb, 0.6));
	const flat = (y: number, x: number, c: string, at: number) => <line x1={x} y1={y} x2={x + 54} y2={y} stroke={c} strokeWidth={6} opacity={prog(f, at, 12)} />;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={E3.cx} y1={E3.cy - E3.d / 2 - 30} x2={E3.cx} y2={200} stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
				<Earth cx={E3.cx} cy={E3.cy} d={E3.d} />
				<Probe x={E3.cx} y={py} w={lerp(60, 26, climb)} />
				{/* at infinity: every bar zero */}
				<Zero x1={B3.x - 20} x2={B3.x + 230} y={B3.yInf} opacity={prog(f, out, 12)} />
				{flat(B3.yInf - 3, B3.x, ORANGE.stroke, kz)}{flat(B3.yInf + 3, B3.x + 70, VIOLET.stroke, uz)}{flat(B3.yInf, B3.x + 140, NAVY.stroke, tz)}
				{/* at launch: K up, U down, E = 0 */}
				<Zero x1={B3.x - 20} x2={B3.x + 230} y={B3.yLaunch} opacity={prog(f, slowest + 20, 12)} />
				<g opacity={prog(f, slowest + 20, 12) * (1 - prog(f, atLaunch, 12))}>
					<rect x={B3.x} y={B3.yLaunch - GM_R * B3.s} width={54} height={GM_R * B3.s} fill="none" stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<rect x={B3.x + 70} y={B3.yLaunch} width={54} height={GM_R * B3.s} fill="none" stroke={VIOLET.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<T x={B3.x + 27} y={B3.yLaunch - 70} size={34} anchor="middle" color={ORANGE.ink}>?</T>
					<T x={B3.x + 97} y={B3.yLaunch + 100} size={34} anchor="middle" color={VIOLET.ink}>?</T>
				</g>
				<Bars x={B3.x} y0={B3.yLaunch} s={B3.s} k={GM_R} u={-GM_R} e={0} kAt={atLaunch} uAt={atLaunch + 8} eAt={1e9} w={54} gap={16} size={30} />
				{flat(B3.yLaunch, B3.x + 140, NAVY.stroke, launchZ)}
				{f >= launchZ ? <VecArrow x={B3.x + 167} y={B3.yInf + 30} dx={0} dy={B3.yLaunch - B3.yInf - 60} color={NAVY.stroke} width={6} head={20} at={launchZ} /> : null}
			</FrameSvg>
			<Lbl x={E3.cx + 24} y={206} at={-30} color={INK} size={44}>∞</Lbl>
			<Lbl x={B3.x + 100} y={B3.yInf - 50} at={out} color={INK} anchor="middle" size={30}>at infinity</Lbl>
			<Lbl x={B3.x + 260} y={B3.yInf + 10} at={tz} color={NAVY.ink} size={30}>E = 0</Lbl>
			<Lbl x={B3.x + 100} y={B3.yLaunch - 250} at={slowest + 20} color={INK} anchor="middle" size={30}>at launch</Lbl>
			<Lbl x={B3.x + 260} y={B3.yLaunch + 10} at={launchZ} color={NAVY.ink} size={30}>E = 0</Lbl>
			<HandTag x={B3.x + 190} y={(B3.yInf + B3.yLaunch) / 2} text="E = 0 at the start too" at={launchZ + 10} size={30} color={NAVY.ink} />
			<Row at={slowest} size={36} style={{position: 'absolute', left: 1000, top: 186}}>slowest escape: reach ∞ with zero speed left</Row>
			<Strip x={1000} y={250} at={out} size={32} w={824} border={NAVY.stroke} color={NAVY.ink} bg={NAVY.soft}>at infinity (just escaping): K = 0, U = 0, E = 0</Strip>
			<Row at={doesnt} size={34} style={{position: 'absolute', left: 1000, top: 330}}>E does not change, so at launch: E = 0</Row>
			<div style={{position: 'absolute', left: 1000, top: 400, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={atLaunch} ageAt={vsq} size={52} oldSize={38}>½<MarkSpan kind="strike" at={cancels + 6} color={INK}>m</MarkSpan>v² − GM<MarkSpan kind="strike" at={cancels + 12} color={INK}>m</MarkSpan>/r = 0</Row>
				<Row at={like} ageAt={vsq} size={52} oldSize={38}>½mv² = GMm/r</Row>
				<Row at={vsq} ageAt={escIs} size={52} oldSize={40}>v² = 2GM/r</Row>
				<Row at={escIs} size={60}><AnswerBox at={escIs + 12}><span style={{color: TEAL.ink}}>v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(<MarkSpan kind="circle" at={escIs + 30} color={NAVY.stroke}>2</MarkSpan>GM/r)</span></AnswerBox></Row>
			</div>
			<HandTag x={1560} y={540} text="exactly enough for the climb" at={like + 10} size={30} color={NAVY.ink} />
			<HandTag x={1560} y={470} text="m cancels" at={cancels + 14} size={30} color={GREY.ink} />
			<HandTag x={1000} y={860} text="the 2 is inside the root" at={escIs + 20} size={32} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. Earth's escape velocity ----------
const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number}> = ({x, y, w, at, lines, size = 32}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800), whiteSpace: 'normal'}}>{t}</div>)}
		</div>
	</Enter>
);
export const S04: React.FC = () => {
	const id = 'earth-value';
	const f = useCurrentFrame();
	const root = cue(id, 'the square root of two times'), gives = cue(id, 'That gives about'), eleven = cue(id, 'or eleven point two'), nasa = cue(id, 'NASA quotes'), forty = cue(id, 'forty thousand'), moon = cue(id, 'From the Moon');
	const E4 = {cx: 330, cy: 760, d: 320};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={-30} size={34}>Find the escape velocity from Earth's surface.</Strip>
			<Strip x={960} y={176} at={-20} size={36} border={TEAL.stroke} color={TEAL.ink}>v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(2GM/r)</Strip>
			<Givens x={96} y={256} w={600} at={-10} lines={[`GM = ${sci(GM, 3)} m³ s⁻²`, <>(data sheet G and M<sub style={{fontSize: '0.6em'}}>E</sub>)</>, <>r = R<sub style={{fontSize: '0.6em'}}>E</sub> = {sci(RE, 3)} m</>]} />
			<FrameSvg>
				<Earth cx={E4.cx} cy={E4.cy} d={E4.d} />
				<Probe x={E4.cx} y={E4.cy - E4.d / 2 - 16} w={56} />
				{f >= eleven ? <VecArrow x={E4.cx + 40} y={E4.cy - E4.d / 2 - 20} dx={0} dy={-170} color={TEAL.stroke} width={8} head={22} at={eleven} /> : null}
				<Ring cx={1210} cy={412} rx={400} ry={48} at={eleven + 30} color={TEAL.stroke} />
			</FrameSvg>
			<HandTag x={140} y={520} text="data sheet GM" at={root + 10} size={30} color={GREY.ink} />
			<Lbl x={E4.cx + 60} y={E4.cy - E4.d / 2 - 140} at={eleven + 10} color={TEAL.ink} size={32}>11.2 km s⁻¹</Lbl>
			<HandTag x={E4.cx + 60} y={E4.cy - E4.d / 2 - 90} text="11.2 km every second" at={eleven + 24} size={30} color={TEAL.ink} />
			<div style={{position: 'absolute', left: 760, top: 270, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={root} ageAt={gives} size={44} oldSize={36}>v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(2 × {sci(GM, 3)} / {sci(RE, 3)})</Row>
				<Row at={root + 50} ageAt={gives} size={44} oldSize={36}>&nbsp;&nbsp;&nbsp;= √({sci(SLIP4, 4)})</Row>
				<Row at={gives} size={52}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={eleven}><span style={{color: TEAL.ink}}>{sci(VESC)} m s⁻¹ = {fx(VESC / 1000, 1)} km s⁻¹</span></AnswerBox></Row>
			</div>
			<Chip x={760} y={540} at={nasa} size={32} border={GREY.stroke} color={GREY.ink}>NASA: 11.186 km s⁻¹</Chip>
			<Row at={forty} size={38} style={{position: 'absolute', left: 760, top: 620}}>{fx(VESC / 1000, 1)} km s⁻¹ × 3600 s h⁻¹ ≈ {comma(Math.round((VESC * 3.6) / 1000) * 1000)} km h⁻¹</Row>
			<Chip x={760} y={700} at={moon} size={32} border={GREY.stroke} color={GREY.ink}>Moon: about {fx(MOON / 1000, 1)} km s⁻¹ (NASA 2.38)</Chip>
			<CrossedChip x={760} y={790} at={gives + 30} crossAt={eleven + 10} size={30} caption="take the square root">v = 2GM/r = {sci(SLIP4)} m s⁻¹</CrossedChip>
		</>
	);
};

// ---------- 5. escape versus orbit ----------
const E5 = {cx: 430, cy: 640, R: 200};
const KPX = 22;
export const S05: React.FC = () => {
	const id = 'escape-vs-orbit';
	const f = useCurrentFrame();
	const compare = cue(id, 'Compare that'), circ = cue(id, 'circular orbit at the same'), diff = cue(id, 'The only difference'), ratio = cue(id, 'about one point four one'), sat = cue(id, 'A satellite four hundred'), s769 = cue(id, 'seven point six nine'), toEsc = cue(id, 'To escape from there'), s109 = cue(id, 'ten point nine'), extra = cue(id, 'an extra three point two'), slip = cue(id, 'A common slip');
	const r400 = (R400 / RE) * E5.R;
	const sx = E5.cx, sy = E5.cy - r400;
	const lx = E5.cx - E5.R, ly = E5.cy;
	const gap = prog(f, extra, 14);
	const ox = sx + 40;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={E5.cx} cy={E5.cy} r={r400} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, sat, 12)} />
				<Earth cx={E5.cx} cy={E5.cy} d={2 * E5.R} />
				{f >= circ ? <g>
					<VecArrow x={lx - 30} y={ly} dx={0} dy={-(VORB / 1000) * KPX} color={TEAL.stroke} width={7} head={20} at={circ} />
					<VecArrow x={lx - 65} y={ly} dx={0} dy={-(VESC / 1000) * KPX} color={TEAL.stroke} width={7} head={20} at={diff} dash="12 7" />
				</g> : null}
				{f >= sat ? <Satellite cx={sx} cy={sy} w={70} /> : null}
				{f >= s769 ? <VecArrow x={ox} y={sy - 18} dx={(ORB400.orbit / 1000) * KPX} dy={0} color={TEAL.stroke} width={7} head={20} at={s769} /> : null}
				{f >= s109 ? <VecArrow x={ox} y={sy + 22} dx={(ORB400.escape / 1000) * KPX} dy={0} color={TEAL.stroke} width={7} head={20} at={s109} dash="12 7" /> : null}
				{gap > 0 ? <rect x={ox + (ORB400.orbit / 1000) * KPX} y={sy - 6} width={((ORB400.escape - ORB400.orbit) / 1000) * KPX * gap} height={14} fill={GREEN.stroke} /> : null}
				<Ring cx={ox + ((ORB400.orbit + ORB400.escape) / 2000) * KPX} cy={sy} rx={60} ry={40} at={extra + 20} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={lx - 22} y={ly - (VORB / 1000) * KPX - 14} at={circ} color={TEAL.ink} size={28}>{fx(VORB / 1000, 2)}</Lbl>
			<Lbl x={lx - 57} y={ly - (VESC / 1000) * KPX - 14} at={diff} color={TEAL.ink} size={28}>{fx(VESC / 1000, 1)}</Lbl>
			<Lbl x={96} y={880} at={circ} color={GREY.ink} size={28}>at the surface (km s⁻¹): orbit solid, escape dashed</Lbl>
			<Lbl x={ox} y={sy - 52} at={s769} color={TEAL.ink} size={30}>orbit {fx(ORB400.orbit / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={ox + 200} y={sy + 70} at={s109} color={TEAL.ink} size={30}>escape {fx(ORB400.escape / 1000, 1)} km s⁻¹</Lbl>
			<Lbl x={sx - 50} y={sy - 50} at={sat} color={GREY.ink} anchor="end" size={28}>400 km up</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 186, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={circ} size={44}><AnswerBox at={circ + 10} tick={false}><span style={{color: TEAL.ink}}>orbit: v = √(GM/r)</span></AnswerBox></Row>
				<Row at={compare} size={44}><AnswerBox at={compare + 10} tick={false}><span style={{color: TEAL.ink}}>escape: v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(<MarkSpan kind="circle" at={diff + 10} color={NAVY.stroke}>2</MarkSpan>GM/r)</span></AnswerBox></Row>
			</div>
			<Row at={ratio} size={44} style={{position: 'absolute', left: 1000, top: 380}}>v<sub style={{fontSize: '0.6em'}}>esc</sub> = √2 × v<sub style={{fontSize: '0.6em'}}>orbit</sub> ≈ {fx(Math.SQRT2, 2)} × v<sub style={{fontSize: '0.6em'}}>orbit</sub></Row>
			<HandTag x={1600} y={440} text="× 1.41" at={ratio + 16} size={34} color={TEAL.ink} />
			<Row at={toEsc} size={36} style={{position: 'absolute', left: 1000, top: 470}}>400 km up: {fx(ORB400.orbit / 1000, 2)} → {fx(ORB400.escape / 1000, 1)} km s⁻¹</Row>
			<Row at={extra} size={44} style={{position: 'absolute', left: 1000, top: 550}}><AnswerBox at={extra + 10}><span style={{color: GREEN.ink}}>extra {fx(ORB400.extra / 1000, 1)} km s⁻¹</span></AnswerBox></Row>
			<CrossedChip x={1000} y={690} at={slip} crossAt={slip + 20} size={34} caption="2 inside, not outside">2√(GM/r)</CrossedChip>
			<Lbl x={96} y={930} at={-30} color={GREY.ink} size={28}>Earth and the 400 km orbit to scale; arrow lengths to scale</Lbl>
		</>
	);
};
