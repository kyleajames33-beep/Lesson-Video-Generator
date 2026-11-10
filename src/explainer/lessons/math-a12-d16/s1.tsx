// Scenes 1 and 2: the hook (d15's join: rising gradient bends, fixed gradient doesn't; then the vase filling at a
// steady rate while its level graph draws) and the gradient of the gradient (the cubic, f′, f″ and its notation).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, HandText, INK, INK_SOFT, prog} from '../../kit';
import {ConcavityGlyphs, FrameSvg, FunctionSimulator, HandTag, MarkSpan, SceneHeading, smooth, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {D15FinalFrame, HANDOFF_RX, HandoffPicture} from '../math-a12-d15/s5';
import type {HandoffTimes} from '../math-a12-d15/s5';
import {cue} from './common';
import {BoxCard, Bl, CUBIC, Chip, CurveLabel, LevelGraph, Line, RecallChip, V, VIOLET, VaseRig, VaseStrip, VaseThumb, gmap} from './parts';

// ---------- 1. hook ----------
const G1 = {x: 760, y: 150, w: 1130, h: 620};
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const rising = c('rising'), all = c('all.'), soBend = c('So the bend'), fill = c('Now fill'), vase = c('vase'), steady = c('steady'), neck = c('neck'), down = c('bends down'), up = c('then up'), where = c('Where does');
	const cross = prog(f, 40, 20);
		const t: HandoffTimes = {stubs: [-60, -60, -60, -60, -60, -60], rising: -60, fixed: -60, bends: rising, bendsOut: all, lineNot: -60, chip: -60, heading: -60, glowLine: -60};
	const tMin = Math.max(0, Math.min(4, (4 * (f - (vase + 10))) / (neck + 4 - (vase + 10))));
	const pour = vis(f, vase + 4, neck + 10, 8);
	const RX = HANDOFF_RX, colW = 140, col0 = RX + 26 + 180;
	const leftGlow = vis(f, rising - 4, all, 10), rightGlow = vis(f, all - 4, soBend, 10);
	const MJ = gmap(30, 150, 810, 880, {x: [-0.5, 2.2], y: [-0.5, 2.5]});
	const L1 = MJ.pt(1, 1), L2 = MJ.pt(1.75, 2.5);
	const stageO = prog(f, soBend + 10, 20);
	return (
		<>
			{cross < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - cross}}><D15FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: cross * (1 - prog(f, soBend, 14))}}>
				<div style={{position: 'absolute', inset: 0}}>
					<HandoffPicture t={t} f={f} />
					<FrameSvg>
						{[0, 1, 2].map(i => <rect key={i} x={col0 + i * colW + 6} y={300} width={colW - 12} height={62} rx={10} fill="#e7e0f2" opacity={0.9 * leftGlow} style={{mixBlendMode: 'multiply'}} />)}
						{[3, 4, 5].map(i => <rect key={i} x={col0 + i * colW + 6} y={300} width={colW - 12} height={62} rx={10} fill="#e7e0f2" opacity={0.9 * rightGlow} style={{mixBlendMode: 'multiply'}} />)}
						<line x1={L1[0]} y1={L1[1]} x2={L2[0]} y2={L2[1]} stroke="#e7e0f2" strokeWidth={24} strokeLinecap="round" opacity={rightGlow} style={{mixBlendMode: 'multiply'}} />
					</FrameSvg>
				</div>
			</div>
			<SceneHeading text="Next: how the gradient changes" at={-300} size={56} out={40} />
			<SceneHeading text="Concavity: how the gradient changes the bend" at={50} size={56} />
			<Chip x={1100} y={80} at={soBend + 6} out={fill + 10} size={44} color={VIOLET}>bend ← change in gradient</Chip>
			{/* the vase stage */}
			<div style={{position: 'absolute', inset: 0, opacity: stageO}}>
				{stageO > 0.001 ? <>
					<VaseRig x={250} y={470} h={560} t={tMin} pour={pour} />
					<LevelGraph x={G1.x} y={G1.y} w={G1.w} h={G1.h} t={tMin} tangentAt={vase + 10} tints={{cap: down, cup: up}}
						overlay={g => <>
							<ConcavityGlyphs cells={[{from: 0, to: 2, sign: -1}, {from: 2, to: 4, sign: 1}]} toFrame={g.toFrame} Y={27} at={down} words />
							<FrameSvg style={{opacity: prog(f, where, 12)}}>
								{(() => {const a = g.toFrame(1.35, 21), b = g.toFrame(2.65, 21); return <path d={`M${a[0]},${a[1] + 16} V${a[1]} H${b[0]} V${b[1] + 16}`} stroke={INK} strokeWidth={4} strokeDasharray="10 8" fill="none" />;})()}
								<text x={g.toFrame(2, 0)[0]} y={g.toFrame(0, 21)[1] - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, fill: INK}}>?</text>
							</FrameSvg>
						</>} />
					<VaseStrip x={G1.x + 40} y={800} w={1060} t={tMin} />
				</> : null}
			</div>
			<HandTag x={G1.x + 60} y={950} text="steady flow" at={steady + 4} out={down} size={40} color={INK} />
			<HandTag x={G1.x + 60} y={950} text="slowest where the vase is widest" at={down - 20} size={40} color={VIOLET} />
			<Chip x={1260} y={80} at={where + 10} size={44} color={MATH_STRAND_ACCENT}>where does the bend switch?</Chip>
		</>
	);
};

// ---------- 2. the gradient of the gradient ----------
const RX2 = 1110;
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const y = c('y equals'), x = c('nine x.'), deriv = c('Its derivative'), every = c('at every'), again = c('differentiate it again'), called = c('called the second'), fpp = c('f double prime of'), d2 = c('d two y'), ypp = c('y double prime'), here = c('Here,'), diffAgain = c('Differentiate again'), six = c('six x minus'), twelve = c('minus twelve', 2), tells = c('It tells us');
	const M = gmap(30, 430, 1040, 520, {x: [-0.3, 4.3], y: [-2, 6]});
	return (
		<>
			<SceneHeading text="The gradient of the gradient" at={4} size={56} />
			<VaseThumb x={40} y={150} at={-30} />
			<RecallChip x={430} y={250} at={10} size={34}>bends both ways, like the vase's graph</RecallChip>
			<FunctionSimulator x={30} y={430} width={1040} height={520} window={{x: [-0.3, 4.3], y: [-2, 6]}} family={CUBIC} timeline={[{frame: 0, x: 2}]} color={INK} at={-30} draw={{at: 0, dur: 40}}
				xTicks={[1, 2, 3, 4]} yTicks={[2, 4]} xLabel="x" yLabel="y"
				overlay={g => <ConcavityGlyphs cells={[{from: -0.3, to: 2, sign: -1}, {from: 2, to: 4.3, sign: 1}]} toFrame={g.toFrame} Y={5.1} at={x} words />} />
			<CurveLabel x={M.pt(2.75, 0)[0]} y={M.pt(0, 2.6)[1]} at={y} size={42} color={INK}>y = x³ − 6x² + 9x</CurveLabel>
			{/* right column */}
			<BoxCard x={RX2} y={156} at={y} size={44} title="Givens">f(x) = x³ − 6x² + 9x</BoxCard>
			<Line x={RX2} y={290} at={deriv} size={40}><V>f′(x)</V>: the gradient at every x</Line>
			<Line x={RX2} y={348} at={again} size={40}>differentiate again: <Bl>the second derivative</Bl></Line>
			<Line x={RX2} y={426} at={fpp - 6} size={54}>
				<MarkSpan kind="underline" at={fpp} color={BLUE_UL} width={5}><Bl>f″(x)</Bl></MarkSpan> = <span style={{opacity: prog(f, d2, 12)}}><MarkSpan kind="underline" at={d2 + 6} color={BLUE_UL} width={5}><Bl>d²y/dx²</Bl></MarkSpan></span><span style={{opacity: prog(f, ypp, 12)}}> = <MarkSpan kind="underline" at={ypp + 6} color={BLUE_UL} width={5}><Bl>y″</Bl></MarkSpan></span>
			</Line>
			<Line x={RX2} y={540} at={here} size={52}><V>f′(x) = 3x² − 12x + 9</V></Line>
			<Line x={RX2 + 560} y={556} at={here + 20} size={30} color={INK_SOFT} weight={700}>power rule</Line>
			<Line x={RX2} y={620} at={diffAgain} size={52}><Bl>f″(x) = <span style={{opacity: prog(f, six, 10)}}>6x</span><span style={{opacity: prog(f, twelve - 8, 10)}}> − 12</span></Bl></Line>
			<Line x={RX2} y={700} at={six} size={34} color={INK_SOFT} weight={700}>3x² → 6x,   −12x → −12,   9 → 0</Line>
			<div style={{position: 'absolute', left: RX2, top: 770}}>{f >= tells ? <HandText text="how fast the gradient changes, and which way: rising or falling" at={tells} size={42} color={BLUE} cps={34} maxWidth={760} /> : null}</div>
		</>
	);
};
const BLUE = '#1f6fb2';
const BLUE_UL = '#1f6fb2';
