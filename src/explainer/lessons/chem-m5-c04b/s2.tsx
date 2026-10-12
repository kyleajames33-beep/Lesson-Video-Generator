import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Ball, Bracket, Cells, Fade, FWD, Overlay, ProfileAxes, ProfileCurve, Ring, SvgText, TEAL, mkP} from './parts';
import {H2_INK, HI_INK, Heading, METAL_DARK, kf, sc} from './common';

// ---------- 2c. A lower pass ----------
const PA = mkP(170, 210, 900, 560);
const KL = cues(sc('lower-pass'), {hard: 'hardest step', less: 'less energy', old: 'old ridge', newp: 'new pass', lower: 'is lower', valleys: 'valleys have not moved', diff: 'energy difference', same: 'same as before', heat: 'heat of the reaction', down: 'going down', up: 'going up'});
export const SceneLowerPass: React.FC = () => {
	const g = PA;
	const xm = g.x0 + 0.5 * g.w, xh = g.x0 + g.w + 60;
	return (
		<>
			<Heading text="A lower pass" at={4} />
			<Overlay>
				<ProfileAxes g={g} at={-60} />
				<ProfileCurve g={g} peak={g.yT} at={-60} dur={4} />
				<path d={`M${g.x0},${g.yL} L${g.x0 + 0.13 * g.w},${g.yL} M${g.x0 + 0.87 * g.w},${g.yR} L${g.x0 + g.w},${g.yR}`} stroke={INK} strokeWidth={9} strokeLinecap="round" />
				<SvgText x={g.x0 + 0.075 * g.w} y={g.yL + 56} text="H_2 + I_2" size={46} color={H2_INK} anchor="middle" at={-60} />
				<SvgText x={g.x0 + 0.935 * g.w} y={g.yR + 56} text="2HI" size={46} color={HI_INK} anchor="middle" at={-60} />
				<SvgText x={xm} y={g.yT - 22} text="old ridge" size={44} color={INK} anchor="middle" at={KL.old} />
				<ProfileCurve g={g} peak={g.yP} at={KL.hard} dur={70} color={METAL_DARK} dash="18 12" width={9} />
				<SvgText x={xm} y={g.yP + 64} text="new pass" size={46} color={METAL_DARK} anchor="middle" at={KL.newp} />
				<Ring cx={xm} cy={g.yP} rx={110} ry={40} at={KL.newp} out={KL.newp + 50} color={METAL_DARK} seed={4} />
				<Arrow x1={xm} y1={g.yT + 12} x2={xm} y2={g.yP - 12} at={KL.lower} color={INK} width={6} />
				<SvgText x={xm + 22} y={(g.yT + g.yP) / 2 + 12} text="lower" size={46} color={INK} at={KL.lower + 10} />
				{/* valleys have not moved */}
				<Ring cx={g.x0 + 0.075 * g.w} cy={g.yL - 6} rx={100} ry={34} at={KL.valleys} out={KL.valleys + 80} color={TEAL} seed={5} />
				<Ring cx={g.x0 + 0.935 * g.w} cy={g.yR - 6} rx={100} ry={34} at={KL.valleys + 24} out={KL.valleys + 104} color={TEAL} seed={6} />
				<Fade at={KL.valleys + 10}><SvgText x={g.x0 + 0.075 * g.w} y={g.yL - 30} text="same level" size={40} color={TEAL} anchor="middle" at={KL.valleys + 10} /></Fade>
				<Fade at={KL.valleys + 30}><SvgText x={g.x0 + 0.935 * g.w} y={g.yR - 30} text="same level" size={40} color={TEAL} anchor="middle" at={KL.valleys + 30} /></Fade>
				{/* the energy difference between the valleys */}
				<Fade at={KL.diff}><path d={`M${g.x0 + 0.13 * g.w},${g.yL} L${xh},${g.yL}`} stroke={TEAL} strokeWidth={3.5} strokeDasharray="10 9" /></Fade>
				<Bracket x={xh} y1={g.yL} y2={g.yR} color={TEAL} at={KL.diff} side="right" />
				<SvgText x={xh + 24} y={(g.yL + g.yR) / 2 + 6} text="the same difference" size={42} color={TEAL} at={KL.same} />
				<Fade at={KL.heat}>
					<rect x={xh + 12} y={(g.yL + g.yR) / 2 + 44} width={430} height={130} rx={18} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
					<SvgText x={xh + 30} y={(g.yL + g.yR) / 2 + 100} text="heat of reaction" size={58} color={TEAL} at={KL.heat} />
					<SvgText x={xh + 30} y={(g.yL + g.yR) / 2 + 152} text="unchanged by the catalyst" size={36} color={INK} at={KL.heat + 14} hand={false} weight={600} />
				</Fade>
				{/* down and up the slope */}
				<Arrow x1={1280} y1={290} x2={1280} y2={380} at={KL.down} color={FWD} width={9} />
				<SvgText x={1316} y={322} text="down the slope:" size={50} color={FWD} at={KL.down + 6} />
				<SvgText x={1316} y={376} text="gives out heat" size={50} color={FWD} at={KL.down + 12} />
				<Arrow x1={1280} y1={540} x2={1280} y2={450} at={KL.up} color={AMBER_INK} width={9} />
				<SvgText x={1316} y={472} text="up the slope:" size={50} color={AMBER_INK} at={KL.up + 6} />
				<SvgText x={1316} y={526} text="takes in heat" size={50} color={AMBER_INK} at={KL.up + 12} />
			</Overlay>
		</>
	);
};
void DrawPath; void Enter; void FONT_DISPLAY; void FONT_HAND; void prog; void Ball;

// ---------- 3. A lower pass speeds both trips ----------
const PB = mkP(150, 200, 700, 480);
const K4 = cues(sc('lower-pass-both-ways'), {lower: 'lower pass', more: 'more collisions', through: 'get through', twenty: 'twenty collisions', one: 'one gets', ten: 'ten get through', times: 'ten times as many', back: 'going back', newTop: 'same new top', lowerBy: 'lower by the same height', drop: 'A drop of the same height', factor: 'the same factor', side: 'whichever side', rise: 'rise ten times', madeUp: 'made-up factor'});
export const SceneBothWays: React.FC = () => {
	const f = useCurrentFrame();
	const g = PB;
	const x1 = g.x0 + 0.09 * g.w, x2 = g.x0 + 0.91 * g.w, xm = g.x0 + 0.5 * g.w;
	const sB = kf(f, [[K4.more + 6, 0], [K4.through + 20, 2]], false);
	const sA = kf(f, [[K4.back, 2], [K4.newTop + 20, 0]], false);
	const topY = kf(f, [[K4.lowerBy, g.yT], [K4.lowerBy + 40, g.yP]]);
	const litBlue1 = [K4.one + 4];
	const litBlue2 = Array.from({length: 10}, (_, k) => K4.ten + 4 + k * 5);
	const litAmber1 = [K4.side + 60];
	const litAmber2 = Array.from({length: 10}, (_, k) => K4.rise + 4 + k * 4);
	return (
		<>
			<Heading text="A lower pass speeds both trips" at={4} size={64} />
			<Overlay>
				<ProfileAxes g={g} at={-60} />
				<ProfileCurve g={g} peak={g.yT} at={-60} dur={4} />
				<ProfileCurve g={g} peak={g.yP} at={-60} dur={4} color={METAL_DARK} dash="18 12" width={8} />
				<path d={`M${g.x0},${g.yL} L${g.x0 + 0.13 * g.w},${g.yL} M${g.x0 + 0.87 * g.w},${g.yR} L${g.x0 + g.w},${g.yR}`} stroke={INK} strokeWidth={9} strokeLinecap="round" />
				<SvgText x={xm} y={g.yT - 20} text="old ridge" size={40} color={INK} anchor="middle" at={-60} />
				<SvgText x={xm} y={g.yP + 56} text="new pass" size={40} color={METAL_DARK} anchor="middle" at={-60} />
				<Ball g={g} peak={g.yP} s={sB} color="#bcd6ee" opacity={f >= K4.more + 6 && f < K4.twenty ? 1 : 0} />
				<Ball g={g} peak={g.yP} s={sA} color={AMBER} opacity={f >= K4.back && f < K4.side ? 1 : 0} />
				<Bracket x={x1} y1={g.yL} y2={topY} color={FWD} at={-60} side="right" />
				<SvgText x={x1 + 20} y={(g.yL + topY) / 2 + 12} text="forward" size={42} color={FWD} at={-60} />
				<Bracket x={x2} y1={g.yR} y2={topY} color={AMBER_INK} at={K4.back} side="left" />
				<SvgText x={x2 - 20} y={(g.yR + topY) / 2 + 12} text="reverse" size={42} color={AMBER_INK} anchor="end" at={K4.back + 10} />
				<Arrow x1={xm} y1={g.yT + 12} x2={xm} y2={g.yP - 12} at={K4.lowerBy} color={INK} width={6} />
				<Fade at={K4.drop}><SvgText x={xm + 22} y={(g.yT + g.yP) / 2 + 12} text="same drop" size={44} color={INK} at={K4.drop} /></Fade>
				{/* forward trip: the same twenty collisions */}
				<Fade at={K4.twenty}>
					<SvgText x={950} y={232} text="forward trip: the same twenty collisions" size={46} color={FWD} at={K4.twenty} />
				</Fade>
				<SvgText x={950} y={296} text="over the high ridge" size={36} color={INK} at={K4.one} hand={false} weight={600} />
				<Cells x={950} y={308} n={20} cols={20} size={30} gap={6} lit={litBlue1} color={FWD} at={K4.twenty} />
				<SvgText x={950} y={394} text="through the low pass" size={36} color={INK} at={K4.ten} hand={false} weight={600} />
				<Cells x={950} y={406} n={20} cols={20} size={30} gap={6} lit={litBlue2} color={FWD} at={K4.twenty} />
				<Fade at={K4.times}>
					<path d="M1694,326 L1716,326 L1716,424 L1694,424" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1730} y={400} text="x10" size={78} color={FWD} at={K4.times} />
				</Fade>
				{/* return trip: the same factor from a higher ridge */}
				<Fade at={K4.side}>
					<SvgText x={950} y={560} text="return trip: 100 collisions" size={46} color={AMBER_INK} at={K4.side} />
				</Fade>
				<Cells x={950} y={584} n={100} cols={10} size={13} gap={3} lit={litAmber1} color={AMBER} at={K4.side} />
				<Cells x={1300} y={584} n={100} cols={10} size={13} gap={3} lit={litAmber2} color={AMBER} at={K4.side} />
				<Fade at={K4.side + 6}>
					<SvgText x={950} y={790} text="high ridge: 1 in 100" size={36} color={INK} at={K4.side + 6} hand={false} weight={600} />
					<SvgText x={1300} y={790} text="low pass: 10 in 100" size={36} color={INK} at={K4.rise} hand={false} weight={600} />
				</Fade>
				<Fade at={K4.rise}>
					<path d="M1654,590 L1676,590 L1676,720 L1654,720" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1690} y={680} text="x10" size={78} color={AMBER_INK} at={K4.rise} />
				</Fade>
				<Fade at={K4.madeUp}>
					<SvgText x={1080} y={900} text="ten is a made-up factor" size={60} color={TEAL} at={K4.madeUp} />
				</Fade>
				<Fade at={K4.side + 40}>
					<SvgText x={950} y={846} text="higher ridge, so fewer succeed, but the same factor" size={34} color={INK_SOFT} at={K4.side + 40} hand={false} weight={600} />
				</Fade>
			</Overlay>
		</>
	);
};
