// M8 C03a scenes 7 to 13: what a flame can't do (sodium's yellow swamps the green; dirty loop; supporting evidence),
// step 3 hydroxide (four tubes cross-fade on cue; magnesium stays in excess; the flame check), why this order (ghost
// Ag2O and Pb(OH)2 tiles struck out), the iron two trap (green browning in air, oxygen in the inset, a clock), complexes
// confirm (copper ammonia and iron thiocyanate), the full flowchart with our sample traced to copper, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {hexMix} from '../chem-m5-c03/common';
import {BOTTLE, CU_DEEP, FE_DEEP, FLAME, FLAME_A, Heading, LABEL_A, RACK, TUBE_A, sc} from './common';
import {
	AChip, CHART_E, CHART_IDS, CHART_N, C_CL, C_CX, C_FL, C_OH, C_SO, Chart, DimG, Dot, FAM, FallDrop, Fade, GREYX, INK, INK_SOFT, NH3, Note, Overlay, PPT, PicF, SCN, Suspects, Sx,
	Token, WireLoop, WrapLens, allT, clamp01, nodeC, natPt, picW, smooth, tubePt, vis,
} from './parts';
import type {CT} from './parts';
import {TubeDrop, clDone, merge, soFlDone} from './s1';

const struck = {'Ag^{+}': {x: -1000}, 'Pb^{2+}': {x: -1000, ux: -1000, faint: -1000}};

// ---------- 7. What a flame can't do ----------
const K7 = cues(sc('flame-limits'), {supporting: 'supporting evidence', proof: 'not proof', sodium: 'Traces of sodium', yellow: 'bright yellow', swamp: 'swamp', dirty: 'A dirty loop', clean: 'So clean', until: 'until the flame', back: 'back up', result: 'result'});
export const SceneFlameLimits: React.FC = () => {
	const f = useCurrentFrame();
	const H = 500, Y = 230, XB = 60, XN = 330;
	const w = picW(FLAME.ba, H);
	const [bx, by] = natPt(FLAME.ba, XB, Y, H, FLAME_A.cx, 470);
	const sw = smooth(prog(f, K7.swamp, 40));
	const T: CT = merge(soFlDone(), allT(FAM.fl, -1000, K7.result));
	return (
		<>
			<Suspects st={struck} />
			<Heading text="What a flame can't do" at={4} size={56} color={C_FL} />
			<Overlay>
				<PicF p={FLAME.ba} x={XB} y={Y} h={H} />
				<Note x={XB + w / 2} y={Y + H + 40} text="Ba^{2+}" size={30} color="#4f8a2a" anchor="middle" hand={false} at={-100} />
				<Fade at={K7.sodium - 6}>
					<PicF p={FLAME.na} x={XN} y={Y} h={H} />
					<Note x={XN + w / 2} y={Y + H + 40} text="traces of Na^{+}" size={30} color="#a8800a" anchor="middle" hand={false} at={K7.sodium} />
				</Fade>
				{sw > 0.01 ? <ellipse cx={bx} cy={by} rx={30 + 40 * sw} ry={60 + 90 * sw} fill="#ffd42a" opacity={0.42 * sw} /> : null}
				<WireLoop at={K7.dirty - 10} out={K7.clean + 10} pts={[[K7.dirty - 10, bx + 120, by + 120], [K7.dirty + 14, bx, by + 60]]} hot={K7.dirty + 14} />
				<DimG at={K7.result} to={0.35}>
					<AChip x={40} y={810} text="Na^{+} yellow masks other colours" size={30} color="#a8800a" hand={false} at={K7.swamp} />
					<AChip x={40} y={890} text="dirty loop: colour carried over" size={30} color={INK} at={K7.dirty} />
					<AChip x={40} y={970} text="clean loop in HCl until the flame shows no colour" size={26} color={GREYX} hand={false} at={K7.clean} />
				</DimG>
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<AChip x={760} y={740} text="flame = supporting evidence; precipitate or complex = confirm" size={34} color={C_CX} hand={false} at={K7.result} />
				<Note x={1270} y={1010} text="a flame supports; it doesn't prove" size={34} color={C_FL} anchor="middle" at={K7.proof} out={K7.result} />
				{void K7.supporting}{void K7.yellow}{void K7.until}{void K7.back}
			</Overlay>
		</>
	);
};

// ---------- 8. Step 3: hydroxide ----------
const K8 = cues(sc('step-3-hydroxide'), {third: 'third reagent', naoh: 'sodium hydroxide', fresh: 'fresh portion', most: 'Most metal', four: 'four of our', copper: 'Copper gives', blue: 'pale blue', fe3: 'Iron three gives', rust: 'rust', fe2: 'Iron two gives', green: 'green solid', mg: 'And magnesium', white: 'white one', dissolve: "doesn't dissolve", more: 'add more', faint: 'A faint white', calcium: 'calcium from', check: 'check the flame', no: 'no colour', magnesium: ['magnesium', 2]});
export const GRID = [[60, 236], [330, 236], [60, 610], [330, 610]] as [number, number][];
export const GH = 290;
export const OH_TUBES = [
	{p: RACK.cuoh2, t: 'pale blue: Cu^{2+}', c: PPT.blueInk},
	{p: RACK.feoh3, t: 'red-brown: Fe^{3+}', c: PPT.rustInk},
	{p: RACK.feoh2, t: 'green: Fe^{2+}', c: PPT.greenInk},
	{p: RACK.mgoh2, t: 'white: Mg^{2+}', c: INK},
];
export const ohDone = (): CT => merge(soFlDone(), allT(FAM.fl, -1000, -1000), allT(FAM.oh, -1000, -1000));
export const SceneStep3: React.FC = () => {
	const cue = [K8.blue, K8.rust, K8.green, K8.white];
	const T: CT = merge(soFlDone(), allT(FAM.fl, -1000, -1000), {
		n2n: {at: -1000, glow: K8.third},
		e3s: {at: K8.naoh}, e3b: {at: K8.four},
		e8cu: {at: K8.blue - 6}, n8cu: {at: K8.blue, glow: K8.blue, dim: K8.rust, to: 0.5},
		e8fe3: {at: K8.rust - 6}, n8fe3: {at: K8.rust, glow: K8.rust, dim: K8.green, to: 0.5},
		e8fe2: {at: K8.green - 6}, n8fe2: {at: K8.green, glow: K8.green, dim: K8.white, to: 0.5},
		e8mg: {at: K8.white - 6}, n8mg: {at: K8.white, glow: K8.white},
		tagMg: {at: K8.magnesium}, n6ca: {at: -1000, glow: K8.check, dim: -1000, undim: K8.check},
	});
	return (
		<>
			<Suspects st={{...struck, 'Ba^{2+}': {x: -1000}, 'Ca^{2+}': {faint: -1000, g: [[K8.calcium, K8.magnesium]]}, 'Cu^{2+}': {g: [[K8.copper, K8.fe3]]}, 'Fe^{3+}': {g: [[K8.fe3, K8.fe2]]}, 'Fe^{2+}': {g: [[K8.fe2, K8.mg]]}, 'Mg^{2+}': {g: [[K8.mg, K8.faint], [K8.magnesium, 1119]]}}} />
			<Heading text="Step 3: hydroxide" at={4} size={56} color={C_OH} />
			<Overlay>
				{OH_TUBES.map((o, i) => {
					const [x, y] = GRID[i];
					const [mx] = tubePt(x, y, GH, TUBE_A.cx, TUBE_A.mouth);
					const t = cue[i];
					return (
						<Fade key={i} at={t - 50}>
							<TubeDrop x={x} y={y} h={GH} states={[{p: RACK.clear, at: -100}, {p: o.p, at: t, dur: 22}]} dropAt={i === 0 ? t - 44 : undefined} dropOut={t + 30} drops={i === 3 ? [t - 26, t - 12, K8.more + 10, K8.more + 26] : [t - 26, t - 12]} color="#e6eef4" label={i === 0 ? 'NaOH' : undefined} labelColor={C_OH} />
							<Note x={mx} y={y + GH + 34} text={o.t} size={24} color={o.c} anchor="middle" hand={false} at={t + 10} />
						</Fade>
					);
				})}
				<Note x={GRID[3][0] + 80} y={GRID[3][1] + GH + 70} text="excess NaOH: stays" size={26} color={C_OH} anchor="middle" at={K8.more + 30} />
				<Note x={40} y={1040} text="most metal hydroxides are insoluble" size={26} color={GREYX} hand={false} at={K8.most} out={K8.white} />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				{void K8.fresh}{void K8.dissolve}{void K8.no}
			</Overlay>
		</>
	);
};
/** The four hydroxide tubes, static and dimmed (scene 9 onwards). */
const OhTubes: React.FC<{o?: number}> = ({o = 0.4}) => (
	<g opacity={o}>
		{OH_TUBES.map((t, i) => <PicF key={i} p={t.p} x={GRID[i][0]} y={GRID[i][1]} h={GH} />)}
	</g>
);

// ---------- 9. Why this order ----------
const K9 = cues(sc('why-this-order'), {first: 'come first', silver: 'Silver and lead', solids: 'form solids', muddy: 'muddy', catching: 'Catching them', left: 'left'});
export const SceneOrder: React.FC = () => {
	const f = useCurrentFrame();
	const T: CT = merge(clDone(), allT(FAM.so, -1000, -1000), allT(FAM.fl, -1000, -1000), allT(FAM.oh.filter(x => x !== 'tagMg'), -1000), {
		e1s: {at: -1000, glow: K9.first, dim: -1000, undim: K9.first, to: 0.32}, e2s: {at: -1000, glow: K9.first + 10, dim: -1000, undim: K9.first, to: 0.32},
	});
	const tiles = [{x: 1290, t: 'Ag_2O', fill: PPT.ag2o, ink: '#fffdf8'}, {x: 1530, t: 'Pb(OH)_2', fill: PPT.white, ink: INK}];
	return (
		<>
			<Suspects st={{'Ag^{+}': {x: -1000, ux: K9.silver, g: [[K9.silver, K9.catching]]}, 'Pb^{2+}': {x: -1000, ux: K9.silver, g: [[K9.silver, K9.catching]]}, 'Ba^{2+}': {x: -1000}, 'Ca^{2+}': {faint: -1000}, 'Mg^{2+}': {g: [[K9.left, 600]]}, 'Cu^{2+}': {g: [[K9.left, 600]]}, 'Fe^{2+}': {g: [[K9.left, 600]]}, 'Fe^{3+}': {g: [[K9.left, 600]]}}} />
			<Heading text="Why this order?" at={4} size={56} />
			<Overlay>
				<OhTubes />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<Note x={1190} y={880} text="if Ag^{+} or Pb^{2+} were still there:" size={24} color={INK_SOFT} anchor="end" hand={false} at={K9.solids} />
				{tiles.map((tl, i) => {
					const a = smooth(clamp01((f - (K9.solids + i * 10)) / 20));
					if (a <= 0.01) return null;
					const y = 860 + (1 - a) * -80;
					const cr = prog(f, K9.catching + i * 6, 10);
					return (
						<g key={i} opacity={a * (1 - 0.5 * cr)}>
							<rect x={tl.x - 90} y={y} width={180} height={56} rx={10} fill={tl.fill} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
							<Sx x={tl.x} y={y + 38} text={tl.t} size={28} color={tl.ink} anchor="middle" weight={800} at={-1000} />
							{cr > 0.01 ? <line x1={tl.x - 96} y1={y + 60} x2={tl.x - 96 + 192 * cr} y2={y - 4} stroke="#c4432f" strokeWidth={6} strokeLinecap="round" /> : null}
						</g>
					);
				})}
				<Note x={1300} y={980} text="they would muddy the colours" size={28} color="#c4432f" anchor="middle" at={K9.muddy} />
				<AChip x={40} y={985} text="each no rules ions out" size={40} color={C_CL} at={K9.left - 10} />
			</Overlay>
		</>
	);
};

// ---------- 10. The iron two trap ----------
const K10 = cues(sc('iron-two-trap'), {watch: 'Watch the', green: 'green solid', air: 'sits in air', oxygen: 'oxygen slowly', takes: 'takes electrons', turning: 'turning it', fe3: 'iron three', minutes: 'few minutes', darkens: 'darkens', brown: 'brown', late: 'read it late', looks: 'looks like', read: 'Read the colour', away: 'away'});
const TILES10: [number, number][] = [[-0.5, 0.25], [-0.2, 0.32], [0.1, 0.28], [0.4, 0.3], [-0.35, 0.5], [-0.05, 0.52], [0.25, 0.5], [0.55, 0.48]];
export const SceneIronTrap: React.FC = () => {
	const f = useCurrentFrame();
	const TH = 700, TXc = 470, TYc = 200;
	const L = {cx: 1340, cy: 470, r: 210};
	const ck = {cx: 1010, cy: 300, r: 62};
	const sweep = clamp01((f - K10.minutes) / 70);
	const ang = -Math.PI / 2 + sweep * Math.PI * 1.6;
	return (
		<>
			<Suspects st={{...struck, 'Ba^{2+}': {x: -1000}, 'Ca^{2+}': {faint: -1000}, 'Fe^{2+}': {g: [[K10.watch, 700]]}, 'Fe^{3+}': {g: [[K10.looks, K10.read]]}}} />
			<Heading text="The iron(II) trap" at={4} size={56} color={C_OH} />
			<Overlay>
				<PicF p={RACK.feoh2} x={TXc} y={TYc} h={TH} />
				<Fade at={K10.brown - 10}><PicF p={RACK.brown} x={TXc} y={TYc} h={TH} /></Fade>
				<Note x={TXc + picW(RACK.feoh2, TH) / 2} y={TYc + TH + 50} text="green Fe(OH)_2" size={32} color={PPT.greenInk} anchor="middle" hand={false} at={K10.green} out={K10.brown} />
				<Note x={TXc + picW(RACK.feoh2, TH) / 2} y={TYc + TH + 50} text="a few minutes later" size={32} color="#7a4a1a" anchor="middle" at={K10.brown + 6} />
				<Fade at={K10.minutes - 10}>
					<circle cx={ck.cx} cy={ck.cy} r={ck.r} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<path d={`M${ck.cx},${ck.cy - ck.r + 8} A${ck.r - 8},${ck.r - 8} 0 ${sweep > 0.625 ? 1 : 0} 1 ${ck.cx + Math.cos(ang) * (ck.r - 8)},${ck.cy + Math.sin(ang) * (ck.r - 8)} L${ck.cx},${ck.cy} Z`} fill="#f2d39a" opacity={0.85} />
					<line x1={ck.cx} y1={ck.cy} x2={ck.cx + Math.cos(ang) * (ck.r - 12)} y2={ck.cy + Math.sin(ang) * (ck.r - 12)} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				</Fade>
				<Fade at={K10.air - 10}>
					<circle cx={L.cx} cy={L.cy} r={L.r} fill="#f3f6f2" stroke={INK} strokeWidth={5} />
					<clipPath id="trap-lens"><circle cx={L.cx} cy={L.cy} r={L.r - 4} /></clipPath>
					<g clipPath="url(#trap-lens)">
						{TILES10.map(([u, v], i) => {
							const b = smooth(clamp01((f - (K10.darkens - 10 + i * 5)) / 30)) * (i < 4 ? 1 : 0.35);
							return <rect key={i} x={L.cx + u * L.r - 22} y={L.cy + v * L.r - 14} width={44} height={28} rx={4} fill={hexMix(PPT.green, PPT.rust, b)} stroke={hexMix(PPT.greenInk, PPT.rustInk, b)} strokeWidth={2} />;
						})}
						{[[-0.45, -0.5], [0.0, -0.62], [0.42, -0.45], [-0.15, -0.25], [0.25, -0.12]].map(([u, v], i) => {
							const a = smooth(clamp01((f - (K10.oxygen + i * 9)) / 30));
							const d = smooth(clamp01((f - (K10.takes + i * 9)) / 30));
							const tx = L.cx + u * L.r, ty = L.cy + v * L.r;
							return a > 0.01 ? <Dot key={i} x={tx} y={(ty - L.r * 0.6) * (1 - a) + (ty + d * (L.r * 0.4)) * a} r={20} fill="#cfe3f2" ink="#2c4a7a" label="O_2" size={13} o={a * (1 - 0.7 * d)} /> : null;
						})}
					</g>
					<Sx x={L.cx} y={L.cy + L.r + 40} text="in air" size={30} color={INK_SOFT} anchor="middle" hand at={K10.air} />
				</Fade>
				<Note x={L.cx} y={L.cy + L.r + 100} text="Fe^{2+} → Fe^{3+} (oxidised by air)" size={34} color={INK} anchor="middle" hand={false} at={K10.turning} />
				<Note x={L.cx} y={L.cy + L.r + 160} text="read late, Fe^{2+} looks like Fe^{3+}" size={32} color="#c4432f" anchor="middle" hand={false} at={K10.late} />
				<AChip x={L.cx} y={L.cy + L.r + 200} text="read it at once" size={46} color={C_OH} anchor="middle" at={K10.away} />
				{void K10.fe3}{void K10.read}
			</Overlay>
		</>
	);
};

// ---------- 11. Complexes confirm ----------
const K11 = cues(sc('complexes-confirm'), {confirm: 'confirm with', excess: 'excess ammonia', copper: 'copper result', dissolves: 'solid dissolves', deep: 'deep blue', complex: 'ammonia complex', scn: 'thiocyanate ions', fresh: 'fresh portion', fe3: 'iron three', red: 'blood red', ironc: 'iron thiocyanate', module: 'Module 5', two: 'two different', alone: 'alone'});
export const cxBase = (): CT => merge(ohDone(), allT(FAM.cl, -1000, -1000), {tagMg: {at: -1000, dim: -1000, to: 0.32}});
export const SceneComplexes: React.FC = () => {
	const H1 = 290, Y1 = 345;
	const [m1] = tubePt(40, Y1, H1, TUBE_A.cx, TUBE_A.mouth);
	const BH = 210, bw = picW(BOTTLE, BH), BY = 715;
	const [lx, ly] = natPt(BOTTLE, 40, BY, BH, LABEL_A.cx, LABEL_A.cy);
	const FH = 250, FX = 200, FY = 705;
	const T: CT = merge(cxBase(), {
		n8cu: {at: -1000, glow: K11.copper, dim: -1000, undim: K11.copper, to: 0.32}, e11cu: {at: K11.excess}, n11cu: {at: K11.complex, glow: K11.complex, dim: K11.scn, to: 0.55},
		n8fe3: {at: -1000, glow: K11.fe3, dim: -1000, undim: K11.fe3, to: 0.32}, e11fe: {at: K11.scn}, n11fe: {at: K11.red, glow: K11.red},
	});
	return (
		<>
			<Suspects st={{...struck, 'Ba^{2+}': {x: -1000}, 'Ca^{2+}': {faint: -1000}, 'Cu^{2+}': {g: [[K11.excess, K11.scn]]}, 'Fe^{3+}': {g: [[K11.scn, 860]]}}} />
			<Heading text="Complexes confirm" at={4} size={56} color={C_CX} />
			<Overlay>
				<DimG at={K11.scn} to={0.4}>
					<TubeDrop x={40} y={Y1} h={H1} states={[{p: RACK.cuoh2, at: -100}]} dropAt={K11.excess - 10} dropOut={K11.deep + 20} drops={[K11.excess + 8, K11.excess + 24, K11.excess + 40, K11.copper + 30]} color="#d9cdee" label="NH_3" labelColor={C_CX} ds={0.7} />
					<Note x={m1} y={Y1 + H1 + 40} text="Cu(OH)_2" size={26} color={PPT.blueInk} anchor="middle" hand={false} at={-100} />
					<Fade at={K11.deep - 8}>
						<path d={`M${m1 + 100},${Y1 + 150} L${m1 + 150},${Y1 + 150}`} stroke={C_CX} strokeWidth={4} />
						<path d={`M${m1 + 140},${Y1 + 140} L${m1 + 152},${Y1 + 150} L${m1 + 140},${Y1 + 160}`} fill="none" stroke={C_CX} strokeWidth={4} />
						<PicF p={CU_DEEP} x={m1 + 160} y={Y1 + 6} h={H1} />
						<Note x={m1 + 160 + picW(CU_DEEP, H1) / 2} y={Y1 + H1 + 40} text="deep blue" size={26} color="#1d3fa8" anchor="middle" at={K11.deep + 6} />
					</Fade>
					<WrapLens cx={480} cy={470} r={105} at={K11.dissolves - 30} out={K11.module} metal={{label: 'Cu^{2+}', fill: PPT.blue, ink: PPT.blueInk, r: 24, size: 13}} lig={NH3} n={4} wrapAt={K11.dissolves} breakAt={K11.dissolves - 10} tile={{fill: PPT.blue, ink: PPT.blueInk}} tint={{color: '#2d4fc4', at: K11.deep}} title="[Cu(NH_3)_4]^{2+}" titleAt={K11.complex} />
				</DimG>
				<Fade at={K11.scn - 10}>
					<PicF p={BOTTLE} x={40} y={BY} h={BH} />
					<Sx x={lx} y={ly + 8} text="KSCN" size={24} color={INK} anchor="middle" weight={800} at={-1000} />
					<FallDrop x={40 + bw + 46} y0={FY - 40} y1={FY + 60} at={K11.fresh} color="#e8d7c2" />
					<FallDrop x={40 + bw + 46} y0={FY - 40} y1={FY + 60} at={K11.fresh + 16} color="#e8d7c2" />
				</Fade>
				<Fade at={K11.red - 8}>
					<PicF p={FE_DEEP} x={FX + 10} y={FY} h={FH} />
					<Note x={FX + 10 + picW(FE_DEEP, FH) / 2} y={FY + FH + 40} text="fresh Fe^{3+}: blood red" size={24} color="#a3141c" anchor="middle" hand={false} at={K11.red + 6} />
				</Fade>
								<WrapLens cx={480} cy={830} r={90} at={K11.scn} metal={{label: 'Fe^{3+}', fill: '#e9b48a', ink: '#7a3a14', r: 24, size: 13}} lig={SCN} n={1} wrapAt={K11.red - 20} tint={{color: '#b3141c', at: K11.red}} title="FeSCN^{2+}" titleAt={K11.ironc} />
				<AChip x={40} y={1020} text="Module 5: Fe^{3+} + SCN^{−} ⇌ FeSCN^{2+}" size={28} color={GREYX} hand={false} at={K11.module} />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<AChip x={1290} y={910} text="two kinds of chemistry agree" size={36} color={C_CX} at={K11.alone - 10} />
				{void K11.confirm}{void K11.two}
			</Overlay>
		</>
	);
};

// ---------- 12. The flowchart, and our sample ----------
const K12 = cues(sc('flowchart'), {flow: 'flowchart', chl: 'Chloride', sul: 'then sulfate', hyd: 'then hydroxide', fresh: 'fresh portion', no: 'Each no', yes: 'each yes', our: 'Our prep', nothing: 'nothing with', sulf: 'or sulfate', pale: 'pale blue', deep: 'deep blue', flame: 'bluegreen flame', copper: 'copper', mix: 'Mixtures', cation: 'cation'});
export const SceneFlowchart: React.FC = () => {
	const f = useCurrentFrame();
	const ids = CHART_IDS.filter(x => x !== 'q2');
	const fam = (k: keyof typeof FAM, t: number) => Object.fromEntries(FAM[k].map(id => [id, {at: -1000, dim: -1000, undim: t, to: 0.3}]));
	const T: CT = merge(allT(ids, -1000, -1000, 0.3), fam('cl', K12.chl), fam('so', K12.sul), fam('fl', K12.sul + 8), fam('oh', K12.hyd), fam('cx', K12.hyd + 8), {
		S: {at: -1000, dim: -1000, undim: K12.chl, to: 0.3, glow: K12.cation},
		n1n: {at: -1000, dim: -1000, undim: K12.chl, to: 0.3, glow: K12.nothing}, n2n: {at: -1000, dim: -1000, undim: K12.sul, to: 0.3, glow: K12.sulf},
		n8cu: {at: -1000, dim: -1000, undim: K12.hyd, to: 0.3, glow: K12.pale}, n11cu: {at: -1000, dim: -1000, undim: K12.hyd + 8, to: 0.3, glow: K12.copper},
	});
	const s = nodeC(CHART_N, 'S'), a = nodeC(CHART_N, 'n1n'), b = nodeC(CHART_N, 'n2n'), c = nodeC(CHART_N, 'n8cu'), d = nodeC(CHART_N, 'n11cu');
	const pts: [number, number, number][] = [[K12.our, s[0] - 300, s[1]], [K12.our + 20, s[0] - 300, s[1] + 2], [K12.nothing + 10, a[0] - 110, a[1]], [K12.sulf + 10, b[0] - 110, b[1]], [K12.pale - 14, 1590, 736], [K12.pale + 10, c[0] - 150, c[1]], [K12.deep + 10, d[0] - 150, d[1]]];
	const strike = Object.fromEntries(['Ba^{2+}', 'Ca^{2+}', 'Mg^{2+}', 'Pb^{2+}', 'Ag^{+}', 'Fe^{2+}', 'Fe^{3+}'].map(i => [i, {x: K12.copper}]));
	const HT = {x: 330, y: 520, h: 360};
	const [lx, ly] = tubePt(HT.x, HT.y, HT.h, 910, 600), [rx, ry] = tubePt(HT.x, HT.y, HT.h, 1086, 1632);
	return (
		<>
			<Suspects st={{...strike, 'Cu^{2+}': {g: [[K12.copper, 1100]]}}} />
			<Heading text="The cation flowchart" at={4} size={56} />
			<Overlay>
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<Token pts={pts} at={K12.our} label="our sample" labelOut={K12.nothing - 4} />
				<AChip x={40} y={240} text="each no rules ions out" size={34} color={C_CL} at={K12.no} />
				<AChip x={40} y={320} text="each yes points to fewer ions" size={34} color={C_SO} at={K12.yes} />
				<Fade at={K12.flame - 6}>
					<PicF p={FLAME.cu} x={70} y={HT.y} h={HT.h} />
					<Note x={70 + picW(FLAME.cu, HT.h) / 2} y={HT.y + HT.h + 40} text="blue-green flame" size={26} color="#1f8a7a" anchor="middle" hand={false} at={K12.flame} />
				</Fade>
				<Fade at={K12.copper - 6}>
					<PicF p={RACK.clear} x={HT.x} y={HT.y} h={HT.h} />
					<rect x={lx} y={ly} width={rx - lx} height={ry - ly} rx={(rx - lx) / 2} fill="#7fb2e6" opacity={0.3} />
					<AChip x={HT.x + picW(RACK.clear, HT.h) / 2} y={HT.y + HT.h + 14} text="Cu^{2+}" size={44} color={C_OH} hand={false} anchor="middle" at={K12.copper} />
				</Fade>
				{void f}{void K12.flow}{void K12.fresh}{void C_FL}{void C_CX}
			</Overlay>
		</>
	);
};

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {hold: 'hold the', chl: 'Chloride', sul: 'sulfate', hyd: 'hydroxide', flame: 'then flame', two: 'Two whites', silver: 'silver and lead', ba: 'Barium and calcium', splits: 'flame splits', blue: 'blue', brown: 'brown', green: 'green', white: 'white with', copper: 'copper', fe3: 'iron three', fe2: 'iron two', mg: 'magnesium', turns: 'green that turns', late: 'late'});
export const SceneAid: React.FC = () => {
	const COL = [250, 700, 1180, 1660];
	const Y = 300;
	const heads = [{t: 'Cl^{−}', at: K13.chl, c: C_CL}, {t: 'SO_4^{2−}', at: K13.sul, c: C_SO}, {t: 'OH^{−}', at: K13.hyd, c: C_OH}, {t: 'flame', at: K13.flame, c: C_FL}];
	const rows = [
		{sw: PPT.blue, t: 'pale blue: Cu^{2+}', a: K13.blue, b: K13.copper},
		{sw: PPT.rust, t: 'red-brown: Fe^{3+}', a: K13.brown, b: K13.fe3},
		{sw: PPT.green, t: 'green: Fe^{2+}', a: K13.green, b: K13.fe2},
		{sw: PPT.white, t: 'white: Mg^{2+}', a: K13.white, b: K13.mg},
	];
	return (
		<>
			<Heading text="Hold the order" at={4} size={56} />
			<Overlay>
				{heads.map((h, i) => (
					<g key={i}>
						<Note x={COL[i]} y={Y} text={h.t} size={h.t === 'flame' ? 76 : 70} color={h.c} anchor="middle" hand={h.t === 'flame'} at={h.at} />
						{i < 3 ? <Note x={(COL[i] + COL[i + 1]) / 2} y={Y - 6} text="→" size={60} color={INK_SOFT} anchor="middle" hand={false} at={heads[i + 1].at - 6} /> : null}
					</g>
				))}
				<Note x={COL[0]} y={Y + 100} text="two whites" size={38} color={INK_SOFT} anchor="middle" at={K13.two} />
				<Note x={COL[0]} y={Y + 160} text="Ag^{+}, Pb^{2+}" size={38} color={INK} anchor="middle" hand={false} at={K13.silver} />
				<Note x={COL[1]} y={Y + 160} text="Ba^{2+}, Ca^{2+}" size={38} color={INK} anchor="middle" hand={false} at={K13.ba} />
				<Note x={COL[3]} y={Y + 100} text="splits them" size={38} color={INK_SOFT} anchor="middle" at={K13.splits} />
				<Note x={COL[3]} y={Y + 160} text="Ba^{2+} green, Ca^{2+} red" size={30} color={INK} anchor="middle" hand={false} at={K13.splits + 8} />
				{rows.map((r, i) => (
					<g key={i}>
						<Fade at={r.a}><rect x={COL[2] - 190} y={Y + 70 + i * 70} width={64} height={44} rx={8} fill={r.sw} stroke={INK_SOFT} strokeWidth={2.5} /></Fade>
						<Note x={COL[2] - 110} y={Y + 104 + i * 70} text={r.t} size={32} color={INK} hand={false} at={r.b} />
					</g>
				))}
				<AChip x={960} y={760} text="green → brown = Fe^{2+} read late" size={52} color={C_OH} hand={false} anchor="middle" at={K13.late - 10} />
				{void K13.hold}{void K13.turns}{void vis}
			</Overlay>
		</>
	);
};
