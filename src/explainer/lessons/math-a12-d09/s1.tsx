// Scenes 1 to 4: the hike (two flat spots, one turn), the sign strip, stationary against turning, and the
// three sign patterns.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, SceneHeading, SignStrip,
	directionWord, kf, smooth, vis,
} from '../../math/studio';
import type {FnFamily, FnKey} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue} from './common';
import {
	CurveLabel, DISPLAY, FN, GREY, HIKE, H_XTICKS, H_YTICKS, HandoffBoard, HandoffTop, Klass, RecallChip, SignChart, Ring, Sup, UP, DOWN, VIOLET, Valley, WIN_H, gmap, valleyPts,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const HIKE_EQ = <>y = x<Sup>4</Sup> − 4x<Sup>3</Sup></>;
const word = (m: number) => directionWord(m, 0.05);
/** Down-up or down-down arrow pair (frame coords). */
const ArrowPair: React.FC<{x: number; y: number; second: 'up' | 'down'; o: number}> = ({x, y, second, o}) => (o <= 0.001 ? null : (
	<g opacity={o} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round">
		<path d={`M${x - 70},${y - 30} L${x - 20},${y + 10} M${x - 40},${y + 12} L${x - 18},${y + 12} L${x - 18},${y - 10}`} stroke={DOWN} />
		{second === 'up'
			? <path d={`M${x + 20},${y + 10} L${x + 70},${y - 30} M${x + 48},${y - 32} L${x + 72},${y - 32} L${x + 72},${y - 8}`} stroke={UP} />
			: <path d={`M${x + 20},${y - 30} L${x + 70},${y + 10} M${x + 48},${y + 12} L${x + 72},${y + 12} L${x + 72},${y - 10}`} stroke={DOWN} />}
	</g>
));

// ---------- 1. hook: two flat spots on a hike, one turn ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const back = cue(id, 'come back to that'), hike = cue(id, 'picture a hike'), curve = cue(id, 'This curve'), three = cue(id, 'three', 1), rising = cue(id, 'rising'), creek = cue(id, "That's the creek"), butzero = cue(id, 'But at zero'), instant = cue(id, 'an instant'), falling = cue(id, 'keeps falling'), sowhat = cue(id, 'So what decides');
	const shrink = smooth(prog(f, back, 30));
	const P = {x: 96, y: 150, w: 1220};
	const G = {x: 40, y: 524, w: 1790, h: 410};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_H);
	const X = kf(f, [[curve, -1.5], [490, 0], [522, 0], [584, 3], [640, 3], [700, 3.8], [butzero, 3.8], [butzero + 34, -0.7], [instant, 0], [instant + 16, 0], [falling + 6, 1.0]]);
	const T: FnKey[] = [{frame: 0, x: X}];
	const m = HIKE.df(X, {});
	const vp = valleyPts(P.x, P.y, P.w);
	const lead = prog(f, curve + 30, 16);
	return (
		<>
			{/* d08's final frame, shrinking away (its excluded mark turns grey as it shrinks) */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, hike - 10, 20), transform: `scale(${1 - 0.8 * shrink})`, transformOrigin: '1824px 110px'}}>
				<HandoffTop at={-30} />
				<HandoffBoard greyAt={back} />
			</div>
			<SceneHeading text="Stationary points: when does a curve turn?" at={back + 24} size={56} />
			<Valley x={P.x} y={P.y} w={P.w} at={hike} walker={X} walkerO={prog(f, curve, 12)} creek={vis(f, creek, creek + 70)} ledge={vis(f, falling - 20, falling + 80)} />
			<FunctionSimulator at={curve - 6} x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_H} family={HIKE} timeline={T} color={FN}
				xTicks={H_XTICKS} yTicks={H_YTICKS} xLabel="x: km along the trail" yLabel="y: height (tens of metres)"
				point={{at: curve + 10, color: INK}} tangent={{at: curve + 10, halfLength: 120}}
				overlay={() => (
					<FrameSvg>
						<g opacity={lead}>
							<line x1={vp.ledge[0]} y1={vp.ledge[1]} x2={M.pt(0, 0)[0]} y2={M.pt(0, 0)[1]} stroke={GREY} strokeWidth={3} strokeDasharray="8 8" />
							<line x1={vp.creek[0]} y1={vp.creek[1]} x2={M.pt(3, -27)[0]} y2={M.pt(3, -27)[1]} stroke={GREY} strokeWidth={3} strokeDasharray="8 8" />
						</g>
						<Ring p={M.pt(0, 0)} r={30} o={prog(f, three - 40, 12)} />
						<Ring p={M.pt(3, -27)} r={30} o={prog(f, three, 12)} />
						<ArrowPair x={M.pt(3, 0)[0] + 150} y={M.pt(0, -22)[1]} second="up" o={prog(f, rising, 12)} />
						<ArrowPair x={M.pt(0, 0)[0] + 150} y={M.pt(0, 6)[1]} second="down" o={prog(f, falling, 12)} />
					</FrameSvg>
				)} />
			<HandTag x={vp.ledge[0] - 30} y={vp.ledge[1] - 70} text="ledge" at={curve + 34} size={40} color={INK} anchor="end" />
			<HandTag x={vp.creek[0] + 60} y={vp.creek[1] - 40} text="creek" at={curve + 40} size={40} color={INK} />
			<CurveLabel x={M.pt(1.0, 16)[0]} y={M.pt(1.0, 16)[1] - 10} at={curve} size={38} color={FN}>trail height {HIKE_EQ}</CurveLabel>
			<HandTag x={M.pt(0.35, 0)[0]} y={M.pt(0, -12)[1]} text="tangent flat" at={three + 6} out={butzero} size={40} color={VIOLET} />
			<HandTag x={M.pt(0.35, 0)[0]} y={M.pt(0, -12)[1]} text="level, then on down" at={falling + 10} size={40} color={INK} />
			<LiveReadoutBoard x={1360} y={176} width={464} at={curve} inline rows={[
				{label: 'height', value: HIKE.f(X, {}), digits: 2, role: 'a'},
				{label: 'gradient', value: m, digits: 2, role: 'gradient'},
				{label: 'trail', value: 0, text: word(m), glow: [falling - 10, falling + 40]},
			]} />
			<Enter at={sowhat} style={{position: 'absolute', left: 1360, top: 420, width: 464}}>
				<div style={{background: '#fffdf8', borderRadius: 18, padding: '10px 22px', border: `3px solid ${VIOLET}`, ...DISPLAY(42, INK, 800), whiteSpace: 'normal'}}>flat tangent: <span style={{color: VIOLET}}>turn or no turn?</span></div>
			</Enter>
		</>
	);
};

// ---------- 2. sign gives direction ----------
const G2 = {x: 40, y: 160, w: 1420, h: 540};
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const watch = cue(id, 'Watch the tangent'), zero = cue(id, 'exactly zero'), after = cue(id, 'After three'), record = cue(id, "Let's record");
	const X = kf(f, [[watch, -1.5], [zero - 30, 0], [zero + 24, 0], [after + 14, 3], [after + 26, 3], [record + 30, 4.4]]);
	const m = HIKE.df(X, {});
	return (
		<>
			<SceneHeading text="The sign of f′ gives the direction" at={2} />
			<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={WIN_H} family={HIKE} timeline={[{frame: 0, x: X}]} color={FN}
				xTicks={H_XTICKS} yTicks={H_YTICKS} xLabel="" yLabel="y = x⁴ − 4x³"
				point={{at: -30, color: INK}} tangent={{at: -30, halfLength: 130}} />
			<SignChart x={24} y={742} w={G2.w + 4} labelW={100} win={[-1.5, 4.5]} ticks={[-1, 1, 2, 4]} test={false} signLabel="f′(x)" boundaries={[{x: 0, at: -30}, {x: 3, at: -30}]} cells={[{sign: -1, at: watch + 10}, {sign: -1, at: zero + 30}, {sign: 1, at: after + 16}]} />
			<HandTag x={140} y={700} text="sign of f′(x)" at={record} size={38} color={INK} />
			<LiveReadoutBoard x={1480} y={200} width={344} at={-30} rows={[
				{label: 'x', value: X, digits: 2},
				{label: 'gradient f′(x)', value: m, digits: 2, role: 'gradient', glow: [zero, zero + 50]},
				{label: 'trail', value: 0, text: word(m)},
			]} />
			<RecallChip x={1480} y={570} w={344} at={-30} size={30}>Year 11: f′ &gt; 0 increasing, f′ &lt; 0 decreasing</RecallChip>
		</>
	);
};

// ---------- 3. stationary is not the same as turning ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const says = cue(id, 'says'), turning = cue(id, 'A turning point'), max = cue(id, 'local maximum'), min = cue(id, 'local minimum'), local = cue(id, 'Local means'), at3 = cue(id, 'So the point at three'), notTurn = cue(id, 'turning point', 3);
	const t = smooth(prog(f, 0, 24));
	const G = {x: 40, y: 160, w: lerp(G2.w, 1020, t), h: 540};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_H);
	const items: {term: string; def: React.ReactNode; at: number}[] = [
		{term: 'Stationary point', def: <>f′(c) = 0: the tangent is horizontal</>, at: 60},
		{term: 'Turning point', def: <>the curve changes direction</>, at: turning},
		{term: 'Local maximum', def: <>higher than every nearby point</>, at: max},
		{term: 'Local minimum', def: <>lower than every nearby point</>, at: min},
	];
	const [bx0] = M.pt(2.3, 0), [bx1] = M.pt(3.7, 0), [, by0] = M.pt(0, -15), [, by1] = M.pt(0, -30);
	return (
		<>
			<SceneHeading text="Stationary is not the same as turning" at={2} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_H} family={HIKE} timeline={[{frame: 0, x: 4.4}]} color={FN}
				xTicks={H_XTICKS} yTicks={H_YTICKS} xLabel="" yLabel="y = x⁴ − 4x³"
				overlay={() => (
					<FrameSvg>
						<Ring p={M.pt(0, 0)} r={30} />
						<Ring p={M.pt(3, -27)} r={30} />
						<rect x={bx0} y={by0} width={bx1 - bx0} height={by1 - by0} rx={22} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" opacity={prog(f, local, 12)} />
						<ellipse cx={M.pt(0, 0)[0]} cy={M.pt(0, 0)[1]} rx={60} ry={44} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, notTurn, 12)} />
					</FrameSvg>
				)} />
			<SignChart x={24} y={742} w={G.w + 4} labelW={100} win={[-1.5, 4.5]} ticks={[-1, 1, 2, 4]} test={false} signLabel="f′(x)" boundaries={[{x: 0, at: -30}, {x: 3, at: -30}]} cells={[{sign: -1, at: -30}, {sign: -1, at: -30}, {sign: 1, at: -30}]} />
			<div style={{position: 'absolute', left: bx1 + 10, top: (by0 + by1) / 2 - 20, opacity: prog(f, local, 12), ...DISPLAY(30, INK_SOFT, 700)}}>nearby</div>
			<Klass x={M.pt(3, 0)[0]} y={M.pt(0, -15)[1] - 80} at={at3} anchor="middle" size={32}>local minimum (the creek)</Klass>
			<Klass x={M.pt(0, 0)[0] + 30} y={M.pt(0, 0)[1] - 120} at={notTurn} size={32}>stationary, not turning (the ledge)</Klass>
			<Card x={1090} y={160} w={734} at={-30} pad="12px 28px 16px">
				{items.map((it, i) => (
					<Enter key={i} at={it.at} style={{marginTop: i ? 14 : 0}}>
						<div style={DISPLAY(44, i === 0 ? INK : i === 1 ? INK : FN, 800)}>{it.term}</div>
						<div style={{...DISPLAY(36, INK, 600), whiteSpace: 'normal'}}>{it.def}</div>
					</Enter>
				))}
			</Card>
			<HandTag x={1560} y={196} text="nothing more" at={says} size={40} color={VIOLET} />
			<Enter at={local} style={{position: 'absolute', left: 1090, top: 690, width: 734}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 20px', ...DISPLAY(34, '#4f4840', 700), whiteSpace: 'normal'}}>local: compared with nearby points only</div>
			</Enter>
		</>
	);
};

// ---------- 4. the sign on each side decides ----------
const PANELS: {fam: FnFamily; signs: [1 | -1, 1 | -1]; label: string; tag: string; key: 'max' | 'min' | 'inf'}[] = [
	{fam: {f: u => -u * u, df: u => -2 * u}, signs: [1, -1], label: 'local maximum', tag: 'a summit', key: 'max'},
	{fam: {f: u => u * u, df: u => 2 * u}, signs: [-1, 1], label: 'local minimum', tag: 'a valley floor', key: 'min'},
	{fam: {f: u => u ** 3, df: u => 3 * u * u}, signs: [1, 1], label: 'horizontal point of inflection', tag: 'a ledge: level, then on', key: 'inf'},
];
const WIN_P = {x: [-1.5, 1.5] as Range, y: [-2, 2] as Range};
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const max = cue(id, 'maximum'), min = cue(id, 'minimum'), inf = cue(id, 'inflection'), stat = cue(id, "It's stationary");
	const at = {max, min, inf};
	const W = 570, X0 = [60, 675, 1290];
	return (
		<>
			<SceneHeading text="The sign on each side decides" at={2} />
			{PANELS.map((p, i) => {
				const on = f >= at[p.key] - 6;
				const M = gmap(X0[i], 190, W, 440, WIN_P);
				return (
					<React.Fragment key={p.key}>
						<div style={{position: 'absolute', left: X0[i] - 6, top: 182, width: W + 12, height: 610, borderRadius: 20, background: on ? 'rgba(220,234,247,0.45)' : undefined}} />
						<FunctionSimulator at={-30} x={X0[i]} y={190} width={W} height={440} window={WIN_P} family={p.fam} timeline={[{frame: 0, x: 0}]} color={FN} curveWidth={on ? 8 : 6}
							xTicks={[-1, 1]} yTicks={[-1, 1]} xLabel="" yLabel="y" point={{at: -30, color: INK}} tangent={{at: -30, halfLength: 110}} />
						<SignStrip x={X0[i]} y={640} width={W} windowX={WIN_P.x} boundaries={[{x: 0, kind: 'zero'}]} cells={[{sign: p.signs[0]}, {sign: p.signs[1]}]} showTests={false} rowLabel="" />
						<Klass x={M.pt(0, 0)[0]} y={204} at={at[p.key] + 4} anchor="middle" size={i === 2 ? 30 : 34}>{p.label}</Klass>
						<HandTag x={X0[i] + W / 2} y={816} text={p.tag} at={at[p.key] + 14} size={38} color={INK} anchor="middle" />
					</React.Fragment>
				);
			})}
			<HandTag x={X0[2] + W / 2} y={858} text="stationary, not turning" at={stat} size={38} color={VIOLET} anchor="middle" />
			<Enter at={inf + 50} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#fffdf8', borderRadius: 14, padding: '4px 22px', boxShadow: '0 8px 18px rgba(60,45,20,0.10)', ...DISPLAY(34, INK, 800)}}><span style={{color: UP}}>+</span> to <span style={{color: DOWN}}>−</span>: local max.   <span style={{color: DOWN}}>−</span> to <span style={{color: UP}}>+</span>: local min.   Same sign: horizontal point of inflection.</div>
			</Enter>
		</>
	);
};
