// EsterLeversDiagram — Le Chatelier's three levers on esterification.
//
// Top: the equilibrium as ball-and-stick molecules,
//   ethanoic acid + ethanol ⇌ ethyl ethanoate + water,
// with a two-way arrow. Below, three stone plinths are the levers, each
// firing on its beat:
//   1. excess alcohol: extra ethanol molecules pile onto plinth 1;
//   2. remove water: the water molecule drops from the equation onto the
//      conc. H₂SO₄ plinth (dehydrating agent) and is soaked up;
//   3. distil the ester: the ester floats up and away as vapour.
// Each lever thickens the forward half-arrow (the equilibrium is pushed right).
// A final line covers reflux (keeps the volatile reactants in the flask).

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {ELEMENTS, Mol, Title, clamp, fadeAt, popAt} from './shared';

export type EsterLeversProps = {
	title?: string;
	beats?: {equation?: number; excess?: number; water?: number; distil?: number; reflux?: number};
	delay?: number;
};

const ID = 'c12m7lev';
const W = 760;
const H = 530;
const EQ_Y = 130;
const LEVER_Y = 380;
const ease = Easing.inOut(Easing.cubic);

export const EsterLeversDiagram = ({title = 'Three levers push the equilibrium right', beats = {}, delay = 62}: EsterLeversProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {equation: 10, excess: 322, water: 514, distil: 862, reflux: 1102, ...beats};
	const pulse = idlePulse(frame);

	const slots = {acid: 88, alc: 248, eq: 356, ester: 488, water: 676};
	const bond = 32;
	const levers = [
		{x: 130, label: 'excess alcohol', at: b.excess},
		{x: 380, label: 'remove water', sub: 'conc. H₂SO₄ soaks it up', at: b.water},
		{x: 630, label: 'distil the ester off', at: b.distil},
	];
	const push = [b.excess, b.water, b.distil].filter((t) => frame >= t + 20).length;
	const pushW = 4 + push * 2 + (push ? pulse * 1.5 : 0);

	// Water leaves the equation for the H₂SO₄ plinth; a faint new one forms again (the system replaces it).
	const wFly = interpolate(frame, [b.water + 20, b.water + 70], [0, 1], {...clamp, easing: ease});
	const wx = slots.water + (levers[1].x - slots.water) * wFly;
	const wy = EQ_Y + 6 + (LEVER_Y - 50 - EQ_Y) * wFly;
	const soak = fadeAt(frame, b.water + 70, 30);
	// Ester rises out as vapour.
	const eRise = interpolate(frame, [b.distil + 20, b.distil + 90], [0, 1], {...clamp, easing: ease});
	const exX = slots.ester + (levers[2].x - slots.ester) * eRise;
	const exY = EQ_Y + (LEVER_Y - 70 - EQ_Y) * Math.min(1, eRise * 1.4) - Math.max(0, eRise - 0.7) * 0;
	const refill = fadeAt(frame, b.distil + 110, 40) * 0.35;

	const molIn = (d: number) => Math.min(1, popAt(frame, fps, d) * 1.2);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Excess alcohol, removing water and distilling the ester all push esterification to the right" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<Title text={title} opacity={fadeAt(frame, 0)} />

			{/* the equation */}
			<g opacity={molIn(b.equation)}>
				<Mol id={ID} mol="ethanoicAcid" x={slots.acid} y={EQ_Y + idleBob(frame, 1, 1.2)} bond={bond} ballScale={0.78} frame={frame} />
				<text x={(slots.acid + slots.alc) / 2 + 8} y={EQ_Y + 8} textAnchor="middle" fill={TOK.inkDim} fontSize={28} fontWeight={800}>+</text>
				<Mol id={ID} mol="ethanol" x={slots.alc} y={EQ_Y + idleBob(frame, 2, 1.2)} bond={bond} ballScale={0.78} frame={frame} />
				{/* ⇌ */}
				<g>
					<line x1={slots.eq - 34} y1={EQ_Y - 5} x2={slots.eq + 30} y2={EQ_Y - 5} stroke={push ? TOK.amber : TOK.inkDim} strokeWidth={pushW} strokeLinecap="round" />
					<path d={`M ${slots.eq + 30} ${EQ_Y - 5} l -12 -9`} stroke={push ? TOK.amber : TOK.inkDim} strokeWidth={pushW} strokeLinecap="round" />
					<line x1={slots.eq - 30} y1={EQ_Y + 7} x2={slots.eq + 34} y2={EQ_Y + 7} stroke={TOK.inkDim} strokeWidth={4} strokeLinecap="round" />
					<path d={`M ${slots.eq - 30} ${EQ_Y + 7} l 12 9`} stroke={TOK.inkDim} strokeWidth={4} strokeLinecap="round" />
				</g>
				<g opacity={1 - (eRise > 0 ? 1 : 0) + refill}>
					<Mol id={ID} mol="ethylEthanoate" x={slots.ester} y={EQ_Y + idleBob(frame, 3, 1.2)} bond={bond} ballScale={0.78} frame={frame} />
				</g>
				<text x={(slots.ester + slots.water) / 2 + 14} y={EQ_Y + 8} textAnchor="middle" fill={TOK.inkDim} fontSize={28} fontWeight={800}>+</text>
				<g opacity={wFly > 0 ? fadeAt(frame, b.water + 110, 40) * 0.35 : 1}>
					<Mol id={ID} mol="water" x={slots.water} y={EQ_Y + 6 + idleBob(frame, 4, 1.2)} bond={bond} ballScale={0.85} frame={frame} />
				</g>
			</g>
			<g opacity={fadeAt(frame, b.equation + 20, 12)} fill={TOK.inkDim} fontSize={16} fontWeight={700} textAnchor="middle">
				<text x={slots.acid} y={EQ_Y + 58}>ethanoic acid</text>
				<text x={slots.alc} y={EQ_Y + 58}>ethanol</text>
				<text x={slots.ester} y={EQ_Y + 58}>ethyl ethanoate</text>
				<text x={slots.water} y={EQ_Y + 58}>water</text>
			</g>
			<text x={slots.eq} y={EQ_Y + 88} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={push ? 1 : 0}>
				pushed right →
			</text>

			{/* the levers */}
			{levers.map((lv, i) => {
				const on = fadeAt(frame, lv.at, 12);
				return (
					<g key={i}>
						<g opacity={0.45 + 0.55 * on}>
							<DioramaPlinth id={ID} cx={lv.x} cy={LEVER_Y} rx={104} />
						</g>
						<text x={lv.x} y={LEVER_Y + 76} textAnchor="middle" fill={on > 0.5 ? TOK.ink : TOK.inkMute} fontSize={20} fontWeight={800}>
							{i + 1}. {lv.label}
						</text>
						{lv.sub && (
							<text x={lv.x} y={LEVER_Y + 100} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, lv.at + 40, 12)}>
								{lv.sub}
							</text>
						)}
					</g>
				);
			})}
			{/* lever 1: extra ethanol molecules */}
			{[-58, 0, 58].map((dx, k) => (
				<g key={k} opacity={molIn(b.excess + k * 8)}>
					<Mol id={ID} mol="ethanol" x={levers[0].x + dx} y={LEVER_Y - 22 - (k === 1 ? 26 : 0) + idleBob(frame, 10 + k, 1.2)} bond={22} ballScale={0.6} frame={frame} />
				</g>
			))}
			{/* lever 2: the H₂SO₄ puddle soaking up water */}
			<ellipse cx={levers[1].x} cy={LEVER_Y - 2} rx={62} ry={16} fill="#2e2a33" opacity={0.28 * fadeAt(frame, b.water, 12)} />
			{wFly > 0 && (
				<g opacity={1 - soak}>
					<Mol id={ID} mol="water" x={wx} y={wy} bond={bond} ballScale={0.85} frame={frame} />
				</g>
			)}
			{/* lever 3: ester vapour rising off */}
			{eRise > 0 && (
				<g>
					<Mol id={ID} mol="ethylEthanoate" x={exX} y={exY + idleBob(frame, 20, 2)} bond={26} ballScale={0.66} frame={frame} />
					{[-30, 0, 30].map((dx, k) => {
						const y0 = LEVER_Y - 30 - ((frame * 0.7 + k * 9) % 24);
						return <path key={k} d={`M ${levers[2].x + dx} ${y0} q 7 -7 0 -14 q -7 -7 0 -14`} fill="none" stroke={theme.accent} strokeWidth={2.5} strokeLinecap="round" opacity={0.6 * fadeAt(frame, b.distil + 60, 12)} />;
					})}
				</g>
			)}

			<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.reflux, 14)}>
				Reflux: the condenser returns volatile vapours to the flask
			</text>
		</svg>
	);
};
