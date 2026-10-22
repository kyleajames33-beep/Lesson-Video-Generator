// S05 scenes 1 to 4: the hook (Chemistry command bars, mark values, six flagged reports, the Biology numbers), the
// worked question card (HCl + NaOH in a polystyrene cup), the reading routine and the four steps (step rail, memory aid).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, Flag, GREY, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, MarksBadge, Overlay, QuestionCard, RED, RoutineStrip, T, TEAL,
	answerGeom, lerp, marksAt, prog, smooth, vis,
} from './kit';
import {BASE_ANN, BOX, BOX_FULL, CARD_S, CupSlot, RAIL_MINI, SX, SW, WORK, WorkCardSmall, boxTop, sc, workSpec} from './common';
import {StepRail} from './pieces';

const ALL4 = [-100, -100, -100, -100];
/** The empty target line in the box's last ruled line (scene 3 on): "ΔH = ? kJ mol⁻¹" and a dashed sign slot. */
export const Target: React.FC<{g: ReturnType<typeof answerGeom>; at: number; sign?: number; out?: number; o?: number}> = ({g, at, sign, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const y = g.base(8);
	return (
		<g opacity={v}>
			<HandLine x={g.tx + 40} y={y} text="ΔH = ? kJ mol^{−1}" at={at} size={30} color={TEAL} dur={16} />
			{sign !== undefined ? <g opacity={prog(f, sign, 10)}><circle cx={g.tx + 14} cy={y - 10} r={19} fill="none" stroke={TEAL} strokeWidth={2.5} strokeDasharray="5 4" /><T x={g.tx + 14} y={y - 2} text="±?" size={20} weight={800} color={TEAL} anchor="middle" /></g> : null}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {calc: 'calculate', commonest: 'commonest', four: 'four marks', every: 'In every one', six: 'last six', flagged: 'flagged', hidden: 'hidden steps', units: 'units', rounding: 'rounding too early', recent: 'Recent Biology', word: "didn't use the word", numbers: 'numbers', prob: 'probability', people: 'number of people', setout: 'set out', marker: 'marker can follow'});
const BARS: [string, number][] = [['explain', 28], ['calculate', 24], ['justify', 12]];
const MARKV: [number, number][] = [[2, 2], [3, 6], [4, 11], [5, 3], [6, 1], [7, 1]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const aOut = K1.six - 8, bOut = K1.recent - 6, cOut = K1.setout - 6;
	return (
		<>
			<Heading text="Calculation answers that get full marks" at={K1.setout + 4} size={60} />
			<Overlay>
				{/* A: Chemistry command bars and mark values */}
				<g opacity={vis(f, 4, aOut, 12)}>
					<T x={120} y={230} text="Chemistry, Section II, 2021 to 2025: question parts per command" size={30} hand weight={700} color={INK_SOFT} />
					{BARS.map(([v, n], i) => {
						const y = 280 + i * 100, at = 14 + i * 12;
						const lit = v === 'calculate' ? prog(f, K1.calc, 12) : 0;
						const w = n * 22 * smooth(prog(f, at, 22));
						return (
							<g key={v} opacity={prog(f, at, 10)}>
								<rect x={120} y={y} width={w} height={70} rx={10} fill={lit > 0.01 ? AMBER : '#ecd9b5'} />
								<T x={140} y={y + 47} text={`${v} ${n}`} size={32} weight={700} color={lit > 0.5 ? '#3d2a05' : INK} />
							</g>
						);
					})}
					<GreyTag x={120} y={600} text="question parts with their own marks, NESA Chemistry papers, Section II, 2021 to 2025 (HSCScience count)" at={40} size={21} maxW={760} />
					<g opacity={prog(f, K1.commonest, 12)}>
						<T x={1060} y={230} text="calculate: marks per question part" size={30} hand weight={700} color={INK_SOFT} />
						<line x1={1060} x2={1760} y1={640} y2={640} stroke={INK} strokeWidth={3} />
						{MARKV.map(([m, n], i) => {
							const x = 1080 + i * 112, h = n * 30 * smooth(prog(f, K1.commonest + 4 + i * 4, 18));
							const lit = m === 4 ? prog(f, K1.four, 10) : 0;
							return (
								<g key={m}>
									<rect x={x} y={640 - h} width={80} height={h} rx={6} fill={lit > 0.01 ? AMBER : '#ecd9b5'} />
									<T x={x + 40} y={634 - h} text={String(n)} size={24} weight={700} color={INK_SOFT} anchor="middle" o={prog(f, K1.commonest + 14 + i * 4, 10)} />
									<T x={x + 40} y={676} text={`${m}`} size={26} weight={700} color={lit > 0.5 ? AMBER_INK : INK} anchor="middle" />
								</g>
							);
						})}
						<T x={1410} y={716} text="marks" size={24} weight={600} color={GREY_INK} anchor="middle" />
						<Chip x={1490} y={330} text="4 marks: 11 of 24" at={K1.four + 6} size={30} color={AMBER_INK} fill="#fff8e6" hand />
					</g>
				</g>
				{/* B: six Chemistry feedback reports */}
				<g opacity={vis(f, K1.six - 4, bOut, 12)}>
					{[2020, 2021, 2022, 2023, 2024, 2025].map((y, i) => {
						const x = 190 + i * 260;
						return (
							<g key={y} opacity={prog(f, K1.six + i * 4, 12)}>
								<rect x={x} y={280} width={230} height={120} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
								<T x={x + 20} y={328} text="Chemistry" size={28} weight={700} color={INK} />
								<T x={x + 20} y={370} text={String(y)} size={28} weight={500} color={INK_SOFT} />
								<Flag x={x + 190} y={316} at={K1.flagged + i * 6} />
							</g>
						);
					})}
					<GreyTag x={960} y={430} text="NESA marking feedback, Chemistry 2020 to 2025: 6 of 6 reports" at={K1.flagged + 30} size={24} anchor="middle" />
					{[['hidden steps', K1.hidden], ['lost units', K1.units], ['rounded too early', K1.rounding]].map(([t, at], i) => (
						<Chip key={t as string} x={330 + i * 440} y={560} text={t as string} at={at as number} size={40} color={RED} fill="#fbe6e1" />
					))}
				</g>
				{/* C: Biology still asks for numbers */}
				<g opacity={vis(f, K1.recent, cOut, 12)}>
					<Chip x={200} y={300} text="Biology" at={K1.recent} size={40} color="#1f6fb2" fill="#e5f0fa" hand={false} />
					<GreyTag x={200} y={400} text="the word calculate: Chemistry 24, Biology 0" at={K1.word} size={26} />
					<Chip x={200} y={520} text="probability (Biology 2024)" at={K1.prob} size={38} color={INK} />
					<Chip x={200} y={630} text="number of people affected, from a graph (Biology 2024)" at={K1.people} size={38} color={INK} />
					<g opacity={prog(f, K1.numbers, 10)}><T x={1300} y={480} text="still numbers" size={56} hand weight={700} color={AMBER_INK} /></g>
				</g>
				{/* D: a working column a marker can follow */}
				<g opacity={vis(f, K1.setout)}>
					<rect x={560} y={330} width={800} height={500} rx={14} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					{[0, 1, 2, 3].map(i => <DrawPath key={i} d={`M600,${420 + i * 80} L1320,${420 + i * 80}`} at={K1.setout + 6 + i * 8} dur={14} color="#cfdff0" width={3} />)}
					<DrawPath d="M840,700 L1320,700 L1320,780 L840,780 Z" at={K1.marker} dur={20} color={INK} width={4} />
					{['E', 'S', 'S', 'S'].map((l, i) => <T key={i} x={578} y={410 + i * 80} text={l} size={24} weight={800} color={AMBER_INK} anchor="middle" o={prog(f, K1.marker + 10 + i * 6, 10)} />)}
				</g>
				{void GREY}
			</Overlay>
		</>
	);
};

// ---------- 2. The question card ----------
const K2 = cues(sc('question-card'), {hsc: 'HSC-style', sixty: 'Sixty', cup: 'polystyrene', temp: 'temperature', tf: 'twenty five', asks: 'The question asks', calc: 'calculate', four: 'Four marks', bio: 'If you take Biology', watch: 'Watch how'});
export const SceneCard: React.FC = () => {
	const spec = workSpec([K2.sixty, K2.asks - 20, K2.calc], K2.four);
	const box = BOX_FULL();
	return (
		<Overlay>
			<QuestionCard spec={spec} at={K2.hsc}>
				<CupSlot spec={spec} at={K2.cup} read={{at: K2.temp, rise: K2.tf}} />
			</QuestionCard>
			<AnswerBox spec={box} at={K2.calc + 24} counter={{total: 4, label: true}} />
			<GreyTag x={SX} y={box.y + 10} text="Biology: you don't need the chemistry here" at={K2.bio} size={23} maxW={SW} />
			<HandLine x={SX} y={box.y + 150} text="watch the layout" at={K2.watch} size={40} color={AMBER_INK} />
		</Overlay>
	);
};

// ---------- 3. Read it ----------
const K3 = cues(sc('read-it'), {routine: 'Run the routine', calc: 'calculate:', work: 'work out', four: 'Four marks', steps: 'steps to show', molar: 'molar enthalpy,', kj: 'kilojoules per mole', sign: 'sign', givens: 'Now the givens', copy: "Don't copy", use: 'use it'});
export const SceneRead: React.FC = () => {
	const f = useCurrentFrame();
	const box = BOX_FULL();
	const g = answerGeom(box, []);
	const m = marksAt(WORK);
	const shrink = K3.use + 8;
	const sc3 = (fr: number) => lerp(1, CARD_S, smooth(prog(fr, shrink, 24)));
	const dy = boxTop() - box.y;
	return (
		<Overlay>
			<RoutineStrip rows={[K3.calc, K3.four, K3.givens, K3.kj]} lit={[{row: 0, from: K3.calc, to: K3.four}, {row: 1, from: K3.four, to: K3.molar}, {row: 3, from: K3.kj, to: K3.givens}, {row: 2, from: K3.givens, to: K3.use + 40}]} />
			<QuestionCard spec={WORK} at={-100} s={sc3} ann={[{kind: 'verb', phrase: 'Calculate', at: K3.calc}, {kind: 'marks', at: K3.four + 4}, {kind: 'constraint', phrase: 'molar enthalpy of neutralisation', at: K3.kj}]}>
				<CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100}} />
			</QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 4, label: true}} move={{at: shrink, dur: 24, x: box.x, y: box.y + dy, s: 1}}
				rows={[{text: '60.0 mL, 0.800, 40.0 mL, 1.00, 20.6, 25.8 ...', at: K3.copy, dur: 40, color: GREY_INK}]} dimRows={[{rows: [0], at: K3.use - 10, to: 0}]}>
				<GreyTag x={g.tx + 560} y={g.ruleY(0) - 40} text="copied, not used" at={K3.copy + 40} out={K3.use - 10} size={22} />
				<Target g={g} at={K3.kj + 6} sign={K3.sign} />
			</AnswerBox>
			<MarksBadge from={[m.cx, m.cy]} to={[box.x + box.w - 150, box.y + 26]} value="4" at={K3.four + 14} out={shrink} r={22} />
			<g opacity={1 - prog(f, shrink, 12)}>
				<Chip x={SX} y={box.y} text="calculate → work out an answer from given information" at={K3.work} out={K3.kj} size={26} color={AMBER_INK} fill="#fff8e6" maxW={SW} />
				<GreyTag x={SX} y={box.y + 140} text="NESA glossary, paraphrased" at={K3.work + 12} out={K3.kj} size={21} />
				<HandLine x={SX} y={box.y + 240} text="4 marks: show the steps" at={K3.steps} out={K3.kj} size={34} color={AMBER_INK} />
				<GreyTag x={SX} y={box.y + 20} text="kJ mol^{−1} = kJ/mol (both fine)" at={K3.kj + 30} size={22} maxW={SW} />
			</g>
			{void K3.routine}{void K3.molar}
		</Overlay>
	);
};

// ---------- 4. Four steps ----------
const K4 = cues(sc('four-steps'), {every: 'Every calculation', eq: 'equation.', sub: 'Substitute', solve: 'Solve,', sense: 'sense check:', aid: 'memory aid', one: 'one E', eq2: 'Equation,', sub2: 'substitute,', solve2: 'solve,', sense2: ['sense check', 2]});
export const STEP_ROWS4 = (K: typeof K4) => [K.eq, K.sub, K.solve, K.sense];
export const SceneFour: React.FC = () => {
	const f = useCurrentFrame();
	const box = BOX();
	const g = answerGeom(box, []);
	const shrink = K4.sense2 + 24;
	const full = (fr: number) => prog(fr, K4.every, 14) * (1 - prog(fr, shrink, 26));
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.55} />
			<WorkCardSmall><CupSlot spec={WORK} at={-100} read={{at: -100, rise: -100}} /></WorkCardSmall>
			<AnswerBox spec={box} at={-100} counter={{total: 4, label: true}} o={1 - 0.85 * full(f)}>
				<Target g={g} at={-100} sign={-100} />
			</AnswerBox>
			<StepRail rows={STEP_ROWS4(K4)} miniBox={RAIL_MINI} fullBox={{x: box.x, y: box.y - 10, w: box.w}} full={full} initials={K4.one}
				lit={[{row: 0, from: K4.eq, to: K4.sub}, {row: 1, from: K4.sub, to: K4.solve}, {row: 2, from: K4.solve, to: K4.sense}, {row: 3, from: K4.sense, to: K4.aid},
					{row: 0, from: K4.eq2, to: K4.sub2}, {row: 1, from: K4.sub2, to: K4.solve2}, {row: 2, from: K4.solve2, to: K4.sense2}, {row: 3, from: K4.sense2, to: shrink}]} />
			<g opacity={vis(f, K4.one, shrink, 12)}>
				<HandLine x={box.x + 30} y={box.y + 580} text="One E and three S's" at={K4.one + 6} size={56} color={TEAL} />
			</g>
			{void BASE_ANN}{void INK}
		</Overlay>
	);
};
