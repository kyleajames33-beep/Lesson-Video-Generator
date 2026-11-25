// Scenes 1 to 6: the hook (last time's nucleus inset; the painted sealed source and Geiger counter clicking at random
// from the chance engine; one emission detected, two missed), why some nuclei change (the schematic N against Z chart
// with four problem markers), alpha decay (U-238 losing an alpha group; equation, A and Z tallies), beta-minus decay
// (a neutron turning into a proton; the electron created and thrown out), the missing particle (the beta energy
// spectrum against one expected value; Pauli 1930; detected 1956) and beta-plus decay (F-18 in PET scans).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Chip, CrossedChip} from '../../physics/projectile/board';
import {Tally} from '../../physics/atom/nuclear';
import {MarkedHeading} from '../../physics/atom/headline';
import {ClickTrace, CountDisplay, GEIGER, NZChart, NucleonCluster, SEALED, clickRun, clicksTo, clusterLayout, discAt, nzX, nzY} from '../../physics/atom/decay';
import type {NZBoxG} from '../../physics/atom/decay';
import {lazy} from '../../sims';
import {HandoffBoard13, IN13, M8V13FinalFrame} from '../phys-y12-m8-v13/s3';
import {dur as dur13} from '../phys-y12-m8-v13/common';
import {C14, F18, HE4, HEAD, HEAD_SIZE, N14, O18, TH234, U238, cap, cue, dur} from './common';
import {AMBER, AlphaGroup, E_MINUS, E_PLUS, EqBox, Electron, GREY, GraphPaper, INK, LPlate, Lbl, MARKS, MiniChart, NAVY, NEUTRON, NUC_RED, Nu, Positron, ROSE, RED, T, dispRect, placeAt, srcWin, stepTo, term, tubeWin} from './parts';
import {DECAY_AT} from '../../physics/atom/decay';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook ----------
export const SRC1 = placeAt(SEALED, DECAY_AT.window, 650, 640, 560);
export const GEI1 = placeAt(GEIGER, DECAY_AT.tube, 840, 640, 1000);
const CLICKS1 = lazy(() => clickRun(21, dur('hook'), 0.085));
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sn = cue(id, "some nuclei don't stay the same"), ss = cue(id, 'a school radioactive source'), cr = cue(id, 'clicks at random moments'), de = cue(id, 'one detected emission'), dc = cap(id, cue(id, 'gamma decay'), 4);
	if (f < 1) return <M8V13FinalFrame />;
	const old = 1 - prog(f, ss, 12), neu = prog(f, ss, 12);
	const sw = srcWin(SRC1), tw = tubeWin(GEI1), disp = dispRect(GEI1);
	const hit = de + 22;
	const ticks = [...clicksTo(CLICKS1(), f).filter(k => k >= cr && Math.abs(k - hit) > 4), ...(f >= hit ? [hit] : [])].sort((a, b) => a - b);
	const count = ticks.length;
	const fresh = ticks.length ? Math.max(0, 1 - (f - ticks[ticks.length - 1]) / 10) : 0;
	const em = (k: number, dy: number) => { const u = prog(f, de + k, 22, t => t); return f < de + k || u >= 1 ? null : <circle cx={lerp(sw[0], tw[0] - 10, u)} cy={sw[1] + dy * u} r={9} fill={AMBER.stroke} stroke={INK} strokeWidth={1.5} />; };
	return (
		<>
			{old > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: old}}><HandoffBoard13 f={dur13('handoff') - 1} final heading={false} chip={false} /></div> : null}
			{old > 0.001 ? <FrameSvg><circle cx={IN13.cx} cy={IN13.cy} r={IN13.R + 12 + 20 * pulseOf(f, sn, 30)} fill="none" stroke={NUC_RED} strokeWidth={5} opacity={pulseOf(f, sn, 30) * old} /></FrameSvg> : null}
			<MarkedHeading text={HEAD} marks={['alpha, beta and gamma']} at={dc} size={HEAD_SIZE} />
			<Chip x={96} y={870} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: what changes in a nucleus during alpha, beta and gamma decay?</Chip>
			{neu > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: neu}}>
				<FrameSvg>
					<LPlate spec={SEALED} p={SRC1} />
					<LPlate spec={GEIGER} p={GEI1} />
					<CountDisplay r={disp} text={String(count)} />
					<ClickTrace ticks={ticks} f={f} f0={cr} f1={dur(id)} x0={200} x1={1800} y={360} h={60} color={GREY.ink} opacity={prog(f, cr, 12)} />
					{fresh > 0.001 ? [1, 2].map(k => <path key={k} d={`M${tw[0] + 40 + 26 * k},${tw[1] - 70 - 10 * k} q 14,-16 28,0`} fill="none" stroke={GREY.stroke} strokeWidth={3} opacity={fresh} />) : null}
					{f >= de - 10 ? <g opacity={prog(f, de - 10, 12)}>
						<line x1={sw[0]} y1={sw[1]} x2={540} y2={500} stroke={GREY.stroke} strokeWidth={2} strokeDasharray="6 5" />
						<circle cx={500} cy={470} r={56} fill="#fffdf8" stroke={INK} strokeWidth={3} />
						<NucleonCluster cx={500} cy={470} r={9} discs={clusterLayout(6, 7, 3)} pFill={NUC_RED} nFill={NEUTRON} letters={false} tremble={1} f={f} />
					</g> : null}
					{em(0, 0)}{em(5, -150)}{em(10, 160)}
				</FrameSvg>
				<Lbl x={SRC1.x + 40} y={SRC1.y + 300} at={ss} color={INK} size={28}>sealed source</Lbl>
				<Lbl x={GEI1.x + 40} y={GEI1.y + 330} at={ss} color={INK} size={28}>Geiger counter</Lbl>
				<Lbl x={200} y={300} at={cr} color={GREY.ink} size={28}>clicks:</Lbl>
				<HandTag x={1100} y={250} text="counts = detections, not every decay" at={de + 30} size={34} color={GREY.ink} marks={[{kind: 'circle', cx: (disp[0] + disp[2]) / 2, cy: (disp[1] + disp[3]) / 2, rx: (disp[2] - disp[0]) / 2 + 30, ry: 70}]} />
			</div> : null}
		</>
	);
};

// ---------- 2. why some nuclei change ----------
const BIG: NZBoxG = {x: 200, y: 230, w: 980, h: 600, zMax: 100, nMax: 160};
const PROB = [
	{k: 'big', m: MARKS.big, t: 'too big (Z > 82)', slot: 'α?', dx: -330, dy: 0, c: AMBER},
	{k: 'n', m: MARKS.nRich, t: 'too many n', slot: 'β⁻?', dx: -250, dy: -36, c: NAVY},
	{k: 'p', m: MARKS.pRich, t: 'too many p', slot: 'β⁺?', dx: 20, dy: 60, c: ROSE},
	{k: 'e', m: MARKS.excited, t: 'excited', slot: 'γ?', dx: 34, dy: 34, c: AMBER},
] as const;
export const S02: React.FC = () => {
	const id = 'why-unstable';
	const f = useCurrentFrame();
	const ar = cue(id, 'could be arranged with less energy'), tb = cue(id, 'too big'), tn = cue(id, 'too many neutrons'), tp = cue(id, 'too many protons'), te = cue(id, 'too much energy'), nt = cue(id, 'with no trigger'), pr = cap(id, cue(id, 'a different problem'), 30);
	const ats = [tb, tn, tp, te];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NZChart b={BIG} color="#cfc8ba" ink={GREY.ink} size={30} />
				{PROB.map((p, i) => { const o = prog(f, ats[i], 12); if (o <= 0.001) return null; const x = nzX(BIG, p.m.Z), y = nzY(BIG, p.m.N); return <g key={p.k} opacity={o}>
					<circle cx={x} cy={y} r={14} fill={p.c.stroke} stroke="#ffffff" strokeWidth={3} />
					{p.k === 'e' ? <g><line x1={x} y1={y - 18} x2={x} y2={y - 70} stroke={AMBER.stroke} strokeWidth={5} /><path d={`M${x},${y - 82} l-10,16 l20,0 Z`} fill={AMBER.stroke} /></g> : null}
				</g>; })}
			</FrameSvg>
			{PROB.map((p, i) => <Lbl key={p.k} x={nzX(BIG, p.m.Z) + p.dx} y={nzY(BIG, p.m.N) + p.dy} at={ats[i]} color={p.c.ink} size={30}>{p.t}</Lbl>)}
			{PROB.map((p, i) => <Lbl key={`s${p.k}`} x={nzX(BIG, p.m.Z) + p.dx} y={nzY(BIG, p.m.N) + p.dy + 40} at={pr + i * 6} color={p.c.ink} size={30}>{`[ ${p.slot} ]`}</Lbl>)}
			<Lbl x={BIG.x + BIG.w - 10} y={BIG.y + BIG.h - 24} at={-30} color={GREY.ink} size={26} anchor="end">band of stable nuclei (schematic)</Lbl>
			<Chip x={1260} y={250} at={ar} size={30} w={560} color={INK}>unstable: its protons and neutrons could be arranged with less energy</Chip>
			<Chip x={1260} y={520} at={nt} size={32} color={INK}>spontaneous: on its own</Chip>
			<HandTag x={1260} y={660} text="no trigger" at={nt + 16} size={40} color={GREY.ink} marks={[{kind: 'circle', cx: nzX(BIG, 50), cy: nzY(BIG, 66), rx: 330, ry: 120}]} />
		</>
	);
};

// ---------- 3. alpha decay ----------
const U_DISCS = clusterLayout(16, 21, 7);
const NUC3 = {cx: 330, cy: 620, r: 22};
/** The four discs on the right edge that leave as the alpha particle (two protons, two neutrons). */
const edgeFour = (discs: typeof U_DISCS) => {
	const byX = discs.map((d, i) => ({d, i})).sort((a, b) => b.d.x - a.d.x);
	const p = byX.filter(e => e.d.kind === 'p').slice(0, 2).map(e => e.i), n = byX.filter(e => e.d.kind === 'n').slice(0, 2).map(e => e.i);
	return [...p, ...n];
};
const A_OUT = edgeFour(U_DISCS);
const Repel: React.FC<{cx: number; cy: number; o: number}> = ({cx, cy, o}) => (o <= 0.001 ? null : (
	<g opacity={o} stroke={ROSE.stroke} strokeWidth={4} fill={ROSE.stroke}>
		{[[-1, -0.4], [1, 0.5], [-0.3, 1], [0.4, -1]].map(([dx, dy], i) => { const x1 = cx + dx * 60, y1 = cy + dy * 60, x2 = cx + dx * 150, y2 = cy + dy * 150; return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} /><circle cx={x2} cy={y2} r={6} /></g>; })}
	</g>
));
export const S03: React.FC = () => {
	const id = 'alpha';
	const f = useCurrentFrame();
	const ap = cue(id, 'an alpha particle'), ub = cue(id, 'Uranium two three eight becomes thorium two three four'), ta = cue(id, 'two three eight equals two three four plus four'), nz = cue(id, 'ninety two equals ninety plus two'), mr = cue(id, 'many protons repel each other'), tw = cap(id, cue(id, 'atomic number by two'), 20);
	const out = prog(f, ap, 50);
	const ax = lerp(NUC3.cx + 150, 820, out), ay = lerp(NUC3.cy, 760, out);
	const step = prog(f, tw, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NucleonCluster cx={NUC3.cx} cy={NUC3.cy} r={NUC3.r} discs={U_DISCS} pFill={NUC_RED} nFill={NEUTRON} hide={f >= ap ? A_OUT : []} tremble={0.6} f={f} />
				<Repel cx={NUC3.cx} cy={NUC3.cy} o={prog(f, mr, 14)} />
				{f >= ap ? <AlphaGroup x={ax} y={ay} r={14} /> : null}
				<MiniChart marker={[{...stepTo(MARKS.big, -2, -2, step), color: AMBER.stroke}]} arrow={{from: MARKS.big, to: stepTo(MARKS.big, -2, -2, 1), color: AMBER.stroke, o: step}} />
			</FrameSvg>
			<Lbl x={NUC3.cx} y={NUC3.cy - 190} at={-30} color={INK} size={30} anchor="middle">uranium-238 (not every nucleon drawn)</Lbl>
			<Lbl x={ax + 50} y={ay + 10} at={ap + 20} color={AMBER.ink} size={32}>α = ⁴₂He</Lbl>
			<Lbl x={ax - 40} y={ay + 70} at={ap + 30} color={AMBER.ink} size={26}>2 protons + 2 neutrons</Lbl>
			<div style={{position: 'absolute', left: 620, top: 200, opacity: prog(f, ub, 14)}}><EqBox terms={[term(U238), '→', term(TH234), '+', term(HE4, AMBER.ink)]} framed={f >= nz + 20} /></div>
			<div style={{position: 'absolute', left: 640, top: 330, opacity: prog(f, ta, 12)}}><Tally label="A" sum="238 = 234 + 4" tickAt={ta + 30} size={40} /></div>
			<div style={{position: 'absolute', left: 640, top: 400, opacity: prog(f, nz, 12)}}><Tally label="Z" sum="92 = 90 + 2" tickAt={nz + 30} size={40} color={RED.ink} /></div>
			<HandTag x={1060} y={360} text="top numbers balance" at={ta + 36} size={32} color={INK} />
			<HandTag x={1060} y={430} text="bottom numbers balance" at={nz + 36} size={32} color={RED.ink} />
			<Lbl x={MINI_LBL.x} y={MINI_LBL.y} at={tw} color={AMBER.ink} size={28}>α: A − 4, Z − 2</Lbl>
			<Lbl x={1470} y={560} at={tw + 10} color={GREY.ink} size={26}>schematic, steps enlarged</Lbl>
			<Lbl x={NUC3.cx} y={NUC3.cy + 210} at={mr} color={ROSE.ink} size={28} anchor="middle">many protons repel</Lbl>
		</>
	);
};
const MINI_LBL = {x: 1470, y: 520};

// ---------- 4. beta-minus decay ----------
const C_DISCS = clusterLayout(6, 8, 4);
const NUC4 = {cx: 340, cy: 600, r: 30};
const FLIP4 = C_DISCS.map((d, i) => ({d, i})).filter(e => e.d.kind === 'n').sort((a, b) => b.d.x - a.d.x)[0].i;
export const S04: React.FC = () => {
	const id = 'beta-minus';
	const f = useCurrentFrame();
	const nt = cue(id, 'A neutron turns into a proton'), ec = cue(id, 'an electron is created and thrown out'), ws = cue(id, "It wasn't sitting in the nucleus"), cb = cue(id, 'Carbon fourteen becomes nitrogen fourteen'), ms = cue(id, 'The mass number stays the same'), gu = cap(id, cue(id, 'goes up by one'), 30);
	const [fx0, fy0] = discAt(NUC4.cx, NUC4.cy, NUC4.r, C_DISCS[FLIP4]);
	const fly = prog(f, ec, 40);
	const step = prog(f, gu, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NucleonCluster cx={NUC4.cx} cy={NUC4.cy} r={NUC4.r} discs={C_DISCS} pFill={NUC_RED} nFill={NEUTRON} flip={f >= nt + 12 ? {[FLIP4]: 'p'} : {}} glow={pulseOf(f, nt, 24) > 0 ? [FLIP4] : []} tremble={0.5} f={f} />
				{f >= ec ? <Electron x={lerp(fx0, fx0 + 360, fly)} y={lerp(fy0, fy0 + 200, fly)} /> : null}
				<MiniChart marker={[{...stepTo(MARKS.nRich, 1, -1, step), color: NAVY.stroke}]} arrow={{from: MARKS.nRich, to: stepTo(MARKS.nRich, 1, -1, 1), color: NAVY.stroke, o: step}} />
			</FrameSvg>
			<Lbl x={NUC4.cx} y={NUC4.cy - 170} at={-30} color={INK} size={30} anchor="middle">carbon-14: 6 p, 8 n</Lbl>
			<Lbl x={fx0 + 300} y={fy0 + 270} at={ec + 20} color={NAVY.ink} size={32}>β⁻ = ⁰₋₁e</Lbl>
			<HandTag x={560} y={400} text="n → p" at={nt + 14} size={36} color={NAVY.ink} />
			<CrossedChip x={640} y={560} at={ws} crossAt={ws + 14} size={30}>electrons stored inside the nucleus</CrossedChip>
			<HandTag x={640} y={700} text="electron created, not stored" at={ws + 30} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: fx0, cy: fy0, rx: 46, ry: 44}]} />
			<div style={{position: 'absolute', left: 620, top: 200, opacity: prog(f, cb, 14)}}><EqBox terms={[term(C14), '→', term(N14), '+', E_MINUS, '+', '?']} /></div>
			<div style={{position: 'absolute', left: 640, top: 330, opacity: prog(f, ms, 12)}}><Tally label="A" sum="14 = 14 + 0" tickAt={ms + 20} size={40} /></div>
			<div style={{position: 'absolute', left: 640, top: 400, opacity: prog(f, gu, 12)}}><Tally label="Z" sum="6 = 7 + (−1)" tickAt={gu + 20} size={40} color={RED.ink} /></div>
			<Lbl x={MINI_LBL.x} y={MINI_LBL.y} at={gu} color={NAVY.ink} size={28}>β⁻: Z + 1, A same</Lbl>
			<Lbl x={1470} y={560} at={gu + 10} color={GREY.ink} size={26}>schematic, steps enlarged</Lbl>
		</>
	);
};

// ---------- 5. the missing particle ----------
const SP = {x: 160, y: 250, w: 1080, h: 560, tMax: 180, q: 156};
const spX = (t: number) => SP.x + (t / SP.tMax) * SP.w;
/** Beta spectrum shape (allowed, no Coulomb correction; a sketch): p E (Q − T)², normalised. */
const spec = (t: number) => { const m = 511, p = Math.sqrt(t * t + 2 * t * m); return t <= 0 || t >= SP.q ? 0 : p * (t + m) * (SP.q - t) ** 2; };
const SPEC_MAX = Math.max(...Array.from({length: 157}, (_, i) => spec(i)));
const spY = (v: number) => SP.y + SP.h - (v / SPEC_MAX) * SP.h * 0.86;
export const S05: React.FC = () => {
	const id = 'antineutrino';
	const f = useCurrentFrame();
	const se = cue(id, 'the same energy'), wr = cue(id, 'a whole range of energies'), wp = cue(id, 'Wolfgang Pauli'), cr = cue(id, 'carries off the rest'), dt = cue(id, 'detected in nineteen fifty six'), az = cap(id, cue(id, 'change A or Z'), 24);
	const draw = prog(f, wr, 40);
	const path = Array.from({length: 157}, (_, i) => { const t = (i * SP.q * draw) / 156; return `${i ? 'L' : 'M'}${spX(t).toFixed(1)},${spY(spec(t)).toFixed(1)}`; }).join(' ');
	const fly = prog(f, cr, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GraphPaper x={SP.x} y={SP.y} w={SP.w} h={SP.h} step={SP.w / 18} />
				<line x1={SP.x} y1={SP.y + SP.h} x2={SP.x + SP.w} y2={SP.y + SP.h} stroke={INK} strokeWidth={4} />
				<line x1={SP.x} y1={SP.y + SP.h} x2={SP.x} y2={SP.y} stroke={INK} strokeWidth={4} />
				{[0, 50, 100, 150].map(t => <g key={t}><line x1={spX(t)} y1={SP.y + SP.h} x2={spX(t)} y2={SP.y + SP.h + 12} stroke={INK} strokeWidth={3} /><text x={spX(t)} y={SP.y + SP.h + 44} textAnchor="middle" style={T(28, INK)}>{t}</text></g>)}
				{f >= se ? <line x1={spX(SP.q)} y1={SP.y + SP.h} x2={spX(SP.q)} y2={SP.y + 20} stroke={GREY.ink} strokeWidth={4} strokeDasharray="12 8" opacity={prog(f, se, 12)} /> : null}
				{draw > 0.001 ? <path d={path} fill="none" stroke={NAVY.stroke} strokeWidth={6} /> : null}
				{f >= cr ? <g opacity={prog(f, cr + 30, 14)}><line x1={spX(50)} y1={spY(spec(50)) - 30} x2={spX(SP.q)} y2={spY(spec(50)) - 30} stroke={GREY.ink} strokeWidth={4} /><line x1={spX(50)} y1={spY(spec(50)) - 44} x2={spX(50)} y2={spY(spec(50)) - 16} stroke={GREY.ink} strokeWidth={4} /><line x1={spX(SP.q)} y1={spY(spec(50)) - 44} x2={spX(SP.q)} y2={spY(spec(50)) - 16} stroke={GREY.ink} strokeWidth={4} /><circle cx={spX(50)} cy={spY(spec(50))} r={9} fill={NAVY.stroke} /></g> : null}
				<NucleonCluster cx={1460} cy={520} r={22} discs={C_DISCS} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				{f < cr ? <Electron x={1520 + 200 * ((f % 60) / 60)} y={520 - 100 * ((f % 60) / 60)} opacity={1 - (f % 60) / 60} /> : null}
				{f >= cr ? <><Electron x={lerp(1520, 1720, fly)} y={lerp(520, 420, fly)} /><Nu x={lerp(1520, 1700, fly)} y={lerp(530, 650, fly)} text="ν̄" /></> : null}
			</FrameSvg>
			<Lbl x={SP.x + 10} y={SP.y - 20} at={-30} color={INK} size={28}>number of electrons</Lbl>
			<Lbl x={1300} y={640} at={-30} out={cr} color={NAVY.ink} size={30}>carbon-14 beta decay</Lbl>
			<Lbl x={SP.x + 60} y={SP.y + 80} at={-30} out={wr} color={NAVY.ink} size={32}>each decay: one electron, what energy?</Lbl>
			<Lbl x={SP.x + SP.w} y={SP.y + SP.h + 90} at={-30} color={INK} size={28} anchor="end">electron kinetic energy (keV), carbon-14 (sketch)</Lbl>
			<Lbl x={spX(SP.q) + 14} y={SP.y + 60} at={se + 6} color={GREY.ink} size={30}>expected: one value</Lbl>
			<HandTag x={spX(10)} y={SP.y + 120} text="measured: a spread" at={wr + 30} size={36} color={NAVY.ink} marks={[{kind: 'underline', x1: spX(2), x2: spX(SP.q - 2), y: SP.y + SP.h + 6}]} />
			<Lbl x={spX(52)} y={spY(spec(50)) - 60} at={cr + 36} color={GREY.ink} size={28}>the rest: carried by ν̄</Lbl>
			<Lbl x={1300} y={340} at={wp} color={INK} size={32}>Pauli, 1930</Lbl>
			<Lbl x={1300} y={720} at={dt} color={INK} size={32}>detected 1956</Lbl>
			<div style={{position: 'absolute', left: 1290, top: 190}}><EqBox terms={[term(C14), '→', term(N14), '+', E_MINUS, '+', f >= az ? {A: '', Z: '', s: 'ν̄'} : '?']} size={40} framed={f >= az + 10} /></div>
			<Lbl x={1300} y={800} at={az + 6} color={GREY.ink} size={28}>ν̄: charge 0, almost no mass</Lbl>
			<HandTag x={1300} y={860} text="A and Z untouched" at={az + 20} size={34} color={GREY.ink} />
		</>
	);
};

// ---------- 6. beta-plus decay ----------
const F_DISCS = clusterLayout(9, 9, 6);
const FLIP6 = F_DISCS.map((d, i) => ({d, i})).filter(e => e.d.kind === 'p').sort((a, b) => b.d.x - a.d.x)[0].i;
export const S06: React.FC = () => {
	const id = 'beta-plus';
	const f = useCurrentFrame();
	const pn = cue(id, 'A proton turns into a neutron'), po = cue(id, 'giving out a positron'), nu = cue(id, 'and a neutrino'), fe = cue(id, 'Fluorine eighteen'), gd = cap(id, cue(id, 'goes down by one'), 30);
	const [fx0, fy0] = discAt(NUC4.cx, NUC4.cy, NUC4.r, F_DISCS[FLIP6]);
	const fp = prog(f, po, 40), fn = prog(f, nu, 40), step = prog(f, gd, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NucleonCluster cx={NUC4.cx} cy={NUC4.cy} r={NUC4.r} discs={F_DISCS} pFill={NUC_RED} nFill={NEUTRON} flip={f >= pn + 12 ? {[FLIP6]: 'n'} : {}} glow={pulseOf(f, pn, 24) > 0 ? [FLIP6] : []} glowColor={ROSE.stroke} tremble={0.5} f={f} />
				{f >= po ? <Positron x={lerp(fx0, fx0 + 380, fp)} y={lerp(fy0, fy0 + 170, fp)} /> : null}
				{f >= nu ? <Nu x={lerp(fx0, fx0 - 120, fn)} y={lerp(fy0, fy0 - 330, fn)} /> : null}
				<MiniChart marker={[{...stepTo(MARKS.pRich, -1, 1, step), color: ROSE.stroke}]} arrow={{from: MARKS.pRich, to: stepTo(MARKS.pRich, -1, 1, 1), color: ROSE.stroke, o: step}} />
			</FrameSvg>
			<Lbl x={NUC4.cx} y={NUC4.cy - 170} at={-30} color={INK} size={30} anchor="middle">fluorine-18: 9 p, 9 n</Lbl>
			<Lbl x={fx0 + 320} y={fy0 + 240} at={po + 20} color={ROSE.ink} size={32}>e⁺ = ⁰₊₁e (positron)</Lbl>
			<HandTag x={560} y={400} text="p → n" at={pn + 14} size={36} color={ROSE.ink} />
			<div style={{position: 'absolute', left: 620, top: 200, opacity: prog(f, fe, 14)}}><EqBox terms={[term(F18), '→', term(O18), '+', E_PLUS, '+', 'ν']} framed={f >= gd + 16} /></div>
			<Chip x={1100} y={300} at={fe + 20} size={28} color={INK}>PET scans</Chip>
			<div style={{position: 'absolute', left: 640, top: 330, opacity: prog(f, gd, 12)}}><Tally label="A" sum="18 = 18 + 0" tickAt={gd + 8} size={40} /></div>
			<div style={{position: 'absolute', left: 640, top: 400, opacity: prog(f, gd, 12)}}><Tally label="Z" sum="9 = 8 + 1" tickAt={gd + 14} size={40} color={RED.ink} /></div>
			<HandTag x={760} y={640} text="mirror of β⁻" at={gd + 20} size={38} color={ROSE.ink} marks={[{kind: 'arrow', from: [740, 610], to: [fx0 + 30, fy0 - 10], bend: 0.2}]} />
			<Lbl x={MINI_LBL.x} y={MINI_LBL.y} at={gd} color={ROSE.ink} size={28}>β⁺: Z − 1, A same</Lbl>
			<Lbl x={1640} y={445} at={-30} color={ROSE.ink} size={26}>too many p</Lbl>
			<Lbl x={640} y={340} at={-30} out={gd} color={ROSE.ink} size={34}>too many protons: what changes?</Lbl>
			<div style={{position: 'absolute', left: 640, top: 470, background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.2)', borderRadius: 14, padding: '8px 18px', fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 30, color: GREY.ink}}>last: β⁻ for too many neutrons: n → p + e⁻ + ν̄</div>
			<Lbl x={1470} y={560} at={gd + 10} color={GREY.ink} size={26}>schematic, steps enlarged</Lbl>
		</>
	);
};
