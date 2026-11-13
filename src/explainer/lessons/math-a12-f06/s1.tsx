// Scenes 1 to 5a: the rice board (f05's final frame) and the clue (each total is the next square's pile less one;
// ten squares would hold 1023), the expansion with numbers ((2 − 1)(1 + 2 + 4 + 8): the doubled row slides one
// square along, the middle piles cancel, 16 − 1 is left), the same proof for any x, Sₙ from the identity (r ≠ 1; na
// when r = 1), the two forms (which one keeps both brackets positive) and the whole board (2⁶⁴ − 1 grains).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {BigNumberCard, FrameSvg, Pow, SceneHeading, ShiftCancelRows, smooth, vis} from '../../math/studio';
import type {ShiftTerm} from '../../math/studio';
import {B, F05FinalFrame, RiceScene, ST, ZS} from '../math-a12-f05/s3';
import {K1, K2, K3, K4, K5, K5A} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BLUE_SOFT, BOARD_TOTAL, BROWN, BoxCard, Chip, Frac, Framed, GREEN, GrainBoard, GrainStrip, Hand, MiniLadder, POS, ReadStrip, Row, Sb, SlipLine, TEAL, ValueSlider, boardHeight, stripSize} from './parts';
import type {Pile} from './parts';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 1. hook: one less than a power ----------
const SQW = ZS.w / 5;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const tagAt = (i: number) => (i < 4 ? k.each + 20 + i * 22 : k.t31);
	const six = 32 * prog(fr, k.t31 - 16, 26);
	const n = 5 + 5 * clamp01((fr - k.ten) / (k.hold + 70 - k.ten)), nn = Math.floor(n + 1e-6);
	const colX = (j: number) => ST.x + j * (ST.blockW + ST.gap);
	return (
		<>
			<SceneHeading text="How does expansion produce the finite geometric-sum formula?" at={34} size={40} />
			{fr >= 1 ? <RiceScene bare head={-300} grains={fr >= k.t31 - 16 ? [1, 2, 4, 8, 16, six] : [1, 2, 4, 8, 16]} arcs={[1, 1, 1, 1]} build={[-300, -300, -300, -300, -300]} chip={-300} next={-300} q={-300} /> : null}
			{fr >= k.ten ? <GrainBoard x={B.x} y={B.y} w={B.w} filled={n} /> : null}
			<Hand x={ZS.x} y={158} at={16} size={38} color={POS}>the first squares, enlarged</Hand>
			<Hand x={ST.x} y={560} at={16} out={k.power - 10} size={46} color={TEAL}>running totals</Hand>
			<Hand x={ST.x} y={548} at={k.power} size={44} color={AMBER}>total so far = next square − 1</Hand>
			<FrameSvg>
				{[0, 1, 2, 3, 4].map(i => {const a = tagAt(i), o = prog(fr, a, 12); if (o <= 0.01) return null; const total = 2 ** (i + 1) - 1, top = ST.base - total * ST.unit; return <g key={i} opacity={o}>
					<rect x={colX(i)} y={top - ST.unit} width={ST.blockW} height={ST.unit} fill="none" stroke={AMBER_STROKE} strokeWidth={3} strokeDasharray="7 5" />
					<text x={colX(i) + ST.blockW / 2} y={ST.base + 92} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: POS}}>{2 ** (i + 1)} − 1</text>
					<rect x={ZS.x + (i + 1) * SQW + 5} y={ZS.y + 5} width={SQW - 10} height={stripSize(5, SQW).h - 10} rx={8} fill="none" stroke={AMBER_STROKE} strokeWidth={7} opacity={vis(fr, a, a + 50, 10)} />
				</g>;})}
			</FrameSvg>
			<ReadStrip x={1010} y={76} at={k.ten - 10} cells={[
				{label: 'square', value: String(nn)},
				{label: 'grains on it', value: String(2 ** (nn - 1)), color: BLUE},
				{label: 'total so far', value: nn >= 10 ? '1023 ?' : String(2 ** nn - 1), color: nn >= 10 ? POS : TEAL},
			]} />
			<Chip x={96} y={850} at={k.but} size={44} color={BROWN}>a pattern is not a proof</Chip>
			<Hand x={620} y={856} at={k.why} size={52} color={BROWN}>Why?</Hand>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F05FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. expanding with numbers ----------
const G2 = {x: 96, sq: 170};
const T2: ShiftTerm[] = [1, 2, 4, 8].map(v => ({key: v, display: String(v), sign: -1 as const}));
const D2: ShiftTerm[] = [2, 4, 8, 16].map(v => ({key: v, display: String(v), sign: 1 as const}));
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const dbl = smooth(prog(fr, k.doubling, 50)), slide = smooth(clamp01((fr - k.slides) / (k.along + 24 - k.slides)));
	const gone = (i: number) => prog(fr, k.cancel + (i - 1) * 16, 14);
	const surv = vis(fr, k.only, undefined, 12);
	const minus = prog(fr, k.minus, 14);
	const top: Pile[] = [0, 1, 2, 3].map(i => ({pos: i, count: 2 ** i, of: 2 ** i, tone: minus > 0.5 ? 'grey' as const : 'blue' as const, o: i >= 1 ? 1 - gone(i) : 1, glow: i === 0 ? surv : 0}));
	const bot: Pile[] = [0, 1, 2, 3].map(i => ({pos: i + slide, count: 2 ** i * (1 + dbl), of: 2 ** (i + 1), tone: 'amber' as const, o: i <= 2 ? 1 - gone(i + 1) : 1, glow: i === 3 ? surv : 0}));
	const h = stripSize(5, G2.sq).h;
	const second = prog(fr, k.twice - 10, 14);
	return (
		<>
			<SceneHeading text="Expanding with numbers" at={4} size={52} />
			<Hand x={G2.x} y={176} at={-30} size={40} color={minus > 0.5 ? POS : BLUE}>{minus > 0.5 ? '−1 × the row: take it away' : 'the row: 1 + 2 + 4 + 8'}</Hand>
			<GrainStrip x={G2.x} y={226} n={5} sq={G2.sq} piles={top} labels={[0, 1, 2, 3].map(i => ({i, text: (minus > 0.5 ? '−' : '') + 2 ** i, color: minus > 0.5 ? POS : BLUE, o: i >= 1 ? 1 - gone(i) : 1}))} />
			<Hand x={G2.x} y={226 + h + 70} at={k.twice - 10} size={40} color={AMBER}>{slide > 0.5 ? '2 × the row: the same piles, one square along' : '2 × the row: every pile doubles'}</Hand>
			<GrainStrip x={G2.x} y={226 + h + 120} n={5} sq={G2.sq} piles={bot} o={second} labels={[0, 1, 2, 3].map(i => ({i: i + slide, text: String(Math.round(2 ** i * (1 + dbl))), color: AMBER, o: i <= 2 ? 1 - gone(i + 1) : 1}))} />
			<BoxCard x={G2.x} y={226 + h + 110} w={850} at={-30} out={k.twice - 16} size={42} title="plan">
				<div>Multiply the sum by (2 − 1), which is 1.</div>
				<div>Expand and see what cancels.</div>
			</BoxCard>
			<Row x={1010} y={176} at={k.take} size={54}>(2 − 1)(1 + 2 + 4 + 8)</Row>
			<Hand x={1010} y={254} at={k.just} size={42} color={POS}>2 − 1 = 1, so this is the sum itself</Hand>
			<ShiftCancelRows x={1010} y={380} colW={132} rowGap={120} columns={[1, 2, 4, 8, 16]} top={T2} bottom={D2} enterAt={[k.m1, k.gives]} alignAt={k.line} strike={{all: true, at: k.cancel, stagger: 16}} survivorsAt={k.only} labels={['−1 ×', '2 ×']} check={{value: t => t.sign * Number(t.key), result: 15}} size={52} />
			<Hand x={1010} y={640} at={k.along} size={42} color={AMBER}>× 2 = shift one square along</Hand>
			<AnswerBox x={1010} y={730} at={k.so} size={50}>1 + 2 + 4 + 8 = 16 − 1<span style={{opacity: prog(fr, k.last, 10)}}> = 15</span></AnswerBox>
		</>
	);
};

// ---------- 3. the proof for any x ----------
const X = (p: React.ReactNode) => <>x<Pow>{p}</Pow></>;
const T3: ShiftTerm[] = [{key: 'n1', display: X('n − 1'), sign: -1}, {key: 'd', display: '…', sign: -1}, {key: '2', display: X('2'), sign: -1}, {key: '1', display: 'x', sign: -1}, {key: '0', display: '1', sign: -1}];
const D3: ShiftTerm[] = [{key: 'n', display: X('n'), sign: 1}, {key: 'n1', display: X('n − 1'), sign: 1}, {key: 'd', display: '…', sign: 1}, {key: '2', display: X('2'), sign: 1}, {key: '1', display: 'x', sign: 1}];
export const IDENTITY = <>(x − 1)(x<Pow>n − 1</Pow> + x<Pow>n − 2</Pow> + … + x + 1) = x<Pow>n</Pow> − 1</>;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	return (
		<>
			<SceneHeading text="The proof for any x" at={4} size={52} />
			<Chip x={1010} y={84} at={-30} size={34} color={POS}>with numbers: (2 − 1)(1 + 2 + 4 + 8) = 16 − 1</Chip>
			<GrainStrip x={1360} y={150} n={5} sq={100} piles={[{pos: 0, count: 1, of: 1, tone: 'grey', glow: 1}]} />
			<GrainStrip x={1360} y={150 + stripSize(5, 100).h + 12} n={5} sq={100} piles={[{pos: 4, count: 16, of: 16, tone: 'amber', glow: 1}]} />
			<Row x={96} y={190} at={k.take} size={60}>(x − 1)<span style={{opacity: prog(fr, k.times, 12)}}>(x<Pow>n − 1</Pow> + x<Pow>n − 2</Pow> + … + x + 1)</span></Row>
			<BoxCard x={96} y={330} w={1100} at={10} out={k.mult - 10} size={42} title="plan">
				<div>Expand, as with the numbers: x times the bracket,</div>
				<div>then −1 times the bracket. Line up equal powers.</div>
			</BoxCard>
			<ShiftCancelRows x={96} y={392} colW={210} rowGap={150} columns={['n', 'n1', 'd', '2', '1', '0']} top={T3} bottom={D3} enterAt={[k.by + 20, k.mult + 20]} alignAt={k.same + 50} strike={{all: true, at: k.minus, stagger: 12}} survivorsAt={k.left} labels={['−1 ×', 'x ×']} size={64} />
			<Hand x={1500} y={540} at={k.raises} size={44} color={AMBER} w={380}>× x raises every power by one</Hand>
			<Hand x={1500} y={392} at={k.same} size={44} color={POS} w={380}>the same powers, all negative</Hand>
			<Hand x={96} y={696} at={k.every} size={46} color={POS}>every power from x to x<Pow>n − 1</Pow>: once with +, once with −</Hand>
			<Framed x={96} y={780} at={k.left} size={56}>{IDENTITY}</Framed>
			<Hand x={1300} y={780} at={k.true} size={46} color={POS}>for whole numbers n ≥ 1</Hand>
			<Chip x={1300} y={850} at={k.upward - 50} size={36} color={BROWN}>check n = 1:  (x − 1)(1) = x − 1</Chip>
		</>
	);
};

// ---------- 4. from the proof to Sₙ ----------
const R = ({children}: {children: React.ReactNode}) => <span style={{color: AMBER}}>{children}</span>;
export const SN_A = <><span style={{color: TEAL}}>S<Sb>n</Sb></span> = <Frac n={<>a(r<Pow>n</Pow> − 1)</>} d="r − 1" /></>;
export const SN_B = <><span style={{color: TEAL}}>S<Sb>n</Sb></span> = <Frac n={<>a(1 − r<Pow>n</Pow>)</>} d="1 − r" /></>;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const sw = prog(fr, k.place - 10, 16);
	return (
		<>
			<SceneHeading text="From the proof to the sum" at={4} size={52} />
			<BoxCard x={1040} y={150} w={820} at={-30} size={42} title={sw > 0.5 ? 'the identity, with r in place of x' : 'the identity we proved'}>
				<div style={{whiteSpace: 'pre', position: 'relative', height: 70, marginTop: 20}}>
					<span style={{position: 'absolute', opacity: 1 - sw}}>(x − 1)(x<Pow>n − 1</Pow> + … + x + 1) = x<Pow>n</Pow> − 1</span>
					<span style={{position: 'absolute', opacity: sw}}>(<R>r</R> − 1)(<R>r</R><Pow>n − 1</Pow> + … + <R>r</R> + 1) = <R>r</R><Pow>n</Pow> − 1</span>
				</div>
			</BoxCard>
			<Hand x={1040} y={330} at={-30} size={40} color={POS}>a geometric sequence: n terms</Hand>
			<MiniLadder x={1040} y={386} values={['a', 'ar', 'ar²', '…']} step="×r" color={BLUE} stepColor={AMBER} cardW={130} gap={84} h={84} size={46} />
			<Row x={96} y={190} at={k.sn} size={52} dim={prog(fr, k.so, 12)} small={46}><span style={{color: TEAL}}>S<Sb>n</Sb></span> = a + ar + ar² + … + ar<Pow>n − 1</Pow></Row>
			<Row x={96} y={290} at={k.take} size={52} dim={prog(fr, k.toget, 12)} small={46}>{'     '}= a(1 + r + r² + … + r<Pow>n − 1</Pow>)</Row>
			<Hand x={96} y={390} at={k.exactly} out={k.so - 4} size={44} color={AMBER}>the bracket is the one we expanded, with r for x</Hand>
			<Row x={96} y={400} at={k.so} size={56}>(r − 1)<span style={{color: TEAL}}>S<Sb>n</Sb></span><span style={{opacity: prog(fr, k.is, 10)}}> = a(r<Pow>n</Pow> − 1)</span></Row>
			<Framed x={96} y={530} at={k.divide} size={68}>{SN_A}</Framed>
			<Hand x={620} y={590} at={k.only} size={72} color={AMBER}>r ≠ 1</Hand>
			<SlipLine x={96} y={790} at={k.because} size={42} caption="that would divide by 0">÷ (r − 1) when r = 1</SlipLine>
			<BoxCard x={1040} y={600} w={820} at={k.and} size={46} title="when r = 1">
				<div style={{display: 'flex', gap: 14, alignItems: 'center', margin: '6px 0 8px'}}>{[0, 1, 2, 3, 4].map(i => <div key={i} style={{width: 96, height: 64, borderRadius: 10, background: BLUE_SOFT, border: `4px solid ${BLUE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: BLUE, opacity: prog(fr, k.and + 8 + i * 5, 10)}}>a</div>)}</div>
				<div style={{whiteSpace: 'pre', opacity: prog(fr, k.lots - 20, 10)}}>every term is a:  <span style={{color: TEAL, fontWeight: 800}}>S<Sb>n</Sb> = na</span></div>
			</BoxCard>
			<BoxCard x={96} y={560} w={860} at={10} out={k.divide - 10} size={42} title="plan">
				<div>Write the sum, take out a, and use the identity.</div>
			</BoxCard>
		</>
	);
};

// ---------- 5. two forms of the same formula ----------
const N5 = 4;
const r5 = (fr: number) => Math.round((2 - 1.5 * smooth(clamp01((fr - (K5.between - 10)) / 50))) * 100) / 100;
const T5: ShiftTerm[] = [{key: '0', display: 'a', sign: -1}, {key: '1', display: 'ar', sign: -1}, {key: 'd', display: '…', sign: -1}, {key: 'n1', display: <>ar<Pow>n − 1</Pow></>, sign: -1}];
const D5: ShiftTerm[] = [{key: '1', display: 'ar', sign: 1}, {key: 'd', display: '…', sign: 1}, {key: 'n1', display: <>ar<Pow>n − 1</Pow></>, sign: 1}, {key: 'n', display: <>ar<Pow>n</Pow></>, sign: 1}];
const num = (v: number) => String(Number(v.toFixed(4))).replace('-', '−');
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const r = r5(fr);
	const a1 = r ** N5 - 1, a2 = r - 1, okA = a1 > 0 && a2 > 0, okB = !okA && -a1 > 0 && -a2 > 0;
	const cell = (label: React.ReactNode, v: number) => <div style={{display: 'flex', gap: 14, alignItems: 'baseline', whiteSpace: 'pre'}}><span style={{fontSize: 40, fontWeight: 700}}>{label} =</span><span style={{fontSize: 50, fontWeight: 800, color: v > 0 ? GREEN : POS, fontVariantNumeric: 'tabular-nums'}}>{num(v)}</span></div>;
	const rowStyle = (on: boolean): React.CSSProperties => ({display: 'flex', gap: 46, alignItems: 'baseline', padding: '8px 16px', margin: '0 -16px', borderRadius: 14, background: on ? '#dcefe2' : 'transparent'});
	return (
		<>
			<SceneHeading text="Two forms of the same formula" at={4} size={52} />
			<Framed x={96} y={170} at={-30} size={50}>{SN_A}</Framed>
			<Framed x={640} y={170} at={k.form} size={50}>{SN_B}</Framed>
			<Hand x={470} y={220} at={k.form} size={56} color={INK}>=</Hand>
			<Hand x={1180} y={176} at={k.form + 20} size={40} color={POS} w={700}>the syllabus form (top and bottom × −1)</Hand>
			<Hand x={1180} y={280} at={k.both} size={42} color={TEAL} w={700}>both give the same value (r ≠ 1)</Hand>
			<BoxCard x={96} y={390} w={1000} at={-30} size={40} title={`the brackets when n = ${N5}`}>
				<div style={rowStyle(okA)}><span style={{width: 250, fontWeight: 800, color: AMBER}}>r − 1 form:</span>{cell(<>r<Pow>n</Pow> − 1</>, a1)}{cell('r − 1', a2)}</div>
				<div style={rowStyle(okB)}><span style={{width: 250, fontWeight: 800, color: AMBER}}>1 − r form:</span>{cell(<>1 − r<Pow>n</Pow></>, -a1)}{cell('1 − r', -a2)}</div>
			</BoxCard>
			<Hand x={1140} y={440} at={k.pos - 30} out={k.between - 6} size={52} color={AMBER} w={700}>r &gt; 1: the r − 1 form keeps both brackets positive</Hand>
			<Hand x={1140} y={440} at={k.does - 30} out={k.some - 6} size={52} color={AMBER} w={700}>−1 &lt; r &lt; 1: the 1 − r form does</Hand>
			<ValueSlider x={240} y={720} w={640} value={r} min={-1} max={3} ticks={[-1, 0, 2, 3]} excluded={1} at={-30} out={k.some - 6} />
			{fr >= k.some - 6 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.some, 14)}}>
				<Hand x={96} y={640} at={-30} size={44} color={POS}>some books: multiply S<Sb>n</Sb> by r, then subtract</Hand>
				<ShiftCancelRows x={96} y={720} colW={200} rowGap={100} columns={['0', '1', 'd', 'n1', 'n']} top={T5} bottom={D5} enterAt={[k.some + 10, k.by]} alignAt={k.sub} strike={{all: true, at: k.same, stagger: 8}} survivorsAt={k.row - 30} labels={[<>−S<Sb>n</Sb> =</>, <>rS<Sb>n</Sb> =</>]} size={48} />
				<Hand x={1280} y={740} at={k.same} size={50} color={AMBER} w={560}>the same shift and cancel, done row by row</Hand>
			</div> : null}
		</>
	);
};

// ---------- 5a. the whole chessboard ----------
const W5 = 760;
export const S05A: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5A;
	const filled = 64 * clamp01((fr - k.here) / (k.total + 80 - k.here)), n = Math.max(1, Math.min(64, Math.ceil(filled)));
	const pow = (e: number, minus = false) => (e <= 16 ? String(2 ** e - (minus ? 1 : 0)) : <>2<Pow>{e}</Pow>{minus ? ' − 1' : ''}</>);
	return (
		<>
			<GrainBoard x={96} y={150} w={W5} filled={filled} glow={{i: 63, o: prog(fr, k.last, 14)}} teal={{upTo: 63, o: prog(fr, k.last + 20, 14)}} />
			<Hand x={900} y={84} at={2} size={56} color={INK}>How much rice is on the whole board?</Hand>
			<Chip x={900} y={176} at={k.here} size={44} color={BLUE}>a = 1,  r = 2,  n = 64</Chip>
			<ReadStrip x={900} y={270} at={k.here} cells={[{label: 'square', value: String(n)}, {label: 'grains on it', value: pow(n - 1), color: BLUE}, {label: 'total', value: pow(n, true), color: TEAL}]} />
			<Row x={900} y={380} at={k.total} size={50}><span style={{color: TEAL}}>S₆₄</span> = <Frac n={<>1 × (2<Pow>64</Pow> − 1)</>} d="2 − 1" /> = 2<Pow>64</Pow> − 1</Row>
			<BigNumberCard x={900} y={520} w={940} label="grains on the whole board" value={BOARD_TOTAL} role="b" at={k.thats} maxSize={64} />
			<Row x={900} y={670} at={k.grains - 30} size={42} color={POS}>≈ 1.8 × 10<Pow>19</Pow>  (about eighteen billion billion)</Row>
			<Hand x={900} y={740} at={k.which} size={46} color={AMBER}>hundreds of years of the world's rice harvest</Hand>
			<Row x={900} y={820} at={k.last + 20} size={46}>last square: 2<Pow>63</Pow>   <span style={{color: POS}}>all the others: 2<Pow>63</Pow> − 1</span></Row>
			<Hand x={900} y={890} at={k.all} size={46} color={AMBER}>the last square alone holds more</Hand>
		</>
	);
};
export {boardHeight};
