// Scenes 1 to 6: the hook (last time's strip, gold atom and painted Maltese-cross tube; the tube glows; how do you weigh
// something too small to see? the painted balance reads "? kg"), the cathode ray tube (the painted tube large, the
// painted supply, cathode and anode, the glow), early evidence (a two-by-two grid: the cross's shadow, the painted
// paddle wheel rolling, a magnet's bend, Hertz's null result on an exam-style tube), Thomson's better vacuum (the beam
// bends towards +), stage 1 (crossed fields on the field motion engine, a live B slider straightening the beam) and
// stage 2 (B off, the parabola and the q/m working).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {CrossRegion, FieldLines, Lead, PlatePair, Slider, Supply, supplyPts} from '../../physics/electromagnetism/plates';
import {ExamTube} from '../../physics/atom/electron';
import type {TubeG} from '../../physics/atom/electron';
import {Readout} from '../../physics/atom/universe';
import {HandoffBoard06, M8V06FinalFrame, STRIP} from '../phys-y12-m8-v06/s3';
import {HEAD, HEAD_SIZE, Q_M, Q_M_SLIP, T_B, T_D, T_E, T_L, T_V, T_VEL, T_Y, cap, cue} from './common';
import {AMBER, BLUE, BalancePlate, EndView, GLOW, GREEN, GREY, Givens, INK, Lbl, MalteseTube, NAVY, PaddleCell, RED, ROSE, SLATE, Strip, TEAL, balanceAt, beamPath, beamRun, fx, sci, tubeAt, yAtX} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook ----------
const TUBE0 = {x: 1040, y: 430, w: 780}, TUBE1 = {x: 96, y: 440, w: 820};
const BAL = {x: 1220, y: 560, w: 560};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sb = cue(id, 'stars built the elements'), am = cue(id, 'what is an atom of those elements made of'), sp = cue(id, 'the smallest piece of matter'), gl = cue(id, 'a strange glow in sealed glass tubes'), hw = cue(id, 'How do you weigh something far too small to see'), te = cue(id, 'It took two experiments'), el = cap(id, cue(id, 'So how did cathode rays and oil drops reveal'));
	if (f < 1) return <M8V06FinalFrame />;
	const grow = prog(f, am, 30), away = prog(f, gl, 30), tuck = prog(f, hw, 24);
	const ax = lerp(lerp(lerp(360, 820, grow), 1300, away), 1000, tuck), ay = lerp(lerp(lerp(560, 540, grow), 470, away), 330, tuck), ar = lerp(lerp(lerp(150, 210, grow), 190, away), 70, tuck);
	const tp = {x: lerp(TUBE0.x, TUBE1.x, away), y: lerp(TUBE0.y, TUBE1.y, away), w: lerp(TUBE0.w, TUBE1.w, away)};
	const pl = pulseOf(f, sb, 40);
	const bg = balanceAt(BAL), [d0x, d0y] = bg.at(398, 432), [d1x, d1y] = bg.at(862, 524);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard06 f={0} final heading={false} chip={false} tube={false} atom /></div>
			<HandoffBoard06 f={0} final heading={false} chip={false} marks={false} tube={false} atom={false} />
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pl > 0 ? <rect x={STRIP.x0 - 8} y={STRIP.y - 8} width={92 * STRIP.w + 16} height={STRIP.h + 16} rx={8} fill="none" stroke={AMBER.stroke} strokeWidth={4 + 4 * pl} /> : null}
				<circle cx={ax} cy={ay} r={ar} fill="#c9c3b8" stroke={INK} strokeWidth={4} />
				<MalteseTube p={tp} glow={prog(f, gl + 26, 20)} />
				<g opacity={prog(f, hw, 14)}><BalancePlate p={BAL} text="? kg" size={34} /></g>
			</FrameSvg>
			<Lbl x={820} y={290} at={sp} out={gl} color={INK} size={30} anchor="middle">1800s: atom = smallest piece, nothing inside?</Lbl>
			<Lbl x={1300} y={710} at={gl + 20} out={hw} color={INK} size={30} anchor="middle">an atom: something far smaller inside?</Lbl>
			<HandTag x={tubeAt(TUBE1, 2012, 322)[0] - 40} y={TUBE1.y - 30} text="glow!" at={gl + 40} size={40} color={GREEN.ink} />
			<HandTag x={0} y={0} at={hw + 20} color={INK} marks={[{kind: 'circle', cx: (d0x + d1x) / 2, cy: (d0y + d1y) / 2, rx: (d1x - d0x) / 2 + 24, ry: (d1y - d0y) / 2 + 20}]} />
			<Lbl x={BAL.x + BAL.w / 2} y={BAL.y - 30} at={hw} color={INK} size={30} anchor="middle">far too small to see: what is its mass?</Lbl>
			<Chip x={BAL.x} y={800} at={te} size={28} color={INK}>{f >= el ? 'experiment 1: cathode rays' : 'experiment 1'}</Chip>
			<Chip x={BAL.x} y={860} at={te + 8} size={28} color={INK}>{f >= el ? 'experiment 2: oil drops' : 'experiment 2'}</Chip>
			<Chip x={96} y={870} at={-30} out={gl} size={30} w={900} color={INK} border={INK}>Next: how did cathode rays and oil drops reveal the electron?</Chip>
		</>
	);
};

// ---------- 2. the cathode ray tube ----------
const T2 = {x: 380, y: 290, w: 1100};
const SUP2 = {x: 500, y: 720, w: 300};
export const S02: React.FC = () => {
	const id = 'cathode-ray-tube';
	const f = useCurrentFrame();
	const pu = cue(id, 'Pump almost all the air out'), hv = cue(id, 'a high voltage'), ca = cue(id, 'The negative electrode is the cathode'), an = cue(id, 'the positive one is the anode'), ss = cue(id, 'Something streams away from the cathode'), gg = cue(id, 'the glass glows'), ra = cue(id, 'so it was called cathode rays'), pa = cap(id, cue(id, 'a stream of tiny charged particles'));
	const sp = supplyPts(SUP2);
	const [pinX, pinY] = tubeAt(T2, 62, 245), [stX, stY] = tubeAt(T2, 1297, 690), [cdX, cdY] = tubeAt(T2, 448, 300), [crX, crY] = tubeAt(T2, 1297, 150), [gx, gy] = tubeAt(T2, 2012, 322);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MalteseTube p={T2} glow={prog(f, gg, 16)} beam={prog(f, ss, 16)} />
				<g opacity={prog(f, hv, 14)}>
					<Lead pts={[sp.neg, [sp.neg[0], 930], [330, 930], [330, pinY], [pinX, pinY]]} />
					<Lead pts={[sp.pos, [sp.pos[0], 945], [stX, 945], [stX, stY]]} />
					<Supply at={SUP2} reading="5 kV" />
				</g>
				{f >= ss ? <text x={(cdX + gx) / 2 - 120} y={cdY - 24} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: GREY.ink}} opacity={prog(f, ss, 12) * (1 - prog(f, gg, 12))}>?</text> : null}
			</FrameSvg>
			<Chip x={380} y={180} at={pu} size={28} color={INK}>almost a vacuum: nearly all the air pumped out</Chip>
			<Lbl x={SUP2.x + SUP2.w + 20} y={SUP2.y + 60} at={hv} color={INK} size={28}>high voltage</Lbl>
			<HandTag x={cdX - 140} y={cdY - 150} text="" at={ca} color={INK} marks={[{kind: 'arrow', from: [cdX - 60, cdY - 120], to: [cdX - 6, cdY - 40], bend: 0}]} />
			<Lbl x={cdX - 160} y={cdY - 140} at={ca} color={INK} size={30}>cathode (−)</Lbl>
			<HandTag x={0} y={0} at={an} color={INK} marks={[{kind: 'arrow', from: [crX + 120, crY - 60], to: [crX + 30, crY + 20], bend: 0}]} />
			<Lbl x={crX + 110} y={crY - 80} at={an} color={INK} size={30}>anode (+)</Lbl>
			<HandTag x={(cdX + gx) / 2 - 220} y={cdY + 140} text="invisible stream" at={ss + 20} out={ra} size={32} color={GREY.ink} />
			<HandTag x={gx - 420} y={gy + 210} text="the glass glows, not the rays" at={gg + 20} size={32} color={GREEN.ink} marks={[{kind: 'circle', cx: gx, cy: gy, rx: 60, ry: 140}]} />
			<Chip x={900} y={720} at={ra} size={28} color={INK}>cathode rays: what streams from the cathode</Chip>
			<Chip x={1520} y={260} at={pa} size={28} color={GREY.ink}>wave, like light?</Chip>
			<Chip x={1520} y={340} at={pa + 6} size={28} color={NAVY.ink}>charged particles?</Chip>
			<Lbl x={gx} y={gy - 150} at={gg} color={GREEN.ink} size={28} anchor="middle">glow</Lbl>
		</>
	);
};

// ---------- 3. early evidence ----------
const CELL = [{x: 980, y: 190}, {x: 1410, y: 190}, {x: 980, y: 530}, {x: 1410, y: 530}] as const;
const CW = 410, CH = 320;
const T3 = {x: 110, y: 470, w: 780};
const g3: TubeG = {x0: 1000, y: 700, px1: 1120, px2: 1250, hg: 40, sx: 1370, top: 610, bot: 790};
const g4: TubeG = {x0: 1430, y: 700, px1: 1550, px2: 1680, hg: 40, sx: 1800, top: 610, bot: 790};
export const S03: React.FC = () => {
	const id = 'early-evidence';
	const f = useCurrentFrame();
	const mc = cue(id, 'A metal cross in the beam'), sh = cue(id, 'casts a sharp shadow'), pw = cue(id, 'A tiny paddle wheel'), wg = cue(id, 'warm leftover gas'), hi = cue(id, "so that's only a hint"), mg = cue(id, 'A magnet bends the beam'), cp = cue(id, 'charged plates'), al = cap(id, cue(id, 'saw no bend at all'));
	const cellO = [mc, pw, mg, cp].map(a => prog(f, a, 14));
	const u = f >= pw ? Math.min(1, (f - pw) / 160) : 0;
	const bend = prog(f, mg + 10, 30);
	const shim = f >= wg ? Math.sin((f - wg) / 4) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MalteseTube p={T3} glow={1} />
				{CELL.map((c, i) => <rect key={i} x={c.x} y={c.y} width={CW} height={CH} rx={14} fill="#fffdf8" stroke={cellO[i] > 0.5 ? INK : 'rgba(60,45,20,0.2)'} strokeWidth={cellO[i] > 0.5 ? 3 : 2.5} />)}
				<g opacity={cellO[0]}><MalteseTube p={{x: 995, y: 220, w: 300}} glow={1} /><EndView cx={1320} cy={360} r={56} shadow={prog(f, sh, 14)} /></g>
				<PaddleCell p={{x: 1425, y: 250, w: 380}} u={u} opacity={cellO[1]} />
				{f >= wg ? <g opacity={prog(f, wg, 12)}>{[0, 1, 2].map(i => <path key={i} d={`M${1500 + 90 * i},${330} q12,${-14 - 6 * shim} 24,0 t24,0`} fill="none" stroke={RED.stroke} strokeWidth={3} />)}</g> : null}
				<g opacity={cellO[2]}><ExamTube g={g3} plates={0} size={24} /><CrossRegion x={1110} y={640} w={150} h={120} step={40} color={SLATE.stroke} /><path d={`M${g3.x0 + 102},${g3.y} L1110,${g3.y} Q1200,${g3.y} ${g3.sx},${g3.y + 70 * bend}`} fill="none" stroke={GLOW} strokeWidth={5} /></g>
				<g opacity={cellO[3]}><ExamTube g={g4} size={24} /><FieldLines g={{x1: g4.px1, x2: g4.px2, yTop: g4.y - g4.hg, yBot: g4.y + g4.hg}} step={45} color={BLUE.stroke} width={3} /><line x1={g4.x0 + 102} y1={g4.y} x2={g4.sx} y2={g4.y} stroke={GLOW} strokeWidth={5} opacity={prog(f, al - 10, 12)} /></g>
				{f >= sh ? <Mark x={470} y={270} at={sh + 10} kind="tick" color={INK} size={30} /> : null}
				{f >= sh ? <Mark x={470} y={350} at={sh + 14} kind="tick" color={INK} size={30} /> : null}
				{f >= mg ? <Mark x={510} y={350} at={mg + 30} kind="tick" color={INK} size={30} /> : null}
				{f >= al ? <Mark x={510} y={270} at={al + 6} kind="tick" color={INK} size={30} /> : null}
			</FrameSvg>
			<Chip x={96} y={240} at={-30} size={28} color={GREY.ink}>wave, like light?</Chip>
			<Chip x={96} y={320} at={-30} size={28} color={NAVY.ink}>charged particles?</Chip>
			<Lbl x={96} y={440} at={0} color={INK} size={26}>the tube from before (glowing)</Lbl>
			<Lbl x={995} y={480} at={sh} color={INK} size={28}>sharp shadow: straight lines</Lbl>
			<HandTag x={0} y={0} at={sh + 20} color={INK} marks={[{kind: 'circle', cx: 1320, cy: 360, rx: 70, ry: 70}]} />
			<Lbl x={1425} y={400} at={wg} color={RED.ink} size={26}>heating can do this too</Lbl>
			<HandTag x={1425} y={470} text="weak: heat can do it" at={hi} size={30} color={GREY.ink} />
			<Lbl x={995} y={580} at={mg} color={INK} size={26}>magnet: field into page (×)</Lbl>
			<HandTag x={995} y={830} text="magnet bends it" at={mg + 30} out={cp} size={30} color={ROSE.ink} />
			<Lbl x={1425} y={580} at={cp} color={INK} size={26}>charged plates (+ above, − below)</Lbl>
			<Lbl x={1425} y={830} at={al} color={INK} size={28}>Hertz, 1883: no bend</Lbl>
			<HandTag x={1660} y={600} text="no bend?" at={al + 10} size={30} color={BLUE.ink} />
			<Lbl x={98} y={760} at={0} color={GREY.ink} size={26}>cells 3 and 4: exam-style diagrams of a cathode ray tube</Lbl>
		</>
	);
};

// ---------- 4. Thomson's better vacuum ----------
export const K4 = 6000;
export const G4: TubeG = {x0: 220, y: 470, px1: 440, px2: 740, hg: 60, sx: 1340, top: 300, bot: 640};
const SUP4 = {x: 96, y: 690, w: 340};
const RUN_E = beamRun({v: T_VEL, E: T_E, B: 0, L: T_L, beyond: 0.1});
export const S04: React.FC = () => {
	const id = 'thomson-vacuum';
	const f = useCurrentFrame();
	const bv = cue(id, 'with a much better vacuum'), pl = cue(id, 'the beam bent towards the positive plate'), sh = cue(id, "The leftover gas in Hertz's tube had shielded the beam"), ng = cue(id, 'Bending towards positive means negative charge'), gm = cue(id, 'the gas and the cathode metal'), ti = cue(id, 'got the same rays every time'), ma = cap(id, cue(id, 'part of all matter'));
	const sp = supplyPts(SUP4);
	const bendK = prog(f, pl, 30);
	const replay = f >= gm && f < ti + 40 ? ((f - gm) % 30) / 30 : 1;
	const gases = ['air', 'hydrogen', 'carbon dioxide'], metals = ['aluminium', 'platinum', 'iron'];
	const ci = f >= gm ? Math.min(2, Math.floor((f - gm) / 30)) : 0;
	const xStart = G4.px1 - (G4.px1 - (G4.x0 + 102));
	const path = (() => {
		const pts: string[] = [`M${xStart},${G4.y}`, `L${G4.px1},${G4.y}`];
		for (let i = 0; i <= RUN_E.n; i += 6) { const x = G4.px1 + RUN_E.x[i] * K4; if (x > G4.px1 + (G4.sx - G4.px1) * replay) break; pts.push(`L${x.toFixed(1)},${(G4.y - RUN_E.y[i] * K4 * bendK).toFixed(1)}`); }
		return pts.join(' ');
	})();
	const mx = 600, my = G4.y - yAtX(RUN_E, (mx - G4.px1) / K4) * K4 * bendK;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ExamTube g={G4} />
				<FieldLines g={{x1: G4.px1, x2: G4.px2, yTop: G4.y - G4.hg, yBot: G4.y + G4.hg}} step={60} color={BLUE.stroke} width={3} />
				<Lead pts={[sp.pos, [sp.pos[0], 380], [G4.px1 - 20, 380], [G4.px1 - 20, G4.y - G4.hg - 8], [G4.px1, G4.y - G4.hg - 8]]} />
				<Lead pts={[sp.neg, [sp.neg[0], 870], [590, 870], [590, G4.y + G4.hg + 16]]} />
				<Supply at={SUP4} reading={`${T_V} V`} />
				<path d={path} fill="none" stroke={GLOW} strokeWidth={6} />
				<path d={path} fill="none" stroke={'#5fbf63'} strokeWidth={2} />
				{bendK > 0.5 ? <g><circle cx={mx} cy={my} r={9} fill={NAVY.stroke} /><line x1={mx} y1={my - 12} x2={mx} y2={my - 80} stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L-11,18 L11,18 z" transform={`translate(${mx} ${my - 96})`} fill={AMBER.stroke} /></g> : null}
				{f >= sh && f < ng + 20 ? <g opacity={prog(f, sh, 12) * (1 - prog(f, ng, 16))}>
					<rect x={1400} y={640} width={420} height={220} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<rect x={1450} y={690} width={320} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={2.5} /><rect x={1450} y={800} width={320} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={2.5} />
					{Array.from({length: 7}, (_, i) => <g key={i}><circle cx={1470 + 46 * i} cy={724} r={9} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={2} /><text x={1470 + 46 * i} y={730} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 20, fill: GREY.ink}}>−</text><circle cx={1470 + 46 * i} cy={782} r={9} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={2} /><text x={1470 + 46 * i} y={789} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 20, fill: GREY.ink}}>+</text></g>)}
					<line x1={1420} y1={752} x2={1800} y2={752} stroke={GLOW} strokeWidth={5} />
				</g> : null}
			</FrameSvg>
			<Chip x={220} y={220} at={bv} size={28} color={INK}>{f >= gm ? `gas: ${gases[ci]}   cathode: ${metals[ci]}` : 'much better vacuum'}</Chip>
			<Lbl x={1000} y={240} at={bv + 10} color={INK} size={30}>Thomson, 1897</Lbl>
			<Lbl x={mx + 20} y={my - 110} at={pl + 30} color={AMBER.ink} size={28}>F = qE</Lbl>
			<Lbl x={1000} y={290} at={pl + 20} color={INK} size={28}>bends towards +</Lbl>
			<HandTag x={760} y={700} text="towards +, so negative" at={ng} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [800, G4.y - 30], to: [1200, G4.y - 140], bend: -0.1}]} />
			<Lbl x={1400} y={620} at={sh} out={ng} color={INK} size={26}>{"Hertz's tube: leftover gas screened the field"}</Lbl>
			<Chip x={1400} y={300} at={ng + 10} size={28} color={NAVY.ink}>cathode rays carry negative charge</Chip>
			<CrossedChip x={1400} y={400} at={ng + 20} crossAt={ng + 34} size={26} caption="bends towards +">wave, like light?</CrossedChip>
			<Chip x={1400} y={540} at={ma} size={28} color={INK}>same particles in all matter</Chip>
			<HandTag x={1400} y={680} text="in everything" at={ma + 14} size={34} color={NAVY.ink} />
			<Lbl x={480} y={G4.bot + 40} at={0} color={GREY.ink} size={26}>exam-style diagram of the tube</Lbl>
		</>
	);
};

// ---------- 5. Thomson stage 1: balance the forces ----------
const K5 = 16800;
const P5 = {x1: 140, x2: 140 + T_L * K5, y: 520, hg: (T_D / 2) * K5};
export const S05: React.FC = () => {
	const id = 'thomson-speed';
	const f = useCurrentFrame();
	const ra = cue(id, 'the ratio, charge over mass'), mf = cue(id, 'a magnetic field at right angles'), qe = cue(id, 'the electric force, q E'), qv = cue(id, 'the magnetic force, q v B'), gs = cue(id, 'When the beam goes straight'), vb = cue(id, 'so v equals E over B'), vs = cue(id, 'velocity selector you met earlier'), wf = cue(id, 'With these fields'), se = cap(id, cue(id, 'metres per second'));
	const bFrac = f < mf ? 0 : kf(f, [[mf, 0.3], [gs - 10, 0.75], [gs + 30, 1]]);
	const run = beamRun({v: T_VEL, E: T_E, B: T_B * bFrac, L: T_L, beyond: 0.006});
	const st = run.n, ang = (Math.atan2(run.vy[st], run.vx[st]) * 180) / Math.PI;
	const mx = (P5.x1 + P5.x2) / 2, my = P5.y - yAtX(run, (mx - P5.x1) / K5) * K5;
	const fe = prog(f, qe, 12), fb = prog(f, qv, 12) * bFrac;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PlatePair g={{x1: P5.x1, x2: P5.x2, yTop: P5.y - P5.hg, yBot: P5.y + P5.hg}} thick={20} />
				<FieldLines g={{x1: P5.x1, x2: P5.x2, yTop: P5.y - P5.hg, yBot: P5.y + P5.hg}} step={110} color={BLUE.stroke} width={3} />
				{f >= mf ? <g opacity={prog(f, mf, 14)}><CrossRegion x={P5.x1 + 20} y={P5.y - P5.hg + 30} w={P5.x2 - P5.x1 - 40} h={2 * P5.hg - 60} step={90} color={SLATE.stroke} /></g> : null}
				<line x1={60} y1={P5.y} x2={P5.x1} y2={P5.y} stroke={GLOW} strokeWidth={6} />
				<path d={beamPath(run, P5.x1, P5.y, K5)} fill="none" stroke={GLOW} strokeWidth={6} />
				<path d={beamPath(run, P5.x1, P5.y, K5)} fill="none" stroke="#5fbf63" strokeWidth={2} />
				<circle cx={mx} cy={my} r={10} fill={NAVY.stroke} />
				{fe > 0.01 ? <g opacity={fe}><line x1={mx - 16} y1={my - 12} x2={mx - 16} y2={my - 100} stroke={AMBER.stroke} strokeWidth={8} /><path d="M0,0 L-12,20 L12,20 z" transform={`translate(${mx - 16} ${my - 118})`} fill={AMBER.stroke} /></g> : null}
				{fb > 0.01 ? <g opacity={prog(f, qv, 12)}><line x1={mx + 16} y1={my + 12} x2={mx + 16} y2={my + 12 + 88 * bFrac} stroke={ROSE.stroke} strokeWidth={8} /><path d="M0,0 L-12,-20 L12,-20 z" transform={`translate(${mx + 16} ${my + 30 + 88 * bFrac})`} fill={ROSE.stroke} /></g> : null}
				<Slider x={160} y={830} w={460} value={bFrac} color={SLATE.stroke} label="B" ticks={[[0, '0'], [1, '6.0 × 10⁻⁴ T']]} opacity={prog(f, mf, 12)} />
			</FrameSvg>
			<Readout x={680} y={770} label="beam angle at exit" value={`${fx(Math.max(0, ang), 1)}°`} color={TEAL.ink} w={300} size={40} opacity={prog(f, mf, 12)} />
			<Lbl x={P5.x1} y={P5.y - P5.hg - 50} at={0} color={GREY.ink} size={26}>between the plates (enlarged); E points down</Lbl>
			<Lbl x={P5.x2 - 250} y={P5.y - P5.hg + 70} at={mf + 10} color={SLATE.ink} size={28}>B into page</Lbl>
			<Lbl x={mx - 150} y={my - 120} at={qe} color={AMBER.ink} size={30}>F_E = qE</Lbl>
			<Lbl x={mx + 40} y={my + 110} at={qv} color={ROSE.ink} size={30}>F_B = qvB</Lbl>
			<HandTag x={mx - 200} y={P5.y + P5.hg + 60} text="straight: forces equal" at={gs + 30} size={32} color={INK} />
			<Chip x={1060} y={180} at={ra} size={30} color={INK}>measure q/m (charge ÷ mass)</Chip>
			<div style={{position: 'absolute', left: 1060, top: 270}}><Row at={vb - 6} size={48}><AnswerBox at={vb}>qE = qvB → v = E/B</AnswerBox></Row></div>
			<Chip x={1060} y={370} at={vs} size={28} color={INK}>the velocity selector, met earlier</Chip>
			<Strip x={1060} y={450} at={wf} size={30} w={760}>Stage 1: find the speed</Strip>
			<div style={{position: 'absolute', left: 1060, top: 520, width: 760, opacity: prog(f, wf + 4, 12), background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 18px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: NAVY.ink}}>
				<div>{`plates: V = ${T_V} V, d = ${fx(T_D * 100, 1)} cm → E = V/d = ${sci(T_E, 1)} V m⁻¹`}</div>
				<div>{`B = ${sci(T_B, 1)} T (illustrative values)`}</div>
			</div>
			<div style={{position: 'absolute', left: 1060, top: 680}}><Row at={se - 6} size={40}><AnswerBox at={se}>{`v = (${sci(T_E, 1)}) / (${sci(T_B, 1)}) = ${sci(T_VEL, 1)} m s⁻¹`}</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={se + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: 1600, cy: 712, rx: 220, ry: 44}]} />
		</>
	);
};

// ---------- 6. Thomson stage 2: switch off B, measure the bend ----------
const K6 = 10000;
const P6 = {x1: 140, x2: 140 + T_L * K6, y: 330, hg: (T_D / 2) * K6};
const RUN6 = beamRun({v: T_VEL, E: T_E, B: 0, L: T_L, beyond: 0.02});
export const S06: React.FC = () => {
	const id = 'thomson-ratio';
	const f = useCurrentFrame();
	const so = cue(id, 'switched off the magnetic field'), cp = cue(id, 'curves like a projectile'), lv = cue(id, 'a time L over v'), qm = cue(id, 'a sideways acceleration of q E over m'), sw = cue(id, 'five point two eight millimetres sideways'), fy = cue(id, 'From y equals a half a t squared'), qe = cue(id, 'q over m equals two y v squared'), kg = cap(id, cue(id, 'coulombs per kilogram'));
	const bendK = prog(f, cp, 30);
	const yExit = yAtX(RUN6, T_L) * K6;
	const path = (() => { const pts: string[] = []; for (let i = 0; i <= RUN6.n; i += 6) pts.push(`${i ? 'L' : 'M'}${(P6.x1 + RUN6.x[i] * K6).toFixed(1)},${(P6.y - RUN6.y[i] * K6 * bendK).toFixed(1)}`); return pts.join(' '); })();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PlatePair g={{x1: P6.x1, x2: P6.x2, yTop: P6.y - P6.hg, yBot: P6.y + P6.hg}} thick={14} signSize={28} signStep={140} />
				<FieldLines g={{x1: P6.x1, x2: P6.x2, yTop: P6.y - P6.hg, yBot: P6.y + P6.hg}} step={80} color={BLUE.stroke} width={2.5} />
				{f < so + 20 ? <g opacity={1 - prog(f, so, 16)}><CrossRegion x={P6.x1 + 10} y={P6.y - P6.hg + 16} w={P6.x2 - P6.x1 - 20} h={2 * P6.hg - 32} step={60} color={SLATE.stroke} /></g> : null}
				<line x1={60} y1={P6.y} x2={P6.x1} y2={P6.y} stroke={GLOW} strokeWidth={5} />
				<path d={path} fill="none" stroke={GLOW} strokeWidth={5} /><path d={path} fill="none" stroke="#5fbf63" strokeWidth={2} />
				{f >= lv ? <g opacity={prog(f, lv, 12)} stroke={NAVY.stroke} strokeWidth={3}><line x1={P6.x1} y1={P6.y + P6.hg + 40} x2={P6.x2} y2={P6.y + P6.hg + 40} /><line x1={P6.x1} y1={P6.y + P6.hg + 30} x2={P6.x1} y2={P6.y + P6.hg + 50} /><line x1={P6.x2} y1={P6.y + P6.hg + 30} x2={P6.x2} y2={P6.y + P6.hg + 50} /></g> : null}
				{f >= sw ? <g opacity={prog(f, sw, 12)} stroke={NAVY.stroke} strokeWidth={3}><line x1={P6.x2 + 24} y1={P6.y} x2={P6.x2 + 24} y2={P6.y - yExit} /><line x1={P6.x2 + 14} y1={P6.y} x2={P6.x2 + 34} y2={P6.y} /><line x1={P6.x2 + 14} y1={P6.y - yExit} x2={P6.x2 + 34} y2={P6.y - yExit} /></g> : null}
			</FrameSvg>
			<Lbl x={P6.x1 + 520} y={P6.y + P6.hg + 40} at={0} color={GREY.ink} size={26}>B switched off (plates enlarged)</Lbl>
			<Lbl x={1300} y={190} at={0} color={TEAL.ink} size={34}>{`stage 1: v = ${sci(T_VEL, 1)} m s⁻¹`}</Lbl>
			<Chip x={700} y={180} at={cp} size={26} color={INK}>projectile-like path (met earlier)</Chip>
			<HandTag x={P6.x1 + 60} y={P6.y - P6.hg - 90} text="like a thrown ball" at={cp + 20} out={sw} size={30} color={NAVY.ink} />
			<Lbl x={(P6.x1 + P6.x2) / 2} y={P6.y + P6.hg + 80} at={lv} color={NAVY.ink} size={28} anchor="middle">{`L = ${fx(T_L * 100, 1)} cm`}</Lbl>
			<Row at={lv} size={44} style={{position: 'absolute', left: 920, top: 300}}>t = L/v</Row>
			<Row at={qm} size={44} style={{position: 'absolute', left: 1200, top: 300}}>a = qE/m</Row>
			<Lbl x={P6.x2 + 46} y={P6.y - yExit / 2 + 8} at={sw} color={NAVY.ink} size={28}>{`y = ${fx(T_Y * 1000, 2)} mm`}</Lbl>
			<Lbl x={920} y={420} at={sw + 10} color={GREY.ink} size={26}>y measured; values illustrative</Lbl>
			<HandTag x={0} y={0} at={sw + 16} color={INK} marks={[{kind: 'brace', x: P6.x2 + 40, y1: P6.y - yExit - 6, y2: P6.y + 6, facing: 'right'}]} />
			<Strip x={96} y={560} at={2} size={32} w={1060}>Stage 2: find q/m from the sideways deflection</Strip>
			<Givens x={1200} y={540} w={620} at={4} size={28} lines={[`L = ${fx(T_L * 100, 1)} cm = ${fx(T_L, 3)} m;  v = ${sci(T_VEL, 1)} m s⁻¹`, `E = ${sci(T_E, 1)} V m⁻¹`, f >= sw ? `y = ${fx(T_Y * 1000, 2)} mm = ${fx(T_Y * 1000, 2)} × 10⁻³ m` : 'y: measured on the screen']} />
			<div style={{position: 'absolute', left: 96, top: 680, display: 'flex', flexDirection: 'column', gap: 10, width: 1700}}>
				<Row at={fy} ageAt={kg} size={40}>y = ½at² = ½ (qE/m)(L/v)²</Row>
				<Row at={qe} ageAt={kg} size={44}>q/m = 2yv² / (EL²)</Row>
				<Row at={kg - 6} size={34}>{`q/m = 2(${fx(T_Y * 1000, 2)} × 10⁻³)(${sci(T_VEL, 1)})² / [(${sci(T_E, 1)})(${fx(T_L, 3)})²]`}</Row>
				<Row at={kg} size={50}><AnswerBox at={kg + 6}>{`= ${sci(Q_M, 2)} C kg⁻¹`}</AnswerBox></Row>
			</div>
			<CrossedChip x={1250} y={700} at={kg + 10} crossAt={kg + 24} size={26} caption="square v">{`q/m = 2yv / (EL²) = ${sci(Q_M_SLIP, 1)}`}</CrossedChip>
		</>
	);
};
