// Scenes 1 to 4: the hook (d19's final frame, then three bean shoots growing on the plant stand beside their live
// height graphs: one shape slid up, and a reading that picks one), what a primitive is, why a constant can be added
// (the C slider on x² + C with parallel stubs), and why nothing else fits (two tips 30 cm apart all the way up, then
// the gap function's flat graph).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, FrameSvg, HandTag, LiveReadoutBoard, MarkSpan, ParameterSlider, SceneHeading, StudioPrimitiveFamily, fnPath, kf, smooth, vis} from '../../math/studio';
import {D19FinalFrame} from '../math-a12-d19/s3';
import {K1, K2, K3, K4} from './cuemap';
import {AMB, AMB_INK, BoxCard, Cc, Chip, GREY, GREY_INK, LabelArrow, Line, MiniPlot, Note, PLabel, ShelfBoard, ShelfGraph, ShelfStand, V, VIOLET, standH, stub, tip} from './parts';

const HEAD1 = 'Primitives: from a family to one curve';

// ---------- 1. hook: three shelves, one growth rule ----------
const CUT = 12;
const ST1 = {x: 20, y: 300, w: 640};
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <D19FinalFrame />;
	const reset = k.weeks + 14;
	const t = f < reset ? kf(f, [[k.three + 20, 0], [k.up - 6, 5]]) : kf(f, [[reset + 2, 0], [reset + 66, 4]]);
	const drawn = f < reset ? t : 5;
	const blink = f >= k.weeks && f < reset + 10 ? Math.max(1 - prog(f, k.weeks, 12), prog(f, reset, 10)) : 1;
	const sIn = smooth(prog(f, k.plant, 22));
	const d19o = 1 - prog(f, k.plant - 6, 16);
	return (
		<>
			{d19o > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: d19o}}><D19FinalFrame /></div> : null}
			{f >= k.plant ? <SceneHeading text={HEAD1} at={k.plant + 4} size={56} /> : null}
			{sIn > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sIn, transform: `translateX(${(1 - sIn) * -120}px)`}}>
				<ShelfStand x={ST1.x} y={ST1.y} w={ST1.w} t={t} tips={blink} dim={[blink, blink, blink]} />
			</div> : null}
			<ShelfGraph x={660} y={175} w={780} h={760} t={t} drawn={drawn} points={blink} at={k.plant + 10} arrows={vis(f, k.up + 6, k.sixty - 8, 14)} ring={prog(f, k.sixty, 12)} ringTag={prog(f, k.sixty + 8, 12)} />
			<ShelfBoard x={1450} y={150} width={460} t={t} at={k.plant + 16} size={46} />
			<HandTag x={40} y={250} text="same growth rule" at={k.three + 50} out={k.up - 14} size={46} color={VIOLET} />
			<HandTag x={1140} y={770} text="same shape" at={k.up + 6} out={k.sixty - 8} size={48} color={INK} />
			<Chip x={1460} y={600} at={k.how} size={44} w={440}>which shelf?<br />family → one curve</Chip>
			<HandTag x={1470} y={800} text="t weeks after sprouting" at={k.week - 60} out={k.how - 14} size={36} color={GREY_INK} />
		</>
	);
};

// ---------- 2. what a primitive is ----------
const ST2 = {x: 20, y: 360, w: 560};
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const pulse = f >= k.from ? 0.5 + 0.5 * Math.sin((f - k.from) * 0.3) * (1 - prog(f, k.from + 30, 10)) : 0;
	const qO = vis(f, k.finding, k.from, 12);
	return (
		<>
			<SceneHeading text="What a primitive is" at={4} size={56} />
			<ShelfStand x={ST2.x} y={ST2.y} w={ST2.w} t={4} />
			<ShelfGraph x={585} y={330} w={385} h={540} t={4} drawn={5} soilLabels={false} />
			<Note x={40} y={880} at={-30} size={36} color={GREY_INK}>tip height h = t² + C,   <V>growth rate 2t</V></Note>
			<Card x={980} y={160} w={900} at={-30} pad="18px 30px 20px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>F′(x) = <V>f(x)</V>:</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre', marginTop: 6}}>F is a <MarkSpan kind="underline" at={k.primitive + 6} color={INK}>primitive</MarkSpan> of <V>f</V></div>
			</Card>
			{/* the two boxes and the reverse arrows */}
			<div style={{position: 'absolute', left: 1000, top: 430, opacity: prog(f, 80, 12) * (f >= k.so - 6 && f < k.so + 6 ? 0.25 + 0.75 * Math.abs(f - k.so) / 6 : 1), transform: `scale(${1 + 0.08 * pulse})`, transformOrigin: '100px 50px'}}>
				<div style={{width: 200, textAlign: 'center', background: CARD, border: `4px solid ${INK}`, borderRadius: 18, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, padding: '6px 0'}}>{f < k.so ? 'F(x)' : 'x²'}</div>
			</div>
			<div style={{position: 'absolute', left: 1660, top: 430, opacity: prog(f, 80, 12) * (f >= k.so - 6 && f < k.so + 6 ? 0.25 + 0.75 * Math.abs(f - k.so) / 6 : 1)}}>
				<div style={{width: 200, textAlign: 'center', background: CARD, border: `4px solid ${VIOLET}`, borderRadius: 18, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: VIOLET, padding: '6px 0'}}>{f < k.so ? 'f(x)' : '2x'}</div>
			</div>
			<LabelArrow x0={1230} x1={1630} y={455} label="differentiate" color={VIOLET} at={124} glow={vis(f, k.diff, k.finding, 12)} />
			<LabelArrow x0={1630} x1={1230} y={575} label="find a primitive" color={INK} at={k.backwards + 14} glow={vis(f, k.finding, k.from + 30, 12)} />
			<div style={{position: 'absolute', left: 1410, top: 590, opacity: qO, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: INK}}>?</div>
			<Line x={1000} y={700} at={k.so + 10} size={46}>x² is a primitive of <V>2x</V></Line>
			<Line x={1000} y={790} at={k.tip} size={42}>tip height is a primitive of <V>2t</V></Line>
			<HandTag x={1000} y={930} text="finding a primitive: differentiation backwards" at={k.backwards + 20} size={42} color={INK} />
		</>
	);
};

// ---------- 3. why a constant can be added ----------
const G3 = {x: 30, y: 140, w: 1000, h: 820};
const WIN3 = {x: [-2.5, 2.5] as [number, number], y: [-3, 10] as [number, number]};
const XS3 = [-1, 0, 1, 2];
const sq = (x: number) => x * x;
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const down0 = k.family, down1 = k.family + 30, up1 = k.family + 66;
	const C = f < down0 ? kf(f, [[k.adding + 4, 0], [k.adding + 64, 3]]) : kf(f, [[down0, 3], [down1, -2], [up1, 3]]);
	const passed = (c: number) => down0 + ((3 - c) / 5) * 30;
	const members = [-2, -1, 0, 1, 2].filter(c => f >= passed(c));
	const settled = f < k.adding + 2 ? 'x²' : f >= k.adding + 66 && f < k.write + 10 ? 'x² + 3' : f >= k.write + 10 && f < down0 ? 'x² + C' : undefined;
	return (
		<>
			<SceneHeading text="Why a constant can be added" at={4} size={56} />
			<StudioPrimitiveFamily x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={WIN3} F={sq} f={x => 2 * x} constants={members} C={C} membersAt={-30}
				xTicks={[-2, -1, 1, 2]} yTicks={[-2, 2, 4, 6, 8]} at={-30} stubs={{xs: XS3, at: -30, halfLength: 44}} ghost={{C: 0, at: k.adding}} label={settled ? () => settled : undefined}>
				{m => <>
					{XS3.map((X, i) => {const fl = vis(f, k.anywhere + 4 + i * 10, k.anywhere + 40 + i * 10, 8); const s = stub(m, X, sq(X), 2 * X, 44); return <g key={X} opacity={prog(f, k.adding, 12)}>
						<line {...s} stroke={VIOLET} strokeWidth={5} strokeDasharray="10 7" strokeLinecap="round" opacity={0.75} />
						{fl > 0.001 ? <line {...s} stroke={VIOLET} strokeWidth={16} strokeLinecap="round" opacity={0.25 * fl} /> : null}
						{fl > 0.001 ? (() => {const s2 = stub(m, X, sq(X) + C, 2 * X, 44); return <line {...s2} stroke={VIOLET} strokeWidth={16} strokeLinecap="round" opacity={0.25 * fl} />;})() : null}
					</g>;})}
					<PLabel p={m.p(1.25, 0.4)} text="x² (dashed)" color={GREY_INK} size={34} o={prog(f, k.adding + 30, 12) * (1 - prog(f, down0, 10))} />
				</>}
			</StudioPrimitiveFamily>
			<HandTag x={300} y={330} text="no tilt" at={k.anywhere + 4} out={k.zero - 20} size={50} color={VIOLET} />
			<Chip x={1080} y={150} at={-30} size={36} color={GREY}>the shelves: one shape, three heights</Chip>
			<ShelfGraph x={1060} y={230} w={820} h={330} t={5} drawn={5} soilLabels={false} stubs={1} />
			<ParameterSlider x={1090} y={590} width={400} symbol="C" role="k" value={C} min={-3} max={4} ticks={[-2, 0, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} at={k.adding - 6} digits={1} />
			<Line x={1090} y={730} at={k.zero} size={48}><V>d/dx</V> (x² <Cc>+ C</Cc>) = <V>2x</V> <Cc>+ 0</Cc> = <V>2x</V></Line>
			<BoxCard x={1090} y={830} at={k.soif + 70} size={44} border={AMB} bw={4}>F(x) <Cc>+ C</Cc> is also a primitive</BoxCard>
		</>
	);
};

// ---------- 4. why nothing else fits ----------
const G4 = {x: 30, y: 140, w: 1000, h: 520};
const ST4 = {x: 1140, y: 300, w: 720};
const GAPX = [-2, -1, 0, 1, 2];
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const t = f < k.two - 2 ? 5 : kf(f, [[k.two + 4, 0], [k.up + 20, 5]]);
	const blink4 = f >= k.two - 14 && f < k.two + 12 ? Math.max(1 - prog(f, k.two - 14, 12), prog(f, k.two, 10)) : 1;
	const aOut = k.their;
	const bIn = k.their + 6;
	const X = kf(f, [[k.func, -2.05], [k.never + 70, 2.05]]);
	const lineP = prog(f, k.everywhere, 30);
	return (
		<>
			<SceneHeading text="Why nothing else fits" at={4} size={56} />
			<StudioPrimitiveFamily x={G4.x} y={G4.y} width={G4.w} height={G4.h} window={{x: [-2.5, 2.5], y: [-3, 10]}} F={sq} f={x => 2 * x} constants={[-2, 0, 1, 2]} C={3}
				xTicks={[-2, -1, 1, 2]} yTicks={[-2, 2, 4, 6, 8]} at={-30} gapBars={{upper: 3, lower: -1, xs: GAPX, at: k.gap}}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, x => x * x - 1, -2.5, 2.5)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{GAPX.map(x0 => <PLabel key={x0} p={m.p(x0, x0 * x0 + 1)} dx={x0 === 2 ? -16 : 14} dy={12} anchor={x0 === 2 ? 'end' : 'start'} text="4" color={AMB_INK} size={38} o={prog(f, k.gap + 10, 12)} />)}
					<PLabel p={m.p(-0.5, 6.4)} text="F(x) = x² + 3" size={38} anchor="end" />
					<PLabel p={m.p(0.35, -2.2)} text="G(x) = x² − 1" size={38} />
				</>}
			</StudioPrimitiveFamily>
			<HandTag x={110} y={612} text="faint: the rest of the family" at={20} out={k.gap - 6} size={36} color={GREY_INK} />
			{/* A: the two shoots */}
			<ShelfStand x={ST4.x} y={ST4.y} w={ST4.w} t={t} dim={[blink4, blink4, 0.3 * blink4]} tips={blink4} gap={prog(f, k.two + 8, 12)} out={aOut} />
			<Card x={40} y={700} w={980} at={-30} out={k.two - 10} pad="16px 28px 18px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.3}}>Could a curve that isn&apos;t a slid copy<br />also have gradient <V>2x</V>?</div>
			</Card>
			<ShelfBoard x={40} y={700} width={470} t={t} show={[]} gap={{at: k.two}} at={k.two - 4} out={aOut} />
			<HandTag x={560} y={800} text="gap stays 30 cm" at={k.two + 30} out={aOut - 6} size={48} color={AMB} />
			{/* B: the two shoots stay beside the argument until the conclusion */}
			<ShelfStand x={1420} y={540} w={460} t={5} dim={[1, 1, 0.3]} gap={1} at={aOut + 4} out={k.constant - 12} />
			{/* B: the gap function */}
			<MiniPlot x={30} y={650} w={1000} h={300} win={{x: [-2.5, 2.5], y: [-0.6, 6]}} xTicks={[-2, -1, 1, 2]} yTicks={[2, 4]} xLabel="" yLabel="gap: F(x) − G(x)" curves={[]} at={bIn}>
				{m => {const a = m.p(-2.5, 4), b = m.p(-2.5 + 5 * lineP, 4); const p = m.p(X, 4); const so = vis(f, k.func, undefined, 12); return <>
					{lineP > 0.001 ? <line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={AMB} strokeWidth={7} strokeLinecap="round" /> : null}
					{so > 0.001 ? <g opacity={so}><line x1={p[0] - 70} x2={p[0] + 70} y1={p[1]} y2={p[1]} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /><circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} /></g> : null}
				</>;}}
			</MiniPlot>
			<Line x={1080} y={160} at={bIn} size={44}>F′ = <V>f</V> and G′ = <V>f</V></Line>
			<Line x={1080} y={250} at={k.everywhere} size={48}>(F − G)′ = F′ − G′ = <V>f</V> − <V>f</V> = 0</Line>
			<LiveReadoutBoard x={1080} y={360} width={560} at={k.func} inline size={52} labelSize={32} rows={[{label: 'gradient of the gap', value: 0, digits: 0, role: 'gradient'}]} />
			<HandTag x={1090} y={530} text="never rises, never falls" at={k.never} out={k.constant - 10} size={42} color={INK} />
			<Chip x={1080} y={540} at={k.constant} size={44} color={AMB}>F(x) − G(x) = constant</Chip>
			<Note x={1090} y={640} at={k.constant + 10} size={34}>over an unbroken interval</Note>
			<Note x={1090} y={686} at={k.constant + 10} size={34}>(polynomials: every real x)</Note>
			<BoxCard x={1080} y={790} at={k.means} size={48} border={INK} bw={4}>general primitive: F(x) <Cc>+ C</Cc></BoxCard>
			<HandTag x={1100} y={940} text="covers every primitive" at={k.means + 60} size={42} color={AMB} />
		</>
	);
};
