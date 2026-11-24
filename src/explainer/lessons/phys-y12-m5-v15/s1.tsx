// Scenes 1 to 5: the hook (opening on last time's top view of the banked bend), what work means (the sliding
// block with a live angle control), the lap chopped into tiny steps (running total of work from the field-motion
// run), work and kinetic energy (energy-panel stage with the ghost bar), and what the inward force does (the
// velocity circle).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, ROLE, Readouts, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {polar} from '../../physics/projectile/turning';
import {BLOCK, CAR, HEAD, HEAD_SIZE, HEAD_V14, LAP_FRAMES, cue, hold, mono, stepWork} from './common';
import {AMBER, ACC, BEND, BLOCK_SRC, BendCar, BendRing, EnergyBars, FLabel, KC, LAP0, LapCard, Lbl, NAVY, RightMark, Ring, VEL, card, carOn, fx, sci, Title} from './parts';

const kEase = (f: number) => (f <= 0 ? 0 : f < 20 ? (f * f) / 40 : f - 10); // the car sets off smoothly
const lapsAt = (k: number, lapFrames = LAP_FRAMES) => LAP0 + Math.floor(k / lapFrames);
export const MJ = `${sci(CAR.wrongW)} J`;
const NL = String.fromCharCode(10); // a line break inside a pre-wrapped chip
export const ProductChipText: React.FC<{markAt?: number}> = ({markAt}) => <>{sci(CAR.F)} × {fx(CAR.lap, 0)}{NL}= {MJ} {markAt === undefined ? '?' : <MarkSpan kind="circle" at={markAt} color={ROLE.slate.stroke}>?</MarkSpan>}</>;

// ---------- 1. hook: 1.26 MJ a lap? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const newtons = cue(id, 'two and a half thousand'), oneLap = cue(id, 'one lap is about'), million = cue(id, 'one point two six million'), work = cue(id, 'that much work'), predict = cue(id, 'prediction');
	const h = hold(id);
	const k = kEase(f);
	const old = 1 - prog(f, 0, 18);
	const drawLap = prog(f, oneLap, 50);
	const [sx, sy] = [BEND.cx + BEND.R, BEND.cy];
	const a = Math.min(359.9, 360 * drawLap);
	const [ex, ey] = polar(BEND.cx, BEND.cy, BEND.R, a);
	const c = carOn(BEND, k);
	return (
		<>
			<SceneHeading text={HEAD_V14} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BendRing />
				{drawLap > 0 ? <path d={`M${sx},${sy} A ${BEND.R} ${BEND.R} 0 ${a > 180 ? 1 : 0} 0 ${ex},${ey}`} fill="none" stroke={NAVY.stroke} strokeWidth={7} strokeLinecap="round" /> : null}
				<BendCar k={k} vAt={-60} fAt={-60} right={old} pulseF={newtons} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1560} y={830} ringFrom={predict} />
			</FrameSvg>
			<FLabel k={k} pulse={newtons} />
			<Lbl x={BEND.cx} y={BEND.cy - BEND.R - BEND.w / 2 - 26} at={oneLap + 30} color={NAVY.ink} anchor="middle" size={30}>one lap: 2π × 80 m = {fx(CAR.lap, 0)} m</Lbl>
			<LapCard laps={lapsAt(k)} />
			{old > 0 ? <div style={{opacity: old}}>
				<Chip x={950} y={420} at={-60} size={36} border={INK}>W = ?</Chip>
				<Chip x={1290} y={470} at={-60} size={36} w={534} color={INK} border={INK}>Next: does the inward force do work in uniform circular motion?</Chip>
			</div> : null}
			<HandTag x={c.x - 150} y={c.y + 60} text="inward" at={newtons + 10} size={TYPE.handSmall} color={AMBER.ink} anchor="end" out={oneLap} />
			<HandTag x={c.x + 50} y={c.y - 150} text="along" at={newtons + 24} size={TYPE.handSmall} color={VEL.ink} out={oneLap} />
			<Enter at={million} style={{position: 'absolute', left: 1290, top: 440}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `2.5px solid ${ROLE.slate.stroke}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(36, ROLE.slate.ink, 700)}}><ProductChipText markAt={million + 24} /></div>
			</Enter>
			<Lbl x={1300} y={570} at={million + 10} color={ROLE.slate.ink} size={30}>force × distance</Lbl>
			<Chip x={1290} y={600} at={work} size={36}>Yes, about 1.26 MJ each lap</Chip>
			<Chip x={1290} y={680} at={work + 6} size={36}>No, it does no work</Chip>
		</>
	);
};

// ---------- 2. what work means: the sliding block and the angle control ----------
const FLOOR = 720, BW = 520; // floor top, block plate width (alpha box)
const blockGeom = (f: number) => {
	const s = BW / 1311, h = 148 * s;
	const x = 150 + 0.55 * f; // slides steadily to the right
	return {s, h, x, cx: x + BW / 2, cy: FLOOR - h / 2, top: FLOOR - h};
};
export const S02: React.FC = () => {
	const id = 'what-work-means';
	const f = useCurrentFrame();
	const pushes = cue(id, 'pushes something along'), cosine = cue(id, 'times the cosine'), along = cue(id, 'Push along the motion'), right = cue(id, 'right angles to the motion'), cos90 = cue(id, 'Cosine ninety'), all = cue(id, 'at all');
	const th = kf(f, mono([[cosine, 30], [along - 10, 30], [along + 20, 0], [right, 0], [right + 30, 30], [right + 60, 60], [right + 90, 90]], 8));
	const b = blockGeom(f);
	const L = 220, t = (th * Math.PI) / 180;
	const tip: [number, number] = [b.x + 20 + (b.cx - 40 - b.x) * Math.sin(t), b.top + (b.h / 2) * Math.cos(t)];
	const tail: [number, number] = [tip[0] - L * Math.cos(t), tip[1] - L * Math.sin(t)];
	const W = BLOCK.W(th);
	const showF = prog(f, cosine, 12);
	const arc = 80;
	return (
		<>
			<SceneHeading text={HEAD_V14} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={96} x2={1180} y1={FLOOR} y2={FLOOR} stroke={INK} strokeWidth={6} />
				{Array.from({length: 36}, (_, i) => <line key={i} x1={110 + i * 30} y1={FLOOR + 4} x2={95 + i * 30} y2={FLOOR + 22} stroke={INK} strokeWidth={2.5} />)}
				<image href={staticFile(BLOCK_SRC)} x={b.x - 145 * b.s} y={b.top - 426 * b.s} width={1600 * b.s} height={1000 * b.s} />
				<VecArrow x={b.x} y={FLOOR + 70} dx={300} dy={0} color={VEL.stroke} width={8} head={24} at={pushes} />
				{showF > 0 ? <g opacity={showF}>
					<line x1={tail[0]} y1={tail[1]} x2={tail[0] + 150} y2={tail[1]} stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" />
					{th > 1 ? <path d={`M${tail[0] + arc},${tail[1]} A ${arc} ${arc} 0 0 1 ${tail[0] + arc * Math.cos(t)},${tail[1] + arc * Math.sin(t)}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
					<VecArrow x={tail[0]} y={tail[1]} dx={tip[0] - tail[0]} dy={tip[1] - tail[1]} color={AMBER.stroke} width={9} head={28} />
					{th < 89 ? <VecArrow x={tail[0]} y={tail[1] - 4} dx={L * Math.cos(t)} dy={0} color={AMBER.stroke} width={5} head={18} dash="10 7" /> : null}
					{th > 89.5 ? <RightMark x={tip[0]} y={b.top} a={[1, 0]} b={[0, -1]} s={22} /> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={b.x + 150} y={FLOOR + 120} at={pushes} color={VEL.ink} anchor="middle" size={TYPE.current}>s</Lbl>
			<Lbl x={tail[0] - 14} y={tail[1] - 10} at={cosine} color={AMBER.ink} anchor="end" size={TYPE.current}>F</Lbl>
			{th > 4 ? <Lbl x={tail[0] + arc + 18} y={tail[1] + 40} at={cosine} color={NAVY.ink} size={36}>θ</Lbl> : null}
			<HandTag x={tail[0] - 30} y={tail[1] - 80} text="only the along part counts" at={along + 20} out={right + 20} size={TYPE.handSmall} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={pushes} size={34}>work: a force pushing something along the way it moves</Row>
				<Row at={cosine} size={60}><span style={{display: 'inline-block', border: `5px solid ${INK}`, borderRadius: 16, padding: '0 20px 6px'}}>W = Fs cos θ</span></Row>
				<Row at={along + 10} ageAt={right} size={TYPE.current} oldSize={34}>θ = 0°: cos 0° = 1, so W = Fs</Row>
			</div>
			<Readouts x={1290} y={186} w={534} size={52} at={cosine} title="live: turn the force" rows={[
				{label: 'θ', value: fx(th, 0), unit: '°', color: NAVY.ink},
				{label: 'cos θ', value: fx(Math.cos((th * Math.PI) / 180), 2), color: NAVY.ink},
				{label: 'W = Fs cos θ', value: fx(W, W > 0.05 && W < 19.95 ? 1 : 0), unit: 'J', color: AMBER.ink, ring: all + 10},
			]} />
			<Chip x={1290} y={520} at={pushes} size={32} border={NAVY.stroke} color={NAVY.ink}>F = 10 N, s = 2.0 m (illustrative)</Chip>
			<Enter at={cos90} style={{position: 'absolute', left: 1290, top: 620}}>
				<div style={{...DISPLAY(TYPE.current, INK, 800)}}>θ = 90°: across the motion</div>
			</Enter>
			<Row at={all} size={52} style={{position: 'absolute', left: 1290, top: 700}}><AnswerBox at={all}><span>W = 0</span></AnswerBox></Row>
			<HandTag x={1560} y={810} text="cos 90° = 0" at={all + 16} size={TYPE.handSmall} color={NAVY.ink} />
		</>
	);
};

// ---------- 3. step by step round the circle ----------
const N1 = 24, N2 = 72;
const stepPos = (i: number, n: number, len: number) => {
	const a0 = ((i + 0.5) / n) * 2 * Math.PI; // the step's midpoint angle
	const mx = BEND.cx + BEND.R * Math.cos(a0), my = BEND.cy - BEND.R * Math.sin(a0);
	const tx = -Math.sin(a0), ty = -Math.cos(a0); // screen tangent (anticlockwise)
	return {sx: mx - (tx * len) / 2, sy: my - (ty * len) / 2, tx, ty, mx, my, in: [(BEND.cx - mx) / BEND.R, (BEND.cy - my) / BEND.R] as [number, number]};
};
export const S03: React.FC = () => {
	const id = 'step-by-step';
	const f = useCurrentFrame();
	const chop = cue(id, 'chop the lap'), tangent = cue(id, 'along the tangent'), rightA = cue(id, 'right angles to that step'), zero = cue(id, 'is zero'), addUp = cue(id, 'Add up zero'), never = cue(id, 'It never does');
	const L3 = Math.max(200, Math.min(320, rightA - chop - 10));
	const k = Math.max(0, f - chop) * (LAP_FRAMES / L3);
	const refine = addUp + 40;
	const fine = prog(f, refine, 30);
	const n = f < refine ? N1 : N2;
	const shown1 = Math.min(N1, Math.max(0, Math.floor(((f - chop) / L3) * N1)));
	const shown2 = Math.min(N2, Math.max(0, Math.floor(((f - refine) / 30) * N2)));
	const shown = f < refine ? shown1 : shown2;
	const total = stepWork(shown, n);
	const len1 = ((2 * Math.PI * BEND.R) / N1) * 0.78, len2 = ((2 * Math.PI * BEND.R) / N2) * 0.8;
	return (
		<>
			<SceneHeading text={HEAD_V14} at={-200} size={HEAD_SIZE} out={zero - 14} />
			<SceneHeading text={HEAD} at={zero - 4} size={HEAD_SIZE} />
			<FrameSvg>
				<BendRing />
				{Array.from({length: N1}, (_, i) => {
					const p = stepPos(i, N1, len1);
					const appear = chop + ((i + 1) / N1) * L3;
					if (f < appear) return null;
					const o = 1 - fine;
					if (o <= 0.01) return null;
					return (
						<g key={i} opacity={o}>
							<VecArrow x={p.sx} y={p.sy} dx={p.tx * len1} dy={p.ty * len1} color={VEL.stroke} width={5} head={14} at={appear} dur={8} />
							<VecArrow x={p.mx} y={p.my} dx={p.in[0] * 60} dy={p.in[1] * 60} color={AMBER.stroke} width={5} head={14} at={rightA + i * 2} dur={8} />
							{f >= rightA + i * 2 + 6 ? <RightMark x={p.mx} y={p.my} a={[p.tx, p.ty]} b={p.in} s={13} opacity={prog(f, rightA + i * 2 + 6, 8)} /> : null}
							{f >= zero + i * 2 ? <path d={`M${p.mx - p.in[0] * 34 - 8},${p.my - p.in[1] * 34} l6,7 l11,-14`} fill="none" stroke={INK} strokeWidth={3.5} opacity={prog(f, zero + i * 2, 8)} /> : null}
						</g>
					);
				})}
				{f >= refine ? Array.from({length: N2}, (_, i) => {
					const p = stepPos(i, N2, len2);
					const appear = refine + (i / N2) * 30;
					if (f < appear) return null;
					return (
						<g key={i} opacity={prog(f, appear, 6)}>
							<line x1={p.sx} y1={p.sy} x2={p.sx + p.tx * len2} y2={p.sy + p.ty * len2} stroke={VEL.stroke} strokeWidth={5} strokeLinecap="round" />
							{i % 3 === 1 ? <VecArrow x={p.mx} y={p.my} dx={p.in[0] * 50} dy={p.in[1] * 50} color={AMBER.stroke} width={4} head={12} /> : null}
						</g>
					);
				}) : null}
				<BendCar k={k} vAt={-60} fAt={rightA - 10} right={prog(f, rightA, 12)} />
			</FrameSvg>
			<HandTag x={BEND.cx + 170} y={BEND.cy - 330} text="step along the tangent" at={tangent} size={TYPE.handSmall} color={VEL.ink} />
			<HandTag x={BEND.cx - 120} y={BEND.cy + 70} text="force at 90°" at={rightA + 20} size={TYPE.handSmall} color={AMBER.ink} anchor="middle" />
			<Lbl x={BEND.cx - 300} y={BEND.cy - 360} at={zero} color={INK} size={32}>W = 0 at every step ✓</Lbl>
			<Readouts x={1290} y={186} w={534} size={52} at={chop} title="add up the work" rows={[
				{label: 'steps', value: String(f < refine ? shown1 : Math.max(N1, shown2)), color: VEL.ink},
				{label: 'W in each step', value: '0', unit: 'J', color: AMBER.ink, at: zero},
				{label: 'total W', value: fx(total, 0), unit: 'J', color: INK, at: zero, ring: addUp},
			]} />
			<CrossedChip x={1290} y={470} at={-30} crossAt={never + 6} size={34} caption="F is never along the path"><ProductChipText /></CrossedChip>
			<Chip x={1290} y={700} at={-30} size={34}>Yes, about 1.26 MJ each lap</Chip>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 780}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 10, background: '#f1ebdf', border: `${f >= never ? 4.5 : 2.5}px solid ${f >= never ? INK : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(34, INK, f >= never ? 800 : 700)}}>No, it does no work{f >= never ? <span style={{opacity: prog(f, never, 12)}}> ✓</span> : null}</div>
			</Enter>
		</>
	);
};

// ---------- 4. work and kinetic energy (energy-panel stage) ----------
const SMALL = {cx: 330, cy: 560, R: 190, w: 72, car: 92};
const KPX = 300 / CAR.K; // px per joule: K is 300 px tall
const BASE4 = 860, BX = 720;
export const S04: React.FC = () => {
	const id = 'work-kinetic-energy';
	const f = useCurrentFrame();
	const net = cue(id, 'net work done'), zeroW = cue(id, 'Zero work means'), half = cue(id, 'a half m v'), lapAfter = cue(id, 'lap after lap'), three = cue(id, 'more than three times'), oneLap = cue(id, 'after just one lap');
	const k = f;
	const ghost = prog(f, three, 30);
	const gh = Math.min(BASE4 - 200, CAR.ghostK * KPX * ghost);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BendRing g={SMALL} />
				<BendCar g={SMALL} k={k} vAt={-60} fAt={-60} vLen={110} />
				<EnergyBars x={BX} base={BASE4} k={KPX} K={CAR.K} showU={false} showE={false} w={150} />
				{ghost > 0 ? <g opacity={1 - 0.6 * prog(f, oneLap, 20)}>
					<path d={`M${BX + 190},${BASE4} L${BX + 190},${BASE4 - gh} M${BX + 340},${BASE4 - gh} L${BX + 340},${BASE4}`} stroke={KC.stroke} strokeWidth={5} strokeDasharray="14 9" fill="none" />
					<rect x={BX + 190} y={BASE4 - gh} width={150} height={gh} fill={KC.soft} opacity={0.6} />
					{CAR.ghostK * KPX * ghost > BASE4 - 200 ? <path d={`M${BX + 210},${BASE4 - gh + 30} L${BX + 265},${BASE4 - gh - 10} L${BX + 320},${BASE4 - gh + 30}`} stroke={KC.stroke} strokeWidth={6} fill="none" /> : null}
				</g> : null}
				{f >= oneLap ? <path d={`M${BX + 200},${BASE4 - 420} l130,130 M${BX + 330},${BASE4 - 420} l-130,130`} stroke={INK} strokeWidth={8} opacity={prog(f, oneLap, 10)} /> : null}
				<line x1={BX - 10} x2={BX + 160} y1={BASE4 - CAR.K * KPX} y2={BASE4 - CAR.K * KPX} stroke={KC.ink} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, lapAfter, 12)} />
			</FrameSvg>
			<Lbl x={SMALL.cx} y={SMALL.cy + SMALL.R + 90} color={INK} anchor="middle" size={32}>laps: {lapsAt(k)}</Lbl>
			<Lbl x={BX + 75} y={BASE4 - CAR.K * KPX - 24} at={half + 30} color={KC.ink} anchor="middle" size={34}>{sci(CAR.K)} J</Lbl>
			<HandTag x={BX - 20} y={BASE4 - CAR.K * KPX - 90} text="same height every lap" at={lapAfter + 10} size={TYPE.handSmall} color={KC.ink} />
			<Lbl x={BX + 360} y={200} at={three + 20} color={KC.ink} size={34}>× {fx(CAR.barTimes, 1)}</Lbl>
			<div style={{position: 'absolute', left: 1180, top: 186, display: 'flex', flexDirection: 'column', gap: 10, width: 644}}>
				<Row at={net} size={TYPE.current}><span style={{display: 'inline-block', border: `5px solid ${INK}`, borderRadius: 16, padding: '0 18px 4px', fontSize: 60}}>W<Sub>net</Sub> = ΔK</span></Row>
				<Row at={net + 30} size={30}>net work = change in kinetic energy</Row>
				<Row at={zeroW} ageAt={half} size={TYPE.current} oldSize={34}>W<Sub>net</Sub> = 0, so ΔK = 0</Row>
				<Row at={half} ageAt={lapAfter} size={TYPE.current} oldSize={34}>K = ½mv² = ½ × 1200 × 12.9²</Row>
				<Row at={lapAfter - 20} size={52}><AnswerBox at={lapAfter}><span>K = {sci(CAR.K)} J</span></AnswerBox></Row>
				<Row at={lapAfter + 10} size={TYPE.current}><MarkSpan kind="circle" at={lapAfter + 30} color={KC.stroke}><span style={{color: KC.ink}}>ΔK = 0</span></MarkSpan> every lap</Row>
			</div>
			<CrossedChip x={1180} y={700} at={three} crossAt={oneLap + 4} size={34} caption="3.7 × faster? no">after 1 lap: v = {fx(CAR.ghostV, 1)} m s<Sup>−1</Sup> ?</CrossedChip>
		</>
	);
};

// ---------- 5. what the inward force does: the velocity circle ----------
const B5 = {cx: 440, cy: 600, R: 250, w: 100, car: 124};
const VCIR = {cx: 1450, cy: 560, R: 210};
export const S05: React.FC = () => {
	const id = 'turns-velocity';
	const f = useCurrentFrame();
	const changes = cue(id, 'It changes the direction'), only = cue(id, 'only the direction'), circle = cue(id, 'velocity circle'), swings = cue(id, 'arrow swings round'), never = cue(id, 'length never changes'), acc = cue(id, 'The acceleration is'), turns = cue(id, 'turns the arrow');
	const k = f * 1.2;
	const c = carOn(B5, k);
	const vc = prog(f, circle, 16);
	const tip: [number, number] = [VCIR.cx + c.v[0] * VCIR.R, VCIR.cy + c.v[1] * VCIR.R];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BendRing g={B5} />
				<BendCar g={B5} k={k} vAt={changes} vLen={160} />
				{f >= acc ? <VecArrow x={c.x + c.toC[0] * 40} y={c.y + c.toC[1] * 40} dx={c.toC[0] * 110} dy={c.toC[1] * 110} color={ACC.stroke} width={7} head={22} at={acc} /> : null}
				{vc > 0 ? <g opacity={vc}>
					<circle cx={VCIR.cx} cy={VCIR.cy} r={VCIR.R} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
					<circle cx={VCIR.cx} cy={VCIR.cy} r={8} fill={INK} />
					<VecArrow x={VCIR.cx} y={VCIR.cy} dx={tip[0] - VCIR.cx} dy={tip[1] - VCIR.cy} color={VEL.stroke} width={9} head={26} />
					{f >= acc ? <VecArrow x={tip[0]} y={tip[1]} dx={c.toC[0] * 110} dy={c.toC[1] * 110} color={ACC.stroke} width={7} head={22} at={acc} /> : null}
					{f >= acc + 10 ? <RightMark x={tip[0]} y={tip[1]} a={[-c.v[0], -c.v[1]]} b={c.toC} s={20} opacity={prog(f, acc + 10, 10)} /> : null}
				</g> : null}
				<Ring cx={(VCIR.cx + tip[0]) / 2} cy={(VCIR.cy + tip[1]) / 2} rx={140} ry={50} at={turns + 10} color={VEL.stroke} />
			</FrameSvg>
			<Lbl x={c.x + c.v[0] * 185} y={c.y + c.v[1] * 185} at={changes} color={VEL.ink} anchor="middle" size={34}>v</Lbl>
			<HandTag x={1100} y={200} text="every velocity arrow drawn from one point" at={circle} size={30} color={INK} />
			<HandTag x={VCIR.cx} y={VCIR.cy + VCIR.R + 60} text="length = speed: constant" at={never} size={TYPE.handSmall} color={VEL.ink} anchor="middle" />
			<HandTag x={VCIR.cx} y={VCIR.cy + VCIR.R + 110} text="turns, doesn't stretch" at={turns} size={TYPE.handSmall} color={ACC.ink} anchor="middle" />
			<Lbl x={1100} y={300} at={acc + 10} color={ACC.ink} size={34}>a at 90° to v</Lbl>
			<Enter at={only - 10} style={{position: 'absolute', left: 96, top: 186, width: 760}}>
				<div style={{...card, border: `3px solid ${INK}`, display: 'inline-block'}}>
					<Title>The inward force</Title>
					<div style={{...DISPLAY(36, VEL.ink, 800)}}>changes the direction of v only</div>
				</div>
			</Enter>
			<HandTag x={770} y={900} text="the car's velocity swings round" at={swings} size={30} color={VEL.ink} />
		</>
	);
};
