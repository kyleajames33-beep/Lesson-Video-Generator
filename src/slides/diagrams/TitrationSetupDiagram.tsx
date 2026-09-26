// TitrationSetupDiagram — a burette clamped above a conical flask on a
// plinth. The standard solution runs in drop by drop, the burette level
// falls, pink flashes appear where drops land and fade (swirling), and at the
// endpoint the pale pink stays: the tap closes and the volume delivered is
// bracketed as the titre.
//
// Diorama restyle: retort stand, glass burette and flask on a stone display
// plinth, a painted liquid with a swirl, graduations on the burette, labels
// that separate the two volumes students mix up (titre = standard, from the
// burette; aliquot = the unknown, in the flask).
//
// Timing: used on four concept scenes (Chem Y11 M2 L10, L17; Y12 M6 L14,
// M8 L1), all revealing the card at the default frame 62, so START = 62.
// Beat plan (frames after START):
//   0     apparatus + labels
//   40    drops start; burette level falls
//   280   transient pink flashes where drops land (approaching endpoint)
//   360   endpoint: pale pink stays, drops stop, tap closes
//   380   titre bracket (amber: the measured result) breathes during the hold

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from './diorama';
import {GLASS_EDGE, GlassDefs, clamp, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'titr';
const START = 62;
const W = 760;

const BX = 300; // burette + flask centre line
const ROD_X = BX - 204; // retort-stand rod, well clear of the titre bracket
const CLAMP_Y = 226; // clamp sits below the titre bracket
const B_TOP = 44, B_BOT = 282, B_HW = 15;
const LEVEL_0 = 66, LEVEL_1 = 170; // standard solution level before / at the endpoint
const TIP_Y = 322;
const PLINTH_Y = 422;
const F_NECK_TOP = 332, F_NECK_BOT = 358, F_NECK_HW = 18, F_BASE_HW = 84, F_BASE = 426;
const LIQ_Y = 392;
const RUN = 40, ENDPOINT = 360, DROP_PERIOD = 22;
const STANDARD = '#6fa8dc';
const PINK = '#f28bbd';

export const TitrationSetupDiagram = () => {
	const frame = useCurrentFrame() - START;
	const pulse = idlePulse(frame + START);

	const running = frame >= RUN && frame < ENDPOINT;
	const level = interpolate(frame, [RUN, ENDPOINT], [LEVEL_0, LEVEL_1], clamp);
	const phase = ((frame - RUN) % DROP_PERIOD + DROP_PERIOD) % DROP_PERIOD / DROP_PERIOD;
	const dropY = TIP_Y + phase * (LIQ_Y - TIP_Y - 4);
	// A transient pink flash each time a drop lands close to the endpoint (it swirls away).
	const near = interpolate(frame, [ENDPOINT - 90, ENDPOINT], [0, 1], clamp);
	const flash = running ? near * interpolate(phase, [0.9, 1], [0, 1], clamp) + near * interpolate(phase, [0, 0.5], [1, 0], clamp) * (frame > RUN + DROP_PERIOD ? 1 : 0) : 0;
	const endpoint = fadeAt(frame, ENDPOINT, 20);
	const pinkAlpha = Math.max(flash * 0.5, endpoint * (0.42 + pulse * 0.06));
	const bracket = fadeAt(frame, ENDPOINT + 20, 16);
	const swirl = Math.sin((frame + START) / 11) * 3;
	const tapOpen = running ? 1 : 0;

	const flaskOutline = `M ${BX - F_NECK_HW} ${F_NECK_TOP} L ${BX - F_NECK_HW} ${F_NECK_BOT} L ${BX - F_BASE_HW} ${F_BASE - 14}
		Q ${BX - F_BASE_HW - 2} ${F_BASE} ${BX - F_BASE_HW + 14} ${F_BASE} L ${BX + F_BASE_HW - 14} ${F_BASE}
		Q ${BX + F_BASE_HW + 2} ${F_BASE} ${BX + F_BASE_HW} ${F_BASE - 14} L ${BX + F_NECK_HW} ${F_NECK_BOT} L ${BX + F_NECK_HW} ${F_NECK_TOP}`;
	// liquid: the cone below LIQ_Y, with a swirling surface
	const hwAt = (y: number) => F_NECK_HW + ((y - F_NECK_BOT) / (F_BASE - 14 - F_NECK_BOT)) * (F_BASE_HW - F_NECK_HW);
	const lq = hwAt(LIQ_Y) - 3;
	const liquid = `M ${BX - lq} ${LIQ_Y + swirl * 0.4} Q ${BX} ${LIQ_Y - swirl} ${BX + lq} ${LIQ_Y - swirl * 0.4} L ${BX + F_BASE_HW - 4} ${F_BASE - 14}
		Q ${BX + F_BASE_HW - 4} ${F_BASE - 4} ${BX + F_BASE_HW - 16} ${F_BASE - 4} L ${BX - F_BASE_HW + 16} ${F_BASE - 4} Q ${BX - F_BASE_HW + 4} ${F_BASE - 4} ${BX - F_BASE_HW + 4} ${F_BASE - 14} Z`;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Titration: standard solution runs from a burette into the unknown in a conical flask until the indicator changes colour" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlassDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-steel`} x1="0" x2="1">
					<stop offset="0%" stopColor="#8d949a" />
					<stop offset="40%" stopColor="#d5dade" />
					<stop offset="100%" stopColor="#6c7378" />
				</linearGradient>
			</defs>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={BX - 66} cy={PLINTH_Y} rx={180}>
					{/* retort stand: foot, rod, boss and clamp arm */}
					<ellipse cx={ROD_X + 6} cy={PLINTH_Y + 4} rx={30} ry={9} fill="#5e656a" />
					<rect x={ROD_X} y={30} width={11} height={PLINTH_Y - 24} rx={5} fill={`url(#${ID}-steel)`} />
					<rect x={ROD_X - 6} y={CLAMP_Y - 6} width={23} height={20} rx={4} fill="#5e656a" />
					<rect x={ROD_X + 16} y={CLAMP_Y} width={BX - ROD_X - 30} height={9} rx={4} fill={`url(#${ID}-steel)`} />
					<rect x={BX - 22} y={CLAMP_Y - 8} width={12} height={26} rx={3} fill="#5e656a" />

					{/* flask liquid (the unknown + indicator), then the glass over it */}
					<path d={liquid} fill="#e7f1ee" />
					<path d={liquid} fill={PINK} fillOpacity={pinkAlpha} />
					<path d={flaskOutline} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3.5} strokeLinejoin="round" />
					<rect x={BX - F_NECK_HW - 5} y={F_NECK_TOP - 7} width={F_NECK_HW * 2 + 10} height={9} rx={4} fill="#ffffff" stroke={GLASS_EDGE} strokeWidth={2.5} />
					<path d={`M ${BX - F_NECK_HW - 10} ${F_NECK_BOT + 20} L ${BX - F_BASE_HW + 18} ${F_BASE - 22}`} stroke="#ffffff" strokeOpacity={0.85} strokeWidth={5} strokeLinecap="round" />
				</DioramaPlinth>

				{/* burette: standard solution, graduations, tap, tip */}
				<rect x={BX - B_HW + 3} y={level} width={B_HW * 2 - 6} height={B_BOT - level} fill={STANDARD} fillOpacity={0.55} />
				<ellipse cx={BX} cy={level} rx={B_HW - 3} ry={3} fill={STANDARD} fillOpacity={0.8} />
				<rect x={BX - B_HW} y={B_TOP} width={B_HW * 2} height={B_BOT - B_TOP} rx={6} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3} />
				{Array.from({length: 23}, (_, i) => B_TOP + 18 + i * 10).map((y, i) => (
					<line key={i} x1={BX + B_HW - (i % 5 === 0 ? 14 : 8)} y1={y} x2={BX + B_HW - 2} y2={y} stroke={GLASS_EDGE} strokeWidth={i % 5 === 0 ? 2 : 1.2} />
				))}
				<path d={`M ${BX - 5} ${B_BOT} L ${BX - 5} ${B_BOT + 12} L ${BX + 5} ${B_BOT + 12} L ${BX + 5} ${B_BOT} Z`} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={2} />
				<g transform={`rotate(${tapOpen ? 0 : 90} ${BX} ${B_BOT + 20})`}>
					<rect x={BX - 16} y={B_BOT + 16} width={32} height={8} rx={4} fill="#3b4246" />
				</g>
				<circle cx={BX} cy={B_BOT + 20} r={6} fill="#5e656a" />
				<path d={`M ${BX - 4} ${B_BOT + 26} L ${BX + 4} ${B_BOT + 26} L ${BX + 1.5} ${TIP_Y} L ${BX - 1.5} ${TIP_Y} Z`} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={1.8} />
			</g>

			{/* falling drop */}
			{running && frame > RUN ? (
				<path d={`M ${BX} ${dropY - 7} Q ${BX + 5} ${dropY} ${BX} ${dropY + 5} Q ${BX - 5} ${dropY} ${BX} ${dropY - 7} Z`} fill={STANDARD} opacity={interpolate(phase, [0, 0.08, 0.92, 1], [0, 1, 1, 0])} />
			) : null}

			{/* titre bracket on the burette: the volume delivered */}
			<g opacity={bracket}>
				<path d={`M ${BX - B_HW - 8} ${LEVEL_0} l -12 0 L ${BX - B_HW - 20} ${LEVEL_1} l 12 0`} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} strokeLinejoin="round" />
				<text x={BX - B_HW - 30} y={(LEVEL_0 + LEVEL_1) / 2 - 4} textAnchor="end" fill={TOK.amberInk} fontSize={24} fontWeight={800}>titre</text>
				<text x={BX - B_HW - 30} y={(LEVEL_0 + LEVEL_1) / 2 + 20} textAnchor="end" fill={TOK.amberInk} fontSize={16} fontWeight={700}>volume delivered</text>
			</g>

			{/* labels */}
			<g opacity={fadeAt(frame, 10)}>
				<line x1={BX + B_HW + 8} y1={120} x2={BX + 110} y2={120} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={BX + 118} y={116} fill={TOK.ink} fontSize={24} fontWeight={800}>burette</text>
				<text x={BX + 118} y={140} fill={TOK.inkDim} fontSize={18} fontWeight={600}>standard solution</text>
				<text x={BX + 118} y={161} fill={TOK.inkDim} fontSize={18} fontWeight={600}>(known concentration)</text>
			</g>
			<g opacity={fadeAt(frame, 18)}>
				<line x1={BX + F_BASE_HW - 10} y1={372} x2={BX + 204} y2={372} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={BX + 212} y={368} fill={TOK.ink} fontSize={24} fontWeight={800}>conical flask</text>
				<text x={BX + 212} y={392} fill={TOK.inkDim} fontSize={18} fontWeight={600}>unknown (aliquot)</text>
				<text x={BX + 212} y={413} fill={TOK.inkDim} fontSize={18} fontWeight={600}>+ indicator</text>
			</g>

			<g opacity={fadeAt(frame, 24)}>
				<text x={BX + 212} y={462} fill={frame >= ENDPOINT ? TOK.ink : TOK.inkDim} fontSize={19} fontWeight={700}>
					{frame < ENDPOINT ? 'add standard drop by drop…' : 'endpoint: the colour stays'}
				</text>
				<text x={BX + 212} y={486} fill={TOK.inkDim} fontSize={19} fontWeight={600} opacity={fadeAt(frame, ENDPOINT, 14)}>
					stop, read the titre
				</text>
			</g>
		</svg>
	);
};
