// Scenes 1 to 3: d10's frame, the lighthouse and its beam on the beach beside y = tan x; measured slopes; the two turns.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, HandTag, LiveReadoutBoard, MarkSpan, SceneHeading, kf, smooth, vis, CARD, CARD_SHADOW} from '../../math/studio';
import {D10FinalFrame} from '../math-a12-d10/s3';
import {cue} from './common';
import {AMB, BLUE, BeamMap, Chip, GREY, LighthouseImg, PI, RecallChip, TEAL, VIOLET, WindowT, beamRows, gmap, sec2, tl, WIN_T, lighthouseW} from './parts';

const G = {x: 96, y: 150, w: 1000, h: 640};
const G1 = {x: 96, y: 150, w: 1000, h: 860};
const MAP = {x: 1120, y: 150, w: 704, h: 470};
const THUMB = {x: 1404, y: 150, w: 420, h: 300};
const LEG: [string, string][] = [[INK, 'spot position = tan x'], [VIOLET, 'spot speed = slope'], [AMB, 'excluded']];
const Legend3: React.FC = () => (
	<div style={{position: 'absolute', right: 96, top: 26, display: 'flex', gap: 30}}>
		{LEG.map(([c, t]) => <span key={t} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: c}}>{t}</span>)}
	</div>
);

/** The measured-slopes table (under window T). cols: arrival frames of the three stops; third: the 1 + height² row. */
const SlopeTable: React.FC<{cols: [number, number, number]; third: number; dim?: number; ringAt?: number}> = ({cols, third, dim = 0, ringAt}) => {
	const f = useCurrentFrame();
	const cell = (at: number, c: React.ReactNode, color = INK) => <div style={{width: 170, textAlign: 'center', opacity: prog(f, at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color}}>{c}</div>;
	const head = (t: React.ReactNode, color = INK) => <div style={{width: 330, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color}}>{t}</div>;
	const g = vis(f, third, third + 120, 12);
	return (
		<div style={{position: 'absolute', left: 96, top: 830, width: 1000, opacity: 1 - 0.35 * dim, background: CARD, borderRadius: 20, padding: '8px 26px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center'}}>{head(ringAt !== undefined ? <MarkSpan kind="circle" at={ringAt} color={BLUE}>height</MarkSpan> : 'height')}{cell(cols[0], '0')}{cell(cols[1], '1')}{cell(cols[2], <>√3 <span style={{fontSize: 30, color: INK_SOFT}}>≈ 1.73</span></>)}</div>
			<div style={{display: 'flex', alignItems: 'center'}}>{head('slope', VIOLET)}{cell(cols[0], '1', VIOLET)}{cell(cols[1], '2', VIOLET)}{cell(cols[2], '4', VIOLET)}</div>
			<div style={{display: 'flex', alignItems: 'center', borderRadius: 12, background: g > 0 ? `rgba(231,224,242,${0.8 * g})` : undefined, opacity: prog(f, third, 12)}}>{head('1 + height²')}{cell(third, '1')}{cell(third + 10, '2')}{cell(third + 20, '4')}</div>
		</div>
	);
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const well = cue(id, "We'll"), first = cue(id, 'First'), tanx = cue(id, 'not tan x'), here = cue(id, "Here's where"), light = cue(id, 'A lighthouse'), turn = cue(id, 'Turn its beam'), graph = cue(id, "Here's its graph"), walls = cue(id, 'walls'),
		there = cue(id, 'There'), watch = cue(id, 'Watch its'), one = cue(id, 'is one'), falls = cue(id, 'falls'), so = cue(id, 'So why');
	const x = kf(f, [[turn + 8, 0], [turn + 45, 0.8], [turn + 85, 0], [there, 0], [there + 40, 1.45], [there + 66, PI / 2], [watch, PI / 2], [watch + 16, -1.2], [one, 0], [one + 22, 0], [one + 75, 1.2]]);
	const shrink = smooth(prog(f, well, 40));
	const M = gmap(G1.x, G1.y, G1.w, G1.h, WIN_T);
	const [ax] = M.pt(PI / 2, 0), [, ay0] = M.pt(0, 5), [, ay1] = M.pt(0, -5);
	const glow = vis(f, there + 50, watch, 10);
	const lhH = 560;
	return (
		<>
			{/* d10's final frame, shrinking to a thumbnail */}
			{f < tanx + 20 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, tanx, 18) - 0.3 * shrink, transform: `scale(${1 - 0.7 * shrink})`, transformOrigin: '1824px 1000px'}}><D10FinalFrame /></div> : null}
			<HandTag x={1824} y={1010} text="later: optimisation" at={well + 40} out={tanx} size={38} color={INK_SOFT} anchor="end" />
			<SceneHeading text="Why is the derivative of tan x sec²x?" at={first} size={56} />
			<RecallChip x={1120} y={170} at={tanx} out={light} size={32}>known: (sin x)′ = cos x, (cos x)′ = −sin x</RecallChip>
			<Enter at={first + 30} out={here} style={{position: 'absolute', left: 96, top: 300}}>
				<div style={{background: CARD, borderRadius: 20, padding: '18px 34px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, lineHeight: 1.4}}>
					<div>(sin x)′ = cos x  ✓</div><div>(cos x)′ = −sin x  ✓</div><div>(tan x)′ = <span style={{color: VIOLET}}>?</span></div>
				</div>
			</Enter>
			{/* the side-view lighthouse until the graph draws */}
			{f >= here ? <div style={{position: 'absolute', inset: 0, opacity: vis(f, here, graph, 16)}}>
				<LighthouseImg x={G1.x + (G1.w - lighthouseW(lhH)) / 2} y={G1.y + 120} h={lhH + 120} />
			</div> : null}
			<BeamMap {...MAP} angle={x} kmPx={180} below={100} at={light} />
			<LiveReadoutBoard x={MAP.x} y={640} width={MAP.w} inline at={light + 20} rows={beamRows(x)} />
			{f >= graph - 4 ? <WindowT x={G1.x} y={G1.y} width={G1.w} height={G1.h} timeline={tl([[0, x]])} at={graph} draw={{at: graph, dur: 40}}
				point={{at: graph + 30}} tangent={{at: watch + 10, halfLength: 150}}
				overlay={() => <FrameSvg>{glow > 0 ? <line x1={ax} x2={ax} y1={ay0} y2={ay1} stroke={AMB} strokeWidth={9} strokeDasharray="12 10" opacity={glow} /> : null}</FrameSvg>} /> : null}
			<HandTag x={M.pt(-PI / 2, 0)[0] + 10} y={M.pt(0, 4.4)[1]} text="asymptote: a wall" at={walls} size={38} color={GREY} />
			<HandTag x={MAP.x + 24} y={MAP.y + 50} text="beam parallel: never lands" at={there + 60} out={watch} size={40} color={INK} />
			<HandTag x={M.pt(0.15, 0)[0]} y={M.pt(0, -0.9)[1]} text="slope 1" at={one} size={42} color={VIOLET} />
			<HandTag x={MAP.x + 24} y={MAP.y + 50} text="straight in: 1 km per radian" at={one + 4} size={40} color={VIOLET} />
			<Chip x={MAP.x} y={910} at={falls} out={so} size={40}>never flatter than slope 1; never falling</Chip>
			<Chip x={MAP.x} y={910} at={so} size={40} color={VIOLET}>slope of tan x: why never below 1?<br />exactly what?</Chip>
		</>
	);
};

// ---------- 2. measure ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const one = cue(id, 'one.', 1), two = cue(id, 'two.', 1), four = cue(id, 'slope is four'), squared = cue(id, 'squared'), beach = cue(id, 'On the beach'), slowest = cue(id, 'slowest'), races = cue(id, 'races');
	const x = kf(f, [[0, 0], [two - 30, 0], [two, PI / 4], [four - 30, PI / 4], [four, PI / 3], [slowest - 10, PI / 3], [slowest + 20, 0], [races - 50, 0], [races + 10, 1.3], [races + 50, 1.3], [races + 90, PI / 3]]);
	const gh = G1.h + (G.h - G1.h) * smooth(prog(f, 0, 30));
	return (
		<>
			<SceneHeading text="Measure the slopes on the middle piece" at={-24} size={56} />
			<Legend3 />
			<WindowT x={G.x} y={G.y} width={G.w} height={gh} timeline={tl([[0, x]])} at={-30} point={{at: -30}} tangent={{at: -30, halfLength: 150}} />
			<BeamMap {...MAP} angle={x} kmPx={180} below={100} />
			<LiveReadoutBoard x={MAP.x} y={640} width={MAP.w} inline at={-30} rows={beamRows(x)} />
			{f >= 20 ? <SlopeTable cols={[one - 10, two, four]} third={squared} /> : null}
			<HandTag x={MAP.x + 20} y={MAP.y + 50} text="spot speed = 1 + (spot distance)²" at={beach} size={38} color={VIOLET} />
			<HandTag x={MAP.x + 20} y={MAP.y + 100} text="slowest straight in" at={slowest} out={races} size={38} color={INK} />
			<HandTag x={MAP.x + 20} y={MAP.y + 100} text="further along: races" at={races} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 3. the two turns ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const tan = cue(id, 'Tan x is'), everywhere = cue(id, 'everywhere'), bottom = cue(id, "Now the bottom's"), between = cue(id, 'Between'), squared = cue(id, 'squared', 3), two = cue(id, 'plus one two'), four = cue(id, 'plus three four'), near = cue(id, 'And near'), wall = cue(id, 'wall');
	const x = kf(f, [[0, PI / 3], [everywhere, PI / 3], [everywhere + 30, 0], [everywhere + 60, 0], [everywhere + 100, PI / 3], [two - 24, PI / 3], [two, PI / 4], [four - 24, PI / 4], [four, PI / 3], [near + 10, PI / 3], [near + 110, 1.35]]);
	const M = gmap(G.x, G.y, G.w, G.h, WIN_T);
	const [ax] = M.pt(PI / 2, 0), [, ay0] = M.pt(0, 5), [, ay1] = M.pt(0, -5);
	const t = Math.tan(x);
	return (
		<>
			<SceneHeading text="Two turns: why the slope is 1 + tan²x" at={-24} size={56} />
			<Legend3 />
			<WindowT x={G.x} y={G.y} width={G.w} height={G.h} timeline={tl([[0, x]])} at={-30} point={{at: -30}} tangent={{at: -30, halfLength: 150}}
				overlay={() => <FrameSvg>{f >= wall - 20 ? <line x1={ax} x2={ax} y1={ay0} y2={ay1} stroke={AMB} strokeWidth={9} strokeDasharray="12 10" opacity={prog(f, wall - 20, 12)} /> : null}</FrameSvg>} />
			<BeamMap {...THUMB} angle={x} kmPx={110} below={60} labels={false} />
			<HandTag x={THUMB.x + 20} y={THUMB.y + 40} text="races off" at={near + 70} size={38} color={VIOLET} />
			<Enter at={tan} style={{position: 'absolute', left: 1120, top: 160, width: 270}}>
				<div style={{background: '#f1ebdf', borderRadius: 16, padding: '8px 16px', border: '2px solid rgba(60,45,20,0.14)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.3}}>tan x =<br /><span style={{color: TEAL}}>sin x</span> / <span style={{color: BLUE}}>cos x</span></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: INK_SOFT, marginTop: 8}}>quotient rule video:<br /><span style={{color: TEAL}}>f′/g</span> and <span style={{color: BLUE}}>−fg′/g²</span></div>
			</Enter>
			<LiveReadoutBoard x={1120} y={470} width={704} inline at={-30} rows={[
				{label: 'height tan x', value: t, digits: 3},
				{label: "top's turn: cos x / cos x", value: 1, digits: 3, role: 'b', at: everywhere - 20, glow: [everywhere, everywhere + 110]},
				{label: "bottom's turn: tan²x", value: t * t, digits: 3, role: 'a', at: squared - 10, glow: [squared, squared + 90]},
				{label: 'slope = sum', value: sec2(x), digits: 3, role: 'gradient'},
			]} />
			<HandTag x={1130} y={866} text="exactly 1, everywhere" at={everywhere + 10} out={between} size={40} color={TEAL} />
			<HandTag x={1130} y={866} text="cos x shrinks, so sin x / cos x grows" at={between + 40} out={squared} size={38} color={BLUE} />
			<HandTag x={1130} y={866} text="tan²x = height²" at={squared + 10} size={40} color={BLUE} />
			<HandTag x={ax + 14} y={M.pt(0, 4.2)[1]} text="the steep wall" at={wall} size={40} color={AMB} />
			<SlopeTable cols={[-30, -30, -30]} third={-30} ringAt={squared + 6} />
			<Chip x={1120} y={920} at={bottom} size={40} color={VIOLET}>slope = 1 + tan²x</Chip>
		</>
	);
};
