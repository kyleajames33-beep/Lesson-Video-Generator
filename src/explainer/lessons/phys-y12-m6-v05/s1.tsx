// Scenes 1 to 6: the hook (last time's proton moving on along its "?" path, the painted horseshoe magnet inset, three
// predictions), zero work (the work counter stuck at 0, the fixed K bar, last time's plate path as the contrast),
// why a circle (four equal inward forces, the empty centre), the radius (algebra beside a live orbit with speed and
// field sliders), the worked electron and proton (two panels at their own scales) and the perpendicular acceleration.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, FieldLines, Particle, PlatePair, Slider} from '../../physics/electromagnetism/plates';
import {Arrow2, AxisTriad, Horseshoe} from '../../physics/electromagnetism/magnetic';
import {M6V04FinalFrame, ORB, REG, orbAt} from '../phys-y12-m6-v04/s3';
import {HEAD, HEAD_SIZE, WE, cap, cue, holdIf, mono, orbitRun, slider} from './common';
import {AMBER, CardRect, CentreMark, FIELD, GREY, Givens, KFixed, Lbl, NAVY, ORANGE, Ring, ScaleBar, Strip, TEAL, VF, VIOLET, fx, onRun, sci} from './parts';

// ---------- the main orbit stage (scenes 1 to 3 and 10): last time's region and circle ----------
const SPEED = 3;
export const RUN1 = orbitRun(ORB.R, SPEED);
export const LAP1 = RUN1.duration;
const START = {x: ORB.cx, y: ORB.cy + ORB.R};
/** The stage shifted by dx: crosses, the travelled path (solid teal), the rest of last time's dashed path, the proton. */
export const MainStage: React.FC<{t: number; dx?: number; dashedTo?: number; vf?: boolean; full?: boolean; mark?: number; children?: React.ReactNode}> = ({t, dx = 0, dashedTo = 120, vf = true, full = false, mark = 3.5, children}) => {
	const p = onRun(RUN1, Math.min(t, full ? LAP1 * 10 : LAP1 * 0.999), START.x + dx, START.y);
	const ang = -90 + (360 * Math.min(t, LAP1)) / LAP1;
	const solid = full && t >= LAP1 ? 270 : ang + 90;
	const pts = (a0: number, a1: number) => Array.from({length: 61}, (_, i) => { const [x, y] = orbAt(a0 + ((a1 - a0) * i) / 60); return `${x + dx},${y}`; }).join(' ');
	return (
		<g>
			<CrossRegion x={REG.x + dx} y={REG.y} w={REG.w} h={REG.h} step={80} />
			{dashedTo > ang ? <polyline points={pts(ang, dashedTo)} fill="none" stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" /> : null}
			{solid > 0.5 ? <polyline points={pts(-90, -90 + Math.min(360, solid))} fill="none" stroke={TEAL.stroke} strokeWidth={4} /> : null}
			{children}
			{vf ? <VF x={p.x} y={p.y} ux={p.ux} uy={p.uy} r={26} vLen={200} fLen={170} markW={mark} /> : null}
		</g>
	);
};

// ---------- 1. hook: a push that never speeds it up ----------
const CHIPS = ['speeds up', 'spirals in', 'circle'];
export const MagnetInset: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0) return null;
	return (
		<g opacity={o}>
			<CardRect x={100} y={190} w={400} h={330} />
			<Horseshoe x={350} top={320} bot={390} />
			<Arrow2 from={[350, 214]} to={[350, 480]} color={INK} width={4} head={18} dash="10 7" />
		</g>
	);
};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const here = cue(id, "Here's our proton"), turns = cue(id, 'As it turns'), always = cue(id, 'always at right angles'), circle = cue(id, 'or go round in a circle'), electron = cue(id, 'And would an electron'), make = cue(id, 'Make your predictions');
	const h = holdIf(id);
	if (f < 1) return <M6V04FinalFrame />;
	const t = kf(f, mono([[turns, 0], [turns + 90, LAP1 / 6]]), false);
	const p = onRun(RUN1, t, START.x, START.y);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 14), clipPath: 'inset(150px 0 0 0)'}}><M6V04FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MainStage t={t} />
				<MagnetInset at={here} />
				<Ring cx={p.x + 10} cy={p.y - 10} rx={70} ry={66} at={always + 10} color={AMBER.stroke} />
				{f >= electron ? <g opacity={prog(f, electron, 14)}><Arrow2 from={[START.x + 26, START.y]} to={[START.x + 150, START.y]} color={TEAL.stroke} width={5} head={18} /><Particle cx={START.x} cy={START.y} sign="−" r={22} /></g> : null}
			</FrameSvg>
			<Lbl x={REG.x + REG.w / 2} y={REG.y - 22} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<HandTag x={100} y={560} text="looking down through the gap:" at={here + 20} size={30} color={GREY.ink} />
			<HandTag x={100} y={600} text="B into the page" at={here + 36} size={30} color={GREY.ink} />
			<HandTag x={p.x + 80} y={p.y - 90} text="always 90°" at={always + 20} size={32} color={AMBER.ink} />
			<Readouts x={1420} y={600} w={400} size={44} rows={[{label: 'speed', value: 'v = ?', color: TEAL.ink}]} />
			<FrameSvg><Ring cx={1620} cy={640} rx={220} ry={60} at={always + 40} color={TEAL.stroke} /></FrameSvg>
			{CHIPS.map((c, i) => <Chip key={c} x={1420} y={220 + i * 100} at={circle + i * 8} size={34} w={400}>{c}?</Chip>)}
			<Chip x={START.x - 100} y={770} at={electron + 10} size={30} border={TEAL.stroke} color={TEAL.ink}>electron: tighter or wider?</Chip>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={make} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. no work, so no change in speed ----------
const PAN = -360;
/** Last time's plate path, small: an electron curving up between plates with its K bar growing. */
const PlatePath: React.FC<{x: number; y: number; t: number}> = ({x, y, t}) => {
	const g = {x1: x + 40, x2: x + 460, yTop: y + 50, yBot: y + 210};
	const pts = Array.from({length: 41}, (_, i) => { const u = (i / 40) * t; return `${g.x1 + u * 420},${y + 130 - 70 * u * u}`; }).join(' ');
	return (
		<g>
			<CardRect x={x} y={y} w={764} h={290} />
			<FieldLines g={g} step={100} width={3} />
			<PlatePair g={g} thick={14} signSize={26} signStep={90} />
			<polyline points={pts} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
			<Particle cx={g.x1 + t * 420} cy={y + 130 - 70 * t * t} sign="−" r={13} />
			<rect x={x + 500} y={y + 120} width={60 + 180 * t * t} height={30} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
		</g>
	);
};
export const S02: React.FC = () => {
	const id = 'zero-work';
	const f = useCurrentFrame();
	const start = cue(id, 'Start with the speed'), part = cue(id, 'Work is done only by the part'), right = cue(id, 'always at right angles to the velocity'), instant = cue(id, 'it does no work, at any instant'), noWork = cue(id, 'No work means no change'), same = cue(id, 'the speed stays exactly the same'), field = cue(id, 'The field changes the direction'), diff = cue(id, "That's different from the electric field"), up = cap(id, cue(id, 'and sped the electron up'));
	const dx = PAN * prog(f, 0, 30);
	const t = LAP1 / 6 + f * 0.22;
	const p = onRun(RUN1, t, START.x + dx, START.y);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MainStage t={t} dx={dx} />
				{f >= part ? <Arrow2 from={[p.x + p.ux * 30, p.y + p.uy * 30]} to={[p.x + p.ux * 110, p.y + p.uy * 110]} color={TEAL.stroke} width={4} head={16} dash="8 6" opacity={prog(f, part, 12)} /> : null}
				{f >= noWork ? <KFixed x={1460} y={420} len={220} /> : null}
				{f >= diff ? <g opacity={prog(f, diff, 14)}><PlatePath x={1060} y={600} t={prog(f, diff + 10, up - diff + 20, x => x)} /></g> : null}
				<Ring cx={1250} cy={470} rx={190} ry={50} at={instant + 40} color={INK} />
			</FrameSvg>
			<Lbl x={REG.x + dx + REG.w / 2} y={REG.y - 22} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<Lbl x={p.x + 40} y={p.y + 60} at={right} color={INK} size={32}>θ = 90°</Lbl>
			<div style={{position: 'absolute', left: 1060, top: 180, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={part} ageAt={instant} size={44} oldSize={34}>W = Fd cos θ</Row>
				<Row at={instant} size={48}>cos 90° = 0 → <AnswerBox at={instant + 14}>W = 0</AnswerBox></Row>
			</div>
			<Readouts x={1060} y={340} w={380} size={40} at={start} rows={[
				{label: 'work done', value: f >= instant ? '0 J' : '?', color: INK},
				{label: 'speed', value: f >= same ? sci(WE.v, 1) : '?', unit: 'm s⁻¹', color: TEAL.ink},
			]} />
			<HandTag x={1100} y={300} text="stuck at 0" at={instant + 46} size={30} color={INK} />
			<HandTag x={1460} y={500} text="no work, same K" at={noWork + 20} size={30} color={ORANGE.ink} />
			<Lbl x={1460} y={400} at={same} color={ORANGE.ink} size={28}>K constant → speed constant</Lbl>
			<CrossedChip x={1460} y={180} at={field} crossAt={field + 30} size={30}>the push speeds it up</CrossedChip>
			<Lbl x={1080} y={870} at={diff + 10} color={INK} size={30}>last time, between plates: the field does work</Lbl>
			<Lbl x={140} y={900} at={start} color={INK_SOFT} size={28}>proton, B into the page</Lbl>
		</>
	);
};

// ---------- 3. why the path is a circle ----------
export const S03: React.FC = () => {
	const id = 'why-circle';
	const f = useCurrentFrame();
	const so = cue(id, 'So the speed is constant'), turn = cue(id, 'turns the path by the same amount'), motion = cue(id, "That's uniform circular motion"), points = cue(id, 'The magnetic force points to the centre'), centripetal = cue(id, 'It is the centripetal force'), extra = cue(id, "There's no extra force"), centre = cap(id, cue(id, 'nothing at the centre'));
	const t = kf(f, mono([[0, LAP1 / 6 + 1041 * 0.22], [motion, LAP1 * 1.02], [motion + 400, LAP1 * 1.6]]), false);
	const snaps = [0, 0.25, 0.5, 0.75].map(k => k * LAP1);
	const showSnaps = prog(f, turn, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MainStage t={t} dx={PAN} dashedTo={-200} full>
					{snaps.map((tk, i) => { const p = onRun(RUN1, tk, START.x + PAN, START.y); return <VF key={i} x={p.x} y={p.y} ux={p.ux} uy={p.uy} r={18} vLen={130} fLen={120} opacity={showSnaps} />; })}
				</MainStage>
				<CentreMark x={ORB.cx + PAN} y={ORB.cy} opacity={prog(f, centre, 14)} />
				<Ring cx={ORB.cx + PAN} cy={ORB.cy} rx={170} ry={170} at={points + 20} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={REG.x + PAN + REG.w / 2} y={REG.y - 22} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<div style={{position: 'absolute', left: 1060, top: 180, display: 'flex', flexDirection: 'column', gap: 10, width: 764}}>
				<Row at={so} ageAt={motion} size={44} oldSize={34}>constant speed → |F| = qvB constant</Row>
				<Row at={motion} size={48}><AnswerBox at={motion + 12}>circle</AnswerBox> uniform circular motion</Row>
				<Row at={centripetal} size={44}><span style={{color: AMBER.ink}}>F<Sub>B</Sub> is the centripetal force</span></Row>
			</div>
			<Chip x={1060} y={500} at={motion + 30} size={30} w={764}>earlier: circular motion needs a net inward force, mv²/r</Chip>
			<HandTag x={1060} y={640} text="same size, always inward" at={points + 26} size={32} color={AMBER.ink} />
			<HandTag x={1060} y={700} text="same turn every moment" at={turn + 30} size={32} color={TEAL.ink} />
			<CrossedChip x={1060} y={750} at={extra} crossAt={extra + 30} size={30}>a string or object at the centre</CrossedChip>
			<Lbl x={ORB.cx + PAN} y={ORB.cy + 60} at={centre} color={INK} size={28} anchor="middle">nothing here</Lbl>
			<Lbl x={1060} y={900} at={centre} color={INK} size={30}>the field supplies the force at every point</Lbl>
		</>
	);
};

// ---------- 4. deriving the radius ----------
const C4 = {x: 430, y: 615}, PXM = 45;
export const S04: React.FC = () => {
	const id = 'radius';
	const f = useCurrentFrame();
	const set = cue(id, 'Set the magnetic force equal'), qvb = cue(id, 'q v B equals m v squared'), cancels = cue(id, 'One v cancels'), r = cue(id, 'so r equals m v over q B'), read = cue(id, 'Read what it says'), faster = cue(id, 'A faster or heavier particle'), stronger = cue(id, 'A stronger field, or a bigger'), mass = cap(id, cue(id, 'The mass is on top'));
	const v = kf(f, mono([[faster, 4e6], [faster + 40, 8e6], [stronger - 6, 8e6], [stronger + 30, 4e6]]));
	const B = kf(f, mono([[stronger, 0.02], [stronger + 40, 0.04]]));
	const rm = slider(v, B).r, rp = rm * PXM;
	let ang = 0;
	for (let k = 0; k < f; k++) ang += 0.045 * (kf(k, mono([[stronger, 0.02], [stronger + 40, 0.04]])) / 0.02);
	const px = C4.x + rp * Math.cos(-Math.PI / 2 + ang), py = C4.y - rp * Math.sin(-Math.PI / 2 + ang);
	const ux = -Math.sin(-Math.PI / 2 + ang), uy = -Math.cos(-Math.PI / 2 + ang);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={110} y={400} w={640} h={430} step={80} />
				<circle cx={C4.x} cy={C4.y} r={rp} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
				<line x1={C4.x} y1={C4.y} x2={px} y2={py} stroke={NAVY.stroke} strokeWidth={4} />
				<VF x={px} y={py} ux={ux} uy={uy} r={18} vLen={110} fLen={90} />
				<Slider x={130} y={890} w={260} value={(v - 2e6) / 6e6} color={TEAL.stroke} label="speed v" opacity={prog(f, read, 12)} />
				<Slider x={470} y={890} w={260} value={(B - 0.01) / 0.04} color={GREY.stroke} label="field B" opacity={prog(f, read, 12)} />
			</FrameSvg>
			<Readouts x={110} y={170} w={640} size={36} at={set} title="proton" rows={[{label: 'v', value: sci(v, 1), unit: 'm s⁻¹', color: TEAL.ink}, {label: 'B', value: `${fx(B, 3)} T`, color: GREY.ink}, {label: 'r', value: `${fx(rm, 2)} m`, color: NAVY.ink}]} />
			<div style={{position: 'absolute', left: 860, top: 190, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={set} ageAt={qvb} size={44} oldSize={34}>magnetic force = centripetal force</Row>
				<Row at={qvb} ageAt={cancels} size={48} oldSize={36}>qvB = mv²/r</Row>
				<Row at={cancels} ageAt={r} size={48} oldSize={36}>q<MarkSpan kind="strike" at={cancels + 20} color={TEAL.stroke}>v</MarkSpan>B = mv<MarkSpan kind="strike" at={cancels + 26} color={TEAL.stroke}>²</MarkSpan>/r → qB = mv/r</Row>
				<Row at={r} size={60}><AnswerBox at={r + 14}><span style={{color: NAVY.ink}}>r = mv/(qB)</span></AnswerBox></Row>
			</div>
			<HandTag x={1400} y={350} text="one v cancels" at={cancels + 30} size={32} color={TEAL.ink} />
			{[['v ↑ → r ↑', faster], ['m ↑ → r ↑', faster + 12], ['B ↑ → r ↓', stronger], ['q ↑ → r ↓', stronger + 12]].map(([s, a], i) => <Chip key={String(s)} x={860 + (i % 2) * 330} y={600 + Math.floor(i / 2) * 100} at={Number(a)} size={36} w={300}>{s}</Chip>)}
			<HandTag x={860} y={850} text="heavier: harder to turn" at={mass} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 5. worked example: an electron and a proton ----------
const PE = {x: 1110, y: 480, w: 350, h: 360}, PP = {x: 1474, y: 480, w: 350, h: 360};
const RE_PX = 110, RP_PX = 120;
const RUN_E = orbitRun(RE_PX, 3, 1, 0, -1), RUN_P = orbitRun(RP_PX, 3, 1, 0, 1);
export const S05: React.FC = () => {
	const id = 'worked-orbits';
	const f = useCurrentFrame();
	const tryC = cue(id, 'Try an electron and a proton'), forE = cue(id, 'For the electron, r is'), mm = cue(id, 'one point one four millimetres'), proton = cue(id, 'The proton has the same size'), metres = cue(id, 'two point oh nine metres'), opp = cap(id, cue(id, 'And they turn in opposite directions'));
	const go = Math.max(0, f - opp);
	const pe = onRun(RUN_E, go, PE.x + PE.w / 2, PE.y + PE.h / 2 - RE_PX), pp = onRun(RUN_P, go, PP.x + PP.w / 2, PP.y + PP.h / 2 + RP_PX);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={tryC} size={30} w={1000}>Electron and proton, same speed, same field: find each radius.</Strip>
			<Strip x={96} y={250} at={tryC + 10} size={34} border={INK}>r = mv/(qB)</Strip>
			<Givens x={96} y={326} w={990} at={tryC + 20} size={30} lines={[
				<>v = 4.0 × 10⁶ m s⁻¹, B = 0.020 T, |q| = 1.602 × 10⁻¹⁹ C</>,
				<>m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg, m<Sub>p</Sub> = 1.673 × 10⁻²⁷ kg</>,
			]} />
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 12, width: 1000}}>
				<Row at={forE} ageAt={proton} size={36} oldSize={30}>r<Sub>e</Sub> = (9.109 × 10⁻³¹ × 4.0 × 10⁶)/(1.602 × 10⁻¹⁹ × 0.020)</Row>
				<Row at={mm} size={52}>&nbsp;&nbsp;= <AnswerBox at={mm + 14}><span style={{color: NAVY.ink}}>{sci(WE.re, 2)} m</span></AnswerBox></Row>
				<Row at={metres} size={52}>r<Sub>p</Sub> = <AnswerBox at={metres + 14}><span style={{color: NAVY.ink}}>{fx(WE.rp, 2)} m</span></AnswerBox> <span style={{fontSize: 36}}>(× {fx(WE.ratio, 0)})</span></Row>
			</div>
			<HandTag x={660} y={600} text="× 1837" at={metres + 30} size={36} color={NAVY.ink} marks={[{kind: 'arrow', from: [640, 545], to: [640, 640], bend: -0.4}]} markAt={metres + 26} />
			<CrossedChip x={96} y={840} at={proton + 30} crossAt={metres + 10} size={30} caption="mass is on top">same charge, same radius</CrossedChip>
			<FrameSvg>
				{[PE, PP].map((P, i) => <g key={i} opacity={prog(f, i ? proton : forE, 14)}><CardRect x={P.x} y={P.y} w={P.w} h={P.h} /><CrossRegion x={P.x + 10} y={P.y + 10} w={P.w - 20} h={P.h - 20} step={60} border={false} opacity={0.7} /></g>)}
				{f >= mm ? <g opacity={prog(f, mm, 14)}>
					<circle cx={PE.x + PE.w / 2} cy={PE.y + PE.h / 2} r={RE_PX} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
					<VF x={pe.x} y={pe.y} ux={pe.ux} uy={pe.uy} sign="−" turn={-1} r={16} vLen={80} fLen={70} />
					<ScaleBar x={PE.x + 30} y={PE.y + PE.h + 30} px={RE_PX / (WE.re * 1000)} label="1 mm" />
				</g> : null}
				{f >= metres ? <g opacity={prog(f, metres, 14)}>
					<circle cx={PP.x + PP.w / 2} cy={PP.y + PP.h / 2} r={RP_PX} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
					<VF x={pp.x} y={pp.y} ux={pp.ux} uy={pp.uy} r={16} vLen={80} fLen={70} />
					<ScaleBar x={PP.x + 30} y={PP.y + PP.h + 30} px={RP_PX / WE.rp} label="1 m" />
				</g> : null}
			</FrameSvg>
			<Lbl x={PE.x + PE.w / 2} y={PE.y - 20} at={forE} color={INK} size={32} anchor="middle">electron</Lbl>
			<Lbl x={PP.x + PP.w / 2} y={PP.y - 20} at={proton} color={INK} size={32} anchor="middle">proton</Lbl>
			<HandTag x={PE.x + 330} y={PE.y + PE.h + 50} text="clockwise" at={opp + 20} size={30} color={TEAL.ink} anchor="end" />
			<HandTag x={PP.x + 330} y={PP.y + PP.h + 50} text="anticlockwise" at={opp + 20} size={30} color={TEAL.ink} anchor="end" />
			<Lbl x={1824} y={405} at={tryC} color={GREY.ink} size={28} anchor="end">B into page (different scales)</Lbl>
		</>
	);
};

// ---------- 6. an acceleration at right angles to the field ----------
const C6 = {x: 430, y: 580}, R6 = 250;
const RUN6 = orbitRun(R6, 3.2, 1, 0, -1);
export const S06: React.FC = () => {
	const id = 'perpendicular-acceleration';
	const f = useCurrentFrame();
	const call = cue(id, 'Physicists call this'), isnt = cue(id, "The electron's speed isn't"), turning = cue(id, 'because its direction keeps turning'), its = cue(id, 'Its acceleration is the force'), squared = cue(id, 'metres per second squared'), points = cue(id, 'It points to the centre'), both = cap(id, cue(id, 'at right angles to both'));
	const p = onRun(RUN6, f, C6.x, C6.y - R6);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={800} y={176} at={call} size={34} border={VIOLET.stroke} color={VIOLET.ink}>an acceleration perpendicular to the field</Strip>
			<FrameSvg>
				<CrossRegion x={130} y={250} w={600} h={630} step={80} />
				<circle cx={C6.x} cy={C6.y} r={R6} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
				<VF x={p.x} y={p.y} ux={p.ux} uy={p.uy} sign="−" turn={-1} r={22} vLen={180} fLen={130} aLen={f >= its ? 170 : 0} />
				<ScaleBar x={150} y={850} px={R6 / (WE.re * 1000)} label="1 mm" />
				<AxisTriad cx={880} cy={820} len={90} size={30} opacity={prog(f, both, 14)} arms={[
					{d: [1, 0, 0], color: TEAL.stroke, label: 'v'},
					{d: [0, -1, 0], color: VIOLET.stroke, label: 'a'},
					{d: [0, 0, -1], color: FIELD, label: 'B (in)'},
				]} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 800, top: 260, display: 'flex', flexDirection: 'column', gap: 10, width: 1024}}>
				<Row at={isnt} ageAt={its} size={40} oldSize={32}>speed constant; velocity turning</Row>
				<Row at={its} ageAt={squared} size={44} oldSize={34}><span style={{color: VIOLET.ink}}>a</span> = F/m = qvB/m</Row>
				<Row at={its + 40} ageAt={squared} size={36} oldSize={32}>&nbsp;&nbsp;= (1.602 × 10⁻¹⁹ × 4.0 × 10⁶ × 0.020)/(9.109 × 10⁻³¹)</Row>
				<Row at={squared} size={52}>&nbsp;&nbsp;= <AnswerBox at={squared + 14}><span style={{color: VIOLET.ink}}>{sci(WE.a, 1)} m s⁻²</span></AnswerBox></Row>
				<Row at={squared + 40} size={34}>check: v²/r = {sci(WE.v2r, 1)} m s⁻² ✓</Row>
			</div>
			<HandTag x={1360} y={660} text="turns v, not speed" at={points} size={34} color={VIOLET.ink} />
			<CrossedChip x={1360} y={720} at={turning} crossAt={turning + 30} size={30}>constant speed, so a = 0</CrossedChip>
			<Lbl x={1000} y={850} at={both + 10} color={INK} size={30}>a ⊥ B and a ⊥ v: direction changes, speed doesn't</Lbl>
			<Lbl x={140} y={230} at={call} color={GREY.ink} size={28}>the electron, B into page</Lbl>
		</>
	);
};
