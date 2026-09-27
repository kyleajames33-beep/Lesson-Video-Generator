// AcidDimerDiagram — two carboxylic acid molecules lock into a hydrogen-bonded dimer.
//
// Two ethanoic acid molecules stand on one long plinth. The carboxyl group is
// introduced as its two parts (C=O acceptor, O–H donor), then the second
// molecule swings round to face the first and two hydrogen bonds form at once
// (O–H···O=C both ways: the classic eight-membered ring). On the "boil" beat
// both bonds are flagged as having to break together, and the pair lifts off
// the plinth as one unit (≈ double the mass). The last beat rings the single
// O–H on each molecule.
//
// Geometry: in `ethanoicAcidR` the carboxyl points right, so the partner is the
// same molecule turned 180°; H···O gaps are 1.1 bond lengths, drawn along the
// O–H axis.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip, ELEMENTS, HBond, Mol, Title, atomPos, clamp, fadeAt} from './shared';

export type AcidDimerProps = {
	title?: string;
	beats?: {carbonyl?: number; hydroxyl?: number; donor?: number; acceptor?: number; swing?: number; dimer?: number; boil?: number; pairs?: number; oneOH?: number};
	delay?: number;
};

const ID = 'c12m7dim';
const W = 760;
const H = 530;
const BOND = 78;
const MOL = 'ethanoicAcidR';
const ease = Easing.inOut(Easing.cubic);

export const AcidDimerDiagram = ({title = 'Two H-bonds lock a pair together', beats = {}, delay = 62}: AcidDimerProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {carbonyl: 58, hydroxyl: 142, donor: 394, acceptor: 502, swing: 622, dimer: 886, boil: 1066, pairs: 1390, oneOH: 1522, ...beats};

	const swing = interpolate(frame, [b.swing, b.swing + 60], [0, 1], {...clamp, easing: ease});
	const lift = interpolate(frame, [b.pairs, b.pairs + 50], [0, 1], {...clamp, easing: ease});
	// Final (dimer) centres: A at cA, B at cA + 2.6 bonds (see header).
	const span = 2.6 * BOND;
	const baseY = 262 - lift * 70;
	const bob = idleBob(frame, 1, 1.5);
	const cA = {x: W / 2 - span / 2 - (1 - swing) * 60, y: baseY + bob + (1 - swing) * 8};
	const cB = {x: W / 2 + span / 2 + (1 - swing) * 70, y: baseY + bob - (1 - swing) * 4};
	const rotA = -28 * (1 - swing);
	const rotB = 180 + 115 * (1 - swing);

	const pA = (i: number) => atomPos(MOL, i, cA.x, cA.y, BOND, false, rotA);
	const pB = (i: number) => atomPos(MOL, i, cB.x, cB.y, BOND, false, rotB);
	const hb = fadeAt(frame, b.swing + 50, 16);
	const pulse = idlePulse(frame);
	const boilIn = fadeAt(frame, b.boil, 14);
	const ringStyle = (on: number, color: string) => ({fill: 'none', stroke: color, strokeWidth: 3.5, strokeDasharray: '5 4', opacity: on});

	// Part callouts on molecule A before the swing.
	const partsOut = 1 - fadeAt(frame, b.swing - 10, 12);
	const cO = pA(2);
	const cC = pA(1);
	const oh = pA(3);
	const hA = pA(4);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two carboxylic acid molecules form two hydrogen bonds: a dimer" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<Title text={title} opacity={fadeAt(frame, 0)} />
			<g opacity={fadeAt(frame, 2)}>
				<DioramaPlinth id={ID} cx={W / 2} cy={392} rx={318} />
			</g>
			{/* shadow tracks the pair; it shrinks as the pair lifts off */}
			<ellipse cx={W / 2} cy={390} rx={220 * (1 - lift * 0.35)} ry={26 * (1 - lift * 0.35)} fill="rgba(40,36,30,0.16)" />

			<Mol id={ID} mol={MOL} x={cA.x} y={cA.y} bond={BOND} ballScale={1.15} rotate={rotA} frame={frame} opacity={fadeAt(frame, 4, 14)} />
			<Mol id={ID} mol={MOL} x={cB.x} y={cB.y} bond={BOND} ballScale={1.15} rotate={rotB} frame={frame} opacity={fadeAt(frame, 16, 14)} />

			{/* the two H-bonds */}
			<HBond x1={pA(4).x} y1={pA(4).y} x2={pB(2).x} y2={pB(2).y} opacity={hb} width={4 + boilIn * pulse * 2} />
			<HBond x1={pB(4).x} y1={pB(4).y} x2={pA(2).x} y2={pA(2).y} opacity={hb} width={4 + boilIn * pulse * 2} />

			{/* parts of the carboxyl group */}
			<g opacity={partsOut}>
				<g opacity={fadeAt(frame, b.carbonyl, 12)}>
					<ellipse cx={(cO.x + cC.x) / 2} cy={(cO.y + cC.y) / 2} rx={34} ry={62} transform={`rotate(${Math.atan2(cO.y - cC.y, cO.x - cC.x) * 57.3 + 90}, ${(cO.x + cC.x) / 2}, ${(cO.y + cC.y) / 2})`} {...ringStyle(1, theme.accent)} />
					<Chip x={cO.x - 40} y={cO.y - 58} text={frame >= b.acceptor ? 'C=O: H-bond acceptor' : 'carbonyl C=O'} color={theme.accent} size={18} />
				</g>
				<g opacity={fadeAt(frame, b.hydroxyl, 12)}>
					<ellipse cx={(oh.x + hA.x) / 2} cy={(oh.y + hA.y) / 2} rx={52} ry={30} transform={`rotate(${Math.atan2(hA.y - oh.y, hA.x - oh.x) * 57.3}, ${(oh.x + hA.x) / 2}, ${(oh.y + hA.y) / 2})`} {...ringStyle(1, theme.accent)} />
					<Chip x={hA.x + 40} y={hA.y + 58} text={frame >= b.donor ? 'O–H: H-bond donor' : 'hydroxyl O–H'} color={theme.accent} size={18} />
				</g>
			</g>

			{/* dimer label and the boiling point beat */}
			<g opacity={fadeAt(frame, b.dimer, 14) * (1 - fadeAt(frame, b.boil - 8, 10))}>
				<Chip x={W / 2} y={baseY - 118} text="a dimer: two H-bonds at once" color={TOK.amberInk} size={20} />
			</g>
			<g opacity={boilIn * (1 - fadeAt(frame, b.oneOH - 8, 10))}>
				<Chip x={W / 2} y={baseY - 118} text={frame >= b.pairs ? 'leaves as a pair: ≈ double the mass' : 'to boil: break both H-bonds together'} color={TOK.amberInk} size={20} />
			</g>
			{/* heat under the plinth once boiling is discussed */}
			<g opacity={boilIn}>
				{[-120, -40, 40, 120].map((dx, i) => {
					const y0 = 470 - ((frame * 0.8 + i * 13) % 26);
					return (
						<path key={i} d={`M ${W / 2 + dx} ${y0 + 30} q 8 -8 0 -16 q -8 -8 0 -16`} fill="none" stroke={TOK.amber} strokeWidth={3} strokeLinecap="round" opacity={0.7} />
					);
				})}
			</g>

			{/* one O–H per molecule */}
			<g opacity={fadeAt(frame, b.oneOH, 12)}>
				{[pA(4), pB(4)].map((p, i) => (
					<circle key={i} cx={p.x} cy={p.y} r={22 + pulse * 2} fill="none" stroke={theme.accent} strokeWidth={3.5} strokeDasharray="5 4" />
				))}
				<Chip x={W / 2} y={baseY - 118} text="only one O–H per molecule" color={theme.accent} size={20} />
			</g>

			<text x={W / 2} y={H - 18} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={fadeAt(frame, 20, 12)}>
				ethanoic acid, CH₃COOH
			</text>
		</svg>
	);
};
