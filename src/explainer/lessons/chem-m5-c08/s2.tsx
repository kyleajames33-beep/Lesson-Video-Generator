import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {BARS8, BLUE, Bars8, CARD8, EQ8, EmptyBars, EqStrip, Fade, FracX, GHOST8, KEY8, KMarker, LN, LitArrows, LogLine, Overlay, QKGap, QMarker, Ring, Sx, Tag, TEAL, Tick, Tube, TubeScale, TUBE8, cardY, cst, lx} from './parts';
import type {Term} from './parts';
import {HiCard, Key8} from './board';
import {Heading, fwdRate, revRate, sc} from './common';

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
const R = 'rate-link';
const KR = cues(sc(R), {join: 'joining is', split: 'splitting is', div: 'Divide the two', fixed: 'The two fixed numbers', givek: 'give K', conc: 'The concentrations divide', up: 'upside down', fo: 'forward over reverse', kq: 'K times one over Q', n49: 'forty-nine over 6.25', ab8: 'about eight', faster: 'eight times faster', made: 'hydrogen iodide is made'});
export const SceneRateLink: React.FC = () => {
	const f = useCurrentFrame();
	const g = prog(f, KR.n49, 36);
	const fwd = fwdRate(0.2, 0.2) * g, rev = revRate(0.5) * g;
	// the tube loses one H2 and one I2 and gains two HI, once
	const j = f >= KR.made + 14 ? 1 : 0;
	const counts = () => [4 - j, 4 - j, 10 + 2 * j];
	const AX = 1190;
	const fnum: Term[][] = [[{t: 'forward', br: false, at: KR.div + 6, color: BLUE}]];
	const fden: Term[][] = [[{t: 'reverse', br: false, at: KR.div + 6, color: AMBER_INK}]];
	const n2: Term[][] = [[{t: '0.05', br: false, at: KR.div + 14, color: BLUE}, {t: '×', br: false, at: KR.div + 14}, {t: 'H_2', at: KR.div + 14, color: H2K}, {t: 'I_2', at: KR.div + 14, color: I2K}]];
	const d2: Term[][] = [[{t: '(0.05 ÷ 49)', br: false, at: KR.div + 18, color: AMBER_INK}, {t: '×', br: false, at: KR.div + 18}, {t: 'HI', p: '2', at: KR.div + 18, color: HIK}]];
	const rn: Term[][] = [[{t: 'H_2', at: KR.conc, color: H2K}, {t: 'I_2', at: KR.conc + 6, color: I2K}]];
	const rd: Term[][] = [[{t: 'HI', p: '2', at: KR.conc + 10, color: HIK}]];
	return (
		<>
			<Heading text="Q below K: forward wins" at={4} size={58} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={KR.made} />
				<HiCard h="0.20" i="0.20" hi="0.50" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Ring cx={TUBE8.x + TUBE8.w / 2} cy={TUBE8.y + TUBE8.h / 2} rx={140} ry={140} at={KR.made + 10} out={KR.made + 70} color={BLUE} seed={5} width={5} />
				{/* the two rate lines */}
				<Sx x={AX} y={300} text="forward = 0.05 × [H_2][I_2]" size={38} color={BLUE} at={KR.join} />
				<Sx x={AX} y={400} text="reverse = (0.05 ÷ 49) × [HI]^{2}" size={38} color={AMBER_INK} at={KR.split} />
				<Fade at={KR.join + 14}>
					<Sx x={AX + 196} y={338} text="fixed number" size={28} color={INK_SOFT} hand at={KR.join + 14} />
				</Fade>
				<Fade at={KR.split + 14}>
					<Sx x={AX + 196} y={438} text="another fixed number" size={28} color={INK_SOFT} hand at={KR.split + 14} />
				</Fade>
				{/* divide the two */}
				<FracX cx={1330} cy={560} size={44} num={fnum} den={fden} barAt={KR.div} hold={160} />
				<Sx x={1426} y={574} text="=" size={52} at={KR.div + 10} />
				<FracX cx={1670} cy={560} size={44} num={n2} den={d2} barAt={KR.div + 12} hold={400} />
				<Fade at={KR.fixed}>
					<Sx x={AX} y={690} text="0.05 ÷ (0.05 ÷ 49) = 49 = K" size={44} color={TEAL} at={KR.fixed} />
				</Fade>
				<Ring cx={1712} cy={676} rx={40} ry={32} at={KR.givek} color={AMBER} seed={4} width={5} />
				{/* the concentrations divide to give the Q fraction upside down */}
				<Sx x={AX} y={810} text="the rest:" size={38} color={INK_SOFT} at={KR.conc} />
				<FracX cx={1500} cy={790} size={44} num={rn} den={rd} barAt={KR.conc} hold={190} />
				<Fade at={KR.up}>
					<Sx x={1640} y={810} text="= Q upside down" size={38} color={AMBER_INK} hand at={KR.up} />
					<DrawPath d="M1420,730 C1310,760 1310,850 1420,880" at={KR.up + 6} dur={20} color={AMBER_INK} width={5} />
				</Fade>
				<Fade at={KR.fo}>
					<Sx x={AX} y={930} text="forward ÷ reverse = K ÷ Q" size={72} color={AMBER_INK} hand at={KR.fo} />
				</Fade>
				{/* the bars follow K ÷ Q */}
				<EmptyBars at={-100} out={KR.n49 - 4} />
				<Bars8 fwd={fwd} rev={rev} scale={12} at={KR.n49 - 4} />
				<Fade at={KR.n49 + 6}>
					<Sx x={BARS8.x0} y={470} text="49 ÷ 6.25 = 7.84" size={46} color={TEAL} at={KR.n49 + 6} />
				</Fade>
				<Fade at={KR.ab8}>
					<Sx x={BARS8.x0} y={526} text="forward about 8 times faster" size={36} color={BLUE} hand at={KR.ab8} />
				</Fade>
				<Tag x={BARS8.x0} y={566} w={270} text="made-up rate scale" at={KR.faster} size={24} />
				<Tag x={BARS8.x0 + 282} y={566} w={170} text="in this model" at={KR.faster + 8} size={24} />
			</Overlay>
		</>
	);
};
void LN; void KMarker; void LogLine; void QMarker; void QKGap; void KEY8; void TEAL; void Tick; void AMBER;
