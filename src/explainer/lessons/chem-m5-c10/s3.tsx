import React from 'react';
import {AMBER, AMBER_INK, Countdown, DrawPath, HandText, INK, INK_SOFT} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Line, Overlay, fracGeom} from '../chem-m5-c05/parts';
import type {EqItem, Term} from '../chem-m5-c05/parts';
import {GivensCard} from '../chem-m5-c06/parts';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {MistakeChip, TaskLine} from '../chem-m5-g03c/board';
import {Fade, KName, LogRuler, NameTag, PicH, RMark, Ring, Sx, TEAL, Tick, Tray, kNameW} from './parts';
import {AG_INK, ANION_INK, CL_INK, HPLUS_INK, Heading, MOL, OH_INK, WATER_INK, hold, sc} from './common';
import {SATURATED} from './assets';
import {KaFrac, spCentre, withAt} from './s1';
import {R5} from './s2';

// ---------- 9. Memory aid: K with a name tag ----------
const M = 'memory-aid';
const K10 = cues(sc(M), {line: 'line to remember', ka: 'Ka, Kb', kb: 'Kb and Ksp', ksp: 'Ksp are just', tag: 'K with a name tag', write: 'Write them the same way', prod: 'products over reactants', left: 'water and solids left out', read: 'read them the same way', kind: 'same kind', bigger: 'bigger value', right: 'further to the right'});
const EXPR_Y = 300, ES = 46;
const kaNum: Term[] = [{t: 'H^{+}', at: -100, color: HPLUS_INK}, {t: 'A^{-}', at: -100, color: ANION_INK}];
const kaDen: Term[] = [{t: 'HA', at: -100, color: MOL}];
const kbNum: Term[] = [{t: 'NH_4^{+}', at: -100, color: ANION_INK}, {t: 'OH^{-}', at: -100, color: OH_INK}];
const kbDen: Term[] = [{t: 'NH_3', at: -100, color: MOL}];
export const SceneAid: React.FC = () => {
	const ga = fracGeom(470, EXPR_Y, ES, kaNum, kaDen), gb = fracGeom(1070, EXPR_Y, ES, kbNum, kbDen);
	const kx = (g: {x1: number}, name: string) => g.x1 - ES * 0.95 - kNameW(name, ES) + ES * 0.3;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 640}}><HandText text="Ka, Kb and Ksp are just K with a name tag." at={K10.tag} size={68} cps={30} color={TEAL} /></div>
			<Overlay>
				<Sx x={96} y={170} text="a line to remember" size={40} color={INK_SOFT} hand at={K10.line} />
				<Fade at={K10.ka}><KaFrac cx={470} cy={EXPR_Y} size={ES} name="a" prefixAt={K10.ka} barAt={K10.ka} num={kaNum.map(t => ({...t, at: K10.ka}))} den={kaDen.map(t => ({...t, at: K10.ka}))} /></Fade>
				<Fade at={K10.kb}><KaFrac cx={1070} cy={EXPR_Y} size={ES} name="b" prefixAt={K10.kb} barAt={K10.kb} num={kbNum.map(t => ({...t, at: K10.kb}))} den={kbDen.map(t => ({...t, at: K10.kb}))} /></Fade>
				<KName x={1440} y={EXPR_Y + 14} name="sp" size={ES} at={K10.ksp} />
				<Sx x={1520} y={EXPR_Y + 14} text="=" size={ES} at={K10.ksp} />
				<Line x={1560} y={EXPR_Y + 14} size={ES} items={[{t: 'Ag^{+}', at: K10.ksp, color: AG_INK}, {t: 'Cl^{-}', at: K10.ksp, color: CL_INK}]} />
				<NameTag x={kx(ga, 'a') + 16} y={EXPR_Y + 30} text="a: acid" at={K10.ka + 10} />
				<NameTag x={kx(gb, 'b') + 16} y={EXPR_Y + 30} text="b: base" at={K10.kb + 10} />
				<NameTag x={1460} y={EXPR_Y + 30} text="sp: solid" at={K10.ksp + 10} />
				<Tray x={360} y={450} w={1200} at={K10.left - 10} label="left out of all three" items={[
					{t: 'H_2O(l)', at: K10.left, from: [470, EXPR_Y - 60], color: WATER_INK},
					{t: 'H_2O(l)', at: K10.left + 8, from: [1070, EXPR_Y - 60], color: WATER_INK},
					{t: 'AgCl(s)', at: K10.left + 16, from: [1650, EXPR_Y - 60], color: AG_INK},
				]} />
				<Sx x={96} y={790} text="write them the same way: products over reactants," size={40} color={INK} hand at={K10.write} />
				<Sx x={96} y={838} text="with water and solids left out" size={40} color={INK} hand at={K10.left} />
				<Sx x={96} y={910} text="read them the same way: compare like with like (same kind of equation, same temperature)" size={34} color={TEAL} hand at={K10.kind} />
				<Arrow x1={96} y1={980} x2={560} y2={980} at={K10.bigger} color={TEAL} width={5} />
				<Sx x={590} y={992} text="bigger value: the reaction goes further to the right" size={36} color={TEAL} hand at={K10.right} />
			</Overlay>
		</>
	);
};

// ---------- 10. Attempt (countdown) ----------
const T = 'attempt';
export const HCN_EQ: EqItem[] = [{k: 'sp', t: 'HCN(aq)', color: MOL}, {k: 'plus'}, {k: 'sp', t: 'H_2O(l)', color: WATER_INK}, {k: 'arrow'}, {k: 'sp', t: 'H_3O^{+}(aq)', color: HPLUS_INK}, {k: 'plus'}, {k: 'sp', t: 'CN^{-}(aq)', color: ANION_INK}];
const K11 = cues(sc(T), {turn: 'Your turn', meth: 'Methanoic acid', ant: 'ant stings', kaM: ['Ka of 1.8', 1], hcn: 'Hydrogen cyanide', kaH: ['Ka of 6.2', 1], one: 'One: write', hcnW: 'H C N plus water', h3o: 'H three O plus and', two: 'Two: which', stronger: 'the stronger acid', why: 'and why', pause: 'Pause here'});
const S11 = {x: 96, y: 560, s: 50};
const ACID_CARD = (a: number, b: number) => [
	{text: 'methanoic acid, HCOOH: Ka = 1.8 × 10^{-4} (25 C)', at: a, size: 36},
	{text: 'hydrogen cyanide, HCN: Ka = 6.2 × 10^{-10} (25 C)', at: b, size: 36},
];
export const SceneAttempt: React.FC = () => {
	const h = hold(T);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K11.turn} />
				<GivensCard x={96} y={210} w={1000} h={260} at={K11.meth} lh={58} lines={ACID_CARD(K11.kaM + 10, K11.kaH + 10)} />
				<Sx x={1130} y={330} text="(the acid in ant stings)" size={32} color={INK_SOFT} hand at={K11.ant} />
				<EqStrip items={withAt(HCN_EQ, [K11.hcnW, K11.hcnW + 10, K11.hcnW + 16, K11.h3o - 8, K11.h3o, K11.h3o + 30, K11.h3o + 38])} x={S11.x} y={S11.y} size={S11.s} />
				<Sx x={96} y={680} text="1. Write Ka for this equation." size={48} color={INK} hand at={K11.one} />
				<Sx x={96} y={750} text="2. Which is the stronger acid? Why?" size={48} color={INK} hand at={K11.two} />
				<Sx x={96} y={900} text="Pause here to answer." size={58} color={AMBER_INK} hand at={K11.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1640} y={800} r={70} />
				{void K11.hcn}{void K11.stronger}{void K11.why}
			</Overlay>
		</>
	);
};

// ---------- 11a. Feedback: the expression ----------
const FE = 'feedback-expression';
const K12 = cues(sc(FE), {prod: 'Products over reactants', water: 'water left out', ka: ['Ka is H three', 1], times: 'times C N minus', over: 'over H C N', bottom: 'water on the bottom', take: 'take it out', solvent: 'the solvent'});
const S12 = {x: 96, y: 290, s: 50};
export const SceneFeedbackExpression: React.FC = () => {
	const c = (i: number) => spCentre(HCN_EQ, i, S12.s, S12.x, S12.y);
	return (
		<>
			<Overlay>
				<TaskLine text="1. Write Ka for this equation." at={-100} />
				<EqStrip items={HCN_EQ} x={S12.x} y={S12.y} size={S12.s} at={-100} />
				<Sx x={96} y={400} text="products over reactants, water left out" size={42} color={INK} hand at={K12.prod} />
				<Tray x={96} y={760} w={420} at={K12.prod + 10} items={[{t: 'H_2O(l)', at: K12.water, from: c(2), color: WATER_INK}]} />
				<KaFrac cx={1150} cy={540} size={62} name="a" prefixAt={K12.ka} barAt={K12.ka + 8}
					num={[{t: 'H_3O^{+}', at: K12.ka + 30, color: HPLUS_INK, from: c(4)}, {t: 'CN^{-}', at: K12.times + 14, color: ANION_INK, from: c(6)}]}
					den={[{t: 'HCN', at: K12.over + 14, color: MOL, from: c(0)}]} />
				<Tick x={1480} y={560} at={K12.over + 40} s={46} />
				<MistakeChip x={640} y={800} text="[H_3O^{+}][CN^{-}] / ([HCN][H_2O])" size={34} at={K12.bottom} note="water is the solvent: take it out" />
				{void K12.take}{void K12.solvent}
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback: the stronger acid ----------
const FS = 'feedback-stronger';
const K13 = cues(sc(FS), {two: 'Two', meth: 'Methanoic acid is stronger', bigger: 'its Ka is bigger', sameC: 'at the same concentration', more: 'more of its molecules', picked: 'If you picked', because: 'because 6.2 is bigger', powers: 'powers of ten first', tenM4: ['Ten to the minus four', 1], far: 'far bigger than', three: 'three hundred thousand', times: 'times bigger'});
export const SceneFeedbackStronger: React.FC = () => (
	<>
		<Overlay>
			<TaskLine text="2. Which is the stronger acid? Why?" at={-100} />
			<LogRuler R={R5} at={K13.two} bands={false} />
			<RMark R={R5} v={1.8e-4} at={K13.two + 16} label="HCOOH: Ka = 1.8 × 10^{-4}" up={86} size={30} color={TEAL} />
			<RMark R={R5} v={6.2e-10} at={K13.two + 24} label="HCN: Ka = 6.2 × 10^{-10}" up={86} size={30} color={MOL} />
			<Tick x={1254 + 230} y={290} at={K13.meth + 20} s={40} />
			<Arrow x1={560} y1={540} x2={1600} y2={540} at={K13.bigger} color={TEAL} width={5} />
			<Sx x={1600} y={584} text="stronger acid" size={38} color={TEAL} anchor="end" hand at={K13.bigger + 10} />
			<Sx x={96} y={650} text="bigger Ka: at the same concentration, more molecules split into ions" size={38} color={INK} hand at={K13.sameC} />
			<MistakeChip x={96} y={700} text="HCN, because 6.2 > 1.8" size={34} at={K13.because} />
			<Sx x={720} y={744} text="look at the powers of ten first" size={40} color={AMBER_INK} hand at={K13.powers} />
			<Sx x={96} y={860} text="10^{-4}" size={64} color={TEAL} weight={800} at={K13.tenM4} />
			<Sx x={290} y={860} text="against" size={44} color={INK} hand at={K13.tenM4 + 10} />
			<Sx x={460} y={860} text="10^{-10}" size={64} color={MOL} weight={800} at={K13.far} />
			<Ring cx={190} cy={826} rx={46} ry={32} at={K13.tenM4 + 14} color={AMBER} seed={3} />
			<Ring cx={590} cy={826} rx={60} ry={32} at={K13.far + 14} color={AMBER} seed={5} />
			<Sx x={780} y={856} text="a million times apart in the powers alone" size={36} color={INK_SOFT} hand at={K13.far + 24} />
			<Sx x={96} y={960} text="1.8 × 10^{-4} / 6.2 × 10^{-10} = 2.9 × 10^{5}" size={46} weight={700} at={K13.three - 20} />
			<Sx x={1060} y={960} text="about 300 000 times bigger" size={44} color={TEAL} hand at={K13.times} />
			{void K13.more}{void K13.picked}
		</Overlay>
	</>
);

// ---------- 12. Decision rule, boundary and handoff ----------
const DR = 'decision-rule';
const K14 = cues(sc(DR), {meet: 'acid or a base in water', write: 'write its K', prod: 'products over reactants', water: 'water left out', call: 'Call it Ka', kb: 'Kb for a base', read: 'read its size', same: 'same concentration', bigger: 'bigger means more split', using: 'Using Ka to calculate', link: 'the link between', mod6: 'Module 6', next: 'Next', ionic: 'ionic solid dissolves'});
export const SceneDecision: React.FC = () => {
	const lines = [
		{t: '1. Write K: products over reactants', at: K14.write},
		{t: '2. Leave water out (the solvent)', at: K14.water},
		{t: '3. Name it: Ka for an acid, Kb for a base', at: K14.call},
		{t: '4. Read its size: at the same concentration,', at: K14.read},
		{t: '    bigger means more split into ions', at: K14.bigger},
	];
	return (
		<>
			<Heading text="An acid or a base in water?" at={4} size={62} />
			<Overlay>
				<Fade at={K14.meet}>
					<rect x={96} y={210} width={1180} height={480} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
				</Fade>
				{lines.map((l, i) => <Sx key={i} x={130} y={300 + i * 82 - (i === 4 ? 30 : 0)} text={l.t} size={46} color={INK} hand at={l.at} />)}
				<Fade at={K14.using}>
					<rect x={1340} y={250} width={480} height={240} rx={22} fill="#f0ece4" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="9 7" />
					<Sx x={1370} y={306} text="Module 6:" size={38} color={INK_SOFT} hand at={K14.using} />
					<Sx x={1370} y={364} text="pH from Ka" size={36} color={INK_SOFT} hand at={K14.using + 10} />
					<Sx x={1370} y={420} text="Ka and Kb linked" size={36} color={INK_SOFT} hand at={K14.link} />
				</Fade>
				<Chip x={1640} y={440} w={150} h={56} text="later" size={34} color={AMBER_INK} at={K14.mod6} />
				<Chip x={96} y={800} w={980} text="Next: how an ionic solid dissolves in water" size={42} color={TEAL} at={K14.next + 6} />
				<Fade at={K14.ionic}><PicH p={SATURATED} x={1110} y={740} h={220} /></Fade>
				{void K14.prod}{void K14.kb}{void K14.same}
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'A strong acid (for example HCl) ionises completely in water. A weak acid only partly ionises: its molecules and ions are in equilibrium. No Ka value is used for a strong acid.',
	'Ka is K for a weak acid dissociating: HA(aq) ⇌ H^{+}(aq) + A^{-}(aq), Ka = [H^{+}][A^{-}] / [HA]. Written with water, HA + H_2O ⇌ H_3O^{+} + A^{-}, Ka = [H_3O^{+}][A^{-}] / [HA]. Water, the solvent, is left out.',
	'Kb is K for a weak base reacting with water: NH_3(aq) + H_2O(l) ⇌ NH_4^{+}(aq) + OH^{-}(aq), Kb = [NH_4^{+}][OH^{-}] / [NH_3].',
	'A bigger Ka means a stronger acid: at the same concentration and temperature, more of it is split into ions at equilibrium. Compare the powers of ten first. Ka is not [H^{+}] and not pH.',
	'The same rule gives Ksp for a solid dissolving: AgCl(s) ⇌ Ag^{+}(aq) + Cl^{-}(aq), Ksp = [Ag^{+}][Cl^{-}] (the solid is left out).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={790} aids={['Ka, Kb and Ksp are just K with a name tag.']} tag="products over reactants, water and solids left out; compare like with like at the same temperature" />
);
void DrawPath; void INK; void AMBER;
