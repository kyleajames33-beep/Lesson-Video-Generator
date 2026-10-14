import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, FONT_HAND, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {BARS8, BLUE, Bars8, CARD8, EQ8, EmptyBars, EqStrip, Fade, FracX, GHOST8, KEY8, KMarker, LN, LitArrows, LogLine, Overlay, QKGap, QMarker, Ring, Sx, Tag, TEAL, Tick, Tube, TubeScale, TUBE8, cardY, cst, lx} from './parts';
import type {Term} from './parts';
import {HiCard, Key8} from './board';
import {Heading, dots, fwdRate, kf, mixA, mixB, qOf, revRate, sc} from './common';

const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
const fmtQ = (q: number) => (Math.abs(q - 49) < 0.15 ? '49' : q >= 100 ? q.toFixed(0) : q >= 10 ? q.toFixed(1) : q.toFixed(2));
const easeOut = (u: number) => 1 - (1 - Math.min(1, Math.max(0, u))) ** 3;

// ---------- 6. Q chases K ----------
const S = 'q-chases-k';
const KS = cues(sc(S), {top: 'top of Q grows', climbs: 'climbs', falls: 'forward rate falls', rises: 'reverse rate rises', equal: 'until the two are equal', reach: 'Q reaches K', vals: ['0.10', 1], v70: '0.70', where: 'where Q is forty-nine', icet: 'the settled tube from the ICE', chase: 'Q chases K'});
export const SceneChases: React.FC = () => {
	const f = useCurrentFrame();
	const t0 = KS.top, t1 = KS.reach + 24;
	const x = (ff: number) => 0.1 * easeOut((ff - t0) / (t1 - t0));
	const m = (ff: number) => mixA(x(ff));
	const counts = (ff: number) => [dots(m(ff).h), dots(m(ff).i), dots(m(ff).hi)];
	const q = (ff: number) => {
		const c = m(ff);
		return qOf(c.h, c.i, c.hi);
	};
	const c = m(f);
	const fwd = fwdRate(c.h, c.i), rev = revRate(c.hi);
	const land = f >= t1 - 4;
	return (
		<>
			<Heading text="Q chases K" at={4} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} fwd={-100} rev={KS.rises} pulse={false} />
				<HiCard h="0.20" i="0.20" hi="0.50" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Tube x={GHOST8.x} y={GHOST8.y} w={GHOST8.w} h={GHOST8.h} counts={cst(2, 2, 14)} ghost seed={9} />
				<Sx x={GHOST8.x + 4} y={GHOST8.y - 14} text="settled tube" size={34} color={INK_SOFT} hand at={-100} />
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" ring={t1 - 6} ringOut={t1 + 40} />
				<QMarker at={-100} value={q} label={ff => `Q = ${fmtQ(q(ff))}`} side="left" />
				<QMarker at={-100} value={6.25} ghost label="start: 6.25" side="right" labelAt={KS.top} labelDy={58} />
				<QKGap at={KS.top} qx={ff => lx(q(ff))} kx={lx(49)} />
				<Bars8 fwd={fwd} rev={rev} scale={12} at={-100} eqAt={t1 + 4} />
				{/* settled values and the check */}
				<Fade at={KS.vals}>
					<Sx x={1130} y={596} text="settled (mol/L):" size={34} color={INK_SOFT} at={KS.vals} />
					<Sx x={1130} y={640} text="[H_2] = 0.10" size={38} color={H2K} at={KS.vals + 4} />
					<Sx x={1130} y={682} text="[I_2] = 0.10" size={38} color={I2K} at={KS.vals + 10} />
					<Sx x={1130} y={724} text="[HI] = 0.70" size={38} color={HIK} at={KS.v70} />
				</Fade>
				<Fade at={KS.where}>
					<Sx x={1130} y={774} text="0.70^{2} ÷ (0.10 × 0.10) = 49" size={40} at={KS.where} />
				</Fade>
				<Fade at={KS.where + 14}>
					<Sx x={1130} y={826} text="Q = 49 = K" size={50} color={TEAL} hand at={KS.where + 14} />
					<Tick x={1400} y={812} at={KS.where + 30} s={42} />
				</Fade>
				<Fade at={KS.icet} out={KS.chase - 4}>
					<Sx x={1130} y={900} text="the same settled tube as the ICE table video" size={36} color={INK_SOFT} hand at={KS.icet} />
				</Fade>
				{land ? null : null}
				<Fade at={KS.chase}>
					<Sx x={1060} y={196} text="Q chases K." size={92} color={TEAL} hand at={KS.chase} />
				</Fade>
				<Fade at={KS.climbs} out={KS.reach}>
					<Sx x={1290} y={LN.y + 280} text="Q climbs" size={50} color={AMBER_INK} anchor="middle" hand at={KS.climbs} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7a. The other side (with a response) ----------
const O = 'other-side';
const KO = cues(sc(O), {side: 'other side', h: ['0.05', 1], i: ['0.05', 2], hi: ['0.80', 1], almost: 'almost all', work: 'Work out Q', sq: '0.80 squared', r64: '0.64', den: '0.05 times 0.05', r25: '0.0025', q256: '256', kis: 'K is forty-nine', which: 'Which way will it run', pause: 'Pause here'});
export const SceneOtherSide: React.FC = () => {
	const f = useCurrentFrame();
	const hold = sc(O).responseHold as {startFrame: number; endFrame: number};
	const cardX = CARD8.x + 330;
	const num: Term[][] = [[{t: '0.80', p: '2', at: KO.sq, from: [cardX, cardY(3) - 12], color: HIK, dur: 26}]];
	const den: Term[][] = [[{t: '0.05', at: KO.den, from: [cardX, cardY(1) - 12], color: H2K, dur: 26}, {t: '0.05', at: KO.den + 8, from: [cardX, cardY(2) - 12], color: I2K, dur: 26}]];
	const W1 = 760;
	return (
		<>
			<Heading text="Which way will it run?" at={KO.side} size={62} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={KO.side} />
				<Tag x={370} y={760} w={240} text="made-up mixture" at={KO.side + 10} color={INK_SOFT} size={28} />
				<HiCard h="0.05" i="0.05" hi="0.80" ats={[KO.side + 4, KO.h, KO.i, KO.hi]} rings={[undefined, KO.h + 8, KO.i + 8, KO.hi + 8]} at={KO.side} />
				<Key8 at={KO.side + 10} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={cst(1, 1, 16)} reveal={prog(f, KO.side, 18)} />
				<LogLine at={KO.side + 6} />
				<KMarker k={49} at={KO.side + 30} label="K = 49" ring={KO.kis} ringOut={KO.kis + 50} />
				<QMarker at={KO.q256} value={256} label="Q = 256" side="right" labelAt={KO.q256 + 8} size={50} />
				<FracX cx={1000} cy={590} size={52} num={num} den={den} barAt={KO.work} prefix="Q =" prefixAt={KO.work} hold={260} />
				<Sx x={W1} y={740} text="0.80^{2} =" size={40} at={KO.sq} />
				<Sx x={W1 + 170} y={740} text="0.64" size={40} color={HIK} at={KO.r64} />
				<Sx x={W1} y={796} text="0.05 × 0.05 =" size={40} at={KO.den} />
				<Sx x={W1 + 272} y={796} text="0.0025" size={40} color={H2K} at={KO.r25} />
				<Sx x={W1} y={860} text="Q = 0.64 ÷ 0.0025 =" size={40} at={KO.q256 - 18} />
				<Sx x={W1 + 390} y={860} text="256" size={64} color={TEAL} hand at={KO.q256} />
				<EmptyBars at={KO.which} x0={1290} bw={90} gx={150} h={150} />
				<Sx x={1290} y={640} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KO.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1700} y={790} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 7b. The answer and what it teaches ----------
const A2 = 'other-side-answer';
const KA = cues(sc(A2), {above: 'Q is above K', toomuch: 'too much hydrogen iodide', rev: 'reverse reaction wins', fo: 'Forward over reverse', r19: '0.19', five: 'five times faster', splits: 'Hydrogen iodide splits', falls: 'Q falls', again: 'same settled tube again', first: 'The first tube', depends: 'depends on K', wq: 'work out Q and compare'});
export const SceneOtherAnswer: React.FC = () => {
	const f = useCurrentFrame();
	const t0 = KA.splits, t1 = KA.again + 10;
	const y = (ff: number) => 0.05 * easeOut((ff - t0) / (t1 - t0));
	const m = (ff: number) => mixB(y(ff));
	const counts = (ff: number) => [dots(m(ff).h), dots(m(ff).i), dots(m(ff).hi)];
	const q = (ff: number) => {
		const c = m(ff);
		return qOf(c.h, c.i, c.hi);
	};
	const c = m(f);
	const g = prog(f, KA.r19, 30);
	const fwd = fwdRate(c.h, c.i), rev = revRate(c.hi);
	const k = 35;
	return (
		<>
			<Heading text="Q above K: reverse wins" at={4} size={58} />
			<Overlay>
				<EqStrip items={H2I2_EQ} x={EQ8.x} y={EQ8.y} size={EQ8.s} at={-100} />
				<LitArrows items={H2I2_EQ} rev={KA.rev} />
				<HiCard h="0.05" i="0.05" hi="0.80" />
				<Key8 at={-100} />
				<Tube x={TUBE8.x} y={TUBE8.y} w={TUBE8.w} h={TUBE8.h} counts={counts} />
				<Fade at={KA.first}>
					<Tube x={GHOST8.x} y={GHOST8.y} w={GHOST8.w} h={GHOST8.h} counts={cst(4, 4, 10)} ghost seed={9} />
					<Sx x={GHOST8.x + 4} y={GHOST8.y - 14} text="the first tube" size={34} color={INK_SOFT} hand at={KA.first} />
				</Fade>
				<LogLine at={-100} />
				<KMarker k={49} at={-100} label="K = 49" />
				<QMarker at={-100} value={q} label={ff => `Q = ${fmtQ(q(ff))}`} side="right" />
				<QKGap at={KA.above - 6} qx={ff => lx(q(ff))} kx={lx(49)} sign=">" signAt={KA.above} />
				<QMarker at={KA.first} value={6.25} ghost label="first tube: 6.25" side="left" labelAt={KA.first + 6} />
				<Bars8 fwd={fwd * g} rev={rev * g} scale={k} at={KA.fo} eqAt={KA.again + 6} />
				<Fade at={KA.fo} out={KA.falls + 10}>
					<Sx x={1130} y={600} text="forward ÷ reverse = K ÷ Q" size={40} color={INK_SOFT} at={KA.fo} />
				</Fade>
				<Fade at={KA.r19} out={KA.falls + 10}>
					<Sx x={1130} y={664} text="49 ÷ 256 = 0.19" size={58} color={TEAL} at={KA.r19} />
				</Fade>
				<Fade at={KA.five} out={KA.falls + 10}>
					<Sx x={1130} y={740} text="reverse about 5 times faster" size={44} color={AMBER_INK} hand at={KA.five} />
				</Fade>
				<Fade at={KA.depends} out={KA.wq + 60}>
					<rect x={1150} y={780} width={700} height={170} rx={20} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
					<Sx x={1176} y={828} text="all three are mostly product:" size={34} color={INK_SOFT} hand at={KA.depends} />
					<Sx x={1176} y={870} text="first tube: Q = 6.25, below K" size={34} color={BLUE} at={KA.depends + 8} />
					<Sx x={1176} y={906} text="settled tube: Q = 49, equal to K" size={34} color={TEAL} at={KA.depends + 16} />
					<Sx x={1176} y={942} text="this tube: Q = 256, above K" size={34} color={AMBER_INK} at={KA.depends + 24} />
				</Fade>
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void FONT_HAND; void BARS8; void Ring; void LN; void kf; void Tick;
