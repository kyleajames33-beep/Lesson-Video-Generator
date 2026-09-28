// ProtonHopDiagram — Brønsted–Lowry proton transfer as a diorama.
//
// Two stone plinths: the proton donor and the proton acceptor, each drawn as a
// glossy core (CPK colour of the atom that holds the protons) with its H atoms
// fanned on top. On the beat, one H⁺ lifts off the donor, arcs across and
// bonds to the acceptor; both formulas and charges change in place, so the
// acid visibly becomes its conjugate base and the base its conjugate acid.
// Underneath, the equation is built from chips, and brackets join each
// conjugate pair (always one species from each side).
//
// Config-driven: any donor/acceptor pair, several acceptor copies for a
// polyprotic donor (H₂SO₄ + 2NH₃), up to two stacked rows, and timed notes.
// Every formula and note comes from the lesson JSON.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {BLUE, GlossDefs, PROTON, Pill, Proton, clamp, coreColor, ease, fadeAt, hSlots, popAt, textWidth} from './shared';

export type HopSpecies = {
	/** Formula before / after the transfer, e.g. "H₂O" → "OH⁻". */
	label: string;
	after: string;
	/** Core element colour (O, N, C, S, P, A …) and its H count before the hop. */
	core: string;
	h: number;
	charge?: string;
	afterCharge?: string;
	/** Optional small text drawn on the core (e.g. "CH₃COO"). */
	coreText?: string;
	/** Copies standing on the plinth (acceptors only; each takes one proton). */
	count?: number;
};
export type HopTerm = string | {t: string; pair?: 1 | 2};
export type HopRow = {
	/** Plinth order, left to right. `donor` indexes into this. */
	species: [HopSpecies, HopSpecies];
	donor: 0 | 1;
	/** Equation chips; `pair` links conjugate partners with a bracket. */
	equation?: HopTerm[];
	/** Frames after delay: plinths in, role tags, first hop, pair brackets. */
	at?: number;
	rolesAt?: number;
	hopAt?: number;
	pairsAt?: number | [number, number];
	/** Role tags before / after the hop. */
	roles?: {donor?: string; acceptor?: string; donorAfter?: string; acceptorAfter?: string};
};
export type HopNote = {text: string; at: number; amber?: boolean};
export type ProtonHopProps = {
	title?: string;
	rows: HopRow[];
	notes?: HopNote[];
	pairLabels?: [string, string];
	delay?: number;
};

const ID = 'c12m6hop';
const W = 760;
const H = 530;
const HOP_LEN = 40;

const DEFAULT_ROWS: HopRow[] = [
	{
		species: [
			{label: 'NH₃', after: 'NH₄⁺', core: 'N', h: 3, afterCharge: '+'},
			{label: 'H₂O', after: 'OH⁻', core: 'O', h: 2, afterCharge: '−'},
		],
		donor: 1,
		equation: [{t: 'NH₃', pair: 2}, '+', {t: 'H₂O', pair: 1}, '⇌', {t: 'NH₄⁺', pair: 2}, '+', {t: 'OH⁻', pair: 1}],
	},
];

export const ProtonHopDiagram = ({title, rows = DEFAULT_ROWS, notes = [], pairLabels = ['conjugate pair', 'conjugate pair'], delay = 62}: ProtonHopProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pairColor = (p: 1 | 2) => (p === 1 ? theme.accent : BLUE);

	const compact = rows.length > 1;
	const top = title ? 52 : 14;
	const noteSpace = notes.length ? 30 * Math.min(notes.length, 3) + 6 : 0;
	const rowH = (H - top - noteSpace) / rows.length;
	const cores = Array.from(new Set(rows.flatMap((r) => r.species.map((s) => s.core))));
	const glossColors: Record<string, string> = {proton: PROTON, H: '#f2f2ef'};
	for (const c of cores) glossColors[`c${c}`] = coreColor(c);

	const renderRow = (row: HopRow, ri: number) => {
		const y0 = top + ri * rowH;
		const R = compact ? 30 : 50;
		const rH = compact ? 12 : 19;
		const off = title ? 30 : 0;
		const plinthY = compact ? y0 + 108 : 212 + off;
		const rx = compact ? 96 : 150;
		const xs = [205, 555];
		const at = row.at ?? 0;
		const rolesAt = row.rolesAt ?? at + 40;
		const hopAt = row.hopAt ?? at + 90;
		const acc = (1 - row.donor) as 0 | 1;
		const accSp = row.species[acc];
		const nAcc = accSp.count ?? 1;
		const hopT = (k: number) => ease(frame, hopAt + k * (HOP_LEN + 14), hopAt + k * (HOP_LEN + 14) + HOP_LEN);
		const allDone = hopT(nAcc - 1);
		const plinthIn = fadeAt(frame, at, 14);

		// Where each copy's core sits.
		const coreCenters = (si: 0 | 1) => {
			const n = si === acc ? nAcc : 1;
			const gap = compact ? 92 : 110;
			return Array.from({length: n}, (_, k) => ({
				x: xs[si] + (k - (n - 1) / 2) * gap,
				y: plinthY - R - (compact ? 6 : 10),
			}));
		};
		const donorCore = coreCenters(row.donor)[0];
		const donorSp = row.species[row.donor];
		// Donor H layout interpolates from h slots to (h − protons given) slots.
		const given = Array.from({length: nAcc}, (_, k) => hopT(k));
		const nGiven = given.reduce((s, t) => s + (t >= 1 ? 1 : 0), 0);

		const speciesGroup = (si: 0 | 1) => {
			const sp = row.species[si];
			const isDonor = si === row.donor;
			return coreCenters(si).map((c, k) => {
				const pop = popAt(frame, fps, at + 8 + si * 6 + k * 4);
				const bob = idleBob(frame, ri * 10 + si * 3 + k, 1.6);
				let hs: {dx: number; dy: number}[];
				let staying = sp.h;
				if (isDonor) {
					staying = sp.h - nAcc;
					const from = hSlots(sp.h, R, rH);
					const to = hSlots(Math.max(staying, 0), R, rH);
					// The last nAcc H atoms leave; the rest glide to the new fan.
					const settle = allDone;
					hs = from.slice(0, staying).map((p, j) => ({
						dx: interpolate(settle, [0, 1], [p.dx, to[j]?.dx ?? p.dx]),
						dy: interpolate(settle, [0, 1], [p.dy, to[j]?.dy ?? p.dy]),
					}));
				} else {
					const t = hopT(k);
					const from = hSlots(sp.h, R, rH);
					const to = hSlots(sp.h + 1, R, rH);
					hs = from.map((p, j) => ({
						dx: interpolate(t, [0.7, 1], [p.dx, to[j].dx], clamp),
						dy: interpolate(t, [0.7, 1], [p.dy, to[j].dy], clamp),
					}));
					if (t >= 1) hs.push(to[sp.h]);
				}
				const after = isDonor ? allDone >= 1 : hopT(k) >= 1;
				const charge = after ? sp.afterCharge : sp.charge;
				return (
					<g key={`${si}-${k}`} transform={`translate(${c.x},${c.y + bob}) scale(${pop})`}>
						<ellipse cx={0} cy={R + 8} rx={R * 1.1} ry={R * 0.24} fill="rgba(40,36,30,0.2)" />
						{hs.map((p, j) => (
							<circle key={j} cx={p.dx} cy={p.dy} r={rH} fill={`url(#${ID}-g-H)`} stroke="rgba(0,0,0,0.28)" strokeWidth={1} />
						))}
						<circle r={R} fill={`url(#${ID}-g-c${sp.core})`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
						{sp.coreText && (
							<text y={R * 0.16} textAnchor="middle" fill="#ffffff" fontSize={compact ? 13 : 16} fontWeight={800}>{sp.coreText}</text>
						)}
						{charge && (
							<g opacity={after ? fadeAt(frame, hopAt + HOP_LEN, 8) : 1}>
								<circle cx={R * 0.78} cy={R * 0.62} r={compact ? 11 : 13} fill="#ffffff" stroke={TOK.ink} strokeWidth={1.5} />
								<text x={R * 0.78} y={R * 0.62 + (compact ? 5 : 6)} textAnchor="middle" fill={TOK.ink} fontSize={compact ? 14 : 17} fontWeight={800}>{charge}</text>
							</g>
						)}
					</g>
				);
			});
		};

		// Flying protons: from the donor's leaving H slot to the acceptor copy's new slot.
		const flights = Array.from({length: nAcc}, (_, k) => {
			const t = hopT(k);
			if (t <= 0 || t >= 1) return null;
			const fromSlot = hSlots(donorSp.h, R, rH)[donorSp.h - 1 - k];
			const accC = coreCenters(acc)[k];
			const toSlot = hSlots(accSp.h + 1, R, rH)[accSp.h];
			const x0 = donorCore.x + fromSlot.dx, y0 = donorCore.y + fromSlot.dy;
			const x1 = accC.x + toSlot.dx, y1 = accC.y + toSlot.dy;
			const x = x0 + (x1 - x0) * t;
			const y = y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * (compact ? 38 : 62);
			return <Proton key={k} id={ID} x={x} y={y} r={rH} glow={1} />;
		});
		// A faint dashed track shows the path once the first proton has flown.
		const track = (() => {
			const accC = coreCenters(acc)[0];
			const x0 = donorCore.x, x1 = accC.x;
			const yTop = Math.min(donorCore.y, accC.y) - R - (compact ? 38 : 62);
			return `M ${x0} ${donorCore.y - R} Q ${(x0 + x1) / 2} ${yTop - 20} ${x1} ${accC.y - R}`;
		})();

		const roles = row.roles ?? {};
		const roleTxt = (si: 0 | 1, afterHop: boolean) => {
			const isDonor = si === row.donor;
			if (!afterHop) return isDonor ? roles.donor ?? 'ACID · proton donor' : roles.acceptor ?? 'BASE · proton acceptor';
			return isDonor ? roles.donorAfter ?? 'conjugate base' : roles.acceptorAfter ?? 'conjugate acid';
		};
		const labelY = compact ? plinthY + 74 : plinthY + 114;

		// Equation chips with conjugate-pair brackets.
		const eq = row.equation ?? [];
		const eqSize = compact ? 22 : 28;
		const eqY = compact ? y0 + 14 : labelY + 76;
		const widths = eq.map((term) => (typeof term === 'string' ? textWidth(term, eqSize) + 16 : textWidth(term.t, eqSize) + 26));
		const totalW = widths.reduce((s, w) => s + w, 0);
		let cursor = W / 2 - totalW / 2;
		const placed = eq.map((term, i) => {
			const x = cursor + widths[i] / 2;
			cursor += widths[i];
			return {term, x, w: widths[i]};
		});
		const pa = row.pairsAt ?? hopAt + HOP_LEN * nAcc + 30;
		const pairAt = (p: 1 | 2) => (Array.isArray(pa) ? pa[p - 1] : pa + (p - 1) * 36);
		const span = (p: 1 | 2) => {
			const m = placed.filter((q) => typeof q.term !== 'string' && q.term.pair === p);
			return m.length < 2 ? 0 : m[m.length - 1].x - m[0].x;
		};
		const bracket = (p: 1 | 2) => {
			const members = placed.filter((q) => typeof q.term !== 'string' && q.term.pair === p);
			if (members.length < 2) return null;
			const [a, b] = [members[0], members[members.length - 1]];
			// The wider pair's bracket hangs lower so nested brackets never cross.
			const depth = span(p) >= span((3 - p) as 1 | 2) && span((3 - p) as 1 | 2) > 0 ? 36 : 12;
			const yb = eqY + eqSize * 0.5 + depth;
			const t = ease(frame, pairAt(p), pairAt(p) + 24);
			const midX = (a.x + b.x) / 2;
			const len = (b.x - a.x) * t;
			return (
				<g key={p} opacity={t > 0 ? 1 : 0}>
					<path
						d={`M ${a.x} ${eqY + eqSize * 0.42} L ${a.x} ${yb} L ${a.x + len} ${yb}${t >= 1 ? ` L ${b.x} ${eqY + eqSize * 0.42}` : ''}`}
						fill="none" stroke={pairColor(p)} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round"
					/>
					<g opacity={fadeAt(frame, pairAt(p) + 20, 10)}>
						<rect x={midX - textWidth(pairLabels[p - 1], 16) / 2 - 8} y={yb - 11} width={textWidth(pairLabels[p - 1], 16) + 16} height={22} rx={11} fill="#ffffff" />
						<text x={midX} y={yb + 5} textAnchor="middle" fill={pairColor(p)} fontSize={16} fontWeight={800}>{pairLabels[p - 1]}</text>
					</g>
				</g>
			);
		};

		return (
			<g key={ri}>
				<g opacity={plinthIn}>
					{[0, 1].map((si) => (
						<DioramaPlinth key={si} id={ID} cx={xs[si]} cy={plinthY} rx={rx} />
					))}
				</g>
				<path d={track} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="5 7" opacity={0.5 * fadeAt(frame, hopAt, 10)} />
				{speciesGroup(0)}
				{speciesGroup(1)}
				{flights}

				{/* Formula under each plinth, swapping to the new species on arrival */}
				{([0, 1] as const).map((si) => {
					const sp = row.species[si];
					const isDonor = si === row.donor;
					const sw = isDonor ? ease(frame, hopAt + HOP_LEN * nAcc - 6, hopAt + HOP_LEN * nAcc + 6) : ease(frame, hopAt + HOP_LEN - 6, hopAt + HOP_LEN * nAcc + 6);
					const n = !isDonor && nAcc > 1 ? `${nAcc}` : '';
					const fs = compact ? 24 : 30;
					return (
						<g key={si} opacity={plinthIn}>
							<text x={xs[si]} y={labelY} textAnchor="middle" fill={TOK.ink} fontSize={fs} fontWeight={800} opacity={1 - sw}>{n}{sp.label}</text>
							<text x={xs[si]} y={labelY} textAnchor="middle" fill={isDonor ? theme.accent : BLUE} fontSize={fs} fontWeight={800} opacity={sw}>{n}{sp.after}</text>
						</g>
					);
				})}
				{/* Role tags */}
				{([0, 1] as const).map((si) => {
					const isDonor = si === row.donor;
					const c = isDonor ? theme.accent : BLUE;
					const aft = fadeAt(frame, hopAt + HOP_LEN * nAcc + 4, 10);
					const y = labelY + (compact ? 24 : 33);
					return (
						<g key={si}>
							<Pill x={xs[si]} y={y} text={roleTxt(si, false)} color={c} size={compact ? 14 : 16} opacity={fadeAt(frame, rolesAt, 10) * (1 - aft)} />
							<Pill x={xs[si]} y={y} text={roleTxt(si, true)} color={c} fill={isDonor ? '#eef7f3' : '#eef3fc'} size={compact ? 14 : 16} opacity={aft} />
						</g>
					);
				})}

				{/* Equation */}
				{eq.length > 0 && (
					<g opacity={fadeAt(frame, at + 4, 12)}>
						{placed.map(({term, x}, i) =>
							typeof term === 'string' ? (
								<text key={i} x={x} y={eqY + eqSize * 0.36} textAnchor="middle" fill={TOK.inkDim} fontSize={eqSize} fontWeight={700}>{term}</text>
							) : (
								<text key={i} x={x} y={eqY + eqSize * 0.36} textAnchor="middle" fill={term.pair ? pairColor(term.pair) : TOK.ink} fontSize={eqSize} fontWeight={800}>{term.t}</text>
							),
						)}
						{!compact && bracket(1)}
						{!compact && bracket(2)}
					</g>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Proton transfer from an acid to a base'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={glossColors} />
			{title && (
				<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={fadeAt(frame, 0)}>{title}</text>
			)}
			{rows.map(renderRow)}
			{notes.slice(0, 3).map((n, i) => {
				const hasPairs = rows.some((r) => (r.equation ?? []).some((q) => typeof q !== 'string' && q.pair));
				const y = compact ? H - noteSpace + 18 + i * 30 : 212 + (title ? 30 : 0) + 114 + 76 + (hasPairs ? 84 : 44) + i * 28;
				return (
					<text key={i} x={W / 2} y={y} textAnchor="middle" fill={n.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, n.at, 12) * (n.amber ? 0.8 + 0.2 * idlePulse(frame) : 1)}>
						{n.text}
					</text>
				);
			})}
		</svg>
	);
};
