// EquationStackDiagram — thermochemical equations as cards that get reversed,
// scaled and added (Chem Y11 M4: manipulating equations, Hess's law).
//
// Each row is an equation card with its ΔH chip. Rows arrive on their beats; a
// derived row carries an operation tag ("reverse (2)", "× 2") and its changed
// ΔH chip flashes. A sum row draws a rule above it and strikes out species that
// appear on both sides. Everything is symbolic text from the config (ΔH₁, 2ΔH,
// −ΔH …), so the algebra shown is exactly the rule being taught.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {ramp} from './shared';

export type EqToken = {t: string; cancel?: boolean};
export type EqRow = {
	at: number;
	/** Small tag on the left: "(1)", "reverse (2)", "× 2", "target", "add". */
	tag?: string;
	lhs: (string | EqToken)[];
	rhs: (string | EqToken)[];
	dh: string;
	/** Flash the ΔH chip (it changed). */
	changed?: boolean;
	/** Draw a summing rule above this row. */
	sum?: boolean;
	/** Frame the cancel strikes appear (defaults to `at` + 40). */
	cancelAt?: number;
	/** Amber: the single most important row. */
	key?: boolean;
	/** Dim this row after this frame (it has been replaced). */
	fadeAt?: number;
};
export type EquationStackProps = {
	delay?: number;
	header?: string;
	rows: EqRow[];
	/** Short rule lines shown at the bottom, each on its beat. */
	rules?: {at: number; text: string}[];
};

const ID = 'c11m4eq';
const W = 760;
const CH = 13.6; // approx. width per character at 24 px bold
const tokW = (t: string) => Math.max(1, [...t].reduce((a, ch) => a + (/[₀-₉⁰-⁹⁺⁻]/.test(ch) ? 0.6 : ch === ' ' ? 0.4 : 1), 0)) * CH;

export const EquationStackDiagram = ({delay = 90, header, rows, rules = []}: EquationStackProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = header ? 92 : 50;
	const rowH = Math.min(84, (530 - top - 12 - rules.length * 32) / Math.max(1, rows.length));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={header ?? 'Thermochemical equations: reverse flips the sign of ΔH, scaling scales ΔH, adding adds ΔH'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			{header && (
				<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={ramp(frame, 0)}>{header}</text>
			)}
			{rows.map((r, i) => {
				const s = Math.max(0, spring({frame: frame - r.at, fps, config: {damping: 14, stiffness: 170}}));
				if (s <= 0) return null;
				const y = top + i * rowH;
				const cy = y + rowH / 2;
				const tokens = [...r.lhs.map((t) => (typeof t === 'string' ? {t} : t)), {t: '→'}, ...r.rhs.map((t) => (typeof t === 'string' ? {t} : t))];
				const gap = 12;
				const widths = tokens.map((t) => tokW(t.t));
				const total = widths.reduce((a, b) => a + b, 0) + gap * (tokens.length - 1);
				const eqCx = 360;
				let x = eqCx - total / 2;
				const placed = tokens.map((t, k) => {
					const p = {...t, x: x + widths[k] / 2, w: widths[k]};
					x += widths[k] + gap;
					return p;
				});
				const cancelIn = ramp(frame, r.cancelAt ?? r.at + 40, 14);
				const dim = r.fadeAt !== undefined ? 1 - 0.55 * ramp(frame, r.fadeAt, 14) : 1;
				const flash = r.changed ? Math.max(0, 1 - Math.abs(frame - r.at - 20) / 40) : 0;
				const chipStroke = r.key ? TOK.amber : r.changed ? theme.accent : TOK.rule;
				return (
					<g key={i} opacity={Math.min(1, s * 1.5) * dim} transform={`translate(${(1 - s) * 40} 0)`}>
						{r.sum && <line x1={120} y1={y + 4} x2={W - 20} y2={y + 4} stroke={TOK.ink} strokeWidth={2.5} />}
						{r.tag && (
							<text x={16} y={cy + 7} fill={r.changed || r.key ? theme.accent : TOK.inkDim} fontSize={18} fontWeight={800}>{r.tag}</text>
						)}
						<rect x={eqCx - total / 2 - 18} y={cy - 27} width={total + 36} height={54} rx={14} fill={r.key ? '#fff8ea' : '#ffffff'} stroke={r.key ? TOK.amber : TOK.rule} strokeWidth={r.key ? 2.5 : 1.5} />
						{placed.map((p, k) => (
							<g key={k}>
								<text x={p.x} y={cy + 9} textAnchor="middle" fill={p.t === '→' || p.t === '+' ? TOK.inkDim : TOK.ink} fontSize={24} fontWeight={800}>{p.t}</text>
								{p.cancel && <line x1={p.x - p.w / 2 - 3} y1={cy + 11} x2={p.x - p.w / 2 - 3 + (p.w + 6) * cancelIn} y2={cy - 13} stroke="#c8452c" strokeWidth={3.5} strokeLinecap="round" />}
							</g>
						))}
						{/* ΔH chip */}
						<g transform={`translate(${W - 92} ${cy}) scale(${1 + 0.12 * flash})`}>
							<rect x={-78} y={-24} width={156} height={48} rx={24} fill="#ffffff" stroke={chipStroke} strokeWidth={r.key ? 2.5 + idlePulse(frame) * 1.5 : r.changed ? 3 : 1.5} />
							<text y={8} textAnchor="middle" fill={r.key ? TOK.amberInk : r.changed ? theme.accent : TOK.ink} fontSize={22} fontWeight={800}>{r.dh}</text>
						</g>
					</g>
				);
			})}
			{rules.map((ru, i) => (
				<text key={i} x={W / 2} y={530 - 20 - (rules.length - 1 - i) * 30} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800} opacity={ramp(frame, ru.at, 14)}>
					{ru.text}
				</text>
			))}
		</svg>
	);
};
