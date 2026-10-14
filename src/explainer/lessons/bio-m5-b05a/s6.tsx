import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bracket, CH, Chrom, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, Overlay, PenTap, Pill, PLUM, prog, S, TEALC, CELL_FILL, CELL_LINE, DrawPath, Line,
} from './shared';

const KEYW = '#5b4d70';

// ---------- 9. Memory and handoff ----------
const Icon: React.FC<{k: 'I' | 'P' | 'M' | 'A' | 'T'; x: number; y: number; at: number}> = ({k, x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0) return null;
	const t = f - at;
	return (
		<g transform={`translate(${x},${y}) scale(${0.7 + 0.3 * p})`} opacity={p}>
			{k === 'I' ? (
				<g>
					<rect x={-52} y={-52} width={72} height={92} rx={8} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
					<rect x={-24} y={-34} width={72} height={92} rx={8} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
					<line x1={-8} x2={30} y1={-8} y2={-8} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<line x1={-8} x2={30} y1={14} y2={14} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<line x1={-8} x2={14} y1={36} y2={36} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
				</g>
			) : null}
			{k === 'P' ? <Chrom x={0} y={0} kind="L" color={PLUM} dup={1} coil={Math.min(1, t / 40)} s={0.8} /> : null}
			{k === 'M' ? (
				<g>
					<line x1={0} x2={0} y1={-92} y2={92} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" strokeLinecap="round" />
					{[-66, -22, 22, 66].map((yy, i) => <Chrom key={i} x={0} y={yy} kind={CH[i].kind} color={CH[i].color} dup={1} coil={1} s={0.4} />)}
				</g>
			) : null}
			{k === 'A' ? (
				<g>
					<Chrom x={0} y={0} kind="L" color={PLUM} dup={1} coil={1} s={0.62} xa={-14 - 34 * Math.min(1, t / 30)} xb={14 + 34 * Math.min(1, t / 30)} sep={1} bend={1} />
					<path d="M-70,0 L-100,0 M-86,-12 L-100,0 L-86,12" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<path d="M70,0 L100,0 M86,-12 L100,0 L86,12" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : null}
			{k === 'T' ? (
				<g>
					{[-62, 62].map(xx => (
						<g key={xx}>
							<circle cx={xx} cy={0} r={52} fill="rgba(226,214,238,0.62)" stroke="#5b4d70" strokeWidth={5} strokeDasharray="22 9" />
							<Chrom x={xx - 18} y={0} kind="L" color={PLUM} dup={0} s={0.34} />
							<Chrom x={xx + 18} y={0} kind="S" color={TEALC} dup={0} s={0.34} />
						</g>
					))}
				</g>
			) : null}
		</g>
	);
};
const LX = [330, 645, 960, 1275, 1590];
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
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('memory'), {
		keep: 'To keep the order', I: ['I', 1], P: 'P M', M: 'M A', A: 'A T', T: ['T', 1], iis: 'I is interphase', copied: 'where the DNA is copied', pro: 'Prophase coils', meta: 'metaphase lines', ana: 'anaphase pulls', telo: 'telophase finishes',
		cyto: 'Cytokinesis then', count: 'count the centromeres', not: 'not the chromatids', next: 'Next', one: 'one set',
	} as Record<string, string | [string, number]>);
	const letter = (ch: string, at: number, i: number) => {
		const p = prog(f, at, 14);
		return (
			<div key={ch} style={{position: 'absolute', left: LX[i] - 90, top: 196, width: 180, textAlign: 'center', opacity: p, transform: `scale(${0.6 + 0.4 * p}) translateY(${(1 - p) * -30}px)`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 190, lineHeight: 1, color: i === 0 ? '#9a8f7a' : AMBER_INK}}>{ch}</div>
		);
	};
	const kw = (t: string, at: number, i: number, color = KEYW) => (
		<Enter key={t} at={at} style={{position: 'absolute', left: LX[i] - 150, top: 536, width: 300, textAlign: 'center'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color}}>{t}</div>
		</Enter>
	);
	return (
		<>
			<Heading items={[[0, 'Keeping the order']]} size={64} />
			{letter('I', c.I, 0)}{letter('P', c.P, 1)}{letter('M', c.M, 2)}{letter('A', c.A, 3)}{letter('T', c.T, 4)}
			<Overlay>
				<Icon k="I" x={LX[0]} y={450} at={c.iis} />
				<Icon k="P" x={LX[1]} y={450} at={c.pro} />
				<Icon k="M" x={LX[2]} y={450} at={c.meta} />
				<Icon k="A" x={LX[3]} y={450} at={c.ana} />
				<Icon k="T" x={LX[4]} y={450} at={c.telo} />
				<Bracket x1={LX[1] - 110} x2={LX[4] + 110} y={636} at={c.pro + 20} color={AMBER_INK} down={false} />
				{/* count the centromeres */}
				<Chrom x={330} y={850} kind="L" color={PLUM} dup={prog(f, c.count - 20, 14)} coil={1} s={1.2} o={prog(f, c.count - 30, 14)} />
				<PenTap pts={[[330, 850]]} at={[c.count + 24]} badge={[60, -10]} out={c.next - 20} />
				<DrawPath d="M410,850 L470,850" at={c.count + 20} dur={10} color={AMBER_INK} width={5} />
			</Overlay>
			{kw('copies', c.copied, 0)}
			{kw('coils', c.pro + 10, 1)}
			{kw('middle', c.meta + 10, 2)}
			{kw('apart', c.ana + 10, 3)}
			{kw('two nuclei', c.telo + 10, 4)}
			<GreyTag at={c.copied + 20} x={LX[0] - 170} y={640} text="interphase comes before mitosis" size={26} />
			<Hand at={c.pro + 24} x={LX[1] + 100} y={650} size={46} color={AMBER_INK}>the four steps of mitosis</Hand>
			<Pill at={c.cyto} x={1520} y={700} size={42}>then split</Pill>
			<Hand at={c.count} x={490} y={800} size={52} color={AMBER_INK} w={470}>centromeres, not chromatids</Hand>
			<Enter at={c.next} style={{position: 'absolute', left: 1120, top: 790}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 22, background: '#fffdf8', border: `4px solid ${AMBER_INK}`, borderRadius: 28, padding: '10px 28px 14px'}}>
					<svg width={110} height={90} viewBox="0 0 110 90">
						<circle cx={55} cy={45} r={38} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />
						<Chrom x={55} y={45} kind="L" color={PLUM} dup={0} s={0.34} />
					</svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: AMBER_INK, lineHeight: 1.05}}>Next: how a cell ends up<br />with one set</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 10. Key notes ----------
export const NOTES = [
	'DNA is copied in interphase, before mitosis. A copied chromosome has two sister chromatids joined at a centromere. Count centromeres, not chromatids.',
	'A set is one of each kind. Diploid: two sets (human body cell: 46). Haploid: one set (gamete: 23).',
	'Mitosis: prophase (chromosomes coil, the nuclear envelope breaks down, the spindle forms), metaphase (chromosomes line up in the middle), anaphase (centromeres split, chromatids are pulled apart), telophase (new nuclei form). Then cytokinesis: the cytoplasm splits.',
	'Each new cell gets a copy of every chromosome, so the number is not halved. Human: 46, 92 chromatids, 92 chromosomes in anaphase, 46 in each new cell.',
	'Order: IPMAT. Interphase comes first and is not part of mitosis.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={68} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 190, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 20, marginBottom: 26}}>
					<div style={{flex: 'none', width: 18, height: 18, marginTop: 17, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 40, color: INK, lineHeight: 1.25}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={150} style={{position: 'absolute', left: 110, top: 868}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
