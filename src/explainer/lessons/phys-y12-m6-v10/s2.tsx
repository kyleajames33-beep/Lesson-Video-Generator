// Scenes 6 to 8: the worked example (working layout: a short coil face on to the field arrows, the field shrinking to
// zero over Δt, then ten times faster), the sliding rod (top view: crosses, rails, the painted copper rod sliding, the
// enclosed area shading, the swept strip, a speed slider with live readouts on the induction engine's rod emf), and the
// four ways to change the flux (four live panels, the still magnet, the open circuit, the memory card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AidCard, AnswerBox, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CrossRegion, Lead, Slider} from '../../physics/electromagnetism/plates';
import {Rod} from '../../physics/electromagnetism/bench';
import {BatterySymbol, CoilPlate, CoilTurns, FlowDots, MeterSymbol, Rails, ResistorSymbol, SwitchSymbol, coilAxis} from '../../physics/electromagnetism/induction';
import {RotatingCoilView} from '../../sims/induction-views';
import {HEAD, HEAD_SIZE, ROD, WE, cap, cue, dur, mono} from './common';
import {AMBER, BenchInset, CardRect, FIELD1, Givens, Lbl, NAVY, ROSE, Ring, Strip, U0, fx, sci, useNeedle} from './parts';

// ---------- 6. a worked example ----------
export const S06: React.FC = () => {
	const id = 'worked-example';
	const f = useCurrentFrame();
	const calc = cue(id, "Here's a calculation"), first = cue(id, 'First, the flux'), wb = cue(id, 'two point zero times ten to the minus three webers'), reduced = cue(id, 'Now the field is reduced'), change = cue(id, 'so the change in flux'), emfC = cue(id, 'The emf is minus two hundred'), that = cue(id, 'times that change'), two = cue(id, "That's two point zero volts"), faster = cue(id, 'ten times faster'), bigger = cue(id, 'and the emf is ten times bigger'), twenty = cap(id, cue(id, 'twenty volts'));
	const B = kf(f, mono([[reduced, 0.4], [reduced + 60, 0], [faster - 20, 0], [faster - 2, 0.4], [faster + 16, 0.4], [faster + 22, 0]]), false);
	const rows = [0, 1, 2, 3, 4].map(i => 240 + i * 70);
	// mini graph: flux per turn against time, drawn as the field falls (slow change, then the fast one)
	const GX = (t: number) => 170 + (t / 0.2) * 480, GY = (p: number) => 740 - (p / 2.0e-3) * 110;
	const u1 = Math.min(1, Math.max(0, (f - reduced) / 60)), u2 = Math.min(1, Math.max(0, (f - faster - 16) / 6));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={70} y={170} w={620} h={420} />
				<CoilTurns x1={310} x2={450} cy={380} r={150} n={6} half="back" />
				{rows.map(y => B > 0.004 ? <Arrow2 key={y} from={[110, y]} to={[110 + (540 * B) / 0.4, y]} color={FIELD1} width={6} head={20} /> : null)}
				<CoilTurns x1={310} x2={450} cy={380} r={150} n={6} half="front" />
				<CardRect x={70} y={600} w={620} h={185} />
				<line x1={170} y1={740} x2={670} y2={740} stroke={INK} strokeWidth={3} />
				<line x1={170} y1={740} x2={170} y2={615} stroke={INK} strokeWidth={3} />
				{f >= reduced ? <line x1={GX(0)} y1={GY(2e-3)} x2={GX(0.2 * u1)} y2={GY(2e-3 * (1 - u1))} stroke="#2f3d4c" strokeWidth={6} strokeLinecap="round" /> : null}
				{f >= faster + 16 ? <line x1={GX(0)} y1={GY(2e-3)} x2={GX(0.02 * u2)} y2={GY(2e-3 * (1 - u2))} stroke={ROSE.stroke} strokeWidth={6} strokeLinecap="round" /> : null}
			</FrameSvg>
			<Lbl x={680} y={628} color="#2f3d4c" size={28} anchor="end">Φ per turn (× 10⁻³ Wb)</Lbl>
			<Lbl x={160} y={GY(2e-3) + 10} color={INK} size={26} anchor="end">2.0</Lbl>
			<Lbl x={GX(0.2)} y={775} color={INK} size={28} anchor="middle">0.20 s</Lbl>
			<Lbl x={GX(0.02) + 10} y={775} at={faster} color={ROSE.ink} size={28} anchor="middle">0.020 s</Lbl>
			<Lbl x={380} y={565} color={NAVY.ink} size={32} anchor="middle">N = 200, A = 5.0 × 10⁻³ m²</Lbl>
			<Lbl x={660} y={220} color={FIELD1} size={34} anchor="end">B = {fx(B, 2)} T</Lbl>
			<HandTag x={100} y={215} text="face on to the field"  at={calc + 20} out={reduced} size={32} color={INK} />
			<HandTag x={100} y={215} text="field shrinking"  at={reduced + 4} out={reduced + 90} size={32} color={FIELD1} />
			<Strip x={730} y={170} at={calc} size={30} w={1100}>Find the average induced emf.</Strip>
			<Strip x={730} y={238} at={calc + 8} size={32} border={INK}>ε = −N ΔΦ / Δt</Strip>
			<Givens x={730} y={310} w={1090} at={calc + 16} size={30} lines={[
				<>N = 200 turns, A = 5.0 × 10⁻³ m²</>,
				<>B = 0.40 T, at right angles to the coil</>,
				<>B → 0 in Δt = {f >= faster ? <MarkSpan kind="circle" at={faster} color={NAVY.stroke}>0.020 s</MarkSpan> : '0.20 s'}</>,
			]} />
			<div style={{position: 'absolute', left: 730, top: 470, display: 'flex', flexDirection: 'column', gap: 8, width: 1100}}>
				<Row at={first} ageAt={change} size={44} oldSize={34}>Φᵢ = BA = 0.40 × 5.0 × 10⁻³ = <AnswerBox at={wb} tick={false}>{sci(WE.phiI, 1)} Wb</AnswerBox></Row>
				<Row at={change} ageAt={emfC} size={44} oldSize={34}>ΔΦ = 0 − {sci(WE.phiI, 1)} = {sci(WE.dPhi, 1)} Wb</Row>
				<Row at={emfC} ageAt={bigger} size={44} oldSize={34}>ε = <MarkSpan kind="circle" at={two + 20} color={ROSE.stroke}>−</MarkSpan>200 × (<MarkSpan kind="circle" at={two + 26} color={ROSE.stroke}>−</MarkSpan>2.0 × 10⁻³) / 0.20 = <AnswerBox at={two}>{fx(WE.e1, 1)} V</AnswerBox></Row>
				<Row at={bigger} size={44}>ε = −200 × (−2.0 × 10⁻³) / 0.020 = <AnswerBox at={twenty}>{fx(WE.e2, 0)} V</AnswerBox></Row>
			</div>
			<Readouts x={70} y={792} w={620} size={40} at={calc} rows={[{label: 'B', value: fx(B, 2), unit: 'T', color: FIELD1}, {label: 'Φ per turn', value: B < 0.004 ? '0' : sci(B * WE.A, 1), unit: 'Wb', color: '#2f3d4c'}]} />
			<HandTag x={1500} y={880} text="minus × minus: positive" at={two + 30} out={bigger} size={34} color={ROSE.ink} />
			<HandTag x={1500} y={880} text="10 × faster → 10 × emf" at={twenty + 6} size={36} color={INK} />
			<CrossedChip x={730} y={790} at={that} crossAt={that + 40} size={30} caption="× 200 turns">no N: ε = 2.0 × 10⁻³ / 0.20 = {fx(WE.slip, 3)} V</CrossedChip>
		</>
	);
};

// ---------- 7. a sliding rod ----------
const R = {x1: 200, x2: 1220, y1: 360, y2: 640};
const RY = (R.y1 + R.y2) / 2;
const PXF = 0.21; // rod screen speed per (m/s) per frame: slow motion, not to scale
export const S07: React.FC = () => {
	const id = 'sliding-rod';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a metal rod"), loop = cue(id, 'make a closed loop'), slides = cue(id, 'As the rod slides'), grows = cue(id, 'so the flux through it grows'), say = cue(id, 'Say the field is'), every = cue(id, 'Every second'), sq = cue(id, 'square metres'), so = cue(id, 'So the flux grows by'), emfC = cue(id, "That's an emf of"), stop = cap(id, cue(id, 'Stop the rod'));
	const vKeys = mono([[0, 0], [slides, 0], [slides + 20, 2], [emfC + 34, 2], [emfC + 50, 1], [emfC + 66, 4], [stop - 2, 4], [stop + 8, 0]]);
	const v = kf(f, vKeys, false);
	let x = 430;
	for (let k = slides; k < f; k++) x += PXF * kf(k, vKeys, false);
	const rodX = Math.min(x, R.x2 - 40);
	const eps = ROD.at(v);
	const flow = v > 0.05 ? prog(f, emfC, 12) : 0;
	const strip = prog(f, sq - 20, 14) * (1 - prog(f, emfC + 30, 12));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={130} y={240} w={1160} h={520} step={80} />
				<Rails x1={R.x1} x2={R.x2} y1={R.y1} y2={R.y2} rodX={rodX} shade={prog(f, grows, 16)} outline={prog(f, loop, 12) * (1 - prog(f, grows, 12))}>
					<rect x={R.x1 - 30} y={R.y1 + 20} width={60} height={R.y2 - R.y1 - 40} fill={CARD} />
					<ResistorSymbol x={R.x1} y={R.y1 + 75} vertical />
					<MeterSymbol x={R.x1} y={R.y2 - 75} r={34} />
					<line x1={R.x1} y1={R.y1} x2={R.x1} y2={R.y1 + 40} stroke={INK} strokeWidth={5} />
				</Rails>
				{strip > 0.001 ? <g opacity={strip}>
					<rect x={rodX} y={R.y1} width={240} height={R.y2 - R.y1} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 8" />
				</g> : null}
				<FlowDots pts={[[rodX, R.y2], [rodX, R.y1], [R.x1, R.y1], [R.x1, R.y2], [rodX, R.y2]]} phase={(f - emfC) * (1 + v)} color={ROSE.stroke} r={9} gap={60} opacity={flow} />
				<Rod cx={rodX} cy={RY} len={420} deg={90} />
				{v > 0.05 ? <Arrow2 from={[rodX + 40, R.y1 - 60]} to={[rodX + 70 + 40 * v, R.y1 - 60]} color={AMBER.stroke} width={9} head={26} /> : null}
				<Ring cx={(R.x1 + rodX) / 2} cy={RY} rx={(rodX - R.x1) / 2 + 30} ry={180} at={grows + 20} color={NAVY.stroke} />
				<Slider x={300} y={850} w={760} value={v / 4} color={AMBER.stroke} ticks={[[0, '0'], [0.25, '1.0'], [0.5, '2.0'], [1, '4.0']]} opacity={prog(f, say, 14)} />
			</FrameSvg>
			<Lbl x={150} y={235} color={FIELD1} size={30}>B into the screen</Lbl>
			<Lbl x={rodX + 50} y={R.y1 - 72} color={AMBER.ink} size={34}>{v > 0.05 ? 'v' : ''}</Lbl>
			<Lbl x={rodX - 36} y={RY + 12} at={say} color={NAVY.ink} size={30} anchor="end">0.20 m</Lbl>
			<Lbl x={rodX + 120} y={R.y2 + 48} at={sq - 20} out={emfC + 30} color={NAVY.ink} size={30} anchor="middle">2.0 m in 1 s (not to scale)</Lbl>
			<Lbl x={300} y={820} at={say} color={AMBER.ink} size={30}>speed v (m s⁻¹)</Lbl>
			<HandTag x={R.x1 + 40} y={R.y2 + 70} text="loop grows" at={grows + 20} out={every} size={36} color={NAVY.ink} />
			<HandTag x={R.x1 + 40} y={R.y2 + 70} text="rod still: ε = 0" at={stop + 10} size={36} color={ROSE.ink} />
			<Chip x={760} y={180} at={here} out={grows} size={30} w={520}>rails: two fixed conducting bars</Chip>
			<Givens x={1320} y={180} w={500} at={say} size={32} lines={[<>B = 0.50 T</>, <>rod length 0.20 m</>, <>v = 2.0 m s⁻¹</>]} />
			<div style={{position: 'absolute', left: 1320, top: 360, display: 'flex', flexDirection: 'column', gap: 8, width: 500}}>
				<Row at={every} ageAt={so} size={40} oldSize={32}>area each second = 0.20 × 2.0 = {fx(ROD.rate, 2)} m²</Row>
				<Row at={so} ageAt={emfC} size={40} oldSize={32}>ΔΦ/Δt = 0.50 × 0.40 = {fx(ROD.dphi, 2)} Wb s⁻¹</Row>
				<Row at={emfC} size={44}>ε = <AnswerBox at={emfC + 10}>{fx(ROD.emf, 2)} V</AnswerBox> (N = 1)</Row>
			</div>
			<Readouts x={1320} y={660} w={500} size={48} at={say} rows={[
				{label: 'v', value: fx(v, 1), unit: 'm s⁻¹', color: AMBER.ink},
				{label: 'area per second', value: fx(ROD.L * v, 2), unit: 'm²', color: NAVY.ink},
				{label: 'ε', value: fx(eps, 2), unit: 'V', color: ROSE.ink},
			]} />
			<CrossedChip x={760} y={180} at={stop} crossAt={stop + 12} size={30} caption="no change in flux, no emf">field present → emf</CrossedChip>
		</>
	);
};

// ---------- 8. so what creates an emf? ----------
const PW = 420, PH = 330, PY = 180;
const px = (i: number) => 84 + i * (PW + 24);
const Panel: React.FC<{i: number; title: string; lit: number; children?: React.ReactNode}> = ({i, title, lit, children}) => (
	<g>
		<CardRect x={px(i)} y={PY} w={PW} h={PH} />
		{children}
		<text x={px(i) + 20} y={PY + 46} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>{title}</text>
		<g opacity={0.25 + 0.75 * lit}><circle cx={px(i) + PW - 44} cy={PY + 40} r={30} fill={lit > 0.5 ? ROSE.soft : CARD} stroke={ROSE.stroke} strokeWidth={4} /><text x={px(i) + PW - 44} y={PY + 52} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: ROSE.ink}}>ε</text></g>
	</g>
);
export const S08: React.FC = () => {
	const id = 'what-changes';
	const f = useCurrentFrame();
	const answer = cue(id, "So here's the answer"), move = cue(id, 'Move a magnet'), current = cue(id, 'Change the current'), area = cue(id, 'Change the area'), turn = cue(id, 'Or turn the coil'), angle = cue(id, 'the angle'), nochange = cue(id, 'No change, no emf'), broken = cue(id, 'even if the circuit is broken'), closed = cue(id, 'when the circuit is closed'), remember = cue(id, "Here's a way to remember"), no2 = cue(id, 'No change, no emf', 2), faster = cap(id, cue(id, 'Faster change'));
	const allLit = prog(f, angle, 12) * (1 - prog(f, nochange, 12));
	const lit = (a: number, b: number) => Math.max(allLit, prog(f, a, 10) * (1 - prog(f, b, 10)));
	// panel 1: the magnet pushed in and pulled out (live from 'Move a magnet', and again for the open-circuit test)
	const k1 = mono([[0, U0], [move, U0], [move + 50, 230], [move + 100, U0], [broken - 10, U0], [broken + 50, 230], [broken + 100, U0], [closed, U0], [closed + 50, 230]]);
	const n1 = useNeedle(id, k1, dur(id), 18);
	const u1 = kf(f, k1);
	const gap = prog(f, broken, 10) * (1 - prog(f, closed, 10));
	const m1 = Math.abs(n1) > 1;
	// panel 2: switch closing in a nearby circuit
	const sw = kf(f, mono([[current, 1], [current + 20, 0], [current + 60, 0], [current + 80, 1]]));
	const swLit = current < f && f < current + 90 && (Math.abs(sw - 0.5) < 0.5) ? 1 : 0;
	// panel 3: the rod
	const rx = kf(f, mono([[area, 0], [area + 80, 1]]), false);
	// panel 4: turning loop
	const ang = kf(f, mono([[turn, 0], [turn + 70, 180]]), false);
	const c2 = coilAxis({x: px(1) + 30, y: PY + 150, w: 160});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, answer, 14)}>
					<Panel i={0} title="move a magnet" lit={Math.max(lit(move, move + 110), m1 ? 1 : 0)}>
						<BenchInset x={px(0) + 4} y={PY + 120} k={0.235} uN={u1} needle={n1} card={false} flow={m1 && gap < 0.5 ? 1 : 0} flowPhase={f * 3} gap={gap} />
					</Panel>
					<Panel i={1} title="change a current nearby" lit={Math.max(lit(current, current + 90) * swLit, allLit)}>
						<CoilPlate p={{x: px(1) + 30, y: PY + 150, w: 160}} />
						<CoilPlate p={{x: px(1) + 220, y: PY + 150 - 21, w: 160}} />
						<Lead pts={[c2.a, [c2.a[0], PY + 290], [px(1) + 70, PY + 290]]} width={3} />
						<Lead pts={[c2.b, [c2.b[0] + 10, PY + 290], [px(1) + 170, PY + 290]]} width={3} />
						<SwitchSymbol x1={px(1) + 70} x2={px(1) + 120} y={PY + 290} open={sw} />
						<BatterySymbol x={px(1) + 150} y={PY + 290} />
					</Panel>
					<Panel i={2} title="change the area" lit={lit(area, area + 85)}>
						<CrossRegion x={px(2) + 20} y={PY + 80} w={PW - 40} h={230} step={56} />
						<Rails x1={px(2) + 40} x2={px(2) + PW - 30} y1={PY + 130} y2={PY + 270} rodX={px(2) + 140 + 180 * rx} shade={1} />
						<Rod cx={px(2) + 140 + 180 * rx} cy={PY + 200} len={210} deg={90} />
					</Panel>
					<Panel i={3} title="turn the coil" lit={lit(turn, turn + 72)} />
				</g>
				{f >= nochange ? <g opacity={prog(f, nochange, 12)}>
					<CardRect x={84} y={670} w={PW} h={230} />
					<BenchInset x={88} y={730} k={0.235} uN={200} needle={0} card={false} />
				</g> : null}
			</FrameSvg>
			<RotatingCoilView angle={(ang * Math.PI) / 180} x={px(3) + 40} y={PY + 70} w={PW - 80} h={PH - 80} lines={6} fieldTone="grey" coilTone="amber" opacity={prog(f, answer, 14)} />
			<Lbl x={px(1) + 210} y={PY + 120} at={current} out={nochange} color={INK_SOFT} size={28} anchor="middle">coming up later</Lbl>
			<Row at={angle} size={48} style={{position: 'absolute', left: 96, top: 548}}><AnswerBox at={angle + 10}>any change in B, A or θ → ε</AnswerBox></Row>
			<Lbl x={104} y={710} at={nochange} color={INK} size={30}>magnet still, strong field</Lbl>
			<Lbl x={300} y={888} at={nochange + 10} color={ROSE.ink} size={40} anchor="middle">ε = 0</Lbl>
			<HandTag x={px(0) + 20} y={PY + PH + 30} text="open circuit: emf, no current" at={broken + 10} out={closed} size={30} color={ROSE.ink} />
			<HandTag x={px(0) + 20} y={PY + PH + 30} text="closed: current flows" at={closed + 10} out={remember} size={30} color={ROSE.ink} />
			<AidCard x={600} y={680} w={1220} at={remember} title="Memory aid">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.15}}>
					<div style={{opacity: prog(f, no2, 10)}}>No change, no emf.</div>
					<div style={{opacity: prog(f, faster, 10)}}>Faster change, bigger emf.</div>
				</div>
			</AidCard>
		</>
	);
};
