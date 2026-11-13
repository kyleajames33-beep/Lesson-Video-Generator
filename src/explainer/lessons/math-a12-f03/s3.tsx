// Scenes 10 to 15: attempt 1 (first 30 terms of 5 + 8 + 11 + …) and its brief feedback, attempt 2 (2 + 6 + 10 + …: first
// more than 200) and its brief feedback, the handoff (the planting crew: f04's opening, drawn here as a stand-in and
// exported as F03FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading, vis} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {FORM1, FORM2, Framed, MiniShape} from './s1';
import {AID3} from './s2';
import {F04OpeningFrame} from '../math-a12-f04/s1';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, Chip, FramedCard, Hand, POS, PlantingStrip, Row, TEAL} from './parts';

const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={600} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
const SlotRow: React.FC<{x: number; y: number; cardW?: number; gap?: number; vals: readonly string[]; labels: readonly string[]; size?: number}> = ({x, y, cardW = 120, gap = 22, vals, labels, size = 48}) => (
	<>
		{vals.map((v, i) => {
			const dots = v === '…';
			const filled = v !== '' && v !== '?' && !dots;
			return <React.Fragment key={i}>
				{dots ? <div style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK_SOFT}}>…</div>
					: <div style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: 96, boxSizing: 'border-box', borderRadius: 14, border: `4px ${filled ? 'solid' : 'dashed'} ${filled ? BLUE : INK_SOFT}`, background: '#fffdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: filled ? BLUE : INK_SOFT}}>{v}</div>}
				<div style={{position: 'absolute', left: x + i * (cardW + gap) - 10, top: y + 104, width: cardW + 20, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>{labels[i]}</div>
			</React.Fragment>;
		})}
	</>
);

// ---------- 10. attempt 1 ----------
const A1 = {x: 780, y: 520};
const A1L = ['n = 1', 'n = 2', 'n = 3', '', 'n = 30'];
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['5 + 8 + 11 + …', 'the first 30 terms']} picture={<SlotRow x={A1.x} y={A1.y} vals={['5', '8', '11', '…', '?']} labels={A1L} />}>
		<div>Find the sum of the first 30 terms of the arithmetic series 5 + 8 + 11 + ….</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	const sx = (i: number) => 1060 + i * 142 + 60;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>Find the sum of the first 30 terms of 5 + 8 + 11 + ….</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'a = 5', role: 'a', at: k.here}, {content: 'd = 3', role: 'k', at: k.here + 40}, {content: 'n = 30', role: 'inner', at: k.here + 90}]} />
			<SlotRow x={1060} y={330} vals={['5', '8', '11', '…', fr >= k.n92 ? '92' : '?']} labels={A1L} />
			<FrameSvg><g opacity={prog(fr, k.t30, 12)}><path d={`M${sx(0)},${470} v14 H${sx(4)} v-14`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" /></g></FrameSvg>
			<Hand x={sx(1)} y={494} at={k.t30} size={42} color={AMBER}>29 steps of 3</Hand>
			<BoxCard x={96} y={330} w={900} at={6} out={k.t30 - 6} size={42} title="plan">
				<div><span style={{color: BLUE}}>a = 5</span>, <span style={{color: AMBER}}>d = 3</span>, n = 30.</div>
				<div>Find the last term a₃₀ (29 steps after a),</div>
				<div>then use the first form.</div>
			</BoxCard>
			<Row x={96} y={330} at={k.t30} size={52} dim={prog(fr, k.so, 12)} small={40}>a₃₀ = 5 + 29 × 3 = 92</Row>
			<Row x={96} y={410} at={k.so} size={52}>S₃₀ = (30/2)(5 + 92) = 15 × 97</Row>
			<AnswerBox x={96} y={500} at={k.f55} size={56}>S₃₀ = 1455</AnswerBox>
			<MistakeCard x={96} y={660} w={1000} at={k.wrong} size={46} wrong={<>15(10 + 30 × 3) = 1500</>} caption="30 steps: one too many" />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const ColPic: React.FC<{x: number; base: number; unit: number; line: number; cols?: readonly {v: number; label: string; at: number; color?: string}[]; empty?: boolean}> = ({x, base, unit, line, cols = [], empty = false}) => {
	const f = useCurrentFrame();
	const ly = base - line * unit;
	return <FrameSvg>
		<line x1={x - 40} x2={x + 520} y1={base} y2={base} stroke={INK} strokeWidth={4} />
		<line x1={x - 40} x2={x + 520} y1={ly} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
		<text x={x - 52} y={ly + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>{line}</text>
		{empty ? <g><rect x={x + 80} y={ly - 120} width={150} height={base - ly + 120} rx={10} fill="#eef7f7" stroke={TEAL} strokeWidth={4} strokeDasharray="12 8" /><text x={x + 155} y={ly - 140} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}}>Sₙ = ?</text><text x={x + 155} y={(base + ly) / 2 + 20} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, fill: TEAL}}>?</text></g> : null}
		{cols.map((c, i) => {const p = prog(f, c.at, 14); const h = c.v * unit * p; return <g key={i} opacity={prog(f, c.at, 8)}><rect x={x + 40 + i * 220} y={base - h} width={150} height={h} rx={8} fill="#d6eeee" stroke={c.color ?? TEAL} strokeWidth={4} /><text x={x + 115 + i * 220} y={base - c.v * unit - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}}>{c.v}</text><text x={x + 115 + i * 220} y={base + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: TEAL}}>{c.label}</text></g>;})}
	</FrameSvg>;
};
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['2 + 6 + 10 + …', 'sum: more than 200']} picture={<ColPic x={880} base={940} unit={1.6} line={200} empty />}>
		<div>How many terms of the arithmetic series 2 + 6 + 10 + … are needed for the sum to first be more than 200?</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>2 + 6 + 10 + …: how many terms for the sum to first be more than 200?</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'a = 2', role: 'a', at: k.here}, {content: 'd = 4', role: 'k', at: k.here + 40}, {content: 'more than 200', at: k.two}]} />
			<Row x={96} y={330} at={k.sq - 30} size={50} dim={prog(fr, k.two, 12)} small={40}><span style={{color: TEAL}}>Sₙ</span> = (n/2)[4 + 4(n − 1)] = 2n²</Row>
			<Row x={96} y={410} at={k.two} size={52}>2n² &gt; 200,  n² &gt; 100,  n &gt; 10</Row>
			<AnswerBox x={96} y={500} at={k.so} size={56}>11 terms</AnswerBox>
			<MistakeCard x={96} y={660} w={960} at={k.wrong} size={46} wrong={<>10 terms</>} caption="S₁₀ = 200: not more than 200" />
			<ColPic x={1200} base={930} unit={2} line={200} cols={[{v: 200, label: 'S₁₀', at: k.tenTerms}, {v: 242, label: 'S₁₁', at: k.so - 10}]} />
			<Hand x={1180} y={360} at={k.tenTerms + 30} size={40} color={TEAL}>S₁₀ only reaches the line</Hand>
		</>
	);
};

// ---------- 14. handoff: the planting crew (f04's opening, stand-in) ----------
const CrewBoard: React.FC<{strip: number; days: readonly number[]; arcs: number; q: number; line: number; chips: number; qChip: number; head: number}> = ({strip, days, arcs, q, line, chips, qChip, head}) => (
	<>
		<SceneHeading text="A planting crew" at={head} size={52} />
		<PlantingStrip strip={strip} days={days} arcs={arcs} q={q} line={line} />
		<Chip x={560} y={88} at={chips} size={46} color={BROWN}>Next: more or less than 1,200?</Chip>
		<Chip x={1460} y={350} at={qChip} size={84} color={BROWN}>?</Chip>
	</>
);
/** f04's opening frame, drawn here as a solid stand-in (f04 is not built): f03's final frame. */
export const F04OpeningStandIn: React.FC = () => <CrewBoard strip={1} days={[1, 1, 1]} arcs={1} q={1} line={1} chips={-300} qChip={-300} head={-300} />;
/** f03's final frame is f04's real opening frame (f04 is built; the stand-in above matches it and is kept for reference). */
export const F03FinalFrame = F04OpeningFrame;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 10, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Pairing explains both forms" at={4} size={52} />
				<MiniShape x={96} y={250} S={0.36} />
				<Framed x={96} y={500} at={-30} size={56}>{FORM1}</Framed>
				<Framed x={96} y={640} at={-30} size={56}>{FORM2}</Framed>
				<Hand x={940} y={520} at={-30} size={42} color={BLUE}>last term known</Hand>
				<Hand x={1140} y={660} at={-30} size={42} color={AMBER}>d known</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<CrewBoard strip={prog(fr, k.next - 10, 16)} days={[prog(fr, k.fifty, 12), prog(fr, k.eighty, 12), prog(fr, k.h110, 12)]} arcs={prog(fr, k.thirty, 12)} q={prog(fr, k.after, 12)} line={prog(fr, k.more, 12)} chips={k.seedlings - 30} qChip={k.seedlings} head={k.next} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Forwards + backwards: each column is <span style={{color: TEAL}}>a + aₙ</span>.</>, at: 2},
		{content: <><span style={{color: TEAL}}>Sₙ</span> = (n/2)(a + aₙ): last term known.</>, at: 6},
		{content: <><span style={{color: TEAL}}>Sₙ</span> = (n/2)[2a + (n − 1)<span style={{color: AMBER}}>d</span>]: d known.</>, at: 10},
		{content: <>Terms from first to last (d = 1): last − first + 1.</>, at: 14},
		{content: <>Solving for n: take whole n, check both sides.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={220} w={1060} items={items} size={44} gap={60} />
				<FramedCard x={1180} y={196} w={700} h={760} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<MiniShape x={1230} y={300} S={0.27} />
					<div style={{position: 'absolute', left: 1230, top: 520, width: 620, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.3, color: INK}}>{AID3.map(t => <div key={t}>{t}</div>)}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F03FinalFrame /></div> : null}
		</>
	);
};
export {vis};
