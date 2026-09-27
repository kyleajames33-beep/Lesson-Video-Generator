// CalorimeterDiagram — an insulated cup calorimeter: the reaction in the cup
// releases heat, the water absorbs it and the thermometer rises. A
// temperature-time graph draws itself in step with the thermometer, and the
// rise is bracketed as ΔT, the quantity q = m c ΔT is built on.
//
// Diorama restyle: a foam cup with lid, stirrer and thermometer on a plinth
// (cut away to show the water), soft heat shimmer from the reaction, a
// self-drawing graph, and a stirrer that keeps working during the hold.
// Fix: the old "q = m c ΔT" label overlapped the "reaction releases heat"
// caption; the formula now heads the diagram.
//
// No numbers are shown: the same diagram serves combustion, neutralisation
// and dissolution scenes (Chem Y11 M4 CP1, L2, L3, L4 and Y12 M6 L3).
// Timing: the Y11 M4 scenes reveal the card at frame 90 (Y12 at 62), so the
// apparatus is visible from the first frame and the action starts at 90.
// Beat plan (frames after START = 90):
//   0     cup + graph axes (static until the card is up)
//   30    reaction glows, heat shimmers into the water
//   40    graph pen + thermometer run together; T rises then levels off
//   270   ΔT bracket (amber) on graph and thermometer; formula chip lights

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from './diorama';
import {clamp, drawProps, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'calor';
const START = 90;
const W = 760;
const CX = 214;
const PLINTH_Y = 432;
const CUP_TOP = 178, CUP_BOT = 424, CUP_TW = 92, CUP_BW = 74;
const WATER_Y = 236;
// graph box
const GX0 = 452, GX1 = 724, GY0 = 150, GY1 = 390;
const T_LOW = 0.18, T_HIGH = 0.82; // fraction of the graph's height
const PEN_START = 40, PEN_END = 250, DT_AT = 270;

// Temperature as a fraction 0..1 along the run: flat before mixing, a quick
// rise, then levelling off at the maximum.
const tempAt = (u: number) => {
	if (u < 0.2) return T_LOW;
	const k = Math.min(1, (u - 0.2) / 0.45);
	return T_LOW + (T_HIGH - T_LOW) * (1 - Math.pow(1 - k, 2.4));
};

export const CalorimeterDiagram = () => {
	const frame = useCurrentFrame() - START;
	const pulse = idlePulse(frame + START);
	const u = interpolate(frame, [PEN_START, PEN_END], [0, 1], clamp);
	const temp = tempAt(u);
	const glow = fadeAt(frame, 30, 20);
	const dt = fadeAt(frame, DT_AT, 16);
	const stir = Math.sin((frame + START) / 9) * 10;

	const gx = (v: number) => GX0 + v * (GX1 - GX0);
	const gy = (v: number) => GY1 - v * (GY1 - GY0);
	const curve = Array.from({length: 61}, (_, i) => i / 60).map((v, i) => `${i ? 'L' : 'M'} ${gx(v).toFixed(1)} ${gy(tempAt(v)).toFixed(1)}`).join(' ');

	// thermometer column (fraction → y)
	const TH_X = CX + 34, TH_TOP = 66, TH_BOT = 356;
	const thY = (v: number) => TH_BOT - 14 - v * (TH_BOT - TH_TOP - 40);

	const cupPath = `M ${CX - CUP_TW} ${CUP_TOP} L ${CX - CUP_BW} ${CUP_BOT - 10} Q ${CX - CUP_BW} ${CUP_BOT} ${CX - CUP_BW + 12} ${CUP_BOT} L ${CX + CUP_BW - 12} ${CUP_BOT} Q ${CX + CUP_BW} ${CUP_BOT} ${CX + CUP_BW} ${CUP_BOT - 10} L ${CX + CUP_TW} ${CUP_TOP} Z`;
	const hwAt = (y: number) => CUP_TW - ((y - CUP_TOP) / (CUP_BOT - CUP_TOP)) * (CUP_TW - CUP_BW);
	const waterPath = `M ${CX - hwAt(WATER_Y) + 9} ${WATER_Y} L ${CX + hwAt(WATER_Y) - 9} ${WATER_Y} L ${CX + CUP_BW - 9} ${CUP_BOT - 12} Q ${CX + CUP_BW - 9} ${CUP_BOT - 8} ${CX + CUP_BW - 18} ${CUP_BOT - 8} L ${CX - CUP_BW + 18} ${CUP_BOT - 8} Q ${CX - CUP_BW + 9} ${CUP_BOT - 8} ${CX - CUP_BW + 9} ${CUP_BOT - 12} Z`;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Insulated calorimeter: the water absorbs the reaction's heat and its temperature rise ΔT is measured" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-foam`} x1="0" x2="1">
					<stop offset="0%" stopColor="#e9e7df" />
					<stop offset="30%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#d3d0c4" />
				</linearGradient>
				<radialGradient id={`${ID}-glow`}>
					<stop offset="0%" stopColor={TOK.amber} stopOpacity={0.75} />
					<stop offset="100%" stopColor={TOK.amber} stopOpacity={0} />
				</radialGradient>
				<clipPath id={`${ID}-water`}><path d={waterPath} /></clipPath>
			</defs>

			{/* formula */}
			<g>
				<rect x={W / 2 - 110} y={12} width={220} height={48} rx={24} fill="#ffffff" stroke={dt > 0 ? TOK.amber : TOK.rule} strokeWidth={dt > 0 ? 2.5 + pulse * 1.5 : 2} />
				<text x={W / 2} y={46} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={850}>q = m c ΔT</text>
			</g>

			{/* apparatus */}
			<DioramaPlinth id={ID} cx={CX} cy={PLINTH_Y} rx={128}>
				<path d={cupPath} fill={`url(#${ID}-foam)`} stroke="#b9b5a6" strokeWidth={3} strokeLinejoin="round" />
				{/* cut-away window into the water */}
				<path d={waterPath} fill="#cfe6ee" />
				<g clipPath={`url(#${ID}-water)`}>
					<ellipse cx={CX} cy={CUP_BOT - 40} rx={70 + pulse * 6} ry={52 + pulse * 4} fill={`url(#${ID}-glow)`} opacity={glow} />
					{[-36, 0, 36].map((dx, i) => {
						const a = ((((frame + START) * 0.014 + i * 0.33) % 1) + 1) % 1;
						const y = CUP_BOT - 40 - a * 130;
						return <path key={i} d={`M ${CX + dx} ${y + 18} q 7 -6 0 -12 q -7 -6 0 -12`} stroke={TOK.amber} strokeWidth={3} fill="none" strokeLinecap="round" opacity={glow * (1 - a) * 0.9} />;
					})}
				</g>
				<path d={waterPath} fill="none" stroke="#9fc3cf" strokeWidth={2} />
				{/* lid */}
				<rect x={CX - CUP_TW - 10} y={CUP_TOP - 16} width={(CUP_TW + 10) * 2} height={18} rx={6} fill={`url(#${ID}-foam)`} stroke="#b9b5a6" strokeWidth={2.5} />
				{/* stirrer (moves up and down: never frozen) */}
				<g transform={`translate(0, ${stir * glow})`}>
					<line x1={CX - 34} y1={CUP_TOP - 70} x2={CX - 34} y2={CUP_BOT - 44} stroke="#7b8288" strokeWidth={4} strokeLinecap="round" />
					<ellipse cx={CX - 34} cy={CUP_BOT - 42} rx={22} ry={6} fill="none" stroke="#7b8288" strokeWidth={4} />
				</g>
				{/* thermometer */}
				<rect x={TH_X - 9} y={TH_TOP} width={18} height={TH_BOT - TH_TOP} rx={9} fill="#ffffff" stroke="#8d9aa0" strokeWidth={2.5} />
				<circle cx={TH_X} cy={TH_BOT + 6} r={15} fill="#ffffff" stroke="#8d9aa0" strokeWidth={2.5} />
				<rect x={TH_X - 4} y={thY(temp)} width={8} height={TH_BOT + 6 - thY(temp)} fill="#d64b3c" />
				<circle cx={TH_X} cy={TH_BOT + 6} r={10} fill="#d64b3c" />
				<rect x={TH_X - 5} y={TH_TOP + 8} width={3} height={TH_BOT - TH_TOP - 24} rx={1.5} fill="#ffffff" opacity={0.8} />
				{/* ΔT on the thermometer */}
				<g opacity={dt}>
					<line x1={TH_X + 14} y1={thY(T_LOW)} x2={TH_X + 34} y2={thY(T_LOW)} stroke={TOK.amber} strokeWidth={3} />
					<line x1={TH_X + 14} y1={thY(T_HIGH)} x2={TH_X + 34} y2={thY(T_HIGH)} stroke={TOK.amber} strokeWidth={3} />
					<line x1={TH_X + 26} y1={thY(T_LOW)} x2={TH_X + 26} y2={thY(T_HIGH)} stroke={TOK.amber} strokeWidth={3} />
					<text x={TH_X + 38} y={(thY(T_LOW) + thY(T_HIGH)) / 2 + 8} fill={TOK.amberInk} fontSize={24} fontWeight={850}>ΔT</text>
				</g>
			</DioramaPlinth>
			<text x={CX} y={522} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={glow}>the water absorbs the heat</text>

			{/* temperature-time graph */}
			<g opacity={fadeAt(frame, -START, 16)}>
				<rect x={GX0 - 64} y={GY0 - 40} width={GX1 - GX0 + 84} height={GY1 - GY0 + 104} rx={16} fill="#ffffff" opacity={0.7} />
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2.5} />
				<line x1={GX0} y1={GY0 - 14} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2.5} />
				<text x={(GX0 + GX1) / 2} y={GY1 + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>time →</text>
				<text x={GX0 - 22} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} transform={`rotate(-90 ${GX0 - 22} ${(GY0 + GY1) / 2})`}>temperature →</text>
			</g>
			<path d={curve} fill="none" stroke="#d64b3c" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" {...drawProps(u)} />
			{u > 0 && u < 1 ? <circle cx={gx(u)} cy={gy(temp)} r={6} fill="#d64b3c" /> : null}
			<g opacity={dt}>
				<line x1={GX0} y1={gy(T_LOW)} x2={GX1} y2={gy(T_LOW)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="5 6" />
				<line x1={GX0} y1={gy(T_HIGH)} x2={GX1} y2={gy(T_HIGH)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="5 6" />
				<path d={`M ${GX1 - 34} ${gy(T_LOW)} L ${GX1 - 34} ${gy(T_HIGH)}`} stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} />
				<path d={`M ${GX1 - 42} ${gy(T_LOW)} h 16 M ${GX1 - 42} ${gy(T_HIGH)} h 16`} stroke={TOK.amber} strokeWidth={3} />
				<text x={GX1 - 48} y={(gy(T_LOW) + gy(T_HIGH)) / 2 + 9} textAnchor="end" fill={TOK.amberInk} fontSize={26} fontWeight={850}>ΔT</text>
			</g>
		</svg>
	);
};
