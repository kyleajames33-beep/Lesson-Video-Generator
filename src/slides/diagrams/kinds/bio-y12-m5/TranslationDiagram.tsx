// TranslationDiagram — mRNA, ribosome, tRNA and the growing polypeptide.
//
// Codons are props; each tRNA's anticodon is computed as the complement of its
// codon (A–U, C–G), and each amino acid name comes from the props, which use
// the standard genetic code (AUG Met, GCU Ala, UUC Phe, AAA Lys, UGG Trp,
// GAU Asp). The ribosome covers two codons at a time.
//
// mode 'read'      mRNA leaves the nucleus (the DNA stays inside), the two
//                  ribosome subunits clamp onto it in the cytoplasm, and it
//                  slides along reading one codon (three bases) at a time.
// mode 'trna'      one tRNA up close: a specific amino acid at one end, an
//                  anticodon at the other; it docks on its matching codon.
// mode 'order'     tRNAs dock codon by codon, so amino acid 1 comes from codon
//                  1, amino acid 2 from codon 2, …; then one mRNA base changes
//                  (`mutate`) and the amino acid it codes for changes with it.
// mode 'elongate'  the ribosome joins neighbouring amino acids with peptide
//                  bonds (amber flash), shifts one codon, the next tRNA comes
//                  in, and the chain lengthens: polypeptide elongation.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Ball, CORAL, GlossDefs, PAIR_RNA, PURPLE, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type Codon = {c: string; aa: string};
export type TranslationProps = {
	mode?: 'read' | 'trna' | 'order' | 'elongate';
	codons?: Codon[];
	/** 'order': change base `base` of codon `codon` to `to`, which then codes for `aa`. */
	mutate?: {codon: number; base: number; to: string; aa: string};
	/** Frames (after `delay`) at which each codon is reached / each tRNA docks. */
	steps?: number[];
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5tl';
const W = 760, H = 530;
const T = 26; // base tile
const CW = 3 * (T + 2) + 14; // codon pitch
const MY = 392; // mRNA tile row

const complement = (codon: string) => codon.split('').map((b) => PAIR_RNA[b] ?? '?').join('');

const BaseRow = ({x, y, seq, fill, color = '#ffffff', ring = 0}: {x: number; y: number; seq: string; fill: string; color?: string; ring?: number}) => (
	<g>
		{seq.split('').map((b, k) => {
			const bx = x + (k - 1) * (T + 2);
			return (
				<g key={k}>
					<rect x={bx - T / 2} y={y - T / 2} width={T} height={T} rx={5} fill={fill} stroke="rgba(0,0,0,0.22)" />
					<text x={bx} y={y + 6} textAnchor="middle" fill={color} fontSize={16} fontWeight={800}>{b}</text>
				</g>
			);
		})}
		{ring > 0 && <rect x={x - 1.5 * (T + 2) - 5} y={y - T / 2 - 5} width={3 * (T + 2) + 8} height={T + 10} rx={8} fill="none" stroke={TOK.amber} strokeWidth={2.5 + ring} />}
	</g>
);

/** A tRNA: anticodon at the bottom (centred on x, y), stem + loops, amino acid on top. */
const TRna = ({id, x, y, anti, aa, s = 1, opacity = 1, aaShown = true, aaColor = 'aa', hideAa = false}: {id: string; x: number; y: number; anti: string; aa: string; s?: number; opacity?: number; aaShown?: boolean; aaColor?: string; hideAa?: boolean}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M -16 -18 L -16 -52 Q -46 -58 -44 -74 Q -40 -92 -18 -84 L -12 -96 L -12 -118 L 12 -118 L 12 -96 L 18 -84 Q 40 -92 44 -74 Q 46 -58 16 -52 L 16 -18 Z" fill={`url(#${id}-g-trna)`} stroke="rgba(0,0,0,0.22)" />
		<line x1={0} y1={-118} x2={0} y2={-134} stroke="#9a948a" strokeWidth={4} />
		<BaseRow x={0} y={0} seq={anti} fill={CORAL} />
		{!hideAa && aaShown && <Ball id={id} name={aaColor} x={0} y={-152} r={20} label={aa} labelSize={13} />}
	</g>
);

export const TranslationDiagram = ({mode = 'read', codons = [], mutate, steps = [], at = {}, delay = 62}: TranslationProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = codons.length;
	const X0 = 380 - ((n - 1) * CW) / 2;
	const cx = (i: number) => X0 + i * CW;
	const mut = mutate && frame > (at.mutate ?? 1e9) ? ease(frame, at.mutate ?? 0, (at.mutate ?? 0) + 24) : 0;
	const codonSeq = (i: number) => (mutate && i === mutate.codon && mut > 0.5 ? codons[i].c.split('').map((b, k) => (k === mutate.base ? mutate.to : b)).join('') : codons[i].c);
	const aaOf = (i: number) => (mutate && i === mutate.codon && mut > 0.5 ? mutate.aa : codons[i].aa);
	const stepAt = (i: number) => steps[i] ?? 60 + i * 70;
	const settled = frame > stepAt(n - 1) + 90;

	const mrna = (enter = 1) => (
		<g transform={`translate(${(1 - enter) * -500},0)`}>
			<line x1={cx(0) - CW / 2 - 20} y1={MY + T / 2 + 8} x2={cx(n - 1) + CW / 2 + 20} y2={MY + T / 2 + 8} stroke="#9a948a" strokeWidth={6} strokeLinecap="round" />
			{codons.map((_, i) => (
				<BaseRow key={i} x={cx(i)} y={MY} seq={codonSeq(i)} fill={theme.accent} ring={mutate && i === mutate.codon ? mut * (1 + idlePulse(frame)) : 0} />
			))}
			<text x={cx(0) - CW / 2 - 28} y={MY + 6} textAnchor="end" fill={theme.accent} fontSize={16} fontWeight={800}>mRNA</text>
		</g>
	);

	const ribosome = (pos: number, clamp = 1, o = 0.9) => {
		const x = lerp(cx(0), cx(n - 1), n > 1 ? pos / (n - 1) : 0) - CW / 2;
		return (
			<g opacity={o}>
				<ellipse cx={x} cy={MY - 70 - (1 - clamp) * 80} rx={CW * 1.2} ry={86} fill={`url(#${ID}-g-ribo)`} stroke="rgba(0,0,0,0.18)" />
				<ellipse cx={x} cy={MY + 34 + (1 - clamp) * 60} rx={CW * 1.1} ry={34} fill={`url(#${ID}-g-ribo)`} stroke="rgba(0,0,0,0.18)" />
			</g>
		);
	};

	// Amino-acid chain: residues 0..k, newest at `head`, earlier ones trailing up-left.
	const chainPos = (j: number, newest: number, headX: number, headY: number) => ({x: headX - (newest - j) * 44, y: headY - (newest - j) * 16 + (settled ? idleBob(frame, j, 1.2) : 0)});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Translation: ${mode}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{ribo: '#cbbfa8', trna: '#e9d8c7', aa: PURPLE, aaNew: TOK.amber}} />
			{mode === 'read' && (() => {
				const tExit = at.exit ?? 20, tAttach = at.attach ?? 80, tRule = at.rule ?? 800, tDna = at.dna ?? 700, tCyto = at.cytoplasm ?? 900;
				const enter = ease(frame, tExit, tExit + 60);
				const clampT = ease(frame, tAttach, tAttach + 30);
				let pos = 0;
				for (let i = 0; i < n; i++) if (frame >= stepAt(i)) pos = i + ease(frame, stepAt(i), stepAt(i) + 24) - 1;
				pos = Math.max(0, pos);
				const reading = Math.round(pos);
				return (
					<g>
						{/* nucleus corner with the DNA kept inside */}
						<g opacity={fadeAt(frame, 0)}>
							<circle cx={40} cy={40} r={150} fill="#e7eef6" stroke="#9fb2c6" strokeWidth={4} />
							<path d="M -10 60 C 20 20, 40 100, 70 60 S 110 40, 120 20" fill="none" stroke={theme.accent} strokeWidth={5} opacity={0.7} />
							<path d="M -10 72 C 20 32, 40 112, 70 72 S 110 52, 120 32" fill="none" stroke={theme.accent} strokeWidth={5} opacity={0.7} />
							<text x={60} y={128} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>nucleus</text>
							<text x={60} y={148} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tDna)}>DNA stays here</text>
						</g>
						<text x={560} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tCyto)}>cytoplasm</text>
						{ribosome(pos + 1, clampT, fadeAt(frame, tAttach - 10))}
						{mrna(enter)}
						{/* codon being read */}
						{frame >= stepAt(0) && (
							<g>
								<rect x={cx(reading) - CW / 2 + 2} y={MY - T / 2 - 8} width={CW - 4} height={T + 16} rx={9} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame, 30)} />
								<text x={cx(reading)} y={MY + 60} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>codon {reading + 1}</text>
							</g>
						)}
						{codons.map((_, i) => (
							<path key={i} d={`M ${cx(i) - CW / 2 + 6} ${MY + 26} L ${cx(i) - CW / 2 + 6} ${MY + 32} L ${cx(i) + CW / 2 - 6} ${MY + 32} L ${cx(i) + CW / 2 - 6} ${MY + 26}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} opacity={fadeAt(frame, stepAt(0) + i * 6)} />
						))}
						<text x={cx(Math.min(n - 1, reading + 1)) - CW / 2} y={MY - 170} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tAttach + 20)}>ribosome</text>
						<text x={380} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>ribosome reads mRNA, in codons, in the cytoplasm</text>
					</g>
				);
			})()}

			{mode === 'trna' && (() => {
				const tIn = at.trna ?? 20, tAa = at.aminoacid ?? 120, tAnti = at.anticodon ?? 220, tDock = at.dock ?? 320, tJobs = at.jobs ?? 500, tRule = at.rule ?? 800;
				const dock = ease(frame, tDock, tDock + 50);
				const k = 0;
				const bx = lerp(250, cx(k), dock), by = lerp(250, MY - T - 6, dock);
				return (
					<g>
						{mrna(1)}
						<g opacity={fadeAt(frame, tDock)}>
							<rect x={cx(k) - CW / 2 + 2} y={MY - T / 2 - 8} width={CW - 4} height={T + 16} rx={9} fill="none" stroke={TOK.amber} strokeWidth={3 + (frame > tDock + 50 ? idlePulse(frame, 30) : 0)} />
							<text x={cx(k)} y={MY + 60} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>codon</text>
						</g>
						<TRna id={ID} x={bx} y={by + (frame > tDock + 60 ? idleBob(frame, 1, 1.2) : 0)} anti={complement(codons[k].c)} aa={codons[k].aa} s={lerp(1.35, 1, dock)} opacity={popAt(frame, fps, tIn)} />
						{/* pairing ticks once docked */}
						{codons[k].c.split('').map((_, j) => (
							<line key={j} x1={cx(k) + (j - 1) * (T + 2)} y1={MY - T / 2 - 1} x2={cx(k) + (j - 1) * (T + 2)} y2={MY - T - 6 + T / 2 + 1} stroke={TOK.inkDim} strokeWidth={2.5} strokeDasharray="2 2" opacity={fadeAt(frame, tDock + 40)} />
						))}
						{/* labels, pointing at the big tRNA before it docks */}
						<g opacity={fadeAt(frame, tAa) * (1 - dock)}>
							<text x={380} y={50} fill={PURPLE} fontSize={17} fontWeight={800}>one specific amino acid</text>
							<line x1={376} y1={45} x2={290} y2={46} stroke={PURPLE} strokeWidth={2} />
						</g>
						<g opacity={fadeAt(frame, tAnti) * (1 - dock)}>
							<text x={380} y={256} fill={CORAL} fontSize={17} fontWeight={800}>anticodon: 3 bases</text>
							<line x1={376} y1={251} x2={310} y2={251} stroke={CORAL} strokeWidth={2} />
						</g>
						<g opacity={fadeAt(frame, tDock + 60)}>
							<text x={cx(k) + CW} y={MY - 150} fill={TOK.inkDim} fontSize={16} fontWeight={800}>anticodon {complement(codons[k].c)} pairs with codon {codons[k].c}</text>
						</g>
						<g opacity={fadeAt(frame, tJobs)}>
							<Pill x={200} y={H - 44} text="mRNA: carries codons" color={theme.accent} fill={theme.soft} size={16} />
							<Pill x={540} y={H - 44} text="tRNA: anticodon + amino acid" color={CORAL} fill="#fff4f1" size={16} />
						</g>
						<text x={380} y={H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>never swap them</text>
					</g>
				);
			})()}

			{(mode === 'order' || mode === 'elongate') && (() => {
				const tRule = at.rule ?? 900;
				// tRNA i docks at stepAt(i); in 'elongate' the bond to residue i forms 26 frames later.
				let cur = -1;
				for (let i = 0; i < n; i++) if (frame >= stepAt(i)) cur = i;
				const pos = cur < 0 ? 0 : Math.max(0, cur - 1 + ease(frame, stepAt(cur), stepAt(cur) + 24));
				const bondT = (i: number) => (i === 0 ? 1 : ease(frame, stepAt(i) + 26, stepAt(i) + 40));
				const showRibo = mode === 'elongate';
				return (
					<g>
						{/* P site = codon cur−1, A site = codon cur: centred on their junction */}
						{showRibo && ribosome(Math.max(1, pos), 1, fadeAt(frame, 0))}
						{mrna(1)}
						{codons.map((_, i) => (
							<text key={i} x={cx(i)} y={MY + 52} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, stepAt(0) - 20)}>{mode === 'order' ? `codon ${i + 1}` : ''}</text>
						))}
						{codons.map((cd, i) => {
							const d = stepAt(i);
							const t = ease(frame, d - 24, d + 6);
							if (t <= 0) return null;
							// Only two tRNAs sit on the ribosome at once: tRNA i leaves when tRNA i+2 arrives.
							const nxt = steps[i + 2] ?? (i + 2 < n ? stepAt(i + 2) : 1e9);
							const leave = ease(frame, nxt - 10, nxt + 20);
							const x = cx(i) + leave * 60, y = MY - T - 6 - (1 - t) * 90 - leave * 80;
							// elongate: once its amino acid has joined the chain, the tRNA no longer carries it.
							const given = mode === 'elongate' && (i === 0 ? cur >= 1 : bondT(i) >= 0.5);
							return <TRna key={i} id={ID} x={x} y={y} anti={complement(codonSeq(i))} aa={aaOf(i)} s={0.78} opacity={Math.min(1, t * 1.5) * (1 - leave)} hideAa={given} />;
						})}
						{/* chain (elongate): residues handed to the newest tRNA */}
						{mode === 'elongate' && cur >= 1 && (() => {
							const headX = cx(cur), headY = MY - T - 6 - 0.78 * 152;
							const upTo = bondT(cur) >= 0.5 ? cur : cur - 1;
							const hx = bondT(cur) >= 0.5 ? headX : cx(cur - 1);
							const hy = headY;
							const pts = Array.from({length: upTo + 1}, (_, j) => chainPos(j, upTo, hx, hy));
							return (
								<g>
									{pts.slice(1).map((p, j) => (
										<line key={j} x1={pts[j].x} y1={pts[j].y} x2={p.x} y2={p.y} stroke={TOK.inkDim} strokeWidth={4} />
									))}
									{pts.map((p, j) => <Ball key={j} id={ID} name="aa" x={p.x} y={p.y} r={16} label={codons[j].aa} labelSize={11} />)}
									{/* bond flash */}
									{bondT(cur) > 0 && bondT(cur) < 1 && (
										<circle cx={(cx(cur - 1) + cx(cur)) / 2} cy={headY} r={26} fill="none" stroke={TOK.amber} strokeWidth={4} opacity={1 - bondT(cur)} />
									)}
								</g>
							);
						})()}
						{mode === 'elongate' && (
							<g>
								<text x={380} y={36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, stepAt(1) + 30)}>peptide bonds join the amino acids</text>
								<Pill x={380} y={70} text={`polypeptide: ${Math.max(0, (() => { let c = 0; for (let i = 0; i < n; i++) if (i === 0 ? frame >= stepAt(0) : bondT(i) >= 0.5) c = i + 1; return c; })())} amino acids`} color={PURPLE} size={16} opacity={fadeAt(frame, at.elongation ?? stepAt(2))} />
							</g>
						)}
						{/* order: amino acid sequence read-out above */}
						{mode === 'order' && (
							<g>
								{codons.map((_, i) => (
									<g key={i} opacity={fadeAt(frame, stepAt(i) + 20)}>
										<text x={cx(i)} y={56} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{i + 1}</text>
										<Ball id={ID} name={mutate && i === mutate.codon && mut > 0.5 ? 'aaNew' : 'aa'} x={cx(i)} y={88} r={22} label={aaOf(i)} labelSize={13} />
										{i > 0 && <line x1={cx(i - 1) + 24} y1={88} x2={cx(i) - 24} y2={88} stroke={TOK.inkDim} strokeWidth={4} />}
									</g>
								))}
								<text x={380} y={28} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, stepAt(0) + 20)}>amino acid order</text>
								<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>order of codons decides order of amino acids</text>
								{mutate && (
									<text x={cx(mutate.codon)} y={140} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={mut}>
										{codons[mutate.codon].c} → {codonSeq(mutate.codon)}: {codons[mutate.codon].aa} → {mutate.aa}
									</text>
								)}
							</g>
						)}
						{mode === 'elongate' && <text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>position, bond, repeat: the polypeptide grows</text>}
					</g>
				);
			})()}
		</svg>
	);
};
