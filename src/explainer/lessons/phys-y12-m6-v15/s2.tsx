// Scenes 7 to 11: what if we didn't step up (the graph at full size with the 25 kV point off the scale; the formula's
// impossible 800 MW and the 40 kV drop), transformers make it happen (the grid chain built stage by stage from plates,
// with the charges thinning after the step-up and crowding again after each step-down), why the grid is AC ("~" on
// every stage, the step-up symbol's flux, an HVDC inset), why not even higher (one tower: insulation, height,
// clearance, corona, then the trade-off), and the memory aid on the line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import {ACSymbol} from '../../physics/electromagnetism/induction';
import {ANCHOR, HEAT, STATION, TOWER, anchorAt, byHeight} from '../../physics/electromagnetism/transformer';
import {MemoryCard} from '../../shared/scenes';
import {G25, HEAD, HEAD_SIZE, MW, P_SENT, R_LINE, W250, W500, cap, cue} from './common';
import type {GraphBox} from './parts';
import {AMBER, Arrow2, Bracket2, CH, EndBox, FLUX, GridChain, Lbl, LossGraph, ModelLine, NAVY, ORANGE, Ring, VIOLET, fx, gMap, gapFor, Ws} from './parts';

const lossAt = (kv: number) => MW(P_SENT * P_SENT * R_LINE / (kv * 1e3) ** 2);

// ---------- 7. what if we didn't step up at all? ----------
const G7: GraphBox = {x: 640, y: 210, w: 1160, h: 500, vmax: 600, lmax: 12};
export const S07: React.FC = () => {
	const id = 'no-step-up';
	const f = useCurrentFrame();
	const surprise = cue(id, "Here's a surprise"), gens = cue(id, 'Big generators make electricity'), straight = cue(id, 'straight from the generator'), v25 = cue(id, 'at twenty five kilovolts'), amps = cue(id, 'The current would be twenty thousand amps'), mw = cue(id, 'eight hundred megawatts'), more = cue(id, "That's more than we're sending"), imp = cue(id, 'The answer is impossible'), all = cap(id, cue(id, 'down the line at all'));
	const m = gMap(G7);
	const rise = prog(f, v25, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={STATION} p={byHeight(STATION, 50, 260, 220)} />
				<ModelLine x1={70} x2={500} y={600} gap={f >= v25 ? 12 : 40} phase={f * 3} tint={f >= v25 ? prog(f, v25, 20) : 0.2} />
				<LossGraph g={G7} loss={lossAt} xTicks={[100, 200, 300, 400, 500, 600]} yTicks={[0, 4, 8, 12]} />
				{[250, 500].map(v => <circle key={v} cx={m.X(v)} cy={m.Y(lossAt(v))} r={13} fill={HEAT} stroke="#fffdf8" strokeWidth={4} opacity={prog(f, surprise, 12)} />)}
				{f >= v25 ? <g opacity={rise}>
					<line x1={m.X(25)} y1={G7.y + G7.h} x2={m.X(25)} y2={G7.y + G7.h - (G7.h + 30) * rise} stroke={HEAT} strokeWidth={6} strokeDasharray="14 9" />
					<Arrow2 from={[m.X(25), G7.y + 40]} to={[m.X(25), G7.y - 40]} color={HEAT} width={8} head={26} opacity={prog(f, v25 + 20, 10)} />
				</g> : null}
				<Ring cx={m.X(25) + 10} cy={G7.y - 20} rx={60} ry={40} at={imp} color={'#8a8378'} />
			</FrameSvg>
			<Lbl x={G7.x} y={G7.y - 40} color={HEAT} size={30}>P<Ws>loss</Ws> (MW), 500 MW sent, 2.0 Ω</Lbl>
			<Lbl x={G7.x + G7.w + 20} y={G7.y + G7.h + 10} color={NAVY.ink} size={30} anchor="end">V (kV)</Lbl>
			<Lbl x={m.X(250) + 20} y={m.Y(lossAt(250)) - 20} at={surprise} color={HEAT} size={32}>250 kV: {fx(MW(W250.loss), 1)} MW</Lbl>
			<Lbl x={m.X(500) - 20} y={m.Y(lossAt(500)) - 30} at={surprise} color={HEAT} size={32} anchor="end">500 kV: {fx(MW(W500.loss), 1)} MW</Lbl>
			<Lbl x={270} y={530} at={gens} color={NAVY.ink} size={32} anchor="middle">generator: tens of kV</Lbl>
			<Lbl x={285} y={680} color={INK} size={28} anchor="middle">500 MW to send, 2.0 Ω line</Lbl>
			<HandTag x={m.X(25) + 40} y={G7.y + 60} text="25 kV: off the scale" at={v25 + 24} size={34} color={HEAT} />
			<HandTag x={m.X(25) + 40} y={G7.y + 110} text="thought experiment" at={straight} size={32} color={NAVY.ink} />
			<Row at={amps} size={44} style={{position: 'absolute', left: 96, top: 760}}>I = 500 × 10<sup>6</sup> / 25 × 10<sup>3</sup> = {fx(G25.formula.current, 0).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} A</Row>
			<Row at={mw - 20} size={44} style={{position: 'absolute', left: 96, top: 830}}>I<sup>2</sup>R = 20 000<sup>2</sup> × 2.0 = 8.0 × 10<sup>8</sup> W = <AnswerBox at={mw} tick={false}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(G25.formula.loss), 0)} MW</span></AnswerBox></Row>
			<Lbl x={1220} y={790} at={more} color={HEAT} size={44}>{fx(MW(G25.formula.loss), 0)} MW &gt; 500 MW sent</Lbl>
			<HandTag x={1360} y={850} text="impossible" at={imp} size={40} color={'#8a8378'} />
			<Chip x={96} y={900} at={all} size={30} w={1100}>drop along the line would be IR = {fx(G25.formula.drop / 1e3, 0)} kV, more than the 25 kV supply</Chip>
		</>
	);
};

// ---------- 8 and 9. the grid chain ----------
const cx = (p: {x: number; w: number}) => p.x + p.w / 2;
const STAGE_X = [cx(CH.st), CH.up.cx, (cx(CH.t1) + cx(CH.t2)) / 2, cx(CH.sub), (CH.pole.x + CH.ho.x + CH.ho.w) / 2];
const ChainLabels: React.FC<{at: readonly number[]; sides?: number}> = ({at, sides = 1e9}) => (
	<>
		<Lbl x={STAGE_X[0]} y={740} at={at[0]} color={INK} size={30} anchor="middle">generator</Lbl>
		<Lbl x={STAGE_X[0]} y={780} at={at[0]} color={NAVY.ink} size={30} anchor="middle">tens of kV</Lbl>
		<Lbl x={STAGE_X[1]} y={740} at={at[1]} color={INK} size={30} anchor="middle">step-up</Lbl>
		<Lbl x={STAGE_X[1]} y={780} at={sides} color={NAVY.ink} size={28} anchor="middle">V up, I down</Lbl>
		<Lbl x={STAGE_X[1]} y={816} at={sides} color={AMBER.ink} size={28} anchor="middle">P same</Lbl>
		<Lbl x={STAGE_X[2]} y={740} at={at[2]} color={INK} size={30} anchor="middle">transmission:</Lbl>
		<Lbl x={STAGE_X[2]} y={780} at={at[2]} color={NAVY.ink} size={30} anchor="middle">500 or 330 kV (NSW)</Lbl>
		<Lbl x={STAGE_X[2]} y={816} at={at[2]} color={INK} size={26} anchor="middle">real network ratings (three-phase)</Lbl>
		<Lbl x={STAGE_X[3]} y={740} at={at[3]} color={INK} size={30} anchor="middle">substations:</Lbl>
		<Lbl x={STAGE_X[3]} y={780} at={at[3]} color={NAVY.ink} size={28} anchor="middle">132, 66 or 33 kV,</Lbl>
		<Lbl x={STAGE_X[3]} y={816} at={at[3]} color={NAVY.ink} size={28} anchor="middle">then 11 kV</Lbl>
		<Lbl x={STAGE_X[4]} y={740} at={at[4]} color={INK} size={30} anchor="middle">pole transformer:</Lbl>
		<Lbl x={STAGE_X[4]} y={780} at={at[4]} color={NAVY.ink} size={30} anchor="middle">230 V (nominal)</Lbl>
		<Lbl x={96} y={900} at={at[4]} color={INK} size={26}>Sources: Transgrid; Ausgrid; AS IEC 60038</Lbl>
	</>
);
export const S08: React.FC = () => {
	const id = 'grid-chain';
	const f = useCurrentFrame();
	const need = cue(id, 'So we need the voltage up'), job = cue(id, 'the job of a step-up transformer'), sides = cue(id, 'with the same power on both sides'), nsw = cue(id, 'In New South Wales'), v330 = cue(id, 'three hundred and thirty thousand volts'), city = cue(id, 'Near the city'), streets = cue(id, 'eleven thousand volts for the streets'), pole = cue(id, 'Then a transformer on a pole'), homes = cap(id, cue(id, 'the nominal supply for our homes'));
	const at = [-30, job, -30, city, pole];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GridChain phase={f * 3} show={at.map(a => prog(f, a, 16))} />
				{f >= homes ? <Arrow2 from={[100, 230]} to={[1820, 230]} color={NAVY.stroke} width={7} head={26} opacity={prog(f, homes, 14)} /> : null}
			</FrameSvg>
			<ChainLabels at={[-30, job, nsw, city, pole]} sides={sides} />
			<Chip x={96} y={170} at={need} size={30} w={420}>we need the voltage up</Chip>
			<HandTag x={CH.up.cx - 90} y={CH.up.cy - 120} text="current cut here" at={sides + 10} size={34} color={ORANGE.ink} />
			<HandTag x={STAGE_X[2]} y={CH.t1.y - 20} text="few charges: small current" at={v330} size={30} color={ORANGE.ink} anchor="middle" />
			<HandTag x={STAGE_X[3] + 60} y={CH.sub.y - 30} text="11 kV for the streets" at={streets} size={30} color={NAVY.ink} anchor="middle" />
			<Lbl x={960} y={212} at={homes} color={NAVY.ink} size={30} anchor="middle">generator → transmission → substations → homes</Lbl>
		</>
	);
};
export const S09: React.FC = () => {
	const id = 'why-ac';
	const f = useCurrentFrame();
	const ac = cue(id, 'the grid uses alternating current'), only = cue(id, 'Transformers only work with a changing current'), easy = cue(id, 'so AC lets us step the voltage up and down easily'), links = cue(id, 'Some very long links'), sea = cue(id, 'cables under the sea'), end = cap(id, cue(id, 'at each end'));
	const bump = f >= only && f < only + 50 ? Math.sin((Math.PI * (f - only)) / 50) : 0;
	const inset = prog(f, links, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GridChain phase={f * 3} flux={prog(f, only, 12)} pulse={bump} />
				{STAGE_X.map((x, i) => <g key={i} opacity={prog(f, ac + i * 5, 10)}><ACSymbol x={x} y={300} r={24} /></g>)}
				{inset > 0.001 ? <g opacity={inset}>
					<rect x={560} y={330} width={820} height={330} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
					<rect x={760} y={500} width={420} height={130} fill="#cfe0ee" />
					<line x1={760} y1={500} x2={1180} y2={500} stroke="#7f9bb5" strokeWidth={3} />
					<path d="M720,470 C800,600 1140,600 1220,470" fill="none" stroke={INK} strokeWidth={7} />
					<rect x={600} y={420} width={130} height={90} rx={10} fill="#e7e0f2" stroke={VIOLET.stroke} strokeWidth={4} />
					<rect x={1210} y={420} width={130} height={90} rx={10} fill="#e7e0f2" stroke={VIOLET.stroke} strokeWidth={4} />
				</g> : null}
				<Ring cx={665} cy={465} rx={90} ry={66} at={end} color={HEAT} />
				<Ring cx={1275} cy={465} rx={90} ry={66} at={end + 6} color={HEAT} seed={6} />
			</FrameSvg>
			<ChainLabels at={[-30, -30, -30, -30, -30]} sides={-30} />
			<Lbl x={960} y={270} at={ac} color={INK} size={30} anchor="middle">AC at every stage</Lbl>
			<HandTag x={CH.up.cx - 120} y={CH.up.cy - 140} text="needs changing flux" at={only + 8} out={links} size={32} color={FLUX} />
			<Chip x={96} y={170} at={easy} size={30} w={560}>AC: transformers can step V up and down</Chip>
			<Lbl x={970} y={370} at={links} color={INK} size={30} anchor="middle">a long undersea link</Lbl>
			<Lbl x={970} y={600} at={sea} color={'#4d6b88'} size={28} anchor="middle">sea</Lbl>
			<Lbl x={665} y={472} at={links} color={VIOLET.ink} size={26} anchor="middle">converter</Lbl>
			<Lbl x={1275} y={472} at={links} color={VIOLET.ink} size={26} anchor="middle">converter</Lbl>
			<HandTag x={970} y={420} text="HVDC: converters at each end" at={end} size={32} color={VIOLET.ink} anchor="middle" />
		</>
	);
};

// ---------- 10. why not even higher? ----------
const TW = byHeight(TOWER, 760, 230, 640);
const TIPS = [ANCHOR.tower.uL, ANCHOR.tower.uR, ANCHOR.tower.lL, ANCHOR.tower.lR].map(n => anchorAt(TOWER, TW, n));
const ARMY = [anchorAt(TOWER, TW, [316, 300])[1], anchorAt(TOWER, TW, [205, 590])[1]];
export const S10: React.FC = () => {
	const id = 'why-not-higher';
	const f = useCurrentFrame();
	const million = cue(id, 'So why not a million volts'), ins = cue(id, 'more insulation'), taller = cue(id, 'taller towers'), gaps = cue(id, 'wider gaps to the ground'), leak = cue(id, 'the air itself starts to leak charge'), corona = cue(id, 'called corona'), bal = cap(id, cue(id, 'chosen as a balance'));
	const grow = prog(f, taller, 20), wide = prog(f, gaps, 20), glow = prog(f, leak, 16);
	const ground = TW.y + 640;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={60} y1={ground} x2={1860} y2={ground} stroke={INK} strokeWidth={4} />
				{[TIPS[0][1], TIPS[2][1]].map((y, i) => <g key={i}>
					{glow > 0.01 ? <line x1={80} y1={y} x2={1840} y2={y} stroke={VIOLET.stroke} strokeWidth={26} opacity={0.35 * glow} strokeLinecap="round" /> : null}
					<line x1={80} y1={y} x2={1840} y2={y} stroke={INK} strokeWidth={4} />
				</g>)}
				<Plate spec={TOWER} p={TW} />
				{TIPS.map(([x, y], i) => <rect key={i} x={x - 18} y={(i < 2 ? ARMY[0] : ARMY[1]) - 6} width={36} height={y - (i < 2 ? ARMY[0] : ARMY[1]) + 12 + 30 * prog(f, ins + 10, 16)} rx={10} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, ins, 12)} />)}
				{grow > 0.01 ? <path d={`M${TW.x + 20},${ground} L${TW.x + TW.w / 2},${TW.y - 70 * grow} L${TW.x + TW.w - 20},${ground}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="14 10" opacity={grow} /> : null}
				<Bracket2 x1={TW.x - 60} y1={TIPS[2][1] + 50 * wide} x2={TW.x - 60} y2={ground} color={NAVY.stroke} opacity={prog(f, gaps, 12)} />
			</FrameSvg>
			<Chip x={96} y={170} at={million} size={32} w={460}>a million volts, or more?</Chip>
			<HandTag x={TW.x + TW.w + 40} y={ARMY[0] + 10} text="more insulation" at={ins} size={34} color={NAVY.ink} />
			<HandTag x={TW.x + TW.w / 2 + 60} y={TW.y - 10} text="taller towers" at={taller} size={34} color={NAVY.ink} />
			<HandTag x={TW.x - 80} y={(TIPS[2][1] + ground) / 2} text="more clearance" at={gaps} size={34} color={NAVY.ink} anchor="end" />
			<HandTag x={TW.x + TW.w + 40} y={TIPS[2][1] - 30} text="corona: charge leaks into the air" at={corona} size={32} color={VIOLET.ink} />
			<Chip x={1260} y={620} at={bal} size={32} w={300} color={HEAT} border={HEAT}>lower I<sup>2</sup>R loss</Chip>
			<Lbl x={1410} y={720} at={bal + 6} color={INK} size={32} anchor="middle">against</Lbl>
			<Chip x={1220} y={750} at={bal + 10} size={30} w={620}>cost of insulation, towers and corona</Chip>
			<HandTag x={1260} y={860} text="a trade-off" at={bal + 16} size={36} color={AMBER.ink} />
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a way to remember it"), dv = cue(id, 'Double the voltage'), hc = cue(id, 'half the current'), ql = cue(id, 'a quarter of the loss'), same = cap(id, cue(id, 'stay the same'));
	const I = f >= hc ? W500.I : W250.I;
	const tint = 1 - 0.75 * prog(f, ql, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, here - 10, 14)}>
					<EndBox x={120} y={260} w={260} h={120} label="500 MW sent" color={AMBER.ink} />
					<ModelLine x1={380} x2={1520} y={320} gap={gapFor(I)} phase={f * 3} tint={tint} />
					<EndBox x={1520} y={260} w={240} h={120} label="city" />
				</g>
			</FrameSvg>
			<Lbl x={400} y={470} at={dv} color={NAVY.ink} size={44}>V × 2</Lbl>
			<Lbl x={860} y={470} at={hc} color={ORANGE.ink} size={44}>I ÷ 2</Lbl>
			<Lbl x={1300} y={470} at={ql} color={HEAT} size={44}>P<Ws>loss</Ws> ÷ 4</Lbl>
			<div style={{position: 'absolute', left: 440, top: 540, width: 1040}}>
				<MemoryCard at={same} main={<><span style={{color: NAVY.ink}}>Double the voltage,</span> <span style={{color: ORANGE.ink}}>half the current,</span> <span style={{color: HEAT}}>a quarter of the loss.</span></>} sub={<>Same power sent, same line.</>} />
			</div>
		</>
	);
};

