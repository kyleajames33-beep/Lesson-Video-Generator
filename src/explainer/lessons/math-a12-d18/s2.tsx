// Scenes 5 to 7: the open box (the card-textured net folds; volume and domain, with both extremes), solving it
// (expand, factorise, reject x = 12, compare with the end limits) and the method as a framed memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, FunctionSimulator, HandTag, MarkSpan, ParameterSlider, SceneHeading, StudioBoxNetFold, StudioCandidateTable, kf, makePlot, smooth, vis} from '../../math/studio';
import {K5, K6, K7} from './cuemap';
import {AMB, Am, AnswerBox, BoxCard, CARDTEX, FlatCard, GREEN, GREY_INK, Line, PlanPen, RED, Ring, V, VIOLET, Xb, box, box1, stubLine} from './parts';

const TEX = {plate: CARDTEX, px: 0.25};
const BoxGivens: React.FC<{domainAt?: number}> = ({domainAt}) => {
	const f = useCurrentFrame();
	return (
		<Card x={1060} y={146} w={820} at={-30} pad="10px 28px 12px">
			<CardTitle>Given</CardTitle>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, lineHeight: 1.25}}><Am>24 cm square of card</Am></div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, lineHeight: 1.25}}>squares of side <Xb>x</Xb> cm cut from each corner{domainAt !== undefined ? <span style={{opacity: prog(f, domainAt, 12)}}>;  <Am>0 &lt; x &lt; 12</Am></span> : null}</div>
		</Card>
	);
};

// ---------- 5. the open box (model) ----------
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const cut = kf(f, [[0, 5], [k.cut - 20, 5], [k.cut + 6, 0.5], [k.base - 24, 0.5], [k.base + 4, 11.5], [k.twelve - 4, 11.5], [k.twelve + 20, 5]]);
	const cutP = prog(f, k.up - 40, 40), fold = smooth(prog(f, k.up, 46));
	return (
		<>
			<SceneHeading text="Worked example: the open box" at={4} size={56} />
			<BoxGivens />
			<StudioBoxNetFold x={40} y={200} W={24} H={24} cut={cut} fold={fold} cutProgress={cutP} scale={30} texture={TEX} labels={f >= k.height ? 'symbols' : 'none'} at={-30} />
			<HandTag x={60} y={190} text="x + (24 − 2x) + x = 24" at={k.each} out={k.volume} size={40} color={AMB} />
			<div style={{position: 'absolute', left: 620, top: 548, opacity: prog(f, k.up + 40, 14)}}><FlatCard W={24} H={24} px={13} cut={4} /></div>
			<Line x={40} y={880} at={k.volume} out={k.cut} size={50}>V = {box(cut).toFixed(0)} cm³ <span style={{fontSize: 36, color: GREY_INK}}>(at <Xb>x = {cut.toFixed(1)}</Xb>)</span></Line>
			<Line x={40} y={880} at={k.cut + 6} out={k.base - 24} size={46}><Xb>x = 0.5</Xb>: a flat tray, V = 264.5 cm³</Line>
			<Line x={40} y={880} at={k.base + 4} out={k.twelve + 20} size={46}><Xb>x = 11.5</Xb>: a tiny base, V = 11.5 cm³</Line>
			{/* right column */}
			<Line x={1080} y={340} at={k.height} size={50}>height = <Xb>x</Xb></Line>
			<Line x={1080} y={410} at={k.each} size={50}>base: (24 − 2<Xb>x</Xb>) by (24 − 2<Xb>x</Xb>)</Line>
			<Line x={1080} y={490} at={k.volume} size={56}>V = <Xb>x</Xb>(24 − 2<Xb>x</Xb>)²</Line>
			<Line x={1080} y={600} at={k.cut - 20} size={46}><Xb>x</Xb> &gt; 0 (to cut anything)</Line>
			<Line x={1080} y={666} at={k.base - 20} size={46}>24 − 2<Xb>x</Xb> &gt; 0 (a base): <Xb>x</Xb> &lt; 12</Line>
			<BoxCard x={1080} y={750} at={k.twelve - 30} size={52} border={AMB} bw={5}><Am>domain: 0 &lt; x &lt; 12</Am></BoxCard>
		</>
	);
};

// ---------- 6. the open box (solve and answer) ----------
const G6 = {x: 30, y: 570, w: 930, h: 380};
const WIN_V = {x: [0, 12.5] as [number, number], y: [0, 1100] as [number, number]};
const BOX_FAM = {f: (x: number) => box(x), df: (x: number) => box1(x), domain: [{from: 0, to: 12}]};
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const x = kf(f, [[0, 6], [k.at4 - 20, 6], [k.at4 + 10, 4], [k.near, 4], [k.near + 30, 0.5], [k.near + 70, 11.5], [k.greatest + 10, 4]]);
	const M = makePlot(G6.x, G6.y, G6.w, G6.h, WIN_V);
	const P = M.pf(4, 1024);
	const tm = {pt: M.pf, sx: M.sx, sy: M.sy};
	const strike = smooth(prog(f, k.reject - 6, 14));
	return (
		<>
			<SceneHeading text="The open box: solve and answer" at={4} size={56} />
			<StudioBoxNetFold x={60} y={150} W={24} H={24} cut={x} fold={1} cutProgress={1} scale={13} texture={TEX} labels="values" at={-30} />
			<div style={{position: 'absolute', left: 580, top: 230, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, fontVariantNumeric: 'tabular-nums'}}>V = {box(x).toFixed(1)}<span style={{fontSize: 32, color: INK_SOFT, fontWeight: 700}}> cm³</span></div>
			<ParameterSlider x={30} y={440} width={400} symbol="x" role="a" value={x} min={0} max={12} ticks={[0, 4, 8, 12].map(v => ({value: v, label: String(v)}))} at={-30} digits={1} />
			<FunctionSimulator x={G6.x} y={G6.y} width={G6.w} height={G6.h} window={WIN_V} family={BOX_FAM} timeline={[{frame: 0, x}]} color={INK} at={-30}
				xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[250, 500, 750, 1000]} xLabel="x (cm)" yLabel="V (cm³)" point={{at: -30}}
				markers={[{X: 0, Y: 0, at: -30, open: true, color: AMB}, {X: 12, Y: 0, at: -30, open: true, color: AMB}]}
				overlay={() => <FrameSvg>
					<Ring p={P} r={30} o={prog(f, k.four, 12)} color={GREEN} />
					<line {...stubLine(tm, 4, 1024, 0, 0, 110)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={prog(f, k.four, 12)} />
				</FrameSvg>} />
			{/* right column */}
			<Line x={1000} y={150} at={k.v} size={46}>V = 4<Xb>x</Xb>³ − 96<Xb>x</Xb>² + 576<Xb>x</Xb></Line>
			<Line x={1000} y={212} at={k.v + 40} size={34} color={GREY_INK}>(24 − 2x)² = 576 − 96x + 4x²</Line>
			<Line x={1000} y={268} at={k.vp} size={48}><V>V′ = 12x² − 192x + 576</V></Line>
			<Line x={1000} y={336} at={k.twelve - 40} size={52}><V>= 12(x − 4)(x − 12)</V></Line>
			<div style={{position: 'absolute', left: 1000, top: 412, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: strike > 0.5 ? GREY_INK : INK, opacity: prog(f, k.isnt - 6, 12)}}>
				<span style={{position: 'relative'}}>x = 12<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}><path d="M0,60 L100,42" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - strike} /></svg></span>
			</div>
			<HandTag x={1220} y={444} text="not in 0 < x < 12: no base" at={k.reject} size={42} color={RED} />
			<Line x={1000} y={488} at={k.at4} size={48}>V(4) = 4 × 16² = 1024</Line>
			<BoxCard x={990} y={570} w={890} at={-30} out={k.near - 8} size={46} title="From the model"><div>V = <Xb>x</Xb>(24 − 2<Xb>x</Xb>)²</div><div><Am>domain: 0 &lt; x &lt; 12</Am></div></BoxCard>
			<StudioCandidateTable x={990} y={560} w={890} at={k.near} size={40} headings={['candidate', 'V (cm³)']} winnerAt={k.greatest}
				rows={[
					{x: <>x → 0⁺</>, exact: <>V → 0</>, at: k.near + 6, limit: true},
					{x: <>x = 4</>, exact: <>1024</>, at: k.near + 14, winner: true},
					{x: <>x → 12⁻</>, exact: <>V → 0</>, at: k.near + 22, limit: true},
				]} />
			<AnswerBox x={990} y={850} at={k.cut} size={42}>cut 4 cm squares; greatest volume 1024 cm³</AnswerBox>
		</>
	);
};

// ---------- 7. the method and a memory aid ----------
export const AID18 = 'Draw it, link it, limit it, solve it, say it.';
const VERBS = ['Draw it', 'link it', 'limit it', 'solve it', 'say it'];
/** The five-verb icons (coded; the pen icon is the kit pen on the painted wall strip). */
const LimitIcon: React.FC = () => (
	<svg width={240} height={80} viewBox="0 0 240 80" style={{display: 'block', overflow: 'visible'}}>
		<line x1={10} x2={230} y1={44} y2={44} stroke={INK} strokeWidth={3} />
		<line x1={30} x2={210} y1={44} y2={44} stroke="#e9b949" strokeWidth={12} strokeLinecap="butt" />
		{[30, 210].map(x => <circle key={x} cx={x} cy={44} r={10} fill={CARD} stroke={AMB} strokeWidth={4} />)}
		<text x={30} y={78} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>0</text>
		<text x={210} y={78} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>20</text>
	</svg>
);
const SolveIcon: React.FC = () => (
	<svg width={240} height={90} viewBox="0 0 240 90" style={{display: 'block', overflow: 'visible'}}>
		<line x1={20} x2={230} y1={80} y2={80} stroke={INK} strokeWidth={3} />
		<path d={Array.from({length: 41}, (_, i) => {const u = i / 40; return `${i ? 'L' : 'M'}${30 + u * 180},${80 - 280 * u * (1 - u)}`;}).join(' ')} stroke={INK} strokeWidth={5} fill="none" />
		{[30, 210].map(x => <circle key={x} cx={x} cy={80} r={9} fill={CARD} stroke={AMB} strokeWidth={4} />)}
		<circle cx={120} cy={10} r={11} fill={GREEN} stroke={CARD} strokeWidth={3} />
		<line x1={84} x2={156} y1={10} y2={10} stroke={VIOLET} strokeWidth={5} strokeLinecap="round" />
	</svg>
);
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const vAt = [k.draw, k.link, k.limit, k.solve, k.say];
	const rAt = [k.draw2, k.link2, k.limit2, k.solve2, k.say2];
	const hl = (g: number) => (g > 0.001 ? `rgba(248,232,200,${0.9 * g})` : undefined);
	const ROWY = 330, RH = 122;
	const row = (i: number, icon: React.ReactNode, text: React.ReactNode) => {
		const o = prog(f, rAt[i] - 6, 12), g = vis(f, rAt[i], rAt[i + 1] ?? 5000, 10);
		return (
			<div key={i} style={{position: 'absolute', left: 170, top: ROWY + i * RH, width: 1580, height: RH - 12, display: 'flex', alignItems: 'center', gap: 34, opacity: o, background: hl(g), borderRadius: 14, padding: '0 14px', boxSizing: 'border-box'}}>
				<div style={{width: 230, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK}}>{VERBS[i][0].toUpperCase() + VERBS[i].slice(1)}</div>
				<div style={{width: 290, height: 100, position: 'relative', display: 'flex', alignItems: 'center'}}>{icon}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK}}>{text}</div>
			</div>
		);
	};
	return (
		<>
			<SceneHeading text="The method in five steps" at={4} size={56} />
			<div style={{position: 'absolute', left: 120, top: 150, width: 1680, height: 800, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 170, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 170, top: 222, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, color: INK, whiteSpace: 'pre'}}>
				{VERBS.map((v, i) => <span key={i} style={{opacity: f >= vAt[i] - 4 ? 1 : 0.0}}>{i ? ' ' : ''}{v}{i < 4 ? ',' : '.'}</span>)}
			</div>
			{row(0, null, <>the shape; name <Xb>x</Xb>, <span style={{color: '#13767a'}}>y</span> with units</>)}
			{f >= rAt[0] - 6 ? <PlanPen cx={170 + 14 + 230 + 34 + 140} top={ROWY + 10} scale={4.5} x={10} wallLength={200} labels="none" showArea={false} wallH={22} at={rAt[0] - 6} /> : null}
			{row(1, <span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK, whiteSpace: 'pre'}}><Xb>2x</Xb> + <span style={{color: '#13767a'}}>y</span> = <Am>40</Am></span>, <>the constraint, then one variable</>)}
			{row(2, <LimitIcon />, <>the <Xb>x</Xb>-values the real object allows</>)}
			{row(3, <SolveIcon />, <>calculus, then compare with the ends</>)}
			{row(4, <span style={{display: 'inline-block', border: `4px solid ${GREEN}`, borderRadius: 14, padding: '0 14px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>200 m²</span>, <>the answer the question asked, <MarkSpan kind="underline" at={k.units} color={GREEN} width={5}>with units</MarkSpan></>)}
		</>
	);
};
