// Scenes 1 and 2: the hook (d16's final frame, then the laptop whose total-views chart draws day by day: which
// day brought the most new views?) and three points are not a sketch (two wrong curves through the cubic's points).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, prog} from '../../kit';
import {FunctionSimulator, HandTag, SceneHeading, kf, smooth, MATH_STRAND_ACCENT} from '../../math/studio';
import {D16FinalFrame} from '../math-a12-d16/s5';
import {K1, K2} from './cuemap';
import {CUB, BoxCard, Chip, GREY_INK, LaptopViews, Line, RecallChip, VIOLET, ViewsStrip, ruler, wig} from './parts';
import {CubicPoints, W1, WrongCurves, plot} from './geom';
import type {Stage} from './geom';

export const HEAD_TOPIC = 'Sketching: reading a curve through its derivatives';
/** The day shown on the laptop during the hook (draw from "This laptop" to just after "level off"). */
export const hookDay = (f: number) => kf(f, [[K1.laptop + 10, 0], [K1.launch, 1.4], [K1.fast + 14, 4.4], [K1.level + 8, 8.4], [K1.level + 90, 14]], false);
const SCREEN_TAGS = (fast: number, launch: number, level: number, q: number) => [
	{X: 0.5, Y: 26, text: 'slow start', at: launch + 4},
	{X: 4.7, Y: 36, text: 'fast', at: fast + 4},
	{X: 7.4, Y: 60, text: 'levelling off', at: level + 6},
	{X: 2.3, Y: 58, text: '?', at: q, color: '#cdb9f5'},
];

// ---------- 1. hook ----------
const LT = {x: 40, y: 172, w: 1040};
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const swap = smooth(prog(f, k.now - 4, 26));
	const day = hookDay(f);
	return (
		<>
			{swap < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - swap}}><D16FinalFrame /></div> : null}
			<SceneHeading text={HEAD_TOPIC} at={k.now + 10} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: swap, transform: `translateX(${(1 - swap) * 140}px)`}}>
				{swap > 0.001 ? <>
					<LaptopViews x={LT.x} y={LT.y} w={LT.w} day={day} tags={SCREEN_TAGS(k.fast, k.launch, k.level, k.views)} />
					<ViewsStrip x={1130} y={176} w={740} day={day} daily={false} />
					<BoxCard x={1130} y={340} w={740} at={k.laptop + 20} size={44} title="The channel's chart">
						<div>total views, day by day</div>
						<div style={{opacity: prog(f, k.launch, 12)}}>launch: a slow start</div>
						<div style={{opacity: prog(f, k.fast, 12)}}>then: fast</div>
						<div style={{opacity: prog(f, k.level, 12)}}>then: levelling off</div>
					</BoxCard>
				</> : null}
			</div>
			<Chip x={1130} y={660} w={740} at={k.from} size={48} color={MATH_STRAND_ACCENT}>From this graph alone: which day brought the most new views?</Chip>
			<HandTag x={1150} y={920} text="read it off the shape" at={k.byEnd + 10} size={44} color={VIOLET} />
		</>
	);
};

// ---------- 2. three points are not a sketch ----------
export const G2: Stage = {x: 30, y: 140, w: 1060, h: 800};
const RX = 1130;
export const S02: React.FC = () => {
	const k = K2;
	const M = plot(G2, W1);
	const wq = M.pf(-1.75, wig(-1.75)), rq = M.pf(1.6, ruler(1.6));
	return (
		<>
			<SceneHeading text="Three points are not a sketch" at={4} size={56} />
			<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={W1} family={CUB} timeline={[{frame: 0, x: 0}]} at={-30} hideMainCurve
				xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" />
			<WrongCurves M={M} wigAt={k.points} rulerAt={k.lines} />
			<CubicPoints M={M} at={[k.max, k.min, k.infl]} />
			<HandTag x={wq[0] - 10} y={wq[1] - 30} text="?" at={k.wrong} size={64} color={GREY_INK} />
			<HandTag x={rq[0] + 40} y={rq[1] + 20} text="?" at={k.wrong + 8} size={64} color={GREY_INK} />
			{/* right column */}
			<RecallChip x={RX} y={160} at={-30} size={34}>a cubic you've met before</RecallChip>
			<Line x={RX} y={232} at={-30} size={56}>y = x³ − 3x</Line>
			<Line x={RX} y={330} at={k.max} size={44}>local max (−1, 2)</Line>
			<Line x={RX} y={392} at={k.min} size={44}>local min (1, −2)</Line>
			<Line x={RX} y={454} at={k.infl} size={44}>inflection (0, 0)</Line>
			<HandTag x={RX} y={560} text="enough to draw it?" at={k.enough} out={k.points} size={46} color={VIOLET} />
			<Line x={RX} y={530} at={k.points} size={40} color={GREY_INK}>wiggly curve: through all three</Line>
			<Line x={RX} y={584} at={k.lines} size={40} color={GREY_INK}>straight lines: through all three</Line>
			<HandTag x={RX} y={672} text="both wrong" at={k.wrong} size={48} color="#b8322a" />
			<Line x={RX} y={712} at={k.rules} size={40}>what rules them out: the derivatives</Line>
			<BoxCard x={RX} y={790} w={740} at={k.constraints} size={44} border={INK} bw={4}>
				<div><b>constraint</b>: a rule the curve must obey</div>
			</BoxCard>
		</>
	);
};
