// Scenes 1 to 5: the hook (last time's two-slit and grating graphs; the ruled slide zoomed; the prediction; the grating
// curve drawn solid from the waves engine), why many slits make sharp lines (a row of slits with phase dials, the
// cancelling pairs, a two-slit inset and the slit-count slider), the same equation at large angles (the order fan with
// engine angles and the d sin θ close-up), lines per millimetre to d (the magnified ruler strip, the working and the d
// and L brackets on a small painted bench) and measuring a wavelength (painted bench, face-on screen over the painted
// metre rule, a to-scale top view and the working).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {HOLDER, METRE_RULE, OpticsBench, PatternGraph, benchGeom} from '../../physics/light/bench';
import type {BenchAt} from '../../physics/light/bench';
import {PhaseDial, Ray, pairSum, rayEnd} from '../../physics/light/grating';
import {gratingBrightness} from '../../sims/waves';
import {Givens} from '../phys-y12-m6-v01/parts';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HandoffBoard, M7V06FinalFrame} from '../phys-y12-m7-v06/s3';
import {D, HEAD, HEAD_SIZE, LAM, LAM_TAN, ORDERS, SIN15, SLITS, TAN15, TH1R, X1, cap, cue, holdIf, widthRel} from './common';
import {Arc, Bracket, GREY, Lbl, NAVY, ORANGE, RED, ROSE, SLATE, Strip, TopView, fx, sci} from './parts';
import type {Pt} from './parts';

// ---------- 1. hook ----------
const GX = 560, GW = 1240, BOTG = {y: 640, h: 190}, TOPY = 340, TOPH = 190;
const peakU = [-2, -1, 0, 1, 2].map(k => k / 3 / 0.98);
const grat16 = (u: number) => gratingBrightness(16, 1, 1 / 3, Math.asin(Math.max(-1, Math.min(1, u * 0.98))));
const HP = {x: 110, y: 380, w: 330};
const hs = HP.w / (HOLDER.box[2] - HOLDER.box[0]);
const WIN = {x: HP.x + (485 - HOLDER.box[0]) * hs, y: HP.y + (354 - HOLDER.box[1]) * hs, w: (599 - 485) * hs, h: (586 - 354) * hs};
const ZC: Pt = [300, 800];
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const slide = cue(id, 'slide ruled with thousands'), pred = cue(id, 'Make your prediction'), no = cue(id, 'No'), bright = cue(id, 'and bright');
	const h = holdIf(id);
	if (f < 1) return <M7V06FinalFrame />;
	const X = (u: number) => GX + ((u + 1) / 2) * GW;
	const zoom = prog(f, slide, 20);
	const pulse = f >= no ? 0.5 + 0.5 * Math.sin(((f - no) / 30) * Math.PI * 2) : 0;
	return (
		<>
			<HandoffBoard f={0} final heading={false} chip={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={890} at={-60} out={4} size={30} w={1728} color={INK} border={INK}>Next: how does a grating let us measure wavelength?</Chip>
			<FrameSvg>
				{zoom > 0.001 ? <g opacity={zoom}>
					<line x1={WIN.x} y1={WIN.y + WIN.h} x2={ZC[0] - 70} y2={ZC[1] - 50} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<line x1={WIN.x + WIN.w} y1={WIN.y + WIN.h} x2={ZC[0] + 70} y2={ZC[1] - 50} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<rect x={ZC[0] - 170} y={ZC[1] - 60} width={340} height={120} rx={12} fill="#34322f" stroke={INK} strokeWidth={4} />
					{Array.from({length: 34}, (_, i) => <line key={i} x1={ZC[0] - 160 + i * 9.7} y1={ZC[1] - 52} x2={ZC[0] - 160 + i * 9.7} y2={ZC[1] + 52} stroke="#f4efe3" strokeWidth={2.5} opacity={prog(f, slide + 4 + i * 0.6, 6)} />)}
				</g> : null}
				{f >= no ? peakU.map(u => <line key={u} x1={X(u)} y1={TOPY + TOPH + 8} x2={X(u)} y2={BOTG.y - 4} stroke={NAVY.stroke} strokeWidth={4} opacity={0.3 + 0.7 * pulse * (1 - prog(f, bright, 10))} />) : null}
				{f >= bright ? <PatternGraph x={GX} y={BOTG.y} w={GW} h={BOTG.h} fn={grat16} color={RED} n={900} width={5} fill draw={prog(f, bright, 30)} axis={false} /> : null}
				{f >= no ? <Mark x={1490} y={918} at={no} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={900} r={42} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Lbl x={ZC[0]} y={ZC[1] + 100} at={slide + 16} color={INK} size={28} anchor="middle">magnified: equally spaced lines</Lbl>
			<HandTag x={96} y={925} text="each line acts as a slit" at={slide + 24} size={32} color={INK} />
			<Chip x={1000} y={880} at={pred} size={32} w={240} color={INK}>they move</Chip>
			<Chip x={1260} y={880} at={pred + 6} size={32} w={240} color={INK}>same places</Chip>
			<HandTag x={GX + GW / 2 - 60} y={BOTG.y - 30} text="same angles, sharper and brighter" at={bright + 20} size={32} color={RED} />
		</>
	);
};

// ---------- 2. why many slits make sharp lines ----------
const NS = 20, SX = 170, SY0 = 200, SP = 33;
const slitY = (k: number) => SY0 + (k + 0.5) * SP;
const BAR = {x: 470, base: 870, h: 600};
const GR = {x: 1000, y: 560, w: 820, h: 220};
const gfn = (N: number) => (v: number) => gratingBrightness(N, 3, 1, Math.asin((1.4 * v) / 3));
const wText = (N: number) => (N === 2 ? '1' : N === 1000 ? fx(widthRel(N), 3) : fx(widthRel(N), 2));
export const S02: React.FC = () => {
	const id = 'sharp-lines';
	const f = useCurrentFrame();
	const instep = cue(id, 'every slit arrives in step'), tiny = cue(id, 'turn just a tiny bit'), two = cue(id, 'With only two slits'), thou = cue(id, 'a thousand slits'), apart = cue(id, 'half a wavelength apart'), canc = cue(id, 'They cancel'), pairs = cue(id, 'every other pair'), away = cue(id, 'straight away'), lines = cap(id, cue(id, 'More slits, sharper lines'));
	const delta = kf(f, [[tiny, 0], [tiny + 40, (2 * Math.PI) / 60], [apart - 20, (2 * Math.PI) / 60], [apart + 10, (2 * Math.PI) / NS]]);
	const sum = pairSum(NS, delta);
	const step = Math.max(0, Math.min(3, Math.floor((f - thou) / 40)));
	const N = SLITS[step];
	const pairK = f < pairs ? -1 : Math.min(9, Math.floor((f - pairs) / 7) + 1);
	const two2 = pairSum(2, delta);
	const GXv = (v: number) => GR.x + ((v + 1) / 2) * GR.w;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={SX - 7} y={SY0} width={14} height={NS * SP} fill="#34322f" />
				{Array.from({length: NS}, (_, k) => <rect key={k} x={SX - 9} y={slitY(k) - 3} width={18} height={6} fill="#f4efe3" />)}
				{Array.from({length: NS}, (_, k) => {
					const hiPair = (f >= apart && (k === 0 || k === 10)) || (pairK > 0 && (k % 10) <= pairK && (k % 10) >= 1);
					return <PhaseDial key={k} cx={240} cy={slitY(k)} r={14} phase={k * delta} hi={hiPair ? INK : undefined} opacity={prog(f, 2, 12)} />;
				})}
				{pairK > 0 ? Array.from({length: pairK}, (_, i) => <path key={i} d={`M262,${slitY(i + 1)} C${300 + i * 4},${slitY(i + 1)} ${300 + i * 4},${slitY(i + 11)} 262,${slitY(i + 11)}`} fill="none" stroke={SLATE.stroke} strokeWidth={2.5} />) : null}
				<line x1={BAR.x - 40} y1={BAR.base} x2={BAR.x + 40} y2={BAR.base} stroke={INK} strokeWidth={3} />
				<rect x={BAR.x - 30} y={BAR.base - BAR.h * sum} width={60} height={BAR.h * sum} rx={6} fill={RED} opacity={prog(f, instep, 12)} />
				{f >= canc ? <g opacity={prog(f, canc, 10)}>
					<rect x={330} y={slitY(5) - 30} width={70} height={60} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<line x1={340} y1={slitY(5) + 18} x2={390} y2={slitY(5) + 18} stroke={INK} strokeWidth={3} />
				</g> : null}
				{f >= two ? <g opacity={prog(f, two, 12)}>
					<rect x={600} y={190} width={330} height={300} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={633} y={250} width={12} height={170} fill="#34322f" /><rect x={631} y={290} width={16} height={6} fill="#f4efe3" /><rect x={631} y={380} width={16} height={6} fill="#f4efe3" />
					<PhaseDial cx={700} cy={293} r={20} phase={0} /><PhaseDial cx={700} cy={383} r={20} phase={delta} />
					<line x1={790} y1={450} x2={870} y2={450} stroke={INK} strokeWidth={3} />
					<rect x={810} y={450 - 200 * two2} width={40} height={200 * two2} rx={5} fill={RED} />
				</g> : null}
				{<g opacity={prog(f, 2, 12)}>
					{N < 1000 ? <PatternGraph x={GR.x} y={GR.y} w={GR.w} h={GR.h} fn={gfn(N)} color={RED} n={600} width={4} fill /> : <>
						<line x1={GR.x} y1={GR.y + GR.h} x2={GR.x + GR.w} y2={GR.y + GR.h} stroke={INK} strokeWidth={3} />
						{[-1, 0, 1].map(m => <line key={m} x1={GXv(m / 1.4)} y1={GR.y + GR.h} x2={GXv(m / 1.4)} y2={GR.y} stroke={RED} strokeWidth={3} />)}
					</>}
				</g>}
				<Slider x={GR.x + 40} y={880} w={GR.w - 80} v0={0} v1={3} v={kf(f, [[thou, 0], [thou + 40, 1], [thou + 80, 2], [thou + 120, 3]])} ticks={[0, 1, 2, 3]} fmt={t => `${SLITS[t]}`} label="slits N" color={NAVY.stroke} opacity={prog(f, 2, 12)} />
			</FrameSvg>
			<Lbl x={SX - 20} y={SY0 - 24} at={0} color={GREY.ink} size={26}>illustrative: 20 slits drawn, imagine 1000</Lbl>
			<Lbl x={BAR.x} y={BAR.base + 40} at={instep} color={INK} size={28} anchor="middle">total</Lbl>
			<HandTag x={BAR.x + 50} y={BAR.base - BAR.h - 10} text="adds up" at={instep + 10} out={tiny + 30} size={32} color={INK} />
			<Lbl x={SX + 40} y={slitY(0) + 8} at={apart} color={INK} size={26}>1</Lbl>
			<Lbl x={SX + 120} y={slitY(10) + 8} at={apart} color={INK} size={26}>N/2 + 1</Lbl>
			<Lbl x={365} y={slitY(5) - 44} at={canc} color={INK} size={26} anchor="middle">pair: 0</Lbl>
			<HandTag x={560} y={slitY(9)} text="half a wave apart: cancel" at={canc + 10} size={32} color={INK} marks={[{kind: 'circle', cx: 240, cy: slitY(0), rx: 30, ry: 26}, {kind: 'circle', cx: 240, cy: slitY(10), rx: 30, ry: 26}]} />
			<Lbl x={765} y={225} at={two} color={INK} size={28} anchor="middle">two slits, same turn</Lbl>
			<HandTag x={620} y={530} text="two slits: still bright, broad band" at={two + 16} size={30} color={INK} />
			<Lbl x={1000} y={470} at={2} color={INK} size={30}>brightness on a far screen: same spacing d</Lbl>
			<HandTag x={BAR.x + 50} y={BAR.base - 30} text="dark" at={away + 8} size={34} color={INK} />
			<Lbl x={GR.x} y={GR.y - 30} at={2} color={NAVY.ink} size={44}>{`N = ${N}`}</Lbl>
			<Lbl x={GR.x + 330} y={GR.y - 30} at={2} color={NAVY.ink} size={44}>{`peak width × ${wText(N)}`}</Lbl>
			<Lbl x={GR.x + GR.w} y={GR.y + GR.h + 34} at={2} color={GREY.ink} size={26} anchor="end">{N === 1000 ? 'each graph scaled to its own peak; 1000: far thinner than this line' : 'each graph scaled to its own peak'}</Lbl>
			<HandTag x={GR.x + 20} y={GR.y + GR.h + 80} text="same place, thinner" at={thou + 130} size={32} color={RED} />
			<Chip x={1000} y={330} at={lines} size={32} w={820} color={INK}>more slits → sharper, brighter lines</Chip>
		</>
	);
};

// ---------- 3. the same equation, now at large angles ----------
const G3: Pt = [330, 560];
const CU = {x: 1240, y: 540, w: 580, h: 340};
export const S03: React.FC = () => {
	const id = 'grating-equation';
	const f = useCurrentFrame();
	const rule = cue(id, 'exactly the same rule'), neigh = cue(id, 'Neighbouring slits must differ in path'), eq = cue(id, 'So d sine theta equals m lambda'), sp = cue(id, 'spacing between neighbouring lines'), ang = cue(id, 'angle from the straight-through direction'), ord = cue(id, 'm is the order'), tens = cue(id, 'tens of degrees'), itself = cap(id, cue(id, 'itself'));
	const th1 = ORDERS.find(o => o.m === 1)?.deg ?? 15;
	const a = kf(f, [[tens, 4], [tens + 30, th1]]);
	const T = (15 * Math.PI) / 180;
	const s1: Pt = [CU.x + 120, CU.y + 70], s2: Pt = [CU.x + 120, CU.y + 270];
	const dd = s2[1] - s1[1];
	const F: Pt = [s2[0] + dd * Math.sin(T) * Math.cos(T), s2[1] - dd * Math.sin(T) * Math.sin(T)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1100} height={720} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<TopView g={G3} len={800} orders={[{deg: 0}, {deg: a, draw: prog(f, 4, 20)}, {deg: -a, draw: prog(f, 4, 20)}]} />
				<Arc c={G3} r={230} a0={0} a1={a} opacity={prog(f, ang, 12)} />
				{f >= neigh ? <g opacity={prog(f, neigh, 12)}>
					<rect x={CU.x} y={CU.y} width={CU.w} height={CU.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={s1[0] - 8} y={CU.y + 14} width={16} height={CU.h - 28} fill="#34322f" />
					{[s1, s2].map((s, i) => <rect key={i} x={s[0] - 10} y={s[1] - 5} width={20} height={10} fill="#f4efe3" />)}
					{[s1, s2].map((s, i) => <Ray key={i} o={s} deg={15} len={420} color={RED} width={5} />)}
					<line x1={s1[0]} y1={s1[1]} x2={F[0]} y2={F[1]} stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
					<line x1={s2[0]} y1={s2[1]} x2={F[0]} y2={F[1]} stroke={ROSE.stroke} strokeWidth={10} />
				</g> : null}
				{f >= sp ? <Bracket a={[s1[0] - 40, s1[1]]} b={[s2[0] - 40, s2[1]]} n={[-1, 0]} color={ROSE.stroke} width={5} opacity={prog(f, sp, 10)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={215} at={0} color={GREY.ink} size={26}>a grating from above (not to scale)</Lbl>
			<Lbl x={G3[0] - 20} y={G3[1] + 110} at={0} color={INK} size={28} anchor="middle">grating</Lbl>
			<Lbl x={rayEnd(G3, 0, 800)[0] - 10} y={G3[1] - 18} at={ord} color={INK} size={30} anchor="end">m = 0</Lbl>
			<Lbl x={rayEnd(G3, a, 800)[0] - 10} y={rayEnd(G3, a, 800)[1] - 18} at={ord} color={INK} size={30} anchor="end">m = +1</Lbl>
			<Lbl x={rayEnd(G3, -a, 800)[0] - 10} y={rayEnd(G3, -a, 800)[1] + 40} at={ord} color={INK} size={30} anchor="end">m = −1</Lbl>
			<Lbl x={G3[0] + 250} y={G3[1] - 40} at={ang} color={NAVY.ink} size={36}>θ</Lbl>
			<Lbl x={CU.x + 20} y={CU.y - 20} at={neigh} color={GREY.ink} size={26}>two neighbouring lines, close up (not to scale)</Lbl>
			<Lbl x={s1[0] - 70} y={(s1[1] + s2[1]) / 2 + 12} at={sp} color={ROSE.ink} size={40} anchor="end">d</Lbl>
			<Lbl x={F[0] + 20} y={F[1] + 50} at={neigh + 10} color={ROSE.ink} size={30}>d sin θ</Lbl>
			<Strip x={1240} y={200} at={rule} out={eq} size={34}>bright: neighbouring paths differ by mλ</Strip>
			<div style={{position: 'absolute', left: 1240, top: 300}}><Row at={eq} size={60}>{f >= itself ? <AnswerBox at={itself}><span style={{whiteSpace: 'nowrap'}}>d sin θ = mλ</span></AnswerBox> : <span style={{whiteSpace: 'nowrap'}}>d sin θ = mλ</span>}</Row></div>
			<Lbl x={1250} y={420} at={eq + 10} color={GREY.ink} size={28}>same as two slits</Lbl>
			<HandTag x={1250} y={470} text="large angle" at={tens + 30} size={32} color={NAVY.ink} />
			<CrossedChip x={120} y={760} at={itself - 30} crossAt={itself} size={30} caption="small angles only">Δx = λL/d</CrossedChip>
			<HandTag x={600} y={860} text="big angles: use θ itself" at={itself + 16} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. from lines per millimetre to d ----------
const RU = {x: 160, y: 220, w: 1600, h: 80};
const B4: BenchAt = {x: 960, y: 800, w: 860, g: 0.8, ap: 1080, slit: 1380, scr: 1730};
export const S04: React.FC = () => {
	const id = 'line-density';
	const f = useCurrentFrame();
	const lab = cue(id, 'labelled with a line density'), turn = cue(id, 'turn that around'), perm = cue(id, 'four hundred thousand lines per metre'), met = cue(id, 'minus six metres'), trap = cue(id, "Here's the trap"), btw = cue(id, 'the spacing between lines on the grating'), scr = cap(id, cue(id, 'distance to the screen'));
	const g = benchGeom(B4);
	const lines = Math.round(400 * prog(f, lab, 40));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={RU.x} y={RU.y} width={RU.w} height={RU.h} rx={6} fill="#34322f" opacity={prog(f, 2, 12)} />
				{Array.from({length: lines}, (_, i) => <line key={i} x1={RU.x + (i + 0.5) * (RU.w / 400)} y1={RU.y + 6} x2={RU.x + (i + 0.5) * (RU.w / 400)} y2={RU.y + RU.h - 6} stroke="#f4efe3" strokeWidth={1.6} />)}
				<path d={`M${RU.x},${RU.y + RU.h + 10} v16 M${RU.x},${RU.y + RU.h + 18} H${RU.x + RU.w} M${RU.x + RU.w},${RU.y + RU.h + 10} v16`} stroke={INK} strokeWidth={4} fill="none" opacity={prog(f, 4, 12)} />
				<OpticsBench b={B4} color={RED} spread={30} slide="grating" gap={0.8} sep={2.4} opacity={prog(f, 2, 14)} />
				{f >= lab + 30 ? <g opacity={prog(f, lab + 30, 14)}>
					<rect x={RU.x + RU.w - 90} y={RU.y - 6} width={90} height={RU.h + 12} fill="none" stroke={INK} strokeWidth={3} />
					<line x1={RU.x + RU.w - 90} y1={RU.y + RU.h + 6} x2={960} y2={350} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<line x1={RU.x + RU.w} y1={RU.y + RU.h + 6} x2={1820} y2={350} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<rect x={960} y={350} width={860} height={180} rx={10} fill="#34322f" stroke={INK} strokeWidth={4} />
					{Array.from({length: 9}, (_, i) => <line key={i} x1={1010 + i * 95} y1={360} x2={1010 + i * 95} y2={520} stroke="#f4efe3" strokeWidth={6} />)}
				</g> : null}
				{f >= turn ? <Bracket a={[1010 + 4 * 95, 545]} b={[1010 + 5 * 95, 545]} n={[0, -1]} color={ROSE.stroke} width={5} opacity={prog(f, turn, 10)} /> : null}
				{f >= btw ? <Bracket a={[g.window.x - 6, g.window.y]} b={[g.window.x - 6, g.window.y + g.window.h]} n={[-1, 0]} color={ROSE.stroke} width={5} t={10} opacity={prog(f, btw, 10)} /> : null}
				{f >= scr ? <Bracket a={[B4.slit, g.railY + 56]} b={[B4.scr, g.railY + 56]} n={[0, 1]} color={ORANGE.stroke} width={5} opacity={prog(f, scr, 10)} /> : null}
			</FrameSvg>
			<Lbl x={RU.x + 400} y={RU.y + RU.h + 60} at={4} color={INK} size={30} anchor="middle">1 mm (magnified)</Lbl>
			<HandTag x={RU.x + RU.w - 220} y={RU.y - 30} text="400 lines" at={lab + 30} size={32} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 14, width: 860}}>
				<Row at={lab} ageAt={perm} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>N = 400 lines per mm</span></Row>
				<Row at={perm} ageAt={met + 20} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap', color: NAVY.ink}}>= 4.00 × 10⁵ lines per m</span></Row>
				<Row at={met - 6} size={44}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>d = 1 / N = 1 / (4.00 × 10⁵)</span></Row>
				<Row at={met} size={60}><AnswerBox at={met + 6}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`d = ${sci(D, 1)} m`}</span></AnswerBox></Row>
			</div>
			<HandTag x={700} y={560} text="flip it" at={turn + 10} size={36} color={ROSE.ink} marks={[{kind: 'arrow', from: [620, 440], to: [560, 600], bend: -0.4}]} />
			<Chip x={960} y={555} at={btw} size={26} w={860} color={ROSE.ink} border={ROSE.stroke}>Grating element (d): the distance between adjacent slits in a diffraction grating; d = 1/N where N is lines per metre.</Chip>
			<Lbl x={g.window.x - 30} y={g.window.y - 26} at={btw + 6} color={ROSE.ink} size={28} anchor="middle">d (2.5 μm)</Lbl>
			<Lbl x={(B4.slit + B4.scr) / 2} y={g.railY + 100} at={scr} color={ORANGE.ink} size={30} anchor="middle">L (to the screen)</Lbl>
			<Lbl x={96} y={740} at={trap} color={INK} size={32}>two distances: keep them apart</Lbl>
			<CrossedChip x={96} y={780} at={btw + 20} crossAt={scr - 40} size={30} caption="d: between lines">d = grating-to-screen distance</CrossedChip>
			<HandTag x={1300} y={920} text="L: only for the angle" at={scr} size={32} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5. measuring a wavelength ----------
const B5: BenchAt = {x: 1040, y: 360, w: 780, g: 0.75, ap: 1150, slit: 1430, scr: 1750};
const SC5 = {x: 1100, y: 490, w: 660, h: 70};
const TV: Pt = [1120, 800];
const LPX = 560;
export const S05: React.FC = () => {
	const id = 'measure-wavelength';
	const f = useCurrentFrame();
	const pass = cue(id, 'passes through the four hundred'), centre = cue(id, 'from the centre'), find = cue(id, 'First, find the angle'), dg = cue(id, 'fifteen point nought degrees'), sintan = cue(id, 'sine and tan are noticeably different'), geq = cue(id, 'Now use the grating equation'), nm = cue(id, 'six hundred and forty-seven nanometres'), exp = cap(id, cue(id, 'Red, as expected'));
	const xpx = X1 * LPX;
	const U = (m: number) => (m * X1) / 0.5;
	const top: Pt = [TV[0] + LPX, TV[1] - xpx];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={0} size={34}>Find the wavelength.</Strip>
			<Strip x={96} y={258} at={4} size={44}>d sin θ = mλ</Strip>
			<Givens x={96} y={350} w={900} at={8} size={30} lines={['N = 400 lines per mm → d = 2.5 × 10⁻⁶ m', 'L = 1.00 m', `x₁ = ${fx(X1, 3)} m (first order, m = 1)`]} />
			<FrameSvg>
				<OpticsBench b={B5} color={RED} spread={24} slide="grating" gap={0.8} sep={2.4} beam={prog(f, pass, 30)} />
				<SpotScreen5 f={f} centre={centre} U={U} />
				<LPlate spec={METRE_RULE} p={{x: SC5.x, y: SC5.y + SC5.h + 6, w: SC5.w}} opacity={prog(f, 6, 12)} />
				{f >= centre ? <Bracket a={[SC5.x + SC5.w / 2, SC5.y - 12]} b={[SC5.x + ((U(1) + 1) / 2) * SC5.w, SC5.y - 12]} n={[0, 1]} color={ORANGE.stroke} opacity={prog(f, centre, 10)} /> : null}
				<rect x={1040} y={630} width={780} height={300} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, 6, 12)} />
				<g opacity={prog(f, 6, 12)}>
					<TopView g={TV} len={LPX / Math.cos((TH1R * Math.PI) / 180)} orders={[{deg: 0}, {deg: TH1R, draw: prog(f, centre, 20)}]} screenX={TV[0] + LPX} screenH={150} gh={60} beamIn={0.3} />
				</g>
				{f >= centre ? <circle cx={top[0]} cy={top[1]} r={9} fill={RED} stroke={INK} strokeWidth={2} /> : null}
				{f >= centre ? <Bracket a={[top[0] + 22, TV[1]]} b={[top[0] + 22, top[1]]} n={[-1, 0]} color={ORANGE.stroke} opacity={prog(f, centre + 6, 10)} /> : null}
				{f >= centre ? <Bracket a={[TV[0], TV[1] + 40]} b={[TV[0] + LPX, TV[1] + 40]} n={[0, -1]} color={ORANGE.stroke} opacity={prog(f, centre + 10, 10)} /> : null}
				<Arc c={TV} r={150} a0={0} a1={TH1R} opacity={prog(f, find, 12)} width={5} />
			</FrameSvg>
			<Lbl x={SC5.x} y={SC5.y - 40} at={6} color={INK} size={26}>the screen, face on</Lbl>
			<Lbl x={SC5.x + SC5.w / 2 + 70} y={SC5.y - 40} at={centre + 6} color={ORANGE.ink} size={28} anchor="middle">{`x = ${fx(X1, 3)} m`}</Lbl>
			<Lbl x={1060} y={660} at={6} color={GREY.ink} size={26}>from above (to scale)</Lbl>
			<Lbl x={top[0] + 40} y={(TV[1] + top[1]) / 2 + 10} at={centre + 6} color={ORANGE.ink} size={30}>x</Lbl>
			<Lbl x={TV[0] + LPX / 2} y={TV[1] + 86} at={centre + 10} color={ORANGE.ink} size={30} anchor="middle">L = 1.00 m</Lbl>
			<Lbl x={TV[0] + 170} y={TV[1] - 14} at={find} color={NAVY.ink} size={32}>θ</Lbl>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 12, width: 920}}>
				<Row at={find + 10} ageAt={geq} size={44} oldSize={32}><span style={{whiteSpace: 'nowrap'}}>{`tan θ = x / L = ${fx(X1, 3)} / 1.00`}</span></Row>
				<Row at={dg} ageAt={geq} size={44} oldSize={32}><span style={{whiteSpace: 'nowrap', color: NAVY.ink}}>{`→ θ = ${fx(TH1R, 1)}°`}</span></Row>
				<Row at={geq + 10} size={40}><span style={{whiteSpace: 'nowrap'}}>{`λ = d sin θ / m = (2.5 × 10⁻⁶ × sin ${fx(TH1R, 1)}°) / 1`}</span></Row>
				<Row at={nm - 6} size={56}><AnswerBox at={nm}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${sci(LAM, 2)} m = ${fx(LAM * 1e9, 0)} nm`}</span></AnswerBox></Row>
			</div>
			<Chip x={540} y={180} at={sintan} size={30} w={520} color={NAVY.ink} border={NAVY.stroke}>{`sin 15° = ${fx(SIN15, 3)},  tan 15° = ${fx(TAN15, 3)}`}</Chip>
			<CrossedChip x={96} y={800} at={nm + 6} crossAt={nm + 20} size={28} caption="use sin θ, not tan θ, at large angles">{`λ = d tan θ = ${fx(LAM_TAN * 1e9, 0)} nm`}</CrossedChip>
			<HandTag x={560} y={925} text="tan first, then sin" at={exp} size={32} color={NAVY.ink} />
			<FrameSvg><rect x={880} y={820} width={110} height={56} rx={10} fill={RED} stroke={INK} strokeWidth={3} opacity={prog(f, exp, 12)} /></FrameSvg>
			<Lbl x={935} y={858} at={exp + 4} color="#fff" size={30} anchor="middle" bg={false}>red</Lbl>
		</>
	);
};
const SpotScreen5: React.FC<{f: number; centre: number; U: (m: number) => number}> = ({f, centre, U}) => {
	const o = prog(f, centre, 12);
	const X = (u: number) => SC5.x + ((u + 1) / 2) * SC5.w;
	return (
		<g opacity={prog(f, 6, 12)}>
			<rect x={SC5.x} y={SC5.y} width={SC5.w} height={SC5.h} rx={8} fill="#171412" stroke={INK} strokeWidth={3} />
			{[-1, 0, 1].map(m => <g key={m} opacity={o}><ellipse cx={X(U(m))} cy={SC5.y + SC5.h / 2} rx={10} ry={26} fill={RED} opacity={0.35} /><ellipse cx={X(U(m))} cy={SC5.y + SC5.h / 2} rx={5} ry={20} fill={RED} /></g>)}
		</g>
	);
};
