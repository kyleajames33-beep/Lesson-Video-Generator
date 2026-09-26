// ShellCauseDiagram — "state the cause, then the effect" for a size trend.
//
// Two panels (e.g. across a period, down a group). Each has two Bohr atoms on
// plinths: the first element and a later one. Cause chips arrive with the
// narration (protons, shells, shielding) and visual cues play on the atoms:
//   • outerAt  — the outer shell of both atoms is highlighted (same shell / extra shell)
//   • shieldAt — the inner (shielding) electrons get a grey cloud
//   • contract — the second atom starts at `fromR` and is pulled in to its true radius
//   • radiusAt — a radius line from nucleus to outer shell on both atoms
// Then the effect chip lands (amber: the effect on radius is what the answer ends on).
//
// Config-driven: proton counts, shell configurations, drawn radii, texts, beats
// (frames after `delay`). Drawn radii should keep the true size order.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, BohrAtom, Chip, GlossDefs, PARTICLE, clamp, fadeAt, popAt} from './shared';

export type ShellAtom = {protons: number; shells: number[]; r: number; at?: number; fromR?: number};
export type ShellPanel = {
	title: string;
	example?: string;
	atoms: [ShellAtom, ShellAtom];
	causes: {text: string; at?: number}[];
	effect: {text: string; at?: number};
	outerAt?: number;
	shieldAt?: number;
	/** Frame at which the second atom contracts from `fromR` to `r`. */
	contractAt?: number;
	radiusAt?: number;
};
export type ShellCauseProps = {panels?: ShellPanel[]; pulseAt?: number; delay?: number};

// Defaults = Chem Y11 M1 L17 "Exam-language sentences" (examples: Period 3 and Group 1).
const DEFAULT_PANELS: ShellPanel[] = [
	{
		title: 'Across a period →',
		example: 'example: Na → Cl (Period 3)',
		atoms: [
			{protons: 11, shells: [2, 8, 1], r: 78, at: 147},
			{protons: 17, shells: [2, 8, 7], r: 52, at: 198, fromR: 78},
		],
		causes: [
			{text: 'more protons', at: 198},
			{text: 'same shell', at: 240},
			{text: 'shielding similar', at: 298},
		],
		outerAt: 240,
		shieldAt: 298,
		contractAt: 382,
		radiusAt: 382,
		effect: {text: 'radius decreases', at: 424},
	},
	{
		title: 'Down a group ↓',
		example: 'example: Li → Na (Group 1)',
		atoms: [
			{protons: 3, shells: [2, 1], r: 62, at: 449},
			{protons: 11, shells: [2, 8, 1], r: 78, at: 533},
		],
		causes: [
			{text: 'extra shell', at: 533},
			{text: 'further out', at: 600},
			{text: 'more shielded', at: 642},
		],
		outerAt: 533,
		radiusAt: 600,
		shieldAt: 642,
		effect: {text: 'radius increases', at: 683},
	},
];

const ID = 'c11shc';
const W = 760;
const H = 530;
const PLINTH_Y = 270;
const PLINTH_RX = 72;
const E_R = 5;
const NUC_R = 13;

// Same ring radii as BohrAtom uses.
const ringRadii = (shells: number[], outerR: number) => {
	const n = shells.length;
	return shells.map((_, i) => NUC_R + 10 + ((outerR - NUC_R - 10) * (i + 1)) / n);
};

const toSup = (s: string) => s.replace(/[0-9+]/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'['0123456789'.indexOf(d)] ?? '⁺');

export const ShellCauseDiagram = ({panels = DEFAULT_PANELS, pulseAt = 817, delay = 62}: ShellCauseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = panels.length;
	const slot = W / n;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cause then effect: protons, shielding and shells change the atomic radius" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{nucleus: PARTICLE.nucleus, electron: PARTICLE.electron}} />

			{n > 1 && <line x1={slot} y1={20} x2={slot} y2={H - 20} stroke={TOK.rule} strokeWidth={2} strokeDasharray="6 8" opacity={fadeAt(frame, 0)} />}

			{panels.map((p, pi) => {
				const c = slot * (pi + 0.5);
				const xs = [c - 92, c + 92];
				const outerT = p.outerAt !== undefined ? fadeAt(frame, p.outerAt, 14) : 0;
				const shieldT = p.shieldAt !== undefined ? fadeAt(frame, p.shieldAt, 18) : 0;
				const radT = p.radiusAt !== undefined ? fadeAt(frame, p.radiusAt, 16) : 0;
				const effPop = popAt(frame, fps, p.effect.at ?? Infinity);
				const pulse = frame > pulseAt ? idlePulse(frame, 40) : 0;
				return (
					<g key={pi}>
						<text x={c} y={36} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800} opacity={fadeAt(frame, 0)}>
							{p.title}
						</text>
						{p.example && (
							<text x={c} y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={fadeAt(frame, p.atoms[0].at ?? 0)}>
								{p.example}
							</text>
						)}

						{/* plinths + "next element" arrow */}
						{xs.map((x, k) => (
							<g key={k} opacity={fadeAt(frame, 4 + k * 4)}>
								<DioramaPlinth id={ID} cx={x} cy={PLINTH_Y} rx={PLINTH_RX} />
							</g>
						))}
						<g opacity={fadeAt(frame, p.atoms[1].at ?? 0)}>
							<Arrow x1={c - 16} y1={PLINTH_Y + 2} x2={c + 18} y2={PLINTH_Y + 2} color={TOK.inkDim} width={4} head={12} />
						</g>

						{/* atoms */}
						{p.atoms.map((a, k) => {
							const at = a.at ?? 0;
							const pop = popAt(frame, fps, at);
							if (pop <= 0) return null;
							const R =
								a.fromR !== undefined && p.contractAt !== undefined
									? interpolate(frame, [p.contractAt, p.contractAt + 36], [a.fromR, a.r], {...clamp, easing: (t) => 1 - (1 - t) * (1 - t)})
									: a.r;
							const x = xs[k];
							const y = PLINTH_Y - 8 - R + (frame > at + 30 ? idleBob(frame, pi * 2 + k, 1.4) : 0);
							const radii = ringRadii(a.shells, R);
							const inner = radii.length > 1 ? radii[radii.length - 2] + E_R + 3 : 0;
							const s = 0.6 + 0.4 * Math.min(1, pop);
							return (
								<g key={k}>
									<ellipse cx={x} cy={PLINTH_Y - 2} rx={R * 0.62} ry={R * 0.13} fill="rgba(40,60,20,0.22)" opacity={Math.min(1, pop)} />
									<g opacity={Math.min(1, pop * 1.5)} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
										<circle cx={x} cy={y} r={R + 8} fill="#ffffff" opacity={0.55} />
										{inner > 0 && shieldT > 0 && <circle cx={x} cy={y} r={inner} fill={TOK.inkMute} opacity={0.26 * shieldT} />}
										<BohrAtom
											id={ID}
											x={x}
											y={y}
											shells={a.shells}
											outerR={R}
											nucleusR={NUC_R}
											electronR={E_R}
											frame={frame}
											spin={k === 0 ? 1 : -1}
											outerColor={outerT > 0 ? theme.accent : undefined}
											highlightOuter={outerT}
										/>
										{radT > 0 && (
											<g opacity={radT}>
												<line x1={x} y1={y} x2={x - R * 0.72} y2={y - R * 0.69} stroke={TOK.ink} strokeWidth={2.5} strokeDasharray="5 4" />
												<text x={x - R * 0.36 - 12} y={y - R * 0.34 - 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} fontStyle="italic">
													r
												</text>
											</g>
										)}
									</g>
									<text x={x} y={PLINTH_Y + 60} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, at + 6)}>
										{`${a.protons} p${toSup('+')}   ${a.shells.join(',')}`}
									</text>
								</g>
							);
						})}

						{/* cause chips: two on the first row, the rest centred below */}
						{p.causes.map((cz, k) => {
							const row = k < 2 ? 0 : 1;
							const cx = row === 0 ? c + (k === 0 ? -80 : 80) : c;
							const cy = 374 + row * 40;
							const t = popAt(frame, fps, cz.at ?? Infinity);
							if (t <= 0) return null;
							return (
								<g key={k} opacity={Math.min(1, t * 1.5)} transform={`translate(${cx},${cy}) scale(${0.8 + 0.2 * Math.min(1, t)}) translate(${-cx},${-cy})`}>
									<Chip x={cx} y={cy} text={cz.text} color={theme.accent} size={17} />
								</g>
							);
						})}

						{/* effect */}
						{effPop > 0 && (
							<g opacity={Math.min(1, effPop * 1.5)}>
								<Arrow x1={c} y1={432} x2={c} y2={452} color={TOK.inkDim} width={4} head={11} />
								<g transform={`translate(${c},478) scale(${0.8 + 0.2 * Math.min(1, effPop)})`}>
									{(() => {
										const size = 22;
										const w = p.effect.text.length * size * 0.56 + 32;
										return (
											<>
												<rect x={-w / 2} y={-21} width={w} height={42} rx={21} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} />
												<text x={0} y={size * 0.36} textAnchor="middle" fill={TOK.amberInk} fontSize={size} fontWeight={800}>
													{p.effect.text}
												</text>
											</>
										);
									})()}
								</g>
							</g>
						)}
					</g>
				);
			})}
		</svg>
	);
};
