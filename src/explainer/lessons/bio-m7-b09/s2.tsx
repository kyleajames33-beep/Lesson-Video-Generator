// M7 B09 scenes 7 to 12: vaccination (the vial, the forms of vaccine, a fresh graph where a vaccine gives a primary
// response with no illness band and a real infection meets a secondary response); boosters (a booster curve between,
// more memory cells, a crossed "a vaccine treats the disease" chip); active immunity (the two-by-two table's top row);
// passive immunity (the bottom row, no memory, a falling line, the placenta and breast milk); antivenom (the snake
// quadrant, the horse steps in words, antibodies binding venom at once, the primary curve too slow); two questions
// (acquired bracket, who and how arrows, the memory aid line, the snake and vaccine quadrants lit in turn).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {ResponseStrip} from '../bio-m7-b06/strip';
import {S} from './common';
import {PLATES} from './assets';
import {MemMarks, T2, strip9} from './s1';
import {
	AMBER, AMBER_INK, Axes, BOOST, CTag, CellField, Curve, DrawPath, ExpArrow, GREY_INK, GTag, Gloss, HBracket, ImmTable, INK_SOFT, MEM, MistakeChip, PRIM, PlainArrow, Pl,
	PlateB, Quad, SEC, Sx, TBL, TEAL, Yg, clamp01, gx, gy, interp, lerp, prog, pulse, quad, smooth, vis,
} from './parts';
import type {G, Pt} from './parts';

const G7: G = {x0: 170, y0: 590, w: 1150, h: 320};
const prim = (t: number) => interp(PRIM, t);
const secAfter = (base: (t: number) => number) => (t: number) => Math.max(base(t), interp(SEC, t - T2));

// ---------- 7. Vaccination ----------
const K7 = cues(S('vaccination'), {gives: 'A vaccine gives', disease: 'full disease', weakened: 'weakened live', killed: 'a killed pathogen', proteins: 'one of its', instr: 'or instructions', primary: 'makes a primary', real: 'a real infection'});
export const SceneVaccination: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = lerp(0, 45, smooth(prog(f, K7.primary + 10, 50)));
	const t2 = lerp(T2, 110, smooth(prog(f, K7.real + 10, 60)));
	const s = strip9();
	return (
		<Overlay>
			<ResponseStrip {...s} />
			<MemMarks s={s} o={1} />
			<Pl p={PLATES.vial} cx={260} cy={320} w={260} o={prog(f, 0, 16)} />
			<CTag x={150} y={420} text="vaccine" at={10} color={TEAL} size={28} />
			<CTag x={480} y={170} text="vaccine: antigen in a form that doesn't cause the full disease" at={K7.disease + 4} color={TEAL} size={28} maxW={880} dim={prog(f, K7.weakened, 10)} />
			<Pl p={PLATES.varicella} cx={540} cy={330} w={140} o={prog(f, K7.weakened, 14) * 0.55} />
			<CTag x={630} y={290} text="chickenpox vaccine" at={K7.weakened + 10} color={TEAL} size={26} dim={prog(f, K7.killed, 10)} />
			<CTag x={120} y={490} text="live attenuated" at={K7.weakened + 18} color={GREY_INK} size={22} dim={prog(f, K7.killed, 10)} />
			<CTag x={330} y={490} text="inactivated" at={K7.killed + 6} color={GREY_INK} size={22} dim={prog(f, K7.proteins, 10)} />
			<CTag x={510} y={490} text="subunit (one protein)" at={K7.proteins + 6} color={GREY_INK} size={22} dim={prog(f, K7.instr, 10)} />
			<CTag x={790} y={490} text="mRNA instructions" at={K7.instr + 6} color={GREY_INK} size={22} dim={prog(f, K7.primary, 10)} />
			<GTag x={1060} y={490} text="Jenner, 1796: cowpox" at={K7.instr + 20} size={20} />
			<g transform="translate(980,250) scale(0.4) translate(-120,-210)"><CellField x={120} y={210} lit={MEM} litO={prog(f, K7.primary + 40, 16)} mem={MEM} memO={prog(f, K7.primary + 40, 16)} /></g>
			<Axes g={G7} at={10} xMax={110} />
			<ExpArrow g={G7} xMax={110} t={0} label="vaccine" at={K7.primary + 4} />
			<Curve g={G7} xMax={110} fn={prim} t0={0} tEnd={Math.min(t1, f >= K7.real ? T2 : 45)} color={TEAL} />
			{f >= K7.real ? <Curve g={G7} xMax={110} fn={prim} t0={45} tEnd={T2} color={TEAL} /> : null}
			<CTag x={gx(G7, 110, 18)} y={G7.y0 + 120} text="memory, no illness" at={K7.primary + 40} color={TEAL} size={28} dim={prog(f, K7.real, 10)} />
			<ExpArrow g={G7} xMax={110} t={T2} label="real virus" at={K7.real + 4} />
			{f >= K7.real + 10 ? <Curve g={G7} xMax={110} fn={secAfter(prim)} t0={T2} tEnd={t2} color={AMBER} width={7} /> : null}
			<CTag x={gx(G7, 110, 82)} y={G7.y0 + 60} text="infection meets memory" at={K7.real + 40} color={AMBER_INK} size={28} maxW={300} />
		</Overlay>
	);
};

// ---------- 8. Boosters ----------
const K8 = cues(S('boosters'), {extra: 'an extra dose', adds: 'adds more memory', prepares: 'prepares you'});
const TB = 35;
export const SceneBoosters: React.FC = () => {
	const f = useCurrentFrame();
	const bu = smooth(prog(f, K8.extra + 10, 40));
	const tb = lerp(TB, T2, bu);
	const withB = (t: number) => Math.max(prim(t), t >= TB ? lerp(prim(t), interp(BOOST, t - TB), bu) : 0);
	const extra = [0, 7, 19, 31, 47];
	const s = strip9();
	return (
		<Overlay>
			<ResponseStrip {...s} />
			<MemMarks s={s} o={1} />
			<Pl p={PLATES.vial} cx={260} cy={320} w={260} />
			<CTag x={480} y={170} text="booster: a later extra dose of the same vaccine" at={K8.extra + 10} color={AMBER_INK} size={28} maxW={880} dim={prog(f, K8.adds, 10)} />
			<g transform="translate(980,250) scale(0.4) translate(-120,-210)"><CellField x={120} y={210} lit={[...MEM, ...extra.filter(i => prog(f, K8.adds + 6, 10) > 0.5)]} mem={MEM} flash={extra} flashO={vis(f, K8.adds + 6, K8.prepares, 10)} /></g>
			<CTag x={980} y={420} text="more memory cells" at={K8.adds + 12} color={TEAL} size={26} dim={prog(f, K8.prepares, 10)} />
			<Axes g={G7} at={-100} xMax={110} />
			<ExpArrow g={G7} xMax={110} t={0} label="vaccine" at={-100} />
			<ExpArrow g={G7} xMax={110} t={TB} label="booster" at={K8.extra + 4} />
			<ExpArrow g={G7} xMax={110} t={T2} label="real virus" at={-100} />
			<Curve g={G7} xMax={110} fn={prim} t0={0} tEnd={TB} color={TEAL} />
			<Curve g={G7} xMax={110} fn={prim} t0={TB} tEnd={T2} color={TEAL} o={1 - bu} />
			{bu > 0.01 ? <Curve g={G7} xMax={110} fn={withB} t0={TB} tEnd={tb} color={AMBER} width={6} /> : null}
			<Curve g={G7} xMax={110} fn={secAfter(withB)} t0={T2} tEnd={110} color={AMBER} width={7} />
			<MistakeChip x={480} y={380} text="a vaccine treats the disease" at={K8.prepares} cross={K8.prepares + 18} size={28} />
			<Gloss x={484} y={470} text="it builds memory first" at={K8.prepares + 26} color={GREY_INK} />
			{void gy}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 9. Active immunity ----------
const K9 = cues(S('active'), {active: 'active immunity', long: 'lasts a long', booster: 'a booster can', week: 'a week or', natural: 'natural active', artificial: 'artificial active'});
const rowY = (r: number) => TBL.y + TBL.hh + r * TBL.rh;
export const SceneActive: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<ResponseStrip {...strip9()} />
			<ImmTable at={0} rowAt={[K9.active + 4, 1e9]} rowLit={[prog(f, K9.active + 8, 10), 0]} />
			<CTag x={120} y={160} text="active: your own response; memory cells" at={K9.active + 10} color={TEAL} size={30} maxW={1100} />
			<Gloss x={TBL.x + 22} y={rowY(0) + 120} text="long-lasting" at={K9.long + 4} color={GREY_INK} size={24} />
			<Gloss x={TBL.x + 22} y={rowY(0) + 154} text="+ booster" at={K9.booster + 6} color={GREY_INK} size={22} />
			<Gloss x={TBL.x + 22} y={rowY(0) + 194} text="slow to start" at={K9.week + 4} color={GREY_INK} size={24} />
			<Quad r={0} c={0} at={K9.natural + 4} p={PLATES.varicella} label="catching the disease" pw={220} />
			<Quad r={0} c={1} at={K9.artificial + 4} p={PLATES.vial} label="vaccination" pw={300} />
		</Overlay>
	);
};
/** The table with the active row filled (scenes 10 to 12). */
const ActiveRow: React.FC<{dim?: [number, number]; lit?: [number, number]}> = ({dim = [0, 0], lit = [0, 0]}) => (
	<>
		<Gloss x={TBL.x + 22} y={rowY(0) + 120} text="long-lasting" at={-100} color={GREY_INK} size={24} />
		<Gloss x={TBL.x + 22} y={rowY(0) + 154} text="+ booster" at={-100} color={GREY_INK} size={22} />
		<Gloss x={TBL.x + 22} y={rowY(0) + 194} text="slow to start" at={-100} color={GREY_INK} size={24} />
		<Quad r={0} c={0} at={-100} p={PLATES.varicella} label="catching the disease" pw={220} dim={dim[0]} lit={lit[0]} />
		<Quad r={0} c={1} at={-100} p={PLATES.vial} label="vaccination" pw={300} dim={dim[1]} lit={lit[1]} />
	</>
);

// ---------- 10. Passive immunity ----------
const K10 = cues(S('passive'), {work: 'work straight away', form: 'form memory cells', broken: 'broken down over', placenta: 'the placenta', milk: 'breast milk', months: 'first months'});
/** The placenta quadrant content: the villus with antibodies crossing into it, and the gland beside it. */
const MotherQuad: React.FC<{at: number; milkAt: number; dim?: number}> = ({at, milkAt, dim = 0}) => {
	const f = useCurrentFrame();
	const Q = quad(1, 0);
	const c: Pt = [Q.x + Q.w / 2 - 50, Q.y + Q.h / 2 - 20];
	return (
		<Quad r={1} c={0} at={at} label="from the mother" dim={dim}>
			<PlateB p={PLATES.placenta} cx={c[0]} cy={c[1]} w={200} />
			{[0, 1, 2].map(i => {
				const u = ((((f - at) / 60 + i / 3) % 1) + 1) % 1;
				return f >= at + 10 ? <Yg key={i} x={lerp(c[0] - 150, c[0] - 10, u)} y={c[1] - 60 + i * 50} ang={0} L={30} k="tri" o={Math.min(1, u * 5, (1 - u) * 5)} /> : null;
			})}
			<PlateB p={PLATES.gland} cx={Q.x + Q.w - 90} cy={Q.y + 110} w={130} o={prog(f, milkAt, 12)} />
		</Quad>
	);
};
export const ScenePassive: React.FC = () => {
	const f = useCurrentFrame();
	const lineP = prog(f, K10.broken + 4, 30);
	const lx0 = TBL.x + 30, ly0 = rowY(1) + 150, lx1 = TBL.x + TBL.hw - 20, ly1 = rowY(1) + 262;
	const d = Array.from({length: 21}, (_, i) => { const u = i / 20; return `${i ? 'L' : 'M'}${lerp(lx0, lx1, u).toFixed(1)},${(ly0 + (ly1 - ly0) * (1 - Math.exp(-u * 3)) / (1 - Math.exp(-3))).toFixed(1)}`; }).join(' ');
	const Q10 = quad(1, 0), Q01 = quad(0, 1);
	return (
		<Overlay>
			<ResponseStrip {...strip9()} />
			<ImmTable at={-100} rowAt={[-100, 4]} rowLit={[0, prog(f, 8, 10)]} />
			<ActiveRow />
			<CTag x={120} y={160} text="passive: given ready-made antibodies; they make no memory" at={10} color={AMBER_INK} size={30} maxW={1150} />
			<Gloss x={TBL.x + 22} y={rowY(1) + 120} text="immediate" at={K10.work + 4} color={GREY_INK} size={24} />
			<g opacity={prog(f, K10.form, 14)}><g transform="translate(700,965) scale(0.4) translate(-120,-210)"><CellField x={120} y={210} lit={[]} /></g></g>
			<GTag x={1070} y={985} text="no memory from given antibodies" at={K10.form + 8} size={20} />
			<MistakeChip x={120} y={968} text="passive immunity leaves memory" at={K10.form + 14} cross={K10.form + 34} size={26} />
			{lineP > 0.01 ? <path d={d} fill="none" stroke={AMBER} strokeWidth={4} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - lineP} /> : null}
			<Gloss x={TBL.x + 110} y={rowY(1) + 190} text="fades" at={K10.broken + 20} color={GREY_INK} size={22} />
			<Gloss x={TBL.x + 22} y={rowY(1) + 290} text="weeks to months" at={K10.broken + 30} color={GREY_INK} size={18} out={K10.months} />
			<Gloss x={TBL.x + 22} y={rowY(1) + 290} text="first months" at={K10.months + 4} color={GREY_INK} size={18} />
			<MotherQuad at={K10.placenta + 4} milkAt={K10.milk + 4} />
			<GTag x={Q10.x + 14} y={Q10.y + 14} text="antibodies cross the placenta" at={K10.placenta + 14} size={18} out={K10.months} />
			<GTag x={Q10.x + Q10.w - 170} y={Q10.y + 180} text="breast milk" at={K10.milk + 10} size={18} />
			{f >= K10.months + 10 ? <PlainArrow x1={Q10.x + Q10.w - 40} y1={Q10.y + 30} x2={Q01.x + 60} y2={Q01.y + Q01.h - 70} at={K10.months + 10} color={GREY_INK} width={4} dash="10 8" /> : null}
			<GTag x={Q01.x + 70} y={Q01.y + Q01.h + 14} text="then its own vaccines" at={K10.months + 24} size={18} />
		</Overlay>
	);
};

// ---------- 11. Antivenom ----------
const K11 = cues(S('antivenom'), {injection: 'an injection of', antivenom: 'Antivenom for', giving: 'giving an animal', needs: 'needs those antibodies', own: 'their own primary'});
const SnakeQuad: React.FC<{at: number; dim?: number; lit?: number}> = ({at, dim = 0, lit = 0}) => <Quad r={1} c={1} at={at} p={PLATES.snake} label="antibody injection: antivenom" pw={420} dim={dim} lit={lit} />;
export const SceneAntivenom: React.FC = () => {
	const f = useCurrentFrame();
	const Q = quad(1, 1);
	const venom: Pt[] = [[Q.x + 130, Q.y + 70], [Q.x + 200, Q.y + 95], [Q.x + 270, Q.y + 65]];
	const gm: G = {x0: 150, y0: 960, w: 380, h: 80};
	return (
		<Overlay>
			<ResponseStrip {...strip9()} />
			<ImmTable at={-100} rowAt={[-100, -100]} rowLit={[0, 1]} />
			<ActiveRow />
			<Gloss x={TBL.x + 22} y={rowY(1) + 120} text="immediate" at={-100} color={GREY_INK} size={24} />
			<MotherQuad at={-100} milkAt={-100} />
			<SnakeQuad at={K11.injection} />
			<GTag x={Q.x + Q.w - 250} y={Q.y + 14} text="eastern brown snake" at={K11.antivenom + 6} size={18} />
			<Gloss x={700} y={950} text={'venom, small doses → horse makes antibodies → antibodies collected'} at={K11.giving + 4} color={GREY_INK} size={24} />
			{venom.map((v, i) => <circle key={i} cx={v[0]} cy={v[1]} r={9} fill="#9ab04a" stroke="#4a5a1a" strokeWidth={2} opacity={prog(f, K11.needs, 10)} />)}
			{venom.map((v, i) => { const u = smooth(prog(f, K11.needs + 8 + i * 5, 24)); return <Yg key={'y' + i} x={lerp(v[0], v[0], u)} y={lerp(v[1] + 120, v[1] + 46, u)} ang={-Math.PI / 2} L={40} k="tri" o={prog(f, K11.needs + 8 + i * 5, 8)} />; })}
			<CTag x={Q.x + 20} y={Q.y + Q.h - 104} text="binds venom at once" at={K11.needs + 30} color={AMBER_INK} size={24} dim={prog(f, K11.own, 10)} />
			<g opacity={prog(f, K11.own, 14)} style={{filter: 'grayscale(0.9)'}}>
				<Axes g={gm} at={K11.own} xMax={30} xLabel="" yLabel="" size={18} />
				<Curve g={gm} xMax={30} fn={prim} t0={0} tEnd={30} color={GREY_INK} width={4} />
			</g>
			<HBracket g={gm} xMax={30} t0={0} t1={6.5} y={gm.y0 + gm.h - 26} at={K11.own + 10} color={pulse(f, K11.own + 20, 40) > 0.3 ? AMBER_INK : GREY_INK} size={18} />
			<CTag x={560} y={1000} text="too slow for venom" at={K11.own + 16} color={AMBER_INK} size={26} />
			{void DrawPath}{void clamp01}
		</Overlay>
	);
};

// ---------- 12. Two questions ----------
const K12 = cues(S('two-questions'), {acquired: 'both acquired', innate: 'the innate defences', who: 'Who made', how: 'And how did', activeYou: 'Active, you do', passiveYou: ['Passive', 2], snake: 'a snakebite needs', lasting: 'lasting protection', vaccine: 'such as a vaccine'});
export const SceneTwoQuestions: React.FC = () => {
	const f = useCurrentFrame();
	const snakeLit = vis(f, K12.snake, K12.lasting, 10);
	const actLit = vis(f, K12.lasting, K12.vaccine, 10);
	const vacLit = prog(f, K12.vaccine, 10);
	const focus = Math.max(snakeLit, actLit, vacLit);
	const s = strip9({}, pulse(f, K12.innate + 4, 40));
	const rowL: [number, number] = [1 - 0.5 * vis(f, K12.passiveYou, K12.snake, 10) + pulse(f, K12.activeYou, 30), 1 + pulse(f, K12.passiveYou, 30)];
	return (
		<Overlay>
			<ResponseStrip {...s} />
			<GTag x={1520} y={150} text="innate: born with it" at={K12.innate + 6} out={K12.who} size={22} />
			<ImmTable at={-100} rowAt={[-100, -100]} rowLit={[clamp01(rowL[0]), clamp01(rowL[1])]} />
			<ActiveRow dim={[focus * (1 - actLit), focus * (1 - Math.max(actLit, vacLit))]} lit={[actLit, Math.max(actLit, vacLit)]} />
			<Gloss x={TBL.x + 22} y={rowY(1) + 120} text="immediate" at={-100} color={GREY_INK} size={24} />
			<MotherQuad at={-100} milkAt={-100} dim={focus} />
			<SnakeQuad at={-100} dim={focus * (1 - snakeLit)} lit={snakeLit} />
			{f >= K12.acquired ? <DrawPath d={`M${TBL.x - 6},${rowY(0) + 10} L${TBL.x - 26},${rowY(0) + 10} L${TBL.x - 26},${rowY(2) - 10} L${TBL.x - 6},${rowY(2) - 10}`} at={K12.acquired + 4} dur={16} color={GREY_INK} width={4} /> : null}
			<CTag x={120} y={160} text="acquired: gained during life (active or passive)" at={K12.acquired + 10} color={GREY_INK} size={28} maxW={1100} dim={prog(f, K12.innate + 30, 10)} out={K12.who} />
			{f >= K12.who + 4 ? <PlainArrow x1={TBL.x + TBL.hw - 22} y1={rowY(0) + 40} x2={TBL.x + TBL.hw - 22} y2={rowY(1) + 60} at={K12.who + 4} color={TEAL} width={5} out={K12.snake} /> : null}
			<CTag x={120} y={160} text="who made them? active or passive" at={K12.who + 10} color={TEAL} size={28} dim={prog(f, K12.how, 10)} out={K12.snake} />
			{f >= K12.how + 4 ? <PlainArrow x1={TBL.x + TBL.hw + 60} y1={TBL.y - 16} x2={TBL.x + TBL.hw + TBL.cw + 300} y2={TBL.y - 16} at={K12.how + 4} color={AMBER} width={5} out={K12.snake} /> : null}
			<CTag x={760} y={160} text="how? natural or artificial" at={K12.how + 10} color={AMBER_INK} size={28} out={K12.snake} />
			<Sx x={730} y={1000} text="Active: you do the work. Passive: you're handed the antibodies." size={44} color={TEAL} hand weight={700} anchor="middle" at={K12.activeYou} />
			<CTag x={120} y={160} text="now: passive" at={K12.snake + 10} color={AMBER_INK} size={30} out={K12.lasting} />
			<CTag x={120} y={160} text="lasting: active" at={K12.lasting + 10} color={TEAL} size={30} />
			{void Sx}{void AMBER}
		</Overlay>
	);
};
