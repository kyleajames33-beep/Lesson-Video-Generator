// MoleculePanelsDiagram (chem12m7Molecules) — one to six organic molecules,
// each standing over a stone stage, built atom by atom as the narration names
// them. Config-driven: every structure comes from a skeleton string (see mol.tsx)
// with the hydrogens filled in from valency, so the drawings are always valid.
//
// Per panel, optionally:
//   name / sub       text under the stage; a name can assemble from parts
//                    (e.g. "3-" "methyl" "but" "-1-" "ene"), each on its own beat
//   formula          molecular formula computed from the drawn atoms
//   numbering        chain numbers appear inside the carbon balls, one by one
//   highlights       halo behind a group of atoms (functional-group spotlight,
//                    the C–OH carbon, the longest chain), with an optional label
//   tags             chips under the name (class, "b.p. 36 °C", …)
//   bar              a bar on a shared scale (boiling points, solubility)
//   tube             a test tube whose colour changes (dichromate, bromine water)
//
// Layout: "row" (side by side), "column" (stacked, text to the right) or
// "grid" (cols per row, optional rowTitles). All panels share one scale so
// sizes compare honestly (a longer chain looks longer).
//
// Hold: every molecule drifts gently (idleBob) and the amber highlight breathes
// (idlePulse), so the card is never frozen during the narration's tail.

import type {ReactElement} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse} from '../../diorama';
import {
	Chip, Halo, MolDefs, MolLayer, PartsText, SECOND, StageSlab, Tube, bboxOf, buildMol, fadeAt, formulaOf, popAt, toParts,
} from './mol';
import type {DrawAtom, DrawBond, MolSpec, NamePart} from './mol';

type Color = 'amber' | 'accent' | 'second' | 'dim' | 'ink';
type Tag = {t: string; at?: number; c?: Color};
export type Panel = {
	mol: MolSpec;
	at?: number;
	/** Fade the panel out at this frame (so another can take its cell). */
	until?: number;
	/** Grid cell to draw in (default: the panel's index). Panels can share a cell on different beats. */
	cell?: number;
	/** Frames between atoms popping in (0 = all at once). Default 3. */
	build?: number;
	name?: string | NamePart[];
	sub?: string | NamePart[];
	/** Show the computed molecular formula (true) or at a given frame. */
	formula?: boolean | number;
	numbering?: {atoms: string[]; at: number; step?: number};
	/** join: false draws separate halos (e.g. each carbon neighbour) instead of one joined band. */
	highlights?: {atoms: string[]; at: number; until?: number; c?: Color; label?: string; side?: 'above' | 'below'; join?: boolean}[];
	tags?: Tag[];
	bar?: {value: number; text: string; at?: number};
	tube?: {from: string; to: string; at: number; label?: string; toLabel?: string};
};
export type MoleculePanelsProps = {
	title?: string | NamePart[];
	titleAt?: number;
	/** Top lines that swap on beats (instead of a fixed title). */
	captions?: {t: string | NamePart[]; at: number; until?: number}[];
	panels: Panel[];
	layout?: 'row' | 'column' | 'grid';
	cols?: number;
	rowTitles?: {t: string; at?: number}[];
	bars?: {min: number; max: number; zeroLabel?: string};
	/** Largest grid unit in px (atom spacing). Default 64. */
	maxUnit?: number;
	/** One scale for all panels (default true: sizes compare honestly). */
	uniform?: boolean;
	nameSize?: number;
	delay?: number;
};

const ID = 'c12m7mp';
const W = 760;
const H = 530;

export const MoleculePanelsDiagram = ({
	title, titleAt = 0, captions, panels, layout = 'row', cols: colsProp, rowTitles, bars, maxUnit = 64, uniform = true, nameSize: nameSizeProp, delay = 62,
}: MoleculePanelsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const colorOf = (c: Color | undefined, fallback: string) =>
		c === 'amber' ? TOK.amber : c === 'accent' ? theme.accent : c === 'second' ? SECOND : c === 'dim' ? TOK.inkDim : c === 'ink' ? TOK.ink : fallback;
	const inkOf = (c: Color | undefined) => (c === 'amber' ? TOK.amberInk : colorOf(c, theme.accent));

	const n = Math.max(...panels.map((p, i) => (p.cell ?? i) + 1));
	const cols = layout === 'row' ? n : layout === 'column' ? 1 : colsProp ?? 2;
	const rows = Math.ceil(n / cols);
	const textRight = layout === 'column' && n > 1;
	const top = title || captions ? 58 : 8;
	const rowTitleH = rowTitles ? 26 : 0;
	const cellW = W / cols;
	const cellH = (H - top) / rows;

	const mols = panels.map((p) => buildMol(p.mol));
	const boxes = mols.map((m) => bboxOf(m.atoms));
	const hasSub = (p: Panel) => Boolean(p.sub || p.formula);
	const TEXT_W = 250;
	// Type scales with the cell: one hero molecule gets big type, six small panels get compact type.
	const nameSize = nameSizeProp ?? (textRight ? 22 : Math.max(20, Math.min(32, cellW / 14, cellH / 9)));
	const chipSize = n === 1 ? 17 : 15;
	const chipW = (t: string) => [...t].length * chipSize * 0.56 + 22;
	const tagMaxW = textRight ? TEXT_W : cellW - 16;
	// Chips wrap onto extra lines when they don't fit the cell.
	const tagLines = (tags: Tag[] = []) => {
		const out: Tag[][] = [];
		let line: Tag[] = [], w = 0;
		for (const t of tags) {
			const tw = chipW(t.t) + 8;
			if (line.length && w + tw > tagMaxW) {
				out.push(line);
				line = [];
				w = 0;
			}
			line.push(t);
			w += tw;
		}
		if (line.length) out.push(line);
		return out;
	};
	const textHOf = (p: Panel) =>
		(p.name ? nameSize + 10 : 0) + (hasSub(p) ? 26 : 0) + tagLines(p.tags).length * 34 + (p.bar ? 50 : 0);
	const textH = Math.max(...panels.map(textHOf));
	const SLAB = 46; // molecule bottom → below the stage
	const tubeW = panels.some((p) => p.tube) ? 70 : 0;
	const inner = cellH - rowTitleH - 8;
	const areaW = textRight ? cellW - TEXT_W - 30 - tubeW : cellW - 24 - tubeW;
	const areaH = textRight ? inner - SLAB : inner - SLAB - textH;
	const fitU = (b: {w: number; h: number}) => Math.min(maxUnit, areaW / Math.max(b.w, 0.5), areaH / Math.max(b.h, 0.5));
	const uAll = Math.min(...boxes.map(fitU));
	const rowMaxMolH = Array.from({length: rows}, (_, r) =>
		Math.max(0, ...panels.map((p, i) => (Math.floor((p.cell ?? i) / cols) === r ? boxes[i].h * (uniform ? uAll : fitU(boxes[i])) : 0))),
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Organic molecule structures" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<MolDefs id={ID} />
			{title && <PartsText x={W / 2} y={36} parts={toParts(title, titleAt)} frame={frame} size={26} accent={theme.accent} />}
			{captions?.map((c, k) => (
				<g key={`cap${k}`} opacity={fadeAt(frame, c.at, 12) * (c.until !== undefined ? 1 - fadeAt(frame, c.until, 10) : 1)}>
					<PartsText x={W / 2} y={36} parts={toParts(c.t)} frame={frame} size={26} accent={theme.accent} />
				</g>
			))}

			{rowTitles?.map((rt, r) => (
				<text key={r} x={W / 2} y={top + r * cellH + 18} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} letterSpacing="0.04em" opacity={fadeAt(frame, rt.at ?? 0)}>
					{rt.t}
				</text>
			))}

			{panels.map((p, i) => {
				const cell = p.cell ?? i;
				const col = cell % cols, row = Math.floor(cell / cols);
				const cx0 = col * cellW, cy0 = top + row * cellH + rowTitleH;
				const at = p.at ?? 0;
				const shown = fadeAt(frame, at, 10) * (p.until !== undefined ? 1 - fadeAt(frame, p.until, 12) : 1);
				if (shown <= 0.001) return null;
				const mol = mols[i];
				const b = boxes[i];
				const u = uniform ? uAll : fitU(b);
				// The molecule, its stage and its text are one block, centred in the cell.
				const molH = b.h * u;
				// Every molecule in a grid row stands on a stage at the same height.
				const rowMolH = textRight ? molH : rowMaxMolH[row];
				const blockH = rowMolH + SLAB + (textRight ? 0 : textH);
				const blockTop = cy0 + 4 + Math.max(0, (inner - blockH) / 2);
				const mcx = textRight ? cx0 + 20 + areaW / 2 : cx0 + cellW / 2 - tubeW / 2;
				const mcy = blockTop + rowMolH - molH / 2;
				const slabY = blockTop + rowMolH + 10;
				const bob = idleBob(frame, i, 1.6) * fadeAt(frame, at + 40, 30);
				const px = (x: number) => mcx + (x - b.cx) * u;
				const py = (y: number) => mcy + (y - b.cy) * u + bob;

				// Build order: heavy atoms in written order, each H just after its parent.
				const step = p.build ?? 3;
				const heavy = mol.atoms.filter((a) => !a.parent);
				const appear = new Map<string, number>();
				heavy.forEach((a, k) => appear.set(a.id, at + k * step));
				mol.atoms.filter((a) => a.parent).forEach((a) => {
					const k = Number(a.id.slice(a.id.lastIndexOf('h') + 1));
					appear.set(a.id, (appear.get(a.parent!) ?? at) + step * 0.7 + k * Math.max(1, step * 0.4));
				});
				const scaleOf = (id: string) => popAt(frame, fps, appear.get(id) ?? at);
				const numIdx = new Map((p.numbering?.atoms ?? []).map((id, k) => [id, k]));

				const drawAtoms: DrawAtom[] = mol.atoms.map((a) => {
					const k = numIdx.get(a.id);
					const numOn = k !== undefined && p.numbering ? fadeAt(frame, p.numbering.at + k * (p.numbering.step ?? 8), 6) > 0.5 : false;
					return {id: a.id, el: a.el, x: px(a.x), y: py(a.y), s: scaleOf(a.id), o: 1, text: numOn ? String((k ?? 0) + 1) : a.charge ? `${a.el}${a.charge}` : undefined};
				});
				const pos = new Map(drawAtoms.map((a) => [a.id, a]));
				const drawBonds: DrawBond[] = mol.bonds.map((bd) => {
					const A = pos.get(bd.a)!, B = pos.get(bd.b)!;
					const o = Math.min(A.s, B.s, 1);
					return {x1: A.x, y1: A.y, x2: B.x, y2: B.y, lines: Array(bd.order).fill(o), spread: 1};
				});

				// Text block
				const tx = textRight ? cx0 + 20 + areaW + 30 + tubeW : cx0 + cellW / 2;
				const anchor = textRight ? 'start' : 'middle';
				let ty = textRight ? cy0 + 4 + inner / 2 - textHOf(p) / 2 + nameSize * 0.8 : slabY + 36 + nameSize * 0.8;
				const lines: ReactElement[] = [];
				if (p.name) {
					lines.push(<PartsText key="name" x={tx} y={ty} parts={toParts(p.name, at + 6)} frame={frame} size={nameSize} accent={theme.accent} anchor={anchor} />);
					ty += nameSize + 10;
				}
				if (hasSub(p)) {
					const subParts: NamePart[] = [...toParts(p.sub, at + 10)];
					if (p.formula) subParts.push({t: (p.sub ? '  ' : '') + formulaOf(mol), at: typeof p.formula === 'number' ? p.formula : at + 10, c: 'dim'});
					lines.push(<PartsText key="sub" x={tx} y={ty} parts={subParts} frame={frame} size={18} accent={theme.accent} anchor={anchor} weight={700} />);
					ty += 26;
				}
				tagLines(p.tags).forEach((line, li) => {
					const tagY = ty + 4;
					const total = line.reduce((sum, t) => sum + chipW(t.t), 0) + (line.length - 1) * 8;
					let x = textRight ? tx : tx - total / 2;
					line.forEach((t, k) => {
						lines.push(
							<Chip key={`t${li}-${k}`} x={x} y={tagY} text={t.t} color={inkOf(t.c)} size={chipSize} anchor="start" opacity={fadeAt(frame, t.at ?? at + 20)} />,
						);
						x += chipW(t.t) + 8;
					});
					ty += 34;
				});
				if (p.bar && bars) {
					const bw = textRight ? TEXT_W - 20 : Math.min(cellW - 40, 200);
					const bx = textRight ? tx : tx - bw / 2;
					const frac = (p.bar.value - bars.min) / (bars.max - bars.min);
					const grow = fadeAt(frame, p.bar.at ?? at + 20, 24);
					lines.push(
						<g key="bar" opacity={fadeAt(frame, p.bar.at ?? at + 20, 6)}>
							<rect x={bx} y={ty - 4} width={bw} height={14} rx={7} fill="rgba(0,0,0,0.07)" />
							<rect x={bx} y={ty - 4} width={Math.max(0, bw * frac * grow)} height={14} rx={7} fill={theme.accent} />
							<text x={bx + bw / 2} y={ty + 30} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>
								{p.bar.text}
							</text>
						</g>,
					);
					ty += 50;
				}

				return (
					<g key={i} opacity={shown}>
						<StageSlab id={`${ID}${i}`} cx={mcx} cy={slabY} rx={Math.min((textRight ? areaW : cellW - 20) / 2, (b.w * u) / 2 + 26)} />
						{p.highlights?.map((h, k) => {
							const o = fadeAt(frame, h.at, 12) * (h.until !== undefined ? 1 - fadeAt(frame, h.until, 12) : 1);
							const pts = h.atoms.map((id) => pos.get(id)).filter(Boolean) as DrawAtom[];
							const col = colorOf(h.c, TOK.amber);
							const breathe = h.c === 'amber' || !h.c ? 0.85 + 0.3 * idlePulse(frame) : 1;
							return h.join === false ? (
								<g key={k}>{pts.map((q, qi) => <Halo key={qi} pts={[q]} r={u * 0.44} color={col} opacity={o * breathe} />)}</g>
							) : (
								<Halo key={k} pts={pts} r={u * 0.44} color={col} opacity={o * breathe} />
							);
						})}
						<MolLayer id={ID} atoms={drawAtoms} bonds={drawBonds} u={u} />
						{p.highlights?.map((h, k) => {
							if (!h.label) return null;
							const o = fadeAt(frame, h.at + 6, 12) * (h.until !== undefined ? 1 - fadeAt(frame, h.until, 12) : 1);
							const pts = h.atoms.map((id) => pos.get(id)).filter(Boolean) as DrawAtom[];
							if (!pts.length) return null;
							const gx = pts.reduce((s, q) => s + q.x, 0) / pts.length;
							const above = (h.side ?? 'above') === 'above';
							const gy = above ? Math.min(...pts.map((q) => q.y)) - u * 0.95 : Math.max(...pts.map((q) => q.y)) + u * 0.95;
							const clampX = Math.max(cx0 + 70, Math.min(cx0 + cellW - 70, gx));
							return <Chip key={`hl${k}`} x={clampX} y={gy} text={h.label} color={inkOf(h.c ?? 'amber')} size={chipSize} opacity={o} />;
						})}
						{p.tube && (
							<Tube
								x={textRight ? cx0 + 20 + areaW + tubeW / 2 + 10 : cx0 + cellW - tubeW / 2 - 14}
								y={slabY - 4}
								h={Math.min(150, areaH * 0.8)}
								w={36}
								from={p.tube.from}
								to={p.tube.to}
								t={fadeAt(frame, p.tube.at, 45)}
							/>
						)}
						{lines}
					</g>
				);
			})}
		</svg>
	);
};
