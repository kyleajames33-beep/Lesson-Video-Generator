// Scenes 5 to 8: four steps to the current direction (the bench with a step rail, the coded grip-rule axis and an
// end-on view "seen from the magnet"), stop then pull out (two columns: coming in, frozen; going away, live), the
// evidence (an open then closed circuit on the circuits engine; then a magnet dropped through a coil held upright in
// the painted stand and boss, and through an open coil beside it), and the memory aid.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AidCard, AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {Boss, COIL, Galvanometer, Stand, galvPts} from '../../physics/electromagnetism/bench';
import {EndOnLoop, GripAxis, MagnetAt} from '../../physics/electromagnetism/induction';
import {solveCircuit} from '../../sims/circuits';
import {HEAD, HEAD_SIZE, cap, cue, mono} from './common';
import {AMBER, AX, Bench, CardRect, EBar, HEAT, LenzMarks, Lbl, NAVY, PoleBadge, ROSE, Ring, U0, insetPt, insetT, nearPoleAt} from './parts';

// ---------- 5. four steps to the current direction ----------
const K5 = 0.62, X5 = 20, Y5 = 230;
const P5 = (p: readonly [number, number]) => insetPt(X5, Y5, K5, p);
const Slot: React.FC<{n: number; y: number; at: number; children: React.ReactNode; framed?: boolean}> = ({n, y, at, children, framed = false}) => (
	<Row at={at} size={40} style={{position: 'absolute', left: 1230, top: y, width: 600, whiteSpace: 'normal'}}>
		<span style={{color: NAVY.ink}}>{n} </span>{framed ? <AnswerBox at={at + 10}>{children}</AnswerBox> : children}
	</Row>
);
export const S05: React.FC = () => {
	const id = 'four-steps';
	const f = useCurrentFrame();
	const four = cue(id, 'in four steps'), right = cue(id, 'To the right'), incr = cue(id, 'Increasing, as the magnet'), left = cue(id, 'so it points left'), grip = cue(id, 'use the right-hand grip rule'), curl = cue(id, 'Curl the fingers'), anti = cue(id, 'the current flows anticlockwise'), side = cue(id, "seen from the magnet's side"), becomes = cue(id, "the coil's left end becomes"), like = cap(id, cue(id, 'Like poles repel'));
	const uN = kf(f, mono([[four, U0], [like, 110]]), false);
	const pulse = (a: number) => 1 + 0.5 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - a) / 24)));
	const np = P5(nearPoleAt());
	const slots: [number, number][] = [[right, 200], [incr, 330], [left, 440], [side, 560]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={insetT(X5, Y5, K5)}>
					<Bench uN={uN} needle={10} arrow={1}>
						<LenzMarks uN={uN} ext={1} induced={-1} current="up" near="N" force={-0.8 * pulse(like)} o={{ext: prog(f, right, 12), induced: prog(f, left, 12), current: prog(f, side, 12), near: prog(f, becomes, 12), force: prog(f, like, 10)}} />
					</Bench>
				</g>
				<CardRect x={60} y={560} w={420} h={360} />
				<EndOnLoop cx={270} cy={760} r={95} sense="acw" centre="dot" color={ROSE.stroke} opacity={prog(f, side, 12)} />
				<GripAxis x={760} y={760} len={300} dir={-1} color={ROSE.stroke} opacity={prog(f, grip, 14)} />
				{slots.map(([a, y], i) => <Ring key={i} cx={1520} cy={y + 34} rx={310} ry={i === 3 ? 80 : 44} at={a + 6} color={NAVY.stroke} seed={i + 2} />)}
			</FrameSvg>
			<Lbl x={80} y={600} color={INK} size={30}>seen from the magnet</Lbl>
			<Lbl x={270} y={900} at={side + 6} color={ROSE.ink} size={30} anchor="middle">induced B towards you</Lbl>
			<Lbl x={760} y={660} at={grip + 8} color={ROSE.ink} size={30} anchor="middle">thumb: induced B</Lbl>
			<Lbl x={760} y={880} at={curl} color={ROSE.ink} size={30} anchor="middle">fingers: current</Lbl>
			<Chip x={1230} y={150} at={four} size={30} w={420} color={NAVY.ink} border={NAVY.stroke}>four steps</Chip>
			<Slot n={1} y={slots[0][1]} at={right}>external B: right →</Slot>
			<Slot n={2} y={slots[1][1]} at={incr}>Φ increasing</Slot>
			<Slot n={3} y={slots[2][1]} at={left}>induced B: ← (opposes)</Slot>
			<Slot n={4} y={slots[3][1]} at={side} framed>current: anticlockwise (seen from the magnet)</Slot>
			<CrossedChip x={1230} y={760} at={anti} crossAt={side + 10} size={32} caption="say where you look from">clockwise</CrossedChip>
			<HandTag x={np[0]} y={np[1] - 70} text="like poles repel" at={like} size={36} color={ROSE.ink} anchor="middle" />
		</>
	);
};

// ---------- 6. stop, then pull it out ----------
const K6 = 0.46, XL = 20, XR = 970, Y6 = 300;
export const S06: React.FC = () => {
	const id = 'stop-and-pull';
	const f = useCurrentFrame();
	const stop = cue(id, 'Stop the magnet'), force = cue(id, 'no force'), pull = cue(id, 'pull the magnet back out'), still = cue(id, 'The field still points right'), decr = cue(id, 'now the flux is decreasing'), prop = cue(id, 'propping up the flux'), clock = cue(id, 'flips to clockwise'), escape = cue(id, 'against its escape'), pushing = cue(id, 'Pushing in, the coil repels'), attracts = cap(id, cue(id, 'Pulling out, it attracts'));
	const uR = kf(f, mono([[0, 110], [pull, 110], [attracts, U0 - 60]]), false);
	const out = f >= pull;
	const off = 1 - prog(f, stop, 10);
	const npL = insetPt(XL, Y6, K6, nearPoleAt()), npR = insetPt(XR, Y6, K6, nearPoleAt());
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={20} y={230} w={900} h={620} />
				<CardRect x={970} y={230} w={900} h={620} />
				<g transform={insetT(XL, Y6, K6)}>
					<Bench uN={110} needle={10} arrow={1} letters={false}><LenzMarks uN={110} ext={1} induced={-1} current="up" near="N" force={-0.8} badgeR={60} /></Bench>
				</g>
				<g transform={insetT(XR, Y6, K6)}>
					<Bench uN={uR} needle={out ? -12 * prog(f, pull, 12) : 10 * off} arrow={out ? 1 : off} arrowDir={out ? -1 : 1} letters={false}>
						<LenzMarks uN={uR} badgeR={60} ext={1} induced={out ? 1 : -1} current={out ? 'down' : 'up'} near={out ? 'S' : 'N'} force={out ? 0.8 : -0.8}
							o={out ? {ext: prog(f, still, 12), induced: prog(f, prop, 12), current: prog(f, clock, 12), near: prog(f, clock + 40, 12), force: prog(f, escape, 12)} : {ext: off, induced: off, current: off, near: off, force: off}} />
					</Bench>
				</g>
				<EndOnLoop cx={150} cy={720} r={60} sense="acw" centre="dot" color={ROSE.stroke} />
				<EndOnLoop cx={1100} cy={720} r={60} sense="cw" centre="cross" color={ROSE.stroke} opacity={prog(f, clock, 12)} />
			</FrameSvg>
			<Lbl x={50} y={280} color={INK} size={36}>coming in</Lbl>
			<Lbl x={1000} y={280} color={INK} size={36}>going away</Lbl>
			<Lbl x={240} y={730} color={ROSE.ink} size={30}>anticlockwise (seen from the magnet)</Lbl>
			<Lbl x={1190} y={730} at={clock} color={ROSE.ink} size={30}>clockwise (seen from the magnet)</Lbl>
			<Row at={force} out={pull} size={36} style={{position: 'absolute', left: 1000, top: 620}}>Φ steady: ε = 0, I = 0, F = 0</Row>
			<Row at={decr} out={clock} size={36} style={{position: 'absolute', left: 1000, top: 620}}>external B: right →, Φ decreasing</Row>
			<HandTag x={npR[0] + 120} y={npR[1] + 140} text="props up Φ" at={prop + 10} size={34} color={ROSE.ink} />
			<HandTag x={npR[0] - 180} y={npR[1] - 20} text="pulls back" at={escape + 10} size={34} color={AMBER.ink} />
			<CrossedChip x={600} y={150} at={pushing} crossAt={attracts} size={30} caption="going away, it attracts">a coil always repels</CrossedChip>
			<Row at={pushing} size={36} style={{position: 'absolute', left: 50, top: 870}}><AnswerBox at={pushing + 10}>coming in: N faces N, repel</AnswerBox></Row>
			<Row at={attracts} size={36} style={{position: 'absolute', left: 1000, top: 870}}><AnswerBox at={attracts + 8}>going away: S faces N, attract</AnswerBox></Row>
			<Lbl x={npL[0]} y={npL[1] - 60} color={ROSE.ink} size={30} anchor="middle">N faces N</Lbl>
		</>
	);
};

// ---------- 7. the evidence: who pays? ----------
// The drop test: a coil turned upright (axis vertical) in the painted stand and boss; the magnet falls north end first.
const COIL_ROT = 90 - AX.deg;
const D = {h: 420, cy: 610, xa: 600, xb: 1160};
const CS = D.h / (COIL.box[2] - COIL.box[0]);
const BOXC: [number, number] = [(COIL.box[0] + COIL.box[2]) / 2, (COIL.box[1] + COIL.box[3]) / 2];
/** Where a native coil-plate point lands when the coil is drawn upright about (cx, cy). */
const upright = (cx: number, cy: number, q: readonly [number, number]): [number, number] => {
	const a = (COIL_ROT * Math.PI) / 180, dx = (q[0] - BOXC[0]) * CS, dy = (q[1] - BOXC[1]) * CS;
	return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
};
const UprightCoil: React.FC<{cx: number; cy: number; opacity?: number}> = ({cx, cy, opacity = 1}) => (
	<g opacity={opacity} transform={`rotate(${COIL_ROT} ${cx} ${cy})`}><image href={staticFile(COIL.src)} x={cx - BOXC[0] * CS} y={cy - BOXC[1] * CS} width={COIL.W * CS} height={COIL.H * CS} /></g>
);
const MT = upright(0, D.cy, [257, 465]), MB = upright(0, D.cy, [1455, 330]);
const AXX = MT[0];
const top = MT[1], bot = MB[1];
const TA = upright(D.xa, D.cy, [601, 710]), TB = upright(D.xa, D.cy, [1631, 615]);
const MW = 210;
const Y0 = top - 12;
export const S07: React.FC = () => {
	const id = 'evidence';
	const f = useCurrentFrame();
	const brk = cue(id, 'Break the circuit'), still = cue(id, "There's still an emf"), freely = cue(id, 'The magnet moves in freely'), close = cue(id, 'Close the circuit again'), supply = cue(id, "now you're supplying"), drop = cue(id, 'Now drop a magnet'), fallsIn = cue(id, 'As it falls in'), pushUp = cue(id, 'pushing up on the falling'), leaves = cue(id, 'As it leaves'), southEnd = cue(id, "pulling up on the magnet's south end"), either = cue(id, 'Either way, the coil pushes up'), slowly = cue(id, 'a little more slowly'), some = cue(id, 'Some of the energy'), later = cap(id, cue(id, 'Later on, the same idea'));
	const bench = 1 - prog(f, drop, 14);
	// part A: open then closed (the circuits engine gives the current; the emf is lesson-set while the magnet moves)
	const uA = kf(f, mono([[0, U0], [still, U0], [freely + 40, 200], [close, 200], [close + 1, U0], [supply - 20, U0], [drop - 20, 200]], 1));
	const movingA = (f > still && f < freely + 40) || (f > supply - 20 && f < drop - 20);
	const closed = f >= close;
	const emf = movingA ? 1 : 0;
	const I = solveCircuit([{id: 'coil', kind: 'battery', from: 'n', to: 'p', emf}, {id: 'sw', kind: 'switch', from: 'p', to: 'a', closed}, {id: 'g', kind: 'resistor', from: 'a', to: 'n', r: 1}]).current.g ?? 0;
	const gap = prog(f, brk, 10) * (1 - prog(f, close, 10));
	// part B: the drop (slow motion), then both coils together
	const yN1 = kf(f, mono([[0, Y0], [fallsIn - 20, Y0], [pushUp, top + 30], [leaves, bot - 40], [southEnd + 20, bot + MW - 10]]), false);
	const t2 = Math.max(0, Math.min(1, (f - slowly - 6) / (some - slowly)));
	const yOpen = Y0 + (bot + MW - 10 - Y0) * t2 * t2, yClosed = Y0 + (bot + MW - 10 - Y0) * Math.max(0, t2 - 0.08) ** 2 / (0.92 ** 2) * 0.92;
	const second = f >= slowly;
	const yA = second ? yClosed : yN1;
	const inPhase = yA > top && yA < bot + 40 && !second;
	const entering = f >= pushUp && f < leaves, leaving = f >= leaves && f < southEnd + 30;
	const needleB = second ? 0 : entering ? 22 : leaving ? -22 : 0;
	const g = galvPts({x: 80, y: 560, w: 250});
	const cTop: [number, number] = [D.xa + AXX, top + 40], cBot: [number, number] = [D.xa + AXX, bot - 40];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{bench > 0.001 ? <g opacity={bench}>
					<Bench uN={uA} needle={18 * I} arrow={movingA ? 1 : 0} gap={gap} flow={Math.abs(I) > 0.01 ? 1 : 0} flowPhase={f * 3}>
						<LenzMarks uN={uA} near="N" current="up" force={-0.8} applied={1} o={{near: Math.abs(I), current: Math.abs(I), force: Math.abs(I), applied: closed && movingA ? 1 : 0}} />
					</Bench>
				</g> : null}
				{f >= drop ? <g opacity={prog(f, drop, 14)}>
					<line x1={40} y1={900} x2={1860} y2={900} stroke={INK} strokeWidth={4} />
					<Stand rodX={420} baseY={900} height={660} />
					<line x1={420} y1={D.cy} x2={D.xa + AXX - 40} y2={D.cy} stroke="#8d8f93" strokeWidth={12} strokeLinecap="round" />
					<Boss x={420} y={D.cy} w={120} />
					<MagnetAt cx={D.xa + AXX} cy={yA - MW / 2} w={MW} deg={90} northRight letterSize={30} />
					<UprightCoil cx={D.xa} cy={D.cy} />
					<Lead pts={[TA, [TA[0] - 30, TA[1]], [TA[0] - 30, 860], [g.red[0], 860], g.red]} width={3.5} />
					<Lead pts={[TB, [TB[0] - 60, TB[1]], [TB[0] - 60, 880], [g.black[0], 880], g.black]} width={3.5} />
					<Galvanometer p={{x: 80, y: 560, w: 250}} deg={needleB} />
					{second ? <g opacity={prog(f, slowly, 12)}>
						<Stand rodX={1400} baseY={900} height={660} />
						<line x1={1400} y1={D.cy} x2={D.xb + AXX + 40} y2={D.cy} stroke="#8d8f93" strokeWidth={12} strokeLinecap="round" />
						<Boss x={1400} y={D.cy} w={120} />
						<MagnetAt cx={D.xb + AXX} cy={yOpen - MW / 2} w={MW} deg={90} northRight letterSize={30} />
						<UprightCoil cx={D.xb} cy={D.cy} />
					</g> : null}
					{entering ? <PoleBadge x={cTop[0] + 70} y={cTop[1] - 30} pole="N" /> : null}
					{leaving ? <PoleBadge x={cBot[0] + 70} y={cBot[1] + 30} pole="N" /> : null}
					{(entering || leaving) && inPhase ? <Arrow2 from={[D.xa + AXX + 70, yA - 20]} to={[D.xa + AXX + 70, yA - 150]} color={AMBER.stroke} width={10} head={30} /> : null}
				</g> : null}
				{f >= some ? <g opacity={prog(f, some, 12)}>
					<EBar x={1560} base={880} h={300} frac={0.75} color={AMBER.stroke} label="kinetic" w={110} />
					<EBar x={1700} base={880} h={300} frac={0.25} color={HEAT} label="heat" w={110} />
				</g> : null}
			</FrameSvg>
			{bench > 0.001 ? <>
				<Lbl x={AX.a[0] - 40} y={AX.a[1] - 140} at={still} out={drop} color={ROSE.ink} size={40} anchor="middle">ε</Lbl>
				<Row at={freely} out={close} size={44} style={{position: 'absolute', left: 96, top: 250}}><AnswerBox at={freely + 10}>open: no opposition</AnswerBox></Row>
				<Lbl x={96} y={360} at={brk} out={close} color={INK} size={32}>open: emf, no current</Lbl>
				<CrossedChip x={96} y={400} at={freely} crossAt={freely + 30} size={30} out={close} caption="no current, no field, no push">open coil: still pushes back</CrossedChip>
				<Chip x={96} y={250} at={supply} out={drop} size={34} w={720}>closed: you supply the energy</Chip>
			</> : null}
			{f >= drop ? <>
				<HandTag x={D.xa - 220} y={yA - 120} text={leaving ? 'up leaving' : 'up entering'} at={pushUp} out={southEnd + 30} size={34} color={AMBER.ink} anchor="end" />
				<Chip x={1100} y={300} at={drop} out={slowly} size={32} w={720}>a magnet dropped north end first through a closed coil</Chip>
				<Row at={pushUp} out={slowly} size={36} style={{position: 'absolute', left: 1100, top: 420, color: ROSE.ink}}>falls in: top end N, pushes up</Row>
				<Row at={southEnd} out={slowly} size={36} style={{position: 'absolute', left: 1100, top: 490, color: ROSE.ink}}>leaves: bottom end N, pulls up</Row>
				<HandTag x={1100} y={600} text="current flips, force doesn't" at={leaves + 20} out={slowly} size={36} color={ROSE.ink} />
				<Row at={either} out={slowly} size={44} style={{position: 'absolute', left: 1100, top: 680}}><AnswerBox at={either + 8}>current reverses, force still up</AnswerBox></Row>
				<Lbl x={D.xa + AXX} y={210} at={slowly} color={INK} size={32} anchor="middle">closed</Lbl>
				<Lbl x={D.xb + AXX} y={210} at={slowly} color={INK} size={32} anchor="middle">open</Lbl>
				<HandTag x={900} y={960 - 50} text="illustrative: no measured times" at={slowly + 10} size={30} color={INK_SOFT} anchor="middle" />
				<Lbl x={1620} y={540} at={some} color={INK} size={30} anchor="middle">closed coil</Lbl>
				<Chip x={1500} y={170} at={later} size={30} w={330} color={INK_SOFT}>magnetic braking: later on</Chip>
			</> : null}
		</>
	);
};

// ---------- 8. a way to remember ----------
export const S08: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const coming = cue(id, 'Coming in, it pushes back'), going = cue(id, 'Going away, it pulls back'), works = cue(id, 'It works for either pole'), always = cue(id, 'The coil always resists'), work = cap(id, cue(id, 'with work'));
	const pl = 1 + 0.06 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - coming) / 30)));
	const pr = 1 + 0.06 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - going) / 30)));
	const t = (f % 90) / 90;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={20} y={180} w={900} h={420} />
				<CardRect x={970} y={180} w={900} h={420} />
				<g transform={`${insetT(XL, 250, K6)} translate(${(1 - pl) * 600} 0)`}>
					<Bench uN={60 + 60 * t} needle={10} arrow={1} letters={false}><LenzMarks uN={60 + 60 * t} near="N" force={-0.8 * pl} badgeR={60} /></Bench>
				</g>
				<g transform={`${insetT(XR, 250, K6)}`}>
					<Bench uN={60 - 60 * t} needle={-10} arrow={1} arrowDir={-1} letters={false}><LenzMarks uN={60 - 60 * t} near="S" force={0.8 * pr} badgeR={60} /></Bench>
				</g>
			</FrameSvg>
			<Row at={coming} size={44} style={{position: 'absolute', left: 50, top: 500}}>Coming in, it pushes back.</Row>
			<Row at={going} size={44} style={{position: 'absolute', left: 1000, top: 500}}>Going away, it pulls back.</Row>
			<Chip x={96} y={640} at={works} out={work} size={32} w={900}>either pole; the magnet or the coil moving</Chip>
			<Chip x={96} y={720} at={always} out={work} size={32} w={900}>you always pay for the electrical energy with work</Chip>
			<AidCard x={220} y={630} w={1480} at={work} title="Memory aid">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.15}}>Coming in, it pushes back. Going away, it pulls back.</div>
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 700, color: INK, marginTop: 6}}>Lenz's law: the induced field opposes the change in flux</div>
			</AidCard>
		</>
	);
};
