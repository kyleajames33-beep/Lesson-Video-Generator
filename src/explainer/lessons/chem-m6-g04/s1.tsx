// M6 G04 scenes 1 to 2d: the hook (four kinds of data, the three checks, four question cards) and question 1 (an
// ammonia pH curve, HCl added): the attempt with the computed curve and the indicator table; equivalence in the middle
// of the steep drop and the concentration; the acidic equivalence point, the one-drop window and the methyl red and
// methyl orange bands; the "bromothymol blue because pH 7" mistake crossed, with a magnifier on the early change.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {CFLASK} from './assets';
import {
	Axes, BTB_BLUE, BTB_YEL, Band, CLEAR, Curve, DimG, EqLine, Fade, GDot, GREYX, INK, INK_SOFT, Inset, JumpBracket, KeptChip, Lit, MO_RED, MO_YEL, MR_RED, MistakeX, NAVY, Note,
	Overlay, P, PINK, PauseHold, PicH, Sx, TEAL, UNK, WLine, eq, fitSize, gx, gy,
} from './parts';
import type {GG, QBlock} from './parts';
import {Drop} from '../chem-m6-c13/parts';
import {fine} from '../chem-m6-c13/curves';
import {CheckList, ChecksL, ChemBadge, G04_CHECKS, HBr, HscTag, IndTable, MiniCard, PCard, ThumbFrame, qMarksOk} from './board';
import type {QDef} from './board';
import {XQ4, L1, L2, XS1, condQ4, phQ1, volAt} from './curves';

export const Checks: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number}> = p => <ChecksL labels={G04_CHECKS} {...p} />;
export const AMM = '#1f8a7a';
export const G: GG = {x: 1210, y: 250, w: 590, h: 400, x0: 0, x1: 40, y0: 0, y1: 12};
export const PHAxes: React.FC<{g: GG; at: number; xLabel: string; step?: number; o?: number}> = ({g, at, xLabel, step = 4, o = 1}) => {
	const xt: number[] = [], xg: number[] = [];
	for (let v = g.x0; v <= g.x1; v += step) xt.push(v);
	for (let v = g.x0; v <= g.x1; v += step / 2) xg.push(v);
	return <Axes g={g} at={at} o={o} xTicks={xt} xGrid={xg} yTicks={Array.from({length: 13}, (_, i) => i)} xLabel={xLabel} yLabel="pH" size={22} />;
};
const WX = 760;

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {curve: 'pH curve', ind: 'an indicator', sample: 'a sample that', cond: 'conductivity graph', where: 'where is the', eqp: 'equivalence point', method: 'does the method', way: 'which way', four: 'four HSC-style'});
const TG: GG = {x: 0, y: 0, w: 300, h: 190, x0: 0, x1: 40, y0: 0, y1: 12};
const at = (g: GG, x: number, y: number): GG => ({...g, x: g.x + x, y: g.y + y});
export const SceneHook: React.FC = () => {
	const shrink = KH.four + 50;
	const cardsAt = KH.four + 10;
	const C = [[880, 240], [1360, 240], [880, 600], [1360, 600]];
	const g1 = at(TG, C[0][0] + 50, C[0][1] + 30);
	const g4: GG = {...at(TG, C[3][0] + 50, C[3][1] + 30), x1: 16, y1: 46000};
	const tl = (g: GG, v: number) => [gx(g, v), gy(g, condQ4(v))];
	return (
		<>
			<Heading text="Curves, indicators, back titration: where is equivalence?" at={4} size={50} />
			<Overlay>
				<CheckList shrink={shrink} y={330} lh={140} size={44} rows={[
					{text: 'where is equivalence?', at: KH.where, icon: <Sx x={0} y={14} text="?" size={44} color={TEAL} anchor="middle" weight={800} at={-1000} />},
					{text: 'which way does it move?', at: KH.way, icon: <Sx x={0} y={14} text="↑↓" size={40} color={TEAL} anchor="middle" weight={800} at={-1000} />},
					{text: 'does it make sense?', at: KH.way + 30, icon: <Sx x={0} y={14} text="✓" size={44} color={TEAL} anchor="middle" weight={800} at={-1000} />},
				]} />
				<ThumbFrame x={C[0][0]} y={C[0][1]} w={400} h={260} at={KH.curve} out={cardsAt}>
					<Curve g={g1} fn={phQ1} xs={XS1} color={AMM} at={KH.curve + 4} dur={30} width={5} />
					<g opacity={prog(useCurrentFrame(), KH.eqp, 10)}><circle cx={gx(g1, 24)} cy={gy(g1, 5.3)} r={30} fill="none" stroke={INK} strokeWidth={4} /></g>
				</ThumbFrame>
				<ThumbFrame x={C[1][0]} y={C[1][1]} w={400} h={260} at={KH.ind} out={cardsAt}>
					<defs><linearGradient id="g04-hk-mr" x1={0} y1={0} x2={1} y2={0}><stop offset="0" stopColor={MR_RED} /><stop offset="1" stopColor={MO_YEL} /></linearGradient></defs>
					<rect x={C[1][0] + 60} y={C[1][1] + 100} width={280} height={60} rx={14} fill="url(#g04-hk-mr)" />
					<Sx x={C[1][0] + 200} y={C[1][1] + 210} text="methyl red 4.4 to 6.2" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
				</ThumbFrame>
				<ThumbFrame x={C[2][0]} y={C[2][1]} w={400} h={260} at={KH.sample} out={cardsAt}>
					<PicH p={CFLASK} x={C[2][0] + 70} y={C[2][1] + 30} h={200} />
					<Sx x={C[2][0] + 260} y={C[2][1] + 90} text="excess acid" size={26} color={GREYX} hand at={KH.sample + 8} />
					<Fade at={KH.way}>
						<Sx x={C[2][0] + 300} y={C[2][1] + 170} text="↑ ↓" size={50} color={TEAL} anchor="middle" weight={800} at={KH.way} />
					</Fade>
				</ThumbFrame>
				<ThumbFrame x={C[3][0]} y={C[3][1]} w={400} h={260} at={KH.cond} out={cardsAt}>
					<line x1={tl(g4, 0)[0]} y1={tl(g4, 0)[1]} x2={gx(g4, XQ4 + 1)} y2={gy(g4, L1.at(XQ4 + 1))} stroke={TEAL} strokeWidth={4} />
					<line x1={gx(g4, XQ4 - 1)} y1={gy(g4, L2.at(XQ4 - 1))} x2={tl(g4, 16)[0]} y2={tl(g4, 16)[1]} stroke={TEAL} strokeWidth={4} />
					{[0, 2, 4, 6, 8, 10, 12, 14, 16].map(v => <circle key={v} cx={tl(g4, v)[0]} cy={tl(g4, v)[1]} r={5} fill="#d6a21e" />)}
					<g opacity={prog(useCurrentFrame(), KH.eqp + 6, 10)}><circle cx={gx(g4, XQ4)} cy={gy(g4, L1.at(XQ4))} r={26} fill="none" stroke={INK} strokeWidth={4} /></g>
				</ThumbFrame>
				{C.map((c, i) => <MiniCard key={i} x={c[0] + 35} y={c[1] + 15} label={`Question ${i + 1}`} at={cardsAt + i * 6} />)}
				<Sx x={1340} y={920} text="HSC-style questions, written for HSCScience" size={30} color={INK_SOFT} anchor="middle" hand at={cardsAt + 24} />
				<Checks at={shrink + 8} />
				{void KH.method}
			</Overlay>
		</>
	);
};

// ---------- Question 1 card ----------
export const Q1: QDef = {
	size: 30,
	secs: [
		{y: 232, blocks: t => [
			{text: 'A 20.00 mL sample of ammonia solution, NH₃(aq), was titrated with 0.100 mol/L hydrochloric acid.', at: t[0]},
			{text: 'The pH of the solution in the flask was recorded. The results are shown in the graph.', at: t[1]},
		] as QBlock[]},
		{y: 615, blocks: t => [
			{text: '(a) Use the graph to determine the concentration of the ammonia solution.', at: t[2], weight: 700},
			{text: '(b) Select the most suitable indicator from the table, and justify your choice.', at: t[3], para: true, weight: 700},
		] as QBlock[]},
	],
	h: 820,
	ans: [{label: '(a)', y: 772}, {label: '(b)', y: 848, h: 136}],
};
const Q1M = {c: '0.100 mol/L hydrochloric acid', s: '20.00 mL sample', sel: 'Select the most suitable indicator'};
qMarksOk(Q1, Object.values(Q1M));
const FILL_A = 'V(eq) = 24.0 mL; c(NH_3) = 0.120 mol/L';
const FB = ['methyl red: equivalence acidic (NH_4^{+} + H_2O);', 'its change (6.2 to 4.4) lies inside the drop (about 6.6 to 4)', 'methyl orange: slightly late, also acceptable'];
const IT = {x: 130, y: 400};
const XL1 = 'volume of 0.100 mol/L HCl added (mL)';

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', twenty: 'Twenty millilitres', graph: 'the graph shows', use: 'Use the graph', then: 'Then select', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q1} t={[KA.twenty, KA.graph, KA.use, KA.then]} ansAt={[KA.use + 20, KA.then + 20]}>
					<IndTable x={IT.x} y={IT.y} at={KA.then} />
				</PCard>
				<PHAxes g={G} at={KA.graph} xLabel={XL1} />
				<Curve g={G} fn={phQ1} xs={XS1} color={AMM} at={KA.graph + 12} dur={70} />
				<PauseHold h={h} at={KA.pause} x={1180} y={800} cx={1740} cy={880} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

const Q1Board: React.FC<{marks?: {phrase: string; at: number}[]; fills?: {i: number; text: string; at: number; size?: number; line?: number}[]; ind?: {row: number; at: number; out?: number}[]; shrinkAt?: number}> = ({marks = [], fills = [], ind = [], shrinkAt}) => (
	<>
		<HscTag at={-100} />
		<PCard q={Q1} strip shrinkAt={shrinkAt} marks={marks} fills={fills} ansAt={[-100, -100]}>
			<IndTable x={IT.x} y={IT.y} at={-100} marks={ind} />
		</PCard>
		<PHAxes g={G} at={-100} xLabel={XL1} />
		<Curve g={G} fn={phQ1} xs={XS1} color={AMM} at={-100} dur={1} />
	</>
);
const fillsB = (t: number[]) => FB.map((s, k) => ({i: 1, text: s, at: t[k], size: 24, line: k * 0.85}));

// ---------- 2b. Where is equivalence? ----------
const KB = cues(sc('q1-concentration'), {find: 'Find the equivalence', steep: 'steepest', v24: 'twenty four point zero', moles: 'Moles of acid', n: 'two point four zero', amm: 'Ammonia reacts', divide: 'so divide', c: 'zero point one two zero'});
export const SceneQ1Concentration: React.FC = () => {
	const strip = eq(['NH_3(aq)', '+', 'HCl(aq)', '->', 'NH_4Cl(aq)'], KB.moles - 10);
	const ss = fitSize(strip, 700, 32);
	const S = 30;
	return (
		<>
			<Heading text="Question 1: where is equivalence?" at={4} size={52} />
			<Overlay>
				<ChemBadge text="pH curve: equivalence and indicator" at={6} />
				<Q1Board shrinkAt={0} marks={[{phrase: Q1M.c, at: KB.n}, {phrase: Q1M.s, at: KB.c}]} fills={[{i: 0, text: FILL_A, at: KB.c + 16, size: 30}]} />
				<JumpBracket x={gx(G, 24) + 26} y1={gy(G, 9.5)} y2={gy(G, 2.6)} at={KB.steep} text="steepest part" size={24} />
				<Drop g={G} v={24} p={5.26} at={KB.steep + 20} xLabel="24.0 mL" size={26} color={TEAL} />
				<Note x={WX} y={300} text="middle of the steep part," size={28} color={INK_SOFT} at={KB.steep + 10} out={KB.moles} />
				<Note x={WX} y={340} text="not pH 7" size={28} color={INK_SOFT} at={KB.steep + 16} out={KB.moles} />
				<EqLine items={strip} x={WX} y={780} size={ss} />
				<WLine x={WX} y={835} size={S} dim={KB.amm} items={P('n(HCl) = 0.100 × 0.0240', KB.moles + 10, {t: '= 2.40 × 10^{−3} mol', color: NAVY}, KB.n)} />
				<WLine x={WX} y={885} size={S} dim={KB.c} items={P('n(NH_3) = 2.40 × 10^{−3} mol (1 : 1)', KB.amm + 10)} />
				<WLine x={WX} y={945} size={34} items={P('c(NH_3) = 2.40 × 10^{−3} ÷ 0.02000', KB.divide + 10, {t: '= 0.120 mol/L', color: UNK}, KB.c)} />
				<Note x={WX} y={420} text="3 s.f.: 0.100 and a graph" size={26} color={INK_SOFT} at={KB.c + 30} />
				<Note x={WX} y={455} text="reading to 0.1 mL" size={26} color={INK_SOFT} at={KB.c + 36} />
				<Checks ticks={{0: [KB.v24]}} />
				{void KB.find}
			</Overlay>
		</>
	);
};

// ---------- 2c. Which indicator? ----------
const KC = cues(sc('q1-indicator'), {now: 'Now the indicator', flask: 'the flask holds', gives: 'ammonium gives', acidic: 'acidic', five: 'about five', drop: 'One drop', sixsix: 'six point six to four', mr: 'Methyl red changes', inside: 'inside', fits: 'fits best', mo: 'Methyl orange', foot: 'foot', late: 'slightly late'});
export const SceneQ1Indicator: React.FC = () => {
	const strip = eq(['NH_4^{+}(aq)', '+', 'H_2O(l)', '<=>', 'NH_3(aq)', '+', 'H_3O^{+}(aq)'], KC.gives);
	const ss = fitSize(strip, 900, 34);
	return (
		<>
			<Heading text="Question 1: which indicator?" at={4} size={52} />
			<Overlay>
				<ChemBadge text="pH curve: equivalence and indicator" at={-100} />
				<Q1Board marks={[{phrase: Q1M.c, at: -100}, {phrase: Q1M.s, at: -100}, {phrase: Q1M.sel, at: KC.inside}]} fills={[{i: 0, text: FILL_A, at: -100, size: 30}, ...fillsB([KC.fits, KC.fits + 10, KC.late])]} ind={[{row: 1, at: KC.inside + 4, out: KC.foot}, {row: 0, at: KC.foot + 4}]} />
				<KeptChip x={WX} y={240} text="c(NH_3) = 0.120 mol/L" at={-100} color={UNK} size={28} />
				<DimG at={KC.five} to={0.35}><EqLine items={strip} x={WX} y={790} size={ss} /></DimG>
				<Note x={WX} y={850} text="C13: the salt takes after its stronger parent" size={28} color={INK_SOFT} at={KC.acidic} out={KC.drop} />
				<GDot g={G} v={24} p={5.26} at={KC.acidic + 10} color={AMBER_DOT} r={11} />
				<Sx x={gx(G, 24) - 18} y={gy(G, 5.26) + 9} text="equivalence pH ≈ 5" size={26} color={AMBER_DOT} anchor="end" weight={800} at={KC.acidic + 14} out={KC.sixsix} />
				<Fade at={KC.sixsix} out={KC.foot + 40}>
					<JumpBracket x={gx(G, 24) + 34} y1={gy(G, 6.58)} y2={gy(G, 3.94)} at={KC.sixsix} text="about 6.6 to 4" size={24} />
					<Sx x={gx(G, 24) + 50} y={gy(G, 3.94) + 34} text="(one drop either side)" size={22} color={INK_SOFT} weight={700} at={KC.sixsix + 8} />
				</Fade>
				<Band g={G} lo={4.4} hi={6.2} cLo={MR_RED} cHi={MO_YEL} at={KC.inside} o={(fr: number) => 1 - 0.65 * prog(fr, KC.foot, 12)} label="methyl red" labelSize={22} />
				<Lit g={G} fn={phQ1} xs={XS1} lo={4.4} hi={6.2} color={MR_RED} at={KC.inside + 14} o={(fr: number) => 1 - 0.6 * prog(fr, KC.foot, 12)} />
				<Band g={G} lo={3.1} hi={4.4} cLo={MO_RED} cHi={MO_YEL} at={KC.foot} op={0.18} label="methyl orange" labelSize={22} />
				<Lit g={G} fn={phQ1} xs={XS1} lo={3.1} hi={4.4} color={MO_RED} at={KC.foot + 14} range={[volAt(phQ1, 4.4, 23, 26), volAt(phQ1, 3.1, 23, 26)]} />
				<Note x={WX} y={900} text="methyl orange: changes just after the drop, slightly late; also accepted" size={28} color={MO_RED} at={KC.foot + 10} />
				<Checks ticks={{0: [-100], 2: [KC.late]}} />
				{void KC.now}{void KC.flask}{void KC.drop}{void KC.mr}{void KC.mo}
			</Overlay>
		</>
	);
};
const AMBER_DOT = '#d6a21e';

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {classic: 'The classic mistake', because: 'because neutralisation', starts: 'It starts', early: 'early', above: 'above the steep', small: 'too small'});
const GI: GG = {x: 800, y: 330, w: 320, h: 260, x0: 22.5, x1: 24.5, y0: 3, y1: 9};
const XSF = fine(22.5, 24.5, 400);
export const SceneQ1Mistake: React.FC = () => (
	<>
		<Heading text="Question 1: the classic mistake" at={4} size={52} />
		<Overlay>
			<ChemBadge text="pH curve: equivalence and indicator" at={-100} />
			<Q1Board marks={[{phrase: Q1M.sel, at: -100}]} fills={[{i: 0, text: FILL_A, at: -100, size: 30}, ...fillsB([-100, -100, -100])]} />
			<Band g={G} lo={4.4} hi={6.2} cLo={MR_RED} cHi={MO_YEL} at={-100} op={0.25} />
			<Band g={G} lo={6.0} hi={7.6} cLo={BTB_YEL} cHi={BTB_BLUE} at={KD.early} op={0.18} o={0.7} />
			<MistakeX x={WX} y={760} text="bromothymol blue: neutralisation gives pH 7" at={4} cross={KD.classic + 20} note="equivalence here is about pH 5" size={30} />
			<Inset x={GI.x - 40} y={GI.y - 70} w={GI.w + 70} h={GI.h + 120} from={[gx(G, 24), gy(G, 6.8)]} r={30} at={KD.starts} title="zoom: 22.5 to 24.5 mL">
				<Axes g={GI} at={KD.starts} xTicks={[23, 24]} yTicks={[4, 6, 8]} xLabel="" yLabel="" size={20} />
				<Band g={GI} lo={6.0} hi={7.6} cLo={BTB_YEL} cHi={BTB_BLUE} at={KD.early - 6} op={0.25} />
				<Curve g={GI} fn={phQ1} xs={XSF} color={AMM} at={KD.starts + 4} dur={20} />
				<Lit g={GI} fn={phQ1} xs={XSF} lo={6.0} hi={7.6} color={GREYX} at={KD.early} range={[volAt(phQ1, 7.6, 22.5, 24.5), volAt(phQ1, 6.0, 22.5, 24.5)]} />
				<g opacity={prog(useCurrentFrame(), KD.early, 10)}><line x1={gx(GI, 24)} y1={GI.y} x2={gx(GI, 24)} y2={GI.y + GI.h} stroke={INK} strokeWidth={3} strokeDasharray="7 6" /></g>
				<HBr g={GI} a={volAt(phQ1, 7.6, 22.5, 24.5)} b={24} p={8.3} up at={KD.early + 6} text="starts about 0.5 mL early" size={20} dx={-40} />
			</Inset>
			<Note x={WX} y={710} text="too small, by a little" size={28} color={INK_SOFT} at={KD.small} />
			<Checks ticks={{0: [-100], 2: [-100]}} />
			{void KD.because}{void KD.above}{void CLEAR}{void PINK}{void DrawPath}{void INK}
		</Overlay>
	</>
);
