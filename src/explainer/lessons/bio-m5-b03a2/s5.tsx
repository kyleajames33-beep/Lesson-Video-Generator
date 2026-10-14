import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, HandText} from '../../kit';
import {cues, speechEnd} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, BarHead, Body, Brain, ChainIcon, CHAIN, Cross, DrawPath, Dots, EggDot, EggMark, OvaryRound, OVARY_PAINTED, ovFol, Enter, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, Label, LoopIcon, MAGENTA, MAGENTA_INK, MilkGland, NIPPLE, Overlay, PArt, PL, Pill, PIT,
	prog, PROLACTIN, S, Say, SLATE, SLATE_INK, Strike, Tablet, Tick, Vein, VIOLET, VIOLET_INK, WrongChip, pathOf, TEAL, YELLOW,
} from './shared';

// ---------- 7. Attempt ----------
const CX = [96, 676, 1256];
const CWD = 568;
const FY = 244, FH = 735;
const TITLES = ['A daily tablet', 'A breastfeeding mother', "A student's sentence"];
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
const Chip2: React.FC<{x: number; y: number; at: number; text: string}> = ({x, y, at, text}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<span style={{display: 'inline-block', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK, background: '#f1eadb', border: `3px solid ${INK_SOFT}`, borderRadius: 999, padding: '2px 22px'}}>{text}</span>
	</Enter>
);
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('attempt');
	const c = cues(scene, {
		turn: 'Your turn', one: 'One a woman who', notpreg: 'not pregnant', tablet: 'daily tablet', copies: "copies progesterone's action", high: 'as high as in late pregnancy', q1: 'What do you predict', rel: 'the release of an egg',
		two: 'Two a woman is', bf: 'breastfeeding', suck: 'baby suckles well', plenty: 'plenty of milk', little: 'very little milk', q2: "Which hormone's release",
		three: 'Three a student writes', quote: 'Labour is negative feedback', q3: 'What is wrong with this', pause: 'Pause the video',
	});
	const hold = scene.responseHold!;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Your turn: three situations" at={c.turn} size={76} cps={30} /></div>
			<Frame i={0} at={c.one} /><Frame i={1} at={c.two} /><Frame i={2} at={c.three} />
			{/* 1: tablet, pituitary, ovary (no hormone dots, no follicle detail) */}
			<Overlay>
				<g opacity={prog(f, c.tablet, 16)}>
					<Tablet x={CX[0] + 100} y={FY + 150} s={0.8} />
					<ellipse cx={CX[0] + 300} cy={FY + 150} rx={52} ry={36} fill="#fffdf8" stroke={SLATE_INK} strokeWidth={5} />
					<text x={CX[0] + 300} y={FY + 214} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}} fill={INK_SOFT}>pituitary</text>
					<circle cx={CX[0] + 480} cy={FY + 150} r={40} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={5} />
					<text x={CX[0] + 480} y={FY + 214} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}} fill={INK_SOFT}>ovary</text>
				</g>
			</Overlay>
			<Hand at={c.notpreg} x={CX[0] + 28} y={FY + 236} size={40} color={AMBER_INK}>not pregnant</Hand>
			<Hand at={c.copies} x={CX[0] + 28} y={FY + 276} w={500} size={34} color={AMBER_INK}>hormone copies progesterone's action on the pituitary</Hand>
			<Col i={0} y={360}>
				<Para at={c.one}>A woman who is not pregnant takes a daily tablet with a hormone that copies progesterone's action on the pituitary. It keeps the level in her blood as high as in late pregnancy.</Para>
				<Para at={c.q1} q>What do you predict happens to her FSH and LH, and to ovulation (the release of an egg), and why?</Para>
			</Col>
			{/* 2: the milk gland with full sacs, a baby at the duct end */}
			<Overlay>
				<g opacity={prog(f, c.plenty, 16)}><MilkGland x={CX[1] + 30} y={FY + 80} s={0.34} fill={0.95} draw={1} idp="at" /></g>
				<g opacity={prog(f, c.suck, 14)}>
					<circle cx={CX[1] + 330} cy={FY + 168} r={34} fill="#f3d9b8" stroke="#b5845a" strokeWidth={5} />
					<circle cx={CX[1] + 318} cy={FY + 162} r={4} fill={INK} /><circle cx={CX[1] + 342} cy={FY + 162} r={4} fill={INK} />
					<path d="M318,0 q12,10 24,0" transform={`translate(${CX[1]},${FY + 178})`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
				</g>
			</Overlay>
			<Hand at={c.suck} x={CX[1] + 28} y={FY + 264} size={36} color={AMBER_INK}>baby suckles well</Hand>
			<Hand at={c.little} x={CX[1] + 28} y={FY + 302} size={36} color={AMBER_INK}>very little milk comes out</Hand>
			<Chip2 x={CX[1] + 28} y={FY + 350} at={c.q2} text="prolactin" />
			<Chip2 x={CX[1] + 220} y={FY + 350} at={c.q2 + 8} text="oxytocin" />
			<Col i={1} y={410}>
				<Para at={c.two}>A woman is breastfeeding. Her baby suckles well and her breasts are making plenty of milk, but very little milk comes out.</Para>
				<Para at={c.q2} q>Which hormone's release is more likely to be the problem, prolactin or oxytocin, and why?</Para>
			</Col>
			{/* 3: the student's quote */}
			<Enter at={c.quote} style={{position: 'absolute', left: CX[2] + 28, top: FY + 90, width: CWD - 56}}>
				<div style={{background: '#f7f1e3', border: `3px solid ${INK_SOFT}`, borderRadius: 18, padding: '12px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, lineHeight: 1.22, color: INK}}>"Labour is negative feedback because it is painful, and the progesterone brake in pregnancy is positive feedback because it protects the pregnancy."</div>
			</Enter>
			<Col i={2} y={420}>
				<Para at={c.three}>A student writes this.</Para>
				<Para at={c.q3} q>What is wrong with this, and which kind of feedback is each, and why?</Para>
			</Col>
			<Enter at={c.pause} style={{position: 'absolute', left: 96, top: 176}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: AMBER_INK, lineHeight: 1}}>Pause here to answer.</span></Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1500} y={130} r={44} /></Overlay>
			<div style={{display: 'none'}}>{[c.high, c.rel, c.bf, NIPPLE, PROLACTIN, VIOLET].length}</div>
		</>
	);
};

// ---------- shared loop pieces for feedback one ----------
const OV1 = {x: 130, y: 520, w: 220};
const FOL1 = ovFol(OV1.x, OV1.y, OV1.w);
const Q2: [number, number][] = [[310, 322], [700, 262], [1200, 232], [1560, 292], [1668, 346]];
const Q1: [number, number][] = [[PIT[0] - 28, PIT[1] + 28], [1540, 480], [1200, 560], [850, 620], [560, 680], [FOL1[0] + 50, FOL1[1] + 20]];

// ---------- 8a. Feedback, item one ----------
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-one'), {
		low: 'LH stays low', noegg: 'no egg is released', fsh: 'FSH is turned down', senses: 'The pituitary senses', whatever: 'whatever its source', same: 'same brake as in pregnancy', neg: 'negative feedback acting',
		if1: 'If you said she would', rem: 'remember that the pituitary', if2: 'If you said FSH', check: 'check which way',
	});
	return (
		<>
			<Heading items={[[0, 'One: the same brake, a different source']]} size={70} />
			<Overlay>
				<Brain at={0} />
				<Tablet x={220} y={330} s={1.1} />
				<text x={220} y={406} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={INK}>daily tablet</text>
				<DrawPath d={pathOf(Q2)} at={4} dur={50} color={AMBER} width={9} />
				<Dots pts={Q2} at={30} n={6} period={80} color={AMBER} r={10} />
				<BarHead x={Q2[4][0] + 6} y={Q2[4][1] + 2} ang={Math.atan2(Q2[4][1] - Q2[3][1], Q2[4][0] - Q2[3][0])} at={c.low - 10} color={AMBER} />
				<LoopIcon k="neg" cx={1490} cy={396} r={30} o={prog(f, c.neg, 12)} />
				<Label x={800} y={236} at={8} text="copies progesterone's action" size={42} color={AMBER_INK} />
				<Vein d={pathOf(Q1)} at={4} dur={36} o={0.7} />
				<Dots pts={Q1} at={14} n={7} period={70} color={SLATE} r={11} end={c.low} />
				<Dots pts={Q1} at={c.low + 40} n={2} period={110} color={SLATE} r={11} />
				<Label x={1100} y={650} at={c.fsh} text="less FSH and LH" size={44} color={SLATE_INK} />
				<g opacity={OVARY_PAINTED ? 0 : prog(f, c.low, 14)}><EggMark x={FOL1[0]} y={FOL1[1]} r={13} /></g>
			</Overlay>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 20)}}><OvaryRound x={OV1.x} y={OV1.y} d={OV1.w} mix={1} /></div>
			<GreyTag at={c.noegg} x={OV1.x - 10} y={760} text="egg stays in the ovary" size={34} />
			<Hand at={c.whatever} x={640} y={880} w={1200} size={52} color={AMBER_INK}>the pituitary senses progesterone, whatever its source</Hand>
			<WrongChip at={c.if1} x={640} y={735} text="she isn't pregnant, so she ovulates" size={40} />
			<WrongChip at={c.if2} x={640} y={805} text="FSH and LH rise" size={40} />
			<div style={{display: 'none'}}>{[c.same, c.senses, c.check, Arrow, TEAL, YELLOW, Tick, Cross].length}</div>
		</>
	);
};

// ---------- 8b. Feedback, item two ----------
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('feedback-two'), {
		plenty: 'making plenty of milk', prolW: 'so prolactin is working', notsq: 'is not being squeezed out', oxyp: 'oxytocin is the more likely', ifsaid: 'If you said prolactin', sep: 'separate making milk', os: 'oxytocin squeezes it out',
	});
	const GXX = 140, GYY = 250;
	const nip: [number, number] = [GXX + 662, GYY + 260];
	const sqz = f > c.os ? 0.5 + 0.5 * Math.sin((f - c.os) / 3.5) : 0;
	const duct: [number, number][] = [[GXX + 330, GYY + 260], nip];
	return (
		<>
			<Heading items={[[0, 'Two: make it, then move it']]} size={72} />
			<Overlay>
				<MilkGland x={GXX} y={GYY} s={1} fill={0.95} crescent={prog(f, c.oxyp, 14)} squeeze={sqz} draw={1} idp="f2" />
				<g opacity={prog(f, c.plenty, 14)}>
					<circle cx={nip[0] + 90} cy={nip[1]} r={36} fill="#f3d9b8" stroke="#b5845a" strokeWidth={5} />
					<circle cx={nip[0] + 78} cy={nip[1] - 6} r={4} fill={INK} /><circle cx={nip[0] + 102} cy={nip[1] - 6} r={4} fill={INK} />
				</g>
				<Cross x={GXX + 470} y={GYY + 260} s={1.6} at={c.notsq} />
				<Dots pts={duct} at={c.os + 6} n={6} period={50} color="#e8c66a" r={8} end={c.os + 80} />
			</Overlay>
			<Enter at={c.prolW} style={{position: 'absolute', left: 1050, top: 300}}>
				<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: PROLACTIN, background: '#fffdf8', border: `4px solid ${PROLACTIN}`, borderRadius: 999, padding: '2px 28px 8px'}}>prolactin: makes milk</span>
			</Enter>
			<Overlay><Tick x={1560} y={336} at={c.prolW + 14} s={1.2} /></Overlay>
			<Enter at={c.oxyp} style={{position: 'absolute', left: 1050, top: 410}}>
				<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: VIOLET_INK, background: '#fffdf8', border: `4px solid ${VIOLET}`, borderRadius: 999, padding: '2px 28px 8px'}}>oxytocin: squeezes milk out</span>
			</Enter>
			<WrongChip at={c.ifsaid} x={1050} y={560} text="prolactin, because it is the milk hormone" size={38} />
			<Hand at={c.sep} x={1050} y={700} size={72} color={AMBER_INK}>make it, then move it</Hand>
			<div style={{display: 'none'}}>{[NIPPLE, AMBER, SLATE, MAGENTA, FONT_HAND, EggDot].length}</div>
		</>
	);
};

// ---------- 8c. Feedback, item three ----------
export const SceneFeedbackThree: React.FC = () => {
	const c = cues(S('feedback-three'), {
		ft: 'the type of feedback', opp: 'opposes the process', notfeel: 'not on how it feels', preg: 'In pregnancy', neg: 'so it is negative', lab: 'In labour', pos: 'so it is positive',
	});
	const col = (x: number, at: number, k: 'neg' | 'pos', title: string, sub: string, tickAt: number, tint: string) => (
		<Enter at={at} style={{position: 'absolute', left: x, top: 520, width: 830}}>
			<div style={{height: 400, borderRadius: 26, background: '#fffdf8', border: `4px solid ${tint}`, boxSizing: 'border-box', padding: '22px 30px', boxShadow: '0 18px 40px rgba(60,45,20,0.10)'}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
					<svg width={84} height={84} viewBox="0 0 84 84"><LoopIcon k={k} cx={42} cy={42} r={36} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK, lineHeight: 1}}>{title}</span>
				</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: INK, lineHeight: 1.25, marginTop: 20}}>{sub}</div>
			</div>
		</Enter>
	);
	return (
		<>
			<Heading items={[[0, 'Three: opposes or adds, not feelings']]} size={72} />
			<Enter at={6} style={{position: 'absolute', left: 96, top: 196, width: 1728}}>
				<div style={{background: '#f7f1e3', border: `3px solid ${INK_SOFT}`, borderRadius: 20, padding: '14px 26px'}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT}}>the student wrote</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 36, color: INK, lineHeight: 1.3, marginTop: 4}}>
						"Labour is <Strike at={c.notfeel}>negative</Strike> feedback because it is painful, and the progesterone brake in pregnancy is <Strike at={c.notfeel + 8}>positive</Strike> feedback because it protects the pregnancy."
					</div>
				</div>
			</Enter>
			<WrongChip at={c.notfeel + 20} x={96} y={396} text="painful" size={40} />
			<WrongChip at={c.notfeel + 30} x={380} y={396} text="protects the pregnancy" size={40} />
			<Hand at={c.notfeel + 50} x={900} y={402} size={52} color={AMBER_INK}>opposes or adds, not feelings</Hand>
			{col(96, c.preg, 'neg', 'pregnancy brake: negative', 'it opposes the change: high progesterone turns FSH and LH down', c.neg, SLATE)}
			{col(994, c.lab, 'pos', 'labour: positive', 'the result pushes the process further: more stretch, more oxytocin', c.pos, MAGENTA)}
			<div style={{display: 'none'}}>{[c.ft, c.opp, c.neg, c.pos, MAGENTA_INK, AMBER, Pill, Arrow].length}</div>
		</>
	);
};

// ---------- 9. Memory and handoff ----------
const Dot: React.FC<{x: number; y: number; at: number; color: string}> = ({x, y, at, color}) => {
	const f = useCurrentFrame();
	return <circle cx={x} cy={y} r={14} fill={color} stroke="#fff" strokeWidth={2.5} opacity={prog(f, at, 10)} />;
};
const STRIP_GAP = 45;
const STRIP: [string, string, string][] = [
	[AMBER, 'progesterone', 'keeps the lining thick, brakes FSH and LH, keeps the uterus muscle calm, holds milk back'],
	[TEAL, 'hCG', 'keeps the corpus luteum going'],
	[MAGENTA, 'oestrogen', 'makes the uterus muscle react more strongly to oxytocin; with progesterone, holds milk back'],
	[VIOLET, 'oxytocin', 'squeezes the uterus and the breast'],
	[PROLACTIN, 'prolactin', 'makes milk'],
	[SLATE, 'FSH and LH', 'grow a follicle and release the egg'],
];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const scene = S('memory');
	const c = cues(scene, {
		ox: 'oxytocin squeezes', uterus: 'in the uterus for birth', breast: 'in the breast for milk', prol: 'prolactin is pro-lactation', ask: 'ask whether the result opposes', negW: 'Negative opposes the change', posW: 'Positive adds to it',
		these: 'In these two loops', posP: 'positive pushed it further', next: 'Next time',
	});
	const end = speechEnd(scene);
	const lit = (i: number) => f >= c.posP + 20 + i * 24;
	const mn = ['stretch', 'oxytocin', 'squeeze', 'more stretch'];
	const mnK = [0, 3, 4, 0];
	const stripO = prog(f, end + 4, 14);
	return (
		<>
			<Heading items={[[0, 'Remember']]} size={72} />
			<Enter at={c.negW - 20} style={{position: 'absolute', left: 96, top: 196, width: 800}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, height: 100, padding: '0 28px', background: '#fffdf8', borderRadius: 22, border: `4px solid ${SLATE}`, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<svg width={80} height={80} viewBox="0 0 80 80"><LoopIcon k="neg" cx={40} cy={40} r={34} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: INK, lineHeight: 1}}>negative opposes the change</span>
				</div>
			</Enter>
			<Enter at={c.posW - 20} style={{position: 'absolute', left: 940, top: 196, width: 880}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, height: 100, padding: '0 28px', background: '#fffdf8', borderRadius: 22, border: `4px solid ${MAGENTA}`, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<svg width={80} height={80} viewBox="0 0 80 80"><LoopIcon k="pos" cx={40} cy={40} r={34} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: INK, lineHeight: 1}}>positive adds to it</span>
				</div>
			</Enter>
			<Hand at={c.ox} x={96} y={336} size={56} color={AMBER_INK}>oxytocin squeezes: uterus and breast</Hand>
			<Hand at={c.prol} x={96} y={410} size={56} color={AMBER_INK}>prolactin = pro-lactation: makes milk</Hand>
			<Overlay>
				<Dot x={900} y={364} at={c.uterus} color={VIOLET} /><Dot x={940} y={364} at={c.breast} color={VIOLET} />
				<Dot x={900} y={440} at={c.prol + 30} color={PROLACTIN} />
			</Overlay>
			<Hand at={c.ask} x={96} y={510} w={1700} size={58} color={INK}>Does the result oppose the change (negative) or add to it (positive)?</Hand>
			<Say at={c.these} x={96} y={660} w={1500} size={32} color={INK_SOFT} weight={600}>in these two loops: negative turned the process down, positive pushed it further</Say>
			<Overlay>
				{mn.map((t, i) => (
					<g key={i} opacity={prog(f, c.posP + 10 + i * 24, 12)}>
						<ChainIcon k={mnK[i]} cx={150 + i * 330} cy={810} s={0.8} lit={lit(i)} />
						<text x={150 + i * 330 + 60} y={822} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK}>{i < 3 ? t + ',' : t}</text>
					</g>
				))}
				<g opacity={prog(f, c.next, 14)}>
					<rect x={1100} y={900} width={720} height={80} rx={18} fill="#fffdf8" stroke="#2a5f8f" strokeWidth={4} />
					<text x={1130} y={955} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50}} fill="#2a5f8f">Next: reproduction and farming</text>
					<g transform="translate(1770,940)"><circle r={26} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} /><line x1={0} y1={0} x2={0} y2={-16} stroke="#c4432f" strokeWidth={4} strokeLinecap="round" transform={`rotate(${f * 4})`} /></g>
				</g>
			</Overlay>
			{/* silent "who does what" strip, one row at a time after the narration */}
			<div style={{position: 'absolute', left: 80, top: 176, width: 1760, height: 840, background: '#f6f1e7', borderRadius: 28, opacity: stripO, boxShadow: '0 18px 40px rgba(60,45,20,0.12)', border: '1.5px solid rgba(60,45,20,0.10)'}}>
				<div style={{padding: '18px 40px 0'}}><HandText text="who does what" at={end + 8} size={64} cps={30} /></div>
				{STRIP.map((r, i) => (
					<Enter key={r[1]} at={end + 20 + i * STRIP_GAP} style={{position: 'absolute', left: 40, top: 110 + i * 118, width: 1680, display: 'flex', alignItems: 'flex-start', gap: 22}}>
						<div style={{flex: 'none', width: 34, height: 34, borderRadius: 999, background: r[0], marginTop: 12}} />
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, lineHeight: 1.22}}><span style={{fontFamily: FONT_HAND, fontSize: 48, color: AMBER_INK}}>{r[1]}: </span>{r[2]}</div>
					</Enter>
				))}
			</div>
			<div style={{display: 'none'}}>{[Brain, CHAIN, Arrow, Cross, EggDot, EggMark, DrawPath, Dots, GreyTag, Label, MilkGland, PArt, PL, PIT, SLATE_INK, Vein, VIOLET_INK, YELLOW, pathOf, MAGENTA_INK, NIPPLE, YELLOW].length}</div>
		</>
	);
};

// ---------- 10. Key notes ----------
const NOTES = [
	'FSH (from the pituitary) makes a follicle grow, and a surge of LH makes it release its egg.',
	'Progesterone returning in the blood turns FSH and LH down. This is negative feedback: progesterone acts back on the pituitary and turns the process down. In pregnancy the corpus luteum (kept going by hCG) and then the placenta keep progesterone high, so no egg is released.',
	'Progesterone helps keep the uterus muscle calm. Late in pregnancy the placenta makes more oestrogen, which makes the muscle react more strongly to oxytocin.',
	"At birth, the baby's head stretches the cervix, nerve signals reach the brain, and the pituitary releases oxytocin, so the muscle contracts harder and stretches the cervix more. This is positive feedback: the stronger contractions add to the stretch that caused them. It ends when the baby is born and the stretch stops.",
	'Prolactin makes the breast produce milk, and oxytocin squeezes the milk out. Both are released when the baby suckles. High progesterone and oestrogen from the placenta hold milk production back in pregnancy.',
	'Negative feedback opposes a change (here it turns the process down). Positive feedback adds to a change (here it pushes the process further). Neither word means good or bad.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 120, top: 196, width: 1690}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 10}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 11, borderRadius: 999, background: AMBER}} />
					<Body size={30}>{n}</Body>
				</Enter>
			))}
			<Enter at={90} style={{marginTop: 12, background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 24, padding: '10px 30px', width: 'fit-content'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK, lineHeight: 1.1}}>Oxytocin squeezes (uterus and breast). Prolactin is pro-lactation.</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: '#1f6fb2', lineHeight: 1.1, marginTop: 4}}>stretch, oxytocin, squeeze, more stretch</div>
			</Enter>
		</div>
	</>
);
