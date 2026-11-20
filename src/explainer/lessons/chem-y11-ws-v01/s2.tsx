// Y11 Chem WS V01 scenes 5 to 9: the four checks against a weaker hypothesis (3 s countdown), the checks read with
// pen ticks and crosses and the 0 to 100% number line narrowing from "almost anything fits" to one clear target, the
// three groups' crucibles with their evidence cards (3 s countdown over the three bins), the sorting of B into
// "method" and C into "prediction" and "reason" (with the particle inset of copper sulfate breaking down), and the
// modify board: the hypothesis and question rewritten beside the live heating-run model.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown} from '../../kit';
import {GROUPS, hold, lostAt, sc} from './common';
import {
	AMB, Axes, Bin, BoxCard, CheckList, Chip, Cru, Disc, DrawPath, Fade, Framed, GOLD_T, GREEN_T, Heading, INK, NAVY_T, NumLine, Para, PenArrow, PenCross, PenRing, RED_T, ROSE_T,
	Readout, Rich, SLATE_T, SVG, SplitInset, Strike, Sx, TEAL, TEAL_T, TickMark, Under, Write, WriteRich, axX, axY, checkRowY, clamp01, cruW, cruXY, fnPath, kf, prog, smooth, spanOf,
	wrapSegs, wrapText,
} from './parts';
import type {AxG, CheckRow, Seg} from './parts';

// ---------- the check board (scenes 5 and 6) ----------
const CL = {x: 96, y: 330};
const ROWS: CheckRow[] = [
	{lines: ['testable: something to change or measure']},
	{lines: ['specific: enough to answer the question', '(here, a percentage)']},
	{lines: ['reasoned: the because is sound chemistry']},
	{lines: ['could be shown wrong: some result', 'would contradict it']},
];
const MARK_X = [1066, 1146];
const rowY = (i: number) => checkRowY(CL.y, ROWS, i);
const WEAK = wrapText("The crystals will lose some mass when they're heated.", 44, 560);
const WeakCard: React.FC<{out?: number}> = ({out}) => (
	<BoxCard x={1220} y={250} w={604} h={WEAK.length * 58 + 90} out={out}>
		<Sx x={1250} y={294} text="a weaker hypothesis" size={30} color={INK} weight={800} at={-1000} />
		{WEAK.map((l, i) => <Rich key={i} x={1250} y={356 + i * 58} segs={l} size={44} />)}
	</BoxCard>
);

// ---------- 5. judging a hypothesis ----------
const K5 = cues(sc('judging'), {judge: 'how do we judge', testable: 'Is it testable', specific: 'Is it specific', reason: 'Is the reason', wrong: 'could some result', weaker: "Here's a weaker", crystals: 'The crystals will', which: 'Which check', fail: 'it fail'});
export const SceneJudging: React.FC = () => {
	const h = hold('judging');
	return (
		<SVG>
			<Heading text="Judging a hypothesis: four checks" at={0} />
			<CheckList x={CL.x} y={CL.y} rows={ROWS.map((r, i) => ({...r, hi: [K5.testable, K5.specific, K5.reason, K5.wrong][i]}))} w={930} />
			<WeakCard />
			<Cru x={1300} y={560} h={360} mix={{b: 1}} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1690} y={640} r={64} ringFrom={K5.fail} />
			{void K5.judge}{void K5.weaker}{void K5.crystals}{void K5.which}
		</SVG>
	);
};

// ---------- 6. reading the checks ----------
const K6 = cues(sc('reading-the-checks'), {testable: "It's testable", wrong: 'be shown wrong', ifm: 'if the mass', amount: 'no amount', specific: "isn't specific", reason: 'no reason', ours: 'Our hypothesis', passes: 'passes all four', tf: 'twenty-five', clearly: 'clearly show'});
const OURS = wrapSegs([{t: 'If', c: NAVY_T}, {t: ' heated to a steady mass, '}, {t: 'then', c: INK}, {t: " they'll lose 36.1% of their mass, "}, {t: 'because', c: GOLD_T}, {t: ' water is 36.1% of the mass and heating drives it off.'}], 34, 540, 800);
export const SceneChecks: React.FC = () => {
	const f = useCurrentFrame();
	const narrow = smooth(prog(f, K6.clearly, 24));
	const lo = kf(f, [[K6.amount, 1], [K6.clearly, 1], [K6.clearly + 24, 34.6]]), hi = kf(f, [[K6.amount, 100], [K6.clearly, 100], [K6.clearly + 24, 37.6]]);
	const ox = 1220, oy = 250;
	return (
		<SVG>
			<Heading text="Reading the checks" at={-1000} />
			<CheckList x={CL.x} y={CL.y} rows={ROWS} w={930} />
			<Sx x={MARK_X[0]} y={292} text="weak" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={MARK_X[1]} y={292} text="ours" size={30} color={GREEN_T} anchor="middle" weight={800} at={K6.ours} />
			{/* the weak candidate */}
			<TickMark x={MARK_X[0]} y={rowY(0)} at={K6.testable + 4} s={1.3} />
			<TickMark x={MARK_X[0]} y={rowY(3)} at={K6.wrong} s={1.3} />
			<PenCross x={MARK_X[0]} y={rowY(1)} at={K6.specific + 4} />
			<PenCross x={MARK_X[0]} y={rowY(2)} at={K6.reason + 4} />
			<WeakCard out={K6.ours - 4} />
			<Write x={1250} y={540} text="passes 2" at={K6.testable + 14} out={K6.ours - 4} size={42} color={GREEN_T} />
			<Sx x={1250} y={600} text="(only if the mass didn't change)" size={30} color={INK} weight={700} at={K6.ifm} out={K6.ours - 4} />
			{/* our hypothesis */}
			<Fade at={K6.ours}>
				<rect x={ox} y={oy} width={604} height={OURS.length * 46 + 70} rx={16} fill="#fffdf8" stroke={f >= K6.passes ? GREEN_T : INK} strokeWidth={5} />
				<Sx x={ox + 30} y={oy + 44} text="our hypothesis" size={30} color={INK} weight={800} at={-1000} />
				{OURS.map((l, i) => <Rich key={i} x={ox + 30} y={oy + 96 + i * 46} segs={l} size={34} />)}
			</Fade>
			<TickMark x={ox + 560} y={oy + 34} at={K6.passes} s={1.3} />
			{[0, 1, 2, 3].map(i => <TickMark key={i} x={MARK_X[1]} y={rowY(i)} at={K6.passes + 6 + i * 6} s={1.3} />)}
			<Rich x={ox} y={oy + OURS.length * 46 + 130} segs={[{t: 'would show it wrong: '}, {t: '25% lost', c: RED_T}]} size={38} at={K6.tf} />
			{/* the number line */}
			<Sx x={1220} y={690} text="% of mass lost that fits" size={30} color={INK} weight={800} at={K6.amount} />
			<NumLine x={1240} w={560} y={780} lo={lo} hi={hi} color={narrow > 0.5 ? GOLD_T : RED_T} at={K6.amount} mark={{v: 25, at: K6.tf, color: RED_T}} target={{v: 36.1, at: K6.clearly}} />
			<Write x={1220} y={900} text="almost anything fits" at={K6.amount + 10} out={K6.clearly} size={42} color={RED_T} />
			<Write x={1220} y={900} text="one clear target" at={K6.clearly + 14} size={42} color={GOLD_T} />
		</SVG>
	);
};

// ---------- the evidence board (scenes 7 and 8) ----------
const CX = [290, 760, 1230];
const CH = 420, CY = 196;
const cx0 = (i: number) => CX[i] - cruW(CH) / 2;
const MIXES = [{w: 1}, {p: 1}, {k: 1}] as const;
const CARD = {y: 640, w: 430};
const CARD_LINES: string[][] = [
	['2.50 g → lost 0.90 g', '36.0%', 'gentle heat; steady mass'],
	['lost 0.69 g', '27.6%', '4 min; blue patches'],
	['lost 1.18 g', '47.2%', 'roaring flame;', 'steady mass; black solid'],
];
const EvCard: React.FC<{i: number; at: number; out?: number; stroke?: string; dy?: number; fill?: string}> = ({i, at, out, stroke = INK, dy = 0, fill}) => {
	const x = CX[i] - CARD.w / 2, L = CARD_LINES[i];
	return (
		<BoxCard x={x} y={CARD.y} w={CARD.w} h={L.length * 42 + 40} at={at} out={out} stroke={stroke} dy={dy} fill={fill}>
			{L.map((t, k) => <Sx key={k} x={x + 24} y={CARD.y + 46 + k * 42} text={t} size={k === 1 ? 44 : 30} color={k === 1 ? (i === 0 ? TEAL_T : i === 1 ? NAVY_T : ROSE_T) : INK} weight={800} at={-1000} />)}
		</BoxCard>
	);
};
const BINS = [{x: 120, label: 'method?'}, {x: 590, label: 'prediction?'}, {x: 1060, label: 'reason?'}];
const BIN_Y = 862, BIN_W = 440, BIN_H = 80;
const Crucibles: React.FC = () => <>{MIXES.map((m, i) => <Cru key={i} x={cx0(i)} y={CY} h={CH} mix={m} />)}</>;
const Letters: React.FC = () => <>{GROUPS.map((g, i) => <Sx key={g.k} x={cx0(i) - 20} y={CY + 60} text={g.k} size={52} color={INK} anchor="end" weight={800} at={-1000} />)}</>;
const crys = (i: number, u = 512, v = 250) => cruXY(cx0(i), CY, CH, u, v);
/** Our hypothesis, small, top right (the case the evidence is judged against). */
const HypMini: React.FC<{becAt?: number; glowAt?: number}> = ({becAt, glowAt}) => {
	const f = useCurrentFrame();
	const g = glowAt === undefined ? 0 : prog(f, glowAt, 12);
	return (
		<g>
			<rect x={1480} y={196} width={344} height={218} rx={14} fill={g > 0.01 ? '#fbe8ee' : '#fffdf8'} stroke={g > 0.5 ? ROSE_T : INK} strokeWidth={4} />
			<Sx x={1500} y={236} text="our hypothesis" size={30} color={INK} weight={800} at={-1000} />
			<Rich x={1500} y={282} segs={[{t: 'then', c: INK}, {t: ' 36.1% lost,'}]} size={32} />
			<Rich x={1500} y={322} segs={[{t: 'because', c: GOLD_T}, {t: ' heating'}]} size={32} />
			<Rich x={1500} y={362} segs={[{t: 'drives off the water'}]} size={32} />
			<Rich x={1500} y={398} segs={[{t: '(and only water)'}]} size={28} />
			{becAt !== undefined ? <Under x0={1500} x1={1800} y={362} at={becAt} color={ROSE_T} /> : null}
		</g>
	);
};

// ---------- 7. new evidence from three groups ----------
const K7 = cues(sc('new-evidence'), {now: 'Now the new', three: 'Three groups', mass: 'two point five', A: 'Group A', gently: 'heated gently', lostA: 'and lost thirty-six', fits: 'That fits', B: 'Group B', four: 'four minutes', patches: 'blue patches', lostB: 'twenty-seven', C: 'Group C', roaring: 'roaring flame', black: 'turned black', lostC: 'forty-seven', which: 'Which one', method: 'the method'});
export const SceneEvidence: React.FC = () => {
	const h = hold('new-evidence');
	const [bx, by] = crys(1), [kx, ky] = crys(2);
	return (
		<SVG>
			<Heading text="New evidence from three groups" at={0} />
			<Crucibles />
			<Letters />
			<HypMini />
			<Chip x={1480} y={440} segs={[{t: '2.50 g each'}]} at={K7.mass} size={34} color={INK} />
			<Sx x={1480} y={548} text="illustrative data" size={30} color={INK} weight={800} at={-1000} />
			<EvCard i={0} at={K7.A} stroke={undefined} />
			<Fade at={K7.fits}>
				<rect x={CX[0] - CARD.w / 2} y={CARD.y} width={CARD.w} height={CARD_LINES[0].length * 42 + 40} rx={16} fill="none" stroke={TEAL} strokeWidth={6} />
			</Fade>
			<TickMark x={CX[0] + 150} y={CARD.y + 74} at={K7.fits} s={1.4} color={TEAL} />
			<Write x={CX[0] + 10} y={CARD.y + 88} text="fits" at={K7.fits + 4} size={42} color={TEAL_T} />
			<EvCard i={1} at={K7.B + 10} />
			<PenRing cx={bx} cy={by} rx={110} ry={50} at={K7.patches} color={NAVY_T} seed={7} />
			<Write x={bx + 118} y={by + 40} text="still blue" at={K7.patches + 8} size={42} color={NAVY_T} />
			<EvCard i={2} at={K7.C + 10} />
			<PenRing cx={kx} cy={ky} rx={110} ry={50} at={K7.black} color={ROSE_T} seed={9} />
			<Write x={kx + 118} y={ky + 40} text="black?" at={K7.black + 8} size={42} color={ROSE_T} />
			{BINS.map((b, i) => <Bin key={i} x={b.x} y={BIN_Y} w={BIN_W} h={BIN_H} label={b.label} at={K7.method - 20 + i * 6} />)}
			<Countdown start={h.startFrame} end={h.endFrame} x={1660} y={680} r={64} ringFrom={K7.method} />
			{void K7.now}{void K7.three}{void K7.gently}{void K7.lostA}{void K7.four}{void K7.lostB}{void K7.roaring}{void K7.lostC}{void K7.which}
		</SVG>
	);
};

// ---------- 8. what each result challenges ----------
const K8 = cues(sc('sorting-evidence'), {B: 'Group B is', patches: 'blue patches show', water: 'water was still', didnt: "didn't heat", requires: 'already requires', doesnt: "It doesn't challenge", time: 'time matters', C: 'Group C is', did: 'They did heat', steady: 'was steady', far: 'far more', black: 'Black solid', broke: 'broke down', because: 'the because was', incomplete: 'incomplete', heating: "heating doesn't", when: 'When evidence', method: ['the method', 1], prediction: 'the prediction', reason: 'the reason'});
/** A disc flying from a card into a bin slot. */
const Fly: React.FC<{t: string; color: string; from: [number, number]; to: [number, number]; at: number}> = ({t, color, from, to, at}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const u = smooth(prog(f, at, 26));
	const x = from[0] + (to[0] - from[0]) * u, y = from[1] + (to[1] - from[1]) * u - Math.sin(Math.PI * u) * 80;
	return <Disc x={x} y={y} t={t} color={color} r={32} />;
};
export const SceneSorting: React.FC = () => {
	const f = useCurrentFrame();
	const [bx, by] = crys(1), [kx, ky] = crys(2);
	const lift = -24 * smooth(prog(f, K8.did, 14)) * (1 - prog(f, K8.incomplete, 14));
	const binSlot = (i: number): [number, number] => [BINS[i].x + BIN_W - 60, BIN_Y + BIN_H / 2];
	const rule = f >= K8.when - 12;
	return (
		<SVG>
			<Heading text="What does each result challenge?" at={-1000} />
			<Crucibles />
			<Letters />
			<HypMini becAt={K8.because} glowAt={K8.incomplete} />
			<Sx x={1480} y={452} text="illustrative data" size={30} color={INK} weight={800} at={-1000} />
			{BINS.map((b, i) => <Bin key={i} x={b.x} y={BIN_Y} w={BIN_W} h={BIN_H} label={b.label} fill={i === 0 ? prog(f, K8.B + 30, 12) : prog(f, K8.incomplete + 24, 12)} color={i === 0 ? TEAL : ROSE_T} />)}
			{/* A: fits (stays until the rule) */}
			<EvCard i={0} at={-1000} out={K8.when - 20} stroke={TEAL} />
			{/* B: a method problem */}
			<EvCard i={1} at={-1000} out={K8.B + 6} />
			<Fly t="B" color={TEAL_T} from={[CX[1], CARD.y + 80]} to={binSlot(0)} at={K8.B + 4} />
			<Framed x={CX[1] - 190} y={CARD.y + 60} segs={[{t: 'B: method', c: GREEN_T}]} at={K8.B + 20} out={K8.when - 20} size={44} />
			<PenRing cx={bx} cy={by} rx={110} ry={50} at={-1000} out={K8.C} color={NAVY_T} seed={7} />
			<Write x={CX[1] - 190} y={CARD.y + 130} text="not heated long enough" at={K8.water} out={K8.when - 20} size={42} color={NAVY_T} />
						<Chip x={CX[1] - 190} y={CARD.y + 158} segs={[{t: 'time matters'}]} at={K8.time} out={K8.when - 20} size={38} color={NAVY_T} />
			{/* C: met the condition and lost more */}
			<EvCard i={2} at={-1000} out={K8.incomplete + 10} dy={lift} />
			<Fade at={-1000} out={K8.incomplete + 10}><TickMark x={CX[2] + 170} y={CARD.y + 40 + lift} at={K8.steady} s={1.3} /></Fade>
			<PenRing cx={kx} cy={ky} rx={110} ry={50} at={K8.black - 4} color={ROSE_T} seed={9} />
			<Write x={1480} y={510} text="more than water left" at={K8.black} out={K8.when - 20} size={42} color={ROSE_T} />
			<PenArrow a={[1500, 486]} b={[kx + 100, ky + 10]} at={K8.black + 10} out={K8.when - 20} color={ROSE_T} bend={-0.2} />
			<Fade at={K8.broke - 20} out={K8.when - 20}>
				<SplitInset cx={1652} cy={712} r={140} p={prog(f, K8.broke, 40)} />
				<Sx x={1652} y={560} text="CuSO_4" size={30} color={INK} anchor="middle" weight={800} at={-1000} out={K8.broke + 20} />
				<Sx x={1652} y={886} text="black CuO + gas" size={30} color={INK} anchor="middle" weight={800} at={K8.broke + 30} />
			</Fade>
			<Fly t="C" color={ROSE_T} from={[CX[2], CARD.y + 80]} to={binSlot(1)} at={K8.incomplete + 6} />
			<Fly t="C" color={ROSE_T} from={[CX[2], CARD.y + 80]} to={binSlot(2)} at={K8.incomplete + 14} />
			{/* the rule */}
			{rule ? <Fade at={K8.when - 12}>
				<rect x={120} y={620} width={1360} height={200} rx={18} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
			</Fade> : null}
			<WriteRich x={156} y={696} segs={[{t: "Evidence that doesn't fit: what does it challenge?"}]} size={44} at={K8.when - 8} />
			<WriteRich x={156} y={776} segs={[{t: 'the method', c: TEAL_T}, {t: ', '}, {t: 'the prediction', c: ROSE_T}, {t: ' or '}, {t: 'the reason', c: GOLD_T}]} size={44} at={K8.method} cps={22} />
			{void K8.patches}{void K8.didnt}{void K8.requires}{void K8.doesnt}{void K8.far}{void K8.heating}{void K8.prediction}{void K8.reason}{void AMB}
		</SVG>
	);
};

// ---------- 9. modifying the hypothesis and the question ----------
const K9 = cues(sc('modifying'), {published: 'Published data', breaks: 'breaks down only', modify: 'So we modify', condition: 'with a condition', if1: 'If the crystals', gently: 'gently until', then1: "then they'll", bec: 'because gentle', whilew: 'while strong', sulfate: ['copper sulfate', 2], B: "Group B's", sharper: 'sharper question', how: 'How does', time: 'the time of', pct: 'percentage of mass', lost: 'mass lost', ours: 'Our prediction', rises: 'rises', levels: 'levels off', gone: 'has gone'});
export const G9: AxG = {x0: 210, x1: 700, y0: 870, y1: 650, xmax: 10, ymax: 50};
const RX = 830, RW = 994;
export const NEW_HYP: Seg[] = [{t: 'If', c: NAVY_T}, {t: ' the crystals are heated '}, {t: 'gently', c: GOLD_T}, {t: ' until their mass stops changing, '}, {t: 'then', c: INK}, {t: " they'll lose 36.1% of their mass, "}, {t: 'because', c: GOLD_T}, {t: ' gentle heat drives off the water, '}, {t: 'while strong heat also breaks down the copper sulfate.', c: GOLD_T}];
export const NEW_Q: Seg[] = [{t: 'How does the '}, {t: 'time of gentle heating', c: NAVY_T}, {t: ' affect the '}, {t: 'percentage of mass lost', c: INK}, {t: ' by blue copper sulfate crystals?'}];
export const SceneModify: React.FC = () => {
	const f = useCurrentFrame();
	const OLD_H = wrapSegs([{t: 'If', c: NAVY_T}, {t: ' heated until their mass stops changing, '}, {t: 'then', c: INK}, {t: " they'll lose 36.1% of their mass, "}, {t: 'because', c: GOLD_T}, {t: ' heating drives off the water.'}], 38, RW - 60);
	const NH = wrapSegs(NEW_HYP, 40, RW - 60);
	const OLD_Q = wrapText('What percentage of the mass of blue copper sulfate crystals is lost when heated until the mass stops changing?', 34, RW - 60, INK, 700);
	const NQ = wrapSegs(NEW_Q, 44, RW - 60);
	const lineOf = (L: Seg[][], s: string) => L.findIndex(l => l.map(x => x.t).join('').includes(s));
	const hAt = NH.map((l, i) => {
		const s = l.map(x => x.t).join('');
		return s.includes('while') || s.includes('sulfate.') ? K9.whilew + (i - lineOf(NH, 'while')) * 22 : s.includes('because') || s.includes('gentle heat') ? K9.bec : s.includes('then') ? K9.then1 : K9.if1 + i * 26;
	});
	// the heating run (prediction model): 0 to 10 min over the prediction sentence
	const t = 10 * clamp01((f - K9.ours) / (K9.gone - K9.ours + 6));
	const run = f >= K9.ours;
	const pct = lostAt(t);
	const mix = !run ? {b: 1} : {b: 1, p: clamp01((t - 2.5) / 1.5) * (1 - clamp01((t - 5.5) / 1.5)), w: clamp01((t - 5.5) / 1.5)};
	const hy = 196, hh = NH.length * 52 + 86;
	const qy = hy + hh + 70;
	return (
		<SVG>
			<Heading text="Modify the hypothesis and the question" at={0} />
			{/* left: the crucible and the heating run */}
			<Cru x={96} y={190} h={360} mix={mix} />
			<Sx x={340} y={232} text="heating time" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={340} y={246} w={380} text={`${t.toFixed(1)} min`} size={52} />
			<Sx x={340} y={372} text="mass lost" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={340} y={386} w={380} text={`${pct.toFixed(1)}%`} size={52} color={run ? INK : INK} />
			<Chip x={340} y={500} segs={[{t: 'published data agree'}]} at={K9.published} out={K9.ours - 10} size={32} color={TEAL_T} />
			<Fade at={-1000} out={K9.ours - 10}><TickMark x={700} y={526} at={K9.published + 10} s={1.1} color={TEAL} /></Fade>
			<Sx x={340} y={586} text="breaks down only when" size={30} color={INK} weight={700} at={K9.breaks} out={K9.ours - 10} />
			<Sx x={340} y={618} text="much hotter" size={30} color={INK} weight={700} at={K9.breaks} out={K9.ours - 10} />
			<Axes g={G9} xLabel="heating time (min)" yLabel="% mass lost" xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[0, 25, 50]} />
			<line x1={G9.x0} x2={G9.x1} y1={axY(G9, 36.1)} y2={axY(G9, 36.1)} stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
			<Sx x={G9.x1 + 12} y={axY(G9, 36.1) + 10} text="36.1%" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={G9.x1 - 6} y={G9.y0 - 16} anchor="end" text="prediction (model)" size={30} color={INK} weight={800} at={-1000} />
			{run ? <path d={fnPath(G9, lostAt, t)} fill="none" stroke={NAVY_T} strokeWidth={6} strokeDasharray="14 9" strokeLinecap="round" /> : null}
			{run ? <circle cx={axX(G9, t)} cy={axY(G9, pct)} r={10} fill={NAVY_T} /> : null}
			{/* the two class results (illustrative) */}
			<circle cx={axX(G9, 4)} cy={axY(G9, 27.6)} r={12} fill={NAVY_T} stroke="#fff" strokeWidth={3} />
			<Sx x={axX(G9, 4) + 20} y={axY(G9, 27.6) + 44} text="B: 4 min, 27.6%" size={30} color={NAVY_T} weight={800} at={-1000} />
			<circle cx={axX(G9, 9)} cy={axY(G9, 36.0)} r={12} fill={TEAL} stroke="#fff" strokeWidth={3} />
			<Sx x={axX(G9, 9)} y={axY(G9, 36.0) + 46} text="A" size={34} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<PenRing cx={axX(G9, 4)} cy={axY(G9, 27.6)} rx={34} ry={30} at={K9.B} color={NAVY_T} seed={3} />
			<DrawPath d={`M${axX(G9, 7)},${axY(G9, 36.1) - 22} L${axX(G9, 7)},${axY(G9, 36.1) - 34} L${axX(G9, 10)},${axY(G9, 36.1) - 34} L${axX(G9, 10)},${axY(G9, 36.1) - 22}`} at={K9.levels + 10} dur={14} color={TEAL} width={5} />
			<Write x={axX(G9, 5.4)} y={axY(G9, 36.1) - 48} text="levels at 36.1%" at={K9.levels + 14} size={42} color={TEAL_T} />
			{/* right: the hypothesis, rewritten */}
			<rect x={RX} y={hy} width={RW} height={hh} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={RX + 30} y={hy + 42} text="hypothesis" size={30} color={INK} weight={800} at={-1000} />
			<Fade at={-1000} out={K9.if1 - 4}>
				{OLD_H.map((l, i) => <Rich key={i} x={RX + 30} y={hy + 100 + i * 52} segs={l} size={38} />)}
			</Fade>
			<Para x={RX + 30} y={hy + 100} lines={NH} size={40} lh={52} at={hAt} cps={44} />
			{(() => {
				const out: React.ReactNode[] = [];
				NH.forEach((l, i) => l.filter(sg => sg.c === GOLD_T && sg.t !== 'because').forEach((sg, k) => {
					const [a, b] = spanOf(l, sg.t, RX + 30, 40);
					out.push(<Under key={i + '-' + k} x0={a} x1={b} y={hy + 100 + i * 52} at={sg.t === 'gently' ? K9.gently + 6 : K9.sulfate + 6} color={GOLD_T} width={5} />);
				}));
				return out;
			})()}
			<Write x={RX} y={qy - 20} text="condition added, reason fixed" at={K9.condition} size={42} color={GOLD_T} />
			{/* the question, sharpened */}
			<rect x={RX} y={qy} width={RW} height={NQ.length * 58 + 90} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={RX + 30} y={qy + 42} text="inquiry question" size={30} color={INK} weight={800} at={-1000} />
			<Fade at={-1000} out={K9.how - 4}>
				{OLD_Q.map((l, i) => <Rich key={i} x={RX + 30} y={qy + 96 + i * 44} segs={l} size={34} weight={700} />)}
			</Fade>
			{OLD_Q.map((l, i) => <Strike key={i} x0={RX + 30} x1={spanOf(l, l.map(x => x.t).join(''), RX + 30, 34, 700)[1]} y={qy + 96 + i * 44} size={34} at={K9.sharper + i * 5} out={K9.how - 4} color={SLATE_T} />)}
			<Para x={RX + 30} y={qy + 100} lines={NQ} size={44} lh={58} at={NQ.map((_, i) => K9.how + i * 30)} cps={40} />
			{NQ.flatMap((l, i) => l.filter(sg => sg.c === NAVY_T || sg.c === INK).map((sg, k) => {
				const [a, b] = spanOf(l, sg.t, RX + 30, 44);
				return <Under key={'q' + i + k} x0={a} x1={b} y={qy + 100 + i * 58} at={(sg.c === NAVY_T ? K9.lost - 10 : K9.lost) + k * 4} color={sg.c === NAVY_T ? NAVY_T : INK} />;
			}))}
			{void K9.modify}{void K9.time}{void K9.pct}{void K9.rises}{void K9.ours}{void PenCross}{void PenArrow}{void crys}{void Readout}{void Disc}
		</SVG>
	);
};
