// S04 scenes 1 to 5: the hook (10 of 17 big question parts; 7 of 12 reports), the four glossary verbs, the worked
// question card (acid spill, evaluate), the reading routine, and the three parts (verdict, criteria, evidence).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, Flag, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, MarksBadge, Overlay, PenArrow, QuestionCard, RoutineStrip, T, TEAL, ZONE,
	answerGeom, cardGeom, lerp, marksAt, phraseAt, prog, smooth, vis,
} from './kit';
import {CARD_S, ROW_LABELS, SPILL_ANN, SPILL_CARD, SX4, boxFull, sc, spillSpec} from './common';
import {BalanceBeam, VerbCard4, VerdictStrip} from './pieces';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {seven: 'seven marks or more', seventeen: 'seventeen', ten: 'ten', twelve: 'seven of the last twelve', judgement: 'judgement', back: 'back it up'});
const TILES: [string, number, string][] = [
	['C24 Q38', 7, 'explain'], ['B22 Q32', 7, 'explain'], ['B24 Q32', 7, 'explain'], ['C23 Q31', 7, 'calculate'], ['C22 Q30', 7, 'justify'], ['C24 Q35', 7, 'justify'],
	['B25 Q32', 7, 'justify'], ['C23 Q36', 9, 'justify'], ['B23 Q27', 7, 'evaluate'], ['B23 Q32', 7, 'evaluate'], ['B25 Q30(b)', 7, 'evaluate'], ['B21 Q30', 7, 'analyse'],
	['C22 Q33', 8, 'analyse'], ['B21 Q33(c)', 9, 'analyse'], ['C25 Q36', 7, 'predict'], ['B22 Q30', 7, 'discuss'], ['B24 Q34', 7, 'discuss'],
];
const JUDGE = ['justify', 'evaluate', 'analyse'];
const REPORTS = ['Biology', 'Chemistry'].flatMap(s => [2020, 2021, 2022, 2023, 2024, 2025].map(y => `${s} ${y}`));
const FLAGGED = ['Biology 2021', 'Biology 2022', 'Biology 2023', 'Biology 2025', 'Chemistry 2020', 'Chemistry 2022', 'Chemistry 2023'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.twelve - 12, 22));
	const ts = lerp(1, 0.5, sh), ty = lerp(0, -170, sh);
	let litK = 0;
	return (
		<>
			<Heading text="Analyse, assess, evaluate, justify" at={K1.back + 4} size={62} />
			<Overlay>
				<g opacity={1 - prog(f, K1.back - 14, 12)} transform={`translate(960,${260 + ty}) scale(${ts}) translate(-960,-260)`}>
					{TILES.map(([code, mk, verb], i) => {
						const x = 96 + i * 102, y = 260;
						const j = JUDGE.includes(verb);
						const k = j ? litK++ : -1;
						const lit = j ? prog(f, K1.ten + 8 + k * 8, 10) : 0;
						const settle = (1 - smooth(prog(f, 6 + i * 6, 16))) * -30;
						return (
							<g key={code} opacity={prog(f, 6 + i * 6, 12)} transform={`translate(0,${settle})`}>
								<rect x={x} y={y} width={94} height={150} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
								<rect x={x} y={y} width={94} height={150} rx={12} fill={AMBER} opacity={0.85 * lit} />
								<T x={x + 47} y={y + 58} text={String(mk)} size={48} weight={800} color={j && lit > 0.5 ? '#3d2a05' : INK} anchor="middle" />
								<T x={x + 47} y={y + 100} text={verb} size={18} weight={700} color={j ? '#3d2a05' : GREY_INK} anchor="middle" o={prog(f, K1.ten + (j ? 8 + k * 8 : 90), 10)} />
								<T x={x + 47} y={y + 136} text={code} size={15} weight={600} color={GREY_INK} anchor="middle" />
							</g>
						);
					})}
				</g>
				<g opacity={1 - prog(f, K1.twelve - 12, 10)}>
					<Chip x={96} y={450} text="10 of 17" at={K1.ten + 90} size={44} color={AMBER_INK} fill="#fff8e6" />
					<GreyTag x={330} y={460} text="question parts worth 7+ marks with a NESA glossary key word; HSC Chemistry and Biology, Section II, 2021 to 2025" at={K1.ten + 96} size={22} maxW={1300} />
					{['justify 23', 'evaluate 11', 'analyse 4', 'assess 1'].map((t, i) => <Chip key={t} x={96 + i * 260} y={580} text={t} at={K1.ten + 70 + i * 8} size={34} color={INK} />)}
					<GreyTag x={96} y={670} text="each verb's question parts, all mark values, 2021 to 2025" at={K1.ten + 110} size={22} />
				</g>
				<g opacity={vis(f, K1.twelve, K1.back - 10, 12)}>
					{REPORTS.map((r, i) => {
						const col = i % 6, row = Math.floor(i / 6);
						const x = 220 + col * 250, y = 330 + row * 140;
						const k = FLAGGED.indexOf(r);
						return (
							<g key={r} opacity={prog(f, K1.twelve + i * 3, 12)}>
								<rect x={x} y={y} width={230} height={112} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
								<T x={x + 20} y={y + 46} text={r.split(' ')[0]} size={28} weight={700} color={INK} />
								<T x={x + 20} y={y + 84} text={r.split(' ')[1]} size={28} weight={500} color={INK_SOFT} />
								{k >= 0 ? <Flag x={x + 186} y={y + 32} at={K1.judgement + k * 7} /> : null}
							</g>
						);
					})}
					<GreyTag x={955} y={640} text="NESA marking feedback, 2020 to 2025: 7 of 12 reports" at={K1.judgement + 50} size={26} anchor="middle" />
				</g>
				<Chip x={960} y={640} text="Verdict" at={K1.back} size={48} color={AMBER_INK} fill="#fff8e6" anchor="middle" />
				{[-1, 0, 1].map(k => <DrawPath key={k} d={`M${960 + k * 50},${734} L${960 + k * 110},${870}`} at={K1.back + 12 + (k + 1) * 6} dur={14} color={INK_SOFT} width={4} />)}
				{void K1.seven}{void K1.seventeen}
			</Overlay>
		</>
	);
};

// ---------- 2. Four verbs ----------
const K2 = cues(sc('four-verbs'), {analyse: 'Analyse means', assess: 'Assess means', evaluate: 'Evaluate means', justify: 'Justify means', judgement: 'judgement', reasons: 'reasons'});
export const VERB4 = [
	{verb: 'analyse', body: 'break into parts, connect them, work out implications', icon: 'parts' as const},
	{verb: 'assess', body: 'judge value, quality, outcomes, results or size', icon: 'dial' as const},
	{verb: 'evaluate', body: 'judge against criteria, or determine value', icon: 'ruler' as const},
	{verb: 'justify', body: 'give support for an argument or conclusion', icon: 'struts' as const},
];
export const SceneVerbs: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K2.analyse, K2.assess, K2.evaluate, K2.justify];
	return (
		<Overlay>
			{VERB4.map((v, i) => (
				<VerbCard4 key={v.verb} x={i % 2 ? 1000 : 140} y={i < 2 ? 210 : 470} w={780} h={210} verb={v.verb} body={v.body} icon={v.icon} at={at[i]} size={30}
					stamp={i > 0 ? K2.judgement + (i - 1) * 8 : undefined} because={K2.reasons + i * 6} o={i === 0 ? 1 - 0.3 * prog(f, K2.reasons + 30, 14) : 1} />
			))}
			<GreyTag x={140} y={720} text="NESA glossary, paraphrased" at={K2.analyse + 20} size={24} />
		</Overlay>
	);
};

// ---------- 3. The question card ----------
const K3 = cues(sc('question-card'), {hsc: 'HSC-style', about: 'About fifty', powder: 'powder', solution: 'solution', table: 'A table compares', evaluate: 'evaluate', four: 'Four marks', bio: 'If you take Biology'});
/** Coded bench edge with a small clear puddle (no plate). */
export const Spill: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y + 60} width={400} height={26} rx={4} fill="#d9c7a7" stroke="#8a7350" strokeWidth={2.5} />
			<path d={`M${x + 60},${y + 58} C${x + 80},${y + 30} ${x + 220},${y + 26} ${x + 300},${y + 44} C${x + 340},${y + 52} ${x + 320},${y + 62} ${x + 280},${y + 60} Z`} fill="#cfe6f2" stroke="#7fa9c2" strokeWidth={2.5} opacity={smooth(prog(f, at + 6, 20))} />
			<T x={x + 180} y={y + 130} text="HCl spill, about 50 mL" size={24} hand weight={700} color={GREY_INK} anchor="middle" />
		</g>
	);
};
export const SceneCard: React.FC = () => {
	const spec = spillSpec([K3.about, K3.powder, K3.evaluate], K3.four);
	const box = boxFull();
	return (
		<Overlay>
			<QuestionCard spec={spec} at={K3.hsc} ann={ROW_LABELS.map((p, i) => ({kind: 'pulse' as const, phrase: p, at: K3.table + 10 + i * 10}))} />
			<AnswerBox spec={box} at={K3.evaluate + 30} counter={{total: 4, label: true}} />
			<Spill x={SX4} y={box.y + 10} at={K3.about + 30} />
			<GreyTag x={SX4} y={box.y + 200} text="Biology students: watch the shape of the answer" at={K3.bio} size={23} maxW={380} />
			{void K3.solution}
		</Overlay>
	);
};

// ---------- 4. Read it ----------
const K4 = cues(sc('read-it'), {routine: 'Run the routine', evaluate: 'evaluate', four: 'Four marks', rather: 'rather than sodium hydroxide', constraint: 'constraint', evidence: 'evidence', copy: 'copy them'});
export const SceneRead: React.FC = () => {
	const box = boxFull();
	const m = marksAt(SPILL_CARD);
	const g = answerGeom(box, []);
	return (
		<Overlay>
			<RoutineStrip rows={[K4.evaluate, K4.four, K4.evidence, K4.rather]} lit={[{row: 0, from: K4.evaluate, to: K4.four}, {row: 1, from: K4.four, to: K4.rather}, {row: 3, from: K4.rather, to: K4.evidence}, {row: 2, from: K4.evidence, to: K4.evidence + 70}]} />
			<QuestionCard spec={SPILL_CARD} at={-100} ann={SPILL_ANN({verb: K4.evaluate, marks: K4.four + 4, rather: K4.rather, ev: K4.evidence})} />
			<AnswerBox spec={box} at={-100} counter={{total: 4, label: true}} rows={[{text: 'CaCO_3 is low hazard, insoluble, pH 8, fizzes, slower.', at: K4.copy - 10, dur: 30, color: GREY_INK}]} />
			<MarksBadge from={[m.cx, m.cy]} to={[box.x + box.w - 150, box.y + 26]} value="4" at={K4.four + 18} out={1e9} r={22} />
			<GreyTag x={g.tx} y={g.ruleY(0) + 10} text="copied, not used" at={K4.copy + 20} size={24} />
			<Chip x={SX4} y={box.y} text="evaluate → judge against criteria, then decide" at={K4.evaluate + 16} size={28} color={AMBER_INK} fill="#fff8e6" maxW={380} />
			<BalanceBeam x={SX4 + 220} y={box.y + 200} w={300} labels={['CaCO_3', 'NaOH']} at={K4.rather} />
			{void K4.routine}{void K4.constraint}{void ZONE}
		</Overlay>
	);
};

// ---------- 5. Three parts ----------
const K5 = cues(sc('three-parts'), {assess: 'An assess', verdict: 'A verdict', criteria: 'Criteria', safety: 'safety', excess: 'what an excess does', stop: 'knowing when to stop', evidence: 'And evidence', aid: 'memory aid', ev2: ['evidence', 2]});
export const STRIP_BOX = {x: SX4, y: 110, w: 420};
export const SceneParts: React.FC = () => {
	const f = useCurrentFrame();
	const shrinkAt = K5.ev2 + 30;
	const CY = [530, 600, 670];
	const crit = ['safety', 'if too much is added', 'knowing when to stop'];
	const tgt = ['corrosive to skin and eyes', 'above 12', 'no visible change'].map(p => phraseAt(SPILL_CARD, p, 1, CARD_S));
	const it1 = cardGeom(SPILL_CARD).items[1];
	const tblR = ZONE.card.x + ((it1.colX ?? [0])[(it1.colX ?? [0]).length - 1] - ZONE.card.x) * CARD_S;
	const cho = 1 - 0.5 * prog(f, K5.aid, 16);
	return (
		<Overlay>
			<QuestionCard spec={SPILL_CARD} at={-100} s={(fr: number) => lerp(1, CARD_S, smooth(prog(fr, 0, 22)))} ann={SPILL_ANN()} />
			<AnswerBox spec={boxFull()} at={-100} out={0} counter={{total: 4}} />
			<VerdictStrip rows={[K5.verdict, K5.criteria, K5.evidence]} full={fr => 1 - prog(fr, shrinkAt, 24)} fullBox={STRIP_BOX} miniBox={STRIP_BOX}
				lit={[{row: 0, from: K5.verdict, to: K5.criteria}, {row: 1, from: K5.criteria, to: K5.evidence}, {row: 2, from: K5.evidence, to: K5.aid}]} />
			<g opacity={cho}>
				{crit.map((c, i) => <Chip key={c} x={SX4} y={CY[i]} text={c} at={[K5.safety, K5.excess, K5.stop][i]} size={28} color={TEAL} fill="#d5eeea" />)}
				{tgt.map((p, i) => <PenArrow key={i} a={[SX4 - 8, CY[i] + 22]} b={[tblR + 8, p.endY - 8]} at={K5.evidence + 14 + i * 10} out={K5.aid} color={INK} bow={-10} />)}
			</g>
			<GreyTag x={SX4} y={750} text="Chemistry: as in M6 C04, choosing a base" at={K5.safety + 10} out={K5.aid} size={22} maxW={380} />
			<g opacity={vis(f, K5.aid - 6)}>
				<rect x={ZONE.box.x} y={560} width={1060} height={210} rx={20} fill={CARD} stroke={TEAL} strokeWidth={3.5} />
				<T x={ZONE.box.x + 30} y={604} text="Memory aid" size={28} hand weight={700} color={INK_SOFT} />
				<HandLine x={ZONE.box.x + 30} y={670} text="No verdict without a reason," at={K5.aid + 10} size={52} color={TEAL} />
				<HandLine x={ZONE.box.x + 30} y={740} text="no reason without evidence." at={K5.ev2 - 40} size={52} color={TEAL} />
			</g>
			{void K5.assess}{void AMBER}
		</Overlay>
	);
};
