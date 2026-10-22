// M7 C01 scenes 1 to 5: the hook (butane on a camping stove is a code; 3-methylpent-1-ene as drawing instructions),
// carbon's four bonds (chains, a branch, the ink ball-and-stick turning to show the zigzag), three ways to draw butane
// (full structural, condensed, skeletal; implied hydrogens), rule 1 (the stem counts carbons) and rule 2 (the ending
// shows the bonds).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {AMBER, DrawPath, Fade, INK, INK_SOFT, Overlay, PicH, Sx, TEAL, mw, picW, smooth} from '../chem-m6-c01/parts';
import {BURNER, BURNER_UV, BW, BX, BY, Heading, sc} from './common';
import {
	AnswerChip, BRANCH, BRANCH_INK, BallStick, CHAIN, CHAIN_INK, CARDC, FullMol, HGhosts, HGREY, MULTI, NameBuilder, RuleChip, Skel, Tag, V2, chain3d, fullAlkane, ghostDirs, lerpV,
	projCarbons, zig,
} from './molecules';
import type {FAtom, FBond} from './molecules';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const chainBonds = (n: number, extra: {a: number; b: number; order?: 1 | 2 | 3; color?: string}[] = []) => [...Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1})), ...extra];

/** The camping stove plate with a gentle coded flicker on the flame region only. */
export const Burner: React.FC<{x: number; y: number; h: number; o?: number}> = ({x, y, h, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const w = picW(BURNER, h);
	const fx = x + w * BURNER_UV.flame[0], fy = y + h * BURNER_UV.flame[1];
	const k = 1 + 0.05 * Math.sin(f * 0.37) + 0.03 * Math.sin(f * 0.91);
	return (
		<g opacity={o}>
			<PicH p={BURNER} x={x} y={y} h={h} />
			<ellipse cx={fx} cy={fy + h * 0.02} rx={w * BURNER_UV.flameR[0] * k} ry={h * BURNER_UV.flameR[1] * (2 - k)} fill="#9cc9ff" opacity={0.12 + 0.08 * Math.sin(f * 0.53)} />
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {butane: 'butane,', brand: 'That name', code: "It's a code", but: 'but means', four: 'four carbons', ane: 'ane means', single: 'single bonds', chemists: 'Chemists name', name: 'three-methylpent-one-ene', drawing: 'drawing instructions', so: 'So how', write: 'write one'});
const NAME: [string, string][] = [['3-methyl', BRANCH_INK], ['pent', CHAIN_INK], ['-1-ene', TEAL]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.name - 18, 30));
	const ph = lerp(700, 300, sh), px = lerp(1060, 1520, sh), py = lerp(170, 330, sh);
	const pw = picW(BURNER, ph);
	const can: V2 = [px + pw * BURNER_UV.can[0], py + ph * BURNER_UV.can[1]];
	const tagO = vis(f, K1.butane, K1.but + 4);
	const Z = zig(4, 300, 640, 120, 70);
	const size = 96;
	const widths = NAME.map(([t]) => mw(t, size, false, 800));
	const total = widths.reduce((a, b) => a + b, 0);
	let nx = 760 - total / 2;
	const nameX = NAME.map((_, i) => { const x = nx; nx += widths[i]; return x; });
	const dimHook = 1 - 0.6 * prog(f, K1.chemists, 14);
	return (
		<>
			<Heading text="How do we name and draw a carbon chain?" at={K1.so} size={60} />
			<Overlay>
				<Burner x={px} y={py} h={ph} />
				{/* the label on the canister */}
				<g opacity={tagO}>
					<rect x={can[0] - 120} y={can[1] - 40} width={240} height={80} rx={14} fill={CARDC} stroke={INK} strokeWidth={3} />
					<Sx x={can[0]} y={can[1] + 18} text="butane" size={50} color={INK} anchor="middle" hand at={-1000} />
				</g>
				<g opacity={vis(f, K1.but - 4, K1.name - 20) * dimHook}>
					{[['but', CHAIN_INK, '#e3f0fa', 300, 'four carbons', K1.four], ['ane', TEAL, '#dff2ef', 520, 'single bonds only', K1.single]].map(([t, ink, fill, x, cap, capAt], i) => {
						const p = smooth(prog(f, K1.but - 4 + i * 30, 24));
						const from: V2 = [can[0] - 60 + i * 120, can[1] - 30];
						const q = lerpV(from, [x as number, 330], p);
						return (
							<g key={i} opacity={prog(f, K1.but - 4 + i * 30, 8)}>
								<rect x={q[0]} y={q[1]} width={170} height={80} rx={16} fill={fill as string} stroke={ink as string} strokeWidth={3.5} />
								<Sx x={q[0] + 85} y={q[1] + 56} text={t as string} size={52} color={ink as string} anchor="middle" weight={800} at={-1000} />
								<Sx x={x as number} y={460} text={cap as string} size={30} color={ink as string} hand at={capAt as number} />
							</g>
						);
					})}
					<Skel pts={Z} bonds={chainBonds(4)} at={K1.four + 6} stagger={6} />
				</g>
				{/* the name as drawing instructions */}
				<g opacity={vis(f, K1.name - 4)}>
					{NAME.map(([t, c], i) => (
						<g key={t} opacity={prog(f, K1.name + i * 12, 10)} transform={`translate(0,${(1 - smooth(prog(f, K1.name + i * 12, 14))) * 20})`}>
							<Sx x={nameX[i]} y={500} text={t} size={size} color={c} weight={800} at={-1000} />
						</g>
					))}
					<rect x={600} y={650} width={320} height={210} rx={18} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" opacity={prog(f, K1.drawing, 12)} />
					<Sx x={760} y={790} text="?" size={110} color={INK_SOFT} anchor="middle" weight={800} at={K1.drawing + 6} />
					{NAME.map((_, i) => <DrawPath key={i} d={`M${nameX[i] + widths[i] / 2},${530} Q${(nameX[i] + widths[i] / 2 + 760) / 2},${600} ${700 + i * 60},${644}`} at={K1.drawing + 10 + i * 6} dur={14} color={NAME[i][1]} width={3.5} dash="8 7" />)}
				</g>
				{void K1.brand}{void K1.code}{void K1.ane}{void K1.write}
			</Overlay>
		</>
	);
};

// ---------- 2. Four bonds, chains and branches, the zigzag ----------
const K2 = cues(sc('four-bonds'), {year: 'Year 11', elec: 'valence electrons', four: ['four', 2], carbon: 'Carbon can bond', chains: 'chains,', branches: 'branches.', millions: 'millions', one: 'just one structure', real: 'Real chains', spread: 'spread out', zz: 'zigzag'});
export const SceneFour: React.FC = () => {
	const f = useCurrentFrame();
	const meth: FAtom[] = [{el: 'C', p: [960, 470], at: K2.four}, ...[[0, -95], [95, 0], [0, 95], [-95, 0]].map(([dx, dy], i) => ({el: 'H' as const, p: [960 + dx, 470 + dy] as V2, at: K2.four + 6 + i * 5}))];
	const methB: FBond[] = [1, 2, 3, 4].map(i => ({a: 0, b: i}));
	const Y = 470, X0 = 660, SP = 200;
	const but = fullAlkane(4, X0, Y, SP, [], {c: i => K2.chains - 20 + i * 10, h: i => K2.chains - 10 + i * 3});
	const topH2 = but.atoms.findIndex(a => a.el === 'H' && a.p[0] === X0 + SP && a.p[1] === Y - SP * 0.5);
	but.atoms[topH2] = {...but.atoms[topH2], out: K2.branches - 4};
	const bx = X0 + SP, by = Y - SP * 0.8;
	const br: FAtom[] = [{el: 'C', p: [X0 + SP, Y], at: K2.branches, label: ' '}, {el: 'C', p: [bx, by], at: K2.branches, color: BRANCH_INK}, {el: 'H', p: [bx - 100, by], at: K2.branches + 6}, {el: 'H', p: [bx + 100, by], at: K2.branches + 9}, {el: 'H', p: [bx, by - 100], at: K2.branches + 12}];
	const brB: FBond[] = [{a: 0, b: 1, color: BRANCH}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
	const flatOut = K2.real + 4;
	const YAW_END = -0.42;
	const yaw = lerp(-1.45, YAW_END, smooth(prog(f, K2.real + 20, K2.zz - K2.real - 10)));
	const pitch = 0.16;
	const m3 = chain3d(4);
	const B3 = {cx: 960, cy: 470, u: 230};
	const flatAt = K2.zz + 6;
	const zpts = projCarbons(m3.atoms, B3.cx, B3.cy, B3.u, YAW_END, pitch);
	return (
		<Overlay>
			<Tag x={96} y={112} text="from Year 11" at={K2.year} size={28} />
			<FullMol atoms={meth} bonds={methB} out={K2.chains - 24} />
			<Tag x={1080} y={340} text="4 bonds per carbon" at={K2.four + 26} out={K2.chains - 24} size={30} color={INK} fill={CARDC} />
			<g opacity={1 - prog(f, flatOut, 14)}>
				<FullMol atoms={but.atoms} bonds={but.bonds} />
				<FullMol atoms={br} bonds={brB} />
				<Tag x={bx + 70} y={by - 30} text="branch" at={K2.branches + 14} size={28} color={BRANCH_INK} fill="#fff3d6" />
				<Tag x={960} y={720} text="millions of carbon compounds: each name must point to one structure" at={K2.millions} size={28} anchor="middle" />
			</g>
			<BallStick atoms={m3.atoms} bonds={m3.bonds} cx={B3.cx} cy={B3.cy} unitPx={B3.u} yaw={yaw} pitch={pitch} o={vis(f, K2.real + 6, flatAt + 10, 16)} />
			<g opacity={prog(f, flatAt, 12)}>
				<Skel pts={zpts} bonds={chainBonds(4)} at={flatAt} stagger={5} width={7} />
			</g>
			<Tag x={960} y={680} text="real chains zigzag" at={flatAt + 8} size={32} color={INK} fill={CARDC} anchor="middle" />
			{void K2.elec}{void K2.carbon}{void K2.one}{void K2.spread}{void HGREY}
		</Overlay>
	);
};

// ---------- 3. Three ways to draw a chain ----------
const K3 = cues(sc('three-drawings'), {three: 'There are three', full: 'full structural formula', cond: 'condensed formula', ch3: 'C H three', skel: 'skeletal formula', corner: 'Every corner', left: 'left out', back: 'put them back', four: 'four bonds', end: 'three on an end', corner2: 'two on a corner', branch: 'where a branch joins'});
const GROUPS = ['CH_3', 'CH_2', 'CH_2', 'CH_3'];
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 480, X0 = 620, SP = 200;
	const condAt = K3.cond, skelAt = K3.skel;
	const full = fullAlkane(4, X0, Y, SP, [], {c: i => K3.full + i * 6, h: i => K3.full + 14 + i * 3});
	const cPos = full.carbons.map(i => full.atoms[i].p);
	// hydrogens slide in beside their carbon and fade; carbons fade as the groups take their place
	const atoms: FAtom[] = full.atoms.map((a, i) => {
		if (a.el === 'C') return {...a, out: condAt + 22};
		const ci = full.bonds.find(b => b.b === i)!.a;
		return {...a, to: [full.atoms[ci].p[0] + 34, full.atoms[ci].p[1]], moveAt: condAt + 4, moveDur: 20, out: condAt + 18};
	});
	const gs = 60;
	const gw = GROUPS.map(g => mw(g, gs, false, 800));
	const tot = gw.reduce((a, b) => a + b, 0);
	let gx = 960 - tot / 2;
	const gTarget = gw.map(w => { const x = gx + w / 2; gx += w; return x; });
	const gp = smooth(prog(f, condAt + 14, 26));
	const Z = zig(4, 750, Y, 140, 90);
	const kp = smooth(prog(f, skelAt + 6, 26));
	const gPts = gTarget.map(x => [x, Y] as V2);
	const P = gPts.map((g, i) => lerpV(g, Z[i], kp));
	const thumbO = prog(f, condAt + 20, 14);
	const nb = (i: number) => [Z[i - 1], Z[i + 1]].filter(Boolean) as V2[];
	const d1 = ghostDirs(Z[1], nb(1), 2);
	return (
		<Overlay>
			<RuleChip text="Butane, three ways" at={K3.three} />
			<g opacity={1 - prog(f, condAt + 24, 10)}><FullMol atoms={atoms} bonds={full.bonds} /></g>
			<Tag x={960} y={680} text="full structural: every atom, every bond" at={K3.full + 30} out={condAt} size={30} anchor="middle" />
			{/* kept thumbnail of the full formula */}
			<g opacity={thumbO}>
				<g transform="translate(120,300) scale(0.42) translate(-520,-380)"><FullMol atoms={full.atoms.map(a => ({...a, at: -1000}))} bonds={full.bonds} /></g>
				<Sx x={120} y={455} text="full structural" size={24} color={INK_SOFT} weight={600} at={-1000} />
			</g>
			{/* condensed groups ride from the carbons into one line */}
			<g opacity={vis(f, condAt + 10, skelAt + 4, 12)}>
				{GROUPS.map((g, i) => {
					const x = lerp(cPos[i][0], gTarget[i], gp);
					return <Sx key={i} x={x} y={Y + gs * 0.36} text={g} size={gs} color={INK} anchor="middle" weight={800} at={-1000} />;
				})}
				<Tag x={960} y={600} text="condensed: each carbon with its hydrogens" at={condAt + 30} size={30} anchor="middle" />
			</g>
			{/* skeletal: the line morphs into the zigzag; carbons shrink into the corners */}
			<g opacity={prog(f, skelAt + 4, 10)}>
				<path d={'M' + P.map(p => `${p[0]},${p[1]}`).join(' L')} fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, skelAt + 10, 12)} />
				{P.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={14 * (1 - prog(f, skelAt + 34, 14))} fill={INK} />)}
				<Tag x={960} y={640} text="skeletal: corners and ends are carbons" at={K3.corner} out={K3.four} size={30} anchor="middle" />
			</g>
			<HGhosts p={Z[0]} dirs={ghostDirs(Z[0], nb(0), 3)} at={K3.end} step={8} />
			<HGhosts p={Z[1]} dirs={d1} at={K3.corner2} step={8} drop={{i: 0, at: K3.branch + 8}} />
			<g opacity={vis(f, K3.branch, K3.branch + 70, 10)}>
				<DrawPath d={`M${Z[1][0]},${Z[1][1]} L${Z[1][0] + Math.cos(d1[0]) * 120},${Z[1][1] + Math.sin(d1[0]) * 120}`} at={K3.branch + 4} dur={12} color={BRANCH} width={7} />
				<Tag x={Z[1][0] - 260} y={Z[1][1] - 170} text="branch point: 1 H" at={K3.branch + 14} size={28} color={BRANCH_INK} fill="#fff3d6" />
			</g>
			<Tag x={1340} y={300} text="each carbon: 4 bonds" at={K3.four} size={32} color={INK} fill={CARDC} />
			{void K3.ch3}{void K3.left}{void K3.back}{void CHAIN}
		</Overlay>
	);
};

// ---------- 4. Rule 1: the stem counts the carbons ----------
const K4 = cues(sc('rule-stem'), {now: 'Now the naming', rule: 'Rule one', stem: 'the stem', meth: 'Meth', eth: 'eth', prop: 'prop', but: 'but four', way: 'A way to remember', monkeys: 'Monkeys', from: 'From five', pent: 'pent', hex: 'hex', hept: 'hept', oct: 'oct,'});
const STEMS: [string, number][] = [['meth', 1], ['eth', 2], ['prop', 3], ['but', 4]];
const SHAPES: [string, number, string][] = [['pent', 5, 'pentagon'], ['hex', 6, 'hexagon'], ['hept', 7, 'heptagon'], ['oct', 8, 'octagon']];
const poly = (cx: number, cy: number, r: number, n: number) => 'M' + Array.from({length: n}, (_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`; }).join(' L') + ' Z';
export const SceneStem: React.FC = () => {
	const f = useCurrentFrame();
	const at1 = [K4.meth, K4.eth, K4.prop, K4.but];
	const at2 = [K4.pent, K4.hex, K4.hept, K4.oct];
	const MN = 'Monkeys Eat Peeled Bananas';
	const words = MN.split(' ');
	const mx = 560, my = 480, ms = 58;
	return (
		<Overlay>
			<RuleChip text="Rule 1 of 5: the stem counts carbons" at={K4.rule} />
			{STEMS.map(([s, n], i) => {
				const y = 300 + i * 92;
				const lit = vis(f, at1[i], at1[i + 1] ?? K4.monkeys, 10);
				const o = prog(f, at1[i], 10) * (f >= (at1[i + 1] ?? K4.monkeys) ? 0.55 : 1);
				return (
					<g key={s} opacity={o}>
						{lit > 0.01 ? <rect x={140} y={y - 56} width={300} height={74} rx={16} fill="#f6d77a" opacity={0.55 * lit} /> : null}
						<Sx x={160} y={y} text={s} size={56} color={CHAIN_INK} weight={800} at={-1000} />
						<Sx x={400} y={y} text={String(n)} size={56} color={INK} anchor="end" weight={800} at={-1000} />
					</g>
				);
			})}
			<g opacity={vis(f, K4.monkeys - 4)}>
				{(() => { let x = mx; return words.map((w, i) => { const wx = x; x += mw(w + ' ', ms, true, 700); return (
					<g key={i}>
						<Sx x={wx} y={my} text={w} size={ms} color={INK} hand at={K4.monkeys + i * 8} />
						<DrawPath d={`M${wx},${my + 12} L${wx + mw(w[0], ms, true, 700)},${my + 12}`} at={K4.monkeys + 20 + i * 6} dur={8} color={CHAIN_INK} width={5} />
					</g>
				); }); })()}
			</g>
			{SHAPES.map(([s, n, shape], i) => {
				const y = 300 + i * 108;
				const next = at2[i + 1];
				const o = prog(f, at2[i], 10) * (next !== undefined && f >= next ? 0.5 : 1);
				return (
					<g key={s} opacity={o}>
						<Sx x={1180} y={y} text={`${s} ${n}`} size={52} color={CHAIN_INK} weight={800} at={-1000} />
						<DrawPath d={poly(1470, y - 18, 44, n)} at={at2[i] + 4} dur={18} color={INK} width={4} />
						<Sx x={1540} y={y - 4} text={`as in ${shape}`} size={30} color={INK_SOFT} hand at={at2[i] + 10} />
					</g>
				);
			})}
			<NameBuilder x={BX} y={BY} widths={BW} at={K4.stem} glow={[{slot: 1, from: K4.stem, to: 1e9}]} />
			{void K4.now}{void K4.way}{void K4.from}{void AMBER}
		</Overlay>
	);
};

// ---------- 5. Rule 2: the ending shows the bonds ----------
const K5 = cues(sc('rule-ending'), {rule: 'Rule two', ane: 'Ane means', sat: 'saturated:', ene: 'Ene means', yne: 'yne means', uns: 'unsaturated', remember: 'To remember', aey: 'a, e and y', one: 'one, two'});
const ROWS: {order: 1 | 2 | 3; e: string; tag: string}[] = [
	{order: 1, e: 'a', tag: '-ane: single bonds only'},
	{order: 2, e: 'e', tag: '-ene: a C=C double bond'},
	{order: 3, e: 'y', tag: '-yne: a C≡C triple bond'},
];
export const SceneEnding: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K5.ane, K5.ene, K5.yne];
	const RY = [320, 480, 640];
	return (
		<Overlay>
			<RuleChip text="Rule 2 of 5: the ending shows the bonds" at={K5.rule} />
			{ROWS.map((r, i) => {
				const y = RY[i];
				const next = at[i + 1];
				const o = next !== undefined && f >= next ? 0.5 : 1;
				const col = r.order === 1 ? INK : MULTI;
				return (
					<g key={i} opacity={o * prog(f, at[i], 8)}>
						<Skel pts={[[200, y + 20], [380, y - 20]]} bonds={[{a: 0, b: 1, order: r.order, color: col}]} at={at[i]} width={7} />
						<Tag x={440} y={y - 26} text={r.tag} at={at[i] + 6} size={32} color={col} fill={CARDC} />
					</g>
				);
			})}
			<Tag x={440} y={RY[0] + 40} text="saturated: each carbon holds as many H as it can" at={K5.sat} size={26} o={f >= K5.ene ? 0.5 : 1} />
			<g opacity={vis(f, K5.uns - 4)}>
				<DrawPath d={`M1120,${RY[1] - 50} L1140,${RY[1] - 50} L1140,${RY[2] + 30} L1120,${RY[2] + 30}`} at={K5.uns} dur={14} color={MULTI} width={4} cap="butt" />
				<Sx x={1160} y={(RY[1] + RY[2]) / 2 + 4} text="unsaturated" size={40} color={MULTI} hand at={K5.uns + 8} />
			</g>
			<g opacity={vis(f, K5.aey - 4)}>
				{ROWS.map((r, i) => {
					const p = smooth(prog(f, K5.aey + i * 14, 16));
					return (
						<g key={i} opacity={p}>
							<Sx x={1520} y={RY[i] + 20} text={r.e} size={40 + 40 * p} color={r.order === 1 ? INK : MULTI} anchor="middle" weight={800} at={-1000} />
							<Sx x={1580} y={RY[i] + 14} text={`${i + 1} bond${i ? 's' : ''}`} size={34} color={INK_SOFT} hand at={K5.one + i * 10} />
						</g>
					);
				})}
				<Sx x={200} y={800} text="a, e, y: 1, 2, 3 bonds" size={56} color={TEAL} hand at={K5.one + 30} />
			</g>
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} glow={[{slot: 2, from: K5.rule, to: 1e9}]} />
			{void K5.remember}{void AnswerChip}{void Fade}
		</Overlay>
	);
};
