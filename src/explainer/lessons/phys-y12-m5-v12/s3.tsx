// Scenes 11 to 16: two attempts with brief feedback, the handoff to the conical pendulum (its last frame is
// exported for the next lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Bench, Chip, CrossedChip, DISPLAY, MS, ROLE, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {ConeRig, RearCar, RoadSection, Roundabout, TopCar, coneGeom, rearCarGeom} from '../../physics/circular/road-cone';
import {A1, A2, ACCENT, HEAD, HEAD_SIZE, cue, hold, mono} from './common';
import {AMBER, Bars, Lbl, TopViewCard} from './parts';

const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative', color: p > 0 ? ROLE.slate.ink : undefined}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={ROLE.slate.ink} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);

// ---------- attempt pictures (answer-free) ----------
const BendPicture: React.FC<{r: string; ring?: boolean}> = ({r, ring = false}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		{ring ? <Roundabout cx={300} cy={300} R={190} w={80} /> : (
			<g>
				<path d="M 60,520 A 420,420 0 0,1 480,100" fill="none" stroke="#cfd2d4" strokeWidth={90} />
				<path d="M 60,520 A 420,420 0 0,1 480,100" fill="none" stroke="#f4f1ea" strokeWidth={3} strokeDasharray="18 16" />
				<circle cx={480} cy={520} r={9} fill={ROLE.given.stroke} />
			</g>
		)}
		{ring ? <TopCar x={490} y={300} len={110} heading={90} /> : <TopCar x={183} y={223} len={110} heading={45} />}
		{ring ? <line x1={300} y1={300} x2={490} y2={300} stroke={ROLE.given.stroke} strokeWidth={4} /> : <line x1={480} y1={520} x2={183} y2={223} stroke={ROLE.given.stroke} strokeWidth={4} />}
		<text x={ring ? 380 : 400} y={ring ? 280 : 300} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 38}} fill={ROLE.given.ink}>{r}</text>
		<text x={ring ? 300 : 500} y={ring ? 550 : 555} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 30}} fill={INK}>{ring ? 'flat roundabout (top view)' : 'flat bend (top view)'}</text>
	</svg>
);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A car of mass 1200 kg travels at constant speed around a <M at={mark}>flat, unbanked</M> bend of radius <M at={mark === undefined ? undefined : mark + 6}>45 m</M>. The coefficient of static friction between the tyres and the road is <M at={mark === undefined ? undefined : mark + 12}>0.65</M>. (a) Identify the force that provides the centripetal force on the car. (b) Calculate the greatest speed at which the car can take the bend without sliding.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A car of mass 1500 kg enters a flat roundabout of radius <M at={mark === undefined ? undefined : mark + 6}>15 m</M> at a constant speed of <M at={mark}>35 km h<Sup>−1</Sup></M>. The road is wet and the coefficient of static friction between the tyres and the road is <M at={mark === undefined ? undefined : mark + 12}>0.40</M>. Determine, with calculations, whether the car can travel around the roundabout at this speed without sliding.</>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<BendPicture r="r = 45 m" />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<BendPicture r="r = 15 m" ring />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const provides = cue(id, 'provides'), cancels = cue(id, 'mass cancels'), sixteen = cue(id, 'sixteen point nine'), slip = cue(id, 'The classic slip'), impossible = cue(id, 'impossible');
	const g = rearCarGeom(1510, 820, 300);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={380} givens={<>m = 1200 kg | flat, unbanked bend, r = 45 m | μ<Sub>s</Sub> = 0.65</>}><Q1 mark={provides - 20} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={provides} ageAt={sixteen} size={TYPE.current} oldSize={36}>(a) static friction between the tyres and the road</Row>
				<Row at={cancels - 20} ageAt={sixteen} size={TYPE.current} oldSize={36}><Strike on={cancels}>m</Strike>v<Sup>2</Sup>/r = μ<Sub>s</Sub><Strike on={cancels + 4}>m</Strike>g</Row>
				<Row at={sixteen - 40} size={TYPE.current}>v<Sub>max</Sub> = √(0.65 × 9.8 × 45) = √286.65</Row>
				<Row at={sixteen} size={TYPE.working}>(b) <AnswerBox at={sixteen + 10}><span>v<Sub>max</Sub> = {A1.vmax.toFixed(1)}<MS /></span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={impossible} size={34} caption="take the square root">v = 0.65 × 9.8 × 45 = 287<MS /></CrossedChip>
			<FrameSvg>
				<RoadSection cx={1510} cy={820} half={260} />
				<RearCar cx={1510} cy={820} w={300} />
				<VecArrow x={g.com[0]} y={g.com[1]} dx={-150} dy={0} color={AMBER.stroke} width={8} at={provides} head={24} />
			</FrameSvg>
			<Lbl x={1510} y={520} at={provides} color={AMBER.ink} anchor="middle" size={34}>static friction</Lbl>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const convert = cue(id, 'First convert'), nineSeven = cue(id, 'nine point seven two'), nineThou = cue(id, 'nine thousand'), fiveThou = cue(id, 'five thousand'), slides = cue(id, 'slides'), slip = cue(id, 'The slip'), without = cue(id, 'without converting');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={380} givens={<>m = 1500 kg | flat roundabout, r = 15 m | v = 35 km h<Sup>−1</Sup> | wet road, μ<Sub>s</Sub> = 0.40</>}><Q2 mark={convert} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 10, width: 1100}}>
				<Row at={nineSeven - 10} ageAt={nineThou} size={TYPE.current} oldSize={36}>v = 35 ÷ 3.6 = 9.72<MS /></Row>
				<Row at={nineThou - 10} ageAt={slides} size={TYPE.current} oldSize={36}><span style={{color: AMBER.ink}}>needed: f = 1500 × 9.72<Sup>2</Sup> ÷ 15 = 9.45 × 10<Sup>3</Sup> N</span></Row>
				<Row at={fiveThou - 10} ageAt={slides} size={TYPE.current} oldSize={36}><span style={{color: ROLE.given.ink}}>available: 0.40 × 1500 × 9.8 = 5.88 × 10<Sup>3</Sup> N</span></Row>
				<Row at={slides - 10} size={TYPE.current}><AnswerBox at={slides}><span>needed &gt; available: it slides</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={840} at={slip} crossAt={without} size={34} caption="convert km/h to m/s first">1500 × 35<Sup>2</Sup> ÷ 15</CrossedChip>
			<FrameSvg>
				<Bars x={1330} base={880} scale={340 / 10000} need={A2.need} have={A2.avail} at={nineThou} />
			</FrameSvg>
			<TopViewCard x={1290} y={166} w={534} h={280} title="Flat roundabout" r="r = 15 m" />
			<Lbl x={1330} y={480} at={slides} color={ROLE.slate.ink} size={30}>v<Sub>max</Sub> = {A2.vmax.toFixed(1)}<MS /> &lt; 9.72<MS /></Lbl>
		</>
	);
};

// ---------- 15. handoff: the conical pendulum (its last frame is the next lesson's first frame) ----------
export const CONE = {pivot: [760, 330] as [number, number], benchY: 900, L: 420, theta: 30, tiltK: 0.3};
export const HandoffBoard: React.FC<{goAt?: number; forcesAt?: number; coneAt?: number; stopAt?: number}> = ({goAt = -400, forcesAt = -200, coneAt = -200, stopAt = -100}) => {
	const f = useCurrentFrame();
	const laps = Math.max(1, Math.round((stopAt - goAt) / 75));
	const u = kf(f, mono([[goAt, 0], [stopAt, 1]]), false);
	const phase = 2 * Math.PI * laps * u;
	const {c, r, bob} = coneGeom(CONE.pivot, CONE.L, CONE.theta, CONE.tiltK, phase);
	const stopped = f >= stopAt;
	const tx = CONE.pivot[0] - bob[0], ty = CONE.pivot[1] - bob[1], tl = Math.hypot(tx, ty);
	return (
		<>
			<SceneHeading text="How does string tension sustain a conical pendulum?" at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench edgeX={1250} topY={CONE.benchY} left={96} floorY={4000} legs={false} />
				<ConeRig pivot={CONE.pivot} benchY={CONE.benchY} L={CONE.L} theta={CONE.theta} tiltK={CONE.tiltK} phase={phase} cone={f >= coneAt} />
				<line x1={CONE.pivot[0]} x2={CONE.pivot[0]} y1={CONE.pivot[1]} y2={c[1] + 20} stroke={INK} strokeWidth={2} strokeDasharray="8 7" />
				{f >= forcesAt ? <g opacity={prog(f, forcesAt, 12)}>
					<VecArrow x={bob[0]} y={bob[1]} dx={(tx / tl) * 170} dy={(ty / tl) * 170} color={AMBER.stroke} width={7} head={22} />
					<VecArrow x={bob[0]} y={bob[1]} dx={0} dy={150} color={AMBER.stroke} width={7} head={22} />
				</g> : null}
				{stopped ? <g opacity={prog(f, stopAt, 12)}>
					<circle cx={c[0]} cy={c[1]} r={9} fill={ROLE.given.stroke} />
					<line x1={bob[0]} y1={bob[1]} x2={c[0]} y2={c[1]} stroke={ROLE.given.stroke} strokeWidth={3} strokeDasharray="10 8" />
				</g> : null}
			</FrameSvg>
			{f >= forcesAt ? <Lbl x={bob[0] - 60 + (tx / tl) * 120} y={bob[1] + (ty / tl) * 120} color={AMBER.ink} anchor="end" size={32}>tension</Lbl> : null}
			{f >= forcesAt ? <Lbl x={bob[0] + 24} y={bob[1] + 140} color={AMBER.ink} size={32}>weight</Lbl> : null}
			{stopped ? <div style={{position: 'absolute', left: (bob[0] + c[0]) / 2 - 20, top: c[1] - 120, opacity: prog(f, stopAt + 10, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: INK}}>?</div> : null}
			<Lbl x={c[0] - r - 20} y={c[1] + 10} at={coneAt} color={INK} anchor="end" size={30}>horizontal circle</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 200, width: 534}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 22px 14px', border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.label, '#6b6358', 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Only two forces</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800), marginTop: 4}}>the string's pull (tension)</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800)}}>gravity (weight)</div>
					<div style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>one slanted string: up and in?</div>
				</div>
			</Enter>
			<Chip x={1290} y={470} at={stopAt} size={36} w={534} color={INK} border={INK}>Next: how does string tension sustain a conical pendulum?</Chip>
		</>
	);
};
/** v12's final frame, for the next lesson's opening. */
export const V12FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const going = cue(id, 'going round'), pull = cue(id, "string's pull"), cone = cue(id, 'cone'), inwards = cue(id, 'inwards');
	return <HandoffBoard goAt={going} forcesAt={pull} coneAt={cone} stopAt={inwards} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Flat curve: N = mg vertically; static friction points inwards.</>, at: 2},
		{content: <>Friction is the whole net force: f = mv<Sup>2</Sup>/r.</>, at: 6},
		{content: <>Needed friction is not the maximum: f<Sub>max</Sub> = μ<Sub>s</Sub>mg.</>, at: 10},
		{content: <>Limit: v<Sub>max</Sub> = √(μ<Sub>s</Sub>gr), whatever the mass.</>, at: 14},
		{content: <>Too fast: too little friction, so a wider path. No outward force.</>, at: 18},
	];
	const g = rearCarGeom(280, 200, 230);
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={38} aid={
				<MemoryCard at={24} main={<span style={{color: AMBER.ink}}>Centripetal is a job, not a force.</span>} sub="Draw real forces, then find the one pointing in."
					picture={<svg width={584} height={220}>
						<RoadSection cx={280} cy={200} half={220} />
						<RearCar cx={280} cy={200} w={230} />
						<VecArrow x={g.com[0]} y={g.com[1]} dx={-120} dy={0} color={AMBER.stroke} width={7} head={20} />
						<text x={g.com[0] - 130} y={g.com[1] - 16} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={AMBER.ink}>f does it</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
