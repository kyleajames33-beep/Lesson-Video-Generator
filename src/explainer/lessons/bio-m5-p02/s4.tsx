// P02 (Biology practical) scenes 11 to 13: the assessment card. What the model represents well (each row pen-linked to
// its piece: matching stickers, the swapped chromatids, the coin, 4 to 2 to 4, the gamete cards; the real cell beside
// the loop), its limits (a ticker from 4 to over eight million, break points that vary, a rare random mutation, no
// spindle), and keeping it valid and reliable (the tally returns with a pooled class row; one crossed-out mistake).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AC, AMBER, AMBER_INK, AcText, AssessFrame, Bench, Chain, Coin, ColourKey2, DataTable, GCard, GREYT, GreyTag, Heading, INK, INK_SOFT, Loop, MistakeChip, Overlay,
	PLP, PenLink, PlainArrow, PlateB, POOLED, QUESTION, S, Sticker, Sx, TALLY, EXPECT, TEAL, Ticker, acCell, prog, pulse, CUT,
} from './shared';
import {SPEC} from './s1';
import {LP_B, LT_A} from './s2';

const NARROW = 650;
const HEADS = ['Represents well', 'Leaves out or distorts', 'Valid and reliable'];
const rowPt = (col: number, row: number): [number, number] => {
	const [x, y] = acCell(col, row);
	return [x - 12, y + 22];
};
export const ROWS_WELL2 = [['same genes at', 'matching places'], ['swap: new combinations,', 'no new alleles'], ['coin: random direction', 'for each pair'], ['2n to n to 2n', '(4, 2, 4)'], ['predicts possible', 'gametes']];
export const ROWS_LIMIT2 = [['2 pairs: 4 combinations;', 'humans: over 8 million'], ['crossover chosen: real', 'position varies'], ['mutation chosen: real', 'ones rare and random'], ['no DNA, no spindle', '(beads show alleles)']];
const r9 = 9;

// ---------- 11. Assess: what the model represents well ----------
const K11 = cues(S('assess-strengths'), {assess: 'Now assess the model', several: 'represents several things well', match: 'Matching sticker positions', swap: 'The swap shows crossing over', newc: 'new combinations', coin: 'The coin makes', join: 'joining two gametes', restore: 'restoring the chromosome number', predicts: 'predicts which gamete types'});
export const SceneStrengthsP02: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.match, K11.swap, K11.coin, K11.join, K11.predicts];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame at={K11.assess} hotCol={f >= K11.several ? 0 : -1} heads={HEADS} />
				{ROWS_WELL2.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={at[i]} color={TEAL} />)}
				{/* mini parent cell */}
				<g opacity={prog(f, K11.assess, 12)}>
					<Loop x={230} y={440} rx={150} ry={150} />
					<Chain x={170} y={350} spec={SPEC.Lp} r={r9} stkRing={pulse(f, K11.match, 40)} />
					<Chain x={210} y={350} spec={SPEC.Lt} r={r9} stkRing={pulse(f, K11.match, 40)} />
					<Chain x={260} y={400} spec={SPEC.Sp} r={r9} />
					<Chain x={300} y={400} spec={SPEC.St} r={r9} />
					<line x1={155} y1={350 + 2.2 * r9} x2={225} y2={350 + 2.2 * r9} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="6 5" />
					<line x1={155} y1={350 + 7 * 2.2 * r9} x2={225} y2={350 + 7 * 2.2 * r9} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="6 5" />
				</g>
				<PlateB p={PLP.cell} cx={560} cy={420} w={140} o={prog(f, K11.several, 14)} />
				<Sx x={560} y={516} text="real cell" size={22} color={INK_SOFT} weight={700} anchor="middle" at={K11.several + 8} />
				{/* swapped chromatids */}
				<g opacity={prog(f, K11.swap, 12)}>
					<Chain x={420} y={560} spec={LP_B} r={r9} ringAll={pulse(f, K11.newc, 40)} />
					<Chain x={446} y={560} spec={LT_A} r={r9} ringAll={pulse(f, K11.newc, 40)} />
				</g>
				<Coin x={560} y={640} r={30} from={K11.coin} to={K11.coin + 24} face="P" o={prog(f, K11.coin, 8)} />
				{/* 4, 2, 4 */}
				<g opacity={prog(f, K11.join, 12)}>
					{['4', '2', '4'].map((t, i) => (
						<g key={i}>
							<circle cx={120 + i * 95} cy={780} r={30} fill={i === 1 ? '#fffdf8' : AMBER} stroke={AMBER_INK} strokeWidth={3} />
							<text x={120 + i * 95} y={791} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>{t}</text>
						</g>
					))}
					<Sx x={215} y={840} text="parent, gamete, zygote" size={22} color={INK_SOFT} weight={600} anchor="middle" />
				</g>
				<PlainArrow x1={152} y1={780} x2={183} y2={780} at={K11.join + 4} />
				<PlainArrow x1={247} y1={780} x2={278} y2={780} at={K11.restore} />
				{['P T R', 'P t r', 'p T R', 'p t r'].map((t, i) => <GCard key={t} x={460 + (i % 2) * 125} y={780 + Math.floor(i / 2) * 70} t={t} w={110} o={prog(f, K11.predicts + i * 4, 10)} />)}
				<PenLink a={[195, 360]} b={rowPt(0, 0)} at={K11.match + 8} />
				<PenLink a={[440, 560]} b={rowPt(0, 1)} at={K11.swap + 8} />
				<PenLink a={[590, 640]} b={rowPt(0, 2)} at={K11.coin + 8} />
				<PenLink a={[310, 760]} b={rowPt(0, 3)} at={K11.join + 8} />
				<PenLink a={[640, 790]} b={rowPt(0, 4)} at={K11.predicts + 8} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 12. Assess: limitations ----------
const K12 = cues(S('assess-limits'), {limits: 'Its limits matter too', two: 'Two pairs give only four', hides: 'the model hides most of the variety', humans: "humans' twenty-three pairs", eight: 'over eight million', chose: 'You chose where the crossover went', varies: 'its position varies', several: 'there can be several', mut: 'You chose the mutation', rare: 'rare and random', effect: 'many have no effect', beads: 'beads with stickers show alleles', spindle: 'or the spindle'});
export const SceneLimitsP02: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K12.two, K12.chose, K12.mut, K12.beads];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame hotCol={1} heads={HEADS} />
				{ROWS_WELL2.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={-100} color={TEAL} o={0.55} />)}
				{ROWS_LIMIT2.map((r, i) => <AcText key={i} col={1} row={i} lines={r} at={at[i]} color={AMBER_INK} />)}
				{/* 1. combinations ticker */}
				<Sx x={110} y={320} text="2 pairs: 2^{2} = 4" size={36} color={INK} weight={800} at={K12.two} />
				<Sx x={110} y={380} text="humans, 23 pairs: 2^{23} =" size={30} color={INK} weight={700} at={K12.humans} />
				<Ticker x={110} y={448} from={4} to={8388608} a={K12.humans + 10} b={K12.eight + 20} size={56} color={AMBER_INK} />
				{/* 2. crossover position varies */}
				<g opacity={prog(f, K12.chose, 12)}>
					<Chain x={150} y={500} spec={SPEC.Lp} r={11} />
					{[3, CUT].map((k, i) => <line key={k} x1={120} y1={500 + (k - 0.5) * 24.2} x2={180 + 30 * prog(f, K12.varies + i * 10, 12)} y2={500 + (k - 0.5) * 24.2} stroke={GREYT} strokeWidth={3} strokeDasharray="6 5" opacity={i === 0 ? prog(f, K12.varies, 10) : 1} />)}
					<Sx x={220} y={560} text="break point varies;" size={26} color={INK} weight={600} at={K12.varies} />
					<Sx x={220} y={594} text="often more than one" size={26} color={INK} weight={600} at={K12.several} />
				</g>
				{/* 3. mutation */}
				<g opacity={prog(f, K12.mut, 12)}>
					<Sticker x={250} y={690} t="R*" r={24} amber={1} ring={pulse(f, K12.rare, 40)} />
					<Sx x={290} y={700} text="real: rare, random," size={26} color={INK} weight={600} at={K12.rare} />
					<Sx x={290} y={734} text="many have no effect" size={26} color={INK} weight={600} at={K12.effect} />
				</g>
				{/* 4. no spindle */}
				<g opacity={prog(f, K12.beads, 12)}>
					<Loop x={300} y={850} rx={170} ry={60} />
					<Chain x={260} y={828} spec={{cols: ['P', 'P'], stk: {}}} r={9} />
					<Chain x={330} y={828} spec={{cols: ['T', 'T'], stk: {}}} r={9} />
					{[-1, 1].map(s => [-30, 0, 30].map(dy => <line key={s + '-' + dy} x1={300 + s * 160} y1={850} x2={300} y2={850 + dy} stroke={GREYT} strokeWidth={2} strokeDasharray="5 5" opacity={0.7 * prog(f, K12.spindle, 12)} />))}
					<GreyTag x={480} y={826} text="not modelled" at={K12.spindle} size={20} />
				</g>
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 13. Valid and reliable ----------
const K13 = cues(S('valid-reliable'), {valid: 'To keep it valid', tests: 'really tests what meiosis does', follow: 'follow the real rules every time', brk: 'break at matching points', roll: 'roll and flip fresh each run', draw: 'draw at random', reliable: 'To make it reliable', agree: 'so repeats agree', pool: 'pool the class results', chance: 'just by chance'});
export const ROWS_VR = [['valid: tests what', 'meiosis really does'], ['matching breaks; fresh', 'die, coin; random draw'], ['reliable: repeats agree', 'when you run it again'], ['many repeats;', 'pool the class']];
export const SceneValidP02: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K13.valid, K13.follow, K13.reliable, K13.pool];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Bench w={NARROW} />
				<AssessFrame hotCol={2} heads={HEADS} />
				{ROWS_WELL2.map((r, i) => <AcText key={i} col={0} row={i} lines={r} at={-100} color={TEAL} o={0.45} />)}
				{ROWS_LIMIT2.map((r, i) => <AcText key={i} col={1} row={i} lines={r} at={-100} color={AMBER_INK} o={0.45} />)}
				{ROWS_VR.map((r, i) => <AcText key={i} col={2} row={i} lines={r} at={at[i]} color={INK} />)}
				<Sx x={110} y={310} text="valid: follow the real rules" size={30} color={INK} hand at={K13.follow} />
				{[{t: 'break at matching points', at: K13.brk}, {t: 'fresh die and coin each run', at: K13.roll}, {t: 'draw at random', at: K13.draw}].map((r, i) => (
					<Sx key={i} x={130} y={352 + i * 36} text={'- ' + r.t} size={26} color={INK} weight={600} at={r.at} />
				))}
				<DataTable x={110} y={500} cols={[{w: 190, head: 'genotype'}, {w: 170, head: 'observed'}, {w: 170, head: 'expected'}]}
					rows={[['RR', String(TALLY.RR), String(EXPECT.RR)], ['Rr', String(TALLY.Rr), String(EXPECT.Rr)], ['rr', String(TALLY.rr), String(EXPECT.rr)], ['class pooled', `${POOLED.RR}, ${POOLED.Rr}, ${POOLED.rr}`, '40, 80, 40']]}
					rowAt={[K13.reliable - 10, K13.reliable - 6, K13.reliable - 2, K13.pool]} at={K13.reliable - 14} size={24} rowH={46} hot={i => (i === 3 ? pulse(f, K13.pool + 10, 40) : 0)} />
				<Sx x={110} y={760} text="16 draws: 3, 9, 4 (off by chance)" size={24} color={INK_SOFT} weight={600} at={K13.chance} />
				<Sx x={110} y={792} text="160 pooled: much closer" size={24} color={TEAL} weight={700} at={K13.chance + 10} />
				<GreyTag x={110} y={808} text="example data" at={K13.pool} size={18} />
				<MistakeChip x={110} y={858} text="one run is enough" at={K13.chance - 10} cross={K13.chance + 8} size={28} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};
void AMBER;
