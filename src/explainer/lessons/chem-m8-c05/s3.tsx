// M8 C05 scenes 13 to 18: two worded attempts (the full question, table and strip map arrive at once and stay through
// the countdown), brief feedback with the givens underlined as they are used and one crossed mistake each, the handoff
// (trace, choose, judge; dissolved oxygen and BOD next) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {COLM, DOM, FARM, LAKE, MICRO, THERMO, hold, sc} from './common';
import type {PDef} from './common';
import {
	ALG, BIOL, BottleOutline, CHEM, Fade, GREYX, INK, INK_SOFT, KeyNotesBoard, MistakeX, NAVY, PHYS, PauseHold, PicV, QText, RED8, RowCard, ShrinkAt, Sx, TaskLine, qCheck, vis,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number}> = ({h}) => <rect x={100} y={185} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;

// ---------- 13/14. Attempt 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: "A creek flows past a dairy farm. Water was sampled at three sites on the same morning. Site 1 is upstream of the farm. Site 2 is just below a drain from the dairy's milking shed. Site 3 is 5 km downstream, in a slow, shallow pool with green scum on the surface.", at: 4},
	{text: '(a) Identify the most likely source of the nutrients, using the data.', at: 4, para: true, weight: 700},
	{text: '(b) Explain why dissolved oxygen is lowest at Site 3, not at Site 2.', at: 4, para: true, weight: 700},
] as QBlock[], marks);
const TX = 140, TY = 700, TW = [140, 200, 230, 170, 280], RH = 46;
const tcol = (i: number) => TX + TW.slice(0, i).reduce((a, b) => a + b, 0);
const ROWS = [['Site 1', '0.40', '0.03', '8.6', '40'], ['Site 2', '2.60', '0.42', '7.9', '2,400'], ['Site 3', '1.10', '0.15', '3.2', '300']];
const Table1: React.FC = () => {
	const heads = ['site', 'nitrate (mg/L)', 'phosphate (mg/L)', 'DO (mg/L)', 'E. coli (per 100 mL)'];
	return (
		<g>
			<rect x={TX} y={TY} width={1020} height={RH * 4} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
			<rect x={TX} y={TY} width={1020} height={RH} fill="#f1ebdf" />
			{heads.map((h, i) => <Sx key={i} x={tcol(i) + 12} y={TY + 32} text={h} size={26} color={INK} weight={700} at={-1000} />)}
			{ROWS.map((r, k) => r.map((v, i) => <Sx key={k + '-' + i} x={i ? tcol(i) + TW[i] / 2 : tcol(i) + 12} y={TY + RH * (k + 1) + 33} text={v} size={30} color={INK} anchor={i ? 'middle' : 'start'} weight={i ? 600 : 700} at={-1000} />))}
			{[1, 2, 3].map(k => <line key={k} x1={TX} x2={TX + 1020} y1={TY + RH * k} y2={TY + RH * k} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />)}
			{[1, 2, 3, 4].map(i => <line key={i} x1={tcol(i)} x2={tcol(i)} y1={TY} y2={TY + RH * 4} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />)}
			<Sx x={TX} y={TY + RH * 4 + 32} text="nitrate and phosphate as the ion" size={26} color={INK_SOFT} weight={600} at={-1000} />
		</g>
	);
};
const CREEK: [number, number][] = [[1230, 320], [1380, 360], [1500, 420], [1600, 520], [1700, 600], [1790, 640]];
const SITES: [number, number, string][] = [[1300, 342, 'Site 1'], [1505, 425, 'Site 2'], [1735, 615, 'Site 3']];
const StripMap: React.FC<{o?: number}> = ({o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={'M' + CREEK.map(p => p.join(',')).join(' L')} fill="none" stroke="#7fb0d6" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
		<ellipse cx={1735} cy={615} rx={80} ry={42} fill="#9cc58a" opacity={0.55} stroke="#5a8a3a" strokeWidth={3} />
		<PicV p={FARM} x={1250} y={420} h={150} />
		<path d="M1420,470 Q1460,440 1490,425" fill="none" stroke="#8a6d3b" strokeWidth={6} strokeLinecap="round" />
		<Sx x={1400} y={600} text="dairy drain" size={28} color="#8a6d3b" hand weight={700} at={-1000} />
		{SITES.map(([x, y, t]) => (
			<g key={t}>
				<circle cx={x} cy={y} r={12} fill={NAVY} stroke="#fffdf8" strokeWidth={3} />
				<Sx x={x} y={y - 22} text={t} size={28} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</g>
		))}
		<Sx x={1800} y={700} text="slow, shallow; green scum" size={28} color="#4a7a2a" anchor="end" hand weight={700} at={-1000} />
		<Sx x={1240} y={270} text="flow →" size={28} color="#3f7fb0" hand weight={700} at={-1000} />
	</g>
));
const Question1: React.FC<{marks?: QMark[]; map?: number}> = ({marks, map = 1}) => (
	<>
		<Card h={760} />
		<QText q={Q1(marks)} x={TX} y={250} w={1020} size={32} card={false} />
		<Table1 />
		<StripMap o={map} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={1020} cx={1500} cy={810} />
	</svg>
);
const F1 = 'feedback-1';
const K14 = cues(sc(F1), {jump: 'jump', drain: 'dairy drain', points: 'points to', oxygen: 'Oxygen is', time: 'needs time', slow: 'that slow', grew: 'grew', bacteria: 'bacteria used', expect: 'Expecting', trap: 'trap'});
const Cell: React.FC<{r: number; c: number; at: number; color: string}> = ({r, c, at, color}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	return v > 0.01 ? <rect x={tcol(c) + 4} y={TY + RH * (r + 1) + 4} width={TW[c] - 8} height={RH - 8} rx={6} fill="none" stroke={color} strokeWidth={4} opacity={v} /> : null;
};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const R = 1210;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Your turn" at={-1000} />
			<QTag />
			<Question1 map={1 - vis(f, K14.jump - 10)} marks={[
				{phrase: "Site 2 is just below a drain from the dairy's milking shed.", at: K14.jump, color: '#8a6d3b'},
				{phrase: '5 km downstream, in a slow, shallow pool with green scum', at: K14.time, color: ALG},
			]} />
			{[0, 1].flatMap(r => [1, 2, 4].map(c => <Cell key={r + '-' + c} r={r} c={c} at={K14.jump + 6} color="#8a6d3b" />))}
			<Cell r={2} c={3} at={K14.time} color={ALG} />
			<Sx x={R} y={282} text="nitrate × 6.5, phosphate × 14," size={34} color={INK} weight={700} at={K14.jump} />
			<Sx x={R} y={324} text="E. coli × 60 (Site 1 → Site 2)" size={34} color={INK} weight={700} at={K14.jump + 10} />
			<Sx x={R} y={400} text="(a) the dairy drain is the most" size={34} color={NAVY} weight={800} at={K14.drain} />
			<Sx x={R} y={442} text="likely source; E. coli: animal waste" size={32} color={NAVY} weight={800} at={K14.points} />
			<Sx x={R} y={540} text="feed → bloom → die → decay → suffocate" size={28} color={GREYX} weight={700} at={K14.time} />
			<Sx x={R} y={598} text="(b) likely: a bloom grew in the" size={32} color={ALG} weight={800} at={K14.slow} />
			<Sx x={R} y={638} text="slow pool; dead algae decayed," size={32} color={ALG} weight={800} at={K14.grew} />
			<Sx x={R} y={678} text="and bacteria used the O_2; still" size={32} color={ALG} weight={800} at={K14.bacteria} />
			<Sx x={R} y={718} text="water mixes little oxygen back in" size={32} color={ALG} weight={800} at={K14.bacteria + 10} />
			<MistakeX x={140} y={960} text="lowest O_2 where nutrients are highest" at={K14.expect} cross={K14.trap} note="the crash is delayed" size={32} />
			{void K14.oxygen}
		</svg>
	);
};

// ---------- 15/16. Attempt 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: 'A water authority wants an early warning that a dam supplying drinking water is heading toward an algal bloom.', at: 4},
	{text: 'Choose one physical, one chemical and one biological parameter to monitor, and explain what each would show.', at: 4, para: true, weight: 700},
] as QBlock[], marks);
const BOXES: [string, string][] = [['physical', PHYS], ['chemical', CHEM], ['biological', BIOL]];
const Question2: React.FC<{marks?: QMark[]; boxes?: boolean}> = ({marks, boxes = true}) => (
	<>
		<Card h={665} />
		<QText q={Q2(marks)} x={140} y={270} w={1180} size={38} card={false} />
		<PicV p={LAKE.clear} x={1390} y={230} h={220} />
		{boxes ? BOXES.map(([t, c], i) => (
			<g key={t}>
				<rect x={140 + i * 560} y={600} width={520} height={220} rx={16} fill="#fffdf8" stroke={c} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={170 + i * 560} y={650} text={t} size={38} color={c} hand weight={700} at={-1000} />
			</g>
		)) : null}
	</>
);
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PauseHold h={hold(A2)} at={K15.pause} x={140} y={1010} cx={1640} cy={940} />
	</svg>
);
const F2 = 'feedback-2';
const K16 = cues(sc(F2), {set: 'One good', temp: 'temperature', warm: 'warm, still', phos: 'Phosphate', nutrients: 'nutrients come', cell: 'cell counts', catch: 'catch the', count: 'Counting dead', warning: 'warning', crash: 'crash'});
type FCol = {t: string; c: string; p: PDef; ph: number; lines: [string, number, number?, string?][]; at: number};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const cols: FCol[] = [
		{t: 'temperature', c: PHYS, p: THERMO, ph: 120, at: K16.temp, lines: [['warm, still water favours', K16.warm], ['blooms; holds less O_2', K16.warm + 20]]},
		{t: 'phosphate', c: CHEM, p: COLM, ph: 170, at: K16.phos, lines: [['rises before the bloom', K16.nutrients], ['nitrate also accepted', K16.nutrients + 20, 28, GREYX]]},
		{t: 'algal cell counts', c: BIOL, p: MICRO, ph: 190, at: K16.cell, lines: [['the bloom starting', K16.catch, 38, ALG]]},
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Last one" at={-1000} />
			<ShrinkAt cx={100} cy={185} k={0.6} at={10}>
				<Question2 boxes={false} marks={[{phrase: 'early warning', at: K16.nutrients, color: RED8}]} />
			</ShrinkAt>
			{cols.map((c, i) => {
				const x = 96 + i * 592;
				return (
					<g key={c.t}>
						<rect x={x} y={560} width={560} height={350} rx={18} fill="#fffdf8" stroke={c.c} strokeWidth={4} />
						<Sx x={x + 28} y={610} text={['physical', 'chemical', 'biological'][i]} size={32} color={c.c} hand weight={700} at={-1000} />
						<PicV p={c.p} x={x + 560 - 28 - (c.p.box[2] / c.p.box[3]) * c.ph} y={580} h={c.ph} o={0.35 + 0.65 * vis(f, c.at - 6)} />
						<Sx x={x + 28} y={790} text={c.t + ':'} size={40} color={c.c} weight={800} at={c.at} />
						{c.lines.map(([t, a, s, col], k) => <Sx key={k} x={x + 28} y={836 + k * 40} text={t} size={s ?? 32} color={col ?? INK} weight={700} at={a} />)}
					</g>
				);
			})}
			<Sx x={96} y={960} text="other justified choices: turbidity; day-night O_2 swings" size={30} color={INK_SOFT} weight={600} at={K16.catch + 20} />
			<MistakeX x={1100} y={930} text="count dead fish" at={K16.count} cross={K16.warning} note="evidence, not a warning" size={36} />
			{void K16.set}{void K16.crash}
		</svg>
	);
};

// ---------- 17. Handoff ----------
const K17 = cues(sc('handoff'), {so: 'So', trace: 'trace it', choose: 'choose evidence', job: 'job', next: 'Next', oxygen: 'that oxygen', test: 'the test'});
export const SceneHandoff: React.FC = () => {
	const rows: [string, string, number, string][] = [
		['Trace', 'source → nutrients → bloom → decay → low O_2', K17.trace, RED8],
		['Choose', 'physical, chemical, biological, for the purpose', K17.choose, CHEM],
		['Judge', "against the guideline for that water's use", K17.job, NAVY],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Why we monitor water" at={0} />
			{rows.map(([t, b, a, c], i) => <RowCard key={t} x={96} y={210 + i * 230} w={1150} h={190} title={t} body={b} at={4 + i * 6} lit={a} color={c} size={36} />)}
			<PicV p={LAKE.crash} x={1320} y={230} h={290} />
			<PicV p={DOM} x={1360} y={570} h={300} at={K17.next} />
			<BottleOutline x={1700} y={760} at={K17.test} label="BOD bottle" color={NAVY} s={1.3} />
			<Fade at={K17.next}>
				<rect x={1270} y={930} width={570} height={80} rx={40} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1555} y={982} text="Next: dissolved oxygen and BOD" size={32} color={NAVY} anchor="middle" weight={700} at={-1000} />
			</Fade>
			{void K17.so}{void K17.oxygen}
		</svg>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Nitrogen and phosphorus are needed nutrients; the scarcer one (often phosphorus in fresh water) holds growth back.',
	'Sources: fertiliser runoff (diffuse), sewage effluent (point), urban stormwater.',
	'Feed → bloom → die → decay → suffocate: bacteria decomposing dead algae use O_2 faster than it dissolves back in, so the crash can come after the bloom.',
	'Physical: temperature, turbidity. Chemical: pH, dissolved oxygen, conductivity, nitrate, phosphate. Biological: E. coli, algal cell counts.',
	'Monitor for early warning, to find the source, to compare with the guideline for that use, to tell treatment what to remove and to check a fix.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={34} aidTop={720} aids={['Feed, bloom, die, decay, suffocate.', 'Warm water holds less oxygen.']} tag="one measurement can't judge water quality" />
);
