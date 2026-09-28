// HotColdPacksDiagram (kind: chem12m5HotCold) — real salts in two camps, and
// why the cold ones still dissolve.
//
// Left: a diverging bar chart of ΔH of dissolution (kJ mol⁻¹) growing from a
// zero line as each salt is named. Exothermic salts (warm colour) grow down
// (ΔH < 0, hot packs); endothermic salts (cool colour) grow up (ΔH > 0, cold
// packs). Each has a little beaker with a thermometer that reads hot or cold.
//
// Right (the entropy beat): a beaker of the cold-pack salt whose lattice breaks
// and the ions scatter; then ΔH (small, +) against TΔS (large, +) and
// ΔG = ΔH − TΔS < 0. The take-home pill is amber: entropy pays the enthalpy bill.
// Only the values in `salts` are drawn; bar lengths are to scale.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Card, Pill, bounce, eramp, hash01, ramp, fmt} from './shared';

type Salt = {formula: string; dH: number; at: number; dp?: number};
export type HotColdProps = {
	delay?: number;
	salts?: Salt[];
	/** The endothermic salt used for the entropy beat. */
	entropySalt?: string;
	ions?: [string, string];
	beats?: {exo?: number; endo?: number; puzzle?: number; entropy?: number; scatter?: number; tds?: number; dg?: number; pays?: number};
};

const ID = 'c12m5hc';
const W = 760;
const H = 530;
const WARM = '#d9542f';
const COOL = '#2f7fc9';
const ZY = 222;
const SCALE = 2.3; // px per kJ mol⁻¹

export const HotColdPacksDiagram = ({
	delay = 62,
	salts = [
		{formula: 'NaOH', dH: -44, at: 65},
		{formula: 'CaCl₂', dH: -81, at: 150},
		{formula: 'NH₄NO₃', dH: 25.7, at: 332, dp: 1},
		{formula: 'KNO₃', dH: 35, at: 396},
	],
	entropySalt = 'NH₄NO₃',
	ions = ['NH₄⁺', 'NO₃⁻'],
	beats = {},
}: HotColdProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {exo: 9, endo: 269, puzzle: 522, entropy: 634, scatter: 740, tds: 810, dg: 880, pays: 1028, ...beats};

	const XS = [86, 186, 300, 400];
	const BWd = 58;

	// ── Entropy beaker ──
	const EB = {x: 630, base: 300, w: 170, h: 130};
	const scatter = eramp(frame, b.scatter, 60);
	const latt = Array.from({length: 12}, (_, k) => {
		const c = k % 4, r = Math.floor(k / 4);
		const lx = EB.x - 36 + c * 24 + r * 4;
		const ly = EB.base - 22 - r * 20;
		const s = k * 19 + 5;
		const fx = bounce(EB.x - EB.w / 2 + 18 + hash01(s) * (EB.w - 36), (0.4 + hash01(s + 1) * 0.4) * (hash01(s + 2) > 0.5 ? 1 : -1), frame, EB.x - EB.w / 2 + 16, EB.x + EB.w / 2 - 16);
		const fy = bounce(EB.base - EB.h * 0.78 + 14 + hash01(s + 3) * (EB.h * 0.78 - 30), (0.3 + hash01(s + 4) * 0.3) * (hash01(s + 5) > 0.5 ? 1 : -1), frame, EB.base - EB.h * 0.78 + 14, EB.base - 16);
		return {x: lx + (fx - lx) * scatter, y: ly + (fy - ly) * scatter, el: (c + r) % 2 === 0 ? 'A' : 'B', sign: (c + r) % 2 === 0 ? '+' : '−'};
	});
	const panelIn = ramp(frame, b.puzzle, 16);
	const tdsIn = eramp(frame, b.tds, 40);
	const dgIn = ramp(frame, b.dg, 16);
	const endoSalt = salts.find((s) => s.formula === entropySalt);
	const hiIdx = salts.findIndex((s) => s.formula === entropySalt);

	const thermo = (x: number, top: number, hot: boolean, op: number) => {
		const lvl = hot ? 0.85 : 0.22;
		const pulse = 1 + 0.04 * Math.sin(frame / 20);
		const len = 70;
		return (
			<g opacity={op}>
				<rect x={x - 4} y={top} width={8} height={len} rx={4} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={1.5} />
				<rect x={x - 2} y={top + len * (1 - lvl * pulse)} width={4} height={len * lvl * pulse} rx={2} fill={hot ? WARM : COOL} />
				<circle cx={x} cy={top + len + 5} r={7} fill={hot ? WARM : COOL} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="ΔH of dissolution: NaOH −44 and CaCl₂ −81 kJ/mol are exothermic (hot packs); NH₄NO₃ +25.7 and KNO₃ +35 kJ/mol are endothermic (cold packs). Endothermic salts still dissolve because TΔS is large and positive, so ΔG = ΔH − TΔS is negative" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['A', 'B']} />

			{/* Headers */}
			<g opacity={ramp(frame, b.exo, 14)}>
				<text x={(XS[0] + XS[1]) / 2} y={36} textAnchor="middle" fill={WARM} fontSize={19} fontWeight={800}>exothermic</text>
				<text x={(XS[0] + XS[1]) / 2} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>hot packs</text>
			</g>
			<g opacity={ramp(frame, b.endo, 14)}>
				<text x={(XS[2] + XS[3]) / 2} y={36} textAnchor="middle" fill={COOL} fontSize={19} fontWeight={800}>endothermic</text>
				<text x={(XS[2] + XS[3]) / 2} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>cold packs</text>
			</g>

			{/* Axis */}
			<g opacity={ramp(frame, 0)}>
				<line x1={36} y1={ZY} x2={452} y2={ZY} stroke={TOK.ink} strokeWidth={2.5} />
				<text x={30} y={ZY + 6} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>0</text>
				<text x={16} y={ZY + 100} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} transform={`rotate(-90 16 ${ZY + 100})`}>ΔH (kJ mol⁻¹)</text>
			</g>

			{/* Bars */}
			{salts.map((s, i) => {
				const x = XS[i] ?? 86 + i * 100;
				const g = eramp(frame, s.at, 40);
				const h = Math.abs(s.dH) * SCALE * g;
				const exo = s.dH < 0;
				const col = exo ? WARM : COOL;
				const y0 = exo ? ZY : ZY - h;
				const lab = (s.dH > 0 ? '+' : '') + fmt(s.dH, s.dp ?? 0);
				const labIn = ramp(frame, s.at + 20, 14);
				const bk = exo ? {base: ZY - 34, top: ZY - 34 - 62} : {base: ZY + 118, top: ZY + 118 - 62};
				const hi = i === hiIdx && frame >= b.puzzle ? idlePulse(frame) : 0;
				return (
					<g key={s.formula} opacity={ramp(frame, s.at - 6, 10)}>
						<rect x={x - BWd / 2} y={y0} width={BWd} height={Math.max(0, h)} rx={6} fill={col} opacity={0.85} />
						{hi > 0 && <rect x={x - BWd / 2 - 5} y={y0 - 5} width={BWd + 10} height={h + 10} rx={9} fill="none" stroke={TOK.ink} strokeWidth={1.5 + hi * 1.5} opacity={0.6} />}
						<text x={x} y={exo ? ZY + h + 24 : ZY - h - 10} textAnchor="middle" fill={col} fontSize={20} fontWeight={800} opacity={labIn}>{lab}</text>
						<text x={x} y={exo ? ZY - 12 : ZY + 26} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{s.formula}</text>
						<Beaker cx={x} baseY={bk.base} w={54} h={60} level={0.66} liquid={exo ? 'rgba(217,84,47,0.18)' : 'rgba(47,127,201,0.2)'} />
						{thermo(x + 10, bk.top - 18, exo, labIn)}
					</g>
				);
			})}

			{/* Entropy panel */}
			<Card x={500} y={16} w={W - 506} h={456} opacity={panelIn}>
				<text x={628} y={50} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>Why does {endoSalt?.formula ?? entropySalt}</text>
				<text x={628} y={72} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>dissolve at all?</text>
				<g opacity={ramp(frame, b.entropy - 20, 16)}>
					<DioramaPlinth id={ID} cx={EB.x} cy={EB.base + 4} rx={104}>
						<Beaker cx={EB.x} baseY={EB.base} w={EB.w} h={EB.h} level={0.8} liquid="rgba(47,127,201,0.16)">
							{latt.map((p, k) => (
								<Ball key={k} id={ID} el={p.el} x={p.x + idleBob(frame, k, 0.6) * scatter} y={p.y} r={10} label={p.sign} labelSize={13} />
							))}
						</Beaker>
					</DioramaPlinth>
					<text x={628} y={124} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={1 - ramp(frame, b.scatter, 14)}>ordered lattice</text>
					<text x={628} y={124} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={ramp(frame, b.scatter + 20, 14)}>{ions[0]} and {ions[1]} scatter: ΔS ≫ 0</text>
				</g>
				<g opacity={ramp(frame, b.tds - 10, 14)}>
					<text x={522} y={382} fill={COOL} fontSize={18} fontWeight={800}>ΔH</text>
					<rect x={574} y={368} width={(endoSalt?.dH ?? 25) * 1.4 * tdsIn} height={18} rx={5} fill={COOL} opacity={0.85} />
					<text x={522} y={414} fill={theme.accent} fontSize={18} fontWeight={800}>TΔS</text>
					<rect x={574} y={400} width={150 * tdsIn} height={18} rx={5} fill={theme.accent} opacity={0.85} />
				</g>
				<text x={628} y={454} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={dgIn}>ΔG = ΔH − TΔS {'<'} 0</text>
			</Card>
			<g opacity={ramp(frame, b.pays, 16)}>
				<Pill x={W / 2} y={502} text="Entropy pays the enthalpy bill" color={TOK.amber} ink={TOK.ink} size={19} strokeWidth={2.5 + idlePulse(frame) * 1.2} />
			</g>
		</svg>
	);
};
