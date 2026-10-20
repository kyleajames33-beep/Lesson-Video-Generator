// M6 C05 scenes 5 to 8: the arrow says it; which acids are strong (the mnemonic and the HF trap); concentration is a
// separate dial (dilution and the 2 × 2 schematic grid); a concentrated weak acid can have the lower pH.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER} from './assets';
import {
	AChip, ACID, ACID_INK, An, Counter, Dial2, Dim, EqLine, Fade, Field, FieldLens, GREY_INK, H3O, HBracket, INK, INK_SOFT, LiquidBeaker, MistakeX, Note, OpGlow, Overlay, PROTON, Sx, TEAL, TTile,
	Under, eq, fitSize, keys, mw, picW, pulseAt, smooth, vis,
} from './parts';
import {LL, RL, StrongLens, WeakLens, Zoom} from './s1';

// ---------- 5. The arrow says it ----------
const H5 = 'arrows';
const K5 = cues(sc(H5), {eq: 'The equation has', strong: 'For a strong acid', single: 'single arrow', comp: 'to completion', weak: 'For a weak acid', double: 'double arrow, because', both: 'both going on', writing: 'Writing a double', wrong: "that's wrong"});
export const SceneArrows: React.FC = () => {
	const X = 330;
	const e1 = eq(['HCl(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'Cl^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K5.eq + 6 + i * 5));
	const e2 = eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K5.weak + 4 + i * 5));
	const S = Math.min(fitSize(e2, 1490, 54), 54);
	const Y1 = 400, Y2 = 780;
	return (
		<>
			<Heading text="The arrow says it" at={4} size={58} />
			<Overlay>
				<Zoom base={LL} pts={[[0, 290, 790, 150], [24, 180, Y1 - 20, 92]]}><StrongLens split={-1000} /></Zoom>
				<Zoom base={RL} pts={[[0, 1260, 590, 340], [24, 180, Y2 - 20, 92]]}><WeakLens ex={-1000} /></Zoom>
				<Dim at={K5.weak}><Note x={X} y={Y1 - 80} text="strong: complete" size={36} color={TEAL} at={K5.strong} /></Dim>
				<OpGlow items={e1} i={3} size={S} x={X} y={Y1} at={K5.single} len={50} />
				<EqLine items={e1} x={X} y={Y1} size={S} />
				<Dim at={K5.wrong}><Note x={X} y={Y2 - 80} text="weak: equilibrium" size={36} color={ACID_INK} at={K5.weak} /></Dim>
				<OpGlow items={e2} i={3} size={S} x={X} y={Y2} at={K5.double} len={50} color={ACID} />
				<EqLine items={e2} x={X} y={Y2} size={S} />
				<MistakeX x={X} y={Y1 + 50} text="HCl(aq) + H_2O(l) ⇌ ..." at={K5.writing} cross={K5.wrong} note="HCl ionises completely: →" size={34} />
				{void K5.comp}{void K5.both}
			</Overlay>
		</>
	);
};

// ---------- 6. Which acids are strong ----------
const H6 = 'strong-list';
const K6 = cues(sc(H6), {which: 'which acids are strong', six: 'learn six', so: 'So I Brought', each: 'each word gives', sulf: 'sulfuric', hi: 'hydroiodic', hbr: 'hydrobromic', nit: 'nitric', hcl: 'hydrochloric and', per: 'perchloric', treat: 'Treat other acids', hf: 'hydrofluoric acid', looks: 'it looks like', weak: "it's weak"});
const WORDS: [string, string][] = [['S', 'o'], ['I', ''], ['Br', 'ought'], ['N', 'o'], ['Cl', 'ean'], ['Cl', 'othes']];
const TILES = ['H_2SO_4', 'HI', 'HBr', 'HNO_3', 'HCl', 'HClO_4'];
const colX = (i: number) => 230 + 292 * i;
export const SceneStrongList: React.FC = () => {
	const f = useCurrentFrame();
	const wAt = [K6.so, K6.so + 8, K6.so + 12, K6.so + 24, K6.so + 34, K6.so + 44];
	const tAt = [K6.sulf, K6.hi, K6.hbr, K6.nit, K6.hcl, K6.per];
	const dimAll = 1 - 0.7 * prog(f, K6.hf, 16);
	const WS = 80, WY = 330, TY = 480;
	return (
		<>
			<Heading text="Which acids are strong?" at={4} size={58} />
			<Overlay>
				{WORDS.map(([k, rest], i) => {
					const wk = mw(k, WS, true, 700), wr = rest ? mw(rest, WS, true, 700) : 0;
					const x0 = colX(i) - (wk + wr) / 2;
					const lit = prog(f, tAt[i], 12);
					return (
						<g key={i} opacity={dimAll}>
							<Sx x={x0} y={WY} text={k} size={WS} color={lit > 0.5 ? TEAL : INK} hand at={wAt[i]} />
							{rest ? <Sx x={x0 + wk} y={WY} text={rest} size={WS} color={INK} hand at={wAt[i]} /> : null}
							{lit > 0.01 ? <rect x={x0 - 6} y={WY - WS * 0.78} width={wk + 12} height={WS * 0.96} rx={12} fill={TEAL} opacity={0.16 * lit} /> : null}
						</g>
					);
				})}
				{TILES.map((t, i) => (
					<g key={t} opacity={i === 4 ? 1 : dimAll}>
						<TTile x={colX(i)} y={TY} text={t} size={46} anchor="middle" at={tAt[i]} />
					</g>
				))}
				<g opacity={dimAll}><Sx x={colX(0)} y={TY + 74} text="(first H^{+})" size={28} color={INK_SOFT} anchor="middle" weight={600} at={K6.sulf + 10} /></g>
				<Dim at={K6.hf - 10} to={0.35}><Note x={600} y={680} text="others: weak unless told" size={38} color={GREY_INK} anchor="middle" at={K6.treat} /></Dim>
				<TTile x={colX(4)} y={TY + 150} text="HF" size={46} anchor="middle" at={K6.hf + 4} />
				<MistakeX x={colX(4)} y={TY + 220} text="HF is strong, like HCl" at={K6.looks} cross={K6.weak} note="HF is weak: ⇌" size={34} anchor="middle" />
				{void K6.which}{void K6.six}{void K6.each}
			</Overlay>
		</>
	);
};

// ---------- 7. Concentration is a separate dial ----------
const H7 = 'concentration';
const K7 = cues(sc(H7), {second: 'the second idea', conc: 'Concentration is how', dial: 'separate dial', add: 'Add water', dilute: 'becomes dilute', every: 'every molecule still', dsa: 'dilute strong acid', never: 'never a weak', dac: 'Dilute acetic acid', bigger: 'a bigger fraction', nowhere: 'nowhere near all', still: "still a weak acid", four: 'four combinations', concd: 'concentrated or dilute', sw: 'strong or weak'});
const G = {x: [820, 1300], y: [470, 820], r: 150};
/** One small grid panel (native size so the particles stay legible). */
const Panel: React.FC<{cx: number; cy: number; strong: boolean; dilute: boolean; at: number; seed: number}> = ({cx, cy, strong, dilute, at, seed}) => (
	<FieldLens cx={cx} cy={cy} r={G.r} at={at}>
		<Field cx={cx} cy={cy} r={G.r} sp={34} s={0.6} acidFrac={0.72} seed={seed} at={-1000} splitAll={strong ? {at: -1000} : undefined} keep={dilute ? () => (strong ? 0.2 : 0.24) : undefined}
			examples={strong ? [] : dilute ? [{u: -0.1, v: 0.05, at: -1000}, {u: 0.35, v: -0.3, at: -1000}] : [{u: 0.05, v: 0.1, at: -1000}]} amp={3} />
	</FieldLens>
);
export const SceneConcentration: React.FC = () => {
	const f = useCurrentFrame();
	const grid = K7.four;
	const big = 1 - prog(f, grid - 4, 18);
	const keepL = keys([[K7.add, 1], [K7.dilute + 30, 0.3]]);
	const keepR = keys([[K7.dac + 20, 1], [K7.bigger + 20, 0.38]]);
	const concV = keys([[K7.add - 4, 0.85], [K7.dilute + 30, 0.18], [K7.dac - 10, 0.18], [K7.dac + 6, 0.85], [K7.dac + 20, 0.85], [K7.bigger + 20, 0.18]]);
	const strV = keys([[K7.dac - 10, 0.9], [K7.dac + 6, 0.25]]);
	const dialO = 1 - 0.65 * prog(f, grid, 16);
	const cellLab = (t: string, x: number, y: number, at: number, anchor: 'middle' | 'end' = 'middle') => <Dim at={at + 50} to={0.4}><Sx x={x} y={y} text={t} size={36} color={INK_SOFT} anchor={anchor} hand at={at} /></Dim>;
	return (
		<>
			<Heading text="Concentration: a separate dial" at={4} size={58} />
			<Overlay>
				<g opacity={dialO}>
					<Dial2 x={1430} y={210} label="strength" val={strV} at={K7.second} />
					<Dial2 x={1700} y={210} label="concentration" val={concV} at={K7.second + 6} />
				</g>
				<g opacity={big}>
					<Zoom base={LL} pts={[[0, 560, 630, 250]]}>
						<FieldLens cx={LL.cx} cy={LL.cy} r={LL.r} at={K7.conc}>
							<Field cx={LL.cx} cy={LL.cy} r={LL.r} seed={11} at={-1000} splitAll={{at: -1000}} keep={keepL} />
						</FieldLens>
					</Zoom>
					<Sx x={560} y={350} text="hydrochloric acid" size={32} color={GREY_INK} anchor="middle" hand at={K7.conc} />
					<Zoom base={RL} pts={[[0, 1360, 630, 250]]}>
						<FieldLens cx={RL.cx} cy={RL.cy} r={RL.r} at={K7.dac - 6}>
							<Field cx={RL.cx} cy={RL.cy} r={RL.r} seed={23} at={-1000} keep={keepR} examples={[{u: 0.05, v: 0.12, at: -1000}, {u: -0.35, v: -0.25, at: K7.bigger + 10, ring: [K7.bigger + 6, K7.nowhere + 40]}]} />
						</FieldLens>
					</Zoom>
					<Sx x={1360} y={350} text="acetic acid" size={32} color={GREY_INK} anchor="middle" hand at={K7.dac - 6} />
					<Dim at={K7.dac} to={0.35}>
						<MistakeX x={560} y={905} text="dilute = weak" at={K7.dsa - 6} cross={K7.never} note="dilute strong acid" size={34} anchor="middle" />
					</Dim>
					<Counter x={1360} y={900} text="split: about 1 in 80" at={K7.dac} out={K7.bigger + 26} color={ACID_INK} />
					<Counter x={1360} y={900} text="0.0010 mol/L: about 1 in 8 split" at={K7.bigger + 32} color={ACID_INK} />
				</g>
				{/* the 2 × 2 grid */}
				<Panel cx={G.x[0]} cy={G.y[0]} strong dilute={false} at={grid + 4} seed={11} />
				<Panel cx={G.x[1]} cy={G.y[0]} strong={false} dilute={false} at={grid + 10} seed={23} />
				<Panel cx={G.x[0]} cy={G.y[1]} strong dilute at={grid + 16} seed={11} />
				<Panel cx={G.x[1]} cy={G.y[1]} strong={false} dilute at={grid + 22} seed={23} />
				{cellLab('concentrated', G.x[0] - G.r - 40, G.y[0] + 12, K7.concd, 'end')}
				{cellLab('dilute', G.x[0] - G.r - 40, G.y[1] + 12, K7.concd + 18, 'end')}
				{cellLab('strong', G.x[0], G.y[0] - G.r - 26, K7.sw, 'middle')}
				{cellLab('weak', G.x[1], G.y[0] - G.r - 26, K7.sw + 14, 'middle')}
				<Sx x={G.x[1] + G.r + 40} y={G.y[0] - 6} text="1.0 mol/L:" size={32} color={ACID_INK} weight={700} at={grid + 30} />
				<Sx x={G.x[1] + G.r + 40} y={G.y[0] + 40} text="about 1 in 240 split" size={32} color={ACID_INK} weight={700} at={grid + 30} />
				<Sx x={G.x[1] + G.r + 40} y={G.y[1] - 6} text="0.0010 mol/L:" size={32} color={ACID_INK} weight={700} at={grid + 40} />
				<Sx x={G.x[1] + G.r + 40} y={G.y[1] + 40} text="about 1 in 8 split" size={32} color={ACID_INK} weight={700} at={grid + 40} />
				{void K7.dial}{void K7.every}{void K7.still}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 8. A concentrated weak acid can win ----------
const H8 = 'weak-can-win';
const K8 = cues(sc(H8), {surprise: 'the surprise', p24: 'two point four', p30: 'three point zero', lower: 'has the lower pH', thousand: 'a thousand times', four: 'about four times', alone: 'pH alone', tell: 'tell you strength', fair: 'To compare strength', same: 'same concentration', safe: 'mean safe', burns: 'burns skin'});
const W8 = {l: {cx: 560, cy: 470, r: 230}, r: {cx: 1360, cy: 470, r: 230}};
const H8L: [number, number][] = [[-0.55, -0.35], [-0.1, -0.6], [0.4, -0.45], [-0.6, 0.15], [0.05, -0.08], [0.5, 0.1], [-0.3, 0.55], [0.25, 0.55]];
export const SceneWeakWins: React.FC = () => {
	const f = useCurrentFrame();
	const pop = pulseAt(f, K8.four, 0.35, 36);
	const gone = K8.same - 6;
	const bh = 260, bw = picW(BEAKER, bh);
	const bx = [700 - bw / 2, 1220 - bw / 2];
	const cw = mw('0.10 mol/L', 32, false, 700);
	return (
		<>
			<Heading text="A concentrated weak acid can win" at={4} size={58} />
			<Overlay>
				<Fade at={0} out={gone}>
					<FieldLens cx={W8.l.cx} cy={W8.l.cy} r={W8.l.r} at={0}>
						<Field cx={W8.l.cx} cy={W8.l.cy} r={W8.l.r} seed={31} acidFrac={0.6} at={-1000} />
						{H8L.map(([u, v], i) => <g key={i}><circle cx={W8.l.cx + u * W8.l.r} cy={W8.l.cy + v * W8.l.r} r={30} fill="#eef6fb" opacity={0.85} /><H3O x={W8.l.cx + u * W8.l.r} y={W8.l.cy + v * W8.l.r} s={1.3} pop={pop} /></g>)}
					</FieldLens>
					<FieldLens cx={W8.r.cx} cy={W8.r.cy} r={W8.r.r} at={6}>
						<Field cx={W8.r.cx} cy={W8.r.cy} r={W8.r.r} seed={37} acidFrac={0} at={-1000} />
						{[[-0.3, -0.2], [0.3, 0.25]].map(([u, v], i) => <g key={i}><circle cx={W8.r.cx + u * W8.r.r} cy={W8.r.cy + v * W8.r.r} r={30} fill="#eef6fb" opacity={0.85} /><H3O x={W8.r.cx + u * W8.r.r} y={W8.r.cy + v * W8.r.r} s={1.3} pop={pop} /></g>)}
						{[[0.25, -0.4], [-0.35, 0.35]].map(([u, v], i) => <g key={i}><circle cx={W8.r.cx + u * W8.r.r} cy={W8.r.cy + v * W8.r.r} r={26} fill="#eef6fb" opacity={0.85} /><An x={W8.r.cx + u * W8.r.r} y={W8.r.cy + v * W8.r.r} s={1.3} /></g>)}
					</FieldLens>
					<AChip x={W8.l.cx} y={735} text="acetic acid, 1.0 mol/L: pH ≈ 2.4" size={32} color={ACID_INK} hand={false} anchor="middle" at={K8.p24} />
					<AChip x={W8.r.cx} y={735} text="hydrochloric acid, 0.0010 mol/L: pH 3.0" size={32} color={TEAL} hand={false} anchor="middle" at={K8.p30} />
					<Fade at={K8.four} out={K8.alone}>
						<HBracket x1={W8.l.cx} x2={W8.r.cx} y={860} at={K8.four} color={TEAL} d={-18} />
						<Sx x={960} y={920} text="about 4 × more H_3O^{+} in the weak acid" size={38} color={TEAL} anchor="middle" weight={700} at={K8.four + 6} />
					</Fade>
					<MistakeX x={960} y={850} text="lower pH = stronger acid" at={K8.alone} cross={K8.tell} note="pH depends on strength and concentration" size={34} anchor="middle" />
				</Fade>
				{/* fair test: the hook beakers, same concentration */}
				<Fade at={K8.same}>
					{bx.map((x, i) => (
						<g key={i}>
							<LiquidBeaker x={x} y={330} h={bh} />
							<Sx x={x + bw / 2} y={640} text={i === 0 ? 'hydrochloric acid' : 'acetic acid'} size={32} color={GREY_INK} anchor="middle" hand at={-1000} />
							<Sx x={x + bw / 2} y={690} text="0.10 mol/L" size={32} color={INK} anchor="middle" weight={700} at={-1000} />
							<Under x1={x + bw / 2 - cw / 2} x2={x + bw / 2 + cw / 2} y={700} at={K8.same + 10 + i * 8} color={ACID} />
						</g>
					))}
				</Fade>
				<Dim at={K8.safe} to={0.35}><Note x={960} y={800} text="fair test: same concentration" size={42} color={TEAL} anchor="middle" at={K8.same + 20} /></Dim>
				<Sx x={1500} y={430} text="weak ≠ safe:" size={32} color={GREY_INK} weight={700} at={K8.safe} />
				<Sx x={1500} y={474} text="concentrated acetic" size={32} color={GREY_INK} weight={600} at={K8.safe + 4} />
				<Sx x={1500} y={516} text="acid is corrosive" size={32} color={GREY_INK} weight={600} at={K8.safe + 8} />
				{void K8.surprise}{void K8.lower}{void K8.thousand}{void K8.fair}{void K8.burns}{void INK}{void PROTON}{void vis}{void TEAL}
			</Overlay>
		</>
	);
};
