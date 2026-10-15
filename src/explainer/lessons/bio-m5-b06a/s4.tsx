import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, DnaRing, FONT_DISPLAY, FONT_HAND, Fade, GREYT, Heading, INK, INK_SOFT, MITO_IN_ANIMAL,
	Overlay, PL, PLUM, Pl, Rod, Rods8, S, Sx, TickM, plPt, prog, tw,
} from './shared';
import {CompareTable, tableRows} from './s3';

// ---------- plate geometry used by the decision board ----------
export const pPts = (x: number, y: number, k: number) => {
	const P = plPt(PL.bact, x, y, k);
	return {patch: P(873, 434), p1: P(433, 413), p2: P(1220, 400)};
};
export const qPts = (x: number, y: number, k: number) => {
	const P = plPt(PL.animal, x, y, k);
	return {nuc: P(1010, 1000), r: 330 * k, mito: MITO_IN_ANIMAL.map(m => P(m[0], m[1]))};
};
// The take02 question and feedback scenes (12a to 12d) are in s5.tsx.

// ---------- 14. Decision rule and handoff ----------
const D = 'decision-rule';
const KD = cues(S(D), {ask: 'ask three things', nucleus: 'is there a nucleus', ring: 'a ring or a line', wound: 'wound on histones', next: 'Next', mrna: 'into mRNA'});
export const SceneDecisionB6: React.FC = () => {
	const f = useCurrentFrame();
	// the split board: two halves, each with a header that lights with its verdict (screen only)
	const HALF = [{x0: 96, x1: 924, label: 'bacterium'}, {x0: 996, x1: 1824, label: 'eukaryote'}];
	const PY0 = 270, PY1 = 960;
	const B = {x: 470, y: 530, k: 0.4}, E = {x: 1440, y: 585, k: 0.25};
	const p = pPts(B.x, B.y, B.k), q = qPts(E.x, E.y, E.k);
	const chips = [{t: 'nucleus?', at: KD.nucleus, x: 560}, {t: 'ring or line?', at: KD.ring, x: 960}, {t: 'on histones?', at: KD.wound, x: 1360}];
	const ans = [['no nucleus', 'nucleus'], ['ring', 'lines'], ['not on histones (bacteria)', 'on histones']];
	const verdict = prog(f, KD.wound + 30, 14);
	const AY = 830;
	return (
		<>
			<Heading text="Three questions to ask" at={4} size={60} />
			<Overlay>
				{chips.map((c, i) => (
					<Fade key={i} at={c.at}>
						<rect x={c.x - 170} y={170} width={340} height={70} rx={35} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3.5} />
						<Sx x={c.x} y={218} text={c.t} size={42} color={AMBER_INK} hand anchor="middle" at={c.at} />
					</Fade>
				))}
				{HALF.map((h, i) => {
					const cx = (h.x0 + h.x1) / 2, w = 300;
					return (
						<g key={i}>
							<rect x={h.x0} y={PY0} width={h.x1 - h.x0} height={PY1 - PY0} rx={22} fill="none" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
							<rect x={h.x0} y={PY0} width={h.x1 - h.x0} height={PY1 - PY0} rx={22} fill="none" stroke={PLUM} strokeWidth={4} opacity={verdict} />
							<rect x={cx - w / 2} y={PY0 + 16} width={w} height={58} rx={29} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} strokeDasharray="9 7" opacity={1 - verdict} />
							<text x={cx} y={PY0 + 58} textAnchor="middle" fill={GREYT} opacity={1 - verdict} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>?</text>
							<rect x={cx - w / 2} y={PY0 + 16} width={w} height={58} rx={29} fill={PLUM} opacity={verdict} />
							<g opacity={verdict}><Sx x={cx} y={PY0 + 58} text={h.label} size={40} color="#fffdf8" hand anchor="middle" at={-100} /></g>
						</g>
					);
				})}
				<Pl p={PL.bact} x={B.x} y={B.y} k={B.k} />
				<DnaRing cx={p.patch[0]} cy={p.patch[1]} rx={90} ry={26} coil={1} width={3.5} />
				<Pl p={PL.animal} x={E.x} y={E.y} k={E.k} />
				<Rods8 cx={q.nuc[0]} cy={q.nuc[1]} r={q.r} width={2.5} />
				{ans.map((a, i) => (
					<g key={i}>
						<Sx x={B.x} y={AY + i * 50} text={a[0]} size={38} color={PLUM} hand anchor="middle" at={chips[i].at + 14} />
						<TickM x={B.x + tw(a[0], 38, true) / 2 + 40} y={AY - 12 + i * 50} at={chips[i].at + 20} s={28} />
						<Sx x={E.x} y={AY + i * 50} text={a[1]} size={38} color={PLUM} hand anchor="middle" at={chips[i].at + 14} />
						<TickM x={E.x + tw(a[1], 38, true) / 2 + 40} y={AY - 12 + i * 50} at={chips[i].at + 20} s={28} />
					</g>
				))}
				<Fade at={KD.next}>
					<rect x={1000} y={980} width={824} height={70} rx={35} fill="#fffdf8" stroke={PLUM} strokeWidth={3.5} />
					<Sx x={1040} y={1028} text="Next: how a gene is copied into mRNA" size={40} color={PLUM} hand at={KD.next} />
				</Fade>
				<Fade at={KD.mrna - 6}>
					<path d="M720,1015 L840,1015" stroke={PLUM} strokeWidth={6} />
					<circle cx={780} cy={1015} r={9} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
					<path d="M850,1015 L900,1015 M888,1004 L900,1015 L888,1026" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
					<path d="M910,1015 q12,-14 24,0 t24,0 t24,0" fill="none" stroke="#c98b5a" strokeWidth={5} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'All cells store genes in DNA (the same double helix, four bases). The difference is where it is kept and how it is arranged.',
	'A plasmid is a small ring of DNA, copied separately from the main chromosome, that often carries genes such as antibiotic resistance. Because it is separate, it can carry an added gene (genetic technology, later).',
	'DNA is negatively charged and histones positively charged, so DNA winds round histones: the first level of packing. Winding and further folding fit 2 m of DNA into the nucleus, and it can be loosened to read a gene (tags on the histones).',
	'Mitochondria and chloroplasts hold many copies of their own small circular DNA, because they came from bacteria. In human cells it is extra to the 46 chromosomes in the nucleus.',
];
export const SceneNotesB6: React.FC = () => {
	const t: Record<string, number> = {};
	['r1', 'r2', 'r3', 'r4', 'r5', 'l1', 'l2', 'l3', 'l4', 'l5', 'e1', 'e2', 'e3', 'e4', 'e5'].forEach(k => { t[k] = 60; });
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
			<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
				<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
			</Enter>
			<div style={{position: 'absolute', left: 110, top: 150, width: 1710}}>
				{NOTES.map((n, i) => (
					<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 8}}>
						<div style={{flex: 'none', width: 13, height: 13, marginTop: 10, borderRadius: 999, background: AMBER}} />
						<div style={{fontFamily: FONT_DISPLAY, fontSize: 25, fontWeight: 500, color: INK, lineHeight: 1.22}}>{n}</div>
					</Enter>
				))}
			</div>
			<Overlay>
				<CompareTable rows={tableRows(t, true)} at={60} y0={556} rh={56} size={26} icons={false} />
				<Sx x={96} y={950} text="Compare answers: both sides in one sentence (Bacterial DNA is ..., whereas eukaryotic DNA is ...)." size={28} color={INK} weight={600} at={90} />
				<Sx x={96} y={1004} text="karyon = kernel (the nucleus); pro = before; eu = good, a true nucleus. Bacteria: ring. Us: lines in a nucleus." size={34} color={PLUM} hand at={96} />
			</Overlay>
		</>
	);
};
void Rod; void INK_SOFT; void FONT_DISPLAY;
