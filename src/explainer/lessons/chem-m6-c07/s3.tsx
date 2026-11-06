// M6 C07 scenes 10 to 13: mixing (neutralise first, then dilute); worked example 3 (the excess, then the total volume
// and pH); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {
	AChip, BASE, BASE_INK, CupOutline, DimG, EqLine, Fade, GCard, H3O, INK, INK_SOFT, KeptChip, LabelBeaker, LensFrame, LimitBars, LogRuler, MeetPair, MistakeX, Note, OHg, Overlay, P, PROTON,
	PROTON_INK, Ring, StepAfter, Sx, TEAL, TaskLine, WLine, beakerW, clamp01, eq, gLineY, lerp, mw, smooth, subX,
} from './parts';
void Heading;
import type {BarSpec} from './parts';

// ---------- 10. Mixing: neutralise first, then dilute ----------
const S10 = 'mixing-method';
const K10 = cues(sc(S10), {mixing: 'Mixing an acid', react: 'they react', hyd: 'Hydrogen ions and', runs: 'until one runs', left: 'whatever is left', sets: 'sets the pH', neut: 'So neutralise first', find: 'find both amounts', subtract: 'subtract', divide: 'and divide the', total: 'total volume'});
const LENS10 = {cx: 985, cy: 640, r: 235};
const TP: [number, number][] = [[-150, -110], [-60, -150], [40, -120], [-170, 0], [-80, -30], [20, -10]];
const VP: [number, number][] = [[-110, -70], [-10, -80], [90, -60], [-120, 60], [-30, 50], [70, 40], [130, 120], [-60, 140], [40, 150]];
export const SceneMixing: React.FC = () => {
	const f = useCurrentFrame();
	const L = LENS10;
	const BHt = 380, bw = beakerW(BHt);
	const tilt = smooth(prog(f, K10.react, 34));
	const cup = {x: 170, y: 660, w: 380, h: 290};
	const g = 1 + 0.3 * smooth(prog(f, K10.total, 26));
	const P0 = (p: [number, number]): [number, number] => [L.cx + 15 + p[0] * 0.78 * g, L.cy - 10 + p[1] * 0.78 * g];
	const line = (t: string, at: number, next: number | undefined, y: number) => (
		<DimG at={next ?? 1e9} to={0.42}><Sx x={1240} y={y} text={t} size={44} color={INK} weight={700} at={at} /></DimG>
	);
	const A = {x: 520, y: 230}, B = {x: 960, y: 230};
	const tok = (bx: number, by: number, i: number): [number, number] => [bx + bw * (0.27 + 0.23 * (i % 3)) + Math.sin(f * 0.05 + i) * 3, by + BHt * (0.6 + 0.16 * Math.floor(i / 3)) + Math.cos(f * 0.045 + i) * 3];
	return (
		<>
			<Heading text="Mixing an acid with a base" at={4} size={58} out={K10.neut - 8} />
			<Heading text="Mixing: neutralise first, then dilute" at={K10.neut} size={58} />
			<Overlay>
				<g opacity={1 - prog(f, K10.react + 30, 14)}>
					<g transform={`translate(${lerp(0, 200 - A.x, tilt)},${lerp(0, 190, tilt)}) rotate(${30 * tilt} ${A.x + bw / 2} ${A.y + BHt / 2})`}>
						<LabelBeaker x={A.x} y={A.y} h={BHt} at={-100} lines={[{t: 'acid: H_3O^{+}', at: 4, color: PROTON_INK}]} size={38} />
						{[0, 1, 2, 3, 4].map(i => { const [x, y] = tok(A.x, A.y, i); return <H3O key={i} x={x} y={y} s={1.35} />; })}
					</g>
					<g transform={`translate(${lerp(0, 250 - B.x, tilt)},${lerp(0, 190, tilt)}) rotate(${-30 * tilt} ${B.x + bw / 2} ${B.y + BHt / 2})`}>
						<LabelBeaker x={B.x} y={B.y} h={BHt} at={-100} lines={[{t: 'base: OH^{-}', at: 10, color: BASE_INK}]} size={38} />
						{[0, 1, 2, 3, 4, 5].map(i => { const [x, y] = tok(B.x, B.y, i); return <OHg key={i} x={x} y={y} s={1.35} />; })}
					</g>
				</g>
				<CupOutline x={cup.x} y={cup.y} w={cup.w} h={cup.h} fill={0.7 * smooth(prog(f, K10.react + 14, 30))} at={K10.react} />
				<Sx x={cup.x + cup.w / 2} y={cup.y + cup.h + 46} text="mixture" size={36} color={INK_SOFT} anchor="middle" hand at={K10.react + 20} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K10.react + 24}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f3f8fb" />
					<rect x={L.cx - 140 * g} y={L.cy - 140 * g} width={280 * g} height={280 * g} rx={60} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 8" opacity={prog(f, K10.total, 14)} />
					{TP.map((p, i) => <MeetPair key={i} a={P0(p)} b={P0(VP[i])} at={K10.hyd + 10 + i * 16} s={1.4} />)}
					{VP.slice(6).map((p, i) => { const [x, y] = P0(p); return <OHg key={i} x={x + Math.sin(f * 0.04 + i) * 3} y={y + Math.cos(f * 0.04 + i) * 3} s={1.4} />; })}
				</LensFrame>
				<Note x={L.cx} y={L.cy - L.r - 26} text="in the mixture" size={36} color={INK_SOFT} anchor="middle" at={K10.react + 30} out={K10.left - 10} />
				<Note x={L.cx} y={L.cy + L.r + 50} text="left over sets the pH" size={42} color={BASE_INK} anchor="middle" at={K10.left} />
				<Note x={L.cx} y={L.cy + L.r + 100} text="spread through the total volume" size={38} color={INK_SOFT} anchor="middle" at={K10.total + 10} />
				{line('1  n(H^{+}) and n(OH^{-})', K10.find, K10.subtract, 420)}
				{line('2  subtract: the excess', K10.subtract, K10.divide, 520)}
				{line('3  c = excess ÷ total volume', K10.divide, undefined, 620)}
				{void K10.mixing}{void K10.runs}{void K10.sets}{void PROTON}{void BASE}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- worked example 3 board ----------
export const BW3 = {task: {x: 96, s: 52}, strip: {x: 96, y: 252, s: 38}, card: {x: 96, y: 300, w: 770, lh: 62, s: 31}, wx: 920, wy: [410, 510, 610, 710], ws: 44};
const TASK3 = 'Find the pH of the mixture';
const LINE_HCL = 'HCl: 40.0 mL, 0.150 mol/L';
const LINE_BA = 'Ba(OH)_2: 60.0 mL, 0.0800 mol/L (2 OH^{-} each)';
const Board3: React.FC<{at?: [number, number, number]; lit?: ([number, number] | undefined)[]; marks?: {sub: string; at: number; out?: number}[][]; dim?: number}> = ({at = [-100, -100, -100], lit = [], marks = [], dim}) => (
	<DimG at={dim ?? 1e9} to={0.35}>
		<EqLine items={eq(['H^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'H_2O(l)'], at[0] - 6)} x={BW3.strip.x} y={BW3.strip.y} size={BW3.strip.s} />
		<GCard x={BW3.card.x} y={BW3.card.y} w={BW3.card.w} lh={BW3.card.lh} size={BW3.card.s} at={at[0] - 6} lines={[
			{t: LINE_HCL, at: at[0], lit: lit[0], marks: marks[0]},
			{t: LINE_BA, at: at[1], lit: lit[1], marks: marks[1]},
			{t: '25 °C', at: at[2], grey: true},
		]} />
	</DimG>
);
const BAR_K = 62500;
const BA: BarSpec = {label: 'H^{+} 0.00600 mol', n: 0.006, color: PROTON, ink: PROTON_INK};
const BB: BarSpec = {label: 'OH^{-} 0.00960 mol', n: 0.0096, color: BASE, ink: BASE_INK};

// ---------- 11. Worked example 3: moles and the excess ----------
const S11 = 'we3-excess';
const K11 = cues(sc(S11), {forty: 'Forty millilitres', sixty: 'sixty millilitres of', barium: 'barium hydroxide', acid: 'The acid gives', z600: 'zero point zero zero six', ba: 'Barium hydroxide releases', two: 'two hydroxide ions each', gives: 'it gives zero', z960: 'zero point zero zero nine', so: 'So hydroxide is', excess: 'in excess'});
/** A beaker plate with hydronium or hydroxide tokens in its liquid (counts drawn roughly to scale) and a label. */
const IonBeaker: React.FC<{x: number; y: number; h: number; kind: 'H' | 'OH'; n: number; at: number; label: string; lit?: number}> = ({x, y, h, kind, n, at, label, lit}) => {
	const f = useCurrentFrame();
	const w = beakerW(h);
	const g = lit === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - lit) / 40)) * Math.PI));
	return (
		<Fade at={at}>
			<LabelBeaker x={x} y={y} h={h} at={-100} lines={[{t: label, at: -100, color: kind === 'H' ? PROTON_INK : BASE_INK}]} size={34} />
			{Array.from({length: n}, (_, i) => {
				const cx = x + w * (0.25 + 0.17 * (i % 4)) + Math.sin(f * 0.05 + i) * 3, cy = y + h * (0.56 + 0.15 * Math.floor(i / 4)) + Math.cos(f * 0.045 + i) * 3;
				return kind === 'H' ? <H3O key={i} x={cx} y={cy} s={1.3} pop={1 + 0.25 * g} /> : <OHg key={i} x={cx} y={cy} s={1.3} pop={1 + 0.25 * g} />;
			})}
		</Fade>
	);
};
export const SceneWe3Excess: React.FC = () => {
	const {wx, wy, ws} = BW3;
	const ly = gLineY(BW3.card.y, 1, BW3.card.lh);
	const r2 = subX(LINE_BA, '2 OH^{-}', BW3.card.s, 600);
	const rx = BW3.card.x + 28 + (r2.x1 + r2.x2) / 2;
	return (
		<Overlay>
			<TaskLine text={TASK3} at={2} size={BW3.task.s} />
			<StepAfter task={TASK3} text="Step 1 of 2: the excess" at={K11.forty + 20} />
			<Board3 at={[K11.forty + 6, K11.sixty, K11.barium + 14]} lit={[[K11.acid, K11.ba], [K11.ba, K11.so]]} dim={K11.so} />
			<Ring cx={rx} cy={ly - BW3.card.s * 0.32} rx={(r2.x2 - r2.x1) / 2 + 16} ry={BW3.card.s * 0.7} at={K11.two} out={K11.so} color={BASE} seed={4} />
			<Fade at={-100} out={K11.so + 6}>
				<WLine x={wx} y={wy[0]} size={ws} items={P('n(H^{+}) = 0.150 × 0.0400', K11.acid + 10, {t: '= 0.00600 mol', color: PROTON_INK}, K11.z600 + 24)} />
				<WLine x={wx} y={wy[1]} size={ws} items={P('n(OH^{-}) = 2 × 0.0800 × 0.0600', K11.gives, {t: '= 0.00960 mol', color: BASE_INK}, K11.z960 + 30)} />
			</Fade>
			<LimitBars x={wx} y={wy[0] - 40} k={BAR_K} a={BA} b={BB} at={K11.so + 4} use={K11.excess} useDur={34} size={32} />
			<AChip x={wx} y={wy[2] + 10} text="excess OH^{-} = 0.00360 mol" size={40} color={BASE_INK} hand={false} at={K11.excess + 30} />
			<IonBeaker x={110} y={640} h={270} kind="H" n={5} at={K11.forty + 10} label="HCl, 40.0 mL" lit={K11.acid} />
			<IonBeaker x={470} y={640} h={270} kind="OH" n={8} at={K11.sixty + 10} label="Ba(OH)_2, 60.0 mL" lit={K11.ba} />
			{void INK}{void mw}
		</Overlay>
	);
};

// ---------- 12. Worked example 3: total volume and pH ----------
const S12 = 'we3-ph';
const K12 = cues(sc(S12), {spreads: 'spreads through', all: 'all one hundred', z0360: "so it's zero", poh: 'The pOH is', ph: 'so the pH is', r12556: 'twelve point five', div: 'Dividing by the', forty: 'forty millilitres alone', slip: 'classic slip'});
export const SceneWe3Ph: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW3;
	const spread = smooth(prog(f, K12.all + 10, 30));
	const stubW = (0.0096 - 0.006) * BAR_K * 0.45;
	const TX = 560, TY = 612;
	return (
		<Overlay>
			<TaskLine text={TASK3} at={-100} size={BW3.task.s} />
			<StepAfter task={TASK3} text="Step 2 of 2: the pH" at={6} />
			<Board3 dim={K12.div} marks={[[{sub: '40.0 mL', at: K12.all, out: K12.z0360 + 20}], [{sub: '60.0 mL', at: K12.all + 8, out: K12.z0360 + 20}]]} />
			<DimG at={K12.div} to={0.35}><KeptChip x={96} y={600} text="excess OH^{-} = 0.00360 mol" at={-100} pulse={K12.spreads} color={BASE_INK} size={32} /></DimG>
			<g opacity={1 - spread}>
				<LimitBars x={TX} y={TY} k={BAR_K} a={BA} b={BB} at={-100} use={-100} useDur={1} s={0.45} labels={false} />
			</g>
			<Fade at={K12.all + 10} out={K12.poh}>
				<rect x={TX} y={TY + 30} width={stubW + (300 - stubW) * spread} height={30 + 30 * spread} rx={10} fill={BASE} opacity={0.18 + 0.4 * (1 - spread)} stroke={BASE} strokeWidth={3} strokeDasharray="10 6" />
				<Sx x={TX + 150} y={TY + 130} text="100.0 mL" size={30} color={BASE_INK} anchor="middle" weight={700} at={K12.all + 24} />
			</Fade>
			<WLine x={wx} y={wy[0]} size={ws} dim={K12.z0360} items={P('V(total) = 40.0 + 60.0', K12.all + 10, '= 100.0 mL = 0.1000 L', K12.all + 34)} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K12.poh} items={P('[OH^{-}] = 0.00360 ÷ 0.1000', K12.z0360, '= 0.0360 mol/L', K12.z0360 + 30)} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K12.r12556} items={P('pOH = −log(0.0360)', K12.poh, '= 1.444', K12.poh + 34)} />
			<WLine x={wx} y={wy[3]} size={ws} dim={K12.div} items={P('pH = 14.00 − 1.444', K12.ph, {t: '= 12.556', color: TEAL}, K12.r12556)} />
			<KeptChip x={96} y={700} text="pH = 12.556" at={K12.r12556 + 26} color={TEAL} size={42} />
			<Note x={110} y={830} text="3 s.f. → 3 d.p." size={32} color={INK_SOFT} hand={false} at={K12.r12556 + 36} />
			<MistakeX x={wx} y={wy[3] + 60} text="÷ 0.0400 L: pH 12.954" at={K12.div} cross={K12.forty + 20} note="use the total volume" size={36} />
			{void K12.slip}
		</Overlay>
	);
};

// ---------- 13. Memory aid ----------
const S13 = 'memory-aid';
const K13 = cues(sc(S13), {one: 'one pH unit', base: 'For a base', ph: 'pH equals fourteen', mix: 'And for mixtures', neut: 'neutralise first'});
export const SceneAid: React.FC = () => (
	<>
		<Heading text="Remember" at={4} size={58} />
		<Overlay>
			<DimG at={K13.ph} to={0.6}>
				<Note x={120} y={320} text="One pH unit is ten times." size={70} color={TEAL} at={K13.one} />
				<LogRuler x={260} y={460} w={900} at={K13.one + 20} size={20} captions={false} hi={[{i: 3, at: K13.one + 40}]} />
			</DimG>
			<DimG at={K13.neut} to={0.6}>
				<Note x={120} y={660} text="Base: [OH^{-}] → pOH → pH = 14 − pOH (25 °C)" size={60} color={INK} at={K13.ph} />
			</DimG>
			<Note x={120} y={830} text="Mixtures: neutralise first, then dilute." size={66} color={INK} at={K13.neut} />
			<LimitBars x={1340} y={760} k={BAR_K} a={BA} b={BB} at={K13.neut + 20} use={K13.neut + 40} useDur={30} s={0.5} labels={false} />
			{void K13.base}{void K13.mix}
		</Overlay>
	</>
);
