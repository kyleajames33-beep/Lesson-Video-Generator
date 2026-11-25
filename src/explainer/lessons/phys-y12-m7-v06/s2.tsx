// Scenes 6 to 10: why the bands are evenly spaced (the pull back to the slits, the screen and the big triangle; the
// small-angle table; equal Δx brackets), what changes the spacing (λ, L and d sliders on a live band pattern from the
// waves engine), a worked example (the site's numbers in the task, equation and givens layout, then run backwards),
// measuring it well (the painted bench, the face-on screen over the painted metre rule, ten spacings, white light) and
// the memory aid (the path-difference bar over its bands, the formula's letters growing and shrinking).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {METRE_RULE, OpticsBench, ScreenView, benchGeom} from '../../physics/light/bench';
import type {BenchAt} from '../../physics/light/bench';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HEAD, HEAD_SIZE, READ_ERR, REV_DX, REV_L, S30, SLIDES, T30, WE, WE_DX, WE_SIN1, WE_SLIP, WE_TAN1, WE_TH1, cap, cue} from './common';
import {GREY, Lbl, NAVY, ORANGE, PdMeter, RED_INK, ROSE, Strip, VBands, VIOLET_396, WhiteBands, col, fx, sci, twoSlit} from './parts';

// ---------- 6. why the bands are evenly spaced ----------
const SL6 = {x: 200, y: 560}, SCX = 1150, DX6 = 110;
export const S06: React.FC = () => {
	const id = 'screen-relation';
	const f = useCurrentFrame();
	const tan = cue(id, 'tan theta equal to x over L'), eq = cue(id, 'almost equal'), xm = cue(id, 'm lambda L over d'), step = cue(id, 'Each step in m'), sp = cue(id, "why they're regularly spaced"), small = cap(id, cue(id, 'the angles are small'));
	const pull = prog(f, 0, 30);
	const z = 3 - 2 * pull;
	const yb = SL6.y - 2 * DX6;
	const bright = (y: number) => Math.cos((Math.PI * (y - SL6.y)) / DX6) ** 2;
	const th = Math.atan2(SL6.y - yb, SCX - SL6.x);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1100} height={470} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<g transform={`translate(${SL6.x} ${SL6.y}) scale(${z}) translate(${-SL6.x} ${-SL6.y})`}>
					<rect x={SL6.x - 6} y={SL6.y - 40} width={12} height={30} fill="#4a4643" />
					<rect x={SL6.x - 6} y={SL6.y - 6} width={12} height={12} fill="#4a4643" />
					<rect x={SL6.x - 6} y={SL6.y + 10} width={12} height={30} fill="#4a4643" />
				</g>
				<g opacity={pull}>
					<line x1={SL6.x} y1={SL6.y} x2={SCX} y2={SL6.y} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 9" />
					<line x1={SL6.x} y1={SL6.y} x2={SCX} y2={yb} stroke={ORANGE.stroke} strokeWidth={6} />
					<path d={`M${SL6.x + 170},${SL6.y} A170,170 0 0,0 ${SL6.x + 170 * Math.cos(th)},${SL6.y - 170 * Math.sin(th)}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
					<VBands x={SCX} y={190} w={44} h={450} bright={bright} color={col(650)} />
					<line x1={SL6.x} y1={SL6.y - 6} x2={SCX} y2={yb} stroke={ORANGE.stroke} strokeWidth={3} opacity={0.7} />
					<path d={`M${SCX + 56},${SL6.y} h14 V${yb} h-14`} stroke={INK} strokeWidth={4} fill="none" />
				</g>
				{f >= sp ? [0, 1, 2].map(m => <path key={m} d={`M${SCX - 40},${SL6.y - m * DX6 - 4} h-14 V${SL6.y - (m + 1) * DX6 + 4} h14`} stroke={NAVY.stroke} strokeWidth={5} fill="none" opacity={prog(f, sp + m * 8, 10)} />) : null}
				<ScreenView x={96} y={720} w={1100} h={110} bright={u => Math.cos(Math.PI * u * 5) ** 2} color={col(650)} n={240} opacity={1 - prog(f, eq, 14)} />
				{f >= sp ? [1, 2, 3].map(m => <circle key={m} cx={SCX + 22} cy={SL6.y - m * DX6} r={9} fill="#fff" stroke={INK} strokeWidth={3} opacity={prog(f, sp, 12)} />) : null}
			</FrameSvg>
			<Lbl x={SL6.x - 20} y={SL6.y + 60} at={0} color={INK} size={28} anchor="start">slits</Lbl>
			<Lbl x={(SL6.x + SCX) / 2} y={SL6.y + 46} at={10} color={INK} size={36} anchor="middle">L</Lbl>
			<Lbl x={SCX + 90} y={(SL6.y + yb) / 2 + 10} at={10} color={INK} size={36}>x</Lbl>
			<Lbl x={SL6.x + 190} y={SL6.y - 30} at={10} color={NAVY.ink} size={34}>θ</Lbl>
			<Lbl x={SCX} y={176 + 470 + 30} at={10} color={INK} size={26} anchor="middle">screen</Lbl>
			<Lbl x={120} y={210} at={10} color={GREY.ink} size={26}>not to scale: real angles are tiny</Lbl>
			<Lbl x={96} y={700} at={10} out={eq} color={INK} size={28}>the same bands, screen face on (schematic)</Lbl>
			{[1, 2, 3].map(m => <Lbl key={m} x={SCX - 70} y={SL6.y - m * DX6 + 10} at={sp + 10} color={NAVY.ink} size={28} anchor="end">{`m = ${m}`}</Lbl>)}
			<Lbl x={SCX - 70} y={SL6.y - 0.5 * DX6 + 10} at={sp + 20} color={NAVY.ink} size={28} anchor="end">Δx</Lbl>
			<Strip x={1240} y={190} at={0} out={tan} size={40}>so far: d sin θ = mλ</Strip>
			<Strip x={1240} y={190} at={tan} size={44}>tan θ = x / L</Strip>
			<Chip x={1240} y={275} at={eq} size={30} w={580} color={INK}>small θ: sin θ ≈ tan θ</Chip>
			<Strip x={1240} y={350} at={xm - 6} out={step} size={40}>d (x / L) = mλ</Strip>
			<Strip x={1240} y={350} at={step} size={40}>x = mλL / d</Strip>
			<div style={{position: 'absolute', left: 1240, top: 450}}><Row at={sp - 6} size={60}><AnswerBox at={sp}><span style={{whiteSpace: 'nowrap'}}>Δx = λL / d</span></AnswerBox></Row></div>
			<Lbl x={1240} y={350 + 110} at={xm} out={sp - 8} color={INK} size={44}>x = mλL / d</Lbl>
			<HandTag x={1240} y={600} text="same step every time" at={sp + 20} size={34} color={NAVY.ink} />
			<Lbl x={96} y={700} at={eq + 10} color={INK} size={36}>{`θ₁ ≈ ${fx(WE_TH1, 3)}°:  sin θ = ${fx(WE_SIN1, 6)},  tan θ = ${fx(WE_TAN1, 6)}  ✓`}</Lbl>
			<CrossedChip x={96} y={740} at={eq + 30} crossAt={eq + 44} size={30} caption="large angles: not equal">{`θ = 30°:  sin θ = ${fx(S30, 3)},  tan θ = ${fx(T30, 3)}`}</CrossedChip>
			<Chip x={760} y={760} at={small} size={28} w={1060} color={NAVY.ink} border={NAVY.stroke}>conditions: L ≫ d; small angles (x ≪ L); coherent, single wavelength</Chip>
		</>
	);
};

// ---------- 7. what changes the spacing ----------
const SV7 = {x: 96, y: 300, w: 1728, h: 160};
const MM7 = 12;
export const S07: React.FC = () => {
	const id = 'spacing-factors';
	const f = useCurrentFrame();
	const lng = cue(id, 'A longer wavelength'), far = cue(id, 'A screen further away'), gap = cue(id, 'smaller gap between the slits'), apart = cue(id, 'move further apart'), halves = cap(id, cue(id, 'the spacing halves'));
	const ts = [0, lng, far, gap, halves];
	const key = (i: number) => ts.map((t, k) => [t, SLIDES[k][i]] as [number, number]).flatMap(([t, v], k) => (k === 0 ? [[0, v]] : [[t, SLIDES[k - 1][i]], [t + 24, v]])) as [number, number][];
	const lam = kf(f, key(0)), L = kf(f, key(1)), d = kf(f, key(2));
	const dx = (lam * L) / d;
	const c = col(lam * 1e9);
	const X = (u: number) => SV7.x + ((u + 1) / 2) * SV7.w;
	const u1 = (dx * 1e3) / MM7;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ScreenView x={SV7.x} y={SV7.y} w={SV7.w} h={SV7.h} bright={u => twoSlit(u * MM7 * 1e-3, d, lam, L)} color={c} n={300} />
				<path d={`M${X(0)},${SV7.y - 10} v-16 M${X(0)},${SV7.y - 18} H${X(u1)} M${X(u1)},${SV7.y - 10} v-16`} stroke={INK} strokeWidth={5} fill="none" />
				<Slider x={130} y={590} w={520} v0={400} v1={700} v={lam * 1e9} ticks={[450, 550, 650]} label="λ (nm)" color={NAVY.stroke} />
				<Slider x={130} y={720} w={520} v0={0.8} v1={2.2} v={L} ticks={[1, 1.5, 2]} label="L (m)" color={NAVY.stroke} />
				<Slider x={130} y={850} w={520} v0={0.2} v1={0.55} v={d * 1e3} ticks={[0.25, 0.5]} fmt={t => fx(t, 2)} label="d (mm)" color={ROSE.stroke} />
			</FrameSvg>
			<Lbl x={96} y={220} at={0} color={INK} size={60}>Δx = λL / d</Lbl>
			<Lbl x={X(u1 / 2)} y={SV7.y - 50} at={0} color={INK} size={34} anchor="middle">Δx</Lbl>
			<Lbl x={720} y={600} at={0} color={NAVY.ink} size={44}>{`λ = ${fx(lam * 1e9, 0)} nm`}</Lbl>
			<Lbl x={720} y={730} at={0} color={NAVY.ink} size={44}>{`L = ${fx(L, 1)} m`}</Lbl>
			<Lbl x={720} y={860} at={0} color={ROSE.ink} size={44}>{`d = ${fx(d * 1e3, 2)} mm`}</Lbl>
			<Lbl x={1160} y={620} at={0} color={INK} size={60}>{`Δx = ${fx(dx * 1e3, 2)} mm`}</Lbl>
			<Lbl x={SV7.x + SV7.w} y={SV7.y + SV7.h + 30} at={0} color={GREY.ink} size={26} anchor="end">bands in the light's true colour (schematic); Δx = λL / d</Lbl>
			<CrossedChip x={1160} y={690} at={apart} crossAt={apart + 14} size={30} caption="smaller d: wider spacing">slits closer → bands closer</CrossedChip>
			<HandTag x={1160} y={850} text="d on the bottom" at={apart + 24} out={halves} size={34} color={ROSE.ink} />
			<HandTag x={1160} y={850} text="Δx ∝ 1/d" at={halves + 20} size={36} color={ROSE.ink} />
			<HandTag x={96} y={220} at={halves + 10} marks={[{kind: 'circle', cx: 400, cy: 222, rx: 30, ry: 40}]} color={ROSE.stroke} />
		</>
	);
};

// ---------- 8. a worked example ----------
const SV8 = {x: 900, y: 360, w: 920, h: 100};
export const S08: React.FC = () => {
	const id = 'worked-example';
	const f = useCurrentFrame();
	const calc = cue(id, "That's six hundred and thirty-two point eight"), six = cue(id, 'six point one millimetres'), ang = cue(id, 'nought point one five degrees'), back = cue(id, 'run it backwards'), meas = cue(id, 'Measure a spacing'), nine = cap(id, cue(id, 'three hundred and ninety-six nanometres'));
	const mm = 20;
	const u1 = (WE_DX * 1e3) / mm;
	const X = (u: number) => SV8.x + ((u + 1) / 2) * SV8.w;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={0} out={back} size={34}>Find the fringe spacing.</Strip>
			<Strip x={96} y={180} at={back + 10} size={34}>Find λ from a measured spacing.</Strip>
			<Strip x={96} y={262} at={6} size={44}>Δx = λL / d</Strip>
			<div style={{position: 'absolute', left: 96, top: 350, width: 720, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px', opacity: prog(f, 10, 12)}}>
				{['λ = 632.8 nm = 632.8 × 10⁻⁹ m', 'd = 0.25 mm = 0.25 × 10⁻³ m', 'L = 2.4 m'].map(t => <div key={t} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: NAVY.ink}}>{t}</div>)}
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: ROSE.ink, opacity: prog(f, meas, 12)}}>{f >= meas ? 'Δx = 3.8 mm = 3.8 × 10⁻³ m (measured)' : ''}</div>
			</div>
			<FrameSvg>
				<ScreenView x={SV8.x} y={SV8.y} w={SV8.w} h={SV8.h} bright={u => Math.cos((Math.PI * u * mm * 1e-3) / WE_DX) ** 2} color={col(633)} n={240} opacity={prog(f, 12, 12)} />
				{f >= six ? <path d={`M${X(0)},${SV8.y + SV8.h + 10} v14 M${X(0)},${SV8.y + SV8.h + 17} H${X(u1)} M${X(u1)},${SV8.y + SV8.h + 10} v14`} stroke={INK} strokeWidth={5} fill="none" opacity={prog(f, six, 12)} /> : null}
				{f >= nine ? <rect x={1500} y={800} width={120} height={70} rx={10} fill={VIOLET_396} stroke={INK} strokeWidth={3} opacity={prog(f, nine, 12)} /> : null}
			</FrameSvg>
			<Lbl x={SV8.x} y={SV8.y - 20} at={12} color={INK} size={26}>the red bands (schematic)</Lbl>
			<Lbl x={X(u1 / 2)} y={SV8.y + SV8.h + 60} at={six + 10} color={INK} size={30} anchor="middle">{`Δx = ${fx(WE_DX * 1e3, 1)} mm`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 12, width: 1000}}>
				<Row at={calc} ageAt={back} size={44} oldSize={32}><span style={{whiteSpace: 'nowrap'}}>{`Δx = (632.8 × 10⁻⁹ × ${fx(WE.L, 1)}) / (0.25 × 10⁻³)`}</span></Row>
				<Row at={six - 6} ageAt={back} size={60} oldSize={38}><AnswerBox at={six}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${sci(WE_DX, 1)} m = ${fx(WE_DX * 1e3, 1)} mm`}</span></AnswerBox></Row>
				<Row at={meas + 10} size={44}><span style={{whiteSpace: 'nowrap'}}>{`λ = Δx d / L = (3.8 × 10⁻³ × 0.25 × 10⁻³) / ${fx(WE.L, 1)}`}</span></Row>
				<Row at={nine - 6} size={52}><AnswerBox at={nine}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${sci(REV_L, 2)} m = ${fx(REV_L * 1e9, 0)} nm`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1100} y={520} at={six + 30} crossAt={six + 46} size={28} w={720} caption="mm → × 10⁻³ m">{`(632.8 × 10⁻⁹ × 2.4) / 0.25 = ${sci(WE_SLIP, 1)} m`}</CrossedChip>
			<Chip x={1100} y={680} at={ang} size={28} w={720} color={NAVY.ink} border={NAVY.stroke}>{`sin θ₁ = λ/d = ${sci(WE_SIN1, 1)} → θ₁ ≈ ${fx(WE_TH1, 2)}°: small`}</Chip>
			<HandTag x={1640} y={840} text="violet" at={nine + 10} size={38} color={VIOLET_396} />
			<Lbl x={1100} y={790} at={meas + 20} color={GREY.ink} size={26}>{`check: ${fx(REV_DX * 1e3, 1)} mm × 0.25 mm / 2.4 m`}</Lbl>
		</>
	);
};

// ---------- 9. measuring it well ----------
const B9: BenchAt = {x: 96, y: 540, w: 1000, g: 1.1, ap: 250, slit: 580, scr: 950};
const SV9 = {x: 1180, y: 200, w: 640, h: 110};
const MM9 = 32;
export const S09: React.FC = () => {
	const id = 'measuring-well';
	const f = useCurrentFrame();
	const one = cue(id, "don't measure one spacing"), ten = cue(id, 'Measure across ten spacings'), tape = cue(id, 'Measure L with a tape'), sep = cue(id, "the slide's slit separation"), blur = cue(id, 'the bands blur'), never = cap(id, cue(id, 'Never look along the beam'));
	const g = benchGeom(B9);
	const dx = (650e-9 * 2.0) / 0.25e-3;
	const u1 = (dx * 1e3) / MM9;
	const X = (u: number) => SV9.x + ((u + 1) / 2) * SV9.w;
	const x0 = X(-5 * u1), x10 = X(5 * u1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OpticsBench b={B9} color={col(650)} spread={20} slide="double" gap={1.3} sep={6} />
				<line x1={g.card.x + g.card.w} y1={g.card.y} x2={SV9.x} y2={SV9.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={g.card.x + g.card.w} y1={g.card.y + g.card.h} x2={SV9.x} y2={SV9.y + SV9.h} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<ScreenView x={SV9.x} y={SV9.y} w={SV9.w} h={SV9.h} bright={u => twoSlit(u * MM9 * 1e-3, 0.25e-3, 650e-9, 2.0)} color={col(650)} n={260} />
				<LPlate spec={METRE_RULE} p={{x: SV9.x, y: SV9.y + SV9.h + 8, w: SV9.w}} />
				{f >= one && f < ten ? <path d={`M${X(0)},${SV9.y - 8} v-14 M${X(0)},${SV9.y - 15} H${X(u1)} M${X(u1)},${SV9.y - 8} v-14`} stroke={INK} strokeWidth={5} fill="none" opacity={prog(f, one, 12)} /> : null}
				{f >= ten ? <path d={`M${x0},${SV9.y - 8} v-14 M${x0},${SV9.y - 15} H${x10} M${x10},${SV9.y - 8} v-14`} stroke={NAVY.stroke} strokeWidth={5} fill="none" opacity={prog(f, ten, 12)} /> : null}
				{f >= tape ? <path d={`M${B9.slit},${g.railY + 70} v-14 M${B9.slit},${g.railY + 63} H${B9.scr} M${B9.scr},${g.railY + 70} v-14`} stroke={INK} strokeWidth={5} fill="none" opacity={prog(f, tape, 12)} /> : null}
				{f >= blur ? <WhiteBands x={SV9.x} y={620} w={SV9.w} h={100} mm={MM9} d={0.25e-3} L={2.0} opacity={prog(f, blur, 14)} /> : null}
			</FrameSvg>
			<Lbl x={B9.ap - 80} y={g.railY + 130} at={0} color={INK} size={26} anchor="middle">laser</Lbl>
			<Lbl x={B9.scr} y={g.railY + 130} at={0} color={INK} size={26} anchor="middle">screen</Lbl>
			<Lbl x={SV9.x} y={SV9.y - 50} at={0} color={INK} size={26}>screen, face on, with a metre rule</Lbl>
			<Lbl x={X(u1 / 2)} y={SV9.y + SV9.h + 90} at={one} out={ten} color={RED_INK} size={44} anchor="middle">{`± ${fx(READ_ERR, 1)} mm`}</Lbl>
			<Lbl x={(x0 + x10) / 2} y={SV9.y - 40} at={ten} color={NAVY.ink} size={34} anchor="middle">10Δx</Lbl>
			<Lbl x={X(u1 / 2)} y={SV9.y + SV9.h + 90} at={ten} color={RED_INK} size={28} anchor="middle">{`± ${fx(READ_ERR, 1)} mm`}</Lbl>
			<HandTag x={SV9.x} y={SV9.y + SV9.h + 140} text="error ÷ 10" at={ten + 20} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: X(u1 / 2), cy: SV9.y + SV9.h + 88, rx: 70, ry: 26}]} />
			<Strip x={SV9.x} y={420} at={ten + 10} size={40}>Δx = (10Δx) / 10</Strip>
			<Lbl x={(B9.slit + B9.scr) / 2} y={g.railY + 100} at={tape} color={INK} size={34} anchor="middle">L (tape)</Lbl>
			<Chip x={300} y={210} at={sep} size={28} w={560} color={ROSE.ink} border={ROSE.stroke}>d: the slide's quoted value, with its own uncertainty</Chip>
			<Lbl x={SV9.x} y={600} at={blur} color={INK} size={28}>white light (schematic)</Lbl>
			<HandTag x={SV9.x} y={770} text="white light: no single spacing" at={blur + 14} size={32} color={INK} />
			<Chip x={96} y={880} at={never} size={30} color={RED_INK} border={RED_INK}>never look along the beam</Chip>
			<Lbl x={96} y={400} at={0} color={INK} size={30}>measuring a wavelength</Lbl>
		</>
	);
};

// ---------- 10. a way to remember ----------
const PM = {x: 200, y: 600, w: 900};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const whole = cue(id, 'Whole waves, bright'), half = cue(id, 'Half waves, dark'), gap = cap(id, cue(id, 'little gap')), way = cue(id, 'way to remember');
	const k = f < whole ? 0 : kf(f, [[whole, 0], [whole + 14, 1], [whole + 28, 2], [half, 2], [half + 10, 0.5], [half + 24, 1.5]]);
	const lit = [...(f >= whole ? [0, 1, 2] : []), ...(f >= half ? [0.5, 1.5] : [])];
	const big = prog(f, gap, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={way} main={<>Whole waves: bright. Half waves: dark. Long λ, long L, little d: wide bands.</>} />
			</div>
			<FrameSvg>
				<ScreenView x={PM.x} y={PM.y + 120} w={PM.w} h={90} bright={u => Math.cos(Math.PI * (u + 1)) ** 2} color={col(650)} n={200} />
				<PdMeter x={PM.x} y={PM.y} w={PM.w} pd={k} lit={lit} />
			</FrameSvg>
			<Lbl x={PM.x} y={PM.y - 40} at={0} color={ROSE.ink} size={30}>path difference</Lbl>
			<div style={{position: 'absolute', left: 1240, top: 620, fontFamily: 'Inter Tight', fontWeight: 800, color: INK, display: 'flex', alignItems: 'baseline', gap: 6}}>
				<span style={{fontSize: 64}}>Δx =</span>
				<span style={{fontSize: 64 + 30 * big, color: NAVY.ink}}>λ</span>
				<span style={{fontSize: 64 + 30 * big, color: NAVY.ink}}>L</span>
				<span style={{fontSize: 64}}>/</span>
				<span style={{fontSize: 64 - 22 * big, color: ROSE.ink}}>d</span>
			</div>
		</>
	);
};
