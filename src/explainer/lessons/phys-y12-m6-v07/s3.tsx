// Scenes 9 to 14: two attempts with answer-free pictures and brief feedback, the handoff (one long wire with its own
// circular field, a second parallel wire slides in, each in the other's field, "?"; its last frame is exported as
// `M6V07FinalFrame` for v08), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Arrow2, AxisTriad} from '../../physics/electromagnetism/magnetic';
import type {TriadArm} from '../../physics/electromagnetism/magnetic';
import {EndOnWire} from '../../physics/electromagnetism/wires';
import {ThetaArc} from '../phys-y12-m6-v04/parts';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, GREY, Lbl, NAVY, ORANGE, Shrunk, T, fx} from './parts';

const FIELD_C = GREY.stroke;
const rad = (d: number) => (d * Math.PI) / 180;

// ---------- attempts ----------
const Q1: React.FC = () => <>A straight wire carrying a current of 2.5 A has 0.40 m of its length inside a uniform magnetic field of 0.15 T. Calculate the magnitude of the force on the wire when the current is (a) perpendicular to the field, (b) at 30° to the field.</>;
const Q2: React.FC = () => <>A straight wire carries a current into the page, in a uniform magnetic field directed to the right, as shown. (a) State the direction of the magnetic force on the wire. (b) The wire is turned so that it lies parallel to the magnetic field. State the magnitude of the force on the wire.</>;

/** Attempt 1's picture: field arrows across a region, a wire crossing it at an unmarked angle θ (no values). */
const WirePicture: React.FC<{answer?: number}> = ({answer = 0}) => {
	const cx = 330, cy = 300, deg = 30, L = 170;
	const ux = Math.cos(rad(deg)), uy = -Math.sin(rad(deg));
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={40} y={80} width={580} height={420} rx={12} fill="#fbf8f1" stroke={FIELD_C} strokeWidth={3} strokeDasharray="10 8" />
			{[0, 1, 2, 3, 4].map(i => <Arrow2 key={i} from={[60, 130 + i * 85]} to={[600, 130 + i * 85]} color={FIELD_C} width={4} head={18} />)}
			<line x1={cx - 300 * ux} y1={cy - 300 * uy} x2={cx + 300 * ux} y2={cy + 300 * uy} stroke="#b0662a" strokeWidth={16} strokeLinecap="round" />
			<Arrow2 from={[cx, cy]} to={[cx + L * ux, cy + L * uy]} color={ORANGE.stroke} width={8} head={24} />
			<ThetaArc x={cx} y={cy} a={[1, 0]} b={[ux, uy]} r={90} color={INK} />
			<T x={cx + 104} y={cy - 18} size={32} color={INK}>θ</T>
			<T x={cx + L * ux + 10} y={cy + L * uy - 10} size={32} color={ORANGE.ink}>I</T>
			<T x={600} y={60} size={32} color={GREY.ink} anchor="end">B</T>
			{answer > 0 ? <g opacity={answer}>
				<Arrow2 from={[cx, cy + 4]} to={[cx + L * ux, cy + 4]} color={GREY.ink} width={5} head={16} dash="9 6" />
				<Arrow2 from={[cx + L * ux, cy]} to={[cx + L * ux, cy + L * uy]} color={ORANGE.stroke} width={5} head={16} dash="9 6" />
				<T x={cx + L * ux + 14} y={cy + (L * uy) / 2 + 10} size={34} color={ORANGE.ink}>I sin 30°</T>
				<T x={cx + 10} y={cy + 48} size={34} color={GREY.ink}>I cos 30°</T>
			</g> : null}
		</svg>
	);
};
const ARMS2: readonly TriadArm[] = [
	{d: [0, 0, -1], color: ORANGE.stroke, label: 'thumb: I'},
	{d: [1, 0, 0], color: FIELD_C, label: 'fingers: B'},
	{d: [0, -1, 0], color: AMBER.stroke, label: 'palm faces: F'},
];
/** Attempt 2's picture: field arrows to the right and a wire end-on with a cross (current into the page), "I". */
const EndOnPicture: React.FC<{answer?: number; along?: number}> = ({answer = 0, along = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={40} y={80} width={580} height={420} rx={12} fill="#fbf8f1" stroke={FIELD_C} strokeWidth={3} strokeDasharray="10 8" />
		{[0, 1, 2, 3, 4].map(i => <Arrow2 key={i} from={[60, 130 + i * 85]} to={[600, 130 + i * 85]} color={FIELD_C} width={4} head={18} />)}
		<g opacity={1 - along}><EndOnWire cx={330} cy={290} r={48} dir="in" /></g>
		{along > 0 ? <g opacity={along}><line x1={150} y1={290} x2={510} y2={290} stroke="#b0662a" strokeWidth={18} strokeLinecap="round" /><Arrow2 from={[260, 250]} to={[420, 250]} color={ORANGE.stroke} width={6} head={20} /></g> : null}
		<T x={392} y={250} size={34} color={ORANGE.ink}>I</T>
		<T x={600} y={60} size={32} color={GREY.ink} anchor="end">B</T>
		{answer > 0 ? <g opacity={answer * (1 - along)}><Arrow2 from={[330, 345]} to={[330, 470]} color={AMBER.stroke} width={9} head={26} /><T x={350} y={470} size={32} color={AMBER.ink}>F</T></g> : null}
	</svg>
);
export const S09: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={2} picture={<WirePicture />}><Q1 /></QuestionScene></Accent>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={2} picture={<EndOnPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1250, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const right = cue(id, 'At right angles'), a = cue(id, 'zero point one five newtons'), thirty = cue(id, 'At thirty degrees'), b = cue(id, 'zero point zero seven five newtons'), slip = cue(id, 'The classic slip'), sine = cap(id, cue(id, "so it's sine"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>I = 2.5 A, l = 0.40 m, B = 0.15 T, θ = 90° and 30°</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1120}}>
				<Row at={right} ageAt={thirty} size={48} oldSize={40}>(a) F = BIl = 0.15 × 2.5 × 0.40 = <AnswerBox at={a}><span style={{color: AMBER.ink}}>{fx(A1.F90, 2)} N</span></AnswerBox></Row>
				<Row at={thirty} size={48}>(b) F = BIl sin 30° = 0.15 × 0.5 = <AnswerBox at={b}><span style={{color: AMBER.ink}}>{fx(A1.F30, 3)} N</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="θ is between I and B: use sin θ">F = 0.15 × cos 30° = {fx(A1.slip, 2)} N</CrossedChip>
			<HandTag x={760} y={760} text="sin" at={sine} size={40} color={AMBER.ink} />
			<Picture><WirePicture answer={prog(f, thirty, 14)} /></Picture>
		</>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const thumb = cue(id, 'Thumb into the page'), page = cue(id, 'towards the bottom of the page'), lying = cue(id, 'Lying along the field'), current = cue(id, 'however large the current'), slip = cue(id, 'The slip is saying'), right = cap(id, cue(id, 'always at right angles'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>I into the page; B to the right</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1120}}>
				<Row at={thumb} ageAt={lying} size={44} oldSize={36}>thumb: into page; fingers: right; palm: down</Row>
				<Row at={page} ageAt={lying + 20} size={48} oldSize={40}>(a) <AnswerBox at={page + 10}><span style={{color: AMBER.ink}}>F: towards the bottom of the page</span></AnswerBox></Row>
				<Row at={lying} size={48}>(b) θ = 0°, F = BIl sin 0° = <AnswerBox at={current}><span style={{color: AMBER.ink}}>0</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={760} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="magnetic force ⟂ B">F to the right, along B</CrossedChip>
			<HandTag x={700} y={800} text="⟂ B, always" at={right} size={36} color={AMBER.ink} />
			<Picture top={400} scale={0.72}><EndOnPicture answer={prog(f, page, 14)} along={prog(f, lying, 24)} /></Picture>
			<FrameSvg><AxisTriad cx={1640} cy={300} len={110} arms={ARMS2} size={28} opacity={prog(f, thumb, 14)} /></FrameSvg>
		</>
	);
};

// ---------- 13. next: two parallel wires ----------
const W1 = 760, W2 = 1160, WY1 = 220, WY2 = 900;
/** A long vertical coded wire with its current arrow up, and its field circles drawn in perspective. */
const VWire: React.FC<{x: number; circles: number; reach: number; label: React.ReactNode; color: string; wireO?: number}> = ({x, circles, reach, label, color, wireO = 1}) => (
	<g>
		{[340, 560, 780].map(y => (
			<g key={y} opacity={circles}>
				<ellipse cx={x} cy={y} rx={150} ry={34} fill="none" stroke={color} strokeWidth={4} />
				<path d={`M${x + 12},${y + 34} l-20,-9 l0,18 Z`} fill={color} transform={`translate(10 0)`} />
				{reach > 0 ? <g opacity={reach}><ellipse cx={x} cy={y} rx={400} ry={80} fill="none" stroke={color} strokeWidth={4} /><path d={`M${x + 22},${y + 80} l-20,-9 l0,18 Z`} fill={color} /></g> : null}
			</g>
		))}
		<g opacity={wireO}>
			<rect x={x - 15} y={WY1} width={30} height={WY2 - WY1} rx={15} fill="#d99a5b" stroke="#8a4f1c" strokeWidth={4} />
			<Arrow2 from={[x + 50, 330]} to={[x + 50, 200]} color={ORANGE.stroke} width={7} head={24} />
			<text x={x + 70} y={220} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: ORANGE.ink} as React.CSSProperties}>{label}</text>
		</g>
	</g>
);
export const HandoffBoard: React.FC<{circAt?: number; slideAt?: number; reachAt?: number; qAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({circAt = -60, slideAt = -60, reachAt = -60, qAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const slide = prog(f, slideAt, 30);
	const x2 = W2 + (1 - slide) * 600;
	const q = prog(f, qAt, 14);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<VWire x={W1} circles={prog(f, circAt, 20)} reach={prog(f, reachAt, 20)} label={<>I<tspan dy={10} fontSize={26}>1</tspan></>} color={FIELD_C} />
				{slide > 0 ? <g opacity={slide}><VWire x={x2} circles={prog(f, slideAt + 20, 20)} reach={prog(f, reachAt, 20)} label={<>I<tspan dy={10} fontSize={26}>2</tspan></>} color={FIELD_C} /></g> : null}
				{q > 0 ? <g opacity={q}>
					<Arrow2 from={[(W1 + W2) / 2 - 20, 440]} to={[W1 + 40, 440]} color={AMBER.stroke} width={6} head={20} />
					<Arrow2 from={[(W1 + W2) / 2 + 20, 440]} to={[W2 - 40, 440]} color={AMBER.stroke} width={6} head={20} />
					<Arrow2 from={[W1 + 40, 680]} to={[(W1 + W2) / 2 - 20, 680]} color={AMBER.stroke} width={6} head={20} />
					<Arrow2 from={[W2 - 40, 680]} to={[(W1 + W2) / 2 + 20, 680]} color={AMBER.stroke} width={6} head={20} />
				</g> : null}
			</FrameSvg>
			<Lbl x={(W1 + W2) / 2} y={600} at={qAt} color={INK} size={110} anchor="middle">?</Lbl>
			<Lbl x={W1 - 420} y={300} at={circAt} color={GREY.ink} size={30}>B round each current</Lbl>
			<HandTag x={(W1 + W2) / 2} y={260} text="each in the other's field" at={tagAt} out={tagOut} size={34} color={GREY.ink} anchor="middle" marks={[{kind: 'arrow', from: [W1 + 20, 300], to: [W2 - 20, 300], bend: -0.3}]} markAt={tagAt} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why do parallel currents attract or repel?</Chip>
		</>
	);
};
/** v07's final frame for v08 (two parallel wires with currents up, each in the other's field, "?"). */
export const M6V07FinalFrame: React.FC = () => <HandoffBoard />;
export const S13: React.FC = () => {
	const id = 'handoff';
	const own = cue(id, 'magnetic field of its own'), put = cue(id, 'Put two current-carrying'), side = cue(id, 'side by side'), other = cue(id, "each one sits in the other's"), apart = cap(id, cue(id, 'or push apart'));
	return <HandoffBoard circAt={own} slideAt={side} reachAt={other} qAt={apart} chipAt={apart} tagAt={other + 10} tagOut={cap(id, apart + 10)} headSwap={put} />;
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const notes = [
		{content: <>Motor effect: moving charges in a wire are pushed.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>F = lI<Sub>⊥</Sub>B = lIB sin θ</span> (l inside the field).</>, at: 6},
		{content: <>θ is between I and B. Max BIl at 90°; 0 along B.</>, at: 10},
		{content: <>F ⟂ I and B; palm rule; flip I or B, F flips.</>, at: 14},
		{content: <>Loudspeaker: <span style={{color: NAVY.ink}}>l = N × πd</span>; AC makes the cone vibrate.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Across the field, full force.</>} sub={<>Along the field, no force.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
