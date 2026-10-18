// P03 (Biology practical) scenes 10a, 10b and 11: analyse trend and pattern (analysis card linked to a small graph
// with the free complements outlined), a relationship (two-row slip, 2 x 2 count grid, near-level bars, association
// not cause) and the limitations card with validity, reliability and "in this sample".
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, CLASSES, CZ, ColumnGraph, Cross, DrawPath, EDGE, FREE, Fade, GreyTag, HBar, INK, INK_SOFT, Overlay, Panel, Question, REL, Rail, S,
	SpanBracket, Sx, TEAL, Tick, pctOf, prog, wrap,
} from './shared';
void Cross;
import type {ColDatum} from './shared';

const CLASS_DATA: ColDatum[] = CLASSES.map((c, i) => ({label: `class ${i + 1}`, v: pctOf(c.a, c.n)}));
const ATT_MIN = Math.min(...CLASS_DATA.map(d => d.v)), ATT_MAX = Math.max(...CLASS_DATA.map(d => d.v));
if (ATT_MIN !== 22 || ATT_MAX !== 32 || !CLASS_DATA.every(d => 100 - d.v > d.v)) throw new Error('P03 check: trend and pattern');
/** The analysis card rows (shared by 10a and 10b). */
const AnalysisCard: React.FC<{at: number; rows: {t: string; d: string; at: number; dAt: number}[]; y?: number; h?: number}> = ({at, rows, y = 250, h = 330}) => (
	<g>
		<Fade at={at}><Panel x={CZ.x} y={y} w={CZ.w} h={h} stroke={AMBER} /><Sx x={CZ.x + 30} y={y + 46} text="analysis" size={30} color={INK_SOFT} hand /></Fade>
		{rows.map((r, i) => (
			<g key={i}>
				<Sx x={CZ.x + 30} y={y + 100 + i * 92} text={r.t} size={30} color={INK} weight={800} at={r.at} />
				<Sx x={CZ.x + 30} y={y + 140 + i * 92} text={r.d} size={30} color={AMBER_INK} hand at={r.dAt} />
			</g>
		))}
	</g>
);

// ---------- 10a. Analyse: trend and pattern ----------
const K10 = cues(S('analyse-trend-pattern'), {now: 'Now analyse', trend: 'A trend is the overall', free: 'free earlobes were more common', pattern: 'A pattern is a feature', every: 'every class sat between'});
const G10 = {x: 200, y: 300, w: 540, h: 520};
export const SceneTrendP03: React.FC = () => {
	const f = useCurrentFrame();
	const Y = (v: number) => G10.y + G10.h - (v / 100) * G10.h;
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={5} at={K10.now} />
				<ColumnGraph x={G10.x} y={G10.y} w={G10.w} h={G10.h} data={CLASS_DATA} max={100} step={20} at={0} ghost={CLASS_DATA.map(d => 100 - d.v)} ghostP={prog(f, K10.free, 16)} size={22} yLabel="attached (%)" />
				<Sx x={G10.x} y={G10.y + G10.h + 90} text="dashed: free (the rest of each class)" size={24} color={FREE} weight={600} at={K10.free + 10} />
				<g opacity={prog(f, K10.every, 12)}>
					<rect x={G10.x + 4} y={Y(ATT_MAX)} width={G10.w - 8} height={Y(ATT_MIN) - Y(ATT_MAX)} fill={AMBER} opacity={0.25} />
					<line x1={G10.x} y1={Y(ATT_MAX)} x2={G10.x + G10.w} y2={Y(ATT_MAX)} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="7 6" />
					<line x1={G10.x} y1={Y(ATT_MIN)} x2={G10.x + G10.w} y2={Y(ATT_MIN)} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="7 6" />
				</g>
				<AnalysisCard at={K10.now} h={270} rows={[
					{t: 'Trend (the overall direction)', d: 'free more common in every class', at: K10.trend, dAt: K10.free},
					{t: 'Pattern (a repeated feature)', d: `every class ${ATT_MIN}% to ${ATT_MAX}% attached`, at: K10.pattern, dAt: K10.every},
				]} />
				{/* pen links from the card to the graph */}
				<g opacity={prog(f, K10.free, 10)}><DrawPath d={`M${CZ.x},${400} C${780},${400} ${760},${Y(80)} ${G10.x + G10.w - 20},${Y(80)}`} at={K10.free} dur={16} color={FREE} width={3} /></g>
				<g opacity={prog(f, K10.every, 10)}><DrawPath d={`M${CZ.x},${492} C${790},${492} ${780},${Y(27)} ${G10.x + G10.w},${Y(27)}`} at={K10.every} dur={16} color={AMBER_INK} width={3} /></g>
			</Overlay>
		</>
	);
};

// ---------- 10b. Analyse: a relationship ----------
const K11 = cues(S('analyse-relationship'), {
	rel: 'A relationship is when', slip: 'each slip needs both', like: 'like earlobes and tongue rolling', say: 'Say twenty of the thirty', p67: 'sixty-seven per cent', fifty4: 'fifty-four of the eighty',
	p68: 'sixty-eight per cent', almost: 'Almost the same', norel: 'no relationship', even: 'even if they had gone together', assoc: 'an association, not proof',
});
const GX = CZ.x, GY = 500;
export const SceneRelationP03: React.FC = () => {
	const f = useCurrentFrame();
	const pa = pctOf(REL.att.roll, REL.att.n), pf = pctOf(REL.free.roll, REL.free.n);
	const cells = [[REL.att.roll, REL.att.n - REL.att.roll], [REL.free.roll, REL.free.n - REL.free.roll]];
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={5} />
				<AnalysisCard at={-30} y={240} h={230} rows={[{t: 'Relationship (two characteristics change together)', d: 'needs both on each slip', at: K11.rel, dAt: K11.slip}]} />
				<Sx x={CZ.x + 560} y={300} text="trend and pattern: done" size={24} color={INK_SOFT} weight={600} at={-30} />
				{/* a two-row slip */}
				<g opacity={prog(f, K11.slip, 12)}>
					<rect x={130} y={290} width={600} height={220} rx={8} fill="#fffdf6" stroke={INK_SOFT} strokeWidth={2} />
					{[{t: 'earlobes', b: ['attached', 'free', 'unsure']}, {t: 'tongue rolling', b: ['can roll', "can't roll"]}].map((r, i) => (
						<g key={i} opacity={prog(f, i ? K11.like + 10 : K11.slip, 10)}>
							<Sx x={150} y={350 + i * 100} text={r.t} size={26} color={INK} weight={800} />
							{r.b.map((b, j) => (
								<g key={b}>
									<rect x={150 + j * 190} y={366 + i * 100} width={26} height={26} rx={4} fill="#fff" stroke={INK} strokeWidth={2} />
									<Sx x={184 + j * 190} y={388 + i * 100} text={b} size={24} color={INK} weight={600} />
								</g>
							))}
						</g>
					))}
				</g>
				{/* the 2 x 2 grid */}
				<g opacity={prog(f, K11.say, 12)}>
					<rect x={GX} y={GY} width={640} height={210} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={GX} y={GY} width={640} height={60} rx={12} fill="#efe6d4" />
					<Sx x={GX + 300} y={GY + 40} text="can roll" size={26} color={INK} weight={800} anchor="middle" />
					<Sx x={GX + 520} y={GY + 40} text="can't roll" size={26} color={INK} weight={800} anchor="middle" />
					<Sx x={GX + 20} y={GY + 110} text={`attached (${REL.att.n})`} size={28} color={AMBER_INK} weight={800} />
					<Sx x={GX + 20} y={GY + 180} text={`free (${REL.free.n})`} size={28} color={FREE} weight={800} />
				</g>
				{cells.map((row, r) => row.map((v, c) => <Sx key={r + '-' + c} x={GX + 300 + c * 220} y={GY + 110 + r * 70} text={String(v)} size={34} color={INK} weight={800} anchor="middle" at={r ? K11.fifty4 : K11.say + 10} />))}
				<GreyTag x={GX + 660} y={GY + 10} text="example data" at={K11.say + 10} size={22} />
				{/* near-level bars */}
				<Sx x={GX} y={770} text={`attached: ${REL.att.roll} / ${REL.att.n} = ${pa}%`} size={28} color={INK} weight={700} at={K11.p67} />
				<HBar x={GX + 400} y={748} w={420} v={pa} max={100} p={prog(f, K11.p67, 20)} o={prog(f, K11.p67, 10)} h={30} color={AMBER} />
				<Sx x={GX} y={830} text={`free: ${REL.free.roll} / ${REL.free.n} = ${pf}%`} size={28} color={INK} weight={700} at={K11.p68} />
				<HBar x={GX + 400} y={808} w={420} v={pf} max={100} p={prog(f, K11.p68, 20)} o={prog(f, K11.p68, 10)} h={30} color={FREE} />
				<DrawPath d={`M${GX + 400 + 4.2 * pf + 14},${763} L${GX + 400 + 4.2 * pf + 34},${763} L${GX + 400 + 4.2 * pf + 34},${823} L${GX + 400 + 4.2 * pf + 14},${823}`} at={K11.norel} dur={14} color={AMBER_INK} width={4} />
				<Sx x={GX} y={890} text="about the same: no relationship in this sample" size={32} color={AMBER_INK} hand at={K11.norel + 8} />
				<Sx x={130} y={590} text="association, not cause (B11)" size={32} color={INK} hand at={K11.assoc} />
				<Sx x={130} y={636} text="even if two go together, one may not cause the other" size={24} color={INK_SOFT} weight={600} at={K11.assoc + 8} />
				<Fade at={K11.even}>
					<Panel x={96} y={930} w={1744} h={70} stroke={TEAL} />
					<Sx x={130} y={976} text="Sentence starter: In this sample, ... was more common than ..." size={30} color={INK} weight={600} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 11. Limitations, validity and reliability ----------
const K12 = cues(S('limitations'), {
	limits: 'Then the limits', school: 'one school', may: 'may not represent', judge: 'People judge their own', inbetween: 'in-between ones are hard', valid: 'more valid',
	reliable: 'more reliable', always: 'always write', sample: 'in this sample', allp: 'in all people',
});
const LCOL = [{w: 520, head: 'Limitation'}, {w: 520, head: 'Why it matters'}, {w: 704, head: 'Improvement'}];
const LROWS = [
	['one school, 110 students', 'may not represent other places', 'sample several schools'],
	['self-judging, in-between lobes', 'classification errors', 'clear definition card, unsure box, practise on the diagrams first'],
];
export const SceneLimitsP03: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [[K12.school, K12.may, K12.may + 20], [K12.judge, K12.inbetween, K12.inbetween + 20]];
	const xs = LCOL.map((_, i) => 96 + LCOL.slice(0, i).reduce((a, c) => a + c.w, 0));
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={5} />
				<Fade at={K12.limits}>
					<rect x={96} y={250} width={1744} height={340} rx={14} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={96} y={250} width={1744} height={60} rx={14} fill="#efe6d4" />
					{LCOL.map((c, i) => <Sx key={i} x={xs[i] + 20} y={290} text={c.head} size={28} color={INK} weight={800} />)}
				</Fade>
				{LROWS.map((r, ri) => (
					<g key={ri}>
						<line x1={106} y1={310 + ri * 140} x2={1830} y2={310 + ri * 140} stroke={EDGE} strokeWidth={2} opacity={prog(f, rowAt[ri][0], 10)} />
						{r.map((t, ci) => wrap(t, 30, LCOL[ci].w - 40).map((ln, k) => <Sx key={ci + '-' + k} x={xs[ci] + 20} y={360 + ri * 140 + k * 40} text={ln} size={30} color={ci === 2 ? TEAL : INK} weight={600} at={rowAt[ri][ci]} />))}
					</g>
				))}
				<Fade at={K12.valid - 10}>
					<Panel x={96} y={630} w={850} h={120} stroke={TEAL} sw={4} />
					<Sx x={126} y={682} text="valid: measures what it claims" size={34} color={INK} weight={800} />
					<Sx x={126} y={726} text="clear definitions, unsure box" size={28} color={INK_SOFT} weight={600} />
				</Fade>
				<Fade at={K12.reliable - 10}>
					<Panel x={990} y={630} w={850} h={120} stroke={TEAL} sw={4} />
					<Sx x={1020} y={682} text="reliable: repeats agree" size={34} color={INK} weight={800} />
					<Sx x={1020} y={726} text="two counters, pool classes, recount" size={28} color={INK_SOFT} weight={600} />
				</Fade>
				<Fade at={K12.sample}>
					<Panel x={300} y={820} w={480} h={100} stroke={TEAL} sw={4} />
					<Sx x={540} y={884} text='"in this sample"' size={44} color={INK} hand anchor="middle" />
				</Fade>
				<Tick x={830} y={866} at={K12.sample + 8} s={44} color={TEAL} />
				<Fade at={K12.allp}>
					<Panel x={1000} y={820} w={480} h={100} />
					<Sx x={1240} y={884} text='"in all people"' size={44} color={INK_SOFT} hand anchor="middle" />
				</Fade>
				<Cross x={1530} y={868} at={K12.allp + 8} s={26} />
			</Overlay>
		</>
	);
};
void AMBER; void Tick;
