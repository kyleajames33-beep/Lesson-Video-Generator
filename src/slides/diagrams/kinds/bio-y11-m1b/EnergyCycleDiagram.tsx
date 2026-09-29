// EnergyCycleDiagram (bio11m1bCycle) — photosynthesis and respiration as one
// loop: each process's products are the other's reactants.
//
// A chloroplast (left plinth) and a mitochondrion (right plinth). The upper
// arc carries glucose + O₂ from photosynthesis to respiration; the lower arc
// carries CO₂ + H₂O back. Light energy enters at the chloroplast; energy leaves
// the mitochondrion as ATP (with some heat). Underneath, the two summary
// equations are stacked so the reversal is visible term by term. Molecule
// tokens keep travelling round the loop in the hold (the cycle, not new
// information).
//
// Props: `at` (frames after `delay`): photo / resp / forward / back / light /
// atp / equations / footer / rule; `footer` text; `rule` text.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, ease, lerp, CORAL, LEAF, AtomDefs, OrganelleDefs, SmallMolecule, Glucose, AtpToken, Mitochondrion, Chloroplast, Sun} from './shared';

export type EnergyCycleProps = {
	at?: {photo?: number; resp?: number; forward?: number; back?: number; light?: number; atp?: number; equations?: number; footer?: number; rule?: number};
	footer?: string;
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bCyc';
const W = 760, H = 530;
const PX = 180, MX = 580, OY = 170;

/** Point on a quadratic arc from (x0,y) to (x1,y) bulging by `bulge` (negative = up). */
const arcPt = (x0: number, x1: number, y: number, bulge: number, t: number) => {
	const cx = (x0 + x1) / 2, cy = y + bulge * 2;
	const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
	const yy = (1 - t) * (1 - t) * y + 2 * (1 - t) * t * cy + t * t * y;
	return {x, y: yy};
};

export const EnergyCycleDiagram = ({at = {}, footer, rule, delay = 62}: EnergyCycleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const tP = at.photo ?? 10, tR = at.resp ?? 60, tF = at.forward ?? 120, tB = at.back ?? 200, tL = at.light ?? 280, tA = at.atp ?? 340;
	const tEq = at.equations ?? 420, tFoot = at.footer ?? 520, tRule = at.rule ?? 600;
	const pulse = idlePulse(frame, 50);

	const fwd = ease(frame, tF, tF + 40);
	const back = ease(frame, tB, tB + 40);
	const TOPY = OY - 50, BOTY = OY + 80;
	const X0 = PX + 70, X1 = MX - 70;
	const arcPath = (x0: number, x1: number, y: number, bulge: number) => `M ${x0} ${y} Q ${(x0 + x1) / 2} ${y + bulge * 2} ${x1} ${y}`;
	const looping = frame > tB + 50;
	const loopT = (k: number) => ((frame + k * 45) % 90) / 90;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Photosynthesis makes glucose and oxygen, which respiration uses, returning carbon dioxide and water" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<AtomDefs id={ID} />
			<OrganelleDefs id={ID} />

			{/* Chloroplast */}
			<g opacity={fadeAt(frame, tP, 14)}>
				<DioramaPlinth id={`${ID}p`} cx={PX} cy={OY + 44} rx={100} />
				<Chloroplast id={ID} x={PX} y={OY + idleBob(frame, 1, 1)} rx={86} ry={44} />
				<text x={PX} y={OY + 122} textAnchor="middle" fill={LEAF} fontSize={18} fontWeight={800}>photosynthesis</text>
				<text x={PX} y={OY + 142} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>stores energy</text>
			</g>
			{/* Mitochondrion */}
			<g opacity={fadeAt(frame, tR, 14)}>
				<DioramaPlinth id={`${ID}m`} cx={MX} cy={OY + 44} rx={100} />
				<Mitochondrion id={ID} x={MX} y={OY + idleBob(frame, 2, 1)} rx={86} ry={44} />
				<text x={MX} y={OY + 122} textAnchor="middle" fill={CORAL} fontSize={18} fontWeight={800}>respiration</text>
				<text x={MX} y={OY + 142} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>releases energy</text>
			</g>

			{/* Forward arc: glucose + O₂ */}
			<g opacity={fwd > 0 ? 1 : 0}>
				<path d={arcPath(X0, X1, TOPY, -34)} fill="none" stroke={LEAF} strokeWidth={5} strokeLinecap="round" strokeDasharray="520" strokeDashoffset={520 * (1 - fwd)} />
				<path d={`M ${X1 - 14} ${TOPY - 10} L ${X1 + 2} ${TOPY} L ${X1 - 14} ${TOPY + 8} Z`} fill={LEAF} opacity={fwd} />
				<g opacity={fadeAt(frame, tF + 20)}>
					<Glucose x={(X0 + X1) / 2 - 34} y={TOPY - 84} s={0.75} label={false} />
					<SmallMolecule id={ID} kind="O2" x={(X0 + X1) / 2 + 30} y={TOPY - 84} r={10} />
					<text x={(X0 + X1) / 2} y={TOPY - 50} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>glucose + oxygen</text>
				</g>
				{looping && [0, 1].map((k) => {
					const p = arcPt(X0, X1, TOPY, -34, loopT(k));
					return <circle key={k} cx={p.x} cy={p.y} r={6} fill={LEAF} opacity={0.9 - 0.5 * loopT(k)} />;
				})}
			</g>
			{/* Back arc: CO₂ + H₂O */}
			<g opacity={back > 0 ? 1 : 0}>
				<path d={arcPath(X1, X0, BOTY, 20)} fill="none" stroke={CORAL} strokeWidth={5} strokeLinecap="round" strokeDasharray="520" strokeDashoffset={520 * (1 - back)} />
				<path d={`M ${X0 + 14} ${BOTY - 8} L ${X0 - 2} ${BOTY} L ${X0 + 14} ${BOTY + 10} Z`} fill={CORAL} opacity={back} />
				<g opacity={fadeAt(frame, tB + 20)}>
					<SmallMolecule id={ID} kind="CO2" x={(X0 + X1) / 2 - 34} y={BOTY + 64} r={9} />
					<SmallMolecule id={ID} kind="H2O" x={(X0 + X1) / 2 + 38} y={BOTY + 62} r={10} />
					<text x={(X0 + X1) / 2} y={BOTY + 100} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>carbon dioxide + water</text>
				</g>
				{looping && [0, 1].map((k) => {
					const p = arcPt(X1, X0, BOTY, 20, loopT(k));
					return <circle key={k} cx={p.x} cy={p.y} r={6} fill={CORAL} opacity={0.9 - 0.5 * loopT(k)} />;
				})}
			</g>

			{/* Light in, ATP out */}
			<g opacity={fadeAt(frame, tL, 14)}>
				<Sun x={PX - 112} y={OY - 108} r={20} t={ease(frame, tL, tL + 30)} frame={frame} />
				<line x1={PX - 90} y1={OY - 86} x2={lerp(PX - 90, PX - 40, ease(frame, tL + 10, tL + 40))} y2={lerp(OY - 86, OY - 40, ease(frame, tL + 10, tL + 40))} stroke="#e0b52a" strokeWidth={4} strokeDasharray="9 7" strokeDashoffset={-frame * 0.8} strokeLinecap="round" />
				<text x={PX - 112} y={OY - 140} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>light energy in</text>
			</g>
			<g opacity={fadeAt(frame, tA, 14)}>
				{[0, 1].map((k) => {
					const p = popAt(frame, fps, tA + k * 8);
					return <AtpToken key={k} x={MX + 70 + k * 44} y={OY - 104 + idleBob(frame, 5 + k, 1.4)} s={0.75 * Math.min(1, p)} />;
				})}
				<text x={MX + 92} y={OY - 136} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>energy out as ATP</text>
			</g>

			{/* The two equations, stacked */}
			<g opacity={fadeAt(frame, tEq)}>
				<text x={36} y={H - 126} fill={LEAF} fontSize={17} fontWeight={800}>photosynthesis</text>
				<text x={W - 20} y={H - 126} textAnchor="end" fill={TOK.ink} fontSize={20} fontWeight={800}>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</text>
			</g>
			<g opacity={fadeAt(frame, tEq + 30)}>
				<text x={36} y={H - 94} fill={CORAL} fontSize={17} fontWeight={800}>respiration</text>
				<text x={W - 20} y={H - 94} textAnchor="end" fill={TOK.ink} fontSize={20} fontWeight={800}>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</text>
			</g>
			{footer && (
				<text x={W / 2} y={H - 56} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tFoot)}>{footer}</text>
			)}
			{rule && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tRule) * (0.82 + 0.18 * pulse)}>{rule}</text>
			)}
		</svg>
	);
};
