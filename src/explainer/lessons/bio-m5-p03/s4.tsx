// P03 (Biology practical) scenes 12 to 15: the attempt (the site's two-group task, card kept complete through the 10 s
// countdown and after it; no totals or percentages on it), brief feedback (totals, working, one crossed-out mistake),
// the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, ColumnGraph, Countdown, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GRAPH_DATA, GreyTag, HandText, Heading, INK, INK_SOFT, ITEM,
	MistakeChip, ModelLine, Overlay, Panel, QUESTION, S, Sx, TEAL, hold, notesCheck, pctOf, prog, PLP, PlateB, LobeDiagram, Tally, Field,
} from './shared';

// ---------- the item table ----------
const GROUPS = [{g: 'A', ...ITEM.A}, {g: 'B', ...ITEM.B}];
const ItemTable: React.FC<{x: number; y: number; at: number; rowAt?: [number, number]; totals?: number; work?: [number, number]; s?: number}> = ({x, y, at, rowAt = [-30, -30], totals, work, s = 1}) => {
	const f = useCurrentFrame();
	const cols = [180, 200, 200, ...(totals !== undefined ? [160] : []), ...(work !== undefined ? [420] : [])].map(c => c * s);
	const heads = ['group', 'attached', 'free', ...(totals !== undefined ? ['total'] : []), ...(work !== undefined ? ['frequency attached'] : [])];
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const W = cols.reduce((a, b) => a + b, 0);
	const rh = 70 * s;
	return (
		<g opacity={prog(f, at, 12)}>
			<rect x={x} y={y} width={W} height={rh * 3} rx={14} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={x} y={y} width={W} height={rh} rx={14} fill="#efe6d4" />
			{heads.map((h, i) => <Sx key={h} x={xs[i] + 20} y={y + rh * 0.64} text={h} size={30 * s} color={INK} weight={800} at={i === 3 && totals !== undefined ? totals : i === 4 || (i === 3 && totals === undefined) ? work?.[0] ?? -30 : -30} />)}
			{GROUPS.map((g, r) => {
				const ry = y + rh * (r + 1);
				const tot = g.att + g.free;
				return (
					<g key={g.g} opacity={prog(f, rowAt[r], 12)}>
						<line x1={x + 10} y1={ry} x2={x + W - 10} y2={ry} stroke={EDGE} strokeWidth={2} />
						<Sx x={xs[0] + 20} y={ry + rh * 0.64} text={g.g} size={34 * s} color={INK} weight={800} at={-30} />
						<Sx x={xs[1] + 20} y={ry + rh * 0.64} text={String(g.att)} size={34 * s} color={INK} weight={700} at={-30} />
						<Sx x={xs[2] + 20} y={ry + rh * 0.64} text={String(g.free)} size={34 * s} color={INK} weight={700} at={-30} />
						{totals !== undefined ? <Sx x={xs[3] + 20} y={ry + rh * 0.64} text={String(tot)} size={34 * s} color={TEAL} weight={800} at={totals + r * 6} /> : null}
						{work !== undefined ? <Sx x={xs[4] + 20} y={ry + rh * 0.64} text={`${g.att} / ${tot} × 100 = ${pctOf(g.att, tot)}%`} size={30 * s} color={AMBER_INK} weight={800} at={work[r]} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- 12. Attempt ----------
const K12 = cues(S('attempt'), {turn: 'Your turn', groups: 'in two school groups', a18: 'Group A has eighteen attached', a42: 'forty-two free', b30: 'Group B has thirty attached', b30f: 'thirty free', calc: 'Calculate the frequency', compare: 'compare the groups', limit: 'give one limitation', pause: 'Pause here to answer'});
const DA = '(a) Frequency of attached earlobes in each group.';
const DB = '(b) Compare the groups.';
const DC = '(c) One limitation of the data.';
export const SceneAttemptP03: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="Your turn: earlobes in two school groups" at={K12.turn} size={50} />
			<Overlay>
				<ItemTable x={120} y={230} at={K12.groups} rowAt={[K12.a18, K12.b30]} />
				<GreyTag x={760} y={240} text="example data" at={K12.groups + 10} size={22} />
				<Sx x={120} y={530} text={DA} size={32} color={INK} weight={700} at={K12.calc} />
				<AnswerBox x={120} y={548} w={1050} h={70} at={K12.calc + 8} lines={1} />
				<Sx x={120} y={690} text={DB} size={32} color={INK} weight={700} at={K12.compare} />
				<AnswerBox x={120} y={708} w={1050} h={70} at={K12.compare + 8} lines={1} />
				<Sx x={120} y={850} text={DC} size={32} color={INK} weight={700} at={K12.limit} />
				<AnswerBox x={120} y={868} w={1050} h={70} at={K12.limit + 8} lines={1} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1560} y={720} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 13. Feedback ----------
const K13 = cues(S('feedback'), {sixty: 'Each group has sixty people', a30: 'thirty per cent', b50: 'fifty per cent', so: 'So attached earlobes were more common', limit: 'One limitation', chance: 'the difference could be chance', ifs: 'If you divided eighteen', wrong: 'used the wrong total'});
export const SceneFeedbackP03: React.FC = () => {
	const pa = pctOf(ITEM.A.att, ITEM.A.att + ITEM.A.free), pb = pctOf(ITEM.B.att, ITEM.B.att + ITEM.B.free);
	return (
		<>
			<Heading text="Feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={`${DA}   ${DB}   ${DC}`} size={25} color={INK_SOFT} weight={600} at={0} />
				<ItemTable x={120} y={240} at={-30} totals={K13.sixty} work={[K13.a30 - 20, K13.b50 - 20]} />
				<ModelLine x={160} y={560} text={`(a) A: ${pa}%   B: ${pb}%`} at={K13.b50 + 10} size={34} />
				<ModelLine x={160} y={630} text={`(b) higher in group B (${pb}% vs ${pa}%), in these samples`} at={K13.so} size={34} />
				<ModelLine x={160} y={700} text="(c) small sample from one school; the difference could be chance" at={K13.limit} size={34} />
				<MistakeChip x={160} y={790} text={`${ITEM.A.att} / ${ITEM.A.free} = ${pctOf(ITEM.A.att, ITEM.A.free)}%`} at={K13.ifs} cross={K13.wrong} size={32} />
				<Sx x={560} y={830} text="divide by the whole group" size={38} color={AMBER_INK} hand at={K13.wrong + 10} />
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const K14 = cues(S('decision-rule'), {so: 'to collect frequency data well', agree: 'get agreement and keep it anonymous', define: 'define the categories first', count: 'count with two people', divide: 'divide by the right total', graph: 'graph it clearly', limits: 'name the limits', next: 'Next: how DNA sequencing'});
const BASES = ['A', 'T', 'G', 'C', 'C', 'A'];
const BASEC: Record<string, string> = {A: '#f4b5a4', T: '#f6c35a', G: '#a8d0b0', C: '#adb6ee'};
export const SceneDecisionP03: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Agree; anonymous.', at: K14.agree}, {t: 'Define first (with unsure).', at: K14.define}, {t: 'Two counters.', at: K14.count},
		{t: 'Frequency = count / stated total.', at: K14.divide}, {t: 'Column graph from zero.', at: K14.graph}, {t: "Name the limits; 'in this sample'.", at: K14.limits},
	];
	const RY = (i: number) => 236 + i * 104;
	return (
		<>
			<Heading text="To collect frequency data well" at={K14.so} size={54} />
			<Overlay>
				{/* one row card per step, each entering with its picture as it is said */}
				{lines.map((l, i) => (
					<g key={i}>
						<Panel x={110} y={RY(i)} w={1180} h={90} r={16} stroke={i === lines.length - 1 ? AMBER : EDGE} o={prog(f, l.at - 6, 10)} />
						<Sx x={360} y={RY(i) + 60} text={l.t} size={46} color={INK} hand at={l.at} />
					</g>
				))}
				<PlateB p={PLP.slip} cx={232} cy={RY(0) + 45} w={150} rot={-4} o={prog(f, K14.agree, 10)} />
				{(['free', 'attached', 'unsure'] as const).map((k, i) => <LobeDiagram key={k} x={170 + i * 60} y={RY(1) + 18} kind={k} at={K14.define} s={0.33} labels={false} />)}
				<g opacity={prog(f, K14.count, 10)}>
					<Tally x={160} y={RY(2) + 28} n={5} h={34} color="#3d5a7a" gap={9} />
					<Tally x={250} y={RY(2) + 28} n={5} h={34} color="#8a4a2a" gap={9} />
				</g>
				<Sx x={232} y={RY(3) + 62} text={`${ITEM.A.att} / 60`} size={40} color={AMBER_INK} weight={800} anchor="middle" at={K14.divide} />
				<ColumnGraph x={170} y={RY(4) + 14} w={130} h={64} data={GRAPH_DATA} at={K14.graph} max={40} step={40} size={12} labels={false} />
				<Field x={168} y={RY(5) + 20} cols={7} rows={3} p={prog(f, K14.limits, 20)} size={12} gap={6} />
				<Sx x={1350} y={262} text="the class result (example data)" size={28} color={INK_SOFT} hand at={K14.so + 10} />
				<ColumnGraph x={1420} y={300} w={400} h={230} data={GRAPH_DATA} at={K14.so + 10} size={20} />
				<Fade at={K14.next}>
					<Panel x={1330} y={600} w={510} h={290} stroke={AMBER} sw={3.5} />
					{BASES.map((b, i) => (
						<g key={i}>
							<rect x={1370 + i * 66} y={640} width={58} height={68} rx={8} fill={BASEC[b]} stroke={INK} strokeWidth={2} />
							<text x={1399 + i * 66} y={687} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}} fill={INK}>{b}</text>
						</g>
					))}
					<Sx x={1370} y={780} text="Next: DNA sequencing" size={40} color={INK} hand />
					<Sx x={1370} y={836} text="and profiling" size={40} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = notesCheck([
	'Choose a visible, quick, non-sensitive characteristic. Count the characteristic, not alleles.',
	'Ethics: teacher approval; anyone can say no; no names on the slips.',
	'Write the definitions first, with an "unsure" box. Two people count.',
	'Frequency = count / total × 100. Always state the total.',
	'Pool classes by adding counts. Column graph: gaps, y-axis from zero, title, labelled axes.',
	'Small samples scatter by chance; bigger samples give better estimates.',
	'Trend, pattern, relationship (association, not cause). Write "in this sample".',
]);
export const SceneNotesP03: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 180, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 16}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 16, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={100} style={{position: 'absolute', left: 110, top: 700, width: 1700, boxSizing: 'border-box', padding: '22px 34px', background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 26}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 34, fontWeight: 700, color: AMBER_INK}}>Remember</div>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: INK, lineHeight: 1.25}}>Agree, define, count twice, state the total.<br />A frequency describes the sample, not every person.</div>
		</Enter>
	</>
);
void QUESTION;
