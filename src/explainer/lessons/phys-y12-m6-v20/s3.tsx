// Scenes 11 to 16: two attempts (the painted coaster car with its fin short of the brake rail; the solid and slotted
// tubes with a magnet above each) and brief feedback (givens strip, the answer one stage at a time, one slate crossed
// slip), the handoff that closes Module 6 (the tube end on: a changing B with a curling E driving the current; could
// a changing E make B?; its last frame is exported as `M6V20FinalFrame` for Module 7) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CoasterBrake, CurlRing, CutTube, LinkedLoops, Swirl, UprightMagnet, coasterGeom, magnetHalfH, tubeGeom} from '../../physics/electromagnetism/eddy';
import {Shrunk} from '../phys-y12-m6-v19/parts';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, BLUE, FLUX, HEAT, Lbl, ROSE} from './parts';

// ---------- attempts ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>A roller-coaster car is slowed by a magnetic brake: copper fins attached to the car pass between rows of strong permanent magnets fixed beside the track. (a) Explain, with reference to {u ? <u>Lenz's law</u> : "Lenz's law"}, how the brake slows the car. (b) Apply the law of {u ? <u>conservation of energy</u> : 'conservation of energy'} to the braking process.</>;
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>A strong magnet is dropped down a vertical copper tube. An identical magnet is dropped down an identical copper tube that has a {u ? <u>narrow slot cut along its full length</u> : 'narrow slot cut along its full length'}. Compare the motion of the two magnets and explain the difference.</>;
/** Attempt 1's picture: the car with its fin just short of the brake rail (no currents, forces or energy). */
const CarSketch: React.FC<{id: string; swirls?: number; force?: number; w?: number; h?: number; carX?: number}> = ({id, swirls = 0, force = 0, w = 678, h = 560, carX = 40}) => {
	const wheel = h * 0.5, carW = w * 0.44, railX = w * 0.42, railW = w * 0.5;
	const g = coasterGeom(carX, wheel, carW, railX, railW);
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<CoasterBrake carX={carX} wheelY={wheel} carW={carW} railX={railX} railW={railW} id={id} track={[24, w - 24]}>
				{swirls > 0.001 ? <g opacity={swirls}>{[0.3, 0.7].map(k => <Swirl key={k} cx={g.fin.x0 + (g.fin.x1 - g.fin.x0) * k} cy={(g.fin.y0 + g.fin.y1) / 2 - 6} rx={18} ry={11} sense={1} color={ROSE.stroke} width={4} dots={0} />)}</g> : null}
			</CoasterBrake>
			{force > 0.001 ? <Arrow2 from={[(g.fin.x0 + g.fin.x1) / 2, g.fin.y1 + 40]} to={[(g.fin.x0 + g.fin.x1) / 2 - 130, g.fin.y1 + 40]} color={AMBER.stroke} width={9} head={26} opacity={force} /> : null}
			<text x={w * 0.5} y={h - 40} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>car moving into the brake</text>
		</svg>
	);
};
/** Attempt 2's picture: the solid and slotted tubes with a still magnet above each. */
const TubeSketch: React.FC = () => {
	const pa = {x: 200, y: 150, w: 80}, pb = {x: 420, y: 150, w: 80};
	const ga = tubeGeom(pa), gb = tubeGeom(pb, true);
	const ms = ga.s * 0.34, hh = magnetHalfH(ms);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<CutTube p={pa} id="v20-q2a" win={0} />
			<CutTube p={pb} slotted id="v20-q2b" win={0} />
			<UprightMagnet cx={ga.cx} cy={ga.top - hh - 8} s={ms} />
			<UprightMagnet cx={gb.cx} cy={gb.top - hh - 8} s={ms} />
			<text x={ga.cx} y={515} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>solid</text>
			<text x={gb.cx} y={515} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>slotted</text>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={4} picture={<CarSketch id="v20-q1" />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<TubeSketch />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const motion = cue(id, "against the car's motion"), res = cue(id, 'through their resistance'), slip = cue(id, 'The classic slip'), pushed = cap(id, cue(id, 'induced currents that are pushed'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>copper fins; moving between magnets; Lenz's law; conservation of energy</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={motion - 30} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={motion}><span>(a) fins move through B → Φ through loops in the copper changes → eddy currents → force on the currents opposes the motion (Lenz)</span></AnswerBox></Row>
				<Row at={res - 20} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={res}><span>(b) kinetic energy → electrical energy → heat in the fins (I²R); total energy conserved</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1280, top: 400}}><CarSketch id="v20-f1" w={560} h={440} carX={150} swirls={prog(f, motion - 30, 14)} force={prog(f, motion, 12)} /></div>
			<CrossedChip x={96} y={830} at={slip} crossAt={pushed} size={30} caption="copper isn't magnetic: the induced currents feel the force">the magnets attract the copper fins</CrossedChip>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const speed = cue(id, 'at a steady speed'), faster = cue(id, 'that magnet falls much faster'), slip = cue(id, 'The slip is saying'), flow = cap(id, cue(id, 'Small ones still flow'));
	const pa = {x: 1380, y: 330, w: 80}, pb = {x: 1640, y: 330, w: 80};
	const ga = tubeGeom(pa), gb = tubeGeom(pb, true);
	const ms = ga.s * 0.34, hh = magnetHalfH(ms);
	const ya = ga.top + hh + 20 + Math.min(200, 0.25 * f), yb = gb.top + hh + 20 + Math.min(ga.bot - ga.top - 2 * hh - 40, 1.6 * Math.max(0, f - faster + 60));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>identical magnets; solid tube; slot along full length</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 380, display: 'flex', flexDirection: 'column', gap: 18, width: 1150}}>
				<Row at={speed - 20} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={speed}><span>solid: large circular eddy currents → slow, steady fall</span></AnswerBox></Row>
				<Row at={faster - 20} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={faster}><span>slotted: paths cut → small currents → much faster, close to free fall</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<CutTube p={pa} id="v20-f2a" my={ya} rings={[[ya + hh + 30, 1, prog(f, speed - 20, 12)], [ya - hh - 30, -1, prog(f, speed - 20, 12)]]} ringColor={ROSE.stroke} />
				<CutTube p={pb} slotted id="v20-f2b" my={yb} rings={[[yb + hh + 30, 1, prog(f, faster - 20, 12), true], [yb - hh - 30, -1, prog(f, faster - 20, 12), true]]} ringColor={ROSE.stroke} />
				{f >= speed - 20 ? <><Arrow2 from={[ga.cx - 80, ya + 40]} to={[ga.cx - 80, ya - 50]} color={AMBER.stroke} width={7} head={20} /><Arrow2 from={[ga.cx - 110, ya + 40]} to={[ga.cx - 110, ya - 50]} color={AMBER.stroke} width={7} head={20} /></> : null}
				{f >= faster - 20 ? <Arrow2 from={[gb.cx - 80, yb + 20]} to={[gb.cx - 80, yb - 12]} color={AMBER.stroke} width={6} head={16} /> : null}
			</FrameSvg>
			<Lbl x={ga.cx} y={940} at={-30} color={INK} size={28} anchor="middle">solid</Lbl>
			<Lbl x={gb.cx} y={940} at={-30} color={INK} size={28} anchor="middle">slotted</Lbl>
			<CrossedChip x={96} y={800} at={slip} crossAt={flow} size={30} caption="reduced, not zero">the slot stops all eddy currents</CrossedChip>
		</>
	);
};

// ---------- 15. handoff (end of Module 6) ----------
const H = (() => {
	const id = 'handoff';
	return {id, left: cue(id, 'One question is left'), nobat: cue(id, 'no battery and no wire'), curls: cue(id, 'creates an electric field that curls round it'), current: cue(id, 'drives the current'), flip: cue(id, 'Now flip the idea'), travel: cue(id, 'travel off through space'), maxwell: cap(id, cue(id, 'How did Maxwell')), end: dur(id) - 1};
})();
const RING = {cx: 640, cy: 560, r: 240};
/** The handoff board at scene frame f (`final`: every label already written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const shift = final ? 160 : 160 * prog(f, H.travel, 90);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.maxwell} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.maxwell + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<CurlRing cx={RING.cx} cy={RING.cy} r={RING.r} bColor={FLUX} eColor={BLUE.stroke} iColor={ROSE.stroke} b={1} e={o(H.curls)} i={o(H.current)} phase={f * 1.2} opacity={o(4, 16)} />
				<LinkedLoops x={1150} y={760} n={6} a={BLUE.stroke} b={FLUX} shift={shift} opacity={o(H.travel)} />
				{final || f >= H.travel ? <text x={1150 + shift + 420} y={790} textAnchor="middle" opacity={o(H.travel + 20)} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 64, fill: BLUE.ink}}>?</text> : null}
			</FrameSvg>
			<Lbl x={RING.cx} y={RING.cy + RING.r + 70} at={at(H.left)} color={INK} size={28} anchor="middle">the copper tube, seen end on</Lbl>
			<HandTag x={RING.cx - 90} y={RING.cy - 30} text="B changing" at={at(H.left + 10)} size={34} color={FLUX} />
			{final ? null : <Chip x={1100} y={200} at={10} out={H.nobat} size={30} w={720} color={INK}>changing flux → eddy currents → Lenz: force against the motion</Chip>}
			<CrossedChip x={1100} y={190} at={at(H.nobat)} crossAt={at(H.nobat + 10)} size={30}>battery</CrossedChip>
			<CrossedChip x={1400} y={190} at={at(H.nobat + 8)} crossAt={at(H.nobat + 18)} size={30}>wires</CrossedChip>
			<Chip x={1100} y={320} at={at(H.curls)} size={32} w={720} color={BLUE.ink} border={BLUE.stroke}>changing B → E (curling round)</Chip>
			<Lbl x={RING.cx + RING.r + 40} y={RING.cy - 150} at={at(H.curls + 10)} color={BLUE.ink} size={34}>E</Lbl>
			<Chip x={1100} y={420} at={at(H.flip)} size={32} w={720} color={INK}>changing E → B?</Chip>
			{chip ? <Chip x={96} y={890} at={at(H.maxwell)} size={30} w={1728} color={INK} border={INK}>Next: how did Maxwell connect electricity and magnetism to light?</Chip> : null}
		</>
	);
};
/** v20's final frame (the end of Module 6) for Module 7's first video. */
export const M6V20FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: ROSE.ink}}>Eddy currents</span>: induced in loops inside solid metal.</>, at: 2},
		{content: <>Lenz: their <span style={{color: AMBER.ink}}>force opposes the motion</span>, braking without contact.</>, at: 6},
		{content: <>Mechanical energy → electrical energy → <span style={{color: HEAT}}>heat (I²R)</span>.</>, at: 10},
		{content: <>Slots break up the loops: much less braking, not zero.</>, at: 14},
		{content: <>No motion, no braking: it fades and can't hold.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<><span style={{color: AMBER.ink}}>No motion,</span> <span style={{color: ROSE.ink}}>no eddies,</span> <span style={{color: AMBER.ink}}>no brake.</span></>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
