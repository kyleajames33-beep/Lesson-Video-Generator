import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, Heading, INK, INK_SOFT, lerp, Overlay, prog, S, MC, PImg, P_CELL, PP, TT,
} from './shared';
import {usePNuc} from '../bio-m5-b05a/pnuc';
import {usePlates} from '../bio-m5-b05a/cd';
// Quality fix (6 Nov 2026): the memory icons are the painted chromosome plates (MC) and the painted cell plate (uniform
// scale), replacing the coded bars and outline cells.
const CELL_AR = 1438 / 1477;
const Cell: React.FC<{cx: number; cy: number; rx: number; o?: number}> = ({cx, cy, rx, o = 1}) => <PImg p={P_CELL} x={cx - rx} y={cy - rx * CELL_AR} w={2 * rx} h={2 * rx * CELL_AR} o={o} />;

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
	usePNuc();
	usePlates([P_CELL.src]);
	const a1 = prog(f, c.l1 + 8, 40), a2 = prog(f, c.sis + 10, 40);
	const j = prog(f, c.l3 + 20, 40);
	return (
		<>
			<Heading items={[[0, 'To keep it straight']]} size={60} />
			{/* line 1 */}
			<Overlay>
				<g opacity={prog(f, c.l1, 14)}>
					<MC x={lerp(160, 105, a1)} y={290} kind="L" a={PP} dup={1} s={0.62} beads={0} />
					<MC x={lerp(225, 285, a1)} y={290} kind="L" a={TT} dup={1} s={0.62} beads={0} />
				</g>
				<g opacity={prog(f, c.l2, 14)}>
					<MC x={195} y={540} kind="L" a={PP} dup={1} sep={lerp(0, 46, a2)} s={0.62} beads={0} />
				</g>
				<g opacity={prog(f, c.l3, 14)}>
					<Cell cx={lerp(150, 230, j)} cy={790} rx={66} o={1 - j} />
					<Cell cx={lerp(310, 230, j)} cy={790} rx={66} o={1 - j} />
					<Cell cx={230} cy={790} rx={lerp(66, 96, j)} o={j} />
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
						<Cell cx={48} cy={50} rx={44} />
						<Cell cx={118} cy={56} rx={30} />
					</svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK, lineHeight: 1.05}}>Next: how DNA is arranged in different cells</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 19. Key notes ----------
// Quality fix (6 Nov 2026): seven dense sentences became seven short lines at 38 px, plus a framed memory aid.
export const NOTES = [
	'Meiosis: DNA copied once, then two divisions.',
	'One diploid cell (two sets) makes four haploid cells (one set).',
	'Prophase I: homologous pairs pair up; crossing over swaps pieces.',
	'Metaphase I: pairs line up either way round (independent assortment).',
	'These give new combinations of alleles, not new alleles.',
	'Human: 46, then 23 in each cell. Fertilisation: 23 + 23 = 46.',
	'n pairs give 2 to the power n combinations (assortment only).',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={68} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 200, width: 1180}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 8} style={{display: 'flex', gap: 20, marginBottom: 24}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 17, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 38, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 1350, top: 230, width: 470, boxSizing: 'border-box', padding: '26px 30px', borderRadius: 24, border: `4px solid ${AMBER}`, background: '#fffdf8', boxShadow: '0 14px 34px rgba(60,45,20,0.10)'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK, lineHeight: 1}}>Remember</div>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.1, marginTop: 14}}>Meiosis I splits the pairs.</div>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.1, marginTop: 10}}>Meiosis II splits the sisters.</div>
			<div style={{height: 3, background: '#eadfc8', margin: '22px 0 18px'}} />
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 32, color: INK, lineHeight: 1.25}}>Mitosis: one division, two identical cells.</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 32, color: INK, lineHeight: 1.25, marginTop: 8}}>Meiosis: two divisions, four cells, usually different.</div>
		</Enter>
		<Enter at={150} style={{position: 'absolute', left: 110, top: 900}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
