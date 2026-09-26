// GibbsSpontaneityDiagram — the sign of ΔG decides spontaneity. Under the
// defining equation ΔG = ΔH − TΔS, three plinths carry three slopes:
//   ΔG < 0  downhill: the ball rolls on its own (spontaneous)
//   ΔG = 0  flat: the ball just rocks in place (equilibrium)
//   ΔG > 0  uphill: the ball rolls back every time (non-spontaneous)
// A number line underneath ties the three zones to the sign of ΔG.
//
// Diorama restyle: painted ramps on plinths, glossy balls whose motion loops
// for the whole hold (the motion is the explanation, so it never freezes),
// and a self-drawing ΔG number line.
//
// Timing: used on Chem Y11 M4 CP3 and L13 (card reveal at frame 90) and Y12
// M5 L2 and L14 (reveal at 62), so the build starts at START = 90.
// Beat plan (frames after START):
//   0     equation + plinths
//   30    ΔG < 0 slope (ball starts rolling); 60 ΔG = 0; 90 ΔG > 0
//   150   number line draws; 210 verdict

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth} from './diorama';
import {Ball, BallDefs, clamp, drawProps, fadeAt, shade} from './kinds/restyle-chem-specials/props';

const ID = 'gibbs';
const START = 90;
const W = 760;
const NEG = '#d65a4a';
const PLINTH_Y = 350;
const XS = [130, 380, 630];
const RAMP_HW = 84, HI = 76, LO = 14, BALL_R = 15;

export const GibbsSpontaneityDiagram = () => {
	const frame = useCurrentFrame() - START;
	const f = frame + START;
	const line = interpolate(frame, [150, 190], [0, 1], clamp);

	// Ball position along a ramp's top edge (s = 0 left end, 1 right end).
	const along = (cx: number, yl: number, yr: number, s: number) => {
		const x = cx - RAMP_HW + 16 + s * (RAMP_HW * 2 - 32);
		const y = yl + (yr - yl) * ((x - (cx - RAMP_HW)) / (RAMP_HW * 2));
		const slope = Math.atan2(yr - yl, RAMP_HW * 2);
		return {x: x + Math.sin(slope) * BALL_R, y: y - Math.cos(slope) * BALL_R};
	};

	// Downhill: accelerate from the top, rest a moment at the bottom, repeat.
	const downT = ((f % 110) + 110) % 110;
	const sDown = interpolate(downT, [0, 60], [0, 1], clamp) ** 2;
	const downFade = interpolate(downT, [0, 6, 96, 110], [0, 1, 1, 0], clamp);
	// Flat: rocks gently about the middle.
	const sFlat = 0.5 + Math.sin(f / 22) * 0.12;
	// Uphill: a push gets it partway up; it rolls back down.
	const sUp = 0.42 * Math.max(0, Math.sin((((f % 90) + 90) % 90) / 90 * Math.PI));

	const ramp = (i: number, yl: number, yr: number, color: string, top: string, sub: string, s: number, fade: number, rolled: number) => {
		const cx = XS[i];
		const Y = PLINTH_Y;
		const L = Y - yl, R = Y - yr;
		const b = along(cx, L, R, s);
		const spin = s * 360 * 1.6;
		return (
			<g opacity={fadeAt(frame, 30 * (i + 1), 14)}>
				<text x={cx} y={150} textAnchor="middle" fill={color === TOK.inkDim ? TOK.ink : color} fontSize={27} fontWeight={850}>{top}</text>
				<text x={cx} y={178} textAnchor="middle" fill={color === TOK.inkDim ? TOK.inkDim : color} fontSize={19} fontWeight={700}>{sub}</text>
				<DioramaPlinth id={ID} cx={cx} cy={Y} rx={112}>
					{/* ramp body (side face, then the top edge) */}
					<path d={`M ${cx - RAMP_HW} ${Y + 6} L ${cx - RAMP_HW} ${L} L ${cx + RAMP_HW} ${R} L ${cx + RAMP_HW} ${Y + 6} Z`} fill={`url(#${ID}-ramp)`} stroke="#8a6a44" strokeWidth={2} strokeLinejoin="round" />
					<path d={`M ${cx - RAMP_HW} ${L} L ${cx + RAMP_HW} ${R}`} stroke={shade('#c9a06a', 0.15)} strokeWidth={6} strokeLinecap="round" />
					<g opacity={fade} transform={`translate(${b.x},${b.y}) rotate(${spin * rolled})`}>
						<Ball id={ID} fill={`b${i}`} edge={color === TOK.inkDim ? '#7b8288' : color} x={0} y={0} r={BALL_R} />
					</g>
				</DioramaPlinth>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Gibbs free energy: the sign of delta G decides whether a reaction is spontaneous" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{b0: TOK.chem2, b1: '#9aa3ad', b2: NEG}} />
			<defs>
				<linearGradient id={`${ID}-ramp`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#c9a06a" />
					<stop offset="100%" stopColor="#8f6a3e" />
				</linearGradient>
			</defs>

			<text x={W / 2} y={60} textAnchor="middle" fill={TOK.ink} fontSize={38} fontWeight={850} opacity={fadeAt(frame, -START, 14)}>ΔG = ΔH − TΔS</text>

			{ramp(0, HI, LO, TOK.chem1, 'ΔG < 0', 'spontaneous', sDown, downFade, 1)}
			{ramp(1, (HI + LO) / 2 - 12, (HI + LO) / 2 - 12, TOK.inkDim, 'ΔG = 0', 'equilibrium', sFlat, 1, 1)}
			{ramp(2, LO, HI, NEG, 'ΔG > 0', 'non-spontaneous', sUp, 1, 1)}

			{/* ΔG number line */}
			<g>
				<path d="M 40 456 L 720 456" stroke={TOK.inkDim} strokeWidth={4} strokeLinecap="round" fill="none" {...drawProps(line)} />
				<g opacity={fadeAt(frame, 180)}>
					<rect x={40} y={462} width={340} height={7} rx={3.5} fill={TOK.chem2} opacity={0.55} />
					<rect x={380} y={462} width={340} height={7} rx={3.5} fill={NEG} opacity={0.55} />
					<line x1={380} y1={442} x2={380} y2={470} stroke={TOK.inkDim} strokeWidth={3.5} />
					<text x={380} y={494} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800}>0</text>
					<text x={50} y={494} fill={TOK.chem1} fontSize={19} fontWeight={800}>← more negative</text>
					<text x={710} y={494} textAnchor="end" fill={NEG} fontSize={19} fontWeight={800}>more positive →</text>
				</g>
			</g>
			<text x={W / 2} y={526} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700} opacity={fadeAt(frame, 210, 16)}>
				the sign of ΔG decides whether a reaction goes
			</text>
		</svg>
	);
};
