// B12 scenes 9a, 9b and 10: the choice board (question cards drop into "sequencing: base order" and "profiling: selected
// markers"; profiling's path to a single base is blocked), the limits of each tool (the board dims; five markers on a
// greyed chromosome; a found variant with a "?") and the memory board.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BaseT, CARD, CPLUM, ChromBar, Cross, DrawPath, EDGE, Fade, GreyTag, Heading, INK, INK_SOFT, MiniGel, Overlay, Panel, PlainArrow, QCard, S, Sx, TEALC,
	TileRow, prog,
} from './shared';

const COLX = [110, 990];
const TinyRow: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>{['G', 'T', 'G'].map((l, i) => <BaseT key={i} x={x + i * 30} y={y} l={l} w={26} h={26} glow={i === 1 ? 1 : 0} />)}</g>
);
/** The choice board; each element appears at its frame (pass -100 to show it from the start). */
const Board: React.FC<{at: {heads: number; l1: number; l2: number; block: number; r1: number; r2: number; cons: number; quick: number}; dim?: number}> = ({at, dim = 0}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{COLX.map((x, i) => (
				<g key={i} opacity={prog(f, at.heads + i * 6, 12)}>
					<Panel x={x} y={190} w={820} h={480} fill="rgba(255,253,248,0.6)" />
					<Sx x={x + 30} y={250} text={i ? 'profiling: selected markers' : 'sequencing: base order'} size={46} color={i ? TEALC : CPLUM} hand />
				</g>
			))}
			<QCard x={130} y={290} w={780} text="is this disease allele present?" o={prog(f, at.l1, 12)} dim={dim} icon={<TinyRow x={166} y={335} />} />
			<QCard x={130} y={400} w={780} text="how common is this SNP in each population?" o={prog(f, at.l2, 12)} dim={dim} icon={<TinyRow x={166} y={445} />} />
			<QCard x={1010} y={290} w={780} text="is this man the father?" o={prog(f, at.r1, 12)} dim={dim} icon={<MiniGel x={1030} y={300} s={0.7} />} />
			<QCard x={1010} y={400} w={780} text="how related are these captive animals?" o={prog(f, at.r2, 12)} dim={dim} icon={<MiniGel x={1030} y={410} s={0.7} />} />
			<g opacity={1 - 0.55 * dim}>
				<Fade at={at.block}>
					<DrawPath d="M700,720 L1220,720" at={at.block} dur={16} color={INK_SOFT} width={4} dash="12 9" />
				</Fade>
				<Cross x={960} y={720} at={at.block + 14} s={26} />
				<GreyTag x={960} y={750} text="repeat lengths only" at={at.block + 18} size={24} anchor="middle" />
				<GreyTag x={1010} y={506} text="breeding programs: avoid pairing close relatives" at={at.cons} size={22} />
				<Sx x={1030} y={640} text="quick and cheap across many individuals" size={30} color={INK_SOFT} hand at={at.quick} />
			</g>
		</g>
	);
};

// ---------- 9a. Choosing the tool ----------
const K9 = cues(S('choose-the-tool'), {which: 'which tool fits which question', base: 'a particular base', disease: 'like a disease allele', seq: 'sequence it', cant: "Profiling can't see it", rep: 'only measures repeat lengths', who: "who's related to whom", quick: 'quick and cheap', cons: 'conservation programs check relatedness'});
export const SceneChooseB12: React.FC = () => (
	<>
		<Heading text="Which tool fits which question?" at={K9.which} size={56} />
		<Overlay>
			<Board at={{heads: K9.which, l1: K9.base, l2: K9.seq, block: K9.cant, r1: K9.who, r2: K9.who + 30, cons: K9.cons, quick: K9.quick}} />
			<GreyTag x={110} y={990} text="profiling is also used in forensics" at={K9.cons + 30} size={24} />
			<Sx x={130} y={880} text="need a particular base? sequence it" size={42} color={CPLUM} hand at={K9.seq} />
			<Sx x={1010} y={880} text="who's related? profile" size={42} color={TEALC} hand at={K9.who + 40} />
		</Overlay>
	</>
);

// ---------- 9b. The limits of each tool ----------
const K10 = cues(S('tool-limits'), {limits: 'each tool has limits', handful: 'a handful of markers', genes: "can't tell you about genes", finding: 'finding a variant by sequencing', does: "doesn't tell you what it does", prove: 'or prove that it causes'});
const MT = [0.1, 0.3, 0.5, 0.7, 0.9];
export const SceneLimitsB12: React.FC = () => {
	const f = useCurrentFrame();
	const dim = prog(f, K10.limits, 20);
	return (
		<>
			<Heading text="The limits of each tool" at={K10.limits} size={56} />
			<Overlay>
				<Board at={{heads: -100, l1: -100, l2: -100, block: -100, r1: -100, r2: -100, cons: -100, quick: -100}} dim={dim} />
				{/* profiling: a few markers, not the whole genome */}
				<g opacity={prog(f, K10.handful, 14)}>
					<ChromBar x={1030} y={760} w={760} h={40} fill="#e6e2db" stroke="#a9a29a" />
					{MT.map((t, i) => <rect key={i} x={1030 + t * 760 - 7} y={736} width={14} height={48} rx={4} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K10.handful + i * 5, 8)} />)}
				</g>
				<Sx x={1010} y={860} text="profiling: a few markers," size={40} color={INK} hand at={K10.handful + 10} />
				<Sx x={1010} y={910} text="not the whole genome" size={40} color={INK} hand at={K10.genes} />
				{/* sequencing: a variant found, cause not proved */}
				<g opacity={prog(f, K10.finding, 14)}>
					<TileRow x={180} y={760} seq="CCTGTGGAG" pitch={62} w={54} h={46} tile={i => ({glow: i === 4 ? 1 : 0})} />
					<Sx x={180 + 4 * 62} y={714} text="?" size={48} color={AMBER_INK} weight={800} anchor="middle" at={K10.does} />
				</g>
				<Sx x={130} y={860} text="sequencing: a variant found" size={40} color={INK} hand at={K10.does} />
				<Sx x={130} y={910} text="is not a cause proved" size={40} color={INK} hand at={K10.prove} />
				<GreyTag x={130} y={940} text="B11: association, not cause" at={K10.prove + 10} size={24} />
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K11 = cues(S('memory'), {three: 'Three things to remember', seq: 'Sequence means bases', prof: 'profile means selected markers', red: 'DNA runs to red', lead: 'the positive lead', every: 'every band in a child'});
export const SceneMemoryB12: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [260, 500, 740];
	return (
		<>
			<Heading text="Three things to remember" at={K11.three} size={56} />
			<Overlay>
				{rows.map((y, i) => <Panel key={i} x={110} y={y} w={1700} h={200} o={prog(f, [K11.seq, K11.red, K11.every][i], 12)} stroke={i === 1 ? AMBER : EDGE} />)}
				{/* row 1 */}
				<TileRow x={180} y={330} seq="ATGC" pitch={56} w={48} h={40} o={prog(f, K11.seq, 12)} />
				<MiniGel x={420} y={300} s={0.9} o={prog(f, K11.prof, 12)} />
				<Sx x={600} y={350} text="sequence = bases" size={54} color={CPLUM} hand at={K11.seq} />
				<Sx x={600} y={420} text="profile = selected markers" size={54} color={TEALC} hand at={K11.prof} />
				{/* row 2 */}
				<g opacity={prog(f, K11.red, 12)}>
					<rect x={200} y={524} width={160} height={150} rx={10} fill="#dceaf1" stroke="#7d9aa8" strokeWidth={3} />
					<rect x={200} y={514} width={160} height={8} rx={3} fill="#2b2b2b" />
					<rect x={200} y={676} width={160} height={8} rx={3} fill="#c4432f" />
					<text x={380} y={530} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28}} fill={INK}>{'−'}</text>
					<text x={380} y={694} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28}} fill="#a2321f">+</text>
				</g>
				<PlainArrow x1={280} y1={548} x2={280} y2={650} at={K11.red + 6} color={AMBER_INK} width={6} />
				<Sx x={600} y={620} text="DNA runs to red (+)" size={60} color={AMBER_INK} hand at={K11.red} />
				<Sx x={1250} y={620} text="the positive lead" size={36} color={INK_SOFT} hand at={K11.lead} />
				{/* row 3: the trio lanes */}
				<g opacity={prog(f, K11.every, 12)}>
					{[0, 1, 2].map(i => <rect key={i} x={190 + i * 110} y={770} width={70} height={150} rx={6} fill="#dceaf1" stroke="#7d9aa8" strokeWidth={2} />)}
					{[[0, 800], [0, 860], [1, 800], [1, 880], [2, 830], [2, 880]].map(([l, y], i) => <rect key={i} x={198 + l * 110} y={y} width={54} height={8} rx={3} fill="#3e6a86" />)}
					<line x1={300} y1={804} x2={252} y2={804} stroke={CPLUM} strokeWidth={4} />
					<line x1={360} y1={884} x2={408} y2={884} stroke={TEALC} strokeWidth={4} />
				</g>
				<Sx x={600} y={860} text="every child band from Mum or Dad" size={56} color={INK} hand at={K11.every} />
			</Overlay>
		</>
	);
};
void AMBER; void CARD;
