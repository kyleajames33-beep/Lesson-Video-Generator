// NucleusExportDiagram — mRNA is a portable, temporary copy.
//
// The DNA (the master copy) stays inside the nucleus. Transcription makes mRNA
// copies of one gene; they leave through nuclear pores into the cytoplasm and
// reach ribosomes, where each copy is used to build protein, so many protein
// copies come from one gene. A zoom on one mRNA shows it read in three-base
// codons. The DNA is shielded (it never leaves); mRNA does not replace it.
//
// Props: `at` (frames after `delay`): stays / copy / out / protect / many /
// codons / replace.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {GlossDefs, PURPLE, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type NucleusExportProps = {
	codons?: string[];
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5nuc';
const W = 760, H = 530;
const NX = 190, NY = 250, NR = 150;

export const NucleusExportDiagram = ({codons = ['AUG', 'GCU', 'UUC', 'AAA'], at = {}, delay = 62}: NucleusExportProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tStay = at.stays ?? 20, tCopy = at.copy ?? 150, tOut = at.out ?? 250, tProt = at.protect ?? 400, tMany = at.many ?? 500, tCod = at.codons ?? 700, tRep = at.replace ?? 850;
	const copies = [0, 1, 2];
	const ribo = [{x: 500, y: 130}, {x: 600, y: 250}, {x: 500, y: 370}];
	const mrnaPos = (k: number) => {
		const t0 = (k === 0 ? tCopy : tMany) + k * 30;
		const made = ease(frame, t0, t0 + 30);
		const go = ease(frame, (k === 0 ? tOut : tMany + 40) + k * 30, (k === 0 ? tOut : tMany + 40) + k * 30 + 60);
		const start = {x: NX + 20, y: NY - 30 + k * 30};
		const pore = {x: NX + NR, y: NY - 40 + k * 40};
		const end = {x: ribo[k].x - 50, y: ribo[k].y + 10};
		const x = go < 0.5 ? lerp(start.x, pore.x, go * 2) : lerp(pore.x, end.x, (go - 0.5) * 2);
		const y = go < 0.5 ? lerp(start.y, pore.y, go * 2) : lerp(pore.y, end.y, (go - 0.5) * 2);
		return {x, y, made, go};
	};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="DNA stays in the nucleus; mRNA copies carry the message out to ribosomes" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{ribo: '#cbbfa8', prot: PURPLE}} />
			{/* nucleus */}
			<g opacity={fadeAt(frame, 0)}>
				<circle cx={NX} cy={NY} r={NR} fill="#e7eef6" stroke="#9fb2c6" strokeWidth={5} strokeDasharray="60 10" />
				<text x={NX} y={NY - NR - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>nucleus</text>
				{/* the DNA: master copy */}
				{[0, 1].map((s) => (
					<path key={s} d={`M ${NX - 110} ${NY - 60 + s * 10} C ${NX - 60} ${NY - 110 + s * 10}, ${NX - 20} ${NY - 10 + s * 10}, ${NX + 40} ${NY - 60 + s * 10} S ${NX + 90} ${NY - 20 + s * 10}, ${NX + 100} ${NY - 60 + s * 10}`} fill="none" stroke={theme.accent} strokeWidth={6} opacity={0.85} />
				))}
				<rect x={NX - 30} y={NY - 84} width={60} height={46} rx={8} fill="none" stroke={theme.accent} strokeWidth={2.5} strokeDasharray="5 4" />
				<text x={NX} y={NY - 94} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>gene</text>
			</g>
			<g opacity={fadeAt(frame, tStay)}>
				<text x={NX} y={NY + 50} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>DNA: the master copy stays here</text>
			</g>
			{frame > tProt && <circle cx={NX} cy={NY} r={NR + 10 + idlePulse(frame) * 4} fill="none" stroke={TOK.amber} strokeWidth={3} opacity={fadeAt(frame, tProt)} />}
			{/* ribosomes in the cytoplasm */}
			<g opacity={fadeAt(frame, tOut)}>
				<text x={730} y={420} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>cytoplasm</text>
				{ribo.map((r, k) => (
					<g key={k} opacity={k === 0 ? 1 : fadeAt(frame, tMany)}>
						<ellipse cx={r.x} cy={r.y - 6} rx={30} ry={22} fill={`url(#${ID}-g-ribo)`} stroke="rgba(0,0,0,0.2)" />
						<ellipse cx={r.x} cy={r.y + 18} rx={26} ry={11} fill={`url(#${ID}-g-ribo)`} stroke="rgba(0,0,0,0.2)" />
					</g>
				))}
			</g>
			{/* mRNA copies */}
			{copies.map((k) => {
				const m = mrnaPos(k);
				if (m.made <= 0) return null;
				const len = 70 * m.made;
				return (
					<g key={k}>
						<path d={`M ${m.x} ${m.y} q ${len / 4} -10 ${len / 2} 0 t ${len / 2} 0`} fill="none" stroke={TOK.amberInk} strokeWidth={5} strokeLinecap="round" />
						{/* protein built at the ribosome */}
						{m.go >= 1 && Array.from({length: 4}, (_, j) => {
							const p = popAt(frame, fps, (k === 0 ? tOut + 70 : tMany + 110) + k * 30 + j * 10);
							return <circle key={j} cx={ribo[k].x + 40 + j * 16} cy={ribo[k].y - 30 - j * 8 + idleBob(frame, j + k * 5, 1)} r={7 * p} fill={`url(#${ID}-g-prot)`} />;
						})}
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tCopy)}>
				<text x={360} y={36} fill={TOK.amberInk} fontSize={16} fontWeight={800}>mRNA: a temporary, portable copy</text>
			</g>
			<g opacity={popAt(frame, fps, tMany + 60)}>
				<Pill x={570} y={78} text="many copies → many proteins from one gene" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			{/* codons zoom */}
			<g opacity={fadeAt(frame, tCod)}>
				<rect x={30} y={432} width={36 * 3 * codons.length + 28} height={58} rx={12} fill="#ffffff" stroke={TOK.rule} />
				{codons.map((c, i) => (
					<g key={i}>
						{c.split('').map((b, j) => (
							<g key={j}>
								<rect x={44 + i * 108 + j * 32} y={446} width={28} height={28} rx={6} fill={theme.accent} />
								<text x={58 + i * 108 + j * 32} y={466} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{b}</text>
							</g>
						))}
						<path d={`M ${44 + i * 108} ${480} L ${44 + i * 108} ${486} L ${136 + i * 108} ${486} L ${136 + i * 108} ${480}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} />
					</g>
				))}
				<text x={44} y={424} fill={TOK.inkDim} fontSize={15} fontWeight={800}>read in codons: 3 bases each</text>
			</g>
			<text x={380} y={H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tRep)}>a working copy: mRNA does not replace the DNA</text>
		</svg>
	);
};
