// Scenes 1 to 5: the hook (last time's bench: the magnet lifted onto the coil's axis and pushed in slowly, held,
// pushed in fast, pulled out, with the needle driven by the induction engine), changing flux (a cutaway coil with the
// magnet's traced field lines threading it and a live count), flux linkage (the spread coil swapped for the close-wound
// one, two emf bars, turns adding like cells), Faraday's law (the working side), and the linkage-time graph with the
// emf bars under it (gradient triangles, a riding dot and live readouts).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CellsRow, CoilTurns, MagnetAt, MagnetField, crossesPlane, magnetH, magnetLines, turnX, Bar} from '../../physics/electromagnetism/induction';
import {inductionAt, runInduction} from '../../sims/induction';
import {M6V09FinalFrame} from '../phys-y12-m6-v09/s3';
import {GRAPH, HEAD, HEAD_SIZE, cap, cue, dur, holdIf, linkageAt, mono} from './common';
import {AX, Bench, BenchInset, CO, CardRect, FIELD1, Lbl, NAVY, PIVOT, ROSE, Ring, U0, arrowTagAt, fx, useNeedle, AMBER} from './parts';

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const galv = cue(id, 'galvanometer'), reads = cue(id, 'needle reads zero'), think = cue(id, 'Now think about pushing'), pred = cue(id, 'Make your prediction'), slow = cue(id, 'A slow push'), stops = cue(id, 'When the magnet stops'), zero = cue(id, 'drops back to zero'), fast = cue(id, 'A fast push'), bigger = cue(id, 'much bigger swing'), out = cue(id, 'And pulling it out'), way = cue(id, 'the other way'), only = cap(id, cue(id, 'So the needle only moves'));
	const h = holdIf(id);
	const keys = mono([[0, U0], [slow + 6, U0], [stops + 24, 250], [fast + 12, 250], [fast + 13, U0], [bigger - 14, U0], [bigger + 8, 250], [out + 8, 250], [way + 4, -250]], 1);
	const needle = useNeedle(id, keys, dur(id), 11, [[fast + 6, bigger - 13]]);
	if (f < 1) return <M6V09FinalFrame />;
	const uN = kf(f, keys);
	const magOp = 1 - prog(f, fast + 2, 10) + prog(f, fast + 14, 10);
	const moving = (f > slow + 6 && f < stops + 24) || (f > bigger - 14 && f < bigger + 8) || (f > out + 8 && f < way + 4);
	const dirOut = f > out;
	const tagP = arrowTagAt(uN);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 16), clipPath: 'inset(150px 0 0 0)'}}><M6V09FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 1, 16)}>
					<Bench uN={uN} needle={needle} lift={prog(f, 1, 20)} block={1 - prog(f, 1, 16)} magnet={magOp} arrow={moving ? 1 : 0} arrowDir={dirOut ? -1 : 1} />
				</g>
				<Ring cx={PIVOT[0]} cy={PIVOT[1] - 110} rx={70} ry={56} at={reads} color={INK} />
				<Ring cx={PIVOT[0]} cy={PIVOT[1] - 110} rx={74} ry={60} at={zero + 10} color={INK} seed={5} />
			</FrameSvg>
			<HandTag x={1150} y={440} text="galvanometer: needle swings either way from zero" at={galv + 10} out={think} size={32} color={INK} anchor="middle" />
			<HandTag x={tagP[0]} y={tagP[1]} text="slow" at={slow + 8} out={stops + 24} size={40} color={AMBER.ink} />
			<HandTag x={tagP[0]} y={tagP[1]} text="fast" at={bigger - 14} out={bigger + 10} size={40} color={AMBER.ink} />
			<HandTag x={PIVOT[0] + 160} y={PIVOT[1] - 200} text="still: zero" at={zero + 10} out={fast} size={36} color={INK} />
			<HandTag x={PIVOT[0] - 260} y={PIVOT[1] - 210} text="other way" at={out + 30} size={38} color={ROSE.ink} marks={[{kind: 'arrow', from: [PIVOT[0] + 40, PIVOT[1] - 150], to: [PIVOT[0] - 60, PIVOT[1] - 150], bend: -0.5}]} markAt={out + 34} />
			{['slow', 'fast', 'the same'].map((c, i) => <Chip key={c} x={96} y={250 + i * 76} at={pred + i * 6} size={32} w={260}>{c}{i === 1 && f >= bigger + 8 ? ' ✓' : ''}</Chip>)}
			<Row at={only} size={44} style={{position: 'absolute', left: 96, top: 870}}><AnswerBox at={only + 10}>only while the magnet moves</AnswerBox></Row>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={300} r={52} ringFrom={h.startFrame - pred < 150 ? pred : h.startFrame - 30} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. changing flux, induced emf ----------
const CW = {x1: 700, x2: 1180, cy: 600, r: 150, n: 12};
const ML = 400;
const LINES = magnetLines(ML, 9, magnetH(ML) * 0.9, 3.0);
const PLANE = (CW.x1 + CW.x2) / 2;
export const S02: React.FC = () => {
	const id = 'changing-flux';
	const f = useCurrentFrame();
	const closer = cue(id, 'As the magnet comes closer'), more = cue(id, 'more of its field passes'), push = cue(id, 'A changing flux pushes charges'), emf = cue(id, 'induced emf'), volt = cue(id, 'just like a voltage'), drives = cue(id, 'the emf drives a current'), stops = cue(id, 'When the magnet stops'), drops = cue(id, 'so the emf drops to zero'), plenty = cap(id, cue(id, 'even though plenty'));
	const xm = kf(f, mono([[closer, 160], [stops + 10, 640]]), false);
	const moving = f > closer && f < stops + 10;
	const lit = LINES.filter(l => crossesPlane(l, xm, PLANE, CW.r)).length;
	const keysInset = mono([[closer, U0], [stops + 10, 200]]);
	const needle = useNeedle(id, keysInset, dur(id), 30);
	const uInset = kf(f, keysInset, false);
	const phase = moving ? (f - closer) * 2.2 : (stops + 10 - closer) * 2.2;
	const flow = moving ? prog(f, drives, 12) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v10-cut"><rect x={40} y={170} width={1240} height={760} /></clipPath></defs>
				<g clipPath="url(#v10-cut)">
					<CoilTurns x1={CW.x1} x2={CW.x2} cy={CW.cy} r={CW.r} n={CW.n} half="back" />
					<MagnetField lines={LINES} x={xm} y={CW.cy} color={FIELD1} lit={{planeX: PLANE, r: CW.r, color: '#2f3d4c'}} />
					<MagnetAt cx={xm} cy={CW.cy} w={ML} northRight letterSize={40} />
					<CoilTurns x1={CW.x1} x2={CW.x2} cy={CW.cy} r={CW.r} n={CW.n} half="front" />
					{flow > 0.001 ? <g opacity={flow}>{Array.from({length: CW.n}, (_, i) => {
						const x = turnX(CW.x1, CW.x2, CW.n, i), rx = CW.r * 0.26;
						return [0, 0.5].map(o => { const s = 1 - (((phase / 120 + o + i * 0.13) % 1) + 1) % 1; return <circle key={`${i}-${o}`} cx={x - rx * Math.sin(Math.PI * s)} cy={CW.cy - CW.r * Math.cos(Math.PI * s)} r={8} fill={ROSE.stroke} stroke={CARD} strokeWidth={2} />; });
					})}</g> : null}
				</g>
				<BenchInset x={1330} y={170} k={0.28} uN={uInset} needle={needle} flow={flow} flowPhase={phase} />
				<Ring cx={1560} cy={670} rx={250} ry={70} at={more + 20} color={FIELD1} />
			</FrameSvg>
			<Lbl x={CW.x1 + 20} y={CW.cy + CW.r + 60} color={INK} size={30}>coil (cut away)</Lbl>
			<Readouts x={1330} y={620} w={460} size={52} at={more} rows={[{label: 'lines through the coil', value: String(lit), color: '#2f3d4c'}]} />
			<HandTag x={1350} y={790} text="Φ rising" at={more + 20} out={stops + 10} size={36} color={FIELD1} />
			<HandTag x={1350} y={790} text="Φ large, steady" at={stops + 20} size={36} color={FIELD1} />
			<HandTag x={300} y={880} text="push on charges" at={push + 10} size={36} color={ROSE.ink} marks={[{kind: 'arrow', from: [560, 860], to: [CW.x1 - 30, CW.cy + 60], bend: 0.3}]} markAt={push + 14} />
			<Chip x={1330} y={360} at={emf} size={30} w={490} color={ROSE.ink} border={ROSE.stroke}>induced emf ε: produced by a changing flux</Chip>
			<Chip x={1330} y={470} at={volt} size={30} w={490} color={ROSE.ink} border={ROSE.stroke}>energy per coulomb (V), not a force</Chip>
			<CrossedChip x={96} y={190} at={stops} crossAt={plenty} size={32} caption="a big steady flux gives nothing">big flux → emf</CrossedChip>
			<Row at={drops} size={40} style={{position: 'absolute', left: 1330, top: 860}}><AnswerBox at={drops + 10}>large Φ, not changing: no emf</AnswerBox></Row>
		</>
	);
};

// ---------- 3. more turns: flux linkage ----------
const K3 = 0.74, OX3 = 40 - 60 * K3, OY3 = 190 - 470 * K3;
const toS = (p: [number, number]): [number, number] => [OX3 + p[0] * K3, OY3 + p[1] * K3];
export const S03: React.FC = () => {
	const id = 'flux-linkage';
	const f = useCurrentFrame();
	const twice = cue(id, 'twice as many turns'), same = cue(id, 'The same magnet'), emf = cue(id, 'gives twice the emf'), each = cue(id, 'Each turn has the same flux'), adds = cue(id, 'adds its own emf'), cells = cue(id, 'like cells joined in series'), what = cue(id, 'So what really matters'), times = cue(id, 'times the number of turns'), link = cue(id, "That's called the flux linkage"), one = cue(id, 'Flux is what passes'), every = cap(id, cue(id, 'Flux linkage counts it'));
	const swap = prog(f, twice + 10, 20);
	const keys = mono([[0, U0], [same + 4, U0], [emf + 10, 250]]);
	const needle = useNeedle(id, keys, dur(id), 22);
	const uN = kf(f, keys);
	const run = Math.min(1, Math.max(0, (f - same - 4) / (emf + 6 - same - 4)));
	const glowAt = [adds, adds + 14, adds + 28];
	const along = (u: number) => toS(AX.along(u));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${OX3} ${OY3}) scale(${K3})`}>
					<Bench uN={uN} needle={needle} swap={swap} arrow={f > same + 4 && f < emf + 10 ? 1 : 0} />
				</g>
				{glowAt.map((a, i) => { const p = along(70 + i * 70); return f >= a ? <ellipse key={i} cx={p[0]} cy={p[1]} rx={12} ry={AX.r * K3 * 1.15} fill="none" stroke={ROSE.stroke} strokeWidth={6} transform={`rotate(${AX.deg} ${p[0]} ${p[1]})`} opacity={prog(f, a, 8)} /> : null; })}
				<g opacity={prog(f, cells, 12)}><CellsRow x={140} y={660} n={3} gap={90} lit={f >= cells + 20 ? 3 : f >= cells + 10 ? 2 : 1} color={ROSE.stroke} /></g>
				{/* emf bars: 50 turns (from the same push) and 100 turns (live) */}
				<CardRect x={1420} y={180} w={400} h={470} />
				<Bar x={1470} base={560} w={110} h={320} frac={0.4} color={ROSE.stroke} soft="#f6dce7" label="N = 50" value="ε" />
				<Bar x={1650} base={560} w={110} h={320} frac={0.8 * run} color={ROSE.stroke} soft="#f6dce7" label="N = 100" value={run > 0.98 ? '2ε' : ''} opacity={prog(f, same, 12)} />
			</FrameSvg>
			{(() => { const p = toS([CO.x + CO.w / 2, CO.y - 40]); return <><Lbl x={p[0]} y={p[1]} color={NAVY.ink} size={40} anchor="middle">{swap > 0.5 ? 'N = 100' : 'N = 50'}</Lbl><Lbl x={p[0]} y={p[1] - 46} color={INK_SOFT} size={26} anchor="middle">not every turn drawn</Lbl></>; })()}
			<Lbl x={1440} y={220} color={ROSE.ink} size={30}>induced emf, same push</Lbl>
			<Row at={emf} size={44} style={{position: 'absolute', left: 1450, top: 670}}><AnswerBox at={emf + 10}>ε × 2</AnswerBox></Row>
			<HandTag x={1110} y={530} text="needle illustrative: current also depends on the circuit's resistance" at={emf + 20} out={times} size={30} color={INK_SOFT} anchor="middle" />
			{glowAt.map((a, i) => { const p = along(70 + i * 70); return <Lbl key={i} x={p[0] - 6} y={p[1] - AX.r * K3 - 30} at={a} out={link} color={ROSE.ink} size={30} anchor="middle">+ε{['₁', '₂', '₃'][i]}</Lbl>; })}
			<HandTag x={420} y={760} text="emfs add, like cells" at={cells + 10} out={link} size={36} color={ROSE.ink} />
			<HandTag x={(along(70)[0] + along(210)[0]) / 2} y={along(70)[1] - AX.r * K3 - 90} text="× N turns" at={what} out={link} size={38} color={NAVY.ink} anchor="middle" marks={[{kind: 'underline', x1: along(50)[0], x2: along(230)[0], y: along(140)[1] - AX.r * K3 - 50}]} markAt={what + 4} />
			<Chip x={96} y={560} at={each} out={adds} size={32} w={700}>each turn: the same flux Φ</Chip>
			<Row at={link} size={52} style={{position: 'absolute', left: 96, top: 780}}><AnswerBox at={link + 10}>flux linkage = NΦ</AnswerBox></Row>
			<Row at={one} size={34} style={{position: 'absolute', left: 620, top: 790}}>Φ: through one turn (Wb)</Row>
			<Row at={every} size={34} style={{position: 'absolute', left: 620, top: 850}}>NΦ: through all N turns (Wb, or Wb-turn)</Row>
		</>
	);
};

// ---------- 4. Faraday's law ----------
export const S04: React.FC = () => {
	const id = 'faraday-law';
	const f = useCurrentFrame();
	const law = cue(id, "you get Faraday's law"), words = cue(id, 'The induced emf is minus N'), takes = cue(id, 'the change takes'), eps = cue(id, 'Epsilon equals'), big = cue(id, 'A bigger change'), turns = cue(id, 'more turns'), short = cue(id, 'a shorter time'), minus = cue(id, 'The minus sign'), next = cue(id, "next video's job"), weber = cap(id, cue(id, 'one weber per second'));
	const keys = mono([[0, U0], [law, U0], [law + 100, 250], [words + 10, 250], [eps, U0], [short, U0], [short + 16, 250]]);
	const needle = useNeedle(id, keys, dur(id), 12);
	const uN = kf(f, keys);
	const moving = (f > law && f < law + 100) || (f > words + 10 && f < eps) || (f > short && f < short + 16);
	const arrows: [number, string, string, string, string][] = [[big, 'ΔΦ ↑', 'bigger change', FIELD1, '#2f3d4c'], [turns, 'N ↑', 'more turns', NAVY.stroke, NAVY.ink], [short, 'Δt ↓', 'less time', INK, INK]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchInset x={60} y={170} k={0.36} uN={uN} needle={needle} arrow={moving ? 1 : 0} />
				{arrows.map(([a], i) => f >= a ? <Arrow2 key={i} from={[420, 760 + i * 70]} to={[560, 760 + i * 70]} color={INK} width={6} head={20} opacity={prog(f, a, 10)} /> : null)}
			</FrameSvg>
			<Chip x={780} y={190} at={law} size={34} w={1040}>Faraday's law: the emf comes from how fast the flux linkage changes</Chip>
			<Row at={words} ageAt={takes} size={40} oldSize={32} style={{position: 'absolute', left: 96, top: 420}}>induced emf = −N × (change in flux) ÷ (time taken)</Row>
			<Row at={takes} size={64} style={{position: 'absolute', left: 96, top: 490}}><AnswerBox at={takes + 12}>ε = <MarkSpan kind="circle" at={minus} color={ROSE.stroke} width={5}>−</MarkSpan>N ΔΦ / Δt</AnswerBox></Row>
			<HandTag x={150} y={660} text="direction: next video" at={minus + 16} size={36} color={ROSE.ink} />
			<div style={{position: 'absolute', left: 760, top: 500, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={eps} size={34} style={{color: NAVY.ink}}>N: number of turns</Row>
				<Row at={eps + 8} size={34} style={{color: '#2f3d4c'}}>ΔΦ: change in flux through one turn (Wb)</Row>
				<Row at={eps + 16} size={34}>Δt: time taken (s)</Row>
			</div>
			{arrows.map(([a, lab, tag, , ink], i) => <React.Fragment key={i}>
				<Lbl x={300} y={772 + i * 70} at={a} color={ink} size={44} anchor="middle">{lab}</Lbl>
				<Lbl x={590} y={772 + i * 70} at={a + 4} color={ROSE.ink} size={44}>ε ↑</Lbl>
				<HandTag x={720} y={760 + i * 70} text={tag} at={a + 8} size={36} color={ink} />
			</React.Fragment>)}
			<Ring cx={300} cy={760 + 140} rx={70} ry={34} at={short + 12} color={INK} />
			<Chip x={1260} y={780} at={next} size={30} w={560} color={INK_SOFT}>the minus sign: which way the emf pushes</Chip>
			<Row at={weber} size={52} style={{position: 'absolute', left: 1260, top: 650}}><AnswerBox at={weber + 10}>1 Wb s⁻¹ = 1 V</AnswerBox></Row>
		</>
	);
};

// ---------- 5. a graph: steepness, not height ----------
const G = {x0: 260, x1: 1180, yTop: 230, yBot: 550, t1: 0.06, vMin: -0.02, vMax: 0.06};
const gx = (t: number) => G.x0 + (t / G.t1) * (G.x1 - G.x0);
const gy = (v: number) => G.yBot - ((v - G.vMin) / (G.vMax - G.vMin)) * (G.yBot - G.yTop);
const EB = {zero: 790, k: 14};
const runG = runInduction({source: {kind: 'custom', flux: linkageAt}, turns: 1, duration: 0.06, steps: 600});
const emfMid = [0.01, 0.035, 0.055].map(t => inductionAt(runG, t).emf);
export const S05: React.FC = () => {
	const id = 'graph';
	const f = useCurrentFrame();
	const rises = cue(id, 'It rises steadily'), grad = cue(id, "That's a gradient"), volts = cue(id, 'three point zero volts'), flat = cue(id, 'Then it stays flat'), zg = cue(id, 'A flat line has zero gradient'), ez = cue(id, 'so the emf is zero'), large = cue(id, 'even though the linkage is large'), fall = cue(id, 'Finally it falls'), just = cue(id, 'in just zero point zero one zero'), steeper = cue(id, "That's steeper"), eight = cue(id, 'eight point zero volts'), opp = cue(id, 'in the opposite direction'), set = cap(id, cue(id, 'The emf is set by how steep'));
	const tNow = kf(f, mono([[rises, 0], [rises + 140, 0.02], [flat, 0.02], [flat + 60, 0.05], [fall, 0.05], [fall + 60, 0.06]]), false);
	const seg = f < flat ? 0 : f < fall ? 1 : 2;
	const path = [0, 0.005, 0.01, 0.015, 0.02, 0.03, 0.04, 0.05, 0.055, 0.06].filter(t => t <= tNow).concat([tNow]).map(t => `${gx(t)},${gy(linkageAt(t))}`).join(' ');
	const gradNow = seg === 0 ? GRAPH.grad[0] : seg === 1 ? GRAPH.grad[1] : GRAPH.grad[2];
	const emfNow = emfMid[seg];
	const shown = f >= rises;
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - set) / 40)));
	const barW = (a: number, b: number) => [gx(a) + 6, gx(b) - gx(a) - 12] as const;
	const bars: [number, number, number, number][] = [[0, 0.02, emfMid[0], volts], [0.02, 0.05, emfMid[1], ez], [0.05, 0.06, emfMid[2], eight]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 0, 14)}>
					{[0.02, 0.04, 0.06].map(v => <line key={v} x1={G.x0} x2={G.x1} y1={gy(v)} y2={gy(v)} stroke="#e4dccb" strokeWidth={2} />)}
					<line x1={G.x0} y1={gy(0)} x2={G.x1 + 30} y2={gy(0)} stroke={INK} strokeWidth={4} />
					<line x1={G.x0} y1={G.yBot + 10} x2={G.x0} y2={G.yTop - 20} stroke={INK} strokeWidth={4} />
					<line x1={G.x0} y1={EB.zero} x2={G.x1 + 30} y2={EB.zero} stroke={INK} strokeWidth={4} />
					<line x1={G.x0} y1={EB.zero + 70} x2={G.x0} y2={EB.zero - 140} stroke={INK} strokeWidth={4} />
					{[0.02, 0.05].map(t => <line key={t} x1={gx(t)} y1={G.yTop - 10} x2={gx(t)} y2={EB.zero + 60} stroke="#cfc6b4" strokeWidth={2} strokeDasharray="6 8" />)}
				</g>
				{f >= set ? <line x1={gx(0.02)} y1={gy(0.06)} x2={gx(0.05)} y2={gy(0.06)} stroke="#2f3d4c" strokeWidth={14 + 10 * pulse} strokeLinecap="round" opacity={0.35} /> : null}
				{shown ? <polyline points={path} fill="none" stroke="#2f3d4c" strokeWidth={7} strokeLinejoin="round" strokeLinecap="round" /> : null}
				{shown ? <circle cx={gx(tNow)} cy={gy(linkageAt(tNow))} r={13} fill="#2f3d4c" stroke={CARD} strokeWidth={3} /> : null}
				{/* gradient triangles */}
				<g opacity={prog(f, grad, 12)}>
					<path d={`M${gx(0)},${gy(0)} L${gx(0.02)},${gy(0)} L${gx(0.02)},${gy(0.06)}`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				</g>
				<g opacity={prog(f, just, 12)}>
					<path d={`M${gx(0.05)},${gy(0.06)} L${gx(0.06)},${gy(0.06)} L${gx(0.06)},${gy(-0.02)}`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				</g>
				{bars.map(([a, b, e, at], i) => { const [x, w] = barW(a, b); const hgt = e * EB.k * prog(f, at, 16); return f >= at ? <rect key={i} x={x} y={Math.min(EB.zero, EB.zero - hgt)} width={w} height={Math.max(6, Math.abs(hgt))} fill={ROSE.stroke} opacity={0.9} rx={4} /> : null; })}
				<Ring cx={(gx(0.02) + gx(0.05)) / 2} cy={gy(0.06)} rx={(gx(0.05) - gx(0.02)) / 2 + 30} ry={44} at={zg + 10} color={FIELD1} />
			</FrameSvg>
			<Lbl x={G.x0 - 16} y={gy(0.06) + 10} at={0} color={INK} size={28} anchor="end">0.060</Lbl>
			<Lbl x={G.x0 - 16} y={gy(0) + 10} at={0} color={INK} size={28} anchor="end">0</Lbl>
			<Lbl x={G.x0 - 16} y={gy(-0.02) + 10} at={0} color={INK} size={28} anchor="end">−0.020</Lbl>
			<Lbl x={G.x0 + 14} y={G.yTop - 26} at={0} color="#2f3d4c" size={30}>NΦ (Wb)</Lbl>
			<Lbl x={G.x1 + 40} y={gy(0) + 10} at={0} color={INK} size={30}>t (s)</Lbl>
			{[0.02, 0.04, 0.06].map(t => <Lbl key={t} x={gx(t)} y={gy(0) + 40} at={0} color={INK} size={28} anchor="middle">{t.toFixed(3)}</Lbl>)}
			<Lbl x={G.x0 + 14} y={EB.zero - 150} at={0} color={ROSE.ink} size={30}>ε (V)</Lbl>
			<Lbl x={G.x0 - 16} y={EB.zero + 10} at={0} color={INK} size={28} anchor="end">0</Lbl>
			<Lbl x={gx(0.01)} y={gy(0) + 80} at={grad} color={INK} size={30} anchor="middle">0.020 s</Lbl>
			<Lbl x={gx(0.02) + 16} y={gy(0.03)} at={grad} color="#2f3d4c" size={30}>0.060 Wb</Lbl>
			<Lbl x={gx(0.055)} y={gy(0.06) - 18} at={just} color={INK} size={30} anchor="middle">0.010 s</Lbl>
			<Lbl x={gx(0.06) + 16} y={gy(0.02)} at={just} color="#2f3d4c" size={30}>−0.080 Wb</Lbl>
			<Lbl x={gx(0.01)} y={EB.zero - emfMid[0] * EB.k + 44} at={volts} color={ROSE.ink} size={32} anchor="middle">{fx(emfMid[0], 1)} V</Lbl>
			<Lbl x={gx(0.055)} y={EB.zero - emfMid[2] * EB.k - 20} at={eight} color={ROSE.ink} size={32} anchor="middle">+{fx(emfMid[2], 1)} V</Lbl>
			<HandTag x={gx(0.035)} y={EB.zero - 40} text="flat: ε = 0" at={ez + 10} size={34} color={ROSE.ink} anchor="middle" />
			<HandTag x={gx(0.035)} y={gy(0.06) - 70} text="flat = 0" at={zg + 14} size={34} color={FIELD1} anchor="middle" />
			<HandTag x={gx(0.035)} y={EB.zero + 70} text="sign: next video" at={volts + 30} size={30} color={INK_SOFT} anchor="middle" />
			<HandTag x={gx(0.045)} y={EB.zero - 150} text="opposite direction" at={opp + 6} size={34} color={ROSE.ink} anchor="end" />
			<Readouts x={1330} y={200} w={490} size={52} at={4} rows={[
				{label: 'ΔNΦ/Δt', value: f < grad ? '…' : fx(gradNow, 1), unit: 'Wb s⁻¹', color: '#2f3d4c'},
				{label: '|ε|', value: f < grad ? '…' : fx(Math.abs(emfNow), 1), unit: 'V', color: ROSE.ink},
			]} />
			<div style={{position: 'absolute', left: 1330, top: 430, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={volts} size={44}><AnswerBox at={volts + 10}>|ε| = 3.0 V</AnswerBox></Row>
				<Row at={eight} size={44}><AnswerBox at={eight + 10}>|ε| = 8.0 V</AnswerBox></Row>
			</div>
			<Chip x={1330} y={640} at={4} out={large} size={30} w={490}>a coil's flux linkage NΦ, changing over time</Chip>
			<CrossedChip x={1330} y={640} at={large} crossAt={steeper} size={30} caption="height is not what counts">highest NΦ → biggest ε</CrossedChip>
			<Row at={set} size={48} style={{position: 'absolute', left: 1330, top: 830}}><AnswerBox at={set + 10}>steepness, not height</AnswerBox></Row>
		</>
	);
};
