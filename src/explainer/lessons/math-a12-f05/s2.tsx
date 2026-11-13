// Scenes 6 to 9: the eighth term of 3, 6, 12, … (3 × 2⁷ = 384), the first term over 1000 (n − 1 > log(1000/3)/log 2,
// so n = 10; a₉ = 768 and a₁₀ = 1536), a and r from two terms (a₃ = 12, a₆ = 96: r³ = 8, r = 2, a = 3; odd and even
// gaps) and the memory aid (arithmetic adds, geometric multiplies; term n is n − 1 multiplications).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, FrameSvg, Pow, TermPlot} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {TERM_N} from './s1';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, Chip, Framed, FramedCard, GREEN, GapTexts, Hand, Ladder, MiniLadder, POS, Row, Sb, Slip, Task, gp} from './parts';

const NEVER = 1e9;
const seq = gp(3, 2);

// ---------- 6. worked example: the eighth term ----------
const L6 = {x: 660, y: 470, cardW: 150, gap: 70, h: 100};
const c6 = (i: number) => L6.x + i * (L6.cardW + L6.gap) + L6.cardW / 2;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>The sequence 3, 6, 12, … is geometric. Find a₈.</Task>
			<BoxCard x={96} y={270} w={520} at={6} size={46} title="givens">
				<div style={{whiteSpace: 'pre', opacity: 0.35 + 0.65 * prog(fr, k.first, 10)}}><span style={{color: BLUE, fontWeight: 800}}>a = 3</span></div>
				<div style={{whiteSpace: 'pre', opacity: 0.35 + 0.65 * prog(fr, k.r, 10)}}><span style={{color: AMBER, fontWeight: 800}}>r = 6 ÷ 3<span style={{opacity: prog(fr, k.two, 10)}}> = 2</span></span></div>
			</BoxCard>
			<Framed x={660} y={270} at={-30} size={50}>{TERM_N}</Framed>
			<Ladder x={L6.x} y={L6.y} cardW={L6.cardW} h={L6.h} gap={L6.gap} size={50} values={['3', '6', '12', '…', fr >= k.ans ? '384' : 'a₈']} dropAt={-30} labels={i => ['n = 1', 'n = 2', 'n = 3', '', 'n = 8'][i]} glows={[{i: 4, at: k.ans}]} />
			<GapTexts x={L6.x} y={L6.y} cardW={L6.cardW} gap={L6.gap} h={L6.h} size={38} items={[0, 1, 2, 3].map(i => ({text: '×2', at: k.two + i * 6, color: AMBER}))} />
			<FrameSvg><g opacity={prog(fr, k.eighth, 12)}>
				<path d={`M${c6(0)},${L6.y - 14} V${L6.y - 30} H${c6(4)} V${L6.y - 14}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<text x={(c6(0) + c6(4)) / 2} y={L6.y - 54} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}}>7 multiplications</text>
			</g></FrameSvg>
			<BoxCard x={96} y={620} w={860} at={10} out={k.so - 8} size={42} title="plan">
				<div>Read a and r from the first two terms.</div>
				<div>Term 8 is 7 multiplications from term 1.</div>
			</BoxCard>
			<Row x={96} y={610} at={k.so} size={52} dim={prog(fr, k.t27, 12)} small={44}><span style={{color: BLUE}}>a₈</span> = 3 × 2<Pow>8 − 1</Pow><span style={{opacity: prog(fr, k.p7, 10)}}> = 3 × 2<Pow>7</Pow></span></Row>
			<Row x={96} y={690} at={k.t27} size={52}>{'     '}= 3 × 128</Row>
			<AnswerBox x={96} y={780} at={k.ans} size={56}>a₈ = 384</AnswerBox>
			<Slip x={1000} y={650} at={k.ans + 24} size={44} caption="8 multiplications: one too many">3 × 2<Pow>8</Pow> = 768</Slip>
		</>
	);
};

// ---------- 7. the first term over one thousand ----------
const NumberLine7: React.FC<{markAt: number; pickAt: number}> = ({markAt, pickAt}) => {
	const f = useCurrentFrame();
	const y = 350, X = (v: number) => 1260 + (v - 9) * 440;
	return <FrameSvg>
		<line x1={1140} x2={1830} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{f >= pickAt ? <rect x={X(10) - 44} y={y + 22} width={88} height={54} rx={14} fill="#dcefe2" opacity={prog(f, pickAt, 12)} /> : null}
		{[9, 10].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 16} y2={y + 16} stroke={INK} strokeWidth={4} /><text x={X(v)} y={y + 62} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: v === 10 && f >= pickAt ? GREEN : INK}}>{v}</text></g>)}
		<g opacity={prog(f, markAt, 12)}>
			<line x1={X(9.38)} x2={1826} y1={y} y2={y} stroke={AMBER_STROKE} strokeWidth={10} strokeLinecap="round" opacity={0.75} />
			<circle cx={X(9.38)} cy={y} r={11} fill={CARD} stroke={AMBER_STROKE} strokeWidth={5} />
			<text x={X(9.38)} y={y - 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: POS}}>9.38</text>
		</g>
		<text x={1140} y={y - 56} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: POS}}>position n</text>
	</FrameSvg>;
};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const marks = (m: PlotMap) => {
		const [x9, y9] = m.p(9, seq(9)), [x10, y10] = m.p(10, seq(10));
		const t = (size: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill} as React.CSSProperties);
		return <>
			<text x={x9 + 24} y={y9 + 32} opacity={prog(fr, k.ninth + 30, 10)} style={t(36, BLUE)} stroke={CARD} strokeWidth={8} paintOrder="stroke">a₉ = 768</text>
			<text x={x10 - 44} y={y10 + 12} textAnchor="end" opacity={prog(fr, k.and10 + 30, 10)} style={t(36, BLUE)} stroke={CARD} strokeWidth={8} paintOrder="stroke">a₁₀ = 1536</text>
			{fr >= k.t1536 ? <circle cx={x10} cy={y10} r={28} fill="none" stroke={GREEN} strokeWidth={6} opacity={prog(fr, k.t1536, 12)} /> : null}
		</>;
	};
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Which term of 3, 6, 12, … is the first to exceed 1000?</Task>
			<Row x={96} y={272} at={-30} size={42}><span style={{color: POS}}>from before:</span>  <span style={{color: BLUE}}>a<Sb>n</Sb></span> = 3 × 2<Pow>n − 1</Pow></Row>
			<Row x={96} y={344} at={k.set} size={52} dim={prog(fr, k.toget, 12)} small={42}>3 × 2<Pow>n − 1</Pow> &gt; 1000</Row>
			<Row x={96} y={414} at={k.div + 40} size={52} dim={prog(fr, k.then, 12)} small={42}>2<Pow>n − 1</Pow> &gt; 1000/3</Row>
			<Row x={96} y={484} at={k.logs} size={52} dim={prog(fr, k.son, 12)} small={42}>(n − 1) log 2 &gt; log(1000/3)</Row>
			<Hand x={700} y={492} at={k.pos} size={42} color={AMBER}>log 2 &gt; 0: sign stays</Hand>
			<Row x={96} y={556} at={k.then} size={50}>n − 1 &gt; log(1000/3) ÷ log 2 <span style={{color: POS, opacity: prog(fr, k.e838, 10)}}>≈ 8.38</span></Row>
			<Row x={96} y={630} at={k.son} size={50}>n &gt; <span style={{color: POS}}>9.38</span></Row>
			<AnswerBox x={96} y={712} at={k.tenth} size={54}>n = 10: the 10th term</AnswerBox>
			<BoxCard x={96} y={730} w={900} at={10} out={k.son - 8} size={40} title="plan">
				<div>Set the nth term above 1000.</div>
				<div>Take logs to bring n down from the power.</div>
				<div>Then take the first whole n.</div>
			</BoxCard>
			<Hand x={96} y={830} at={k.check} size={42} color={POS}>check: the 9th term is below 1000, the 10th is above</Hand>
			<NumberLine7 markAt={k.n938} pickAt={k.tenth} />
			<TermPlot x={1080} y={440} width={800} height={500} window={{x: [0, 11.8], y: [0, 3400]}} nRange={[1, 11]} at={-30} xTicks={[2, 4, 6, 8, 10]} yTicks={[1000, 2000, 3000].map(v => ({value: v, label: String(v)}))} xLabel="" yLabel="aₙ"
				refLine={{Y: 1000, at: -30, color: INK}}
				series={[{term: n => (n <= 8 ? seq(n) : NaN), color: BLUE, at: -30, stagger: 0}, {term: n => (n === 9 ? seq(9) : NaN), color: BLUE, at: k.ninth - 8 * 0, stagger: 0}, {term: n => (n === 10 ? seq(10) : NaN), color: BLUE, at: k.and10, stagger: 0}, {term: n => (n === 11 ? seq(11) : NaN), color: BLUE, at: k.t1536 + 20, stagger: 0}]}>{marks}</TermPlot>
		</>
	);
};

// ---------- 8. worked example: from two terms ----------
const L8 = {x: 96, y: 340, cardW: 160, gap: 100, h: 110};
const c8 = (i: number) => L8.x + i * (L8.cardW + L8.gap) + L8.cardW / 2;
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const fill = k.a3 + 30;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>In a geometric sequence, a₃ = 12 and a₆ = 96. Find a and r.</Task>
			<Ladder x={L8.x} y={L8.y} cardW={L8.cardW} h={L8.h} gap={L8.gap} size={56} values={['3', '6', '12', '24', '48', '96']} dropAt={[fill, fill + 8, -30, fill + 16, fill + 24, -30]} slots={6} labels={i => `n = ${i + 1}`} labelSize={34} glows={[{i: 2, at: k.third, out: k.from}, {i: 5, at: k.sixth, out: k.from}]} />
			<GapTexts x={L8.x} y={L8.y} cardW={L8.cardW} gap={L8.gap} h={L8.h} size={44} items={[{text: '×r', at: fill, color: AMBER}, {text: '×r', at: fill, color: AMBER}, {text: '×r', at: k.from + 20, color: AMBER}, {text: '×r', at: k.from + 32, color: AMBER}, {text: '×r', at: k.from + 44, color: AMBER}]} />
			<FrameSvg><g opacity={prog(fr, k.three, 12)}>
				<path d={`M${c8(2)},${L8.y - 14} V${L8.y - 30} H${c8(5)} V${L8.y - 14}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<text x={(c8(2) + c8(5)) / 2} y={L8.y - 54} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}}>3 multiplications</text>
			</g></FrameSvg>
			<BoxCard x={1590} y={330} w={260} at={6} size={44} title="givens">
				<div style={{color: BLUE, fontWeight: 800}}>a₃ = 12</div>
				<div style={{color: BLUE, fontWeight: 800}}>a₆ = 96</div>
			</BoxCard>
			<BoxCard x={96} y={560} w={1000} at={10} out={k.so - 8} size={40} title="plan">
				<div>Count the multiplications between the two terms.</div>
				<div>Divide the later term by the earlier one: a cancels.</div>
			</BoxCard>
			<Row x={96} y={550} at={k.so} size={52} dim={prog(fr, k.eight, 12)} small={44}>96 = 12 × r<Pow>3</Pow></Row>
			<Row x={520} y={556} at={k.div} out={k.then - 6} size={38} color={POS}>(ar<Pow>5</Pow> ÷ ar<Pow>2</Pow> = r<Pow>3</Pow>: a cancels)</Row>
			<Row x={96} y={624} at={k.eight} size={52}>r<Pow>3</Pow> = 96 ÷ 12 = 8</Row>
			<AnswerBox x={96} y={704} at={k.two} size={54}>r = 2</AnswerBox>
			<Row x={1100} y={550} at={k.then} size={52} dim={prog(fr, k.four, 12)} small={44}>ar<Pow>2</Pow> = 12</Row>
			<Row x={1100} y={624} at={k.four} size={52}>a × 4 = 12</Row>
			<AnswerBox x={1100} y={704} at={k.a3} size={54}>a = 3</AnswerBox>
			<Chip x={96} y={800} at={k.odd} size={38} color={BROWN}>odd gap: one real root</Chip>
			<Chip x={96} y={876} at={k.pos} size={38} color={BROWN}>even gap, positive quotient: r = ± root, two sequences</Chip>
			<Chip x={680} y={800} at={k.neg} size={38} color={BROWN}>even gap, negative quotient: no real r</Chip>
		</>
	);
};

// ---------- 9. memory aid ----------
/** The two ladders of the memory aid: adding the same number, multiplying by the same number. */
export const AidLadders: React.FC<{x: number; y: number; dy: number; cardW?: number; gap?: number; h?: number; size?: number; stepSize?: number}> = ({x, y, dy, cardW = 200, gap = 140, h = 120, size = 76, stepSize = 60}) => (
	<>
		<MiniLadder x={x} y={y} values={['3', '5', '7', '9']} step="+2" color={INK} stepColor={POS} cardW={cardW} gap={gap} h={h} size={size} stepSize={stepSize} />
		<MiniLadder x={x} y={y + dy} values={['3', '6', '12', '24']} step="×2" color={BLUE} stepColor={AMBER} cardW={cardW} gap={gap} h={h} size={size} stepSize={stepSize} />
	</>
);
export const AID5 = ['Arithmetic adds the same number.', 'Geometric multiplies by the same number.', 'Term n: multiply by r, n − 1 times.'];
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.1});
	return (
		<>
			<FramedCard x={260} y={150} w={1400} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 320, top: 176}}>Memory aid</div>
			<AidLadders x={350} y={246} dy={240} />
			<div style={{...hand(70), left: 350, top: 380, opacity: prog(fr, k.ar, 12)}}>{AID5[0]}</div>
			<div style={{...hand(70), left: 350, top: 620, opacity: prog(fr, k.geo, 12)}}>{AID5[1]}</div>
			<div style={{...hand(80, AMBER), left: 350, top: 746, opacity: prog(fr, k.so, 12)}}>{AID5[2]}</div>
			<div style={{...hand(46, POS), left: 350, top: 846, opacity: prog(fr, k.take, 12)}}>term n is n − 1 steps from the first</div>
		</>
	);
};
export {NEVER};
