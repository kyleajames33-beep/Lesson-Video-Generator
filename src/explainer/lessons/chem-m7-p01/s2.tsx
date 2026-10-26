// M7 P01 scenes 6 to 10: the logged runs (three coded runs plotted point by point with rings and ΔT brackets), the
// results table and means (bars shrink with each CH2), the bonding explanation (C03's force view: covalent bonds intact,
// more dispersion contact for nonane, fewer molecules escape), published boiling points for C1 to C9 (rising, shrinking
// steps; described, not explained) and the agreement strip (higher boiling point, smaller drop).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, Overlay, Sx, TGraph, TaskLine, gx, gy, smooth} from '../chem-m6-p02/parts';
import type {GG} from '../chem-m6-p02/parts';
import {BallStick, DISP, Dots, Place, Tag, TickMark, alkane3d, projCarbons} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {sc} from './common';
import {AMBER_INK, Bars, DropBracket, ENERGY, GREENC, INK, INK_SOFT, MEANS, NAMES, RUN, RUN_INK, RunLine, TEAL} from './parts';

// ---------- the logged-run graph ----------
export const G6: GG = {x: 260, y: 190, w: 1300, h: 600, x0: 0, x1: 180, y0: 15, y1: 23};
const LoggedGraph: React.FC<{at: number; runs: [number, number?][]; brackets: number[]; labels?: (number | undefined)[]; lsize?: number}> = ({at, runs, brackets, labels = [], lsize = 28}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<TGraph g={G6} at={at} xTicks={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180]} yTicks={[15, 16, 17, 18, 19, 20, 21, 22, 23]} xMinor={20} yMinor={1} xLabel="time after lifting (s)" yLabel="temperature (°C)" />
			<g opacity={vis(f, at + 10)}>
				<line x1={G6.x} x2={G6.x + G6.w} y1={gy(G6, 21.8)} y2={gy(G6, 21.8)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 8" />
				<Sx x={G6.x + G6.w + 12} y={gy(G6, 21.8) + 8} text="start: 21.8 °C" size={24} color={INK_SOFT} weight={700} at={-1000} />
			</g>
			{runs.map(([a, r], i) => <RunLine key={i} g={G6} i={i} at={a} ring={r} />)}
			{brackets.map((b, i) => <DropBracket key={i} g={G6} i={i} at={b} label={labels[i] !== undefined ? MEANS[i].toFixed(1) : undefined} labelAt={labels[i]} size={lsize} />)}
		</g>
	);
};

// ---------- 6. Logged runs ----------
const K6 = cues(sc('logged-runs'), {here: "Here's one", hep: 'Heptane drops', f158: 'fifteen point eight', warms: 'warms up', oct: 'Octane falls', f195: 'nineteen point five', non: 'Nonane barely', f211: 'twenty one point one'});
export const SceneRuns: React.FC = () => {
	const f = useCurrentFrame();
	const tag = (i: number, t: string, at: number, out?: number) => {
		const L: [number, number] = [[100, 15.8], [140, 19.5], [160, 21.1]][i] as [number, number];
		return <Tag x={gx(G6, L[0]) - 30} y={gy(G6, L[1]) + 26} text={t} at={at} out={out} size={30} color={RUN_INK[i]} fill="#fffdf8" anchor="end" />;
	};
	return (
		<Overlay>
			<LoggedGraph at={K6.here} runs={[[K6.hep, K6.f158], [K6.oct, K6.f195], [K6.non, K6.f211]]} brackets={[K6.f158 + 10, K6.f195 + 10, K6.f211 + 10]} />
			<Tag x={G6.x + G6.w} y={G6.y - 70} text="sample results" at={K6.here} size={22} anchor="end" />
			<g opacity={dimAt(f, K6.oct, 0.4)}>{tag(0, '15.8 °C', K6.f158)}</g>
			<Tag x={gx(G6, 150)} y={gy(G6, 17.6) + 20} text="liquid gone: heat flows back in" at={K6.warms} out={K6.oct} size={24} anchor="middle" />
			<g opacity={dimAt(f, K6.non, 0.4)}>{tag(1, '19.5 °C', K6.f195)}</g>
			{tag(2, '21.1 °C', K6.f211)}
			{[0, 1, 2].map(i => <g key={i} opacity={vis(f, [K6.hep, K6.oct, K6.non][i])}><rect x={1620} y={360 + i * 60} width={40} height={10} rx={5} fill={RUN[i]} /><Sx x={1676} y={372 + i * 60} text={NAMES[i]} size={28} color={RUN_INK[i]} weight={800} at={-1000} /></g>)}
		</Overlay>
	);
};

// ---------- 7. Results ----------
const K7 = cues(sc('results'), {table: 'the table', hep: "Heptane's three", t1: 'five point eight', t2: 'six point two', t3: ['six point zero', 1], mean: ['six point zero', 2], oct: 'two point two', non: 'zero point seven', smaller: 'smaller.'});
const COLX = [980, 1230, 1390, 1550, 1730];
const ROWY = [400, 480, 560];
const CELLS = [['5.8', '6.2', '6.0', '6.0'], ['2.3', '2.0', '2.4', '2.2'], ['0.7', '0.6', '0.8', '0.7']];
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const times = [[K7.t1, K7.t2, K7.t3, K7.mean], [K7.oct - 20, K7.oct - 14, K7.oct - 8, K7.oct], [K7.non - 20, K7.non - 14, K7.non - 8, K7.non]];
	const rowDim = [K7.oct - 20, K7.non - 20, K7.smaller];
	return (
		<Overlay>
			<Place keys={[{at: -100, x: 0, y: 0, s: 1}, {at: 0, x: 0, y: 200, s: 0.55}]}>
				<LoggedGraph at={-100} runs={[[-100, -100], [-100, -100], [-100, -100]]} brackets={[-100, -100, -100]} labels={[K7.mean, K7.oct, K7.non]} lsize={44} />
			</Place>
			<Tag x={1840} y={250} text="sample results" at={K7.table} size={22} anchor="end" />
			<g opacity={vis(f, K7.table)}>
				<rect x={950} y={300} width={890} height={300} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				{['ΔT (°C)', 'trial 1', 'trial 2', 'trial 3', 'mean'].map((h, i) => <Sx key={i} x={COLX[i] + (i ? 40 : 0)} y={345} text={h} size={28} color={INK_SOFT} anchor={i ? 'middle' : 'start'} hand at={-1000} />)}
				<line x1={960} x2={1830} y1={360} y2={360} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
			</g>
			{CELLS.map((row, r) => (
				<g key={r}>
					<Sx x={COLX[0]} y={ROWY[r] + 10} text={NAMES[r]} size={32} color={RUN_INK[r]} weight={800} at={times[r][0] - 6} />
					{row.map((c, k) => {
						const o = prog(f, times[r][k], 10) * (k < 3 ? 1 - 0.55 * prog(f, rowDim[r], 14) : 1);
						return <Sx key={k} x={COLX[k + 1] + 40} y={ROWY[r] + 10} text={c} size={k === 3 ? 38 : 32} color={k === 3 ? RUN_INK[r] : INK} anchor="middle" weight={k === 3 ? 900 : 600} at={-1000} opacity={o} />;
					})}
				</g>
			))}
			<Bars x={1060} y={860} at={K7.smaller} k={30} />
			<Sx x={1450} y={760} text="+CH_2 → smaller drop" size={38} color={TEAL} hand at={K7.smaller + 20} />
			{void K7.hep}{void smooth}
		</Overlay>
	);
};

// ---------- 8. Bonding ----------
const K8 = cues(sc('bonding'), {why: 'Why?', cov: 'covalent', any: 'any', between: 'Between the', disp: 'dispersion', each: 'each extra', stronger: 'stronger,', last: 'last video', fewer: 'Fewer molecules', free: 'free', slowest: 'slowest,', least: 'cools least'});
const M7 = alkane3d(7), M9 = alkane3d(9);
const PAIRS = [{m: M7, cx: 500, n: 7, esc: 3}, {m: M9, cx: 1340, n: 9, esc: 1}];
const PY = [540, 650];
const U = 58;
export const SceneBonding: React.FC = () => {
	const f = useCurrentFrame();
	const esc = smooth(prog(f, K8.free, 60));
	return (
		<Overlay>
			<TaskLine text="Why does the drop shrink?" at={K8.why} size={54} y={130} />
			<g opacity={vis(f, K8.free)}>{PAIRS.map((p, i) => <rect key={i} x={p.cx - 300} y={470} width={600} height={300} rx={16} fill="#e3eef6" opacity={0.6} />)}</g>
			{PAIRS.map((p, i) => {
				const cA = projCarbons(p.m.atoms, p.cx, PY[0], U, 0, 0.35), cB = projCarbons(p.m.atoms, p.cx, PY[1], U, 0, 0.35);
				return (
					<g key={i}>
						<Sx x={p.cx} y={420} text={NAMES[i * 2]} size={36} color={RUN_INK[i * 2]} anchor="middle" weight={800} at={K8.why + 10} />
						{PY.map((y, j) => <BallStick key={j} atoms={p.m.atoms} bonds={p.m.bonds} orders={p.m.orders} cx={p.cx} cy={y} unitPx={U} yaw={0} pitch={0.35} glowAtoms={f >= K8.any && f < K8.between ? (k => (p.m.atoms[k].el === 'C' ? '#bfe3c9' : undefined)) : undefined} />)}
						<TickMark x={p.cx + (p.n * 0.82 * U) / 2 + 50} y={PY[0]} at={K8.any + 6} />
						<TickMark x={p.cx + (p.n * 0.82 * U) / 2 + 50} y={PY[1]} at={K8.any + 12} />
						{cA.map((a, k) => <Dots key={k} a={[a[0], a[1] + 18]} b={[cB[k][0], cB[k][1] - 18]} at={K8.stronger + k * 3} color={DISP} width={5} flicker />)}
						<Tag x={p.cx} y={720} text={i ? 'more contact: stronger' : 'less contact'} at={K8.stronger + 30} size={26} color="#2d6f9e" fill="#e3f0fa" anchor="middle" />
						{Array.from({length: p.esc}, (_, k) => {
							const x = p.cx - 120 + k * 120, y0 = 450 - esc * (200 + k * 30);
							return esc > 0.02 ? <g key={'e' + k} opacity={Math.min(1, esc * 3)}><BallStick atoms={p.m.atoms} bonds={p.m.bonds} orders={p.m.orders} cx={x} cy={y0} unitPx={16} yaw={0.4 + k} pitch={0.5} /><circle cx={x + 60} cy={y0 - 16} r={9} fill={ENERGY} /></g> : null;
						})}
					</g>
				);
			})}
			<Tag x={960} y={810} text="intramolecular: covalent bonds unchanged, unbroken" at={K8.any} size={28} color={GREENC} fill="#e3f3e9" anchor="middle" o={dimAt(f, K8.between, 0.45)} />
			<Tag x={960} y={870} text="intermolecular: dispersion forces (last video)" at={K8.between} size={28} color="#2d6f9e" fill="#e3f0fa" anchor="middle" o={dimAt(f, K8.slowest, 0.45)} />
			<Sx x={960} y={990} text="stronger forces → fewer escape each second → slower evaporation → smaller drop" size={34} color={INK} anchor="middle" hand at={K8.slowest} />
			{void K8.cov}{void K8.disp}{void K8.each}{void K8.last}{void K8.fewer}{void K8.least}
		</Overlay>
	);
};

// ---------- 9. Published boiling points ----------
const K9 = cues(sc('secondary-data'), {methane: 'Methane to', sec: 'secondary data', first: 'first nine', every: 'every step', smaller: 'smaller than', s73: 'seventy three', s25: 'twenty five', describe: 'Describe that', beyond: 'beyond'});
export const BP = [-161.5, -88.6, -42.1, -0.5, 36.1, 68.7, 98.4, 125.6, 150.8];
export const G9: GG = {x: 300, y: 240, w: 1080, h: 580, x0: 1, x1: 9, y0: -180, y1: 160};
const ptCol = (i: number) => (i >= 6 ? RUN_INK[i - 6] : INK);
const curve = (g: GG) => {
	const P = BP.map((v, i) => [gx(g, i + 1), gy(g, v)]);
	let d = `M${P[0][0]},${P[0][1]}`;
	for (let i = 0; i < P.length - 1; i++) {
		const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
		d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
	}
	return d;
};
export const BPGraph: React.FC<{at: number; pts: number; steps?: number; hi?: number; dimOthers?: number; values?: boolean}> = ({at, pts, steps, hi, dimOthers, values = true}) => {
	const f = useCurrentFrame();
	const g = G9;
	const dOth = dimOthers === undefined ? 1 : 1 - 0.7 * prog(f, dimOthers, 14);
	return (
		<g>
			<g opacity={dOth}>
				<TGraph g={g} at={at} xTicks={[1, 2, 3, 4, 5, 6, 7, 8, 9]} yTicks={[-160, -120, -80, -40, 0, 40, 80, 120, 160]} xMinor={1} yMinor={20} xLabel="number of carbon atoms" yLabel="normal boiling point (°C)" />
				<g opacity={vis(f, at + 10)}>
					<line x1={g.x} x2={g.x + g.w} y1={gy(g, 25)} y2={gy(g, 25)} stroke="#2d6f9e" strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={g.x + 14} y={gy(g, 25) - 10} text="room temperature" size={22} color="#2d6f9e" weight={700} at={-1000} />
				</g>
				{f >= pts + 70 ? <DrawPath d={curve(g)} at={pts + 70} dur={40} color={INK_SOFT} width={3} /> : null}
			</g>
			{BP.map((v, i) => {
				const o = prog(f, pts + i * 7, 8) * (i < 6 ? dOth : 1);
				if (o <= 0.01) return null;
				const vo = values ? 1 - 0.65 * (steps === undefined ? 0 : prog(f, steps + i * 8, 10)) : 0;
				return (
					<g key={i} opacity={o}>
						<circle cx={gx(g, i + 1)} cy={gy(g, v)} r={10} fill={i >= 6 ? RUN[i - 6] : INK} stroke={INK} strokeWidth={2} />
						{vo > 0.01 ? <Sx x={gx(g, i + 1) + 16} y={gy(g, v) + 30} text={v.toFixed(1)} size={20} color={ptCol(i)} weight={700} at={-1000} opacity={vo} /> : null}
					</g>
				);
			})}
			{steps !== undefined ? BP.slice(1).map((v, i) => {
				const o = prog(f, steps + i * 8, 10) * dOth;
				if (o <= 0.01) return null;
				const big = hi !== undefined && (i === 0 || i === 7) ? prog(f, hi, 12) : 0;
				const x = (gx(g, i + 1) + gx(g, i + 2)) / 2 + 14, y = (gy(g, BP[i]) + gy(g, v)) / 2 + 34;
				return <Sx key={i} x={x} y={y} text={'+' + (v - BP[i]).toFixed(1)} size={22 + 10 * big} color={big > 0.5 ? TEAL : '#8f897f'} anchor="start" weight={800} at={-1000} opacity={o} />;
			}) : null}
		</g>
	);
};
export const SceneSecondary: React.FC = () => (
	<Overlay>
		<BPGraph at={K9.methane} pts={K9.every} steps={K9.smaller} hi={K9.s25} />
		<Tag x={720} y={70} text="data book: normal boiling points (101.3 kPa)" at={K9.sec} size={26} color={INK} fill="#fffdf8" />
		<Tag x={720} y={124} text="secondary data: measured and published by others" at={K9.sec + 10} size={24} />
		<Tag x={1880} y={620} text="rises every step; steps shrink" at={K9.s25 + 10} size={28} color={TEAL} fill="#dff2ef" anchor="end" />
		<Tag x={1880} y={700} text="describe the pattern; don't invent a reason" at={K9.beyond} size={24} anchor="end" />
		{void K9.first}{void K9.s73}{void K9.describe}
	</Overlay>
);

// ---------- 10. Two methods agree ----------
const K10 = cues(sc('methods-agree'), {two: 'two methods', higher: 'higher', smaller: 'smaller', indep: 'Two independent', stronger: 'stronger'});
const BPS = ['98.4 °C', '125.6 °C', '150.8 °C'];
export const AgreeStrip: React.FC<{x: number; y: number; at: number; up?: number; down?: number; bracket?: number; s?: number}> = ({x, y, at, up, down, bracket, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const rh = 90;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<Sx x={0} y={0} text="alkane" size={28} color={INK_SOFT} hand at={-1000} />
			<Sx x={300} y={0} text="boiling point" size={28} color={INK_SOFT} hand at={-1000} />
			<Sx x={560} y={0} text="mean ΔT" size={28} color={INK_SOFT} hand at={-1000} />
			{[0, 1, 2].map(i => (
				<g key={i} opacity={prog(f, at + i * 8, 10)}>
					<Sx x={0} y={70 + i * rh} text={NAMES[i]} size={36} color={RUN_INK[i]} weight={800} at={-1000} />
					<Sx x={300} y={70 + i * rh} text={BPS[i]} size={36} color={INK} weight={700} at={-1000} />
					<Sx x={560} y={70 + i * rh} text={MEANS[i].toFixed(1) + ' °C'} size={36} color={INK} weight={700} at={-1000} />
				</g>
			))}
			{up !== undefined ? <g opacity={vis(f, up)}><DrawPath d="M470,40 L470,250 M455,232 L470,252 L485,232" at={up} dur={14} color={AMBER_INK} width={5} /><Sx x={470} y={290} text="higher" size={28} color={AMBER_INK} anchor="middle" hand at={up} /></g> : null}
			{down !== undefined ? <g opacity={vis(f, down)}><DrawPath d="M720,40 L720,250 M705,232 L720,252 L735,232" at={down} dur={14} color={TEAL} width={5} /><Sx x={720} y={290} text="smaller" size={28} color={TEAL} anchor="middle" hand at={down} /></g> : null}
			{bracket !== undefined ? <g opacity={vis(f, bracket)}><DrawPath d="M440,320 L440,340 L750,340 L750,320" at={bracket} dur={14} color={INK_SOFT} width={4} /><Sx x={595} y={385} text="same forces, two kinds of evidence" size={30} color={INK} anchor="middle" hand at={bracket + 6} /></g> : null}
		</g>
	);
};
export const SceneAgree: React.FC = () => (
	<Overlay>
		<Place keys={[{at: -100, x: 0, y: 0, s: 1}, {at: 0, x: 20, y: 200, s: 0.55}]}>
			<BPGraph at={-100} pts={-100} dimOthers={0} values={false} />
		</Place>
		<AgreeStrip x={960} y={330} at={K10.two} up={K10.higher} down={K10.smaller} bracket={K10.indep} />
		{void K10.stronger}{void GREENC}
	</Overlay>
);
