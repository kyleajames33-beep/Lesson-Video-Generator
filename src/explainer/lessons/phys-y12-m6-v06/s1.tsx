// Scenes 1 to 5: the hook (last time's crossed fields wired to the painted supply, a beam of many speeds: most pushed
// off line, one straight through the slit), the comparison table (with the fixed F_E bar against the growing F_B bar),
// the crossed set-up (directions, the positive ghost and the flip), the balance v = E/B (and the crossed "same way"
// panel), and the worked example (calculation layout beside the stage).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, FieldLines, Particle, PlatePair} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {Arrow2, Horseshoe} from '../../physics/electromagnetism/magnetic';
import {CrossedStage} from '../../physics/electromagnetism/crossed';
import {BARRIER_X, E16, G16, M6V05FinalFrame} from '../phys-y12-m6-v05/s3';
import {HEAD, HEAD_SIZE, WE, cap, cue, holdIf, mono, selRun} from './common';
import {AMBER, CardRect, ForcePair, GREY, Givens, Lbl, NAVY, ROSE, Ring, RunOn, Strip, SupplyRig, TEAL, sci} from './parts';

// ---------- the hook stage (scenes 1, 6 and 14): last time's plates, wired to the painted supply ----------
export const SUP: SupplyAt = {x: 96, y: 760, w: 300};
const LEN = BARRIER_X - E16.x, HALF = (G16.yBot - G16.yTop) / 2 - 16;
export const RATIOS = [0.6, 0.8, 1, 1.3, 1.7];
export const BEAM = RATIOS.map(r => selRun(r, r === 1 ? LEN + 220 : LEN, -1, 1, HALF));
export const MagnetInset: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0) return null;
	return (
		<g opacity={o}>
			<CardRect x={96} y={300} w={290} h={210} />
			<Horseshoe x={273} top={380} bot={430} />
			<Arrow2 from={[273, 312]} to={[273, 495]} color={INK} width={3.5} head={16} dash="9 6" />
		</g>
	);
};
/** The beam fired at `fire`: each speed one electron, staggered, on its schematic run. */
export const BeamShots: React.FC<{fire: number; only?: number}> = ({fire, only}) => {
	const f = useCurrentFrame();
	return <g>{BEAM.map((run, i) => (only === undefined || only === i ? <RunOn key={i} run={run} t={f - fire - i * 14} x0={E16.x} y0={E16.y} opacity={prog(f, fire + i * 14, 8)} /> : null))}</g>;
};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const here = cue(id, 'Here are our crossed fields'), speeds = cue(id, 'lots of different speeds'), most = cue(id, 'Most of them are pushed off line'), slit = cue(id, 'straight through the slit'), which = cue(id, 'Which speed is it'), too = cap(id, cue(id, 'would protons at that speed'));
	const h = holdIf(id);
	if (f < 1) return <M6V05FinalFrame />;
	const end = (i: number) => { const st = RunOnEnd(i); return {x: E16.x + st.x, y: E16.y - st.y}; };
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 16), clipPath: 'inset(150px 0 0 0)'}}><M6V05FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SupplyRig g={G16} sup={SUP} reading="80 V" opacity={prog(f, here, 16)} />
				<CrossedStage g={G16} barrierX={BARRIER_X} />
				<MagnetInset at={here + 10} />
				{f < speeds ? <Particle cx={E16.x} cy={E16.y} sign="−" r={24} /> : null}
				<BeamShots fire={speeds} />
				{f >= too ? <g opacity={prog(f, too, 12)}><Particle cx={E16.x + 10} cy={E16.y + 110} sign="+" r={24} /></g> : null}
				<Ring cx={BARRIER_X + 13} cy={E16.y} rx={50} ry={60} at={slit + 10} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={G16.x2} y={250} color={INK} size={32} anchor="end">E down, B into page</Lbl>
			<HandTag x={96} y={550} text="looking down through the gap:" at={here + 24} size={28} color={GREY.ink} />
			<HandTag x={96} y={590} text="B into the page" at={here + 40} size={28} color={GREY.ink} />
			<HandTag x={E16.x + 40} y={E16.y + 70} text="many speeds" at={speeds + 30} size={32} color={TEAL.ink} />
			<Lbl x={end(0).x + 10} y={end(0).y + 44} at={most + 30} color={INK} size={28} anchor="middle">slow</Lbl>
			<Lbl x={end(4).x - 20} y={end(4).y + 44} at={most + 30} color={INK} size={28} anchor="end">fast</Lbl>
			<Lbl x={BARRIER_X + 120} y={E16.y - 40} at={slit + 20} color={TEAL.ink} size={34}>v = ?</Lbl>
			<HandTag x={BARRIER_X - 260} y={G16.yBot + 80} text="one gets through" at={slit + 24} size={32} color={TEAL.ink} />
			<Lbl x={E16.x + 50} y={E16.y + 124} at={too} color={INK} size={34}>?</Lbl>
			{['yes?', 'no?', 'depends on its mass?'].map((c, i) => <Chip key={c} x={[440, 580, 700][i]} y={830} at={Math.max(which, too) + i * 6} size={30}>{c}</Chip>)}
			<Lbl x={1824} y={880} at={most} color={INK_SOFT} size={28} anchor="end">initial deflection, not to scale</Lbl>
			<Lbl x={SUP.x} y={740} at={here} color={NAVY.ink} size={28}>80 V across 2.0 cm</Lbl>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={cue(id, 'And would protons')} /></FrameSvg> : null}
		</>
	);
};
/** Where a beam run ends (its last state). */
const RunOnEnd = (i: number) => {
	const r = BEAM[i];
	return {x: r.x[r.n], y: r.y[r.n]};
};

// ---------- 2. comparing the two forces ----------
const COL = {lab: 96, e: 400, b: 1120, w: 700};
export const S02: React.FC = () => {
	const id = 'compare-forces';
	const f = useCurrentFrame();
	const see = cue(id, 'To see why'), eAct = cue(id, 'acts on a charge whether'), eDir = cue(id, 'or against it for a negative charge'), bAct = cue(id, 'needs the charge to be moving'), bDir = cue(id, 'at right angles to both'), field = cue(id, 'the velocity and the field'), eWork = cue(id, 'The electric force can push'), bWork = cue(id, "The magnetic force can't"), eSize = cue(id, 'The electric force is the same at any speed'), bSize = cap(id, cue(id, 'but the magnetic force grows'));
	const v = kf(f, mono([[eSize, 0.2], [bSize + 40, 2]]));
	const rows: [string, React.ReactNode, number, React.ReactNode, number][] = [
		['acts on', 'any charge, moving or not', eAct, 'only charges moving across B', bAct],
		['direction', 'along E (+), against E (−)', eDir, '⊥ to v and B', bDir],
		['work', 'can change speed', eWork, 'none: only steers', bWork],
		['size', <><span style={{color: AMBER.ink}}>qE</span>, same at any v</>, eSize, <><span style={{color: ROSE.ink}}>qvB</span>, grows with v</>, bSize],
	];
	const ys = [250, 320, 600, 670];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={COL.e} y={196} at={see} color={TONE_E} size={38}>electric field</Lbl>
			<Lbl x={COL.b} y={196} at={see} color={GREY.ink} size={38}>magnetic field</Lbl>
			{rows.map(([lab, e, ea, b, ba], i) => (
				<React.Fragment key={lab}>
					<Lbl x={COL.lab} y={ys[i] + 14} at={see + i * 6} color={INK_SOFT} size={30}>{lab}</Lbl>
					<Row at={ea} size={36} style={{position: 'absolute', left: COL.e, top: ys[i] - 14}}>{e}</Row>
					<Row at={ba} size={36} style={{position: 'absolute', left: COL.b, top: ys[i] - 14}}>{b}</Row>
				</React.Fragment>
			))}
			<FrameSvg>
				<line x1={96} y1={226} x2={1824} y2={226} stroke={INK} strokeWidth={3} opacity={prog(f, see, 12)} />
				<line x1={COL.b - 30} y1={170} x2={COL.b - 30} y2={880} stroke={INK} strokeWidth={2} opacity={prog(f, see, 12)} />
				{/* mini panels: a resting + between plates (pushed), a resting + among crosses (no force) */}
				<g opacity={prog(f, see, 14)}>
					<CardRect x={COL.e} y={380} w={560} h={180} />
					<CardRect x={COL.b} y={380} w={560} h={180} />
					<rect x={COL.e} y={760} width={600} height={36} fill="none" stroke={GREY.stroke} strokeWidth={2} strokeDasharray="8 6" />
					<rect x={COL.b} y={760} width={600} height={36} fill="none" stroke={GREY.stroke} strokeWidth={2} strokeDasharray="8 6" />
				</g>
				<g opacity={prog(f, field, 14)}>
					<PlatePair g={{x1: COL.e + 40, x2: COL.e + 380, yTop: 410, yBot: 530}} thick={12} signSize={22} signStep={70} />
					<FieldLines g={{x1: COL.e + 40, x2: COL.e + 380, yTop: 410, yBot: 530}} step={90} width={3} />
					<Particle cx={COL.e + 210} cy={455} sign="+" r={18} />
					<Arrow2 from={[COL.e + 210, 476]} to={[COL.e + 210, 522]} color={AMBER.stroke} width={6} head={16} />
					<CrossRegion x={COL.b + 20} y={390} w={360} h={160} step={60} border={false} />
					<Particle cx={COL.b + 200} cy={470} sign="+" r={18} />
				</g>
				{/* the two force bars: F_E fixed, F_B growing with speed */}
				<g opacity={prog(f, eSize, 14)}>
					<rect x={COL.e} y={760} width={300} height={36} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
					<rect x={COL.b} y={760} width={300 * v} height={36} fill={ROSE.soft} stroke={ROSE.stroke} strokeWidth={3} />
					<line x1={COL.b + 300} y1={740} x2={COL.b + 300} y2={816} stroke={INK} strokeWidth={2} strokeDasharray="6 5" />
				</g>
				<Ring cx={1000} cy={670} rx={860} ry={32} at={bSize + 20} color={INK} />
			</FrameSvg>
			<Lbl x={COL.e + 420} y={480} at={field + 6} color={AMBER.ink} size={30}>F = qE, even at rest</Lbl>
			<Lbl x={COL.b + 400} y={480} at={field + 6} color={INK} size={30}>F = 0 at rest</Lbl>
			<Lbl x={COL.e} y={740} at={eSize} color={AMBER.ink} size={30}>F<Sub>E</Sub></Lbl>
			<Lbl x={COL.b} y={740} at={eSize} color={ROSE.ink} size={30}>F<Sub>B</Sub> (v = {fx2(v)} × E/B)</Lbl>
			<HandTag x={COL.e + 320} y={790} text="same at any v" at={eSize + 20} size={32} color={AMBER.ink} />
			<HandTag x={COL.b + 300 * v + 30} y={840} text="grows with v" at={bSize} size={32} color={ROSE.ink} />
		</>
	);
};
const TONE_E = '#1f6fb2';
const fx2 = (v: number) => (Math.round(v * 10) / 10).toFixed(1);

// ---------- 3. setting up the crossed fields ----------
export const G3: PG = {x1: 200, x2: 1100, yTop: 300, yBot: 760};
export const B3 = 1160, P3E = {x: 250, y: 530};
export const S03: React.FC = () => {
	const id = 'crossed-setup';
	const f = useCurrentFrame();
	const set = cue(id, 'Now set it up'), top = cue(id, 'The top plate is positive'), mag = cue(id, 'The magnetic field points into'), moves = cue(id, 'An electron moves to the right'), up = cue(id, "so it's up"), pos = cue(id, 'a positive charge moving right'), down = cue(id, 'So the electron is pushed down'), dirs = cap(id, cue(id, 'The two forces point in opposite'));
	const E = P3E;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossedStage g={G3} barrierX={B3} crossOpacity={prog(f, mag, 14)} linesOpacity={prog(f, top, 14)} />
				<g opacity={prog(f, moves, 12)}><RunStill x={E.x} y={E.y} /></g>
				{f >= up ? <ForcePair x={E.x} y={E.y} fe={140} fb={f >= down ? -140 : 0} opacity={prog(f, up, 12)} /> : null}
				{f >= pos ? <g opacity={prog(f, pos, 12) * (1 - 0.5 * prog(f, dirs, 12))}><Particle cx={E.x + 260} cy={E.y} sign="+" r={24} /><Arrow2 from={[E.x + 260, E.y - 30]} to={[E.x + 260, E.y - 150]} color={ROSE.stroke} width={6} head={20} dash="10 7" /></g> : null}
			</FrameSvg>
			<Strip x={1260} y={200} at={set} size={32}>E down (top +)</Strip>
			<Strip x={1260} y={280} at={mag} size={32}>B into page (×)</Strip>
			<Lbl x={E.x + 30} y={E.y - 150} at={up} color={AMBER.ink} size={34}>F<Sub>E</Sub></Lbl>
			<HandTag x={E.x + 70} y={E.y - 100} text="−: against E" at={up + 10} size={30} color={AMBER.ink} />
			<HandTag x={E.x + 300} y={E.y - 100} text="+: palm rule" at={pos + 20} size={30} color={ROSE.ink} />
			<Lbl x={E.x + 30} y={E.y + 170} at={down} color={ROSE.ink} size={34}>F<Sub>B</Sub></Lbl>
			<HandTag x={E.x + 70} y={E.y + 110} text="−: reverse" at={down + 10} size={30} color={ROSE.ink} marks={[{kind: 'arrow', from: [E.x + 240, E.y - 90], to: [E.x + 30, E.y + 120], bend: 0.3}]} markAt={down + 6} />
			<HandTag x={1260} y={420} text="flip for −" at={down + 24} size={34} color={ROSE.ink} />
			<Row at={dirs} size={44} style={{position: 'absolute', left: 1260, top: 500}}><AnswerBox at={dirs + 10}><span style={{color: AMBER.ink}}>F<Sub>E</Sub> up</span>, <span style={{color: ROSE.ink}}>F<Sub>B</Sub> down</span></AnswerBox></Row>
			<HandTag x={1260} y={620} text="opposed" at={dirs + 16} size={34} color={INK} />
		</>
	);
};
/** An electron at rest on the stage with its teal velocity arrow to the right. */
export const RunStill: React.FC<{x: number; y: number; sign?: '+' | '−'; r?: number}> = ({x, y, sign = '−', r = 26}) => (
	<g><Arrow2 from={[x + r + 4, y]} to={[x + r + 150, y]} color={TEAL.stroke} width={6} head={22} /><Particle cx={x} cy={y} sign={sign} r={r} /></g>
);

// ---------- 4. the balance condition ----------
const RUN4 = selRun(1, B3 - P3E.x + 200);
export const S04: React.FC = () => {
	const id = 'balance';
	const f = useCurrentFrame();
	const equal = cue(id, 'If the two forces are equal'), net = cue(id, 'The net force is zero'), qe = cue(id, 'So q E equals q v B'), cancels = cue(id, 'The charge cancels'), only = cue(id, 'Only that one speed'), mass = cue(id, "The mass doesn't appear"), oppose = cap(id, cue(id, 'But this only works because'));
	const go = Math.max(0, f - net);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossedStage g={G3} barrierX={B3} />
				{f < net ? <RunStill x={P3E.x} y={P3E.y} /> : <RunOn run={RUN4} t={go * 1.2} x0={P3E.x} y0={P3E.y} r={24} />}
				{f < net + 6 ? <ForcePair x={P3E.x} y={P3E.y} fe={130} fb={-130} /> : null}
				{f >= oppose ? <g opacity={prog(f, oppose, 14)}>
					<CardRect x={1260} y={560} w={564} h={250} />
					<FieldLines g={{x1: 1300, x2: 1780, yTop: 600, yBot: 770}} dir="up" step={100} width={3} />
					<CrossRegion x={1300} y={600} w={480} h={170} step={60} border={false} />
					<PlatePair g={{x1: 1300, x2: 1780, yTop: 600, yBot: 770}} top="−" bot="+" thick={12} signSize={22} signStep={80} />
					<Particle cx={1400} cy={685} sign="−" r={18} />
					<Arrow2 from={[1385, 706]} to={[1385, 760]} color={AMBER.stroke} width={5} head={16} />
					<Arrow2 from={[1415, 706]} to={[1415, 760]} color={ROSE.stroke} width={5} head={16} />
				</g> : null}
			</FrameSvg>
			<Chip x={P3E.x + 40} y={G3.yBot + 40} at={net} size={32}>F<Sub>net</Sub> = 0: straight through</Chip>
			<div style={{position: 'absolute', left: 1260, top: 190, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={equal} ageAt={qe} size={44} oldSize={34}><span style={{color: AMBER.ink}}>F<Sub>E</Sub></span> = <span style={{color: ROSE.ink}}>F<Sub>B</Sub></span></Row>
				<Row at={qe} ageAt={cancels + 30} size={48} oldSize={36}><MarkSpan kind="strike" at={cancels} color={NAVY.stroke}>q</MarkSpan>E = <MarkSpan kind="strike" at={cancels + 6} color={NAVY.stroke}>q</MarkSpan>vB</Row>
				<Row at={cancels + 20} size={60}><AnswerBox at={cancels + 30}><span style={{color: TEAL.ink}}>v = E/B</span></AnswerBox></Row>
			</div>
			<HandTag x={1260} y={470} text="q cancels, m never appears" at={mass} size={32} color={NAVY.ink} />
			<Lbl x={1280} y={590} at={oppose} color={INK} size={28}>E up, B into page</Lbl>
			<CrossedChip x={1260} y={830} at={oppose + 6} crossAt={oppose + 30} size={28} caption="must oppose">both forces the same way: balance</CrossedChip>
			<Lbl x={760} y={G3.yBot + 64} at={only} color={TEAL.ink} size={30}>only v = E/B is balanced</Lbl>
		</>
	);
};

// ---------- 5. worked example ----------
const G5: PG = {x1: 1180, x2: 1700, yTop: 380, yBot: 700}, B5 = 1740, E5 = {x: 1220, y: 540};
export const S05: React.FC = () => {
	const id = 'worked-selector';
	const f = useCurrentFrame();
	const put = cue(id, 'Put in some numbers'), up = cue(id, 'ten to the minus sixteen newtons, up'), down = cue(id, 'but down'), cancel = cue(id, 'They cancel, so the electron'), eb = cue(id, 'And E over B'), speed = cap(id, cue(id, 'exactly its speed'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={put} size={30} w={1040}>Electron in crossed fields: find both forces, then the selected speed.</Strip>
			<Strip x={96} y={250} at={put + 8} size={32} border={INK}>F<Sub>E</Sub> = qE, F<Sub>B</Sub> = qvB, v = E/B</Strip>
			<Givens x={96} y={322} w={1040} at={put + 16} size={30} lines={[
				<>E = 4.0 × 10³ V m⁻¹ (down; 80 V across 2.0 cm)</>,
				<>B = 0.020 T (into page), v = 2.0 × 10⁵ m s⁻¹ (right)</>,
				<>|q| = 1.602 × 10⁻¹⁹ C</>,
			]} />
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 8, width: 1060}}>
				<Row at={up - 40} ageAt={eb} size={36} oldSize={30}><span style={{color: AMBER.ink}}>F<Sub>E</Sub></span> = 1.602 × 10⁻¹⁹ × 4.0 × 10³</Row>
				<Row at={up} ageAt={eb} size={44} oldSize={34}>&nbsp;&nbsp;= <AnswerBox at={up + 10} tick={false}><span style={{color: AMBER.ink}}>{sci(WE.FE, 2)} N, up</span></AnswerBox></Row>
				<Row at={down - 50} ageAt={eb} size={36} oldSize={30}><span style={{color: ROSE.ink}}>F<Sub>B</Sub></span> = 1.602 × 10⁻¹⁹ × 2.0 × 10⁵ × 0.020</Row>
				<Row at={down} ageAt={eb} size={44} oldSize={34}>&nbsp;&nbsp;= <AnswerBox at={down + 10} tick={false}><span style={{color: ROSE.ink}}>{sci(WE.FB(WE.vs), 2)} N, down</span></AnswerBox></Row>
				<Row at={eb} size={44}>v = E/B = 4.0 × 10³/0.020 = <AnswerBox at={speed}><span style={{color: TEAL.ink}}>{sci(WE.vs, 1)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<HandTag x={700} y={610} text="equal: net 0" at={cancel} size={34} color={INK} marks={[{kind: 'brace', x: 670, y1: 500, y2: 710}]} markAt={cancel} />
			<CrossedChip x={96} y={850} at={eb + 30} crossAt={speed} size={30} caption="E on top">v = B/E = {sci(WE.slip, 0)} m s⁻¹</CrossedChip>
			<FrameSvg>
				<CrossedStage g={G5} barrierX={B5} crossStep={70} linesStep={100} />
				<RunStill x={E5.x} y={E5.y} r={22} />
				{f >= up ? <ForcePair x={E5.x} y={E5.y} fe={110} fb={f >= down ? -110 : 0} r={22} opacity={prog(f, up, 12)} /> : null}
			</FrameSvg>
			<Lbl x={G5.x2} y={G5.yTop - 76} at={put} color={INK} size={28} anchor="end">E down, B into page</Lbl>
			<Lbl x={E5.x + 30} y={E5.y - 120} at={up} color={AMBER.ink} size={30}>F<Sub>E</Sub></Lbl>
			<Lbl x={E5.x + 30} y={E5.y + 140} at={down} color={ROSE.ink} size={30}>F<Sub>B</Sub></Lbl>
		</>
	);
};
