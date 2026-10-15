import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, EqStrip, Fade, GivensCard, Overlay, Sx, TEAL, tw} from '../chem-m5-c06/parts';
import {KMarker, LitArrows, LogLine, QKGap, QMarker, Tube, lx} from '../chem-m5-c08/parts';
import type {Kind, Ln} from '../chem-m5-c08/parts';
import {CROSS, Heading, O2K, SO2K, SO3K, hold, kf, sc} from './common';
import {HscTag, MiniStrip, MoveCard, SlipChip, VesselOne} from './board';
import {SO3_EQ} from './s2';

const LNS: Ln = {y: 470, x0: 1150, x1: 1760, lo: 0, hi: 3};
const QINK = '#3a2f6b';
const nowLines = (a: number[]) => [
	{text: 'now: [SO_2] = 0.150 mol/L', at: a[0], color: SO2K, size: 34},
	{text: 'now: [O_2] = 0.0750 mol/L', at: a[1], color: O2K, size: 34},
	{text: 'now: [SO_3] = 0.300 mol/L', at: a[2], color: SO3K, size: 34},
];

// ---------- 5. Attempt: type 1 or type 4? (pause) ----------
const AT = 'attempt';
const KA = cues(sc(AT), {turn: 'Your turn', newv: 'A new vessel', same: 'same temperature', k229: 'K is 229', so2: '0.150 moles', o2: '0.0750', so3: '0.300 of', samec: 'same concentrations', first: 'first vessel', which: 'Which way', pause: 'Pause here'});
export const SceneAttemptG3a: React.FC = () => {
	const h = hold(AT);
	return (
		<>
			<Heading text="Your turn" at={KA.turn} size={62} />
			<Overlay>
				<HscTag at={KA.turn + 6} />
				<EqStrip items={SO3_EQ} x={96} y={250} size={46} at={KA.newv} />
				{/* K from the ICE table question slides into the givens */}
				<MoveCard text="K = 229" sub="ICE table question" at={KA.same} from={[1250, 190]} to={[116, 400]} moveAt={KA.k229 - 6} out={KA.k229 + 26} w={360} />
				<GivensCard x={96} y={330} w={660} h={358} at={KA.newv + 6} lh={56} lines={[
					{text: 'K = 229', at: KA.k229 + 20, color: TEAL, size: 40},
					{text: 'same temperature as the ICE table question', at: KA.k229 + 24, color: INK_SOFT, size: 28},
					...nowLines([KA.so2, KA.o2, KA.so3]),
				]} />
				<VesselOne x={790} y={500} at={KA.samec - 6} pulse={KA.first} />
				<Sx x={1100} y={330} text="Which way will it run?" size={56} hand at={KA.which} />
				<LogLine ln={LNS} at={KA.k229 - 4} />
				<KMarker ln={LNS} k={229} at={KA.k229 + 4} label="K = 229" />
				<Fade at={KA.which}>
					<rect x={1150} y={564} width={190} height={70} rx={18} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 7" />
					<Sx x={1245} y={612} text="Q = ?" size={40} color={INK_SOFT} anchor="middle" hand at={KA.which} />
				</Fade>
				<Sx x={96} y={780} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1500} y={820} r={72} />
			</Overlay>
		</>
	);
};

// ---------- 6. Feedback: same numbers, but K only at equilibrium ----------
const FB = 'feedback';
const KF = cues(sc(FB), {same: 'Same concentrations', working: 'same working gives', r533: '53.3', nothing: 'nothing says', settled: 'has settled', qnotk: 'Q not K', below: 'Q is below K', k229: '229', little: 'too little product', fwd: 'forward reaction wins', more: 'more sulfur trioxide', slip: 'The slip is', newk: 'the new K', only: 'You only calculate', ateq: 'at equilibrium'});
const SO_KINDS: Kind[] = [{c: SO2K, ink: INK, r: 9}, {c: O2K, ink: INK, r: 8}, {c: SO3K, ink: INK, r: 9.5}];
export const SceneFeedbackG3a: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 740;
	const body = '= 0.300^{2} ÷ (0.150^{2} × 0.0750) = ';
	const kw = tw('K ', 46);
	const counts = (ff: number) => [Math.round(kf(ff, [[KF.fwd, 3], [KF.more + 30, 2]])), Math.round(kf(ff, [[KF.fwd, 2], [KF.more + 30, 1]])), Math.round(kf(ff, [[KF.fwd, 6], [KF.more + 30, 8]]))];
	const qx = lx(53.3, LNS), kx = lx(229, LNS);
	const crossK = prog(f, KF.qnotk, 10);
	return (
		<>
			<Heading text="Same numbers: K or Q?" at={4} size={60} />
			<Overlay>
				<MiniStrip x={1100} y={170} at={KF.working} lit={[1, 4]} flash={KF.working + 4} bracket={{a: 1, b: 4, at: KF.working + 10, text: ''}} />
				<Fade at={KF.working + 16}>
					<Sx x={1470} y={196} text="same numbers:" size={30} color={AMBER_INK} hand at={KF.working + 16} />
					<Sx x={1470} y={232} text="equilibrium: K; any mixture: Q" size={30} color={AMBER_INK} hand at={KF.working + 22} />
				</Fade>
				<EqStrip items={SO3_EQ} x={96} y={250} size={46} at={-100} />
				<LitArrows items={SO3_EQ} x={96} y={250} size={46} fwd={KF.fwd} />
				<GivensCard x={96} y={330} w={660} h={296} at={-100} lh={54} lines={[
					{text: 'K = 229 (this temperature)', at: -100, color: TEAL, size: 34}, ...nowLines([-100, -100, -100]),
				]} />
				{/* the same working as vessel 1 */}
				<Sx x={96} y={Y} text="K" size={46} at={KF.working - 10} opacity={1 - 0.6 * crossK} />
				<DrawPath d={`M${92},${Y + 4} L${130},${Y - 40}`} at={KF.qnotk} dur={8} color={CROSS} width={6} />
				<Sx x={100} y={Y - 52} text="Q" size={52} color={QINK} hand at={KF.qnotk + 6} />
				<Sx x={96 + kw} y={Y} text={body} size={46} at={KF.working - 6} />
				<Sx x={96 + kw + tw(body, 46)} y={Y + 4} text="53.3" size={62} color={QINK} hand at={KF.r533} />
				<Sx x={96} y={Y + 62} text="not said to be at equilibrium" size={38} color={AMBER_INK} hand at={KF.settled} />
				{/* the line: Q lands below K */}
				<LogLine ln={LNS} at={-100} />
				<KMarker ln={LNS} k={229} at={-100} label="K = 229" ring={KF.k229} />
				<QMarker ln={LNS} value={53.3} at={KF.qnotk + 4} label="Q = 53.3" side="left" labelAt={KF.qnotk + 10} />
				<QKGap ln={LNS} at={KF.below} qx={qx} kx={kx} />
				<Sx x={1580} y={612} text="Q < K" size={56} color={QINK} hand at={KF.below + 4} />
				<Sx x={1150} y={720} text="too little product: forward wins" size={36} color={TEAL} hand at={KF.little} />
				<Tube x={1560} y={760} w={220} h={190} counts={counts} kinds={SO_KINDS} tint={false} reveal={prog(f, KF.fwd - 10, 14)} />
				<Sx x={1670} y={996} text="more SO_3 forms" size={34} color={SO3K} anchor="middle" hand at={KF.more} />
				<Chip x={1150} y={760} w={330} text="Q chases K" size={40} at={KF.fwd + 10} color={TEAL} />
				{/* the slip and the rule */}
				<SlipChip x={96} y={852} w={620} text="K = 53.3 at this temperature" at={KF.newk - 4} note="K is 229 here; 53.3 is Q" noteColor={AMBER_INK} />
				<Chip x={760} y={970} w={720} text="K: only from an equilibrium mixture" size={38} at={KF.ateq} color={TEAL} />
			</Overlay>
		</>
	);
};
void INK;
