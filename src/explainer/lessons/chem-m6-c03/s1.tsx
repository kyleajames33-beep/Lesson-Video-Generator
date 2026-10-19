// M6 C03 scenes 1 to 5: no fizz but it warms, why it warms, exothermic and per mole of water, about minus 57,
// the calorimeter and q = mcΔT.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER, CAL_G} from './assets';
import {
	AChip, AMBER, AMBER_INK, Arrow, BASE_INK, CalCup, Card, ClTok, CupOutline, DrawPath, EnergyStep, EqLine, FTile, Fade, GREY_INK, HEAT, HEAT_INK, HTok, INK, INK_SOFT, LensFrame, Mistake,
	NaTok, Note, OHTok, Overlay, PROTON_INK, PicH, Pieces, Proton, Ring, Ripples, Sx, TEAL, TempChip, VBracket, WATER_INK, WTok, calPt, calW, clamp01, eq, fitSize, lerp, mw, picW, readW, smooth, vis, wob,
} from './parts';
import type {Piece} from './parts';

const LENS_BG = '#eef6fb';

// ---------- 1. Hook: no fizz, but it warms ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {hcl: 'hydrochloric acid and', naoh: 'sodium hydroxide, both', both: 'both at twenty', pour: 'Pour them together', cup: 'in a foam cup', nothing: 'nothing to see', nob: 'no bubbles', but: 'But the temperature', t28: 'twenty eight degrees', sohow: 'So how much heat', diff: 'different amounts'});
/** A beaker plate that lifts along an arc, tilts to pour into the cup, then leaves. mirror: spout on the right. */
const PourBeaker: React.FC<{x: number; y: number; h: number; mirror: boolean; at: number; to: [number, number]; ang: number; stream: [number, number]}> = ({x, y, h, mirror, at, to, ang, stream}) => {
	const f = useCurrentFrame();
	const w = picW(BEAKER, h);
	const go = smooth(prog(f, at, 30));
	const tilt = smooth(prog(f, at + 20, 20)) * (1 - smooth(prog(f, at + 74, 16)));
	const leave = prog(f, at + 80, 18);
	if (leave >= 1) return null;
	const cx0 = x + w / 2, cy0 = y + h / 2;
	const cx = lerp(cx0, to[0], go), cy = lerp(cy0, to[1], go) - Math.sin(go * Math.PI) * 60;
	const a = ang * tilt;
	// spout tip in the beaker's own frame (upper left of the plate; mirrored to the right)
	const sx = (mirror ? 1 : -1) * w * 0.46, sy = -h * 0.42;
	const r = (a * Math.PI) / 180;
	const tip: [number, number] = [cx + sx * Math.cos(r) - sy * Math.sin(r), cy + sx * Math.sin(r) + sy * Math.cos(r)];
	const flow = vis(f, at + 34, at + 72, 8);
	return (
		<g opacity={1 - leave}>
			{flow > 0.01 ? <path d={`M${tip[0]},${tip[1]} Q${(tip[0] + stream[0]) / 2},${tip[1] - 10} ${stream[0]},${stream[1]}`} fill="none" stroke="#9cc8e6" strokeWidth={10} strokeLinecap="round" opacity={0.85 * flow} /> : null}
			<g transform={`translate(${cx},${cy}) rotate(${a}) scale(${mirror ? -1 : 1},1) translate(${-w / 2},${-h / 2})`}>
				<PicH p={BEAKER} x={0} y={0} h={h} />
			</g>
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 815, CY = 330, CH = 600;
	const cw = calW(CH), ccx = CX + cw / 2;
	const BH = 330, bw = picW(BEAKER, BH);
	const LX = 150, RX = 1920 - 150 - bw, BY = 560;
	const lift = 46 * prog(f, K1.pour - 10, 16) * (1 - prog(f, K1.pour + 150, 18));
	const mouth: [number, number] = [ccx, CY + CAL_G.cutV * CH - 6];
	const probe = calPt(CX, CY, CH, CAL_G.probe);
	const glow = prog(f, K1.but + 10, 50);
	const [wx, wy] = calPt(CX, CY, CH, CAL_G.win);
	return (
		<>
			<Heading text="No fizz. How much heat?" at={K1.sohow} size={60} />
			<Overlay>
				<CalCup x={CX} y={CY} h={CH} lift={lift} glow={glow} />
				<TempChip x={probe[0] + 18} y={probe[1] - 8 - lift} from={21.5} to={28.0} at={K1.pour + 120} rise={K1.but + 8} dur={56} up={K1.t28} />
				{/* the two starting solutions */}
				<Fade at={0} out={K1.pour}>
					<Note x={LX + bw / 2} y={BY + BH + 56} text="hydrochloric acid" size={38} anchor="middle" at={K1.hcl} />
					<Note x={RX + bw / 2} y={BY + BH + 56} text="sodium hydroxide" size={38} anchor="middle" at={K1.naoh} />
					<TempChip x={LX + bw / 2 - readW() / 2} y={BY - 76} from={21.5} at={K1.both} />
					<TempChip x={RX + bw / 2 - readW() / 2} y={BY - 76} from={21.5} at={K1.both + 6} />
				</Fade>
				<PourBeaker x={LX} y={BY} h={BH} mirror at={K1.pour} to={[ccx - 250, CY + 40]} ang={62} stream={[mouth[0] - 30, mouth[1]]} />
				<PourBeaker x={RX} y={BY} h={BH} mirror={false} at={K1.cup + 6} to={[ccx + 300, CY + 60]} ang={-62} stream={[mouth[0] + 30, mouth[1]]} />
				{/* nothing to see */}
				<Ring cx={wx} cy={wy} rx={CAL_G.winR[0] * cw + 40} ry={CAL_G.winR[1] * CH + 40} at={K1.nob - 8} out={K1.but} color={AMBER} seed={4} />
				<Note x={CX + cw + 60} y={wy + 12} text="no bubbles, no colour change" size={38} color={AMBER_INK} at={K1.nob} out={K1.but} />
				<Ripples x={wx} y={wy} at={K1.but + 20} r={110} o={0.7} />
				{/* different amounts */}
				<CupOutline x={1390} y={500} w={330} h={430} fill={0.82} at={K1.diff - 4} dashed stroke={INK_SOFT} />
				<Sx x={1270} y={760} text="?" size={110} color={AMBER_INK} anchor="middle" hand at={K1.diff + 4} />
				<Note x={1555} y={985} text="more solution" size={34} color={INK_SOFT} anchor="middle" at={K1.diff + 10} />
				{void K1.nothing}{void K1.t28}{void HEAT}
			</Overlay>
		</>
	);
};

// ---------- 2. Why it warms: spectators and water ----------
const H2 = 'why-warm';
const K2 = cues(sc(H2), {why: 'why does it warm', hions: 'hydrogen ions and', chl: 'chloride ions', na: 'sodium ions and', oh: 'hydroxide ions', spect: 'spectator ions', only: 'The only change', water: 'make water', less: 'less chemical energy', heat: 'released as heat', warming: 'warming the solution'});
type Pr = {h: [number, number]; o: [number, number]; at: number};
export const SceneWhyWarm: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 600, r: 330};
	const U = (u: number, v: number): [number, number] => [L.cx + u * L.r * 0.74, L.cy + v * L.r * 0.74];
	const pairs: Pr[] = [
		{h: [-0.75, -0.45], o: [-0.1, -0.7], at: K2.water - 40},
		{h: [0.1, 0.0], o: [0.75, -0.15], at: K2.water - 20},
		{h: [-0.7, 0.5], o: [-0.05, 0.75], at: K2.water},
	];
	const cl: [number, number][] = [[0.35, -0.85], [-0.95, 0.05], [0.65, 0.55]];
	const nas: [number, number][] = [[-0.3, -0.15], [0.95, 0.3], [0.3, 0.95]];
	const grey = prog(f, K2.spect, 20);
	const items = eq(['H^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'H_2O(l)'], [K2.water, K2.water + 6, K2.water + 10, K2.water + 16, K2.water + 22]);
	return (
		<>
			<Heading text="Why does it warm up?" at={4} size={60} />
			<Overlay>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.why}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					<circle cx={L.cx} cy={L.cy} r={L.r} fill={HEAT} opacity={0.12 * prog(f, K2.heat + 10, 60)} />
					{cl.map(([u, v], i) => { const [x, y] = U(u, v), [dx, dy] = wob(f, i * 2.1); return <ClTok key={'c' + i} s={1.4} x={x + dx} y={y + dy} o={prog(f, K2.chl + i * 5, 12)} grey={grey} />; })}
					{nas.map(([u, v], i) => { const [x, y] = U(u, v), [dx, dy] = wob(f, i * 1.7 + 4); return <NaTok key={'n' + i} s={1.4} x={x + dx} y={y + dy} o={prog(f, K2.na + i * 5, 12)} grey={grey} />; })}
					{pairs.map((p, i) => {
						const [hx, hy] = U(...p.h), [ox, oy] = U(...p.o);
						const mx = (hx + ox) / 2, my = (hy + oy) / 2;
						const m = smooth(prog(f, p.at, 24));
						const done = f >= p.at + 24;
						const [dx, dy] = wob(f, i * 1.3 + 2);
						const k = 1 - m;
						return (
							<g key={'p' + i}>
								{!done ? <HTok s={1.4} x={lerp(hx + dx, mx - 26, m)} y={lerp(hy + dy, my, m)} o={prog(f, K2.hions + i * 5, 12)} /> : null}
								{!done ? <OHTok s={1.4} x={lerp(ox - dx, mx + 26, m)} y={lerp(oy - dy, my, m)} o={prog(f, K2.oh + i * 5, 12)} /> : null}
								{done ? <WTok x={mx} y={my} s={1.45} pop={1 + 0.3 * (1 - smooth(prog(f, p.at + 24, 14)))} /> : null}
								<Ripples x={mx} y={my} at={K2.heat + i * 8} r={95} />
								{void k}
							</g>
						);
					})}
				</LensFrame>
				<Note x={1010} y={300} text="H^{+}(aq) = H_3O^{+}" size={34} color={PROTON_INK} at={K2.hions + 12} out={K2.spect} />
				<Note x={L.cx} y={L.cy + L.r + 50} text="spectators: unchanged" size={38} color={GREY_INK} anchor="middle" at={K2.spect + 6} out={K2.heat} />
				<EqLine items={items} x={1060} y={380} size={fitSize(items, 760, 52)} />
				<EnergyStep x={1100} y={560} w={680} h={300} at={K2.less} top="H^{+} + OH^{-}" bot="H_2O" dropAt={K2.less + 30} gap={{text: 'heat out', at: K2.heat}} />
				{void K2.only}{void K2.warming}
			</Overlay>
		</>
	);
};

// ---------- 3. Exothermic, negative, per mole of water ----------
const H3 = 'per-mole';
const K3 = cues(sc(H3), {exo: 'is exothermic', lose: 'chemicals lose energy', neg: 'is negative', twice: 'Twice as much of', water2: 'twice as much water', heat2: 'twice as much heat', divide: 'divide by the water', enth: 'The enthalpy of neutralisation', mole: 'per mole of water'});
const CupWater: React.FC<{x: number; y: number; w: number; h: number; n: number; fill: number; at: number; out?: number; rip: number; tag: string; tagAt: number}> = ({x, y, w, h, n, fill, at, out, rip, tag, tagAt}) => {
	const f = useCurrentFrame();
	const top = y + h * (1 - fill);
	const cols = 2, rows = Math.ceil(n / cols);
	const pts = Array.from({length: n}, (_, i) => [x + w * (0.32 + 0.36 * (i % cols)), top + ((h * fill) / (rows + 1)) * (Math.floor(i / cols) + 1)] as [number, number]);
	return (
		<g>
			<CupOutline x={x} y={y} w={w} h={h} fill={fill} at={at} out={out}>
				{pts.map(([px, py], i) => <WTok key={i} x={px} y={py} s={0.9} o={prog(f, at + 10 + i * 4, 10)} />)}
				{pts.map(([px, py], i) => <Ripples key={'r' + i} x={px} y={py} at={rip + i * 6} until={out} r={70} />)}
			</CupOutline>
			<Note x={x + w / 2} y={y + h + 56} text={tag} size={40} color={HEAT_INK} anchor="middle" at={tagAt} out={out} />
		</g>
	);
};
export const ScenePerMole: React.FC = () => {
	const f = useCurrentFrame();
	const dimStep = prog(f, K3.twice, 16);
	return (
		<>
			<Heading text="Exothermic, so ΔH is negative" at={4} size={60} />
			<Overlay>
				<EnergyStep x={150} y={330} w={720} h={360} at={0} top="H^{+} + OH^{-}" bot="H_2O" dropAt={0} gap={{text: 'heat out', at: 0}} dh={{text: 'ΔH < 0', at: K3.neg}} o={1 - 0.62 * dimStep} size={44} />
				<Note x={150} y={800} text="exothermic: heat to the surroundings" size={40} color={HEAT_INK} at={K3.exo} out={K3.twice} />
				<Note x={150} y={860} text="the chemicals lose energy" size={36} color={INK_SOFT} at={K3.lose} out={K3.twice} />
				<CupWater x={1010} y={330} w={260} h={330} n={2} fill={0.42} at={K3.twice} out={K3.enth + 20} rip={K3.heat2 - 20} tag="heat" tagAt={K3.heat2} />
				<CupWater x={1420} y={330} w={260} h={330} n={4} fill={0.84} at={K3.twice + 10} out={K3.enth + 20} rip={K3.heat2} tag="2 × heat" tagAt={K3.heat2 + 6} />
				<Note x={1345} y={210} text="2 × the solutions: 2 × the water" size={34} color={WATER_INK} anchor="middle" at={K3.water2} out={K3.enth + 20} />
				<Note x={1345} y={790} text="heat ÷ mol of water = same" size={46} color={TEAL} anchor="middle" at={K3.divide} />
				<Card x={150} y={862} w={1620} h={118} at={K3.enth - 4} stroke={TEAL} sw={3.5} />
				<Sx x={186} y={938} text="Enthalpy of neutralisation, ΔH: enthalpy change per mole of water formed (kJ/mol)" size={38} color={INK} weight={600} at={K3.enth} />
				{void K3.mole}
			</Overlay>
		</>
	);
};

// ---------- 4. The same reaction, about minus 57 ----------
const H4 = 'same-reaction';
const K4 = cues(sc(H4), {strong: 'strong acids,', with: 'With a strong acid', always: 'always the same one', hplus: 'hydrogen ion plus', value: 'value comes out', m57: 'minus fifty seven', partly: 'only partly split', diff: 'different values'});
type Row = {t: string; sp: [string, string]; at: number};
export const SceneSame: React.FC = () => {
	const f = useCurrentFrame();
	const rows: Row[] = [
		{t: 'HCl + NaOH', sp: ['Na^{+}', 'Cl^{-}'], at: K4.with},
		{t: 'HNO_3 + KOH', sp: ['K^{+}', 'NO_3^{-}'], at: K4.always - 20},
		{t: 'HNO_3 + NaOH', sp: ['Na^{+}', 'NO_3^{-}'], at: K4.always + 20},
	];
	const dimRows = prog(f, K4.value, 16);
	const items = eq(['H^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'H_2O(l)'], K4.hplus + 10);
	const ES = fitSize(items, 760, 54);
	const RY = (i: number) => 470 + i * 140;
	return (
		<>
			<Heading text="The same reaction, whichever pair" at={4} size={60} />
			<Overlay>
				<g opacity={1 - 0.65 * dimRows}>
					<FTile x={96} y={300} formula="HCl" size={50} at={K4.strong - 10} />
					<Note x={96 + 160} y={292} text="strong acid: splits completely into ions" size={36} color={AMBER_INK} at={K4.strong} />
					<Note x={96 + 160} y={336} text="(later video)" size={30} color={INK_SOFT} at={K4.strong + 10} />
					{rows.map((r, i) => {
						const y = RY(i);
						const go = smooth(prog(f, r.at + 24, 34));
						return (
							<g key={i}>
								<Sx x={96} y={y} text={r.t} size={46} color={INK} weight={800} at={r.at} />
								{r.sp.map((s, k) => {
									const x0 = 470 + k * 82;
									return (
										<g key={k} opacity={prog(f, r.at + 10, 10) * (1 - go)}>
											{k === 0 ? <NaTok x={x0 + go * 40} y={y - 14 + go * 60} label={s} grey={1} /> : <ClTok x={x0 + go * 40} y={y - 14 + go * 60} label={s} grey={1} s={s.length > 6 ? 1.1 : 1} />}
										</g>
									);
								})}
								<g opacity={prog(f, r.at + 30, 12)}>
									<Proton x={680} y={y - 14} s={1} />
									<OHTok x={752} y={y - 14} />
								</g>
							</g>
						);
					})}
				</g>
				<VBracket x={800} y1={RY(0) - 50} y2={RY(2) + 22} at={K4.hplus - 4} color={TEAL} d={26} />
				<Arrow x1={840} y1={RY(1) - 14} x2={930} y2={RY(1) - 14} at={K4.hplus + 4} color={TEAL} width={5} />
				<EqLine items={items} x={950} y={RY(1)} size={ES} />
				<Note x={950} y={RY(1) - 80} text="the only change, every time" size={34} color={TEAL} at={K4.hplus + 20} out={K4.m57} />
				<Card x={950} y={700} w={560} h={100} at={K4.m57 - 4} stroke={TEAL} sw={4} />
				<Sx x={980} y={770} text="ΔH ≈ −57 kJ/mol" size={54} color={INK} weight={800} at={K4.m57} />
				<Note x={1530} y={765} text="dilute; no precipitate" size={28} color={INK_SOFT} hand={false} at={K4.m57 + 14} />
				<Mistake x={950} y={850} text="−57 kJ/mol for every acid and base" at={K4.diff} note="partly split acids differ: later video" size={34} />
				{void K4.partly}{void BASE_INK}
			</Overlay>
		</>
	);
};

// ---------- 5. The calorimeter and q = mcΔT ----------
const H5 = 'calorimeter';
const K5 = cues(sc(H5), {cal: 'called a calorimeter', foam: 'Foam insulates', assume: 'we assume all', q: 'q equals m', m: 'm is the mass', mL: 'one millilitre of', c: 'c the specific', dT: 'Delta T is the final'});
export const SceneCalorimeter: React.FC = () => {
	const f = useCurrentFrame();
	const PX = 150, PY = 190, PH = 800;
	const [wx, wy] = calPt(PX, PY, PH, CAL_G.win);
	const ES = 104, EX = 760, EY = 330;
	const eqItems: Piece[] = [{t: 'q', at: K5.q, gap: 30}, {t: '=', at: K5.q + 4, gap: 30}, {t: 'm', at: K5.q + 8, gap: 26}, {t: 'c', at: K5.q + 12, gap: 26}, {t: 'ΔT', at: K5.q + 16}];
	let cx = EX;
	const segs = eqItems.map(p => { const w = mw(p.t, ES, false, 800); const r = {x: cx, w}; cx += w + (p.gap ?? 30); return r; });
	const lit = (i: number, a: number, b: number) => vis(f, a, b, 10);
	const allBack = prog(f, K5.dT + 80, 16);
	const lineO = (a: number, next: number) => 1 - 0.55 * prog(f, next, 12) * (1 - allBack) + 0 * a;
	const MX = 760;
	return (
		<>
			<Overlay>
				<CalCup x={PX} y={PY} h={PH} glow={prog(f, K5.assume, 30) * 0.8} />
				<Ripples x={wx} y={wy} at={K5.assume} r={150} o={0.8} />
				<HeatWall x={PX} y={PY} h={PH} at={K5.assume + 10} out={K5.q} />
				<Note x={MX} y={330} text="calorimeter" size={66} color={INK} at={K5.cal} out={K5.q - 10} />
				<Note x={MX} y={400} text="an insulated cup for measuring the heat of a reaction" size={36} color={INK_SOFT} at={K5.cal + 12} out={K5.q - 10} />
				<Note x={MX} y={520} text="assume: all heat warms the solution" size={40} color={HEAT_INK} at={K5.assume} out={K5.q - 10} />
				{/* the equation, alone at the top; each symbol lights on its cue */}
				{([[2, K5.m, K5.c], [3, K5.c, K5.dT], [4, K5.dT, K5.dT + 80]] as [number, number, number][]).map(([i, a, b]) => {
					const g = lit(i, a, b);
					return g > 0.01 ? <rect key={i} x={segs[i].x - 12} y={EY - ES * 0.86} width={segs[i].w + 24} height={ES * 1.08} rx={14} fill="#f6d77a" opacity={0.55 * g} /> : null;
				})}
				<Pieces x={EX} y={EY} items={eqItems} size={ES} />
				<Note x={EX} y={EY + 60} text="from Year 11" size={30} color={INK_SOFT} at={K5.q + 30} out={K5.m} />
				<g opacity={lineO(0, K5.c)}>
					<Sx x={MX} y={530} text="m = mass of all the solution (g)" size={42} color={INK} weight={700} at={K5.m} />
					<Sx x={MX + 30} y={588} text="1 mL ≈ 1 g (dilute solution)" size={36} color={INK_SOFT} weight={600} at={K5.mL} />
				</g>
				<g opacity={lineO(0, K5.dT)}>
					<Sx x={MX} y={680} text="c = 4.18 J g^{-1} °C^{-1}" size={42} color={INK} weight={700} at={K5.c} />
					<Sx x={MX + 30} y={738} text="specific heat capacity (treat as water)" size={36} color={INK_SOFT} weight={600} at={K5.c + 20} />
				</g>
				<g>
					<Sx x={MX} y={830} text="ΔT = T(final) − T(initial)" size={42} color={INK} weight={700} at={K5.dT} />
				</g>
				{void K5.foam}{void clamp01}
			</Overlay>
		</>
	);
};
/** Short warm arcs turning back at the cup wall (the "all heat stays in" assumption). */
const HeatWall: React.FC<{x: number; y: number; h: number; at: number; out?: number}> = ({x, y, h, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const [lx, ly] = calPt(x, y, h, CAL_G.wallL), [rx, ry] = calPt(x, y, h, CAL_G.wallR);
	const arc = (px: number, py: number, s: number) => `M${px - s * 10},${py - 40} Q${px + s * 22},${py} ${px - s * 10},${py + 40}`;
	return (
		<g opacity={o} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round">
			<path d={arc(lx + 26, ly, -1)} /><path d={arc(rx - 26, ry, 1)} />
			<path d={`M${lx + 18},${ly - 50} L${lx + 34},${ly - 36} M${rx - 18},${ry - 50} L${rx - 34},${ry - 36}`} />
		</g>
	);
};
void AChip; void DrawPath; void INK; void EqLine; void picW;
