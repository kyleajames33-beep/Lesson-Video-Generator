import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Body, Card, CurveGraph, Cross, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GraphAxes, G, GreyTag, Hand, Heading, INK, INK_SOFT, Label, Overlay, PArt, PL, prog, RoundPlate, S, Say, StackedSupply,
	TEAL, TEAL_INK, TractPair, UterusOutline, tt, vis, WrongChip, YELLOW, ROSE, O2, Tick, TP, Stamp, Line, along, pathOf, Bracket, SPERM_BLUE, EGG_LINE, Egg, Sperm, TestStick,
} from './shared';
import {ExchangePanel} from './s4';

// ---------- 8. Attempt ----------
const CX = [96, 676, 1256];
const CWD = 568;
const FY = 244, FH = 735;
const TITLES = ['A clinic case', 'A stopped corpus luteum', 'A student\'s sentence'];
const Badge: React.FC<{n: number}> = ({n}) => (
	<div style={{width: 54, height: 54, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>{n}</div>
);
const Frame: React.FC<{i: number; at: number}> = ({i, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<div style={{position: 'absolute', left: CX[i], top: FY, width: CWD, height: FH, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '14px 22px 0'}}>
				<Badge n={i + 1} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1}}>{TITLES[i]}</div>
			</div>
		</div>
	);
};
const Col: React.FC<{i: number; y: number; children: React.ReactNode}> = ({i, y, children}) => (
	<div style={{position: 'absolute', left: CX[i] + 28, top: FY + y, width: CWD - 56, display: 'flex', flexDirection: 'column', gap: 10}}>{children}</div>
);
const Para: React.FC<{at: number; q?: boolean; children: React.ReactNode}> = ({at, q, children}) => (
	<Enter at={at}>
		<Body size={q ? 30 : 28} weight={q ? 800 : 600} color={q ? AMBER_INK : INK} style={{lineHeight: 1.2}}>{children}</Body>
	</Enter>
);

export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'One in a clinic', c1b: 'grows normally into a blastocyst', placed: 'It is placed', noprog: 'making no progesterone', q1: 'What do you predict',
		two: "Two a woman's", wk3: 'three weeks after', healthy: 'The embryo is healthy', nohorm: 'no hormones are given', q2: 'What do you expect', then: 'Then what if', mo5: 'five months after',
		three: 'Three a student', quote: 'In the placenta', q3: 'What is wrong with this', pause: 'Pause the video',
	});
	const hold = scene.responseHold!;
	// column 1: dish, arrow, neutral uterus outline
	const U: TP = {x: CX[0] + 150, y: FY + 62, w: 430};
	const um = tt(U);
	const dish = {x: CX[0] + 100, y: FY + 180};
	const travel = prog(f, c.placed, 50);
	const route: [number, number][] = [[dish.x + 40, dish.y], [dish.x + 90, dish.y + 40], [um(500, 440)[0], um(500, 440)[1]], [um(500, 330)[0], um(500, 330)[1]]];
	const [bx, by] = along(route, travel);
	// column 2: timeline
	const TLY = FY + 252;
	const t1 = CX[1] + 125, t2 = CX[1] + 440;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: three situations" at={c.turn} size={76} cps={30} /></div>
			<Frame i={0} at={c.one} /><Frame i={1} at={c.two} /><Frame i={2} at={c.three} />
			{/* 1: dish and a neutral uterus outline */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.one + 10, 16)}}>
				<UterusOutline p={U} />
				<Overlay>
					<ellipse cx={dish.x} cy={dish.y + 14} rx={64} ry={26} fill="#e6f1f7" stroke={INK_SOFT} strokeWidth={5} />
					<circle cx={dish.x} cy={dish.y} r={0} />
				</Overlay>
				<RoundPlate a={PL.cl5} x={dish.x - 36} y={dish.y - 44} d={72} ring={INK_SOFT} />
				<Overlay>
					<g opacity={prog(f, c.placed, 10)}>
						<circle cx={bx} cy={by} r={14} fill="#eef2f8" stroke="#6f7fa8" strokeWidth={5} />
					</g>
				</Overlay>
			</div>
			{/* 2: two markers on a timeline, a corpus luteum and an embryo */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.two + 10, 16)}}>
				<Overlay>
					<circle cx={CX[1] + 62} cy={FY + 124} r={34} fill="#f2c81f" opacity={0.75} stroke={YELLOW} strokeWidth={6} />
					<circle cx={CX[1] + 300} cy={FY + 124} r={34} fill="#fffdf8" stroke={TEAL} strokeWidth={8} />
					<circle cx={CX[1] + 290} cy={FY + 118} r={8} fill="#f3dcc2" /><circle cx={CX[1] + 306} cy={FY + 130} r={8} fill="#f3dcc2" /><circle cx={CX[1] + 312} cy={FY + 112} r={8} fill="#f3dcc2" />
					<DrawPath d={`M${CX[1] + 40},${TLY} L${CX[1] + 530},${TLY}`} at={c.wk3 - 10} dur={24} color={INK_SOFT} width={6} />
					<g opacity={prog(f, c.wk3, 12)}><circle cx={t1} cy={TLY} r={14} fill={AMBER} /></g>
					<g opacity={prog(f, c.mo5, 12)}><circle cx={t2} cy={TLY} r={14} fill={AMBER} /></g>
					<text x={t1} y={TLY + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}} fill={INK} opacity={prog(f, c.wk3, 12)}>3 weeks</text>
					
					<text x={t2} y={TLY + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}} fill={INK} opacity={prog(f, c.mo5, 12)}>5 months</text>
					<text x={CX[1] + 284} y={TLY + 78} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}} fill={INK_SOFT} opacity={prog(f, c.wk3, 12)}>after fertilisation</text>
				</Overlay>
				<GreyTag at={c.wk3 + 10} x={CX[1] + 104} y={FY + 108} text="stopped" size={28} />
				<Enter at={c.healthy + 24} style={{position: 'absolute', left: CX[1] + 346, top: FY + 82}}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: TEAL_INK, background: '#f0faf8', border: `3px solid ${TEAL}`, borderRadius: 14, padding: '2px 14px'}}>making hCG</div></Enter>
				<GreyTag at={c.nohorm} x={CX[1] + 290} y={FY + 172} text="no hormones given" size={26} />
			</div>
			{/* 3: the student's sentence beside the fetus and placenta plate */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.three + 10, 16)}}>
				<PArt a={PL.fetus} x={CX[2] + 28} y={FY + 76} w={150} />
			</div>
			<Enter at={c.quote} style={{position: 'absolute', left: CX[2] + 196, top: FY + 90, width: 346}}>
				<div style={{background: '#f7f1e3', border: `3px solid ${INK_SOFT}`, borderRadius: 18, padding: '10px 16px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, lineHeight: 1.2, color: INK}}>"In the placenta, the mother's blood flows into the fetus's blood, delivering oxygen."</div>
			</Enter>
			<Col i={0} y={320}>
				<Para at={c.one}>In a clinic, an egg is fertilised in a dish and grows normally into a blastocyst.</Para>
				<Para at={c.placed}>It is placed in a woman's uterus, but her body is making no progesterone, and none is given.</Para>
				<Para at={c.q1} q>What do you predict will happen, and why?</Para>
			</Col>
			<Col i={1} y={350}>
				<Para at={c.two}>A woman's corpus luteum stops working three weeks after fertilisation.</Para>
				<Para at={c.healthy}>The embryo is healthy and is making hCG, and no hormones are given.</Para>
				<Para at={c.q2} q>What do you expect to happen, and why?</Para>
				<Para at={c.then} q>Then, what if the corpus luteum stopped working five months after fertilisation?</Para>
			</Col>
			<Col i={2} y={340}>
				<Para at={c.three}>A student writes this about the placenta.</Para>
				<Para at={c.q3} q>What is wrong with this, and how does oxygen really get to the fetus?</Para>
			</Col>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1500} y={130} r={44} /></Overlay>
		</>
	);
};

// ---------- 9a. Feedback, item one ----------
const FU: TP = {x: 300, y: 270, w: 860};
const Dish: React.FC<{x: number; y: number}> = ({x, y}) => (
	<>
		<Overlay><ellipse cx={x} cy={y + 24} rx={96} ry={36} fill="#e6f1f7" stroke={INK_SOFT} strokeWidth={5} /></Overlay>
		<RoundPlate a={PL.cl5} x={x - 52} y={y - 66} d={104} ring={INK_SOFT} />
	</>
);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		cant: "the blastocyst can't implant", nopreg: 'no pregnancy begins', fine: 'The embryo is fine', prog: 'progesterone is what keeps', notready: "the lining isn't ready", ifhcg: 'If you said hCG', makes: 'the embryo makes hCG', none: 'no hCG to rescue',
	});
	const m = tt(FU);
	const thin = prog(f, c.notready, 30);
	const outline = 1 - prog(f, c.notready, 24);
	const route: [number, number][] = [[250, 500], [330, 690], m(500, 470), m(500, 330), m(470, 250)];
	const travel = prog(f, 20, 70);
	const hit = m(452, 190);
	const [px, py] = along(route, travel);
	const bt = prog(f, c.notready + 10, 24);
	const bounce = prog(f, c.notready + 40, 22);
	const bx = px + (hit[0] - px) * bt + 0 * bounce, by = py + (hit[1] - py) * bt;
	const away = m(520, 110);
	const fx = bounce > 0 ? hit[0] + (away[0] - hit[0]) * bounce : bx;
	const fy = bounce > 0 ? hit[1] + (away[1] - hit[1]) * bounce - Math.sin(Math.PI * bounce) * 36 : by;
	return (
		<>
			<Heading items={[[0, 'One: the blastocyst cannot implant']]} size={72} />
			<Dish x={170} y={520} />
			<UterusOutline p={FU} o={outline} />
			<TractPair p={FU} thin={thin} o={prog(f, c.notready - 4, 24)} />
			<Overlay>
				
				<g opacity={prog(f, 16, 8)}>
					<circle cx={fx} cy={fy} r={16} fill="#eef2f8" stroke="#6f7fa8" strokeWidth={5} />
					<circle cx={fx + 5} cy={fy + 6} r={5} fill="#f3dcc2" />
				</g>
				<Cross x={hit[0]} y={hit[1] + 6} s={1.1} at={c.notready + 56} />
			</Overlay>
			<GreyTag at={c.nopreg} x={420} y={790} text="no pregnancy begins" size={40} />
			<Enter at={c.prog} style={{position: 'absolute', left: 1180, top: 250, width: 640}}>
				<div style={{background: '#fff8ea', border: `4px solid ${AMBER}`, borderRadius: 22, padding: '12px 26px 16px', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: AMBER_INK, lineHeight: 1.08}}>no progesterone,<br />lining not ready,<br />no attachment</div>
			</Enter>
			<WrongChip at={c.ifhcg} x={1180} y={650} text="hCG would fix it" size={40} />
			<GreyTag at={c.ifhcg + 24} x={1180} y={716} text="no progesterone, so the lining is not kept ready" size={28} />
			<Say at={c.makes} x={1180} y={790} w={640} size={32} weight={600}>hCG is made once the embryo is implanting. This blastocyst cannot implant, so there is no hCG yet.</Say>
			<div style={{display: 'none'}}>{[c.none, Arrow, Card, Hand, Label, Line, Stamp, TEAL, YELLOW, ROSE, O2, Tick, vis, pathOf, Bracket, SPERM_BLUE, EGG_LINE, Egg, Sperm, TestStick, GraphAxes, G, StackedSupply, PArt, DrawPath].length}</div>
		</>
	);
};

// ---------- 9b. Feedback, item two ----------
const Pn: React.FC<{at: number; x: number; y: number; w: number; text: string; color: string; grey?: number}> = ({at, x, y, w, text, color, grey = 0}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{height: 56, borderRadius: 999, background: '#fffdf8', border: `4px solid ${grey > 0.5 ? '#b9b3a8' : color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: grey > 0.5 ? '#9a948a' : INK, whiteSpace: 'nowrap'}}>{text}</div>
	</Enter>
);
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		wk3: 'at three weeks', likely: 'likely to end', main: 'was the main source', falls: 'progesterone falls', shed: 'the lining is shed', cant: "hCG can't help", stopped: 'has stopped working',
		mo5: 'At five months', carries: 'carries on', plac: 'the placenta now makes', ifsaid: 'If you said hCG keeps the lining', sep: 'separate the two jobs', hjob: 'hCG keeps the corpus luteum', pjob: 'progesterone keeps the lining',
	});
	const p1 = vis(f, 0, c.mo5 - 12);
	const p2 = vis(f, c.mo5 - 8, c.ifsaid - 12);
	const p3 = vis(f, c.ifsaid - 8);
	const thin = prog(f, c.shed, 30) * (1 - prog(f, c.mo5, 24));
	const IT: TP = {x: 1150, y: 250, w: 640};
	const full = prog(f, c.plac - 40, 60);
	return (
		<>
			<Heading items={[[0, 'Two: at three weeks'], [c.mo5, 'Two: at five months'], [c.ifsaid, 'Two jobs: do not mix them up']]} size={72} />
			{/* three weeks and five months share the graph and the uterus inset */}
			<div style={{position: 'absolute', inset: 0, opacity: p1}}>
				<Overlay>
					<CurveGraph x={96} y={250} s={1} labels axesAt={2} riseAt={6} riseDur={40} markAt={c.wk3 + 10} markText="3 weeks after fertilisation" fallAt={c.falls} fallColor={AMBER} fallDash="0" fallText="corpus luteum lost" xlabel="time after fertilisation" />
				</Overlay>
				<TractPair p={IT} thin={thin} />
				<GreyTag at={c.likely} x={1150} y={600} text="likely to end" size={34} />
				<GreyTag at={c.shed + 10} x={1440} y={600} text="lining shed" size={34} />
				<Pn at={c.cant - 10} x={1150} y={690} w={150} text="embryo" color={TEAL} />
				<Pn at={c.cant - 10} x={1470} y={690} w={330} text="corpus luteum" color={YELLOW} grey={prog(f, c.stopped, 14)} />
				<Overlay>
					<Arrow x1={1306} y1={718} x2={1460} y2={718} at={c.cant - 6} color={TEAL} width={8} dur={16} head={18} />
					<Label x={1383} y={700} at={c.cant} text="hCG" size={38} color={TEAL_INK} />
					<Cross x={1383} y={722} s={1.4} at={c.stopped - 10} />
				</Overlay>
				<GreyTag at={c.stopped} x={1470} y={760} text="stopped" size={30} />
				<Say at={c.cant + 20} x={1150} y={820} w={640} size={32} weight={600}>nothing for hCG to act on</Say>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: p2}}>
				<Overlay>
					<g transform="translate(96,250)">
						<GraphAxes at={c.mo5} xlabel="time after fertilisation (not to scale)" labels />
						<StackedSupply p={1} />
						<line x1={730} x2={730} y1={72} y2={G.y0} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" />
						<text x={770} y={54} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>5 months: much later</text>
						<g transform="translate(110,70)"><rect width={34} height={22} rx={4} fill="#f0a830" stroke={TEAL} strokeWidth={5} /><text x={46} y={20} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>from the placenta</text></g>
					</g>
				</Overlay>
				<div style={{position: 'absolute', inset: 0, opacity: full}}><TractPair p={IT} /></div>
				<Hand at={c.carries} x={1150} y={620} w={640} size={60}>the pregnancy carries on</Hand>
				<Say at={c.plac} x={1150} y={720} w={640} size={34} weight={600}>The placenta now makes the progesterone, so the lining stays thick.</Say>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: p3}}>
				<WrongChip at={c.ifsaid} x={96} y={250} text="hCG keeps the lining" size={46} />
				<Pn at={c.sep} x={96} y={470} w={220} text="embryo" color={TEAL} />
				<Pn at={c.sep} x={600} y={470} w={380} text="corpus luteum" color={YELLOW} />
				<Pn at={c.sep} x={1260} y={470} w={220} text="lining" color={AMBER} />
				<Overlay>
					<Arrow x1={330} y1={498} x2={590} y2={498} at={c.hjob} color={TEAL} width={10} dur={22} head={24} />
					<Arrow x1={990} y1={498} x2={1250} y2={498} at={c.pjob} color={AMBER} width={10} dur={22} head={24} />
					<Label x={460} y={456} at={c.hjob + 10} text="hCG" size={64} color={TEAL_INK} />
					<Label x={1120} y={456} at={c.pjob + 10} text="progesterone" size={56} color={AMBER_INK} />
				</Overlay>
				<Say at={c.hjob + 20} x={96} y={570} w={800} size={38} weight={700}>hCG keeps the corpus luteum going.</Say>
				<Say at={c.pjob + 20} x={1000} y={570} w={800} size={38} weight={700}>Progesterone keeps the lining thick.</Say>
				<Hand at={c.pjob + 60} x={96} y={730} size={72}>hCG: corpus luteum. progesterone: lining.</Hand>
			</div>
		</>
	);
};

// ---------- 9c. Feedback, item three ----------
export const SceneFeedbackThree: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-three'), {
		mix: "don't mix", flow: 'flow side by side', thin: 'thin membranes', oxy: 'oxygen moves', cross: 'across into',
	});
	const strike = prog(f, c.mix + 6, 20);
	return (
		<>
			<Heading items={[[0, 'Three: the bloods do not mix']]} size={72} />
			<Overlay>
				<ExchangePanel c={{flow: c.flow, mix: c.mix, more: c.oxy, cross: c.cross, nutr: 99999, waste: 99999}} ox={96} oy={230} title="the placenta close-up" />
			</Overlay>
			<Enter at={6} style={{position: 'absolute', left: 900, top: 250, width: 920}}>
				<div style={{background: '#f7f1e3', border: `3px solid ${INK_SOFT}`, borderRadius: 20, padding: '16px 26px', position: 'relative'}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>the student wrote</div>
					<div style={{position: 'relative', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 36, color: INK, lineHeight: 1.25, marginTop: 4}}>"In the placenta, the mother's blood flows into the fetus's blood, delivering oxygen."
						<div style={{position: 'absolute', left: 0, top: '30%', height: 6, width: `${strike * 100}%`, background: '#c4432f', borderRadius: 3}} />
						<div style={{position: 'absolute', left: 0, top: '70%', height: 6, width: `${Math.max(0, strike * 2 - 1) * 70}%`, background: '#c4432f', borderRadius: 3}} />
					</div>
				</div>
			</Enter>
			<Enter at={c.oxy} style={{position: 'absolute', left: 900, top: 520, width: 920}}>
				<div style={{background: '#f0faf3', border: '4px solid #2f8a5b', borderRadius: 20, padding: '16px 26px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK, lineHeight: 1.25}}>
					Oxygen crosses the thin barrier from the mother's blood to the fetus's blood. Wastes such as carbon dioxide cross back.
				</div>
			</Enter>
			<Overlay><Tick x={870} y={600} at={c.oxy + 30} s={1.6} /></Overlay>
		</>
	);
};

// ---------- 10. Memory and handoff ----------
const RailIcon: React.FC<{k: number}> = ({k}) => (
	<svg width={150} height={110} viewBox="-75 -55 150 110">
		{k === 0 ? <><circle cx={-12} cy={0} r={34} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={5} /><circle cx={-12} cy={0} r={11} fill="#b48ad2" /><ellipse cx={44} cy={-10} rx={14} ry={9} fill={SPERM_BLUE} /><path d="M30,-6 C14,4 24,18 12,20" fill="none" stroke={SPERM_BLUE} strokeWidth={4} /></> : null}
		{k === 1 ? <><circle cx={0} cy={0} r={40} fill="#f6d9c8" stroke="#d9a08a" strokeWidth={5} /><path d="M0,-40 L0,40" stroke="#c4432f" strokeWidth={5} /><circle cx={-18} cy={0} r={8} fill="#8fa3c8" /><circle cx={18} cy={0} r={8} fill="#8fa3c8" /></> : null}
		{k === 2 ? <><rect x={-60} y={10} width={120} height={36} rx={10} fill="#f6c9b0" stroke="#d98f78" strokeWidth={4} /><circle cx={0} cy={4} r={26} fill="#eef2f8" stroke="#6f7fa8" strokeWidth={5} /></> : null}
		{k === 3 ? <>{[[-40, -20], [-10, 10], [24, -24], [40, 14], [0, -38]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={11} fill={TEAL} stroke="#fff" strokeWidth={2} />)}</> : null}
		{k === 4 ? <><ellipse cx={0} cy={0} rx={44} ry={36} fill="#b66a86" stroke="#7f3f58" strokeWidth={5} /><path d="M-30,-6 C-6,10 6,-14 30,4" fill="none" stroke="#e7b9c9" strokeWidth={4} /></> : null}
	</svg>
);
const BigChip: React.FC<{i: number; at: number; text: string}> = ({i, at, text}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	const pop = 1 + 0.08 * Math.sin(Math.PI * prog(f, at, 14));
	return (
		<div style={{position: 'absolute', left: 96 + i * 340, top: 215, width: 320, height: 230, borderRadius: 30, background: '#fffdf8', border: `6px solid ${p > 0.2 ? '#1f6fb2' : '#cfc6b4'}`, boxShadow: '0 18px 40px rgba(60,45,20,0.10)', opacity: 0.3 + 0.7 * p, transform: `scale(${pop})`, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 14}}>
			<RailIcon k={i} />
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: p > 0.2 ? '#1f6fb2' : INK_SOFT, lineHeight: 1, marginTop: 6}}>{text}</div>
		</div>
	);
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		egg: 'The egg is released', ready: 'lining ready', impl: 'The blastocyst implants', hcg: 'The embryo makes hCG', placenta: 'Then the placenta takes', pg: 'progesterone is pro-gestation', holds: 'holds the lining', msg: "hCG is the embryo's message", next: 'Next time', birth: 'how birth starts',
	});
	return (
		<>
			<Heading items={[[0, 'The whole story in five words']]} size={72} />
			<BigChip i={0} at={c.egg} text="1 meet" /><BigChip i={1} at={c.ready} text="2 divide" /><BigChip i={2} at={c.impl} text="3 attach" /><BigChip i={3} at={c.hcg} text="4 signal" /><BigChip i={4} at={c.placenta} text="5 hand over" />
			<Hand at={c.pg} x={96} y={500} size={58}>pro-gest-erone = pro-gestation: it holds the lining</Hand>
			<Hand at={c.msg} x={96} y={590} size={58} color={TEAL_INK}>hCG = the embryo's message to the corpus luteum</Hand>
			<Pn at={c.msg + 30} x={96} y={706} w={170} text="embryo" color={TEAL} />
			<Pn at={c.msg + 30} x={420} y={706} w={290} text="corpus luteum" color={YELLOW} />
			<Pn at={c.msg + 30} x={880} y={706} w={170} text="lining" color={AMBER} />
			<Overlay>
				<Arrow x1={272} y1={734} x2={412} y2={734} at={c.msg + 30} color={TEAL} width={7} dur={14} head={16} />
				<Label x={342} y={720} at={c.msg + 34} text="hCG" size={36} color={TEAL_INK} />
				<Arrow x1={716} y1={734} x2={872} y2={734} at={c.msg + 36} color={AMBER} width={7} dur={14} head={16} />
				<Label x={794} y={720} at={c.msg + 40} text="progesterone" size={30} color={AMBER_INK} />
			</Overlay>
			<Enter at={c.next} style={{position: 'absolute', left: 1130, top: 770}}>
				<div style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: '#2a5f8f', background: '#fffdf8', border: '3px solid #2a5f8f', borderRadius: 18, padding: '2px 24px 8px', whiteSpace: 'nowrap'}}>Next: how birth starts</div>
			</Enter>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.next + 14, 14)}}>
				<UterusOutline p={{x: 1720, y: 750, w: 160}} />
				<Overlay>
					<g transform="translate(1660,850)">
						<circle r={34} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={5} />
						<line x1={0} y1={0} x2={0} y2={-22} stroke="#c4432f" strokeWidth={5} strokeLinecap="round" transform={`rotate(${f * 4})`} />
						<circle r={4} fill={INK} />
					</g>
				</Overlay>
			</div>
		</>
	);
};

// ---------- 11. Key notes ----------
const NOTES = [
	'A sperm has a tail to swim, mitochondria for energy and an acrosome with enzymes to get into the egg.',
	'The egg is large because it carries a food store for the early embryo.',
	'Fertilisation (a sperm joins an egg to make a zygote) usually happens in the oviduct.',
	'The zygote divides by cleavage as it moves toward the uterus and becomes a blastocyst. The blastocyst implants in the uterine lining about a week after fertilisation.',
	'Fertilisation and implantation are different events. A pregnancy begins at implantation.',
	'After the egg is released, the corpus luteum makes progesterone, which keeps the uterine lining thick and ready. With no pregnancy the corpus luteum breaks down about two weeks after ovulation and the lining is shed.',
	'Once the embryo is implanting, its outer cells make hCG. hCG acts on the corpus luteum, so it keeps making progesterone. Progesterone acts on the lining.',
	'Over the first two to three months after fertilisation, the placenta takes over making progesterone.',
	"Later in pregnancy, the placenta passes oxygen and nutrients from the mother's blood to the baby and carbon dioxide and wastes back, without the bloods mixing.",
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 200, width: 1680}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 12}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 12, borderRadius: 999, background: AMBER}} />
					<Body size={30}>{n}</Body>
				</Enter>
			))}
			<Enter at={110} style={{marginTop: 14, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '10px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK, lineHeight: 1.1}}>Progesterone is pro-gestation. hCG is the embryo's message to the corpus luteum.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: '#1f6fb2', lineHeight: 1.1, marginTop: 4}}>meet, divide, attach, signal, hand over</div>
			</Enter>
		</div>
	</>
);
