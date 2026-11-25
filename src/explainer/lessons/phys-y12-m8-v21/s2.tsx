// Scenes 7 to 13: four forces (strength on a log scale, range on a log axis, what each acts on), forces as exchanges (the
// painted boats drifting apart as a heavy bag passes; photon, gluon, W and Z), why some forces are short (the carrier-mass
// slider with a live reach readout, an extension estimate), the force that changes quarks (a d turning into a u, the W⁻
// splitting; the painted Sun's slow first step), the Higgs (gold lines to the cells it gives mass; the painted detector;
// most of a proton's mass), what's missing (three grey boxes outside the table) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {Diamond, GridTable, QBag, QDot} from '../../physics/atom/particles';
import type {CellState} from '../../physics/atom/particles';
import {LPlate, discPlace} from '../../physics/light/plates';
import {MemoryCard} from '../../shared/scenes';
import {HEAD, HEAD_SIZE, M_STEPS, M_W, M_Z, STRENGTH, W_P, Z_P, cap, cue, reachM} from './common';
import {Arrow, BOAT_R, BOAT_W, CARRIERS, CARRIER_DEFS, CMS, DOWN, GAMMA, GOLD, GREY, INK, LEP, Lbl, NU, QUARKS, SMBoard, SM_MID, SM_SMALL, SUN, T, UP, VIOLET, WZ, cellC, fx, sci} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const sup = (n: number) => String(n).replace('-', '⁻').replace(/[0-9]/g, c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]);
const pulseAt = (f: number, at: number, d = 36) => Math.sin(Math.PI * Math.min(1, Math.max(0, (f - at) / d)));

// ---------- 7. four forces ----------
const ROWS7 = [{n: 'strong', y: 270}, {n: 'electromagnetic', y: 430}, {n: 'weak', y: 590}, {n: 'gravity', y: 750}];
const ST = {x: 420, w: 300}, RG = {x: 790, w: 560, lo: -19, hi: 1};
const rgX = (m: number) => RG.x + ((Math.log10(m) - RG.lo) / (RG.hi - RG.lo)) * RG.w;
export const S07: React.FC = () => {
	const id = 'four-forces';
	const f = useCurrentFrame();
	const ss = cue(id, 'The strong force is the strongest'), aq = cue(id, 'acts on quarks'), wn = cue(id, 'about the width of a nucleus'), rf = cue(id, 'reaches forever'), aw = cue(id, 'acts on all quarks and leptons, even neutrinos'), gw = cue(id, 'Gravity is by far the weakest'), rf2 = cue(id, 'reaches forever', 2), co = cap(id, cue(id, 'charges cancel out'), 24);
	const sAt = [ss, ss + 10, ss + 20, gw], rAt = [wn, rf, aw, rf2];
	const reach = [1e-15, Infinity, 1e-18, Infinity];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{ROWS7.map((r, i) => {
					const sw = Math.max(6, (ST.w * (38 + STRENGTH[i])) / 38) * prog(f, sAt[i], 16);
					const end = Number.isFinite(reach[i]) ? rgX(reach[i]) : RG.x + RG.w + 40;
					const rw = (end - RG.x) * prog(f, rAt[i], 20);
					return (
						<g key={i}>
							<rect x={96} y={r.y - 50} width={1730} height={120} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
							<rect x={ST.x} y={r.y - 18} width={sw} height={36} fill={SLATE_SOFT} stroke={WZ.stroke} strokeWidth={3} />
							{rw > 1 ? <g><rect x={RG.x} y={r.y - 14} width={rw} height={28} fill={i === 0 ? VIOLET.soft : i === 1 ? GAMMA.soft : i === 2 ? WZ.soft : '#efe9de'} stroke={i === 0 ? VIOLET.stroke : i === 1 ? GAMMA.stroke : i === 2 ? WZ.stroke : GREY.stroke} strokeWidth={3} />
								{!Number.isFinite(reach[i]) ? <Arrow x0={RG.x + RG.w - 10} y0={r.y} x1={RG.x + RG.w + 70} y1={r.y} color={INK} width={5} opacity={prog(f, rAt[i] + 14, 10)} /> : null}</g> : null}
						</g>
					);
				})}
				<line x1={RG.x} y1={850} x2={RG.x + RG.w} y2={850} stroke={INK} strokeWidth={3} />
				{[-18, -15, -12, -9, -6, -3, 0].map(e => <g key={e}><line x1={rgX(10 ** e)} y1={842} x2={rgX(10 ** e)} y2={858} stroke={INK} strokeWidth={3} /><text x={rgX(10 ** e)} y={890} textAnchor="middle" style={T(26, INK, 700)}>{e === 0 ? '1' : `10${sup(e)}`}</text></g>)}
				<g opacity={prog(f, aq, 14)}><QBag x={1500} y={ROWS7[0].y + 6} r={46}><QDot x={1482} y={ROWS7[0].y + 18} r={16} label="u" tone={UP} size={20} /><QDot x={1518} y={ROWS7[0].y + 18} r={16} label="d" tone={DOWN} size={20} /><QDot x={1500} y={ROWS7[0].y - 12} r={16} label="u" tone={UP} size={20} /></QBag></g>
				<g opacity={prog(f, rf, 14)}><circle cx={1470} cy={ROWS7[1].y + 6} r={20} fill="#f7dcd8" stroke="#c8443a" strokeWidth={3} /><text x={1470} y={ROWS7[1].y + 16} textAnchor="middle" style={T(28, '#b8322a')}>+</text><circle cx={1530} cy={ROWS7[1].y + 6} r={20} fill={LEP.soft} stroke={LEP.stroke} strokeWidth={3} /><text x={1530} y={ROWS7[1].y + 16} textAnchor="middle" style={T(28, LEP.ink)}>−</text></g>
				<g opacity={prog(f, aw, 14)}><QDot x={1470} y={ROWS7[2].y + 6} r={20} label="q" tone={UP} size={24} /><circle cx={1530} cy={ROWS7[2].y + 6} r={14} fill={LEP.stroke} /><circle cx={1572} cy={ROWS7[2].y + 6} r={10} fill={NU.stroke} /></g>
				<g opacity={prog(f, rf2, 14)}><LPlate spec={SUN} p={discPlace(SUN, 1500, ROWS7[3].y + 6, 70)} /></g>
			</FrameSvg>
			{ROWS7.map((r, i) => <Lbl key={i} x={120} y={r.y + 10} at={-30} color={INK} size={34}>{r.n}</Lbl>)}
			<Lbl x={ST.x} y={205} at={-30} color={INK} size={28}>strength (log scale)</Lbl>
			<Lbl x={RG.x} y={205} at={-30} color={INK} size={28}>range (m, log scale)</Lbl>
			<Lbl x={1440} y={205} at={-30} color={INK} size={28}>acts on</Lbl>
			<Lbl x={rgX(1e-15) + 12} y={ROWS7[0].y - 22} at={wn + 10} color={VIOLET.ink} size={26}>≈ 10⁻¹⁵ m: leftover pull between nucleons</Lbl>
			<Lbl x={RG.x + RG.w - 30} y={ROWS7[1].y - 22} at={rf + 10} color={INK} size={26} anchor="end">unlimited</Lbl>
			<Lbl x={rgX(1e-18) + 12} y={ROWS7[2].y - 22} at={aw + 10} color={WZ.ink} size={26}>≈ 10⁻¹⁸ m</Lbl>
			<Lbl x={RG.x + RG.w - 30} y={ROWS7[3].y - 22} at={rf2 + 10} color={INK} size={26} anchor="end">unlimited</Lbl>
			<Lbl x={1560} y={ROWS7[0].y + 16} at={aq + 6} color={INK} size={26}>quarks (in hadrons)</Lbl>
			<Lbl x={1570} y={ROWS7[1].y + 16} at={rf + 6} color={INK} size={26}>charged particles</Lbl>
			<Lbl x={1600} y={ROWS7[2].y + 16} at={aw + 6} color={INK} size={26}>all quarks, leptons</Lbl>
			<Lbl x={1560} y={ROWS7[3].y + 16} at={rf2 + 6} color={INK} size={26}>anything with mass</Lbl>
			<HandTag x={420} y={ROWS7[0].y + 50} text="two settings: inside hadrons, between nucleons" at={wn + 30} size={30} color={VIOLET.ink} />
			<HandTag x={420} y={ROWS7[3].y + 50} text="weakest, but always attracts" at={co} size={30} color={GREY.ink} marks={[{kind: 'circle', cx: ST.x + 10, cy: ROWS7[3].y, rx: 44, ry: 34}]} />
			<Lbl x={96} y={940} at={co + 10} color={GREY.ink} size={26}>strength order: strong &gt; EM &gt; weak &gt; gravity (guide values only)</Lbl>
		</>
	);
};
const SLATE_SOFT = '#dfe3e7';

// ---------- 8. forces as exchanges ----------
export const S08: React.FC = () => {
	const id = 'carriers';
	const f = useCurrentFrame();
	const ec = cue(id, 'exchange a carrier'), hb = cue(id, 'passing a heavy bag'), da = cue(id, 'so they drift apart'), ep = cue(id, 'two electrons repel by exchanging photons'), gq = cue(id, 'carried by gluons, between quarks'), wz = cap(id, cue(id, 'the W and Z bosons'), 24);
	const bag = prog(f, hb, 40), drift = prog(f, hb + 30, 60);
	const lx = lerp(380, 260, drift), rx = lerp(720, 840, drift);
	const bx = lerp(lx + 60, rx - 60, bag), by = 420 - Math.sin(Math.PI * bag) * 120;
	const ph = prog(f, ep, 50), sepE = lerp(0, 90, prog(f, ep + 30, 40));
	const shown = (cid: string) => (cid === 'gamma' ? prog(f, ep + 40, 14) : cid === 'g' ? prog(f, gq + 20, 14) : prog(f, wz, 14));
	const cells = CARRIER_DEFS.map((d, i) => ({id: d.id, sym: d.sym, name: d.name, note: d.note, x: 120 + i * 230, y: 720, tone: d.tone}));
	const n = 12 + CARRIERS.filter(c => shown(c) > 0.5).length;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={220} width={920} height={420} rx={20} fill="#dcecf6" stroke="#7fb2d4" strokeWidth={3} />
				<LPlate spec={BOAT_W} p={{x: lx - 48, y: 300, w: 96}} />
				<LPlate spec={BOAT_R} p={{x: rx - 48, y: 300, w: 96}} />
				{bag > 0.001 && bag < 0.999 ? <path d={`M${lx + 60},420 Q${(lx + rx) / 2},280 ${rx - 60},420`} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 8" /> : null}
				{f >= hb ? <circle cx={bx} cy={by} r={22} fill="#4a4035" stroke={INK} strokeWidth={3} /> : null}
				{f >= da ? <g opacity={prog(f, da, 12)}><Arrow x0={lx - 60} y0={570} x1={lx - 160} y1={570} color={GREY.stroke} width={6} /><Arrow x0={rx + 60} y0={570} x1={rx + 160} y1={570} color={GREY.stroke} width={6} /></g> : null}
				{ph > 0.001 ? <g opacity={prog(f, ep, 12)}>
					<circle cx={1250 - sepE} cy={300} r={20} fill={LEP.stroke} /><circle cx={1650 + sepE} cy={300} r={20} fill={LEP.stroke} />
					<Diamond x={lerp(1280, 1620, ph)} y={300} s={24} tone={GAMMA} label="γ" />
				</g> : null}
				{f >= gq ? <g opacity={prog(f, gq, 12)}><QDot x={1300} y={470} r={28} label="u" tone={UP} /><QDot x={1600} y={470} r={28} label="d" tone={DOWN} /><Diamond x={lerp(1340, 1560, (Math.sin((f - gq) / 9) + 1) / 2)} y={470} s={24} tone={VIOLET} label="g" /></g> : null}
				{f >= wz ? <g opacity={prog(f, wz, 12)}><Diamond x={1300} y={620} s={30} tone={WZ} label="W⁺" size={22} /><Diamond x={1450} y={620} s={30} tone={WZ} label="W⁻" size={22} /><Diamond x={1600} y={620} s={30} tone={WZ} label="Z⁰" size={22} /></g> : null}
				<GridTable cells={cells} w={210} h={100} state={cid => ({o: shown(cid), tint: 1})} symSize={40} />
			</FrameSvg>
			<Lbl x={120} y={260} at={-30} color="#2f6c94" size={26}>top view (boats, no people)</Lbl>
			<HandTag x={bx + 30} y={by - 40} text="heavy bag" at={hb + 6} out={da + 30} size={30} color={INK} />
			<Chip x={300} y={650} at={da + 10} size={28} color={GREY.ink}>analogy: shows repulsion only</Chip>
			<Lbl x={1100} y={240} at={ec} color={INK} size={30}>force = exchange of a carrier</Lbl>
			<Lbl x={1380} y={360} at={ep + 10} color={GAMMA.ink} size={28}>electrons: photon (EM)</Lbl>
			<Lbl x={1380} y={530} at={gq + 10} color={VIOLET.ink} size={28}>quarks: gluon (strong)</Lbl>
			<Lbl x={1680} y={630} at={wz + 6} color={WZ.ink} size={28}>weak</Lbl>
			<Lbl x={1100} y={870} at={wz + 10} color={GREY.ink} size={26}>{"exchanged carriers: 'virtual particles'"}</Lbl>
			<Readout x={1100} y={700} label="kinds so far" value={`${n}`} color={INK} w={220} />
		</>
	);
};

// ---------- 9. why some forces are short ----------
const AX9 = {x: 220, w: 1300, y: 470, lo: -19, hi: -15};
const ax9 = (m: number) => AX9.x + ((Math.log10(m) - AX9.lo) / (AX9.hi - AX9.lo)) * AX9.w;
const SL9 = {x0: 220, x1: 1100, y: 760, max: 100};
export const S09: React.FC = () => {
	const id = 'range';
	const f = useCurrentFrame();
	const hm = cue(id, "about eighty-five to a hundred times a proton's mass"), sd = cue(id, 'the shorter the distance the force can reach'), pn = cue(id, 'The photon has no mass'), gl = cue(id, 'Gluons have no mass either'), to = cap(id, cue(id, 'short-ranged too'), 20);
	const step = f < hm ? -1 : f < hm + 45 ? 0 : f < hm + 90 ? 1 : 2;
	const photon = f >= pn;
	const m: number = photon ? 0 : (M_STEPS as readonly number[])[Math.max(0, step)];
	const R = reachM(m);
	const travel = prog(f, step < 0 ? hm : hm + Math.max(0, step) * 45, 30);
	const endX = photon ? AX9.x + AX9.w + 180 : ax9(R);
	const dx = photon ? lerp(AX9.x, endX, prog(f, pn, 50)) : lerp(AX9.x, endX, travel);
	const knob = photon ? SL9.x0 : lerp(SL9.x0, SL9.x1, m / SL9.max);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={AX9.x} y1={AX9.y} x2={AX9.x + AX9.w} y2={AX9.y} stroke={INK} strokeWidth={4} />
				{[-19, -18, -17, -16, -15].map(e => <g key={e}><line x1={ax9(10 ** e)} y1={AX9.y - 12} x2={ax9(10 ** e)} y2={AX9.y + 12} stroke={INK} strokeWidth={3} /><text x={ax9(10 ** e)} y={AX9.y + 50} textAnchor="middle" style={T(28, INK, 700)}>{`10${sup(e)}`}</text></g>)}
				<circle cx={AX9.x} cy={AX9.y - 60} r={16} fill={INK} />
				{!photon && f >= hm ? <line x1={AX9.x} y1={AX9.y - 60} x2={dx} y2={AX9.y - 60} stroke={WZ.stroke} strokeWidth={5} strokeDasharray="10 8" /> : null}
				<Diamond x={dx} y={AX9.y - 60} s={26} tone={photon ? GAMMA : WZ} label={photon ? 'γ' : ''} opacity={f >= hm ? 1 : 0} />
				{photon ? <Arrow x0={dx + 34} y0={AX9.y - 60} x1={dx + 110} y1={AX9.y - 60} color={GAMMA.stroke} width={5} opacity={prog(f, pn + 50, 10)} /> : null}
				<line x1={SL9.x0} y1={SL9.y} x2={SL9.x1} y2={SL9.y} stroke="rgba(60,45,20,0.35)" strokeWidth={10} strokeLinecap="round" />
				{[0, 50, 100].map(v => <line key={v} x1={lerp(SL9.x0, SL9.x1, v / SL9.max)} y1={SL9.y - 14} x2={lerp(SL9.x0, SL9.x1, v / SL9.max)} y2={SL9.y + 14} stroke={INK} strokeWidth={3} />)}
				<circle cx={knob} cy={SL9.y} r={18} fill={photon ? GAMMA.stroke : WZ.stroke} stroke="#fffdf8" strokeWidth={4} />
				{f >= gl ? <g opacity={prog(f, gl, 14)}><QBag x={1560} y={230} r={80}><QDot x={1520} y={250} r={22} label="u" tone={UP} size={26} /><QDot x={1600} y={250} r={22} label="d" tone={DOWN} size={26} /><QDot x={1560} y={190} r={22} label="u" tone={UP} size={26} /><Diamond x={1560 + 30 * Math.sin(f / 7)} y={235} s={16} tone={VIOLET} label="" /></QBag></g> : null}
			</FrameSvg>
			<Lbl x={AX9.x} y={AX9.y + 100} at={-30} color={INK} size={28}>distance the force reaches (m, log scale)</Lbl>
			{[0, 50, 100].map(v => <Lbl key={v} x={lerp(SL9.x0, SL9.x1, v / SL9.max)} y={SL9.y + 52} at={-30} color={INK} size={26} anchor="middle">{`${v} GeV/c²`}</Lbl>)}
			<Lbl x={SL9.x0} y={SL9.y - 44} at={-30} color={INK} size={28}>carrier mass slider</Lbl>
			<Readout x={1200} y={620} label="carrier mass" value={photon ? 'γ: 0' : step < 0 ? '?' : `${step === 1 ? 'W ' : step === 2 ? 'Z ' : ''}${fx(m, 1)} GeV/c²`} color={WZ.ink} w={340} />
			<Readout x={1560} y={620} label="reach" value={photon ? 'unlimited' : step < 0 ? '?' : `${sci(R, 1)} m`} color={WZ.ink} w={300} />
			<Lbl x={1200} y={790} at={hm} color={GREY.ink} size={26}>extension estimate, R ≈ ħc/(mc²)</Lbl>
			<Lbl x={220} y={250} at={hm + 10} color={WZ.ink} size={30}>{`W, Z: ${fx(W_P, 0)} and ${fx(Z_P, 0)} proton masses`}</Lbl>
			<Lbl x={220} y={300} at={hm + 100} out={pn} color={WZ.ink} size={30}>{`≈ 10⁻¹⁸ m (W ${fx(M_W, 1)}, Z ${fx(M_Z, 1)} GeV/c²)`}</Lbl>
			<HandTag x={600} y={360} text="heavier carrier → shorter reach" at={sd} size={34} color={WZ.ink} marks={[{kind: 'underline', x1: AX9.x, x2: ax9(2e-17), y: AX9.y - 24}]} />
			<Lbl x={1250} y={360} at={pn + 10} color={GAMMA.ink} size={30}>photon: no mass → unlimited</Lbl>
			<HandTag x={1400} y={400} text="massless but confined" at={to + 10} size={30} color={VIOLET.ink} />
		</>
	);
};

// ---------- 10. the force that changes quarks ----------
const NB10 = {x: 460, y: 500, r: 180};
export const S10: React.FC = () => {
	const id = 'weak-flavour';
	const f = useCurrentFrame();
	const du = cue(id, 'a down quark inside a neutron turns into an up quark'), gw = cue(id, 'giving out a W minus'), ea = cue(id, 'an electron and an antineutrino'), sb = cue(id, "That's why the Sun burns slowly"), pn = cap(id, cue(id, 'to turn a proton into a neutron'), 20);
	const flip = prog(f, du + 20, 20), wout = prog(f, gw, 30), split = prog(f, ea, 30);
	const wx = lerp(NB10.x + 90, 900, wout), wy = lerp(NB10.y - 20, 380, wout);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<QBag x={NB10.x} y={NB10.y} r={NB10.r} fill={flip > 0.5 ? 'rgba(200,68,58,0.12)' : 'rgba(154,149,140,0.15)'}>
					<QDot x={NB10.x - 70} y={NB10.y + 50} r={46} label="u" tone={UP} />
					<QDot x={NB10.x + 70} y={NB10.y + 50} r={46} label={flip > 0.5 ? 'u' : 'd'} tone={flip > 0.5 ? UP : DOWN} ring={pulseAt(f, du + 10, 40)} />
					<QDot x={NB10.x} y={NB10.y - 70} r={46} label="d" tone={DOWN} />
				</QBag>
				{f >= gw && split < 0.999 ? <Diamond x={wx} y={wy} s={34} tone={WZ} label="W⁻" size={26} opacity={1 - split} /> : null}
				{f >= ea ? <g opacity={split}><circle cx={lerp(900, 1080, split)} cy={lerp(380, 290, split)} r={24} fill={LEP.stroke} stroke="#fffdf8" strokeWidth={3} /><circle cx={lerp(900, 1080, split)} cy={lerp(380, 470, split)} r={15} fill={NU.stroke} stroke="#fffdf8" strokeWidth={3} /></g> : null}
				{f >= sb ? <LPlate spec={SUN} p={discPlace(SUN, 1560, 360, 240)} opacity={prog(f, sb, 14)} /> : null}
			</FrameSvg>
			<Lbl x={NB10.x} y={NB10.y + NB10.r + 50} at={-30} color={INK} size={30} anchor="middle">{flip > 0.5 ? 'p (u u d)' : 'n (u d d)'}</Lbl>
			<Lbl x={1120} y={300} at={ea + 20} color={LEP.ink} size={32}>e⁻</Lbl>
			<Lbl x={1120} y={480} at={ea + 20} color={GREY.ink} size={32}>ν̄</Lbl>
			<div style={{position: 'absolute', left: 96, top: 790}}><Row at={ea + 30} size={48}><AnswerBox at={ea + 34}>d → u + W⁻ → u + e⁻ + ν̄</AnswerBox></Row></div>
			<HandTag x={700} y={240} at={du + 20} size={30} color={WZ.ink} marks={[{kind: 'circle', cx: NB10.x + 70, cy: NB10.y + 50, rx: 70, ry: 66}]} />
			<Lbl x={1360} y={560} at={sb + 10} color={INK} size={30}>the Sun&apos;s first step (earlier video):</Lbl>
			<Lbl x={1360} y={610} at={sb + 16} color={INK} size={34}>p + p → ²H + e⁺ + ν</Lbl>
			<Chip x={1150} y={680} at={pn} size={30} color={INK}>only the weak force changes quark flavour</Chip>
			<HandTag x={1150} y={800} text="flavour change = weak" at={pn + 16} size={34} color={WZ.ink} />
		</>
	);
};

// ---------- 11. the Higgs ----------
const G11 = SM_MID;
const MASS_LINKS = ['W', 'Z', ...QUARKS, 'e', 'mu', 'tau'];
const allOn = (): CellState => ({o: 1, tint: 1});
const PB = {x: 250, y: 790, w: 1000, h: 50};
export const S11: React.FC = () => {
	const id = 'higgs';
	const f = useCurrentFrame();
	const hd = cue(id, 'The Higgs boson was discovered'), fg = cue(id, 'that field gives the W and Z'), np = cue(id, "It doesn't give mass to the photon"), pm = cue(id, "Most of a proton's mass"), mi = cap(id, cue(id, 'moving inside it'), 24);
	const ln = prog(f, fg, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SMBoard g={G11} state={allOn} higgs={prog(f, hd, 16)} higgsLit={pulseAt(f, hd + 10, 40)} />
				{ln > 0.001 ? <g opacity={0.85}>{MASS_LINKS.map((cid, i) => { const [x, y] = cellC(G11, cid); return <line key={cid} x1={G11.hx} y1={G11.hy} x2={lerp(G11.hx, x, Math.min(1, ln * 1.3 - i * 0.02))} y2={lerp(G11.hy, y, Math.min(1, ln * 1.3 - i * 0.02))} stroke={GOLD.stroke} strokeWidth={3} />; })}</g> : null}
				<LPlate spec={CMS} p={{x: 1420, y: 440, w: 420}} />
				{f >= pm ? <g opacity={prog(f, pm, 14)}><rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} fill="#f3d9c9" stroke={INK} strokeWidth={3} /><rect x={PB.x} y={PB.y} width={PB.w * 0.01 + 6} height={PB.h} fill={GOLD.stroke} /></g> : null}
			</FrameSvg>
			<Lbl x={1420} y={706} at={-30} color={GREY.ink} size={26}>where the Higgs was found:</Lbl>
			<Lbl x={1420} y={740} at={-30} color={GREY.ink} size={26}>CERN, 2012 (illustration)</Lbl>
			<Lbl x={G11.hx + G11.hr + 16} y={G11.hy - 30} at={hd + 10} color={GOLD.ink} size={28}>125 GeV/c²</Lbl>
			<Lbl x={G11.hx + G11.hr + 16} y={G11.hy + 6} at={hd + 14} color={GOLD.ink} size={28}>(2012)</Lbl>
			<Lbl x={250} y={736} at={fg + 30} color={GREY.ink} size={26}>ν mass: origin unknown</Lbl>
			<Lbl x={G11.cx} y={G11.y + 2 * (G11.ch + G11.gap) + 40} at={np} color={GREY.ink} size={28}>γ and g: massless, no gold line</Lbl>
			<Lbl x={PB.x} y={PB.y - 20} at={pm} color={INK} size={28}>proton 938 MeV/c²: quark masses (Higgs) about 1%; the rest is energy of quarks and gluons inside</Lbl>
			<div style={{position: 'absolute', left: 250, top: 870}}><Row at={mi} size={30}><AnswerBox at={mi + 4}>Higgs: gives mass to W, Z, quarks, charged leptons; not most of a proton&apos;s mass</AnswerBox></Row></div>
			<HandTag x={PB.x + 40} y={PB.y + 26} text="only about 1%" at={mi + 10} size={30} color={GOLD.ink} marks={[{kind: 'circle', cx: PB.x + 8, cy: PB.y + PB.h / 2, rx: 30, ry: 40}]} />
		</>
	);
};

// ---------- 12. what's missing ----------
export const S12: React.FC = () => {
	const id = 'incomplete';
	const f = useCurrentFrame();
	const gv = cue(id, "Gravity isn't in it at all"), dm = cue(id, 'Dark matter'), nm = cue(id, 'neutrinos turned out to have mass'), ic = cap(id, cue(id, 'still incomplete'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={96} y={196} at={ic} color={INK} size={30}>How is it known that human understanding of matter is still incomplete? ✓</Lbl>
			<FrameSvg>
				<SMBoard g={G11} state={cid => ({o: 1, tint: 1, tag: 0, lit: ['ve', 'vm', 'vt'].includes(cid) ? pulseAt(f, nm, 40) : 0})} higgs={1} />
				<g opacity={prog(f, gv, 14)}><rect x={1340} y={500} width={480} height={100} rx={14} fill="#ece8e1" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" /></g>
				<g opacity={prog(f, dm, 14)}><rect x={1340} y={630} width={480} height={100} rx={14} fill="#ece8e1" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" /></g>
				<g opacity={prog(f, nm, 14)}><rect x={1340} y={760} width={480} height={100} rx={14} fill="#ece8e1" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" /></g>
			</FrameSvg>
			<Lbl x={1360} y={540} at={gv} color={GREY.ink} size={28}>gravity (graviton?): not in</Lbl>
			<Lbl x={1360} y={578} at={gv} color={GREY.ink} size={28}>the Standard Model</Lbl>
			<Lbl x={1360} y={690} at={dm} color={GREY.ink} size={28}>dark matter: no particle</Lbl>
			<Lbl x={1360} y={728} at={dm} color={GREY.ink} size={28}>in the table</Lbl>
			<Lbl x={1360} y={820} at={nm} color={GREY.ink} size={28}>neutrinos: mass ≠ 0 (left out</Lbl>
			<Lbl x={1360} y={858} at={nm} color={GREY.ink} size={28}>of the original model)</Lbl>
			<Lbl x={250} y={730} at={nm + 6} color={NU.ink} size={28}>mass ≠ 0</Lbl>
			<HandTag x={1100} y={920} text="three gaps" at={ic + 10} size={34} color={GREY.ink} marks={[{kind: 'brace', x: 1830, y1: 500, y2: 860, facing: 'right'}]} />
		</>
	);
};

// ---------- 13. a way to remember ----------
export const S13: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const sq = cue(id, 'Six quarks'), sl = cue(id, 'six leptons'), fc = cue(id, 'four carriers'), oh = cap(id, cue(id, 'one Higgs'), 10);
	const state = (cid: string): CellState => ({o: 1, tint: 1, lit: QUARKS.includes(cid) ? pulseAt(f, sq) : ['e', 'mu', 'tau', 've', 'vm', 'vt'].includes(cid) ? pulseAt(f, sl) : CARRIERS.includes(cid) ? pulseAt(f, fc) : 0});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SMBoard g={SM_SMALL} state={state} higgs={1} higgsLit={pulseAt(f, oh)} symSize={34} rowLabels={false} /></FrameSvg>
			<div style={{position: 'absolute', left: 1200, top: 250, width: 640}}><MemoryCard at={sq} main={<>Six quarks, six leptons, four carriers, one Higgs.</>} /></div>
		</>
	);
};

