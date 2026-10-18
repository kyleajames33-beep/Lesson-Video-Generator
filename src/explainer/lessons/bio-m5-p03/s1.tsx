// P03 (Biology practical) scenes 1 to 5: the hook (one class's number against an unknown population), the aim and
// choosing a characteristic, agreement and privacy, defining the categories (line diagrams, a disagreement, practice
// and sharpening), and the method (mirror, slips folding into the box, two counters agreeing).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, CLASS1, CLASS1_CLASSIFIED, CZ, Chip, Cross, DESK, Desk, DrawPath, EDGE, FREE, Fade, Field, GreyTag, Heading, INK, INK_SOFT, LobeDiagram,
	MistakeChip, Overlay, PLP, Panel, PaperSlip, PlateB, QMark, QUESTION, Question, Rail, Ring, S, Sx, TEAL, Tally, Tick, lerp, prog,
} from './shared';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	nine: 'nine of the twenty-eight students', does: 'Does that tell you', everyone: 'everyone your age', notyet: 'Not yet', collected: 'how the data were collected',
	big: 'how big the sample was', judged: 'how carefully each earlobe was judged', practical: 'In this practical', doesnt: "does and doesn't show",
});
export const SceneHookP03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text={QUESTION} at={K1.doesnt} size={54} />
			<Overlay>
				<Desk o={prog(f, 0, 14)} />
				<PlateB p={PLP.clipboard} cx={280} cy={760} w={260} o={prog(f, 0, 14)} />
				<Fade at={K1.nine}>
					<Panel x={160} y={720} w={240} h={110} r={10} />
					<Sx x={180} y={764} text="attached:" size={30} color={INK} weight={700} />
					<Sx x={180} y={810} text={`${CLASS1.attached} of ${CLASS1_CLASSIFIED}`} size={40} color={AMBER_INK} weight={800} />
				</Fade>
				<Sx x={470} y={760} text="one class" size={34} color={INK} hand at={K1.nine + 10} />
				<GreyTag x={470} y={780} text="example data" at={K1.nine + 20} size={22} />
				{/* everyone your age */}
				<Field x={CZ.x + 40} y={270} cols={30} rows={14} p={prog(f, K1.everyone, 40)} />
				<Sx x={CZ.x + 40} y={660} text="everyone your age (a population)" size={30} color={INK_SOFT} weight={600} at={K1.everyone + 20} />
				<QMark x={CZ.x + 40 + 15 * 26} y={500} size={140} o={prog(f, K1.everyone + 20, 12)} />
				{[{t: 'how collected?', at: K1.collected}, {t: 'how big?', at: K1.big}, {t: 'how judged?', at: K1.judged}].map((c, i) => (
					<Chip key={i} x={CZ.x + 40 + i * 300} y={720} text={c.t} at={c.at} size={36} color={AMBER_INK} stroke={AMBER} />
				))}
				<Sx x={CZ.x + 40} y={850} text="not yet: it depends on the method" size={36} color={INK} hand at={K1.notyet} />
			</Overlay>
		</>
	);
};

// ---------- 2. Aim and choosing a characteristic ----------
const K2 = cues(S('aim-characteristic'), {
	aim: 'The aim', collect: 'collect data on how common', present: 'present it clearly', identify: 'identify trends, patterns', choose: 'Choose a characteristic', easy: 'easy to see',
	quick: 'quick to judge', sensitive: 'not sensitive', like: 'like earlobe shape or tongue rolling', neither: 'Neither is a simple', onegene: 'one-gene trait', allele: 'not working out allele frequencies',
});
const CHECKS = ['visible', 'quick to judge', 'not sensitive', "can't identify anyone"];
export const SceneAimP03: React.FC = () => {
	const f = useCurrentFrame();
	const ca = [K2.easy, K2.quick, K2.sensitive, K2.sensitive + 20];
	return (
		<>
			<Question />
			<Overlay>
				<Desk />
				<Fade at={K2.aim}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={300} stroke={AMBER} />
					<Sx x={CZ.x + 30} y={CZ.y + 60} text="Aim" size={44} color={INK} hand />
				</Fade>
				<Sx x={CZ.x + 30} y={CZ.y + 120} text="collect data on how common a characteristic is" size={32} color={INK} weight={600} at={K2.collect} />
				<Sx x={CZ.x + 30} y={CZ.y + 164} text="in a population; present it clearly;" size={32} color={INK} weight={600} at={K2.present} />
				<Sx x={CZ.x + 30} y={CZ.y + 208} text="identify trends, patterns and limitations" size={32} color={INK} weight={600} at={K2.identify} />
				{/* the checklist */}
				<Sx x={110} y={300} text="choose a characteristic that is:" size={32} color={INK} hand at={K2.choose} />
				{CHECKS.map((t, i) => (
					<g key={t}>
						<rect x={120} y={330 + i * 70} width={36} height={36} rx={6} fill={CARD} stroke={INK} strokeWidth={2.5} opacity={prog(f, ca[i], 10)} />
						<Tick x={138} y={348 + i * 70} at={ca[i] + 6} s={30} color={TEAL} />
						<Sx x={176} y={360 + i * 70} text={t} size={36} color={INK} weight={600} at={ca[i]} />
					</g>
				))}
				{/* candidates on the desk */}
				<Chip x={130} y={730} text="earlobe shape" at={K2.like} size={36} color={INK} stroke={TEAL} />
				<Chip x={420} y={730} text="tongue rolling" at={K2.like + 10} size={36} color={INK} stroke={TEAL} />
				<MistakeChip x={130} y={830} text="health conditions" at={K2.sensitive} cross={K2.sensitive + 16} size={30} />
				<Sx x={130} y={940} text="sensitive: not for a class survey" size={26} color={AMBER_INK} hand at={K2.sensitive + 20} />
				<Fade at={K2.onegene}>
					<Panel x={CZ.x} y={600} w={CZ.w} h={150} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 30} y={652} text="neither is a one-gene trait: many genes involved" size={32} color={INK} weight={700} at={K2.onegene} />
				<Sx x={CZ.x + 30} y={704} text="count the characteristic, not alleles" size={36} color={AMBER_INK} hand at={K2.allele - 10} />
				<GreyTag x={CZ.x} y={770} text="allele frequencies: see the roan cattle (B11)" at={K2.allele} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 3. Agreement and privacy ----------
const K3 = cues(S('agreement-privacy'), {needs: 'needs their agreement', teacher: 'Get your teacher to approve', tell: 'tell everyone', sayno: 'say no without giving', nonames: 'Record no names', tick: 'one tick on an unnamed slip', traced: 'can be traced back', nobody: 'nobody feels pressured'});
export const SceneAgreeP03: React.FC = () => {
	const f = useCurrentFrame();
	const big = prog(f, K3.nonames, 20);
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={0} at={K3.needs} />
				<Desk />
				<Fade at={K3.needs}>
					<Panel x={CZ.x} y={CZ.y + 20} w={CZ.w} h={360} stroke={AMBER} />
					<Sx x={CZ.x + 30} y={CZ.y + 80} text="Plan and agree" size={44} color={INK} hand />
				</Fade>
				{[{t: 'teacher approval', at: K3.teacher}, {t: 'say what is collected, and why', at: K3.tell}, {t: 'anyone can say no', at: K3.sayno}].map((c, i) => (
					<g key={i}>
						<Tick x={CZ.x + 50} y={CZ.y + 150 + i * 70} at={c.at + 6} s={30} color={TEAL} />
						<Sx x={CZ.x + 90} y={CZ.y + 162 + i * 70} text={c.t} size={36} color={INK} weight={600} at={c.at} />
					</g>
				))}
				{/* one slip stays blank */}
				<PlateB p={PLP.slip} cx={250} cy={790} w={240} o={prog(f, K3.sayno, 12)} rot={-4} />
				<Sx x={150} y={900} text="no reason needed" size={30} color={AMBER_INK} hand at={K3.sayno + 14} />
				{/* the unnamed slip */}
				<g opacity={prog(f, K3.nonames, 12)} transform={`translate(${lerp(560, 450, big)},${lerp(800, 470, big)}) scale(${lerp(0.5, 1, big)})`}>
					<PaperSlip x={0} y={0} w={500} nameLine={1} tick={1} tickP={prog(f, K3.tick + 10, 12)} />
				</g>
				<Cross x={450 - 250 + 190} y={470 - 125 + 22} s={22} at={K3.nonames + 24} />
				<Fade at={K3.traced}>
					<Panel x={CZ.x} y={CZ.y + 420} w={CZ.w} h={100} stroke={TEAL} />
					<Sx x={CZ.x + 30} y={CZ.y + 484} text="anonymous: no result can be traced to a person" size={34} color={INK} weight={700} />
				</Fade>
				<Sx x={CZ.x + 30} y={CZ.y + 580} text="nobody feels pressured to take part" size={34} color={AMBER_INK} hand at={K3.nobody} />
			</Overlay>
		</>
	);
};

// ---------- 4. Define the categories before counting ----------
const K4 = cues(S('define-categories'), {
	write: 'write the definitions before', free: 'A free earlobe hangs', attached: 'An attached earlobe joins', between: 'Some are in between', unsure: 'unsure', clear: 'Clear definitions matter',
	judge: 'judge the same earlobe differently', mean: 'the numbers mean different things', test: 'test the definitions', practice: 'a few practice diagrams', sharpen: 'sharpen the wording',
});
const PAN = [{k: 'free' as const, t: 'free', d: 'hangs below the join'}, {k: 'attached' as const, t: 'attached', d: 'joins directly'}, {k: 'unsure' as const, t: 'unsure', d: 'in between'}];
export const SceneDefineP03: React.FC = () => {
	const f = useCurrentFrame();
	const pa = [K4.free, K4.attached, K4.unsure];
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={1} at={K4.write} />
				<Desk />
				<Fade at={K4.write}>
					<Panel x={CZ.x} y={CZ.y} w={CZ.w} h={450} />
					<Sx x={CZ.x + 30} y={CZ.y + 50} text="definition card (decide before counting)" size={30} color={INK_SOFT} hand />
				</Fade>
				{PAN.map((p, i) => {
					const x0 = CZ.x + 110 + i * 320;
					return (
						<g key={p.k}>
							<LobeDiagram x={x0} y={CZ.y + 120} kind={p.k} at={pa[i]} />
							<Sx x={x0 + 40} y={CZ.y + 370} text={p.t} size={40} color={p.k === 'free' ? FREE : p.k === 'attached' ? AMBER_INK : INK_SOFT} hand anchor="middle" at={pa[i] + 10} />
							<Sx x={x0 + 40} y={CZ.y + 410} text={p.d} size={26} color={INK} weight={600} anchor="middle" at={pa[i] + 20} />
						</g>
					);
				})}
				{f >= K4.sharpen ? <DrawPath d={`M${CZ.x + 40},${CZ.y + 420} L${CZ.x + 290},${CZ.y + 420}`} at={K4.sharpen} dur={14} color={AMBER} width={5} /> : null}
				<Sx x={CZ.x + 30} y={CZ.y + 500} text="sharpen the wording" size={34} color={AMBER_INK} hand at={K4.sharpen + 10} />
				{/* the same lobe, judged differently */}
				<g opacity={prog(f, K4.judge, 12) * (1 - prog(f, K4.test - 6, 12))}>
					<Panel x={110} y={270} w={660} h={390} />
					<LobeDiagram x={190} y={330} kind="unsure" at={K4.judge} labels={false} color={INK_SOFT} />
					{[0, 1].map(k => (
						<g key={k}>
							<Sx x={380} y={360 + k * 130} text={k ? 'person 2' : 'person 1'} size={28} color={INK_SOFT} hand />
							{['attached', 'free'].map((b, j) => (
								<g key={b}>
									<rect x={380 + j * 180} y={378 + k * 130} width={30} height={30} rx={5} fill="#fff" stroke={INK} strokeWidth={2} />
									<Sx x={418 + j * 180} y={402 + k * 130} text={b} size={24} color={INK} weight={600} />
									{(k === 0 && j === 0) || (k === 1 && j === 1) ? <Tick x={395 + j * 180} y={393 + k * 130} at={K4.judge + 14 + k * 12} s={26} color={INK} /> : null}
								</g>
							))}
						</g>
					))}
					<QMark x={700} y={480} size={70} o={prog(f, K4.mean, 10)} />
					<Sx x={140} y={630} text="same earlobe, different boxes: numbers mean different things" size={24} color={AMBER_INK} hand at={K4.mean} />
				</g>
				{/* practice diagrams */}
				{[0, 1, 2].map(i => (
					<g key={i} opacity={prog(f, K4.practice + i * 8, 12)}>
						<LobeDiagram x={170 + i * 220} y={735} kind={i === 1 ? 'unsure' : i === 0 ? 'free' : 'attached'} at={K4.practice + i * 8} s={0.55} labels={false} color={INK_SOFT} shade={0} />
						{[0, 1].map(k => {
							const agree = i !== 1;
							return <Sx key={k} x={180 + i * 220} y={880 + k * 40} text={`${k ? 'B' : 'A'}: ${agree ? (i === 0 ? 'free' : 'attached') : k ? 'free' : 'attached'}`} size={24} color={!agree ? AMBER_INK : INK} weight={700} />;
						})}
					</g>
				))}
				<Ring cx={180 + 220 + 50} cy={890} rx={80} ry={50} at={K4.practice + 30} />
				<Sx x={110} y={680} text="test the definitions on practice diagrams" size={30} color={INK} hand at={K4.test} />
			</Overlay>
		</>
	);
};

// ---------- 5. The method ----------
const K5 = cues(S('method'), {
	method: 'Now the method', give: 'Give each student a slip', show: 'show the definition card', checks: 'checks their earlobe in a mirror', partner: 'asks a partner to look',
	ticks: 'ticks one box', folds: 'folds the slip', drops: 'drops it in a box', two: 'two people count', together: 'the slips together onto a tally sheet', agree: 'their totals agree', catch: 'Two counters catch mistakes',
});
const BOX: [number, number] = [300, 850];
export const SceneMethodP03: React.FC = () => {
	const f = useCurrentFrame();
	const fold = prog(f, K5.folds, 12);
	const drop = prog(f, K5.drops, 18);
	const tallyP = prog(f, K5.together, 60);
	return (
		<>
			<Question />
			<Overlay>
				<Rail lit={2} at={K5.method} />
				<Desk />
				<PlateB p={PLP.slipBox} cx={BOX[0]} cy={BOX[1]} w={300} o={prog(f, K5.give, 12)} />
				<PlateB p={PLP.mirror} cx={640} cy={830} w={220} o={prog(f, K5.checks, 12)} />
				<GreyTag x={470} y={950} text="earlobes are visible anyway; the slip stays unnamed" at={K5.partner} size={18} />
				<Fade at={K5.show}>
					<rect x={560} y={270} width={210} height={120} rx={10} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<Sx x={575} y={300} text="definition card" size={20} color={INK_SOFT} weight={700} />
				</Fade>
				{(['free', 'attached', 'unsure'] as const).map((k, i) => <LobeDiagram key={k} x={590 + i * 62} y={318} kind={k} at={K5.show} s={0.32} labels={false} />)}
				{/* the slip: tick, fold, drop */}
				<g transform={`translate(${lerp(300, BOX[0], drop)},${lerp(470, BOX[1] - 80, drop)}) scale(${lerp(1, 0.4, drop)}) translate(-300,-470)`} opacity={1 - prog(f, K5.drops + 14, 6)}>
					<PaperSlip x={300} y={470} w={360} tick={0} tickP={prog(f, K5.ticks, 10)} fold={fold} o={prog(f, K5.give, 12)} />
				</g>
				{[0, 1, 2, 3].map(i => {
					const t = prog(f, K5.drops + 20 + i * 10, 16);
					return t > 0.01 && t < 0.99 ? <PaperSlip key={i} x={BOX[0] - 60 + i * 40} y={lerp(560, BOX[1] - 70, t)} w={110} fold={1} labels={false} o={1} rot={i * 9 - 12} /> : null;
				})}
				{/* two counters */}
				<PlateB p={PLP.clipboard} cx={CZ.x + 120} cy={470} w={220} o={prog(f, K5.two, 12)} />
				<Fade at={K5.two}>
					<Panel x={CZ.x + 560} y={300} w={430} h={300} stroke={EDGE} />
					<Sx x={CZ.x + 260} y={460} text="tally sheet" size={30} color={INK_SOFT} hand />
					<Sx x={CZ.x + 590} y={350} text="counter 1" size={28} color="#3d5a7a" hand />
					<Sx x={CZ.x + 790} y={350} text="counter 2" size={28} color="#8a4a2a" hand />
				</Fade>
				<g opacity={prog(f, K5.two, 12)}>
					{[0, 1, 2].map(r => <Tally key={r} x={CZ.x + 590} y={380 + r * 40} n={10} p={tallyP * 3 - r} h={26} color="#3d5a7a" gap={8} />)}
					{[0, 1, 2].map(r => <Tally key={'b' + r} x={CZ.x + 790} y={380 + r * 40} n={10} p={(tallyP - 0.05) * 3 - r} h={26} color="#8a4a2a" gap={8} />)}
				</g>
				<Sx x={CZ.x + 640} y={560} text="30" size={44} color="#3d5a7a" weight={800} anchor="middle" at={K5.agree} />
				<Sx x={CZ.x + 840} y={560} text="30" size={44} color="#8a4a2a" weight={800} anchor="middle" at={K5.agree + 4} />
				<Tick x={CZ.x + 740} y={548} at={K5.agree + 10} s={36} color={TEAL} />
				<PlateB p={PLP.pencil} cx={CZ.x + 330} cy={640} w={210} o={prog(f, K5.two + 10, 12)} />
				<Fade at={K5.catch}>
					<Panel x={CZ.x} y={760} w={CZ.w} h={100} stroke={TEAL} />
					<Sx x={CZ.x + 30} y={824} text="two counters catch mistakes one person would miss" size={34} color={INK} weight={700} />
				</Fade>
			</Overlay>
		</>
	);
};
void AMBER; void DESK; void INK_SOFT;
