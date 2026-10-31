// M8 C03b scenes 7 to 11: ammonia confirms (dilute NH3 clears AgCl, concentrated clears AgBr, AgI stays; the complex
// wrap), phosphate (in acid it becomes HPO4 2- and won't precipitate; neutral AgNO3 gives yellow Ag3PO4 that dissolves
// in nitric acid while AgI stays), hydroxide last (basic, but so are carbonate and phosphate; warm with an ammonium
// salt; NH3 turns damp red litmus blue), the full anion flowchart and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Heading, LITMUS, TUBES, TUBE_A, sc} from './common';
import {
	ACHART_E, ACHART_N, AChip, AFAM, C_AC, C_AG, C_BA, C_CX, C_OH, C_PO, DimG, FallDrop, Fade, FlaskStates, GREYX, INK, INK_SOFT, ION, NH3, Note, Overlay, PPT, PicF, Shimmer, SwapLens, Sx, Wisps,
	WrapLens, allT, picW, smooth, tubePt,
} from './parts';
import type {CT} from './parts';
import {Anions, Chart2, HAL, HH, HY, TH, TX, TY, TubeDrop, agT, merge} from './s1';

const dimFam = (...ks: (keyof typeof AFAM)[]): CT => merge(allT(['S'], -1000), ...ks.map(k => allT(AFAM[k], -1000, -1000, 0.3)));

// ---------- 7. Ammonia confirms ----------
const K7 = cues(sc('ammonia-confirms'), {alike: 'look alike', confirm: 'confirm with ammonia', molecules: 'Ammonia molecules', bond: 'bond to silver', complex: 'form a complex', pulls: 'pulls the solid', less: 'less soluble', cl: 'Silver chloride dissolves', dilute: 'dilute ammonia', br: 'bromide needs', conc: 'concentrated', i: 'iodide stays', end: ['ammonia', 5]});
export const SceneAmmonia: React.FC = () => {
	const T: CT = merge(dimFam('ac', 'ba'), agT(), {
		h1: {at: -1000, subAt: K7.dilute, glow: K7.dilute, dim: 800, to: 0.32}, h2: {at: -1000, subAt: K7.conc, glow: K7.conc, dim: 800, to: 0.32}, h3: {at: -1000, subAt: K7.end, glow: K7.end, dim: 800, to: 0.32},
		c3: {at: -1000, dim: 800, to: 0.32}, r3: {at: -1000, dim: 800, to: 0.32}, e3a: {at: -1000, dim: 800, to: 0.32},
	});
	const ladder = [{a: 'dilute', b: 'Cl^{−}', at: K7.dilute}, {a: 'concentrated', b: 'Br^{−}', at: K7.conc}, {a: 'neither', b: 'I^{−}', at: K7.end}];
	return (
		<>
			<Anions st={{'Cl^{−}': {g: [[K7.cl, K7.br]]}, 'Br^{−}': {g: [[K7.br, K7.i]]}, 'I^{−}': {g: [[K7.i, 836]]}}} />
			<Heading text="Ammonia confirms" at={4} size={56} color={C_CX} />
			<Overlay>
				{HAL.map((h, i) => {
					const [mx, my] = tubePt(h.x, HY, HH, TUBE_A.cx, TUBE_A.mouth);
					const [, sy] = tubePt(h.x, HY, HH, TUBE_A.cx, TUBE_A.surf);
					const st = i === 0 ? [{p: h.p, at: -100}, {p: TUBES.clear, at: K7.cl + 20, dur: 36}] : i === 1 ? [{p: h.p, at: -100}, {p: TUBES.clear, at: K7.conc + 20, dur: 36}] : [{p: h.p, at: -100}];
					const drops = [K7.cl - 14, K7.cl - 2, ...(i > 0 ? [K7.br + 20, K7.br + 34] : [])];
					const lad = ladder[i];
					return (
						<g key={i}>
							<FlaskStates x={h.x} y={HY} h={HH} states={st} />
							{drops.map((t, k) => <FallDrop key={k} x={mx} y0={my - 60} y1={sy + 6} at={t} color="#d9cdee" />)}
							<Note x={mx} y={HY + HH + 40} text={h.t} size={24} color={INK} anchor="middle" hand={false} at={-100} />
							<Note x={mx} y={HY + HH + 84} text={lad.a} size={28} color={C_CX} anchor="middle" at={lad.at} />
							<Note x={mx} y={HY + HH + 118} text={lad.b} size={28} color={INK} anchor="middle" hand={false} at={lad.at + 4} />
						</g>
					);
				})}
				<Note x={321} y={320} text="dilute NH_3" size={34} color={C_CX} anchor="middle" hand={false} at={K7.cl - 30} out={K7.br - 10} />
				<Note x={421} y={320} text="concentrated NH_3" size={34} color={C_CX} anchor="middle" hand={false} at={K7.br} />
				<Note x={321} y={HY + HH + 160} text="with enough excess" size={20} color={GREYX} anchor="middle" hand={false} at={K7.conc + 30} />
				<Note x={521} y={HY + HH + 160} text="AgI: doesn't dissolve" size={20} color={GREYX} anchor="middle" hand={false} at={K7.end} />
				<WrapLens cx={880} cy={850} r={110} at={K7.molecules - 10} out={K7.cl} metal={ION.AG} lig={NH3} n={2} wrapAt={K7.bond} breakAt={K7.pulls - 20} title="[Ag(NH_3)_2]^{+}" titleAt={K7.complex} />
				<AChip x={1060} y={830} text="less soluble → harder to dissolve" size={28} color={GREYX} hand={false} at={K7.less} />
				<Chart2 T={T} />
				{void K7.alike}{void K7.confirm}{void K7.i}
			</Overlay>
		</>
	);
};

// ---------- 8. Phosphate ----------
const K8 = cues(sc('phosphate'), {yellow: 'yellow silver solid', agpo: 'silver phosphate', apart: 'keep it apart', iodide: 'iodide', test: 'Test phosphate', acidified: 'acidified', inacid: 'In acid', pick: 'pick up', stop: 'stop precipitating', why: 'why acidifying', add: 'So add', neutral: ['neutral', 2], yppt: 'yellow precipitate', suggests: 'suggests', nitric: 'dilute nitric', dissolves: 'phosphate dissolves', doesnt: "doesn't"});
export const ScenePhosphate: React.FC = () => {
	const [mx, my] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const [, sy] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.surf);
	const IX = 330, IY = 560, IH = 260;
	const [imx, imy] = tubePt(IX, IY, IH, TUBE_A.cx, TUBE_A.mouth);
	const [, isy] = tubePt(IX, IY, IH, TUBE_A.cx, TUBE_A.surf);
	const T: CT = merge(dimFam('ac', 'ba', 'ag'), {c4: {at: K8.test}, r4: {at: K8.test, glow: K8.neutral}, e4a: {at: K8.suggests}, p1: {at: K8.suggests, glow: K8.suggests, subAt: K8.dissolves}});
	return (
		<>
			<Anions st={{'PO_4^{3−}': {g: [[K8.yellow, 1018]]}, 'I^{−}': {g: [[K8.iodide, K8.test]]}}} />
			<Heading text="Phosphate: a yellow that isn't iodide" at={4} size={56} color={C_PO} />
			<Overlay>
				<SwapLens cx={330} cy={560} r={170} at={K8.inacid - 10} out={K8.add - 6} a={ION.PO4} a2={ION.HPO4} b={ION.H} n={3} hit={K8.pick + 10} every={16} spect={ION.AG} nSpect={3} title="in acid: no Ag_3PO_4" titleAt={K8.stop} />
				<Note x={330} y={330} text="also keeps phosphate out of the halide test" size={24} color={INK_SOFT} anchor="middle" hand={false} at={K8.why} out={K8.add - 6} />
				<Fade at={K8.add - 10}>
					<TubeDrop states={[{p: TUBES.clear, at: -100}, {p: TUBES.ag3po4, at: K8.yppt - 6, dur: 24}, {p: TUBES.clear, at: K8.dissolves + 6, dur: 36}]} dropAt={K8.add} dropOut={K8.yppt + 20} drops={[K8.neutral, K8.neutral + 16]} color="#e6e8ec" label="AgNO_3" labelColor={C_AG} />
					<Note x={mx} y={TY + TH + 46} text="neutral portion" size={28} color={C_PO} anchor="middle" at={K8.neutral} />
					{[0, 1].map(k => <FallDrop key={k} x={mx} y0={my - 60} y1={sy + 6} at={K8.nitric + 10 + k * 14} color="#fbe3c8" />)}
				</Fade>
				<Fade at={K8.nitric - 10}>
					<PicF p={TUBES.agi} x={IX} y={IY} h={IH} />
					{[0, 1].map(k => <FallDrop key={k} x={imx} y0={imy - 60} y1={isy + 6} at={K8.nitric + 10 + k * 14} color="#fbe3c8" />)}
					<Note x={imx} y={IY + IH + 40} text="AgI stays yellow" size={24} color={PPT.yellowInk} anchor="middle" hand={false} at={K8.doesnt} />
					<Note x={(mx + imx) / 2} y={IY - 40} text="dilute HNO_3" size={30} color={C_AC} anchor="middle" hand={false} at={K8.nitric} />
				</Fade>
				<Note x={700} y={820} text="3Ag^{+} + PO_4^{3−} → Ag_3PO_4(s)" size={40} color={C_PO} hand={false} at={K8.suggests} />
				<Note x={700} y={890} text="Ag_3PO_4 dissolves in dilute HNO_3; AgI doesn't" size={32} color={INK} hand={false} at={K8.dissolves} />
				<Chart2 T={T} />
				{void K8.agpo}{void K8.apart}{void K8.acidified}
			</Overlay>
		</>
	);
};

// ---------- 9. Hydroxide: last, and why ----------
const K9 = cues(sc('hydroxide'), {last: 'Last', basic: 'basic', red: 'red litmus', carb: 'carbonate', rule: 'rule those', warm: 'warm a portion', amm: 'ammonium salt', take: 'Hydroxide ions take', release: 'release ammonia', hold: 'Hold damp', blue: ['blue', 2]});
export const SceneHydroxide: React.FC = () => {
	const f = useCurrentFrame();
	const HX = 60, HYy = 540, HHh = 340;
	const [mx, my] = tubePt(HX, HYy, HHh, TUBE_A.cx, TUBE_A.mouth);
	const [, by] = tubePt(HX, HYy, HHh, TUBE_A.cx, 1800);
	const LH = 110, lw = picW(LITMUS.red, LH);
	const mv = smooth(prog(f, K9.hold, 30));
	const lx = 60 + (mx - lw / 2 - 60) * mv, ly = 250 + (my - LH - 14 - 250) * mv;
	const T: CT = merge(dimFam('ac', 'ba', 'ag', 'po'), {
		a1: {at: -1000, dim: -1000, to: 0.3, glow: K9.rule}, p1: {at: -1000, dim: -1000, to: 0.3, glow: K9.rule},
		c5: {at: K9.warm}, r5: {at: K9.warm, glow: K9.amm}, e5a: {at: K9.blue}, o1: {at: K9.blue, glow: K9.blue},
	});
	return (
		<>
			<Anions st={{'OH^{−}': {g: [[K9.last, 891]]}, 'CO_3^{2−}': {g: [[K9.carb, K9.warm]]}, 'PO_4^{3−}': {g: [[K9.carb, K9.warm]]}}} />
			<Heading text="Hydroxide: last, and why" at={4} size={56} color={C_OH} />
			<Overlay>
				<Fade at={K9.red - 10}>
					<FlaskStates x={lx} y={ly} h={LH} states={[{p: LITMUS.red, at: -100}, {p: LITMUS.blue, at: K9.blue, dur: 24}]} />
				</Fade>
				<Note x={60 + lw + 20} y={300} text="basic: turns red litmus blue" size={28} color={INK} hand={false} at={K9.basic} out={K9.warm} />
				<AChip x={60} y={400} text="basic: CO_3^{2−}, PO_4^{3−} too" size={28} color={GREYX} hand={false} at={K9.carb} out={K9.warm} />
				<Note x={60} y={490} text="rule those out first" size={30} color={C_OH} at={K9.rule} out={K9.warm} />
				<Fade at={K9.warm - 10}>
					<TubeDrop x={HX} y={HYy} h={HHh} states={[{p: TUBES.clear, at: -100}]} dropAt={K9.amm} dropOut={K9.take} drops={[K9.amm + 20, K9.amm + 36]} color="#e3d9f2" label="NH_4Cl" labelColor={C_CX} ds={0.6} />
					<Shimmer x={mx} y={by + 20} w={100} at={K9.warm} />
					<Wisps x={mx} y={my - 6} at={K9.release} color="#8f7ab8" />
				</Fade>
				<Note x={lx + lw / 2} y={ly - 14} text="damp red litmus" size={22} color={INK_SOFT} anchor="middle" hand={false} at={K9.hold + 30} />
				<SwapLens cx={470} cy={720} r={125} at={K9.take - 20} a={ION.NH4} a2={ION.NH3g} b={ION.OH} b2={ION.H2O} n={3} hit={K9.take + 24} every={18} rise title="NH_3 gas rises" titleAt={K9.release} />
				<Note x={700} y={820} text="NH_4^{+} + OH^{−} → NH_3(g) + H_2O(l)" size={40} color={C_OH} hand={false} at={K9.release} />
				<Note x={700} y={890} text="NH_3 turns damp red litmus blue" size={32} color={INK} hand={false} at={K9.blue} />
				<Chart2 T={T} />
				{void Sx}
			</Overlay>
		</>
	);
};

// ---------- 10. The anion flowchart ----------
const K10 = cues(sc('flowchart'), {flow: 'flowchart', acid: 'Dilute acid first', fizz: 'fizz', vinegar: 'vinegar smell', barium: 'acidified barium', silver: 'acidified silver', split: 'ammonia to split', neutral: 'neutral silver', amm: 'ammonium test', last: 'last', each: 'Each test', next: 'next'});
export const SceneFlowchart: React.FC = () => {
	const fam = (k: keyof typeof AFAM, t: number) => Object.fromEntries(AFAM[k].map(id => [id, {at: -1000, dim: -1000, undim: t, to: 0.3}]));
	const T: CT = merge(allT(['S'], -1000), fam('ac', K10.acid), fam('ba', K10.barium), fam('ag', K10.silver), fam('po', K10.neutral), fam('oh', K10.amm), {
		a1: {at: -1000, dim: -1000, undim: K10.acid, to: 0.3, glow: K10.fizz}, a2: {at: -1000, dim: -1000, undim: K10.acid, to: 0.3, glow: K10.vinegar},
		b1: {at: -1000, dim: -1000, undim: K10.barium, to: 0.3, glow: K10.barium + 20},
		h1: {at: -1000, dim: -1000, undim: K10.silver, to: 0.3, glow: K10.split, subAt: -1000}, h2: {at: -1000, dim: -1000, undim: K10.silver, to: 0.3, glow: K10.split + 8, subAt: -1000}, h3: {at: -1000, dim: -1000, undim: K10.silver, to: 0.3, glow: K10.split + 16, subAt: -1000},
		p1: {at: -1000, dim: -1000, undim: K10.neutral, to: 0.3, glow: K10.neutral + 20}, o1: {at: -1000, dim: -1000, undim: K10.amm, to: 0.3, glow: K10.amm + 20},
		S: {at: -1000, glow: K10.each},
	});
	const order = [
		{t: '1  dilute acid', c: C_AC, at: K10.acid},
		{t: '2  acid, then Ba^{2+}', c: C_BA, at: K10.barium},
		{t: '3  HNO_3, then Ag^{+} (+ NH_3)', c: C_AG, at: K10.silver},
		{t: '4  neutral, then Ag^{+}', c: C_PO, at: K10.neutral},
		{t: '5  warm with NH_4^{+}, last', c: C_OH, at: K10.amm},
	];
	return (
		<>
			<Anions />
			<Heading text="The anion flowchart" at={4} size={56} />
			<Overlay>
				{order.map((o, i) => <Note key={i} x={60} y={280 + i * 80} text={o.t} size={32} color={o.c} hand={false} at={o.at} />)}
				<AChip x={60} y={720} text="fresh portion each test" size={40} color={INK} at={K10.next - 6} />
				<Note x={60} y={830} text="so one reagent can't spoil the next" size={28} color={INK_SOFT} at={K10.next + 10} />
				<Chart2 T={T} />
				{void K10.flow}{void K10.last}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {barium: 'for barium', halide: 'halide tests', first: 'acid first', using: 'using an', none: 'adds none', phos: 'Phosphate needs', neutral: 'neutral', silver: 'silver halides', white: 'white', cream: 'cream', pale: 'pale yellow', amm: 'ammonia dissolves', dilute: 'dilute', conc: 'concentrated', neither: 'neither'});
export const SceneAid: React.FC = () => {
	const COL = [140, 700, 1260];
	const sw = [{c: PPT.white, t: 'AgCl white', at: K11.white, n: 'dilute', nat: K11.dilute}, {c: '#ead9a6', t: 'AgBr cream', at: K11.cream, n: 'concentrated', nat: K11.conc}, {c: '#f2df6a', t: 'AgI pale yellow', at: K11.pale, n: 'neither', nat: K11.neither}];
	return (
		<>
			<Heading text="Keep it straight" at={4} size={56} />
			<Overlay>
				<Note x={96} y={290} text="Barium and halides: acid first," size={56} color={C_AC} at={K11.barium} />
				<Note x={96} y={370} text="adding none of the ions you're testing for" size={52} color={INK} at={K11.none} />
				<Note x={96} y={440} text="(HNO_3 before silver)" size={40} color={INK_SOFT} hand={false} at={K11.none + 40} />
				<Note x={96} y={540} text="Phosphate: a separate neutral portion." size={46} color={C_PO} at={K11.phos} />
				{sw.map((s, i) => (
					<g key={i}>
						<Fade at={s.at - 4}><rect x={COL[i]} y={640} width={60} height={44} rx={8} fill={s.c} stroke={INK_SOFT} strokeWidth={2.5} /></Fade>
						<Note x={COL[i] + 80} y={676} text={s.t} size={44} color={INK} at={s.at} />
						<Note x={COL[i] + 80} y={760} text={s.n} size={44} color={C_CX} at={s.nat} />
					</g>
				))}
				<Note x={96} y={760} text="NH_3:" size={40} color={C_CX} hand={false} at={K11.amm} />
				{void K11.halide}{void K11.first}{void K11.using}{void K11.neutral}{void K11.silver}{void DimG}
			</Overlay>
		</>
	);
};
