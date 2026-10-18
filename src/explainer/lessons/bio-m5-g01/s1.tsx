// G01 scenes 1 to 2d: the hook (three checks, four question cards) and question 1 (a copying error traced through two
// rounds of copying). Every molecule is computed from the B4 pairing rule; the build check confirms one changed pair.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Overlay, PLUM} from '../bio-m5-b06b/shared';
import {StrandRow, tilesOf, EndTag} from '../bio-m5-b04/dna';
import {Chr, PCell, TEALC, CPLUM} from '../bio-m5-b08/shared';
import {
	AidChip, BIO, Badge, BoxRing, CheckList, CheckStrip, Crossed, Fade, GreyTag, HscTag, QText, qCheck, ModelLine, Note, PauseHold, RED, Ring, Sx, TaskLine,
	clamp01, smooth, vis,
} from './board';
import {MG, Mol, NEWC, ORIG, PairGlow, YB, mixPlace, molPt, pairStr} from './dna';
import type {Place, Side} from './dna';
import {PLG, PlateB} from './plates';
import {hold, sc} from './common';

export const CHECKS = ['which strand?', 'which end?', 'what am I counting?'];
export const TRACE = 'trace:';

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {something: 'something new', strand3: "written from its 3' end", error: 'a copying error', cell: "a cell you've never seen", trace: 'ask you to trace it', three: 'three checks', which: 'which strand', end: 'which end', count: "what you're counting", four: 'four HSC-style questions', pause: 'Pause and try', step: 'one step at a time', classic: 'the classic mistake'});
const StrandIcon: React.FC = () => (
	<g>
		<line x1={-26} y1={-12} x2={26} y2={-12} stroke={ORIG} strokeWidth={7} strokeLinecap="round" />
		<line x1={-26} y1={12} x2={26} y2={12} stroke={NEWC} strokeWidth={7} strokeLinecap="round" />
		{[-16, 0, 16].map(x => <line key={x} x1={x} y1={-8} x2={x} y2={8} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="2 4" />)}
	</g>
);
const EndIcon: React.FC = () => <text x={0} y={14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={AMBER_INK}>5'</text>;
const CountIcon: React.FC = () => (
	<g>
		<path d="M-24,-26 L-4,26 M-4,-26 L-24,26" stroke={CPLUM} strokeWidth={8} strokeLinecap="round" />
		<circle cx={-14} cy={0} r={6} fill="#fbf0cf" stroke={INK} strokeWidth={2.5} />
		<circle cx={18} cy={0} r={8} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />
	</g>
);
/** A question card frame drawn round a hook thumbnail. */
export const CardFrame: React.FC<{cx: number; cy: number; label: string; at: number}> = ({cx, cy, label, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18);
	if (p <= 0.01) return null;
	const w = 380, h = 290;
	return (
		<g opacity={p}>
			<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={20} fill="none" stroke="rgba(60,45,20,0.35)" strokeWidth={3} />
			<Sx x={cx - w / 2 + 20} y={cy - h / 2 + 40} text={label} size={34} hand at={-100} />
			<Sx x={cx - w / 2 + 20} y={cy + h / 2 - 16} text="HSC-style question, written for HSCScience" size={19} color={INK_SOFT} hand at={-100} />
		</g>
	);
};
export const SceneHookG1: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = 892;
	const th = (at: number) => prog(f, at, 16);
	const mini: Place = {x: 1523, y: 345, k: 0.55};
	return (
		<Overlay>
			<TaskLine text="Trace it" at={4} size={68} />
			<CheckList shrink={shrink} y={350} rows={[
				{text: 'which strand?', at: KH.which, icon: <StrandIcon />},
				{text: 'which end?', at: KH.end, icon: <EndIcon />},
				{text: 'what am I counting?', at: KH.count, icon: <CountIcon />},
			]} title="three checks" titleAt={KH.three} />
			<Fade at={KH.pause} out={shrink}>
				<Note x={96} y={760} text="pause, try, then check one step at a time" at={KH.pause} size={38} />
			</Fade>
			<Crossed x={96} y={800} text="the classic mistake" at={KH.classic} cross={KH.classic + 14} size={32} out={shrink} />
			{/* four thumbnails, then four question cards */}
			<g opacity={th(KH.strand3)}>
				<StrandRow x={1072} y={360} n={6} pitch={46} face="down" color={PLUM} tiles={tilesOf('CGGAAT')} tw={38} th={30} so={12} thick={6} />
				<EndTag x={1038} y={394} t="3'" at={KH.strand3 + 4} size={36} color={AMBER_INK} />
				<EndTag x={1338} y={394} t="5'" at={KH.strand3 + 4} size={36} />
			</g>
			<g opacity={th(KH.error)}>
				<Mol {...mini} top={{letters: 'GCTAC', color: ORIG}} bot={{letters: 'CGGTG', color: NEWC, tile: i => (i === 2 ? {rot: 12, dy: 6} : {})}} bond={i => (i === 2 ? 0 : 1)} bad={{i: 2, o: 1}} />
			</g>
			<g opacity={th(KH.cell)}>
				<PCell cx={1190} cy={722} rx={118} ry={84} />
				<PlateB p={PLG.koala} cx={1190} cy={722} w={112} />
			</g>
			<g opacity={th(KH.trace)}>
				<Chr x={1560} y={700} kind="L" col="P" s={0.62} />
				<Chr x={1640} y={700} kind="L" col="T" s={0.62} />
				<path d="M1575,725 L1625,745 M1625,725 L1575,745" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
			</g>
			<CardFrame cx={1190} cy={390} label="Question 1" at={KH.four} />
			<CardFrame cx={1610} cy={390} label="Question 2" at={KH.four + 6} />
			<CardFrame cx={1190} cy={710} label="Question 3" at={KH.four + 12} />
			<CardFrame cx={1610} cy={710} label="Question 4" at={KH.four + 18} />
			<CheckStrip labels={CHECKS} title={TRACE} at={shrink + 8} />
		</Overlay>
	);
};

// ---------- Q1 board ----------
const TASK1 = 'How many of the four molecules have a changed pair? Which pair?';
/** T strand on top (T at column 2), A strand below. */
const TOP = 'GCTAC';
const BOT = pairStr(TOP);
const MID = 2;
const R1_NEW_TOP = pairStr(BOT);
const R1_NEW_BOT = pairStr(TOP).split('').map((c, i) => (i === MID ? 'G' : c)).join('');
type Mole = {top: string; bot: string; topC: string; botC: string; from: 'm1' | 'm2'; fromSide: 'top' | 'bot'};
/** Round 2: each strand of each round-1 molecule templates a new partner (the template keeps its own side). */
const R2: Mole[] = [
	{top: pairStr(BOT), bot: BOT, topC: NEWC, botC: ORIG, from: 'm1', fromSide: 'bot'},
	{top: R1_NEW_TOP, bot: pairStr(R1_NEW_TOP), topC: NEWC, botC: NEWC, from: 'm1', fromSide: 'top'},
	{top: TOP, bot: pairStr(TOP), topC: ORIG, botC: NEWC, from: 'm2', fromSide: 'top'},
	{top: pairStr(R1_NEW_BOT), bot: R1_NEW_BOT, topC: NEWC, botC: NEWC, from: 'm2', fromSide: 'bot'},
];
const changed = R2.filter(m => !(m.top[MID] === TOP[MID] && m.bot[MID] === BOT[MID]));
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('G01 Q1 check failed: ' + msg); };
	must(TOP[MID] === 'T' && BOT[MID] === 'A', 'original pair is T-A');
	must(R1_NEW_TOP === TOP && R1_NEW_BOT[MID] === 'G', 'round 1');
	must(changed.length === 1 && changed[0] === R2[3], 'one of four changed');
	must([changed[0].top[MID], changed[0].bot[MID]].sort().join('') === 'CG', 'changed pair is G-C');
})();
const ORIG_P: Place = {x: 180, y: 322, k: 1.25};
const M1: Place = {x: 1020, y: 270, k: 1};
const M2: Place = {x: 1020, y: 600, k: 1};
const BOX = (i: number) => ({x: 1424, y: 250 + i * 152, w: 400, h: 130});
const inBox = (i: number): Place => ({x: BOX(i).x + 36, y: BOX(i).y + 26, k: 0.56});
const LABELS = R2.map(m => (m === changed[0] ? ['G-C:', 'changed'] : ['normal']));

type Q1At = {q: number; bact: number; spot: number; opp: number; both: number; four: number};
const NO1: Q1At = {q: -100, bact: -100, spot: -100, opp: -100, both: -100, four: -100};
const HIDE = 1e9;
/** The worded question; givens are underlined on the walkthrough cues (markAt per scene). */
const Q1Q = (t: Q1At) => qCheck([
	{text: 'A bacterium is copying its DNA.', at: t.bact},
	{text: 'At one spot, the DNA has a T paired with an A.', at: t.spot},
	{text: 'Opposite that T, DNA polymerase makes a rare mistake: it adds a G instead of an A, and the mistake is not repaired.', at: t.opp},
	{text: 'Both new molecules are then copied once more, with no more mistakes.', at: t.both},
	{text: 'How many of the four molecules have a changed base pair at this spot, and what is the changed pair?', at: t.four, para: true, weight: 650},
], ['a T paired with an A', 'adds a G instead of an A', 'not repaired', 'copied once more', 'no more mistakes'].map(phrase => ({phrase, at: HIDE})));
qCheck(Q1Q(NO1).blocks, Q1Q(NO1).marks);
const Q1Head: React.FC<{a?: Q1At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO1;
	return (
		<g>
			<TaskLine text={TASK1} at={a ? 6 : -100} size={46} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Replication" at={t.q + 10} />
			<PlateB p={PLG.bact} cx={246} cy={238} w={300} o={prog(f, t.bact, 14)} />
			<Note x={420} y={228} text="a bacterium" at={t.bact + 6} size={34} color={INK_SOFT} />
			<QText q={Q1Q(t)} x={120} y={604} w={776} size={30} at={t.bact} markAt={m} />
		</g>
	);
};
const Outlines: React.FC<{at: number; labelAt: number; filled?: (i: number) => number}> = ({at, labelAt, filled}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Sx x={1424} y={232} text="after round 2" size={32} color={INK_SOFT} hand at={labelAt} />
			{[0, 1, 2, 3].map(i => {
				const b = BOX(i);
				const p = prog(f, at + i * 4, 14);
				const fl = filled ? filled(i) : 0;
				return p > 0.01 ? <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={16} fill={fl > 0.01 ? '#fffdf8' : 'none'} fillOpacity={fl} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray={fl > 0.5 ? undefined : '10 7'} opacity={p} /> : null;
			})}
		</g>
	);
};

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', bact: 'A bacterium', dna: 'is copying its DNA', spot: 'At one spot', ta: 'T paired with an A', opp: 'Opposite that T', adds: 'adds a G', rep: 'not repaired', both: 'Both new molecules', four: 'Of the four molecules', many: 'how many', pair: 'what is the changed pair', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q1-question');
	return (
		<Overlay>
			<Q1Head a={{q: KA.q, bact: KA.bact, spot: KA.spot, opp: KA.opp, both: KA.both, four: KA.four}} />
			<g opacity={prog(f, KA.dna, 16)}>
				<Mol {...ORIG_P} top={{letters: TOP, color: ORIG}} bot={{letters: BOT, color: ORIG}} />
			</g>
			<PairGlow {...ORIG_P} i={MID} o={prog(f, KA.ta, 12)} />
			<Note x={ORIG_P.x + MID * MG.pitch * ORIG_P.k - 30} y={ORIG_P.y - 46} text="T = A" at={KA.ta + 4} size={36} />
			<Outlines at={KA.four} labelAt={KA.four} />
			<PauseHold h={h} at={KA.pause} x={960} y={760} cx={1180} cy={560} />
			<CheckStrip labels={CHECKS} title={TRACE} hold={h} />
		</Overlay>
	);
};

// ---------- 2b. Round one ----------
const KB = cues(sc('q1-first-copy'), {start: 'Start with the first copy', sep: 'two strands separate', tmpl: 'each one is a template', aStr: 'The A strand gets a new T', newT: 'a new T', normal: 'that molecule is normal', tStr: 'The T strand gets', aG: ['a G', 1], mis: 'mismatch', yet: "isn't a changed pair yet"});
/** Per-column docking: the new strand drops in column by column from `at`. */
const dock = (f: number, at: number, sign: number, skip = -1, step = 4) => ({
	dy: (i: number) => (i === skip ? 0 : (1 - smooth((f - at - i * step) / 14)) * 46 * sign),
	unit: (i: number) => (i === skip ? 0 : clamp01((f - at - i * step) / 8)),
});
export const SceneQ1FirstCopy: React.FC = () => {
	const f = useCurrentFrame();
	const open = smooth((f - KB.sep) / 24) * 34;
	const travel = smooth((f - KB.sep - 30) / 34);
	const glow = prog(f, KB.tmpl, 10) * (1 - prog(f, KB.tmpl + 50, 16));
	const pTop = mixPlace(ORIG_P, M2, travel);
	const pBot = mixPlace({...ORIG_P}, M1, travel);
	// new strands: mol1 gets a top strand on "a new T"; mol2 gets a bottom strand, then the G slides in crooked
	const d1 = dock(f, KB.aStr + 6, -1);
	const d2 = dock(f, KB.tStr + 8, 1, MID);
	const gIn = smooth((f - KB.aG) / 16);
	const tick1 = KB.newT + 6;
	return (
		<Overlay>
			<Q1Head m={{'a T paired with an A': KB.sep, 'adds a G instead of an A': KB.tStr}} />
			<Mol {...ORIG_P} o={0.22 * prog(f, KB.sep, 10)} top={{letters: TOP, color: ORIG}} bot={{letters: BOT, color: ORIG}} />
			<Sx x={640} y={ORIG_P.y + 110} text="original" size={30} color={INK_SOFT} hand at={KB.sep + 20} />
			{/* the two original strands separate and travel */}
			<Mol {...pTop} top={{letters: TOP, color: ORIG, dy: () => (travel > 0 ? -open * (1 - travel) : -open), glow}} />
			<Mol {...pBot} bot={{letters: BOT, color: ORIG, dy: () => (travel > 0 ? open * (1 - travel) : open), glow}} />
			<GreyTag x={980} y={190} text="each strand: a template (B4)" at={KB.tmpl} size={28} />
			{/* round-1 molecule 1: A strand + new T strand */}
			{f >= KB.aStr ? <Mol {...M1} top={{letters: R1_NEW_TOP, color: NEWC, dy: d1.dy, unit: d1.unit}} bot={{letters: BOT, color: ORIG}} /> : null}
			<PairGlow {...M1} i={MID} o={vis(f, tick1, tick1 + 40)} color="#2f8a5b" />
			<Note x={M1.x - 30} y={M1.y + YB + 70} text="normal" at={KB.normal} size={36} color="#2f8a5b" />
			{/* round-1 molecule 2: T strand + new strand with a G opposite the T */}
			{f >= KB.tStr ? (
				<Mol {...M2} top={{letters: TOP, color: ORIG}}
					bot={{letters: R1_NEW_BOT, color: NEWC, dy: i => (i === MID ? (1 - gIn) * 60 + 6 : d2.dy(i)), unit: i => (i === MID ? clamp01((f - KB.aG) / 8) : d2.unit(i)), tile: i => (i === MID ? {rot: 12 * gIn, dx: (1 - gIn) * 40} : {})}}
					bond={i => (i === MID ? 0 : 1)} bad={{i: MID, o: prog(f, KB.aG + 18, 10)}} />
			) : null}
			<Note x={M2.x - 30} y={M2.y + YB + 70} text="T and G: a mismatch" at={KB.mis} size={36} color={RED} />
			<GreyTag x={1060} y={M2.y + YB + 96} text="not a changed pair yet" at={KB.yet} size={28} />
			<Outlines at={-100} labelAt={-100} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [KB.tmpl]}} />
		</Overlay>
	);
};

// ---------- round-1 molecules as they stand after 2b ----------
const Mol1: React.FC<{o?: number; open?: number}> = ({o = 1, open = 0}) => (
	<Mol {...M1} o={o} top={{letters: R1_NEW_TOP, color: NEWC, dy: () => -open}} bot={{letters: BOT, color: ORIG, dy: () => open}} />
);
const Mol2: React.FC<{o?: number; open?: number}> = ({o = 1, open = 0}) => (
	<Mol {...M2} o={o} top={{letters: TOP, color: ORIG, dy: () => -open}} bot={{letters: R1_NEW_BOT, color: NEWC, dy: i => open + (i === MID ? 6 : 0), tile: i => (i === MID ? {rot: 12} : {})}} bond={i => (i === MID ? 0 : 1)} bad={{i: MID, o: open > 4 ? 0 : 1}} />
);
/** One round-2 copy: its template strand travels from the round-1 molecule into box i, then the new partner docks. */
const Copy: React.FC<{i: number; go: number; dockAt: number; ring?: number}> = ({i, go, dockAt, ring}) => {
	const f = useCurrentFrame();
	const m = R2[i];
	const from = m.from === 'm1' ? M1 : M2;
	const t = smooth((f - go) / 30);
	if (f < go) return null;
	const pl = mixPlace(from, inBox(i), t);
	const tmplTop = m.fromSide === 'top';
	const d = dock(f, dockAt, tmplTop ? 1 : -1);
	const tmpl: Side = tmplTop ? {letters: m.top, color: m.topC} : {letters: m.bot, color: m.botC};
	const neu: Side = tmplTop ? {letters: m.bot, color: m.botC, dy: d.dy, unit: d.unit} : {letters: m.top, color: m.topC, dy: d.dy, unit: d.unit};
	return (
		<g>
			<Mol {...pl} top={tmplTop ? tmpl : f >= dockAt ? neu : undefined} bot={tmplTop ? (f >= dockAt ? neu : undefined) : tmpl} />
			{ring !== undefined ? <PairGlow {...inBox(i)} i={MID} o={prog(f, ring, 10)} /> : null}
		</g>
	);
};
const BoxLabel: React.FC<{i: number; at: number}> = ({i, at}) => {
	const b = BOX(i);
	const l = LABELS[i];
	const col = l.length > 1 ? AMBER_INK : '#2f8a5b';
	return <>{l.map((s, k) => <Sx key={k} x={b.x + 262} y={b.y + b.h / 2 + 12 + (k - (l.length - 1) / 2) * 36} text={s} size={34} color={col} hand at={at + k * 4} />)}</>;
};
const Link: React.FC<{i: number; at: number; o?: number}> = ({i, at, o = 1}) => {
	const f = useCurrentFrame();
	const m = R2[i];
	const from = m.from === 'm1' ? M1 : M2;
	const [x1, y1] = molPt(from, 4 * MG.pitch + 44, m.fromSide === 'top' ? 0 : YB);
	const b = BOX(i);
	const p = prog(f, at, 16) * o;
	return p > 0.01 ? <path d={`M${x1},${y1} C${x1 + 30},${y1} ${b.x - 30},${b.y + b.h / 2} ${b.x},${b.y + b.h / 2}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" opacity={p} /> : null;
};

// ---------- 2c. Round two ----------
const KC = cues(sc('q1-second-copy'), {again: 'Now copy again', two: 'makes two normal molecules', mm: 'The mismatched one separates', its: 'Its T strand pairs with an A', norm2: ['normal', 2], but: 'But its G strand', aC: 'with a C', only: 'only one of the four', gc: 'G with C', took: 'The error took two rounds'});
export const SceneQ1SecondCopy: React.FC = () => {
	const f = useCurrentFrame();
	const open1 = smooth((f - KC.again - 30) / 20) * 30;
	const open2 = smooth((f - KC.mm - 10) / 20) * 30;
	const fade1 = 1 - 0.75 * prog(f, KC.again + 50, 16);
	const fade2 = 1 - 0.75 * prog(f, KC.its - 10, 16);
	return (
		<Overlay>
			<Q1Head m={{'a T paired with an A': -100, 'adds a G instead of an A': -100, 'not repaired': KC.mm, 'copied once more': KC.again + 4, 'no more mistakes': KC.its}} />
			<Mol {...ORIG_P} o={0.22} top={{letters: TOP, color: ORIG}} bot={{letters: BOT, color: ORIG}} />
			<Sx x={640} y={ORIG_P.y + 110} text="original" size={30} color={INK_SOFT} hand at={-100} />
			<Mol1 open={open1} o={fade1} />
			<Mol2 open={open2} o={fade2} />
			<Outlines at={-100} labelAt={-100} filled={i => prog(f, [KC.two + 10, KC.two + 16, KC.its + 30, KC.aC][i], 12)} />
			<Copy i={0} go={KC.again + 50} dockAt={KC.two + 6} />
			<Copy i={1} go={KC.again + 56} dockAt={KC.two + 14} />
			<Copy i={2} go={KC.its - 10} dockAt={KC.its + 26} />
			<Copy i={3} go={KC.but} dockAt={KC.aC - 8} ring={KC.aC + 6} />
			<Link i={0} at={KC.two} /><Link i={1} at={KC.two + 6} /><Link i={2} at={KC.its} /><Link i={3} at={KC.but + 8} />
			<BoxLabel i={0} at={KC.two + 24} /><BoxLabel i={1} at={KC.two + 30} /><BoxLabel i={2} at={KC.norm2} /><BoxLabel i={3} at={KC.only} />
			<ModelLine x={1010} y={935} text="1 of 4 molecules: G-C in place of T-A" at={KC.gc} size={40} />
			<Note x={1010} y={882} text="the error took two rounds to become a real change" at={KC.took} size={32} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [-100]}} />
		</Overlay>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {two: 'saying two', as: 'as if the mismatch', each: 'Each strand is a template', tstr: 'the T strand still holds', right: 'the right base', newc: 'its new copy is normal'});
const Final: React.FC = () => (
	<g>
		{[0, 1, 2, 3].map(i => {
			const m = R2[i];
			return <Mol key={i} {...inBox(i)} top={{letters: m.top, color: m.topC}} bot={{letters: m.bot, color: m.botC}} />;
		})}
		<PairGlow {...inBox(3)} i={MID} o={1} />
		{[0, 1, 2, 3].map(i => <BoxLabel key={i} i={i} at={-100} />)}
	</g>
);
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const tPulse = Math.max(0, Math.sin(Math.PI * clamp01((f - KD.tstr) / 40))) + prog(f, KD.right, 10) * 0.6;
	const b2 = inBox(2);
	return (
		<Overlay>
			<Q1Head m={{'a T paired with an A': -100, 'adds a G instead of an A': -100, 'not repaired': -100, 'copied once more': -100, 'no more mistakes': -100}} />
			<Mol {...ORIG_P} o={0.22} top={{letters: TOP, color: ORIG}} bot={{letters: BOT, color: ORIG}} />
			<Sx x={640} y={ORIG_P.y + 110} text="original" size={30} color={INK_SOFT} hand at={-100} />
			<Mol1 o={0.25 * (1 - prog(f, 0, 12))} />
			<Mol2 o={0.25 * (1 - prog(f, 0, 12))} />
			<Outlines at={-100} labelAt={-100} filled={() => 1} />
			<Final />
			<ModelLine x={1010} y={935} text="1 of 4 molecules: G-C in place of T-A" at={-100} size={40} />
			<Crossed x={940} y={300} text="normal, normal, changed, changed" at={KD.two - 16} cross={KD.two + 8} caption="the mismatch does not copy into both" size={28} />
			{/* the T strand in its round-2 copy keeps the right base */}
			<rect x={b2.x + (MID * MG.pitch - MG.tw / 2 - 10) * b2.k} y={b2.y - 16 * b2.k} width={(MG.tw + 20) * b2.k} height={(MG.so + MG.th + 26) * b2.k} rx={8} fill="none" stroke={BIO} strokeWidth={6} opacity={clamp01(tPulse)} />
			<GreyTag x={1000} y={560} text="original base kept: T" at={KD.tstr + 6} size={30} />
			<path d={`M1290,${600} C1340,610 1360,${b2.y - 6} ${b2.x + MID * MG.pitch * b2.k - 10},${b2.y - 10}`} fill="none" stroke={BIO} strokeWidth={4} opacity={prog(f, KD.tstr + 12, 12)} />
			<AidChip x={960} y={760} text="each strand is its own template" at={KD.each} size={30} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [-100]}} />
		</Overlay>
	);
};
void Ring; void BoxRing; void INK; void TEALC; void AMBER; void Fade;
