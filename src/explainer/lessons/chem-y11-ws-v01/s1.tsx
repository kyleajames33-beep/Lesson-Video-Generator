// Y11 Chem WS V01 scenes 1 to 4: V10's final frame (the model timeline and our small sand and salt bar) giving way to
// the sand and salt investigation (painted balance with the dried sand, the enlarged accounting bar with its 103.7%
// overhang, the question rewritten from "How much salt?" to "Was the sand really dry?"), the copper sulfate crucible
// turning white beside the inquiry question that names what is measured and the condition, the hypothesis card built
// as if, then, because (with the formula mass bar losing its water), and the primary and secondary data board.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V10Handoff} from '../chem-y11-m1-v10/s3';
import {dur as v10dur} from '../chem-y11-m1-v10/common';
import {F_CUSO4} from '../chem-y11-m1-v07/common';
import {MassBar, WATER_INK} from '../chem-y11-m1-v07/parts';
import {SAND_F, SAND_INK, SALT_F} from '../chem-y11-m1-v06/parts';
import {SAND, sc} from './common';
import {
	AMB, AccBar, Balance, BoxCard, Chip, Cru, CruBowl, DrawPath, Fade, GOLD_T, Heading, INK, NAVY_T, Para, PenArrow, PenRing, Plate, RED_T, Readout, Rich, SLATE_T, SVG, Strike,
	Sx, TEAL, TEAL_T, TERRA_T, TickMark, Under, Write, WriteRich, balGeo, tw, cruW, cruXY, lerp, prog, smooth, spanOf, wrapSegs, wrapText,
} from './parts';
import type {Seg} from './parts';

// ---------- 1. hook: evidence that didn't fit (opens on V10's final frame) ----------
const K1 = cues(sc('hook'), {each: 'each time because', evid: 'evidence that', own: 'Your own', sand: 'sand and salt', percent: 'hundred percent', extra: 'That extra', mistake: 'maths mistake', newev: 'It was new', changed: 'it changed the', how: 'how much salt', was: 'was the sand', dry: 'really dry', today: 'Today', build: "we'll build", hyp: 'a hypothesis', improve: 'improve them'});
// V10's final frame (read from src/explainer/lessons/chem-y11-m1-v10/s3.tsx SceneHandoff, 20 Nov 2026)
const V10_BAR = {x: 1560, y: 868, w: 236, h: 48};
const BAR = {x: 760, y: 330, w: 960, h: 110};
const BG1 = balGeo(90, 400, 400);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K1.own, 42));
	const shrink = smooth(prog(f, K1.own - 6, 30));
	const b = {x: lerp(V10_BAR.x, BAR.x, m), y: lerp(V10_BAR.y, BAR.y, m), w: lerp(V10_BAR.w, BAR.w, m), h: lerp(V10_BAR.h, BAR.h, m)};
	const glow = (at: number) => 0.55 * prog(f, at, 10) * (1 - prog(f, at + 40, 16));
	const sandW = 380, sandH = (sandW / SAND.box[2]) * SAND.box[3];
	const ovX = BAR.x + BAR.w;
	const q1: Seg[] = [{t: 'How much salt is there?'}];
	const q2: Seg[] = [{t: 'Was the sand really dry?'}];
	const qx = 800, q1y = 626, q2y = 714;
	return (
		<SVG>
			{/* V10's final frame, frozen; the timeline shrinks into the corner chip */}
			{shrink < 0.999 ? (
				<g opacity={1 - shrink} transform={`translate(${1824 * shrink},${60 * shrink}) scale(${1 - 0.8 * shrink})`}>
					<Freeze frame={v10dur('handoff') - 1}><V10Handoff /></Freeze>
				</g>
			) : null}
			{/* the timeline's two arrows glow in turn on the first sentence */}
			{f < K1.own ? <>
				<line x1={492} x2={768} y1={470} y2={470} stroke={AMB} strokeWidth={24} strokeLinecap="round" opacity={glow(K1.each)} />
				<line x1={1152} x2={1416} y1={470} y2={470} stroke={AMB} strokeWidth={24} strokeLinecap="round" opacity={glow(K1.evid)} />
			</> : null}
			<Chip x={1824} y={30} segs={[{t: 'new evidence → better model'}]} at={K1.own + 20} size={34} color={NAVY_T} anchor="end" />
			<Heading text="From evidence to a better question" at={K1.own + 30} />
			{/* our investigation: the dried sand on the balance */}
			<Fade at={K1.own + 4}>
				<Balance g={BG1} text="4.12 g" />
				<Plate p={SAND} x={BG1.pan[0] - sandW / 2} y={BG1.pan[1] - sandH + 26} h={sandH} />
				<Sx x={BG1.X(687)} y={BG1.Y(1028) + 40} text="sand after drying" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{/* the accounting bar, from V10's small copy to the board */}
			<AccBar id="w1bar" x={b.x} y={b.y} w={b.w} h={b.h} whole={20} labelSize={m > 0.95 ? 34 : 26} extraAt={-1000}
				segs={[{m: lerp(6.2, 8.24, m), fill: SAND_F, ink: SAND_INK, at: -1000, label: m > 0.95 ? 'sand 41.2%' : undefined}, {m: lerp(14.3, 12.5, m), fill: SALT_F, ink: INK, at: -1000, label: m > 0.95 ? 'salt 62.5%' : undefined}]} />
			<Sx x={ovX} y={BAR.y + BAR.h + 46} text="100%" size={30} color={INK} anchor="middle" weight={800} at={K1.own + 40} />
			<Sx x={BAR.x} y={BAR.y + BAR.h + 46} text="recovered from 10.00 g of mixture" size={30} color={INK} weight={700} at={K1.sand} />
			<PenRing cx={ovX + 18} cy={BAR.y + BAR.h / 2} rx={44} ry={84} at={K1.percent} color={TEAL} seed={5} />
			<Write x={1810} y={270} text="103.7%: extra mass" at={K1.percent + 6} size={42} color={TEAL_T} anchor="end" />
			<Write x={BAR.x} y={280} text="evidence, not a mistake" at={K1.newev} size={42} color={TEAL_T} />
			{/* the question, rewritten */}
			<BoxCard x={760} y={530} w={1064} h={300} at={K1.sand} stroke={INK}>
				<Sx x={790} y={566} text="the question" size={30} color={INK} weight={800} at={-1000} />
			</BoxCard>
			<WriteRich x={qx} y={q1y} segs={q1} at={K1.sand + 8} size={44} />
			<Strike x0={qx} x1={spanOf(q1, 'there?', qx, 44)[1]} y={q1y} size={44} at={K1.was} color={SLATE_T} />
			<WriteRich x={qx} y={q2y} segs={q2} at={K1.was + 4} size={44} />
			<Under x0={qx} x1={spanOf(q2, 'dry?', qx, 44)[1]} y={q2y} at={K1.dry + 6} color={NAVY_T} />
			<Write x={qx} y={800} text="extra mass: water still in the sand?" at={K1.dry + 18} size={42} color={NAVY_T} />
			{/* today's route */}
			{(['inquiry question', 'hypothesis', 'new evidence'] as const).map((t, i) => (
				<Chip key={t} x={96 + i * 420} y={880} segs={[{t}]} at={[K1.build, K1.hyp, K1.improve - 10][i]} size={34} color={NAVY_T} />
			))}
			{[0, 1].map(i => <PenArrow key={i} a={[96 + i * 420 + [330, 220][i], 907]} b={[96 + (i + 1) * 420 - 12, 907]} at={[K1.hyp, K1.improve - 10][i]} color={NAVY_T} bend={0} />)}
			{void K1.extra}{void K1.mistake}{void K1.how}{void K1.today}
		</SVG>
	);
};

// ---------- 2. from observation to inquiry question ----------
const K2 = cues(sc('inquiry-question'), {heating: 'heating drove', white: 'white powder', obs: "That's an observation", notice: 'something we notice', turn: 'we turn it', one: 'one that data', what: 'What happens', broad: 'too broad', nothing: 'nothing specific', better: 'A better question', pct: 'what percentage', blue: ['blue copper', 2], heated: "they're heated", changing: 'stops changing', names: 'It names what', before: 'mass before', condition: 'the condition', steady: 'steady mass'});
export const CRU2 = {x: 140, y: 214, h: 470};
const QX2 = 930, QW2 = 860;
export const SceneInquiry: React.FC = () => {
	const f = useCurrentFrame();
	const mix = {b: 1, l: prog(f, K2.heating, 20) * (1 - prog(f, K2.white - 30, 30)), w: prog(f, K2.white - 30, 30)};
	const steam = prog(f, K2.heating + 10, 12) * (1 - prog(f, K2.obs, 20));
	const [sx, sy] = cruXY(CRU2.x, CRU2.y, CRU2.h, 512, 175);
	const old: Seg[] = [{t: 'What happens when you heat crystals?'}];
	const NQ = wrapSegs([{t: 'What '}, {t: 'percentage of the mass', c: NAVY_T}, {t: ' of blue copper sulfate crystals '}, {t: 'is lost', c: NAVY_T}, {t: " when they're heated "}, {t: 'until their mass stops changing?', c: INK}], 44, QW2 - 40);
	const at2 = [K2.pct, K2.blue + 10, K2.heated - 4, K2.changing - 10];
	const lyN = (i: number) => 450 + i * 58;
	// pen underlines: navy under what is measured, ink under the condition (by segment colour)
	const unders = NQ.flatMap((l, i) => l.filter(sg => sg.c === NAVY_T || sg.c === INK).map((sg, k) => {
		const [x0, x1] = spanOf(l, sg.t, QX2, 44);
		const nav = sg.c === NAVY_T;
		return <Under key={i + '-' + k} x0={x0} x1={x1} y={lyN(i)} at={(nav ? K2.names : K2.condition) + k * 6} color={nav ? NAVY_T : INK} />;
	}));
	return (
		<SVG>
			<Heading text="From observation to inquiry question" at={0} />
			<Cru x={CRU2.x} y={CRU2.y} h={CRU2.h} mix={mix} />
			{steam > 0.01 ? <g opacity={steam}>
				{[0, 1, 2].map(i => {
					const t = ((f * 0.9 + i * 22) % 66) / 66;
					return <path key={i} d={`M${sx - 50 + i * 50},${sy - 10 - t * 110} q 14,-22 0,-44 q -14,-22 0,-44`} fill="none" stroke="#9fb8cc" strokeWidth={6} strokeLinecap="round" opacity={1 - t} />;
				})}
			</g> : null}
			<Write x={CRU2.x + cruW(CRU2.h) + 30} y={300} text="water driven off" at={K2.heating + 20} size={42} color={INK} />
			<PenArrow a={[CRU2.x + cruW(CRU2.h) + 60, 316]} b={[sx + 60, sy - 40]} at={K2.heating + 30} color={INK} bend={-0.2} />
			<Chip x={110} y={720} segs={[{t: 'observation: '}, {t: 'blue crystals → white powder'}]} at={K2.obs} size={32} color={INK} />
			<Write x={CRU2.x + cruW(CRU2.h) + 30} y={560} text="what we saw" at={K2.obs + 10} size={42} color={TEAL_T} />
			<PenArrow a={[CRU2.x + cruW(CRU2.h) + 100, 580]} b={[330, 716]} at={K2.obs + 18} color={TEAL_T} bend={-0.2} />
			<Sx x={110} y={830} text="observation: noticed with our senses" size={30} color={INK} weight={700} at={K2.notice} />
			<Sx x={110} y={870} text="or instruments" size={30} color={INK} weight={700} at={K2.notice} />
			{/* the question box */}
			<Fade at={-1000} out={K2.one - 12}>
				<Cru x={1000} y={250} h={360} mix={{b: 1}} />
				<Cru x={1460} y={250} h={360} mix={{w: 1}} />
				<PenArrow a={[1260, 420]} b={[1420, 420]} at={-1000} color={INK} bend={0} width={6} />
				<Sx x={1000 + cruW(360) / 2} y={660} text="before: blue crystals" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1460 + cruW(360) / 2} y={660} text="after: white powder" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<BoxCard x={QX2 - 30} y={210} w={QW2 + 30} h={480} at={K2.one - 6} />
			<Write x={QX2} y={260} text="inquiry question: one that data can answer" at={K2.one} size={34} color={NAVY_T} />
			<WriteRich x={QX2} y={330} segs={old} at={K2.what} size={44} />
			<Strike x0={QX2} x1={spanOf(old, 'crystals?', QX2, 44)[1]} y={330} size={44} at={K2.nothing} color={RED_T} />
			<Write x={QX2} y={386} text="measure what?" at={K2.nothing + 8} size={42} color={RED_T} />
			<Para x={QX2} y={lyN(0)} lines={NQ} size={44} lh={58} at={at2} />
			{unders}
			<Write x={QX2} y={760} text="measured: mass before and after" at={K2.before} size={42} color={NAVY_T} />
			<Write x={QX2} y={830} text="condition: heat to a steady mass" at={K2.steady} size={42} color={INK} />
			<Sx x={QX2} y={900} text="concept: water of crystallisation" size={30} color={INK} weight={800} at={K2.steady + 12} />
			{void K2.broad}{void K2.better}
		</SVG>
	);
};
// ---------- 3. a hypothesis, with a reason ----------
const K3 = cues(sc('hypothesis'), {hyp: 'Next comes', pred: 'a testable prediction', pattern: 'useful pattern', ifw: 'is if', thenw: ['then,', 1], becw: ['because.', 1], if1: 'If blue', then1: "then they'll", bec1: 'because the formula', drives: 'heating drives', off: 'water off', reason: 'The reason is', guess: 'more than a guess', mem: ['If, then, because', 2], chem: 'is the chemistry'});
export const HX = 560, HW = 1264;
/** The hypothesis rows of scene 3 (also scene 6's card source). */
export const H_ROWS: {lead: string; color: string; rest: string}[] = [
	{lead: 'If', color: NAVY_T, rest: ' blue copper sulfate crystals are heated until their mass stops changing,'},
	{lead: 'then', color: INK, rest: " they'll lose 36.1% of their mass,"},
	{lead: 'because', color: GOLD_T, rest: ' the formula CuSO_4·5H_2O shows water is 36.1% of the mass, and heating drives the water off.'},
];
export const SceneHypothesis: React.FC = () => {
	const f = useCurrentFrame();
	const lead = [K3.ifw, K3.thenw, K3.becw];
	const restAt = [K3.if1, K3.then1, K3.bec1];
	const rows = H_ROWS.map(r => wrapSegs([{t: r.lead, c: r.color}, {t: r.rest}], 44, HW - 70));
	let y = 440;
	const placed = rows.map((ls, i) => { const y0 = y; y += ls.length * 54 + 12; return {ls, y0, i}; });
	const lift = 0.75 * smooth(prog(f, K3.drives, 40));
	return (
		<SVG>
			<Heading text="A hypothesis, with a reason" at={0} />
			<Cru x={120} y={220} h={360} mix={{b: 1}} />
			<Write x={1824} y={150} text="prediction + reason" at={K3.pred} size={42} color={GOLD_T} anchor="end" />
			<rect x={HX - 30} y={196} width={HW + 40} height={104} rx={14} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
			{wrapText("inquiry question: What percentage of the mass of blue copper sulfate crystals is lost when they're heated until their mass stops changing?", 30, HW - 20, NAVY_T, 700).map((l, i) => <Rich key={'q' + i} x={HX} y={236 + i * 40} segs={l} size={30} weight={700} />)}
			<BoxCard x={HX - 30} y={326} w={HW + 40} h={y - 326} at={-1000} />
			<Rich x={HX} y={378} segs={[{t: 'hypothesis: ', c: GOLD_T}, {t: 'a testable prediction with a reason'}]} size={36} at={K3.hyp + 30} />
			{placed.map(({ls, y0, i}) => (
				<g key={i}>
					{/* the lead word arrives with the pattern, the rest as it is spoken */}
					<Rich x={HX} y={y0} segs={[{t: ls[0][0].t, c: f >= lead[i] ? ls[0][0].c : INK}]} size={44} />
					<Under x0={HX} x1={HX + tw(ls[0][0].t, 44)} y={y0} at={lead[i]} out={restAt[i]} color={ls[0][0].c ?? INK} />
					<line x1={HX + tw(ls[0][0].t, 44) + 20} x2={HX + HW - 90} y1={y0 + 8} y2={y0 + 8} stroke={INK} strokeWidth={3} strokeDasharray="4 12" strokeLinecap="round" opacity={1 - prog(f, restAt[i], 8)} />
					<WriteRich x={HX} y={y0} segs={[{t: ls[0][0].t, c: 'rgba(0,0,0,0)'}, ...ls[0].slice(1)]} size={44} at={restAt[i]} cps={44} />
					{ls.slice(1).map((l, k) => <WriteRich key={k} x={HX + 40} y={y0 + (k + 1) * 54} segs={l} size={44} at={restAt[i] + 30 + k * 40} cps={44} />)}
				</g>
			))}
			{/* recall: the formula's mass bar loses its water */}
			<Fade at={-1000}>
				<MassBar F={F_CUSO4} x={100} y={780} w={380} h={64} size={28} lift={lift} />
				<Sx x={100} y={880} text="the percentage video" size={30} color={INK} weight={800} at={-1000} />
			</Fade>
			<Write x={100} y={640} text="water 36.1%" at={K3.off} size={42} color={WATER_INK} />
			<Chip x={HX} y={800} segs={[{t: 'a hypothesis is a guess'}]} at={K3.guess} size={36} color={INK} strike={K3.guess + 14} />
			<Write x={HX} y={918} text="needs a because" at={K3.guess + 20} size={42} color={RED_T} />
			{/* the memory card */}
			<Fade at={K3.mem}>
				<rect x={1080} y={790} width={744} height={156} rx={20} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
			</Fade>
			<WriteRich x={1110} y={850} segs={[{t: 'If, ', c: NAVY_T}, {t: 'then, ', c: INK}, {t: 'because:', c: GOLD_T}]} size={52} hand weight={700} at={K3.mem} cps={20} />
			<WriteRich x={1110} y={920} segs={[{t: 'the because is the chemistry.', c: GOLD_T}]} size={52} hand weight={700} at={K3.chem - 24} cps={30} />
			{void K3.hyp}{void K3.reason}
		</SVG>
	);
};

// ---------- 4. primary and secondary data ----------
const K4 = cues(sc('primary-secondary'), {primary: 'Primary data', yours: 'collect yourself', masses: 'masses read', secondary: 'Secondary data', theirs: 'someone else', ram: 'relative atomic', pct: 'thirty-six point', sheet: 'data sheet', some: 'some questions', temp: 'At what temperature', down: 'break down', testing: 'Testing that', harmful: 'harmful gases', look: 'look it up', source: 'reliable source'});
const BG4 = balGeo(110, 360, 400);
export const ScenePrimary: React.FC = () => {
	const f = useCurrentFrame();
	const q = wrapText('At what temperature does copper sulfate break down?', 44, 780);
	const tick = (at: number, n: number) => n * smooth(prog(f, at, 26));
	const reading = `${tick(K4.yours - 2, 26.81).toFixed(2)} g`;
	const bowlOn = prog(f, K4.yours - 14, 14);
	return (
		<SVG>
			<Heading text="Primary and secondary data" at={0} />
			<line x1={960} x2={960} y1={210} y2={930} stroke="rgba(60,45,20,0.25)" strokeWidth={3} strokeDasharray="10 10" />
			{/* primary */}
			<Rich x={96} y={250} segs={[{t: 'primary data: ', c: NAVY_T}, {t: 'collected by you'}]} size={38} />
			<Balance g={BG4} text={reading} />
			<g opacity={bowlOn} transform={`translate(0,${(1 - bowlOn) * -40})`}>
				<CruBowl id="w4bowl" p={[BG4.pan[0], BG4.pan[1] + 4]} k={0.4} />
			</g>
			<Write x={640} y={330} text="yours" at={K4.yours} size={42} color={NAVY_T} />
			<Readout x={96} y={790} w={600} text="crucible: 24.31 g" size={44} at={K4.yours} />
			<Readout x={96} y={866} w={600} text="+ crystals: 26.81 g" size={44} at={K4.masses + 20} />
			<Sx x={720} y={900} text="illustrative data" size={30} color={INK} weight={800} at={K4.yours} />
			{/* secondary */}
			<Rich x={1000} y={250} segs={[{t: 'secondary data: ', c: INK}, {t: 'collected by someone else'}]} size={34} />
			<BoxCard x={1000} y={290} w={500} h={240}>
				<Sx x={1028} y={336} text="published data sheet" size={30} color={INK} weight={800} at={-1000} />
				<line x1={1028} x2={1472} y1={352} y2={352} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
			</BoxCard>
			<Rich x={1028} y={420} segs={[{t: 'Cu 63.5     S 32.1'}]} size={44} />
			<Rich x={1028} y={494} segs={[{t: 'O 16.0     H 1.0'}]} size={44} />
			<Under x0={1028} x1={1028 + tw('Cu 63.5     S 32.1', 44)} y={420} at={K4.ram} color={INK} />
			<Under x0={1028} x1={1028 + tw('O 16.0     H 1.0', 44)} y={494} at={K4.ram + 10} color={INK} />
			<Write x={1540} y={330} text="theirs" at={K4.theirs} size={42} color={INK} />
			<Chip x={1540} y={400} segs={[{t: 'water: 36.1%'}]} at={K4.pct} size={38} color={GOLD_T} />
			<PenArrow a={[1460, 470]} b={[1560, 452]} at={K4.pct + 6} color={INK} bend={0.25} />
			<Sx x={1540} y={520} text="from the formula" size={30} color={INK} weight={700} at={K4.sheet} />
			<BoxCard x={1000} y={570} w={824} h={170} at={K4.temp - 6} />
			<Para x={1028} y={632} lines={q} size={44} lh={58} at={[K4.temp, K4.down - 14]} />
			<Write x={1000} y={800} text="very strong heat: harmful gases" at={K4.harmful} size={42} color={TERRA_T} />
			<Under x0={1000} x1={1000 + tw('very strong heat: harmful gases', 42, true, 700)} y={800} at={K4.harmful + 14} color={TERRA_T} />
			<Chip x={1000} y={846} segs={[{t: 'published data'}]} at={K4.look} size={34} color={TEAL_T} />
			<TickMark x={1310} y={872} at={K4.source - 6} s={1.2} color={TEAL} />
			<Write x={1370} y={890} text="look it up" at={K4.source} size={42} color={TEAL_T} />
			{void K4.primary}{void K4.secondary}{void K4.some}{void K4.testing}{void DrawPath}
		</SVG>
	);
};
