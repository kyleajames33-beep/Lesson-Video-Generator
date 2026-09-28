// CodonsDiagram — point mutations on a strip of DNA base tiles.
//
// Each row is a short coding-strand sequence standing on a stone ledge, read in
// triplets: codon brackets underneath and the amino acid each codon codes for.
// On its beat the row's mutation happens in front of the viewer: a base flips
// (substitution), a new base drops in and pushes the rest along (insertion) or
// a base drops out and the rest close up (deletion). The brackets regroup, and
// the amino acids are re-read from the genetic code. The outcome tag (silent /
// missense / nonsense / frameshift) is computed from that translation, never
// typed in, so the label can't disagree with the codons. An optional mini
// protein chain shows the consequence at protein scale.
//
// Props: rows[] {label, seq, op?, at, opAt?, firstCodon?, chain?}, footer[].
// All frames are relative to `delay` (the card reveal).

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {BLUE, BaseTile, GlossDefs, ROSE, StoneLedge, clamp, codonToAA, ease, fadeAt, popAt, textWidth} from './shared';

export type CodonOp = {type: 'sub' | 'ins' | 'del'; pos: number; base?: string};
export type CodonRow = {
	label: string;
	seq: string;
	op?: CodonOp;
	at: number;
	opAt?: number;
	/** Number of the first codon shown (prints codon numbers above the tiles). */
	firstCodon?: number;
	/** Draw a mini protein chain showing the effect at protein scale. */
	chain?: boolean;
	/** Override the computed outcome tag. */
	tag?: string;
};
export type CodonsProps = {rows: CodonRow[]; footer?: {text: string; at: number; amber?: boolean}[]; delay?: number};

const ID = 'b12m6cod';
const W = 760;
const H = 530;
const STOP_COLOR = '#3d4450';

type El = {id: number; base: string};

const applyOp = (seq: string, op?: CodonOp): {before: El[]; after: El[]} => {
	const before = seq.split('').map((base, id) => ({id, base}));
	if (!op) return {before, after: before};
	const after = before.map((e) => ({...e}));
	if (op.type === 'sub') after[op.pos] = {id: op.pos, base: op.base ?? 'A'};
	else if (op.type === 'ins') after.splice(op.pos, 0, {id: seq.length, base: op.base ?? 'A'});
	else after.splice(op.pos, 1);
	return {before, after};
};

/** Amino acids for a tile list: one entry per complete codon, "" after a STOP. */
const aasOf = (els: El[]) => {
	const out: string[] = [];
	let stopped = false;
	for (let i = 0; i + 3 <= els.length; i += 3) {
		if (stopped) {
			out.push('');
			continue;
		}
		const aa = codonToAA(els.slice(i, i + 3).map((e) => e.base).join(''));
		out.push(aa);
		if (aa === 'STOP') stopped = true;
	}
	return out;
};

const outcome = (row: CodonRow, a0: string[], a1: string[]) => {
	if (row.tag) return row.tag;
	const op = row.op;
	if (!op) return '';
	if (op.type !== 'sub') return 'Frameshift · codons after it change';
	const k = Math.floor(op.pos / 3);
	if (a1[k] === a0[k]) return `Silent · still ${a1[k]}`;
	if (a1[k] === 'STOP') return 'Nonsense · early STOP';
	return `Missense · ${a0[k]} → ${a1[k]}`;
};

export const CodonsDiagram = ({rows, footer = [], delay = 62}: CodonsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = rows.length;
	const footH = footer.length * 28 + (footer.length ? 8 : 0);
	const rowH = (H - 8 - footH) / n;
	const anyChain = rows.some((r) => r.chain);
	const maxTiles = Math.max(...rows.map((r) => r.seq.length + (r.op?.type === 'ins' ? 1 : 0)));
	const areaW = anyChain ? 400 : W - 40;
	// tile size so the longest row fits: n*(s+g) + codons*cg
	const g = 4;
	const cgF = 0.3;
	const s = Math.min(46, (areaW - (maxTiles / 3) * 12) / (maxTiles * (1 + 0.09) + (maxTiles / 3) * cgF));
	const cg = Math.max(8, s * cgF);
	const pitch = s + g;
	const beadR = Math.min(21, Math.max(17, s * 0.46));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Point mutations read codon by codon" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{aa: BLUE, changed: ROSE, stop: STOP_COLOR, grey: '#b9bec6'}} />
			{rows.map((row, ri) => {
				const top = 6 + ri * rowH;
				const {before, after} = applyOp(row.seq, row.op);
				const a0 = aasOf(before);
				const a1 = aasOf(after);
				const opAt = row.opAt ?? row.at + 36;
				const t = row.op ? ease(frame, opAt, opAt + 26) : 0;
				const k = row.op ? fadeAt(frame, opAt + 24, 12) : 0;
				const kOld = row.op ? 1 - fadeAt(frame, opAt + 12, 10) : 1;
				const appear = fadeAt(frame, row.at, 14);
				if (appear <= 0) return null;
				const len = Math.max(before.length, after.length);
				const stripW = len * pitch - g + (Math.ceil(len / 3) - 1) * cg;
				const stripX0 = anyChain ? 20 : (W - stripW) / 2;
				const xOf = (i: number) => stripX0 + i * pitch + Math.floor(i / 3) * cg + s / 2;
				const numbers = row.firstCodon !== undefined;
				const labelY = top + 20;
				const tight = rowH < 150;
				const tileY = labelY + (numbers ? 44 : tight ? 16 : 30) + s / 2;
				const beadY = tileY + s / 2 + (tight ? 10 : 18) + beadR;
				const tag = outcome(row, a0, a1);
				const tagW = textWidth(tag, 17) + 26;
				const opEl = row.op?.type === 'sub' ? row.op.pos : row.op?.type === 'ins' ? row.seq.length : -1;
				const rise = (1 - appear) * 14;

				// Tile positions: interpolate each element from its old index to its new one.
				const idxB = new Map(before.map((e, i) => [e.id, i]));
				const idxA = new Map(after.map((e, i) => [e.id, i]));
				const ids = Array.from(new Set([...before.map((e) => e.id), ...after.map((e) => e.id)]));

				const aaLayer = (els: El[], aas: string[], ref: string[] | null, opacity: number, key: string) =>
					opacity <= 0.01 ? null : (
						<g key={key} opacity={opacity}>
							{aas.map((aa, c) => {
								const x0 = stripX0 + c * 3 * pitch + c * cg;
								const x1 = x0 + 3 * pitch - g;
								const cx = (x0 + x1) / 2;
								const changed = ref !== null && aa !== ref[c];
								const name = aa === '' ? 'grey' : aa === 'STOP' ? 'stop' : changed ? 'changed' : 'aa';
								return (
									<g key={c}>
										{aa !== '' && (
											<g transform={`translate(0,${idleBob(frame, c + ri * 9, 1.1)})`}>
												<circle cx={cx} cy={beadY} r={beadR} fill={`url(#${ID}-g-${name})`} stroke="rgba(0,0,0,0.25)" />
												<text x={cx} y={beadY + 5.5} textAnchor="middle" fill="#fff" fontSize={aa === 'STOP' ? 13.5 : 15.5} fontWeight={800}>{aa}</text>
											</g>
										)}
									</g>
								);
							})}
							{/* a trailing base that no longer fills a codon */}
							{els.length % 3 !== 0 && (
								<text x={xOf(els.length - 1) + s * 0.1} y={tileY + s / 2 + 34} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>…</text>
							)}
						</g>
					);

				// Mini protein chain (9 beads; the mutation sits at bead 3).
				const chain = () => {
					if (!row.chain) return null;
					const m = 3;
					const cx0 = 470;
					const step = 29;
					const cy = tileY + 10;
					const kind = tag.split(' ')[0];
					return (
						<g opacity={fadeAt(frame, row.at + 10, 14)}>
							<text x={cx0 + 4 * step} y={cy + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>protein</text>
							{Array.from({length: 9}, (_, i) => {
								const x = cx0 + i * step;
								const y = cy + Math.sin(i * 0.9) * 7 + idleBob(frame, i + ri * 13, 1);
								let name = 'aa';
								let op = 1;
								if (kind === 'Missense' && i === m) name = k > 0.5 ? 'changed' : 'aa';
								if (kind === 'Frameshift' && i >= m) name = k > 0.5 ? 'changed' : 'aa';
								if (kind === 'Nonsense' && i >= m) op = interpolate(k, [0, 1], [1, 0.12], clamp);
								return (
									<g key={i}>
										{i > 0 && <line x1={x - step} y1={cy + Math.sin((i - 1) * 0.9) * 7} x2={x} y2={cy + Math.sin(i * 0.9) * 7} stroke={TOK.inkMute} strokeWidth={3} opacity={op} />}
										<circle cx={x} cy={y} r={11} fill={`url(#${ID}-g-${name})`} stroke="rgba(0,0,0,0.25)" opacity={op} />
									</g>
								);
							})}
							{kind === 'Nonsense' && (
								<text x={cx0 + m * step} y={cy - 20} textAnchor="middle" fill={STOP_COLOR} fontSize={15} fontWeight={800} opacity={k}>ends here</text>
							)}
						</g>
					);
				};

				return (
					<g key={ri} opacity={appear} transform={`translate(0,${rise})`}>
						<text x={stripX0 - (anyChain ? 0 : 0)} y={labelY} fill={theme.accent} fontSize={20} fontWeight={800}>{row.label}</text>
						{tag && (
							<g opacity={k} transform={`translate(${W - 12 - tagW / 2},${labelY - 7}) scale(${Math.min(1, popAt(frame, fps, opAt + 22))})`}>
								<rect x={-tagW / 2} y={-15} width={tagW} height={30} rx={15} fill="#ffffff" stroke={/^(Missense|Nonsense|Frameshift)/.test(tag) ? ROSE : BLUE} strokeWidth={2} />
								<text y={6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{tag}</text>
							</g>
						)}
						<StoneLedge id={`${ID}${ri}`} x={stripX0 - 12} y={tileY + s / 2 - 4} w={stripW + 24} d={12} />
						{numbers && Array.from({length: Math.floor(before.length / 3)}, (_, c) => {
							const x0 = stripX0 + c * 3 * pitch + c * cg;
							return (
								<text key={c} x={x0 + (3 * pitch - g) / 2} y={tileY - s / 2 - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>
									codon {row.firstCodon! + c}
								</text>
							);
						})}
						{aaLayer(before, a0, null, kOld, 'b')}
						{aaLayer(after, a1, a0, k, 'a')}
						{ids.map((id) => {
							const ib = idxB.get(id);
							const ia = idxA.get(id);
							const isOp = id === opEl || (row.op?.type === 'del' && id === row.op.pos);
							let x: number;
							let y = tileY;
							let opacity = 1;
							let base = (before.find((e) => e.id === id) ?? after.find((e) => e.id === id))!.base;
							let scaleY = 1;
							if (ib !== undefined && ia !== undefined) {
								x = xOf(ib) + (xOf(ia) - xOf(ib)) * t;
								if (row.op?.type === 'sub' && id === row.op.pos) {
									// flip the tile: squash to nothing, swap letter, open again
									scaleY = Math.abs(Math.cos(t * Math.PI));
									base = t < 0.5 ? before[ib].base : after[ia].base;
								}
							} else if (ia !== undefined) {
								// inserted: drops in from above
								x = xOf(ia);
								y = tileY - interpolate(t, [0, 1], [70, 0], clamp);
								opacity = interpolate(t, [0, 0.4], [0, 1], clamp);
							} else {
								// deleted: lifts out and fades
								x = xOf(ib!);
								y = tileY - interpolate(t, [0, 1], [0, 60], clamp);
								opacity = interpolate(t, [0.2, 0.9], [1, 0], clamp);
							}
							if (opacity <= 0.01) return null;
							const ring = isOp && t > 0.4 ? 0.6 + idlePulse(frame) * 0.4 : 0;
							return <BaseTile key={id} x={x} y={y} s={s} base={base} opacity={opacity} scaleY={scaleY} ring={row.op?.type === 'del' ? 0 : ring} />;
						})}
						{chain()}
					</g>
				);
			})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 28} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, f.at)}>
					{f.text}
				</text>
			))}
		</svg>
	);
};
