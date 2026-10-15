import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, DnaRing, DrawPath, Envelope, FONT_DISPLAY, FONT_HAND, Fade, GhostRing, GreyCross, Grips, Heading, INK, INK_SOFT, MITO_IN_ANIMAL,
	Overlay, PL, PLUM, Pl, Plasmid, Ring2, Rod, Rods8, S, Sx, TagP, Ticker, TickM, plPt, prog, tw,
} from './shared';
import {CompareTable, tableRows} from './s3';

// ---------- the two attempt cells (no labels on any structure) ----------
export const CellP: React.FC<{x: number; y: number; k: number; o?: number}> = ({x, y, k, o = 1}) => {
	const P = plPt(PL.bact, x, y, k);
	const [cx, cy] = P(873, 434);
	return (
		<g opacity={o}>
			<Pl p={PL.bact} x={x} y={y} k={k} />
			<DnaRing cx={cx} cy={cy} rx={230 * k} ry={66 * k} coil={1} width={Math.max(2.5, 8 * k)} />
			<Plasmid cx={P(433, 413)[0]} cy={P(433, 413)[1]} r={28 * k} width={Math.max(2.5, 8 * k)} />
			<Plasmid cx={P(1220, 400)[0]} cy={P(1220, 400)[1]} r={28 * k} width={Math.max(2.5, 8 * k)} />
		</g>
	);
};
export const pPts = (x: number, y: number, k: number) => {
	const P = plPt(PL.bact, x, y, k);
	return {patch: P(873, 434), p1: P(433, 413), p2: P(1220, 400)};
};
export const CellQ: React.FC<{x: number; y: number; k: number; o?: number; rodLit?: number; rodsAt?: number}> = ({x, y, k, o = 1, rodsAt = -100}) => {
	const P = plPt(PL.animal, x, y, k);
	const [nx, ny] = P(1010, 1000);
	return (
		<g opacity={o}>
			<Pl p={PL.animal} x={x} y={y} k={k} />
			<Rods8 cx={nx} cy={ny} r={330 * k} at={rodsAt} stagger={0} width={Math.max(3, 9 * k)} />
			{MITO_IN_ANIMAL.map((m, i) => {
				const a = (m[2] * Math.PI) / 180;
				return [-1, 1].map(s => { const [px, py] = P(m[0] + s * 70 * Math.cos(a), m[1] + s * 70 * Math.sin(a)); return <DnaRing key={`${i}${s}`} cx={px} cy={py} rx={30 * k} ry={20 * k} width={Math.max(2, 7 * k)} />; });
			})}
		</g>
	);
};
export const qPts = (x: number, y: number, k: number) => {
	const P = plPt(PL.animal, x, y, k);
	return {nuc: P(1010, 1000), r: 330 * k, mito: MITO_IN_ANIMAL.map(m => P(m[0], m[1]))};
};
const Box: React.FC<{x: number; y: number; w: number; h?: number; at: number}> = ({x, y, w, h = 60, at}) => (
	<Fade at={at}><rect x={x} y={y} width={w} height={h} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" /></Fade>
);
const Letter: React.FC<{x: number; y: number; t: string; at: number}> = ({x, y, t, at}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={34} fill={INK} />
		<text x={x} y={y + 14} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}>{t}</text>
	</Fade>
);

// ---------- 12a. Attempt: the drawing ----------
const A = 'attempt';
const KA = cues(S(A), {two: 'Two questions', first: 'First a drawing', pause: 'Pause here'});
export const SceneAttemptB6: React.FC = () => {
	const h = S(A).responseHold as {startFrame: number; endFrame: number};
	const X = 830;
	return (
		<>
			<Heading text="Your turn: question one" at={4} size={60} />
			<Overlay>
				<Letter x={130} y={290} t="P" at={KA.first} />
				<CellP x={400} y={360} k={0.42} o={1} />
				<Letter x={130} y={650} t="Q" at={KA.first} />
				<CellQ x={420} y={790} k={0.24} />
				<Sx x={X} y={300} text="Cell Q has 8 chromosomes in its main DNA." size={40} color={INK} weight={700} at={KA.first} />
				<Sx x={X} y={400} text="(a) Which cell is the prokaryote?" size={36} weight={600} at={KA.first + 6} />
				<Sx x={X} y={446} text="Give one piece of evidence from the drawing." size={36} weight={600} at={KA.first + 6} />
				<Box x={X} y={476} w={980} at={KA.first + 10} />
				<Sx x={X} y={630} text="(b) Besides those 8 chromosomes, where else in Q" size={36} weight={600} at={KA.first + 12} />
				<Sx x={X} y={676} text="is there DNA, and what shape is it?" size={36} weight={600} at={KA.first + 12} />
				<Box x={X} y={706} w={980} at={KA.first + 16} />
				<Sx x={X} y={900} text="Pause here to answer." size={56} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1690} y={890} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Attempt: the student's claim ----------
const A2 = 'attempt-two';
const KA2 = cues(S(A2), {now: "Now a student's claim", pause: 'Pause here'});
export const QUOTE = ['A student says: "Bacteria have no nucleus, so their DNA must just float loose.', 'A human body cell that has not yet copied its DNA has 46 DNA molecules', 'in its nucleus, so that is all of its DNA."'];
export const SceneAttemptTwo: React.FC = () => {
	const h = S(A2).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn: question two" at={4} size={60} />
			<Overlay>
				<Fade at={2}>
					<rect x={96} y={200} width={1728} height={250} rx={22} fill="#fffdf8" stroke={PLUM} strokeWidth={3} />
					{QUOTE.map((q, i) => <Sx key={i} x={136} y={280 + i * 60} text={q} size={38} color={INK} hand at={4 + i * 6} />)}
				</Fade>
				<Sx x={96} y={540} text="(c) Correct the idea that their DNA floats loose." size={38} weight={600} at={KA2.now} />
				<Box x={96} y={566} w={1728} at={KA2.now + 4} />
				<Sx x={96} y={700} text="(d) Correct the idea that 46 is all of the cell's DNA." size={38} weight={600} at={KA2.now + 6} />
				<Box x={96} y={726} w={1728} at={KA2.now + 10} />
				<Sx x={96} y={900} text="Pause here to answer." size={56} color={AMBER_INK} hand at={KA2.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1690} y={890} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 13a. Feedback, item one ----------
const F1 = 'feedback-one';
const KF = cues(S(F1), {one: 'One', prok: 'Cell P is the prokaryote', nonuc: 'It has no nucleus', ring: 'its main DNA is a ring', clear: 'a clear region', region: 'The region that holds', nucleoid: 'is the nucleoid', plasmids: 'two small rings are plasmids', qhas: 'Cell Q has a nucleus', eight: 'eight chromosomes', other: 'Its other DNA', mito: 'inside each mitochondrion', said: 'If you said', look: 'look again'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const PP = {x: 470, y: 520, k: 0.55}, QQ = {x: 1420, y: 560, k: 0.33};
	const p = pPts(PP.x, PP.y, PP.k), q = qPts(QQ.x, QQ.y, QQ.k);
	const pulse = f >= KF.qhas && f < KF.qhas + 40 ? 0.5 + 0.5 * Math.sin(((f - KF.qhas) / 40) * Math.PI * 3) : 0;
	return (
		<>
			<Heading text="Check question one" at={4} size={60} />
			<Overlay>
				<Letter x={120} y={300} t="P" at={-100} />
				<CellP x={PP.x} y={PP.y} k={PP.k} />
				<Letter x={1000} y={300} t="Q" at={-100} />
				<CellQ x={QQ.x} y={QQ.y} k={QQ.k} />
				<TickM x={190} y={290} at={KF.prok + 4} s={44} />
				<Sx x={230} y={300} text="the prokaryote" size={40} color={INK} hand at={KF.prok + 8} />
				<GhostRing cx={p.patch[0]} cy={p.patch[1]} rx={150} ry={54} at={KF.nonuc} />
				<GreyCross x={p.patch[0] + 140} y={p.patch[1] - 50} at={KF.nonuc + 6} s={18} />
				<Sx x={PP.x} y={760} text="no nucleus, no membrane" size={36} color={INK_SOFT} hand anchor="middle" at={KF.clear} />
				<Ring2 cx={p.patch[0]} cy={p.patch[1]} rx={170} ry={62} at={KF.region} out={KF.plasmids} />
				<Sx x={PP.x} y={820} text="nucleoid: main DNA, a ring" size={46} color={AMBER_INK} hand anchor="middle" at={KF.nucleoid} />
				<Ring2 cx={p.p1[0]} cy={p.p1[1]} rx={34} ry={30} at={KF.plasmids} seed={4} />
				<Ring2 cx={p.p2[0]} cy={p.p2[1]} rx={34} ry={30} at={KF.plasmids + 6} seed={6} />
				<Sx x={PP.x} y={880} text="two small rings: plasmids" size={46} color={PLUM} hand anchor="middle" at={KF.plasmids + 6} />
				{/* Q */}
				<circle cx={q.nuc[0]} cy={q.nuc[1]} r={q.r + 6} fill="none" stroke="#5b4d70" strokeWidth={6} strokeDasharray="20 10" opacity={pulse} />
				<Ticker x={1680} y={340} from={0} to={8} at={KF.eight} dur={24} label="chromosomes" size={60} />
				<Sx x={QQ.x} y={850} text="nucleus: its 8 chromosomes" size={40} color={INK} hand anchor="middle" at={KF.qhas + 6} />
				{q.mito.map((m, i) => <Ring2 key={i} cx={m[0]} cy={m[1]} rx={52} ry={38} at={KF.mito + i * 6} seed={i + 2} />)}
				<Fade at={KF.mito + 10}>
					<path d={`M${q.nuc[0] + q.r + 10},${q.nuc[1] - 20} L${q.mito[0][0] - 50},${q.mito[0][1] + 30}`} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 7" />
				</Fade>
				<Sx x={QQ.x} y={910} text="mitochondria: small rings, outside the nucleus" size={40} color={PLUM} hand anchor="middle" at={KF.mito + 8} />
				<Fade at={KF.said}>
					<rect x={260} y={960} width={1400} height={62} rx={31} fill="#eceeef" stroke="#8d949b" strokeWidth={2.5} />
					<Sx x={960} y={1002} text="the extra DNA is in the nucleus (those rings sit in the mitochondria)" size={32} color="#5d646b" anchor="middle" weight={600} at={KF.said} />
					<DrawPath d="M280,1010 L1640,972" at={KF.look} dur={14} color="#c4432f" width={5} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback, item two ----------
const F2 = 'feedback-two';
const K2 = cues(S(F2), {two: 'Two', nonuc: 'Bacteria have no nucleus', notfloat: 'does not float loose', sits: 'It sits in the nucleoid', twisted: 'twisted into coils', held: 'held by proteins', and46: 'And forty-six', notyet: 'has not yet copied', also: 'A human cell also', rings: 'small rings of DNA', notall: 'not all of its DNA', after: 'After copying', n92: 'ninety-two', two46: 'two in each', nuclear: 'nuclear DNA again'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const NX = 1380, NY = 580, NR = 150;
	const dbl = prog(f, K2.n92, 14) * (1 - prog(f, K2.nuclear + 30, 14));
	const p = pPts(480, 560, 0.5);
	return (
		<>
			<Heading text="Check question two" at={4} size={60} />
			<Overlay>
				<Fade at={-100}>
					<rect x={96} y={168} width={1728} height={150} rx={20} fill="#fffdf8" stroke={PLUM} strokeWidth={2.5} />
					<Sx x={126} y={222} text={'"Bacteria have no nucleus, so their DNA must just float loose.'} size={30} color={INK} hand at={-100} />
					<Sx x={126} y={270} text={'A human body cell ... has 46 DNA molecules in its nucleus, so that is all of its DNA."'} size={30} color={INK} hand at={-100} />
				</Fade>
				<DrawPath d={`M${126},${212} L${126 + 1.22 * tw('"Bacteria have no nucleus, so their DNA must just float loose.', 30, true)},${212}`} at={K2.notfloat} dur={16} color="#8d949b" width={4} />
				<DrawPath d={`M${126},${260} L${126 + 1.22 * tw('A human body cell ... has 46 DNA molecules in its nucleus, so that is all of its DNA."', 30, true)},${260}`} at={K2.notall} dur={16} color="#8d949b" width={4} />
				{/* part one: organised, not loose */}
				<Pl p={PL.bact} x={480} y={560} k={0.5} />
				<DnaRing cx={p.patch[0]} cy={p.patch[1]} rx={115} ry={33} coil={prog(f, K2.twisted, 30)} width={4} />
				<Grips cx={p.patch[0]} cy={p.patch[1]} rx={115} ry={33} at={K2.held} n={9} r={6} />
				<Sx x={480} y={760} text="coiled, held by proteins:" size={40} color={AMBER_INK} hand anchor="middle" at={K2.held + 4} />
				<Sx x={480} y={806} text="organised, not loose" size={40} color={AMBER_INK} hand anchor="middle" at={K2.held + 10} />
				{/* part two: 46 is nuclear DNA only */}
				<g opacity={prog(f, K2.and46 - 6, 14)}>
					<Envelope cx={NX} cy={NY} r={NR} width={4} />
					<Rods8 cx={NX} cy={NY} r={NR} width={4} />
					<g opacity={dbl}>
						<Rods8 cx={NX + 7} cy={NY + 7} r={NR} width={4} />
					</g>
				</g>
				<Ticker x={1600} y={470} from={46} to={46} at={K2.and46} dur={1} label="" size={80} o={1 - dbl} />
				<Ticker x={1600} y={470} from={92} to={92} at={K2.n92} dur={1} label="" size={80} o={dbl} />
				{[[1150, 420], [1180, 760], [1600, 720]].map(([mx, my], i) => (
					<g key={i} opacity={prog(f, K2.rings + i * 6, 12)}>
						<Pl p={PL.mito} x={mx} y={my} k={0.08} />
						<DnaRing cx={mx} cy={my} rx={18} ry={12} width={3} />
					</g>
				))}
				<Sx x={1600} y={560} text="46 + rings" size={48} color={PLUM} hand at={K2.rings + 20} />
				<TagP x={1000} y={830} text="46 = nuclear DNA molecules only (before copying)" at={K2.notyet} size={30} />
				<Sx x={1000} y={930} text="after copying: 2 in each of the 46 = 92, still nuclear DNA" size={32} color={INK_SOFT} hand at={K2.two46} />
				<Sx x={96} y={990} text="Bacterial DNA is coiled and held by proteins in the nucleoid." size={34} color={AMBER_INK} hand at={K2.held + 30} />
				<Sx x={96} y={1036} text="Before copying, a human cell has 46 DNA molecules in the nucleus, and more DNA in its mitochondria." size={34} color={AMBER_INK} hand at={K2.notall + 10} />
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const D = 'decision-rule';
const KD = cues(S(D), {ask: 'ask three things', nucleus: 'is there a nucleus', ring: 'a ring or a line', wound: 'wound on histones', next: 'Next', mrna: 'into mRNA'});
export const SceneDecisionB6: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 470, y: 500, k: 0.4}, E = {x: 1440, y: 500, k: 0.25};
	const p = pPts(B.x, B.y, B.k), q = qPts(E.x, E.y, E.k);
	const chips = [{t: 'nucleus?', at: KD.nucleus, x: 560}, {t: 'ring or line?', at: KD.ring, x: 960}, {t: 'on histones?', at: KD.wound, x: 1360}];
	const ans = [['no nucleus', 'nucleus'], ['ring', 'lines'], ['not on histones (bacteria)', 'on histones']];
	const verdict = prog(f, KD.wound + 30, 14);
	return (
		<>
			<Heading text="Three questions to ask" at={4} size={60} />
			<Overlay>
				{chips.map((c, i) => (
					<Fade key={i} at={c.at}>
						<rect x={c.x - 170} y={180} width={340} height={70} rx={35} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3.5} />
						<Sx x={c.x} y={228} text={c.t} size={42} color={AMBER_INK} hand anchor="middle" at={c.at} />
					</Fade>
				))}
				<Pl p={PL.bact} x={B.x} y={B.y} k={B.k} />
				<DnaRing cx={p.patch[0]} cy={p.patch[1]} rx={90} ry={26} coil={1} width={3.5} />
				<Pl p={PL.animal} x={E.x} y={E.y} k={E.k} />
				<Rods8 cx={q.nuc[0]} cy={q.nuc[1]} r={q.r} width={2.5} />
				{ans.map((a, i) => (
					<g key={i}>
						<Sx x={B.x} y={840 + i * 52} text={a[0]} size={38} color={PLUM} hand anchor="middle" at={chips[i].at + 14} />
						<TickM x={B.x + tw(a[0], 38, true) / 2 + 40} y={828 + i * 52} at={chips[i].at + 20} s={28} />
						<Sx x={E.x} y={840 + i * 52} text={a[1]} size={38} color={PLUM} hand anchor="middle" at={chips[i].at + 14} />
						<TickM x={E.x + tw(a[1], 38, true) / 2 + 40} y={828 + i * 52} at={chips[i].at + 20} s={28} />
					</g>
				))}
				<g opacity={verdict}>
					<rect x={B.x - 130} y={724} width={260} height={56} rx={28} fill={PLUM} />
					<Sx x={B.x} y={764} text="bacterium" size={38} color="#fffdf8" hand anchor="middle" at={-100} />
					<rect x={E.x - 130} y={724} width={260} height={56} rx={28} fill={PLUM} />
					<Sx x={E.x} y={764} text="eukaryote" size={38} color="#fffdf8" hand anchor="middle" at={-100} />
				</g>
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
