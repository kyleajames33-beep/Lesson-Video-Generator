// Scenes 1 to 5: the hook (opening on last time's roundabout), the forces on the car, friction does the job,
// the force equations, worked example 1 (the friction needed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, MS, ROLE, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {RearCar, RoadSection, TopCar} from '../../physics/circular/road-cone';
import {Ring} from '../phys-y12-m5-v03/parts';
import {HEAD, HEAD_SIZE, HEAD_V11, HEAD_V11_SIZE, WE1, cue, hold} from './common';
import {AMBER, ChoiceChips, Force, Lbl, PHI_V11, PointerLabel, RB, RingBoard, RoadStage, SideChip, TopViewCard, carOnRing, roadGeom} from './parts';
import {V11FinalFrame} from '../phys-y12-m5-v11/s3';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
export const Givens: React.FC<{x?: number; y?: number; w?: number; size?: number; at?: number; children: React.ReactNode}> = ({x = 96, y = 176, w = 1150, size = 30, at = -30, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '4px 18px 6px', ...DISPLAY(size, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
export const Fr = () => <span>f</span>;
/** Rotating phase of the car on the ring: one lap every `lap` frames, anticlockwise. */
export const phiAt = (f: number, lap = 300) => (2 * Math.PI * f) / lap;

const G = roadGeom();
const [CX, CY] = G.com;
const FL = 170; // force-arrow length (one scale: W = N = 170 px)

// ---------- 1. hook: what pulls it in? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const weight = cue(id, 'weight pulls down'), inwards = cue(id, 'inwards'), isIt = cue(id, 'Is it air'), predict = cue(id, 'prediction');
	const h = hold(id);
	// Opens on v11's final frame (imported), cross-fading over frames 10 to 34 into the same roundabout geometry:
	// the car starts where v11 left it (60 degrees round) and the side card and chip sit where v11 put them.
	const fade = prog(f, 10, 24);
	const phi = PHI_V11 + phiAt(Math.max(0, f - 34));
	const [x, y] = carOnRing(phi);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V11FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
			<SceneHeading text={HEAD_V11} at={-200} size={HEAD_V11_SIZE} />
			<FrameSvg>
				<RingBoard phi={phi} pulse={inwards} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={640} ringFrom={predict} />
			</FrameSvg>
			<Lbl x={Math.max(110, x - 200)} y={y - 60} color={AMBER.ink} size={32}>F<Sub>net</Sub> = mv<Sup>2</Sup>/r ?</Lbl>
			<SideChip x={1100} y={200} w={724} pulse={weight} />
			<Chip x={1100} y={720} at={-30} out={inwards} size={36} w={724} color={INK} border={INK}>Next: which force supplies the inward acceleration on a flat curve?</Chip>
			<HandTag x={RB.cx - 150} y={RB.cy + 40} text="needs an inward push" at={inwards + 6} size={TYPE.handSmall} color={AMBER.ink} />
			<Enter at={isIt - 20} style={{position: 'absolute', left: 1100, top: 480, width: 724}}>
				<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>Which force pulls the car in?</div>
			</Enter>
			<ChoiceChips x={1100} y={560} at={isIt} />
			</div>
		</>
	);
};

// ---------- 2. the forces on the car ----------
export const S02: React.FC = () => {
	const id = 'forces-on-car';
	const f = useCurrentFrame();
	const behind = cue(id, 'from behind'), into = cue(id, 'into the screen'), weight = cue(id, 'weight acts'), normal = cue(id, 'normal force'), balance = cue(id, 'balance'), nEq = cue(id, 'N equals'), air = cue(id, 'Air resistance'), either = cue(id, 'either');
	return (
		<>
			<SceneHeading text={HEAD_V11} at={-200} size={HEAD_V11_SIZE} />
			<FrameSvg>
				<RoadStage />
				<Force x={CX} y={CY} L={FL} dir="down" at={weight} />
				<Force x={CX} y={CY} L={FL} dir="up" at={normal} />
				<Ring cx={CX} cy={CY} rx={40} ry={190} at={balance} color={ROLE.y.stroke} />
			</FrameSvg>
			<PointerLabel />
			<Lbl x={880} y={600} at={into} color={ROLE.x.ink} size={30}>moving into the screen</Lbl>
			<Lbl x={CX + 22} y={CY + FL - 6} at={weight} color={AMBER.ink} size={TYPE.current}>W = mg</Lbl>
			<Lbl x={CX + 22} y={CY - FL + 20} at={normal} color={AMBER.ink} size={TYPE.current}>N</Lbl>
			<HandTag x={140} y={420} text="equal and opposite" at={balance + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Enter at={behind} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Seen from behind</Title>
					<div style={{...DISPLAY(32, AMBER.ink, 800), marginTop: 4, opacity: prog(f, weight, 12)}}>weight W = mg, down</div>
					<div style={{...DISPLAY(32, AMBER.ink, 800), opacity: prog(f, normal, 12)}}>normal force N, up</div>
					<div style={{...DISPLAY(28, INK, 700), whiteSpace: 'normal', opacity: prog(f, normal + 20, 12)}}>normal force: the push of a surface at right angles to it</div>
				</div>
			</Enter>
			<Enter at={balance} style={{position: 'absolute', left: 1290, top: 470, width: 534}}>
				<div style={{...DISPLAY(32, ROLE.y.ink, 800)}}>vertical: no acceleration</div>
				<div style={{...DISPLAY(TYPE.working, ROLE.y.ink, 800), opacity: prog(f, nEq, 12)}}><MarkSpan kind="circle" at={nEq + 16} color={ROLE.y.stroke}>N = mg</MarkSpan></div>
			</Enter>
			<Enter at={air} style={{position: 'absolute', left: 1290, top: 640, width: 534}}>
				<div style={{...card, border: `3px solid ${INK_SOFT}`, height: 150, boxSizing: 'border-box', position: 'relative'}}>
					<svg width={534} height={150} style={{position: 'absolute', left: 0, top: 0}}>
						<TopCar x={190} y={75} len={150} heading={0} />
						<VecArrow x={110} y={75} dx={-80} dy={0} color={AMBER.stroke} width={7} head={20} />
					</svg>
					<div style={{position: 'absolute', left: 290, top: 40, ...DISPLAY(30, AMBER.ink, 800), whiteSpace: 'normal', width: 220}}>air resistance: along the path</div>
				</div>
			</Enter>
			<CrossedChip x={1290} y={820} at={either - 20} crossAt={either} size={32} caption="along the path, not inwards">air resistance</CrossedChip>
		</>
	);
};

// ---------- 3. friction does the job ----------
const SL = {cx: 300, cy: 1150, R: 760}; // large top view of the bend: centre far below-left
export const S03: React.FC = () => {
	const id = 'friction-job';
	const f = useCurrentFrame();
	const straight = cue(id, 'carry straight on'), outwards = cue(id, 'outwards'), inwards = cue(id, 'inwards'), staticF = cue(id, 'static friction'), answer = cue(id, 'answer is friction'), noSep = cue(id, "There's no separate"), job = cue(id, 'centripetal job');
	const back = prog(f, inwards - 10, 20);
	const phi0 = 0.95; // car position on the big bend
	const car: [number, number] = [SL.cx + SL.R * Math.cos(phi0), SL.cy - SL.R * Math.sin(phi0)];
	const tx = -Math.sin(phi0), ty = -Math.cos(phi0);
	const tp = prog(f, straight, 40);
	return (
		<>
			<SceneHeading text={HEAD_V11} at={-200} size={HEAD_V11_SIZE} out={answer - 10} />
			<SceneHeading text={HEAD} at={answer} size={HEAD_SIZE} />
			{back < 1 ? (
				<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
					<FrameSvg>
						<circle cx={SL.cx} cy={SL.cy} r={SL.R + 60} fill="none" stroke="#cfd2d4" strokeWidth={120} />
						<circle cx={SL.cx} cy={SL.cy} r={SL.R} fill="none" stroke="#f4f1ea" strokeWidth={3} strokeDasharray="18 16" />
						<TopCar x={car[0]} y={car[1]} len={170} heading={(phi0 * 180) / Math.PI + 90} />
						{tp > 0 ? <line x1={car[0]} y1={car[1]} x2={car[0] + tx * 480 * tp} y2={car[1] + ty * 480 * tp} stroke={ROLE.x.stroke} strokeWidth={5} strokeDasharray="16 11" /> : null}
						<VecArrow x={car[0] + Math.cos(phi0) * 40} y={car[1] - Math.sin(phi0) * 40} dx={Math.cos(phi0) * 130} dy={-Math.sin(phi0) * 130} color={ROLE.slate.stroke} width={6} dash="12 8" at={outwards} />
					</FrameSvg>
					<Lbl x={car[0] + tx * 300 + 30} y={car[1] + ty * 300 - 30} at={straight} color={ROLE.x.ink} size={32}>no grip: straight on</Lbl>
					<HandTag x={car[0] + 120} y={car[1] - 170} text="would slide out (relative to the road)" at={outwards + 10} size={30} color={ROLE.slate.ink} />
				</div>
			) : null}
			{back > 0 ? (
				<div style={{position: 'absolute', inset: 0, opacity: back}}>
					<FrameSvg>
						<RoadStage />
						<Force x={CX} y={CY} L={FL} dir="down" />
						<Force x={CX} y={CY} L={FL} dir="up" />
						<Force x={CX} y={CY} L={FL} dir="left" at={inwards} />
						<Ring cx={CX - FL / 2} cy={CY} rx={110} ry={40} at={job} color={AMBER.stroke} />
					</FrameSvg>
					<PointerLabel />
					<Lbl x={CX - FL - 10} y={CY - 30} at={inwards} color={AMBER.ink} anchor="end" size={TYPE.current}>f</Lbl>
					<HandTag x={CX - FL - 10} y={CY + 60} text="grip pushes in" at={inwards + 16} size={30} color={AMBER.ink} anchor="end" />
					<Lbl x={CX + 22} y={CY + FL - 6} color={AMBER.ink} size={TYPE.current}>W = mg</Lbl>
					<Lbl x={CX + 22} y={CY - FL + 20} color={AMBER.ink} size={TYPE.current}>N</Lbl>
				</div>
			) : null}
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, borderLeft: `10px solid ${AMBER.stroke}`}}>
					<div style={DISPLAY(34, AMBER.ink, 800)}>friction</div>
					<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal'}}>the grip between the tyres and the road</div>
					<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal', opacity: prog(f, staticF, 12)}}>static friction: gripping, not sliding</div>
				</div>
			</Enter>
			<ChoiceChips x={1290} y={440} at={-30} crossAir={-30} tickFric={answer} crossCent={noSep} />
			<Chip x={1290} y={700} at={job - 10} size={34} w={534} border={AMBER.stroke}>friction does the centripetal job</Chip>
		</>
	);
};

// ---------- 4. the force equations ----------
const RS4 = {cx: 470, cy: 820, w: 380};
const G4 = roadGeom(RS4.cx, RS4.cy, RS4.w);
export const S04: React.FC = () => {
	const id = 'force-equations';
	const f = useCurrentFrame();
	const three = cue(id, 'three forces'), drive = cue(id, "engine's drive"), vert = cue(id, 'Vertically'), side = cue(id, 'Sideways'), key = cue(id, 'key equation'), fEq = cue(id, 'Friction equals');
	const [x, y] = G4.com;
	const L = 150;
	const pulse = (at: number) => 4 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 20)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RoadStage cx={RS4.cx} cy={RS4.cy} w={RS4.w} half={400} />
				<Force x={x} y={y} L={L} dir="down" width={8 + pulse(three)} />
				<Force x={x} y={y} L={L} dir="up" width={8 + pulse(three + 12)} />
				<Force x={x} y={y} L={L} dir="left" width={8 + pulse(three + 24)} />
				<VecArrow x={x - 20} y={y - 40} dx={-L + 20} dy={0} color={ROLE.a.stroke} width={6} at={fEq} head={20} />
			</FrameSvg>
			<PointerLabel cx={RS4.cx} cy={RS4.cy} half={400} />
			<Lbl x={x - L - 10} y={y + 30} color={AMBER.ink} anchor="end" size={TYPE.current}>f</Lbl>
			<Lbl x={x - L - 10} y={y - 60} at={fEq} color={ROLE.a.ink} anchor="end" size={34}>a</Lbl>
			<Lbl x={x + 20} y={y + L - 6} color={AMBER.ink} size={34}>mg</Lbl>
			<Lbl x={x + 20} y={y - L + 20} color={AMBER.ink} size={34}>N</Lbl>
			<HandTag x={560} y={430} text="3 forces in this view" at={three} size={TYPE.handSmall} color={AMBER.ink} />
			<Enter at={drive} out={vert} style={{position: 'absolute', left: 960, top: 186, width: 864}}>
				<div style={{...card, border: `3px solid ${INK_SOFT}`, height: 200, boxSizing: 'border-box', position: 'relative'}}>
					<svg width={864} height={200} style={{position: 'absolute', left: 0, top: 0}}>
						<TopCar x={330} y={80} len={170} heading={0} />
						<VecArrow x={420} y={80} dx={120} dy={0} color={AMBER.stroke} width={7} head={20} />
						<VecArrow x={240} y={80} dx={-120} dy={0} color={AMBER.stroke} width={7} head={20} />
					</svg>
					<div style={{position: 'absolute', left: 560, top: 30, ...DISPLAY(30, AMBER.ink, 800)}}>drive</div>
					<div style={{position: 'absolute', left: 20, top: 30, ...DISPLAY(30, AMBER.ink, 800)}}>air resistance</div>
					<div style={{position: 'absolute', left: 20, top: 140, ...DISPLAY(30, ROLE.y.ink, 800)}}>along the path: balanced</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 960, top: 380, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={vert} size={TYPE.current}><span style={{color: ROLE.y.ink}}>vertical: N = mg</span></Row>
				<Row at={side} size={TYPE.current}><span style={{color: ROLE.x.ink}}>towards the centre: f = net force</span></Row>
				<Row at={key} size={60}><Boxed color={INK} size={60}><span style={{color: INK}}>f = mv<Sup>2</Sup>/r</span></Boxed></Row>
			</div>
			<HandTag x={970} y={560} text="the only sideways force" at={side + 20} size={TYPE.handSmall} color={ROLE.x.ink} />
		</>
	);
};

// ---------- 5. worked example: the friction needed ----------
export const S05: React.FC = () => {
	const id = 'worked-friction-needed';
	const tryIt = cue(id, 'try it'), twelve = cue(id, 'twelve hundred times'), centre = cue(id, 'towards the centre'), turnNeeds = cue(id, 'the turn needs'), isnt = cue(id, "isn't the most");
	const [x, y] = roadGeom(400, 900, 380).com;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 176}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>Find the friction needed for the car to round the curve.</div>
			</Enter>
			<Givens y={246} w={1300} at={tryIt}>m = 1200 kg | r = 40 m (flat curve) | v = 15<MS /></Givens>
			<FrameSvg>
				<RoadSection cx={400} cy={900} half={300} />
				<RearCar cx={400} cy={900} w={380} />
				<Force x={x} y={y} L={130} dir="left" at={centre} />
			</FrameSvg>
			<Lbl x={x - 65} y={520} at={centre} color={AMBER.ink} anchor="middle" size={34}>f = 6.75 × 10<Sup>3</Sup> N</Lbl>
			<Enter at={tryIt} style={{position: 'absolute', left: 760, top: 340}}><Boxed color={INK} size={TYPE.current}>f = mv<Sup>2</Sup>/r</Boxed></Enter>
			<div style={{position: 'absolute', left: 760, top: 450, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={twelve} size={TYPE.working}>f = 1200 × <MarkSpan kind="circle" at={turnNeeds} color={AMBER.stroke}>15<Sup>2</Sup></MarkSpan> ÷ 40</Row>
				<Row at={centre - 6} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={centre}><span>{(WE1.f / 1000).toFixed(2)} × 10<Sup>3</Sup> N</span></AnswerBox> <span style={{fontSize: 34}}>towards the centre</span></Row>
			</div>
			<HandTag x={770} y={650} text="what the turn needs" at={turnNeeds} size={TYPE.handSmall} color={AMBER.ink} />
			<CrossedChip x={760} y={700} at={turnNeeds + 10} crossAt={turnNeeds + 30} size={32} caption="square the speed">1200 × 15 ÷ 40 = 450 N</CrossedChip>
			<Chip x={760} y={840} at={isnt} size={34} border={ROLE.given.stroke}>needed ≠ maximum available</Chip>
			<TopViewCard x={1300} y={600} w={524} h={300} title="Seen from above" arrow="f points to the centre" />
		</>
	);
};
