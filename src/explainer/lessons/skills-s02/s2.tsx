// S02 scenes 5 to 8: part (b) describe, part (c) set-up, the three-point explanation with the X and Y inset, and the
// weak answer that describes when the question said explain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SexChrom} from '../bio-m5-b10/shared';
import {
	AMBER_INK, AnswerBox, CARD, Chip, GREY, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, LostMarksTag, Overlay, PenArrow, RED, RoutineStrip, T, TEAL, ZONE, answerGeom, cardPt, chipW, lerp, prog,
	smooth, vis,
} from './kit';
import type {AnsSpec, ARow} from './kit';
import {FLY_CARD, MiniLadder, boxTop, flyPts, miniRungY, sc} from './common';
import {FlyCardSmall} from './s1';

const SX = ZONE.side.x;
const S = 0.72;

// ---------- 5. Part (b): describe ----------
const K5 = cues(sc('describe'), {describe: 'describe', all52: 'All 52', red: 'had red eyes', all48: 'all 48', white: 'had white eyes', words: 'In other words', father: "father's eye colour", mother: "mother's", because: "there's no because", why: "doesn't ask why"});
export const DESCRIBE_ROWS = (t?: {r1: number; t1: number; r2: number; d2: number; t2: number}): ARow[] => [
	{text: 'All 52 female offspring had red eyes (none white).', at: t?.r1 ?? -1000, dur: 50, tick: t?.t1 ?? -1000},
	{text: 'All 48 male offspring had white eyes (none red): each daughter matched her father, each son his mother.', at: t?.r2 ?? -1000, dur: t?.d2, tick: t?.t2 ?? -1000},
];
/** Criss-cross links on the card slot: the red-eyed father to his daughters, the white-eyed mother to her sons. */
const CrissCross: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const p = flyPts();
	const P = (x: number, y: number) => cardPt(FLY_CARD, S, [x, y]);
	const dad = P(p.dad.x + p.dad.w / 2, p.dad.y + p.dad.h + 56), mom = P(p.mom.x + p.mom.w / 2, p.mom.y + p.mom.h + 56);
	const dau = P(p.daughters.x + 30, p.daughters.y - 4), son = P(p.sons.x + 120, p.sons.y - 4);
	const o = vis(f, at);
	return (
		<g opacity={o}>
			<PenArrow a={dad} b={dau} at={at} color="#c4432f" width={3} />
			<PenArrow a={mom} b={son} at={at + 10} color={GREY_INK} width={3} />
		</g>
	);
};
export const SceneDescribe: React.FC = () => {
	const box: AnsSpec = {x: ZONE.box.x, y: boxTop(), w: ZONE.box.w, lines: 4, lh: 52, size: 33};
	const g = answerGeom(box, DESCRIBE_ROWS());
	const f = useCurrentFrame();
	return (
		<Overlay>
			<MiniLadder lit={[undefined, [K5.describe, 1e9]]} />
			<FlyCardSmall focus={3} at={K5.describe} ann={[
				{kind: 'pulse', phrase: 'Describe the results of this cross.', item: 3, at: K5.describe + 6},
				{kind: 'ring', phrase: '52', item: 1, at: K5.all52, color: TEAL}, {kind: 'ring', phrase: '48', item: 1, at: K5.all48, color: TEAL},
			]} />
			<CrissCross at={K5.father} />
			<AnswerBox spec={box} at={K5.describe + 8} counter={{total: 2, label: true}}
				rows={DESCRIBE_ROWS({r1: K5.all52, t1: K5.red + 10, r2: K5.all48, d2: K5.mother + 10 - K5.all48, t2: K5.mother + 16})}
				ann={[{kind: 'under', row: 0, phrase: '52', at: K5.all52 + 6, color: TEAL}, {kind: 'under', row: 1, phrase: '48', at: K5.all48 + 6, color: TEAL}]} />
			<g opacity={vis(f, K5.because)}>
				<rect x={g.tx - 8} y={g.ruleY(2) + 6} width={360} height={g.lh - 12} rx={10} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
				<T x={g.tx + 10} y={g.base(3) - 4} text="because ...?" size={32} hand weight={700} color={GREY_INK} />
			</g>
			<GreyTag x={SX} y={box.y + 120} text="describe: what, not why" at={K5.because + 16} size={28} />
		</Overlay>
	);
};

// ---------- 6. Part (c): explain set-up ----------
const K6 = cues(sc('explain-setup'), {explain: 'explain', three: 'three marks', why: 'asks why', causes: 'need causes', linked: 'three linked points', content: 'the content words', males: 'males all white', females: 'females all red', both: 'accounts for both', none: 'no constraint phrase'});
export const BOX8: AnsSpec = {x: ZONE.box.x, y: 0, w: ZONE.box.w, lines: 8, lh: 50, size: 32};
export const box8 = (): AnsSpec => ({...BOX8, y: boxTop()});
const C_ANN = (t: [number, number] = [-100, -100]) => [
	{kind: 'given' as const, phrase: 'all the male offspring have white eyes', item: 4, at: t[0]},
	{kind: 'given' as const, phrase: 'all the female offspring have red eyes', item: 4, at: t[1]},
];
export const SceneSetup: React.FC = () => {
	const box = box8();
	return (
		<Overlay>
			<MiniLadder lit={[undefined, undefined, [K6.explain, 1e9]]} />
			<RoutineStrip rows={[-100, -100, -100, -100]} miniY={600} o={vis(useCurrentFrame(), K6.none - 30)} none={{row: 3, at: K6.none}} />
			<FlyCardSmall focus={4} at={K6.explain} ann={[{kind: 'pulse', phrase: 'Explain', item: 4, at: K6.explain + 4}, ...C_ANN([K6.males, K6.females])]} />
			<AnswerBox spec={box} at={K6.explain + 10} counter={{total: 3, label: true}} slots={{at: K6.linked, n: 3, per: 2}} />
			<Chip x={SX} y={box.y + 8} text="why: needs causes" at={K6.why} size={32} color={AMBER_INK} fill="#fff8e6" />
			<Chip x={SX} y={box.y + 110} text="males: all white" at={K6.both} size={30} color={TEAL} />
			<Chip x={SX} y={box.y + 182} text="females: all red" at={K6.both + 8} size={30} color={TEAL} />
		</Overlay>
	);
};

// ---------- 7. Part (c): the explanation ----------
const K7 = cues(sc('explain-build'), {start: 'Start from the cause', gene: 'The eye-colour gene', nocopy: 'no copy', one: 'point one', son: 'A son gets', mother: 'mother', two: 'Point two', daughter: 'A daughter', father: "father's", three: 'Point three', what: 'what causes what'});
export const EXPLAIN_ROWS = (t?: {r: number[]; d: number[]; k: number[]}): ARow[] => [
	{text: 'The eye-colour gene is on the X chromosome; the Y chromosome carries no allele for it.', at: t?.r[0] ?? -1000, dur: t?.d[0], tick: t?.k[0] ?? -1000},
	{text: 'Sons get their only X from their mother (X^{r} X^{r}), so every son is X^{r} Y; with no second allele to mask it, the recessive white allele is expressed: white eyes.', at: t?.r[1] ?? -1000, dur: t?.d[1], tick: t?.k[1] ?? -1000},
	{text: 'Daughters receive their father’s X, carrying the dominant red allele (X^{R}), so every daughter is X^{R} X^{r} and has red eyes.', at: t?.r[2] ?? -1000, dur: t?.d[2], tick: t?.k[2] ?? -1000},
];
export const CHAIN = (at: number) => [
	{kind: 'chain' as const, row: 1, cause: 'Sons get their only X from their mother (X^{r} X^{r}),', effect: 'every son is X^{r} Y;', at},
	{kind: 'chain' as const, row: 2, cause: 'Daughters receive their father’s X,', effect: 'has red eyes.', at: at + 16},
	...[0, 1, 2].map(r => ({kind: 'under' as const, row: r, phrase: 'so', occ: 'all' as const, at: at + 30})),
];
/** X and Y inset (B10 SexChrom chips): parents on top, a son and a daughter below. */
const Inset: React.FC<{y: number}> = ({y}) => {
	const f = useCurrentFrame();
	const py = y + 70, oy = y + 270;
	const mom = [SX + 60, SX + 120], dad = [SX + 300, SX + 370];
	const sonX = [SX + 50, SX + 120], dauX = [SX + 300, SX + 370];
	const slide = (a: number, b: number, at: number) => lerp(a, b, smooth(prog(f, at, 26)));
	const mx = slide(mom[1], sonX[0], K7.mother), my = slide(py, oy, K7.mother);
	const fx = slide(dad[0], dauX[0], K7.father), fy = slide(py, oy, K7.father);
	const o = vis(f, K7.gene - 10);
	return (
		<g opacity={o}>
			<T x={SX + 90} y={y} text="mother" size={28} hand weight={700} color={GREY_INK} anchor="middle" />
			<T x={SX + 335} y={y} text="father" size={28} hand weight={700} color={GREY_INK} anchor="middle" />
			<SexChrom x={mom[0]} y={py} kind="X" tag="r" s={0.8} />
			<SexChrom x={mom[1]} y={py} kind="X" tag="r" s={0.8} o={f < K7.mother ? 1 : 0.35} />
			<SexChrom x={dad[0]} y={py} kind="X" tag="R" s={0.8} o={f < K7.father ? 1 : 0.35} />
			<SexChrom x={dad[1]} y={py} kind="Y" s={0.8} slot={prog(f, K7.nocopy, 12)} />
			{/* offspring outlines */}
			<g opacity={vis(f, K7.son - 10)}>
				<rect x={SX + 10} y={oy - 70} width={170} height={140} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
				<T x={SX + 95} y={oy - 84} text="son" size={28} hand weight={700} color={INK} anchor="middle" />
				<SexChrom x={sonX[1]} y={oy} kind="Y" s={0.8} slot={1} />
			</g>
			<g opacity={vis(f, K7.daughter - 10)}>
				<rect x={SX + 260} y={oy - 70} width={170} height={140} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
				<T x={SX + 345} y={oy - 84} text="daughter" size={28} hand weight={700} color={INK} anchor="middle" />
				<SexChrom x={dauX[1]} y={oy} kind="X" tag="r" s={0.8} />
			</g>
			{f >= K7.mother ? <SexChrom x={mx} y={my} kind="X" tag="r" s={0.8} ring={vis(f, K7.mother, K7.mother + 50)} /> : null}
			{f >= K7.father ? <SexChrom x={fx} y={fy} kind="X" tag="R" s={0.8} ring={vis(f, K7.father, K7.father + 50)} /> : null}
		</g>
	);
};
export const SceneBuild: React.FC = () => {
	const box = box8();
	const rows = EXPLAIN_ROWS({r: [K7.gene, K7.son, K7.daughter], d: [K7.one - K7.gene - 10, K7.two - K7.son - 16, K7.three - K7.daughter - 20], k: [K7.one, K7.two, K7.three]});
	return (
		<Overlay>
			<MiniLadder lit={[undefined, undefined, [-100, 1e9]]} />
			<FlyCardSmall focus={4} ann={C_ANN()} />
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} slots={{at: -100, out: K7.gene, n: 3, per: 2}} rows={rows} ann={CHAIN(K7.what)} />
			<Inset y={box.y + 26} />
			<Chip x={SX + 8} y={box.y + 400} text="males: all white" at={-100} size={24} color={TEAL} tick={K7.two + 8} />
			<Chip x={SX + 250} y={box.y + 400} text="females: all red" at={-100} size={24} color={TEAL} tick={K7.three + 8} />
		</Overlay>
	);
};

// ---------- 8. Weak against strong ----------
const K8 = cues(sc('weak-vs-strong'), {weaker: 'a weaker answer', quote: 'All the males', linked: 'sex-linked', repeats: 'repeats part b', never: 'never says how it works', guide: 'In our marking guide', one: 'earns one of three', described: 'It described', notice: 'Notice it even says', how: 'say how'});
const WEAK = 'All the males had white eyes and all the females had red eyes, because the trait is sex-linked and males have only one X.';
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const strong = box8();
	const weak: AnsSpec = {x: ZONE.box.x, y: 350, w: ZONE.box.w, lines: 3, lh: 52, size: 33, label: 'Answer A'};
	const bSpec: AnsSpec = {x: ZONE.box.x, y: 0, w: ZONE.box.w, lines: 4, lh: 52, size: 33, label: 'Answer to (b)'};
	const gw = answerGeom(weak, [{text: WEAK, at: 0}]);
	const slotY = weak.y + gw.h + 60;
	const becauseChip = {x: SX, y: 640};
	return (
		<Overlay>
			<MiniLadder flash={[{rung: 1, at: K8.described}, {rung: 2, at: K8.described + 24}]} lit={[undefined, undefined, [K8.described + 24, 1e9]]} />
			<FlyCardSmall focus={4} ann={C_ANN()} o={1 - prog(f, 0, 18)} />
			{/* the strong answer moves aside as Answer B */}
			<AnswerBox spec={{...strong, label: 'Answer B'}} rows={EXPLAIN_ROWS()} at={-100} counter={{total: 3}} move={{at: 4, x: SX, y: 350, s: ZONE.side.w / ZONE.box.w}} o={1 - 0.35 * prog(f, 30, 14)} />
			{/* part (b)'s answer reappears small */}
			<AnswerBox spec={{...bSpec, y: 96}} rows={[{text: 'All 52 female offspring had red eyes (none white).', at: -1000}, {text: 'All 48 male offspring had white eyes (none red): each daughter matched her father, each son his mother.', at: -1000}]} at={K8.repeats} move={{at: -100, x: 700, y: 96, s: 0.6}} />
			<HandLine x={ZONE.box.x} y={170} text="already said in (b)" at={K8.repeats + 10} size={34} color={GREY_INK} />
			<PenArrow a={[ZONE.box.x + 380, 410]} b={[700, 190]} at={K8.repeats + 4} color={GREY_INK} dash bow={-30} />
			<AnswerBox spec={weak} rows={[{text: WEAK, at: K8.quote, dur: K8.linked + 70 - K8.quote}]} at={K8.weaker} counter={{total: 3, label: true}}
				ann={[{kind: 'tick', row: 0, phrase: 'males have only one X.', at: K8.one + 8}, {kind: 'ring', row: 0, phrase: 'because', at: K8.notice + 16, color: '#e0962a'}]} />
			{['where does each X come from?', 'why are daughters red?'].map((t, i) => (
				<g key={t} opacity={vis(f, K8.never + i * 10)}>
					<rect x={ZONE.box.x + i * 500} y={slotY} width={470} height={60} rx={12} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
					<T x={ZONE.box.x + i * 500 + 20} y={slotY + 40} text={t} size={30} hand weight={700} color={GREY_INK} />
				</g>
			))}
			<LostMarksTag x={ZONE.box.x} y={slotY + 100} text="−2: never says where each X comes from, for sons or daughters" at={K8.one + 40} maxW={970} />
			<g opacity={vis(f, K8.described + 30, K8.notice, 12)}>
				<HandLine x={ZONE.box.x} y={320} text="← asked for this" at={K8.described + 30} size={36} color={RED} />
			</g>
			<Chip x={becauseChip.x} y={becauseChip.y} text="because ≠ explained" at={K8.how - 6} size={34} color={RED} />
			<PenArrow a={[becauseChip.x - 6, becauseChip.y + 40]} b={[ZONE.box.x + 980, slotY + 30]} at={K8.how + 6} color={RED} bow={10} />
			{void CARD}{void INK}{void chipW}{void miniRungY}
		</Overlay>
	);
};
