// Scenes 1 to 4: d09's frame becomes the coaster ride; level lines; where the highest point can be; the method.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, SceneHeading, kf, smooth, vis, CARD, CARD_SHADOW} from '../../math/studio';
import {cue} from './common';
import {D09Final} from '../math-a12-d09/s4';
import {Valley} from '../math-a12-d09/parts';
import {
	AMB, AnswerBox, BLUE, CandTable, Chip, CoasterStage, GREEN, HeightBars, JOIN_STAGE, Legend, Line, METHOD_STAGE, RED, RIDE_STAGE, ROLE_KEY, RecallChip, RingAt, Stub, TEAL, VIOLET,
	cubic, dcubic, gmap, highestSoFar, lerpStage, stageMap,
} from './parts';
import type {GMap} from './parts';

const RC = 1450; // right column left edge
const Q_TEXT = <>largest value on<br />−2 ≤ x ≤ 3?</>;

/** The d09 handoff chips and marks (d10 frame 0). */
const HandoffMarks: React.FC<{Mp: GMap; ringOut?: number}> = ({Mp, ringOut}) => {
	const [hx, hy] = Mp.pt(-1, 2), [dx, dy] = Mp.pt(1, -2);
	const f = useCurrentFrame();
	const o = ringOut === undefined ? 1 : 1 - prog(f, ringOut, 12);
	return <g opacity={o}>
		<circle cx={hx} cy={hy} r={30} fill="none" stroke={INK} strokeWidth={5} />
		<circle cx={dx} cy={dy} r={10} fill={INK_SOFT} opacity={0.6} />
		<text x={hx - 40} y={hy - 46} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">local maximum (−1, 2)</text>
	</g>;
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const picture = cue(id, 'Picture'), included = cue(id, 'included'), near = cue(id, 'Near'), hump = cue(id, 'hump'), ride = cue(id, 'But ride on'), eighteen = cue(id, 'eighteen'), how = cue(id, 'How do we');
	const g = smooth(prog(f, picture + 12, 30));
	const join = prog(f, picture, 18);
	const st = lerpStage(JOIN_STAGE, RIDE_STAGE, g);
	const trackO = prog(f, picture + 30, 22);
	const carO = prog(f, picture + 46, 14);
	const carX = kf(f, [[near, -2], [near + 50, -1], [ride + 4, -1], [ride + 40, 0.2], [ride + 80, 1.6], [eighteen - 6, 3]]);
	const Mr = stageMap(RIDE_STAGE);
	const [ex, ey] = Mr.pt(3, 18);
	const bandPulse = vis(f, included, included + 70, 10);
	const qY = kf(f, [[how, 266], [how + 24, 150]]);
	return (
		<>
			{join < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - join}}>
				{/* d09's final frame, exactly (imported from d09) */}
				<Enter at={-30} style={{position: 'absolute', left: 96, top: 104}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>Turn the signs into arrows; the arrows sketch the shape.</span></Enter>
				<Valley x={1600} y={96} w={224} at={-30} />
				<D09Final />
			</div> : null}
			<SceneHeading text="Global maximum and minimum: which candidate wins?" at={picture + 4} size={54} />
			<div style={{position: 'absolute', inset: 0, opacity: join}}>
			<CoasterStage st={st} trackO={trackO} carX={carX} carO={carO} platformO={prog(f, picture + 40, 14)} yLabel="y">
				{Mp => <>
					<HandoffMarks Mp={Mp} ringOut={ride} />
					{bandPulse > 0 ? (() => {const [a, t] = Mp.pt(-2, 20), [b, bt] = Mp.pt(3, -4); return <rect x={a} y={t} width={b - a} height={bt - t} fill="none" stroke={INK} strokeWidth={6} opacity={0.6 * bandPulse} />;})() : null}
					<RingAt p={Mp.pt(-2, -2)} r={26} at={included + 4} out={included + 70} />
					<RingAt p={Mp.pt(3, 18)} r={26} at={included + 4} out={included + 70} />
					{f >= near + 20 ? (() => {const [l, y] = Mp.pt(-1.45, 3.4), [r] = Mp.pt(-0.55, 0); const o = vis(f, near + 20, ride, 12); return <g opacity={o}><path d={`M${l},${y + 14} V${y} H${r} V${y + 14}`} stroke={INK} strokeWidth={4} strokeDasharray="10 8" fill="none" /><text x={(l + r) / 2} y={y - 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: INK}}>nearby</text></g>;})() : null}
					{f >= picture + 40 ? (() => {const [x0, y0] = Mp.pt(0.12, 0); return <text x={x0 + 6} y={y0 - 12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, fill: INK_SOFT}} opacity={prog(f, picture + 50, 12)}>platform level</text>;})() : null}
					{f >= eighteen ? <circle cx={Mp.pt(3, 18)[0]} cy={Mp.pt(3, 18)[1]} r={14} fill={INK} stroke={CARD} strokeWidth={4} /> : null}
				</>}
			</CoasterStage>
			</div>
			<HandTag x={Mr.pt(-1.1, 0)[0]} y={Mr.pt(0, 5.6)[1]} text="the hump" at={hump} out={ride + 30} size={42} color={BLUE} />
			{/* readout board in the plot's empty upper left */}
			<LiveReadoutBoard x={210} y={226} width={500} inline at={picture + 56} out={undefined} rows={[
				{label: 'x', value: carX, digits: 2},
				{label: 'height f(x)', value: cubic(carX), digits: 2, role: 'a', unit: 'm'},
				{label: 'highest so far', value: highestSoFar(carX), digits: 2, unit: 'm', glow: [ride + 60, eighteen + 40]},
				{label: 'slope f′(x)', value: dcubic(carX), digits: 2, role: 'gradient'},
			]} />
			<Enter at={eighteen} style={{position: 'absolute', left: 760, top: 222}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, textShadow: '0 0 8px #fffdf8, 0 0 14px #fffdf8'}}>f(3) = 27 − 9 = 18</span></Enter>
			<HandTag x={ex - 40} y={ey + 90} text="top of the climb" at={eighteen + 12} size={42} color={INK} anchor="end" />
			{/* right column */}
			<Enter at={picture + 10} style={{position: 'absolute', left: RC, top: qY, width: 374}}>
				<div style={{background: CARD, borderRadius: 18, padding: '8px 22px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.2}}>{Q_TEXT}</div>
			</Enter>
			<Card x={RC} y={440} w={374} at={cue(id, 'The stretch runs')} pad="12px 22px 14px">
				<CardTitle>The stretch</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK}}>−2 ≤ x ≤ 3</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK}}>both ends included</div>
			</Card>
			<Chip x={RC} y={660} at={eighteen + 6} size={56}>18 &gt; 2</Chip>
			<HandTag x={RC} y={800} text="a local max isn't always the largest" at={cue(id, 'So a local')} size={34} color={INK} />
		</>
	);
};

// ---------- 2. global maximum and minimum: level lines ----------
const lineColor = TEAL;
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const point = cue(id, 'A point'), picture = cue(id, 'Picture a'), it = cue(id, 'it', 1), putTwo = cue(id, 'Put the line'), pokes = cue(id, 'pokes through'), end = cue(id, 'end'), put18 = cue(id, 'Put it at'), floor = cue(id, 'floor'), below = cue(id, 'below', 2);
	const Mr = stageMap(RIDE_STAGE);
	const L = kf(f, [[picture, 10], [putTwo, 10], [putTwo + 26, 2], [put18, 2], [put18 + 30, 18]]);
	const lineO = vis(f, picture + 10, floor - 10, 14) + (f >= floor - 10 ? 0.55 * prog(f, floor - 10, 10) : 0);
	const floorY = kf(f, [[floor, -4.2], [floor + 34, -2]]);
	const floorO = prog(f, floor, 10);
	const above = Math.max(...Array.from({length: 101}, (_, i) => cubic(-2 + (5 * i) / 100))) > L + 1e-6;
	const [rx0] = Mr.pt(-2.5, 0), [rx1] = Mr.pt(3.5, 0);
	return (
		<>
			<SceneHeading text="Global maximum: nothing above it" at={-24} size={54} />
			<Legend items={ROLE_KEY} />
			<CoasterStage st={RIDE_STAGE} carX={3} carO={0.85} platformO={0.6}>
				{Mp => {
					const [, ly] = Mp.pt(0, L), [, fy] = Mp.pt(0, floorY);
					// the parts of the track above the ceiling, in red
					const segs: string[] = [];
					let cur = '';
					for (let i = 0; i <= 300; i++) {
						const x = -2 + (5 * i) / 300, y = cubic(x);
						if (y > L + 0.02) {const [px, py] = Mp.pt(x, y); cur += `${cur ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;} else if (cur) {segs.push(cur); cur = '';}
					}
					if (cur) segs.push(cur);
					const tintO = lineO > 0.5 && f < floor ? prog(f, picture + 20, 12) : 0;
					return <>
						{tintO > 0 ? segs.map((d, i) => <path key={i} d={d} stroke={RED} strokeWidth={11} fill="none" strokeLinecap="round" opacity={tintO} />) : null}
						{lineO > 0.001 ? <line x1={rx0} x2={rx1} y1={ly} y2={ly} stroke={lineColor} strokeWidth={6} opacity={lineO} /> : null}
						{floorO > 0.001 ? <line x1={rx0} x2={rx1} y1={fy} y2={fy} stroke={lineColor} strokeWidth={6} opacity={floorO} /> : null}
						<RingAt p={Mp.pt(3, 18)} r={34} at={put18 + 32} color={GREEN} width={6} />
						<RingAt p={Mp.pt(-2, -2)} r={30} at={floor + 36} color={GREEN} width={6} />
						<RingAt p={Mp.pt(1, -2)} r={30} at={floor + 40} color={GREEN} width={6} />
					</>;
				}}
			</CoasterStage>
			<Card x={200} y={222} w={950} at={-20} pad="14px 26px 16px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: GREEN}}>{f < point ? 'global maximum: the largest value over the whole domain' : 'global maximum at P(a, f(a)):'}</div>
				{f >= point ? <Enter at={point}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, marginTop: 4}}>f(x) ≤ f(a) for every x in the domain</div></Enter> : null}
				{f >= below - 2 ? <Enter at={below}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, marginTop: 8}}><span style={{color: GREEN}}>global minimum:</span> f(x) ≥ f(a) for every x</div></Enter> : null}
			</Card>
			<HandTag x={210} y={Mr.pt(0, L)[1] + 44} text="ceiling: is anything above it?" at={it} out={putTwo} size={40} color={TEAL} />
			<Enter at={-30} style={{position: 'absolute', left: RC, top: 150, width: 374}}>
				<div style={{background: CARD, borderRadius: 18, padding: '8px 22px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.2}}>{Q_TEXT}</div>
			</Enter>
			<Chip x={RC} y={310} at={-20} out={picture} size={44}>the hump: 2</Chip>
			<Chip x={RC} y={410} at={-20} out={picture} size={44}>top of the climb: 18</Chip>
			<LiveReadoutBoard x={RC} y={300} width={374} at={picture + 10} out={floor - 6} rows={[
				{label: <span style={{color: TEAL}}>level line at</span>, value: L, digits: 2, unit: 'm'},
				{label: 'track above the line?', value: 0, text: above ? 'yes' : 'no', role: above ? 'mistake' : 'answer'},
			]} />
			<HandTag x={RC} y={620} text="pokes through" at={pokes} out={put18} size={44} color={RED} marks={[{kind: 'arrow', from: [RC - 10, 640], to: [Mr.pt(2.55, 0)[0] + 20, Mr.pt(0, 9)[1]], bend: -0.2}]} markAt={end} />
			<HandTag x={RC} y={620} text="global maximum (3, 18)" at={put18 + 40} size={38} color={GREEN} />
			<Chip x={RC} y={690} at={put18 + 50} size={36}>nothing above 18</Chip>
			<HandTag x={Mr.pt(-1.4, 0)[0]} y={905} text="floor: touches twice" at={floor + 40} size={42} color={TEAL}
				marks={[{kind: 'arrow', from: [Mr.pt(-1.5, 0)[0], 880], to: [Mr.pt(-2, 0)[0] + 10, Mr.pt(0, -2)[1] + 22], bend: 0.2}, {kind: 'arrow', from: [Mr.pt(0.3, 0)[0], 880], to: [Mr.pt(1, 0)[0] - 8, Mr.pt(0, -2)[1] + 22], bend: -0.2}]} markAt={floor + 46} />
		</>
	);
};

// ---------- 3. where the highest point can be ----------
const ABS = {f: (u: number) => Math.abs(u - 3), df: (u: number) => Math.sign(u - 3), domain: [{from: 0, to: 10, includeFrom: true, includeTo: true}]};
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const suppose = cue(id, 'Suppose'), point = cue(id, 'point', 2), soInside = cue(id, 'So inside'), atEnd = cue(id, 'But at an end'), uphill = cue(id, 'uphill direction'), domain = cue(id, 'domain'),
		corner = cue(id, 'sharp corner'), it = cue(id, 'find it'), onClosed = cue(id, 'On a closed'), cands = cue(id, 'candidates'), breaks = cue(id, 'If the curve breaks');
	const Mr = stageMap(RIDE_STAGE);
	const carX = kf(f, [[suppose, 3], [suppose + 50, 0], [point, 0], [point + 26, -0.4], [soInside + 6, -0.4], [soInside + 40, -1], [atEnd + 10, -1], [atEnd + 70, 3]]);
	const stubO = prog(f, suppose + 50, 12) * (1 - vis(f, soInside + 6, soInside + 40, 6)) * (1 - vis(f, atEnd + 10, atEnd + 70, 6));
	const fadeLines = 1 - prog(f, 0, 20);
	const [px, py] = Mr.pt(3, 18);
	const ang = Math.atan2(-24 * Mr.sy, Mr.sx);
	const arrowLen = 150;
	const ax = px + Math.cos(ang) * arrowLen, ay = py + Math.sin(ang) * arrowLen;
	const P = {x: 210, y: 226, w: 560, h: 420};
	const W = {x: [-0.6, 10.6] as [number, number], y: [-1.2, 8] as [number, number]};
	const MP = gmap(P.x + 10, P.y + 70, P.w - 20, P.h - 70, W);
	return (
		<>
			<SceneHeading text="Where can the highest point be?" at={-24} size={54} />
			<Legend items={ROLE_KEY} />
			<CoasterStage st={RIDE_STAGE} carX={carX} platformO={0.6}>
				{Mp => <>
					{fadeLines > 0 ? <line x1={Mp.pt(-2.5, 0)[0]} x2={Mp.pt(3.5, 0)[0]} y1={Mp.pt(0, -2)[1]} y2={Mp.pt(0, -2)[1]} stroke={TEAL} strokeWidth={6} opacity={fadeLines} /> : null}
					<Stub Mp={Mp} X={carX} Y={cubic(carX)} m={dcubic(carX)} half={110} opacity={stubO} />
					{f >= point ? (() => {const [a1, b1] = Mp.pt(0, 0), [a2, b2] = Mp.pt(-0.42, cubic(-0.42)); const o = vis(f, point, soInside + 10); return <g opacity={o}><path d={`M${a1},${b1 - 60} Q${(a1 + a2) / 2},${b1 - 100} ${a2},${b2 - 56}`} stroke={VIOLET} strokeWidth={5} fill="none" /><path d={`M${a2 + 4},${b2 - 76} L${a2},${b2 - 56} L${a2 + 22},${b2 - 52}`} stroke={VIOLET} strokeWidth={5} fill="none" /></g>;})() : null}
					{f >= uphill ? <g opacity={prog(f, uphill, 10)}>
						<line x1={px} y1={py} x2={ax} y2={ay} stroke={VIOLET} strokeWidth={7} strokeDasharray="14 10" strokeLinecap="round" />
						<path d={`M${ax - 20 * Math.cos(ang - 0.5)},${ay - 20 * Math.sin(ang - 0.5)} L${ax},${ay} L${ax - 20 * Math.cos(ang + 0.5)},${ay - 20 * Math.sin(ang + 0.5)}`} stroke={VIOLET} strokeWidth={7} fill="none" strokeLinecap="round" />
						<line x1={px} x2={px} y1={Mp.pt(0, 20)[1] - 30} y2={Mp.pt(0, -4)[1]} stroke={INK} strokeWidth={4} strokeDasharray="6 8" />
					</g> : null}
				</>}
			</CoasterStage>
			<HandTag x={Mr.pt(-0.5, 0)[0]} y={Mr.pt(0, 5.2)[1]} text="roll uphill: higher" at={point + 8} out={soInside + 6} size={40} color={VIOLET} anchor="middle" />
			<HandTag x={Mr.pt(-1, 0)[0]} y={Mr.pt(0, 5.2)[1]} text="flat: stationary point" at={soInside + 40} out={corner - 10} size={40} color={VIOLET} anchor="middle" />
			<HandTag x={px - 30} y={200} text="uphill leaves the stretch" at={domain} size={40} color={INK} anchor="end" />
			{/* readout */}
			<Enter at={-20} style={{position: 'absolute', left: RC, top: 150, width: 374}}>
				<div style={{background: CARD, borderRadius: 18, padding: '8px 22px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.2}}>{Q_TEXT}</div>
			</Enter>
			<LiveReadoutBoard x={RC} y={300} width={374} inline at={-20} rows={[
				{label: 'height', value: cubic(carX), digits: 2, role: 'a', unit: 'm'},
				{label: 'slope', value: dcubic(carX), digits: 2, role: 'gradient'},
			]} />
			{/* corner panel (site drill 4) */}
			<Card x={P.x} y={P.y} w={P.w} h={P.h} at={corner} pad="10px 20px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>y = |x − 3|, 0 ≤ x ≤ 10</div>
			</Card>
			{f >= corner ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, corner, 14)}}>
				<FunctionSimulator x={P.x + 10} y={P.y + 70} width={P.w - 20} height={P.h - 70} window={W} family={ABS} timeline={[{frame: 0, x: 3}]} color={BLUE} curveWidth={6} at={-30}
					xTicks={[3, 10]} yTicks={[3, 7]} xLabel="" yLabel="" />
				<FrameSvg>
					<Stub Mp={MP} X={3} Y={0} m={-1} half={70} opacity={prog(f, corner + 20, 10)} />
					<Stub Mp={MP} X={3} Y={0} m={1} half={70} opacity={prog(f, corner + 32, 10)} />
					<circle cx={MP.pt(3, 0)[0]} cy={MP.pt(3, 0)[1]} r={12} fill={AMB} stroke={CARD} strokeWidth={4} />
					<RingAt p={MP.pt(3, 0)} r={30} at={it} color={GREEN} width={5} />
					<circle cx={MP.pt(0, 3)[0]} cy={MP.pt(0, 3)[1]} r={9} fill={INK} /><circle cx={MP.pt(10, 7)[0]} cy={MP.pt(10, 7)[1]} r={9} fill={INK} />
				</FrameSvg>
				<HandTag x={MP.pt(3.6, 0)[0]} y={MP.pt(0, 5.3)[1]} text="no single tangent:" at={corner + 30} size={36} color={AMB} />
				<HandTag x={MP.pt(3.6, 0)[0]} y={MP.pt(0, 3.9)[1]} text="f′(3) doesn't exist" at={cue(id, "f prime doesn't")} size={36} color={AMB} />
			</div> : null}
			{/* the candidate card */}
			<Card x={RC} y={490} w={374} at={soInside} pad="12px 22px 14px" border={f >= cands ? INK : undefined}>
				<CardTitle>{f >= cands ? 'Candidates' : 'The highest point can be'}</CardTitle>
				<Enter at={soInside}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: VIOLET}}>flats inside</div></Enter>
				{f >= atEnd ? <Enter at={atEnd}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>both ends</div></Enter> : null}
				{f >= corner ? <Enter at={corner}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: AMB}}>corners</div><div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: AMB}}>(f′ doesn't exist)</div></Enter> : null}
			</Card>
			<RecallChip x={RC} y={820} at={onClosed + 20} size={30}>closed interval,<br />unbroken curve</RecallChip>
			<RecallChip x={RC} y={930} at={breaks} size={30}>a break: examine it too</RecallChip>
		</>
	);
};

// ---------- 4. list, evaluate, compare ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const list = cue(id, 'List'), work = cue(id, 'work out'), compare = cue(id, 'compare'), here = cue(id, 'Here'), so = cue(id, 'So the stationary'), inside = cue(id, 'both inside'), endpoints = cue(id, 'The endpoints'),
		v1 = cue(id, 'values are minus'), v2 = cue(id, 'two minus two and'), v3 = cue(id, 'minus two and eighteen'), v4 = cue(id, 'eighteen'), three = cue(id, 'equals three'), twice = cue(id, 'twice', 1), one = cue(id, 'x equals one'),
		coaster = cue(id, 'On the coaster'), start = cue(id, 'start'), dip = cue(id, 'dip'), notice = cue(id, 'Notice');
	const g = smooth(prog(f, 0, 30));
	const st = lerpStage(RIDE_STAGE, METHOD_STAGE, g);
	const Mm = stageMap(METHOD_STAGE);
	const scanX = kf(f, [[list + 10, -2], [list + 200, 3]]);
	const scanO = vis(f, list + 10, list + 230, 10);
	const carX = kf(f, [[coaster, -2], [coaster + 30, 1], [coaster + 70, 3]]);
	const maxTag = three + 6, minTag = one + 4;
	const RX = 1060, RW = 764;
	return (
		<>
			<SceneHeading text="List, evaluate, compare" at={-24} size={54} />
			<Legend items={ROLE_KEY} />
			<CoasterStage st={st} carX={carX} carW={108} platformO={0.4 * (1 - g)}>
				{Mp => <>
					{scanO > 0.001 ? <circle cx={Mp.pt(scanX, cubic(scanX))[0]} cy={Mp.pt(scanX, cubic(scanX))[1]} r={14} fill={VIOLET} stroke={CARD} strokeWidth={5} opacity={scanO} /> : null}
					<HeightBars Mp={Mp} bars={[
						{x: -2, y: -2, at: v1, label: '−2', glow: prog(f, minTag, 12)},
						{x: -1, y: 2, at: v2, label: '2'},
						{x: 1, y: -2, at: v3, label: '−2', glow: prog(f, minTag, 12)},
						{x: 3, y: 18, at: v4, label: '18', glow: prog(f, maxTag, 12)},
					]} />
					<Stub Mp={Mp} X={-1} Y={2} m={0} half={60} opacity={prog(f, inside, 12)} />
					<Stub Mp={Mp} X={1} Y={-2} m={0} half={60} opacity={prog(f, inside, 12)} />
				</>}
			</CoasterStage>
			<HandTag x={Mm.pt(-0.5, 0)[0]} y={Mm.pt(0, -2)[1] + 20} text="twice" at={twice} out={coaster} size={42} color={GREEN} anchor="middle" />
			<HandTag x={Mm.pt(2.7, 0)[0]} y={Mm.pt(0, 18)[1] + 6} text="top of the climb" at={cue(id, 'top of')} size={38} color={GREEN} anchor="end" />
			<HandTag x={Mm.pt(-2, 0)[0] + 30} y={Mm.pt(0, -2)[1] + 54} text="start" at={start} size={38} color={GREEN} anchor="middle" />
			<HandTag x={Mm.pt(1, 0)[0]} y={Mm.pt(0, -2)[1] + 54} text="dip" at={dip} size={38} color={GREEN} anchor="middle" />
			{/* working under the graph */}
			<Line at={here} x={96} y={710} dim={prog(f, so, 14)}>f′(x) = 3x² − 3 = 3(x − 1)(x + 1)</Line>
			<Line at={so} x={96} y={790} dim={prog(f, endpoints, 14)}>= 0 at x = −1 and x = 1</Line>
			<HandTag x={760} y={828} text="both inside" at={inside} size={40} color={VIOLET} />
			<Line at={endpoints} x={96} y={870} size={46}>ends x = −2, x = 3;  f′ exists everywhere</Line>
			{/* method card and table */}
			<Card x={RX} y={150} w={RW} at={-20} pad="12px 26px 14px">
				<CardTitle>Method</CardTitle>
				{[['1. list the candidates', list], ['2. evaluate f at each', work], ['3. compare the values', compare]].map(([t, a], i) => (
					<div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, opacity: f >= (a as number) ? 1 : 0.0, marginTop: 2}}>{t}</div>
				))}
			</Card>
			<Card x={RX} y={400} w={RW} at={-20} out={so - 10} pad="12px 26px 14px">
				<CardTitle>Three kinds of candidate</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: VIOLET}}>flats inside the interval</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>both ends</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: AMB}}>corners (f′ doesn't exist)</div>
			</Card>
			<CandTable x={RX} y={400} w={RW} at={so} rows={[
				{x: 'x = −2', kind: 'end', value: '−2', at: endpoints, valueAt: v1, tag: {text: 'global min', at: minTag}},
				{x: 'x = −1', kind: 'flat', value: '2', at: so + 30, valueAt: v2},
				{x: 'x = 1', kind: 'flat', value: '−2', at: so + 40, valueAt: v3, tag: {text: 'global min', at: minTag + 8}},
				{x: 'x = 3', kind: 'end', value: '18', at: endpoints + 30, valueAt: v4, tag: {text: 'global max', at: maxTag}},
			]} />
			<Chip x={RX} y={800} at={notice} size={44} color={INK}>no classification needed</Chip>
			<AnswerBox at={minTag + 30} x={84} y={958} size={44}>global maximum 18 at x = 3;  global minimum −2 at x = −2 and x = 1</AnswerBox>
		</>
	);
};

