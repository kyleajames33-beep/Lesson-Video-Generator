// EnergyLadderDiagram — energy-level dioramas for thermochemistry (Chem Y11 M4).
//
// Each panel has an energy axis and stone "ledges" standing at their enthalpy
// levels, with the species' molecules (glossy CPK balls) standing on them.
// Vertical arrows draw themselves between levels (ΔH, bonds broken/formed,
// lattice/hydration…), and wavy heat arrows flow out to (exothermic) or in from
// (endothermic) the surroundings. An optional dashed zero line marks a
// reference level (elements in their standard states).
//
// Everything is config, so one kind serves the sign of ΔH, bond energies,
// formation enthalpy, dissolution and forward/reverse reactions. Levels are
// qualitative (0 = bottom, 1 = top of the axis): no numbers are drawn unless
// a label supplies them.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, ELEMENT_COLORS, Molecule, STONE, idleBob, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';

type Tone = 'ink' | 'accent' | 'amber' | 'hot' | 'cold';
export type LadderLevel = {
	key: string;
	label: string;
	sub?: string;
	/** Energy, 0 (bottom of axis) … 1 (top). */
	e: number;
	/** Molecules standing on the ledge: each is a list of atoms (≤ 3 → drawn as a Molecule). */
	species?: {atoms: string[]; label?: string; charge?: string}[];
	/** Ledge centre as a fraction of panel width (default 0.5). */
	x?: number;
	/** Ledge width in viewBox units (default 170). */
	w?: number;
	at?: number;
	/** Put the label above the ledge instead of below it. */
	labelAbove?: boolean;
};
export type LadderArrow = {from: string; to: string; label: string; sub?: string; at: number; tone?: Tone; x?: number; side?: 'left' | 'right'; key?: boolean; /** Energy level for the label (default: midway). */ labelE?: number};
export type LadderPanel = {
	title?: string;
	levels: LadderLevel[];
	arrows?: LadderArrow[];
	heat?: {dir: 'out' | 'in'; at: number; label?: string};
	zero?: {e: number; label: string; at: number};
	note?: {text: string; at: number; tone?: Tone};
};
export type EnergyLadderProps = {
	delay?: number;
	header?: string;
	headerAt?: number;
	panels: LadderPanel[];
	/** Timed caption under the header; each replaces the last. */
	steps?: {at: number; text: string; key?: boolean}[];
};

const ID = 'c11m4lad';
const W = 760;
const Y_BOT = 452;
const Y_TOP = 132;

export const EnergyLadderDiagram = ({delay = 90, header, headerAt = 0, panels, steps = []}: EnergyLadderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const toneColor = (t: Tone = 'ink') =>
		t === 'accent' ? theme.accent : t === 'amber' ? TOK.amberInk : t === 'hot' ? '#c8452c' : t === 'cold' ? '#2f6fd0' : TOK.ink;
	const toneStroke = (t: Tone = 'ink') => (t === 'amber' ? TOK.amber : toneColor(t));

	const pw = W / panels.length;
	// Filled arrowhead with its tip at (x, y), pointing along `ang`.
	const head = (x: number, y: number, ang: number, color: string, size: number) => {
		const c = Math.cos(ang), sn = Math.sin(ang);
		const bx = x - c * size * 1.3, by = y - sn * size * 1.3;
		return <path d={`M ${x} ${y} L ${bx - sn * size} ${by + c * size} L ${bx + sn * size} ${by - c * size} Z`} fill={color} />;
	};
	const yOf = (e: number) => Y_BOT - e * (Y_BOT - Y_TOP);
	const cur = steps.filter((s) => frame >= s.at).pop();
	const hasHeader = Boolean(header);

	const allAtoms = Array.from(new Set(panels.flatMap((p) => p.levels.flatMap((l) => (l.species ?? []).flatMap((s) => s.atoms)))));
	const cpk = allAtoms.filter((a) => a in ELEMENT_COLORS);
	const extra = allAtoms.filter((a) => !(a in ELEMENT_COLORS));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={header ?? panels.map((p) => p.title).join(' / ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={cpk} />
			<ExtraAtomDefs id={ID} elements={extra} />
			<defs>
				<radialGradient id={`${ID}-ledge-top`} cx="38%" cy="30%" r="80%">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="70%" stopColor={STONE.top} />
					<stop offset="100%" stopColor={STONE.topEdge} />
				</radialGradient>
				<linearGradient id={`${ID}-ledge-side`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor={STONE.sideLight} />
					<stop offset="40%" stopColor={STONE.side} />
					<stop offset="100%" stopColor={STONE.sideDark} />
				</linearGradient>
			</defs>

			{hasHeader && (
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={ramp(frame, headerAt)}>
					{header}
				</text>
			)}
			{cur && (
				<text x={W / 2} y={hasHeader ? 72 : 40} textAnchor="middle" fill={cur.key ? TOK.amberInk : TOK.inkDim} fontSize={20} fontWeight={800} opacity={ramp(frame, cur.at, 12)}>
					{cur.text}
				</text>
			)}

			{panels.map((p, pi) => {
				const x0 = pi * pw;
				const ax = x0 + 30;
				const lv = (k: string) => p.levels.find((l) => l.key === k)!;
				const ledgeX = (l: LadderLevel) => x0 + (l.x ?? 0.5) * pw + 10;
				return (
					<g key={pi}>
						{/* panel divider */}
						{pi > 0 && <line x1={x0} y1={Y_TOP - 20} x2={x0} y2={Y_BOT + 50} stroke={TOK.rule} strokeWidth={2} />}
						{p.title && (
							<text x={x0 + pw / 2 + 10} y={hasHeader ? 110 : 96} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={ramp(frame, pi * 8)}>
								{p.title}
							</text>
						)}
						{/* energy axis */}
						<g opacity={ramp(frame, 4)}>
							<line x1={ax} y1={Y_BOT + 24} x2={ax} y2={Y_TOP - 6} stroke={TOK.inkMute} strokeWidth={2.5} />
							{head(ax, Y_TOP - 14, -Math.PI / 2, TOK.inkMute, 9)}
							<text x={ax - 10} y={(Y_TOP + Y_BOT) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} transform={`rotate(-90 ${ax - 10} ${(Y_TOP + Y_BOT) / 2})`}>
								enthalpy, H
							</text>
						</g>

						{p.zero && (
							<g opacity={ramp(frame, p.zero.at, 14)}>
								<line x1={ax + 4} y1={yOf(p.zero.e)} x2={x0 + pw - 10} y2={yOf(p.zero.e)} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="8 7" />
								<text x={x0 + pw - 12} y={yOf(p.zero.e) - 10} textAnchor="end" fill={theme.accent} fontSize={17} fontWeight={800}>{p.zero.label}</text>
							</g>
						)}

						{/* ledges with their molecules */}
						{p.levels.map((l, li) => {
							const s = Math.max(0, spring({frame: frame - (l.at ?? 6 + li * 6), fps, config: {damping: 14, stiffness: 150}}));
							const cx = ledgeX(l);
							const y = yOf(l.e);
							const w = l.w ?? 170;
							const sp = l.species ?? [];
							const gap = Math.min(52, (w - 30) / Math.max(1, sp.length));
							return (
								<g key={l.key} opacity={Math.min(1, s * 1.6)} transform={`translate(0 ${(1 - s) * 16})`}>
									<ellipse cx={cx + 4} cy={y + 16} rx={w / 2} ry={8} fill={STONE.shadow} />
									<path d={`M ${cx - w / 2} ${y} L ${cx - w / 2} ${y + 9} A ${w / 2} 9 0 0 0 ${cx + w / 2} ${y + 9} L ${cx + w / 2} ${y} Z`} fill={`url(#${ID}-ledge-side)`} />
									<ellipse cx={cx} cy={y + 1.5} rx={w / 2} ry={9} fill={STONE.topEdge} />
									<ellipse cx={cx} cy={y} rx={w / 2} ry={9} fill={`url(#${ID}-ledge-top)`} />
									{sp.map((m, k) => {
										const mx = cx + (k - (sp.length - 1) / 2) * gap;
										const my = y - 14 + idleBob(frame, k + li * 5 + pi * 17, 1.4);
										return (
											<g key={k}>
												{m.atoms.length <= 3 ? (
													<Molecule id={ID} atoms={m.atoms} x={mx} y={my} r={12} />
												) : (
													<Ball id={ID} el={m.atoms[0]} x={mx} y={my - 2} r={14} />
												)}
												{m.charge && (
													<text x={mx + 13} y={my - 10} fill={TOK.ink} fontSize={15} fontWeight={800}>{m.charge}</text>
												)}
											</g>
										);
									})}
									<text x={cx} y={l.labelAbove ? y - 44 : y + 36} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{l.label}</text>
									{l.sub && (
										<text x={cx} y={l.labelAbove ? y - 64 : y + 56} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{l.sub}</text>
									)}
								</g>
							);
						})}

						{/* arrows between levels */}
						{(p.arrows ?? []).map((a, ai) => {
							const A = lv(a.from), B = lv(a.to);
							const y1 = yOf(A.e), y2 = yOf(B.e);
							const g = interpolate(frame, [a.at, a.at + 30], [0, 1], clamp);
							if (g <= 0) return null;
							const x = x0 + (a.x ?? 0.5) * pw + 10;
							const yEnd = y1 + (y2 - y1) * g;
							const side = a.side ?? 'right';
							const col = toneStroke(a.tone);
							const pulse = a.key && g >= 1 ? 1 + idlePulse(frame) * 1.5 : 0;
							const ly = a.labelE !== undefined ? yOf(a.labelE) : (y1 + y2) / 2;
							return (
								<g key={ai}>
									<line x1={x} y1={y1} x2={x} y2={yEnd + (y2 > y1 ? -10 : 10)} stroke={col} strokeWidth={4 + pulse} strokeLinecap="round" />
									{head(x, yEnd, y2 > y1 ? Math.PI / 2 : -Math.PI / 2, col, 11)}
									<g opacity={ramp(frame, a.at + 20, 12)}>
										<text x={x + (side === 'right' ? 12 : -12)} y={ly + (a.sub ? -2 : 6)} textAnchor={side === 'right' ? 'start' : 'end'} fill={toneColor(a.tone)} fontSize={18} fontWeight={800}>
											{a.label}
										</text>
										{a.sub && (
											<text x={x + (side === 'right' ? 12 : -12)} y={ly + 18} textAnchor={side === 'right' ? 'start' : 'end'} fill={TOK.inkDim} fontSize={15} fontWeight={700}>
												{a.sub}
											</text>
										)}
									</g>
								</g>
							);
						})}

						{/* heat flowing out to / in from the surroundings */}
						{p.heat && frame >= p.heat.at && (
							<g opacity={ramp(frame, p.heat.at, 16)}>
								{[0, 1, 2].map((k) => {
									const period = 60;
									const ph = (((frame - p.heat!.at + k * 20) % period) + period) % period / period;
									const out = p.heat!.dir === 'out';
									const bx = x0 + pw - 34;
									const by = Y_TOP + 20 + k * 32;
									const dx = out ? ph * 22 : (1 - ph) * 22;
									const col = out ? '#c8452c' : '#2f6fd0';
									const sx = bx - 22 + dx;
									const d = `M ${sx} ${by} q 5 -8 10 0 q 5 8 10 0 q 5 -8 10 0`;
									return (
										<g key={k} opacity={Math.min(1, Math.min(ph, 1 - ph) * 5)}>
											<path d={d} fill="none" stroke={col} strokeWidth={3.5} strokeLinecap="round" />
											{out ? head(sx + 36, by, 0, col, 9) : head(sx - 6, by, Math.PI, col, 9)}
										</g>
									);
								})}
								<text x={x0 + pw - 30} y={Y_TOP - 4} textAnchor="middle" fill={p.heat.dir === 'out' ? '#c8452c' : '#2f6fd0'} fontSize={16} fontWeight={800}>
									{p.heat.label ?? (p.heat.dir === 'out' ? 'heat out' : 'heat in')}
								</text>
							</g>
						)}

						{p.note && (
							<text x={x0 + pw / 2 + 10} y={Y_BOT + 66} textAnchor="middle" fill={toneColor(p.note.tone ?? 'ink')} fontSize={19} fontWeight={800} opacity={ramp(frame, p.note.at, 14)}>
								{p.note.text}
							</text>
						)}
					</g>
				);
			})}
		</svg>
	);
};
