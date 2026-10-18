// P03 (Biology practical) scenes 12 to 15: the attempt (the site's two-group task, card kept complete through the 10 s
// countdown and after it; no totals or percentages on it), brief feedback (totals, working, one crossed-out mistake),
// the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, ColumnGraph, Countdown, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GRAPH_DATA, GreyTag, HandText, Heading, INK, INK_SOFT, ITEM,
	MistakeChip, ModelLine, Overlay, Panel, QUESTION, S, Sx, TEAL, hold, notesCheck, pctOf, prog,
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
	return (
		<>
			<Heading text="To collect frequency data well" at={K14.so} size={54} />
			<Overlay>
				<Panel x={120} y={220} w={1000} h={560} stroke={AMBER} o={prog(f, K14.agree - 10, 12)} />
				{lines.map((l, i) => <Sx key={i} x={160} y={300 + i * 82} text={l.t} size={46} color={INK} hand at={l.at} />)}
				<ColumnGraph x={1290} y={300} w={460} h={260} data={GRAPH_DATA} at={K14.graph} size={18} />
				<Fade at={K14.next}>
					<Panel x={1180} y={820} w={660} h={130} stroke={AMBER} sw={3.5} />
					{BASES.map((b, i) => (
						<g key={i}>
							<rect x={1210 + i * 44} y={846} width={38} height={44} rx={6} fill={BASEC[b]} stroke={INK} strokeWidth={2} />
							<text x={1229 + i * 44} y={877} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24}} fill={INK}>{b}</text>
						</g>
					))}
					<Sx x={1210} y={930} text="Next: DNA sequencing and profiling" size={32} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = notesCheck([
	'Choose a visible, quick, non-sensitive characteristic that cannot identify anyone (earlobe shape, tongue rolling). Neither is a one-gene trait: count the characteristic, not alleles.',
	'Ethics: teacher approval; say what and why; anyone can say no; no names (anonymous slips).',
	'Method: definitions before counting, with an "unsure" box; self-check with a mirror; fold slips into a box; two people count and check totals agree.',
	'Frequency = count / total x 100; state the total (for example, "of the 28 classified"). Pool classes by adding counts. Present categories on a column graph: gaps, y-axis from zero, title, labelled axes with units.',
	'Small samples scatter by chance; bigger samples give better estimates. Analyse: trend (overall direction), pattern (a repeated feature), relationship (two characteristics change together; association, not cause). Limits: one school, small sample, classification errors. Valid: clear definitions. Reliable: two counters, pool, repeat. Write "in this sample".',
]);
export const SceneNotesP03: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 165, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 18}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 31, fontWeight: 500, color: INK, lineHeight: 1.26}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 925}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Agree, define, count twice, state the total.</div>
			<div style={{fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 600, color: INK_SOFT, marginTop: 6}}>A frequency describes the sample, not every person.</div>
		</Enter>
	</>
);
void QUESTION;
