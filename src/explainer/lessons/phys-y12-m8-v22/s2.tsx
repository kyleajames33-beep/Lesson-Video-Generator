// Scenes 8 to 14: light from bent electrons (a storage ring with light cones at the bends and an energy bar topped up
// each lap), head-on collisions (the LHC ring, two beams meeting; the painted dipole; 6.8 + 6.8 = 13.6 TeV), a detector
// like an onion (the painted CMS-style cutaway beside a coded layer section; tracks on the field motion engine), reading
// the signatures (photon, electron, muon, neutrino; visible momenta that fail to close), a test the theory could fail
// (the schematic two-photon bump at 125 GeV), what accelerators can't tell us (the energy reach and three limits) and the
// memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {AccRing, BumpHist, DetectorSection, ringPt} from '../../physics/atom/accelerator';
import type {Layer} from '../../physics/atom/accelerator';
import {Diamond, GridTable, SchemCard} from '../../physics/atom/particles';
import {LPlate} from '../../physics/light/plates';
import {MemoryCard} from '../../shared/scenes';
import {runMotion, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {AS, FIXED_TEV, HEAD, HEAD_SIZE, LHC, LHC_SUM, RAD_RATIO, cap, cue} from './common';
import {AMBER, Arrow, CMS, DIPOLE, GOLD, GREY, INK, LAYER, LAYER_INK, LEP, Lbl, NAVY, NU, PROTON, SLATE, WZ, fx, p10} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseAt = (f: number, at: number, d = 36) => Math.sin(Math.PI * Math.min(1, Math.max(0, (f - at) / d)));

// ---------- 8. light from bent electrons ----------
const RG8 = {cx: 560, cy: 580, r: 300};
export const S08: React.FC = () => {
	const id = 'synchrotron-light';
	const f = useCurrentFrame();
	const sl = cue(id, 'called synchrotron light'), lf = cue(id, 'lose energy this way fast'), tm = cue(id, 'a two hundred and sixteen metre ring'), xr = cue(id, 'intense X-rays for research'), pi = cap(id, cue(id, 'uses protons instead'), 24);
	const turns = (f / 90) % 1;
	const lapFrac = turns;
	const energy = f < lf ? 1 : 1 - 0.18 * lapFrac;
	const bends = [0.125, 0.375, 0.625, 0.875];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<AccRing cx={RG8.cx} cy={RG8.cy} r={RG8.r} segments={8} dots={[{turns, color: NAVY.stroke}]} glow={turns < 0.06 && f >= lf ? 1 : 0} />
				{bends.map((b, i) => {
					const [x, y] = ringPt(RG8.cx, RG8.cy, RG8.r, b), tx = Math.cos(2 * Math.PI * b), ty = -Math.sin(2 * Math.PI * b);
					const o = prog(f, sl + i * 6, 14);
					return <g key={i} opacity={o}><path d={`M${x},${y} L${x + tx * 170 - ty * 34},${y + ty * 170 + tx * 34} L${x + tx * 170 + ty * 34},${y + ty * 170 - tx * 34} Z`} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
						{f >= xr ? <rect x={x + tx * 170 - 14} y={y + ty * 170 - 14} width={28} height={28} fill={INK} opacity={prog(f, xr, 14)} transform={`rotate(${(-b * 360).toFixed(1)},${x + tx * 170},${y + ty * 170})`} /> : null}</g>;
				})}
				<g><rect x={1080} y={330} width={60} height={300} fill="none" stroke={INK} strokeWidth={3} /><rect x={1080} y={630 - 300 * energy} width={60} height={300 * energy} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} /></g>
			</FrameSvg>
			<Chip x={1180} y={200} at={sl} size={30} w={640} color={AMBER.ink}>synchrotron light: from charges forced round a curve</Chip>
			<Lbl x={1080} y={310} at={-30} color={NAVY.ink} size={28}>electron&apos;s energy</Lbl>
			<Lbl x={1160} y={600} at={lf} color={NAVY.ink} size={28}>lost on the bends, topped up at the gap</Lbl>
			<Lbl x={RG8.cx} y={RG8.cy + RG8.r + 60} at={-30} color={GREY.ink} size={26} anchor="middle">electron ring, top view (schematic)</Lbl>
			<Lbl x={RG8.cx} y={RG8.cy + 10} at={tm} color={INK} size={30} anchor="middle">{`storage ring: ${AS.ring} m, ${fx(AS.e, 1)} GeV`}</Lbl>
			<Lbl x={1180} y={420} at={xr + 10} color={INK} size={28}>beamlines: materials, proteins</Lbl>
			<HandTag x={1180} y={520} text="useful light, costly loss" at={xr + 30} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [1170, 540], to: [RG8.cx + RG8.r + 120, RG8.cy - 160], bend: 0.15}]} />
			<Chip x={1180} y={660} at={pi} size={28} w={640} color={GREY.ink}>{`same energy and ring: electrons radiate about ${p10(Math.round(Math.log10(RAD_RATIO)))} times more than protons`}</Chip>
			<Lbl x={1180} y={830} at={pi + 10} color={INK} size={34}>highest energies: protons</Lbl>
		</>
	);
};

// ---------- 9. head-on collisions ----------
const RG9 = {cx: 520, cy: 580, r: 300};
export const S09: React.FC = () => {
	const id = 'collider';
	const f = useCurrentFrame();
	const tk = cue(id, 'a twenty-seven kilometre ring'), tb = cue(id, 'Two beams of protons travel in opposite directions'), et = cue(id, 'magnets of about eight tesla'), hc = cue(id, 'the beams cross, head on'), ts = cue(id, 'thirteen point six trillion'), ne = cap(id, cue(id, 'not six point eight'), 60);
	/** Two and a half turns from injection to the head-on crossing at the top, so the two dots meet exactly there. */
	const a1 = 2.5 * prog(f, tb, Math.max(30, hc + 20 - tb), t => t), a2 = -a1;
	const flash = prog(f, hc + 20, 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={RG9.cx} cy={RG9.cy} r={RG9.r} fill="none" stroke={INK} strokeWidth={6} />
				{f >= tb ? <g>{[a1, a2].map((a, i) => { const [x, y] = ringPt(RG9.cx, RG9.cy, RG9.r, a); return <circle key={i} cx={x} cy={y} r={15} fill={PROTON} stroke="#fffdf8" strokeWidth={3} />; })}</g> : null}
				{flash > 0.001 ? <g opacity={flash}>{Array.from({length: 12}, (_, i) => { const a = (i / 12) * 2 * Math.PI, [x, y] = ringPt(RG9.cx, RG9.cy, RG9.r, 0.5); return <line key={i} x1={x + 18 * Math.cos(a)} y1={y + 18 * Math.sin(a)} x2={x + 56 * Math.cos(a)} y2={y + 56 * Math.sin(a)} stroke={GOLD.stroke} strokeWidth={6} strokeLinecap="round" />; })}</g> : null}
				<LPlate spec={DIPOLE} p={{x: 1180, y: 200, w: 560}} />
				{f >= ts ? <g opacity={prog(f, ts, 12)}><rect x={1100} y={620} width={340} height={56} fill={PROTON} opacity={0.35} stroke={INK} strokeWidth={3} /><rect x={1440} y={620} width={340} height={56} fill={PROTON} opacity={0.35} stroke={INK} strokeWidth={3} /></g> : null}
			</FrameSvg>
			<Lbl x={RG9.cx} y={RG9.cy + 10} at={tk} color={INK} size={34} anchor="middle">{`LHC, CERN: ${LHC.km} km`}</Lbl>
			<Lbl x={1180} y={500} at={-30} color={GREY.ink} size={26}>bending magnet, two beam pipes (illustration)</Lbl>
			<Lbl x={RG9.cx - RG9.r - 10} y={RG9.cy - 40} at={tb + 10} color={PROTON} size={28} anchor="end">{`${fx(LHC.beam, 1)} TeV`}</Lbl>
			<Lbl x={RG9.cx + RG9.r + 14} y={RG9.cy - 40} at={tb + 10} color={PROTON} size={28}>{`${fx(LHC.beam, 1)} TeV`}</Lbl>
			<Lbl x={RG9.cx} y={RG9.cy + 60} at={tb + 10} color={GREY.ink} size={26} anchor="middle">two beams, opposite directions</Lbl>
			<Lbl x={1180} y={540} at={et + 10} color={NAVY.ink} size={28}>{`≈ ${LHC.tesla} T (superconducting dipole)`}</Lbl>
			<Lbl x={RG9.cx + 70} y={RG9.cy - RG9.r - 30} at={hc + 20} color={GOLD.ink} size={28}>head on</Lbl>
			<div style={{position: 'absolute', left: 1100, top: 700}}><Row at={ts + 6} size={40}><AnswerBox at={ts + 10}>{`${fx(LHC.beam, 1)} + ${fx(LHC.beam, 1)} = ${fx(LHC_SUM, 1)} TeV available`}</AnswerBox></Row></div>
			<CrossedChip x={1100} y={790} at={ne} crossAt={ne + 10} size={30} caption="head on: both beams count">6.8 TeV</CrossedChip>
			<Lbl x={96} y={930} at={ne + 30} color={GREY.ink} size={26}>{`fixed target: much less available (extension: about ${fx(FIXED_TEV, 2)} TeV for a ${fx(LHC.beam, 1)} TeV beam)`}</Lbl>
		</>
	);
};

// ---------- 10 and 11. the detector ----------
type Sec = {cx: number; cy: number; s: number};
const LAYERS = (o: readonly number[], s: number): Layer[] => [
	{r0: 0, r1: 120 * s, fill: LAYER.tracker, o: o[0]}, {r0: 120 * s, r1: 175 * s, fill: LAYER.ecal, o: o[1]},
	{r0: 175 * s, r1: 255 * s, fill: LAYER.hcal, o: o[2]}, {r0: 270 * s, r1: 340 * s, fill: LAYER.muon, o: o[3]},
];
/** A charged track in the tracker's field (field motion engine, magnetic, out of the page): sign and momentum set the
 *  curvature (r = p/qB at any speed); stops at radius rMax (px, unscaled). */
const track = (sign: 1 | -1, deg: number, rCurv: number, rMax: number): MotionPath => {
	const v = 200, a = (deg * Math.PI) / 180;
	return runMotion({field: {kind: 'magnetic', qOverM: sign, b: v / rCurv}, start: {x: 0, y: 0, vx: v * Math.cos(a), vy: v * Math.sin(a)}, duration: 4, steps: 800, stopWhen: s => Math.hypot(s.x, s.y) >= rMax});
};
const TR_POS = track(1, 30, 260, 120), TR_NEG = track(-1, 150, 220, 120);
const TR_E = track(-1, 200, 200, 150), TR_MU = track(1, -40, 900, 330);
const tpath = (p: MotionPath, g: Sec, t: number) => trailTo(p, p.duration * t).map(([x, y], i) => `${i ? 'L' : 'M'}${(g.cx + x * g.s).toFixed(1)},${(g.cy - y * g.s).toFixed(1)}`).join(' ');
const endOf = (p: MotionPath, g: Sec): [number, number] => { const k = p.n; return [g.cx + p.x[k] * g.s, g.cy - p.y[k] * g.s]; };
const SEC10: Sec = {cx: 1150, cy: 580, s: 0.95};
export const S10: React.FC = () => {
	const id = 'detector-layers';
	const f = useCurrentFrame();
	const bl = cue(id, 'a detector built in layers'), tr = cue(id, 'a tracker records the paths of charged particles'), dc = cue(id, 'its direction gives their charge'), ep = cue(id, 'stops electrons and photons'), hp = cue(id, 'stops protons, neutrons and pions'), oc = cap(id, cue(id, 'leaving tracks in the outer chambers'), 40);
	const g = SEC10;
	const lab = (r: number, y: number, at: number, text: string, color: string) => <Lbl x={1520} y={y} at={at} color={color} size={28}>{text}</Lbl>;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={CMS} p={{x: 96, y: 260, w: 600}} />
				<DetectorSection cx={g.cx} cy={g.cy} layers={LAYERS([prog(f, bl, 14), prog(f, bl + 8, 14), prog(f, bl + 16, 14), prog(f, bl + 24, 14)], g.s)} />
				{f >= tr ? <path d={tpath(TR_POS, g, prog(f, tr, 30))} fill="none" stroke={INK} strokeWidth={4} /> : null}
				{f >= dc ? <path d={tpath(TR_NEG, g, prog(f, dc, 30))} fill="none" stroke={INK} strokeWidth={4} /> : null}
				{f >= oc - 30 ? <path d={tpath(TR_MU, g, prog(f, oc - 30, 30))} fill="none" stroke={NAVY.stroke} strokeWidth={5} /> : null}
				{[ep, hp, oc].map((at, i) => { const r = [148, 215, 305][i] * g.s; return <line key={i} x1={g.cx + r * 0.71} y1={g.cy - r * 0.71} x2={1510} y2={[460, 560, 660][i] - 10} stroke={[LAYER_INK.ecal, LAYER_INK.hcal, LAYER_INK.muon][i]} strokeWidth={2.5} opacity={prog(f, at, 12)} />; })}
				<line x1={g.cx + 60 * g.s} y1={g.cy - 60 * g.s} x2={1510} y2={350} stroke={LAYER_INK.tracker} strokeWidth={2.5} opacity={prog(f, tr, 12)} />
			</FrameSvg>
			<Lbl x={96} y={620} at={-30} color={GREY.ink} size={26}>CMS-style detector (illustration)</Lbl>
			<Lbl x={g.cx} y={g.cy + 340 * g.s + 40} at={bl} color={GREY.ink} size={26} anchor="middle">cross-section: schematic, not real data</Lbl>
			{lab(0, 360, tr, 'tracker (in a strong B field)', LAYER_INK.tracker)}
			{lab(0, 460, ep, 'electromagnetic calorimeter', LAYER_INK.ecal)}
			{lab(0, 560, hp, 'hadron calorimeter', LAYER_INK.hcal)}
			{lab(0, 660, oc, 'muon chambers', LAYER_INK.muon)}
			<Lbl x={endOf(TR_POS, g)[0] + 8} y={endOf(TR_POS, g)[1] - 8} at={dc + 10} color={INK} size={30}>+</Lbl>
			<Lbl x={endOf(TR_NEG, g)[0] - 30} y={endOf(TR_NEG, g)[1] - 8} at={dc + 10} color={INK} size={30}>−</Lbl>
			<Chip x={96} y={700} at={dc + 20} size={28} w={640} color={INK}>tighter curve → less momentum (r = p/qB); opposite bend → opposite charge</Chip>
			<HandTag x={96} y={880} text="μ: tracks in the outer chambers" at={oc + 6} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: endOf(TR_MU, g)[0] - 10, cy: endOf(TR_MU, g)[1] - 10, rx: 50, ry: 50}]} />
		</>
	);
};
const SEC11: Sec = {cx: 640, cy: 590, s: 1.0};
const MOM = [{dx: 150, dy: -90, c: AMBER.stroke, l: 'γ'}, {dx: -60, dy: -150, c: LEP.stroke, l: 'e⁻'}, {dx: -170, dy: 80, c: NAVY.stroke, l: 'μ'}] as const;
export const S11: React.FC = () => {
	const id = 'signatures';
	const f = useCurrentFrame();
	const ph = cue(id, 'A photon has no charge'), el = cue(id, 'An electron leaves a curved track'), mu = cue(id, 'A muon leaves a track all the way out'), nu = cue(id, 'A neutrino leaves nothing at all'), az = cue(id, 'should add to zero'), sn = cap(id, cue(id, 'such as a neutrino'), 30);
	const g = SEC11;
	const [ex, ey] = endOf(TR_E, g);
	let x = 1300, y = 640;
	const chain = MOM.map(m => { const s = {x0: x, y0: y, x1: x + m.dx, y1: y + m.dy, ...m}; x += m.dx; y += m.dy; return s; });
	const photonA = (-40 * Math.PI) / 180 + Math.PI / 2;
	const px1 = g.cx + Math.cos(photonA) * 150, py1 = g.cy - Math.sin(photonA) * 150;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DetectorSection cx={g.cx} cy={g.cy} layers={LAYERS([1, 1, 1, 1], g.s)} />
				{f >= ph ? <g opacity={prog(f, ph, 12)}><path d={Array.from({length: 40}, (_, i) => { const t = (i / 39) * 0.92, bx = lerp(g.cx, px1, t), by = lerp(g.cy, py1, t), w = 8 * Math.sin(i * 1.4); return `${i ? 'L' : 'M'}${(bx + w * Math.sin(photonA)).toFixed(1)},${(by + w * Math.cos(photonA)).toFixed(1)}`; }).join(' ')} fill="none" stroke={AMBER.stroke} strokeWidth={4} /><circle cx={px1} cy={py1} r={18} fill={AMBER.stroke} opacity={0.7} /></g> : null}
				{f >= el ? <g><path d={tpath(TR_E, g, prog(f, el, 30))} fill="none" stroke={LEP.stroke} strokeWidth={5} /><circle cx={ex} cy={ey} r={18} fill={LAYER_INK.ecal} opacity={0.6 * prog(f, el + 30, 10)} /></g> : null}
				{f >= mu ? <path d={tpath(TR_MU, g, prog(f, mu, 30))} fill="none" stroke={NAVY.stroke} strokeWidth={5} /> : null}
				{f >= nu ? <line x1={g.cx} y1={g.cy} x2={g.cx - 360} y2={g.cy + 140} stroke={NU.stroke} strokeWidth={4} strokeDasharray="10 9" opacity={prog(f, nu, 12)} /> : null}
				{chain.map((c, i) => <Arrow key={i} x0={c.x0} y0={c.y0} x1={c.x1} y1={c.y1} color={c.c} width={6} opacity={prog(f, az + i * 10, 12)} />)}
				{f >= sn ? <Arrow x0={x} y0={y} x1={1300} y1={640} color={NU.stroke} width={5} dash="10 8" opacity={prog(f, sn, 12)} /> : null}
			</FrameSvg>
			<Lbl x={px1 + 22} y={py1 - 12} at={ph + 6} color={AMBER.ink} size={30}>γ</Lbl>
			<Lbl x={ex - 50} y={ey - 18} at={el + 20} color={LEP.ink} size={30}>e⁻</Lbl>
			<Lbl x={endOf(TR_MU, g)[0] + 12} y={endOf(TR_MU, g)[1]} at={mu + 20} color={NAVY.ink} size={30}>μ</Lbl>
			<Lbl x={g.cx - 360} y={g.cy + 180} at={nu + 6} color={GREY.ink} size={28}>ν (not detected)</Lbl>
			<Lbl x={g.cx} y={g.cy + 340 + 40} at={-30} color={GREY.ink} size={26} anchor="middle">schematic, not real data</Lbl>
			<Lbl x={1200} y={300} at={az} color={INK} size={30}>momenta of what you can see</Lbl>
			<Lbl x={1200} y={340} at={az} color={INK} size={30}>(across the beam), head to tail:</Lbl>
			{chain.map((c, i) => <Lbl key={i} x={(c.x0 + c.x1) / 2 + 14} y={(c.y0 + c.y1) / 2 - 10} at={az + i * 10 + 6} color={c.c} size={30}>{c.l}</Lbl>)}
			<Lbl x={1210} y={820} at={sn + 10} color={GREY.ink} size={28}>missing momentum → something unseen (for example ν)</Lbl>
			<HandTag x={1210} y={880} text="the gap is the clue" at={sn + 20} size={32} color={GREY.ink} marks={[{kind: 'circle', cx: (x + 1300) / 2, cy: (y + 640) / 2, rx: 120, ry: 60}]} />
		</>
	);
};

// ---------- 12. a test the theory could fail ----------
const H12 = {x: 220, y: 300, w: 900, h: 420, lo: 100, hi: 160, n: 30};
const BINS = Array.from({length: H12.n}, (_, i) => { const m = H12.lo + ((i + 0.5) * (H12.hi - H12.lo)) / H12.n; return 0.85 * Math.exp(-(m - 100) / 38); });
const BUMP = BINS.map((v, i) => { const m = H12.lo + ((i + 0.5) * (H12.hi - H12.lo)) / H12.n; return v + 0.12 * Math.exp(-(((m - 125) / 1.8) ** 2)); });
const h12X = (m: number) => H12.x + ((m - H12.lo) / (H12.hi - H12.lo)) * H12.w;
export const S12: React.FC = () => {
	const id = 'testing';
	const f = useCurrentFrame();
	const pr = cue(id, 'predicted the Higgs boson back in nineteen sixty-four'), ex = cue(id, 'an excess of photon pairs'), wh = cue(id, 'That was the Higgs'), tr = cue(id, 'would have been in trouble'), e3 = cap(id, cue(id, 'nineteen eighty-three'), 30);
	const bump = prog(f, ex + 20, 30);
	const bins = BINS.map((v, i) => lerp(v, BUMP[i], bump));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SchemCard x={130} y={190} w={1060} h={720} title="" note="schematic, not real data" />
				<line x1={H12.x} y1={H12.y - 10} x2={H12.x} y2={H12.y + H12.h} stroke={INK} strokeWidth={4} />
				<line x1={H12.x} y1={H12.y + H12.h} x2={H12.x + H12.w} y2={H12.y + H12.h} stroke={INK} strokeWidth={4} />
				<BumpHist x={H12.x} y={H12.y} w={H12.w} h={H12.h} bins={bins} color={NAVY.stroke} hiFrom={bump > 0.5 ? 12 : -1} hiTo={bump > 0.5 ? 12 : -1} hiColor={GOLD.stroke} />
				{[100, 110, 120, 130, 140, 150, 160].map(m => <g key={m}><line x1={h12X(m)} y1={H12.y + H12.h} x2={h12X(m)} y2={H12.y + H12.h + 12} stroke={INK} strokeWidth={3} /><text x={h12X(m)} y={H12.y + H12.h + 44} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{m}</text></g>)}
				<g opacity={prog(f, pr, 14)}><circle cx={1440} cy={330} r={64} fill={GOLD.soft} stroke={GOLD.stroke} strokeWidth={7} /><text x={1440} y={348} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 50, fill: GOLD.ink}}>H</text></g>
				<GridTable cells={[{id: 'W', sym: 'W±', name: 'W boson', x: 1300, y: 660, tone: WZ}, {id: 'Z', sym: 'Z⁰', name: 'Z boson', x: 1540, y: 660, tone: WZ}]} w={210} h={100} state={() => ({o: 1, tint: 1, lit: pulseAt(f, e3)})} symSize={40} />
				{f >= e3 ? <g><Mark x={1490} y={680} at={e3} kind="tick" color={INK} size={30} /><Mark x={1730} y={680} at={e3 + 6} kind="tick" color={INK} size={30} /></g> : null}
			</FrameSvg>
			<Lbl x={H12.x - 10} y={H12.y - 30} at={-30} color={INK} size={28}>number of photon pairs</Lbl>
			<Lbl x={H12.x + 180} y={H12.y + H12.h + 90} at={-30} color={INK} size={28}>two-photon (invariant) mass (GeV)</Lbl>
			<Lbl x={H12.x + 180} y={H12.y + H12.h + 126} at={-30} color={GREY.ink} size={26}>from both energies and the angle between them</Lbl>
			<Lbl x={1520} y={320} at={pr + 10} color={GOLD.ink} size={30}>predicted 1964</Lbl>
			<HandTag x={h12X(125) + 30} y={H12.y + 60} text="2012: Higgs (two detectors)" at={wh} size={32} color={GOLD.ink} marks={[{kind: 'circle', cx: h12X(125), cy: H12.y + H12.h - BUMP[12] * H12.h, rx: 40, ry: 40}]} />
			<div style={{position: 'absolute', left: 1260, top: 460}}><Row at={tr} size={34} style={{whiteSpace: 'normal', width: 560}}><AnswerBox at={tr + 4}>a real test: the prediction could have failed</AnswerBox></Row></div>
			<Lbl x={1300} y={810} at={e3 + 10} color={WZ.ink} size={28}>W, Z found 1983 at predicted masses</Lbl>
		</>
	);
};

// ---------- 13. what accelerators can't tell us ----------
const ES = {x: 200, y: 330, w: 1000, lo: -3, hi: 3};
const esX = (tev: number) => ES.x + ((Math.log10(tev) - ES.lo) / (ES.hi - ES.lo)) * ES.w;
export const S13: React.FC = () => {
	const id = 'limits';
	const f = useCurrentFrame();
	const up = cue(id, 'up to the energy the machines reach'), wt = cue(id, 'we see only what they turn into'), gs = cue(id, 'gravity sits outside the Standard Model'), nc = cap(id, cue(id, 'not the same as complete'), 24);
	const band = prog(f, up, 24);
	const dis = prog(f, wt + 10, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={ES.x} y={ES.y - 30} width={(esX(LHC_SUM) - ES.x) * band} height={60} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
				<line x1={ES.x} y1={ES.y + 30} x2={ES.x + ES.w} y2={ES.y + 30} stroke={INK} strokeWidth={4} />
				{[-3, -2, -1, 0, 1, 2, 3].map(e => <g key={e}><line x1={esX(10 ** e)} y1={ES.y + 22} x2={esX(10 ** e)} y2={ES.y + 40} stroke={INK} strokeWidth={3} /><text x={esX(10 ** e)} y={ES.y + 76} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>{p10(e)}</text></g>)}
				<line x1={esX(LHC_SUM)} y1={ES.y - 50} x2={esX(LHC_SUM)} y2={ES.y + 40} stroke={INK} strokeWidth={4} strokeDasharray="10 7" opacity={band} />
				<g opacity={1 - dis * 0.999}><circle cx={500} cy={640} r={60} fill={GOLD.soft} stroke={GOLD.stroke} strokeWidth={7} opacity={1 - dis} /><text x={500} y={656} textAnchor="middle" opacity={1 - dis} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: GOLD.ink}}>H</text></g>
				{dis > 0.001 ? <g opacity={dis}><Arrow x0={500} y0={640} x1={500 + 170 * dis} y1={640 - 90 * dis} color={AMBER.stroke} width={6} /><Arrow x0={500} y0={640} x1={500 - 170 * dis} y1={640 + 90 * dis} color={AMBER.stroke} width={6} /><Diamond x={500 + 170 * dis} y={640 - 90 * dis} s={18} tone={AMBER} label="" /><Diamond x={500 - 170 * dis} y={640 + 90 * dis} s={18} tone={AMBER} label="" /></g> : null}
				<g opacity={prog(f, gs, 14)}><rect x={1300} y={560} width={460} height={100} rx={14} fill="#ece8e1" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" /></g>
			</FrameSvg>
			<Lbl x={ES.x} y={ES.y + 116} at={-30} color={INK} size={28}>collision energy (TeV, log scale)</Lbl>
			<Lbl x={ES.x + 10} y={ES.y - 50} at={up} color={NAVY.ink} size={28}>reached so far</Lbl>
			<Lbl x={esX(LHC_SUM) + 14} y={ES.y - 50} at={up + 10} color={INK} size={28}>{`≈ ${fx(LHC_SUM, 1)} TeV`}</Lbl>
			<Lbl x={esX(300)} y={ES.y + 8} at={up + 16} color={INK} size={44} anchor="middle">?</Lbl>
			<Chip x={1300} y={200} at={up + 10} size={30} w={520} color={INK}>1. only up to the energy reached</Chip>
			<Chip x={1300} y={340} at={wt} size={30} w={520} color={INK}>2. inferred from decay products</Chip>
			<Chip x={1300} y={480} at={gs} size={30} w={520} color={INK}>3. gravity: outside the model</Chip>
			<Lbl x={720} y={720} at={wt + 20} color={AMBER.ink} size={28}>inferred from decay products</Lbl>
			<Lbl x={1320} y={600} at={gs} color={GREY.ink} size={28}>gravity: not in the</Lbl>
			<Lbl x={1320} y={638} at={gs} color={GREY.ink} size={28}>Standard Model</Lbl>
			<HandTag x={1320} y={710} text="outside the model" at={gs + 16} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 200, top: 820}}><Row at={nc} size={40}><AnswerBox at={nc + 4}>well tested in its range; not complete</AnswerBox></Row></div>
			<HandTag x={1000} y={260} at={nc + 12} size={30} color={SLATE.ink} marks={[{kind: 'underline', x1: ES.x, x2: esX(LHC_SUM), y: ES.y - 40}]} />
		</>
	);
};

// ---------- 14. a way to remember ----------
export const S14: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const ep = cue(id, 'Electric fields push'), ms = cue(id, 'Magnetic fields steer'), dr = cap(id, cue(id, 'Detectors read the debris'), 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<AccRing cx={340} cy={560} r={240} glow={pulseAt(f, ep, 40)} magnets={0.5 + 0.5 * pulseAt(f, ms, 40)} dots={[{turns: (f / 60) % 1, color: PROTON}]} />
				<DetectorSection cx={860} cy={560} layers={LAYERS([prog(f, dr, 8), prog(f, dr + 4, 8), prog(f, dr + 8, 8), prog(f, dr + 12, 8)].map(v => 0.35 + 0.65 * v), 0.75)} />
			</FrameSvg>
			<Lbl x={340} y={860} at={-30} color={INK} size={28} anchor="middle">push and steer</Lbl>
			<Lbl x={860} y={860} at={-30} color={INK} size={28} anchor="middle">read the debris</Lbl>
			<div style={{position: 'absolute', left: 1140, top: 260, width: 680}}><MemoryCard at={1} main={<>Electric fields push. Magnetic fields steer. Detectors read the debris.</>} /></div>
		</>
	);
};
