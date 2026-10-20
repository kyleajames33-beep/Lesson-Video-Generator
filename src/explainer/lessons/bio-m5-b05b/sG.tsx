import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, Heading, INK, INK_SOFT, lerp, Overlay, prog, S,
} from './shared';
import {HCell, HChrom} from '../bio-m5-b05a/cd';
// Revision 7: the memory icons are the clean coded model (large chromosomes, outline cells).
const Cell: React.FC<{cx: number; cy: number; rx: number; ry?: number; o?: number}> = ({cx, cy, rx, ry, o = 1}) => <HCell cx={cx} cy={cy} rx={rx} ry={ry} o={o} sw={3.5} />;

const Underlined: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return <span style={{backgroundImage: `linear-gradient(${AMBER}, ${AMBER})`, backgroundSize: `${p * 100}% 7px`, backgroundPosition: '0 96%', backgroundRepeat: 'no-repeat', paddingBottom: 4}}>{children}</span>;
};
const Clock: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<g opacity={p} transform={`translate(${x},${y})`}>
			<circle r={44} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={6} />
			<line x1={0} y1={0} x2={0} y2={-28} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" transform={`rotate(${(f - at) * 6})`} />
			<line x1={0} y1={0} x2={18} y2={0} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};

// ---------- 18. Memory and handoff ----------
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		l1: 'meiosis one splits', hom: 'homologous pairs', halves: 'halves the number', l2: 'Meiosis two', sis: 'sister chromatids', doubled: 'two halves of each', l3: 'Then fertilisation', restores: 'restores the number', next: 'Next',
	});
	const a1 = prog(f, c.l1 + 8, 40), a2 = prog(f, c.sis + 10, 40);
	const j = prog(f, c.l3 + 20, 40);
	return (
		<>
			<Heading items={[[0, 'To keep it straight']]} size={60} />
			{/* line 1 */}
			<Overlay>
				<g opacity={prog(f, c.l1, 14)}>
					<HChrom x={lerp(165, 110, a1)} y={290} len={120} w={24} col="P" dup={1} />
					<HChrom x={lerp(215, 275, a1)} y={290} len={120} w={24} col="T" dup={1} />
				</g>
				<g opacity={prog(f, c.l2, 14)}>
					<HChrom x={lerp(190, 120, a2)} y={540} len={120} w={24} col="P" dup={1} sep={lerp(0, 40, a2)} />
				</g>
				<g opacity={prog(f, c.l3, 14)}>
					<Cell cx={150} cy={780} rx={70} ry={52} />
					<Cell cx={310} cy={780} rx={70} ry={52} />
					<Cell cx={lerp(150, 230, j)} cy={780} rx={lerp(70, 100, j)} ry={lerp(52, 74, j)} o={j} />
				</g>
			</Overlay>
			<Enter at={c.l1} style={{position: 'absolute', left: 380, top: 220}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: AMBER_INK, lineHeight: 1.05}}>Meiosis I splits the <Underlined at={c.hom}>homologous</Underlined> pairs</div>
			</Enter>
			<Enter at={c.halves} style={{position: 'absolute', left: 380, top: 320}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK_SOFT}}>so the number halves</div>
			</Enter>
			<Enter at={c.l2} style={{position: 'absolute', left: 380, top: 470}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: AMBER_INK, lineHeight: 1.05}}>Meiosis II splits the <Underlined at={c.sis}>sister</Underlined> chromatids</div>
			</Enter>
			<Enter at={c.doubled} style={{position: 'absolute', left: 380, top: 570}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK_SOFT}}>the two halves of each doubled chromosome</div>
			</Enter>
			<Enter at={c.l3} style={{position: 'absolute', left: 380, top: 730}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: AMBER_INK, lineHeight: 1.05}}>Fertilisation restores it</div>
			</Enter>
			<Overlay><Clock x={1790} y={860} at={c.next + 10} /></Overlay>
			<Enter at={c.next} style={{position: 'absolute', left: 1040, top: 790}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 22, background: '#fffdf8', border: `4px solid ${AMBER_INK}`, borderRadius: 28, padding: '10px 28px 14px', maxWidth: 650}}>
					<svg width={150} height={100} viewBox="0 0 150 100">
						<HCell cx={44} cy={50} rx={40} ry={32} sw={3} />
						<circle cx={44} cy={50} r={14} fill="rgba(226,214,238,0.62)" stroke="#5b4d70" strokeWidth={3} />
						<HCell cx={112} cy={50} rx={30} ry={24} sw={3} />
						<path d="M92,50 q6,-10 12,0 t12,0 t12,0" fill="none" stroke="#6b6358" strokeWidth={3.5} strokeLinecap="round" />
					</svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK, lineHeight: 1.05}}>Next: how DNA is arranged in different cells</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 19. Key notes ----------
export const NOTES = [
	'Meiosis: one diploid cell (two sets) makes four haploid cells (one set each). DNA is copied once, then the cell divides twice.',
	'Prophase I: homologous pairs pair up, and crossing over swaps pieces between non-sister chromatids.',
	'Metaphase I: pairs line up either way round (independent assortment). Both give new combinations of alleles, not new alleles.',
	'Meiosis I separates homologous pairs, so the number halves. Meiosis II separates sister chromatids.',
	'Human: 46, then 23 in each of two cells, then 23 in each of four. Fertilisation: 23 + 23 = 46.',
	'n pairs give 2 to the power n combinations from assortment alone (crossing over ignored).',
	'Mitosis: one division, two identical cells. Meiosis: two divisions, four cells, half the number, usually different.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={68} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 190, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 20, marginBottom: 20}}>
					<div style={{flex: 'none', width: 18, height: 18, marginTop: 15, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 36, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={150} style={{position: 'absolute', left: 110, top: 880}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
