// M7 G01 (Biology practice) scenes 1 to 2d: the hook (the "cases ÷ ?" fraction, the cause and control chain, three
// question thumbnails without values) and question 1, Camp Wollemi with corrected data: the whole card through the
// 10 s countdown; then the lunch table with a fraction bar per group and answer (a) line by line; the epidemic curve
// with meal brackets, 6 to 24 h bands, a ghost person-to-person curve, the salad-roll zero and answer (b) line by line;
// the crossed 16 ÷ 60 chip over a dashed 60-dot outline.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {
	AMBER, AMBER_INK, AnsLines, CTag, CardBox, CholGraph, DrawPath, EpiCurve, FractionBar, GREYT, GREY_INK, GTag, INK, INK_SOFT, LunchTable, MistakeChip, PLATES, Pl, ProvTable, QStrip, Sx,
	TEAL, cgX, clamp01, pulse, prog, smooth, vis,
} from './parts';
import type {CG, QBlock, QMark} from './parts';

export const HEAD = 'Find the denominator, then the cause';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {denom: 'find the denominator', cause: 'to a cause', control: 'to a control', three: 'three HSC-style', pause: 'Pause and try'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pu = pulse(f, K1.denom + 10, 40);
	const thumbs = prog(f, K1.three, 14);
	return (
		<>
			<Heading text={HEAD} at={4} size={58} />
			<Overlay>
				<g opacity={prog(f, K1.denom - 10, 14)}>
					<Sx x={420} y={400} text="cases" size={64} color={INK} weight={800} anchor="middle" at={-100} />
					<line x1={300} x2={540} y1={430} y2={430} stroke={INK} strokeWidth={5} />
					<rect x={370} y={448} width={100} height={88} rx={14} fill={pu > 0.01 ? '#fff3d9' : '#fffdf8'} stroke={AMBER} strokeWidth={4 + 4 * pu} />
					<Sx x={420} y={514} text="?" size={64} color={AMBER_INK} weight={800} anchor="middle" at={-100} />
				</g>
				<CTag x={160} y={580} text="denominator: the number you divide by" at={K1.denom + 20} color={AMBER_INK} size={32} />
				{[{t: 'cause', at: K1.cause, x: 760}, {t: 'control', at: K1.control, x: 1160}].map((c, i) => (
					<g key={c.t} opacity={prog(f, c.at, 12)}>
						<path d={`M${c.x - 150},440 l110,0 m-14,-12 l14,12 l-14,12`} fill="none" stroke={INK_SOFT} strokeWidth={4} />
						<rect x={c.x - 30} y={405} width={260} height={74} rx={37} fill="#fffdf8" stroke={i === 0 ? TEAL : AMBER} strokeWidth={3.5} />
						<Sx x={c.x + 100} y={455} text={c.t} size={40} color={i === 0 ? TEAL : AMBER_INK} hand weight={700} anchor="middle" at={-100} />
					</g>
				))}
				{[0, 1, 2].map(i => {
					const x = 300 + i * 460;
					return (
						<g key={i} opacity={thumbs} transform={`translate(0,${(1 - thumbs) * 30})`}>
							<CardBox x={x - 180} y={680} w={360} h={220} at={K1.three + i * 6} />
							<circle cx={x - 150} cy={712} r={18} fill="#fff3d9" stroke={AMBER} strokeWidth={3} />
							<Sx x={x - 150} y={720} text={`${i + 1}`} size={22} color={AMBER_INK} weight={800} anchor="middle" at={-100} />
							{i === 0 ? <g>{[0, 1, 2].map(r => <rect key={r} x={x - 120} y={740 + r * 40} width={240} height={34} rx={4} fill="none" stroke={GREYT} strokeWidth={2} />)}<line x1={x} x2={x} y1={740} y2={854} stroke={GREYT} strokeWidth={2} /></g> : null}
							{i === 1 ? <g>{[0, 1].map(k => <g key={k}><line x1={x - 110 + k * 140} x2={x - 30 + k * 140} y1={790} y2={790} stroke={INK_SOFT} strokeWidth={3} /><rect x={x - 100 + k * 140} y={800} width={60} height={40} rx={6} fill="none" stroke={AMBER} strokeWidth={3} /></g>)}</g> : null}
							{i === 2 ? <g><path d={`M${x - 120},860 L${x - 120},740 M${x - 120},860 L${x + 130},860`} fill="none" stroke={INK_SOFT} strokeWidth={3} /><polyline points={`${x - 110},845 ${x - 70},820 ${x - 30},780 ${x + 10},760 ${x + 50},810 ${x + 90},845 ${x + 120},852`} fill="none" stroke={INK_SOFT} strokeWidth={3} /></g> : null}
						</g>
					);
				})}
				<GTag x={960} y={930} text="HSC-style questions, written for HSCScience" at={K1.three + 18} size={24} anchor="middle" />
				<Sx x={960} y={1030} text="Before you compare, find the denominator." size={38} color={INK_SOFT} hand weight={700} anchor="middle" at={K1.pause} />
			</Overlay>
		</>
	);
};

// ---------- the Q1 card ----------
type T1 = {s1: number; s2: number; s3: number; a: number; b: number};
export const Q1B = (t: T1): QBlock[] => [
	{text: 'Sixty students arrived at Camp Wollemi on Monday morning. All 60 ate chicken pasta at about 6 pm on Monday. Between 2 am and 6 am on Tuesday, 18 students developed diarrhoea and stomach cramps.', at: t.s1},
	{text: "At about 12.30 pm on Tuesday, the 42 students who were well ate lunch. Some ate chicken sandwiches made with chicken left over from Monday's pasta; the others ate salad rolls. Students who ate salad rolls shared cabins and activities with students who became ill.", at: t.s2, para: true},
	{text: 'Laboratory tests found large numbers of Clostridium perfringens in stool samples from ill students and in the leftover chicken. This bacterium usually causes diarrhoea and stomach cramps 6 to 24 hours after contaminated food is eaten.', at: t.s3, para: true},
];
export const Q1D = (t: T1): QBlock[] => [
	{text: '(a) Calculate the percentage of students in each lunch group who became ill. (2 marks)', at: t.a, weight: 700, para: true},
	{text: "(b) The camp director claims that the illness spread from person to person because 'it went through two groups'. Evaluate this claim using the data. (4 marks)", at: t.b, weight: 700, para: true},
];
const ALL1: T1 = {s1: -100, s2: -100, s3: -100, a: -100, b: -100};
const Q1ALL = [...Q1B(ALL1), ...Q1D(ALL1)];
qCheck(Q1ALL, ['in each lunch group', '6 to 24 hours after contaminated food is eaten', 'shared cabins and activities'].map(phrase => ({phrase, at: 0})));
const KQ = cues(S('q1-question'), {q: 'Question one', sixty: 'Sixty students arrive', tuesday: 'On Tuesday', night: 'That night', calc: 'Calculate the percentage', evalc: 'Then evaluate', pause: 'Pause here to answer'});
const CQ: CG = {x: 1000, y: 620, w: 760, h: 130};
export const SceneQ1Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q1-question');
	const t: T1 = {s1: KQ.sixty, s2: KQ.tuesday, s3: KQ.night + 20, a: KQ.calc, b: KQ.evalc};
	return (
		<>
			<Heading text="Question 1" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<CardBox x={100} y={170} w={1720} h={850} at={KQ.q + 4} />
				<Pl p={PLATES.pasta} cx={220} cy={232} w={150} o={prog(f, KQ.sixty, 14)} />
				<Pl p={PLATES.sandw} cx={390} cy={232} w={130} o={prog(f, KQ.tuesday, 14)} />
				<GTag x={480} y={214} text="based on the HSCScience Camp Wollemi activity, with corrected data" at={KQ.sixty + 10} size={18} />
				<QText q={qCheck(Q1B(t), [])} x={140} y={320} w={1640} size={25} card={false} />
				<LunchTable x={140} y={610} s={0.82} at={KQ.night} />
				<EpiCurve g={CQ} at={KQ.night + 10} size={16} />
				<QText q={qCheck(Q1D(t), [])} x={140} y={830} w={1000} size={25} card={false} />
				<AnsBox x={1180} y={818} w={400} h={86} at={KQ.calc + 30} />
				<AnsBox x={1180} y={914} w={400} h={96} at={KQ.evalc + 40} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Each group out of itself ----------
const KD = cues(S('q1-denominator'), {start: 'Start with the', each: 'each lunch group', sixteen: 'Sixteen of the', p57: "That's about", none: 'None of the', zero: "That's zero", fair: 'compare fairly'});
export const SceneQ1Denominator: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: 'in each lunch group', at: KD.each, color: AMBER}];
	const l1 = KD.p57 + 30, l2 = KD.zero + 24;
	return (
		<>
			<Heading text="Each group out of itself" at={4} size={48} />
			<Overlay>
				<Badge text="Outbreak table" at={4} />
				<QStrip blocks={Q1ALL} marks={marks} h={160} />
				<LunchTable x={130} y={380} s={1.1} ring={{'1,1': KD.sixteen + 10, '2,1': KD.none + 10}} />
				<FractionBar x={130} y={690} w={420} num={16} den={28} label="ate sandwiches" at={KD.sixteen + 10} fillAt={KD.p57} pulseAt={KD.fair + 6} />
				<Sx x={700} y={702} text="16 ÷ 28 × 100 ≈ 57%" size={34} color={vis(f, KD.p57, l1 + 6, 10) > 0.5 ? AMBER_INK : GREY_INK} weight={800} at={KD.p57} />
				<FractionBar x={130} y={850} w={420} num={0} den={14} label="ate salad rolls" at={KD.none + 10} fillAt={KD.zero} pulseAt={KD.fair + 10} />
				<Sx x={700} y={862} text="0 ÷ 14 × 100 = 0%" size={34} color={vis(f, KD.zero, l2 + 6, 10) > 0.5 ? AMBER_INK : GREY_INK} weight={800} at={KD.zero} />
				<CTag x={130} y={960} text="each group out of itself" at={KD.fair + 10} color={TEAL} size={32} />
				<AnsLines x={1140} y={380} w={680} h={300} label="(a)" at={6} lines={[{t: 'chicken sandwiches: 16 ÷ 28 × 100 ≈ 57%', at: l1}, {t: 'salad rolls: 0 ÷ 14 × 100 = 0%', at: l2}]} size={30} />
				{void KD.start}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 2c. Read the curve, then the comparison ----------
const KC = cues(S('q1-claim'), {claim: 'Now the claim', read: 'Read the epidemic', two: 'two sharp clusters', eight: 'about eight to', fits: 'That fits the', waves: 'rising waves for', cabins: 'shared cabins', isnt: "claim isn't supported", one: 'one food source', cool: 'cooling cooked meat'});
const CC: CG = {x: 190, y: 470, w: 860, h: 300};
export const SceneQ1Claim: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: '6 to 24 hours after contaminated food is eaten', at: KC.fits, color: AMBER},
		{phrase: 'shared cabins and activities', at: KC.cabins, color: AMBER},
	];
	const brO = prog(f, KC.eight, 12) * (1 - 0.6 * prog(f, KC.cabins, 12));
	const by = CC.y - 110;
	const brk = (h0: number, h1: number, label: string, dy: number) => (
		<g>
			<path d={`M${cgX(CC, h0)},${by + dy + 10} L${cgX(CC, h0)},${by + dy} L${cgX(CC, h1)},${by + dy} L${cgX(CC, h1)},${by + dy + 10}`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
			<Sx x={(cgX(CC, h0) + cgX(CC, h1)) / 2} y={by + dy - 8} text={label} size={22} color={AMBER_INK} weight={800} anchor="middle" at={-100} />
		</g>
	);
	const band = (m: number, dy: number) => <rect x={cgX(CC, m + 6)} y={by + dy + 14} width={cgX(CC, m + 24) - cgX(CC, m + 6)} height={14} rx={7} fill={AMBER} opacity={0.3 * prog(f, KC.fits + 10, 12)} />;
	const ghost = 'M' + Array.from({length: 61}, (_, i) => { const h = i; const v = (2 + h * 0.15) * Math.max(0, Math.sin((h / 60) * Math.PI * 4)); return `${cgX(CC, h)},${CC.y + CC.h - v * (CC.h / 20)}`; }).join(' L');
	const lines = [
		{t: 'Not supported.', at: KC.isnt + 10},
		{t: "Two sharp clusters, each 8 to 18 h after a meal containing the same chicken, within this bacterium's 6 to 24 h.", at: KC.fits + 40},
		{t: 'No cases between or after, unlike the rising waves of person-to-person spread.', at: KC.waves + 40},
		{t: '57% of sandwich eaters ill but 0% of salad-roll eaters, who shared cabins with ill students.', at: KC.cabins + 50},
		{t: 'One food source eaten at two meals.', at: KC.one + 20},
	];
	return (
		<>
			<Heading text="Read the curve, then compare" at={4} size={48} />
			<Overlay>
				<Badge text="Outbreak table" at={-100} />
				<QStrip blocks={Q1ALL} marks={marks} h={160} />
				<EpiCurve g={CC} at={0} size={20} outline={vis(f, KC.two, KC.cabins, 10)} shade={vis(f, KC.two + 10, KC.cabins, 10)} />
				<GTag x={cgX(CC, 15)} y={CC.y + 20} text="nothing between" at={KC.two + 16} out={KC.eight} size={20} />
				<g opacity={brO}>{brk(0, 8, '8 to 12 h', 0)}{brk(18.5, 32, 'about 14 to 18 h', 50)}{band(0, 0)}{band(18.5, 50)}</g>
				{f >= KC.waves ? <g opacity={1 - prog(f, KC.cabins - 10, 12)}><DrawPath d={ghost} at={KC.waves} dur={40} color={GREYT} width={4} dash="9 7" /><Sx x={cgX(CC, 37)} y={CC.y + 30} text="person-to-person: rising waves (p01)" size={20} color={GREY_INK} weight={700} at={KC.waves + 10} /></g> : null}
				<g opacity={vis(f, KC.cabins + 6, KC.cool, 12)}>
					<FractionBar x={170} y={880} w={200} num={0} den={14} label="ate salad rolls" at={-100} size={28} />
					<CTag x={520} y={856} text="same cabins, 0 ill" at={KC.cabins + 14} color={TEAL} size={28} />
				</g>
				<g opacity={prog(f, KC.one, 12)}>
					<Pl p={PLATES.pasta} cx={770} cy={900} w={140} />
					<Pl p={PLATES.sandw} cx={1000} cy={900} w={120} />
				</g>
				{f >= KC.one + 6 ? <DrawPath d="M850,890 Q890,860 930,890" at={KC.one + 6} dur={14} color={AMBER_INK} width={4} dash="8 6" /> : null}
				<Sx x={885} y={980} text="same leftover chicken" size={22} color={AMBER_INK} hand weight={700} anchor="middle" at={KC.one + 16} />
				<GTag x={130} y={860} text="control: cool cooked meat quickly; reheat thoroughly or discard leftovers" at={KC.cool + 6} size={18} />
				<GTag x={130} y={902} text="leftovers cooled slowly overnight: more bacteria" at={KC.cool + 16} size={18} />
				<AnsLines x={1140} y={330} w={680} h={690} label="(b)" at={6} lines={lines} size={27} />
				{void KC.claim}{void KC.read}{void clamp01}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 2d. The classic mistake ----------
const KM = cues(S('q1-mistake'), {classic: 'The classic mistake', sixteen: 'Sixteen out of', mixes: 'mixes in students', which: 'which food', always: 'Always divide'});
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const grey = vis(f, KM.mixes, KM.which + 30, 10);
	return (
		<>
			<Heading text="Wrong group, wrong answer" at={4} size={48} />
			<Overlay>
				<Badge text="Outbreak table" at={-100} />
				<QStrip blocks={Q1ALL} marks={[]} h={160} />
				<MistakeChip x={130} y={380} text="16 ÷ 60 ≈ 27%" at={2} cross={KM.classic + 30} size={40} />
				<g opacity={prog(f, KM.sixteen, 12)}>
					<rect x={130} y={500} width={780} height={360} rx={20} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="12 9" />
					<Sx x={150} y={540} text="all 60 students" size={26} color={GREY_INK} weight={700} at={-100} />
					{Array.from({length: 60}, (_, i) => {
						const grp = i < 18 ? 0 : i < 34 ? 1 : i < 46 ? 2 : 3;
						const cx = 180 + (i % 12) * 60, cy = 590 + Math.floor(i / 12) * 54;
						const base = ['#8a7a63', AMBER, '#f1d79a', '#cfe3d9'][grp];
						const g = grp === 0 || grp === 3 ? grey : 0;
						return <circle key={i} cx={cx} cy={cy} r={18} fill={g > 0.5 ? '#d6d2ca' : base} stroke="#fffdf8" strokeWidth={2} />;
					})}
				</g>
				<GTag x={130} y={890} text="dark: Monday cases; amber: ill sandwich eaters; pale: well sandwich eaters; green: salad rolls" at={KM.sixteen + 10} size={18} />
				<CTag x={500} y={380} text="wrong group" at={KM.mixes + 10} color={GREY_INK} size={32} />
				<FractionBar x={1040} y={560} w={420} num={16} den={28} label="ate sandwiches: 57%" at={KM.which - 10} fillAt={-100} pulseAt={KM.which} />
				<FractionBar x={1040} y={720} w={420} num={0} den={14} label="ate salad rolls: 0%" at={KM.which - 10} fillAt={-100} pulseAt={KM.which + 6} />
				<CTag x={1040} y={880} text="divide by the people who could have caught it" at={KM.always} color={TEAL} size={30} maxW={760} />
				{void INK}{void ProvTable}{void CholGraph}{void HEAD}
			</Overlay>
		</>
	);
};
