import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Callout, DrawPath, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {ColourKey, EqRR, FWD, Fade, LENS, NET, NetArrow, Bars, BARS, Overlay, ParticleLens, Pill, SlotRings, StageTable, SvgText, TEAL, ghostTrain} from './parts';
import type {TRow} from './parts';
import {Heading, NAVY, PaintedFlask, kf, paintedH, sc} from './common';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {heated: 'heated', gas: ['gas', 1], fill: 'fill it', pent: 'phosphorus pentachloride', written: 'written', rev: 'reversible', split: 'split', join: 'join', nothing: 'nothing yet', how: 'how does', follow: 'follow it', sealed: ['sealed', 2]});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const W = 280, X = 1330, Y = 190, H = paintedH(W);
	const stopper = {x: X + 0.515 * W, y: Y + 0.274 * H};
	const bulb = {x: X + 0.515 * W, y: Y + 0.644 * H, r: 0.36 * W};
	const mantle = {x: X + 0.515 * W, y: Y + 0.79 * H};
	const counts = (t: number) => ({n: kf(t, [[K1.fill, 0], [K1.fill + 130, 12]], false), v: 0});
	const swAngle = f < K1.sealed ? 0 : ((f - K1.sealed) / 30) * 60;
	return (
		<>
			<Heading text="Starting with only reactant" at={6} />
			<PaintedFlask x={X} y={Y} w={W} opacity={prog(f, 4, 24)} />
			<Overlay>
				<ParticleLens cx={bulb.x} cy={bulb.y} r={bulb.r} counts={counts} bare rScale={0.62} seed={9} />
				{/* heat, gas */}
				<Callout from={[mantle.x - 70, mantle.y + 20]} to={[1290, 880]} at={K1.heated} text="about 250 °C" color={AMBER_INK} align="right" size={46} />
				<Callout from={[bulb.x - 70, bulb.y - 30]} to={[1285, 560]} at={K1.gas} text="all gas inside" color={TEAL} align="right" size={46} />
				{/* the sealed flask: stopper ringed, stopwatch starts */}
				<DrawPath d={scribbleEllipse(stopper.x, stopper.y, 52, 40, 3)} at={K1.sealed} dur={22} color={AMBER_INK} width={6} />
				<g opacity={prog(f, K1.sealed, 14)}>
					<path d={`M${stopper.x + 70},${stopper.y - 70} L${stopper.x + 20},${stopper.y - 20}`} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${stopper.x + 18},${stopper.y - 44} L${stopper.x + 20},${stopper.y - 20} L${stopper.x + 44},${stopper.y - 24}`} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
				<g opacity={prog(f, K1.sealed - 6, 14)}>
					<circle cx={1760} cy={470} r={72} fill="#fffdf8" stroke={INK} strokeWidth={6} />
					<path d="M1752,388 L1768,388 M1760,388 L1760,398" stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<g transform={`rotate(${swAngle} 1760 470)`}><path d="M1760,470 L1760,420" stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" /></g>
					<circle cx={1760} cy={470} r={8} fill={INK} />
					<text x={1760} y={590} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}}>time: 0</text>
				</g>
				<SvgText x={110} y={420} text="written PCl_5" size={56} color={NAVY} at={K1.written} />
				{/* equation */}
				<EqRR x={110} y={570} at={K1.rev - 10} fwdAt={K1.split} revAt={K1.join} fwdWordAt={K1.split} revWordAt={K1.join} size={44} />
				<Fade at={K1.nothing}>
					<Mark x={308} y={584} at={K1.nothing} kind="cross" size={44} color="#c4432f" />
					<SvgText x={110} y={700} text="no products yet, so nothing to run backwards" size={44} color="#c4432f" at={K1.nothing + 6} />
				</Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 110, top: 210, opacity: prog(f, K1.fill, 12)}}><HandText text="one gas only:" at={K1.fill} size={56} color={INK_SOFT} /></div>
			<div style={{position: 'absolute', left: 110, top: 280}}><HandText text="phosphorus pentachloride" at={K1.pent} size={64} color={NAVY} cps={20} /></div>
			<div style={{position: 'absolute', left: 110, top: 750, width: 1000, opacity: prog(f, K1.how, 12)}}>
				<HandText text="From only reactant" at={K1.how} size={74} color={TEAL} cps={16} />
				<div style={{height: 6}} />
				<HandText text="to a mixture that never changes?" at={K1.how + 40} size={74} color={TEAL} cps={16} />
			</div>
		</>
	);
};

// ---------- 2. Start (stage 0) ----------
const K2 = cues(sc('start'), {holds: 'holds', conc: 'concentration', noP: ['three', 1], noCl: ['chlorine', 1], eq: 'In the equation', fwdW: 'forward reaction', revW: ['reverse reaction', 1], cand: 'candidate', madeUp: 'made-up scale', fifty: 'fifty', revNo: ['reverse reaction', 2], rejoin: 'rejoin', neither: 'neither exists', zero: 'zero', five: ['five', 1]});
export const SceneStart: React.FC = () => {
	const f = useCurrentFrame();
	const counts = () => ({n: 20, v: 0});
	const fwd = kf(f, [[K2.fifty, 0], [K2.fifty + 36, 50]]);
	const ghosts = ghostTrain(K2.fifty + 20, 1500, 22, 'split', [3, 9, 14, 6, 11, 1, 17, 8]);
	const rows: TRow[] = [{label: 'start', at: K2.holds, cells: [['0.20', K2.holds + 12], ['0', K2.noP], ['0', K2.noCl], ['50', K2.fifty + 20], ['0', K2.zero]]}];
	return (
		<>
			<Heading text="The very start" at={4} />
			<Overlay>
				<ParticleLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} ghosts={ghosts} reveal={prog(f, 6, 24)} />
				<SlotRings cx={LENS.cx} cy={LENS.cy} r={LENS.r} slots={[2, 7, 13]} at={K2.cand} out={K2.cand + 70} />
				<SvgText x={190} y={236} text="0.20 mol/L of PCl_5" size={50} color={NAVY} at={K2.holds} />
				<SvgText x={190} y={290} text="concentration = amount per litre" size={38} color={INK_SOFT} at={K2.conc} />
				<ColourKey x={225} y={870} at={20} />
				<EqRR x={1010} y={140} at={K2.eq - 8} fwdAt={K2.fwdW} fwdWordAt={K2.fwdW} revWordAt={K2.revW} size={40} />
				<Bars fwd={fwd} rev={0} at={K2.madeUp} fwdLabel={f >= K2.fifty ? String(Math.round(fwd)) : ''} revLabel={f >= K2.zero ? '0' : ''} />
				<Fade at={K2.zero}><DrawPath d={scribbleEllipse(BARS.x0 + BARS.gx + BARS.w / 2, BARS.base - 30, 96, 44, 5)} at={K2.zero} dur={20} color={AMBER_INK} width={6} /></Fade>
				<NetArrow gap={fwd} at={K2.fifty + 24} label={<SvgText x={NET.x + 40} y={NET.y0 + 126} text="PCl_5 falls" size={50} color={FWD} at={K2.fifty + 40} />} />
				<Fade at={K2.madeUp + 30}><><SvgText x={1530} y={400} text="made-up numbers" size={40} color={INK_SOFT} at={K2.madeUp + 30} /><SvgText x={1530} y={448} text="to show the pattern" size={40} color={INK_SOFT} at={K2.madeUp + 38} /></></Fade>
				<Fade at={K2.revNo}><SvgText x={1480} y={560} text="nothing to join yet" size={40} color={AMBER_INK} at={K2.rejoin} /></Fade>
				<StageTable rows={rows} at={K2.holds - 10} />
			</Overlay>
		</>
	);
};

// ---------- 3. Forward falls, reverse starts (stage 1) ----------
const K3 = cues(sc('forward-falls'), {later: 'little later', split: 'has split', c16: '0.16', c04: '0.04', forty: 'forty', same: 'same chance', started: 'started', meets: 'meets', eight: 'eight', bigger: 'forward is still bigger', keeps: 'keeps falling'});
export const SceneForwardFalls: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => ({n: kf(t, [[K3.later, 20], [K3.later + 220, 16]], false), v: kf(t, [[K3.later, 0], [K3.later + 220, 4]], false)});
	const fwd = kf(f, [[K3.forty - 12, 50], [K3.forty + 22, 40]]);
	const rev = kf(f, [[K3.eight - 14, 0], [K3.eight + 26, 8]]);
	const ghosts = [...ghostTrain(K3.forty + 20, 1500, 26, 'split', [1, 5, 8, 3, 10, 0, 6, 2]), {f0: K3.meets, kind: 'join' as const, slot: 4}, {f0: K3.meets + 30, kind: 'join' as const, slot: 7}, ...ghostTrain(K3.eight + 80, 1500, 120, 'join', [9, 2, 5])];
	const rows: TRow[] = [
		{label: 'start', at: -100, cells: [['0.20', -100], ['0', -100], ['0', -100], ['50', -100], ['0', -100]], gap: ['50', K3.bigger + 14]},
		{label: 'later', at: K3.c16, cells: [['0.16', K3.c16], ['0.04', K3.c04], ['0.04', K3.c04], ['40', K3.forty], ['8', K3.eight]], gap: ['32', K3.bigger + 40]},
	];
	return (
		<>
			<Heading text="A little later" at={4} />
			<Overlay>
				<ParticleLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} ghosts={ghosts} />
				<SlotRings cx={LENS.cx} cy={LENS.cy} r={LENS.r} slots={[0, 3, 6, 9]} at={K3.same} out={K3.started - 30} />
				<SvgText x={190} y={236} text="0.16 mol/L of PCl_5" size={50} color={NAVY} at={K3.c16} />
				<Pill x={190} y={256} w={480} text="same chance each, fewer left" at={K3.same} out={K3.started - 30} color={FWD} size={36} h={54} />
				<ColourKey x={225} y={870} at={-100} />
				<EqRR x={1010} y={140} at={-100} fwdAt={-100} revAt={K3.started} fwdWordAt={-100} revWordAt={K3.started} size={40} />
				<Bars fwd={fwd} rev={rev} at={-100} bracketAt={K3.bigger} />
				<NetArrow gap={fwd - rev} at={-100} ghostGap={f >= K3.bigger ? 50 : undefined}
					label={<>
						<Fade at={-100} out={K3.keeps}><SvgText x={NET.x + 40} y={NET.y0 + 126} text="PCl_5 falls" size={50} color={FWD} /></Fade>
						<Fade at={K3.keeps}>
							<SvgText x={NET.x + 40} y={NET.y0 + 100} text="more split than join," size={38} color={FWD} at={K3.keeps} />
							<SvgText x={NET.x + 40} y={NET.y0 + 146} text="PCl_5 still falls," size={38} color={FWD} at={K3.keeps + 8} />
							<SvgText x={NET.x + 40} y={NET.y0 + 192} text="but slower" size={38} color={FWD} at={K3.keeps + 16} />
						</Fade>
					</>} />
				<StageTable rows={rows} at={-100} gapAt={K3.bigger} />
			</Overlay>
		</>
	);
};
