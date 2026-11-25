// Scenes 7 to 11: the lap time (two protons at v and 2v from one launch point, internally tangent circles on the
// field motion engine, back together; then the speed and field sliders with live v, r and T), the comparison with
// other circular motion (painted steel ball on a string, Earth and satellite, a charge in B), the comparison with an
// electric field (parabola against circle), the predictions answered, and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, BallSvg, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {CrossRegion, FieldLines, Particle, PlatePair, Slider, StrobeDot} from '../../physics/electromagnetism/plates';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {ORB, REG} from '../phys-y12-m6-v04/s3';
import {HEAD, HEAD_SIZE, WE, cap, cue, mono, orbitRun, slider} from './common';
import {AMBER, CardRect, Earth, GREY, KFixed, Lbl, NAVY, ORANGE, Ring, Satellite, Strip, TEAL, VF, fx, onRun, sci, usePulse} from './parts';
import {LAP1, MainStage} from './s1';

// ---------- 7. the lap time doesn't depend on speed ----------
const L7 = {x: 300, y: 560}, PX7 = 62, LAPF = 90, W7 = (2 * Math.PI) / LAPF;
const RACE = [130, 260].map(R => orbitRun(R, R * W7, 0, -1));
export const S07: React.FC = () => {
	const id = 'period';
	const f = useCurrentFrame();
	const how = cue(id, 'How long does one lap take'), dist = cue(id, 'The period is the distance round'), put = cue(id, 'Put in r equals'), cancels = cue(id, 'and the v cancels'), T = cue(id, 'so T equals two pi m'), faster = cue(id, 'A faster particle goes round'), same = cue(id, 'in exactly the same time'), elec = cue(id, 'For the electron here'), prot = cue(id, 'For the proton, three point'), cyc = cap(id, cue(id, 'This is what lets a cyclotron'));
	const tr = Math.min(Math.max(0, f - faster), LAPF);
	const raceO = 1 - prog(f, faster + LAPF + 50, 16);
	const live = prog(f, faster + LAPF + 56, 16);
	const R0 = faster + LAPF;
	const vK = mono([[R0 + 70, 8e6], [R0 + 100, 2e6], [R0 + 120, 2e6], [R0 + 170, 8e6], [R0 + 330, 8e6], [R0 + 360, 4e6]]);
	const BK = mono([[R0 + 185, 0.02], [R0 + 215, 0.04], [R0 + 280, 0.04], [R0 + 310, 0.02]]);
	const v = kf(f, vK), B = kf(f, BK), s = slider(v, B), rp = s.r * PX7;
	let ang = 0;
	for (let k = R0; k < f; k++) ang += W7 * (kf(k, BK) / 0.02);
	const c = {x: L7.x + rp, y: L7.y};
	const lp = {x: c.x - rp * Math.cos(ang), y: c.y + rp * Math.sin(ang)};
	const lu = {x: -Math.sin(ang), y: -Math.cos(ang)};
	const sweepV = f > R0 + 60 && f < R0 + 180, sweepB = f >= R0 + 180 && f < R0 + 320;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={120} y={250} w={760} h={640} step={80} />
				<g opacity={raceO}>
					{RACE.map((run, i) => <g key={i}>
						<circle cx={L7.x + [130, 260][i]} cy={L7.y} r={[130, 260][i]} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 7" opacity={prog(f, how, 14)} />
						{(() => { const p = onRun(run, Math.min(tr, LAPF * 0.999), L7.x, L7.y); return <VF x={p.x} y={p.y} ux={p.ux} uy={p.uy} r={18} vLen={[80, 140][i]} showF={false} mark={false} />; })()}
					</g>)}
				</g>
				{live > 0 ? <g opacity={live}>
					<circle cx={c.x} cy={c.y} r={rp} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
					<line x1={c.x} y1={c.y} x2={lp.x} y2={lp.y} stroke={NAVY.stroke} strokeWidth={4} />
					<VF x={lp.x} y={lp.y} ux={lu.x} uy={lu.y} r={18} vLen={60 + v / 8e4} fLen={70} />
					<Slider x={150} y={860} w={300} value={(v - 2e6) / 6e6} color={TEAL.stroke} label="speed v" />
					<Slider x={540} y={860} w={300} value={(B - 0.01) / 0.04} color={GREY.stroke} label="field B" />
				</g> : null}
				<Ring cx={L7.x} cy={L7.y} rx={46} ry={46} at={faster + LAPF} color={INK} />
			</FrameSvg>
			<HandTag x={150} y={500} text="back together" at={faster + LAPF + 4} out={faster + LAPF + 54} size={32} color={INK} />
			<Lbl x={150} y={300} at={how} color={INK_SOFT} size={28}>two protons, v and 2v, one launch point</Lbl>
			<div style={{position: 'absolute', left: 960, top: 180, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={dist} ageAt={T} size={44} oldSize={34}>T = 2πr/v</Row>
				<Row at={put} ageAt={T} size={44} oldSize={34}>&nbsp;&nbsp;= 2π(m<MarkSpan kind="strike" at={cancels} color={TEAL.stroke}>v</MarkSpan>/qB)/<MarkSpan kind="strike" at={cancels + 6} color={TEAL.stroke}>v</MarkSpan></Row>
				<Row at={T} size={60}><AnswerBox at={T + 14}>T = 2πm/(qB)</AnswerBox></Row>
			</div>
			<Readouts x={960} y={500} w={480} size={40} at={faster} out={faster + LAPF + 50} title="lap timers" rows={[
				{label: 'v', value: `${fx((WE.Tp * 1e6 * tr) / LAPF, 2)} μs`, color: TEAL.ink},
				{label: '2v', value: `${fx((WE.Tp * 1e6 * tr) / LAPF, 2)} μs`, color: TEAL.ink},
			]} />
			<Readouts x={960} y={500} w={480} size={40} at={faster + LAPF + 56} title="proton" rows={[
				{label: 'v', value: sci(v, 1), unit: 'm s⁻¹', color: TEAL.ink},
				{label: 'r', value: `${fx(s.r, 2)} m`, color: NAVY.ink},
				{label: 'T', value: `${fx(s.T * 1e6, 2)} μs`, color: INK},
			]} />
			{sweepV ? <HandTag x={1460} y={700} text="T stays put" at={R0 + 60} size={32} color={INK} /> : null}
			{sweepB ? <HandTag x={1460} y={700} text="B sets T" at={R0 + 180} size={32} color={GREY.ink} /> : null}
			<CrossedChip x={1470} y={500} at={same + 10} crossAt={same + 40} size={30}>faster → shorter lap</CrossedChip>
			<div style={{position: 'absolute', left: 960, top: 770, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={elec} size={40}>electron: <AnswerBox at={elec + 12}>T = {sci(WE.Te, 2)} s</AnswerBox></Row>
				<Row at={prot} size={40}>proton: <AnswerBox at={prot + 12}>T = {sci(WE.Tp, 2)} s</AnswerBox></Row>
			</div>
			<Chip x={1470} y={620} at={cyc} size={30} border={GREY.stroke} color={GREY.ink}>cyclotron: needs v ≪ c</Chip>
		</>
	);
};

// ---------- 8. compared with other circular motion ----------
const PANELS = [96, 680, 1264].map(x => ({x, y: 290, w: 560, h: 560, cx: x + 280, cy: 560}));
export const S08: React.FC = () => {
	const id = 'compare-circular';
	const f = useCurrentFrame();
	const lets = cue(id, "Let's compare this"), every = cue(id, 'In every case, a real force'), ball = cue(id, 'For a ball whirled'), radius = cue(id, 'and the string fixes the radius'), sat = cue(id, 'For a satellite, gravity'), squared = cue(id, 'over v squared'), charge = cue(id, 'For a charge in a magnetic field'), bigger = cue(id, 'takes a bigger circle'), rule = cap(id, cue(id, 'Same rule, three different causes'));
	const a = (k: number) => f * k;
	const P = PANELS;
	const polar = (i: number, r: number, t: number): [number, number] => [P[i].cx + r * Math.cos(t), P[i].cy - r * Math.sin(t)];
	const [bx, by] = polar(0, 180, a(0.03)), [sx, sy] = polar(1, 210, a(0.025)), [qx, qy] = polar(2, 170, a(0.03));
	const toward = (i: number, x: number, y: number, len: number): [number, number] => { const d = Math.hypot(P[i].cx - x, P[i].cy - y); return [x + ((P[i].cx - x) / d) * len, y + ((P[i].cy - y) / d) * len]; };
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={every} size={36} border={INK}>real force = mv²/r</Strip>
			<FrameSvg>
				{P.map((p, i) => <g key={i} opacity={prog(f, lets + i * 8, 14)}><CardRect x={p.x} y={p.y} w={p.w} h={p.h} /></g>)}
				{f >= ball ? <g opacity={prog(f, ball, 14)}>
					<circle cx={P[0].cx} cy={P[0].cy} r={180} fill="none" stroke={GREY.stroke} strokeWidth={2.5} strokeDasharray="8 8" />
					<line x1={P[0].cx} y1={P[0].cy} x2={bx} y2={by} stroke={INK} strokeWidth={3} />
					<circle cx={P[0].cx} cy={P[0].cy} r={12} fill="#8a7a63" stroke={INK} strokeWidth={3} />
					<Arrow2 from={[bx, by]} to={toward(0, bx, by, 110)} color={AMBER.stroke} width={7} head={22} />
					<BallSvg cx={bx} cy={by} d={64} />
				</g> : null}
				{f >= sat ? <g opacity={prog(f, sat, 14)}>
					<circle cx={P[1].cx} cy={P[1].cy} r={210} fill="none" stroke={GREY.stroke} strokeWidth={2.5} strokeDasharray="8 8" />
					<Earth cx={P[1].cx} cy={P[1].cy} d={170} />
					<Arrow2 from={[sx, sy]} to={toward(1, sx, sy, 100)} color={AMBER.stroke} width={7} head={22} />
					<Satellite cx={sx} cy={sy} w={120} />
				</g> : null}
				{f >= charge ? <g opacity={prog(f, charge, 14)}>
					<CrossRegion x={P[2].x + 20} y={P[2].y + 20} w={P[2].w - 40} h={P[2].h - 40} step={70} border={false} />
					<circle cx={P[2].cx} cy={P[2].cy} r={170} fill="none" stroke={TEAL.stroke} strokeWidth={3} />
					<Arrow2 from={[qx, qy]} to={toward(2, qx, qy, 110)} color={AMBER.stroke} width={7} head={22} />
					<Particle cx={qx} cy={qy} sign="+" r={20} />
				</g> : null}
			</FrameSvg>
			{['ball on a string (top view)', 'satellite round Earth', 'charge in B (into page)'].map((t, i) => <Lbl key={t} x={P[i].x + 20} y={P[i].y + 36} at={[ball, sat, charge][i]} color={INK} size={30}>{t}</Lbl>)}
			<Lbl x={P[0].x + 20} y={P[0].y + P[0].h - 24} at={radius} color={INK} size={28}>faster → more tension, same r</Lbl>
			<Lbl x={P[1].x + 20} y={P[1].y + P[1].h - 24} at={squared} color={INK} size={28}>faster → smaller r (r = GM/v²)</Lbl>
			<Lbl x={P[2].x + 20} y={P[2].y + P[2].h - 24} at={bigger} color={INK} size={28}>faster → bigger r (r = mv/qB)</Lbl>
			<HandTag x={P[0].x + 380} y={P[0].y + 90} text="string pulls" at={radius} size={30} color={AMBER.ink} />
			<HandTag x={P[1].x + 380} y={P[1].y + 90} text="gravity pulls" at={squared} size={30} color={AMBER.ink} />
			<HandTag x={P[2].x + 380} y={P[2].y + 90} text="field pushes" at={bigger} size={30} color={AMBER.ink} />
			<HandTag x={560} y={206} text="same rule: F = mv²/r" at={rule} size={34} color={INK} />
		</>
	);
};

// ---------- 9. compared with an electric field ----------
export const S09: React.FC = () => {
	const id = 'compare-electric';
	const f = useCurrentFrame();
	const and = cue(id, 'And compare it with an electric field'), there = cue(id, 'There, the force always pointed'), did = cue(id, 'and the field did work'), here = cue(id, 'Here, the force keeps turning'), changes = cap(id, cue(id, 'and the speed never changes'));
	const u = prog(f, there, did - there + 30, x => x);
	const g = {x1: 160, x2: 880, yTop: 300, yBot: 660};
	const yAt = (k: number) => 480 - 150 * k * k;
	const pts = Array.from({length: 41}, (_, i) => { const k = (i / 40) * u; return `${g.x1 + k * 720},${yAt(k)}`; }).join(' ');
	const pulse = usePulse(changes, 30);
	const C = {x: 1404, y: 520}, R = 200;
	const t = f * 0.02;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={96} y={200} w={840} h={690} />
				<CardRect x={984} y={200} w={840} h={690} />
				<FieldLines g={g} step={120} width={3} />
				<PlatePair g={g} thick={16} signSize={28} />
				<polyline points={pts} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
				{[0.25, 0.55, 0.85].filter(k => k <= u).map(k => <g key={k}><StrobeDot cx={g.x1 + k * 720} cy={yAt(k)} r={12} /><Arrow2 from={[g.x1 + k * 720, yAt(k) - 16]} to={[g.x1 + k * 720, yAt(k) - 86]} color={AMBER.stroke} width={6} head={18} /></g>)}
				<Particle cx={g.x1 + u * 720} cy={yAt(u)} sign="−" r={16} />
				<KFixed x={160} y={730} len={60 + 300 * u * u} pulse={pulse} />
				<CrossRegion x={1004} y={220} w={800} h={500} step={80} border={false} opacity={prog(f, here, 14)} />
				{f >= here ? <g opacity={prog(f, here, 14)}>
					<circle cx={C.x} cy={C.y} r={R} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
					{[0, 1, 2].map(k => { const th = t + (k * 2 * Math.PI) / 3; const x = C.x + R * Math.cos(th), y = C.y - R * Math.sin(th); return <VF key={k} x={x} y={y} ux={-Math.sin(th)} uy={-Math.cos(th)} r={16} vLen={90} fLen={80} />; })}
					<KFixed x={1050} y={760} len={220} pulse={pulse} />
				</g> : null}
			</FrameSvg>
			<Lbl x={120} y={250} at={and} color={INK} size={32}>electric field (last time)</Lbl>
			<Lbl x={1004} y={250} at={here} color={INK} size={32}>magnetic field</Lbl>
			<Lbl x={480} y={860} at={did} color={INK} size={30}>parabola; speed changes</Lbl>
			<Lbl x={1340} y={860} at={here + 20} color={INK} size={30}>circle; speed constant</Lbl>
			<HandTag x={600} y={420} text="same direction" at={there + 40} size={30} color={AMBER.ink} />
			<HandTag x={1430} y={380} text="turns with v" at={here + 30} size={30} color={AMBER.ink} />
			<HandTag x={560} y={790} text="grows" at={did + 20} size={32} color={ORANGE.ink} />
			<HandTag x={1320} y={790} text="fixed" at={here + 40} size={32} color={ORANGE.ink} marks={[{kind: 'arrow', from: [640, 800], to: [1040, 790], bend: -0.1}]} markAt={here + 44} />
		</>
	);
};

// ---------- 10. back to the predictions ----------
const MAG = {x: 300, y: 690, r: 120};
export const S10: React.FC = () => {
	const id = 'predictions-answered';
	const f = useCurrentFrame();
	const back = cue(id, 'So, back to the predictions'), noSpeed = cue(id, "The proton doesn't speed up"), noSpiral = cue(id, "and it doesn't spiral in"), steady = cue(id, 'at a steady speed'), elec = cue(id, 'And the electron at the same speed'), way = cap(id, cue(id, 'turning the other way'));
	const t = LAP1 + f * 1.2;
	const st = {x: ORB.cx, y: ORB.cy + ORB.R};
	const ea = f * 0.08;
	const ex = MAG.x + 60 * Math.sin(ea), ey = MAG.y - 60 * Math.cos(ea) + 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MainStage t={t} dashedTo={-200} full />
				{f >= elec ? <g opacity={prog(f, elec, 14)}>
					<circle cx={st.x} cy={st.y + 10} r={10} fill="none" stroke={TEAL.stroke} strokeWidth={3} />
					<line x1={st.x - 12} y1={st.y + 14} x2={MAG.x + MAG.r * 0.8} y2={MAG.y - MAG.r * 0.5} stroke={INK} strokeWidth={2.5} strokeDasharray="6 6" />
					<circle cx={MAG.x} cy={MAG.y} r={MAG.r} fill={CARD} stroke={INK} strokeWidth={4} />
					<circle cx={MAG.x} cy={MAG.y} r={60} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
					<Arrow2 from={[ex, ey]} to={[ex + 40 * Math.cos(ea), ey + 40 * Math.sin(ea)]} color={TEAL.stroke} width={5} head={16} />
					<Particle cx={ex} cy={ey} sign="−" r={14} />
				</g> : null}
			</FrameSvg>
			<Lbl x={REG.x + REG.w / 2} y={REG.y - 22} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<Readouts x={1420} y={600} w={400} size={36} at={back} rows={[{label: 'speed', value: `${sci(WE.v, 1)} m s⁻¹`, color: TEAL.ink}]} />
			<FrameSvg><Ring cx={1620} cy={640} rx={220} ry={60} at={steady + 10} color={TEAL.stroke} /></FrameSvg>
			<HandTag x={1430} y={740} text="steady speed" at={steady + 20} size={32} color={TEAL.ink} />
			<CrossedChip x={1420} y={220} at={back} crossAt={noSpeed + 10} size={32}>speeds up?</CrossedChip>
			<CrossedChip x={1420} y={320} at={back + 6} crossAt={noSpiral + 10} size={32}>spirals in?</CrossedChip>
			<Row at={steady} size={44} style={{position: 'absolute', left: 1420, top: 430}}><AnswerBox at={steady + 6}>circle</AnswerBox></Row>
			<Lbl x={MAG.x} y={MAG.y + MAG.r + 40} at={elec + 10} color={INK} size={28} anchor="middle">electron, enlarged</Lbl>
			<HandTag x={100} y={520} text="tighter (× 1/1837), opposite sense" at={way} size={30} color={TEAL.ink} />
		</>
	);
};

// ---------- 11. memory aid ----------
const OrbitPic: React.FC<{pulse: number}> = ({pulse}) => {
	const f = useCurrentFrame();
	const th = f * 0.05;
	const x = 200 + 90 * Math.cos(th), y = 110 - 90 * Math.sin(th);
	return (
		<svg width={1500} height={220} style={{overflow: 'visible'}}>
			<CrossRegion x={60} y={0} w={280} h={220} step={70} border={false} />
			<circle cx={200} cy={110} r={90} fill="none" stroke={TEAL.stroke} strokeWidth={3} />
			<VF x={x} y={y} ux={-Math.sin(th)} uy={-Math.cos(th)} r={16} vLen={70} fLen={60} />
			<text x={420} y={130} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44 + 8 * pulse, fill: TEAL.ink} as React.CSSProperties}>speed: {sci(WE.v, 1)} m s⁻¹ (fixed)</text>
		</svg>
	);
};
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const remember = cue(id, 'To remember it'), speeds = cue(id, 'it never speeds'), radius = cue(id, 'And the radius is'), mom = cap(id, cue(id, 'momentum on top'));
	const pulse = usePulse(speeds, 30);
	const Br: React.FC<{top: React.ReactNode; label: string}> = ({top, label}) => (
		<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'top'}}>
			<span>{top}</span>
			<Enter at={mom}><span style={{fontFamily: 'Inter Tight', fontSize: 30, fontWeight: 700, color: NAVY.ink, borderTop: `3px solid ${NAVY.stroke}`, padding: '2px 8px'}}>{label}</span></Enter>
		</span>
	);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 140, top: 190, width: 1640}}>
				<MemoryCard at={remember - 20} main={<span>Magnetic force steers. <span style={{color: TEAL.ink}}>It never speeds.</span></span>} picture={<OrbitPic pulse={pulse} />} sub={<Enter at={radius}><span style={{fontSize: 52, color: INK, fontWeight: 800}}>r = <Br top="mv" label="momentum" />/(<Br top="qB" label="charge × field" />)</span></Enter>} />
			</div>
		</>
	);
};
