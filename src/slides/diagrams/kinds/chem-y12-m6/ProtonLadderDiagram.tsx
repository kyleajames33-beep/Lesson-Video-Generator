// ProtonLadderDiagram — a polyprotic chain, one proton per step.
//
// Species stand on a row of stone plinths (H₃PO₄ → H₂PO₄⁻ → HPO₄²⁻ → PO₄³⁻).
// On each step's beat one H⁺ lifts off the species on the left and floats
// away, and the next species (one fewer H, one more negative charge) rises on
// the next plinth, so "one proton at a time" is the only way along the row.
// Optional layers, all from props: role tags (acid only / amphiprotic / base
// only), a Ka tag under each step, brackets marking consecutive conjugate
// pairs, a crossed-out "skip" arc (the H₂SO₄/SO₄²⁻ trap), and a focus beat
// that shows one amphiprotic species stepping both ways.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, BLUE, GlossDefs, PROTON, Pill, Proton, coreColor, ease, fadeAt, hSlots, popAt} from './shared';

export type LadderSpecies = {label: string; core: string; h: number; charge?: string; coreText?: string; role?: string};
export type LadderProps = {
	title?: string;
	species: LadderSpecies[];
	/** Frames after delay: first species in, then each step i → i+1. */
	at?: number;
	stepsAt: number[];
	/** Ka tag under each step (same length as stepsAt), and when they show. */
	ka?: string[];
	kaAt?: number;
	/** A note under the Ka row (e.g. "each step ≈ 10⁵ × weaker"). */
	kaNote?: string;
	kaNoteAt?: number;
	/** When the role tags appear; roles in amber when `amberRole` matches. */
	rolesAt?: number;
	amberRole?: string;
	/** Brackets under consecutive species: conjugate pairs. */
	pairsAt?: number[];
	/** A crossed-out arc between two species that are NOT a pair. */
	trap?: {from: number; to: number; at: number; text: string};
	/** One species shows both moves: gain H⁺ (left) and lose H⁺ (right). */
	focus?: {index: number; at: number; leftAt?: number; leftText?: string; rightText?: string};
	/** Highlight one step's Ka (e.g. Ka₁: "use for pH"). */
	kaHighlight?: {index: number; at: number; text: string};
	delay?: number;
};

const ID = 'c12m6lad';
const W = 760;
const H = 530;

export const ProtonLadderDiagram = ({
	title, species, at = 0, stepsAt, ka, kaAt = 0, kaNote, kaNoteAt, rolesAt, amberRole, pairsAt, trap, focus, kaHighlight, delay = 62,
}: LadderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = species.length;
	const top = title ? 44 : 0;
	const span = n <= 3 ? 520 : 600;
	const xs = species.map((_, i) => W / 2 - span / 2 + (span * i) / (n - 1));
	const rx = n <= 3 ? 108 : 86;
	const plinthY = 296 + top * 0.4;
	const R = n <= 3 ? 46 : 40;
	const rH = n <= 3 ? 17 : 15;
	const coreY = plinthY - R - 8;
	const labelY = plinthY + rx * 0.54 + 34;
	const glossColors: Record<string, string> = {proton: PROTON, H: '#f2f2ef'};
	for (const s of species) glossColors[`c${s.core}`] = coreColor(s.core);
	const appearAt = (i: number) => (i === 0 ? at : stepsAt[i - 1] + 22);
	const roleColor = (role?: string) => (role && role === amberRole ? TOK.amberInk : role?.includes('base') ? BLUE : theme.accent);

	const specie = (s: LadderSpecies, i: number) => {
		const pop = popAt(frame, fps, appearAt(i));
		if (pop <= 0) return null;
		const hs = hSlots(s.h, R, rH);
		const bob = idleBob(frame, i * 3, 1.4);
		const light = ['S', 'H', 'P'].includes(s.core) && s.core !== 'P';
		return (
			<g key={i} transform={`translate(${xs[i]},${coreY + bob}) scale(${pop})`}>
				<ellipse cx={0} cy={R + 6} rx={R * 1.1} ry={R * 0.24} fill="rgba(40,36,30,0.2)" />
				{hs.map((p, j) => (
					<circle key={j} cx={p.dx} cy={p.dy} r={rH} fill={`url(#${ID}-g-H)`} stroke="rgba(0,0,0,0.28)" strokeWidth={1} />
				))}
				<circle r={R} fill={`url(#${ID}-g-c${s.core})`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
				{s.coreText && (
					<text y={R * 0.17} textAnchor="middle" fill={light ? '#4a3b00' : '#ffffff'} fontSize={n <= 3 ? 17 : 15} fontWeight={800}>{s.coreText}</text>
				)}
				{s.charge && (
					<g>
						<circle cx={R * 0.8} cy={R * 0.66} r={13} fill="#ffffff" stroke={TOK.ink} strokeWidth={1.5} />
						<text x={R * 0.8} y={R * 0.66 + 5.5} textAnchor="middle" fill={TOK.ink} fontSize={s.charge.length > 1 ? 13 : 16} fontWeight={800}>{s.charge}</text>
					</g>
				)}
			</g>
		);
	};

	// The proton that leaves on step i floats up and off.
	const flights = stepsAt.map((sa, i) => {
		const t = ease(frame, sa, sa + 30);
		if (t <= 0 || t >= 1) return null;
		const s = species[i];
		const slot = hSlots(s.h, R, rH)[s.h - 1];
		const x0 = xs[i] + slot.dx, y0 = coreY + slot.dy;
		const x = x0 + (xs[i + 1] - xs[i]) * 0.5 * t;
		const y = y0 - 70 * Math.sin(t * Math.PI * 0.5) ;
		return <Proton key={i} id={ID} x={x} y={y} r={rH} opacity={1 - t * t} glow={1 - t} />;
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A polyprotic acid loses one proton per step'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={glossColors} />
			{title && <text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={fadeAt(frame, 0)}>{title}</text>}

			<g opacity={fadeAt(frame, at, 14)}>
				{xs.map((x, i) => <DioramaPlinth key={i} id={ID} cx={x} cy={plinthY} rx={rx} />)}
			</g>

			{/* Step arrows between plinths */}
			{stepsAt.map((sa, i) => {
				const t = ease(frame, sa, sa + 20);
				const x1 = xs[i] + R + 14, x2 = xs[i + 1] - R - 14;
				return (
					<g key={i}>
						<Arrow x1={x1} y1={coreY} x2={x2} y2={coreY} color={TOK.inkMute} width={3} t={t} />
						<text x={(x1 + x2) / 2} y={coreY - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, sa + 10)}>−H⁺</text>
					</g>
				);
			})}

			{species.map(specie)}
			{flights}

			{/* Formula + role under each plinth */}
			{species.map((s, i) => (
				<g key={i} opacity={fadeAt(frame, appearAt(i) + 4)}>
					<text x={xs[i]} y={labelY} textAnchor="middle" fill={TOK.ink} fontSize={n <= 3 ? 28 : 24} fontWeight={800}>{s.label}</text>
					{s.role && rolesAt !== undefined && (
						<Pill
							x={xs[i]} y={labelY + 30} text={s.role} color={roleColor(s.role)} size={15}
							fill={s.role === amberRole ? '#fff6e6' : '#ffffff'}
							strokeWidth={s.role === amberRole ? 2 + idlePulse(frame) * 1.2 : 2}
							opacity={fadeAt(frame, rolesAt + (s.role === amberRole ? 16 : 0))}
						/>
					)}
				</g>
			))}

			{/* Conjugate-pair brackets under consecutive species */}
			{pairsAt?.map((pa, i) => {
				const t = ease(frame, pa, pa + 22);
				if (t <= 0) return null;
				const y = labelY + 18;
				const a = xs[i] - 10, b = xs[i + 1] + 10;
				const c = i % 2 === 0 ? theme.accent : BLUE;
				const yy = y + 14 + i * 0;
				return (
					<g key={i}>
						<path d={`M ${a + 20} ${y} L ${a + 20} ${yy} L ${a + 20 + (b - a - 40) * t} ${yy}${t >= 1 ? ` L ${b - 20} ${y}` : ''}`} fill="none" stroke={c} strokeWidth={3} strokeLinejoin="round" />
						<g opacity={fadeAt(frame, pa + 18)}>
							<rect x={(a + b) / 2 - 36} y={yy - 11} width={72} height={22} rx={11} fill="#ffffff" />
							<text x={(a + b) / 2} y={yy + 5.5} textAnchor="middle" fill={c} fontSize={16} fontWeight={800}>pair {i + 1}</text>
						</g>
					</g>
				);
			})}

			{/* Trap: skipping a step is not a conjugate pair */}
			{trap && (() => {
				const t = ease(frame, trap.at, trap.at + 26);
				if (t <= 0) return null;
				const x0 = xs[trap.from], x1 = xs[trap.to];
				const yTop = coreY - R - 96;
				const d = `M ${x0} ${coreY - R - 22} Q ${(x0 + x1) / 2} ${yTop - 40} ${x1} ${coreY - R - 22}`;
				const mx = (x0 + x1) / 2, my = yTop - 10;
				const pulse = 0.85 + 0.15 * idlePulse(frame);
				return (
					<g>
						<path d={d} fill="none" stroke={TOK.amber} strokeWidth={3} strokeDasharray="7 7" pathLength={1} strokeDashoffset={0} opacity={t} />
						<g opacity={fadeAt(frame, trap.at + 20)} transform={`translate(${mx},${my}) scale(${pulse})`}>
							<circle r={17} fill="#ffffff" stroke={TOK.amber} strokeWidth={3} />
							<path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke={TOK.amberInk} strokeWidth={3.5} strokeLinecap="round" />
						</g>
						<text x={mx} y={my - 28} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, trap.at + 24)}>{trap.text}</text>
					</g>
				);
			})()}

			{/* Focus: one amphiprotic species steps both ways */}
			{focus && (() => {
				const i = focus.index;
				const t = fadeAt(frame, focus.at, 4);
				if (t <= 0) return null;
				const yArc = coreY - R - 70;
				const arc = (to: number, color: string, text: string, start: number, lift: number) => {
					const tt = ease(frame, start, start + 26);
					const x0 = xs[i], x1 = xs[to];
					const d = `M ${x0 + (x1 - x0) * 0.12} ${coreY - R - 26} Q ${(x0 + x1) / 2} ${yArc - 30} ${x1 - (x1 - x0) * 0.12} ${coreY - R - 26}`;
					return (
						<g key={to} opacity={tt > 0 ? 1 : 0}>
							<path d={d} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" pathLength={1} strokeDasharray={`${tt} 1`} />
							<text x={(x0 + x1) / 2 + (to > i ? 30 : -30)} y={yArc - 34 - lift} textAnchor="middle" fill={color} fontSize={18} fontWeight={800} opacity={fadeAt(frame, start + 18)}>{text}</text>
						</g>
					);
				};
				return (
					<g opacity={t}>
						{i < n - 1 && arc(i + 1, theme.accent, focus.rightText ?? 'as an acid: lose H⁺', focus.at, 0)}
						{i > 0 && arc(i - 1, BLUE, focus.leftText ?? 'as a base: gain H⁺', focus.leftAt ?? focus.at + 40, 28)}
					</g>
				);
			})()}

			{/* Ka under each step */}
			{ka?.map((k, i) => {
				const x = (xs[i] + xs[i + 1]) / 2;
				const hi = kaHighlight && kaHighlight.index === i ? fadeAt(frame, kaHighlight.at) : 0;
				const y = labelY + 80;
				return (
					<g key={i} opacity={fadeAt(frame, Math.max(kaAt, stepsAt[i]) + 8)}>
						<text x={x} y={y} textAnchor="middle" fill={hi > 0 ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{k}</text>
						{hi > 0 && (
							<g opacity={hi}>
								<rect x={x - 90} y={y - 24} width={180} height={34} rx={9} fill="none" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.4} />
								<text x={x} y={y + 34} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{kaHighlight!.text}</text>
							</g>
						)}
					</g>
				);
			})}
			{kaNote && (
				<text x={W / 2} y={Math.min(labelY + 136, H - 10)} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, kaNoteAt ?? kaAt + 30)}>{kaNote}</text>
			)}
		</svg>
	);
};
