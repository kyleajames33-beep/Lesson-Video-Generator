// Y11 Chem WS V01 scenes 10 to 15: two HSC-style attempts on the sand and salt separation (whole card with the
// painted beaker of sand in clear liquid, nothing answer-bearing; ring from "Pause here", 10 s countdown), brief
// feedback (navy givens strip, answers framed in green, one red crossed slip; the four results plotted one at a time
// in feedback 2), the conclusion and handoff (the six-step route, then the final frame that chem-y11-ws-v02 opens on)
// and the key notes with the framed memory card, cross-fading back to the final frame at the end.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {CLIP, SANDB, dur, hold, lostAt, sc} from './common';
import {
	Axes, BoxCard, Bracket, Card, Chip, chipW, Cru, DrawPath, Fade, GOLD_T, GREEN_T, Heading, INK, NAVY_T, Para, PauseHoldR, PenArrow, Plate, RED_T, Readout, Rich, SVG, Sx, TEAL, TEAL_T,
	TickMark, Under, Write, WriteRich, axX, axY, fnPath, prog, spanOf, wrapSegs, wrapText,
} from './parts';
import type {AxG, Seg} from './parts';
import {NEW_HYP, NEW_Q} from './s2';

const pw = (h: number) => (h / SANDB.box[3]) * SANDB.box[2];
/** Lines of a question card. */
const QLines: React.FC<{lines: Seg[][]; x?: number; y: number; size?: number; lh?: number}> = ({lines, x = 140, y, size = 38, lh = 54}) => <>{lines.map((l, i) => <Rich key={i} x={x} y={y + i * lh} segs={l} size={size} weight={700} />)}</>;

// ---------- 10. attempt 1 ----------
const K10 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const W = 1150;
	const stem = wrapText('A student separates a 20.00 g mixture of sand and salt by dissolving it in 20 mL of water, filtering, and evaporating the filtrate. Much less salt is recovered than expected. At room temperature, about 36 g of salt dissolves in 100 mL of water.', 40, W, INK, 700);
	const a = wrapText('(a)  Write an inquiry question about the volume of water used.', 40, W, INK, 700);
	const b = wrapText("(b)  Write a hypothesis in the form 'If ..., then ..., because ...'.", 40, W, INK, 700);
	const y2 = 280 + stem.length * 60 + 30;
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<QLines lines={stem} y={280} size={40} lh={60} />
			<QLines lines={[...a, ...b]} y={y2} size={40} lh={64} />
			<Sx x={140} y={y2 + (a.length + b.length) * 64 + 24} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SANDB} x={1620 - pw(360) / 2} y={230} h={360} />
			<PauseHoldR h={hold('attempt-1')} at={K10.pause} x={140} y={936} cx={1640} cy={700} />
		</SVG>
	);
};

// ---------- 11. feedback 1 ----------
const K11 = cues(sc('feedback-1'), {good: 'One good', how: 'how does', mixture: 'the mixture', hyp: 'A hypothesis', if1: 'if more', then1: 'then more', bec: 'because more', leaving: 'leaving less', better: 'More water is better', slip: 'classic slip', names: 'It names', reason: 'no reason'});
export const SceneFeedback1: React.FC = () => {
	const QA = wrapSegs([{t: '(a)  How does the '}, {t: 'volume of water', c: NAVY_T}, {t: ' used affect the '}, {t: 'percentage of salt recovered', c: INK}, {t: ' from the mixture?'}], 40, 1240);
	const HB = wrapSegs([{t: '(b)  '}, {t: 'If', c: NAVY_T}, {t: ' more water is used, '}, {t: 'then', c: INK}, {t: ' more salt is recovered, '}, {t: 'because', c: GOLD_T}, {t: ' more water can dissolve more salt, leaving less in the sand.'}], 40, 1240);
	const ay = 340, by = ay + QA.length * 58 + 100;
	const bAt = HB.map((l, i) => { const s = l.map(x => x.t).join(''); return i === 0 ? K11.if1 : s.includes('because') ? K11.bec : s.includes('then') ? K11.then1 : K11.if1 + i * 20; });
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: '20.00 g mixture     |     20 mL of water     |     about 36 g of salt per 100 mL'}]} />
			<BoxCard x={110} y={ay - 62} w={1330} h={QA.length * 58 + 44} at={K11.how} out={undefined} stroke={GREEN_T} sw={5} tickAt={K11.mixture} />
			<Para x={140} y={ay} lines={QA} size={40} lh={58} at={QA.map((_, i) => K11.how + i * 40)} />
			<BoxCard x={110} y={by - 62} w={1330} h={HB.length * 58 + 44} at={K11.if1 - 4} stroke={GREEN_T} sw={5} tickAt={K11.leaving} />
			<Para x={140} y={by} lines={HB} size={40} lh={58} at={bAt} />
			<Plate p={SANDB} x={1650 - pw(380) / 2} y={290} h={380} />
			<Chip x={110} y={790} segs={[{t: 'More water is better.'}]} at={K11.better} size={38} color={INK} strike={K11.slip} />
			<Write x={600} y={834} text="nothing measured, no because" at={K11.names} size={42} color={RED_T} />
			{void K11.good}{void K11.hyp}{void K11.reason}
		</SVG>
	);
};

// ---------- 12. attempt 2 ----------
const K12 = cues(sc('attempt-2'), {pause: 'Pause here'});
const VOLS = [20, 40, 60, 80], RECS = [35.5, 69.4, 69.6, 69.5];
export const SceneAttempt2: React.FC = () => {
	const cellX = (i: number) => 760 + i * 150;
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<QLines y={260} size={36} lh={50} lines={[[{t: 'The student tests four volumes of water. Each test used a 20.00 g sample'}], [{t: 'of the same mixture.'}]]} />
			{/* the results table */}
			<rect x={140} y={340} width={1220} height={130} rx={10} fill="#ffffff" stroke={INK} strokeWidth={3} />
			<line x1={140} x2={1360} y1={405} y2={405} stroke={INK} strokeWidth={2} />
			<line x1={700} x2={700} y1={340} y2={470} stroke={INK} strokeWidth={2} />
			<Sx x={160} y={386} text="Volume of water (mL)" size={34} color={INK} weight={800} at={-1000} />
			<Sx x={160} y={450} text="Salt recovered (% of mixture)" size={34} color={INK} weight={800} at={-1000} />
			{VOLS.map((v, i) => <Sx key={v} x={cellX(i) + 60} y={386} text={`${v}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{RECS.map((v, i) => <Sx key={i} x={cellX(i) + 60} y={450} text={v.toFixed(1)} size={34} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{/* the printed hypothesis */}
			<rect x={140} y={500} width={1220} height={126} rx={12} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
			<QLines x={166} y={548} size={34} lh={48} lines={[[{t: "The student's hypothesis: If more water is used, then more salt is"}], [{t: 'recovered, because more water can dissolve more salt.'}]]} />
			<QLines y={680} size={36} lh={50} lines={[[{t: 'At room temperature, about 36 g of salt dissolves in 100 mL of water.'}], [{t: '(a)  Explain what the new evidence shows.'}], [{t: '(b)  Modify the hypothesis to reflect the evidence.'}]]} />
			<Sx x={140} y={850} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SANDB} x={1640 - pw(240) / 2} y={240} h={240} />
			<PauseHoldR h={hold('attempt-2')} at={K12.pause} x={140} y={936} cx={1640} cy={700} />
		</SVG>
	);
};

// ---------- 13. feedback 2 ----------
const K13 = cues(sc('feedback-2'), {rises: 'Recovery rises', twenty: 'from twenty', forty: ['to forty', 1], then: ['then stays', 1], seventy: 'about seventy', fortyml: ['Forty millilitres', 2], fourteen: 'fourteen grams', all: 'all the salt has', modify: 'So modify', if1: 'If more', increases: 'increases', until: 'until all', same: 'then stays the', bec: 'because extra', ignoring: 'Ignoring the', mistake: 'classic mistake', evidence: 'Evidence that', hyp: 'improves the'});
const G13: AxG = {x0: 230, x1: 720, y0: 650, y1: 310, xmax: 100, ymax: 80};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const ptAt = [K13.twenty, K13.forty, K13.then + 4, K13.then + 22];
	const shown = ptAt.filter(a => f >= a).length;
	const last = shown - 1;
	const HB = wrapSegs([{t: '(b)  '}, {t: 'If', c: NAVY_T}, {t: ' more water is used, the salt recovered '}, {t: 'increases until all the salt dissolves, then stays the same,', c: GOLD_T}, {t: ' '}, {t: 'because', c: GOLD_T}, {t: ' extra water has no more salt to dissolve.'}], 38, 900);
	const bAt = HB.map((l, i) => { const s = l.map(x => x.t).join(''); return s.includes('because') || s.includes('dissolve.') ? K13.bec : K13.if1 + i * 40; });
	const by = 600;
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: '20, 40, 60, 80 mL     |     35.5, 69.4, 69.6, 69.5%     |     about 36 g per 100 mL'}]} />
			<Axes g={G13} xLabel="volume of water (mL)" yLabel="% recovered" xTicks={[0, 20, 40, 60, 80, 100]} yTicks={[0, 40, 80]} />
			{VOLS.map((v, i) => (f >= ptAt[i] ? <circle key={v} cx={axX(G13, v)} cy={axY(G13, RECS[i])} r={12} fill={NAVY_T} stroke="#fff" strokeWidth={3} opacity={prog(f, ptAt[i], 8)} /> : null))}
			{shown > 1 ? <path d={`M${VOLS.slice(0, shown).map((v, i) => `${axX(G13, v)},${axY(G13, RECS[i])}`).join(' L')}`} fill="none" stroke={NAVY_T} strokeWidth={3} opacity={0.5} /> : null}
			<Readout x={230} y={744} w={480} text={last >= 0 ? `${VOLS[last]} mL: ${RECS[last].toFixed(1)}%` : '20 mL: ?'} size={44} at={K13.twenty} />
			<Bracket a={[axX(G13, 40) - 14, axY(G13, 69.5) - 30]} b={[axX(G13, 80) + 14, axY(G13, 69.5) - 30]} at={K13.then + 26} color={TEAL} depth={-16} />
			<Write x={axX(G13, 40)} y={axY(G13, 69.5) - 62} text="levels off" at={K13.then + 30} size={42} color={TEAL_T} />
			<BoxCard x={820} y={300} w={760} h={84} at={K13.seventy} stroke={GREEN_T} sw={5} tickAt={K13.seventy + 10}>
				<Rich x={850} y={356} segs={[{t: '(a)  rises, then levels near 70%', c: GREEN_T}]} size={44} />
			</BoxCard>
			<WriteRich x={820} y={456} segs={[{t: '40 mL × 36 g ÷ 100 mL ≈ 14 g'}]} size={44} at={K13.fortyml} />
			<Sx x={820} y={510} text="so by 40 mL, all the salt has dissolved" size={34} color={INK} weight={700} at={K13.all} />
			<BoxCard x={790} y={by - 52} w={1034} h={HB.length * 52 + 34} at={K13.if1 - 4} stroke={GREEN_T} sw={5} tickAt={K13.bec + 20} />
			<Para x={820} y={by} lines={HB} size={38} lh={52} at={bAt} />
			<Chip x={96} y={830} segs={[{t: 'Ignore the 60 and 80 mL results.'}]} at={K13.ignoring} size={34} color={INK} strike={K13.mistake} />
			<Write x={760} y={872} text="never drop results that don't fit" at={K13.mistake + 8} size={42} color={RED_T} />
			<Chip x={1824} y={30} segs={[{t: "evidence that doesn't fit improves the hypothesis"}]} at={K13.evidence} size={30} color={NAVY_T} anchor="end" />
			{void K13.rises}{void K13.fourteen}{void K13.modify}{void K13.increases}{void K13.until}{void K13.same}{void K13.hyp}
		</SVG>
	);
};

// ---------- 14. conclusion and handoff (final frame; chem-y11-ws-v02 opens on it) ----------
const K14 = cues(sc('conclusion-handoff'), {obs: 'an observation', iq: 'inquiry question', hyp: 'a hypothesis', chem: 'chemistry reason', when: 'And when', challenges: 'it challenges', method: 'the method', reason: 'the reason', ours: 'Our copper', ready: 'is ready', next: 'Next,', data: 'useful data'});
/** Final-frame geometry (also described in the build notes for the ws-v02 builder). */
export const FF = {
	cru: {x: 140, y: 470, h: 440},
	sketch: {x0: 200, x1: 560, y0: 360, y1: 220, xmax: 10, ymax: 50} as AxG,
	q: {x: 680, y: 200, w: 760},
	hyp: {x: 680, w: 760},
	clip: {x: 1480, y: 250, w: 344},
	chip: {x: 680, y: 850},
};
const STEPS = ['observation', 'inquiry question', 'hypothesis (if, then, because)', 'data (primary, secondary)', 'sort the evidence', 'modify'];
const STEP_POS: [number, number][] = [[96, 260], [1000, 260], [96, 480], [1000, 480], [96, 700], [1000, 700]];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const sAt = [K14.obs, K14.iq, K14.hyp, K14.when, K14.challenges, K14.reason];
	const fin = K14.ours;
	const QL = wrapSegs(NEW_Q, 38, FF.q.w - 50);
	const HL = wrapSegs(NEW_HYP, 32, FF.hyp.w - 50, 800);
	const qh = QL.length * 50 + 40;
	const hy = FF.q.y + qh + 30;
	const clipH = (FF.clip.w / CLIP.box[2]) * CLIP.box[3];
	const g = FF.sketch;
	return (
		<SVG>
			<Rich x={96} y={150} segs={[{t: 'If, ', c: NAVY_T}, {t: 'then, ', c: INK}, {t: 'because: the because is the chemistry.', c: GOLD_T}]} size={52} hand weight={700} />
			{/* the route, in six steps */}
			<Fade at={-1000} out={fin}>
				{STEPS.map((s, i) => <Chip key={s} x={STEP_POS[i][0]} y={STEP_POS[i][1]} segs={[{t: s}]} at={-1000} size={44} color={INK} />)}
				{STEPS.map((s, i) => <Chip key={'n' + s} x={STEP_POS[i][0]} y={STEP_POS[i][1]} segs={[{t: s}]} at={sAt[i]} size={44} color={NAVY_T} fill="#e8eef9" />)}
				{[0, 2, 4].map(i => <PenArrow key={'h' + i} a={[STEP_POS[i][0] + chipW([{t: STEPS[i]}], 44, false) + 12, STEP_POS[i][1] + 34]} b={[STEP_POS[i + 1][0] - 20, STEP_POS[i + 1][1] + 34]} at={-1000} color={NAVY_T} bend={0} />)}
				{[1, 3].map(i => <PenArrow key={'d' + i} a={[STEP_POS[i][0] + 100, STEP_POS[i][1] + 76]} b={[STEP_POS[i + 1][0] + 300, STEP_POS[i + 1][1] - 12]} at={-1000} color={NAVY_T} bend={0.05} />)}
				{STEPS.map((s, i) => <TickMark key={'t' + s} x={STEP_POS[i][0] + chipW([{t: s}], 44, false) - 4} y={STEP_POS[i][1] - 8} at={sAt[i] + 8} s={1.1} />)}
				<Cru x={1560} y={580} h={380} mix={{b: 1}} />
			</Fade>
			{/* the final frame */}
			<Fade at={fin}>
				<Cru x={FF.cru.x} y={FF.cru.y} h={FF.cru.h} mix={{b: 1}} />
				<Axes g={g} xLabel="heating time (min)" yLabel="% mass lost" xTicks={[0, 10]} yTicks={[0, 50]} />
				<line x1={g.x0} x2={g.x1} y1={axY(g, 36.1)} y2={axY(g, 36.1)} stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={g.x1 + 10} y={axY(g, 36.1) + 10} text="36.1%" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={g.x0 + 160} y={g.y1 - 6} text="prediction" size={30} color={INK} weight={800} at={-1000} />
				<rect x={FF.q.x} y={FF.q.y} width={FF.q.w} height={qh} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				{QL.map((l, i) => <Rich key={i} x={FF.q.x + 25} y={FF.q.y + 52 + i * 50} segs={l} size={38} />)}
				<rect x={FF.hyp.x} y={hy} width={FF.hyp.w} height={HL.length * 44 + 36} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				{HL.map((l, i) => <Rich key={i} x={FF.hyp.x + 25} y={hy + 48 + i * 44} segs={l} size={32} />)}
				<Plate p={CLIP} x={FF.clip.x} y={FF.clip.y} h={clipH} />
				<Sx x={FF.clip.x + FF.clip.w / 2} y={FF.clip.y + clipH * 0.55} text="plan: ?" size={52} color="#4a4540" anchor="middle" hand weight={700} at={-1000} />
			</Fade>
			{f >= fin ? <DrawPath d={fnPath(g, lostAt, 10)} at={fin + 10} dur={40} color={NAVY_T} width={5} dash="12 8" /> : null}
			<Chip x={FF.chip.x} y={FF.chip.y} segs={[{t: 'Next: How does a chemistry plan produce valid, useful data?'}]} at={K14.data - 30} size={34} color={NAVY_T} />
			{void K14.chem}{void K14.method}{void K14.ready}{void K14.next}{void Under}{void spanOf}
		</SVG>
	);
};

// ---------- 15. key notes ----------
const NOTES: Seg[] = [
	{t: 'Inquiry question: data can answer it. It names what is measured and the condition.'},
	{t: 'Hypothesis: if (the change), then (the result), because (the chemistry).'},
	{t: 'Primary data: you collect it. Secondary: someone else did.'},
	{t: 'Judge it: testable, specific, reasoned, could be shown wrong.'},
	{t: "Evidence that doesn't fit: method, prediction or reason?"},
];
const NOTE_C = [NAVY_T, GOLD_T, INK, GREEN_T, '#a82a55'];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const back = prog(f, D - 44, 30);
	let y = 300;
	const rows = NOTES.map((n, i) => {
		const lines = wrapText(n.t, 36, 960, undefined, 700);
		const y0 = y;
		y += lines.length * 48 + 30;
		const colon = n.t.indexOf(':');
		const head = n.t.slice(0, colon + 1);
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, k) => {
					const s = l.map(x => x.t).join('');
					const segs: Seg[] = k === 0 && s.startsWith(head) ? [{t: head, c: NOTE_C[i], w: 800}, {t: s.slice(head.length)}] : [{t: s}];
					return <Rich key={k} x={140} y={y0 + k * 48} segs={segs} size={36} weight={700} />;
				})}
			</Fade>
		);
	});
	return (
		<SVG>
			<g opacity={1 - back}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={INK} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={620} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Rich x={1210} y={420} segs={[{t: 'If, ', c: NAVY_T}, {t: 'then, ', c: INK}, {t: 'because:', c: GOLD_T}]} size={52} hand weight={700} />
					<Sx x={1210} y={490} text="the because is" size={52} color={GOLD_T} hand weight={700} at={-1000} />
					<Sx x={1210} y={556} text="the chemistry." size={52} color={GOLD_T} hand weight={700} at={-1000} />
					<Cru x={1497 - 0.63 * 150} y={600} h={290} mix={{b: 1}} />
				</Fade>
			</g>
			{back > 0.005 ? <g opacity={back}><Freeze frame={dur('conclusion-handoff') - 1}><SceneHandoff /></Freeze></g> : null}
			{void Readout}{void TEAL}
		</SVG>
	);
};
