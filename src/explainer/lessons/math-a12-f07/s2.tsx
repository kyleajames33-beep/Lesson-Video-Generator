// Scenes 6 to 9: the limiting sum of 12 + 4 + 4/3 + … (r = ⅓, S∞ = 18), a zigzag (8 − 4 + 2 − …: r = −½,
// S∞ = 16/3), a repeating decimal (0.2727… = 27/99 = 3/11) and the memory aid (shrinking ratio, settling sum).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {BounceRig, TermPlot} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {SINF} from './s1';
import {AMBER, AnswerBox, BALL, BLUE, BoxCard, FLOOR, Frac, Framed, FramedCard, Hand, POS, Row, Sb, Slip, SlipLine, TEAL, Task, gpSum} from './parts';

const Givens: React.FC<{y: number; w?: number; lines: readonly {node: React.ReactNode; at: number}[]}> = ({y, w = 560, lines}) => {
	const fr = useCurrentFrame();
	return <BoxCard x={96} y={y} w={w} at={6} size={44} title="givens">{lines.map((l, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre', opacity: 0.35 + 0.65 * prog(fr, l.at, 10)}}>{l.node}</div>)}</BoxCard>;
};
const COND = <span style={{fontSize: '0.72em', color: AMBER}}>   |r| &lt; 1</span>;

// ---------- 6. worked example: one third ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={44}>Find the limiting sum of 12 + 4 + <Frac n="4" d="3" /> + …</Task>
			<Givens y={316} w={600} lines={[{node: <span style={{color: BLUE}}>a = 12</span>, at: 20}, {node: <span style={{color: AMBER}}>r = 4 ÷ 12 = ⅓</span>, at: k.four}, {node: <span style={{color: AMBER}}>check: <Frac n="4" d="3" /> ÷ 4 = ⅓  ✓</span>, at: k.and}]} />
			<Framed x={760} y={316} at={-30} size={46}>{SINF}{COND}</Framed>
			<BoxCard x={760} y={496} w={560} at={k.size} size={44} title="write this first" edge={AMBER}>
				<div style={{whiteSpace: 'pre', fontWeight: 800}}>|r| = ⅓ &lt; 1, so <span style={{color: TEAL}}>S<Sb>∞</Sb></span> exists</div>
			</BoxCard>
			<BoxCard x={96} y={640} w={600} at={10} out={k.sinf - 8} size={42} title="plan">
				<div>Check |r| &lt; 1 first.</div>
				<div>Then use a ÷ (1 − r).</div>
			</BoxCard>
			<Row x={96} y={636} at={k.sinf} size={48} dim={prog(fr, k.div, 12)} small={42}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="12" d="1 − ⅓" /><span style={{opacity: prog(fr, k.which, 10)}}> = 12 ÷ ⅔</span></Row>
			<Row x={96} y={756} at={k.div} size={50}>{'     '}= 12 × <Frac n="3" d="2" /></Row>
			<AnswerBox x={96} y={890} at={k.ans} size={54}>S<Sb>∞</Sb> = 18</AnswerBox>
			<TermPlot x={1330} y={400} width={560} height={480} window={{x: [0, 6.6], y: [0, 21]}} nRange={[1, 6]} at={-30} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={[6, 12, 18]} xLabel="" yLabel="total of n terms"
				series={[{term: n => gpSum(12, 1 / 3, n), color: TEAL, at: k.find + 60, stagger: 24}]} limitLine={{Y: 18, opacity: prog(fr, k.ans, 12)}} />
			<Slip x={700} y={700} at={k.ans + 20} size={40} caption="1 − r, not 1 + r">12 ÷ (1 + ⅓) = 9</Slip>
		</>
	);
};

// ---------- 7. worked example: a zigzag ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const at = [k.e8, k.four, k.six, k.five, k.fh, k.jumping + 20, k.jumping + 40, k.closing];
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Find the limiting sum of 8 − 4 + 2 − 1 + …</Task>
			<Givens y={270} w={640} lines={[{node: <span style={{color: BLUE}}>a = 8</span>, at: k.take}, {node: <span style={{color: AMBER}}>r = −4 ÷ 8 = −½</span>, at: k.here}, {node: <span style={{color: AMBER}}>|r| = ½ &lt; 1: S<Sb>∞</Sb> exists</span>, at: k.here + 40}]} />
			<BoxCard x={96} y={540} w={640} at={10} out={k.sinf - 8} size={42} title="plan">
				<div>Check |r| &lt; 1.</div>
				<div>Take care with 1 − (−½).</div>
			</BoxCard>
			<TermPlot x={800} y={280} width={1080} height={470} window={{x: [0, 8.8], y: [3, 9]}} nRange={[1, 8]} at={-30} xTicks={[1, 2, 3, 4, 5, 6, 7, 8]} yTicks={[4, 5, 6, 7, 8]} xLabel="n" yLabel="total of n terms"
				series={at.map((a, i) => ({term: (n: number) => (n === i + 1 ? gpSum(8, -0.5, n) : NaN), color: TEAL, at: a, stagger: 0, labels: i < 5 ? {at: a + 6, text: (_n: number, v: number) => String(v).replace('.5', '½')} : undefined}))}
				limitLine={{Y: 16 / 3, label: '16/3', opacity: prog(fr, k.sixteen, 12)}} />
			<Hand x={840} y={850} at={k.jumping} size={42} color={POS}>above and below one value, closing in</Hand>
			<Row x={96} y={520} at={k.sinf} size={48} dim={prog(fr, k.thats, 12)} small={42}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="8" d="1 − (−½)" /></Row>
			<Row x={96} y={650} at={k.thats} size={48}>{'     '}= 8 ÷ <Frac n="3" d="2" /></Row>
			<AnswerBox x={96} y={770} at={k.sixteen} size={52}>S<Sb>∞</Sb> = <Frac n="16" d="3" /><span style={{color: POS, fontSize: 36, opacity: prog(fr, k.about, 10)}}>  ≈ 5.33</span></AnswerBox>
			<Hand x={840} y={920} at={k.adds} size={40} color={AMBER}>a &gt; 0 and the bottom is more than 1, so S<Sb>∞</Sb> is smaller than a</Hand>
		</>
	);
};

// ---------- 8. worked example: a repeating decimal ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const blk = (t: string, at: number) => <span style={{opacity: prog(fr, at, 10), display: 'inline-block', margin: '0 18px 0 0', padding: '2px 16px', borderRadius: 12, border: `3.5px solid ${BLUE}`, color: BLUE}}>{t}</span>;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Write 0.272727… as a fraction.</Task>
			<div style={{position: 'absolute', left: 96, top: 270, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 96, color: INK}}>0.272727…</div>
			<div style={{position: 'absolute', left: 760, top: 286, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, whiteSpace: 'pre'}}>{blk('0.27', k.is)}{blk('0.0027', k.plus)}{blk('0.000027', k.plus + 30)}<span style={{opacity: prog(fr, k.plus + 50, 10), color: POS}}>…</span></div>
			<BoxCard x={760} y={410} w={900} at={10} out={k.plus + 48} size={42} title="plan">
				<div>Split the decimal into its repeating pieces.</div>
				<div>They form a geometric series: read a and r.</div>
			</BoxCard>
			<Row x={760} y={390} at={k.plus + 60} size={44}><Frac n="27" d="100" /> + <Frac n="27" d="10 000" /> + <Frac n="27" d="1 000 000" /> + …</Row>
			<Givens y={430} w={560} lines={[{node: <span style={{color: BLUE}}>a = <Frac n="27" d="100" /></span>, at: k.is}, {node: <span style={{color: AMBER}}>r = <Frac n="1" d="100" />,   |r| &lt; 1</span>, at: k.hundredth}]} />
			<Row x={760} y={540} at={k.then} size={46} dim={prog(fr, k.cancel, 12)} small={40}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="27" d="100" /> ÷ (1 − <Frac n="1" d="100" />)</Row>
			<Row x={760} y={670} at={k.over} size={46}>{'     '}= <Frac n="27" d="100" /> ÷ <Frac n="99" d="100" /><span style={{opacity: prog(fr, k.leaving, 10)}}> = <Frac n="27" d="99" /></span></Row>
			<AnswerBox x={760} y={810} at={k.el} size={52}><Frac n="3" d="11" /></AnswerBox>
			<Row x={1000} y={836} at={k.check} size={42} color={POS}>check: 3 ÷ 11 = 0.272727…<span style={{opacity: prog(fr, k.rep, 10)}}>  ✓</span></Row>
			<Hand x={96} y={760} at={k.each} size={42} color={AMBER} w={600}>each piece is one hundredth of the one before</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const AID7 = ['Shrinking ratio, settling sum.'];
/** `line` draws the floor as an ink line (it ends 120 px past the last bounce, so it stays inside a card). */
export const AidBounce: React.FC<{x: number; floorY: number; unit: number; spacing: number; line?: boolean}> = ({x, floorY, unit, spacing, line = false}) => (
	<BounceRig x={x} floorY={floorY} unit={unit} peaks={[128, 64, 32, 16, 8, 4, 2, 1]} t={7.99} spacing={spacing} ball={{plate: BALL, w: 46}} floor={line ? undefined : {plate: FLOOR, h: 30}} at={-30} />
);
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.1});
	return (
		<>
			<FramedCard x={200} y={140} w={1520} h={800} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 164}}>Memory aid</div>
			<AidBounce x={390} floorY={640} unit={2.6} spacing={300} line />
			<div style={{...hand(46, POS), left: 280, top: 690, opacity: prog(fr, k.terms, 12)}}>the bounces shrink, so the total settles</div>
			<div style={{...hand(96), left: 1010, top: 300, opacity: prog(fr, k.shrinking, 12)}}>{'Shrinking ratio,'}</div>
			<div style={{...hand(96, TEAL), left: 1010, top: 420, opacity: prog(fr, k.settling, 12)}}>settling sum.</div>
			<div style={{position: 'absolute', left: 1010, top: 720, opacity: prog(fr, k.and, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, whiteSpace: 'pre'}}><span style={{color: AMBER}}>|r| &lt; 1:</span>   <span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="a" d="1 − r" /></div>
		</>
	);
};
export {SlipLine};
