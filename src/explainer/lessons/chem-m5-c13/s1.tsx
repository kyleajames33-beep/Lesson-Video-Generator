import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, BROWN, CAT_INK, Heading, PPT_Y, PPT_Y_INK, WATER_INK, sc} from './common';
import {AGCL, NOPPT, TUBE_CLEAR, TUBE_PPT} from './assets';
import {Arrow, ArcLink, Bottle, BOTTLE_W, Chip, CompCard, Fade, IonLens, LIon, LensFrame, MistakeChip, Overlay, PicH, Pieces, Ring, Sx, TEAL, VBracket, drift, platePt, pulseAt, smooth, tw, mw} from './parts';
import type {LensIon, Piece} from './parts';

// ---------- 1. Hook: two clear solutions, one yellow solid ----------
const H = 'hook';
const K1 = cues(sc(H), {two: 'two clear', ki: 'potassium iodide', pb: 'lead nitrate', add: 'Add a few drops', yellow: 'bright yellow solid', settles: 'slowly settles', neither: 'Neither bottle', where: 'where did the solid', left: "what's left", around: 'around it'});
const T1 = {x: 820, y: 200, h: 800};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K1.yellow, 60);
	const [dx, dy] = platePt(TUBE_CLEAR, T1.x, T1.y, T1.h, 0.5, 0.4);
	const tipY = platePt(TUBE_CLEAR, T1.x, T1.y, T1.h, 0.5, 0.07)[1];
	const r = rng(7);
	const specks = Array.from({length: 18}, () => ({dx: (r() - 0.5) * 34, sink: 0.5 + r() * 0.5, d: r() * 20}));
	const bw = BOTTLE_W(360);
	return (
		<>
			<Heading text="Two clear solutions. Where did the solid come from?" at={4} size={54} />
			<Overlay>
				<Bottle x={96} y={260} h={360} formula="KI(aq)" at={K1.two} pulse={K1.ki} />
				<Bottle x={320} y={260} h={360} formula="Pb(NO_3)_2(aq)" at={K1.two + 6} pulse={K1.pb} />
				<Sx x={96 + bw / 2} y={672} text="potassium iodide" size={30} color={INK} anchor="middle" hand at={K1.ki} />
				<Sx x={320 + bw / 2} y={672} text="lead nitrate" size={30} color={INK} anchor="middle" hand at={K1.pb} />
				<Sx x={96} y={740} text="both clear and colourless" size={34} color={INK_SOFT} hand at={K1.two + 20} />
				<PicH p={TUBE_CLEAR} x={T1.x} y={T1.y} h={T1.h} o={1 - q} />
				{q > 0.01 ? <PicH p={TUBE_PPT} x={T1.x} y={T1.y} h={T1.h} o={q} /> : null}
				{/* drops from the dropper */}
				{[0, 22, 44].map((d, i) => {
					const t = (f - K1.add - d) / 18;
					if (t < 0 || t > 1) return null;
					return <ellipse key={i} cx={dx} cy={tipY + (dy - tipY) * t} rx={5} ry={7} fill="#dfeaf1" stroke="#8aa6b8" strokeWidth={1.5} />;
				})}
				{/* yellow specks bloom where the drops land and sink */}
				{f >= K1.yellow ? specks.map((s, i) => {
					const t = Math.max(0, (f - K1.yellow - s.d) / 120);
					const y = dy + (T1.y + T1.h * 0.86 - dy) * smooth(t) * s.sink;
					const o = Math.min(1, t * 6) * (1 - prog(f, K1.yellow + 70, 50));
					return o > 0.01 ? <circle key={i} cx={dx + s.dx * Math.min(1, t * 3)} cy={y} r={4 + 3 * Math.min(1, t * 4)} fill={PPT_Y} stroke={PPT_Y_INK} strokeWidth={1} opacity={o} /> : null;
				}) : null}
				<Sx x={1060} y={380} text="a bright yellow solid appears" size={44} color={PPT_Y_INK} hand at={K1.yellow} />
				<Sx x={1060} y={436} text="and slowly settles" size={40} color={INK} hand at={K1.settles} />
				<Sx x={1060} y={560} text="neither bottle had anything yellow" size={40} color={INK} hand at={K1.neither} />
				<Sx x={1060} y={680} text="where did the solid come from?" size={46} color={AMBER_INK} hand at={K1.where} />
				<Sx x={1060} y={800} text="what's left in the liquid?" size={46} color={AMBER_INK} hand at={K1.left} />
				<Ring cx={dx} cy={T1.y + T1.h * 0.47} rx={44} ry={80} at={K1.left} color={AMBER} seed={4} width={5} />
				<Arrow x1={1050} y1={786} x2={dx + 52} y2={T1.y + T1.h * 0.5} at={K1.left + 6} color={AMBER_INK} width={4} />
				{void K1.around}
			</Overlay>
		</>
	);
};

// ---------- 2. What's really in each bottle: four kinds of ions ----------
const FI = 'four-ions';
const K2 = cues(sc(FI), {saw: 'As you saw', kiunits: 'K I units', kions: 'potassium ions and iodide ions', surrounded: 'each surrounded by water', sep: 'moving separately', pbions: 'lead ions and nitrate ions', mix: 'when you mix them', four: 'four kinds of ions', newthing: 'only new thing', partners: 'new partners', pbi: 'lead with iodide', kno: 'potassium with nitrate'});
const KI_IONS: LensIon[] = [{ion: 'K^{+}', u: -0.45, v: -0.35, ph: 0.3}, {ion: 'I^{-}', u: 0.1, v: -0.5, ph: 1.2}, {ion: 'K^{+}', u: 0.45, v: 0.05, ph: 2.1}, {ion: 'I^{-}', u: -0.4, v: 0.35, ph: 3.3}, {ion: 'K^{+}', u: 0.05, v: 0.5, ph: 4.4}, {ion: 'I^{-}', u: 0.05, v: 0.0, ph: 5.2}];
const PB_IONS: LensIon[] = [{ion: 'Pb^{2+}', u: -0.35, v: -0.25, ph: 0.8}, {ion: 'NO_3^{-}', u: 0.3, v: -0.45, ph: 1.9}, {ion: 'NO_3^{-}', u: 0.45, v: 0.2, ph: 2.6}, {ion: 'Pb^{2+}', u: 0.1, v: 0.45, ph: 3.7}, {ion: 'NO_3^{-}', u: -0.45, v: 0.35, ph: 4.9}, {ion: 'NO_3^{-}', u: 0.0, v: -0.02, ph: 5.8}];
export const MIX_IONS: LensIon[] = [
	{ion: 'Pb^{2+}', u: -0.32, v: -0.28, ph: 0.4}, {ion: 'I^{-}', u: 0.02, v: -0.5, ph: 1.1}, {ion: 'K^{+}', u: -0.34, v: 0.42, ph: 2.3}, {ion: 'NO_3^{-}', u: 0.12, v: 0.55, ph: 3.1},
	{ion: 'I^{-}', u: 0.45, v: -0.28, ph: 4.2}, {ion: 'Pb^{2+}', u: 0.52, v: 0.2, ph: 5.0}, {ion: 'K^{+}', u: -0.62, v: 0.02, ph: 0.9}, {ion: 'NO_3^{-}', u: -0.1, v: 0.12, ph: 1.7},
	{ion: 'I^{-}', u: -0.55, v: -0.55, ph: 2.8}, {ion: 'K^{+}', u: 0.3, v: -0.65, ph: 3.6}, {ion: 'NO_3^{-}', u: 0.62, v: -0.48, ph: 4.6}, {ion: 'I^{-}', u: 0.42, v: 0.6, ph: 5.5},
];
const MX = {cx: 1150, cy: 600, r: 300};
export const SceneFourIons: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K2.four - 10, 34));
	const kiC = {x: 470 + (MX.cx - 470) * m, y: 380 + (MX.cy - 380) * m};
	const pbC = {x: 470 + (MX.cx - 470) * m, y: 770 + (MX.cy - 770) * m};
	const at = (i: number): [number, number] => { const d = MIX_IONS[i]; const [ox, oy] = drift(f, d.ph); return [MX.cx + d.u * MX.r + ox, MX.cy + d.v * MX.r + oy]; };
	return (
		<>
			<Heading text="What's really in each bottle?" at={4} size={58} />
			<Overlay>
				<Bottle x={96} y={230} h={280} formula="KI(aq)" at={0} />
				<Bottle x={96} y={600} h={280} formula="Pb(NO_3)_2(aq)" at={0} />
				<MistakeChip x={660} y={190} text="KI units" size={32} at={K2.kiunits} out={K2.four - 20} note="separate ions in water" />
				<Fade at={0} out={K2.four + 20}>
					<g transform={`translate(${kiC.x - 470},${kiC.y - 380})`}><IonLens cx={470} cy={380} r={160} at={K2.kions} ions={KI_IONS} title="potassium iodide solution" titleAt={K2.surrounded} scale={0.9} /></g>
					<g transform={`translate(${pbC.x - 470},${pbC.y - 770})`}><IonLens cx={470} cy={770} r={160} at={K2.pbions} ions={PB_IONS} title="lead nitrate solution" titleAt={K2.pbions + 10} scale={0.9} /></g>
				</Fade>
				<IonLens cx={MX.cx} cy={MX.cy} r={MX.r} at={K2.four + 6} ions={MIX_IONS} title="mixed: four kinds of ion" titleAt={K2.four + 16} />
				<Sx x={700} y={540} text="each surrounded by water," size={34} color={WATER_INK} hand at={K2.surrounded} out={K2.mix} />
				<Sx x={700} y={584} text="moving separately" size={34} color={WATER_INK} hand at={K2.sep} out={K2.mix} />
				{/* new partners */}
				{f >= K2.partners ? <ArcLink a={at(0)} b={at(1)} at={K2.pbi} bow={-50} color={AMBER_INK} /> : null}
				{f >= K2.partners ? <ArcLink a={at(2)} b={at(3)} at={K2.kno} bow={50} color={AMBER_INK} /> : null}
				<Sx x={1490} y={350} text="new partners?" size={42} color={AMBER_INK} hand at={K2.partners} />
				<Sx x={1490} y={420} text="lead with iodide?" size={36} color={INK} hand at={K2.pbi} />
				<Sx x={1490} y={470} text="potassium with nitrate?" size={36} color={INK} hand at={K2.kno} />
				{void K2.saw}{void K2.newthing}{void CAT_INK}{void AN_INK}
			</Overlay>
		</>
	);
};

// ---------- 3. The precipitate and the spectators ----------
const PS = 'precipitate-spectators';
const K3 = cues(sc(PS), {attract: 'attract each other', lock: 'lock into a solid lattice', comes: 'comes out of the solution', ppt: 'is a precipitate', potn: 'Potassium and nitrate', stay: 'stay dissolved', nopart: 'take no part', spect: 'spectator ions', after: 'after mixing', solid: 'solid lead iodide', still: 'still dissolved'});
const L3 = {cx: 800, cy: 560, r: 320};
const PB_SET = [{ion: 'Pb^{2+}', u: -0.4, v: -0.3, ph: 0.4, slot: [0, 0]}, {ion: 'Pb^{2+}', u: 0.45, v: -0.1, ph: 2.4, slot: [0, 1]}, {ion: 'I^{-}', u: -0.05, v: -0.55, ph: 1.1, slot: [-1, 0]}, {ion: 'I^{-}', u: 0.5, v: -0.5, ph: 3.1, slot: [1, 0]}, {ion: 'I^{-}', u: -0.6, v: 0.15, ph: 4.2, slot: [-1, 1]}, {ion: 'I^{-}', u: 0.2, v: 0.25, ph: 5.1, slot: [1, 1]}];
const SPECT: LensIon[] = [{ion: 'K^{+}', u: -0.55, v: -0.55, ph: 0.9}, {ion: 'NO_3^{-}', u: 0.1, v: -0.3, ph: 1.7}, {ion: 'K^{+}', u: 0.62, v: 0.2, ph: 2.8}, {ion: 'NO_3^{-}', u: -0.25, v: 0.0, ph: 3.6}, {ion: 'K^{+}', u: -0.65, v: 0.45, ph: 4.6}, {ion: 'NO_3^{-}', u: 0.6, v: -0.55, ph: 5.5}];
export const ScenePrecipitate: React.FC = () => {
	const f = useCurrentFrame();
	const conv = smooth(prog(f, K3.attract, K3.lock - K3.attract));
	const shed = prog(f, K3.lock, 30);
	const sink = smooth(prog(f, K3.comes - 10, 60));
	const grey = 0.75 * prog(f, K3.spect, 20);
	const ccx = L3.cx, ccy = L3.cy + L3.r * (0.15 + 0.45 * sink);
	const tubeS = pulseAt(f, K3.ppt, 0.06, 26);
	return (
		<>
			<Heading text="The precipitate and the spectators" at={4} size={58} />
			<Overlay>
				<g transform={`translate(185,580) scale(${tubeS}) translate(-185,-580)`}><PicH p={TUBE_PPT} x={120} y={230} h={700} /></g>
				<IonLens cx={L3.cx} cy={L3.cy} r={L3.r} at={0} ions={SPECT.map(d => ({...d, grey}))}>
					{PB_SET.map((d, i) => {
						const [ox, oy] = drift(f, d.ph);
						const fx = L3.cx + d.u * L3.r + ox, fy = L3.cy + d.v * L3.r + oy;
						const tx = ccx + d.slot[0] * 60, ty = ccy + (d.slot[1] - 0.5) * 62;
						const x = fx + (tx - fx) * conv, y = fy + (ty - fy) * conv;
						const yellow = prog(f, K3.lock + 10, 20);
						return <LIon key={i} x={x} y={y} ion={d.ion} shell={1 - shed} fill={yellow > 0.5 ? PPT_Y : undefined} />;
					})}
				</IonLens>
				<Sx x={L3.cx} y={L3.cy + L3.r + 44} text="lead iodide, PbI_2: yellow solid" size={34} color={PPT_Y_INK} anchor="middle" weight={700} at={K3.lock + 20} />
				<Sx x={1200} y={300} text="precipitate:" size={46} color={PPT_Y_INK} weight={800} at={K3.ppt} />
				<Sx x={1200} y={346} text="a solid that forms out of a" size={36} color={INK} hand at={K3.ppt + 6} />
				<Sx x={1200} y={388} text="solution when ions meet" size={36} color={INK} hand at={K3.ppt + 12} />
				<Sx x={1200} y={480} text="spectator ions:" size={46} color={INK_SOFT} weight={800} at={K3.spect} />
				<Sx x={1200} y={526} text="stay dissolved, take no part" size={36} color={INK} hand at={K3.spect + 6} />
				<CompCard x={1200} y={590} w={600} h={230} title="after mixing, the tube holds:" at={K3.after} lines={[
					{t: 'solid: PbI_2 (yellow)', at: K3.solid, color: PPT_Y_INK},
					{t: 'dissolved: K^{+}, NO_3^{-}', at: K3.still},
				]} />
				<MistakeChip x={1200} y={870} text="every ionic compound dissolves in water" size={28} at={K3.solid + 20} />
				{void K3.potn}{void K3.stay}{void K3.nopart}{void LensFrame}
			</Overlay>
		</>
	);
};

// ---------- 4. Where the rules come from ----------
const RO = 'rules-origin';
const K4 = cues(sc(RO), {how: 'how could you know', mixed: 'Chemists mixed', recorded: 'recorded which ones', patterns: 'the patterns they found', rules: 'solubility rules', first: 'a first prediction', practical: 'practical video', yourself: "you'll find them"});
const CATS = ['Na^{+}', 'Ca^{2+}', 'Ba^{2+}', 'Pb^{2+}', 'Ag^{+}'];
const ANS = ['Cl^{-}', 'I^{-}', 'SO_4^{2-}', 'CO_3^{2-}', 'OH^{-}'];
type Cell = 'clear' | 'slight' | string;
const W = '#ffffff', PY = '#f2e48a';
const GRID: Cell[][] = [
	['clear', 'clear', 'clear', 'clear', 'clear'],
	['clear', 'clear', 'slight', W, 'slight'],
	['clear', 'clear', W, W, 'clear'],
	['slight', PPT_Y, W, W, W],
	[W, PY, 'slight', PY, BROWN],
];
const G4 = {x: 660, y: 300, c: 116};
export const SceneRulesOrigin: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Where the rules come from" at={4} size={58} />
			<Overlay>
				<Fade at={K4.mixed - 10}><PicH p={NOPPT} x={110} y={330} h={300} /></Fade>
				<Fade at={K4.mixed}><PicH p={AGCL} x={300} y={330} h={300} /></Fade>
				<Sx x={110} y={690} text="mix pairs, look for a solid" size={32} color={INK_SOFT} hand at={K4.mixed + 6} />
				{ANS.map((a, j) => <Sx key={a} x={G4.x + j * G4.c + G4.c / 2} y={G4.y - 22} text={a} size={30} color={AN_INK} anchor="middle" weight={800} at={K4.mixed - 6} />)}
				{CATS.map((c, i) => <Sx key={c} x={G4.x - 18} y={G4.y + i * G4.c + G4.c / 2 + 10} text={c} size={30} color={CAT_INK} anchor="end" weight={800} at={K4.mixed - 6} />)}
				{GRID.map((row, i) => row.map((cell, j) => {
					const at = K4.mixed + (i * 5 + j) * 5;
					const p = prog(f, at, 10);
					if (p <= 0.01) return null;
					const cx = G4.x + j * G4.c + G4.c / 2, cy = G4.y + i * G4.c + G4.c / 2;
					return (
						<g key={`${i}-${j}`} opacity={p}>
							<circle cx={cx} cy={cy} r={44} fill="#e4eef5" stroke={INK_SOFT} strokeWidth={3} />
							{cell === 'slight' ? [[-10, -6], [10, -4], [0, 10]].map(([dx, dy], k) => <circle key={k} cx={cx + dx} cy={cy + dy} r={14} fill="#ffffff" opacity={0.75} />) : null}
							{cell !== 'clear' && cell !== 'slight' ? <circle cx={cx} cy={cy} r={28 * p} fill={cell} stroke={INK} strokeWidth={2.5} /> : null}
						</g>
					);
				}))}
				<Fade at={K4.rules}><rect x={G4.x - 120} y={G4.y + 6} width={5 * G4.c + 130} height={G4.c - 12} rx={30} fill="none" stroke={TEAL} strokeWidth={5} /></Fade>
				<Sx x={1290} y={360} text="pattern: sodium salts all dissolve" size={36} color={TEAL} hand at={K4.rules + 6} />
				<Sx x={1290} y={440} text="the patterns = solubility rules," size={36} color={INK} hand at={K4.rules} />
				<Sx x={1290} y={484} text="a first prediction from experiments" size={36} color={INK} hand at={K4.first} />
				<Fade at={K4.patterns}>
					<circle cx={1310} cy={600} r={22} fill="#e4eef5" stroke={INK_SOFT} strokeWidth={3} /><Sx x={1350} y={612} text="no solid" size={32} color={INK} hand at={-1000} />
					<circle cx={1310} cy={666} r={22} fill="#e4eef5" stroke={INK_SOFT} strokeWidth={3} /><circle cx={1310} cy={666} r={14} fill={W} stroke={INK} strokeWidth={2} /><Sx x={1350} y={678} text="solid (its real colour)" size={32} color={INK} hand at={-1000} />
					<circle cx={1310} cy={732} r={22} fill="#e4eef5" stroke={INK_SOFT} strokeWidth={3} />{[[-6, -3], [6, -2], [0, 6]].map(([dx, dy], k) => <circle key={k} cx={1310 + dx} cy={732 + dy} r={8} fill="#ffffff" opacity={0.75} />)}<Sx x={1350} y={744} text="slight cloud" size={32} color={INK} hand at={-1000} />
				</Fade>
				<Chip x={660} y={948} w={760} text="Practical video: find the rules by experiment" size={34} color={TEAL} at={K4.practical} />
				<Chip x={1440} y={948} w={150} text="later" size={34} color={AMBER_INK} at={K4.practical + 10} />
				{void K4.how}{void K4.recorded}{void K4.yourself}{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 5. The rules: NAGSAG ----------
const NG = 'nagsag';
const K5 = cues(sc(NG), {learn: 'version to learn', nag: 'NAGSAG', n: 'Nitrates', a1: 'Ammonium', g1: ['Group 1', 1], always: 'always soluble', s: 'Then Sulfates', baPb: 'barium', caAg: 'calcium and silver', slightly: 'slightly soluble', ac: 'Acetates', g17: 'Group 17', halides: 'the halides', agpb: 'silver and lead', carb: 'carbonates and hydroxides', mostly: 'mostly insoluble', unless: "unless it's paired", baoh: 'Barium hydroxide', dissolves: 'it dissolves'});
const RX = 220, RS = 36;
export const SceneNagsag: React.FC = () => {
	const f = useCurrentFrame();
	const letters: [string, number, number][] = [['N', 290, K5.n], ['A', 372, K5.a1], ['G', 454, K5.g1], ['S', 546, K5.s], ['A', 676, K5.ac], ['G', 758, K5.g17]];
	const rows: [number, Piece[]][] = [
		[290, [{t: 'nitrates (NO_3^{-}): soluble', at: K5.n}]],
		[372, [{t: 'ammonium (NH_4^{+}): soluble', at: K5.a1}]],
		[454, [{t: 'Group 1 (Na^{+}, K^{+}): soluble', at: K5.g1}]],
		[546, [{t: 'sulfates (SO_4^{2-}): soluble,', at: K5.s}, {t: 'except Ba^{2+}, Sr^{2+}, Pb^{2+} (insoluble)', at: K5.baPb, color: AMBER_INK}]],
		[592, [{t: 'and Ca^{2+}, Ag^{+} (only slightly soluble)', at: K5.caAg, color: AMBER_INK}]],
		[676, [{t: 'acetates (CH_3COO^{-}): soluble', at: K5.ac}]],
		[758, [{t: 'Group 17, halides (Cl^{-}, Br^{-}, I^{-}): soluble,', at: K5.g17}, {t: 'except Ag^{+}, Pb^{2+}', at: K5.agpb, color: AMBER_INK}]],
	];
	const w3 = Math.max(mw('Group 1 (Na^{+}, K^{+}): soluble', RS), mw('ammonium (NH_4^{+}): soluble', RS), mw('nitrates (NO_3^{-}): soluble', RS));
	return (
		<>
			<Heading text="The rules to learn: NAGSAG" at={4} size={58} />
			<Overlay>
				{letters.map(([l, y, at], i) => {
					const s = pulseAt(f, at, 0.3, 24);
					return <g key={i} transform={`translate(140,${y - 20}) scale(${s}) translate(-140,${-(y - 20)})`}><Sx x={140} y={y + 6} text={l} size={62} color={TEAL} anchor="middle" weight={800} at={K5.nag + i * 6} /></g>;
				})}
				{rows.map(([y, items], i) => <Pieces key={i} x={i === 4 ? RX + 30 : RX} y={y} items={items} size={RS} />)}
				<VBracket x={RX + w3 + 24} y1={258} y2={466} at={K5.always} />
				<Sx x={RX + w3 + 70} y={372} text="almost always soluble" size={40} color={TEAL} hand at={K5.always + 6} />
				<Sx x={RX + 30} y={804} text="(PbCl_2: only slightly soluble)" size={28} color={INK_SOFT} weight={600} at={K5.agpb + 20} />
				<Fade at={K5.carb - 10}>
					<rect x={96} y={838} width={1728} height={170} rx={20} fill="#f6f1e7" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
				</Fade>
				<Pieces x={126} y={892} size={32} items={[{t: 'Mostly insoluble: carbonates (CO_3^{2-}), phosphates, hydroxides (OH^{-}), sulfides', at: K5.carb}]} />
				<Pieces x={126} y={944} size={32} items={[{t: 'unless with Group 1 or NH_4^{+}.', at: K5.unless, color: TEAL}, {t: 'Ba(OH)_2 soluble, Ca(OH)_2 slightly; CaS, SrS, BaS soluble.', at: K5.baoh, color: AMBER_INK}]} />
				{void K5.learn}{void K5.slightly}{void K5.halides}{void K5.mostly}{void K5.dissolves}
			</Overlay>
		</>
	);
};
