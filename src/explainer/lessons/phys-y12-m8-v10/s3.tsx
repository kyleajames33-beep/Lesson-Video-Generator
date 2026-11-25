// Scenes 15 to 21: the memory aid (the ladder kept, the circles replaced), attempt 1 (a coded atom with one electron on
// a circular orbit, no arrows) and its feedback, attempt 2 (the painted tube, its four-line strip and a small ladder) and
// its feedback, the handoff (the hydrogen ladder with four drops to n = 2 and the measured lines; its last frame is
// exported as `M8V10FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {wlColor} from '../../physics/light/spectrum';
import {DropArrow, HLevels, yOf} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold, lineNm} from './common';
import {AMBER, Elec, GREY, GlowTube, INK, Lbl, LineStrip, NAVY, Nucleus, ROSE, Shrunk, stripX} from './parts';
import {LINES5, RADII} from './s1';

// ---------- 15. a way to remember ----------
export const S15: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const rg = cue(id, 'Rutherford got the nucleus right'), bs = cue(id, "Bohr's electrons stay put"), ls = cue(id, 'The energy levels survived'), no = cap(id, cue(id, 'circular orbits did not'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HLevels g={{x: 220, w: 360, top: 220, bot: 560}} levels={[1, 2, 3, 4, 5]} color={NAVY.stroke} label={n => (n <= 3 ? `${n}` : '')} />
				{RADII.map((r, i) => <circle key={i} cx={1180} cy={400} r={r * 0.55} fill="none" stroke={NAVY.stroke} strokeWidth={3} />)}
				<Nucleus x={1180} y={400} r={14} />
				{f >= ls ? <Mark x={640} y={300} at={ls} kind="tick" color={INK} size={50} /> : null}
				{f >= no ? <Mark x={1420} y={260} at={no} kind="cross" color={GREY.stroke} size={60} /> : null}
			</FrameSvg>
			<Lbl x={680} y={300} at={ls} color={INK} size={30}>levels: kept</Lbl>
			<Lbl x={1460} y={330} at={no} color={GREY.ink} size={30}>circular orbits: replaced (later)</Lbl>
			<Chip x={96} y={630} at={rg} size={32} color={INK}>Rutherford: right nucleus, collapsing electrons</Chip>
			<Chip x={96} y={700} at={bs} size={32} color={INK}>Bohr: stable electrons, unexplained rules</Chip>
			<HandTag x={96} y={810} text="Rutherford: right nucleus, collapsing electrons." at={no} size={46} color={INK} />
			<HandTag x={96} y={890} text="Bohr: stable electrons, unexplained rules." at={no + 10} size={46} color={INK} />
		</>
	);
};

// ---------- 16. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain why, according to {U('classical physics')}, Rutherford&apos;s model of the atom predicts that atoms should be {U('unstable')}.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 520) / 678} viewBox="0 0 678 520" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={512} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<circle cx={339} cy={260} r={200} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
		<Nucleus x={339} y={260} r={34} />
		<Elec x={339 + 200 * Math.cos(-0.7)} y={260 + 200 * Math.sin(-0.7)} r={22} />
	</svg>
);
export const S16: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 17. feedback 1 ----------
export const S17: React.FC = () => {
	const id = 'feedback-1';
	const cd = cue(id, 'An orbiting electron keeps changing direction'), cp = cue(id, 'Classical physics says an accelerating charge'), si = cue(id, 'spirals into the nucleus'), mf = cue(id, 'so the model fails'), sl = cue(id, 'The slip is saying'), ac = cap(id, cue(id, 'A change of direction is an acceleration'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>Rutherford: electrons orbit a nucleus; classical physics</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 370, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={cd} size={34}><AnswerBox at={cd + 6}>circular orbit → changing direction → centripetal acceleration</AnswerBox></Row>
				<Row at={cp} size={34}><AnswerBox at={cp + 6}>accelerating charge → radiates EM waves → loses energy</AnswerBox></Row>
				<Row at={si} size={34}><AnswerBox at={si + 6}>orbit shrinks → spirals in (≈ 10⁻¹¹ s)</AnswerBox></Row>
				<Row at={mf} size={34}><AnswerBox at={mf + 6}>real atoms are stable → model fails</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 360}}><Pic1 w={580} /></div>
			<CrossedChip x={96} y={820} at={sl} crossAt={ac} size={30} caption="a change of direction is an acceleration">constant speed, so no acceleration</CrossedChip>
		</>
	);
};

// ---------- 18. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Bohr&apos;s model of the atom explained the line emission spectrum of hydrogen. Outline {U('TWO limitations')} of Bohr&apos;s model.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 520) / 678} viewBox="0 0 678 520" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={512} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<GlowTube x={40} y={30} h={460} />
		<LineStrip x={260} y={60} w={380} h={70} lines={LINES5.slice(0, 4)} />
		<HLevels g={{x: 330, w: 260, top: 200, bot: 480}} levels={[1, 2, 3, 4]} color={NAVY.stroke} inf={false} />
	</svg>
);
export const S18: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 19. feedback 2 ----------
export const S19: React.FC = () => {
	const id = 'feedback-2';
	const oe = cue(id, 'It only works for one-electron atoms'), lb = cue(id, "It can't explain line brightness"), as = cue(id, 'And it assumes its stationary orbits'), sl = cue(id, 'The slip is a vague answer'), nm = cap(id, cue(id, 'Name a specific thing'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>{"Bohr's model: hydrogen lines explained; two limitations"}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 370, display: 'flex', flexDirection: 'column', gap: 18, width: 1110}}>
				<Row at={-30} size={30}>any two of:</Row>
				<Row at={oe} size={34}><AnswerBox at={oe + 6}>one-electron atoms only (repulsion ignored)</AnswerBox></Row>
				<Row at={lb} size={34}><AnswerBox at={lb + 6}>no line brightness or fine splitting</AnswerBox></Row>
				<Row at={as} size={34}><AnswerBox at={as + 6}>orbits and mvr = nh/2π assumed, no reason</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 360}}><Pic2 w={580} /></div>
			<CrossedChip x={96} y={800} at={sl} crossAt={nm} size={30} caption="name a specific failure">{"it's wrong because electrons don't really orbit"}</CrossedChip>
		</>
	);
};

// ---------- 20. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, bl: cue(id, "Bohr's energy levels"), e2: cue(id, 'end on level two'), d3: cue(id, 'a drop from three to two'), fs: cue(id, 'four, five and six'), pw: cue(id, 'predict those wavelengths closely'), nx: cap(id, cue(id, 'So how do hydrogen energy gaps')), end: dur(id) - 1};
})();
export const LADH: LevelsGeom = {x: 300, w: 520, top: 230, bot: 840};
export const STH = {x: 1000, y: 400, w: 820, h: 90};
export const DROPS = [3, 4, 5, 6] as const;
export const dropX = (k: number) => LADH.x + 200 + 80 * k;
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard10: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; q?: boolean}> = ({f, final = false, heading = true, chip = true, q = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const arrowAt = [HD.d3, HD.fs, HD.fs + 10, HD.fs + 20];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g opacity={o(HD.bl)}><HLevels g={LADH} levels={[1, 2, 3, 4, 5, 6]} color={NAVY.stroke} hi={final || f >= HD.e2 ? 2 : undefined} size={28} infLabel="" /></g>
				{DROPS.map((n, k) => <DropArrow key={n} g={LADH} x={dropX(k)} from={n} to={2} color={wlColor(lineNm(n))} u={final ? 1 : prog(f, arrowAt[k], 20)} width={7} />)}
				<g opacity={o(HD.d3)}><LineStrip x={STH.x} y={STH.y} w={STH.w} h={STH.h} lines={DROPS.map(n => lineNm(n))} reveal={final ? 1 : f >= HD.fs + 20 ? 1 : f >= HD.d3 ? 0.25 : 0} lineW={9} /></g>
			</FrameSvg>
			<Lbl x={LADH.x - 16} y={yOf(LADH, 1)} at={at(HD.bl)} color={NAVY.ink} size={28} anchor="end">E₁ = −13.6 eV</Lbl>
			<Lbl x={LADH.x - 16} y={yOf(LADH, 2)} at={at(HD.bl)} color={NAVY.ink} size={28} anchor="end">n = 2</Lbl>
			<Lbl x={LADH.x - 16} y={yOf(LADH, 3) + 4} at={at(HD.bl)} color={NAVY.ink} size={26} anchor="end">n = 3</Lbl>
			<Lbl x={LADH.x - 16} y={yOf(LADH, 5) - 8} at={at(HD.bl)} color={NAVY.ink} size={26} anchor="end">4, 5, 6</Lbl>
			<Lbl x={LADH.x + LADH.w + 14} y={LADH.top} at={at(HD.bl)} color={NAVY.ink} size={26}>n = ∞, E = 0</Lbl>
			<Lbl x={LADH.x + LADH.w + 14} y={yOf(LADH, 1)} at={at(HD.bl)} color={NAVY.ink} size={26}>n = 1</Lbl>
			{DROPS.map((n, k) => <Lbl key={n} x={STH.x + ((lineNm(n) - 380) / 370) * STH.w} y={STH.y + STH.h + 34} at={at(k ? HD.fs + 10 * (k - 1) : HD.d3)} color={INK} size={28} anchor="middle">{String(Math.round(lineNm(n)))}</Lbl>)}
			<Lbl x={STH.x + STH.w} y={STH.y + STH.h + 80} at={at(HD.d3)} color={GREY.ink} size={26} anchor="end">nm (measured)</Lbl>
			{q ? DROPS.map((n, k) => <Lbl key={n} x={dropX(k)} y={(yOf(LADH, 2) + yOf(LADH, n)) / 2 + 150} at={at(HD.pw)} color={wlColor(lineNm(n))} size={34} anchor="middle">?</Lbl>) : null}
			<Lbl x={STH.x} y={STH.y - 30} at={at(HD.bl)} color={INK} size={28}>{"hydrogen's four bright visible lines"}</Lbl>
			<HandTag x={STH.x} y={680} text="ΔE → λ?" at={at(HD.pw + 10)} size={48} color={INK} />
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: how do hydrogen energy gaps predict Balmer wavelengths?</Chip> : null}
		</>
	);
};
/** v10's final frame for the next video. */
export const M8V10FinalFrame: React.FC = () => <HandoffBoard10 f={HD.end} final />;
export const S20: React.FC = () => <HandoffBoard10 f={useCurrentFrame()} />;

// ---------- 21. key notes ----------
export const S21: React.FC = () => {
	const notes = [
		{content: <>Rutherford: orbiting e⁻ <span style={{color: ROSE.ink}}>radiates</span>, spirals in (~10⁻¹¹ s).</>, at: 2},
		{content: <>It predicts a smear; hydrogen gives sharp lines.</>, at: 6},
		{content: <>Bohr: fixed <span style={{color: NAVY.ink}}>levels</span>, no radiation while in one.</>, at: 10},
		{content: <><span style={{color: AMBER.ink}}>Photon energy = gap</span>: hf = E<sub>i</sub> − E<sub>f</sub> (emission).</>, at: 14},
		{content: <>Limits: one electron only; no line detail; rules assumed.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Rutherford: right nucleus, collapsing electrons. Bohr: stable electrons, unexplained rules.</>} picture={<svg width={580} height={220}><circle cx={140} cy={110} r={90} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" /><Nucleus x={140} y={110} r={16} /><HLevels g={{x: 330, w: 200, top: 20, bot: 200}} levels={[1, 2, 3, 4]} color={NAVY.stroke} inf={false} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
// strip position helper kept for the next lesson's opening
export const handoffLineX = (nm: number) => stripX(STH.x, STH.w, nm);
