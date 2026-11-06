// Scenes 10 to 15: attempts and brief feedback, the cliff handoff, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, HandTag, KeyNotesBullets, MarkSpan, QuestionCard, SceneHeading, TaskStrip} from '../../math/studio';
import {clockAt, cue, flightT, hold, maxH, range} from './common';
import {
	AnswerBox, BLUE, BLUE_GREY, BallSvg, HandNote, CliffStage, CrossedChip, DISPLAY, FlightLane, GREEN_GREY, LaunchTriangle, LauncherSvg, MS, ORANGE, ORANGE_STROKE, RBox,
	RangeGraph, Row, STYLE_45, STYLE_FLAT, STYLE_STEEP, Stamp, Sub, Sup, TEAL, Ux, Uy, launcherGeom, rgPoint,
} from './parts';

const Working: React.FC<{y?: number; h?: number; w?: number}> = ({y = 720, h = 104, w = 1380}) => (
	<div style={{position: 'absolute', left: 96, top: y, width: w, height: h, boxSizing: 'border-box', border: '3px dashed rgba(60,45,20,0.28)', borderRadius: 18, background: 'repeating-linear-gradient(to bottom, transparent 0 50px, rgba(60,45,20,0.10) 50px 52px)'}}>
		<span style={{position: 'absolute', left: 22, top: 6, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>your working</span>
	</div>
);

/** The painted launcher as the question's picture (no answer-bearing marks). */
const QuestionLauncher: React.FC<{deg: number; label: React.ReactNode}> = ({deg, label}) => {
	const PX = 1570, PY = 350, LW = 290;
	const g = launcherGeom(PX, PY, LW, deg);
	return (
		<>
			<FrameSvg>
				<line x1={1500} x2={1824} y1={g.floorY} y2={g.floorY} stroke={INK} strokeWidth={3.5} />
				<LauncherSvg px={PX} py={PY} w={LW} deg={deg} />
				<BallSvg cx={g.muzzle[0]} cy={g.muzzle[1]} d={g.ballD} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 1510, top: g.floorY + 12, ...DISPLAY(34, INK, 700)}}>{label}</div>
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1: React.FC<{marks?: boolean; lvl?: number; launch?: number}> = ({marks = false, lvl = 0, launch = 0}) => (
	<>
		<div>A ball is launched at 14.0 m s<Sup>−1</Sup> from {marks ? <MarkSpan kind="underline" at={lvl}>level ground</MarkSpan> : 'level ground'} and {marks ? <MarkSpan kind="underline" at={launch}>lands at its launch level</MarkSpan> : 'lands at its launch level'}. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>.</div>
		<div style={{marginTop: 12}}>(a) Calculate the range when the launch angle is 45°.</div>
		<div style={{marginTop: 6}}>(b) Calculate the range when the launch angle is 20°.</div>
		<div style={{marginTop: 6}}>(c) State one other launch angle that would give the same range as in (b).</div>
	</>
);
export const S10: React.FC = () => {
	const id = 'attempt-1';
	return (
		<>
			<Working y={722} />
			<QuestionLauncher deg={30} label={<>14.0<MS /></>} />
			<QuestionCard at={-40} size={42} w={1380} y={196} hold={hold(id)} heading="Your turn" pauseAt={cue(id, 'Pause here')}><Q1 /></QuestionCard>
		</>
	);
};

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const lvl = cue(id, 'level ground'), a45 = cue(id, 'At forty-five'), m1 = cue(id, 'metres'), a20 = cue(id, 'At twenty'), sin40 = cue(id, 'sin forty'), m2 = cue(id, 'metres', 2), matching = cue(id, 'matching'), seventy = cue(id, 'seventy'), using = cue(id, 'Using');
	const GR = {x: 1180, y: 300, w: 644, h: 560, yMax: 25};
	const U = 14;
	return (
		<>
			<TaskStrip text="Check your working" at={-40} />
			<QuestionCard at={-60} shrinkAt={-50} size={42} w={1380} y={196}><Q1 marks lvl={lvl} launch={lvl + 10} /></QuestionCard>
			<div style={{position: 'absolute', left: 96, top: 540}}><Row at={a45} size={46}>(a) R = 14.0<Sup>2</Sup> × sin 90° ÷ 9.8 = <AnswerBox at={m1}>20.0 m</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 96, top: 616}}><Row at={a20} size={46}>(b) R = 196 × <MarkSpan kind="circle" at={sin40} color={INK}>sin 40°</MarkSpan> ÷ 9.8 = <AnswerBox at={m2}>12.9 m</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 96, top: 692}}><Row at={matching} size={46}>(c) 90° − 20° = <AnswerBox at={seventy}>70°</AnswerBox></Row></div>
			<HandTag x={880} y={652} text="double the angle" at={sin40 + 14} size={42} color={INK} />
			<CrossedChip x={96} y={786} at={using} size={40} caption="the formula doubles the angle">196 × sin 20° ÷ 9.8 = 6.84 m</CrossedChip>
			<Card x={1150} y={176} w={674} h={770} at={-40} pad="12px 22px"><CardTitle>Range against angle, 14.0 m s⁻¹</CardTitle></Card>
			<RangeGraph x={GR.x} y={GR.y} w={GR.w} h={GR.h} u={U} yMax={GR.yMax} small point={f >= matching ? 20 : f >= a20 ? 20 : 45}
				pairs={[{a: 20, b: 70, at: seventy, label: '12.9 m'}]} peakAt={m1} />
			{(() => {const [x, y] = rgPoint(GR, 45, range(U, 45)); return <HandTag x={x} y={y - 34} text="20.0 m at 45°" at={m1 + 6} size={36} color={GREEN_GREY} anchor="middle" />;})()}
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{marks?: boolean; speed?: number; lvl?: number}> = ({marks = false, speed = 0, lvl = 0}) => (
	<>
		Two projectiles are launched from {marks ? <MarkSpan kind="underline" at={lvl}>level ground</MarkSpan> : 'level ground'} at {marks ? <MarkSpan kind="underline" at={speed}>the same speed</MarkSpan> : 'the same speed'}, one at 30° and one at 60° above the horizontal. Both land at their launch level. Air resistance is negligible. Compare their ranges, times of flight and maximum heights, and explain why their ranges are equal although their times of flight are different. <span style={{color: INK_SOFT}}>(4 marks)</span>
	</>
);
export const S12: React.FC = () => {
	const id = 'attempt-2';
	return (
		<>
			<Working y={720} />
			<QuestionLauncher deg={30} label="same speed" />
			<QuestionCard at={-40} size={42} w={1380} y={196} hold={hold(id)} heading="Last one" pauseAt={cue(id, 'Pause here')}><Q2 /></QuestionCard>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const so = cue(id, 'so the ranges'), equal = cue(id, 'equal'), flight = cue(id, 'Flight time'), long = cue(id, 'long'), hgt = cue(id, 'Height depends'), high = cue(id, 'high'), still = cue(id, 'The ranges still'), factor = cue(id, 'same factor'), saying = cue(id, 'Saying');
	const U = 15, PPM = 24, MX = 1240, LW = 96;
	const ga = 520, gb = 870;
	const launch = f >= long - 60 ? long - 60 : 10;
	const H60 = maxH(U, 60) * PPM, H30 = maxH(U, 30) * PPM;
	const pk = MX + (range(U, 60) / 2) * PPM;
	return (
		<>
			<TaskStrip text="Check your working" at={-40} />
			<QuestionCard at={-60} shrinkAt={-50} size={42} w={1380} y={196}><Q2 marks lvl={cue(id, 'Thirty') + 6} speed={so} /></QuestionCard>
			<div style={{position: 'absolute', left: 96, top: 490}}><Row at={so} size={42}>R ∝ sin 2θ: sin 60° = sin 120°, so <AnswerBox at={equal}>R<Sub>30</Sub> = R<Sub>60</Sub></AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 96, top: 548}}><Row at={flight} size={42}>T ∝ <span style={{color: BLUE}}>sin θ</span>: sin 60° ÷ sin 30° = <AnswerBox at={long}>1.73</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 96, top: 606}}><Row at={hgt} size={42}>H ∝ <span style={{color: BLUE}}>sin²θ</span>: 0.75 ÷ 0.25 = <AnswerBox at={high}>3</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 96, top: 664}}><Row at={still} size={42}><Ux /> ∝ <span style={{color: TEAL}}>cos θ</span>: cos 60° ÷ cos 30° = 0.577 = 1 ÷ 1.73</Row></div>
			<HandNote x={720} y={900} at={factor} size={42} color={ORANGE}>smaller u<Sub>x</Sub> × longer T</HandNote>
			<CrossedChip x={96} y={866} at={saying} size={36}>equal range, so equal time</CrossedChip>
			{/* clock bars: time in the air, drawn empty, filling at one real-time rate on "Flight time" */}
			<div style={{position: 'absolute', left: 96, top: 718, ...DISPLAY(32, INK_SOFT, 700)}}>time in the air (for u = 15<MS />)</div>
			{[{deg: 30, y: 768, col: ORANGE_STROKE, lab: ORANGE}, {deg: 60, y: 816, col: BLUE_GREY, lab: BLUE_GREY}].map(b => {
				const T = flightT(U, b.deg);
				const tt = clockAt(f, flight, T);
				return (
					<React.Fragment key={b.deg}>
						<div style={{position: 'absolute', left: 96, top: b.y - 6, ...DISPLAY(34, b.lab, 800)}}>{b.deg}°</div>
						<div style={{position: 'absolute', left: 190, top: b.y, width: 620, height: 30, borderRadius: 15, background: '#ede4d3', border: '2px solid rgba(60,45,20,0.18)', boxSizing: 'border-box', overflow: 'hidden'}}>
							<div style={{width: `${(tt / 3) * 100}%`, height: '100%', background: b.col}} />
						</div>
						<div style={{position: 'absolute', left: 830, top: b.y - 8, ...DISPLAY(36, INK), fontVariantNumeric: 'tabular-nums'}}>{tt.toFixed(2)} s</div>
					</React.Fragment>
				);
			})}
			<HandTag x={960} y={826} text="× 1.73" at={long} size={46} color={BLUE} />
			<FrameSvg>
				<FlightLane mx={MX} gy={ga} ppm={PPM} u={U} deg={60} lw={LW} right={1830} style={STYLE_STEEP} launchAt={launch} ghost={0.3} shadow floorLeft={MX - 110} />
				<FlightLane mx={MX} gy={gb} ppm={PPM} u={U} deg={30} lw={LW} right={1830} style={STYLE_FLAT} launchAt={launch} ghost={0.3} shadow floorLeft={MX - 110} />
				<line x1={MX + range(U, 30) * PPM} x2={MX + range(U, 30) * PPM} y1={ga + 26} y2={gb - 26} stroke={INK} strokeWidth={3} strokeDasharray="10 9" opacity={prog(f, equal, 12)} />
				<g opacity={prog(f, high, 12)}>
					<line x1={pk} x2={pk} y1={ga} y2={ga - H60} stroke={BLUE} strokeWidth={3.5} />
					<line x1={pk} x2={pk} y1={gb} y2={gb - H30} stroke={BLUE} strokeWidth={3.5} />
				</g>
			</FrameSvg>
			<div style={{position: 'absolute', left: 1150, top: ga - 64, ...DISPLAY(38, BLUE_GREY, 800)}}>60°</div>
			<div style={{position: 'absolute', left: 1150, top: gb - 64, ...DISPLAY(38, ORANGE, 800)}}>30°</div>
			<HandTag x={pk + 16} y={ga - 36} text="× 3 higher" at={high + 6} size={42} color={BLUE} />
			<HandTag x={1630} y={300} text="× 1.73 longer" at={long + 6} size={42} color={BLUE} />
			<HandTag x={MX + range(U, 30) * PPM - 20} y={gb + 60} text="same landing" at={equal + 6} size={40} color={INK} anchor="middle" />
		</>
	);
};

// ---------- 14. handoff: onto a cliff ----------
export const S14: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const butAll = cue(id, 'But all'), cliff = cue(id, 'thirty metre cliff'), twenty = cue(id, 'twenty metres'), falls = cue(id, 'falls below'), doThirty = cue(id, 'Do thirty'), furthest = cue(id, 'furthest');
	const rise = prog(f, cliff, 50);
	const SEA = 860, MX = 380;
	const gy = SEA - 360 * rise; // 30 m at 12 px per metre once risen
	const ppm = 30 + (12 - 30) * rise;
	const level = rise < 0.02;
	return (
		<>
			<SceneHeading text="Why do complementary angles give the same range?" at={-40} size={52} />
			<FrameSvg>
				{level ? (
					<>
						<FlightLane mx={MX} gy={SEA} ppm={ppm} u={15} deg={45} lw={190} right={1240} style={STYLE_45} ghost={0} hideBall floorLeft={96} />
						<path d={levelPath(MX, SEA, ppm, 15, 30)} fill="none" stroke={ORANGE_STROKE} strokeWidth={7.5} strokeLinecap="round" />
						<path d={levelPath(MX, SEA, ppm, 15, 60)} fill="none" stroke={BLUE_GREY} strokeWidth={7.5} strokeDasharray="16 11" strokeLinecap="round" />
						{(() => {const g = launcherGeom(...pivotFor(MX, SEA, 190, 45), 190, 45); return <BallSvg cx={g.muzzle[0]} cy={g.muzzle[1]} d={g.ballD} />;})()}
					</>
				) : (
					<CliffStage mx={MX} gy={gy} seaY={SEA} leftX={96} rightX={1260} ppm={ppm} u={20} lw={190} barrel={45} qAt={doThirty}
						paths={[{deg: 30, style: STYLE_FLAT, at: falls}, {deg: 45, style: STYLE_45, at: falls + 12}, {deg: 60, style: STYLE_STEEP, at: falls + 24}]} />
				)}
			</FrameSvg>
			{level ? <div style={{position: 'absolute', left: MX + range(15, 30) * ppm - 120, top: SEA + 22, ...DISPLAY(36, INK, 700)}}>30° and 60° land together</div> : null}
			{!level ? <div style={{position: 'absolute', left: 100, top: (gy + SEA) / 2 - 24, opacity: rise, ...DISPLAY(40, INK, 800)}}>30 m</div> : null}
			<div style={{position: 'absolute', left: 120, top: level ? 700 : gy - 230, ...DISPLAY(36, ORANGE, 800)}}>u = {f >= twenty ? 20 : 15}<MS /></div>
			<RangeGraph x={96} y={150} w={620} h={400} u={15} yMax={25} small at={-30} out={cliff - 50} xLabel="θ (°)" yLabel="R (m)" pairs={[{a: 30, b: 60, at: -30, label: 'tie'}]} peakAt={-30} />
			<HandTag x={760} y={220} text="45° wins," at={cue(id, 'forty-five') + 4} out={cliff - 50} size={44} color={GREEN_GREY} />
			<HandTag x={760} y={272} text="complements tie" at={cue(id, 'complementary')} out={cliff - 50} size={44} color={INK} />
			<RBox x={1290} y={176} at={-30} size={56} />
			<Stamp x={1400} y={276} at={furthest - 10} text="level ground only?" size={36} />
			<Card x={1290} y={380} w={534} at={-30} pad="12px 24px">
				<CardTitle>On level ground</CardTitle>
				<div style={DISPLAY(40, INK, 700)}>R ∝ <Ux /> × <Uy /></div>
				<div style={{...DISPLAY(32, INK, 600), marginTop: 6}}>complements tie</div>
				<div style={{...DISPLAY(32, GREEN_GREY, 700)}}>45° wins</div>
			</Card>
			<HandTag x={1300} y={680} text="all from the level-ground T" at={butAll} size={42} role="a" />
			<Enter at={doThirty + 40} style={{position: 'absolute', left: 1290, top: 760}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(36, INK, 700), whiteSpace: 'normal', width: 500}}>Next: landing below the launch level</div>
			</Enter>
		</>
	);
};
const pivotFor = (mx: number, my: number, w: number, deg: number): [number, number] => {
	const g = launcherGeom(0, 0, w, deg);
	return [mx - g.muzzle[0], my - g.muzzle[1]];
};
const levelPath = (mx: number, gy: number, ppm: number, u: number, deg: number) => {
	const T = flightT(u, deg);
	let d = '';
	for (let i = 0; i <= 80; i++) {
		const t = (T * i) / 80;
		const r = (deg * Math.PI) / 180;
		const x = u * Math.cos(r) * t, y = u * Math.sin(r) * t - 4.9 * t * t;
		d += `${i ? 'L' : 'M'}${(mx + x * ppm).toFixed(1)},${(gy - y * ppm).toFixed(1)} `;
	}
	return d;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const pause = cue('key-notes', 'Pause');
	const items = [
		{content: <>Range = crossing speed × time aloft: <span style={{whiteSpace: 'nowrap'}}>R = <Ux /> T</span>, with <span style={{whiteSpace: 'nowrap'}}>T = 2u <span style={{color: BLUE}}>sin θ</span> ÷ g</span>.</>, at: 10},
		{content: <>Level ground only (no air resistance, uniform g): <span style={{color: ORANGE, fontWeight: 700, whiteSpace: 'nowrap'}}>R = u<Sup>2</Sup> sin 2θ ÷ g</span>.</>, at: 22},
		{content: <>Maximum range at 45° (<Ux /> = <Uy />): R<Sub>max</Sub> = u<Sup>2</Sup> ÷ g.</>, at: 34},
		{content: <>Complementary angles (θ and 90° − θ) swap <Ux /> and <Uy />, so equal ranges.</>, at: 46},
		{content: <>Equal ranges, unequal flights: the steeper launch flies longer and higher, with a smaller <Ux />.</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={pause} size={42} color={ORANGE} anchor="end" />
			<KeyNotesBullets x={110} y={196} w={1030} items={items} size={42} gap={42} bulletColor={ORANGE_STROKE} />
			<Enter at={70} style={{position: 'absolute', left: 1180, top: 200, width: 644}}>
				<div style={{background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px #fffdf8, inset 0 0 0 9.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '22px 34px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66, lineHeight: 1.05, marginTop: 6}}><span style={{color: TEAL}}>Complements swap</span> <span style={{color: BLUE}}>the components.</span></div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: ORANGE, marginTop: 8}}>(level ground only)</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '16px 0 8px'}} />
					<svg width={576} height={270} style={{display: 'block'}}>
						<LaunchTriangle x0={30} y0={196} k={7.4} u={25} deg={50} labelsAt={[-30, -30]} />
						<LaunchTriangle x0={320} y0={196} k={7.4} u={25} deg={40} labelsAt={[-30, -30]} />
					</svg>
					<div style={{...DISPLAY(34, INK, 700), marginTop: 10, opacity: prog(f, 90, 12)}}>50° and 40°: same <Ux /> × <Uy />, same R</div>
				</div>
			</Enter>
		</>
	);
};
