// Scenes 9 to 14: two attempts with answer-free pictures and brief feedback, the handoff (the magnet slides away, a
// second coil with a knife switch and low-voltage supply slides in beside the coil on the galvanometer; its last frame
// is exported as `M6V11FinalFrame` for v12), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnLoop, MagnetAt} from '../../physics/electromagnetism/induction';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, Bench, CO, EBar, FIELD1, GA, HEAT, Lbl, NAVY, ORANGE, PoleBadge, ROSE, Shrunk, T, TC, TwoCoilBench, U0, lerpPlace, nearPoleAt, tcLeads} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>The south pole of a bar magnet faces a conducting loop. The magnet is pulled away from the loop along the loop's axis. (a) State the direction of the induced current in the loop, as viewed from the magnet's side (clockwise or anticlockwise). (b) State whether the loop attracts or repels the magnet. Justify your answer with reference to Lenz's law.</>;
const Q2: React.FC = () => <>A student claims that when a magnet is pushed towards a coil connected in a closed circuit, the induced current could equally flow so that the coil attracts the magnet. Explain, with reference to the law of conservation of energy, why this cannot occur.</>;

/** Attempt 1's picture: the magnet (S facing the loop) pulled away from a loop seen side on. Answer marks when asked. */
const LoopPicture: React.FC<{flux?: number; induced?: number; anti?: number; pole?: number}> = ({flux = 0, induced = 0, anti = 0, pole = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<line x1={20} y1={230} x2={660} y2={230} stroke="#cfc6b4" strokeWidth={3} strokeDasharray="10 10" />
		<MagnetAt cx={200} cy={230} w={280} northRight={false} letterSize={34} />
		<Arrow2 from={[260, 140]} to={[120, 140]} color={AMBER.stroke} width={8} head={24} />
		<T x={190} y={115} size={30} color={AMBER.ink} anchor="middle">pulled away</T>
		<ellipse cx={500} cy={230} rx={34} ry={150} fill="none" stroke="#b8642a" strokeWidth={10} />
		<T x={500} y={420} size={30} anchor="middle">loop</T>
		{flux > 0 ? <g opacity={flux}><Arrow2 from={[600, 205]} to={[420, 205]} color={FIELD1} width={7} head={22} /><T x={600} y={190} size={30} color={FIELD1} anchor="end">Φ decreasing</T></g> : null}
		{induced > 0 ? <g opacity={induced}><Arrow2 from={[600, 260]} to={[420, 260]} color={ROSE.stroke} width={8} head={24} /><T x={610} y={300} size={30} color={ROSE.ink} anchor="end">induced B</T></g> : null}
		{anti > 0 ? <g opacity={anti}><EndOnLoop cx={170} cy={460} r={52} sense="acw" centre="dot" color={ROSE.stroke} /><T x={260} y={470} size={30} color={ROSE.ink}>seen from the magnet</T></g> : null}
		{pole > 0 ? <g opacity={pole}><PoleBadge x={440} y={100} pole="N" /><Arrow2 from={[300, 300]} to={[400, 300]} color={AMBER.stroke} width={9} head={26} /><T x={350} y={340} size={30} color={AMBER.ink} anchor="middle">attract</T></g> : null}
	</svg>
);
/** Attempt 2's picture: the bench, the north pole approaching the closed coil, a "?" at the coil's near end. */
const ApproachPicture: React.FC = () => {
	const np = nearPoleAt();
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<defs><clipPath id="v11-a2"><rect x={0} y={0} width={678} height={560} /></clipPath></defs>
			<g clipPath="url(#v11-a2)"><g transform={`translate(${-110} ${-160}) scale(0.62)`}>
				<Bench uN={-60} needle={12} arrow={1} letters={false} />
				<text x={np[0]} y={np[1] + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontSize: 90, fontWeight: 800, fill: ROSE.ink}}>?</text>
			</g></g>
			<T x={190} y={245} size={34} color={INK} anchor="middle">N</T>
			<T x={420} y={470} size={30} anchor="middle">closed circuit</T>
		</svg>
	);
};
/** Feedback 2's picture: the what-if (empty supply, growing stores) above the real case (equal work and heat). */
const EnergyPicture: React.FC<{a?: number; b?: number}> = ({a = 0, b = 0}) => (
	<svg width={600} height={600} style={{overflow: 'visible'}}>
		<g opacity={a} style={{filter: 'grayscale(0.7)'}}>
			<EBar x={20} base={220} h={190} frac={0} color={INK} label="supplied" w={140} />
			<EBar x={200} base={220} h={190} frac={0.8} color={AMBER.stroke} label="kinetic" w={140} />
			<EBar x={380} base={220} h={190} frac={0.8} color={HEAT} label="heat" w={140} />
			<T x={270} y={305} size={34} color="#55606b" anchor="middle">attract: ✗ energy from nothing</T>
		</g>
		<g opacity={b}>
			<EBar x={20} base={540} h={190} frac={0.7} color={AMBER.stroke} label="work" w={140} />
			<EBar x={200} base={540} h={190} frac={0.7} color={ORANGE.stroke} label="electrical" w={140} />
			<EBar x={380} base={540} h={190} frac={0.7} color={HEAT} label="heat" w={140} />
			<T x={270} y={625} size={34} anchor="middle">repel: ✓ work pays</T>
		</g>
	</svg>
);
export const S09: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<LoopPicture />}><Q1 /></QuestionScene></Accent>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<ApproachPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 400, scale = 0.92}) => <div style={{position: 'absolute', left: 1250, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const pulling = cue(id, 'Pulling away makes'), so = cue(id, 'so the induced field'), anti = cue(id, "that's anticlockwise"), near = cue(id, "The loop's near face"), attracts = cue(id, 'so it attracts'), slip = cue(id, 'The classic slip'), rep = cap(id, cue(id, 'always repels'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>S pole facing the loop; pulled away along the axis; view from the magnet</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 12, width: 1130}}>
				<Row at={6} ageAt={pulling} size={40} oldSize={34} style={{whiteSpace: 'normal'}}>near a S pole, B points into it: through the loop, towards the magnet</Row>
				<Row at={pulling} ageAt={anti} size={40} oldSize={34} style={{whiteSpace: 'normal'}}>Φ decreasing → induced B towards the magnet too</Row>
				<Row at={anti} ageAt={near} size={44} oldSize={36}>(a) <AnswerBox at={anti + 6}>anticlockwise (seen from the magnet)</AnswerBox></Row>
				<Row at={attracts} size={44} style={{whiteSpace: 'normal'}}>(b) <AnswerBox at={attracts + 6}>attracts: opposes the magnet moving away</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={860} at={slip} crossAt={rep} size={30} caption="going away: it pulls back">the loop repels the magnet</CrossedChip>
			<Picture><LoopPicture flux={prog(f, pulling, 12)} induced={prog(f, so, 12)} anti={prog(f, anti, 12)} pole={prog(f, near, 12)} /></Picture>
		</>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const breaks = cue(id, 'which breaks conservation of energy'), sup = cue(id, 'supplies the electrical energy'), slip = cue(id, 'The slip is answering'), rec = cap(id, cue(id, 'A receding magnet'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>closed circuit; magnet approaching</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 14, width: 1130}}>
				<Row at={6} ageAt={breaks} size={40} oldSize={34} style={{whiteSpace: 'normal'}}>if it attracted: the magnet speeds up by itself</Row>
				<Row at={breaks} ageAt={sup} size={40} oldSize={34} style={{whiteSpace: 'normal'}}><AnswerBox at={breaks + 8}>attract → more current, more heat → energy from nothing ✗</AnswerBox></Row>
				<Row at={sup} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={sup + 8}>so: repel; work against the repulsion = electrical energy → heat ✓</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={rec} size={30} caption="receding magnet: attracted">because a coil always repels a magnet</CrossedChip>
			<div style={{position: 'absolute', left: 1270, top: 300}}><EnergyPicture a={prog(f, 6, 14)} b={prog(f, sup, 14)} /></div>
		</>
	);
};

// ---------- 13. handoff: a second coil ----------
const gapX = () => { const l = tcLeads(TC.PRI, TC.SEC, TC.GAL); return [l.P.right[0] + 30, l.S.left[0] - 30, (l.P.right[1] + l.S.left[1]) / 2] as const; };
export const HandoffBoard: React.FC<{t?: number; pri?: number; bracketAt?: number; qAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({t = 1, pri = 1, bracketAt = -60, qAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const [g1, g2, gy] = gapX();
	const priP = {...TC.PRI, x: TC.PRI.x - 700 * (1 - pri)};
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<TwoCoilBench pri={priP} sec={lerpPlace(CO, TC.SEC, t)} gal={lerpPlace(GA, TC.GAL, t)} priOpacity={pri} open={1} needle={0} level={t} />
				<g opacity={prog(f, bracketAt, 12)}>
					<path d={`M${g1},${gy + 150} V${gy + 170} H${g2} V${gy + 150}`} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				</g>
			</FrameSvg>
			<Lbl x={(g1 + g2) / 2} y={gy + 215} at={bracketAt} color={NAVY.ink} size={30} anchor="middle">no contact</Lbl>
			<Lbl x={(g1 + g2) / 2} y={gy - 120} at={qAt} color={INK} size={110} anchor="middle">?</Lbl>
			<HandTag x={TC.SW.x + 110} y={TC.SW.y - 60} text="switch: open" at={tagAt} out={tagOut} size={34} color={ORANGE.ink} anchor="middle" />
			<Chip x={96} y={890} at={qAt} size={30} w={1728} color={INK} border={INK}>Next: how can one coil induce an emf in another without touching it?</Chip>
		</>
	);
};
/** v11's final frame for v12 (the two-coil bench: open switch, supply, primary; secondary on the galvanometer; "?"). */
export const M6V11FinalFrame: React.FC = () => <HandoffBoard />;
export const S13: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const moving = cue(id, 'from a moving magnet'), but = cue(id, "But a magnet isn't"), second = cue(id, 'A second coil'), touching = cue(id, 'without touching'), how = cap(id, cue(id, 'How can one coil'));
	if (f < second) {
		const uN = kf2(f, moving);
		return (
			<>
				{f < but ? <SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} /> : <><SceneHeading text={HEAD} at={-200} out={but} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={but + 8} size={HEAD_SIZE} /></>}
				<FrameSvg><Bench uN={uN} needle={f > moving && f < moving + 60 ? -14 : 0} arrow={f > moving && f < moving + 60 ? 1 : 0} arrowDir={-1} magnet={1 - prog(f, moving + 40, 20)} /></FrameSvg>
				<Lbl x={96} y={300} color={INK} size={34}>the change came from a moving magnet</Lbl>
				<Lbl x={96} y={360} at={but} color={INK_SOFT} size={34}>another way to change the field?</Lbl>
			</>
		);
	}
	const t = prog(f, second, 36);
	return <HandoffBoard t={t} pri={prog(f, second + 10, 36)} bracketAt={touching} qAt={how} tagAt={second + 50} tagOut={how} headSwap={-60} />;
};
const kf2 = (f: number, moving: number) => (f < moving ? 60 : 60 - Math.min(1, (f - moving) / 60) * (60 - U0 + 300));

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const notes = [
		{content: <>Lenz: the <span style={{color: ROSE.ink}}>induced field opposes the change</span> in flux.</>, at: 2},
		{content: <>Helping would make energy from nothing.</>, at: 6},
		{content: <>Work against the push becomes electrical energy.</>, at: 10},
		{content: <>Steps: B, Φ up or down, oppose, grip rule (view side).</>, at: 14},
		{content: <>Open circuit: emf, no current, no push back.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Coming in, it pushes back.</>} sub={<>Going away, it pulls back.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
