// M6 C01 scenes 1 to 5: the ammonia puzzle, how models change, Lavoisier, Davy and Arrhenius.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog, rng} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER, CLEANER, LITMUS} from './assets';
import {
	ACID, ACID_INK, AChip, AMBER, AMBER_INK, Arrow, BASE, BASE_INK, Card, Chip, DrawPath, EqLine, FTile, Fade, GREYT, GREY_INK, HBracket, INK, INK_SOFT, Ion, LensFrame, Mol, Note,
	OXY, Overlay, PROTON, PROTON_INK, PairAt, PicH, PlateAt, Proton, Ring, Sx, TEAL, Timeline, VBracket, cardX, clamp01, eq, lerp, picW, smooth, tileW, TL, vis,
} from './parts';

// ---------- 1. Hook: a base with no hydroxide ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {bottle: 'household ammonia cleaner', red: 'red litmus paper', blue: 'turns blue', base: "So it's a base", nh3: 'N H three', one: 'One nitrogen', noO: 'no oxygen at all', noOH: 'no hydroxide in it', decades: 'For decades', supply: 'supply its own hydroxide', how: 'how can ammonia'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const bh = 690, bx = 120, by = 270;
	const lx = 470, ly = 590, lh = 350;
	const rise = smooth(prog(f, K1.nh3, 30));
	const mx = 1270, my = 560 + (1 - rise) * 60;
	return (
		<>
			<Heading text="A base with no hydroxide?" at={4} size={60} />
			<Overlay>
				<PlateAt p={CLEANER} x={bx} y={by} h={bh} at={0} />
				<Note x={bx + picW(CLEANER, bh) / 2} y={by + bh + 52} text="ammonia cleaner" size={38} anchor="middle" at={K1.bottle} />
				<PairAt a={LITMUS.red} b={LITMUS.blue} x={lx} y={ly} h={lh} at={K1.red - 10} swap={K1.blue} dur={30} />
				<Note x={lx + 40} y={ly - 24} text="red litmus" size={36} color="#b8434f" at={K1.red} />
				<Note x={lx + 40} y={ly + lh + 50} text="turns blue: a base" size={38} color="#2f55b8" at={K1.base} />
				{/* the molecule */}
				<Fade at={K1.nh3 - 4}>
					<Mol x={mx} y={my} m="NH3" s={2.6} glowH={vis(f, K1.one, K1.noO)} />
				</Fade>
				<Sx x={mx} y={850} text="NH_3" size={76} color={INK} anchor="middle" weight={800} at={K1.nh3} />
				<Note x={mx} y={910} text="1 nitrogen, 3 hydrogens" size={36} anchor="middle" color={INK_SOFT} at={K1.one} />
				<Ring cx={mx} cy={my + 14} rx={200} ry={190} at={K1.noO} color={AMBER} seed={5} />
				<Chip x={1520} y={480} w={230} text="OH^{-}?" size={44} color={INK} at={K1.noO + 10} cross={K1.noOH} hand={false} />
				<Note x={1520} y={600} text="no O at all" size={38} color={AMBER_INK} at={K1.noOH + 8} />
				{/* the leading theory */}
				<Fade at={K1.supply - 6}>
					<g transform={`translate(${(1 - prog(f, K1.supply - 6, 18)) * 60},0)`}>
						<rect x={1060} y={200} width={760} height={92} rx={18} fill="#efebe3" stroke={GREYT} strokeWidth={3} />
						<Sx x={1090} y={236} text="the leading theory, for decades:" size={30} color={GREY_INK} hand at={-1000} />
						<Sx x={1090} y={278} text="base = makes its own OH^{-}" size={36} color={INK} weight={700} at={-1000} />
					</g>
				</Fade>
				<Note x={1060} y={1000} text="So how can ammonia be a base?" size={52} color={AMBER_INK} at={K1.how} />
				{void K1.decades}
			</Overlay>
		</>
	);
};

// ---------- 2. How models change ----------
const H2 = 'models-change';
const K2 = cues(sc(H2), {follow: 'follow how the idea', model: 'a model is a definition', predicts: 'predicts which substances', replaced: 'gets replaced', obs: 'an observation it', cant: "can't explain", three: 'three times', years: 'a hundred and fifty years', fixed: 'each new model fixed'});
const Box: React.FC<{x: number; y: number; w: number; h: number; text: string; at: number; color?: string; lit?: number; fill?: string; size?: number}> = ({x, y, w, h, text, at, color = INK, lit = 0, fill = '#fffdf8', size = 38}) => (
	<Fade at={at}>
		{lit > 0.01 ? <rect x={x - 10} y={y - 10} width={w + 20} height={h + 20} rx={26} fill="#f6d77a" opacity={0.55 * lit} /> : null}
		<rect x={x} y={y} width={w} height={h} rx={20} fill={fill} stroke={color} strokeWidth={4} />
		<Sx x={x + w / 2} y={y + h / 2 + size * 0.34} text={text} size={size} color={color} anchor="middle" hand at={at} />
	</Fade>
);
export const SceneModels: React.FC = () => {
	const f = useCurrentFrame();
	const lit = vis(f, K2.cant, K2.three + 40);
	const Y = 700;
	return (
		<>
			<Heading text="How a model changes" at={4} size={60} />
			<Overlay>
				<Timeline fill={[]} slots={K2.follow} arrows={K2.three} />
				<Note x={96} y={530} text="model: a definition that predicts which substances act as acids or bases" size={38} at={K2.model} />
				<Box x={96} y={Y - 50} w={330} h={100} text="model predicts" at={K2.predicts} color={TEAL} size={42} />
				<Arrow x1={440} y1={Y} x2={580} y2={Y} at={K2.replaced - 20} color={INK_SOFT} width={5} />
				<Box x={594} y={Y - 50} w={310} h={100} text="observation" at={K2.replaced - 14} size={42} />
				<Arrow x1={918} y1={Y - 20} x2={1080} y2={Y - 100} at={K2.obs} color={INK_SOFT} width={5} />
				<Arrow x1={918} y1={Y + 20} x2={1080} y2={Y + 100} at={K2.obs + 4} color={AMBER_INK} width={5} />
				<Box x={1094} y={Y - 160} w={330} h={90} text="fits? keep it" at={K2.obs} color={TEAL} size={40} />
				<Box x={1094} y={Y + 70} w={480} h={90} text="can't explain? replace it" at={K2.obs + 4} color={AMBER_INK} lit={lit} size={40} />
				{/* the new model loops back */}
				<DrawPath d={`M${1319},${Y + 168} C${1319},${Y + 280} ${261},${Y + 280} ${261},${Y + 62}`} at={K2.cant + 16} dur={30} color={AMBER_INK} width={4} dash="12 9" />
				<Note x={720} y={Y + 172} text="a new model" size={34} color={AMBER_INK} anchor="middle" at={K2.cant + 30} />
				<Note x={1580} y={Y - 110} text="3 times in" size={38} color={ACID_INK} at={K2.three} />
				<Note x={1580} y={Y - 64} text="about 150 years" size={38} color={ACID_INK} at={K2.years} />
				<Note x={96} y={1030} text="each new model fixed the failure of the one before" size={42} color={TEAL} at={K2.fixed} />
			</Overlay>
		</>
	);
};

// ---------- 3. Lavoisier: acids contain oxygen ----------
const H3 = 'lavoisier';
const K3 = cues(sc(H3), {late: 'late seventeen hundreds', lav: 'Antoine Lavoisier', studied: 'studied sulfuric', oxygen: 'contained oxygen', decided: 'oxygen is what makes', named: 'named the element', maker: 'acid maker', y1810: 'in 1810', davy: 'Humphry Davy', hcl: 'hydrochloric acid contains', noox: 'No oxygen', one: 'One acid without', brk: 'break the rule'});
const ACIDS: {f: string; name: string}[] = [{f: 'H_2SO_4', name: 'sulfuric'}, {f: 'HNO_3', name: 'nitric'}, {f: 'H_3PO_4', name: 'phosphoric'}];
export const SceneLavoisier: React.FC = () => {
	const ty = 640, S = 64;
	const xs = [120, 450, 760];
	const hx = 1300;
	const hw = tileW('HCl', S);
	return (
		<>
			<Heading text="Model 1: acids contain oxygen" at={4} size={58} />
			<Overlay>
				<Timeline fill={[K3.lav]} stamp={[K3.noox + 20]} />
				{ACIDS.map((a, i) => (
					<g key={a.f}>
						<FTile x={xs[i]} y={ty} formula={a.f} size={S} at={K3.studied + i * 10} glow={[{el: 'O', at: K3.oxygen + i * 4, color: OXY}]} />
						<Note x={xs[i] + tileW(a.f, S) / 2} y={ty + 90} text={a.name} size={34} color={INK_SOFT} anchor="middle" at={K3.studied + i * 10} />
					</g>
				))}
				<Note x={120} y={ty - 110} text="every one contains O" size={40} color={OXY} at={K3.oxygen + 12} />
				<Fade at={K3.maker - 4}>
					<rect x={120} y={850} width={760} height={110} rx={20} fill="#fff8ea" stroke={AMBER} strokeWidth={3} />
					<Sx x={150} y={898} text="oxygen: oxy + gen" size={40} color={INK} weight={700} at={-1000} />
					<Sx x={150} y={942} text="= acid + maker (Greek)" size={36} color={AMBER_INK} hand at={K3.maker + 8} />
				</Fade>
				{/* Davy's test: HCl */}
				<Note x={hx} y={ty - 110} text="1810: Davy" size={40} color={INK} at={K3.davy} />
				<FTile x={hx} y={ty} formula="HCl" size={S} at={K3.hcl} />
				<Note x={hx + hw / 2} y={ty + 90} text="hydrochloric" size={34} color={INK_SOFT} anchor="middle" at={K3.hcl} />
				<Ring cx={hx + hw / 2} cy={ty - 20} rx={hw / 2 + 50} ry={80} at={K3.noox} color={AMBER} seed={7} />
				<Note x={hx + hw / 2} y={ty + 160} text="no O!" size={52} color={AMBER_INK} anchor="middle" at={K3.noox + 4} />
				<Note x={1100} y={900} text="one acid without oxygen" size={40} at={K3.one} />
				<Note x={1100} y={950} text="breaks the rule" size={40} color={AMBER_INK} at={K3.brk} />
				{void K3.late}{void K3.decided}{void K3.named}{void K3.y1810}
			</Overlay>
		</>
	);
};

// ---------- 4. Davy: acids contain hydrogen ----------
const H4 = 'davy';
const K4 = cues(sc(H4), {prop: 'Davy proposed that', hyd: 'hydrogen, not oxygen', alone: 'hydrogen alone', methane: 'Methane is full', isnt: "it isn't acidic", bases: 'said nothing about bases'});
export const SceneDavy: React.FC = () => {
	const f = useCurrentFrame();
	const ty = 660, S = 54;
	const fs = ['H_2SO_4', 'HNO_3', 'H_3PO_4', 'HCl'];
	let x = 110;
	const xs = fs.map(t => { const v = x; x += tileW(t, S) + 36; return v; });
	const hclC = xs[3] + tileW('HCl', S) / 2;
	const mx = 1580, my = 700;
	return (
		<>
			<Heading text="Model 2: acids contain hydrogen" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, K4.prop]} stamp={[-1000, K4.bases + 34]} />
				{fs.map((t, i) => <FTile key={t} x={xs[i]} y={ty} formula={t} size={S} at={2 + i * 4} glow={[{el: 'H', at: K4.hyd + i * 4, color: PROTON}]} />)}
				<Note x={110} y={ty - 100} text="every acid contains H" size={40} color={PROTON_INK} at={K4.hyd + 10} />
				<Note x={110} y={820} text="but hydrogen alone isn't enough:" size={40} color={INK} at={K4.alone} />
				{/* methane */}
				<Fade at={K4.methane - 4}>
					<Mol x={mx} y={my} m="CH4" s={1.9} glowH={prog(f, K4.methane, 14)} />
				</Fade>
				<Sx x={mx} y={my + 170} text="CH_4, methane" size={40} color={INK} anchor="middle" weight={700} at={K4.methane} />
				<Note x={mx} y={my + 220} text="not acidic" size={40} color={AMBER_INK} anchor="middle" at={K4.isnt} />
				<HBracket x1={hclC} x2={mx} y={550} at={K4.methane + 20} color={PROTON_INK} />
				<Note x={(hclC + mx) / 2} y={536} text="both have H" size={36} color={PROTON_INK} anchor="middle" at={K4.methane + 26} />
				{/* no bases */}
				<Fade at={K4.bases}>
					<rect x={110} y={880} width={420} height={110} rx={18} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="12 8" />
					<Sx x={320} y={950} text="base = ?" size={48} color={INK_SOFT} anchor="middle" hand at={-1000} />
				</Fade>
				<Note x={570} y={950} text="no definition of a base" size={38} color={AMBER_INK} at={K4.bases + 10} />
			</Overlay>
		</>
	);
};

// ---------- 5. Arrhenius: ions in water ----------
const H5 = 'arrhenius';
const K5 = cues(sc(H5), {arr: 'Svante Arrhenius', ions: 'brought in ions', hions: 'release hydrogen ions', ohions: 'its own hydroxide ions', hcl: 'Hydrogen chloride gives', naoh: 'sodium hydroxide gives', mix: 'Mix them', water: 'join to make water', neut: 'explained neutralisation', alike: 'behave alike', same: 'the same ion'});
const LC = {cx: 560, cy: 760, r: 250};
const HP = [[-0.5, -0.45, 0.4], [0.15, -0.6, 1.3], [-0.65, 0.1, 2.2], [0.05, 0.05, 3.1], [-0.3, 0.55, 4.0]] as const;
const CLP = [[-0.15, -0.35, 0.9], [-0.55, 0.4, 2.6], [0.3, 0.45, 5.0]] as const;
const NAP = [[0.55, -0.3, 1.7], [0.62, 0.3, 3.6]] as const;
const OHP = [[0.35, -0.05, 0.6], [0.3, 0.62, 4.6]] as const;
const dr = (f: number, ph: number, a = 10): [number, number] => [Math.sin(f * 0.033 + ph) * a, Math.cos(f * 0.029 + ph * 1.3) * a];
export const SceneArrhenius: React.FC = () => {
	const f = useCurrentFrame();
	const {cx, cy, r} = LC;
	const ohIn = smooth(prog(f, K5.ohions - 4, 40));
	const meet = smooth(prog(f, K5.water - 20, 26));
	const made = f >= K5.water + 6;
	const EX = 880, S = 46;
	const e1 = eq(['HCl(g)', '->', {t: 'H^{+}(aq)', color: PROTON_INK}, '+', 'Cl^{-}(aq)'], [K5.hions, K5.hions + 6, K5.hions + 10, K5.hions + 14, K5.hions + 18]);
	const e2 = eq(['NaOH(s)', '->', 'Na^{+}(aq)', '+', {t: 'OH^{-}(aq)', color: BASE_INK}], [K5.ohions, K5.ohions + 6, K5.ohions + 10, K5.ohions + 14, K5.ohions + 18]);
	const e3 = eq([{t: 'H^{+}', color: PROTON_INK}, '+', {t: 'OH^{-}', color: BASE_INK}, '->', 'H_2O'], [K5.water, K5.water + 4, K5.water + 8, K5.water + 12, K5.water + 16]);
	const tiles = ['HCl', 'HNO_3', 'H_2SO_4'];
	let tx = EX;
	const txs = tiles.map(t => { const v = tx; tx += tileW(t, 44) + 50; return v; });
	const m1 = [0.05, 0.05], m2 = [0.35, -0.05];
	const pos = (u: number, v: number, ph: number): [number, number] => { const [dx, dy] = dr(f, ph); return [cx + u * r + dx, cy + v * r + dy]; };
	const pH = pos(m1[0], m1[1], 3.1), pO = pos(m2[0], m2[1], 0.6);
	const mid: [number, number] = [cx + 0.2 * r, cy];
	return (
		<>
			<Heading text="Model 3: ions in water" at={4} size={58} />
			<Overlay>
				<Timeline fill={[-1000, -1000, K5.arr]} stamp={[-1000, -1000]} />
				<PlateAt p={BEAKER} x={110} y={480} h={300} at={K5.ions - 10} />
				<path d={`M${110 + picW(BEAKER, 300) * 0.7},${720} L${cx - r * 0.7},${cy - r * 0.55}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={prog(f, K5.ions, 12)} />
				<LensFrame cx={cx} cy={cy} r={r} at={K5.ions} title="in water" titleAt={K5.ions + 6}>
					<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef6fb" />
					{HP.map(([u, v, ph], i) => {
						if (i === 3 && made) return null;
						const [x, y] = i === 3 ? [lerp(pH[0], mid[0], meet), lerp(pH[1], mid[1], meet)] : pos(u, v, ph);
						return <Proton key={'h' + i} x={x} y={y} s={1.1} o={prog(f, K5.hions + i * 5, 10)} />;
					})}
					{CLP.map(([u, v, ph], i) => { const [x, y] = pos(u, v, ph); return <Ion key={'c' + i} x={x} y={y} kind="-" r={24} label="Cl^{-}" o={prog(f, K5.hions + 8 + i * 5, 10)} />; })}
					{NAP.map(([u, v, ph], i) => { const [x, y] = pos(u + (1 - ohIn) * 0.8, v, ph); return <Ion key={'n' + i} x={x} y={y} kind="+" r={22} label="Na^{+}" o={ohIn} />; })}
					{OHP.map(([u, v, ph], i) => {
						if (i === 0 && made) return null;
						const [bx, by] = pos(u + (1 - ohIn) * 0.8, v, ph);
						const [x, y] = i === 0 ? [lerp(bx, mid[0] + 26, meet), lerp(by, mid[1], meet)] : [bx, by];
						return <Ion key={'o' + i} x={x} y={y} kind="-" r={25} label="OH^{-}" o={ohIn} fill={BASE} />;
					})}
					{made ? <Mol x={mid[0] + 10} y={mid[1]} m="H2O" s={1.0} o={prog(f, K5.water + 6, 10)} /> : null}
				</LensFrame>
				<Ring cx={mid[0] + 10} cy={mid[1] + 6} rx={70} ry={62} at={K5.water + 10} color={TEAL} seed={4} />
				<EqLine items={e1} x={EX} y={540} size={S} />
				<Note x={EX + 640} y={540} text="in water" size={32} color={INK_SOFT} at={K5.hions + 20} />
				<EqLine items={e2} x={EX} y={630} size={S} />
				<EqLine items={e3} x={EX} y={750} size={S + 4} />
				<Note x={EX + 470} y={750} text="neutralisation" size={38} color={TEAL} at={K5.neut} />
				{tiles.map((t, i) => {
					const up = smooth(prog(f, K5.same + 4 + i * 6, 24));
					const w = tileW(t, 44);
					return (
						<g key={t}>
							<FTile x={txs[i]} y={930} formula={t} size={44} at={K5.alike + i * 6} />
							<Proton x={txs[i] + w / 2} y={880 - up * 26} o={prog(f, K5.same + 4 + i * 6, 8)} s={0.95} />
						</g>
					);
				})}
				<Note x={tx + 10} y={938} text="all give H^{+}" size={40} color={PROTON_INK} at={K5.same + 20} />
				{void K5.hcl}{void K5.naoh}{void K5.mix}{void Card}{void AChip}{void ACID}{void BASE_INK}{void VBracket}{void cardX}{void TL}{void clamp01}{void rng}{void PicH}
			</Overlay>
		</>
	);
};
