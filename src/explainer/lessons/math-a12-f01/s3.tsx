// Scenes 11 to 16: attempt 1 (∑ from k = 2 to 5 of 4k − 3) and its brief feedback, attempt 2 (aₙ = 10 − 2n: S₄ and its
// sigma form) and its brief feedback, the handoff (a stack of three chairs, 80, 86, 92 cm, +6; exported as
// F01FinalFrame, f02's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading, SpriteStack, smooth} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AID_LINES} from './s2';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, CHAIR, Chip, FramedCard, Hand, Ladder, POS, Posts, Row, Sb, Scoreboard, Sig, SigmaBox, Slip, Stack, TEAL, boardPanels} from './parts';

// ---------- attempts ----------
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={640} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} given={['counter k from 2 to 5', 'each term: 4k − 3']} picture={<Scoreboard x={790} y={440} w={650} total="?" over="?" />}>
		<div style={{display: 'flex', alignItems: 'center', gap: 14}}>Evaluate <span style={{fontWeight: 800, display: 'inline-flex', alignItems: 'center'}}><Sig lo="k = 2" hi="5" size={64} limColor={INK} />(4k − 3)</span>.</div>
	</Attempt>
);
const QLad: React.FC = () => (
	<div style={{position: 'absolute', left: 790, top: 500, width: 760, height: 420}}>
		{[0, 1, 2, 3].map(i => <React.Fragment key={i}>
			<div style={{position: 'absolute', left: i * 128, top: 120, width: 110, height: 96, boxSizing: 'border-box', borderRadius: 14, border: `4px dashed ${BLUE}`, background: '#fffdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: BLUE}}>?</div>
			<div style={{position: 'absolute', left: i * 128, top: 76, width: 110, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: BLUE}}>a{'₁₂₃₄'[i]}</div>
			<div style={{position: 'absolute', left: i * 128 - 10, top: 226, width: 130, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>n = {i + 1}</div>
		</React.Fragment>)}
		<div style={{position: 'absolute', left: 560, top: 40, width: 110, height: 280, boxSizing: 'border-box', borderRadius: 10, border: `4px dashed ${TEAL}`, background: '#eef7f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: TEAL}}>?</div>
		<div style={{position: 'absolute', left: 530, top: 334, width: 200, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: TEAL}}>S₄ = ?</div>
	</div>
);
export const S13: React.FC = () => (
	<Attempt id="scene-13" pauseAt={K13.pause} heading="Last one" given={['aₙ = 10 − 2n', 'n = 1, 2, 3, …']} picture={<QLad />}>
		<div>A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation.</div>
	</Attempt>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const terms = [k.five, k.then + 19, k.then + 39, k.seventeen];
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div style={{display: 'flex', alignItems: 'center', gap: 12}}>Evaluate <span style={{fontWeight: 800, display: 'inline-flex', alignItems: 'center'}}><Sig lo="k = 2" hi="5" size={52} limColor={INK} limSize={38} />(4k − 3)</span>.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'start k = 2', role: 'k', at: k.start}, {content: 'stop 5', role: 'k', at: k.then}, {content: 'rule 4k − 3', role: 'a', at: k.start + 20}]} />
			<Row x={96} y={320} at={k.start + 20} size={52} dim={prog(fr, k.seventeen, 12)} small={40}><span style={{color: AMBER}}>k = 2</span>: 4(2) − 3 = <span style={{color: BLUE}}>5</span></Row>
			<Row x={96} y={404} at={k.then} size={52} dim={prog(fr, k.seventeen, 12)} small={40}><span style={{color: AMBER}}>k = 3, 4, 5</span>: <span style={{color: BLUE}}>9, 13, 17</span></Row>
			<Row x={96} y={488} at={k.seventeen} size={52} color={BLUE}>5 + 9 + 13 + 17</Row>
			<Row x={560} y={496} at={k.four} size={40} color={POS}>5 − 2 + 1 = 4 terms</Row>
			<AnswerBox x={96} y={586} at={k.f44} size={60}>= 44</AnswerBox>
			<MistakeCard x={96} y={730} w={960} at={k.wrong} size={46} wrong={<>1 + 5 + 9 + 13 = 28</>} caption="started at k = 1, stopped one term early" />
			{terms.map((t, i) => <div key={i} style={{position: 'absolute', left: 1180 + i * 160, top: 340 - (1 - smooth(prog(fr, t, 12))) * 40, opacity: prog(fr, t, 12), width: 130, height: 96, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fffdf8', borderRadius: 14, border: `4px solid ${BLUE}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: BLUE}}>{[5, 9, 13, 17][i]}</div>)}
			<Posts x={1245} y={720} step={160} values={[2, 3, 4, 5]} at={-30} gapsAt={k.four} bracket={{at: k.four + 20, label: '5 − 2 = 3 steps'}} ring={{at: k.four + 30}} />
			<Hand x={1180} y={820} at={k.four + 30} size={42} color={AMBER}>+ 1 for the first: 4 terms</Hand>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const fr = useCurrentFrame();
	const drops = [k.first + 50, k.first + 61, k.first + 75, k.two];
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'aₙ = 10 − 2n', role: 'a', at: k.first}, {content: 'S₄: the first 4 terms', role: 'b', at: k.s4}]} />
			<Ladder x={96} y={310} cardW={170} h={110} gap={28} size={60} values={[8, 6, 4, 2]} dropAt={drops} labels={i => `n = ${i + 1}`} slots={4} glows={[{i: 3, at: k.wrong, out: k.terms + 20}]} />
			<Row x={96} y={500} at={k.twenty} size={52} color={TEAL}>S₄ = 8 + 6 + 4 + 2 = 20</Row>
			<AnswerBox x={96} y={600} at={k.k} size={50}>S₄ = <Sig lo="k = 1" hi="4" size={50} />(10 − 2k) = 20</AnswerBox>
			<Slip x={96} y={790} at={k.wrong} size={48} caption="that is a₄, the fourth term">S₄ = 2</Slip>
			<Stack x={1300} base={930} terms={[8, 6, 4, 2]} buildAt={[k.s4 + 20, k.s4 + 20, k.s4 + 20, k.s4 + 20]} single={3} blockW={200} unit={26} readoutSize={52} />
			{[8, 6, 4, 2].map((t, i) => <div key={i} style={{position: 'absolute', left: 1300, width: 200, top: 930 - ([0, 8, 14, 18][i] + t / 2) * 26 - 24, textAlign: 'center', opacity: prog(fr, k.s4 + 32 + i * 3, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: BLUE}}>{t}</div>)}
			<Hand x={1530} y={700} at={k.s4 + 30} size={44} color={TEAL}>{'S₄: all four\nterms added'}</Hand>
			<Hand x={900} y={316} at={k.a4} size={42} color={BLUE}>{'a₄ = 2:\none term'}</Hand>
		</>
	);
};

// ---------- 15. handoff: the chair stack (f02's opening) ----------
const PXCM = 6;
const FLOOR = 920;
const CHX = 470;
const CHW = (CHAIR.box[2] - CHAIR.box[0]) * (PXCM / 13.5125);
const LADX = 980, LADY = 430;
const ChairBoard: React.FC<{c1: number; c2: number; c3: number; arcs: number; chips: number; q: number; head: number}> = ({c1, c2, c3, arcs, chips, q, head}) => {
	const fr = useCurrentFrame();
	const cnt = fr < c1 ? 0 : fr < c2 ? Math.min(1, (fr - c1) / 14) : fr < c3 ? 1 + Math.min(1, (fr - c2) / 14) : 2 + Math.min(1, (fr - c3) / 14);
	const tops = [80, 86, 92].map(h => FLOOR - h * PXCM);
	const cardsAt = [c1, c2, c3];
	return (
		<>
			<SceneHeading text="A stack of chairs" at={head} size={52} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<line x1={250} x2={250} y1={FLOOR} y2={FLOOR - 120 * PXCM - 10} stroke={INK} strokeWidth={4} />
				{[0, 20, 40, 60, 80, 100, 120].map(v => <g key={v}><line x1={238} x2={262} y1={FLOOR - v * PXCM} y2={FLOOR - v * PXCM} stroke={INK} strokeWidth={3.5} /><text x={226} y={FLOOR - v * PXCM + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text></g>)}
				<text x={272} y={FLOOR - 120 * PXCM + 11} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: POS}}>cm</text>
				<line x1={200} x2={780} y1={FLOOR} y2={FLOOR} stroke={INK} strokeWidth={4} />
				{tops.map((ty, i) => <line key={i} x1={262} x2={680} y1={ty} y2={ty} stroke={BLUE} strokeWidth={3} strokeDasharray="8 8" opacity={prog(fr, cardsAt[i] + 10, 12)} />)}
				{[0, 1].map(i => <g key={'b' + i} opacity={prog(fr, arcs + i * 8, 12)}><path d={`M690,${tops[i]} h14 V${tops[i + 1]} h-14`} stroke={AMBER_STROKE} strokeWidth={4} fill="none" /></g>)}
				<text x={716} y={tops[1] + 11} opacity={prog(fr, arcs + 8, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: AMBER}}>+6 cm each</text>
			</svg>
			<SpriteStack plate={CHAIR} x={CHX} y={FLOOR + 1} w={CHW} offsets={[[0, 0], [0, -6 * PXCM], [0, -12 * PXCM]]} count={cnt} z="behind" dropFrom={120} at={-30} />
			<Ladder x={LADX} y={LADY} cardW={200} gap={60} values={['80', '86', '92']} dropAt={cardsAt} labels={i => `n = ${i + 1}`} arcs={[{from: 0, to: 1, label: '+6', at: arcs}, {from: 1, to: 2, label: '+6', at: arcs + 8}]} />
			<div style={{position: 'absolute', left: LADX, top: LADY + 156, width: 720, textAlign: 'center', opacity: prog(fr, c1, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>height of the stack (cm); n = number of chairs</div>
			<Chip x={LADX} y={700} at={chips} size={50} color={BROWN}>Next: the same step every time</Chip>
			<Chip x={LADX} y={820} at={q} size={84} color={BROWN}>?</Chip>
		</>
	);
};
/** f01's final frame (f02 opens on it). */
export const F01FinalFrame: React.FC = () => <ChairBoard c1={-300} c2={-300} c3={-300} arcs={-300} chips={-300} q={-300} head={-300} />;
const RECAP = [
	{t: 'sequence: an ordered list', c: INK, key: 'so'},
	{t: 'aₙ: the term in position n', c: BLUE, key: 'asub'},
	{t: 'Sₙ: the first n terms added', c: TEAL, key: 'ssub'},
	{t: '∑: a sum in one line', c: AMBER, key: 'sigma'},
] as const;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.now - 10, 16);
	const p = boardPanels(1200, 230, 640);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="In one line each" at={4} size={52} />
				{RECAP.map((r, i) => <Chip key={i} x={96} y={210 + i * 170} at={k[r.key] + 4} size={60} color={r.c}>{r.t}</Chip>)}
				<Scoreboard x={1200} y={230} w={640} total="30" over="5" />
				<Hand x={1210} y={p.bottom + 20} at={k.ssub} size={44} color={TEAL}>S₅ = 30 on the board</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<ChairBoard c1={k.now} c2={k.two} c3={k.three} arcs={k.six} chips={k.what - 20} q={k.what} head={k.now} />
			</div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Sequence: an ordered list. <span style={{color: BLUE}}>aₙ</span> = term in position n.</>, at: 2},
		{content: <>Finite: ends at a last term. Infinite: never stops.</>, at: 6},
		{content: <><span style={{color: TEAL}}>Sₙ</span> = a₁ + a₂ + … + aₙ (a running total).</>, at: 10},
		{content: <>Series: the sum of all terms of an infinite sequence.</>, at: 14},
		{content: <span style={{display: 'inline-flex', alignItems: 'center'}}><Sig lo="k = i" hi="j" size={44} /><span style={{color: BLUE}}>a<Sb>k</Sb></span>&nbsp;adds a<Sb>i</Sb> up to a<Sb>j</Sb>.</span>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-16')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={220} w={1060} items={items} size={44} gap={60} />
				<FramedCard x={1180} y={196} w={700} h={760} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<SigmaBox x={1330} y={370} size={160} lower="start" upper="stop" rule={<>a<Sb>k</Sb></>} lowerAt={-30} upperAt={-30} ruleAt={-30} slotW={[170, 150, 130]} />
					<div style={{position: 'absolute', left: 1220, top: 640, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.12, color: INK}}>{AID_LINES.map(t => <div key={t}>{t}</div>)}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F01FinalFrame /></div> : null}
		</>
	);
};
