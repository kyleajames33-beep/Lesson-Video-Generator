// FermentationDiagram (chem12m7Fermentation): the biological route to ethanol.
//
// A fermentation flask of glucose solution and yeast, sealed with an airlock.
// The balanced equation sits on top, and its coefficients of 2 are the one
// highlighted thing (the scene says an unbalanced version loses marks).
// Then the three required conditions arrive on their narration beats, each
// shown on the apparatus itself:
//   temperature  a water bath and thermometer at about 35 °C (enzyme optimum)
//   anaerobic    the airlock lets CO₂ bubble out but lets no air in; an O₂
//                arrow is blocked at the airlock
//   yeast        yeast cells in the flask, labelled as the source of zymase
// While the yeast works, CO₂ bubbles rise and leave through the airlock, and
// the glucose fill level falls slightly as ethanol builds up (illustrative).
//
// Beats are frames after `delay`. Hold: bubbles keep rising, yeast cells drift.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob} from '../../diorama';
import {fadeAt, popAt} from './mol';

export type FermentationProps = {
	at?: {flask?: number; equation?: number; coefficients?: number; temperature?: number; anaerobic?: number; yeast?: number; rule?: number};
	temperature?: string;
	ruleText?: string;
	delay?: number;
};

const ID = 'c12m7fe';
const W = 760;
const H = 530;
const CORAL = '#d9604a';
const YEAST = '#d8b25a';

const hash01 = (n: number) => {
	const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
};

// Flask geometry (conical flask, left-centre).
const FX = 250, FBASE = 440, FNECK_Y = 252, NECK_W = 46, BODY_W = 250;
const flaskPath = `M ${FX - NECK_W / 2} ${FNECK_Y - 40} L ${FX - NECK_W / 2} ${FNECK_Y} L ${FX - BODY_W / 2} ${FBASE - 14} Q ${FX - BODY_W / 2} ${FBASE} ${FX - BODY_W / 2 + 16} ${FBASE} L ${FX + BODY_W / 2 - 16} ${FBASE} Q ${FX + BODY_W / 2} ${FBASE} ${FX + BODY_W / 2} ${FBASE - 14} L ${FX + NECK_W / 2} ${FNECK_Y} L ${FX + NECK_W / 2} ${FNECK_Y - 40}`;
const halfWidthAt = (y: number) => NECK_W / 2 + ((BODY_W - NECK_W) / 2) * Math.max(0, Math.min(1, (y - FNECK_Y) / (FBASE - 14 - FNECK_Y)));
// Airlock above the stopper.
const AL = {x: FX, y: FNECK_Y - 112};

export const FermentationDiagram = ({at = {}, temperature = 'about 35 °C', ruleText = 'All three conditions, or no ethanol', delay = 62}: FermentationProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		flask: at.flask ?? 0,
		equation: at.equation ?? 60,
		coefficients: at.coefficients ?? 200,
		temperature: at.temperature ?? 380,
		anaerobic: at.anaerobic ?? 520,
		yeast: at.yeast ?? 700,
		rule: at.rule ?? 820,
	};
	const shown = fadeAt(frame, t.flask, 16);
	const working = fadeAt(frame, t.equation + 40, 30);
	const fill = 330 + 16 * Math.min(1, Math.max(0, (frame - t.equation) / 900)); // surface y, drops a little

	// CO₂ bubbles rising through the liquid, then through the airlock.
	const bubbles = Array.from({length: 9}, (_, k) => {
		const period = 70 + (k % 3) * 14;
		const p = (((frame + k * 23) % period) + period) % period / period;
		const x0 = FX + (hash01(k) - 0.5) * 140;
		const y = FBASE - 20 - p * (FBASE - 20 - fill);
		const hw = halfWidthAt(y) - 10;
		const x = FX + Math.max(-hw, Math.min(hw, x0 - FX + Math.sin(p * 7 + k) * 5));
		return {x, y, o: Math.sin(p * Math.PI) * working, r: 4 + (k % 3)};
	});
	const lockBubble = (((frame % 40) + 40) % 40) / 40;

	// Yeast cells (budding ovals) suspended in the liquid.
	const yeast = Array.from({length: 7}, (_, k) => {
		const y = fill + 30 + hash01(k + 9) * (FBASE - fill - 60);
		const hw = halfWidthAt(y) - 20;
		return {x: FX + (hash01(k + 3) - 0.5) * 2 * hw + idleBob(frame, k, 1.6), y: y + idleBob(frame, k + 5, 1.6)};
	});
	const yeastPop = popAt(frame, fps, t.yeast);

	// Equation with the coefficients highlighted.
	const coefOn = fadeAt(frame, t.coefficients, 14);
	const EQY = 54;

	// Condition chips on the right.
	const conds = [
		{n: '1', title: temperature, sub: "enzyme's optimum", at: t.temperature},
		{n: '2', title: 'anaerobic: no oxygen', sub: 'else: CO₂ + H₂O, no ethanol', at: t.anaerobic},
		{n: '3', title: 'yeast (zymase enzyme)', sub: 'source of the catalyst', at: t.yeast},
	];
	const CX = 472;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Fermentation: yeast converts glucose to ethanol and carbon dioxide at about 35 degrees under anaerobic conditions, sealed with an airlock" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-liquid`} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#f6e7b8" />
					<stop offset="100%" stopColor="#e8cf86" />
				</linearGradient>
				<linearGradient id={`${ID}-bath`} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#cfe6f5" />
					<stop offset="100%" stopColor="#a9d0ec" />
				</linearGradient>
				<clipPath id={`${ID}-flask`}>
					<path d={flaskPath + ' Z'} />
				</clipPath>
				<radialGradient id={`${ID}-yeast`} cx="38%" cy="32%" r="70%">
					<stop offset="0%" stopColor="#fff6dc" />
					<stop offset="70%" stopColor={YEAST} />
					<stop offset="100%" stopColor="#a8843a" />
				</radialGradient>
			</defs>

			{/* equation */}
			<g opacity={fadeAt(frame, t.equation, 16)}>
				<text x={W / 2} y={EQY} textAnchor="middle" fontSize={28} fontWeight={800} fill={TOK.ink}>
					C₆H₁₂O₆
					<tspan fill={TOK.inkDim}> → </tspan>
					<tspan fill={coefOn > 0.5 ? TOK.amberInk : TOK.ink}>2</tspan>
					C₂H₅OH
					<tspan fill={TOK.inkDim}> + </tspan>
					<tspan fill={coefOn > 0.5 ? TOK.amberInk : TOK.ink}>2</tspan>
					CO₂
				</text>
				<text x={W / 2} y={EQY + 28} textAnchor="middle" fontSize={15} fontWeight={800} fill={TOK.inkDim}>glucose → ethanol + carbon dioxide</text>
			</g>

			{/* water bath (temperature beat) */}
			<g opacity={fadeAt(frame, t.temperature, 16)}>
				<rect x={FX - 168} y={FBASE - 120} width={336} height={136} rx={14} fill={`url(#${ID}-bath)`} opacity={0.85} />
				<text x={FX - 156} y={FBASE + 40} fill="#2f5d80" fontSize={15} fontWeight={800}>warm water bath</text>
				{/* thermometer in the bath */}
				<rect x={FX + 140} y={FBASE - 190} width={10} height={176} rx={5} fill="#ffffff" stroke="#9aa3ab" strokeWidth={1.5} />
				<rect x={FX + 142.5} y={FBASE - 110} width={5} height={96} rx={2.5} fill={CORAL} />
				<circle cx={FX + 145} cy={FBASE - 12} r={8} fill={CORAL} />
				<text x={FX + 145} y={FBASE - 200} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>{temperature}</text>
			</g>

			{/* flask */}
			<g opacity={shown}>
				<g clipPath={`url(#${ID}-flask)`}>
					<rect x={FX - BODY_W / 2} y={fill} width={BODY_W} height={FBASE - fill + 2} fill={`url(#${ID}-liquid)`} />
					<line x1={FX - BODY_W / 2} y1={fill} x2={FX + BODY_W / 2} y2={fill} stroke="#d9be6e" strokeWidth={2} />
					{bubbles.map((b, k) => (
						<circle key={k} cx={b.x} cy={b.y} r={b.r} fill="#ffffff" stroke="#c9b06a" strokeWidth={1.2} opacity={b.o} />
					))}
					{yeast.map((y, k) => (
						<g key={k} opacity={Math.min(1, yeastPop) * 0.95 + (1 - Math.min(1, yeastPop)) * 0.45 * fadeAt(frame, t.flask + 20, 20)}>
							<ellipse cx={y.x} cy={y.y} rx={10} ry={8} fill={`url(#${ID}-yeast)`} stroke="rgba(0,0,0,0.2)" />
							{k % 2 === 0 && <circle cx={y.x + 10} cy={y.y - 5} r={4.5} fill={`url(#${ID}-yeast)`} stroke="rgba(0,0,0,0.2)" />}
						</g>
					))}
				</g>
				<path d={flaskPath} fill="none" stroke="#9fb0ba" strokeWidth={3} strokeLinejoin="round" />
				<text x={FX} y={FBASE - 30} textAnchor="middle" fill="#7a6326" fontSize={15} fontWeight={800}>glucose solution</text>
				{/* stopper and airlock */}
				<rect x={FX - NECK_W / 2 - 4} y={FNECK_Y - 52} width={NECK_W + 8} height={22} rx={5} fill="#8a6b52" />
				<rect x={FX - 4} y={AL.y + 40} width={8} height={FNECK_Y - 52 - AL.y - 40} fill="#c8d3da" />
				<path d={`M ${AL.x - 26} ${AL.y + 40} L ${AL.x - 26} ${AL.y} Q ${AL.x - 26} ${AL.y - 14} ${AL.x - 12} ${AL.y - 14} L ${AL.x + 12} ${AL.y - 14} Q ${AL.x + 26} ${AL.y - 14} ${AL.x + 26} ${AL.y} L ${AL.x + 26} ${AL.y + 40} Z`} fill="#eef5f8" stroke="#9fb0ba" strokeWidth={2.5} />
				<rect x={AL.x - 22} y={AL.y + 14} width={44} height={22} rx={4} fill="#bcdcf2" />
				{/* CO2 bubbling out through the airlock water */}
				<circle cx={AL.x} cy={AL.y + 32 - lockBubble * 26} r={5} fill="#ffffff" stroke="#8fb4cc" strokeWidth={1.2} opacity={working * Math.sin(lockBubble * Math.PI)} />
				<text x={AL.x + 34} y={AL.y - 4} fill={TOK.inkDim} fontSize={15} fontWeight={800}>airlock</text>
			</g>
			{/* CO2 leaving */}
			<g opacity={working}>
				{[0, 1].map((k) => {
					const p = (((frame + k * 30) % 60) + 60) % 60 / 60;
					return (
						<text key={k} x={AL.x - 6 + Math.sin(p * 5) * 6} y={AL.y - 20 - p * 22} fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={Math.sin(p * Math.PI)}>CO₂</text>
					);
				})}
			</g>
			{/* O2 blocked at the airlock (anaerobic beat) */}
			<g opacity={fadeAt(frame, t.anaerobic + 20, 14)}>
				<text x={AL.x - 140} y={AL.y - 26} fill={CORAL} fontSize={16} fontWeight={800}>O₂</text>
				<line x1={AL.x - 112} y1={AL.y - 30} x2={AL.x - 44} y2={AL.y - 10} stroke={CORAL} strokeWidth={3} strokeLinecap="round" />
				<line x1={AL.x - 50} y1={AL.y - 24} x2={AL.x - 36} y2={AL.y - 4} stroke={CORAL} strokeWidth={4} strokeLinecap="round" />
				<line x1={AL.x - 50} y1={AL.y - 4} x2={AL.x - 36} y2={AL.y - 24} stroke={CORAL} strokeWidth={4} strokeLinecap="round" />
				<text x={AL.x - 140} y={AL.y + 2} fill={CORAL} fontSize={14} fontWeight={800}>no air in</text>
			</g>
			<g opacity={fadeAt(frame, t.yeast + 20, 14)}>
				<line x1={FX - 40} y1={FBASE - 60} x2={FX - 96} y2={FBASE - 150} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={FX - 100} y={FBASE - 156} textAnchor="end" fill="#8a6a24" fontSize={15} fontWeight={800}>yeast cells</text>
			</g>

			{/* conditions */}
			<text x={CX} y={150} fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, t.temperature - 10, 14)}>three conditions, all needed</text>
			{conds.map((c, k) => {
				const p = Math.min(1, popAt(frame, fps, c.at));
				const y = 196 + k * 80;
				return (
					<g key={c.n} opacity={p} transform={`translate(${(1 - p) * 16},0)`}>
						<rect x={CX} y={y - 24} width={W - CX - 14} height={66} rx={14} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
						<circle cx={CX + 24} cy={y + 8} r={14} fill={theme.accent} />
						<text x={CX + 24} y={y + 13} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={800}>{c.n}</text>
						<text x={CX + 48} y={y + 3} fill={TOK.ink} fontSize={17} fontWeight={800}>{c.title}</text>
						<text x={CX + 48} y={y + 26} fill={TOK.inkDim} fontSize={14} fontWeight={700}>{c.sub}</text>
					</g>
				);
			})}

			<text x={W / 2} y={H - 14} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, t.rule, 16)}>{ruleText}</text>
		</svg>
	);
};
