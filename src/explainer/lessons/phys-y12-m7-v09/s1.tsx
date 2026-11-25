// Scenes 1 to 6: the hook (last time's polariser chain shrinks to a "wave model" badge; the painted bar heater glows
// dull red then orange; the empty axes and a curve that runs away), thermal radiation and the black body (the jiggling
// lattice, the site's definition, the hollow box with a ray that gets in and cannot get out), reading the curve (the
// painted Sun and the 5800 K Planck curve traced on a compressed scale), hotter: shorter and higher (3500 K and
// 10 000 K curves; then the heater set-up with its 1000 K curve and its visible tail), Wien's law (the live temperature
// slider) and a star's temperature (the working layout with the painted hot star).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, SUN} from '../../physics/light/plates';
import {STAR_BLUE} from '../../physics/light/stars';
import {BBPlot, Cavity, Heater, bbVal, bbX, bbY, nat, HEATER} from '../../physics/light/thermal';
import {planck} from '../../sims/blackbody';
import {Givens} from '../phys-y12-m6-v01/parts';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HandoffBoard8, M7V08FinalFrame} from '../phys-y12-m7-v08/s3';
import {ST} from '../phys-y12-m7-v08/s1';
import {Stage} from '../phys-y12-m7-v08/parts';
import {cos2 as cos2v8} from '../phys-y12-m7-v08/common';
import {B, HEAD, HEAD_SIZE, SUN_PEAK, T_COOL, T_HEATER, T_HOT, T_SUN, WE_L, WE_T, cap, cue, peak} from './common';
import {AMBER, BLUE, CLASSICAL, GREY, INK, Lattice, Lbl, NAVY, ORANGE, Strip, TCOL, bbG, fx, glowFor, sci} from './parts';

type Pt = [number, number];
const HP1 = {x: 110, y: 470, w: 640};

// ---------- 1. hook ----------
const AX = {x: 1000, y: 300, w: 780, h: 500};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const diff = cue(id, 'It diffracts, it interferes'), fin = cue(id, 'nearly finished'), sw = cue(id, 'switch on a bar heater'), dull = cue(id, 'glows dull red'), orange = cue(id, 'then orange'), white = cue(id, 'glows white'), how = cue(id, 'how much of each colour'), wrong = cue(id, 'It got it badly wrong'), pred = cap(id, cue(id, 'predictions'));
	if (f < 1) return <M7V08FinalFrame />;
	const sh = prog(f, diff, 30);
	const s = 1 - 0.7 * sh;
	const glow = kf(f, [[dull, 0], [dull + 20, 0.55], [orange, 0.55], [orange + 20, 0.95]]);
	const gc = f < orange ? TCOL[1000] : '#e36a1f';
	const ptr = kf(f, [[white, 0.15], [white + 40, 0.95]]);
	const run = prog(f, wrong, 26);
	const runPath = Array.from({length: 40}, (_, i) => { const t = i / 39; const x = AX.x + AX.w - t * AX.w * 0.85 * Math.min(1, run * 1.2); const y = AX.y + AX.h - (AX.h * 1.3) * Math.pow(t, 2.2) * run; return `${i ? 'L' : 'M'}${x},${y}`; }).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{sh < 0.999 ? <div style={{position: 'absolute', inset: 0, transformOrigin: '96px 170px', transform: `scale(${s})`, opacity: 1 - prog(f, diff + 14, 14)}}>
				<HandoffBoard8 f={0} final heading={false} chip={false} />
			</div> : null}
			<FrameSvg><g opacity={prog(f, diff + 14, 14)} transform={`translate(96 170) scale(${s}) translate(-96 -170)`}><Stage b={ST} axes={[0, 55]} bars={[{x: 610, v: 1}, {x: 1010, v: 0.5}, {x: 1390, v: 0.5 * cos2v8(55)}]} /></g></FrameSvg>
			<Chip x={96} y={890} at={-60} out={pred} size={30} w={1728} color={INK} border={INK}>Next: how did thermal spectra challenge classical predictions?</Chip>
			<Lbl x={110} y={180} at={diff + 20} color={INK} size={30}>wave model</Lbl>
			{[['diffraction', 0], ['interference', 1], ['polarisation', 2]].map(([t, i]) => <Lbl key={t as string} x={700} y={220 + (i as number) * 50} at={diff + 20 + (i as number) * 12} color={INK} size={30}>{t as string}</Lbl>)}
			<FrameSvg>
				{[0, 1, 2].map(i => f >= diff + 20 + i * 12 ? <Mark key={i} x={670} y={212 + i * 50} at={diff + 20 + i * 12} kind="tick" color={INK} size={24} /> : null)}
				<Heater p={HP1} glow={glow} color={gc} opacity={prog(f, sw, 16)} />
				{f >= white ? <g opacity={prog(f, white, 12)}>
					<defs><linearGradient id="v09-strip" x1="0" x2="1"><stop offset="0" stopColor={TCOL[1000]} /><stop offset="0.35" stopColor="#e36a1f" /><stop offset="0.7" stopColor="#f5d070" /><stop offset="1" stopColor="#fffdf8" /></linearGradient></defs>
					<rect x={HP1.x} y={790} width={HP1.w} height={40} rx={8} fill="url(#v09-strip)" stroke={INK} strokeWidth={3} />
					<path d={`M${HP1.x + HP1.w * ptr},${786} l-12,-18 h24 z`} fill={INK} />
				</g> : null}
				{f >= how ? <g opacity={prog(f, how, 14)}>
					<line x1={AX.x} y1={AX.y + AX.h} x2={AX.x + AX.w} y2={AX.y + AX.h} stroke={INK} strokeWidth={4} />
					<line x1={AX.x} y1={AX.y - 20} x2={AX.x} y2={AX.y + AX.h} stroke={INK} strokeWidth={4} />
				</g> : null}
				{run > 0.001 ? <path d={runPath} fill="none" stroke={CLASSICAL} strokeWidth={5} strokeDasharray="14 10" /> : null}
			</FrameSvg>
			<Lbl x={700} y={180} at={fin} color={GREY.ink} size={28}>by 1900: nearly finished?</Lbl>
			<HandTag x={HP1.x + 20} y={440} text="glowing = radiating" at={dull + 10} size={32} color={TCOL[3500]} marks={[{kind: 'circle', cx: nat(HEATER, HP1, 810, 480)[0], cy: nat(HEATER, HP1, 810, 480)[1], rx: 330, ry: 34}]} />
			<Lbl x={HP1.x} y={860} at={white} color={INK} size={26}>dull red → orange → yellow → white</Lbl>
			<HandTag x={HP1.x + HP1.w + 20} y={810} text="hotter" at={white + 20} size={32} color={BLUE.ink} />
			<Lbl x={AX.x + AX.w / 2} y={AX.y + AX.h + 50} at={how} color={INK} size={32} anchor="middle">wavelength</Lbl>
			<Lbl x={AX.x - 20} y={AX.y + 40} at={how} color={INK} size={32} anchor="end">intensity</Lbl>
			<Lbl x={AX.x + 200} y={AX.y + 60} at={wrong + 16} color={INK} size={72} anchor="middle">?</Lbl>
			<Lbl x={HP1.x + 400} y={HP1.y - 30} at={sw} color={INK} size={28}>a bar heater</Lbl>
		</>
	);
};

// ---------- 2. thermal radiation and the black body ----------
const CB = {x: 1180, y: 520, w: 560, h: 340};
export const S02: React.FC = () => {
	const id = 'thermal-radiation';
	const f = useCurrentFrame();
	const jig = cue(id, 'charged particles are always jiggling'), acc = cue(id, 'accelerating charges radiate'), thr = cue(id, "That's thermal radiation"), ir = cue(id, 'almost all infrared'), bb = cue(id, 'called a black body'), temp = cue(id, 'depends only on its temperature'), box = cue(id, 'a hollow box with a tiny hole'), out = cap(id, cue(id, 'almost never comes back out'));
	const grey = prog(f, ir, 16);
	const arrows = [0, 1, 2, 3, 4, 5].map(i => { const a = (i / 6) * Math.PI * 2 + 0.3; const r = 190 + ((f - acc) * 3 + i * 23) % 90; return {a, r}; });
	const col = grey > 0.5 ? GREY.stroke : ORANGE.stroke;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Heater p={{x: 96, y: 180, w: 300}} glow={0.3} color={TCOL[1000]} />
				<circle cx={400} cy={600} r={180} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Lattice cx={400} cy={600} r={180} jiggle={f >= jig ? 1.2 : 0.4} color={NAVY.stroke} />
				{f >= acc ? arrows.map((q, i) => { const x = 400 + q.r * Math.cos(q.a), y = 600 + q.r * Math.sin(q.a); return <path key={i} d={`M${x},${y} q${12 * Math.cos(q.a + 1.2)},${12 * Math.sin(q.a + 1.2)} ${24 * Math.cos(q.a)},${24 * Math.sin(q.a)}`} fill="none" stroke={col} strokeWidth={5} opacity={prog(f, acc, 12)} />; }) : null}
				<Cavity x={CB.x} y={CB.y} w={CB.w} h={CB.h} ray={prog(f, out - 30, 50)} opacity={prog(f, box, 14)} />
			</FrameSvg>
			<HandTag x={600} y={430} text="jiggling charges" at={jig + 10} size={32} color={NAVY.ink} />
			<Chip x={96} y={830} at={acc} size={28} w={720} color={INK}>earlier: accelerating charges radiate</Chip>
			<Lbl x={600} y={520} at={thr} color={ORANGE.ink} size={34}>thermal radiation</Lbl>
			<Lbl x={600} y={580} at={ir} color={GREY.ink} size={30}>almost all infrared (invisible)</Lbl>
			<Lbl x={96} y={420} at={0} color={INK} size={26}>charges in a warm solid (model)</Lbl>
			<Chip x={980} y={190} at={bb} size={30} w={840} color={INK}>A black body is an idealised object that absorbs and re-emits all radiation falling on it.</Chip>
			<Lbl x={1000} y={340} at={temp} color={TCOL[5800]} size={32}>its spectrum depends only on its temperature</Lbl>
			<HandTag x={1000} y={400} at={temp + 6} marks={[{kind: 'underline', x1: 1380, x2: 1640, y: 360}]} color={TCOL[5800]} />
			<Lbl x={CB.x} y={CB.y - 30} at={box} color={INK} size={28}>model: a hollow box with a tiny hole</Lbl>
			<HandTag x={CB.x - 280} y={CB.y + CB.h + 50} text="gets in, can't get out" at={out} size={32} color={INK} marks={[{kind: 'circle', cx: CB.x, cy: CB.y + CB.h / 2, rx: 30, ry: 40}]} />
			<Lbl x={CB.x + 40} y={CB.y + CB.h + 100} at={out} color={GREY.ink} size={26}>almost nothing reflected: a near-perfect absorber</Lbl>
		</>
	);
};

// ---------- 3. reading the curve ----------
export const G3 = bbG(380, 260, 1360, 520, 100, 2000);
export const S03: React.FC = () => {
	const id = 'read-curve';
	const f = useCurrentFrame();
	const sun = cue(id, "Here's the Sun"), vnb = cue(id, 'very nearly a black body'), up = cue(id, 'Intensity goes up the side'), along = cue(id, 'wavelength goes along the bottom'), none = cue(id, 'almost nothing'), pk = cue(id, 'single peak'), falls = cue(id, 'falls away gradually'), band = cue(id, 'in the visible band'), only = cap(id, cue(id, 'Only the height and position'));
	const pkU = (peak(T_SUN) - G3.nm0) / (G3.nm1 - G3.nm0);
	const draw = f < none ? 0 : kf(f, [[none, 0.02], [pk, pkU], [falls, pkU + 0.05], [falls + 50, 1]]);
	const px = bbX(G3, peak(T_SUN)), py = bbY(G3, bbVal(T_SUN, peak(T_SUN), G3.ref, G3.pow));
	const pulse = (at: number) => (f >= at && f < at + 30 ? 1 + 0.15 * Math.sin(((f - at) / 30) * Math.PI) : 1);
	const op = f >= only ? 0.6 + 0.4 * Math.cos(((f - only) / 20) * Math.PI * 2) : 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BBPlot g={G3} curves={[{T: T_SUN, color: TCOL[5800], draw, width: 6, opacity: op}]} ticks={[500, 1000, 1500, 2000]} shade={prog(f, band, 12)} band={prog(f, band, 12)} fill={f >= falls + 50 ? {T: T_SUN, color: TCOL[5800], opacity: 0.28 * prog(f, falls + 50, 14)} : undefined} />
				<Disc spec={SUN} cx={220} cy={600} d={160} opacity={prog(f, sun, 12)} />
				{f >= pk ? <circle cx={px} cy={py} r={11} fill={TCOL[5800]} stroke={INK} strokeWidth={3} /> : null}
				{f >= band ? <line x1={px} y1={py} x2={px} y2={G3.y + G3.h} stroke={TCOL[5800]} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, band, 12)} /> : null}
			</FrameSvg>
			<Lbl x={220} y={720} at={sun} color={INK} size={30} anchor="middle">{`Sun: ${T_SUN} K`}</Lbl>
			<HandTag x={100} y={790} text="very nearly a black body" at={vnb} size={28} color={INK} />
			<div style={{position: 'absolute', left: G3.x - 20, top: G3.y + 40, transform: `translateX(-100%) scale(${pulse(up)})`, transformOrigin: 'right center', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK, opacity: prog(f, 4, 12)}}>intensity</div>
			<div style={{position: 'absolute', left: G3.x + G3.w / 2, top: G3.y + G3.h + 70, transform: `translateX(-50%) scale(${pulse(along)})`, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK, opacity: prog(f, 4, 12)}}>wavelength λ (nm)</div>
			<Lbl x={G3.x + G3.w - 10} y={G3.y + G3.h - 24} at={4} color={GREY.ink} size={26} anchor="end">compressed scale</Lbl>
			<HandTag x={px + 30} y={py - 30} text="one peak" at={pk + 6} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [px + 120, py - 50], to: [px + 18, py - 8], bend: 0.2}]} />
			<Lbl x={px} y={G3.y + G3.h + 130} at={band} color={TCOL[5800]} size={36} anchor="middle">≈ 500 nm</Lbl>
			<Lbl x={G3.x + 10} y={G3.y + G3.h - 20} at={band} color={GREY.ink} size={26}>UV</Lbl>
			<Lbl x={bbX(G3, 1300)} y={G3.y + 40} at={band} color={GREY.ink} size={28}>infrared</Lbl>
			<HandTag x={bbX(G3, 1100)} y={G3.y + 120} text="same shape, set by T" at={only + 10} size={32} color={AMBER.ink} />
		</>
	);
};

// ---------- 4. hotter: shorter and higher ----------
const G4H = {x: 900, y: 320, w: 860, h: 460, nm0: 0, nm1: 4000};
export const S04: React.FC = () => {
	const id = 'hotter-shorter-higher';
	const f = useCurrentFrame();
	const pred = cue(id, 'Make your prediction'), cool = cue(id, 'three thousand five hundred kelvin'), hot = cue(id, 'ten thousand kelvin'), wl = cue(id, 'peak moves to shorter wavelengths'), every = cue(id, 'more at every wavelength'), heater = cue(id, 'That explains the heater'), red = cap(id, cue(id, 'at the red end'));
	const sw = prog(f, heater, 20);
	const pkPt = (T: number): Pt => [bbX(G3, peak(T)), bbY(G3, bbVal(T, peak(T), G3.ref, G3.pow))];
	const gH = {...G4H, ref: planck(B / T_HEATER, T_HEATER), pow: 1};
	const hp = {x: 96, y: 330, w: 680};
	const tail = prog(f, red, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{sw < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<FrameSvg>
					<BBPlot g={G3} curves={[{T: T_SUN, color: TCOL[5800], width: 6}, {T: T_COOL, color: TCOL[3500], draw: f < cool ? 0 : prog(f, cool, 30), width: 6}, {T: T_HOT, color: TCOL[10000], draw: f < hot ? 0 : prog(f, hot, 30), width: 6}]} ticks={[500, 1000, 1500, 2000]} shade={1} band={1} fill={f >= every ? {T: T_HOT, color: TCOL[10000], opacity: 0.12 * prog(f, every, 12)} : undefined} />
					{[T_COOL, T_SUN, T_HOT].map(T => (T === T_COOL && f < cool + 30) || (T === T_HOT && f < hot + 30) ? null : <circle key={T} cx={pkPt(T)[0]} cy={Math.max(G3.y - 10, pkPt(T)[1])} r={10} fill={TCOL[T]} stroke={INK} strokeWidth={3} />)}
					{f >= wl ? <path d={`M${pkPt(T_COOL)[0]},${pkPt(T_COOL)[1] - 20} Q${pkPt(T_SUN)[0] + 60},${G3.y + 40} ${pkPt(T_HOT)[0] + 20},${G3.y - 4}`} fill="none" stroke={BLUE.stroke} strokeWidth={5} strokeDasharray={`${900 * prog(f, wl, 24)} 1000`} /> : null}
					<Countdown start={pred} end={pred + 90} x={1700} y={200} r={40} />
					{f >= hot ? <Mark x={250} y={905} at={hot} kind="tick" color={INK} size={32} /> : null}
				</FrameSvg>
				<Lbl x={G3.x + G3.w - 10} y={G3.y + G3.h - 24} at={-30} color={GREY.ink} size={26} anchor="end">compressed scale</Lbl>
				<Lbl x={pkPt(T_COOL)[0] + 20} y={pkPt(T_COOL)[1] - 30} at={cool + 20} color={TCOL[3500]} size={30}>{`${T_COOL} K: ≈ ${fx(peak(T_COOL), 0)} nm`}</Lbl>
				<Lbl x={pkPt(T_SUN)[0] + 20} y={pkPt(T_SUN)[1] - 24} at={-30} color={TCOL[5800]} size={30}>{`${T_SUN} K`}</Lbl>
				<Lbl x={pkPt(T_HOT)[0] + 30} y={G3.y + 50} at={hot + 20} color={TCOL[10000]} size={30}>{`10 000 K: ≈ ${fx(peak(T_HOT), 0)} nm (off the top)`}</Lbl>
				<Chip x={96} y={880} at={pred} size={28} w={300} color={INK}>left (shorter)</Chip>
				<Chip x={420} y={880} at={pred + 4} size={28} w={300} color={INK}>right (longer)</Chip>
				<Chip x={740} y={880} at={pred + 8} size={28} w={200} color={INK}>stays</Chip>
				<HandTag x={bbX(G3, 900)} y={G3.y + 140} text="hotter → shorter λ_max" at={wl + 10} size={32} color={BLUE.ink} />
				<HandTag x={bbX(G3, 1300)} y={G3.y + 280} text="higher at every λ" at={every + 10} size={32} color={BLUE.ink} />
				<div style={{position: 'absolute', left: G3.x - 20, top: G3.y + 40, transform: 'translateX(-100%)', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK}}>intensity</div>
				<Lbl x={G3.x + G3.w / 2} y={G3.y + G3.h + 90} at={-30} color={INK} size={30} anchor="middle">wavelength λ (nm)</Lbl>
			</div> : null}
			{sw > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<FrameSvg>
					<Heater p={hp} glow={0.6} color={TCOL[1000]} />
					<BBPlot g={gH} curves={[{T: T_HEATER, color: TCOL[1000], draw: prog(f, heater + 10, 40), width: 6}]} ticks={[1000, 2000, 3000, 4000]} shade={1} band={1} />
					{tail > 0.001 ? <g opacity={tail}>
						<path d={Array.from({length: 31}, (_, i) => { const nm = 400 + i * 10; return `${i ? 'L' : 'M'}${bbX(gH, nm)},${bbY(gH, bbVal(T_HEATER, nm, gH.ref, 1)) - 4}`; }).join(' ')} fill="none" stroke={TCOL[3500]} strokeWidth={14} opacity={0.6} />
						<path d={`M${bbX(gH, 700)},${G4H.y + G4H.h - 30} C${bbX(gH, 600)},${G4H.y + 120} ${hp.x + hp.w},${hp.y - 40} ${nat(HEATER, hp, 1100, 470)[0]},${nat(HEATER, hp, 1100, 470)[1] - 30}`} fill="none" stroke={TCOL[1000]} strokeWidth={5} strokeDasharray={`${1400 * tail} 1500`} />
					</g> : null}
					<circle cx={bbX(gH, peak(T_HEATER))} cy={bbY(gH, 1)} r={10} fill={TCOL[1000]} stroke={INK} strokeWidth={3} opacity={prog(f, heater + 40, 12)} />
				</FrameSvg>
				<Lbl x={hp.x} y={hp.y - 40} at={heater} color={INK} size={30}>{`the heater element: about ${T_HEATER} K`}</Lbl>
				<Lbl x={bbX(gH, peak(T_HEATER)) + 20} y={bbY(gH, 1) - 20} at={heater + 40} color={TCOL[1000]} size={34}>{`≈ ${Math.round(peak(T_HEATER) / 100) * 100} nm (infrared)`}</Lbl>
				<Lbl x={G4H.x + G4H.w / 2} y={G4H.y + G4H.h + 90} at={heater} color={INK} size={28} anchor="middle">wavelength λ (nm), own scale</Lbl>
				<HandTag x={hp.x + 40} y={hp.y + 480} text="only the tail is visible: red first" at={red} size={32} color={TCOL[1000]} />
			</div> : null}
		</>
	);
};

// ---------- 5. Wien's law ----------
const G5 = bbG(300, 300, 950, 440, 0, 3000);
export const S05: React.FC = () => {
	const id = 'wien-law';
	const f = useCurrentFrame();
	const rule = cue(id, "Wien's law"), bq = cue(id, 'two point eight nine eight times ten to the minus three metre kelvin'), dbl = cue(id, 'Double the temperature'), halves = cue(id, 'peak wavelength halves'), check = cue(id, 'Check the Sun'), nm = cap(id, cue(id, 'five hundred nanometres'));
	const T = kf(f, [[dbl, T_SUN], [dbl + 8, 1000], [dbl + 18, 1000], [dbl + 26, 3500], [dbl + 34, 3500], [dbl + 42, 5000], [dbl + 50, 5000], [Math.min(dbl + 58, halves - 2), T_HOT], [halves, T_HOT], [halves + 12, 5000], [halves + 26, 5000], [halves + 38, T_HOT], [check, T_HOT], [check + 18, T_SUN]]);
	const pk = peak(T);
	const v = bbVal(T, pk, G5.ref, G5.pow);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Heater p={{x: 96, y: 180, w: 200}} glow={0.9} color={glowFor(T)} />
				<rect x={96} y={290} width={200} height={34} rx={8} fill={glowFor(T)} stroke={INK} strokeWidth={3} />
				<BBPlot g={G5} curves={[{T, color: T >= 9000 ? TCOL[10000] : T <= 1500 ? TCOL[1000] : T < 4500 ? TCOL[3500] : TCOL[5800], width: 6}]} ticks={[500, 1000, 1500, 2000, 2500, 3000]} shade={1} band={1} />
				<circle cx={bbX(G5, pk)} cy={bbY(G5, v)} r={11} fill={INK} stroke="#fff" strokeWidth={3} />
				<line x1={bbX(G5, pk)} y1={Math.max(G5.y, bbY(G5, v))} x2={bbX(G5, pk)} y2={G5.y + G5.h} stroke={INK} strokeWidth={2.5} strokeDasharray="6 6" />
				<Slider x={340} y={870} w={870} v0={1000} v1={10000} v={T} ticks={[1000, 3500, 5000, 5800, 10000]} fmt={t => (t === 5800 ? '' : `${t}`)} label="T (K)" color={NAVY.stroke} />
				{f >= nm ? <circle cx={bbX(G5, peak(T_SUN))} cy={bbY(G5, bbVal(T_SUN, peak(T_SUN), G5.ref, G5.pow))} r={30} fill="none" stroke={TCOL[5800]} strokeWidth={5} opacity={prog(f, nm, 10)} /> : null}
			</FrameSvg>
			<Lbl x={96} y={360} at={0} color={INK} size={26}>glow (illustrative)</Lbl>
			<Lbl x={G5.x + G5.w - 10} y={G5.y + G5.h - 24} at={0} color={GREY.ink} size={26} anchor="end">compressed scale</Lbl>
			<Lbl x={G5.x + G5.w / 2} y={G5.y + G5.h + 90} at={0} color={INK} size={28} anchor="middle">wavelength λ (nm)</Lbl>
			<Lbl x={1320} y={620} at={0} color={NAVY.ink} size={52}>{`T = ${fx(T, 0)} K`}</Lbl>
			<Lbl x={1320} y={700} at={0} color={INK} size={52}>{`λ_max = ${fx(pk, 0)} nm`}</Lbl>
			<Strip x={1320} y={190} at={rule} size={52}>λ_max = b / T</Strip>
			<Lbl x={1330} y={300} at={rule + 10} color={INK} size={26}>λ_max: peak wavelength (m)</Lbl>
			<Lbl x={1330} y={334} at={rule + 10} color={INK} size={26}>T: temperature (K)</Lbl>
			<Chip x={1320} y={370} at={bq} size={30} w={500} color={INK} border={INK}>b = 2.898 × 10⁻³ m K (data sheet)</Chip>
			<HandTag x={1320} y={480} text="T × 2 → λ_max ÷ 2" at={halves + 10} size={36} color={BLUE.ink} />
			<Lbl x={1330} y={540} at={halves + 20} color={BLUE.ink} size={28}>λ_max ∝ 1/T</Lbl>
			<div style={{position: 'absolute', left: 1320, top: 760, display: 'flex', flexDirection: 'column', gap: 8, width: 520}}>
				<Row at={check + 10} size={40}><span style={{whiteSpace: 'nowrap'}}>λ_max = (2.898 × 10⁻³) / 5800</span></Row>
				<Row at={nm - 6} size={48}><AnswerBox at={nm}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{`= ${sci(SUN_PEAK, 1)} m = ${fx(SUN_PEAK * 1e9, 0)} nm`}</span></AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 6. worked example: a star's temperature ----------
const G6 = bbG(1240, 230, 580, 260, 0, 2000);
export const S06: React.FC = () => {
	const id = 'worked-star';
	const f = useCurrentFrame();
	const other = cue(id, 'the other way round'), pk = cue(id, 'peaks at two hundred and ninety nanometres'), rearr = cue(id, 'T equals b over lambda max'), conv = cue(id, 'minus seven metres'), kel = cue(id, 'about ten thousand kelvin'), white = cap(id, cue(id, 'blue white star'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={other} size={34}>{"Find the star's surface temperature."}</Strip>
			<Strip x={96} y={258} at={other + 6} size={44}>λ_max = b / T</Strip>
			<Givens x={96} y={350} w={1000} at={pk} size={30} lines={['λ_max = 290 nm (measured)', 'b = 2.898 × 10⁻³ m K (data sheet)']} />
			<FrameSvg>
				<BBPlot g={G6} curves={[{T: T_SUN, color: TCOL[5800], width: 4, opacity: 0.9}, {T: WE_T, color: TCOL[10000], width: f >= white ? 7 : 4}]} ticks={[1000, 2000]} shade={1} band={1} />
				<Disc spec={STAR_BLUE} cx={1640} cy={760} d={240} opacity={prog(f, white, 14)} />
			</FrameSvg>
			<Lbl x={G6.x} y={G6.y - 20} at={0} color={GREY.ink} size={26}>the star's curve (compressed scale)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 12, width: 1100}}>
				<Row at={rearr} ageAt={kel} size={48} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>T = b / λ_max</span></Row>
				<Row at={conv - 6} ageAt={kel} size={48} oldSize={34}><span style={{whiteSpace: 'nowrap', color: NAVY.ink}}>{`λ_max = 290 × 10⁻⁹ m = ${sci(WE_L, 2)} m`}</span></Row>
				<Row at={kel - 30} size={44}><span style={{whiteSpace: 'nowrap'}}>{`T = (2.898 × 10⁻³) / (${sci(WE_L, 2)}) ≈ ${sci(WE_T, 2)} K`}</span></Row>
				<Row at={kel - 6} size={56}><AnswerBox at={kel}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{`T ≈ ${sci(WE_T, 1)} K`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1240} y={570} at={rearr + 20} crossAt={rearr + 36} size={30} caption="divide, don't multiply">T = b × λ_max</CrossedChip>
			<HandTag x={1240} y={720} text="nm → m first" at={conv + 10} size={32} color={INK} />
			<HandTag x={1240} y={900} text="hot, blue-white" at={white} size={32} color={BLUE.ink} />
		</>
	);
};
