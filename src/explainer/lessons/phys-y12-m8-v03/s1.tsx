// Scenes 1 to 6: the hook (last time's Sun, strip and curve; which stars show the strongest hydrogen lines?), light from
// fixed energy levels (the painted lamp and discharge tube with their strips; the hydrogen ladder and the Hα photon),
// absorption (the painted lamp and vapour cell with a cool-gas particle-box run; sodium's 589 nm line; the Sun), a star
// against a black body (intensity curves with dips aligned to the strip), method one, the peak (the live star
// thermometer) and why hydrogen peaks in the middle (three atom panels and the hump).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LAMP, LPlate, SUN, TUBE, VCELL} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {EnergyLadder, SpectrumStrip, levelY, nmX, wlColor} from '../../physics/light/spectrum';
import {Packet} from '../../physics/light/photo';
import {runBox} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {BoxParticles, Readout} from '../../physics/atom/universe';
import {StarCurve, classOf, starColour} from '../../physics/atom/stellar';
import type {CurveGeom} from '../../physics/atom/stellar';
import {H_STRIP, HandoffBoard02, M8V02FinalFrame} from '../phys-y12-m8-v02/s3';
import {CA_H, CA_K, E_HA, E_HA_EV, E_NA_EV, HA, HEAD, HEAD_SIZE, H_LINES, H_N2, NA_D, SUN_SLIP, SUN_T, THERMO_T, cap, cue, dur, hStrength, peakNmOf} from './common';
import {AMBER, AtomPanel, GREY, Givens, INK, Lbl, NAVY, RED, ROSE, Strip, TEAL, fx, sci} from './parts';

const plateFor = (T: number) => (T < 5200 ? STAR_RED : T < 7500 ? SUN : T < 20000 ? STAR_WHITE : STAR_BLUE);

// ---------- 1. hook ----------
const STARS1 = [{spec: STAR_BLUE, x: 820, label: 'hottest stars'}, {spec: STAR_WHITE, x: 1120, label: 'in between'}, {spec: STAR_RED, x: 1420, label: 'coolest stars'}] as const;
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sr = cue(id, 'A smooth rainbow, with dark lines cut into it'), mh = cue(id, 'Almost every star is mostly hydrogen'), pred = cue(id, 'prediction'), ib = cue(id, 'Ones in between'), tmp = cap(id, cue(id, 'reveal their temperature'));
	if (f < 1) return <M8V02FinalFrame />;
	const tickAt = Math.max(ib, pred + 92);
	const xa = nmX(H_STRIP, HA);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard02 f={0} final heading={false} chip={false} /></div>
			<HandoffBoard02 f={0} final heading={false} chip={false} tags={false} marks={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{f >= sr && f < sr + 40 ? <rect x={H_STRIP.x} y={H_STRIP.y} width={H_STRIP.w} height={H_STRIP.h} fill="none" stroke={INK} strokeWidth={4 + 4 * Math.sin(((f - sr) / 40) * Math.PI)} /> : null}
				{STARS1.map((s, i) => <LPlate key={i} spec={s.spec} p={{x: s.x, y: 172, w: 130}} opacity={prog(f, pred + 4 * i, 12)} />)}
				<Countdown start={pred} end={pred + 90} x={1680} y={250} r={40} />
				{f >= tickAt ? <Mark x={1290} y={338} at={tickAt} kind="tick" color={INK} size={32} /> : null}
			</FrameSvg>
			<HandTag x={96} y={830} text="dark lines: missing light" at={sr + 10} out={tmp} size={34} color={INK} marks={[{kind: 'circle', cx: xa, cy: H_STRIP.y + H_STRIP.h / 2, rx: 26, ry: 52}]} />
			<Chip x={96} y={176} at={mh} size={28} color={INK}>stars: mostly hydrogen (about 3/4 by mass)</Chip>
			{STARS1.map((s, i) => <Chip key={i} x={s.x - 20} y={316} at={pred + 4 * i} size={26} color={INK}>{s.label}</Chip>)}
			<HandTag x={1060} y={375} text="surprise: not the hottest" at={tickAt + 10} size={32} color={RED.ink} />
			<Chip x={96} y={870} at={-30} out={tmp} size={30} w={1728} color={INK} border={INK}>Next: how can spectra classify stars and reveal their temperature?</Chip>
		</>
	);
};

// ---------- 2. light from fixed energy levels ----------
const CS = {x: 380, y: 290, w: 720, h: 60}, ES = {x: 380, y: 640, w: 720, h: 60};
const LAD = {x: 1270, w: 300, top: 240, bot: 700};
export const S02: React.FC = () => {
	const id = 'emission-levels';
	const f = useCurrentFrame();
	const hd = cue(id, 'A hot, dense object gives a continuous spectrum'), ht = cue(id, 'A hot, thin gas gives an emission spectrum'), fl = cue(id, 'fixed energy levels'), ed = cue(id, 'Each drop between levels gives out one photon'), en = cue(id, 'an exact energy'), vo = cap(id, cue(id, 'volts'));
	const drop = prog(f, ed, 24);
	const fly = prog(f, ed + 24, 40);
	const y25 = (levelY(2, LAD.top, LAD.bot) + levelY(3, LAD.top, LAD.bot)) / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LAMP} p={{x: 96, y: 180, w: 240}} />
				<LPlate spec={TUBE} p={{x: 150, y: 520, w: 150}} />
				<SpectrumStrip s={CS} kind="continuous" reveal={prog(f, hd, 30)} axis ticks={[400, 500, 600, 700]} />
				<SpectrumStrip s={ES} kind="emission" lines={H_LINES} reveal={prog(f, ht, 30)} lineW={8} axis ticks={[400, 500, 600, 700]} />
				<g opacity={prog(f, fl, 14)}>
					<EnergyLadder x={LAD.x} w={LAD.w} top={LAD.top} bot={LAD.bot} levels={[1, 2, 3]} color={NAVY.stroke} label={n => `n = ${n}`} size={28} electron={{from: 3, to: 2, u: drop, color: ROSE.stroke}} arrowColor={ROSE.stroke} />
					<line x1={LAD.x} y1={LAD.top} x2={LAD.x + LAD.w} y2={LAD.top} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 7" />
				</g>
				{f >= ed + 24 ? <Packet x={LAD.x + LAD.w + 30 + 120 * fly} y={y25} deg={0} len={60} color={wlColor(HA)} label="γ" size={28} /> : null}
			</FrameSvg>
			<Lbl x={LAD.x + LAD.w} y={LAD.top - 18} at={fl} color={NAVY.ink} size={26} anchor="end">ionised</Lbl>
			<Lbl x={CS.x} y={CS.y - 22} at={hd} color={INK} size={30}>hot, dense: continuous</Lbl>
			<Lbl x={ES.x} y={ES.y - 22} at={ht} color={INK} size={30}>hot, thin gas: emission</Lbl>
			<Chip x={1120} y={176} at={hd + 10} size={26} color={INK}>{"Kirchhoff's laws (an earlier video)"}</Chip>
			<HandTag x={LAD.x} y={LAD.bot + 50} text="only these levels" at={fl + 20} size={32} color={NAVY.ink} marks={[{kind: 'brace', x: LAD.x + LAD.w + 10, y1: levelY(3, LAD.top, LAD.bot), y2: levelY(2, LAD.top, LAD.bot), facing: 'right'}]} />
			<HandTag x={1420} y={y25 + 70} text="one drop, one photon" at={ed + 40} size={30} color={RED.ink} marks={[{kind: 'arrow', from: [LAD.x + LAD.w + 140, y25 + 30], to: [nmX(ES, HA) + 10, ES.y - 6], bend: 0.2}]} />
			<Chip x={1270} y={800} at={en} size={30} color={INK}>E = hf = hc/λ (data sheet)</Chip>
			<div style={{position: 'absolute', left: 96, top: 860}}><Row at={vo - 6} size={40}><AnswerBox at={vo}>{`E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (656.3 × 10⁻⁹) = ${sci(E_HA, 2)} J = ${fx(E_HA_EV, 2)} eV`}</AnswerBox></Row></div>
		</>
	);
};

// ---------- 3. absorption: why the lines are dark ----------
const AS = {x: 800, y: 380, w: 700, h: 70}, NS = {x: 800, y: 520, w: 700, h: 60};
const GAS = lazy(() => runBox({seed: 33, frames: dur('absorption'), w: 220, h: 100, speed: 2.2, temperature: 0.3, species: [{id: 'a', r: 7}], initial: [{species: 'a', count: 6}]}));
export const S03: React.FC = () => {
	const id = 'absorption';
	const f = useCurrentFrame();
	const ab = cue(id, 'absorb only photons whose energy exactly matches a gap'), up = cue(id, 'up'), ad = cue(id, 'in all directions'), one = cue(id, 'bright one'), sw = cue(id, 'A star works like this'), sp = cap(id, cue(id, 'absorption spectra'));
	const jump = prog(f, ab + 30, 20);
	const sunO = prog(f, sw, 20);
	const naC = wlColor(NA_D);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LAMP} p={{x: 96, y: 300, w: 200}} opacity={1 - sunO} />
				<g opacity={sunO}>
					<Disc spec={SUN} cx={196} cy={420} d={200} />
					<circle cx={196} cy={420} r={118} fill="none" stroke={RED.stroke} strokeWidth={4} />
					<circle cx={196} cy={420} r={140} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" />
				</g>
				<line x1={300} y1={420} x2={AS.x - 10} y2={420} stroke={AMBER.stroke} strokeWidth={5} opacity={0.8} />
				<LPlate spec={VCELL} p={{x: 360, y: 320, w: 330}} />
				<BoxParticles run={GAS()} f={f} x={415} y={372} draw={{a: (x, y, k) => <circle key={k} cx={x} cy={y} r={7} fill="#d9b45a" stroke={INK} strokeWidth={1.5} />}} />
				<SpectrumStrip s={AS} kind={f >= up ? 'absorption' : 'continuous'} lines={[NA_D]} lineW={7} axis ticks={[400, 500, 600, 700]} />
				{f >= ad ? [200, 250, 300, 340, 30, 120].map((d, i) => { const a = (d * Math.PI) / 180, u = prog(f, ad + 3 * i, 24); return <path key={i} d={`M${525 + 60 * Math.cos(a)},${425 + 60 * Math.sin(a)} L${525 + (60 + 90 * u) * Math.cos(a)},${425 + (60 + 90 * u) * Math.sin(a)}`} stroke={naC} strokeWidth={5} strokeLinecap="round" />; }) : null}
				<g opacity={prog(f, ab, 14)}>
					<line x1={1590} y1={330} x2={1790} y2={330} stroke={NAVY.stroke} strokeWidth={4} />
					<line x1={1590} y1={500} x2={1790} y2={500} stroke={NAVY.stroke} strokeWidth={5} />
					<circle cx={1700} cy={500 - 170 * jump} r={12} fill={ROSE.stroke} stroke="#fffdf8" strokeWidth={2.5} />
					{f < ab + 34 ? <Packet x={1540 + 140 * prog(f, ab, 30)} y={420} deg={0} len={50} color={naC} /> : null}
				</g>
				{f >= one ? <g opacity={prog(f, one, 14)}>
					<SpectrumStrip s={NS} kind="emission" lines={[NA_D]} lineW={7} />
					<line x1={nmX(AS, NA_D)} y1={AS.y + AS.h} x2={nmX(NS, NA_D)} y2={NS.y} stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
				</g> : null}
			</FrameSvg>
			<Lbl x={380} y={300} at={0} color={INK} size={28}>cool sodium vapour</Lbl>
			<Lbl x={1800} y={415} at={ab} color={NAVY.ink} size={28} anchor="end">{`gap ${fx(E_NA_EV, 2)} eV (589 nm)`}</Lbl>
			<HandTag x={1560} y={560} text="starts in the lowest level" at={ab + 34} out={one} size={28} color={NAVY.ink} />
			<HandTag x={380} y={620} text="scattered every way" at={ad + 24} size={32} color={AMBER.ink} />
			<Lbl x={NS.x} y={NS.y + NS.h + 34} at={one} color={INK} size={28}>sodium emission: bright line at the same wavelength</Lbl>
			<HandTag x={0} y={0} at={one + 14} color={INK} marks={[{kind: 'circle', cx: nmX(AS, NA_D), cy: (AS.y + NS.y + NS.h) / 2, rx: 30, ry: 110}]} />
			<Lbl x={96} y={600} at={sw + 10} color={RED.ink} size={26}>hot, dense layers</Lbl>
			<Lbl x={96} y={640} at={sw + 16} color={GREY.ink} size={26}>cooler atmosphere</Lbl>
			<Chip x={96} y={720} at={sp} size={30} w={1300} color={INK}>{"stars: absorption spectra (Fraunhofer lines in the Sun, including sodium's D lines)"}</Chip>
		</>
	);
};

// ---------- 4. a star against a black body ----------
const G4: CurveGeom = {x: 400, y: 260, w: 1200, h: 400, nm0: 200, nm1: 1000};
const gx = (g: CurveGeom, nm: number) => g.x + ((nm - g.nm0) / (g.nm1 - g.nm0)) * g.w;
const S4 = {x: gx(G4, 380), y: 760, w: gx(G4, 750) - gx(G4, 380), h: 56};
const DIPS4 = [CA_K, CA_H, 434.0, 486.1, NA_D, HA].map(nm => ({nm, depth: 0.42, width: 3}));
export const S04: React.FC = () => {
	const id = 'black-body-comparison';
	const f = useCurrentFrame();
	const sc = cue(id, 'smooth curve'), t1 = cue(id, 'temperature'), nd = cue(id, 'narrow dips cut into it'), ct = cue(id, 'The curve tells you the temperature'), wa = cue(id, 'which atoms are in the atmosphere'), ag = cap(id, cue(id, 'again'));
	const side = prog(f, t1, 16) * (1 - prog(f, t1 + 70, 16));
	const pk = gx(G4, peakNmOf(5800));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={SUN} cx={210} cy={290} d={220} />
				<line x1={G4.x} y1={G4.y + G4.h} x2={G4.x + G4.w + 14} y2={G4.y + G4.h} stroke={INK} strokeWidth={4} />
				<line x1={G4.x} y1={G4.y + G4.h} x2={G4.x} y2={G4.y - 20} stroke={INK} strokeWidth={4} />
				{[200, 400, 600, 800, 1000].map(nm => <g key={nm}><line x1={gx(G4, nm)} y1={G4.y + G4.h} x2={gx(G4, nm)} y2={G4.y + G4.h + 10} stroke={INK} strokeWidth={3} /><text x={gx(G4, nm)} y={G4.y + G4.h + 38} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{nm}</text></g>)}
				<StarCurve g={G4} temp={5800} color={AMBER.stroke} width={6} draw={prog(f, sc, 40)} />
				<StarCurve g={G4} temp={4000} color={AMBER.stroke} width={3} opacity={side} />
				<StarCurve g={G4} temp={8000} color={AMBER.stroke} width={3} opacity={side} />
				<StarCurve g={G4} temp={5800} dips={DIPS4} color={INK} width={4} draw={prog(f, nd, 40)} />
				<SpectrumStrip s={S4} kind="absorption" lines={DIPS4.map(d => d.nm)} lineW={5} opacity={prog(f, nd, 14)} />
			</FrameSvg>
			<Lbl x={G4.x + G4.w} y={G4.y + G4.h + 80} at={0} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<Lbl x={G4.x + 10} y={G4.y - 30} at={0} color={INK} size={26}>intensity (relative)</Lbl>
			<Lbl x={G4.x + G4.w - 10} y={G4.y + 30} at={t1} out={t1 + 86} color={AMBER.ink} size={26} anchor="end">4000 K and 8000 K (each scaled to the same height): peak moves left as T rises</Lbl>
			<HandTag x={G4.x + 700} y={G4.y + 90} text="shape set by T only" at={sc + 30} size={32} color={AMBER.ink} />
			<Lbl x={gx(G4, 900)} y={G4.y + 160} at={sc + 10} color={AMBER.ink} size={28}>black body: depends only on T</Lbl>
			<HandTag x={0} y={0} at={ct} color={TEAL.stroke} marks={[{kind: 'circle', cx: pk, cy: G4.y + 10, rx: 50, ry: 34}]} />
			{[['Ca II', 395, -40], ['H', 486.1, -60], ['Na', NA_D, -70], ['H', HA, -60]].map(([t, nm, dy], i) => <Lbl key={i} x={gx(G4, nm as number)} y={G4.y + 40 + (dy as number) + 60} at={wa + 4 * i} color={INK} size={28} anchor="middle">{f >= ag + 6 ? `${t} (T)` : (t as string)}</Lbl>)}
			<HandTag x={0} y={0} at={wa + 20} color={INK} marks={[{kind: 'arrow', from: [gx(G4, 486.1), G4.y + 150], to: [gx(G4, 486.1), S4.y - 6], bend: 0}, {kind: 'arrow', from: [gx(G4, NA_D), G4.y + 170], to: [gx(G4, NA_D), S4.y - 6], bend: 0}, {kind: 'arrow', from: [gx(G4, HA), G4.y + 200], to: [gx(G4, HA), S4.y - 6], bend: 0}]} />
			<Lbl x={96} y={880} at={ag + 10} color={GREY.ink} size={28}>line positions also give speed (an earlier video)</Lbl>
		</>
	);
};

// ---------- 5. method one: the peak ----------
const G5: CurveGeom = {x: 180, y: 360, w: 860, h: 340, nm0: 50, nm1: 1000};
const S5 = {x: gx(G5, 380), y: 790, w: gx(G5, 750) - gx(G5, 380), h: 50};
export const S05: React.FC = () => {
	const id = 'wien-method';
	const f = useCurrentFrame();
	const bt = cue(id, 'b over T'), kv = cue(id, 'kelvin'), uv = cue(id, 'hot stars peak in the ultraviolet'), du = cue(id, 'dust between the stars can redden light'), li = cap(id, cue(id, 'read the lines'));
	const L = Math.log10;
	const keys: [number, number][] = [[uv, L(5800)]];
	THERMO_T.forEach((T, i) => keys.push([uv + 10 + 22 * i, L(T)], [uv + 24 + 22 * i, L(T)]));
	keys.push([li, L(30000)], [li + 20, L(10000)]);
	const temp = f < uv ? 5800 : 10 ** kf(f, keys);
	const pkNm = peakNmOf(temp);
	const enlarge = prog(f, li + 10, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={plateFor(temp)} p={{x: 96, y: 168, w: 160}} />
				<rect x={G5.x} y={G5.y - 20} width={gx(G5, 380) - G5.x} height={G5.h + 20} fill="#e4e0d8" />
				<line x1={G5.x} y1={G5.y + G5.h} x2={G5.x + G5.w + 14} y2={G5.y + G5.h} stroke={INK} strokeWidth={4} />
				<line x1={G5.x} y1={G5.y + G5.h} x2={G5.x} y2={G5.y - 20} stroke={INK} strokeWidth={4} />
				{[100, 300, 500, 700, 900].map(nm => <g key={nm}><line x1={gx(G5, nm)} y1={G5.y + G5.h} x2={gx(G5, nm)} y2={G5.y + G5.h + 10} stroke={INK} strokeWidth={3} /><text x={gx(G5, nm)} y={G5.y + G5.h + 38} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{nm}</text></g>)}
				<StarCurve g={G5} temp={temp} color={AMBER.stroke} width={6} />
				{pkNm > G5.nm0 && pkNm < G5.nm1 ? <line x1={gx(G5, pkNm)} y1={G5.y} x2={gx(G5, pkNm)} y2={G5.y + G5.h} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" /> : null}
				<SpectrumStrip s={{...S5, y: S5.y - 20 * enlarge, h: S5.h + 30 * enlarge}} kind="absorption" lines={H_LINES} strengths={H_LINES.map(() => hStrength(temp))} lineW={7} />
			</FrameSvg>
			<Lbl x={G5.x + 10} y={G5.y + 30} at={0} color={GREY.ink} size={26}>UV: absorbed by our atmosphere</Lbl>
			<Lbl x={G5.x + G5.w} y={G5.y + G5.h + 70} at={0} color={INK} size={26} anchor="end">wavelength (nm)</Lbl>
			<HandTag x={0} y={0} at={bt} out={uv} color={TEAL.stroke} marks={[{kind: 'circle', cx: gx(G5, 500), cy: G5.y + G5.h + 28, rx: 40, ry: 26}]} />
			<Strip x={1110} y={168} at={2} size={28} w={720}>{"Find the Sun's surface temperature from its peak."}</Strip>
			<Strip x={1110} y={232} at={6} size={30}>λmax = b/T → T = b/λmax</Strip>
			<Givens x={1110} y={300} w={720} at={10} size={28} lines={['λmax ≈ 500 nm = 5.0 × 10⁻⁷ m', 'b = 2.898 × 10⁻³ m K (data sheet)']} />
			<div style={{position: 'absolute', left: 1110, top: 420, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={kv - 30} size={40}>T = (2.898 × 10⁻³) / (5.0 × 10⁻⁷)</Row>
				<Row at={kv - 6} size={48}><AnswerBox at={kv}>{`≈ ${sci(SUN_T, 1)} K`}</AnswerBox></Row>
			</div>
			<CrossedChip x={1460} y={540} at={kv + 30} crossAt={kv + 48} out={uv} size={26} caption="divide, don't multiply">{`T = b × λmax = ${sci(SUN_SLIP, 1)} K`}</CrossedChip>
			<Readout x={1110} y={640} label="T" value={`${fx(Math.round(temp / 100) * 100).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} K`} color={RED.ink} w={260} />
			<Readout x={1390} y={640} label="λmax" value={`${pkNm < 100 ? fx(pkNm, 1) : fx(pkNm)} nm`} color={TEAL.ink} w={230} />
			<div style={{position: 'absolute', left: 1640, top: 640, width: 180, height: 110, borderRadius: 14, border: `3px solid ${INK}`, background: starColour(temp), display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}><span style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: INK, background: 'rgba(255,253,248,0.85)', padding: '0 8px', borderRadius: 8, marginBottom: 6}}>{`colour (${classOf(temp)})`}</span></div>
			<Lbl x={1110} y={800} at={kv + 10} out={uv} color={RED.ink} size={30}>{"last scene's T = ? is now ≈ 5800 K"}</Lbl>
			<HandTag x={G5.x + 20} y={G5.y - 50} text="peak off the visible strip" at={uv + 120} out={li} size={32} color={RED.ink} />
			<HandTag x={1110} y={800} text="dust reddens: colour can mislead" at={du} out={li} size={32} color={GREY.ink} />
			<HandTag x={1110} y={880} text="now read the lines" at={li + 24} size={34} color={TEAL.ink} />
		</>
	);
};

// ---------- 6. why hydrogen peaks in the middle ----------
const PANELS = [{x: 96, title: 'cool (~4000 K)', spec: STAR_RED}, {x: 700, title: '~10 000 K', spec: STAR_WHITE}, {x: 1304, title: 'very hot (~30 000 K)', spec: STAR_BLUE}] as const;
const PH = {y: 240, w: 520, h: 330};
const HUMP = {x: 560, w: 800, y0: 900, h: 170};
const humpX = (T: number) => HUMP.x + ((Math.log10(40000) - Math.log10(T)) / (Math.log10(40000) - Math.log10(3000))) * HUMP.w;
export const S06: React.FC = () => {
	const id = 'hydrogen-hump';
	const f = useCurrentFrame();
	const l2 = cue(id, 'starting in level two'), al = cue(id, 'almost every electron sits in level one'), st = cue(id, 'stronger'), so = cue(id, 'strip the electron off completely'), ih = cue(id, 'Ionised hydrogen has no electron left to absorb'), tk = cue(id, 'near ten thousand kelvin'), hy = cap(id, cue(id, 'too little hydrogen'));
	const lift = f >= st;
	const esc = prog(f, so, 30);
	const str = [0.12, lift ? 1 : 0.35, 0.8 - 0.65 * prog(f, ih, 20)];
	const humpD = Array.from({length: 61}, (_, k) => { const T = 10 ** (Math.log10(40000) - ((Math.log10(40000) - Math.log10(3000)) * k) / 60); return `${k ? 'L' : 'M'}${humpX(T).toFixed(1)},${(HUMP.y0 - HUMP.h * hStrength(T)).toFixed(1)}`; }).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{PANELS.map((p, i) => <g key={i}>
					<AtomPanel x={p.x} y={PH.y} w={PH.w} h={PH.h} title={p.title} e={i === 0 ? [1, 1, 1, 1, 1, 1] : i === 1 ? (lift ? [1, 1, 2, 1, 1, 2] : [1, 1, 1, 1, 1, 1]) : f >= so ? [0, 0, 0, 0, 0, 1] : [1, 2, 1, 1, 2, 1]} escape={i === 2 ? esc : 0} hi2={i === 1 && f >= st} arrow={i === 1 ? prog(f, l2, 14) : 0} />
					<LPlate spec={p.spec} p={{x: p.x + PH.w - 100, y: PH.y + 8, w: 86}} />
					<SpectrumStrip s={{x: p.x + 30, y: PH.y + PH.h + 20, w: PH.w - 60, h: 44}} kind="absorption" lines={H_LINES} strengths={H_LINES.map(() => str[i])} lineW={6} />
				</g>)}
				{f >= tk ? <g opacity={prog(f, tk, 14)}>
					<line x1={HUMP.x} y1={HUMP.y0} x2={HUMP.x + HUMP.w + 10} y2={HUMP.y0} stroke={INK} strokeWidth={3.5} />
					<path d={humpD} fill="none" stroke={RED.stroke} strokeWidth={5} />
					{[30000, 10000, 3000].map(T => <text key={T} x={humpX(T)} y={HUMP.y0 + 32} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{T.toLocaleString('en-AU').replace(/,/g, ' ')}</text>)}
				</g> : null}
			</FrameSvg>
			<Chip x={96} y={168} at={l2} size={28} w={1100} color={INK}>{`visible hydrogen lines start from n = 2 (${fx(H_N2, 1)} eV up); Hα (656.3 nm) is n = 2 → 3`}</Chip>
			<HandTag x={PANELS[0].x + 20} y={680} text="stuck in n = 1" at={al + 10} size={32} color={ROSE.ink} />
			<HandTag x={PANELS[1].x + 20} y={680} text="some lifted to n = 2" at={st + 10} size={32} color={ROSE.ink} />
			<HandTag x={PANELS[2].x + 20} y={680} text="stripped off" at={so + 10} size={32} color={ROSE.ink} />
			<Lbl x={HUMP.x - 10} y={HUMP.y0 - HUMP.h} at={tk} color={INK} size={26} anchor="end">hydrogen line strength</Lbl>
			<Lbl x={HUMP.x + HUMP.w} y={HUMP.y0 - 20} at={tk} color={INK} size={26} anchor="end">T (K), hotter ←</Lbl>
			<HandTag x={humpX(10000) + 60} y={HUMP.y0 - HUMP.h - 10} text="A stars" at={tk + 16} size={32} color={RED.ink} marks={[{kind: 'circle', cx: humpX(10000), cy: HUMP.y0 - HUMP.h, rx: 40, ry: 26}]} />
			<CrossedChip x={1420} y={760} at={hy} crossAt={hy + 16} size={26} caption="too cool or too hot">weak hydrogen lines = little hydrogen</CrossedChip>
		</>
	);
};
export const PLATE_FOR = plateFor;
