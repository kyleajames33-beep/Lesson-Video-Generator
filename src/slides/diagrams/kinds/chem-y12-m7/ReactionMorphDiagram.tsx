// ReactionMorphDiagram (chem12m7Reaction) — an organic reaction performed live
// on the stage. Each row is a sequence of stages; each stage is the whole
// scene at that moment (reactant, reagent, product, by-product) written as a
// skeleton string (mol.tsx). Atoms keep their id from stage to stage, so on each
// beat they MOVE to their new places: an H–H or Br–Br molecule drifts onto the
// C=C, the π bond fades while the σ bond stays, an –OH and an H leave together
// as water. Atoms that only exist in the next stage pop in; atoms that vanish
// fade out. A bond that forms or breaks glows amber while it changes.
//
// Per stage, optionally: an equation/caption line above the row, text labels
// (anchored to a grid point or following an atom), halos, a conditions chip and
// bond tags (σ / π). Per row, optionally a test tube whose colour changes on a
// beat (bromine water decolourising, dichromate turning green).
//
// Hold: the row drifts gently and highlights breathe (idleBob / idlePulse).

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse} from '../../diorama';
import {
	Chip, Halo, MolDefs, MolLayer, PartsText, SECOND, StageSlab, Tube, bboxOf, buildMol, clamp, fadeAt, popAt, toParts,
} from './mol';
import type {Atom, DrawAtom, DrawBond, Mol, MolSpec, NamePart} from './mol';

type Color = 'amber' | 'accent' | 'second' | 'dim' | 'ink';
type Label = {t: string; x?: number; y?: number; atom?: string; dx?: number; dy?: number; c?: Color; size?: number; at?: number};
export type Stage = {
	mol: MolSpec;
	/** Frame (after delay) this stage starts arriving. Stage 0 builds in at `at`. */
	at: number;
	/** Transition length in frames. Default 40. */
	len?: number;
	eq?: string | NamePart[];
	labels?: Label[];
	highlights?: {atoms: string[]; c?: Color; label?: string; side?: 'above' | 'below'; at?: number}[];
	cond?: string;
	bondTags?: {a: string; b: string; t: string; c?: Color; side?: 1 | -1}[];
};
export type Row = {
	stages: Stage[];
	/** Conditions chip that stays up once it appears (e.g. "Ni catalyst, heat"). */
	cond?: {t: string; at: number; c?: Color};
	tube?: {from: string; to: string; at: number; label?: string};
};
export type ReactionMorphProps = {
	title?: string | NamePart[];
	rows?: Row[];
	/** Single-row shorthand. */
	stages?: Stage[];
	tube?: Row['tube'];
	cond?: Row['cond'];
	/** "rows" stacks reactions; "cols" puts them side by side (bigger molecules for two short reactions). */
	layout?: 'rows' | 'cols';
	maxUnit?: number;
	delay?: number;
};

const ID = 'c12m7rx';
const W = 760;
const H = 530;
const ease = Easing.inOut(Easing.cubic);
const bondKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

export const ReactionMorphDiagram = ({title, rows: rowsProp, stages, tube, cond, layout = 'rows', maxUnit = 104, delay = 62}: ReactionMorphProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const colorOf = (c: Color | undefined, fallback: string) =>
		c === 'amber' ? TOK.amber : c === 'accent' ? theme.accent : c === 'second' ? SECOND : c === 'dim' ? TOK.inkDim : c === 'ink' ? TOK.ink : fallback;
	const inkOf = (c: Color | undefined, fallback: string = TOK.ink) => (c === 'amber' ? TOK.amberInk : colorOf(c, fallback));

	const rows: Row[] = rowsProp ?? [{stages: stages ?? [], tube, cond}];
	const top = title ? 50 : 4;
	const cols = layout === 'cols';
	const paneW = cols ? W / rows.length : W;
	const rowH = cols ? H - top : (H - top) / rows.length;
	// Rows with a conditions chip get an extra line under the equation.
	const hasCond = rows.some((r) => r.cond || r.stages.some((s) => s.cond));
	const EQ_H = hasCond ? 74 : 40;
	const SLAB = 30;
	const tubeW = rows.some((r) => r.tube) ? (cols ? 110 : 120) : 0;

	const built = rows.map((r) => r.stages.map((s) => buildMol(s.mol)));
	// One scale for every row and stage, so nothing jumps between beats.
	const boxes = built.map((ms) => bboxOf(ms.flatMap((m) => m.atoms)));
	const areaW = paneW - (cols ? 20 : 40) - tubeW;
	const areaH = rowH - EQ_H - SLAB - 12;
	const u = Math.min(maxUnit, ...boxes.map((b) => Math.min(areaW / Math.max(b.w, 0.5), areaH / Math.max(b.h, 0.5))));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Organic reaction" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<MolDefs id={ID} />
			{title && <PartsText x={W / 2} y={34} parts={toParts(title, 0)} frame={frame} size={24} accent={theme.accent} />}
			{rows.map((row, ri) => {
				const mols = built[ri];
				const box = boxes[ri];
				const y0 = cols ? top : top + ri * rowH;
				const x0 = cols ? ri * paneW : 0;
				const mcx = x0 + (cols ? 10 : 20) + areaW / 2;
				const eqX = x0 + paneW / 2;
				const mcy = y0 + EQ_H + 6 + areaH / 2;
				const bob = idleBob(frame, ri + 3, 1.4);
				const px = (x: number) => mcx + (x - box.cx) * u;
				const py = (y: number) => mcy + (y - box.cy) * u + bob;
				const st = row.stages;

				// Which transition are we in? k = index of the latest stage whose `at` has passed.
				let k = 0;
				st.forEach((s, i) => {
					if (i > 0 && frame >= s.at) k = i;
				});
				const cur = st[k];
				const len = cur.len ?? 40;
				const t = k === 0 ? 1 : interpolate(frame, [cur.at, cur.at + len], [0, 1], {...clamp, easing: ease});
				const prevMol: Mol | undefined = k > 0 ? mols[k - 1] : undefined;
				const nextMol = mols[k];
				const prevById = new Map((prevMol?.atoms ?? []).map((a) => [a.id, a]));
				const nextById = new Map(nextMol.atoms.map((a) => [a.id, a]));

				// Stage-0 build-in: heavy atoms in order, then their H.
				const buildScale = (a: Atom, idx: number) => {
					if (k > 0 || prevById.size) return 1;
					const heavyIdx = nextMol.atoms.filter((q) => !q.parent).findIndex((q) => q.id === (a.parent ?? a.id));
					return popAt(frame, fps, st[0].at + Math.max(0, heavyIdx) * 3 + (a.parent ? 3 : 0) + (idx % 3));
				};

				const atoms: DrawAtom[] = [];
				nextMol.atoms.forEach((a, idx) => {
					const p = prevById.get(a.id);
					if (p) {
						atoms.push({id: a.id, el: a.el, x: px(p.x + (a.x - p.x) * t), y: py(p.y + (a.y - p.y) * t), s: 1, o: 1, text: a.charge ? `${a.el}${a.charge}` : undefined});
					} else {
						const s = k === 0 ? buildScale(a, idx) : interpolate(t, [0.35, 1], [0, 1], clamp);
						atoms.push({id: a.id, el: a.el, x: px(a.x), y: py(a.y), s, o: 1, text: a.charge ? `${a.el}${a.charge}` : undefined});
					}
				});
				(prevMol?.atoms ?? []).forEach((a) => {
					if (!nextById.has(a.id)) atoms.push({id: a.id, el: a.el, x: px(a.x), y: py(a.y), s: 1, o: interpolate(t, [0, 0.6], [1, 0], clamp)});
				});
				const pos = new Map(atoms.map((a) => [a.id, a]));

				const prevBonds = new Map((prevMol?.bonds ?? []).map((b) => [bondKey(b.a, b.b), b.order]));
				const nextBonds = new Map(nextMol.bonds.map((b) => [bondKey(b.a, b.b), b.order]));
				const keys = new Set([...prevBonds.keys(), ...nextBonds.keys()]);
				const glow = k > 0 ? interpolate(frame, [cur.at, cur.at + 10, cur.at + len + 30, cur.at + len + 60], [0, 1, 1, 0], clamp) : 0;
				const bonds: DrawBond[] = [];
				keys.forEach((key) => {
					const [a, b] = key.split('|');
					const A = pos.get(a), B = pos.get(b);
					if (!A || !B) return;
					const p = k > 0 ? prevBonds.get(key) ?? 0 : nextBonds.get(key) ?? 0;
					const q = nextBonds.get(key) ?? 0;
					const lo = Math.min(p, q), hi = Math.max(p, q);
					const lines: number[] = [];
					const colors: (string | undefined)[] = [];
					for (let j = 0; j < hi; j++) {
						const changing = j >= lo;
						const o = !changing ? 1 : p > q ? interpolate(t, [0, 0.7], [1, 0], clamp) : interpolate(t, [0.3, 1], [0, 1], clamp);
						lines.push(o * Math.min(A.s, B.s, 1) * Math.min(A.o, B.o));
						colors.push(changing && glow > 0.05 ? TOK.amber : undefined);
					}
					bonds.push({x1: A.x, y1: A.y, x2: B.x, y2: B.y, lines, colors, spread: 1, count: p + (q - p) * t});
				});

				const stageIn = (i: number) => (i === 0 ? fadeAt(frame, st[0].at, 12) : fadeAt(frame, st[i].at + (st[i].len ?? 40) * 0.5, 14));
				// The old stage's text stays until the new one's arrives, so there's no blank gap mid-move.
				const stageOut = (i: number) => (i + 1 < st.length ? 1 - fadeAt(frame, st[i + 1].at + (st[i + 1].len ?? 40) * 0.5 - 8, 8) : 1);
				const vis = (i: number) => stageIn(i) * stageOut(i);

				const tubeT = row.tube ? fadeAt(frame, row.tube.at, 50) : 0;

				return (
					<g key={ri}>
						{cols && ri > 0 && <line x1={x0} y1={top + 20} x2={x0} y2={H - 30} stroke={TOK.rule} strokeWidth={2} opacity={fadeAt(frame, st[0].at - 6, 12)} />}
						{/* Equation / caption for each stage (cross-fades) */}
						{st.map((s, i) =>
							s.eq ? (
								<g key={`eq${i}`} opacity={vis(i)}>
									<PartsText x={eqX} y={y0 + 28} parts={toParts(s.eq)} frame={frame} size={cols ? 21 : 23} accent={theme.accent} />
								</g>
							) : null,
						)}
						<g opacity={fadeAt(frame, st[0].at - 6, 12)}>
							<StageSlab id={`${ID}${ri}`} cx={mcx} cy={mcy + (box.h * u) / 2 + SLAB * 0.45} rx={Math.min(areaW / 2, (box.w * u) / 2 + 30)} />
						</g>

						{/* Halos behind the molecules */}
						{st.map((s, i) =>
							(s.highlights ?? []).map((h, hk) => {
								const pts = h.atoms.map((id) => pos.get(id)).filter(Boolean) as DrawAtom[];
								const o = vis(i) * (h.at !== undefined ? fadeAt(frame, h.at, 12) : 1);
								const breathe = !h.c || h.c === 'amber' ? 0.85 + 0.3 * idlePulse(frame) : 1;
								return <Halo key={`h${i}-${hk}`} pts={pts} r={u * 0.44} color={colorOf(h.c, TOK.amber)} opacity={o * breathe} />;
							}),
						)}

						<MolLayer id={ID} atoms={atoms} bonds={bonds} u={u} />

						{/* Bond tags (σ / π) */}
						{st.map((s, i) =>
							(s.bondTags ?? []).map((bt, bk) => {
								const A = pos.get(bt.a), B = pos.get(bt.b);
								if (!A || !B) return null;
								const side = bt.side ?? -1;
								const off = u * 0.42 * side;
								return (
									<text key={`bt${i}-${bk}`} x={(A.x + B.x) / 2} y={(A.y + B.y) / 2 + off + 7} textAnchor="middle" fill={inkOf(bt.c, theme.accent)} fontSize={Math.max(17, u * 0.3)} fontWeight={800} opacity={vis(i)}>
										{bt.t}
									</text>
								);
							}),
						)}

						{/* Labels and highlight chips */}
						{st.map((s, i) => (
							<g key={`lb${i}`} opacity={vis(i)}>
								{(s.labels ?? []).map((l, li) => {
									const A = l.atom ? pos.get(l.atom) : undefined;
									const x = A ? A.x + (l.dx ?? 0) * u : px(l.x ?? 0);
									const y = A ? A.y + (l.dy ?? 0) * u : py(l.y ?? 0);
									return (
										<text key={li} x={x} y={y} textAnchor="middle" fill={inkOf(l.c, TOK.ink)} fontSize={l.size ?? 20} fontWeight={800} opacity={l.at !== undefined ? fadeAt(frame, l.at, 10) : 1}>
											{l.t}
										</text>
									);
								})}
								{(s.highlights ?? []).map((h, hk) => {
									if (!h.label) return null;
									const pts = h.atoms.map((id) => pos.get(id)).filter(Boolean) as DrawAtom[];
									if (!pts.length) return null;
									const gx = pts.reduce((sum, q) => sum + q.x, 0) / pts.length;
									const above = (h.side ?? 'above') === 'above';
									const gy = above ? Math.min(...pts.map((q) => q.y)) - u * 0.95 : Math.max(...pts.map((q) => q.y)) + u * 1.05;
									return <Chip key={`c${hk}`} x={Math.max(x0 + 90, Math.min(x0 + paneW - 90 - tubeW, gx))} y={gy} text={h.label} color={inkOf(h.c ?? 'amber', TOK.amberInk)} size={16} opacity={h.at !== undefined ? fadeAt(frame, h.at + 4, 12) : 1} />;
								})}
								{s.cond && <Chip x={eqX} y={y0 + 56} text={s.cond} color={theme.accent} size={16} />}
							</g>
						))}

						{row.cond && <Chip x={eqX} y={y0 + 56} text={row.cond.t} color={inkOf(row.cond.c, theme.accent)} size={16} opacity={fadeAt(frame, row.cond.at, 12)} />}
						{row.tube && (
							<Tube x={x0 + paneW - 58} y={mcy + (box.h * u) / 2 + 4} h={Math.min(150, areaH * 0.85)} w={38} from={row.tube.from} to={row.tube.to} t={tubeT} label={row.tube.label} />
						)}
					</g>
				);
			})}
		</svg>
	);
};
