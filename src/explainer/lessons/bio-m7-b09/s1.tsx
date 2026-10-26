// M7 B09 scenes 1 to 6: the hook (chickenpox virus, a time arrow to "years later", the same virus again, a grey
// "leftover antibodies?" chip that gets a question mark, a falling antibody line); the primary response (the cell count
// field with a few fitting cells, a small clone, the antibody graph with lag, low peak and illness band); what stays
// (plasma cells die, the curve falls but stays above the axis, memory cells marked, the chip crossed); the secondary
// response (the axis compresses, many cells already fit, fewer divisions, plasma cells, memory T cells, a fast, tall,
// long curve); reading the graph (log scale, a new antigen gets a primary response); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {ResponseStrip, stepRect} from '../bio-m7-b06/strip';
import type {StripProps} from '../bio-m7-b06/strip';
import {strip8} from '../bio-m7-b08/board';
import {BCell, cloneNodes} from '../bio-m7-b07/parts';
import {S} from './common';
import {PLATES, plasmaW} from './assets';
import {
	AMBER, AMBER_INK, Axes, Band, CTag, CellField, Curve, DrawPath, ExpArrow, FEW, GREY_INK, GTag, Gloss, HBracket, INK_SOFT, MEM, MistakeChip, PRIM, Pl, PlateB, Ring, SEC, Sx,
	TEAL, clamp01, gx, gy, interp, lerp, lerpG, prog, pulse, smooth, vis,
} from './parts';
import type {G, Pt} from './parts';

export const HEAD = 'Why is a second infection often stopped faster?';
/** The complete strip, small at the right (all chips written, grey). */
export const SMALL = {x: 1520, y: 200, w: 370, rh: 56, gap: 12, stepH: 40, size: 20};
export const strip9 = (over: Partial<StripProps> = {}, innatePulse = 0, tFlash: [number, number] = [0, 0]): StripProps => {
	const s = strip8(5, [0, 1, 2, 3, 4].map(i => ({lit: i === 3 ? tFlash[0] : i === 4 ? tFlash[1] : 0})), {...SMALL, ...over});
	s.rungs = s.rungs.map((r, i) => (i < 3 ? {...r, pulse: innatePulse} : r));
	return s;
};
/** Teal memory rings at the foot of both adaptive columns (scene 3 on). */
export const MemMarks: React.FC<{s: StripProps; o: number}> = ({s, o}) => {
	if (o <= 0.01) return null;
	return <g opacity={o}>{[0, 1].map(c => { const r = stepRect(s, 3, 4, c as 0 | 1); return <ellipse key={c} cx={r.x + r.w / 2} cy={r.y + r.h + 22} rx={r.w * 0.36} ry={12} fill="none" stroke={TEAL} strokeWidth={4} />; })}</g>;
};
export const fieldPt = (i: number, x = 120, y = 210, dx = 86, dy = 56): Pt => [x + (i % 10) * dx, y + Math.floor(i / 10) * dy];
export const G2: G = {x0: 170, y0: 540, w: 1150, h: 380};
/** Antibody level for the whole story: primary from day 0, secondary from day `t2`. */
export const story = (t2: number) => (t: number) => (t < t2 ? interp(PRIM, t) : Math.max(interp(PRIM, t), interp(SEC, t - t2)));

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {years: 'Years later', breathe: 'breathe in the', leftover: 'antibodies from the first', fallen: 'fallen far below', stop: 'stopping the virus'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const lineP = prog(f, K1.fallen, 30);
	const n = 30;
	const pts = Array.from({length: n + 1}, (_, i) => {
		const u = i / n;
		return [lerp(200, 1240, u), lerp(560, 690, 1 - Math.exp(-u * 4)) - 10 * Math.exp(-u * 6)] as Pt;
	});
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<>
			<Heading text={HEAD} at={K1.stop + 6} size={56} />
			<Overlay>
				<Pl p={PLATES.varicella} cx={300} cy={400} w={300} o={prog(f, 0, 16)} />
				<GTag x={120} y={590} text="chickenpox virus (varicella-zoster), drawn far larger than real" at={12} size={22} out={K1.fallen} />
				{f >= K1.years ? <DrawPath d="M200,740 L1250,740" at={K1.years} dur={24} color={GREY_INK} width={4} /> : null}
				{[200, 1250].map((x, i) => <line key={i} x1={x} x2={x} y1={728} y2={752} stroke={GREY_INK} strokeWidth={4} opacity={prog(f, K1.years + 10 + i * 10, 8)} />)}
				<Sx x={200} y={792} text="first infection" size={28} color={GREY_INK} weight={600} anchor="middle" at={K1.years + 10} />
				<Sx x={1250} y={792} text="years later" size={28} color={GREY_INK} weight={600} anchor="middle" at={K1.years + 20} />
				<Pl p={PLATES.varicella} cx={lerp(1500, 1250, smooth(prog(f, K1.breathe, 24)))} cy={400} w={240} o={prog(f, K1.breathe, 14)} />
				<CTag x={960} y={200} text="same virus, years later" at={K1.breathe + 16} color={TEAL} size={30} dim={prog(f, K1.leftover, 10)} />
				<CTag x={520} y={880} text="leftover antibodies?" at={K1.leftover + 6} color={GREY_INK} size={32} />
				{lineP > 0.01 ? <path d={d} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - lineP} /> : null}
				<GTag x={220} y={500} text="antibody level" at={K1.fallen + 8} size={22} />
				<Sx x={890} y={930} text="?" size={64} color={GREY_INK} weight={800} at={K1.fallen + 30} />
			</Overlay>
		</>
	);
};

// ---------- 2. The first time ----------
const K2 = cues(S('primary'), {few: 'only a few B', selected: 'selected and divide', innate: 'innate defences', week: 'a week or', peak: 'they peak later', sick: 'you get sick', primary: 'primary response'});
export const ScenePrimary: React.FC = () => {
	const f = useCurrentFrame();
	const tEnd = f < K2.week ? 0 : f < K2.peak ? lerp(0, 10, smooth(prog(f, K2.week, 40))) : lerp(10, 18, smooth(prog(f, K2.peak, 30)));
	const isP = prog(f, K2.primary + 4, 12);
	void fieldPt;
	const lv = cloneNodes(1180, 330, 36, 70);
	const clO = vis(f, K2.selected + 4, K2.week + 30, 12);
	const fn = (t: number) => interp(PRIM, t);
	return (
		<Overlay>
			<ResponseStrip {...strip9({}, pulse(f, K2.innate + 4, 40))} o={prog(f, 0, 16)} />
			<GTag x={1510} y={760} text="b06" at={K2.innate + 6} out={K2.week + 20} size={22} />
			<CellField x={120} y={210} o={prog(f, 0, 16)} lit={FEW} litO={prog(f, K2.few + 10, 12)} />
			<CTag x={1010} y={200} text="a few fitting cells" at={K2.few + 16} color={TEAL} size={28} dim={prog(f, K2.selected, 10)} />
			{clO > 0.01 ? (
				<g opacity={clO}>
					{lv.slice(1).map((nodes, l) => nodes.map((p, i) => {
						const par = lv[l][Math.floor(i / 2)];
						return <g key={`${l}-${i}`}><line x1={par[0]} y1={par[1]} x2={p[0]} y2={p[1]} stroke={INK_SOFT} strokeWidth={2} opacity={prog(f, K2.selected + 6 + l * 8, 8)} /><BCell cx={p[0]} cy={p[1]} w={20} k="tri" o={prog(f, K2.selected + 10 + l * 8, 8)} recL={340} /></g>;
					}))}
				</g>
			) : null}
			<GTag x={1010} y={280} text="b07, b08" at={K2.selected + 10} out={K2.week + 30} size={22} />
			<Axes g={G2} at={16} xMax={60} />
			<ExpArrow g={G2} xMax={60} t={0} label="first infection" at={24} />
			<Band g={G2} xMax={60} t0={1} t1={17} o={prog(f, K2.sick, 16)} label="illness while the response builds" />
			<HBracket g={G2} xMax={60} t0={0} t1={6.5} y={gy(G2, 1, 0) - 40} label="lag: cells being selected and multiplied" at={K2.week + 20} out={K2.primary + 20} />
			<Curve g={G2} xMax={60} fn={fn} t0={0} tEnd={tEnd} color={isP > 0.5 ? TEAL : INK_SOFT} glow={isP} />
			<CTag x={gx(G2, 60, 15) + 20} y={gy(G2, 100, 0) - 70} text="peak" at={K2.peak + 26} color={INK_SOFT} size={26} out={K2.primary} />
			<Gloss x={gx(G2, 60, 15) + 130} y={gy(G2, 100, 0) - 36} text="mainly IgM at first" at={K2.peak + 36} color={GREY_INK} size={22} out={K2.primary} />
			<CTag x={gx(G2, 60, 22)} y={G2.y0 + 20} text="primary response: the first response to an antigen" at={K2.primary + 8} color={TEAL} size={28} maxW={560} />
		</Overlay>
	);
};

// ---------- 3. What stays ----------
const K3 = cues(S('what-stays'), {cleared: 'is cleared', plasma: 'Most plasma cells', memory: 'made memory cells', years: 'for years', far: 'far more cells', stored: 'stored mainly'});
export const SceneStays: React.FC = () => {
	const f = useCurrentFrame();
	const tEnd = lerp(18, 60, smooth(prog(f, K3.cleared, K3.plasma + 70 - K3.cleared)));
	const memO = prog(f, K3.memory + 6, 16);
	const s = strip9();
	const PW = plasmaW(46);
	return (
		<Overlay>
			<ResponseStrip {...s} />
			<MemMarks s={s} o={prog(f, K3.memory + 20, 14)} />
			<GTag x={1505} y={790} text="memory B cells, b07; memory T cells, b08" at={K3.memory + 26} size={18} out={K3.far} />
			<CellField x={120} y={210} lit={memO > 0.5 ? MEM : FEW} litO={1} mem={MEM} memO={memO} pulseAmt={pulse(f, K3.stored + 6, 30)} flash={FEW} flashO={pulse(f, K3.far + 6, 40)} />
			{[0, 1, 2, 3, 4].map(i => <PlateB key={i} p={PLATES.plasma} cx={1060 + (i % 3) * 120} cy={300 + Math.floor(i / 3) * 110} w={PW} o={prog(f, 0, 12) * (1 - prog(f, K3.plasma + 8 + i * 9, 10))} />)}
			<CTag x={1010} y={420} text="plasma cells die: antibody falls" at={K3.plasma + 12} color={INK_SOFT} size={26} maxW={460} dim={prog(f, K3.memory, 10)} out={K3.years} />
			<CTag x={1010} y={420} text="memory cells: long-lived B and T cells" at={K3.memory + 12} color={TEAL} size={26} maxW={480} dim={prog(f, K3.years, 10)} out={K3.far} />
			<Axes g={G2} at={-100} xMax={60} />
			<ExpArrow g={G2} xMax={60} t={0} label="first infection" at={-100} />
			<Curve g={G2} xMax={60} fn={(t: number) => interp(PRIM, t)} t0={0} tEnd={tEnd} color={TEAL} />
			<HBracket g={G2} xMax={60} t0={30} t1={60} y={gy(G2, 25, 0) - 30} at={K3.years + 4} />
			<CTag x={gx(G2, 60, 28)} y={G2.y0 + 40} text="antibody low, memory cells still there" at={K3.years + 10} color={INK_SOFT} size={26} maxW={520} dim={prog(f, K3.far, 10)} />
			<CTag x={1010} y={420} text="before: a few. now: many" at={K3.far + 12} color={TEAL} size={28} dim={prog(f, K3.stored, 10)} />
			<MistakeChip x={gx(G2, 60, 22)} y={G2.y0 + 150} text="leftover antibodies?" at={K3.far + 30} cross={K3.stored - 4} size={28} />
			<Gloss x={gx(G2, 60, 22)} y={G2.y0 + 240} text="mainly memory cells, not leftover antibody" at={K3.stored} color={GREY_INK} size={22} />
			<CTag x={1010} y={490} text="memory: mainly in cells" at={K3.stored + 12} color={TEAL} size={28} />
		</Overlay>
	);
};

// ---------- 4. The second time ----------
const K4 = cues(S('secondary'), {again: 'arrives again', waiting: 'already waiting', fewer: 'fewer divisions', fast: 'plasma cells fast', helpers: 'Memory helper T', cyto: 'memory cytotoxic', rise: 'rise within days', higher: 'climb far higher', longer: 'stay up longer', secondary: 'secondary response', sick: 'feel sick'});
export const T2 = 70;
export const SceneSecondary: React.FC = () => {
	const f = useCurrentFrame();
	const xMax = lerp(60, 110, smooth(prog(f, K4.again, 30)));
	const tEnd = f < K4.rise ? T2 : f < K4.higher ? lerp(T2, T2 + 3, prog(f, K4.rise, 30)) : f < K4.longer ? lerp(T2 + 3, T2 + 9, prog(f, K4.higher, 30)) : lerp(T2 + 9, 110, smooth(prog(f, K4.longer, 40)));
	const isS = prog(f, K4.secondary + 4, 12);
	const fn = story(T2);
	const memCells = MEM.filter(i => i < 40);
	const plasmaIdx = memCells.slice(0, 6);
	const root = fieldPt(MEM[6]);
	const lv = cloneNodes(root[0] + 30, root[1] + 110, 40, 60).slice(0, 3);
	const clO = vis(f, K4.fewer + 4, K4.helpers + 10, 12);
	const s = strip9({}, 0, [pulse(f, K4.helpers + 10, 30), pulse(f, K4.cyto + 10, 30)]);
	return (
		<Overlay>
			<ResponseStrip {...s} />
			<MemMarks s={s} o={1} />
			<GTag x={1505} y={790} text="b08" at={K4.helpers + 10} out={K4.rise} size={22} />
			<CellField x={120} y={210} lit={MEM} mem={MEM} pulseAmt={pulse(f, K4.waiting + 6, 30) + pulse(f, K4.helpers + 4, 30)} plasma={plasmaIdx} plasmaT={prog(f, K4.fast + 6, 20)} />
			<CTag x={1010} y={200} text="many already fit" at={K4.waiting + 12} color={TEAL} size={28} dim={prog(f, K4.fewer, 10)} out={K4.fast} />
			{clO > 0.01 ? (
				<g opacity={clO}>
					{lv.slice(1).map((nodes, l) => nodes.map((p, i) => {
						const par = lv[l][Math.floor(i / 2)];
						return <g key={`${l}-${i}`}><line x1={par[0]} y1={par[1]} x2={p[0]} y2={p[1]} stroke={INK_SOFT} strokeWidth={2} opacity={prog(f, K4.fewer + 6 + l * 8, 8)} /><BCell cx={p[0]} cy={p[1]} w={22} k="tri" o={prog(f, K4.fewer + 10 + l * 8, 8)} recL={340} /></g>;
					}))}
				</g>
			) : null}
			<CTag x={1010} y={280} text="fewer divisions" at={K4.fewer + 12} color={TEAL} size={28} dim={prog(f, K4.fast, 10)} out={K4.helpers} />
			<CTag x={1010} y={360} text="quickly become plasma cells" at={K4.fast + 14} color={TEAL} size={28} dim={prog(f, K4.cyto, 10)} out={K4.rise} />
			<Axes g={G2} at={-100} xMax={xMax} />
			<ExpArrow g={G2} xMax={xMax} t={0} label="first infection" at={-100} />
			<ExpArrow g={G2} xMax={xMax} t={T2} label="same virus again" at={K4.again + 6} />
			<Band g={G2} xMax={xMax} t0={T2 + 0.5} t1={T2 + 4} o={vis(f, K4.sick, K4.sick + 50, 12) * 0.5} label="often no illness" labelY={G2.y0 + G2.h - 70} />
			<Curve g={G2} xMax={xMax} fn={fn} t0={0} tEnd={tEnd} color={TEAL} />
			{tEnd > T2 ? <Curve g={G2} xMax={xMax} fn={fn} t0={T2} tEnd={tEnd} color={isS > 0.5 ? AMBER : INK_SOFT} glow={isS} width={7} /> : null}
			<HBracket g={G2} xMax={xMax} t0={T2} t1={T2 + 2.5} y={gy(G2, 25, 0) - 40} label="short lag" at={K4.rise + 10} out={K4.secondary} />
			<Gloss x={gx(G2, xMax, T2 - 48)} y={G2.y0 + 120} text="mainly IgG; binds more tightly" at={K4.higher + 30} color={GREY_INK} size={22} out={K4.secondary} />
			<CTag x={gx(G2, xMax, T2 - 48)} y={G2.y0 + 10} text="secondary response: same antigen, again" at={K4.secondary + 8} color={AMBER_INK} size={26} maxW={380} />
			{void Ring}{void clamp01}
		</Overlay>
	);
};

// ---------- 5. Reading the graph ----------
const K5 = cues(S('read-graph'), {hump: 'slow, low hump', tall: 'fast, tall peak', log: 'often logarithmic', ten: 'ten to a', same: 'same antigen', different: 'a different antigen', nomem: 'no memory cells'});
export const G5: G = {x0: 170, y0: 230, w: 1150, h: 620};
export const SceneReadGraph: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 26));
	const g = lerpG(G2, G5, m);
	const logT = smooth(prog(f, K5.log + 6, 30));
	const fn = story(T2);
	const pk1 = gy(g, 100, logT), pk2 = gy(g, 1000, logT);
	const bx = gx(g, 110, T2 + 14);
	const newT = f < K5.different ? T2 : lerp(T2, 110, smooth(prog(f, K5.different + 10, 50)));
	return (
		<Overlay>
			<ResponseStrip {...strip9()} />
			<CellField x={120} y={210} lit={MEM} mem={MEM} o={1 - m} />
			<Axes g={g} at={-100} xMax={110} logT={logT} />
			<ExpArrow g={g} xMax={110} t={0} label="first infection" at={-100} />
			<ExpArrow g={g} xMax={110} t={T2} label="same virus again" at={-100} />
			<Curve g={g} xMax={110} logT={logT} fn={fn} t0={0} tEnd={T2} color={TEAL} width={6 + 3 * vis(f, K5.hump, K5.tall, 10)} glow={vis(f, K5.hump, K5.tall, 10)} />
			<Curve g={g} xMax={110} logT={logT} fn={fn} t0={T2} tEnd={110} color={AMBER} width={7 + 3 * vis(f, K5.tall, K5.log, 10)} glow={vis(f, K5.tall, K5.log, 10)} />
			<CTag x={gx(g, 110, 16)} y={pk1 - 90} text="primary: slow, low" at={K5.hump + 6} color={TEAL} size={28} dim={prog(f, K5.tall, 10)} out={K5.log} />
			<CTag x={gx(g, 110, T2 + 12)} y={pk2 + 20} text="secondary: fast, tall" at={K5.tall + 6} color={AMBER_INK} size={28} dim={prog(f, K5.log, 10)} out={K5.ten} />
			<Gloss x={g.x0 + 20} y={g.y0 - 20} text="log scale: each step is ten times more" at={K5.log + 30} color={INK_SOFT} size={26} out={K5.different} />
			{f >= K5.ten ? <g opacity={1 - prog(f, K5.different, 12)}><DrawPath d={`M${bx},${pk1} L${bx + 18},${pk1} L${bx + 18},${pk2} L${bx},${pk2}`} at={K5.ten} dur={14} color={GREY_INK} width={4} /></g> : null}
			<CTag x={bx + 40} y={(pk1 + pk2) / 2 - 24} text="10 to 100 times higher" at={K5.ten + 10} color={INK_SOFT} size={28} out={K5.different} />
			<ExpArrow g={g} xMax={110} t={T2} label="+ a new antigen" at={K5.different + 4} dy={40} color={GREY_INK} />
			{f >= K5.different + 10 ? <Curve g={g} xMax={110} logT={logT} fn={(t: number) => interp(PRIM, t - T2)} t0={T2} tEnd={newT} color={GREY_INK} dash="14 10" width={5} /> : null}
			<CTag x={gx(g, 110, T2 + 18)} y={gy(g, 60, logT) + 10} text="new antigen: primary response" at={K5.different + 30} color={GREY_INK} size={26} maxW={420} />
			<g opacity={prog(f, K5.nomem, 14)}><g transform="translate(1000,975) scale(0.42) translate(-120,-210)"><CellField x={120} y={210} lit={[]} /></g></g>
			<GTag x={1370} y={990} text="no memory for it" at={K5.nomem + 10} size={22} />
			{void K5.same}
		</Overlay>
	);
};

// ---------- 6. Memory ----------
const K6 = cues(S('memory'), {sec: 'second exposure', sooner: 'starts sooner', more: 'much more antibody', lasts: 'lasts longer', already: 'already there'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const g = G5;
	const fn = story(T2);
	const pk2 = gy(g, 1000, 1);
	return (
		<Overlay>
			<ResponseStrip {...strip9()} />
			<Sx x={170} y={190} text="Second exposure: faster, bigger, longer." size={64} color={AMBER_INK} hand weight={700} at={K6.sec} />
			<Axes g={g} at={-100} xMax={110} logT={1} />
			<ExpArrow g={g} xMax={110} t={0} label="first infection" at={-100} />
			<ExpArrow g={g} xMax={110} t={T2} label="same virus again" at={-100} />
			<Curve g={g} xMax={110} logT={1} fn={fn} t0={0} tEnd={T2} color={TEAL} />
			<Curve g={g} xMax={110} logT={1} fn={fn} t0={T2} tEnd={110} color={AMBER} width={7} glow={pulse(f, K6.lasts + 4, 40)} />
			<HBracket g={g} xMax={110} t0={T2} t1={T2 + 2.5} y={gy(g, 25, 1) - 40} label="short lag" at={K6.sooner} color={pulse(f, K6.sooner + 2, 40) > 0.3 ? AMBER_INK : GREY_INK} />
			<Ring cx={gx(g, 110, T2 + 8)} cy={pk2} rx={60} ry={40} at={K6.more + 4} out={K6.lasts} color={AMBER} />
			<HBracket g={g} xMax={110} t0={T2 + 12} t1={108} y={gy(g, 380, 1) - 50} label="lasts longer" at={K6.lasts + 4} color={AMBER_INK} />
			<g opacity={prog(f, K6.already, 14)}><g transform="translate(1000,975) scale(0.42) translate(-120,-210)"><CellField x={120} y={210} lit={MEM} mem={MEM} /></g></g>
			{void TEAL}
		</Overlay>
	);
};
