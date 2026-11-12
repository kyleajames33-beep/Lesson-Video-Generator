// Scenes 6 to 10: sigma notation on Team A's runs (the counter dial feeds the rule and flips the scoreboard), a sigma
// that starts at 3 (posts and gaps: 7 − 3 + 1 = 5 terms; the counter's letter), the worked example (site Problem 1,
// g01 layout), from words to sigma (the first ten odd numbers) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, HandText, INK, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, SceneHeading, smooth, vis} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BoxCard, Chip, FramedCard, GREEN, Grass, Hand, Ladder, P1, POS, Posts, RED, RollingBall, Row, Sb, Scoreboard, Sig, SigmaBox, Slip, Stack, TEAL, Task, boardPanels, partials, range, sched, sigmaAnchors} from './parts';

/** A row of term cards joined by plus signs, each with its counter value below (amber); `total` closes the row. */
const SumRow: React.FC<{x: number; y: number; values: readonly number[]; ks?: readonly React.ReactNode[]; at: readonly number[]; w?: number; step?: number; size?: number; counter?: string; total?: {at: number; text: React.ReactNode}; glows?: readonly {i: number; at: number; out?: number}[]}> = ({x, y, values, ks, at, w = 140, step = 190, size = 52, counter = 'k', total, glows = []}) => {
	const f = useCurrentFrame();
	return <>
		{values.map((v, i) => {
			const p = smooth(prog(f, at[i], 12));
			if (p <= 0.001) return null;
			const g = glows.reduce((m, gg) => (gg.i === i ? Math.max(m, vis(f, gg.at, gg.out, 8)) : m), 0);
			return <React.Fragment key={i}>
				{i ? <div style={{position: 'absolute', left: x + i * step - (step - w) / 2 - 16, top: y + 18, opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK}}>+</div> : null}
				<div style={{position: 'absolute', left: x + i * step, top: y - (1 - p) * 40, width: w, height: 100, opacity: p, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: g > 0 ? `rgba(248,232,200,${0.3 + 0.7 * g})` : CARD, borderRadius: 16, border: `4px solid ${g > 0.5 ? AMBER_STROKE : BLUE}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: BLUE}}>{v}</div>
				{ks ? <div style={{position: 'absolute', left: x + i * step, top: y + 106, width: w, textAlign: 'center', opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: AMBER, whiteSpace: 'pre'}}>{counter} = {ks[i]}</div> : null}
			</React.Fragment>;
		})}
		{total ? <div style={{position: 'absolute', left: x + values.length * step - (step - w) + 14, top: y + 14, opacity: prog(f, total.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size + 4, color: TEAL, whiteSpace: 'pre'}}>{total.text}</div> : null}
	</>;
};
/** The counter dial: whole numbers along a strip, the current one boxed (amber); values below `from` greyed out. */
const Dial: React.FC<{x: number; y: number; vals: readonly number[]; from: number; cur: number | null; letter?: string; at?: number}> = ({x, y, vals, from, cur, letter = 'k', at = -30}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, opacity: prog(f, at, 12), display: 'flex', alignItems: 'center', gap: 14, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}}>
		<span style={{color: AMBER, marginRight: 6}}>{letter} =</span>
		{vals.map(v => <span key={v} style={{minWidth: 54, textAlign: 'center', padding: '2px 8px', borderRadius: 12, color: v < from ? POS : AMBER, textDecoration: v < from ? 'line-through' : undefined, opacity: v < from ? 0.7 : 1, background: v === cur ? '#f8e8c8' : undefined, border: `3px solid ${v === cur ? AMBER_STROKE : 'transparent'}`}}>{v}</span>)}
	</div>;
};

// ---------- 6. sigma notation ----------
const SX = 200, SY = 280, SS = 280;
const SB6 = {x: 1350, y: 430, w: 490};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const ticks = [k.k1, k.k2, k.k3, k.k4];
	const cur = sched<number | null>(fr, ticks.map((t, i) => [t, i + 1] as const), null);
	const n = cur ?? 0;
	const p = boardPanels(SB6.x, SB6.y, SB6.w);
	const A = sigmaAnchors(SX, SY, SS);
	return (
		<>
			<SceneHeading text="Sigma notation: start, stop, rule" at={4} size={52} />
			<SigmaBox x={SX} y={SY} size={SS} lower="k = 1" upper="4" rule="(2k − 1)" lowerAt={k.start} upperAt={k.stop} ruleAt={k.and} ruleSize={96} glowAt={k.add} glowOut={k.under} slotW={[240, 130, 400]} />
			<Hand x={40} y={A.sigma[1] - 30} at={k.add} size={52} color={INK} w={110} align="right">add</Hand>
			<Hand x={A.lower[0] + 140} y={A.lower[1] - 30} at={k.start} size={46} color={AMBER}>start</Hand>
			<Hand x={A.upper[0] + 90} y={A.upper[1] - 40} at={k.stop} size={46} color={AMBER}>stop</Hand>
			<Hand x={A.rule[0] + 10} y={A.rule[1] + 70} at={k.rule} size={42} color={BLUE}>the rule for each term</Hand>
			<Hand x={1000} y={140} at={k.symbol} size={42} color={POS}>{'∑: the Greek capital letter\nsigma; it means "add"'}</Hand>
			<Dial x={1000} y={300} vals={[1, 2, 3, 4]} from={1} cur={cur} at={k.each} />
			{ticks.map((t, i) => <Row key={i} x={1000} y={380} at={t} out={i < 3 ? ticks[i + 1] : k.add2} size={48}><span style={{color: AMBER}}>k = {i + 1}</span>:  2({i + 1}) − 1 = <span style={{color: BLUE}}>{2 * (i + 1) - 1}</span></Row>)}
			<Chip6 at={k.take} out={k.k1 - 4} />
			<Ladder x={980} y={300} cardW={120} h={96} gap={18} values={[1, 3, 5, 7]} dropAt={k.r1} stagger={18} labels={i => `over ${i + 1}`} labelsAt={k.r1} o={1 - prog(fr, k.each - 10, 12)} />
			<Hand x={980} y={244} at={k.take} out={k.each - 10} size={40} color={POS}>{"Team A's runs, over by over"}</Hand>
			<SumRow x={130} y={760} values={[1, 3, 5, 7]} ks={[1, 2, 3, 4]} at={ticks} glows={[{i: 0, at: k.g1, out: k.g3}, {i: 1, at: k.g3, out: k.g5}, {i: 2, at: k.g5, out: k.g7}, {i: 3, at: k.g7, out: k.add2}]} total={{at: k.sixteen, text: '= 16'}} />
			<Grass x={1240} y={p.bottom - 34} w={640} h={60} />
			<Scoreboard {...SB6} team="Team A" total={n ? partials([1, 3, 5, 7])[n - 1] : 0} over={n} flips={ticks} />
			<RollingBall starts={ticks.map(t => t - 18)} x0={1260} x1={1840} groundY={p.bottom + 4} d={64} dur={18} />
			<Hand x={1000} y={p.bottom + 40} at={k.team} size={42} color={TEAL}>{"= Team A's score after four overs"}</Hand>
		</>
	);
};
const Chip6: React.FC<{at: number; out: number}> = ({at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: 130, top: 760, opacity: o}}>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>{"Team A's runs, written out the long way:"}</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: BLUE}}>1 + 3 + 5 + 7</div>
	</div>;
};

// ---------- 7. a sigma that starts later ----------
const S7 = {x: 200, y: 250, size: 220};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const drops = [k.nine, k.sixteen, k.t25, k.t36, k.t49];
	const cur = sched<number | null>(fr, drops.map((t, i) => [t, i + 3] as const), null);
	const morph = vis(fr, k.use + 10, k.same + 24, 10);
	const L = morph > 0.5 ? 'm' : 'k';
	return (
		<>
			<SceneHeading text="A sigma that starts later" at={4} size={52} />
			<SigmaBox {...S7} lower={`${L} = 3`} upper="7" rule={`${L}²`} lowerAt={k.heres + 30} upperAt={k.heres + 50} ruleAt={k.heres + 80} slotW={[220, 120, 200]} />
			<div style={{position: 'absolute', left: S7.x - 40, top: S7.y - 90, width: S7.size + 300, height: S7.size + 230, borderRadius: 30, border: `5px solid ${AMBER_STROKE}`, opacity: 0.9 * morph}} />
			<Dial x={700} y={300} vals={[1, 2, 3, 4, 5, 6, 7]} from={3} cur={cur} letter={L} at={k.first} />
			{drops.map((t, i) => <Row key={i} x={700} y={390} at={t} out={i < 4 ? drops[i + 1] : k.five} size={52}><span style={{color: AMBER}}>{L} = {i + 3}</span>:  {i + 3}² = <span style={{color: BLUE}}>{(i + 3) ** 2}</span></Row>)}
			<Row x={700} y={390} at={k.five} out={k.general - 6} size={48} color={INK}>five terms, not seven</Row>
			<SumRow x={130} y={615} values={[9, 16, 25, 36, 49]} ks={[3, 4, 5, 6, 7]} counter={L} at={drops} total={{at: k.t135, text: '= 135'}} />
			<Posts x={200} y={975} step={190} values={[3, 4, 5, 6, 7]} at={k.five} gapsAt={k.because} bracket={{at: k.because + 30, label: '7 − 3 = 4 steps'}} ring={{at: k.plus}} />
			<Hand x={1100} y={880} at={k.plus} size={46} color={AMBER}>{'+ 1 for the first\n= 5 terms'}</Hand>
			<BoxCard x={1240} y={170} w={600} at={-30} out={k.general - 4} size={40} title="last time">
				<div style={{display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: 48}}><Sig lo="k = 1" hi="4" size={48} /><span style={{color: BLUE}}>(2k − 1)</span>&nbsp;= <span style={{color: TEAL}}>&nbsp;16</span></div>
				<div style={{fontSize: 34, color: POS}}>four terms, starting at k = 1</div>
			</BoxCard>
			<BoxCard x={1240} y={170} w={600} at={k.general} size={40} title="in general">
				<div style={{display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: 46, whiteSpace: 'pre'}}><Sig lo={<span>k = i</span>} hi="j" size={46} /><span style={{color: BLUE}}>a<Sb>k</Sb></span> = a<Sb>i</Sb> + a<Sb>i+1</Sb> + … + a<Sb>j</Sb></div>
				<div style={{fontSize: 34, color: POS}}>every term from a<Sb>i</Sb> up to a<Sb>j</Sb></div>
			</BoxCard>
			<Hand x={1250} y={470} at={k.counter} size={44} color={AMBER} w={590}>{"k is just a counter: the counter's letter doesn't matter"}</Hand>
			<Row x={1250} y={600} at={k.use + 10} size={48}>same sum: <span style={{color: TEAL}}>135</span></Row>
		</>
	);
};

// ---------- 8. worked example: writing a sum in sigma ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const drops = [k.t1, k.t3, k.t7, k.t13, k.t21];
	const subs = ['a₁ = 1 − 1 + 1 = 1', 'a₂ = 4 − 2 + 1 = 3', 'a₃ = 9 − 3 + 1 = 7', 'a₄ = 16 − 4 + 1 = 13', 'a₅ = 25 − 5 + 1 = 21'];
	const vals = range(1, 5).map(P1);
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={42}><span style={{color: BLUE}}>aₙ = n² − n + 1</span>. Find the first five terms and S₅, and write S₅ in sigma notation.</Task>
			<BoxCard x={96} y={300} w={560} at={6} size={44} title="givens">
				<div style={{color: BLUE, fontWeight: 800}}>rule: aₙ = n² − n + 1</div>
				<div style={{color: POS, fontWeight: 800}}>positions: n = 1 to 5</div>
			</BoxCard>
			<Ladder x={720} y={320} cardW={190} h={110} gap={24} size={56} values={vals} dropAt={drops} labels={i => `n = ${i + 1}`} slots={5} />
			<Row x={720} y={490} at={k.seq} out={k.t1} size={48} color={POS}>{'aₙ: put n = 1, 2, 3, 4, 5 into n² − n + 1'}</Row>
			{drops.map((t, i) => <Row key={i} x={720} y={490} at={t} out={i < 4 ? drops[i + 1] : k.sum} size={52}>{subs[i]}</Row>)}
			<Row x={720} y={490} at={k.f45} size={52} dim={prog(fr, k.so, 14)} small={42} color={TEAL}>S₅ = 1 + 3 + 7 + 13 + 21 = 45</Row>
			<Stack x={130} base={900} terms={vals} buildAt={[k.sum + 10, k.sum + 10, k.sum + 10, k.sum + 10, k.sum + 10]} single={4} blockW={140} unit={8} readoutSize={48} o={prog(fr, k.sum, 12)} />
			<SigmaBox x={760} y={640} size={170} lower="k = 1" upper="5" rule={<span>(k² − k + 1)</span>} lowerAt={k.startOne} upperAt={k.stopFive} ruleAt={k.swap + 14} slotW={[200, 110, 440]} ruleSize={64} o={prog(fr, k.to, 14)} />
			<Hand x={1340} y={600} at={k.swap} size={42} color={AMBER}>swap n for the counter k</Hand>
			<Slip x={310} y={600} at={k.ksq + 20} size={40} caption={'the counter is k,\nnot n'}><Sig lo="k = 1" hi="5" size={40} limColor={POS} />(n² − n + 1)</Slip>
			<AnswerBox x={1080} y={880} at={k.again - 30} size={46}>S₅ = <Sig lo="k = 1" hi="5" size={46} />(k² − k + 1) = 45</AnswerBox>
		</>
	);
};

// ---------- 9. from words to sigma ----------
const L9 = {x: 96, y: 330, cardW: 150, gap: 22};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const odd = [k.odd, k.odd + 13, k.odd + 31, k.odd + 48, k.means + 30, k.means + 36, k.means + 42, k.means + 48, k.means + 54, k.nineteen];
	const vals = range(1, 10).map(j => 2 * j - 1);
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Write the sum of the first ten odd numbers in sigma notation.</Task>
			<Ladder x={L9.x} y={L9.y} cardW={L9.cardW} h={100} gap={L9.gap} size={52} values={vals} dropAt={odd} labels={i => `k = ${i + 1}`} slots={10} glows={[{i: 9, at: k.nineteen, out: k.all}]} />
			<Hand x={L9.x} y={268} at={k.write} out={k.each - 4} size={42} color={POS}>the first ten odd numbers: ten slots</Hand>
			{[2, 4, 6, 8].map((e, i) => <React.Fragment key={e}>
				<div style={{position: 'absolute', left: L9.x + i * 172 + 35, top: 262, width: 80, textAlign: 'center', opacity: vis(fr, k.each + i * 6, k.means, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: POS}}>{e}</div>
				<div style={{position: 'absolute', left: L9.x + i * 172 + 112, top: 270, opacity: vis(fr, k.each + i * 6 + 6, k.means, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: POS}}>− 1</div>
			</React.Fragment>)}
			<Chip x={96} y={520} at={k.one} size={52} color={BLUE}>kth odd number = 2k − 1</Chip>
			<Hand x={760} y={530} at={k.each} out={k.one} size={42} color={POS}>{'each odd number is one less\nthan an even number'}</Hand>
			<Row x={96} y={630} at={k.check} size={46} dim={prog(fr, k.last, 14)} small={38}><span style={{color: AMBER}}>k = 1</span>: 2(1) − 1 = 1  ✓</Row>
			<Hand x={96} y={712} at={k.means} out={k.nineteen} size={44} color={AMBER}>"first ten": k from 1 to 10</Hand>
			<Row x={96} y={710} at={k.nineteen} size={52} color={BLUE}>1 + 3 + 5 + … + <span style={{display: 'inline-block', padding: '0 8px', borderRadius: 40, border: `4px solid ${AMBER_STROKE}`}}>19</span></Row>
			<Row x={96} y={790} at={k.last} size={44} color={POS}>last term: 2(10) − 1 = 19</Row>
			<SigmaBox x={1240} y={540} size={200} lower="k = 1" upper="10" rule="(2k − 1)" lowerAt={k.means + 10} upperAt={k.ten} ruleAt={k.sum} slotW={[220, 130, 340]} o={prog(fr, k.first, 14)} />
			<AnswerBox x={96} y={870} at={k.all} size={46}><Sig lo="k = 1" hi="10" size={46} />(2k − 1) = 1 + 3 + … + 19 = 100</AnswerBox>
			<Hand x={1000} y={900} at={k.hundred} size={36} color={POS}>{'total stated now;\nthe shortcut comes in two videos'}</Hand>
		</>
	);
};

// ---------- 10. memory aid ----------
export const AID_LINES = ['Bottom: start.', 'Top: stop.', 'Count: top − bottom + 1.'] as const;
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	return (
		<>
			<FramedCard x={110} y={150} w={1700} h={860} at={0} />
			<div style={{position: 'absolute', left: 160, top: 172}}><HandText text="Memory aid" at={4} size={50} color={POS} /></div>
			<SigmaBox x={280} y={330} size={250} lower="start" upper="stop" rule={<>a<Sb>k</Sb></>} lowerAt={k.bottom} upperAt={k.top} ruleAt={-30} slotW={[220, 180, 170]} />
			{AID_LINES.map((t, i) => <div key={i} style={{position: 'absolute', left: 820, top: 250 + i * 100}}><HandText text={t} at={[k.bottom, k.top, k.number][i]} size={76} cps={22} /></div>)}
			<div style={{position: 'absolute', left: 230, top: 760, opacity: prog(fr, k.one, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, display: 'flex', alignItems: 'center'}}><Sig lo="k = 5" hi="9" size={60} /><span style={{color: BLUE}}>a<Sb>k</Sb></span></div>
			<Posts x={700} y={880} step={120} values={[5, 6, 7, 8, 9]} at={k.one} gapsAt={k.from} bracket={{at: k.from + 20, label: '9 − 5 = 4 steps'}} ring={{at: k.from + 30}} />
			<Row x={1360} y={680} at={k.from + 30} size={56} color={GREEN}>5 terms</Row>
			<Slip x={1360} y={780} at={k.four} size={44} caption="+ 1 for the first">4 terms</Slip>
		</>
	);
};
