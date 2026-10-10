// DisorderKindsDiagram (bio12m8DisorderKinds): the three categories of genetic
// disorder, sorted by where the error sits.
//
//   chromosomal      a row of homologous chromosome pairs; one position holds
//                    three copies instead of two (trisomy, as in Down
//                    syndrome, trisomy 21). Wrong number or structure.
//   single gene      one chromosome pair with a single locus highlighted: one
//                    gene, one altered protein; predictable ratios.
//   multifactorial   several small marks across several chromosomes, plus
//                    environment factors feeding in; no simple ratios.
// The scene then narrows to the first two (they have the clearest cause and
// effect) and ends with the de novo point: not every genetic disorder is
// inherited, a new mutation can appear in an egg or sperm.
//
// Chromosomes are schematic (not a real karyotype). Beats are frames after
// `delay`. Hold: highlighted marks breathe.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idlePulse} from '../../diorama';
import {COL, Pill, fadeAt, popAt} from './shared';

export type DisorderKindsProps = {
	at?: {chromosomal?: number; single?: number; multifactorial?: number; focus?: number; deNovo?: number};
	examples?: {chromosomal?: string; single?: string; multifactorial?: string};
	delay?: number;
};

const W = 760;
const H = 530;
const COLW = 236;
const GAP = (W - 3 * COLW) / 4;
const cx0 = (k: number) => GAP + k * (COLW + GAP);
const TOP = 20;
const BOX_H = 380;
const CHROMO = '#9fb2c6';

/** A schematic chromosome: two rounded arms joined at a centromere. */
const Chromosome = ({x, y, h, color = CHROMO, marks = [], markColor = COL.red, markOpacity = 1}: {
	x: number; y: number; h: number; color?: string; marks?: number[]; markColor?: string; markOpacity?: number;
}) => {
	const w = 12;
	const c = h * 0.38;
	return (
		<g>
			<rect x={x - w / 2} y={y} width={w} height={c - 2} rx={w / 2} fill={color} stroke="rgba(0,0,0,0.18)" />
			<rect x={x - w / 2} y={y + c + 2} width={w} height={h - c - 2} rx={w / 2} fill={color} stroke="rgba(0,0,0,0.18)" />
			<rect x={x - 3} y={y + c - 3} width={6} height={6} rx={3} fill={color} />
			{marks.map((m, k) => (
				<rect key={k} x={x - w / 2 - 1} y={y + m * h - 2.5} width={w + 2} height={5} rx={2} fill={markColor} opacity={markOpacity} />
			))}
		</g>
	);
};

export const DisorderKindsDiagram = ({
	at = {},
	examples = {chromosomal: 'Down, Turner syndrome', single: "cystic fibrosis, Huntington's, haemophilia", multifactorial: 'type 2 diabetes'},
	delay = 62,
}: DisorderKindsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		chromosomal: at.chromosomal ?? 40,
		single: at.single ?? 240,
		multifactorial: at.multifactorial ?? 560,
		focus: at.focus ?? 800,
		deNovo: at.deNovo ?? 940,
	};
	const pulse = 0.6 + 0.4 * idlePulse(frame, 54);
	const focus = fadeAt(frame, t.focus, 18);
	const beats = [t.chromosomal, t.single, t.multifactorial];
	const titles = ['chromosomal', 'single gene (Mendelian)', 'multifactorial'];
	const whats = ['wrong number or structure of chromosomes', 'one gene mutated, one protein disrupted', 'many gene variants + environment'];
	const ratios = ['', 'predictable inheritance ratios', 'no simple ratios'];
	const exs = [examples.chromosomal, examples.single, examples.multifactorial];

	const art = (k: number) => {
		const x0 = cx0(k);
		const midX = x0 + COLW / 2;
		const y = TOP + 64;
		if (k === 0) {
			// Four pairs; the last position has three copies.
			const third = popAt(frame, fps, t.chromosomal + 50);
			const sizes = [96, 82, 70, 54];
			return (
				<g>
					{sizes.map((h, i) => {
						const px = x0 + 34 + i * 52;
						const trisomy = i === 3;
						return (
							<g key={i}>
								<Chromosome x={px - 8} y={y + (100 - h)} h={h} color={trisomy ? '#e6a39a' : CHROMO} />
								<Chromosome x={px + 8} y={y + (100 - h)} h={h} color={trisomy ? '#e6a39a' : CHROMO} />
								{trisomy && (
									<g opacity={Math.min(1, third)} transform={`translate(0,${(1 - Math.min(1, third)) * -20})`}>
										<Chromosome x={px + 24} y={y + (100 - h)} h={h} color={COL.red} />
									</g>
								)}
							</g>
						);
					})}
					<g opacity={fadeAt(frame, t.chromosomal + 70, 14)}>
						<text x={x0 + 34 + 3 * 52 + 8} y={y + 128} textAnchor="middle" fill={COL.red} fontSize={14} fontWeight={800}>3 copies</text>
					</g>
				</g>
			);
		}
		if (k === 1) {
			const hl = fadeAt(frame, t.single + 40, 14);
			return (
				<g>
					<Chromosome x={midX - 16} y={y} h={110} marks={[0.72]} markColor={COL.red} markOpacity={hl * pulse} />
					<Chromosome x={midX + 16} y={y} h={110} marks={[0.72]} markColor={theme.accent} markOpacity={hl} />
					<g opacity={hl}>
						<line x1={midX + 26} y1={y + 0.72 * 110} x2={midX + 62} y2={y + 0.72 * 110 - 22} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={midX + 66} y={y + 0.72 * 110 - 24} fill={TOK.ink} fontSize={14} fontWeight={800}>one gene</text>
					</g>
				</g>
			);
		}
		// multifactorial
		const hl = fadeAt(frame, t.multifactorial + 40, 14);
		const env = fadeAt(frame, t.multifactorial + 90, 14);
		const marks = [[0.2, 0.65], [0.45], [0.3, 0.8], [0.55]];
		return (
			<g>
				{marks.map((m, i) => (
					<Chromosome key={i} x={x0 + 30 + i * 28} y={y + 10} h={84 - i * 6} marks={m} markColor={COL.violet} markOpacity={hl * pulse} />
				))}
				<g opacity={env}>
					<text x={x0 + 150} y={y + 26} fill={TOK.ink} fontSize={13} fontWeight={800}>diet</text>
					<text x={x0 + 150} y={y + 52} fill={TOK.ink} fontSize={13} fontWeight={800}>activity</text>
					<text x={x0 + 150} y={y + 78} fill={TOK.ink} fontSize={13} fontWeight={800}>age</text>
					<text x={x0 + 140} y={y + 108} fill={COL.violet} fontSize={13} fontWeight={800}>environment</text>
					<line x1={x0 + 140} y1={y + 12} x2={x0 + 140} y2={y + 90} stroke={COL.violet} strokeWidth={2} />
				</g>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Three kinds of genetic disorder: chromosomal, single gene and multifactorial" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{[0, 1, 2].map((k) => {
				const p = Math.min(1, popAt(frame, fps, beats[k]));
				const dim = k === 2 ? 1 - 0.55 * focus : 1;
				const x0 = cx0(k);
				return (
					<g key={k} opacity={p * dim} transform={`translate(0,${(1 - p) * 14})`}>
						<rect x={x0} y={TOP} width={COLW} height={BOX_H} rx={16} fill="#ffffff" stroke={k < 2 && focus > 0 ? theme.accent : TOK.rule} strokeWidth={k < 2 ? 1.5 + 1.5 * focus : 1.5} />
						<text x={x0 + COLW / 2} y={TOP + 32} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>{titles[k]}</text>
						{art(k)}
						<foreignObject x={x0 + 12} y={TOP + 220} width={COLW - 24} height={150}>
							<div style={{fontFamily: FONT_DISPLAY, textAlign: 'center'}}>
								<div style={{fontSize: 16, fontWeight: 800, color: TOK.ink, lineHeight: 1.25}}>{whats[k]}</div>
								{ratios[k] && <div style={{fontSize: 14, fontWeight: 800, color: theme.accent, marginTop: 8}}>{ratios[k]}</div>}
								<div style={{fontSize: 14, fontWeight: 700, color: TOK.inkDim, marginTop: 8, lineHeight: 1.25}}>{exs[k]}</div>
							</div>
						</foreignObject>
					</g>
				);
			})}
			<g opacity={focus * (1 - fadeAt(frame, t.deNovo, 12))}>
				<text x={cx0(1) - GAP / 2} y={TOP + BOX_H + 34} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>clearest cause and effect: our focus</text>
			</g>
			<g opacity={fadeAt(frame, t.deNovo, 16)}>
				<Pill x={W / 2} y={TOP + BOX_H + 34} text="not always inherited: de novo mutations" color={TOK.amberInk} fill="#fff8ec" size={16} />
			</g>
			<text x={W / 2} y={H - 22} textAnchor="middle" fill={TOK.inkMute} fontSize={13} fontWeight={700} opacity={fadeAt(frame, t.chromosomal + 20, 14)}>chromosomes drawn schematically</text>
		</svg>
	);
};
