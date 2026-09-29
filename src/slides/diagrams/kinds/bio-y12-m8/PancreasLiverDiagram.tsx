// PancreasLiverDiagram — sensing versus acting in glucose control, on two
// stone plinths joined by a blood vessel. The pancreatic islet holds beta
// cells (detect high glucose, release insulin) and alpha cells (detect low
// glucose, release glucagon); the liver is the effector that stores glucose as
// glycogen or releases it. The blood-glucose gauge only moves once the
// hormone has reached the liver and the liver has acted, so the picture
// itself says the pancreas signals and the liver does the work.
//
// Beats are frames after `delay`. Hold: insulin keeps trickling along the
// vessel, glycogen granules jostle, the gauge settles near the set point.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, alongPoly, ease, fadeAt, hash01, mix} from './shared';

export type PancreasLiverProps = {
	isletAt: number;
	betaAt: number;
	alphaAt: number;
	rolesAt: number;
	notLiverAt: number;
	travelAt: number;
	storeAt: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8pl';
const W = 760;
const H = 530;
const P = {x: 170, y: 250};
const L = {x: 590, y: 250};
const VESSEL = [{x: 252, y: 250}, {x: 330, y: 214}, {x: 430, y: 214}, {x: 504, y: 250}];

export const PancreasLiverDiagram = ({isletAt, betaAt, alphaAt, rolesAt, notLiverAt, travelAt, storeAt, notes = [], delay = 62}: PancreasLiverProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const base = fadeAt(frame, 0, 16);
	const islet = fadeAt(frame, isletAt, 14);
	const beta = fadeAt(frame, betaAt, 12);
	const alpha = fadeAt(frame, alphaAt, 12);

	// glucose: pushed high at betaAt, falls once the liver stores (storeAt)
	const high = ease(frame, betaAt, betaAt + 40);
	const fall = ease(frame, storeAt, storeAt + 90);
	const g = high * (1 - fall) + fall * 0.08 * Math.sin((frame - storeAt) / 25);
	const GX0 = 120, GX1 = 640, GY = 70;
	const mid = (GX0 + GX1) / 2;
	const bx = mid + g * (GX1 - GX0) * 0.38;

	const cells = Array.from({length: 12}, (_, k) => {
		const a = (k / 12) * Math.PI * 2 + 0.3;
		const r = 26 + (k % 2) * 16;
		return {x: P.x + Math.cos(a) * r, y: P.y - 10 + Math.sin(a) * r * 0.8, beta: k % 3 !== 0};
	});

	const travelling = frame >= travelAt;
	const granules = Math.round(10 * ease(frame, storeAt, storeAt + 80));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The pancreas senses and signals; the liver changes blood glucose" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{beta: COL.blue, alpha: COL.green, liver: '#a0523d', ins: theme.accent, gly: '#f2d98a'}} />

			{/* gauge */}
			<g opacity={base}>
				<text x={GX0} y={GY - 22} fill={TOK.ink} fontSize={18} fontWeight={800}>blood glucose</text>
				<rect x={GX0} y={GY - 9} width={GX1 - GX0} height={18} rx={9} fill="#e6e3dd" stroke="#cfcac1" />
				<rect x={mid - 70} y={GY - 9} width={140} height={18} rx={9} fill={mix('#ffffff', theme.accent, 0.3)} />
				<line x1={mid} y1={GY - 16} x2={mid} y2={GY + 16} stroke={theme.accent} strokeWidth={3} />
				<text x={mid} y={GY + 34} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>set point</text>
				<text x={GX1} y={GY + 34} textAnchor="end" fill={COL.red} fontSize={15} fontWeight={800} opacity={high * (1 - fall)}>too high</text>
				<circle cx={bx} cy={GY} r={14} fill={g > 0.4 ? COL.red : '#ffffff'} stroke="#9aa0a6" strokeWidth={1.5} />
			</g>

			{/* vessel */}
			<g opacity={base}>
				<path d={`M ${VESSEL[0].x} ${VESSEL[0].y} C ${VESSEL[1].x} ${VESSEL[1].y}, ${VESSEL[2].x} ${VESSEL[2].y}, ${VESSEL[3].x} ${VESSEL[3].y}`} stroke="#e4a3a3" strokeWidth={22} fill="none" strokeLinecap="round" />
				<text x={380} y={192} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>hormones travel in the blood</text>
				{travelling && Array.from({length: 5}, (_, k) => {
					const u = (((frame - travelAt + k * 22) % 110) + 110) % 110 / 110;
					const p = alongPoly(VESSEL, u);
					return <circle key={k} cx={p.x} cy={p.y} r={7} fill={`url(#${ID}-g-ins)`} stroke="#fff" strokeWidth={1.2} />;
				})}
			</g>

			{/* pancreas islet */}
			<g opacity={base}>
				<DioramaPlinth id={`${ID}p`} cx={P.x} cy={P.y + 44} rx={118} />
				<ellipse cx={P.x} cy={P.y - 10} rx={78} ry={62} fill="#f6dccf" stroke="#d9ab98" strokeWidth={2} />
				{cells.map((c, k) => {
					const o = c.beta ? beta : alpha;
					const lit = c.beta ? high * (1 - fall) : 0;
					return (
						<g key={k} opacity={0.25 + 0.75 * Math.max(islet * 0.3, o)}>
							{lit > 0.3 && <circle cx={c.x} cy={c.y} r={16 + idlePulse(frame, 40) * 3} fill={COL.blue} opacity={0.18} />}
							<circle cx={c.x} cy={c.y + idleBob(frame, k, 1)} r={11} fill={`url(#${ID}-g-${c.beta ? 'beta' : 'alpha'})`} stroke="rgba(0,0,0,0.25)" />
						</g>
					);
				})}
				<text x={P.x} y={P.y - 96} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={islet}>pancreas: islet</text>
				<text x={P.x - 100} y={P.y + 112} textAnchor="start" fill={COL.blue} fontSize={15} fontWeight={800} opacity={beta}>● beta: high glucose → insulin</text>
				<text x={P.x - 100} y={P.y + 132} textAnchor="start" fill={COL.green} fontSize={15} fontWeight={800} opacity={alpha}>● alpha: low glucose → glucagon</text>
				<g opacity={fadeAt(frame, rolesAt, 12)}>
					<Pill x={P.x} y={P.y + 170} text="receptor + control centre" color={theme.accent} size={15} />
				</g>
			</g>

			{/* liver */}
			<g opacity={base}>
				<DioramaPlinth id={`${ID}l`} cx={L.x} cy={L.y + 44} rx={118} />
				<path d={`M ${L.x - 90} ${L.y - 10} C ${L.x - 80} ${L.y - 70}, ${L.x + 60} ${L.y - 80}, ${L.x + 90} ${L.y - 30} C ${L.x + 96} ${L.y + 10}, ${L.x + 20} ${L.y + 30}, ${L.x - 30} ${L.y + 28} C ${L.x - 70} ${L.y + 26}, ${L.x - 94} ${L.y + 12}, ${L.x - 90} ${L.y - 10} Z`} fill={`url(#${ID}-g-liver)`} stroke="#6f3526" strokeWidth={2} />
				{Array.from({length: granules}, (_, k) => (
					<circle key={k} cx={L.x - 50 + hash01(k * 3.1) * 110} cy={L.y - 36 + hash01(k * 7.3) * 50 + idleBob(frame, k + 20, 1)} r={6} fill={`url(#${ID}-g-gly)`} stroke="rgba(0,0,0,0.2)" />
				))}
				<text x={L.x} y={L.y - 96} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>liver</text>
				<text x={L.x} y={L.y + 112} textAnchor="middle" fill="#9a7414" fontSize={15} fontWeight={800} opacity={fadeAt(frame, storeAt, 12)}>stores glucose as glycogen</text>
				<g opacity={fadeAt(frame, notLiverAt, 12)}>
					<Pill x={L.x} y={L.y + 170} text="effector: changes the level" color={TOK.amberInk} fill="#fff7e8" size={15} />
				</g>
			</g>

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
