// Scenes 1 to 4: the tin pyramid (f02's final frame) and the risky row-by-row tally; pairing and the flip-and-fit
// (every row holds 16, 15 × 16 = 240, the pyramid is half: 120); forwards and backwards for any AP (each column is
// a + aₙ); the second form, tested on the pyramid (120) and on 1 + … + 50 (1275).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {CARD, LiveReadoutBoard, SceneHeading, smooth, vis} from '../../math/studio';
import {F02FinalFrame} from '../math-a12-f02/s3';
import {K1, K2, K3, K4} from './cuemap';
import {AMBER, AnswerBox, Arcs, BLUE, BROWN, BoxCard, Chip, GREEN, Hand, Ladder, POS, RED, Row, Slip, TEAL, TH, TinFlip, VIOLET, mix, rowBox} from './parts';

const B0 = {bx: 960, by: 880};
/** A framed formula (ink double rule). */
export const Framed: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 56, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, border: `5px solid ${INK}`, borderRadius: 18, padding: '6px 28px 10px', boxShadow: `inset 0 0 0 5px ${CARD}, inset 0 0 0 7px ${INK}, 0 12px 26px rgba(60,45,20,0.12)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>;
};
export const FORM1 = <><span style={{color: TEAL}}>Sₙ</span> = (n/2)(<span style={{color: BLUE}}>a</span> + <span style={{color: BLUE}}>aₙ</span>)</>;
export const FORM2 = <><span style={{color: TEAL}}>Sₙ</span> = (n/2)[2<span style={{color: BLUE}}>a</span> + (n − 1)<span style={{color: AMBER}}>d</span>]</>;

// ---------- 1. hook ----------
const tallyAt = (k: typeof K1, r: number) => k.adding + 6 * r + 0.6 * r * r;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const f02 = 1 - prog(fr, 22, 16);
	const lit = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(r => fr >= tallyAt(k, r)).length;
	return (
		<>
			<SceneHeading text="Why do arithmetic partial-sum formulas work?" at={40} size={48} />
			<TinFlip {...B0} glow={r => (r <= lit ? 1 : 0)} />
			<Row x={96} y={250} at={-30} size={52}>1 + 2 + 3 + … + 15 = ?</Row>
			<Hand x={96} y={330} at={-30} out={k.time} size={40} color={POS}>tins in rows 1 to 15</Hand>
			<LiveReadoutBoard x={1400} y={400} width={440} at={k.time - 30} inline size={52} labelSize={30} rows={[
				{label: 'rows added', value: lit, digits: 0, role: 'inner'},
				{label: 'tins so far', value: (lit * (lit + 1)) / 2, digits: 0, role: 'b'},
			]} />
			<Slip x={1520} y={600} at={k.slip - 6} size={44} caption="easy to slip">… 45, 54?</Slip>
			<Chip x={96} y={420} at={k.line} size={46} color={BROWN}>a trick?</Chip>
			<Chip x={96} y={530} at={k.so} size={38} color={BROWN}>{'Why does it work?\nEvery AP?'}</Chip>
			{f02 > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: f02}}><F02FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. pairing: flip and fit ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const zoom = smooth(prog(fr, k.copy - 14, 26)) * (1 - smooth(prog(fr, k.pyr + 34, 30)));
	const S = 1 - 0.26 * zoom;
	const bx = mix(960, 676, zoom), by = mix(880, 772, zoom);
	const copyO = prog(fr, k.copy, 10) * (1 - prog(fr, k.pyr + 22, 14));
	const copy = {o: copyO, lift: smooth(prog(fr, k.copy, 14)) * (1 - smooth(prog(fr, k.fit, 20))), rot: smooth(prog(fr, k.turn, 32)), slide: smooth(prog(fr, k.fit, 28)) * (1 - smooth(prog(fr, k.pyr, 24)))};
	const g = (r: number) => {
		const pairs: [number, number, number][] = [[1, k.pair, k.heres], [15, k.pair, k.heres], [2, k.now, k.heres], [14, k.now, k.heres], [3, k.down + 20, k.heres], [13, k.down + 20, k.heres]];
		return pairs.reduce((m, [row, a, b]) => (row === r ? Math.max(m, vis(fr, a, b, 10)) : m), 0);
	};
	const r3 = rowBox(960, 880, 1, 3), r13 = rowBox(960, 880, 1, 13);
	return (
		<>
			<SceneHeading text="Pair the rows" at={4} size={52} />
			<TinFlip bx={bx} by={by} S={S} glow={g} labels={1 - zoom} base={1 - zoom} copy={copy} readouts={{at: k.row, stagger: 3, size: 26, out: k.pyr}} ring={{row: 4, o: vis(fr, k.row + 50, k.pyr, 12)}}
				arcs={[{a: 1, b: 15, o: vis(fr, k.pair + 10, k.heres, 12)}, {a: 2, b: 14, o: vis(fr, k.now + 10, k.heres, 12)}, {a: 3, b: 13, o: vis(fr, k.down + 20, k.heres, 12)}]} />
			{fr < k.t120 ? <Row x={96} y={250} at={-30} out={k.t120 - 8} size={52}>1 + 2 + 3 + … + 15 = ?</Row> : null}
			{/* Probe check 13 Nov: the pair sums sit in a dense paper halo, so the pairing arcs pass behind them */}
			<div className="rp-pad" style={{textShadow: [1, 2, 3, 4, 6, 8, 11, 14].map(r => `0 0 ${r}px #fffdf8`).join(', ')}}><style>{'.rp-pad span, .rp-pad > div:not([style*="inset"]){background-color:#f7f3eb;border-radius:8px;box-shadow:0 0 5px 3px #f7f3eb}'}</style>
			<Row x={96} y={400} at={k.s1} out={k.copy - 10} size={52} color={TEAL}>1 + 15 = 16</Row>
			<Row x={96} y={480} at={k.s2} out={k.copy - 10} size={52} color={TEAL}>2 + 14 = 16</Row>
			<Row x={96} y={560} at={k.down + 20} out={k.copy - 10} size={52} color={TEAL}>3 + 13 = 16</Row>
			</div>
			<Hand x={r3.x1 + 18} y={r3.y0 - 8} at={k.up} out={k.heres} size={40} color={AMBER}>+1 per row down</Hand>
			<Hand x={r13.x1 + 18} y={r13.y0 - 8} at={k.down} out={k.heres} size={40} color={AMBER}>−1 per row up</Hand>
			<Hand x={1290} y={262} at={k.row + 50} out={k.pyr} size={42} color={INK}>row 4: <span style={{color: BLUE}}>4 blue</span> + <span style={{color: VIOLET}}>12 violet</span> = 16</Hand>
			<Hand x={60} y={786} at={k.fifteen} out={k.pyr} size={42} color={INK}>15 rows</Hand>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: vis(fr, k.fifteen, k.pyr, 12)}}><path d={`M118,352 h-14 V772 h14`} stroke={INK} strokeWidth={4} fill="none" /></svg>
			<Row x={560} y={830} at={k.shape} out={k.pyr + 30} size={56} color={TEAL}>15 × 16 = <span style={{opacity: prog(fr, k.thats, 10)}}>240</span></Row>
			<div style={{position: 'absolute', left: 1320, top: 400, opacity: prog(fr, k.that, 12), border: `5px solid ${TEAL}`, borderRadius: 18, background: CARD, padding: '6px 24px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: TEAL}}>half: 240 ÷ 2 = 120</div>
			<AnswerBox x={96} y={240} at={k.t120} size={52}>1 + 2 + … + 15 = 120</AnswerBox>
		</>
	);
};

// ---------- 3. the general formula ----------
const L3 = {x: 700, cardW: 190, gap: 30};
const TOPV = ['a', 'a + d', 'a + 2d', '…', 'aₙ'];
const BOTV = ['aₙ', 'aₙ − d', 'aₙ − 2d', '…', 'a'];
export const MiniShape: React.FC<{x: number; y: number; S: number; o?: number}> = ({x, y, S, o = 1}) => (
	<TinFlip bx={x + 720 * S} by={y + 15 * TH * S} S={S} labels={0} base={0} copy={{o: 1, lift: 0, rot: 1, slide: 1}} o={o} />
);
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const colX = (i: number) => L3.x + i * (L3.cardW + L3.gap) + L3.cardW / 2;
	return (
		<>
			<SceneHeading text="Any arithmetic sequence: forwards and backwards" at={4} size={48} />
			<MiniShape x={96} y={270} S={0.27} />
			<Hand x={96} y={450} at={0} size={42} color={POS} w={580}>{'the tins: n rows, each row a + aₙ long'}</Hand>
			<div className="rp-pad" style={{textShadow: [1, 2, 3, 4, 6, 8, 11, 14].map(r => `0 0 ${r}px #fffdf8`).join(', ')}}><style>{'.rp-pad span, .rp-pad > div:not([style*="inset"]){background-color:#f7f3eb;border-radius:8px;box-shadow:0 0 5px 3px #f7f3eb}'}</style><Hand x={L3.x} y={250} at={k.write} size={38} color={BLUE}>forwards</Hand></div>
			<Ladder x={L3.x} y={300} cardW={L3.cardW} h={110} gap={L3.gap} size={50} values={TOPV} dropAt={[k.write + 20, k.write + 40, k.write + 60, k.write + 70, k.last + 10]} />
			<div className="rp-pad" style={{textShadow: [1, 2, 3, 4, 6, 8, 11, 14].map(r => `0 0 ${r}px #fffdf8`).join(', ')}}><style>{'.rp-pad span, .rp-pad > div:not([style*="inset"]){background-color:#f7f3eb;border-radius:8px;box-shadow:0 0 5px 3px #f7f3eb}'}</style><Hand x={L3.x} y={600} at={k.back} size={38} color={VIOLET}>backwards</Hand></div>
			<Ladder x={L3.x} y={480} cardW={L3.cardW} h={110} gap={L3.gap} size={50} color={VIOLET} values={BOTV} dropAt={k.back + 6} stagger={10} />
			<Arcs x={L3.x} y={300} cardW={L3.cardW} gap={L3.gap} size={38} arcs={[0, 1, 2, 3].map(i => ({from: i, to: i + 1, label: '+d', at: k.up + i * 6}))} />
			<Arcs x={L3.x} y={480} cardW={L3.cardW} gap={L3.gap} h={110} size={38} arcs={[0, 1, 2, 3].map(i => ({from: i, to: i + 1, label: '−d', at: k.down + i * 6, below: true}))} />
			{[0, 1, 2, 3, 4].map(i => <div key={i} style={{position: 'absolute', left: colX(i) - 100, width: 200, top: 700, textAlign: 'center', opacity: prog(fr, k.n1 + i * 5, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: TEAL}}>a + aₙ</div>)}
			<Row x={L3.x} y={790} at={k.there} size={48}>n columns, each adding to <span style={{color: TEAL}}>a + aₙ</span></Row>
			<BoxCard x={96} y={560} w={560} at={10} out={k.two - 6} size={40} title="the pyramid">
				<div>1 + 2 + … + 15</div>
				<div>every row pairs to 16</div>
			</BoxCard>
			<BoxCard x={L3.x} y={760} w={1060} at={10} out={k.there - 6} size={40} title="plan">
				<div>Write the sum forwards, then backwards underneath.</div>
				<div>Add the two rows, column by column.</div>
			</BoxCard>
			<Row x={96} y={580} at={k.two} size={52} dim={prog(fr, k.halve, 12)} small={40}>2<span style={{color: TEAL}}>Sₙ</span> = n(a + aₙ)</Row>
			<Framed x={96} y={660} at={k.halve + 20} size={52}>{FORM1}</Framed>
			<Hand x={96} y={800} at={k.words} size={42} color={INK} w={560}>average of first and last × number of terms</Hand>
		</>
	);
};

// ---------- 4. the second form ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const PS = 0.5, pb = {bx: 460, by: 940};
	return (
		<>
			<SceneHeading text="The second form" at={4} size={52} />
			<Framed x={96} y={170} at={-30} size={50}>{FORM1}</Framed>
			<Framed x={96} y={290} at={k.d} size={50}>{FORM2}</Framed>
			<Hand x={96} y={410} at={k.use} size={40} color={BLUE}>know the last term: first form</Hand>
			<Hand x={96} y={466} at={k.second} size={40} color={AMBER}>know d: second form</Hand>
			<TinFlip bx={pb.bx} by={pb.by} S={PS} labels={0} glow={r => (r === 15 ? vis(fr, k.again, undefined, 12) : 0)} glowColor="rgba(40,115,71,0.22)" />
			<Row x={860} y={180} at={k.but} size={48} dim={prog(fr, k.so, 12)} small={38}>aₙ = a + (n − 1)d  <span style={{color: POS, fontSize: 32}}>(earlier video)</span></Row>
			<Row x={860} y={262} at={k.swap} size={48} dim={prog(fr, k.so, 12)} small={38}><span style={{color: TEAL}}>Sₙ</span> = (n/2)(a + <span style={{background: '#f8e8c8', borderRadius: 8}}>a + (n − 1)d</span>)</Row>
			<Row x={860} y={344} at={k.bracket} size={52}>{'    '}= (n/2)[2a + (n − 1)d]</Row>
			<Chip x={860} y={470} at={k.test} size={44} color={BLUE}>pyramid: a = 1, d = 1, n = 15</Chip>
			<Row x={860} y={580} at={k.its} size={52}>(15/2)(2 + 14) = 7.5 × 16</Row>
			<Row x={860} y={660} at={k.again} size={56} color={GREEN}>= 120  ✓</Row>
			<Row x={860} y={760} at={k.again + 10} size={36} color={POS}>{'check 1 + 2 + … + 50:\n(50/2)(2 + 49) = 25 × 51 = 1275'}</Row>
		</>
	);
};
export {RED};
