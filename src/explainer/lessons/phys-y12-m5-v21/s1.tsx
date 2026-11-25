// Scenes 1 to 5: the job (opening on last time's frame; the dashed line to infinity swings round to rise from
// the painted Earth at true scale), why mgh fails (equal g arrows, then g from GM/r^2 as the satellite rides
// up), the work area (the lifting-force curve with 5, 20 and 80 strips), the finite total (the end-radius drag
// against GMm/R), and zero at infinity (the energy well graph with the falling marker).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {V20FinalFrame} from '../phys-y12-m5-v20/s3';
import {F, GMm, HEAD, HEAD_SIZE, HOOK, RE, R_GEO, TOTAL, U, cue, gAt, holdIf, mono, stripSum, workTo} from './common';
import {AMBER, Axes, Earth, GREY, Lbl, NAVY, Ring, Satellite, T, VIOLET, VecArrow, areaD, curveD, fx, gx, gy, sci, wellCurveD, wx, wy} from './parts';
import type {Gr, Well} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);

// ---------- the radial climb (scenes 1 and 2) ----------
/** Earth at the bottom left, 105 px radius; the radial line rises at true scale. */
export const CL = {cx: 330, cy: 930, R: 105};
export const yOf = (r: number) => CL.cy - (r / RE) * CL.R;
const TOP_Y = 168;
const Climb: React.FC<{lineP?: number; satR?: number; markAt?: number}> = ({lineP = 1, satR = RE, markAt = -60}) => {
	const f = useCurrentFrame();
	const yG = yOf(R_GEO);
	return (
		<g>
			<line x1={CL.cx} y1={CL.cy - CL.R} x2={CL.cx} y2={lerp(CL.cy - CL.R, TOP_Y, lineP)} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="14 10" />
			<Earth cx={CL.cx} cy={CL.cy} d={2 * CL.R} />
			{f >= markAt ? <g opacity={prog(f, markAt, 12)}><line x1={CL.cx - 26} y1={yG} x2={CL.cx + 26} y2={yG} stroke={NAVY.stroke} strokeWidth={5} /></g> : null}
			<Satellite cx={CL.cx} cy={yOf(satR) - 22} w={80} rotate={0} />
		</g>
	);
};

// ---------- 1. hook: bigger or smaller? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const job = cue(id, "Here's a job"), lift = cue(id, 'lift a one'), geo = cue(id, 'geostationary height'), thirty = cue(id, 'thirty-six thousand'), using = cue(id, 'Using m g h'), three = cue(id, 'three point five'), energy = cue(id, 'potential energy'), will = cue(id, 'Will the true'), think = cue(id, 'Have a think');
	const h = holdIf(id);
	if (f < 1) return <V20FinalFrame />;
	const z = prog(f, 1, 36);
	// The dashed line to infinity swings from v20's comet line to the radial line.
	const sw = prog(f, 8, 40);
	const a0: [number, number] = [lerp(1580, CL.cx, sw), lerp(560, CL.cy - CL.R, sw)], a1: [number, number] = [lerp(1900, CL.cx, sw), lerp(560, TOP_Y, sw)];
	const stage = prog(f, 30, 20);
	return (
		<>
			{z < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - z, transform: `translateX(${-700 * z}px)`, clipPath: 'inset(160px 0 0 0)'}}><V20FinalFrame /></div> : null}
			<FrameSvg>
				{stage < 1 ? <line x1={a0[0]} y1={a0[1]} x2={a1[0]} y2={a1[1]} stroke={INK} strokeWidth={4} strokeDasharray="14 10" opacity={1 - stage} /> : null}
				<g opacity={stage}><Climb markAt={geo} /></g>
				<Ring cx={1560} cy={336} rx={150} ry={36} at={energy + 10} color={GREY.stroke} />
			</FrameSvg>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={CL.cx + 20} y={TOP_Y - 6} at={job} color={INK} size={48}>∞</Lbl>
			<Lbl x={CL.cx + 40} y={yOf(R_GEO) + 12} at={geo} color={NAVY.ink} size={32}>geostationary radius: r = {sci(R_GEO)} m</Lbl>
			<HandTag x={CL.cx + 40} y={yOf(R_GEO) + 70} text="36,000 km up" at={thirty} size={32} color={NAVY.ink} />
			<Lbl x={CL.cx + 60} y={CL.cy - CL.R - 10} at={lift} color={INK} size={30}>1000 kg satellite on the surface</Lbl>
			<Lbl x={CL.cx + 40} y={yOf(R_GEO) + 130} at={job} color={GREY.ink} size={28}>radial line to true scale</Lbl>
			<Enter at={lift} style={{position: 'absolute', left: 1000, top: 186, width: 824}}>
				<div style={{...card, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`}}>
					<div style={{...DISPLAY(34, NAVY.ink, 800)}}>m = 1000 kg; lift from Earth's surface</div>
					<div style={{...DISPLAY(34, NAVY.ink, 800)}}>to r = {sci(R_GEO)} m (h = {sci(HOOK.h)} m)</div>
				</div>
			</Enter>
			<Row at={using} size={40} style={{position: 'absolute', left: 1000, top: 312}}><span style={{color: GREY.ink}}>mgh = 1000 × 9.8 × {sci(HOOK.h)} = <span style={{opacity: prog(f, three, 10)}}>{sci(HOOK.mgh)} J</span></span></Row>
			<HandTag x={1020} y={420} text="g = 9.8 all the way?" at={using + 20} size={32} color={GREY.ink} />
			<Lbl x={1824} y={410} at={energy} color={GREY.ink} anchor="end" size={30}>potential energy only</Lbl>
			<Enter at={will} style={{position: 'absolute', left: 1000, top: 520, width: 824}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(40, INK, 800), whiteSpace: 'normal'}}>True answer: bigger or smaller than mgh?</div>
					<div style={{display: 'flex', gap: 14, marginTop: 10}}>
						{['bigger', 'smaller'].map((s, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 700), opacity: prog(f, will + 10 + i * 8, 10)}}>{s}</div>)}
					</div>
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1700} y={820} r={46} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. why mgh fails ----------
const G_RADII = [1, 1.5, 2, 3, 4, 5, R_GEO / RE];
export const S02: React.FC = () => {
	const id = 'mgh-fails';
	const f = useCurrentFrame();
	const about = cue(id, 'about five point three'), six = cue(id, 'six times'), assumes = cue(id, 'assumes'), but = cue(id, 'But gravity'), weakens = cue(id, 'weakens'), fortieth = cue(id, 'fortieth'), value = cue(id, 'surface value'), work = cue(id, 'too much work'), full = cue(id, 'full price');
	const ride1 = Math.max(0, Math.min(1, (f - assumes) / Math.max(40, but - assumes - 6)));
	const ride2 = Math.max(0, Math.min(1, (f - weakens) / Math.max(40, value - weakens)));
	const phase2 = f >= weakens;
	const rSat = phase2 ? RE + (R_GEO - RE) * ride2 : f >= assumes ? RE + (R_GEO - RE) * ride1 : RE;
	const gShow = phase2 ? gAt(rSat) : 9.8;
	const shrink = prog(f, weakens, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Climb markAt={-60} satR={rSat} />
				{f >= assumes ? G_RADII.map((n, i) => { const L = lerp(60, Math.max(3, 60 * (1 / (n * n))), shrink); return <VecArrow key={i} x={CL.cx + 70} y={yOf(n * RE) - L / 2} dx={0} dy={L} color={VIOLET.stroke} width={6} head={Math.min(16, Math.max(6, L * 0.4))} at={assumes + i * 4} />; }) : null}
				<Ring cx={1500} cy={604} rx={120} ry={44} at={value + 10} color={VIOLET.stroke} />
			</FrameSvg>
			<Lbl x={CL.cx + 20} y={TOP_Y - 6} at={-30} color={INK} size={48}>∞</Lbl>
			<Lbl x={CL.cx + 120} y={yOf(3 * RE)} at={assumes + 20} out={weakens} color={VIOLET.ink} size={30}>9.8 N kg⁻¹ all the way</Lbl>
			<HandTag x={CL.cx + 120} y={yOf(2.5 * RE)} text="gets weaker" at={weakens + 10} size={32} color={VIOLET.ink} />
			<Row at={-30} size={36} style={{position: 'absolute', left: 900, top: 186}}><span style={{color: GREY.ink}}>mgh = {sci(HOOK.mgh)} J</span></Row>
			<Row at={about} size={44} style={{position: 'absolute', left: 900, top: 250}}><span style={{color: NAVY.ink}}>true ΔU = {sci(HOOK.dU)} J</span></Row>
			<Chip x={900} y={330} at={six} size={34} border={GREY.stroke} color={GREY.ink}>mgh ≈ {fx(HOOK.ratio, 1)} × too big</Chip>
			<Chip x={1400} y={330} at={six + 10} size={34} border={INK} color={INK}>smaller ✓</Chip>
			<Readouts x={900} y={450} w={924} size={52} at={assumes} title={phase2 ? 'g where the satellite is (GM/r²)' : "mgh's g"} rows={[
				{label: 'r', value: `${fx(rSat / RE, 2)} R`, color: NAVY.ink},
				{label: 'g', value: `${fx(gShow, gShow < 1 ? 3 : 2)} N kg⁻¹`, color: phase2 ? VIOLET.ink : GREY.ink},
			]} />
			<Chip x={900} y={700} at={fortieth} size={32} border={VIOLET.stroke} color={VIOLET.ink}>g falls to 2 % of its surface value ({fx(HOOK.topPct, 1)} %)</Chip>
			<Row at={work} size={36} style={{position: 'absolute', left: 900, top: 790, width: 924, whiteSpace: 'normal'}}>surface g for the whole climb counts too much work</Row>
			<HandTag x={920} y={890} text="full price every metre" at={full} size={32} color={GREY.ink} />
		</>
	);
};

// ---------- 3. adding up work: the area under the graph ----------
const G3: Gr = {ox: 170, oy: 820, w: 960, h: 500, xMax: R_GEO * 1.04, yMax: 11000};
const Strips: React.FC<{g: Gr; n: number; to?: number; opacity?: number}> = ({g, n, to = R_GEO, opacity = 1}) => {
	const dr = (to - RE) / n;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => { const r = RE + i * dr; return <rect key={i} x={gx(g, r)} y={gy(g, F(r))} width={Math.max(1, gx(g, r + dr) - gx(g, r))} height={g.oy - gy(g, F(r))} fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={n > 40 ? 0.8 : 2} />; })}
		</g>
	);
};
export const S03: React.FC = () => {
	const id = 'work-area';
	const f = useCurrentFrame();
	const push = cue(id, 'push it outwards'), big = cue(id, 'as big as'), work = cue(id, 'Work is force'), split = cue(id, 'split the climb'), each = cue(id, 'In each step'), times = cue(id, 'that force times'), add = cue(id, 'Add up all'), area = cue(id, 'the area under'), dist = cue(id, 'force against distance'), integ = cue(id, "That's what integration");
	const n = f < each ? 5 : f < add ? 20 : 80;
	const smooth = prog(f, dist, 20);
	const showStrips = f >= split;
	const sum = stripSum(n);
	const r2 = RE + (R_GEO - RE) * (3 / 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{showStrips && smooth < 1 ? <Strips g={G3} n={n} opacity={1 - smooth} /> : null}
				{smooth > 0 ? <path d={areaD(G3, F, RE, R_GEO)} fill="#f6dcae" opacity={smooth} /> : null}
				<Axes g={G3} xTitle="distance from Earth's centre, r" xTicks={[[RE, 'R'], [R_GEO, '4.23 × 10⁷ m']]} yTicks={[[5000, '5 × 10³'], [10000, '1 × 10⁴']]} />
				<path d={curveD(G3, F, RE, R_GEO * 1.04)} fill="none" stroke={AMBER.stroke} strokeWidth={6} />
				<line x1={gx(G3, R_GEO)} y1={G3.oy} x2={gx(G3, R_GEO)} y2={gy(G3, F(R_GEO)) - 20} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" />
				<Ring cx={(gx(G3, r2) + gx(G3, r2 + (R_GEO - RE) / 20)) / 2} cy={(gy(G3, F(r2)) + G3.oy) / 2} rx={26} ry={(G3.oy - gy(G3, F(r2))) / 2 + 20} at={times + 10} color={AMBER.stroke} />
				{f >= push ? <g opacity={prog(f, push, 12)}>
					<Satellite cx={1460} cy={300} w={64} />
					<VecArrow x={1460} y={270} dx={0} dy={-90} color={AMBER.stroke} width={7} head={20} />
					<VecArrow x={1460} y={330} dx={0} dy={90} color={AMBER.stroke} width={7} head={20} dash="10 7" />
				</g> : null}
			</FrameSvg>
			<Lbl x={170} y={240} at={-30} color={INK} size={30}>lifting force for a slow lift, F (N): outward, the same size as gravity's pull</Lbl>
			<Lbl x={gx(G3, RE) + 14} y={gy(G3, F(RE)) + 6} at={-30} color={AMBER.ink} size={30}>{sci(F(RE))} N at R</Lbl>
			<Lbl x={1490} y={190} at={push} color={AMBER.ink} size={28}>lifting force (outward)</Lbl>
			<Lbl x={1490} y={420} at={push + 6} color={AMBER.ink} size={28}>gravity (inward)</Lbl>
			<HandTag x={1560} y={300} text="push = pull (slow lift)" at={big} size={30} color={AMBER.ink} />
			<Row at={work} size={34} style={{position: 'absolute', left: 1240, top: 470, width: 584, whiteSpace: 'normal'}}>W = Fs only while F is constant</Row>
			<Readouts x={1240} y={540} w={584} size={44} at={split} rows={[
				{label: 'strips', value: `${n}`, color: INK},
				{label: 'area', value: `${sci(smooth > 0.5 ? GMm * (1 / RE - 1 / R_GEO) : sum)} J`, color: AMBER.ink},
			]} />
			<HandTag x={gx(G3, RE) + 40} y={gy(G3, F(RE)) + 70} text="force × step" at={times} size={30} color={AMBER.ink} />
			<Lbl x={gx(G3, RE) + 30} y={G3.oy - 30} at={split} out={each} color={AMBER.ink} size={28}>F × Δr</Lbl>
			<Chip x={480} y={560} at={area} size={34} border={AMBER.stroke} color={AMBER.ink}>work you supply = area under F against r</Chip>
			<Row at={dist} size={34} style={{position: 'absolute', left: 1240, top: 700}}>area from R to 4.23 × 10⁷ m</Row>
			<Row at={dist + 6} size={52} style={{position: 'absolute', left: 1240, top: 748}}>= <AnswerBox at={dist + 14}><span>{sci(GMm * (1 / RE - 1 / R_GEO))} J</span></AnswerBox></Row>
			<Row at={integ} size={30} style={{position: 'absolute', left: 1240, top: 840, width: 584, whiteSpace: 'normal'}}><span style={{color: GREY.ink}}>(this adding-up is integration: W = ∫ F dr)</span></Row>
		</>
	);
};

// ---------- 4. the surprise: an endless climb, a finite total ----------
const G4: Gr = {ox: 150, oy: 820, w: 900, h: 500, xMax: 12 * RE, yMax: 11000};
export const S04: React.FC = () => {
	const id = 'finite-total';
	const f = useCurrentFrame();
	const keep = cue(id, 'Keep climbing'), further = cue(id, 'Further out'), from = cue(id, 'From the surface'), half = cue(id, 'half of a'), three = cue(id, 'three radii'), thirds = cue(id, 'two thirds'), ten = cue(id, 'ten radii'), tenths = cue(id, 'nine tenths'), closer = cue(id, 'closer and closer'), finite = cue(id, 'finite amount'), start = cue(id, 'start from'), so = cue(id, 'So even');
	const pull = prog(f, 0, 40);
	const g: Gr = {...G4, xMax: lerp(R_GEO * 1.04, 12 * RE, pull)};
	const n = kf(f, mono([[0, R_GEO / RE], [from - 16, R_GEO / RE], [from, 1], [half, 2], [three, 2], [thirds, 3], [ten, 3], [tenths, 10], [closer, 10], [start, 60]], 6));
	const rEnd = n * RE;
	const frac = 1 - 1 / n;
	const BAR = {x: 1100, top: 300, h: 500};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v21g4"><rect x={g.ox} y={150} width={g.w + 10} height={700} /></clipPath></defs>
				<g clipPath="url(#v21g4)"><path d={areaD(g, F, RE, Math.min(rEnd, 12.2 * RE))} fill="#f6dcae" /></g>
				<Axes g={g} xTitle="r" xTicks={([[RE, 'R'], [2 * RE, '2R'], [3 * RE, '3R'], [10 * RE, '10R']] as [number, string][]).filter(([v]) => v <= g.xMax)} />
				<path d={curveD(g, F, RE, g.xMax)} fill="none" stroke={AMBER.stroke} strokeWidth={6} />
				{rEnd <= g.xMax ? <line x1={gx(g, rEnd)} y1={g.oy} x2={gx(g, rEnd)} y2={gy(g, F(rEnd)) - 24} stroke={NAVY.stroke} strokeWidth={5} /> : null}
				<rect x={BAR.x} y={BAR.top} width={60} height={BAR.h} fill={CARD} stroke={INK_SOFT} strokeWidth={3} rx={6} />
				<rect x={BAR.x + 4} y={BAR.top + BAR.h * (1 - frac)} width={52} height={BAR.h * frac} fill="#f3c98a" />
				<line x1={BAR.x - 20} y1={BAR.top} x2={BAR.x + 80} y2={BAR.top} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
				<Ring cx={BAR.x + 30} cy={BAR.top} rx={70} ry={26} at={finite} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={g.ox + g.w + 10} y={g.oy - 30} at={finite} color={INK} anchor="end" size={44}>→ ∞</Lbl>
			<Lbl x={BAR.x + 70} y={BAR.top - 20} at={further} color={INK} anchor="end" size={28}>total = GMm/R</Lbl>
			<HandTag x={g.ox + 300} y={300} text="keeps going" at={keep} size={32} color={NAVY.ink} />
			<HandTag x={g.ox + 380} y={560} text="never passes the line" at={closer} size={30} color={AMBER.ink} />
			<Lbl x={g.ox + 300} y={380} at={further} color={AMBER.ink} size={30}>force falls with r²: later steps add less</Lbl>
			<Readouts x={1240} y={186} w={584} size={40} at={further} rows={[
				{label: 'r_end', value: `${fx(n, n < 10 ? 2 : 0)} R`, color: NAVY.ink},
				{label: 'work so far', value: `${sci(workTo(n))} J`, color: AMBER.ink},
				{label: 'fraction of GMm/R', value: fx(frac, 2), color: INK},
			]} />
			<Chip x={1240} y={440} at={half} size={32} border={NAVY.stroke} color={NAVY.ink}>2R: ½ ({sci(workTo(2))} J)</Chip>
			<Chip x={1240} y={520} at={thirds} size={32} border={NAVY.stroke} color={NAVY.ink}>3R: ⅔ ({sci(workTo(3))} J)</Chip>
			<Chip x={1240} y={600} at={tenths} size={32} border={NAVY.stroke} color={NAVY.ink}>10R: 9/10 ({sci(workTo(10))} J)</Chip>
			<Row at={start} size={48} style={{position: 'absolute', left: 1240, top: 690}}><AnswerBox at={start + 10}><span>GMm/R = {sci(TOTAL)} J</span></AnswerBox></Row>
			<Lbl x={1240} y={810} at={start + 10} color={GREY.ink} size={28}>(1000 kg from the surface)</Lbl>
			<Row at={so} size={36} style={{position: 'absolute', left: 150, top: 880}}>an endless climb takes a finite amount of work</Row>
		</>
	);
};

// ---------- 5. zero at infinity, negative everywhere else ----------
export const WL: Well = {ox: 160, y0: 320, w: 1060, depth: 500, xMax: 12 * RE, umin: U(RE)};
export const WellGraph: React.FC<{w?: Well; from?: number; markR?: number; bar?: boolean; axisTitle?: boolean}> = ({w = WL, from = RE, markR, bar = false, axisTitle = true}) => {
	const mx = markR === undefined ? 0 : wx(w, Math.min(markR, w.xMax)), my = markR === undefined ? 0 : wy(w, U(Math.min(markR, 1e12)));
	return (
		<g>
			<line x1={w.ox} y1={w.y0} x2={w.ox + w.w + 30} y2={w.y0} stroke={INK} strokeWidth={4} />
			<path d={`M${w.ox + w.w + 30},${w.y0} l-14,-8 l0,16 Z`} fill={INK} />
			<line x1={w.ox} y1={w.y0 - 20} x2={w.ox} y2={w.y0 + w.depth + 30} stroke={INK} strokeWidth={4} />
			{axisTitle ? <T x={w.ox + w.w + 30} y={w.y0 + 44} size={30} anchor="end">r →</T> : null}
			<line x1={wx(w, RE)} y1={w.y0 - 8} x2={wx(w, RE)} y2={w.y0 + 8} stroke={INK} strokeWidth={3} />
			{from < w.xMax ? <path d={wellCurveD(w, U, from, w.xMax)} fill="none" stroke={VIOLET.stroke} strokeWidth={6} /> : null}
			{bar && markR !== undefined ? <rect x={mx - 14} y={w.y0} width={28} height={Math.max(0, my - w.y0)} fill={VIOLET.soft} stroke={VIOLET.stroke} strokeWidth={2} /> : null}
			{markR !== undefined ? <circle cx={mx} cy={my} r={11} fill={INK} stroke={CARD} strokeWidth={3} /> : null}
		</g>
	);
};
export const S05: React.FC = () => {
	const id = 'zero-at-infinity';
	const f = useCurrentFrame();
	const why = cue(id, "That's why"), out = cue(id, 'Out there'), every = cue(id, 'every pair'), back = cue(id, 'climb backwards'), falls = cue(id, 'falls in from'), drops = cue(id, 'drops below'), atR = cue(id, 'At distance r'), dropped = cue(id, 'dropped by'), so = cue(id, 'So U equals');
	const rM = kf(f, mono([[0, 12 * RE], [falls, 12 * RE], [atR - 6, RE], [atR + 30, 2 * RE]], 8));
	const traced = f < falls ? 12 * RE : f < so ? Math.max(RE, Math.min(rM, 12 * RE)) : RE;
	const fromR = f >= so ? lerp(traced, RE, prog(f, so, 20)) : traced;
	const mx = wx(WL, rM), my = wy(WL, U(rM));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<WellGraph from={f >= atR - 6 ? RE : fromR} markR={rM} bar={f >= falls} />
				{f < falls + 20 ? <g opacity={prog(f, out, 16) * (1 - prog(f, falls, 20))}>
					<Earth cx={560} cy={640} d={130} />
					<line x1={640} y1={640} x2={1010} y2={640} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
					<Satellite cx={1080} cy={640} w={80} rotate={90} />
				</g> : null}
				{f >= dropped ? <g opacity={prog(f, dropped, 12)}>
					<line x1={mx + 40} y1={WL.y0} x2={mx + 40} y2={my} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={mx + 28} y1={WL.y0} x2={mx + 52} y2={WL.y0} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={mx + 28} y1={my} x2={mx + 52} y2={my} stroke={VIOLET.stroke} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={WL.ox + 20} y={WL.y0 - 26} at={why} color={INK} size={36}>U = 0 at infinity (no interaction)</Lbl>
			<Lbl x={WL.ox + WL.w + 30} y={WL.y0 - 26} at={why} color={INK} anchor="end" size={44}>∞</Lbl>
			<Lbl x={wx(WL, RE)} y={WL.y0 + 44} at={-30} color={INK_SOFT} anchor="middle" size={28}>R</Lbl>
			<HandTag x={WL.ox + 640} y={WL.y0 - 90} text="no pull out here" at={out} size={30} color={GREY.ink} />
			<Lbl x={840} y={700} at={out} out={falls} color={GREY.ink} anchor="middle" size={30}>very far apart: no pull either way</Lbl>
			<Lbl x={WL.ox + 20} y={WL.y0 + WL.depth + 40} at={-30} color={VIOLET.ink} size={30}>U (J), below zero</Lbl>
			<Row at={every} size={32} style={{position: 'absolute', left: 1300, top: 186, width: 524, whiteSpace: 'normal'}}>the same zero for every pair of masses</Row>
			<Readouts x={1300} y={300} w={524} size={44} at={-30} rows={[
				{label: 'r', value: `${fx(rM / RE, 1)} R`, color: NAVY.ink},
				{label: 'U', value: `${sci(U(rM))} J`, color: VIOLET.ink},
			]} />
			<Row at={back} size={30} style={{position: 'absolute', left: 1300, top: 456, width: 524, whiteSpace: 'normal'}}>run the climb backwards: fall in from infinity</Row>
			<HandTag x={1320} y={540} text="drops below zero" at={drops} size={32} color={VIOLET.ink} />
			<Lbl x={mx + 64} y={(WL.y0 + my) / 2 + 10} at={dropped} color={VIOLET.ink} size={32}>drop = GMm/r</Lbl>
			<Row at={so} size={52} style={{position: 'absolute', left: 1290, top: 580}}><AnswerBox at={so + 10}><span style={{color: VIOLET.ink}}>U = <MarkSpan kind="circle" at={so + 26} color={VIOLET.stroke}>−</MarkSpan>GMm/r</span></AnswerBox></Row>
			<Lbl x={1300} y={740} at={so + 16} color={NAVY.ink} size={30}>r from Earth's centre; outside Earth</Lbl>
		</>
	);
};
