// M8 C06 scenes 15 to 21: the memory aid (two framed lines with the meter and shutter, the incubator and day strip, the
// ratio ladder and the endpoint flask), two worded attempts (the full card, its plates and the countdown), brief feedback
// (givens underlined as they are used, one stage line each, the framed answer, one crossed mistake; feedback 2's DO bars
// with the decrease brackets and the teaching-guide band), the handoff (three rows with their plates; next: the
// functional group tests) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BROM, BURETTE, DOM, IFL, INCUB, LAKE, NB, TILE, hold, sc} from './common';
import {
	ANS, DayStrip, Fade, FlaskTint, Framed, GREYT, GuideBand, INK, INK_SOFT, IOD_INK, KeyNotesBoard, MNO_INK, MistakeX, NAVY, O2_INK, P, PauseHold, PicF, PicV, QText, RatioLadder, RowCard, Shutter, ShrinkAt,
	Sx, TaskLine, WLine, BuretteFill, burAt, picWp, qCheck, rigGeom, vis, RED8,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number}> = ({h}) => <rect x={100} y={185} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;
/** Small titration plates for the card: the burette over the clear flask. */
const MiniRig: React.FC<{tx: number; ty: number; bh?: number; fh?: number}> = ({tx, ty, bh = 330, fh = 200}) => {
	const b = burAt(tx, ty, bh);
	const G = rigGeom(tx, ty, fh);
	const tw = G.w * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	return (
		<g>
			<PicF p={TILE} x={tx - tw / 2} y={G.y + fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={bh} level={() => 10.4} />
			<FlaskTint x={G.x} y={G.y} h={fh} clear={-1000} />
		</g>
	);
};

// ---------- 15. Memory aid ----------
const K15 = cues(sc('memory-aid'), {two: 'Two lines', do: 'DO is', now: 'now', bod: 'BOD is', later: 'later', and: 'And for', winkler: 'Winkler', one: 'one oxygen', four: 'four thiosulfates'});
const Hi: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; color: string}> = ({x, y, w, h, at, out, color}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	return v > 0.01 ? <rect x={x} y={y} width={w} height={h} rx={14} fill={color} opacity={0.22 * v} /> : null;
};
export const SceneAid: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Two lines to keep" at={0} size={62} />
		<rect x={96} y={200} width={1728} height={380} rx={24} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
		<Hi x={116} y={232} w={760} h={96} at={K15.do} out={K15.bod} color={O2_INK} />
		<Hi x={116} y={372} w={920} h={96} at={K15.bod} out={K15.and} color={MNO_INK} />
		<Sx x={130} y={305} text="DO = oxygen now." size={72} color={O2_INK} hand weight={700} at={4} />
		<Sx x={130} y={445} text="BOD = oxygen used later." size={72} color={MNO_INK} hand weight={700} at={10} />
		<Sx x={130} y={540} text="BOD: the O_2 microbes use in the 5-day test" size={32} color={INK_SOFT} weight={600} at={K15.later} />
		<PicV p={DOM} x={1150} y={220} h={240} />
		<Shutter x={1380} y={280} r={34} snap={K15.now} />
		<PicV p={INCUB} x={1470} y={230} h={240} />
		<DayStrip x={1440} y={500} w={340} at={6} from={K15.later - 10} to={K15.later + 60} />
		<rect x={96} y={620} width={1728} height={400} rx={24} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
		<Hi x={116} y={650} w={900} h={100} at={K15.winkler} out={K15.four + 60} color={NAVY} />
		<Sx x={130} y={725} text="Winkler: 1 O_2 : 4 S_2O_3^{2−}" size={68} color={NAVY} weight={800} at={16} />
		<Sx x={130} y={830} text="One oxygen, four thiosulfates." size={58} color={NAVY} hand weight={700} at={20} />
		<Sx x={130} y={930} text="(fix, acidify, titrate: 1 → 2 → 2 → 4)" size={36} color={INK_SOFT} weight={600} at={20} />
		<RatioLadder x={1170} y={650} gap={86} size={30} w={300} rungs={[
			{t: '1 O_2', color: O2_INK, at: 6},
			{t: '2 MnO(OH)_2', color: MNO_INK, at: 10},
			{t: '2 I_2', color: IOD_INK, at: 14},
			{t: '4 S_2O_3^{2−}', color: NAVY, at: 18},
		]} />
		<PicF p={IFL.clear} x={1560} y={720} h={260} />
		{void K15.two}{void K15.and}
	</svg>
);

// ---------- 16/17. Attempt 1 ----------
const A1 = 'attempt-1';
const K16 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'A 50.00 mL sample of river water was analysed for dissolved oxygen by the Winkler method. The iodine released was titrated with 0.00500 mol L⁻¹ sodium thiosulfate solution. The average titre was 10.40 mL.', at: 2},
	{text: 'Overall, 1 mol of O₂ produces iodine that reacts with 4 mol of S₂O₃²⁻.', at: 2, para: true},
	{text: 'Calculate the dissolved oxygen concentration of the river water in mg L⁻¹. (M(O₂) = 32.00 g mol⁻¹)', at: 2, para: true, weight: 700},
] as QBlock[], marks);
const Question1: React.FC<{marks?: QMark[]}> = ({marks}) => (
	<>
		<Card h={600} />
		<QText q={Q1(marks)} x={140} y={266} w={1220} size={42} card={false} />
		<MiniRig tx={1580} ty={500} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PauseHold h={hold(A1)} at={K16.pause} x={140} y={900} cx={1560} cy={900} />
	</svg>
);
const F1 = 'feedback-1';
const K17 = cues(sc(F1), {moles: 'Moles of', ctv: 'c times', is: 'is five', divide: 'Divide by four', oxygen: 'oxygen', times: 'times thirty', point: 'point four one six', fifty: 'fifty millilitres', thats: "That's eight", eight: 'eight point three two', using: 'Using one', gives: 'gives thirty', four: 'four times', recheck: 'Recheck', ratio: 'ratio'});
export const SceneFeedback1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={-1000} />
		<QTag />
		<ShrinkAt cx={100} cy={185} k={0.62} at={4}>
			<Question1 marks={[
				{phrase: '0.00500 mol L⁻¹', at: K17.ctv, color: NAVY},
				{phrase: 'titre was 10.40 mL', at: K17.ctv + 8, color: NAVY},
				{phrase: '1 mol of O₂ produces iodine that reacts with 4 mol of S₂O₃²⁻', at: K17.divide, color: '#c9781a'},
				{phrase: 'A 50.00 mL sample', at: K17.thats, color: ANS},
			]} />
		</ShrinkAt>
		<WLine x={96} y={590} size={44} dim={K17.divide} dimTo={0.5} items={P('n(S_2O_3^{2−}) = 0.00500 × 0.01040', K17.ctv, {t: `= 5.20 × 10^{−5}${NB}mol`, color: NAVY}, K17.is)} />
		<WLine x={96} y={670} size={44} dim={K17.thats} dimTo={0.5} items={P('n(O_2) = 5.20 × 10^{−5} ÷ 4', K17.divide, {t: `= 1.30 × 10^{−5}${NB}mol`, color: NAVY}, K17.oxygen)} />
		<WLine x={96} y={750} size={44} dim={K17.thats} dimTo={0.5} items={P('m(O_2) = 1.30 × 10^{−5} × 32.00', K17.times, {t: `= 0.416${NB}mg in 50.00${NB}mL`, color: NAVY}, K17.point)} />
		<WLine x={96} y={840} size={48} items={P(`DO = 0.416${NB}mg ÷ 0.05000${NB}L`, K17.thats)} />
		<Framed x={96} y={960} text={`= 8.32${NB}mg/L`} at={K17.eight - 6} size={62} color={ANS} />
		<MistakeX x={1100} y={800} text={`33.3${NB}mg/L (1 : 1)`} at={K17.using} cross={K17.recheck} note="four times too big: use 1 : 4" size={38} />
		{void K17.moles}{void K17.fifty}{void K17.gives}{void K17.four}{void K17.ratio}
	</svg>
);

// ---------- 18/19. Attempt 2 ----------
const A2 = 'attempt-2';
const K18 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: "Water was sampled from a creek at two sites: P, upstream of a food-processing plant's outlet, and Q, downstream of it. Each sample filled two sealed bottles. The dissolved oxygen in one bottle was measured immediately. The other bottle was kept in the dark at 20 °C for 5 days, then its dissolved oxygen was measured.", at: 2},
	{text: '(a) Calculate the five-day decrease in dissolved oxygen for each sample.', at: 2, para: true, weight: 700},
	{text: '(b) Explain what the result for Q suggests about dissolved oxygen in the creek downstream of the outlet.', at: 2, para: true, weight: 700},
] as QBlock[], marks);
const TX = 140, TY = 730, TW = [130, 330, 620], RH = 52;
const tcol = (i: number) => TX + TW.slice(0, i).reduce((a, b) => a + b, 0);
const ROWS = [['P', '8.8', '7.9'], ['Q', '7.6', '1.8']];
const Table2: React.FC<{hi?: {r: number; at: number; color: string}[]}> = ({hi = []}) => {
	const f = useCurrentFrame();
	const heads = ['site', 'DO at start (mg/L)', 'DO after 5 days, dark, 20 °C (mg/L)'];
	const W = TW.reduce((a, b) => a + b, 0);
	return (
		<g>
			<rect x={TX} y={TY} width={W} height={RH * 3} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
			<rect x={TX} y={TY} width={W} height={RH} fill="#f1ebdf" />
			{heads.map((h, i) => <Sx key={i} x={tcol(i) + 14} y={TY + 36} text={h} size={28} color={INK} weight={700} at={-1000} />)}
			{hi.map((h, k) => { const v = vis(f, h.at); return v > 0.01 ? <rect key={'h' + k} x={TX + 4} y={TY + RH * (h.r + 1) + 4} width={W - 8} height={RH - 8} rx={8} fill="none" stroke={h.color} strokeWidth={4} opacity={v} /> : null; })}
			{ROWS.map((r, k) => r.map((v, i) => <Sx key={k + '-' + i} x={i ? tcol(i) + TW[i] / 2 : tcol(i) + 14} y={TY + RH * (k + 1) + 38} text={v} size={34} color={INK} anchor={i ? 'middle' : 'start'} weight={i ? 600 : 800} at={-1000} />))}
			{[1, 2].map(k => <line key={k} x1={TX} x2={TX + W} y1={TY + RH * k} y2={TY + RH * k} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />)}
			{[1, 2].map(i => <line key={i} x1={tcol(i)} x2={tcol(i)} y1={TY} y2={TY + RH * 3} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />)}
		</g>
	);
};
const StripMap: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<path d={`M${x},${y + 40} Q${x + 200},${y + 10} ${x + 260},${y + 120} T${x + 470},${y + 230}`} fill="none" stroke="#7fb0d6" strokeWidth={16} strokeLinecap="round" />
		<rect x={x + 150} y={y - 40} width={120} height={60} rx={8} fill="#e8e1d2" stroke={INK_SOFT} strokeWidth={3} />
		<Sx x={x + 210} y={y - 52} text="food plant" size={28} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
		<path d={`M${x + 240},${y + 20} L${x + 262},${y + 96}`} stroke="#8a6d3b" strokeWidth={6} strokeLinecap="round" />
		<path d={`M${x + 250},${y + 84} L${x + 262},${y + 100} L${x + 272},${y + 82}`} fill="none" stroke="#8a6d3b" strokeWidth={5} strokeLinecap="round" />
		<Sx x={x + 290} y={y + 76} text="outlet" size={28} color="#8a6d3b" hand weight={700} at={-1000} />
		<circle cx={x + 90} cy={y + 30} r={13} fill={NAVY} stroke="#fffdf8" strokeWidth={3} />
		<Sx x={x + 90} y={y + 82} text="P" size={34} color={NAVY} anchor="middle" weight={800} at={-1000} />
		<circle cx={x + 380} cy={y + 196} r={13} fill={NAVY} stroke="#fffdf8" strokeWidth={3} />
		<Sx x={x + 380} y={y + 250} text="Q" size={34} color={NAVY} anchor="middle" weight={800} at={-1000} />
		<Sx x={x} y={y + 290} text="flow →" size={28} color="#3f7fb0" hand weight={700} at={-1000} />
	</g>
);
const Question2: React.FC<{marks?: QMark[]; hi?: {r: number; at: number; color: string}[]}> = ({marks, hi}) => (
	<>
		<Card h={760} />
		<QText q={Q2(marks)} x={140} y={256} w={1160} size={34} card={false} />
		<Table2 hi={hi} />
		<StripMap x={1330} y={300} />
		<PicV p={INCUB} x={1470} y={640} h={240} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PauseHold h={hold(A2)} at={K18.pause} x={1010} y={1032} cx={1340} cy={790} />
	</svg>
);
const F2 = 'feedback-2';
const K19 = cues(sc(F2), {p: 'point nine', q: "Q's by", five: 'five point eight', carries: 'Q carries', organic: 'organic waste', flows: 'flows on', downstream: 'DO downstream', warm: 'warm nights', calling: 'Calling', trap: 'trap', left: 'left'});
/** DO bars for P and Q: start and after 5 days, with the decrease bracket on cue. */
const DoBars: React.FC<{x: number; base: number; h: number; pAt: number; qAt: number}> = ({x, base, h, pAt, qAt}) => {
	const f = useCurrentFrame();
	const Y = (v: number) => base - (v / 10) * h;
	const sets: [string, number, number, number, number][] = [['P', 8.8, 7.9, pAt, x], ['Q', 7.6, 1.8, qAt, x + 300]];
	return (
		<g>
			<line x1={x - 30} x2={x + 560} y1={base} y2={base} stroke={INK} strokeWidth={3} />
			{sets.map(([n, a, b, at, sx]) => {
				const v = prog(f, at, 12);
				return (
					<g key={n}>
						<rect x={sx} y={Y(a)} width={90} height={base - Y(a)} rx={8} fill="#bcdcef" stroke={O2_INK} strokeWidth={3} />
						<rect x={sx + 110} y={Y(b)} width={90} height={base - Y(b)} rx={8} fill="#7fb8dc" stroke={O2_INK} strokeWidth={3} />
						<Sx x={sx + 45} y={Y(a) - 12} text={a.toFixed(1)} size={32} color={O2_INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={sx + 155} y={Y(b) - 12} text={b.toFixed(1)} size={32} color={O2_INK} anchor="middle" weight={800} at={-1000} />
						<Sx x={sx + 100} y={base + 40} text={n} size={36} color={NAVY} anchor="middle" weight={800} at={-1000} />
						<Sx x={sx + 45} y={base + 76} text="start" size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
						<Sx x={sx + 155} y={base + 76} text="day 5" size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
						{v > 0.01 ? (
							<g opacity={v}>
								<line x1={sx + 210} x2={sx + 240} y1={Y(a)} y2={Y(a)} stroke={RED8} strokeWidth={4} />
								<line x1={sx + 210} x2={sx + 240} y1={Y(b)} y2={Y(b)} stroke={RED8} strokeWidth={4} />
								<line x1={sx + 230} x2={sx + 230} y1={Y(a)} y2={Y(b)} stroke={RED8} strokeWidth={4} />
								<Sx x={sx + 244} y={(Y(a) + Y(b)) / 2 + 12} text={(a - b).toFixed(1)} size={34} color={RED8} weight={800} at={-1000} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
export const SceneFeedback2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={-1000} />
		<QTag />
		<ShrinkAt cx={100} cy={185} k={0.56} at={2}>
			<Question2 marks={[{phrase: 'downstream of it', at: K19.organic, color: '#8a6d3b'}]} hi={[{r: 0, at: K19.p - 14, color: NAVY}, {r: 1, at: K19.q, color: ANS}]} />
		</ShrinkAt>
		<DoBars x={1230} base={560} h={340} pAt={K19.p - 10} qAt={K19.five - 6} />
		<WLine x={96} y={690} size={46} items={[{t: `P: 8.8 − 7.9 = 0.9${NB}mg/L`, at: K19.p - 12}]} />
		<Sx x={760} y={688} text="a decrease under 2 mg/L is too small for a standard BOD result" size={28} color={GREYT} hand weight={700} at={K19.p + 20} />
		<WLine x={96} y={780} size={50} items={[{t: `Q: 7.6 − 1.8 = 5.8${NB}mg/L`, at: K19.five - 8, color: ANS}]} />
		<GuideBand x={1120} y={790} w={640} at={4} caption={false} size={26} mark={[{v: 5.8, at: K19.five + 20, label: 'Q'}]} />
		<Sx x={96} y={866} text="(b) high organic load → microbes keep using O_2" size={38} color={MNO_INK} weight={800} at={K19.carries} />
		<Sx x={96} y={916} text="→ DO falls downstream, worst on warm nights" size={38} color={MNO_INK} weight={800} at={K19.downstream} />
		<PicV p={LAKE.crash} x={1500} y={930} h={120} at={K19.downstream} />
		<MistakeX x={96} y={960} text={`Q's decrease = 1.8${NB}mg/L`} at={K19.calling} cross={K19.trap} size={36} />
		<Sx x={680} y={1006} text="1.8 is the O_2 left; the decrease is the O_2 used" size={34} color="#1f7a55" hand weight={700} at={K19.trap + 10} />
		{void K19.flows}{void K19.warm}{void K19.left}
	</svg>
);

// ---------- 20. Handoff ----------
const K20 = cues(sc('handoff'), {so: 'So DO', now: 'right now', bod: 'BOD is', test: 'test', read: 'Read them', neither: 'neither', next: 'Next', organic: 'organic compounds', tests: 'simple tests'});
export const SceneHandoff: React.FC = () => {
	const rows: [string, string, number, string][] = [
		['DO', 'oxygen now (meter or Winkler, 1 O_2 : 4 S_2O_3^{2−})', K20.now, O2_INK],
		['BOD_5', 'oxygen used in 5 days (sealed, dark, 20 °C)', K20.test, MNO_INK],
		['Together', 'low DO + high BOD = trouble ahead; low BOD ≠ safe', K20.read, NAVY],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Oxygen now, oxygen later" at={0} />
			{rows.map(([t, b, a, c], i) => <RowCard key={t} x={96} y={210 + i * 225} w={1150} h={190} title={t} body={b} at={2 + i * 4} lit={a} color={c} size={36} />)}
			<PicV p={DOM} x={1290} y={200} h={215} />
			<PicV p={INCUB} x={1290} y={430} h={200} />
			<PicV p={LAKE.crash} x={1290} y={670} h={170} />
			<PicV p={BROM} x={1640} y={640} h={230} at={K20.next} />
			<Fade at={K20.next}>
				<rect x={1230} y={910} width={594} height={84} rx={42} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1527} y={964} text="Next: tests for organic functional groups" size={30} color={NAVY} anchor="middle" weight={700} at={-1000} />
			</Fade>
			{void K20.so}{void K20.bod}{void K20.neither}{void K20.organic}{void K20.tests}{void picWp}
		</svg>
	);
};

// ---------- 21. Key notes ----------
const NOTES = [
	'DO: O_2 dissolved in water (mg/L). Warm water holds less.',
	'Fill the bottle with no air bubbles; fix the O_2 at once.',
	'Winkler: fix, acidify, titrate the I_2. 1 O_2 : 4 S_2O_3^{2−}.',
	'n(S_2O_3^{2−}) ÷ 4 = n(O_2); × 32.00; ÷ sample volume in L.',
	'BOD_5 = DO now − DO after 5 days (sealed, dark, 20 °C).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={44} aidTop={600} aids={['DO = oxygen now. BOD = oxygen used later.', 'One oxygen, four thiosulfates.']} tag="read DO and BOD together; neither sees every pollutant" />
);
export {BURETTE};
