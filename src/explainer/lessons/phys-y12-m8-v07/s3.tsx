// Scenes 13 to 18: attempt 1 (the painted Millikan plates with a magnified gap holding one painted drop and a "−" sign,
// no values) and its feedback, attempt 2 (the exam-style tube and the painted Millikan plates side by side) and its
// feedback, the handoff (Thomson's plum-pudding guess with an alpha particle approaching; its last frame is exported as
// `M8V07FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {OilDrop, PlatePair} from '../../physics/electromagnetism/plates';
import {ExamTube, MALTESE, MILLIKAN} from '../../physics/atom/electron';
import {A1_D, A1_E, A1_M, A1_N, A1_Q, A1_SLIP, A1_V, ACCENT, E_CH, G, HEAD, HEAD_NEXT, HEAD_SIZE, M_E_CALC, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, RED, Shrunk, TEAL, fx, sci} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>An oil drop of mass {sci(A1_M, 1)} kg is held {U('stationary')} between two horizontal parallel plates {U(`${fx(A1_D * 100, 1)} cm`)} apart when the potential difference between the plates is {U(`${A1_V} V`)}. (a) Calculate the charge on the drop. (b) Calculate the number of excess electrons on the drop. (g = {G} m s⁻²; e = {sci(E_CH, 3)} C)</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<LPlate spec={MILLIKAN} p={{x: 30, y: 60, w: 400}} />
		<circle cx={520} cy={330} r={130} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		<PlatePair g={{x1: 420, x2: 620, yTop: 260, yBot: 400}} thick={12} signSize={26} signStep={100} />
		<OilDrop cx={520} cy={330} d={34} />
		<text x={548} y={340} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>−</text>
		<path d="M300,150 L440,250" stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
		<text x={520} y={510} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 30, fill: GREY.ink}}>the gap, magnified</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const fb = cue(id, 'The forces balance'), fv = cue(id, 'The field is V over d'), co = cue(id, 'four point eight zero times ten to the minus nineteen coulombs'), ex = cue(id, 'three excess electrons'), bg = cap(id, cue(id, 'one hundred times too big'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>{`m = ${sci(A1_M, 1)} kg; d = ${fx(A1_D * 100, 1)} cm; V = ${A1_V} V; g = ${G} m s⁻²; e = ${sci(E_CH, 3)} C`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={fb} ageAt={co} size={40}>stationary: |q|E = mg</Row>
				<Row at={fv} ageAt={co} size={40}>{`(a) E = V/d = ${A1_V} / 0.010 = ${sci(A1_E, 1)} V m⁻¹`}</Row>
				<Row at={co - 6} ageAt={ex} size={38}>{`|q| = mg/E = (${sci(A1_M, 1)})(${G}) / (${sci(A1_E, 1)}) = ${sci(A1_Q, 2)} C`}</Row>
				<Row at={co + 10} size={40}><AnswerBox at={co + 16}>{`q = −${sci(A1_Q, 2)} C (excess electrons)`}</AnswerBox></Row>
				<Row at={ex - 6} size={40}><AnswerBox at={ex}>{`(b) n = (${sci(A1_Q, 2)}) / (${sci(E_CH, 3)}) = ${fx(A1_N, 2)} → 3 electrons`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic1 w={620} /></div>
			<CrossedChip x={96} y={840} at={bg} crossAt={bg + 12} size={28} caption="100 times too big: divide V by d first">{`|q| = mg/V = ${sci(A1_SLIP, 1)} C`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain why {"Thomson's"} charge-to-mass experiment {U('alone')} could not determine the mass of the electron, and how {"Millikan's"} oil drop experiment {U('resolved')} this.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<ExamTube g={{x0: 50, y: 170, px1: 170, px2: 330, hg: 36, sx: 600, top: 90, bot: 250}} size={24} />
		<LPlate spec={MILLIKAN} p={{x: 140, y: 300, w: 400}} />
		<text x={340} y={290} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>Thomson</text>
		<text x={340} y={520} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>Millikan</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const or = cue(id, 'gives only a ratio'), mi = cue(id, 'Millikan measured e on its own'), ms = cue(id, 'gives the mass'), ra = cap(id, cue(id, 'He measured a ratio'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>Thomson: e/m; Millikan: e</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1110}}>
				<Row at={or - 6} size={36}><AnswerBox at={or}>Thomson: e/m only; any (e, m) pair in that ratio fits</AnswerBox></Row>
				<Row at={mi - 6} size={36}><AnswerBox at={mi}>Millikan: e measured independently (qE = mg, multiples of e)</AnswerBox></Row>
				<Row at={ms - 6} size={44}><AnswerBox at={ms}>{`m = e ÷ (e/m) = ${sci(M_E_CALC, 2)} kg`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic2 w={620} /></div>
			<CrossedChip x={96} y={760} at={ra - 30} crossAt={ra} size={30} caption="he measured a ratio">{"Thomson measured the electron's mass"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, ec: cue(id, 'every atom contains electrons'), sp: cue(id, 'something positive must balance them'), nm: cue(id, 'carry nearly all the mass'), pp: cue(id, 'like plums in a pudding'), fi: cue(id, 'you fire things at it'), nx: cap(id, cue(id, 'So why did scattering require')), end: dur(id) - 1};
})();
export const PUD = {cx: 980, cy: 540, r: 250};
/** Evenly scattered electron positions inside the sphere (unit offsets). */
export const ELECTRONS = [[-0.55, -0.3], [-0.1, -0.62], [0.45, -0.42], [0.62, 0.12], [0.2, 0.55], [-0.35, 0.5], [-0.68, 0.18], [0.05, 0.05], [0.3, -0.05], [-0.3, -0.05], [0.0, 0.32], [0.38, 0.32]] as const;
export const PINK = '#f4c9c2';
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard07: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean; alpha?: boolean; labels?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true, alpha = true, labels = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const wash = final ? 1 : prog(f, HD.sp, 30);
	const even = final ? 1 : prog(f, HD.pp, 30);
	const jit = (i: number) => (1 - even) * 0.12 * Math.sin(i * 2.3);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{!final ? <g opacity={1 - prog(f, HD.sp, 16)}><LPlate spec={MALTESE} p={{x: 96, y: 250, w: 460}} /><LPlate spec={MILLIKAN} p={{x: 96, y: 520, w: 460}} /></g> : null}
				<circle cx={PUD.cx} cy={PUD.cy} r={PUD.r} fill={PINK} fillOpacity={wash} stroke={INK} strokeWidth={4} opacity={o(HD.ec)} />
				{ELECTRONS.map(([dx, dy], i) => <circle key={i} cx={PUD.cx + (dx + jit(i)) * PUD.r} cy={PUD.cy + (dy - jit(i)) * PUD.r} r={11} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={2} opacity={o(HD.ec + 3 * i, 10)} />)}
				{alpha ? <g opacity={o(HD.fi)}>
					<path d={`M240,${PUD.cy} L${PUD.cx - PUD.r - 30},${PUD.cy}`} stroke={AMBER.stroke} strokeWidth={4} strokeDasharray="12 9" />
					<circle cx={240} cy={PUD.cy} r={30} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			{!final ? <Lbl x={96} y={760} at={0} out={HD.sp} color={NAVY.ink} size={28}>the electron: charge −e, mass 9.10 × 10⁻³¹ kg</Lbl> : null}
			{alpha ? <Lbl x={240} y={PUD.cy + 10} at={at(HD.fi)} color={AMBER.ink} size={26} anchor="middle">α</Lbl> : null}
			{alpha ? <Lbl x={240} y={PUD.cy + 80} at={at(HD.fi)} color={AMBER.ink} size={28} anchor="middle">α (+)</Lbl> : null}
			{alpha ? <Lbl x={PUD.cx - PUD.r - 40} y={PUD.cy - 24} at={at(HD.fi + 10)} color={AMBER.ink} size={40} anchor="end">?</Lbl> : null}
			{labels ? <Lbl x={PUD.cx - PUD.r - 20} y={PUD.cy - PUD.r + 20} at={at(HD.pp + 10)} color={RED.ink} size={28} anchor="end">spread-out positive charge</Lbl> : null}
			{labels ? <Lbl x={PUD.cx + PUD.r + 30} y={PUD.cy - 120} at={at(HD.pp + 16)} color={NAVY.ink} size={28}>electrons</Lbl> : null}
			{labels ? <Lbl x={PUD.cx} y={PUD.cy + PUD.r + 50} at={at(HD.pp + 20)} color={INK} size={30} anchor="middle">{"Thomson's guess, 1904: the plum-pudding model"}</Lbl> : null}
			{!final ? <Lbl x={PUD.cx + PUD.r + 30} y={PUD.cy + 60} at={HD.sp} out={HD.pp} color={RED.ink} size={28}>positive charge: where?</Lbl> : null}
			{!final ? <Lbl x={PUD.cx + PUD.r + 30} y={PUD.cy + 110} at={HD.nm} out={HD.pp} color={INK} size={28}>and the mass</Lbl> : null}
			{marks ? <HandTag x={PUD.cx + PUD.r + 30} y={PUD.cy - 60} text="tiny, negative, light" at={at(HD.ec + 40)} size={32} color={NAVY.ink} /> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: why did scattering require a tiny dense nucleus?</Chip> : null}
		</>
	);
};
/** v07's final frame for the next video. */
export const M8V07FinalFrame: React.FC = () => <HandoffBoard07 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard07 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Cathode rays bend towards +: negative, in all matter.</>, at: 2},
		{content: <>Thomson: <span style={{color: TEAL.ink}}>v = E/B</span>, then q/m = 2yv²/(EL²).</>, at: 6},
		{content: <>e/m = 1.76 × 10¹¹ C kg⁻¹: a tiny mass.</>, at: 10},
		{content: <>Millikan: |q|E = mg, E = V/d; charge in whole e.</>, at: 14},
		{content: <>mₑ = e ÷ (e/m) = {sci(M_E_CALC, 2)} kg.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Cathode rays: it exists. Thomson: the ratio. Millikan: the charge. Divide for the mass.</>} picture={<svg width={580} height={220}><ExamTube g={{x0: 20, y: 110, px1: 120, px2: 230, hg: 30, sx: 270, top: 40, bot: 180}} size={22} /><LPlate spec={MILLIKAN} p={{x: 300, y: 50, w: 260}} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
