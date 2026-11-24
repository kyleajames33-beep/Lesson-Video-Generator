// Scenes 12 to 17: two attempts with brief feedback, the handoff to the spanner (its last frame is exported for
// the next lesson), the key notes.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bench, Bracket, Chip, CrossedChip, DISPLAY, MS, Q, ROLE, Row, Sup, VecArrow} from '../../physics/projectile/board';
import {CARBON_SRC, PlumbMark, RampRig, Sheet} from '../../physics/projectile/ramp';
import {ACCENT, HEAD, HEAD_SIZE, SHIFT, cue, hold} from './common';
import {Lbl, SpannerNut, Strip, rig, spannerGeom, stripX} from './parts';
import {BenchStage} from './s1';

const Half = () => <Sup>½</Sup>;
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>In a horizontal-launch investigation, three repeated measurements of range from the same launch height are 0.70 m, 0.72 m and 0.74 m. (a) Calculate the mean range and its uncertainty, taking the uncertainty as <M at={mark}>half the range</M> of the measurements. (b) Explain whether repeating the trials shows that the mean range is <M at={mark === undefined ? undefined : mark + 8}>accurate</M>.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>In a horizontal-launch investigation, range R (m) is plotted against the square root of the drop height, <M at={mark}>√h (m<Half />)</M>. The <M at={mark === undefined ? undefined : mark + 8}>gradient</M> of the line of best fit is 1.00 m<Half />. The model is R = u<sub style={{fontSize: '0.62em'}}>x</sub> √(2h ÷ g), with g = 9.8 m s<Sup>−2</Sup>. Calculate the horizontal launch speed u<sub style={{fontSize: '0.62em'}}>x</sub>.</>;

// ---------- attempt pictures (answer-free) ----------
const RigPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Bench edgeX={670} topY={470} left={0} floorY={4000} legs={false} />
		<Sheet x={480} y={466} w={360} />
		<RampRig exitX={300} benchY={470} hPx={240} rw={420} ballU={1} />
		<PlumbMark x={300} y={466} />
	</svg>
);
const KitPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Sheet x={340} y={220} w={640} />
		<Sheet src={CARBON_SRC} x={360} y={220} w={500} />
		<image href={staticFile('assets/physics/phys-y11-metre-rule-v1.png')} x={340 - 1086 * 0.42} y={430 - 362 * 0.42} width={2172 * 0.42} height={724 * 0.42} preserveAspectRatio="none" />
		<text x={40} y={530} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>carbon paper, paper, metre rule</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<RigPicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<KitPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const meanC = cue(id, 'The mean'), half = cue(id, 'half the spread'), metres2 = cue(id, 'metres', 2), precise = cue(id, 'precise'), acc1 = cue(id, 'accurate'), together = cue(id, 'together'), slip = cue(id, 'The slip'), acc2 = cue(id, 'accurate', 2);
	const SX = 1250, SW = 540, A = 0.66, B = 0.78, SY = 640;
	const shift = 0.03 * prog(f, together, 24);
	const sx = stripX(SX, SW, A, B);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={380} givens={<>R = 0.70 m, 0.72 m, 0.74 m (same launch height) | uncertainty = half the range of the measurements</>}><Q1 mark={half} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={meanC} ageAt={metres2} size={TYPE.current} oldSize={36}>mean = (0.70 + 0.72 + 0.74) ÷ 3 = 0.72 m</Row>
				<Row at={half} ageAt={metres2} size={TYPE.current} oldSize={36}>± = (0.74 − 0.70) ÷ 2 = 0.02 m</Row>
				<Row at={metres2 - 10} size={TYPE.working}><AnswerBox at={metres2}>R = 0.72 ± 0.02 m</AnswerBox></Row>
				<Row at={precise} size={TYPE.current}><AnswerBox at={acc1}>precise, not shown accurate</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={acc2} size={34} caption="repeats: precision; accuracy needs no bias">repeats make it accurate</CrossedChip>
			<FrameSvg>
				<Strip x={SX} y={SY} w={SW} a={A} b={B} step={0.02} labels={false} marks={[0.7, 0.72, 0.74].map(v => ({v: v - shift, color: INK_SOFT}))} band={{lo: 0.7 - shift, hi: 0.74 - shift, at: -30}} />
				<Bracket x1={sx(0.72 - shift)} y1={SY - 90} x2={sx(0.72)} y2={SY - 90} color={SHIFT.stroke} at={together} />
			</FrameSvg>
			<Lbl x={SX + SW / 2} y={SY - 160} at={together} color={SHIFT.ink} anchor="middle" size={30}>a bias shifts all three together</Lbl>
			<Lbl x={SX + SW / 2} y={SY + 140} color={INK_SOFT} anchor="middle" size={30}>same spread</Lbl>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const gradIs = cue(id, 'The gradient is'), soUx = cue(id, 'So u x'), one00 = cue(id, 'one point zero zero'), two21 = cue(id, 'two point two one'), slip = cue(id, 'The slip'), isnt = cue(id, "isn't a");
	const gx = (v: number) => 1300 + v * 600, gy = (v: number) => 860 - v * 600;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={360} givens={<>R against √h | gradient = 1.00 m<Half /> | R = <Q s="u" ax="x" plain /> √(2h ÷ g) | g = 9.8 m s<Sup>−2</Sup></>}><Q2 mark={gradIs} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={gradIs} size={TYPE.current}>m = <Q s="u" ax="x" /> √(2 ÷ g)</Row>
				<Row at={soUx} ageAt={two21} size={TYPE.current} oldSize={36}><Q s="u" ax="x" /> = m √(g ÷ 2)</Row>
				<Row at={one00} ageAt={two21} size={TYPE.current} oldSize={36}>&nbsp;&nbsp;= 1.00 × √(9.8 ÷ 2) = 1.00 × 2.214</Row>
				<Row at={two21 - 10} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={two21}><span style={{color: ROLE.x.ink}}>2.21<MS /></span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={isnt} size={34} caption="its unit is root metres, not a speed"><Q s="u" ax="x" plain /> = 1.00<MS /></CrossedChip>
			<FrameSvg>
				<rect x={1240} y={440} width={584} height={500} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				<path d={`M${gx(0)},${gy(0.72)} V${gy(0)} H${gx(0.8)}`} fill="none" stroke={INK} strokeWidth={3.5} />
				<line x1={gx(0)} y1={gy(0)} x2={gx(0.72)} y2={gy(0.72)} stroke={ROLE.given.stroke} strokeWidth={5} />
				{f >= gradIs ? <g opacity={prog(f, gradIs, 12)}><path d={`M${gx(0.3)},${gy(0.3)} H${gx(0.6)} V${gy(0.6)}`} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
			</FrameSvg>
			<Lbl x={gx(0.45)} y={gy(0.3) + 36} at={gradIs} color={INK} anchor="middle" size={30}>m = 1.00 m<Half /></Lbl>
			<Lbl x={gx(0.8)} y={gy(0) + 40} color={ROLE.y.ink} anchor="end" size={30}>√h (m<Half />)</Lbl>
			<Lbl x={gx(0) + 10} y={gy(0.72) - 10} color={ROLE.x.ink} size={30}>R (m)</Lbl>
		</>
	);
};

// ---------- 16. handoff: forces that turn (its last frame is the next lesson's first frame) ----------
const NUT: [number, number] = [520, 600];
const ARM = 400;
const AMBER = ROLE.w;
export const HandoffBoard: React.FC<{turnAt?: number; forceAt?: number; threeAt?: number; whyAt?: number}> = ({turnAt = -200, forceAt = -200, threeAt = -200, whyAt = -200}) => {
	const f = useCurrentFrame();
	const sw = prog(f, turnAt, 30);
	const {force: [fx_, fy_]} = spannerGeom(NUT[0], NUT[1], ARM);
	const L = 210, a30 = Math.PI / 6;
	const g = rig(0.4);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><FrameSvg><BenchStage h={0.4} ball={g.at(0)} strobes={{h: 0.4, upTo: 0.2857}} /></FrameSvg></div> : null}
			{sw > 0 ? (
				<div style={{position: 'absolute', inset: 0, opacity: sw}}>
					<FrameSvg>
						<SpannerNut cx={NUT[0]} cy={NUT[1]} armPx={ARM} />
						<VecArrow x={fx_} y={fy_} dx={0} dy={-L} color={AMBER.stroke} width={8} at={forceAt} head={26} />
						<VecArrow x={fx_} y={fy_} dx={L * Math.cos(a30)} dy={-L * Math.sin(a30)} color={AMBER.stroke} width={8} at={threeAt} head={26} />
						<VecArrow x={fx_} y={fy_} dx={-L} dy={0} color={AMBER.stroke} width={8} at={threeAt + 8} head={26} />
						{f >= threeAt + 16 ? <g opacity={prog(f, threeAt + 16, 12)}><path d={`M${NUT[0] - 90},${NUT[1] - 70} A115,115 0 0,1 ${NUT[0] + 90},${NUT[1] - 70}`} fill="none" stroke={INK} strokeWidth={4} /><path d={`M${NUT[0] + 72},${NUT[1] - 88} L${NUT[0] + 92},${NUT[1] - 68} L${NUT[0] + 64},${NUT[1] - 60}`} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" /></g> : null}
					</FrameSvg>
					<Lbl x={fx_ + 16} y={fy_ - L + 10} at={forceAt} color={AMBER.ink} size={TYPE.current}>80 N</Lbl>
					<Lbl x={fx_ + L * Math.cos(a30) + 12} y={fy_ - L * Math.sin(a30)} at={threeAt} color={AMBER.ink} size={TYPE.current}>80 N</Lbl>
					<Lbl x={fx_ - L - 12} y={fy_ - 30} at={threeAt + 8} color={AMBER.ink} anchor="end" size={TYPE.current}>80 N</Lbl>
					{f >= threeAt + 16 ? <div style={{position: 'absolute', left: NUT[0] - 26, top: NUT[1] - 250, opacity: prog(f, threeAt + 20, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: INK}}>?</div> : null}
					<Lbl x={(NUT[0] + fx_) / 2} y={NUT[1] + 120} color={INK_SOFT} anchor="middle" size={30}>top view: a spanner on a stuck nut</Lbl>
				</div>
			) : null}
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 200, width: 534}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 22px 14px', border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Same force, three directions</div>
					<div style={{...DISPLAY(34, INK, 800), marginTop: 4}}>which turns the nut best?</div>
					<div style={{...DISPLAY(34, INK, 800)}}>which does nothing?</div>
				</div>
			</Enter>
			<Chip x={1290} y={440} at={whyAt} size={36} w={534} color={INK} border={INK}>Next: why does a force turn an object more effectively at some angles?</Chip>
		</>
	);
};
/** v08's final frame, for the next lesson's opening. */
export const V08FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const turn = cue(id, 'turn'), sameF = cue(id, 'same force'), three = cue(id, 'three different'), why = cue(id, 'Why');
	return <HandoffBoard turnAt={turn} forceAt={sameF} threeAt={three} whyAt={why} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Model: R = <Q s="u" ax="x" /> √(2h ÷ g), so R ∝ √h (4 × h gives 2 × R).</>, at: 2},
		{content: <>Fair test: change h, measure R; keep <Q s="u" ax="x" /> fixed (same ball, release, level exit).</>, at: 6},
		{content: <>h to the ball's bottom; R from below the exit. Report mean ± half the spread.</>, at: 10},
		{content: <>Plot R against √h: gradient m = <Q s="u" ax="x" /> √(2 ÷ g). Check <Q s="u" ax="x" /> another way.</>, at: 14},
		{content: <>A systematic shift survives repeats; a straight line is not proof.</>, at: 18},
	];
	const sx = (v: number) => 30 + (v - 0.58) * 2300;
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={36} aid={
				<MemoryCard at={24} main={<><span style={{color: ROLE.given.ink}}>Repeats steady the mean,</span> <span style={{color: SHIFT.ink}}>not the shift.</span></>}
					picture={<svg width={584} height={220}>
						<rect x={20} y={40} width={250} height={70} rx={8} fill="#f4f1ea" stroke="#cfc6b6" strokeWidth={2} />
						<rect x={310} y={40} width={250} height={70} rx={8} fill="#f4f1ea" stroke="#cfc6b6" strokeWidth={2} />
						<rect x={sx(0.615)} y={58} width={sx(0.66) - sx(0.615)} height={34} rx={6} fill="rgba(107,99,88,0.22)" />
						{[0.615, 0.63, 0.645, 0.66].map(v => <circle key={v} cx={sx(v)} cy={75} r={7} fill={INK_SOFT} />)}
						<line x1={sx(0.64)} x2={sx(0.64)} y1={44} y2={106} stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="6 5" />
						{[0.596, 0.6, 0.604].map(v => <circle key={v} cx={sx(v) + 290} cy={75} r={7} fill={INK_SOFT} />)}
						<line x1={sx(0.64) + 290} x2={sx(0.64) + 290} y1={44} y2={106} stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="6 5" />
						<line x1={sx(0.6) + 290} x2={sx(0.64) + 290} y1={30} y2={30} stroke={SHIFT.stroke} strokeWidth={4} />
						<text x={145} y={160} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={INK_SOFT}>spread: random</text>
						<text x={435} y={160} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={SHIFT.ink}>shift: systematic</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

