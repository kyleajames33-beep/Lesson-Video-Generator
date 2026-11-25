// Scenes 1 to 5: the hook on last time's plates (now wired to the painted supply, a proton accelerating from rest
// on a loop, three answer-free "what if" panels), the uniform field (test charges with equal pushes, lines drawn
// on, the fringe at the edges), why E = V/d (the one-coulomb work strip, the gap stretching), the field from real
// numbers (full-width working over the live plate stage: dial and gap slider) and the force's sign.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {FieldLines, Fringe, Particle, Slider} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {V23FinalFrame} from '../phys-y12-m5-v23/s3';
import {D1, D2, E1, E2, E3, HEAD, HEAD_SIZE, V1, V2, crossFrac, cue, dur, holdIf, mono} from './common';
import {AMBER, BLUE, CardRect, GREY, Givens, Lbl, NAVY, Ring, Stage, Strip, T, VIOLET, VecArrow, lerpG, lerpS, sci, usePulse} from './parts';

/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------- the "what if" panels (hook and puzzle answers) ----------
export type GhostKind = '2V' | '2d' | 'e';
/** An answer-free panel: mini plates, the particle with a dashed "?" acceleration arrow, the change named, three
 * prediction chips. `tick` (after the answer) writes the result in violet with an ink tick. */
export const GhostPanel: React.FC<{x: number; y: number; w?: number; h?: number; kind: GhostKind; at: number; tick?: string; tickAt?: number; chips?: boolean; fs?: number}> = ({x, y, w = 484, h = 200, kind, at, tick, tickAt = 1e9, chips = true, fs = 0}) => {
	const z = (n: number) => Math.max(n, fs);
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0) return null;
	const gp = kind === '2d' ? 116 : 58;
	const mg: PG = {x1: x + 22, x2: x + 222, yTop: y + 30 + (116 - gp) / 2 + 12, yBot: y + 30 + (116 - gp) / 2 + 12 + gp};
	const my = (mg.yTop + mg.yBot) / 2, mx = x + 122;
	const label = kind === '2V' ? '2V' : kind === '2d' ? '2d, same V' : 'electron';
	const t = prog(f, tickAt, 14);
	return (
		<g opacity={o}>
			<CardRect x={x} y={y} w={w} h={h} />
			<FieldLines g={mg} step={50} width={3} />
			<rect x={mg.x1} y={mg.yTop - 10} width={mg.x2 - mg.x1} height={10} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
			<rect x={mg.x1} y={mg.yBot} width={mg.x2 - mg.x1} height={10} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
			<T x={mg.x1 - 8} y={mg.yTop + 2} size={z(26)} anchor="end">+</T>
			<T x={mg.x1 - 8} y={mg.yBot + 14} size={z(26)} anchor="end">−</T>
			<Particle cx={mx} cy={my} sign={kind === 'e' ? '−' : '+'} r={15} />
			{kind === 'e' ? <g>
				<VecArrow x={mx + 26} y={my} dx={0} dy={-gp / 2 + 4} color={VIOLET.stroke} width={4} head={12} dash="6 5" />
				<VecArrow x={mx + 26} y={my} dx={0} dy={gp / 2 - 4} color={VIOLET.stroke} width={4} head={12} dash="6 5" />
			</g> : <VecArrow x={mx + 26} y={my - 8} dx={0} dy={gp / 2 - 2} color={VIOLET.stroke} width={4} head={12} dash="6 5" />}
			<T x={mx + 44} y={my + 10} size={z(30)} color={VIOLET.ink}>a?</T>
			<T x={x + 248} y={y + 52} size={z(kind === 'e' ? 32 : 36)} color={NAVY.ink}>{label}</T>
			{chips ? ['a × 2', 'a ÷ 2', 'same'].map((c, i) => (
				<g key={i} opacity={1 - t}>
					<rect x={x + 248 + (i % 2) * 112} y={y + 76 + Math.floor(i / 2) * 50} width={102} height={40} rx={10} fill="#f1ebdf" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
					<T x={x + 299 + (i % 2) * 112} y={y + 105 + Math.floor(i / 2) * 50} size={z(26)} anchor="middle" color={INK}>{c}</T>
				</g>
			)) : null}
			{tick && t > 0 ? <g opacity={t}>
				<T x={x + 248} y={y + 116} size={z(34)} color={VIOLET.ink}>{tick}</T>
				<path d={`M${x + 252},${y + 150} l14,14 l26,-30`} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
			</g> : null}
		</g>
	);
};

// ---------- layouts ----------
const G23: PG = {x1: 760, x2: 1640, yTop: 360, yBot: 720};
export const GA: PG = {x1: 640, x2: 1260, yTop: 330, yBot: 630};
export const SA: SupplyAt = {x: 96, y: 640, w: 400};
const PANELS = [186, 406, 626];

// ---------- 1. hook: one particle, three changes ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const here = cue(id, 'Here are the two'), topPos = cue(id, 'The top plate is positive'), proton = cue(id, 'A proton between them'), steadily = cue(id, 'accelerates steadily'), dbl = cue(id, 'Double the voltage'), apart = cue(id, 'twice as far apart'), swap = cue(id, 'swap the proton for an electron'), make = cue(id, 'Make your predictions');
	const h = holdIf(id);
	if (f < 1) return <V23FinalFrame />;
	const mv = prog(f, 8, 46);
	const g = lerpG(G23, GA, mv);
	const sIn = prog(f, here + 6, 30);
	const sup = lerpS({x: -480, y: 640, w: 400}, SA, sIn);
	const midX = (g.x1 + g.x2) / 2 - 55 * (1 - mv), gap = g.yBot - g.yTop;
	// The proton loops: from rest near the top plate to the bottom plate in 64 frames, then waits 22 frames.
	const loop = f >= proton ? ((f - proton) % 86) / 64 : -1;
	const py = loop < 0 ? (g.yTop + g.yBot) / 2 : g.yTop + 28 + crossFrac(loop) * (gap - 56);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 22), clipPath: 'inset(150px 0 0 0)'}}><V23FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={g} sup={sup} reading={sIn > 0.6 ? `${V1} V` : undefined} supplyOpacity={prog(f, here + 6, 16)} />
				<Particle cx={midX} cy={py} sign="+" r={26} />
				{f >= proton ? <VecArrow x={midX + 46} y={py - 30} dx={0} dy={72} color={VIOLET.stroke} width={6} head={18} at={proton} /> : null}
				{PANELS.map((y, i) => <GhostPanel key={i} x={1340} y={y} kind={(['2V', '2d', 'e'] as const)[i]} at={[dbl, apart, swap][i]} />)}
			</FrameSvg>
			<Lbl x={midX - 40} y={(g.yTop + g.yBot) / 2 - 44} at={6} color={INK} size={32} anchor="end">proton (+)</Lbl>
			<HandTag x={g.x2 - 24} y={g.yTop + 56} anchor="end" text="+ to −" at={topPos + 10} size={32} color={BLUE.ink} />
			<HandTag x={g.x1 + 20} y={g.yBot + 70} text="steady push, steady a" at={steadily + 6} size={32} color={VIOLET.ink} />
			<Lbl x={sup.x + 200} y={SA.y - 18} at={here + 30} color={NAVY.ink} size={30} anchor="middle">high-voltage supply</Lbl>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1240} y={880} r={46} ringFrom={make} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. a uniform field between the plates ----------
export const S02: React.FC = () => {
	const id = 'uniform-field';
	const f = useCurrentFrame();
	const region = cue(id, 'An electric field is a region'), dir = cue(id, 'Its direction is the way'), between = cue(id, 'Between two large plates'), spaced = cue(id, 'evenly spaced'), means = cue(id, 'That means the field is uniform'), same = cue(id, 'the same strength'), edges = cue(id, 'Near the edges'), middle = cue(id, 'so we use the middle region');
	const g = GA;
	const linesO = 1 - prog(f, 0, 16) + prog(f, between, 10);
	const grow = f < between ? 1 : prog(f, spaced - 20, 30);
	const charges: [number, number][] = [[780, 400], [950, 520], [1130, 440]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={g} sup={SA} reading={`${V1} V`} linesOpacity={Math.min(1, linesO)} grow={grow} />
				{PANELS.map((y, i) => <g key={i} opacity={1 - prog(f, 0, 14)}><GhostPanel x={1340} y={y} kind={(['2V', '2d', 'e'] as const)[i]} at={-60} /></g>)}
				{charges.map(([x, y], i) => <g key={i} opacity={prog(f, region + 10 + i * 6, 12)}>
					<Particle cx={x} cy={y} sign="+" r={18} />
					<VecArrow x={x} y={y + 22} dx={0} dy={70} color={AMBER.stroke} width={6} head={18} at={dir + 10 + i * 4} />
				</g>)}
				<Ring cx={955} cy={500} rx={235} ry={130} at={same} color={INK} />
				<Fringe g={g} opacity={prog(f, edges, 18)} />
				{f >= middle ? <rect x={g.x1 + 120} y={g.yTop + 8} width={g.x2 - g.x1 - 240} height={g.yBot - g.yTop - 16} fill="none" stroke={INK} strokeWidth={3.5} strokeDasharray="12 9" opacity={prog(f, middle, 14)} /> : null}
			</FrameSvg>
			<HandTag x={950} y={g.yTop - 72} text="same push here, here and here" at={same + 16} size={30} color={BLUE.ink} anchor="middle" />
			<HandTag x={g.x1 - 10} y={g.yBot + 66} text="edges: not uniform" at={edges + 14} size={30} color={GREY.ink} anchor="start" />
			<div style={{position: 'absolute', left: 1340, top: 200, display: 'flex', flexDirection: 'column', gap: 18, width: 484}}>
				<Row at={region} ageAt={means} size={36} oldSize={30} style={{whiteSpace: 'normal'}}>field: a region where a charge feels a force</Row>
				<Row at={dir} ageAt={means} size={36} oldSize={30} style={{whiteSpace: 'normal'}}><span style={{color: BLUE.ink}}>direction: the push on a + charge, + to −</span></Row>
				<Row at={means} size={38} style={{whiteSpace: 'normal'}}><span style={{color: BLUE.ink}}>uniform: same E everywhere in the middle</span></Row>
				<Row at={middle} size={34} style={{whiteSpace: 'normal'}}>model: plates wide compared with the gap</Row>
			</div>
		</>
	);
};

// ---------- 3. why E equals V over d ----------
const GB: PG = {x1: 540, x2: 1110, yTop: 260, yBot: 540};
const SB: SupplyAt = {x: 96, y: 600, w: 380};
export const S03: React.FC = () => {
	const id = 'e-equals-v-over-d';
	const f = useCurrentFrame();
	const joule = cue(id, 'a volt was a joule per coulomb'), oneC = cue(id, 'So if one coulomb'), doesV = cue(id, 'the field does V joules'), pushes = cue(id, 'The field pushes that coulomb'), dist = cue(id, 'across the distance d'), also = cue(id, 'so the work is also'), vEd = cue(id, 'That means V equals E d'), eVd = cue(id, 'and E equals V over d'), wider = cue(id, 'A wider gap spreads');
	const push = prog(f, 0, 30);
	const stretch = prog(f, wider, 40);
	const g0 = lerpG(GA, GB, push), g: PG = {...g0, yBot: g0.yBot + (GB.yBot - GB.yTop) * stretch};
	const sup = lerpS(SA, SB, push);
	const slide = kf(f, mono([[doesV - 10, 0], [doesV + 70, 1]]));
	const tok = {x: 740, y: g.yTop + 40 + slide * (GB.yBot - GB.yTop - 80)};
	const tokO = prog(f, oneC, 12) * (1 - prog(f, wider - 10, 10));
	const fill = prog(f, doesV - 10, 80);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={g} sup={sup} reading="V" density={1 - 0.5 * stretch} />
				{tokO > 0 ? <g opacity={tokO}>
					<circle cx={tok.x} cy={tok.y} r={34} fill="#f3d9a8" stroke={INK} strokeWidth={4} />
					<T x={tok.x} y={tok.y + 11} size={30} anchor="middle">1 C</T>
					{f >= pushes ? <VecArrow x={tok.x + 50} y={tok.y - 30} dx={0} dy={80} color={AMBER.stroke} width={7} head={20} at={pushes} label="E newtons" lx={tok.x + 66} ly={tok.y + 10} size={30} labelColor={AMBER.ink} /> : null}
				</g> : null}
				<Bracket x1={g.x2 + 40} y1={g.yTop} x2={g.x2 + 40} y2={g.yBot} color={NAVY.stroke} at={dist} out={wider} label="d" size={40} lx={g.x2 + 62} anchor="start" />
				{f >= wider ? <Bracket x1={g.x2 + 40} y1={g.yTop} x2={g.x2 + 40} y2={g.yBot} color={NAVY.stroke} at={wider + 20} label="2d" size={40} lx={g.x2 + 62} anchor="start" /> : null}
			</FrameSvg>
			{/* the work counter for one coulomb */}
			<div style={{position: 'absolute', left: 1300, top: 190, width: 524, opacity: prog(f, oneC, 12)}}>
				<div style={{background: CARD, borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.16)', padding: '8px 20px 12px'}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>work done on 1 C</div>
					<div style={{height: 26, background: '#ede4d3', borderRadius: 13, marginTop: 6, overflow: 'hidden'}}><div style={{width: `${fill * 100}%`, height: '100%', background: AMBER.stroke}} /></div>
					<div style={{...DISPLAY(44, INK), marginTop: 6, opacity: prog(f, doesV + 50, 12)}}>W = V joules</div>
				</div>
			</div>
			<HandTag x={1320} y={400} text="1 J per C" at={joule} size={32} color={NAVY.ink} />
			<Strip x={1300} y={440} at={also} size={44}>W = E × d</Strip>
			<HandTag x={1560} y={470} text="force × distance" at={also + 16} size={30} color={AMBER.ink} marks={[{kind: 'arrow', from: [1500, 410], to: [1520, 330], bend: 0.3}]} markAt={also + 24} />
			<div style={{position: 'absolute', left: 1300, top: 540, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={vEd} ageAt={eVd} size={52} oldSize={40}>V = Ed</Row>
				<Row at={eVd} size={60}><AnswerBox at={eVd + 12}><span style={{color: BLUE.ink}}>E = V/d</span></AnswerBox></Row>
			</div>
			<Chip x={1300} y={760} at={eVd + 40} size={32} border={BLUE.stroke} color={BLUE.ink}>units: V m⁻¹ = N C⁻¹</Chip>
			<HandTag x={g.x1 + 60} y={g.yBot - 40} text="same V, double d: E halves" at={cap(id, wider + 44)} size={32} color={BLUE.ink} />
		</>
	);
};

// ---------- 4. a field from real numbers ----------
const PX_CM = 60;
const G4 = (d: number): PG => ({x1: 540, x2: 1240, yTop: 620, yBot: 620 + d * 100 * PX_CM});
const S4: SupplyAt = {x: 96, y: 640, w: 360};
export const S04: React.FC = () => {
	const id = 'field-numbers';
	const f = useCurrentFrame();
	const tryIt = cue(id, 'Try it with real numbers'), two = cue(id, 'Two plates two centimetres'), over = cue(id, "That's a hundred volts over"), five = cue(id, 'which is five thousand volts'), dbl = cue(id, 'Double the voltage'), ten = cue(id, 'to ten thousand'), keep = cue(id, 'Keep a hundred volts'), move = cue(id, 'move the plates four'), halves = cue(id, 'and it halves');
	const V = kf(f, mono([[dbl, V1], [dbl + 40, V2], [keep, V2], [keep + 30, V1]]));
	const d = kf(f, mono([[move, D1], [move + 40, D2]]));
	const E = V / d;
	const g = G4(d);
	const knob = (V - V1) * 0.9;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={tryIt} size={34}>Find E between the plates.</Strip>
			<Strip x={760} y={176} at={tryIt + 8} size={36} border={BLUE.stroke} color={BLUE.ink}>E = V/d</Strip>
			<Givens x={96} y={256} w={560} at={two} lines={['V = 100 V', 'd = 2.0 cm = 0.020 m']} />
			<HandTag x={130} y={410} text="cm → m first" at={over + 10} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: 378, cy: 320, rx: 74, ry: 26}]} markAt={over} />
			<div style={{position: 'absolute', left: 760, top: 250, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={over} ageAt={dbl} size={44} oldSize={34}>E = 100 / 0.020</Row>
				<Row at={five} ageAt={dbl} size={48} oldSize={36}>&nbsp;&nbsp;= <AnswerBox at={five + 16}><span style={{color: BLUE.ink}}>{sci(E1, 1)} V m⁻¹ (downwards)</span></AnswerBox></Row>
				<Row at={ten} ageAt={keep} size={46} oldSize={36}>200 V: <AnswerBox at={ten + 12}><span style={{color: BLUE.ink}}>E = {sci(E2, 1)} V m⁻¹</span></AnswerBox></Row>
				<Row at={halves} size={46}>d = 0.040 m: <AnswerBox at={halves + 12}><span style={{color: BLUE.ink}}>E = {sci(E3, 1)} V m⁻¹</span></AnswerBox></Row>
			</div>
			<HandTag x={1620} y={420} text="× 2" at={ten + 10} size={36} color={BLUE.ink} />
			<HandTag x={1620} y={500} text="÷ 2" at={cap(id, halves + 10)} size={36} color={BLUE.ink} />
			<FrameSvg>
				<Stage g={g} sup={S4} reading={`${Math.round(V)} V`} knobDeg={knob} density={E / E1} step={130} />
				<Slider x={1300} y={880} w={420} value={(d - 0.01) / 0.04} color={NAVY.stroke} label="gap d" ticks={[[0.25, '2.0 cm'], [0.75, '4.0 cm']]} opacity={prog(f, move - 20, 12)} />
			</FrameSvg>
			<Readouts x={1300} y={600} w={520} size={48} at={over} rows={[
				{label: 'V', value: `${Math.round(V)} V`, color: NAVY.ink},
				{label: 'd', value: `${(d * 100).toFixed(1)} cm`, color: NAVY.ink},
				{label: 'E', value: `${sci(E, 1)} V m⁻¹`, color: BLUE.ink},
			]} />
		</>
	);
};

// ---------- 5. the force depends on the sign of the charge ----------
export const GC: PG = {x1: 540, x2: 1260, yTop: 300, yBot: 620};
export const SC: SupplyAt = {x: 96, y: 660, w: 360};
export const S05: React.FC = () => {
	const id = 'force-sign';
	const f = useCurrentFrame();
	const put = cue(id, 'Now put a charge'), fqe = cue(id, 'F equals q E'), pos = cue(id, 'For a positive charge'), negPlate = cue(id, 'towards the negative plate'), neg = cue(id, 'For a negative charge'), posPlate = cue(id, 'towards the positive plate'), slip = cue(id, 'A common slip'), doesnt = cue(id, "It doesn't"), arrows = cue(id, 'The arrows show the push'), opp = cue(id, 'so the electron is pushed');
	const pz = usePulse(opp, 30);
	const my = (GC.yTop + GC.yBot) / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={GC} sup={SC} reading={`${V1} V`} />
				<g opacity={prog(f, put, 12)}><Particle cx={720} cy={my} sign="+" r={26} /></g>
				{f >= negPlate - 10 ? <VecArrow x={720} y={my + 32} dx={0} dy={110 + 14 * pz} color={AMBER.stroke} width={8 + 3 * pz} head={22} at={negPlate - 10} /> : null}
				<g opacity={prog(f, neg, 12)}><Particle cx={1080} cy={my} sign="−" r={26} /></g>
				{f >= posPlate - 10 ? <VecArrow x={1080} y={my - 32} dx={0} dy={-110 - 14 * pz} color={AMBER.stroke} width={8 + 3 * pz} head={22} at={posPlate - 10} /> : null}
			</FrameSvg>
			<Lbl x={760} y={my - 40} at={Math.min(put, pos)} color={INK} size={30}>proton</Lbl>
			<Lbl x={1120} y={my + 60} at={neg} color={INK} size={30}>electron</Lbl>
			<HandTag x={760} y={my + 110} text="+ : with E" at={negPlate + 6} size={32} color={AMBER.ink} />
			<HandTag x={1120} y={my - 120} text="− : against E" at={posPlate + 6} size={32} color={AMBER.ink} />
			<Strip x={1320} y={190} at={fqe} size={52} border={AMBER.stroke} color={AMBER.ink}>F = qE</Strip>
			<HandTag x={1320} y={320} text="charge × field" at={fqe + 20} size={30} color={AMBER.ink} />
			<CrossedChip x={1300} y={400} at={slip} crossAt={doesnt + 6} size={30} caption="it goes the other way">electron goes with the arrows</CrossedChip>
			<Strip x={1320} y={620} at={arrows} size={34} w={500} border={BLUE.stroke} color={BLUE.ink}>field arrows = push on a + charge</Strip>
			<Chip x={540} y={720} at={cap(id, opp + 6)} size={34} border={AMBER.stroke} color={AMBER.ink}>|F| equal, directions opposite</Chip>
		</>
	);
};
