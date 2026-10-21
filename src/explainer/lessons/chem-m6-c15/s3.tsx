// M6 C15 scenes 11 to 17: the memory aid; two worded attempts (full question on screen through the countdown); brief
// feedback with the givens underlined as they are used and one crossed mistake each; the decision rule; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {ANTACID, COND} from './assets';
import {BA_L1, BA_L2, BA_X, BA_XS, VIN_XS, condBa, condVin} from './curves';
import {XS25, phEth} from '../chem-m6-c13/curves';
import {
	AChip, Axes, CrossMark, Curve, DimG, ETH_C, FIT1, FIT2, Fade, FitRuler, H3O, INK, INK_SOFT, Ion, KeyNotesBoard, MeetPair, MistakeX, MolesBar, NAVY, Note, OHg, Overlay, P, PauseHold, PicH, Pts,
	QText, RuleCard, Sx, TEAL, UNK, USED_INK, WLine, clamp01, gy, lerp, qCheck, smooth,
} from './parts';
import type {GG, QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';
import {VinLines} from './s2';
import {VIN_L1, VIN_X} from './curves';

// ---------- 11. Memory aid ----------
const S11 = 'memory-aid';
const K11 = cues(sc(S11), {so: "So here's", back: 'Back titration', total: 'total minus', works: 'It works', read: 'read where'});
const GT: GG = {x: 1480, y: 640, w: 300, h: 200, x0: 0, x1: 16, y0: 0, y1: 28};
export const SceneAid: React.FC = () => (
	<Overlay>
		<DimG at={K11.read} to={0.55}>
			<Note x={960} y={320} text="Back titration: total minus leftover." size={72} color={TEAL} anchor="middle" at={K11.back} />
			<MolesBar x={560} y={400} w={800} h={60} at={K11.back + 16} split={K11.total + 16} size={26} usedText="used" leftText="left" />
			<Note x={960} y={540} text="in moles; then the mole ratio" size={34} color={INK_SOFT} anchor="middle" at={K11.works} hand={false} />
		</DimG>
		<Note x={860} y={780} text="Conductivity: read where the lines cross." size={60} color={INK} anchor="middle" at={K11.read} />
		<Axes g={GT} at={K11.read + 6} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
		<Pts g={GT} fn={condVin} xs={VIN_XS} time={i => K11.read + 10 + i * 2} r={5} />
		<VinLines g={GT} at1={K11.read + 30} at2={K11.read + 34} />
		<CrossMark g={GT} x={VIN_X} p={VIN_L1.at(VIN_X)} at={K11.read + 60} />
		{void K11.so}
	</Overlay>
);

// ---------- 12/13. Question 1 ----------
const QX = 140, QW = 1640;
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', tablet: 'A zero point five', left: 'The leftover', calc: 'Calculate the', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A 0.500 g antacid tablet containing aluminium hydroxide was crushed and added to 40.00 mL of 0.4000 mol/L hydrochloric acid, an excess.', at: t[0]},
	{text: 'After the reaction was complete, the leftover acid required 21.60 mL of 0.2000 mol/L sodium hydroxide.', at: t[1]},
	{text: 'Al(OH)₃(s) + 3HCl(aq) → AlCl₃(aq) + 3H₂O(l).', at: t[2], para: true},
	{text: 'M(Al(OH)₃) = 78.00 g/mol.', at: t[2] + 10},
	{text: 'Calculate the percentage by mass of aluminium hydroxide in the tablet.', at: t[3], para: true},
] as QBlock[], marks);
const M1 = ['40.00 mL', '0.4000 mol/L', '21.60 mL', '0.2000 mol/L', '3HCl(aq)', '78.00 g/mol', '0.500 g'];
qCheck(Q1([0, 0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={380} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K12.turn} />
		<Question1 t={[K12.tablet, K12.left, K12.left + 150, K12.calc]} />
		<PicH p={ANTACID} x={1640} y={60} h={120} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={780} cx={1560} cy={760} />
	</Overlay>
);

const F1 = 'feedback-1';
const K13 = cues(sc(F1), {used: 'The tablet used', added: 'acid added', left: 'acid left', r1168: 'zero point zero one one six eight', three: 'uses three', mult: 'multiply by', r304: 'zero point three zero four', r607: 'sixty point seven', forget: 'Forget the', impossible: 'impossible'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<Shrink k={0.55}>
			<Question1 t={[-100, -100, -100, -100]} marks={[
				{phrase: '40.00 mL', at: K13.added, color: TEAL}, {phrase: '0.4000 mol/L', at: K13.added + 8, color: TEAL}, {phrase: '21.60 mL', at: K13.left, color: NAVY}, {phrase: '0.2000 mol/L', at: K13.left + 8, color: NAVY},
				{phrase: '3HCl(aq)', at: K13.three, color: USED_INK}, {phrase: '78.00 g/mol', at: K13.mult + 10, color: USED_INK}, {phrase: '0.500 g', at: K13.r607 - 20, color: USED_INK},
			]} />
		</Shrink>
		<MolesBar x={1120} y={240} w={680} h={56} at={4} split={K13.r1168 - 10} used={() => 11.68 / 16} size={24} usedText="used" leftText="left" />
		<WLine x={140} y={520} size={34} dim={K13.r1168 + 10} items={P('added: 0.4000 × 0.04000', K13.added, '= 1.600 × 10^{−2} mol', K13.added + 24)} />
		<WLine x={140} y={580} size={34} dim={K13.r1168 + 10} items={P('left: 0.2000 × 0.02160', K13.left, '= 4.320 × 10^{−3} mol', K13.left + 20)} />
		<WLine x={140} y={640} size={34} dim={K13.r304} items={P('used: 1.600 × 10^{−2} − 4.320 × 10^{−3}', K13.r1168 - 24, {t: '= 1.168 × 10^{−2} mol', color: USED_INK}, K13.r1168)} />
		<WLine x={140} y={700} size={34} dim={K13.r607} items={P('n(Al(OH)_3) = 1.168 × 10^{−2} ÷ 3', K13.three + 14, {t: '= 3.893 × 10^{−3} mol', color: USED_INK}, K13.three + 60)} />
		<WLine x={140} y={760} size={34} dim={K13.forget} items={P('m = 3.893 × 10^{−3} × 78.00', K13.r304 - 40, {t: '= 0.3037 g → 0.304 g', color: USED_INK}, K13.r304)} />
		<WLine x={140} y={820} size={34} items={P('% = 0.3037 ÷ 0.500 × 100', K13.r607 - 30, {t: '= 60.7%', color: USED_INK}, K13.r607)} />
		<AChip x={1260} y={600} text="60.7% Al(OH)_3" size={38} color={USED_INK} hand={false} at={K13.r607 + 20} />
		<MistakeX x={1260} y={720} text="no ÷ 3: 182%" at={K13.forget} cross={K13.impossible} note="over 100%: check the ratio" size={34} />
		{void K13.used}
	</Overlay>
);

// ---------- 14/15. Question 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', zero: 'Zero point one', explain: 'Explain why', use: 'then use', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: '0.100 mol/L sulfuric acid was added from a burette to 50.00 mL of barium hydroxide solution, and the conductivity was measured after each 1.0 mL.', at: t[0]},
	{text: 'The graph shows the results (corrected for the volume added).', at: t[0] + 120},
	{text: 'Ba(OH)₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2H₂O(l)', at: t[0] + 150, para: true},
	{text: '(a) Explain why the conductivity falls almost to zero.', at: t[1], para: true},
	{text: '(b) Use the graph to calculate the concentration of the barium hydroxide solution.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0]).blocks, [{phrase: 'falls almost to zero', at: 0}, {phrase: '0.100 mol/L', at: 0}, {phrase: '50.00 mL', at: 0}]);
const QCard: React.FC<{h: number; at: number}> = ({h, at}) => (
	<Fade at={at}><rect x={100} y={200} width={880} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
const ShrinkL: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(Math.min(1, Math.max(0, f / 20)));
	return <g transform={`translate(100,178) scale(${s}) translate(-100,-178)`}>{children}</g>;
};
export const GB: GG = {x: 1100, y: 290, w: 680, h: 420, x0: 0, x1: 20, y0: -1.5, y1: 14};
const GraphA2: React.FC<{at: number}> = ({at}) => (
	<>
		<Axes g={GB} at={at - 20} xTicks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]} xGrid={Array.from({length: 20}, (_, i) => i + 1)} yTicks={[]} xLabel="volume of 0.100 mol/L H_2SO_4 added (mL)" yLabel="conductivity (relative, corrected for volume added)" size={20} grid={false} yNumbers={false} />
		<Pts g={GB} fn={condBa} xs={BA_XS} time={i => at + i * 3} r={7} />
	</>
);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QCard h={470} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={262} w={800} size={32} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Last one" size={58} color={INK} hand at={K14.last} />
		<Question2 t={[K14.zero, K14.explain, K14.use]} />
		<GraphA2 at={K14.zero + 60} />
		<PicH p={COND} x={1690} y={70} h={170} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={790} cx={860} cy={790} />
	</Overlay>
);

const F2 = 'feedback-2';
const K15 = cues(sc(F2), {water: 'as water', baso4: 'barium sulfate', almost: 'almost no ions', excess: 'excess acid', twelve: 'twelve point five', r025: 'zero point zero two five zero', reading: 'Reading the', slip: 'slip'});
const BA_C = '#e3c55a', SO4_C = '#6f7f95';
const PB = {x: 120, y: 600, w: 480, h: 240};
const BAS: [number, number][] = [[0.2, 0.55], [0.5, 0.4], [0.8, 0.6]];
const OHS: [number, number][] = [[0.12, 0.3], [0.32, 0.75], [0.42, 0.18], [0.62, 0.78], [0.7, 0.28], [0.9, 0.4]];
const pp = (u: number, v: number): [number, number] => [PB.x + u * PB.w, PB.y + v * PB.h];
const IonPanel: React.FC<{t: {water: number; ba: number; excess: number}}> = ({t}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={18} fill="#eef6fb" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			{OHS.map(([u, v], i) => {
				const [x, y] = pp(u, v);
				const at = t.water + i * 6;
				return f < at ? <OHg key={'o' + i} x={x} y={y} s={1.1} /> : <MeetPair key={'o' + i} a={[x + 10, PB.y + 24]} b={[x, y]} at={at} s={0.95} o={1 - prog(f, at + 60, 20)} />;
			})}
			{BAS.map(([u, v], i) => {
				const [x, y] = pp(u, v);
				const at = t.ba + i * 8;
				const q = smooth(clamp01((f - at) / 20));
				const d = smooth(clamp01((f - at - 22) / 20));
				const sx = lerp(x + 6, x + 34, q), sy = lerp(PB.y + 20, y, q);
				if (d <= 0) return (
					<g key={'b' + i}>
						<Ion x={x} y={y} kind="+" r={22} label="Ba^{2+}" labelSize={15} fill={BA_C} />
						{f >= at ? <Ion x={sx} y={sy} kind="-" r={24} label="SO_4^{2−}" labelSize={13} fill={SO4_C} /> : null}
					</g>
				);
				return <rect key={'b' + i} x={x - 22} y={lerp(y - 14, PB.y + PB.h - 34, d)} width={48} height={28} rx={5} fill="#ffffff" stroke="#9a948a" strokeWidth={2} />;
			})}
			{f >= t.excess ? (
				<g opacity={prog(f, t.excess, 14)}>
					<H3O x={pp(0.3, 0.35)[0]} y={pp(0.3, 0.35)[1]} s={1.0} />
					<H3O x={pp(0.68, 0.45)[0]} y={pp(0.68, 0.45)[1]} s={1.0} />
					<Ion x={pp(0.5, 0.22)[0]} y={pp(0.5, 0.22)[1]} kind="-" r={24} label="SO_4^{2−}" labelSize={13} fill={SO4_C} />
				</g>
			) : null}
		</g>
	);
};
export const SceneFeedback2: React.FC = () => (
	<Overlay>
		<ShrinkL k={0.6}>
			<Question2 t={[-100, -100, -100]} marks={[{phrase: 'falls almost to zero', at: K15.water, color: TEAL}, {phrase: '0.100 mol/L', at: K15.r025 - 30, color: NAVY}, {phrase: '50.00 mL', at: K15.r025 - 20, color: UNK}]} />
		</ShrinkL>
		<GraphA2 at={-100} />
		<PicH p={COND} x={1690} y={70} h={170} />
		<IonPanel t={{water: K15.water, ba: K15.baso4, excess: K15.excess}} />
		<Note x={PB.x + PB.w / 2} y={PB.y + PB.h + 46} text="both ions leave the solution" size={32} color={INK} anchor="middle" at={K15.baso4 + 30} />
		<FitRuler g={GB} line={BA_L1} a={0} b={10} lo={0} hi={13.6} at={K15.twelve - 6} color={FIT1} />
		<FitRuler g={GB} line={BA_L2} a={14} b={20} lo={11.6} hi={20} at={K15.twelve + 4} color={FIT2} />
		<CrossMark g={GB} x={BA_X} p={BA_L1.at(BA_X)} at={K15.twelve + 40} label="12.5 mL" size={26} labelDx={-150} labelY={gy(GB, -0.85)} />
		<WLine x={140} y={950} size={28} items={P('c(Ba(OH)_2) = (0.100 mol/L × 0.0125 L) ÷ 0.05000 L', K15.r025 - 40, {t: '= 0.0250 mol/L', color: TEAL}, K15.r025)} />
		<AChip x={1100} y={790} text="0.0250 mol/L" size={34} color={TEAL} hand={false} at={K15.r025 + 20} />
		<MistakeX x={1100} y={870} text="12.0 mL, the lowest point measured" at={K15.reading} cross={K15.slip} note="read where the lines cross" size={30} />
		{void K15.almost}
	</Overlay>
);

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K16 = cues(sc(DR), {so: 'So when', back: 'back titrate', add: 'Add a measured', ifco2: 'If the reaction', sub: 'Subtract moles', colour: 'If colour', read: 'read where', next: 'Next', practice: 'practice with'});
export const SceneDecision: React.FC = () => {
	const gp: GG = {x: 1330, y: 760, w: 220, h: 140, x0: 0, x1: 50, y0: 0, y1: 14};
	return (
		<>
			<Heading text="When a direct titration won't work" at={4} size={58} />
			<Overlay>
				<RuleCard x={96} y={210} w={1728} at={K16.so + 10} lh={74} lines={[
					{t: '1  Insoluble or slow solid → back titration.', at: K16.back - 30, lit: [K16.back - 30, K16.add], size: 34, hand: false},
					{t: '2  Add a measured excess, let the sample react, titrate what is left.', at: K16.add, lit: [K16.add, K16.ifco2], size: 34, hand: false},
					{t: '3  If the reaction makes CO_2: drive it off and cool the flask before the back titre.', at: K16.ifco2, lit: [K16.ifco2, K16.sub], size: 34, hand: false},
					{t: '4  Subtract moles; use the reaction ratio.', at: K16.sub, lit: [K16.sub, K16.colour], size: 34, hand: false},
					{t: '5  Colour or cloudiness hides the endpoint → conductivity meter.', at: K16.colour, lit: [K16.colour, K16.read], size: 34, hand: false},
					{t: '6  Equivalence: where the two best-fit lines cross.', at: K16.read, lit: [K16.read, K16.next], size: 34, hand: false},
				]} />
				<AChip x={96} y={760} text="Next: curves, indicators and back titration practice" size={40} color={TEAL} hand={false} at={K16.next} />
				<Axes g={gp} at={K16.next + 6} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
				<Curve g={gp} fn={phEth} xs={XS25} color={ETH_C} at={K16.next + 10} dur={30} width={4} />
				<MolesBar x={1600} y={820} w={220} h={44} at={K16.next + 12} split={K16.next + 30} inner={false} />
				{void K16.practice}
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Back titration: used for insoluble or slow-reacting samples, such as CaCO_3 in antacid tablets, eggshell or limestone. For CaCO_3: add a measured excess of standard acid, let it react completely, boil off the CO_2 it makes and cool, then titrate the leftover acid with standard base.',
	'n(acid used) = n(acid added) − n(acid left over). Subtract moles, not volumes. Then use the mole ratio from the balanced equation (CaCO_3 : HCl = 1 : 2).',
	'Conductometric titration: measure the conductivity after each equal portion of titrant; useful when colour or cloudiness hides an indicator. Equivalence is where the two straight best-fit lines cross (the bottom of the V for a strong acid, the bend for a weak acid).',
	'Each portion of titrant dilutes the flask and bends the lines: use a large sample volume and a concentrated titrant, or correct each reading for the volume added.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={730} aids={['Back titration: total minus leftover.', 'Conductivity: read where the lines cross.']} tag="subtract moles; then the mole ratio" />
);
void INK_SOFT;
