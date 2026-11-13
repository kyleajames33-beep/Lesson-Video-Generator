// Scenes 1 to 5: the doubling board (f04's final frame) and the folded paper (0.1 mm, doubled 42 times, passes the
// Moon on a log ruler), the ratio test (2, 6, 18, 54 against 5, 10, 20, 35), a fraction, a negative and the zero that
// is not allowed (the ratio slider), the nth term by counting multiplications (aₙ = arⁿ⁻¹; 42 folds is the 43rd
// term), and the terms as an exponential function of n against an arithmetic sequence's straight line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, MarkSpan, Pow, SceneHeading, StepCounter, TermPlot, kf, niceNum, smooth, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {DoubleBoard, F04FinalFrame} from '../math-a12-f04/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, Arcs, BLUE, BROWN, BoxCard, Chip, FoldRig, Framed, GREEN, GapTexts, GuessChip, HOUSE, Hand, Ladder, MOON, MiniLadder, POS, RED, RSlider, Row, Sb, SlipLine, ThickRuler, awayFromZero, fmtThick, gp, thick} from './parts';
import type {Landmark, RulerSpec} from './parts';

const bump = (fr: number, at: number, len = 40) => Math.sin(Math.PI * Math.max(0, Math.min(1, (fr - at) / len)));
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 1. hook: doubling paper ----------
const R1: RulerSpec = {x: 1330, top: 190, bottom: 950};
const folds1 = (fr: number) => smooth(prog(fr, K1.two2 - 6, 18)) + smooth(prog(fr, K1.four - 6, 18)) + 40 * clamp01((fr - K1.how) / (K1.moon - K1.how));
/** Scene frame at which the fast-forward reaches fold n. */
const foldFrame1 = (n: number) => Math.round(K1.how + ((n - 2) / 40) * (K1.moon - K1.how));
const MOON_MM = 3.844e11;
const marks1: Landmark[] = [
	{mm: thick(8), label: 'fold 8: a thick book', at: foldFrame1(8)},
	{mm: thick(15), plate: HOUSE, plateW: 150, label: 'fold 15: 3.3 m', at: foldFrame1(15)},
	{mm: thick(27), label: 'fold 27: above the planes', at: foldFrame1(27)},
	{mm: MOON_MM, plate: MOON, plateW: 180, lines: ['the Moon:', 'about 384 000 km'], at: K1.moon - 24},
];
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const board = 1 - prog(fr, k.paper - 18, 14);
	const folds = folds1(fr), n = Math.floor(folds + 1e-6);
	const paper = fr >= k.paper - 8;
	return (
		<>
			<SceneHeading text="How does a fixed ratio determine a geometric sequence?" at={34} size={48} />
			{board > 0.001 && fr >= 1 ? <div style={{position: 'absolute', inset: 0, opacity: board}}>
				<DoubleBoard bare head={-300} cards={[-300, -300, -300, -300]} diffs={-300} tag={-300} arcs={[-300, -300, -300]} chip={-300} q={-300} />
				<FrameSvg>{[0, 1, 2, 3].map(i => {const b = bump(fr, k.two + i * 24, 30); return b > 0.01 ? <rect key={i} x={255 + i * 390 - 10} y={390} width={260} height={180} rx={24} fill="none" stroke={AMBER_STROKE} strokeWidth={7} opacity={b} /> : null;})}</FrameSvg>
				<Hand x={640} y={220} at={k.but} size={52} color={AMBER}>every term: double the one before</Hand>
			</div> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F04FinalFrame /></div> : null}
			{paper ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.paper - 8, 14)}}>
				<MiniLadder x={96} y={200} values={['2', '4', '8', '16']} step="×2" color={BLUE} stepColor={AMBER} />
				<LiveReadoutBoard x={96} y={318} width={780} at={-30} inline size={64} labelSize={38} rows={[
					{label: 'folds', value: n, digits: 0, role: 'inner'},
					{label: 'thickness', value: thick(n), text: fmtThick(thick(n)), role: 'a'},
				]} />
				<FoldRig x={96} base={880} w={640} folds={folds} swapAt={k.two2 - 6} stackX={770} />
				<Hand x={740} y={896} at={-30} size={40} color={POS}>{n < 20 ? `${(2 ** n).toLocaleString('en-AU').replace(/,/g, ' ')} layer${n ? 's' : ''}` : n < 30 ? `${Math.round(2 ** n / 1e6)} million layers` : n < 40 ? `${Math.round(2 ** n / 1e9)} billion layers` : `${(2 ** n / 1e12).toFixed(1)} trillion layers`}</Hand>
				<ThickRuler R={R1} mm={thick(folds)} landmarks={marks1} topLabel={{text: '42 folds: ≈ 440 000 km', at: k.moon}} />
			</div> : null}
			<GuessChip x={930} y={774} at={k.cm} crossAt={k.moon + 10}>a few cm?</GuessChip>
			<GuessChip x={930} y={685} at={k.metre} crossAt={k.moon + 18}>1 m?</GuessChip>
			<Chip x={96} y={520} at={k.can} size={40} color={BROWN}>How can doubling do this?</Chip>
		</>
	);
};

// ---------- 2. geometric sequences ----------
const L2 = {x: 150, cardW: 190, gap: 180, h: 120};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const y1 = 540 - 110 * smooth(prog(fr, k.now - 24, 24)), y2 = 700;
	const rk = [k.r1, k.r2, k.r3];
	return (
		<>
			<SceneHeading text="Geometric sequences" at={4} size={52} />
			<BoxCard x={96} y={170} w={1240} at={6} size={40} title="geometric sequence (GP)">
				<div style={{whiteSpace: 'pre'}}>Each term is the one before, <span style={{color: AMBER, fontWeight: 800}}>multiplied by the same number</span>.</div>
				{fr >= k.ratio ? <div style={{whiteSpace: 'pre', opacity: prog(fr, k.ratio, 10)}}><span style={{color: AMBER, fontWeight: 800}}>r</span>: the common ratio.<span style={{opacity: prog(fr, k.so, 10)}}>     <span style={{color: BLUE, fontWeight: 800}}>a<Sb>n</Sb></span> = <span style={{color: AMBER, fontWeight: 800}}>r</span> × <span style={{color: BLUE, fontWeight: 800}}>a<Sb>n − 1</Sb></span></span></div> : null}
			</BoxCard>
			<Ladder x={L2.x} y={y1} cardW={L2.cardW} h={L2.h} gap={L2.gap} size={64} values={['2', '6', '18', '54']} dropAt={-30} />
			<Arcs x={L2.x} y={y1} cardW={L2.cardW} gap={L2.gap} h={L2.h} size={44} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '× r', at: k.mult + i * 10, out: rk[i] - 4}))} />
			<Arcs x={L2.x} y={y1} cardW={L2.cardW} gap={L2.gap} h={L2.h} size={48} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '×3', at: rk[i]}))} />
			<GapTexts x={L2.x} y={y1} cardW={L2.cardW} gap={L2.gap} h={L2.h} size={40} items={[{text: '6 ÷ 2', at: k.d1}, {text: '18 ÷ 6', at: k.d2}, {text: '54 ÷ 18', at: k.d3}]} />
			<Hand x={1520} y={y1 + 20} at={k.eq3 - 20} size={72} color={AMBER}>r = 3</Hand>
			<Hand x={1520} y={y1 + 104} at={k.its} size={40} color={POS}>geometric</Hand>
			<Chip x={96} y={850} at={k.test} size={36} color={BROWN}>test: divide each term by the one before</Chip>
			<Ladder x={L2.x} y={y2} cardW={L2.cardW} h={L2.h} gap={L2.gap} size={64} values={['5', '10', '20', '35']} dropAt={[k.now + 20, k.now + 40, k.now + 62, k.now + 84]} />
			<Arcs x={L2.x} y={y2} cardW={L2.cardW} gap={L2.gap} h={L2.h} size={48} arcs={[{from: 0, to: 1, label: '×2', at: k.are2}, {from: 1, to: 2, label: '×2', at: k.are2 + 12}, {from: 2, to: 3, label: '×1.75', at: k.q, ring: prog(fr, k.one, 12)}]} />
			<GapTexts x={L2.x} y={y2} cardW={L2.cardW} gap={L2.gap} h={L2.h} size={40} items={[{text: '10 ÷ 5', at: k.first2}, {text: '20 ÷ 10', at: k.first2 + 14}, {text: '35 ÷ 20', at: k.but}]} />
			<Hand x={1000} y={852} at={k.not - 30} size={48} color={RED}>one ratio differs: not a GP</Hand>
		</>
	);
};

// ---------- 3. fractions, negatives and zero ----------
const r3 = (fr: number) => {
	const k = K3;
	if (fr < k.one - 10) return 0.5;
	if (fr < k.but) return 0.5 - 2.5 * smooth(clamp01((fr - (k.one - 10)) / 30));
	return -2 + 1.9 * smooth(clamp01((fr - k.but) / (k.zero + 12 - k.but)));
};
const L3 = {x: 1190, y: 350, cardW: 140, gap: 30, h: 100};
const fmtR = (v: number) => (Math.abs(v) < 0.0005 ? '0' : String(Number(v.toFixed(3))).replace('-', '−'));
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	// r is rounded to two decimal places once; the slider badge, the cards and the plot all use that value.
	const rShown = Math.round(r3(fr) * 100) / 100, r = awayFromZero(rShown);
	const b = prog(fr, k.one - 10, 14);
	const P = {x: 40, y: 160, width: 1080, height: 640};
	return (
		<>
			<SceneHeading text="Fractions, negatives and zero" at={4} size={52} />
			<TermPlot {...P} window={{x: [0, 4.7], y: [-12, 114]}} nRange={[1, 4]} at={-30} out={k.one - 10} xTicks={[1, 2, 3, 4]} yTicks={[25, 50, 75, 100]} xLabel="n" yLabel="aₙ"
				series={[{term: n => (n === 1 ? 100 : NaN), color: BLUE, at: 16, stagger: 0, labels: {at: 22, text: () => '100'}}, {term: n => (n > 1 ? gp(100, 0.5)(n) : NaN), color: BLUE, at: k.h100, stagger: 18, labels: {at: k.h100 + 6, text: (_n, v) => String(v)}}]} />
			<TermPlot {...P} window={{x: [0, 4.7], y: [-9.6, 5.6]}} nRange={[1, 4]} at={k.one - 10} xTicks={[1, 2, 3, 4]} yTicks={[-8, -6, -4, -2, 2, 4]} xLabel="n" yLabel="aₙ"
				series={[{term: n => (fr < k.but ? gp(1, r)(n) : NaN), color: BLUE, at: k.one - 10, stagger: 0, labels: {at: k.one + 22, text: (_n, v) => fmtR(v)}}, {term: n => (fr >= k.but ? gp(1, r)(n) : NaN), color: BLUE, at: -30, stagger: 0}]} />
			<RSlider x={210} y={872} w={560} r={r} zeroAt={k.but} />
			<MiniLadder x={L3.x} y={166} values={['2', '6', '18', '54']} step="×3" color={POS} stepColor={AMBER} cardW={96} gap={56} h={66} size={38} stepSize={34} />
			<Hand x={L3.x + 570} y={174} at={-30} size={44} color={AMBER}>r = 3</Hand>
			<Hand x={L3.x} y={296} at={-30} size={40} color={POS}>new terms:</Hand>
			<Ladder x={L3.x} y={L3.y} cardW={L3.cardW} h={L3.h} gap={L3.gap} size={46} values={['100', '50', '25', '12.5']} dropAt={[16, k.h100 + 18, k.h100 + 36, k.h100 + 54]} labels={i => `n = ${i + 1}`} slots={4} o={1 - b} />
			<Ladder x={L3.x} y={L3.y} cardW={L3.cardW} h={L3.h} gap={L3.gap} size={fr >= k.but ? 36 : 46} values={[1, r, r * r, r * r * r].map(fmtR)} dropAt={-30} labels={i => `n = ${i + 1}`} o={b} />
			<Hand x={L3.x} y={500} at={k.half} out={k.one - 10} size={44} color={AMBER}>r = ½: each term is half the last</Hand>
			<Hand x={L3.x} y={556} at={k.shrink} out={k.one - 10} size={40} color={POS}>0 &lt; r &lt; 1: the terms shrink towards 0</Hand>
			<Hand x={L3.x} y={500} at={k.m2} out={k.but} size={44} color={AMBER}>r = −2: the sign flips every step</Hand>
			<Hand x={L3.x} y={556} at={k.alt} out={k.but} size={40} color={POS}>r &lt; 0: the signs alternate</Hand>
			<Hand x={L3.x} y={500} at={k.but + 10} size={44} color={RED}>r can never be 0</Hand>
			<Hand x={L3.x} y={566} at={k.were} size={40} color={POS}>if r were 0:</Hand>
			<Ladder x={L3.x} y={618} cardW={L3.cardW} h={84} gap={L3.gap} size={44} color={POS} values={['a', '0', '0', '0']} dropAt={[k.were, k.after, k.after + 8, k.after + 16]} />
			<Row x={L3.x} y={722} at={k.test} size={44}>ratio test:  0 ÷ 0 = ?</Row>
			<SlipLine x={L3.x} y={796} at={k.byzero - 14} size={42} caption="cannot divide by 0">÷ 0</SlipLine>
			<Hand x={L3.x + 500} y={872} at={k.byzero + 10} size={64} color={AMBER}>r ≠ 0</Hand>
		</>
	);
};

// ---------- 4. the nth term: count the multiplications ----------
const L4 = {x: 165, y: 440, cardW: 190, gap: 90, h: 120};
const c4 = (i: number) => L4.x + i * (L4.cardW + L4.gap) + L4.cardW / 2;
const R4: RulerSpec = {x: 800, top: 300, bottom: 930};
const folds4 = (fr: number) => 42 * clamp01((fr - K4.after) / (K4.times - 12 - K4.after));
export const TERM_N = <>a<Sb>n</Sb> = ar<Pow>n − 1</Pow></>;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const one = 1 - prog(fr, k.back - 14, 14), two = prog(fr, k.back, 14);
	const folds = folds4(fr), n = Math.floor(folds + 1e-6);
	return (
		<>
			<SceneHeading text="The nth term: count the multiplications" at={4} size={52} />
			{one > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: one}}>
				<Ladder x={L4.x} y={L4.y} cardW={L4.cardW} h={L4.h} gap={L4.gap} size={60} values={['a', 'ar', 'ar²', 'ar³', '…', <>a<Sb>n</Sb></>]} dropAt={[k.start, k.second, k.sq, k.each, k.each + 10, k.nm1]} slots={6} labels={i => ['n = 1', 'n = 2', 'n = 3', 'n = 4', '', 'n'][i]} labelSize={34} glows={[{i: 2, at: k.sq, out: k.each}]} />
				<GapTexts x={L4.x} y={L4.y} cardW={L4.cardW} gap={L4.gap} h={L4.h} size={44} items={[{text: '×r', at: k.second, color: AMBER}, {text: '×r', at: k.sq - 40, color: AMBER}, {text: '×r', at: k.each, color: AMBER}, {text: '×r', at: k.nm1, color: AMBER}, {text: '×r', at: k.nm1, color: AMBER}]} />
				<StepCounter xs={[0, 1, 2, 3].map(c4)} y={L4.y - 10} at={k.each} stagger={22} mode="steps" bracket={{label: '3 steps to term 4', at: k.each + 80}} out={k.nm1 - 30} />
				<FrameSvg><g opacity={prog(fr, k.nm1, 12)}>
					<path d={`M${c4(0)},${L4.y - 114} V${L4.y - 130} H${c4(5)} V${L4.y - 114}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
					<text x={(c4(0) + c4(5)) / 2} y={L4.y - 146} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: AMBER}}>n − 1 multiplications</text>
				</g></FrameSvg>
				{fr < k.so + 4 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.so - 10, 12)}}>
					<Hand x={L4.x} y={626} at={-30} size={42} color={POS}>for example, a = 3 and r = 2:</Hand>
					<Ladder x={L4.x} y={690} cardW={L4.cardW} h={100} gap={L4.gap} size={42} color={POS} dropAt={-30}
						values={[fr >= k.start ? '3' : '3', fr >= k.second ? '3 × 2' : '6', fr >= k.sq ? '3 × 2²' : '12', fr >= k.each ? '3 × 2³' : '24', '…', fr >= k.nm1 ? <>3 × 2<Pow>n − 1</Pow></> : <>a<Sb>n</Sb></>]} />
					<GapTexts x={L4.x} y={690} cardW={L4.cardW} gap={L4.gap} h={100} size={40} items={[0, 1, 2, 3, 4].map(() => ({text: '×2', at: -30, color: AMBER}))} />
				</div> : null}
				<Framed x={96} y={660} at={k.so} size={72}>{TERM_N}<span style={{fontSize: 44, color: POS}}>    (n ≥ 1)</span></Framed>
				<Hand x={96} y={800} at={k.one + 20} size={42} color={POS}>also written T<Sb>n</Sb></Hand>
				<Hand x={1000} y={676} at={k.so + 30} size={46} color={AMBER} w={840}>the first term has no multiplication yet, so the power is n − 1</Hand>
			</div> : null}
			{two > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: two}}>
				<Framed x={96} y={170} at={-30} size={52}>{TERM_N}</Framed>
				<LiveReadoutBoard x={96} y={300} width={500} at={-30} inline size={50} labelSize={30} rows={[
					{label: 'folds', value: n, digits: 0, role: 'inner'},
					{label: 'term n', value: n + 1, digits: 0, role: 'inner'},
					{label: 'thickness', value: thick(n), text: fmtThick(thick(n)), role: 'a'},
				]} />
				<FoldRig x={96} base={910} w={400} folds={folds} swapAt={k.after + 6} stackX={520} stackW={90} maxH={260} />
				<ThickRuler R={R4} mm={thick(folds)} landmarks={[{mm: MOON_MM, plate: MOON, plateW: 150, lines: ['the Moon:', 'about 384 000 km'], at: k.times}]} />
				<Row x={1100} y={470} at={k.unfolded} size={52}><span style={{color: BLUE}}>a₁</span> = 0.1 mm  <span style={{color: POS, fontSize: 36}}>(unfolded)</span></Row>
				<Row x={1100} y={548} at={k.f43} size={52}>42 folds:  <span style={{color: BLUE}}>a₄₃</span><span style={{opacity: prog(fr, k.times, 10)}}> = 0.1 × 2<Pow>42</Pow> mm</span></Row>
				<Row x={1100} y={632} at={k.two42} size={44} color={POS}>2<Pow>42</Pow> ≈ 4.4 × 10<Pow>12</Pow><span style={{opacity: prog(fr, k.trillion, 10)}}>  (over 4 trillion)</span></Row>
				<AnswerBox x={1100} y={712} at={k.km - 70} size={60}>≈ 440 000 km</AnswerBox>
				<Chip x={1100} y={840} at={k.thats} size={40} color={GREEN}>42 doublings: that is why  ✓</Chip>
			</div> : null}
		</>
	);
};

// ---------- 5. an exponential function of n ----------
const r5 = (fr: number) => {
	const k = K5;
	if (fr < k.between - 10) return 2;
	if (fr < k.when - 10) return 2 - 1.5 * smooth(clamp01((fr - (k.between - 10)) / (k.fall - 10 - (k.between - 10))));
	return 0.5 - 2.5 * smooth(clamp01((fr - (k.when - 10)) / (k.signs - (k.when - 10))));
};
const WIN5 = [
	{frame: 0, y: [0, 105]}, {frame: K5.between - 10, y: [0, 105]}, {frame: K5.fall - 10, y: [-0.3, 3.5]}, {frame: K5.when - 10, y: [-0.3, 3.5]}, {frame: K5.signs, y: [-105, 60]},
] as const;
const ticks5 = (y0: number, y1: number) => {
	const span = y1 - y0, step = span > 130 ? 40 : span > 50 ? 20 : span > 20 ? 10 : span > 8 ? 2 : 1;
	const out: {value: number; label: string}[] = [];
	for (let v = Math.ceil(y0 / step) * step; v <= y1; v += step) if (v !== 0) out.push({value: v, label: String(v).replace('-', '−')});
	return out;
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const r = awayFromZero(Math.round(r5(fr) * 100) / 100);
	const y0 = kf(fr, WIN5.map(w => [w.frame, w.y[0]] as const)), y1 = kf(fr, WIN5.map(w => [w.frame, w.y[1]] as const));
	const txt = (size: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill} as React.CSSProperties);
	const extra = (m: PlotMap) => {
		const o = 1 - prog(fr, k.pos - 10, 12);
		if (o <= 0.01) return null;
		const [ax0, ay0] = m.p(0.4, 1.2), [ax1, ay1] = m.p(6.4, 19.2);
		return <g opacity={o}>
			<path d={`M${ax0},${ay0} L${ax1},${ay1}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={prog(fr, k.line - 20, 14)} />
			{[2, 3, 4, 5, 6].map(j => {const [x0, ya] = m.p(j - 1, gp(3, 2)(j - 1)), [x1, yb] = m.p(j, gp(3, 2)(j)); const p = prog(fr, k.jump + (j - 2) * 10, 10); return <g key={j} opacity={p}>
				<path d={`M${x0 + 13},${ya} H${x1} V${ya + (yb - ya) * p + (j > 3 && p >= 1 ? 13 : 0)}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" strokeLinejoin="round" />
				{j >= 4 ? <text x={x1 + 18} y={(ya + yb) / 2 + 12} style={txt(34, POS)} stroke={CARD} strokeWidth={8} paintOrder="stroke">+{gp(3, 2)(j) - gp(3, 2)(j - 1)}</text> : null}
			</g>;})}
		</g>;
	};
	return (
		<>
			<SceneHeading text="An exponential function of n" at={4} size={52} />
			<TermPlot x={40} y={150} width={1220} height={640} window={WIN5.map(w => ({frame: w.frame, x: [0, 6.6] as const, y: [w.y[0], w.y[1]] as const}))} nRange={[1, 6]} at={-30} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={ticks5(y0, y1)} xLabel="n" yLabel="aₙ"
				series={[
					{term: n => (fr < k.pos - 4 ? 3 * n : NaN), color: POS, at: k.an, stagger: 8},
					{term: n => 3 * r ** (n - 1), color: BLUE, at: k.plot, stagger: 20},
				]} guide={{fn: x => 1.5 * 2 ** x, at: k.curve - 20, out: k.pos - 10, color: BLUE}}>{extra}</TermPlot>
			<RSlider x={220} y={872} w={620} r={r} at={k.pos - 20} />
			<Hand x={1300} y={160} at={-30} size={38} color={POS}>the terms (a = 3):</Hand>
			<Ladder x={1300} y={210} cardW={88} h={72} gap={8} size={fr >= k.between - 10 ? 26 : 36} values={[1, 2, 3, 4, 5, 6].map(i => {const v = 3 * r ** (i - 1); return String(Number(v.toFixed(Math.abs(v) >= 10 ? 1 : 2))).replace('-', '−');})} dropAt={-30} />
			<Hand x={1300} y={320} at={k.an} out={k.pos - 10} size={42} color={POS} w={540}>arithmetic 3, 6, 9, …: the same step, a straight line</Hand>
			<Hand x={1300} y={436} at={k.jump} out={k.pos - 10} size={42} color={BLUE} w={540}>geometric 3, 6, 12, …: each jump is bigger than the last</Hand>
			<Row x={1300} y={560} at={k.formula} size={56}><span style={{color: BLUE}}>a<Sb>n</Sb></span> = 3 × 2<Pow><MarkSpan kind="circle" at={k.power} color={AMBER_STROKE} width={5} pad={0.06}>n − 1</MarkSpan></Pow></Row>
			<Hand x={1300} y={650} at={k.expo - 20} size={46} color={AMBER} w={540}>n is in the power: an exponential function of n</Hand>
			<Hand x={1300} y={320} at={k.fall - 40} size={44} color={BLUE} w={540}>{'a > 0 and 0 < r < 1: the points fall towards 0'}</Hand>
			<Hand x={1300} y={436} at={k.signs} size={44} color={BLUE} w={540}>r &lt; 0: the points jump from one side of the axis to the other</Hand>
			<Hand x={1300} y={770} at={k.withr} size={40} color={POS} w={540}>r &gt; 0: the points sit on an exponential curve</Hand>
		</>
	);
};
export {FONT_HAND, INK, vis};
