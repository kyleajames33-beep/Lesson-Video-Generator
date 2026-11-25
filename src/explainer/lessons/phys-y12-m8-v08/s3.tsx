// Scenes 12 to 17: attempt 1 (the painted chamber with the arm at a large angle and one faint flash) and its feedback,
// attempt 2 (the arm at 0° with many flashes) and its feedback, the handoff (a gold nucleus with the charge of 79 protons
// and the mass of about 197; its last frame is exported as `M8V08FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Chamber} from '../../physics/atom/scattering';
import {ACCENT, ALPHA_ME, AU_A, AU_GAP, AU_Z, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, NUC_RED, NucPlus, RED, Shrunk, fx} from './parts';

const ME7300 = fx(Math.round(ALPHA_ME / 100) * 100);

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>In the Geiger-Marsden experiment, most alpha particles passed through thin gold foil with small deflections, but a very small fraction was deflected through {U('large angles')}, some more than 90°. Explain why this result could not be explained by {U("Thomson's")} model of the atom, but could be explained by {U("Rutherford's")} model.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Chamber p={{x: 90, y: 40, w: 500}} theta={120} beam={1} flash={0.5} />
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const th = cue(id, "In Thomson's model"), bk = cue(id, 'is turned back'), ar = cap(id, cue(id, 'too light to turn an alpha around'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>{`most: small deflections; a very small fraction: large angles, some > 90°; alpha +2e, about ${ME7300} mₑ`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 20, width: 1110}}>
				<Row at={th} size={32}><AnswerBox at={th + 6}>Thomson: spread charge → only a weak force</AnswerBox></Row>
				<Row at={th + 20} size={32}><AnswerBox at={th + 26}>light electrons; small nudges almost never add to &gt; 90°</AnswerBox></Row>
				<Row at={bk - 6} size={32}><AnswerBox at={bk}>Rutherford: charge and mass concentrated</AnswerBox></Row>
				<Row at={bk + 10} size={32}><AnswerBox at={bk + 16}>close approach → huge Coulomb repulsion → large deflection</AnswerBox></Row>
				<Row at={bk + 24} size={32}><AnswerBox at={bk + 30}>rarely, because the nucleus is tiny</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic1 w={620} /></div>
			<CrossedChip x={96} y={820} at={ar - 40} crossAt={ar} size={30} caption={`α ≈ ${ME7300} × mₑ`}>it bounced off an electron</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A student states: {"'"}{U('Most')} alpha particles passed straight through the gold foil, so the Geiger-Marsden experiment {U('proves')} that {"Thomson's"} model was wrong.{"'"} Evaluate this statement.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Chamber p={{x: 90, y: 40, w: 500}} theta={0} beam={1} flash={1} />
		{[[-14, -10], [10, 12], [6, -16], [-8, 14]].map(([dx, dy], i) => <circle key={i} cx={520 + dx} cy={290 + dy} r={6} fill="#b8f5a0" stroke="#5fbf63" strokeWidth={1.5} />)}
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const ic = cue(id, 'The statement is incorrect'), ou = cue(id, "what rule Thomson's model out"), on = cap(id, cue(id, 'the decisive one'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>claim: most passed straight through, so Thomson is wrong</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 20, width: 1110}}>
				<Row at={ic} size={40}>the statement is incorrect</Row>
				<Row at={ou - 6} size={34}><AnswerBox at={ou}>most through: fits both models</AnswerBox></Row>
				<Row at={ou + 8} size={34}><AnswerBox at={ou + 14}>rare large angles: only the nuclear model</AnswerBox></Row>
				<Row at={ou + 22} size={34}><AnswerBox at={ou + 28}>so the rare result rules Thomson out</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic2 w={620} /></div>
			<CrossedChip x={96} y={790} at={on - 30} crossAt={on} size={30} caption="the common result fits both models">most went straight through, so Thomson was wrong</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, ho: cue(id, 'the nucleus holds the positive charge'), cp: cue(id, 'and called them protons'), ch: cue(id, 'the charge of seventy nine protons'), hn: cue(id, 'a hundred and ninety seven'), nc: cue(id, 'has no charge'), nx: cap(id, cue(id, 'So what evidence established')), end: dur(id) - 1};
})();
export const GN = {x: 400, y: 560, r: 220};
export const BARS = {x: 760, w: 1000, yQ: 360, yM: 580, h: 60};
const PDISCS = Array.from({length: 26}, (_, i) => { const a = i * 2.39996, d = 34 * Math.sqrt(i + 0.5); return [Math.cos(a) * d, Math.sin(a) * d] as const; }).filter(([x, y]) => Math.hypot(x, y) < 190);
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard08: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const red = BARS.w * (AU_Z / AU_A);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<circle cx={GN.x} cy={GN.y} r={GN.r} fill="#f2b9ae" stroke={NUC_RED} strokeWidth={5} opacity={o(HD.ho)} />
				{PDISCS.map(([dx, dy], i) => <NucPlus key={i} x={GN.x + dx} y={GN.y + dy} r={15} label="p" opacity={o(HD.cp + 2 * i, 8)} />)}
				<rect x={BARS.x} y={BARS.yQ} width={BARS.w} height={BARS.h} rx={8} fill="none" stroke={INK} strokeWidth={2.5} />
				<rect x={BARS.x} y={BARS.yM} width={BARS.w} height={BARS.h} rx={8} fill="none" stroke={INK} strokeWidth={2.5} />
				{!final ? <g opacity={1 - prog(f, HD.cp, 16)}><Chamber p={{x: 1560, y: 690, w: 260}} theta={150} beam={1} /></g> : null}
				<g opacity={o(HD.ch)}><rect x={BARS.x} y={BARS.yQ} width={red} height={BARS.h} rx={8} fill={RED.stroke} /></g>
				<g opacity={o(HD.hn)}>
					<rect x={BARS.x} y={BARS.yM} width={red} height={BARS.h} rx={8} fill={RED.stroke} />
					<rect x={BARS.x + red} y={BARS.yM} width={BARS.w - red} height={BARS.h} rx={8} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="14 10" />
				</g>
			</FrameSvg>
			<Lbl x={GN.x} y={GN.y - GN.r - 30} at={at(HD.ho)} color={RED.ink} size={34} anchor="middle">{`gold nucleus: +${AU_Z}e`}</Lbl>
			<Lbl x={GN.x} y={GN.y + GN.r + 44} at={at(HD.ho)} color={GREY.ink} size={26} anchor="middle">enlarged</Lbl>
			<Lbl x={96} y={900} at={at(HD.cp + 10)} color={INK} size={28}>proton: charge +e, mass mₚ (Rutherford, 1920)</Lbl>
			<Lbl x={BARS.x} y={BARS.yQ - 24} at={at(-30)} color={INK} size={30}>charge</Lbl>
			<Lbl x={BARS.x + red + 20} y={BARS.yQ + 42} at={at(HD.ch + 10)} color={RED.ink} size={30}>{`${AU_Z} protons → +${AU_Z}e ✓`}</Lbl>
			<Lbl x={BARS.x} y={BARS.yM - 24} at={at(-30)} color={INK} size={30}>mass</Lbl>
			<Lbl x={BARS.x + 16} y={BARS.yM + 42} at={at(HD.hn)} color={'#ffffff'} size={28} bg={false}>{`${AU_Z} protons → ${AU_Z} mₚ`}</Lbl>
			<Lbl x={BARS.x + BARS.w} y={BARS.yM + BARS.h + 40} at={at(HD.hn)} color={INK} size={30} anchor="end">{`${AU_A} mₚ`}</Lbl>
			{marks ? <HandTag x={BARS.x + red + 140} y={BARS.yM + BARS.h + 90} text={`≈ ${AU_GAP} mₚ missing`} at={at(HD.hn + 20)} size={36} color={GREY.ink} marks={[{kind: 'underline', x1: BARS.x + red + 8, x2: BARS.x + BARS.w - 8, y: BARS.yM + BARS.h + 18}]} /> : null}
			<Lbl x={BARS.x + red + (BARS.w - red) / 2} y={BARS.yM - 24} at={at(HD.nc)} color={GREY.ink} size={30} anchor="middle">charge 0?</Lbl>
			{chip ? <Chip x={96} y={950 - 80} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: what evidence established an uncharged massive particle in the nucleus?</Chip> : null}
		</>
	);
};
/** v08's final frame for the next video. */
export const M8V08FinalFrame: React.FC = () => <HandoffBoard08 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard08 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <><span style={{color: AMBER.ink}}>Alphas (+2e)</span> at thin gold foil; flashes counted.</>, at: 2},
		{content: <>Most through; a very few turned past 90°.</>, at: 6},
		{content: <>Thomson: weak spread force, light electrons: ruled out.</>, at: 10},
		{content: <><span style={{color: RED.ink}}>Nucleus</span>: tiny, positive, nearly all the mass.</>, at: 14},
		{content: <>Close approach: huge Coulomb force (F ∝ 1/r²).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Most through: mostly empty. Rarely back: tiny, dense and positive.</>} picture={<svg width={580} height={220}>{[50, 90, 170, 210].map(y => <line key={y} x1={30} y1={y} x2={540} y2={y} stroke={AMBER.stroke} strokeWidth={4} />)}<path d="M30,130 L270,130 L60,170" fill="none" stroke={AMBER.stroke} strokeWidth={5} /><NucPlus x={286} y={130} r={14} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
