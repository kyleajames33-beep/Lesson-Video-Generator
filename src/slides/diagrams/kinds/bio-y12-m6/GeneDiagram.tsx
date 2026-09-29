// GeneDiagram — where in a gene a mutation lands, and what that changes.
//
// Modes:
//   regions   A gene on a stone ledge: enhancer, promoter, then exons and
//             introns. Three outputs below it: the normal transcripts, a
//             promoter/enhancer hit (the same mRNA, but less of it: expression
//             changes, the protein doesn't), and a splice-site hit (an exon is
//             skipped, so the mRNA and protein change although no codon in the
//             exons was touched). Exon colours carry through to the mRNA, so
//             the skipped exon is visible.
//   position  One protein chain per row, the change placed on its beat: a
//             frameshift near the start changes most of the chain after it, one
//             near the end only the last few, a missense in the active site
//             swaps one amino acid in the region that matters. Affected beads
//             are computed from the position. A chip chain (DNA → … →
//             phenotype) can close the scene.
// Frames relative to `delay`.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, GREEN, GlossDefs, PURPLE, ROSE, SLATE, StoneLedge, fadeAt, popAt, textWidth} from './shared';

type PosRow = {label: string; type: 'none' | 'shift' | 'missense'; pos?: number; at: number; tag: string; site?: [number, number]};
export type GeneProps = {
	mode: 'regions' | 'position';
	// regions
	beats?: {gene?: number; normal?: number; promoter?: number; splice?: number};
	// position
	rows?: PosRow[];
	length?: number;
	chain?: {items: string[]; at: number; step?: number};
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6gene';
const W = 760;
const H = 530;
const EXON = [BLUE, GREEN, PURPLE];

const Tag = ({x, y, text, amber, o, frame, color}: {x: number; y: number; text: string; amber?: boolean; o: number; frame: number; color?: string}) => {
	const w = textWidth(text, 16) + 22;
	return (
		<g opacity={o} transform={`translate(${x},${y})`}>
			<rect x={-w / 2} y={-15} width={w} height={30} rx={15} fill={amber ? '#fff6e6' : '#fff'} stroke={amber ? AMBER : color ?? TOK.inkMute} strokeWidth={amber ? 2.5 + idlePulse(frame) : 2} />
			<text y={5.5} textAnchor="middle" fill={amber ? TOK.amberInk : TOK.ink} fontSize={16} fontWeight={800}>{text}</text>
		</g>
	);
};

export const GeneDiagram = (props: GeneProps) => {
	const {mode, delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const footer = props.footer && (
		<text x={W / 2} y={H - 12} textAnchor="middle" fill={props.footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, props.footer.at)}>{props.footer.text}</text>
	);

	if (mode === 'regions') {
		const bt = props.beats ?? {};
		const gAt = bt.gene ?? 0;
		const nAt = bt.normal ?? gAt + 40;
		const pAt = bt.promoter ?? 360;
		const sAt = bt.splice ?? 555;
		// gene layout (x ranges)
		const GY = 92;
		const segs = [
			{key: 'enh', label: 'enhancer', x0: 30, x1: 108, color: '#b9c3cf'},
			{key: 'pro', label: 'promoter', x0: 146, x1: 236, color: '#9aa8b8'},
			{key: 'e1', label: 'exon 1', x0: 236, x1: 342, color: EXON[0]},
			{key: 'i1', label: '', x0: 342, x1: 398, color: '#e2e4e8'},
			{key: 'e2', label: 'exon 2', x0: 398, x1: 504, color: EXON[1]},
			{key: 'i2', label: '', x0: 504, x1: 560, color: '#e2e4e8'},
			{key: 'e3', label: 'exon 3', x0: 560, x1: 666, color: EXON[2]},
		];
		const splX = 504; // exon 2 / intron 2 boundary: the splice site
		const cols = [
			{title: 'Normal', x: 128, at: nAt, n: 3, exons: [0, 1, 2], hit: null as null | 'pro' | 'spl', tag: 'normal output', color: SLATE},
			{title: 'Promoter or enhancer hit', x: 380, at: pAt, n: 1, exons: [0, 1, 2], hit: 'pro' as const, tag: 'less mRNA, same protein', color: ROSE},
			{title: 'Splice-site hit', x: 632, at: sAt, n: 3, exons: [0, 2], hit: 'spl' as const, tag: 'exon 2 skipped', color: ROSE},
		];
		const mrna = (x: number, y: number, exons: number[], k: number) => {
			const w = 36;
			const total = exons.length * w;
			return (
				<g key={k} transform={`translate(0,${idleBob(frame, k, 0.9)})`}>
					<rect x={x - total / 2 + 2} y={y + 3} width={total} height={16} rx={8} fill="rgba(40,36,30,0.16)" />
					{exons.map((e, j) => (
						<rect key={j} x={x - total / 2 + j * w} y={y} width={w} height={16} rx={j === 0 || j === exons.length - 1 ? 8 : 2} fill={EXON[e]} stroke="rgba(0,0,0,0.2)" />
					))}
				</g>
			);
		};
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mutations in regulatory DNA change expression" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<g opacity={fadeAt(frame, gAt)}>
					<text x={30} y={34} fill={theme.accent} fontSize={21} fontWeight={800}>One gene and its controls</text>
					<StoneLedge id={`${ID}l`} x={18} y={GY + 20} w={W - 36} d={14} />
					<line x1={20} y1={GY} x2={W - 20} y2={GY} stroke={SLATE} strokeWidth={6} strokeLinecap="round" />
					{segs.map((s) => (
						<g key={s.key}>
							<rect x={s.x0} y={GY - 16} width={s.x1 - s.x0} height={32} rx={s.key.startsWith('i') ? 4 : 8} fill={s.color} stroke="rgba(0,0,0,0.2)" />
							<rect x={s.x0 + 3} y={GY - 13} width={s.x1 - s.x0 - 6} height={9} rx={4} fill="#fff" opacity={0.28} />
							{s.label && (
								<text x={(s.x0 + s.x1) / 2} y={GY + 5.5} textAnchor="middle" fill={s.key.startsWith('e') && s.key !== 'enh' ? '#fff' : TOK.ink} fontSize={15} fontWeight={800}>{s.label}</text>
							)}
						</g>
					))}
					<text x={(342 + 398) / 2} y={GY - 24} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>intron</text>
					<text x={(504 + 560) / 2} y={GY - 24} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>intron</text>
					<text x={(30 + 236) / 2} y={GY + 58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>non-coding controls</text>
					<text x={(236 + 666) / 2} y={GY + 58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>transcribed region</text>
				</g>
				{/* mutation marks on the gene: small pulsing marks on the top edge */}
				{[
					{x: 69, at: pAt},
					{x: 191, at: pAt},
					{x: splX, at: sAt},
				].map((m, i) => (
					<g key={i} opacity={fadeAt(frame, m.at)}>
						<circle cx={m.x} cy={GY - 17} r={10 + idlePulse(frame) * 3} fill="none" stroke={AMBER} strokeWidth={2.5} />
						<circle cx={m.x} cy={GY - 17} r={6} fill={AMBER} stroke="rgba(0,0,0,0.25)" />
					</g>
				))}
				{cols.map((c, i) => {
					const o = fadeAt(frame, c.at, 14);
					const fromX = c.hit === 'pro' ? 191 : c.hit === 'spl' ? splX : 300;
					return (
						<g key={i} opacity={o}>
							<path d={`M ${fromX} ${GY + 70} Q ${fromX} ${GY + 100} ${c.x} ${200}`} fill="none" stroke={c.hit ? AMBER : TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" />
							<text x={c.x} y={228} textAnchor="middle" fill={c.hit ? TOK.amberInk : theme.accent} fontSize={18} fontWeight={800}>{c.title}</text>
							<text x={c.x} y={262} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>mRNA</text>
							{Array.from({length: c.n}, (_, k) => mrna(c.x, 276 + k * 30, c.exons, k + i * 5))}
							{Array.from({length: 3 - c.n}, (_, k) => (
								<rect key={`g${k}`} x={c.x - 54} y={276 + (c.n + k) * 30} width={108} height={16} rx={8} fill="none" stroke={TOK.inkMute} strokeOpacity={0.4} strokeDasharray="4 5" />
							))}
							<text x={c.x} y={390} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>protein</text>
							{/* protein: a bead chain, one bead per exon colour block */}
							{c.exons.flatMap((e, j) => [0, 1, 2].map((q) => ({e, idx: j * 3 + q}))).map(({e, idx}, k, arr) => {
								const x = c.x - ((arr.length - 1) * 17) / 2 + idx * 17;
								const y = 412 + Math.sin(idx * 0.9) * 5 + idleBob(frame, idx + i * 11, 0.8);
								return <circle key={k} cx={x} cy={y} r={8.5} fill={`url(#${ID}-g-e${e})`} stroke="rgba(0,0,0,0.25)" opacity={c.n === 1 ? 0.95 : 1} />;
							})}
							<Tag x={c.x} y={452} text={c.tag} amber={!!c.hit && c.hit === 'spl'} o={fadeAt(frame, c.at + 30)} frame={frame} color={c.color} />
						</g>
					);
				})}
				<GlossDefs id={ID} colors={{e0: EXON[0], e1: EXON[1], e2: EXON[2]}} />
				{footer}
			</svg>
		);
	}

	// ── position ─────────────────────────────────────────────────────────────
	const rows = props.rows ?? [];
	const L = props.length ?? 24;
	const chain = props.chain;
	const chainH = chain ? 64 : 0;
	const rh = (H - 10 - chainH - (props.footer ? 30 : 0)) / Math.max(1, rows.length);
	const X0 = 40;
	const step = (W - 80) / (L - 1);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The same kind of change matters more or less depending on where it is" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{aa: BLUE, ch: ROSE, site: '#f3e3b5'}} />
			{rows.map((r, i) => {
				const top = 6 + i * rh;
				const y = top + rh * 0.62;
				const o = fadeAt(frame, r.at, 14);
				if (o <= 0) return null;
				const k = fadeAt(frame, r.at + 26, 20);
				const pos = r.pos ?? 0;
				const affected = (j: number) => (r.type === 'shift' ? j >= pos : r.type === 'missense' ? j === pos : false);
				const count = Array.from({length: L}, (_, j) => affected(j)).filter(Boolean).length;
				const tw = textWidth(r.tag, 16) + 22;
				return (
					<g key={i} opacity={o}>
						<text x={X0 - 12} y={top + 24} fill={theme.accent} fontSize={19} fontWeight={800}>{r.label}</text>
						<Tag x={W - 20 - tw / 2} y={top + 18} text={r.tag} o={k} frame={frame} amber={false} color={count > L / 2 || r.type === 'missense' ? ROSE : BLUE} />
						<StoneLedge id={`${ID}r${i}`} x={X0 - 22} y={y + 10} w={W - 36} d={10} />
						{r.site && (
							<rect x={X0 + r.site[0] * step - 13} y={y - 16} width={(r.site[1] - r.site[0]) * step + 26} height={32} rx={16} fill={`url(#${ID}-g-site)`} stroke={AMBER} strokeWidth={2 + idlePulse(frame)} />
						)}
						{r.site && <text x={X0 + ((r.site[0] + r.site[1]) / 2) * step} y={y + 36} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>active site</text>}
						{Array.from({length: L}, (_, j) => {
							const x = X0 + j * step;
							const yy = y + idleBob(frame, j + i * 30, 0.9);
							const ch = affected(j) && k > (j - pos) / L;
							return (
								<g key={j}>
									{j > 0 && <line x1={x - step} y1={y} x2={x} y2={y} stroke={TOK.inkMute} strokeWidth={3} />}
									<circle cx={x} cy={yy} r={9.5} fill={`url(#${ID}-g-${ch ? 'ch' : 'aa'})`} stroke="rgba(0,0,0,0.25)" />
								</g>
							);
						})}
						{r.pos !== undefined && (
							<g opacity={k}>
								<path d={`M ${X0 + pos * step} ${y - 30} l -7 -12 h 14 z`} fill={AMBER} />
							</g>
						)}
					</g>
				);
			})}
			{chain && (() => {
				const ws = chain.items.map((c) => textWidth(c, 16) + 22);
				const gap = 22;
				const total = ws.reduce((s, w) => s + w, 0) + gap * (ws.length - 1);
				let x = W / 2 - total / 2;
				const y = H - 26 - (props.footer ? 30 : 0);
				return chain.items.map((c, i) => {
					const cx = x + ws[i] / 2;
					x += ws[i] + gap;
					const p = Math.min(1, popAt(frame, fps, chain.at + i * (chain.step ?? 14)));
					return (
						<g key={i} opacity={p}>
							{i > 0 && <text x={cx - ws[i] / 2 - gap / 2} y={y + 6} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>→</text>}
							<Tag x={cx} y={y} text={c} amber={i === chain.items.length - 1} o={1} frame={frame} />
						</g>
					);
				});
			})()}
			{footer}
		</svg>
	);
};
