import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Sx, TEAL, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {EmptyBars, KMarker, LitArrows, LogLine, QKGap, QMarker, lx} from '../chem-m5-c08/parts';
import type {Ln} from '../chem-m5-c08/parts';
import {CurveArrow} from '../chem-m5-c06a/types';
import {CARBON, CO2K, COK, Heading, hold, kf, sc} from './common';
import {CarbonVessel, GasKey, HscTag, MiniStrip, SlipChip} from './board';

export const C_EQ: EqItem[] = [{k: 'sp', t: 'C(s)', color: CARBON}, {k: 'plus'}, {k: 'sp', t: 'CO_2(g)', color: CO2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'CO(g)', color: COK}];
const LNC: Ln = {y: 430, x0: 1090, x1: 1760, lo: 0, hi: 1};
const VS = {x: 700, y: 300, h: 440};
const cardLines = (a: {k: number; c: number; co2: number; co: number}) => [
	{text: 'K = 1.90 at this temperature', at: a.k, color: TEAL, size: 34},
	{text: 'carbon: solid, in excess', at: a.c, color: CARBON, size: 34},
	{text: 'now: [CO_2] = 0.500 mol/L', at: a.co2, color: CO2K, size: 34},
	{text: 'now: [CO] = 0.800 mol/L', at: a.co, color: COK, size: 34},
];
/** Empty "Q = ?" slot under the line. */
const QSlot: React.FC<{at: number; out?: number}> = ({at, out}) => (
	<Fade at={at} out={out}>
		<rect x={1100} y={524} width={190} height={70} rx={18} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 7" />
		<Sx x={1195} y={572} text="Q = ?" size={40} color={INK_SOFT} anchor="middle" hand at={at} />
	</Fade>
);

// ---------- 4a. Type 4: a mixture and a K, asked for a direction (pause) ----------
const Q = 'q-vs-k-question';
const KQ = cues(sc(Q), {type: 'Type four', mix: 'a mixture and a K', dir: 'direction', carbon: 'Carbon a solid', excess: 'in excess', sits: 'sits with', k: 'K is 1.90', co2: '0.500 moles', co: '0.800', work: 'Work out Q', which: 'Which way', pause: 'Pause here'});
export const SceneQQuestion: React.FC = () => {
	const h = hold(Q);
	return (
		<>
			<Heading text="Work out Q. Which way will it run?" at={4} size={58} />
			<Overlay>
				<HscTag at={10} />
				<MiniStrip at={KQ.type} lit={[4]} dim={[3, 5]} flash={KQ.type + 4} />
				<EqStrip items={C_EQ} x={96} y={250} size={46} at={KQ.mix} />
				<GivensCard x={96} y={330} w={570} h={302} at={KQ.carbon - 8} lh={56} lines={cardLines({k: KQ.k, c: KQ.excess, co2: KQ.co2, co: KQ.co})} />
				<CarbonVessel x={VS.x} y={VS.y} h={VS.h} at={KQ.carbon} label={KQ.carbon + 10} counts={() => [5, 8]} />
				<GasKey x={720} y={850} at={KQ.sits} />
				<LogLine ln={LNC} at={KQ.k - 6} />
				<KMarker ln={LNC} k={1.9} at={KQ.k} label="K = 1.90" />
				<QSlot at={KQ.work} />
				<EmptyBars at={KQ.which} x0={1360} />
				<Sx x={96} y={720} text="Pause here to answer." size={56} color={AMBER_INK} hand at={KQ.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={420} y={870} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Answer: leave the solid out; Q below K runs forward ----------
const A = 'q-vs-k-answer';
const KA = cues(sc(A), {leave: 'Leave the solid out', qis: 'Q is 0.800', over: 'over 0.500', r128: '1.28', below: 'below K', little: 'too little product', fwd: 'forward reaction wins', builds: 'builds up', chases: 'Q chases K', climbs: 'Q climbs', iff: 'If carbon monoxide were', v150: '1.50', r450: '4.50', above: 'above K', back: 'run back'});
export const SceneQAnswer: React.FC = () => {
	const f = useCurrentFrame();
	const num: Term[][] = [[{t: 'CO', p: '2', at: KA.leave + 14, out: KA.qis + 10, color: COK}], [{t: '0.800', p: '2', br: false, at: KA.qis + 10, color: COK}]];
	const den: Term[][] = [[{t: 'CO_2', at: KA.leave + 20, out: KA.over, color: CO2K}], [{t: '0.500', br: false, at: KA.over, color: CO2K}]];
	const counts = (ff: number): [number, number] => [Math.round(kf(ff, [[KA.fwd, 5], [KA.builds + 30, 4]])), Math.round(kf(ff, [[KA.fwd, 8], [KA.builds + 30, 10]]))];
	const qx = lx(1.28, LNC), kx = lx(1.9, LNC);
	const W = 1430;
	return (
		<>
			<Heading text="Work out Q. Which way will it run?" at={-100} size={58} />
			<Overlay>
				<EqStrip items={C_EQ} x={96} y={250} size={46} at={-100} />
				<LitArrows items={C_EQ} x={96} y={250} size={46} fwd={KA.fwd} fwdOut={KA.v150} rev={KA.back} />
				<GivensCard x={96} y={330} w={570} h={302} at={-100} lh={56} lines={cardLines({k: -100, c: -100, co2: -100, co: -100})} />
				<CarbonVessel x={VS.x} y={VS.y} h={VS.h} at={-100} grey={prog(f, KA.leave, 16)} counts={counts} />
				<Sx x={826} y={790} text="solid: left out of Q" size={34} color={INK_SOFT} anchor="middle" hand at={KA.leave + 6} />
				<GasKey x={720} y={850} at={-100} />
				<LogLine ln={LNC} at={-100} />
				<KMarker ln={LNC} k={1.9} at={-100} label="K = 1.90" />
				{/* Q for this mixture */}
				<FracX cx={1230} cy={740} size={48} num={num} den={den} barAt={KA.leave + 10} prefix="Q =" prefixAt={KA.leave + 10} />
				<Sx x={W} y={730} text="0.800^{2} = 0.640" size={40} at={KA.qis + 24} />
				<Sx x={W} y={800} text="0.640 ÷ 0.500 =" size={40} at={KA.r128 - 12} />
				<Sx x={W + tw('0.640 ÷ 0.500 = ', 40)} y={804} text="1.28" size={56} color="#3a2f6b" hand at={KA.r128} />
				<QMarker ln={LNC} value={1.28} at={KA.r128 + 4} label="Q = 1.28" side="left" labelAt={KA.r128 + 10} out={KA.v150} />
				<QKGap ln={LNC} at={KA.below} qx={qx} kx={kx} out={KA.v150} />
				<Sx x={1560} y={580} text="Q < K" size={58} color="#3a2f6b" hand at={KA.below + 4} out={KA.v150} />
				<Fade at={KA.little} out={KA.v150}>
					<Sx x={96} y={700} text="too little product: forward wins" size={40} color={TEAL} hand at={KA.little} />
				</Fade>
				{/* Q chases K: a pen arrow from Q up to K */}
				<CurveArrow d={[[qx, 408], [qx + 24, 372], [kx - 56, 372], [kx - 22, 406]]} at={KA.chases} dur={18} out={KA.v150} />
				<Chip x={96} y={760} w={420} text="Q chases K" size={44} at={KA.chases} color={TEAL} />
				{/* the other side: CO at 1.50 mol/L */}
				<Sx x={1090} y={900} text="if [CO] = 1.50 mol/L:  Q = 1.50^{2} ÷ 0.500 = 4.50" size={34} at={KA.v150} />
				<QMarker ln={LNC} value={4.5} at={KA.r450} label="Q = 4.50" side="right" labelAt={KA.r450 + 6} />
				<QKGap ln={LNC} at={KA.above} qx={lx(4.5, LNC)} kx={kx} />
				<Sx x={1640} y={640} text="Q > K" size={58} color={AMBER_INK} hand at={KA.above + 4} />
				<Sx x={1090} y={960} text="Q above K: runs back" size={38} color={AMBER_INK} hand at={KA.back} />
				{/* unspoken slips */}
				<SlipChip x={96} y={860} w={560} text="carbon in Q" at={KA.leave + 30} out={KA.r128} size={32} />
				<SlipChip x={96} y={860} w={560} text="Q below K, but 'runs back'" at={KA.fwd + 20} out={KA.iff} size={32} />
			</Overlay>
		</>
	);
};
void INK;
