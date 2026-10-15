import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {BARS8, BLUE, Bars8, CARD8, EQ8, EmptyBars, EqStrip, Fade, FracX, GHOST8, HI_KINDS, KEY8, KMarker, LN, LitArrows, LogLine, Overlay, QKGap, QMarker, Ring, Sx, Tag, TEAL, Tick, Tube, TubeScale, TUBE8, cardY, cst, lx} from './parts';
import type {Term} from './parts';
import {HiCard, Key8} from './board';
import {slotXY} from '../chem-m5-c04b/parts';
import {Heading, QINK, fwdRate, revRate, sc} from './common';

const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';

// ---------- 3. Calculate Q ----------
const C = 'calculate-q';
const KC = cues(sc(C), {sub: 'Substitute the values now', hi2: 'Hydrogen iodide squared is', sq: '0.50 squared', r25: ['0.25', 1], under: 'Underneath', tt: '0.20 times 0.20', r040: ['0.040', 1], soq: 'So Q is', r625: '6.25'});
export const SceneCalcQ: React.FC = () => {
	const cardX = CARD8.x + 330;
	const num: Term[][] = [
		[{t: 'HI', p: '2', at: -100, out: KC.hi2 + 4, color: HIK}],
		[{t: '0.50', p: '2', at: KC.hi2 + 4, from: [cardX, cardY(3) - 12], color: HIK, dur: 26}],
	];
	const den: Term[][] = [
		[{t: 'H_2', at: -100, out: KC.under + 4, color: H2K}, {t: 'I_2', at: -100, out: KC.under + 4, color: I2K}],
		[{t: '0.20', at: KC.under + 4, from: [cardX, cardY(1) - 12], color: H2K, dur: 26}, {t: '0.20', at: KC.under + 12, from: [cardX, cardY(2) - 12], color: I2K, dur: 26}],
	];
	const W1 = 800, Y1 = 660, Y2 = 740, Y3 = 836;
	return (
		<>
			<Heading text="Calculate Q" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<HiCard h="0.20" i="0.20" hi="0.50" rings={[undefined, KC.under + 4, KC.under + 12, KC.hi2 + 4]} />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={cst(4, 4, 10)} />
				<Sx x={1160} y={240} text="the K fraction, with the numbers from now" size={34} color={INK_SOFT} at={-100} />
				<FracX cx={1250} cy={440} size={78} num={num} den={den} barAt={-100} prefix="Q =" prefixAt={-100} hold={360} />
				{/* the working, one beat per spoken number */}
				<Sx x={W1} y={Y1} text="0.50^{2} =" size={56} at={KC.sq} />
				<Sx x={W1 + 215} y={Y1} text="0.25" size={56} color={HIK} at={KC.r25} />
				<Sx x={W1} y={Y2} text="0.20 × 0.20 =" size={56} at={KC.tt} />
				<Sx x={W1 + 450} y={Y2} text="0.040" size={56} color={H2K} at={KC.r040} />
				<Sx x={W1} y={Y3} text="Q = 0.25 ÷ 0.040 =" size={64} at={KC.soq} />
				<Sx x={W1 + 590} y={Y3} text="6.25" size={96} color={TEAL} hand at={KC.r625} />
				<Ring cx={W1 + 670} cy={Y3 - 30} rx={110} ry={64} at={KC.r625 + 12} color={AMBER} seed={6} width={6} />
				<Tick x={W1 + 800} y={Y3 - 24} at={KC.r625 + 26} s={50} />
				<Tag x={W1} y={890} w={330} text="Q: no unit written" at={KC.sub} color={INK_SOFT} size={32} />
			</Overlay>
		</>
	);
};

// ---------- 4. Compare Q with K on a log line ----------
const P = 'compare-q-k';
const KP = cues(sc(P), {each: 'Each tick on this line', ten: 'ten times the one before', fit: 'small and large numbers', q: '6.25', k: 'K is forty-nine', less: 'smaller than K', lesshi: 'less hydrogen iodide', which: 'which reaction is quicker', join: 'joining', split: 'splitting'});
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const ticks = [0, 1, 2, 3, 4].map(i => KP.each + 12 + i * 10);
	const hop = (i: number) => KP.ten + i * 16;
	return (
		<>
			<Heading text="Compare Q with K" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<HiCard h="0.20" i="0.20" hi="0.50" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={cst(4, 4, 10)} />
				<LogLine at={KP.each} tickAt={ticks} />
				{/* x 10 hops from tick to tick */}
				{[0, 1, 2, 3].map(i => {
					const x1 = lx(10 ** (i - 1)), x2 = lx(10 ** i), mid = (x1 + x2) / 2;
					return (
						<g key={i} opacity={1 - prog(f, KP.q - 6, 10)}>
							<DrawPath d={`M${x1 + 6},${LN.y - 26} Q${mid},${LN.y - 96} ${x2 - 6},${LN.y - 26}`} at={hop(i)} dur={14} color={AMBER_INK} width={5} />
							<Sx x={mid} y={LN.y - 82} text="× 10" size={38} color={AMBER_INK} anchor="middle" hand at={hop(i) + 8} />
						</g>
					);
				})}
				<Fade at={KP.fit} out={KP.q}>
					<Sx x={1290} y={LN.y + 160} text="each tick is 10 times the last" size={42} color={INK_SOFT} anchor="middle" hand at={KP.fit} />
				</Fade>
				<QMarker at={KP.q} value={6.25} label="Q = 6.25" side="left" labelAt={KP.q + 6} />
				<KMarker k={49} at={KP.k} label="K = 49" />
				<QKGap at={KP.k + 16} qx={lx(6.25)} kx={lx(49)} sign="<" signAt={KP.less} />
				<Fade at={KP.lesshi}>
					<Sx x={1300} y={LN.y + 280} text="less product than a settled tube" size={44} color={AMBER_INK} anchor="middle" hand at={KP.lesshi} />
				</Fade>
				{/* ghost settled tube beside the live one */}
				<Tube x={GHOST8.x} y={GHOST8.y} w={GHOST8.w} h={GHOST8.h} counts={cst(2, 2, 14)} ghost reveal={prog(f, KP.lesshi, 14)} />
				<Sx x={GHOST8.x + 4} y={GHOST8.y - 14} text="settled tube" size={34} color={INK_SOFT} hand at={KP.lesshi + 8} />
				<Sx x={TUBE8.x + 4} y={TUBE8.y - 14} text="this tube" size={34} color={INK_SOFT} hand at={KP.lesshi + 8} />
				{/* the question: which rate is bigger */}
				<EmptyBars at={KP.which - 8} />
				<Fade at={KP.join}>
					<Sx x={1130} y={700} text="joining: H_2 + I_2 make HI" size={42} color={BLUE} hand at={KP.join} />
				</Fade>
				<Fade at={KP.split}>
					<Sx x={1130} y={770} text="splitting: HI breaks into H_2 + I_2" size={42} color={AMBER_INK} hand at={KP.split} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 5. Why a small Q means the forward reaction wins ----------
// No rate algebra: the reason is the products-versus-reactants comparison with the settled tube,
// then the collision picture (more H2 and I2, so joining is faster). Bars show only which is taller.
const R = 'rate-link';
const KR = cues(sc(R), {which: 'which reaction wins', comp: 'compares products with reactants', smaller: 'smaller than K', settled: 'compared with a settled tube', little: 'too little hydrogen iodide', much: 'too much hydrogen and iodine', collide: 'more hydrogen and iodine to collide', join: 'joining happens faster than splitting', faster: ['faster', 1], wins: 'forward reaction wins', made: 'hydrogen iodide is made'});
export const SceneRateLink: React.FC = () => {
	const f = useCurrentFrame();
	const g = prog(f, KR.join, 30);
	const fwd = fwdRate(0.2, 0.2) * g, rev = revRate(0.5) * g;
	// one H2 and one I2 dot leave their places, meet and join into two HI, once
	const m0 = KR.made, m1 = KR.made + 16;
	const j = f >= m1 ? 1 : 0;
	const counts = (ff: number) => (ff >= m1 ? [3, 3, 12] : ff >= m0 ? [3, 3, 10] : [4, 4, 10]);
	const tcx = TUBE8.x + TUBE8.w / 2, tcy = TUBE8.y + TUBE8.h / 2, tax = TUBE8.w / 2 - 28, tay = TUBE8.h / 2 - 30;
	const pH = slotXY(7, 0, 3, m0, tcx, tcy, tax, tay), pI = slotXY(7, 1, 3, m0, tcx, tcy, tax, tay);
	const mx = (pH.x + pI.x) / 2, my = (pH.y + pI.y) / 2;
	const mu = Math.min(1, Math.max(0, (f - m0) / (m1 - m0)));
	const me = mu * mu * (3 - 2 * mu);
	const qx = lx(6.25);
	const topF = BARS8.base - fwd * 12;
	// dot-count labels under each tube (pen rings land on them as they are spoken)
	const CY1 = 992, CY2 = 1036;
	const tx = TUBE8.x + TUBE8.w / 2, gx = GHOST8.x + GHOST8.w / 2;
	return (
		<>
			<Heading text="Q below K: which reaction wins?" at={4} size={58} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={KR.wins + 4} />
				<HiCard h="0.20" i="0.20" hi="0.50" />
				<Key8 at={-100} />
				{/* the live tube beside the ghost settled tube */}
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Tube x={GHOST8.x} y={GHOST8.y} w={GHOST8.w} h={GHOST8.h} counts={cst(2, 2, 14)} ghost />
				<Sx x={GHOST8.x + 4} y={GHOST8.y - 14} text="settled tube" size={34} color={INK_SOFT} hand at={-100} />
				<Sx x={TUBE8.x + 4} y={TUBE8.y - 14} text="this tube" size={34} color={INK_SOFT} hand at={-100} />
				{f >= m0 && f < m1 + 4 ? (
					<g opacity={f < m1 ? 1 : 1 - (f - m1) / 4}>
						<circle cx={pH.x + (mx - 8 - pH.x) * me} cy={pH.y + (my - pH.y) * me} r={HI_KINDS[0].r} fill={HI_KINDS[0].c} stroke={HI_KINDS[0].ink} strokeWidth={2.3} />
						<circle cx={pI.x + (mx + 8 - pI.x) * me} cy={pI.y + (my - pI.y) * me} r={HI_KINDS[1].r} fill={HI_KINDS[1].c} stroke={HI_KINDS[1].ink} strokeWidth={2.3} />
					</g>
				) : null}
				<Ring cx={mx} cy={my} rx={34} ry={30} at={m1 - 4} out={m1 + 40} color={BLUE} seed={5} width={5} />
				{/* the dot counts: HI first, then H2 and I2 */}
				<Sx x={tx} y={CY1} text={j ? '12 HI' : '10 HI'} size={32} color={HIK} anchor="middle" at={KR.little} weight={700} />
				<Sx x={gx} y={CY1} text="14 HI" size={32} color={HIK} anchor="middle" at={KR.little + 8} weight={700} />
				<Ring cx={tx} cy={CY1 - 11} rx={78} ry={26} at={KR.little + 10} out={KR.much} color={AMBER} seed={3} width={5} />
				<Ring cx={gx} cy={CY1 - 11} rx={78} ry={26} at={KR.little + 18} out={KR.much} color={AMBER} seed={8} width={5} />
				<Sx x={tx} y={CY2} text={j ? '3 H_2, 3 I_2' : '4 H_2, 4 I_2'} size={30} color={H2K} anchor="middle" at={KR.much} weight={700} />
				<Sx x={gx} y={CY2} text="2 H_2, 2 I_2" size={30} color={H2K} anchor="middle" at={KR.much + 8} weight={700} />
				<Ring cx={tx} cy={CY2 - 10} rx={100} ry={24} at={KR.much + 12} out={KR.join} color={AMBER} seed={4} width={5} />
				<Ring cx={gx} cy={CY2 - 10} rx={100} ry={24} at={KR.much + 20} out={KR.join} color={AMBER} seed={6} width={5} />
				{/* the number line from the compare scene stays */}
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" />
				<QMarker at={-100} value={6.25} label="Q = 6.25" side="left" />
				<QKGap at={-100} qx={qx} kx={lx(49)} sign="<" signAt={-100} />
				<Ring cx={qx + 40} cy={LN.y + 134} rx={140} ry={44} at={KR.smaller} out={KR.smaller + 50} color={AMBER} seed={2} width={5} />
				<Fade at={KR.comp}>
					<Sx x={qx} y={LN.y + 214} text="products / reactants" size={38} color={QINK} anchor="middle" hand at={KR.comp} />
				</Fade>
				<Fade at={-100} out={KR.join - 4}>
					<Sx x={1300} y={LN.y + 280} text="less product than a settled tube" size={44} color={AMBER_INK} anchor="middle" hand at={-100} />
				</Fade>
				<Ring cx={1300} cy={LN.y + 266} rx={360} ry={40} at={KR.settled + 6} out={KR.little} color={AMBER} seed={7} width={5} />
				{/* the rate bars: "?" until joining is said to be faster */}
				<EmptyBars at={-100} out={KR.join - 4} />
				<Bars8 fwd={fwd} rev={rev} scale={12} at={KR.join - 4} />
				<Fade at={KR.faster}>
					<Sx x={BARS8.x0 + BARS8.bw / 2} y={topF - 22} text="forward faster" size={44} color={BLUE} anchor="middle" hand at={KR.faster} />
				</Fade>
				<Sx x={1130} y={700} text="joining: H_2 + I_2 make HI" size={42} color={BLUE} hand at={-100} />
				<Sx x={1130} y={770} text="splitting: HI breaks into H_2 + I_2" size={42} color={AMBER_INK} hand at={-100} />
				<Fade at={KR.collide}>
					<Sx x={1130} y={840} text="more H_2 and I_2 to collide: more joining" size={36} color={BLUE} hand at={KR.collide} />
				</Fade>
			</Overlay>
		</>
	);
};
void LN; void KMarker; void LogLine; void QMarker; void QKGap; void KEY8; void TEAL; void Tick; void AMBER;
