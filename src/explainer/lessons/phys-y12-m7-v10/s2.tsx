// Scenes 7 to 12: Einstein's photons (amber packets on a model zinc surface; one packet gives its energy to one
// electron), why there is a threshold (the energy well: red photon bars that fall short, no teaming up, hf₀ = ϕ), the
// other two observations (the live bench again with photon-energy, ϕ and K_max readouts and a live energy bar), the
// worked check (the red photon, then the ultraviolet photon, against zinc's work function) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {LPlate} from '../../physics/light/plates';
import {BENCH_LAMP, METAL_PLATE, nat} from '../../physics/light/thermal';
import {Beam, Electron, EnergyBar, Packet, Well} from '../../physics/light/photo';
import {Givens} from '../phys-y12-m6-v01/parts';
import {BENCH, HEAD, HEAD_SIZE, L_RED, L_UV, PHI, SLIP, cap, cue, eJ, eV, kmax} from './common';
import {AMBER, Bench, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Stream, Strip, UV, UV_INK, fx, h01, lampAp, reading, sci} from './parts';
import {PredStrip, Sliders, SpeedGauge, f14, nmOf} from './s1';

// ---------- a model zinc surface (cross-section: ions and electrons) ----------
const SURF = {x: 160, y: 640, w: 1600, h: 250};
const Surface: React.FC<{f: number; skip?: number}> = ({f, skip = -1}) => (
	<g>
		<rect x={SURF.x} y={SURF.y} width={SURF.w} height={SURF.h} rx={10} fill="#e6e1d8" stroke={INK} strokeWidth={3} />
		{Array.from({length: 30}, (_, i) => { const cx = SURF.x + 50 + (i % 15) * 107, cy = SURF.y + 70 + Math.floor(i / 15) * 100; return <g key={i}><circle cx={cx} cy={cy} r={18} fill="#c9c2b6" stroke={INK} strokeWidth={2} /><text x={cx} y={cy + 9} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>+</text></g>; })}
		{Array.from({length: 14}, (_, i) => (i === skip ? null : <Electron key={i} x={SURF.x + 104 + i * 107 + 3 * Math.sin(f / 8 + i)} y={SURF.y - 2} r={10} color={NAVY.stroke} />))}
	</g>
);
const ex = (i: number) => SURF.x + 104 + i * 107;

// ---------- 7. Einstein's photons ----------
export const S07: React.FC = () => {
	const id = 'photons';
	const f = useCurrentFrame();
	const smooth = cue(id, "Light's energy isn't spread smoothly"), pk = cue(id, 'packets called photons'), hf = cue(id, 'E equals h f'), planck = cue(id, "That's Planck's packet"), more = cue(id, 'more photons each second'), el = cap(id, cue(id, 'electron'));
	const K = 7;
	const spawn: number[] = [];
	for (let t = pk; t < el - 40; t += t < more ? 30 : 9) spawn.push(t);
	const hit = prog(f, el - 30, 30), gone = f >= el;
	const fy = SURF.y - 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Surface f={f} skip={f >= el + 4 ? K : -1} />
				{f < smooth + 30 ? Array.from({length: 4}, (_, i) => { const y = 260 + ((f * 2.2 + i * 70) % 300); return <path key={i} d={Array.from({length: 60}, (_, k) => `${k ? 'L' : 'M'}${SURF.x + k * 27},${y + 16 * Math.sin(k * 0.6 + i)}`).join(' ')} fill="none" stroke={GREY.stroke} strokeWidth={4} opacity={0.75 * (1 - prog(f, smooth, 24))} />; }) : null}
				{spawn.map((s, k) => { const u = (f - s) / 45; if (u < 0 || u > 1) return null; const x = SURF.x + 80 + h01(k, 5) * (SURF.w - 160); return <Packet key={k} x={x} y={230 + u * (fy - 250)} deg={90} len={56} color={AMBER.stroke} />; })}
				{f >= el - 30 && !gone ? <Packet x={ex(K)} y={230 + hit * (fy - 250)} deg={90} len={70} color={AMBER.stroke} label="hf" /> : null}
				{gone ? <g>
					<Electron x={ex(K) + 60 * prog(f, el + 4, 30)} y={fy - 260 * prog(f, el + 4, 30)} r={12} color={NAVY.stroke} />
					<rect x={ex(K) + 60 * prog(f, el + 4, 30) + 22} y={fy - 260 * prog(f, el + 4, 30) - 60} width={26} height={60} rx={4} fill={AMBER.stroke} stroke={INK} strokeWidth={2} />
				</g> : null}
			</FrameSvg>
			<Lbl x={SURF.x} y={SURF.y + SURF.h + 40} at={0} color={GREY.ink} size={26}>zinc surface (model: ions and electrons)</Lbl>
			<Lbl x={96} y={190} at={pk} color={INK} size={30}>Einstein, 1905</Lbl>
			<Strip x={1240} y={160} at={hf} size={52}>E = hf (one photon)</Strip>
			<Chip x={1240} y={270} at={planck} size={28} color={INK}>{"last time: Planck's packet, now for light"}</Chip>
			<HandTag x={96} y={420} text="same f: intensity ∝ photons per second per m²" at={more + 10} size={32} color={AMBER.ink} />
			<HandTag x={ex(K) + 80} y={430} text="one photon → one electron, all its energy" at={el + 10} size={32} color={AMBER.ink} marks={[{kind: 'circle', cx: ex(K) + 30, cy: fy - 120, rx: 90, ry: 150}]} />
		</>
	);
};

// ---------- 8. why there is a threshold (the energy well) ----------
const WB = 880, WS = 140, STEP = 1000;
/** One attempt: a photon bar rises at bx, the electron at x climbs that far and slides back. */
const Attempt: React.FC<{f: number; at: number; bx: number; x: number; e: number; label?: string}> = ({f, at, bx, x, e, label}) => {
	if (f < at) return null;
	const g = prog(f, at, 18), climb = f < at + 18 ? g : Math.max(0, 1 - (f - at - 22) / 30);
	const o = 1 - prog(f, at + 60, 16);
	return (
		<g opacity={o}>
			<EnergyBar x={bx} base={WB} w={56} scale={WS} hf={e} phi={PHI} grow={g} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} />
			{label ? <text x={bx + 28} y={WB - e * WS * g - 14} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: AMBER.ink}}>{label}</text> : null}
			<Electron x={x} y={WB - 14 - e * WS * climb} r={12} color={NAVY.stroke} />
		</g>
	);
};
export const S08: React.FC = () => {
	const id = 'why-threshold';
	const f = useCurrentFrame();
	const less = cue(id, 'less than the work function'), team = cue(id, "photons don't team up on one electron"), light = cue(id, 'light'), phi = cue(id, 'phi'), weak = cap(id, cue(id, 'weak'));
	const er = eV(L_RED);
	const stream = f >= light ? Array.from({length: 10}, (_, k) => light + k * 10) : [];
	const lvl = prog(f, phi, 18);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PredStrip cross={[-30, -30, -30]} notes={[{at: weak + 6, text: 'explained', color: SLATE.ink}, null, null]} />
			<FrameSvg>
				<Well x={160} base={WB} w={1640} stepX={STEP} phi={PHI} scale={WS} color={SLATE.stroke} />
				{f < light ? <Electron x={STEP - 60} y={WB - 14} r={12} color={NAVY.stroke} /> : null}
				<Attempt f={f} at={less + 10} bx={560} x={STEP - 60} e={er} label="hf (red)" />
				<Attempt f={f} at={team + 10} bx={420} x={STEP - 60} e={er} />
				<Attempt f={f} at={team + 40} bx={500} x={STEP - 60} e={er} />
				{stream.map((s, k) => <Attempt key={k} f={f} at={s} bx={220 + (k % 5) * 70} x={STEP - 60 - (k % 4) * 60} e={er} />)}
				{f >= phi ? <g opacity={lvl}><EnergyBar x={760} base={WB} w={60} scale={WS} hf={PHI} phi={PHI} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /></g> : null}
			</FrameSvg>
			<Lbl x={STEP + 60} y={WB - PHI * WS - 30} at={0} color={SLATE.ink} size={34}>outside the metal</Lbl>
			<Lbl x={180} y={WB + 50} at={0} color={SLATE.ink} size={30}>inside the metal</Lbl>
			<Lbl x={STEP + 40} y={(WB + WB - PHI * WS) / 2} at={0} color={SLATE.ink} size={36}>ϕ (zinc 4.3 eV)</Lbl>
			<Lbl x={96} y={330} at={0} color={GREY.ink} size={28}>ordinary lamp light</Lbl>
			<Lbl x={560} y={WB - er * WS - 60} at={less + 30} color={AMBER.ink} size={30}>{`${fx(er, 2)} eV: falls short`}</Lbl>
			<CrossedChip x={1100} y={560} at={team + 10} crossAt={team + 40} size={30} caption="no teaming up (ordinary lamp light)">2 red photons → 1 electron</CrossedChip>
			<Lbl x={760} y={WB - PHI * WS - 20} at={phi + 10} color={AMBER.ink} size={32}>hf₀ = ϕ</Lbl>
			<HandTag x={0} y={0} at={phi + 10} color={SLATE.stroke} marks={[{kind: 'brace', x: 840, y1: WB - PHI * WS, y2: WB, facing: 'right'}]} />
			<Strip x={1100} y={340} at={phi + 6} size={52}><AnswerBox at={phi + 18}>hf₀ = ϕ</AnswerBox></Strip>
			<HandTag x={1100} y={800} text="more photons, same weak photon" at={weak} size={32} color={AMBER.ink} />
		</>
	);
};

// ---------- 9. the other two observations ----------
const EB = {x: 1300, base: 880, scale: 60};
export const S09: React.FC = () => {
	const id = 'other-observations';
	const f = useCurrentFrame();
	const above = cue(id, 'A photon above the threshold frees an electron'), left = cue(id, 'any energy left over'), fast = cue(id, 'faster'), cur = cue(id, 'current'), upAt = cap(id, cue(id, 'up'));
	const st = (i: number) => above + 12 + i * 22;
	const F = kf(f, [[st(0), f14(BENCH[0])], [st(1), f14(BENCH[1])], [st(2), f14(BENCH[2])], [st(3), f14(BENCH[3])], [fast, f14(BENCH[3])], [fast + 24, f14(BENCH[4])]]);
	const nm = nmOf(F);
	const bright = kf(f, [[cur, 1], [cur + 24, 2]]);
	const hfv = eV(nm), k = kmax(nm);
	const split = prog(f, left, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PredStrip cross={[-30, -30, -30]} notes={[{at: -30, text: 'explained', color: SLATE.ink}, {at: fast + 10, text: 'explained: energy per photon', color: ORANGE.ink}, {at: upAt, text: 'explained: one packet, no build-up', color: AMBER.ink}]} />
			<FrameSvg>
				<Bench nm={nm} bright={bright} reading={reading(nm, bright)} />
				<Stream t={f / 30} nm={nm} bright={bright} />
				<Sliders F={F} bright={bright} />
				<EnergyBar x={EB.x} base={EB.base} w={64} scale={EB.scale} hf={hfv} phi={PHI} split={split} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} />
				<SpeedGauge x={1440} y={830} nm={nm} opacity={prog(f, fast, 12)} />
				{f >= upAt ? <g opacity={prog(f, upAt, 10)}>
					<Packet x={1640 - 40 * (1 - prog(f, upAt, 14))} y={700} len={50} color={AMBER.stroke} />
					<rect x={1560} y={740} width={240} height={46} rx={10} fill="#fffdf8" stroke={NAVY.stroke} strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			<Lbl x={1400} y={350} at={0} color={AMBER.ink} size={44}>{`hf = ${fx(hfv, 2)} eV`}</Lbl>
			<Lbl x={1400} y={420} at={0} color={SLATE.ink} size={44}>ϕ = 4.3 eV</Lbl>
			<Lbl x={1400} y={490} at={0} color={ORANGE.ink} size={44}>{`K_max = ${k > 0.004 ? fx(k, 2) : '0'} eV`}</Lbl>
			<Lbl x={1400} y={550} at={0} color={GREY.ink} size={28}>{`λ = ${Math.round(nm)} nm`}</Lbl>
			<Lbl x={EB.x - 6} y={EB.base + 44} at={0} color={INK} size={26}>photon</Lbl>
			<Lbl x={96} y={790} at={0} color={NAVY.ink} size={28}>photocurrent (relative)</Lbl>
			<HandTag x={1400} y={610} text="left over → kinetic energy" at={left + 10} size={30} color={ORANGE.ink} />
			<Lbl x={1400} y={660} at={left + 24} color={ORANGE.ink} size={28}>K_max = hf − ϕ (next time)</Lbl>
			<HandTag x={0} y={0} at={cur + 20} color={NAVY.stroke} marks={[{kind: 'circle', cx: 1600, cy: 475, rx: 230, ry: 44}]} />
			<HandTag x={686} y={290} text="intensity: number only" at={cur + 10} size={28} color={NAVY.ink} />
			<Lbl x={1570} y={772} at={upAt} color={NAVY.ink} size={30}>{'< 10⁻⁹ s'}</Lbl>
		</>
	);
};

// ---------- 10. worked check: the red photon ----------
const WellInset: React.FC<{x: number; y: number; w: number; h: number; bars: readonly {e: number; label: string; o: number; split?: number}[]}> = ({x, y, w, h, bars}) => {
	const base = y + h - 30, scale = (h - 90) / 5.2;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Well x={x + 20} base={base} w={w - 40} stepX={x + w * 0.62} phi={PHI} scale={scale} color={SLATE.stroke} />
			{bars.map((b, i) => <g key={i} opacity={b.o}><EnergyBar x={x + 40 + i * (w * 0.22)} base={base} w={w * 0.14} scale={scale} hf={b.e} phi={PHI} split={b.split ?? 0} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /><text x={x + 40 + i * (w * 0.22) + w * 0.07} y={base - b.e * scale - 12} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: AMBER.ink}}>{b.label}</text></g>)}
			<text x={x + w * 0.62 + 12} y={base - PHI * scale - 14} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: SLATE.ink}}>ϕ = 4.3 eV</text>
		</g>
	);
};
const ZP10 = {x: 1450, y: 680, w: 360}, LP10 = {x: 1460, y: 520, w: 190};
export const S10: React.FC = () => {
	const id = 'worked-red';
	const f = useCurrentFrame();
	const red = cue(id, 'Take red light of wavelength seven hundred nanometres'), lam = cue(id, 'lambda'), j = cue(id, 'joules'), v = cap(id, cue(id, 'volts'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={170} at={2} size={34}>Do these photons free electrons from zinc?</Strip>
			<Strip x={96} y={250} at={6} size={40}>E = hf, c = fλ</Strip>
			<Givens x={96} y={340} w={640} at={red} size={28} lines={['λ_red = 700 nm = 7.00 × 10⁻⁷ m', 'λ_UV = 250 nm = 2.50 × 10⁻⁷ m', 'ϕ_zinc = 4.3 eV']} />
			<Givens x={760} y={340} w={640} at={red + 8} size={28} lines={['h = 6.626 × 10⁻³⁴ J s', 'c = 3.00 × 10⁸ m s⁻¹', '1 eV = 1.602 × 10⁻¹⁹ J (data sheet)']} />
			<FrameSvg><WellInset x={1460} y={170} w={360} h={320} bars={[{e: eV(L_RED), label: `${fx(eV(L_RED), 2)}`, o: prog(f, v + 10, 14)}]} /></FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', flexDirection: 'column', gap: 14, width: 1400}}>
				<Row at={lam - 6} size={52}><span style={{whiteSpace: 'nowrap'}}>E = hf = hc / λ</span></Row>
				<Row at={j - 6} size={44}><span style={{whiteSpace: 'nowrap'}}>{`E_red = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (7.00 × 10⁻⁷) = ${sci(eJ(L_RED), 2)} J`}</span></Row>
				<Row at={v - 6} size={52}><AnswerBox at={v}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{`= (${sci(eJ(L_RED), 2)}) / (1.602 × 10⁻¹⁹) = ${fx(eV(L_RED), 2)} eV`}</span></AnswerBox></Row>
			</div>
			<HandTag x={760} y={545} text="λ in metres" at={lam + 10} size={32} color={INK} />
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP10} />
				<LPlate spec={BENCH_LAMP} p={LP10} />
				<Beam a={lampAp(LP10)} b={nat(METAL_PLATE, ZP10, 720, 520)} wa={10} wb={26} color={'#c8443a'} />
			</FrameSvg>
			<Lbl x={LP10.x} y={LP10.y - 16} at={red} color={'#b8322a'} size={28}>red, 700 nm</Lbl>
			<Lbl x={ZP10.x + 200} y={ZP10.y + 300} at={red} color={INK} size={28}>zinc</Lbl>
			<CrossedChip x={96} y={820} at={j + 20} crossAt={j + 40} size={28} caption="nm → m first">{`E = hc / 700 = ${sci(SLIP, 2)} J`}</CrossedChip>
			<HandTag x={0} y={0} at={v + 14} color={AMBER.stroke} marks={[{kind: 'arrow', from: [1100, 700], to: [1500, 440], bend: -0.2}]} />
		</>
	);
};

// ---------- 11. worked check: the ultraviolet photon ----------
const ZP11 = {x: 330, y: 760, w: 260}, LL11 = {x: 120, y: 660, w: 170}, LR11 = {x: 640, y: 660, w: 170};
export const S11: React.FC = () => {
	const id = 'worked-uv';
	const f = useCurrentFrame();
	const short = cue(id, 'falls well short'), dd = cue(id, 'do'), v = cue(id, 'volts'), spare = cap(id, cue(id, 'spare'));
	const grow = prog(f, 4, 24);
	const W = {x: 1460 - 460 * grow, y: 170 + 80 * grow, w: 360 + 460 * grow, h: 320 + 330 * grow};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={170} at={-30} size={32}><span style={{color: AMBER.ink}}>{`E_red = ${fx(eV(L_RED), 2)} eV`}</span></Strip>
			<FrameSvg><WellInset x={W.x} y={W.y} w={W.w} h={W.h} bars={[{e: eV(L_RED), label: `${fx(eV(L_RED), 2)} eV`, o: prog(f, short, 12)}, {e: eV(L_UV), label: `${fx(eV(L_UV), 2)} eV`, o: prog(f, v, 14), split: prog(f, spare, 16)}]} /></FrameSvg>
			<CrossedChip x={96} y={540} at={dd} crossAt={dd + 20} size={30} caption="1.77 eV < 4.3 eV, ordinary lamp light">brighter red → electrons</CrossedChip>
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP11} />
				<LPlate spec={BENCH_LAMP} p={LL11} />
				<LPlate spec={BENCH_LAMP} p={LR11} flip />
				<Beam a={lampAp(LL11)} b={[nat(METAL_PLATE, ZP11, 720, 520)[0] - 30, nat(METAL_PLATE, ZP11, 720, 520)[1]]} wa={2 + 2 * prog(f, v, 12)} wb={5 + 5 * prog(f, v, 12)} color={UV} opacity={prog(f, v - 30, 12)} />
				<Beam a={lampAp(LR11, true)} b={[nat(METAL_PLATE, ZP11, 720, 520)[0] + 40, nat(METAL_PLATE, ZP11, 720, 520)[1]]} wa={12} wb={30} color={'#c8443a'} />
			</FrameSvg>
			<Lbl x={LL11.x} y={LL11.y - 14} at={v - 30} color={UV_INK} size={26}>UV, 250 nm</Lbl>
			<Lbl x={LR11.x} y={LR11.y - 14} at={0} color={'#b8322a'} size={26}>red, 700 nm</Lbl>
			<div style={{position: 'absolute', left: 96, top: 260, display: 'flex', flexDirection: 'column', gap: 14, width: 900}}>
				<Row at={v - 30} size={40}><span style={{whiteSpace: 'nowrap'}}>{'E_UV = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (2.50 × 10⁻⁷)'}</span></Row>
				<Row at={v - 6} size={52}><AnswerBox at={v}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{`= ${sci(eJ(L_UV), 2)} J = ${fx(eV(L_UV), 2)} eV`}</span></AnswerBox></Row>
				<Row at={spare - 4} size={40}><span style={{whiteSpace: 'nowrap'}}>{`${fx(eV(L_UV), 2)} eV > 4.3 eV: electrons freed ✓`}</span></Row>
			</div>
			<HandTag x={W.x + W.w * 0.3} y={W.y + 60} text="≈ 0.7 eV left over" at={spare + 6} size={32} color={ORANGE.ink} />
		</>
	);
};

// ---------- 12. a way to remember ----------
const ZP12 = {x: 700, y: 640, w: 420}, LL12 = {x: 380, y: 470, w: 230}, LR12 = {x: 1240, y: 470, w: 230};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const one = cue(id, 'One photon, one electron'), whe = cue(id, 'Frequency decides whether'), many = cap(id, cue(id, 'many'));
	const top = nat(METAL_PLATE, ZP12, 720, 520);
	const hL: [number, number] = [top[0] - 60, top[1]], hR: [number, number] = [top[0] + 80, top[1] + 10];
	const apL = lampAp(LL12), apR = lampAp(LR12, true);
	const wv = 1 + prog(f, many, 20);
	const t = (f % 40) / 40;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={one - 10} main={<><span style={{color: AMBER.ink}}>One photon, one electron.</span> <span style={{color: NAVY.ink}}>Frequency decides whether; brightness decides how many.</span></>} sub="(ordinary lamp light)" />
			</div>
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP12} />
				<LPlate spec={BENCH_LAMP} p={LL12} />
				<LPlate spec={BENCH_LAMP} p={LR12} flip />
				<Beam a={apL} b={hL} wa={3 * wv} wb={8 * wv} color={UV} />
				<Beam a={apR} b={hR} wa={14} wb={40} color={'#c8443a'} />
				{f >= one && f < one + 40 ? <Packet x={apL[0] + (hL[0] - apL[0]) * prog(f, one, 30)} y={apL[1] + (hL[1] - apL[1]) * prog(f, one, 30)} deg={45} len={44} color={AMBER.stroke} /> : null}
				{f >= whe ? Array.from({length: f >= many ? 5 : 2}, (_, i) => { const u = (t + i / (f >= many ? 5 : 2)) % 1; return <Electron key={i} x={hL[0] - 20 - 50 * u + i * 8} y={hL[1] - 20 - 150 * u} r={9} color={NAVY.stroke} />; }) : null}
			</FrameSvg>
			<Lbl x={LL12.x} y={LL12.y - 20} at={0} color={UV_INK} size={28}>f (ultraviolet)</Lbl>
			<Lbl x={LR12.x} y={LR12.y - 20} at={0} color={'#c8443a'} size={28}>red, bright</Lbl>
			<HandTag x={0} y={0} at={whe} color={UV_INK} marks={[{kind: 'circle', cx: LL12.x + 60, cy: LL12.y - 28, rx: 110, ry: 34}]} />
		</>
	);
};
