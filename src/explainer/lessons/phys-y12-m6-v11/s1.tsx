// Scenes 1 to 4: the hook (last time's bench: the two possible currents become the two possible poles at the coil's
// near end, pull it in or push it back), the what-if (greyed bench: a magnet that speeds itself up while two energy
// bars grow from an empty source), paying with work (the bench inset with the push and the push back, a push-speed
// slider with relative readouts and equal work and heat bars), and Lenz's law (a cutaway coil, the magnet's traced
// field lines, the rose induced field against the increase, the minus sign).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Slider} from '../../physics/electromagnetism/plates';
import {CoilTurns, CurlArrow, MagnetAt, MagnetField, crossesPlane, magnetH, magnetLines} from '../../physics/electromagnetism/induction';
import {M6V10FinalFrame} from '../phys-y12-m6-v10/s3';
import {HEAD, HEAD_SIZE, REL, cap, cue, holdIf, mono} from './common';
import {AMBER, AX, Bench, BenchInset, EBar, FIELD1, HEAT, LenzMarks, Lbl, ORANGE, ROSE, Ring, U0, arrowTagAt, insetPt, insetT, magCentre, nearPoleAt} from './parts';

const UF = -24;
const COIL_LINES = magnetLines(Math.round(AX.len), 7, AX.r * 2, 1.6);
const coilMid = AX.along(AX.len / 2);

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const pushed = cue(id, 'The north pole is pushed'), two = cue(id, 'two ways round the coil'), em = cue(id, 'small electromagnet'), nearest = cue(id, 'the end nearest the magnet'), pulls = cue(id, 'pulls the magnet in'), pushes = cue(id, 'pushes the magnet back'), pred = cue(id, 'Make your prediction'), back = cue(id, 'It pushes back, every time'), why = cap(id, cue(id, 'But why'));
	const h = holdIf(id);
	if (f < 1) return <M6V10FinalFrame />;
	const uN = kf(f, mono([[pushed, UF], [pred, 90]]), false);
	const c1 = AX.along(70), c2 = AX.along(170);
	const curls = 1 - prog(f, nearest, 14);
	const pulse = (a: number) => 1 + 0.6 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - a) / 24)));
	const opt1 = prog(f, pulls, 12) * (1 - 0.65 * prog(f, pushes, 12)) * (1 - prog(f, back, 12));
	const opt2 = prog(f, pushes, 12);
	const np = nearPoleAt();
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 16), clipPath: 'inset(150px 0 0 0)'}}><M6V10FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 1, 16)}>
					<Bench uN={uN} needle={20} arrow={1}>
						<g transform={`translate(${coilMid[0]} ${coilMid[1]}) rotate(${AX.deg})`} opacity={0.85 * prog(f, em, 16) * (1 - prog(f, nearest, 16))}>
							<MagnetField lines={COIL_LINES} x={0} y={0} color={ROSE.stroke} width={3} />
						</g>
						<g opacity={curls}>
							<CurlArrow cx={c1[0]} cy={c1[1]} rx={26 * (f >= two && f < two + 30 ? pulse(two) : 1)} ry={AX.r * 1.45} up={false} color={ROSE.stroke} deg={AX.deg} />
							<CurlArrow cx={c2[0]} cy={c2[1]} rx={26 * (f >= two + 24 ? pulse(two + 24) : 1)} ry={AX.r * 1.45} up color={ROSE.stroke} deg={AX.deg} />
						</g>
						<g opacity={opt1}><LenzMarks uN={uN} near="S" force={1} /></g>
						<g opacity={opt2}><LenzMarks uN={uN} near="N" force={-1} /></g>
					</Bench>
				</g>
				<Ring cx={np[0]} cy={np[1] + 40} rx={80} ry={110} at={nearest + 6} color={ROSE.stroke} />
			</FrameSvg>
			<Lbl x={c1[0] - 10} y={c1[1] - AX.r * 1.45 - 24} out={nearest} color={ROSE.ink} size={44} anchor="middle">?</Lbl>
			<Lbl x={c2[0] - 10} y={c2[1] - AX.r * 1.45 - 24} out={nearest} color={ROSE.ink} size={44} anchor="middle">?</Lbl>
			<Lbl x={coilMid[0]} y={coilMid[1] + 200} at={em + 6} out={nearest} color={ROSE.ink} size={32} anchor="middle">the coil: an electromagnet</Lbl>
			<HandTag x={np[0] - 40} y={np[1] - 120} text="near end: S or N?" at={nearest + 10} out={back} size={36} color={ROSE.ink} anchor="middle" />
			<HandTag x={arrowTagAt(uN)[0] - 20} y={arrowTagAt(uN)[1] - 40} text="pull" at={pulls + 8} out={pushes} size={40} color={AMBER.ink} />
			<HandTag x={arrowTagAt(uN)[0] - 160} y={arrowTagAt(uN)[1] - 40} text="push" at={pushes + 8} out={why} size={40} color={AMBER.ink} />
			<Chip x={96} y={250} at={pulls} size={34} w={360}>pull it in</Chip>
			<Chip x={96} y={340} at={pushes} size={34} w={360}>push it back{f >= back ? ' ✓' : ''}</Chip>
			<Row at={back} size={48} style={{position: 'absolute', left: 96, top: 870}}><AnswerBox at={back + 10}>push it back</AnswerBox></Row>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={300} r={52} ringFrom={h.startFrame - pred < 150 ? pred : h.startFrame - 30} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. what if it pulled the magnet in? ----------
const K2 = 0.62;
export const S02: React.FC = () => {
	const id = 'what-if';
	const f = useCurrentFrame();
	const suppose = cue(id, 'Suppose the coil pulled'), nudge = cue(id, 'a tiny nudge'), faster = cue(id, 'A faster magnet'), stronger = cue(id, 'the pull gets stronger'), speed = cue(id, 'The magnet would speed itself up'), ke = cue(id, 'Kinetic energy and heat'), nothing = cue(id, 'from nothing'), breaks = cap(id, cue(id, 'That breaks the law'));
	const t = Math.max(0, f - nudge), T = Math.max(1, nothing - nudge);
	const uN = Math.min(240, U0 + 6 * prog(f, nudge, 12) + 360 * (t / T) ** 2);
	const v = Math.min(1, t / T);
	const grow = Math.min(1, Math.max(0, (f - ke) / (breaks - ke)));
	const P = (p: readonly [number, number]) => insetPt(40, 300, K2, p);
	const mc = P(magCentre(uN));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={0} y={150} width={1920} height={930} fill="#d9d5cd" opacity={0.45} />
				<g transform={insetT(40, 300, K2)} style={{filter: 'grayscale(0.75)'}}>
					<Bench uN={uN} needle={-30 * v} arrow={0}>
						<LenzMarks uN={uN} near="S" current="down" force={0.6 + 0.8 * v} o={{near: prog(f, nudge, 12), current: prog(f, faster, 12), force: prog(f, nudge, 12)}} />
					</Bench>
				</g>
				{f >= nudge && f < nudge + 30 ? <Arrow2 from={[mc[0] - 220, mc[1]]} to={[mc[0] - 140, mc[1]]} color={AMBER.stroke} width={7} head={20} /> : null}
				<Slider x={160} y={640} w={700} value={v} color={AMBER.stroke} label="speed v" opacity={prog(f, nudge, 12)} />
				{/* the runaway loop */}
				<g opacity={prog(f, faster, 14)}>
					{[[230, 760, 'faster'], [560, 760, 'more current'], [890, 760, 'stronger pull']].map(([x, y, s], i) => <text key={i} x={x as number} y={y as number} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: i === 1 ? ROSE.ink : AMBER.ink}}>{s as string}</text>)}
					<Arrow2 from={[320, 748]} to={[440, 748]} color={INK} width={5} head={18} />
					<Arrow2 from={[690, 748]} to={[770, 748]} color={INK} width={5} head={18} />
				</g>
				<path d="M 890 790 C 890 880, 230 880, 230 790" fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, stronger, 14)} />
				<Arrow2 from={[236, 812]} to={[230, 794]} color={INK} width={5} head={18} opacity={prog(f, stronger, 14)} />
				<EBar x={1230} base={820} h={420} frac={0} color={INK} label="supplied" w={150} opacity={prog(f, suppose, 14)} />
				<EBar x={1430} base={820} h={420} frac={0.9 * grow} color={AMBER.stroke} label="kinetic" w={150} opacity={prog(f, suppose, 14)} />
				<EBar x={1630} base={820} h={420} frac={0.9 * grow} color={HEAT} label="heat" w={150} opacity={prog(f, suppose, 14)} />
				<Ring cx={1305} cy={610} rx={110} ry={240} at={nothing + 6} color={INK} />
				{f >= breaks ? <g opacity={prog(f, breaks, 12)}><path d="M 300 300 L 900 620 M 900 300 L 300 620" stroke="#55606b" strokeWidth={16} strokeLinecap="round" /></g> : null}
			</FrameSvg>
			<Chip x={96} y={170} at={suppose} size={32} w={560} color="#55606b" border="#55606b">what if: the coil attracts</Chip>
			<Lbl x={1230} y={360} at={suppose} color={INK} size={30}>energy</Lbl>
			<HandTag x={560} y={890} text="faster → more pull" at={stronger + 10} size={36} color={AMBER.ink} anchor="middle" />
			<HandTag x={1305} y={330} text="supplied: 0" at={nothing + 10} size={36} color={INK} anchor="middle" />
			<Lbl x={1530} y={300} at={speed} color={INK_SOFT} size={30} anchor="middle">both keep growing</Lbl>
			<Row at={breaks} size={48} style={{position: 'absolute', left: 560, top: 440}}><span style={{background: CARD, border: '4px solid #55606b', borderRadius: 12, padding: '2px 18px', color: '#55606b'}}>✗ energy from nothing</span></Row>
		</>
	);
};

// ---------- 3. so it pushes back, and you pay ----------
const K3 = 0.55;
export const S03: React.FC = () => {
	const id = 'pay-with-work';
	const f = useCurrentFrame();
	const must = cue(id, 'So the coil must push back'), keep = cue(id, 'To keep the magnet moving'), work = cue(id, 'doing work'), rep = cue(id, 'against that repulsion'), elec = cue(id, 'That work is where'), res = cue(id, "the coil's resistance"), mech = cue(id, 'Mechanical work in'), elecE = cue(id, 'electrical energy, then'), heat = cue(id, 'then heat out'), bal = cap(id, cue(id, 'The books balance'));
	const k = f < elecE ? 1 : f < heat ? 2 : 3;
	let uN = U0;
	for (let i = keep; i < f; i++) uN += 0.3 * (i < elecE ? 1 : i < heat ? 2 : 3);
	uN = Math.min(uN, 230);
	const r = REL[k - 1];
	const P = (p: readonly [number, number]) => insetPt(30, 200, K3, p);
	const mc = P(magCentre(uN));
	const bars = prog(f, res, 16);
	const frac = (0.1 + 0.9 * (r.power - 1) / 8) * bars;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={insetT(30, 200, K3)}>
					<Bench uN={uN} needle={8 * k} arrow={1}>
						<LenzMarks uN={uN} near="N" current="up" force={-0.8} applied={0.8 + 0.25 * (k - 1)} o={{near: prog(f, must, 12), current: prog(f, must, 12), force: prog(f, rep, 12), applied: prog(f, rep + 6, 12)}} />
					</Bench>
				</g>
				<Slider x={120} y={540} w={600} value={(k - 1) / 2} color={AMBER.stroke} label="push speed" ticks={[[0, '× 1'], [0.5, '× 2'], [1, '× 3']]} opacity={prog(f, mech, 12)} />
				<EBar x={1100} base={760} h={440} frac={frac} color={AMBER.stroke} label="work done" w={170} />
				<EBar x={1360} base={760} h={440} frac={frac} color={ORANGE.stroke} label="electrical" w={170} />
				<EBar x={1620} base={760} h={440} frac={frac} color={HEAT} label="heat" w={170} />
				<Arrow2 from={[1278, 540]} to={[1352, 540]} color={INK} width={6} head={20} opacity={bars} />
				<Arrow2 from={[1538, 540]} to={[1612, 540]} color={INK} width={6} head={20} opacity={bars} />
			</FrameSvg>
			<HandTag x={Math.max(60, mc[0] - 260)} y={mc[1] + 80} text="you push" at={rep + 10} size={34} color={AMBER.ink} />
			<HandTag x={mc[0] + 40} y={mc[1] - 90} text="coil pushes back" at={rep + 4} size={34} color={ROSE.ink} anchor="middle" />
			<Chip x={96} y={600} at={work} size={34} w={600}>work done = force × distance</Chip>
			<Lbl x={1100} y={290} at={elec} color={INK} size={32}>where the electrical energy comes from</Lbl>
			<Readouts x={96} y={690} w={900} size={34} at={mech} rows={[
				{label: 'current', value: `× ${r.current}`, color: ROSE.ink},
				{label: 'push', value: `× ${r.push}`, color: AMBER.ink},
				{label: 'work per second', value: `× ${r.power}`, color: AMBER.ink},
				{label: 'heat per second', value: `× ${r.power}`, color: HEAT},
			]} />
			<Lbl x={1000} y={675} at={mech} color={INK_SOFT} size={28} anchor="end">relative, same position</Lbl>
			<HandTag x={1445} y={880} text="work → electrical → heat" at={res + 20} out={bal} size={34} color={INK} anchor="middle" marks={[{kind: 'arrow', from: [1185, 840], to: [1705, 840], bend: 0.2}]} markAt={res + 24} />
			<Row at={bal} size={48} style={{position: 'absolute', left: 1180, top: 856}}><AnswerBox at={bal + 8}>work in = heat out</AnswerBox></Row>
		</>
	);
};

// ---------- 4. Lenz's law ----------
const CW = {x1: 660, x2: 1060, cy: 640, r: 150, n: 10};
const ML = 380;
const LINES = magnetLines(ML, 9, magnetH(ML) * 0.9, 3.0);
const PLANE = (CW.x1 + CW.x2) / 2;
export const S04: React.FC = () => {
	const id = 'lenz-law';
	const f = useCurrentFrame();
	const lenz = cue(id, "This is Lenz's law"), here = cue(id, 'the flux to the right is increasing'), against = cue(id, 'against the increase'), notice = cue(id, 'Notice that it opposes'), field = cue(id, "not the magnet's field itself"), minus = cue(id, "That's what the minus sign"), always = cap(id, cue(id, 'The induced emf always opposes'));
	const xm = kf(f, mono([[lenz, 160], [always, 430]]), false);
	const lit = LINES.filter(l => crossesPlane(l, xm, PLANE, CW.r)).length;
	const uIn = U0 + (xm - 160) * 0.8;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v11-cut"><rect x={40} y={330} width={1240} height={600} /></clipPath></defs>
				<g clipPath="url(#v11-cut)">
					<CoilTurns x1={CW.x1} x2={CW.x2} cy={CW.cy} r={CW.r} n={CW.n} half="back" />
					<MagnetField lines={LINES} x={xm} y={CW.cy} color={FIELD1} lit={{planeX: PLANE, r: CW.r, color: '#2f3d4c'}} />
					<MagnetAt cx={xm} cy={CW.cy} w={ML} northRight letterSize={40} />
					<CoilTurns x1={CW.x1} x2={CW.x2} cy={CW.cy} r={CW.r} n={CW.n} half="front" />
				</g>
				<Arrow2 from={[CW.x1 + 10, CW.cy - 40]} to={[CW.x2 + 60, CW.cy - 40]} color="#2f3d4c" width={10} head={30} opacity={prog(f, here, 12)} />
				<Arrow2 from={[CW.x2 - 10, CW.cy + 40]} to={[CW.x1 - 60, CW.cy + 40]} color={ROSE.stroke} width={12} head={34} opacity={prog(f, against, 12)} />
				<BenchInset x={1330} y={330} k={0.28} uN={uIn} needle={12} />
				<Ring cx={1560} cy={560} rx={240} ry={60} at={here + 10} color={FIELD1} />
			</FrameSvg>
			<Row at={lenz} size={42} style={{position: 'absolute', left: 96, top: 176}}><AnswerBox at={lenz + 12}>Lenz's law: the induced current's field opposes the change in flux that caused it</AnswerBox></Row>
			<Lbl x={CW.x2 + 70} y={CW.cy - 30} at={here} color="#2f3d4c" size={32}>B (magnet)</Lbl>
			<Lbl x={CW.x1 - 70} y={CW.cy + 100} at={against} color={ROSE.ink} size={32} anchor="end">induced B</Lbl>
			<Readouts x={1330} y={520} w={480} size={44} at={here} rows={[{label: 'lines through the coil', value: String(lit), color: '#2f3d4c'}]} />
			<HandTag x={1360} y={650} text="Φ ↑" at={here + 14} size={40} color={FIELD1} />
			<CrossedChip x={1330} y={700} at={field} crossAt={field + 30} size={30} caption="the change, not the field">opposes the magnet's field</CrossedChip>
			<Row at={minus} size={48} style={{position: 'absolute', left: 96, top: 860}}>ε = <MarkSpan kind="circle" at={minus + 20} color={ROSE.stroke} width={5}>−</MarkSpan>N ΔΦ / Δt</Row>
			<HandTag x={560} y={880} text="minus sign = opposes the change" at={always} size={36} color={ROSE.ink} />
			<Lbl x={CW.x1} y={CW.cy + CW.r + 60} at={notice} color={INK} size={30}>coil (cut away)</Lbl>
		</>
	);
};
