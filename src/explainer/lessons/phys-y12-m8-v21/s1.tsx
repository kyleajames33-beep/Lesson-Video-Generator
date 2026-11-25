// Scenes 1 to 6: the hook (last time's organising board pulses part by part; predict; the kinds counter reads 17), two
// kinds of thing (the board becomes two blocks), six quarks (the table fills column by column with charge tints and
// masses; top quark against a gold atom), six leptons (the second row; charged leptons heavier), antimatter for
// everything (the mirror: same mass, charge-like labels reversed; neutron against antineutron) and adding up hadrons
// (charge tallies ticking).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {Diamond, GridTable, QBag, QDot} from '../../physics/atom/particles';
import type {CellState} from '../../physics/atom/particles';
import {Disc} from '../../physics/atom/neutron';
import {ORG, OrgBoard, M8V20FinalFrame} from '../phys-y12-m8-v20/s3';
import {HEAD, HEAD_SIZE, K_P, M_GOLD, M_P, M_T, M_TAU, N_ALL, PBAR, PI_M, PI_P, Q_DOWN, Q_UP, TAU_P, cap, cue, hold} from './common';
import {DOWN, GREY, INK, LEP, Lbl, NAVY, NEUTRON, SMBoard, SM_DEFS, SM_FULL, TEAL, UP, WZ, cellC, fr3, fx} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseAt = (f: number, at: number, d = 36) => Math.sin(Math.PI * Math.min(1, Math.max(0, (f - at) / d)));

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const tq = cue(id, 'two quarks'), fl = cue(id, 'a few leptons'), ap = cue(id, 'their antimatter partners'), sf = cue(id, 'some forces'), pr = cue(id, 'Make your prediction'), sk = cue(id, "it's seventeen kinds"), oi = cap(id, cue(id, 'organise particles and interactions'), 8);
	const h = hold(id);
	if (f < 1) return <M8V20FinalFrame />;
	return (
		<>
			<MarkedHeading text={HEAD} marks={['organise particles and interactions']} at={oi} size={HEAD_SIZE} color={INK} markColor={INK} />
			<Chip x={96} y={890} at={-60} out={oi} size={30} w={1728} color={INK} border={INK}>Next: how does the Standard Model organise particles and interactions?</Chip>
			<FrameSvg>
				<OrgBoard qPulse={pulseAt(f, tq)} lPulse={pulseAt(f, fl)} aPulse={pulseAt(f, ap)} fPulse={pulseAt(f, sf)} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={170} r={40} />
				{f >= sk ? <Mark x={1606} y={426} at={sk} kind="tick" color={INK} size={28} /> : null}
			</FrameSvg>
			<Chip x={1630} y={330} at={pr} size={30} color={INK}>about 6</Chip>
			<Chip x={1630} y={400} at={pr + 4} size={30} color={INK} border={f >= sk ? INK : undefined}>about 17</Chip>
			<Chip x={1630} y={470} at={pr + 8} size={30} color={INK}>hundreds</Chip>
			<Readout x={1620} y={560} label="kinds" value={f >= sk ? `${N_ALL}` : ''} color={INK} w={200} opacity={prog(f, sk, 12)} />
			<Lbl x={960} y={740} at={sk + 10} color={GREY.ink} size={26}>counting W⁺/W⁻ as one kind and the 8 gluons as one</Lbl>
			<HandTag x={1580} y={720} text="we'll count them in" at={sk + 24} size={30} color={INK} marks={[{kind: 'circle', cx: 1720, cy: 610, rx: 120, ry: 66}]} />
		</>
	);
};

// ---------- 2. two kinds of thing ----------
export const S02: React.FC = () => {
	const id = 'two-groups';
	const f = useCurrentFrame();
	const bt = cue(id, 'our best theory of the fundamental particles'), tg = cue(id, 'It sorts everything into two groups'), mp = cue(id, 'matter particles, the quarks and leptons'), fc = cap(id, cue(id, 'pass forces between them'), 30);
	const sp = prog(f, tg, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${-60 * sp},0)`}><g opacity={1}><OrgBoard anti={1 - sp} /></g>
					<rect x={170} y={220} width={780} height={560} rx={20} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, mp, 16)} />
				</g>
				<g transform={`translate(${120 * sp},0)`}>
					<rect x={1230} y={220} width={360} height={560} rx={20} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, fc, 16)} />
					{[0, 1, 2, 3].map(i => <Diamond key={i} x={ORG.f.x + ORG.w / 2} y={ORG.f.y + 60 + i * (ORG.h + ORG.gap) + ORG.h / 2} s={26} tone={WZ} label="" outline />)}
				</g>
			</FrameSvg>
			<Chip x={96} y={800} at={bt} size={30} color={INK}>Standard Model: fundamental particles + 3 of the 4 forces</Chip>
			<Lbl x={140} y={196} at={mp} color={INK} size={32}>matter particles (quarks, leptons)</Lbl>
			<Lbl x={1380} y={196} at={fc} color={INK} size={32}>force carriers</Lbl>
			<HandTag x={1000} y={860} text="stuff" at={mp + 20} size={34} color={INK} marks={[{kind: 'underline', x1: 140, x2: 860, y: 205}]} />
			<HandTag x={1500} y={860} text="pushes and pulls" at={fc + 8} size={34} color={INK} marks={[{kind: 'underline', x1: 1380, x2: 1620, y: 205}]} />
		</>
	);
};

// ---------- 3. six quarks ----------
const G = SM_FULL;
const fillQ = (f: number, ud: number, cs: number, tb: number) => (id: string) => (['u', 'd'].includes(id) ? prog(f, ud, 14) : ['c', 's'].includes(id) ? prog(f, cs, 14) : ['t', 'b'].includes(id) ? prog(f, tb, 14) : 0);
export const S03: React.FC = () => {
	const id = 'quarks';
	const f = useCurrentFrame();
	const ud = cue(id, 'Up and down'), cs = cue(id, 'charm and strange'), tb = cue(id, 'top and bottom'), p2 = cue(id, 'the first has a charge of plus two thirds'), m1 = cue(id, 'minus one third'), hc = cue(id, 'a heavier copy'), om = cue(id, 'Ordinary matter uses only up and down'), da = cue(id, 'decay almost straight away'), tq = cue(id, 'The top quark has about the mass'), np = cap(id, cue(id, 'it has no parts'), 20);
	const fill = fillQ(f, ud, cs, tb);
	const up = ['u', 'c', 't'];
	const state = (cid: string): CellState => ({o: fill(cid), tint: up.includes(cid) ? prog(f, p2, 14) : prog(f, m1, 14), mass: prog(f, hc, 14), lit: ['u', 'd'].includes(cid) ? pulseAt(f, om, 50) : 0});
	const n = [ud, cs, tb].filter(x => f >= x).length * 2;
	const bars = prog(f, tq, 24), bw = 560;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SMBoard g={G} state={state} carriers={0} />
				{bars > 0.001 ? <g opacity={bars}>
					<rect x={1080} y={360} width={bw * (M_T / M_GOLD)} height={56} fill={UP.soft} stroke={UP.stroke} strokeWidth={4} />
					<rect x={1080} y={470} width={bw} height={56} fill="#efe1b8" stroke="#a27d1d" strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Readout x={1620} y={720} label="kinds so far" value={`${n}`} color={INK} w={210} />
			<Lbl x={260} y={590} at={om + 10} color={INK} size={28}>everyday matter</Lbl>
			<HandTag x={560} y={590} text="made in collisions; decay quickly" at={da} size={30} color={GREY.ink} marks={[{kind: 'underline', x1: 510, x2: 990, y: 548}]} />
			<Lbl x={1080} y={346} at={tq + 4} color={UP.ink} size={30}>{`top quark ≈ ${fx(M_T, 0)} GeV/c²`}</Lbl>
			<Lbl x={1080} y={456} at={tq + 10} color="#7a5c00" size={30}>{`gold atom ≈ ${fx(M_GOLD, 0)} GeV/c²`}</Lbl>
			<HandTag x={1080} y={600} text="heavy, yet no parts" at={np} size={34} color={UP.ink} />
		</>
	);
};

// ---------- 4. six leptons ----------
export const S04: React.FC = () => {
	const id = 'leptons';
	const f = useCurrentFrame();
	const em = cue(id, 'The electron, the muon and the tau'), on = cue(id, 'its own neutrino'), st = cue(id, 'Same three generations'), gh = cue(id, 'the charged leptons get heavier'), tw = cue(id, 'nearly twice as heavy as a proton'), sf = cap(id, cue(id, "doesn't feel the strong force"), 20);
	const charged = ['e', 'mu', 'tau'], nus = ['ve', 'vm', 'vt'];
	const state = (cid: string): CellState => {
		if (['u', 'c', 't', 'd', 's', 'b'].includes(cid)) return {o: 1, tint: 1, mass: 1};
		if (charged.includes(cid)) return {o: prog(f, em + charged.indexOf(cid) * 8, 14), tint: 1, mass: prog(f, gh, 14), lit: pulseAt(f, st)};
		if (nus.includes(cid)) return {o: prog(f, on + nus.indexOf(cid) * 8, 14), tint: 1, lit: pulseAt(f, st)};
		return {};
	};
	const n = 6 + charged.filter((_, i) => f >= em + i * 8).length + nus.filter((_, i) => f >= on + i * 8).length;
	const [ex, ey] = cellC(G, 'e'), [tx, ty] = cellC(G, 'tau');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SMBoard g={G} state={state} carriers={0} /></FrameSvg>
			<Readout x={1620} y={720} label="kinds so far" value={`${n}`} color={INK} w={210} />
			<HandTag x={1080} y={640} text="heavier each time" at={gh + 10} size={32} color={NAVY.ink} marks={[{kind: 'arrow', from: [ex, ey - 70], to: [tx + 40, ty - 70], bend: -0.08}]} />
			<Lbl x={1080} y={790} at={gh + 20} color={GREY.ink} size={26}>neutrinos: tiny masses, order not settled</Lbl>
			<Lbl x={1080} y={360} at={tw} color={LEP.ink} size={32}>{`τ: ${fx(M_TAU / 1000, 2)} GeV/c² (proton ${fx(M_P / 1000, 2)})`}</Lbl>
			<Lbl x={1080} y={410} at={tw + 8} color={GREY.ink} size={28}>{`${fx(TAU_P, 2)} times a proton: nearly twice`}</Lbl>
			<Chip x={1080} y={480} at={sf} size={30} w={560} color={LEP.ink}>lepton: no parts, no strong force (last time)</Chip>
		</>
	);
};

// ---------- 5. antimatter for everything ----------
const M5 = {x: 120, y0: 250, y1: 470, w: 250, h: 120, gap: 30};
const MIRROR = [{id: 'u', anti: 'ū', q: Q_UP}, {id: 'd', anti: 'd̄', q: Q_DOWN}, {id: 'e', anti: 'e⁺', q: -1}] as const;
export const S05: React.FC = () => {
	const id = 'antimatter';
	const f = useCurrentFrame();
	const sm = cue(id, 'the same mass'), mt = cue(id, "it's more than that"), an = cue(id, 'an antineutron, with no charge'), mo = cue(id, 'minus one, not plus one'), au = cue(id, 'an anti-up quark'), pt = cap(id, cue(id, 'plus one third'), 20);
	const refl = prog(f, 4, 30);
	const cells = MIRROR.map((m, i) => {
		const d = SM_DEFS.find(k => k.id === m.id)!;
		return {top: {id: m.id, sym: d.sym, name: d.name, note: d.note, mass: d.mass, x: M5.x + i * (M5.w + M5.gap), y: M5.y0, tone: d.tone}, bot: {id: 'a' + m.id, sym: m.anti, name: m.id === 'e' ? 'positron' : 'anti-' + d.name, note: m.id === 'e' ? '+1' : fr3(-m.q), mass: d.mass, x: M5.x + i * (M5.w + M5.gap), y: M5.y1, tone: d.tone}};
	});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GridTable cells={cells.map(c => c.top)} w={M5.w} h={M5.h} state={() => ({o: 1, tint: 1, mass: 1})} symSize={44} />
				<line x1={M5.x - 20} y1={(M5.y0 + M5.h + M5.y1) / 2} x2={M5.x + 3 * M5.w + 2 * M5.gap + 20} y2={(M5.y0 + M5.h + M5.y1) / 2} stroke={INK} strokeWidth={3} strokeDasharray="12 8" />
				<g transform={`translate(0,${lerp(-(M5.y1 - M5.y0), 0, refl)})`} opacity={refl}>
					<GridTable cells={cells.map(c => c.bot)} w={M5.w} h={M5.h} state={() => ({o: 1, mass: prog(f, sm, 14)})} symSize={44} />
					{cells.map((c, i) => <rect key={i} x={c.bot.x} y={c.bot.y} width={M5.w} height={M5.h} rx={14} fill="none" stroke={CARD_BG} strokeWidth={5} strokeDasharray="10 10" />)}
				</g>
				<Disc x={1240} y={640} r={88} fill={NEUTRON} text="n" />
				<g opacity={prog(f, an, 14)}><Disc x={1600} y={640} r={88} fill={NEUTRON} text="n̄" ring /></g>
			</FrameSvg>
			<Lbl x={M5.x} y={M5.y1 + M5.h + 40} at={sm + 6} color={INK} size={28}>same masses, copied across</Lbl>
			<Chip x={1060} y={230} at={mt} size={30} w={760} color={INK}>antiparticle: same mass, charge-like labels reversed (charge, baryon count)</Chip>
			<Lbl x={1060} y={380} at={mt + 20} color={GREY.ink} size={26}>energy is never reversed</Lbl>
			<Lbl x={1240} y={770} at={-30} color={INK} size={30} anchor="middle">B = +1, Q = 0</Lbl>
			<Lbl x={1600} y={770} at={an + 6} color={INK} size={30} anchor="middle">B = −1, Q = 0</Lbl>
			<HandTag x={1430} y={850} text="same charge, still different" at={mo + 10} size={32} color={GREY.ink} marks={[{kind: 'circle', cx: 1600, cy: 760, rx: 110, ry: 34}]} markWidth={5} />
			<div style={{position: 'absolute', left: M5.x, top: 760, display: 'flex', gap: 40}}>
				<Row at={au} size={52}><AnswerBox at={au + 4} tick={false}><span style={{color: UP.ink}}>{`ū: ${fr3(-Q_UP)}`}</span></AnswerBox></Row>
				<Row at={pt} size={52}><AnswerBox at={pt + 4} tick={false}><span style={{color: DOWN.ink}}>{`d̄: ${fr3(-Q_DOWN)}`}</span></AnswerBox></Row>
			</div>
			<Lbl x={M5.x} y={920} at={pt + 10} color={GREY.ink} size={26}>the photon is its own antiparticle</Lbl>
		</>
	);
};
const CARD_BG = '#fffdf8';

// ---------- 6. adding up hadrons ----------
type Had = {x: number; y: number; name: string; q: readonly {l: string; up: boolean; anti?: boolean}[]; sum: string};
const HADS: Had[] = [
	{x: 260, y: 360, name: 'π⁺ (meson)', q: [{l: 'u', up: true}, {l: 'd̄', up: false, anti: true}], sum: `${fr3(Q_UP)} + ⅓ = ${fr3(PI_P)}`},
	{x: 260, y: 660, name: 'π⁻ (meson)', q: [{l: 'd', up: false}, {l: 'ū', up: true, anti: true}], sum: `${fr3(Q_DOWN)} − ⅔ = ${fr3(PI_M)}`},
	{x: 1060, y: 360, name: 'antiproton', q: [{l: 'ū', up: true, anti: true}, {l: 'ū', up: true, anti: true}, {l: 'd̄', up: false, anti: true}], sum: `${fr3(-Q_UP)} − ⅔ + ⅓ = ${fr3(PBAR)}`},
	{x: 1060, y: 660, name: 'K⁺ (meson)', q: [{l: 'u', up: true}, {l: 's̄', up: false, anti: true}], sum: `${fr3(Q_UP)} + ⅓ = ${fr3(K_P)}`},
];
const HadBag: React.FC<{h: Had; o: number}> = ({h, o}) => (
	<QBag x={h.x} y={h.y} r={100}>
		<g opacity={o}>{h.q.map((q, i) => <QDot key={i} x={h.x + (h.q.length === 2 ? [-38, 38][i] : [-42, 42, 0][i])} y={h.y + (h.q.length === 2 ? 0 : [24, 24, -46][i])} r={32} label={q.l} tone={q.up ? UP : DOWN} anti={q.anti} />)}</g>
	</QBag>
);
export const S06: React.FC = () => {
	const id = 'hadron-charges';
	const f = useCurrentFrame();
	const pp = cue(id, 'A pion plus is an up and an anti-down'), p1 = cue(id, 'makes plus one'), pm = cue(id, 'A pion minus'), ap = cue(id, 'An antiproton'), ev = cue(id, 'every hadron ever found'), wn = cap(id, cue(id, 'a whole number'), 20);
	const at = [pp, pm, ap, ev];
	const sumAt = [p1, pm + 30, ap + 40, ev + 10];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>{HADS.map((h, i) => <HadBag key={i} h={h} o={prog(f, at[i], 14)} />)}</FrameSvg>
			{HADS.map((h, i) => <Lbl key={i} x={h.x} y={h.y + 140} at={at[i]} color={INK} size={28} anchor="middle">{h.name}</Lbl>)}
			{HADS.map((h, i) => <div key={i} style={{position: 'absolute', left: h.x + 130, top: h.y - 40}}><Row at={sumAt[i]} size={i === 3 ? 44 : 52}>{i === 0 ? <AnswerBox at={sumAt[i] + 4}>{h.sum}</AnswerBox> : <span style={{color: i === 3 ? GREY.ink : INK}}>{h.sum}</span>}</Row></div>)}
			<HandTag x={400} y={490} text="anti-down: +⅓" at={p1 + 16} size={32} color={TEAL.ink} />
			<Lbl x={1190} y={500} at={ap + 50} color={GREY.ink} size={26}>a baryon of antiquarks</Lbl>
			<div style={{position: 'absolute', left: 560, top: 840}}><Row at={wn} size={40}><AnswerBox at={wn + 4}>hadron charges: always whole numbers</AnswerBox></Row></div>
			<HandTag x={1500} y={900} at={wn + 16} size={30} color={INK} marks={[{kind: 'brace', x: 1720, y1: 300, y2: 700, facing: 'right'}]} />
		</>
	);
};

