// Y11 Chem M2 V06 scenes 1 to 5: the hook on the painted balance (the wrong instinct written as a plan), the 3 s
// prediction, coefficients count particles (rearranging ball molecules, then the live count-up to moles), the masses
// (the balance returns with two moles of water and bars grow to scale), and what a balanced equation promises.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BALANCE, BAL_A, BEAKER_W, hold, sc} from './common';
import {
	AMB, AMB_INK, Atom, Chip, Countdown, Di, DrawPath, Fade, Framed, GREEN, GREY_INK, H_FILL, Heading, INK, INK_SOFT, Move, NAVY, O_FILL, PenArrow, PenRing, Plate, RED,
	Readout, Rich, StrikeLine, Sx, TEAL, TEAL_INK, TickMark, Water, Write, clamp01, kf, lerp, plateMap, prog, smooth, tw, vis,
} from './parts';
import type {Seg} from './parts';

const SVG: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>{children}</svg>;

// ---------- equation strip 2H2 + O2 -> 2H2O ----------
const hexMix = (a: string, b: string, t: number) => {
	const p = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
	const x = p(a), y = p(b), u = clamp01(t);
	return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * u).toString(16).padStart(2, '0')).join('');
};
const EQ_T = ['2', 'H_2', ' + ', 'O_2', ' → ', '2', 'H_2O'];
/** x of each piece's left edge, for a strip centred at cx. */
const eqXs = (size: number, cx: number) => {
	const ws = EQ_T.map(t => tw(t, size));
	const total = ws.reduce((a, b) => a + b, 0);
	let x = cx - total / 2;
	return ws.map(w => { const r = {x, w}; x += w; return r; });
};
const Eq: React.FC<{cx: number; y: number; size: number; coef?: string; at?: number; o?: number}> = ({cx, y, size, coef = TEAL, at = -1000, o = 1}) => {
	const segs: Seg[] = EQ_T.map((t, i) => ({t, c: i === 0 || i === 5 ? coef : INK}));
	return <Rich x={eqXs(size, cx)[0].x} y={y} segs={segs} size={size} at={at} opacity={o} weight={800} />;
};

// ---------- the iron oxide pair (m2-v05's final frame, kept as a reference panel) ----------
const FE = '#8a5a3a';
const FePanel: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<rect x={x} y={y} width={470} height={350} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<Rich x={x + 28} y={y + 62} segs={[{t: 'Fe_2O_3', c: INK}]} size={46} weight={800} />
		<Sx x={x + 200} y={y + 60} text="last video" size={30} color={INK_SOFT} hand at={-1000} />
		{[0, 1].map(i => <Atom key={'f' + i} x={x + 80 + i * 92} y={y + 140} r={36} fill={FE} />)}
		{[0, 1, 2].map(i => <Atom key={'o' + i} x={x + 262 + i * 66} y={y + 144} r={27} fill={O_FILL} />)}
		<Sx x={x + 28} y={y + 222} text="2 Fe : 3 O by count" size={34} color={TEAL_INK} weight={700} at={-1000} />
		<rect x={x + 28} y={y + 250} width={414 * 0.699} height={34} rx={6} fill={FE} />
		<rect x={x + 28 + 414 * 0.699} y={y + 250} width={414 * 0.301} height={34} rx={6} fill={O_FILL} />
		<Sx x={x + 28} y={y + 326} text="by mass: Fe 69.9%, O 30.1%" size={30} color={AMB_INK} weight={700} at={-1000} />
	</g>
);

// ---------- the balance with a coded display ----------
const LCD = '#ffc35a';
const BalanceRig: React.FC<{x: number; y: number; h: number; reading: string; beaker?: number; readSize?: number}> = ({x, y, h, reading, beaker = 0, readSize = 52}) => {
	const m = plateMap(BALANCE, x, y, h);
	const [d0, d1, d2, d3] = BAL_A.disp;
	const bw = 0.42 * (1080 - 190) * m.k; // beaker about 0.42 of the pan width
	const bh = bw * (BEAKER_W.box[3] / BEAKER_W.box[2]);
	const bx = m.X(BAL_A.pan[0]) - bw / 2, by = m.Y(BAL_A.pan[1] + 30) - bh;
	const drop = (1 - smooth(beaker)) * 160;
	return (
		<g>
			<Plate p={BALANCE} x={x} y={y} h={h} />
			<Sx x={(m.X(d0) + m.X(d2)) / 2} y={(m.Y(d1) + m.Y(d3)) / 2 + readSize * 0.36} text={reading} size={readSize} color={LCD} anchor="middle" weight={800} at={-1000} />
			{beaker > 0.01 ? <Plate p={BEAKER_W} x={bx} y={by - drop} h={bh} o={clamp01(beaker * 3)} /> : null}
		</g>
	);
};
const BAL1 = {x: 1080, y: 410, h: 510};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {reaction: 'Now look at a reaction', two: 'Two H two plus', coef: 'coefficients', c2: 'are two', c1: 'one and two', c3: ['two', 7], grams: 'two grams', so: 'So does', hyd: 'of hydrogen react', one: 'one gram', make: 'make two grams', water: 'water'});
const XS = eqXs(84, 1000);
const midOf = (i: number) => XS[i].x + XS[i].w / 2;
const TAGS: [string, number, number, number][] = [['2 g H_2?', 540, K1.so + 8, midOf(1) - 20], ['1 g O_2?', 650, K1.one, midOf(3)], ['→ 2 g H_2O?', 760, K1.make, midOf(6)]];
/** The scene 1 board; `live` false shows its final state (scene 2 and the start of scene 3). */
const HookBoard: React.FC<{live: boolean; tagsOut?: number; feOut?: number}> = ({live, tagsOut, feOut}) => {
	const f = useCurrentFrame();
	const A = (k: number) => (live ? k : -1000);
	const coefC = live ? hexMix('#b86e0a', TEAL, prog(f, K1.coef, 14)) : TEAL;
	const balIn = live ? smooth(prog(f, K1.reaction + 10, 26)) : 1;
	const reading = '0.00 g';
	return (
		<>
			<Eq cx={1000} y={300} size={84} coef={coefC} />
			<Chip x={1350} y={244} segs={[{t: '2 : 1 : 2'}]} at={-1000} color={TEAL_INK} size={40} />
			<Chip x={1590} y={244} segs={[{t: 'mass ratio?'}]} at={-1000} color={AMB_INK} size={40} hand />
			{live ? (
				<>
					<PenRing cx={XS[0].x + XS[0].w / 2} cy={272} rx={34} ry={44} at={K1.c2} out={K1.c2 + 40} color={TEAL} />
					<Write x={midOf(3)} y={196} text="(1)" at={K1.c1} size={40} color={TEAL_INK} anchor="middle" />
					<PenRing cx={XS[5].x + XS[5].w / 2} cy={272} rx={34} ry={44} at={K1.c3} out={K1.c3 + 40} color={TEAL} seed={5} />
				</>
			) : <Sx x={midOf(3)} y={196} text="(1)" size={40} color={TEAL_INK} anchor="middle" hand at={-1000} />}
			<Fade at={-1000} out={feOut}><g transform="translate(96,420) scale(1.18) translate(-96,-420)"><FePanel x={96} y={420} /></g></Fade>
			<g transform={`translate(${(1 - balIn) * 400},0)`} opacity={balIn}>
				<BalanceRig x={BAL1.x} y={BAL1.y} h={BAL1.h} reading={reading} />
			</g>
			<Fade at={A(K1.so)} out={tagsOut}>
				<Write x={1450} y={392} text="weigh out the coefficients?" at={A(K1.so)} size={40} color={AMB_INK} anchor="middle" />
			</Fade>
			{TAGS.map(([t, y, at, fx], i) => (
				<Fade key={t} at={A(at)} out={tagsOut}>
					<Write x={700} y={y} text={t} at={A(at)} size={56} color={AMB_INK} />
					<PenArrow a={[710 + tw(t, 56, true) + 20, y - 38]} b={[fx, 330]} at={A(at) + 8} color={AMB} bend={0.12 - i * 0.05} width={4} />
				</Fade>
			))}
		</>
	);
};
export const SceneHook: React.FC = () => (
	<SVG>
		<HookBoard live />
		<Heading text="Mole ratios, not mass ratios" at={K1.water} />
		<Fade at={-1000} out={24}>
			<Chip x={1824} y={880} segs={[{t: 'Next: why coefficients give mole ratios'}]} at={-1000} color={NAVY} size={34} anchor="end" />
		</Fade>
	</SVG>
);

// ---------- 2. Prediction ----------
const K2 = cues(sc('prediction'), {yes: 'Yes or no', count: 'count'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<HookBoard live={false} feOut={0} />
			<Heading text="Mole ratios, not mass ratios" at={-1000} />
			<Chip x={120} y={480} segs={[{t: 'yes?'}]} at={K2.yes} color={GREEN} size={52} hand />
			<Chip x={320} y={480} segs={[{t: 'no?'}]} at={K2.yes + 8} color={RED} size={52} hand />
			<Chip x={96} y={600} segs={[{t: '2, 1 and 2 count what?'}]} at={K2.count - 30} color={TEAL_INK} size={48} hand />
			<Countdown start={h.startFrame} end={h.endFrame} x={330} y={800} r={56} />
		</SVG>
	);
};

// ---------- 3. Coefficients count particles ----------
const K3 = cues(sc('particles-to-moles'), {no: 'No', twoH: 'Two hydrogen molecules', react: 'react with', make: 'to make two water', count: 'Count the atoms', earlier: 'earlier', dozen: 'Two dozen', oneDoz: 'one dozen', moles: 'two moles need', six: 'six point', particles: 'particles', so: 'So the coefficients', ratio: 'mole ratio', p2: ['particles', 2]});
// particle stage geometry (r: O 44, H 30)
const RO = 50, RH = 34;
const H2A: [number, number] = [560, 470], H2B: [number, number] = [560, 660], O2P: [number, number] = [790, 565];
const W1: [number, number] = [1150, 460], W2: [number, number] = [1150, 650];
type Trip = {from: [number, number]; to: [number, number]; fill: string; r: number};
const hOff = RH * 0.72, oOff = RO * 0.72, wH: [number, number] = [RO * 0.95, RO * 0.75];
const TRIPS: Trip[] = [
	{from: [H2A[0] - hOff, H2A[1]], to: [W1[0] - wH[0], W1[1] + wH[1]], fill: H_FILL, r: RH},
	{from: [H2A[0] + hOff, H2A[1]], to: [W1[0] + wH[0], W1[1] + wH[1]], fill: H_FILL, r: RH},
	{from: [H2B[0] - hOff, H2B[1]], to: [W2[0] - wH[0], W2[1] + wH[1]], fill: H_FILL, r: RH},
	{from: [H2B[0] + hOff, H2B[1]], to: [W2[0] + wH[0], W2[1] + wH[1]], fill: H_FILL, r: RH},
	{from: [O2P[0] - oOff, O2P[1]], to: W1, fill: O_FILL, r: RO},
	{from: [O2P[0] + oOff, O2P[1]], to: W2, fill: O_FILL, r: RO},
];
const fmtCount = (v: number) => {
	if (v < 1000) return `${Math.round(v)}`;
	const e = Math.floor(Math.log10(v));
	return `${(v / 10 ** e).toFixed(2)} × 10^{${e}}`;
};
/** Grid of molecules: cols x rows from (x, y), spacing s; shows the first n. */
const Grid: React.FC<{x: number; y: number; cols: number; rows: number; s: number; n: number; kind: 'H2' | 'O2' | 'W'}> = ({x, y, cols, rows, s, n, kind}) => (
	<g>
		{Array.from({length: cols * rows}, (_, i) => {
			const a = clamp01(n - i);
			if (a <= 0.01) return null;
			const cx = x + (i % cols) * s, cy = y + Math.floor(i / cols) * s;
			return kind === 'H2' ? <Di key={i} x={cx} y={cy} r={13} fill={H_FILL} o={a} /> : kind === 'O2' ? <Di key={i} x={cx} y={cy} r={19} fill={O_FILL} o={a} /> : <Water key={i} x={cx} y={cy - 6} r={17} o={a} />;
		})}
	</g>
);
export const SceneParticles: React.FC = () => {
	const f = useCurrentFrame();
	const travel = (i: number) => smooth(prog(f, K3.react + 10 + i * 6, 46, (u: number) => u));
	const stageO = 1 - prog(f, K3.dozen - 8, 14);
	const blockO = prog(f, K3.dozen, 14);
	const nH = kf(f, [[K3.dozen, 2], [K3.oneDoz + 40, 24]]);
	// log-scale run from a dozen to moles
	const run = smooth(prog(f, K3.p2 - 6, 60, (u: number) => u));
	const big = (base: number, mol: number) => (run <= 0 ? base : 10 ** lerp(Math.log10(base), Math.log10(mol), run));
	const vH = big(Math.round(nH), 1.204e24), vO = big(Math.round(nH / 2), 6.022e23);
	const blur = prog(f, K3.p2 - 6, 40);
	const relabel = f >= K3.p2 + 60;
	const lbl = (dz: string, mol: string, x: number) => (
		<g>
			<Sx x={x} y={836} text={dz} size={40} color={TEAL_INK} anchor="middle" hand at={K3.dozen + 20} out={K3.moles} />
			<Sx x={x} y={836} text={mol} size={40} color={TEAL_INK} anchor="middle" hand at={K3.moles + 4} />
		</g>
	);
	const counter = (y: number, name: string, v: string, mol: string) => (
		<g>
			<Rich x={1300} y={y} segs={[{t: name, c: INK}, {t: relabel ? mol : v, c: TEAL_INK}]} size={52} weight={800} />
		</g>
	);
	return (
		<SVG>
			<Heading text="Coefficients count particles" at={4} />
			<Eq cx={1000} y={262} size={72} />
			<Chip x={1000} y={292} segs={[{t: 'mole ratio 2 : 1 : 2'}]} at={K3.ratio} color={TEAL_INK} size={40} anchor="middle" />
			{/* the balance and its crossed plan: struck, then shrinks to a thumbnail at the lower left */}
			<Move keys={[[0, 0, 0, 1], [55, 0, 0, 1], [85, 96 - 0.36 * BAL1.x, 700 - 0.36 * BAL1.y, 0.36]]}>
				<BalanceRig x={BAL1.x} y={BAL1.y} h={BAL1.h} reading="0.00 g" />
				<g opacity={1 - prog(f, 50, 20)}>
					<Sx x={1450} y={392} text="weigh out the coefficients?" size={40} color={AMB_INK} anchor="middle" hand at={-1000} />
					{TAGS.map(([t, y], i) => (
						<g key={t}>
							<Sx x={700} y={y} text={t} size={56} color={AMB_INK} hand at={-1000} />
							<StrikeLine x1={690} y1={y - 16} x2={710 + tw(t, 56, true) + 10} y2={y - 22} at={K3.no + i * 5} />
						</g>
					))}
				</g>
			</Move>
			<Write x={96} y={680} text="not grams" at={K3.no + 14} size={48} color={RED} />
			{/* particle stage: 2 H2 + O2 rearrange into 2 H2O */}
			<g opacity={stageO}>
				<Sx x={680} y={380} text="before" size={36} color={INK_SOFT} anchor="middle" hand at={K3.react} />
				<Sx x={1150} y={380} text="after" size={36} color={INK_SOFT} anchor="middle" hand at={K3.make} />
				<Di x={H2A[0]} y={H2A[1]} r={RH} fill={H_FILL} o={1 - 0.55 * travel(0)} />
				<Di x={H2B[0]} y={H2B[1]} r={RH} fill={H_FILL} o={1 - 0.55 * travel(2)} />
				<Di x={O2P[0]} y={O2P[1]} r={RO} fill={O_FILL} o={1 - 0.55 * travel(4)} />
				<DrawPath d="M900,565 L1010,565" at={K3.react} dur={12} color={INK} width={6} />
				<path d="M990,548 L1014,565 L990,582" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" opacity={prog(f, K3.react + 10, 6)} />
				{TRIPS.map((t, i) => {
					const u = travel(i);
					if (u <= 0) return null;
					const x = lerp(t.from[0], t.to[0], u), y = lerp(t.from[1], t.to[1], u) - Math.sin(u * Math.PI) * 90;
					return <Atom key={i} x={x} y={y} r={t.r} fill={t.fill} />;
				})}
				<Rich x={H2A[0]} y={760} segs={[{t: '2 ', c: TEAL}, {t: 'H_2'}]} size={44} anchor="middle" at={K3.twoH} />
				<Rich x={O2P[0]} y={760} segs={[{t: '1 ', c: TEAL}, {t: 'O_2'}]} size={44} anchor="middle" at={K3.react} />
				<Rich x={W1[0]} y={760} segs={[{t: '2 ', c: TEAL}, {t: 'H_2O'}]} size={44} anchor="middle" at={K3.make + 20} />
				<Sx x={680} y={850} text="4 H, 2 O" size={48} color={INK} anchor="middle" at={K3.count + 20} />
				<Sx x={W1[0]} y={850} text="4 H, 2 O" size={48} color={INK} anchor="middle" at={K3.count + 40} />
				<TickMark x={935} y={834} at={K3.count + 56} s={1.4} />
				<PenRing cx={915} cy={835} rx={360} ry={58} at={K3.earlier} color={TEAL} seed={7} />
				<Write x={915} y={940} text="same atoms, rearranged" at={K3.earlier + 10} size={46} color={TEAL_INK} anchor="middle" />
				<Sx x={1300} y={940} text="(balancing video)" size={30} color={GREY_INK} weight={600} at={K3.earlier} />
			</g>
			{/* live count-up */}
			<g opacity={blockO} style={blur > 0.01 ? {filter: `blur(${blur * 2.2}px)`} : undefined}>
				<Grid x={500} y={420} cols={4} rows={6} s={54} n={nH} kind="H2" />
				<Grid x={780} y={420} cols={2} rows={6} s={54} n={nH / 2} kind="O2" />
				<Grid x={1030} y={426} cols={4} rows={6} s={54} n={nH} kind="W" />
			</g>
			<g opacity={blockO}>
				<path d="M920,560 L976,560 M962,546 L978,560 L962,574" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{lbl('2 dozen', '2 mol', 581)}
				{lbl('1 dozen', '1 mol', 807)}
				{lbl('2 dozen', '2 mol', 1111)}
			</g>
			{/* counters and ratio readout: live from the scene start */}
			<rect x={1270} y={380} width={554} height={300} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<Sx x={1296} y={416} text="particle counter" size={30} color={INK_SOFT} hand at={-1000} />
			{counter(486, 'H_2: ', fmtCount(vH), '2 mol')}
			{counter(566, 'O_2: ', fmtCount(vO), '1 mol')}
			{counter(646, 'H_2O: ', fmtCount(vH), '2 mol')}
			<Readout x={1270} y={712} w={554} text="H_2 : O_2 = 2 : 1" color={TEAL_INK} frame={TEAL} size={52} />
			<PenRing cx={1547} cy={751} rx={300} ry={58} at={K3.p2 + 50} color={TEAL} seed={9} />
			<Write x={1547} y={880} text="never changes" at={K3.p2 + 58} size={46} color={TEAL_INK} anchor="middle" />
			<Chip x={470} y={856} segs={[{t: '1 mol = 6.02 × 10^{23} particles'}]} at={K3.six} color={INK} size={38} />
			<Sx x={480} y={944} text="(the mole video)" size={30} color={GREY_INK} anchor="start" weight={600} at={K3.six + 6} />
		</SVG>
	);
};

// ---------- 4. The masses ----------
const K4 = cues(sc('masses'), {masses: 'the masses', h: 'Two moles of hydrogen', four: 'four grams', o: 'One mole of oxygen', t32: 'thirtytwo grams', w: 'two moles of water', water: 'water weigh', grams: 'thirtysix grams', so: 'So the mass ratio', one: 'one to eight to nine', nothing: 'nothing like', each: 'each oxygen molecule', sixteen: 'sixteen', heavier: 'heavier'});
const BX0 = 940, PXG = 19;
const BAR_ROWS: {lbl: Seg[]; g: number; y: number; at: number; val: string}[] = [
	{lbl: [{t: '2', c: TEAL}, {t: 'H_2'}], g: 4.032, y: 400, at: K4.four - 10, val: '4.03 g'},
	{lbl: [{t: 'O_2'}], g: 32.0, y: 520, at: K4.t32 - 10, val: '32.00 g'},
	{lbl: [{t: '2', c: TEAL}, {t: 'H_2O'}], g: 36.032, y: 640, at: K4.water + 10, val: '36.03 g'},
];
export const SceneMasses: React.FC = () => {
	const f = useCurrentFrame();
	const tick = clamp01((f - K4.water - 14) / 32);
	const reading = f < K4.water + 14 ? '0.00 g' : `${(36.03 * tick).toFixed(2)} g`;
	const beam = smooth(prog(f, K4.each + 20, 40));
	const ang = -12 * beam; // right (O2) side goes down
	const PX = 330, PY = 820, L = 200, a = (-ang * Math.PI) / 180;
	const lp: [number, number] = [PX - L * Math.cos(a), PY - L * Math.sin(a)], rp: [number, number] = [PX + L * Math.cos(a), PY + L * Math.sin(a)];
	return (
		<SVG>
			<Heading text="Now the masses" at={4} />
			<rect x={96} y={186} width={690} height={62} rx={14} fill="#eef2fa" stroke={NAVY} strokeWidth={3} />
			<Rich x={120} y={229} segs={[{t: 'H 1.008, O 16.00 g mol^{−1}', c: NAVY}, {t: '  (data sheet)', c: INK_SOFT, w: 600}]} size={32} />
			<Eq cx={1330} y={250} size={64} />
			<Move keys={[[0, 0, 0, 1], [K4.each - 10, 0, 0, 1], [K4.each + 20, 96 - 96 * 0.62, 300 - 330 * 0.62, 0.62]]}>
				<BalanceRig x={96} y={330} h={424} reading={reading} beaker={prog(f, K4.water, 22)} />
				<Write x={560} y={318} text="2 mol of water" at={K4.grams} size={44} color={AMB_INK} anchor="middle" />
			</Move>
			{BAR_ROWS.map((r, i) => {
				const p = smooth(prog(f, r.at, 26));
				const w = r.g * PXG * p;
				return (
					<g key={i} opacity={prog(f, i === 0 ? 0 : r.at - 30, 12)}>
						<Rich x={910} y={r.y + 50} segs={r.lbl} size={48} anchor="end" weight={800} />
						<rect x={BX0} y={r.y} width={Math.max(2, w)} height={70} rx={10} fill="#f6d9a3" stroke={AMB} strokeWidth={4} />
						<Sx x={BX0 + w + 18} y={r.y + 52} text={r.val} size={48} color={AMB_INK} weight={800} at={r.at + 20} />
					</g>
				);
			})}
			<Sx x={BX0} y={770} text="to scale" size={30} color={INK_SOFT} hand at={K4.four + 20} />
			<Chip x={790} y={800} segs={[{t: 'mole ratio 2 : 1 : 2'}]} at={K4.one - 10} color={TEAL_INK} size={40} />
			<Chip x={1330} y={800} segs={[{t: 'mass ratio ≈ 1 : 8 : 9'}]} at={K4.one} color={AMB_INK} size={40} />
			<PenArrow a={[1240, 892]} b={[1310, 862]} at={K4.nothing} color={RED} bend={-0.2} />
			<PenArrow a={[1260, 892]} b={[1190, 862]} at={K4.nothing + 4} color={RED} bend={0.2} />
			<Write x={1250} y={940} text="not the same!" at={K4.nothing + 8} size={44} color={RED} anchor="middle" />
			{/* single molecules on a coded two-pan comparison */}
			<Fade at={K4.each}>
				<path d={`M${PX - 40},${PY + 110} L${PX},${PY + 8} L${PX + 40},${PY + 110} Z`} fill="#d8d2c6" stroke={INK} strokeWidth={4} />
				<line x1={lp[0]} y1={lp[1]} x2={rp[0]} y2={rp[1]} stroke={INK} strokeWidth={8} strokeLinecap="round" />
				<circle cx={PX} cy={PY} r={9} fill={INK} />
				{[lp, rp].map((p, i) => <path key={i} d={`M${p[0] - 70},${p[1] + 40} Q${p[0]},${p[1] + 74} ${p[0] + 70},${p[1] + 40} Z`} fill="#eae4d8" stroke={INK} strokeWidth={4} />)}
				{[lp, rp].map((p, i) => <line key={'s' + i} x1={p[0]} y1={p[1]} x2={p[0]} y2={p[1] + 40} stroke={INK} strokeWidth={3} />)}
				<Di x={lp[0]} y={lp[1] + 22} r={14} fill={H_FILL} />
				<Di x={rp[0]} y={rp[1] + 14} r={24} fill={O_FILL} />
				<Rich x={lp[0]} y={lp[1] - 18} segs={[{t: 'H_2'}]} size={36} anchor="middle" />
				<Rich x={rp[0]} y={rp[1] - 30} segs={[{t: 'O_2'}]} size={36} anchor="middle" />
			</Fade>
			<PenRing cx={rp[0]} cy={rp[1] + 14} rx={58} ry={44} at={K4.sixteen} color={AMB} seed={4} />
			<Write x={rp[0] + 70} y={rp[1] - 50} text="16 × heavier" at={K4.sixteen + 6} size={46} color={AMB_INK} />
		</SVG>
	);
};

// ---------- 5. What a balanced equation promises ----------
const K5 = cues(sc('conservation'), {notice: 'But notice', four: 'Four point zero three', plus: 'plus', is: 'is thirtysix', three: ['three', 2], mass: 'Mass is conserved', same: 'same atoms', so: 'So a balanced', promises: 'promises two', moles: 'Moles react', total: 'the total mass', same2: ['same', 2], never: 'never', ratio: ['ratio', 2], coef: ['coefficients', 2]});
const S5 = 34, B5 = 460;
export const SceneConservation: React.FC = () => {
	const f = useCurrentFrame();
	const join = smooth(prog(f, K5.three - 6, 26));
	const oX = lerp(B5, B5 + 4.032 * S5, join), oY = lerp(410, 300, join);
	const sumT = K5.is;
	return (
		<SVG>
			<Heading text="What a balanced equation promises" at={4} />
			<g transform="translate(96,700)">
				<BalanceRig x={0} y={0} h={180} reading="36.03 g" beaker={1} readSize={28} />
			</g>
			<Sx x={96} y={940} text="2 mol of water" size={32} color={AMB_INK} hand at={-1000} />
			<Move keys={[[0, 0, 0, 1], [K5.promises - 4, 0, 0, 1], [K5.promises + 24, B5 * 0.38, 230 - 300 * 0.62, 0.62]]}>
				{/* bars to scale: H2 row, O2 row (slides up to join), H2O row */}
				<Rich x={B5 - 20} y={356} segs={[{t: '2', c: TEAL}, {t: 'H_2'}, {t: ' + O_2', c: INK}]} size={44} anchor="end" weight={800} opacity={join} />
				<Rich x={B5 - 20} y={356} segs={[{t: '2', c: TEAL}, {t: 'H_2'}]} size={44} anchor="end" weight={800} opacity={1 - join} />
				<rect x={B5} y={300} width={4.032 * S5} height={80} rx={8} fill="#f6d9a3" stroke={AMB} strokeWidth={4} />
				<Sx x={B5 + 4} y={290} text="4.03 g" size={40} color={AMB_INK} weight={800} at={-1000} />
				<rect x={oX} y={oY} width={32 * S5} height={80} rx={8} fill="#f6d9a3" stroke={AMB} strokeWidth={4} />
				<Sx x={oX + 16 * S5} y={oY + 56} text="32.00 g" size={44} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<Rich x={B5 - 20} y={466} segs={[{t: 'O_2'}]} size={44} anchor="end" weight={800} opacity={1 - join} />
				<Rich x={B5 - 20} y={596} segs={[{t: '2', c: TEAL}, {t: 'H_2O'}]} size={44} anchor="end" weight={800} />
				<rect x={B5} y={540} width={36.032 * S5} height={80} rx={8} fill="#f6d9a3" stroke={AMB} strokeWidth={4} />
				<Sx x={B5 + 18 * S5} y={596} text="36.03 g" size={44} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<line x1={B5 + 36.032 * S5} x2={B5 + 36.032 * S5} y1={280} y2={640} stroke={GREEN} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, K5.three + 16, 10)} />
				<TickMark x={B5 + 36.032 * S5 + 40} y={460} at={K5.three + 22} s={1.3} />
				<Rich x={B5} y={780} segs={[{t: '4.03', c: AMB_INK}]} size={56} weight={800} at={K5.four} out={K5.three} />
				<Rich x={B5 + 150} y={780} segs={[{t: '+ 32.00', c: AMB_INK}]} size={56} weight={800} at={K5.plus} out={K5.three} />
				<Rich x={B5 + 380} y={780} segs={[{t: '= 36.03 g', c: AMB_INK}]} size={56} weight={800} at={sumT} out={K5.three} />
				<Framed x={B5 - 22} y={780} segs={[{t: '4.03 + 32.00 = 36.03 g', c: AMB_INK}]} at={K5.three} size={56} />
				<Write x={B5 + 820} y={785} text="same atoms, rearranged" at={K5.same} size={46} color={AMB_INK} />
			</Move>
			<Rich x={B5} y={640} segs={[{t: 'moles react in the coefficient ratio', c: TEAL_INK}]} size={46} at={K5.moles} />
			<TickMark x={B5 - 50} y={625} at={K5.moles + 10} s={1.3} />
			<Rich x={B5} y={740} segs={[{t: 'total mass is conserved', c: AMB_INK}]} size={46} at={K5.total} />
			<TickMark x={B5 - 50} y={725} at={K5.total + 10} s={1.3} />
			<Rich x={B5} y={840} segs={[{t: 'masses react in the coefficient ratio', c: INK}]} size={46} at={K5.never} />
			<StrikeLine x1={B5 - 10} y1={826} x2={B5 + tw('masses react in the coefficient ratio', 46) + 10} y2={822} at={K5.ratio} width={7} />
			<Write x={B5 + tw('masses react in the coefficient ratio', 46) + 40} y={846} text="never promised" at={K5.coef - 4} size={48} color={RED} />
		</SVG>
	);
};
